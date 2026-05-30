
// maindiv.style.height='200px'


document.body.style.backgroundColor = "lightpink"

let header = document.createElement('div');
let sidebar = document.createElement('div');
let content1 = document.createElement('div');
let content2 = document.createElement('div');

header.style.height = "200px"
header.style.width = "200px"

header.style.backgroundColor= "white"


sidebar.style.height = "200px"
sidebar.style.width = "200px"

sidebar.style.backgroundColor= "white"


content1.style.height = "200px"
content1.style.width = "200px"

content1.style.backgroundColor= "white"


document.body.style.display = "flex"
document.body.style.gap = "20px"


document.body.appendChild(header);
document.body.appendChild(sidebar);
document.body.appendChild(content1);
document.body.appendChild(content2);






