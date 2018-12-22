# Handling Data


## Visualization process
- In order to visualize a dataset, D3 follows the process below:  
	Loading > Format > Evaluate > Create > Update


## Loading
- Data is available in various file foramt including XML, CSV, JSON (plus text and html)
- CSV is not capable of explaining nested relationship
- `d3.csv()` and `d3.json` creates JSON variable, whereas `d3.xml()` creates XML document
> **IMPORTANT**
>- Importing data via d3(`d3.csv()`, `d3.json()`, or `d3.xml()`) does **not allow** opening a **local file**
>- To get around this, a local web server is need, where pytyhon can help
```cmd
## before typing in the code, make sure that you are on the right directory
python -m http.server 8888
```
>- While the server is on, one can access the server via [http://localhost:8888]
>- To open csv file, you need to first open html from the server then load csv file from server


### File Format  
- `d3.csv()` and `d3.json()` take following parametor to load file:
```java
d3.csv("Source/cities.csv", function(error,data) {console.log(error,data)})
// error is optional, and can only specify data
d3.csv("Source/cities.csv", function(data) {console.log(data)})
```
- The methods above are async-hronous and need to wait for the data to fully loaded.


## Data Formatting
- It is important to pre-process data before analysis or visualization.
- In terms of formats, data can be in quantity, geometry, category, phase, datetime, and raw data like texts and prictures.
- For the ease of analysis and visualization, it is important to transform data acoording to the purpose of it:

> ### 1. Casting: 
> First, dtype of variables need to be transfromed accordingly, or casted accordingly.
> Some of the dtypes that are familiar includes: date, int, float, array, etc.
```java
// Parsing data
parseInt("77"); // str > int
parseFloat("3.14"); // str > float
Date.parse("Sun, 22 Dec 2013 08:00:00 GMT"); // str > date
text = "alpha,beta,gamma";
text.split(","); // str > array
```
> ### 2. Scaling:
>- It is not so typical to expect your data to fit in screen straightly without formatting, because of scale.
>- `d3.scale().linear()` is frequently used to Normalize data to fit into certain "range", given "domain" range from the data.
>- Acoording to data, we can also log-scale, power-scale, or time-scale the data.
>- For instance, we can linear scale data to fit into 500px screen given population ranging from 500,000 to 13,000,000 as follows:
```java
// scale to number
var newRamp = d3.scalelinear().domain([500000,13000000]).range([0,500]);
newRamp(1000000);
// return 20
newRamp(9000000);
// return 340


//scale to color
var newRamp = d3.scalelinear().domain([500000,13000000]).range(["blue", "red"]);
newRamp(1000000);
// return rgb(10, 0, 245)
newRamp(9000000);
// return rgb(173, 0, 82)
D
:q
Dfdasnklnlkvcxznkl




A
A
B
B

D
B
B
B
A

C
``


>### 3. Binning:
>### 4. Nesting:
