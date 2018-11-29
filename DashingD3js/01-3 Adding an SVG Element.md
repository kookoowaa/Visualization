# Adding an SVG Element


## Basic Example
- Adding an SVG Element is a little more complicated than adding a DOM Element.
- Recall from previous SVG circle, we will create circle as such:
```html
<svg width="50" height="50">
	<circle cx="25" cy="25" r="25" fill="purple" />
</svg>
```

- Again from the JavaScript Console, we can run the following to add a circle:
```java
d3.select("body").append("svg").attr("width", 50).attr("height", 50).append("circle").attr("cx", 25).attr("cy", 25).attr("r", 25).style("fill", "purple")
```
- It should return the following if done all right:
![](https://d1gg5jm9r4jrt6.cloudfront.net/added_svg_element_with_d3.js_673x521.png)


## D3.js Legibility
- It was a basic example, but if we progress and faces real-time projects, the lines could potentially go for a hundred, easily.
- So it is advised to break for legibility like below (JavaScript does not care about white spaces):
```java
d3.select("body")
  .append("svg")
  .attr("width", 50)
  .attr("height", 50)
  .append("circle")
  .attr("cx", 25)
  .attr("cy", 25)
  .attr("r", 25)
  .style("fill", "purple")
```


## D3.js Style Operator
- The last line of the JavaScript code is `.style("fill", "purple")`.
- The *style Operator*, if `name`, and `value` is specified, sets the **CSS style property** for the given selection with the given specified value.
- Here, the given selection was all that came before the statement.
- CSS style property was "fill", and specified value was "purple".
- It is considered powerful because we can apply **any CSS style property** to any type of selection.


## D3.js Chain Syntax
- Looking at the code, we can notice a period in front of every method and operator:
```java
d3.select("body")
  .append("svg")
  .attr("width", 50)
  .attr("height", 50)
  .append("circle")
  .attr("cx", 25)
  .attr("cy", 25)
  .attr("r", 25)
  .style("fill", "purple")
```
- The syntax is called *Chain Syntax*
- Methods and operators are applied to which is to the left of it.
- Looking at the code again, we can see taht it move from left to right: Selection returned, operator applied to return selection.... so on and so forth.
- This is important, because it means **order matters**.


## Selection as JavaScript Variables
- It can either be written and go from this:
```java
d3.select("body")
  .append("svg")
  .attr("width", 50)
  .attr("height", 50)
  .append("circle")
  .attr("cx", 25)
  .attr("cy", 25)
  .attr("r", 25)
  .style("fill", "purple")
```
- or to this by assigning those selections to a JavaScript Variable:
```java
var BodySelection = d3.select("body");

var SvgSelection = BodySelection.append("svg")
								.attr("width", 50)
								.attr("height", 50);

var CircleSelection = SvgSelection.append("circle")
								  .attr("cx", 25)
								  .attr("cy", 25)
								  .attr("r", 25)
								  .style("fill", "purple");
```