Návod:
aplikácia sa spúša pomocou index.htm, testované v prehliadaèi Google Chrome
login: "Admin", Pass: "Admin"
Po prihlásení sa zobrazí stránka aplikácie, ktorá je rozdelená na tri èasti:
	-hlavièka so všeobecnımi údajmi (zobrazenı celkovı zostatok, talèidlo na odhlásenie zo systému)
	-¾avı zoznam všetkıch zákazníkov s monosou vyh¾adávania a filtrovania pod¾a mena aj zostatku
	-centrálna èas s podrobnosami o konkrétnom zákazníkovi a monosou prida si ku kadému zákazníkovi poznámku (ukladá sa do web storage)
Naèítavnie json súboru prebieha priamo zo zdroja z dôvodu e v prípade zmeny niektorıch údajov by bolo treba stiahnu a prepísa novı json 
v zdrojovıch súboroch, takto ak sa aktualizujú údaje tam odkia¾ sa ahá, autmaticky sa zmeny prejavia aj tu.
Z dôvodu ochrany údajov ako zákazníkov tak spolènosti bola pridaná funkcionalita prihlasovania. Aplikácia samotná sa zobrazí a po správnom 
prihlásení pouívate¾a do systému. Pridáva novıch pouívate¾ov, ako aj meni heslá a pod. môe len administrátor pomocou kódu.
Pouívate¾ má monos vyfiltrova si všetkıch neaktívnych pouívate¾ov pomocou zadania "no" do vyh¾adávaèa. Tak isto má monos vyfiltrova 
všetkıch zákazníkov zo záportnım zostatkom pomocou zadania znaku "-" (mínus).


To Do: 
List funkcionality, ktoré by pod¾a môjho názoru u¾ahèili pouívate¾ovi ivot, bolo by relatívne jednoduché ich implementova,
ale z dôvodu krátkosti èasu a zbytoènosti (kede sa systém reálne nebude pouíva) nebola implementovaná.
- Naèítavanie údajov do zoznamu prerobi na web-worker, preostredie nebude chví¾ku zamrznuté po spustení aplikácie
- Monos odoslania emailu zákazníkom priamo zo systému
- Monos zmeni predvolené percento z¾avy konkrétne pre kadého zákazníka.

Kognitívne funckie/funkcionalita nedefinovaná v zadaní:
List funkcionality nároènejšej na implementáciu, ktorá nebola definovaná v zadaní ale myslím si e by mohla by uitoèná, prípadne 
zahàòajúcej nejaké kognitívne prvky. 
- Pridanie novej záloky "objednávky" kde by bolo moné sledova aktuálnu aj predchádzajúce objednávky kadého klienta, pridáva objendávky a 
  podobne. Z tıchto dát potom vieme sledova iadanos jednotlivıch druhov sortimentu, prispôsobova tomu ceny a pod. (Prípadne do istej miery
  predpoveda budúce objednávky, dopyt po jednotlivıch druhoch tovaru v závislosti na rôznych aspektoch ako umiestnenie klienta, roèné obdobie
  a pod.) Ukladanie by sa dalo vyrieši podobne ako pri poznákach, ale lepšie by bolo u prerobi viacero vecí na serverovú stranu. 
- Analıza zákazníka na základe u spomínanıch objednávok, prípadne poznámok pridanıch k zákazníkovi a predikcia budúcich objednávok 
 (mnostva a druhu tovaru, èasu, toho èi sa zákazník vráti alebo nie a pod.)
- Kede poadované riešenie je web aplikácia a nie bená desktop aplikácia, je ve¾kı predpoklad e by mohla by vyuitá aj mimo pc, take
  úprava stránky pre mobilné zariadenia - telfón, tablet.
- Pridanie nejakej podoby rıchlej odpovede systému na otázky zákazníka, nieèo ako chat. (Conversation IBM API) 
- premiestnenie niektorıch vecí na serverovú stranu, hlavne logika prihlasovania, a ukladanie dát. 
