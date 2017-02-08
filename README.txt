Návod:
aplikácia sa spúša pomocou index.htm
login: "Admin", Pass: "Admin"
Po prihlásení sa zobrazí stránka aplikácie, ktorá je rozdelená na tri èasti
	-hlavièka so všeobecnımi údajmi (zobrazenı celkovı zostatok, talèidlo na odhlásenie zo systému)
	-¾avı zoznam všetkıch zákazníkov s monosou vyh¾adávania a filtrovania pod¾a mena aj zostatku
	-centrálna èas s podrobnosami o konkrétnom zákazníkovi a monosou prida si ku kadému zákazníkovi poznámku (ukladá sa do web storage)

To Do:
- Naèítavanie údajov do zoznamu prerobi na web-worker, preostredie nebude chví¾ku zamrznuté po spustení aplikácie
- Prida monos vyfiltrova len aktívnych/neaktívnych pouívate¾ov
- 