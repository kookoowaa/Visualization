# Usingd Data Bound to DOM Elements


## Basic Example
- From previous example, we had returned three 'hello', instead of values in it.
- If we want the values instead of 'hello' (in most cases), how do we do it?
- starting with a plain basic HTML(plain.html):
```html
<!DOCTYPE html>
<html>
  <head>
    <script type="text/javascript" src="d3/d3.min.js"></script>
  </head>
  <body>
  </body>
</html>
```

- From the JavaScript Console, run the following to see what happens:
```java
var theData = [1,2,3]

var p = d3.select("body").selectAll("p")
          .data(theData)
          .enter()
          .append("p")
          .text(function (d) {return d})
```
- It should return the following if done all right:
![](https://s3.amazonaws.com/dashingd3js/images/using_data_bound_to_dom_elements_625x592.png)


## D3.js Text Operator Revisited
- As covered previously, the Text Operator sets text content of the node to the **specified value** on all selected elements.
- Also, we see from the example that if the value passed to it is a function, then the **function is evaluated for each element in order**.
- So for this case, instead of setting 'hello' for the text value, the function goes through each element, gets the \_\_data\_\_ property and returns it to the Text Operator.


## JavaScript Functions in D3.js Operators
- We have passed a JavaScript function to the Text operator:
```java
function (d) {return d}
```
- JavaScript function works in a way as follows:
```java
function functionName (variableName) {
  return variableName;
}
```
- The "function" operator defines a function named "functionName" which takes a variable "variableName" and then returns the same variable.
- If the `functionName` is missing, it is called *anonoymous function*, and is used to make it more concise to be used in one place only.

- We can also test simple function that adds 2 to the given data like:
```java
var theData = [1,2,3]

var p = d3.select("body").selectAll("p")
          .data(theData)
          .enter()
          .append("p")
          .text(function (d) {
            var addedNumber = 2;
            var tempNumber;
            tempNumber = d + addedNumber;
            return tempNumber
          })
```
![](https://s3.amazonaws.com/dashingd3js/images/using_functions_inside_d3.js_operators_625x655.png)


## Variables Available inside D3.js Operators
- Just as we did with the \_\_data\_\_, we can also call the value of index.
- It can be done as follows:
```java
var theData = [1,2,3]

var p = d3.select("body").selectAll("p")
          .data(theData)
          .enter()
          .append("p")
          .text(function (data, index) {
            return "data = " + data + ", index = " + index;
          })
```
![](https://s3.amazonaws.com/dashingd3js/images/viewing_index_and_datum_variables_in_d3.js_operator_625x620.png)