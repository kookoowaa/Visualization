# Adding a DOM Element



## Basic Example
- Besides working on tools like Sublime Text, we can add DOM element with Developer Tools using JavaScript Console.
- We can try loading 'project_1.html' for some quick test.
- From JavaScript Console, if we run the following code, we can see that a "p" element has been added to the HTML DOM.
```java
d3.select("body").append("p");
```
![](https://d1gg5jm9r4jrt6.cloudfront.net/d3.js.add_a_p_html_element_600x510.png)


## Method and Operator
- The first part of the JavaScript is `.select("body")`, and it selects the first descendant DOM element that contains the tag **"body"**
- Once selected, D3.js allows you to apply operators to the element selected.
- From above, `.append("p")` operator has been used, and it appends a new element as the last child of the element in the selection.