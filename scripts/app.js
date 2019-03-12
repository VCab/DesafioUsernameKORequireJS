requirejs.config({
   //baseUrl: "node_modules",
   //deps: ['main'],
   paths: {
       "jquery": "../node_modules/jquery/dist/jquery.min",
       "knockout": "../node_modules/knockout/build/output/knockout-latest"
   }
});



/*
requirejs(['jquery', 'knockout'], 
    function(jquery, ko) {

    }
);*/

//requirejs(["main"]);