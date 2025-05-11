import { Component,OnInit } from '@angular/core';
import { Livre } from '../model/livre.model';
import { Genre } from '../model/genre.model';
import { LivreService } from '../livre.service';

@Component({
  selector: 'app-recherche-par-genre',
  templateUrl: './recherche-par-genre.component.html'
})
export class RechercheParGenreComponent  implements OnInit {
  livres! : Livre[];
Idgenre! : number;
genres! : Genre[];
    constructor(private livreService:LivreService){}
  ngOnInit(): void {
   // this.genres=this.livreService.listegenres();
    this.livres=[];
  }
  onChange() { 
   // this.livres= this.livreService.rechercherParGenre(this.Idgenre); 
   }
     
   /* supprimerLivre(l: Livre)
    {
    //console.log(l);
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.livreService.supprimerLivre(l);
    }*/
}