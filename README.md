# Bluemix Context Path Routing sample


## Overview

Sample applications for IBM Bluemix which demonstrates Context Path Routing.


## Files

<pre>
--- node_app/          : Node.js application
 |   |- public/
 |   |   |- index.html : 'Hello World.'
 |   |
 |   |- app.js         : defines 'GET /about' behavior
 |   |- package.json
 |
 |- php_app/           : PHP application
 |   |- phpapp/
 |       |- index.php  : phpinfo();
 |
 |- manifest.yml       : manifest file with context routing information
 |- README.md
</pre>


## Install

- Edit manifest.yml with your application names.

- Push applications with cf. (> cf push)


## Behavior

- /        : 'Hello World'(index.html)

- /about   : 'My name is ...'(app.js)

- /phpapp/ : phpinfo(); (index.php)


## Licensing

This code is licensed under MIT.


## Copyright

2017 K.Kimura @ Juge.Me all rights reserved.


