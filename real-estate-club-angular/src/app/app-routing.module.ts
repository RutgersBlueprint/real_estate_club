import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { ExecutivesComponent } from "./pages/executives/executives.component";
import { AlumniComponent } from "./pages/alumni/alumni.component";
import { ContactComponent } from "./pages/contact/contact.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "executives", component: ExecutivesComponent },
  { path: "alumni", component: AlumniComponent },
  { path: "contact", component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
