import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ForgotComponent } from './component/forgot/forgot.component';
import { HomeComponent } from './component/home/home.component';
import { DisplaynotesComponent } from './component/displaynotes/displaynotes.component';
import { LabelnotesComponent } from './component/labelnotes/labelnotes.component';
import { ReminderComponent } from './component/reminder/reminder.component';
import { SignoutComponent } from './component/signout/signout.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'date', component: ReminderComponent },
  { path: 'reigister', component: RegisterComponent },
  { path: 'out', component: SignoutComponent },
  { path: 'forgot', component: ForgotComponent },
  {
    path: 'fundoo', component: HomeComponent,
    children: [
      { path: 'notes', component: DisplaynotesComponent },
      { path: 'labels', component: LabelnotesComponent },

    ]
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
