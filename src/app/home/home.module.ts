import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './pages/home/home.component';
import {TranslateModule} from '@ngx-translate/core';
import { LanguageSwitchComponent } from './components/language-switch/language-switch.component';
import { AboutComponent } from './pages/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {RouterModule} from '@angular/router';
import { FeatureOverviewComponent } from './components/feature-overview/feature-overview.component';


@NgModule({
  declarations: [
    HomeComponent,
    LanguageSwitchComponent,
    AboutComponent,
    PageNotFoundComponent,
    FeatureOverviewComponent
  ],
  exports: [
    HomeComponent
  ],
    imports: [
        CommonModule,
        TranslateModule,
        RouterModule
    ]
})
export class HomeModule {
}
