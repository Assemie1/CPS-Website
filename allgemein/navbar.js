var zu = true;
i = 2

// Funktion zum Laden der Navbar in das DOM
function loadNavbar() {
  // Erstelle ein neues XMLHttpRequest-Objekt
  var xhr = new XMLHttpRequest();
  
  // Definiere die Callback-Funktion für den Ladevorgang
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // Wenn die Navbar erfolgreich geladen wurde, füge sie in das DOM ein
        var navbarContainer = document.getElementById('navbarContainer');
        navbarContainer.innerHTML = xhr.responseText;
      } else {
        console.error('Fehler beim Laden der Navbar: ' + xhr.status);
      }
    }
  };
  
  // Lade die Navbar-Datei
  xhr.open('GET', 'allgemein/navbar.html', true);
  xhr.send();
}

// Rufe die Funktion zum Laden der Navbar auf, sobald das DOM vollständig geladen ist
document.addEventListener('DOMContentLoaded', loadNavbar);


setTimeout(function(){
  //do what you need here

  // Hole den aktuellen Dateinamen der Seite
  var currentPage = window.location.pathname.split("/").pop();

  var links = ["index.html", "message.html", "frankfurt.html", "newyork.html", "koeln.html", "evolution.html"]

  for (var i = 0; i < links.length; i++) {
    var link = links[i];

    if (link === currentPage) {
      document.getElementById(link).style.backgroundColor = "rgb(255, 65, 55)";
      document.getElementById(link).style.color = "rgb(34, 31, 31)";
      console.log("HALLO")
      if (link === "frankfurt.html" || link === "newyork.html" || link === "koeln.html"){
        document.getElementById("subNavBarBtn").style.backgroundColor = "rgb(255, 65, 55)";
        document.getElementById("subNavBarBtn").style.color = "rgb(34, 31, 31)";
      }

    }else if(currentPage === ""){
      document.getElementById("index.html").style.backgroundColor = "rgb(255, 65, 55)";
      document.getElementById("index.html").style.color = "rgb(34, 31, 31)";

    }


  }
}, 600);



function openNav() {
    document.getElementById("topnav").style.width = "160px";
    document.getElementById("topnavM").style.visibility = "hidden";

  }openSubNavBar()
  
  function closeNav() {
    document.getElementById("topnav").style.width = "0%";
    document.getElementById("topnavM").style.visibility = "visible";
    document.getElementById("myPopup").style.visibility = "hidden"


  }


  function openSubNavBar() {
    var currentPage = window.location.pathname.split("/").pop();

    if (zu){
      document.getElementById("subNavBarContent").style.display = "block";
      document.getElementById("subNavBarBtn").style.backgroundColor= "var(--bkg-color)"
      document.getElementById("subNavBarBtn").style.color= "var(--text-color)"
      console.log("GEH AUF")
      zu = false
      if (window.innerWidth <= 700){
        document.getElementById("topnav").style.height="200px";
      }
    } else {
      if (window.innerWidth <= 700){
        document.getElementById("topnav").style.height="180px";
      }
      document.getElementById("subNavBarContent").style.display = "none";
      if (currentPage === "frankfurt.html" || currentPage === "newyork.html" || currentPage === "koeln.html"){
        document.getElementById("subNavBarBtn").style.backgroundColor = "rgb(255, 65, 55)";
        document.getElementById("subNavBarBtn").style.color = "rgb(34, 31, 31)";
      }else{
        document.getElementById("subNavBarBtn").style.backgroundColor= "var(--nav-color)"
        document.getElementById("subNavBarBtn").style.color= "var(--text-color)"
    }
      console.log("GEH ZU")
      zu = true
    }
   
  }


function resnav(){
  if (window.innerWidth > 700){
    document.getElementById("topnavM").style.visibility = "hidden";
    document.getElementById("topnav").style.width = "100%";
    document.getElementById("topnav").style.height = "auto";
  }else{
    document.getElementById("topnavM").style.visibility = "visible";
    document.getElementById("topnav").style.width = "0";
    document.getElementById("topnav").style.height="180px";
  }
}

