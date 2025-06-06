const container = document.createElement('div');
container.style.backgroundColor = "#c1121f";
container.style.color = "#fff";
container.style.padding = "20px";
document.body.appendChild(container);

const heading = document.createElement('h1');
heading.innerHTML = "Gravity Coding";
heading.style.fontFamily = "Arial, Helvetica, sans-serif";
container.appendChild(heading);


const paragraph = document.createElement('p');
paragraph.innerHTML = "Gravity Coding is a platform where you can" + 
"learn modern web programming languages like HTML, CSS, JavaScript," +
"React, Angular, Vue, Node, Express, MongoDB, and many more. " + 
"Gravity Coding has been designed to help you learn web programming" +
"languages in a simple and easy way.";
paragraph.style.fontFamily = "monospace";
container.appendChild(paragraph);