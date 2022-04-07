import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {TranslateModule} from '@ngx-translate/core';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent
  ],
    imports: [
        CommonModule,
        TranslateModule,
        RouterModule
    ]
})
export class CoreModule { }
