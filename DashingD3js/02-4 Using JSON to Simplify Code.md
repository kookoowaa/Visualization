# Using JSON to Simplify Code


## The Goal
- Understand how using JSON can simplify D3.js code as well as JavaScript code.
- From previous examples to bind JSON objects to the `__data__` attribute and how to use JSON to clean up the code for easier comprehension.


## Previous Example of Three Circles
- In the previous example, we created and styled three circles using D3.js as follows:
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
- The example used data to set **cx**, **cy** and hard coded values for **r** and **fill**
- It is never a good idea to hard-code values as when data changes, modification needs to be made in several places.


## Binding JSON Objects to the \_\_data\_\_ Attribute
- We had previously created JSON Object, it is about how we bind the data to the `__data__` attribute.
- Although it may seem complicated, exactly the same process as we have been doing with `var space Circles = [30, 70, 110]`.
- In JavaScript Console, we can type in:
```java
var jsonCircles = [
  {
    "x_axis": 30,
    "y_axis": 30,
    "radius": 20,
    "color": "green"
  }, {
    "x_axis": 70,
    "y_axis": 70,
    "radius": 20,
    "color": "purple"
  }, {
    "x_axis": 110,
    "y_axis": 100,
    "radius": 20,
    "color":  "red"
  }
];


var svgContainer = d3.select("body").append("svg")
                                    .attr("height", 200)
                                    .attr("width", 200)

var circles = svgContainer.selectAll("circle")
                          .data(jsonCircles)
                          .enter()
                          .append("circle")
```
- We can check on log to see if JSON Object has been appropriately bounded to the `__data__`.
```java
console.log(circles)
```
![](https://s3.amazonaws.com/dashingd3js/images/used_d3.js_to_attach_json_object_to_svg_circle_625x387.png)


## Use Bound JSON Objects to Alter SVG Element
- Using bound data on \_\_data\_\_ cannot be so difficult since we know how to 1) call the data in `__data__` 2) call value in JSON using name
- Such functions will return relevant values:
```java
function (d) { return d.x_axis}

function (d) { return d.y_axis}

function (d) { return d.radius}

function (d) { return d.color}
```
- The complete code would look like:
```java
var jsonCircles = [
  {
    "x_axis": 30,
    "y_axis": 30,
    "radius": 20,
    "color": "green"
  }, {
    "x_axis": 70,
    "y_axis": 70,
    "radius": 20,
    "color": "purple"
  }, {
    "x_axis": 110,
    "y_axis": 100,
    "radius": 20,
    "color":  "red"
  }
];


var svgContainer = d3.select("body").append("svg")
                                    .attr("height", 200)
                                    .attr("width", 200)


var circles = svgContainer.selectAll("circle")
                          .data(jsonCircles)
                          .enter()
                          .append("circle")


var circlesAttr = circles.attr("cx", function (d) {return d.x_axis})
                         .attr("cy", function (d) {return d.y_axis})
                         .attr("r", function (d) {return d.radius})
                         .style("fill", function (d) {return d.color})
```
![](https://s3.amazonaws.com/dashingd3js/images/created_three_circles_with_d3.js_and_json_data_625x717.png)