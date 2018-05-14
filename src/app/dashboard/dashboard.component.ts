import { DashboardService } from './dashboard.service';
import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[DashboardService]
})
export class DashboardComponent implements OnInit{

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ['id', 'retailer', 'product', 'size','start_time','profile','proxy','status','action'];
  dataSource:any;

  constructor(private dashboardService:DashboardService) { }

  ngOnInit() {
    console.log(this.dataSource)
    this.dataSource = new MatTableDataSource(this.dashboardService.getData());
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

}
