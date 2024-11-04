document.addEventListener('DOMContentLoaded', function () {
    const designCards = document.querySelectorAll('.design-card');
    const costDisplay = document.getElementById('cost');
    const dimensionsDisplay = document.getElementById('dimensions');
    const materialsDisplay = document.getElementById('materials');

    if (designCards.length > 0) {
        designCards.forEach(card => {
            card.addEventListener('click', function () {
                // Get properties from the selected card
                costDisplay.textContent = this.dataset.cost;
                dimensionsDisplay.textContent = this.dataset.dimensions;
                materialsDisplay.textContent = this.dataset.materials;
            });
        });
    }
});