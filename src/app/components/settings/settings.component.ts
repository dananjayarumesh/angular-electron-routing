import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  id:string;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params.keys);

      this.id = params.get('id');

      console.log(params.get('id'));

      if (params.keys.length > 0) {
        // this.result = false;
      }
    });
  }

}
