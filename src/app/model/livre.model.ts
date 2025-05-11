import { Genre } from "./genre.model";

export class Livre{
    idlivre ! : number;
    titre! : string;
    auteur! : string;
    nbpages! : number;
   // email!: string ;
    datepublication! : Date;
    genre! : Genre;
}

