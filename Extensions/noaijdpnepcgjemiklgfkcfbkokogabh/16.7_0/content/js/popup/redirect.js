	var BACK_VIEW=FExtension.store.get("SL_BACK_VIEW");
	var STR = "";
	var STR1 = String(document.location);
	if(STR1.indexOf("?text=")!=-1){
		var STR2 = STR1.split("?text=");
		STR = "?text="+STR2[1];
	}
	if(BACK_VIEW==2 && window.location.pathname.indexOf("translator.html")!=-1) document.location="translation-back.html" + STR; 
	if(BACK_VIEW==1 && window.location.pathname.indexOf("translation-back.html")!=-1) document.location="translator.html";
