import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { NavLinkComponent } from "./components/nav-link/nav-link.component";
import { HomeComponent } from "./pages/home/home.component";
import { FooterComponent } from "./components/footer/footer.component";
import { AboutComponent } from "./pages/about/about.component";
import { ExecutivesComponent } from "./pages/executives/executives.component";
import { ExcutiveTileComponent } from "./components/executive-tile/executive-tile.component";
import { AlumniComponent } from './pages/alumni/alumni.component';
import { AlumniTileComponent } from './components/alumni-tile/alumni-tile.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavLinkComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ExecutivesComponent,
    ExcutiveTileComponent,
    AlumniComponent,
    AlumniTileComponent,
    ContactComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
