import { Entity } from "src/app/types/entity";
import { Position } from "./position";

export type Personal = Entity<number> & {
    name: String;
    surname: String;
    lastname: String;
    birthday: String;
    salary: number;
    position?: Position;
    user: any;
}