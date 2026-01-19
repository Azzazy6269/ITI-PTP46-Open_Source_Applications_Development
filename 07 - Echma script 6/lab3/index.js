// عناصر DOM
const loadButton = document.getElementById("loadProductsBtn");
const dropDown = document.getElementById("productsDropdown");
const loadDetailsButton = document.getElementById("loadDetailsBtn");
const cardContainer = document.getElementById("productCard");
const image = document.getElementById("productImage");
const price = document.getElementById("productPrice");
const description = document.getElementById("productDescription");

loadButton.addEventListener("click", function() {
    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(products => {
            console.log("fetched");
            dropDown.disabled = false;
            dropDown.innerHTML = ""; 
            loadDetailsButton.disabled = false;
            for (let i = 0; i < products.length; i++) {
                let option = document.createElement("option");
                option.textContent = products[i].title;
                option.value = products[i].id;
                dropDown.appendChild(option);
            }
        })
        .catch(err => console.log(err));
});


loadDetailsButton.addEventListener("click", function() {
    let id = dropDown.value; 
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(product => {
            image.src = product.image;
            price.textContent = `$${product.price}`;
            description.textContent = product.description;
            cardContainer.classList.remove("hidden"); 
            cardContainer.style.display="flex";
            cardContainer.style.flexDirection="column";
        })
        .catch(err => console.log(err));
});
