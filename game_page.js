player1name="";
player2name="";
score1player=0;
score2player=0;
getanswer=0;
function gamestart(){
   player1name= localStorage.getItem("player1id")
   player2name= localStorage.getItem("player2id")
   document.getElementById("lol2").innerHTML= player2name+" :"+ score2player
   document.getElementById("lol1").innerHTML= player1name+" :"+ score1player
   document.getElementById("qtu").innerHTML= "<b>" + "OUESTION TURN - " + player1name + "</b>"
   document.getElementById("atu").innerHTML= "<b>" + "ANSWER TURN - " + player2name + "</b>"
}
function send(){
   question1no= document.getElementById("q1").value
   question2no= document.getElementById("q2").value
   getanswer= question1no * question2no
   console.log(getanswer)

   questionturn="<h4>" + question1no + " X " + question2no + "</h4>"
   inputbox= "<br>" + "Answer : " + "<input type='number' id='happy_ans'>"
   hhhcheck= "<br><br>" + "<button onClick='check()' class='btn btn-success'> Check</button>"
   document.getElementById("output").innerHTML= questionturn + inputbox + hhhcheck
}
function check(){
   if(getanswer = document.getElementById("happy_ans").value){
      score1player+= 1
      document.getElementById("lol1").innerHTML= player1name+" :"+ score1player
   }
}