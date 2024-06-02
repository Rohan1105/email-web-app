import { Routes } from '@angular/router';
import { InboxComponent } from './inbox/inbox.component';
import { StarredComponent } from './starred/starred.component';
import { SentComponent } from './sent/sent.component';
import { SpamComponent } from './spam/spam.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'inbox',
    // component: InboxComponent,
    component: HeaderComponent,
  },
  {
    path: 'starred',
    component: StarredComponent,
  },

  {
    path: 'sent',
    component: SentComponent,
  },

  {
    path: 'spam',
    component: SpamComponent,
  },
];
