import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
export declare namespace meta {
    namespace v1 {
        /**
         * ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
         */
        interface ListMeta {
            /**
             * continue may be set if the user set a limit on the number of items returned, and indicates that the server has more data available. The value is opaque and may be used to issue another request to the endpoint that served this list to retrieve the next set of available objects. Continuing a consistent list may not be possible if the server configuration has changed or more than a few minutes have passed. The resourceVersion field returned when using this continue value will be identical to the value in the first response, unless you have received this token from an error message.
             */
            continue?: pulumi.Input<string>;
            /**
             * remainingItemCount is the number of subsequent items in the list which are not included in this list response. If the list request contained label or field selectors, then the number of remaining items is unknown and the field will be left unset and omitted during serialization. If the list is complete (either because it is not chunking or because this is the last chunk), then there are no more remaining items and this field will be left unset and omitted during serialization. Servers older than v1.15 do not set this field. The intended use of the remainingItemCount is *estimating* the size of a collection. Clients should not rely on the remainingItemCount to be set or to be exact.
             */
            remainingItemCount?: pulumi.Input<number>;
            /**
             * String that identifies the server's internal version of this object that can be used by clients to determine when objects have changed. Value must be treated as opaque by clients and passed unmodified back to the server. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
             */
            resourceVersion?: pulumi.Input<string>;
            /**
             * Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.
             */
            selfLink?: pulumi.Input<string>;
        }
        /**
         * ManagedFieldsEntry is a workflow-id, a FieldSet and the group version of the resource that the fieldset applies to.
         */
        interface ManagedFieldsEntry {
            /**
             * APIVersion defines the version of this resource that this field set applies to. The format is "group/version" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted.
             */
            apiVersion?: pulumi.Input<string>;
            /**
             * FieldsType is the discriminator for the different fields format and version. There is currently only one possible value: "FieldsV1"
             */
            fieldsType?: pulumi.Input<string>;
            /**
             * FieldsV1 holds the first JSON version format as described in the "FieldsV1" type.
             */
            fieldsV1?: any;
            /**
             * Manager is an identifier of the workflow managing these fields.
             */
            manager?: pulumi.Input<string>;
            /**
             * Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are 'Apply' and 'Update'.
             */
            operation?: pulumi.Input<string>;
            /**
             * Subresource is the name of the subresource used to update that object, or empty string if the object was updated through the main resource. The value of this field is used to distinguish between managers, even if they share the same name. For example, a status update will be distinct from a regular update using the same manager name. Note that the APIVersion field is not related to the Subresource field and it always corresponds to the version of the main resource.
             */
            subresource?: pulumi.Input<string>;
            /**
             * Time is the timestamp of when the ManagedFields entry was added. The timestamp will also be updated if a field is added, the manager changes any of the owned fields value or removes a field. The timestamp does not update when a field is removed from the entry because another manager took it over.
             */
            time?: pulumi.Input<string>;
        }
        /**
         * ManagedFieldsEntry is a workflow-id, a FieldSet and the group version of the resource that the fieldset applies to.
         */
        interface ManagedFieldsEntryPatch {
            /**
             * APIVersion defines the version of this resource that this field set applies to. The format is "group/version" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted.
             */
            apiVersion?: pulumi.Input<string>;
            /**
             * FieldsType is the discriminator for the different fields format and version. There is currently only one possible value: "FieldsV1"
             */
            fieldsType?: pulumi.Input<string>;
            /**
             * FieldsV1 holds the first JSON version format as described in the "FieldsV1" type.
             */
            fieldsV1?: any;
            /**
             * Manager is an identifier of the workflow managing these fields.
             */
            manager?: pulumi.Input<string>;
            /**
             * Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are 'Apply' and 'Update'.
             */
            operation?: pulumi.Input<string>;
            /**
             * Subresource is the name of the subresource used to update that object, or empty string if the object was updated through the main resource. The value of this field is used to distinguish between managers, even if they share the same name. For example, a status update will be distinct from a regular update using the same manager name. Note that the APIVersion field is not related to the Subresource field and it always corresponds to the version of the main resource.
             */
            subresource?: pulumi.Input<string>;
            /**
             * Time is the timestamp of when the ManagedFields entry was added. The timestamp will also be updated if a field is added, the manager changes any of the owned fields value or removes a field. The timestamp does not update when a field is removed from the entry because another manager took it over.
             */
            time?: pulumi.Input<string>;
        }
        /**
         * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
         */
        interface ObjectMeta {
            /**
             * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
             */
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC.
             *
             * Populated by the system. Read-only. Null for lists. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            creationTimestamp?: pulumi.Input<string>;
            /**
             * Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.
             */
            deletionGracePeriodSeconds?: pulumi.Input<number>;
            /**
             * DeletionTimestamp is RFC 3339 date and time at which this resource will be deleted. This field is set by the server when a graceful deletion is requested by the user, and is not directly settable by a client. The resource is expected to be deleted (no longer visible from resource lists, and not reachable by name) after the time in this field, once the finalizers list is empty. As long as the finalizers list contains items, deletion is blocked. Once the deletionTimestamp is set, this value may not be unset or be set further into the future, although it may be shortened or the resource may be deleted prior to this time. For example, a user may request that a pod is deleted in 30 seconds. The Kubelet will react by sending a graceful termination signal to the containers in the pod. After that 30 seconds, the Kubelet will send a hard termination signal (SIGKILL) to the container and after cleanup, remove the pod from the API. In the presence of network partitions, this object may still exist after this timestamp, until an administrator or automated process can determine the resource is fully terminated. If not set, graceful deletion of the object has not been requested.
             *
             * Populated by the system when a graceful deletion is requested. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            deletionTimestamp?: pulumi.Input<string>;
            /**
             * Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. Finalizers may be processed and removed in any order.  Order is NOT enforced because it introduces significant risk of stuck finalizers. finalizers is a shared field, any actor with permission can reorder it. If the finalizer list is processed in order, then this can lead to a situation in which the component responsible for the first finalizer in the list is waiting for a signal (field value, external system, or other) produced by a component responsible for a finalizer later in the list, resulting in a deadlock. Without enforced ordering finalizers are free to order amongst themselves and are not vulnerable to ordering changes in the list.
             */
            finalizers?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.
             *
             * If this field is specified and the generated name exists, the server will return a 409.
             *
             * Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency
             */
            generateName?: pulumi.Input<string>;
            /**
             * A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.
             */
            generation?: pulumi.Input<number>;
            /**
             * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
             */
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like "ci-cd". The set of fields is always in the version that the workflow used when modifying the object.
             */
            managedFields?: pulumi.Input<pulumi.Input<inputs.meta.v1.ManagedFieldsEntry>[]>;
            /**
             * Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.
             *
             * Must be a DNS_LABEL. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces
             */
            namespace?: pulumi.Input<string>;
            /**
             * List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller.
             */
            ownerReferences?: pulumi.Input<pulumi.Input<inputs.meta.v1.OwnerReference>[]>;
            /**
             * An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.
             *
             * Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
             */
            resourceVersion?: pulumi.Input<string>;
            /**
             * Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.
             */
            selfLink?: pulumi.Input<string>;
            /**
             * UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.
             *
             * Populated by the system. Read-only. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
             */
            uid?: pulumi.Input<string>;
        }
        /**
         * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
         */
        interface ObjectMetaPatch {
            /**
             * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
             */
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC.
             *
             * Populated by the system. Read-only. Null for lists. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            creationTimestamp?: pulumi.Input<string>;
            /**
             * Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.
             */
            deletionGracePeriodSeconds?: pulumi.Input<number>;
            /**
             * DeletionTimestamp is RFC 3339 date and time at which this resource will be deleted. This field is set by the server when a graceful deletion is requested by the user, and is not directly settable by a client. The resource is expected to be deleted (no longer visible from resource lists, and not reachable by name) after the time in this field, once the finalizers list is empty. As long as the finalizers list contains items, deletion is blocked. Once the deletionTimestamp is set, this value may not be unset or be set further into the future, although it may be shortened or the resource may be deleted prior to this time. For example, a user may request that a pod is deleted in 30 seconds. The Kubelet will react by sending a graceful termination signal to the containers in the pod. After that 30 seconds, the Kubelet will send a hard termination signal (SIGKILL) to the container and after cleanup, remove the pod from the API. In the presence of network partitions, this object may still exist after this timestamp, until an administrator or automated process can determine the resource is fully terminated. If not set, graceful deletion of the object has not been requested.
             *
             * Populated by the system when a graceful deletion is requested. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            deletionTimestamp?: pulumi.Input<string>;
            /**
             * Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. Finalizers may be processed and removed in any order.  Order is NOT enforced because it introduces significant risk of stuck finalizers. finalizers is a shared field, any actor with permission can reorder it. If the finalizer list is processed in order, then this can lead to a situation in which the component responsible for the first finalizer in the list is waiting for a signal (field value, external system, or other) produced by a component responsible for a finalizer later in the list, resulting in a deadlock. Without enforced ordering finalizers are free to order amongst themselves and are not vulnerable to ordering changes in the list.
             */
            finalizers?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.
             *
             * If this field is specified and the generated name exists, the server will return a 409.
             *
             * Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency
             */
            generateName?: pulumi.Input<string>;
            /**
             * A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.
             */
            generation?: pulumi.Input<number>;
            /**
             * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
             */
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like "ci-cd". The set of fields is always in the version that the workflow used when modifying the object.
             */
            managedFields?: pulumi.Input<pulumi.Input<inputs.meta.v1.ManagedFieldsEntryPatch>[]>;
            /**
             * Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.
             *
             * Must be a DNS_LABEL. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces
             */
            namespace?: pulumi.Input<string>;
            /**
             * List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller.
             */
            ownerReferences?: pulumi.Input<pulumi.Input<inputs.meta.v1.OwnerReferencePatch>[]>;
            /**
             * An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.
             *
             * Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
             */
            resourceVersion?: pulumi.Input<string>;
            /**
             * Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.
             */
            selfLink?: pulumi.Input<string>;
            /**
             * UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.
             *
             * Populated by the system. Read-only. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
             */
            uid?: pulumi.Input<string>;
        }
        /**
         * OwnerReference contains enough information to let you identify an owning object. An owning object must be in the same namespace as the dependent, or be cluster-scoped, so there is no namespace field.
         */
        interface OwnerReference {
            /**
             * API version of the referent.
             */
            apiVersion: pulumi.Input<string>;
            /**
             * If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. See https://kubernetes.io/docs/concepts/architecture/garbage-collection/#foreground-deletion for how the garbage collector interacts with this field and enforces the foreground deletion. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.
             */
            blockOwnerDeletion?: pulumi.Input<boolean>;
            /**
             * If true, this reference points to the managing controller.
             */
            controller?: pulumi.Input<boolean>;
            /**
             * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: pulumi.Input<string>;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
             */
            name: pulumi.Input<string>;
            /**
             * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
             */
            uid: pulumi.Input<string>;
        }
        /**
         * OwnerReference contains enough information to let you identify an owning object. An owning object must be in the same namespace as the dependent, or be cluster-scoped, so there is no namespace field.
         */
        interface OwnerReferencePatch {
            /**
             * API version of the referent.
             */
            apiVersion?: pulumi.Input<string>;
            /**
             * If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. See https://kubernetes.io/docs/concepts/architecture/garbage-collection/#foreground-deletion for how the garbage collector interacts with this field and enforces the foreground deletion. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.
             */
            blockOwnerDeletion?: pulumi.Input<boolean>;
            /**
             * If true, this reference points to the managing controller.
             */
            controller?: pulumi.Input<boolean>;
            /**
             * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<string>;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
             */
            name?: pulumi.Input<string>;
            /**
             * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
             */
            uid?: pulumi.Input<string>;
        }
    }
}
export declare namespace rabbitmq {
    namespace v1beta1 {
        /**
         * RabbitmqCluster is the Schema for the RabbitmqCluster API. Each instance of this object
         * corresponds to a single RabbitMQ cluster.
         */
        interface RabbitmqCluster {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"rabbitmq.com/v1beta1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"RabbitmqCluster">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpec>;
            status?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterStatus>;
        }
        /**
         * Spec is the desired state of the RabbitmqCluster Custom Resource.
         */
        interface RabbitmqClusterSpec {
            affinity?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinity>;
            /**
             * Set to true to automatically enable all feature flags after each upgrade
             * For more information, see https://www.rabbitmq.com/docs/feature-flags
             */
            autoEnableAllFeatureFlags?: pulumi.Input<boolean>;
            /**
             * DelayStartSeconds is the time the init container (`setup-container`) will sleep before terminating.
             * This effectively delays the time between starting the Pod and starting the `rabbitmq` container.
             * RabbitMQ relies on up-to-date DNS entries early during peer discovery.
             * The purpose of this artificial delay is to ensure that DNS entries are up-to-date when booting RabbitMQ.
             * For more information, see https://github.com/kubernetes/kubernetes/issues/92559
             * If your Kubernetes DNS backend is configured with a low DNS cache value or publishes not ready addresses
             * promptly, you can decrase this value or set it to 0.
             */
            delayStartSeconds?: pulumi.Input<number>;
            /**
             * Image is the name of the RabbitMQ docker image to use for RabbitMQ nodes in the RabbitmqCluster.
             * Must be provided together with ImagePullSecrets in order to use an image in a private registry.
             */
            image?: pulumi.Input<string>;
            /**
             * List of Secret resource containing access credentials to the registry for the RabbitMQ image. Required if the docker registry is private.
             */
            imagePullSecrets?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecImagePullSecrets>[]>;
            override?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverride>;
            persistence?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecPersistence>;
            rabbitmq?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecRabbitmq>;
            /**
             * Replicas is the number of nodes in the RabbitMQ cluster. Each node is deployed as a Replica in a StatefulSet. Only 1, 3, 5 replicas clusters are tested.
             * This value should be an odd number to ensure the resultant cluster can establish exactly one quorum of nodes
             * in the event of a fragmenting network partition.
             */
            replicas?: pulumi.Input<number>;
            resources?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecResources>;
            secretBackend?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecSecretBackend>;
            service?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecService>;
            /**
             * If unset, or set to false, the cluster will run `rabbitmq-queues rebalance all` whenever the cluster is updated.
             * Set to true to prevent the operator rebalancing queue leaders after a cluster update.
             * Has no effect if the cluster only consists of one node.
             * For more information, see https://www.rabbitmq.com/rabbitmq-queues.8.html#rebalance
             */
            skipPostDeploySteps?: pulumi.Input<boolean>;
            /**
             * TerminationGracePeriodSeconds is the timeout that each rabbitmqcluster pod will have to terminate gracefully.
             * It defaults to 604800 seconds ( a week long) to ensure that the container preStop lifecycle hook can finish running.
             * For more information, see: https://github.com/rabbitmq/cluster-operator/blob/main/docs/design/20200520-graceful-pod-termination.md
             */
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            tls?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecTls>;
            /**
             * Tolerations is the list of Toleration resources attached to each Pod in the RabbitmqCluster.
             */
            tolerations?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecTolerations>[]>;
        }
        /**
         * Affinity scheduling rules to be applied on created Pods.
         */
        interface RabbitmqClusterSpecAffinity {
            nodeAffinity?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityNodeAffinity>;
            podAffinity?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAffinity>;
            podAntiAffinity?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAntiAffinity>;
        }
        /**
         * Describes node affinity scheduling rules for the pod.
         */
        interface RabbitmqClusterSpecAffinityNodeAffinity {
            /**
             * The scheduler will prefer to schedule pods to nodes that satisfy
             * the affinity expressions specified by this field, but it may choose
             * a node that violates one or more of the expressions. The node that is
             * most preferred is the one with the greatest sum of weights, i.e.
             * for each node that meets all of the scheduling requirements (resource
             * request, requiredDuringScheduling affinity expressions, etc.),
             * compute a sum by iterating through the elements of this field and adding
             * "weight" to the sum if the node matches the corresponding matchExpressions; the
             * node(s) with the highest sum are the most preferred.
             */
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution>;
        }
        /**
         * Describes node affinity scheduling rules for the pod.
         */
        interface RabbitmqClusterSpecAffinityNodeAffinityPatch {
            /**
             * The scheduler will prefer to schedule pods to nodes that satisfy
             * the affinity expressions specified by this field, but it may choose
             * a node that violates one or more of the expressions. The node that is
             * most preferred is the one with the greatest sum of weights, i.e.
             * for each node that meets all of the scheduling requirements (resource
             * request, requiredDuringScheduling affinity expressions, etc.),
             * compute a sum by iterating through the elements of this field and adding
             * "weight" to the sum if the node matches the corresponding matchExpressions; the
             * node(s) with the highest sum are the most preferred.
             */
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch>;
        }
        /**
         * An empty preferred scheduling term matches all objects with implicit weight 0
         * (i.e. it's a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op).
         */
        interface RabbitmqClusterSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            preference?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference>;
            /**
             * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
             */
            weight?: pulumi.Input<number>;
        }
        /**
         * An empty preferred scheduling term matches all objects with implicit weight 0
         * (i.e. it's a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op).
         */
        interface RabbitmqClusterSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            preference?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch>;
            /**
             * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
             */
            weight?: pulumi.Input<number>;
        }
        /**
         * A node selector term, associated with the corresponding weight.
         */
        interface RabbitmqClusterSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
            /**
             * A list of node selector requirements by node's labels.
             */
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions>[]>;
            /**
             * A list of node selector requirements by node's fields.
             */
            matchFields?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields>[]>;
        }
        /**
         * A node selector requirement is a selector that contains values, a key, and an operator
         * that relates the key and values.
         */
        interface RabbitmqClusterSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
            /**
             * The label key that the selector applies to.
             */
            key?: pulumi.Input<string>;
            /**
             * Represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
             */
            operator?: pulumi.Input<string>;
            /**
             * An array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. If the operator is Gt or Lt, the values
             * array must have a single element, which will be interpreted as an integer.
             * This array is replaced during a strategic merge patch.
             */
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * A node selector requirement is a selector that contains values, a key, and an operator
         * that relates the key and values.
         */
        interface RabbitmqClusterSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch {
            /**
             * The label key that the selector applies to.
             */
            key?: pulumi.Input<string>;
            /**
             * Represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
             */
            operator?: pulumi.Input<string>;
            /**
             * An array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. If the operator is Gt or Lt, the values
             * array must have a single element, which will be interpreted as an integer.
             * This array is replaced during a strategic merge patch.
             */
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * A node selector requirement is a selector that contains values, a key, and an operator
         * that relates the key and values.
         */
        interface RabbitmqClusterSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
            /**
             * The label key that the selector applies to.
             */
            key?: pulumi.Input<string>;
            /**
             * Represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
             */
            operator?: pulumi.Input<string>;
            /**
             * An array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. If the operator is Gt or Lt, the values
             * array must have a single element, which will be interpreted as an integer.
             * This array is replaced during a strategic merge patch.
             */
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * A node selector requirement is a selector that contains values, a key, and an operator
         * that relates the key and values.
         */
        interface RabbitmqClusterSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch {
            /**
             * The label key that the selector applies to.
             */
            key?: pulumi.Input<string>;
            /**
             * Represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
             */
            operator?: pulumi.Input<string>;
            /**
             * An array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. If the operator is Gt or Lt, the values
             * array must have a single element, which will be interpreted as an integer.
             * This array is replaced during a strategic merge patch.
             */
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * A node selector term, associated with the corresponding weight.
         */
        interface RabbitmqClusterSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch {
            /**
             * A list of node selector requirements by node's labels.
             */
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch>[]>;
            /**
             * A list of node selector requirements by node's fields.
             */
            matchFields?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch>[]>;
        }
        /**
         * If the affinity requirements specified by this field are not met at
         * scheduling time, the pod will not be scheduled onto the node.
         * If the affinity requirements specified by this field cease to be met
         * at some point during pod execution (e.g. due to an update), the system
         * may or may not try to eventually evict the pod from its node.
         */
        interface RabbitmqClusterSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            /**
             * Required. A list of node selector terms. The terms are ORed.
             */
            nodeSelectorTerms?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms>[]>;
        }
        /**
         * A null or empty node selector term matches no objects. The requirements of
         * them are ANDed.
         * The TopologySelectorTerm type implements a subset of the NodeSelectorTerm.
         */
        interface RabbitmqClusterSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
            /**
             * A list of node selector requirements by node's labels.
             */
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions>[]>;
            /**
             * A list of node selector requirements by node's fields.
             */
            matchFields?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields>[]>;
        }
        /**
         * A node selector requirement is a selector that contains values, a key, and an operator
         * that relates the key and values.
         */
        interface RabbitmqClusterSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
            /**
             * The label key that the selector applies to.
             */
            key?: pulumi.Input<string>;
            /**
             * Represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
             */
            operator?: pulumi.Input<string>;
            /**
             * An array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. If the operator is Gt or Lt, the values
             * array must have a single element, which will be interpreted as an integer.
             * This array is replaced during a strategic merge patch.
             */
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * A node selector requirement is a selector that contains values, a key, and an operator
         * that relates the key and values.
         */
        interface RabbitmqClusterSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch {
            /**
             * The label key that the selector applies to.
             */
            key?: pulumi.Input<string>;
            /**
             * Represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
             */
            operator?: pulumi.Input<string>;
            /**
             * An array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. If the operator is Gt or Lt, the values
             * array must have a single element, which will be interpreted as an integer.
             * This array is replaced during a strategic merge patch.
             */
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * A node selector requirement is a selector that contains values, a key, and an operator
         * that relates the key and values.
         */
        interface RabbitmqClusterSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
            /**
             * The label key that the selector applies to.
             */
            key?: pulumi.Input<string>;
            /**
             * Represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
             */
            operator?: pulumi.Input<string>;
            /**
             * An array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. If the operator is Gt or Lt, the values
             * array must have a single element, which will be interpreted as an integer.
             * This array is replaced during a strategic merge patch.
             */
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * A node selector requirement is a selector that contains values, a key, and an operator
         * that relates the key and values.
         */
        interface RabbitmqClusterSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch {
            /**
             * The label key that the selector applies to.
             */
            key?: pulumi.Input<string>;
            /**
             * Represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
             */
            operator?: pulumi.Input<string>;
            /**
             * An array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. If the operator is Gt or Lt, the values
             * array must have a single element, which will be interpreted as an integer.
             * This array is replaced during a strategic merge patch.
             */
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * A null or empty node selector term matches no objects. The requirements of
         * them are ANDed.
         * The TopologySelectorTerm type implements a subset of the NodeSelectorTerm.
         */
        interface RabbitmqClusterSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch {
            /**
             * A list of node selector requirements by node's labels.
             */
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch>[]>;
            /**
             * A list of node selector requirements by node's fields.
             */
            matchFields?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch>[]>;
        }
        /**
         * If the affinity requirements specified by this field are not met at
         * scheduling time, the pod will not be scheduled onto the node.
         * If the affinity requirements specified by this field cease to be met
         * at some point during pod execution (e.g. due to an update), the system
         * may or may not try to eventually evict the pod from its node.
         */
        interface RabbitmqClusterSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            /**
             * Required. A list of node selector terms. The terms are ORed.
             */
            nodeSelectorTerms?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch>[]>;
        }
        /**
         * Affinity scheduling rules to be applied on created Pods.
         */
        interface RabbitmqClusterSpecAffinityPatch {
            nodeAffinity?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityNodeAffinityPatch>;
            podAffinity?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAffinityPatch>;
            podAntiAffinity?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAntiAffinityPatch>;
        }
        /**
         * Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
         */
        interface RabbitmqClusterSpecAffinityPodAffinity {
            /**
             * The scheduler will prefer to schedule pods to nodes that satisfy
             * the affinity expressions specified by this field, but it may choose
             * a node that violates one or more of the expressions. The node that is
             * most preferred is the one with the greatest sum of weights, i.e.
             * for each node that meets all of the scheduling requirements (resource
             * request, requiredDuringScheduling affinity expressions, etc.),
             * compute a sum by iterating through the elements of this field and adding
             * "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the
             * node(s) with the highest sum are the most preferred.
             */
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution>[]>;
            /**
             * If the affinity requirements specified by this field are not met at
             * scheduling time, the pod will not be scheduled onto the node.
             * If the affinity requirements specified by this field cease to be met
             * at some point during pod execution (e.g. due to a pod label update), the
             * system may or may not try to eventually evict the pod from its node.
             * When there are multiple elements, the lists of nodes corresponding to each
             * podAffinityTerm are intersected, i.e. all terms must be satisfied.
             */
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution>[]>;
        }
        /**
         * Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
         */
        interface RabbitmqClusterSpecAffinityPodAffinityPatch {
            /**
             * The scheduler will prefer to schedule pods to nodes that satisfy
             * the affinity expressions specified by this field, but it may choose
             * a node that violates one or more of the expressions. The node that is
             * most preferred is the one with the greatest sum of weights, i.e.
             * for each node that meets all of the scheduling requirements (resource
             * request, requiredDuringScheduling affinity expressions, etc.),
             * compute a sum by iterating through the elements of this field and adding
             * "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the
             * node(s) with the highest sum are the most preferred.
             */
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
            /**
             * If the affinity requirements specified by this field are not met at
             * scheduling time, the pod will not be scheduled onto the node.
             * If the affinity requirements specified by this field cease to be met
             * at some point during pod execution (e.g. due to a pod label update), the
             * system may or may not try to eventually evict the pod from its node.
             * When there are multiple elements, the lists of nodes corresponding to each
             * podAffinityTerm are intersected, i.e. all terms must be satisfied.
             */
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
        }
        /**
         * The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)
         */
        interface RabbitmqClusterSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm>;
            /**
             * weight associated with matching the corresponding podAffinityTerm,
             * in the range 1-100.
             */
            weight?: pulumi.Input<number>;
        }
        /**
         * The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)
         */
        interface RabbitmqClusterSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch>;
            /**
             * weight associated with matching the corresponding podAffinityTerm,
             * in the range 1-100.
             */
            weight?: pulumi.Input<number>;
        }
        /**
         * Required. A pod affinity term, associated with the corresponding weight.
         */
        interface RabbitmqClusterSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector>;
            /**
             * MatchLabelKeys is a set of pod label keys to select which pods will
             * be taken into consideration. The keys are used to lookup values from the
             * incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)`
             * to select the group of existing pods which pods will be taken into consideration
             * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
             * pod labels will be ignored. The default value is empty.
             * The same key is forbidden to exist in both matchLabelKeys and labelSelector.
             * Also, matchLabelKeys cannot be set when labelSelector isn't set.
             */
            matchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * MismatchLabelKeys is a set of pod label keys to select which pods will
             * be taken into consideration. The keys are used to lookup values from the
             * incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)`
             * to select the group of existing pods which pods will be taken into consideration
             * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
             * pod labels will be ignored. The default value is empty.
             * The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
             * Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
             */
            mismatchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            namespaceSelector?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector>;
            /**
             * namespaces specifies a static list of namespace names that the term applies to.
             * The term is applied to the union of the namespaces listed in this field
             * and the ones selected by namespaceSelector.
             * null or empty namespaces list and null namespaceSelector means "this pod's namespace".
             */
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
             * the labelSelector in the specified namespaces, where co-located is defined as running on a node
             * whose value of the label with key topologyKey matches that of any node on which any of the
             * selected pods is running.
             * Empty topologyKey is not allowed.
             */
            topologyKey?: pulumi.Input<string>;
        }
        /**
         * A label query over a set of resources, in this case pods.
         * If it's null, this PodAffinityTerm matches with no Pods.
         */
        interface RabbitmqClusterSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions>[]>;
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that
         * relates the key and values.
         */
        interface RabbitmqClusterSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            /**
             * key is the label key that the selector applies to.
             */
            key?: pulumi.Input<string>;
            /**
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator?: pulumi.Input<string>;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that
         * relates the key and values.
         */
        interface RabbitmqClusterSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            /**
             * key is the label key that the selector applies to.
             */
            key?: pulumi.Input<string>;
            /**
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator?: pulumi.Input<string>;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * A label query over a set of resources, in this case pods.
         * If it's null, this PodAffinityTerm matches with no Pods.
         */
        interface RabbitmqClusterSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch>[]>;
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * A label query over the set of namespaces that the term applies to.
         * The term is applied to the union of the namespaces selected by this field
         * and the ones listed in the namespaces field.
         * null selector and null or empty namespaces list means "this pod's namespace".
         * An empty selector ({}) matches all namespaces.
         */
        interface RabbitmqClusterSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions>[]>;
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that
         * relates the key and values.
         */
        interface RabbitmqClusterSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            /**
             * key is the label key that the selector applies to.
             */
            key?: pulumi.Input<string>;
            /**
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator?: pulumi.Input<string>;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that
         * relates the key and values.
         */
        interface RabbitmqClusterSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            /**
             * key is the label key that the selector applies to.
             */
            key?: pulumi.Input<string>;
            /**
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator?: pulumi.Input<string>;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * A label query over the set of namespaces that the term applies to.
         * The term is applied to the union of the namespaces selected by this field
         * and the ones listed in the namespaces field.
         * null selector and null or empty namespaces list means "this pod's namespace".
         * An empty selector ({}) matches all namespaces.
         */
        interface RabbitmqClusterSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch>[]>;
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * Required. A pod affinity term, associated with the corresponding weight.
         */
        interface RabbitmqClusterSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch>;
            /**
             * MatchLabelKeys is a set of pod label keys to select which pods will
             * be taken into consideration. The keys are used to lookup values from the
             * incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)`
             * to select the group of existing pods which pods will be taken into consideration
             * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
             * pod labels will be ignored. The default value is empty.
             * The same key is forbidden to exist in both matchLabelKeys and labelSelector.
             * Also, matchLabelKeys cannot be set when labelSelector isn't set.
             */
            matchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * MismatchLabelKeys is a set of pod label keys to select which pods will
             * be taken into consideration. The keys are used to lookup values from the
             * incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)`
             * to select the group of existing pods which pods will be taken into consideration
             * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
             * pod labels will be ignored. The default value is empty.
             * The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
             * Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
             */
            mismatchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            namespaceSelector?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch>;
            /**
             * namespaces specifies a static list of namespace names that the term applies to.
             * The term is applied to the union of the namespaces listed in this field
             * and the ones selected by namespaceSelector.
             * null or empty namespaces list and null namespaceSelector means "this pod's namespace".
             */
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
             * the labelSelector in the specified namespaces, where co-located is defined as running on a node
             * whose value of the label with key topologyKey matches that of any node on which any of the
             * selected pods is running.
             * Empty topologyKey is not allowed.
             */
            topologyKey?: pulumi.Input<string>;
        }
        /**
         * Defines a set of pods (namely those matching the labelSelector
         * relative to the given namespace(s)) that this pod should be
         * co-located (affinity) or not co-located (anti-affinity) with,
         * where co-located is defined as running on a node whose value of
         * the label with key <topologyKey> matches that of any node on which
         * a pod of the set of pods is running
         */
        interface RabbitmqClusterSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector>;
            /**
             * MatchLabelKeys is a set of pod label keys to select which pods will
             * be taken into consideration. The keys are used to lookup values from the
             * incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)`
             * to select the group of existing pods which pods will be taken into consideration
             * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
             * pod labels will be ignored. The default value is empty.
             * The same key is forbidden to exist in both matchLabelKeys and labelSelector.
             * Also, matchLabelKeys cannot be set when labelSelector isn't set.
             */
            matchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * MismatchLabelKeys is a set of pod label keys to select which pods will
             * be taken into consideration. The keys are used to lookup values from the
             * incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)`
             * to select the group of existing pods which pods will be taken into consideration
             * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
             * pod labels will be ignored. The default value is empty.
             * The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
             * Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
             */
            mismatchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            namespaceSelector?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector>;
            /**
             * namespaces specifies a static list of namespace names that the term applies to.
             * The term is applied to the union of the namespaces listed in this field
             * and the ones selected by namespaceSelector.
             * null or empty namespaces list and null namespaceSelector means "this pod's namespace".
             */
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
             * the labelSelector in the specified namespaces, where co-located is defined as running on a node
             * whose value of the label with key topologyKey matches that of any node on which any of the
             * selected pods is running.
             * Empty topologyKey is not allowed.
             */
            topologyKey?: pulumi.Input<string>;
        }
        /**
         * A label query over a set of resources, in this case pods.
         * If it's null, this PodAffinityTerm matches with no Pods.
         */
        interface RabbitmqClusterSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions>[]>;
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that
         * relates the key and values.
         */
        interface RabbitmqClusterSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            /**
             * key is the label key that the selector applies to.
             */
            key?: pulumi.Input<string>;
            /**
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator?: pulumi.Input<string>;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that
         * relates the key and values.
         */
        interface RabbitmqClusterSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            /**
             * key is the label key that the selector applies to.
             */
            key?: pulumi.Input<string>;
            /**
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator?: pulumi.Input<string>;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * A label query over a set of resources, in this case pods.
         * If it's null, this PodAffinityTerm matches with no Pods.
         */
        interface RabbitmqClusterSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch>[]>;
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * A label query over the set of namespaces that the term applies to.
         * The term is applied to the union of the namespaces selected by this field
         * and the ones listed in the namespaces field.
         * null selector and null or empty namespaces list means "this pod's namespace".
         * An empty selector ({}) matches all namespaces.
         */
        interface RabbitmqClusterSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions>[]>;
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that
         * relates the key and values.
         */
        interface RabbitmqClusterSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            /**
             * key is the label key that the selector applies to.
             */
            key?: pulumi.Input<string>;
            /**
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator?: pulumi.Input<string>;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that
         * relates the key and values.
         */
        interface RabbitmqClusterSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            /**
             * key is the label key that the selector applies to.
             */
            key?: pulumi.Input<string>;
            /**
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator?: pulumi.Input<string>;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * A label query over the set of namespaces that the term applies to.
         * The term is applied to the union of the namespaces selected by this field
         * and the ones listed in the namespaces field.
         * null selector and null or empty namespaces list means "this pod's namespace".
         * An empty selector ({}) matches all namespaces.
         */
        interface RabbitmqClusterSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch>[]>;
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * Defines a set of pods (namely those matching the labelSelector
         * relative to the given namespace(s)) that this pod should be
         * co-located (affinity) or not co-located (anti-affinity) with,
         * where co-located is defined as running on a node whose value of
         * the label with key <topologyKey> matches that of any node on which
         * a pod of the set of pods is running
         */
        interface RabbitmqClusterSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch>;
            /**
             * MatchLabelKeys is a set of pod label keys to select which pods will
             * be taken into consideration. The keys are used to lookup values from the
             * incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)`
             * to select the group of existing pods which pods will be taken into consideration
             * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
             * pod labels will be ignored. The default value is empty.
             * The same key is forbidden to exist in both matchLabelKeys and labelSelector.
             * Also, matchLabelKeys cannot be set when labelSelector isn't set.
             */
            matchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * MismatchLabelKeys is a set of pod label keys to select which pods will
             * be taken into consideration. The keys are used to lookup values from the
             * incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)`
             * to select the group of existing pods which pods will be taken into consideration
             * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
             * pod labels will be ignored. The default value is empty.
             * The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
             * Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
             */
            mismatchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            namespaceSelector?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch>;
            /**
             * namespaces specifies a static list of namespace names that the term applies to.
             * The term is applied to the union of the namespaces listed in this field
             * and the ones selected by namespaceSelector.
             * null or empty namespaces list and null namespaceSelector means "this pod's namespace".
             */
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
             * the labelSelector in the specified namespaces, where co-located is defined as running on a node
             * whose value of the label with key topologyKey matches that of any node on which any of the
             * selected pods is running.
             * Empty topologyKey is not allowed.
             */
            topologyKey?: pulumi.Input<string>;
        }
        /**
         * Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
         */
        interface RabbitmqClusterSpecAffinityPodAntiAffinity {
            /**
             * The scheduler will prefer to schedule pods to nodes that satisfy
             * the anti-affinity expressions specified by this field, but it may choose
             * a node that violates one or more of the expressions. The node that is
             * most preferred is the one with the greatest sum of weights, i.e.
             * for each node that meets all of the scheduling requirements (resource
             * request, requiredDuringScheduling anti-affinity expressions, etc.),
             * compute a sum by iterating through the elements of this field and subtracting
             * "weight" from the sum if the node has pods which matches the corresponding podAffinityTerm; the
             * node(s) with the highest sum are the most preferred.
             */
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution>[]>;
            /**
             * If the anti-affinity requirements specified by this field are not met at
             * scheduling time, the pod will not be scheduled onto the node.
             * If the anti-affinity requirements specified by this field cease to be met
             * at some point during pod execution (e.g. due to a pod label update), the
             * system may or may not try to eventually evict the pod from its node.
             * When there are multiple elements, the lists of nodes corresponding to each
             * podAffinityTerm are intersected, i.e. all terms must be satisfied.
             */
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution>[]>;
        }
        /**
         * Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
         */
        interface RabbitmqClusterSpecAffinityPodAntiAffinityPatch {
            /**
             * The scheduler will prefer to schedule pods to nodes that satisfy
             * the anti-affinity expressions specified by this field, but it may choose
             * a node that violates one or more of the expressions. The node that is
             * most preferred is the one with the greatest sum of weights, i.e.
             * for each node that meets all of the scheduling requirements (resource
             * request, requiredDuringScheduling anti-affinity expressions, etc.),
             * compute a sum by iterating through the elements of this field and subtracting
             * "weight" from the sum if the node has pods which matches the corresponding podAffinityTerm; the
             * node(s) with the highest sum are the most preferred.
             */
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
            /**
             * If the anti-affinity requirements specified by this field are not met at
             * scheduling time, the pod will not be scheduled onto the node.
             * If the anti-affinity requirements specified by this field cease to be met
             * at some point during pod execution (e.g. due to a pod label update), the
             * system may or may not try to eventually evict the pod from its node.
             * When there are multiple elements, the lists of nodes corresponding to each
             * podAffinityTerm are intersected, i.e. all terms must be satisfied.
             */
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
        }
        /**
         * The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)
         */
        interface RabbitmqClusterSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm>;
            /**
             * weight associated with matching the corresponding podAffinityTerm,
             * in the range 1-100.
             */
            weight?: pulumi.Input<number>;
        }
        /**
         * The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)
         */
        interface RabbitmqClusterSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch>;
            /**
             * weight associated with matching the corresponding podAffinityTerm,
             * in the range 1-100.
             */
            weight?: pulumi.Input<number>;
        }
        /**
         * Required. A pod affinity term, associated with the corresponding weight.
         */
        interface RabbitmqClusterSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector>;
            /**
             * MatchLabelKeys is a set of pod label keys to select which pods will
             * be taken into consideration. The keys are used to lookup values from the
             * incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)`
             * to select the group of existing pods which pods will be taken into consideration
             * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
             * pod labels will be ignored. The default value is empty.
             * The same key is forbidden to exist in both matchLabelKeys and labelSelector.
             * Also, matchLabelKeys cannot be set when labelSelector isn't set.
             */
            matchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * MismatchLabelKeys is a set of pod label keys to select which pods will
             * be taken into consideration. The keys are used to lookup values from the
             * incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)`
             * to select the group of existing pods which pods will be taken into consideration
             * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
             * pod labels will be ignored. The default value is empty.
             * The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
             * Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
             */
            mismatchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            namespaceSelector?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector>;
            /**
             * namespaces specifies a static list of namespace names that the term applies to.
             * The term is applied to the union of the namespaces listed in this field
             * and the ones selected by namespaceSelector.
             * null or empty namespaces list and null namespaceSelector means "this pod's namespace".
             */
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
             * the labelSelector in the specified namespaces, where co-located is defined as running on a node
             * whose value of the label with key topologyKey matches that of any node on which any of the
             * selected pods is running.
             * Empty topologyKey is not allowed.
             */
            topologyKey?: pulumi.Input<string>;
        }
        /**
         * A label query over a set of resources, in this case pods.
         * If it's null, this PodAffinityTerm matches with no Pods.
         */
        interface RabbitmqClusterSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions>[]>;
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that
         * relates the key and values.
         */
        interface RabbitmqClusterSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            /**
             * key is the label key that the selector applies to.
             */
            key?: pulumi.Input<string>;
            /**
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator?: pulumi.Input<string>;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that
         * relates the key and values.
         */
        interface RabbitmqClusterSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            /**
             * key is the label key that the selector applies to.
             */
            key?: pulumi.Input<string>;
            /**
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator?: pulumi.Input<string>;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * A label query over a set of resources, in this case pods.
         * If it's null, this PodAffinityTerm matches with no Pods.
         */
        interface RabbitmqClusterSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch>[]>;
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * A label query over the set of namespaces that the term applies to.
         * The term is applied to the union of the namespaces selected by this field
         * and the ones listed in the namespaces field.
         * null selector and null or empty namespaces list means "this pod's namespace".
         * An empty selector ({}) matches all namespaces.
         */
        interface RabbitmqClusterSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions>[]>;
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that
         * relates the key and values.
         */
        interface RabbitmqClusterSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            /**
             * key is the label key that the selector applies to.
             */
            key?: pulumi.Input<string>;
            /**
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator?: pulumi.Input<string>;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that
         * relates the key and values.
         */
        interface RabbitmqClusterSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            /**
             * key is the label key that the selector applies to.
             */
            key?: pulumi.Input<string>;
            /**
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator?: pulumi.Input<string>;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * A label query over the set of namespaces that the term applies to.
         * The term is applied to the union of the namespaces selected by this field
         * and the ones listed in the namespaces field.
         * null selector and null or empty namespaces list means "this pod's namespace".
         * An empty selector ({}) matches all namespaces.
         */
        interface RabbitmqClusterSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch>[]>;
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * Required. A pod affinity term, associated with the corresponding weight.
         */
        interface RabbitmqClusterSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch>;
            /**
             * MatchLabelKeys is a set of pod label keys to select which pods will
             * be taken into consideration. The keys are used to lookup values from the
             * incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)`
             * to select the group of existing pods which pods will be taken into consideration
             * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
             * pod labels will be ignored. The default value is empty.
             * The same key is forbidden to exist in both matchLabelKeys and labelSelector.
             * Also, matchLabelKeys cannot be set when labelSelector isn't set.
             */
            matchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * MismatchLabelKeys is a set of pod label keys to select which pods will
             * be taken into consideration. The keys are used to lookup values from the
             * incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)`
             * to select the group of existing pods which pods will be taken into consideration
             * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
             * pod labels will be ignored. The default value is empty.
             * The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
             * Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
             */
            mismatchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            namespaceSelector?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch>;
            /**
             * namespaces specifies a static list of namespace names that the term applies to.
             * The term is applied to the union of the namespaces listed in this field
             * and the ones selected by namespaceSelector.
             * null or empty namespaces list and null namespaceSelector means "this pod's namespace".
             */
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
             * the labelSelector in the specified namespaces, where co-located is defined as running on a node
             * whose value of the label with key topologyKey matches that of any node on which any of the
             * selected pods is running.
             * Empty topologyKey is not allowed.
             */
            topologyKey?: pulumi.Input<string>;
        }
        /**
         * Defines a set of pods (namely those matching the labelSelector
         * relative to the given namespace(s)) that this pod should be
         * co-located (affinity) or not co-located (anti-affinity) with,
         * where co-located is defined as running on a node whose value of
         * the label with key <topologyKey> matches that of any node on which
         * a pod of the set of pods is running
         */
        interface RabbitmqClusterSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector>;
            /**
             * MatchLabelKeys is a set of pod label keys to select which pods will
             * be taken into consideration. The keys are used to lookup values from the
             * incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)`
             * to select the group of existing pods which pods will be taken into consideration
             * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
             * pod labels will be ignored. The default value is empty.
             * The same key is forbidden to exist in both matchLabelKeys and labelSelector.
             * Also, matchLabelKeys cannot be set when labelSelector isn't set.
             */
            matchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * MismatchLabelKeys is a set of pod label keys to select which pods will
             * be taken into consideration. The keys are used to lookup values from the
             * incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)`
             * to select the group of existing pods which pods will be taken into consideration
             * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
             * pod labels will be ignored. The default value is empty.
             * The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
             * Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
             */
            mismatchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            namespaceSelector?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector>;
            /**
             * namespaces specifies a static list of namespace names that the term applies to.
             * The term is applied to the union of the namespaces listed in this field
             * and the ones selected by namespaceSelector.
             * null or empty namespaces list and null namespaceSelector means "this pod's namespace".
             */
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
             * the labelSelector in the specified namespaces, where co-located is defined as running on a node
             * whose value of the label with key topologyKey matches that of any node on which any of the
             * selected pods is running.
             * Empty topologyKey is not allowed.
             */
            topologyKey?: pulumi.Input<string>;
        }
        /**
         * A label query over a set of resources, in this case pods.
         * If it's null, this PodAffinityTerm matches with no Pods.
         */
        interface RabbitmqClusterSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions>[]>;
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that
         * relates the key and values.
         */
        interface RabbitmqClusterSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            /**
             * key is the label key that the selector applies to.
             */
            key?: pulumi.Input<string>;
            /**
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator?: pulumi.Input<string>;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that
         * relates the key and values.
         */
        interface RabbitmqClusterSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            /**
             * key is the label key that the selector applies to.
             */
            key?: pulumi.Input<string>;
            /**
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator?: pulumi.Input<string>;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * A label query over a set of resources, in this case pods.
         * If it's null, this PodAffinityTerm matches with no Pods.
         */
        interface RabbitmqClusterSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch>[]>;
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * A label query over the set of namespaces that the term applies to.
         * The term is applied to the union of the namespaces selected by this field
         * and the ones listed in the namespaces field.
         * null selector and null or empty namespaces list means "this pod's namespace".
         * An empty selector ({}) matches all namespaces.
         */
        interface RabbitmqClusterSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions>[]>;
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that
         * relates the key and values.
         */
        interface RabbitmqClusterSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            /**
             * key is the label key that the selector applies to.
             */
            key?: pulumi.Input<string>;
            /**
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator?: pulumi.Input<string>;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that
         * relates the key and values.
         */
        interface RabbitmqClusterSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            /**
             * key is the label key that the selector applies to.
             */
            key?: pulumi.Input<string>;
            /**
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator?: pulumi.Input<string>;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        /**
         * A label query over the set of namespaces that the term applies to.
         * The term is applied to the union of the namespaces selected by this field
         * and the ones listed in the namespaces field.
         * null selector and null or empty namespaces list means "this pod's namespace".
         * An empty selector ({}) matches all namespaces.
         */
        interface RabbitmqClusterSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch>[]>;
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * Defines a set of pods (namely those matching the labelSelector
         * relative to the given namespace(s)) that this pod should be
         * co-located (affinity) or not co-located (anti-affinity) with,
         * where co-located is defined as running on a node whose value of
         * the label with key <topologyKey> matches that of any node on which
         * a pod of the set of pods is running
         */
        interface RabbitmqClusterSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch>;
            /**
             * MatchLabelKeys is a set of pod label keys to select which pods will
             * be taken into consideration. The keys are used to lookup values from the
             * incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)`
             * to select the group of existing pods which pods will be taken into consideration
             * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
             * pod labels will be ignored. The default value is empty.
             * The same key is forbidden to exist in both matchLabelKeys and labelSelector.
             * Also, matchLabelKeys cannot be set when labelSelector isn't set.
             */
            matchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * MismatchLabelKeys is a set of pod label keys to select which pods will
             * be taken into consideration. The keys are used to lookup values from the
             * incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)`
             * to select the group of existing pods which pods will be taken into consideration
             * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
             * pod labels will be ignored. The default value is empty.
             * The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
             * Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
             */
            mismatchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            namespaceSelector?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch>;
            /**
             * namespaces specifies a static list of namespace names that the term applies to.
             * The term is applied to the union of the namespaces listed in this field
             * and the ones selected by namespaceSelector.
             * null or empty namespaces list and null namespaceSelector means "this pod's namespace".
             */
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
             * the labelSelector in the specified namespaces, where co-located is defined as running on a node
             * whose value of the label with key topologyKey matches that of any node on which any of the
             * selected pods is running.
             * Empty topologyKey is not allowed.
             */
            topologyKey?: pulumi.Input<string>;
        }
        /**
         * LocalObjectReference contains enough information to let you locate the
         * referenced object inside the same namespace.
         */
        interface RabbitmqClusterSpecImagePullSecrets {
            /**
             * Name of the referent.
             * This field is effectively required, but due to backwards compatibility is
             * allowed to be empty. Instances of this type with an empty value here are
             * almost certainly wrong.
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name?: pulumi.Input<string>;
        }
        /**
         * LocalObjectReference contains enough information to let you locate the
         * referenced object inside the same namespace.
         */
        interface RabbitmqClusterSpecImagePullSecretsPatch {
            /**
             * Name of the referent.
             * This field is effectively required, but due to backwards compatibility is
             * allowed to be empty. Instances of this type with an empty value here are
             * almost certainly wrong.
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverride {
            service?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideService>;
            statefulSet?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSet>;
        }
        interface RabbitmqClusterSpecOverridePatch {
            service?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideServicePatch>;
            statefulSet?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetPatch>;
        }
        interface RabbitmqClusterSpecOverrideService {
            metadata?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideServiceMetadata>;
            spec?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideServiceSpec>;
        }
        interface RabbitmqClusterSpecOverrideServiceMetadata {
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface RabbitmqClusterSpecOverrideServiceMetadataPatch {
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface RabbitmqClusterSpecOverrideServicePatch {
            metadata?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideServiceMetadataPatch>;
            spec?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideServiceSpecPatch>;
        }
        interface RabbitmqClusterSpecOverrideServiceSpec {
            allocateLoadBalancerNodePorts?: pulumi.Input<boolean>;
            clusterIP?: pulumi.Input<string>;
            clusterIPs?: pulumi.Input<pulumi.Input<string>[]>;
            externalIPs?: pulumi.Input<pulumi.Input<string>[]>;
            externalName?: pulumi.Input<string>;
            externalTrafficPolicy?: pulumi.Input<string>;
            healthCheckNodePort?: pulumi.Input<number>;
            internalTrafficPolicy?: pulumi.Input<string>;
            ipFamilies?: pulumi.Input<pulumi.Input<string>[]>;
            ipFamilyPolicy?: pulumi.Input<string>;
            loadBalancerClass?: pulumi.Input<string>;
            loadBalancerIP?: pulumi.Input<string>;
            loadBalancerSourceRanges?: pulumi.Input<pulumi.Input<string>[]>;
            ports?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideServiceSpecPorts>[]>;
            publishNotReadyAddresses?: pulumi.Input<boolean>;
            selector?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            sessionAffinity?: pulumi.Input<string>;
            sessionAffinityConfig?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideServiceSpecSessionAffinityConfig>;
            trafficDistribution?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideServiceSpecPatch {
            allocateLoadBalancerNodePorts?: pulumi.Input<boolean>;
            clusterIP?: pulumi.Input<string>;
            clusterIPs?: pulumi.Input<pulumi.Input<string>[]>;
            externalIPs?: pulumi.Input<pulumi.Input<string>[]>;
            externalName?: pulumi.Input<string>;
            externalTrafficPolicy?: pulumi.Input<string>;
            healthCheckNodePort?: pulumi.Input<number>;
            internalTrafficPolicy?: pulumi.Input<string>;
            ipFamilies?: pulumi.Input<pulumi.Input<string>[]>;
            ipFamilyPolicy?: pulumi.Input<string>;
            loadBalancerClass?: pulumi.Input<string>;
            loadBalancerIP?: pulumi.Input<string>;
            loadBalancerSourceRanges?: pulumi.Input<pulumi.Input<string>[]>;
            ports?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideServiceSpecPortsPatch>[]>;
            publishNotReadyAddresses?: pulumi.Input<boolean>;
            selector?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            sessionAffinity?: pulumi.Input<string>;
            sessionAffinityConfig?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideServiceSpecSessionAffinityConfigPatch>;
            trafficDistribution?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideServiceSpecPorts {
            appProtocol?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            nodePort?: pulumi.Input<number>;
            port?: pulumi.Input<number>;
            protocol?: pulumi.Input<string>;
            targetPort?: pulumi.Input<number | string>;
        }
        interface RabbitmqClusterSpecOverrideServiceSpecPortsPatch {
            appProtocol?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            nodePort?: pulumi.Input<number>;
            port?: pulumi.Input<number>;
            protocol?: pulumi.Input<string>;
            targetPort?: pulumi.Input<number | string>;
        }
        interface RabbitmqClusterSpecOverrideServiceSpecSessionAffinityConfig {
            clientIP?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideServiceSpecSessionAffinityConfigClientIP>;
        }
        interface RabbitmqClusterSpecOverrideServiceSpecSessionAffinityConfigClientIP {
            timeoutSeconds?: pulumi.Input<number>;
        }
        interface RabbitmqClusterSpecOverrideServiceSpecSessionAffinityConfigClientIPPatch {
            timeoutSeconds?: pulumi.Input<number>;
        }
        interface RabbitmqClusterSpecOverrideServiceSpecSessionAffinityConfigPatch {
            clientIP?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideServiceSpecSessionAffinityConfigClientIPPatch>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSet {
            metadata?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetMetadata>;
            spec?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpec>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetMetadata {
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetMetadataPatch {
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetPatch {
            metadata?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetMetadataPatch>;
            spec?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecPatch>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpec {
            minReadySeconds?: pulumi.Input<number>;
            persistentVolumeClaimRetentionPolicy?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecPersistentVolumeClaimRetentionPolicy>;
            podManagementPolicy?: pulumi.Input<string>;
            replicas?: pulumi.Input<number>;
            selector?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecSelector>;
            serviceName?: pulumi.Input<string>;
            template?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplate>;
            updateStrategy?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecUpdateStrategy>;
            volumeClaimTemplates?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplates>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecPatch {
            minReadySeconds?: pulumi.Input<number>;
            persistentVolumeClaimRetentionPolicy?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecPersistentVolumeClaimRetentionPolicyPatch>;
            podManagementPolicy?: pulumi.Input<string>;
            replicas?: pulumi.Input<number>;
            selector?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecSelectorPatch>;
            serviceName?: pulumi.Input<string>;
            template?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplatePatch>;
            updateStrategy?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecUpdateStrategyPatch>;
            volumeClaimTemplates?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesPatch>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecPersistentVolumeClaimRetentionPolicy {
            whenDeleted?: pulumi.Input<string>;
            whenScaled?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecPersistentVolumeClaimRetentionPolicyPatch {
            whenDeleted?: pulumi.Input<string>;
            whenScaled?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplate {
            metadata?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateMetadata>;
            spec?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpec>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateMetadata {
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            name?: pulumi.Input<string>;
            namespace?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateMetadataPatch {
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            name?: pulumi.Input<string>;
            namespace?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplatePatch {
            metadata?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateMetadataPatch>;
            spec?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecPatch>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpec {
            activeDeadlineSeconds?: pulumi.Input<number>;
            affinity?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinity>;
            automountServiceAccountToken?: pulumi.Input<boolean>;
            containers?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainers>[]>;
            dnsConfig?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecDnsConfig>;
            dnsPolicy?: pulumi.Input<string>;
            enableServiceLinks?: pulumi.Input<boolean>;
            ephemeralContainers?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainers>[]>;
            hostAliases?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecHostAliases>[]>;
            hostIPC?: pulumi.Input<boolean>;
            hostNetwork?: pulumi.Input<boolean>;
            hostPID?: pulumi.Input<boolean>;
            hostUsers?: pulumi.Input<boolean>;
            hostname?: pulumi.Input<string>;
            hostnameOverride?: pulumi.Input<string>;
            imagePullSecrets?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecImagePullSecrets>[]>;
            initContainers?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainers>[]>;
            nodeName?: pulumi.Input<string>;
            nodeSelector?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            os?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecOs>;
            overhead?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            preemptionPolicy?: pulumi.Input<string>;
            priority?: pulumi.Input<number>;
            priorityClassName?: pulumi.Input<string>;
            readinessGates?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecReadinessGates>[]>;
            resourceClaims?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecResourceClaims>[]>;
            resources?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecResources>;
            restartPolicy?: pulumi.Input<string>;
            runtimeClassName?: pulumi.Input<string>;
            schedulerName?: pulumi.Input<string>;
            schedulingGates?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSchedulingGates>[]>;
            securityContext?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSecurityContext>;
            serviceAccount?: pulumi.Input<string>;
            serviceAccountName?: pulumi.Input<string>;
            setHostnameAsFQDN?: pulumi.Input<boolean>;
            shareProcessNamespace?: pulumi.Input<boolean>;
            subdomain?: pulumi.Input<string>;
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            tolerations?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecTolerations>[]>;
            topologySpreadConstraints?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecTopologySpreadConstraints>[]>;
            volumes?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumes>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinity {
            nodeAffinity?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinity>;
            podAffinity?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinity>;
            podAntiAffinity?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinity>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinity {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            preference?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference>;
            weight?: pulumi.Input<number>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            preference?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch>;
            weight?: pulumi.Input<number>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            nodeSelectorTerms?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch>[]>;
            matchFields?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            nodeSelectorTerms?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPatch {
            nodeAffinity?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityPatch>;
            podAffinity?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPatch>;
            podAntiAffinity?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPatch>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinity {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm>;
            weight?: pulumi.Input<number>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch>;
            weight?: pulumi.Input<number>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector>;
            matchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            mismatchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            namespaceSelector?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch>;
            matchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            mismatchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            namespaceSelector?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector>;
            matchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            mismatchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            namespaceSelector?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch>;
            matchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            mismatchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            namespaceSelector?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinity {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
            requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm>;
            weight?: pulumi.Input<number>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch>;
            weight?: pulumi.Input<number>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector>;
            matchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            mismatchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            namespaceSelector?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch>;
            matchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            mismatchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            namespaceSelector?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector>;
            matchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            mismatchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            namespaceSelector?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch>;
            matchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            mismatchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            namespaceSelector?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch>;
            namespaces?: pulumi.Input<pulumi.Input<string>[]>;
            topologyKey?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainers {
            args?: pulumi.Input<pulumi.Input<string>[]>;
            command?: pulumi.Input<pulumi.Input<string>[]>;
            env?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnv>[]>;
            envFrom?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvFrom>[]>;
            image?: pulumi.Input<string>;
            imagePullPolicy?: pulumi.Input<string>;
            lifecycle?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecycle>;
            livenessProbe?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLivenessProbe>;
            name?: pulumi.Input<string>;
            ports?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersPorts>[]>;
            readinessProbe?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersReadinessProbe>;
            resizePolicy?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersResizePolicy>[]>;
            resources?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersResources>;
            restartPolicy?: pulumi.Input<string>;
            restartPolicyRules?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersRestartPolicyRules>[]>;
            securityContext?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersSecurityContext>;
            startupProbe?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersStartupProbe>;
            stdin?: pulumi.Input<boolean>;
            stdinOnce?: pulumi.Input<boolean>;
            terminationMessagePath?: pulumi.Input<string>;
            terminationMessagePolicy?: pulumi.Input<string>;
            tty?: pulumi.Input<boolean>;
            volumeDevices?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersVolumeDevices>[]>;
            volumeMounts?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersVolumeMounts>[]>;
            workingDir?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnv {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
            valueFrom?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvValueFrom>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvFrom {
            configMapRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvFromConfigMapRef>;
            prefix?: pulumi.Input<string>;
            secretRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvFromSecretRef>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvFromConfigMapRef {
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvFromConfigMapRefPatch {
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvFromPatch {
            configMapRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvFromConfigMapRefPatch>;
            prefix?: pulumi.Input<string>;
            secretRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvFromSecretRefPatch>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvFromSecretRef {
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvFromSecretRefPatch {
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvPatch {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
            valueFrom?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvValueFromPatch>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvValueFrom {
            configMapKeyRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvValueFromConfigMapKeyRef>;
            fieldRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvValueFromFieldRef>;
            fileKeyRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvValueFromFileKeyRef>;
            resourceFieldRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvValueFromResourceFieldRef>;
            secretKeyRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvValueFromSecretKeyRef>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvValueFromConfigMapKeyRef {
            key?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvValueFromConfigMapKeyRefPatch {
            key?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvValueFromFieldRef {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvValueFromFieldRefPatch {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvValueFromFileKeyRef {
            key?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
            path?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvValueFromFileKeyRefPatch {
            key?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
            path?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvValueFromPatch {
            configMapKeyRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvValueFromConfigMapKeyRefPatch>;
            fieldRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvValueFromFieldRefPatch>;
            fileKeyRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvValueFromFileKeyRefPatch>;
            resourceFieldRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvValueFromResourceFieldRefPatch>;
            secretKeyRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvValueFromSecretKeyRefPatch>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvValueFromResourceFieldRef {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvValueFromResourceFieldRefPatch {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvValueFromSecretKeyRef {
            key?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvValueFromSecretKeyRefPatch {
            key?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecycle {
            postStart?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePostStart>;
            preStop?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePreStop>;
            stopSignal?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePatch {
            postStart?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePostStartPatch>;
            preStop?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePreStopPatch>;
            stopSignal?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePostStart {
            exec?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePostStartExec>;
            httpGet?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePostStartHttpGet>;
            sleep?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePostStartSleep>;
            tcpSocket?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePostStartTcpSocket>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePostStartExec {
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePostStartExecPatch {
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePostStartHttpGet {
            host?: pulumi.Input<string>;
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePostStartHttpGetHttpHeaders>[]>;
            path?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
            scheme?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePostStartHttpGetHttpHeaders {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePostStartHttpGetHttpHeadersPatch {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePostStartHttpGetPatch {
            host?: pulumi.Input<string>;
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePostStartHttpGetHttpHeadersPatch>[]>;
            path?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
            scheme?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePostStartPatch {
            exec?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePostStartExecPatch>;
            httpGet?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePostStartHttpGetPatch>;
            sleep?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePostStartSleepPatch>;
            tcpSocket?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePostStartTcpSocketPatch>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePostStartSleep {
            seconds?: pulumi.Input<number>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePostStartSleepPatch {
            seconds?: pulumi.Input<number>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePostStartTcpSocket {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePostStartTcpSocketPatch {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePreStop {
            exec?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePreStopExec>;
            httpGet?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePreStopHttpGet>;
            sleep?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePreStopSleep>;
            tcpSocket?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePreStopTcpSocket>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePreStopExec {
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePreStopExecPatch {
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePreStopHttpGet {
            host?: pulumi.Input<string>;
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePreStopHttpGetHttpHeaders>[]>;
            path?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
            scheme?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePreStopHttpGetHttpHeaders {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePreStopHttpGetHttpHeadersPatch {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePreStopHttpGetPatch {
            host?: pulumi.Input<string>;
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePreStopHttpGetHttpHeadersPatch>[]>;
            path?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
            scheme?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePreStopPatch {
            exec?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePreStopExecPatch>;
            httpGet?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePreStopHttpGetPatch>;
            sleep?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePreStopSleepPatch>;
            tcpSocket?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePreStopTcpSocketPatch>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePreStopSleep {
            seconds?: pulumi.Input<number>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePreStopSleepPatch {
            seconds?: pulumi.Input<number>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePreStopTcpSocket {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePreStopTcpSocketPatch {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLivenessProbe {
            exec?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLivenessProbeExec>;
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLivenessProbeGrpc>;
            httpGet?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLivenessProbeHttpGet>;
            initialDelaySeconds?: pulumi.Input<number>;
            periodSeconds?: pulumi.Input<number>;
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLivenessProbeTcpSocket>;
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            timeoutSeconds?: pulumi.Input<number>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLivenessProbeExec {
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLivenessProbeExecPatch {
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLivenessProbeGrpc {
            port?: pulumi.Input<number>;
            service?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLivenessProbeGrpcPatch {
            port?: pulumi.Input<number>;
            service?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLivenessProbeHttpGet {
            host?: pulumi.Input<string>;
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLivenessProbeHttpGetHttpHeaders>[]>;
            path?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
            scheme?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLivenessProbeHttpGetHttpHeaders {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLivenessProbeHttpGetHttpHeadersPatch {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLivenessProbeHttpGetPatch {
            host?: pulumi.Input<string>;
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLivenessProbeHttpGetHttpHeadersPatch>[]>;
            path?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
            scheme?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLivenessProbePatch {
            exec?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLivenessProbeExecPatch>;
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLivenessProbeGrpcPatch>;
            httpGet?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLivenessProbeHttpGetPatch>;
            initialDelaySeconds?: pulumi.Input<number>;
            periodSeconds?: pulumi.Input<number>;
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLivenessProbeTcpSocketPatch>;
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            timeoutSeconds?: pulumi.Input<number>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLivenessProbeTcpSocket {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLivenessProbeTcpSocketPatch {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersPatch {
            args?: pulumi.Input<pulumi.Input<string>[]>;
            command?: pulumi.Input<pulumi.Input<string>[]>;
            env?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvPatch>[]>;
            envFrom?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvFromPatch>[]>;
            image?: pulumi.Input<string>;
            imagePullPolicy?: pulumi.Input<string>;
            lifecycle?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePatch>;
            livenessProbe?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLivenessProbePatch>;
            name?: pulumi.Input<string>;
            ports?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersPortsPatch>[]>;
            readinessProbe?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersReadinessProbePatch>;
            resizePolicy?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersResizePolicyPatch>[]>;
            resources?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersResourcesPatch>;
            restartPolicy?: pulumi.Input<string>;
            restartPolicyRules?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersRestartPolicyRulesPatch>[]>;
            securityContext?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersSecurityContextPatch>;
            startupProbe?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersStartupProbePatch>;
            stdin?: pulumi.Input<boolean>;
            stdinOnce?: pulumi.Input<boolean>;
            terminationMessagePath?: pulumi.Input<string>;
            terminationMessagePolicy?: pulumi.Input<string>;
            tty?: pulumi.Input<boolean>;
            volumeDevices?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersVolumeDevicesPatch>[]>;
            volumeMounts?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersVolumeMountsPatch>[]>;
            workingDir?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersPorts {
            containerPort?: pulumi.Input<number>;
            hostIP?: pulumi.Input<string>;
            hostPort?: pulumi.Input<number>;
            name?: pulumi.Input<string>;
            protocol?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersPortsPatch {
            containerPort?: pulumi.Input<number>;
            hostIP?: pulumi.Input<string>;
            hostPort?: pulumi.Input<number>;
            name?: pulumi.Input<string>;
            protocol?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersReadinessProbe {
            exec?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersReadinessProbeExec>;
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersReadinessProbeGrpc>;
            httpGet?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersReadinessProbeHttpGet>;
            initialDelaySeconds?: pulumi.Input<number>;
            periodSeconds?: pulumi.Input<number>;
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersReadinessProbeTcpSocket>;
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            timeoutSeconds?: pulumi.Input<number>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersReadinessProbeExec {
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersReadinessProbeExecPatch {
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersReadinessProbeGrpc {
            port?: pulumi.Input<number>;
            service?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersReadinessProbeGrpcPatch {
            port?: pulumi.Input<number>;
            service?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersReadinessProbeHttpGet {
            host?: pulumi.Input<string>;
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersReadinessProbeHttpGetHttpHeaders>[]>;
            path?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
            scheme?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersReadinessProbeHttpGetHttpHeaders {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersReadinessProbeHttpGetHttpHeadersPatch {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersReadinessProbeHttpGetPatch {
            host?: pulumi.Input<string>;
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersReadinessProbeHttpGetHttpHeadersPatch>[]>;
            path?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
            scheme?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersReadinessProbePatch {
            exec?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersReadinessProbeExecPatch>;
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersReadinessProbeGrpcPatch>;
            httpGet?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersReadinessProbeHttpGetPatch>;
            initialDelaySeconds?: pulumi.Input<number>;
            periodSeconds?: pulumi.Input<number>;
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersReadinessProbeTcpSocketPatch>;
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            timeoutSeconds?: pulumi.Input<number>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersReadinessProbeTcpSocket {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersReadinessProbeTcpSocketPatch {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersResizePolicy {
            resourceName?: pulumi.Input<string>;
            restartPolicy?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersResizePolicyPatch {
            resourceName?: pulumi.Input<string>;
            restartPolicy?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersResources {
            claims?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersResourcesClaims>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersResourcesClaims {
            name?: pulumi.Input<string>;
            request?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersResourcesClaimsPatch {
            name?: pulumi.Input<string>;
            request?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersResourcesPatch {
            claims?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersResourcesClaimsPatch>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersRestartPolicyRules {
            action?: pulumi.Input<string>;
            exitCodes?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersRestartPolicyRulesExitCodes>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersRestartPolicyRulesExitCodes {
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<number>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersRestartPolicyRulesExitCodesPatch {
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<number>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersRestartPolicyRulesPatch {
            action?: pulumi.Input<string>;
            exitCodes?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersRestartPolicyRulesExitCodesPatch>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersSecurityContext {
            allowPrivilegeEscalation?: pulumi.Input<boolean>;
            appArmorProfile?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersSecurityContextAppArmorProfile>;
            capabilities?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersSecurityContextCapabilities>;
            privileged?: pulumi.Input<boolean>;
            procMount?: pulumi.Input<string>;
            readOnlyRootFilesystem?: pulumi.Input<boolean>;
            runAsGroup?: pulumi.Input<number>;
            runAsNonRoot?: pulumi.Input<boolean>;
            runAsUser?: pulumi.Input<number>;
            seLinuxOptions?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersSecurityContextSeLinuxOptions>;
            seccompProfile?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersSecurityContextSeccompProfile>;
            windowsOptions?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersSecurityContextWindowsOptions>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersSecurityContextAppArmorProfile {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersSecurityContextAppArmorProfilePatch {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersSecurityContextCapabilities {
            add?: pulumi.Input<pulumi.Input<string>[]>;
            drop?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersSecurityContextCapabilitiesPatch {
            add?: pulumi.Input<pulumi.Input<string>[]>;
            drop?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersSecurityContextPatch {
            allowPrivilegeEscalation?: pulumi.Input<boolean>;
            appArmorProfile?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersSecurityContextAppArmorProfilePatch>;
            capabilities?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersSecurityContextCapabilitiesPatch>;
            privileged?: pulumi.Input<boolean>;
            procMount?: pulumi.Input<string>;
            readOnlyRootFilesystem?: pulumi.Input<boolean>;
            runAsGroup?: pulumi.Input<number>;
            runAsNonRoot?: pulumi.Input<boolean>;
            runAsUser?: pulumi.Input<number>;
            seLinuxOptions?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersSecurityContextSeLinuxOptionsPatch>;
            seccompProfile?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersSecurityContextSeccompProfilePatch>;
            windowsOptions?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersSecurityContextWindowsOptionsPatch>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersSecurityContextSeLinuxOptions {
            level?: pulumi.Input<string>;
            role?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersSecurityContextSeLinuxOptionsPatch {
            level?: pulumi.Input<string>;
            role?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersSecurityContextSeccompProfile {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersSecurityContextSeccompProfilePatch {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersSecurityContextWindowsOptions {
            gmsaCredentialSpec?: pulumi.Input<string>;
            gmsaCredentialSpecName?: pulumi.Input<string>;
            hostProcess?: pulumi.Input<boolean>;
            runAsUserName?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersSecurityContextWindowsOptionsPatch {
            gmsaCredentialSpec?: pulumi.Input<string>;
            gmsaCredentialSpecName?: pulumi.Input<string>;
            hostProcess?: pulumi.Input<boolean>;
            runAsUserName?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersStartupProbe {
            exec?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersStartupProbeExec>;
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersStartupProbeGrpc>;
            httpGet?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersStartupProbeHttpGet>;
            initialDelaySeconds?: pulumi.Input<number>;
            periodSeconds?: pulumi.Input<number>;
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersStartupProbeTcpSocket>;
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            timeoutSeconds?: pulumi.Input<number>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersStartupProbeExec {
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersStartupProbeExecPatch {
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersStartupProbeGrpc {
            port?: pulumi.Input<number>;
            service?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersStartupProbeGrpcPatch {
            port?: pulumi.Input<number>;
            service?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersStartupProbeHttpGet {
            host?: pulumi.Input<string>;
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersStartupProbeHttpGetHttpHeaders>[]>;
            path?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
            scheme?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersStartupProbeHttpGetHttpHeaders {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersStartupProbeHttpGetHttpHeadersPatch {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersStartupProbeHttpGetPatch {
            host?: pulumi.Input<string>;
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersStartupProbeHttpGetHttpHeadersPatch>[]>;
            path?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
            scheme?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersStartupProbePatch {
            exec?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersStartupProbeExecPatch>;
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersStartupProbeGrpcPatch>;
            httpGet?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersStartupProbeHttpGetPatch>;
            initialDelaySeconds?: pulumi.Input<number>;
            periodSeconds?: pulumi.Input<number>;
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersStartupProbeTcpSocketPatch>;
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            timeoutSeconds?: pulumi.Input<number>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersStartupProbeTcpSocket {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersStartupProbeTcpSocketPatch {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersVolumeDevices {
            devicePath?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersVolumeDevicesPatch {
            devicePath?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersVolumeMounts {
            mountPath?: pulumi.Input<string>;
            mountPropagation?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            recursiveReadOnly?: pulumi.Input<string>;
            subPath?: pulumi.Input<string>;
            subPathExpr?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersVolumeMountsPatch {
            mountPath?: pulumi.Input<string>;
            mountPropagation?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            recursiveReadOnly?: pulumi.Input<string>;
            subPath?: pulumi.Input<string>;
            subPathExpr?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecDnsConfig {
            nameservers?: pulumi.Input<pulumi.Input<string>[]>;
            options?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecDnsConfigOptions>[]>;
            searches?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecDnsConfigOptions {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecDnsConfigOptionsPatch {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecDnsConfigPatch {
            nameservers?: pulumi.Input<pulumi.Input<string>[]>;
            options?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecDnsConfigOptionsPatch>[]>;
            searches?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainers {
            args?: pulumi.Input<pulumi.Input<string>[]>;
            command?: pulumi.Input<pulumi.Input<string>[]>;
            env?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnv>[]>;
            envFrom?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvFrom>[]>;
            image?: pulumi.Input<string>;
            imagePullPolicy?: pulumi.Input<string>;
            lifecycle?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecycle>;
            livenessProbe?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLivenessProbe>;
            name?: pulumi.Input<string>;
            ports?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersPorts>[]>;
            readinessProbe?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersReadinessProbe>;
            resizePolicy?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersResizePolicy>[]>;
            resources?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersResources>;
            restartPolicy?: pulumi.Input<string>;
            restartPolicyRules?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersRestartPolicyRules>[]>;
            securityContext?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersSecurityContext>;
            startupProbe?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersStartupProbe>;
            stdin?: pulumi.Input<boolean>;
            stdinOnce?: pulumi.Input<boolean>;
            targetContainerName?: pulumi.Input<string>;
            terminationMessagePath?: pulumi.Input<string>;
            terminationMessagePolicy?: pulumi.Input<string>;
            tty?: pulumi.Input<boolean>;
            volumeDevices?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersVolumeDevices>[]>;
            volumeMounts?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersVolumeMounts>[]>;
            workingDir?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnv {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
            valueFrom?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvValueFrom>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvFrom {
            configMapRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvFromConfigMapRef>;
            prefix?: pulumi.Input<string>;
            secretRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvFromSecretRef>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvFromConfigMapRef {
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvFromConfigMapRefPatch {
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvFromPatch {
            configMapRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvFromConfigMapRefPatch>;
            prefix?: pulumi.Input<string>;
            secretRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvFromSecretRefPatch>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvFromSecretRef {
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvFromSecretRefPatch {
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvPatch {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
            valueFrom?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvValueFromPatch>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvValueFrom {
            configMapKeyRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvValueFromConfigMapKeyRef>;
            fieldRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvValueFromFieldRef>;
            fileKeyRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvValueFromFileKeyRef>;
            resourceFieldRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvValueFromResourceFieldRef>;
            secretKeyRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvValueFromSecretKeyRef>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvValueFromConfigMapKeyRef {
            key?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvValueFromConfigMapKeyRefPatch {
            key?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvValueFromFieldRef {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvValueFromFieldRefPatch {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvValueFromFileKeyRef {
            key?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
            path?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvValueFromFileKeyRefPatch {
            key?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
            path?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvValueFromPatch {
            configMapKeyRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvValueFromConfigMapKeyRefPatch>;
            fieldRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvValueFromFieldRefPatch>;
            fileKeyRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvValueFromFileKeyRefPatch>;
            resourceFieldRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvValueFromResourceFieldRefPatch>;
            secretKeyRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvValueFromSecretKeyRefPatch>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvValueFromResourceFieldRef {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvValueFromResourceFieldRefPatch {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvValueFromSecretKeyRef {
            key?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvValueFromSecretKeyRefPatch {
            key?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecycle {
            postStart?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePostStart>;
            preStop?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePreStop>;
            stopSignal?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePatch {
            postStart?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePostStartPatch>;
            preStop?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePreStopPatch>;
            stopSignal?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePostStart {
            exec?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePostStartExec>;
            httpGet?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePostStartHttpGet>;
            sleep?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePostStartSleep>;
            tcpSocket?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePostStartTcpSocket>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePostStartExec {
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePostStartExecPatch {
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePostStartHttpGet {
            host?: pulumi.Input<string>;
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePostStartHttpGetHttpHeaders>[]>;
            path?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
            scheme?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePostStartHttpGetHttpHeaders {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePostStartHttpGetHttpHeadersPatch {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePostStartHttpGetPatch {
            host?: pulumi.Input<string>;
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePostStartHttpGetHttpHeadersPatch>[]>;
            path?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
            scheme?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePostStartPatch {
            exec?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePostStartExecPatch>;
            httpGet?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePostStartHttpGetPatch>;
            sleep?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePostStartSleepPatch>;
            tcpSocket?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePostStartTcpSocketPatch>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePostStartSleep {
            seconds?: pulumi.Input<number>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePostStartSleepPatch {
            seconds?: pulumi.Input<number>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePostStartTcpSocket {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePostStartTcpSocketPatch {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePreStop {
            exec?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePreStopExec>;
            httpGet?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePreStopHttpGet>;
            sleep?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePreStopSleep>;
            tcpSocket?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePreStopTcpSocket>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePreStopExec {
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePreStopExecPatch {
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePreStopHttpGet {
            host?: pulumi.Input<string>;
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePreStopHttpGetHttpHeaders>[]>;
            path?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
            scheme?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePreStopHttpGetHttpHeaders {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePreStopHttpGetHttpHeadersPatch {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePreStopHttpGetPatch {
            host?: pulumi.Input<string>;
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePreStopHttpGetHttpHeadersPatch>[]>;
            path?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
            scheme?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePreStopPatch {
            exec?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePreStopExecPatch>;
            httpGet?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePreStopHttpGetPatch>;
            sleep?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePreStopSleepPatch>;
            tcpSocket?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePreStopTcpSocketPatch>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePreStopSleep {
            seconds?: pulumi.Input<number>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePreStopSleepPatch {
            seconds?: pulumi.Input<number>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePreStopTcpSocket {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePreStopTcpSocketPatch {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLivenessProbe {
            exec?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLivenessProbeExec>;
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLivenessProbeGrpc>;
            httpGet?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLivenessProbeHttpGet>;
            initialDelaySeconds?: pulumi.Input<number>;
            periodSeconds?: pulumi.Input<number>;
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLivenessProbeTcpSocket>;
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            timeoutSeconds?: pulumi.Input<number>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLivenessProbeExec {
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLivenessProbeExecPatch {
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLivenessProbeGrpc {
            port?: pulumi.Input<number>;
            service?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLivenessProbeGrpcPatch {
            port?: pulumi.Input<number>;
            service?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLivenessProbeHttpGet {
            host?: pulumi.Input<string>;
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLivenessProbeHttpGetHttpHeaders>[]>;
            path?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
            scheme?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLivenessProbeHttpGetHttpHeaders {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLivenessProbeHttpGetHttpHeadersPatch {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLivenessProbeHttpGetPatch {
            host?: pulumi.Input<string>;
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLivenessProbeHttpGetHttpHeadersPatch>[]>;
            path?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
            scheme?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLivenessProbePatch {
            exec?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLivenessProbeExecPatch>;
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLivenessProbeGrpcPatch>;
            httpGet?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLivenessProbeHttpGetPatch>;
            initialDelaySeconds?: pulumi.Input<number>;
            periodSeconds?: pulumi.Input<number>;
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLivenessProbeTcpSocketPatch>;
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            timeoutSeconds?: pulumi.Input<number>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLivenessProbeTcpSocket {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLivenessProbeTcpSocketPatch {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersPatch {
            args?: pulumi.Input<pulumi.Input<string>[]>;
            command?: pulumi.Input<pulumi.Input<string>[]>;
            env?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvPatch>[]>;
            envFrom?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvFromPatch>[]>;
            image?: pulumi.Input<string>;
            imagePullPolicy?: pulumi.Input<string>;
            lifecycle?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePatch>;
            livenessProbe?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLivenessProbePatch>;
            name?: pulumi.Input<string>;
            ports?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersPortsPatch>[]>;
            readinessProbe?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersReadinessProbePatch>;
            resizePolicy?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersResizePolicyPatch>[]>;
            resources?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersResourcesPatch>;
            restartPolicy?: pulumi.Input<string>;
            restartPolicyRules?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersRestartPolicyRulesPatch>[]>;
            securityContext?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersSecurityContextPatch>;
            startupProbe?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersStartupProbePatch>;
            stdin?: pulumi.Input<boolean>;
            stdinOnce?: pulumi.Input<boolean>;
            targetContainerName?: pulumi.Input<string>;
            terminationMessagePath?: pulumi.Input<string>;
            terminationMessagePolicy?: pulumi.Input<string>;
            tty?: pulumi.Input<boolean>;
            volumeDevices?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersVolumeDevicesPatch>[]>;
            volumeMounts?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersVolumeMountsPatch>[]>;
            workingDir?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersPorts {
            containerPort?: pulumi.Input<number>;
            hostIP?: pulumi.Input<string>;
            hostPort?: pulumi.Input<number>;
            name?: pulumi.Input<string>;
            protocol?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersPortsPatch {
            containerPort?: pulumi.Input<number>;
            hostIP?: pulumi.Input<string>;
            hostPort?: pulumi.Input<number>;
            name?: pulumi.Input<string>;
            protocol?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersReadinessProbe {
            exec?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersReadinessProbeExec>;
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersReadinessProbeGrpc>;
            httpGet?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersReadinessProbeHttpGet>;
            initialDelaySeconds?: pulumi.Input<number>;
            periodSeconds?: pulumi.Input<number>;
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersReadinessProbeTcpSocket>;
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            timeoutSeconds?: pulumi.Input<number>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersReadinessProbeExec {
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersReadinessProbeExecPatch {
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersReadinessProbeGrpc {
            port?: pulumi.Input<number>;
            service?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersReadinessProbeGrpcPatch {
            port?: pulumi.Input<number>;
            service?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersReadinessProbeHttpGet {
            host?: pulumi.Input<string>;
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersReadinessProbeHttpGetHttpHeaders>[]>;
            path?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
            scheme?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersReadinessProbeHttpGetHttpHeaders {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersReadinessProbeHttpGetHttpHeadersPatch {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersReadinessProbeHttpGetPatch {
            host?: pulumi.Input<string>;
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersReadinessProbeHttpGetHttpHeadersPatch>[]>;
            path?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
            scheme?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersReadinessProbePatch {
            exec?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersReadinessProbeExecPatch>;
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersReadinessProbeGrpcPatch>;
            httpGet?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersReadinessProbeHttpGetPatch>;
            initialDelaySeconds?: pulumi.Input<number>;
            periodSeconds?: pulumi.Input<number>;
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersReadinessProbeTcpSocketPatch>;
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            timeoutSeconds?: pulumi.Input<number>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersReadinessProbeTcpSocket {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersReadinessProbeTcpSocketPatch {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersResizePolicy {
            resourceName?: pulumi.Input<string>;
            restartPolicy?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersResizePolicyPatch {
            resourceName?: pulumi.Input<string>;
            restartPolicy?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersResources {
            claims?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersResourcesClaims>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersResourcesClaims {
            name?: pulumi.Input<string>;
            request?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersResourcesClaimsPatch {
            name?: pulumi.Input<string>;
            request?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersResourcesPatch {
            claims?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersResourcesClaimsPatch>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersRestartPolicyRules {
            action?: pulumi.Input<string>;
            exitCodes?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersRestartPolicyRulesExitCodes>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersRestartPolicyRulesExitCodes {
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<number>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersRestartPolicyRulesExitCodesPatch {
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<number>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersRestartPolicyRulesPatch {
            action?: pulumi.Input<string>;
            exitCodes?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersRestartPolicyRulesExitCodesPatch>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersSecurityContext {
            allowPrivilegeEscalation?: pulumi.Input<boolean>;
            appArmorProfile?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersSecurityContextAppArmorProfile>;
            capabilities?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersSecurityContextCapabilities>;
            privileged?: pulumi.Input<boolean>;
            procMount?: pulumi.Input<string>;
            readOnlyRootFilesystem?: pulumi.Input<boolean>;
            runAsGroup?: pulumi.Input<number>;
            runAsNonRoot?: pulumi.Input<boolean>;
            runAsUser?: pulumi.Input<number>;
            seLinuxOptions?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersSecurityContextSeLinuxOptions>;
            seccompProfile?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersSecurityContextSeccompProfile>;
            windowsOptions?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersSecurityContextWindowsOptions>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersSecurityContextAppArmorProfile {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersSecurityContextAppArmorProfilePatch {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersSecurityContextCapabilities {
            add?: pulumi.Input<pulumi.Input<string>[]>;
            drop?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersSecurityContextCapabilitiesPatch {
            add?: pulumi.Input<pulumi.Input<string>[]>;
            drop?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersSecurityContextPatch {
            allowPrivilegeEscalation?: pulumi.Input<boolean>;
            appArmorProfile?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersSecurityContextAppArmorProfilePatch>;
            capabilities?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersSecurityContextCapabilitiesPatch>;
            privileged?: pulumi.Input<boolean>;
            procMount?: pulumi.Input<string>;
            readOnlyRootFilesystem?: pulumi.Input<boolean>;
            runAsGroup?: pulumi.Input<number>;
            runAsNonRoot?: pulumi.Input<boolean>;
            runAsUser?: pulumi.Input<number>;
            seLinuxOptions?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersSecurityContextSeLinuxOptionsPatch>;
            seccompProfile?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersSecurityContextSeccompProfilePatch>;
            windowsOptions?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersSecurityContextWindowsOptionsPatch>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersSecurityContextSeLinuxOptions {
            level?: pulumi.Input<string>;
            role?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersSecurityContextSeLinuxOptionsPatch {
            level?: pulumi.Input<string>;
            role?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersSecurityContextSeccompProfile {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersSecurityContextSeccompProfilePatch {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersSecurityContextWindowsOptions {
            gmsaCredentialSpec?: pulumi.Input<string>;
            gmsaCredentialSpecName?: pulumi.Input<string>;
            hostProcess?: pulumi.Input<boolean>;
            runAsUserName?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersSecurityContextWindowsOptionsPatch {
            gmsaCredentialSpec?: pulumi.Input<string>;
            gmsaCredentialSpecName?: pulumi.Input<string>;
            hostProcess?: pulumi.Input<boolean>;
            runAsUserName?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersStartupProbe {
            exec?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersStartupProbeExec>;
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersStartupProbeGrpc>;
            httpGet?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersStartupProbeHttpGet>;
            initialDelaySeconds?: pulumi.Input<number>;
            periodSeconds?: pulumi.Input<number>;
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersStartupProbeTcpSocket>;
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            timeoutSeconds?: pulumi.Input<number>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersStartupProbeExec {
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersStartupProbeExecPatch {
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersStartupProbeGrpc {
            port?: pulumi.Input<number>;
            service?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersStartupProbeGrpcPatch {
            port?: pulumi.Input<number>;
            service?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersStartupProbeHttpGet {
            host?: pulumi.Input<string>;
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersStartupProbeHttpGetHttpHeaders>[]>;
            path?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
            scheme?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersStartupProbeHttpGetHttpHeaders {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersStartupProbeHttpGetHttpHeadersPatch {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersStartupProbeHttpGetPatch {
            host?: pulumi.Input<string>;
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersStartupProbeHttpGetHttpHeadersPatch>[]>;
            path?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
            scheme?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersStartupProbePatch {
            exec?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersStartupProbeExecPatch>;
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersStartupProbeGrpcPatch>;
            httpGet?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersStartupProbeHttpGetPatch>;
            initialDelaySeconds?: pulumi.Input<number>;
            periodSeconds?: pulumi.Input<number>;
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersStartupProbeTcpSocketPatch>;
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            timeoutSeconds?: pulumi.Input<number>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersStartupProbeTcpSocket {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersStartupProbeTcpSocketPatch {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersVolumeDevices {
            devicePath?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersVolumeDevicesPatch {
            devicePath?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersVolumeMounts {
            mountPath?: pulumi.Input<string>;
            mountPropagation?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            recursiveReadOnly?: pulumi.Input<string>;
            subPath?: pulumi.Input<string>;
            subPathExpr?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersVolumeMountsPatch {
            mountPath?: pulumi.Input<string>;
            mountPropagation?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            recursiveReadOnly?: pulumi.Input<string>;
            subPath?: pulumi.Input<string>;
            subPathExpr?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecHostAliases {
            hostnames?: pulumi.Input<pulumi.Input<string>[]>;
            ip?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecHostAliasesPatch {
            hostnames?: pulumi.Input<pulumi.Input<string>[]>;
            ip?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecImagePullSecrets {
            name?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecImagePullSecretsPatch {
            name?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainers {
            args?: pulumi.Input<pulumi.Input<string>[]>;
            command?: pulumi.Input<pulumi.Input<string>[]>;
            env?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnv>[]>;
            envFrom?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvFrom>[]>;
            image?: pulumi.Input<string>;
            imagePullPolicy?: pulumi.Input<string>;
            lifecycle?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecycle>;
            livenessProbe?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLivenessProbe>;
            name?: pulumi.Input<string>;
            ports?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersPorts>[]>;
            readinessProbe?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersReadinessProbe>;
            resizePolicy?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersResizePolicy>[]>;
            resources?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersResources>;
            restartPolicy?: pulumi.Input<string>;
            restartPolicyRules?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersRestartPolicyRules>[]>;
            securityContext?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersSecurityContext>;
            startupProbe?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersStartupProbe>;
            stdin?: pulumi.Input<boolean>;
            stdinOnce?: pulumi.Input<boolean>;
            terminationMessagePath?: pulumi.Input<string>;
            terminationMessagePolicy?: pulumi.Input<string>;
            tty?: pulumi.Input<boolean>;
            volumeDevices?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersVolumeDevices>[]>;
            volumeMounts?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersVolumeMounts>[]>;
            workingDir?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnv {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
            valueFrom?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvValueFrom>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvFrom {
            configMapRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvFromConfigMapRef>;
            prefix?: pulumi.Input<string>;
            secretRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvFromSecretRef>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvFromConfigMapRef {
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvFromConfigMapRefPatch {
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvFromPatch {
            configMapRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvFromConfigMapRefPatch>;
            prefix?: pulumi.Input<string>;
            secretRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvFromSecretRefPatch>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvFromSecretRef {
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvFromSecretRefPatch {
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvPatch {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
            valueFrom?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvValueFromPatch>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvValueFrom {
            configMapKeyRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvValueFromConfigMapKeyRef>;
            fieldRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvValueFromFieldRef>;
            fileKeyRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvValueFromFileKeyRef>;
            resourceFieldRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvValueFromResourceFieldRef>;
            secretKeyRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvValueFromSecretKeyRef>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvValueFromConfigMapKeyRef {
            key?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvValueFromConfigMapKeyRefPatch {
            key?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvValueFromFieldRef {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvValueFromFieldRefPatch {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvValueFromFileKeyRef {
            key?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
            path?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvValueFromFileKeyRefPatch {
            key?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
            path?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvValueFromPatch {
            configMapKeyRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvValueFromConfigMapKeyRefPatch>;
            fieldRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvValueFromFieldRefPatch>;
            fileKeyRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvValueFromFileKeyRefPatch>;
            resourceFieldRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvValueFromResourceFieldRefPatch>;
            secretKeyRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvValueFromSecretKeyRefPatch>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvValueFromResourceFieldRef {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvValueFromResourceFieldRefPatch {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvValueFromSecretKeyRef {
            key?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvValueFromSecretKeyRefPatch {
            key?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecycle {
            postStart?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePostStart>;
            preStop?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePreStop>;
            stopSignal?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePatch {
            postStart?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePostStartPatch>;
            preStop?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePreStopPatch>;
            stopSignal?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePostStart {
            exec?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePostStartExec>;
            httpGet?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePostStartHttpGet>;
            sleep?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePostStartSleep>;
            tcpSocket?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePostStartTcpSocket>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePostStartExec {
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePostStartExecPatch {
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePostStartHttpGet {
            host?: pulumi.Input<string>;
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePostStartHttpGetHttpHeaders>[]>;
            path?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
            scheme?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePostStartHttpGetHttpHeaders {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePostStartHttpGetHttpHeadersPatch {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePostStartHttpGetPatch {
            host?: pulumi.Input<string>;
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePostStartHttpGetHttpHeadersPatch>[]>;
            path?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
            scheme?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePostStartPatch {
            exec?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePostStartExecPatch>;
            httpGet?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePostStartHttpGetPatch>;
            sleep?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePostStartSleepPatch>;
            tcpSocket?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePostStartTcpSocketPatch>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePostStartSleep {
            seconds?: pulumi.Input<number>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePostStartSleepPatch {
            seconds?: pulumi.Input<number>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePostStartTcpSocket {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePostStartTcpSocketPatch {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePreStop {
            exec?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePreStopExec>;
            httpGet?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePreStopHttpGet>;
            sleep?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePreStopSleep>;
            tcpSocket?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePreStopTcpSocket>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePreStopExec {
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePreStopExecPatch {
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePreStopHttpGet {
            host?: pulumi.Input<string>;
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePreStopHttpGetHttpHeaders>[]>;
            path?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
            scheme?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePreStopHttpGetHttpHeaders {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePreStopHttpGetHttpHeadersPatch {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePreStopHttpGetPatch {
            host?: pulumi.Input<string>;
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePreStopHttpGetHttpHeadersPatch>[]>;
            path?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
            scheme?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePreStopPatch {
            exec?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePreStopExecPatch>;
            httpGet?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePreStopHttpGetPatch>;
            sleep?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePreStopSleepPatch>;
            tcpSocket?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePreStopTcpSocketPatch>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePreStopSleep {
            seconds?: pulumi.Input<number>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePreStopSleepPatch {
            seconds?: pulumi.Input<number>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePreStopTcpSocket {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePreStopTcpSocketPatch {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLivenessProbe {
            exec?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLivenessProbeExec>;
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLivenessProbeGrpc>;
            httpGet?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLivenessProbeHttpGet>;
            initialDelaySeconds?: pulumi.Input<number>;
            periodSeconds?: pulumi.Input<number>;
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLivenessProbeTcpSocket>;
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            timeoutSeconds?: pulumi.Input<number>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLivenessProbeExec {
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLivenessProbeExecPatch {
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLivenessProbeGrpc {
            port?: pulumi.Input<number>;
            service?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLivenessProbeGrpcPatch {
            port?: pulumi.Input<number>;
            service?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLivenessProbeHttpGet {
            host?: pulumi.Input<string>;
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLivenessProbeHttpGetHttpHeaders>[]>;
            path?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
            scheme?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLivenessProbeHttpGetHttpHeaders {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLivenessProbeHttpGetHttpHeadersPatch {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLivenessProbeHttpGetPatch {
            host?: pulumi.Input<string>;
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLivenessProbeHttpGetHttpHeadersPatch>[]>;
            path?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
            scheme?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLivenessProbePatch {
            exec?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLivenessProbeExecPatch>;
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLivenessProbeGrpcPatch>;
            httpGet?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLivenessProbeHttpGetPatch>;
            initialDelaySeconds?: pulumi.Input<number>;
            periodSeconds?: pulumi.Input<number>;
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLivenessProbeTcpSocketPatch>;
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            timeoutSeconds?: pulumi.Input<number>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLivenessProbeTcpSocket {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLivenessProbeTcpSocketPatch {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersPatch {
            args?: pulumi.Input<pulumi.Input<string>[]>;
            command?: pulumi.Input<pulumi.Input<string>[]>;
            env?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvPatch>[]>;
            envFrom?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvFromPatch>[]>;
            image?: pulumi.Input<string>;
            imagePullPolicy?: pulumi.Input<string>;
            lifecycle?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePatch>;
            livenessProbe?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLivenessProbePatch>;
            name?: pulumi.Input<string>;
            ports?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersPortsPatch>[]>;
            readinessProbe?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersReadinessProbePatch>;
            resizePolicy?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersResizePolicyPatch>[]>;
            resources?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersResourcesPatch>;
            restartPolicy?: pulumi.Input<string>;
            restartPolicyRules?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersRestartPolicyRulesPatch>[]>;
            securityContext?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersSecurityContextPatch>;
            startupProbe?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersStartupProbePatch>;
            stdin?: pulumi.Input<boolean>;
            stdinOnce?: pulumi.Input<boolean>;
            terminationMessagePath?: pulumi.Input<string>;
            terminationMessagePolicy?: pulumi.Input<string>;
            tty?: pulumi.Input<boolean>;
            volumeDevices?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersVolumeDevicesPatch>[]>;
            volumeMounts?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersVolumeMountsPatch>[]>;
            workingDir?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersPorts {
            containerPort?: pulumi.Input<number>;
            hostIP?: pulumi.Input<string>;
            hostPort?: pulumi.Input<number>;
            name?: pulumi.Input<string>;
            protocol?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersPortsPatch {
            containerPort?: pulumi.Input<number>;
            hostIP?: pulumi.Input<string>;
            hostPort?: pulumi.Input<number>;
            name?: pulumi.Input<string>;
            protocol?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersReadinessProbe {
            exec?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersReadinessProbeExec>;
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersReadinessProbeGrpc>;
            httpGet?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersReadinessProbeHttpGet>;
            initialDelaySeconds?: pulumi.Input<number>;
            periodSeconds?: pulumi.Input<number>;
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersReadinessProbeTcpSocket>;
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            timeoutSeconds?: pulumi.Input<number>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersReadinessProbeExec {
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersReadinessProbeExecPatch {
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersReadinessProbeGrpc {
            port?: pulumi.Input<number>;
            service?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersReadinessProbeGrpcPatch {
            port?: pulumi.Input<number>;
            service?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersReadinessProbeHttpGet {
            host?: pulumi.Input<string>;
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersReadinessProbeHttpGetHttpHeaders>[]>;
            path?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
            scheme?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersReadinessProbeHttpGetHttpHeaders {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersReadinessProbeHttpGetHttpHeadersPatch {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersReadinessProbeHttpGetPatch {
            host?: pulumi.Input<string>;
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersReadinessProbeHttpGetHttpHeadersPatch>[]>;
            path?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
            scheme?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersReadinessProbePatch {
            exec?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersReadinessProbeExecPatch>;
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersReadinessProbeGrpcPatch>;
            httpGet?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersReadinessProbeHttpGetPatch>;
            initialDelaySeconds?: pulumi.Input<number>;
            periodSeconds?: pulumi.Input<number>;
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersReadinessProbeTcpSocketPatch>;
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            timeoutSeconds?: pulumi.Input<number>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersReadinessProbeTcpSocket {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersReadinessProbeTcpSocketPatch {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersResizePolicy {
            resourceName?: pulumi.Input<string>;
            restartPolicy?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersResizePolicyPatch {
            resourceName?: pulumi.Input<string>;
            restartPolicy?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersResources {
            claims?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersResourcesClaims>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersResourcesClaims {
            name?: pulumi.Input<string>;
            request?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersResourcesClaimsPatch {
            name?: pulumi.Input<string>;
            request?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersResourcesPatch {
            claims?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersResourcesClaimsPatch>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersRestartPolicyRules {
            action?: pulumi.Input<string>;
            exitCodes?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersRestartPolicyRulesExitCodes>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersRestartPolicyRulesExitCodes {
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<number>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersRestartPolicyRulesExitCodesPatch {
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<number>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersRestartPolicyRulesPatch {
            action?: pulumi.Input<string>;
            exitCodes?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersRestartPolicyRulesExitCodesPatch>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersSecurityContext {
            allowPrivilegeEscalation?: pulumi.Input<boolean>;
            appArmorProfile?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersSecurityContextAppArmorProfile>;
            capabilities?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersSecurityContextCapabilities>;
            privileged?: pulumi.Input<boolean>;
            procMount?: pulumi.Input<string>;
            readOnlyRootFilesystem?: pulumi.Input<boolean>;
            runAsGroup?: pulumi.Input<number>;
            runAsNonRoot?: pulumi.Input<boolean>;
            runAsUser?: pulumi.Input<number>;
            seLinuxOptions?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersSecurityContextSeLinuxOptions>;
            seccompProfile?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersSecurityContextSeccompProfile>;
            windowsOptions?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersSecurityContextWindowsOptions>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersSecurityContextAppArmorProfile {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersSecurityContextAppArmorProfilePatch {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersSecurityContextCapabilities {
            add?: pulumi.Input<pulumi.Input<string>[]>;
            drop?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersSecurityContextCapabilitiesPatch {
            add?: pulumi.Input<pulumi.Input<string>[]>;
            drop?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersSecurityContextPatch {
            allowPrivilegeEscalation?: pulumi.Input<boolean>;
            appArmorProfile?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersSecurityContextAppArmorProfilePatch>;
            capabilities?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersSecurityContextCapabilitiesPatch>;
            privileged?: pulumi.Input<boolean>;
            procMount?: pulumi.Input<string>;
            readOnlyRootFilesystem?: pulumi.Input<boolean>;
            runAsGroup?: pulumi.Input<number>;
            runAsNonRoot?: pulumi.Input<boolean>;
            runAsUser?: pulumi.Input<number>;
            seLinuxOptions?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersSecurityContextSeLinuxOptionsPatch>;
            seccompProfile?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersSecurityContextSeccompProfilePatch>;
            windowsOptions?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersSecurityContextWindowsOptionsPatch>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersSecurityContextSeLinuxOptions {
            level?: pulumi.Input<string>;
            role?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersSecurityContextSeLinuxOptionsPatch {
            level?: pulumi.Input<string>;
            role?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersSecurityContextSeccompProfile {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersSecurityContextSeccompProfilePatch {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersSecurityContextWindowsOptions {
            gmsaCredentialSpec?: pulumi.Input<string>;
            gmsaCredentialSpecName?: pulumi.Input<string>;
            hostProcess?: pulumi.Input<boolean>;
            runAsUserName?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersSecurityContextWindowsOptionsPatch {
            gmsaCredentialSpec?: pulumi.Input<string>;
            gmsaCredentialSpecName?: pulumi.Input<string>;
            hostProcess?: pulumi.Input<boolean>;
            runAsUserName?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersStartupProbe {
            exec?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersStartupProbeExec>;
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersStartupProbeGrpc>;
            httpGet?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersStartupProbeHttpGet>;
            initialDelaySeconds?: pulumi.Input<number>;
            periodSeconds?: pulumi.Input<number>;
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersStartupProbeTcpSocket>;
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            timeoutSeconds?: pulumi.Input<number>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersStartupProbeExec {
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersStartupProbeExecPatch {
            command?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersStartupProbeGrpc {
            port?: pulumi.Input<number>;
            service?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersStartupProbeGrpcPatch {
            port?: pulumi.Input<number>;
            service?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersStartupProbeHttpGet {
            host?: pulumi.Input<string>;
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersStartupProbeHttpGetHttpHeaders>[]>;
            path?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
            scheme?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersStartupProbeHttpGetHttpHeaders {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersStartupProbeHttpGetHttpHeadersPatch {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersStartupProbeHttpGetPatch {
            host?: pulumi.Input<string>;
            httpHeaders?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersStartupProbeHttpGetHttpHeadersPatch>[]>;
            path?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
            scheme?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersStartupProbePatch {
            exec?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersStartupProbeExecPatch>;
            failureThreshold?: pulumi.Input<number>;
            grpc?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersStartupProbeGrpcPatch>;
            httpGet?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersStartupProbeHttpGetPatch>;
            initialDelaySeconds?: pulumi.Input<number>;
            periodSeconds?: pulumi.Input<number>;
            successThreshold?: pulumi.Input<number>;
            tcpSocket?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersStartupProbeTcpSocketPatch>;
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            timeoutSeconds?: pulumi.Input<number>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersStartupProbeTcpSocket {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersStartupProbeTcpSocketPatch {
            host?: pulumi.Input<string>;
            port?: pulumi.Input<number | string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersVolumeDevices {
            devicePath?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersVolumeDevicesPatch {
            devicePath?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersVolumeMounts {
            mountPath?: pulumi.Input<string>;
            mountPropagation?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            recursiveReadOnly?: pulumi.Input<string>;
            subPath?: pulumi.Input<string>;
            subPathExpr?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersVolumeMountsPatch {
            mountPath?: pulumi.Input<string>;
            mountPropagation?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            recursiveReadOnly?: pulumi.Input<string>;
            subPath?: pulumi.Input<string>;
            subPathExpr?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecOs {
            name?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecOsPatch {
            name?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecPatch {
            activeDeadlineSeconds?: pulumi.Input<number>;
            affinity?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPatch>;
            automountServiceAccountToken?: pulumi.Input<boolean>;
            containers?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersPatch>[]>;
            dnsConfig?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecDnsConfigPatch>;
            dnsPolicy?: pulumi.Input<string>;
            enableServiceLinks?: pulumi.Input<boolean>;
            ephemeralContainers?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersPatch>[]>;
            hostAliases?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecHostAliasesPatch>[]>;
            hostIPC?: pulumi.Input<boolean>;
            hostNetwork?: pulumi.Input<boolean>;
            hostPID?: pulumi.Input<boolean>;
            hostUsers?: pulumi.Input<boolean>;
            hostname?: pulumi.Input<string>;
            hostnameOverride?: pulumi.Input<string>;
            imagePullSecrets?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecImagePullSecretsPatch>[]>;
            initContainers?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersPatch>[]>;
            nodeName?: pulumi.Input<string>;
            nodeSelector?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            os?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecOsPatch>;
            overhead?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            preemptionPolicy?: pulumi.Input<string>;
            priority?: pulumi.Input<number>;
            priorityClassName?: pulumi.Input<string>;
            readinessGates?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecReadinessGatesPatch>[]>;
            resourceClaims?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecResourceClaimsPatch>[]>;
            resources?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecResourcesPatch>;
            restartPolicy?: pulumi.Input<string>;
            runtimeClassName?: pulumi.Input<string>;
            schedulerName?: pulumi.Input<string>;
            schedulingGates?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSchedulingGatesPatch>[]>;
            securityContext?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSecurityContextPatch>;
            serviceAccount?: pulumi.Input<string>;
            serviceAccountName?: pulumi.Input<string>;
            setHostnameAsFQDN?: pulumi.Input<boolean>;
            shareProcessNamespace?: pulumi.Input<boolean>;
            subdomain?: pulumi.Input<string>;
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            tolerations?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecTolerationsPatch>[]>;
            topologySpreadConstraints?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecTopologySpreadConstraintsPatch>[]>;
            volumes?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesPatch>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecReadinessGates {
            conditionType?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecReadinessGatesPatch {
            conditionType?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecResourceClaims {
            name?: pulumi.Input<string>;
            resourceClaimName?: pulumi.Input<string>;
            resourceClaimTemplateName?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecResourceClaimsPatch {
            name?: pulumi.Input<string>;
            resourceClaimName?: pulumi.Input<string>;
            resourceClaimTemplateName?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecResources {
            claims?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecResourcesClaims>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecResourcesClaims {
            name?: pulumi.Input<string>;
            request?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecResourcesClaimsPatch {
            name?: pulumi.Input<string>;
            request?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecResourcesPatch {
            claims?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecResourcesClaimsPatch>[]>;
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSchedulingGates {
            name?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSchedulingGatesPatch {
            name?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSecurityContext {
            appArmorProfile?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSecurityContextAppArmorProfile>;
            fsGroup?: pulumi.Input<number>;
            fsGroupChangePolicy?: pulumi.Input<string>;
            runAsGroup?: pulumi.Input<number>;
            runAsNonRoot?: pulumi.Input<boolean>;
            runAsUser?: pulumi.Input<number>;
            seLinuxChangePolicy?: pulumi.Input<string>;
            seLinuxOptions?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSecurityContextSeLinuxOptions>;
            seccompProfile?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSecurityContextSeccompProfile>;
            supplementalGroups?: pulumi.Input<pulumi.Input<number>[]>;
            supplementalGroupsPolicy?: pulumi.Input<string>;
            sysctls?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSecurityContextSysctls>[]>;
            windowsOptions?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSecurityContextWindowsOptions>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSecurityContextAppArmorProfile {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSecurityContextAppArmorProfilePatch {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSecurityContextPatch {
            appArmorProfile?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSecurityContextAppArmorProfilePatch>;
            fsGroup?: pulumi.Input<number>;
            fsGroupChangePolicy?: pulumi.Input<string>;
            runAsGroup?: pulumi.Input<number>;
            runAsNonRoot?: pulumi.Input<boolean>;
            runAsUser?: pulumi.Input<number>;
            seLinuxChangePolicy?: pulumi.Input<string>;
            seLinuxOptions?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSecurityContextSeLinuxOptionsPatch>;
            seccompProfile?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSecurityContextSeccompProfilePatch>;
            supplementalGroups?: pulumi.Input<pulumi.Input<number>[]>;
            supplementalGroupsPolicy?: pulumi.Input<string>;
            sysctls?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSecurityContextSysctlsPatch>[]>;
            windowsOptions?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSecurityContextWindowsOptionsPatch>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSecurityContextSeLinuxOptions {
            level?: pulumi.Input<string>;
            role?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSecurityContextSeLinuxOptionsPatch {
            level?: pulumi.Input<string>;
            role?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSecurityContextSeccompProfile {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSecurityContextSeccompProfilePatch {
            localhostProfile?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSecurityContextSysctls {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSecurityContextSysctlsPatch {
            name?: pulumi.Input<string>;
            value?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSecurityContextWindowsOptions {
            gmsaCredentialSpec?: pulumi.Input<string>;
            gmsaCredentialSpecName?: pulumi.Input<string>;
            hostProcess?: pulumi.Input<boolean>;
            runAsUserName?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSecurityContextWindowsOptionsPatch {
            gmsaCredentialSpec?: pulumi.Input<string>;
            gmsaCredentialSpecName?: pulumi.Input<string>;
            hostProcess?: pulumi.Input<boolean>;
            runAsUserName?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecTolerations {
            effect?: pulumi.Input<string>;
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            tolerationSeconds?: pulumi.Input<number>;
            value?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecTolerationsPatch {
            effect?: pulumi.Input<string>;
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            tolerationSeconds?: pulumi.Input<number>;
            value?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecTopologySpreadConstraints {
            labelSelector?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecTopologySpreadConstraintsLabelSelector>;
            matchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            maxSkew?: pulumi.Input<number>;
            minDomains?: pulumi.Input<number>;
            nodeAffinityPolicy?: pulumi.Input<string>;
            nodeTaintsPolicy?: pulumi.Input<string>;
            topologyKey?: pulumi.Input<string>;
            whenUnsatisfiable?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecTopologySpreadConstraintsLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecTopologySpreadConstraintsLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecTopologySpreadConstraintsPatch {
            labelSelector?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecTopologySpreadConstraintsLabelSelectorPatch>;
            matchLabelKeys?: pulumi.Input<pulumi.Input<string>[]>;
            maxSkew?: pulumi.Input<number>;
            minDomains?: pulumi.Input<number>;
            nodeAffinityPolicy?: pulumi.Input<string>;
            nodeTaintsPolicy?: pulumi.Input<string>;
            topologyKey?: pulumi.Input<string>;
            whenUnsatisfiable?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumes {
            awsElasticBlockStore?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesAwsElasticBlockStore>;
            azureDisk?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesAzureDisk>;
            azureFile?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesAzureFile>;
            cephfs?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesCephfs>;
            cinder?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesCinder>;
            configMap?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesConfigMap>;
            csi?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesCsi>;
            downwardAPI?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesDownwardAPI>;
            emptyDir?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEmptyDir>;
            ephemeral?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeral>;
            fc?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesFc>;
            flexVolume?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesFlexVolume>;
            flocker?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesFlocker>;
            gcePersistentDisk?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesGcePersistentDisk>;
            gitRepo?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesGitRepo>;
            glusterfs?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesGlusterfs>;
            hostPath?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesHostPath>;
            image?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesImage>;
            iscsi?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesIscsi>;
            name?: pulumi.Input<string>;
            nfs?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesNfs>;
            persistentVolumeClaim?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesPersistentVolumeClaim>;
            photonPersistentDisk?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesPhotonPersistentDisk>;
            portworxVolume?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesPortworxVolume>;
            projected?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjected>;
            quobyte?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesQuobyte>;
            rbd?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesRbd>;
            scaleIO?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesScaleIO>;
            secret?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesSecret>;
            storageos?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesStorageos>;
            vsphereVolume?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesVsphereVolume>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesAwsElasticBlockStore {
            fsType?: pulumi.Input<string>;
            partition?: pulumi.Input<number>;
            readOnly?: pulumi.Input<boolean>;
            volumeID?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesAwsElasticBlockStorePatch {
            fsType?: pulumi.Input<string>;
            partition?: pulumi.Input<number>;
            readOnly?: pulumi.Input<boolean>;
            volumeID?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesAzureDisk {
            cachingMode?: pulumi.Input<string>;
            diskName?: pulumi.Input<string>;
            diskURI?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesAzureDiskPatch {
            cachingMode?: pulumi.Input<string>;
            diskName?: pulumi.Input<string>;
            diskURI?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesAzureFile {
            readOnly?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
            shareName?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesAzureFilePatch {
            readOnly?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
            shareName?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesCephfs {
            monitors?: pulumi.Input<pulumi.Input<string>[]>;
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretFile?: pulumi.Input<string>;
            secretRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesCephfsSecretRef>;
            user?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesCephfsPatch {
            monitors?: pulumi.Input<pulumi.Input<string>[]>;
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretFile?: pulumi.Input<string>;
            secretRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesCephfsSecretRefPatch>;
            user?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesCephfsSecretRef {
            name?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesCephfsSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesCinder {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesCinderSecretRef>;
            volumeID?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesCinderPatch {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesCinderSecretRefPatch>;
            volumeID?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesCinderSecretRef {
            name?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesCinderSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesConfigMap {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesConfigMapItems>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesConfigMapItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesConfigMapItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesConfigMapPatch {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesConfigMapItemsPatch>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesCsi {
            driver?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            nodePublishSecretRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesCsiNodePublishSecretRef>;
            readOnly?: pulumi.Input<boolean>;
            volumeAttributes?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesCsiNodePublishSecretRef {
            name?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesCsiNodePublishSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesCsiPatch {
            driver?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            nodePublishSecretRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesCsiNodePublishSecretRefPatch>;
            readOnly?: pulumi.Input<boolean>;
            volumeAttributes?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesDownwardAPI {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesDownwardAPIItems>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesDownwardAPIItems {
            fieldRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesDownwardAPIItemsFieldRef>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesDownwardAPIItemsResourceFieldRef>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesDownwardAPIItemsFieldRef {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesDownwardAPIItemsFieldRefPatch {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesDownwardAPIItemsPatch {
            fieldRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesDownwardAPIItemsFieldRefPatch>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesDownwardAPIItemsResourceFieldRefPatch>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesDownwardAPIItemsResourceFieldRef {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesDownwardAPIItemsResourceFieldRefPatch {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesDownwardAPIPatch {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesDownwardAPIItemsPatch>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEmptyDir {
            medium?: pulumi.Input<string>;
            sizeLimit?: pulumi.Input<number | string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEmptyDirPatch {
            medium?: pulumi.Input<string>;
            sizeLimit?: pulumi.Input<number | string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeral {
            volumeClaimTemplate?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplate>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralPatch {
            volumeClaimTemplate?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplatePatch>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplate {
            metadata?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            spec?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpec>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplatePatch {
            metadata?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            spec?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecPatch>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpec {
            accessModes?: pulumi.Input<pulumi.Input<string>[]>;
            dataSource?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecDataSource>;
            dataSourceRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef>;
            resources?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecResources>;
            selector?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecSelector>;
            storageClassName?: pulumi.Input<string>;
            volumeAttributesClassName?: pulumi.Input<string>;
            volumeMode?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecDataSource {
            apiGroup?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecDataSourcePatch {
            apiGroup?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef {
            apiGroup?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            namespace?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefPatch {
            apiGroup?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            namespace?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecPatch {
            accessModes?: pulumi.Input<pulumi.Input<string>[]>;
            dataSource?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecDataSourcePatch>;
            dataSourceRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefPatch>;
            resources?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecResourcesPatch>;
            selector?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecSelectorPatch>;
            storageClassName?: pulumi.Input<string>;
            volumeAttributesClassName?: pulumi.Input<string>;
            volumeMode?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecResources {
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecResourcesPatch {
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesFc {
            fsType?: pulumi.Input<string>;
            lun?: pulumi.Input<number>;
            readOnly?: pulumi.Input<boolean>;
            targetWWNs?: pulumi.Input<pulumi.Input<string>[]>;
            wwids?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesFcPatch {
            fsType?: pulumi.Input<string>;
            lun?: pulumi.Input<number>;
            readOnly?: pulumi.Input<boolean>;
            targetWWNs?: pulumi.Input<pulumi.Input<string>[]>;
            wwids?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesFlexVolume {
            driver?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            options?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesFlexVolumeSecretRef>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesFlexVolumePatch {
            driver?: pulumi.Input<string>;
            fsType?: pulumi.Input<string>;
            options?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesFlexVolumeSecretRefPatch>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesFlexVolumeSecretRef {
            name?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesFlexVolumeSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesFlocker {
            datasetName?: pulumi.Input<string>;
            datasetUUID?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesFlockerPatch {
            datasetName?: pulumi.Input<string>;
            datasetUUID?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesGcePersistentDisk {
            fsType?: pulumi.Input<string>;
            partition?: pulumi.Input<number>;
            pdName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesGcePersistentDiskPatch {
            fsType?: pulumi.Input<string>;
            partition?: pulumi.Input<number>;
            pdName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesGitRepo {
            directory?: pulumi.Input<string>;
            repository?: pulumi.Input<string>;
            revision?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesGitRepoPatch {
            directory?: pulumi.Input<string>;
            repository?: pulumi.Input<string>;
            revision?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesGlusterfs {
            endpoints?: pulumi.Input<string>;
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesGlusterfsPatch {
            endpoints?: pulumi.Input<string>;
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesHostPath {
            path?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesHostPathPatch {
            path?: pulumi.Input<string>;
            type?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesImage {
            pullPolicy?: pulumi.Input<string>;
            reference?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesImagePatch {
            pullPolicy?: pulumi.Input<string>;
            reference?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesIscsi {
            chapAuthDiscovery?: pulumi.Input<boolean>;
            chapAuthSession?: pulumi.Input<boolean>;
            fsType?: pulumi.Input<string>;
            initiatorName?: pulumi.Input<string>;
            iqn?: pulumi.Input<string>;
            iscsiInterface?: pulumi.Input<string>;
            lun?: pulumi.Input<number>;
            portals?: pulumi.Input<pulumi.Input<string>[]>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesIscsiSecretRef>;
            targetPortal?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesIscsiPatch {
            chapAuthDiscovery?: pulumi.Input<boolean>;
            chapAuthSession?: pulumi.Input<boolean>;
            fsType?: pulumi.Input<string>;
            initiatorName?: pulumi.Input<string>;
            iqn?: pulumi.Input<string>;
            iscsiInterface?: pulumi.Input<string>;
            lun?: pulumi.Input<number>;
            portals?: pulumi.Input<pulumi.Input<string>[]>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesIscsiSecretRefPatch>;
            targetPortal?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesIscsiSecretRef {
            name?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesIscsiSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesNfs {
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            server?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesNfsPatch {
            path?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            server?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesPatch {
            awsElasticBlockStore?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesAwsElasticBlockStorePatch>;
            azureDisk?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesAzureDiskPatch>;
            azureFile?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesAzureFilePatch>;
            cephfs?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesCephfsPatch>;
            cinder?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesCinderPatch>;
            configMap?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesConfigMapPatch>;
            csi?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesCsiPatch>;
            downwardAPI?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesDownwardAPIPatch>;
            emptyDir?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEmptyDirPatch>;
            ephemeral?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralPatch>;
            fc?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesFcPatch>;
            flexVolume?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesFlexVolumePatch>;
            flocker?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesFlockerPatch>;
            gcePersistentDisk?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesGcePersistentDiskPatch>;
            gitRepo?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesGitRepoPatch>;
            glusterfs?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesGlusterfsPatch>;
            hostPath?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesHostPathPatch>;
            image?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesImagePatch>;
            iscsi?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesIscsiPatch>;
            name?: pulumi.Input<string>;
            nfs?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesNfsPatch>;
            persistentVolumeClaim?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesPersistentVolumeClaimPatch>;
            photonPersistentDisk?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesPhotonPersistentDiskPatch>;
            portworxVolume?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesPortworxVolumePatch>;
            projected?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedPatch>;
            quobyte?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesQuobytePatch>;
            rbd?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesRbdPatch>;
            scaleIO?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesScaleIOPatch>;
            secret?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesSecretPatch>;
            storageos?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesStorageosPatch>;
            vsphereVolume?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesVsphereVolumePatch>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesPersistentVolumeClaim {
            claimName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesPersistentVolumeClaimPatch {
            claimName?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesPhotonPersistentDisk {
            fsType?: pulumi.Input<string>;
            pdID?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesPhotonPersistentDiskPatch {
            fsType?: pulumi.Input<string>;
            pdID?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesPortworxVolume {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            volumeID?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesPortworxVolumePatch {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            volumeID?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjected {
            defaultMode?: pulumi.Input<number>;
            sources?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSources>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedPatch {
            defaultMode?: pulumi.Input<number>;
            sources?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesPatch>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSources {
            clusterTrustBundle?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesClusterTrustBundle>;
            configMap?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesConfigMap>;
            downwardAPI?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesDownwardAPI>;
            podCertificate?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesPodCertificate>;
            secret?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesSecret>;
            serviceAccountToken?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesServiceAccountToken>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesClusterTrustBundle {
            labelSelector?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesClusterTrustBundleLabelSelector>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
            path?: pulumi.Input<string>;
            signerName?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesClusterTrustBundleLabelSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesClusterTrustBundlePatch {
            labelSelector?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorPatch>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
            path?: pulumi.Input<string>;
            signerName?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesConfigMap {
            items?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesConfigMapItems>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesConfigMapItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesConfigMapItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesConfigMapPatch {
            items?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesConfigMapItemsPatch>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesDownwardAPI {
            items?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesDownwardAPIItems>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesDownwardAPIItems {
            fieldRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesDownwardAPIItemsFieldRef>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesDownwardAPIItemsResourceFieldRef>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesDownwardAPIItemsFieldRef {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesDownwardAPIItemsFieldRefPatch {
            apiVersion?: pulumi.Input<string>;
            fieldPath?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesDownwardAPIItemsPatch {
            fieldRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesDownwardAPIItemsFieldRefPatch>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
            resourceFieldRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesDownwardAPIItemsResourceFieldRefPatch>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesDownwardAPIItemsResourceFieldRef {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesDownwardAPIItemsResourceFieldRefPatch {
            containerName?: pulumi.Input<string>;
            divisor?: pulumi.Input<number | string>;
            resource?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesDownwardAPIPatch {
            items?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesDownwardAPIItemsPatch>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesPatch {
            clusterTrustBundle?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesClusterTrustBundlePatch>;
            configMap?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesConfigMapPatch>;
            downwardAPI?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesDownwardAPIPatch>;
            podCertificate?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesPodCertificatePatch>;
            secret?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesSecretPatch>;
            serviceAccountToken?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesServiceAccountTokenPatch>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesPodCertificate {
            certificateChainPath?: pulumi.Input<string>;
            credentialBundlePath?: pulumi.Input<string>;
            keyPath?: pulumi.Input<string>;
            keyType?: pulumi.Input<string>;
            maxExpirationSeconds?: pulumi.Input<number>;
            signerName?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesPodCertificatePatch {
            certificateChainPath?: pulumi.Input<string>;
            credentialBundlePath?: pulumi.Input<string>;
            keyPath?: pulumi.Input<string>;
            keyType?: pulumi.Input<string>;
            maxExpirationSeconds?: pulumi.Input<number>;
            signerName?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesSecret {
            items?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesSecretItems>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesSecretItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesSecretItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesSecretPatch {
            items?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesSecretItemsPatch>[]>;
            name?: pulumi.Input<string>;
            optional?: pulumi.Input<boolean>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesServiceAccountToken {
            audience?: pulumi.Input<string>;
            expirationSeconds?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesServiceAccountTokenPatch {
            audience?: pulumi.Input<string>;
            expirationSeconds?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesQuobyte {
            group?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            registry?: pulumi.Input<string>;
            tenant?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
            volume?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesQuobytePatch {
            group?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            registry?: pulumi.Input<string>;
            tenant?: pulumi.Input<string>;
            user?: pulumi.Input<string>;
            volume?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesRbd {
            fsType?: pulumi.Input<string>;
            image?: pulumi.Input<string>;
            keyring?: pulumi.Input<string>;
            monitors?: pulumi.Input<pulumi.Input<string>[]>;
            pool?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesRbdSecretRef>;
            user?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesRbdPatch {
            fsType?: pulumi.Input<string>;
            image?: pulumi.Input<string>;
            keyring?: pulumi.Input<string>;
            monitors?: pulumi.Input<pulumi.Input<string>[]>;
            pool?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesRbdSecretRefPatch>;
            user?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesRbdSecretRef {
            name?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesRbdSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesScaleIO {
            fsType?: pulumi.Input<string>;
            gateway?: pulumi.Input<string>;
            protectionDomain?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesScaleIOSecretRef>;
            sslEnabled?: pulumi.Input<boolean>;
            storageMode?: pulumi.Input<string>;
            storagePool?: pulumi.Input<string>;
            system?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesScaleIOPatch {
            fsType?: pulumi.Input<string>;
            gateway?: pulumi.Input<string>;
            protectionDomain?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesScaleIOSecretRefPatch>;
            sslEnabled?: pulumi.Input<boolean>;
            storageMode?: pulumi.Input<string>;
            storagePool?: pulumi.Input<string>;
            system?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesScaleIOSecretRef {
            name?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesScaleIOSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesSecret {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesSecretItems>[]>;
            optional?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesSecretItems {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesSecretItemsPatch {
            key?: pulumi.Input<string>;
            mode?: pulumi.Input<number>;
            path?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesSecretPatch {
            defaultMode?: pulumi.Input<number>;
            items?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesSecretItemsPatch>[]>;
            optional?: pulumi.Input<boolean>;
            secretName?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesStorageos {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesStorageosSecretRef>;
            volumeName?: pulumi.Input<string>;
            volumeNamespace?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesStorageosPatch {
            fsType?: pulumi.Input<string>;
            readOnly?: pulumi.Input<boolean>;
            secretRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesStorageosSecretRefPatch>;
            volumeName?: pulumi.Input<string>;
            volumeNamespace?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesStorageosSecretRef {
            name?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesStorageosSecretRefPatch {
            name?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesVsphereVolume {
            fsType?: pulumi.Input<string>;
            storagePolicyID?: pulumi.Input<string>;
            storagePolicyName?: pulumi.Input<string>;
            volumePath?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesVsphereVolumePatch {
            fsType?: pulumi.Input<string>;
            storagePolicyID?: pulumi.Input<string>;
            storagePolicyName?: pulumi.Input<string>;
            volumePath?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecUpdateStrategy {
            rollingUpdate?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecUpdateStrategyRollingUpdate>;
            type?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecUpdateStrategyPatch {
            rollingUpdate?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecUpdateStrategyRollingUpdatePatch>;
            type?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecUpdateStrategyRollingUpdate {
            maxUnavailable?: pulumi.Input<number | string>;
            partition?: pulumi.Input<number>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecUpdateStrategyRollingUpdatePatch {
            maxUnavailable?: pulumi.Input<number | string>;
            partition?: pulumi.Input<number>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplates {
            apiVersion?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            metadata?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesMetadata>;
            spec?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesSpec>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesMetadata {
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            name?: pulumi.Input<string>;
            namespace?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesMetadataPatch {
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            name?: pulumi.Input<string>;
            namespace?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesPatch {
            apiVersion?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            metadata?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesMetadataPatch>;
            spec?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesSpecPatch>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesSpec {
            accessModes?: pulumi.Input<pulumi.Input<string>[]>;
            dataSource?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesSpecDataSource>;
            dataSourceRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesSpecDataSourceRef>;
            resources?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesSpecResources>;
            selector?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesSpecSelector>;
            storageClassName?: pulumi.Input<string>;
            volumeAttributesClassName?: pulumi.Input<string>;
            volumeMode?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesSpecDataSource {
            apiGroup?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesSpecDataSourcePatch {
            apiGroup?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesSpecDataSourceRef {
            apiGroup?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            namespace?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesSpecDataSourceRefPatch {
            apiGroup?: pulumi.Input<string>;
            kind?: pulumi.Input<string>;
            name?: pulumi.Input<string>;
            namespace?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesSpecPatch {
            accessModes?: pulumi.Input<pulumi.Input<string>[]>;
            dataSource?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesSpecDataSourcePatch>;
            dataSourceRef?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesSpecDataSourceRefPatch>;
            resources?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesSpecResourcesPatch>;
            selector?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesSpecSelectorPatch>;
            storageClassName?: pulumi.Input<string>;
            volumeAttributesClassName?: pulumi.Input<string>;
            volumeMode?: pulumi.Input<string>;
            volumeName?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesSpecResources {
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesSpecResourcesPatch {
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesSpecSelector {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesSpecSelectorMatchExpressions>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesSpecSelectorMatchExpressions {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesSpecSelectorMatchExpressionsPatch {
            key?: pulumi.Input<string>;
            operator?: pulumi.Input<string>;
            values?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesSpecSelectorPatch {
            matchExpressions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesSpecSelectorMatchExpressionsPatch>[]>;
            matchLabels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
        }
        /**
         * Spec is the desired state of the RabbitmqCluster Custom Resource.
         */
        interface RabbitmqClusterSpecPatch {
            affinity?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPatch>;
            /**
             * Set to true to automatically enable all feature flags after each upgrade
             * For more information, see https://www.rabbitmq.com/docs/feature-flags
             */
            autoEnableAllFeatureFlags?: pulumi.Input<boolean>;
            /**
             * DelayStartSeconds is the time the init container (`setup-container`) will sleep before terminating.
             * This effectively delays the time between starting the Pod and starting the `rabbitmq` container.
             * RabbitMQ relies on up-to-date DNS entries early during peer discovery.
             * The purpose of this artificial delay is to ensure that DNS entries are up-to-date when booting RabbitMQ.
             * For more information, see https://github.com/kubernetes/kubernetes/issues/92559
             * If your Kubernetes DNS backend is configured with a low DNS cache value or publishes not ready addresses
             * promptly, you can decrase this value or set it to 0.
             */
            delayStartSeconds?: pulumi.Input<number>;
            /**
             * Image is the name of the RabbitMQ docker image to use for RabbitMQ nodes in the RabbitmqCluster.
             * Must be provided together with ImagePullSecrets in order to use an image in a private registry.
             */
            image?: pulumi.Input<string>;
            /**
             * List of Secret resource containing access credentials to the registry for the RabbitMQ image. Required if the docker registry is private.
             */
            imagePullSecrets?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecImagePullSecretsPatch>[]>;
            override?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverridePatch>;
            persistence?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecPersistencePatch>;
            rabbitmq?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecRabbitmqPatch>;
            /**
             * Replicas is the number of nodes in the RabbitMQ cluster. Each node is deployed as a Replica in a StatefulSet. Only 1, 3, 5 replicas clusters are tested.
             * This value should be an odd number to ensure the resultant cluster can establish exactly one quorum of nodes
             * in the event of a fragmenting network partition.
             */
            replicas?: pulumi.Input<number>;
            resources?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecResourcesPatch>;
            secretBackend?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecSecretBackendPatch>;
            service?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecServicePatch>;
            /**
             * If unset, or set to false, the cluster will run `rabbitmq-queues rebalance all` whenever the cluster is updated.
             * Set to true to prevent the operator rebalancing queue leaders after a cluster update.
             * Has no effect if the cluster only consists of one node.
             * For more information, see https://www.rabbitmq.com/rabbitmq-queues.8.html#rebalance
             */
            skipPostDeploySteps?: pulumi.Input<boolean>;
            /**
             * TerminationGracePeriodSeconds is the timeout that each rabbitmqcluster pod will have to terminate gracefully.
             * It defaults to 604800 seconds ( a week long) to ensure that the container preStop lifecycle hook can finish running.
             * For more information, see: https://github.com/rabbitmq/cluster-operator/blob/main/docs/design/20200520-graceful-pod-termination.md
             */
            terminationGracePeriodSeconds?: pulumi.Input<number>;
            tls?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecTlsPatch>;
            /**
             * Tolerations is the list of Toleration resources attached to each Pod in the RabbitmqCluster.
             */
            tolerations?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecTolerationsPatch>[]>;
        }
        /**
         * The desired persistent storage configuration for each Pod in the cluster.
         */
        interface RabbitmqClusterSpecPersistence {
            emptyDir?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecPersistenceEmptyDir>;
            /**
             * The requested size of the persistent volume attached to each Pod in the RabbitmqCluster.
             * The format of this field matches that defined by kubernetes/apimachinery.
             * See https://pkg.go.dev/k8s.io/apimachinery/pkg/api/resource#Quantity for more info on the format of this field.
             */
            storage?: pulumi.Input<number | string>;
            /**
             * The name of the StorageClass to claim a PersistentVolume from.
             */
            storageClassName?: pulumi.Input<string>;
        }
        /**
         * EmptyDir configuration to be used when Storage is set to 0Gi.
         */
        interface RabbitmqClusterSpecPersistenceEmptyDir {
            /**
             * Medium represents the storage medium for the EmptyDir volume.
             * The default is "" which means to use the node's default medium.
             * Must be an empty string (default) or Memory.
             * More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
             */
            medium?: pulumi.Input<string>;
            /**
             * SizeLimit sets the size limit for EmptyDir volumes.
             * The format of this field matches that defined by kubernetes/apimachinery.
             * See https://pkg.go.dev/k8s.io/apimachinery/pkg/api/resource#Quantity for more info on the format of this field.
             */
            sizeLimit?: pulumi.Input<number | string>;
        }
        /**
         * EmptyDir configuration to be used when Storage is set to 0Gi.
         */
        interface RabbitmqClusterSpecPersistenceEmptyDirPatch {
            /**
             * Medium represents the storage medium for the EmptyDir volume.
             * The default is "" which means to use the node's default medium.
             * Must be an empty string (default) or Memory.
             * More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
             */
            medium?: pulumi.Input<string>;
            /**
             * SizeLimit sets the size limit for EmptyDir volumes.
             * The format of this field matches that defined by kubernetes/apimachinery.
             * See https://pkg.go.dev/k8s.io/apimachinery/pkg/api/resource#Quantity for more info on the format of this field.
             */
            sizeLimit?: pulumi.Input<number | string>;
        }
        /**
         * The desired persistent storage configuration for each Pod in the cluster.
         */
        interface RabbitmqClusterSpecPersistencePatch {
            emptyDir?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecPersistenceEmptyDirPatch>;
            /**
             * The requested size of the persistent volume attached to each Pod in the RabbitmqCluster.
             * The format of this field matches that defined by kubernetes/apimachinery.
             * See https://pkg.go.dev/k8s.io/apimachinery/pkg/api/resource#Quantity for more info on the format of this field.
             */
            storage?: pulumi.Input<number | string>;
            /**
             * The name of the StorageClass to claim a PersistentVolume from.
             */
            storageClassName?: pulumi.Input<string>;
        }
        /**
         * Configuration options for RabbitMQ Pods created in the cluster.
         */
        interface RabbitmqClusterSpecRabbitmq {
            /**
             * Modify to add to the rabbitmq.conf file in addition to default configurations set by the operator.
             * Modifying this property on an existing RabbitmqCluster will trigger a StatefulSet rolling restart and will cause rabbitmq downtime.
             * For more information on this config, see https://www.rabbitmq.com/configure.html#config-file
             */
            additionalConfig?: pulumi.Input<string>;
            /**
             * List of plugins to enable in addition to essential plugins: rabbitmq_management, rabbitmq_prometheus, and rabbitmq_peer_discovery_k8s.
             */
            additionalPlugins?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Specify any rabbitmq advanced.config configurations to apply to the cluster.
             * For more information on advanced config, see https://www.rabbitmq.com/configure.html#advanced-config-file
             */
            advancedConfig?: pulumi.Input<string>;
            /**
             * Modify to add to the rabbitmq-env.conf file. Modifying this property on an existing RabbitmqCluster will trigger a StatefulSet rolling restart and will cause rabbitmq downtime.
             * For more information on env config, see https://www.rabbitmq.com/man/rabbitmq-env.conf.5.html
             */
            envConfig?: pulumi.Input<string>;
            /**
             * Erlang Inet configuration to apply to the Erlang VM running rabbit.
             * See also: https://www.erlang.org/doc/apps/erts/inet_cfg.html
             */
            erlangInetConfig?: pulumi.Input<string>;
        }
        /**
         * Configuration options for RabbitMQ Pods created in the cluster.
         */
        interface RabbitmqClusterSpecRabbitmqPatch {
            /**
             * Modify to add to the rabbitmq.conf file in addition to default configurations set by the operator.
             * Modifying this property on an existing RabbitmqCluster will trigger a StatefulSet rolling restart and will cause rabbitmq downtime.
             * For more information on this config, see https://www.rabbitmq.com/configure.html#config-file
             */
            additionalConfig?: pulumi.Input<string>;
            /**
             * List of plugins to enable in addition to essential plugins: rabbitmq_management, rabbitmq_prometheus, and rabbitmq_peer_discovery_k8s.
             */
            additionalPlugins?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Specify any rabbitmq advanced.config configurations to apply to the cluster.
             * For more information on advanced config, see https://www.rabbitmq.com/configure.html#advanced-config-file
             */
            advancedConfig?: pulumi.Input<string>;
            /**
             * Modify to add to the rabbitmq-env.conf file. Modifying this property on an existing RabbitmqCluster will trigger a StatefulSet rolling restart and will cause rabbitmq downtime.
             * For more information on env config, see https://www.rabbitmq.com/man/rabbitmq-env.conf.5.html
             */
            envConfig?: pulumi.Input<string>;
            /**
             * Erlang Inet configuration to apply to the Erlang VM running rabbit.
             * See also: https://www.erlang.org/doc/apps/erts/inet_cfg.html
             */
            erlangInetConfig?: pulumi.Input<string>;
        }
        /**
         * The desired compute resource requirements of Pods in the cluster.
         */
        interface RabbitmqClusterSpecResources {
            /**
             * Claims lists the names of resources, defined in spec.resourceClaims,
             * that are used by this container.
             *
             * This field depends on the
             * DynamicResourceAllocation feature gate.
             *
             * This field is immutable. It can only be set for containers.
             */
            claims?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecResourcesClaims>[]>;
            /**
             * Limits describes the maximum amount of compute resources allowed.
             * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            /**
             * Requests describes the minimum amount of compute resources required.
             * If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
             * otherwise to an implementation-defined value. Requests cannot exceed Limits.
             * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        /**
         * ResourceClaim references one entry in PodSpec.ResourceClaims.
         */
        interface RabbitmqClusterSpecResourcesClaims {
            /**
             * Name must match the name of one entry in pod.spec.resourceClaims of
             * the Pod where this field is used. It makes that resource available
             * inside a container.
             */
            name?: pulumi.Input<string>;
            /**
             * Request is the name chosen for a request in the referenced claim.
             * If empty, everything from the claim is made available, otherwise
             * only the result of this request.
             */
            request?: pulumi.Input<string>;
        }
        /**
         * ResourceClaim references one entry in PodSpec.ResourceClaims.
         */
        interface RabbitmqClusterSpecResourcesClaimsPatch {
            /**
             * Name must match the name of one entry in pod.spec.resourceClaims of
             * the Pod where this field is used. It makes that resource available
             * inside a container.
             */
            name?: pulumi.Input<string>;
            /**
             * Request is the name chosen for a request in the referenced claim.
             * If empty, everything from the claim is made available, otherwise
             * only the result of this request.
             */
            request?: pulumi.Input<string>;
        }
        /**
         * The desired compute resource requirements of Pods in the cluster.
         */
        interface RabbitmqClusterSpecResourcesPatch {
            /**
             * Claims lists the names of resources, defined in spec.resourceClaims,
             * that are used by this container.
             *
             * This field depends on the
             * DynamicResourceAllocation feature gate.
             *
             * This field is immutable. It can only be set for containers.
             */
            claims?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecResourcesClaimsPatch>[]>;
            /**
             * Limits describes the maximum amount of compute resources allowed.
             * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            limits?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
            /**
             * Requests describes the minimum amount of compute resources required.
             * If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
             * otherwise to an implementation-defined value. Requests cannot exceed Limits.
             * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            requests?: pulumi.Input<{
                [key: string]: pulumi.Input<number | string>;
            }>;
        }
        /**
         * Secret backend configuration for the RabbitmqCluster.
         * Enables to fetch default user credentials and certificates from K8s external secret stores.
         */
        interface RabbitmqClusterSpecSecretBackend {
            externalSecret?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecSecretBackendExternalSecret>;
            vault?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecSecretBackendVault>;
        }
        /**
         * LocalObjectReference contains enough information to let you locate the
         * referenced object inside the same namespace.
         */
        interface RabbitmqClusterSpecSecretBackendExternalSecret {
            /**
             * Name of the referent.
             * This field is effectively required, but due to backwards compatibility is
             * allowed to be empty. Instances of this type with an empty value here are
             * almost certainly wrong.
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name?: pulumi.Input<string>;
        }
        /**
         * LocalObjectReference contains enough information to let you locate the
         * referenced object inside the same namespace.
         */
        interface RabbitmqClusterSpecSecretBackendExternalSecretPatch {
            /**
             * Name of the referent.
             * This field is effectively required, but due to backwards compatibility is
             * allowed to be empty. Instances of this type with an empty value here are
             * almost certainly wrong.
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name?: pulumi.Input<string>;
        }
        /**
         * Secret backend configuration for the RabbitmqCluster.
         * Enables to fetch default user credentials and certificates from K8s external secret stores.
         */
        interface RabbitmqClusterSpecSecretBackendPatch {
            externalSecret?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecSecretBackendExternalSecretPatch>;
            vault?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecSecretBackendVaultPatch>;
        }
        /**
         * VaultSpec will add Vault annotations (see https://www.vaultproject.io/docs/platform/k8s/injector/annotations)
         * to RabbitMQ Pods. It requires a Vault Agent Sidecar Injector (https://www.vaultproject.io/docs/platform/k8s/injector)
         * to be installed in the K8s cluster. The injector is a K8s Mutation Webhook Controller that alters RabbitMQ Pod specifications
         * (based on the added Vault annotations) to include Vault Agent containers that render Vault secrets to the volume.
         */
        interface RabbitmqClusterSpecSecretBackendVault {
            /**
             * Vault annotations that override the Vault annotations set by the cluster-operator.
             * For a list of valid Vault annotations, see https://www.vaultproject.io/docs/platform/k8s/injector/annotations
             */
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * Path in Vault to access a KV (Key-Value) secret with the fields username and password for the default user.
             * For example "secret/data/rabbitmq/config".
             */
            defaultUserPath?: pulumi.Input<string>;
            /**
             * Sidecar container that updates the default user's password in RabbitMQ when it changes in Vault.
             * Additionally, it updates /var/lib/rabbitmq/.rabbitmqadmin.conf (used by rabbitmqadmin CLI).
             * Set to empty string to disable the sidecar container.
             */
            defaultUserUpdaterImage?: pulumi.Input<string>;
            /**
             * Role in Vault.
             * If vault.defaultUserPath is set, this role must have capability to read the pre-created default user credential in Vault.
             * If vault.tls is set, this role must have capability to create and update certificates in the Vault PKI engine for the domains
             * "<namespace>" and "<namespace>.svc".
             */
            role?: pulumi.Input<string>;
            tls?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecSecretBackendVaultTls>;
        }
        /**
         * VaultSpec will add Vault annotations (see https://www.vaultproject.io/docs/platform/k8s/injector/annotations)
         * to RabbitMQ Pods. It requires a Vault Agent Sidecar Injector (https://www.vaultproject.io/docs/platform/k8s/injector)
         * to be installed in the K8s cluster. The injector is a K8s Mutation Webhook Controller that alters RabbitMQ Pod specifications
         * (based on the added Vault annotations) to include Vault Agent containers that render Vault secrets to the volume.
         */
        interface RabbitmqClusterSpecSecretBackendVaultPatch {
            /**
             * Vault annotations that override the Vault annotations set by the cluster-operator.
             * For a list of valid Vault annotations, see https://www.vaultproject.io/docs/platform/k8s/injector/annotations
             */
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * Path in Vault to access a KV (Key-Value) secret with the fields username and password for the default user.
             * For example "secret/data/rabbitmq/config".
             */
            defaultUserPath?: pulumi.Input<string>;
            /**
             * Sidecar container that updates the default user's password in RabbitMQ when it changes in Vault.
             * Additionally, it updates /var/lib/rabbitmq/.rabbitmqadmin.conf (used by rabbitmqadmin CLI).
             * Set to empty string to disable the sidecar container.
             */
            defaultUserUpdaterImage?: pulumi.Input<string>;
            /**
             * Role in Vault.
             * If vault.defaultUserPath is set, this role must have capability to read the pre-created default user credential in Vault.
             * If vault.tls is set, this role must have capability to create and update certificates in the Vault PKI engine for the domains
             * "<namespace>" and "<namespace>.svc".
             */
            role?: pulumi.Input<string>;
            tls?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterSpecSecretBackendVaultTlsPatch>;
        }
        interface RabbitmqClusterSpecSecretBackendVaultTls {
            /**
             * Specifies the requested Subject Alternative Names (SANs), in a comma-delimited list.
             * These will be appended to the SANs added by the cluster-operator.
             * The cluster-operator will add SANs:
             * "<RabbitmqCluster name>-server-<index>.<RabbitmqCluster name>-nodes.<namespace>" for each pod,
             * e.g. "myrabbit-server-0.myrabbit-nodes.default".
             */
            altNames?: pulumi.Input<string>;
            /**
             * Specifies the requested certificate Common Name (CN).
             * Defaults to <serviceName>.<namespace>.svc if not provided.
             */
            commonName?: pulumi.Input<string>;
            /**
             * Specifies the requested IP Subject Alternative Names, in a comma-delimited list.
             */
            ipSans?: pulumi.Input<string>;
            /**
             * Path in Vault PKI engine.
             * For example "pki/issue/hashicorp-com".
             * required
             */
            pkiIssuerPath?: pulumi.Input<string>;
            /**
             * Specifies an optional path to retrieve the root CA from vault.  Useful if certificates are issued by an intermediate CA
             */
            pkiRootPath?: pulumi.Input<string>;
        }
        interface RabbitmqClusterSpecSecretBackendVaultTlsPatch {
            /**
             * Specifies the requested Subject Alternative Names (SANs), in a comma-delimited list.
             * These will be appended to the SANs added by the cluster-operator.
             * The cluster-operator will add SANs:
             * "<RabbitmqCluster name>-server-<index>.<RabbitmqCluster name>-nodes.<namespace>" for each pod,
             * e.g. "myrabbit-server-0.myrabbit-nodes.default".
             */
            altNames?: pulumi.Input<string>;
            /**
             * Specifies the requested certificate Common Name (CN).
             * Defaults to <serviceName>.<namespace>.svc if not provided.
             */
            commonName?: pulumi.Input<string>;
            /**
             * Specifies the requested IP Subject Alternative Names, in a comma-delimited list.
             */
            ipSans?: pulumi.Input<string>;
            /**
             * Path in Vault PKI engine.
             * For example "pki/issue/hashicorp-com".
             * required
             */
            pkiIssuerPath?: pulumi.Input<string>;
            /**
             * Specifies an optional path to retrieve the root CA from vault.  Useful if certificates are issued by an intermediate CA
             */
            pkiRootPath?: pulumi.Input<string>;
        }
        /**
         * The desired state of the Kubernetes Service to create for the cluster.
         */
        interface RabbitmqClusterSpecService {
            /**
             * Annotations to add to the Service.
             */
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * IPFamilyPolicy represents the dual-stack-ness requested or required by a Service
             * See also: https://pkg.go.dev/k8s.io/api/core/v1#IPFamilyPolicy
             */
            ipFamilyPolicy?: pulumi.Input<string>;
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * Type of Service to create for the cluster. Must be one of: ClusterIP, LoadBalancer, NodePort.
             * For more info see https://pkg.go.dev/k8s.io/api/core/v1#ServiceType
             */
            type?: pulumi.Input<string>;
        }
        /**
         * The desired state of the Kubernetes Service to create for the cluster.
         */
        interface RabbitmqClusterSpecServicePatch {
            /**
             * Annotations to add to the Service.
             */
            annotations?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * IPFamilyPolicy represents the dual-stack-ness requested or required by a Service
             * See also: https://pkg.go.dev/k8s.io/api/core/v1#IPFamilyPolicy
             */
            ipFamilyPolicy?: pulumi.Input<string>;
            labels?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * Type of Service to create for the cluster. Must be one of: ClusterIP, LoadBalancer, NodePort.
             * For more info see https://pkg.go.dev/k8s.io/api/core/v1#ServiceType
             */
            type?: pulumi.Input<string>;
        }
        /**
         * TLS-related configuration for the RabbitMQ cluster.
         */
        interface RabbitmqClusterSpecTls {
            /**
             * Name of a Secret in the same Namespace as the RabbitmqCluster, containing the Certificate Authority's public certificate for TLS.
             * The Secret must store this as ca.crt.
             * This Secret can be created by running `kubectl create secret generic ca-secret --from-file=ca.crt=path/to/ca.crt`
             * Used for mTLS, and TLS for rabbitmq_web_stomp and rabbitmq_web_mqtt.
             */
            caSecretName?: pulumi.Input<string>;
            /**
             * When set to true, the RabbitmqCluster disables non-TLS listeners for RabbitMQ, management plugin and for any enabled plugins in the following list: stomp, mqtt, web_stomp, web_mqtt.
             * Only TLS-enabled clients will be able to connect.
             */
            disableNonTLSListeners?: pulumi.Input<boolean>;
            /**
             * Name of a Secret in the same Namespace as the RabbitmqCluster, containing the server's private key & public certificate for TLS.
             * The Secret must store these as tls.key and tls.crt, respectively.
             * This Secret can be created by running `kubectl create secret tls tls-secret --cert=path/to/tls.crt --key=path/to/tls.key`
             */
            secretName?: pulumi.Input<string>;
        }
        /**
         * TLS-related configuration for the RabbitMQ cluster.
         */
        interface RabbitmqClusterSpecTlsPatch {
            /**
             * Name of a Secret in the same Namespace as the RabbitmqCluster, containing the Certificate Authority's public certificate for TLS.
             * The Secret must store this as ca.crt.
             * This Secret can be created by running `kubectl create secret generic ca-secret --from-file=ca.crt=path/to/ca.crt`
             * Used for mTLS, and TLS for rabbitmq_web_stomp and rabbitmq_web_mqtt.
             */
            caSecretName?: pulumi.Input<string>;
            /**
             * When set to true, the RabbitmqCluster disables non-TLS listeners for RabbitMQ, management plugin and for any enabled plugins in the following list: stomp, mqtt, web_stomp, web_mqtt.
             * Only TLS-enabled clients will be able to connect.
             */
            disableNonTLSListeners?: pulumi.Input<boolean>;
            /**
             * Name of a Secret in the same Namespace as the RabbitmqCluster, containing the server's private key & public certificate for TLS.
             * The Secret must store these as tls.key and tls.crt, respectively.
             * This Secret can be created by running `kubectl create secret tls tls-secret --cert=path/to/tls.crt --key=path/to/tls.key`
             */
            secretName?: pulumi.Input<string>;
        }
        /**
         * The pod this Toleration is attached to tolerates any taint that matches
         * the triple <key,value,effect> using the matching operator <operator>.
         */
        interface RabbitmqClusterSpecTolerations {
            /**
             * Effect indicates the taint effect to match. Empty means match all taint effects.
             * When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
             */
            effect?: pulumi.Input<string>;
            /**
             * Key is the taint key that the toleration applies to. Empty means match all taint keys.
             * If the key is empty, operator must be Exists; this combination means to match all values and all keys.
             */
            key?: pulumi.Input<string>;
            /**
             * Operator represents a key's relationship to the value.
             * Valid operators are Exists and Equal. Defaults to Equal.
             * Exists is equivalent to wildcard for value, so that a pod can
             * tolerate all taints of a particular category.
             */
            operator?: pulumi.Input<string>;
            /**
             * TolerationSeconds represents the period of time the toleration (which must be
             * of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default,
             * it is not set, which means tolerate the taint forever (do not evict). Zero and
             * negative values will be treated as 0 (evict immediately) by the system.
             */
            tolerationSeconds?: pulumi.Input<number>;
            /**
             * Value is the taint value the toleration matches to.
             * If the operator is Exists, the value should be empty, otherwise just a regular string.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * The pod this Toleration is attached to tolerates any taint that matches
         * the triple <key,value,effect> using the matching operator <operator>.
         */
        interface RabbitmqClusterSpecTolerationsPatch {
            /**
             * Effect indicates the taint effect to match. Empty means match all taint effects.
             * When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
             */
            effect?: pulumi.Input<string>;
            /**
             * Key is the taint key that the toleration applies to. Empty means match all taint keys.
             * If the key is empty, operator must be Exists; this combination means to match all values and all keys.
             */
            key?: pulumi.Input<string>;
            /**
             * Operator represents a key's relationship to the value.
             * Valid operators are Exists and Equal. Defaults to Equal.
             * Exists is equivalent to wildcard for value, so that a pod can
             * tolerate all taints of a particular category.
             */
            operator?: pulumi.Input<string>;
            /**
             * TolerationSeconds represents the period of time the toleration (which must be
             * of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default,
             * it is not set, which means tolerate the taint forever (do not evict). Zero and
             * negative values will be treated as 0 (evict immediately) by the system.
             */
            tolerationSeconds?: pulumi.Input<number>;
            /**
             * Value is the taint value the toleration matches to.
             * If the operator is Exists, the value should be empty, otherwise just a regular string.
             */
            value?: pulumi.Input<string>;
        }
        /**
         * Status presents the observed state of RabbitmqCluster
         */
        interface RabbitmqClusterStatus {
            binding?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterStatusBinding>;
            /**
             * Set of Conditions describing the current state of the RabbitmqCluster
             */
            conditions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterStatusConditions>[]>;
            defaultUser?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterStatusDefaultUser>;
            /**
             * observedGeneration is the most recent successful generation observed for this RabbitmqCluster. It corresponds to the
             * RabbitmqCluster's generation, which is updated on mutation by the API Server.
             */
            observedGeneration?: pulumi.Input<number>;
        }
        /**
         * Binding exposes a secret containing the binding information for this
         * RabbitmqCluster. It implements the service binding Provisioned Service
         * duck type. See: https://github.com/servicebinding/spec#provisioned-service
         */
        interface RabbitmqClusterStatusBinding {
            /**
             * Name of the referent.
             * This field is effectively required, but due to backwards compatibility is
             * allowed to be empty. Instances of this type with an empty value here are
             * almost certainly wrong.
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name?: pulumi.Input<string>;
        }
        interface RabbitmqClusterStatusConditions {
            /**
             * The last time this Condition type changed.
             */
            lastTransitionTime?: pulumi.Input<string>;
            /**
             * Full text reason for current status of the condition.
             */
            message?: pulumi.Input<string>;
            /**
             * One word, camel-case reason for current status of the condition.
             */
            reason?: pulumi.Input<string>;
            /**
             * True, False, or Unknown
             */
            status?: pulumi.Input<string>;
            /**
             * Type indicates the scope of RabbitmqCluster status addressed by the condition.
             */
            type?: pulumi.Input<string>;
        }
        /**
         * Identifying information on internal resources
         */
        interface RabbitmqClusterStatusDefaultUser {
            secretReference?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterStatusDefaultUserSecretReference>;
            serviceReference?: pulumi.Input<inputs.rabbitmq.v1beta1.RabbitmqClusterStatusDefaultUserServiceReference>;
        }
        /**
         * Reference to the Kubernetes Secret containing the credentials of the default
         * user.
         */
        interface RabbitmqClusterStatusDefaultUserSecretReference {
            /**
             * Key-value pairs in the Secret corresponding to `username`, `password`, `host`, and `port`
             */
            keys?: pulumi.Input<{
                [key: string]: pulumi.Input<string>;
            }>;
            /**
             * Name of the Secret containing the default user credentials
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace of the Secret containing the default user credentials
             */
            namespace?: pulumi.Input<string>;
        }
        /**
         * Reference to the Kubernetes Service serving the cluster.
         */
        interface RabbitmqClusterStatusDefaultUserServiceReference {
            /**
             * Name of the Service serving the cluster
             */
            name?: pulumi.Input<string>;
            /**
             * Namespace of the Service serving the cluster
             */
            namespace?: pulumi.Input<string>;
        }
    }
}
