type Method = 'POST' | 'GET' | 'PUT' | 'DELETE'
import {RequestHandler} from 'express'
export interface Route{
  path: string;
  method: Method;
  middleware: RequestHandler[];
}