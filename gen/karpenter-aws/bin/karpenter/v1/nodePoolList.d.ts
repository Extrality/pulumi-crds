import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * NodePoolList is a list of NodePool
 */
export declare class NodePoolList extends pulumi.CustomResource {
    /**
     * Get an existing NodePoolList resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NodePoolList;
    /**
     * Returns true if the given object is an instance of NodePoolList.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is NodePoolList;
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    readonly apiVersion: pulumi.Output<"karpenter.sh/v1">;
    /**
     * List of nodepools. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md
     */
    readonly items: pulumi.Output<outputs.karpenter.v1.NodePool[]>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    readonly kind: pulumi.Output<"NodePoolList">;
    /**
     * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    readonly metadata: pulumi.Output<outputs.meta.v1.ListMeta>;
    /**
     * Create a NodePoolList resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: NodePoolListArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a NodePoolList resource.
 */
export interface NodePoolListArgs {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: pulumi.Input<"karpenter.sh/v1">;
    /**
     * List of nodepools. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md
     */
    items: pulumi.Input<pulumi.Input<inputs.karpenter.v1.NodePool>[]>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: pulumi.Input<"NodePoolList">;
    /**
     * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    metadata?: pulumi.Input<inputs.meta.v1.ListMeta>;
}
