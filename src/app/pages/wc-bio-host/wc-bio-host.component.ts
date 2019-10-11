import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wc-bio-host',
  templateUrl: './wc-bio-host.component.html',
  styleUrls: ['./wc-bio-host.component.css']
})
export class WcBioHostComponent implements OnInit {

  documentNumber: string;
  showWebComponent: boolean;
  responseEvent: any;

  constructor() { }

  ngOnInit() {
    customElements.whenDefined('ibk-wc-bio')
      .then(() => {
        this.showWebComponent = true;
      });
  }

  handlerFinishProcess(event) {
    this.responseEvent = event;
    console.log(`this.responseEvent ${this.responseEvent}`);
  }

}
