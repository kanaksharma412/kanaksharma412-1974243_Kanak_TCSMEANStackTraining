import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { options } from '../options.model';
import { quiz } from '../quiz.model';
import { QuizserviceService } from '../quizservice.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  currentQuestion = 0;
  currentScore = 0;
  answers:Array<options>=[];
  rightAns:Array<string>=[];
  isDisabled:boolean = true;
  nextQues:boolean=false;
  prevQues:boolean=true;

  constructor(public quizSer:QuizserviceService,private config:NgbModalConfig,private modalService:NgbModal,public router:Router) { 
    config.backdrop = 'static';
    config.keyboard = false;
  }
  test:Array<quiz>=[];
  ngOnInit(): void {
    this.quizSer.loadQuiz().subscribe(result=>this.test=result);
    setTimeout(()=>{
      this.rightAnswers();
    }, 3000);
    const submit: HTMLElement = document.getElementById("clickMe") as HTMLElement;
    setTimeout(()=>{
      this.isDisabled=false;
    }, 600000);
    setTimeout(()=>{
      submit.click();
    }, 600000);
   }

  rightAnswers(){
    for(let i=0;i<this.test.length;i++){
      for(let j=0;j<this.test[i].options.length;j++){
        if(this.test[i].options[j].value==true){
          this.rightAns.push(this.test[i].options[j].option);
        }
      }
    }
    console.log(this.rightAns);
  }

  onAnswer(option : options){
    if(this.answers.length==0) this.answers.push(option);
    else if(this.answers.length<this.currentQuestion) this.answers.push(option);
    else{
      if(option!=this.answers[this.currentQuestion]){
        this.answers.splice(this.currentQuestion,1,option);
      }
    }
    console.log(this.answers);
    if(this.answers.length==this.rightAns.length) this.isDisabled = false;
  }

  next(){
    this.currentQuestion++;
    if(this.currentQuestion==this.test.length-1) this.nextQues=true;
    if(this.currentQuestion==0) this.prevQues=true;
    else this.prevQues=false;
    
  }

  previous(){
    this.currentQuestion--;
    if(this.currentQuestion<this.test.length-1) this.nextQues=false;
    if(this.currentQuestion==0) this.prevQues=true;
    else this.prevQues=false;
  }

  submit(){
    for(let i=0;i<this.answers.length;i++){
      if(this.answers[i].value==true) this.currentScore++;
    }
  }

  open(content:any){
    this.modalService.open(content,{scrollable:true});
  }

  resetScore(){
    this.currentScore=0;
  }

  loadAnswers(){
    if(this.answers.length==0){
      let element =document.getElementById("addStuff")
      if(element) element.innerHTML= "No questions attempted";
    }else{
    for(let i=0;i<this.test.length;i++){
      let child = document.createElement('div');
      child.id = "child"+i;
      child.className = "divChild";
      document.getElementById("addStuff")?.appendChild(child);
      let question = document.createElement("h4");
      let opt1 = document.createElement("p");
      let opt2 = document.createElement("p");
      let opt3 = document.createElement("p");
      let res = document.createElement("p");
      question.id = "question"+i;
      opt1.id = "opt1"+i;
      opt2.id = "opt2"+i;
      opt3.id = "opt3"+i;
      res.id = "res"+i;
      document.getElementById("child"+i)?.appendChild(question);
      document.getElementById("child"+i)?.appendChild(opt1);
      document.getElementById("child"+i)?.appendChild(opt2);
      document.getElementById("child"+i)?.appendChild(opt3);
      document.getElementById("child"+i)?.appendChild(res);
      const ques = document.getElementById("question"+i);
      if(ques) ques.innerHTML = this.test[i].question;
      const option1 = document.getElementById("opt1"+i);
      if(option1){ 
        option1.innerHTML = this.test[i].options[0].option;
        if(this.test[i].options[0].value) option1.style.color='green';
        else option1.style.color='red';
      }
      const option2 = document.getElementById("opt2"+i);
      if(option2){
       option2.innerHTML = this.test[i].options[1].option;
       if(this.test[i].options[1].value) option2.style.color='green';
       else option2.style.color='red';
      }
      const option3 = document.getElementById("opt3"+i);
      if(option3){
        option3.innerHTML = this.test[i].options[2].option;
        if(this.test[i].options[2].value) option3.style.color='green';
        else option3.style.color='red';
      }
      const result = document.getElementById("res"+i);
      if(result){
        if(this.answers[i].option==this.rightAns[i]){
          result.innerHTML="Correct answers!";
        }else{
          result.innerHTML = "Wrong!! Your answer: "+this.answers[i].option+"."+" Right answer: "+this.rightAns[i];
        }
      }
    }
  }
}

goToExit(){
  this.router.navigate(["exit"]);
}

}
