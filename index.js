// Get all the options and radio buttons
const options = document.querySelectorAll('.option');
const radios = document.querySelectorAll('input[name="pair"]');
const totalEl = document.getElementById('total');

// Loop through each radio button
for (let i = 0; i < radios.length; i++) {
  radios[i].addEventListener('change', function () {
    // Remove 'active' class from all options
    for (let j = 0; j < options.length; j++) {
      options[j].classList.remove('active');
    }

    // Add 'active' class to the selected option
    const selectedOption = this.closest('.option');
    selectedOption.classList.add('active');

    // Get the price from the selected option and update the total
    const price = selectedOption.getAttribute('data-price');
    totalEl.textContent = "DKK " + Number(price).toFixed(2);
  });
}

document.querySelectorAll('.option').forEach(option => {
  option.addEventListener('click', function(e) {
    // Prevent double firing if the radio is clicked directly
    if (e.target.tagName.toLowerCase() === 'input') return;
    const radio = this.querySelector('input[type="radio"]');
    if (radio) {
      radio.checked = true;
      radio.dispatchEvent(new Event('change', { bubbles: true }));
    }
  });
});

// Update active class and total on radio change
document.querySelectorAll('input[type="radio"][name="unit"]').forEach(radio => {
  radio.addEventListener('change', function() {
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('active'));
    const selectedOption = this.closest('.option');
    selectedOption.classList.add('active');
    // Update total
    const price = selectedOption.getAttribute('data-price');
    document.getElementById('total').textContent = `$${Number(price).toFixed(2)} USD`;
  });
});