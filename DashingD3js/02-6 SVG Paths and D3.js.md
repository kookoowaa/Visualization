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
- Q(q)
- T(t)

#### Elliptical Arc Curve Command
- A(a)

#### End Path Command
- Z(z)


## D3.js Path Data Generator Line Example


## D3.js Path Data Generators
___
ref. to https://www.dashingd3js.com/svg-paths-and-d3js