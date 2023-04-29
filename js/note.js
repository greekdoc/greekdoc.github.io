var text;
//e=number of translations NOT yet done of LXX & NT
var e = 8595;
//d=total number of translations altogether
var d = 31395;
//r=number done
var r = d - e;
//p = percent done
var p = r / 313.95;

p=p.toFixed(1); 

var l = 591; //lexicon parsing
var t = l / 5.91;
t=t.toFixed(1);

document.write("<span class='r'>NOTE: Italics</span><br />");
document.write("Words in italics don't appear in the Greek text but have been added in the translation to make sense.<br />");
document.write("Words in italics AND underlined will help to clarify. Mousing over the word will reveal the clarification.<br />");
document.write("Words in bold print is for emphasis.<br />");
document.write("<span class='r'>NOTE: Verse numbers</span><br />");
document.write("The numbering system of the LXX and the MT (i.e., Hebrew) is not the same as in the English Bible.");
document.write(" Because this polyglot follows the English Bible, I have had to move some of the LXX verses to match the English. This is especially evident in Jeremiah. Thus beside the verse number you might see <span class='r'>7 [LXX 6:35]</span> meaning that the English is verse 7 of the current chapter and it corresponds to LXX chapter 6, verse 35.");
document.write("<br /><br />");
document.write("In the LXX, the English and Hebrew Psalm 10 is found in the last part of Psalm 9 verses 21-38. From here to Ps 146, the numbering system is one off. Thus Psalm 23, for example, in the English Bibles is listed as Psalm 22 in the LXX.");
document.write("<br /><br />");
document.write("Likewise, at times, there is a different numbering system between the Hebrew order and the English, as in Lev. 5 and 6. For instance, ch 6 verse one will read <span class='r'>1 [MT 5:20]</span> indicating that the Hebrew text puts this verse at the end of ch 5.");
document.write("Also, both the LXX and MT will agree that their numbering system differs from the English. In such cases, it will read <span class='r'>13 [LM 9:44]</span>.");

document.write("<br />");
document.write("<br />");

document.write("<style>");
document.write("#myProgress {");
  document.write("width: 100%;");
  document.write("background-color: grey;");
document.write("}");
document.write("#myBar {");
  document.write("width: "+ p+"%;");
  document.write("height: 30px;");
  document.write("background-color: green;");
 document.write("text-align: center;");
 document.write("line-height: 30px;");
 document.write("color: white;");
document.write("}");
document.write("</style>");


document.write("<style>");
document.write("#lexProgress {");
  document.write("width: 100%;");
  document.write("background-color: grey;");
document.write("}");
document.write("#lexBar {");
  document.write("width: "+ t+"%;");
  document.write("height: 30px;");
  document.write("background-color: green;");
 document.write("text-align: center;");
 document.write("line-height: 30px;");
 document.write("color: white;");
document.write("}");
document.write("</style>");





document.write("<br /><span class='r'>PROGRESS NOTE:</span>");
document.write("<br />");
document.write("This polyglot of the OT (LXX) is a work in progress showing: ");
document.write("<br />");
document.write("<br />");
document.write("1. my modified KJV- translation of the Old Testament Hebrew (basically I have changed 'thee/thou/thy' to 'you/your' and changed the corresponding verbs),");
document.write("<br />");
document.write("2. my addition of the Westminster Leningrad Codex (Hebrew) below it, ");
document.write("<br />");
document.write("3. my inclusion of two Greek codices (Alexandrinus and Vaticanus) of LXX side-by-side, ");
document.write("<br />");
document.write("4. my attachment of Brenton's English translation for each Greek codix.");
document.write("<br />");
document.write("5. that I have begun replacing Brenton's translation with my own English translation.");
document.write("<br />");
document.write("<br />");
document.write("Below is the progress of #5, my translation of both codices into English:");
//document.write("Match: Gen2");

 //document.write("My progress is: " + p+"%");

 document.write("<div id='myProgress'>"); 
 document.write("<div id='myBar'>" + p +"%</div>");
document.write("</div>");
document.write("<br />");
document.write("<br />");

/* document.write("<b>Below is the progress of my verifying lexicon parsing:");
 document.write("<div id='lexProgress'>"); 
 document.write("<div id='lexBar'>" + t +"%</div>");
document.write("</div>");
document.write("<br />");
document.write("<br />");
 */


