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
- 