import * as outputs from "../types/output";
export declare namespace karpenter {
    namespace v1 {
        /**
         * EC2NodeClass is the Schema for the EC2NodeClass API
         */
        interface EC2NodeClass {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "karpenter.k8s.aws/v1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "EC2NodeClass";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.karpenter.v1.EC2NodeClassSpec;
            status: outputs.karpenter.v1.EC2NodeClassStatus;
        }
        /**
         * EC2NodeClassSpec is the top level specification for the AWS Karpenter Provider.
         * This will contain configuration necessary to launch instances in AWS.
         */
        interface EC2NodeClassSpec {
            /**
             * AMIFamily dictates the UserData format and default BlockDeviceMappings used when generating launch templates.
             * This field is optional when using an alias amiSelectorTerm, and the value will be inferred from the alias'
             * family. When an alias is specified, this field may only be set to its corresponding family or 'Custom'. If no
             * alias is specified, this field is required.
             * NOTE: We ignore the AMIFamily for hashing here because we hash the AMIFamily dynamically by using the alias using
             * the AMIFamily() helper function
             */
            amiFamily: string;
            /**
             * AMISelectorTerms is a list of or ami selector terms. The terms are ORed.
             */
            amiSelectorTerms: outputs.karpenter.v1.EC2NodeClassSpecAmiSelectorTerms[];
            /**
             * AssociatePublicIPAddress controls if public IP addresses are assigned to instances that are launched with the nodeclass.
             */
            associatePublicIPAddress: boolean;
            /**
             * BlockDeviceMappings to be applied to provisioned nodes.
             */
            blockDeviceMappings: outputs.karpenter.v1.EC2NodeClassSpecBlockDeviceMappings[];
            /**
             * CapacityReservationSelectorTerms is a list of capacity reservation selector terms. Each term is ORed together to
             * determine the set of eligible capacity reservations.
             */
            capacityReservationSelectorTerms: outputs.karpenter.v1.EC2NodeClassSpecCapacityReservationSelectorTerms[];
            /**
             * Context is a Reserved field in EC2 APIs
             * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet.html
             */
            context: string;
            /**
             * DetailedMonitoring controls if detailed monitoring is enabled for instances that are launched
             */
            detailedMonitoring: boolean;
            /**
             * InstanceProfile is the AWS entity that instances use.
             * This field is mutually exclusive from role.
             * The instance profile should already have a role assigned to it that Karpenter
             *  has PassRole permission on for instance launch using this instanceProfile to succeed.
             */
            instanceProfile: string;
            /**
             * InstanceStorePolicy specifies how to handle instance-store disks.
             */
            instanceStorePolicy: string;
            kubelet: outputs.karpenter.v1.EC2NodeClassSpecKubelet;
            metadataOptions: outputs.karpenter.v1.EC2NodeClassSpecMetadataOptions;
            /**
             * Role is the AWS identity that nodes use. This field is immutable.
             * This field is mutually exclusive from instanceProfile.
             * Marking this field as immutable avoids concerns around terminating managed instance profiles from running instances.
             * This field may be made mutable in the future, assuming the correct garbage collection and drift handling is implemented
             * for the old instance profiles on an update.
             */
            role: string;
            /**
             * SecurityGroupSelectorTerms is a list of security group selector terms. The terms are ORed.
             */
            securityGroupSelectorTerms: outputs.karpenter.v1.EC2NodeClassSpecSecurityGroupSelectorTerms[];
            /**
             * SubnetSelectorTerms is a list of subnet selector terms. The terms are ORed.
             */
            subnetSelectorTerms: outputs.karpenter.v1.EC2NodeClassSpecSubnetSelectorTerms[];
            /**
             * Tags to be applied on ec2 resources like instances and launch templates.
             */
            tags: {
                [key: string]: string;
            };
            /**
             * UserData to be applied to the provisioned nodes.
             * It must be in the appropriate format based on the AMIFamily in use. Karpenter will merge certain fields into
             * this UserData to ensure nodes are being provisioned with the correct configuration.
             */
            userData: string;
        }
        /**
         * AMISelectorTerm defines selection logic for an ami used by Karpenter to launch nodes.
         * If multiple fields are used for selection, the requirements are ANDed.
         */
        interface EC2NodeClassSpecAmiSelectorTerms {
            /**
             * Alias specifies which EKS optimized AMI to select.
             * Each alias consists of a family and an AMI version, specified as "family@version".
             * Valid families include: al2, al2023, bottlerocket, windows2019, and windows2022.
             * The version can either be pinned to a specific AMI release, with that AMIs version format (ex: "al2023@v20240625" or "bottlerocket@v1.10.0").
             * The version can also be set to "latest" for any family. Setting the version to latest will result in drift when a new AMI is released. This is **not** recommended for production environments.
             * Note: The Windows families do **not** support version pinning, and only latest may be used.
             */
            alias: string;
            /**
             * ID is the ami id in EC2
             */
            id: string;
            /**
             * Name is the ami name in EC2.
             * This value is the name field, which is different from the name tag.
             */
            name: string;
            /**
             * Owner is the owner for the ami.
             * You can specify a combination of AWS account IDs, "self", "amazon", and "aws-marketplace"
             */
            owner: string;
            /**
             * SSMParameter is the name (or ARN) of the SSM parameter containing the Image ID.
             */
            ssmParameter: string;
            /**
             * Tags is a map of key/value tags used to select amis.
             * Specifying '*' for a value selects all values for a given tag key.
             */
            tags: {
                [key: string]: string;
            };
        }
        /**
         * AMISelectorTerm defines selection logic for an ami used by Karpenter to launch nodes.
         * If multiple fields are used for selection, the requirements are ANDed.
         */
        interface EC2NodeClassSpecAmiSelectorTermsPatch {
            /**
             * Alias specifies which EKS optimized AMI to select.
             * Each alias consists of a family and an AMI version, specified as "family@version".
             * Valid families include: al2, al2023, bottlerocket, windows2019, and windows2022.
             * The version can either be pinned to a specific AMI release, with that AMIs version format (ex: "al2023@v20240625" or "bottlerocket@v1.10.0").
             * The version can also be set to "latest" for any family. Setting the version to latest will result in drift when a new AMI is released. This is **not** recommended for production environments.
             * Note: The Windows families do **not** support version pinning, and only latest may be used.
             */
            alias: string;
            /**
             * ID is the ami id in EC2
             */
            id: string;
            /**
             * Name is the ami name in EC2.
             * This value is the name field, which is different from the name tag.
             */
            name: string;
            /**
             * Owner is the owner for the ami.
             * You can specify a combination of AWS account IDs, "self", "amazon", and "aws-marketplace"
             */
            owner: string;
            /**
             * SSMParameter is the name (or ARN) of the SSM parameter containing the Image ID.
             */
            ssmParameter: string;
            /**
             * Tags is a map of key/value tags used to select amis.
             * Specifying '*' for a value selects all values for a given tag key.
             */
            tags: {
                [key: string]: string;
            };
        }
        interface EC2NodeClassSpecBlockDeviceMappings {
            /**
             * The device name (for example, /dev/sdh or xvdh).
             */
            deviceName: string;
            ebs: outputs.karpenter.v1.EC2NodeClassSpecBlockDeviceMappingsEbs;
            /**
             * RootVolume is a flag indicating if this device is mounted as kubelet root dir. You can
             * configure at most one root volume in BlockDeviceMappings.
             */
            rootVolume: boolean;
        }
        /**
         * EBS contains parameters used to automatically set up EBS volumes when an instance is launched.
         */
        interface EC2NodeClassSpecBlockDeviceMappingsEbs {
            /**
             * DeleteOnTermination indicates whether the EBS volume is deleted on instance termination.
             */
            deleteOnTermination: boolean;
            /**
             * Encrypted indicates whether the EBS volume is encrypted. Encrypted volumes can only
             * be attached to instances that support Amazon EBS encryption. If you are creating
             * a volume from a snapshot, you can't specify an encryption value.
             */
            encrypted: boolean;
            /**
             * IOPS is the number of I/O operations per second (IOPS). For gp3, io1, and io2 volumes,
             * this represents the number of IOPS that are provisioned for the volume. For
             * gp2 volumes, this represents the baseline performance of the volume and the
             * rate at which the volume accumulates I/O credits for bursting.
             *
             * The following are the supported values for each volume type:
             *
             *    * gp3: 3,000-16,000 IOPS
             *
             *    * io1: 100-64,000 IOPS
             *
             *    * io2: 100-64,000 IOPS
             *
             * For io1 and io2 volumes, we guarantee 64,000 IOPS only for Instances built
             * on the Nitro System (https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances).
             * Other instance families guarantee performance up to 32,000 IOPS.
             *
             * This parameter is supported for io1, io2, and gp3 volumes only. This parameter
             * is not supported for gp2, st1, sc1, or standard volumes.
             */
            iops: number;
            /**
             * Identifier (key ID, key alias, key ARN, or alias ARN) of the customer managed KMS key to use for EBS encryption.
             */
            kmsKeyID: string;
            /**
             * SnapshotID is the ID of an EBS snapshot
             */
            snapshotID: string;
            /**
             * Throughput to provision for a gp3 volume, with a maximum of 1,000 MiB/s.
             * Valid Range: Minimum value of 125. Maximum value of 1000.
             */
            throughput: number;
            /**
             * VolumeInitializationRate specifies the Amazon EBS Provisioned Rate for Volume Initialization,
             * in MiB/s, at which to download the snapshot blocks from Amazon S3 to the volume. This is also known as volume
             * initialization. Specifying a volume initialization rate ensures that the volume is initialized at a
             * predictable and consistent rate after creation. Only allowed if SnapshotID is set.
             * Valid Range: Minimum value of 100. Maximum value of 300.
             */
            volumeInitializationRate: number;
            /**
             * VolumeSize in `Gi`, `G`, `Ti`, or `T`. You must specify either a snapshot ID or
             * a volume size. The following are the supported volumes sizes for each volume
             * type:
             *
             *    * gp2 and gp3: 1-16,384
             *
             *    * io1 and io2: 4-16,384
             *
             *    * st1 and sc1: 125-16,384
             *
             *    * standard: 1-1,024
             */
            volumeSize: string;
            /**
             * VolumeType of the block device.
             * For more information, see Amazon EBS volume types (https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html)
             * in the Amazon Elastic Compute Cloud User Guide.
             */
            volumeType: string;
        }
        /**
         * EBS contains parameters used to automatically set up EBS volumes when an instance is launched.
         */
        interface EC2NodeClassSpecBlockDeviceMappingsEbsPatch {
            /**
             * DeleteOnTermination indicates whether the EBS volume is deleted on instance termination.
             */
            deleteOnTermination: boolean;
            /**
             * Encrypted indicates whether the EBS volume is encrypted. Encrypted volumes can only
             * be attached to instances that support Amazon EBS encryption. If you are creating
             * a volume from a snapshot, you can't specify an encryption value.
             */
            encrypted: boolean;
            /**
             * IOPS is the number of I/O operations per second (IOPS). For gp3, io1, and io2 volumes,
             * this represents the number of IOPS that are provisioned for the volume. For
             * gp2 volumes, this represents the baseline performance of the volume and the
             * rate at which the volume accumulates I/O credits for bursting.
             *
             * The following are the supported values for each volume type:
             *
             *    * gp3: 3,000-16,000 IOPS
             *
             *    * io1: 100-64,000 IOPS
             *
             *    * io2: 100-64,000 IOPS
             *
             * For io1 and io2 volumes, we guarantee 64,000 IOPS only for Instances built
             * on the Nitro System (https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances).
             * Other instance families guarantee performance up to 32,000 IOPS.
             *
             * This parameter is supported for io1, io2, and gp3 volumes only. This parameter
             * is not supported for gp2, st1, sc1, or standard volumes.
             */
            iops: number;
            /**
             * Identifier (key ID, key alias, key ARN, or alias ARN) of the customer managed KMS key to use for EBS encryption.
             */
            kmsKeyID: string;
            /**
             * SnapshotID is the ID of an EBS snapshot
             */
            snapshotID: string;
            /**
             * Throughput to provision for a gp3 volume, with a maximum of 1,000 MiB/s.
             * Valid Range: Minimum value of 125. Maximum value of 1000.
             */
            throughput: number;
            /**
             * VolumeInitializationRate specifies the Amazon EBS Provisioned Rate for Volume Initialization,
             * in MiB/s, at which to download the snapshot blocks from Amazon S3 to the volume. This is also known as volume
             * initialization. Specifying a volume initialization rate ensures that the volume is initialized at a
             * predictable and consistent rate after creation. Only allowed if SnapshotID is set.
             * Valid Range: Minimum value of 100. Maximum value of 300.
             */
            volumeInitializationRate: number;
            /**
             * VolumeSize in `Gi`, `G`, `Ti`, or `T`. You must specify either a snapshot ID or
             * a volume size. The following are the supported volumes sizes for each volume
             * type:
             *
             *    * gp2 and gp3: 1-16,384
             *
             *    * io1 and io2: 4-16,384
             *
             *    * st1 and sc1: 125-16,384
             *
             *    * standard: 1-1,024
             */
            volumeSize: string;
            /**
             * VolumeType of the block device.
             * For more information, see Amazon EBS volume types (https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html)
             * in the Amazon Elastic Compute Cloud User Guide.
             */
            volumeType: string;
        }
        interface EC2NodeClassSpecBlockDeviceMappingsPatch {
            /**
             * The device name (for example, /dev/sdh or xvdh).
             */
            deviceName: string;
            ebs: outputs.karpenter.v1.EC2NodeClassSpecBlockDeviceMappingsEbsPatch;
            /**
             * RootVolume is a flag indicating if this device is mounted as kubelet root dir. You can
             * configure at most one root volume in BlockDeviceMappings.
             */
            rootVolume: boolean;
        }
        interface EC2NodeClassSpecCapacityReservationSelectorTerms {
            /**
             * ID is the capacity reservation id in EC2
             */
            id: string;
            /**
             * Owner is the owner id for the ami.
             */
            ownerID: string;
            /**
             * Tags is a map of key/value tags used to select capacity reservations.
             * Specifying '*' for a value selects all values for a given tag key.
             */
            tags: {
                [key: string]: string;
            };
        }
        interface EC2NodeClassSpecCapacityReservationSelectorTermsPatch {
            /**
             * ID is the capacity reservation id in EC2
             */
            id: string;
            /**
             * Owner is the owner id for the ami.
             */
            ownerID: string;
            /**
             * Tags is a map of key/value tags used to select capacity reservations.
             * Specifying '*' for a value selects all values for a given tag key.
             */
            tags: {
                [key: string]: string;
            };
        }
        /**
         * Kubelet defines args to be used when configuring kubelet on provisioned nodes.
         * They are a subset of the upstream types, recognizing not all options may be supported.
         * Wherever possible, the types and names should reflect the upstream kubelet types.
         */
        interface EC2NodeClassSpecKubelet {
            /**
             * clusterDNS is a list of IP addresses for the cluster DNS server.
             * Note that not all providers may use all addresses.
             */
            clusterDNS: string[];
            /**
             * CPUCFSQuota enables CPU CFS quota enforcement for containers that specify CPU limits.
             */
            cpuCFSQuota: boolean;
            /**
             * EvictionHard is the map of signal names to quantities that define hard eviction thresholds
             */
            evictionHard: {
                [key: string]: string;
            };
            /**
             * EvictionMaxPodGracePeriod is the maximum allowed grace period (in seconds) to use when terminating pods in
             * response to soft eviction thresholds being met.
             */
            evictionMaxPodGracePeriod: number;
            /**
             * EvictionSoft is the map of signal names to quantities that define soft eviction thresholds
             */
            evictionSoft: {
                [key: string]: string;
            };
            /**
             * EvictionSoftGracePeriod is the map of signal names to quantities that define grace periods for each eviction signal
             */
            evictionSoftGracePeriod: {
                [key: string]: string;
            };
            /**
             * ImageGCHighThresholdPercent is the percent of disk usage after which image
             * garbage collection is always run. The percent is calculated by dividing this
             * field value by 100, so this field must be between 0 and 100, inclusive.
             * When specified, the value must be greater than ImageGCLowThresholdPercent.
             */
            imageGCHighThresholdPercent: number;
            /**
             * ImageGCLowThresholdPercent is the percent of disk usage before which image
             * garbage collection is never run. Lowest disk usage to garbage collect to.
             * The percent is calculated by dividing this field value by 100,
             * so the field value must be between 0 and 100, inclusive.
             * When specified, the value must be less than imageGCHighThresholdPercent
             */
            imageGCLowThresholdPercent: number;
            /**
             * KubeReserved contains resources reserved for Kubernetes system components.
             */
            kubeReserved: {
                [key: string]: string;
            };
            /**
             * MaxPods is an override for the maximum number of pods that can run on
             * a worker node instance.
             */
            maxPods: number;
            /**
             * PodsPerCore is an override for the number of pods that can run on a worker node
             * instance based on the number of cpu cores. This value cannot exceed MaxPods, so, if
             * MaxPods is a lower value, that value will be used.
             */
            podsPerCore: number;
            /**
             * SystemReserved contains resources reserved for OS system daemons and kernel memory.
             */
            systemReserved: {
                [key: string]: string;
            };
        }
        /**
         * Kubelet defines args to be used when configuring kubelet on provisioned nodes.
         * They are a subset of the upstream types, recognizing not all options may be supported.
         * Wherever possible, the types and names should reflect the upstream kubelet types.
         */
        interface EC2NodeClassSpecKubeletPatch {
            /**
             * clusterDNS is a list of IP addresses for the cluster DNS server.
             * Note that not all providers may use all addresses.
             */
            clusterDNS: string[];
            /**
             * CPUCFSQuota enables CPU CFS quota enforcement for containers that specify CPU limits.
             */
            cpuCFSQuota: boolean;
            /**
             * EvictionHard is the map of signal names to quantities that define hard eviction thresholds
             */
            evictionHard: {
                [key: string]: string;
            };
            /**
             * EvictionMaxPodGracePeriod is the maximum allowed grace period (in seconds) to use when terminating pods in
             * response to soft eviction thresholds being met.
             */
            evictionMaxPodGracePeriod: number;
            /**
             * EvictionSoft is the map of signal names to quantities that define soft eviction thresholds
             */
            evictionSoft: {
                [key: string]: string;
            };
            /**
             * EvictionSoftGracePeriod is the map of signal names to quantities that define grace periods for each eviction signal
             */
            evictionSoftGracePeriod: {
                [key: string]: string;
            };
            /**
             * ImageGCHighThresholdPercent is the percent of disk usage after which image
             * garbage collection is always run. The percent is calculated by dividing this
             * field value by 100, so this field must be between 0 and 100, inclusive.
             * When specified, the value must be greater than ImageGCLowThresholdPercent.
             */
            imageGCHighThresholdPercent: number;
            /**
             * ImageGCLowThresholdPercent is the percent of disk usage before which image
             * garbage collection is never run. Lowest disk usage to garbage collect to.
             * The percent is calculated by dividing this field value by 100,
             * so the field value must be between 0 and 100, inclusive.
             * When specified, the value must be less than imageGCHighThresholdPercent
             */
            imageGCLowThresholdPercent: number;
            /**
             * KubeReserved contains resources reserved for Kubernetes system components.
             */
            kubeReserved: {
                [key: string]: string;
            };
            /**
             * MaxPods is an override for the maximum number of pods that can run on
             * a worker node instance.
             */
            maxPods: number;
            /**
             * PodsPerCore is an override for the number of pods that can run on a worker node
             * instance based on the number of cpu cores. This value cannot exceed MaxPods, so, if
             * MaxPods is a lower value, that value will be used.
             */
            podsPerCore: number;
            /**
             * SystemReserved contains resources reserved for OS system daemons and kernel memory.
             */
            systemReserved: {
                [key: string]: string;
            };
        }
        /**
         * MetadataOptions for the generated launch template of provisioned nodes.
         *
         * This specifies the exposure of the Instance Metadata Service to
         * provisioned EC2 nodes. For more information,
         * see Instance Metadata and User Data
         * (https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html)
         * in the Amazon Elastic Compute Cloud User Guide.
         *
         * Refer to recommended, security best practices
         * (https://aws.github.io/aws-eks-best-practices/security/docs/iam/#restrict-access-to-the-instance-profile-assigned-to-the-worker-node)
         * for limiting exposure of Instance Metadata and User Data to pods.
         * If omitted, defaults to httpEndpoint enabled, with httpProtocolIPv6
         * disabled, with httpPutResponseLimit of 1, and with httpTokens
         * required.
         */
        interface EC2NodeClassSpecMetadataOptions {
            /**
             * HTTPEndpoint enables or disables the HTTP metadata endpoint on provisioned
             * nodes. If metadata options is non-nil, but this parameter is not specified,
             * the default state is "enabled".
             *
             * If you specify a value of "disabled", instance metadata will not be accessible
             * on the node.
             */
            httpEndpoint: string;
            /**
             * HTTPProtocolIPv6 enables or disables the IPv6 endpoint for the instance metadata
             * service on provisioned nodes. If metadata options is non-nil, but this parameter
             * is not specified, the default state is "disabled".
             */
            httpProtocolIPv6: string;
            /**
             * HTTPPutResponseHopLimit is the desired HTTP PUT response hop limit for
             * instance metadata requests. The larger the number, the further instance
             * metadata requests can travel. Possible values are integers from 1 to 64.
             * If metadata options is non-nil, but this parameter is not specified, the
             * default value is 1.
             */
            httpPutResponseHopLimit: number;
            /**
             * HTTPTokens determines the state of token usage for instance metadata
             * requests. If metadata options is non-nil, but this parameter is not
             * specified, the default state is "required".
             *
             * If the state is optional, one can choose to retrieve instance metadata with
             * or without a signed token header on the request. If one retrieves the IAM
             * role credentials without a token, the version 1.0 role credentials are
             * returned. If one retrieves the IAM role credentials using a valid signed
             * token, the version 2.0 role credentials are returned.
             *
             * If the state is "required", one must send a signed token header with any
             * instance metadata retrieval requests. In this state, retrieving the IAM
             * role credentials always returns the version 2.0 credentials; the version
             * 1.0 credentials are not available.
             */
            httpTokens: string;
        }
        /**
         * MetadataOptions for the generated launch template of provisioned nodes.
         *
         * This specifies the exposure of the Instance Metadata Service to
         * provisioned EC2 nodes. For more information,
         * see Instance Metadata and User Data
         * (https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html)
         * in the Amazon Elastic Compute Cloud User Guide.
         *
         * Refer to recommended, security best practices
         * (https://aws.github.io/aws-eks-best-practices/security/docs/iam/#restrict-access-to-the-instance-profile-assigned-to-the-worker-node)
         * for limiting exposure of Instance Metadata and User Data to pods.
         * If omitted, defaults to httpEndpoint enabled, with httpProtocolIPv6
         * disabled, with httpPutResponseLimit of 1, and with httpTokens
         * required.
         */
        interface EC2NodeClassSpecMetadataOptionsPatch {
            /**
             * HTTPEndpoint enables or disables the HTTP metadata endpoint on provisioned
             * nodes. If metadata options is non-nil, but this parameter is not specified,
             * the default state is "enabled".
             *
             * If you specify a value of "disabled", instance metadata will not be accessible
             * on the node.
             */
            httpEndpoint: string;
            /**
             * HTTPProtocolIPv6 enables or disables the IPv6 endpoint for the instance metadata
             * service on provisioned nodes. If metadata options is non-nil, but this parameter
             * is not specified, the default state is "disabled".
             */
            httpProtocolIPv6: string;
            /**
             * HTTPPutResponseHopLimit is the desired HTTP PUT response hop limit for
             * instance metadata requests. The larger the number, the further instance
             * metadata requests can travel. Possible values are integers from 1 to 64.
             * If metadata options is non-nil, but this parameter is not specified, the
             * default value is 1.
             */
            httpPutResponseHopLimit: number;
            /**
             * HTTPTokens determines the state of token usage for instance metadata
             * requests. If metadata options is non-nil, but this parameter is not
             * specified, the default state is "required".
             *
             * If the state is optional, one can choose to retrieve instance metadata with
             * or without a signed token header on the request. If one retrieves the IAM
             * role credentials without a token, the version 1.0 role credentials are
             * returned. If one retrieves the IAM role credentials using a valid signed
             * token, the version 2.0 role credentials are returned.
             *
             * If the state is "required", one must send a signed token header with any
             * instance metadata retrieval requests. In this state, retrieving the IAM
             * role credentials always returns the version 2.0 credentials; the version
             * 1.0 credentials are not available.
             */
            httpTokens: string;
        }
        /**
         * EC2NodeClassSpec is the top level specification for the AWS Karpenter Provider.
         * This will contain configuration necessary to launch instances in AWS.
         */
        interface EC2NodeClassSpecPatch {
            /**
             * AMIFamily dictates the UserData format and default BlockDeviceMappings used when generating launch templates.
             * This field is optional when using an alias amiSelectorTerm, and the value will be inferred from the alias'
             * family. When an alias is specified, this field may only be set to its corresponding family or 'Custom'. If no
             * alias is specified, this field is required.
             * NOTE: We ignore the AMIFamily for hashing here because we hash the AMIFamily dynamically by using the alias using
             * the AMIFamily() helper function
             */
            amiFamily: string;
            /**
             * AMISelectorTerms is a list of or ami selector terms. The terms are ORed.
             */
            amiSelectorTerms: outputs.karpenter.v1.EC2NodeClassSpecAmiSelectorTermsPatch[];
            /**
             * AssociatePublicIPAddress controls if public IP addresses are assigned to instances that are launched with the nodeclass.
             */
            associatePublicIPAddress: boolean;
            /**
             * BlockDeviceMappings to be applied to provisioned nodes.
             */
            blockDeviceMappings: outputs.karpenter.v1.EC2NodeClassSpecBlockDeviceMappingsPatch[];
            /**
             * CapacityReservationSelectorTerms is a list of capacity reservation selector terms. Each term is ORed together to
             * determine the set of eligible capacity reservations.
             */
            capacityReservationSelectorTerms: outputs.karpenter.v1.EC2NodeClassSpecCapacityReservationSelectorTermsPatch[];
            /**
             * Context is a Reserved field in EC2 APIs
             * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet.html
             */
            context: string;
            /**
             * DetailedMonitoring controls if detailed monitoring is enabled for instances that are launched
             */
            detailedMonitoring: boolean;
            /**
             * InstanceProfile is the AWS entity that instances use.
             * This field is mutually exclusive from role.
             * The instance profile should already have a role assigned to it that Karpenter
             *  has PassRole permission on for instance launch using this instanceProfile to succeed.
             */
            instanceProfile: string;
            /**
             * InstanceStorePolicy specifies how to handle instance-store disks.
             */
            instanceStorePolicy: string;
            kubelet: outputs.karpenter.v1.EC2NodeClassSpecKubeletPatch;
            metadataOptions: outputs.karpenter.v1.EC2NodeClassSpecMetadataOptionsPatch;
            /**
             * Role is the AWS identity that nodes use. This field is immutable.
             * This field is mutually exclusive from instanceProfile.
             * Marking this field as immutable avoids concerns around terminating managed instance profiles from running instances.
             * This field may be made mutable in the future, assuming the correct garbage collection and drift handling is implemented
             * for the old instance profiles on an update.
             */
            role: string;
            /**
             * SecurityGroupSelectorTerms is a list of security group selector terms. The terms are ORed.
             */
            securityGroupSelectorTerms: outputs.karpenter.v1.EC2NodeClassSpecSecurityGroupSelectorTermsPatch[];
            /**
             * SubnetSelectorTerms is a list of subnet selector terms. The terms are ORed.
             */
            subnetSelectorTerms: outputs.karpenter.v1.EC2NodeClassSpecSubnetSelectorTermsPatch[];
            /**
             * Tags to be applied on ec2 resources like instances and launch templates.
             */
            tags: {
                [key: string]: string;
            };
            /**
             * UserData to be applied to the provisioned nodes.
             * It must be in the appropriate format based on the AMIFamily in use. Karpenter will merge certain fields into
             * this UserData to ensure nodes are being provisioned with the correct configuration.
             */
            userData: string;
        }
        /**
         * SecurityGroupSelectorTerm defines selection logic for a security group used by Karpenter to launch nodes.
         * If multiple fields are used for selection, the requirements are ANDed.
         */
        interface EC2NodeClassSpecSecurityGroupSelectorTerms {
            /**
             * ID is the security group id in EC2
             */
            id: string;
            /**
             * Name is the security group name in EC2.
             * This value is the name field, which is different from the name tag.
             */
            name: string;
            /**
             * Tags is a map of key/value tags used to select security groups.
             * Specifying '*' for a value selects all values for a given tag key.
             */
            tags: {
                [key: string]: string;
            };
        }
        /**
         * SecurityGroupSelectorTerm defines selection logic for a security group used by Karpenter to launch nodes.
         * If multiple fields are used for selection, the requirements are ANDed.
         */
        interface EC2NodeClassSpecSecurityGroupSelectorTermsPatch {
            /**
             * ID is the security group id in EC2
             */
            id: string;
            /**
             * Name is the security group name in EC2.
             * This value is the name field, which is different from the name tag.
             */
            name: string;
            /**
             * Tags is a map of key/value tags used to select security groups.
             * Specifying '*' for a value selects all values for a given tag key.
             */
            tags: {
                [key: string]: string;
            };
        }
        /**
         * SubnetSelectorTerm defines selection logic for a subnet used by Karpenter to launch nodes.
         * If multiple fields are used for selection, the requirements are ANDed.
         */
        interface EC2NodeClassSpecSubnetSelectorTerms {
            /**
             * ID is the subnet id in EC2
             */
            id: string;
            /**
             * Tags is a map of key/value tags used to select subnets
             * Specifying '*' for a value selects all values for a given tag key.
             */
            tags: {
                [key: string]: string;
            };
        }
        /**
         * SubnetSelectorTerm defines selection logic for a subnet used by Karpenter to launch nodes.
         * If multiple fields are used for selection, the requirements are ANDed.
         */
        interface EC2NodeClassSpecSubnetSelectorTermsPatch {
            /**
             * ID is the subnet id in EC2
             */
            id: string;
            /**
             * Tags is a map of key/value tags used to select subnets
             * Specifying '*' for a value selects all values for a given tag key.
             */
            tags: {
                [key: string]: string;
            };
        }
        /**
         * EC2NodeClassStatus contains the resolved state of the EC2NodeClass
         */
        interface EC2NodeClassStatus {
            /**
             * AMI contains the current AMI values that are available to the
             * cluster under the AMI selectors.
             */
            amis: outputs.karpenter.v1.EC2NodeClassStatusAmis[];
            /**
             * CapacityReservations contains the current capacity reservation values that are available to this NodeClass under the
             * CapacityReservation selectors.
             */
            capacityReservations: outputs.karpenter.v1.EC2NodeClassStatusCapacityReservations[];
            /**
             * Conditions contains signals for health and readiness
             */
            conditions: outputs.karpenter.v1.EC2NodeClassStatusConditions[];
            /**
             * InstanceProfile contains the resolved instance profile for the role
             */
            instanceProfile: string;
            /**
             * SecurityGroups contains the current security group values that are available to the
             * cluster under the SecurityGroups selectors.
             */
            securityGroups: outputs.karpenter.v1.EC2NodeClassStatusSecurityGroups[];
            /**
             * Subnets contains the current subnet values that are available to the
             * cluster under the subnet selectors.
             */
            subnets: outputs.karpenter.v1.EC2NodeClassStatusSubnets[];
        }
        /**
         * AMI contains resolved AMI selector values utilized for node launch
         */
        interface EC2NodeClassStatusAmis {
            /**
             * Deprecation status of the AMI
             */
            deprecated: boolean;
            /**
             * ID of the AMI
             */
            id: string;
            /**
             * Name of the AMI
             */
            name: string;
            /**
             * Requirements of the AMI to be utilized on an instance type
             */
            requirements: outputs.karpenter.v1.EC2NodeClassStatusAmisRequirements[];
        }
        /**
         * AMI contains resolved AMI selector values utilized for node launch
         */
        interface EC2NodeClassStatusAmisPatch {
            /**
             * Deprecation status of the AMI
             */
            deprecated: boolean;
            /**
             * ID of the AMI
             */
            id: string;
            /**
             * Name of the AMI
             */
            name: string;
            /**
             * Requirements of the AMI to be utilized on an instance type
             */
            requirements: outputs.karpenter.v1.EC2NodeClassStatusAmisRequirementsPatch[];
        }
        /**
         * A node selector requirement is a selector that contains values, a key, and an operator
         * that relates the key and values.
         */
        interface EC2NodeClassStatusAmisRequirements {
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
        interface EC2NodeClassStatusAmisRequirementsPatch {
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
        interface EC2NodeClassStatusCapacityReservations {
            /**
             * The availability zone the capacity reservation is available in.
             */
            availabilityZone: string;
            /**
             * The time at which the capacity reservation expires. Once expired, the reserved capacity is released and Karpenter
             * will no longer be able to launch instances into that reservation.
             */
            endTime: string;
            /**
             * The id for the capacity reservation.
             */
            id: string;
            /**
             * Indicates the type of instance launches the capacity reservation accepts.
             */
            instanceMatchCriteria: string;
            /**
             * The instance type for the capacity reservation.
             */
            instanceType: string;
            /**
             * The ID of the AWS account that owns the capacity reservation.
             */
            ownerID: string;
        }
        interface EC2NodeClassStatusCapacityReservationsPatch {
            /**
             * The availability zone the capacity reservation is available in.
             */
            availabilityZone: string;
            /**
             * The time at which the capacity reservation expires. Once expired, the reserved capacity is released and Karpenter
             * will no longer be able to launch instances into that reservation.
             */
            endTime: string;
            /**
             * The id for the capacity reservation.
             */
            id: string;
            /**
             * Indicates the type of instance launches the capacity reservation accepts.
             */
            instanceMatchCriteria: string;
            /**
             * The instance type for the capacity reservation.
             */
            instanceType: string;
            /**
             * The ID of the AWS account that owns the capacity reservation.
             */
            ownerID: string;
        }
        /**
         * Condition aliases the upstream type and adds additional helper methods
         */
        interface EC2NodeClassStatusConditions {
            /**
             * lastTransitionTime is the last time the condition transitioned from one status to another.
             * This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
             */
            lastTransitionTime: string;
            /**
             * message is a human readable message indicating details about the transition.
             * This may be an empty string.
             */
            message: string;
            /**
             * observedGeneration represents the .metadata.generation that the condition was set based upon.
             * For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date
             * with respect to the current state of the instance.
             */
            observedGeneration: number;
            /**
             * reason contains a programmatic identifier indicating the reason for the condition's last transition.
             * Producers of specific condition types may define expected values and meanings for this field,
             * and whether the values are considered a guaranteed API.
             * The value should be a CamelCase string.
             * This field may not be empty.
             */
            reason: string;
            /**
             * status of the condition, one of True, False, Unknown.
             */
            status: string;
            /**
             * type of condition in CamelCase or in foo.example.com/CamelCase.
             */
            type: string;
        }
        /**
         * Condition aliases the upstream type and adds additional helper methods
         */
        interface EC2NodeClassStatusConditionsPatch {
            /**
             * lastTransitionTime is the last time the condition transitioned from one status to another.
             * This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
             */
            lastTransitionTime: string;
            /**
             * message is a human readable message indicating details about the transition.
             * This may be an empty string.
             */
            message: string;
            /**
             * observedGeneration represents the .metadata.generation that the condition was set based upon.
             * For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date
             * with respect to the current state of the instance.
             */
            observedGeneration: number;
            /**
             * reason contains a programmatic identifier indicating the reason for the condition's last transition.
             * Producers of specific condition types may define expected values and meanings for this field,
             * and whether the values are considered a guaranteed API.
             * The value should be a CamelCase string.
             * This field may not be empty.
             */
            reason: string;
            /**
             * status of the condition, one of True, False, Unknown.
             */
            status: string;
            /**
             * type of condition in CamelCase or in foo.example.com/CamelCase.
             */
            type: string;
        }
        /**
         * EC2NodeClassStatus contains the resolved state of the EC2NodeClass
         */
        interface EC2NodeClassStatusPatch {
            /**
             * AMI contains the current AMI values that are available to the
             * cluster under the AMI selectors.
             */
            amis: outputs.karpenter.v1.EC2NodeClassStatusAmisPatch[];
            /**
             * CapacityReservations contains the current capacity reservation values that are available to this NodeClass under the
             * CapacityReservation selectors.
             */
            capacityReservations: outputs.karpenter.v1.EC2NodeClassStatusCapacityReservationsPatch[];
            /**
             * Conditions contains signals for health and readiness
             */
            conditions: outputs.karpenter.v1.EC2NodeClassStatusConditionsPatch[];
            /**
             * InstanceProfile contains the resolved instance profile for the role
             */
            instanceProfile: string;
            /**
             * SecurityGroups contains the current security group values that are available to the
             * cluster under the SecurityGroups selectors.
             */
            securityGroups: outputs.karpenter.v1.EC2NodeClassStatusSecurityGroupsPatch[];
            /**
             * Subnets contains the current subnet values that are available to the
             * cluster under the subnet selectors.
             */
            subnets: outputs.karpenter.v1.EC2NodeClassStatusSubnetsPatch[];
        }
        /**
         * SecurityGroup contains resolved SecurityGroup selector values utilized for node launch
         */
        interface EC2NodeClassStatusSecurityGroups {
            /**
             * ID of the security group
             */
            id: string;
            /**
             * Name of the security group
             */
            name: string;
        }
        /**
         * SecurityGroup contains resolved SecurityGroup selector values utilized for node launch
         */
        interface EC2NodeClassStatusSecurityGroupsPatch {
            /**
             * ID of the security group
             */
            id: string;
            /**
             * Name of the security group
             */
            name: string;
        }
        /**
         * Subnet contains resolved Subnet selector values utilized for node launch
         */
        interface EC2NodeClassStatusSubnets {
            /**
             * ID of the subnet
             */
            id: string;
            /**
             * The associated availability zone
             */
            zone: string;
            /**
             * The associated availability zone ID
             */
            zoneID: string;
        }
        /**
         * Subnet contains resolved Subnet selector values utilized for node launch
         */
        interface EC2NodeClassStatusSubnetsPatch {
            /**
             * ID of the subnet
             */
            id: string;
            /**
             * The associated availability zone
             */
            zone: string;
            /**
             * The associated availability zone ID
             */
            zoneID: string;
        }
        /**
         * NodeClaim is the Schema for the NodeClaims API
         */
        interface NodeClaim {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "karpenter.sh/v1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "NodeClaim";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.karpenter.v1.NodeClaimSpec;
            status: outputs.karpenter.v1.NodeClaimStatus;
        }
        /**
         * NodeClaimSpec describes the desired state of the NodeClaim
         */
        interface NodeClaimSpec {
            /**
             * ExpireAfter is the duration the controller will wait
             * before terminating a node, measured from when the node is created. This
             * is useful to implement features like eventually consistent node upgrade,
             * memory leak protection, and disruption testing.
             */
            expireAfter: string;
            nodeClassRef: outputs.karpenter.v1.NodeClaimSpecNodeClassRef;
            /**
             * Requirements are layered with GetLabels and applied to every node.
             */
            requirements: outputs.karpenter.v1.NodeClaimSpecRequirements[];
            resources: outputs.karpenter.v1.NodeClaimSpecResources;
            /**
             * StartupTaints are taints that are applied to nodes upon startup which are expected to be removed automatically
             * within a short period of time, typically by a DaemonSet that tolerates the taint. These are commonly used by
             * daemonsets to allow initialization and enforce startup ordering.  StartupTaints are ignored for provisioning
             * purposes in that pods are not required to tolerate a StartupTaint in order to have nodes provisioned for them.
             */
            startupTaints: outputs.karpenter.v1.NodeClaimSpecStartupTaints[];
            /**
             * Taints will be applied to the NodeClaim's node.
             */
            taints: outputs.karpenter.v1.NodeClaimSpecTaints[];
            /**
             * TerminationGracePeriod is the maximum duration the controller will wait before forcefully deleting the pods on a node, measured from when deletion is first initiated.
             *
             * Warning: this feature takes precedence over a Pod's terminationGracePeriodSeconds value, and bypasses any blocked PDBs or the karpenter.sh/do-not-disrupt annotation.
             *
             * This field is intended to be used by cluster administrators to enforce that nodes can be cycled within a given time period.
             * When set, drifted nodes will begin draining even if there are pods blocking eviction. Draining will respect PDBs and the do-not-disrupt annotation until the TGP is reached.
             *
             * Karpenter will preemptively delete pods so their terminationGracePeriodSeconds align with the node's terminationGracePeriod.
             * If a pod would be terminated without being granted its full terminationGracePeriodSeconds prior to the node timeout,
             * that pod will be deleted at T = node timeout - pod terminationGracePeriodSeconds.
             *
             * The feature can also be used to allow maximum time limits for long-running jobs which can delay node termination with preStop hooks.
             * If left undefined, the controller will wait indefinitely for pods to be drained.
             */
            terminationGracePeriod: string;
        }
        /**
         * NodeClassRef is a reference to an object that defines provider specific configuration
         */
        interface NodeClaimSpecNodeClassRef {
            /**
             * API version of the referent
             */
            group: string;
            /**
             * Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds"
             */
            kind: string;
            /**
             * Name of the referent; More info: http://kubernetes.io/docs/user-guide/identifiers#names
             */
            name: string;
        }
        /**
         * NodeClassRef is a reference to an object that defines provider specific configuration
         */
        interface NodeClaimSpecNodeClassRefPatch {
            /**
             * API version of the referent
             */
            group: string;
            /**
             * Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds"
             */
            kind: string;
            /**
             * Name of the referent; More info: http://kubernetes.io/docs/user-guide/identifiers#names
             */
            name: string;
        }
        /**
         * NodeClaimSpec describes the desired state of the NodeClaim
         */
        interface NodeClaimSpecPatch {
            /**
             * ExpireAfter is the duration the controller will wait
             * before terminating a node, measured from when the node is created. This
             * is useful to implement features like eventually consistent node upgrade,
             * memory leak protection, and disruption testing.
             */
            expireAfter: string;
            nodeClassRef: outputs.karpenter.v1.NodeClaimSpecNodeClassRefPatch;
            /**
             * Requirements are layered with GetLabels and applied to every node.
             */
            requirements: outputs.karpenter.v1.NodeClaimSpecRequirementsPatch[];
            resources: outputs.karpenter.v1.NodeClaimSpecResourcesPatch;
            /**
             * StartupTaints are taints that are applied to nodes upon startup which are expected to be removed automatically
             * within a short period of time, typically by a DaemonSet that tolerates the taint. These are commonly used by
             * daemonsets to allow initialization and enforce startup ordering.  StartupTaints are ignored for provisioning
             * purposes in that pods are not required to tolerate a StartupTaint in order to have nodes provisioned for them.
             */
            startupTaints: outputs.karpenter.v1.NodeClaimSpecStartupTaintsPatch[];
            /**
             * Taints will be applied to the NodeClaim's node.
             */
            taints: outputs.karpenter.v1.NodeClaimSpecTaintsPatch[];
            /**
             * TerminationGracePeriod is the maximum duration the controller will wait before forcefully deleting the pods on a node, measured from when deletion is first initiated.
             *
             * Warning: this feature takes precedence over a Pod's terminationGracePeriodSeconds value, and bypasses any blocked PDBs or the karpenter.sh/do-not-disrupt annotation.
             *
             * This field is intended to be used by cluster administrators to enforce that nodes can be cycled within a given time period.
             * When set, drifted nodes will begin draining even if there are pods blocking eviction. Draining will respect PDBs and the do-not-disrupt annotation until the TGP is reached.
             *
             * Karpenter will preemptively delete pods so their terminationGracePeriodSeconds align with the node's terminationGracePeriod.
             * If a pod would be terminated without being granted its full terminationGracePeriodSeconds prior to the node timeout,
             * that pod will be deleted at T = node timeout - pod terminationGracePeriodSeconds.
             *
             * The feature can also be used to allow maximum time limits for long-running jobs which can delay node termination with preStop hooks.
             * If left undefined, the controller will wait indefinitely for pods to be drained.
             */
            terminationGracePeriod: string;
        }
        /**
         * A node selector requirement with min values is a selector that contains values, a key, an operator that relates the key and values
         * and minValues that represent the requirement to have at least that many values.
         */
        interface NodeClaimSpecRequirements {
            /**
             * The label key that the selector applies to.
             */
            key: string;
            /**
             * This field is ALPHA and can be dropped or replaced at any time
             * MinValues is the minimum number of unique values required to define the flexibility of the specific requirement.
             */
            minValues: number;
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
         * A node selector requirement with min values is a selector that contains values, a key, an operator that relates the key and values
         * and minValues that represent the requirement to have at least that many values.
         */
        interface NodeClaimSpecRequirementsPatch {
            /**
             * The label key that the selector applies to.
             */
            key: string;
            /**
             * This field is ALPHA and can be dropped or replaced at any time
             * MinValues is the minimum number of unique values required to define the flexibility of the specific requirement.
             */
            minValues: number;
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
         * Resources models the resource requirements for the NodeClaim to launch
         */
        interface NodeClaimSpecResources {
            /**
             * Requests describes the minimum required resources for the NodeClaim to launch
             */
            requests: {
                [key: string]: number | string;
            };
        }
        /**
         * Resources models the resource requirements for the NodeClaim to launch
         */
        interface NodeClaimSpecResourcesPatch {
            /**
             * Requests describes the minimum required resources for the NodeClaim to launch
             */
            requests: {
                [key: string]: number | string;
            };
        }
        /**
         * The node this Taint is attached to has the "effect" on
         * any pod that does not tolerate the Taint.
         */
        interface NodeClaimSpecStartupTaints {
            /**
             * Required. The effect of the taint on pods
             * that do not tolerate the taint.
             * Valid effects are NoSchedule, PreferNoSchedule and NoExecute.
             */
            effect: string;
            /**
             * Required. The taint key to be applied to a node.
             */
            key: string;
            /**
             * TimeAdded represents the time at which the taint was added.
             * It is only written for NoExecute taints.
             */
            timeAdded: string;
            /**
             * The taint value corresponding to the taint key.
             */
            value: string;
        }
        /**
         * The node this Taint is attached to has the "effect" on
         * any pod that does not tolerate the Taint.
         */
        interface NodeClaimSpecStartupTaintsPatch {
            /**
             * Required. The effect of the taint on pods
             * that do not tolerate the taint.
             * Valid effects are NoSchedule, PreferNoSchedule and NoExecute.
             */
            effect: string;
            /**
             * Required. The taint key to be applied to a node.
             */
            key: string;
            /**
             * TimeAdded represents the time at which the taint was added.
             * It is only written for NoExecute taints.
             */
            timeAdded: string;
            /**
             * The taint value corresponding to the taint key.
             */
            value: string;
        }
        /**
         * The node this Taint is attached to has the "effect" on
         * any pod that does not tolerate the Taint.
         */
        interface NodeClaimSpecTaints {
            /**
             * Required. The effect of the taint on pods
             * that do not tolerate the taint.
             * Valid effects are NoSchedule, PreferNoSchedule and NoExecute.
             */
            effect: string;
            /**
             * Required. The taint key to be applied to a node.
             */
            key: string;
            /**
             * TimeAdded represents the time at which the taint was added.
             * It is only written for NoExecute taints.
             */
            timeAdded: string;
            /**
             * The taint value corresponding to the taint key.
             */
            value: string;
        }
        /**
         * The node this Taint is attached to has the "effect" on
         * any pod that does not tolerate the Taint.
         */
        interface NodeClaimSpecTaintsPatch {
            /**
             * Required. The effect of the taint on pods
             * that do not tolerate the taint.
             * Valid effects are NoSchedule, PreferNoSchedule and NoExecute.
             */
            effect: string;
            /**
             * Required. The taint key to be applied to a node.
             */
            key: string;
            /**
             * TimeAdded represents the time at which the taint was added.
             * It is only written for NoExecute taints.
             */
            timeAdded: string;
            /**
             * The taint value corresponding to the taint key.
             */
            value: string;
        }
        /**
         * NodeClaimStatus defines the observed state of NodeClaim
         */
        interface NodeClaimStatus {
            /**
             * Allocatable is the estimated allocatable capacity of the node
             */
            allocatable: {
                [key: string]: number | string;
            };
            /**
             * Capacity is the estimated full capacity of the node
             */
            capacity: {
                [key: string]: number | string;
            };
            /**
             * Conditions contains signals for health and readiness
             */
            conditions: outputs.karpenter.v1.NodeClaimStatusConditions[];
            /**
             * ImageID is an identifier for the image that runs on the node
             */
            imageID: string;
            /**
             * LastPodEventTime is updated with the last time a pod was scheduled
             * or removed from the node. A pod going terminal or terminating
             * is also considered as removed.
             */
            lastPodEventTime: string;
            /**
             * NodeName is the name of the corresponding node object
             */
            nodeName: string;
            /**
             * ProviderID of the corresponding node object
             */
            providerID: string;
        }
        /**
         * Condition aliases the upstream type and adds additional helper methods
         */
        interface NodeClaimStatusConditions {
            /**
             * lastTransitionTime is the last time the condition transitioned from one status to another.
             * This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
             */
            lastTransitionTime: string;
            /**
             * message is a human readable message indicating details about the transition.
             * This may be an empty string.
             */
            message: string;
            /**
             * observedGeneration represents the .metadata.generation that the condition was set based upon.
             * For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date
             * with respect to the current state of the instance.
             */
            observedGeneration: number;
            /**
             * reason contains a programmatic identifier indicating the reason for the condition's last transition.
             * Producers of specific condition types may define expected values and meanings for this field,
             * and whether the values are considered a guaranteed API.
             * The value should be a CamelCase string.
             * This field may not be empty.
             */
            reason: string;
            /**
             * status of the condition, one of True, False, Unknown.
             */
            status: string;
            /**
             * type of condition in CamelCase or in foo.example.com/CamelCase.
             */
            type: string;
        }
        /**
         * Condition aliases the upstream type and adds additional helper methods
         */
        interface NodeClaimStatusConditionsPatch {
            /**
             * lastTransitionTime is the last time the condition transitioned from one status to another.
             * This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
             */
            lastTransitionTime: string;
            /**
             * message is a human readable message indicating details about the transition.
             * This may be an empty string.
             */
            message: string;
            /**
             * observedGeneration represents the .metadata.generation that the condition was set based upon.
             * For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date
             * with respect to the current state of the instance.
             */
            observedGeneration: number;
            /**
             * reason contains a programmatic identifier indicating the reason for the condition's last transition.
             * Producers of specific condition types may define expected values and meanings for this field,
             * and whether the values are considered a guaranteed API.
             * The value should be a CamelCase string.
             * This field may not be empty.
             */
            reason: string;
            /**
             * status of the condition, one of True, False, Unknown.
             */
            status: string;
            /**
             * type of condition in CamelCase or in foo.example.com/CamelCase.
             */
            type: string;
        }
        /**
         * NodeClaimStatus defines the observed state of NodeClaim
         */
        interface NodeClaimStatusPatch {
            /**
             * Allocatable is the estimated allocatable capacity of the node
             */
            allocatable: {
                [key: string]: number | string;
            };
            /**
             * Capacity is the estimated full capacity of the node
             */
            capacity: {
                [key: string]: number | string;
            };
            /**
             * Conditions contains signals for health and readiness
             */
            conditions: outputs.karpenter.v1.NodeClaimStatusConditionsPatch[];
            /**
             * ImageID is an identifier for the image that runs on the node
             */
            imageID: string;
            /**
             * LastPodEventTime is updated with the last time a pod was scheduled
             * or removed from the node. A pod going terminal or terminating
             * is also considered as removed.
             */
            lastPodEventTime: string;
            /**
             * NodeName is the name of the corresponding node object
             */
            nodeName: string;
            /**
             * ProviderID of the corresponding node object
             */
            providerID: string;
        }
        /**
         * NodePool is the Schema for the NodePools API
         */
        interface NodePool {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "karpenter.sh/v1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "NodePool";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.karpenter.v1.NodePoolSpec;
            status: outputs.karpenter.v1.NodePoolStatus;
        }
        /**
         * NodePoolSpec is the top level nodepool specification. Nodepools
         * launch nodes in response to pods that are unschedulable. A single nodepool
         * is capable of managing a diverse set of nodes. Node properties are determined
         * from a combination of nodepool and pod scheduling constraints.
         */
        interface NodePoolSpec {
            disruption: outputs.karpenter.v1.NodePoolSpecDisruption;
            /**
             * Limits define a set of bounds for provisioning capacity.
             */
            limits: {
                [key: string]: number | string;
            };
            template: outputs.karpenter.v1.NodePoolSpecTemplate;
            /**
             * Weight is the priority given to the nodepool during scheduling. A higher
             * numerical weight indicates that this nodepool will be ordered
             * ahead of other nodepools with lower weights. A nodepool with no weight
             * will be treated as if it is a nodepool with a weight of 0.
             */
            weight: number;
        }
        /**
         * Disruption contains the parameters that relate to Karpenter's disruption logic
         */
        interface NodePoolSpecDisruption {
            /**
             * Budgets is a list of Budgets.
             * If there are multiple active budgets, Karpenter uses
             * the most restrictive value. If left undefined,
             * this will default to one budget with a value to 10%.
             */
            budgets: outputs.karpenter.v1.NodePoolSpecDisruptionBudgets[];
            /**
             * ConsolidateAfter is the duration the controller will wait
             * before attempting to terminate nodes that are underutilized.
             * Refer to ConsolidationPolicy for how underutilization is considered.
             */
            consolidateAfter: string;
            /**
             * ConsolidationPolicy describes which nodes Karpenter can disrupt through its consolidation
             * algorithm. This policy defaults to "WhenEmptyOrUnderutilized" if not specified
             */
            consolidationPolicy: string;
        }
        /**
         * Budget defines when Karpenter will restrict the
         * number of Node Claims that can be terminating simultaneously.
         */
        interface NodePoolSpecDisruptionBudgets {
            /**
             * Duration determines how long a Budget is active since each Schedule hit.
             * Only minutes and hours are accepted, as cron does not work in seconds.
             * If omitted, the budget is always active.
             * This is required if Schedule is set.
             * This regex has an optional 0s at the end since the duration.String() always adds
             * a 0s at the end.
             */
            duration: string;
            /**
             * Nodes dictates the maximum number of NodeClaims owned by this NodePool
             * that can be terminating at once. This is calculated by counting nodes that
             * have a deletion timestamp set, or are actively being deleted by Karpenter.
             * This field is required when specifying a budget.
             * This cannot be of type intstr.IntOrString since kubebuilder doesn't support pattern
             * checking for int nodes for IntOrString nodes.
             * Ref: https://github.com/kubernetes-sigs/controller-tools/blob/55efe4be40394a288216dab63156b0a64fb82929/pkg/crd/markers/validation.go#L379-L388
             */
            nodes: string;
            /**
             * Reasons is a list of disruption methods that this budget applies to. If Reasons is not set, this budget applies to all methods.
             * Otherwise, this will apply to each reason defined.
             * allowed reasons are Underutilized, Empty, and Drifted.
             */
            reasons: string[];
            /**
             * Schedule specifies when a budget begins being active, following
             * the upstream cronjob syntax. If omitted, the budget is always active.
             * Timezones are not supported.
             * This field is required if Duration is set.
             */
            schedule: string;
        }
        /**
         * Budget defines when Karpenter will restrict the
         * number of Node Claims that can be terminating simultaneously.
         */
        interface NodePoolSpecDisruptionBudgetsPatch {
            /**
             * Duration determines how long a Budget is active since each Schedule hit.
             * Only minutes and hours are accepted, as cron does not work in seconds.
             * If omitted, the budget is always active.
             * This is required if Schedule is set.
             * This regex has an optional 0s at the end since the duration.String() always adds
             * a 0s at the end.
             */
            duration: string;
            /**
             * Nodes dictates the maximum number of NodeClaims owned by this NodePool
             * that can be terminating at once. This is calculated by counting nodes that
             * have a deletion timestamp set, or are actively being deleted by Karpenter.
             * This field is required when specifying a budget.
             * This cannot be of type intstr.IntOrString since kubebuilder doesn't support pattern
             * checking for int nodes for IntOrString nodes.
             * Ref: https://github.com/kubernetes-sigs/controller-tools/blob/55efe4be40394a288216dab63156b0a64fb82929/pkg/crd/markers/validation.go#L379-L388
             */
            nodes: string;
            /**
             * Reasons is a list of disruption methods that this budget applies to. If Reasons is not set, this budget applies to all methods.
             * Otherwise, this will apply to each reason defined.
             * allowed reasons are Underutilized, Empty, and Drifted.
             */
            reasons: string[];
            /**
             * Schedule specifies when a budget begins being active, following
             * the upstream cronjob syntax. If omitted, the budget is always active.
             * Timezones are not supported.
             * This field is required if Duration is set.
             */
            schedule: string;
        }
        /**
         * Disruption contains the parameters that relate to Karpenter's disruption logic
         */
        interface NodePoolSpecDisruptionPatch {
            /**
             * Budgets is a list of Budgets.
             * If there are multiple active budgets, Karpenter uses
             * the most restrictive value. If left undefined,
             * this will default to one budget with a value to 10%.
             */
            budgets: outputs.karpenter.v1.NodePoolSpecDisruptionBudgetsPatch[];
            /**
             * ConsolidateAfter is the duration the controller will wait
             * before attempting to terminate nodes that are underutilized.
             * Refer to ConsolidationPolicy for how underutilization is considered.
             */
            consolidateAfter: string;
            /**
             * ConsolidationPolicy describes which nodes Karpenter can disrupt through its consolidation
             * algorithm. This policy defaults to "WhenEmptyOrUnderutilized" if not specified
             */
            consolidationPolicy: string;
        }
        /**
         * NodePoolSpec is the top level nodepool specification. Nodepools
         * launch nodes in response to pods that are unschedulable. A single nodepool
         * is capable of managing a diverse set of nodes. Node properties are determined
         * from a combination of nodepool and pod scheduling constraints.
         */
        interface NodePoolSpecPatch {
            disruption: outputs.karpenter.v1.NodePoolSpecDisruptionPatch;
            /**
             * Limits define a set of bounds for provisioning capacity.
             */
            limits: {
                [key: string]: number | string;
            };
            template: outputs.karpenter.v1.NodePoolSpecTemplatePatch;
            /**
             * Weight is the priority given to the nodepool during scheduling. A higher
             * numerical weight indicates that this nodepool will be ordered
             * ahead of other nodepools with lower weights. A nodepool with no weight
             * will be treated as if it is a nodepool with a weight of 0.
             */
            weight: number;
        }
        /**
         * Template contains the template of possibilities for the provisioning logic to launch a NodeClaim with.
         * NodeClaims launched from this NodePool will often be further constrained than the template specifies.
         */
        interface NodePoolSpecTemplate {
            metadata: outputs.karpenter.v1.NodePoolSpecTemplateMetadata;
            spec: outputs.karpenter.v1.NodePoolSpecTemplateSpec;
        }
        interface NodePoolSpecTemplateMetadata {
            /**
             * Annotations is an unstructured key value map stored with a resource that may be
             * set by external tools to store and retrieve arbitrary metadata. They are not
             * queryable and should be preserved when modifying objects.
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
             */
            annotations: {
                [key: string]: string;
            };
            /**
             * Map of string keys and values that can be used to organize and categorize
             * (scope and select) objects. May match selectors of replication controllers
             * and services.
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
             */
            labels: {
                [key: string]: string;
            };
        }
        interface NodePoolSpecTemplateMetadataPatch {
            /**
             * Annotations is an unstructured key value map stored with a resource that may be
             * set by external tools to store and retrieve arbitrary metadata. They are not
             * queryable and should be preserved when modifying objects.
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
             */
            annotations: {
                [key: string]: string;
            };
            /**
             * Map of string keys and values that can be used to organize and categorize
             * (scope and select) objects. May match selectors of replication controllers
             * and services.
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
             */
            labels: {
                [key: string]: string;
            };
        }
        /**
         * Template contains the template of possibilities for the provisioning logic to launch a NodeClaim with.
         * NodeClaims launched from this NodePool will often be further constrained than the template specifies.
         */
        interface NodePoolSpecTemplatePatch {
            metadata: outputs.karpenter.v1.NodePoolSpecTemplateMetadataPatch;
            spec: outputs.karpenter.v1.NodePoolSpecTemplateSpecPatch;
        }
        /**
         * NodeClaimTemplateSpec describes the desired state of the NodeClaim in the Nodepool
         * NodeClaimTemplateSpec is used in the NodePool's NodeClaimTemplate, with the resource requests omitted since
         * users are not able to set resource requests in the NodePool.
         */
        interface NodePoolSpecTemplateSpec {
            /**
             * ExpireAfter is the duration the controller will wait
             * before terminating a node, measured from when the node is created. This
             * is useful to implement features like eventually consistent node upgrade,
             * memory leak protection, and disruption testing.
             */
            expireAfter: string;
            nodeClassRef: outputs.karpenter.v1.NodePoolSpecTemplateSpecNodeClassRef;
            /**
             * Requirements are layered with GetLabels and applied to every node.
             */
            requirements: outputs.karpenter.v1.NodePoolSpecTemplateSpecRequirements[];
            /**
             * StartupTaints are taints that are applied to nodes upon startup which are expected to be removed automatically
             * within a short period of time, typically by a DaemonSet that tolerates the taint. These are commonly used by
             * daemonsets to allow initialization and enforce startup ordering.  StartupTaints are ignored for provisioning
             * purposes in that pods are not required to tolerate a StartupTaint in order to have nodes provisioned for them.
             */
            startupTaints: outputs.karpenter.v1.NodePoolSpecTemplateSpecStartupTaints[];
            /**
             * Taints will be applied to the NodeClaim's node.
             */
            taints: outputs.karpenter.v1.NodePoolSpecTemplateSpecTaints[];
            /**
             * TerminationGracePeriod is the maximum duration the controller will wait before forcefully deleting the pods on a node, measured from when deletion is first initiated.
             *
             * Warning: this feature takes precedence over a Pod's terminationGracePeriodSeconds value, and bypasses any blocked PDBs or the karpenter.sh/do-not-disrupt annotation.
             *
             * This field is intended to be used by cluster administrators to enforce that nodes can be cycled within a given time period.
             * When set, drifted nodes will begin draining even if there are pods blocking eviction. Draining will respect PDBs and the do-not-disrupt annotation until the TGP is reached.
             *
             * Karpenter will preemptively delete pods so their terminationGracePeriodSeconds align with the node's terminationGracePeriod.
             * If a pod would be terminated without being granted its full terminationGracePeriodSeconds prior to the node timeout,
             * that pod will be deleted at T = node timeout - pod terminationGracePeriodSeconds.
             *
             * The feature can also be used to allow maximum time limits for long-running jobs which can delay node termination with preStop hooks.
             * If left undefined, the controller will wait indefinitely for pods to be drained.
             */
            terminationGracePeriod: string;
        }
        /**
         * NodeClassRef is a reference to an object that defines provider specific configuration
         */
        interface NodePoolSpecTemplateSpecNodeClassRef {
            /**
             * API version of the referent
             */
            group: string;
            /**
             * Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds"
             */
            kind: string;
            /**
             * Name of the referent; More info: http://kubernetes.io/docs/user-guide/identifiers#names
             */
            name: string;
        }
        /**
         * NodeClassRef is a reference to an object that defines provider specific configuration
         */
        interface NodePoolSpecTemplateSpecNodeClassRefPatch {
            /**
             * API version of the referent
             */
            group: string;
            /**
             * Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds"
             */
            kind: string;
            /**
             * Name of the referent; More info: http://kubernetes.io/docs/user-guide/identifiers#names
             */
            name: string;
        }
        /**
         * NodeClaimTemplateSpec describes the desired state of the NodeClaim in the Nodepool
         * NodeClaimTemplateSpec is used in the NodePool's NodeClaimTemplate, with the resource requests omitted since
         * users are not able to set resource requests in the NodePool.
         */
        interface NodePoolSpecTemplateSpecPatch {
            /**
             * ExpireAfter is the duration the controller will wait
             * before terminating a node, measured from when the node is created. This
             * is useful to implement features like eventually consistent node upgrade,
             * memory leak protection, and disruption testing.
             */
            expireAfter: string;
            nodeClassRef: outputs.karpenter.v1.NodePoolSpecTemplateSpecNodeClassRefPatch;
            /**
             * Requirements are layered with GetLabels and applied to every node.
             */
            requirements: outputs.karpenter.v1.NodePoolSpecTemplateSpecRequirementsPatch[];
            /**
             * StartupTaints are taints that are applied to nodes upon startup which are expected to be removed automatically
             * within a short period of time, typically by a DaemonSet that tolerates the taint. These are commonly used by
             * daemonsets to allow initialization and enforce startup ordering.  StartupTaints are ignored for provisioning
             * purposes in that pods are not required to tolerate a StartupTaint in order to have nodes provisioned for them.
             */
            startupTaints: outputs.karpenter.v1.NodePoolSpecTemplateSpecStartupTaintsPatch[];
            /**
             * Taints will be applied to the NodeClaim's node.
             */
            taints: outputs.karpenter.v1.NodePoolSpecTemplateSpecTaintsPatch[];
            /**
             * TerminationGracePeriod is the maximum duration the controller will wait before forcefully deleting the pods on a node, measured from when deletion is first initiated.
             *
             * Warning: this feature takes precedence over a Pod's terminationGracePeriodSeconds value, and bypasses any blocked PDBs or the karpenter.sh/do-not-disrupt annotation.
             *
             * This field is intended to be used by cluster administrators to enforce that nodes can be cycled within a given time period.
             * When set, drifted nodes will begin draining even if there are pods blocking eviction. Draining will respect PDBs and the do-not-disrupt annotation until the TGP is reached.
             *
             * Karpenter will preemptively delete pods so their terminationGracePeriodSeconds align with the node's terminationGracePeriod.
             * If a pod would be terminated without being granted its full terminationGracePeriodSeconds prior to the node timeout,
             * that pod will be deleted at T = node timeout - pod terminationGracePeriodSeconds.
             *
             * The feature can also be used to allow maximum time limits for long-running jobs which can delay node termination with preStop hooks.
             * If left undefined, the controller will wait indefinitely for pods to be drained.
             */
            terminationGracePeriod: string;
        }
        /**
         * A node selector requirement with min values is a selector that contains values, a key, an operator that relates the key and values
         * and minValues that represent the requirement to have at least that many values.
         */
        interface NodePoolSpecTemplateSpecRequirements {
            /**
             * The label key that the selector applies to.
             */
            key: string;
            /**
             * This field is ALPHA and can be dropped or replaced at any time
             * MinValues is the minimum number of unique values required to define the flexibility of the specific requirement.
             */
            minValues: number;
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
         * A node selector requirement with min values is a selector that contains values, a key, an operator that relates the key and values
         * and minValues that represent the requirement to have at least that many values.
         */
        interface NodePoolSpecTemplateSpecRequirementsPatch {
            /**
             * The label key that the selector applies to.
             */
            key: string;
            /**
             * This field is ALPHA and can be dropped or replaced at any time
             * MinValues is the minimum number of unique values required to define the flexibility of the specific requirement.
             */
            minValues: number;
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
         * The node this Taint is attached to has the "effect" on
         * any pod that does not tolerate the Taint.
         */
        interface NodePoolSpecTemplateSpecStartupTaints {
            /**
             * Required. The effect of the taint on pods
             * that do not tolerate the taint.
             * Valid effects are NoSchedule, PreferNoSchedule and NoExecute.
             */
            effect: string;
            /**
             * Required. The taint key to be applied to a node.
             */
            key: string;
            /**
             * TimeAdded represents the time at which the taint was added.
             * It is only written for NoExecute taints.
             */
            timeAdded: string;
            /**
             * The taint value corresponding to the taint key.
             */
            value: string;
        }
        /**
         * The node this Taint is attached to has the "effect" on
         * any pod that does not tolerate the Taint.
         */
        interface NodePoolSpecTemplateSpecStartupTaintsPatch {
            /**
             * Required. The effect of the taint on pods
             * that do not tolerate the taint.
             * Valid effects are NoSchedule, PreferNoSchedule and NoExecute.
             */
            effect: string;
            /**
             * Required. The taint key to be applied to a node.
             */
            key: string;
            /**
             * TimeAdded represents the time at which the taint was added.
             * It is only written for NoExecute taints.
             */
            timeAdded: string;
            /**
             * The taint value corresponding to the taint key.
             */
            value: string;
        }
        /**
         * The node this Taint is attached to has the "effect" on
         * any pod that does not tolerate the Taint.
         */
        interface NodePoolSpecTemplateSpecTaints {
            /**
             * Required. The effect of the taint on pods
             * that do not tolerate the taint.
             * Valid effects are NoSchedule, PreferNoSchedule and NoExecute.
             */
            effect: string;
            /**
             * Required. The taint key to be applied to a node.
             */
            key: string;
            /**
             * TimeAdded represents the time at which the taint was added.
             * It is only written for NoExecute taints.
             */
            timeAdded: string;
            /**
             * The taint value corresponding to the taint key.
             */
            value: string;
        }
        /**
         * The node this Taint is attached to has the "effect" on
         * any pod that does not tolerate the Taint.
         */
        interface NodePoolSpecTemplateSpecTaintsPatch {
            /**
             * Required. The effect of the taint on pods
             * that do not tolerate the taint.
             * Valid effects are NoSchedule, PreferNoSchedule and NoExecute.
             */
            effect: string;
            /**
             * Required. The taint key to be applied to a node.
             */
            key: string;
            /**
             * TimeAdded represents the time at which the taint was added.
             * It is only written for NoExecute taints.
             */
            timeAdded: string;
            /**
             * The taint value corresponding to the taint key.
             */
            value: string;
        }
        /**
         * NodePoolStatus defines the observed state of NodePool
         */
        interface NodePoolStatus {
            /**
             * Conditions contains signals for health and readiness
             */
            conditions: outputs.karpenter.v1.NodePoolStatusConditions[];
            /**
             * NodeClassObservedGeneration represents the observed nodeClass generation for referenced nodeClass. If this does not match
             * the actual NodeClass Generation, NodeRegistrationHealthy status condition on the NodePool will be reset
             */
            nodeClassObservedGeneration: number;
            /**
             * Resources is the list of resources that have been provisioned.
             */
            resources: {
                [key: string]: number | string;
            };
        }
        /**
         * Condition aliases the upstream type and adds additional helper methods
         */
        interface NodePoolStatusConditions {
            /**
             * lastTransitionTime is the last time the condition transitioned from one status to another.
             * This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
             */
            lastTransitionTime: string;
            /**
             * message is a human readable message indicating details about the transition.
             * This may be an empty string.
             */
            message: string;
            /**
             * observedGeneration represents the .metadata.generation that the condition was set based upon.
             * For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date
             * with respect to the current state of the instance.
             */
            observedGeneration: number;
            /**
             * reason contains a programmatic identifier indicating the reason for the condition's last transition.
             * Producers of specific condition types may define expected values and meanings for this field,
             * and whether the values are considered a guaranteed API.
             * The value should be a CamelCase string.
             * This field may not be empty.
             */
            reason: string;
            /**
             * status of the condition, one of True, False, Unknown.
             */
            status: string;
            /**
             * type of condition in CamelCase or in foo.example.com/CamelCase.
             */
            type: string;
        }
        /**
         * Condition aliases the upstream type and adds additional helper methods
         */
        interface NodePoolStatusConditionsPatch {
            /**
             * lastTransitionTime is the last time the condition transitioned from one status to another.
             * This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
             */
            lastTransitionTime: string;
            /**
             * message is a human readable message indicating details about the transition.
             * This may be an empty string.
             */
            message: string;
            /**
             * observedGeneration represents the .metadata.generation that the condition was set based upon.
             * For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date
             * with respect to the current state of the instance.
             */
            observedGeneration: number;
            /**
             * reason contains a programmatic identifier indicating the reason for the condition's last transition.
             * Producers of specific condition types may define expected values and meanings for this field,
             * and whether the values are considered a guaranteed API.
             * The value should be a CamelCase string.
             * This field may not be empty.
             */
            reason: string;
            /**
             * status of the condition, one of True, False, Unknown.
             */
            status: string;
            /**
             * type of condition in CamelCase or in foo.example.com/CamelCase.
             */
            type: string;
        }
        /**
         * NodePoolStatus defines the observed state of NodePool
         */
        interface NodePoolStatusPatch {
            /**
             * Conditions contains signals for health and readiness
             */
            conditions: outputs.karpenter.v1.NodePoolStatusConditionsPatch[];
            /**
             * NodeClassObservedGeneration represents the observed nodeClass generation for referenced nodeClass. If this does not match
             * the actual NodeClass Generation, NodeRegistrationHealthy status condition on the NodePool will be reset
             */
            nodeClassObservedGeneration: number;
            /**
             * Resources is the list of resources that have been provisioned.
             */
            resources: {
                [key: string]: number | string;
            };
        }
    }
}
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
