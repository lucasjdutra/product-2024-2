import { Component } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
    products: Product[] = [
      { "id": 1,
        "name": "Celtinha 2024",
        "price": 1.99,
        "category": "Carro"
      },
      { "id": 2,
        "name": "Notebook Positivo no precinho",
        "price": 1000000000000.00,
        "category": "PC"
      },
      { "id": 3,
        "name": "Cachorro de Calça",
        "price": 0.00,
        "category": "Cachorro (de calça)"
      }
    ];
}
