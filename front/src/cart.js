function addToCart(id) {
    if (!localStorage.getItem("cart")) {
        localStorage.setItem(
            "cart",
            JSON.stringify([
                {
                    id: id,
                    quantity: document.querySelector("#quantity").value,
                },
            ])
        );
    } else {
        let currentCart = JSON.parse(localStorage.getItem("cart"));
        for (let i = 0; i < currentCart.length; i++) {
            if (currentCart[i]["id"] == id) {
                alert("Item já está no carrinho!");
                return;
            }
        }
        currentCart.push({
            id: id,
            quantity: document.querySelector("#quantity").value,
        });
        localStorage.setItem("cart", JSON.stringify(currentCart));
    }
}

function removeFromCart(id) {}
