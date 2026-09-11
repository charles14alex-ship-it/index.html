// ===========================
// MWELEKEO APP - Supabase Integration
// ===========================

// Initialize Supabase Client (loaded from index.html)
// window.supabaseClient is set in index.html

// ===========================
// AUTHENTICATION
// ===========================

async function signUp(email, password) {
  try {
    const { data, error } = await window.supabaseClient.auth.signUp({
      email: email,
      password: password,
    });
    
    if (error) throw error;
    console.log('User registered:', data);
    alert('Usajili umefanikiwa! Tafadhali akaunti yako kwenye email.');
    return data;
  } catch (error) {
    console.error('Sign up error:', error.message);
    alert('Kosa la usajili: ' + error.message);
  }
}

async function signIn(email, password) {
  try {
    const { data, error } = await window.supabaseClient.auth.signInWithPassword({
      email: email,
      password: password,
    });
    
    if (error) throw error;
    console.log('User signed in:', data);
    alert('Umeingia sehemu!');
    displayNotes();
    displaySchedules();
    displayPosts();
    return data;
  } catch (error) {
    console.error('Sign in error:', error.message);
    alert('Kosa la kuingia: ' + error.message);
  }
}

async function signOut() {
  try {
    const { error } = await window.supabaseClient.auth.signOut();
    if (error) throw error;
    console.log('User signed out');
    document.getElementById('notesList').innerHTML = '';
    document.getElementById('schedule').innerHTML = '';
    document.getElementById('posts').innerHTML = '';
  } catch (error) {
    console.error('Sign out error:', error.message);
  }
}

// ===========================
// NOTES MANAGEMENT
// ===========================

async function saveNote(noteContent) {
  try {
    const { data: { user } } = await window.supabaseClient.auth.getUser();
    
    if (!user) {
      alert('Tafadhali ingia kwanza');
      return;
    }
    
    const { data, error } = await window.supabaseClient
      .from('notes')
      .insert([
        {
          user_id: user.id,
          content: noteContent,
          created_at: new Date(),
        }
      ]);
    
    if (error) throw error;
    console.log('Note saved:', data);
    displayNotes();
    document.getElementById('note').value = '';
  } catch (error) {
    console.error('Save note error:', error.message);
    alert('Kosa: ' + error.message);
  }
}

async function displayNotes() {
  try {
    const { data: { user } } = await window.supabaseClient.auth.getUser();
    
    if (!user) return;
    
    const { data, error } = await window.supabaseClient
      .from('notes')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    
    const notesList = document.getElementById('notesList');
    notesList.innerHTML = '';
    
    data.forEach(note => {
      notesList.innerHTML += `
        <div class="card">
          <p>${note.content}</p>
          <small>${new Date(note.created_at).toLocaleString()}</small>
          <button onclick="deleteNote('${note.id}')">Futa</button>
        </div>
      `;
    });
  } catch (error) {
    console.error('Display notes error:', error.message);
  }
}

async function deleteNote(noteId) {
  try {
    const { error } = await window.supabaseClient
      .from('notes')
      .delete()
      .eq('id', noteId);
    
    if (error) throw error;
    console.log('Note deleted');
    displayNotes();
  } catch (error) {
    console.error('Delete note error:', error.message);
  }
}

// ===========================
// SCHEDULE MANAGEMENT
// ===========================

async function saveSchedule(subject, time) {
  try {
    const { data: { user } } = await window.supabaseClient.auth.getUser();
    
    if (!user) {
      alert('Tafadhali ingia kwanza');
      return;
    }
    
    const { data, error } = await window.supabaseClient
      .from('schedules')
      .insert([
        {
          user_id: user.id,
          subject: subject,
          time: time,
          created_at: new Date(),
        }
      ]);
    
    if (error) throw error;
    console.log('Schedule saved:', data);
    displaySchedules();
    document.getElementById('subject').value = '';
    document.getElementById('time').value = '';
  } catch (error) {
    console.error('Save schedule error:', error.message);
    alert('Kosa: ' + error.message);
  }
}

async function displaySchedules() {
  try {
    const { data: { user } } = await window.supabaseClient.auth.getUser();
    
    if (!user) return;
    
    const { data, error } = await window.supabaseClient
      .from('schedules')
      .select('*')
      .eq('user_id', user.id)
      .order('time', { ascending: true });
    
    if (error) throw error;
    
    const schedule = document.getElementById('schedule');
    schedule.innerHTML = '';
    
    data.forEach(item => {
      schedule.innerHTML += `
        <div class="card">
          📚 ${item.subject} — ⏰ ${item.time}
          <button onclick="deleteSchedule('${item.id}')">Futa</button>
        </div>
      `;
    });
  } catch (error) {
    console.error('Display schedules error:', error.message);
  }
}

async function deleteSchedule(scheduleId) {
  try {
    const { error } = await window.supabaseClient
      .from('schedules')
      .delete()
      .eq('id', scheduleId);
    
    if (error) throw error;
    console.log('Schedule deleted');
    displaySchedules();
  } catch (error) {
    console.error('Delete schedule error:', error.message);
  }
}

// ===========================
// DISCUSSION MANAGEMENT
// ===========================

async function post(postContent) {
  try {
    const { data: { user } } = await window.supabaseClient.auth.getUser();
    
    if (!user) {
      alert('Tafadhali ingia kwanza');
      return;
    }
    
    const { data, error } = await window.supabaseClient
      .from('posts')
      .insert([
        {
          user_id: user.id,
          content: postContent,
          created_at: new Date(),
        }
      ]);
    
    if (error) throw error;
    console.log('Post created:', data);
    displayPosts();
    document.getElementById('post').value = '';
  } catch (error) {
    console.error('Post error:', error.message);
    alert('Kosa: ' + error.message);
  }
}

async function displayPosts() {
  try {
    const { data, error } = await window.supabaseClient
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    
    const posts = document.getElementById('posts');
    posts.innerHTML = '';
    
    data.forEach(item => {
      posts.innerHTML += `
        <div class="card">
          <strong>Mjumbe</strong>
          <p>${item.content}</p>
          <small>${new Date(item.created_at).toLocaleString()}</small>
        </div>
      `;
    });
  } catch (error) {
    console.error('Display posts error:', error.message);
  }
}

// ===========================
// FILE UPLOAD
// ===========================

async function uploadFile(file) {
  try {
    const { data: { user } } = await window.supabaseClient.auth.getUser();
    
    if (!user) {
      alert('Tafadhali ingia kwanza');
      return;
    }
    
    const fileName = `${user.id}/${Date.now()}_${file.name}`;
    
    const { data, error } = await window.supabaseClient.storage
      .from('study-materials')
      .upload(fileName, file);
    
    if (error) throw error;
    console.log('File uploaded:', data);
    alert('Faili limepakiwa kwa mafanikio!');
    return data;
  } catch (error) {
    console.error('File upload error:', error.message);
    alert('Kosa: ' + error.message);
  }
}

// ===========================
// UI FUNCTIONS
// ===========================

function show(id) {
  document.querySelectorAll('.page').forEach(x => x.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function ask() {
  let q = document.getElementById('question').value;
  if (!q) return;
  document.getElementById('answer').innerHTML =
    '<b>AI Msaidizi:</b><br>Swali lako limepokelewa: ' + q +
    '<br><br>Hii ni prototype ya MWELEKEO. Ili AI ijibu maswali halisi, tutaunganisha AI API kwenye backend.';
}

function speak() {
  let a = document.getElementById('answer').innerText;
  speechSynthesis.cancel();
  speechSynthesis.speak(new SpeechSynthesisUtterance(a));
}

function speechRecognition() {
  let R = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!R) return alert('Browser yako haisapoti voice recognition');
  let r = new R();
  r.lang = 'sw-TZ';
  r.onresult = e => {
    document.getElementById('question').value = e.results[0][0].transcript;
  };
  r.start();
}

function solveExam() {
  let q = document.getElementById('examQuestion').value;
  if (!q) return;
  document.getElementById('examAnswer').innerHTML =
    '<div class="card">' +
    '<h3>DATA GIVEN</h3><p>' + q + '</p>' +
    '<h3>FORMULA</h3><p>Identify the appropriate formula from the question.</p>' +
    '<h3>SOLVING / WORKING</h3><p>Show all calculations step by step.</p>' +
    '<h3>FINAL ANSWER</h3><p>Write the final answer clearly.</p>' +
    '</div>';
}

// ===========================
// INITIALIZE APP
// ===========================

document.addEventListener('DOMContentLoaded', () => {
  displayNotes();
  displaySchedules();
  displayPosts();
});