const displayAdder = (function() {
    const createDiv = (parentElement, textContent='', divClass='', divId='') => {
        const newDiv = document.createElement('div');
        newDiv.textContent = textContent;
        if (divClass) {
            newDiv.classList.add(divClass);
        }
        newDiv.id = divId;
        parentElement.appendChild(newDiv)
        return newDiv;
    }

    const createImage = (parentElement, imageSource, width='', imageClass='') => {
        if (width) {
            var newImage = new Image(width);
        }
        else {
            var newImage = new Image();
        }
        newImage.src = imageSource;
        if (imageClass) {
            newImage.classList.add(imageClass);
        }
        parentElement.appendChild(newImage);
        return createImage;
    }

    return {createDiv, createImage};
})();

export {displayAdder as displayAdder};