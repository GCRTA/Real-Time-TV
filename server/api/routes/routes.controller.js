'use strict';

var request = require('request');

// Get list of nearby routes
exports.nearby = function (req, res) {
  const {lat, lon, max_distance} = req.query;

  // Return mock data in development mode
  if (process.env.NODE_ENV !== 'production') {
    console.log('Returning mock data');
    const mockRoutes = [
        {
            "alerts": [],
            "compact_display_short_name": {
                "boxed_text": "",
                "elements": [
                    "vehicle-bus-gilligtrolley",
                    "",
                    null
                ],
                "route_name_redundancy": false
            },
            "fares": [
                {
                    "fare_media_type": 0,
                    "price_max": {
                        "currency_code": "USD",
                        "symbol": "$",
                        "text": "$ 2.50",
                        "value": 2.5
                    },
                    "price_min": {
                        "currency_code": "USD",
                        "symbol": "$",
                        "text": "$ 2.50",
                        "value": 2.5
                    }
                },
                {
                    "fare_media_type": 1,
                    "price_max": {
                        "currency_code": "USD",
                        "symbol": "$",
                        "text": "$ 2.50",
                        "value": 2.5
                    },
                    "price_min": {
                        "currency_code": "USD",
                        "symbol": "$",
                        "text": "$ 2.50",
                        "value": 2.5
                    }
                },
                {
                    "fare_media_type": 4,
                    "price_max": {
                        "currency_code": "USD",
                        "symbol": "$",
                        "text": "$ 2.50",
                        "value": 2.5
                    },
                    "price_min": {
                        "currency_code": "USD",
                        "symbol": "$",
                        "text": "$ 2.50",
                        "value": 2.5
                    }
                }
            ],
            "global_route_id": "GCRTA:193468",
            "itineraries": [
                {
                    "branch_code": "",
                    "closest_stop": {
                        "global_stop_id": "GCRTA:48966",
                        "location_type": 0,
                        "parent_station": null,
                        "parent_station_global_stop_id": null,
                        "route_type": 3,
                        "rt_stop_id": "08957",
                        "stop_code": "08957",
                        "stop_lat": 41.50059378026298,
                        "stop_lon": -81.69949332052684,
                        "stop_name": "W 6th St / Johnson Ct",
                        "wheelchair_boarding": 0
                    },
                    "direction_headsign": "B Line Trolley Loop",
                    "direction_id": 0,
                    "headsign": "B Line Trolley Loop",
                    "merged_headsign": "B Line Trolley Loop",
                    "schedule_items": [
                        {
                            "departure_time": 1750862880,
                            "is_cancelled": false,
                            "is_real_time": false,
                            "rt_trip_id": "18601130",
                            "scheduled_departure_time": 1750862880,
                            "trip_search_key": "GCRTA:48850813:209:2:16",
                            "wheelchair_accessible": 1
                        },
                        {
                            "departure_time": 1750863780,
                            "is_cancelled": false,
                            "is_real_time": false,
                            "rt_trip_id": "18601180",
                            "scheduled_departure_time": 1750863780,
                            "trip_search_key": "GCRTA:48850813:209:2:17",
                            "wheelchair_accessible": 1
                        },
                        {
                            "departure_time": 1750864680,
                            "is_cancelled": false,
                            "is_real_time": false,
                            "rt_trip_id": "18601128",
                            "scheduled_departure_time": 1750864680,
                            "trip_search_key": "GCRTA:48850813:209:2:18",
                            "wheelchair_accessible": 1
                        }
                    ]
                },
                {
                    "branch_code": "",
                    "closest_stop": {
                        "global_stop_id": "GCRTA:48966",
                        "location_type": 0,
                        "parent_station": null,
                        "parent_station_global_stop_id": null,
                        "route_type": 3,
                        "rt_stop_id": "08957",
                        "stop_code": "08957",
                        "stop_lat": 41.50059378026298,
                        "stop_lon": -81.69949332052684,
                        "stop_name": "W 6th St / Johnson Ct",
                        "wheelchair_boarding": 0
                    },
                    "direction_headsign": "B Line Trolley Loop",
                    "direction_id": 1,
                    "headsign": "B Line Trolley Loop",
                    "merged_headsign": "B Line Trolley Loop",
                    "schedule_items": []
                }
            ],
            "mode_name": "Bus",
            "real_time_route_id": "62",
            "route_color": "fec00f",
            "route_display_short_name": {
                "boxed_text": "",
                "elements": [
                    "vehicle-bus-gilligtrolley",
                    "B-Line",
                    null
                ],
                "route_name_redundancy": true
            },
            "route_image": "",
            "route_long_name": "",
            "route_network_id": "GCRTA|Cleveland",
            "route_network_name": "GCRTA",
            "route_short_name": "Trolley",
            "route_text_color": "000000",
            "route_timezone": "America/New_York",
            "route_type": 3,
            "sorting_key": "Trolley",
            "tts_long_name": "",
            "tts_short_name": "Trolley",
            "vehicle": {
                "image": "vehicle-bus-gilligtrolley",
                "name": "bus",
                "name_inflection": "n"
            }
        },
        {
            "alerts": [
                {
                    "created_at": 1738926300,
                    "description": "Effective April 17, 24/7 single-track operations will begin at W.117-Madison and Triskett stations for rehabilitation of the eastbound bridge over W.117th Street. Boarding and alighting at W. 117-Madison and Triskett stations will take place on the south side of the platforms.",
                    "effect": "MODIFIED_SERVICE",
                    "severity": "Info",
                    "title": "Effective April 17, 24/7 single-track operations will begin at W.117-Madison and Triskett stations"
                },
                {
                    "created_at": 1735326900,
                    "description": "The Red Line W.117–Madison Station closes July 17, 2024 until further notice. All other Red Line stations remain in service. Bus service at W.117–Madison: #25, east-west; #78 north-south; and the #26-26A on Detroit Ave., approximately one-half mile north of the station.",
                    "effect": "NO_SERVICE",
                    "severity": "Severe",
                    "title": "The Red Line W.117–Madison Station closes July 17, 2024 until further notice."
                },
                {
                    "created_at": 1746198780,
                    "description": "Effective Monday, February 17, 2025, Red, Blue, and Green Line riders heading westbound into and out of Tower City will utilize the Track 7 platform until further notice.\n\nThe elevator and stairway leading to Track 7 can be found on the Public Square Level (M2) of Tower City Center.",
                    "effect": "STOP_MOVED",
                    "severity": "Warning",
                    "title": "Red, Blue, and Green Line trains will start using the Track 7 platform at Tower City on Monday, Feb. 17."
                }
            ],
            "compact_display_short_name": {
                "boxed_text": "",
                "elements": [
                    null,
                    "Red",
                    null
                ],
                "route_name_redundancy": false
            },
            "fares": [
                {
                    "fare_media_type": 0,
                    "price_max": {
                        "currency_code": "USD",
                        "symbol": "$",
                        "text": "$ 2.50",
                        "value": 2.5
                    },
                    "price_min": {
                        "currency_code": "USD",
                        "symbol": "$",
                        "text": "$ 2.50",
                        "value": 2.5
                    }
                },
                {
                    "fare_media_type": 1,
                    "price_max": {
                        "currency_code": "USD",
                        "symbol": "$",
                        "text": "$ 2.50",
                        "value": 2.5
                    },
                    "price_min": {
                        "currency_code": "USD",
                        "symbol": "$",
                        "text": "$ 2.50",
                        "value": 2.5
                    }
                },
                {
                    "fare_media_type": 4,
                    "price_max": {
                        "currency_code": "USD",
                        "symbol": "$",
                        "text": "$ 2.50",
                        "value": 2.5
                    },
                    "price_min": {
                        "currency_code": "USD",
                        "symbol": "$",
                        "text": "$ 2.50",
                        "value": 2.5
                    }
                }
            ],
            "global_route_id": "GCRTA:32021",
            "itineraries": [
                {
                    "branch_code": "",
                    "closest_stop": {
                        "global_stop_id": "GCRTA:49175",
                        "location_type": 0,
                        "parent_station": {
                            "global_stop_id": "GCRTA:31146",
                            "location_type": 1,
                            "rt_stop_id": "place_tcc",
                            "station_code": "",
                            "station_name": "Tower City-Public Sq Station"
                        },
                        "parent_station_global_stop_id": "GCRTA:31146",
                        "route_type": 1,
                        "rt_stop_id": "29002",
                        "stop_code": "29002",
                        "stop_lat": 41.49720334259818,
                        "stop_lon": -81.69432222859776,
                        "stop_name": "Tower City Station",
                        "wheelchair_boarding": 0
                    },
                    "direction_headsign": "Stokes / Windermere",
                    "direction_id": 0,
                    "headsign": "Stokes / Windermere",
                    "merged_headsign": "Stokes / Windermere",
                    "schedule_items": [
                        {
                            "departure_time": 1750793083,
                            "is_cancelled": false,
                            "is_real_time": true,
                            "rt_trip_id": "18660814",
                            "scheduled_departure_time": 1750792800,
                            "trip_search_key": "GCRTA:48668005:227:22:44",
                            "wheelchair_accessible": 0
                        },
                        {
                            "departure_time": 1750793700,
                            "is_cancelled": false,
                            "is_real_time": false,
                            "rt_trip_id": "18660815",
                            "scheduled_departure_time": 1750793700,
                            "trip_search_key": "GCRTA:48668005:227:22:45",
                            "wheelchair_accessible": 1
                        },
                        {
                            "departure_time": 1750794744,
                            "is_cancelled": false,
                            "is_real_time": true,
                            "rt_trip_id": "18660816",
                            "scheduled_departure_time": 1750794600,
                            "trip_search_key": "GCRTA:48668005:227:22:46",
                            "wheelchair_accessible": 0
                        }
                    ]
                },
                {
                    "branch_code": "",
                    "closest_stop": {
                        "global_stop_id": "GCRTA:49156",
                        "location_type": 0,
                        "parent_station": {
                            "global_stop_id": "GCRTA:31146",
                            "location_type": 1,
                            "rt_stop_id": "place_tcc",
                            "station_code": "",
                            "station_name": "Tower City-Public Sq Station"
                        },
                        "parent_station_global_stop_id": "GCRTA:31146",
                        "route_type": 1,
                        "rt_stop_id": "29003",
                        "stop_code": "29003",
                        "stop_lat": 41.49775192800283,
                        "stop_lon": -81.69425927617428,
                        "stop_name": "Tower City Station",
                        "wheelchair_boarding": 0
                    },
                    "direction_headsign": "Airport",
                    "direction_id": 1,
                    "headsign": "Airport",
                    "merged_headsign": "Airport",
                    "schedule_items": [
                        {
                            "departure_time": 1750793251,
                            "is_cancelled": false,
                            "is_real_time": true,
                            "rt_trip_id": "18660732",
                            "scheduled_departure_time": 1750793220,
                            "trip_search_key": "GCRTA:48668005:226:22:48",
                            "wheelchair_accessible": 0
                        },
                        {
                            "departure_time": 1750794120,
                            "is_cancelled": false,
                            "is_real_time": false,
                            "rt_trip_id": "18660733",
                            "scheduled_departure_time": 1750794120,
                            "trip_search_key": "GCRTA:48668005:226:22:49",
                            "wheelchair_accessible": 1
                        },
                        {
                            "departure_time": 1750795020,
                            "is_cancelled": false,
                            "is_real_time": false,
                            "rt_trip_id": "18660734",
                            "scheduled_departure_time": 1750795020,
                            "trip_search_key": "GCRTA:48668005:226:22:50",
                            "wheelchair_accessible": 1
                        }
                    ]
                }
            ],
            "mode_name": "Subway",
            "real_time_route_id": "66",
            "route_color": "d7182a",
            "route_display_short_name": {
                "boxed_text": "",
                "elements": [
                    "vehicle-rail-a650",
                    "",
                    null
                ],
                "route_name_redundancy": true
            },
            "route_image": "",
            "route_long_name": "",
            "route_network_id": "GCRTA|Cleveland",
            "route_network_name": "GCRTA",
            "route_short_name": "Red",
            "route_text_color": "ffffff",
            "route_timezone": "America/New_York",
            "route_type": 1,
            "sorting_key": "Red",
            "tts_long_name": "",
            "tts_short_name": "red line",
            "vehicle": {
                "image": "vehicle-rail-a650",
                "name": "train",
                "name_inflection": "n"
            }
    },
      {
        "alerts": [
            {
                "created_at": 1746198780,
                "description": "Effective Monday, February 17, 2025, Red, Blue, and Green Line riders heading westbound into and out of Tower City will utilize the Track 7 platform until further notice.\n\nThe elevator and stairway leading to Track 7 can be found on the Public Square Level (M2) of Tower City Center.",
                "effect": "STOP_MOVED",
                "severity": "Warning",
                "title": "Red, Blue, and Green Line trains will start using the Track 7 platform at Tower City on Monday, Feb. 17."
            },
            {
                "created_at": 1748853420,
                "description": "The East 79th Blue/Green Line station closes June 9, 2025 and will remain closed for 12-14 months for improvements to be made.\n\nThe #2 East 79th Street bus route will continue to serve the station on weekdays. Seven-day RTA routes in the vicinity include the Red Line and the #14-#14A Kinsman bus route.\n\nCustomers of the East 79th Blue/Green Line station can call 216-621-9500 to access the RTA Community Connection Line to learn about alternatives.",
                "effect": "REDUCED_SERVICE",
                "severity": "Warning",
                "title": "The East 79th Blue/Green Line station closes June 9, 2025"
            }
        ],
        "compact_display_short_name": {
            "boxed_text": "",
            "elements": [
                "san-diego-trolley",
                "",
                null
            ],
            "route_name_redundancy": false
        },
        "fares": [
            {
                "fare_media_type": 0,
                "price_max": {
                    "currency_code": "USD",
                    "symbol": "$",
                    "text": "$ 2.50",
                    "value": 2.5
                },
                "price_min": {
                    "currency_code": "USD",
                    "symbol": "$",
                    "text": "$ 2.50",
                    "value": 2.5
                }
            },
            {
                "fare_media_type": 1,
                "price_max": {
                    "currency_code": "USD",
                    "symbol": "$",
                    "text": "$ 2.50",
                    "value": 2.5
                },
                "price_min": {
                    "currency_code": "USD",
                    "symbol": "$",
                    "text": "$ 2.50",
                    "value": 2.5
                }
            },
            {
                "fare_media_type": 4,
                "price_max": {
                    "currency_code": "USD",
                    "symbol": "$",
                    "text": "$ 2.50",
                    "value": 2.5
                },
                "price_min": {
                    "currency_code": "USD",
                    "symbol": "$",
                    "text": "$ 2.50",
                    "value": 2.5
                }
            }
        ],
        "global_route_id": "GCRTA:15348",
        "itineraries": [
            {
                "branch_code": "",
                "closest_stop": {
                    "global_stop_id": "GCRTA:52818",
                    "location_type": 0,
                    "parent_station": {
                        "global_stop_id": "GCRTA:31146",
                        "location_type": 1,
                        "rt_stop_id": "place_tcc",
                        "station_code": "",
                        "station_name": "Tower City-Public Sq Station"
                    },
                    "parent_station_global_stop_id": "GCRTA:31146",
                    "route_type": 0,
                    "rt_stop_id": "28916",
                    "stop_code": "28916",
                    "stop_lat": 41.49714938337804,
                    "stop_lon": -81.69362975193943,
                    "stop_name": "Tower City Station",
                    "wheelchair_boarding": 0
                },
                "direction_headsign": "Green Road",
                "direction_id": 0,
                "headsign": "Green Road",
                "merged_headsign": "Green Road",
                "schedule_items": [
                    {
                        "departure_time": 1750793400,
                        "is_cancelled": false,
                        "is_real_time": false,
                        "rt_trip_id": "18660940",
                        "scheduled_departure_time": 1750793400,
                        "trip_search_key": "GCRTA:48668005:218:22:22",
                        "wheelchair_accessible": 1
                    },
                    {
                        "departure_time": 1750795200,
                        "is_cancelled": false,
                        "is_real_time": false,
                        "rt_trip_id": "18660941",
                        "scheduled_departure_time": 1750795200,
                        "trip_search_key": "GCRTA:48668005:218:22:23",
                        "wheelchair_accessible": 1
                    },
                    {
                        "departure_time": 1750797000,
                        "is_cancelled": false,
                        "is_real_time": false,
                        "rt_trip_id": "18660942",
                        "scheduled_departure_time": 1750797000,
                        "trip_search_key": "GCRTA:48668005:218:22:24",
                        "wheelchair_accessible": 1
                    }
                ]
            },
            {
                "branch_code": "",
                "closest_stop": {
                    "global_stop_id": "GCRTA:52807",
                    "location_type": 0,
                    "parent_station": {
                        "global_stop_id": "GCRTA:31146",
                        "location_type": 1,
                        "rt_stop_id": "place_tcc",
                        "station_code": "",
                        "station_name": "Tower City-Public Sq Station"
                    },
                    "parent_station_global_stop_id": "GCRTA:31146",
                    "route_type": 0,
                    "rt_stop_id": "28885",
                    "stop_code": "28885",
                    "stop_lat": 41.49770696198605,
                    "stop_lon": -81.69360277232937,
                    "stop_name": "Tower City Station",
                    "wheelchair_boarding": 0
                },
                "direction_headsign": "Tower City / Public Square",
                "direction_id": 1,
                "headsign": "Tower City / Public Square",
                "merged_headsign": "Tower City / Public Square",
                "schedule_items": []
            }
        ],
        "mode_name": "Light Rail",
        "real_time_route_id": "67",
        "route_color": "8fb73e",
        "route_display_short_name": {
            "boxed_text": "",
            "elements": [
                "san-diego-trolley",
                "",
                null
            ],
            "route_name_redundancy": true
        },
        "route_image": "",
        "route_long_name": "Green Line",
        "route_network_id": "GCRTA|Cleveland",
        "route_network_name": "GCRTA",
        "route_short_name": "Green",
        "route_text_color": "000000",
        "route_timezone": "America/New_York",
        "route_type": 0,
        "sorting_key": "Green",
        "tts_long_name": "Green Line",
        "tts_short_name": "Green line",
        "vehicle": {
            "image": "san-diego-trolley",
            "name": "vehicle",
            "name_inflection": "n"
        }
    },
      {
          "alerts": [],
          "compact_display_short_name": {
              "boxed_text": "",
              "elements": [
                  null,
                  "86",
                  null
              ],
              "route_name_redundancy": false
          },
          "fares": [
              {
                  "fare_media_type": 0,
                  "price_max": {
                      "currency_code": "USD",
                      "symbol": "$",
                      "text": "$ 2.50",
                      "value": 2.5
                  },
                  "price_min": {
                      "currency_code": "USD",
                      "symbol": "$",
                      "text": "$ 2.50",
                      "value": 2.5
                  }
              },
              {
                  "fare_media_type": 1,
                  "price_max": {
                      "currency_code": "USD",
                      "symbol": "$",
                      "text": "$ 2.50",
                      "value": 2.5
                  },
                  "price_min": {
                      "currency_code": "USD",
                      "symbol": "$",
                      "text": "$ 2.50",
                      "value": 2.5
                  }
              },
              {
                  "fare_media_type": 4,
                  "price_max": {
                      "currency_code": "USD",
                      "symbol": "$",
                      "text": "$ 2.50",
                      "value": 2.5
                  },
                  "price_min": {
                      "currency_code": "USD",
                      "symbol": "$",
                      "text": "$ 2.50",
                      "value": 2.5
                  }
              }
          ],
          "global_route_id": "GCRTA:15214",
          "itineraries": [
              {
                  "branch_code": "",
                  "closest_stop": {
                      "global_stop_id": "GCRTA:48052",
                      "location_type": 0,
                      "parent_station_global_stop_id": null,
                      "route_type": 3,
                      "rt_stop_id": "14768",
                      "stop_code": "14768",
                      "stop_lat": 41.41861173847945,
                      "stop_lon": -81.82643238588166,
                      "stop_name": "18301 Brookpark Rd",
                      "wheelchair_boarding": 0
                  },
                  "direction_headsign": "West Park Station",
                  "direction_id": 0,
                  "headsign": "West Park Station",
                  "merged_headsign": "West Park Station",
                  "schedule_items": [
                      {
                          "departure_time": 1749148740,
                          "is_cancelled": false,
                          "is_real_time": false,
                          "rt_trip_id": "18575278",
                          "scheduled_departure_time": 1749148740,
                          "trip_search_key": "GCRTA:48668005:197:3:17",
                          "wheelchair_accessible": 1
                      },
                      {
                          "departure_time": 1749150493,
                          "is_cancelled": false,
                          "is_real_time": true,
                          "rt_trip_id": "18574398",
                          "scheduled_departure_time": 1749150540,
                          "trip_search_key": "GCRTA:48668005:197:3:18",
                          "wheelchair_accessible": 0
                      },
                      {
                          "departure_time": 1749152400,
                          "is_cancelled": false,
                          "is_real_time": false,
                          "rt_trip_id": "18575279",
                          "scheduled_departure_time": 1749152400,
                          "trip_search_key": "GCRTA:48668005:197:3:19",
                          "wheelchair_accessible": 1
                      }
                  ]
              },
              {
                  "branch_code": "",
                  "closest_stop": {
                      "global_stop_id": "GCRTA:48052",
                      "location_type": 0,
                      "parent_station_global_stop_id": null,
                      "route_type": 3,
                      "rt_stop_id": "14768",
                      "stop_code": "14768",
                      "stop_lat": 41.41861173847945,
                      "stop_lon": -81.82643238588166,
                      "stop_name": "18301 Brookpark Rd",
                      "wheelchair_boarding": 0
                  },
                  "direction_headsign": "Tri-C West",
                  "direction_id": 1,
                  "headsign": "Tri-C West",
                  "merged_headsign": "Tri-C West",
                  "schedule_items": [
                      {
                          "departure_time": 1749149183,
                          "is_cancelled": false,
                          "is_real_time": true,
                          "rt_trip_id": "18574295",
                          "scheduled_departure_time": 1749149340,
                          "trip_search_key": "GCRTA:48668005:196:3:18",
                          "wheelchair_accessible": 0
                      },
                      {
                          "departure_time": 1749151140,
                          "is_cancelled": false,
                          "is_real_time": false,
                          "rt_trip_id": "18575268",
                          "scheduled_departure_time": 1749151140,
                          "trip_search_key": "GCRTA:48668005:196:3:19",
                          "wheelchair_accessible": 1
                      },
                      {
                          "departure_time": 1749153000,
                          "is_cancelled": false,
                          "is_real_time": false,
                          "rt_trip_id": "18574397",
                          "scheduled_departure_time": 1749153000,
                          "trip_search_key": "GCRTA:48668005:196:3:20",
                          "wheelchair_accessible": 1
                      }
                  ]
              }
          ],
          "mode_name": "Bus",
          "real_time_route_id": "86",
          "route_color": "052743",
          "route_display_short_name": {
              "boxed_text": "",
              "elements": [
                  null,
                  "86",
                  null
              ],
              "route_name_redundancy": false
          },
          "route_image": "",
          "route_long_name": "Rocky River Dr.–Bagley",
          "route_network_id": "GCRTA|Cleveland",
          "route_network_name": "GCRTA",
          "route_short_name": "86",
          "route_text_color": "ffffff",
          "route_timezone": "America/New_York",
          "route_type": 3,
          "sorting_key": "86",
          "tts_long_name": "Rocky River Dr.–Bagley",
          "tts_short_name": "86",
          "vehicle": {
              "image": "bus-new",
              "name": "bus",
              "name_inflection": "n"
          }
      },
      {
          "alerts": [],
          "compact_display_short_name": {
              "boxed_text": "",
              "elements": [
                  null,
                  "78",
                  null
              ],
              "route_name_redundancy": false
          },
          "fares": [
              {
                  "fare_media_type": 0,
                  "price_max": {
                      "currency_code": "USD",
                      "symbol": "$",
                      "text": "$ 2.50",
                      "value": 2.5
                  },
                  "price_min": {
                      "currency_code": "USD",
                      "symbol": "$",
                      "text": "$ 2.50",
                      "value": 2.5
                  }
              },
              {
                  "fare_media_type": 1,
                  "price_max": {
                      "currency_code": "USD",
                      "symbol": "$",
                      "text": "$ 2.50",
                      "value": 2.5
                  },
                  "price_min": {
                      "currency_code": "USD",
                      "symbol": "$",
                      "text": "$ 2.50",
                      "value": 2.5
                  }
              },
              {
                  "fare_media_type": 4,
                  "price_max": {
                      "currency_code": "USD",
                      "symbol": "$",
                      "text": "$ 2.50",
                      "value": 2.5
                  },
                  "price_min": {
                      "currency_code": "USD",
                      "symbol": "$",
                      "text": "$ 2.50",
                      "value": 2.5
                  }
              }
          ],
          "global_route_id": "GCRTA:15209",
          "itineraries": [
              {
                  "branch_code": "",
                  "closest_stop": {
                      "global_stop_id": "GCRTA:48055",
                      "location_type": 0,
                      "parent_station_global_stop_id": null,
                      "route_type": 3,
                      "rt_stop_id": "14767",
                      "stop_code": "14767",
                      "stop_lat": 41.41872865012306,
                      "stop_lon": -81.82667520237224,
                      "stop_name": "18200 Brookpark Rd",
                      "wheelchair_boarding": 0
                  },
                  "direction_headsign": "Winton Place",
                  "direction_id": 0,
                  "headsign": "Winton Place",
                  "merged_headsign": "Winton Place",
                  "schedule_items": [
                      {
                          "departure_time": 1749148768,
                          "is_cancelled": false,
                          "is_real_time": true,
                          "rt_trip_id": "18575380",
                          "scheduled_departure_time": 1749148560,
                          "trip_search_key": "GCRTA:48668005:186:3:38",
                          "wheelchair_accessible": 0
                      },
                      {
                          "departure_time": 1749149502,
                          "is_cancelled": false,
                          "is_real_time": true,
                          "rt_trip_id": "18574071",
                          "scheduled_departure_time": 1749149460,
                          "trip_search_key": "GCRTA:48668005:186:3:39",
                          "wheelchair_accessible": 0
                      },
                      {
                          "departure_time": 1749150360,
                          "is_cancelled": false,
                          "is_real_time": false,
                          "rt_trip_id": "18575383",
                          "scheduled_departure_time": 1749150360,
                          "trip_search_key": "GCRTA:48668005:186:3:40",
                          "wheelchair_accessible": 1
                      }
                  ]
              },
              {
                  "branch_code": "",
                  "closest_stop": {
                      "global_stop_id": "GCRTA:48052",
                      "location_type": 0,
                      "parent_station_global_stop_id": null,
                      "route_type": 3,
                      "rt_stop_id": "14768",
                      "stop_code": "14768",
                      "stop_lat": 41.41861173847945,
                      "stop_lon": -81.82643238588166,
                      "stop_name": "18301 Brookpark Rd",
                      "wheelchair_boarding": 0
                  },
                  "direction_headsign": "Brookpark Station",
                  "direction_id": 1,
                  "headsign": "Brookpark Station",
                  "merged_headsign": "Brookpark Station",
                  "schedule_items": [
                      {
                          "departure_time": 1749148788,
                          "is_cancelled": false,
                          "is_real_time": true,
                          "rt_trip_id": "18574062",
                          "scheduled_departure_time": 1749148920,
                          "trip_search_key": "GCRTA:48668005:185:3:35",
                          "wheelchair_accessible": 0
                      },
                      {
                          "departure_time": 1749149523,
                          "is_cancelled": false,
                          "is_real_time": true,
                          "rt_trip_id": "18575378",
                          "scheduled_departure_time": 1749149820,
                          "trip_search_key": "GCRTA:48668005:185:3:36",
                          "wheelchair_accessible": 0
                      },
                      {
                          "departure_time": 1749150506,
                          "is_cancelled": false,
                          "is_real_time": true,
                          "rt_trip_id": "18574257",
                          "scheduled_departure_time": 1749150720,
                          "trip_search_key": "GCRTA:48668005:185:3:37",
                          "wheelchair_accessible": 0
                      }
                  ]
              }
          ],
          "mode_name": "Bus",
          "real_time_route_id": "78",
          "route_color": "052743",
          "route_display_short_name": {
              "boxed_text": "",
              "elements": [
                  null,
                  "78",
                  null
              ],
              "route_name_redundancy": false
          },
          "route_image": "",
          "route_long_name": "West 117–Puritas",
          "route_network_id": "GCRTA|Cleveland",
          "route_network_name": "GCRTA",
          "route_short_name": "78",
          "route_text_color": "ffffff",
          "route_timezone": "America/New_York",
          "route_type": 3,
          "sorting_key": "78",
          "tts_long_name": "West 117–Puritas",
          "tts_short_name": "78",
          "vehicle": {
              "image": "bus-new",
              "name": "bus",
              "name_inflection": "n"
          }
      },
      {
          "alerts": [],
          "compact_display_short_name": {
              "boxed_text": "",
              "elements": [
                  null,
                  "54",
                  null
              ],
              "route_name_redundancy": false
          },
          "fares": [
              {
                  "fare_media_type": 0,
                  "price_max": {
                      "currency_code": "USD",
                      "symbol": "$",
                      "text": "$ 2.50",
                      "value": 2.5
                  },
                  "price_min": {
                      "currency_code": "USD",
                      "symbol": "$",
                      "text": "$ 2.50",
                      "value": 2.5
                  }
              },
              {
                  "fare_media_type": 1,
                  "price_max": {
                      "currency_code": "USD",
                      "symbol": "$",
                      "text": "$ 2.50",
                      "value": 2.5
                  },
                  "price_min": {
                      "currency_code": "USD",
                      "symbol": "$",
                      "text": "$ 2.50",
                      "value": 2.5
                  }
              },
              {
                  "fare_media_type": 4,
                  "price_max": {
                      "currency_code": "USD",
                      "symbol": "$",
                      "text": "$ 2.50",
                      "value": 2.5
                  },
                  "price_min": {
                      "currency_code": "USD",
                      "symbol": "$",
                      "text": "$ 2.50",
                      "value": 2.5
                  }
              }
          ],
          "global_route_id": "GCRTA:15188",
          "itineraries": [
              {
                  "branch_code": "",
                  "closest_stop": {
                      "global_stop_id": "GCRTA:47430",
                      "location_type": 0,
                      "parent_station_global_stop_id": null,
                      "route_type": 3,
                      "rt_stop_id": "10710",
                      "stop_code": "10710",
                      "stop_lat": 41.41941213357804,
                      "stop_lon": -81.82270020648937,
                      "stop_name": "Brookpark Station Stop #2",
                      "wheelchair_boarding": 0
                  },
                  "direction_headsign": "Garfield Cmmons",
                  "direction_id": 0,
                  "headsign": "Garfield Cmmons",
                  "merged_headsign": "Garfield Cmmons",
                  "schedule_items": [
                      {
                          "departure_time": 1749149880,
                          "is_cancelled": false,
                          "is_real_time": false,
                          "rt_trip_id": "18574082",
                          "scheduled_departure_time": 1749149880,
                          "trip_search_key": "GCRTA:48668005:146:3:10",
                          "wheelchair_accessible": 1
                      },
                      {
                          "departure_time": 1749153480,
                          "is_cancelled": false,
                          "is_real_time": false,
                          "rt_trip_id": "18574039",
                          "scheduled_departure_time": 1749153480,
                          "trip_search_key": "GCRTA:48668005:146:3:11",
                          "wheelchair_accessible": 1
                      },
                      {
                          "departure_time": 1749157080,
                          "is_cancelled": false,
                          "is_real_time": false,
                          "rt_trip_id": "18574089",
                          "scheduled_departure_time": 1749157080,
                          "trip_search_key": "GCRTA:48668005:146:3:12",
                          "wheelchair_accessible": 1
                      }
                  ]
              },
              {
                  "branch_code": "",
                  "closest_stop": {
                      "global_stop_id": "GCRTA:47430",
                      "location_type": 0,
                      "parent_station_global_stop_id": null,
                      "route_type": 3,
                      "rt_stop_id": "10710",
                      "stop_code": "10710",
                      "stop_lat": 41.41941213357804,
                      "stop_lon": -81.82270020648937,
                      "stop_name": "Brookpark Station Stop #2",
                      "wheelchair_boarding": 0
                  },
                  "direction_headsign": "Brookpark Station",
                  "direction_id": 1,
                  "headsign": "Brookpark Station",
                  "merged_headsign": "Brookpark Station",
                  "schedule_items": []
              }
          ],
          "mode_name": "Bus",
          "real_time_route_id": "54",
          "route_color": "052743",
          "route_display_short_name": {
              "boxed_text": "",
              "elements": [
                  null,
                  "54",
                  null
              ],
              "route_name_redundancy": false
          },
          "route_image": "",
          "route_long_name": "Brookpark–Rockside",
          "route_network_id": "GCRTA|Cleveland",
          "route_network_name": "GCRTA",
          "route_short_name": "54",
          "route_text_color": "ffffff",
          "route_timezone": "America/New_York",
          "route_type": 3,
          "sorting_key": "54",
          "tts_long_name": "Brookpark–Rockside",
          "tts_short_name": "54",
          "vehicle": {
              "image": "bus-new",
              "name": "bus",
              "name_inflection": "n"
          }
      },
      {
          "alerts": [],
          "compact_display_short_name": {
              "boxed_text": "",
              "elements": [
                  null,
                  "83",
                  null
              ],
              "route_name_redundancy": false
          },
          "fares": [
              {
                  "fare_media_type": 0,
                  "price_max": {
                      "currency_code": "USD",
                      "symbol": "$",
                      "text": "$ 2.50",
                      "value": 2.5
                  },
                  "price_min": {
                      "currency_code": "USD",
                      "symbol": "$",
                      "text": "$ 2.50",
                      "value": 2.5
                  }
              },
              {
                  "fare_media_type": 1,
                  "price_max": {
                      "currency_code": "USD",
                      "symbol": "$",
                      "text": "$ 2.50",
                      "value": 2.5
                  },
                  "price_min": {
                      "currency_code": "USD",
                      "symbol": "$",
                      "text": "$ 2.50",
                      "value": 2.5
                  }
              },
              {
                  "fare_media_type": 4,
                  "price_max": {
                      "currency_code": "USD",
                      "symbol": "$",
                      "text": "$ 2.50",
                      "value": 2.5
                  },
                  "price_min": {
                      "currency_code": "USD",
                      "symbol": "$",
                      "text": "$ 2.50",
                      "value": 2.5
                  }
              }
          ],
          "global_route_id": "GCRTA:15213",
          "itineraries": [
              {
                  "branch_code": "",
                  "closest_stop": {
                      "global_stop_id": "GCRTA:46970",
                      "location_type": 0,
                      "parent_station_global_stop_id": null,
                      "route_type": 3,
                      "rt_stop_id": "06799",
                      "stop_code": "06799",
                      "stop_lat": 41.43359441526876,
                      "stop_lon": -81.79041460644518,
                      "stop_name": "Puritas Av / W 140th St",
                      "wheelchair_boarding": 0
                  },
                  "direction_headsign": "Lakewood Park",
                  "direction_id": 0,
                  "headsign": "Lakewood Park",
                  "merged_headsign": "Lakewood Park",
                  "schedule_items": [
                      {
                          "departure_time": 1749149192,
                          "is_cancelled": false,
                          "is_real_time": true,
                          "rt_trip_id": "18574439",
                          "scheduled_departure_time": 1749149160,
                          "trip_search_key": "GCRTA:48668005:191:3:15",
                          "wheelchair_accessible": 0
                      },
                      {
                          "departure_time": 1749150753,
                          "is_cancelled": false,
                          "is_real_time": true,
                          "rt_trip_id": "18574096",
                          "scheduled_departure_time": 1749150900,
                          "trip_search_key": "GCRTA:48668005:191:3:16",
                          "wheelchair_accessible": 0
                      },
                      {
                          "departure_time": 1749152700,
                          "is_cancelled": false,
                          "is_real_time": false,
                          "rt_trip_id": "18574164",
                          "scheduled_departure_time": 1749152700,
                          "trip_search_key": "GCRTA:48668005:191:3:17",
                          "wheelchair_accessible": 1
                      }
                  ]
              },
              {
                  "branch_code": "",
                  "closest_stop": {
                      "global_stop_id": "GCRTA:46856",
                      "location_type": 0,
                      "parent_station_global_stop_id": null,
                      "route_type": 3,
                      "rt_stop_id": "12123",
                      "stop_code": "12123",
                      "stop_lat": 41.43406206184322,
                      "stop_lon": -81.79075634817266,
                      "stop_name": "W 140th St / Puritas Av",
                      "wheelchair_boarding": 0
                  },
                  "direction_headsign": "Parma TC",
                  "direction_id": 1,
                  "headsign": "Tri-C West",
                  "merged_headsign": "Tri-C West",
                  "schedule_items": [
                      {
                          "departure_time": 1749148975,
                          "is_cancelled": false,
                          "is_real_time": true,
                          "rt_trip_id": "18574177",
                          "scheduled_departure_time": 1749149040,
                          "trip_search_key": "GCRTA:48668005:190:3:17",
                          "wheelchair_accessible": 0
                      },
                      {
                          "departure_time": 1749150731,
                          "is_cancelled": false,
                          "is_real_time": true,
                          "rt_trip_id": "18574151",
                          "scheduled_departure_time": 1749150900,
                          "trip_search_key": "GCRTA:48668005:190:3:18",
                          "wheelchair_accessible": 0
                      },
                      {
                          "departure_time": 1749152700,
                          "is_cancelled": false,
                          "is_real_time": false,
                          "rt_trip_id": "18574441",
                          "scheduled_departure_time": 1749152700,
                          "trip_search_key": "GCRTA:48668005:190:3:19",
                          "wheelchair_accessible": 1
                      }
                  ]
              }
          ],
          "mode_name": "Bus",
          "real_time_route_id": "83",
          "route_color": "052743",
          "route_display_short_name": {
              "boxed_text": "",
              "elements": [
                  null,
                  "83",
                  null
              ],
              "route_name_redundancy": false
          },
          "route_image": "",
          "route_long_name": "Warren–West 130",
          "route_network_id": "GCRTA|Cleveland",
          "route_network_name": "GCRTA",
          "route_short_name": "83",
          "route_text_color": "ffffff",
          "route_timezone": "America/New_York",
          "route_type": 3,
          "sorting_key": "83",
          "tts_long_name": "Warren–West 130",
          "tts_short_name": "83",
          "vehicle": {
              "image": "bus-new",
              "name": "bus",
              "name_inflection": "n"
          }
      },
      {
          "alerts": [],
          "compact_display_short_name": {
              "boxed_text": "",
              "elements": [
                  null,
                  "22",
                  null
              ],
              "route_name_redundancy": false
          },
          "fares": [
              {
                  "fare_media_type": 0,
                  "price_max": {
                      "currency_code": "USD",
                      "symbol": "$",
                      "text": "$ 2.50",
                      "value": 2.5
                  },
                  "price_min": {
                      "currency_code": "USD",
                      "symbol": "$",
                      "text": "$ 2.50",
                      "value": 2.5
                  }
              },
              {
                  "fare_media_type": 1,
                  "price_max": {
                      "currency_code": "USD",
                      "symbol": "$",
                      "text": "$ 2.50",
                      "value": 2.5
                  },
                  "price_min": {
                      "currency_code": "USD",
                      "symbol": "$",
                      "text": "$ 2.50",
                      "value": 2.5
                  }
              },
              {
                  "fare_media_type": 4,
                  "price_max": {
                      "currency_code": "USD",
                      "symbol": "$",
                      "text": "$ 2.50",
                      "value": 2.5
                  },
                  "price_min": {
                      "currency_code": "USD",
                      "symbol": "$",
                      "text": "$ 2.50",
                      "value": 2.5
                  }
              }
          ],
          "global_route_id": "GCRTA:15160",
          "itineraries": [
              {
                  "branch_code": "",
                  "closest_stop": {
                      "global_stop_id": "GCRTA:55453",
                      "location_type": 0,
                      "parent_station_global_stop_id": null,
                      "route_type": 3,
                      "rt_stop_id": "00177",
                      "stop_code": "00177",
                      "stop_lat": 41.45001600459486,
                      "stop_lon": -81.821018477462,
                      "stop_name": "Lorain Av / Old Lorain Rd",
                      "wheelchair_boarding": 0
                  },
                  "direction_headsign": "Downtown",
                  "direction_id": 0,
                  "headsign": "Downtown",
                  "merged_headsign": "Downtown",
                  "schedule_items": [
                      {
                          "departure_time": 1749149434,
                          "is_cancelled": false,
                          "is_real_time": true,
                          "rt_trip_id": "18574603",
                          "scheduled_departure_time": 1749149460,
                          "trip_search_key": "GCRTA:48668005:52:3:44",
                          "wheelchair_accessible": 0
                      },
                      {
                          "departure_time": 1749150364,
                          "is_cancelled": false,
                          "is_real_time": true,
                          "rt_trip_id": "18574623",
                          "scheduled_departure_time": 1749150480,
                          "trip_search_key": "GCRTA:48668005:52:3:45",
                          "wheelchair_accessible": 0
                      },
                      {
                          "departure_time": 1749151380,
                          "is_cancelled": false,
                          "is_real_time": false,
                          "rt_trip_id": "18574578",
                          "scheduled_departure_time": 1749151380,
                          "trip_search_key": "GCRTA:48668005:52:3:46",
                          "wheelchair_accessible": 1
                      }
                  ]
              },
              {
                  "branch_code": "",
                  "closest_stop": {
                      "global_stop_id": "GCRTA:55457",
                      "location_type": 0,
                      "parent_station_global_stop_id": null,
                      "route_type": 3,
                      "rt_stop_id": "05890",
                      "stop_code": "05890",
                      "stop_lat": 41.45020486186532,
                      "stop_lon": -81.82112639590225,
                      "stop_name": "Lorain Av / W 178th St",
                      "wheelchair_boarding": 0
                  },
                  "direction_headsign": "Westgate TC",
                  "direction_id": 1,
                  "headsign": "Westgate TC",
                  "merged_headsign": "Westgate TC",
                  "schedule_items": [
                      {
                          "departure_time": 1749149340,
                          "is_cancelled": false,
                          "is_real_time": true,
                          "rt_trip_id": "18574574",
                          "scheduled_departure_time": 1749149340,
                          "trip_search_key": "GCRTA:48668005:53:3:39",
                          "wheelchair_accessible": 0
                      },
                      {
                          "departure_time": 1749150054,
                          "is_cancelled": false,
                          "is_real_time": true,
                          "rt_trip_id": "18574655",
                          "scheduled_departure_time": 1749150240,
                          "trip_search_key": "GCRTA:48668005:53:3:40",
                          "wheelchair_accessible": 0
                      },
                      {
                          "departure_time": 1749151092,
                          "is_cancelled": false,
                          "is_real_time": true,
                          "rt_trip_id": "18574611",
                          "scheduled_departure_time": 1749151140,
                          "trip_search_key": "GCRTA:48668005:53:3:41",
                          "wheelchair_accessible": 0
                      }
                  ]
              }
          ],
          "mode_name": "Bus",
          "real_time_route_id": "22",
          "route_color": "052743",
          "route_display_short_name": {
              "boxed_text": "",
              "elements": [
                  null,
                  "22",
                  null
              ],
              "route_name_redundancy": false
          },
          "route_image": "",
          "route_long_name": "Lorain",
          "route_network_id": "GCRTA|Cleveland",
          "route_network_name": "GCRTA",
          "route_short_name": "22",
          "route_text_color": "ffffff",
          "route_timezone": "America/New_York",
          "route_type": 3,
          "sorting_key": "22",
          "tts_long_name": "Lorain",
          "tts_short_name": "22",
          "vehicle": {
              "image": "bus-new",
              "name": "bus",
              "name_inflection": "n"
          }
      },
      {
          "alerts": [],
          "compact_display_short_name": {
              "boxed_text": "",
              "elements": [
                  null,
                  "55",
                  null
              ],
              "route_name_redundancy": false
          },
          "fares": [
              {
                  "fare_media_type": 0,
                  "price_max": {
                      "currency_code": "USD",
                      "symbol": "$",
                      "text": "$ 2.50",
                      "value": 2.5
                  },
                  "price_min": {
                      "currency_code": "USD",
                      "symbol": "$",
                      "text": "$ 2.50",
                      "value": 2.5
                  }
              },
              {
                  "fare_media_type": 1,
                  "price_max": {
                      "currency_code": "USD",
                      "symbol": "$",
                      "text": "$ 2.50",
                      "value": 2.5
                  },
                  "price_min": {
                      "currency_code": "USD",
                      "symbol": "$",
                      "text": "$ 2.50",
                      "value": 2.5
                  }
              },
              {
                  "fare_media_type": 4,
                  "price_max": {
                      "currency_code": "USD",
                      "symbol": "$",
                      "text": "$ 2.50",
                      "value": 2.5
                  },
                  "price_min": {
                      "currency_code": "USD",
                      "symbol": "$",
                      "text": "$ 2.50",
                      "value": 2.5
                  }
              }
          ],
          "global_route_id": "GCRTA:15189",
          "itineraries": [
              {
                  "branch_code": "",
                  "closest_stop": {
                      "global_stop_id": "GCRTA:46241",
                      "location_type": 0,
                      "parent_station_global_stop_id": null,
                      "route_type": 3,
                      "rt_stop_id": "09124",
                      "stop_code": "09124",
                      "stop_lat": 41.44530356603688,
                      "stop_lon": -81.85521063661744,
                      "stop_name": "Lorain Rd / W 212th St",
                      "wheelchair_boarding": 0
                  },
                  "direction_headsign": "Cleveland State",
                  "direction_id": 0,
                  "headsign": "Cleveland State",
                  "merged_headsign": "Cleveland State",
                  "schedule_items": [
                      {
                          "departure_time": 1749149635,
                          "is_cancelled": false,
                          "is_real_time": true,
                          "rt_trip_id": "18574881",
                          "scheduled_departure_time": 1749149580,
                          "trip_search_key": "GCRTA:48668005:149:3:13",
                          "wheelchair_accessible": 0
                      },
                      {
                          "departure_time": 1749151249,
                          "is_cancelled": false,
                          "is_real_time": true,
                          "rt_trip_id": "18574929",
                          "scheduled_departure_time": 1749151380,
                          "trip_search_key": "GCRTA:48668005:149:3:14",
                          "wheelchair_accessible": 0
                      },
                      {
                          "departure_time": 1749153180,
                          "is_cancelled": false,
                          "is_real_time": false,
                          "rt_trip_id": "18574900",
                          "scheduled_departure_time": 1749153180,
                          "trip_search_key": "GCRTA:48668005:149:3:15",
                          "wheelchair_accessible": 1
                      }
                  ]
              },
              {
                  "branch_code": "",
                  "closest_stop": {
                      "global_stop_id": "GCRTA:46488",
                      "location_type": 0,
                      "parent_station_global_stop_id": null,
                      "route_type": 3,
                      "rt_stop_id": "08183",
                      "stop_code": "08183",
                      "stop_lat": 41.44659858731999,
                      "stop_lon": -81.85308824062568,
                      "stop_name": "W 210th St / Lorain Rd",
                      "wheelchair_boarding": 0
                  },
                  "direction_headsign": "Lorain Co Line",
                  "direction_id": 1,
                  "headsign": "Lorain Co Line",
                  "merged_headsign": "Lorain Co Line",
                  "schedule_items": [
                      {
                          "departure_time": 1749149417,
                          "is_cancelled": false,
                          "is_real_time": true,
                          "rt_trip_id": "18574906",
                          "scheduled_departure_time": 1749149220,
                          "trip_search_key": "GCRTA:48668005:158:3:19",
                          "wheelchair_accessible": 0
                      },
                      {
                          "departure_time": 1749150871,
                          "is_cancelled": false,
                          "is_real_time": true,
                          "rt_trip_id": "18574921",
                          "scheduled_departure_time": 1749151080,
                          "trip_search_key": "GCRTA:48668005:158:3:20",
                          "wheelchair_accessible": 0
                      },
                      {
                          "departure_time": 1749152880,
                          "is_cancelled": false,
                          "is_real_time": false,
                          "rt_trip_id": "18574889",
                          "scheduled_departure_time": 1749152880,
                          "trip_search_key": "GCRTA:48668005:159:3:0",
                          "wheelchair_accessible": 1
                      }
                  ]
              }
          ],
          "mode_name": "Bus",
          "real_time_route_id": "55",
          "route_color": "006a4d",
          "route_display_short_name": {
              "boxed_text": "Cleveland State",
              "elements": [
                  null,
                  "55",
                  null
              ],
              "route_name_redundancy": false
          },
          "route_image": "",
          "route_long_name": "Cleveland State Line",
          "route_network_id": "GCRTA|Cleveland",
          "route_network_name": "GCRTA",
          "route_short_name": "55",
          "route_text_color": "ffffff",
          "route_timezone": "America/New_York",
          "route_type": 3,
          "sorting_key": "55",
          "tts_long_name": "Cleveland State Line",
          "tts_short_name": "55",
          "vehicle": {
              "image": "bus-new",
              "name": "bus",
              "name_inflection": "n"
          }
      },
      {
        "alerts": [],
        "compact_display_short_name": {
            "boxed_text": "",
            "elements": [
                "bus-new",
                "",
                null
            ],
            "route_name_redundancy": false
        },
        "fares": [
            {
                "fare_media_type": 0,
                "price_max": {
                    "currency_code": "USD",
                    "symbol": "$",
                    "text": "$ 2.50",
                    "value": 2.5
                },
                "price_min": {
                    "currency_code": "USD",
                    "symbol": "$",
                    "text": "$ 2.50",
                    "value": 2.5
                }
            },
            {
                "fare_media_type": 1,
                "price_max": {
                    "currency_code": "USD",
                    "symbol": "$",
                    "text": "$ 2.50",
                    "value": 2.5
                },
                "price_min": {
                    "currency_code": "USD",
                    "symbol": "$",
                    "text": "$ 2.50",
                    "value": 2.5
                }
            },
            {
                "fare_media_type": 4,
                "price_max": {
                    "currency_code": "USD",
                    "symbol": "$",
                    "text": "$ 2.50",
                    "value": 2.5
                },
                "price_min": {
                    "currency_code": "USD",
                    "symbol": "$",
                    "text": "$ 2.50",
                    "value": 2.5
                }
            }
        ],
        "global_route_id": "GCRTA:107512",
        "itineraries": [
            {
                "branch_code": "",
                "closest_stop": {
                    "global_stop_id": "GCRTA:53788",
                    "location_type": 0,
                    "parent_station": {
                        "global_stop_id": "GCRTA:31125",
                        "location_type": 1,
                        "rt_stop_id": "place_pusq",
                        "station_code": "",
                        "station_name": "Public Square"
                    },
                    "parent_station_global_stop_id": "GCRTA:31125",
                    "route_type": 3,
                    "rt_stop_id": "12527",
                    "stop_code": "12527",
                    "stop_lat": 41.49888507162554,
                    "stop_lon": -81.69353981990588,
                    "stop_name": "Euclid Av / Ontario St Station",
                    "wheelchair_boarding": 0
                },
                "direction_headsign": "Stokes Windermere Station",
                "direction_id": 0,
                "headsign": "Stokes Windermere Station",
                "merged_headsign": "Stokes Windermere Station",
                "schedule_items": [
                    {
                        "departure_time": 1750793100,
                        "is_cancelled": false,
                        "is_real_time": true,
                        "rt_trip_id": "18669459",
                        "scheduled_departure_time": 1750793100,
                        "trip_search_key": "GCRTA:48668005:224:22:51",
                        "wheelchair_accessible": 0
                    },
                    {
                        "departure_time": 1750794000,
                        "is_cancelled": false,
                        "is_real_time": true,
                        "rt_trip_id": "18669461",
                        "scheduled_departure_time": 1750794000,
                        "trip_search_key": "GCRTA:48668005:224:22:52",
                        "wheelchair_accessible": 0
                    },
                    {
                        "departure_time": 1750794900,
                        "is_cancelled": false,
                        "is_real_time": false,
                        "rt_trip_id": "18669463",
                        "scheduled_departure_time": 1750794900,
                        "trip_search_key": "GCRTA:48668005:224:22:53",
                        "wheelchair_accessible": 1
                    }
                ]
            },
            {
                "branch_code": "",
                "closest_stop": {
                    "global_stop_id": "GCRTA:53788",
                    "location_type": 0,
                    "parent_station": {
                        "global_stop_id": "GCRTA:31125",
                        "location_type": 1,
                        "rt_stop_id": "place_pusq",
                        "station_code": "",
                        "station_name": "Public Square"
                    },
                    "parent_station_global_stop_id": "GCRTA:31125",
                    "route_type": 3,
                    "rt_stop_id": "12527",
                    "stop_code": "12527",
                    "stop_lat": 41.49888507162554,
                    "stop_lon": -81.69353981990588,
                    "stop_name": "Euclid Av / Ontario St Station",
                    "wheelchair_boarding": 0
                },
                "direction_headsign": "Public Square",
                "direction_id": 1,
                "headsign": "Public Square",
                "merged_headsign": "Public Square",
                "schedule_items": []
            }
        ],
        "mode_name": "Bus",
        "real_time_route_id": "6",
        "route_color": "959595",
        "route_display_short_name": {
            "boxed_text": "",
            "elements": [
                "gcrta-healthline",
                "",
                null
            ],
            "route_name_redundancy": false
        },
        "route_image": "",
        "route_long_name": "",
        "route_network_id": "GCRTA|Cleveland",
        "route_network_name": "GCRTA",
        "route_short_name": "HealthLine",
        "route_text_color": "000000",
        "route_timezone": "America/New_York",
        "route_type": 3,
        "sorting_key": "HealthLine",
        "tts_long_name": "",
        "tts_short_name": "HealthLine",
        "vehicle": {
            "image": "bus-new",
            "name": "bus",
            "name_inflection": "n"
        }
    }
  ];
    console.log('Mock data:', JSON.stringify(mockRoutes, null, 2));
    return res.json({ routes: mockRoutes });
  }

  request({
    url: `https://external.transitapp.com/v3/public/nearby_routes?lat=${lat}&lon=${lon}&max_distance=${max_distance}`,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'apiKey': process.env.API_KEY,
    }
  }).pipe(res);
};
