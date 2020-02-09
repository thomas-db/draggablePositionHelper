class draggablePositionHelper {
    /**
     * Init draggable element and its parent area
     * @param {String} parentElementId element where draggable element will be moving
     * @param {String} draggableElementId element that will be draggable
     */
    constructor(parentElementId, draggableElementId) {
        // this.parentElement = document.getElementById(parentElementId);
        // this.draggableElement = document.getElementById(draggableElementId);

        console.log("npm update");
    }

    testConsole(param) {
        console.log(param);
    }
}

const magicString = () => {
    return 'Hello World wheywhey';
};

const displayMyName = (name) => {
    return `Your name is ${name}`;
};

export default {
    magicString,
    displayMyName,
    draggablePositionHelper
};
