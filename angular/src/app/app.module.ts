import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { Feature1Module } from './feature1/feature1.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    AppRoutingRoutingModule,
    Feature1Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
