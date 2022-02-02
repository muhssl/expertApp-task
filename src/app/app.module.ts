import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './shared/app.material-module';
import { UsersTableComponent } from './users-table/users-table.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Route, RouterModule } from '@angular/router';
import { MaterialModule } from './shared/material.module';
import { PostDialogComponent } from './post-dialog/post-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PortalShimmerLoadingComponent } from './shared/portal-shimmer-loading/portal-shimmer-loading.component';
import { MatIconModule } from '@angular/material/icon';

const routes: Route[] = [
  { path: '', component: UsersTableComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    UsersTableComponent,
    HeaderComponent,
    FooterComponent,
    PostDialogComponent,
    PortalShimmerLoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
