export { ProviderArgs } from "./provider";
export type Provider = import("./provider").Provider;
export declare const Provider: typeof import("./provider").Provider;
import * as postgresql from "./postgresql";
import * as types from "./types";
export { postgresql, types, };
