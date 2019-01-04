# Structure data and interaction

> ## Topics to be covered
> 1. Add interaction to graphic elements
> 2. Effectively use colors
> 3. Pop-up conventional HTML
> 4. Insert external SVG icons
>
> ## Expected output
>
> - We are going to use `worldcup.csv` that contains statistics from 2010 worldcup to draw below chart.
>
> ![](Color_figures/Part_1/3-1.jpg)






## Project architecture

- When the purpose of visualization is a static webpage, then there is little need to consider data structure.
- However, when the purpose of visualization is with dynamic application and interactions, the project needs to be precisely planned in advance.

### Data

- Data is available via server API, either in static or dynamic.
- We are going to access the world cup data via interactive dynamic method.

### Resource

- External SVG or HTML components needs to be loaded separatly.

### Picture

- Flag PNG files will be used to describe nationalities.

### Style-sheet

- CSS compiler support CSS variables and other applications.
- The list below explains various class to SVG components.

```css
text{
    font-size: 10px;
}

g > text.active {
    font-size: 30px;
}

circle {
    fill: pink;
    stroke: black;
    stroke-width: 1px;
}

circle.active {
    fill: red;
}

circle.inactive{
    fill: gray
}
```

### External Library

- We will be using `soccerviz.js`(user-defined library),  and `colorbrewer.js`(D3 bundle library for color pallette).
- `d3ic.html` references the two libraries stated above, and \<body\> has onload attributes to load `soccerviz.js`.
- `soccerviz.js` loads and binds data to create pink circles with labels.











> ## Topics covered
>
> - Load data in CSV or JSON format
> - Manipulate data using D3 `scale()` and other javascript functions
> - Bind data to visualize
> - Created \<g\> element to select multiple elements
> - Create, remove, and update values using `enter()`, `exit()`