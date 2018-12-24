# Data Binding

- From this chapter, we will look into data binding, and how it creates and modifies elements
> Loading > Format > Evaluate(EDA) > **Create** > Update

## Selection and Binding
- The web structures and layers chages via selection in D3. 
- Selection consists of at least one DOM element and may have data relevant.
- Using `d3.select()...`  DOM element can either be created, modified, or deleted.
- The below is a sample of binding data to elements using 'cities.csv':
```java
d3.csv("cities.csv", function(error, data) {dataViz(data)});
function datavis(incomingData) {
	// An empty selection as there is no "cities" class in <div> element in <body>
	d3.select("body").selectAll("div.cities")
	  // Bind data to a selection
	  .data(incomingData)
	  // Define how to handle when there are more data than DOM element
	  .enter()
	  // Creates elements inside current selection
	  .append("div")
	  // Define class
	  .attr("class", "cities")
	  // Set contents within <div>
	  .html(function(d,i) {return d.label; });
}
// ref. to "Fig_02_11.html"
```
- Let's look at each command one by one:

### d3.selectAll()
- Selection process starts always with either `d3.select()` or `d3.selectAll()`
- An empty selection is returned when there is no element correspondant to parameter.
- Normally `enter()` mothod is being used to create element to be inserted.

### data()
- `data()` method links selection with array data.
- Each cities in dataset connects to DOM in selection, where data is saved to 'data' attribute.
- Via JavaScript, we can access to the data:
```java
// Return data of the first city, "San Francisco"
document.getElementsByClassName("cities")[0].__data__
// {label: "San Francisco", population: " 750000", country: "USA", x: "37", y: "-122"}
```

### enter() and exit()
- When there are more Data than DOM elements in selection, `enter()` repeats as many times as the Data.
- When there are more DOM elements in selection than Data, `exit()` method is being used.

### append() and insert()
- In general, there are more Data than DOM, and adds elements to DOM via `append()`.
- `insert()` is similar to `append()` but it can specify 'where' to add the element.

### attr()
- `attr()` adds attributes to elements created from `append()`.
- Dispite the fact that we had referenced as `.selectAll("div.cities")` previously, since it was an empty selection we need to create and add attributes. (*may need more study on this comment*)

### html()
- Contents to DOM will be set via `html()` method.


___
## In-line Functions to access data
- From a previous example, we can find that each dictionary set from data is assigned to '\<div\>'.
- That is because of the use of in-line function, and the function returns **index** and **data** where we notes **i** for index and **d** for data.
- From here after, we will be using "d3ia.html" for visualization samples via d3.
