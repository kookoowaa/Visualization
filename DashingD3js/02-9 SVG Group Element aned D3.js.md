# SVG Group Element and D3.js


## The Goal
- Define what the SVG Group Element is and how to use
- Use SVG Group Element manually
- Demonstrate how D3.js works with the SVG Group Element


## SVG Group Element
- SVG Group Element is used to group SVG elements together where it is defined by **<g>** and **</g>**
- It can be nested inside of other SVG Group Elements:
```html
<g>
  <g>
  ...
  </g>
</g>
```
- If any transformation applied to the SVG Group Element is applied to all of the child element contained inside

- The major uses of the SVG Group Element are:
> 1. **Grouping** - to group a set of SVG elements that share the same attr.
> 2. **Transforming** - To define a new coordinate system for a set of SVG elements by applying a transformation to each coordinate specified


## Grouping SVG Elements Together
- The example will start with 4 SVG Basic Shape Elements with 2 circles and 2 rectangles:
```html
<svg width="200" height="200">
  <circle cx="20" cy="20" r="20" fill="green" />
  <rect x="110" y="110" height="30" width="30" fill="blue" />
  <circle cx="70" cy="70" r="20" fill="purple" />
  <rect x="160" y="160" height="30" width="30" fill="red" />
</svg>
```
- It works fine, but it is very difficult to decipher what is happening.
- With SVG Group element, the code can be organized and easier to read:
```html
<svg width="200" height="200">
  <g>
    <circle cx="20" cy="20" r="20" fill="green" />
    <circle cx="70" cy="70" r="20" fill="purple" />
  </g>
  <g>
    <rect x="110" y="110" height="30" width="30" fill="blue" />
    <rect x="160" y="160" height="30" width="30" fill="red" />
  </g>
</svg>
```
![](fig/02-9_fig1.svg)


## Transforming SVG Elements Together (Part 1)
- If we wanted to move circles 80 unites to the right, then we can simply add 80 units to the **cx** attribute:
```html
<svg width="200" height="200">
  <g>
    <circle cx="100" cy="20" r="20" fill="green" />
    <circle cx="150" cy="70" r="20" fill="purple" />
  </g>
  <g>
    <rect x="110" y="110" height="30" width="30" fill="blue" />
    <rect x="160" y="160" height="30" width="30" fill="red" />
  </g>
</svg>
```
![](fig/02-9_fig2.svg)
- However, that is not exactly what we expected for a solution, where we use SVG Group element


## SVG Transform Attribute
- The SVG Transform Attribute applies a list of transformations to an element like:
```html
<svg width="200" height="200">

  // This way:
  <g transform="translate(...) scale(...) rotrate(...) translate(...) rotate(...)">
  ...
  </g>


  // or this way works the same:
  <g transform = "translate(...)">
    <g transform = "scale(...)">
      <g transform = "rotate(...)">
        <g transform = "translate(...)">
          <g transform = "rotate(...)">
          ...
          </g>
        </g>
      </g>
    </g>
  </g>

</svg>
```
- There are 6 types of transformation available:
>1. matrix(\<a\> \<b\> \<c\> \<d\> \<e\> \<f\>): transformation matrix of six values
>2. translate(\<x\> [\<y\>]): translation by x and y. If y not given, it is assumed to be zero
>3. scale(\<x\> [\<y\>]): scale operation by x and y. If y not given, it is assumed to be same as x
>4. skewX(\<a\>): skew transformation along the X axis by a degrees
>5. skewY(\<a\>): skew transformation along the Y axis by a degrees


## Transformaing SVG Elements Together (Part 2)
- Instead of changing values inside SVG objects, we can group transform now
- Using the first example, we can add a code to shift circles by 80 units:
```html
<svg width="200" height="200">
  <g transform = "translate(80,0)">
    <circle cx="20" cy="20" r="20" fill="green" />
    <circle cx="70" cy="70" r="20" fill="purple" />
  </g>
  <g>
    <rect x="110" y="110" height="30" width="30" fill="blue" />
    <rect x="160" y="160" height="30" width="30" fill="red" />
  </g>
</svg>
```
![](fig/02-9_fig3.svg)
- If we use the `transform` method, interestingly the *cx* values **do not change**


## Grouping SVG Elements with D3.js
- Using D3.js and console command, we will produce the first example as follows:
```java
var circleData = [
  { "cx": 20, "cy": 20, "radius": 20, "color" : "green" },
  { "cx": 70, "cy": 70, "radius": 20, "color" : "purple" }];


var rectangleData = [
  { "rx": 110, "ry": 110, "height": 30, "width": 30, "color" : "blue" },
  { "rx": 160, "ry": 160, "height": 30, "width": 30, "color" : "red" }];

var svgContainer = d3.select("body").append("svg")
                                    .attr("width",200)
                                    .attr("height",200);

var circles = svgContainer.selectAll("circle")
                          .data(circleData)
                          .enter()
                          .append("circle");

var circleAttributes = circles
                       .attr("cx", function (d) { return d.cx; })
                       .attr("cy", function (d) { return d.cy; })
                       .attr("r", function (d) { return d.radius; })
                       .style("fill", function (d) { return d.color; });

var rectangles = svgContainer.selectAll("rect")
                             .data(rectangleData)
                             .enter()
                             .append("rect");

var rectangleAttributes = rectangles
                          .attr("x", function (d) { return d.rx; })
                          .attr("y", function (d) { return d.ry; })
                          .attr("height", function (d) { return d.height; })
                          .attr("width", function (d) { return d.width; })
                          .style("fill", function(d) { return d.color; });
```
![](https://s3.amazonaws.com/dashingd3js/images/svg_group_element_example_generated_with_d3.js_652x774.png)
___
- If we were to group elements together, we simply append SVG Group Element after container:
```java
var svgContainer = d3.select("body").append("svg")
                                    .attr("width",200)
                                    .attr("height",200);

var circleGroup = svgContainer.append("g");

// Note that to draw circle, we used "circleGroup" instead of "svgContainer"
var circles = circleGroup.selectAll("circle")
                         .data(circleData)
                         .enter()
                         .append("circle");
```
- If we wanted to tansform figures, then we simply add attributes to the Group:
```java
var circleGroup = svgContainer.append("g")
                              .attr("transform", "translate(80,0)");
```
___
- Should we put all together, the full example would look like:
```java
var circleData = [
  { "cx": 20, "cy": 20, "radius": 20, "color" : "green" },
  { "cx": 70, "cy": 70, "radius": 20, "color" : "purple" }];


var rectangleData = [
  { "rx": 110, "ry": 110, "height": 30, "width": 30, "color" : "blue" },
  { "rx": 160, "ry": 160, "height": 30, "width": 30, "color" : "red" }];

var svgContainer = d3.select("body").append("svg")
                                    .attr("width",200)
                                    .attr("height",200);

// SVG group element for circles
var circleGroup = svgContainer.append("g")
                              .attr("transform", "translate(80,0)");

// circles added to the circleGroup
var circles = circleGroup.selectAll("circle")
                          .data(circleData)
                          .enter()
                          .append("circle");

var circleAttributes = circles
                       .attr("cx", function (d) { return d.cx; })
                       .attr("cy", function (d) { return d.cy; })
                       .attr("r", function (d) { return d.radius; })
                       .style("fill", function (d) { return d.color; });

// rectangles added to the svgContainer
var rectangles = svgContainer.selectAll("rect")
                             .data(rectangleData)
                             .enter()
                             .append("rect");

var rectangleAttributes = rectangles
                          .attr("x", function (d) { return d.rx; })
                          .attr("y", function (d) { return d.ry; })
                          .attr("height", function (d) { return d.height; })
                          .attr("width", function (d) { return d.width; })
                          .style("fill", function(d) { return d.color; });
```
- This returns:
![](https://s3.amazonaws.com/dashingd3js/images/applied_a_transformation_to_an_svg_group_element_using_d3.js_596x775.png)