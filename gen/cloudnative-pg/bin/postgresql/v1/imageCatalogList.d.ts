import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * ImageCatalogList is a list of ImageCatalog
 */
export declare class ImageCatalogList extends pulumi.CustomResource {
    /**
     * Get an existing ImageCatalogList resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ImageCatalogList;
    /**
     * Returns true if the given object is an instance of ImageCatalogList.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ImageCatalogList;
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    readonly apiVersion: pulumi.Output<"postgresql.cnpg.io/v1">;
    /**
     * List of imagecatalogs. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md
     */
    readonly items: pulumi.Output<outputs.postgresql.v1.ImageCatalog[]>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    readonly kind: pulumi.Output<"ImageCatalogList">;
    /**
     * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    readonly metadata: pulumi.Output<outputs.meta.v1.ListMeta>;
    /**
     * Create a ImageCatalogList resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ImageCatalogListArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ImageCatalogList resource.
 */
export interface ImageCatalogListArgs {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: pulumi.Input<"postgresql.cnpg.io/v1">;
    /**
     * List of imagecatalogs. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md
     */
    items: pulumi.Input<pulumi.Input<inputs.postgresql.v1.ImageCatalog>[]>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: pulumi.Input<"ImageCatalogList">;
    /**
     * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    metadata?: pulumi.Input<inputs.meta.v1.ListMeta>;
}
