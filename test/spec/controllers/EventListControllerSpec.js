"use strict";

describe("Hello World",function(){
   it("should return Hello World",function(){
       expect(helloWorld()).toEqual("Hello World");
   })
});

describe("EventListController",function(){
    var scope, $controllerConstructor,mockEventData;
    beforeEach(module("yoTestApp"));
    beforeEach(inject(function($controller,$rootScope){
        scope = $rootScope.$new();
        mockEventData = sinon.stub({getAllEvents:function(){}});
        $controllerConstructor = $controller;
    }));
    it("should get all the events to the result of eventData.getAllEvents",function(){
        var mockEvents = {};
        mockEventData.getAllEvents.returns(mockEvents);
        var ctrl = $controllerConstructor("EventListController",
            {$scope:scope, $location:{}, eventData:mockEventData});
        expect(scope.events).toBe(mockEvents);
    })
});
