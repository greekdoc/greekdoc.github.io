// paypal donation
document.write("<div id='paypal'>");
	document.write("<form action=\"https://www.paypal.com/cgi-bin/webscr\" method=\"post\">");
	document.write("<input type=\"hidden\" name=\"cmd\" value=\"_s-xclick\">");
	document.write("<input type=\"hidden\" name=\"hosted_button_id\" value=\"7NPT5MDV53MGY\">");
	document.write("<input type=\"image\" src=\"https://www.paypal.com/en_US/i/btn/btn_donateCC_LG.gif\" border=\"0\" name=\"submit\" alt=\"PayPal - The safer, easier way to pay online!\">");
	document.write("<img alt=\" \" border=\"0\" src=\"https://www.paypal.com/en_US/i/scr/pixel.gif\" width=\"1\" height=\"1\">");
	document.write("</form>");
document.write("</div>");
