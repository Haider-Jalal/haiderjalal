// Array to store product data
const products = [
    {
        name: "Orange Wide Leg",
        price: "980,00€",
        description: "This one-piece swimsuit is crafted from jersey featuring an allover micro Monogram motif in relief.",
        // images: { white: "assets/images/image 822.png", black: "assets/images/image 822-1.jpeg" },
        colors: [
            { name: "White", image: "assets/images/image 822.png" },
            { name: "Black", image: "assets/images/image 822-1.jpeg" },
        ],
        image: "assets/images/image 822.png", // Default image
    },
    {

        name: "Tailored Jacket",
        price: "980,00€",
        description: "This one-piece swimsuit is crafted from jersey featuring an allover micro Monogram motif in relief.",
        colors: [
            { name: "Blue", image: "assets/images/image 823.png" },
            { name: "Black", image: "assets/images/image 823-1.jpeg" },
        ],
        image: "assets/images/image 823.png", // Default image

    },
    {
        name: "Accordion Pleated Dress",
        price: "980,00€",
        description: "This one-piece swimsuit is crafted from jersey featuring an allover micro Monogram motif in relief.",
        // images: { white: "assets/images/image 824.png", black: "assets/images/image 824.png" }

        colors: [
            { name: "Red", image: "assets/images/image 824.png" },
            { name: "Grey", image: "assets/images/image 824-1.jpeg" },
        ],
        image: "assets/images/image 824.png", // Default image
    },
    {
        name: "Green Trench Coat",
        price: "980,00€",
        description: "This one-piece swimsuit is crafted from jersey featuring an allover micro Monogram motif in relief.",
        colors: [
            { name: "White", image: "assets/images/image 825.png" },
            { name: "Black", image: "assets/images/image 825-1.jpeg" },
        ],
        image: "assets/images/image 825.png", // Default image
    },
    {
        name: " Tennis Blue T-Shirt",
        price: "980,00€",
        description: "This one-piece swimsuit is crafted from jersey featuring an allover micro Monogram motif in relief.",
        colors: [
            { name: "Grey", image: "assets/images/image 826.png" },
            { name: "Black", image: "assets/images/image 826-1.jpeg" },
        ],
        image: "assets/images/image 826.png", // Default image
    },
    {
        name: "Long Sleeve Tennis Top",
        price: "980,00€",
        description: "This one-piece swimsuit is crafted from jersey featuring an allover micro Monogram motif in relief.",
        colors: [
            { name: "Blue", image: "assets/images/image 827.png" },
            { name: "Black", image: "assets/images/image 827-1.jpeg" },
        ],
        image: "assets/images/image 827.png", // Default image        
    }
];



// Function to open popup and populate product details
function openPopup(index) {
    const product = products[index];
    const popup = document.getElementById("popup");
    const colorButtonsContainer = document.getElementById("color-buttons-container");

    // Populate product details
    document.getElementById("popup-name").textContent = product.name;
    document.getElementById("popup-price").textContent = product.price;
    document.getElementById("popup-description").textContent = product.description;
    document.getElementById("popup-image").src = product.image;

    // Clear existing color buttons
    colorButtonsContainer.innerHTML = "";

    // Add color buttons dynamically
    product.colors.forEach((color, colorIndex) => {
        const button = document.createElement("button");
        button.className = "color-button";
        button.textContent = color.name;
        button.onclick = () => changeColor(index, colorIndex); // Pass product and color index
        colorButtonsContainer.appendChild(button);
    });

    // Show popup
    popup.classList.remove("hidden");
}

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