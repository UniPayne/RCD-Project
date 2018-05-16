Anforderungs- und Entwurfsspezifikation (&quot;Pflichtenheft&quot;)

# Pflichtenheft [NAME DER APPLIKATION]

Von: Angelika Szewczyk &amp; Sean Payne

Titel, Autoren, (Inhaltsverzeichnis)

# 1 Einführung

## 1.1 Beschreibung

Im Rahmen der Veranstaltung „Rich Client Development&quot;, im sechsten Semester der FH-Bielefeld, soll eine Rich Client Applikation entwickelt werden. In diesem Fall wurde sich für [NAME DER APPLIKATION] entschieden. Der/Die/Das [NAME DER APPLIKATION] soll eine Webanwendung werden, welche das notieren eines Baseball – Spielablaufs, digitalisiert. Zudem soll sie den Ablauf und die Handhabung vereinfachen. Ziel ist es, dass die Statistikführer ganz einfach den Ablauf und das Spielgeschehen, digital notieren können, sodass am Ende vielleicht Kosten gespart und die Umwelt geschont werden kann. Zudem wäre es schön, wenn die verschiedenen Vereine dann noch ihre Statistiken, welche sich aus dem Spielverlauf ergibt, im Auge behalten können, um die Leistung der eigenen Mannschaft an die jeweilige Situation anzupassen.

##  1.2 Ziele

Ein Teilnehmer aus der Gruppe, tätigt in seiner Freizeit den Sport Baseball aus und dieser Person ist aufgefallen, dass die Statistiken immer noch auf dem Papier niedergeschrieben werden. Der Anwendungsbereich beschränkt sich erst auf die Baseballvereine in Deutschland. Da es sich aber quasi um eine „eigene Fachsprache&quot; handelt, sollte es am Ende auch nur ein kleines Problem sein, dieses Tool, für den internationalen Markt zu erweitern.



#  2 Anforderungen

##  2.1 Funktionale Anforderungen

Siehe Use-Case Diagramm [Folgt]

##  2.2 Nicht-funktionale Anforderungen

###  2.2.1 Rahmenbedingungen

Es ist wichtig, dass die Spieler-Statistiken,  beim Ausgeben dieser Statistiken den Baseball-Normen entsprechen. Des Weiteren sollte für Laien eine Legende dargestellt werden. Die Grundsprache der Webanwendung wird Deutsch sein.  Bei der Applikation muss es ebenfalls eine offline-ausführbare Webapplikation sein, da sich auf den meisten Baseball-Plätzen kein Internet zur Verfügung steht.

###  2.2.2 Betriebsbedingungen

Einen direkten Kunden gibt es nicht, da es sich um die Umsetzung für ein Modul in der Fachhochschule handelt. Aufgrund dessen werden die Betriebsbedingungen selber definiert. Eine Bedingung an die Webapplikation wird sein, dass sie sowohl Online- als auch Offline lauffähig sind. Des Weiteren ist es wichtig, dass die Informationen irgendwie (via Mail oder ähnlichem) an einer Stelle, zur Auswertung gesammelt werden. Für diesen Zweck ist es wichtig, dass die Informationen offline zwischengespeichert werden und dann, wenn das Endgerät wieder über eine Internetverbindung verfügt, die Daten synchronisiert werden. Ob dies über die Betätigung eines Knopfes oder automatisch passiert, ist irrelevant. Diese Webanwendung fürs erste, ausschließlich für die aktuellste Version (Version 63.0.3239.132) des Webbrowsers ‚Google Chrome&#39; implementiert. Falls es bei den anderen Webbrowsern fehlerfrei funktioniert, ist dies ein Bonus. Die Webapplikation wird in der Sprache „Javascript&quot; und „HTML&quot; implementiert. Dazu werden die Technologien „ReactJS&quot; und „ReduxJS&quot; genutzt.

###  2.2.3 Qualitätsmerkmale

Da das Spielgeschehen beim Sport Baseball sehr schnell verläuft, sollten die Informationen des sogenannten Scorers, fast in real-time niedergeschrieben sein. Die Webanwendung soll am Ende für den Scorer arbeiten und nicht anders herum. Deshalb sollten alle Befehle möglichst einfach und klar definiert sein. Um den Scorer am Ende dann die Arbeit abzunehmen, sollte bei Benutzung der Anwendung Situationsbedingt gehandelt werden können.

##  2.3 Graphische Benutzerschnittstelle

##  2.4 Anforderungen im Detail

### 2.4.1 User Stories

Als User, möchte ich, die Statistiken abrufen können, damit ich mich verbessern kann. Akzeptanz: Statistik korrekt anzeigen.

Als Scorer, möchte ich, das Spielgeschehen leicht und innovativ mitschreiben können, sodass meine Arbeit erleichtert wird. Akzeptanz: Spiele scoren können.

Als Administrator möchte ich die Rechte verwalten, sodass ich Scorer mit den dementsprechenden Rechten ausstatten kann.

### 2.4.2 MoSCoW – Priorisierung

#### Must Have

- --Die Applikation muss mit einer zentralen Datenbank funktionieren.
- --Die Applikation muss eine Benutzerverwaltung besitzen.
- --Die Applikation muss in der Lage sein, einfach die Baseballspiele zu dokumentieren.

#### Should have

- --Die Applikation sollte es erlauben, mehrere Mannschaften anzulegen
- --Die Applikation sollte es erlauben, mehrere Spieler anzulegen
- --Die Applikation sollte es erlauben, die Spieler den Teams zuzuweisen
- --Die Applikation sollte es erlauben,

#### Could have

- --Die Applikation könnte die Möglichkeit bieten, automatisch die Statistik zu erstellen
- --Die Applikation könnte ohne Internetverbindung funktionieren.
- --Die Applikation könnte dem Scorer die automatische Auswahl eines Spiels in einer Liste bieten.

#### Won&#39;t have

- --Die Applikation wird nicht

#  3 Technische Beschreibung

##  3.1 Systemübersicht



##  3.2 Softwarearchitektur

##  3.3 Datenmodell



##  3.4 Abläufe



##  3.5 Entwurf



#  4 Projektorganisation

##  4.1 Annahmen



##  4.2 Verantwortlichkeiten

##  4.3 Grober Projektplan



#  5 Anhänge

##  5.1 Glossar



##  5.2 Referenzen



##  5.3 Index