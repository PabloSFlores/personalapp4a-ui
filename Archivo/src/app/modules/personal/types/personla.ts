import { Entity } from "src/app/types/entity";

export type Personal = Entity<number> & {
    name: String;
    surname: String;
    lastname: String;
    birthday: String;
    salary: number;
    position: any;
    user: any;
}