import { Component, Input, OnInit } from '@angular/core';
import { Hebergement } from 'src/app/_models/hebergement';
import { HomeService } from "../../_services";
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input()
  id: string;
  public home: Hebergement;

  search: FormGroup
  categories = [
    {value: '0', viewValue: 'Cabane dans les arbres'},
    {value: '1', viewValue: 'Tipi'},
    {value: '2', viewValue: 'Igloo'}
  ];

  constructor(private homeService: HomeService, private route: ActivatedRoute) {
    this.id =  this.route.snapshot.params.id;
    this.homeService.findHome(this.id)
    this.search = new FormGroup({
      category : new FormControl(),
      start: new FormControl(),
      end: new FormControl(),
      localisation : new FormControl(),
    });
  }

  ngOnInit(): void {
  }

}
