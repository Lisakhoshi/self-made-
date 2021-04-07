class Question{
    constructor(){
        this.question=createP()
        this.answer1=createRadio()
        this.answer2=createRadio()
        this.answer3=createRadio()
        this.answer4=createRadio()
        this.answer5=createRadio()
        this.submit=createButton("Submit")
        this.text=createP("You must select an answer")
        this.answerval = ""
    }



    display(){
        //this.questionLoop(questionNumber)
        this.question.position(width/2-100,100)
       
      questionString="Question1"
        this.answer1.position(width/2,height/2)
        this.answer1.option("option1","option1")
        this.answer1.option("option2","option2")
        this.answer1.option("option3","option3")
        this.answer1.option("option4","option4")
        
        this.submit.position(width/2-20,height/2+200)
        
    this.question.html(questionString)
        this.submit.mousePressed(()=>{
            this.answerval = this.answer1.value();

            switch(questionNumber){
            
                case 2:questionString="Question2"
                this.answer2.position(width/2,height/2)
                this.answer1.hide()
                this.answer2.option(1,"option1")
                this.answer2.option(2,"option2")
                this.answer2.option(3,"option3")
                this.answer2.option(4,"option4")
                this.answerval = this.answer2.value()
    
              //  answerval = this.answer2.value()
                break;
                case 3:questionString="Question3"
                this.answer3.position(width/2,height/2)
                this.answer2.hide()
                this.answer3.option("option1","option1")
                this.answer3.option("option2","option2")
                this.answer3.option("option3","option3")
                this.answer3.option("option4","option4")
                this.answerval = this.answer3.value()
    
               // answerval = this.answer3.value()
                break;
                case 4:questionString="Question4"
                this.answer4.position(width/2,height/2)
                this.answer3.hide()
                this.answer4.option("option1","option1")
                this.answer4.option("option2","option2")
                this.answer4.option("option3","option3")
                this.answer4.option("option4","option4")
                this.answerval = this.answer4.value()
    
                //answerval = this.answer4.value()
                break;
                case 5:questionString="Question5"
                this.answer5.position(width/2,height/2)
                this.answer4.hide()
                this.answer5.option("option1","option1")
                this.answer5.option("option2","option2")
                this.answer5.option("option3","option3")
                this.answer5.option("option4","option4")
                this.answerval = this.answer5.value()
               
                //answerval = this.answer5.value()
                break;  
        }
            
            if(this.answerval){
                questionNumber+=1
                //var val = this.answer+questionNumber;
                console.log(this.answerval);
                //this.questionLoop(questionNumber)
                
                 }
                else{
                
                    this.text.position(width/2-60,height/2+150)
                }
        })
        
    }
}