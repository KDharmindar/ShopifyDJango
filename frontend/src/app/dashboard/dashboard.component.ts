import { DashboardService } from './dashboard.service';
import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { taskData } from './dashboard.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardService]
})
export class DashboardComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = [
    'id',
    'retailer',
    'product',
    'size',
    'start_time',
    'profile',
    'proxy',
    'status',
    'action'
  ];
  dataSource: any;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.loadTasksFromDB().subscribe(tasks => {
      this.dashboardService.task_data = tasks;
      this.dataSource = new MatTableDataSource(this.dashboardService.task_data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });


  }

  ngAfterViewInit() {
  }





  populateTasks() {
  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }


  trimInvertedCommas(value: string): string {
    let ret = value.replace(/['"]+/g, ''));
    return ret;
  }

  import_tasks(fileInput: any) {
    if (fileInput.target.files[0]) {
      let fileReaded = fileInput.target.files[0];
      let reader: FileReader = new FileReader();

      reader.onload = () => {
        let csv: string = reader.result;
        //let allTextLines = csv.split(/\r|\n|\r/);
        let allTextLines = csv.split(/\n/);
        let res_import = [];
        let data = [];
        let tasks: taskData[] = [];

        for (let i = 0; i < allTextLines.length; i++) {
          
          if (allTextLines[i] != "") {
            data = allTextLines[i].split(',');
            if (data.length == 12) {
              let newTask:taskData = {
                id : Number(this.trimInvertedCommas(String(data[0]))),
                site : this.trimInvertedCommas(String(data[1])),
                product: this.trimInvertedCommas(String(data[2])),
                size: Number(this.trimInvertedCommas(String(data[3]))),
                start_time: this.trimInvertedCommas(String(data[4])),
                checkout_id: Number(this.trimInvertedCommas(String(data[5]))),
                proxy : this.trimInvertedCommas(String(data[6])),
                status : this.trimInvertedCommas(String(data[7])),
                action : this.trimInvertedCommas(String(data[8])),
                quantity : this.trimInvertedCommas(String(data[9])),
                completed_date : this.trimInvertedCommas(String(data[10])),
                keyword : this.trimInvertedCommas(String(data[11])),
              };
              tasks.push(newTask);
              console.log("task added {$i}");
            }
          }
        }
        this.dashboardService.task_data = tasks;
        this.dashboardService.saveTasksToDB();
      }
      reader.readAsText(fileReaded);
    }
  }



}
