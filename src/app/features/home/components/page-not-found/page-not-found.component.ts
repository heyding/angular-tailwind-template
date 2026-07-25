import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css',
  standalone: true,
  imports: [TranslatePipe],
})
export class PageNotFoundComponent {}
