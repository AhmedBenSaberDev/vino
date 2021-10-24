// var rangeSlider = document.getElementById("rs-range-line");
// var rangeBullet = document.getElementById("rs-bullet");

// rangeSlider.addEventListener("input", showSliderValue, false);

// function showSliderValue() {
//   rangeBullet.innerHTML = rangeSlider.value;
//   var bulletPosition = (rangeSlider.value /rangeSlider.max);
//   rangeBullet.style.left = (bulletPosition * 578) + "px";
// }


class SearchBar{
    
    constructor(){

        this.searchInput = $('#search-product-input');
        this.rangeSlider = $('#rs-range-line');
        this.rangeBullet = $('#rs-bullet');
    }

    run()
    {
        this.searchInput.keyup(this.loadProducts.bind(this));
        this.rangeSlider.on('input',this.showSliderValue.bind(this));
        this.rangeSlider.on('input',this.loadProducts.bind(this));
    }

    loadProducts()
    {
        let data = 
        {
            productName :  this.searchInput.val().trim(),
            productPrice : this.rangeSlider.val()
        }

        $.post('../../ajax/product/searchProduct.php',data,function(res)
        {
            $('.product-container').html(res);
        })
    }

    showSliderValue() {
        
        this.rangeBullet.html(this.rangeSlider.val()); 
        let bulletPosition = (this.rangeSlider.val() / this.rangeSlider.attr('max'));
        this.rangeBullet.css("left",bulletPosition * 280 + "px");
      }
}