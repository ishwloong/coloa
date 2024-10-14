import { Component } from '@angular/core';
import { GalleryComponent } from "../../components/gallery/gallery.component";
import { ProductSectionComponent } from "../../components/product-section/product-section.component";

@Component({
  selector: 'cl-home',
  standalone: true,
  imports: [GalleryComponent, ProductSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
