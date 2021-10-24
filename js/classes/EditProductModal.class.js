

class EditProductModal{

    constructor()
    {
        this.modalWrapper = $('.edit-modal-wrapper');
        this.modalEl = $('.edit-product-modal');
        this.buttons = document.querySelectorAll('.editProduct')
    }

    run()
    {
        this.handleOpenButton();
        this.modalEl.on('click','#closeEdit',this.closeModal.bind(this));
        this.modalWrapper.on('click',this.closeModal.bind(this))
    }

    handleOpenButton()
    {
        this.buttons.forEach(button =>{
            $(button).on('click',this.showModal.bind(this))
        })

    }

    closeModal()
    {
        this.modalWrapper.addClass('hide');
        this.modalEl.addClass('animate__fadeOutUp')
        setTimeout(()=>{
            this.modalEl.addClass('hide')
            this.modalEl.removeClass('animate__fadeOutUp')
        },1000)      
    }
    
    showModal()
    {
        event.preventDefault();

        let productId =  {
            productId:event.target.parentElement.getAttribute('data-id')
        }
        
        this.fetchProduct(productId);

        this.modalWrapper.removeClass('hide');
        this.modalEl.removeClass('hide')
        this.modalEl.addClass('animate__fadeInDown')
        setTimeout(()=>{
            this.modalEl.removeClass("animate__fadeInDown")
        },1000)
    }

    fetchProduct(productId)
    {
        $.post('../../ajax/product/editProduct.php',productId,function(res){
            $('.edit-product-modal').html(res);
        })
    }

}

