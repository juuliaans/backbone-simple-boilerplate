define([

    //modules
    "modules/view1",
    "modules/view2"

], function (View1, View2) {

    // Defining the application router, you can attach sub routers here.
    var Router = Backbone.Router.extend({
        routes: {
            "": "view1"
            , "view1": "view1"
            , "view2": "view2"
        },

        currentView: null,

        cachedViews: {},

        switchView: function (view) {
            if (this.currentView) {
                if (this.currentView.isCacheable) {
                    this.cachedViews[this.currentView.id] = this.currentView;
                    this.currentView.hide(); 
                } else {
                    //close method should be declared on all views
                    if (this.currentView.close)
                        this.currentView.close();
                }
            }

            // Move the view element into the DOM (replacing the old content)
            //this.el.html(view.el);

            // Render view after it is in the DOM (styles are applied)
            if (this.cachedViews[view.id]) {
                //if view is cached, getting view from cache
                view = this.cachedViews[view.id];

                if (view.refresh)
                    view.refresh();

                view.show();
            } else {
                view.render($("#content"));
            }

            this.currentView = view;

            //setting title
            document.title = "Backbone.js Simple Boilerplate" + ((this.currentView.title) ? " - " + this.currentView.title : ""); 

        },

        setActiveEntry: function(url){
            // Unmark all entries
            $('li').removeClass('active');

            // Mark active entry
            $("li a[href='" + url + "']").parents('li').addClass('active');
        },

        index: function () {
            var view_1 = new View1.Views.Main();
            this.switchView(view_1); 
            this.setActiveEntry('index'); 
        }, 

        view1: function(){
            var view_1 = new View1.Views.Main();
            this.switchView(view_1);
            this.setActiveEntry('view1');
        }, 

        view2: function(){
            //instance a model for the view (it needs it.)
            //using default values
            var view_2_model = new View2.Model({
                notClickeableText: "Hi! Im a div but if you click me i do nothing :( ." +
                 " Hey! Why don't you inspect my code and make me be a little bit more useful? "
            });

            var view_2 = new View2.Views.Main({
                model: view_2_model
            });
            this.switchView(view_2);
            this.setActiveEntry('view2');
        }

    });

    return Router;

}); 