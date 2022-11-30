export interface RegisterProps {
  name?: string;
  email: string;
  password: string | number;
}

export interface listItem {
  cost: number;
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
export interface listProps {
  list: listItem[];
}
