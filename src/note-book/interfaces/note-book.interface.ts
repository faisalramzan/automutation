
import {Document} from "mongoose"

export  interface INoteBook extends Document{
    readonly name: String,
    readonly description: String,
    readonly tage:[],
    readonly categoryId: String,
    readonly projectId: String,
    readonly dateCreated: String,
    readonly version: String,
    readonly versionId: String,

}