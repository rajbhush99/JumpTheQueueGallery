import { Visitor } from "../entities/visitor.entity";

export class LoginResponse extends Visitor{
    id!:number;
    username!:string;
}