# Using the SVG Coordinate Space


## The Goal
- In this section, we will use D3.js to add SVG elements to specific coordiantes in teh graph based on data.
- Our Goal is to take the following dataset:
```java
var spaceCircles = [30, 70, 110];
```
- and transform it to the following data visualization using D3.js:
![](https://s3.amazonaws.com/dashingd3js/images/three_circles_in_svg_coordinate_space_using_d3.js_600x252.png)


## SVG Coordinate Space
- SVG coordinates distinguishes from ordinary mathmatical graph coordinate in two features:
> 1. SVG Coordinate space has x=0,y=0 fall on the top left
> 2. SVG Coordinate space has the Y coordinategrowing from *top to bottom*
- Which means that as **Y** increases, the coordinates move down, not up
![](https://s3.amazonaws.com/dashingd3js/images/svg_coordinate_graph_circle_drawing_331x200.png)


## Create an SVG Element to Hold SVG Elements
- Again start with 'plain.html' and create following into JavaScript Console to create SVG element:
```java
var spaceCircles = [30, 70, 110]

var svgContainer = d3.select("body").append("svg")
                                    .attr("width", 200)
                                    .attr("height", 200)
```


## Bind Data to SVG Circles
- The same procedure as to what we have been doing.
- The code below should return three SVG circle elements:
```java
var spaceCircles = [30, 70, 110]

var svgContainer = d3.select("body").append("svg")
                                    .attr("width", 200)
                                    .attr("height", 200)

var circles = svgContainer.selectAll("circle")
                          .data(spaceCircles)
                          .enter()
                          .append("circle")
```


## Use Bound Data to Alter SVG Circle Coordinates and Styling Elements
- Instead to using function to load data to `r` to change the size, apply functions to `cx`, `cy` to change the location of circles.
```java
var spaceCircles = [30, 70, 110]


var svgContainer = d3.select("body").append("svg")
                                    .attr("width", 200)
                                    .attr("height", 200)


var circles = svgContainer.selectAll("circle")
                          .data(spaceCircles)
                          .enter()
                          .append("circle")


var circlesAttr = circles.attr("cx", function (d) { return d } )
                         .attr("cy", function (d) { return d })
                         .attr("r", 20)
                         .style("fill", function (i){

                         	var circleColor
                         	if (i === 30) {
                         		circleColor = "green"
                         	} else if (i === 70) {
                         		circleColor = "purple"                         			
                         	} else {
                         		circleColor = 'red'
                     		}
                         	return circleColor

                         })
```
![](https://s3.amazonaws.com/dashingd3js/images/created_three_colored_circles_using_d3.js_in_svg_coordinate_space_600x774.png)