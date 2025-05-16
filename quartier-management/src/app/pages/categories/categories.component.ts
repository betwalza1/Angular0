import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  standalone: false,
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})

export class CategoriesComponent implements OnInit {
  categories: any[] = [];

  ngOnInit(): void {
    this.categories = [
      { id: 1, nom: 'Villa' },
      { id: 2, nom: 'Appartement' },
      { id: 3, nom: 'Studio' }
    ];
  }

  supprimerCategorie(id: number) {
    if (confirm("Confirmer la suppression ?")) {
      this.categories = this.categories.filter(c => c.id !== id);
      alert("Catégorie supprimée !");
    }
  }
}
