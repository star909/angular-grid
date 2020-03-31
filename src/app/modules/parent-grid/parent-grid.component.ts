import { Component, OnInit } from '@angular/core';
import {GridDataService} from './../../services/grid-data.service';
@Component({
  selector: 'app-parent-grid',
  templateUrl: './parent-grid.component.html',
  styleUrls: ['./parent-grid.component.css']
})
export class ParentGridComponent implements OnInit {

  rowData:any;
  /**Column values */
  columnDefs = [
    {headerName: 'Make', field: 'make', sortable: true},
    {headerName: 'Model', field: 'model', sortable: true},
    {headerName: 'Price', field: 'price', sortable: true}
];
  constructor(private gridService:GridDataService) { }

  ngOnInit(): void {
    this.getGridFinalData();
  }
  /**
   * @ function : getGridFinalData()
   * @ Purpose  : Subscribing to get the grid data
   * @ version  : 1.0.1
   * @ author   : Shivam
   */
private getGridFinalData() :void{
  try{
this.gridService.getGridData().subscribe(res=>{
  this.rowData = res;
})
}catch(ex){
  console.log(ex);
}
}
}
