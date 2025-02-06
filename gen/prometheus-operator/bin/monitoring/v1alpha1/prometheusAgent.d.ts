import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The `PrometheusAgent` custom resource definition (CRD) defines a desired [Prometheus Agent](https://prometheus.io/blog/2021/11/16/agent/) setup to run in a Kubernetes cluster.
 *
 * The CRD is very similar to the `Prometheus` CRD except for features which aren't available in agent mode like rule evaluation, persistent storage and Thanos sidecar.
 */
export declare class PrometheusAgent extends pulumi.CustomResource {
    /**
     * Get an existing PrometheusAgent resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PrometheusAgent;
    /**
     * Returns true if the given object is an instance of PrometheusAgent.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is PrometheusAgent;
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    readonly apiVersion: pulumi.Output<"monitoring.coreos.com/v1alpha1">;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    readonly kind: pulumi.Output<"PrometheusAgent">;
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    readonly metadata: pulumi.Output<outputs.meta.v1.ObjectMeta>;
    readonly spec: pulumi.Output<outputs.monitoring.v1alpha1.PrometheusAgentSpec>;
    readonly status: pulumi.Output<outputs.monitoring.v1alpha1.PrometheusAgentStatus>;
    /**
     * Create a PrometheusAgent resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: PrometheusAgentArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a PrometheusAgent resource.
 */
export interface PrometheusAgentArgs {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: pulumi.Input<"monitoring.coreos.com/v1alpha1">;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: pulumi.Input<"PrometheusAgent">;
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
    spec?: pulumi.Input<inputs.monitoring.v1alpha1.PrometheusAgentSpec>;
}
