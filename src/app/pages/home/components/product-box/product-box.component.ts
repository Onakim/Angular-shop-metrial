import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Product } from "src/app/models/product.model";

@Component({
  selector: "app-product-box",
  templateUrl: "./product-box.component.html",
  styles: [],
})
export class ProductBoxComponent {
  @Input() fullWhidthMode = false;
  product: Product | undefined = {
    id: 1,
    title: "Snickers",
    price: 15,
    category: "shoes",
    description: "Description",
    image: "https://via.placeholder.com/150",
  };
  @Output() addToCard = new EventEmitter();
  onAddToCard(): void {
    this.addToCard.emit(this.product);
  }
}
