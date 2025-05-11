import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivresComponent } from './livres/livres.component';
import { AddLivreComponent } from './add-livre/add-livre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateLivreComponent } from './update-livre/update-livre.component';
import { RechercheParGenreComponent } from './recherche-par-genre/recherche-par-genre.component';
import { RechercheParTitreComponent } from './recherche-par-titre/recherche-par-titre.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LivresComponent,
    AddLivreComponent,
    UpdateLivreComponent,
    RechercheParGenreComponent,
    RechercheParTitreComponent,
    SearchFilterPipe,
    LoginComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
