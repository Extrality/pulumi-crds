import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * CiliumIdentity is a CRD that represents an identity managed by Cilium.
 * It is intended as a backing store for identity allocation, acting as the
 * global coordination backend, and can be used in place of a KVStore (such as
 * etcd).
 * The name of the CRD is the numeric identity and the labels on the CRD object
 * are the kubernetes sourced labels seen by cilium. This is currently the
 * only label source possible when running under kubernetes. Non-kubernetes
 * labels are filtered but all labels, from all sources, are places in the
 * SecurityLabels field. These also include the source and are used to define
 * the identity.
 * The labels under metav1.ObjectMeta can be used when searching for
 * CiliumIdentity instances that include particular labels. This can be done
 * with invocations such as:
 *
 *     kubectl get ciliumid -l 'foo=bar'
 */
export declare class CiliumIdentity extends pulumi.CustomResource {
    /**
     * Get an existing CiliumIdentity resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CiliumIdentity;
    /**
     * Returns true if the given object is an instance of CiliumIdentity.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is CiliumIdentity;
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    readonly apiVersion: pulumi.Output<"cilium.io/v2">;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    readonly kind: pulumi.Output<"CiliumIdentity">;
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    readonly metadata: pulumi.Output<outputs.meta.v1.ObjectMeta>;
    /**
     * SecurityLabels is the source-of-truth set of labels for this identity.
     */
    readonly "security-labels": pulumi.Output<{
        [key: string]: string;
    }>;
    /**
     * Create a CiliumIdentity resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: CiliumIdentityArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a CiliumIdentity resource.
 */
export interface CiliumIdentityArgs {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: pulumi.Input<"cilium.io/v2" | undefined>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: pulumi.Input<"CiliumIdentity" | undefined>;
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta | undefined>;
    /**
     * SecurityLabels is the source-of-truth set of labels for this identity.
     */
    "security-labels"?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    } | undefined>;
}
//# sourceMappingURL=ciliumIdentity.d.ts.map