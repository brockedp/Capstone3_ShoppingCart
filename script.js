let itemList = [{item:"Apple", price:1.00},{item:"Bacon",price:3.50},{item:"Onion",price:0.89},{item:"Coffee",price:4.00}];

function displayGroceries(){
    let itemListDiv = document.querySelector(".item-list");
    itemListDiv.innerHTML = ""; // clears out our dom
    itemList.forEach(function(element, index){
        let div = document.createElement("div");
        div.classList.add("item-card");
        div.innerHTML = `
        <p class="item-data">Name: ${element.item}</p>
        <p class="item-data">Phone Number: ${element.price}</p>
        <button index=${index}>ADD</button>
        `; // `` are used to write multiline strings

        itemListDiv.append(div); // inserting into item list
    });
}
displayGroceries();

let checkOutList =[];
let checkOutPrice =[];

document
.querySelector(".item-list")
.addEventListener("click",
function(event){
    
    if(event.target.tagName === "BUTTON"){
        console.log(event.target.attributes[0].value);
        let index = event.target.attributes[0].value;
        //checkOutList.push(event.target.attributes[0].value,1);
        let item = itemList[index].item;
        let price = itemList[index].price;

        checkOutList.push({
            item, price
        })
        checkOutPrice.push({
            price
        })

    }
    console.log(checkOutList);
});


document
.querySelector(".checkout-button")
.addEventListener("click",
function(event){
    
    if(event.target.tagName === "BUTTON"){
        console.log("Let me check out");
        let checkoutListDiv = document.querySelector(".checkout-list");
        checkoutListDiv.innerHTML="";
        let total = 0;
        checkOutList.forEach(function(element,index){
            let div = document.createElement("div");
            div.classList.add("checkout-card");
            div.innerHTML = `
            <p class="checkout-data">${index+1} Item: ${element.item} </p>
            <p class ="checkout-data"> Price $${element.price}</p>
            `;
            total = total+element.price;
            checkoutListDiv.append(div);
        })
        let totalListDiv = document.querySelector(".total");
        totalListDiv.innerHTML=`<p>Your total is $${total}</p>`;
        

        console.log("Your total is "+total);
    }

});










