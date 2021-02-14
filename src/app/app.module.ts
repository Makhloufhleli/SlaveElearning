import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { 
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbMenuModule,
  NbIconModule,
  NbActionsModule,
  NbSearchModule, 
} from '@nebular/theme';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { AddUserComponent } from './components/user/addUser/add-user.component';
import { UserListComponent } from './components/user/userList/user-list.component'

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AddUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbIconModule,
    NbActionsModule,
    NbSearchModule,
    NbEvaIconsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
