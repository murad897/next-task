export interface RegisterProps {
  name?: string;
  email: string;
  password: string;
}
export interface ListItemProps {
  cost: number;
  description: string;
  familyId: number;
  id: number;
  imageUrl: string;
  locationId: number;
  name: string;
  quantity: number;
}
export interface ListItemComponentProps {
  key: number | string;
  item: ListItemProps;
}
export interface ProductProps {
  product: ListItemProps;
}
export interface ListProps {
  list?: ListItemProps[] | null;
  message?: string;
}

export interface ProductsDataProps {
  context: any;
  limit: number;
  page: number;
}

export interface ProductDataProps {
  context: any;
  id: number;
}

export type ContextInterface = {
  data: ListItemProps[];
  paginationActive: boolean;
  prev: () => void;
  next: () => void;
};
