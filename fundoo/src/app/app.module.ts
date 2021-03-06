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
import { CreatenoteComponent } from './component/createnote/createnote.component';
import { HomeComponent } from './component/home/home.component';
import { DisplaynotesComponent } from './component/displaynotes/displaynotes.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { FlexLayoutModule } from '@angular/flex-layout';
import { IconsComponent } from './component/icons/icons.component';
import { DisplayDataComponent } from './component/display-data/display-data.component';
import { LabelnotesComponent } from './component/labelnotes/labelnotes.component';
import { CollaboratorComponent } from './component/collaborator/collaborator.component';
import { MatDialogModule} from '@angular/material/dialog';
import { DialogueComponent } from './component/dialogue/dialogue.component';
import { PinnedComponent } from './component/pinned/pinned.component';
import { EditlabelsComponent } from './component/editlabels/editlabels.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { SearchDataComponent } from './component/search-data/search-data.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
// import {MatChipsModule} from '@angular/material/chips';
// import { MatSnackBar } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgotComponent,
    CreatenoteComponent,
    HomeComponent,
    DisplaynotesComponent,
    IconsComponent,
    DialogueComponent,
    DisplayDataComponent,
    LabelnotesComponent,
    CollaboratorComponent,
    PinnedComponent,
    EditlabelsComponent,
    SearchDataComponent,
    ResetPasswordComponent,
  ],
 
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    AppRoutingModule,
    // MatChipsModule,
    MatMenuModule,
    MatCheckboxModule,
    FlexLayoutModule,
    MatCardModule,
    MatDatepickerModule,
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
    MatDialogModule,
    MatNativeDateModule,
    // Component,
    RouterModule.forRoot([])

  ],
  entryComponents: [DialogueComponent,CollaboratorComponent ],
  providers: [FundooAccountServiceService, MatDatepickerModule],
  bootstrap: [AppComponent]
})

export class AppModule { }
