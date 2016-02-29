// JavaScript Document
var myRequest = null;

	function CreateXmlHttpReq(handler) {
    	var xmlhttp = null;
   		try {
    		xmlhttp = new XMLHttpRequest();
  		} catch(e) {
    	try {
        	xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    	} catch(e) {
        	xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    	}
  		}
  	xmlhttp.onreadystatechange = handler;
  	return xmlhttp;
	}
	function myHandler() {
    if (myRequest.readyState == 4 && myRequest.status == 200) {
		
		}
	}

/* Pagina Step1 e Step2 */
function step12() {
	document.getElementById( 'cb1' ).onclick = function() { 
  		value_ck = document.forms.modulo.cb1.value;
  		myRequest = CreateXmlHttpReq(myHandler);
  		myRequest.open("GET", "lib_php/ajax/set_session_var.php?var=" + value_ck);
  		myRequest.send(null);
	}
	document.getElementById( 'cb2' ).onclick = function() { 
 		value_ck = document.forms.modulo.cb2.value;
  		myRequest = CreateXmlHttpReq(myHandler);
  		myRequest.open("GET", "lib_php/ajax/set_session_var.php?var=" + value_ck);
  		myRequest.send(null);
	}
	document.getElementById( 'cb3' ).onclick = function() { 
  		value_ck = document.forms.modulo.cb3.value;
  		myRequest = CreateXmlHttpReq(myHandler);
  		myRequest.open("GET", "lib_php/ajax/set_session_var.php?var=" + value_ck);
  		myRequest.send(null);
	}
	document.getElementById( 'cb4' ).onclick = function() { 
  		value_ck = document.forms.modulo.cb4.value;
  		myRequest = CreateXmlHttpReq(myHandler);
  		myRequest.open("GET", "lib_php/ajax/set_session_var.php?var=" + value_ck);
  		myRequest.send(null);
	}
	document.getElementById( 'cb5' ).onclick = function() { 
  		value_ck = document.forms.modulo.cb5.value;
  		myRequest = CreateXmlHttpReq(myHandler);
  		myRequest.open("GET", "lib_php/ajax/set_session_var.php?var=" + value_ck);
  		myRequest.send(null);
	}
	document.getElementById( 'cb6' ).onclick = function() { 
  		value_ck = document.forms.modulo.cb6.value;
  		myRequest = CreateXmlHttpReq(myHandler);
  		myRequest.open("GET", "lib_php/ajax/set_session_var.php?var=" + value_ck);
  		myRequest.send(null);
	}
	document.getElementById( 'cb7' ).onclick = function() { 
  		value_ck = document.forms.modulo.cb7.value;
  		myRequest = CreateXmlHttpReq(myHandler);
  		myRequest.open("GET", "lib_php/ajax/set_session_var.php?var=" + value_ck);
  		myRequest.send(null);
	}
}
/* Pagina Step3 */
function step3() {
	document.getElementById( 'optionsRadios1' ).onclick = function() { 
  		value_ck = document.forms.modulo.optionsRadios1.value;
  		myRequest = CreateXmlHttpReq(myHandler);
  		myRequest.open("GET", "lib_php/ajax/set_session_var.php?var=" + value_ck);
  		myRequest.send(null);
	}
	document.getElementById( 'optionsRadios2' ).onclick = function() { 
  		value_ck = document.forms.modulo.optionsRadios2.value;
  		myRequest = CreateXmlHttpReq(myHandler);
  		myRequest.open("GET", "lib_php/ajax/set_session_var.php?var=" + value_ck);
  		myRequest.send(null);
	}
	document.getElementById( 'optionsRadios3' ).onclick = function() { 
  		value_ck = document.forms.modulo.optionsRadios3.value;
  		myRequest = CreateXmlHttpReq(myHandler);
  		myRequest.open("GET", "lib_php/ajax/set_session_var.php?var=" + value_ck);
  		myRequest.send(null);
	}
	document.getElementById( 'optionsRadios4' ).onclick = function() { 
  		value_ck = document.forms.modulo.optionsRadios4.value;
  		myRequest = CreateXmlHttpReq(myHandler);
  		myRequest.open("GET", "lib_php/ajax/set_session_var.php?var=" + value_ck);
  		myRequest.send(null);
	}
}

/* Pagina Step4 */
function step4() {
	document.getElementById( 'cb1' ).onclick = function() { 
  		value_ck = document.forms.modulo.cb1.value;
  		myRequest = CreateXmlHttpReq(myHandler);
  		myRequest.open("GET", "lib_php/ajax/set_session_var.php?var=" + value_ck);
  		myRequest.send(null);
	}
	document.getElementById( 'cb2' ).onclick = function() { 
 		value_ck = document.forms.modulo.cb2.value;
  		myRequest = CreateXmlHttpReq(myHandler);
  		myRequest.open("GET", "lib_php/ajax/set_session_var.php?var=" + value_ck);
  		myRequest.send(null);
	}
	document.getElementById( 'cb3' ).onclick = function() { 
  		value_ck = document.forms.modulo.cb3.value;
  		myRequest = CreateXmlHttpReq(myHandler);
  		myRequest.open("GET", "lib_php/ajax/set_session_var.php?var=" + value_ck);
  		myRequest.send(null);
	}
	document.getElementById( 'cb4' ).onclick = function() { 
  		value_ck = document.forms.modulo.cb4.value;
  		myRequest = CreateXmlHttpReq(myHandler);
  		myRequest.open("GET", "lib_php/ajax/set_session_var.php?var=" + value_ck);
  		myRequest.send(null);
	}
}

/*Header link*/
function header(prefix) {
	/*FREE THEMES*/	
	document.getElementById( 'header1' ).onclick = function() { 
  		load_saved_search('free',prefix);
	}
	/*NEW THEMES*/	
	document.getElementById( 'header2' ).onclick = function() { 
  		load_saved_search('free',prefix);
	}
	/*POPULAR THEMES*/	
	document.getElementById( 'header3' ).onclick = function() { 
  		load_saved_search('mostLiked',prefix);
	}
	
}
/* Pagina Search */
function searchindex() {	
	/*Wordpress*/
	document.getElementById( 'cb1' ).onclick = function() { 
		/*Riporto le utenze a pagina 1 */
		document.modulo.pag.value = 1;
  		aggiorna_content();
	}
	/*Joomla*/
	document.getElementById( 'cb2' ).onclick = function() { 
		/*Riporto le utenze a pagina 1 */
		document.modulo.pag.value = 1;
  		aggiorna_content();
	}
	/*Drupal*/
	document.getElementById( 'cb3' ).onclick = function() {
		/*Riporto le utenze a pagina 1 */
		document.modulo.pag.value = 1; 
  		aggiorna_content();
	}
	/*Magento*/
	document.getElementById( 'cb4' ).onclick = function() {
		/*Riporto le utenze a pagina 1 */
		document.modulo.pag.value = 1; 
  		aggiorna_content();
	}
	/*Tumblr*/
	document.getElementById( 'cb5' ).onclick = function() { 
		/*Riporto le utenze a pagina 1 */
		document.modulo.pag.value = 1;
  		aggiorna_content();
	}
	/*CustomCms*/
	document.getElementById( 'cb6' ).onclick = function() {
		/*Riporto le utenze a pagina 1 */
		document.modulo.pag.value = 1;
  		aggiorna_content();
	}
	/*Other*/
	document.getElementById( 'cb7' ).onclick = function() {
		/*Riporto le utenze a pagina 1 */
		document.modulo.pag.value = 1;
  		aggiorna_content();
	}
	
	/*Blog*/
	document.getElementById( 'cb8' ).onclick = function() { 
		/*Riporto le utenze a pagina 1 */
		document.modulo.pag.value = 1;
  		aggiorna_content();
	}
	/*News*/
	document.getElementById( 'cb9' ).onclick = function() { 
		/*Riporto le utenze a pagina 1 */
		document.modulo.pag.value = 1;
  		aggiorna_content();
	}
	/*Portafolio*/
	document.getElementById( 'cb10' ).onclick = function() {
		/*Riporto le utenze a pagina 1 */
		document.modulo.pag.value = 1; 
  		aggiorna_content();
	}
	/*Photograpy*/
	document.getElementById( 'cb11' ).onclick = function() { 
		/*Riporto le utenze a pagina 1 */
		document.modulo.pag.value = 1;
  		aggiorna_content();
	}
	/*Ecommerce*/
	document.getElementById( 'cb12' ).onclick = function() {
		/*Riporto le utenze a pagina 1 */
		document.modulo.pag.value = 1; 
  		aggiorna_content();
	}
	/*Community*/
	document.getElementById( 'cb13' ).onclick = function() {
		/*Riporto le utenze a pagina 1 */
		document.modulo.pag.value = 1; 
  		aggiorna_content();
	}
	/*Forum*/
	document.getElementById( 'cb14' ).onclick = function() { 
		/*Riporto le utenze a pagina 1 */
		document.modulo.pag.value = 1;
  		aggiorna_content();
	}
	
	/*Responsive*/
	document.getElementById( 'cb15' ).onclick = function() {
		/*Riporto le utenze a pagina 1 */
		document.modulo.pag.value = 1; 
  		aggiorna_content();
	}
	/*Retina-ready*/
	document.getElementById( 'cb16' ).onclick = function() {
		/*Riporto le utenze a pagina 1 */
		document.modulo.pag.value = 1; 
  		aggiorna_content();
	}
	/*One-page scrolling*/
	document.getElementById( 'cb17' ).onclick = function() {
		/*Riporto le utenze a pagina 1 */
		document.modulo.pag.value = 1; 
  		aggiorna_content();
	}
	
	/*ShortCodes*/
	document.getElementById( 'cb19' ).onclick = function() {
		/*Riporto le utenze a pagina 1 */
		document.modulo.pag.value = 1; 
  		aggiorna_content();
	}
	/*Ads-ready*/
	document.getElementById( 'cb20' ).onclick = function() {
		/*Riporto le utenze a pagina 1 */
		document.modulo.pag.value = 1; 
  		aggiorna_content();
	}
	/*CrossBrowse*/
	document.getElementById( 'cb21' ).onclick = function() {
		/*Riporto le utenze a pagina 1 */
		document.modulo.pag.value = 1; 
  		aggiorna_content();
	}
	
	/*BrandNewThemes*/
	document.getElementById( 'cb22' ).onclick = function() {
		/*Riporto le utenze a pagina 1 */
		document.modulo.pag.value = 1; 
  		aggiorna_content();
	}
	/*DesignProjectFiles*/
	document.getElementById( 'cb23' ).onclick = function() {
		/*Riporto le utenze a pagina 1 */
		document.modulo.pag.value = 1; 
  		aggiorna_content();
	}
	/*CrossBrowse*/
	document.getElementById( 'cb24' ).onclick = function() {
		/*Riporto le utenze a pagina 1 */
		document.modulo.pag.value = 1; 
  		aggiorna_content();
	}
	/*CrossBrowse*/
	document.getElementById( 'cb25' ).onclick = function() {
		/*Riporto le utenze a pagina 1 */
		document.modulo.pag.value = 1; 
  		aggiorna_content();
	}
	/*Tasto Reset*/
	document.getElementById( 'reset' ).onclick = function() {
		/*Riporto le utenze a pagina 1 */
		document.modulo.pag.value = 1; 
  		deseleziona_all_checkbox();
	}
	/*Tasto Sort Date*/
	document.getElementById( 'but_date' ).onclick = function() {
		aggiorna_content('date');
	}
	/*Tasto Sort Popularity*/
	document.getElementById( 'but_popularity' ).onclick = function() {
		aggiorna_content('popularity');
	}
	/*Tasto Sort Price*/
	document.getElementById( 'but_price' ).onclick = function() {
		aggiorna_content('price');
	}
	/*Tasto Sort Sort*/
	document.getElementById( 'icon_sortBy' ).onclick = function() {
		aggiorna_content('sort');
	}	

}

/* Pagina SignUp */
function signup() {	
	
	function myHandler() {
    if (myRequest.readyState == 4 && myRequest.status == 200) {
		risposta = myRequest.responseText;
		var ris = risposta.split('-');
		var id_obj =  "err-" + ris[1];
		my_element = document.getElementById(id_obj);
		
		if (ris[0] == "err") { 
			my_element.setAttribute("class","help-block alert-red");
			if (ris[1] == "username") { 
				my_element.innerHTML = "Someone already has that username. Try another?";
			} else if (ris[1] == "email") { 
				my_element.innerHTML = "Email has already been taken";
			}
		}
	
    }
	}
	
	document.getElementById( 'name' ).onchange = function() { 
		var name = document.modulo.name.value;
	    var name_length = document.modulo.name.value.length;
		
		if ((name == "") || (name == "undefined")) {
			var el = document.getElementById("err-name");
			el.innerHTML = "You can't leave this empty";
			el.setAttribute("class","help-block alert-red");
		}
		else if (name_length < 2)  {			
			var el = document.getElementById("err-name");
		   	el.innerHTML = "Your Author Name must be at least 2 charachters long";
		   	el.setAttribute("class","help-block alert-red");
	 	}
		else {
			document.getElementById("err-name").setAttribute("class","help-block alert-red hidden");
			}

	}
	document.getElementById( 'username' ).onchange = function() { 
  		var username = document.forms.modulo.username.value;
		var username_length = document.modulo.username.value.length;
		var myRegex1 = /\W/i;
		
		if ((username == "") || (username == "undefined"))  {
			var el = document.getElementById("err-username");
		   	el.innerHTML = "You can't leave this empty";
		   	el.setAttribute("class","help-block alert-red");
		}
		else if (myRegex1.test(username)) { 
			var el = document.getElementById("err-username");
		   	el.innerHTML = "Please use only letters (a-z), numbers, and periods";
		   	el.setAttribute("class","help-block alert-red");
		}
		else if (username_length < 2)  {
			var el = document.getElementById("err-username");
		   	el.innerHTML = "Username must be at least 2 charachters long";
		   	el.setAttribute("class","help-block alert-red");
		}
		else {
			document.getElementById("err-username").setAttribute("class","help-block alert-red hidden");	
		}
		
  		myRequest = CreateXmlHttpReq(myHandler);
  		myRequest.open("GET", "lib_php/ajax/ctrl_form_signup.php?user=" + username);
  		myRequest.send(null);
	}
	/*Se modificano il campo e-mail */
	document.getElementById( 'email_signup' ).onchange = function() { 
		var email = document.modulo.email_signup.value;
		var espressione = new RegExp("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+[\.]([a-z0-9-]+)*([a-z]{2,3})$");
		
	 	if ((email == "") || (email == "undefined"))  {
            var el = document.getElementById("err-email");
		   	el.innerHTML = "You can't leave this empty";
		   	el.setAttribute("class","help-block alert-red");
        }
		else if ( !espressione.test(email) ){
            var el = document.getElementById("err-email");
		   	el.innerHTML = "This is not a valid email. Try another?";
		   	el.setAttribute("class","help-block alert-red");
        }
		else {
			document.getElementById("err-email").setAttribute("class","help-block alert-red hidden");	
		}
	
  		myRequest = CreateXmlHttpReq(myHandler);
  		myRequest.open("GET", "lib_php/ajax/ctrl_form_signup.php?email=" + email);
  		myRequest.send(null);
	}
	
	document.getElementById( 'password_signup' ).onchange = function() { 
		var password = document.modulo.password_signup.value;
	 	var password_length = document.modulo.password_signup.value.length;
		
		if ((password == "") || (password == "undefined"))  {
		    var el = document.getElementById("err-pass");
			el.innerHTML = "You can't leave this empty";
		   	el.setAttribute("class","help-block alert-red");
        }
	   else if (password_length < 6)  {
		    var el = document.getElementById("err-pass");
			el.innerHTML = "Password must be at least 6 charachters long";
		   	el.setAttribute("class","help-block alert-red");
        }
		else {
			document.getElementById("err-pass").setAttribute("class","help-block alert-red hidden");	
		}
	}
	
}

/* Pagina Edit-Profile per il tasto delete account */
function editprofile() {
	document.getElementById( 'delete_account' ).onclick = function() { 
		var check = document.modulo3.deletecheck.checked;
		if (!check) {
        	document.modulo3.deletecheck.focus();
           	return false;
        }

    	document.modulo3.action = "lib_php/del_account.php";
    	document.modulo3.submit();
	}
	
	function myHandler1() {
    	if (myRequest.readyState == 4 && myRequest.status == 200) {
			window.location.href="edit-profile";

		}
	}
	
	document.getElementById('delete_avatar').onclick = function() {
		var id_ute = document.modulo.id.value;
		myRequest = CreateXmlHttpReq(myHandler1);
  		myRequest.open("GET", "lib_php/ajax/del_imgprofile.php?idu=" + id_ute);
  		myRequest.send(null);
	}

}

/* Per chiudere la Notification Bar se presente */
if (document.getElementById("close-notification-bar")) {
	
	document.getElementById( 'close-notification-bar' ).onclick = function() {
		myRequest = CreateXmlHttpReq(myHandler);
  		myRequest.open("GET", "lib_php/ajax/set_session_notificationbar.php");
  		myRequest.send(null);
	}
}
