# Biding Data to DOM Elements


## Basic Example
- In this example, you will use D3.js to bind data to DOM elements of a basic webpage.
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
          .text("hello")
```
- It should return the following if done all right:
![](https://d1gg5jm9r4jrt6.cloudfront.net/images/binding_data_to_dom_elements_with_d3js_625x616.png)


## D3.js SelectAll Method
- The first part of the example script is `.selectAll("p")`.
- selectAll method uses CSS3 selectors to grab DOM elements (unlike the Select method, it selects all the elements that match the specific selector string.)
- Since in the plain HTML, there is no *<p>* yet, it sould return an empty selection for now


## D3.js Data Operator
- The next part of the example script is `data(theData)` operator.
- The operator joins an array of data with the current selection (which we do not have on the example).
- The data normally joins by key, but when there is no key given, each element of the data is assigned to each element of the current selection.
- For this case, elements `[1,2,3]` should be assigned to the first, second and third `<p>` elements.
- However, as it is said earlier, basic HTML and SelectAll method does not return any `<p>` yet.


## D3.js Virtual Selections (Thinking with Joins)
- The D3.js Data Operator returns *three* virtual selections that are *enter, update, and exit*.
- Enter selection contains placeholders for any missing elements.
- Update selection contains existing elements, bound to data.
- Exit selection removes any remaining elements.
- Since the example script and `.selectAll("p")` returns empty selection, virtual _**enter**_ selection shall contain place holders for <p> elements.


## D3.js Enter Method
- D3.js Enter Method returns the **virtual enter** selection from the Data Operator.
```java
var theData = [1,2,3]

var p = d3.select("body").selectAll("p")
          .data(theData)
```
- For this case, it will return a reference to the placeholder elements for **each data element that did not have a corresponding existing DOM element**.
- However, it is limited to the use of chaining of **append, insert** and **select** operators to be followed.


## D3.js Append Operator
- Looking at the code again:
```java
var theData = [1,2,3]

var p = d3.select("body").selectAll("p")
          .data(theData)
          .enter()
          .append("p")
          .text("hello")
```
- The previous steps had created placeholder element for following operators, `.append("p")` insert **p** elements for each placeholders.
- `theData = [1,2,3]` had three data points, which `.append("p")` creates three HTML paragraph elements.
- After the append operation, it will **return a selection of three** HTML paragraph element.


## D3.js Text Operator
- From the selection returned after append operator, `.text("hello")` inserts specified value on all selected (returned) elements.
- The outcome should look like below:
![](https://s3.amazonaws.com/dashingd3js/images/binding_data_to_dom_elements_with_d3js_625x616.png)



## Where is the data [1,2,3]?
- The example starts with script `var theData = [1,2,3]` and the html ended up with three paragraphs that says **hello**.
- Looking at log from JavaScript Console, we can find where the data has been assigned to.
```java
console.log(p)
```
- From the log, paragraph elements are grouped in `_groups` and each object in `_groups` refer to single <p> in HTML element.
- Under each Object and \_\_data\_\_ property, there is value assigned from `theData = [1,2,3]`
- It should return something like this:
![](https://s3.amazonaws.com/dashingd3js/images/binding_data_to_dom_elements_with_d3js_full_snapshot_625x697.png)