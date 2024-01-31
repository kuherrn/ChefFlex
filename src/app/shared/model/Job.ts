import { Time } from "@angular/common";

export class Job {
    id!:Number;
    name!:string;
    pay!:number;
    location!:string;
    startTime!:String;
    endTime!:String;
    imageUrl!:String;
    tag?:string[];
    rating!:number;
}