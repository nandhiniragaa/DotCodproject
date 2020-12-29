import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { LoginPageComponent } from './login-page/login-page.component';


const routes: Routes = [
  {
    path: 'dashboard', component: DashBoardComponent
  },
  {
    path: 'login', component: LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashBoardComponent,LoginPageComponent]
