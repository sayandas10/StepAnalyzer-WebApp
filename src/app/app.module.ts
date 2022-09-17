import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { MathjaxModule } from 'mathjax-angular';
import { MatSliderModule } from '@angular/material/slider';
import { TestFormComponent } from './test-form/test-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TestTableComponent } from './test-table/test-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TestDashComponent } from './test-dash/test-dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTreeModule } from '@angular/material/tree';
import { TestDragDropComponent } from './test-drag-drop/test-drag-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TestRegFormComponent } from './test-reg-form/test-reg-form.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { HomeComponent } from './home/home.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SystemInfoComponent } from './system-info/system-info.component';
import { StepResponseAnalysisComponent } from './step-response-analysis/step-response-analysis.component';
import { SystemRespComponent } from './system-resp/system-resp.component';

@NgModule({
  declarations: [
    AppComponent,
    TestFormComponent,
    TestTableComponent,
    TestDashComponent,
    TestDragDropComponent,
    TestRegFormComponent,
    HomeComponent,
    SystemInfoComponent,
    StepResponseAnalysisComponent,
    SystemRespComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ScrollingModule,
    MathjaxModule.forRoot(),
    MatSliderModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatMenuModule,
    MatTreeModule,
    DragDropModule,
    MatTooltipModule,
    MatBottomSheetModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
