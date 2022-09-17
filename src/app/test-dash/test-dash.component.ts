import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MyAuthService } from '../services/my-auth.service';
import { PromptsService } from '../services/prompts.service';

@Component({
  selector: 'app-test-dash',
  templateUrl: './test-dash.component.html',
  styleUrls: ['./test-dash.component.css']
})
export class TestDashComponent {
  /** Based on the screen size, switch from standard to one column per row */
  tf = "$G(s) = {C(s) \\over R(s)}$";
  stepresp = "$c(t) = {1 - ({e^{\\delta\\omega_n t} \\over \\sqrt{1-\\delta^2}})\\sin({\\omega_d t + \\theta})}$"
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'System Info', cols: 2, rows: 1,
            imgurl: "https://cdn-icons-png.flaticon.com/512/3098/3098184.png" },
          { title: 'Step Response Analysis', cols: 1, rows: 2, 
            imgurl: "https://cdn-icons-png.flaticon.com/512/5575/5575220.png" },
          { title: 'System Response (Plot)', cols: 1, rows: 2, 
            imgurl: "https://cdn-icons-png.flaticon.com/512/3775/3775101.png" },
        ];
      }

      return [
        { title: 'System Info', cols: 2, rows: 1, 
          imgurl: "https://cdn-icons-png.flaticon.com/512/3098/3098184.png" },
        { title: 'Step Response Analysis', cols: 1, rows: 2, 
          imgurl: "https://cdn-icons-png.flaticon.com/512/5575/5575220.png" },
        { title: 'System Response (Plot)', cols: 1, rows: 2, 
          imgurl: "https://cdn-icons-png.flaticon.com/512/3775/3775101.png" },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, private myauth: MyAuthService,
              private prompt: PromptsService) {}

  _logout() {
    let user = sessionStorage.getItem("username");
    this.myauth.logOut();
    this.prompt.openSnackBar(`${user} logged out!`);
  }
}
