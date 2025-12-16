import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import {
  TableColumn,
  TableConfig,
  SortDirection,
  SortEvent,
  PaginationEvent,
} from '../../models/table.model';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent<T = any> implements OnChanges {
  @Input() columns: TableColumn<T>[] = [];
  @Input() data: T[] = [];
  @Input() config: TableConfig = {
    pagination: { enabled: true, pageSize: 10, pageSizeOptions: [5, 10, 25, 50] },
    sorting: { enabled: true },
    filtering: { enabled: true, placeholder: 'Search...' },
    selection: { enabled: false, multiple: false },
  };
  @Input() loading = false;

  @Output() sortChange = new EventEmitter<SortEvent>();
  @Output() pageChange = new EventEmitter<PaginationEvent>();
  @Output() filterChange = new EventEmitter<string>();
  @Output() selectionChange = new EventEmitter<T[]>();

  // Math for template
  protected readonly Math = Math;

  // Internal state
  filteredData: T[] = [];
  paginatedData: T[] = [];
  currentPage = 0;
  pageSize = 10;
  totalPages = 0;
  sortColumn: string | null = null;
  sortDirection: SortDirection = null;
  filterText = '';
  selectedRows = new Set<T>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] || changes['config']) {
      this.pageSize = this.config.pagination?.pageSize || 10;
      this.applyFilters();
    }
  }

  onSort(column: TableColumn<T>): void {
    if (!column.sortable || !this.config.sorting?.enabled) {
      return;
    }

    const columnKey = String(column.key);

    if (this.sortColumn === columnKey) {
      // Cycle through: asc -> desc -> null
      if (this.sortDirection === 'asc') {
        this.sortDirection = 'desc';
      } else if (this.sortDirection === 'desc') {
        this.sortDirection = null;
        this.sortColumn = null;
      }
    } else {
      this.sortColumn = columnKey;
      this.sortDirection = 'asc';
    }

    this.sortChange.emit({
      column: this.sortColumn || '',
      direction: this.sortDirection,
    });

    this.applyFilters();
  }

  onFilter(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.filterText = input.value.toLowerCase();
    this.currentPage = 0;
    this.filterChange.emit(this.filterText);
    this.applyFilters();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.updatePagination();
    this.pageChange.emit({
      pageIndex: this.currentPage,
      pageSize: this.pageSize,
    });
  }

  onPageSizeChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.pageSize = parseInt(select.value, 10);
    this.currentPage = 0;
    this.applyFilters();
  }

  toggleRowSelection(row: T): void {
    if (!this.config.selection?.enabled) {
      return;
    }

    if (this.config.selection.multiple) {
      if (this.selectedRows.has(row)) {
        this.selectedRows.delete(row);
      } else {
        this.selectedRows.add(row);
      }
    } else {
      this.selectedRows.clear();
      this.selectedRows.add(row);
    }

    this.selectionChange.emit(Array.from(this.selectedRows));
  }

  isRowSelected(row: T): boolean {
    return this.selectedRows.has(row);
  }

  private applyFilters(): void {
    let result = [...this.data];

    // Apply text filter
    if (this.filterText && this.config.filtering?.enabled) {
      result = result.filter(item => {
        return this.columns.some(column => {
          if (!column.filterable) {
            return false;
          }
          const value = this.getNestedValue(item, String(column.key));
          return String(value).toLowerCase().includes(this.filterText);
        });
      });
    }

    // Apply sorting
    if (this.sortColumn && this.sortDirection) {
      result.sort((a, b) => {
        const aVal = this.getNestedValue(a, this.sortColumn!);
        const bVal = this.getNestedValue(b, this.sortColumn!);

        let comparison = 0;
        if (aVal > bVal) {
          comparison = 1;
        } else if (aVal < bVal) {
          comparison = -1;
        }

        return this.sortDirection === 'asc' ? comparison : -comparison;
      });
    }

    this.filteredData = result;
    this.totalPages = Math.ceil(this.filteredData.length / this.pageSize);
    this.updatePagination();
  }

  private updatePagination(): void {
    if (!this.config.pagination?.enabled) {
      this.paginatedData = this.filteredData;
      return;
    }

    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedData = this.filteredData.slice(start, end);
  }

  private getNestedValue(obj: any, path: string): any {
    return path.split('.').reduce((current, prop) => current?.[prop], obj);
  }

  getCellValue(row: T, column: TableColumn<T>): any {
    return this.getNestedValue(row, String(column.key));
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i);
  }

  get showingFrom(): number {
    return this.filteredData.length === 0 ? 0 : this.currentPage * this.pageSize + 1;
  }

  get showingTo(): number {
    return Math.min((this.currentPage + 1) * this.pageSize, this.filteredData.length);
  }
}
