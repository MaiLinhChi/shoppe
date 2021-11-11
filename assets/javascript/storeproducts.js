
/*file này được xem như nơi lưu trữ dữ liệu của em vì em ko biết fake API nên làm đại như z :))*/
export const products = [
    {
        id: 1, // id của sản phẩm
        image: 'url(https://cf.shopee.vn/file/ea6f2d2c866212588de8cf90b5221141)', // đây là cái hình bự của sản phẩm
        list_img: ['url(https://cf.shopee.vn/file/ea6f2d2c866212588de8cf90b5221141)', 'url(https://cf.shopee.vn/file/a1562dac4316962dea230288ecdf5ce1)'], // đây là các hình con để khi người dùng di chuột qua em sẽ đưa nó lên làm hình bự 
        name: "SÁCH - Combo 4MK - Cái chết thứ năm - Đứa trẻ thứ sáu (Bộ 3 cuốn)", // tên sản phẩm
        price_old: '506.100', // giá cữ
        price_new: '461.620', // giá khuyến mãi
        price_sale: "23% GIẢM", // phần trâm giảm
        rest: 5, // sản phẩm còn lại
        sold: 7, // sản phẩm đã bán
        liked: 73, // lượt tim cho sản phẩm
        imageShop: 'src="https://cf.shopee.vn/file/d9233bd0abcb2b8f0c9f6335ca5e7099_tn"', // hình ảnh của shop cung cấp sản phẩm
        nameShop: "Linh Nguyễn", // tên shop
        online: 'Online 10 Phút Trước', // thời gian online
        // 7 thuộc tính dưới là các thông tin cơ bản về phản hòi địa chỉ kho vv...
        evaluate: '71,4k', 
        productShops: '6,4k',
        feedback: '7%',
        join: '7 năm trước',
        follow: '34k',
        tradeMark: 'J.D. Barker',
        sentFrom: 'Quận Thanh Xuân, Hà Nội',

        // ở đây là các sản phẩm có liên quan em bỏ vào tí render ra view nhin cho đẹp
        listProductSell: [
            {
                img: "url('https://cf.shopee.vn/file/cbd4eae070a74af5970228deea94cdb4_tn')",
                name: "Sách - Nhà Đầu Tư Thông Minh",
                price: '132.000'
            },

            {
                img: "url(https://cf.shopee.vn/file/7547d04d7cdc6522864a06850f555672_tn)",
                name: "Sách - How The Body Works - Hiểu Hết Về Cơ Thể",
                price: '231.000'
            },

            {
                img: "url(https://cf.shopee.vn/file/38ece30a6866cb0cdacf7a3617c3762f_tn)",
                name: "Sách - Người Nam Châm - Bí ẩn của luận hấp dẫn",
                price: '132.000'
            },
            
            {
                img: "url(https://cf.shopee.vn/file/23d61d1220ed6c5f4740ec044cceb1d7_tn)",
                name: "Sách - Tiểu thuyết, trinh thám tâm lý - Đếm ngược",
                price: '97.300'
            }
        ],

        // mô tả sản phẩm
        descripton: `SÁCH - 4MK - Cái chết thứ năm - Đứa trẻ thứ sáu <br>
        4MK - cuốn sách giành giải Audie năm 2018 cho thể loại tiểu thuyết kinh dị, gay cấn. <br>
        Tác giả J.D. Barker  <br>
        Dịch giả : Quách Cẩm Phương <br>
        Kích thước : 16x24 <br>
        NXB Văn Học <br>
        Năm xuất bản : 2019 <br>
        Số trang : 504 <br>
        Khối lượng : 600 grams <br>
        "Nạn nhân đầu tiên, Calli Tremell... Hai ngày sau khi bị bắt cóc, gia đình Tremell nhận được tải con gái mình trong hòm thư. Hai ngày sau đó, họ nhận được đôi mắt của cô. Hai ngày tiếp theo, chiếc lưỡi của cô được chuyển đến. Thi thể của cô gái được tìm thấy tại công viên Bedford... Bàn tay cô nắm chặt một mẩu giấy nhỏ ghi KHÔNG LÀM ĐIỀU ÁC..." <br>
        Suốt nửa thập kỷ, 4MK đã khủng bố những nạn nhân của hắn và khiến thanh tra Sam Porter đau đầu. Hắn đã đùa bỡn với họ. Không bao giờ để lại một manh mối nào. Cho đến khi một manh mối cuối cùng xuất hiện, và Porter nhận ra mình đang đối đầu với một kẻ loạn thần kinh nhân cách có chỉ số IQ của một thiên tài. <br>
        ---- <br>
        Một số lời khen ngợi dành cho 4MK: <br>
        "4MK có phần mở đầu ấn tượng nhất mà tôi đọc được trong năm nay. Cuốn sách trinh thám này sẽ không làm bạn thất vọng." - James Patterson, nhà văn trinh thám nổi tiếng nhất nước Mỹ. <br>
        "Đây là một trong số ít tác phẩm trinh thám về kẻ giết người hàng loạt có thể so sánh với kiệt tác Rồng Đỏ của Thomas Harrison." - Daily Mail. <br>
        "Ớn lạnh đến từng trang sách." - Kelly Amstrong, tác giả tiểu thuyết kỳ ảo, gay cấn ăn khách. <br>
        "Xuất sắc. Phức tạp. Bệnh hoạn. Tên sát nhân 4MK thực sự là một nhân vật hấp dẫn." - Marc Webb, đạo diễn của The Amazing Spiderman <br>
        -------------------------------------------------------------------------------------------------- <br>
        Cái chết thứ năm <br>
        Tác giả J.D. Barker   <br>
        Dịch giả : Matryoshka <br>
        NXB Thanh Niên <br>
        Kích thước : 16x24cm <br>
        Năm xuất bản : 2020 <br>
        Số trang : 636 <br>
         Hai nữ sinh trung học liên tiếp mất tích. Xác của Ella Reynolds được phát hiện bên dưới mặt nước đóng băng ở công viên Jackson, còn xác của Lili Davies được tìm thấy trong phòng tranh nơi cô bé làm thêm sau mỗi buổi học. Không lâu sau đó, đến lượt hai người cha của các cô bị giết hại. Cảnh sát gần như không thể tìm ra điểm chung nào giữa các nạn nhân <br>
        Trong khi các thanh tra của Sở cảnh sát Chicago chạy đua với thời gian để đưa tên sát nhân “mới nổi” ra ánh sáng thì Thanh tra Sam Porter bí mật tiếp tục săn lùng 4MK. Với hành trang là cuốn nhật ký của Anson Bishop và một bức ảnh nhòe mờ, Porter chạy đôn chạy đáo khắp các đường phố của New Orleans và tình cờ bước vào một thế giới còn tối tăm hơn những gì anh có thể tưởng tượng, nơi anh nhanh chóng nhận ra rằng thứ duy nhất đáng sợ hơn tâm trí của một kẻ giết người hàng loạt là tâm trí của người mẹ đã sinh ra hắn. <br>
        -------------------------------------------------------------------------------------------------------------- <br>
        Đứa trẻ thứ sáu <br>
        Tác giả J.D. Barker   <br>
        Dịch giả : Nguyễn Quang Huy <br>
        NXB Thanh Niên <br>
        Kích thước : 16x24cm
        Năm xuất bản : 2020
        Số trang : 620
         “Cha hãy tha thứ cho con” là dòng chữ được tìm thấy viết trên những tấm bìa các tông gần xác các nạn nhân bị giết theo kiểu 4MK được phát hiện cách nhau vài chục phút ở cả Chicago và Nam Carolina, kết nối họ với cùng một kẻ giết Người. Các vụ giết người rõ ràng có liên quan chặt chẽ nhưng lại tách biệt bởi khoảng cách về không gian không thể nào hiểu nổi.
        Cùng lúc đó, khắp nước Mỹ rúng động vì thông tin Anson Bishop sẽ làm phát tán virus gây bệnh SARS. Sở Cảnh sát Chicago và FBI rơi vào tình trạng hỗn độn – một bệnh viện bị phong tỏa, dịch bệnh có nguy cơ bùng phát.
        Anson Bishop, nghi phạm chính trong các vụ giết người của 4MK, đã tiết lộ một câu chuyện hoàn toàn bất ngờ, một câu chuyện không chỉ làm đảo lộn những kết quả điều tra cũ mà sữ còn làm thay đổi cuộc sống của tất cả những người có liên quan đến nó. Với sự căng thẳng không ngớt và sự hồi hộp làm căng mạch đập, quá khứ được đưa ra ánh sáng và đi đến hồi kết ở tốc độ chóng mặt khi sự thật đằng sau động cơ của kẻ giết người 4MK cuối cùng cũng được làm rõ.
        “Phần ba của bộ truyện đã thắt lại tất cả những nút thắt còn lỏng lẻo một cách tuyệt hảo, đây quả thực là một bộ ba tuyệt vời với đủ những cú twist để làm hài lòng ngay cả Sherlock Holmes!”`
    },
    // các sản phẩm còn lại tương tự

    {
        id: 2,
        image: 'url(https://cf.shopee.vn/file/8a492c44ec190d703ceaa5eb8609a3cb)',
        list_img: ['url(https://cf.shopee.vn/file/8a492c44ec190d703ceaa5eb8609a3cb)', 'url(https://cf.shopee.vn/file/cf915c229bf3027a62dd889f9fb2e708_tn)', 'url(https://cf.shopee.vn/file/fa7e6f647087448b74ba949e4e8e6196_tn)', 'url(https://cf.shopee.vn/file/55686a3561df382b0dd72b0fbb3238b0_tn)'],
        name: "Sách - Sự im lặng của bầy cừu (Nhã Nam)",
        price_old: '115.100',
        price_new: '85.550',
        price_sale: "23% GIẢM",
        rest: 28,
        sold: 196,
        liked: 105,
        imageShop: 'src="https://cf.shopee.vn/file/69417724ed78f1c95ab34b7d0f0c5322_tn"',
        nameShop: "Nhã Nam",
        online: 'Online 4 Phút Trước',
        evaluate: '9k',
        productShops: '1k',
        feedback: '7%',
        join: '8 tháng trước',
        follow: '64,7k',
        tradeMark: 'Thomas Harris',
        sentFrom: 'Quận Phú Nhuận, TP. Hồ Chí Minh',
        listProductSell: [
            {
                img: "url(https://cf.shopee.vn/file/c671a4e3209153cd65fb7e1c22eb55b3_tn)",
                name: "Sách - Hiểu biết hết về khoa học",
                price: '264.000'
            },

            {
                img: "url('https://cf.shopee.vn/file/cbd4eae070a74af5970228deea94cdb4_tn')",
                name: "Sách - Nhà Đầu Tư Thông Minh",
                price: '132.000'
            },

            {
                img: "url(https://cf.shopee.vn/file/ceb1d5903488a80013c5e76833a97560_tn)",
                name: "Sách - Sách bước chân chậm lại giữa thế gian vội vã",
                price: '68.000'
            },
        ],
        descripton: `Công ty phát hành: Nhã Nam  <br>
        Nhà xuất bản: Nhà Xuất Bản Hội Nhà Văn <br>
        Tác giả: Thomas Harris  <br>
        Ngày xuất bản: 09-2017  <br>
        Kích thước :15 x 24 cm  <br>
        Loại bìa: Bìa mềm  <br>
        Số trang: 437  <br>
        ======================================= <br> <br>
        
        ----GIỚI THIỆU SÁCH ---- <br> <br>
        
        Sự Im Lặng Của Bầy Cừu (Tái Bản) kể về vụ án giết người hàng loạt xảy ra nhưng không để lại dấu vết. Điều kỳ lạ là Lecter - một bác sĩ tâm lý bị tâm thần đang điều trị tại Dưỡng Trí Viện biết rất rõ về hành vi của kẻ sát nhân nhưng chỉ im lặng. Cho đến khi con gái của thượng nghị sĩ bị bắt cóc thì cuộc đối đầu của nữ nhân viên thực tập FBI và vị bác sĩ tâm thần đã đến cực điểm. Cuối cùng tất cả cũng đều lộ diên, thủ phạm là một tên có nhân cách bệnh hoạn, một kẻ tâm thần rối loạn cựu kỳ nguy hiểm…  <br>
        
        Những cuộc phỏng vấn ở xà lim với kẻ ăn thịt người ham thích trò đùa trí tuệ, những tiết lộ nửa chừng hắn chỉ dành cho kẻ nào thông minh, những cái nhìn xuyên thấu thân phận và suy tư của cô mà đôi khi cô muốn lảng tránh... Clarice Starling đã dấn thân vào cuộc điều tra án giết người lột da hàng loạt như thế, để rồi trong tiếng bức bối của chiếc đồng hồ đếm ngược về cái chết, cô phải vật lộn để chấm dứt tiếng kêu bao lâu nay vẫn đeo đẳng giấc mơ mình: tiếng kêu của bầy cừu sắp bị đem đi giết thịt. <br> <br>
        
        ======================================= <br>
        CAM KẾT của nhà sách <br>
        1.	Cung cấp các sách chính hãng, đúng nguồn gốc (nói KHÔNG với hàng giả, hàng nhái, hàng kém chất lượng) <br>
        2.	Sách mới 100%, đóng gói chuyên nghiệp, cẩn thận, xử lý đơn hàng nhanh <br>
        3.	Phục vụ khách hàng nhiệt tình, chu đáo với kinh nghiệm nhiều năm trong lĩnh vực bán sách <br>
        4.	Mọi thắc mắc xin liên hệ với shop qua Shopee <br>
        ĐỔI TRẢ  <br>
         Điều kiện áp dụng (trong vòng 07 ngày kể từ khi nhận sản phẩm) nếu:  <br>
        -	Hàng hoá bị lỗi hoặc hư hỏng do vận chuyển hoặc do nhà sản xuất <br>
        -	Không đúng sách mà khách hàng đặt  <br>
        -	Không đủ số lượng, không đủ bộ như trong đơn hàng  <br> <br>
        
        Trường hợp không đủ điều kiện áp dụng chính sách: <br>
        -	Quá 07 ngày kể từ khi Quý khách nhận hàng  <br>
        -	Gửi lại hàng không đúng mẫu mã, không phải sản phẩm của shop <br>
        -	Lý do chủ quan như không thích, không hợp, đặt nhầm mã, nhầm sản phẩm ... <br>
        - Không đủ số lượng, không đủ bộ như trong đơn hàng `
    },

    {
        id: 3,
        image: 'url(https://cf.shopee.vn/file/d6a2b521a6094094e9251a9bbb1b6448_tn)',
        list_img: ['url(https://cf.shopee.vn/file/d6a2b521a6094094e9251a9bbb1b6448_tn)', 'url(https://cf.shopee.vn/file/e153ee46e37f46ec2bb9cbc007173ae1_tn)', 'url(https://cf.shopee.vn/file/b3bc26ec25557993e1a676446380b44c_tn)', 'url(https://cf.shopee.vn/file/93597478da738e2d33687f8831ef5e59_tn)', 'url(https://cf.shopee.vn/file/15e98884b3d0e1ef3e630c1b016a28a0_tn)'],
        name: "Sách - Goth - Những Kẻ Hắc Ám (Tái Bản 2019)",
        price_old: '108.300',
        price_new: '83.160',
        price_sale: "20% GIẢM",
        rest: 2,
        sold: 12,
        liked: 7,
        imageShop: 'src="https://cf.shopee.vn/file/e9b2282e025fb93c482c78659d1389b5_tn"',
        nameShop: "penguinbooks888",
        online: 'Online 2 Phút Trước',
        evaluate: '27,7k',
        productShops: '6,6k',
        feedback: '73%',
        join: '29 tháng trước',
        follow: '24,7k',
        tradeMark: 'Otsuichi',
        sentFrom: 'Quận Thanh Xuân, Hà Nội',
        listProductSell: [
            {
                img: 'url(https://cf.shopee.vn/file/38ece30a6866cb0cdacf7a3617c3762f_tn)',
                name: "Sách - Người Nam Châm - Bí ẩn luật hấp dẫn",
                price: '48,750'
            },

            {
                img: 'url(https://cf.shopee.vn/file/cbd4eae070a74af5970228deea94cdb4_tn)',
                name: "Sách - Nhà Đầu Tư Thông Minh",
                price: '132.000'
            },

            {
                img: 'url(https://cf.shopee.vn/file/2e21437f3bcedc7a48ca069b268f79e1_tn)',
                name: "Sách - Tuổi trẻ đang bao nhiêu",
                price: '69.300'
            },
        ],
        descripton: `Công ty phát hành: Nhã Nam <br>
        Nhà xuất bản: NXB Hà Nội <br>
        Tác giả: Otsuichi <br>
        Loại bìa: Bìa Mềm <br>
        Số trang: 358 <br>
        Năm xuất bản: 2019 <br> <br>
        
        Goth - Những Kẻ Hắc Ám (Tái Bản 2019) Một cuốn sổ ghi chép quá trình giết người.Chiếc tủ lạnh chứa đầy bàn tay. Lũ chó bị bắt cóc.Vụ treo cổ kỳ quái.Đứa trẻ bị chôn sống. Cuốn băng thu âm giọng nói của người chết… Hai học sinh cấp ba cùng nhau điều tra những vụ án kỳ lạ ở địa phương. Nhưng thay vì cố gắng ngăn chặn tội ác, nỗi ám ảnh với cái chết và sự giết chóc đã dẫn dắt chúng tiến vào bóng tối điên cuồng, nơi những cơn ác mộng trở thành sự thực. Không chỉ là một cuốn tiểu thuyết kinh dị rùng rợn, GOTH còn ẩn chứa nỗi buồn và những chiêm nghiệm về cuộc sống, về bản chất con người và sự giác ngộ. Tác phẩm đã mang về cho Otsuichi giải thưởng Honkaku Mystery, được chuyển thể thành manga và phim điện ảnh.`
    },

    {
        id: 4,
        image: 'url(https://cf.shopee.vn/file/18cf4b8638123d9c3032b2528ec8e5ce)',
        list_img: ['url(https://cf.shopee.vn/file/18cf4b8638123d9c3032b2528ec8e5ce)', 'url(https://cf.shopee.vn/file/f967eeb24962f07572802b487bda7685_tn)', 'url(https://cf.shopee.vn/file/ad3f8aaee2291fde6d6fda27139fda45_tn)', 'url(https://cf.shopee.vn/file/9552f395bb0fac46f580f04a6168cea0_tn)', 'url(https://cf.shopee.vn/file/b6982e2208466e95cc22981738cf9666_tn)'],
        name: "Sách - Phía sau nghi can X (Nhã Nam)",
        price_old: '109.100',
        price_new: '83.400',
        price_sale: "23% GIẢM",
        rest: 7,
        sold: 305,
        liked: 182,
        imageShop: 'src="https://cf.shopee.vn/file/e9b2282e025fb93c482c78659d1389b5_tn"',
        nameShop: "penguinbooks888",
        online: 'Online 15 Phút Trước',
        evaluate: '27,7k',
        productShops: '6,6k',
        feedback: '73%',
        join: '29 tháng trước',
        follow: '24,7k',
        tradeMark: 'Keigo Higashino',
        sentFrom: 'Quận Thanh Xuân, Hà Nội',
        listProductSell: [
            {
                img: "url('https://cf.shopee.vn/file/cbd4eae070a74af5970228deea94cdb4_tn')",
                name: "Sách - Nhà Đầu Tư Thông Minh",
                price: '132.000'
            },

            {
                img: "url(https://cf.shopee.vn/file/7547d04d7cdc6522864a06850f555672_tn)",
                name: "Sách - How The Body Works - Hiểu Hết Về Cơ Thể",
                price: '231.000'
            },

            {
                img: "url(https://cf.shopee.vn/file/38ece30a6866cb0cdacf7a3617c3762f_tn)",
                name: "Sách - Người Nam Châm - Bí ẩn của luận hấp dẫn",
                price: '132.000'
            },
            
            {
                img: "url(https://cf.shopee.vn/file/23d61d1220ed6c5f4740ec044cceb1d7_tn)",
                name: "Sách - Tiểu thuyết, trinh thám tâm lý - Đếm ngược",
                price: '97.300'
            }
        ],
        descripton: `Công ty phát hành Nhã Nam <br>
        Tác giả: Keigo Higashino  <br>
        Ngày xuất bản: 06 - 2019  <br>
        Kích thước: 14 x 20.5 cm  <br>
        Nhà xuất bản: Nhà Xuất Bản Hội Nhà Văn  <br>
        Dịch Giả: Trương Thùy Lan  <br>
        Loại bìa Bìa mềm  <br>
        Số trang: 392  <br>
        ======================================= <br>
        ----GIỚI THIỆU SÁCH ----- <br> <br>
        
        Phía Sau Nghi Can X  <br>
        Khi nhấn chuông cửa nhà nghi can chính của một vụ án mới, điều tra viên Kusanagi không biết rằng anh sắp phải đương đầu với một thiên tài ẩn dật. Kusanagi càng không thể ngờ rằng, chỉ một câu nói vô thưởng vô phạt của anh đã kéo người bạn thân, Manabu Yukawa, một phó giáo sư vật lý tài năng, vào vụ án. Và điều làm sững sờ nhất, đó là vụ án kia chẳng qua cũng chỉ như một bài toán cấp ba đơn giản, tuy nhiên ấn số X khi được phơi bày ra lại không đem đến hạnh phúc cho bất cứ ai…  <br> <br>
        
        Với một giọng văn tỉnh táo và dung dị, Higashino Keigo đã đem đến cho độc giả hơn cả một cuốn tiểu thuyết trinh thám. Mô tả tội ác không phải điều hấp dẫn nhất ở đây, mà còn là những giằng xé nội tâm thầm kín, những nhân vật bình dị, và sự quan tâm sâu sa tới con người. Tác phẩm đã đem lại cho Higashino Keigo Giải Naoki lần thứ 134, một giải thưởng văn học lâu đời sánh ngang giải Akutagawa tại Nhật. <br>
        
        ======================================= <br>
        CAM KẾT của nhà sách <br>
        1.	Cung cấp các sách chính hãng, đúng nguồn gốc (nói KHÔNG với hàng giả, hàng nhái, hàng kém chất lượng) <br>
        2.	Sách mới 100%, đóng gói chuyên nghiệp, cẩn thận, xử lý đơn hàng nhanh <br>
        3.	Phục vụ khách hàng nhiệt tình, chu đáo với kinh nghiệm nhiều năm trong lĩnh vực bán sách <br>
        4.	Mọi thắc mắc xin liên hệ với shop qua Shopee <br>
        ĐỔI TRẢ  <br>
         Điều kiện áp dụng (trong vòng 07 ngày kể từ khi nhận sản phẩm) nếu:  <br>
        -	Hàng hoá bị lỗi hoặc hư hỏng do vận chuyển hoặc do nhà sản xuất <br>
        -	Không đúng sách mà khách hàng đặt  <br>
        -	Không đủ số lượng, không đủ bộ như trong đơn hàng  <br> <br>
        
        Trường hợp không đủ điều kiện áp dụng chính sách: <br>
        -	Quá 07 ngày kể từ khi Quý khách nhận hàng  <br>
        -	Gửi lại hàng không đúng mẫu mã, không phải sản phẩm của shop <br>
        -	Lý do chủ quan như không thích, không hợp, đặt nhầm mã, nhầm sản phẩm ...
        `
    },

    {
        id: 5,
        image: 'url(https://cf.shopee.vn/file/1ceb2237ad026be180d1a2fdfe447926_tn)',
        list_img: ['url(https://cf.shopee.vn/file/1ceb2237ad026be180d1a2fdfe447926_tn)', 'url(https://cf.shopee.vn/file/dafb862261cc6b5ba0e7e9a8a7d0004e_tn)', 'url(https://cf.shopee.vn/file/01d948f00a5ca1c02a090a3dea041590_tn)', 'url(https://cf.shopee.vn/file/66107ce14f4896143f95c4b99dff4abf_tn)', 'url(https://cf.shopee.vn/file/d9ffbb1fb641cd69b1785f1ca2e165e9_tn)'],
        name: "Sách - Boxset Arsène Lupin - Siêu trộm hào hoa (Trọn bộ 5 cuốn)",
        price_old: '467.000',
        price_new: '326.500',
        price_sale: "30% GIẢM",
        rest: 4,
        sold: 166,
        liked: 109,
        imageShop: 'src="https://cf.shopee.vn/file/cf06d73df6c09138370bb0abd217c7fc_tn"',
        nameShop: "minhmonbook",
        online: 'Online 11 Phút Trước',
        evaluate: '17k',
        productShops: '685',
        feedback: '52%',
        join: '28 tháng trước',
        follow: '7k',
        tradeMark: 'Maurice Leblanc',
        sentFrom: 'Quận Long Biên, Hà Nội',
        listProductSell: [
            {
                img: "url(https://cf.shopee.vn/file/b7ccc71ffe1c6fa429fe9432a4a32342_tn)",
                name: "Truyện tranh - Thám tử lừng danh conan",
                price: '1.950.000'
            },

            {
                img: "url('https://cf.shopee.vn/file/cbd4eae070a74af5970228deea94cdb4_tn')",
                name: "Sách - Nhà Đầu Tư Thông Minh",
                price: '132.000'
            },

            {
                img: "url(https://cf.shopee.vn/file/a30ebf41f3b7082956a9d09603461ed3_tn)",
                name: "Truyện tranh - One Piece",
                price: '1.855.000'
            },
            
            {
                img: "url(https://cf.shopee.vn/file/23d61d1220ed6c5f4740ec044cceb1d7_tn)",
                name: "Sách - Tiểu thuyết, trinh thám tâm lý - Đếm ngược",
                price: '97.300'
            }
        ],
        descripton: `Mã sản phẩm: 8935212350471 <br>
        Tác giả : Maurice Leblanc/Francis de Croisset/Edgar Jepson <br>
        Dịch giả : Đinh Minh Hương <br>
        NXB Văn Học	 <br>
        Kích thước : 14.5x20.5cm <br>
        Năm xuất bản : 2020 <br>
        Số trang : 356 <br>
        Khối lượng : 1500 grams  <br> <br>
        
        Siêu trộm hào hoa, “Hoàng tử đạo chích”, “Robin Hood của giới tội phạm”, đó là những mỹ danh được dành tặng cho một trong những nhân vật tiếng tăm nhất của dòng văn học trinh thám phiêu lưu nước Pháp: Arsène Lupin. Ra mắt độc giả vào năm 1905 dưới dạng truyện ngắn dài kỳ trên tạp chí Je sais tout, gã đạo chích thông minh, quyến rũ nhưng không kém phần hài hước và láu cá ấy đã khiến Sở Cảnh sát khốn khổ vò đầu bứt tai, cánh nhà giàu ngày đêm lo ngay ngáy vì mất của, còn công chúng thì không ngừng tán thưởng và hồi hộp dõi theo những màn trình diễn đầy hấp dẫn và không thể đoán trước kết cục.  <br> <br>
        
        Với giọng văn phóng khoáng đầy lôi cuốn kết hợp với bút pháp trào lộng đặc trưng, bộ sách Arsène Lupin, siêu trộm hào hoa sẽ tái hiện lại không chỉ những vụ trộm cao tay mà còn cả những lần hành hiệp trượng nghĩa đáng nhớ của gã siêu đạo chích, qua đó, độc giả sẽ có được cái nhìn rõ hơn về thân phận, tính cách, tài năng của nhân vật đặc biệt này. <br> <br>
        
        Mời các bạn đón đọc! <br> <br>
        
        ------- <br> <br>
        
        MAURICE LEBLANC <br> <br>
        
        Maurice Leblanc sinh năm 1864 tại Rouen, Pháp. Tên tuổi của ông thực sự được biết tới và để lại dấu ấn sâu đậm trong lòng độc giả suốt hơn một thế kỷ qua nhờ series truyện dài kỳ cho tạp chí Je sais tout về nhân vật siêu đạo chích Arsène Lupin. Nhờ những cống hiến không ngừng nghỉ của mình, Leblanc đã được trao tặng Huân chương Bắc Đẩu bội tinh. Ông mất năm 1941 tại Perpignan. <br>
        
        Vụ chơi khăm ngài triệu phú vốn là một vở kịch do Maurice Leblanc và Francis de Croisset đồng sáng tác, sau được Edgar Jepson viết lại thành tiểu thuyết bằng tiếng Anh.`        
    },

    {
        id: 6,
        image: 'url(https://cf.shopee.vn/file/da91a92ca754368c7907ed8dae84d12e)',
        list_img: ['url(https://cf.shopee.vn/file/da91a92ca754368c7907ed8dae84d12e)', 'url(https://cf.shopee.vn/file/a94f080c929e97308d79361c25391cc5_tn)', 'url(https://cf.shopee.vn/file/48144da4854f1c3bb971a623600105a6_tn)'],
        name: "Sách - Stillhouse - Con lạch chết chóc",
        price_old: '139.300',
        price_new: '97.300',
        price_sale: "30% GIẢM",
        rest: 9,
        sold: 221,
        liked: 23,
        imageShop: 'src="https://cf.shopee.vn/file/cf06d73df6c09138370bb0abd217c7fc_tn"',
        nameShop: "minhmonbook",
        online: 'Online 21 Phút Trước',
        evaluate: '17k',
        productShops: '685',
        feedback: '52%',
        join: '28 tháng trước',
        follow: '7k',
        tradeMark: 'Maurice Leblanc',
        sentFrom: 'Quận Long Biên, Hà Nội',
        listProductSell: [
            {
                img: 'url(https://cf.shopee.vn/file/38ece30a6866cb0cdacf7a3617c3762f_tn)',
                name: "Sách - Người Nam Châm - Bí ẩn luật hấp dẫn",
                price: '48,750'
            },

            {
                img: 'url(https://cf.shopee.vn/file/cbd4eae070a74af5970228deea94cdb4_tn)',
                name: "Sách - Nhà Đầu Tư Thông Minh",
                price: '132.000'
            },

            {
                img: 'url(https://cf.shopee.vn/file/2e21437f3bcedc7a48ca069b268f79e1_tn)',
                name: "Sách - Tuổi trẻ đang bao nhiêu",
                price: '69.300'
            },
        ],
        descripton: `Mã sản phẩm: 8935212350648 <br>
        Tác giả : Rachel Caine <br>
        Dịch giả : Ngụy Thanh Tuyên <br>
        NXB Thanh Niên <br>
        Kích thước : 16x24cm <br>
        Năm xuất bản : 2020 <br>
        Số trang : 464 <br>
        Khối lượng : 800 grams <br> <br>
        
        Gwen Proctor đã chiến thắng trong trận chiến giành lại mạng sống cho các con mình từ tay kẻ sát nhân hàng loạt cùng băng đảng tâm thần của hắn. Thế nhưng mọi chuyện còn chưa kết thúc. Chưa thể khi hắn nay lại trốn thoát khỏi ngục tù. Chưa thể khi bỗng một ngày, cô nhận được dòng tin nhắn kinh hoàng… <br> <br>
        
        Giờ ở chỗ nào cô cũng không an toàn đâu. <br> <br>
        
        Con quỷ dữ những tưởng đã bị giam giữ, kiềm tỏa sau song sắt nhà tù mãi mãi lại trốn thoát, và người đầu tiên hắn khao khát săn lùng chính là cô. Trong cuộc chơi man rợ này, Gwen phải làm đủ mọi cách để bảo toàn tính mạng cho mình và những người thân yêu khỏi nanh vuốt của quỷ dữ. Trong đó, không ngoại trừ việc chính cô sẽ trở thành thợ săn.   <br> <br>
        
        Tiếp nối câu chuyện trong Ác mộng ven hồ, phần thứ hai Con lạch chết chóc kể về chuỗi ngày đầy sóng gió của Gwen Proctor trên con đường đi tìm ánh sáng nơi cuối đường hầm. Cùng với cuốn thứ ba mang tên Dòng sông hắc ám, series trinh thám ăn khách Stillhouse đã tạo nên một câu chuyện kịch tính, gay cấn đến tận trang cuối cùng!  <br> <br>
        
        ----- <br> <br>
        
        Về tác giả Rachel Caine <br> <br>
        
        Rachel Caine là một trong những tác giả ăn khách nhất thế giới với hơn năm mươi đầu tiểu thuyết nằm trong danh sách bán chạy, bao gồm hai series truyện dành cho tuổi thiếu niên là Ma cà rồng vùng Morganville và Đại Thư viện. Các dòng sách bà theo đuổi gồm có: tiểu thuyết giật gân, huyền bí, kỳ ảo hiện đại, khoa học viễn tưởng và tiểu thuyết siêu linh dành cho giới trẻ. Bà hiện sống cùng gia đình tại Fort Worth, bang Texas, Mỹ.`
    },

    {
        id: 7,
        image: 'url(https://cf.shopee.vn/file/ba0b62924bee14e0dd92aab1bbf91173_tn)',
        list_img: ['url(https://cf.shopee.vn/file/ba0b62924bee14e0dd92aab1bbf91173_tn)', 'url(https://cf.shopee.vn/file/905f7d5981a51686d5e18768b93c2871_tn)', 'url(https://cf.shopee.vn/file/1b4d1b48b90c449bafa42a24769e46b5_tn)'],
        name: "Sách - Sherlock Holmes Toàn Tập Trọn Bộ 3 Tập (Bìa Cứng)",
        price_old: '300.800',
        price_new: '159.300',
        price_sale: "30% GIẢM",
        rest: 652,
        sold: 994,
        liked: 702,
        imageShop: 'src="https://cf.shopee.vn/file/97183d8a348c639300d56efcf062c3ed_tn"',
        nameShop: "khangvietbook",
        online: 'Online 25 Phút Trước',
        evaluate: '6,2k',
        productShops: '782',
        feedback: '87%',
        join: '5 năm trước',
        follow: '5,1k',
        tradeMark: 'Conan Doyle',
        sentFrom: 'Quận 1, TP. Hồ Chí Minh',
        listProductSell: [
            {
                img: 'url(https://cf.shopee.vn/file/38ece30a6866cb0cdacf7a3617c3762f_tn)',
                name: "Sách - Người Nam Châm - Bí ẩn luật hấp dẫn",
                price: '48,750'
            },

            {
                img: 'url(https://cf.shopee.vn/file/cbd4eae070a74af5970228deea94cdb4_tn)',
                name: "Sách - Nhà Đầu Tư Thông Minh",
                price: '132.000'
            },

            {
                img: 'url(https://cf.shopee.vn/file/2e21437f3bcedc7a48ca069b268f79e1_tn)',
                name: "Sách - Tuổi trẻ đang bao nhiêu",
                price: '69.300'
            },
        ],
        descripton: `Giới Thiệu Về Bộ Truyện Sherlock Holmes Toàn Tập Trọn Bộ (3 Tập) <br> <br>

        Đối với những độc giả yêu thích dòng trinh thám nói riêng cũng như những người yêu sách trên toàn thế giới nói chung thì không phải nói nhiều về sức hút của hai cái tên: Conan Doyle và " đứa con tinh thần" cả đời của ông Sherlock Holmes. <br> <br>
        
        Sherlock Holmes từ lâu đã trở thành nguồn cảm hứng cho hàng trăm, hàng ngàn các tác phẩm ở nhiều loại hình nghệ thuật khác nhau: từ âm nhạc, ca kịch đến điện ảnh.. Bộ sách Sherlock Holmes Toàn Tập Trọn Bộ ( 3 Tập ) một lần nữa mang đến cho người đọc cơ hội được nhìn ngắm, ngưỡng mộ và đánh giá nhân vật độc đáo của nhà văn tài năng Conan Doyle. Chân dung cuộc đời, sự nghiệp và nhân cách của Sherlocks Holmes chưa bao giờ được tái hiện chân thực, đầy đủ và sống động đến thế..... <br> <br>
        
        #newshop hân hạnh giới thiệu đến bạn đọc! <br> <br>
        --------------------------- <br>
        Công ty phát hành: Khang Việt Book <br>
        Năm Xuất Bản: 11/09/2016 <br>
        Tác Giả: Sir Arthur Conan Doyle <br>
        Kích Thước: 16 x 24 cm <br>
        Nhà Xuất bản: Hội Nhà Văn <br>
        Số Trang: 1408 trang <br>
        Bìa: Cứng`
    },

    {
        id: 8,
        image: 'url(https://cf.shopee.vn/file/658b2c6f8e95684c62786fdba235c8df_tn)',
        list_img: ['url(https://cf.shopee.vn/file/658b2c6f8e95684c62786fdba235c8df_tn)', 'url(https://cf.shopee.vn/file/384a1902e853e7edcddb9136e5e1cc33_tn)', 'url(https://cf.shopee.vn/file/98d6ecd03aa8f15c957421f6670f3617_tn)'],
        name: "Sách - Thiên thần và Ác quỷ",
        price_old: '200.000',
        price_new: '152.570',
        price_sale: "27% GIẢM",
        rest: 1,
        sold: 42,
        liked: 52,
        imageShop: 'src="https://cf.shopee.vn/file/e9b2282e025fb93c482c78659d1389b5_tn"',
        nameShop: "penguinbooks888",
        online: 'Online 5 Phút Trước',
        evaluate: '27,7k',
        productShops: '6,6k',
        feedback: '73%',
        join: '29 tháng trước',
        follow: '24,7k',
        tradeMark: 'Dan Brown',
        sentFrom: 'Quận Thanh Xuân, Hà Nội',
        listProductSell: [
            {
                img: "url('https://cf.shopee.vn/file/cbd4eae070a74af5970228deea94cdb4_tn')",
                name: "Sách - Nhà Đầu Tư Thông Minh",
                price: '132.000'
            },

            {
                img: "url(https://cf.shopee.vn/file/7547d04d7cdc6522864a06850f555672_tn)",
                name: "Sách - How The Body Works - Hiểu Hết Về Cơ Thể",
                price: '231.000'
            },

            {
                img: "url(https://cf.shopee.vn/file/38ece30a6866cb0cdacf7a3617c3762f_tn)",
                name: "Sách - Người Nam Châm - Bí ẩn của luận hấp dẫn",
                price: '132.000'
            },
            
            {
                img: "url(https://cf.shopee.vn/file/23d61d1220ed6c5f4740ec044cceb1d7_tn)",
                name: "Sách - Tiểu thuyết, trinh thám tâm lý - Đếm ngược",
                price: '97.300'
            }
        ],
        descripton: `GIỚI THIỆU SÁCH <br>
        Thiên Thần và Ác Quỷ  <br> <br>
        
        Thiên Thần và Ác Quỷ - Cuốn tiểu thuyết trinh thám khoa học giả tưởng đầy kịch tính của Dan Brown.  <br> <br>
        
        “Thiên Thần và Ác Quỷ” thu hút người đọc bởi sự uyên bác và tài dẫn truyện của Dan Brown, người đã thể hiện khả năng nắm bắt siêu hạng về các lĩnh vực khoa học và tôn giáo qua loạt tác phẩm đã được phát hành ở Việt Nam như “Mật mã Da Vinci”, “Pháo đài số”…  <br> <br>
        
        Cuộc chiến giữa tôn giáo và khoa học ẩn hiện trong “Thiên Thần và Ác Quỷ”. Bắt đầu bằng cái chết của một nhà khoa học tên tuổi, Robert Langdon, giáo sư trường Đại học Harvard, được mời đến hiện trường để xác nhận biểu tượng bí hiểm mà hung thủ đã khắc lên ngực nạn nhân. Kết luận: thủ phạm là Illuminati, một hội kín vốn đã ngừng hoạt động từ gần bốn trăm năm trước, giờ tái sinh để tiếp tục báo thù nhà thờ Thiên Chúa giáo, kẻ thù truyền kiếp của họ.  <br> <br>
        
        Hồi hộp, háo hức, căng thẳng là cảm nhận của bạn đọc khi dõi theo hơn 600 trang viết của Dan Brown.  <br> <br>
        
        Thiên Thần và Ác Quỷ là một cuộc phiêu lưu đầy kịch tính, và rất đời thường... hấp dẫn, tốc độ, và đầy chất trí tuệ. <br>
        ------------------------- <br>
        Công ty phát hành Bách Việt  <br>
        Tác giả Dan Brown  <br>
        Ngày xuất bản 11-2020  <br>
        Kích thước 16 x 24 cm  <br>
        Nhà xuất bản Nhà Xuất Bản Lao Động  <br>
        Loại bìa Bìa cứng  <br>
        Số trang 728`
    },

    {
        id: 9,
        image: 'url(https://cf.shopee.vn/file/4b931774a7b4d1ddb086962f392fb72c_tn)',
        list_img: ['url(https://cf.shopee.vn/file/4b931774a7b4d1ddb086962f392fb72c_tn)', 'url(https://cf.shopee.vn/file/62a8b481b3209e09d24c416f74620ffe_tn)', 'url(https://cf.shopee.vn/file/1552d0a99be583d1f696df31ecae0a78_tn)'],
        name: "Sách - Nguồn Cội - Truyện Trinh Thám - Origin",
        price_old: '250.000',
        price_new: '175.300',
        price_sale: "30% GIẢM",
        rest: 2,
        sold: 20,
        liked: 7,
        imageShop: 'src="https://cf.shopee.vn/file/8977606dff07e6eba39177d4abe4c79a_tn"',
        nameShop: "sachhayquanhieu",
        online: 'Online 6 Phút Trước',
        evaluate: '29,3k',
        productShops: '1,5k',
        feedback: '87%',
        join: '4 năm trước',
        follow: '8,6k',
        tradeMark: 'Dan Brown',
        sentFrom: 'Quận Hai Bà Trưng, Hà Nội',
        listProductSell: [
            {
                img: "url(https://cf.shopee.vn/file/57f3c3ac9258174f938b4b09bf448707_tn)",
                name: "Sách - Biểu tượng thất truyền",
                price: '157.000'
            },

            {
                img: "url(https://cf.shopee.vn/file/059389ef94a1418782e5ffe3115891a5_tn)",
                name: "Sách - Hỏa ngục (tái bản 2020)",
                price: '157.680'
            },

            {
                img: "url(https://cf.shopee.vn/file/0d53068c3c5f20e8bd81106c88c4312f_tn)",
                name: "Sách - Điểm dối lừa (tái bản 2021)",
                price: '133.230'
            },
            
            {
                img: "url(https://cf.shopee.vn/file/f0060ffb0debe13d611712d14ea03040_tn)",
                name: "Sách - Thiên thần và ác quỷ",
                price: '132.200'
            },

            {
                img: "url('https://cf.shopee.vn/file/cbd4eae070a74af5970228deea94cdb4_tn')",
                name: "Sách - Nhà Đầu Tư Thông Minh",
                price: 132.000
            }
        ],
        descripton: `Công ty phát hành: Bách Việt <br>
        Nhà xuất bản: NXB Lao Động <br>
        Tác giả: Dan Brown <br>
        Loại bìa: Bìa Cứng <br>
        Số trang: 712 <br>
        Năm xuất bản: 03-2018 <br> <br> <br>
        
        
        Nguồn Cội Thông tin tác phẩm: Robert Langdon, giáo sư biểu tượng và biểu tượng tôn giáo đến từ trường đại học Harvard, đã tới Bảo tàng Guggenheim Bilbao để tham dự một sự kiện quan trọng - công bố một phát hiện "sẽ thay đổi bộ mặt khoa học mãi mãi".  <br>
        Edmond Kirsch là một tỷ phú bốn mươi tuổi, một nhà tiên tri. Những phát minh kỹ thuật cao và những dự đoán táo bạo đã làm cho anh trở thành một nhân vật nổi tiếng toàn cầu. Kirsch - cũng chính là một trong những sinh viên đầu tiên của Langdon tại đại học Harvard cách đây hai thập kỷ - sẽ tiết lộ một bước đột phá đáng kinh ngạc...  <br>
        Nó sẽ trả lời hai câu hỏi cơ bản về sự tồn tại của con người: "Chúng ta đến từ đâu?" và "Chúng ta đang đi về đâu?" Khi sự kiện bắt đầu, Langdon và vài trăm quan khách bị cuốn hút bởi một bài thuyết trình độc đáo mà chính Langdon cũng nhận thấy rằng sẽ gây ra nhiều tranh cãi hơn những gì ông tưởng tượng. Nhưng sự kiện này đột nhiên biến thành cuộc hỗn loạn, và khám phá quý giá của Kirsch đang dần biến mất vĩnh viễn.  <br>
        Trước nguy cơ phải đối mặt với một mối đe doạ sắp xảy ra, Langdon bị buộc phải bỏ trốn để thoát khỏi Bilbao cùng Ambra Vidal - Hoàng hậu tương lai của Tây Ban Nha để tìm ra mật khẩu bí ẩn sẽ mở ra bí mật của Kirsch. Để chiến thắng những bí mật được giấu kín của lịch sử và tôn giáo cực đoan, Langdon và Ambra phải trốn tránh một thế lực với sức mạnh dường như xuất phát từ chính Hoàng gia Tây Ban Nha... và đang cố tìm cách để giữ Edmond Kirsch im lặng. Trên một hành trình được đánh dấu bởi các tác phẩm nghệ thuật hiện đại và các ký hiệu bí ẩn, Langdon và Vidal đã tìm ra những manh mối cuối cùng đưa họ đối mặt với khám phá gây sốc của Kirsch... và sự thật mà từ lâu chúng ta đã tìm kiếm. Thông tin tác giả: Dan Brown sinh ngày 22 tháng 6 năm 1964 tại Exeter, New Hampshire. Ông tốt nghiệp trường Cao đẳng Amherst với hai tấm bằng tiếng Anh và tiếng Tây Ban Nha vào năm 1986, sau đó bước chân vào con đường soạn nhạc. Năm 1996, ông bắt đầu chuyên tâm vào viết văn và cho ra đời cuốn tiểu thuyết đầu tay - Pháo đài số - vào năm 1998. Tiếp nối thành công, ông cho ra đời thêm các tác phẩm Thiên thần và Ác quỷ năm 2000 và Điểm dối lừa năm 2001. Tuy nhiên phải đến cuốn thứ 4, Mật mã Davinci năm 2003 mới thực sự đưa tên tuổi ông nổi như cồn trên khắp thế giới. Không hề bị áp lực do quá thành công từ các cuốn trước, ông tiếp tục xuất bản cuốn Biểu tượng thất truyền (2009) và Hỏa Ngục (2013). Cả hai cuốn sách đều trở thành những tác phẩm bán cực kỳ chạy. Những tác phẩm của Dan Brown được Bachvietbooks phát hành: - Hỏa Ngục (3/2014) - Biểu tượng thất truyền (3/2015) - Pháo đài số (4/2017) - Thiên thần và Ác quỷ ( 9/2017) - Điểm dối lừa (dự kiến tháng 3/2018) - Nguồn cội (3/2018)`
    },

    {
        id: 10,
        image: 'url(https://cf.shopee.vn/file/9197181a5a5911ce0e0c4a3de25ee41d_tn)',
        list_img: ['url(https://cf.shopee.vn/file/9197181a5a5911ce0e0c4a3de25ee41d_tn)', 'url(https://cf.shopee.vn/file/b3e007eaa7c63472616ec7dff96a7f6a_tn)', 'url(https://cf.shopee.vn/file/4ecdb7be24f0a01f5cca8924a3a4b133_tn)', 'url(https://cf.shopee.vn/file/21a31cfa5aa4c38b07a7c8dc841570fe_tn)'],
        name: "Sách - Bạch Dạ Hành (Tái Bản)",
        price_old: '209.000',
        price_new: '160.930',
        price_sale: "23% GIẢM",
        rest: 6,
        sold: 27,
        liked: 23,
        imageShop: 'src="https://cf.shopee.vn/file/e9b2282e025fb93c482c78659d1389b5_tn"',
        nameShop: "penguinbooks888",
        online: 'Online 9 Phút Trước',
        evaluate: '27,7k',
        productShops: '6,6k',
        feedback: '73%',
        join: '29 tháng trước',
        follow: '24,7k',
        tradeMark: 'Keigo Higashino',
        sentFrom: 'Quận Thanh Xuân, Hà Nội',
        listProductSell: [
            {
                img: "url('https://cf.shopee.vn/file/cbd4eae070a74af5970228deea94cdb4_tn')",
                name: "Sách - Nhà Đầu Tư Thông Minh",
                price: '132.000'
            },

            {
                img: "url(https://cf.shopee.vn/file/7547d04d7cdc6522864a06850f555672_tn)",
                name: "Sách - How The Body Works - Hiểu Hết Về Cơ Thể",
                price: '231.000'
            },

            {
                img: "url(https://cf.shopee.vn/file/38ece30a6866cb0cdacf7a3617c3762f_tn)",
                name: "Sách - Người Nam Châm - Bí ẩn của luận hấp dẫn",
                price: '132.000'
            },
            
            {
                img: "url(https://cf.shopee.vn/file/23d61d1220ed6c5f4740ec044cceb1d7_tn)",
                name: "Sách - Tiểu thuyết, trinh thám tâm lý - Đếm ngược",
                price: '97.300'
            }
        ],
        descripton: `GIỚI THIỆU SÁCH <br> <br>

        Kosuke, chủ một tiệm cầm đồ bị sát hại tại một ngôi nhà chưa hoàn công, một triệu yên mang theo người cũng bị cướp mất. <br> <br>
        
        Sau đó một tháng, nghi can Fumiyo được cho rằng có quan hệ tình ái với nạn nhân và đã sát hại ông để cướp một triệu yên, cũng chết tại nhà riêng vì ngộ độc khí ga. Vụ án mạng ông chủ tiệm cầm đồ rơi vào bế tắc và bị bỏ xó. <br> <br>
        
        Nhưng với hai đứa trẻ mười một tuổi, con trai nạn nhân và con gái nghi can, vụ án mạng năm ấy chưa bao giờ kết thúc. Sinh tồn và trưởng thành dưới bóng đen cái chết của bố mẹ, cho đến cuối đời, Ryoji vẫn luôn khao khát được một lần đi dưới ánh mặt trời, còn Yukiho cứ ra sức vẫy vùng rồi mãi mãi chìm vào đêm trắng. <br>
        ---------------------- <br>
        Tên Nhà Cung Cấp	Nhã Nam <br>
        Tác giả	Higashino Keigo <br>
        NXB	NXB Hội Nhà Văn <br>
        Năm XB	2019 <br>
        Số trang	586 <br>
        Hình thức	Bìa Mềm`
    },
];
