<!DOCTYPE html>
<html lang="sw">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>MWELEKEO APP</title>
<style>
body{font-family:Arial;margin:0;background:#f4f7fb;color:#172033}
header{background:#182848;color:white;padding:18px;text-align:center}
nav{display:flex;flex-wrap:wrap;gap:7px;padding:10px;background:white}
button{border:0;border-radius:8px;padding:10px;background:#182848;color:white}
main{padding:15px}.page{display:none}.active{display:block}
.card{background:white;padding:15px;margin:10px 0;border-radius:12px;box-shadow:0 2px 8px #ddd}
input,textarea,select{width:100%;box-sizing:border-box;padding:11px;margin:7px 0;border:1px solid #ccc;border-radius:8px}
</style>
</head>

<body>
<header>
<h1>🎓 MWELEKEO</h1>
<p>AI Study App kwa Wanachuo</p>
</header>

<nav>
<button onclick="show('home')">Home</button>
<button onclick="show('library')">📚 Library</button>
<button onclick="show('notes')">📝 Notes</button>
<button onclick="show('ratiba')">📅 Ratiba</button>
<button onclick="show('ai')">🤖 AI Msaidizi</button>
<button onclick="show('exam')">🎯 Exam Mode</button>
<button onclick="show('discussion')">💬 Discussion</button>
</nav>

<main>

<section id="home" class="page active">
<div class="card">
<h2>Karibu MWELEKEO</h2>
<p>Sehemu yako ya kusoma, kuuliza maswali na kupanga ratiba.</p>
<button onclick="show('ai')">Anza na AI Msaidizi</button>
</div>
</section>

<section id="library" class="page">
<div class="card">
<h2>📚 Maktaba</h2>
<p>Notes, maswali na study materials.</p>
<input type="file" id="file">
<button onclick="upload()">Upload File</button>
<div id="files"></div>
</div>
</section>

<section id="notes" class="page">
<div class="card">
<h2>📝 Notes</h2>
<textarea id="note" placeholder="Andika note yako..."></textarea>
<button onclick="saveNote()">Save Note</button>
<div id="notesList"></div>
</div>
</section>

<section id="ratiba" class="page">
<div class="card">
<h2>📅 Ratiba ya Masomo</h2>
<input id="subject" placeholder="Somo">
<input id="time" placeholder="Muda mfano 10:00">
<button onclick="saveSchedule()">Ongeza Ratiba</button>
<div id="schedule"></div>
</div>
</section>

<section id="ai" class="page">
<div class="card">
<h2>🤖 AI Msaidizi</h2>
<textarea id="question" placeholder="Andika swali lako hapa..."></textarea>
<button onclick="ask()">Uliza AI</button>
<button onclick="speak()">🔊 Soma Jibu</button>
<button onclick="speechRecognition()">🎙️ Ongea</button>
<div id="answer" class="card">Jibu litaonekana hapa.</div>
</div>
</section>

<section id="exam" class="page">
<div class="card">
<h2>🎯 Exam Mode</h2>
<select id="examSubject">
<option>Accounting</option><option>Finance</option>
<option>Economics</option><option>Mathematics</option>
<option>Statistics</option><option>Taxation</option>
</select>
<textarea id="examQuestion" placeholder="Andika swali la hesabu..."></textarea>
<button onclick="solveExam()">Solve in Exam Format</button>
<div id="examAnswer"></div>
</div>
</section>

<section id="discussion" class="page">
<div class="card">
<h2>💬 Discussion</h2>
<textarea id="post" placeholder="Andika ujumbe..."></textarea>
<button onclick="post()">Post</button>
<div id="posts"></div>
</div>
</section>

</main>

<script>
function show(id){
document.querySelectorAll('.page').forEach(x=>x.classList.remove('active'));
document.getElementById(id).classList.add('active');
}

function upload(){
let f=document.getElementById('file').files[0];
if(!f)return alert('Chagua file kwanza');
document.getElementById('files').innerHTML+=
'<p>📄 '+f.name+'</p>';
}

function saveNote(){
let n=document.getElementById('note').value;
if(!n)return;
document.getElementById('notesList').innerHTML+='<div class="card">'+n+'</div>';
document.getElementById('note').value='';
}

function saveSchedule(){
let s=document.getElementById('subject').value;
let t=document.getElementById('time').value;
if(!s)return;
document.getElementById('schedule').innerHTML+=
'<div class="card">📚 '+s+' — ⏰ '+t+'</div>';
}

function ask(){
let q=document.getElementById('question').value;
if(!q)return;
document.getElementById('answer').innerHTML=
'<b>AI Msaidizi:</b><br>Swali lako limepokelewa: '+q+
'<br><br>Hii ni prototype ya MWELEKEO. Ili AI ijibu maswali halisi, tutaunganisha AI API kwenye backend.';
}

function speak(){
let a=document.getElementById('answer').innerText;
speechSynthesis.cancel();
speechSynthesis.speak(new SpeechSynthesisUtterance(a));
}

function speechRecognition(){
let R=window.SpeechRecognition||window.webkitSpeechRecognition;
if(!R)return alert('Browser yako haisapoti voice recognition');
let r=new R();
r.lang='sw-TZ';
r.onresult=e=>{
document.getElementById('question').value=e.results[0][0].transcript;
};
r.start();
}

function solveExam(){
let q=document.getElementById('examQuestion').value;
if(!q)return;
document.getElementById('examAnswer').innerHTML=
'<div class="card">'+
'<h3>DATA GIVEN</h3><p>'+q+'</p>'+
'<h3>FORMULA</h3><p>Identify the appropriate formula from the question.</p>'+
'<h3>SOLVING / WORKING</h3><p>Show all calculations step by step.</p>'+
'<h3>FINAL ANSWER</h3><p>Write the final answer clearly.</p>'+
'</div>';
}

function post(){
let p=document.getElementById('post').value;
if(!p)return;
document.getElementById('posts').innerHTML+=
'<div class="card">💬 '+p+'</div>';
document.getElementById('post').value='';
}
</script>
</body>
</html> document
      .getElementById("schedule")
      .insertBefore(
        schedule,
        document.querySelector("#schedule .primary")
      );
  }


  /* =========================
     START APP
  ========================= */

  displayNotes();

</script>

</body>
</html>
