import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos/productos.component';
import { ProveedorProductosComponent } from './proveedor-productos/proveedor-productos.component';



@NgModule({
  declarations: [
    ProductosComponent,
    ProveedorProductosComponent
  ],
  exports : [
    ProductosComponent,
    ProveedorProductosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductosModule { }
