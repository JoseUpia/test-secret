import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  environment = environment;
  
  title = 'test-secret';

  ngOnInit(): void {
    console.log('environment:', environment);
  }
}
