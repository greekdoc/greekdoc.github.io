//Comparative iwn
/* 
			<script>
			var text1="GR1"
			var text2 ="GR2"
			</script><script src='js/comp-iwn.js'></script>
 */

var text1;
var text2;

		document.write("<table class='chart'>");
			document.write("<tr><td colspan='4' class='redcen'>Comparative</td></tr>");
			document.write("<tr><td colspan='4' class='cen'>Singular</td></tr>");
			document.write("<tr><th class='chart'>&nbsp;</th><th class='chart'>Masculine</th><th class='chart'>Feminine</th><th class='chart'>Neuter</th></tr>");
			document.write("<tr><td class='green'>NOM</td><td class='chart'>"+text2+"ων</td><td class='chart'>"+text2+"ων</td><td class='chart'>"+text1+"ον</td></tr>");
			document.write("<tr><td class='green'>GEN</td><td class='chart' colspan='3'>"+text2+"ονος</td></tr>");
			document.write("<tr><td class='green'>DAT</td><td class='chart' colspan='3'>"+text2+"ονι</td></tr>");
			document.write("<tr><td class='green'>ACC</td><td class='chart'>"+text2+"ονα<br />"+text2+"ω</td><td class='chart'>"+text2+"ονα<br />"+text2+"ω</td><td class='chart'>"+text1+"ον</td></tr>");
			document.write("<tr><td colspan='4' class='cen'>Plural</td></tr>");
			document.write("<tr><th class='chart'>&nbsp;</th><th class='chart'>Masculine</th><th class='chart'>Feminine</th><th class='chart'>Neuter</th></tr>");

			document.write("<tr><td class='green'>NOM</td><td class='chart'>"+text2+"ονες</td><td class='chart'>"+text2+"ονες</td><td class='chart'>"+text2+"ονα<br />"+text2+"ω</td></tr>");
			document.write("<tr><td class='green'>GEN</td><td class='chart' colspan='3'>"+text2+"όνων</td></tr>");
			document.write("<tr><td class='green'>DAT</td><td class='chart' colspan='3'>"+text2+"οσι(ν)</td></tr>");
			document.write("<tr><td class='green'>ACC</td><td class='chart'>"+text2+"ονας<br />"+text2+"ους</td><td class='chart'>"+text2+"ονας<br />"+text2+"ους</td><td class='chart'>"+text2+"ονα<br />"+text2+"ω</td></tr>");
		document.write("</table>");
		document.write("<div class='clear'></div>");
