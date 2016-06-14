requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app'
    },
    shim: {
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        }
    }
}); 

require(['jquery'], function(jquery) {
	  alert($("input").val());
});