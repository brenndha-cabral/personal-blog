import type Postagem from "./Postagem";

export default interface Usuario {
    id: number;
    name: string;
    user: string;
    password: string;
    photo: string
    post?: Postagem | null;
}