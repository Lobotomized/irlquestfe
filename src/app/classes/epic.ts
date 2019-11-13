import { Quest } from "./quest";

export interface Epic{
    id:Number,
    name:String,
    quests:Array<Quest>
}