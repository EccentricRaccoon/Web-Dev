bg = document.getElementsByClassName("bg");
//product = document.getElementsByClassName("product-link");

// asign event all links
document.querySelectorAll(".product-link").forEach(item => {
    item.addEventListener("click", event => {
        id = item.getAttribute("data-productid");

        productFull = document.getElementById( id );
        

        productFull.style.top = "50%";
    });
});

