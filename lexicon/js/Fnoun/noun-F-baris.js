/* 
noun-F-baris.js
βάρ-ις		βάρ-εις
βάρ-εως	βάρ-εων
βάρ-ει		βάρ-εσι(ν)
βάρ-ι(ν)	βάρ-εις

δάμαλις

		<script>
			var text1='antipenult'
			var text2='penult'
		</script><script src='js/Fnoun/noun-F-baris.js'></script>

 */
		document.write("<table class='chart'>");
			document.write("<tr><td colspan='3' class='cen'>Feminine Noun</td></tr>");
			document.write("<tr><th class='chart'>&nbsp;</th><th class='chart'>Singular</th><th class='chart'>Plural</th></tr>");
			document.write("<tr><td class='green'>NOM</td><td class='chart'>"+text1+"ις</td><td class='chart'>"+text2+"εις</td></tr>");
			document.write("<tr><td class='green'>GEN</td><td class='chart'>"+text2+"εως</td><td class='chart'>"+text2+"εων</td></tr>");
			document.write("<tr><td class='green'>DAT</td><td class='chart'>"+text2+"ει</td><td class='chart'>"+text2+"εσι(ν)</td></tr>");
			document.write("<tr><td class='green'>ACC</td><td class='chart'>"+text1+"ι(ν)</td><td class='chart'>"+text2+"εις</td></tr>");
			document.write("<tr><td class='green'>VOC</td><td class='chart'>"+text1+"ις</td><td class='chart'>"+text2+"εις</td></tr>"); 
		document.write("</table>");
		document.write("<div class='clear'></div>");
