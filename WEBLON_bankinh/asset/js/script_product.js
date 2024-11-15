// add 4 Best Sellers
let BestSeller = {
    arr: [],
    add: function(_img, _name, _brand, _price, _desc, _warranty ) {
        var a = {
            id: this.arr.length + 1 + 'b',
            img: _img,
            name: _name,
            brand: _brand,
            price: _price,
            desc: _desc,
            warranty : _warranty
        };
        this.arr.push(a);
    }
}

BestSeller.add('./asset/anh/kinh/IMG_016.jpg',
'KÍNH RÂM EYEPLUS 016 C1 GỌNG ĐEN MẮT ĐEN',
'DESIGNED',
'280000',
`Kính râm thời trang EYEPLUS 016 là mẫu sản phẩm được thiết kế độc quyền bởi Eye Plus. EP 016 được thiết kế bởi chất liệu nhựa cao cấp bền bỉ với thời gian, mang đến những trải nghiệm độc đáo như: giá trị sử dụng lâu dài, mặt kính bóng đẹp, khó bị gỉ, chống chịu tốt bởi tác động của môi trường, … Kính râm EP 016 nổi bật với sự kết hợp khéo léo gọng đen mắt đen cá tính, tất cả tạo nên một tổng thể hài hoà. Chắc chắn sẽ đem lại vẻ thời trang tối đa cho bạn.`,
'Pick It Now !')

BestSeller.add('./asset/anh/kinh/IMG_9072-copy-36.jpg',
'GỌNG KÍNH REEMAN 2327',
'DESIGNED',
'1584000',
`Gọng kính 2327 là sự lựa chọn lý tưởng cho những quý ông yêu thích sự kết hợp giữa phong cách hiện đại và chất liệu cao cấp. Với thiết kế dáng đa giác bo tròn độc đáo, chất liệu titanium bền bỉ và chuôi nhựa nguyên chất, sản phẩm này sẽ giúp bạn tự tin thể hiện phong cách mạnh mẽ và cuốn hút trong mọi hoàn cảnh.`,
'Pick It Now !');

BestSeller.add('./asset/anh/kinh/IMG_9072-copy-57.jpg',
`BERRY WHITE `,
'DESIGNED',
'600000',
`Gọng kính 75108 là sự lựa chọn tuyệt vời cho những ai yêu thích sự sang trọng và tinh tế. Với chất liệu titanium cao cấp, thiết kế oval thanh lịch và màu vàng hồng thời thượng, sản phẩm này không chỉ mang lại sự thoải mái mà còn giúp bạn tự tin trong mọi hoàn cảnh.`,
'Pick It Now !');

BestSeller.add('./asset/anh/kinh/IMG_9073.jpg',
`GỌNG KÍNH EYE PLUS 87293`,
'DESIGNED',
'245000',
`Gọng kính 87293 là lựa chọn hoàn hảo cho những ai đang tìm kiếm một sản phẩm không chỉ thời trang mà còn có tính ứng dụng cao. Với thiết kế gọng gập tiện lợi, kiểu dáng oval tinh tế và màu đen bóng thời thượng, sản phẩm này mang lại sự thoải mái và phong cách trong mọi hoạt động hàng ngày. `,
'Pick It Now !')

BestSeller.add('./asset/anh/kinh/IMG_9077.png',
`Gọng kính Reeman 132`,
'DESIGNED',
'51000',
`Gọng kính Reeman 132 Đen Bạc là sản phẩm hoàn hảo cho những ai yêu thích phong cách cổ điển với sự kết hợp hiện đại. Thiết kế clubmaster độc đáo và sang trọng cùng với chất liệu titanium cao cấp mang đến sự bền bỉ, nhẹ nhàng và đẳng cấp cho người đeo. `,
'Pick It Now !')

BestSeller.add('./asset/anh/kinh/IMG_9083.png',
`Gọng kính Eye Plus 9215`,
'DESIGNED',
'69000',
`Gọng kính Eye Plus 9215  C7 Rêu là sự lựa chọn tuyệt vời dành cho các cô nàng yêu thích sự tinh tế, nhẹ nhàng nhưng không kém phần hiện đại. Với thiết kế tinh xảo và màu sắc rêu trong suốt, sản phẩm mang lại vẻ ngoài thanh lịch và phong cách, phù hợp với nhiều trang phục và hoàn cảnh.`,
'Pick It Now !')

BestSeller.add('./asset/anh/kinh/IMG_9079.jpg',
`Gọng Kính Reeman Acetate 530`,
'TRADITIONAL',
'49000',
`Gọng kính Reeman Acetate 530 C31 màu 2line là lựa chọn hoàn hảo cho những ai yêu thích phong cách thời trang hiện đại nhưng không kém phần cá tính. Với thiết kế khung vuông cứng cáp cùng tông màu chuyển tiếp giữa đen và trắng, sản phẩm này mang đến một vẻ đẹp độc đáo, phù hợp với những người muốn tạo dấu ấn riêng.`,
'Pick It Now !')

localStorage.setItem('BestSellers', JSON.stringify(BestSeller.arr));

let FeatureProduct = {
    arr: [],
    add: function(_img, _name, _brand, _price, _desc, _warranty ) {
        var a = {
            id: this.arr.length + 1 + 'f',
            img: _img,
            name: _name,
            brand: _brand,
            price: _price,
            desc: _desc,
            warranty : _warranty
        };
        this.arr.push(a);
    }
}

FeatureProduct.add('./asset/anh/trong/17-copy-700x700.jpg',
`TRÒNG KÍNH CHEMI X DRIVE 1.60 ASP`,
'TRADITIONAL',
`330000`,
`Tròng kính Xdrive Chemi Lens là sự lựa chọn tuyệt vời cho những ai thường xuyên lái xe, đặc biệt là trong các điều kiện ánh sáng phức tạp. Với khả năng hạn chế chói lóa, lọc ánh sáng xanh và tia UV, và thiết kế thông minh tự điều chỉnh ánh sáng, sản phẩm này không chỉ mang lại sự thoải mái mà còn giúp bảo vệ mắt khỏi các tác nhân gây hại.`,
'Pick IT Now !');

FeatureProduct.add('./asset/anh/trong/Hoya-1.56-Progressive-Photo-Grey-SHMC-1.jpg',
`Tròng Hoya 1.56 Progressive Photo Grey SHMC`,
'TRADITIONAL',
`763000`,
`Tròng kính đa tròng Hoya 1.56 Progressive Photo Grey SHMC giúp điều chỉnh tầm nhìn linh hoạt, phù hợp cho người lão thị.
 Với công nghệ đa tròng tiên tiến, kính hỗ trợ nhìn rõ ở mọi khoảng cách.`,
'Pick It Now !');

FeatureProduct.add('./asset/anh/trong/Hoga-1.56-Progressive-blue-cut-free-form-SHMC-1.jpg',
`Essilor Crizal Sapphire 360 UV`,
'TRADITIONAL',
`1000000`,
`Tròng kính đa tròng Hoya 1.56 Progressive Photo Grey SHMC giúp điều chỉnh tầm nhìn linh hoạt, phù hợp cho người lão thị.
 Với công nghệ đa tròng tiên tiến, kính hỗ trợ nhìn rõ ở mọi khoảng cách. `,
'Pick It Now !');

FeatureProduct.add('./asset/anh/trong/160-u6-700x700.png',
`Zeiss DuraVision BlueProtect:`,
'TRADITIONAL',
`300000`,
`Zeiss DuraVision BlueProtect được thiết kế đặc biệt để bảo vệ mắt khỏi ánh sáng xanh từ màn hình máy tính và các thiết bị điện tử.
Lớp phủ BlueProtect giúp giảm thiểu ánh sáng xanh gây hại, hỗ trợ giảm căng thẳng và mỏi mắt.
Với công nghệ chống phản xạ cao cấp, tròng kính giúp hình ảnh rõ ràng, giảm hiện tượng chói và lóa.`,
'Pick It Now !');

FeatureProduct.add('./asset/anh/trong/14-copy-600x600.jpg',
`Hoya Nulux EP`,
'TRADITIONAL',
`350000`,
`Hoya Nulux EP là tròng kính đơn tiêu siêu mỏng và nhẹ, lý tưởng cho người có độ cận hoặc viễn cao.
Công nghệ Nulux EP giúp kính trong suốt và giảm thiểu độ méo hình ảnh ở phần rìa kính, mang đến tầm nhìn rõ ràng.
Lớp phủ chống chói và chống trầy xước giúp kính luôn sáng, tránh xước và bền bỉ theo thời gian.`,
'Pick It Now !');

FeatureProduct.add('./asset/anh/trong/chemi-blue.png',
`Transitions Signature GEN 8`,
'DESIGNED',
`520000`,
`ransitions Signature GEN 8 là tròng kính đổi màu tự động, giúp bảo vệ mắt khỏi ánh sáng mạnh khi ra ngoài.
Công nghệ Gen 8 giúp kính đổi màu nhanh chóng và mượt mà khi tiếp xúc với ánh sáng UV, và trở lại trong suốt khi vào trong nhà.
Tròng kính này bảo vệ mắt khỏi 100% tia UV, giảm nguy cơ mắc các bệnh về mắt liên quan đến tia cực tím.  `,
'Pick It Now !');

FeatureProduct.add('./asset/anh/trong/duralens-700x700.png',
`Shamir Autograph III`,
'DESIGNED',
`900000`,
`Shamir Autograph III là tròng kính đa tròng cao cấp, thiết kế đặc biệt cho người lão thị cần hỗ trợ tầm nhìn ở nhiều khoảng cách.
Công nghệ thiết kế mặt trước Freeform giúp kính dễ điều chỉnh khi thay đổi góc nhìn, tạo sự thoải mái và tầm nhìn rõ ràng.
Tròng kính giảm thiểu hiện tượng méo ảnh ở phần rìa, đảm bảo tầm nhìn trung thực và sắc nét. `,
'Pick It Now !');

FeatureProduct.add('./asset/anh/trong/es-trans-gen-8-1.50-700x700.jpg',
`Nikon SeeMax Ultimate`,
'DESIGNED',
`690000`,
`Nikon SeeMax Ultimate là tròng kính cao cấp với thiết kế tùy chỉnh theo từng nhu cầu của người đeo, giúp mang lại trải nghiệm nhìn chính xác và thoải mái.
Sản phẩm sử dụng công nghệ Double Surface Design giúp tối ưu hóa tầm nhìn từ mọi góc độ, giảm thiểu méo hình ở rìa kính.
Tròng kính chống chói cao cấp và lớp phủ chống trầy giúp kính sáng rõ, đồng thời tăng độ bền. `,
'Pick It Now !');

FeatureProduct.add('./asset/anh/trong/Hoga-1.56-Progressive-HC.jpg',
`Essilor Varilux X Series`,
'TRADITIONAL',
`490000`,
`Varilux X Series là tròng kính đa tròng cao cấp từ Essilor, giúp người lão thị nhìn rõ ở mọi khoảng cách mà không cần điều chỉnh đầu quá nhiều.
Sản phẩm sử dụng công nghệ Xtend, giúp mở rộng vùng nhìn rõ, mang lại sự linh hoạt tối đa cho người dùng.
Tròng kính được thiết kế mỏng và nhẹ, thoải mái khi đeo trong thời gian dài, dù có độ cận cao.
Varilux X Series có khả năng chống ánh sáng xanh, bảo vệ mắt khi làm việc với màn hình điện tử. `,
'Pick It Now !');

FeatureProduct.add('./asset/anh/trong/Hoga-saphire-700x700.png',
`Tokai Lutina`,
'TRADITIONAL',
`290000`,
`Tokai Lutina là tròng kính nổi bật với khả năng chống ánh sáng xanh và chống tia tử ngoại vượt trội, giúp bảo vệ mắt lâu dài.
Với lớp phủ Lutina độc quyền, kính ngăn chặn ánh sáng tử ngoại đến 94%, giảm nguy cơ tổn thương mắt do tác động từ ánh sáng xanh.
Tròng kính chống chói và chống trầy xước giúp hình ảnh sắc nét và bền bỉ, giữ kính luôn sạch đẹp.
Tokai Lutina mỏng nhẹ, mang đến sự thoải mái cho người đeo, đặc biệt là người có độ cận cao. `,
'Pick It Now !');

FeatureProduct.add('./asset/anh/trong/rocky-tim-700x700.png',
`Rodenstock Impression FreeSign 3`,
'DESIGNED',
`490000`,
`Rodenstock Impression FreeSign 3 là tròng kính đa tròng cao cấp, được thiết kế riêng cho từng khách hàng nhằm mang lại tầm nhìn tự nhiên nhất.
Công nghệ Individual Lens Design giúp tối ưu hóa kính theo nhu cầu của từng người, tăng độ chính xác và sự thoải mái khi sử dụng.
Tròng kính có lớp phủ chống ánh sáng xanh, giảm thiểu tác hại từ màn hình điện tử và bảo vệ mắt khỏi mỏi mệt.`,
'Pick It Now !');

FeatureProduct.add('./asset/anh/trong/rocky-vang-700x699.png',
`Seiko Surmount`,
'DESIGNED',
`790000`,
`Seiko Surmount là tròng kính đa tròng mỏng nhẹ, nổi bật với công nghệ thiết kế không đường chia giúp chuyển đổi tầm nhìn mượt mà.
Công nghệ Surface Design cải tiến của Seiko giúp giảm thiểu độ méo hình và mở rộng vùng nhìn rõ cho người lão thị.
Tròng kính chống ánh sáng xanh và chống chói, bảo vệ mắt khỏi ánh sáng mạnh và màn hình điện tử. `,
'Pick It Now !');

FeatureProduct.add('./asset/anh/trong/rocky-xanh-blue-700x699.png',
`Carl Zeiss SmartLife`,
'DESIGNED',
`890000`,
`Zeiss SmartLife là tròng kính đa tròng cao cấp, được thiết kế đặc biệt để phù hợp với lối sống hiện đại, giúp mắt điều chỉnh dễ dàng giữa các khoảng cách.
Tròng kính này có công nghệ Digital Inside, giúp người dùng thấy rõ cả khoảng cách xa và gần, giảm mỏi mắt khi sử dụng điện thoại, máy tính.
Lớp phủ BlueProtect giảm thiểu tác hại từ ánh sáng xanh, giúp bảo vệ mắt trong suốt cả ngày dài. `,
'Pick It Now !');

FeatureProduct.add('./asset/anh/trong/rocky-xanh-la-700x700.png',
`Kodak Total Blue`,
'DESIGNED',
`690000`,
`Total Blue giúp giảm hiện tượng mỏi mắt khi sử dụng máy tính, điện thoại lâu.
Lớp phủ chống bụi và nước giúp kính dễ vệ sinh, đảm bảo tầm nhìn rõ trong mọi điều kiện.
Công nghệ tiên tiến của Kodak mang lại hình ảnh sắc nét và chân thực, giúp giảm mỏi mắt.
Đây là lựa chọn hoàn hảo cho dân văn phòng, học sinh, sinh viên và người dùng thiết bị điện tử thường xuyên.
Total Blue bảo vệ mắt tối ưu và tăng cường sự thoải mái khi làm việc liên tục.`,
'Pick It Now !');

FeatureProduct.add('./asset/anh/trong/xdrive.jpg',
`Essilor Eyezen Start`,
'DESIGNED',
`890000`,
`Essilor Eyezen Start là tròng kính chuyên dụng cho người dùng trẻ tuổi, hỗ trợ giảm mỏi mắt khi sử dụng thiết bị điện tử lâu dài.
Công nghệ Light Scan lọc ánh sáng xanh có hại, giúp bảo vệ mắt và tăng độ thoải mái khi dùng điện thoại, máy tính.
Tròng kính có lớp phủ chống chói và chống trầy xước, giúp duy trì độ bền và độ sáng rõ cho kính.`,
'Pick It Now !');

FeatureProduct.add('./asset/anh/trong/zinmy-160-700x699.png',
`Hoya Sync III`,
'TRADITIONAL',
`490000`,
`Hoya Sync III là tròng kính thiết kế đặc biệt cho những ai thường xuyên làm việc với màn hình, hỗ trợ giảm mỏi mắt kỹ thuật số.
Công nghệ Sync giúp người đeo dễ dàng chuyển đổi giữa tầm nhìn gần và xa, giảm căng thẳng mắt khi làm việc.
Tròng kính này có lớp phủ chống ánh sáng xanh và chống tia UV, bảo vệ mắt toàn diện trong nhiều môi trường khác nhau.
Lớp phủ chống chói và chống trầy xước giúp duy trì tầm nhìn rõ ràng và bảo vệ kính khỏi hư hỏng.`,
'Pick It Now !');
localStorage.setItem('FeatureProduct', JSON.stringify(FeatureProduct.arr));