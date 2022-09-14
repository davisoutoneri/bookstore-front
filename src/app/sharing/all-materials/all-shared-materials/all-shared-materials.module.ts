import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class AllSharedMaterialsModule { }
