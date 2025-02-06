import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * ScrapeConfigList is a list of ScrapeConfig
 */
export declare class ScrapeConfigList extends pulumi.CustomResource {
    /**
     * Get an existing ScrapeConfigList resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ScrapeConfigList;
    /**
     * Returns true if the given object is an instance of ScrapeConfigList.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ScrapeConfigList;
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    readonly apiVersion: pulumi.Output<"monitoring.coreos.com/v1alpha1">;
    /**
     * List of scrapeconfigs. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md
     */
    readonly items: pulumi.Output<outputs.monitoring.v1alpha1.ScrapeConfig[]>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    readonly kind: pulumi.Output<"ScrapeConfigList">;
    /**
     * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    readonly metadata: pulumi.Output<outputs.meta.v1.ListMeta>;
    /**
     * Create a ScrapeConfigList resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ScrapeConfigListArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ScrapeConfigList resource.
 */
export interface ScrapeConfigListArgs {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: pulumi.Input<"monitoring.coreos.com/v1alpha1">;
    /**
     * List of scrapeconfigs. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md
     */
    items: pulumi.Input<pulumi.Input<inputs.monitoring.v1alpha1.ScrapeConfig>[]>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: pulumi.Input<"ScrapeConfigList">;
    /**
     * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    metadata?: pulumi.Input<inputs.meta.v1.ListMeta>;
}
