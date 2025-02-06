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
    namespace v1alpha1 {
        /**
         * SuperStream is the Schema for the queues API
         */
        interface SuperStream {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"rabbitmq.com/v1alpha1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"SuperStream">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.rabbitmq.v1alpha1.SuperStreamSpec>;
            status?: pulumi.Input<inputs.rabbitmq.v1alpha1.SuperStreamStatus>;
        }
        /**
         * SuperStreamSpec defines the desired state of SuperStream
         */
        interface SuperStreamSpec {
            /**
             * Name of the queue; required property.
             */
            name?: pulumi.Input<string>;
            /**
             * Number of partitions to create within this super stream.
             * Defaults to '3'.
             */
            partitions?: pulumi.Input<number>;
            rabbitmqClusterReference?: pulumi.Input<inputs.rabbitmq.v1alpha1.SuperStreamSpecRabbitmqClusterReference>;
            /**
             * Routing keys to use for each of the partitions in the SuperStream
             * If unset, the routing keys for the partitions will be set to the index of the partitions
             */
            routingKeys?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Default to vhost '/'; cannot be updated
             */
            vhost?: pulumi.Input<string>;
        }
        /**
         * SuperStreamSpec defines the desired state of SuperStream
         */
        interface SuperStreamSpecPatch {
            /**
             * Name of the queue; required property.
             */
            name?: pulumi.Input<string>;
            /**
             * Number of partitions to create within this super stream.
             * Defaults to '3'.
             */
            partitions?: pulumi.Input<number>;
            rabbitmqClusterReference?: pulumi.Input<inputs.rabbitmq.v1alpha1.SuperStreamSpecRabbitmqClusterReferencePatch>;
            /**
             * Routing keys to use for each of the partitions in the SuperStream
             * If unset, the routing keys for the partitions will be set to the index of the partitions
             */
            routingKeys?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Default to vhost '/'; cannot be updated
             */
            vhost?: pulumi.Input<string>;
        }
        /**
         * Reference to the RabbitmqCluster that the SuperStream will be created in.
         * Required property.
         */
        interface SuperStreamSpecRabbitmqClusterReference {
            connectionSecret?: pulumi.Input<inputs.rabbitmq.v1alpha1.SuperStreamSpecRabbitmqClusterReferenceConnectionSecret>;
            /**
             * The name of the RabbitMQ cluster to reference.
             * Have to set either name or connectionSecret, but not both.
             */
            name?: pulumi.Input<string>;
            /**
             * The namespace of the RabbitMQ cluster to reference.
             * Defaults to the namespace of the requested resource if omitted.
             */
            namespace?: pulumi.Input<string>;
        }
        /**
         * Secret contains the http management uri for the RabbitMQ cluster.
         * The Secret must contain the key `uri`, `username` and `password` or operator will error.
         * Have to set either name or connectionSecret, but not both.
         */
        interface SuperStreamSpecRabbitmqClusterReferenceConnectionSecret {
            /**
             * Name of the referent.
             * This field is effectively required, but due to backwards compatibility is
             * allowed to be empty. Instances of this type with an empty value here are
             * almost certainly wrong.
             * TODO: Add other useful fields. apiVersion, kind, uid?
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * TODO: Drop `kubebuilder:default` when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
             */
            name?: pulumi.Input<string>;
        }
        /**
         * Secret contains the http management uri for the RabbitMQ cluster.
         * The Secret must contain the key `uri`, `username` and `password` or operator will error.
         * Have to set either name or connectionSecret, but not both.
         */
        interface SuperStreamSpecRabbitmqClusterReferenceConnectionSecretPatch {
            /**
             * Name of the referent.
             * This field is effectively required, but due to backwards compatibility is
             * allowed to be empty. Instances of this type with an empty value here are
             * almost certainly wrong.
             * TODO: Add other useful fields. apiVersion, kind, uid?
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * TODO: Drop `kubebuilder:default` when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
             */
            name?: pulumi.Input<string>;
        }
        /**
         * Reference to the RabbitmqCluster that the SuperStream will be created in.
         * Required property.
         */
        interface SuperStreamSpecRabbitmqClusterReferencePatch {
            connectionSecret?: pulumi.Input<inputs.rabbitmq.v1alpha1.SuperStreamSpecRabbitmqClusterReferenceConnectionSecretPatch>;
            /**
             * The name of the RabbitMQ cluster to reference.
             * Have to set either name or connectionSecret, but not both.
             */
            name?: pulumi.Input<string>;
            /**
             * The namespace of the RabbitMQ cluster to reference.
             * Defaults to the namespace of the requested resource if omitted.
             */
            namespace?: pulumi.Input<string>;
        }
        /**
         * SuperStreamStatus defines the observed state of SuperStream
         */
        interface SuperStreamStatus {
            conditions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1alpha1.SuperStreamStatusConditions>[]>;
            /**
             * observedGeneration is the most recent successful generation observed for this SuperStream. It corresponds to the
             * SuperStream's generation, which is updated on mutation by the API Server.
             */
            observedGeneration?: pulumi.Input<number>;
            /**
             * Partitions are a list of the stream queue names which form the partitions of this SuperStream.
             */
            partitions?: pulumi.Input<pulumi.Input<string>[]>;
        }
        interface SuperStreamStatusConditions {
            /**
             * The last time this Condition status changed.
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
             * Type indicates the scope of the custom resource status addressed by the condition.
             */
            type?: pulumi.Input<string>;
        }
    }
    namespace v1beta1 {
        /**
         * Binding is the Schema for the bindings API
         */
        interface Binding {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"rabbitmq.com/v1beta1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"Binding">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.rabbitmq.v1beta1.BindingSpec>;
            status?: pulumi.Input<inputs.rabbitmq.v1beta1.BindingStatus>;
        }
        /**
         * BindingSpec defines the desired state of Binding
         */
        interface BindingSpec {
            /**
             * Cannot be updated
             */
            arguments?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * Cannot be updated
             */
            destination?: pulumi.Input<string>;
            /**
             * Cannot be updated
             */
            destinationType?: pulumi.Input<string>;
            rabbitmqClusterReference?: pulumi.Input<inputs.rabbitmq.v1beta1.BindingSpecRabbitmqClusterReference>;
            /**
             * Cannot be updated
             */
            routingKey?: pulumi.Input<string>;
            /**
             * Cannot be updated
             */
            source?: pulumi.Input<string>;
            /**
             * Default to vhost '/'; cannot be updated
             */
            vhost?: pulumi.Input<string>;
        }
        /**
         * BindingSpec defines the desired state of Binding
         */
        interface BindingSpecPatch {
            /**
             * Cannot be updated
             */
            arguments?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * Cannot be updated
             */
            destination?: pulumi.Input<string>;
            /**
             * Cannot be updated
             */
            destinationType?: pulumi.Input<string>;
            rabbitmqClusterReference?: pulumi.Input<inputs.rabbitmq.v1beta1.BindingSpecRabbitmqClusterReferencePatch>;
            /**
             * Cannot be updated
             */
            routingKey?: pulumi.Input<string>;
            /**
             * Cannot be updated
             */
            source?: pulumi.Input<string>;
            /**
             * Default to vhost '/'; cannot be updated
             */
            vhost?: pulumi.Input<string>;
        }
        /**
         * Reference to the RabbitmqCluster that the binding will be created in.
         * Required property.
         */
        interface BindingSpecRabbitmqClusterReference {
            connectionSecret?: pulumi.Input<inputs.rabbitmq.v1beta1.BindingSpecRabbitmqClusterReferenceConnectionSecret>;
            /**
             * The name of the RabbitMQ cluster to reference.
             * Have to set either name or connectionSecret, but not both.
             */
            name?: pulumi.Input<string>;
            /**
             * The namespace of the RabbitMQ cluster to reference.
             * Defaults to the namespace of the requested resource if omitted.
             */
            namespace?: pulumi.Input<string>;
        }
        /**
         * Secret contains the http management uri for the RabbitMQ cluster.
         * The Secret must contain the key `uri`, `username` and `password` or operator will error.
         * Have to set either name or connectionSecret, but not both.
         */
        interface BindingSpecRabbitmqClusterReferenceConnectionSecret {
            /**
             * Name of the referent.
             * This field is effectively required, but due to backwards compatibility is
             * allowed to be empty. Instances of this type with an empty value here are
             * almost certainly wrong.
             * TODO: Add other useful fields. apiVersion, kind, uid?
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * TODO: Drop `kubebuilder:default` when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
             */
            name?: pulumi.Input<string>;
        }
        /**
         * Secret contains the http management uri for the RabbitMQ cluster.
         * The Secret must contain the key `uri`, `username` and `password` or operator will error.
         * Have to set either name or connectionSecret, but not both.
         */
        interface BindingSpecRabbitmqClusterReferenceConnectionSecretPatch {
            /**
             * Name of the referent.
             * This field is effectively required, but due to backwards compatibility is
             * allowed to be empty. Instances of this type with an empty value here are
             * almost certainly wrong.
             * TODO: Add other useful fields. apiVersion, kind, uid?
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * TODO: Drop `kubebuilder:default` when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
             */
            name?: pulumi.Input<string>;
        }
        /**
         * Reference to the RabbitmqCluster that the binding will be created in.
         * Required property.
         */
        interface BindingSpecRabbitmqClusterReferencePatch {
            connectionSecret?: pulumi.Input<inputs.rabbitmq.v1beta1.BindingSpecRabbitmqClusterReferenceConnectionSecretPatch>;
            /**
             * The name of the RabbitMQ cluster to reference.
             * Have to set either name or connectionSecret, but not both.
             */
            name?: pulumi.Input<string>;
            /**
             * The namespace of the RabbitMQ cluster to reference.
             * Defaults to the namespace of the requested resource if omitted.
             */
            namespace?: pulumi.Input<string>;
        }
        /**
         * BindingStatus defines the observed state of Binding
         */
        interface BindingStatus {
            conditions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.BindingStatusConditions>[]>;
            /**
             * observedGeneration is the most recent successful generation observed for this Binding. It corresponds to the
             * Binding's generation, which is updated on mutation by the API Server.
             */
            observedGeneration?: pulumi.Input<number>;
        }
        interface BindingStatusConditions {
            /**
             * The last time this Condition status changed.
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
             * Type indicates the scope of the custom resource status addressed by the condition.
             */
            type?: pulumi.Input<string>;
        }
        /**
         * Exchange is the Schema for the exchanges API
         */
        interface Exchange {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"rabbitmq.com/v1beta1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"Exchange">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.rabbitmq.v1beta1.ExchangeSpec>;
            status?: pulumi.Input<inputs.rabbitmq.v1beta1.ExchangeStatus>;
        }
        /**
         * ExchangeSpec defines the desired state of Exchange
         */
        interface ExchangeSpec {
            arguments?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * Cannot be updated
             */
            autoDelete?: pulumi.Input<boolean>;
            /**
             * Cannot be updated
             */
            durable?: pulumi.Input<boolean>;
            /**
             * Required property; cannot be updated
             */
            name?: pulumi.Input<string>;
            rabbitmqClusterReference?: pulumi.Input<inputs.rabbitmq.v1beta1.ExchangeSpecRabbitmqClusterReference>;
            /**
             * Cannot be updated
             */
            type?: pulumi.Input<string>;
            /**
             * Default to vhost '/'; cannot be updated
             */
            vhost?: pulumi.Input<string>;
        }
        /**
         * ExchangeSpec defines the desired state of Exchange
         */
        interface ExchangeSpecPatch {
            arguments?: pulumi.Input<{
                [key: string]: any;
            }>;
            /**
             * Cannot be updated
             */
            autoDelete?: pulumi.Input<boolean>;
            /**
             * Cannot be updated
             */
            durable?: pulumi.Input<boolean>;
            /**
             * Required property; cannot be updated
             */
            name?: pulumi.Input<string>;
            rabbitmqClusterReference?: pulumi.Input<inputs.rabbitmq.v1beta1.ExchangeSpecRabbitmqClusterReferencePatch>;
            /**
             * Cannot be updated
             */
            type?: pulumi.Input<string>;
            /**
             * Default to vhost '/'; cannot be updated
             */
            vhost?: pulumi.Input<string>;
        }
        /**
         * Reference to the RabbitmqCluster that the exchange will be created in.
         * Required property.
         */
        interface ExchangeSpecRabbitmqClusterReference {
            connectionSecret?: pulumi.Input<inputs.rabbitmq.v1beta1.ExchangeSpecRabbitmqClusterReferenceConnectionSecret>;
            /**
             * The name of the RabbitMQ cluster to reference.
             * Have to set either name or connectionSecret, but not both.
             */
            name?: pulumi.Input<string>;
            /**
             * The namespace of the RabbitMQ cluster to reference.
             * Defaults to the namespace of the requested resource if omitted.
             */
            namespace?: pulumi.Input<string>;
        }
        /**
         * Secret contains the http management uri for the RabbitMQ cluster.
         * The Secret must contain the key `uri`, `username` and `password` or operator will error.
         * Have to set either name or connectionSecret, but not both.
         */
        interface ExchangeSpecRabbitmqClusterReferenceConnectionSecret {
            /**
             * Name of the referent.
             * This field is effectively required, but due to backwards compatibility is
             * allowed to be empty. Instances of this type with an empty value here are
             * almost certainly wrong.
             * TODO: Add other useful fields. apiVersion, kind, uid?
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * TODO: Drop `kubebuilder:default` when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
             */
            name?: pulumi.Input<string>;
        }
        /**
         * Secret contains the http management uri for the RabbitMQ cluster.
         * The Secret must contain the key `uri`, `username` and `password` or operator will error.
         * Have to set either name or connectionSecret, but not both.
         */
        interface ExchangeSpecRabbitmqClusterReferenceConnectionSecretPatch {
            /**
             * Name of the referent.
             * This field is effectively required, but due to backwards compatibility is
             * allowed to be empty. Instances of this type with an empty value here are
             * almost certainly wrong.
             * TODO: Add other useful fields. apiVersion, kind, uid?
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             * TODO: Drop `kubebuilder:default` when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
             */
            name?: pulumi.Input<string>;
        }
        /**
         * Reference to the RabbitmqCluster that the exchange will be created in.
         * Required property.
         */
        interface ExchangeSpecRabbitmqClusterReferencePatch {
            connectionSecret?: pulumi.Input<inputs.rabbitmq.v1beta1.ExchangeSpecRabbitmqClusterReferenceConnectionSecretPatch>;
            /**
             * The name of the RabbitMQ cluster to reference.
             * Have to set either name or connectionSecret, but not both.
             */
            name?: pulumi.Input<string>;
            /**
             * The namespace of the RabbitMQ cluster to reference.
             * Defaults to the namespace of the requested resource if omitted.
             */
            namespace?: pulumi.Input<string>;
        }
        /**
         * ExchangeStatus defines the observed state of Exchange
         */
        interface ExchangeStatus {
            conditions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.ExchangeStatusConditions>[]>;
            /**
             * observedGeneration is the most recent successful generation observed for this Exchange. It corresponds to the
             * Exchange's generation, which is updated on mutation by the API Server.
             */
            observedGeneration?: pulumi.Input<number>;
        }
        interface ExchangeStatusConditions {
            /**
             * The last time this Condition status changed.
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
             * Type indicates the scope of the custom resource status addressed by the condition.
             */
            type?: pulumi.Input<string>;
        }
        /**
         * Federation is the Schema for the federations API
         */
        interface Federation {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion?: pulumi.Input<"rabbitmq.com/v1beta1">;
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: pulumi.Input<"Federation">;
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
            spec?: pulumi.Input<inputs.rabbitmq.v1beta1.FederationSpec>;
            status?: pulumi.Input<inputs.rabbitmq.v1beta1.FederationStatus>;
        }
        /**
         * FederationSpec defines the desired state of Federation
         * For how to configure federation upstreams, see: https://www.rabbitmq.com/federation-reference.html.
         */
        interface FederationSpec {
            ackMode?: pulumi.Input<string>;
            exchange?: pulumi.Input<string>;
            expires?: pulumi.Input<number>;
            maxHops?: pulumi.Input<number>;
            messageTTL?: pulumi.Input<number>;
            /**
             * Required property; cannot be updated
             */
            name?: pulumi.Input<string>;
        }
    }
    /**
     * FederationSpec defines the desired state of Federation
     * For how to configure federation upstreams, see: https://www.rabbitmq.com/federation-reference.html.
     */
    interface FederationSpecPatch {
        ackMode?: pulumi.Input<string>;
        exchange?: pulumi.Input<string>;
        expires?: pulumi.Input<number>;
        maxHops?: pulumi.Input<number>;
        messageTTL?: pulumi.Input<number>;
        /**
         * Required property; cannot be updated
         */
        name?: pulumi.Input<string>;
    }
}
/**
 * Reference to the RabbitmqCluster that this federation upstream will be created in.
 * Required property.
 */
export interface FederationSpecRabbitmqClusterReference {
    connectionSecret?: pulumi.Input<inputs.rabbitmq.v1beta1.FederationSpecRabbitmqClusterReferenceConnectionSecret>;
    /**
     * The name of the RabbitMQ cluster to reference.
     * Have to set either name or connectionSecret, but not both.
     */
    name?: pulumi.Input<string>;
    /**
     * The namespace of the RabbitMQ cluster to reference.
     * Defaults to the namespace of the requested resource if omitted.
     */
    namespace?: pulumi.Input<string>;
}
/**
 * Secret contains the http management uri for the RabbitMQ cluster.
 * The Secret must contain the key `uri`, `username` and `password` or operator will error.
 * Have to set either name or connectionSecret, but not both.
 */
export interface FederationSpecRabbitmqClusterReferenceConnectionSecret {
    /**
     * Name of the referent.
     * This field is effectively required, but due to backwards compatibility is
     * allowed to be empty. Instances of this type with an empty value here are
     * almost certainly wrong.
     * TODO: Add other useful fields. apiVersion, kind, uid?
     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     * TODO: Drop `kubebuilder:default` when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
     */
    name?: pulumi.Input<string>;
}
/**
 * Secret contains the http management uri for the RabbitMQ cluster.
 * The Secret must contain the key `uri`, `username` and `password` or operator will error.
 * Have to set either name or connectionSecret, but not both.
 */
export interface FederationSpecRabbitmqClusterReferenceConnectionSecretPatch {
    /**
     * Name of the referent.
     * This field is effectively required, but due to backwards compatibility is
     * allowed to be empty. Instances of this type with an empty value here are
     * almost certainly wrong.
     * TODO: Add other useful fields. apiVersion, kind, uid?
     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     * TODO: Drop `kubebuilder:default` when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
     */
    name?: pulumi.Input<string>;
}
/**
 * Reference to the RabbitmqCluster that this federation upstream will be created in.
 * Required property.
 */
export interface FederationSpecRabbitmqClusterReferencePatch {
    connectionSecret?: pulumi.Input<inputs.rabbitmq.v1beta1.FederationSpecRabbitmqClusterReferenceConnectionSecretPatch>;
    /**
     * The name of the RabbitMQ cluster to reference.
     * Have to set either name or connectionSecret, but not both.
     */
    name?: pulumi.Input<string>;
    /**
     * The namespace of the RabbitMQ cluster to reference.
     * Defaults to the namespace of the requested resource if omitted.
     */
    namespace?: pulumi.Input<string>;
}
/**
 * Secret contains the AMQP URI(s) for the upstream.
 * The Secret must contain the key `uri` or operator will error.
 * `uri` should be one or multiple uris separated by ','.
 * Required property.
 */
export interface FederationSpecUriSecret {
    /**
     * Name of the referent.
     * This field is effectively required, but due to backwards compatibility is
     * allowed to be empty. Instances of this type with an empty value here are
     * almost certainly wrong.
     * TODO: Add other useful fields. apiVersion, kind, uid?
     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     * TODO: Drop `kubebuilder:default` when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
     */
    name?: pulumi.Input<string>;
}
/**
 * Secret contains the AMQP URI(s) for the upstream.
 * The Secret must contain the key `uri` or operator will error.
 * `uri` should be one or multiple uris separated by ','.
 * Required property.
 */
export interface FederationSpecUriSecretPatch {
    /**
     * Name of the referent.
     * This field is effectively required, but due to backwards compatibility is
     * allowed to be empty. Instances of this type with an empty value here are
     * almost certainly wrong.
     * TODO: Add other useful fields. apiVersion, kind, uid?
     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     * TODO: Drop `kubebuilder:default` when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
     */
    name?: pulumi.Input<string>;
}
/**
 * FederationStatus defines the observed state of Federation
 */
export interface FederationStatus {
    conditions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.FederationStatusConditions>[]>;
    /**
     * observedGeneration is the most recent successful generation observed for this Federation. It corresponds to the
     * Federation's generation, which is updated on mutation by the API Server.
     */
    observedGeneration?: pulumi.Input<number>;
}
export interface FederationStatusConditions {
    /**
     * The last time this Condition status changed.
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
     * Type indicates the scope of the custom resource status addressed by the condition.
     */
    type?: pulumi.Input<string>;
}
/**
 * OperatorPolicy is the Schema for the operator policies API
 */
export interface OperatorPolicy {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: pulumi.Input<"rabbitmq.com/v1beta1">;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: pulumi.Input<"OperatorPolicy">;
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
    spec?: pulumi.Input<inputs.rabbitmq.v1beta1.OperatorPolicySpec>;
    status?: pulumi.Input<inputs.rabbitmq.v1beta1.OperatorPolicyStatus>;
}
/**
 * OperatorPolicySpec defines the desired state of OperatorPolicy
 * https://www.rabbitmq.com/parameters.html#operator-policies
 */
export interface OperatorPolicySpec {
    /**
     * What this operator policy applies to: 'queues', 'classic_queues', 'quorum_queues', 'streams'.
     * Default to 'queues'.
     */
    applyTo?: pulumi.Input<string>;
    /**
     * OperatorPolicy definition. Required property.
     */
    definition?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * Required property; cannot be updated
     */
    name?: pulumi.Input<string>;
    /**
     * Regular expression pattern used to match queues, e.g. "^my-queue$".
     * Required property.
     */
    pattern?: pulumi.Input<string>;
    /**
     * Default to '0'.
     * In the event that more than one operator policy can match a given queue, the operator policy with the greatest priority applies.
     */
    priority?: pulumi.Input<number>;
    rabbitmqClusterReference?: pulumi.Input<inputs.rabbitmq.v1beta1.OperatorPolicySpecRabbitmqClusterReference>;
    /**
     * Default to vhost '/'; cannot be updated
     */
    vhost?: pulumi.Input<string>;
}
/**
 * OperatorPolicySpec defines the desired state of OperatorPolicy
 * https://www.rabbitmq.com/parameters.html#operator-policies
 */
export interface OperatorPolicySpecPatch {
    /**
     * What this operator policy applies to: 'queues', 'classic_queues', 'quorum_queues', 'streams'.
     * Default to 'queues'.
     */
    applyTo?: pulumi.Input<string>;
    /**
     * OperatorPolicy definition. Required property.
     */
    definition?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * Required property; cannot be updated
     */
    name?: pulumi.Input<string>;
    /**
     * Regular expression pattern used to match queues, e.g. "^my-queue$".
     * Required property.
     */
    pattern?: pulumi.Input<string>;
    /**
     * Default to '0'.
     * In the event that more than one operator policy can match a given queue, the operator policy with the greatest priority applies.
     */
    priority?: pulumi.Input<number>;
    rabbitmqClusterReference?: pulumi.Input<inputs.rabbitmq.v1beta1.OperatorPolicySpecRabbitmqClusterReferencePatch>;
    /**
     * Default to vhost '/'; cannot be updated
     */
    vhost?: pulumi.Input<string>;
}
/**
 * Reference to the RabbitmqCluster that the operator policy will be created in.
 * Required property.
 */
export interface OperatorPolicySpecRabbitmqClusterReference {
    connectionSecret?: pulumi.Input<inputs.rabbitmq.v1beta1.OperatorPolicySpecRabbitmqClusterReferenceConnectionSecret>;
    /**
     * The name of the RabbitMQ cluster to reference.
     * Have to set either name or connectionSecret, but not both.
     */
    name?: pulumi.Input<string>;
    /**
     * The namespace of the RabbitMQ cluster to reference.
     * Defaults to the namespace of the requested resource if omitted.
     */
    namespace?: pulumi.Input<string>;
}
/**
 * Secret contains the http management uri for the RabbitMQ cluster.
 * The Secret must contain the key `uri`, `username` and `password` or operator will error.
 * Have to set either name or connectionSecret, but not both.
 */
export interface OperatorPolicySpecRabbitmqClusterReferenceConnectionSecret {
    /**
     * Name of the referent.
     * This field is effectively required, but due to backwards compatibility is
     * allowed to be empty. Instances of this type with an empty value here are
     * almost certainly wrong.
     * TODO: Add other useful fields. apiVersion, kind, uid?
     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     * TODO: Drop `kubebuilder:default` when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
     */
    name?: pulumi.Input<string>;
}
/**
 * Secret contains the http management uri for the RabbitMQ cluster.
 * The Secret must contain the key `uri`, `username` and `password` or operator will error.
 * Have to set either name or connectionSecret, but not both.
 */
export interface OperatorPolicySpecRabbitmqClusterReferenceConnectionSecretPatch {
    /**
     * Name of the referent.
     * This field is effectively required, but due to backwards compatibility is
     * allowed to be empty. Instances of this type with an empty value here are
     * almost certainly wrong.
     * TODO: Add other useful fields. apiVersion, kind, uid?
     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     * TODO: Drop `kubebuilder:default` when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
     */
    name?: pulumi.Input<string>;
}
/**
 * Reference to the RabbitmqCluster that the operator policy will be created in.
 * Required property.
 */
export interface OperatorPolicySpecRabbitmqClusterReferencePatch {
    connectionSecret?: pulumi.Input<inputs.rabbitmq.v1beta1.OperatorPolicySpecRabbitmqClusterReferenceConnectionSecretPatch>;
    /**
     * The name of the RabbitMQ cluster to reference.
     * Have to set either name or connectionSecret, but not both.
     */
    name?: pulumi.Input<string>;
    /**
     * The namespace of the RabbitMQ cluster to reference.
     * Defaults to the namespace of the requested resource if omitted.
     */
    namespace?: pulumi.Input<string>;
}
/**
 * OperatorPolicyStatus defines the observed state of OperatorPolicy
 */
export interface OperatorPolicyStatus {
    conditions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.OperatorPolicyStatusConditions>[]>;
    /**
     * observedGeneration is the most recent successful generation observed for this OperatorPolicy. It corresponds to the
     * OperatorPolicy's generation, which is updated on mutation by the API Server.
     */
    observedGeneration?: pulumi.Input<number>;
}
export interface OperatorPolicyStatusConditions {
    /**
     * The last time this Condition status changed.
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
     * Type indicates the scope of the custom resource status addressed by the condition.
     */
    type?: pulumi.Input<string>;
}
/**
 * Permission is the Schema for the permissions API
 */
export interface Permission {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: pulumi.Input<"rabbitmq.com/v1beta1">;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: pulumi.Input<"Permission">;
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
    spec?: pulumi.Input<inputs.rabbitmq.v1beta1.PermissionSpec>;
    status?: pulumi.Input<inputs.rabbitmq.v1beta1.PermissionStatus>;
}
/**
 * PermissionSpec defines the desired state of Permission
 */
export interface PermissionSpec {
    permissions?: pulumi.Input<inputs.rabbitmq.v1beta1.PermissionSpecPermissions>;
    rabbitmqClusterReference?: pulumi.Input<inputs.rabbitmq.v1beta1.PermissionSpecRabbitmqClusterReference>;
    /**
     * Name of an existing user; must provide user or userReference, else create/update will fail; cannot be updated
     */
    user?: pulumi.Input<string>;
    userReference?: pulumi.Input<inputs.rabbitmq.v1beta1.PermissionSpecUserReference>;
    /**
     * Name of an existing vhost; required property; cannot be updated
     */
    vhost?: pulumi.Input<string>;
}
/**
 * PermissionSpec defines the desired state of Permission
 */
export interface PermissionSpecPatch {
    permissions?: pulumi.Input<inputs.rabbitmq.v1beta1.PermissionSpecPermissionsPatch>;
    rabbitmqClusterReference?: pulumi.Input<inputs.rabbitmq.v1beta1.PermissionSpecRabbitmqClusterReferencePatch>;
    /**
     * Name of an existing user; must provide user or userReference, else create/update will fail; cannot be updated
     */
    user?: pulumi.Input<string>;
    userReference?: pulumi.Input<inputs.rabbitmq.v1beta1.PermissionSpecUserReferencePatch>;
    /**
     * Name of an existing vhost; required property; cannot be updated
     */
    vhost?: pulumi.Input<string>;
}
/**
 * Permissions to grant to the user in the specific vhost; required property.
 * See RabbitMQ doc for more information: https://www.rabbitmq.com/access-control.html#user-management
 */
export interface PermissionSpecPermissions {
    configure?: pulumi.Input<string>;
    read?: pulumi.Input<string>;
    write?: pulumi.Input<string>;
}
/**
 * Permissions to grant to the user in the specific vhost; required property.
 * See RabbitMQ doc for more information: https://www.rabbitmq.com/access-control.html#user-management
 */
export interface PermissionSpecPermissionsPatch {
    configure?: pulumi.Input<string>;
    read?: pulumi.Input<string>;
    write?: pulumi.Input<string>;
}
/**
 * Reference to the RabbitmqCluster that both the provided user and vhost are.
 * Required property.
 */
export interface PermissionSpecRabbitmqClusterReference {
    connectionSecret?: pulumi.Input<inputs.rabbitmq.v1beta1.PermissionSpecRabbitmqClusterReferenceConnectionSecret>;
    /**
     * The name of the RabbitMQ cluster to reference.
     * Have to set either name or connectionSecret, but not both.
     */
    name?: pulumi.Input<string>;
    /**
     * The namespace of the RabbitMQ cluster to reference.
     * Defaults to the namespace of the requested resource if omitted.
     */
    namespace?: pulumi.Input<string>;
}
/**
 * Secret contains the http management uri for the RabbitMQ cluster.
 * The Secret must contain the key `uri`, `username` and `password` or operator will error.
 * Have to set either name or connectionSecret, but not both.
 */
export interface PermissionSpecRabbitmqClusterReferenceConnectionSecret {
    /**
     * Name of the referent.
     * This field is effectively required, but due to backwards compatibility is
     * allowed to be empty. Instances of this type with an empty value here are
     * almost certainly wrong.
     * TODO: Add other useful fields. apiVersion, kind, uid?
     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     * TODO: Drop `kubebuilder:default` when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
     */
    name?: pulumi.Input<string>;
}
/**
 * Secret contains the http management uri for the RabbitMQ cluster.
 * The Secret must contain the key `uri`, `username` and `password` or operator will error.
 * Have to set either name or connectionSecret, but not both.
 */
export interface PermissionSpecRabbitmqClusterReferenceConnectionSecretPatch {
    /**
     * Name of the referent.
     * This field is effectively required, but due to backwards compatibility is
     * allowed to be empty. Instances of this type with an empty value here are
     * almost certainly wrong.
     * TODO: Add other useful fields. apiVersion, kind, uid?
     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     * TODO: Drop `kubebuilder:default` when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
     */
    name?: pulumi.Input<string>;
}
/**
 * Reference to the RabbitmqCluster that both the provided user and vhost are.
 * Required property.
 */
export interface PermissionSpecRabbitmqClusterReferencePatch {
    connectionSecret?: pulumi.Input<inputs.rabbitmq.v1beta1.PermissionSpecRabbitmqClusterReferenceConnectionSecretPatch>;
    /**
     * The name of the RabbitMQ cluster to reference.
     * Have to set either name or connectionSecret, but not both.
     */
    name?: pulumi.Input<string>;
    /**
     * The namespace of the RabbitMQ cluster to reference.
     * Defaults to the namespace of the requested resource if omitted.
     */
    namespace?: pulumi.Input<string>;
}
/**
 * Reference to an existing user.rabbitmq.com object; must provide user or userReference, else create/update will fail; cannot be updated
 */
export interface PermissionSpecUserReference {
    /**
     * Name of the referent.
     * This field is effectively required, but due to backwards compatibility is
     * allowed to be empty. Instances of this type with an empty value here are
     * almost certainly wrong.
     * TODO: Add other useful fields. apiVersion, kind, uid?
     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     * TODO: Drop `kubebuilder:default` when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
     */
    name?: pulumi.Input<string>;
}
/**
 * Reference to an existing user.rabbitmq.com object; must provide user or userReference, else create/update will fail; cannot be updated
 */
export interface PermissionSpecUserReferencePatch {
    /**
     * Name of the referent.
     * This field is effectively required, but due to backwards compatibility is
     * allowed to be empty. Instances of this type with an empty value here are
     * almost certainly wrong.
     * TODO: Add other useful fields. apiVersion, kind, uid?
     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     * TODO: Drop `kubebuilder:default` when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
     */
    name?: pulumi.Input<string>;
}
/**
 * PermissionStatus defines the observed state of Permission
 */
export interface PermissionStatus {
    conditions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.PermissionStatusConditions>[]>;
    /**
     * observedGeneration is the most recent successful generation observed for this Permission. It corresponds to the
     * Permission's generation, which is updated on mutation by the API Server.
     */
    observedGeneration?: pulumi.Input<number>;
}
export interface PermissionStatusConditions {
    /**
     * The last time this Condition status changed.
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
     * Type indicates the scope of the custom resource status addressed by the condition.
     */
    type?: pulumi.Input<string>;
}
/**
 * Policy is the Schema for the policies API
 */
export interface Policy {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: pulumi.Input<"rabbitmq.com/v1beta1">;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: pulumi.Input<"Policy">;
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
    spec?: pulumi.Input<inputs.rabbitmq.v1beta1.PolicySpec>;
    status?: pulumi.Input<inputs.rabbitmq.v1beta1.PolicyStatus>;
}
/**
 * PolicySpec defines the desired state of Policy
 * https://www.rabbitmq.com/parameters.html#policies
 */
export interface PolicySpec {
    /**
     * What this policy applies to: 'queues', 'classic_queues', 'quorum_queues', 'streams', 'exchanges', or 'all'.
     * Default to 'all'.
     */
    applyTo?: pulumi.Input<string>;
    /**
     * Policy definition. Required property.
     */
    definition?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * Required property; cannot be updated
     */
    name?: pulumi.Input<string>;
    /**
     * Regular expression pattern used to match queues and exchanges, e.g. "^amq.".
     * Required property.
     */
    pattern?: pulumi.Input<string>;
    /**
     * Default to '0'.
     * In the event that more than one policy can match a given exchange or queue, the policy with the greatest priority applies.
     */
    priority?: pulumi.Input<number>;
    rabbitmqClusterReference?: pulumi.Input<inputs.rabbitmq.v1beta1.PolicySpecRabbitmqClusterReference>;
    /**
     * Default to vhost '/'; cannot be updated
     */
    vhost?: pulumi.Input<string>;
}
/**
 * PolicySpec defines the desired state of Policy
 * https://www.rabbitmq.com/parameters.html#policies
 */
export interface PolicySpecPatch {
    /**
     * What this policy applies to: 'queues', 'classic_queues', 'quorum_queues', 'streams', 'exchanges', or 'all'.
     * Default to 'all'.
     */
    applyTo?: pulumi.Input<string>;
    /**
     * Policy definition. Required property.
     */
    definition?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * Required property; cannot be updated
     */
    name?: pulumi.Input<string>;
    /**
     * Regular expression pattern used to match queues and exchanges, e.g. "^amq.".
     * Required property.
     */
    pattern?: pulumi.Input<string>;
    /**
     * Default to '0'.
     * In the event that more than one policy can match a given exchange or queue, the policy with the greatest priority applies.
     */
    priority?: pulumi.Input<number>;
    rabbitmqClusterReference?: pulumi.Input<inputs.rabbitmq.v1beta1.PolicySpecRabbitmqClusterReferencePatch>;
    /**
     * Default to vhost '/'; cannot be updated
     */
    vhost?: pulumi.Input<string>;
}
/**
 * Reference to the RabbitmqCluster that the policy will be created in.
 * Required property.
 */
export interface PolicySpecRabbitmqClusterReference {
    connectionSecret?: pulumi.Input<inputs.rabbitmq.v1beta1.PolicySpecRabbitmqClusterReferenceConnectionSecret>;
    /**
     * The name of the RabbitMQ cluster to reference.
     * Have to set either name or connectionSecret, but not both.
     */
    name?: pulumi.Input<string>;
    /**
     * The namespace of the RabbitMQ cluster to reference.
     * Defaults to the namespace of the requested resource if omitted.
     */
    namespace?: pulumi.Input<string>;
}
/**
 * Secret contains the http management uri for the RabbitMQ cluster.
 * The Secret must contain the key `uri`, `username` and `password` or operator will error.
 * Have to set either name or connectionSecret, but not both.
 */
export interface PolicySpecRabbitmqClusterReferenceConnectionSecret {
    /**
     * Name of the referent.
     * This field is effectively required, but due to backwards compatibility is
     * allowed to be empty. Instances of this type with an empty value here are
     * almost certainly wrong.
     * TODO: Add other useful fields. apiVersion, kind, uid?
     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     * TODO: Drop `kubebuilder:default` when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
     */
    name?: pulumi.Input<string>;
}
/**
 * Secret contains the http management uri for the RabbitMQ cluster.
 * The Secret must contain the key `uri`, `username` and `password` or operator will error.
 * Have to set either name or connectionSecret, but not both.
 */
export interface PolicySpecRabbitmqClusterReferenceConnectionSecretPatch {
    /**
     * Name of the referent.
     * This field is effectively required, but due to backwards compatibility is
     * allowed to be empty. Instances of this type with an empty value here are
     * almost certainly wrong.
     * TODO: Add other useful fields. apiVersion, kind, uid?
     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     * TODO: Drop `kubebuilder:default` when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
     */
    name?: pulumi.Input<string>;
}
/**
 * Reference to the RabbitmqCluster that the policy will be created in.
 * Required property.
 */
export interface PolicySpecRabbitmqClusterReferencePatch {
    connectionSecret?: pulumi.Input<inputs.rabbitmq.v1beta1.PolicySpecRabbitmqClusterReferenceConnectionSecretPatch>;
    /**
     * The name of the RabbitMQ cluster to reference.
     * Have to set either name or connectionSecret, but not both.
     */
    name?: pulumi.Input<string>;
    /**
     * The namespace of the RabbitMQ cluster to reference.
     * Defaults to the namespace of the requested resource if omitted.
     */
    namespace?: pulumi.Input<string>;
}
/**
 * PolicyStatus defines the observed state of Policy
 */
export interface PolicyStatus {
    conditions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.PolicyStatusConditions>[]>;
    /**
     * observedGeneration is the most recent successful generation observed for this Policy. It corresponds to the
     * Policy's generation, which is updated on mutation by the API Server.
     */
    observedGeneration?: pulumi.Input<number>;
}
export interface PolicyStatusConditions {
    /**
     * The last time this Condition status changed.
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
     * Type indicates the scope of the custom resource status addressed by the condition.
     */
    type?: pulumi.Input<string>;
}
/**
 * Queue is the Schema for the queues API
 */
export interface Queue {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: pulumi.Input<"rabbitmq.com/v1beta1">;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: pulumi.Input<"Queue">;
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
    spec?: pulumi.Input<inputs.rabbitmq.v1beta1.QueueSpec>;
    status?: pulumi.Input<inputs.rabbitmq.v1beta1.QueueStatus>;
}
/**
 * QueueSpec defines the desired state of Queue
 */
export interface QueueSpec {
    /**
     * Queue arguments in the format of KEY: VALUE. e.g. x-delivery-limit: 10000.
     * Configuring queues through arguments is not recommended because they cannot be updated once set; we recommend configuring queues through policies instead.
     */
    arguments?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * when set to true, queues that have had at least one consumer before are deleted after the last consumer unsubscribes.
     */
    autoDelete?: pulumi.Input<boolean>;
    /**
     * when set to true, queues are deleted only if empty.
     */
    deleteIfEmpty?: pulumi.Input<boolean>;
    /**
     * when set to true, queues are delete only if they have no consumer.
     */
    deleteIfUnused?: pulumi.Input<boolean>;
    /**
     * When set to false queues does not survive server restart.
     */
    durable?: pulumi.Input<boolean>;
    /**
     * Name of the queue; required property.
     */
    name?: pulumi.Input<string>;
    rabbitmqClusterReference?: pulumi.Input<inputs.rabbitmq.v1beta1.QueueSpecRabbitmqClusterReference>;
    type?: pulumi.Input<string>;
    /**
     * Default to vhost '/'
     */
    vhost?: pulumi.Input<string>;
}
/**
 * QueueSpec defines the desired state of Queue
 */
export interface QueueSpecPatch {
    /**
     * Queue arguments in the format of KEY: VALUE. e.g. x-delivery-limit: 10000.
     * Configuring queues through arguments is not recommended because they cannot be updated once set; we recommend configuring queues through policies instead.
     */
    arguments?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * when set to true, queues that have had at least one consumer before are deleted after the last consumer unsubscribes.
     */
    autoDelete?: pulumi.Input<boolean>;
    /**
     * when set to true, queues are deleted only if empty.
     */
    deleteIfEmpty?: pulumi.Input<boolean>;
    /**
     * when set to true, queues are delete only if they have no consumer.
     */
    deleteIfUnused?: pulumi.Input<boolean>;
    /**
     * When set to false queues does not survive server restart.
     */
    durable?: pulumi.Input<boolean>;
    /**
     * Name of the queue; required property.
     */
    name?: pulumi.Input<string>;
    rabbitmqClusterReference?: pulumi.Input<inputs.rabbitmq.v1beta1.QueueSpecRabbitmqClusterReferencePatch>;
    type?: pulumi.Input<string>;
    /**
     * Default to vhost '/'
     */
    vhost?: pulumi.Input<string>;
}
/**
 * Reference to the RabbitmqCluster that the queue will be created in.
 * Required property.
 */
export interface QueueSpecRabbitmqClusterReference {
    connectionSecret?: pulumi.Input<inputs.rabbitmq.v1beta1.QueueSpecRabbitmqClusterReferenceConnectionSecret>;
    /**
     * The name of the RabbitMQ cluster to reference.
     * Have to set either name or connectionSecret, but not both.
     */
    name?: pulumi.Input<string>;
    /**
     * The namespace of the RabbitMQ cluster to reference.
     * Defaults to the namespace of the requested resource if omitted.
     */
    namespace?: pulumi.Input<string>;
}
/**
 * Secret contains the http management uri for the RabbitMQ cluster.
 * The Secret must contain the key `uri`, `username` and `password` or operator will error.
 * Have to set either name or connectionSecret, but not both.
 */
export interface QueueSpecRabbitmqClusterReferenceConnectionSecret {
    /**
     * Name of the referent.
     * This field is effectively required, but due to backwards compatibility is
     * allowed to be empty. Instances of this type with an empty value here are
     * almost certainly wrong.
     * TODO: Add other useful fields. apiVersion, kind, uid?
     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     * TODO: Drop `kubebuilder:default` when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
     */
    name?: pulumi.Input<string>;
}
/**
 * Secret contains the http management uri for the RabbitMQ cluster.
 * The Secret must contain the key `uri`, `username` and `password` or operator will error.
 * Have to set either name or connectionSecret, but not both.
 */
export interface QueueSpecRabbitmqClusterReferenceConnectionSecretPatch {
    /**
     * Name of the referent.
     * This field is effectively required, but due to backwards compatibility is
     * allowed to be empty. Instances of this type with an empty value here are
     * almost certainly wrong.
     * TODO: Add other useful fields. apiVersion, kind, uid?
     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     * TODO: Drop `kubebuilder:default` when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
     */
    name?: pulumi.Input<string>;
}
/**
 * Reference to the RabbitmqCluster that the queue will be created in.
 * Required property.
 */
export interface QueueSpecRabbitmqClusterReferencePatch {
    connectionSecret?: pulumi.Input<inputs.rabbitmq.v1beta1.QueueSpecRabbitmqClusterReferenceConnectionSecretPatch>;
    /**
     * The name of the RabbitMQ cluster to reference.
     * Have to set either name or connectionSecret, but not both.
     */
    name?: pulumi.Input<string>;
    /**
     * The namespace of the RabbitMQ cluster to reference.
     * Defaults to the namespace of the requested resource if omitted.
     */
    namespace?: pulumi.Input<string>;
}
/**
 * QueueStatus defines the observed state of Queue
 */
export interface QueueStatus {
    conditions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.QueueStatusConditions>[]>;
    /**
     * observedGeneration is the most recent successful generation observed for this Queue. It corresponds to the
     * Queue's generation, which is updated on mutation by the API Server.
     */
    observedGeneration?: pulumi.Input<number>;
}
export interface QueueStatusConditions {
    /**
     * The last time this Condition status changed.
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
     * Type indicates the scope of the custom resource status addressed by the condition.
     */
    type?: pulumi.Input<string>;
}
/**
 * SchemaReplication is the Schema for the schemareplications API
 * This feature requires Tanzu RabbitMQ with schema replication plugin.
 * For more information, see: https://tanzu.vmware.com/rabbitmq and https://www.rabbitmq.com/definitions-standby.html.
 */
export interface SchemaReplication {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: pulumi.Input<"rabbitmq.com/v1beta1">;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: pulumi.Input<"SchemaReplication">;
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
    spec?: pulumi.Input<inputs.rabbitmq.v1beta1.SchemaReplicationSpec>;
    status?: pulumi.Input<inputs.rabbitmq.v1beta1.SchemaReplicationStatus>;
}
/**
 * SchemaReplicationSpec defines the desired state of SchemaReplication
 */
export interface SchemaReplicationSpec {
    /**
     * endpoints should be one or multiple endpoints separated by ','.
     * Must provide either spec.endpoints or endpoints in spec.upstreamSecret.
     * When endpoints are provided in both spec.endpoints and spec.upstreamSecret, spec.endpoints takes
     * precedence.
     */
    endpoints?: pulumi.Input<string>;
    rabbitmqClusterReference?: pulumi.Input<inputs.rabbitmq.v1beta1.SchemaReplicationSpecRabbitmqClusterReference>;
    secretBackend?: pulumi.Input<inputs.rabbitmq.v1beta1.SchemaReplicationSpecSecretBackend>;
    upstreamSecret?: pulumi.Input<inputs.rabbitmq.v1beta1.SchemaReplicationSpecUpstreamSecret>;
}
/**
 * SchemaReplicationSpec defines the desired state of SchemaReplication
 */
export interface SchemaReplicationSpecPatch {
    /**
     * endpoints should be one or multiple endpoints separated by ','.
     * Must provide either spec.endpoints or endpoints in spec.upstreamSecret.
     * When endpoints are provided in both spec.endpoints and spec.upstreamSecret, spec.endpoints takes
     * precedence.
     */
    endpoints?: pulumi.Input<string>;
    rabbitmqClusterReference?: pulumi.Input<inputs.rabbitmq.v1beta1.SchemaReplicationSpecRabbitmqClusterReferencePatch>;
    secretBackend?: pulumi.Input<inputs.rabbitmq.v1beta1.SchemaReplicationSpecSecretBackendPatch>;
    upstreamSecret?: pulumi.Input<inputs.rabbitmq.v1beta1.SchemaReplicationSpecUpstreamSecretPatch>;
}
/**
 * Reference to the RabbitmqCluster that schema replication would be set for. Must be an existing cluster.
 */
export interface SchemaReplicationSpecRabbitmqClusterReference {
    connectionSecret?: pulumi.Input<inputs.rabbitmq.v1beta1.SchemaReplicationSpecRabbitmqClusterReferenceConnectionSecret>;
    /**
     * The name of the RabbitMQ cluster to reference.
     * Have to set either name or connectionSecret, but not both.
     */
    name?: pulumi.Input<string>;
    /**
     * The namespace of the RabbitMQ cluster to reference.
     * Defaults to the namespace of the requested resource if omitted.
     */
    namespace?: pulumi.Input<string>;
}
/**
 * Secret contains the http management uri for the RabbitMQ cluster.
 * The Secret must contain the key `uri`, `username` and `password` or operator will error.
 * Have to set either name or connectionSecret, but not both.
 */
export interface SchemaReplicationSpecRabbitmqClusterReferenceConnectionSecret {
    /**
     * Name of the referent.
     * This field is effectively required, but due to backwards compatibility is
     * allowed to be empty. Instances of this type with an empty value here are
     * almost certainly wrong.
     * TODO: Add other useful fields. apiVersion, kind, uid?
     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     * TODO: Drop `kubebuilder:default` when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
     */
    name?: pulumi.Input<string>;
}
/**
 * Secret contains the http management uri for the RabbitMQ cluster.
 * The Secret must contain the key `uri`, `username` and `password` or operator will error.
 * Have to set either name or connectionSecret, but not both.
 */
export interface SchemaReplicationSpecRabbitmqClusterReferenceConnectionSecretPatch {
    /**
     * Name of the referent.
     * This field is effectively required, but due to backwards compatibility is
     * allowed to be empty. Instances of this type with an empty value here are
     * almost certainly wrong.
     * TODO: Add other useful fields. apiVersion, kind, uid?
     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     * TODO: Drop `kubebuilder:default` when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
     */
    name?: pulumi.Input<string>;
}
/**
 * Reference to the RabbitmqCluster that schema replication would be set for. Must be an existing cluster.
 */
export interface SchemaReplicationSpecRabbitmqClusterReferencePatch {
    connectionSecret?: pulumi.Input<inputs.rabbitmq.v1beta1.SchemaReplicationSpecRabbitmqClusterReferenceConnectionSecretPatch>;
    /**
     * The name of the RabbitMQ cluster to reference.
     * Have to set either name or connectionSecret, but not both.
     */
    name?: pulumi.Input<string>;
    /**
     * The namespace of the RabbitMQ cluster to reference.
     * Defaults to the namespace of the requested resource if omitted.
     */
    namespace?: pulumi.Input<string>;
}
/**
 * Set to fetch user credentials from K8s external secret stores to be used for schema replication.
 */
export interface SchemaReplicationSpecSecretBackend {
    vault?: pulumi.Input<inputs.rabbitmq.v1beta1.SchemaReplicationSpecSecretBackendVault>;
}
/**
 * Set to fetch user credentials from K8s external secret stores to be used for schema replication.
 */
export interface SchemaReplicationSpecSecretBackendPatch {
    vault?: pulumi.Input<inputs.rabbitmq.v1beta1.SchemaReplicationSpecSecretBackendVaultPatch>;
}
export interface SchemaReplicationSpecSecretBackendVault {
    /**
     * Path in Vault to access a KV (Key-Value) secret with the fields username and password to be used for replication.
     * For example "secret/data/rabbitmq/config".
     * Optional; if not provided, username and password will come from upstreamSecret instead.
     * Have to set either secretBackend.vault.secretPath or upstreamSecret, but not both.
     */
    secretPath?: pulumi.Input<string>;
}
export interface SchemaReplicationSpecSecretBackendVaultPatch {
    /**
     * Path in Vault to access a KV (Key-Value) secret with the fields username and password to be used for replication.
     * For example "secret/data/rabbitmq/config".
     * Optional; if not provided, username and password will come from upstreamSecret instead.
     * Have to set either secretBackend.vault.secretPath or upstreamSecret, but not both.
     */
    secretPath?: pulumi.Input<string>;
}
/**
 * Defines a Secret which contains credentials to be used for schema replication.
 * The Secret must contain the keys `username` and `password` in its Data field, or operator will error.
 * Have to set either secretBackend.vault.secretPath or spec.upstreamSecret, but not both.
 */
export interface SchemaReplicationSpecUpstreamSecret {
    /**
     * Name of the referent.
     * This field is effectively required, but due to backwards compatibility is
     * allowed to be empty. Instances of this type with an empty value here are
     * almost certainly wrong.
     * TODO: Add other useful fields. apiVersion, kind, uid?
     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     * TODO: Drop `kubebuilder:default` when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
     */
    name?: pulumi.Input<string>;
}
/**
 * Defines a Secret which contains credentials to be used for schema replication.
 * The Secret must contain the keys `username` and `password` in its Data field, or operator will error.
 * Have to set either secretBackend.vault.secretPath or spec.upstreamSecret, but not both.
 */
export interface SchemaReplicationSpecUpstreamSecretPatch {
    /**
     * Name of the referent.
     * This field is effectively required, but due to backwards compatibility is
     * allowed to be empty. Instances of this type with an empty value here are
     * almost certainly wrong.
     * TODO: Add other useful fields. apiVersion, kind, uid?
     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     * TODO: Drop `kubebuilder:default` when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
     */
    name?: pulumi.Input<string>;
}
/**
 * SchemaReplicationStatus defines the observed state of SchemaReplication
 */
export interface SchemaReplicationStatus {
    conditions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.SchemaReplicationStatusConditions>[]>;
    /**
     * observedGeneration is the most recent successful generation observed for this Queue. It corresponds to the
     * Queue's generation, which is updated on mutation by the API Server.
     */
    observedGeneration?: pulumi.Input<number>;
}
export interface SchemaReplicationStatusConditions {
    /**
     * The last time this Condition status changed.
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
     * Type indicates the scope of the custom resource status addressed by the condition.
     */
    type?: pulumi.Input<string>;
}
/**
 * Shovel is the Schema for the shovels API
 */
export interface Shovel {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: pulumi.Input<"rabbitmq.com/v1beta1">;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: pulumi.Input<"Shovel">;
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
    spec?: pulumi.Input<inputs.rabbitmq.v1beta1.ShovelSpec>;
    status?: pulumi.Input<inputs.rabbitmq.v1beta1.ShovelStatus>;
}
/**
 * ShovelSpec defines the desired state of Shovel
 * For how to configure Shovel, see: https://www.rabbitmq.com/shovel.html.
 */
export interface ShovelSpec {
    ackMode?: pulumi.Input<string>;
    addForwardHeaders?: pulumi.Input<boolean>;
    deleteAfter?: pulumi.Input<string>;
    destAddForwardHeaders?: pulumi.Input<boolean>;
    destAddTimestampHeader?: pulumi.Input<boolean>;
    /**
     * amqp10 configuration; required if destProtocol is amqp10
     */
    destAddress?: pulumi.Input<string>;
    /**
     * amqp10 configuration
     */
    destApplicationProperties?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * amqp091 configuration
     */
    destExchange?: pulumi.Input<string>;
    /**
     * amqp091 configuration
     */
    destExchangeKey?: pulumi.Input<string>;
    /**
     * amqp10 configuration
     */
    destMessageAnnotations?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * amqp10 configuration
     */
    destProperties?: pulumi.Input<{
        [key: string]: any;
    }>;
    destProtocol?: pulumi.Input<string>;
    /**
     * amqp091 configuration
     */
    destPublishProperties?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * amqp091 configuration
     */
    destQueue?: pulumi.Input<string>;
    /**
     * Required property; cannot be updated
     */
    name?: pulumi.Input<string>;
    prefetchCount?: pulumi.Input<number>;
    rabbitmqClusterReference?: pulumi.Input<inputs.rabbitmq.v1beta1.ShovelSpecRabbitmqClusterReference>;
    reconnectDelay?: pulumi.Input<number>;
    /**
     * amqp10 configuration; required if srcProtocol is amqp10
     */
    srcAddress?: pulumi.Input<string>;
    /**
     * amqp091 configuration
     */
    srcConsumerArgs?: pulumi.Input<{
        [key: string]: any;
    }>;
    srcDeleteAfter?: pulumi.Input<string>;
    /**
     * amqp091 configuration
     */
    srcExchange?: pulumi.Input<string>;
    /**
     * amqp091 configuration
     */
    srcExchangeKey?: pulumi.Input<string>;
    srcPrefetchCount?: pulumi.Input<number>;
    srcProtocol?: pulumi.Input<string>;
    /**
     * amqp091 configuration
     */
    srcQueue?: pulumi.Input<string>;
    uriSecret?: pulumi.Input<inputs.rabbitmq.v1beta1.ShovelSpecUriSecret>;
    /**
     * Default to vhost '/'; cannot be updated
     */
    vhost?: pulumi.Input<string>;
}
/**
 * ShovelSpec defines the desired state of Shovel
 * For how to configure Shovel, see: https://www.rabbitmq.com/shovel.html.
 */
export interface ShovelSpecPatch {
    ackMode?: pulumi.Input<string>;
    addForwardHeaders?: pulumi.Input<boolean>;
    deleteAfter?: pulumi.Input<string>;
    destAddForwardHeaders?: pulumi.Input<boolean>;
    destAddTimestampHeader?: pulumi.Input<boolean>;
    /**
     * amqp10 configuration; required if destProtocol is amqp10
     */
    destAddress?: pulumi.Input<string>;
    /**
     * amqp10 configuration
     */
    destApplicationProperties?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * amqp091 configuration
     */
    destExchange?: pulumi.Input<string>;
    /**
     * amqp091 configuration
     */
    destExchangeKey?: pulumi.Input<string>;
    /**
     * amqp10 configuration
     */
    destMessageAnnotations?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * amqp10 configuration
     */
    destProperties?: pulumi.Input<{
        [key: string]: any;
    }>;
    destProtocol?: pulumi.Input<string>;
    /**
     * amqp091 configuration
     */
    destPublishProperties?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * amqp091 configuration
     */
    destQueue?: pulumi.Input<string>;
    /**
     * Required property; cannot be updated
     */
    name?: pulumi.Input<string>;
    prefetchCount?: pulumi.Input<number>;
    rabbitmqClusterReference?: pulumi.Input<inputs.rabbitmq.v1beta1.ShovelSpecRabbitmqClusterReferencePatch>;
    reconnectDelay?: pulumi.Input<number>;
    /**
     * amqp10 configuration; required if srcProtocol is amqp10
     */
    srcAddress?: pulumi.Input<string>;
    /**
     * amqp091 configuration
     */
    srcConsumerArgs?: pulumi.Input<{
        [key: string]: any;
    }>;
    srcDeleteAfter?: pulumi.Input<string>;
    /**
     * amqp091 configuration
     */
    srcExchange?: pulumi.Input<string>;
    /**
     * amqp091 configuration
     */
    srcExchangeKey?: pulumi.Input<string>;
    srcPrefetchCount?: pulumi.Input<number>;
    srcProtocol?: pulumi.Input<string>;
    /**
     * amqp091 configuration
     */
    srcQueue?: pulumi.Input<string>;
    uriSecret?: pulumi.Input<inputs.rabbitmq.v1beta1.ShovelSpecUriSecretPatch>;
    /**
     * Default to vhost '/'; cannot be updated
     */
    vhost?: pulumi.Input<string>;
}
/**
 * Reference to the RabbitmqCluster that this Shovel will be created in.
 * Required property.
 */
export interface ShovelSpecRabbitmqClusterReference {
    connectionSecret?: pulumi.Input<inputs.rabbitmq.v1beta1.ShovelSpecRabbitmqClusterReferenceConnectionSecret>;
    /**
     * The name of the RabbitMQ cluster to reference.
     * Have to set either name or connectionSecret, but not both.
     */
    name?: pulumi.Input<string>;
    /**
     * The namespace of the RabbitMQ cluster to reference.
     * Defaults to the namespace of the requested resource if omitted.
     */
    namespace?: pulumi.Input<string>;
}
/**
 * Secret contains the http management uri for the RabbitMQ cluster.
 * The Secret must contain the key `uri`, `username` and `password` or operator will error.
 * Have to set either name or connectionSecret, but not both.
 */
export interface ShovelSpecRabbitmqClusterReferenceConnectionSecret {
    /**
     * Name of the referent.
     * This field is effectively required, but due to backwards compatibility is
     * allowed to be empty. Instances of this type with an empty value here are
     * almost certainly wrong.
     * TODO: Add other useful fields. apiVersion, kind, uid?
     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     * TODO: Drop `kubebuilder:default` when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
     */
    name?: pulumi.Input<string>;
}
/**
 * Secret contains the http management uri for the RabbitMQ cluster.
 * The Secret must contain the key `uri`, `username` and `password` or operator will error.
 * Have to set either name or connectionSecret, but not both.
 */
export interface ShovelSpecRabbitmqClusterReferenceConnectionSecretPatch {
    /**
     * Name of the referent.
     * This field is effectively required, but due to backwards compatibility is
     * allowed to be empty. Instances of this type with an empty value here are
     * almost certainly wrong.
     * TODO: Add other useful fields. apiVersion, kind, uid?
     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     * TODO: Drop `kubebuilder:default` when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
     */
    name?: pulumi.Input<string>;
}
/**
 * Reference to the RabbitmqCluster that this Shovel will be created in.
 * Required property.
 */
export interface ShovelSpecRabbitmqClusterReferencePatch {
    connectionSecret?: pulumi.Input<inputs.rabbitmq.v1beta1.ShovelSpecRabbitmqClusterReferenceConnectionSecretPatch>;
    /**
     * The name of the RabbitMQ cluster to reference.
     * Have to set either name or connectionSecret, but not both.
     */
    name?: pulumi.Input<string>;
    /**
     * The namespace of the RabbitMQ cluster to reference.
     * Defaults to the namespace of the requested resource if omitted.
     */
    namespace?: pulumi.Input<string>;
}
/**
 * Secret contains the AMQP URI(s) to configure Shovel destination and source.
 * The Secret must contain the key `destUri` and `srcUri` or operator will error.
 * Both fields should be one or multiple uris separated by ','.
 * Required property.
 */
export interface ShovelSpecUriSecret {
    /**
     * Name of the referent.
     * This field is effectively required, but due to backwards compatibility is
     * allowed to be empty. Instances of this type with an empty value here are
     * almost certainly wrong.
     * TODO: Add other useful fields. apiVersion, kind, uid?
     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     * TODO: Drop `kubebuilder:default` when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
     */
    name?: pulumi.Input<string>;
}
/**
 * Secret contains the AMQP URI(s) to configure Shovel destination and source.
 * The Secret must contain the key `destUri` and `srcUri` or operator will error.
 * Both fields should be one or multiple uris separated by ','.
 * Required property.
 */
export interface ShovelSpecUriSecretPatch {
    /**
     * Name of the referent.
     * This field is effectively required, but due to backwards compatibility is
     * allowed to be empty. Instances of this type with an empty value here are
     * almost certainly wrong.
     * TODO: Add other useful fields. apiVersion, kind, uid?
     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     * TODO: Drop `kubebuilder:default` when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
     */
    name?: pulumi.Input<string>;
}
/**
 * ShovelStatus defines the observed state of Shovel
 */
export interface ShovelStatus {
    conditions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.ShovelStatusConditions>[]>;
    /**
     * observedGeneration is the most recent successful generation observed for this Shovel. It corresponds to the
     * Shovel's generation, which is updated on mutation by the API Server.
     */
    observedGeneration?: pulumi.Input<number>;
}
export interface ShovelStatusConditions {
    /**
     * The last time this Condition status changed.
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
     * Type indicates the scope of the custom resource status addressed by the condition.
     */
    type?: pulumi.Input<string>;
}
/**
 * TopicPermission is the Schema for the topicpermissions API
 */
export interface TopicPermission {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: pulumi.Input<"rabbitmq.com/v1beta1">;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: pulumi.Input<"TopicPermission">;
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
    spec?: pulumi.Input<inputs.rabbitmq.v1beta1.TopicPermissionSpec>;
    status?: pulumi.Input<inputs.rabbitmq.v1beta1.TopicPermissionStatus>;
}
/**
 * TopicPermissionSpec defines the desired state of TopicPermission
 */
export interface TopicPermissionSpec {
    permissions?: pulumi.Input<inputs.rabbitmq.v1beta1.TopicPermissionSpecPermissions>;
    rabbitmqClusterReference?: pulumi.Input<inputs.rabbitmq.v1beta1.TopicPermissionSpecRabbitmqClusterReference>;
    /**
     * Name of an existing user; must provide user or userReference, else create/update will fail; cannot be updated.
     */
    user?: pulumi.Input<string>;
    userReference?: pulumi.Input<inputs.rabbitmq.v1beta1.TopicPermissionSpecUserReference>;
    /**
     * Name of an existing vhost; required property; cannot be updated.
     */
    vhost?: pulumi.Input<string>;
}
/**
 * TopicPermissionSpec defines the desired state of TopicPermission
 */
export interface TopicPermissionSpecPatch {
    permissions?: pulumi.Input<inputs.rabbitmq.v1beta1.TopicPermissionSpecPermissionsPatch>;
    rabbitmqClusterReference?: pulumi.Input<inputs.rabbitmq.v1beta1.TopicPermissionSpecRabbitmqClusterReferencePatch>;
    /**
     * Name of an existing user; must provide user or userReference, else create/update will fail; cannot be updated.
     */
    user?: pulumi.Input<string>;
    userReference?: pulumi.Input<inputs.rabbitmq.v1beta1.TopicPermissionSpecUserReferencePatch>;
    /**
     * Name of an existing vhost; required property; cannot be updated.
     */
    vhost?: pulumi.Input<string>;
}
/**
 * Permissions to grant to the user to a topic exchange; required property.
 */
export interface TopicPermissionSpecPermissions {
    /**
     * Name of a topic exchange; required property; cannot be updated.
     */
    exchange?: pulumi.Input<string>;
    read?: pulumi.Input<string>;
    write?: pulumi.Input<string>;
}
/**
 * Permissions to grant to the user to a topic exchange; required property.
 */
export interface TopicPermissionSpecPermissionsPatch {
    /**
     * Name of a topic exchange; required property; cannot be updated.
     */
    exchange?: pulumi.Input<string>;
    read?: pulumi.Input<string>;
    write?: pulumi.Input<string>;
}
/**
 * Reference to the RabbitmqCluster that both the provided user and vhost are.
 * Required property.
 */
export interface TopicPermissionSpecRabbitmqClusterReference {
    connectionSecret?: pulumi.Input<inputs.rabbitmq.v1beta1.TopicPermissionSpecRabbitmqClusterReferenceConnectionSecret>;
    /**
     * The name of the RabbitMQ cluster to reference.
     * Have to set either name or connectionSecret, but not both.
     */
    name?: pulumi.Input<string>;
    /**
     * The namespace of the RabbitMQ cluster to reference.
     * Defaults to the namespace of the requested resource if omitted.
     */
    namespace?: pulumi.Input<string>;
}
/**
 * Secret contains the http management uri for the RabbitMQ cluster.
 * The Secret must contain the key `uri`, `username` and `password` or operator will error.
 * Have to set either name or connectionSecret, but not both.
 */
export interface TopicPermissionSpecRabbitmqClusterReferenceConnectionSecret {
    /**
     * Name of the referent.
     * This field is effectively required, but due to backwards compatibility is
     * allowed to be empty. Instances of this type with an empty value here are
     * almost certainly wrong.
     * TODO: Add other useful fields. apiVersion, kind, uid?
     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     * TODO: Drop `kubebuilder:default` when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
     */
    name?: pulumi.Input<string>;
}
/**
 * Secret contains the http management uri for the RabbitMQ cluster.
 * The Secret must contain the key `uri`, `username` and `password` or operator will error.
 * Have to set either name or connectionSecret, but not both.
 */
export interface TopicPermissionSpecRabbitmqClusterReferenceConnectionSecretPatch {
    /**
     * Name of the referent.
     * This field is effectively required, but due to backwards compatibility is
     * allowed to be empty. Instances of this type with an empty value here are
     * almost certainly wrong.
     * TODO: Add other useful fields. apiVersion, kind, uid?
     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     * TODO: Drop `kubebuilder:default` when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
     */
    name?: pulumi.Input<string>;
}
/**
 * Reference to the RabbitmqCluster that both the provided user and vhost are.
 * Required property.
 */
export interface TopicPermissionSpecRabbitmqClusterReferencePatch {
    connectionSecret?: pulumi.Input<inputs.rabbitmq.v1beta1.TopicPermissionSpecRabbitmqClusterReferenceConnectionSecretPatch>;
    /**
     * The name of the RabbitMQ cluster to reference.
     * Have to set either name or connectionSecret, but not both.
     */
    name?: pulumi.Input<string>;
    /**
     * The namespace of the RabbitMQ cluster to reference.
     * Defaults to the namespace of the requested resource if omitted.
     */
    namespace?: pulumi.Input<string>;
}
/**
 * Reference to an existing user.rabbitmq.com object; must provide user or userReference, else create/update will fail; cannot be updated.
 */
export interface TopicPermissionSpecUserReference {
    /**
     * Name of the referent.
     * This field is effectively required, but due to backwards compatibility is
     * allowed to be empty. Instances of this type with an empty value here are
     * almost certainly wrong.
     * TODO: Add other useful fields. apiVersion, kind, uid?
     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     * TODO: Drop `kubebuilder:default` when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
     */
    name?: pulumi.Input<string>;
}
/**
 * Reference to an existing user.rabbitmq.com object; must provide user or userReference, else create/update will fail; cannot be updated.
 */
export interface TopicPermissionSpecUserReferencePatch {
    /**
     * Name of the referent.
     * This field is effectively required, but due to backwards compatibility is
     * allowed to be empty. Instances of this type with an empty value here are
     * almost certainly wrong.
     * TODO: Add other useful fields. apiVersion, kind, uid?
     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     * TODO: Drop `kubebuilder:default` when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
     */
    name?: pulumi.Input<string>;
}
/**
 * TopicPermissionStatus defines the observed state of TopicPermission
 */
export interface TopicPermissionStatus {
    conditions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.TopicPermissionStatusConditions>[]>;
    /**
     * observedGeneration is the most recent successful generation observed for this TopicPermission. It corresponds to the
     * TopicPermission's generation, which is updated on mutation by the API Server.
     */
    observedGeneration?: pulumi.Input<number>;
}
export interface TopicPermissionStatusConditions {
    /**
     * The last time this Condition status changed.
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
     * Type indicates the scope of the custom resource status addressed by the condition.
     */
    type?: pulumi.Input<string>;
}
/**
 * User is the Schema for the users API.
 */
export interface User {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: pulumi.Input<"rabbitmq.com/v1beta1">;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: pulumi.Input<"User">;
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
    spec?: pulumi.Input<inputs.rabbitmq.v1beta1.UserSpec>;
    status?: pulumi.Input<inputs.rabbitmq.v1beta1.UserStatus>;
}
/**
 * Spec configures the desired state of the User object.
 */
export interface UserSpec {
    importCredentialsSecret?: pulumi.Input<inputs.rabbitmq.v1beta1.UserSpecImportCredentialsSecret>;
    rabbitmqClusterReference?: pulumi.Input<inputs.rabbitmq.v1beta1.UserSpecRabbitmqClusterReference>;
    /**
     * List of permissions tags to associate with the user. This determines the level of
     * access to the RabbitMQ management UI granted to the user. Omitting this field will
     * lead to a user than can still connect to the cluster through messaging protocols,
     * but cannot perform any management actions.
     * For more information, see https://www.rabbitmq.com/management.html#permissions.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * Defines a Secret containing the credentials for the User. If this field is omitted, random a username and
 * password will be generated. The Secret must have the following keys in its Data field:
 *
 *
 *  * `username` – Must be present or the import will fail.
 *  * `passwordHash` – The SHA-512 hash of the password. If the hash is an empty string, a passwordless user
 *    will be created. For more information, see https://www.rabbitmq.com/docs/passwords.
 *  * `password` – Plain-text password. Will be used only if the `passwordHash` key is missing.
 *
 *
 * Note that this import only occurs at creation time, and is ignored once a password has been set on a User.
 */
export interface UserSpecImportCredentialsSecret {
    /**
     * Name of the referent.
     * This field is effectively required, but due to backwards compatibility is
     * allowed to be empty. Instances of this type with an empty value here are
     * almost certainly wrong.
     * TODO: Add other useful fields. apiVersion, kind, uid?
     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     * TODO: Drop `kubebuilder:default` when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
     */
    name?: pulumi.Input<string>;
}
/**
 * Defines a Secret containing the credentials for the User. If this field is omitted, random a username and
 * password will be generated. The Secret must have the following keys in its Data field:
 *
 *
 *  * `username` – Must be present or the import will fail.
 *  * `passwordHash` – The SHA-512 hash of the password. If the hash is an empty string, a passwordless user
 *    will be created. For more information, see https://www.rabbitmq.com/docs/passwords.
 *  * `password` – Plain-text password. Will be used only if the `passwordHash` key is missing.
 *
 *
 * Note that this import only occurs at creation time, and is ignored once a password has been set on a User.
 */
export interface UserSpecImportCredentialsSecretPatch {
    /**
     * Name of the referent.
     * This field is effectively required, but due to backwards compatibility is
     * allowed to be empty. Instances of this type with an empty value here are
     * almost certainly wrong.
     * TODO: Add other useful fields. apiVersion, kind, uid?
     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     * TODO: Drop `kubebuilder:default` when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
     */
    name?: pulumi.Input<string>;
}
/**
 * Spec configures the desired state of the User object.
 */
export interface UserSpecPatch {
    importCredentialsSecret?: pulumi.Input<inputs.rabbitmq.v1beta1.UserSpecImportCredentialsSecretPatch>;
    rabbitmqClusterReference?: pulumi.Input<inputs.rabbitmq.v1beta1.UserSpecRabbitmqClusterReferencePatch>;
    /**
     * List of permissions tags to associate with the user. This determines the level of
     * access to the RabbitMQ management UI granted to the user. Omitting this field will
     * lead to a user than can still connect to the cluster through messaging protocols,
     * but cannot perform any management actions.
     * For more information, see https://www.rabbitmq.com/management.html#permissions.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * Reference to the RabbitmqCluster that the user will be created for. This cluster must
 * exist for the User object to be created.
 */
export interface UserSpecRabbitmqClusterReference {
    connectionSecret?: pulumi.Input<inputs.rabbitmq.v1beta1.UserSpecRabbitmqClusterReferenceConnectionSecret>;
    /**
     * The name of the RabbitMQ cluster to reference.
     * Have to set either name or connectionSecret, but not both.
     */
    name?: pulumi.Input<string>;
    /**
     * The namespace of the RabbitMQ cluster to reference.
     * Defaults to the namespace of the requested resource if omitted.
     */
    namespace?: pulumi.Input<string>;
}
/**
 * Secret contains the http management uri for the RabbitMQ cluster.
 * The Secret must contain the key `uri`, `username` and `password` or operator will error.
 * Have to set either name or connectionSecret, but not both.
 */
export interface UserSpecRabbitmqClusterReferenceConnectionSecret {
    /**
     * Name of the referent.
     * This field is effectively required, but due to backwards compatibility is
     * allowed to be empty. Instances of this type with an empty value here are
     * almost certainly wrong.
     * TODO: Add other useful fields. apiVersion, kind, uid?
     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     * TODO: Drop `kubebuilder:default` when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
     */
    name?: pulumi.Input<string>;
}
/**
 * Secret contains the http management uri for the RabbitMQ cluster.
 * The Secret must contain the key `uri`, `username` and `password` or operator will error.
 * Have to set either name or connectionSecret, but not both.
 */
export interface UserSpecRabbitmqClusterReferenceConnectionSecretPatch {
    /**
     * Name of the referent.
     * This field is effectively required, but due to backwards compatibility is
     * allowed to be empty. Instances of this type with an empty value here are
     * almost certainly wrong.
     * TODO: Add other useful fields. apiVersion, kind, uid?
     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     * TODO: Drop `kubebuilder:default` when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
     */
    name?: pulumi.Input<string>;
}
/**
 * Reference to the RabbitmqCluster that the user will be created for. This cluster must
 * exist for the User object to be created.
 */
export interface UserSpecRabbitmqClusterReferencePatch {
    connectionSecret?: pulumi.Input<inputs.rabbitmq.v1beta1.UserSpecRabbitmqClusterReferenceConnectionSecretPatch>;
    /**
     * The name of the RabbitMQ cluster to reference.
     * Have to set either name or connectionSecret, but not both.
     */
    name?: pulumi.Input<string>;
    /**
     * The namespace of the RabbitMQ cluster to reference.
     * Defaults to the namespace of the requested resource if omitted.
     */
    namespace?: pulumi.Input<string>;
}
/**
 * Status exposes the observed state of the User object.
 */
export interface UserStatus {
    conditions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.UserStatusConditions>[]>;
    credentials?: pulumi.Input<inputs.rabbitmq.v1beta1.UserStatusCredentials>;
    /**
     * observedGeneration is the most recent successful generation observed for this User. It corresponds to the
     * User's generation, which is updated on mutation by the API Server.
     */
    observedGeneration?: pulumi.Input<number>;
    /**
     * Provide rabbitmq Username
     */
    username?: pulumi.Input<string>;
}
export interface UserStatusConditions {
    /**
     * The last time this Condition status changed.
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
     * Type indicates the scope of the custom resource status addressed by the condition.
     */
    type?: pulumi.Input<string>;
}
/**
 * Provides a reference to a Secret object containing the user credentials.
 */
export interface UserStatusCredentials {
    /**
     * Name of the referent.
     * This field is effectively required, but due to backwards compatibility is
     * allowed to be empty. Instances of this type with an empty value here are
     * almost certainly wrong.
     * TODO: Add other useful fields. apiVersion, kind, uid?
     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     * TODO: Drop `kubebuilder:default` when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
     */
    name?: pulumi.Input<string>;
}
/**
 * Vhost is the Schema for the vhosts API
 */
export interface Vhost {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: pulumi.Input<"rabbitmq.com/v1beta1">;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: pulumi.Input<"Vhost">;
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
    spec?: pulumi.Input<inputs.rabbitmq.v1beta1.VhostSpec>;
    status?: pulumi.Input<inputs.rabbitmq.v1beta1.VhostStatus>;
}
/**
 * VhostSpec defines the desired state of Vhost
 */
export interface VhostSpec {
    /**
     * Default queue type for this vhost; can be set to quorum, classic or stream.
     * Supported in RabbitMQ 3.11.12 or above.
     */
    defaultQueueType?: pulumi.Input<string>;
    /**
     * Name of the vhost; see https://www.rabbitmq.com/vhosts.html.
     */
    name?: pulumi.Input<string>;
    rabbitmqClusterReference?: pulumi.Input<inputs.rabbitmq.v1beta1.VhostSpecRabbitmqClusterReference>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    tracing?: pulumi.Input<boolean>;
}
/**
 * VhostSpec defines the desired state of Vhost
 */
export interface VhostSpecPatch {
    /**
     * Default queue type for this vhost; can be set to quorum, classic or stream.
     * Supported in RabbitMQ 3.11.12 or above.
     */
    defaultQueueType?: pulumi.Input<string>;
    /**
     * Name of the vhost; see https://www.rabbitmq.com/vhosts.html.
     */
    name?: pulumi.Input<string>;
    rabbitmqClusterReference?: pulumi.Input<inputs.rabbitmq.v1beta1.VhostSpecRabbitmqClusterReferencePatch>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    tracing?: pulumi.Input<boolean>;
}
/**
 * Reference to the RabbitmqCluster that the vhost will be created in.
 * Required property.
 */
export interface VhostSpecRabbitmqClusterReference {
    connectionSecret?: pulumi.Input<inputs.rabbitmq.v1beta1.VhostSpecRabbitmqClusterReferenceConnectionSecret>;
    /**
     * The name of the RabbitMQ cluster to reference.
     * Have to set either name or connectionSecret, but not both.
     */
    name?: pulumi.Input<string>;
    /**
     * The namespace of the RabbitMQ cluster to reference.
     * Defaults to the namespace of the requested resource if omitted.
     */
    namespace?: pulumi.Input<string>;
}
/**
 * Secret contains the http management uri for the RabbitMQ cluster.
 * The Secret must contain the key `uri`, `username` and `password` or operator will error.
 * Have to set either name or connectionSecret, but not both.
 */
export interface VhostSpecRabbitmqClusterReferenceConnectionSecret {
    /**
     * Name of the referent.
     * This field is effectively required, but due to backwards compatibility is
     * allowed to be empty. Instances of this type with an empty value here are
     * almost certainly wrong.
     * TODO: Add other useful fields. apiVersion, kind, uid?
     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     * TODO: Drop `kubebuilder:default` when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
     */
    name?: pulumi.Input<string>;
}
/**
 * Secret contains the http management uri for the RabbitMQ cluster.
 * The Secret must contain the key `uri`, `username` and `password` or operator will error.
 * Have to set either name or connectionSecret, but not both.
 */
export interface VhostSpecRabbitmqClusterReferenceConnectionSecretPatch {
    /**
     * Name of the referent.
     * This field is effectively required, but due to backwards compatibility is
     * allowed to be empty. Instances of this type with an empty value here are
     * almost certainly wrong.
     * TODO: Add other useful fields. apiVersion, kind, uid?
     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     * TODO: Drop `kubebuilder:default` when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
     */
    name?: pulumi.Input<string>;
}
/**
 * Reference to the RabbitmqCluster that the vhost will be created in.
 * Required property.
 */
export interface VhostSpecRabbitmqClusterReferencePatch {
    connectionSecret?: pulumi.Input<inputs.rabbitmq.v1beta1.VhostSpecRabbitmqClusterReferenceConnectionSecretPatch>;
    /**
     * The name of the RabbitMQ cluster to reference.
     * Have to set either name or connectionSecret, but not both.
     */
    name?: pulumi.Input<string>;
    /**
     * The namespace of the RabbitMQ cluster to reference.
     * Defaults to the namespace of the requested resource if omitted.
     */
    namespace?: pulumi.Input<string>;
}
/**
 * VhostStatus defines the observed state of Vhost
 */
export interface VhostStatus {
    conditions?: pulumi.Input<pulumi.Input<inputs.rabbitmq.v1beta1.VhostStatusConditions>[]>;
    /**
     * observedGeneration is the most recent successful generation observed for this Vhost. It corresponds to the
     * Vhost's generation, which is updated on mutation by the API Server.
     */
    observedGeneration?: pulumi.Input<number>;
}
export interface VhostStatusConditions {
    /**
     * The last time this Condition status changed.
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
     * Type indicates the scope of the custom resource status addressed by the condition.
     */
    type?: pulumi.Input<string>;
}
