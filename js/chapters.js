var max;
var book;
var chap;
 document.write("<div class='halfmoon'>");
	document.write("<ul>");
		document.write(" <li><span class='w b'>Chapter: </span></li>");
			for (i = 0; i < max; i++) { ch=i+1 ;	
				if (ch<10) 
					{chap="0"+ch}
				else {chap=ch}
				document.write("<li><a href='"+book+chap+".html'>"+ch+"</a></li>"); 
				if (ch % 10==0)
					{document.write("</br>");}
				}
	 document.write("</ul>");
 document.write("</div>");

// where max = number of chapters and book = abbreviation of the book
// <script>max=28; book="mt";</script>
// <script src="../js/chapters.js"></script>
