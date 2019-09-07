import {DashboardModule} from "./features/dashboard/dashboard.module";

export const routers = [
  {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
  {path: 'task2', loadChildren: () => import('@adjutant/task/feature-shell').then(m => m.TaskFeatureShellModule)},
  {path: 'task', loadChildren: () => import('./features/todo/todo.module').then(m => m.TodoModule)},
  {path: 'dashboard', loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)}
];
