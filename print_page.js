// Print page

function addPrintEvent(querySelector) {
    const element = document.querySelector(querySelector);
    if (!element) return;
    element.addEventListener('click', evt => {
        window.print();
    });
}
