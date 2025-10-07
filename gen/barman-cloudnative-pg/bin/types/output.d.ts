import * as outputs from "../types/output";
export declare namespace barmancloud {
    namespace v1 {
        /**
         * ObjectStore is the Schema for the objectstores API.
         */
        interface ObjectStore {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "barmancloud.cnpg.io/v1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "ObjectStore";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.barmancloud.v1.ObjectStoreSpec;
            status: outputs.barmancloud.v1.ObjectStoreStatus;
        }
        /**
         * Specification of the desired behavior of the ObjectStore.
         * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
         */
        interface ObjectStoreSpec {
            configuration: outputs.barmancloud.v1.ObjectStoreSpecConfiguration;
            instanceSidecarConfiguration: outputs.barmancloud.v1.ObjectStoreSpecInstanceSidecarConfiguration;
            /**
             * RetentionPolicy is the retention policy to be used for backups
             * and WALs (i.e. '60d'). The retention policy is expressed in the form
             * of `XXu` where `XX` is a positive integer and `u` is in `[dwm]` -
             * days, weeks, months.
             */
            retentionPolicy: string;
        }
        /**
         * The configuration for the barman-cloud tool suite
         */
        interface ObjectStoreSpecConfiguration {
            azureCredentials: outputs.barmancloud.v1.ObjectStoreSpecConfigurationAzureCredentials;
            data: outputs.barmancloud.v1.ObjectStoreSpecConfigurationData;
            /**
             * The path where to store the backup (i.e. s3://bucket/path/to/folder)
             * this path, with different destination folders, will be used for WALs
             * and for data
             */
            destinationPath: string;
            endpointCA: outputs.barmancloud.v1.ObjectStoreSpecConfigurationEndpointCA;
            /**
             * Endpoint to be used to upload data to the cloud,
             * overriding the automatic endpoint discovery
             */
            endpointURL: string;
            googleCredentials: outputs.barmancloud.v1.ObjectStoreSpecConfigurationGoogleCredentials;
            /**
             * HistoryTags is a list of key value pairs that will be passed to the
             * Barman --history-tags option.
             */
            historyTags: {
                [key: string]: string;
            };
            s3Credentials: outputs.barmancloud.v1.ObjectStoreSpecConfigurationS3Credentials;
            /**
             * The server name on S3, the cluster name is used if this
             * parameter is omitted
             */
            serverName: string;
            /**
             * Tags is a list of key value pairs that will be passed to the
             * Barman --tags option.
             */
            tags: {
                [key: string]: string;
            };
            wal: outputs.barmancloud.v1.ObjectStoreSpecConfigurationWal;
        }
        /**
         * The credentials to use to upload data to Azure Blob Storage
         */
        interface ObjectStoreSpecConfigurationAzureCredentials {
            connectionString: outputs.barmancloud.v1.ObjectStoreSpecConfigurationAzureCredentialsConnectionString;
            /**
             * Use the Azure AD based authentication without providing explicitly the keys.
             */
            inheritFromAzureAD: boolean;
            storageAccount: outputs.barmancloud.v1.ObjectStoreSpecConfigurationAzureCredentialsStorageAccount;
            storageKey: outputs.barmancloud.v1.ObjectStoreSpecConfigurationAzureCredentialsStorageKey;
            storageSasToken: outputs.barmancloud.v1.ObjectStoreSpecConfigurationAzureCredentialsStorageSasToken;
        }
        /**
         * The connection string to be used
         */
        interface ObjectStoreSpecConfigurationAzureCredentialsConnectionString {
            /**
             * The key to select
             */
            key: string;
            /**
             * Name of the referent.
             */
            name: string;
        }
        /**
         * The connection string to be used
         */
        interface ObjectStoreSpecConfigurationAzureCredentialsConnectionStringPatch {
            /**
             * The key to select
             */
            key: string;
            /**
             * Name of the referent.
             */
            name: string;
        }
        /**
         * The credentials to use to upload data to Azure Blob Storage
         */
        interface ObjectStoreSpecConfigurationAzureCredentialsPatch {
            connectionString: outputs.barmancloud.v1.ObjectStoreSpecConfigurationAzureCredentialsConnectionStringPatch;
            /**
             * Use the Azure AD based authentication without providing explicitly the keys.
             */
            inheritFromAzureAD: boolean;
            storageAccount: outputs.barmancloud.v1.ObjectStoreSpecConfigurationAzureCredentialsStorageAccountPatch;
            storageKey: outputs.barmancloud.v1.ObjectStoreSpecConfigurationAzureCredentialsStorageKeyPatch;
            storageSasToken: outputs.barmancloud.v1.ObjectStoreSpecConfigurationAzureCredentialsStorageSasTokenPatch;
        }
        /**
         * The storage account where to upload data
         */
        interface ObjectStoreSpecConfigurationAzureCredentialsStorageAccount {
            /**
             * The key to select
             */
            key: string;
            /**
             * Name of the referent.
             */
            name: string;
        }
        /**
         * The storage account where to upload data
         */
        interface ObjectStoreSpecConfigurationAzureCredentialsStorageAccountPatch {
            /**
             * The key to select
             */
            key: string;
            /**
             * Name of the referent.
             */
            name: string;
        }
        /**
         * The storage account key to be used in conjunction
         * with the storage account name
         */
        interface ObjectStoreSpecConfigurationAzureCredentialsStorageKey {
            /**
             * The key to select
             */
            key: string;
            /**
             * Name of the referent.
             */
            name: string;
        }
        /**
         * The storage account key to be used in conjunction
         * with the storage account name
         */
        interface ObjectStoreSpecConfigurationAzureCredentialsStorageKeyPatch {
            /**
             * The key to select
             */
            key: string;
            /**
             * Name of the referent.
             */
            name: string;
        }
        /**
         * A shared-access-signature to be used in conjunction with
         * the storage account name
         */
        interface ObjectStoreSpecConfigurationAzureCredentialsStorageSasToken {
            /**
             * The key to select
             */
            key: string;
            /**
             * Name of the referent.
             */
            name: string;
        }
        /**
         * A shared-access-signature to be used in conjunction with
         * the storage account name
         */
        interface ObjectStoreSpecConfigurationAzureCredentialsStorageSasTokenPatch {
            /**
             * The key to select
             */
            key: string;
            /**
             * Name of the referent.
             */
            name: string;
        }
        /**
         * The configuration to be used to backup the data files
         * When not defined, base backups files will be stored uncompressed and may
         * be unencrypted in the object store, according to the bucket default
         * policy.
         */
        interface ObjectStoreSpecConfigurationData {
            /**
             * AdditionalCommandArgs represents additional arguments that can be appended
             * to the 'barman-cloud-backup' command-line invocation. These arguments
             * provide flexibility to customize the backup process further according to
             * specific requirements or configurations.
             *
             * Example:
             * In a scenario where specialized backup options are required, such as setting
             * a specific timeout or defining custom behavior, users can use this field
             * to specify additional command arguments.
             *
             * Note:
             * It's essential to ensure that the provided arguments are valid and supported
             * by the 'barman-cloud-backup' command, to avoid potential errors or unintended
             * behavior during execution.
             */
            additionalCommandArgs: string[];
            /**
             * Compress a backup file (a tar file per tablespace) while streaming it
             * to the object store. Available options are empty string (no
             * compression, default), `gzip`, `bzip2`, and `snappy`.
             */
            compression: string;
            /**
             * Whenever to force the encryption of files (if the bucket is
             * not already configured for that).
             * Allowed options are empty string (use the bucket policy, default),
             * `AES256` and `aws:kms`
             */
            encryption: string;
            /**
             * Control whether the I/O workload for the backup initial checkpoint will
             * be limited, according to the `checkpoint_completion_target` setting on
             * the PostgreSQL server. If set to true, an immediate checkpoint will be
             * used, meaning PostgreSQL will complete the checkpoint as soon as
             * possible. `false` by default.
             */
            immediateCheckpoint: boolean;
            /**
             * The number of parallel jobs to be used to upload the backup, defaults
             * to 2
             */
            jobs: number;
        }
        /**
         * The configuration to be used to backup the data files
         * When not defined, base backups files will be stored uncompressed and may
         * be unencrypted in the object store, according to the bucket default
         * policy.
         */
        interface ObjectStoreSpecConfigurationDataPatch {
            /**
             * AdditionalCommandArgs represents additional arguments that can be appended
             * to the 'barman-cloud-backup' command-line invocation. These arguments
             * provide flexibility to customize the backup process further according to
             * specific requirements or configurations.
             *
             * Example:
             * In a scenario where specialized backup options are required, such as setting
             * a specific timeout or defining custom behavior, users can use this field
             * to specify additional command arguments.
             *
             * Note:
             * It's essential to ensure that the provided arguments are valid and supported
             * by the 'barman-cloud-backup' command, to avoid potential errors or unintended
             * behavior during execution.
             */
            additionalCommandArgs: string[];
            /**
             * Compress a backup file (a tar file per tablespace) while streaming it
             * to the object store. Available options are empty string (no
             * compression, default), `gzip`, `bzip2`, and `snappy`.
             */
            compression: string;
            /**
             * Whenever to force the encryption of files (if the bucket is
             * not already configured for that).
             * Allowed options are empty string (use the bucket policy, default),
             * `AES256` and `aws:kms`
             */
            encryption: string;
            /**
             * Control whether the I/O workload for the backup initial checkpoint will
             * be limited, according to the `checkpoint_completion_target` setting on
             * the PostgreSQL server. If set to true, an immediate checkpoint will be
             * used, meaning PostgreSQL will complete the checkpoint as soon as
             * possible. `false` by default.
             */
            immediateCheckpoint: boolean;
            /**
             * The number of parallel jobs to be used to upload the backup, defaults
             * to 2
             */
            jobs: number;
        }
        /**
         * EndpointCA store the CA bundle of the barman endpoint.
         * Useful when using self-signed certificates to avoid
         * errors with certificate issuer and barman-cloud-wal-archive
         */
        interface ObjectStoreSpecConfigurationEndpointCA {
            /**
             * The key to select
             */
            key: string;
            /**
             * Name of the referent.
             */
            name: string;
        }
        /**
         * EndpointCA store the CA bundle of the barman endpoint.
         * Useful when using self-signed certificates to avoid
         * errors with certificate issuer and barman-cloud-wal-archive
         */
        interface ObjectStoreSpecConfigurationEndpointCAPatch {
            /**
             * The key to select
             */
            key: string;
            /**
             * Name of the referent.
             */
            name: string;
        }
        /**
         * The credentials to use to upload data to Google Cloud Storage
         */
        interface ObjectStoreSpecConfigurationGoogleCredentials {
            applicationCredentials: outputs.barmancloud.v1.ObjectStoreSpecConfigurationGoogleCredentialsApplicationCredentials;
            /**
             * If set to true, will presume that it's running inside a GKE environment,
             * default to false.
             */
            gkeEnvironment: boolean;
        }
        /**
         * The secret containing the Google Cloud Storage JSON file with the credentials
         */
        interface ObjectStoreSpecConfigurationGoogleCredentialsApplicationCredentials {
            /**
             * The key to select
             */
            key: string;
            /**
             * Name of the referent.
             */
            name: string;
        }
        /**
         * The secret containing the Google Cloud Storage JSON file with the credentials
         */
        interface ObjectStoreSpecConfigurationGoogleCredentialsApplicationCredentialsPatch {
            /**
             * The key to select
             */
            key: string;
            /**
             * Name of the referent.
             */
            name: string;
        }
        /**
         * The credentials to use to upload data to Google Cloud Storage
         */
        interface ObjectStoreSpecConfigurationGoogleCredentialsPatch {
            applicationCredentials: outputs.barmancloud.v1.ObjectStoreSpecConfigurationGoogleCredentialsApplicationCredentialsPatch;
            /**
             * If set to true, will presume that it's running inside a GKE environment,
             * default to false.
             */
            gkeEnvironment: boolean;
        }
        /**
         * The configuration for the barman-cloud tool suite
         */
        interface ObjectStoreSpecConfigurationPatch {
            azureCredentials: outputs.barmancloud.v1.ObjectStoreSpecConfigurationAzureCredentialsPatch;
            data: outputs.barmancloud.v1.ObjectStoreSpecConfigurationDataPatch;
            /**
             * The path where to store the backup (i.e. s3://bucket/path/to/folder)
             * this path, with different destination folders, will be used for WALs
             * and for data
             */
            destinationPath: string;
            endpointCA: outputs.barmancloud.v1.ObjectStoreSpecConfigurationEndpointCAPatch;
            /**
             * Endpoint to be used to upload data to the cloud,
             * overriding the automatic endpoint discovery
             */
            endpointURL: string;
            googleCredentials: outputs.barmancloud.v1.ObjectStoreSpecConfigurationGoogleCredentialsPatch;
            /**
             * HistoryTags is a list of key value pairs that will be passed to the
             * Barman --history-tags option.
             */
            historyTags: {
                [key: string]: string;
            };
            s3Credentials: outputs.barmancloud.v1.ObjectStoreSpecConfigurationS3CredentialsPatch;
            /**
             * The server name on S3, the cluster name is used if this
             * parameter is omitted
             */
            serverName: string;
            /**
             * Tags is a list of key value pairs that will be passed to the
             * Barman --tags option.
             */
            tags: {
                [key: string]: string;
            };
            wal: outputs.barmancloud.v1.ObjectStoreSpecConfigurationWalPatch;
        }
        /**
         * The credentials to use to upload data to S3
         */
        interface ObjectStoreSpecConfigurationS3Credentials {
            accessKeyId: outputs.barmancloud.v1.ObjectStoreSpecConfigurationS3CredentialsAccessKeyId;
            /**
             * Use the role based authentication without providing explicitly the keys.
             */
            inheritFromIAMRole: boolean;
            region: outputs.barmancloud.v1.ObjectStoreSpecConfigurationS3CredentialsRegion;
            secretAccessKey: outputs.barmancloud.v1.ObjectStoreSpecConfigurationS3CredentialsSecretAccessKey;
            sessionToken: outputs.barmancloud.v1.ObjectStoreSpecConfigurationS3CredentialsSessionToken;
        }
        /**
         * The reference to the access key id
         */
        interface ObjectStoreSpecConfigurationS3CredentialsAccessKeyId {
            /**
             * The key to select
             */
            key: string;
            /**
             * Name of the referent.
             */
            name: string;
        }
        /**
         * The reference to the access key id
         */
        interface ObjectStoreSpecConfigurationS3CredentialsAccessKeyIdPatch {
            /**
             * The key to select
             */
            key: string;
            /**
             * Name of the referent.
             */
            name: string;
        }
        /**
         * The credentials to use to upload data to S3
         */
        interface ObjectStoreSpecConfigurationS3CredentialsPatch {
            accessKeyId: outputs.barmancloud.v1.ObjectStoreSpecConfigurationS3CredentialsAccessKeyIdPatch;
            /**
             * Use the role based authentication without providing explicitly the keys.
             */
            inheritFromIAMRole: boolean;
            region: outputs.barmancloud.v1.ObjectStoreSpecConfigurationS3CredentialsRegionPatch;
            secretAccessKey: outputs.barmancloud.v1.ObjectStoreSpecConfigurationS3CredentialsSecretAccessKeyPatch;
            sessionToken: outputs.barmancloud.v1.ObjectStoreSpecConfigurationS3CredentialsSessionTokenPatch;
        }
        /**
         * The reference to the secret containing the region name
         */
        interface ObjectStoreSpecConfigurationS3CredentialsRegion {
            /**
             * The key to select
             */
            key: string;
            /**
             * Name of the referent.
             */
            name: string;
        }
        /**
         * The reference to the secret containing the region name
         */
        interface ObjectStoreSpecConfigurationS3CredentialsRegionPatch {
            /**
             * The key to select
             */
            key: string;
            /**
             * Name of the referent.
             */
            name: string;
        }
        /**
         * The reference to the secret access key
         */
        interface ObjectStoreSpecConfigurationS3CredentialsSecretAccessKey {
            /**
             * The key to select
             */
            key: string;
            /**
             * Name of the referent.
             */
            name: string;
        }
        /**
         * The reference to the secret access key
         */
        interface ObjectStoreSpecConfigurationS3CredentialsSecretAccessKeyPatch {
            /**
             * The key to select
             */
            key: string;
            /**
             * Name of the referent.
             */
            name: string;
        }
        /**
         * The references to the session key
         */
        interface ObjectStoreSpecConfigurationS3CredentialsSessionToken {
            /**
             * The key to select
             */
            key: string;
            /**
             * Name of the referent.
             */
            name: string;
        }
        /**
         * The references to the session key
         */
        interface ObjectStoreSpecConfigurationS3CredentialsSessionTokenPatch {
            /**
             * The key to select
             */
            key: string;
            /**
             * Name of the referent.
             */
            name: string;
        }
        /**
         * The configuration for the backup of the WAL stream.
         * When not defined, WAL files will be stored uncompressed and may be
         * unencrypted in the object store, according to the bucket default policy.
         */
        interface ObjectStoreSpecConfigurationWal {
            /**
             * Additional arguments that can be appended to the 'barman-cloud-wal-archive'
             * command-line invocation. These arguments provide flexibility to customize
             * the WAL archive process further, according to specific requirements or configurations.
             *
             * Example:
             * In a scenario where specialized backup options are required, such as setting
             * a specific timeout or defining custom behavior, users can use this field
             * to specify additional command arguments.
             *
             * Note:
             * It's essential to ensure that the provided arguments are valid and supported
             * by the 'barman-cloud-wal-archive' command, to avoid potential errors or unintended
             * behavior during execution.
             */
            archiveAdditionalCommandArgs: string[];
            /**
             * Compress a WAL file before sending it to the object store. Available
             * options are empty string (no compression, default), `gzip`, `bzip2`,
             * `lz4`, `snappy`, `xz`, and `zstd`.
             */
            compression: string;
            /**
             * Whenever to force the encryption of files (if the bucket is
             * not already configured for that).
             * Allowed options are empty string (use the bucket policy, default),
             * `AES256` and `aws:kms`
             */
            encryption: string;
            /**
             * Number of WAL files to be either archived in parallel (when the
             * PostgreSQL instance is archiving to a backup object store) or
             * restored in parallel (when a PostgreSQL standby is fetching WAL
             * files from a recovery object store). If not specified, WAL files
             * will be processed one at a time. It accepts a positive integer as a
             * value - with 1 being the minimum accepted value.
             */
            maxParallel: number;
            /**
             * Additional arguments that can be appended to the 'barman-cloud-wal-restore'
             * command-line invocation. These arguments provide flexibility to customize
             * the WAL restore process further, according to specific requirements or configurations.
             *
             * Example:
             * In a scenario where specialized backup options are required, such as setting
             * a specific timeout or defining custom behavior, users can use this field
             * to specify additional command arguments.
             *
             * Note:
             * It's essential to ensure that the provided arguments are valid and supported
             * by the 'barman-cloud-wal-restore' command, to avoid potential errors or unintended
             * behavior during execution.
             */
            restoreAdditionalCommandArgs: string[];
        }
        /**
         * The configuration for the backup of the WAL stream.
         * When not defined, WAL files will be stored uncompressed and may be
         * unencrypted in the object store, according to the bucket default policy.
         */
        interface ObjectStoreSpecConfigurationWalPatch {
            /**
             * Additional arguments that can be appended to the 'barman-cloud-wal-archive'
             * command-line invocation. These arguments provide flexibility to customize
             * the WAL archive process further, according to specific requirements or configurations.
             *
             * Example:
             * In a scenario where specialized backup options are required, such as setting
             * a specific timeout or defining custom behavior, users can use this field
             * to specify additional command arguments.
             *
             * Note:
             * It's essential to ensure that the provided arguments are valid and supported
             * by the 'barman-cloud-wal-archive' command, to avoid potential errors or unintended
             * behavior during execution.
             */
            archiveAdditionalCommandArgs: string[];
            /**
             * Compress a WAL file before sending it to the object store. Available
             * options are empty string (no compression, default), `gzip`, `bzip2`,
             * `lz4`, `snappy`, `xz`, and `zstd`.
             */
            compression: string;
            /**
             * Whenever to force the encryption of files (if the bucket is
             * not already configured for that).
             * Allowed options are empty string (use the bucket policy, default),
             * `AES256` and `aws:kms`
             */
            encryption: string;
            /**
             * Number of WAL files to be either archived in parallel (when the
             * PostgreSQL instance is archiving to a backup object store) or
             * restored in parallel (when a PostgreSQL standby is fetching WAL
             * files from a recovery object store). If not specified, WAL files
             * will be processed one at a time. It accepts a positive integer as a
             * value - with 1 being the minimum accepted value.
             */
            maxParallel: number;
            /**
             * Additional arguments that can be appended to the 'barman-cloud-wal-restore'
             * command-line invocation. These arguments provide flexibility to customize
             * the WAL restore process further, according to specific requirements or configurations.
             *
             * Example:
             * In a scenario where specialized backup options are required, such as setting
             * a specific timeout or defining custom behavior, users can use this field
             * to specify additional command arguments.
             *
             * Note:
             * It's essential to ensure that the provided arguments are valid and supported
             * by the 'barman-cloud-wal-restore' command, to avoid potential errors or unintended
             * behavior during execution.
             */
            restoreAdditionalCommandArgs: string[];
        }
        /**
         * The configuration for the sidecar that runs in the instance pods
         */
        interface ObjectStoreSpecInstanceSidecarConfiguration {
            /**
             * AdditionalContainerArgs is an optional list of command-line arguments
             * to be passed to the sidecar container when it starts.
             * The provided arguments are appended to the container’s default arguments.
             */
            additionalContainerArgs: string[];
            /**
             * The environment to be explicitly passed to the sidecar
             */
            env: outputs.barmancloud.v1.ObjectStoreSpecInstanceSidecarConfigurationEnv[];
            /**
             * The log level for PostgreSQL instances. Valid values are: `error`, `warning`, `info` (default), `debug`, `trace`
             */
            logLevel: string;
            resources: outputs.barmancloud.v1.ObjectStoreSpecInstanceSidecarConfigurationResources;
            /**
             * The retentionCheckInterval defines the frequency at which the
             * system checks and enforces retention policies.
             */
            retentionPolicyIntervalSeconds: number;
        }
        /**
         * EnvVar represents an environment variable present in a Container.
         */
        interface ObjectStoreSpecInstanceSidecarConfigurationEnv {
            /**
             * Name of the environment variable.
             * May consist of any printable ASCII characters except '='.
             */
            name: string;
            /**
             * Variable references $(VAR_NAME) are expanded
             * using the previously defined environment variables in the container and
             * any service environment variables. If a variable cannot be resolved,
             * the reference in the input string will be unchanged. Double $$ are reduced
             * to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e.
             * "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)".
             * Escaped references will never be expanded, regardless of whether the variable
             * exists or not.
             * Defaults to "".
             */
            value: string;
            valueFrom: outputs.barmancloud.v1.ObjectStoreSpecInstanceSidecarConfigurationEnvValueFrom;
        }
        /**
         * EnvVar represents an environment variable present in a Container.
         */
        interface ObjectStoreSpecInstanceSidecarConfigurationEnvPatch {
            /**
             * Name of the environment variable.
             * May consist of any printable ASCII characters except '='.
             */
            name: string;
            /**
             * Variable references $(VAR_NAME) are expanded
             * using the previously defined environment variables in the container and
             * any service environment variables. If a variable cannot be resolved,
             * the reference in the input string will be unchanged. Double $$ are reduced
             * to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e.
             * "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)".
             * Escaped references will never be expanded, regardless of whether the variable
             * exists or not.
             * Defaults to "".
             */
            value: string;
            valueFrom: outputs.barmancloud.v1.ObjectStoreSpecInstanceSidecarConfigurationEnvValueFromPatch;
        }
        /**
         * Source for the environment variable's value. Cannot be used if value is not empty.
         */
        interface ObjectStoreSpecInstanceSidecarConfigurationEnvValueFrom {
            configMapKeyRef: outputs.barmancloud.v1.ObjectStoreSpecInstanceSidecarConfigurationEnvValueFromConfigMapKeyRef;
            fieldRef: outputs.barmancloud.v1.ObjectStoreSpecInstanceSidecarConfigurationEnvValueFromFieldRef;
            fileKeyRef: outputs.barmancloud.v1.ObjectStoreSpecInstanceSidecarConfigurationEnvValueFromFileKeyRef;
            resourceFieldRef: outputs.barmancloud.v1.ObjectStoreSpecInstanceSidecarConfigurationEnvValueFromResourceFieldRef;
            secretKeyRef: outputs.barmancloud.v1.ObjectStoreSpecInstanceSidecarConfigurationEnvValueFromSecretKeyRef;
        }
        /**
         * Selects a key of a ConfigMap.
         */
        interface ObjectStoreSpecInstanceSidecarConfigurationEnvValueFromConfigMapKeyRef {
            /**
             * The key to select.
             */
            key: string;
            /**
             * Name of the referent.
             * This field is effectively required, but due to backwards compatibility is
             * allowed to be empty. Instances of this type with an empty value here are
             * almost certainly wrong.
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
            /**
             * Specify whether the ConfigMap or its key must be defined
             */
            optional: boolean;
        }
        /**
         * Selects a key of a ConfigMap.
         */
        interface ObjectStoreSpecInstanceSidecarConfigurationEnvValueFromConfigMapKeyRefPatch {
            /**
             * The key to select.
             */
            key: string;
            /**
             * Name of the referent.
             * This field is effectively required, but due to backwards compatibility is
             * allowed to be empty. Instances of this type with an empty value here are
             * almost certainly wrong.
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
            /**
             * Specify whether the ConfigMap or its key must be defined
             */
            optional: boolean;
        }
        /**
         * Selects a field of the pod: supports metadata.name, metadata.namespace, `metadata.labels['<KEY>']`, `metadata.annotations['<KEY>']`,
         * spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
         */
        interface ObjectStoreSpecInstanceSidecarConfigurationEnvValueFromFieldRef {
            /**
             * Version of the schema the FieldPath is written in terms of, defaults to "v1".
             */
            apiVersion: string;
            /**
             * Path of the field to select in the specified API version.
             */
            fieldPath: string;
        }
        /**
         * Selects a field of the pod: supports metadata.name, metadata.namespace, `metadata.labels['<KEY>']`, `metadata.annotations['<KEY>']`,
         * spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
         */
        interface ObjectStoreSpecInstanceSidecarConfigurationEnvValueFromFieldRefPatch {
            /**
             * Version of the schema the FieldPath is written in terms of, defaults to "v1".
             */
            apiVersion: string;
            /**
             * Path of the field to select in the specified API version.
             */
            fieldPath: string;
        }
        /**
         * FileKeyRef selects a key of the env file.
         * Requires the EnvFiles feature gate to be enabled.
         */
        interface ObjectStoreSpecInstanceSidecarConfigurationEnvValueFromFileKeyRef {
            /**
             * The key within the env file. An invalid key will prevent the pod from starting.
             * The keys defined within a source may consist of any printable ASCII characters except '='.
             * During Alpha stage of the EnvFiles feature gate, the key size is limited to 128 characters.
             */
            key: string;
            /**
             * Specify whether the file or its key must be defined. If the file or key
             * does not exist, then the env var is not published.
             * If optional is set to true and the specified key does not exist,
             * the environment variable will not be set in the Pod's containers.
             *
             * If optional is set to false and the specified key does not exist,
             * an error will be returned during Pod creation.
             */
            optional: boolean;
            /**
             * The path within the volume from which to select the file.
             * Must be relative and may not contain the '..' path or start with '..'.
             */
            path: string;
            /**
             * The name of the volume mount containing the env file.
             */
            volumeName: string;
        }
        /**
         * FileKeyRef selects a key of the env file.
         * Requires the EnvFiles feature gate to be enabled.
         */
        interface ObjectStoreSpecInstanceSidecarConfigurationEnvValueFromFileKeyRefPatch {
            /**
             * The key within the env file. An invalid key will prevent the pod from starting.
             * The keys defined within a source may consist of any printable ASCII characters except '='.
             * During Alpha stage of the EnvFiles feature gate, the key size is limited to 128 characters.
             */
            key: string;
            /**
             * Specify whether the file or its key must be defined. If the file or key
             * does not exist, then the env var is not published.
             * If optional is set to true and the specified key does not exist,
             * the environment variable will not be set in the Pod's containers.
             *
             * If optional is set to false and the specified key does not exist,
             * an error will be returned during Pod creation.
             */
            optional: boolean;
            /**
             * The path within the volume from which to select the file.
             * Must be relative and may not contain the '..' path or start with '..'.
             */
            path: string;
            /**
             * The name of the volume mount containing the env file.
             */
            volumeName: string;
        }
        /**
         * Source for the environment variable's value. Cannot be used if value is not empty.
         */
        interface ObjectStoreSpecInstanceSidecarConfigurationEnvValueFromPatch {
            configMapKeyRef: outputs.barmancloud.v1.ObjectStoreSpecInstanceSidecarConfigurationEnvValueFromConfigMapKeyRefPatch;
            fieldRef: outputs.barmancloud.v1.ObjectStoreSpecInstanceSidecarConfigurationEnvValueFromFieldRefPatch;
            fileKeyRef: outputs.barmancloud.v1.ObjectStoreSpecInstanceSidecarConfigurationEnvValueFromFileKeyRefPatch;
            resourceFieldRef: outputs.barmancloud.v1.ObjectStoreSpecInstanceSidecarConfigurationEnvValueFromResourceFieldRefPatch;
            secretKeyRef: outputs.barmancloud.v1.ObjectStoreSpecInstanceSidecarConfigurationEnvValueFromSecretKeyRefPatch;
        }
        /**
         * Selects a resource of the container: only resources limits and requests
         * (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
         */
        interface ObjectStoreSpecInstanceSidecarConfigurationEnvValueFromResourceFieldRef {
            /**
             * Container name: required for volumes, optional for env vars
             */
            containerName: string;
            /**
             * Specifies the output format of the exposed resources, defaults to "1"
             */
            divisor: number | string;
            /**
             * Required: resource to select
             */
            resource: string;
        }
        /**
         * Selects a resource of the container: only resources limits and requests
         * (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
         */
        interface ObjectStoreSpecInstanceSidecarConfigurationEnvValueFromResourceFieldRefPatch {
            /**
             * Container name: required for volumes, optional for env vars
             */
            containerName: string;
            /**
             * Specifies the output format of the exposed resources, defaults to "1"
             */
            divisor: number | string;
            /**
             * Required: resource to select
             */
            resource: string;
        }
        /**
         * Selects a key of a secret in the pod's namespace
         */
        interface ObjectStoreSpecInstanceSidecarConfigurationEnvValueFromSecretKeyRef {
            /**
             * The key of the secret to select from.  Must be a valid secret key.
             */
            key: string;
            /**
             * Name of the referent.
             * This field is effectively required, but due to backwards compatibility is
             * allowed to be empty. Instances of this type with an empty value here are
             * almost certainly wrong.
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
            /**
             * Specify whether the Secret or its key must be defined
             */
            optional: boolean;
        }
        /**
         * Selects a key of a secret in the pod's namespace
         */
        interface ObjectStoreSpecInstanceSidecarConfigurationEnvValueFromSecretKeyRefPatch {
            /**
             * The key of the secret to select from.  Must be a valid secret key.
             */
            key: string;
            /**
             * Name of the referent.
             * This field is effectively required, but due to backwards compatibility is
             * allowed to be empty. Instances of this type with an empty value here are
             * almost certainly wrong.
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name: string;
            /**
             * Specify whether the Secret or its key must be defined
             */
            optional: boolean;
        }
        /**
         * The configuration for the sidecar that runs in the instance pods
         */
        interface ObjectStoreSpecInstanceSidecarConfigurationPatch {
            /**
             * AdditionalContainerArgs is an optional list of command-line arguments
             * to be passed to the sidecar container when it starts.
             * The provided arguments are appended to the container’s default arguments.
             */
            additionalContainerArgs: string[];
            /**
             * The environment to be explicitly passed to the sidecar
             */
            env: outputs.barmancloud.v1.ObjectStoreSpecInstanceSidecarConfigurationEnvPatch[];
            /**
             * The log level for PostgreSQL instances. Valid values are: `error`, `warning`, `info` (default), `debug`, `trace`
             */
            logLevel: string;
            resources: outputs.barmancloud.v1.ObjectStoreSpecInstanceSidecarConfigurationResourcesPatch;
            /**
             * The retentionCheckInterval defines the frequency at which the
             * system checks and enforces retention policies.
             */
            retentionPolicyIntervalSeconds: number;
        }
        /**
         * Resources define cpu/memory requests and limits for the sidecar that runs in the instance pods.
         */
        interface ObjectStoreSpecInstanceSidecarConfigurationResources {
            /**
             * Claims lists the names of resources, defined in spec.resourceClaims,
             * that are used by this container.
             *
             * This field depends on the
             * DynamicResourceAllocation feature gate.
             *
             * This field is immutable. It can only be set for containers.
             */
            claims: outputs.barmancloud.v1.ObjectStoreSpecInstanceSidecarConfigurationResourcesClaims[];
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
        interface ObjectStoreSpecInstanceSidecarConfigurationResourcesClaims {
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
        interface ObjectStoreSpecInstanceSidecarConfigurationResourcesClaimsPatch {
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
         * Resources define cpu/memory requests and limits for the sidecar that runs in the instance pods.
         */
        interface ObjectStoreSpecInstanceSidecarConfigurationResourcesPatch {
            /**
             * Claims lists the names of resources, defined in spec.resourceClaims,
             * that are used by this container.
             *
             * This field depends on the
             * DynamicResourceAllocation feature gate.
             *
             * This field is immutable. It can only be set for containers.
             */
            claims: outputs.barmancloud.v1.ObjectStoreSpecInstanceSidecarConfigurationResourcesClaimsPatch[];
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
         * Specification of the desired behavior of the ObjectStore.
         * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
         */
        interface ObjectStoreSpecPatch {
            configuration: outputs.barmancloud.v1.ObjectStoreSpecConfigurationPatch;
            instanceSidecarConfiguration: outputs.barmancloud.v1.ObjectStoreSpecInstanceSidecarConfigurationPatch;
            /**
             * RetentionPolicy is the retention policy to be used for backups
             * and WALs (i.e. '60d'). The retention policy is expressed in the form
             * of `XXu` where `XX` is a positive integer and `u` is in `[dwm]` -
             * days, weeks, months.
             */
            retentionPolicy: string;
        }
        /**
         * Most recently observed status of the ObjectStore. This data may not be up to
         * date. Populated by the system. Read-only.
         * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
         */
        interface ObjectStoreStatus {
            /**
             * ServerRecoveryWindow maps each server to its recovery window
             */
            serverRecoveryWindow: {
                [key: string]: {
                    [key: string]: string;
                };
            };
        }
        /**
         * Most recently observed status of the ObjectStore. This data may not be up to
         * date. Populated by the system. Read-only.
         * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
         */
        interface ObjectStoreStatusPatch {
            /**
             * ServerRecoveryWindow maps each server to its recovery window
             */
            serverRecoveryWindow: {
                [key: string]: {
                    [key: string]: string;
                };
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
