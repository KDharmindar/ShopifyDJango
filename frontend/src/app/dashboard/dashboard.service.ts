import { tableData } from './dashboard.model';
import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {

  constructor() { }

  getData(){
    return this.table_data.slice();
  }

  table_data: tableData[] = [
    {"id":1,"retailer":"Irvin","product":"Beef - Tenderlion, Center Cut","size":8,"start_time":"Span","profile":"Home Ing","proxy":"216.7.247.41","status":"Card declined","action":null},
    {"id":2,"retailer":"Wake","product":"Cheese - Havarti, Roasted Garlic","size":11,"start_time":"Flexidy","profile":"Fixflex","proxy":"131.131.140.108","status":"Successfully checkedout","action":null},
    {"id":3,"retailer":"Charissa","product":"Versatainer Nc - 888","size":6,"start_time":"Gembucket","profile":"Fixflex","proxy":"87.153.117.87","status":"waiting for product","action":null},
    {"id":4,"retailer":"Nobe","product":"Beets","size":35,"start_time":"Zamit","profile":"Solarbreeze","proxy":"177.119.2.127","status":"waiting for product","action":null},
    {"id":5,"retailer":"Portia","product":"Edible Flower - Mixed","size":16,"start_time":"Bytecard","profile":"Tampflex","proxy":"99.202.178.44","status":"Processing payment","action":null},
    {"id":6,"retailer":"Samson","product":"Coconut - Whole","size":12,"start_time":"It","profile":"Ronstring","proxy":"192.242.182.15","status":"Successfully checkedout","action":null},
    {"id":7,"retailer":"Sibylla","product":"Tomatoes - Vine Ripe, Red","size":33,"start_time":"Bitchip","profile":"Andalax","proxy":"224.200.210.127","status":"Card declined","action":null},
    {"id":8,"retailer":"Jerrold","product":"Cabbage - Nappa","size":13,"start_time":"Duobam","profile":"Cardguard","proxy":"189.65.8.223","status":"Processing payment","action":null},
    {"id":9,"retailer":"Kayla","product":"Cheese - Marble","size":4,"start_time":"Stringtough","profile":"Stronghold","proxy":"147.215.15.78","status":"Adding to cart","action":null},
    {"id":10,"retailer":"Layton","product":"Hinge W Undercut","size":23,"start_time":"Fintone","profile":"Span","proxy":"197.68.132.221","status":"Successfully checkedout","action":null},
    {"id":11,"retailer":"Matilda","product":"Pastry - Banana Muffin - Mini","size":34,"start_time":"Fix San","profile":"Fix San","proxy":"250.68.36.202","status":"submitting billing","action":null},
    {"id":12,"retailer":"Audrey","product":"Pork - Caul Fat","size":49,"start_time":"Temp","profile":"Trippledex","proxy":"158.221.111.117","status":"Adding to cart","action":null},
    {"id":13,"retailer":"Saraann","product":"Aspic - Clear","size":21,"start_time":"Alpha","profile":"Transcof","proxy":"195.198.197.53","status":"Processing payment","action":null},
    {"id":14,"retailer":"Kelli","product":"Bread - Sour Sticks With Onion","size":31,"start_time":"Stronghold","profile":"Konklab","proxy":"186.85.217.4","status":"Card declined","action":null},
    {"id":15,"retailer":"Mag","product":"Wine - White, Concha Y Toro","size":22,"start_time":"Transcof","profile":"Zamit","proxy":"170.214.99.221","status":"submitting billing","action":null},
    {"id":16,"retailer":"Annnora","product":"Beef - Inside Round","size":23,"start_time":"Biodex","profile":"Flexidy","proxy":"208.28.163.247","status":"submitting billing","action":null},
    {"id":17,"retailer":"Vassili","product":"Cornish Hen","size":48,"start_time":"Mat Lam Tam","profile":"Ventosanzap","proxy":"128.62.196.220","status":"Processing payment","action":null},
    {"id":18,"retailer":"Hakeem","product":"Tray - Foam, Square 4 - S","size":26,"start_time":"Quo Lux","profile":"Alphazap","proxy":"187.75.40.102","status":"submitting billing","action":null},
    {"id":19,"retailer":"Parnell","product":"Yeast - Fresh, Fleischman","size":25,"start_time":"Lotstring","profile":"Rank","proxy":"152.229.134.21","status":"Card declined","action":null},
    {"id":20,"retailer":"Kristy","product":"Squid - Breaded","size":35,"start_time":"Alphazap","profile":"Job","proxy":"201.71.75.35","status":"submitting billing","action":null},
    {"id":21,"retailer":"Radcliffe","product":"Yogurt - Cherry, 175 Gr","size":10,"start_time":"Bitchip","profile":"Bigtax","proxy":"172.166.165.105","status":"waiting for product","action":null},
    {"id":22,"retailer":"Son","product":"Ham - Cooked","size":34,"start_time":"Konklux","profile":"Zoolab","proxy":"182.191.148.209","status":"waiting for product","action":null},
    {"id":23,"retailer":"Kippie","product":"Beef - Tenderloin Tails","size":14,"start_time":"Treeflex","profile":"Rank","proxy":"106.170.216.221","status":"Adding to cart","action":null},
    {"id":24,"retailer":"Rebe","product":"Apple - Fuji","size":1,"start_time":"Tampflex","profile":"Lotstring","proxy":"132.242.13.50","status":"Card declined","action":null},
    {"id":25,"retailer":"Kass","product":"Basil - Dry, Rubbed","size":12,"start_time":"Ventosanzap","profile":"Alphazap","proxy":"172.37.68.200","status":"waiting for product","action":null},
    {"id":26,"retailer":"Sloan","product":"Scallop - St. Jaques","size":14,"start_time":"Fix San","profile":"Job","proxy":"74.98.206.45","status":"waiting for product","action":null},
    {"id":27,"retailer":"Pyotr","product":"Wine - Chateau Timberlay","size":14,"start_time":"Bigtax","profile":"Bamity","proxy":"73.48.121.144","status":"Adding to cart","action":null},
    {"id":28,"retailer":"Kristy","product":"Oil - Sesame","size":37,"start_time":"Y-Solowarm","profile":"Zathin","proxy":"29.213.45.197","status":"Successfully checkedout","action":null},
    {"id":29,"retailer":"Rhodia","product":"Red Currant Jelly","size":21,"start_time":"It","profile":"Opela","proxy":"154.69.113.32","status":"Card declined","action":null},
    {"id":30,"retailer":"Flore","product":"Marjoram - Dried, Rubbed","size":35,"start_time":"Fintone","profile":"Tin","proxy":"7.53.13.149","status":"submitting billing","action":null},
    {"id":31,"retailer":"Billy","product":"Wine - White, Pelee Island","size":34,"start_time":"Otcom","profile":"Ventosanzap","proxy":"23.35.114.95","status":"Adding to cart","action":null},
    {"id":32,"retailer":"Baillie","product":"Pork - Loin, Boneless","size":27,"start_time":"Zoolab","profile":"Stim","proxy":"126.210.238.121","status":"Card declined","action":null},
    {"id":33,"retailer":"Lee","product":"Bread Fig And Almond","size":29,"start_time":"Zaam-Dox","profile":"Opela","proxy":"118.16.69.203","status":"Adding to cart","action":null},
    {"id":34,"retailer":"Philis","product":"Mustard - Dijon","size":14,"start_time":"Y-Solowarm","profile":"Tres-Zap","proxy":"160.199.128.54","status":"Processing payment","action":null},
    {"id":35,"retailer":"Briano","product":"Beer - Mill St Organic","size":31,"start_time":"Tresom","profile":"Y-find","proxy":"151.123.124.216","status":"waiting for product","action":null}];
}
