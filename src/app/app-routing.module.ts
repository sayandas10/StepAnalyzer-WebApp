import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/auth.guard';
import { MyAuthService } from './services/my-auth.service';
import { TestFormComponent } from './test-form/test-form.component';
import { TestRegFormComponent } from './test-reg-form/test-reg-form.component';
import { TestDashComponent } from './test-dash/test-dash.component';
import { SystemInfoComponent } from './system-info/system-info.component';
import { StepResponseAnalysisComponent } from './step-response-analysis/step-response-analysis.component';
import { SystemRespComponent } from './system-resp/system-resp.component';

const routes: Routes = [
  {path:"login", component:TestFormComponent},
  {path:"", component:TestFormComponent},
  {path:"register",component:TestRegFormComponent},
  {path:"dash",component:TestDashComponent,canActivate:[AuthGuard]},
  {path:"home",component:HomeComponent,canActivate:[AuthGuard]},
  {path:"sysinfo",component:SystemInfoComponent,canActivate:[AuthGuard]},
  {path:"stepresponse",component:StepResponseAnalysisComponent,canActivate:[AuthGuard]},
  {path:"sysresp",component:SystemRespComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
