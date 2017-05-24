function doAmazingThings() {
    alert('YOU AM AMAZING!');
}
document.addEventListener('DOMContentReady', function() {
    document.getElementById('amazing')
        .addEventListener('click', doAmazingThings);
});