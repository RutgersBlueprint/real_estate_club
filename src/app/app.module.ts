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
import { UpcomingEventsComponent } from './pages/upcoming-events/upcoming-events.component';
import { UpcomingEventTileComponent } from './components/upcoming-event-tile/upcoming-event-tile.component';
import { UpcomingEventPostComponent } from './components/upcoming-event-post/upcoming-event-post.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from "@fortawesome/angular-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFireModule } from "@angular/fire";
import { environment } from "src/environments/environment.prod";

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
    ContactComponent,
    UpcomingEventsComponent,
    UpcomingEventTileComponent,
    UpcomingEventPostComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    FontAwesomeModule, 
    ScrollToModule.forRoot(), 
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule
  ],
  exports: [ScrollToModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faBars);
  }
}
