import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * CiliumEndpointSlice contains a group of CoreCiliumendpoints.
 */
export declare class CiliumEndpointSlice extends pulumi.CustomResource {
    /**
     * Get an existing CiliumEndpointSlice resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CiliumEndpointSlice;
    /**
     * Returns true if the given object is an instance of CiliumEndpointSlice.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is CiliumEndpointSlice;
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    readonly apiVersion: pulumi.Output<"cilium.io/v2alpha1">;
    /**
     * Endpoints is a list of coreCEPs packed in a CiliumEndpointSlice
     */
    readonly endpoints: pulumi.Output<outputs.cilium.v2alpha1.CiliumEndpointSliceEndpoints[]>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    readonly kind: pulumi.Output<"CiliumEndpointSlice">;
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    readonly metadata: pulumi.Output<outputs.meta.v1.ObjectMeta>;
    /**
     * Namespace indicate as CiliumEndpointSlice namespace.
     * All the CiliumEndpoints within the same namespace are put together
     * in CiliumEndpointSlice.
     */
    readonly namespace: pulumi.Output<string>;
    /**
     * Create a CiliumEndpointSlice resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: CiliumEndpointSliceArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a CiliumEndpointSlice resource.
 */
export interface CiliumEndpointSliceArgs {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: pulumi.Input<"cilium.io/v2alpha1" | undefined>;
    /**
     * Endpoints is a list of coreCEPs packed in a CiliumEndpointSlice
     */
    endpoints?: pulumi.Input<pulumi.Input<inputs.cilium.v2alpha1.CiliumEndpointSliceEndpoints>[] | undefined>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: pulumi.Input<"CiliumEndpointSlice" | undefined>;
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta | undefined>;
    /**
     * Namespace indicate as CiliumEndpointSlice namespace.
     * All the CiliumEndpoints within the same namespace are put together
     * in CiliumEndpointSlice.
     */
    namespace?: pulumi.Input<string | undefined>;
}
//# sourceMappingURL=ciliumEndpointSlice.d.ts.map