# Shopify Custom Section Integration

This repository contains the code for integrating a custom section into a Shopify store using the Dawn theme. Below is a detailed breakdown of the approach I followed to create this integration.

## Approach

1. **Setting Up the Shopify Theme:**
   - I began by downloading the Shopify Dawn theme.
   - After extracting the theme files, I uploaded them to a GitHub repository for version control and collaboration.

2. **Connecting the Theme to Shopify:**
   - Once the theme was uploaded to GitHub, I connected it to my Shopify store, enabling live updates to the store whenever changes were pushed to the repository.

3. **Development Process:**
   - I used **Figma** as the design reference for the custom section I intended to implement.
   - All code, including **HTML**, **CSS**, and **JavaScript**, was written from scratch using **Visual Studio Code (VS Code)**.
   - I checked the output locally by running the code in a localhost environment, ensuring that the layout and design matched the Figma mockups.

4. **Custom Code Integration:**
   - After finalizing the HTML, CSS, and JavaScript files, I faced challenges when integrating them into the Shopify theme. 
   - The main issue was that the CSS layout was not rendering as expected, and the code appeared differently in the Shopify store compared to how it looked in the local environment.
   - Despite following Shopify's **Liquid templating** guidelines, some elements and styles were not displaying correctly.

## Challenges Faced

- **CSS Layout Issues:** The styles I wrote locally were not being applied as expected once the code was integrated into the Shopify store.
- **Popup Functionality:** The JavaScript that controls the popup was also having issues, as the CSS for the popup wasn't properly displayed in the live store.
- **Liquid Templating Issues:** Although I carefully followed Liquid templating conventions, I faced challenges when dynamically pulling product data and passing it into the JavaScript array.

## Files

The following files are included in this repository:
- `index.html`: The main HTML file for the custom section.
- `style.css`: The CSS file for styling the section, popup, and other elements.
- `script.js`: The JavaScript file responsible for handling interactivity such as opening and closing the popup, changing product variants, and adding to the cart.

## Next Steps

I am continuing to troubleshoot the integration issues and refine the custom section. Any feedback or suggestions on improving the integration process are highly appreciated.
