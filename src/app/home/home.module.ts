import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './pages/home/home.component';
import {TranslateModule} from '@ngx-translate/core';
import { LanguageSwitchComponent } from './components/language-switch/language-switch.component';


@NgModule({
  declarations: [
    HomeComponent,
    LanguageSwitchComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ]
})
export class HomeModule {
}
