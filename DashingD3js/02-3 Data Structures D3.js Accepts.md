# Data Structures D3.js Accepts


## The Goal
- Understand how to structure data for better use of D3.js.


## What we have seen thus far
- Every examples that have been covered so far has included a dataset at the top of the example:
```java
var spaceCircles = [30, 70, 110];
```
- `spaceCircles` is a JavaScript Array or a list of variables index-able.
- Which means we can index Array as follows:
```java
var spaceCircles = [30, 70, 110];

spaceCircles[0]
//returns number 30

spaceCircles[1]
//returns number 70

spaceCircles[2]
//returns number 110
```


## D3.js Selections are Arrays
- An array of 1 element will return - HTML "body" element - if the following code was set to run:
```java
console.log(d3.select("body"))
```
![](https://s3.amazonaws.com/dashingd3js/images/d3.js_selections_are_arrays_625x221.png)
- Recall from one of previous example, we could return **value** and **index** using function such as:
```java
function (d, i) {return "index = " + i + ", value = " + d}
```
- It is important to note that `.data()` operator receives an **array of data**, regardless of what is inside of teh array.


## Loading external Data Resources
- D3.js has built-in functionality to load in the following types of exernal resources:
> an XMLHttpRequest
> a text file
> a JSON blob
> an HTML documnet gragment
> an XML documnet fragment
> a comma-separated values (CSV) file
> a tab-separated values (TSV) file
- Later sections will cover how to setup a server and load the external resources.


## JSON
- JSON stands for JavaScript Object Notion.
- It is a collection of name/value pairs, where the name **must always be in double quotes**, for example:
```java
var secretAgent = {
  "name": "James Bond",
  "drink": "dry martini - shaken, not stirred",
  "number": "007"
};

>>secretAgent.number
//returns 007
```


## Array of JSON Object
- As mentioned, Array can hold any type of information, including JSON.
- So going back to circle example, we can hold all the necessary information in Array of JSONs as follows:
```java
var jsonCircle = [
  {
    "x_axis": 30,
    "y_axis": 30,
    "radius": 20,
    "color": "green"
  },
  {
    "x_axis": 70,
    "y_axis": 70,
    "radius": 20,
    "color": "purple"
  },
  {
    "x_axis": 110,
    "y_axis": 110,
    "radius": 20,
    "color": "red"
  }
]
```
- In order to get data out of `jsonCicle`, we can do the following:
```java
>>jsonCicle[0].color
//returns "green"

>>jsonCicle[1].y_axis
//returns 70

>>jsonCicle[2].radius
//returns 20
```