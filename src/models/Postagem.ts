import type Tema from "./Tema";
import type Usuario from "./Usuario";

export default interface Postagem{
id: number;
title: string;	
text: string;	
created_at: string;	
theme: Tema | null;
user: Usuario | null;
}