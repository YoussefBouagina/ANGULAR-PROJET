import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Livre } from '../model/livre.model';
import { LivreService } from '../livre.service';
import { SearchFilterPipe } from '../search-filter.pipe';

@Component({
  selector: 'app-recherche-par-titre',
  templateUrl: './recherche-par-titre.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchFilterPipe],
  styles: ``
})
export class RechercheParTitreComponent implements OnInit {
  alllivres!: Livre[];
  titre!: string;
  livres!: Livre[];
  searchTerm!: string;
  
  constructor(private livreService: LivreService) {}
  
  ngOnInit(): void {
    this.livreService.listelivres().subscribe(livs => {
      console.log(livs);
      this.livres = livs;
      this.alllivres = livs;
    });
  }
  
  onKeyUp(filterText: string) {
    this.livres = this.alllivres.filter(item =>
      item.titre.toLowerCase().includes(filterText.toLowerCase()));
  }
}