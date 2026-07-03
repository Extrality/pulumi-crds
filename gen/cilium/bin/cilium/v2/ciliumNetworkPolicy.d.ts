import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * CiliumNetworkPolicy is a Kubernetes third-party resource with an extended
 * version of NetworkPolicy.
 */
export declare class CiliumNetworkPolicy extends pulumi.CustomResource {
    /**
     * Get an existing CiliumNetworkPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CiliumNetworkPolicy;
    /**
     * Returns true if the given object is an instance of CiliumNetworkPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is CiliumNetworkPolicy;
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    readonly apiVersion: pulumi.Output<"cilium.io/v2">;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    readonly kind: pulumi.Output<"CiliumNetworkPolicy">;
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    readonly metadata: pulumi.Output<outputs.meta.v1.ObjectMeta>;
    readonly spec: pulumi.Output<outputs.cilium.v2.CiliumNetworkPolicySpec>;
    /**
     * Specs is a list of desired Cilium specific rule specification.
     */
    readonly specs: pulumi.Output<outputs.cilium.v2.CiliumNetworkPolicySpecs[]>;
    readonly status: pulumi.Output<outputs.cilium.v2.CiliumNetworkPolicyStatus>;
    /**
     * Create a CiliumNetworkPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: CiliumNetworkPolicyArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a CiliumNetworkPolicy resource.
 */
export interface CiliumNetworkPolicyArgs {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: pulumi.Input<"cilium.io/v2" | undefined>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: pulumi.Input<"CiliumNetworkPolicy" | undefined>;
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta | undefined>;
    spec?: pulumi.Input<inputs.cilium.v2.CiliumNetworkPolicySpec | undefined>;
    /**
     * Specs is a list of desired Cilium specific rule specification.
     */
    specs?: pulumi.Input<pulumi.Input<inputs.cilium.v2.CiliumNetworkPolicySpecs>[] | undefined>;
}
//# sourceMappingURL=ciliumNetworkPolicy.d.ts.map