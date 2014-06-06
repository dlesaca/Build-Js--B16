var numBox;
var color;

var addButton = function() {
  numBox = prompt("How many shits would you like to give?");
  color = prompt("What color would you like them to be?");

  var newButton = document.createElement("button");
  newButton.setAttribute("onClick", "addBox(numBox, color)");
  
  if (numBox == 1) {
    newButton.innerHTML = "Give " + numBox + " " + color + " shit";
  } 
  else {
    newButton.innerHTML = "Give " + numBox + " " + color + " shits";
  }

  document.querySelector("header").appendChild(newButton);
};


var addBox = function(numBox, color){
  for (i=0; i < numBox; i++){
    newBox(color);
  }
};

var newBox = function(color) {
	var poo = document.createElement("div");
	if (color === "pink") {
		poo.style.backgroundImage = "url('smilingshitpnk.png')";
	}
	else if (color ==="brown") {
		poo.style.backgroundImage = "url('smilingshitbrwn.png')";
	}
	poo.style.height = "100px";
	poo.style.width = "105px";

	var main = document.querySelector("main"); 
	document.querySelector("main").insertBefore(poo, main.firstChild);


/*******  TRIED TO MAKE THIS WITH DYNAMIC SVGs BUT SOMETHING IS WRONG AND WE CAN"T FIGURE IT OUT ******
  var wrapper = document.createElement("svg");
  wrapper.style.height = "100px";
  wrapper.style.width = "100px";
  wrapper.style.margin = "2px";
  
  var main = document.querySelector("main"); 
  document.querySelector("main").insertBefore(wrapper, main.firstChild);
  
  var svg1 = document.createElementNS('http://www.w3.org/2000/svg',"path");
  svg1.setAttribute("fill", "#FFFFFF");
  svg1.setAttribute("d", "M67.195 99.957c6.895 0.1 13.25-0.091 19.547-1.133c4.313-0.714 8.533-1.787 12.268-4.202 c2.837-1.835 4.966-4.233 5.494-7.699c0.621-4.076-0.123-7.919-2.321-11.426c-2.017-3.219-5.074-5.14-8.509-6.517 c-0.876-0.351-0.988-0.709-0.647-1.604c1.838-4.82 1.369-9.519-1.071-14.013c-1.886-3.473-4.851-5.744-8.477-7.188 c-0.636-0.253-0.879-0.517-0.678-1.255c0.842-3.096 0.255-6.016-1.376-8.713c-2.237-3.698-5.71-5.627-9.817-6.537 c-0.813-0.18-1.07-0.413-0.999-1.348c0.116-1.526 0.119-3.121-0.196-4.609c-0.94-4.451-3.643-7.935-6.644-11.177 c-4.511-4.872-9.953-8.461-16.017-11.089c-2.362-1.024-4.839-1.837-7.495-1.249c-1.986 0.44-2.852 2.272-1.958 4.1 c0.313 0.6 0.7 1.2 1.1 1.871c0.669 1.2 0.8 2.4 0.1 3.565c-0.582 1.016-1.23 1.995-1.867 3 c-2.029 3.136-3.361 6.434-2.597 10.29c0.07 0.355-0.256 0.904-0.56 1.19c-0.371 0.35-0.905 0.537-1.384 0.8 c-2.809 1.313-5.371 2.956-7.298 5.447c-3.458 4.472-4.995 9.303-2.719 14.823c0.281 0.7 0.1 0.988-0.58 1.3 c-1.348 0.585-2.755 1.127-3.948 1.958c-5.687 3.959-8.343 11.908-6.266 18.562c0.262 0.8 0.3 1.243-0.725 1.6 c-1.178 0.361-2.315 0.949-3.371 1.6c-6.008 3.706-8.508 9.23-8.083 16.141c0.264 4.3 1.7 8.1 5.4 10.6 c4.202 2.8 9 3.4 13.8 2.881c3.52-0.401 6.956-1.49 10.468-2.017c2.903-0.435 5.946-1.05 8.781-0.621 C48.244 98.6 57.9 99.7 67.2 99.957z");
   var svg2 = document.createElementNS('http://www.w3.org/2000/svg',"path");
  svg2.setAttribute("fill", color);
  svg2.setAttribute("d", "M67.195 99.957c-9.254-0.293-18.951-1.316-28.627-2.781c-2.835-0.429-5.878 0.186-8.781 0.6 c-3.512 0.526-6.948 1.616-10.468 2.017c-4.86 0.553-9.624-0.049-13.826-2.881c-3.744-2.522-5.183-6.314-5.447-10.609 c-0.424-6.911 2.075-12.435 8.083-16.141c1.055-0.651 2.193-1.239 3.371-1.6c1.007-0.309 0.986-0.713 0.725-1.552 c-2.077-6.654 0.58-14.602 6.266-18.562c1.194-0.831 2.6-1.374 3.948-1.958c0.667-0.289 0.861-0.596 0.58-1.277 c-2.275-5.52-0.739-10.352 2.719-14.823c1.926-2.491 4.489-4.134 7.298-5.447c0.479-0.224 1.013-0.411 1.384-0.761 c0.304-0.287 0.631-0.835 0.56-1.19c-0.764-3.856 0.568-7.154 2.597-10.29c0.637-0.984 1.285-1.962 1.867-2.978 c0.679-1.184 0.592-2.391-0.077-3.565c-0.356-0.624-0.756-1.227-1.069-1.871c-0.893-1.838-0.028-3.67 1.958-4.11 c2.656-0.588 5.1 0.2 7.5 1.249c6.064 2.6 11.5 6.2 16 11.089c3.001 3.2 5.7 6.7 6.6 11.2 c0.314 1.5 0.3 3.1 0.2 4.609c-0.071 0.9 0.2 1.2 1 1.348c4.107 0.9 7.6 2.8 9.8 6.5 c1.631 2.7 2.2 5.6 1.4 8.713c-0.201 0.7 0 1 0.7 1.255c3.626 1.4 6.6 3.7 8.5 7.2 c2.44 4.5 2.9 9.2 1.1 14.013c-0.341 0.895-0.229 1.3 0.6 1.604c3.435 1.4 6.5 3.3 8.5 6.5 c2.197 3.5 2.9 7.3 2.3 11.426c-0.528 3.467-2.656 5.865-5.494 7.699c-3.735 2.415-7.955 3.488-12.268 4.2 C80.445 99.9 74.1 100.1 67.2 99.957z M47.131 55.925c-0.134-4.19-1.075-8.056-4.249-11.118 c-1.913-1.845-4.103-2.948-6.774-2.978c-4.002-0.045-8.278 3.222-9.887 7.391c-1.75 4.533-1.69 9 0.1 13.5 c1.201 3 3.3 5.4 6.2 6.664c4.212 1.8 8.3 0.4 11.081-3.013C45.996 63.4 47.3 59.9 47.1 55.925z M58.407 54.74c0.01 4.9 0.8 8.4 3.2 11.341c4.065 5 10.4 5.2 14.6 1.029c5.345-5.226 6.232-16.186 0.027-22.339 c-3.5-3.47-8.424-3.905-12.264-1.048C59.921 46.8 58.6 51.1 58.4 54.74z M52.79 86.4 c5.058 0.4 9.461-1.637 13.477-4.56c1.839-1.339 3.417-3.074 4.96-4.768c0.789-0.866 0.384-1.969-0.689-2.383 c-0.475-0.183-1.037-0.209-1.556-0.193c-6.241 0.185-12.481 0.538-18.722 0.545c-4.647 0.005-9.294-0.441-13.942-0.656 c-0.476-0.022-0.991 0.078-1.436 0.253c-1.205 0.476-1.552 1.528-0.7 2.507c1.159 1.3 2.4 2.7 3.7 3.7 C42.243 84.3 46.9 86.8 52.8 86.38z");
  var svg3 = document.createElementNS('http://www.w3.org/2000/svg',"path");
  svg3.setAttribute("fill", "#FFFFFF");
  svg3.setAttribute("d", "M47.131 55.925c0.124 3.935-1.135 7.461-3.534 10.455c-2.765 3.451-6.868 4.848-11.081 3 c-2.924-1.274-4.989-3.676-6.19-6.664c-1.796-4.47-1.857-8.974-0.107-13.508c1.61-4.169 5.886-7.437 9.887-7.391 c2.671 0 4.9 1.1 6.8 2.978C46.056 47.9 47 51.7 47.1 55.925z M41.397 56.2 c-0.073-2.71-0.65-4.987-2.324-6.86c-1.636-1.829-4.322-1.875-5.936-0.138c-3.007 3.236-3.167 9.702-0.326 13.2 c1.866 2.3 4.6 2.3 6.5 0.02C40.873 60.6 41.3 58.3 41.4 56.249z");
  var svg4 = document.createElementNS('http://www.w3.org/2000/svg',"path");
  svg4.setAttribute("fill", "#FFFFFF");
  svg4.setAttribute("d", "M58.407 54.74c0.154-3.677 1.514-7.966 5.613-11.016c3.84-2.857 8.764-2.422 12.3 1 c6.206 6.2 5.3 17.113-0.027 22.339c-4.226 4.132-10.555 3.978-14.62-1.029C59.229 63.1 58.4 59.6 58.4 54.74z M74.782 56.553c-0.009-3.121-0.809-5.505-2.226-7.088c-1.79-2-4.487-1.969-6.22 0.072c-2.795 3.291-2.887 9.417-0.193 12.8 c1.839 2.3 4.6 2.4 6.5 0.193C74.244 60.7 74.7 58.5 74.8 56.553z");
  var svg5 = document.createElementNS('http://www.w3.org/2000/svg',"path");
  svg5.setAttribute("fill", "#FFFFFF");
  svg5.setAttribute("d", "M52.79 86.38c-5.852 0.383-10.548-2.114-14.86-5.508c-1.38-1.086-2.588-2.416-3.747-3.747 c-0.853-0.979-0.505-2.031 0.7-2.507c0.445-0.176 0.96-0.275 1.436-0.253c4.648 0.2 9.3 0.7 13.9 0.7 c6.241-0.007 12.481-0.359 18.722-0.545c0.519-0.015 1.1 0 1.6 0.193c1.073 0.4 1.5 1.5 0.7 2.4 c-1.543 1.694-3.121 3.429-4.96 4.768C62.251 84.7 57.8 86.8 52.8 86.38z");
  var svg6 = document.createElementNS('http://www.w3.org/2000/svg',"path");
  svg6.setAttribute("fill", "none");
  svg6.setAttribute("stroke", "#FFFFFF");
  svg6.setAttribute("stroke-width", "0.5");
  svg6.setAttribute("stroke-miterlimit", "10");
  svg6.setAttribute("d", "M72.207 29.352c0 0-47.258 16.212-50.69 16.9");
  var svg7 = document.createElementNS('http://www.w3.org/2000/svg',"path");
  svg7.setAttribute("fill", "none");
  svg7.setAttribute("stroke", "#FFFFFF");
  svg7.setAttribute("stroke-width", "0.5");
  svg7.setAttribute("stroke-miterlimit", "10");
  svg7.setAttribute("d", "M82.652 45.891c0 0-30.31 19.67-70.034 22.1");
  var svg8 = document.createElementNS('http://www.w3.org/2000/svg',"path");
  svg8.setAttribute("fill", "none");
  svg8.setAttribute("stroke", "#FFFFFF");
  svg8.setAttribute("stroke-width", "0.5");
  svg8.setAttribute("stroke-miterlimit", "10");
  svg8.setAttribute("d", "M94.017 67.29c0 0-37.53 23.622-60 30");
  var svg9 = document.createElementNS('http://www.w3.org/2000/svg',"path");
  svg9.setAttribute("d", "M41.397 56.249c-0.089 2.088-0.524 4.328-2.081 6.2c-1.897 2.279-4.639 2.263-6.505-0.02 c-2.841-3.475-2.681-9.941 0.326-13.178c1.614-1.737 4.3-1.691 5.9 0.138C40.747 51.3 41.3 53.5 41.4 56.249z");
  var svg10 = document.createElementNS('http://www.w3.org/2000/svg',"path");
  svg10.setAttribute("d", "M74.782 56.553c-0.068 1.899-0.538 4.15-2.127 5.979c-1.94 2.233-4.673 2.118-6.512-0.193 c-2.695-3.385-2.603-9.511 0.193-12.802c1.734-2.041 4.431-2.073 6.22-0.072C73.973 51 74.8 53.4 74.8 56.553z");
  
  wrapper.appendChild(svg1);
  wrapper.appendChild(svg2);
  wrapper.appendChild(svg3);
  wrapper.appendChild(svg4);
  wrapper.appendChild(svg5);
  wrapper.appendChild(svg6);
  wrapper.appendChild(svg7);
  wrapper.appendChild(svg8);
  wrapper.appendChild(svg9);
  wrapper.appendChild(svg10);
  return;
*/
};