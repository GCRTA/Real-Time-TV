'use strict';

angular
  .module('transitScreenApp')
  .controller('RouteItemCtrl', RouteItemCtrl)
  .directive('routeItem', RouteItem);

function RouteItem() {
  var directive = {
    restrict: 'EA',
    templateUrl: 'directives/routeItem/routeItem.html',
    controller: 'RouteItemCtrl',
    controllerAs: 'ctrl',
    scope: {
      route: '='
    }
  };

  return directive;
}

function RouteItemCtrl(Nearby) {
  var vm = this;

  angular.extend(vm, {
    useBlackText: useBlackText,
    getCellStyle: getCellStyle,

    getTime: getTime,
    getPinUrl: getPinUrl,
    getImageUrl: getImageUrl,
    getImageSize: getImageSize,
    getRouteName: getRouteName,
    hasAlerts: hasAlerts,

    hasShownDeparture: Nearby.hasShownDeparture,
    shouldShowDeparture: shouldShowDeparture
  });

  function useBlackText(route) {
    // For light rail and subway routes, use their route color for text
    if (route.mode_name === 'Light Rail' || route.mode_name === 'Subway') {
      return false;
    }
    return route.route_text_color === '000000';
  }

  function getCellStyle(route) {
    return {
      'background': '#' + route.route_color,
      'color': '#' + route.route_text_color
    };
  }

  function getImageSize(route) {
    if (route.route_display_short_name) {
      return route.route_display_short_name.elements[1] ? 28 : 34;
    }

    return 0;
  }

  function getImageUrl(route, index) {
    if (route.route_display_short_name && route.route_display_short_name.elements[index]) {
      var hex = useBlackText(route) ? '000000' : route.route_color;
      return '/api/images/' + route.route_display_short_name.elements[index] + '.svg?primaryColor=' + hex;
    }

    return null;
  }

  function getTime(departure) {
    return new Date(departure * 1000).toISOString();
  }

  function getPinUrl(route) {
    var hex = useBlackText(route) ? '' : (route.route_color + '/');

    return 'https://widget.transitapp.com/images/28/' + hex + 'pin.png';
  }

  function shouldShowDeparture(item) {
    return Nearby.shouldShowDeparture(item.departure_time);
  }

  function getRouteName(route) {
    if (route.mode_name === 'Subway' || route.mode_name === 'Light Rail') {
      return route.route_short_name + ' Line';
    }
    return route.route_display_short_name.elements[1];
  }

  function hasAlerts(route) {
    return route.alerts && route.alerts.length > 0;
  }
}
