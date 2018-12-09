# SVG Paths and D3.js


## The Goal
- Understand basics of SVG Paths and how to create them using D3.js


## The Shape to Make All Shapes
- W3 defines SVG Paths as follows:
> SVG Paths represent the outline of a shape that can be **stroked**, **filled**, used as a **clipping path**, or any combination of all three
- W3 then provides an analogy relating pen and paper roughly as follows:
> 1. Imagine that a pen is put on a piece of paper.
> 2. The pen will touch the paper in a single point.
> 3. The pen  will be moved to another point.
> 4. The path between two points can either be a straight line or a curve.
- This means that SVG Path is capable of creating literally any type of SVG shape


## SVG Path Example
- The shape of an SVG Path element is defined by one attribute: **d**
- The attribute, d, contains a series of commands and parameters in the SVG Path Mini-Language.
- The instructions are defined in case-senstive terms of *moveto* (set a new current point), *lineto* (draw a straight line), *curveto* (draw a curve using a cubic Bézier), *arc* (elliptical or circular arc) and *closepath* (close the current shape by drawing a line to the last moveto).
- For example, we can draw triangle with SVG Path as follows:
```html
<svg width="100" height="100">
  <path d="M 10 25
           L 10 75
           L 60 75
           L 10 25"
           stroke="red" stroke-width="2" fill="none" />
</svg>
```
- In this case, the drawing will start at (10, 25) and move along the coordinates given.
- **NOTE** - The capitalized letters (M, L) means that **absolute positioning** will be viewing window, whereas lower-case letters (m, l) would be using **relative positioning**


## SVG Path Mini-Language
- SVG Path Mini Language is comprised of following lower and upper case letters.

#### Pen Command
- M(m) takes (x,y) as parametors and operates *moveto* function that move the pen to a new location

#### Line Commands
- L(l) takes (x,y) as parametors and operates *linto* function that draw a line to the new point (x,y)
- H(h) takes (x) as parametors and operates *lineto* function that draw a horizontal line to the new point (x)
- V(v) takes (y) as parametors and operates *lineto* function that draw a vertical line to the new point (y)

#### Cubic Bezier Curve Commands
- C(c) takes (x1,y1,x2,y2,x,y) as parametors and operates *curveto* function that draw a cubic Bézier curve to the new point (x,y) using ((x1,y1), (x2,y2)) as the control point (beginning, end)
- S(s) takes (x2,y2,x,y) as parametors and operates *curveto* function that draw a cubic Bézier curve to the new point (x,y) using (x2,y2) as the end of control point (begning point given)

#### Quadratic Bezier Curve Commands
- Q(q) takes (x1,y1,x,y) as parametors and operates *curveto* function that draw a quadratic Bezier curve to (x,y) using (x1,y1) as the control point
- T(t) takes (x,y) as parametors and draw a quadratic Bezier curve to (x,y) and control point is assumed

#### Elliptical Arc Curve Command
- A(a) takes (x,y,rx,ry,large-arc-flag,sweep-flag) as parametors to operate *curveto* function and draws elliptical arc, where the size and orientation of the ellipse are defined by two radii(rx,ry) and and x-axis rotation.

#### End Path Command
- Z(z) closes the path


## D3.js Path Data Generator Line Example
- D3.js provides a Path Data Generator Function for lines:
```java
d3.svg.line()
```
- In order to draw a line path, we use accessor function to call from data and map the data to the line function as follows:
```java
var lineFunction = d3.svg.line()
                         .x(function(d) {return d.x })
                         .y(function(d) {return d.y })
                         .interpolate("linear")
```
- The above will work as a User Defined Function that takes the Data for drawing.
- The whole process for an example would look like:
```java
// data for drawing
var lineData = [{"x": 1,  "y": 5 }, {"x": 20,  "y": 20},
                {"x": 40, "y": 10}, {"x": 60,  "y": 40},
                {"x": 80, "y": 5 }, {"x": 100, "y": 60}]

// accssor function
var lineFunction = d3.line()  // d3.svg.line() deprecated since version 4 and replaced to d3.line()
                     .x(function(d) {return d.x})
                     .y(function(d) {return d.y})
                     .curve(d3.curveLinear)  // .interpolate("linear") deprecated ince vesion 4, and replaced to .curve(d3.####)

// SVG container
var svgContainer = d3.select("body").append("svg")
                                    .attr("width", 200)
                                    .attr("height", 200)

// draw path
var lineGraph = svgContainer.append("path")
                            .attr("d", lineFunction(lineData))
                            .attr("stroke", "blue")
                            .attr("stroke-width", 2)
                            .attr("fill", "none")
```
![](https://s3.amazonaws.com/dashingd3js/images/drawing_an_svg_path_using_d3.js_path_generators_625x711.png)
- There are a few things to note:
>1. `.attr("d", lineFunction(lineData))` is where we sned the data to the accessor function, which returns SVG Path Commands
>2. `.append("path")` is used because there is only one data object (it means no need for `.selectAll()`, `.enter()`, `.append()`)
>3. Dispite explanations on `.interpolate("linear")` function, it is deprecated since version 4 and replace to `.curve(d3.curveLinear)` (default, omittable)
>4. However, same logic applies to the types of interpolations from the [ref](https://www.dashingd3js.com/svg-paths-and-d3js)

- So in summary...
- D3.js take the following dataset:
```java
// data for drawing
var lineData = [{"x": 1,  "y": 5 }, {"x": 20,  "y": 20},
                {"x": 40, "y": 10}, {"x": 60,  "y": 40},
                {"x": 80, "y": 5 }, {"x": 100, "y": 60}]
```
- And runs accessor functions:
```java
var lineFunction = d3.line()
                     .x(function(d) {return d.x})
                     .y(function(d) {return d.y})
                     .curve(d3.curveLinear)
```
- To generate the following SVG Path:
```html
<path d="M1,5L20,20L40,10L60,40L80,5L100,60" stroke="blue" stroke-width="2" fill="none"></path>
```

## D3.js Path Data Generators
- D3.js includes a set of Path Data Generators helper classes for generating SVG Path instructions
- The example above showed the line Path Data Generator:
```java
d3.line()
```
- Interestingly, the path generator is both an object and a function, which means the generator can be called like any functions, and the generators will have additional methods to change its behavior
- The generators include:
```java
// please check if some of the generators are deprecated or not in use

d3.line()
d3.line.radial()
d3.area()
d3.area.radial()
d3.arc()
d3.symbol()
d3.chord()
d3.diagonal()
d3.diagonal.radial()
```

___
ref. to https://www.dashingd3js.com/svg-paths-and-d3js