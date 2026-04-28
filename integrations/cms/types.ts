export type WixDataItem = {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  [key: string]: unknown;
};

export type WixDataQueryResult = {
  items: WixDataItem[];
  totalCount?: number;
};
