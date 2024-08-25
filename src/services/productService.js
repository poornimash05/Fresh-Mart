const API_URL = 'http://localhost:5000/api/products'; // Ensure this is correct

// Fetch all products
export const getAllProducts = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        return await response.json();
    } catch (error) {
        throw new Error('Error fetching products: ' + error.message);
    }
};