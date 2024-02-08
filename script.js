let products = [];

function addProduct() {
    const productNameInput = document.getElementById('productName');
    const productPriceInput = document.getElementById('productPrice');
    const name = productNameInput.value;
    const price = parseFloat(productPriceInput.value);

    if (name && !isNaN(price)) { // Verifica se os campos não estão vazios
        const product = { id: Date.now(), name, price };
        products.push(product);
        productNameInput.value = '';
        productPriceInput.value = '';
        renderProducts();
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
}

function renderProducts() {
    const productsList = document.getElementById('productsList');
    productsList.innerHTML = '';

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product-item';
        productElement.innerHTML = `
            <span>${product.name} - R$ ${product.price.toFixed(2)}</span>
            <button onclick="deleteProduct(${product.id})">Remover</button>
        `;
        productsList.appendChild(productElement);
    });
}

function deleteProduct(productId) {
    products = products.filter(product => product.id !== productId);
    renderProducts();
}

renderProducts();
