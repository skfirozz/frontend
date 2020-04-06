import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { FundooAccountServiceService } from './fundoo-account-service.service';
import { MatInputModule } from '@angular/material/input';
import { ForgotComponent } from './component/forgot/forgot.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { ArchiveComponent } from './component/archive/archive.component';
import { CreatenoteComponent } from './component/createnote/createnote.component';
import { HomeComponent } from './component/home/home.component';
import { DisplaynotesComponent } from './component/displaynotes/displaynotes.component';
import { NotesComponent } from './component/notes/notes.component';
import { TrashComponent } from './component/trash/trash.component';
import { ReminderComponent } from './component/reminder/reminder.component';
import { EditlabelsComponent } from './component/editlabels/editlabels.component';
import {MatTooltipModule} from '@angular/material/tooltip';

import { FlexLayoutModule } from '@angular/flex-layout';
import { DispComponent } from './component/disp/disp.component';
import { IconsComponent } from './component/icons/icons.component';
import { DisplayDataComponent } from './component/display-data/display-data.component';
import { CreateComponent } from './component/create/create.component';
import { LabelsComponent } from './component/labels/labels.component';
import { LabelnotesComponent } from './component/labelnotes/labelnotes.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgotComponent,
    ArchiveComponent,
    CreatenoteComponent,
    HomeComponent,
    DisplaynotesComponent,
    NotesComponent,
    TrashComponent,
    ReminderComponent,
    EditlabelsComponent,
    DispComponent,
    IconsComponent,
    DisplayDataComponent,
    CreateComponent,
    LabelsComponent,
    LabelnotesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    AppRoutingModule,
    MatMenuModule,
    FlexLayoutModule,
    MatCardModule,
    HttpClientModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule,
    MatButtonToggleModule,
    MatListModule,
    MatExpansionModule,
    // Component,
    RouterModule.forRoot([])

  ],
  providers: [FundooAccountServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
