import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { HomeSelectors } from './store/home.selectors';
import { HomeActions } from './store/home.actions';
import { FeatureOverviewComponent } from '../../components/feature-overview/feature-overview.component';
import { LanguageSwitchComponent } from '../../components/language-switch/language-switch.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule, FeatureOverviewComponent, LanguageSwitchComponent]
})
export class HomeComponent implements OnInit {
  private readonly store = inject(Store);

  userInput$!: Observable<string>;
  userInput = '';
  displayUserInput = false;

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
