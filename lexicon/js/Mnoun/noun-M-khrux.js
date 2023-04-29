/*
Like κῆρυξ (κήρυκος)

κῆρυ ξ		κήρυ κες
κήρυ κος	κηρύ κων
κήρυ κι	κήρυ ξι
κήρυ κα 	κήρυ κας

			<script>
			var text1='nomSing'
			var text2='genSing'
			var text3='genPlur'
			</script><script src='js/Mnoun/noun-M-khrux.js'></script>
 */
		document.write("<table class='chart'>");
			document.write("<tr><td colspan='3' class='cen'>Masculine Noun</td></tr>");
			document.write("<tr><th class='chart'>&nbsp;</th><th class='chart'>Singular</th><th class='chart'>Plural</th></tr>");
			document.write("<tr><td class='green'>NOM</td><td class='chart'>"+text1+"ξ</td><td class='chart'>"+text2+"κες</td></tr>");
			document.write("<tr><td class='green'>GEN</td><td class='chart'>"+text2+"κος</td><td class='chart'>"+text3+"κων</td></tr>");
			document.write("<tr><td class='green'>DAT</td><td class='chart'>"+text2+"κι</td><td class='chart'>"+text2+"ξι(ν)</td></tr>");
			document.write("<tr><td class='green'>ACC</td><td class='chart'>"+text2+"κα</td><td class='chart'>"+text2+"κας</td></tr>");
			document.write("<tr><td class='green'>VOC</td><td class='chart'>"+text1+"ξ</td><td class='chart'>"+text2+"κες</td></tr>");
		document.write("</table>");
		document.write("<div class='clear'></div>");
