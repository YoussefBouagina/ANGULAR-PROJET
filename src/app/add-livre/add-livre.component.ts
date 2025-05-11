import { Component, OnInit } from '@angular/core';
import { Livre } from '../model/livre.model';
import { LivreService } from '../livre.service';
import { Router } from '@angular/router';
import { Genre } from '../model/genre.model';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-livre',
  templateUrl: './add-livre.component.html'
})
export class AddLivreComponent implements OnInit  {
  message : string="";
  newlivre = new Livre();
  genres! :Genre[];
newIdgenre! : number;
newgenre! :Genre;
myForm!: FormGroup;
  constructor(private livreService:LivreService,
    private router :Router,private formBuilder: FormBuilder
  ) { }
  
  ngOnInit() : void {
  
 
    this.livreService.listegenres().
    subscribe(gens=> {this.genres = gens._embedded.genres;;
    console.log(gens);
    });
    this.myForm = this.formBuilder.group({

      //idlivre : ['', [Validators.required]],
      titre : ['', [Validators.required, Validators.minLength(6)]],
      auteur : ['', [Validators.required, Validators.minLength(6)]],
      nbpages : ['', [Validators.required]],
      //email: ['', [Validators.email, Validators.required]],
      datepublication: ['', [Validators.required]],
idgenre : ['', [Validators.required]]
      } );
      
    }
  addlivre(){
    this.newlivre.genre = this.genres.find(gen => gen.idgenre == this.newIdgenre)!
    this.livreService.ajouterlivre(this.newlivre).subscribe(liv => {console.log(liv);
    this.message="Livre"+this.newlivre.titre+" est ajouté avec succès!";
    this.router.navigate(['livres']);
     }); 
     
  }}


