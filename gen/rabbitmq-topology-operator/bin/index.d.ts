export { ProviderArgs } from "./provider";
export type Provider = import("./provider").Provider;
export declare const Provider: typeof import("./provider").Provider;
import * as rabbitmq from "./rabbitmq";
import * as types from "./types";
export { rabbitmq, types, };
