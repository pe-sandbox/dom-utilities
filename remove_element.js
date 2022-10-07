// Remove element

function removeElementBySelector(querySelector) {
    const element = document.querySelector(querySelector);
    if (element) element.parentNode.removeChild(element);
}
