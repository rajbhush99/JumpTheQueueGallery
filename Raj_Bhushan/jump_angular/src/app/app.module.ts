import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CountdownModule } from 'ngx-countdown';
import {ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { QueueComponent } from './event/queue/queue.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { QueueService } from './event/queue/services/queue.service';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    EventListComponent,
    QueueComponent
  ],
  imports: [
    BrowserModule,
     FormsModule,
     ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    HttpClientModule,
    CountdownModule,
    CoreModule
  ],
  providers: [HttpClient, QueueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
