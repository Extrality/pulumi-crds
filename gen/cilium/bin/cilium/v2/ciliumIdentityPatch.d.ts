import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Patch resources are used to modify existing Kubernetes resources by using
 * Server-Side Apply updates. The name of the resource must be specified, but all other properties are optional. More than
 * one patch may be applied to the same resource, and a random FieldManager name will be used for each Patch resource.
 * Conflicts will result in an error by default, but can be forced using the "pulumi.com/patchForce" annotation. See the
 * [Server-Side Apply Docs](https://www.pulumi.com/registry/packages/kubernetes/how-to-guides/managing-resources-with-server-side-apply/) for
 * additional information about using Server-Side Apply to manage Kubernetes resources with Pulumi.
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
export declare class CiliumIdentityPatch extends pulumi.CustomResource {
    /**
     * Get an existing CiliumIdentityPatch resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CiliumIdentityPatch;
    /**
     * Returns true if the given object is an instance of CiliumIdentityPatch.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is CiliumIdentityPatch;
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
    readonly metadata: pulumi.Output<outputs.meta.v1.ObjectMetaPatch>;
    /**
     * SecurityLabels is the source-of-truth set of labels for this identity.
     */
    readonly "security-labels": pulumi.Output<{
        [key: string]: string;
    }>;
    /**
     * Create a CiliumIdentityPatch resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: CiliumIdentityPatchArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a CiliumIdentityPatch resource.
 */
export interface CiliumIdentityPatchArgs {
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
    metadata?: pulumi.Input<inputs.meta.v1.ObjectMetaPatch | undefined>;
    /**
     * SecurityLabels is the source-of-truth set of labels for this identity.
     */
    "security-labels"?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    } | undefined>;
}
//# sourceMappingURL=ciliumIdentityPatch.d.ts.map