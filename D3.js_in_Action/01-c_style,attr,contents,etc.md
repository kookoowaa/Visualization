# Styling, attributes, contents

> ## Before we move on (d3.csv in D3_v4 and D3_v5)
> D3 now uses Promises instead of asynchronous callbacks to load data. Promises simplify the structure of asynchronous code, especially in modern browsers that support async and await. (See this introduction to promises on Observable.) For example, to load a CSV file in v4, you might say:

```java
d3.csv("file.csv", function(error, data) {
  if (error) throw error;
  console.log(data);
});
```

> In v5, using promises:

```java
d3.csv("file.csv").then(function(data) {
  console.log(data);
});
```
> Note that you don’t need to rethrow the error—the promise will reject automatically, and you can promise.catch if desired. Using await, the code is even simpler:


## Visualization from the data loaded

- When data is processed and contains only the quantitative values, it is easy to construct a chart.
- Scaling with `d3.max()` makes everything so easy and comfortable.

```java
d3.csv("cities.csv")
  .then(function(incomingData) {
// For D3 v4 or ealier, please use below;
// d3.csv("cities.csv", function(error,data) {dataViz(data);});
// function dataViz(incomingData) {
    
    // from population from element from incomingData 
	var maxPopulation = d3.max(incomingData, function(el) {
		// population value to int
		return parseInt(el.population);
	});

	var yScale = d3.scaleLinear().domain([0, maxPopulation]).range([0,460]);
	d3.select("svg").attr("style", "height: 480px; width: 600px;");
	d3.select("svg")
	  .selectAll("rect")
	  .data(incomingData)
	  .enter()
	  .append("rect")
	  .attr("width", 50)
	  .attr("height", function(d) {return yScale(parseInt(d.population));})
	  .attr("x", function(d,i) {return i * 60;})
	  .attr("y", function(d) {return 480 - yScale(parseInt(d.population));})
	  .style("fill", "blue")
	  .style("stroke", "red")
	  .style("stroke-width", "1px")
	  .style("opacity", .25);
}

```
![](Color_Figures/Part_1/2-21.jpg)


- In order to use "tweets.json", and see how many postings are made per person, we need to use `d3.nest()` to manipulate data a little.

```java
d3.json("tweets.json")
  .then(function(incomingData){

  	var nestedTweets = d3.nest()
  	                     .key(function(el) {
                             return el.user;
                         })
  	                     .entries(incomingData);
      
    nestedTweets.forEach(function (el) {
    	el.numTweets = el.values.length;
    })

    var maxTweets = d3.max(nestedTweets, function(el) {
    	return el.numTweets;
    })

    var yScale = d3.scaleLinear().domain([0,maxTweets]).range([0,100])

    d3.select("svg")
      .selectAll("bar")
      .data(nestedTweets)
      .enter()
      .append("rect")
      .attr("width", 50)
      .attr("height", function(d) {return yScale(d.numTweets)})
      .attr("x", function (d,i) {return i * 60;})
      .attr("y", function (d) {return 100 - yScale(d.numTweets)})
      .style("fill", "blue")
      .style("stroke-width", "1px")
      .style("stroke", "red")
      .style("opacity", .25)

 })


  //
```

