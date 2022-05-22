# Lab. nr 4 - obsługa danych wprowadzanych przez użytkownika + modale  
Aplikację stworzyłem przy pomocy Expo, testowałem używając Android Studio z ustawieniami Google Pixel 5 z Androidem 12.0.  
W każdej ze stron korzystałem ze styli z poprzednich labów (z małymi poprawkami)  

### App.js  
Dodanie dwóch nowych podstron  

![image](https://user-images.githubusercontent.com/92587389/166930923-c2a33463-0bfe-4f89-a359-39501d8b6075.png)  


### MainPage  

![image](https://user-images.githubusercontent.com/92587389/166931007-5a612898-4609-4042-ae5b-a923812c93be.png)
![image](https://user-images.githubusercontent.com/92587389/166931054-1d720cbf-8ec1-4d2b-8093-16dd14a10c49.png)  

### Text Input  
7 różnych inputów:
- Default - bez żadnych dodatkowych opcji
- Placeholder - z wpisanym napisem, gdy nic nie jest wpisane w input
- Default value - z wpisaną domyślną wartością
- Multiline - może przejść na nową/e linijke/i
- Max Length - maksymalna długość (10)
- Numeric keyboard + Secure text entry - po kliknięciu inputa pokazuje się klawiatura numeryczna + wpisywane wartości są chowane za *
- Editable false - nie możliwa edycja inputa  

![image](https://user-images.githubusercontent.com/92587389/166932021-39876274-4052-4eee-8534-f9f847da9a11.png)  

![image](https://user-images.githubusercontent.com/92587389/166932281-4b7cc94e-671f-4a6d-9eac-f19d4f486e8a.png)  

### Select  
Dwa selecty do wyboru:
- Team - drużyna kierowcy
- Driver - kierowca, opcje pokazują się dopiero po wybraniu drużyny, odpowiedni kierowcy są przypisani do drużyn  
Po wybraniu obu opcji na dole pokazuje się miejsce kierowcy w tabeli(na podstawie wartości value w tablicy)  

![image](https://user-images.githubusercontent.com/92587389/166932859-ed73da0d-aece-478e-aae8-e01abdb315e4.png)  

### Switch 
Po wciśnięciu switcha pokazuje się liczba pseudolosowa(jako modal)  

![image](https://user-images.githubusercontent.com/92587389/166934509-0a9c172e-cda3-4c28-83df-77b2b3d4ac9c.png)  

![image](https://user-images.githubusercontent.com/92587389/166933176-acb4fd48-72bb-4ddb-8beb-e8f0b22df2e8.png)  

![image](https://user-images.githubusercontent.com/92587389/166933209-c795539f-2954-40d8-b31b-255665f70dd0.png)  

![image](https://user-images.githubusercontent.com/92587389/166933243-621eee47-c663-4ff3-bd07-2fd9c91e4d0b.png)  

### Date Time  
Dwa przyciski:  
- Select date - po wciśnięciu pokazuje się ekran wyboru daty, po wybraniu pojawia się alert z wybraną datą oraz zmienia się wartość niżej  
- Select time - to samo ale mamy ekran wyboru czasu  

![image](https://user-images.githubusercontent.com/92587389/166933971-a6890003-90da-40f0-925f-9905ba607b1f.png)  

![image](https://user-images.githubusercontent.com/92587389/166934051-b48086ca-f7dc-49c0-9cc9-fda92393941b.png)  
 
![image](https://user-images.githubusercontent.com/92587389/166934106-df428999-a03f-4dc6-86bc-b54db8c82471.png)  

![image](https://user-images.githubusercontent.com/92587389/166934136-0f34da70-5b6e-4cea-baf9-41f1860206e2.png)  

![image](https://user-images.githubusercontent.com/92587389/166934187-c623da64-6827-4458-8a52-2b22747bc3b5.png)  

### Active  
Po kliknięciu przycisku dostajemy powiadomienie toast z informacją za jaki czas się ono zamknie  

![image](https://user-images.githubusercontent.com/92587389/166934767-d7fd7a38-609f-45c6-a536-a5f2e884b39a.png)  

![image](https://user-images.githubusercontent.com/92587389/166934804-a6cea7fd-a9cd-4a5c-8ddf-47bc2e5a5cb0.png)  

![image](https://user-images.githubusercontent.com/92587389/166934837-d5dc59c0-79e9-4613-8caa-f7584f49d386.png)  

![image](https://user-images.githubusercontent.com/92587389/166934874-a046d8a9-d8ff-4ac6-9b7d-ee5888aae8e9.png)  

![image](https://user-images.githubusercontent.com/92587389/166934910-4fef1128-4432-4a21-a94d-5edf2083b4dc.png)
