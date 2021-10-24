
class OrderForm{


    constructor()
    {
        this.trashBtns = $('#cart-main')
        this.addCartButton = $('#addCart');
        this.basket = new Basket();
        this.modal = new Modal();
    }

    run()
    {
        // add to cart button
        this.addCartButton.on('click',this.addProductToCart.bind(this))
        //initialization of modal class
        this.modal.run();
        this.refreshCartPage()
        //delete button on table
        this.trashBtns.on('click','.fa-trash',this.removeProductFromCart.bind(this))
    }

    removeProductFromCart()
    {
        let productId = $(event.target).data('id');

        this.basket.delete(productId);
        this.refreshCartPage();
    }

    refreshCartPage()
    {   
        let data ={
            data:this.basket.items,
            subTotal:this.basket.getSubtotal()
        }

        $.post("/vino-mornag/ajax/cart/cartTreatment.php",data,function(res){
            $('#cart-main').html(res);  
        })
    }

    addProductToCart()
    {
        event.preventDefault();
        
        let id = parseInt($('#addCart').data('id')) ;
        let name = $("#product-name").text();
        let year = $("#product-year").text();
        let price = parseInt($("#product-price").text());
        let description = $("#product-description").text();
        let picture = $("#product-picture").attr("src");
        let quantity = Math.abs(parseInt($("#product-quantity").val()));
        
        if(isNaN(quantity))
        {
            quantity = 1 ;
        }
        

        //adding the product to the localStorage
        this.basket.add(id,name,year,price,description,picture,quantity);

        let product = this.basket.getProductById(id);
        let productQuantity = product.quantity;

        let subTotal = this.basket.getSubtotal();
        
        //refresh the modal
        this.modal.refreshModal(picture,name,productQuantity,price,subTotal,productQuantity);
        //showing the modal
        this.modal.showModal();
        
    }

}