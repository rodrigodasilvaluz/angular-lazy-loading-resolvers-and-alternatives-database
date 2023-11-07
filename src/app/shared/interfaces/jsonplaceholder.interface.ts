export interface JsonplaceholderInterface {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface ObsJsonplaceholderInterface {
  success?: JsonplaceholderInterface[];
  error?: string;
}
