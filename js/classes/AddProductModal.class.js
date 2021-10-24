
class AddProductModal{

    constructor()
    {
        this.editModalwrapper = $('.edit-modal-wrapper');
        this.modalEl = $('.add-product-modal');
        this.addButton = $('#add-product-button');
        this.closeButton = $('#closeAdd');
        this.commandesBtn = $('#commandes-list');

        this.addModalBtn = $('#add-product-modal');

        this.productNameInput = $('#productName');
        this.productPriceInput = $('#price');
        this.productYearInput = $('#year');
        this.productDescriptionInput = $('#description');

        this.productNameWarningEl =$('#name-warning');  
        this.descriptionWarningEl  =$('#description-warning');
        this.priceWarningEl =$('#price-warning');
        this.yearWarningEl =$('#year-warning');

        this.formEl = $('#add-product-form');
    }

    run()
    {
        this.addButton.on('click',this.showModal.bind(this));
        this.closeButton.on('click',this.closeModal.bind(this));
        //this.addModalBtn.on('click',this.addProduct.bind(this))
        this.editModalwrapper.on('click',this.closeModal.bind(this));
    }

    addProduct()
    {
        event.preventDefault();
        this.resetForm();

        let productName = this.productNameInput.val();
        let productPrice = this.productPriceInput.val();
        let productYear = this.productYearInput.val();
        let productDescription = this.productDescriptionInput.val();

        if(this.validateInput(productName,productPrice,productYear,productDescription))
        {
            $('#add-product-form').submit();
            this.resetForm();
        }   
    }

    closeModal()
    {
        this.resetForm();
        
        this.editModalwrapper.addClass('hide');
        this.modalEl.addClass('animate__fadeOutUp');

        setTimeout(()=>{
            this.modalEl.addClass('hide');
            this.modalEl.removeClass('animate__fadeOutUp');
        },1000);
    }
    
    showModal()
    {
        event.preventDefault();

        this.editModalwrapper.removeClass('hide');
        this.modalEl.removeClass('hide');
        this.modalEl.addClass('animate__fadeInDown');
        setTimeout(()=>{
            this.modalEl.removeClass("animate__fadeInDown")
        },1000);
    }

    validateInput(productName,price,year,description)
    {
        let formValidity =
        {
            productName:true,
            price:true,
            year:true,
            description:true
        };

        if(productName.trim() == '')
        {
            formValidity.productName = false;
            this.productNameInput.addClass('invalid');
            this.productNameWarningEl.removeClass('hide');
        }

        if(description.trim() == '')
        {
            formValidity.description = false;
            this.productDescriptionInput.addClass('invalid');
            this.descriptionWarningEl.removeClass('hide');
        }

        if (price == "" || price < 0)
        {
            formValidity.price = false;
            this.productPriceInput.addClass('invalid');
            this.priceWarningEl.removeClass('hide');
        }

        if (year == '' || year < 0)
        {
            formValidity.year = false;
            this.productYearInput.addClass('invalid');
            this.yearWarningEl.removeClass('hide');
        }

        if(formValidity.productName == true  && formValidity.price == true && formValidity.description == true && formValidity.year )
        {
            return true;   
        }

        return false;

    }

    resetForm()
    {
        this.productYearInput.removeClass('invalid');
        this.yearWarningEl.addClass('hide');

        this.productPriceInput.removeClass('invalid');
        this.priceWarningEl.addClass('hide');

        this.productNameInput.removeClass('invalid');
        this.productNameWarningEl.addClass('hide');

        this.productDescriptionInput.removeClass('invalid');
        this.descriptionWarningEl.addClass('hide');
    }

}

