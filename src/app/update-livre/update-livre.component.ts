import { Component, OnInit } from '@angular/core';
import { Livre } from '../model/livre.model';
import { LivreService } from '../livre.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Genre } from '../model/genre.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-update-livre',
  templateUrl: './update-livre.component.html',
  styles: ``
})
export class UpdateLivreComponent implements OnInit{
  
      currentlivre = new Livre();
      genres! : Genre[];
      updatedgenId! : number;


      

myForm!: FormGroup;

loading : boolean = false;
      constructor(private activatedRoute: ActivatedRoute,
        private router :Router,
      private livreService: LivreService,private formBuilder: FormBuilder) { }


    ngOnInit() {
      this.livreService.listegenres().
      subscribe(gens => {this.genres =gens._embedded.genres;
      console.log(gens);
      });
      this.livreService.consulterlivre(this.activatedRoute.snapshot.params['id']).
      subscribe( prod =>{ this.currentlivre = prod; 
      this.updatedgenId = 
      this.currentlivre.genre.idgenre;
      } ) ;
    }
    
    
      
      updatelivre(){

        this.currentlivre.genre = this.genres.
        find(gen => gen.idgenre == this.updatedgenId)!;
         this.livreService.updatelivre(this.currentlivre).subscribe(liv => {
          this.router.navigate(['livres']); }
          );
          
      } 
 }
