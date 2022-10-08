import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TrainerService } from '../trainer.service';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-trainer',
  templateUrl: './edit-trainer.component.html',
  styleUrls: ['./edit-trainer.component.css']
})
export class EditTrainerComponent implements OnInit {

  trainer={
    name:'',
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
    employment:''
  }

  trainers=[{
    name:'',
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
    employment:''
  }]


  name = 'Angular';  

  categories = [  
    {id: 1, name: 'Full Stack Development'},  
    {id: 2, name: 'Data Science and Analytics'},  
    {id: 3, name: 'Robotic Process Automation'},  

  ]; 

  image: any; 

 trainerdata:any;

  constructor(public trainerObj : TrainerService, private router:Router, private http : HttpClient) { }

  ngOnInit(): void {
   
    let trainerId = localStorage.getItem('editTrainerId');
    this.trainerObj.getTrainer4(trainerId)
    .subscribe((trainerdata)=>{
      this.trainer =JSON.parse(JSON.stringify(trainerdata))
      console.log(this.trainer);
    });
    
  }
  editTrainers(formValue:NgForm)
  { this.trainer.ictakcourses=JSON.stringify(this.trainer.ictakcourses);

 
    this.trainerObj.editTrainers2(this.trainer)
    .subscribe((data)=>{console.log(data)})
    alert("Trainer updated");
    this.router.navigate(['trainerprofiles']);
  
}
}
