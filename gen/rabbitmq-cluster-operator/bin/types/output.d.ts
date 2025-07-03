import * as outputs from "../types/output";
export declare namespace meta {
    namespace v1 {
        /**
         * ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
         */
        interface ListMeta {
            /**
             * continue may be set if the user set a limit on the number of items returned, and indicates that the server has more data available. The value is opaque and may be used to issue another request to the endpoint that served this list to retrieve the next set of available objects. Continuing a consistent list may not be possible if the server configuration has changed or more than a few minutes have passed. The resourceVersion field returned when using this continue value will be identical to the value in the first response, unless you have received this token from an error message.
             */
            continue: string;
            /**
             * remainingItemCount is the number of subsequent items in the list which are not included in this list response. If the list request contained label or field selectors, then the number of remaining items is unknown and the field will be left unset and omitted during serialization. If the list is complete (either because it is not chunking or because this is the last chunk), then there are no more remaining items and this field will be left unset and omitted during serialization. Servers older than v1.15 do not set this field. The intended use of the remainingItemCount is *estimating* the size of a collection. Clients should not rely on the remainingItemCount to be set or to be exact.
             */
            remainingItemCount: number;
            /**
             * String that identifies the server's internal version of this object that can be used by clients to determine when objects have changed. Value must be treated as opaque by clients and passed unmodified back to the server. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
             */
            resourceVersion: string;
            /**
             * Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.
             */
            selfLink: string;
        }
        /**
         * ManagedFieldsEntry is a workflow-id, a FieldSet and the group version of the resource that the fieldset applies to.
         */
        interface ManagedFieldsEntry {
            /**
             * APIVersion defines the version of this resource that this field set applies to. The format is "group/version" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted.
             */
            apiVersion: string;
            /**
             * FieldsType is the discriminator for the different fields format and version. There is currently only one possible value: "FieldsV1"
             */
            fieldsType: string;
            /**
             * FieldsV1 holds the first JSON version format as described in the "FieldsV1" type.
             */
            fieldsV1: any;
            /**
             * Manager is an identifier of the workflow managing these fields.
             */
            manager: string;
            /**
             * Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are 'Apply' and 'Update'.
             */
            operation: string;
            /**
             * Subresource is the name of the subresource used to update that object, or empty string if the object was updated through the main resource. The value of this field is used to distinguish between managers, even if they share the same name. For example, a status update will be distinct from a regular update using the same manager name. Note that the APIVersion field is not related to the Subresource field and it always corresponds to the version of the main resource.
             */
            subresource: string;
            /**
             * Time is the timestamp of when the ManagedFields entry was added. The timestamp will also be updated if a field is added, the manager changes any of the owned fields value or removes a field. The timestamp does not update when a field is removed from the entry because another manager took it over.
             */
            time: string;
        }
        /**
         * ManagedFieldsEntry is a workflow-id, a FieldSet and the group version of the resource that the fieldset applies to.
         */
        interface ManagedFieldsEntryPatch {
            /**
             * APIVersion defines the version of this resource that this field set applies to. The format is "group/version" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted.
             */
            apiVersion: string;
            /**
             * FieldsType is the discriminator for the different fields format and version. There is currently only one possible value: "FieldsV1"
             */
            fieldsType: string;
            /**
             * FieldsV1 holds the first JSON version format as described in the "FieldsV1" type.
             */
            fieldsV1: any;
            /**
             * Manager is an identifier of the workflow managing these fields.
             */
            manager: string;
            /**
             * Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are 'Apply' and 'Update'.
             */
            operation: string;
            /**
             * Subresource is the name of the subresource used to update that object, or empty string if the object was updated through the main resource. The value of this field is used to distinguish between managers, even if they share the same name. For example, a status update will be distinct from a regular update using the same manager name. Note that the APIVersion field is not related to the Subresource field and it always corresponds to the version of the main resource.
             */
            subresource: string;
            /**
             * Time is the timestamp of when the ManagedFields entry was added. The timestamp will also be updated if a field is added, the manager changes any of the owned fields value or removes a field. The timestamp does not update when a field is removed from the entry because another manager took it over.
             */
            time: string;
        }
        /**
         * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
         */
        interface ObjectMeta {
            /**
             * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
             */
            annotations: {
                [key: string]: string;
            };
            /**
             * CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC.
             *
             * Populated by the system. Read-only. Null for lists. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            creationTimestamp: string;
            /**
             * Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.
             */
            deletionGracePeriodSeconds: number;
            /**
             * DeletionTimestamp is RFC 3339 date and time at which this resource will be deleted. This field is set by the server when a graceful deletion is requested by the user, and is not directly settable by a client. The resource is expected to be deleted (no longer visible from resource lists, and not reachable by name) after the time in this field, once the finalizers list is empty. As long as the finalizers list contains items, deletion is blocked. Once the deletionTimestamp is set, this value may not be unset or be set further into the future, although it may be shortened or the resource may be deleted prior to this time. For example, a user may request that a pod is deleted in 30 seconds. The Kubelet will react by sending a graceful termination signal to the containers in the pod. After that 30 seconds, the Kubelet will send a hard termination signal (SIGKILL) to the container and after cleanup, remove the pod from the API. In the presence of network partitions, this object may still exist after this timestamp, until an administrator or automated process can determine the resource is fully terminated. If not set, graceful deletion of the object has not been requested.
             *
             * Populated by the system when a graceful deletion is requested. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            deletionTimestamp: string;
            /**
             * Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. Finalizers may be processed and removed in any order.  Order is NOT enforced because it introduces significant risk of stuck finalizers. finalizers is a shared field, any actor with permission can reorder it. If the finalizer list is processed in order, then this can lead to a situation in which the component responsible for the first finalizer in the list is waiting for a signal (field value, external system, or other) produced by a component responsible for a finalizer later in the list, resulting in a deadlock. Without enforced ordering finalizers are free to order amongst themselves and are not vulnerable to ordering changes in the list.
             */
            finalizers: string[];
            /**
             * GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.
             *
             * If this field is specified and the generated name exists, the server will return a 409.
             *
             * Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency
             */
            generateName: string;
            /**
             * A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.
             */
            generation: number;
            /**
             * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
             */
            labels: {
                [key: string]: string;
            };
            /**
             * ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like "ci-cd". The set of fields is always in the version that the workflow used when modifying the object.
             */
            managedFields: outputs.meta.v1.ManagedFieldsEntry[];
            /**
             * Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
             */
            name: string;
            /**
             * Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.
             *
             * Must be a DNS_LABEL. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces
             */
            namespace: string;
            /**
             * List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller.
             */
            ownerReferences: outputs.meta.v1.OwnerReference[];
            /**
             * An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.
             *
             * Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
             */
            resourceVersion: string;
            /**
             * Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.
             */
            selfLink: string;
            /**
             * UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.
             *
             * Populated by the system. Read-only. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
             */
            uid: string;
        }
        /**
         * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
         */
        interface ObjectMetaPatch {
            /**
             * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
             */
            annotations: {
                [key: string]: string;
            };
            /**
             * CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC.
             *
             * Populated by the system. Read-only. Null for lists. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            creationTimestamp: string;
            /**
             * Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.
             */
            deletionGracePeriodSeconds: number;
            /**
             * DeletionTimestamp is RFC 3339 date and time at which this resource will be deleted. This field is set by the server when a graceful deletion is requested by the user, and is not directly settable by a client. The resource is expected to be deleted (no longer visible from resource lists, and not reachable by name) after the time in this field, once the finalizers list is empty. As long as the finalizers list contains items, deletion is blocked. Once the deletionTimestamp is set, this value may not be unset or be set further into the future, although it may be shortened or the resource may be deleted prior to this time. For example, a user may request that a pod is deleted in 30 seconds. The Kubelet will react by sending a graceful termination signal to the containers in the pod. After that 30 seconds, the Kubelet will send a hard termination signal (SIGKILL) to the container and after cleanup, remove the pod from the API. In the presence of network partitions, this object may still exist after this timestamp, until an administrator or automated process can determine the resource is fully terminated. If not set, graceful deletion of the object has not been requested.
             *
             * Populated by the system when a graceful deletion is requested. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            deletionTimestamp: string;
            /**
             * Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. Finalizers may be processed and removed in any order.  Order is NOT enforced because it introduces significant risk of stuck finalizers. finalizers is a shared field, any actor with permission can reorder it. If the finalizer list is processed in order, then this can lead to a situation in which the component responsible for the first finalizer in the list is waiting for a signal (field value, external system, or other) produced by a component responsible for a finalizer later in the list, resulting in a deadlock. Without enforced ordering finalizers are free to order amongst themselves and are not vulnerable to ordering changes in the list.
             */
            finalizers: string[];
            /**
             * GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.
             *
             * If this field is specified and the generated name exists, the server will return a 409.
             *
             * Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency
             */
            generateName: string;
            /**
             * A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.
             */
            generation: number;
            /**
             * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
             */
            labels: {
                [key: string]: string;
            };
            /**
             * ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like "ci-cd". The set of fields is always in the version that the workflow used when modifying the object.
             */
            managedFields: outputs.meta.v1.ManagedFieldsEntryPatch[];
            /**
             * Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
             */
            name: string;
            /**
             * Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.
             *
             * Must be a DNS_LABEL. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces
             */
            namespace: string;
            /**
             * List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller.
             */
            ownerReferences: outputs.meta.v1.OwnerReferencePatch[];
            /**
             * An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.
             *
             * Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
             */
            resourceVersion: string;
            /**
             * Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.
             */
            selfLink: string;
            /**
             * UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.
             *
             * Populated by the system. Read-only. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
             */
            uid: string;
        }
        /**
         * OwnerReference contains enough information to let you identify an owning object. An owning object must be in the same namespace as the dependent, or be cluster-scoped, so there is no namespace field.
         */
        interface OwnerReference {
            /**
             * API version of the referent.
             */
            apiVersion: string;
            /**
             * If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. See https://kubernetes.io/docs/concepts/architecture/garbage-collection/#foreground-deletion for how the garbage collector interacts with this field and enforces the foreground deletion. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.
             */
            blockOwnerDeletion: boolean;
            /**
             * If true, this reference points to the managing controller.
             */
            controller: boolean;
            /**
             * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
             */
            name: string;
            /**
             * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
             */
            uid: string;
        }
        /**
         * OwnerReference contains enough information to let you identify an owning object. An owning object must be in the same namespace as the dependent, or be cluster-scoped, so there is no namespace field.
         */
        interface OwnerReferencePatch {
            /**
             * API version of the referent.
             */
            apiVersion: string;
            /**
             * If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. See https://kubernetes.io/docs/concepts/architecture/garbage-collection/#foreground-deletion for how the garbage collector interacts with this field and enforces the foreground deletion. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.
             */
            blockOwnerDeletion: boolean;
            /**
             * If true, this reference points to the managing controller.
             */
            controller: boolean;
            /**
             * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
             */
            name: string;
            /**
             * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
             */
            uid: string;
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
            apiVersion: "rabbitmq.com/v1beta1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "RabbitmqCluster";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.rabbitmq.v1beta1.RabbitmqClusterSpec;
            status: outputs.rabbitmq.v1beta1.RabbitmqClusterStatus;
        }
        /**
         * Spec is the desired state of the RabbitmqCluster Custom Resource.
         */
        interface RabbitmqClusterSpec {
            affinity: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinity;
            /**
             * Set to true to automatically enable all feature flags after each upgrade
             * For more information, see https://www.rabbitmq.com/docs/feature-flags
             */
            autoEnableAllFeatureFlags: boolean;
            /**
             * DelayStartSeconds is the time the init container (`setup-container`) will sleep before terminating.
             * This effectively delays the time between starting the Pod and starting the `rabbitmq` container.
             * RabbitMQ relies on up-to-date DNS entries early during peer discovery.
             * The purpose of this artificial delay is to ensure that DNS entries are up-to-date when booting RabbitMQ.
             * For more information, see https://github.com/kubernetes/kubernetes/issues/92559
             * If your Kubernetes DNS backend is configured with a low DNS cache value or publishes not ready addresses
             * promptly, you can decrase this value or set it to 0.
             */
            delayStartSeconds: number;
            /**
             * Image is the name of the RabbitMQ docker image to use for RabbitMQ nodes in the RabbitmqCluster.
             * Must be provided together with ImagePullSecrets in order to use an image in a private registry.
             */
            image: string;
            /**
             * List of Secret resource containing access credentials to the registry for the RabbitMQ image. Required if the docker registry is private.
             */
            imagePullSecrets: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecImagePullSecrets[];
            override: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverride;
            persistence: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecPersistence;
            rabbitmq: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecRabbitmq;
            /**
             * Replicas is the number of nodes in the RabbitMQ cluster. Each node is deployed as a Replica in a StatefulSet. Only 1, 3, 5 replicas clusters are tested.
             * This value should be an odd number to ensure the resultant cluster can establish exactly one quorum of nodes
             * in the event of a fragmenting network partition.
             */
            replicas: number;
            resources: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecResources;
            secretBackend: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecSecretBackend;
            service: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecService;
            /**
             * If unset, or set to false, the cluster will run `rabbitmq-queues rebalance all` whenever the cluster is updated.
             * Set to true to prevent the operator rebalancing queue leaders after a cluster update.
             * Has no effect if the cluster only consists of one node.
             * For more information, see https://www.rabbitmq.com/rabbitmq-queues.8.html#rebalance
             */
            skipPostDeploySteps: boolean;
            /**
             * TerminationGracePeriodSeconds is the timeout that each rabbitmqcluster pod will have to terminate gracefully.
             * It defaults to 604800 seconds ( a week long) to ensure that the container preStop lifecycle hook can finish running.
             * For more information, see: https://github.com/rabbitmq/cluster-operator/blob/main/docs/design/20200520-graceful-pod-termination.md
             */
            terminationGracePeriodSeconds: number;
            tls: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecTls;
            /**
             * Tolerations is the list of Toleration resources attached to each Pod in the RabbitmqCluster.
             */
            tolerations: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecTolerations[];
        }
        /**
         * Affinity scheduling rules to be applied on created Pods.
         */
        interface RabbitmqClusterSpecAffinity {
            nodeAffinity: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityNodeAffinity;
            podAffinity: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAffinity;
            podAntiAffinity: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAntiAffinity;
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
            preferredDuringSchedulingIgnoredDuringExecution: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution;
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
            preferredDuringSchedulingIgnoredDuringExecution: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch;
        }
        /**
         * An empty preferred scheduling term matches all objects with implicit weight 0
         * (i.e. it's a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op).
         */
        interface RabbitmqClusterSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            preference: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference;
            /**
             * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
             */
            weight: number;
        }
        /**
         * An empty preferred scheduling term matches all objects with implicit weight 0
         * (i.e. it's a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op).
         */
        interface RabbitmqClusterSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            preference: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch;
            /**
             * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
             */
            weight: number;
        }
        /**
         * A node selector term, associated with the corresponding weight.
         */
        interface RabbitmqClusterSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
            /**
             * A list of node selector requirements by node's labels.
             */
            matchExpressions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[];
            /**
             * A list of node selector requirements by node's fields.
             */
            matchFields: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[];
        }
        /**
         * A node selector requirement is a selector that contains values, a key, and an operator
         * that relates the key and values.
         */
        interface RabbitmqClusterSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
            /**
             * The label key that the selector applies to.
             */
            key: string;
            /**
             * Represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
             */
            operator: string;
            /**
             * An array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. If the operator is Gt or Lt, the values
             * array must have a single element, which will be interpreted as an integer.
             * This array is replaced during a strategic merge patch.
             */
            values: string[];
        }
        /**
         * A node selector requirement is a selector that contains values, a key, and an operator
         * that relates the key and values.
         */
        interface RabbitmqClusterSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch {
            /**
             * The label key that the selector applies to.
             */
            key: string;
            /**
             * Represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
             */
            operator: string;
            /**
             * An array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. If the operator is Gt or Lt, the values
             * array must have a single element, which will be interpreted as an integer.
             * This array is replaced during a strategic merge patch.
             */
            values: string[];
        }
        /**
         * A node selector requirement is a selector that contains values, a key, and an operator
         * that relates the key and values.
         */
        interface RabbitmqClusterSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
            /**
             * The label key that the selector applies to.
             */
            key: string;
            /**
             * Represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
             */
            operator: string;
            /**
             * An array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. If the operator is Gt or Lt, the values
             * array must have a single element, which will be interpreted as an integer.
             * This array is replaced during a strategic merge patch.
             */
            values: string[];
        }
        /**
         * A node selector requirement is a selector that contains values, a key, and an operator
         * that relates the key and values.
         */
        interface RabbitmqClusterSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch {
            /**
             * The label key that the selector applies to.
             */
            key: string;
            /**
             * Represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
             */
            operator: string;
            /**
             * An array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. If the operator is Gt or Lt, the values
             * array must have a single element, which will be interpreted as an integer.
             * This array is replaced during a strategic merge patch.
             */
            values: string[];
        }
        /**
         * A node selector term, associated with the corresponding weight.
         */
        interface RabbitmqClusterSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch {
            /**
             * A list of node selector requirements by node's labels.
             */
            matchExpressions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch[];
            /**
             * A list of node selector requirements by node's fields.
             */
            matchFields: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch[];
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
            nodeSelectorTerms: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[];
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
            matchExpressions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[];
            /**
             * A list of node selector requirements by node's fields.
             */
            matchFields: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[];
        }
        /**
         * A node selector requirement is a selector that contains values, a key, and an operator
         * that relates the key and values.
         */
        interface RabbitmqClusterSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
            /**
             * The label key that the selector applies to.
             */
            key: string;
            /**
             * Represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
             */
            operator: string;
            /**
             * An array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. If the operator is Gt or Lt, the values
             * array must have a single element, which will be interpreted as an integer.
             * This array is replaced during a strategic merge patch.
             */
            values: string[];
        }
        /**
         * A node selector requirement is a selector that contains values, a key, and an operator
         * that relates the key and values.
         */
        interface RabbitmqClusterSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch {
            /**
             * The label key that the selector applies to.
             */
            key: string;
            /**
             * Represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
             */
            operator: string;
            /**
             * An array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. If the operator is Gt or Lt, the values
             * array must have a single element, which will be interpreted as an integer.
             * This array is replaced during a strategic merge patch.
             */
            values: string[];
        }
        /**
         * A node selector requirement is a selector that contains values, a key, and an operator
         * that relates the key and values.
         */
        interface RabbitmqClusterSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
            /**
             * The label key that the selector applies to.
             */
            key: string;
            /**
             * Represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
             */
            operator: string;
            /**
             * An array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. If the operator is Gt or Lt, the values
             * array must have a single element, which will be interpreted as an integer.
             * This array is replaced during a strategic merge patch.
             */
            values: string[];
        }
        /**
         * A node selector requirement is a selector that contains values, a key, and an operator
         * that relates the key and values.
         */
        interface RabbitmqClusterSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch {
            /**
             * The label key that the selector applies to.
             */
            key: string;
            /**
             * Represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
             */
            operator: string;
            /**
             * An array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. If the operator is Gt or Lt, the values
             * array must have a single element, which will be interpreted as an integer.
             * This array is replaced during a strategic merge patch.
             */
            values: string[];
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
            matchExpressions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch[];
            /**
             * A list of node selector requirements by node's fields.
             */
            matchFields: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch[];
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
            nodeSelectorTerms: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch[];
        }
        /**
         * Affinity scheduling rules to be applied on created Pods.
         */
        interface RabbitmqClusterSpecAffinityPatch {
            nodeAffinity: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityNodeAffinityPatch;
            podAffinity: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAffinityPatch;
            podAntiAffinity: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAntiAffinityPatch;
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
            preferredDuringSchedulingIgnoredDuringExecution: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
            /**
             * If the affinity requirements specified by this field are not met at
             * scheduling time, the pod will not be scheduled onto the node.
             * If the affinity requirements specified by this field cease to be met
             * at some point during pod execution (e.g. due to a pod label update), the
             * system may or may not try to eventually evict the pod from its node.
             * When there are multiple elements, the lists of nodes corresponding to each
             * podAffinityTerm are intersected, i.e. all terms must be satisfied.
             */
            requiredDuringSchedulingIgnoredDuringExecution: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
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
            preferredDuringSchedulingIgnoredDuringExecution: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch[];
            /**
             * If the affinity requirements specified by this field are not met at
             * scheduling time, the pod will not be scheduled onto the node.
             * If the affinity requirements specified by this field cease to be met
             * at some point during pod execution (e.g. due to a pod label update), the
             * system may or may not try to eventually evict the pod from its node.
             * When there are multiple elements, the lists of nodes corresponding to each
             * podAffinityTerm are intersected, i.e. all terms must be satisfied.
             */
            requiredDuringSchedulingIgnoredDuringExecution: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch[];
        }
        /**
         * The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)
         */
        interface RabbitmqClusterSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
            /**
             * weight associated with matching the corresponding podAffinityTerm,
             * in the range 1-100.
             */
            weight: number;
        }
        /**
         * The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)
         */
        interface RabbitmqClusterSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch;
            /**
             * weight associated with matching the corresponding podAffinityTerm,
             * in the range 1-100.
             */
            weight: number;
        }
        /**
         * Required. A pod affinity term, associated with the corresponding weight.
         */
        interface RabbitmqClusterSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
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
            matchLabelKeys: string[];
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
            mismatchLabelKeys: string[];
            namespaceSelector: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
            /**
             * namespaces specifies a static list of namespace names that the term applies to.
             * The term is applied to the union of the namespaces listed in this field
             * and the ones selected by namespaceSelector.
             * null or empty namespaces list and null namespaceSelector means "this pod's namespace".
             */
            namespaces: string[];
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
             * the labelSelector in the specified namespaces, where co-located is defined as running on a node
             * whose value of the label with key topologyKey matches that of any node on which any of the
             * selected pods is running.
             * Empty topologyKey is not allowed.
             */
            topologyKey: string;
        }
        /**
         * A label query over a set of resources, in this case pods.
         * If it's null, this PodAffinityTerm matches with no Pods.
         */
        interface RabbitmqClusterSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that
         * relates the key and values.
         */
        interface RabbitmqClusterSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            /**
             * key is the label key that the selector applies to.
             */
            key: string;
            /**
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator: string;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            values: string[];
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that
         * relates the key and values.
         */
        interface RabbitmqClusterSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            /**
             * key is the label key that the selector applies to.
             */
            key: string;
            /**
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator: string;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            values: string[];
        }
        /**
         * A label query over a set of resources, in this case pods.
         * If it's null, this PodAffinityTerm matches with no Pods.
         */
        interface RabbitmqClusterSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
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
            matchExpressions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that
         * relates the key and values.
         */
        interface RabbitmqClusterSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            /**
             * key is the label key that the selector applies to.
             */
            key: string;
            /**
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator: string;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            values: string[];
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that
         * relates the key and values.
         */
        interface RabbitmqClusterSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            /**
             * key is the label key that the selector applies to.
             */
            key: string;
            /**
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator: string;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            values: string[];
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
            matchExpressions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * Required. A pod affinity term, associated with the corresponding weight.
         */
        interface RabbitmqClusterSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch;
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
            matchLabelKeys: string[];
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
            mismatchLabelKeys: string[];
            namespaceSelector: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch;
            /**
             * namespaces specifies a static list of namespace names that the term applies to.
             * The term is applied to the union of the namespaces listed in this field
             * and the ones selected by namespaceSelector.
             * null or empty namespaces list and null namespaceSelector means "this pod's namespace".
             */
            namespaces: string[];
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
             * the labelSelector in the specified namespaces, where co-located is defined as running on a node
             * whose value of the label with key topologyKey matches that of any node on which any of the
             * selected pods is running.
             * Empty topologyKey is not allowed.
             */
            topologyKey: string;
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
            labelSelector: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
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
            matchLabelKeys: string[];
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
            mismatchLabelKeys: string[];
            namespaceSelector: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
            /**
             * namespaces specifies a static list of namespace names that the term applies to.
             * The term is applied to the union of the namespaces listed in this field
             * and the ones selected by namespaceSelector.
             * null or empty namespaces list and null namespaceSelector means "this pod's namespace".
             */
            namespaces: string[];
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
             * the labelSelector in the specified namespaces, where co-located is defined as running on a node
             * whose value of the label with key topologyKey matches that of any node on which any of the
             * selected pods is running.
             * Empty topologyKey is not allowed.
             */
            topologyKey: string;
        }
        /**
         * A label query over a set of resources, in this case pods.
         * If it's null, this PodAffinityTerm matches with no Pods.
         */
        interface RabbitmqClusterSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that
         * relates the key and values.
         */
        interface RabbitmqClusterSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            /**
             * key is the label key that the selector applies to.
             */
            key: string;
            /**
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator: string;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            values: string[];
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that
         * relates the key and values.
         */
        interface RabbitmqClusterSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            /**
             * key is the label key that the selector applies to.
             */
            key: string;
            /**
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator: string;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            values: string[];
        }
        /**
         * A label query over a set of resources, in this case pods.
         * If it's null, this PodAffinityTerm matches with no Pods.
         */
        interface RabbitmqClusterSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
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
            matchExpressions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that
         * relates the key and values.
         */
        interface RabbitmqClusterSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            /**
             * key is the label key that the selector applies to.
             */
            key: string;
            /**
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator: string;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            values: string[];
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that
         * relates the key and values.
         */
        interface RabbitmqClusterSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            /**
             * key is the label key that the selector applies to.
             */
            key: string;
            /**
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator: string;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            values: string[];
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
            matchExpressions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
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
            labelSelector: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch;
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
            matchLabelKeys: string[];
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
            mismatchLabelKeys: string[];
            namespaceSelector: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch;
            /**
             * namespaces specifies a static list of namespace names that the term applies to.
             * The term is applied to the union of the namespaces listed in this field
             * and the ones selected by namespaceSelector.
             * null or empty namespaces list and null namespaceSelector means "this pod's namespace".
             */
            namespaces: string[];
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
             * the labelSelector in the specified namespaces, where co-located is defined as running on a node
             * whose value of the label with key topologyKey matches that of any node on which any of the
             * selected pods is running.
             * Empty topologyKey is not allowed.
             */
            topologyKey: string;
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
             * compute a sum by iterating through the elements of this field and adding
             * "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the
             * node(s) with the highest sum are the most preferred.
             */
            preferredDuringSchedulingIgnoredDuringExecution: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
            /**
             * If the anti-affinity requirements specified by this field are not met at
             * scheduling time, the pod will not be scheduled onto the node.
             * If the anti-affinity requirements specified by this field cease to be met
             * at some point during pod execution (e.g. due to a pod label update), the
             * system may or may not try to eventually evict the pod from its node.
             * When there are multiple elements, the lists of nodes corresponding to each
             * podAffinityTerm are intersected, i.e. all terms must be satisfied.
             */
            requiredDuringSchedulingIgnoredDuringExecution: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
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
             * compute a sum by iterating through the elements of this field and adding
             * "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the
             * node(s) with the highest sum are the most preferred.
             */
            preferredDuringSchedulingIgnoredDuringExecution: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch[];
            /**
             * If the anti-affinity requirements specified by this field are not met at
             * scheduling time, the pod will not be scheduled onto the node.
             * If the anti-affinity requirements specified by this field cease to be met
             * at some point during pod execution (e.g. due to a pod label update), the
             * system may or may not try to eventually evict the pod from its node.
             * When there are multiple elements, the lists of nodes corresponding to each
             * podAffinityTerm are intersected, i.e. all terms must be satisfied.
             */
            requiredDuringSchedulingIgnoredDuringExecution: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch[];
        }
        /**
         * The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)
         */
        interface RabbitmqClusterSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
            /**
             * weight associated with matching the corresponding podAffinityTerm,
             * in the range 1-100.
             */
            weight: number;
        }
        /**
         * The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)
         */
        interface RabbitmqClusterSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch;
            /**
             * weight associated with matching the corresponding podAffinityTerm,
             * in the range 1-100.
             */
            weight: number;
        }
        /**
         * Required. A pod affinity term, associated with the corresponding weight.
         */
        interface RabbitmqClusterSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
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
            matchLabelKeys: string[];
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
            mismatchLabelKeys: string[];
            namespaceSelector: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
            /**
             * namespaces specifies a static list of namespace names that the term applies to.
             * The term is applied to the union of the namespaces listed in this field
             * and the ones selected by namespaceSelector.
             * null or empty namespaces list and null namespaceSelector means "this pod's namespace".
             */
            namespaces: string[];
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
             * the labelSelector in the specified namespaces, where co-located is defined as running on a node
             * whose value of the label with key topologyKey matches that of any node on which any of the
             * selected pods is running.
             * Empty topologyKey is not allowed.
             */
            topologyKey: string;
        }
        /**
         * A label query over a set of resources, in this case pods.
         * If it's null, this PodAffinityTerm matches with no Pods.
         */
        interface RabbitmqClusterSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that
         * relates the key and values.
         */
        interface RabbitmqClusterSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            /**
             * key is the label key that the selector applies to.
             */
            key: string;
            /**
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator: string;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            values: string[];
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that
         * relates the key and values.
         */
        interface RabbitmqClusterSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            /**
             * key is the label key that the selector applies to.
             */
            key: string;
            /**
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator: string;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            values: string[];
        }
        /**
         * A label query over a set of resources, in this case pods.
         * If it's null, this PodAffinityTerm matches with no Pods.
         */
        interface RabbitmqClusterSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
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
            matchExpressions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that
         * relates the key and values.
         */
        interface RabbitmqClusterSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            /**
             * key is the label key that the selector applies to.
             */
            key: string;
            /**
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator: string;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            values: string[];
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that
         * relates the key and values.
         */
        interface RabbitmqClusterSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            /**
             * key is the label key that the selector applies to.
             */
            key: string;
            /**
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator: string;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            values: string[];
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
            matchExpressions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * Required. A pod affinity term, associated with the corresponding weight.
         */
        interface RabbitmqClusterSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch;
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
            matchLabelKeys: string[];
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
            mismatchLabelKeys: string[];
            namespaceSelector: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch;
            /**
             * namespaces specifies a static list of namespace names that the term applies to.
             * The term is applied to the union of the namespaces listed in this field
             * and the ones selected by namespaceSelector.
             * null or empty namespaces list and null namespaceSelector means "this pod's namespace".
             */
            namespaces: string[];
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
             * the labelSelector in the specified namespaces, where co-located is defined as running on a node
             * whose value of the label with key topologyKey matches that of any node on which any of the
             * selected pods is running.
             * Empty topologyKey is not allowed.
             */
            topologyKey: string;
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
            labelSelector: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
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
            matchLabelKeys: string[];
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
            mismatchLabelKeys: string[];
            namespaceSelector: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
            /**
             * namespaces specifies a static list of namespace names that the term applies to.
             * The term is applied to the union of the namespaces listed in this field
             * and the ones selected by namespaceSelector.
             * null or empty namespaces list and null namespaceSelector means "this pod's namespace".
             */
            namespaces: string[];
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
             * the labelSelector in the specified namespaces, where co-located is defined as running on a node
             * whose value of the label with key topologyKey matches that of any node on which any of the
             * selected pods is running.
             * Empty topologyKey is not allowed.
             */
            topologyKey: string;
        }
        /**
         * A label query over a set of resources, in this case pods.
         * If it's null, this PodAffinityTerm matches with no Pods.
         */
        interface RabbitmqClusterSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that
         * relates the key and values.
         */
        interface RabbitmqClusterSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            /**
             * key is the label key that the selector applies to.
             */
            key: string;
            /**
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator: string;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            values: string[];
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that
         * relates the key and values.
         */
        interface RabbitmqClusterSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            /**
             * key is the label key that the selector applies to.
             */
            key: string;
            /**
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator: string;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            values: string[];
        }
        /**
         * A label query over a set of resources, in this case pods.
         * If it's null, this PodAffinityTerm matches with no Pods.
         */
        interface RabbitmqClusterSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
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
            matchExpressions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that
         * relates the key and values.
         */
        interface RabbitmqClusterSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            /**
             * key is the label key that the selector applies to.
             */
            key: string;
            /**
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator: string;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            values: string[];
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that
         * relates the key and values.
         */
        interface RabbitmqClusterSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            /**
             * key is the label key that the selector applies to.
             */
            key: string;
            /**
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator: string;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            values: string[];
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
            matchExpressions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
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
            labelSelector: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch;
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
            matchLabelKeys: string[];
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
            mismatchLabelKeys: string[];
            namespaceSelector: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch;
            /**
             * namespaces specifies a static list of namespace names that the term applies to.
             * The term is applied to the union of the namespaces listed in this field
             * and the ones selected by namespaceSelector.
             * null or empty namespaces list and null namespaceSelector means "this pod's namespace".
             */
            namespaces: string[];
            /**
             * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
             * the labelSelector in the specified namespaces, where co-located is defined as running on a node
             * whose value of the label with key topologyKey matches that of any node on which any of the
             * selected pods is running.
             * Empty topologyKey is not allowed.
             */
            topologyKey: string;
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
            name: string;
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
            name: string;
        }
        interface RabbitmqClusterSpecOverride {
            service: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideService;
            statefulSet: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSet;
        }
        interface RabbitmqClusterSpecOverridePatch {
            service: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideServicePatch;
            statefulSet: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetPatch;
        }
        interface RabbitmqClusterSpecOverrideService {
            metadata: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideServiceMetadata;
            spec: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideServiceSpec;
        }
        interface RabbitmqClusterSpecOverrideServiceMetadata {
            annotations: {
                [key: string]: string;
            };
            labels: {
                [key: string]: string;
            };
        }
        interface RabbitmqClusterSpecOverrideServiceMetadataPatch {
            annotations: {
                [key: string]: string;
            };
            labels: {
                [key: string]: string;
            };
        }
        interface RabbitmqClusterSpecOverrideServicePatch {
            metadata: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideServiceMetadataPatch;
            spec: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideServiceSpecPatch;
        }
        interface RabbitmqClusterSpecOverrideServiceSpec {
            allocateLoadBalancerNodePorts: boolean;
            clusterIP: string;
            clusterIPs: string[];
            externalIPs: string[];
            externalName: string;
            externalTrafficPolicy: string;
            healthCheckNodePort: number;
            internalTrafficPolicy: string;
            ipFamilies: string[];
            ipFamilyPolicy: string;
            loadBalancerClass: string;
            loadBalancerIP: string;
            loadBalancerSourceRanges: string[];
            ports: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideServiceSpecPorts[];
            publishNotReadyAddresses: boolean;
            selector: {
                [key: string]: string;
            };
            sessionAffinity: string;
            sessionAffinityConfig: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideServiceSpecSessionAffinityConfig;
            trafficDistribution: string;
            type: string;
        }
        interface RabbitmqClusterSpecOverrideServiceSpecPatch {
            allocateLoadBalancerNodePorts: boolean;
            clusterIP: string;
            clusterIPs: string[];
            externalIPs: string[];
            externalName: string;
            externalTrafficPolicy: string;
            healthCheckNodePort: number;
            internalTrafficPolicy: string;
            ipFamilies: string[];
            ipFamilyPolicy: string;
            loadBalancerClass: string;
            loadBalancerIP: string;
            loadBalancerSourceRanges: string[];
            ports: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideServiceSpecPortsPatch[];
            publishNotReadyAddresses: boolean;
            selector: {
                [key: string]: string;
            };
            sessionAffinity: string;
            sessionAffinityConfig: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideServiceSpecSessionAffinityConfigPatch;
            trafficDistribution: string;
            type: string;
        }
        interface RabbitmqClusterSpecOverrideServiceSpecPorts {
            appProtocol: string;
            name: string;
            nodePort: number;
            port: number;
            protocol: string;
            targetPort: number | string;
        }
        interface RabbitmqClusterSpecOverrideServiceSpecPortsPatch {
            appProtocol: string;
            name: string;
            nodePort: number;
            port: number;
            protocol: string;
            targetPort: number | string;
        }
        interface RabbitmqClusterSpecOverrideServiceSpecSessionAffinityConfig {
            clientIP: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideServiceSpecSessionAffinityConfigClientIP;
        }
        interface RabbitmqClusterSpecOverrideServiceSpecSessionAffinityConfigClientIP {
            timeoutSeconds: number;
        }
        interface RabbitmqClusterSpecOverrideServiceSpecSessionAffinityConfigClientIPPatch {
            timeoutSeconds: number;
        }
        interface RabbitmqClusterSpecOverrideServiceSpecSessionAffinityConfigPatch {
            clientIP: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideServiceSpecSessionAffinityConfigClientIPPatch;
        }
        interface RabbitmqClusterSpecOverrideStatefulSet {
            metadata: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetMetadata;
            spec: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpec;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetMetadata {
            annotations: {
                [key: string]: string;
            };
            labels: {
                [key: string]: string;
            };
        }
        interface RabbitmqClusterSpecOverrideStatefulSetMetadataPatch {
            annotations: {
                [key: string]: string;
            };
            labels: {
                [key: string]: string;
            };
        }
        interface RabbitmqClusterSpecOverrideStatefulSetPatch {
            metadata: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetMetadataPatch;
            spec: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecPatch;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpec {
            minReadySeconds: number;
            persistentVolumeClaimRetentionPolicy: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecPersistentVolumeClaimRetentionPolicy;
            podManagementPolicy: string;
            replicas: number;
            selector: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecSelector;
            serviceName: string;
            template: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplate;
            updateStrategy: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecUpdateStrategy;
            volumeClaimTemplates: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplates[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecPatch {
            minReadySeconds: number;
            persistentVolumeClaimRetentionPolicy: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecPersistentVolumeClaimRetentionPolicyPatch;
            podManagementPolicy: string;
            replicas: number;
            selector: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecSelectorPatch;
            serviceName: string;
            template: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplatePatch;
            updateStrategy: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecUpdateStrategyPatch;
            volumeClaimTemplates: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesPatch[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecPersistentVolumeClaimRetentionPolicy {
            whenDeleted: string;
            whenScaled: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecPersistentVolumeClaimRetentionPolicyPatch {
            whenDeleted: string;
            whenScaled: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecSelector {
            matchExpressions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecSelectorPatch {
            matchExpressions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplate {
            metadata: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateMetadata;
            spec: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpec;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateMetadata {
            annotations: {
                [key: string]: string;
            };
            labels: {
                [key: string]: string;
            };
            name: string;
            namespace: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateMetadataPatch {
            annotations: {
                [key: string]: string;
            };
            labels: {
                [key: string]: string;
            };
            name: string;
            namespace: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplatePatch {
            metadata: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateMetadataPatch;
            spec: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecPatch;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpec {
            activeDeadlineSeconds: number;
            affinity: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinity;
            automountServiceAccountToken: boolean;
            containers: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainers[];
            dnsConfig: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecDnsConfig;
            dnsPolicy: string;
            enableServiceLinks: boolean;
            ephemeralContainers: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainers[];
            hostAliases: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecHostAliases[];
            hostIPC: boolean;
            hostNetwork: boolean;
            hostPID: boolean;
            hostUsers: boolean;
            hostname: string;
            imagePullSecrets: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecImagePullSecrets[];
            initContainers: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainers[];
            nodeName: string;
            nodeSelector: {
                [key: string]: string;
            };
            os: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecOs;
            overhead: {
                [key: string]: number | string;
            };
            preemptionPolicy: string;
            priority: number;
            priorityClassName: string;
            readinessGates: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecReadinessGates[];
            resourceClaims: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecResourceClaims[];
            resources: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecResources;
            restartPolicy: string;
            runtimeClassName: string;
            schedulerName: string;
            schedulingGates: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSchedulingGates[];
            securityContext: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSecurityContext;
            serviceAccount: string;
            serviceAccountName: string;
            setHostnameAsFQDN: boolean;
            shareProcessNamespace: boolean;
            subdomain: string;
            terminationGracePeriodSeconds: number;
            tolerations: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecTolerations[];
            topologySpreadConstraints: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecTopologySpreadConstraints[];
            volumes: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumes[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinity {
            nodeAffinity: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinity;
            podAffinity: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinity;
            podAntiAffinity: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinity;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinity {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            preference: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference;
            weight: number;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            preference: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch;
            weight: number;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
            matchExpressions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[];
            matchFields: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
            key: string;
            operator: string;
            values: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferencePatch {
            matchExpressions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsPatch[];
            matchFields: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsPatch[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            nodeSelectorTerms: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
            matchExpressions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[];
            matchFields: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
            key: string;
            operator: string;
            values: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch {
            matchExpressions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsPatch[];
            matchFields: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsPatch[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            nodeSelectorTerms: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsPatch[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPatch {
            nodeAffinity: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityNodeAffinityPatch;
            podAffinity: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPatch;
            podAntiAffinity: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPatch;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinity {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
            weight: number;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch;
            weight: number;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
            matchLabelKeys: string[];
            mismatchLabelKeys: string[];
            namespaceSelector: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
            namespaces: string[];
            topologyKey: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch;
            matchLabelKeys: string[];
            mismatchLabelKeys: string[];
            namespaceSelector: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch;
            namespaces: string[];
            topologyKey: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
            matchLabelKeys: string[];
            mismatchLabelKeys: string[];
            namespaceSelector: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
            namespaces: string[];
            topologyKey: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch;
            matchLabelKeys: string[];
            mismatchLabelKeys: string[];
            namespaceSelector: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch;
            namespaces: string[];
            topologyKey: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinity {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPatch {
            preferredDuringSchedulingIgnoredDuringExecution: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch[];
            requiredDuringSchedulingIgnoredDuringExecution: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
            podAffinityTerm: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
            weight: number;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPatch {
            podAffinityTerm: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch;
            weight: number;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
            labelSelector: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
            matchLabelKeys: string[];
            mismatchLabelKeys: string[];
            namespaceSelector: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
            namespaces: string[];
            topologyKey: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
            matchExpressions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch {
            matchExpressions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
            matchExpressions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch {
            matchExpressions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermPatch {
            labelSelector: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorPatch;
            matchLabelKeys: string[];
            mismatchLabelKeys: string[];
            namespaceSelector: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorPatch;
            namespaces: string[];
            topologyKey: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
            labelSelector: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
            matchLabelKeys: string[];
            mismatchLabelKeys: string[];
            namespaceSelector: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
            namespaces: string[];
            topologyKey: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
            matchExpressions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch {
            matchExpressions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
            matchExpressions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch {
            matchExpressions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionPatch {
            labelSelector: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorPatch;
            matchLabelKeys: string[];
            mismatchLabelKeys: string[];
            namespaceSelector: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorPatch;
            namespaces: string[];
            topologyKey: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainers {
            args: string[];
            command: string[];
            env: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnv[];
            envFrom: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvFrom[];
            image: string;
            imagePullPolicy: string;
            lifecycle: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecycle;
            livenessProbe: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLivenessProbe;
            name: string;
            ports: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersPorts[];
            readinessProbe: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersReadinessProbe;
            resizePolicy: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersResizePolicy[];
            resources: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersResources;
            restartPolicy: string;
            securityContext: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersSecurityContext;
            startupProbe: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersStartupProbe;
            stdin: boolean;
            stdinOnce: boolean;
            terminationMessagePath: string;
            terminationMessagePolicy: string;
            tty: boolean;
            volumeDevices: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersVolumeDevices[];
            volumeMounts: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersVolumeMounts[];
            workingDir: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnv {
            name: string;
            value: string;
            valueFrom: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvValueFrom;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvFrom {
            configMapRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvFromConfigMapRef;
            prefix: string;
            secretRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvFromSecretRef;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvFromConfigMapRef {
            name: string;
            optional: boolean;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvFromConfigMapRefPatch {
            name: string;
            optional: boolean;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvFromPatch {
            configMapRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvFromConfigMapRefPatch;
            prefix: string;
            secretRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvFromSecretRefPatch;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvFromSecretRef {
            name: string;
            optional: boolean;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvFromSecretRefPatch {
            name: string;
            optional: boolean;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvPatch {
            name: string;
            value: string;
            valueFrom: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvValueFromPatch;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvValueFrom {
            configMapKeyRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvValueFromConfigMapKeyRef;
            fieldRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvValueFromFieldRef;
            resourceFieldRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvValueFromResourceFieldRef;
            secretKeyRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvValueFromSecretKeyRef;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvValueFromConfigMapKeyRef {
            key: string;
            name: string;
            optional: boolean;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvValueFromConfigMapKeyRefPatch {
            key: string;
            name: string;
            optional: boolean;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvValueFromFieldRef {
            apiVersion: string;
            fieldPath: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvValueFromFieldRefPatch {
            apiVersion: string;
            fieldPath: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvValueFromPatch {
            configMapKeyRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvValueFromConfigMapKeyRefPatch;
            fieldRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvValueFromFieldRefPatch;
            resourceFieldRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvValueFromResourceFieldRefPatch;
            secretKeyRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvValueFromSecretKeyRefPatch;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvValueFromResourceFieldRef {
            containerName: string;
            divisor: number | string;
            resource: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvValueFromResourceFieldRefPatch {
            containerName: string;
            divisor: number | string;
            resource: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvValueFromSecretKeyRef {
            key: string;
            name: string;
            optional: boolean;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvValueFromSecretKeyRefPatch {
            key: string;
            name: string;
            optional: boolean;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecycle {
            postStart: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePostStart;
            preStop: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePreStop;
            stopSignal: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePatch {
            postStart: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePostStartPatch;
            preStop: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePreStopPatch;
            stopSignal: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePostStart {
            exec: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePostStartExec;
            httpGet: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePostStartHttpGet;
            sleep: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePostStartSleep;
            tcpSocket: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePostStartTcpSocket;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePostStartExec {
            command: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePostStartExecPatch {
            command: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePostStartHttpGet {
            host: string;
            httpHeaders: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePostStartHttpGetHttpHeaders[];
            path: string;
            port: number | string;
            scheme: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePostStartHttpGetHttpHeaders {
            name: string;
            value: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePostStartHttpGetHttpHeadersPatch {
            name: string;
            value: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePostStartHttpGetPatch {
            host: string;
            httpHeaders: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePostStartHttpGetHttpHeadersPatch[];
            path: string;
            port: number | string;
            scheme: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePostStartPatch {
            exec: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePostStartExecPatch;
            httpGet: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePostStartHttpGetPatch;
            sleep: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePostStartSleepPatch;
            tcpSocket: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePostStartTcpSocketPatch;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePostStartSleep {
            seconds: number;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePostStartSleepPatch {
            seconds: number;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePostStartTcpSocket {
            host: string;
            port: number | string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePostStartTcpSocketPatch {
            host: string;
            port: number | string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePreStop {
            exec: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePreStopExec;
            httpGet: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePreStopHttpGet;
            sleep: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePreStopSleep;
            tcpSocket: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePreStopTcpSocket;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePreStopExec {
            command: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePreStopExecPatch {
            command: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePreStopHttpGet {
            host: string;
            httpHeaders: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePreStopHttpGetHttpHeaders[];
            path: string;
            port: number | string;
            scheme: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePreStopHttpGetHttpHeaders {
            name: string;
            value: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePreStopHttpGetHttpHeadersPatch {
            name: string;
            value: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePreStopHttpGetPatch {
            host: string;
            httpHeaders: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePreStopHttpGetHttpHeadersPatch[];
            path: string;
            port: number | string;
            scheme: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePreStopPatch {
            exec: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePreStopExecPatch;
            httpGet: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePreStopHttpGetPatch;
            sleep: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePreStopSleepPatch;
            tcpSocket: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePreStopTcpSocketPatch;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePreStopSleep {
            seconds: number;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePreStopSleepPatch {
            seconds: number;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePreStopTcpSocket {
            host: string;
            port: number | string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePreStopTcpSocketPatch {
            host: string;
            port: number | string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLivenessProbe {
            exec: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLivenessProbeExec;
            failureThreshold: number;
            grpc: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLivenessProbeGrpc;
            httpGet: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLivenessProbeHttpGet;
            initialDelaySeconds: number;
            periodSeconds: number;
            successThreshold: number;
            tcpSocket: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLivenessProbeTcpSocket;
            terminationGracePeriodSeconds: number;
            timeoutSeconds: number;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLivenessProbeExec {
            command: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLivenessProbeExecPatch {
            command: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLivenessProbeGrpc {
            port: number;
            service: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLivenessProbeGrpcPatch {
            port: number;
            service: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLivenessProbeHttpGet {
            host: string;
            httpHeaders: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLivenessProbeHttpGetHttpHeaders[];
            path: string;
            port: number | string;
            scheme: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLivenessProbeHttpGetHttpHeaders {
            name: string;
            value: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLivenessProbeHttpGetHttpHeadersPatch {
            name: string;
            value: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLivenessProbeHttpGetPatch {
            host: string;
            httpHeaders: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLivenessProbeHttpGetHttpHeadersPatch[];
            path: string;
            port: number | string;
            scheme: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLivenessProbePatch {
            exec: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLivenessProbeExecPatch;
            failureThreshold: number;
            grpc: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLivenessProbeGrpcPatch;
            httpGet: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLivenessProbeHttpGetPatch;
            initialDelaySeconds: number;
            periodSeconds: number;
            successThreshold: number;
            tcpSocket: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLivenessProbeTcpSocketPatch;
            terminationGracePeriodSeconds: number;
            timeoutSeconds: number;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLivenessProbeTcpSocket {
            host: string;
            port: number | string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLivenessProbeTcpSocketPatch {
            host: string;
            port: number | string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersPatch {
            args: string[];
            command: string[];
            env: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvPatch[];
            envFrom: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersEnvFromPatch[];
            image: string;
            imagePullPolicy: string;
            lifecycle: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLifecyclePatch;
            livenessProbe: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersLivenessProbePatch;
            name: string;
            ports: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersPortsPatch[];
            readinessProbe: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersReadinessProbePatch;
            resizePolicy: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersResizePolicyPatch[];
            resources: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersResourcesPatch;
            restartPolicy: string;
            securityContext: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersSecurityContextPatch;
            startupProbe: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersStartupProbePatch;
            stdin: boolean;
            stdinOnce: boolean;
            terminationMessagePath: string;
            terminationMessagePolicy: string;
            tty: boolean;
            volumeDevices: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersVolumeDevicesPatch[];
            volumeMounts: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersVolumeMountsPatch[];
            workingDir: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersPorts {
            containerPort: number;
            hostIP: string;
            hostPort: number;
            name: string;
            protocol: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersPortsPatch {
            containerPort: number;
            hostIP: string;
            hostPort: number;
            name: string;
            protocol: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersReadinessProbe {
            exec: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersReadinessProbeExec;
            failureThreshold: number;
            grpc: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersReadinessProbeGrpc;
            httpGet: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersReadinessProbeHttpGet;
            initialDelaySeconds: number;
            periodSeconds: number;
            successThreshold: number;
            tcpSocket: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersReadinessProbeTcpSocket;
            terminationGracePeriodSeconds: number;
            timeoutSeconds: number;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersReadinessProbeExec {
            command: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersReadinessProbeExecPatch {
            command: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersReadinessProbeGrpc {
            port: number;
            service: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersReadinessProbeGrpcPatch {
            port: number;
            service: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersReadinessProbeHttpGet {
            host: string;
            httpHeaders: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersReadinessProbeHttpGetHttpHeaders[];
            path: string;
            port: number | string;
            scheme: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersReadinessProbeHttpGetHttpHeaders {
            name: string;
            value: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersReadinessProbeHttpGetHttpHeadersPatch {
            name: string;
            value: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersReadinessProbeHttpGetPatch {
            host: string;
            httpHeaders: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersReadinessProbeHttpGetHttpHeadersPatch[];
            path: string;
            port: number | string;
            scheme: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersReadinessProbePatch {
            exec: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersReadinessProbeExecPatch;
            failureThreshold: number;
            grpc: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersReadinessProbeGrpcPatch;
            httpGet: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersReadinessProbeHttpGetPatch;
            initialDelaySeconds: number;
            periodSeconds: number;
            successThreshold: number;
            tcpSocket: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersReadinessProbeTcpSocketPatch;
            terminationGracePeriodSeconds: number;
            timeoutSeconds: number;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersReadinessProbeTcpSocket {
            host: string;
            port: number | string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersReadinessProbeTcpSocketPatch {
            host: string;
            port: number | string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersResizePolicy {
            resourceName: string;
            restartPolicy: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersResizePolicyPatch {
            resourceName: string;
            restartPolicy: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersResources {
            claims: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersResourcesClaims[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersResourcesClaims {
            name: string;
            request: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersResourcesClaimsPatch {
            name: string;
            request: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersResourcesPatch {
            claims: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersResourcesClaimsPatch[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersSecurityContext {
            allowPrivilegeEscalation: boolean;
            appArmorProfile: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersSecurityContextAppArmorProfile;
            capabilities: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersSecurityContextCapabilities;
            privileged: boolean;
            procMount: string;
            readOnlyRootFilesystem: boolean;
            runAsGroup: number;
            runAsNonRoot: boolean;
            runAsUser: number;
            seLinuxOptions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersSecurityContextSeLinuxOptions;
            seccompProfile: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersSecurityContextSeccompProfile;
            windowsOptions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersSecurityContextWindowsOptions;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersSecurityContextAppArmorProfile {
            localhostProfile: string;
            type: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersSecurityContextAppArmorProfilePatch {
            localhostProfile: string;
            type: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersSecurityContextCapabilities {
            add: string[];
            drop: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersSecurityContextCapabilitiesPatch {
            add: string[];
            drop: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersSecurityContextPatch {
            allowPrivilegeEscalation: boolean;
            appArmorProfile: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersSecurityContextAppArmorProfilePatch;
            capabilities: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersSecurityContextCapabilitiesPatch;
            privileged: boolean;
            procMount: string;
            readOnlyRootFilesystem: boolean;
            runAsGroup: number;
            runAsNonRoot: boolean;
            runAsUser: number;
            seLinuxOptions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersSecurityContextSeLinuxOptionsPatch;
            seccompProfile: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersSecurityContextSeccompProfilePatch;
            windowsOptions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersSecurityContextWindowsOptionsPatch;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersSecurityContextSeLinuxOptions {
            level: string;
            role: string;
            type: string;
            user: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersSecurityContextSeLinuxOptionsPatch {
            level: string;
            role: string;
            type: string;
            user: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersSecurityContextSeccompProfile {
            localhostProfile: string;
            type: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersSecurityContextSeccompProfilePatch {
            localhostProfile: string;
            type: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersSecurityContextWindowsOptions {
            gmsaCredentialSpec: string;
            gmsaCredentialSpecName: string;
            hostProcess: boolean;
            runAsUserName: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersSecurityContextWindowsOptionsPatch {
            gmsaCredentialSpec: string;
            gmsaCredentialSpecName: string;
            hostProcess: boolean;
            runAsUserName: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersStartupProbe {
            exec: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersStartupProbeExec;
            failureThreshold: number;
            grpc: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersStartupProbeGrpc;
            httpGet: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersStartupProbeHttpGet;
            initialDelaySeconds: number;
            periodSeconds: number;
            successThreshold: number;
            tcpSocket: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersStartupProbeTcpSocket;
            terminationGracePeriodSeconds: number;
            timeoutSeconds: number;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersStartupProbeExec {
            command: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersStartupProbeExecPatch {
            command: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersStartupProbeGrpc {
            port: number;
            service: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersStartupProbeGrpcPatch {
            port: number;
            service: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersStartupProbeHttpGet {
            host: string;
            httpHeaders: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersStartupProbeHttpGetHttpHeaders[];
            path: string;
            port: number | string;
            scheme: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersStartupProbeHttpGetHttpHeaders {
            name: string;
            value: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersStartupProbeHttpGetHttpHeadersPatch {
            name: string;
            value: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersStartupProbeHttpGetPatch {
            host: string;
            httpHeaders: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersStartupProbeHttpGetHttpHeadersPatch[];
            path: string;
            port: number | string;
            scheme: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersStartupProbePatch {
            exec: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersStartupProbeExecPatch;
            failureThreshold: number;
            grpc: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersStartupProbeGrpcPatch;
            httpGet: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersStartupProbeHttpGetPatch;
            initialDelaySeconds: number;
            periodSeconds: number;
            successThreshold: number;
            tcpSocket: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersStartupProbeTcpSocketPatch;
            terminationGracePeriodSeconds: number;
            timeoutSeconds: number;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersStartupProbeTcpSocket {
            host: string;
            port: number | string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersStartupProbeTcpSocketPatch {
            host: string;
            port: number | string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersVolumeDevices {
            devicePath: string;
            name: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersVolumeDevicesPatch {
            devicePath: string;
            name: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersVolumeMounts {
            mountPath: string;
            mountPropagation: string;
            name: string;
            readOnly: boolean;
            recursiveReadOnly: string;
            subPath: string;
            subPathExpr: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersVolumeMountsPatch {
            mountPath: string;
            mountPropagation: string;
            name: string;
            readOnly: boolean;
            recursiveReadOnly: string;
            subPath: string;
            subPathExpr: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecDnsConfig {
            nameservers: string[];
            options: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecDnsConfigOptions[];
            searches: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecDnsConfigOptions {
            name: string;
            value: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecDnsConfigOptionsPatch {
            name: string;
            value: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecDnsConfigPatch {
            nameservers: string[];
            options: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecDnsConfigOptionsPatch[];
            searches: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainers {
            args: string[];
            command: string[];
            env: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnv[];
            envFrom: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvFrom[];
            image: string;
            imagePullPolicy: string;
            lifecycle: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecycle;
            livenessProbe: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLivenessProbe;
            name: string;
            ports: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersPorts[];
            readinessProbe: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersReadinessProbe;
            resizePolicy: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersResizePolicy[];
            resources: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersResources;
            restartPolicy: string;
            securityContext: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersSecurityContext;
            startupProbe: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersStartupProbe;
            stdin: boolean;
            stdinOnce: boolean;
            targetContainerName: string;
            terminationMessagePath: string;
            terminationMessagePolicy: string;
            tty: boolean;
            volumeDevices: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersVolumeDevices[];
            volumeMounts: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersVolumeMounts[];
            workingDir: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnv {
            name: string;
            value: string;
            valueFrom: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvValueFrom;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvFrom {
            configMapRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvFromConfigMapRef;
            prefix: string;
            secretRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvFromSecretRef;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvFromConfigMapRef {
            name: string;
            optional: boolean;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvFromConfigMapRefPatch {
            name: string;
            optional: boolean;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvFromPatch {
            configMapRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvFromConfigMapRefPatch;
            prefix: string;
            secretRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvFromSecretRefPatch;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvFromSecretRef {
            name: string;
            optional: boolean;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvFromSecretRefPatch {
            name: string;
            optional: boolean;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvPatch {
            name: string;
            value: string;
            valueFrom: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvValueFromPatch;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvValueFrom {
            configMapKeyRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvValueFromConfigMapKeyRef;
            fieldRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvValueFromFieldRef;
            resourceFieldRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvValueFromResourceFieldRef;
            secretKeyRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvValueFromSecretKeyRef;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvValueFromConfigMapKeyRef {
            key: string;
            name: string;
            optional: boolean;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvValueFromConfigMapKeyRefPatch {
            key: string;
            name: string;
            optional: boolean;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvValueFromFieldRef {
            apiVersion: string;
            fieldPath: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvValueFromFieldRefPatch {
            apiVersion: string;
            fieldPath: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvValueFromPatch {
            configMapKeyRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvValueFromConfigMapKeyRefPatch;
            fieldRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvValueFromFieldRefPatch;
            resourceFieldRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvValueFromResourceFieldRefPatch;
            secretKeyRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvValueFromSecretKeyRefPatch;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvValueFromResourceFieldRef {
            containerName: string;
            divisor: number | string;
            resource: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvValueFromResourceFieldRefPatch {
            containerName: string;
            divisor: number | string;
            resource: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvValueFromSecretKeyRef {
            key: string;
            name: string;
            optional: boolean;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvValueFromSecretKeyRefPatch {
            key: string;
            name: string;
            optional: boolean;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecycle {
            postStart: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePostStart;
            preStop: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePreStop;
            stopSignal: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePatch {
            postStart: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePostStartPatch;
            preStop: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePreStopPatch;
            stopSignal: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePostStart {
            exec: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePostStartExec;
            httpGet: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePostStartHttpGet;
            sleep: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePostStartSleep;
            tcpSocket: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePostStartTcpSocket;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePostStartExec {
            command: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePostStartExecPatch {
            command: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePostStartHttpGet {
            host: string;
            httpHeaders: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePostStartHttpGetHttpHeaders[];
            path: string;
            port: number | string;
            scheme: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePostStartHttpGetHttpHeaders {
            name: string;
            value: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePostStartHttpGetHttpHeadersPatch {
            name: string;
            value: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePostStartHttpGetPatch {
            host: string;
            httpHeaders: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePostStartHttpGetHttpHeadersPatch[];
            path: string;
            port: number | string;
            scheme: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePostStartPatch {
            exec: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePostStartExecPatch;
            httpGet: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePostStartHttpGetPatch;
            sleep: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePostStartSleepPatch;
            tcpSocket: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePostStartTcpSocketPatch;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePostStartSleep {
            seconds: number;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePostStartSleepPatch {
            seconds: number;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePostStartTcpSocket {
            host: string;
            port: number | string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePostStartTcpSocketPatch {
            host: string;
            port: number | string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePreStop {
            exec: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePreStopExec;
            httpGet: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePreStopHttpGet;
            sleep: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePreStopSleep;
            tcpSocket: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePreStopTcpSocket;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePreStopExec {
            command: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePreStopExecPatch {
            command: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePreStopHttpGet {
            host: string;
            httpHeaders: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePreStopHttpGetHttpHeaders[];
            path: string;
            port: number | string;
            scheme: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePreStopHttpGetHttpHeaders {
            name: string;
            value: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePreStopHttpGetHttpHeadersPatch {
            name: string;
            value: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePreStopHttpGetPatch {
            host: string;
            httpHeaders: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePreStopHttpGetHttpHeadersPatch[];
            path: string;
            port: number | string;
            scheme: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePreStopPatch {
            exec: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePreStopExecPatch;
            httpGet: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePreStopHttpGetPatch;
            sleep: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePreStopSleepPatch;
            tcpSocket: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePreStopTcpSocketPatch;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePreStopSleep {
            seconds: number;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePreStopSleepPatch {
            seconds: number;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePreStopTcpSocket {
            host: string;
            port: number | string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePreStopTcpSocketPatch {
            host: string;
            port: number | string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLivenessProbe {
            exec: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLivenessProbeExec;
            failureThreshold: number;
            grpc: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLivenessProbeGrpc;
            httpGet: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLivenessProbeHttpGet;
            initialDelaySeconds: number;
            periodSeconds: number;
            successThreshold: number;
            tcpSocket: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLivenessProbeTcpSocket;
            terminationGracePeriodSeconds: number;
            timeoutSeconds: number;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLivenessProbeExec {
            command: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLivenessProbeExecPatch {
            command: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLivenessProbeGrpc {
            port: number;
            service: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLivenessProbeGrpcPatch {
            port: number;
            service: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLivenessProbeHttpGet {
            host: string;
            httpHeaders: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLivenessProbeHttpGetHttpHeaders[];
            path: string;
            port: number | string;
            scheme: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLivenessProbeHttpGetHttpHeaders {
            name: string;
            value: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLivenessProbeHttpGetHttpHeadersPatch {
            name: string;
            value: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLivenessProbeHttpGetPatch {
            host: string;
            httpHeaders: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLivenessProbeHttpGetHttpHeadersPatch[];
            path: string;
            port: number | string;
            scheme: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLivenessProbePatch {
            exec: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLivenessProbeExecPatch;
            failureThreshold: number;
            grpc: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLivenessProbeGrpcPatch;
            httpGet: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLivenessProbeHttpGetPatch;
            initialDelaySeconds: number;
            periodSeconds: number;
            successThreshold: number;
            tcpSocket: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLivenessProbeTcpSocketPatch;
            terminationGracePeriodSeconds: number;
            timeoutSeconds: number;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLivenessProbeTcpSocket {
            host: string;
            port: number | string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLivenessProbeTcpSocketPatch {
            host: string;
            port: number | string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersPatch {
            args: string[];
            command: string[];
            env: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvPatch[];
            envFrom: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersEnvFromPatch[];
            image: string;
            imagePullPolicy: string;
            lifecycle: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLifecyclePatch;
            livenessProbe: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersLivenessProbePatch;
            name: string;
            ports: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersPortsPatch[];
            readinessProbe: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersReadinessProbePatch;
            resizePolicy: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersResizePolicyPatch[];
            resources: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersResourcesPatch;
            restartPolicy: string;
            securityContext: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersSecurityContextPatch;
            startupProbe: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersStartupProbePatch;
            stdin: boolean;
            stdinOnce: boolean;
            targetContainerName: string;
            terminationMessagePath: string;
            terminationMessagePolicy: string;
            tty: boolean;
            volumeDevices: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersVolumeDevicesPatch[];
            volumeMounts: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersVolumeMountsPatch[];
            workingDir: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersPorts {
            containerPort: number;
            hostIP: string;
            hostPort: number;
            name: string;
            protocol: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersPortsPatch {
            containerPort: number;
            hostIP: string;
            hostPort: number;
            name: string;
            protocol: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersReadinessProbe {
            exec: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersReadinessProbeExec;
            failureThreshold: number;
            grpc: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersReadinessProbeGrpc;
            httpGet: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersReadinessProbeHttpGet;
            initialDelaySeconds: number;
            periodSeconds: number;
            successThreshold: number;
            tcpSocket: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersReadinessProbeTcpSocket;
            terminationGracePeriodSeconds: number;
            timeoutSeconds: number;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersReadinessProbeExec {
            command: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersReadinessProbeExecPatch {
            command: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersReadinessProbeGrpc {
            port: number;
            service: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersReadinessProbeGrpcPatch {
            port: number;
            service: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersReadinessProbeHttpGet {
            host: string;
            httpHeaders: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersReadinessProbeHttpGetHttpHeaders[];
            path: string;
            port: number | string;
            scheme: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersReadinessProbeHttpGetHttpHeaders {
            name: string;
            value: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersReadinessProbeHttpGetHttpHeadersPatch {
            name: string;
            value: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersReadinessProbeHttpGetPatch {
            host: string;
            httpHeaders: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersReadinessProbeHttpGetHttpHeadersPatch[];
            path: string;
            port: number | string;
            scheme: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersReadinessProbePatch {
            exec: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersReadinessProbeExecPatch;
            failureThreshold: number;
            grpc: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersReadinessProbeGrpcPatch;
            httpGet: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersReadinessProbeHttpGetPatch;
            initialDelaySeconds: number;
            periodSeconds: number;
            successThreshold: number;
            tcpSocket: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersReadinessProbeTcpSocketPatch;
            terminationGracePeriodSeconds: number;
            timeoutSeconds: number;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersReadinessProbeTcpSocket {
            host: string;
            port: number | string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersReadinessProbeTcpSocketPatch {
            host: string;
            port: number | string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersResizePolicy {
            resourceName: string;
            restartPolicy: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersResizePolicyPatch {
            resourceName: string;
            restartPolicy: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersResources {
            claims: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersResourcesClaims[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersResourcesClaims {
            name: string;
            request: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersResourcesClaimsPatch {
            name: string;
            request: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersResourcesPatch {
            claims: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersResourcesClaimsPatch[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersSecurityContext {
            allowPrivilegeEscalation: boolean;
            appArmorProfile: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersSecurityContextAppArmorProfile;
            capabilities: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersSecurityContextCapabilities;
            privileged: boolean;
            procMount: string;
            readOnlyRootFilesystem: boolean;
            runAsGroup: number;
            runAsNonRoot: boolean;
            runAsUser: number;
            seLinuxOptions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersSecurityContextSeLinuxOptions;
            seccompProfile: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersSecurityContextSeccompProfile;
            windowsOptions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersSecurityContextWindowsOptions;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersSecurityContextAppArmorProfile {
            localhostProfile: string;
            type: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersSecurityContextAppArmorProfilePatch {
            localhostProfile: string;
            type: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersSecurityContextCapabilities {
            add: string[];
            drop: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersSecurityContextCapabilitiesPatch {
            add: string[];
            drop: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersSecurityContextPatch {
            allowPrivilegeEscalation: boolean;
            appArmorProfile: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersSecurityContextAppArmorProfilePatch;
            capabilities: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersSecurityContextCapabilitiesPatch;
            privileged: boolean;
            procMount: string;
            readOnlyRootFilesystem: boolean;
            runAsGroup: number;
            runAsNonRoot: boolean;
            runAsUser: number;
            seLinuxOptions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersSecurityContextSeLinuxOptionsPatch;
            seccompProfile: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersSecurityContextSeccompProfilePatch;
            windowsOptions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersSecurityContextWindowsOptionsPatch;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersSecurityContextSeLinuxOptions {
            level: string;
            role: string;
            type: string;
            user: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersSecurityContextSeLinuxOptionsPatch {
            level: string;
            role: string;
            type: string;
            user: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersSecurityContextSeccompProfile {
            localhostProfile: string;
            type: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersSecurityContextSeccompProfilePatch {
            localhostProfile: string;
            type: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersSecurityContextWindowsOptions {
            gmsaCredentialSpec: string;
            gmsaCredentialSpecName: string;
            hostProcess: boolean;
            runAsUserName: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersSecurityContextWindowsOptionsPatch {
            gmsaCredentialSpec: string;
            gmsaCredentialSpecName: string;
            hostProcess: boolean;
            runAsUserName: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersStartupProbe {
            exec: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersStartupProbeExec;
            failureThreshold: number;
            grpc: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersStartupProbeGrpc;
            httpGet: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersStartupProbeHttpGet;
            initialDelaySeconds: number;
            periodSeconds: number;
            successThreshold: number;
            tcpSocket: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersStartupProbeTcpSocket;
            terminationGracePeriodSeconds: number;
            timeoutSeconds: number;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersStartupProbeExec {
            command: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersStartupProbeExecPatch {
            command: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersStartupProbeGrpc {
            port: number;
            service: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersStartupProbeGrpcPatch {
            port: number;
            service: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersStartupProbeHttpGet {
            host: string;
            httpHeaders: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersStartupProbeHttpGetHttpHeaders[];
            path: string;
            port: number | string;
            scheme: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersStartupProbeHttpGetHttpHeaders {
            name: string;
            value: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersStartupProbeHttpGetHttpHeadersPatch {
            name: string;
            value: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersStartupProbeHttpGetPatch {
            host: string;
            httpHeaders: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersStartupProbeHttpGetHttpHeadersPatch[];
            path: string;
            port: number | string;
            scheme: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersStartupProbePatch {
            exec: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersStartupProbeExecPatch;
            failureThreshold: number;
            grpc: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersStartupProbeGrpcPatch;
            httpGet: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersStartupProbeHttpGetPatch;
            initialDelaySeconds: number;
            periodSeconds: number;
            successThreshold: number;
            tcpSocket: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersStartupProbeTcpSocketPatch;
            terminationGracePeriodSeconds: number;
            timeoutSeconds: number;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersStartupProbeTcpSocket {
            host: string;
            port: number | string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersStartupProbeTcpSocketPatch {
            host: string;
            port: number | string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersVolumeDevices {
            devicePath: string;
            name: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersVolumeDevicesPatch {
            devicePath: string;
            name: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersVolumeMounts {
            mountPath: string;
            mountPropagation: string;
            name: string;
            readOnly: boolean;
            recursiveReadOnly: string;
            subPath: string;
            subPathExpr: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersVolumeMountsPatch {
            mountPath: string;
            mountPropagation: string;
            name: string;
            readOnly: boolean;
            recursiveReadOnly: string;
            subPath: string;
            subPathExpr: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecHostAliases {
            hostnames: string[];
            ip: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecHostAliasesPatch {
            hostnames: string[];
            ip: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecImagePullSecrets {
            name: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecImagePullSecretsPatch {
            name: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainers {
            args: string[];
            command: string[];
            env: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnv[];
            envFrom: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvFrom[];
            image: string;
            imagePullPolicy: string;
            lifecycle: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecycle;
            livenessProbe: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLivenessProbe;
            name: string;
            ports: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersPorts[];
            readinessProbe: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersReadinessProbe;
            resizePolicy: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersResizePolicy[];
            resources: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersResources;
            restartPolicy: string;
            securityContext: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersSecurityContext;
            startupProbe: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersStartupProbe;
            stdin: boolean;
            stdinOnce: boolean;
            terminationMessagePath: string;
            terminationMessagePolicy: string;
            tty: boolean;
            volumeDevices: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersVolumeDevices[];
            volumeMounts: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersVolumeMounts[];
            workingDir: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnv {
            name: string;
            value: string;
            valueFrom: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvValueFrom;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvFrom {
            configMapRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvFromConfigMapRef;
            prefix: string;
            secretRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvFromSecretRef;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvFromConfigMapRef {
            name: string;
            optional: boolean;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvFromConfigMapRefPatch {
            name: string;
            optional: boolean;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvFromPatch {
            configMapRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvFromConfigMapRefPatch;
            prefix: string;
            secretRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvFromSecretRefPatch;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvFromSecretRef {
            name: string;
            optional: boolean;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvFromSecretRefPatch {
            name: string;
            optional: boolean;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvPatch {
            name: string;
            value: string;
            valueFrom: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvValueFromPatch;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvValueFrom {
            configMapKeyRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvValueFromConfigMapKeyRef;
            fieldRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvValueFromFieldRef;
            resourceFieldRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvValueFromResourceFieldRef;
            secretKeyRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvValueFromSecretKeyRef;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvValueFromConfigMapKeyRef {
            key: string;
            name: string;
            optional: boolean;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvValueFromConfigMapKeyRefPatch {
            key: string;
            name: string;
            optional: boolean;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvValueFromFieldRef {
            apiVersion: string;
            fieldPath: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvValueFromFieldRefPatch {
            apiVersion: string;
            fieldPath: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvValueFromPatch {
            configMapKeyRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvValueFromConfigMapKeyRefPatch;
            fieldRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvValueFromFieldRefPatch;
            resourceFieldRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvValueFromResourceFieldRefPatch;
            secretKeyRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvValueFromSecretKeyRefPatch;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvValueFromResourceFieldRef {
            containerName: string;
            divisor: number | string;
            resource: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvValueFromResourceFieldRefPatch {
            containerName: string;
            divisor: number | string;
            resource: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvValueFromSecretKeyRef {
            key: string;
            name: string;
            optional: boolean;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvValueFromSecretKeyRefPatch {
            key: string;
            name: string;
            optional: boolean;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecycle {
            postStart: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePostStart;
            preStop: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePreStop;
            stopSignal: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePatch {
            postStart: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePostStartPatch;
            preStop: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePreStopPatch;
            stopSignal: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePostStart {
            exec: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePostStartExec;
            httpGet: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePostStartHttpGet;
            sleep: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePostStartSleep;
            tcpSocket: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePostStartTcpSocket;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePostStartExec {
            command: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePostStartExecPatch {
            command: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePostStartHttpGet {
            host: string;
            httpHeaders: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePostStartHttpGetHttpHeaders[];
            path: string;
            port: number | string;
            scheme: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePostStartHttpGetHttpHeaders {
            name: string;
            value: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePostStartHttpGetHttpHeadersPatch {
            name: string;
            value: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePostStartHttpGetPatch {
            host: string;
            httpHeaders: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePostStartHttpGetHttpHeadersPatch[];
            path: string;
            port: number | string;
            scheme: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePostStartPatch {
            exec: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePostStartExecPatch;
            httpGet: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePostStartHttpGetPatch;
            sleep: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePostStartSleepPatch;
            tcpSocket: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePostStartTcpSocketPatch;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePostStartSleep {
            seconds: number;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePostStartSleepPatch {
            seconds: number;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePostStartTcpSocket {
            host: string;
            port: number | string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePostStartTcpSocketPatch {
            host: string;
            port: number | string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePreStop {
            exec: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePreStopExec;
            httpGet: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePreStopHttpGet;
            sleep: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePreStopSleep;
            tcpSocket: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePreStopTcpSocket;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePreStopExec {
            command: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePreStopExecPatch {
            command: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePreStopHttpGet {
            host: string;
            httpHeaders: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePreStopHttpGetHttpHeaders[];
            path: string;
            port: number | string;
            scheme: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePreStopHttpGetHttpHeaders {
            name: string;
            value: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePreStopHttpGetHttpHeadersPatch {
            name: string;
            value: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePreStopHttpGetPatch {
            host: string;
            httpHeaders: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePreStopHttpGetHttpHeadersPatch[];
            path: string;
            port: number | string;
            scheme: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePreStopPatch {
            exec: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePreStopExecPatch;
            httpGet: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePreStopHttpGetPatch;
            sleep: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePreStopSleepPatch;
            tcpSocket: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePreStopTcpSocketPatch;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePreStopSleep {
            seconds: number;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePreStopSleepPatch {
            seconds: number;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePreStopTcpSocket {
            host: string;
            port: number | string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePreStopTcpSocketPatch {
            host: string;
            port: number | string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLivenessProbe {
            exec: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLivenessProbeExec;
            failureThreshold: number;
            grpc: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLivenessProbeGrpc;
            httpGet: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLivenessProbeHttpGet;
            initialDelaySeconds: number;
            periodSeconds: number;
            successThreshold: number;
            tcpSocket: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLivenessProbeTcpSocket;
            terminationGracePeriodSeconds: number;
            timeoutSeconds: number;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLivenessProbeExec {
            command: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLivenessProbeExecPatch {
            command: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLivenessProbeGrpc {
            port: number;
            service: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLivenessProbeGrpcPatch {
            port: number;
            service: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLivenessProbeHttpGet {
            host: string;
            httpHeaders: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLivenessProbeHttpGetHttpHeaders[];
            path: string;
            port: number | string;
            scheme: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLivenessProbeHttpGetHttpHeaders {
            name: string;
            value: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLivenessProbeHttpGetHttpHeadersPatch {
            name: string;
            value: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLivenessProbeHttpGetPatch {
            host: string;
            httpHeaders: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLivenessProbeHttpGetHttpHeadersPatch[];
            path: string;
            port: number | string;
            scheme: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLivenessProbePatch {
            exec: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLivenessProbeExecPatch;
            failureThreshold: number;
            grpc: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLivenessProbeGrpcPatch;
            httpGet: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLivenessProbeHttpGetPatch;
            initialDelaySeconds: number;
            periodSeconds: number;
            successThreshold: number;
            tcpSocket: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLivenessProbeTcpSocketPatch;
            terminationGracePeriodSeconds: number;
            timeoutSeconds: number;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLivenessProbeTcpSocket {
            host: string;
            port: number | string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLivenessProbeTcpSocketPatch {
            host: string;
            port: number | string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersPatch {
            args: string[];
            command: string[];
            env: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvPatch[];
            envFrom: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersEnvFromPatch[];
            image: string;
            imagePullPolicy: string;
            lifecycle: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLifecyclePatch;
            livenessProbe: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersLivenessProbePatch;
            name: string;
            ports: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersPortsPatch[];
            readinessProbe: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersReadinessProbePatch;
            resizePolicy: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersResizePolicyPatch[];
            resources: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersResourcesPatch;
            restartPolicy: string;
            securityContext: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersSecurityContextPatch;
            startupProbe: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersStartupProbePatch;
            stdin: boolean;
            stdinOnce: boolean;
            terminationMessagePath: string;
            terminationMessagePolicy: string;
            tty: boolean;
            volumeDevices: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersVolumeDevicesPatch[];
            volumeMounts: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersVolumeMountsPatch[];
            workingDir: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersPorts {
            containerPort: number;
            hostIP: string;
            hostPort: number;
            name: string;
            protocol: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersPortsPatch {
            containerPort: number;
            hostIP: string;
            hostPort: number;
            name: string;
            protocol: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersReadinessProbe {
            exec: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersReadinessProbeExec;
            failureThreshold: number;
            grpc: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersReadinessProbeGrpc;
            httpGet: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersReadinessProbeHttpGet;
            initialDelaySeconds: number;
            periodSeconds: number;
            successThreshold: number;
            tcpSocket: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersReadinessProbeTcpSocket;
            terminationGracePeriodSeconds: number;
            timeoutSeconds: number;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersReadinessProbeExec {
            command: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersReadinessProbeExecPatch {
            command: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersReadinessProbeGrpc {
            port: number;
            service: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersReadinessProbeGrpcPatch {
            port: number;
            service: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersReadinessProbeHttpGet {
            host: string;
            httpHeaders: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersReadinessProbeHttpGetHttpHeaders[];
            path: string;
            port: number | string;
            scheme: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersReadinessProbeHttpGetHttpHeaders {
            name: string;
            value: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersReadinessProbeHttpGetHttpHeadersPatch {
            name: string;
            value: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersReadinessProbeHttpGetPatch {
            host: string;
            httpHeaders: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersReadinessProbeHttpGetHttpHeadersPatch[];
            path: string;
            port: number | string;
            scheme: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersReadinessProbePatch {
            exec: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersReadinessProbeExecPatch;
            failureThreshold: number;
            grpc: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersReadinessProbeGrpcPatch;
            httpGet: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersReadinessProbeHttpGetPatch;
            initialDelaySeconds: number;
            periodSeconds: number;
            successThreshold: number;
            tcpSocket: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersReadinessProbeTcpSocketPatch;
            terminationGracePeriodSeconds: number;
            timeoutSeconds: number;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersReadinessProbeTcpSocket {
            host: string;
            port: number | string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersReadinessProbeTcpSocketPatch {
            host: string;
            port: number | string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersResizePolicy {
            resourceName: string;
            restartPolicy: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersResizePolicyPatch {
            resourceName: string;
            restartPolicy: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersResources {
            claims: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersResourcesClaims[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersResourcesClaims {
            name: string;
            request: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersResourcesClaimsPatch {
            name: string;
            request: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersResourcesPatch {
            claims: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersResourcesClaimsPatch[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersSecurityContext {
            allowPrivilegeEscalation: boolean;
            appArmorProfile: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersSecurityContextAppArmorProfile;
            capabilities: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersSecurityContextCapabilities;
            privileged: boolean;
            procMount: string;
            readOnlyRootFilesystem: boolean;
            runAsGroup: number;
            runAsNonRoot: boolean;
            runAsUser: number;
            seLinuxOptions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersSecurityContextSeLinuxOptions;
            seccompProfile: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersSecurityContextSeccompProfile;
            windowsOptions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersSecurityContextWindowsOptions;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersSecurityContextAppArmorProfile {
            localhostProfile: string;
            type: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersSecurityContextAppArmorProfilePatch {
            localhostProfile: string;
            type: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersSecurityContextCapabilities {
            add: string[];
            drop: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersSecurityContextCapabilitiesPatch {
            add: string[];
            drop: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersSecurityContextPatch {
            allowPrivilegeEscalation: boolean;
            appArmorProfile: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersSecurityContextAppArmorProfilePatch;
            capabilities: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersSecurityContextCapabilitiesPatch;
            privileged: boolean;
            procMount: string;
            readOnlyRootFilesystem: boolean;
            runAsGroup: number;
            runAsNonRoot: boolean;
            runAsUser: number;
            seLinuxOptions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersSecurityContextSeLinuxOptionsPatch;
            seccompProfile: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersSecurityContextSeccompProfilePatch;
            windowsOptions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersSecurityContextWindowsOptionsPatch;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersSecurityContextSeLinuxOptions {
            level: string;
            role: string;
            type: string;
            user: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersSecurityContextSeLinuxOptionsPatch {
            level: string;
            role: string;
            type: string;
            user: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersSecurityContextSeccompProfile {
            localhostProfile: string;
            type: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersSecurityContextSeccompProfilePatch {
            localhostProfile: string;
            type: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersSecurityContextWindowsOptions {
            gmsaCredentialSpec: string;
            gmsaCredentialSpecName: string;
            hostProcess: boolean;
            runAsUserName: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersSecurityContextWindowsOptionsPatch {
            gmsaCredentialSpec: string;
            gmsaCredentialSpecName: string;
            hostProcess: boolean;
            runAsUserName: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersStartupProbe {
            exec: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersStartupProbeExec;
            failureThreshold: number;
            grpc: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersStartupProbeGrpc;
            httpGet: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersStartupProbeHttpGet;
            initialDelaySeconds: number;
            periodSeconds: number;
            successThreshold: number;
            tcpSocket: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersStartupProbeTcpSocket;
            terminationGracePeriodSeconds: number;
            timeoutSeconds: number;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersStartupProbeExec {
            command: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersStartupProbeExecPatch {
            command: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersStartupProbeGrpc {
            port: number;
            service: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersStartupProbeGrpcPatch {
            port: number;
            service: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersStartupProbeHttpGet {
            host: string;
            httpHeaders: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersStartupProbeHttpGetHttpHeaders[];
            path: string;
            port: number | string;
            scheme: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersStartupProbeHttpGetHttpHeaders {
            name: string;
            value: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersStartupProbeHttpGetHttpHeadersPatch {
            name: string;
            value: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersStartupProbeHttpGetPatch {
            host: string;
            httpHeaders: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersStartupProbeHttpGetHttpHeadersPatch[];
            path: string;
            port: number | string;
            scheme: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersStartupProbePatch {
            exec: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersStartupProbeExecPatch;
            failureThreshold: number;
            grpc: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersStartupProbeGrpcPatch;
            httpGet: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersStartupProbeHttpGetPatch;
            initialDelaySeconds: number;
            periodSeconds: number;
            successThreshold: number;
            tcpSocket: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersStartupProbeTcpSocketPatch;
            terminationGracePeriodSeconds: number;
            timeoutSeconds: number;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersStartupProbeTcpSocket {
            host: string;
            port: number | string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersStartupProbeTcpSocketPatch {
            host: string;
            port: number | string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersVolumeDevices {
            devicePath: string;
            name: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersVolumeDevicesPatch {
            devicePath: string;
            name: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersVolumeMounts {
            mountPath: string;
            mountPropagation: string;
            name: string;
            readOnly: boolean;
            recursiveReadOnly: string;
            subPath: string;
            subPathExpr: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersVolumeMountsPatch {
            mountPath: string;
            mountPropagation: string;
            name: string;
            readOnly: boolean;
            recursiveReadOnly: string;
            subPath: string;
            subPathExpr: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecOs {
            name: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecOsPatch {
            name: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecPatch {
            activeDeadlineSeconds: number;
            affinity: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecAffinityPatch;
            automountServiceAccountToken: boolean;
            containers: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecContainersPatch[];
            dnsConfig: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecDnsConfigPatch;
            dnsPolicy: string;
            enableServiceLinks: boolean;
            ephemeralContainers: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecEphemeralContainersPatch[];
            hostAliases: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecHostAliasesPatch[];
            hostIPC: boolean;
            hostNetwork: boolean;
            hostPID: boolean;
            hostUsers: boolean;
            hostname: string;
            imagePullSecrets: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecImagePullSecretsPatch[];
            initContainers: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecInitContainersPatch[];
            nodeName: string;
            nodeSelector: {
                [key: string]: string;
            };
            os: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecOsPatch;
            overhead: {
                [key: string]: number | string;
            };
            preemptionPolicy: string;
            priority: number;
            priorityClassName: string;
            readinessGates: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecReadinessGatesPatch[];
            resourceClaims: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecResourceClaimsPatch[];
            resources: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecResourcesPatch;
            restartPolicy: string;
            runtimeClassName: string;
            schedulerName: string;
            schedulingGates: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSchedulingGatesPatch[];
            securityContext: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSecurityContextPatch;
            serviceAccount: string;
            serviceAccountName: string;
            setHostnameAsFQDN: boolean;
            shareProcessNamespace: boolean;
            subdomain: string;
            terminationGracePeriodSeconds: number;
            tolerations: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecTolerationsPatch[];
            topologySpreadConstraints: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecTopologySpreadConstraintsPatch[];
            volumes: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesPatch[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecReadinessGates {
            conditionType: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecReadinessGatesPatch {
            conditionType: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecResourceClaims {
            name: string;
            resourceClaimName: string;
            resourceClaimTemplateName: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecResourceClaimsPatch {
            name: string;
            resourceClaimName: string;
            resourceClaimTemplateName: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecResources {
            claims: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecResourcesClaims[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecResourcesClaims {
            name: string;
            request: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecResourcesClaimsPatch {
            name: string;
            request: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecResourcesPatch {
            claims: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecResourcesClaimsPatch[];
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSchedulingGates {
            name: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSchedulingGatesPatch {
            name: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSecurityContext {
            appArmorProfile: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSecurityContextAppArmorProfile;
            fsGroup: number;
            fsGroupChangePolicy: string;
            runAsGroup: number;
            runAsNonRoot: boolean;
            runAsUser: number;
            seLinuxChangePolicy: string;
            seLinuxOptions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSecurityContextSeLinuxOptions;
            seccompProfile: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSecurityContextSeccompProfile;
            supplementalGroups: number[];
            supplementalGroupsPolicy: string;
            sysctls: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSecurityContextSysctls[];
            windowsOptions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSecurityContextWindowsOptions;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSecurityContextAppArmorProfile {
            localhostProfile: string;
            type: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSecurityContextAppArmorProfilePatch {
            localhostProfile: string;
            type: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSecurityContextPatch {
            appArmorProfile: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSecurityContextAppArmorProfilePatch;
            fsGroup: number;
            fsGroupChangePolicy: string;
            runAsGroup: number;
            runAsNonRoot: boolean;
            runAsUser: number;
            seLinuxChangePolicy: string;
            seLinuxOptions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSecurityContextSeLinuxOptionsPatch;
            seccompProfile: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSecurityContextSeccompProfilePatch;
            supplementalGroups: number[];
            supplementalGroupsPolicy: string;
            sysctls: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSecurityContextSysctlsPatch[];
            windowsOptions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSecurityContextWindowsOptionsPatch;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSecurityContextSeLinuxOptions {
            level: string;
            role: string;
            type: string;
            user: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSecurityContextSeLinuxOptionsPatch {
            level: string;
            role: string;
            type: string;
            user: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSecurityContextSeccompProfile {
            localhostProfile: string;
            type: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSecurityContextSeccompProfilePatch {
            localhostProfile: string;
            type: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSecurityContextSysctls {
            name: string;
            value: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSecurityContextSysctlsPatch {
            name: string;
            value: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSecurityContextWindowsOptions {
            gmsaCredentialSpec: string;
            gmsaCredentialSpecName: string;
            hostProcess: boolean;
            runAsUserName: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecSecurityContextWindowsOptionsPatch {
            gmsaCredentialSpec: string;
            gmsaCredentialSpecName: string;
            hostProcess: boolean;
            runAsUserName: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecTolerations {
            effect: string;
            key: string;
            operator: string;
            tolerationSeconds: number;
            value: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecTolerationsPatch {
            effect: string;
            key: string;
            operator: string;
            tolerationSeconds: number;
            value: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecTopologySpreadConstraints {
            labelSelector: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecTopologySpreadConstraintsLabelSelector;
            matchLabelKeys: string[];
            maxSkew: number;
            minDomains: number;
            nodeAffinityPolicy: string;
            nodeTaintsPolicy: string;
            topologyKey: string;
            whenUnsatisfiable: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecTopologySpreadConstraintsLabelSelector {
            matchExpressions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecTopologySpreadConstraintsLabelSelectorPatch {
            matchExpressions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecTopologySpreadConstraintsPatch {
            labelSelector: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecTopologySpreadConstraintsLabelSelectorPatch;
            matchLabelKeys: string[];
            maxSkew: number;
            minDomains: number;
            nodeAffinityPolicy: string;
            nodeTaintsPolicy: string;
            topologyKey: string;
            whenUnsatisfiable: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumes {
            awsElasticBlockStore: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesAwsElasticBlockStore;
            azureDisk: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesAzureDisk;
            azureFile: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesAzureFile;
            cephfs: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesCephfs;
            cinder: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesCinder;
            configMap: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesConfigMap;
            csi: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesCsi;
            downwardAPI: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesDownwardAPI;
            emptyDir: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEmptyDir;
            ephemeral: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeral;
            fc: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesFc;
            flexVolume: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesFlexVolume;
            flocker: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesFlocker;
            gcePersistentDisk: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesGcePersistentDisk;
            gitRepo: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesGitRepo;
            glusterfs: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesGlusterfs;
            hostPath: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesHostPath;
            image: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesImage;
            iscsi: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesIscsi;
            name: string;
            nfs: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesNfs;
            persistentVolumeClaim: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesPersistentVolumeClaim;
            photonPersistentDisk: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesPhotonPersistentDisk;
            portworxVolume: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesPortworxVolume;
            projected: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjected;
            quobyte: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesQuobyte;
            rbd: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesRbd;
            scaleIO: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesScaleIO;
            secret: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesSecret;
            storageos: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesStorageos;
            vsphereVolume: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesVsphereVolume;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesAwsElasticBlockStore {
            fsType: string;
            partition: number;
            readOnly: boolean;
            volumeID: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesAwsElasticBlockStorePatch {
            fsType: string;
            partition: number;
            readOnly: boolean;
            volumeID: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesAzureDisk {
            cachingMode: string;
            diskName: string;
            diskURI: string;
            fsType: string;
            kind: string;
            readOnly: boolean;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesAzureDiskPatch {
            cachingMode: string;
            diskName: string;
            diskURI: string;
            fsType: string;
            kind: string;
            readOnly: boolean;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesAzureFile {
            readOnly: boolean;
            secretName: string;
            shareName: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesAzureFilePatch {
            readOnly: boolean;
            secretName: string;
            shareName: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesCephfs {
            monitors: string[];
            path: string;
            readOnly: boolean;
            secretFile: string;
            secretRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesCephfsSecretRef;
            user: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesCephfsPatch {
            monitors: string[];
            path: string;
            readOnly: boolean;
            secretFile: string;
            secretRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesCephfsSecretRefPatch;
            user: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesCephfsSecretRef {
            name: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesCephfsSecretRefPatch {
            name: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesCinder {
            fsType: string;
            readOnly: boolean;
            secretRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesCinderSecretRef;
            volumeID: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesCinderPatch {
            fsType: string;
            readOnly: boolean;
            secretRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesCinderSecretRefPatch;
            volumeID: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesCinderSecretRef {
            name: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesCinderSecretRefPatch {
            name: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesConfigMap {
            defaultMode: number;
            items: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesConfigMapItems[];
            name: string;
            optional: boolean;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesConfigMapItems {
            key: string;
            mode: number;
            path: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesConfigMapItemsPatch {
            key: string;
            mode: number;
            path: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesConfigMapPatch {
            defaultMode: number;
            items: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesConfigMapItemsPatch[];
            name: string;
            optional: boolean;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesCsi {
            driver: string;
            fsType: string;
            nodePublishSecretRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesCsiNodePublishSecretRef;
            readOnly: boolean;
            volumeAttributes: {
                [key: string]: string;
            };
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesCsiNodePublishSecretRef {
            name: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesCsiNodePublishSecretRefPatch {
            name: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesCsiPatch {
            driver: string;
            fsType: string;
            nodePublishSecretRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesCsiNodePublishSecretRefPatch;
            readOnly: boolean;
            volumeAttributes: {
                [key: string]: string;
            };
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesDownwardAPI {
            defaultMode: number;
            items: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesDownwardAPIItems[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesDownwardAPIItems {
            fieldRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesDownwardAPIItemsFieldRef;
            mode: number;
            path: string;
            resourceFieldRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesDownwardAPIItemsResourceFieldRef;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesDownwardAPIItemsFieldRef {
            apiVersion: string;
            fieldPath: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesDownwardAPIItemsFieldRefPatch {
            apiVersion: string;
            fieldPath: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesDownwardAPIItemsPatch {
            fieldRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesDownwardAPIItemsFieldRefPatch;
            mode: number;
            path: string;
            resourceFieldRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesDownwardAPIItemsResourceFieldRefPatch;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesDownwardAPIItemsResourceFieldRef {
            containerName: string;
            divisor: number | string;
            resource: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesDownwardAPIItemsResourceFieldRefPatch {
            containerName: string;
            divisor: number | string;
            resource: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesDownwardAPIPatch {
            defaultMode: number;
            items: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesDownwardAPIItemsPatch[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEmptyDir {
            medium: string;
            sizeLimit: number | string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEmptyDirPatch {
            medium: string;
            sizeLimit: number | string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeral {
            volumeClaimTemplate: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplate;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralPatch {
            volumeClaimTemplate: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplatePatch;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplate {
            metadata: {
                [key: string]: string;
            };
            spec: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpec;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplatePatch {
            metadata: {
                [key: string]: string;
            };
            spec: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecPatch;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpec {
            accessModes: string[];
            dataSource: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecDataSource;
            dataSourceRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef;
            resources: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecResources;
            selector: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecSelector;
            storageClassName: string;
            volumeAttributesClassName: string;
            volumeMode: string;
            volumeName: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecDataSource {
            apiGroup: string;
            kind: string;
            name: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecDataSourcePatch {
            apiGroup: string;
            kind: string;
            name: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef {
            apiGroup: string;
            kind: string;
            name: string;
            namespace: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefPatch {
            apiGroup: string;
            kind: string;
            name: string;
            namespace: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecPatch {
            accessModes: string[];
            dataSource: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecDataSourcePatch;
            dataSourceRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefPatch;
            resources: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecResourcesPatch;
            selector: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecSelectorPatch;
            storageClassName: string;
            volumeAttributesClassName: string;
            volumeMode: string;
            volumeName: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecResources {
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecResourcesPatch {
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecSelector {
            matchExpressions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecSelectorPatch {
            matchExpressions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesFc {
            fsType: string;
            lun: number;
            readOnly: boolean;
            targetWWNs: string[];
            wwids: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesFcPatch {
            fsType: string;
            lun: number;
            readOnly: boolean;
            targetWWNs: string[];
            wwids: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesFlexVolume {
            driver: string;
            fsType: string;
            options: {
                [key: string]: string;
            };
            readOnly: boolean;
            secretRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesFlexVolumeSecretRef;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesFlexVolumePatch {
            driver: string;
            fsType: string;
            options: {
                [key: string]: string;
            };
            readOnly: boolean;
            secretRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesFlexVolumeSecretRefPatch;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesFlexVolumeSecretRef {
            name: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesFlexVolumeSecretRefPatch {
            name: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesFlocker {
            datasetName: string;
            datasetUUID: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesFlockerPatch {
            datasetName: string;
            datasetUUID: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesGcePersistentDisk {
            fsType: string;
            partition: number;
            pdName: string;
            readOnly: boolean;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesGcePersistentDiskPatch {
            fsType: string;
            partition: number;
            pdName: string;
            readOnly: boolean;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesGitRepo {
            directory: string;
            repository: string;
            revision: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesGitRepoPatch {
            directory: string;
            repository: string;
            revision: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesGlusterfs {
            endpoints: string;
            path: string;
            readOnly: boolean;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesGlusterfsPatch {
            endpoints: string;
            path: string;
            readOnly: boolean;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesHostPath {
            path: string;
            type: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesHostPathPatch {
            path: string;
            type: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesImage {
            pullPolicy: string;
            reference: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesImagePatch {
            pullPolicy: string;
            reference: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesIscsi {
            chapAuthDiscovery: boolean;
            chapAuthSession: boolean;
            fsType: string;
            initiatorName: string;
            iqn: string;
            iscsiInterface: string;
            lun: number;
            portals: string[];
            readOnly: boolean;
            secretRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesIscsiSecretRef;
            targetPortal: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesIscsiPatch {
            chapAuthDiscovery: boolean;
            chapAuthSession: boolean;
            fsType: string;
            initiatorName: string;
            iqn: string;
            iscsiInterface: string;
            lun: number;
            portals: string[];
            readOnly: boolean;
            secretRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesIscsiSecretRefPatch;
            targetPortal: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesIscsiSecretRef {
            name: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesIscsiSecretRefPatch {
            name: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesNfs {
            path: string;
            readOnly: boolean;
            server: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesNfsPatch {
            path: string;
            readOnly: boolean;
            server: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesPatch {
            awsElasticBlockStore: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesAwsElasticBlockStorePatch;
            azureDisk: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesAzureDiskPatch;
            azureFile: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesAzureFilePatch;
            cephfs: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesCephfsPatch;
            cinder: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesCinderPatch;
            configMap: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesConfigMapPatch;
            csi: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesCsiPatch;
            downwardAPI: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesDownwardAPIPatch;
            emptyDir: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEmptyDirPatch;
            ephemeral: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesEphemeralPatch;
            fc: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesFcPatch;
            flexVolume: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesFlexVolumePatch;
            flocker: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesFlockerPatch;
            gcePersistentDisk: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesGcePersistentDiskPatch;
            gitRepo: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesGitRepoPatch;
            glusterfs: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesGlusterfsPatch;
            hostPath: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesHostPathPatch;
            image: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesImagePatch;
            iscsi: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesIscsiPatch;
            name: string;
            nfs: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesNfsPatch;
            persistentVolumeClaim: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesPersistentVolumeClaimPatch;
            photonPersistentDisk: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesPhotonPersistentDiskPatch;
            portworxVolume: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesPortworxVolumePatch;
            projected: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedPatch;
            quobyte: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesQuobytePatch;
            rbd: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesRbdPatch;
            scaleIO: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesScaleIOPatch;
            secret: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesSecretPatch;
            storageos: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesStorageosPatch;
            vsphereVolume: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesVsphereVolumePatch;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesPersistentVolumeClaim {
            claimName: string;
            readOnly: boolean;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesPersistentVolumeClaimPatch {
            claimName: string;
            readOnly: boolean;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesPhotonPersistentDisk {
            fsType: string;
            pdID: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesPhotonPersistentDiskPatch {
            fsType: string;
            pdID: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesPortworxVolume {
            fsType: string;
            readOnly: boolean;
            volumeID: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesPortworxVolumePatch {
            fsType: string;
            readOnly: boolean;
            volumeID: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjected {
            defaultMode: number;
            sources: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSources[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedPatch {
            defaultMode: number;
            sources: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesPatch[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSources {
            clusterTrustBundle: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesClusterTrustBundle;
            configMap: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesConfigMap;
            downwardAPI: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesDownwardAPI;
            secret: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesSecret;
            serviceAccountToken: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesServiceAccountToken;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesClusterTrustBundle {
            labelSelector: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesClusterTrustBundleLabelSelector;
            name: string;
            optional: boolean;
            path: string;
            signerName: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesClusterTrustBundleLabelSelector {
            matchExpressions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorPatch {
            matchExpressions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesClusterTrustBundlePatch {
            labelSelector: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesClusterTrustBundleLabelSelectorPatch;
            name: string;
            optional: boolean;
            path: string;
            signerName: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesConfigMap {
            items: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesConfigMapItems[];
            name: string;
            optional: boolean;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesConfigMapItems {
            key: string;
            mode: number;
            path: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesConfigMapItemsPatch {
            key: string;
            mode: number;
            path: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesConfigMapPatch {
            items: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesConfigMapItemsPatch[];
            name: string;
            optional: boolean;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesDownwardAPI {
            items: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesDownwardAPIItems[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesDownwardAPIItems {
            fieldRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesDownwardAPIItemsFieldRef;
            mode: number;
            path: string;
            resourceFieldRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesDownwardAPIItemsResourceFieldRef;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesDownwardAPIItemsFieldRef {
            apiVersion: string;
            fieldPath: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesDownwardAPIItemsFieldRefPatch {
            apiVersion: string;
            fieldPath: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesDownwardAPIItemsPatch {
            fieldRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesDownwardAPIItemsFieldRefPatch;
            mode: number;
            path: string;
            resourceFieldRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesDownwardAPIItemsResourceFieldRefPatch;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesDownwardAPIItemsResourceFieldRef {
            containerName: string;
            divisor: number | string;
            resource: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesDownwardAPIItemsResourceFieldRefPatch {
            containerName: string;
            divisor: number | string;
            resource: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesDownwardAPIPatch {
            items: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesDownwardAPIItemsPatch[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesPatch {
            clusterTrustBundle: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesClusterTrustBundlePatch;
            configMap: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesConfigMapPatch;
            downwardAPI: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesDownwardAPIPatch;
            secret: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesSecretPatch;
            serviceAccountToken: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesServiceAccountTokenPatch;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesSecret {
            items: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesSecretItems[];
            name: string;
            optional: boolean;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesSecretItems {
            key: string;
            mode: number;
            path: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesSecretItemsPatch {
            key: string;
            mode: number;
            path: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesSecretPatch {
            items: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesSecretItemsPatch[];
            name: string;
            optional: boolean;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesServiceAccountToken {
            audience: string;
            expirationSeconds: number;
            path: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesProjectedSourcesServiceAccountTokenPatch {
            audience: string;
            expirationSeconds: number;
            path: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesQuobyte {
            group: string;
            readOnly: boolean;
            registry: string;
            tenant: string;
            user: string;
            volume: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesQuobytePatch {
            group: string;
            readOnly: boolean;
            registry: string;
            tenant: string;
            user: string;
            volume: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesRbd {
            fsType: string;
            image: string;
            keyring: string;
            monitors: string[];
            pool: string;
            readOnly: boolean;
            secretRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesRbdSecretRef;
            user: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesRbdPatch {
            fsType: string;
            image: string;
            keyring: string;
            monitors: string[];
            pool: string;
            readOnly: boolean;
            secretRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesRbdSecretRefPatch;
            user: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesRbdSecretRef {
            name: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesRbdSecretRefPatch {
            name: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesScaleIO {
            fsType: string;
            gateway: string;
            protectionDomain: string;
            readOnly: boolean;
            secretRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesScaleIOSecretRef;
            sslEnabled: boolean;
            storageMode: string;
            storagePool: string;
            system: string;
            volumeName: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesScaleIOPatch {
            fsType: string;
            gateway: string;
            protectionDomain: string;
            readOnly: boolean;
            secretRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesScaleIOSecretRefPatch;
            sslEnabled: boolean;
            storageMode: string;
            storagePool: string;
            system: string;
            volumeName: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesScaleIOSecretRef {
            name: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesScaleIOSecretRefPatch {
            name: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesSecret {
            defaultMode: number;
            items: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesSecretItems[];
            optional: boolean;
            secretName: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesSecretItems {
            key: string;
            mode: number;
            path: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesSecretItemsPatch {
            key: string;
            mode: number;
            path: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesSecretPatch {
            defaultMode: number;
            items: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesSecretItemsPatch[];
            optional: boolean;
            secretName: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesStorageos {
            fsType: string;
            readOnly: boolean;
            secretRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesStorageosSecretRef;
            volumeName: string;
            volumeNamespace: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesStorageosPatch {
            fsType: string;
            readOnly: boolean;
            secretRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesStorageosSecretRefPatch;
            volumeName: string;
            volumeNamespace: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesStorageosSecretRef {
            name: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesStorageosSecretRefPatch {
            name: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesVsphereVolume {
            fsType: string;
            storagePolicyID: string;
            storagePolicyName: string;
            volumePath: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecTemplateSpecVolumesVsphereVolumePatch {
            fsType: string;
            storagePolicyID: string;
            storagePolicyName: string;
            volumePath: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecUpdateStrategy {
            rollingUpdate: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecUpdateStrategyRollingUpdate;
            type: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecUpdateStrategyPatch {
            rollingUpdate: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecUpdateStrategyRollingUpdatePatch;
            type: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecUpdateStrategyRollingUpdate {
            maxUnavailable: number | string;
            partition: number;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecUpdateStrategyRollingUpdatePatch {
            maxUnavailable: number | string;
            partition: number;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplates {
            apiVersion: string;
            kind: string;
            metadata: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesMetadata;
            spec: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesSpec;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesMetadata {
            annotations: {
                [key: string]: string;
            };
            labels: {
                [key: string]: string;
            };
            name: string;
            namespace: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesMetadataPatch {
            annotations: {
                [key: string]: string;
            };
            labels: {
                [key: string]: string;
            };
            name: string;
            namespace: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesPatch {
            apiVersion: string;
            kind: string;
            metadata: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesMetadataPatch;
            spec: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesSpecPatch;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesSpec {
            accessModes: string[];
            dataSource: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesSpecDataSource;
            dataSourceRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesSpecDataSourceRef;
            resources: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesSpecResources;
            selector: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesSpecSelector;
            storageClassName: string;
            volumeAttributesClassName: string;
            volumeMode: string;
            volumeName: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesSpecDataSource {
            apiGroup: string;
            kind: string;
            name: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesSpecDataSourcePatch {
            apiGroup: string;
            kind: string;
            name: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesSpecDataSourceRef {
            apiGroup: string;
            kind: string;
            name: string;
            namespace: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesSpecDataSourceRefPatch {
            apiGroup: string;
            kind: string;
            name: string;
            namespace: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesSpecPatch {
            accessModes: string[];
            dataSource: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesSpecDataSourcePatch;
            dataSourceRef: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesSpecDataSourceRefPatch;
            resources: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesSpecResourcesPatch;
            selector: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesSpecSelectorPatch;
            storageClassName: string;
            volumeAttributesClassName: string;
            volumeMode: string;
            volumeName: string;
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesSpecResources {
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesSpecResourcesPatch {
            limits: {
                [key: string]: number | string;
            };
            requests: {
                [key: string]: number | string;
            };
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesSpecSelector {
            matchExpressions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesSpecSelectorMatchExpressions[];
            matchLabels: {
                [key: string]: string;
            };
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesSpecSelectorMatchExpressions {
            key: string;
            operator: string;
            values: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesSpecSelectorMatchExpressionsPatch {
            key: string;
            operator: string;
            values: string[];
        }
        interface RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesSpecSelectorPatch {
            matchExpressions: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverrideStatefulSetSpecVolumeClaimTemplatesSpecSelectorMatchExpressionsPatch[];
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * Spec is the desired state of the RabbitmqCluster Custom Resource.
         */
        interface RabbitmqClusterSpecPatch {
            affinity: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecAffinityPatch;
            /**
             * Set to true to automatically enable all feature flags after each upgrade
             * For more information, see https://www.rabbitmq.com/docs/feature-flags
             */
            autoEnableAllFeatureFlags: boolean;
            /**
             * DelayStartSeconds is the time the init container (`setup-container`) will sleep before terminating.
             * This effectively delays the time between starting the Pod and starting the `rabbitmq` container.
             * RabbitMQ relies on up-to-date DNS entries early during peer discovery.
             * The purpose of this artificial delay is to ensure that DNS entries are up-to-date when booting RabbitMQ.
             * For more information, see https://github.com/kubernetes/kubernetes/issues/92559
             * If your Kubernetes DNS backend is configured with a low DNS cache value or publishes not ready addresses
             * promptly, you can decrase this value or set it to 0.
             */
            delayStartSeconds: number;
            /**
             * Image is the name of the RabbitMQ docker image to use for RabbitMQ nodes in the RabbitmqCluster.
             * Must be provided together with ImagePullSecrets in order to use an image in a private registry.
             */
            image: string;
            /**
             * List of Secret resource containing access credentials to the registry for the RabbitMQ image. Required if the docker registry is private.
             */
            imagePullSecrets: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecImagePullSecretsPatch[];
            override: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecOverridePatch;
            persistence: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecPersistencePatch;
            rabbitmq: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecRabbitmqPatch;
            /**
             * Replicas is the number of nodes in the RabbitMQ cluster. Each node is deployed as a Replica in a StatefulSet. Only 1, 3, 5 replicas clusters are tested.
             * This value should be an odd number to ensure the resultant cluster can establish exactly one quorum of nodes
             * in the event of a fragmenting network partition.
             */
            replicas: number;
            resources: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecResourcesPatch;
            secretBackend: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecSecretBackendPatch;
            service: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecServicePatch;
            /**
             * If unset, or set to false, the cluster will run `rabbitmq-queues rebalance all` whenever the cluster is updated.
             * Set to true to prevent the operator rebalancing queue leaders after a cluster update.
             * Has no effect if the cluster only consists of one node.
             * For more information, see https://www.rabbitmq.com/rabbitmq-queues.8.html#rebalance
             */
            skipPostDeploySteps: boolean;
            /**
             * TerminationGracePeriodSeconds is the timeout that each rabbitmqcluster pod will have to terminate gracefully.
             * It defaults to 604800 seconds ( a week long) to ensure that the container preStop lifecycle hook can finish running.
             * For more information, see: https://github.com/rabbitmq/cluster-operator/blob/main/docs/design/20200520-graceful-pod-termination.md
             */
            terminationGracePeriodSeconds: number;
            tls: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecTlsPatch;
            /**
             * Tolerations is the list of Toleration resources attached to each Pod in the RabbitmqCluster.
             */
            tolerations: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecTolerationsPatch[];
        }
        /**
         * The desired persistent storage configuration for each Pod in the cluster.
         */
        interface RabbitmqClusterSpecPersistence {
            /**
             * The requested size of the persistent volume attached to each Pod in the RabbitmqCluster.
             * The format of this field matches that defined by kubernetes/apimachinery.
             * See https://pkg.go.dev/k8s.io/apimachinery/pkg/api/resource#Quantity for more info on the format of this field.
             */
            storage: number | string;
            /**
             * The name of the StorageClass to claim a PersistentVolume from.
             */
            storageClassName: string;
        }
        /**
         * The desired persistent storage configuration for each Pod in the cluster.
         */
        interface RabbitmqClusterSpecPersistencePatch {
            /**
             * The requested size of the persistent volume attached to each Pod in the RabbitmqCluster.
             * The format of this field matches that defined by kubernetes/apimachinery.
             * See https://pkg.go.dev/k8s.io/apimachinery/pkg/api/resource#Quantity for more info on the format of this field.
             */
            storage: number | string;
            /**
             * The name of the StorageClass to claim a PersistentVolume from.
             */
            storageClassName: string;
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
            additionalConfig: string;
            /**
             * List of plugins to enable in addition to essential plugins: rabbitmq_management, rabbitmq_prometheus, and rabbitmq_peer_discovery_k8s.
             */
            additionalPlugins: string[];
            /**
             * Specify any rabbitmq advanced.config configurations to apply to the cluster.
             * For more information on advanced config, see https://www.rabbitmq.com/configure.html#advanced-config-file
             */
            advancedConfig: string;
            /**
             * Modify to add to the rabbitmq-env.conf file. Modifying this property on an existing RabbitmqCluster will trigger a StatefulSet rolling restart and will cause rabbitmq downtime.
             * For more information on env config, see https://www.rabbitmq.com/man/rabbitmq-env.conf.5.html
             */
            envConfig: string;
            /**
             * Erlang Inet configuration to apply to the Erlang VM running rabbit.
             * See also: https://www.erlang.org/doc/apps/erts/inet_cfg.html
             */
            erlangInetConfig: string;
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
            additionalConfig: string;
            /**
             * List of plugins to enable in addition to essential plugins: rabbitmq_management, rabbitmq_prometheus, and rabbitmq_peer_discovery_k8s.
             */
            additionalPlugins: string[];
            /**
             * Specify any rabbitmq advanced.config configurations to apply to the cluster.
             * For more information on advanced config, see https://www.rabbitmq.com/configure.html#advanced-config-file
             */
            advancedConfig: string;
            /**
             * Modify to add to the rabbitmq-env.conf file. Modifying this property on an existing RabbitmqCluster will trigger a StatefulSet rolling restart and will cause rabbitmq downtime.
             * For more information on env config, see https://www.rabbitmq.com/man/rabbitmq-env.conf.5.html
             */
            envConfig: string;
            /**
             * Erlang Inet configuration to apply to the Erlang VM running rabbit.
             * See also: https://www.erlang.org/doc/apps/erts/inet_cfg.html
             */
            erlangInetConfig: string;
        }
        /**
         * The desired compute resource requirements of Pods in the cluster.
         */
        interface RabbitmqClusterSpecResources {
            /**
             * Claims lists the names of resources, defined in spec.resourceClaims,
             * that are used by this container.
             *
             * This is an alpha field and requires enabling the
             * DynamicResourceAllocation feature gate.
             *
             * This field is immutable. It can only be set for containers.
             */
            claims: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecResourcesClaims[];
            /**
             * Limits describes the maximum amount of compute resources allowed.
             * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            limits: {
                [key: string]: number | string;
            };
            /**
             * Requests describes the minimum amount of compute resources required.
             * If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
             * otherwise to an implementation-defined value. Requests cannot exceed Limits.
             * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            requests: {
                [key: string]: number | string;
            };
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
            name: string;
            /**
             * Request is the name chosen for a request in the referenced claim.
             * If empty, everything from the claim is made available, otherwise
             * only the result of this request.
             */
            request: string;
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
            name: string;
            /**
             * Request is the name chosen for a request in the referenced claim.
             * If empty, everything from the claim is made available, otherwise
             * only the result of this request.
             */
            request: string;
        }
        /**
         * The desired compute resource requirements of Pods in the cluster.
         */
        interface RabbitmqClusterSpecResourcesPatch {
            /**
             * Claims lists the names of resources, defined in spec.resourceClaims,
             * that are used by this container.
             *
             * This is an alpha field and requires enabling the
             * DynamicResourceAllocation feature gate.
             *
             * This field is immutable. It can only be set for containers.
             */
            claims: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecResourcesClaimsPatch[];
            /**
             * Limits describes the maximum amount of compute resources allowed.
             * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            limits: {
                [key: string]: number | string;
            };
            /**
             * Requests describes the minimum amount of compute resources required.
             * If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
             * otherwise to an implementation-defined value. Requests cannot exceed Limits.
             * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            requests: {
                [key: string]: number | string;
            };
        }
        /**
         * Secret backend configuration for the RabbitmqCluster.
         * Enables to fetch default user credentials and certificates from K8s external secret stores.
         */
        interface RabbitmqClusterSpecSecretBackend {
            externalSecret: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecSecretBackendExternalSecret;
            vault: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecSecretBackendVault;
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
            name: string;
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
            name: string;
        }
        /**
         * Secret backend configuration for the RabbitmqCluster.
         * Enables to fetch default user credentials and certificates from K8s external secret stores.
         */
        interface RabbitmqClusterSpecSecretBackendPatch {
            externalSecret: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecSecretBackendExternalSecretPatch;
            vault: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecSecretBackendVaultPatch;
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
            annotations: {
                [key: string]: string;
            };
            /**
             * Path in Vault to access a KV (Key-Value) secret with the fields username and password for the default user.
             * For example "secret/data/rabbitmq/config".
             */
            defaultUserPath: string;
            /**
             * Sidecar container that updates the default user's password in RabbitMQ when it changes in Vault.
             * Additionally, it updates /var/lib/rabbitmq/.rabbitmqadmin.conf (used by rabbitmqadmin CLI).
             * Set to empty string to disable the sidecar container.
             */
            defaultUserUpdaterImage: string;
            /**
             * Role in Vault.
             * If vault.defaultUserPath is set, this role must have capability to read the pre-created default user credential in Vault.
             * If vault.tls is set, this role must have capability to create and update certificates in the Vault PKI engine for the domains
             * "<namespace>" and "<namespace>.svc".
             */
            role: string;
            tls: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecSecretBackendVaultTls;
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
            annotations: {
                [key: string]: string;
            };
            /**
             * Path in Vault to access a KV (Key-Value) secret with the fields username and password for the default user.
             * For example "secret/data/rabbitmq/config".
             */
            defaultUserPath: string;
            /**
             * Sidecar container that updates the default user's password in RabbitMQ when it changes in Vault.
             * Additionally, it updates /var/lib/rabbitmq/.rabbitmqadmin.conf (used by rabbitmqadmin CLI).
             * Set to empty string to disable the sidecar container.
             */
            defaultUserUpdaterImage: string;
            /**
             * Role in Vault.
             * If vault.defaultUserPath is set, this role must have capability to read the pre-created default user credential in Vault.
             * If vault.tls is set, this role must have capability to create and update certificates in the Vault PKI engine for the domains
             * "<namespace>" and "<namespace>.svc".
             */
            role: string;
            tls: outputs.rabbitmq.v1beta1.RabbitmqClusterSpecSecretBackendVaultTlsPatch;
        }
        interface RabbitmqClusterSpecSecretBackendVaultTls {
            /**
             * Specifies the requested Subject Alternative Names (SANs), in a comma-delimited list.
             * These will be appended to the SANs added by the cluster-operator.
             * The cluster-operator will add SANs:
             * "<RabbitmqCluster name>-server-<index>.<RabbitmqCluster name>-nodes.<namespace>" for each pod,
             * e.g. "myrabbit-server-0.myrabbit-nodes.default".
             */
            altNames: string;
            /**
             * Specifies the requested certificate Common Name (CN).
             * Defaults to <serviceName>.<namespace>.svc if not provided.
             */
            commonName: string;
            /**
             * Specifies the requested IP Subject Alternative Names, in a comma-delimited list.
             */
            ipSans: string;
            /**
             * Path in Vault PKI engine.
             * For example "pki/issue/hashicorp-com".
             * required
             */
            pkiIssuerPath: string;
            /**
             * Specifies an optional path to retrieve the root CA from vault.  Useful if certificates are issued by an intermediate CA
             */
            pkiRootPath: string;
        }
        interface RabbitmqClusterSpecSecretBackendVaultTlsPatch {
            /**
             * Specifies the requested Subject Alternative Names (SANs), in a comma-delimited list.
             * These will be appended to the SANs added by the cluster-operator.
             * The cluster-operator will add SANs:
             * "<RabbitmqCluster name>-server-<index>.<RabbitmqCluster name>-nodes.<namespace>" for each pod,
             * e.g. "myrabbit-server-0.myrabbit-nodes.default".
             */
            altNames: string;
            /**
             * Specifies the requested certificate Common Name (CN).
             * Defaults to <serviceName>.<namespace>.svc if not provided.
             */
            commonName: string;
            /**
             * Specifies the requested IP Subject Alternative Names, in a comma-delimited list.
             */
            ipSans: string;
            /**
             * Path in Vault PKI engine.
             * For example "pki/issue/hashicorp-com".
             * required
             */
            pkiIssuerPath: string;
            /**
             * Specifies an optional path to retrieve the root CA from vault.  Useful if certificates are issued by an intermediate CA
             */
            pkiRootPath: string;
        }
        /**
         * The desired state of the Kubernetes Service to create for the cluster.
         */
        interface RabbitmqClusterSpecService {
            /**
             * Annotations to add to the Service.
             */
            annotations: {
                [key: string]: string;
            };
            /**
             * IPFamilyPolicy represents the dual-stack-ness requested or required by a Service
             * See also: https://pkg.go.dev/k8s.io/api/core/v1#IPFamilyPolicy
             */
            ipFamilyPolicy: string;
            labels: {
                [key: string]: string;
            };
            /**
             * Type of Service to create for the cluster. Must be one of: ClusterIP, LoadBalancer, NodePort.
             * For more info see https://pkg.go.dev/k8s.io/api/core/v1#ServiceType
             */
            type: string;
        }
        /**
         * The desired state of the Kubernetes Service to create for the cluster.
         */
        interface RabbitmqClusterSpecServicePatch {
            /**
             * Annotations to add to the Service.
             */
            annotations: {
                [key: string]: string;
            };
            /**
             * IPFamilyPolicy represents the dual-stack-ness requested or required by a Service
             * See also: https://pkg.go.dev/k8s.io/api/core/v1#IPFamilyPolicy
             */
            ipFamilyPolicy: string;
            labels: {
                [key: string]: string;
            };
            /**
             * Type of Service to create for the cluster. Must be one of: ClusterIP, LoadBalancer, NodePort.
             * For more info see https://pkg.go.dev/k8s.io/api/core/v1#ServiceType
             */
            type: string;
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
            caSecretName: string;
            /**
             * When set to true, the RabbitmqCluster disables non-TLS listeners for RabbitMQ, management plugin and for any enabled plugins in the following list: stomp, mqtt, web_stomp, web_mqtt.
             * Only TLS-enabled clients will be able to connect.
             */
            disableNonTLSListeners: boolean;
            /**
             * Name of a Secret in the same Namespace as the RabbitmqCluster, containing the server's private key & public certificate for TLS.
             * The Secret must store these as tls.key and tls.crt, respectively.
             * This Secret can be created by running `kubectl create secret tls tls-secret --cert=path/to/tls.crt --key=path/to/tls.key`
             */
            secretName: string;
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
            caSecretName: string;
            /**
             * When set to true, the RabbitmqCluster disables non-TLS listeners for RabbitMQ, management plugin and for any enabled plugins in the following list: stomp, mqtt, web_stomp, web_mqtt.
             * Only TLS-enabled clients will be able to connect.
             */
            disableNonTLSListeners: boolean;
            /**
             * Name of a Secret in the same Namespace as the RabbitmqCluster, containing the server's private key & public certificate for TLS.
             * The Secret must store these as tls.key and tls.crt, respectively.
             * This Secret can be created by running `kubectl create secret tls tls-secret --cert=path/to/tls.crt --key=path/to/tls.key`
             */
            secretName: string;
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
            effect: string;
            /**
             * Key is the taint key that the toleration applies to. Empty means match all taint keys.
             * If the key is empty, operator must be Exists; this combination means to match all values and all keys.
             */
            key: string;
            /**
             * Operator represents a key's relationship to the value.
             * Valid operators are Exists and Equal. Defaults to Equal.
             * Exists is equivalent to wildcard for value, so that a pod can
             * tolerate all taints of a particular category.
             */
            operator: string;
            /**
             * TolerationSeconds represents the period of time the toleration (which must be
             * of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default,
             * it is not set, which means tolerate the taint forever (do not evict). Zero and
             * negative values will be treated as 0 (evict immediately) by the system.
             */
            tolerationSeconds: number;
            /**
             * Value is the taint value the toleration matches to.
             * If the operator is Exists, the value should be empty, otherwise just a regular string.
             */
            value: string;
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
            effect: string;
            /**
             * Key is the taint key that the toleration applies to. Empty means match all taint keys.
             * If the key is empty, operator must be Exists; this combination means to match all values and all keys.
             */
            key: string;
            /**
             * Operator represents a key's relationship to the value.
             * Valid operators are Exists and Equal. Defaults to Equal.
             * Exists is equivalent to wildcard for value, so that a pod can
             * tolerate all taints of a particular category.
             */
            operator: string;
            /**
             * TolerationSeconds represents the period of time the toleration (which must be
             * of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default,
             * it is not set, which means tolerate the taint forever (do not evict). Zero and
             * negative values will be treated as 0 (evict immediately) by the system.
             */
            tolerationSeconds: number;
            /**
             * Value is the taint value the toleration matches to.
             * If the operator is Exists, the value should be empty, otherwise just a regular string.
             */
            value: string;
        }
        /**
         * Status presents the observed state of RabbitmqCluster
         */
        interface RabbitmqClusterStatus {
            binding: outputs.rabbitmq.v1beta1.RabbitmqClusterStatusBinding;
            /**
             * Set of Conditions describing the current state of the RabbitmqCluster
             */
            conditions: outputs.rabbitmq.v1beta1.RabbitmqClusterStatusConditions[];
            defaultUser: outputs.rabbitmq.v1beta1.RabbitmqClusterStatusDefaultUser;
            /**
             * observedGeneration is the most recent successful generation observed for this RabbitmqCluster. It corresponds to the
             * RabbitmqCluster's generation, which is updated on mutation by the API Server.
             */
            observedGeneration: number;
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
            name: string;
        }
        /**
         * Binding exposes a secret containing the binding information for this
         * RabbitmqCluster. It implements the service binding Provisioned Service
         * duck type. See: https://github.com/servicebinding/spec#provisioned-service
         */
        interface RabbitmqClusterStatusBindingPatch {
            /**
             * Name of the referent.
             * This field is effectively required, but due to backwards compatibility is
             * allowed to be empty. Instances of this type with an empty value here are
             * almost certainly wrong.
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
        }
        interface RabbitmqClusterStatusConditions {
            /**
             * The last time this Condition type changed.
             */
            lastTransitionTime: string;
            /**
             * Full text reason for current status of the condition.
             */
            message: string;
            /**
             * One word, camel-case reason for current status of the condition.
             */
            reason: string;
            /**
             * True, False, or Unknown
             */
            status: string;
            /**
             * Type indicates the scope of RabbitmqCluster status addressed by the condition.
             */
            type: string;
        }
        interface RabbitmqClusterStatusConditionsPatch {
            /**
             * The last time this Condition type changed.
             */
            lastTransitionTime: string;
            /**
             * Full text reason for current status of the condition.
             */
            message: string;
            /**
             * One word, camel-case reason for current status of the condition.
             */
            reason: string;
            /**
             * True, False, or Unknown
             */
            status: string;
            /**
             * Type indicates the scope of RabbitmqCluster status addressed by the condition.
             */
            type: string;
        }
        /**
         * Identifying information on internal resources
         */
        interface RabbitmqClusterStatusDefaultUser {
            secretReference: outputs.rabbitmq.v1beta1.RabbitmqClusterStatusDefaultUserSecretReference;
            serviceReference: outputs.rabbitmq.v1beta1.RabbitmqClusterStatusDefaultUserServiceReference;
        }
        /**
         * Identifying information on internal resources
         */
        interface RabbitmqClusterStatusDefaultUserPatch {
            secretReference: outputs.rabbitmq.v1beta1.RabbitmqClusterStatusDefaultUserSecretReferencePatch;
            serviceReference: outputs.rabbitmq.v1beta1.RabbitmqClusterStatusDefaultUserServiceReferencePatch;
        }
        /**
         * Reference to the Kubernetes Secret containing the credentials of the default
         * user.
         */
        interface RabbitmqClusterStatusDefaultUserSecretReference {
            /**
             * Key-value pairs in the Secret corresponding to `username`, `password`, `host`, and `port`
             */
            keys: {
                [key: string]: string;
            };
            /**
             * Name of the Secret containing the default user credentials
             */
            name: string;
            /**
             * Namespace of the Secret containing the default user credentials
             */
            namespace: string;
        }
        /**
         * Reference to the Kubernetes Secret containing the credentials of the default
         * user.
         */
        interface RabbitmqClusterStatusDefaultUserSecretReferencePatch {
            /**
             * Key-value pairs in the Secret corresponding to `username`, `password`, `host`, and `port`
             */
            keys: {
                [key: string]: string;
            };
            /**
             * Name of the Secret containing the default user credentials
             */
            name: string;
            /**
             * Namespace of the Secret containing the default user credentials
             */
            namespace: string;
        }
        /**
         * Reference to the Kubernetes Service serving the cluster.
         */
        interface RabbitmqClusterStatusDefaultUserServiceReference {
            /**
             * Name of the Service serving the cluster
             */
            name: string;
            /**
             * Namespace of the Service serving the cluster
             */
            namespace: string;
        }
        /**
         * Reference to the Kubernetes Service serving the cluster.
         */
        interface RabbitmqClusterStatusDefaultUserServiceReferencePatch {
            /**
             * Name of the Service serving the cluster
             */
            name: string;
            /**
             * Namespace of the Service serving the cluster
             */
            namespace: string;
        }
        /**
         * Status presents the observed state of RabbitmqCluster
         */
        interface RabbitmqClusterStatusPatch {
            binding: outputs.rabbitmq.v1beta1.RabbitmqClusterStatusBindingPatch;
            /**
             * Set of Conditions describing the current state of the RabbitmqCluster
             */
            conditions: outputs.rabbitmq.v1beta1.RabbitmqClusterStatusConditionsPatch[];
            defaultUser: outputs.rabbitmq.v1beta1.RabbitmqClusterStatusDefaultUserPatch;
            /**
             * observedGeneration is the most recent successful generation observed for this RabbitmqCluster. It corresponds to the
             * RabbitmqCluster's generation, which is updated on mutation by the API Server.
             */
            observedGeneration: number;
        }
    }
}
