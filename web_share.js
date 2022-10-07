// WebShare API Demo

function addShare(elementId, title, url) {
    const shareElement = document.getElementById(elementId);
    shareElement.addEventListener('click', evt => {
        if (navigator.share) {
            navigator.share({
                title: title,
                url: url,
            }).then(() => {
                console.log("Thanks for sharing!")
            }).catch(
                console.error()
            );
        } else {
            //TODO: fallback
        }
    });
}
