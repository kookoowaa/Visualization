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



ref. to [Dashing D3.js](https://www.dashingd3js.com/)