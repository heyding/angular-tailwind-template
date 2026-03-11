import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { BrandingService } from '../../../../shared/services/branding.service';
import { FeatureOverviewComponent } from '../../components/feature-overview/feature-overview.component';
import { LanguageSwitchComponent } from '../../components/language-switch/language-switch.component';
import { HomeActions } from './store/home.actions';
import { HomeSelectors } from './store/home.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    FeatureOverviewComponent,
    LanguageSwitchComponent,
  ],
})
export class HomeComponent implements OnInit {
  private readonly store = inject(Store);
  private readonly brandingService = inject(BrandingService);

  userInput$!: Observable<string>;
  userInput = '';
  displayUserInput = false;

  get brandDesign() {
    return this.brandingService.brand.design;
  }

  ngOnInit(): void {
    this.userInput$ = this.store.select(HomeSelectors.selectUserInput);
  }

  storeUserInput(userInput: string): void {
    this.displayUserInput = true;
    this.store.dispatch(HomeActions.setUserInput({ userInput }));
    this.userInput = '';
  }

  resetStore(): void {
    this.displayUserInput = false;
    this.store.dispatch(HomeActions.setUserInput({ userInput: 'Hello world!' }));
    this.userInput = '';
  }

  hideUserInput(): void {
    this.displayUserInput = false;
  }
}
