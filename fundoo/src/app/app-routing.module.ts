import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ForgotComponent } from './component/forgot/forgot.component';
import { ArchiveComponent } from './component/archive/archive.component';
import { CreatenoteComponent } from './component/createnote/createnote.component';
import { HomeComponent } from './component/home/home.component';
import { NotesComponent } from './component/notes/notes.component';
import { TrashComponent } from './component/trash/trash.component';
import { ReminderComponent } from './component/reminder/reminder.component';
import { EditlabelsComponent } from './component/editlabels/editlabels.component';
import { DisplaynotesComponent } from './component/displaynotes/displaynotes.component';
import { Test2Component } from './component/test2/test2.component';
import { Test1Component } from './component/test1/test1.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'test2', component: Test2Component },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: 'note', component:  CreatenoteComponent},
  { path: 'home', component: HomeComponent},
  { path: '', component: HomeComponent,
    children: [
      { path: '',component: DisplaynotesComponent },
      // { path: 'notes',component: NotesComponent },
      { path: 'archive',component: ArchiveComponent},
      { path: 'trash',component: TrashComponent },
      { path: 'reminder',component: ReminderComponent },
      { path: 'editlabels',component: EditlabelsComponent },
    ]
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
