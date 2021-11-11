
import {products} from "./storeproducts.js"; // ở đây em lấy dữ liệu từ file storeproduct để phục vụ cho việc render bên dưới em dùng import để lấy
let productId = localStorage.getItem('idProduct'); // em bắt đầu lấy id mà em đã thêm lúc trong file index.html id này là id sản phẩm mà người dùng click vào
const containElement = document.querySelector('.container'); // đây là thẻ mà em sẽ đổ dữ liệu ra view
const productTitle = document.querySelector('title'); // thằng này là thẻ title bên trong thẻ head em lấy nó ra để thêm title sản phẩm sẽ render vào nó

let productRender; // thằng này là để em lưu sản phâm sẽ render được lấy từ kho dữ liệu đã import từ dòng đầu tiên
//nó sẽ có id trùng với id mà người dùng click vào ở file index.html ban đầu bằng việc xữ lý bên dưới


// đây là hảm khỏi động toàn file
function beggin()
{
    render(getListImg, getListProduct); // file này chỉ xử lý việc render ra view thoi ở đây nó truyền 2 hàm dưới dạng callback 2 hàm này cũng phục vụ việc render lun
}
beggin();// gọi hàm (dùng iife sẽ tối ưu hơn đở tạo 1 hàm thừa mà cũng tạn dụng được kiến thức dc học những mà thoi em để z lun :)))


function render(getListImg, getListProduct) 
{
    // ở dầy em kiểm tra khi mà có id mà người dùng click thì sẽ tìm sản phẩm trong kho đó
    if(productId) {
        // ở đây em dùng thằng find để tìm ra thằng sản phẩm có id bằng với id sản phẩm mà người dùng nhập vào
        // khi find tìm thấy một object thõa mản điều kiện nó sẽ trả về object đó và dừng tìm 
        productRender = products.find(function(product) {
            return productId == product.id;
        })
    }
    // còn không trùng thì nó sẽ lấy sản phẩm đầu tiên phòng trường hợp cô mở thẳng file product.html mà không click vào sản phẩm từ trang index
    // nếu không có dòng này trường hợp trên nó sẽ không render ra gì hêt
    else {
        productRender = products[0];
    }

    // dưới đây em chỉ việc render lại cả trang từ các dữ liệu đã sữ lý ở trên kèm theo các khối htmls mà đã xữ lý ở 2 hàm getListImg và getListProduct được truyền vào hàm render dưới dạng callback

    let html = `
    <div class="grid bg-gray">
    <div class="grid__row mt-20">
        <div class="grid__column-4">
            <div class="review-product">
                <div class="review-product__img" style="background-image: ${productRender.image}"></div>
                <div class="review-product__list-img" >
                    ${getListImg(productRender)}
                </div>
                <div class="review-product__action">
                    <div class="grid__row">
                        <div class="grid__column-7">
                            <div class="review-socal">
                                <span class="review-socal__title">Chia sẻ: </span>
                                <a href="" class="review-socal__link"><i class="fab fa-facebook-messenger" style="color: #0384FF;"></i></a>
                                <a href="" class="review-socal__link"><i class="fab fa-facebook" style="color: #3D5B99;"></i></a>
                                <a href="" class="review-socal__link"><i class="fab fa-youtube" style="color: red;"></i></a>
                                <a href="" class="review-socal__link"><i class="fab fa-twitter" style="color: #10C3FE;"></i></a>
                            </div>
                        </div>
                        <div class="grid__column-3">                                 
                            <div class="review-product__like">
                                <span class="like-action"><i class="fas fa-heart"></i></span>
                                <span class="like-action like-action--checked"><i class="far fa-heart"></i></span>
                                <span class="quality-like">Đã thích (${productRender.liked})</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="grid__column-6">
            <div class="info-product">
                <div class="infor-product__tiltle">
                    <svg width="30" height="16" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="_2fakLZ"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 2C0 0.895431 0.895431 0 2 0L28 0C29.1046 0 30 0.895431 30 2V14C30 15.1046 29.1046 16 28 16H2C0.89543 16 0 15.1046 0 14L0 2Z" fill="#D0011B"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.8045 3.00128H10.8673C10.8403 3.00132 10.8137 3.00752 10.7895 3.01939C10.7652 3.03126 10.744 3.0485 10.7274 3.0698L10.151 3.70154C10.1108 3.74133 10.0736 3.78149 10.0397 3.82129L10.0109 3.85512L9.73645 4.1559C9.26611 4.63346 8.55272 5.15874 7.50601 5.1696H7.47399C6.35562 5.1696 5.61724 4.53545 5.18223 4.084L4.2545 3.06788C4.23787 3.04676 4.21666 3.02968 4.19249 3.01792C4.16831 3.00617 4.14178 3.00004 4.1149 3H3.17803C3.13084 3.00008 3.08561 3.01887 3.05224 3.05223C3.01887 3.0856 3.00008 3.13084 3 3.17803V12.8198C3.00008 12.867 3.01887 12.9123 3.05224 12.9456C3.08561 12.979 3.13084 12.9978 3.17803 12.9979H4.11458C4.16177 12.9978 4.207 12.979 4.24037 12.9456C4.27373 12.9123 4.29252 12.867 4.2926 12.8198V5.00726C4.51669 5.20068 4.74894 5.38439 4.9887 5.55788C5.57807 5.9956 6.40375 6.40585 7.47655 6.40585H7.51722C8.53818 6.3953 9.32642 6.03468 9.89137 5.64233L9.89877 5.64155L9.97012 5.58642C10.0506 5.52802 10.1262 5.46926 10.1969 5.41116L10.689 5.03095V12.8198C10.6892 12.867 10.708 12.9122 10.7413 12.9455C10.7747 12.9789 10.8199 12.9977 10.867 12.9979H11.8042C11.8514 12.9977 11.8966 12.9789 11.9299 12.9455C11.9633 12.9122 11.9821 12.867 11.9822 12.8198V3.17931C11.9821 3.1322 11.9633 3.08706 11.93 3.05372C11.8967 3.02038 11.8516 3.00153 11.8045 3.00128ZM19.3506 6.74843H18.4154C18.3682 6.74851 18.3229 6.76729 18.2896 6.80066C18.2562 6.83403 18.2374 6.87926 18.2373 6.92645V7.5172C17.6712 7.03692 16.8957 6.70776 16.087 6.70776C14.307 6.70776 12.8639 8.11659 12.8639 9.85105C12.8639 11.5855 14.307 12.9947 16.087 12.9947C16.8743 12.9882 17.6348 12.7074 18.2373 12.2006V12.8195C18.2372 12.843 18.2417 12.8663 18.2506 12.888C18.2595 12.9097 18.2726 12.9295 18.2891 12.9461C18.3057 12.9628 18.3253 12.976 18.347 12.9851C18.3686 12.9941 18.3919 12.9988 18.4154 12.9988H19.3522C19.3994 12.9987 19.4446 12.98 19.478 12.9466C19.5114 12.9132 19.5302 12.868 19.5303 12.8208V6.92933C19.5306 6.90559 19.5262 6.88202 19.5173 6.86C19.5084 6.83798 19.4952 6.81796 19.4785 6.80111C19.4618 6.78426 19.4418 6.77092 19.4199 6.76187C19.3979 6.75283 19.3744 6.74825 19.3506 6.74843ZM16.1455 11.8375C14.9929 11.8375 14.0586 10.9493 14.0586 9.85425C14.0586 8.75921 14.9929 7.87133 16.1455 7.87133C17.2982 7.87133 18.2329 8.75921 18.2329 9.85425C18.2329 10.9493 17.2982 11.8375 16.1455 11.8375ZM23.7506 12.02C23.7618 11.9746 23.7547 11.9266 23.7307 11.8865C23.7067 11.8464 23.6678 11.8174 23.6225 11.8058L23.2034 11.7005L23.1918 11.6976C22.5499 11.5653 22.3174 11.354 22.287 10.769V3.17897C22.2866 3.13204 22.2677 3.08715 22.2344 3.05414C22.201 3.02114 22.1559 3.0027 22.109 3.00287H21.2445C21.1975 3.0027 21.1524 3.02114 21.1191 3.05414C21.0857 3.08715 21.0668 3.13204 21.0664 3.17897V10.4472C21.0082 12.1513 21.9818 12.6863 22.8857 12.8864L23.3174 12.9947C23.363 13.0061 23.4113 12.999 23.4517 12.975C23.4922 12.951 23.5216 12.9121 23.5335 12.8666L23.6318 12.4888C23.6348 12.4786 23.6374 12.4681 23.6399 12.4576L23.6427 12.4465L23.7506 12.02ZM26.9708 11.8864C26.9948 11.9266 27.0019 11.9746 26.9905 12.02L26.8826 12.4465C26.8794 12.4606 26.8759 12.475 26.8718 12.4888L26.7738 12.8666C26.7618 12.9121 26.7324 12.9511 26.6918 12.975C26.6513 12.999 26.603 13.0061 26.5573 12.9947L26.1257 12.8864C25.2218 12.6863 24.2485 12.1513 24.3064 10.4472V3.17897C24.3067 3.13204 24.3257 3.08715 24.359 3.05414C24.3924 3.02114 24.4375 3.0027 24.4844 3.00287H25.3489C25.3959 3.0027 25.441 3.02114 25.4743 3.05414C25.5077 3.08715 25.5266 3.13204 25.527 3.17897V10.769C25.5574 11.354 25.7914 11.5653 26.4318 11.6976C26.436 11.6982 26.4395 11.7005 26.4437 11.7005L26.8625 11.8058C26.9078 11.8173 26.9468 11.8463 26.9708 11.8864Z" fill="white"></path></svg>
                    <span class="product-name">${productRender.name}</span>
                </div>
                <div class="info-product__evaluate">
                    <span class="evaluate-text">Chưa có đánh giá</span>
                    <span class="evaluate-sold">${productRender.sold} Đã bán</span>
                </div>
                <div class="info-product__price">
                    <span class="price-old">${productRender.price_old}đ</span>
                    <span class="price-new">${productRender.price_new}đ</span>
                    <span class="price-lable">${productRender.price_sale}</span>
                </div>

                <div class="info-product__shipping">
                    <div class="grid__row">
                        <div class="grid__column-2">
                           <span class="shipping-title">Vận Chuyển</span>
                        </div>
                        <div class="grid__column-8">
                            <div class="shipping-contain">
                                <div class="shipping-contain__price">
                                    <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/1cdd37339544d858f4d0ade5723cd477.png" class="shipping-img" alt="shipping-img">
                                    <span class="shipping-order">Miễn phí vận chuyển</span>
                                    <div class="shipping-description">Miễn phí vận chuyển cho đơn hàng trên ₫50.000</div>
                                </div>
                                <div class="shipping-contain__address">
                                    <i class="fas fa-truck-moving shipping-contain__icon"></i>
                                    <span class="shipping-contain-text">Vận Chuyển Tới</span>
                                    <select id="cars" name="cars" class="select-address">
                                        <option value="HCM">Hồ Chí Minh</option>
                                        <option value="LA">Long An</option>
                                        <option value="HN">Hà Nội</option>
                                        <option value="HP">Hải Phòng</option>
                                        <option value="CM">Cà Mau</option>
                                    </select>
                                </div>
                                <div class="shipping-contain__price">
                                    <span style="margin-left: 40px; color: #333;">Phí Vận Chuyển</span>
                                    <span class="into-money">0đ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="product-quatity">
                    <span class="product-quatity__text">Số Lượng</span>
                    <div class="product-quatity__adjust">
                        <button class="btn-quality btn-quality--subtraction">-</button>
                        <input type="number" value="1" class="input-quality" pattern="^[1-9]$">
                        <button class="btn-quality btn-quality--add">+</button>
                    </div>
                    <div class="product-rest"><span class="qualityJS">${productRender.rest}</span> sản phẩm có sản</div>
                </div>

                <div class="alert-limit">Đã đạt đến số lượng mua tối đa cho phép của sản phẩm này.</div>

                <div class="shipping-contain__btn">
                    <button class="btn-buy">
                        <i class="fas fa-cart-plus icon-buy"></i>
                        <span class="title-buy">Thêm Vào Giỏi Hàng</span>
                    </button>
                    <a class="btn-buy btn-buy__red" href="./cart.html">
                        <span class="title-buy_w">Mua Ngay</span>
                    </a>
                </div>

                <div class="content-shop">
                    <div class="content">
                        <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/6c502a2641457578b0d5f5153b53dd5d.png" alt="" class="img-content">
                        <span class="text-content">7 ngày miễn phí trả hàng</span>
                    </div>
                    <div class="content">
                        <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/16ead7e0a68c3cff9f32910e4be08122.png" alt="" class="img-content">
                        <span class="text-content">Hàng chính hãng 100%</span>
                    </div>
                    <div class="content">
                        <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/511aca04cc3ba9234ab0e4fcf20768a2.png" alt="" class="img-content">
                        <span class="text-content">Miễn phí vận chuyển</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="grid">
    <div class="info-shopct mt-20">
        <div class="info-shop">
            <div class="info-shop__border">
                <img ${productRender.imageShop} alt="" class="img-shop">
                <div class="info-shop-content">
                    <div class="info-shop__name">${productRender.nameShop}</div>
                    <div class="info-shop__timeon">${productRender.online}</div>
                    <div class="info-shop__contain-btn">
                        <button class="btn-shop__red">
                            <i class="far fa-comments"></i>
                            <span class="info-shop__text">Chat Ngay</span>
                        </button>
                        <button class="btn-shop__while">
                            <i class="fas fa-store icon-shop"></i>
                            <span class="info-shop__text">Xem Shop</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="achievements-shop">
            <div class="achievements-shop__ct">
                <div class="achievements-content">Đánh Giá<span style="color: red; margin-left: 6px;">${productRender.evaluate}</span></div>
                <div class="achievements-content1">Sản Phẩm<span style="color: red; margin-left: 6px;">${productRender.productShops}</span></div>
            </div>
            <div class="achievements-shop__ct">
                <div class="achievements-content">Tỉ Lệ Phản Hồi<span style="color: red; margin-left: 6px;">${productRender.feedback}</span></div>
                <div class="achievements-content1">Thời Gian Phản Hồi<span style="color: red; margin-left: 6px;">Trong vài giờ</span></div>
            </div>
            <div class="achievements-shop__ct">
                <div class="achievements-content">Tham Gia<span style="color: red; margin-left: 6px;">${productRender.join}</span></div>
                <div class="achievements-content1">Người Theo Dõi<span style="color: red; margin-left: 6px;">${productRender.follow}</span></div>
            </div>
        </div>
    </div>
</div>

<div class="grid">
    <div class="grid__row">
        <div class="grid__column-8">
            <div class="product-description mt-20">
                <div class="product-description-title">CHI TIẾT SẢN PHẨM</div>
                <div class="product-description-contain">
                    <div class="product-description-key-contain">
                        <div class="product-description-key">Danh Mục</div> 
                        <div class="product-description-value"><a href="#" class="color-title">Shopee</a> <i class="fas fa-chevron-right css-icon"></i> Books & Stationery <i class="fas fa-chevron-right css-icon"></i> Domestic Books <i class="fas fa-chevron-right css-icon"></i> Classic Literature</div>
                    </div>
                    <div class="product-description-key-contain">
                        <div class="product-description-key">Thương Hiệu</div> 
                        <div class="product-description-value"><a href="#" class="color-title">${productRender.tradeMark}</a></div>
                    </div>
                    <div class="product-description-key-contain">
                        <div class="product-description-key">Ngôn ngữ</div> 
                        <div class="product-description-value">Tiếng Việt</div>
                    </div>
                    <div class="product-description-key-contain center">
                        <div class="product-description-key">Nhập khẩu/ trong nước</div> 
                        <div class="product-description-value">Trong nước</div>
                    </div>
                    <div class="product-description-key-contain">
                        <div class="product-description-key">Kho hàng</div> 
                        <div class="product-description-value">${productRender.rest}</div>
                    </div>
                    <div class="product-description-key-contain">
                        <div class="product-description-key">Gửi từ</div> 
                        <div class="product-description-value">${productRender.sentFrom}</div>
                    </div>
                </div>
                <div class="product-description-title" style="margin-top: 20px;">MÔ TẢ SẢN PHẨM</div>
                <div class="product-description__p">
                    <p>${productRender.descripton}</p>
                </div>
            </div>

            <div class="evaluate-product mt-20">
                <div class="evaluate-product__title">ĐÁNH GIÁ SẢN PHẨM</div>
                <div class="evaluate-product__img">
                    <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/eac95a8ac896158642c2761a9e9cd52e.png" alt="">
                </div>
            </div>
        </div>

        <div class="grid__column-2">
            <div class="product-relate mt-20">
                <div class="product-relate__title">Top Sản Phẩm Bán Chạy</div>
                ${getListProduct(productRender)}
            </div>
        </div>
    </div>
</div>`;
    containElement.innerHTML = html;
    productTitle.innerText = productRender.name;
}


// hàm này sẽ render ra các hình ảnh con bên dưới hình ảnh lớn vì các hình ảnh con dc lưu trữ dưới dạng mảng và có key là list_img nên em dùng map để lập và render ra các hình ảnh có trong mảng
// em chọn cách lưu trữ trong mảng này thay vì ghi là img1, img2... là vì mỗi sản phẩm sẽ có một list img riêng có sản phẩm có 1 ảnh nhưng có sản phẩm có 3-4 ảnh lưu nhưng img1,2... là không đồng bộ
// sẽ khó khăn trong việc đẩy các hình ảnh đó ra ngoài còn ở đây em chỉ việc lập qua mảng nếu mảng có 1 sản phẩm nó sẽ trả ra một dòng của sản phẩm đó và nhiêu sản phẩm với nhiều hình ảnh trong mảng
function getListImg(productRender)
{
    let img = productRender.list_img.map(function(element) {
        return `<div class="review-product__contain">
                    <div class="review-img" style="background-image: ${element}"></div>
                </div>`;
    })
    return img.join(''); // sau khi em có được khối html chứa các img thì em cần return về để dùng làm callback cho hàm render
}

function getListProduct(productRender)
{
    // ở dây tương tự như thằng bên trên nó sẽ trả về một khối htmls là các sản phẩm được đề xuất
    let productSell = productRender.listProductSell.map(function(element) {
        return `<div class="product-relate__list">
                    <div class="product-relate__hot-sell">
                        <div class="product-relate__img" style="background-image: ${element.img}"></div>
                        <div class="product-relate__contain">
                            <div class="product-relate__name">${element.name}</div>
                            <div class="product-relate__price">${element.price}đ</div>
                        </div>
                    </div>
                </div>`;
    })
    return productSell.join(''); // sau khi xử lý xong em cũng return về để làm callback cho hàm render
}




// tất cả các elenment bên dưới này em phải gọi ở ngay đây (khi mà hàm render đã chạy xong)
// nếu em gọi ở trên nó sẽ ko trả ra element do chưa render các thành phần ra ngoài DOM 

let listImgReview = [...document.querySelectorAll('.review-product__contain')]; // đay là toàn bộ các img con em lấy nó để export ra và xữ lý khi người dùng di chuột qua (em dùng spreat để làm màu thoi :))
let imgRepresent = document.querySelector('.review-product__img'); // đây là hình nằm bên trên các img con em lấy nó đễ render lại hình nay từ img con khi người dùng di chuột qua img con
let buyBtns = [...document.querySelectorAll('.btn-buy')]; // em lấy các nút này phục vụ cho việc người dùng ấn mua sản phẩm cụ thể là 2 nút
let btnAdd = document.querySelector('.btn-quality--add'); // đây là nút tăng số lượng sản phẩm 
let btnSubtraction = document.querySelector('.btn-quality--subtraction'); // đây là nút giảm số lượng sản phẩm
let enterInput = document.querySelector('.input-quality') // đây là thẻ input để người dùng nhập số lượng sản phẩm vào 
let selection = document.querySelector('#cars'); // đây là thẻ select để người dùng chọn dịa chỉ 
let shippingPrice = document.querySelector('.into-money'); // đây là tiền ship
let qualityJs = document.querySelector('.qualityJS').innerText; // đây là số lượng sản phẩm còn lại
let limitQuality = document.querySelector('.alert-limit'); // thông báo khi mua đặt đến giới hạn


export {listImgReview, imgRepresent, buyBtns, productRender, btnAdd, btnSubtraction, enterInput, selection, shippingPrice, qualityJs, limitQuality}; // và en export tất cả ra ngoài