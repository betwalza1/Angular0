import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-quartier',
  standalone: false,
  templateUrl: './details-quartier.component.html',
  styleUrl: './details-quartier.component.scss'
})
export class DetailsQuartierComponent implements OnInit {
  quartierId!: number;
  quartier: any;
  maisons: any[] = [];

  ngOnInit(): void {
    this.quartierId = Number(this.route.snapshot.paramMap.get('id'));

    // Simuler récupération
    this.quartier = {
      nom: 'Quartier Nord',
      superficie: 2000,
      description: 'Zone résidentielle calme'
    };

    this.maisons = [
      { id: 1, nom: 'Maison A', superficie: 150 },
      { id: 2, nom: 'Maison B', superficie: 220 }
    ];
  }

  constructor(private route: ActivatedRoute) {}
}