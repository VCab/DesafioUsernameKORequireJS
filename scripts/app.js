requirejs.config({

   paths: {
       "jquery": "../node_modules/jquery/dist/jquery.min",
       "knockout": "../node_modules/knockout/build/output/knockout-latest"
   }
});

require(['main'], function (main) {
    main.ViewModel();
})