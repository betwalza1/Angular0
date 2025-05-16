import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maisons',
  standalone: false,
  templateUrl: './maisons.component.html',
  styleUrl: './maisons.component.scss'
})
export class MaisonsComponent implements OnInit {
  maisons: any[] = [];

  ngOnInit(): void {
    this.maisons = [
      { id: 1, nom: 'Maison A', superficie: 150, categorie: 'Villa', adresse: 'Rue 12', quartier: 'Nord' },
      { id: 2, nom: 'Maison B', superficie: 220, categorie: 'Appartement', adresse: 'Avenue 5', quartier: 'Sud' },
      { id: 3, nom: 'Maison C', superficie: 180, categorie: 'Studio', adresse: 'Boulevard 8', quartier: 'Soleil' }
    ];
  }
}
