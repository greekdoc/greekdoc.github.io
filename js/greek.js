//In the <head> include the following line
// <script src="../js/greek.js"></script>
//In the body where you want the converted text:
//<script type="text/javascript">document.write(greek("#x#a#h#!#a#r#`#N"));</script>
//end result will be Hebrew letters


function greek(text)
{
var text;
var orgtext;
var locate;
var first;
var initial;
var atitle;
atitle="";
orgtext=text;
//remove leading space
if(text.substring(0,1)==" ")text=text.substring(1,text.length);

//remove trailing space

if(text.charAt(text.length-1)==" ") text=text.substring(0,text.length-1);


//make locate same as text
locate=text;
if(text.substring(0,1)=="%")text=text.substring(1,text.length);

//convert text to greek UTF-8 numbers
//text=text.replace(/;/g, "&#9787;"); //
//text=text.replace(/;/g, "&#903;"); //
//four letters
text=text.replace(/a\)`!/g, "&#8066;"); //
text=text.replace(/a\(`!/g, "&#8067;"); //
text=text.replace(/a\)'!/g, "&#8068;"); //
text=text.replace(/a\('!/g, "&#8069;"); //
text=text.replace(/a\)~!/g, "&#8070;"); //
text=text.replace(/a\(~!/g, "&#8071;"); //
text=text.replace(/A\)`!/g, "&#8074;"); //
text=text.replace(/A\(`!/g, "&#8075;"); //
text=text.replace(/A\)'!/g, "&#8076;"); //
text=text.replace(/A\('!/g, "&#8077;"); //
text=text.replace(/A\)~!/g, "&#8078;"); //
text=text.replace(/A\(~!/g, "&#8079;"); //
text=text.replace(/h\)`!/g, "&#8082;"); //
text=text.replace(/h\(`!/g, "&#8083;"); //
text=text.replace(/h\)'!/g, "&#8084;"); //
text=text.replace(/h\('!/g, "&#8085;"); //
text=text.replace(/h\)~!/g, "&#8086;"); //
text=text.replace(/h\(~!/g, "&#8087;"); //
text=text.replace(/H\)`!/g, "&#8090;"); //
text=text.replace(/H\(`!/g, "&#8091;"); //
text=text.replace(/H\)'!/g, "&#8092;"); //
text=text.replace(/H\('!/g, "&#8093;"); //
text=text.replace(/H\)~!/g, "&#8094;"); //
text=text.replace(/H\(~!/g, "&#8095;"); //
text=text.replace(/w\)`!/g, "&#8098;"); //
text=text.replace(/w\(`!/g, "&#8099;"); //
text=text.replace(/w\)'!/g, "&#8100;"); //
text=text.replace(/w\('!/g, "&#8101;"); //
text=text.replace(/w\)~!/g, "&#8102;"); //
text=text.replace(/w\(~!/g, "&#8103;"); //
text=text.replace(/W\)`!/g, "&#8106;"); //
text=text.replace(/W\(`!/g, "&#8107;"); //
text=text.replace(/W\)'!/g, "&#8108;"); //
text=text.replace(/W\('!/g, "&#8109;"); //
text=text.replace(/W\)~!/g, "&#8110;"); //
text=text.replace(/W\(~!/g, "&#8111;"); //
//three letters
text=text.replace(/u'\"/g, "&#944;"); //
text=text.replace(/u\"'/g, "&#944;"); //
text=text.replace(/a\)`/g, "&#7938;"); //
text=text.replace(/a\(`/g, "&#7939;"); //
text=text.replace(/a\)'/g, "&#7940;"); //
text=text.replace(/a\('/g, "&#7941;"); //
text=text.replace(/a\)~/g, "&#7942;"); //
text=text.replace(/a\(~/g, "&#7943;"); //
text=text.replace(/A\)`/g, "&#7946;"); //
text=text.replace(/A\(`/g, "&#7947;"); //
text=text.replace(/A\)'/g, "&#7948;"); //
text=text.replace(/A\('/g, "&#7949;"); //
text=text.replace(/A\)~/g, "&#7950;"); //
text=text.replace(/A\(~/g, "&#7951;"); //
text=text.replace(/e\)`/g, "&#7954;"); //
text=text.replace(/e\(`/g, "&#7955;"); //
text=text.replace(/e\)'/g, "&#7956;"); //
text=text.replace(/e\('/g, "&#7957;"); //
text=text.replace(/E\)`/g, "&#7962;"); //
text=text.replace(/E\(`/g, "&#7963;"); //
text=text.replace(/E\)'/g, "&#7964;"); //
text=text.replace(/E\('/g, "&#7965;"); //
text=text.replace(/h\)`/g, "&#7970;"); //
text=text.replace(/h\(`/g, "&#7971;"); //
text=text.replace(/h\)'/g, "&#7972;"); //
text=text.replace(/h\('/g, "&#7973;"); //
text=text.replace(/h\)~/g, "&#7974;"); //
text=text.replace(/h\(~/g, "&#7975;"); //
text=text.replace(/H\)`/g, "&#7978;"); //
text=text.replace(/H\(`/g, "&#7979;"); //
text=text.replace(/H\)'/g, "&#7980;"); //
text=text.replace(/H\('/g, "&#7981;"); //
text=text.replace(/H\)~/g, "&#7982;"); //
text=text.replace(/H\(~/g, "&#7983;"); //
text=text.replace(/i\)`/g, "&#7986;"); //
text=text.replace(/i\(`/g, "&#7987;"); //
text=text.replace(/i\)'/g, "&#7988;"); //
text=text.replace(/i\('/g, "&#7989;"); //
text=text.replace(/i\)~/g, "&#7990;"); //
text=text.replace(/i\(~/g, "&#7991;"); //
text=text.replace(/I\)`/g, "&#7994;"); //
text=text.replace(/I\(`/g, "&#7995;"); //
text=text.replace(/I\)'/g, "&#7996;"); //
text=text.replace(/I\('/g, "&#7997;"); //
text=text.replace(/I\)~/g, "&#7998;"); //
text=text.replace(/I\(~/g, "&#7999;"); //
text=text.replace(/o\)`/g, "&#8002;"); //
text=text.replace(/o\(`/g, "&#8003;"); //
text=text.replace(/o\)'/g, "&#8004;"); //
text=text.replace(/o\('/g, "&#8005;"); //
text=text.replace(/O\)`/g, "&#8010;"); //
text=text.replace(/O\(`/g, "&#8011;"); //
text=text.replace(/O\)'/g, "&#8012;"); //
text=text.replace(/O\('/g, "&#8013;"); //
text=text.replace(/u\)`/g, "&#8018;"); //
text=text.replace(/u\(`/g, "&#8019;"); //
text=text.replace(/u\)'/g, "&#8020;"); //
text=text.replace(/u\('/g, "&#8021;"); //
text=text.replace(/u\)~/g, "&#8022;"); //
text=text.replace(/u\(~/g, "&#8023;"); //
text=text.replace(/U\(`/g, "&#8027;"); //
text=text.replace(/U\('/g, "&#8029;"); //
text=text.replace(/U\(~/g, "&#8031;"); //
text=text.replace(/w\)`/g, "&#8034;"); //
text=text.replace(/w\(`/g, "&#8035;"); //
text=text.replace(/w\)'/g, "&#8036;"); //
text=text.replace(/w\('/g, "&#8037;"); //
text=text.replace(/w\)~/g, "&#8038;"); //
text=text.replace(/w\(~/g, "&#8039;"); //
text=text.replace(/W\)`/g, "&#8042;"); //
text=text.replace(/W\(`/g, "&#8043;"); //
text=text.replace(/W\)'/g, "&#8044;"); //
text=text.replace(/W\('/g, "&#8045;"); //
text=text.replace(/W\)~/g, "&#8046;"); //
text=text.replace(/W\(~/g, "&#8047;"); //
text=text.replace(/a\)!/g, "&#8064;"); //
text=text.replace(/a\(!/g, "&#8065;"); //
text=text.replace(/A\)!/g, "&#8072;"); //
text=text.replace(/A\(!/g, "&#8073;"); //
text=text.replace(/h\)!/g, "&#8080;"); //
text=text.replace(/h\(!/g, "&#8081;"); //
text=text.replace(/H\)!/g, "&#8088;"); //
text=text.replace(/H\(!/g, "&#8089;"); //
text=text.replace(/w\)!/g, "&#8096;"); //
text=text.replace(/w\(!/g, "&#8097;"); //
text=text.replace(/W\)!/g, "&#8104;"); //
text=text.replace(/W\(!/g, "&#8105;"); //
text=text.replace(/a`!/g, "&#8114;"); //
text=text.replace(/a'!/g, "&#8116;"); //
text=text.replace(/a~!/g, "&#8119;"); //
text=text.replace(/A`!/g, "&#8122;"); //
text=text.replace(/A'!/g, "&#8124;"); //
text=text.replace(/h`!/g, "&#8130;"); //
text=text.replace(/h'!/g, "&#8132;"); //
text=text.replace(/h~!/g, "&#8135;"); //
text=text.replace(/i`\"/g, "&#8146;"); //iota grave dia
text=text.replace(/i\"`/g, "&#8146;"); //iota dia grave
text=text.replace(/i'\"/g, "&#912;"); //iota acute dia 
text=text.replace(/i\"'/g, "&#912;"); //iota dia acute
text=text.replace(/i~\"/g, "&#8151;"); //
text=text.replace(/u`\"/g, "&#8162;"); //upsilon grave dia
text=text.replace(/u\"`/g, "&#8162;"); //upsilon dia grave
text=text.replace(/u\"'/g, "&#944;"); //upsilon dia acute
text=text.replace(/u'\"/g, "&#944;"); //upsilon acute dia
text=text.replace(/u~\"/g, "&#8167;"); //
text=text.replace(/w`!/g, "&#8178;"); //
text=text.replace(/w'!/g, "&#8180;"); //
text=text.replace(/w~!/g, "&#8183;"); //

//three hebrew letters
text=text.replace(/#a!/g, "&#1458;"); //pathah  shewa
text=text.replace(/#e!/g, "&#1457;"); //seghol shewa
text=text.replace(/#i/g, "&#1460;"); //hireq shewa
text=text.replace(/#o!/g, "&#1464;"); //qames  shewa

//two letters
text=text.replace(/I\"/g, "&#938;"); //
text=text.replace(/U\"/g, "&#939;"); //
text=text.replace(/a'/g, "&#940;"); //
text=text.replace(/e'/g, "&#941;"); //
text=text.replace(/h'/g, "&#942;"); //
text=text.replace(/i'/g, "&#943;"); //
text=text.replace(/i\"/g, "&#970;"); //
text=text.replace(/u\"/g, "&#971;"); //
text=text.replace(/o\"/g, "&#246;"); //
text=text.replace(/o'/g, "&#972;"); //
text=text.replace(/u'/g, "&#973;"); //
text=text.replace(/w'/g, "&#974;"); //
text=text.replace(/a\)/g, "&#7936;"); //
text=text.replace(/a\(/g, "&#7937;"); //
text=text.replace(/A\)/g, "&#7944;"); //
text=text.replace(/A\(/g, "&#7945;"); //
text=text.replace(/e\)/g, "&#7952;"); //
text=text.replace(/e\(/g, "&#7953;"); //
text=text.replace(/E\)/g, "&#7960;"); //
text=text.replace(/E\(/g, "&#7961;"); //
text=text.replace(/h\)/g, "&#7968;"); //
text=text.replace(/h\(/g, "&#7969;"); //
text=text.replace(/H\)/g, "&#7976;"); //
text=text.replace(/H\(/g, "&#7977;"); //
text=text.replace(/i\)/g, "&#7984;"); //
text=text.replace(/i\(/g, "&#7985;"); //
text=text.replace(/I\)/g, "&#7992;"); //
text=text.replace(/I\(/g, "&#7993;"); //
text=text.replace(/o\)/g, "&#8000;"); //
text=text.replace(/o\(/g, "&#8001;"); //
text=text.replace(/O\)/g, "&#8008;"); //
text=text.replace(/O\(/g, "&#8009;"); //
text=text.replace(/u\)/g, "&#8016;"); //
text=text.replace(/u\(/g, "&#8017;"); //
text=text.replace(/U\(/g, "&#8025;"); //
text=text.replace(/w\)/g, "&#8032;"); //
text=text.replace(/w\(/g, "&#8033;"); //
text=text.replace(/W\)/g, "&#8040;"); //
text=text.replace(/W\(/g, "&#8041;"); //
text=text.replace(/a`/g, "&#8048;"); //
text=text.replace(/a'/g, "&#940;"); //
text=text.replace(/e`/g, "&#8050;"); //
text=text.replace(/e'/g, "&#941;"); //
text=text.replace(/h`/g, "&#8052;"); //
text=text.replace(/h'/g, "&#942;"); //
text=text.replace(/i`/g, "&#8054;"); //
text=text.replace(/i'/g, "&#943;"); //
text=text.replace(/o`/g, "&#8056;"); //
text=text.replace(/o'/g, "&#972;"); //
text=text.replace(/u`/g, "&#8058;"); //
text=text.replace(/u'/g, "&#973;"); //
text=text.replace(/w`/g, "&#8060;"); //
text=text.replace(/w'/g, "&#974;"); //
text=text.replace(/a!/g, "&#8115;"); //
text=text.replace(/a~/g, "&#8118;"); //
text=text.replace(/A!/g, "&#8123;"); //
text=text.replace(/~\"\)/g, "&#8129;"); //circum + uml
text=text.replace(/h!/g, "&#8131;"); //
text=text.replace(/h~/g, "&#8134;"); //
text=text.replace(/E`/g, "&#8136;"); //
text=text.replace(/E'/g, "&#8137;"); //
text=text.replace(/H`/g, "&#8138;"); //
text=text.replace(/H'/g, "&#8139;"); //
text=text.replace(/H!/g, "&#8140;"); //
text=text.replace(/\)`/g, "&#8141;"); //
text=text.replace(/\)'/g, "&#8142;"); //
text=text.replace(/\)~/g, "&#8143;"); //
text=text.replace(/i~/g, "&#8150;"); //
text=text.replace(/I`/g, "&#8154;"); //
text=text.replace(/I'/g, "&#8155;"); //
text=text.replace(/\(`/g, "&#8157;"); //
text=text.replace(/\('/g, "&#8158;"); //
text=text.replace(/\(~/g, "&#8159;"); //
text=text.replace(/r\)/g, "&#8164;"); //
text=text.replace(/r\(/g, "&#8165;"); //
text=text.replace(/u~/g, "&#8166;"); //
text=text.replace(/U`/g, "&#8170;"); //
text=text.replace(/U'/g, "&#8171;"); //
text=text.replace(/R\(/g, "&#8172;"); //
text=text.replace(/`\"/g, "&#8173;"); //
text=text.replace(/'\"/g, "&#8174;"); //
text=text.replace(/w!/g, "&#8179;"); //
text=text.replace(/w~/g, "&#8182;"); //
text=text.replace(/O`/g, "&#8184;"); //
text=text.replace(/O'/g, "&#8185;"); //
text=text.replace(/W`/g, "&#8186;"); //
text=text.replace(/W'/g, "&#8187;"); //
text=text.replace(/W!/g, "&#8188;"); //

//two hebrew letters
text=text.replace(/#a/g, "&#1463;"); //pathah
text=text.replace(/#e/g, "&#1462;"); //seghol
text=text.replace(/#i/g, "&#1460;"); //hireq
text=text.replace(/#u/g, "&#1467;"); //qibbus
text=text.replace(/#o/g, "&#1464;"); //qames
text=text.replace(/#E/g, "&#1461;"); //seghol
text=text.replace(/#x/g, "&#1488;"); //aleph
text=text.replace(/#b/g, "&#1489;"); //beth
text=text.replace(/#g/g, "&#1490;"); //gimel
text=text.replace(/#d/g, "&#1491;"); //daleth
text=text.replace(/#h/g, "&#1492;"); //he
text=text.replace(/#v/g, "&#1493;"); //waw
text=text.replace(/#z/g, "&#1494;"); //zayin
text=text.replace(/#H/g, "&#1495;"); //heth
text=text.replace(/#t/g, "&#1496;"); //tet
text=text.replace(/#y/g, "&#1497;"); //yod
text=text.replace(/#k/g, "&#1499;"); //kap
text=text.replace(/#K/g, "&#1498;"); //kap final
text=text.replace(/#l/g, "&#1500;"); //lamed
text=text.replace(/#m/g, "&#1502;"); //mem
text=text.replace(/#M/g, "&#1501;"); //mem final
text=text.replace(/#n/g, "&#1504;"); //nun
text=text.replace(/#N/g, "&#1503;"); //nun final
text=text.replace(/#s/g, "&#1505;"); //samek
text=text.replace(/#Y/g, "&#1506;"); //ayin
text=text.replace(/#p/g, "&#1508;"); //pe
text=text.replace(/#P/g, "&#1507;"); //pe final
text=text.replace(/#j/g, "&#1510;"); //sade
text=text.replace(/#J/g, "&#1509;"); //sade final
text=text.replace(/#q/g, "&#1511;"); //qoph
text=text.replace(/#r/g, "&#1512;"); //resh
text=text.replace(/#w/g, "&#1513;"); //sin
text=text.replace(/#T/g, "&#1514;"); //taw
text=text.replace(/#\*/g, "&#1468;"); //middle dot
text=text.replace(/#\(/g, "&#1474;"); //left dot
text=text.replace(/#\)/g, "&#1473;"); //right dot
text=text.replace(/#\!/g, "&#1456;"); //shewa
text=text.replace(/#\`/g, "&#1465;"); //dot up left
text=text.replace(/#\'/g, "&#1466;"); //dot up right
text=text.replace(/#\+/g, "&#1476;"); //dot up middle

text=text.replace(/#\|/g, "&#1469;"); //methegh
text=text.replace(/#\:/g, "&#1475;"); //
text=text.replace(/#\-/g, "&#1470;"); //

//one letter
text=text.replace(/A/g, "&#913;"); //ALPHA
text=text.replace(/B/g, "&#914;"); //BETA
text=text.replace(/G/g, "&#915;"); //
text=text.replace(/D/g, "&#916;"); //
text=text.replace(/E/g, "&#917;"); //
text=text.replace(/Z/g, "&#918;"); //
text=text.replace(/H/g, "&#919;"); //
text=text.replace(/Q/g, "&#920;"); //
text=text.replace(/I/g, "&#921;"); //
text=text.replace(/K/g, "&#922;"); //
text=text.replace(/L/g, "&#923;"); //
text=text.replace(/M/g, "&#924;"); //
text=text.replace(/N/g, "&#925;"); //
text=text.replace(/X/g, "&#926;"); //
text=text.replace(/O/g, "&#927;"); //
text=text.replace(/P/g, "&#928;"); //
text=text.replace(/R/g, "&#929;"); //
text=text.replace(/S/g, "&#931;"); //
text=text.replace(/T/g, "&#932;"); //
text=text.replace(/U/g, "&#933;"); //
text=text.replace(/F/g, "&#934;"); //
text=text.replace(/C/g, "&#935;"); //
text=text.replace(/Y/g, "&#936;"); //
text=text.replace(/W/g, "&#937;"); //
text=text.replace(/a/g, "&#945;"); //
text=text.replace(/b/g, "&#946;"); //
text=text.replace(/g/g, "&#947;"); //
text=text.replace(/d/g, "&#948;"); //
text=text.replace(/e/g, "&#949;"); //
text=text.replace(/z/g, "&#950;"); //
text=text.replace(/h/g, "&#951;"); //
text=text.replace(/q/g, "&#952;"); //
text=text.replace(/i/g, "&#953;"); //
text=text.replace(/k/g, "&#954;"); //
text=text.replace(/l/g, "&#955;"); //
text=text.replace(/m/g, "&#956;"); //
text=text.replace(/n/g, "&#957;"); //
text=text.replace(/x/g, "&#958;"); //
text=text.replace(/o/g, "&#959;"); //
text=text.replace(/p/g, "&#960;"); //
text=text.replace(/r/g, "&#961;"); //
text=text.replace(/V/g, "&#962;"); //
text=text.replace(/s/g, "&#963;"); //
text=text.replace(/t/g, "&#964;"); //
text=text.replace(/u/g, "&#965;"); //
text=text.replace(/f/g, "&#966;"); //
text=text.replace(/c/g, "&#967;"); //
text=text.replace(/y/g, "&#968;"); //
text=text.replace(/w/g, "&#969;"); //
text=text.replace(/j/g, "&#8127;"); //8217,8125
text=text.replace(/v/g, "&#986;"); // stigma
text=text.replace(/ \) /g, "&#8125; "); //smooth breathing mark
text=text.replace(/\)/g, "&#8125;"); //smooth breathing mark
text=text.replace(/!/g, "&#8126;"); // iota subscript
text=text.replace(/\)/g, "&#8127;"); //smooth
text=text.replace(/~/g, "&#8128;"); //circum
text=text.replace(/`/g, "&#8175;"); //
text=text.replace(/`/g, "&#8189;"); //
text=text.replace(/\(/g, "&#8190;"); //
text=text.replace(/\?/g, "&#0059;"); //063
text=text.replace(/\:/g, "&#903;"); //063
//text=text.replace(/\;/g, "&#903;"); //063



//remove accents, breathing marks and punctuation from locate
locate=locate.replace(/V/g,"s");
locate=locate.replace(/j/g,"");
locate=locate.replace(/\)/g,"");
locate=locate.replace(/\(/g,"");
locate=locate.replace(/\"/g,"");
locate=locate.replace(/\\/g,"");
locate=locate.replace(/\'/g,"");
locate=locate.replace(/\`/g,"");
locate=locate.replace(/\~/g,"");
locate=locate.replace(/\!/g,"");
locate=locate.replace(/\:/g,"");
locate=locate.replace(/\./g,"");
locate=locate.replace(/\,/g,"");
locate=locate.replace(/\;/g,"");
locate=locate.replace(/\?/g,"");
locate=locate.replace(/\[/g,"");
locate=locate.replace(/\]/g,"");
locate=locate.replace(/\*/g,"");
locate=locate.replace(/\-/g,"");
locate=locate.toLowerCase();

//get first letter of locate
first=locate.substring(0,2);

if (locate.substring(0,3)=="kab") first="kab";
if (locate.substring(0,3)=="kad") first="kad";
if (locate.substring(0,3)=="kaf") first="kaf";
if (locate.substring(0,3)=="kag") first="kag";
if (locate.substring(0,3)=="kah") first="kah";
if (locate.substring(0,3)=="kai") first="kai";
if (locate.substring(0,3)=="kak") first="kak";
if (locate.substring(0,3)=="kal") first="kal";
if (locate.substring(0,3)=="kam") first="kam";
if (locate.substring(0,3)=="kan") first="kan";
if (locate.substring(0,3)=="kap") first="kap";
if (locate.substring(0,3)=="kaq") first="kaq";
if (locate.substring(0,3)=="kar") first="kar";
if (locate.substring(0,3)=="kas") first="kas";
if (locate.substring(0,3)=="kat") first="kat";
if (locate.substring(0,3)=="kau") first="kau";
if (locate.substring(0,3)=="kay") first="kay";





initial=locate.substring(0,1);
if (initial=="#") { //we have a hebrew word
locate=locate.replace(/\#/g,""); //remove all the #
first=locate.substring(0,1);
	switch(first) {
		case "x" : first="aleph"; break;
		case "b" : first="beth"; break;
		case "g" : first="gimel"; break;
		case "d" : first="dalet"; break;
		case "h" : first="heh"; break;
		case "v" : first="waw"; break;
		case "z" : first="zayin"; break;
		case "t" : first="tet"; break;
		case "y" : first="yod"; break;
		case "k" : first="kaph"; break;
		case "l" : first="lamed"; break;
		case "m" : first="mem"; break;
		case "n" : first="nun"; break;
		case "s" : first="samek"; break;
		case "Y" : first="ayin"; break;
		case "p" : first="peh"; break;
		case "j" : first="sade"; break;
		case "q" : first="qoph"; break;
		case "r" : first="resh"; break;
		case "w" : first="sin"; break;
		case "T" : first="taw"; break;
	}
}

if (initial=="%") { //we have a Proper name
locate=locate.replace(/\%/g,""); //remove all the %
first=locate.substring(0,1);
first=first.toUpperCase();

	switch(first) {
		case "A" : first="-a"; break;
		case "B" : first="-b"; break;
		case "G" : first="-g"; break;
		case "D" : first="-d"; break;
		case "E" : first="-e"; break;
		case "Z" : first="-z"; break;
		case "H" : first="-h"; break;
		case "Q" : first="-q"; break;
		case "I" : first="-i"; break;
		case "K" : first="-k"; break;
		case "L" : first="-l"; break;
		case "M" : first="-m"; break;
		case "N" : first="-n"; break;
		case "X" : first="-x"; break;
		case "O" : first="-o"; break;
		case "P" : first="-p"; break;
		case "R" : first="-r"; break;
		case "S" : first="-s"; break;
		case "T" : first="-t"; break;
		case "U" : first="-u"; break;
		case "F" : first="-f"; break;
		case "C" : first="-c"; break;
		case "Y" : first="-y"; break;
		case "W" : first="-w"; break;
	}
}







//if (locate.length>2) first=locate.substring(0,3);

//use this line when not in lexicon
//if (orgtext=="kata`") atitle="according&nbsp;to";

//text="<a href='lexicon/"+first+".html#"+locate+"'><span class='greek'>"+text+"</span></a>"
//text="<a href='lexicon/"+first+".html#"+locate+"' title="+atitle+"><span class='greek'>"+text+"</span></a>"

//use this line when in lexicon
//text="<a href='"+first+".html#"+locate+"' <acronym title=atitle><span class='greek'>"+text+"</span></acronym></a>"

//use this next line for upload
//text="<a href='http://www.greekdoc.com/greek/lexicon/"+first+".html#"+locate+"'><span class='greek'>"+text+"</span></a>"
text="<a href='../lexicon/"+first+".html#"+locate+"'><span class='greek'>"+text+"</span></a>"

//use this next line for internal
//text="<a href='"+first+".html#"+locate+"'><span class='greek'>"+text+"</span></a>"


return text;

// The acute #  8049, 8051, 8053, 8055, 8057, 8059, 8061, 8163 and 8147 are not good


}