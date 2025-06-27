const axios = require('axios');

const DEEPSEEK_API_KEY = '';
const DEEPSEEK_API_URL = 'https://api.deepseek.com/v1/chat/completions';

exports.summarize = async function(req, res) {
  const alerts = req.body.alerts;
  if (!alerts || !Array.isArray(alerts) || alerts.length === 0) {
    return res.status(400).json({ error: 'No alerts provided' });
  }

  // Debug: Log the alerts being sent
  console.log('Summarizing alerts:', JSON.stringify(alerts, null, 2));

  const prompt = alerts.map(a => `Title: ${a.title}\nDescription: ${a.description}`).join('\n\n');
  const messages = [
    { role: 'system', content: 'You are a helpful assistant that summarizes transit alerts for a route.' },
    { role: 'user', content: `Summarize these alerts for a transit route in 1-2 sentences:\n${prompt}` }
  ];

  try {
    const response = await axios.post(DEEPSEEK_API_URL, {
      model: 'deepseek-chat',
      messages
    }, {
      headers: {
        'Authorization': `Bearer ${DEEPSEEK_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    // Debug: Log the DeepSeek API response
    console.log('DeepSeek API response:', JSON.stringify(response.data, null, 2));
    const summary = response.data.choices[0].message.content;
    res.json({ summary });
  } catch (err) {
    // Debug: Log the error from DeepSeek
    if (err.response) {
      console.error('DeepSeek API error response:', JSON.stringify(err.response.data, null, 2));
    } else {
      console.error('DeepSeek API error:', err.message);
    }
    res.status(500).json({ error: 'Failed to summarize alerts', details: err.message, deepseek: err.response ? err.response.data : undefined });
  }
}; 