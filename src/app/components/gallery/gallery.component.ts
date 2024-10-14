import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'cl-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  images = [
    'https://thanhcoloa.vn/storage/tin-tuc/diem-du-lich/033-mot-thoang-loa-thanh-resized.JPG',
    'https://thanhcoloa.vn/storage/tin-tuc/diem-du-lich/mot-doan-thanh-phia-tay-nam-den-thuong-resized.JPG',
    'https://thanhcoloa.vn/storage/tin-tuc/diem-du-lich/toa-dai-dinh-resized.jpg',
    'https://thanhcoloa.vn/storage/tin-tuc/diem-du-lich/02-ban-quan-ly-khu-di-tich-co-loa-diem-xom-chua-diem-xom-ngay-th-resized.JPG',
    'https://hoangthanhthanglong.vn/wp-content/uploads/2023/05/coloathanh.jpg',
    'https://thanhcoloa.vn/storage/tin-tuc/diem-du-lich/thap-bat-la-han-chua-bao-son-resized.JPG',
    'https://thanhcoloa.vn/storage/tin-tuc/diem-du-lich/031-toan-canh-den-thuong-1-resized.JPG',
    'https://thanhcoloa.vn/storage/tin-tuc/diem-du-lich/4-resized.jpg',
    'https://image.baophapluat.vn/w840/Uploaded/2024/jihvwawbvhfobu/2024_01_26/cap-rong-da-ngan-nam-vat-thieng-cua-thanh-co-loa-anh-khu-di-tich-co-loa-4581.jpg',
    'https://haufo.hanoi.gov.vn/documents/2967402/0/Co-loa2.jpg/498df09a-1eb3-41cb-a1fc-6ab9e6232735?t=1600931956746',
    'https://mam.bacninhtv.vn/MediaAssets/Asset/1270313f-f36b-1410-870b-00bf37637f81/Thumbnail',
    'https://image.tienphong.vn/w1000/Uploaded/2024/pcgycivo/2022_10_14/image001-9961.jpg',
    // Add more images as needed
  ];
}
