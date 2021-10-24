
class Basket{

    constructor()
    {
        this.items = [];
        this.load();
    }

    load()
    {
        let jsonData = window.localStorage.getItem('panier');
        this.items = JSON.parse(jsonData);
        
        if(this.items == null)
        {
            this.items = [];
        }
    }

    save()
    {
        window.localStorage.setItem('panier',JSON.stringify(this.items));
    }

    add(id,name, year,price,description,picture,quantity)
    {
       let product = {
        id:id,
        name:name,
        year:year,
        price:price,
        description:description,
        picture:picture,
        quantity:quantity
       }

       let found = false;
       
       this.items.forEach(element => {
        if(element.id == product.id)
        {
            element.quantity += product.quantity 
            found = true ;
        }              
        })

       if(found)
       {
           this.save();
           return
       }else{
           this.items.push(product);
           this.save();
       }
    }

    delete(id)
    {
        this.items.forEach((product,key) => {
            if(product.id == id)
            {
                this.items.splice(key,1)
                this.save()
            }
        })
    }

    getSubtotal()
    {
        let subTotal = 0;

        this.items.forEach(product =>{
            subTotal += product.price * product.quantity
        })

        return subTotal;
    } 

    getProductById(id)
    {

        let product;
        this.items.forEach((element,key)=>{
            if(element.id == id)
            {
                product = this.items[key]; 
            }
        })

        return product;
    }

    clear()
    {
        localStorage.clear();
    }
    
}