import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {HomeSelectors} from './store/home.selectors';
import {HomeActions} from './store/home.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userInput$: Observable<string> | undefined;
  userInput: string | undefined;
  displayUserInput: boolean = false;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.userInput$ = this.store.select(HomeSelectors.selectUserInput);
  }

  storeUserInput(userInput: string) {
    this.displayUserInput = true;
    this.store.dispatch(HomeActions.setUserInput({userInput}));
    this.userInput = '';
  }

  resetStore() {
    this.displayUserInput = false;
    this.store.dispatch(HomeActions.setUserInput({userInput: 'Hello world!'}));
    this.userInput = '';
  }

  hideUserInput(): void {
    this.displayUserInput = false;
  }
}
