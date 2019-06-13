import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    loadChildren: "./features/home/home.module#HomeModule"
  },
  {
    path: "",
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "private-area",
        loadChildren:
          "./features/private-area/private-area.module#Private-areaModule"
      },
      {
        path: "clients",
        loadChildren: "./features/clients/clients.module#ClientsModule"
      },
      {
        path: "providers",
        loadChildren: "./features/providers/providers.module#ProvidersModule"
      },
      {
        path: "services",
        loadChildren: "./features/services/services.module#ervicesModule"
      }
    ]
  },
  {
    path: "about",
    loadChildren: "./features/about/about.module#AboutModule"
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
