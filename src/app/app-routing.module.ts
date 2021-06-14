import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'registro',
    loadChildren: () =>
      import('./pages/registro/registro.module').then(
        (m) => m.RegistroPageModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },

  {
    path: 'recover-password',
    loadChildren: () =>
      import('./pages/recover-password/recover-password.module').then(
        (m) => m.RecoverPasswordPageModule
      ),
  },
  {
    path: 'money-home',
    loadChildren: () =>
      import('./pages/money-managment/money-home/money-home.module').then(
        (m) => m.MoneyHomePageModule
      ),
  },
  {
    path: 'goals-home',
    loadChildren: () =>
      import('./pages/goals-managment/goals-home/goals-home.module').then(
        (m) => m.GoalsHomePageModule
      ),
  },
  {
    path: 'notes-home',
    loadChildren: () =>
      import('./pages/notes-managment/notes-home/notes-home.module').then(
        (m) => m.NotesHomePageModule
      ),
  },
  {
    path: 'money-home/add-transaction/:opt',
    loadChildren: () =>
      import(
        './pages/money-managment/add-transaction/add-transaction.module'
      ).then((m) => m.AddTransactionPageModule),
  },
  {
    path: 'money-home/add-transaction/:opt/transaction-data',
    loadChildren: () =>
      import(
        './pages/money-managment/transaction-data/transaction-data.module'
      ).then((m) => m.TransactionDataPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
