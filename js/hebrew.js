//In the <head> include the following line
// <script src="../js/hebrew.js"></script>
//In the body where you want the converted text:
//<script>document.write(hebrew("xah!ar`N"));</script>
//<script>document.write(hebrew("#x#a#h#!#a#r#`#N"));</script>
// Ctrl+Shift H
//end result will be Hebrew letters
//In the example above, the first character is x
// That means the resulting Hebrew word will begin with aleph
// on the right.




function hebrew(text)
{
var text;
var orgtext;
var locate;
var first;
var initial;
var atitle;
atitle="";

//remove leading space
if(text.substring(0,1)==" ")text=text.substring(1,text.length);

//remove trailing space

if(text.charAt(text.length-1)==" ") text=text.substring(0,text.length-1);

orgtext=text



//three hebrew letters
text=text.replace(/a!/g, "&#1458;"); //pathah  shewa
text=text.replace(/e!/g, "&#1457;"); //seghol shewa
text=text.replace(/i/g, "&#1460;"); //hireq shewa
text=text.replace(/o!/g, "&#1464;"); //qames  shewa


//two hebrew letters
text=text.replace(/U/g, "&#1457;"); //pathah
text=text.replace(/A/g, "&#1458;"); //pathah
text=text.replace(/O/g, "&#1459;"); //pathah



text=text.replace(/a/g, "&#1463;"); //pathah -
text=text.replace(/e/g, "&#1462;"); //seghol ... triangle
text=text.replace(/i/g, "&#1460;"); //hireq .
text=text.replace(/u/g, "&#1467;"); //qibbus ... slant
text=text.replace(/o/g, "&#1464;"); //qames T
text=text.replace(/E/g, "&#1461;"); //seghol ..

//text=text.replace(/=/g, "&#1486;"); //nun hafukha
text=text.replace(/x/g, "&#1488;"); //aleph
text=text.replace(/b/g, "&#1489;"); //beth
text=text.replace(/B/g, "&#1489;&#1468;"); //beth + Daghesh
text=text.replace(/g/g, "&#1490;"); //gimel
text=text.replace(/G/g, "&#1490;&#1468;"); //gimel + Daghesh
text=text.replace(/d/g, "&#1491;"); //daleth
text=text.replace(/D/g, "&#1491;&#1468;"); //daleth + Daghesh
text=text.replace(/h/g, "&#1492;"); //he
text=text.replace(/v/g, "&#1493;"); //waw
text=text.replace(/V/g, "&#1493;&#1468;"); //waw + Daghesh
text=text.replace(/z/g, "&#1494;"); //zayin
text=text.replace(/Z/g, "&#1494;&#1468;"); //zayin + Daghesh
text=text.replace(/H/g, "&#1495;"); //heth
text=text.replace(/t/g, "&#1496;"); //tet
text=text.replace(/y/g, "&#1497;"); //yod
text=text.replace(/k/g, "&#1499;"); //kap
text=text.replace(/c/g, "&#1499;"); //kap
text=text.replace(/C/g, "&#1499;&#1468;"); //kap + Daghesh
text=text.replace(/K/g, "&#1498;"); //kap final
text=text.replace(/l/g, "&#1500;"); //lamed
text=text.replace(/L/g, "&#1500;&#1468;"); //lamed + Daghesh
text=text.replace(/m/g, "&#1502;"); //mem
text=text.replace(/M/g, "&#1501;"); //mem final
text=text.replace(/n/g, "&#1504;"); //nun
text=text.replace(/N/g, "&#1503;"); //nun final
text=text.replace(/s/g, "&#1505;"); //samek
text=text.replace(/S/g, "&#1505;&#1468;"); //samek + Daghesh
text=text.replace(/Y/g, "&#1506;"); //ayin
text=text.replace(/p/g, "&#1508;"); //pe
text=text.replace(/P/g, "&#1507;"); //pe final
text=text.replace(/j/g, "&#1510;"); //sade
text=text.replace(/J/g, "&#1509;"); //sade final
text=text.replace(/q/g, "&#1511;"); //qoph
text=text.replace(/Q/g, "&#1511;&#1468;"); //qoph + Daghesh
text=text.replace(/r/g, "&#1512;"); //resh
text=text.replace(/w/g, "&#1513;"); //sin
text=text.replace(/W/g, "&#1513;&#1468;"); //sin + Daghesh
text=text.replace(/T/g, "&#1514;"); //taw
text=text.replace(/\*/g, "&#1468;"); //middle dot - daghesh
text=text.replace(/\(/g, "&#1474;"); //left dot
text=text.replace(/\)/g, "&#1473;"); //right dot
text=text.replace(/\!/g, "&#1456;"); //shewa :
text=text.replace(/\`/g, "&#1465;"); //dot up left
text=text.replace(/\^/g, "&#1465;"); //dot up left
text=text.replace(/\'/g, "&#1466;"); //dot up right
text=text.replace(/\+/g, "&#1476;"); //dot up middle

text=text.replace(/\|/g, "&#1469;"); //methegh
text=text.replace(/\:/g, "&#1475;"); // big : 
text=text.replace(/\-/g, "&#1470;"); // big -
text=text.replace(/\~/g, "&#1471;"); // Rafe - horizontal bar above a letter

// text="<pre>"+text+"</pre>"

//text="<span class='large'>"+text+"</span>"


return text;




}