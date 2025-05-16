import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { QuartiersComponent } from './pages/quartiers/quartiers.component';
import { AjouterQuartierComponent } from './pages/ajouter-quartier/ajouter-quartier.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModifierQuartierComponent } from './pages/modifier-quartier/modifier-quartier.component';
import { DetailsQuartierComponent } from './pages/details-quartier/details-quartier.component';
import { MaisonsComponent } from './pages/maisons/maisons.component';
import { AjouterMaisonComponent } from './pages/ajouter-maison/ajouter-maison.component';
import { DetailsMaisonComponent } from './pages/details-maison/details-maison.component';
import { ModifierMaisonComponent } from './pages/modifier-maison/modifier-maison.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { AjouterCategorieComponent } from './pages/ajouter-categorie/ajouter-categorie.component';
import { ModifierCategorieComponent } from './pages/modifier-categorie/modifier-categorie.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    DashboardComponent,
    QuartiersComponent,
    AjouterQuartierComponent,
    ModifierQuartierComponent,
    DetailsQuartierComponent,
    MaisonsComponent,
    AjouterMaisonComponent,
    DetailsMaisonComponent,
    ModifierMaisonComponent,
    CategoriesComponent,
    AjouterCategorieComponent,
    ModifierCategorieComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
