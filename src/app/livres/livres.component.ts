import { Component, OnInit } from '@angular/core';
import { Livre } from '../model/livre.model';
import { LivreService } from '../livre.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html'
})
export class LivresComponent implements OnInit {
 livres? : Livre[];
  constructor(private livreService: LivreService,public authService: AuthService) {
   /*this.livres = [
      {idlivre : 1, titre : "Eragon", auteur :"Christopher Paolini", nbpages :503, genre : "fantasy" ,  datepublication : new Date("05/08/2003")},
      {idlivre : 2,titre :"ACOTAR", auteur : "SARAHj.MAAS",nbpages : 498, genre :"fantasy", datepublication : new Date("05/05/2015")},
      {idlivre : 3,titre :"fourth wing", auteur : "REBBECA YARROS", nbpages : 419, genre : "fantasy-romance", datepublication : new Date("02/05/2023")}
       ];*/

        
    }
    ngOnInit() {
      this.livreService.listelivres().subscribe(livs => {
       console.log(livs);
       this.livres = livs;
       });
    }
    chargerlivres(){
      this.livreService.listelivres().subscribe(livs=> {
      console.log(livs);
      this.livres = livs;
      }); 
      }
      
 
    supprimerlivre(l:Livre)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.livreService.supprimerlivre(l.idlivre).subscribe(() => {
console.log("produit supprimé");
this.chargerlivres();
});
} 
  }