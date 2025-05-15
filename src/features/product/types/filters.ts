export interface FilterItem {
  label: string;
  value: string;
}

export interface IFilters {
  collections: FilterItem[];
  categories: FilterItem[];
  colors: FilterItem[];
}
