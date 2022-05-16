function vaiP1() { window.location.href = "pagina1.html"; }
function vaiP2() { window.location.href = "pagina2.html"; }
function vaiP3() {
  if( getUser() != "" ) window.location.href = "menu-principal.html";
  else alert("acesso proibido");
}
function vaiP4() {
  if( getUser() != "" ) window.location.href = "pagina4.html";
  else alert("acesso proibido");
}

function shUser() { // Exibe os valores de "username" e "expires" no cookie
  let c = "username: " + getUser() + " - expires: " + getExpires();
  //alert(c);
  window.location.href = "menu-principal.html"
}

function setUser() { // Cria o cookie com as chaves "username" e expires
  let userid = "username=" + document.getElementById( "user" ).value;

  let d = new Date();
  d.setTime( d.getTime() + 10*60*1000 ); // Este cookie expira em 10 minutos (10*60*1000 miliseg.)
  let expires = "expires="+ d.toUTCString();

  let c  = userid + ";" + expires + ";path=/";
  document.cookie = c;
  document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  alert("cookie enviado: " + c);
}

function getUser() { // Procura o valor da chave "username" no cookie
  let decodedCookie = decodeURIComponent(document.cookie); // Limpa caracteres especiais no cookie
  let ca = decodedCookie.split( ';' ); // Quebra o cookie numa lista de strings nos ";"
  for( let i = 0; i < ca.length; i++ )
    if( ca[i].indexOf( "username=" ) == 0 ) // Se tem a chave "username="
	  return ca[i].substring( "username=".length, ca[i].length ); // retorna seu valor

  return ""; // Não tem "username=" no cookie
}

function getExpires() { // Procura o valor da chave "expires" no cookie
  let decodedCookie = decodeURIComponent(document.cookie); // Limpa caracteres especiais no cookie
  let ca = decodedCookie.split( ';' ); // Quebra o cookie numa lista de strings nos ";"
  for( let i = 0; i < ca.length; i++ )
    if( ca[i].indexOf( "expires=" ) == 0 ) // Se tem a chave "expires="
	  return ca[i].substring( "expires=".length, ca[i].length ); // retorna seu valor

  return ""; // Não tem "expires=" no cookie
}

function Logout() {
  var date = new Date;
  date = date.getDate();
  let c = "expires="+ d.toUTCString() + "username='';";
  document.cookie = c;
  window.location.href = "/login.html"
}