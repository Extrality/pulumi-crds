"use strict";
// *** WARNING: this file was generated by crd2pulumi. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.types = exports.postgresql = exports.Provider = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
exports.Provider = null;
utilities.lazyLoad(exports, ["Provider"], () => require("./provider"));
// Export sub-modules:
const postgresql = require("./postgresql");
exports.postgresql = postgresql;
const types = require("./types");
exports.types = types;
pulumi.runtime.registerResourcePackage("cloudnative-pg", {
    version: utilities.getVersion(),
    constructProvider: (name, type, urn) => {
        if (type !== "pulumi:providers:kubernetes") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new exports.Provider(name, undefined, { urn });
    },
});
//# sourceMappingURL=index.js.map