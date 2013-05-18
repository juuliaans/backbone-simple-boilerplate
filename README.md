backbone-simple-boilerplate
===========================

A simple backbone boilerplate skeleton app, using everything I learned (and I continue learning) from backbone.js , and several
examples i found throughout the internet.
Thanks to everyone who shares their code on github and blogs and everything, this boilerplate is done using templates, and resources I found.

This is by not meaning the "correct" way to do it, it's just a way i found useful, and it works.
Feel free to suggest any changes, and hey! why don't you fork it and commit new stuff to it?

My name is Julián Santa Ana, and you can find me all over the internet, but usually im on Twitter at http://twitter.com/juliansantaana

DEMO
====

This app is running live here:

http://backbone-simple-boilerplate.herokuapp.com/

Getting started
===============

There are two main variables that you'll have to change to get the example boilerplate working, depending on the url you are executing (or running your server) you have to change

app.js ----> there's a variable inside the app object, called root, if your application is running or the root of your server (such as localhost), then your app.root = '/' , else replace it with the folder or wherever your app is being executed from.

assets -> libs -> templates-loader -----> replace appRoot with the root of your application. (same as above)