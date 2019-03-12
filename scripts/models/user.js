define(["knockout"], function(ko){
    function User() {
        var self = this;
        self.username = ko.observable("");
        self.password = ko.observable("");
    }
    return User;
});