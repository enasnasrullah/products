import { pathnames } from "./pathNames";
import * as LazyComponent from "../utils/lazyLoading";

export interface IRoute {
  path: string;
  element: any;
}

export const routes: IRoute[] = [
  { path: pathnames.CATEGORIES, element: <LazyComponent.Categories /> },
];
