let i = 0;
let score = 0;

const questions = Array(40).fill("คุณมักคิดถึงผลลัพธ์ระยะยาวก่อนลงมือทำ");

function start(){
  document.getElementById("warning").style.display="none";
  document.getElementById("quiz").style.display="block";
  load();
}

function load(){
  if(i>=40){
    finish();
    return;
  }
  document.getElementById("q").innerText = `ข้อ ${i+1}/40 : ${questions[i]}`;
}

function answer(v){
  score += v;
  i++;
  load();
}

function finish(){
  document.getElementById("quiz").style.display="none";
  document.getElementById("result").style.display="block";

  let type = score > 0 ? "INTJ / INFJ" :
             score < 0 ? "ESFP / ENFP" :
             "สายกลาง";

  document.getElementById("type").innerText = type;
}
