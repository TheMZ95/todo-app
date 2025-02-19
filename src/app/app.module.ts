import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserModule} from './user/user.module';
import {TodoListModule} from './todo-list/todo-list.module';
import {AuthModule} from './user/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    AuthModule,
    TodoListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
