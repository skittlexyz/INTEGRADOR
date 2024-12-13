import jQuery from "jquery";
import { API_URL } from "./config";
import database from "./database";

const $ = jQuery;

if (window.location.pathname == "/") {
    $(".product-thumbnail.promotion").each(function (index) {
        $(this).attr("src", API_URL + `products/${index + 1}/1`);
        $(this).attr(
            "onclick",
            `window.location.href = '/product?id=${index + 1}';`
        );
    });
    $(".product-thumbnail.new").each(function (index) {
        $(this).attr("src", API_URL + `products/${index + 1}/1`);
        $(this).attr(
            "onclick",
            `window.location.href = '/product?id=${index + 1}';`
        );
    });
    $(".product-thumbnail.hot").each(function (index) {
        $(this).attr("src", API_URL + `products/${index + 1}/1`);
        $(this).attr(
            "onclick",
            `window.location.href = '/product?id=${index + 1}';`
        );
    });
} else if (window.location.pathname == "/products") {
    $(".product-thumbnail").each(function (index) {
        $(this).attr("src", API_URL + `products/${index + 1}/1`);
        $(this).attr(
            "onclick",
            `window.location.href = '/product?id=${index + 1}';`
        );
    });
} else if (window.location.pathname == "/product") {
    const productId = new URLSearchParams(window.location.search).get("id");
    $(".product-thumbnail.single").each(function (index) {
        $(this).attr("src", API_URL + `products/${productId}/${index + 1}`);
    });
    $("#name").text(database[productId - 1].name);
    $("#description").text(database[productId - 1].description);
    $("#price").text(
        "R$" +
            Number(database[productId - 1].price)
                .toFixed(2)
                .replace(".", ",")
    );

    $("#total").text(
        "R$" +
            Number(database[productId - 1].price)
                .toFixed(2)
                .replace(".", ",")
    );

    $("#increase").attr(
        "onclick",
        "if (Number(this.nextElementSibling.value) > 1) this.nextElementSibling.value = Number(this.nextElementSibling.value) - 1; this.parentElement.nextElementSibling.children[1].innerText = `R$ ${String((" +
            database[productId - 1].price +
            " * Number(this.nextElementSibling.value)).toFixed(2)).replace('.',',')}`;"
    );
    $("#decrease").attr(
        "onclick",
        "this.previousElementSibling.value = Number(this.previousElementSibling.value) + 1; this.parentElement.nextElementSibling.children[1].innerText = `R$ ${String((" +
            database[productId - 1].price +
            " * Number(this.previousElementSibling.value)).toFixed(2)).replace('.',',')}`;"
    );
} else if (window.location.pathname == "/cart") {
    let cart = localStorage.getItem("cart");
    if (!cart) {
        // vazio
    } else {
        cart = JSON.parse(cart);

        console.log(cart)

        for (let i = 0; i < cart.length; i++) {
            console.log(i)
            $(".product-thumbnail.single").each(function () {
                $(this).attr("src", API_URL + `products/${database[cart[i]["id"] - 1].id}/1`);
            });
            $(".name").each(function () {
                $(this).text(database[cart[i]["id"] - 1].name);
            });
            $(".description").each(function () {
                $(this).text(database[cart[i]["id"] - 1].description);
            });
            $(".quantity").each(function () {
                $(this).val(cart[i]["quantity"]);
            });
            $(".price").each(function () {
                $(this).text("R$ " + Number(database[cart[i]["id"] - 1].price * cart[i]["quantity"])
                    .toFixed(2)
                    .replace(".", ","));
            });
    
            $("#increase").attr(
                "onclick",
                "if (Number(this.nextElementSibling.value) > 1) this.nextElementSibling.value = Number(this.nextElementSibling.value) - 1; this.parentElement.nextElementSibling.children[1].innerText = `R$ ${String((" +
                database[cart[i]["id"] - 1].price +
                    " * Number(this.nextElementSibling.value)).toFixed(2)).replace('.',',')}`;"
            );
            
            $("#decrease").attr(
                "onclick",
                "this.previousElementSibling.value = Number(this.previousElementSibling.value) + 1; this.parentElement.nextElementSibling.children[1].innerText = `R$ ${String((" +
                database[cart[i]["id"] - 1].price +
                    " * Number(this.previousElementSibling.value)).toFixed(2)).replace('.',',')}`;"
            );
        }
    }
}
