export interface JsonserverInterface {
  id: number;
  name: string;
  type: string;
  age: number;
}

export interface ObsJsonserverInterface {
  success?: JsonserverInterface[];
  error?: string;
}
