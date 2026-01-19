let i=0,score=0;

const qs=[
 {q:"2,4,6,?",a:["8","10","9","12"],c:0},
 {q:"5×6=?",a:["11","30","25","20"],c:1},
 {q:"9²=?",a:["18","81","72","99"],c:1}
];

function load(){
  if(i>=qs.length){
    document.body.innerHTML=`<h1>IQ Score: ${score*10}</h1>`;
    return;
  }
  document.getElementById("q").innerText=qs[i].q;
  let a=document.getElementById("a");
  a.innerHTML="";
  qs[i].a.forEach((x,n)=>{
    let b=document.createElement("button");
    b.className="btn blue";
    b.innerText=x;
    b.onclick=()=>{ if(n===qs[i].c)score++; i++; load(); }
    a.appendChild(b);
  });
}
load();
