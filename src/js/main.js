// CSS
require('../css/normalize.css');
require('../css/main.css');

// JS Libraries
require('./lib/modernizr.min.js');

// Ext. User JS
require('./plugins.js');

// Begin JS
console.log('yep');
console.log('nope');

// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    
ga('create', 'UA-116146757-1', 'auto');
ga('send', 'pageview');