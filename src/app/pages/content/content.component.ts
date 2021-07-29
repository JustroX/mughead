import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  url: string = '';

  constructor(private router: Router, private http: HttpClient) {
    this.url = this.router.url.split('#')[0];
  }

  ngOnInit(): void {}
}
