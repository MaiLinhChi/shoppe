
import { buyBtns, productRender, btnAdd, btnSubtraction, enterInput, selection, shippingPrice, qualityJs, limitQuality } from "./renderproducts.js";
// buyBtn là các nút mua cụ thể là 2 nút 1 nút (thêm giỏ hàng )nút này chỉ thêm sản phẩm vào giỏ hàng thoi | còn nút còn lại(mua ngay) nút này vừa đảm nhận việc mua hàng vừa chuyển sang trang cart.html(như shoppe)
// productRender đây là object chứa các thông tin sản phẩm có id trùng với id sản phẩm người dùng nhấn vào mà em đã xử lý ở file renderproduct.js 
// btnAdd là nút khi người dùng điều chỉnh số lượng mua nó sẽ tăng lên 1 khi nhấn vào 
// btnSubtracton này thì ngược lại sẽ giảm 1 khi người dùng click vào
// đây là input để người dùng nhập số lượng sản phẩm
// selection là thẻ chứa các dịa chỉ để người dung lựa chọn 
// shippingPrice nó là thẻ chứa tiền shipping của địa chỉ đó
// qualityJs nó chứa số lượng sản phẩm còn lại cho phép mua

import { products } from "./storeproducts.js"; // đây là object lưu toàn bộ các sản phẩm em có trong kho

const badge = document.querySelector('.header__cart-notice'); // đây là thẻ để hiển thị số lượng sản phẩm người dùng đã mua nó nằm trên cái giỏ hàng
const cartElement = document.querySelector('.header__list-cart'); // đây là thẻ mà khi có class="header__list-cart--no-cart" thì em sẽ css cho nó hiển thị hình không có sản phẩm còn khi có class="header__list-cart--have-cart"
// thì em sẽ cho render ra các sản phẩm đã mua (nó có 2 trạng thái có và ko có sản phẩm tùy thuộc vào class em mặc định là nó không có sản phẩm)

const productsCart = document.querySelector('.header-cart__items'); // đây là thẻ ul mà bên trong thẻ này em sẽ render các sản phẩm mà người dùng đã mua dưới dạng các thẻ li
const alertElement = document.querySelector('.pagination-alert'); // đây là thẻ mà khi người dùng click vào nút mua nó sẽ hiện lên cái thông báo thêm thành công (nó hoạt động như thằng cartElement có class thì hiện ko có thì ẩn)
const idProductpresent = productRender.id; // đây là id của sản phẩm mà người dung click vào
let count = JSON.parse(localStorage.getItem('count')) || 0; // biến này để lưu số lượng sản phẩm mà người dùng đã mua 
// logic dòng này là nếu như người dùng chưa mua sản phẩm thì em sẽ k setItem cho count thì khi gọi nó sẽ trả về null (chắc là null :v) và toán tử || sẽ trả về các giá trị mà nó cho là giá trị true lần đầu gặp khi kiểm tra từ trái qua phải
// ở đây nếu người dùng chưa mua tức cụm này (JSON.parse(localStorage.getItem('count'))) là null (nó dc cho false) và 0 cũng là false lun nó ko thấy true để trả về nên nó sẽ lấy thằng cuối cùng tức là 0
// còn trường hợp có mua thì setItem là số lượng mua thì cụm local... sẽ trả ra là true do là số trừ 0 sẽ convert sang boolean là true toán tử || sẽ trả về true nên nó lấy lun thằng này và gắn vào count và ko  thằng quan tâm thằng sau

let listProduct = JSON.parse(localStorage.getItem('listProduct')) || []; // biến này lưu trữ các sản phẩm mà người dùng đã mua nó là các object được lưu trong mảng
// này hoạt động như thằng bên trên khi có dữ liệu sẽ lấy dữ liệu đó gắn vào listProduct còn ko thì lấy mảng rỗng

let listId = JSON.parse(localStorage.getItem('listId')) || []; // biến này lưu trữ các id mà người dùng mua lưu trữ nó dưới dạng mảng
// này hoạt động như thằng bên trên khi có dữ liệu sẽ lấy dữ liệu đó gắn vào listProduct còn ko thì lấy mảng rỗng






let start = () => {
    renderFisrt();  // hàm này chịu trách nhiệm render ra khi có sản phẩm dc lưu trong localStorage, nếu không có thằng này khi em load lại trang nó mất tiêu hết sản phẩm trong giỏ hàng
    updateQuality(); // như trên và render ra số lượng sản phẩm có trong local và hiển thị trạng thái có sản phẩm
    optionQuality(); // ở hàm này sẽ sữ lý số lượng người dùng muốn mua và trả về số lượng đó
    selectionAddress(); // hàm này xữ lý địa chỉ người dùng chọn sẽ có một mức giá khác nhau
    handleBtn(); // xữ lý khi người dùng nhấn nút mua
}
start(); // chạy chương trình

function renderFisrt() {
    if(listProduct.length != 0) // khi có sản phẩm trong local thì length nó chắc chắn khác 0 nên em kiểm tra như thế 
    {
        render(); // sau đó render ra
    }
}

function handleBtn() {
    buyBtns.forEach(buyBtn => { // khi click vào nut mua thì có 3 việc cần làm
        buyBtn.addEventListener("click", showHaveCart); // thay đổi trạng thái của thẻ ul thành có sản phẩm
        buyBtn.addEventListener("click", showAlert); // hiển thị thông báo mua thành công
        buyBtn.addEventListener("click", backupData); // lưu trữ vào localStore
        buyBtn.addEventListener("click", resetInput); // hiển thị thông báo mua thành công
    })
}


function updateQuality()
{
    if(count) { // nếu count ko trả về null thì thực hiện
        showHaveCart(); // nếu không có dòng này thì thẻ ul sẽ có trạng thái ko sản phẩm tức là nó chỉ hiển thị cái hình ko sản phẩm thoi
        badge.innerHTML = count;
    }
}


function resetInput() {
    enterInput.value = 1; 
}


function optionQuality()
{
    // xữ lý khi người dùng ấn nút thêm
    // vì có một số là chuổi nền em phải chuyển nó về số để trái lỗi so sánh chuỗi và số
    btnAdd.onclick = function() { // tăng thêm 1 tăng đến số lượng tối đa là số lượng sản phẩm còn lại
        if(!(listId.includes(idProductpresent)) || listProduct.length === 0) {
            if(parseInt(enterInput.value) < parseInt(qualityJs)) // ở đây em so sánh giá trị input phải bé hơn số lượng tồn thì cho tăng không để bằng dc vì khi để bằng nó xuống sẽ tăng thêm 1 và nó sẽ vượt mức số lượng sản phẩm được phép mua 
            {
                let number = parseInt(enterInput.value) + 1;
                enterInput.value = number; 
            }
            else {
                limitQuality.style.display = 'block';
            }
        }
        else {
            listProduct.forEach(element => {
                if(element.id === idProductpresent) {
                    let qlt = element.quality + Number(enterInput.value);
                    if(qlt < Number(qualityJs)) {
                        let number = parseInt(enterInput.value) + 1;
                        enterInput.value = number;
                    }
                    else {
                        let number = parseInt(enterInput.value);
                        enterInput.value = number; 
                        limitQuality.style.display = 'block';
                    }
                }
            })
        }
    };

    enterInput.oninput = function() { // xữ lý input khi người dùng nhập
        if(Number(enterInput.value) > Number(qualityJs)) {  // quá số lượng sẽ cho nó bằng với số lượng tối thiểu
            enterInput.value = qualityJs;
        }
    }

    btnSubtraction.onclick = function() { // giảm 1 đơn vị giảm tối da là 1
        if(enterInput.value == 1) { // khi giá trị nó là 1 sẽ return lun ko giảm nữa
            return;
        }
        else {
            if(limitQuality.style.display = 'block') // nếu thông báo đang hiện sẽ tắt đi
            {
                limitQuality.style.display = 'none';
            }
            let number = parseInt(enterInput.value) - 1;
            enterInput.value = number;
        }
    };
    return parseInt(enterInput.value);
}


function getOptionQuality() {
    // hàm này là để lấy số lượng sản phẩm mà người dùng muốn mua
    return optionQuality();
}


function selectionAddress() {
    selection.onchange = function() { // khi thay đổi địa chỉ thì giá sẽ thay dổi theo
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
    }
}




// xóa class no-cart và thêm class have-cart
function showHaveCart() {
    if(cartElement.classList.contains('header__list-cart--no-cart')) // chứa class này thì 
    {
        cartElement.classList.remove('header__list-cart--no-cart'); // xóa 
        cartElement.classList.add('header__list-cart--have-carts'); // và thêm class này để hiển thị trạng thái có sản phẩm
    }
}


// show thông báo đã mua hàng
function showAlert() {
    alertElement.classList.add('pagination-alert--show');
    setTimeout(function() {
        alertElement.classList.remove('pagination-alert--show');
    }, 500)
}


// Xữ lý html

// cập nhật lại số lượng sản phẩm đã mua
function backupData() 
{
    // khi trong mảng listProduct trong lần đầu chạy vì ko có giá trị trong localStorage nó sẽ lấy mảng rỗng làm giá trị em đã nêu bên trên
    // nên vào lần đầu chạy nó sẽ vào con if này
    if(listProduct.length === 0) {
        count++; // tăng số lượng sản phẩm lên 1
        let objProducts = products.filter(product => {
            return product.id === idProductpresent;
        }); // dòng này sẽ trả về 1 mảng mà nó có id bằng với id người dùng click vào, 
        //lúc đó em chưa nghĩ ra nhưng lúc em viếc cái này em nghĩ sẽ có cách tốt hơn đễ làm ko cần dùng thế này

        let qualityObj = {quality: getOptionQuality()}; // gọi hàm này để lấy ra số lượng người dùng muốn mua và co vào object

        let objProductsRender;
        objProducts.forEach(obj => {// em lập thằng vừa nhập dược ở filter thật ra nó lức nào vũng chỉ có một sản phẩm thoi logic này dư thừa qua mà lỡ rồi em lười sửa quá :)) mà dùng thằng find ok hơn nhiều
            objProductsRender = Object.assign(obj, qualityObj); // đây chủ yêu là em muốn thêm số lượng sản phẩm vào trong object thông tin sản phẩm thoi em dùng thằng assin để copy các giá trị trong 2 objec vào objPrdocutsRender
        });

        listProduct.push(objProductsRender); // thêm cái oject vừa sữ lý vào mảng rỗng đã khai báo lúc đầu
        localStorage.setItem('count', JSON.stringify(count)); // vì localStore chỉ lưu dc chuổi nên em dùng stringify và set số lượng vừa được tăng thêm vào local
        localStorage.setItem('listProduct', JSON.stringify(listProduct)); // tương tự với listProduct
        listId.push(idProductpresent); // em làm thêm 1 mảng id để xữ lý bên trang cart.html nữa
        localStorage.setItem('listId', JSON.stringify(listId)); // lưu lên local
        badge.innerHTML = count; // in só lượng sản phẩm ra
        render(); // và gọi thằng renden để render những sản phẩm có trong listProduct
    }
    else {
        if(listId.includes(idProductpresent)) { // ở đây em kiểm tra xem id của thằng sản phẩm hiện tại có nằm trong listID không
            listProduct.forEach(product => { // sau đó em duyệt lại list lưu sản phẩm trên local
                if(product.id == idProductpresent) { // ở dây nếu sản phẩm trong list trên local mà trùng với cái id của thằng sản phẩm hiện tại thì tức là người dùng ấn mua 2 lần 1 sản phẩm
                    // nên lúc này count(số lượng nằm bên ngoài) của em sẽ k tăng nữa mà số lượng sản phẩm trong cart sẽ tăng
                    let qlt = product.quality + getOptionQuality();
                    if(qlt <= Number(qualityJs)) { //
                        product.quality += getOptionQuality(); // ở đây em gọi một lần nữa hàm này để lấy về số lượng người dùng dã mua thêm và cộng nó với số lượng cũ
                        localStorage.setItem('listProduct', JSON.stringify(listProduct)); // lưu lại dữ liệu đã set
                    }
                    else {
                        alert(`Bạn đã có ${product.quality} sản phẩm trong giỏ hàng. Không thể thêm số lượng đã chọn vào giỏ hàng vì sẽ vượt quá giới hạn mua hàng của bạn.`)
                    }
                }
            });
            render();// sau đó em render lại
        }
        else { // trường hợp này nó không nằm trong cái listId em lưu tức là đây là sản phẩm người dùng mua lần đầu 

            // các dòng dưới cũng giống như trên if đầu tiên
            count++; 
            let objProducts = products.filter(product => {
                return product.id === idProductpresent;
            });

            let qualityObj = {quality: getOptionQuality()};

            let objProductsRender;
            objProducts.forEach(obj => {
                objProductsRender = Object.assign(obj, qualityObj);
            })

            listProduct.push(objProductsRender);
            localStorage.setItem('count', JSON.stringify(count));
            localStorage.setItem('listProduct', JSON.stringify(listProduct));
            listId.push(idProductpresent);
            localStorage.setItem('listId', JSON.stringify(listId));
            badge.innerHTML = count;
            render();
        }
    }
}


// // xữ lý đoạn html sẽ render
// // render ra view
function render()
{
    // có sự không đồng nhất giữa thẻ img và background-image do lúc trước code html css nên k để ý 
    // em dùng 2 hàm replace để sửa lại
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
    })
    productsCart.innerHTML = htmls.join('');
}

