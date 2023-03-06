import { Component } from '@angular/core';

@Component({
  selector: 'list-comp',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  names: string[] = ["Mary", "Joseph", "Henry"];
  
  presidents: any[] =
  [{name: "Higgins", term:"2011-"},
  {name: "McAleese", term:"1997-2011"},
  {name: "Roobinson", term:"1990-1997"},
  {name: "Hillery", term:"1976-1990"},
  {name: "O Dailaigh", term:"1974-1976"}];
}
