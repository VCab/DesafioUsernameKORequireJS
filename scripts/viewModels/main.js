var Modes = {
    Editing: "Editing",
    Adding: "Adding"
}

define(["knockout", "models/user"], function (ko, User) {
    function ViewModel() {
        var self = this;
        self.newUser = ko.observable(new User());
        self.users = ko.observableArray([]);

        self.mode = ko.observable(Modes.Adding);

        self.clickedRow = null;

        self.addUser = function () {
            if (self.newUser().username().trim().length == 0) {
                alert("O username não é válido.");
            }
            else if (self.newUser().password().trim().length == 0) {
                alert("A password não é válida.");
            }
            else {
                if (!/[^a-zA-Z0-9]/.test(self.newUser().username())) {
                    self.users.push(self.newUser());
                    self.newUser(new User());
                }
                else {
                    alert("O USERNAME não pode conter caracteres especiais nem espaços.");
                }
            }
        }

        self.delUser = function (user) {
            if (self.clickedRow == user) {
                self.cancelUser();
                self.users.remove(user);
            }
            else {
                self.users.remove(user);
            }
        }

        self.clickRow = function (user) {
            self.clickedRow = user;

            self.newUser().username(user.username());
            self.newUser().password(user.password());

            self.mode(Modes.Editing);
        }

        self.updateUser = function (user) {

            var userData = self.clickedRow;

            if (self.newUser().username().trim().length == 0) {
                self.newUser().username(userData.username());
                alert("O campo USERNAME tem de estar preenchido!");
            }
            else if (self.newUser().password().trim().length == 0) {
                self.newUser().password(userData.password());
                alert("O campo PASSWORD tem de estar preenchido!");
            }
            else {
                if (!/[^a-zA-Z0-9]/.test(self.newUser().username())) {
                    self.users.replace(self.clickedRow, self.newUser());
                    self.newUser(new User());
                    self.clickedRow = null;
                    self.cancelUser();
                }
                else {
                    alert("O USERNAME não pode conter caracteres especiais nem espaços.");
                }
            }
        }

        self.cancelUser = function () {
            self.mode(Modes.Adding);
            self.newUser(new User());
        }

        self.cleanUser = function () {
            self.newUser().username("");
            self.newUser().password("");
        }

        //Filtrar Users
        self.filter = ko.observable();
        self.userFilter = ko.computed(function () {
            return self.users().filter(function (user) {
                if (!self.filter() || user.username().toLowerCase().indexOf(self.filter().toLowerCase()) !== -1) {
                    return user;
                }
            });
        }, self);
    }
    return ViewModel;
});

/*
define(["jquery", "knockout"], function ($, ko) {
    $(document).ready(function () {
        window.model = new ViewModel();
        ko.applyBindings(model);
    });
});*/