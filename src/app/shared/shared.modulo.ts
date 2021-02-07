import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {HttpClientModule, HttpHeaders, HttpClient} from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component'


//traductor
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';




@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        HttpClientModule,
        TranslateModule.forRoot({
          defaultLanguage: 'es',
          loader: {
            provide: TranslateLoader,
            useFactory: (http: HttpClient) => {
              return new TranslateHttpLoader(http);
            },
            deps: [ HttpClient ]
          }
        }),
    ],
    declarations: [
        HeaderComponent,
        SidebarComponent,
        FooterComponent
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        FooterComponent
    ]
})

export class SharedModule {}
