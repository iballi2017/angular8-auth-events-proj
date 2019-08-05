import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { SpecialComponent } from './special/special.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: "", redirectTo: "/events", pathMatch: "full"},
  {path: "register", component: RegisterComponent},
  {path: "login", component: LoginComponent},
  {path: "events", component: EventsComponent},
  {path: "special", component: SpecialComponent, canActivate: [AuthGuard]},
  {path: "about", component: AboutComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
