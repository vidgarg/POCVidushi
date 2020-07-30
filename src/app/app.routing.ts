import { Routes, RouterModule } from '@angular/router';

import { CartComponent } from '../app/component/home/cart/cart/cart.component';
import { ProductComponent } from '../app/component/home/product/product/product.component';

const routes: Routes = [
	{ path: '', component: ProductComponent },
	{ path: 'products', component: ProductComponent },
	{ path: 'cart', component: CartComponent },
	{ path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);