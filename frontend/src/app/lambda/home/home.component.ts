import { Component, OnInit } from '@angular/core';
import { Home } from 'src/models/home';
import { HomeService } from "../../_services";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public homes: Home[];

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.home().subscribe(
      homes => this.homes = homes
    );
  }

}
