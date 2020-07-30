import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductService {

    private products: Product[];
    productAdded = new BehaviorSubject(null);
    public totalItems: number;


    constructor() {
        this.products = [
            { id: 'p01', name: 'Carrier Split AC', price: 10000,description:'Carrier 1.5 Ton 3 Star Inverter Split AC (Copper ESKO+ HYBRIDJET INV R410ACAI18EK3R49F0 White) 4.1 out of 5 stars 144. ₹36,999 ₹57,500 Save ₹20,501 (36%) Save extra with No Cost EMISave extra with No Cost EMI.', photo: 'carrier-1-ton-2-star-split-ac-copper.gif' },
            { id: 'p02', name: 'Oneplus', price: 10000,description:'OnePlus creates beautifully designed products with premium build quality & brings the best technology to users around the world. No tradeoffs, we #NeverSettle.', photo: 'oneplus.gif' },
            { id: 'p03', name: 'Carrier Window AC', price: 18000,description:'This Carrier 1.5-ton window AC features Auto Swing and Exhaust Command so that your room has an even temperature as well as a constant supply of fresh and healthy air', photo: 'window_ac.jpg' },
            {id:  'p04', name: 'Agaro Blender', price: 1000, description: 'Now enjoy smooth, delicious smoothies in mere moments. The 1000 Watt motor and specially designed extractor blades easily crush ice, and blend nuts, seeds, whole fruits and vegetables. You can just remove the jar, pop on the flip top cover and sip your shakes for those on-the-go!', photo:'download.jpg'},
            {id:  'p05', name: 'Mi Smart TV', price: 2000, description: 'The Patchwall with Android TV feature lets you spend more time enjoying your content, and less time searching for it. ... This TVs powerful stereo speakers complete your cinematic experience with rich and powerful audio.', photo:'1583145174887.jpg'},
            {id:  'p06', name: 'Realme phone', price: 1500, description: 'Realme is an emerging mobile phone brand which is committed to offering mobile phones with powerful performance, stylish design and sincere services.', photo:'tv.jpg'},
        ];

        this.totalItems = 0;
    }

    findAll(): Product[] {
        return this.products;
    }

    find(id: string): Product {
        return this.products[this.getSelectedIndex(id)];
    }

    private getSelectedIndex(id: string) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id == id) {
                return i;
            }
        }
        return -1;
    }
    addedproduct(productdata){
        console.log(productdata)
        this.productAdded.next(productdata)
    }

}