
const container = document.querySelector('.home-products__contain'); // thẻ chứa toàn bộ sản phẩm
const products = Array.from(container.children); // toàn bộ sản phẩm
const btnHigh = document.querySelector('.high'); // nút sắp xếp từ thấp đến cao
const btnLow = document.querySelector('.low'); // nút sắp xếp từ cao đến thấp



for(let product of products) { // lặp qua các element sản phẩm
    let elmentPrice = product.querySelector('.home-product__price-new'); // tìm element chứa giá sản phẩm
    let a = elmentPrice.textContent; // lấy giá của sản phẩm
    let end = a.length - 1; // độ dài cuối chuỗi của đoạn text chứa giá trừ 1
    let price = Number(a.substr(0, end)); // lấy độ dài của chuồi bỏ phần tử cuối vì nó là chữ kiểu 300000đ
    product.setAttribute('data-price', price); // set giá cho attribute
}


btnHigh.onclick = function() { // lắng nghe sự kiện clicj của nút
    sortHigh(container, products); // gọi hàm sắp xếp đối số đầu là container là elemen chứa các sản phẩm dùng để render lại, mảng chứa các elemen sản phẩm
};
btnLow.onclick = function() {
    sortLow(container, products); // như trên nhưng sắp xếp từ cao xuống thấp
};

function sortHigh(ctn, pd) {
    let sortElement;
    sortElement = pd.sort((a, b) => { // sắp xếp tăng dần từ attribute đã set lúc nãy 
        const ax = a.getAttribute('data-price');
        const bx = b.getAttribute('data-price');

        return ax - bx;
    })

    while(ctn.firstChild) {
        ctn.removeChild(ctn.firstChild);
    }

    ctn.append(...sortElement);
}

// tưng tự trên
function sortLow(ctn, pd) {
    let sortElement;
    sortElement = pd.sort((a, b) => {
        const ax = a.getAttribute('data-price');
        const bx = b.getAttribute('data-price');

        return bx - ax;
    })

    while(ctn.firstChild) {
        ctn.removeChild(ctn.firstChild);
    }

    ctn.append(...sortElement);
}


