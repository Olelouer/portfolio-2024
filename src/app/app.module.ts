import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// VIEWS ELEMENTS
import { HomepageComponent } from './views/homepage/homepage.component';

// COMPONENTS ELEMENTS
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { BannerComponent } from './components/banner/banner.component';
import { MainButtonComponent } from './snippets/main-button/main-button.component';
import { LinkComponent } from './snippets/link/link.component';
import { ProjectCardComponent } from './components/cards/project-card/project-card.component';
import { SkillsBannerComponent } from './components/skills-banner/skills-banner.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { SkillCardComponent } from './components/cards/skill-card/skill-card.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    AboutComponent,
    ProjectsComponent,
    BannerComponent,
    MainButtonComponent,
    LinkComponent,
    ProjectCardComponent,
    SkillsBannerComponent,
    ContactFormComponent,
    SkillCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
