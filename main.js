async function fetchProducts() {
    try {
        productListDiv.innerHTML = '<p class="loading-animation">Fetching awesome clothing...</p>';

        const response = await fetch(API_URL);
        const allFetchedProducts = await response.json();

        ALL_PRODUCTS = allFetchedProducts.filter(p => 
            p.category === "men's clothing" || p.category === "women's clothing"
        );
        
        displayProducts(ALL_PRODUCTS);
        createCategoryFilters(ALL_PRODUCTS);

    } catch (error) {
        console.error("Error fetching data:", error);
        productListDiv.innerHTML = '<p class="error-message">Sorry, clothing products could not be loaded.</p>';
    }
}