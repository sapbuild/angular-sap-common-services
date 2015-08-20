'use strict';

var uiWebAnalytics = [function uiWebAnalytics() {
    var self = {};

    // Possible event values
    self.SUCCESS = "SUCCESS";
    self.FAILURE = "FAILURE";

    // Possible event types
    self.SIGNUP = "SIGNUP";
    self.SIGNIN = "SIGNIN";
    self.PROJECTCREATED = "PROJECTCREATED";
    self.SNAPSHOTCREATED = "SNAPSHOTCREATED";

    self.trackApplicationEvent =  function(eventType, eventValue) {
        if (typeof swa !== 'undefined') {
            swa.trackCustomEvent(eventType, eventValue);
        }
    };
    return self;
}];

module.exports = uiWebAnalytics;