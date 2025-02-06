import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The `ThanosRuler` custom resource definition (CRD) defines a desired [Thanos Ruler](https://github.com/thanos-io/thanos/blob/main/docs/components/rule.md) setup to run in a Kubernetes cluster.
 *
 * A `ThanosRuler` instance requires at least one compatible Prometheus API endpoint (either Thanos Querier or Prometheus services).
 *
 * The resource defines via label and namespace selectors which `PrometheusRule` objects should be associated to the deployed Thanos Ruler instances.
 */
export declare class ThanosRuler extends pulumi.CustomResource {
    /**
     * Get an existing ThanosRuler resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ThanosRuler;
    /**
     * Returns true if the given object is an instance of ThanosRuler.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ThanosRuler;
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    readonly apiVersion: pulumi.Output<"monitoring.coreos.com/v1">;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    readonly kind: pulumi.Output<"ThanosRuler">;
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    readonly metadata: pulumi.Output<outputs.meta.v1.ObjectMeta>;
    readonly spec: pulumi.Output<outputs.monitoring.v1.ThanosRulerSpec>;
    readonly status: pulumi.Output<outputs.monitoring.v1.ThanosRulerStatus>;
    /**
     * Create a ThanosRuler resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ThanosRulerArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ThanosRuler resource.
 */
export interface ThanosRulerArgs {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: pulumi.Input<"monitoring.coreos.com/v1">;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: pulumi.Input<"ThanosRuler">;
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
    spec?: pulumi.Input<inputs.monitoring.v1.ThanosRulerSpec>;
}
