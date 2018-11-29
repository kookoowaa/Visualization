# Basic Building Blocks
- HTML, CSS, JavaScript, Document Object Model(DOM), Scalable Vector Graphics(SVG), etc


## HTML
- Hypertext Markup Language is the main markup language for displaying web
- HTML elements build blocks of web page consist of a pair of tags like: 
```html
<p>Hello World!</p>
```
- Inside of the tags, differnet attributes can be given like: 
```html
<tag attribute1= "value1" attribute2="value2"> Hello World!</tag>
```
- The starting HTML page would look like:
```html
<!DOCTYPE html>
<html>
	<head>
		<title>Hello World</title>
	</head>
	<body>
		<p>Hello World!</p>
	</body>
</html>
```


## CSS
- Cascading Style Sheet(CSS) resource is the style sheet language used for describing the presentation of the document
- CSS can be applied to HTML, XML, and D3.js SVG
- A simple example would look like:
```html
<p style="font-size:12px;">Hello World!</p>
```
- There are three ways to apply CSS to HTML
- One is to apply to html elements as an attribute like the example above
- Second way is to put it at the top of the HTML file (See lines #5 - #7)
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello World</title>
    <style>
      p {font-size : 12pt;}
    </style>
  </head>
  <body>
    <p>Hello World!</p>
  </body>
</html>
```
- The third way is to put into a separate css file that the html can reference to (See line #5)
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello World</title>
    <link href="stylesheet.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
    <p>Hello World!</p>
  </body>
</html>
```


## JavaScript
- For D3.js purpose, functions and scripts can be written to interface with the data and D3.js
- Much like CSS, JavaScript can be included in three main places in the HTML page
- A simple inline example would look like:
```html
<input type="button" value="Hello" onClick="alert('Hello World!');" />
```
- If it goes in the Body then:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello World</title>
  </head>
  <body>
    <script type="text/javescript">
      alert("Hello World!");
    </script>
    <p>Hello World!</p>
  </body>
</html>
```
- If it goes in the Head, another file:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello World</title>
    <script src="helloworld.js" type="text/javascript"></script>
  </head>
  <body>
    <p>Hello World!</p>
  </body>
</html>
```
- For the purpose of learning D3.js, I will include Javascript in the body of the HTML document as for now.


## Document Object Model (DOM)
- Document Object Model(DOM) is a convention for representing and interacting with objects in HTML, XML, XHTML documents.
- DOM is separated in three parts: **Core, HTML, and XML**
- DOM allows programs and scripts to**dynamically access and update the structure, content, and style** of a document.
- DOM has Tree which can be used to address, manipulate, and navigate the stucture of the Document.
- The structure of the DOM Tree would look like:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello World</title>
  </head>
  <body>
    <p>
      <span style="color:red;">Hello World!</span>
    </p>
    <input type="button" value = "Hello" onClicke="alert('Hello World!');" />
  </body>
</html>
```
- From above, the **p** element has a parent(**body**), and a sibling(**input**), and a child(**span**).
- Using JS, jQuery, and CSS will allow user to select many elements at the same time.


## Scalable Vector Graphics (SVG)
- Scalable Vector Graphics(SVG) creates two-dimensional vector graphics.
- SVG is not created out of pixels, and have a start and end point - they can be scaled up to larger without losing image quality.
- SVG images adn their behaviors are defined in XML, and since it is part of the DOM specification, we can use the DOM Tree to access and update SVG images.
- SVG comes with a basic set of shape elements:
  - Rectangle
  - Circle
  - Ellipse
  - Straight Line
  - Polyline
  - Polygon
- Please find the examples at [here](00-4 Scalable Vctor Graphics (SVG).html)

ref. to [Dashing D3.js](https://www.dashingd3js.com/)