class Form {
    constructor(){
     this.input=createInput("Name")
     this.enter=createButton("Submit")
     this.play=createButton("play")
     this.text=createP("Quiz game")
     var str="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus risus tortor, vitae condimentum tortor interdum ac. Pellentesque interdum, odio sed bibendum vestibulum, nisl leo consequat sapien, tristique vehicula lectus libero nec massa.\n Maecenas volutpat dignissim turpis\n quis egestas. Aliquam eu massa et nisl rutrum pharetra. Duis vitae leo fringilla, ultrices eros vel, luctus felis. Sed convallis orci sed tempus pulvinar. Donec commodo metus augue, at luctus odio faucibus vitae. Nam eget feugiat orci. In laoreet facilisis dui, sit amet vestibulum ipsum molestie et. Praesent ultricies elit in ex consectetur, id porta dolor vestibulum. Etiam risus ex, luctus et imperdiet mattis, euismod ut massa. Quisque nisi mauris, varius eget diam ac, tempor congue risus. Fusce commodo sem in dignissim viverra. Nullam dolor eros, ornare vitae condimentum a, porta eu libero. Donec finibus tincidunt orci, a interdum dolor convallis quis."
     this.playtext=createP(str)
        }

     display(){
         this.input.position(width/2-65,height-300)
         this.enter.position(width/2,height-250)  
         this.text.position(width/2-120,height/2-100)
         this.text.style("font-size","70px")
         this.text.style("font-weight","bold")
         this.enter.mousePressed(()=>{
             player=new Player()
             var name=this.input.value()
             player.updateName(name)
             this.input.hide()
             this.enter.hide()  
             this.text.hide()
             this.play.position(width/2,height-50)
             this.playtext.position(width/4,height/2-200)
         })  
        this.play.mousePressed(()=>{
        game.updateGameState(1)
        ques.display()
        this.playtext.hide()
        this.play.hide()
        })
        }
    
} 