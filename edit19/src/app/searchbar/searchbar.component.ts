import { Component, OnInit } from '@angular/core';
import { information } from '../../datamodel/information.model';
import { NewService } from '/home/ucenik/EditFrontend/edit19/src/app/new.service';
import { Observable, of } from 'rxjs';
import { Arrival } from '../arrival';
import { template } from '@angular/core/src/render3';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  /* dodala iz tutorijala*/
  a: Arrival = new Arrival("234", "healthy");
  b: Arrival = new Arrival("236", "healthy");
  c: Arrival = new Arrival("478", "unhealthy");
  d: Arrival = new Arrival("111", "healthy");
   arrivals: Arrival[] = [this.a,this.b,this.c,this.d];
    
  ID: string;
  constructor(private newService: NewService) { }

  ngOnInit() {
    
    setInterval(() => {
      this.newService.getArrival()
        .subscribe(data => {
          const temp: Arrival = new Arrival(data.ID, data.HealthStatus);
          //temp = data; console.log(temp);
          console.log(data);
          if (this.arrivals.length === 0) {
            this.arrivals.push(temp)
            console.log(this.arrivals);
          }
          else {
            try {
              if ((temp.ID !== this.arrivals[this.arrivals.length - 1].ID)&&(temp.ID.length!==0))
                this.arrivals.push(temp);
            }
            catch {
              console.error('Error!');
            }
          }
        })
    }, 2000);
  }



  Search() {
    if (this.ID != "") {
      this.arrivals = this.arrivals.filter(res => {
        return res.ID.match(this.ID)
      });
    }
    else if (this.ID == "") {
      const temp: Arrival = new Arrival("234", "healthy");
      const temp1: Arrival = new Arrival("236", "healthy");
      const temp2: Arrival = new Arrival("478", "unhealthy");
      const temp3: Arrival = new Arrival("111", "healthy");

      this.arrivals[0]=temp;
      this.arrivals[1]=temp1;
      this.arrivals[2]=temp2;
      this.arrivals[3]=temp3;
      this.ngOnInit();
    }
  }}
