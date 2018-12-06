# SVG Basic Shapes and D3.js


## The Goal
- Understand basic SVG shapes and how to set their attributes


## Drawing an SVG Circle using D3.js
- The basic code for a circle would look like:
```java
<svg width="50" height="50">
  <circle cx="25" cy="25" r="25" fill="purple" />
</svg>
```
- We have been repeatedly drawing SVG circles, and we acknowledge that three attributes are needed to create a circle - `cx`, `cy`, `r`.
- Style method(`fill`) is optional, where if we leave the method off, we get a black circle.
![](https://s3.amazonaws.com/dashingd3js/images/drawing_an_svg_circle_using_d3js_625x620.png)


## Drawing an SVG Rectangle using D3.js
- The basic code for a rectangle would look like:
```java
<svg width="50" height="50">
  <rect x="0" y="0" width="50" height="50" fill="green" />
</svg>
```
- In order to build a rectangle, we need four attributes at least - `x`, `y`, `width`, `height`.
- There are two important thing to pay attention to:
> 1. SVG word for rectangle is **rect**, and `.append("rect")` would create rectangle not '.append("rectangle)'.
> 2. According to SVG coordinate system, the height starts from **TOP** and moves **down** (from (x,y)).
- A simple code for rectangle would return:
![](https://s3.amazonaws.com/dashingd3js/images/drawing_an_svg_rectangle_using_d3js_680x668.png)


## Drawing an SVG Ellipse usidn D3.js
- The basic code for an ellipse would look like:
```java
<svg width="50" height="50">
  <ellipse cx="25" xy="25" rx="15" ry="10" fill="red" />
</svg>
```
- Here, the must attributes are - `cx`, `cy`, `rx`, `ry`.
![](https://s3.amazonaws.com/dashingd3js/images/drawing_an_svg_ellipse_using_d3js_625x667.png)

## Drawing an SVG Straight Line using D3.js
- The basic code for an SVG straight line would look like:
```java
<svg width="50" height="50">
  <line x1="5" y1="5" x1="40" y2="40" stroke="gray" stroke-width="5" />
</svg>
```
- The must attributes to create line are - `x1`, `y1`, `x2`, `y2`, and `stroke`, `stroke-width`
- **NOTE** - style method does not go along with the 'line' as the 'line' element is geometrically one-dimensional without interior.
- Add `stroke` and `stroke-width` with `.attr("storke-width", <NUMBER>)` and `.attr("stroke", <COLOR>)`.
![](https://s3.amazonaws.com/dashingd3js/images/drawing_an_svg_straight_line_using_d3js_625x669.png)


## Drawing Polyline & Polygon SVG Basic Shape using D3.js
- For polyline and polygon, we will go over sample code for now
- Sample code for polyline would look like:
```html
<svg width="50" height="50">
  <polyline fill="none" stroke="blue" stroke-width="2"
            points="05,30
                    15,30
                    15,20
                    25,20
                    25,10
                    35,10" />
</svg>

```

- Sample code for polygon would look like:
```html
<svg width="50" height="50">
  <polygone fill="yellow" stroke="blue" stroke-width="2"
            points="05,30
                    15,10
                    25,30" />
</svg>
```
