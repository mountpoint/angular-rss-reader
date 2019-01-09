import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  version: string;

  constructor() { }

  ngOnInit() {
    this.version = `Angular v${VERSION.full}`;
  }

}
