import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MDBBootstrapModule } from "angular-bootstrap-md";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    AppInitializerModule,
    CoreModule,
    LayoutModule,
    SharedModule,
    RouterModule.forRoot([])
  ],
  providers: [CoreModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
