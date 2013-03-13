///////
/// made by Julián Santa Ana - @juliansantaana (you can find me on twitter at http://twitter.com/juliansantaana)
/// using several resources i found on the internet (where else would it be?)
/// thanks to everyone who uploaded to github examples on how to work with backbone.js
/// this boilerplate is based on that.
//////


require([
    //main app settings
    "app",

    //main router for the application
    "router"

], function (app, Router) {
    
    //waiting for includer to load all JS (widgets), then using a clousure to 
    //reference app, Router to the function that is called by the DOM.Ready.

    //this feels like hack, but it's the only way to 
    //synchronize the includer with the view load.
    
    // Define your master router on the application namespace and trigger all
    // navigation from this instance.
    app.router = new Router();

    // Trigger the initial route and enable HTML5 History API support, set the
    // root folder to '/' by default.  Change in app.js.
    Backbone.history.start({ pushState: true, root: app.root });
    
    // All navigation that is relative should be passed through the navigate
    // method, to be processed by the router. If the link has a `data-bypass`
    // attribute, bypass the delegation completely.
    $(document).on("click", "a[href]:not([data-bypass])", function (evt) {
        // Get the absolute anchor href.
        var href = { prop: $(this).prop("href"), attr: $(this).attr("href") };
        // Get the absolute root.
        var root = location.protocol + "//" + location.host + app.root;

        // Ensure the root is part of the anchor href, meaning it's relative.
        if (href.prop.slice(0, root.length) === root) {
            // Stop the default event to ensure the link will not cause a page
            // refresh.
            evt.preventDefault();

            // `Backbone.history.navigate` is sufficient for all Routers and will
            // trigger the correct events. The Router's internal `navigate` method
            // calls this anyways.  The fragment is sliced from the root.
            Backbone.history.navigate(href.attr, true);
        }
    });

});