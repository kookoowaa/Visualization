# Creating SVG Elements based on Data


## The Goal
- We will start with the end product and then worked tounderstand it
- Our Goal is to take the following dataset:
```java
var circleRadii = [40, 20, 10];
```
- and transform the data into visualization using D3.js:
![](https://s3.amazonaws.com/dashingd3js/images/goal_of_creating_svg_elements_based_on_data_625x182.png)


## SVG Circle Elements
- First we start with what an SVG Circle Element is and how it is defined.
- When defining the circle CVG shape, three attributes needs to be attached:
>- cx - The x-axis coordinate of teh center of the circle
>- cy - The y-axis coordinate of teh center of the circle
>- r  - The radius of the circle
- If we recall the basic building blocks section, we created a circle as follows:
```html
<svg width = '50' height = '50'>
  <circle cx = '25' cy = '25' r = '25' fill = 'purple'/>
</svg>
```
- Given above building blocks, we created circle using D3.js as follows:
```java
var bodySelection = d3.select("body")

var svgSelection = bodySelection.append("svg")
                                .attr("width", 50)
                                .attr("height", 50);

var circleSelection = svgSelection.append("circle")
                                  .attr("cx", 25)
                                  .attr("cy", 25)
                                  .attr("r", 25)
                                  .style('fill', 'purple');
```


## Create an SVG Element to Hold SVG Elements
- Before we begin with circles, we need to create SVG element to hold SVG Circles as we did with the `bodySelection` from above.
- This time, the size of the Container will be (200, 200)
```java
var circleRadii = [40, 20, 10];

var svgContainer = d3.select("body").append("svg")
                                    .attr("width", 200)
                                    .attr("height", 200);
```


## Bind Data to SVG Circles
- We will take a similar procedure as we did with the "Hello" example.
- In this case, we are going to do the following steps:
>- selectAll **circle**
>- bind the data
>- select the virtual *.enter()* selection
>- append the SVG circle elements

- Put it in JavaScript code:
```java
var circleRadii = [40, 20, 10];

var svgContainer = d3.select("body").append("svg")
                                    .attr("width", 200)
                                    .attr("height", 200);

var circles = svgContainer.selectAll("circle")
                          .data(circleRadii)
                          .enter()
                          .append("circle")
```

- If we run the `console.log` for the following code, we find that the data has been bound to the SVG circle.
- However, since we have not yet defined attributes, circles will not appear.
```java
console.log(d3.select("body").append("svg").attr("width", 200).attr("height", 200).selectAll("circle").data(circleRadii).enter().append("circle"));
```
![](https://s3.amazonaws.com/dashingd3js/images/showing_bound_data_for_concentric_circles_data_visualization_625x528.png)


## Use Bound Data to Alter SVG Circles
- We will use `function (d) { return d; }` to load the data to assign to the attributes.
- It can be put this way:
```java
var circleRadii = [40, 20, 10];

var svgContainer = d3.select("body").append("svg")
                                    .attr("width", 200)
                                    .attr("height", 200);

var circles = svgContainer.selectAll("circle")
                          .data(circleRadii)
                          .enter()
                          .append("circle")

var circlesAttr = circles.attr("cx", 50)
                         .attr("cy", 50)
                         .attr("r", function (d) {return d; })
                         .style("fill", "green");
```
![](https://s3.amazonaws.com/dashingd3js/images/three_circles_with_the_right_radii_625x718.png)

- We have created three circles and added attributes to the circle selection as accordingly.
- Last thing to do is to color the SVG Circle based on the data.


## Styling SVG Elements Based on Data
- For styling Circle, we used D3.js' `.style()` operator to modify the CSS style.
- Since D3.js lets us use a function indside operator. we can write the following if statement:
```java
var circleRadii = [40, 20, 10];

var svgContainer = d3.select("body").append("svg")
                                    .attr("width", 200)
                                    .attr("height", 200);

var circles = svgContainer.selectAll("circle")
                          .data(circleRadii)
                          .enter()
                          .append("circle")

var circlesAttr = circles.attr("cx", 50)
                         .attr("cy", 50)
                         .attr("r", function (d) {return d; })
                         .style("fill", function (c) {
                         	var returnColor
                         	if (c === 40) { returnColor = "green"
                            } else if (c === 20) {returnColor = "purle"
                            } else if (c === 10) {returnColor = "red"}
                            return returnColor
						 });
```
- The function returns "green" if radius is 40, "purple" if radius is 20, and "red" if radius is 10 for circle style.
- Should it have been done correctly, it sould return the following output:
![](https://s3.amazonaws.com/dashingd3js/images/generated_three_concentric_svg_circles_using_d3.js_625x718.png)