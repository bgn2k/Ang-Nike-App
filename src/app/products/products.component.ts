import { Component, Input } from '@angular/core';
import { Prodcuts } from '../Models/Products';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {

  selectedProduct !: Prodcuts

  products = [
    {
      productImg:
        'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_531,c_limit/766b057f-9403-4f0d-90eb-5be0a1d56b6b/jordan-stadium-90-shoes-vnsjwJ.png',
      productName: 'Nike React Infinity Run Flyknit',
      productCategory: "Men's Shoe",
      productPrice: 1999,
      stockAvailability: true,
      productDetails:
        'Nike ka shoe hai aur accha hai badiya hai par mehanga hai thoda',
    },
    {
      productImg:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/655f871a-5bdf-47be-ba7c-2020ffc15c3f/air-force-1-07-shoes-cg0zlX.png',
      productName: 'Nike React Miler',
      productCategory: "Men's Shoe",
      productPrice: 1999,
      stockAvailability: false,
      productDetails:
        'Nike ka shoe hai aur accha hai badiya hai par mehanga hai thoda',
    },
    {
      productImg:
        'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_531,c_limit/71dcb3f8-76cf-4bae-8fa0-e16bc6f2872c/air-max-90-shoes-0MB5rJ.png',
      productName: 'Nike Air Zoom Pegasus 37',
      productCategory: "Men's Shoe",
      productPrice: 1999,
      stockAvailability: false,
      productDetails:
        'Nike ka shoe hai aur accha hai badiya hai par mehanga hai thoda',
    },
    {
      productImg:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d869a827-37d9-4de8-957a-905259146dfe/air-humara-shoes-cMxm2B.png',
      productName: 'Nike Joyride Run Flyknit',
      productCategory: "Men's Shoe",
      productPrice: 1999,
      stockAvailability: true,
      productDetails:
        'Nike ka shoe hai aur accha hai badiya hai par mehanga hai thoda',
    },
    {
      productImg:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cfd167ff-38b9-41cc-902c-78e599c4b49e/waffle-debut-se-shoes-zPhTV5.png',
      productName: 'Nike Mercurial Vapor 13 Elite FG',
      productCategory: "Men's Shoe",
      productPrice: 1999,
      stockAvailability: false,
      productDetails:
        'Nike ka shoe hai aur accha hai badiya hai par mehanga hai thoda',
    },
    {
      productImg:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b14aba9a-f828-45d3-9607-b687b884aa7d/revolution-7-easyon-road-running-shoes-nNqdwt.png',
      productName: 'Nike Phantom Vision Elite Dynamic Fit FG',
      productCategory: "Men's Shoe",
      productPrice: 1999,
      stockAvailability: true,
      productDetails:
        'Nike ka shoe hai aur accha hai badiya hai par mehanga hai thoda',
    },
    {
      productImg:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b9c800d6-cd8a-48bf-b4d4-5f3950bd0a8f/mercurial-vapor-15-academy-indoor-court-low-top-football-shoes-kjqhHM.png',
      productName: 'Nike Phantom Venom Academy FG',
      productCategory: "Men's Shoe",
      productPrice: 1999,
      stockAvailability: true,
      productDetails:
        'Nike ka shoe hai aur accha hai badiya hai par mehanga hai thoda',
    },
    {
      productImg:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fd17b420-b388-4c8a-aaaa-e0a98ddf175f/dunk-high-retro-shoe-DdRmMZ.png',
      productName: 'Nike Mercurial Vapor 13 Elite Tech Craft FG',
      productCategory: "Men's Shoe",
      productPrice: 1999,
      stockAvailability: false,
      productDetails:
        'Nike ka shoe hai aur accha hai badiya hai par mehanga hai thoda',
    },
    {
      productImg:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ccdb2518-0422-4668-94a7-95879979a73a/cortez-shoes-0VH7qz.png',
      productName: 'Nike Mercurial Superfly 7 Pro MDS FG',
      productCategory: "Men's Shoe",
      productPrice: 1999,
      stockAvailability: true,
      productDetails:
        'Nike ka shoe hai aur accha hai badiya hai par mehanga hai thoda',
    },
    {
      productImg:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a18649e1-a793-4057-8f75-adf978602608/zoom-fly-5-road-running-shoes-hPrw3h.png',
      productName: 'Nike Air Force 1',
      productCategory: "Men's Shoe",
      productPrice: 1999,
      stockAvailability: true,
      productDetails:
        'Nike ka shoe hai aur accha hai badiya hai par mehanga hai thoda',
    },
    {
      productImg:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/589c8989-8cab-42f6-abb9-0c17e7efd655/superfly-9-elite-mercurial-dream-speed-fg-high-top-football-boot-1SKm9k.png',
      productName: 'Nike Air Max 90',
      productCategory: "Men's Shoe",
      productPrice: 1999,
      stockAvailability: false,
      productDetails:
        'Nike ka shoe hai aur accha hai badiya hai par mehanga hai thoda',
    },
    {
      productImg:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a60f0def-a1f1-45c2-a90f-b3d755898f41/nikecourt-air-zoom-vapor-11-attack-prm-hard-court-tennis-shoes-DSHmKx.png',
      productName: 'Nike Air Max 90 LTR',
      productCategory: "Men's Shoe",
      productPrice: 1999,
      stockAvailability: true,
      productDetails:
        'Nike ka shoe hai aur accha hai badiya hai par mehanga hai thoda',
    },
  ];

  totalCount: number = this.products.length;
  inStockCount: number = this.products.filter(
    (p) => p.stockAvailability === true
  ).length;
  OutOfStockCount: number = this.products.filter(
    (p) => p.stockAvailability === false
  ).length;

  selectedRadioButton: string = 'all';

  onFilterChange(val: string) {
    console.log('onFilterChange func is being called! & Value : ' + val);
    this.selectedRadioButton = val;
  }

  // The below declared varName is the result of the communication between the Parent to Child that is the input() decorator
  @Input()
  searchText: string = '';
}
