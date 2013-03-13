define([
  // Application.
  "app"
],

function (app) {

    var View1 = { Model: {}, Views: {} }

    View1.Model = Backbone.Model.extend({
        defaults: {}
    });

    View1.Views.Main = Backbone.View.extend({
        template: "view1/main"
        , id: "view-1"
        , title: "View 1"
        , isCacheable: false
        , initialize: function () {
        },

        render: function (container) {
            var that = this;
            var thatContainer = container; 
            T.render.call(this, this.template, function (tmp) {
                
                //before the view is visible, but it was already loaded

                //

                //the view was already loaded an is on a div element, but not appended to the main container
                that.$el.html(tmp());

                //appending view to the main container
                thatContainer.append(that.$el);

            });
        }
        , close: function () {
            this.remove();
            this.unbind();
        }
        , show: function () {
            this.$el.show(); 
        }
        , hide: function () {
            this.$el.hide(); 
        }
    });

    // Required, return the module for AMD compliance.
    return View1;

});
