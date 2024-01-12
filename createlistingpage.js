let cardEle = document.getElementById("card")
let displayProduct = async () => {
    let response = await fetch("https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json")
    let data = await response.json()
    console.log(data)
    data.map((ele) => {
        console.log(ele)
    })
}

displayProduct()