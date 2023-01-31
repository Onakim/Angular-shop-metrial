import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Product } from "src/app/models/product.model";

@Component({
  selector: "app-product-box",
  templateUrl: "./product-box.component.html",
  styles: [],
})
export class ProductBoxComponent {
  @Input() fullWhidthMode = false;
  @Input() product: Product | undefined;
  @Output() addToCard = new EventEmitter();
  onAddToCard(): void {
    this.addToCard.emit(this.product);
  }
}
