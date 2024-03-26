export function generateModal(imgId, imgSrc) {
    return `
    <div id="modal" class="modal">
        <span id="close-btn" class="close">&times;</span>
        <img class="modal-image" id="${imgId}" src="${imgSrc}">
    </div>`;
}