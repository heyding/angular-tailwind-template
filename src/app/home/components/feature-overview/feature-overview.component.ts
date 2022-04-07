import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-feature-overview',
  templateUrl: './feature-overview.component.html',
  styleUrls: ['./feature-overview.component.css']
})

export class FeatureOverviewComponent implements OnInit {

  features: string[] | undefined;

  constructor() {
  }

  ngOnInit(): void {
    this.features = [
      'tailwind', 'routing', 'i18n', 'directory'
    ]
  }

}
