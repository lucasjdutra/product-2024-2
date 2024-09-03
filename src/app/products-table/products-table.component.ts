import { Component } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrl: './products-table.component.css'
})
export class ProductsTableComponent {
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
