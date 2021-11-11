
let containerElement = document.querySelector(".container"); // thẻ này chứa khối block với 2 trạng thái là có sản phẩm và không có sản phẩm
let rootElement = document.querySelector(".root"); // thẻ này là để render các sản phẩm đã mua ra ngoài
let shippingPrice = document.querySelector(".pay-price"); // phí ship
let selection = document.querySelector("#address"); // thẻ select giúp lấy thông tin khi người dùng chọn địa chỉ
let qualityProduct = document.querySelector(".quality-js"); // số lượng sản phẩm
let price = document.querySelector(".pay-price--js"); // giá sản phẩm
let listProduct = JSON.parse(localStorage.getItem('listProduct')); // array sản phẩm được xử ly và lưu ở file buyproducts.js
let listId = JSON.parse(localStorage.getItem('listId')); // array id sản phẩm cũng được xữ lý lưu ở file buyproducts.js
let count = JSON.parse(localStorage.getItem('count')); // số lượng sản phẩm được xứ lý và lưu ở file buyproducts.js


const start = () => {
    if(listProduct.length != 0) { // kiểm tra nếu có sản phẩm sẽ
        showHaveProducts(); // hiển thị trạng thái có sản phẩm
        render(); // sau đó render các sản phẩm ra ngoài
    }
}
start();

// hàm hiển thị trạng thái có sản phẩm
function showHaveProducts() {
    if(containerElement.classList.contains('container--no-products')) {
        containerElement.classList.remove('container--no-products');
        containerElement.classList.add('container--have-products');
    }
}

// hàm hiển thị trạng thái ko có sản phẩm
function hideHaveProducts() {
    if(containerElement.classList.contains('container--have-products')) {
        containerElement.classList.remove('container--have-products');
        containerElement.classList.add('container--no-products');
    }
}

// render sản phẩm ra view
function render() {
    if(listProduct != 0) {
        let htmls = listProduct.map(product => {
            return `<div class="cart-buy">
            <div class="cart-buy__products">
                <div class="grid__row">
                    <div class="grid__column-5">
                        <div class="products-contain">
                            <div class="product-contain__img"
                                style="background-image: ${product.image}">
                            </div>
                            <div class="product-contain__text">
                                <div class="text-title">${product.name}
                                </div>
                                <div class="lable-sell"
                                    style="background-image: url(https://cf.shopee.vn/file/b9c2a9417893cd8fdc0aed0a96d50bfb);">
                                </div>
                                <div class="text-title1">
                                    <img class="icon-sell"
                                        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/cart/91167e001db60b62d4f85c3e0ea919b6.png"
                                        alt="">
                                    7 Ngày Miễn Phí Trả Hàng
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grid__colum-5">
                        <div class="container-title">
                            <div class="products-contain1">
                                <div class="price-old">${product.price_old}đ</div>
                                <div class="price-new">${product.price_new}đ</div>
                            </div>
                            <div class="products-contain1">
                                <div class="quality">${product.quality}</div>
                            </div>
        
                            <div class="products-contain1">
                                <div class="price">${product.price_new}đ</div>
                            </div>
        
                            <div class="products-contain1">
                                <div data-id="${product.id}" class="delete">Xóa</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
        })
        rootElement.innerHTML = htmls.join('');
        updateQuality(); // hiển thị số lượng sản phẩm
        selectionAddress(); // cập nhật địa chỉ 
        updatePrice(); // cập nhật giá
        deleteProduct(); // cập nhật lại sau khi xóa
    }
}


// hiển thị số lượng sản phẩm
function updateQuality() {
    qualityProduct.innerHTML = count;
}

// giá tiền của từng địa chịa
function selectionAddress() {
    selection.onchange = function() {
        switch(selection.value) {
            case 'HCM':
                shippingPrice.innerText = '0đ';
                break;
            case 'LA':
                shippingPrice.innerText = '20.000đ';
                break;
            case 'HN':
                shippingPrice.innerText = '50.000đ';
                break;
            case 'HP':
                shippingPrice.innerText = '30.000đ';
                break;
            case 'CM':
                shippingPrice.innerText = '50.000đ';
                break;
        }
        updatePrice(); // mổi lần thay đổi địa chỉ sẽ cập nhật lại giá 
    }
}

// hàm tính tổng tiền
function updatePrice() {
    // em dùng reduce để tính tổng tiền bằng công thức giá sản phẩm nhân với số lượng
    // vì giá là chuổi nên phải convert sang số những nếu em cứ để như thế mà convert thì nó sẽ nuốt mấy con 0 ở dưới cuối số của em 
    // nên em phải dùng thàng replace để bỏ di dấu .trong chuổi price_new  sau đó convert nó sẽ ko mất nữa
    let result = listProduct.reduce((initital, element) => {
        return (Number(element.price_new.replace(/\./g, '')) * element.quality) + initital;
    }, 0);
    
    // khi giá ship là 0 lúc này là chuổi nó vẫn là true nên em phải convert sang số nó là 0 => false nên toán tử && sẽ trả về thằng đầu tiên tức là ko và ko xử lý thằng phía sau
    // khi giá ship khác 0 lúc này thì ko có giá trị false để trả về nên toán tử && sẽ trả về thành cuối cùng nó được bỏ dấu chấm trong chuổi và convert sang số
    let numberPrice = result + (parseInt(shippingPrice.innerText) && parseInt(shippingPrice.innerText.replace(/\./, '')));
    let totalPrice = numberPrice.toString().split(''); // em phải biến nó lại từ số thành chuổi sau đó mới có thể dùng split để biến nó thành mảng
    // giá được xử lý với mấy dòng trên sẽ có kiểu 90000000 em dùng mảng này để thêm mấy dấu chấm vào chuổi số cho đẹp :))
    
    // logic để em thêm dấu . vào hoạt động như sau:
    for(let i = totalPrice.length - 1, counter = 1; i >= 0; i--) { // em khai báo i = chiều dài của chuổi chứa giá em muốn thêm dấu từ dưới lên và thêm count = 1 để xũ lý
        // em không thể cho count bằng 0 vì khi chạy đến phần tử số 3 để thêm dâu chấm thì count mới chỉ 2 và ko chia dư dc cho 3
        // ở đây cứ cách 3 số là sẽ thêm 1 dấu chấu nên em dùng biến count để làm việc này 
        if(counter % 3 == 0)
        {
            // nếu thiếu dòng này khi 1 số có 6 chữ số vd 100000
            // nó sẽ thêm thành như z .100.000
            // vì lúc này count =6 vân thỏa mản điều kiện count % 3 == 0 nên nó thêm dấu chấm vào 
            if(i > 0) { // khi i nó = 0 thì sẽ ko cho thêm nữa tức là lúc nó đi đến đầu mảng thì sẽ ko thêm dấu chấm 
                totalPrice[i] = '.' + totalPrice[i];
            }
        }
        counter++; // khi count tăng đến 3 lúc này i thì bằng 2 
    }
    price.innerText = totalPrice.join('');
}

// hàm này dùng để xóa sản phẩm em xem số shoppe thì thấy họ ko quan tâm đến số lượng mỗi sản phẩm lắm ví dụ
// mà trang shoppe nó ko lấy số lượng sản phẩm ở trang sản phẩm nó lấy ở trang giỏ hàng
// sản phẩm a người dùng mua 100 cái thì khi bấm xóa 1 cái nó xóa lun 100 sản phẩm nên em cũng làm z lun :))
function deleteProduct() {
    // lấy nút xóa
    let deleteBtn = document.querySelectorAll('.delete');
    deleteBtn.forEach(element => { // lắng nghe sự kiện cho từng nút

        element.addEventListener('click', function deleteLocalStore() {
            // ở đây có 1 vấn đề là khi em click vào nút xóa thì làm sao để biết sản phẩm đó là sản phẩm nào trong thằng local để xóa thì cách xử lý của em là em tạo 1 attribute có tên là data-id 
            // và mỗi cái data-id này sẽ chứa một id sản phẩm dược render ra từ chính sản phẩm đó lun (em thêm attribute trên hàm render)

            // ở đây em sẽ tìm index của thằng có id là cái id của data-id 
            let indexRemove = listProduct.findIndex(product => { // em dùng thằng findeindex nó sẽ trả về vị trí sản object trong mảng listProduct và thế là xong
                return element.getAttribute('data-id') == product.id;
            });

            // em dùng thằng splice để xóa vì cái listId và listProduct đều lưu chung nên nó sẽ có vị trí giống nhau nên có thể dùng cho listId lun
            listId.splice(indexRemove, 1);
            listProduct.splice(indexRemove, 1);
            count--; // giảm số lượng sản phẩm xuống

            // cập nhật lại local
            localStorage.setItem('listProduct', JSON.stringify(listProduct))
            localStorage.setItem('listId', JSON.stringify(listId))
            localStorage.setItem('count', JSON.stringify(count))

            // kiểm tra xem nếu mảng ko có giá trị
            if(listProduct.length === 0)
            {
                // em sẽ xóa hết các thành phần trong local và chuyển trạng thái thành ko có sản phẩm
                localStorage.removeItem('listProduct');
                localStorage.removeItem('count');
                localStorage.removeItem('listId');
                hideHaveProducts();
            }
        });

        // sau đó render lại
        element.addEventListener('click', render);
    })
}

