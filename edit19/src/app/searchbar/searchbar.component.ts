import { Component, OnInit } from '@angular/core';
import { NewService } from '/home/ucenik/EditFrontend/edit19/src/app/new.service';
import { Arrival } from '../arrival';
import { TokenService } from '/home/ucenik/EditFrontend/edit19/src/app/token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})

export class SearchbarComponent implements OnInit {
  // a: Arrival = new Arrival("234", "Mon, 24. Mar 2019. 16:43:24", "Healthy", "Full");
  // b: Arrival = new Arrival("236", "Mon, 01. Apr 2019. 18:20:05", "Healthy","Full");
  // c: Arrival = new Arrival("478", "Sun, 12. May 2019. 10:03:55", "Unhealthy","Half-full");
  // d: Arrival = new Arrival("111", "Fri, 17. May 2019. 08:31:40", "Healthy","Half-full");
  arrivals: Arrival[] = [];  
  arrivalsAllTheWay: Arrival[] = []; 
  ID: string="";
  varijabla: string = "Empty";
  valueInBar: string;
  countBody = {
    "limit": 0,
    "scopeId": {
      "id": 0
    },
    "askTotalCount": true,
    "fetchStyle": "FIELDS",
    "sortFields": [
      {
        "sortDirection": "ASC",
        "field": "string"
      }
    ],
    "fetchAttributes": [
      "string"
    ],
    "predicate": {},
    "offset": 0
  }
  constructor(private newService: NewService, private tokenService: TokenService, private http: HttpClient) { }

  ngOnInit() {
    setInterval(() => {
      this.newService.getArrival()
        .subscribe(data => { 
          const temp: Arrival = new Arrival(data.ID, data.DateTime, data.HealthStatus,"Empty");

          //getting tokenID from tokenService.getToken()
          this.tokenService.getToken().subscribe((resp: any) => {
            let token; token = resp.tokenId; const httpOptions = {
              headers: new HttpHeaders({
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
              })
            }; this.http.post('http://10.242.89.145:8081/v1/_/data/messages/_count', this.countBody, httpOptions).subscribe(
              (res: any) => {
                let count: number = res.count;
                 let fullnessUrl = 'http://10.242.89.145:8081/v1/_/data/messages?offset=' + (count - 1) + '&limit=1'; this.http.get<any>(fullnessUrl, httpOptions)
                  .subscribe(
                    (response: any) => { console.log(response);
                      
                      let size = response.size;
                      if(!response.items[size - 1].payload.metrics[0].value.toString().match("N/A"))
                      {
                        //temp.Fullness = response.items[size - 1].payload.metrics[0].value;
                        this.varijabla = response.items[size - 1].payload.metrics[0].value;
                      
                        console.log("PRviiii");
                        console.log(temp.Fullness);

                      }
                     
                      
                    }
                  )
              }
            )
            if (this.arrivalsAllTheWay.length === 0)           
            {
              if(this.arrivalsAllTheWay.find(x=> x.ID===temp.ID)==undefined)
                this.arrivalsAllTheWay.push(temp);
            
            }
            else {
              try {
                let exists:boolean=false;
                for(var i=0;i<this.arrivalsAllTheWay.length;i++)
                {
                  if(temp.ID==this.arrivalsAllTheWay[i].ID && temp.HealthStatus==this.arrivalsAllTheWay[i].HealthStatus)
                  {
                    exists=true;
      
                  }
                  else if(temp.ID==this.arrivalsAllTheWay[i].ID && (temp.HealthStatus!="Pending"))
                  {
                    this.arrivalsAllTheWay[i].HealthStatus=temp.HealthStatus;
                    //this.arrivalsAllTheWay.map((item) => item.ID != temp.ID);
                    
                    let a = this.arrivalsAllTheWay[i].ID;
                    //this.arrivalsAllTheWay.filter((item) => item.ID != a);
                  
                  }
                  if(temp.ID==this.arrivalsAllTheWay[i].ID)
                  {
                    this.arrivalsAllTheWay[i].Fullness=this.varijabla;
                    console.log(temp.Fullness);
                  }

                if (!exists)
                {
                  if(this.ID=="")
                  {
                    if(this.arrivalsAllTheWay.find(x=> x.ID===temp.ID)==undefined)
                      this.arrivalsAllTheWay.push(temp);
                  }
                  else if(temp.ID.toString().startsWith(this.valueInBar)){
                    if(this.arrivalsAllTheWay.find(x=> x.ID===temp.ID)==undefined)
                      this.arrivalsAllTheWay.push(temp);
                  }
                }
              }
            }
              catch {
                console.error('Error!');
              }          
            }
          
            this.arrivals=this.arrivalsAllTheWay;
            this.Search();
          });
        }
        );
    }, 2000);
    
  }
  
Search() {
  this.valueInBar=this.ID.toString();
  if (this.ID != "") {
    this.arrivals = this.arrivalsAllTheWay.filter(res => { 
      return res.ID.toString().startsWith(this.valueInBar);
    });
    console.log(this.arrivals);
  }
  else if (this.ID == "") {
    this.arrivals = this.arrivalsAllTheWay;
  }
}

}