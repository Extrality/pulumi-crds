"use strict";
// *** WARNING: this file was generated by crd2pulumi. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterImageCatalog = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("../../utilities");
/**
 * ClusterImageCatalog is the Schema for the clusterimagecatalogs API
 */
class ClusterImageCatalog extends pulumi.CustomResource {
    /**
     * Get an existing ClusterImageCatalog resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, opts) {
        return new ClusterImageCatalog(name, undefined, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of ClusterImageCatalog.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ClusterImageCatalog.__pulumiType;
    }
    /**
     * Create a ClusterImageCatalog resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name, args, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (!opts.id) {
            resourceInputs["apiVersion"] = "postgresql.cnpg.io/v1";
            resourceInputs["kind"] = "ClusterImageCatalog";
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["spec"] = args ? args.spec : undefined;
        }
        else {
            resourceInputs["apiVersion"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["metadata"] = undefined /*out*/;
            resourceInputs["spec"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ClusterImageCatalog.__pulumiType, name, resourceInputs, opts);
    }
}
exports.ClusterImageCatalog = ClusterImageCatalog;
/** @internal */
ClusterImageCatalog.__pulumiType = 'kubernetes:postgresql.cnpg.io/v1:ClusterImageCatalog';
//# sourceMappingURL=clusterImageCatalog.js.map