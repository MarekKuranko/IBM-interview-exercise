N�vod:
aplik�cia sa sp���a pomocou index.htm, testovan� v prehliada�i Google Chrome
login: "Admin", Pass: "Admin"
Po prihl�sen� sa zobraz� str�nka aplik�cie, ktor� je rozdelen� na tri �asti:
	-hlavi�ka so v�eobecn�mi �dajmi (zobrazen� celkov� zostatok, tal�idlo na odhl�senie zo syst�mu)
	-�av� zoznam v�etk�ch z�kazn�kov s mo�nos�ou vyh�ad�vania a filtrovania pod�a mena aj zostatku
	-centr�lna �as� s podrobnos�ami o konkr�tnom z�kazn�kovi a mo�nos�ou prida� si ku ka�d�mu z�kazn�kovi pozn�mku (uklad� sa do web storage)
Na��tavnie json s�boru prebieha priamo zo zdroja z d�vodu �e v pr�pade zmeny niektor�ch �dajov by bolo treba stiahnu� a prep�sa� nov� json 
v zdrojov�ch s�boroch, takto ak sa aktualizuj� �daje tam odkia� sa �ah�, autmaticky sa zmeny prejavia aj tu.
Z d�vodu ochrany �dajov ako z�kazn�kov tak spol�nosti bola pridan� funkcionalita prihlasovania. Aplik�cia samotn� sa zobraz� a� po spr�vnom 
prihl�sen� pou��vate�a do syst�mu. Prid�va� nov�ch pou��vate�ov, ako aj meni� hesl� a pod. m��e len administr�tor pomocou k�du.
Pou��vate� m� mo�nos� vyfiltrova� si v�etk�ch neakt�vnych pou��vate�ov pomocou zadania "no" do vyh�ad�va�a. Tak isto m� mo�nos� vyfiltrova� 
v�etk�ch z�kazn�kov zo z�portn�m zostatkom pomocou zadania znaku "-" (m�nus).


To Do: 
List funkcionality, ktor� by pod�a m�jho n�zoru u�ah�ili pou��vate�ovi �ivot, bolo by relat�vne jednoduch� ich implementova�,
ale z d�vodu kr�tkosti �asu a zbyto�nosti (ked�e sa syst�m re�lne nebude pou��va�) nebola implementovan�.
- Na��tavanie �dajov do zoznamu prerobi� na web-worker, preostredie nebude chv�ku zamrznut� po spusten� aplik�cie
- Mo�nos� odoslania emailu z�kazn�kom priamo zo syst�mu
- Mo�nos� zmeni� predvolen� percento z�avy konkr�tne pre ka�d�ho z�kazn�ka.

Kognit�vne funckie/funkcionalita nedefinovan� v zadan�:
List funkcionality n�ro�nej�ej na implement�ciu, ktor� nebola definovan� v zadan� ale mysl�m si �e by mohla by� u�ito�n�, pr�padne 
zah��aj�cej nejak� kognit�vne prvky. 
- Pridanie novej z�lo�ky "objedn�vky" kde by bolo mo�n� sledova� aktu�lnu aj predch�dzaj�ce objedn�vky ka�d�ho klienta, prid�va� objend�vky a 
  podobne. Z t�chto d�t potom vieme sledova� �iadanos� jednotliv�ch druhov sortimentu, prisp�sobova� tomu ceny a pod. (Pr�padne do istej miery
  predpoveda� bud�ce objedn�vky, dopyt po jednotliv�ch druhoch tovaru v z�vislosti na r�znych aspektoch ako umiestnenie klienta, ro�n� obdobie
  a pod.) Ukladanie by sa dalo vyrie�i� podobne ako pri pozn�kach, ale lep�ie by bolo u� prerobi� viacero vec� na serverov� stranu. 
- Anal�za z�kazn�ka na z�klade u� spom�nan�ch objedn�vok, pr�padne pozn�mok pridan�ch k z�kazn�kovi a predikcia bud�cich objedn�vok 
 (mno�stva a druhu tovaru, �asu, toho �i sa z�kazn�k vr�ti alebo nie a pod.)
- Ked�e po�adovan� rie�enie je web aplik�cia a nie be�n� desktop aplik�cia, je ve�k� predpoklad �e by mohla by� vyu�it� aj mimo pc, tak�e
  �prava str�nky pre mobiln� zariadenia - telf�n, tablet.
- Pridanie nejakej podoby r�chlej odpovede syst�mu na ot�zky z�kazn�ka, nie�o ako chat. (Conversation IBM API) 
- premiestnenie niektor�ch vec� na serverov� stranu, hlavne logika prihlasovania, a ukladanie d�t. 
