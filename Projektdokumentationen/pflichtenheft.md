## Pflichtenheft Scoring Helper von Angelika Szewczyk und Sean Payne
# Inhalt

1 Einführung

1.1 Beschreibung

1.2 Ziele

2 Anforderungen

2.1 Funktionale Anforderungen

2.1.1 Use-Case Diagramm

2.1.2 Funktionale Anforderungen

2.2 Nicht-funktionale Anforderungen

2.2.1 Rahmenbedingungen

2.2.2 Betriebsbedingungen

2.2.3 Qualitätsmerkmale

2.3 Graphische Benutzerschnittstelle

2.4 Anforderungen im Detail

2.4.1 MoSCoW – Priorisierung

2.4.1.1. Must Have

2.4.1.2. Should have

2.4.1.3. Could have

2.4.1.4. Won't have

3 Technische Beschreibung

3.1 Systemübersicht

3.2 Softwarearchitektur

3.3 Datenmodell

3.4 Abläufe

3.5 Entwurf

4 Projektorganisation

4.1 Annahmen

4.2 Verantwortlichkeiten

4.3 Grober Projektplan

5 Anhänge

5.1 Glossar

5.2 Referenzen


# 1 Einführung

## 1.1 Beschreibung

Im Rahmen der Veranstaltung „Rich Client Development&quot;, im sechsten Semester der FH-Bielefeld, soll eine Rich Client Applikation entwickelt werden. In diesem Fall wurde sich für den „Scoring-Helper&quot; entschieden. Der Scoring-Helper soll eine Webanwendung werden, welche das Scoren(1), digitalisiert. Zudem soll sie den Ablauf und die Handhabung vereinfachen. Ziel ist es, dass die Statistikführer ganz einfach den Ablauf und das Spielgeschehen, digital notieren können, sodass am Ende Kosten gespart und die Umwelt geschont werden kann.

##  1.2 Ziele

Ein Teilnehmer des Entwickler-Teams, spielt in seiner Freizeit Baseball und dieser Person ist aufgefallen, dass die Statistiken immer noch auf dem Papier niedergeschrieben werden. Der Anwendungsbereich beschränkt sich erst auf die Baseballvereine in Deutschland. Da es sich beim Scoren aber um eine „eigene Fachsprache&quot; handelt, sollte es am Ende weniger ein Problem sein, dieses Tool, für den internationalen Markt zu erweitern. Der Umfang der Software wird sich zu Beginn erst mal ausschließlich aus dem Ausfüllen und exportieren der ausgefüllten Score Sheets(2) beruhen. Falls es die Zeit zulässt, könnte man den Scoring-Helper um ein User-Management und einem intelligenten System erweitern. Eine Marktanforderung wird sein, dass wir uns an die Sprachnorm des Scorens halten, damit die Scorer(3), diese Applikation als Unterstützung zu ihren bereits angesammelten Fachjargon nutzen können. Da es heutzutage immer noch brauch ist, das Scoring, schriftlich mit Zettel und Stift zu machen, ist diese Applikation an sich schon ein Alleinstellungsmerkmal.

#  2 Anforderungen

##  2.1 Funktionale Anforderungen

### 2.1.1 Use-Case Diagramm

![alt text](https://github.com/UniPayne/RCD-Project/blob/master/Projektdokumentationen/UML/2.1.%20Use-Case%20Diagramm%20V1.0.png)
Figure 1: Use-Case Diagramm



### 2.1.2 Funktionale Anforderungen

- Die Software muss den Spielablauf richtig abgehen.
- Die Software muss automatisch das Inning(4) nach drei Outs(5) beenden.
- Die Software muss dem Anwender bei dem Ausfüllen alle möglichen Aktionen auswählen lassen können.
- Die Software muss die Aktionen visuell darstellen können.
- Die Software muss dem Anwender die Möglichkeit bieten, die Eingaben zu korrigieren.
- Die Software muss den User ermöglichen, den Score Sheet als PDF zu exportieren.

## 2.2 Nicht-funktionale Anforderungen

###  2.2.1 Rahmenbedingungen

Es ist wichtig, dass die Grundsprache der Webanwendung Deutsch ist. Genauso wichtig ist es, dass die Score Sheets nach Norm ausgefüllt werden. Es muss möglich sein, das Resultat des Score Sheets als PDF zu exportieren. Es ist ebenso wichtig, dass die Vorbedingungen ausgefüllt werden, bevor ein Spiel gestartet werden kann. Diese Vorbedingungen wären die folgenden:

- --Es muss ein Gast-Team eingetragen werden.
- --Es muss ein Heim-Team eingetragen werden.
- --Es muss das Datum und die Zeit des Spielstarts angegeben werden.
- --Der Austragungsort muss angegeben werden.
- --Der Scorer muss angeben, ob es sich um Baseball oder Softball handelt.
- --Die Spielnummer muss angegeben werden.
- --Die Liga muss angegeben werden.
- --Mindestens 7 Spieler müssen pro Team mit folgenden Informationen angegeben werden
  - Name
  - Vorname
  - Rückennummer
  - Position in Zahlen
  - Spielerpass Nummer

###  2.2.2 Betriebsbedingungen

Einen direkten Kunden gibt es nicht, da es sich um die Umsetzung für eine Veranstaltung in der Fachhochschule handelt. Aufgrund dessen werden die Betriebsbedingungen selber definiert. Eine Bedingung an die Webapplikation wird sein, dass sie sowohl Online- als auch offline lauffähig ist. Des Weiteren ist es wichtig, dass das fertig ausgefüllte Score Sheet exportiert werden kann. Diese Webanwendung fürs erste, ausschließlich für die aktuellste Version (Version 63.0.3239.132) des Webbrowsers ‚Google Chrome&#39; implementiert. Falls es bei den anderen Webbrowsern fehlerfrei funktioniert, ist dies ein Bonus. Die Webapplikation wird in der Sprache „Javascript&quot; und „HTML&quot; implementiert. Dazu werden die Technologien „ReactJS&quot; und „ReduxJS&quot; genutzt.

###  2.2.3 Qualitätsmerkmale

Da das Spielgeschehen, beim Sport Baseball, sehr schnell verläuft, sollten die Informationen des Scorers, fast in Echtzeit niedergeschrieben werden. Die Webanwendung soll am Ende für den Scorer arbeiten und nicht anders herum. Deshalb sollten alle Befehle möglichst einfach und klar definiert sein. Um den Scorer am Ende dann die Arbeit abzunehmen, sollte bei Benutzung der Anwendung Situationsbedingt gehandelt werden können.

## 2.3 Grafische Benutzerschnittstelle

![alt text](https://github.com/UniPayne/RCD-Project/blob/master/Projektdokumentationen/MockupsPNG/1.0%20Start.png) 
Figure 2: Startbildschirm

![alt text](https://github.com/UniPayne/RCD-Project/blob/master/Projektdokumentationen/MockupsPNG/2.0%20%C3%9Cbersicht.png)
Figure 3: Übersicht

![alt text](https://github.com/UniPayne/RCD-Project/blob/master/Projektdokumentationen/MockupsPNG/3.0%20SpielInformationen%20eintragen.png) 
Figure 4: Spielinformationen eintragen

![alt text](https://github.com/UniPayne/RCD-Project/blob/master/Projektdokumentationen/MockupsPNG/4.0%20Gast%20Team%20eintragen.png) 
Figure 5: Gast Team eintragen

![alt text](https://github.com/UniPayne/RCD-Project/blob/master/Projektdokumentationen/MockupsPNG/4.1%20Heim%20Team%20eintragen.png) 
Figure 6: Heim Team eintragen

![alt text](https://github.com/UniPayne/RCD-Project/blob/master/Projektdokumentationen/MockupsPNG/5.0%20Gast%20Team%20%C3%BCberpr%C3%BCfen.png)  
Figure 7: Gast-Team Einträge überprüfen

![alt text](https://github.com/UniPayne/RCD-Project/blob/master/Projektdokumentationen/MockupsPNG/5.1%20Heim%20Team%20%C3%BCberpr%C3%BCfen.png) 
Figure 8: Heim-Team Einträge überprüfen

![alt text](https://github.com/UniPayne/RCD-Project/blob/master/Projektdokumentationen/MockupsPNG/6.0%20Spieler%201.png) 
Figure 9: Spieler 1

![alt text](https://github.com/UniPayne/RCD-Project/blob/master/Projektdokumentationen/MockupsPNG/6.1%20Spieler%202.png) 
Figure 10: Spieler 1 aktion

![alt text](https://github.com/UniPayne/RCD-Project/blob/master/Projektdokumentationen/MockupsPNG/6.2%20Spieler%201%2C%20SB.png) 
Figure 11: Weitere Aktion

![alt text](https://github.com/UniPayne/RCD-Project/blob/master/Projektdokumentationen/MockupsPNG/6.3%20Spieler%201%2C%20OUT.png) 
Figure 12: Spieler 1, OUT- Dialog

![alt text](https://github.com/UniPayne/RCD-Project/blob/master/Projektdokumentationen/MockupsPNG/6.4%20Spieler%201%2C%20%20OUT%2C%20Spieler%202%2C%20am%20schlag.png) 
Figure 13: Spieler 1 Out - nach Anzeige

![alt text](https://github.com/UniPayne/RCD-Project/blob/master/Projektdokumentationen/MockupsPNG/7.0%20Beendetes%20Spiel.png) 
Figure 14: Beendetes Spiel

![alt text](https://github.com/UniPayne/RCD-Project/blob/master/Projektdokumentationen/UML/2.3%20Navigation%20der%20Mockups.png) 
Figure 15: Navigation durch die Mockups

##  2.4 Anforderungen im Detail

### MoSCoW – Priorisierung

### Must Have

- Die Applikation muss in der Lage sein, die vorgegebenen Spielinformationen eintragen zu lassen.
- Die Applikation muss in der Lage sein, die vorgegebenen Spielinformationen anzuzeigen.
- Die Applikation muss in der Lage sein, dem User die Möglichkeit zu geben, die Mannschaften anlegen zu lassen.
- Die Applikation muss in der Lage sein, verschiedene Baseball typische Aktionen darstellen zu lassen.
- Die Applikation muss in der Lage sein, die Spieler automatisch, in der eingegebenen Reihenfolge, am Zug sein zu lassen.
- Die Applikation muss dazu in der Lage sein, die richtigen Spieler-Status, bei betroffener Aktion, zu ändern.
- Die Applikation muss in der Lage sein, den Score Sheet, regelkonform als PDF exportieren zu lassen.

### Should have

- Die Applikation sollte in der Lage sein, sowohl online, als auch offline zu funktionieren.
- Die Applikation sollte in der Lage sein, die Statistiken aus dem gespielten Spiel exportieren zu lassen.
- Die Applikation sollte eine Hilfe-Funktion bieten, um den Anwender die Funktionalität und den Ablauf zu erklären.

### Could have

- Die Applikation könnte in der Lage sein, mithilfe einer zentralen Datenbank zu agieren.
- Die Applikation könnte in der Lage sein, eine Benutzerverwaltung zu besitzen.
- Die Applikation könnte in der Lage sein, die Teams zu speichern.
- Die Applikation könnte in der Lage sein, die Spieler zu speichern.
- Die Applikation könnte in der Lage sein, die Spieler den Teams zuzuweisen.
- Die Applikation könnte in der Lage sein, die Statistiken der einzelnen Spieler in die Datenbank abzuspeichern.

### Won't have

- Die Applikation wird keine Benachrichtigung über die verschiedenen Spielergebnisse liefern.



# 3 Technische Beschreibung

##  3.1 Systemübersicht

Das Kommunikationsprotokoll was in dieser Webanwendung genutzt wird, wird erst mal ausschließlich auf HTTP beruhen. Da die Webanwendung in der ersten Phase, weder Interaktion mit einer zentralen Datenbank, noch Interaktionen mit sensiblen Userdaten (Benutzernamen und Kennwort) vorsieht, sollte dies mehr als ausreichend sein.

 
![alt text](https://github.com/UniPayne/RCD-Project/blob/master/Projektdokumentationen/UML/3.1%20Systemarchitekturdiagramm.png) 
Figure 16: Systemarchitektur

##  3.2 Softwarearchitektur

![alt text](https://github.com/UniPayne/RCD-Project/blob/master/Projektdokumentationen/UML/3.2%20Softwarearchitektur.png) 
Figure 17: Softwarearchitekturdiagramm

##  3.3 Abläufe

Die Abläufe können den Use-Cases aus dem Anhang entnommen werden.

![alt text](https://github.com/UniPayne/RCD-Project/blob/master/Projektdokumentationen/UML/3.4.1.%20Neues%20Spiel%20erstellen.png) 
Figure 18: Use Case 1: Neues Spiel erstellen

![alt text](https://github.com/UniPayne/RCD-Project/blob/master/Projektdokumentationen/UML/3.4.2.%20Spielinformationen%20eintragen.png) 
Figure 19: Use Case 2: Spielinformationen eintragen

![alt text](https://github.com/UniPayne/RCD-Project/blob/master/Projektdokumentationen/UML/3.4.3.%20Teamdetails%20eintragen.png) 
Figure 20: Use Case 3: Teamdetails eintragen

![alt text](https://github.com/UniPayne/RCD-Project/blob/master/Projektdokumentationen/UML/3.4.4.%20Spielgeschehen%20eintragen.png) 
Figure 21: Use Case 4: Spielgeschehen eintragen

![alt text](https://github.com/UniPayne/RCD-Project/blob/master/Projektdokumentationen/UML/3.4.5.%20Ergebnis%20als%20PDF%20exportieren.png) 
Figure 22: Use Case 5: Spielgeschehen  als PDF exportieren

![alt text](https://github.com/UniPayne/RCD-Project/blob/master/Projektdokumentationen/UML/3.4.6%20Ablauf.png) 
Figure 23: Gesamtablauf der Use Cases

#  4 Projektorganisation

##  4.1 Annahmen

Es ist notwendig, dass die Applikation alle möglichen Aktionen, die es beim Baseball gibt, einfach und logisch ausführen kann. Des Weiteren müssen diese Aktionen auch in der Applikation dargestellt werden. Ist es genauso wichtig, dass die Applikation sowohl das Schriftliche, als auch das Grafische nach Norm darstellt.

Die verwendete Technologie wird HTML in Verbindung mit JavaScript sein. Vor allem wird sich dort auf das reduxjs und das reactjs konzentriert, da sich nur der Inhalt der Daten und nicht das grafische ändert.

Die Webanwendung soll mit Leichtigkeit erweitert werden können. Zum Beispiel ist es in späteren Versionen so gedacht, dass ein Statistik System die Spielstatistik von jedem Spieler anlegt. Des Weiteren könnte die Arbeit der Scorer abgenommen werden, indem die Mannschaften und die Spieler dieser Mannschaften aus einer Datenbank ausgewählt werden können.

##  4.2 Verantwortlichkeiten

Da es sich bei unserer Gruppe um eine zwei Personen Gruppe handelt, teilen wird die Arbeit wie folgt aufgeteilt:

Frontend: Angelika Szewczyk

Backend: Sean Payne

Dementsprechend wird sich die Frau Szewczyk, um das grafische Userinterface kümmern und der Herr Payne um die berechnende Logik.



##  4.3 Grober Projektplan

![alt text](https://github.com/UniPayne/RCD-Project/blob/master/Projektdokumentationen/Grober%20Projektplan.png) 
Figure 24: Grober Projektplan

#  5 Anhänge

##  5.1 Glossar

Scoren(1): Das Scoren beschreibt die Tätigkeit die man ausübt, wenn man das Spielgeschehen niederschreibt.

Score Sheets(2): Die Score Sheets bezeichnen die offiziellen Papiere, auf denen das Spielgeschehen niedergeschrieben wird.

Scorer(3): Ein Scorer ist eine Person, welche das Spielgeschehen eines Baseball Spiels niederschreibt.

Inning(4): Ein Inning ist beim Baseball ein Spielabschnitt, in dem die Mannschaften einmal in der Offensive und einmal in der Defensive waren.

Outs(5): Ein Halbinning wird durch 3 Innings beendet. Dadurch darf die Mannschaft dann von der Offensive in die Defensive wechseln.

##  5.2 Referenzen

https://de.wikipedia.org/wiki/Scoring\_(Baseball)

https://www.artofmanliness.com/articles/how-to-score-a-baseball-game-with-pencil-and-paper/

http://www.sportspectator.com/fancentral/baseball/stats/linescore.html
