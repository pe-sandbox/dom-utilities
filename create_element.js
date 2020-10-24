function createElement(type, textNode="", className="", atributtes = []) {
	var element = document.createElement(type);
	
	if (textNode) {
		var elementContent = document.createTextNode(textNode);
		element.appendChild(elementContent); 
	}

	if (Array.isArray(className)) {
		className.forEach(function(c) {
			element.classList.add(c);
		});
	} else {
		element.className = className;
	}

	for (var i = 0; i < atributtes.length; i++) {
		element.setAttribute(atributtes[i].key, atributtes[i].value);
	}

	return element;
}
