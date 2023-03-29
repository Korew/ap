export interface Columns {
  key: string;
  label: string;
  formatter?: (value: any) => string;
};

export interface People {
  id: number;
  name: string;
  amount: number;
  currency?: string;
};