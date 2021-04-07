class Player{
    constructor(){
        this.name=null
    }
   updateName(name){
   database.ref("/").update({
       Name:name
   })
 }
}