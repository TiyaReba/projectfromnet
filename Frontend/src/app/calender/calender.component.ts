import { Component, OnInit } from '@angular/core';
import { CalendarView } from 'angular-calendar';
import { CalendarEvent } from 'calendar-utils';
import { TrainerService } from '../trainer.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';
import { startOfDay,endOfDay } from 'date-fns';
@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
  viewDate: Date = new Date();
  trainer={ name:'',
  email:'',
  phone:'',
  address:'',
  qualification:'',
  skillset:'',
  company:'',
  designation:'',
  ictakcourses:'',
  photo:'',
  ID:'',
  employment:'',
  approved:'',
  startdate:'',
  enddate:'',
  time:'',
  coursename:'',
  courseid:'',
  batchid:'',
  meetingvenue:''}

  trainers=[{ name:'',
  email:'',
  phone:'',
  address:'',
  qualification:'',
  skillset:'',
  company:'',
  designation:'',
  ictakcourses:'',
  photo:'',
  ID:'',
  employment:'',
  approved:'',
  startdate:'',
  enddate:'',
  time:'',
  coursename:'',
  courseid:'',
  batchid:'',
  meetingvenue:''}]
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  startdate:any;
  enddate:any;
  events:CalendarEvent[]=[];
   
  
  constructor(private trainerObj : TrainerService, private router:Router,public datepipe: DatePipe) { }
  

  ngOnInit(): void {
    
    let cuser=localStorage.getItem('currentUser');
    this.trainerObj.calendar_access(cuser)
    .subscribe((data)=>{ 
      if(cuser=="tmsadmn@gmail.com"){
        this.trainers=JSON.parse(JSON.stringify(data));
        for(let tr of this.trainers){
          this.startdate= this.datepipe.transform(tr.startdate,'yyyy-MM-dd','+0530');
      this.enddate=this.datepipe.transform(tr.enddate,'yyyy/MM/dd','+0530')
      this.events=[
          ...this.events,
        {
          start:new Date(this.startdate),
          end:new Date(this.enddate),
          title:tr.name
      }
      ]
        }
      }
      else{
      this.trainer=JSON.parse(JSON.stringify(data));
      console.log(this.trainer);
     this.startdate= this.datepipe.transform(this.trainer.startdate,'yyyy-MM-dd','+0530');
      this.enddate=this.datepipe.transform(this.trainer.enddate,'yyyy/MM/dd','+0530')
      this.events=[
        {
          start:new Date(this.startdate),
          end:new Date(this.enddate),
          title:this.trainer.courseid
      }
    ]}
  
      })
  }
  
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    let cuser=localStorage.getItem('currentUser');
    if(cuser!="tmsadmn@gmail.com")
    {Swal.fire({
      icon:'info',
      title:this.trainer.coursename,
      html:`<p> Time:${this.trainer.time} <br>Batchid:${this.trainer.batchid}<br>Venue:${this.trainer.meetingvenue}</p>`
    })}
    
    }
    
  }
 

