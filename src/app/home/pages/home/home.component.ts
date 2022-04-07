import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {selectUserInput} from './store/home.selectors';
import {setUserInput} from './store/home.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userInput$: Observable<string> | undefined;

  userInput: string = 'Initial';
  displayUserInput: boolean = false;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.userInput$ = this.store.select(selectUserInput);
  }

  storeUserInput() {
    this.displayUserInput = true;
    this.store.dispatch(setUserInput({userInput: this.userInput}));
  }
}
