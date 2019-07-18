import { Component, OnInit } from '@angular/core';
/* dodala iz tutorijala*/
import { information } from '../../datamodel/information.model';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  /* dodala iz tutorijala*/
  information: information[] = [];
  allInfo: information[] = [];
  ID: string;
  constructor() { }

  ngOnInit() {
    /* dodala iz tutorijala*/

    this.allInfo = this.information = [
      {
        "ID": "123",
        "Time": "23-10-2018 14:44",
        "ParkingID": "321",
        "HealthStatus": "healthy",
        "Fullness": "full"
      },
      {
        "ID": "456",
        "Time": "23-10-2018 15:44",
        "ParkingID": "654",
        "HealthStatus": "not healthy",
        "Fullness": "full"
      },
      {
        "ID": "456",
        "Time": "23-10-2018 15:44",
        "ParkingID": "654",
        "HealthStatus": "not healthy",
        "Fullness": "full"
      },
      {
        "ID": "456",
        "Time": "23-10-2018 15:44",
        "ParkingID": "654",
        "HealthStatus": "not healthy",
        "Fullness": "full"
      },
      {
        "ID": "456",
        "Time": "23-10-2018 15:44",
        "ParkingID": "654",
        "HealthStatus": "not healthy",
        "Fullness": "full"
      }
    ];
  }


  /*tutorijal*/
  Search() {
    console.log(this.ID);
    this.information = this.allInfo.filter(res => {
      return res.ID.match(this.ID)
    });

  }

}
