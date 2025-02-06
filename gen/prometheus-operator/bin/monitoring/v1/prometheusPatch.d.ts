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
 * The `Prometheus` custom resource definition (CRD) defines a desired [Prometheus](https://prometheus.io/docs/prometheus) setup to run in a Kubernetes cluster. It allows to specify many options such as the number of replicas, persistent storage, and Alertmanagers where firing alerts should be sent and many more.
 *
 * For each `Prometheus` resource, the Operator deploys one or several `StatefulSet` objects in the same namespace. The number of StatefulSets is equal to the number of shards which is 1 by default.
 *
 * The resource defines via label and namespace selectors which `ServiceMonitor`, `PodMonitor`, `Probe` and `PrometheusRule` objects should be associated to the deployed Prometheus instances.
 *
 * The Operator continuously reconciles the scrape and rules configuration and a sidecar container running in the Prometheus pods triggers a reload of the configuration when needed.
 */
export declare class PrometheusPatch extends pulumi.CustomResource {
    /**
     * Get an existing PrometheusPatch resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PrometheusPatch;
    /**
     * Returns true if the given object is an instance of PrometheusPatch.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is PrometheusPatch;
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    readonly apiVersion: pulumi.Output<"monitoring.coreos.com/v1">;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    readonly kind: pulumi.Output<"Prometheus">;
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    readonly metadata: pulumi.Output<outputs.meta.v1.ObjectMetaPatch>;
    readonly spec: pulumi.Output<outputs.monitoring.v1.PrometheusSpecPatch>;
    readonly status: pulumi.Output<outputs.monitoring.v1.PrometheusStatusPatch>;
    /**
     * Create a PrometheusPatch resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: PrometheusPatchArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a PrometheusPatch resource.
 */
export interface PrometheusPatchArgs {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: pulumi.Input<"monitoring.coreos.com/v1">;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: pulumi.Input<"Prometheus">;
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    metadata?: pulumi.Input<inputs.meta.v1.ObjectMetaPatch>;
    spec?: pulumi.Input<inputs.monitoring.v1.PrometheusSpecPatch>;
}
