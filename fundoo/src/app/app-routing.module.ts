import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { ForgotComponent } from './component/forgot/forgot.component';
import { HomeComponent } from './component/home/home.component';
import { DisplaynotesComponent } from './component/displaynotes/displaynotes.component';
import { LabelnotesComponent } from './component/labelnotes/labelnotes.component';
import { SearchDataComponent } from './component/search-data/search-data.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: RegisterComponent },
  { path: 'resetPassword/:id', component: ResetPasswordComponent },
  { path: 'forgot', component: ForgotComponent },
  {
    path: 'fundoo', component: HomeComponent,
    children: [
      { path: 'notes', component: DisplaynotesComponent },
      { path: 'labels', component: LabelnotesComponent },
      { path: 'search', component: SearchDataComponent },
    ]
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
