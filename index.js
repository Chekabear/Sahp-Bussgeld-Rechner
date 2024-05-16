!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bußgeldrechner DE01 - SAHP</title>
    <script src="index.js"></script>
    <link rel="stylesheet" href="fonts.css">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="style_sahp_overwrite.css">
    <link rel="shortcut icon" href="SAHP_logo.png?" sizes="32x32" type="image/png">
    <meta content="Bußgeldrechner DE 01" property="og:title" />
    <meta content="Bußgeldrechner für GrandRP DE 01 - Made by Torbenn Tot  for SAHP" property="og:description" />
    <meta content="https://torbenqq.github.io/Bussgeldrechner/:" property="og:url" />
    <meta content="https://dev-gosling.github.io/sahp-bgr/SAHP_logo.png" property="og:image" />
    <meta content="#65d3ff" data-react-helmet="true" name="theme-color" />

    <link rel="stylesheet" href="https://kit-pro.fontawesome.com/releases/v6.2.1/css/pro.min.css">
    <link rel="stylesheet" href="notifications.css">
    <script src="notifications.js"></script>
</head>
<body>

    <div id="loading">
        <img draggable="false" src="https://dev-gosling.github.io/sahp-bgr/SAHP_logo.png" alt="SAHP_logo">
        <div id="dotContainer">
            <div class="dot" id="dot1"><div class="dotContent"></div></div>
            <div class="dot" id="dot2"><div class="dotContent"></div></div>
            <div class="dot" id="dot3"><div class="dotContent"></div></div>
        </div>
    </div>

    <div id="scriptingDiv" style="display: none;">
        <div id="disclaimerBackgroundBlocker"></div>
    <div id="disclaimer">
        <div id="disclaimer_title"><i id="disclaimer_title_warning" class="fa-regular fa-triangle-exclamation" style="color: rgb(255, 73, 73);"></i> Disclaimer</div>
            <div id="disclaimer_text">Dieser Bußgeldrechner wird weitergeführt von Torbenn Tot.<br><br><font style="color: white; font-size: 25px;"><b style="color: white; font-size: 25px;">[WERBUNG]</b> Ihr wollt die Entwickug unterstützen?: <a href=" ="_blank" style="color: rgb(49, 121, 255);"</a>PayPal:virusgotdrip@yahoo.com</font></div>
        <button id="disclaimer_button" onclick="JavaScript:disclaimerAccepted()">Verstanden</button>
    </div>

    <div id="header">
        <div id="title"><div id="header_icon"><img src="SAHP_logo.png" alt="SAHP LOGO" draggable="false"></div><div id="header_titleText">Bußgeldrechner - SAHP</div></div>
        <div id="credits">Made by Torbenn Tot for SAHP</div>
        <div id="searchbar"><input id="searchbar_input" oninput="JavaScript:searchFine()" type="text" placeholder="Nach einer Straftat suchen"></div>
    </div>

    <div id="contentbox">
        <div id="fineslist">
            <table>
                <tr id="finesHeader">
                    <th style="width: 15%;">Paragraph</th>
                    <th style="width: 55%;">Strafbestand</th>
                    <th style="width: 15%;">Haftstrafe</th>
                    <th style="width: 15%;">Bußgeld</th>
                </tr>
                <tr class="categoryHeader">
                    <th></th>
                    <th>Straßenverkehrsordnung (StVO)</th>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="true" data-removeweaponlicence="false">
                    <td class="paragraph">StVO §2</td>
                    <td class="fineText">Gefährdung anderer Verkehrsteilnehmer</td>
                    <td class="wantedAmount" data-wantedamount="0"></td>
                    <td class="fineAmount" data-fineamount="10000">$10.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="false" data-removeweaponlicence="false">
                    <td class="paragraph">StVO §4</td>
                    <td class="fineText">Missachten von Rechtsfahrgebot</td>
                    <td class="wantedAmount" data-wantedamount="0"></td>
                    <td class="fineAmount" data-fineamount="8000">$8.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="true" data-removeweaponlicence="false">
                    <td class="paragraph">StVO §5</td>
                    <td class="fineText">Überschreiten der Fahrzeugkapazitäten</td>
                    <td class="wantedAmount" data-wantedamount="0"></td>
                    <td class="fineAmount" data-fineamount="5000">$5.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="false" data-removeweaponlicence="false">
                    <td class="paragraph">StVO §6</td>
                    <td class="fineText">Fahren mit demoliertem Fahrzeug</td>
                    <td class="wantedAmount" data-wantedamount="0"></td>
                    <td class="fineAmount" data-fineamount="2000">$2.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="false" data-removeweaponlicence="false">
                    <td class="paragraph">StVO §7</td>
                    <td class="fineText">Fahren ohne Licht (Dunkelheit, Wetterverhältnissen)</td>
                    <td class="wantedAmount" data-wantedamount="0"></td>
                    <td class="fineAmount" data-fineamount="5000">$5.000</td>
                </tr>
                <tr class="showing fine addPlateInList" onclick="JavaScript:selectFine(event)" data-removedriverlicence="false" data-removeweaponlicence="false">
                    <td class="paragraph">StVO §8</td>
                    <td class="fineText">Geschwindigkeitsüberschreitung 10 - 20 km/h</td>
                    <td class="wantedAmount" data-wantedamount="0"></td>
                    <td class="fineAmount" data-fineamount="5000">$5.000</td>
                </tr>
                <tr class="showing fine addPlateInList" onclick="JavaScript:selectFine(event)" data-removedriverlicence="false" data-removeweaponlicence="false">
                    <td class="paragraph">StVO §8</td>
                    <td class="fineText">Geschwindigkeitsüberschreitung 21 - 40 km/h</td>
                    <td class="wantedAmount" data-wantedamount="0"></td>
                    <td class="fineAmount" data-fineamount="10000">$10.000</td>
                </tr>
                <tr class="showing fine addPlateInList" onclick="JavaScript:selectFine(event)" data-removedriverlicence="false" data-removeweaponlicence="false">
                    <td class="paragraph">StVO §8</td>
                    <td class="fineText">Geschwindigkeitsüberschreitung 41 - 60 km/h</td>
                    <td class="wantedAmount" data-wantedamount="0"></td>
                    <td class="fineAmount" data-fineamount="15000">$15.000</td>
                </tr>
                <tr class="showing fine addPlateInList" onclick="JavaScript:selectFine(event)" data-removedriverlicence="true" data-removeweaponlicence="false">
                    <td class="paragraph">StVO §8</td>
                    <td class="fineText">Geschwindigkeitsüberschreitung 61 - 100 km/h</td>
                    <td class="wantedAmount" data-wantedamount="0"></td>
                    <td class="fineAmount" data-fineamount="20000">$20.000</td>
                </tr>
                <tr class="showing fine addPlateInList" onclick="JavaScript:selectFine(event)" data-removedriverlicence="true" data-removeweaponlicence="false">
                    <td class="paragraph">StVO §8</td>
                    <td class="fineText">Geschwindigkeitsüberschreitung ab 101 km/h</td>
                    <td class="wantedAmount" data-wantedamount="0"></td>
                    <td class="fineAmount" data-fineamount="25000">$25.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="false" data-removeweaponlicence="false">
                    <td class="paragraph">StVO §9 Art. 1</td>
                    <td class="fineText">Fahren ohne gültigen Führerschein</td>
                    <td class="wantedAmount" data-wantedamount="0"></td>
                    <td class="fineAmount" data-fineamount="8000">$8.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="false" data-removeweaponlicence="false">
                    <td class="paragraph">StVO §9 Art. 3</td>
                    <td class="fineText">Fahren ohne gültige Zulassung</td>
                    <td class="wantedAmount" data-wantedamount="0"></td>
                    <td class="fineAmount" data-fineamount="10000">$10.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="false" data-removeweaponlicence="false">
                    <td class="paragraph">StVO §10 Art. 1</td>
                    <td class="fineText">Missachten von Rechts vor Links</td>
                    <td class="wantedAmount" data-wantedamount="0"></td>
                    <td class="fineAmount" data-fineamount="1000">$1.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="false" data-removeweaponlicence="false">
                    <td class="paragraph">StVO §10 Art. 2</td>
                    <td class="fineText">Missachten von Verkehrsschildern</td>
                    <td class="wantedAmount" data-wantedamount="0"></td>
                    <td class="fineAmount" data-fineamount="2000">$2.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="false" data-removeweaponlicence="false">
                    <td class="paragraph">StVO §10 Art. 4</td>
                    <td class="fineText">Fahren ohne genügend Tankkapazität</td>
                    <td class="wantedAmount" data-wantedamount="0"></td>
                    <td class="fineAmount" data-fineamount="10000">$10.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="false" data-removeweaponlicence="false">
                    <td class="paragraph">StVO §10 Art. 6</td>
                    <td class="fineText">Nutzung eines Mobilgeräts am Steuer</td>
                    <td class="wantedAmount" data-wantedamount="0"></td>
                    <td class="fineAmount" data-fineamount="3000">$3.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="false" data-removeweaponlicence="false">
                    <td class="paragraph">StVO §10 Art. 7</td>
                    <td class="fineText">Lärmbelästigung / Unnötiges Hupen</td>
                    <td class="wantedAmount" data-wantedamount="0"></td>
                    <td class="fineAmount" data-fineamount="20000">$20.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="false" data-removeweaponlicence="false">
                    <td class="paragraph">StVO §10 Art. 9(1)</td>
                    <td class="fineText">Überholen auf der rechten Fahrbahn</td>
                    <td class="wantedAmount" data-wantedamount="0"></td>
                    <td class="fineAmount" data-fineamount="5000">$5.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="true" data-removeweaponlicence="false">
                    <td class="paragraph">StVO §10 Art. 12</td>
                    <td class="fineText">Fahren abseits von gekennzeichneten Wegen</td>
                    <td class="wantedAmount" data-wantedamount="0"></td>
                    <td class="fineAmount" data-fineamount="8000">$8.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="true" data-removeweaponlicence="false">
                    <td class="paragraph">StVO §10 Art. 16</td>
                    <td class="fineText">Fahren auf der entgengesetzten Fahrtrichtung</td>
                    <td class="wantedAmount" data-wantedamount="0"></td>
                    <td class="fineAmount" data-fineamount="30000">$30.000</td>
                </tr>
                <tr class="showing fine addPlateInList" onclick="JavaScript:selectFine(event)" data-removedriverlicence="false" data-removeweaponlicence="false">
                    <td class="paragraph">StVO §12.1</td>
                    <td class="fineText">Falsch Parken / Halten</td>
                    <td class="wantedAmount" data-wantedamount="0"></td>
                    <td class="fineAmount" data-fineamount="10000">$10.000</td>
                </tr>
                <tr class="showing fine addPlateInList" onclick="JavaScript:selectFine(event)" data-removedriverlicence="false" data-removeweaponlicence="false">
                    <td class="paragraph">StVO §12.3</td>
                    <td class="fineText">Bergung aus nicht befahrbarem Gelände<br><i>Bergung aus schwer zugänglichem Gelände, wie zum Beispiel Gebirge, Strand oder Wasser.</i></td>
                    <td class="wantedAmount" data-wantedamount="0"></td>
                    <td class="fineAmount" data-fineamount="20000">$20.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="true" data-removeweaponlicence="false">
                    <td class="paragraph">StVO §17 Art. 1+2</td>
                    <td class="fineText">Fahren im berauschten Zustand</td>
                    <td class="wantedAmount" data-wantedamount="0"><font class="extrawanted1 extrawanted" onclick="JavaScript:toggleExtraWanted(event)">☆</font><font class="extrawanted2 extrawanted" onclick="JavaScript:toggleExtraWanted(event)">☆</font></td>
                    <td class="fineAmount" data-fineamount="10000">$10.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="false" data-removeweaponlicence="false">
                    <td class="paragraph">StVO §19</td>
                    <td class="fineText">Fahren ohne Erste-Hilfe-Kit (Kofferrraum)</td>
                    <td class="wantedAmount" data-wantedamount="0"></td>
                    <td class="fineAmount" data-fineamount="5000">$5.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="false" data-removeweaponlicence="false">
                    <td class="paragraph">StVO §20</td>
                    <td class="fineText">Fahren ohne Gurt (nicht angeschnallt)</td>
                    <td class="wantedAmount" data-wantedamount="0"></td>
                    <td class="fineAmount" data-fineamount="5000">$5.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="true" data-removeweaponlicence="false">
                    <td class="paragraph">StVO §24</td>
                    <td class="fineText">Fahrerflucht / Entziehung einer Verkehrskontrolle</td>
                    <td class="wantedAmount" data-wantedamount="0"><font class="extrawanted1 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="0">☆</font></td>
                    <td class="fineAmount" data-fineamount="10000">$10.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="true" data-removeweaponlicence="false">
                    <td class="paragraph">StVO §28</td>
                    <td class="fineText">Sharing-Cars mit Anti-Radar wurde nicht aus dem Verkehr gezogen</td>
                    <td class="wantedAmount" data-wantedamount="3">⭐⭐⭐</td>
                    <td class="fineAmount" data-fineamount="30000">$30.000</td>
                </tr>
                <tr class="categoryHeader">
                    <th></th>
                    <th>Psychische & Physische Integrität (StGB)</th>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)">
                    <td class="paragraph">StGB §3.1</td>
                    <td class="fineText">Beleidigung</td>
                    <td class="wantedAmount" data-wantedamount="0"></td>
                    <td class="fineAmount" data-fineamount="5000">$5.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)">
                    <td class="paragraph">StGB §3.2</td>
                    <td class="fineText">Belästigung</td>
                    <td class="wantedAmount" data-wantedamount="0"></td>
                    <td class="fineAmount" data-fineamount="5000">$5.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)">
                    <td class="paragraph">StGB §3.3</td>
                    <td class="fineText">Öffentliche Defamierung / Mobbing</td>
                    <td class="wantedAmount" data-wantedamount="0"></td>
                    <td class="fineAmount" data-fineamount="5000">$5.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)">
                    <td class="paragraph">StGB §4.1</td>
                    <td class="fineText">Versuchter Mord / Mord</td>
                    <td class="wantedAmount" data-wantedamount="4">⭐⭐⭐⭐</td>
                    <td class="fineAmount" data-fineamount="30000">$30.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)">
                    <td class="paragraph">StGB §4.2</td>
                    <td class="fineText">Körperverletzung</td>
                    <td class="wantedAmount" data-wantedamount="2">⭐⭐</td>
                    <td class="fineAmount" data-fineamount="15000">$15.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)">
                    <td class="paragraph">StGB §4.3</td>
                    <td class="fineText">Körperverletzung mit Todesfolge</td>
                    <td class="wantedAmount" data-wantedamount="3">⭐⭐⭐</td>
                    <td class="fineAmount" data-fineamount="20000">$20.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)">
                    <td class="paragraph">StGB §4.4</td>
                    <td class="fineText">Gewaltsame Drohung</td>
                    <td class="wantedAmount" data-wantedamount="1">⭐<font class="extrawanted1 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="5000">☆</font></td>
                    <td class="fineAmount" data-fineamount="5000">$5.000 pro ⭐</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)">
                    <td class="paragraph">StGB §4.5</td>
                    <td class="fineText">Fahrlässige Tötung</td>
                    <td class="wantedAmount" data-wantedamount="3">⭐⭐⭐</td>
                    <td class="fineAmount" data-fineamount="20000">$20.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)">
                    <td class="paragraph">StGB §5</td>
                    <td class="fineText">Sexuelle Belästigung</td>
                    <td class="wantedAmount" data-wantedamount="1">⭐<font class="extrawanted1 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="20000">☆</font><font class="extrawanted2 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="20000">☆</font></td>
                    <td class="fineAmount" data-fineamount="20000">$20.000 pro ⭐</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)">
                    <td class="paragraph">StGB §20</td>
                    <td class="fineText">Sachbeschädigung</td>
                    <td class="wantedAmount" data-wantedamount="0"><font class="extrawanted1 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="5000">☆</font><font class="extrawanted2 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="5000">☆</font></td>
                    <td class="fineAmount" data-fineamount="5000">$5.000 + $5.000 pro weiteren ⭐</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)">
                    <td class="paragraph">StGB §21</td>
                    <td class="fineText">Unterlassene Hilfeleistung</td>
                    <td class="wantedAmount" data-wantedamount="0"></td>
                    <td class="fineAmount" data-fineamount="5000">$5.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)">
                    <td class="paragraph">StGB §26</td>
                    <td class="fineText">Prostitution</td>
                    <td class="wantedAmount" data-wantedamount="0"></td>
                    <td class="fineAmount" data-fineamount="10000">$10.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)">
                    <td class="paragraph">StGB §27</td>
                    <td class="fineText">Freiheitsberaubung / Geiselnahmen / Entführung</td>
                    <td class="wantedAmount" data-wantedamount="3">⭐⭐⭐</td>
                    <td class="fineAmount" data-fineamount="30000">$30.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)">
                    <td class="paragraph">StGB §28</td>
                    <td class="fineText">Errichtung von Straßenbarrikaden</td>
                    <td class="wantedAmount" data-wantedamount="0"><font class="extrawanted1 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font><font class="extrawanted2 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font></td>
                    <td class="fineAmount" data-fineamount="10000">$10.000 + $10.000 pro weiteren ⭐</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)">
                    <td class="paragraph">StGB §31</td>
                    <td class="fineText">Verhalten in der Öffentlichkeit</td>
                    <td class="wantedAmount" data-wantedamount="0"></td>
                    <td class="fineAmount" data-fineamount="5000">$5.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)">
                    <td class="paragraph">StGB §32</td>
                    <td class="fineText">Rassismus / Nachstellung (Stalking)</td>
                    <td class="wantedAmount" data-wantedamount="3">⭐⭐⭐</td>
                    <td class="fineAmount" data-fineamount="15000">$15.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)">
                    <td class="paragraph">StGB §38</td>
                    <td class="fineText">Fischwilderei</td>
                    <td class="wantedAmount" data-wantedamount="0"></td>
                    <td class="fineAmount" data-fineamount="5000">$5.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)">
                    <td class="paragraph">StGB §39</td>
                    <td class="fineText">Verleumdung</td>
                    <td class="wantedAmount" data-wantedamount="0"><font class="extrawanted1 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="0">☆</font><font class="extrawanted2 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="0">☆</font><font class="extrawanted3 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="0">☆</font></td>
                    <td class="fineAmount" data-fineamount="30000">$30.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)">
                    <td class="paragraph">StGB §42</td>
                    <td class="fineText">Erpressung</td>
                    <td class="wantedAmount" data-wantedamount="3">⭐⭐⭐</td>
                    <td class="fineAmount" data-fineamount="45000">$45.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)">
                    <td class="paragraph">StGB §43</td>
                    <td class="fineText">Androhung einer Straftat</td>
                    <td class="wantedAmount" data-wantedamount="0"><font class="extrawanted1 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="5000">☆</font><font class="extrawanted2 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="5000">☆</font><font class="extrawanted3 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="5000">☆</font></td>
                    <td class="fineAmount" data-fineamount="20000">$20.000 + pro ⭐ $5.000 </td>
                </tr>
                <tr class="categoryHeader">
                    <th></th>
                    <th>Wirtschaftskriminalität (StGB)</th>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)">
                    <td class="paragraph">StGB §6 / §9</td>
                    <td class="fineText">Diebstahl / Betrug</td>
                    <td class="wantedAmount" data-wantedamount="0"><font class="extrawanted1 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="5000">☆</font><font class="extrawanted2 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="5000">☆</font><font class="extrawanted3 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="5000">☆</font></td>
                    <td class="fineAmount" data-fineamount="5000">$5.000 + $5.000 pro weiteren ⭐</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)">
                    <td class="paragraph">StGB §7</td>
                    <td class="fineText">Fahrzeug Diebstahl</td>
                    <td class="wantedAmount" data-wantedamount="2">⭐⭐</td>
                    <td class="fineAmount" data-fineamount="10000">$10.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)">
                    <td class="paragraph">StGB §10.1</td>
                    <td class="fineText">Besitz illegaler Gegenstände</td>
                    <td class="wantedAmount" data-wantedamount="2">⭐⭐</td>
                    <td class="fineAmount" data-fineamount="10000">$10.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)">
                    <td class="paragraph">StGB §11</td>
                    <td class="fineText">Raub</td>
                    <td class="wantedAmount" data-wantedamount="3">⭐⭐⭐</td>
                    <td class="fineAmount" data-fineamount="25000">$25.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)">
                    <td class="paragraph">StGB §12.1</td>
                    <td class="fineText">Geschäfts Raub / Ammu Rob (Deckt alle Strafen ab)</td>
                    <td class="wantedAmount" data-wantedamount="3">⭐⭐⭐</td>
                    <td class="fineAmount" data-fineamount="25000">$25.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)">
                    <td class="paragraph">StGB §12.3</td>
                    <td class="fineText">ATM Raub</td>
                    <td class="wantedAmount" data-wantedamount="1">⭐<font class="extrawanted1 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="5000">☆</font></td>
                    <td class="fineAmount" data-fineamount="5000">$5.000 pro ⭐</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)">
                    <td class="paragraph">StGB §13</td>
                    <td class="fineText">Einbruch</td>
                    <td class="wantedAmount" data-wantedamount="2">⭐⭐</td>
                    <td class="fineAmount" data-fineamount="15000">$15.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)">
                    <td class="paragraph">StGB §14</td>
                    <td class="fineText">Steuerhinterziehung</td>
                    <td class="wantedAmount" data-wantedamount="3">⭐⭐⭐</td>
                    <td class="fineAmount" data-fineamount="50000">$50.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)">
                    <td class="paragraph">StGB §30</td>
                    <td class="fineText">Hausfriedensbruch</td>
                    <td class="wantedAmount" data-wantedamount="3">⭐⭐⭐</td>
                    <td class="fineAmount" data-fineamount="25000">$25.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)">
                    <td class="paragraph">StGB §41.1</td>
                    <td class="fineText">Besitz staatliches Eigentum (Waffen)</td>
                    <td class="wantedAmount" data-wantedamount="3">⭐⭐⭐</td>
                    <td class="fineAmount" data-fineamount="50000">$50.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)">
                    <td class="paragraph">StGB §41.2</td>
                    <td class="fineText">Besitz staatliches Eigentum (Gegenstände)</td>
                    <td class="wantedAmount" data-wantedamount="3">⭐⭐⭐</td>
                    <td class="fineAmount" data-fineamount="50000">$50.000</td>
                </tr>
                <tr class="categoryHeader">
                    <th></th>
                    <th>Umgang mit Beamten (StGB)</th>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)">
                    <td class="paragraph">StGB §15.1</td>
                    <td class="fineText">Nichtbeachten einer amtlichen Anweisung</td>
                    <td class="wantedAmount" data-wantedamount="0"><font class="extrawanted1 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="0">☆</font><font class="extrawanted2 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="0">☆</font></td>
                    <td class="fineAmount" data-fineamount="10000">$10.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)">
                    <td class="paragraph">StGB §15.2</td>
                    <td class="fineText">Entziehung polizeilicher Maßnahmen</td>
                    <td class="wantedAmount" data-wantedamount="2">⭐⭐</td>
                    <td class="fineAmount" data-fineamount="10000">$10.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)">
                    <td class="paragraph">StGB §15.3</td>
                    <td class="fineText">Behinderung eines Beamten bei der Arbeit</td>
                    <td class="wantedAmount" data-wantedamount="1">⭐</td>
                    <td class="fineAmount" data-fineamount="10000">$10.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)">
                    <td class="paragraph">StGB §15.4</td>
                    <td class="fineText">Belästigung / Beleidigung eines Beamten</td>
                    <td class="wantedAmount" data-wantedamount="0"><font class="extrawanted1 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="7000">☆</font><font class="extrawanted2 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="7000">☆</font><font class="extrawanted3 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="7000">☆</font></td>
                    <td class="fineAmount" data-fineamount="0">$7.000 pro ⭐</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)">
                    <td class="paragraph">StGB §15.5</td>
                    <td class="fineText">Bestechung von Beamten</td>
                    <td class="wantedAmount" data-wantedamount="2">⭐⭐</td>
                    <td class="fineAmount" data-fineamount="10000">$10.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)">
                    <td class="paragraph">StGB §15.6</td>
                    <td class="fineText">Widerstand gegen Vollstreckungsbeamte</td>
                    <td class="wantedAmount" data-wantedamount="2">⭐⭐</td>
                    <td class="fineAmount" data-fineamount="20000">$20.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)">
                    <td class="paragraph">StGB §15.7</td>
                    <td class="fineText">Nicht ausweisen bei einer polizeilichen / Medizinischen Maßnahme</td>
                    <td class="wantedAmount" data-wantedamount="1">⭐</td>
                    <td class="fineAmount" data-fineamount="15000">$15.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)">
                    <td class="paragraph">StGB §16</td>
                    <td class="fineText">Befreiung von Gefangenen</td>
                    <td class="wantedAmount" data-wantedamount="3">⭐⭐⭐<font class="extrawanted1 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font><font class="extrawanted2 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font></td>
                    <td class="fineAmount" data-fineamount="30000">$10.000 pro ⭐</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)">
                    <td class="paragraph">StGB §19</td>
                    <td class="fineText">Falsche Namensangabe</td>
                    <td class="wantedAmount" data-wantedamount="0"><font class="extrawanted1 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="0">☆</font></td>
                    <td class="fineAmount" data-fineamount="10000">$10.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)">
                    <td class="paragraph">StGB §23</td>
                    <td class="fineText">Missbrauch von Notruf</td>
                    <td class="wantedAmount" data-wantedamount="0"><font class="extrawanted1 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="0">☆</font><font class="extrawanted2 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="0">☆</font></td>
                    <td class="fineAmount" data-fineamount="30000">$30.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)">
                    <td class="paragraph">StGB §24</td>
                    <td class="fineText">Amtsanmaßung</td>
                    <td class="wantedAmount" data-wantedamount="2">⭐⭐<font class="extrawanted1 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="0">☆</font></td>
                    <td class="fineAmount" data-fineamount="25000">$25.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)">
                    <td class="paragraph">StGB §29</td>
                    <td class="fineText">Missachtung eines Platzverweises</td>
                    <td class="wantedAmount" data-wantedamount="1">⭐<font class="extrawanted1 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="0">☆</font></td>
                    <td class="fineAmount" data-fineamount="20000">$20.000</td>
                </tr>
                <tr class="categoryHeader">
                    <th></th>
                    <th>Waffengesetz (WaffG)</th>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="false" data-removeweaponlicence="false">
                    <td class="paragraph">WaffG §1</td>
                    <td class="fineText">Besitz legaler Waffen ohne Waffenschein</td>
                    <td class="wantedAmount" data-wantedamount="1">⭐<font class="extrawanted1 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font></td>
                    <td class="fineAmount" data-fineamount="10000">$10.000 pro ⭐</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="false" data-removeweaponlicence="true">
                    <td class="paragraph">WaffG §5.1</td>
                    <td class="fineText">Besitz illegaler Waffen </td>
                    <td class="wantedAmount" data-wantedamount="2">⭐⭐<font class="extrawanted1 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font></td>
                    <td class="fineAmount" data-fineamount="20000">$10.000 pro ⭐</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="false" data-removeweaponlicence="true">
                    <td class="paragraph">WaffG §8.1</td>
                    <td class="fineText">Offenes Tragen einer Waffe</td>
                    <td class="wantedAmount" data-wantedamount="0"><font class="extrawanted1 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="5000">☆</font></td>
                    <td class="fineAmount" data-fineamount="5000">$5.000 + $5.000 pro weiteren ⭐</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="false" data-removeweaponlicence="true">
                    <td class="paragraph">WaffG §8.2</td>
                    <td class="fineText">Tragen einer Waffe in staatl. Einrichtungen</td>
                    <td class="wantedAmount" data-wantedamount="0"><font class="extrawanted1 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="0">☆</font></td>
                    <td class="fineAmount" data-fineamount="5000">$5.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="false" data-removeweaponlicence="true">
                    <td class="paragraph">WaffG §11</td>
                    <td class="fineText">Ungesetzlicher Waffenhandel (An- & Verkauf)</td>
                    <td class="wantedAmount" data-wantedamount="3">⭐⭐⭐</td>
                    <td class="fineAmount" data-fineamount="25000">$25.000</td>
                </tr>
                <tr class="categoryHeader">
                    <th></th>
                    <th>Sperrzonen / Absperrungen / Kapitalverbrechen (StGB)</th>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="false" data-removeweaponlicence="false">
                    <td class="paragraph">StGB §17</td>
                    <td class="fineText">Durchbrechen von Absperrungen</td>
                    <td class="wantedAmount" data-wantedamount="1">⭐<font class="extrawanted1 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="0">☆</font></td>
                    <td class="fineAmount" data-fineamount="15000">$15.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="false" data-removeweaponlicence="false">
                    <td class="paragraph">StGB §18</td>
                    <td class="fineText">Unerlaubtes Betreten von Sperrzonen</td>
                    <td class="wantedAmount" data-wantedamount="2">⭐⭐<font class="extrawanted1 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="0">☆</font></td>
                    <td class="fineAmount" data-fineamount="25000">$25.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="false" data-removeweaponlicence="false">
                    <td class="paragraph">StGB §18</td>
                    <td class="fineText">Unerlaubtes Betreten eines millitärischen Geländes</td>
                    <td class="wantedAmount" data-wantedamount="5">⭐⭐⭐⭐⭐</td>
                    <td class="fineAmount" data-fineamount="50000">$50.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="false" data-removeweaponlicence="false">
                    <td class="paragraph">StGB §18.1</td>
                    <td class="fineText">Unerlaubtes Betreten von Militärischen-Sperrzone</td>
                    <td class="wantedAmount" data-wantedamount="2">⭐⭐<font class="extrawanted1 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="0">☆</font></td>
                    <td class="fineAmount" data-fineamount="25000">$25.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="true" data-removeweaponlicence="false">
                    <td class="paragraph">StGB §18.1</td>
                    <td class="fineText">Unerlaubtes Befahren von Sperrzonen</td>
                    <td class="wantedAmount" data-wantedamount="2">⭐⭐<font class="extrawanted1 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="0">☆</font></td>
                    <td class="fineAmount" data-fineamount="25000">$25.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="false" data-removeweaponlicence="false">
                    <td class="paragraph">StGB §25</td>
                    <td class="fineText">Terrorismus (Deckt alle Strafen ab)</td>
                    <td class="wantedAmount" data-wantedamount="3">⭐⭐⭐</td>
                    <td class="fineAmount" data-fineamount="25000">$25.000</td>
                </tr>
                <tr class="categoryHeader">
                    <th></th>
                    <th>Betäubungsmittelgesetz (BtMG)</th>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="false" data-removeweaponlicence="false">
                    <td class="paragraph">BtMG §2.1</td>
                    <td class="fineText">Drogenbesitz Klein ab 1 - 5<br><i>Gilt nicht für Cannabis</i></td>
                    <td class="wantedAmount" data-wantedamount="0"><font class="extrawanted1 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="0">☆</font></td>
                    <td class="fineAmount" data-fineamount="5000">$5.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="false" data-removeweaponlicence="false">
                    <td class="paragraph">BtMG §2.1</td>
                    <td class="fineText">Drogenbesitz Mittel ab 6 - 20<br><i>Gilt nicht für Cannabis</i></td>
                    <td class="wantedAmount" data-wantedamount="1">⭐</td>
                    <td class="fineAmount" data-fineamount="10000">$10.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="false" data-removeweaponlicence="false">
                    <td class="paragraph">BtMG §2.1</td>
                    <td class="fineText">Drogenbesitz Groß 20+</td>
                    <td class="wantedAmount" data-wantedamount="2">⭐⭐</td>
                    <td class="fineAmount" data-fineamount="20000">$20.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="false" data-removeweaponlicence="false">
                    <td class="paragraph">BtMG §2.1</td>
                    <td class="fineText">Drogenhandel (An- & Verkauf)</td>
                    <td class="wantedAmount" data-wantedamount="3">⭐⭐⭐</td>
                    <td class="fineAmount" data-fineamount="30000">$30.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="false" data-removeweaponlicence="false">
                    <td class="paragraph">BtMG §2.1</td>
                    <td class="fineText">Drogen Herstellung</td>
                    <td class="wantedAmount" data-wantedamount="3">⭐⭐⭐</td>
                    <td class="fineAmount" data-fineamount="30000">$30.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="false" data-removeweaponlicence="false">
                    <td class="paragraph">BtMG §3</td>
                    <td class="fineText">Verkauf von Medizinprodukten bis 20 Medizinischen Gegenständen</td>
                    <td class="wantedAmount" data-wantedamount="1">⭐</td>
                    <td class="fineAmount" data-fineamount="10000">$10.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="false" data-removeweaponlicence="false">
                    <td class="paragraph">BtMG §3</td>
                    <td class="fineText">Verkauf von Medizinprodukten bis 50 Medizinischen Gegenständen</td>
                    <td class="wantedAmount" data-wantedamount="1">⭐<font class="extrawanted1 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="0">☆</font></td>
                    <td class="fineAmount" data-fineamount="20000">$20.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="false" data-removeweaponlicence="false">
                    <td class="paragraph">BtMG §3</td>
                    <td class="fineText">Verkauf von Medizinprodukten ab 51 Medizinischen Gegenständen</td>
                    <td class="wantedAmount" data-wantedamount="1">⭐<font class="extrawanted1 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="0">☆</font><font class="extrawanted2 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="0">☆</font></td>
                    <td class="fineAmount" data-fineamount="25000">$25.000</td>
                </tr>
                <tr class="categoryHeader">
                    <th></th>
                    <th>Beamtendienstgesetzbuch (BDG)</th>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="false" data-removeweaponlicence="false">
                    <td class="paragraph">BDG §2</td>
                    <td class="fineText">Verhaltenskodex</td>
                    <td class="wantedAmount" data-wantedamount="0"><font class="extrawanted1 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font><font class="extrawanted2 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font><font class="extrawanted3 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font><font class="extrawanted4 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font><font class="extrawanted5 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font></td>
                    <td class="fineAmount" data-fineamount="0">max. $50.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="false" data-removeweaponlicence="false">
                    <td class="paragraph">BDG §3</td>
                    <td class="fineText">Dienstpflichten des Beamten</td>
                    <td class="wantedAmount" data-wantedamount="0"><font class="extrawanted1 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font><font class="extrawanted2 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font><font class="extrawanted3 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font><font class="extrawanted4 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font><font class="extrawanted5 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font></td>
                    <td class="fineAmount" data-fineamount="0">max. $50.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="false" data-removeweaponlicence="false">
                    <td class="paragraph">BDG §7</td>
                    <td class="fineText">Bestechung</td>
                    <td class="wantedAmount" data-wantedamount="0"><font class="extrawanted1 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font><font class="extrawanted2 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font><font class="extrawanted3 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font><font class="extrawanted4 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font><font class="extrawanted5 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font></td>
                    <td class="fineAmount" data-fineamount="0">max. $50.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="false" data-removeweaponlicence="false">
                    <td class="paragraph">BDG §8</td>
                    <td class="fineText">Vorteilsnahme & Vorteilsgewährung</td>
                    <td class="wantedAmount" data-wantedamount="0"><font class="extrawanted1 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font><font class="extrawanted2 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font><font class="extrawanted3 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font><font class="extrawanted4 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font><font class="extrawanted5 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font></td>
                    <td class="fineAmount" data-fineamount="0">max. $50.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="false" data-removeweaponlicence="false">
                    <td class="paragraph">BDG §9</td>
                    <td class="fineText">Verleitung eines Untergebenen/Kollegen zur Straftat</td>
                    <td class="wantedAmount" data-wantedamount="0"><font class="extrawanted1 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font><font class="extrawanted2 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font><font class="extrawanted3 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font><font class="extrawanted4 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font><font class="extrawanted5 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font></td>
                    <td class="fineAmount" data-fineamount="0">max. $50.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="false" data-removeweaponlicence="false">
                    <td class="paragraph">BDG §10</td>
                    <td class="fineText">Unterlassen der Diensthandlung</td>
                    <td class="wantedAmount" data-wantedamount="0"><font class="extrawanted1 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font><font class="extrawanted2 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font><font class="extrawanted3 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font><font class="extrawanted4 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font><font class="extrawanted5 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font></td>
                    <td class="fineAmount" data-fineamount="0">max. $50.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="false" data-removeweaponlicence="false">
                    <td class="paragraph">BDG §11</td>
                    <td class="fineText">Falschbeurkundung im Amt</td>
                    <td class="wantedAmount" data-wantedamount="0"><font class="extrawanted1 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font><font class="extrawanted2 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font><font class="extrawanted3 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font><font class="extrawanted4 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font><font class="extrawanted5 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font></td>
                    <td class="fineAmount" data-fineamount="0">max. $50.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="false" data-removeweaponlicence="false">
                    <td class="paragraph">StGB §40</td>
                    <td class="fineText">Weitergabe von Staatseigentum</td>
                    <td class="wantedAmount" data-wantedamount="0"><font class="extrawanted1 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font><font class="extrawanted2 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font><font class="extrawanted3 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font><font class="extrawanted4 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font><font class="extrawanted5 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font></td>
                    <td class="fineAmount" data-fineamount="0">max. $50.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="false" data-removeweaponlicence="false">
                    <td class="paragraph">BDG §13</td>
                    <td class="fineText">Hochverrat im öffentlichen Dienst</td>
                    <td class="wantedAmount" data-wantedamount="0"><font class="extrawanted1 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font><font class="extrawanted2 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font><font class="extrawanted3 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font><font class="extrawanted4 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font><font class="extrawanted5 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font></td>
                    <td class="fineAmount" data-fineamount="0">max. $50.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="false" data-removeweaponlicence="false">
                    <td class="paragraph">BDG §14</td>
                    <td class="fineText">Umgehung von Strafprozessen</td>
                    <td class="wantedAmount" data-wantedamount="0"><font class="extrawanted1 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font><font class="extrawanted2 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font><font class="extrawanted3 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font><font class="extrawanted4 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font><font class="extrawanted5 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font></td>
                    <td class="fineAmount" data-fineamount="0">max. $50.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="false" data-removeweaponlicence="false">
                    <td class="paragraph">BDG §15</td>
                    <td class="fineText">Verschwörung</td>
                    <td class="wantedAmount" data-wantedamount="0"><font class="extrawanted1 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font><font class="extrawanted2 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font><font class="extrawanted3 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font><font class="extrawanted4 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font><font class="extrawanted5 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font></td>
                    <td class="fineAmount" data-fineamount="0">max. $50.000</td>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="false" data-removeweaponlicence="false">
                    <td class="paragraph">BDG §16</td>
                    <td class="fineText">Schmuggel</td>
                    <td class="wantedAmount" data-wantedamount="0"><font class="extrawanted1 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font><font class="extrawanted2 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font><font class="extrawanted3 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font><font class="extrawanted4 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font><font class="extrawanted5 extrawanted" onclick="JavaScript:toggleExtraWanted(event)" data-addedfine="10000">☆</font></td>
                    <td class="fineAmount" data-fineamount="0">max. $50.000</td>
                </tr>
                <tr class="categoryHeader">
                    <th></th>
                    <th>Strafprozessordnung (StPO)</th>
                </tr>
                <tr class="showing fine" onclick="JavaScript:selectFine(event)" data-removedriverlicence="false" data-removeweaponlicence="false">
                    <td class="paragraph">StPO §6</td>
                    <td class="fineText">Bußgelder nicht bezahlt (500k voll)</td>
                    <td class="wantedAmount" data-wantedamount="5">⭐⭐⭐⭐⭐</td>
                    <td class="fineAmount" data-fineamount="0"></td>
                </tr>
            </table>
        </div>

        <div id="results">
            <div id="resultsTitle">Ergebnis</div>
            <div id="infoTitle"><i>Indem man die grauen Wanteds anklickt kann man auswählen ob diese hinzugefügt werden.</i></div>
            <div class="result" id="fineResult"><b>Geldstrafe:</b> $0</div>
            <div class="result" id="wantedsResult"><b>Wanteds:</b> 0</div>
            <div class="result" id="reasonResult"><b>Grund:</b></div>
            <div class="result" id="charactersResult"><b>Zeichen:</b> 0/150</div>
            <div class="result" id="infoResult"><b>Information:</b></div>

            <div id="checkbox">
                <input id="checkbox_box" onchange="JavaScript:startCalculating()" type="checkbox" name="">
                <label style="line-height: 25px;" for="checkbox_box">Kurzer Grund</label>
            </div>

            <div id="plateInput"><input id="plateInput_input" type="text" maxlength="8" placeholder="Kennzeichen" oninput="JavaScript:startCalculating()"></div>
            <div id="blitzerInput"><input id="blitzerInput_input" type="text" maxlength="64" placeholder="Blitzerort" oninput="JavaScript:startCalculating()"></div>
            <div id="systemwantedsInput"><input id="systemwantedsInput_input" type="text" maxlength="1" placeholder="Systemwanteds" oninput="JavaScript:startCalculating()"></div>
            
            <div id="übergabeInput">
                <select name="" id="übergabeInput_select" onchange="JavaScript:startCalculating()">
                    <option value="none">TV-Abtransport auswählen</option>
                    <option value="lspd">Los Santos Police Department</option>
                    <option value="sahp">San Andreas Highway Patrol</option>
                    <option value="ng">National Guard</option>
                    <option value="usss">United States Secret Service</option>
                    <option value="fib">Federal Investigation Bureau</option>
                </select>
                <input id="übergabeInput_input" type="text" oninput="JavaScript:startCalculating()" placeholder="TV-Abtransport Beauftrager" maxlength="64">
            </div>

            <div id="notepadArea"><textarea id="notepadArea_input" name="" placeholder="Schreibe deine Notizen hier rein..." id="" rows="3"></textarea></div>

            <div id="reue">
                <input id="reue_box" onchange="JavaScript:startCalculating()" type="checkbox" name="">
                <label for="reue_box"><font id="checkboxfont1" style="line-height: 25px;">Reue</font><br><font style="font-size: 15px; font-weight: 400;">(Entfernt 2 Wanteds, 1 Wanted muss verbleiben gemäß StBG §35 - Reue)</font></label>
            </div>

            <div id="systemfehler">
                <input id="systemfehler_box" onchange="JavaScript:startCalculating()" type="checkbox" name="">
                <label style="line-height: 25px;" for="systemfehler_box">Systemfehler</label>
            </div>

            <button id="showButton" onclick="JavaScript:showFines()">Bußgelder anzeigen</button>

            <button id="showAttorneysButton" onclick="JavaScript:showAttorneys()">Anwaltsregister anzeigen</button>

            <button id="resetButton" onclick="JavaScript:resetButton()">Zurücksetzen</button>
        </div>

        <div id="finesListContainer" style="pointer-events: none;">
            <div id="finesListContainer_title">Auflistung der zu vergebenen Geldstrafen</div>
            <table id="finesListTable">
                <tr>
                    <th style="width: 80%;">Grund für die Geldstrafe</th>
                    <th style="width: 20%;">Bußgeld</th>
                </tr>

            </table>
        </div>

        <div id="attorneyContainer" style="pointer-events: none;">
            <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR9jL6XijVLrXvOs1bqjsE0cWfvER0e0VU4F8wh3wgVEIdY0wyIUAfxJaZZpwMPERPFGZHQ-_sdtjWi/pubhtml?gid=690010630&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
        </div>

        <div id="standartNotifications">
        </div>
    </div>
</body>
</html>


