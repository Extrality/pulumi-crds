import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * XListenerSet defines a set of additional listeners to attach to an existing Gateway.
 * This resource provides a mechanism to merge multiple listeners into a single Gateway.
 *
 * The parent Gateway must explicitly allow ListenerSet attachment through its
 * AllowedListeners configuration. By default, Gateways do not allow ListenerSet
 * attachment.
 *
 * Routes can attach to a ListenerSet by specifying it as a parentRef, and can
 * optionally target specific listeners using the sectionName field.
 *
 * Policy Attachment:
 * - Policies that attach to a ListenerSet apply to all listeners defined in that resource
 * - Policies do not impact listeners in the parent Gateway
 * - Different ListenerSets attached to the same Gateway can have different policies
 * - If an implementation cannot apply a policy to specific listeners, it should reject the policy
 *
 * ReferenceGrant Semantics:
 * - ReferenceGrants applied to a Gateway are not inherited by child ListenerSets
 * - ReferenceGrants applied to a ListenerSet do not grant permission to the parent Gateway's listeners
 * - A ListenerSet can reference secrets/backends in its own namespace without a ReferenceGrant
 *
 * Gateway Integration:
 * - The parent Gateway's status will include an "AttachedListenerSets" condition
 * - This condition will be:
 *   - True: when AllowedListeners is set and at least one child ListenerSet is attached
 *   - False: when AllowedListeners is set but no valid listeners are attached, or when AllowedListeners is not set or false
 *   - Unknown: when no AllowedListeners config is present
 */
export declare class XListenerSet extends pulumi.CustomResource {
    /**
     * Get an existing XListenerSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): XListenerSet;
    /**
     * Returns true if the given object is an instance of XListenerSet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is XListenerSet;
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    readonly apiVersion: pulumi.Output<"gateway.networking.x-k8s.io/v1alpha1">;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    readonly kind: pulumi.Output<"XListenerSet">;
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    readonly metadata: pulumi.Output<outputs.meta.v1.ObjectMeta>;
    readonly spec: pulumi.Output<outputs.gateway.v1alpha1.XListenerSetSpec>;
    readonly status: pulumi.Output<outputs.gateway.v1alpha1.XListenerSetStatus>;
    /**
     * Create a XListenerSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: XListenerSetArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a XListenerSet resource.
 */
export interface XListenerSetArgs {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: pulumi.Input<"gateway.networking.x-k8s.io/v1alpha1">;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: pulumi.Input<"XListenerSet">;
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
    spec?: pulumi.Input<inputs.gateway.v1alpha1.XListenerSetSpec>;
}
