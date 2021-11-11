import {listImgReview, imgRepresent} from './renderproducts.js';
// listImgReview là các img con được lưu dưới dạng mảng
// imgRepresent là hình lớn nằm trên các hình nhỏ

listImgReview.forEach(element => {
    element.addEventListener("mouseover", function handleBorder() { // lặp qua toàn bộ thẻ img con để lắng nghe sự kiện khi người dùng di chuột vào 
        element.style.border = '2px solid #D1011A'; // sơn cho nó cái border màu cam
    });

    element.addEventListener("mouseover", function handleLoadImg() { // lặp qua toàn bộ thẻ img con để lắng nghe sự kiện khi người dùng di chuột vào 
        imgRepresent.style.backgroundImage = element.lastElementChild.style.backgroundImage; // chuển hình ảnh lớn thành hình ảnh mà người dùng di chột vào
    });

    element.addEventListener("mouseout", function handleCancelBorder() { // lặp qua và lắng nghe sự kiện khi người dùng di chuột ra
        element.style.border = '1px solid #F2F2F2'; // sơn lại border như cũ
    });
})
