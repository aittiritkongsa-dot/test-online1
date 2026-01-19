let current = 0;
let score = 0;
let startTime = 0;

const questions = [
  { text: "กดปุ่มสีฟ้า", answer: "blue" },
  { text: "กดปุ่มสีแดง", answer: "red" },
  { text: "กดปุ่มสีเขียว", answer: "green" },
  { text: "กดปุ่มสีเหลือง", answer: "yellow" },
  { text: "กดสีที่เข้มที่สุด", answer: "blue" },
  { text: "กดสีที่เหมือนสัญญาณหยุด", answer: "red" },
  { text: "กดสีที่สื่อถึงธรรมชาติ", answer: "green" },
  { text: "กดสีที่สื่อถึงแสงอาทิตย์", answer: "yellow" },
  { text: "กดปุ่มซ้ายสุด", answer: "blue" },
  { text: "กดปุ่มขวาสุด", answer: "yellow" }
];

function startTest() {
  document.getElementById("warning").style.display = "none";
  document.getElementById("game").style.display = "block";
  loadQuestion();
}

function loadQuestion() {
  if (current >= questions.length) {
    finish();
    return;
  }

  const q = questions[current];
  document.getElementById("question").innerText =
    `ข้อที่ ${current + 1}/10 : ${q.text}`;
  document.getElementById("info").innerText = "";

  const btnArea = document.getElementById("buttons");
  btnArea.innerHTML = "";

  const colors = ["blue", "red", "green", "yellow"];
  shuffle(colors);

  colors.forEach(c => {
    const btn = document.createElement("button");
    btn.className = `btn ${c}`;
    btn.innerText = c.toUpperCase();
    btn.onclick = () => check(c);
    btnArea.appendChild(btn);
  });

  startTime = Date.now();
}

function check(choice) {
  const time = Date.now() - startTime;

  if (choice === questions[current].answer) {
    let point = Math.max(0, 10 - Math.floor(time / 300));
    score += point;
    document.getElementById("info").innerText =
      `ถูกต้อง (+${point} คะแนน, ${time} ms)`;
  } else {
    document.getElementById("info").innerText =
      `ผิด (${time} ms)`;
  }

  current++;
  setTimeout(loadQuestion, 800);
}

function finish() {
  document.getElementById("game").style.display = "none";
  document.getElementById("result").style.display = "block";

  document.getElementById("scoreText").innerHTML =
    `คะแนนรวม: <b>${score}/100</b><br><br>` +
    getLevel(score);
}

function getLevel(s) {
  if (s >= 80) return "🔥 การตอบสนองยอดเยี่ยม สมาธิสูงมาก";
  if (s >= 60) return "⚡ การตอบสนองดี อยู่ในระดับเหนือค่าเฉลี่ย";
  if (s >= 40) return "🙂 ระดับปกติ ยังพัฒนาได้อีก";
  return "🐢 ควรฝึกสมาธิและความเร็วในการตัดสินใจ";
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
