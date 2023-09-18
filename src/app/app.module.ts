import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DayProgramComponent } from './day-program/day-program.component';
import { LocationMapsComponent } from './location-maps/location-maps.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WeddingBannerComponent } from './wedding-banner/wedding-banner.component';
import { PageDividerComponent } from './page-divider/page-divider.component';
import { GiftRequestComponent } from './gift-request/gift-request.component';

@NgModule({
  declarations: [
    AppComponent,
    DayProgramComponent,
    LocationMapsComponent,
    WeddingBannerComponent,
    PageDividerComponent,
    GiftRequestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
