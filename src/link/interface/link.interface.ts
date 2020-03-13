import {Document} from "mongoose"

export  interface ILink extends Document{
    readonly title: String,
    readonly description: String,
    readonly code: String,
    readonly width: String,
    readonly height: String,
    readonly tage:[],
    readonly categoryId: String,
    readonly projectId: String,
    readonly dateCreated: String,
    readonly dateUpdated: String,

}