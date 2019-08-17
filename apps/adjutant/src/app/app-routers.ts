export const routers = [
  {path: '', pathMatch: 'full', redirectTo: 'task'},
  {path: 'task2', loadChildren: () => import('@adjutant/task/feature-shell').then(m => m.TaskFeatureShellModule)},
  {path: 'task', loadChildren: () => import('./features/todo/todo.module').then(m => m.TodoModule)}
];
