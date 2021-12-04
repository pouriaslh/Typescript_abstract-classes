import { Shape } from "./Shape";

export class Cirle extends Shape{


    public get radius(): number {
        return this._radius;
    }
    public set radius(value: number) {
        this._radius = value;
    }

    calculateArea(): number {
       return Math.PI*Math.pow(this._radius,2);
    }
 
    

    constructor(theX:number,theY:number,private _radius: number){
        super(theX,theY);
    }
    


}