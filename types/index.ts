export interface RegisterProps {
  name?: string;
  email: string;
  password: string | number;
}
export interface listItem {
  cost: number;
  description: string;
  familyId: number;
  id: number;
  imageUrl: string;
  locationId: number;
  name: string;
  quantity: number;
}
export interface listItemComponentProps {
  key: number | string;
  item: listItem;
}
export interface ProductProps {
  product: listItem;
}
export interface listProps {
  list: listItem[];
}

export interface productsDataProps {
  context: any;
  limit: number;
  offset: number;
}

export interface productDataProps {
  context: any;
  id: number;
}

export type ContextInterface = {
  data: listItem[];
  paginationActive: boolean;
  prevHandler: () => void;
  nextHandler: () => void;
}
