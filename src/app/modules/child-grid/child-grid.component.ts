import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-grid',
  templateUrl: './child-grid.component.html',
  styleUrls: ['./child-grid.component.css']
})
export class ChildGridComponent implements OnInit {
@Input() rowData:any;
@Input() columnData:Array<object>;
  constructor() { }

  ngOnInit(): void {
  }

}
