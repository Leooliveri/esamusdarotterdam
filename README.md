# esamusdarotterdam
Simulazione esame 

Create un repo github privato e aggiungete marcorobol e jorgeramirez tra i collaboratori
Create app heroku e collegatelo al repo con deploy automatico o manuale
Inserite su https://docs.google.com/forms/d/e/1FAIpQLSdY_A_TASkZhAZH3ZyBmFImzCEusWDWKbFbFiacDdEZQQNJ7w/viewform?usp=sf_link il repo e heroku app url.
In locale, clonando il repo appena creato, sviluppate una funzione string_square(s) che riceve un parametro s e ritorna:
Se s e’ una stringa (anche vuota), il quadrato della lunghezza della stringa
In tutti gli altri casi ritorna -1
Fate in modo che chiamando  <your heroku app>/square?string=my_string via https get, si ottenga la risposta in json con oggetto {result: <result>}
Fate commit, push su github, deploy su heroku
Scrivete casi di test in jest
Commit, push (e deploy se nello scrivere i casi di test avete trovato errori nel codice)


Altre tipi di esercizi cose che potremmo chiedere in un esame:

Progettare API (su apiary)
Fare in modo che il repository git abbia certi commit e non altri (ovvero ad es giocare con branches, rebase…)
Setup di travis per un repo con deploy automatico su github
