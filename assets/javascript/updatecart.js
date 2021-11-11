
const badge = document.querySelector('.header__cart-notice'); // số lượng sản phẩm đã mua (nằm trên icon giỏ hàng)
const cartElement = document.querySelector('.header__list-cart'); // thẻ chưa 2 trạng thái của giỏ hàng có và ko có sản phẩm
const productsCart = document.querySelector('.header-cart__items'); // thẻ ul chứa các sản phẩm người dùng đã mua
let count = JSON.parse(localStorage.getItem('count')); // count số lượng sản phẩm ngừi dùng đã mua được lưu trên local
let listProduct = JSON.parse(localStorage.getItem('listProduct')); // mảng chứa các object sản phẩm mà người dùng đã mua 

function start() {
    if(count && listProduct) // khi cound và listProduct có trong local thì nó sẽ render lại toàn bộ nếu không có file này khi người dùng mua hàng từ trang sản phẩm ra sẽ ko thấy sản phẩm trong giỏ hàng trên trang index.html
    {
        showHaveCart();    
        render();
    }
}
start();


function showHaveCart() {
    if(cartElement.classList.contains('header__list-cart--no-cart'))
    {
        cartElement.classList.remove('header__list-cart--no-cart');
        cartElement.classList.add('header__list-cart--have-carts');
    }
}

function render()
{
    listProduct.forEach(product => {
        let htmls = listProduct.map(product => {
            return `<li class="header-cart__item">
            <img src="${product.image.replace('url(', '').replace(')', '')}"
                alt="" class="header-cart__img">
            <div class="header-cart__info">
                <div class="header-cart__heading-item">
                    <h4 class="header-cart__heading-title">${product.name}
                    </h4>
                    <div class="header-cart__price-item">
                        <span class="header-cart__price">${product.price_new}</span>
                        <span class="header-cart__multiply">x${product.quality}</span>
                    </div>
                </div>
            </div>
        </li>`;
        });
        
    badge.innerHTML = count;
    productsCart.innerHTML = htmls.join('');
    })
}