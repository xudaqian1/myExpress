export interface IConfig {
  port: number;
  mongo: {
    host: string;
    port: number;
    name: string;
  }
  session: {
    key: string;
    secret: string;
  }
}