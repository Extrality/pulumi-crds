"use strict";
// *** WARNING: this file was generated by crd2pulumi. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpiceDBClusterPatch = exports.SpiceDBClusterList = exports.SpiceDBCluster = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("../../utilities");
exports.SpiceDBCluster = null;
utilities.lazyLoad(exports, ["SpiceDBCluster"], () => require("./spiceDBCluster"));
exports.SpiceDBClusterList = null;
utilities.lazyLoad(exports, ["SpiceDBClusterList"], () => require("./spiceDBClusterList"));
exports.SpiceDBClusterPatch = null;
utilities.lazyLoad(exports, ["SpiceDBClusterPatch"], () => require("./spiceDBClusterPatch"));
const _module = {
    version: utilities.getVersion(),
    construct: (name, type, urn) => {
        switch (type) {
            case "kubernetes:authzed.com/v1alpha1:SpiceDBCluster":
                return new exports.SpiceDBCluster(name, undefined, { urn });
            case "kubernetes:authzed.com/v1alpha1:SpiceDBClusterList":
                return new exports.SpiceDBClusterList(name, undefined, { urn });
            case "kubernetes:authzed.com/v1alpha1:SpiceDBClusterPatch":
                return new exports.SpiceDBClusterPatch(name, undefined, { urn });
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("spicedb-operator", "authzed.com/v1alpha1", _module);
//# sourceMappingURL=index.js.map