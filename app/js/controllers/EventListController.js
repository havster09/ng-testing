'use strict';

angular.module("yoTestApp").controller('EventListController',
    function EventListController($scope, $location, eventData) {
        $scope.events = eventData.getAllEvents();

        $scope.navigateToDetails = function (event) {
            $location.url('/event/' + event.id);
        };
    }
);