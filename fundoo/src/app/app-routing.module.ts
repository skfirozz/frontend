import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ForgotComponent } from './component/forgot/forgot.component';
import { ArchiveComponent } from './component/archive/archive.component';
import { CreatenoteComponent } from './component/createnote/createnote.component';
import { HomeComponent } from './component/home/home.component';
import { TrashComponent } from './component/trash/trash.component';
import { ReminderComponent } from './component/reminder/reminder.component';
import { EditlabelsComponent } from './component/editlabels/editlabels.component';
import { DisplaynotesComponent } from './component/displaynotes/displaynotes.component';
import { NotesComponent } from './component/notes/notes.component';
import { LabelnotesComponent } from './component/labelnotes/labelnotes.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'reigister', component: RegisterComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: 'note', component:  CreatenoteComponent},
  { path: 'home', component: HomeComponent},
  { path: 's',component: CreatenoteComponent },
  { path: 'fundoo', component: HomeComponent,
    children: [
      { path: 'notes',component: DisplaynotesComponent },
      { path: 'archive',component: ArchiveComponent},
      { path: 'trash',component: TrashComponent },
      { path: 'reminder',component: ReminderComponent },
      { path: 'editlabels',component: EditlabelsComponent },
      { path: 'labels/:id',component: LabelnotesComponent },
    ]
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
