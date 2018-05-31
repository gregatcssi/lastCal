import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor() { }
  FiscalYear=0;
  theDates=[];
  ngOnInit() {
    this.generateDates();
  }

  generateDates()
  {
    let today = new Date(Date.now());
    let startAndEndDates =[
      {
        fisYear:2019,
        startDate:new Date('2/3/2018'),
        endDate: new Date('2/1/2019')
      },
      {
        fisYear:2020,
        startDate:new Date('2/2/2019'),
        endDate: new Date('1/31/2020')
      },
      {
        fisYear:2021,
        startDate:new Date('2/1/2020'),
        endDate: new Date('1/30/2021')
      }
    ];
    let startDate
    let endDate
    startAndEndDates.forEach(dt => {
      if(dt.startDate<=today && dt.endDate>today){
        startDate=dt.startDate;
        endDate=  dt.endDate;
        this.FiscalYear=dt.fisYear;
      }
      
    });


    let Incr =0;
    let week = [];
  

    let d= today.getDate();
    let m= today.getMonth();
    let y= today.getFullYear();
    let td =d+"/"+m+"/"+y;
    for(let d =startDate;d<=endDate;d.setDate(d.getDate()+1)){
      Incr++;
      
      let dd= d.getDate();
      let md= d.getMonth();
      let yd= d.getFullYear();
      let tdd=dd+"/"+md+"/"+yd;
      if(tdd===td){
        let tmp={d:d.getDate(),c:"rgb(25, 0, 255)"};
        week.push(tmp);
        console.log(tmp); 
      }else{
        let tmp={d:d.getDate(),c:"rgb(49, 49, 49)"};
        week.push(tmp);
      }
      if(Incr%7===0){
        this.theDates.push(week);
        console.log(week);
        week=[];
      }
    }
  }
}
