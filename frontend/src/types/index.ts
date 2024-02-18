export type item = {
  key: number,
  id: string;
  name: string;
};

export type container = {
  id: number;
  name: string;
  parent: string;
  containers: string[];
  items: item[];
};