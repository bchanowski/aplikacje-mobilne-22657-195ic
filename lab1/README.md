# Lab 1 -  aplikacja startowa: kalkulator  

Aplikację stworzyłem przy pomocy Expo, testowałem używając Android Studio z ustawieniami Google Pixel 5 z Androidem 12.0. Przy tworzeniu strony bazowałem na jednej z aplikacji przykładowych z treści zadania (https://github.com/ReactNativeSchool/react-native-calculator)  

###Działanie Aplikacji  

![Dzialanie strony](/assets/calc.gif "Dzialanie strony")  

###Omówienie  

W plikach Button.js oraz Row.js tworzę komponenty, którę będą odpowiadać za odpowiedne stworzenie przycisków i ich wygląd oraz rozmieszczenie.  

![Button](/assets/button.png "Button")   

![Row](/assets/row.png "Row")   

W App.js korzystam z tych komponentów i tworzę layout aplikacji. Po wciśnięciu jakiegokolwiek przycisku wykonuję się funkcja handleTap, która pobiera odpowiednie dane i przechodzi do calculator.js.  

![App](/assets/app.png "App")   

W calculator.js sprawdzamy jaki przycisk został wciśnięty i decydujemy co robimy dalej.  

![Calc](/assets/calculator.png "Calc")   


- Jeśli to numer to przchodzimy do funkcji handleNumber  
- Operator zmienia odpowiednie wartości w State  
- Znak równa się przechodzi do funkcji handleEqual  
- C(Clear) zmienia wszystkie wartości na default'owe  
- +/-, czyli negacja zmienia obecną liczbę na ujemną, bądź dodatnią  
- % zmienia proceny na liczbę (*0,01)  

![calcnumber](/assets/calcnumber.png "Calc")   

W handleNumber zmieniamy wartość currentValue na tą wciśniętą.  

![Calcif](/assets/calcif.png "Calcif")  

W handleEqual sprawdzamy jaki operator jest przypisany i w zależności od tego wykonujemy dane obliczenie.