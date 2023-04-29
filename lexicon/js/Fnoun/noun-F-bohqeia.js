/*
-α, -ας like βοήθεια, ἀλήθεια

βοήθεια		βοήθειαι
βοηθείας		βοηθειῶν
βοηθείᾳ		βοηθείαις
βοήθειαν		βοηθείας
βοήθεια		βοήθειαι

"+text1+"=acute on antepenult
"+text2+"=acute on penult
"+text3+"=circum on GenPlur

			<script>
				var text1='antipenult'
				var text2='penult'
				var text3='ultima'
			</script><script src='js/Fnoun/noun-F-bohqeia.js'></script>

*/
		document.write("<table class='chart'>");
			document.write("<tr><td colspan='3' class='cen'>Feminine Noun</td></tr>");
			document.write("<tr><th class='chart'>&nbsp;</th><th class='chart'>Singular</th><th class='chart'>Plural</th></tr>");
			document.write("<tr><td class='green'>NOM</td><td class='chart'>"+text1+"α</td><td class='chart'>"+text1+"αι</td></tr>");
			document.write("<tr><td class='green'>GEN</td><td class='chart'>"+text2+"ας</td><td class='chart'>"+text3+"ῶν</td></tr>");
			document.write("<tr><td class='green'>DAT</td><td class='chart'>"+text2+"ᾳ</td><td class='chart'>"+text2+"αις</td></tr>");
			document.write("<tr><td class='green'>ACC</td><td class='chart'>"+text1+"αν</td><td class='chart'>"+text2+"ας</td></tr>");
			document.write("<tr><td class='green'>VOC</td><td class='chart'>"+text1+"α</td><td class='chart'>"+text1+"αι</td></tr>");
		document.write("</table>");
		document.write("<div class='clear'></div>");
