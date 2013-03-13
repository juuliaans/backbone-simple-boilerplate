define([
  // Application.
  "app"
],

function (app) {

    var View2 = { Model: {}, Views: {} }

    View2.Model = Backbone.Model.extend({
        defaults: {
            clickeableText: "This is the default text that is going to appear on the clickeable div, come on! click me!"
            , notClickeableText: "This text is going to appear on the not clickeable div, if its not overriden. (which i do)"
        }
    });

    View2.Views.Main = Backbone.View.extend({
        template: "view2/main"
        , id: "view-2"
        , title: "View 2"
        , initialize: function () {
        },
        events: {
            "click #clickeable": "clickeable_clicked"
        },
        render: function (container) {
            //this will be fired before the view is loaded
            var that = this;
            var thatContainer = container; 
            //ajax loading view
            T.render.call(this, this.template, function (tmp) {

                //the view was loaded, this will be fired before the view is shown 

                that.$el.html(tmp({

                    clickeableText: that.model.get("clickeableText")
                    , notClickeableText: that.model.get("notClickeableText")

                }));
                //view was loaded but not shown
                //you can attach, dettach, and manage dom elements by finding them inside that.$el
                //eg. that.$el.find('#mySpan').text("hola");

                //appending view to the main container
                thatContainer.append(that.$el); 

            });
        }, 
        clickeable_clicked: function(){
            alert("I was clicked! Wohoo!");
        }
        , close: function () {
            this.remove();
            this.unbind();
        }
    });

    // Required, return the module for AMD compliance.
    return View2;

});
