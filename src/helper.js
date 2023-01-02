const displayAdder = (function() {
    const createDiv = (parentElement, textContent='', divClass='', divId='') => {
        const newDiv = document.createElement('div');
        newDiv.textContent = textContent;
        if (divClass) {
            const divClassList = divClass.split(',');
            divClassList.forEach(element => {
                newDiv.classList.add(element);
            });
        }
        newDiv.id = divId;
        parentElement.appendChild(newDiv)
        return newDiv;
    }

    const createImage = (parentElement, imageSource, imageClass='') => {
        var newImage = new Image();
        newImage.src = imageSource;
        if (imageClass) {
            const imageClassList = imageClass.split(',');
            imageClassList.forEach(element => {
                newImage.classList.add(element);
            });
        }
        parentElement.appendChild(newImage);
        return createImage;
    }

    return {createDiv, createImage};
})();

export {displayAdder as displayAdder};