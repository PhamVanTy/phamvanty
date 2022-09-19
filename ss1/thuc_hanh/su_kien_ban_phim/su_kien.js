function upArrowPressed() {
    let element = document.getElementById('nobita');
    element.style.top = parseInt(element.style.top) - 5 + 'px';
}
function downArrowProssed() {
    let element = document.getElementById('nobita');
    element.style.top = parseInt(element.style.top) + 5 + 'px';
}
function leftArrowProssed() {
    let element = document.getElementById('nobita');
    element.style.left = parseInt(element.style.left) - 5 + 'px';
}
function rightArrowProssed() {
    let element = document.getElementById('nobita');
    element.style.left = parseInt(element.style.left) + 5 + 'px';
}
function moveSelector(evt) {
    switch (evt.keyCode) {
        case 37:
            leftArrowProssed();
            break;
        case 39:
            rightArrowProssed();
            break;
        case 38:
            upArrowPressed();
            break;
        case 40:
            downArrowProssed();
            break;
    }
}
function docReady() {
    window.addEventListener('keydown', moveSelector);
}