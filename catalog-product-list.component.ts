import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog-product-list',
  templateUrl: './catalog-product-list.component.html',
  styleUrls: ['./catalog-product-list.component.scss'],
})
export class CatalogProductListComponent implements OnInit {

  productSlideList: any;

  constructor() { }

  ngOnInit() {
    this.productSlideList = [
      {
        productList: [
          {
            name: 'Produto 1',
            price: 20.0
          },
          {
            name: 'Produto 2',
            price: 20.0
          },
          {
            name: 'Produto 3',
            price: 20.0
          },
          {
            name: 'Produto 4',
            price: 20.0
          },
        ]
      },
      {
        productList: [
          {
            name: 'Produto 5',
            price: 20.0
          },
          {
            name: 'Produto 6',
            price: 20.0
          },
          {
            name: 'Produto 7',
            price: 20.0
          },
          {
            name: 'Produto 8',
            price: 20.0
          },
        ]
      }
    ];
  }

}
