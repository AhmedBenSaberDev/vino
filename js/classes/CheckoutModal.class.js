

class CheckoutModal{

    constructor()
    {
        this.body = $('html');

        this.modalWrapper = $('.modal-wrapper');
        this.modalEl = $('.modal');
        this.modalParent = $('#cart-main');
        this.backToCartBtn = $('.back-cart');
        this.payBtn = $('.pay-btn');

        this.firstNameEl = $('#firstNameInput');
        this.lastNameEl = $('#lastNameInput');
        this.emailEl = $('#emailInput');

        this.basket = new Basket();
        this.orderForm = new OrderForm();

        this.firstNameWarningEl = $('#first-name-warning');
        this.lastNameWarningEl = $('#last-name-warning');
        this.emailWarningEl = $('#email-warning');

    }

    run()
    {
        this.modalParent.on('click','#checkout-btn',this.showModal.bind(this));
        this.backToCartBtn.on('click',this.closeModal.bind(this));
        this.payBtn.on('click',this.proceedPayment.bind(this));
        this.modalWrapper.on('click',this.closeModalByScreenClick.bind(this));
    }
    
    closeModalByScreenClick()
    {
        if(event.target.classList[0] == "modal-wrapper")
        {
            this.closeModal();
        }
    }   

    proceedPayment()
    {
        event.preventDefault(); 

        this.resetForm();

        let firstName = this.firstNameEl.val();
        let lastName = this.lastNameEl.val();
        let email = this.emailEl.val();
        let orderDetails = this.basket.items;

        let formData = 
        {
            payment:
            {
                firstName: firstName,
                lastName : lastName,
                email : email,
                orderDetails:orderDetails
            }
        }

        if(this.validateInput(firstName,lastName,email))
        {
            $.post('../../ajax/cart/checkout.php',formData,this.clearBasket())
            return;
            
        }
        
    }

    clearBasket()
    {
        this.basket.clear();
        this.closeModal();
        this.orderForm.basket.load();
        this.orderForm.refreshCartPage();
        this.showSuccessMessage();
    }

    showSuccessMessage()
    {
        $('.payment-success').removeClass('hide')
        $('.payment-success').addClass('animate__fadeInDown')
        setTimeout(()=>{
            $('.payment-success').removeClass("animate__fadeInDown")
        },1000)
        setTimeout(this.closeSuccessMessage,3000);
    }

    closeSuccessMessage()
    {
         $('.payment-success').addClass('animate__fadeOutUp')
        setTimeout(()=>{
             $('.payment-success').addClass('hide')
             $('.payment-success').removeClass('animate__fadeOutUp')
        },1000)   
    }

    validateInput(fistName,lastName,email)
    {
        let formValidity =
        {
            firstName:true,
            lastName:true,
            email:true
        };

        if(fistName.trim() == '')
        {
            formValidity.firstName = false;
            this.firstNameEl.addClass('invalid');
            this.firstNameWarningEl.removeClass('hide');
        }

        if(lastName.trim() == '')
        {
            formValidity.lastName = false;
            this.lastNameEl.addClass('invalid');
            this.lastNameWarningEl.removeClass('hide');
        }

        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
        {
            formValidity.email = false;
            this.emailEl.addClass('invalid');
            this.emailWarningEl.removeClass('hide');
        }

        if(formValidity.email == true  && formValidity.firstName == true && formValidity.lastName == true )
        {
            return true;   
        }
        return false;

    }

    resetForm()
    {
        this.emailEl.removeClass('invalid');
        this.emailWarningEl.addClass('hide');
        this.lastNameEl.removeClass('invalid');
        this.lastNameWarningEl.addClass('hide');
        this.firstNameEl.removeClass('invalid');
        this.firstNameWarningEl.addClass('hide');
    }

    closeModal()
    {
        this.modalWrapper.addClass('fade-slow-modal')
        setTimeout(()=>{

            this.modalWrapper.addClass('hide')
            this.modalWrapper.removeClass('fade-slow-modal')
            this.body.removeClass('overflow');
            this.resetForm();
        },1200)
        
        
    }
    
    showModal()
    {
        window.scrollTo({top: 0, behavior: 'smooth'});
        this.body.addClass('overflow');
        this.modalWrapper.addClass('show-slow-modal')
        this.modalWrapper.removeClass('hide')

        setTimeout(()=>{

            this.modalWrapper.removeClass('show-slow-modal')
        },1200)   
    }


}

