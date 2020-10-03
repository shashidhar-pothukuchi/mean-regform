import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent} from './user/login/login.component';
import { HomepageComponent } from './user/homepage/homepage.component'

const routes: Routes = [
  {path: '', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home',component: HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
