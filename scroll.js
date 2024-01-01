var main = document.querySelector('main');
var searchBarContainer = document.querySelector('.search-bar-container');
var menuBtn = document.querySelector('.menu-btn');

//search bar
main.addEventListener('scroll', () => {
    // Get the bounding rectangles of searchBarContainer and menuBtn
    var searchBarContainerRect = searchBarContainer.getBoundingClientRect();
    var menuBtnRect = menuBtn.getBoundingClientRect();

    // Check if searchBarContainer and menuBtn intersect
    if (
        searchBarContainerRect.right >= menuBtnRect.left &&
        searchBarContainerRect.left <= menuBtnRect.right &&
        searchBarContainerRect.bottom >= menuBtnRect.top &&
        searchBarContainerRect.top <= menuBtnRect.bottom
    ) {
        // Reduce the size of the search bar to 70%
        searchBarContainer.style.paddingLeft = '3.5rem';
    } else {
        // Reset the size of the search bar to its original value
        searchBarContainer.style.paddingLeft = '1rem';
    }
});

