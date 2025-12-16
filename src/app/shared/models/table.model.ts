export interface TableColumn<T = any> {
  key: keyof T | string;
  label: string;
  sortable?: boolean;
  filterable?: boolean;
  width?: string;
  align?: 'left' | 'center' | 'right';
  customTemplate?: boolean;
}

export interface TableConfig {
  pagination?: {
    enabled: boolean;
    pageSize: number;
    pageSizeOptions?: number[];
  };
  sorting?: {
    enabled: boolean;
    defaultColumn?: string;
    defaultDirection?: 'asc' | 'desc';
  };
  filtering?: {
    enabled: boolean;
    placeholder?: string;
  };
  selection?: {
    enabled: boolean;
    multiple?: boolean;
  };
}

export type SortDirection = 'asc' | 'desc' | null;

export interface SortEvent {
  column: string;
  direction: SortDirection;
}

export interface PaginationEvent {
  pageIndex: number;
  pageSize: number;
}
