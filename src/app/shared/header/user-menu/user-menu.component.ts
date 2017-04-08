import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseAuthState} from 'angularfire2';

@Component({
  selector: 'user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.less']
})
export class UserMenuComponent implements OnInit {
  user: FirebaseAuthState;
  pending: Boolean = true;

  constructor(private af: AngularFire) { }

  ngOnInit() {
    this.af.auth.subscribe(auth => {
      if (auth) {
        this.user = auth;
      }
      this.pending = false;
    });
  }

  login() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    });
  }

}
