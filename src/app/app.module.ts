import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwoWayComponent } from './components/two-way/two-way.component';
import { NotZeroDirective } from './shared/directives/not-zero.directive';
import { HighlightNumberDirective } from './shared/directives/highlight-number.directive';
import { PipesComponent } from './components/pipes/pipes.component';
import { TrimPipe } from './shared/pipes/trim.pipe';
import { UsersComponent } from './components/users/users.component';
import { NumbersComponent } from './components/numbers/numbers.component';
import { UserService } from './services/user.service';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TwoWayComponent,
    NotZeroDirective,
    HighlightNumberDirective,
    PipesComponent,
    TrimPipe,
    UsersComponent,
    NumbersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
