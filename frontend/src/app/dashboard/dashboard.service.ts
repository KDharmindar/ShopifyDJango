import { taskData, checkoutProfileData } from './dashboard.model';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, Request } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DashboardService {

  private task_url = 'http://localhost:8000/api/v1/createtask/';
  private checkout_url = 'http://localhost:8000/api/v1/billings/';
  constructor(private httpclient: Http) { }

  
  importData() {
    let response_data;
    this.saveTasksToDB().subscribe(
      (data) => {
        response_data = data;
        console.log(data);
      }
    );
  }

  getData() {
    let response_data;
    let response = this.loadTasksFromDB().subscribe((data) => {
      this.task_data = data;
        console.log(data);
      });
    //return this.task_data.slice();

   // this.task_data = response_data;

    return this.task_data.slice();
  }



  checkout_Profile_Data: checkoutProfileData[] = [
    { id: 1, profile: "Home Ing" },
    { id: 2, profile: "Fixflex" },
    { id: 3, profile: "Solarbreeze" },
    { id: 4, profile: "Tampflex" },
    { id: 5, profile: "Ronstring" },
    { id: 6, profile: "Andalax" },
    { id: 7, profile: "Cardguard" },
    { id: 8, profile: "Stronghold" },
    { id: 9, profile: "Zamit" },
    { id: 10, profile: "Span" },
    { id: 11, profile: "Fix San" },
    { id: 12, profile: "Trippledex" },
    { id: 13, profile: "Transcof" },
    { id: 14, profile: "Flexidy" },
    { id: 15, profile: "Ventosanzap" },
    { id: 16, profile: "Alphazap" },
    { id: 17, profile: "Rank" },
    { id: 18, profile: "Job" },
    { id: 19, profile:"Bigtax" },
    { id: 20, profile: "Zoolab" },
    { id: 21, profile: "Lotstring" },
    { id: 22, profile: "Bamity" },
    { id: 23, profile: "Zathin" },
    { id: 24, profile: "Opela" },
    { id: 25, profile: "Tin" },
    { id: 26, profile: "Stim" },
    { id: 27, profile: "Tres-Zap" },
    { id: 28, profile: "Y-find" },
    { id: 29, profile: "Konklab" }
  ]

  task_data: taskData[] = [
    { "id": 1, "site": "Irvin", "product": "Beef - Tenderlion, Center Cut", "size": 8, "start_time": "10", "checkout_id": 1, "proxy": "216.7.247.41", "status": "Card declined", "action": null, "quantity": "1","completed_date":"13-jun-2018","keyword":"some keyword"},
    { "id": 2, "site": "Wake", "product": "Cheese - Havarti, Roasted Garlic", "size": 11, "start_time": "14", "checkout_id": 2, "proxy": "131.131.140.108", "status": "Successfully checkedout", "action": null, "quantity": "1", "completed_date": "13-jun-2018", "keyword": "some keyword"},
    { "id": 3, "site": "Charissa", "product": "Versatainer Nc - 888", "size": 6, "start_time": "Gembucket", "checkout_id": 3, "proxy": "87.153.117.87", "status": "waiting for product", "action": null, "quantity": "1", "completed_date": "13-jun-2018", "keyword": "some keyword"},
    { "id": 4, "site": "Nobe", "product": "Beets", "size": 35, "start_time": "9", "checkout_id": 3, "proxy": "177.119.2.127", "status": "waiting for product", "action": null, "quantity": "1", "completed_date": "13-jun-2018", "keyword": "some keyword"},
    { "id": 5, "site": "Portia", "product": "Edible Flower - Mixed", "size": 16, "start_time": "Bytecard", "checkout_id": 2, "proxy": "99.202.178.44", "status": "Processing payment", "action": null, "quantity": "1", "completed_date": "13-jun-2018", "keyword": "some keyword"},
    { "id": 6, "site": "Samson", "product": "Coconut - Whole", "size": 12, "start_time": "It", "checkout_id": 1, "proxy": "192.242.182.15", "status": "Successfully checkedout", "action": null, "quantity": "1", "completed_date": "13-jun-2018", "keyword": "some keyword"},
    { "id": 7, "site": "Sibylla", "product": "Tomatoes - Vine Ripe, Red", "size": 33, "start_time": "Bitchip", "checkout_id": 1, "proxy": "224.200.210.127", "status": "Card declined", "action": null, "quantity": "1", "completed_date": "13-jun-2018", "keyword": "some keyword"},
    { "id": 8, "site": "Jerrold", "product": "Cabbage - Nappa", "size": 13, "start_time": "Duobam", "checkout_id": 2, "proxy": "189.65.8.223", "status": "Processing payment", "action": null, "quantity": "1", "completed_date": "13-jun-2018", "keyword": "some keyword"},
    { "id": 9, "site": "Kayla", "product": "Cheese - Marble", "size": 4, "start_time": "Stringtough", "checkout_id": 3, "proxy": "147.215.15.78", "status": "Adding to cart", "action": null, "quantity": "1", "completed_date": "13-jun-2018", "keyword": "some keyword"},
    { "id": 10, "site": "Layton", "product": "Hinge W Undercut", "size": 23, "start_time": "Fintone", "checkout_id": 1, "proxy": "197.68.132.221", "status": "Successfully checkedout", "action": null, "quantity": "1", "completed_date": "13-jun-2018", "keyword": "some keyword"},
    { "id": 11, "site": "Matilda", "product": "Pastry - Banana Muffin - Mini", "size": 34, "start_time": "11", "checkout_id": 2, "proxy": "250.68.36.202", "status": "submitting billing", "action": null, "quantity": "1", "completed_date": "13-jun-2018", "keyword": "some keyword"},
    { "id": 12, "site": "Audrey", "product": "Pork - Caul Fat", "size": 49, "start_time": "Temp", "checkout_id": 3, "proxy": "158.221.111.117", "status": "Adding to cart", "action": null, "quantity": "1", "completed_date": "13-jun-2018", "keyword": "some keyword"},
    { "id": 13, "site": "Saraann", "product": "Aspic - Clear", "size": 21, "start_time": "Alpha", "checkout_id": 1, "proxy": "195.198.197.53", "status": "Processing payment", "action": null, "quantity": "1", "completed_date": "13-jun-2018", "keyword": "some keyword"},
    { "id": 14, "site": "Kelli", "product": "Bread - Sour Sticks With Onion", "size": 31, "start_time": "8", "checkout_id": 2, "proxy": "186.85.217.4", "status": "Card declined", "action": null, "quantity": "1", "completed_date": "13-jun-2018", "keyword": "some keyword"},
    { "id": 15, "site": "Mag", "product": "Wine - White, Concha Y Toro", "size": 22, "start_time": "13", "checkout_id": 3, "proxy": "170.214.99.221", "status": "submitting billing", "action": null, "quantity": "1", "completed_date": "13-jun-2018", "keyword": "some keyword"},
    { "id": 16, "site": "Annnora", "product": "Beef - Inside Round", "size": 23, "start_time": "Biodex", "checkout_id": 1, "proxy": "208.28.163.247", "status": "submitting billing", "action": null, "quantity": "1", "completed_date": "13-jun-2018", "keyword": "some keyword"},
    { "id": 17, "site": "Vassili", "product": "Cornish Hen", "size": 48, "start_time": "Mat Lam Tam", "checkout_id": 2, "proxy": "128.62.196.220", "status": "Processing payment", "action": null, "quantity": "1", "completed_date": "13-jun-2018", "keyword": "some keyword"},
    { "id": 18, "site": "Hakeem", "product": "Tray - Foam, Square 4 - S", "size": 26, "start_time": "Quo Lux", "checkout_id": 3, "proxy": "187.75.40.102", "status": "submitting billing", "action": null, "quantity": "1", "completed_date": "13-jun-2018", "keyword": "some keyword"},
    { "id": 19, "site": "Parnell", "product": "Yeast - Fresh, Fleischman", "size": 25, "start_time": "21", "checkout_id": 1, "proxy": "152.229.134.21", "status": "Card declined", "action": null, "quantity": "1", "completed_date": "13-jun-2018", "keyword": "some keyword"},
    { "id": 20, "site": "Kristy", "product": "Squid - Breaded", "size": 35, "start_time": "16", "checkout_id": 2, "proxy": "201.71.75.35", "status": "submitting billing", "action": null, "quantity": "1", "completed_date": "13-jun-2018", "keyword": "some keyword"},
    { "id": 21, "site": "Radcliffe", "product": "Yogurt - Cherry, 175 Gr", "size": 10, "start_time": "Bitchip", "checkout_id": 3, "proxy": "172.166.165.105", "status": "waiting for product", "action": null, "quantity": "1", "completed_date": "13-jun-2018", "keyword": "some keyword"},
    { "id": 22, "site": "Son", "product": "Ham - Cooked", "size": 34, "start_time": "Konklux", "checkout_id": 1, "proxy": "182.191.148.209", "status": "waiting for product", "action": null, "quantity": "1", "completed_date": "13-jun-2018", "keyword": "some keyword"},
    { "id": 23, "site": "Kippie", "product": "Beef - Tenderloin Tails", "size": 14, "start_time": "Treeflex", "checkout_id": 2, "proxy": "106.170.216.221", "status": "Adding to cart", "action": null, "quantity": "1", "completed_date": "13-jun-2018", "keyword": "some keyword"},
    { "id": 24, "site": "Rebe", "product": "Apple - Fuji", "size": 1, "start_time": "4", "checkout_id": 3, "proxy": "132.242.13.50", "status": "Card declined", "action": null, "quantity": "1", "completed_date": "13-jun-2018", "keyword": "some keyword"},
    { "id": 25, "site": "Kass", "product": "Basil - Dry, Rubbed", "size": 12, "start_time": "15", "checkout_id": 1, "proxy": "172.37.68.200", "status": "waiting for product", "action": null, "quantity": "1", "completed_date": "13-jun-2018", "keyword": "some keyword"},
    { "id": 26, "site": "Sloan", "product": "Scallop - St. Jaques", "size": 14, "start_time": "11", "checkout_id": 2, "proxy": "74.98.206.45", "status": "waiting for product", "action": null, "quantity": "1", "completed_date": "13-jun-2018", "keyword": "some keyword"},
    { "id": 27, "site": "Pyotr", "product": "Wine - Chateau Timberlay", "size": 14, "start_time": "19", "checkout_id": 3, "proxy": "73.48.121.144", "status": "Adding to cart", "action": null, "quantity": "1", "completed_date": "13-jun-2018", "keyword": "some keyword"},
    { "id": 28, "site": "Kristy", "product": "Oil - Sesame", "size": 37, "start_time": "Y-Solowarm", "checkout_id": 1, "proxy": "29.213.45.197", "status": "Successfully checkedout", "action": null, "quantity": "1", "completed_date": "13-jun-2018", "keyword": "some keyword"},
    { "id": 29, "site": "Rhodia", "product": "Red Currant Jelly", "size": 21, "start_time": "It", "checkout_id": 2, "proxy": "154.69.113.32", "status": "Card declined", "action": null, "quantity": "1", "completed_date": "13-jun-2018", "keyword": "some keyword"},
    { "id": 30, "site": "Flore", "product": "Marjoram - Dried, Rubbed", "size": 35, "start_time": "Fintone", "checkout_id": 3, "proxy": "7.53.13.149", "status": "submitting billing", "action": null, "quantity": "1", "completed_date": "13-jun-2018", "keyword": "some keyword"},
    { "id": 31, "site": "Billy", "product": "Wine - White, Pelee Island", "size": 34, "start_time": "Otcom", "checkout_id": 1, "proxy": "23.35.114.95", "status": "Adding to cart", "action": null, "quantity": "1", "completed_date": "13-jun-2018", "keyword": "some keyword"},
    { "id": 32, "site": "Baillie", "product": "Pork - Loin, Boneless", "size": 27, "start_time": "20", "checkout_id": 2, "proxy": "126.210.238.121", "status": "Card declined", "action": null, "quantity": "1", "completed_date": "13-jun-2018", "keyword": "some keyword"},
    { "id": 33, "site": "Lee", "product": "Bread Fig And Almond", "size": 29, "start_time": "Zaam-Dox", "checkout_id": 3, "proxy": "118.16.69.203", "status": "Adding to cart", "action": null, "quantity": "1", "completed_date": "13-jun-2018", "keyword": "some keyword"},
    { "id": 34, "site": "Philis", "product": "Mustard - Dijon", "size": 14, "start_time": "Y-Solowarm", "checkout_id": 1, "proxy": "160.199.128.54", "status": "Processing payment", "action": null, "quantity": "1", "completed_date": "13-jun-2018", "keyword": "some keyword"},
    { "id": 35, "site": "Briano", "product": "Beer - Mill St Organic", "size": 31, "start_time": "Tresom", "checkout_id": 2, "proxy": "151.123.124.216", "status": "waiting for product", "action": null, "quantity": "1", "completed_date": "13-jun-2018", "keyword": "some keyword" }];



  getHeader() {
    const headers = new Headers();
    //headers.append('content-type', 'application/x-www-form-urlencoded');
    headers.append('content-type', 'application/json');
    return headers;
  }

  saveTasksToDB() {
    const requestOptions = new RequestOptions({
      headers: this.getHeader()
    });
    return this.httpclient.post(this.task_url, JSON.stringify(this.task_data), requestOptions).map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }


  loadTasksFromDB() {
    const requestOptions = new RequestOptions({
      headers: this.getHeader()
    });
    return this.httpclient.
      get(this.task_url)
      .map(response => {
        return response.json();
      });
  }
}
