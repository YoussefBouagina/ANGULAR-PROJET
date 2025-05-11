import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Livre } from '../model/livre.model';
import { LivreService } from '../livre.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule]
})
export class LivresComponent implements OnInit {
  livres?: Livre[];
  
  constructor(private livreService: LivreService, public authService: AuthService) {}
  
  ngOnInit() {
    this.chargerlivres();
  }

  chargerlivres() {
    this.livreService.listelivres().subscribe({
      next: (livs) => {
        console.log(livs);
        this.livres = livs;
      },
      error: (err) => {
        console.error('Error loading books:', err);
      }
    });
  }

  supprimerlivre(l: Livre) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf) {
      this.livreService.supprimerlivre(l.idlivre).subscribe({
        next: () => {
          console.log("livre supprimé");
          this.chargerlivres();
        },
        error: (err) => {
          console.error('Error deleting book:', err);
        }
      });
    }
  }
}