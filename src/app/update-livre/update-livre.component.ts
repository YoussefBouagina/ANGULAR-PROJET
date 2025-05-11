import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Livre } from '../model/livre.model';
import { Genre } from '../model/genre.model';
import { LivreService } from '../livre.service';

@Component({
  selector: 'app-update-livre',
  templateUrl: './update-livre.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule]
})
export class UpdateLivreComponent implements OnInit {
  currentlivre = new Livre();
  genres!: Genre[];
  updatedgenId!: number;
  myForm!: FormGroup;
  loading: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private livreService: LivreService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      idlivre: ['', [Validators.required]],
      titre: ['', [Validators.required, Validators.minLength(6)]],
      auteur: ['', [Validators.required, Validators.minLength(6)]],
      nbpages: ['', [Validators.required]],
      datepublication: ['', [Validators.required]],
      idgenre: ['', [Validators.required]]
    });

    this.livreService.listegenres().subscribe(gens => {
      this.genres = gens._embedded.genres;
      console.log(gens);
    });

    this.livreService.consulterlivre(this.activatedRoute.snapshot.params['id'])
      .subscribe(prod => {
        this.currentlivre = prod;
        this.updatedgenId = this.currentlivre.genre.idgenre;
        this.myForm.patchValue(this.currentlivre);
      });
  }

  updatelivre() {
    if (this.myForm.valid) {
      this.currentlivre = { ...this.currentlivre, ...this.myForm.value };
      this.currentlivre.genre = this.genres.find(gen => gen.idgenre == this.updatedgenId)!;
      this.livreService.updatelivre(this.currentlivre).subscribe({
        next: () => this.router.navigate(['livres']),
        error: (err) => console.error('Error updating book:', err)
      });
    }
  }
}