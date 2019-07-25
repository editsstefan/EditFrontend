
export class Arrival {
ID: string;
DateTime:string;
HealthStatus: string;
Fullness: string;
constructor(ID,DateTime,Healthstatus,Fullness?){
    this.ID=ID;
    this.DateTime=DateTime;
    this.HealthStatus=Healthstatus;
    this.Fullness=Fullness;
}
}
