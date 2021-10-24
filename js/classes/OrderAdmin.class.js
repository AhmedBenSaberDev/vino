

class OrderAdmin{

    constructor()
    {
        this.orderDetailsBtn = $('.order-details-button');
        this.confirmShippingBtn = $('#confirm-shipping');
        this.tableParent = $('.orders-details')
    }

    run()
    {
        this.orderDetailsBtn.on('click',this.showOrderDetails)
        this.tableParent.on('click','#confirm-shipping',this.confirmShipping)
        this.tableParent.on('click','#delete-order',this.deleteOrder)
    }

    showOrderDetails()
    {
        let data = 
        {
            id:event.target.getAttribute('data-id')
        }

        $.post('../../ajax/order/orderDetails.php',data,function(res){
            $('.orders-details').html(res)
        })
    }

    confirmShipping()
    {
        let data = 
        {
            shipping:null,
            id:event.target.getAttribute('data-id')
        }

        $.post('../../ajax/order/orderDetails.php',data,function(res){
            $('.orders-details').html(res)
        })
    }

    deleteOrder()
    {
        let data = 
        {
            delete:null,
            id:event.target.getAttribute('data-id')
        }
        
        $.post('../../ajax/order/orderDetails.php',data,function(res){
            $('.orders-details').html(res)
            location.reload();
        })
    }
}