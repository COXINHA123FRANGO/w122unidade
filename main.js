x=0;
y=0;

screen_Yidth=0;
screen_height=0;

draw_apple =  "";
maça= "";
speak_data= "";
to_number=0;

function prelod() {
maça = loadimage("maçanãodoamor.png")}

var SpeechRecognition = window.webkitSpeechRecognition();
function start(){
document.getElementsByid("status").innerHTML = "o sistema esta ouvindo. porfavor, fale";
recognition.start();
}
recognition.onresult = function(event){
console.log(event);
content = event.results[0][0].transcript;
document.getElementsByid("status").innerHTML = "a fala foi recinhecida bom dia: " + content;
to_number = Number(content);
    if (Number.isInteger(to_number)) {
document.getElementById("status").innerHTML = "a maçççççaaaaa começouuuu a serrrr cumeeeeer çaddaaaa";
draw_apple = "set";


}
else{
document.getElementById("status").innerHTML = "o letra nãu voi ricunhicido. "};
recognition.start();
}
recognition.onresult = function(event){
console.log(event);
content = event.results[0][0].transcript;
document.getElementById("status").innerHTML = "A FALENCIA FOI RINOCONHECIDA: "+ content;
to_number = Number(content);
if (Number.isInteger(to_number)) {
document.getElementsByid("status").innerHTML = "a massa começado a de desenhar.";
draw_apple = "set"
}
else{
document.getElementById("status").innerHTML = "o nombre no viu recinhecinho.";
}
}
function setup() { screen_width = window.innerWidth;
 screen_height = window.innerHeight;
 canvas = createCanvas(screen_width, screen_height-150);
  canvas.position(0,150); }
  function draw() { if(draw_apple == "set") { for(var i = 1 ;
 i <= to_number; i++) { x = Math.floor(Math.random() * 700);
 y = Math.floor(Math.random() * 400); image(apple, x, y, 50, 50); } document.getElementById("status").innerHTML = to_number + " maçãs desenhadas";
   speak_data = to_number + " maçãs desenhadas"; speak();
    draw_apple = ""; } }

function speak(){
  var synth = window.speechSynthesis;
   var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis); speak_data = "";

}