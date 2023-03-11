document.getElementById('add-button').addEventListener('click', function(){
    const productField = getInputValue('product-field')
    const quantityField = getInputValue('quantity-field')
    addListOnUi(productField, quantityField)
    saveItemOnLocalStorage(productField, quantityField)
})

const getInputValue = (id) => {
    const input = document.getElementById(id)
    const inputValue = input.value
    input.value = ''
    return inputValue
}

const addListOnUi = (product, quantity) => {
    const itemContainer = document.getElementById('item-container')
    const li = document.createElement('li')
    li.innerText = `${product} : ${quantity}`
    itemContainer.appendChild(li)
}

const getItemsFromLocalStorage = () => {
    let cart = {}
    const cartFromLocalStorage = localStorage.getItem('cart')
    if(cartFromLocalStorage){
        cart = JSON.parse(cartFromLocalStorage)
    }
    return cart
}

const saveItemOnLocalStorage = (product, quantity) => {
    const cart = getItemsFromLocalStorage()
    cart[product] = quantity
    const productStringified = JSON.stringify(cart)
    localStorage.setItem('cart', productStringified)
}

const displayProductsFromLocalStorage = () => {
    const saveCart = getItemsFromLocalStorage()

    for(const product in saveCart){
        addListOnUi(product, saveCart[product])
    }
}
displayProductsFromLocalStorage()