import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WcBioHostComponent } from './wc-bio-host/wc-bio-host.component';

@NgModule({
  declarations: [WcBioHostComponent],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
    FormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    MatFormFieldModule,
    MatInputModule
  ]
})
export class PagesModule {

  private readonly urlOfWebcomponent = `https://psalguero.sfo2.cdn.digitaloceanspaces.com/bio/wc-bio/v1/main_uat.js`;

  constructor() {
    this.loadScript('wc-bio', this.urlOfWebcomponent);
  }

  private loadScript(idScript: string, urlScript: string): void {
    if (!document.getElementById(idScript)) {
      const node = document.createElement('script');
      node.src = urlScript;
      node.type = 'text/javascript';
      node.async = true;
      node.id = 'wc-bio';
      node.charset = 'utf-8';
      document.body.appendChild(node);
    }
  }

 }
