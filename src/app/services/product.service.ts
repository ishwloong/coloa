import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProductService {
  products = [
    {
      id: 1,
      img: 'https://langngheviet.com.vn/stores/news_dataimages/langnghevietcomvn/072021/15/11/nghe-lam-bong-chu-co-loa-50-.8751.jpg',
      name: 'Bỏng chủ Cổ Loa',
      description:
        'Tương truyền, bỏng Chủ là loại lương thực dự trữ của quân lính khi ra trận, vì để được lâu ngày. Đây cũng là đồ lễ không thể thiếu trong Lễ hội Cổ Loa - mùng 6 tháng Giêng hằng năm, nhằm tưởng nhớ công ơn đức Vua...',
      price: 20000,
      unit: 'Hộp 300gr',
      category: 'Electronics',
      inStock: true,
    },
    {
      id: 2,
      name: 'Xôi oản',
      img: 'https://ddk.1cdn.vn/thumbs/1200x630/2020/06/22/image.daidoanket.vn-images-upload-vanmt-06222020-_tr-15.jpg',
      description: `Oản xôi lá mít là lễ vật dâng cúng các ngày lễ tiết trong năm, công việc trọng đại của gia đình gắn với văn hóa tâm linh của người Việt. Theo quan niệm của người xưa: màu trắng và mùi thơm của xôi nếp kết hợp với màu xanh của lá mít, là tinh hoa của đất trời tạo nên sự linh thiêng.
<br/>
Đến với Khu di tích Cổ Loa, du khách sẽ được trải nghiệm thực hành đóng oản xôi lá mít. Xôi được nấu từ gạo nếp cái hoa vàng thơm ngon nổi tiếng nhất trong vùng, được cấy trên cánh đồng làng Dục Tú sát vòng thành Ngoại của Cổ Loa, một vùng chuyên cấy giống lúa nếp cái hoa vàng từ bao đời nay. Lá mít được lấy từ các cây mít lâu năm được trồng trên các vòng thành Cổ Loa. Cần thêm khuôn được làm bằng gỗ mít là đã có thể tiến hành đóng xôi oản.`,
      price: 15000,
      unit: 'Hộp 6 chiếc',
      category: 'Electronics',
      inStock: true,
    },
    {
      id: 3,
      name: 'Bún Mạch Tràng',
      img: 'https://bizweb.dktcdn.net/thumb/grande/100/347/968/products/1509389bun-mach-trang-4-jpeg.jpg?v=1554949256970',
      description:
        'Bún Mạch Tràng (còn gọi là bún tiến vua, bún đen), là một món bún đặc sản thuộc làng Mạch Tràng, xã Cổ Loa, huyện Đông Anh, Hà Nội. Nhiều cơ quan báo chí tại Việt Nam cho rằng truyền thống làm bún này đã xuất hiện hơn 2000 năm và đây còn là món ăn yêu thích của vua An Dương Vương',
      price: 10000,
      unit: 'Kg',
      category: 'Furniture',
      inStock: true,
    },
    {
      id: 4,
      name: 'Rau cần',
      img: 'https://cdn.eva.vn/upload/2-2021/images/2021-05-25/1-1311224-1621925069-140-width700height525.jpg',
      description: 'Tương truyền, vào thời An Dương Vương, món bún xào cần có mặt trong thực đơn đãi khách của nhà vua khi tiếp đoàn chúa đất Nam Hải Triệu Đà sang hỏi cưới công chúa Mỵ Châu cho Trọng Thủy. Năm đó, khi Triệu Đà sang ngỏ ý hỏi cưới công chúa Mỵ Châu cho con trai Trọng Thủy, vua An Dương Vương đã nhận lời để giữ mối hòa thuận bang giao giữa hai bên. Vua cũng ra lệnh cho đầu bếp chuẩn bị yến tiệc linh đình với những món ăn ngon của Âu Lạc để thết đãi khách; các vị quân binh cũng được trưng dụng phục vụ nhà bếp dịp này.',
      price: 18000,
      unit: '500gr',
      category: 'Accessories',
      inStock: true,
    },
  ];

  getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find((prod) => prod.id === id);
  }
}
