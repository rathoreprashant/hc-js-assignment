// 2. Implement code to handle multiple promises. You have to fetch information of 5 different products from API
async function getusersdata() {
    for (let x = 1; x <= 5; x++) {
        await fetch(`https://fakestoreapi.com/products/${x}`)
            .then(res => res.json())
            .then(element => {
                console.log("fetch", element);
                document.getElementById(`response${x}`).innerHTML = "Id: " + element.id + "<br>Product Name: " + element.title +
                    "<br>Price: " + element.price + "<br>Category: " + element.category;
                document.getElementById(`img${x}`).src = element.image;
            });
    }
}
getusersdata();