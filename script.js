// Get the elements
const usLink = document.getElementById('us-link');
const tooltip = document.getElementById('tooltip');

// Show tooltip on mouseover
usLink.addEventListener('mouseover', function(event) {
    tooltip.style.visibility = 'visible';
    tooltip.style.left = event.pageX + 'px'; // Position tooltip near the mouse
    tooltip.style.top = event.pageY + 'px';
});

// Hide tooltip on mouseout
usLink.addEventListener('mouseout', function() {
    tooltip.style.visibility = 'hidden';
});