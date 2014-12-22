Locationify
===========

Substitute `window.location` properties with values you provide via a url.

Installation
------------

    $ npm install locationify --save

Example
-------

source:

    var url = window.location.origin + '/post';

bundle:

    var url = "http://foo.com" + '/post';

Motivation
----------

Have scripts running off the filesystem return window.location values as though the script was being served by the server. eg. Compile an application returned by a webserver into a phonegap app.

Usage
-----

    var browserify = require('browserify');
    var locationify = require('locatonify');

    var b = browserify();
    b.add('./browser/main.js');
    b.transform(locationify('http://foo.com/'));
    b.bundle().pipe(process.stdout);
