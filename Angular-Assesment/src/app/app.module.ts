import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

import { RouterModule } from "@angular/router";
import { ClimesComponent } from "./climes/climes.component";
import { UploadComponent } from "./upload/upload.component";
import { MatTabsModule } from "@angular/material/tabs";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: ClimesComponent },
      { path: "upload", component: UploadComponent }
    ]),
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    ClimesComponent,
    UploadComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
