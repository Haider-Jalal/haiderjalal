// Array to store product data
const products = [
    {
        name: "Orange Wide Leg",
        price: "980,00€",
        description: "This one-piece swimsuit is crafted from jersey featuring an allover micro Monogram motif in relief.",
        colors: [
            { name: "White", image: "{{ 'image_822.png' | asset_url }}" },
            { name: "Black", image: "{{ 'image_822-1.jpeg' | asset_url }}" }
        ],
        image: "{{ 'image_822.png' | asset_url }} ", // Default image
    },
    {
        name: "Tailored Jacket",
        price: "980,00€",
        description: "This one-piece swimsuit is crafted from jersey featuring an allover micro Monogram motif in relief.",
        colors: [
            { name: "Blue", image: "{{ 'image_823.png' | asset_url }}" },
            { name: "Black", image: "{{ 'image_823-1.jpeg' | asset_url }}" }
        ],
        image: "{{ 'image_823.png' | asset_url }}", // Default image
    },
    {
        name: "Accordion Pleated Dress",
        price: "980,00€",
        description: "This one-piece swimsuit is crafted from jersey featuring an allover micro Monogram motif in relief.",
        colors: [
            { name: "Red", image: "{{ 'image_824.png' | asset_url }}" },
            { name: "Grey", image: "{{ 'image_824-1.jpeg' | asset_url }}" }
        ],
        image: "{{ 'image_824.png' | asset_url }}", // Default image
    },
    {
        name: "Green Trench Coat",
        price: "980,00€",
        description: "This one-piece swimsuit is crafted from jersey featuring an allover micro Monogram motif in relief.",
        colors: [
            { name: "White", image: "{{ 'image_825.png' | asset_url }}" },
            { name: "Black", image: "{{ 'image_825-1.jpeg' | asset_url }}" }
        ],
        image: "{{ 'image_825.png' | asset_url }}", // Default image
    },
    {
        name: "Tennis Blue T-Shirt",
        price: "980,00€",
        description: "This one-piece swimsuit is crafted from jersey featuring an allover micro Monogram motif in relief.",
        colors: [
            { name: "Grey", image: "{{ 'image_826.png' | asset_url }}" },
            { name: "Black", image: "{{ 'image_826-1.jpeg' | asset_url }}" }
        ],
        image: "{{ 'image_826.png' | asset_url }}", // Default image
    },
    {
        name: "Long Sleeve Tennis Top",
        price: "980,00€",
        description: "This one-piece swimsuit is crafted from jersey featuring an allover micro Monogram motif in relief.",
        colors: [
            { name: "Blue", image: "{{ 'image_827.png' | asset_url }}" },
            { name: "Black", image: "{{ 'image_827-1.jpeg' | asset_url }}" }
        ],
        image: "{{ 'image_827.png' | asset_url }}", // Default image
    }
];



// JavaScript function to open the popup and populate product details dynamically
function openPopup(index) {
    const product = products[index]; // Grab the product object
    const popup = document.getElementById("popup");
    const colorButtonsContainer = document.getElementById("color-buttons-container");

    // Populate the product data into the popup
    document.getElementById("popup-name").textContent = product.name;
    document.getElementById("popup-price").textContent = product.price;
    document.getElementById("popup-description").textContent = product.description;
    document.getElementById("popup-image").src = product.image;

    // Clear existing color buttons
    colorButtonsContainer.innerHTML = '';

    // Add color buttons dynamically
    product.colors.forEach((color, colorIndex) => {
        const button = document.createElement('button');
        button.className = 'color-button';
        button.textContent = color.name;
        button.onclick = () => changeColor(index, colorIndex);
        colorButtonsContainer.appendChild(button);
    });

    // Show popup
    popup.classList.remove('hidden');
}








// Function to open popup and populate product details
// function openPopup(index) {
//     const product = products[index];
//     const popup = document.getElementById("popup");
//     const colorButtonsContainer = document.getElementById("color-buttons-container");

//     // Populate product details
//     document.getElementById("popup-name").textContent = product.name;
//     document.getElementById("popup-price").textContent = product.price;
//     document.getElementById("popup-description").textContent = product.description;
//     document.getElementById("popup-image").src = product.image;

//     // Clear existing color buttons
//     colorButtonsContainer.innerHTML = "";

//     // Add color buttons dynamically
//     product.colors.forEach((color, colorIndex) => {
//         const button = document.createElement("button");
//         button.className = "color-button";
//         button.textContent = color.name;
//         button.onclick = () => changeColor(index, colorIndex); // Pass product and color index
//         colorButtonsContainer.appendChild(button);
//     });

//     // Show popup
//     popup.classList.remove("hidden");
// }

// Function to handle color change
function changeColor(productIndex, colorIndex) {
    const product = products[productIndex];
    const selectedColor = product.colors[colorIndex];

    // Update the product image based on the selected color
    document.getElementById("popup-image").src = selectedColor.image;

    // Update active button styling
    const colorButtons = document.querySelectorAll(".color-button");
    colorButtons.forEach((button) => button.classList.remove("active"));
    colorButtons[colorIndex].classList.add("active");
}

// Function to close popup
function closePopup() {
    const popup = document.getElementById("popup");
    popup.classList.add("hidden");
}



// add to cart functionality
document.querySelector('.add-to-cart').addEventListener('click', function() {
    const size = document.getElementById('popup-size').value;
    const product = products[popupProductIndex]; // popupProductIndex is the index of the clicked product
    
    // You can modify this to add the right variant and size
    const variantId = product.variants[0].id; // Assume variants are correctly mapped

    // AJAX call to add the product to the cart
    fetch('/cart/add.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            items: [{ id: variantId, quantity: 1, properties: { Size: size } }]
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Product added to cart:', data);
        closePopup();
    })
    .catch(error => console.error('Error adding to cart:', error));
});
