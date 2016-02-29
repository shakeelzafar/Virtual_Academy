/* Per modulo di ricerca laterale */
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

function myHandler2() {
    if (myRequest.readyState == 4 && myRequest.status == 200) {
        e = document.getElementById("results-group");
        e.innerHTML = myRequest.responseText;
		document.getElementById("results-group").removeAttribute('class');
		$("[data-toggle=tooltip]").tooltip();
    }
}

function myHandler3() {
    if (myRequest3.readyState == 4 && myRequest3.status == 200) {
		var valori = myRequest3.responseText;
		var count = valori.split('-');
		/* CMS */
		objN0 = document.getElementById("objN0").innerHTML = count[0] + " <span class=\"clues-t\">CLUES</span>";
		objN1 = document.getElementById("objN1").innerHTML = "(" + count[1] + ")";
		objN2 = document.getElementById("objN2").innerHTML = "(" + count[2] + ")";
		objN3 = document.getElementById("objN3").innerHTML = "(" + count[3] + ")";
		objN4 = document.getElementById("objN4").innerHTML = "(" + count[4] + ")";
		objN5 = document.getElementById("objN5").innerHTML = "(" + count[5] + ")";
		objN6 = document.getElementById("objN6").innerHTML = "(" + count[6] + ")";
		objN7 = document.getElementById("objN7").innerHTML = "(" + count[7] + ")";
		/* KIND */
		objN8 = document.getElementById("objN8").innerHTML = "(" + count[8] + ")";
		objN9 = document.getElementById("objN9").innerHTML = "(" + count[9] + ")";
		objN10 = document.getElementById("objN10").innerHTML = "(" + count[10] + ")";
		objN11 = document.getElementById("objN11").innerHTML = "(" + count[11] + ")";
		objN12 = document.getElementById("objN12").innerHTML = "(" + count[12] + ")";
		objN13 = document.getElementById("objN13").innerHTML = "(" + count[13] + ")";
		objN14 = document.getElementById("objN14").innerHTML = "(" + count[14] + ")";
		/* LAY-OUT */
		objN15 = document.getElementById("objN15").innerHTML = "(" + count[15] + ")";
		objN16 = document.getElementById("objN16").innerHTML = "(" + count[16] + ")";
		objN17 = document.getElementById("objN17").innerHTML = "(" + count[17] + ")";
		/* FEATURES */
		objN18 = document.getElementById("objN18").innerHTML = "(" + count[18] + ")";
		objN19 = document.getElementById("objN19").innerHTML = "(" + count[19] + ")";
		objN20 = document.getElementById("objN20").innerHTML = "(" + count[20] + ")";
		/* EXTRA */
		objN21 = document.getElementById("objN21").innerHTML = "(" + count[21] + ")";
		objN22 = document.getElementById("objN22").innerHTML = "(" + count[22] + ")";
		objN23 = document.getElementById("objN23").innerHTML = "(" + count[23] + ")";
		objN24 = document.getElementById("objN24").innerHTML = "(" + count[24] + ")";
    }
}




function aggiorna_content(order) {	
	/* Controllo se non è visualizzato il div per salvare la ricerca */
	class_name = document.getElementById("saved").className;
	if (class_name == "save-box") {
		document.getElementById("saved").className = 'save-box hidden';
		document.getElementById("saved-form").className = 'save-box';
	}
	/* Chiudo il box di SHARE SEARCH */
	document.getElementById("accordion-group-share").className = 'accordion-group';
	document.getElementById("href-share").className = '';
	document.getElementById("share").className = 'collapse';
	document.getElementById("share").style.height = '0px';
		
	/* Se cambio ordine porta a pagina 1*/
	if ((order == "sort") || (order == "date") || (order == "popularity") || (order == "price")) {
		 /*Riporto le utenze a pagina 1 */
		document.modulo.pag.value = 1; 
		}
	/* Se il valore di order è pieno */
	if ((order != "sort") && (order)) {
		document.modulo.sort_by.value = order;
		/* Se ordinano per prezzo fai partire dai meno costosi */
		if (order == "price") {
			type_order = "ASC";
			order_minuscolo = type_order.toLowerCase();
			document.modulo.sort_data.value = type_order;
			document.getElementById("icon_sortBy").className = "sort " + order_minuscolo;
			document.getElementById("icon_sortBy").setAttribute("data-original-title","Sort Ascending");
		} else {
			type_order = "DESC";
			order_minuscolo = type_order.toLowerCase();
			document.modulo.sort_data.value = type_order;
			document.getElementById("icon_sortBy").className = "sort " + order_minuscolo;
			document.getElementById("icon_sortBy").setAttribute("data-original-title","Sort Descending");
			}
		}
	else if ((order == "sort") && (!document.modulo.sort_data.value)) {
		type_order = "ASC";
		order_minuscolo = type_order.toLowerCase();
		document.modulo.sort_data.value = type_order;
		document.getElementById("icon_sortBy").className = "sort " + order_minuscolo;
		document.getElementById("icon_sortBy").setAttribute("data-original-title","Sort Ascending");
		}
	else if ((order == "sort") && (document.modulo.sort_data.value == "ASC")) {
		type_order = "DESC";
		order_minuscolo = type_order.toLowerCase();
		document.modulo.sort_data.value = type_order;
		document.getElementById("icon_sortBy").className = "sort " + order_minuscolo;
		document.getElementById("icon_sortBy").setAttribute("data-original-title","Sort Descending");
		}
	else if ((order == "sort") && (document.modulo.sort_data.value == "DESC")) {
		type_order = "ASC";
		order_minuscolo = type_order.toLowerCase();
		document.modulo.sort_data.value = type_order;
		document.getElementById("icon_sortBy").className = "sort " + order_minuscolo;
		document.getElementById("icon_sortBy").setAttribute("data-original-title","Sort Ascending");
		}
	/* Se il valore di order è pieno e diverso da sort */
	if ((order != "sort") && (order)) {
	order_maiuscolo = order.toUpperCase();
	document.getElementById("title_sortBy").innerHTML = "SORTED BY " + order_maiuscolo;
	}
		
		
	/*ORDER */
	var sort_by_one = document.modulo.sort_by.value;
	var sort_by_data = document.modulo.sort_data.value;
	
	
	/* CMS */
	var wordpress = document.modulo.wordpress.checked;
	if (wordpress) { wordpress=1;} else { wordpress=0;}
	
	var joomla = document.modulo.joomla.checked;
	if (joomla) { joomla=1;} else { joomla=0;}
	
	var drupal = document.modulo.drupal.checked;
	if (drupal) { drupal=1;} else { drupal=0;}
	
	var magento = document.modulo.magento.checked;
	if (magento) { magento=1;} else { magento=0;}
	
	var tumblr = document.modulo.tumblr.checked;
	if (tumblr) { tumblr=1;} else { tumblr=0;}
	
	var custom = document.modulo.custom.checked;
	if (custom) { custom=1;} else { custom=0;}
	
	var others = document.modulo.others.checked;
	if (others) { others=1;} else { others=0;}
	
	/* KIND */
	var blog = document.modulo.blog.checked;
	if (blog) { blog=1;} else { blog=0;}
	
	var news = document.modulo.news.checked;
	if (news) { news=1;} else { news=0;}
	
	var portfolio = document.modulo.portfolio.checked;
	if (portfolio) { portfolio=1;} else { portfolio=0;}
	
	var photo = document.modulo.photo.checked;
	if (photo) { photo=1;} else { photo=0;}
	
	var ecommerce = document.modulo.ecommerce.checked;
	if (ecommerce) { ecommerce=1;} else { ecommerce=0;}
	
	var community = document.modulo.community.checked;
	if (community) { community=1;} else { community=0;}
	
	var forum = document.modulo.forum.checked;
	if (forum) { forum=1;} else { forum=0;}
	
	/* LAY-OUT */
	var responsive = document.modulo.responsive.checked;
	if (responsive) { responsive=1;} else { responsive=0;}
	
	var retina = document.modulo.retina.checked;
	if (retina) { retina=1;} else { retina=0;}
	
	var scrolling = document.modulo.scrolling.checked;
	if (scrolling) { scrolling=1;} else { scrolling=0;}
	
	/* FEATURES */
	var shortcodes = document.modulo.shortcodes.checked;
	if (shortcodes) { shortcodes=1;} else { shortcodes=0;}
	
	var ads = document.modulo.ads.checked;
	if (ads) { ads=1;} else { ads=0;}
	
	var cross = document.modulo.cross.checked;
	if (cross) { cross=1;} else { cross=0;}
	
	
	/* EXTRA */
	var brand = document.modulo.brand.checked;
	if (brand) { brand=1;} else { brand=0;}
	
	var design = document.modulo.design.checked;
	if (design) { design=1;} else { design=0;}
	
	var doc = document.modulo.doc.checked;
	if (doc) { doc=1;} else { doc=0;}
	
	var support = document.modulo.support.checked;
	if (support) { support=1;} else { support=0;}	
	
	/*KEY SEARCH */
	var pag = document.modulo.pag.value;

	/* Retrieve values from slider */
	var price_read = $("#slider").val();
	var price_read = String(price_read);
	var price = price_read.split(',');
	
	/* Script per far sparire il Featured */
	/*if ((wordpress == 1) || (joomla == 1) || (drupal == 1) || (magento == 1) || (tumblr == 1) || (custom == 1) ||
	    (others == 1) || (blog == 1) || (news == 1) || (portfolio == 1) || (photo == 1) || (ecommerce == 1) ||
		(community == 1) || (forum == 1) || (price[0] != 0) || (price[1] != 61) || (responsive == 1) || (retina == 1) ||
		(scrolling == 1) || (shortcodes == 1) || (ads == 1) || (cross == 1) || (brand == 1) || (design == 1) ||
		(doc == 1) || (support == 1) || (document.getElementById("keywords"))) {
			my_element = document.getElementById("theme-showcase"); 
			if (my_element) {
				my_element.setAttribute("class","hidden");
			}
		} else {
			my_element = document.getElementById("theme-showcase"); 
			if (my_element) {
				my_element.removeAttribute("class");
			}
		}*/
	
	myRequest = CreateXmlHttpReq(myHandler2);
    myRequest.open("GET", "lib_php/ajax/search.php?c1=" + wordpress + "&c2=" + joomla + "&c3=" + drupal + "&c4=" + magento + "&c5=" + tumblr + "&c6=" + custom + "&c7=" + others + "&k1=" + blog + "&k2=" + news + "&k3=" + portfolio + "&k4=" + photo + "&k5=" + ecommerce + "&k6=" + community + "&k7=" + forum + "&p1=" + price[0] + "&p2=" + price[1] + "&L1=" + responsive + "&L2=" + retina + "&L3=" + scrolling + "&f1=" + shortcodes + "&f2=" + ads + "&f3=" + cross + "&e1=" + brand + "&e2=" + design + "&e3=" + doc + "&e4=" + support + "&ord=" + sort_by_one + "&sort=" + sort_by_data + "&pag=" + pag);
    myRequest.send(null);
	document.getElementById("results-group").className = 'loading';
	
	myRequest3 = CreateXmlHttpReq(myHandler3);
    myRequest3.open("GET", "lib_php/ajax/search_count.php?c1=" + wordpress + "&c2=" + joomla + "&c3=" + drupal + "&c4=" + magento + "&c5=" + tumblr + "&c6=" + custom + "&c7=" + others + "&k1=" + blog + "&k2=" + news + "&k3=" + portfolio + "&k4=" + photo + "&k5=" + ecommerce + "&k6=" + community + "&k7=" + forum + "&p1=" + price[0] + "&p2=" + price[1] + "&L1=" + responsive + "&L2=" + retina + "&L3=" + scrolling + "&f1=" + shortcodes + "&f2=" + ads + "&f3=" + cross + "&e1=" + brand + "&e2=" + design + "&e3=" + doc + "&e4=" + support + "&ord=" + sort_by_one + "&sort=" + sort_by_data);
    myRequest3.send(null);
	
}

/*Funzione per salvare la ricerca */
function search_save() {
	
	var title = document.modulo2.title.value;
	
	function myHandler4() {
    if (myRequest4.readyState == 4 && myRequest4.status == 200) {
        var risposta = myRequest4.responseText;
		if (risposta == "OK") {
			var msg_ok = "SEARCH SUCCESSFULLY SAVED!<p>Go to <strong>Your profile</strong> -> <strong><a href=\"http://themeclue.com/saved-searches\">Saved searches</a></strong> to view it</p>";
			document.getElementById("saved").className = 'save-box';
			document.getElementById("saved-form").className = 'save-box hidden';
			document.getElementById("saved-msg").innerHTML = msg_ok;
			}
		else if (risposta == "ERR") {
			var msg_ok = "YOU'VE ALREADY SAVED A SEARCH WITH THIS NAME PLEASE TRY WITH A NEW ONE.";
			document.getElementById("saved").className = 'save-box btm';
			document.getElementById("saved-msg").innerHTML = msg_ok;
			}	
    }
}
	myRequest4 = CreateXmlHttpReq(myHandler4);
    myRequest4.open("GET", "lib_php/ajax/search_saved.php?title=" + title);
    myRequest4.send(null);
	}