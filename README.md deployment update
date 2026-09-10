# index.html
Mwelekeo_app
<!DOCTYPE html>
<html lang="sw">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MWELEKEO APP</title>

  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
    }

    body {
      background: #f4f7fb;
      color: #172033;
    }

    header {
      background: #172a4d;
      color: white;
      padding: 20px;
      text-align: center;
    }

    header h1 {
      font-size: 28px;
      margin-bottom: 6px;
    }

    header p {
      font-size: 14px;
    }

    .container {
      padding: 20px;
      max-width: 900px;
      margin: auto;
    }

    .welcome {
      background: white;
      padding: 22px;
      border-radius: 15px;
      margin-bottom: 20px;
      box-shadow: 0 3px 10px rgba(0,0,0,0.08);
    }

    .welcome h2 {
      margin-bottom: 8px;
    }

    .search {
      width: 100%;
      padding: 14px;
      border: 1px solid #ddd;
      border-radius: 10px;
      margin-top: 15px;
      font-size: 16px;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 15px;
      margin-top: 20px;
    }

    .card {
      background: white;
      padding: 20px;
      border-radius: 15px;
      text-align: center;
      box-shadow: 0 3px 10px rgba(0,0,0,0.07);
      cursor: pointer;
      transition: 0.2s;
    }

    .card:hover {
      transform: translateY(-3px);
    }

    .card .icon {
      font-size: 32px;
      margin-bottom: 10px;
    }

    .card h3 {
      font-size: 17px;
      margin-bottom: 5px;
    }

    .section {
      background: white;
      padding: 20px;
      border-radius: 15px;
      margin-top: 20px;
      display: none;
    }

    .section h2 {
      margin-bottom: 15px;
    }

    button {
      border: none;
      background: #172a4d;
      color: white;
      padding: 12px 18px;
      border-radius: 8px;
      cursor: pointer;
      margin-top: 10px;
    }

    ul {
      padding-left: 20px;
      line-height: 2;
    }

    footer {
      text-align: center;
      padding: 25px;
      color: #777;
      font-size: 13px;
    }
  </style>
</head>

<body>

<header>
  <h1>MWELEKEO APP</h1>
  <p>Jifunze • Tafuta Notes • Jadili • Panga Masomo</p>
</header>

<div class="container">

  <div class="welcome">
    <h2>Karibu MWELEKEO 👋</h2>
    <p>Sehemu yako ya kusaidia wanafunzi kujifunza na kupata mwelekeo wa masomo.</p>

    <input
      type="text"
      class="search"
      id="searchBox"
      placeholder="Tafuta somo au topic..."
      onkeyup="searchContent()"
    >
  </div>

  <div class="grid">

    <div class="card" onclick="showSection('ai')">
      <div class="icon">🤖</div>
      <h3>AI Msaidizi</h3>
      <p>Uliza swali</p>
    </div>

    <div class="card" onclick="showSection('library')">
      <div class="icon">📚</div>
      <h3>Library</h3>
      <p>Notes za masomo</p>
    </div>

    <div class="card" onclick="showSection('timetable')">
      <div class="icon">🗓️</div>
      <h3>Timetable</h3>
      <p>Panga ratiba</p>
    </div>

    <div class="card" onclick="showSection('discussion')">
      <div class="icon">💬</div>
      <h3>Discussion</h3>
      <p>Jadili na wanafunzi</p>
    </div>

  </div>

  <div id="ai" class="section">
    <h2>🤖 AI Msaidizi</h2>
    <p>Hapa mwanafunzi ataweza kuuliza swali na kupata msaada wa kulitatua.</p>
    <button onclick="alert('AI Msaidizi itaunganishwa hapa.')">
      Uliza Swali
    </button>
  </div>

  <div id="library" class="section">
    <h2>📚 Library</h2>
    <ul>
      <li>Public Sector Accounting</li>
      <li>Cost Accounting</li>
      <li>Auditing</li>
      <li>Economics</li>
      <li>Research Methods</li>
    </ul>

    <button onclick="alert('Sehemu ya kupakia notes itaunganishwa hapa.')">
      + Upload Notes
    </button>
  </div>

  <div id="timetable" class="section">
    <h2>🗓️ Timetable</h2>
    <ul>
      <li>Monday — Accounting</li>
      <li>Tuesday — Economics</li>
      <li>Wednesday — Auditing</li>
      <li>Thursday — Research Methods</li>
      <li>Friday — Cost Accounting</li>
    </ul>
  </div>

  <div id="discussion" class="section">
    <h2>💬 Discussion</h2>
    <p>Hapa wanafunzi wataweza kuuliza maswali, kujibu na kujadiliana.</p>
    <button onclick="alert('Discussion itaunganishwa hapa.')">
      Fungua Discussion
    </button>
  </div>

</div>

<footer>
  © 2026 MWELEKEO APP — Elimu kwa wote
</footer>

<script>

  function showSection(sectionId) {

    const sections = document.querySelectorAll('.section');

    sections.forEach(function(section) {
      section.style.display = 'none';
    });

    document.getElementById(sectionId).style.display = 'block';

    window.scrollTo({
      top: document.getElementById(sectionId).offsetTop - 20,
      behavior: 'smooth'
    });
  }

  function searchContent() {

    const search = document
      .getElementById('searchBox')
      .value
      .toLowerCase();

    const cards = document.querySelectorAll('.card');

    cards.forEach(function(card) {

      const text = card.innerText.toLowerCase();

      if (text.includes(search)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }

    });
  }

</script>

</body>
</html>
