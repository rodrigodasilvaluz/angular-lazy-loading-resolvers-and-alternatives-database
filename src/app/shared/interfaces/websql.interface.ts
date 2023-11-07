export interface WebsqlInterface {
  id: number;
  title: string;
}

export interface ObsWebsqlInterface {
  success?: WebsqlInterface[];
  error?: string;
}
