// This is list of products
var products = [
    {name:"Alpukat",price:10000,img:"image buah/alpukat.jpg"},
    {name:"Apel",price:15000,img:"image buah/apel 1.jpg"},
    {name:"Naga",price:9000,img:"image buah/naga.jpg"},
    {name:"Pisang",price:12000,img:"image buah/pisang 1.jpg"},
    {name:"Asparagus",price:7000,img:"image sayur/asparagus.jpg"},
    {name:"Bayam",price:2000,img:"image sayur/bayam.jpg"},
    {name:"Selada",price:16000,img:"image sayur/selada.jpg"},
    {name:"Pokcoy",price:3000,img:"image sayur/pokcoy.jpg"},
    {name:"tomat",price:3000,img:"image sayur/tomat.png"}

];


//this array will store cart Item objects
var myCart= [];

//for making cart item object
function cartProduct(id,name,price){
    this.id = id;
    this.name = name;
    this.price = price;
    this.qty = 1;
}

//to increment cart item qty by 1 as when cart is reterived the objects looses thier 
//prototype function
function incrementQty(cartItemObj)
{
    cartItemObj.qty++;  
}

function decrementQty(cartItemObj)
{
    cartItemObj.qty--;  
}

//to increment cart item qty by 1
cartProduct.prototype.incrementQty = function(){
    this.qty ++;  
};

// to return cartItem id
cartProduct.prototype.getId = function(){
    return this.id;
}

// this function is dynamically creating the products by
//appending HTML in .product-list
function createProducts(){
    
   var i=0;
   for(i=0;i<products.length;i++){
    
        var item = "<div class='col-xs-12 col-sm-4'><div class='carbox'><a class='img-carbox' href=''><img src='"+products[i].img+"' /></a><div class='carbox-content'><h4 class='carbox-title'><span>"+products[i].name+"</span></h4><p class=''>Rp.<span>"+products[i].price+"</span></p></div><div><a id="+i+" class='btn btn-warning btn-block addToCart'>Add To Cart</a></div></div></div>";
                
        $('.row.products-list').append(item);
    }  
}

$(function () {
   
    createProducts();
    retrieveCart();
    // Add To Cart button event handler
    $('.addToCart').click(function(){
    //console.log($(this).attr('id'));
    var pid = $(this).attr('id');
    addtoCart(pid);
    });
   
})

//This creats a cart item and add to start of array(myCart)
function add(id){
    var item = new cartProduct(id,products[id].name,products[id].price);
        myCart.unshift(item);
        console.log("Product Added");
        console.log(item);
     $('#cartAdded').show("slow");
    setTimeout(function(){
        $('#cartAdded').hide("slow");
    }, 2000);
}

function addtoCart(id){
    
    //add  1st product to empty cart array directly
    if(myCart.length==0){
        console.log("Cart Is initially empty");
        add(id);
        console.log(myCart);
        
    }
    else{
    // Here we search if item is alrady in cart them only increase its quantity by 1 else add new product
        var e=0,flag =0;
        var cartLength = myCart.length;
        var currentitem = null;
        for(e=0; e<cartLength;e++)
        {
            //checking if item exixt
            if(myCart[e].id == id){
                currentitem = myCart[e];
                flag = 1;
                break;
            }
        }
        if(flag==1){
            console.log("Item Already In Cart");
            incrementQty(currentitem);
            console.log("Quantity Increased By 1");
            console.log(currentitem);
            $('#cartUpdated').show("slow");setTimeout(function(){
                    $('#cartUpdated').hide("slow");}, 2000);
            }
        else{
            console.log("New Product");
            add(id);
        }
    } 
   
    saveCart(myCart);
    
}

//storing myCart array to local storage
function saveCart () {
    localStorage.setItem('mycart', JSON.stringify(myCart));
}

//getting back myCart object from local storage
function retrieveCart() {
    if(localStorage.getItem('mycart')){
        myCart = JSON.parse(localStorage.getItem('mycart'));
        console.log("Cart Reterived");
        
        console.log(myCart);
    }
    else{
        myCart =[];
        console.log("Cart Empty Made");
        console.log(myCart);    
    }
//myCart = JSON.parse(localStorage.getItem('mycart') ? localStorage.getItem('mycart') : '[]');
}


function emptyCart(){
    myCart = [];
    //saveCart();
    localStorage.removeItem('mycart');
    console.log("Cart Is Empty Now");
      $('#cartEmpty').show("slow");
    setTimeout(function(){
        $('#cartEmpty').hide("slow");
    }, 2000);
}

