import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * FederationList is a list of Federation
 */
export declare class FederationList extends pulumi.CustomResource {
    /**
     * Get an existing FederationList resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): FederationList;
    /**
     * Returns true if the given object is an instance of FederationList.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is FederationList;
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    readonly apiVersion: pulumi.Output<"rabbitmq.com/v1beta1">;
    /**
     * List of federations. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md
     */
    readonly items: pulumi.Output<outputs.rabbitmq.v1beta1.Federation[]>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    readonly kind: pulumi.Output<"FederationList">;
    /**
     * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    readonly metadata: pulumi.Output<outputs.meta.v1.ListMeta>;
    /**
     * Create a FederationList resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: FederationListArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a FederationList resource.
 */
export interface FederationListArgs {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: pulumi.Input<"rabbitmq.com/v1beta1">;
    /**
     * List of federations. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md
     */
    items: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.Federation>[]>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: pulumi.Input<"FederationList">;
    /**
     * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    metadata?: pulumi.Input<inputs.meta.v1.ListMeta>;
}
