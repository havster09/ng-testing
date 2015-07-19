"use strict";

describe("durations",function(){
   beforeEach(module("eventsApp"));
    it('should return Half Hour when given 1',inject(function(durationsFilter){
        expect(durationsFilter(1)).toBe("Half Hour");
    }));
    it('should return Full Day when given 4',inject(function(durationsFilter){
        expect(durationsFilter(4)).toBe("Full Day");
    }))
});