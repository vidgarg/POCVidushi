import { Component, OnInit } from '@angular/core';
import { Item } from "../../../../entities/item.entity";
import { ProductService } from "../../../../service/product.service";
import { ActivatedRoute } from '@angular/router';
import {Product  } from "../../../../entities/product.entity";
import { identifierModuleUrl } from '@angular/compiler';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
	private items: Item[] = [];
	private total: number = 0;
	private addedData: Subscription;
	private productCount: any;

	constructor(
		private activatedRoute: ActivatedRoute,
		private productService: ProductService
	) { }

	ngOnInit() {
		this.activatedRoute.params.subscribe(params => {
			var id = params['id'];
			if (id) {
				this.addedData = this.productService.productAdded.subscribe(data =>{
					var item: Item = {
						product: data,
						quantity: 1
					};
					
					if (localStorage.getItem('cart') == null) {
						let cart: any = [];
						cart.push(JSON.stringify(item));
						localStorage.setItem('cart', JSON.stringify(cart));
					} else {
						let cart: any = JSON.parse(localStorage.getItem('cart'));
						let index: number = -1;
						for (var i = 0; i < cart.length; i++) {
							let item: Item = JSON.parse(cart[i]);
							if (item.product.id == id) {
								index = i;
								break;
							}
						}
						if (index == -1) {
							cart.push(JSON.stringify(item));
							localStorage.setItem('cart', JSON.stringify(cart));
						} else {
							let item: Item = JSON.parse(cart[index]);
						
							cart[index] = JSON.stringify(item);
							localStorage.setItem("cart", JSON.stringify(cart));
						}
					}
					console.log(localStorage.getItem('cart'))
					this.loadCart();
				});
				
			} else {
				this.loadCart();
			}
		});
	}

	loadCart(): void {
		this.total = 0;
		this.items = [];
		let cart = JSON.parse(localStorage.getItem('cart'));
		console.log(cart.length)
		for (var i = 0; i < cart.length; i++) {
			let item = JSON.parse(cart[i]);
			this.items.push({
				product: item.product,
				quantity: item.quantity
			});
			this.total += item.product.price;
			this.productCount = cart.length;
		}
	}

	remove(id: string): void {
		let cart: any = JSON.parse(localStorage.getItem('cart'));
		let index: number = -1;
		for (var i = 0; i < cart.length; i++) {
			let item: Item = JSON.parse(cart[i]);
			if (item.product.id == id) {
				cart.splice(i, 1);
				break;
			}
		}
		localStorage.setItem("cart", JSON.stringify(cart));
		this.loadCart();
	}

	

}

