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
    path: 'money-home/add-transaction/:opt/choose-category',
    loadChildren: () =>
      import(
        './pages/money-managment/choose-category/choose-category.module'
      ).then((m) => m.ChooseCategoryPageModule),
  },
  {
    path: 'money-home/add-transaction/:opt/transaction-data',
    loadChildren: () =>
      import(
        './pages/money-managment/transaction-data/transaction-data.module'
      ).then((m) => m.TransactionDataPageModule),
  },
  {
    path: 'money-home/:opt/category-setup',
    loadChildren: () =>
      import(
        './pages/money-managment/category-setup/category-setup.module'
      ).then((m) => m.CategorySetupPageModule),
  },
  {
    path: 'money-home/money-settings',
    loadChildren: () =>
      import(
        './pages/money-managment/money-settings/money-settings.module'
      ).then((m) => m.MoneySettingsPageModule),
  },
  {
    path: 'money-home/transaction-list',
    loadChildren: () =>
      import(
        './pages/money-managment/transaction-list/transaction-list.module'
      ).then((m) => m.TransactionListPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
