# Boost.js

Boost.js is a Javascript code loader for browsers.
Can be the basis for developing advanced Web Application frameworks.
It is asynchronous, but modules are defined like node.js style.
Convenient to organize very large-scale front-end code.
It uses Indexeddb internally to boost code loading efficiency.
So it also is a solution of the AMD (Asynchronous Module Definition).

###  Getting Started.

The boost.js can be imported into the HTML pages and Web Workers in your own web application.
```html
<script type="text/javascript" src="boost.js" namespace="boost" baseon="resources/javascript" version_uri=".ver"></script>
```
The attribute of "baseon" is the structured URL folder name for module javascript files. 

The attribute of "src" is the URL of boost.js. 

The attribute of "namespace" is the function name of Boost.js in global javascript context. To avoid name conflicts with other framework, you can change it to another name like "require". 

The attribute of "version_uri" is a URL, to use Indexeddb cache, It must be set. the content of "version_uri" URL should be a series of number. Once it be changed, then brower will clean all module cache and load a new version.
So you don't need set it while you are developing a product, so that browser will immediately load new version modules after the module files are changed. When you publish your product , setting it will use indexeddb cache. Or make a new version_uri content each time after you change your code. The example code "UpVer.sh" is used to do it.
Alternatively, you can set "version" attribute directly replace the "version_uri". its content is the series of number.
###  Load your modules.

```javasscript

boost(['module1','module2'], function(module1,module2){
   //todo: you want to do ...
});

```
### Define a module
Your module paths all base on the "baseon" URL.
example:
Set baseon="resources/javascript",then:
The real URL path of "module1" is "resources/javascript/module1.js".
The real URL path of "module1/module5" is "resources/javascript/module1/module5.js".

These "module1","module1/module5" are modules's ID.
If you want use the "module1/module5" in the "module1",you can write it in "module1.js" file.
```javascript
	require("module1/module5")
```
So the argument of require function in a module must be a module ID , Its real path base on the baseon URL.
So the file name of modules decide its module ID.

### How to export some things in a module.

When deine a moduel, every moduel can see two thing. 
the one it the "require" function. It is used to declare other dependent modules.
the other one is "imports" object.  You can set anything in it for export them to outter.
This is the simple module style for the developer who likes nodejs.
```javascrtipt
	exports.hi=function(){
		return "Hello World";
	};
```

### namespace

The namespace is a MUST attribute.
Of casuse , you can have two different namespaces.
For second namespaces , you need to define it in javascript code.

```javasscript
//AddNameSpace(boostname,baseonSrc,versionUrl,versionNumber,requireName,exportsName,BatchLoadingPackageUrl) // full arguments
	boost.AddNameSpace("boost2",baseon2,version_uri2);
	boost2(["m1","m2"],function(m1,m2){

	});
```
Now you can use "boost2" to load another different systematic javascript library.


### postscript
Most JavaScript modules are defined in two ways: synchronous and asynchronous.
Asynchronous is best experienced in the browser. Like RequireJS. But writing code is tedious.
So I combine the advantages of node.js and RequereJS. Then became this boost.js.

### unusual usage:
The attribute of "require" : change the "require" function name in module to other else.
The attribute of "exports" : change the "exports" object name in module to other else.
Some people may not want to be confused with the style of node.js. can use it.
The attribute of "package" : batch loading package Url, 
For large single-page applications, all the modules to be used can be packaged in a fixed package according to a certain version in advance to speed up the first visit to the page.
About how to make a package ,Please refer to details in the "tools" folder.
Each package have an version number. If it different with the version number defined by the "version_uri" or "version" attribute, it wouldn't be apply even it has been download.Therefore, when making the package, pay attention to the version number.


### Web Workers

It's usage same as HTML pages, just that form have a little diffrent. 
```javasscript
   var myWorker = new Worker("../boost.js#main=worker.js&baseon=http://127.0.0.1:9999/resources/javascript&version_uri=.ver&package=packagecache.json");
```
The baseon, the main are MUST. the others same as HTML page's parameters.
One more note: All URL parameters are relative to the "boost.js" file, but they are relative to the HTML page URL while it be used to HTML page.

### Template support
Hybrid code has always stood on the mainstream in Web development. For example: PHP, JSP, ASP, React, Angular etc.
This shows that most Web applications do not need too elaborate technology， and Development efficiency is the most important.
I don't want to invent a new template-based syntax. In fact, HTML itself is Hybrid code.
So Boost.js can use HTML as a module.
Simply put, the scripts in HTML is the module code for Boost.js, and the other HTML code is template.
In this way, Boost.js also does not restrict you to use any template-based technology, while providing sufficient convenience.
```html
<div>
<h1>HTML Template</h1>
</div>
<script type="text/javascript">
	exports=function(){
		return _HTML_;
	};
</script>
```
The _HTML_ variable is the template string.
To use the html module, you need to add the ".html" suffix.
```javascript
require("module5.html")();/*will get the
"<div>
<h1>HTML Template</h1>
</div>"
*/ 
```
###  Cross-Origin Resource Sharing
If you want to separate the client code of We app under another domain name.
You should Cross-Origin Resource Sharing for the "baseon" folder in your CDN website.

