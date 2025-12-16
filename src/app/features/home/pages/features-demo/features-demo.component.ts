import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { TableComponent } from '../../../../shared/components/table/table.component';
import { TableColumn, TableConfig } from '../../../../shared/models/table.model';
import { ApiService } from '../../../../core/services/api.service';
import { User } from '../../../../core/models/api.model';
import { TruncatePipe } from '../../../../shared/pipes/truncate.pipe';
import { FormatNumberPipe } from '../../../../shared/pipes/format-number.pipe';
import { TimeAgoPipe } from '../../../../shared/pipes/time-ago.pipe';
import { HighlightPipe } from '../../../../shared/pipes/highlight.pipe';
import { HighlightDirective } from '../../../../shared/directives/highlight.directive';
import { TooltipDirective } from '../../../../shared/directives/tooltip.directive';
import { ClickOutsideDirective } from '../../../../shared/directives/click-outside.directive';

@Component({
  selector: 'app-features-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    TableComponent,
    TruncatePipe,
    FormatNumberPipe,
    TimeAgoPipe,
    HighlightPipe,
    HighlightDirective,
    TooltipDirective,
    ClickOutsideDirective,
  ],
  templateUrl: './features-demo.component.html',
  styleUrls: ['./features-demo.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class FeaturesDemoComponent implements OnInit {
  users: User[] = [];
  loading = false;
  searchTerm = '';
  showDropdown = false;

  columns: TableColumn<User>[] = [
    { key: 'id', label: 'ID', sortable: true, width: '80px' },
    { key: 'name', label: 'Name', sortable: true, filterable: true },
    { key: 'email', label: 'Email', sortable: true, filterable: true },
    { key: 'website', label: 'Website', sortable: false, filterable: true },
  ];

  tableConfig: TableConfig = {
    pagination: {
      enabled: true,
      pageSize: 5,
      pageSizeOptions: [5, 10, 25],
    },
    sorting: {
      enabled: true,
      defaultColumn: 'name',
      defaultDirection: 'asc',
    },
    filtering: {
      enabled: true,
      placeholder: 'Search users...',
    },
    selection: {
      enabled: true,
      multiple: true,
    },
  };

  // Demo data for pipes
  longText =
    'This is a very long text that will be truncated using our custom pipe to demonstrate how it works with ellipsis at the end.';
  largeNumber = 1234567.89;
  pastDate = new Date(Date.now() - 2 * 60 * 60 * 1000); // 2 hours ago

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.loading = true;
    this.apiService.getUsers().subscribe({
      next: users => {
        this.users = users;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  onSelectionChange(selected: User[]): void {
    console.log('Selected users:', selected);
  }

  toggleDropdown(): void {
    this.showDropdown = !this.showDropdown;
  }

  closeDropdown(): void {
    this.showDropdown = false;
  }
}
