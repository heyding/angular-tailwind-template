import {Component, OnInit} from '@angular/core';
import {map, Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import * as HomeActions from './store/home.actions';
import * as fromApp from '../../../app.reducer'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userInput: string | undefined;
  userInputSubscription: Subscription | undefined;
  displayUserInput: boolean = false;

  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit(): void {
    this.userInputSubscription = this.store.select('home').pipe(map(homeState => homeState.userInput)).subscribe((userInput: string) => {
      this.userInput = userInput;
    });
  }

  storeUserInput() {
    this.displayUserInput = true;
    this.store.dispatch(new HomeActions.SetUserInput(this.userInput!));
    this.userInputSubscription?.unsubscribe();
  }

  hideUserInput(): void {
    this.displayUserInput = false;
  }
}
