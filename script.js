
document.getElementById("registerForm")?.addEventListener("submit", function(e){
  e.preventDefault();
  const name = document.getElementById("name").value;
  document.getElementById("message").textContent = `Bienvenue ${name}, ton inscription est réussie !`;
  this.reset();
});
document.getElementById("loginForm")?.addEventListener("submit", function(e){
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  document.getElementById("loginMessage").textContent = `Bienvenue ${email}`;
});
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
const profiles = [
  { name: "Amina", bio: "Étudiante en droit", img: "" },
  { name: "David", bio: "Passionné de sport", img: "" },
];
const profilesList = document.getElementById("profilesList");
if(profilesList){
  profiles.forEach(p => {
    const card = document.createElement("div");
    card.className = "profile-card";
    card.innerHTML = `<h3>${p.name}</h3><p>${p.bio}</p><button class="like-btn">❤️ Aimer</button>`;
    profilesList.appendChild(card);
  });
}
function saveProfile(){
  const name = document.getElementById("userName").value;
  document.getElementById("saveMessage").textContent = `Profil de ${name} enregistré !`;
}
// Gérer l'inscription
document.getElementById("index")?.addEventListener("submit", function(e){
  e.preventDefault();
  const name = document.getElementById("name").value;
  document.getElementById("message").textContent = `Bienvenue ${name}, ton inscription est réussie !`;
  setTimeout(() => {
    window.location.href = "home.html";
  }, 1500); // Redirection après 1,5 seconde
  this.reset();
});

// Gérer la connexion
document.getElementById("login")?.addEventListener("submit", function(e){
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  document.getElementById("loginMessage").textContent = `Bienvenue ${email}`;
  setTimeout(() => {
    window.location.href = "home.html";
  }, 1500);
});

// Activer/désactiver le mode sombre
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// Affichage des profils (page d'accueil)
const profiles = [
  { name: "Amina", bio: "Étudiante en droit", img: "" },
  { name: "David", bio: "Passionné de sport", img: "" }
];

const profilesList = document.getElementById("profilesList");
if(profilesList){
  profiles.forEach(p => {
    const card = document.createElement("div");
    card.className = "profile-card";
    card.innerHTML = `<h3>${p.name}</h3><p>${p.bio}</p><button class="like-btn">❤️ Aimer</button>`;
    profilesList.appendChild(card);
  });
}

// Enregistrer le profil
function saveProfile(){
  const name = document.getElementById("userName").value;
  document.getElementById("saveMessage").textContent = `Profil de ${name} enregistré !`;
}

