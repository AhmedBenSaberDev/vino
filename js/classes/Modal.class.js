

class Modal{

    constructor()
    {
        this.modalEl = $('.cart-modal');
        this.modalCloseBtn = $('#modal-btn');
    }

    run()
    {
        this.modalCloseBtn.on('click',this.closeModal.bind(this))
    }

    closeModal()
    {
        this.modalEl.addClass('animate__fadeOutUp')
        setTimeout(()=>{
            this.modalEl.addClass('hide')
            this.modalEl.removeClass('animate__fadeOutUp')
        },1000)
    }
    
    showModal()
    {
        this.modalEl.removeClass('hide')
        this.modalEl.addClass('animate__fadeInDown')
        setTimeout(()=>{
            this.modalEl.removeClass("animate__fadeInDown")
        },1000)
    }

    refreshModal(picture,name,quantity,price,subtotal)
    {
        $('#product-name-image').attr("src",picture);
        $('#product-name-modal').text(name);
        $('#quantity-modal').text(quantity);
        $('#product-modal-price').text(price +" $" );
        $('#total-price-modal').text(subtotal + " $");
    }
}