requirejs.config({
   baseUrl: "../node_modules/",
   paths: {
       "jquery": "jquery/dist/jquery.min",
       "knockout": "knockout/build/output/knockout-latest",
       "popper": "popper.js/dist/umd/popper",
       "bootstrap": "bootstrap/dist/js/bootstrap",
       "viewModels": "/scripts/viewModels/",
       "models": "/scripts/models/",
       "bootstrapCss": "bootstrap/dist/css/bootstrap",
       "overwriteCss": "/css/main",
       "fontawesome": "@fortawesome/fontawesome-free/css/all"
   },
   map: {
       '*': {
           'popper.js': 'popper',
           'css': 'require-css/css'
       }
   },
   shim: {
    bootstrap: {
      deps: ['jquery']
      }
    }
});

define(["jquery", "knockout", "viewModels/main", "bootstrap", "css!bootstrapCss", "css!overwriteCss", "css!fontawesome"], function ($, ko, ViewModel) {
    $(document).ready(function () {
        window.model = new ViewModel();
        ko.applyBindings(model);
    });
});