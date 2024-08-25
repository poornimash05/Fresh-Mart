let cartItems = []; // Temporary storage for cart items

export const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if already in cart
    } else {
        cartItems.push({ ...product, quantity: 1 }); // Add new item to cart
    }
};

export const getCartItems = () => {
    return cartItems;
};

export const removeFromCart = (product) => {
    cartItems = cartItems.filter(item => item.id !== product.id);
};

export const clearCart = () => {
    cartItems = [];
};