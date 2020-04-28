mainsite= '.wikipedia.org';
infotext = 1;

function removetext() {
	if (infotext==1) {
		document.getElementById("fsearch").search.value = "";
		document.getElementById("fsearch").search.style.color = "#000000";
		infotext = 0;
	}
}


function setlang( clicked)	{
	document.getElementById("fsearch").action = 'https://' +clicked.lang +mainsite +'/wiki/Special:Search';
	return true;
}


function golang(clicked)	{
	top.location.href = 'https://'+clicked.lang+mainsite;
	return false;
}

function goother(clicked) {
	top.location.href = clicked.href
	return false
}


function makefield( words) {
	document.write( '<input type="text" name="search" onfocus="removetext()"' +' value="' +words +'" size="26" maxlength="50" />');
}


function makebutton( language, color, tekst) {
	document.write('<input type="submit" name="go" onclick="setlang(this)" lang="' +language +'" class="' +color +' button" value="'+tekst +'" />');
}

function mb(l,c,w,tx,tx1) {
	with (document) {
		write('<div lang="'+l+'" class="'+c+'" onclick="golang(this)">')
		write('<h1 class="hello">'+w+'</h1>')
		write('<p class="intro"><a href="https://'+l+'.wikipedia.org" class="aux" onclick="return false">')
		write(tx+'</a></p>')
		write('<p><a class="main" href="https://'+l+'.wikipedia.org" onclick="return false">'+tx1+'</a></p></div>')
	}
}

function ol1(tx3,tx4) {
	document.write('<span class="otherstitle">'+tx3+' <a href="https://www.wikipedia.org" onclick="goother(this)">'+tx4+'</a></span>')
}
		
function ol2(l,tx2) {
	document.write('<span class="other"><a lang="'+l+'" href="https://'+l+'.wikipedia.org/" onclick="golang(this)">'+tx2+'</a></span> ')
}
		
