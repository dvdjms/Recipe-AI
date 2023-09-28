import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatgptContainerComponent } from './chatgpt-container/chatgpt-container.component';
import { FoodSearchComponent } from './food-search/food-search.component';
import { ModalComponent } from './modal/modal.component';
import { NgbdModalContent } from './modal-content/model-content.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from './services/shared.service';
import { FetchService } from './services/fetch.service';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ChatgptContainerComponent,
    FoodSearchComponent,
    NgbdModalContent,
    ModalComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'recipe', component: ChatgptContainerComponent }
    ]),
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [SharedService, FetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
