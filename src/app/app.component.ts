import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { ConfigService } from './config.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  users$: User[];
  constructor(private configService: ConfigService) { }
  ngOnInit() {
    return this.configService.getUser().subscribe(data => this.users$ = data);
  }
}
