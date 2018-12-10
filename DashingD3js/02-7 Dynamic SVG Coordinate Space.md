# Dynamic SVG Coordinate Space


## The Goal
- How to make the SVG Coordinate Space dynamic so that the Visualization is visible regardless of the data.
- SVG Coordiante Space scale up and/or down to fit the data.


## Three SVG Rectangle Example
- The following similar to the example in "02-4 Using JSON to Simplify Code" will be used:
```java
var jsonRectangle = [
  {
    "x_axis": 10,
    "y_axis": 10,
    "height": 20,
    "width": 20,
    "color": "green"
  }, {
    "x_axis": 40,
    "y_axis": 40,
    "height": 20,
    "width": 20,
    "color": "purple"
  }, {
    "x_axis": 70,
    "y_axis": 70,
    "height": 20,
    "width": 20,
    "color":  "red"
  }
];


var svgContainer = d3.select("body").append("svg")
                                    .attr("height", 100)
                                    .attr("width", 100)

var rects = svgContainer.selectAll("rect")
                          .data(jsonRectangle)
                          .enter()
                          .append("rect")

var drawRect = rects.attr("x", function(d){return d.x_axis})
                    .attr("y", function(d){return d.y_axis})
                    .attr("height", function(d){return d.height})
                    .attr("width", function(d){return d.width})
                    .style("fill", function(d){return d.color})
```
- And the following will be returned:
![](https://s3.amazonaws.com/dashingd3js/images/three_svg_rectangles_drawn_with_d3js_628x773.png)


- The thing is, **What if** x-coordinate of purple rectangle suddenly quadruple from 40 to 160?
```java
//Going from
 { "x_axis": 40, "y_axis": 40, "height": 20, "width":20, "color" : "purple" }
 
 //to
 { "x_axis": 160, "y_axis": 40, "height": 20, "width":20, "color" : "purple" }
```
- In this case, even when SVG rectangle is there in data, it disappears from the container.
![](https://s3.amazonaws.com/dashingd3js/images/three_svg_rectangles_drawn_with_d3js_one_disappeared_630x773.png)


## Manually Adjusting SVG Container Space
- To get the new data to fit inside the SVG container, the width of the container need to increase to accommodate new coordinate.
- Adjusting SVG Viewport as follows would have the purple square on the screen:
```java
var svgContainer = d3.select("body").append("svg")
                                    .attr("width", 200)
                                    .attr("height", 100)
```
![](https://s3.amazonaws.com/dashingd3js/images/three_svg_rectangles_drawn_with_d3js_bigger_svg_viewport_630x774.png)
- It is a perfect solution, until the x-coordinate shifts again and again or....


## Dynamically Adjusting SVG Container Space
- What is really needed is to have the container dynamically change the width and height attributes according to the data.
- We can loop through the array of JSON object to return the max x/y-coordinate to have it as a container size.
- The loop can be written as such:
```java
var jsonRectangle = [
  {
    "x_axis": 10,
    "y_axis": 10,
    "height": 20,
    "width": 20,
    "color": "green"
  }, {
    "x_axis": 160,
    "y_axis": 40,
    "height": 20,
    "width": 20,
    "color": "purple"
  }, {
    "x_axis": 70,
    "y_axis": 70,
    "height": 20,
    "width": 20,
    "color":  "red"
  }
];


// max object to be updated
var max_x = 0;
var max_y = 0;

// Loop through the JSON object
for (var i = 0;
     i < jsonRectangle.length;
     i = i + 1 ) { // or "i++"

     var temp_x = jsonRectangle[i].x_axis + jsonRectangle[i].width;
     var temp_y = jsonRectangle[i].y_axis + jsonRectangle[i].height;
     
     if (temp_x > max_x) {max_x = temp_x}
     if (temp_y > max_y) {max_y = temp_y}

     }

max_x = max_x * 1.1
max_y = max_y * 1.1


var svgContainer = d3.select("body").append("svg")
                                    .attr("height", max_y)
                                    .attr("width", max_x)

var rects = svgContainer.selectAll("rect")
                          .data(jsonRectangle)
                          .enter()
                          .append("rect")

var drawRect = rects.attr("x", function(d){return d.x_axis})
                    .attr("y", function(d){return d.y_axis})
                    .attr("height", function(d){return d.height})
                    .attr("width", function(d){return d.width})
                    .style("fill", function(d){return d.color})
```