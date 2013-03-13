/*
 * This decorates Handlebars.js with the ability to load
 * templates from an external source, with light caching.
 * 
 * To render a template, pass a closure that will receive the 
 * template as a function parameter, eg, 
 *   T.render('templateName', function(t) {
 *       $('#somediv').html( t() );
 *   });
 */
var Template = function () {
    this.cached = {};

    //defining app root to be able to get the templates from any URL
    //on production enviroment this should often by just '/' to get templates from
    // '/app/templates/'

    this.appRoot = "/backbone-simple-boilerplate/"; 
};
var T = new Template();
$.extend(Template.prototype, {
    render: function (name, callback) {
        if (T.isCached(name)) {
            callback(T.cached[name]);
        } else {
            $.get(T.urlFor(name), function (raw) {
                T.store(name, raw);
                T.render(name, callback);
            });
        }
    },
    renderSync: function (name, callback) {
        if (!T.isCached(name)) {
            T.fetch(name);
        }
        T.render(name, callback);
    },
    prefetch: function (name) {
        $.get(T.urlFor(name), function (raw) {
            T.store(name, raw);
        });
    },
    fetch: function (name) {
        // synchronous, for those times when you need it.
        if (!T.isCached(name)) {
            var raw = $.ajax({ 'url': T.urlFor(name), 'async': false }).responseText;
            T.store(name, raw);
        }
    },
    isCached: function (name) {
        return !!T.cached[name];
    },
    store: function (name, raw) {
        T.cached[name] = Handlebars.compile(raw);
    },
    urlFor: function (name) {
        return T.appRoot + "/app/templates/" + name + ".html";
    }
});