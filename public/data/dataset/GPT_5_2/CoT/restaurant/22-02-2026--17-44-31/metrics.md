# Generation 1
## Category baseline
```
!new Restaurant('R1')
!R1.name := 'Harbor & Hearth Bistro'

!new Owner('O1')
!O1.name := 'Amina El-Sayed'
!O1.percentageShares := 60

!new Owner('O2')
!O2.name := 'Luca Bianchi'
!O2.percentageShares := 40

!insert (R1, O1) into RestaurantOwner
!insert (R1, O2) into RestaurantOwner

!new RegularCustomer('C1')
!C1.name := 'María Gómez'
!C1.prefferedLanguage := #Spanish

!new HeadWaiter('HW1')
!HW1.name := 'Heinrich Keller'
!HW1.dateOfBirth := Date('1978-11-02')
!HW1.phoneNumber := '+49-30-555-0182'

!new Waiter('W1')
!W1.name := 'Sofía Álvarez'
!W1.dateOfBirth := Date('1996-05-14')
!W1.phoneNumber := '+34-91-555-0101'
!W1.spokenLanguage := #Spanish

!new Waiter('W2')
!W2.name := 'Ethan Miller'
!W2.dateOfBirth := Date('2001-09-21')
!W2.phoneNumber := '+1-617-555-0147'
!W2.spokenLanguage := #English

!insert (HW1, W1) into HeadWaiterWaiter
!insert (HW1, W2) into HeadWaiterWaiter

!new Manager('M1')
!M1.name := 'Giulia Conti'
!M1.dateOfBirth := Date('1985-01-30')
!M1.phoneNumber := '+39-06-555-0120'

!new Cook('K1')
!K1.name := 'Noah Stein'
!K1.dateOfBirth := Date('1988-07-08')
!K1.phoneNumber := '+1-212-555-0177'
!K1.yearsOfExperience := 12

!new Cook('K2')
!K2.name := 'Leila Farouk'
!K2.dateOfBirth := Date('1991-06-23')
!K2.phoneNumber := '+44-20-555-0111'
!K2.yearsOfExperience := 8

!new Chef('CH1')
!CH1.name := 'Priya Nair'
!CH1.dateOfBirth := Date('1990-03-19')
!CH1.phoneNumber := '+91-22-555-0133'

!new Chef('CH2')
!CH2.name := 'Kenji Sato'
!CH2.dateOfBirth := Date('1992-12-05')
!CH2.phoneNumber := '+81-3-555-0168'

!insert (CH1, K1) into ChefCook
!insert (CH2, K2) into ChefCook

!new BusDriver('BD1')
!BD1.name := 'Omar Haddad'
!BD1.dateOfBirth := Date('1975-04-11')
!BD1.phoneNumber := '+44-20-555-0199'
!BD1.driverLicenseNr := 'UK-DLN-7781-OM'

!new Individual('IR1')
!IR1.time := Time('19:00')
!IR1.date := Date('2026-03-05')
!IR1.numberPeople := 2
!IR1.name := 'María Gómez'
!IR1.phoneNumber := '+34-600-123-456'
!IR1.number := 501
!IR1.seating := #Inside
!IR1.smoking := #NonSmoking

!insert (R1, IR1) into RestaurantReservation
!insert (IR1, C1) into ReservationCustomer
!insert (IR1, W1) into ReservationWaiter

!new Banquet('BR1')
!BR1.time := Time('20:00')
!BR1.date := Date('2026-03-12')
!BR1.numberPeople := 30
!BR1.name := 'Dr. S. Patel'
!BR1.phoneNumber := '+1-415-555-0139'
!BR1.number := 880
!BR1.groupName := 'Bay Area Robotics Society'
!BR1.paymentMethod := #CreditCard
!BR1.busService := true

!insert (R1, BR1) into RestaurantReservation
!insert (BR1, W1) into ReservationWaiter
!insert (BR1, W2) into ReservationWaiter
!insert (BR1, BD1) into BanquetBusDriver

!new Table('T10')
!T10.number := 10
!T10.description := 'Two-top by the window near the fireplace'
!T10.capacity := 4

!new Table('T20')
!T20.number := 20
!T20.description := 'Banquet table left side, near AV screen'
!T20.capacity := 12

!new Table('T21')
!T21.number := 21
!T21.description := 'Banquet table center, open floor'
!T21.capacity := 12

!new Table('T22')
!T22.number := 22
!T22.description := 'Banquet table right side, near patio doors'
!T22.capacity := 8

!insert (IR1, T10) into ReservationTable
!insert (BR1, T20) into ReservationTable
!insert (BR1, T21) into ReservationTable
!insert (BR1, T22) into ReservationTable

!new Allergen('A_LAC')
!A_LAC.type := #Lactose

!new Allergen('A_SEA')
!A_SEA.type := #Seafood

!new Allergen('A_NUT')
!A_NUT.type := #Nuts

!new Allergen('A_GLU')
!A_GLU.type := #Gluten

!new FoodItem('F101')
!F101.number := 101
!F101.description := 'Wheat flour'
!F101.purchaseFlag := true
!F101.unit := #Pound

!new FoodItem('F102')
!F102.number := 102
!F102.description := 'Whole milk'
!F102.purchaseFlag := true
!F102.unit := #Ounce

!new FoodItem('F103')
!F103.number := 103
!F103.description := 'Shrimp (peeled)'
!F103.purchaseFlag := true
!F103.unit := #Pound

!new FoodItem('F104')
!F104.number := 104
!F104.description := 'Almonds (sliced)'
!F104.purchaseFlag := true
!F104.unit := #Gram

!new FoodItem('F105')
!F105.number := 105
!F105.description := 'Fresh basil'
!F105.purchaseFlag := true
!F105.unit := #Gram

!insert (F101, A_GLU) into FoodItemAllergen
!insert (F102, A_LAC) into FoodItemAllergen
!insert (F103, A_SEA) into FoodItemAllergen
!insert (F104, A_NUT) into FoodItemAllergen

!new MenuItem('MI1')
!MI1.description := 'Crispy Calamari with lemon-basil aioli'
!MI1.prepTime := 12.5
!MI1.classification := #Apetizer

!new MenuItem('MI2')
!MI2.description := 'Creamy mushroom pasta (house-made noodles)'
!MI2.prepTime := 18.0
!MI2.classification := #Main

!new MenuItem('MI3')
!MI3.description := 'Almond honey tart'
!MI3.prepTime := 9.0
!MI3.classification := #Dessert

!insert (MI1, CH1) into MenuItemChef
!insert (MI2, CH1) into MenuItemChef
!insert (MI3, CH2) into MenuItemChef

!insert (MI1, F103) into MenuItemFoodItem
!insert (MI1, F105) into MenuItemFoodItem
!insert (MI1, F102) into MenuItemFoodItem

!insert (MI2, F101) into MenuItemFoodItem
!insert (MI2, F102) into MenuItemFoodItem

!insert (MI3, F104) into MenuItemFoodItem
!insert (MI3, F101) into MenuItemFoodItem
!insert (MI3, F102) into MenuItemFoodItem

!new ItemOrder('IO1')
!IO1.time := Time('19:12')

!new ItemOrder('IO2')
!IO2.time := Time('19:35')

!new ItemOrder('IO3')
!IO3.time := Time('20:20')

!insert (IR1, IO1) into ReservationItemOrdered
!insert (IR1, IO2) into ReservationItemOrdered
!insert (BR1, IO3) into ReservationItemOrdered

!insert (IO1, MI1) into ItemOrderMenuItem
!insert (IO2, MI2) into ItemOrderMenuItem
!insert (IO3, MI3) into ItemOrderMenuItem

!new DietaryRequirement('DR1')
!DR1.diet := #Halal

!new ReportedAllergy('RA1')
!RA1.allergen := #Nuts
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 180 | 0.00% |
| Multiplicities Errors | 0 | 38 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 11 | 0.00% |
| Phones | 0 | 11 | 0.00% |

## Category boundary
```
!new Restaurant('R2')
!R2.name := 'Café Fjord'

!new Owner('O3')
!O3.name := 'Amina El‑Masri'
!O3.percentageShares := 100
!insert (R2, O3) into RestaurantOwner

!new HeadWaiter('HW2')
!HW2.name := 'Luca Bianchi'
!HW2.dateOfBirth := Date('1979-11-02')
!HW2.phoneNumber := '+39 02 5550 100'

!new Waiter('W3')
!W3.name := 'Sofía García'
!W3.dateOfBirth := Date('2001-06-18')
!W3.phoneNumber := '+34 91 555 0101'
!W3.spokenLanguage := #Spanish
!insert (HW2, W3) into HeadWaiterWaiter

!new Cook('K3')
!K3.name := 'Hans Schneider'
!K3.dateOfBirth := Date('1990-01-15')
!K3.phoneNumber := '+49 30 5550 222'
!K3.yearsOfExperience := 0

!new Chef('CH3')
!CH3.name := 'Giulia Rossi'
!CH3.dateOfBirth := Date('1995-09-09')
!CH3.phoneNumber := '+39 06 5550 333'
!insert (CH3, K3) into ChefCook

!new Manager('M2')
!M2.name := 'Keiko Tanaka'
!M2.dateOfBirth := Date('1986-04-21')
!M2.phoneNumber := '+81 3 5550 444'

!new MenuItem('MI4')
!MI4.description := 'Seasonal Sorbet (Chef’s zero-prep demo)'
!MI4.prepTime := 0.0
!MI4.classification := #Dessert
!insert (MI4, CH3) into MenuItemChef

!new FoodItem('F106')
!F106.number := 1
!F106.description := 'Sea salt flakes'
!F106.purchaseFlag := true
!F106.unit := #Gram

!new Allergen('A_NUT2')
!A_NUT2.type := #Nuts

!new Individual('IR2')
!IR2.number := 1
!IR2.date := Date('2026-03-01')
!IR2.time := Time('17:00')
!IR2.numberPeople := 1
!IR2.name := 'N. Min'
!IR2.phoneNumber := '000-000-0000'
!IR2.seating := #Inside
!IR2.smoking := #NonSmoking
!insert (R2, IR2) into RestaurantReservation
!insert (IR2, W3) into ReservationWaiter

!new Table('T1')
!T1.number := 1
!T1.description := 'Single stool at the espresso counter'
!T1.capacity := 1
!insert (IR2, T1) into ReservationTable

!new Banquet('BR2')
!BR2.number := 2
!BR2.date := Date('2026-03-01')
!BR2.time := Time('19:00')
!BR2.numberPeople := 20
!BR2.name := 'Göteborg Alumni Contact'
!BR2.phoneNumber := '+46 31 555 0202'
!BR2.groupName := 'Göteborg Alumni 2006'
!BR2.paymentMethod := #Cash
!BR2.busService := false
!insert (R2, BR2) into RestaurantReservation
!insert (BR2, W3) into ReservationWaiter

!new Table('T2')
!T2.number := 2
!T2.description := 'Long communal table, left side'
!T2.capacity := 10
!insert (BR2, T2) into ReservationTable

!new Table('T3')
!T3.number := 3
!T3.description := 'Long communal table, right side'
!T3.capacity := 10
!insert (BR2, T3) into ReservationTable

!new RegularCustomer('C2')
!C2.name := 'Marek Nowak'
!C2.prefferedLanguage := #German
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 83 | 0.00% |
| Multiplicities Errors | 0 | 11 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 7 | 0.00% |
| Phones | 0 | 7 | 0.00% |

## Category complex
```
!new Restaurant('R4')
!R4.name := 'La Estrella del Patio'

!new Restaurant('R5')
!R5.name := 'AlpenKüche Wirtshaus'

!new Owner('O6')
!O6.name := 'Carmen Rivas'
!O6.percentageShares := 55
!insert (R4, O6) into RestaurantOwner

!new Owner('O7')
!O7.name := 'Amina El‑Masri'
!O7.percentageShares := 25
!insert (R4, O7) into RestaurantOwner

!new Owner('O8')
!O8.name := 'Jordi Ferrer'
!O8.percentageShares := 20
!insert (R4, O8) into RestaurantOwner

!new Owner('O9')
!O9.name := 'Lukas Steiner'
!O9.percentageShares := 60
!insert (R5, O9) into RestaurantOwner

!new Owner('O10')
!O10.name := 'Hana Kovač'
!O10.percentageShares := 40
!insert (R5, O10) into RestaurantOwner

!new RegularCustomer('C3')
!C3.name := 'Sofía Martínez'
!C3.prefferedLanguage := #Spanish

!new RegularCustomer('C4')
!C4.name := 'Thomas Bauer'
!C4.prefferedLanguage := #German

!new HeadWaiter('HW4')
!HW4.name := 'Marisol Núñez'
!HW4.dateOfBirth := Date('1982-04-19')
!HW4.phoneNumber := '+34 600 112 233'

!new Waiter('W6')
!W6.name := 'Diego Romero'
!W6.dateOfBirth := Date('1996-09-03')
!W6.phoneNumber := '+34 611 222 333'
!W6.spokenLanguage := #Spanish
!insert (HW4, W6) into HeadWaiterWaiter

!new Waiter('W7')
!W7.name := 'Erin Walsh'
!W7.dateOfBirth := Date('1993-01-21')
!W7.phoneNumber := '+34 622 333 444'
!W7.spokenLanguage := #English
!insert (HW4, W7) into HeadWaiterWaiter

!new Waiter('W8')
!W8.name := 'Giulia Conti'
!W8.dateOfBirth := Date('1998-07-12')
!W8.phoneNumber := '+34 633 444 555'
!W8.spokenLanguage := #Italian
!insert (HW4, W8) into HeadWaiterWaiter

!new HeadWaiter('HW5')
!HW5.name := 'Petra König'
!HW5.dateOfBirth := Date('1979-12-02')
!HW5.phoneNumber := '+49 151 100 2003'

!new Waiter('W9')
!W9.name := 'Jonas Meier'
!W9.dateOfBirth := Date('1991-03-18')
!W9.phoneNumber := '+49 151 100 2004'
!W9.spokenLanguage := #German
!insert (HW5, W9) into HeadWaiterWaiter

!new Waiter('W10')
!W10.name := 'Elena García'
!W10.dateOfBirth := Date('1994-05-27')
!W10.phoneNumber := '+49 151 100 2005'
!W10.spokenLanguage := #Spanish
!insert (HW5, W10) into HeadWaiterWaiter

!new Cook('K5')
!K5.name := 'Ahmed Al‑Khatib'
!K5.dateOfBirth := Date('1985-11-02')
!K5.phoneNumber := '+34 699 555 111'
!K5.yearsOfExperience := 12

!new Cook('K6')
!K6.name := 'Sabine Fischer'
!K6.dateOfBirth := Date('1988-06-14')
!K6.phoneNumber := '+49 170 777 888'
!K6.yearsOfExperience := 8

!new Cook('K7')
!K7.name := 'Tariq Nasser'
!K7.dateOfBirth := Date('1991-02-28')
!K7.phoneNumber := '+49 170 888 999'
!K7.yearsOfExperience := 6

!new Chef('CH6')
!CH6.name := 'Nuria Vidal'
!CH6.dateOfBirth := Date('1990-02-10')
!CH6.phoneNumber := '+34 688 111 222'

!new Chef('CH7')
!CH7.name := 'Marco Bianchi'
!CH7.dateOfBirth := Date('1992-10-05')
!CH7.phoneNumber := '+34 688 333 444'

!new Chef('CH8')
!CH8.name := 'Anja Richter'
!CH8.dateOfBirth := Date('1987-08-30')
!CH8.phoneNumber := '+49 170 333 222'

!insert (CH6, K5) into ChefCook
!insert (CH7, K7) into ChefCook
!insert (CH8, K6) into ChefCook

!new Manager('M5')
!M5.name := 'Víctor Salas'
!M5.dateOfBirth := Date('1976-01-09')
!M5.phoneNumber := '+34 677 909 808'

!new Manager('M6')
!M6.name := 'Katharina Schmid'
!M6.dateOfBirth := Date('1980-09-22')
!M6.phoneNumber := '+49 160 222 3344'

!new BusDriver('BD3')
!BD3.name := 'Raúl Ortega'
!BD3.dateOfBirth := Date('1971-03-11')
!BD3.phoneNumber := '+34 610 909 100'
!BD3.driverLicenseNr := 'ES-B-783991'

!new BusDriver('BD4')
!BD4.name := 'Samira Haddad'
!BD4.dateOfBirth := Date('1983-12-25')
!BD4.phoneNumber := '+34 610 909 101'
!BD4.driverLicenseNr := 'ES-D-552017'

!new Allergen('A_LAC3')
!A_LAC3.type := #Lactose

!new Allergen('A_GLU3')
!A_GLU3.type := #Gluten

!new Allergen('A_NUT3')
!A_NUT3.type := #Nuts

!new Allergen('A_SEA3')
!A_SEA3.type := #Seafood

!new FoodItem('F301')
!F301.number := 101
!F301.description := 'Wheat flour'
!F301.purchaseFlag := true
!F301.unit := #Pound
!insert (F301, A_GLU3) into FoodItemAllergen

!new FoodItem('F302')
!F302.number := 102
!F302.description := 'Cow milk'
!F302.purchaseFlag := true
!F302.unit := #Ounce
!insert (F302, A_LAC3) into FoodItemAllergen

!new FoodItem('F303')
!F303.number := 103
!F303.description := 'Almonds (toasted)'
!F303.purchaseFlag := true
!F303.unit := #Gram
!insert (F303, A_NUT3) into FoodItemAllergen

!new FoodItem('F304')
!F304.number := 104
!F304.description := 'Shrimp (peeled)'
!F304.purchaseFlag := true
!F304.unit := #Pound
!insert (F304, A_SEA3) into FoodItemAllergen

!new FoodItem('F305')
!F305.number := 105
!F305.description := 'Tomatoes (ripe)'
!F305.purchaseFlag := true
!F305.unit := #Pound

!new FoodItem('F306')
!F306.number := 106
!F306.description := 'Chickpeas (cooked)'
!F306.purchaseFlag := false
!F306.unit := #Pound

!new FoodItem('F307')
!F307.number := 107
!F307.description := 'Eggs (free-range)'
!F307.purchaseFlag := true
!F307.unit := #Dozen

!new FoodItem('F308')
!F308.number := 108
!F308.description := 'Puff pastry sheets'
!F308.purchaseFlag := true
!F308.unit := #Sheet
!insert (F308, A_GLU3) into FoodItemAllergen
!insert (F308, A_LAC3) into FoodItemAllergen

!new FoodItem('F309')
!F309.number := 109
!F309.description := 'Butter'
!F309.purchaseFlag := true
!F309.unit := #Ounce
!insert (F309, A_LAC3) into FoodItemAllergen

!new FoodItem('F310')
!F310.number := 110
!F310.description := 'Barley malt'
!F310.purchaseFlag := true
!F310.unit := #Gram
!insert (F310, A_GLU3) into FoodItemAllergen

!new MenuItem('MI10')
!MI10.description := 'Pan con tomate'
!MI10.prepTime := 6.0
!MI10.classification := #Apetizer
!insert (MI10, CH6) into MenuItemChef
!insert (MI10, F301) into MenuItemFoodItem
!insert (MI10, F305) into MenuItemFoodItem

!new MenuItem('MI11')
!MI11.description := 'Gambas al ajillo (garlic shrimp)'
!MI11.prepTime := 12.5
!MI11.classification := #Main
!insert (MI11, CH7) into MenuItemChef
!insert (MI11, F304) into MenuItemFoodItem

!new MenuItem('MI12')
!MI12.description := 'Tarta de almendra (almond tart slice)'
!MI12.prepTime := 18.0
!MI12.classification := #Dessert
!insert (MI12, CH7) into MenuItemChef
!insert (MI12, F303) into MenuItemFoodItem
!insert (MI12, F302) into MenuItemFoodItem
!insert (MI12, F307) into MenuItemFoodItem

!new MenuItem('MI13')
!MI13.description := 'Hausgemachte Brezel'
!MI13.prepTime := 14.0
!MI13.classification := #Apetizer
!insert (MI13, CH8) into MenuItemChef
!insert (MI13, F301) into MenuItemFoodItem
!insert (MI13, F309) into MenuItemFoodItem

!new MenuItem('MI14')
!MI14.description := 'Käsespätzle'
!MI14.prepTime := 22.0
!MI14.classification := #Main
!insert (MI14, CH8) into MenuItemChef
!insert (MI14, F301) into MenuItemFoodItem
!insert (MI14, F302) into MenuItemFoodItem
!insert (MI14, F309) into MenuItemFoodItem

!new MenuItem('MI15')
!MI15.description := 'Malt soda (house)'
!MI15.prepTime := 2.0
!MI15.classification := #Beverage
!insert (MI15, CH8) into MenuItemChef
!insert (MI15, F310) into MenuItemFoodItem

!new Individual('IR4')
!IR4.time := Time('20:15')
!IR4.date := Date('2026-03-05')
!IR4.numberPeople := 4
!IR4.name := 'Sofía Martínez'
!IR4.phoneNumber := '+34 655 010 020'
!IR4.number := 101
!IR4.seating := #Inside
!IR4.smoking := #NonSmoking
!insert (R4, IR4) into RestaurantReservation
!insert (IR4, C3) into ReservationCustomer
!insert (IR4, W7) into ReservationWaiter

!new Table('T11_4')
!T11_4.number := 11
!T11_4.description := 'Two-top near kitchen pass'
!T11_4.capacity := 2
!insert (IR4, T11_4) into ReservationTable

!new Table('T12_4')
!T12_4.number := 12
!T12_4.description := 'Two-top by interior window'
!T12_4.capacity := 2
!insert (IR4, T12_4) into ReservationTable

!new ItemOrder('IO101_4')
!IO101_4.time := Time('20:22')
!insert (IR4, IO101_4) into ReservationItemOrdered
!insert (IO101_4, MI10) into ItemOrderMenuItem

!new ItemOrder('IO102_4')
!IO102_4.time := Time('20:35')
!insert (IR4, IO102_4) into ReservationItemOrdered
!insert (IO102_4, MI11) into ItemOrderMenuItem

!new ItemOrder('IO103_4')
!IO103_4.time := Time('20:36')
!insert (IR4, IO103_4) into ReservationItemOrdered
!insert (IO103_4, MI11) into ItemOrderMenuItem

!new ItemOrder('IO104_4')
!IO104_4.time := Time('20:55')
!insert (IR4, IO104_4) into ReservationItemOrdered
!insert (IO104_4, MI12) into ItemOrderMenuItem

!new Banquet('BR4')
!BR4.time := Time('19:00')
!BR4.date := Date('2026-03-07')
!BR4.numberPeople := 26
!BR4.name := 'Lucía Paredes'
!BR4.phoneNumber := '+34 677 222 121'
!BR4.number := 202
!BR4.groupName := 'Club de Fotografía del Raval'
!BR4.paymentMethod := #CreditCard
!BR4.busService := true
!insert (R4, BR4) into RestaurantReservation
!insert (BR4, W6) into ReservationWaiter
!insert (BR4, W8) into ReservationWaiter
!insert (BR4, BD3) into BanquetBusDriver
!insert (BR4, BD4) into BanquetBusDriver

!new Table('T21_4')
!T21_4.number := 21
!T21_4.description := 'Long table, back room left'
!T21_4.capacity := 10
!insert (BR4, T21_4) into ReservationTable

!new Table('T22_4')
!T22_4.number := 22
!T22_4.description := 'Long table, back room center'
!T22_4.capacity := 8
!insert (BR4, T22_4) into ReservationTable

!new Table('T23_4')
!T23_4.number := 23
!T23_4.description := 'Long table, back room right'
!T23_4.capacity := 8
!insert (BR4, T23_4) into ReservationTable

!new ItemOrder('IO201_4')
!IO201_4.time := Time('19:10')
!insert (BR4, IO201_4) into ReservationItemOrdered
!insert (IO201_4, MI10) into ItemOrderMenuItem

!new ItemOrder('IO202_4')
!IO202_4.time := Time('19:12')
!insert (BR4, IO202_4) into ReservationItemOrdered
!insert (IO202_4, MI10) into ItemOrderMenuItem

!new ItemOrder('IO203_4')
!IO203_4.time := Time('19:20')
!insert (BR4, IO203_4) into ReservationItemOrdered
!insert (IO203_4, MI11) into ItemOrderMenuItem

!new ItemOrder('IO204_4')
!IO204_4.time := Time('19:20')
!insert (BR4, IO204_4) into ReservationItemOrdered
!insert (IO204_4, MI11) into ItemOrderMenuItem

!new ItemOrder('IO205_4')
!IO205_4.time := Time('19:35')
!insert (BR4, IO205_4) into ReservationItemOrdered
!insert (IO205_4, MI12) into ItemOrderMenuItem

!new Individual('IR5')
!IR5.time := Time('18:30')
!IR5.date := Date('2026-03-06')
!IR5.numberPeople := 2
!IR5.name := 'Thomas Bauer'
!IR5.phoneNumber := '+49 171 222 9911'
!IR5.number := 303
!IR5.seating := #Inside
!IR5.smoking := #NonSmoking
!insert (R5, IR5) into RestaurantReservation
!insert (IR5, C4) into ReservationCustomer
!insert (IR5, W9) into ReservationWaiter

!new Table('T31_4')
!T31_4.number := 31
!T31_4.description := 'Two-top beside beer taps'
!T31_4.capacity := 2
!insert (IR5, T31_4) into ReservationTable

!new ItemOrder('IO301_4')
!IO301_4.time := Time('18:40')
!insert (IR5, IO301_4) into ReservationItemOrdered
!insert (IO301_4, MI13) into ItemOrderMenuItem

!new ItemOrder('IO302_4')
!IO302_4.time := Time('18:55')
!insert (IR5, IO302_4) into ReservationItemOrdered
!insert (IO302_4, MI14) into ItemOrderMenuItem

!new ItemOrder('IO303_4')
!IO303_4.time := Time('19:05')
!insert (IR5, IO303_4) into ReservationItemOrdered
!insert (IO303_4, MI15) into ItemOrderMenuItem

!new Individual('IR6')
!IR6.time := Time('20:00')
!IR6.date := Date('2026-03-06')
!IR6.numberPeople := 6
!IR6.name := 'Elena Petrova'
!IR6.phoneNumber := '+49 172 333 1818'
!IR6.number := 304
!IR6.seating := #Patio
!IR6.smoking := #Smoking
!insert (R5, IR6) into RestaurantReservation
!insert (IR6, W10) into ReservationWaiter
!insert (IR6, W9) into ReservationWaiter

!new Table('T41_4')
!T41_4.number := 41
!T41_4.description := 'Four-top on heated patio'
!T41_4.capacity := 4
!insert (IR6, T41_4) into ReservationTable

!new Table('T42_4')
!T42_4.number := 42
!T42_4.description := 'Four-top on patio near planter wall'
!T42_4.capacity := 4
!insert (IR6, T42_4) into ReservationTable

!new ItemOrder('IO401_4')
!IO401_4.time := Time('20:10')
!insert (IR6, IO401_4) into ReservationItemOrdered
!insert (IO401_4, MI13) into ItemOrderMenuItem

!new ItemOrder('IO402_4')
!IO402_4.time := Time('20:12')
!insert (IR6, IO402_4) into ReservationItemOrdered
!insert (IO402_4, MI13) into ItemOrderMenuItem

!new ItemOrder('IO403_4')
!IO403_4.time := Time('20:25')
!insert (IR6, IO403_4) into ReservationItemOrdered
!insert (IO403_4, MI14) into ItemOrderMenuItem

!new DietaryRequirement('DR3')
!DR3.diet := #Halal

!new DietaryRequirement('DR4')
!DR4.diet := #Vegan

!new ReportedAllergy('RA3')
!RA3.allergen := #Nuts
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 381 | 0.00% |
| Multiplicities Errors | 0 | 91 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 21 | 0.00% |
| Phones | 0 | 21 | 0.00% |

## Category edge
```
!new Restaurant('R6')
!R6.name := 'Nordic Tapas Lab'

!new Owner('O11')
!O11.name := 'Ingrid Løken'
!O11.percentageShares := 98
!insert (R6, O11) into RestaurantOwner

!new Owner('O12')
!O12.name := 'Mateo Rojas'
!O12.percentageShares := 2
!insert (R6, O12) into RestaurantOwner

!new Owner('O13')
!O13.name := 'Amina El-Sayed'
!O13.percentageShares := 0
!insert (R6, O13) into RestaurantOwner

!new RegularCustomer('C5')
!C5.name := 'Klara Vogel'
!C5.prefferedLanguage := #German

!new RegularCustomer('C6')
!C6.name := 'Javier Ortega'
!C6.prefferedLanguage := #Spanish

!new HeadWaiter('HW6')
!HW6.name := 'Salma Benali'
!HW6.dateOfBirth := Date('1980-11-03')
!HW6.phoneNumber := '+212-6-555-0199'

!new Waiter('W11')
!W11.name := 'Gianni Russo'
!W11.dateOfBirth := Date('2004-01-09')
!W11.phoneNumber := '+39-347-555-0122'
!W11.spokenLanguage := #Italian
!insert (HW6, W11) into HeadWaiterWaiter

!new Cook('K8')
!K8.name := 'Noah Kim'
!K8.dateOfBirth := Date('1996-06-30')
!K8.phoneNumber := '+1-415-555-0140'
!K8.yearsOfExperience := 0

!new Chef('CH9')
!CH9.name := 'Élodie Martin'
!CH9.dateOfBirth := Date('1990-02-18')
!CH9.phoneNumber := '+33-6-12-34-56-78'
!insert (CH9, K8) into ChefCook

!new Manager('M7')
!M7.name := 'Peter Schmidt'
!M7.dateOfBirth := Date('1975-09-22')
!M7.phoneNumber := '+49-151-555-0110'

!new BusDriver('BD5')
!BD5.name := 'Ravi Singh'
!BD5.dateOfBirth := Date('1988-04-05')
!BD5.phoneNumber := '+91-98-5555-0101'
!BD5.driverLicenseNr := 'DL-IN-4488-2031'

!new Allergen('AL1_6')
!AL1_6.type := #Lactose

!new Allergen('AL2_6')
!AL2_6.type := #Seafood

!new Allergen('AL3_6')
!AL3_6.type := #Nuts

!new Allergen('AL4_6')
!AL4_6.type := #Gluten

!new FoodItem('FI10')
!FI10.number := 10
!FI10.description := 'Nori seaweed sheets'
!FI10.purchaseFlag := true
!FI10.unit := #Sheet

!new FoodItem('FI11')
!FI11.number := 11
!FI11.description := 'Tahini (sesame paste)'
!FI11.purchaseFlag := true
!FI11.unit := #Ounce
!insert (FI11, AL3_6) into FoodItemAllergen

!new FoodItem('FI12')
!FI12.number := 12
!FI12.description := 'Shrimp powder'
!FI12.purchaseFlag := true
!FI12.unit := #Gram
!insert (FI12, AL2_6) into FoodItemAllergen

!new FoodItem('FI13')
!FI13.number := 13
!FI13.description := 'Milk foam base'
!FI13.purchaseFlag := false
!FI13.unit := #Pound
!insert (FI13, AL1_6) into FoodItemAllergen

!new FoodItem('FI14')
!FI14.number := 14
!FI14.description := 'Wheat cracker crumbs'
!FI14.purchaseFlag := true
!FI14.unit := #Dozen
!insert (FI14, AL4_6) into FoodItemAllergen

!new MenuItem('MI16')
!MI16.description := 'Invisible Water (concept beverage served in an empty glass)'
!MI16.prepTime := 0.0
!MI16.classification := #Beverage
!insert (MI16, CH9) into MenuItemChef

!new MenuItem('MI17')
!MI17.description := 'Seaweed–Sesame Crisps'
!MI17.prepTime := 1.5
!MI17.classification := #Apetizer
!insert (MI17, CH9) into MenuItemChef
!insert (MI17, FI10) into MenuItemFoodItem
!insert (MI17, FI11) into MenuItemFoodItem
!insert (MI17, FI14) into MenuItemFoodItem

!new MenuItem('MI18')
!MI18.description := 'Midnight Shrimp Foam on Milk Air'
!MI18.prepTime := 3.0
!MI18.classification := #Dessert
!insert (MI18, CH9) into MenuItemChef
!insert (MI18, FI12) into MenuItemFoodItem
!insert (MI18, FI13) into MenuItemFoodItem

!new Banquet('BR5')
!BR5.time := Time('00:00')
!BR5.date := Date('2026-02-29')
!BR5.numberPeople := 20
!BR5.name := 'Yuki Tanaka'
!BR5.phoneNumber := '+81-90-5555-0100'
!BR5.number := 9001
!BR5.groupName := 'Kōhaku no Kai'
!BR5.paymentMethod := #Cash
!BR5.busService := false
!insert (BR5, W11) into ReservationWaiter
!insert (BR5, BD5) into BanquetBusDriver

!new Table('T01_NTL')
!T01_NTL.number := 1
!T01_NTL.description := 'Single-top, corner A'
!T01_NTL.capacity := 1
!insert (BR5, T01_NTL) into ReservationTable

!new Table('T02_NTL')
!T02_NTL.number := 2
!T02_NTL.description := 'Single-top, corner B'
!T02_NTL.capacity := 1
!insert (BR5, T02_NTL) into ReservationTable

!new Table('T03_NTL')
!T03_NTL.number := 3
!T03_NTL.description := 'Single-top, near bar'
!T03_NTL.capacity := 1
!insert (BR5, T03_NTL) into ReservationTable

!new Table('T04_NTL')
!T04_NTL.number := 4
!T04_NTL.description := 'Single-top, window 1'
!T04_NTL.capacity := 1
!insert (BR5, T04_NTL) into ReservationTable

!new Table('T05_NTL')
!T05_NTL.number := 5
!T05_NTL.description := 'Single-top, window 2'
!T05_NTL.capacity := 1
!insert (BR5, T05_NTL) into ReservationTable

!new Table('T06_NTL')
!T06_NTL.number := 6
!T06_NTL.description := 'Single-top, aisle 1'
!T06_NTL.capacity := 1
!insert (BR5, T06_NTL) into ReservationTable

!new Table('T07_NTL')
!T07_NTL.number := 7
!T07_NTL.description := 'Single-top, aisle 2'
!T07_NTL.capacity := 1
!insert (BR5, T07_NTL) into ReservationTable

!new Table('T08_NTL')
!T08_NTL.number := 8
!T08_NTL.description := 'Single-top, aisle 3'
!T08_NTL.capacity := 1
!insert (BR5, T08_NTL) into ReservationTable

!new Table('T09_NTL')
!T09_NTL.number := 9
!T09_NTL.description := 'Single-top, aisle 4'
!T09_NTL.capacity := 1
!insert (BR5, T09_NTL) into ReservationTable

!new Table('T10_NTL')
!T10_NTL.number := 10
!T10_NTL.description := 'Single-top, kitchen pass'
!T10_NTL.capacity := 1
!insert (BR5, T10_NTL) into ReservationTable

!new Table('T11_NTL')
!T11_NTL.number := 11
!T11_NTL.description := 'Single-top, pillar left'
!T11_NTL.capacity := 1
!insert (BR5, T11_NTL) into ReservationTable

!new Table('T12_NTL')
!T12_NTL.number := 12
!T12_NTL.description := 'Single-top, pillar right'
!T12_NTL.capacity := 1
!insert (BR5, T12_NTL) into ReservationTable

!new Table('T13_NTL')
!T13_NTL.number := 13
!T13_NTL.description := 'Single-top, alcove 1'
!T13_NTL.capacity := 1
!insert (BR5, T13_NTL) into ReservationTable

!new Table('T14_NTL')
!T14_NTL.number := 14
!T14_NTL.description := 'Single-top, alcove 2'
!T14_NTL.capacity := 1
!insert (BR5, T14_NTL) into ReservationTable

!new Table('T15_NTL')
!T15_NTL.number := 15
!T15_NTL.description := 'Single-top, near restroom'
!T15_NTL.capacity := 1
!insert (BR5, T15_NTL) into ReservationTable

!new Table('T16_NTL')
!T16_NTL.number := 16
!T16_NTL.description := 'Single-top, entry left'
!T16_NTL.capacity := 1
!insert (BR5, T16_NTL) into ReservationTable

!new Table('T17_NTL')
!T17_NTL.number := 17
!T17_NTL.description := 'Single-top, entry right'
!T17_NTL.capacity := 1
!insert (BR5, T17_NTL) into ReservationTable

!new Table('T18_NTL')
!T18_NTL.number := 18
!T18_NTL.description := 'Single-top, back wall 1'
!T18_NTL.capacity := 1
!insert (BR5, T18_NTL) into ReservationTable

!new Table('T19_NTL')
!T19_NTL.number := 19
!T19_NTL.description := 'Single-top, back wall 2'
!T19_NTL.capacity := 1
!insert (BR5, T19_NTL) into ReservationTable

!new Table('T20_NTL')
!T20_NTL.number := 20
!T20_NTL.description := 'Single-top, back wall 3'
!T20_NTL.capacity := 1
!insert (BR5, T20_NTL) into ReservationTable

!new ItemOrder('IO901')
!IO901.time := Time('00:01')
!insert (BR5, IO901) into ReservationItemOrdered
!insert (IO901, MI16) into ItemOrderMenuItem

!new ItemOrder('IO902')
!IO902.time := Time('00:01')
!insert (BR5, IO902) into ReservationItemOrdered
!insert (IO902, MI17) into ItemOrderMenuItem

!new ItemOrder('IO903')
!IO903.time := Time('00:02')
!insert (BR5, IO903) into ReservationItemOrdered
!insert (IO903, MI18) into ItemOrderMenuItem

!new Individual('IR7')
!IR7.time := Time('23:59')
!IR7.date := Date('2026-02-28')
!IR7.numberPeople := 1
!IR7.name := 'Klara Vogel'
!IR7.phoneNumber := '+49-30-555-0102'
!IR7.number := 42
!IR7.seating := #Inside
!IR7.smoking := #Smoking
!insert (R6, IR7) into RestaurantReservation
!insert (IR7, C5) into ReservationCustomer
!insert (IR7, W11) into ReservationWaiter

!new Table('T99_NTL')
!T99_NTL.number := 99
!T99_NTL.description := 'Single-top, VIP nook'
!T99_NTL.capacity := 1
!insert (IR7, T99_NTL) into ReservationTable

!new DietaryRequirement('DR5')
!DR5.diet := #Vegan

!new ReportedAllergy('RA4')
!RA4.allergen := #Gluten
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 251 | 0.00% |
| Multiplicities Errors | 0 | 49 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 8 | 0.00% |
| Phones | 0 | 8 | 0.00% |

## Category invalid
```
!new Restaurant('R3')
!R3.name := 'Mar i Terra'

!new Owner('O4')
!O4.name := 'Ana García'
!O4.percentageShares := 60

!new Owner('O5')
!O5.name := 'Marco Bianchi'
!O5.percentageShares := 40

!insert (R3, O4) into RestaurantOwner
!insert (R3, O5) into RestaurantOwner

!new HeadWaiter('HW3')
!HW3.name := 'Giulia Rossi'
!HW3.dateOfBirth := Date('1984-11-02')
!HW3.phoneNumber := '+34 600 111 222'

!new Waiter('W4')
!W4.name := 'Sergio López'
!W4.dateOfBirth := Date('1996-05-18')
!W4.phoneNumber := '+34 600 222 333'
!W4.spokenLanguage := #Spanish

!new Waiter('W5')
!W5.name := 'Klara Schneider'
!W5.dateOfBirth := Date('1992-08-09')
!W5.phoneNumber := '+34 600 333 444'
!W5.spokenLanguage := #German

!insert (HW3, W4) into HeadWaiterWaiter
!insert (HW3, W5) into HeadWaiterWaiter

!new Cook('K4')
!K4.name := 'Fátima El Mansouri'
!K4.dateOfBirth := Date('1979-03-12')
!K4.phoneNumber := '+34 600 444 555'
!K4.yearsOfExperience := 12

!new Chef('CH4')
!CH4.name := 'Jordi Pujol'
!CH4.dateOfBirth := Date('1988-01-27')
!CH4.phoneNumber := '+34 600 555 666'

!new Chef('CH5')
!CH5.name := 'Elena Conti'
!CH5.dateOfBirth := Date('1990-10-05')
!CH5.phoneNumber := '+34 600 666 777'

!insert (CH4, K4) into ChefCook
!insert (CH5, K4) into ChefCook

!new BusDriver('BD2')
!BD2.name := 'Miguel Santos'
!BD2.dateOfBirth := Date('1975-06-30')
!BD2.phoneNumber := '+34 600 777 888'
!BD2.driverLicenseNr := 'ES-B-4920017'

!new Table('T5')
!T5.number := 5
!T5.description := 'Window-side 4-top near the tiled mural'
!T5.capacity := 4

!new Table('T8')
!T8.number := 8
!T8.description := 'Long table on the patio under awning'
!T8.capacity := 6

!new Table('T9')
!T9.number := 9
!T9.description := 'Inside communal table, can be split by staff'
!T9.capacity := 10

!new RegularCustomer('RC1')
!RC1.name := 'Thomas Müller'
!RC1.prefferedLanguage := #German

!new Individual('IR3')
!IR3.time := Time('13:00')
!IR3.date := Date('2026-06-14')
!IR3.numberPeople := 2
!IR3.name := 'Thomas Müller'
!IR3.phoneNumber := '+49 151 23456789'
!IR3.number := 3101
!IR3.seating := #Inside
!IR3.smoking := #NonSmoking

!insert (R3, IR3) into RestaurantReservation
!insert (IR3, RC1) into ReservationCustomer
!insert (IR3, W5) into ReservationWaiter
!insert (IR3, T5) into ReservationTable

!new Banquet('BR3')
!BR3.time := Time('20:00')
!BR3.date := Date('2026-06-14')
!BR3.numberPeople := 18
!BR3.name := 'Círculo de Arquitectura BCN'
!BR3.phoneNumber := '+34 93 555 0101'
!BR3.number := 4107
!BR3.groupName := 'Círculo de Arquitectura BCN — Summer Meetup'
!BR3.paymentMethod := #CreditCard
!BR3.busService := true

!insert (R3, BR3) into RestaurantReservation
!insert (BR3, W4) into ReservationWaiter
!insert (BR3, W5) into ReservationWaiter
!insert (BR3, BD2) into BanquetBusDriver
!insert (BR3, T5) into ReservationTable
!insert (BR3, T8) into ReservationTable
!insert (BR3, T9) into ReservationTable

!new Allergen('A_L2')
!A_L2.type := #Lactose

!new Allergen('A_G2')
!A_G2.type := #Gluten

!new Allergen('A_S2')
!A_S2.type := #Seafood

!new Allergen('A_N2')
!A_N2.type := #Nuts

!new FoodItem('F201')
!F201.number := 101
!F201.description := 'Wheat flour'
!F201.purchaseFlag := true
!F201.unit := #Pound

!new FoodItem('F202')
!F202.number := 102
!F202.description := 'Butter'
!F202.purchaseFlag := true
!F202.unit := #Ounce

!new FoodItem('F203')
!F203.number := 103
!F203.description := 'Shrimp (raw, peeled)'
!F203.purchaseFlag := true
!F203.unit := #Pound

!new FoodItem('F204')
!F204.number := 104
!F204.description := 'Ground almonds'
!F204.purchaseFlag := true
!F204.unit := #Gram

!insert (F201, A_G2) into FoodItemAllergen
!insert (F202, A_L2) into FoodItemAllergen
!insert (F203, A_S2) into FoodItemAllergen
!insert (F204, A_N2) into FoodItemAllergen

!new MenuItem('MI5')
!MI5.description := 'Gambas al ajillo (garlic shrimp)'
!MI5.prepTime := 12.0
!MI5.classification := #Apetizer

!new MenuItem('MI6')
!MI6.description := 'Paella de marisco'
!MI6.prepTime := 35.0
!MI6.classification := #Main

!new MenuItem('MI7')
!MI7.description := 'Crema catalana with toasted sugar'
!MI7.prepTime := 18.0
!MI7.classification := #Dessert

!new MenuItem('MI8')
!MI8.description := 'Tarta de almendra (almond cake)'
!MI8.prepTime := 25.0
!MI8.classification := #Dessert

!new MenuItem('MI9')
!MI9.description := 'Cava brut (glass)'
!MI9.prepTime := 1.0
!MI9.classification := #Beverage

!insert (MI5, CH4) into MenuItemChef
!insert (MI6, CH4) into MenuItemChef
!insert (MI7, CH5) into MenuItemChef
!insert (MI8, CH5) into MenuItemChef
!insert (MI9, CH5) into MenuItemChef

!insert (MI5, F203) into MenuItemFoodItem
!insert (MI6, F203) into MenuItemFoodItem
!insert (MI6, F201) into MenuItemFoodItem
!insert (MI7, F202) into MenuItemFoodItem
!insert (MI8, F204) into MenuItemFoodItem
!insert (MI8, F201) into MenuItemFoodItem

!new ItemOrder('IO4')
!IO4.time := Time('13:10')
!insert (IR3, IO4) into ReservationItemOrdered
!insert (IO4, MI9) into ItemOrderMenuItem

!new ItemOrder('IO5')
!IO5.time := Time('13:25')
!insert (IR3, IO5) into ReservationItemOrdered
!insert (IO5, MI7) into ItemOrderMenuItem

!new ItemOrder('IO6')
!IO6.time := Time('20:15')
!insert (BR3, IO6) into ReservationItemOrdered
!insert (IO6, MI6) into ItemOrderMenuItem

!new ItemOrder('IO7')
!IO7.time := Time('20:20')
!insert (BR3, IO7) into ReservationItemOrdered
!insert (IO7, MI5) into ItemOrderMenuItem

!new ItemOrder('IO8')
!IO8.time := Time('21:10')
!insert (BR3, IO8) into ReservationItemOrdered
!insert (IO8, MI8) into ItemOrderMenuItem

!new DietaryRequirement('DR2')
!DR2.diet := #Halal

!new ReportedAllergy('RA2')
!RA2.allergen := #Nuts
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 2 | 42 | 4.76% |
| Invariants Errors (Not included on General) | 0 | 4 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `ChefCook':
  Object `K4' of class `Cook' is connected to 2 objects of class `Chef'
  at association end `underSupervisionOf' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `ReservationTable':
  Object `T5' of class `Table' is connected to 2 objects of class `Reservation'
  at association end `reservation' but the multiplicity is specified as `1'.
```

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 9 | 0.00% |
| Phones | 0 | 9 | 0.00% |

## Generation 1 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 1073 | 0.00% |
| Multiplicities Errors | 0 | 189 | 0.00% |
| Invariants Errors | 0 | 16 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 2 | 42 | 4.76% |
| Invariants Errors (Not included on General) | 0 | 4 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `ChefCook':
  Object `K4' of class `Cook' is connected to 2 objects of class `Chef'
  at association end `underSupervisionOf' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `ReservationTable':
  Object `T5' of class `Table' is connected to 2 objects of class `Reservation'
  at association end `reservation' but the multiplicity is specified as `1'.
```

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 56 | 0.00% |
| Phones | 0 | 56 | 0.00% |

# Generation 2
## Category baseline
```
!new Restaurant('R7')
!R7.name := 'Saffron Cedar Rooftop'

!new Owner('O14')
!O14.name := 'Noura Al-Khatib'
!O14.percentageShares := 50
!insert (R7, O14) into RestaurantOwner

!new Owner('O15')
!O15.name := 'Patrick O’Rourke'
!O15.percentageShares := 30
!insert (R7, O15) into RestaurantOwner

!new Owner('O16')
!O16.name := 'Mei Lin'
!O16.percentageShares := 20
!insert (R7, O16) into RestaurantOwner

!new RegularCustomer('C7')
!C7.name := 'Giovanni Russo'
!C7.prefferedLanguage := #Italian

!new RegularCustomer('C8')
!C8.name := 'Anika Schneider'
!C8.prefferedLanguage := #German

!new HeadWaiter('HW7')
!HW7.name := 'Camila Torres'
!HW7.dateOfBirth := Date('1983-06-09')
!HW7.phoneNumber := '+52-55-5555-2001'

!new Waiter('W12')
!W12.name := 'Hassan Abdelrahman'
!W12.dateOfBirth := Date('1994-10-22')
!W12.phoneNumber := '+971-50-555-1100'
!W12.spokenLanguage := #English
!insert (HW7, W12) into HeadWaiterWaiter

!new Waiter('W13')
!W13.name := 'Lucía Fernández'
!W13.dateOfBirth := Date('1999-02-03')
!W13.phoneNumber := '+34-93-555-2202'
!W13.spokenLanguage := #Spanish
!insert (HW7, W13) into HeadWaiterWaiter

!new Waiter('W14')
!W14.name := 'Thomas Weber'
!W14.dateOfBirth := Date('1991-08-15')
!W14.phoneNumber := '+49-89-555-3303'
!W14.spokenLanguage := #German
!insert (HW7, W14) into HeadWaiterWaiter

!new Manager('M8')
!M8.name := 'Sarah Johnson'
!M8.dateOfBirth := Date('1979-12-01')
!M8.phoneNumber := '+1-312-555-4404'

!new Cook('K9')
!K9.name := 'Ravi Kapoor'
!K9.dateOfBirth := Date('1987-04-28')
!K9.phoneNumber := '+1-646-555-5505'
!K9.yearsOfExperience := 0

!new Cook('K10')
!K10.name := 'Élodie Martin'
!K10.dateOfBirth := Date('1982-09-17')
!K10.phoneNumber := '+33-1-555-6606'
!K10.yearsOfExperience := 15

!new Cook('K11')
!K11.name := 'Mariam Hassan'
!K11.dateOfBirth := Date('1984-03-04')
!K11.phoneNumber := '+1-646-555-6607'
!K11.yearsOfExperience := 15

!new Chef('CH10')
!CH10.name := 'Yuki Tanaka'
!CH10.dateOfBirth := Date('1990-01-11')
!CH10.phoneNumber := '+81-90-5555-1010'
!insert (CH10, K9) into ChefCook

!new Chef('CH11')
!CH11.name := 'Adeola Okoye'
!CH11.dateOfBirth := Date('1989-05-30')
!CH11.phoneNumber := '+234-1-555-7070'
!insert (CH11, K10) into ChefCook

!new Chef('CH12')
!CH12.name := 'Leila Farah'
!CH12.dateOfBirth := Date('1993-03-07')
!CH12.phoneNumber := '+961-1-555-8080'
!insert (CH12, K11) into ChefCook

!new BusDriver('BD6')
!BD6.name := 'Viktor Petrov'
!BD6.dateOfBirth := Date('1972-11-20')
!BD6.phoneNumber := '+1-718-555-9090'
!BD6.driverLicenseNr := 'NY-CDL-44119'

!new BusDriver('BD7')
!BD7.name := 'Mina Hosseini'
!BD7.dateOfBirth := Date('1980-02-14')
!BD7.phoneNumber := '+1-917-555-1212'
!BD7.driverLicenseNr := 'NY-CDL-55220'

!new Individual('IR8')
!IR8.time := Time('18:30')
!IR8.date := Date('2026-04-18')
!IR8.numberPeople := 5
!IR8.name := 'Giovanni Russo'
!IR8.phoneNumber := '+39-333-555-7878'
!IR8.number := 610
!IR8.seating := #Patio
!IR8.smoking := #NonSmoking
!insert (R7, IR8) into RestaurantReservation
!insert (IR8, C7) into ReservationCustomer
!insert (IR8, W12) into ReservationWaiter

!new Table('T30_R7')
!T30_R7.number := 30
!T30_R7.description := 'Patio 4-top under heater'
!T30_R7.capacity := 4
!insert (IR8, T30_R7) into ReservationTable

!new Table('T31_R7')
!T31_R7.number := 31
!T31_R7.description := 'Small patio 2-top adjacent to table 30'
!T31_R7.capacity := 2
!insert (IR8, T31_R7) into ReservationTable

!new Banquet('BR6')
!BR6.time := Time('21:00')
!BR6.date := Date('2026-04-19')
!BR6.numberPeople := 48
!BR6.name := 'Keisha Brown'
!BR6.phoneNumber := '+1-202-555-3434'
!BR6.number := 902
!BR6.groupName := 'Spring Charity Iftar Committee'
!BR6.paymentMethod := #Cash
!BR6.busService := true
!insert (R7, BR6) into RestaurantReservation
!insert (BR6, W13) into ReservationWaiter
!insert (BR6, W14) into ReservationWaiter
!insert (BR6, BD6) into BanquetBusDriver
!insert (BR6, BD7) into BanquetBusDriver

!new Table('T40_R7')
!T40_R7.number := 40
!T40_R7.description := 'Rooftop banquet round near stage'
!T40_R7.capacity := 10
!insert (BR6, T40_R7) into ReservationTable

!new Table('T41_R7')
!T41_R7.number := 41
!T41_R7.description := 'Rooftop banquet round near bar'
!T41_R7.capacity := 10
!insert (BR6, T41_R7) into ReservationTable

!new Table('T42_R7')
!T42_R7.number := 42
!T42_R7.description := 'Rooftop banquet round center-left'
!T42_R7.capacity := 10
!insert (BR6, T42_R7) into ReservationTable

!new Table('T43_R7')
!T43_R7.number := 43
!T43_R7.description := 'Rooftop banquet round center-right'
!T43_R7.capacity := 10
!insert (BR6, T43_R7) into ReservationTable

!new Table('T44_R7')
!T44_R7.number := 44
!T44_R7.description := 'Rooftop long table for VIP/family elders'
!T44_R7.capacity := 12
!insert (BR6, T44_R7) into ReservationTable

!new Allergen('A2_GLU7')
!A2_GLU7.type := #Gluten

!new Allergen('A2_NUT7')
!A2_NUT7.type := #Nuts

!new Allergen('A2_SEA7')
!A2_SEA7.type := #Seafood

!new Allergen('A2_LAC7')
!A2_LAC7.type := #Lactose

!new FoodItem('F401')
!F401.number := 201
!F401.description := 'Phyllo dough sheets'
!F401.purchaseFlag := true
!F401.unit := #Sheet
!insert (F401, A2_GLU7) into FoodItemAllergen

!new FoodItem('F402')
!F402.number := 202
!F402.description := 'Pistachios'
!F402.purchaseFlag := true
!F402.unit := #Gram
!insert (F402, A2_NUT7) into FoodItemAllergen

!new FoodItem('F403')
!F403.number := 203
!F403.description := 'Labneh (strained yogurt)'
!F403.purchaseFlag := true
!F403.unit := #Ounce
!insert (F403, A2_LAC7) into FoodItemAllergen

!new FoodItem('F404')
!F404.number := 204
!F404.description := 'Salmon fillet'
!F404.purchaseFlag := true
!F404.unit := #Pound
!insert (F404, A2_SEA7) into FoodItemAllergen

!new FoodItem('F405')
!F405.number := 205
!F405.description := 'Eggs'
!F405.purchaseFlag := true
!F405.unit := #Dozen

!new MenuItem('MI19')
!MI19.description := 'Pistachio baklava bites'
!MI19.prepTime := 14.0
!MI19.classification := #Dessert
!insert (MI19, CH10) into MenuItemChef
!insert (MI19, F401) into MenuItemFoodItem
!insert (MI19, F402) into MenuItemFoodItem

!new MenuItem('MI20')
!MI20.description := 'Charred salmon with herbed labneh'
!MI20.prepTime := 22.0
!MI20.classification := #Main
!insert (MI20, CH11) into MenuItemChef
!insert (MI20, F404) into MenuItemFoodItem
!insert (MI20, F403) into MenuItemFoodItem

!new MenuItem('MI21')
!MI21.description := 'Rooftop mint tea service'
!MI21.prepTime := 4.0
!MI21.classification := #Beverage
!insert (MI21, CH10) into MenuItemChef

!new MenuItem('MI22')
!MI22.description := 'Egg & herb starter (chef’s mezze plate component)'
!MI22.prepTime := 10.0
!MI22.classification := #Apetizer
!insert (MI22, CH12) into MenuItemChef
!insert (MI22, F405) into MenuItemFoodItem

!new ItemOrder('IO1001')
!IO1001.time := Time('18:45')
!insert (IR8, IO1001) into ReservationItemOrdered
!insert (IO1001, MI22) into ItemOrderMenuItem

!new ItemOrder('IO1002')
!IO1002.time := Time('19:05')
!insert (IR8, IO1002) into ReservationItemOrdered
!insert (IO1002, MI20) into ItemOrderMenuItem

!new ItemOrder('IO1003')
!IO1003.time := Time('21:20')
!insert (BR6, IO1003) into ReservationItemOrdered
!insert (IO1003, MI21) into ItemOrderMenuItem

!new ItemOrder('IO1004')
!IO1004.time := Time('21:40')
!insert (BR6, IO1004) into ReservationItemOrdered
!insert (IO1004, MI19) into ItemOrderMenuItem

!new DietaryRequirement('DR6')
!DR6.diet := #Kosher

!new ReportedAllergy('RA5')
!RA5.allergen := #Gluten
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 230 | 0.00% |
| Multiplicities Errors | 0 | 45 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 15 | 0.00% |
| Phones | 0 | 15 | 0.00% |

## Category boundary
```
!new Restaurant('R10')
!R10.name := 'La Estación Patio'

!new Owner('O23')
!O23.name := 'Carmen Ruiz'
!O23.percentageShares := 40
!insert (R10, O23) into RestaurantOwner

!new Owner('O24')
!O24.name := 'Thomas Müller'
!O24.percentageShares := 25
!insert (R10, O24) into RestaurantOwner

!new Owner('O25')
!O25.name := 'Giovanni Conti'
!O25.percentageShares := 20
!insert (R10, O25) into RestaurantOwner

!new Owner('O26')
!O26.name := 'Evelyn Carter'
!O26.percentageShares := 15
!insert (R10, O26) into RestaurantOwner

!new HeadWaiter('HW10')
!HW10.name := 'María Fernanda López'
!HW10.dateOfBirth := Date('1983-12-30')
!HW10.phoneNumber := '+52 55 5000 1100'

!new Waiter('W20')
!W20.name := 'Enzo Romano'
!W20.dateOfBirth := Date('1998-02-03')
!W20.phoneNumber := '+1 415 500 1101'
!W20.spokenLanguage := #Italian
!insert (HW10, W20) into HeadWaiterWaiter

!new Waiter('W21')
!W21.name := 'Klara Weiss'
!W21.dateOfBirth := Date('2000-08-19')
!W21.phoneNumber := '+43 1 500 1102'
!W21.spokenLanguage := #German
!insert (HW10, W21) into HeadWaiterWaiter

!new Waiter('W22')
!W22.name := 'Javier Soto'
!W22.dateOfBirth := Date('1996-05-07')
!W22.phoneNumber := '+34 93 500 1103'
!W22.spokenLanguage := #Spanish
!insert (HW10, W22) into HeadWaiterWaiter

!new Cook('K14')
!K14.name := 'Ritu Sharma'
!K14.dateOfBirth := Date('1989-10-12')
!K14.phoneNumber := '+44 20 5000 2200'
!K14.yearsOfExperience := 12

!new Cook('K15')
!K15.name := 'Aria Mahmoud'
!K15.dateOfBirth := Date('1990-05-20')
!K15.phoneNumber := '+44 20 5000 2201'
!K15.yearsOfExperience := 9

!new Chef('CH17')
!CH17.name := 'Omar Haddad'
!CH17.dateOfBirth := Date('1991-03-22')
!CH17.phoneNumber := '+971 4 500 3301'

!new Chef('CH18')
!CH18.name := 'Naomi Brooks'
!CH18.dateOfBirth := Date('1993-07-14')
!CH18.phoneNumber := '+1 212 500 3302'

!insert (CH17, K14) into ChefCook
!insert (CH18, K15) into ChefCook

!new Manager('M10')
!M10.name := 'Peter Johnson'
!M10.dateOfBirth := Date('1975-01-05')
!M10.phoneNumber := '+1 312 500 4400'

!new Allergen('A_GLU10')
!A_GLU10.type := #Gluten

!new Allergen('A_LAC10')
!A_LAC10.type := #Lactose

!new Allergen('A_SEA10')
!A_SEA10.type := #Seafood

!new Allergen('A_NUT10')
!A_NUT10.type := #Nuts

!new FoodItem('F700')
!F700.number := 200
!F700.description := 'Wheat flatbread'
!F700.purchaseFlag := true
!F700.unit := #Sheet
!insert (F700, A_GLU10) into FoodItemAllergen

!new FoodItem('F701')
!F701.number := 201
!F701.description := 'Greek yogurt'
!F701.purchaseFlag := true
!F701.unit := #Ounce
!insert (F701, A_LAC10) into FoodItemAllergen

!new FoodItem('F702')
!F702.number := 202
!F702.description := 'Shrimp (peeled)'
!F702.purchaseFlag := true
!F702.unit := #Pound
!insert (F702, A_SEA10) into FoodItemAllergen

!new FoodItem('F703')
!F703.number := 203
!F703.description := 'Pine nuts'
!F703.purchaseFlag := true
!F703.unit := #Gram
!insert (F703, A_NUT10) into FoodItemAllergen

!new FoodItem('F704')
!F704.number := 204
!F704.description := 'Spice blend (house-made)'
!F704.purchaseFlag := false
!F704.unit := #Gram

!new MenuItem('MI29')
!MI29.description := 'Shrimp Flatbread with Yogurt Sauce'
!MI29.prepTime := 14.5
!MI29.classification := #Main
!insert (MI29, CH17) into MenuItemChef
!insert (MI29, F700) into MenuItemFoodItem
!insert (MI29, F701) into MenuItemFoodItem
!insert (MI29, F702) into MenuItemFoodItem
!insert (MI29, F704) into MenuItemFoodItem

!new MenuItem('MI30')
!MI30.description := 'Pine-Nut Citrus Salad'
!MI30.prepTime := 6.0
!MI30.classification := #Apetizer
!insert (MI30, CH18) into MenuItemChef
!insert (MI30, F703) into MenuItemFoodItem
!insert (MI30, F704) into MenuItemFoodItem

!new MenuItem('MI31')
!MI31.description := 'Sparkling Mineral Water'
!MI31.prepTime := 0.2
!MI31.classification := #Beverage
!insert (MI31, CH18) into MenuItemChef

!new RegularCustomer('C11')
!C11.name := 'Alessia Venturi'
!C11.prefferedLanguage := #Italian

!new Banquet('BR10')
!BR10.number := 9001
!BR10.date := Date('2026-06-18')
!BR10.time := Time('20:30')
!BR10.numberPeople := 25
!BR10.name := 'S. Delgado'
!BR10.phoneNumber := '+1 646 500 9001'
!BR10.groupName := 'Coastal Research Delegation'
!BR10.paymentMethod := #CreditCard
!BR10.busService := true
!insert (BR10, C11) into ReservationCustomer
!insert (BR10, W20) into ReservationWaiter
!insert (BR10, W21) into ReservationWaiter
!insert (BR10, W22) into ReservationWaiter

!new BusDriver('BD11')
!BD11.name := 'Miguel Herrera'
!BD11.dateOfBirth := Date('1980-09-01')
!BD11.phoneNumber := '+1 305 500 7711'
!BD11.driverLicenseNr := 'FL-HR-558102'
!insert (BR10, BD11) into BanquetBusDriver

!new BusDriver('BD12')
!BD12.name := 'Sara Nordin'
!BD12.dateOfBirth := Date('1987-02-28')
!BD12.phoneNumber := '+46 8 500 7712'
!BD12.driverLicenseNr := 'SE-ND-204499'
!insert (BR10, BD12) into BanquetBusDriver

!new Table('T50_LEP2')
!T50_LEP2.number := 50
!T50_LEP2.description := 'Patio two-top A'
!T50_LEP2.capacity := 2
!insert (BR10, T50_LEP2) into ReservationTable

!new Table('T51_LEP2')
!T51_LEP2.number := 51
!T51_LEP2.description := 'Patio two-top B'
!T51_LEP2.capacity := 2
!insert (BR10, T51_LEP2) into ReservationTable

!new Table('T52_LEP2')
!T52_LEP2.number := 52
!T52_LEP2.description := 'Patio two-top C'
!T52_LEP2.capacity := 2
!insert (BR10, T52_LEP2) into ReservationTable

!new Table('T53_LEP2')
!T53_LEP2.number := 53
!T53_LEP2.description := 'Patio two-top D'
!T53_LEP2.capacity := 2
!insert (BR10, T53_LEP2) into ReservationTable

!new Table('T54_LEP2')
!T54_LEP2.number := 54
!T54_LEP2.description := 'Patio two-top E'
!T54_LEP2.capacity := 2
!insert (BR10, T54_LEP2) into ReservationTable

!new Table('T55_LEP2')
!T55_LEP2.number := 55
!T55_LEP2.description := 'Patio two-top F'
!T55_LEP2.capacity := 2
!insert (BR10, T55_LEP2) into ReservationTable

!new Table('T56_LEP2')
!T56_LEP2.number := 56
!T56_LEP2.description := 'Patio two-top G'
!T56_LEP2.capacity := 2
!insert (BR10, T56_LEP2) into ReservationTable

!new Table('T57_LEP2')
!T57_LEP2.number := 57
!T57_LEP2.description := 'Patio two-top H'
!T57_LEP2.capacity := 2
!insert (BR10, T57_LEP2) into ReservationTable

!new Table('T58_LEP2')
!T58_LEP2.number := 58
!T58_LEP2.description := 'Patio two-top I'
!T58_LEP2.capacity := 2
!insert (BR10, T58_LEP2) into ReservationTable

!new Table('T59_LEP2')
!T59_LEP2.number := 59
!T59_LEP2.description := 'Patio two-top J'
!T59_LEP2.capacity := 2
!insert (BR10, T59_LEP2) into ReservationTable

!new Table('T60_LEP2')
!T60_LEP2.number := 60
!T60_LEP2.description := 'Patio two-top K'
!T60_LEP2.capacity := 2
!insert (BR10, T60_LEP2) into ReservationTable

!new Table('T61_LEP2')
!T61_LEP2.number := 61
!T61_LEP2.description := 'Patio two-top L'
!T61_LEP2.capacity := 2
!insert (BR10, T61_LEP2) into ReservationTable

!new Table('T62_LEP2')
!T62_LEP2.number := 62
!T62_LEP2.description := 'Patio single add-on chair'
!T62_LEP2.capacity := 1
!insert (BR10, T62_LEP2) into ReservationTable

!new ItemOrder('IO1301')
!IO1301.time := Time('20:45')
!insert (BR10, IO1301) into ReservationItemOrdered
!insert (IO1301, MI30) into ItemOrderMenuItem

!new ItemOrder('IO1302')
!IO1302.time := Time('21:05')
!insert (BR10, IO1302) into ReservationItemOrdered
!insert (IO1302, MI29) into ItemOrderMenuItem

!new ItemOrder('IO1303')
!IO1303.time := Time('21:07')
!insert (BR10, IO1303) into ReservationItemOrdered
!insert (IO1303, MI29) into ItemOrderMenuItem

!new ItemOrder('IO1304')
!IO1304.time := Time('21:20')
!insert (BR10, IO1304) into ReservationItemOrdered
!insert (IO1304, MI31) into ItemOrderMenuItem

!new Individual('IR12')
!IR12.number := 9002
!IR12.date := Date('2026-06-18')
!IR12.time := Time('18:00')
!IR12.numberPeople := 3
!IR12.name := 'Walk-in Hold'
!IR12.phoneNumber := '+1 000 000 0000'
!IR12.seating := #Patio
!IR12.smoking := #NonSmoking
!insert (IR12, W21) into ReservationWaiter

!new Table('T70_LEP2')
!T70_LEP2.number := 70
!T70_LEP2.description := 'Patio corner three-top'
!T70_LEP2.capacity := 3
!insert (IR12, T70_LEP2) into ReservationTable

!new DietaryRequirement('DR8')
!DR8.diet := #Halal

!new ReportedAllergy('RA7')
!RA7.allergen := #Gluten
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 251 | 0.00% |
| Multiplicities Errors | 0 | 51 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 13 | 0.00% |
| Phones | 0 | 13 | 0.00% |

## Category complex
```
!new Restaurant('R13')
!R13.name := 'Saffron & Cedar'

!new Restaurant('R14')
!R14.name := 'Trattoria del Porto'

!new Owner('O31')
!O31.name := 'Naomi Ben‑Ari'
!O31.percentageShares := 50
!insert (R13, O31) into RestaurantOwner
!insert (R14, O31) into RestaurantOwner

!new Owner('O32')
!O32.name := 'Marco Lattanzi'
!O32.percentageShares := 30
!insert (R13, O32) into RestaurantOwner
!insert (R14, O32) into RestaurantOwner

!new Owner('O33')
!O33.name := 'Priya Nair'
!O33.percentageShares := 20
!insert (R13, O33) into RestaurantOwner
!insert (R14, O33) into RestaurantOwner

!new RegularCustomer('C14')
!C14.name := 'Gianni Russo'
!C14.prefferedLanguage := #Italian

!new RegularCustomer('C15')
!C15.name := 'Emily Chen'
!C15.prefferedLanguage := #English

!new RegularCustomer('C16')
!C16.name := 'Luis Herrera'
!C16.prefferedLanguage := #Spanish

!new HeadWaiter('HW13')
!HW13.name := 'Fatima Al‑Saleh'
!HW13.dateOfBirth := Date('1981-07-08')
!HW13.phoneNumber := '+1 416 555 0140'

!new Waiter('W27')
!W27.name := 'Omar Haddad'
!W27.dateOfBirth := Date('1994-11-19')
!W27.phoneNumber := '+1 416 555 0141'
!W27.spokenLanguage := #English
!insert (HW13, W27) into HeadWaiterWaiter

!new Waiter('W28')
!W28.name := 'Carla Bianchi'
!W28.dateOfBirth := Date('1997-03-02')
!W28.phoneNumber := '+1 416 555 0142'
!W28.spokenLanguage := #Italian
!insert (HW13, W28) into HeadWaiterWaiter

!new Waiter('W29')
!W29.name := 'Sergio Morales'
!W29.dateOfBirth := Date('1990-09-25')
!W29.phoneNumber := '+1 416 555 0143'
!W29.spokenLanguage := #Spanish
!insert (HW13, W29) into HeadWaiterWaiter

!new HeadWaiter('HW14')
!HW14.name := 'Hannah Vogel'
!HW14.dateOfBirth := Date('1986-02-14')
!HW14.phoneNumber := '+39 010 555 0900'

!new Waiter('W30')
!W30.name := 'Paolo Serra'
!W30.dateOfBirth := Date('1992-06-30')
!W30.phoneNumber := '+39 010 555 0901'
!W30.spokenLanguage := #Italian
!insert (HW14, W30) into HeadWaiterWaiter

!new Waiter('W31')
!W31.name := 'Clara Weiss'
!W31.dateOfBirth := Date('1995-12-06')
!W31.phoneNumber := '+39 010 555 0902'
!W31.spokenLanguage := #German
!insert (HW14, W31) into HeadWaiterWaiter

!new Cook('K20')
!K20.name := 'Rami Khalil'
!K20.dateOfBirth := Date('1978-05-11')
!K20.phoneNumber := '+1 416 555 0200'
!K20.yearsOfExperience := 15

!new Cook('K21')
!K21.name := 'Alessia Fontana'
!K21.dateOfBirth := Date('1999-01-17')
!K21.phoneNumber := '+39 010 555 0210'
!K21.yearsOfExperience := 0

!new Cook('K22')
!K22.name := 'Rami Khalil'
!K22.dateOfBirth := Date('1978-05-11')
!K22.phoneNumber := '+1 416 555 0200'
!K22.yearsOfExperience := 15

!new Chef('CH23')
!CH23.name := 'Yonatan Levi'
!CH23.dateOfBirth := Date('1989-10-22')
!CH23.phoneNumber := '+1 416 555 0201'
!insert (CH23, K20) into ChefCook

!new Chef('CH24')
!CH24.name := 'Dalia Shamir'
!CH24.dateOfBirth := Date('1991-08-04')
!CH24.phoneNumber := '+1 416 555 0202'
!insert (CH24, K22) into ChefCook

!new Chef('CH25')
!CH25.name := 'Federico Rizzo'
!CH25.dateOfBirth := Date('1984-04-09')
!CH25.phoneNumber := '+39 010 555 0211'
!insert (CH25, K21) into ChefCook

!new Manager('M12')
!M12.name := 'Nadia Ibrahim'
!M12.dateOfBirth := Date('1975-03-03')
!M12.phoneNumber := '+1 416 555 0300'

!new Manager('M13')
!M13.name := 'Enrico Costa'
!M13.dateOfBirth := Date('1972-09-15')
!M13.phoneNumber := '+39 010 555 0310'

!new BusDriver('BD14')
!BD14.name := 'Michael O’Neill'
!BD14.dateOfBirth := Date('1968-12-28')
!BD14.phoneNumber := '+1 416 555 0400'
!BD14.driverLicenseNr := 'ON-DZ-883102'

!new Allergen('AL1_SC')
!AL1_SC.type := #Gluten

!new Allergen('AL2_SC')
!AL2_SC.type := #Lactose

!new Allergen('AL3_SC')
!AL3_SC.type := #Nuts

!new Allergen('AL4_SC')
!AL4_SC.type := #Seafood

!new FoodItem('FI201_SC')
!FI201_SC.number := 201
!FI201_SC.description := 'Durum semolina flour'
!FI201_SC.purchaseFlag := true
!FI201_SC.unit := #Pound
!insert (FI201_SC, AL1_SC) into FoodItemAllergen

!new FoodItem('FI202_SC')
!FI202_SC.number := 202
!FI202_SC.description := 'Ricotta cheese'
!FI202_SC.purchaseFlag := true
!FI202_SC.unit := #Ounce
!insert (FI202_SC, AL2_SC) into FoodItemAllergen

!new FoodItem('FI203_SC')
!FI203_SC.number := 203
!FI203_SC.description := 'Pistachios (chopped)'
!FI203_SC.purchaseFlag := true
!FI203_SC.unit := #Gram
!insert (FI203_SC, AL3_SC) into FoodItemAllergen

!new FoodItem('FI204_SC')
!FI204_SC.number := 204
!FI204_SC.description := 'Calamari rings'
!FI204_SC.purchaseFlag := true
!FI204_SC.unit := #Pound
!insert (FI204_SC, AL4_SC) into FoodItemAllergen

!new FoodItem('FI205_SC')
!FI205_SC.number := 205
!FI205_SC.description := 'Lentils (brown)'
!FI205_SC.purchaseFlag := false
!FI205_SC.unit := #Pound

!new FoodItem('FI206_SC')
!FI206_SC.number := 206
!FI206_SC.description := 'Tomatoes (crushed)'
!FI206_SC.purchaseFlag := true
!FI206_SC.unit := #Pound

!new FoodItem('FI207_SC')
!FI207_SC.number := 207
!FI207_SC.description := 'Butter'
!FI207_SC.purchaseFlag := true
!FI207_SC.unit := #Ounce
!insert (FI207_SC, AL2_SC) into FoodItemAllergen

!new FoodItem('FI208_SC')
!FI208_SC.number := 208
!FI208_SC.description := 'Phyllo dough sheets'
!FI208_SC.purchaseFlag := true
!FI208_SC.unit := #Sheet
!insert (FI208_SC, AL1_SC) into FoodItemAllergen

!new MenuItem('MI39')
!MI39.description := 'Harira-style lentil soup'
!MI39.prepTime := 16.0
!MI39.classification := #Apetizer
!insert (MI39, CH23) into MenuItemChef
!insert (MI39, FI205_SC) into MenuItemFoodItem
!insert (MI39, FI206_SC) into MenuItemFoodItem

!new MenuItem('MI40')
!MI40.description := 'Pistachio baklava'
!MI40.prepTime := 35.0
!MI40.classification := #Dessert
!insert (MI40, CH24) into MenuItemChef
!insert (MI40, FI203_SC) into MenuItemFoodItem
!insert (MI40, FI208_SC) into MenuItemFoodItem
!insert (MI40, FI207_SC) into MenuItemFoodItem

!new MenuItem('MI41')
!MI41.description := 'Calamari fritti'
!MI41.prepTime := 14.5
!MI41.classification := #Main
!insert (MI41, CH25) into MenuItemChef
!insert (MI41, FI204_SC) into MenuItemFoodItem
!insert (MI41, FI201_SC) into MenuItemFoodItem

!new MenuItem('MI42')
!MI42.description := 'Espresso (single shot)'
!MI42.prepTime := 2.5
!MI42.classification := #Beverage
!insert (MI42, CH25) into MenuItemChef

!new MenuItem('MI43')
!MI43.description := 'Ricotta ravioli with tomato butter sauce'
!MI43.prepTime := 28.0
!MI43.classification := #Main
!insert (MI43, CH25) into MenuItemChef
!insert (MI43, FI201_SC) into MenuItemFoodItem
!insert (MI43, FI202_SC) into MenuItemFoodItem
!insert (MI43, FI206_SC) into MenuItemFoodItem
!insert (MI43, FI207_SC) into MenuItemFoodItem

!new Individual('IR16')
!IR16.time := Time('19:20')
!IR16.date := Date('2026-04-11')
!IR16.numberPeople := 3
!IR16.name := 'Emily Chen'
!IR16.phoneNumber := '+1 647 555 8899'
!IR16.number := 410
!IR16.seating := #Patio
!IR16.smoking := #NonSmoking
!insert (R13, IR16) into RestaurantReservation
!insert (IR16, C15) into ReservationCustomer
!insert (IR16, W27) into ReservationWaiter
!insert (IR16, W28) into ReservationWaiter

!new Table('TB501_SC')
!TB501_SC.number := 501
!TB501_SC.description := 'Patio two-top under heat lamp'
!TB501_SC.capacity := 2
!insert (IR16, TB501_SC) into ReservationTable

!new Table('TB502_SC')
!TB502_SC.number := 502
!TB502_SC.description := 'Patio two-top near herb planters'
!TB502_SC.capacity := 2
!insert (IR16, TB502_SC) into ReservationTable

!new ItemOrder('ORD4101_SC')
!ORD4101_SC.time := Time('19:35')
!insert (IR16, ORD4101_SC) into ReservationItemOrdered
!insert (ORD4101_SC, MI39) into ItemOrderMenuItem

!new ItemOrder('ORD4102_SC')
!ORD4102_SC.time := Time('19:55')
!insert (IR16, ORD4102_SC) into ReservationItemOrdered
!insert (ORD4102_SC, MI42) into ItemOrderMenuItem

!new Banquet('BR12')
!BR12.time := Time('18:00')
!BR12.date := Date('2026-04-12')
!BR12.numberPeople := 40
!BR12.name := 'Luis Herrera'
!BR12.phoneNumber := '+1 416 555 7711'
!BR12.number := 900
!BR12.groupName := 'International Chess Federation Delegation'
!BR12.paymentMethod := #Cash
!BR12.busService := true
!insert (R13, BR12) into RestaurantReservation
!insert (BR12, C16) into ReservationCustomer
!insert (BR12, BD14) into BanquetBusDriver
!insert (BR12, W27) into ReservationWaiter
!insert (BR12, W29) into ReservationWaiter

!new Table('TB510_SC')
!TB510_SC.number := 510
!TB510_SC.description := 'Main hall banquet table A'
!TB510_SC.capacity := 16
!insert (BR12, TB510_SC) into ReservationTable

!new Table('TB511_SC')
!TB511_SC.number := 511
!TB511_SC.description := 'Main hall banquet table B'
!TB511_SC.capacity := 12
!insert (BR12, TB511_SC) into ReservationTable

!new Table('TB512_SC')
!TB512_SC.number := 512
!TB512_SC.description := 'Main hall banquet table C'
!TB512_SC.capacity := 12
!insert (BR12, TB512_SC) into ReservationTable

!new ItemOrder('ORD9001_SC')
!ORD9001_SC.time := Time('18:20')
!insert (BR12, ORD9001_SC) into ReservationItemOrdered
!insert (ORD9001_SC, MI39) into ItemOrderMenuItem

!new ItemOrder('ORD9002_SC')
!ORD9002_SC.time := Time('18:21')
!insert (BR12, ORD9002_SC) into ReservationItemOrdered
!insert (ORD9002_SC, MI39) into ItemOrderMenuItem

!new ItemOrder('ORD9003_SC')
!ORD9003_SC.time := Time('18:50')
!insert (BR12, ORD9003_SC) into ReservationItemOrdered
!insert (ORD9003_SC, MI41) into ItemOrderMenuItem

!new ItemOrder('ORD9004_SC')
!ORD9004_SC.time := Time('18:52')
!insert (BR12, ORD9004_SC) into ReservationItemOrdered
!insert (ORD9004_SC, MI41) into ItemOrderMenuItem

!new ItemOrder('ORD9005_SC')
!ORD9005_SC.time := Time('19:15')
!insert (BR12, ORD9005_SC) into ReservationItemOrdered
!insert (ORD9005_SC, MI40) into ItemOrderMenuItem

!new Banquet('BR13')
!BR13.time := Time('20:30')
!BR13.date := Date('2026-04-18')
!BR13.numberPeople := 18
!BR13.name := 'Gianni Russo'
!BR13.phoneNumber := '+39 333 111 2222'
!BR13.number := 901
!BR13.groupName := 'Porto Antico Rowing Club'
!BR13.paymentMethod := #CreditCard
!BR13.busService := false
!insert (R14, BR13) into RestaurantReservation
!insert (BR13, C14) into ReservationCustomer
!insert (BR13, W30) into ReservationWaiter

!new Table('TB610_SC')
!TB610_SC.number := 610
!TB610_SC.description := 'Harbor-view long table'
!TB610_SC.capacity := 8
!insert (BR13, TB610_SC) into ReservationTable

!new Table('TB611_SC')
!TB611_SC.number := 611
!TB611_SC.description := 'Side long table near wine rack'
!TB611_SC.capacity := 6
!insert (BR13, TB611_SC) into ReservationTable

!new Table('TB612_SC')
!TB612_SC.number := 612
!TB612_SC.description := 'Four-top annex table'
!TB612_SC.capacity := 4
!insert (BR13, TB612_SC) into ReservationTable

!new Individual('IR17')
!IR17.time := Time('19:45')
!IR17.date := Date('2026-04-18')
!IR17.numberPeople := 5
!IR17.name := 'Marta Nowak'
!IR17.phoneNumber := '+39 340 222 9090'
!IR17.number := 411
!IR17.seating := #Inside
!IR17.smoking := #NonSmoking
!insert (R14, IR17) into RestaurantReservation
!insert (IR17, W31) into ReservationWaiter
!insert (IR17, W30) into ReservationWaiter

!new Table('TB620_SC')
!TB620_SC.number := 620
!TB620_SC.description := 'Inside four-top by the window'
!TB620_SC.capacity := 4
!insert (IR17, TB620_SC) into ReservationTable

!new Table('TB621_SC')
!TB621_SC.number := 621
!TB621_SC.description := 'Inside two-top pulled adjacent'
!TB621_SC.capacity := 2
!insert (IR17, TB621_SC) into ReservationTable

!new ItemOrder('ORD4111_SC')
!ORD4111_SC.time := Time('20:00')
!insert (IR17, ORD4111_SC) into ReservationItemOrdered
!insert (ORD4111_SC, MI41) into ItemOrderMenuItem

!new ItemOrder('ORD4112_SC')
!ORD4112_SC.time := Time('20:10')
!insert (IR17, ORD4112_SC) into ReservationItemOrdered
!insert (ORD4112_SC, MI43) into ItemOrderMenuItem

!new ItemOrder('ORD4113_SC')
!ORD4113_SC.time := Time('20:35')
!insert (IR17, ORD4113_SC) into ReservationItemOrdered
!insert (ORD4113_SC, MI40) into ItemOrderMenuItem

!new Individual('IR18')
!IR18.time := Time('12:10')
!IR18.date := Date('2026-04-13')
!IR18.numberPeople := 1
!IR18.name := 'Walk-in Placeholder'
!IR18.phoneNumber := '+1 000 000 0000'
!IR18.number := 412
!IR18.seating := #Inside
!IR18.smoking := #NonSmoking
!insert (IR18, W28) into ReservationWaiter

!new Table('TB530_SC')
!TB530_SC.number := 530
!TB530_SC.description := 'Spare two-top held for overflow'
!TB530_SC.capacity := 2
!insert (IR18, TB530_SC) into ReservationTable

!new ItemOrder('ORD4121_SC')
!ORD4121_SC.time := Time('12:15')
!insert (IR18, ORD4121_SC) into ReservationItemOrdered
!insert (ORD4121_SC, MI42) into ItemOrderMenuItem

!new DietaryRequirement('DR11')
!DR11.diet := #Kosher

!new DietaryRequirement('DR12')
!DR12.diet := #Vegetarian

!new ReportedAllergy('RA10')
!RA10.allergen := #Seafood

!new ReportedAllergy('RA11')
!RA11.allergen := #Gluten
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 369 | 0.00% |
| Multiplicities Errors | 0 | 85 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 21 | 0.00% |
| Phones | 0 | 21 | 0.00% |

## Category edge
```
!new Restaurant('R15')
!R15.name := 'Sahara Smokehouse & Tea'

!new Restaurant('R16')
!R16.name := 'Kintsugi Omakase Counter'

!new Owner('O34')
!O34.name := 'Leila Haddad'
!O34.percentageShares := 25
!insert (R15, O34) into RestaurantOwner
!insert (R16, O34) into RestaurantOwner

!new Owner('O35')
!O35.name := 'Kenji Sato'
!O35.percentageShares := 75
!insert (R15, O35) into RestaurantOwner

!new Owner('O36')
!O36.name := 'Margaret O’Connor'
!O36.percentageShares := 25
!insert (R16, O36) into RestaurantOwner

!new Owner('O37')
!O37.name := 'Chen Wei'
!O37.percentageShares := 50
!insert (R16, O37) into RestaurantOwner

!new RegularCustomer('C17')
!C17.name := 'Harper Johnson'
!C17.prefferedLanguage := #English

!new RegularCustomer('C18')
!C18.name := 'Lucía Fernández'
!C18.prefferedLanguage := #Spanish

!new HeadWaiter('HW15')
!HW15.name := 'Dieter Klein'
!HW15.dateOfBirth := Date('1979-12-14')
!HW15.phoneNumber := '+49-89-555-0181'

!new Waiter('W32')
!W32.name := 'Ana María Cruz'
!W32.dateOfBirth := Date('1999-05-10')
!W32.phoneNumber := '+34-600-555-010'
!W32.spokenLanguage := #Spanish
!insert (HW15, W32) into HeadWaiterWaiter

!new Waiter('W33')
!W33.name := 'Ethan Brooks'
!W33.dateOfBirth := Date('2001-08-21')
!W33.phoneNumber := '+1-212-555-0111'
!W33.spokenLanguage := #English
!insert (HW15, W33) into HeadWaiterWaiter

!new Waiter('W34')
!W34.name := 'Sabrina Vogel'
!W34.dateOfBirth := Date('1997-02-02')
!W34.phoneNumber := '+43-699-555-0123'
!W34.spokenLanguage := #German
!insert (HW15, W34) into HeadWaiterWaiter

!new Cook('K23')
!K23.name := 'María Soledad Pérez'
!K23.dateOfBirth := Date('1967-03-09')
!K23.phoneNumber := '+54-11-5555-0166'
!K23.yearsOfExperience := 45

!new Cook('K24')
!K24.name := 'María Soledad Pérez'
!K24.dateOfBirth := Date('1967-03-09')
!K24.phoneNumber := '+54-11-5555-0166'
!K24.yearsOfExperience := 45

!new Cook('K25')
!K25.name := 'Tomáš Novák'
!K25.dateOfBirth := Date('1998-10-28')
!K25.phoneNumber := '+420-777-555-013'
!K25.yearsOfExperience := 0

!new Chef('CH26')
!CH26.name := 'Rania Nasser'
!CH26.dateOfBirth := Date('1985-01-30')
!CH26.phoneNumber := '+971-50-555-0155'
!insert (CH26, K23) into ChefCook

!new Chef('CH27')
!CH27.name := 'Hiro Tanabe'
!CH27.dateOfBirth := Date('1992-07-07')
!CH27.phoneNumber := '+81-80-5555-0144'
!insert (CH27, K24) into ChefCook

!new Chef('CH28')
!CH28.name := 'Zoe Williams'
!CH28.dateOfBirth := Date('1995-11-19')
!CH28.phoneNumber := '+44-7700-555-022'
!insert (CH28, K25) into ChefCook

!new Manager('M14')
!M14.name := 'Sanjay Patel'
!M14.dateOfBirth := Date('1982-06-16')
!M14.phoneNumber := '+1-647-555-0190'

!new BusDriver('BD15')
!BD15.name := 'Olga Petrova'
!BD15.dateOfBirth := Date('1989-09-01')
!BD15.phoneNumber := '+7-916-555-0102'
!BD15.driverLicenseNr := 'RU-77-900122'

!new BusDriver('BD16')
!BD16.name := 'Kwame Mensah'
!BD16.dateOfBirth := Date('1991-04-12')
!BD16.phoneNumber := '+233-24-555-0110'
!BD16.driverLicenseNr := 'GH-DL-441209'

!new Allergen('ALG1_E2')
!ALG1_E2.type := #Gluten

!new Allergen('ALG2_E2')
!ALG2_E2.type := #Lactose

!new Allergen('ALG3_E2')
!ALG3_E2.type := #Nuts

!new Allergen('ALG4_E2')
!ALG4_E2.type := #Seafood

!new FoodItem('FI20_E2')
!FI20_E2.number := 20
!FI20_E2.description := 'Barley miso paste'
!FI20_E2.purchaseFlag := true
!FI20_E2.unit := #Ounce
!insert (FI20_E2, ALG1_E2) into FoodItemAllergen

!new FoodItem('FI21_E2')
!FI21_E2.number := 21
!FI21_E2.description := 'Cashew cream'
!FI21_E2.purchaseFlag := false
!FI21_E2.unit := #Gram
!insert (FI21_E2, ALG3_E2) into FoodItemAllergen

!new FoodItem('FI22_E2')
!FI22_E2.number := 22
!FI22_E2.description := 'Milk powder'
!FI22_E2.purchaseFlag := true
!FI22_E2.unit := #Pound
!insert (FI22_E2, ALG2_E2) into FoodItemAllergen

!new FoodItem('FI23_E2')
!FI23_E2.number := 23
!FI23_E2.description := 'Wheat ramen sheet (dried)'
!FI23_E2.purchaseFlag := true
!FI23_E2.unit := #Sheet
!insert (FI23_E2, ALG1_E2) into FoodItemAllergen

!new FoodItem('FI24_E2')
!FI24_E2.number := 24
!FI24_E2.description := 'Prawn stock concentrate'
!FI24_E2.purchaseFlag := true
!FI24_E2.unit := #Ounce
!insert (FI24_E2, ALG4_E2) into FoodItemAllergen

!new FoodItem('FI25_E2')
!FI25_E2.number := 25
!FI25_E2.description := 'Almond brittle shards'
!FI25_E2.purchaseFlag := true
!FI25_E2.unit := #Dozen
!insert (FI25_E2, ALG3_E2) into FoodItemAllergen

!new FoodItem('FI26_E2')
!FI26_E2.number := 26
!FI26_E2.description := 'Butter'
!FI26_E2.purchaseFlag := true
!FI26_E2.unit := #Ounce
!insert (FI26_E2, ALG2_E2) into FoodItemAllergen

!new MenuItem('MI44')
!MI44.description := 'Charred Lamb over Barley-Miso Glaze'
!MI44.prepTime := 35.0
!MI44.classification := #Main
!insert (MI44, CH26) into MenuItemChef
!insert (MI44, FI20_E2) into MenuItemFoodItem
!insert (MI44, FI26_E2) into MenuItemFoodItem

!new MenuItem('MI45')
!MI45.description := 'Cashew-Cloud Parfait with Almond Shards'
!MI45.prepTime := 8.0
!MI45.classification := #Dessert
!insert (MI45, CH27) into MenuItemChef
!insert (MI45, FI21_E2) into MenuItemFoodItem
!insert (MI45, FI25_E2) into MenuItemFoodItem

!new MenuItem('MI46')
!MI46.description := 'Hot Milk Tea with Toasted Wheat Aroma'
!MI46.prepTime := 4.5
!MI46.classification := #Beverage
!insert (MI46, CH28) into MenuItemChef
!insert (MI46, FI22_E2) into MenuItemFoodItem
!insert (MI46, FI23_E2) into MenuItemFoodItem

!new MenuItem('MI47')
!MI47.description := 'Prawn-Stock Ramen Bites'
!MI47.prepTime := 12.0
!MI47.classification := #Apetizer
!insert (MI47, CH26) into MenuItemChef
!insert (MI47, FI23_E2) into MenuItemFoodItem
!insert (MI47, FI24_E2) into MenuItemFoodItem

!new MenuItem('MI48')
!MI48.description := 'Brown Butter Sip (mini)'
!MI48.prepTime := 0.2
!MI48.classification := #Beverage
!insert (MI48, CH28) into MenuItemChef
!insert (MI48, FI26_E2) into MenuItemFoodItem

!new Banquet('BR14')
!BR14.time := Time('18:00')
!BR14.date := Date('2026-12-31')
!BR14.numberPeople := 1
!BR14.name := 'N. Qureshi'
!BR14.phoneNumber := '+92-300-555-0100'
!BR14.number := 88001
!BR14.groupName := 'Solo Donor Salon'
!BR14.paymentMethod := #CreditCard
!BR14.busService := true
!insert (R16, BR14) into RestaurantReservation
!insert (BR14, W32) into ReservationWaiter
!insert (BR14, W33) into ReservationWaiter
!insert (BR14, W34) into ReservationWaiter

!new Table('TB2_E2')
!TB2_E2.number := 501
!TB2_E2.description := 'Single seat at chef’s rail'
!TB2_E2.capacity := 1
!insert (BR14, TB2_E2) into ReservationTable

!new Banquet('BR15')
!BR15.time := Time('12:30')
!BR15.date := Date('2026-05-01')
!BR15.numberPeople := 60
!BR15.name := 'Lucía Fernández'
!BR15.phoneNumber := '+34-610-555-012'
!BR15.number := 88002
!BR15.groupName := 'Andalusian Wedding Lunch'
!BR15.paymentMethod := #Cash
!BR15.busService := true
!insert (R16, BR15) into RestaurantReservation
!insert (BR15, C18) into ReservationCustomer
!insert (BR15, W32) into ReservationWaiter
!insert (BR15, BD15) into BanquetBusDriver
!insert (BR15, BD16) into BanquetBusDriver

!new Table('TB3A_E2')
!TB3A_E2.number := 601
!TB3A_E2.description := 'Banquet table A (long)'
!TB3A_E2.capacity := 30
!insert (BR15, TB3A_E2) into ReservationTable

!new Table('TB3B_E2')
!TB3B_E2.number := 602
!TB3B_E2.description := 'Banquet table B (long)'
!TB3B_E2.capacity := 30
!insert (BR15, TB3B_E2) into ReservationTable

!new ItemOrder('IO1601')
!IO1601.time := Time('12:40')
!insert (BR15, IO1601) into ReservationItemOrdered
!insert (IO1601, MI47) into ItemOrderMenuItem

!new ItemOrder('IO1602')
!IO1602.time := Time('12:41')
!insert (BR15, IO1602) into ReservationItemOrdered
!insert (IO1602, MI44) into ItemOrderMenuItem

!new ItemOrder('IO1603')
!IO1603.time := Time('12:42')
!insert (BR15, IO1603) into ReservationItemOrdered
!insert (IO1603, MI44) into ItemOrderMenuItem

!new ItemOrder('IO1604')
!IO1604.time := Time('12:50')
!insert (BR15, IO1604) into ReservationItemOrdered
!insert (IO1604, MI46) into ItemOrderMenuItem

!new ItemOrder('IO1605')
!IO1605.time := Time('13:05')
!insert (BR15, IO1605) into ReservationItemOrdered
!insert (IO1605, MI45) into ItemOrderMenuItem

!new ItemOrder('IO1606')
!IO1606.time := Time('13:06')
!insert (BR15, IO1606) into ReservationItemOrdered
!insert (IO1606, MI48) into ItemOrderMenuItem

!new Individual('IR19')
!IR19.time := Time('21:15')
!IR19.date := Date('2026-05-01')
!IR19.numberPeople := 2
!IR19.name := 'Harper Johnson'
!IR19.phoneNumber := '+1-416-555-0109'
!IR19.number := 777
!IR19.seating := #Patio
!IR19.smoking := #NonSmoking
!insert (R16, IR19) into RestaurantReservation
!insert (IR19, C17) into ReservationCustomer
!insert (IR19, W34) into ReservationWaiter

!new Table('TI2_E2')
!TI2_E2.number := 999
!TI2_E2.description := 'Oversized communal table reserved for two (odd request)'
!TI2_E2.capacity := 100
!insert (IR19, TI2_E2) into ReservationTable

!new ItemOrder('IO1607')
!IO1607.time := Time('21:20')
!insert (IR19, IO1607) into ReservationItemOrdered
!insert (IO1607, MI46) into ItemOrderMenuItem

!new DietaryRequirement('DR13')
!DR13.diet := #Halal

!new DietaryRequirement('DR14')
!DR14.diet := #Kosher

!new ReportedAllergy('RA12')
!RA12.allergen := #Seafood
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 272 | 0.00% |
| Multiplicities Errors | 0 | 62 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 16 | 0.00% |
| Phones | 0 | 16 | 0.00% |

## Category invalid
```
!new Restaurant('R8')
!R8.name := 'Trattoria del Fiume'

!new Owner('O17')
!O17.name := 'Lucia Ferraro'
!O17.percentageShares := 55
!insert (R8, O17) into RestaurantOwner

!new Owner('O18')
!O18.name := 'Paolo Ricci'
!O18.percentageShares := 45
!insert (R8, O18) into RestaurantOwner

!new HeadWaiter('HW8')
!HW8.name := 'Enzo Martini'
!HW8.dateOfBirth := Date('1978-02-14')
!HW8.phoneNumber := '+39 333 120 4455'

!new Waiter('W15')
!W15.name := 'Chiara Gallo'
!W15.dateOfBirth := Date('1999-07-22')
!W15.phoneNumber := '+39 333 220 5566'
!W15.spokenLanguage := #Italian
!insert (HW8, W15) into HeadWaiterWaiter

!new Waiter('W16')
!W16.name := 'Diego Morales'
!W16.dateOfBirth := Date('1994-12-01')
!W16.phoneNumber := '+39 333 330 6677'
!W16.spokenLanguage := #Spanish
!insert (HW8, W16) into HeadWaiterWaiter

!new Cook('K12')
!K12.name := 'Nadia Borkowski'
!K12.dateOfBirth := Date('1986-09-10')
!K12.phoneNumber := '+39 333 440 7788'
!K12.yearsOfExperience := 0

!new Chef('CH13')
!CH13.name := 'Matteo Conti'
!CH13.dateOfBirth := Date('1983-04-03')
!CH13.phoneNumber := '+39 333 550 8899'
!insert (CH13, K12) into ChefCook

!new Chef('CH14')
!CH14.name := 'Sara De Luca'
!CH14.dateOfBirth := Date('1991-01-19')
!CH14.phoneNumber := '+39 333 660 9900'
!insert (CH14, K12) into ChefCook

!new BusDriver('BD8')
!BD8.name := 'Alessandro Greco'
!BD8.dateOfBirth := Date('1970-05-08')
!BD8.phoneNumber := '+39 333 770 1010'
!BD8.driverLicenseNr := 'IT-FI-777210'

!new Table('T1_TDF')
!T1_TDF.number := 1
!T1_TDF.description := 'Two-top by the wine shelves (inside)'
!T1_TDF.capacity := 2

!new Table('T2_TDF')
!T2_TDF.number := 2
!T2_TDF.description := 'Four-top near the open kitchen (inside)'
!T2_TDF.capacity := 4

!new Table('T11_TDF')
!T11_TDF.number := 11
!T11_TDF.description := 'Outdoor terrace table under pergola'
!T11_TDF.capacity := 6

!new Table('T12_TDF')
!T12_TDF.number := 12
!T12_TDF.description := 'Private room: central table'
!T12_TDF.capacity := 8

!new Table('T13_TDF')
!T13_TDF.number := 13
!T13_TDF.description := 'Private room: side table'
!T13_TDF.capacity := 8

!new Table('T14_TDF')
!T14_TDF.number := 14
!T14_TDF.description := 'Private room: round table'
!T14_TDF.capacity := 10

!new RegularCustomer('C9')
!C9.name := 'Giovanni Bianchi'
!C9.prefferedLanguage := #Italian

!new Individual('IR9')
!IR9.time := Time('19:15')
!IR9.date := Date('2026-09-03')
!IR9.numberPeople := 2
!IR9.name := 'Giovanni Bianchi'
!IR9.phoneNumber := '+39 328 555 1212'
!IR9.number := 5201
!IR9.seating := #Patio
!IR9.smoking := #NonSmoking
!insert (R8, IR9) into RestaurantReservation
!insert (IR9, C9) into ReservationCustomer
!insert (IR9, W15) into ReservationWaiter
!insert (IR9, T1_TDF) into ReservationTable

!new Banquet('BR7')
!BR7.time := Time('18:30')
!BR7.date := Date('2026-09-10')
!BR7.numberPeople := 20
!BR7.name := 'Rossi Wedding Coordinator'
!BR7.phoneNumber := '+39 055 700 111'
!BR7.number := 6301
!BR7.groupName := 'Matrimonio Rossi'
!BR7.paymentMethod := #CreditCard
!BR7.busService := true
!insert (R8, BR7) into RestaurantReservation
!insert (BR7, W15) into ReservationWaiter
!insert (BR7, W16) into ReservationWaiter
!insert (BR7, T12_TDF) into ReservationTable
!insert (BR7, T13_TDF) into ReservationTable
!insert (BR7, T11_TDF) into ReservationTable
!insert (BR7, BD8) into BanquetBusDriver

!new Banquet('BR8')
!BR8.time := Time('12:00')
!BR8.date := Date('2026-09-11')
!BR8.numberPeople := 9
!BR8.name := 'Arno Bank Events Team'
!BR8.phoneNumber := '+39 055 701 222'
!BR8.number := 6302
!BR8.groupName := 'Arno Bank Executive Lunch'
!BR8.paymentMethod := #Cash
!BR8.busService := true
!insert (R8, BR8) into RestaurantReservation
!insert (BR8, W16) into ReservationWaiter
!insert (BR8, T14_TDF) into ReservationTable
!insert (BR8, BD8) into BanquetBusDriver

!new Allergen('AL1_TDF')
!AL1_TDF.type := #Gluten

!new Allergen('AL2_TDF')
!AL2_TDF.type := #Nuts

!new Allergen('AL3_TDF')
!AL3_TDF.type := #Lactose

!new FoodItem('F501')
!F501.number := 210
!F501.description := 'Durum wheat pasta'
!F501.purchaseFlag := true
!F501.unit := #Pound
!insert (F501, AL1_TDF) into FoodItemAllergen

!new FoodItem('F502')
!F502.number := 211
!F502.description := 'Parmigiano Reggiano'
!F502.purchaseFlag := true
!F502.unit := #Ounce
!insert (F502, AL3_TDF) into FoodItemAllergen

!new FoodItem('F503')
!F503.number := 212
!F503.description := 'Pine nuts'
!F503.purchaseFlag := true
!F503.unit := #Gram
!insert (F503, AL2_TDF) into FoodItemAllergen

!new FoodItem('F504')
!F504.number := 213
!F504.description := 'Egg sheets for lasagna'
!F504.purchaseFlag := true
!F504.unit := #Sheet
!insert (F504, AL1_TDF) into FoodItemAllergen

!new MenuItem('MI23')
!MI23.description := 'Pesto pasta (traditional)'
!MI23.prepTime := 14.0
!MI23.classification := #Main
!insert (MI23, CH13) into MenuItemChef
!insert (MI23, F501) into MenuItemFoodItem
!insert (MI23, F503) into MenuItemFoodItem
!insert (MI23, F502) into MenuItemFoodItem

!new MenuItem('MI24')
!MI24.description := 'Lasagna al forno'
!MI24.prepTime := 40.0
!MI24.classification := #Main
!insert (MI24, CH14) into MenuItemChef
!insert (MI24, F504) into MenuItemFoodItem
!insert (MI24, F502) into MenuItemFoodItem

!new MenuItem('MI25')
!MI25.description := 'Espresso'
!MI25.prepTime := 2.0
!MI25.classification := #Beverage
!insert (MI25, CH13) into MenuItemChef

!new ItemOrder('IO1101')
!IO1101.time := Time('19:25')
!insert (IR9, IO1101) into ReservationItemOrdered
!insert (IO1101, MI25) into ItemOrderMenuItem

!new ItemOrder('IO1102')
!IO1102.time := Time('19:35')
!insert (IR9, IO1102) into ReservationItemOrdered
!insert (IO1102, MI23) into ItemOrderMenuItem

!new ItemOrder('IO1103')
!IO1103.time := Time('19:10')
!insert (BR7, IO1103) into ReservationItemOrdered
!insert (IO1103, MI24) into ItemOrderMenuItem

!new ItemOrder('IO1104')
!IO1104.time := Time('12:20')
!insert (BR8, IO1104) into ReservationItemOrdered
!insert (IO1104, MI23) into ItemOrderMenuItem
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 3 | 41 | 7.32% |
| Invariants Errors (Not included on General) | 0 | 4 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `ChefCook':
  Object `K12' of class `Cook' is connected to 2 objects of class `Chef'
  at association end `underSupervisionOf' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `ReservationTable':
  Object `T2_TDF' of class `Table' is connected to 0 objects of class `Reservation'
  at association end `reservation' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `BanquetBusDriver':
  Object `BD8' of class `BusDriver' is connected to 2 objects of class `Banquet'
  at association end `banquet' but the multiplicity is specified as `1'.
```

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 10 | 0.00% |
| Phones | 0 | 10 | 0.00% |

## Generation 2 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 1305 | 0.00% |
| Multiplicities Errors | 0 | 243 | 0.00% |
| Invariants Errors | 0 | 16 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 3 | 41 | 7.32% |
| Invariants Errors (Not included on General) | 0 | 4 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `ChefCook':
  Object `K12' of class `Cook' is connected to 2 objects of class `Chef'
  at association end `underSupervisionOf' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `ReservationTable':
  Object `T2_TDF' of class `Table' is connected to 0 objects of class `Reservation'
  at association end `reservation' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `BanquetBusDriver':
  Object `BD8' of class `BusDriver' is connected to 2 objects of class `Banquet'
  at association end `banquet' but the multiplicity is specified as `1'.
```

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 75 | 0.00% |
| Phones | 0 | 75 | 0.00% |

# Generation 3
## Category baseline
```
!new Restaurant('R12')
!R12.name := 'Nordic Lantern Café'

!new Owner('O29')
!O29.name := 'Kari Johansen'
!O29.percentageShares := 70
!insert (R12, O29) into RestaurantOwner

!new Owner('O30')
!O30.name := 'Samuel Adeyemi'
!O30.percentageShares := 30
!insert (R12, O30) into RestaurantOwner

!new RegularCustomer('C13')
!C13.name := 'Chloe Nguyen'
!C13.prefferedLanguage := #English

!new HeadWaiter('HW12')
!HW12.name := 'Francesca Romano'
!HW12.dateOfBirth := Date('1986-03-23')
!HW12.phoneNumber := '+39-02-555-7711'

!new Waiter('W25')
!W25.name := 'Mateo García'
!W25.dateOfBirth := Date('1997-07-01')
!W25.phoneNumber := '+34-680-555-900'
!W25.spokenLanguage := #Spanish
!insert (HW12, W25) into HeadWaiterWaiter

!new Waiter('W26')
!W26.name := 'Hanna Vogel'
!W26.dateOfBirth := Date('1990-11-18')
!W26.phoneNumber := '+49-40-555-3344'
!W26.spokenLanguage := #German
!insert (HW12, W26) into HeadWaiterWaiter

!new Manager('M11')
!M11.name := 'Oliver Smith'
!M11.dateOfBirth := Date('1976-08-09')
!M11.phoneNumber := '+44-20-555-6060'

!new Cook('K18')
!K18.name := 'Sigrid Larsen'
!K18.dateOfBirth := Date('1984-02-28')
!K18.phoneNumber := '+47-21-555-1212'
!K18.yearsOfExperience := 8

!new Cook('K19')
!K19.name := 'Eirik Lund'
!K19.dateOfBirth := Date('1986-10-10')
!K19.phoneNumber := '+47-21-555-1313'
!K19.yearsOfExperience := 10

!new Chef('CH21')
!CH21.name := 'Arjun Mehta'
!CH21.dateOfBirth := Date('1991-05-12')
!CH21.phoneNumber := '+1-408-555-2323'
!insert (CH21, K18) into ChefCook

!new Chef('CH22')
!CH22.name := 'Lucia Bianchi'
!CH22.dateOfBirth := Date('1993-09-03')
!CH22.phoneNumber := '+39-351-555-4545'
!insert (CH22, K19) into ChefCook

!new BusDriver('BD13')
!BD13.name := 'George Papadopoulos'
!BD13.dateOfBirth := Date('1970-01-26')
!BD13.phoneNumber := '+30-21-555-9898'
!BD13.driverLicenseNr := 'GR-LIC-88310'

!new Individual('IR15')
!IR15.time := Time('12:15')
!IR15.date := Date('2026-05-03')
!IR15.numberPeople := 3
!IR15.name := 'Chloe Nguyen'
!IR15.phoneNumber := '+1-206-555-0191'
!IR15.number := 703
!IR15.seating := #Inside
!IR15.smoking := #Smoking
!insert (R12, IR15) into RestaurantReservation
!insert (IR15, C13) into ReservationCustomer
!insert (IR15, W25) into ReservationWaiter
!insert (IR15, W26) into ReservationWaiter

!new Table('T50_NLC')
!T50_NLC.number := 50
!T50_NLC.description := 'Small indoor round table by bookcase'
!T50_NLC.capacity := 3
!insert (IR15, T50_NLC) into ReservationTable

!new Banquet('BR11')
!BR11.time := Time('18:00')
!BR11.date := Date('2026-05-04')
!BR11.numberPeople := 16
!BR11.name := 'Elle Ranta'
!BR11.phoneNumber := '+358-40-555-7777'
!BR11.number := 915
!BR11.groupName := 'Sámi Cultural Exchange Dinner'
!BR11.paymentMethod := #CreditCard
!BR11.busService := true
!insert (R12, BR11) into RestaurantReservation
!insert (BR11, W26) into ReservationWaiter
!insert (BR11, BD13) into BanquetBusDriver

!new Table('T60_NLC')
!T60_NLC.number := 60
!T60_NLC.description := 'Long banquet table near skylight'
!T60_NLC.capacity := 10
!insert (BR11, T60_NLC) into ReservationTable

!new Table('T61_NLC')
!T61_NLC.number := 61
!T61_NLC.description := 'Secondary banquet table near entrance'
!T61_NLC.capacity := 8
!insert (BR11, T61_NLC) into ReservationTable

!new Allergen('A3_GLU12')
!A3_GLU12.type := #Gluten

!new Allergen('A3_LAC12')
!A3_LAC12.type := #Lactose

!new Allergen('A3_NUT12')
!A3_NUT12.type := #Nuts

!new Allergen('A3_SEA12')
!A3_SEA12.type := #Seafood

!new FoodItem('F901')
!F901.number := 301
!F901.description := 'Rye crispbread'
!F901.purchaseFlag := true
!F901.unit := #Sheet
!insert (F901, A3_GLU12) into FoodItemAllergen

!new FoodItem('F902')
!F902.number := 302
!F902.description := 'Cultured butter'
!F902.purchaseFlag := true
!F902.unit := #Ounce
!insert (F902, A3_LAC12) into FoodItemAllergen

!new FoodItem('F903')
!F903.number := 303
!F903.description := 'Hazelnuts (toasted, crushed)'
!F903.purchaseFlag := true
!F903.unit := #Gram
!insert (F903, A3_NUT12) into FoodItemAllergen

!new FoodItem('F904')
!F904.number := 304
!F904.description := 'Smoked salmon'
!F904.purchaseFlag := false
!F904.unit := #Pound
!insert (F904, A3_SEA12) into FoodItemAllergen

!new FoodItem('F905')
!F905.number := 305
!F905.description := 'Cream'
!F905.purchaseFlag := true
!F905.unit := #Ounce
!insert (F905, A3_LAC12) into FoodItemAllergen

!new MenuItem('MI35')
!MI35.description := 'Crispbread with smoked salmon and cultured butter'
!MI35.prepTime := 7.0
!MI35.classification := #Apetizer
!insert (MI35, CH21) into MenuItemChef
!insert (MI35, F901) into MenuItemFoodItem
!insert (MI35, F904) into MenuItemFoodItem
!insert (MI35, F902) into MenuItemFoodItem

!new MenuItem('MI36')
!MI36.description := 'Creamy salmon chowder (small bowl)'
!MI36.prepTime := 16.0
!MI36.classification := #Main
!insert (MI36, CH22) into MenuItemChef
!insert (MI36, F904) into MenuItemFoodItem
!insert (MI36, F905) into MenuItemFoodItem

!new MenuItem('MI37')
!MI37.description := 'Nordic nut crumble (hazelnut)'
!MI37.prepTime := 11.5
!MI37.classification := #Dessert
!insert (MI37, CH21) into MenuItemChef
!insert (MI37, F903) into MenuItemFoodItem
!insert (MI37, F902) into MenuItemFoodItem

!new MenuItem('MI38')
!MI38.description := 'House coffee'
!MI38.prepTime := 3.0
!MI38.classification := #Beverage
!insert (MI38, CH22) into MenuItemChef

!new ItemOrder('IO1501')
!IO1501.time := Time('12:28')
!insert (IR15, IO1501) into ReservationItemOrdered
!insert (IO1501, MI35) into ItemOrderMenuItem

!new ItemOrder('IO1502')
!IO1502.time := Time('12:50')
!insert (IR15, IO1502) into ReservationItemOrdered
!insert (IO1502, MI38) into ItemOrderMenuItem

!new ItemOrder('IO1503')
!IO1503.time := Time('18:25')
!insert (BR11, IO1503) into ReservationItemOrdered
!insert (IO1503, MI35) into ItemOrderMenuItem

!new ItemOrder('IO1504')
!IO1504.time := Time('18:40')
!insert (BR11, IO1504) into ReservationItemOrdered
!insert (IO1504, MI36) into ItemOrderMenuItem

!new ItemOrder('IO1505')
!IO1505.time := Time('19:05')
!insert (BR11, IO1505) into ReservationItemOrdered
!insert (IO1505, MI37) into ItemOrderMenuItem

!new DietaryRequirement('DR10')
!DR10.diet := #Vegan

!new ReportedAllergy('RA9')
!RA9.allergen := #Seafood
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 188 | 0.00% |
| Multiplicities Errors | 0 | 42 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 11 | 0.00% |
| Phones | 0 | 11 | 0.00% |

## Category boundary
```
!new Restaurant('R18')
!R18.name := 'Nordic Noor Hall'

!new Restaurant('R19')
!R19.name := 'Desert Lantern'

!new Owner('O40')
!O40.name := 'Satoshi Kuroda'
!O40.percentageShares := 60
!insert (R18, O40) into RestaurantOwner
!insert (R19, O40) into RestaurantOwner

!new Owner('O41')
!O41.name := 'Fatima Al‑Hassan'
!O41.percentageShares := 40
!insert (R18, O41) into RestaurantOwner
!insert (R19, O41) into RestaurantOwner

!new HeadWaiter('HW17')
!HW17.name := 'Bridget O’Connor'
!HW17.dateOfBirth := Date('1978-03-11')
!HW17.phoneNumber := '+353 1 700 0100'

!new HeadWaiter('HW18')
!HW18.name := 'Sergio Álvarez'
!HW18.dateOfBirth := Date('1984-09-26')
!HW18.phoneNumber := '+34 6 700 0101'

!new Waiter('W37')
!W37.name := 'Emily Chen'
!W37.dateOfBirth := Date('1999-12-02')
!W37.phoneNumber := '+1 206 700 0111'
!W37.spokenLanguage := #English
!insert (HW17, W37) into HeadWaiterWaiter

!new Waiter('W38')
!W38.name := 'Jonas Berg'
!W38.dateOfBirth := Date('1997-07-19')
!W38.phoneNumber := '+46 8 700 0112'
!W38.spokenLanguage := #German
!insert (HW17, W38) into HeadWaiterWaiter

!new Waiter('W39')
!W39.name := 'Paula Nascimento'
!W39.dateOfBirth := Date('1996-01-08')
!W39.phoneNumber := '+351 21 700 0113'
!W39.spokenLanguage := #Spanish
!insert (HW17, W39) into HeadWaiterWaiter

!new Waiter('W40')
!W40.name := 'Alberto Rizzi'
!W40.dateOfBirth := Date('2000-05-30')
!W40.phoneNumber := '+39 011 700 0114'
!W40.spokenLanguage := #Italian
!insert (HW18, W40) into HeadWaiterWaiter

!new Waiter('W41')
!W41.name := 'Mina Park'
!W41.dateOfBirth := Date('1998-10-21')
!W41.phoneNumber := '+82 2 700 0115'
!W41.spokenLanguage := #English
!insert (HW18, W41) into HeadWaiterWaiter

!new Waiter('W42')
!W42.name := 'Diego Morales'
!W42.dateOfBirth := Date('1995-04-16')
!W42.phoneNumber := '+52 81 700 0116'
!W42.spokenLanguage := #Spanish
!insert (HW18, W42) into HeadWaiterWaiter

!new Cook('K27')
!K27.name := 'Noor Rahman'
!K27.dateOfBirth := Date('1988-06-06')
!K27.phoneNumber := '+65 700 0201'
!K27.yearsOfExperience := 1

!new Cook('K28')
!K28.name := 'Valentin Dubois'
!K28.dateOfBirth := Date('1970-02-14')
!K28.phoneNumber := '+33 1 700 0202'
!K28.yearsOfExperience := 30

!new Cook('K29')
!K29.name := 'Amina Sayeed'
!K29.dateOfBirth := Date('1991-01-15')
!K29.phoneNumber := '+33 1 700 0203'
!K29.yearsOfExperience := 5

!new Chef('CH30')
!CH30.name := 'Hiro Tan'
!CH30.dateOfBirth := Date('1992-11-09')
!CH30.phoneNumber := '+81 3 700 0301'

!new Chef('CH31')
!CH31.name := 'Sanna Lehto'
!CH31.dateOfBirth := Date('1990-08-27')
!CH31.phoneNumber := '+358 9 700 0302'

!new Chef('CH32')
!CH32.name := 'Arjun Patel'
!CH32.dateOfBirth := Date('1994-03-03')
!CH32.phoneNumber := '+91 22 700 0303'

!insert (CH30, K27) into ChefCook
!insert (CH31, K28) into ChefCook
!insert (CH32, K29) into ChefCook

!new Allergen('A_GLU18')
!A_GLU18.type := #Gluten

!new Allergen('A_LAC18')
!A_LAC18.type := #Lactose

!new Allergen('A_SEA18')
!A_SEA18.type := #Seafood

!new Allergen('A_NUT18')
!A_NUT18.type := #Nuts

!new FoodItem('F900')
!F900.number := 900
!F900.description := 'Wheat roux base'
!F900.purchaseFlag := false
!F900.unit := #Gram
!insert (F900, A_GLU18) into FoodItemAllergen

!new FoodItem('F901')
!F901.number := 901
!F901.description := 'Cream and cheese blend'
!F901.purchaseFlag := true
!F901.unit := #Ounce
!insert (F901, A_LAC18) into FoodItemAllergen

!new FoodItem('F902')
!F902.number := 902
!F902.description := 'Shellfish stock concentrate'
!F902.purchaseFlag := true
!F902.unit := #Ounce
!insert (F902, A_SEA18) into FoodItemAllergen

!new FoodItem('F903')
!F903.number := 903
!F903.description := 'Almond crumble topping'
!F903.purchaseFlag := true
!F903.unit := #Gram
!insert (F903, A_NUT18) into FoodItemAllergen

!new FoodItem('F904')
!F904.number := 904
!F904.description := 'Seafood gratin base (roux + dairy + shellfish + almond)'
!F904.purchaseFlag := false
!F904.unit := #Pound
!insert (F904, A_GLU18) into FoodItemAllergen
!insert (F904, A_LAC18) into FoodItemAllergen
!insert (F904, A_SEA18) into FoodItemAllergen
!insert (F904, A_NUT18) into FoodItemAllergen

!new MenuItem('MI50')
!MI50.description := 'Grand Seafood Gratin (Allergen Dense)'
!MI50.prepTime := 120.0
!MI50.classification := #Main
!insert (MI50, CH31) into MenuItemChef
!insert (MI50, F904) into MenuItemFoodItem

!new MenuItem('MI51')
!MI51.description := 'Creamy Rye Starter'
!MI51.prepTime := 25.0
!MI51.classification := #Apetizer
!insert (MI51, CH30) into MenuItemChef
!insert (MI51, F900) into MenuItemFoodItem
!insert (MI51, F901) into MenuItemFoodItem

!new MenuItem('MI52')
!MI52.description := 'Nut Crumble Dessert Cup'
!MI52.prepTime := 8.0
!MI52.classification := #Dessert
!insert (MI52, CH32) into MenuItemChef
!insert (MI52, F903) into MenuItemFoodItem

!new RegularCustomer('C20')
!C20.name := 'Yara Haddad'
!C20.prefferedLanguage := #English

!new Banquet('BR17')
!BR17.number := 48000
!BR17.date := Date('2026-12-31')
!BR17.time := Time('21:00')
!BR17.numberPeople := 200
!BR17.name := 'Y. Haddad'
!BR17.phoneNumber := '+971 50 700 4800'
!BR17.groupName := 'New Year’s Eve Community Iftar (Private Hire)'
!BR17.paymentMethod := #CreditCard
!BR17.busService := true
!insert (R18, BR17) into RestaurantReservation
!insert (BR17, C20) into ReservationCustomer

!insert (BR17, W37) into ReservationWaiter
!insert (BR17, W38) into ReservationWaiter
!insert (BR17, W39) into ReservationWaiter
!insert (BR17, W40) into ReservationWaiter
!insert (BR17, W41) into ReservationWaiter
!insert (BR17, W42) into ReservationWaiter

!new Table('T301_NNH')
!T301_NNH.number := 301
!T301_NNH.description := 'Hall row A1'
!T301_NNH.capacity := 10
!insert (BR17, T301_NNH) into ReservationTable

!new Table('T302_NNH')
!T302_NNH.number := 302
!T302_NNH.description := 'Hall row A2'
!T302_NNH.capacity := 10
!insert (BR17, T302_NNH) into ReservationTable

!new Table('T303_NNH')
!T303_NNH.number := 303
!T303_NNH.description := 'Hall row A3'
!T303_NNH.capacity := 10
!insert (BR17, T303_NNH) into ReservationTable

!new Table('T304_NNH')
!T304_NNH.number := 304
!T304_NNH.description := 'Hall row A4'
!T304_NNH.capacity := 10
!insert (BR17, T304_NNH) into ReservationTable

!new Table('T305_NNH')
!T305_NNH.number := 305
!T305_NNH.description := 'Hall row A5'
!T305_NNH.capacity := 10
!insert (BR17, T305_NNH) into ReservationTable

!new Table('T306_NNH')
!T306_NNH.number := 306
!T306_NNH.description := 'Hall row B1'
!T306_NNH.capacity := 10
!insert (BR17, T306_NNH) into ReservationTable

!new Table('T307_NNH')
!T307_NNH.number := 307
!T307_NNH.description := 'Hall row B2'
!T307_NNH.capacity := 10
!insert (BR17, T307_NNH) into ReservationTable

!new Table('T308_NNH')
!T308_NNH.number := 308
!T308_NNH.description := 'Hall row B3'
!T308_NNH.capacity := 10
!insert (BR17, T308_NNH) into ReservationTable

!new Table('T309_NNH')
!T309_NNH.number := 309
!T309_NNH.description := 'Hall row B4'
!T309_NNH.capacity := 10
!insert (BR17, T309_NNH) into ReservationTable

!new Table('T310_NNH')
!T310_NNH.number := 310
!T310_NNH.description := 'Hall row B5'
!T310_NNH.capacity := 10
!insert (BR17, T310_NNH) into ReservationTable

!new Table('T311_NNH')
!T311_NNH.number := 311
!T311_NNH.description := 'Hall row C1'
!T311_NNH.capacity := 10
!insert (BR17, T311_NNH) into ReservationTable

!new Table('T312_NNH')
!T312_NNH.number := 312
!T312_NNH.description := 'Hall row C2'
!T312_NNH.capacity := 10
!insert (BR17, T312_NNH) into ReservationTable

!new Table('T313_NNH')
!T313_NNH.number := 313
!T313_NNH.description := 'Hall row C3'
!T313_NNH.capacity := 10
!insert (BR17, T313_NNH) into ReservationTable

!new Table('T314_NNH')
!T314_NNH.number := 314
!T314_NNH.description := 'Hall row C4'
!T314_NNH.capacity := 10
!insert (BR17, T314_NNH) into ReservationTable

!new Table('T315_NNH')
!T315_NNH.number := 315
!T315_NNH.description := 'Hall row C5'
!T315_NNH.capacity := 10
!insert (BR17, T315_NNH) into ReservationTable

!new Table('T316_NNH')
!T316_NNH.number := 316
!T316_NNH.description := 'Hall row D1'
!T316_NNH.capacity := 10
!insert (BR17, T316_NNH) into ReservationTable

!new Table('T317_NNH')
!T317_NNH.number := 317
!T317_NNH.description := 'Hall row D2'
!T317_NNH.capacity := 10
!insert (BR17, T317_NNH) into ReservationTable

!new Table('T318_NNH')
!T318_NNH.number := 318
!T318_NNH.description := 'Hall row D3'
!T318_NNH.capacity := 10
!insert (BR17, T318_NNH) into ReservationTable

!new Table('T319_NNH')
!T319_NNH.number := 319
!T319_NNH.description := 'Hall row D4'
!T319_NNH.capacity := 10
!insert (BR17, T319_NNH) into ReservationTable

!new Table('T320_NNH')
!T320_NNH.number := 320
!T320_NNH.description := 'Hall row D5'
!T320_NNH.capacity := 10
!insert (BR17, T320_NNH) into ReservationTable

!new ItemOrder('IO1801')
!IO1801.time := Time('21:15')
!insert (BR17, IO1801) into ReservationItemOrdered
!insert (IO1801, MI51) into ItemOrderMenuItem

!new ItemOrder('IO1802')
!IO1802.time := Time('21:16')
!insert (BR17, IO1802) into ReservationItemOrdered
!insert (IO1802, MI51) into ItemOrderMenuItem

!new ItemOrder('IO1803')
!IO1803.time := Time('21:17')
!insert (BR17, IO1803) into ReservationItemOrdered
!insert (IO1803, MI51) into ItemOrderMenuItem

!new ItemOrder('IO1804')
!IO1804.time := Time('21:30')
!insert (BR17, IO1804) into ReservationItemOrdered
!insert (IO1804, MI50) into ItemOrderMenuItem

!new ItemOrder('IO1805')
!IO1805.time := Time('21:31')
!insert (BR17, IO1805) into ReservationItemOrdered
!insert (IO1805, MI50) into ItemOrderMenuItem

!new ItemOrder('IO1806')
!IO1806.time := Time('21:32')
!insert (BR17, IO1806) into ReservationItemOrdered
!insert (IO1806, MI50) into ItemOrderMenuItem

!new ItemOrder('IO1807')
!IO1807.time := Time('21:33')
!insert (BR17, IO1807) into ReservationItemOrdered
!insert (IO1807, MI50) into ItemOrderMenuItem

!new ItemOrder('IO1808')
!IO1808.time := Time('21:34')
!insert (BR17, IO1808) into ReservationItemOrdered
!insert (IO1808, MI50) into ItemOrderMenuItem

!new ItemOrder('IO1809')
!IO1809.time := Time('22:10')
!insert (BR17, IO1809) into ReservationItemOrdered
!insert (IO1809, MI52) into ItemOrderMenuItem

!new ItemOrder('IO1810')
!IO1810.time := Time('22:11')
!insert (BR17, IO1810) into ReservationItemOrdered
!insert (IO1810, MI52) into ItemOrderMenuItem

!new ItemOrder('IO1811')
!IO1811.time := Time('22:12')
!insert (BR17, IO1811) into ReservationItemOrdered
!insert (IO1811, MI52) into ItemOrderMenuItem

!new ItemOrder('IO1812')
!IO1812.time := Time('22:13')
!insert (BR17, IO1812) into ReservationItemOrdered
!insert (IO1812, MI52) into ItemOrderMenuItem

!new BusDriver('BD17')
!BD17.name := 'Linh Tran'
!BD17.dateOfBirth := Date('1985-01-20')
!BD17.phoneNumber := '+84 28 700 7701'
!BD17.driverLicenseNr := 'VN-HT-774201'
!insert (BR17, BD17) into BanquetBusDriver

!new BusDriver('BD18')
!BD18.name := 'Robert King'
!BD18.dateOfBirth := Date('1979-05-05')
!BD18.phoneNumber := '+1 404 700 7702'
!BD18.driverLicenseNr := 'GA-KG-119833'
!insert (BR17, BD18) into BanquetBusDriver

!new BusDriver('BD19')
!BD19.name := 'Awa Diop'
!BD19.dateOfBirth := Date('1990-09-09')
!BD19.phoneNumber := '+221 33 700 7703'
!BD19.driverLicenseNr := 'SN-DP-660214'
!insert (BR17, BD19) into BanquetBusDriver

!new BusDriver('BD20')
!BD20.name := 'Ivan Petrov'
!BD20.dateOfBirth := Date('1982-12-12')
!BD20.phoneNumber := '+359 2 700 7704'
!BD20.driverLicenseNr := 'BG-PT-502901'
!insert (BR17, BD20) into BanquetBusDriver

!new BusDriver('BD21')
!BD21.name := 'Hana Suzuki'
!BD21.dateOfBirth := Date('1993-04-04')
!BD21.phoneNumber := '+81 45 700 7705'
!BD21.driverLicenseNr := 'JP-SZ-883710'
!insert (BR17, BD21) into BanquetBusDriver

!new DietaryRequirement('DR16')
!DR16.diet := #Vegan

!new ReportedAllergy('RA14')
!RA14.allergen := #Seafood
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 351 | 0.00% |
| Multiplicities Errors | 0 | 85 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 20 | 0.00% |
| Phones | 0 | 20 | 0.00% |

## Category complex
```
!new Restaurant('R22')
!R22.name := 'Harbor Spice Canteen'

!new Restaurant('R23')
!R23.name := 'Osteria della Nebbia'

!new Restaurant('R24')
!R24.name := 'Silent Oak Pop‑Up'

!new Owner('O48')
!O48.name := 'Claire Donovan'
!O48.percentageShares := 65
!insert (R22, O48) into RestaurantOwner

!new Owner('O49')
!O49.name := 'Mateo Álvarez'
!O49.percentageShares := 35
!insert (R22, O49) into RestaurantOwner

!new Owner('O50')
!O50.name := 'Paola Venturi'
!O50.percentageShares := 40
!insert (R23, O50) into RestaurantOwner

!new Owner('O51')
!O51.name := 'Heinrich Blum'
!O51.percentageShares := 40
!insert (R23, O51) into RestaurantOwner

!new Owner('O52')
!O52.name := 'Sofia Ricci'
!O52.percentageShares := 20
!insert (R23, O52) into RestaurantOwner

!new Owner('O53')
!O53.name := 'Claire Donovan'
!O53.percentageShares := 100
!insert (R24, O53) into RestaurantOwner

!new RegularCustomer('C24')
!C24.name := 'Hannah Brooks'
!C24.prefferedLanguage := #English

!new RegularCustomer('C25')
!C25.name := 'Carlo De Luca'
!C25.prefferedLanguage := #Italian

!new RegularCustomer('C26')
!C26.name := 'Inés Navarro'
!C26.prefferedLanguage := #Spanish

!new HeadWaiter('HW22')
!HW22.name := 'Rowan MacLeod'
!HW22.dateOfBirth := Date('1983-10-20')
!HW22.phoneNumber := '+1 902 555 1000'

!new Waiter('W48')
!W48.name := 'Megan Price'
!W48.dateOfBirth := Date('1998-05-16')
!W48.phoneNumber := '+1 902 555 1001'
!W48.spokenLanguage := #English
!insert (HW22, W48) into HeadWaiterWaiter

!new Waiter('W49')
!W49.name := 'Luis Ramírez'
!W49.dateOfBirth := Date('1991-02-08')
!W49.phoneNumber := '+1 902 555 1002'
!W49.spokenLanguage := #Spanish
!insert (HW22, W49) into HeadWaiterWaiter

!new Waiter('W50')
!W50.name := 'Greta Schumann'
!W50.dateOfBirth := Date('1993-09-29')
!W50.phoneNumber := '+1 902 555 1003'
!W50.spokenLanguage := #German
!insert (HW22, W50) into HeadWaiterWaiter

!new Waiter('W51')
!W51.name := 'Alessio Moretti'
!W51.dateOfBirth := Date('1996-01-11')
!W51.phoneNumber := '+1 902 555 1004'
!W51.spokenLanguage := #Italian
!insert (HW22, W51) into HeadWaiterWaiter

!new HeadWaiter('HW23')
!HW23.name := 'Chiara Bellini'
!HW23.dateOfBirth := Date('1977-07-03')
!HW23.phoneNumber := '+39 040 555 2000'

!new Waiter('W52')
!W52.name := 'Jürgen Keller'
!W52.dateOfBirth := Date('1989-11-23')
!W52.phoneNumber := '+39 040 555 2001'
!W52.spokenLanguage := #German
!insert (HW23, W52) into HeadWaiterWaiter

!new Cook('K35')
!K35.name := 'Salma Idrissi'
!K35.dateOfBirth := Date('1980-04-05')
!K35.phoneNumber := '+1 902 555 3000'
!K35.yearsOfExperience := 20

!new Cook('K36')
!K36.name := 'Salma Idrissi'
!K36.dateOfBirth := Date('1980-04-05')
!K36.phoneNumber := '+1 902 555 3000'
!K36.yearsOfExperience := 20

!new Cook('K37')
!K37.name := 'Bruno Conti'
!K37.dateOfBirth := Date('1995-12-19')
!K37.phoneNumber := '+39 040 555 3001'
!K37.yearsOfExperience := 3

!new Cook('K38')
!K38.name := 'Marta Weiss'
!K38.dateOfBirth := Date('1987-06-12')
!K38.phoneNumber := '+1 902 555 3002'
!K38.yearsOfExperience := 0

!new Chef('CH38')
!CH38.name := 'Kenji Sato'
!CH38.dateOfBirth := Date('1986-08-18')
!CH38.phoneNumber := '+1 902 555 3100'
!insert (CH38, K35) into ChefCook

!new Chef('CH39')
!CH39.name := 'Beatriz Santos'
!CH39.dateOfBirth := Date('1992-03-27')
!CH39.phoneNumber := '+1 902 555 3101'
!insert (CH39, K36) into ChefCook

!new Chef('CH40')
!CH40.name := 'Luca Marin'
!CH40.dateOfBirth := Date('1984-09-09')
!CH40.phoneNumber := '+39 040 555 3102'
!insert (CH40, K37) into ChefCook

!new Chef('CH41')
!CH41.name := 'Annika Vogel'
!CH41.dateOfBirth := Date('1990-01-30')
!CH41.phoneNumber := '+1 902 555 3103'
!insert (CH41, K38) into ChefCook

!new Manager('M17')
!M17.name := 'Derek O’Connell'
!M17.dateOfBirth := Date('1974-02-14')
!M17.phoneNumber := '+1 902 555 4000'

!new Manager('M18')
!M18.name := 'Giacomo Neri'
!M18.dateOfBirth := Date('1971-10-01')
!M18.phoneNumber := '+39 040 555 4001'

!new BusDriver('BD23')
!BD23.name := 'Evelyn Park'
!BD23.dateOfBirth := Date('1979-05-22')
!BD23.phoneNumber := '+1 902 555 5000'
!BD23.driverLicenseNr := 'NS-DRV-77102'

!new BusDriver('BD24')
!BD24.name := 'Rafael Costa'
!BD24.dateOfBirth := Date('1969-12-08')
!BD24.phoneNumber := '+1 902 555 5001'
!BD24.driverLicenseNr := 'NS-DRV-88219'

!new BusDriver('BD25')
!BD25.name := 'Petra Müller'
!BD25.dateOfBirth := Date('1982-03-15')
!BD25.phoneNumber := '+1 902 555 5002'
!BD25.driverLicenseNr := 'NS-DRV-66540'

!new Allergen('AG1_TC')
!AG1_TC.type := #Gluten

!new Allergen('AG2_TC')
!AG2_TC.type := #Lactose

!new Allergen('AG3_TC')
!AG3_TC.type := #Nuts

!new Allergen('AG4_TC')
!AG4_TC.type := #Seafood

!new FoodItem('F1201')
!F1201.number := 301
!F1201.description := 'Rye bread slices'
!F1201.purchaseFlag := true
!F1201.unit := #Pound
!insert (F1201, AG1_TC) into FoodItemAllergen

!new FoodItem('F1202')
!F1202.number := 302
!F1202.description := 'Aged cheddar'
!F1202.purchaseFlag := true
!F1202.unit := #Ounce
!insert (F1202, AG2_TC) into FoodItemAllergen

!new FoodItem('F1203')
!F1203.number := 303
!F1203.description := 'Hazelnut crumble'
!F1203.purchaseFlag := true
!F1203.unit := #Gram
!insert (F1203, AG3_TC) into FoodItemAllergen

!new FoodItem('F1204')
!F1204.number := 304
!F1204.description := 'Mussels (fresh)'
!F1204.purchaseFlag := true
!F1204.unit := #Pound
!insert (F1204, AG4_TC) into FoodItemAllergen

!new FoodItem('F1205')
!F1205.number := 305
!F1205.description := 'Wheat noodles'
!F1205.purchaseFlag := true
!F1205.unit := #Pound
!insert (F1205, AG1_TC) into FoodItemAllergen

!new FoodItem('F1206')
!F1206.number := 306
!F1206.description := 'Cream (heavy)'
!F1206.purchaseFlag := true
!F1206.unit := #Ounce
!insert (F1206, AG2_TC) into FoodItemAllergen

!new FoodItem('F1207')
!F1207.number := 307
!F1207.description := 'Sesame paste (tahini)'
!F1207.purchaseFlag := false
!F1207.unit := #Ounce

!new FoodItem('F1208')
!F1208.number := 308
!F1208.description := 'Mixed shellfish stock base'
!F1208.purchaseFlag := false
!F1208.unit := #Ounce
!insert (F1208, AG4_TC) into FoodItemAllergen

!new FoodItem('F1209')
!F1209.number := 309
!F1209.description := 'Buttered puff sheets'
!F1209.purchaseFlag := true
!F1209.unit := #Sheet
!insert (F1209, AG1_TC) into FoodItemAllergen
!insert (F1209, AG2_TC) into FoodItemAllergen

!new MenuItem('MI60')
!MI60.description := 'Miso mussel chowder'
!MI60.prepTime := 19.0
!MI60.classification := #Main
!insert (MI60, CH38) into MenuItemChef
!insert (MI60, F1204) into MenuItemFoodItem
!insert (MI60, F1208) into MenuItemFoodItem
!insert (MI60, F1206) into MenuItemFoodItem

!new MenuItem('MI61')
!MI61.description := 'Cheddar rye melt'
!MI61.prepTime := 9.0
!MI61.classification := #Apetizer
!insert (MI61, CH41) into MenuItemChef
!insert (MI61, F1201) into MenuItemFoodItem
!insert (MI61, F1202) into MenuItemFoodItem

!new MenuItem('MI62')
!MI62.description := 'Hazelnut mille‑foglia'
!MI62.prepTime := 32.0
!MI62.classification := #Dessert
!insert (MI62, CH39) into MenuItemChef
!insert (MI62, F1209) into MenuItemFoodItem
!insert (MI62, F1203) into MenuItemFoodItem
!insert (MI62, F1206) into MenuItemFoodItem

!new MenuItem('MI63')
!MI63.description := 'Trieste seafood noodle bowl'
!MI63.prepTime := 24.0
!MI63.classification := #Main
!insert (MI63, CH40) into MenuItemChef
!insert (MI63, F1205) into MenuItemFoodItem
!insert (MI63, F1208) into MenuItemFoodItem

!new MenuItem('MI64')
!MI64.description := 'Still water (bottled)'
!MI64.prepTime := 0.5
!MI64.classification := #Beverage
!insert (MI64, CH40) into MenuItemChef

!new Individual('IR24')
!IR24.time := Time('21:10')
!IR24.date := Date('2026-05-02')
!IR24.numberPeople := 9
!IR24.name := 'Hannah Brooks'
!IR24.phoneNumber := '+1 613 555 8890'
!IR24.number := 520
!IR24.seating := #Patio
!IR24.smoking := #Smoking
!insert (R22, IR24) into RestaurantReservation
!insert (IR24, C24) into ReservationCustomer
!insert (IR24, W48) into ReservationWaiter
!insert (IR24, W50) into ReservationWaiter

!new Table('T701_HSC')
!T701_HSC.number := 701
!T701_HSC.description := 'Patio four-top near railing'
!T701_HSC.capacity := 4
!insert (IR24, T701_HSC) into ReservationTable

!new Table('T702_HSC')
!T702_HSC.number := 702
!T702_HSC.description := 'Patio four-top under awning'
!T702_HSC.capacity := 4
!insert (IR24, T702_HSC) into ReservationTable

!new Table('T703_HSC')
!T703_HSC.number := 703
!T703_HSC.description := 'Patio two-top added at end'
!T703_HSC.capacity := 2
!insert (IR24, T703_HSC) into ReservationTable

!new ItemOrder('IO2101')
!IO2101.time := Time('21:20')
!insert (IR24, IO2101) into ReservationItemOrdered
!insert (IO2101, MI61) into ItemOrderMenuItem

!new ItemOrder('IO2102')
!IO2102.time := Time('21:22')
!insert (IR24, IO2102) into ReservationItemOrdered
!insert (IO2102, MI61) into ItemOrderMenuItem

!new ItemOrder('IO2103')
!IO2103.time := Time('21:40')
!insert (IR24, IO2103) into ReservationItemOrdered
!insert (IO2103, MI60) into ItemOrderMenuItem

!new ItemOrder('IO2104')
!IO2104.time := Time('21:41')
!insert (IR24, IO2104) into ReservationItemOrdered
!insert (IO2104, MI64) into ItemOrderMenuItem

!new Banquet('BR20')
!BR20.time := Time('18:00')
!BR20.date := Date('2026-05-03')
!BR20.numberPeople := 55
!BR20.name := 'Inés Navarro'
!BR20.phoneNumber := '+1 902 555 7777'
!BR20.number := 888
!BR20.groupName := 'Atlantic Maritime Museum Volunteers'
!BR20.paymentMethod := #CreditCard
!BR20.busService := true
!insert (R22, BR20) into RestaurantReservation
!insert (BR20, C26) into ReservationCustomer
!insert (BR20, BD23) into BanquetBusDriver
!insert (BR20, BD24) into BanquetBusDriver
!insert (BR20, BD25) into BanquetBusDriver
!insert (BR20, W49) into ReservationWaiter
!insert (BR20, W51) into ReservationWaiter
!insert (BR20, W48) into ReservationWaiter

!new Table('T710_HSC')
!T710_HSC.number := 710
!T710_HSC.description := 'Banquet hall row A'
!T710_HSC.capacity := 20
!insert (BR20, T710_HSC) into ReservationTable

!new Table('T711_HSC')
!T711_HSC.number := 711
!T711_HSC.description := 'Banquet hall row B'
!T711_HSC.capacity := 20
!insert (BR20, T711_HSC) into ReservationTable

!new Table('T712_HSC')
!T712_HSC.number := 712
!T712_HSC.description := 'Banquet hall row C'
!T712_HSC.capacity := 15
!insert (BR20, T712_HSC) into ReservationTable

!new Individual('IR25')
!IR25.time := Time('20:15')
!IR25.date := Date('2026-05-09')
!IR25.numberPeople := 2
!IR25.name := 'Carlo De Luca'
!IR25.phoneNumber := '+39 328 555 1212'
!IR25.number := 610
!IR25.seating := #Inside
!IR25.smoking := #NonSmoking
!insert (R23, IR25) into RestaurantReservation
!insert (IR25, C25) into ReservationCustomer
!insert (IR25, W52) into ReservationWaiter

!new Table('T801_ODN')
!T801_ODN.number := 801
!T801_ODN.description := 'Two-top by stone wall'
!T801_ODN.capacity := 2
!insert (IR25, T801_ODN) into ReservationTable

!new ItemOrder('IO2105')
!IO2105.time := Time('20:25')
!insert (IR25, IO2105) into ReservationItemOrdered
!insert (IO2105, MI63) into ItemOrderMenuItem

!new ItemOrder('IO2106')
!IO2106.time := Time('20:50')
!insert (IR25, IO2106) into ReservationItemOrdered
!insert (IO2106, MI62) into ItemOrderMenuItem

!new Individual('IR26')
!IR26.time := Time('19:00')
!IR26.date := Date('2026-05-09')
!IR26.numberPeople := 7
!IR26.name := 'Heinrich Blum'
!IR26.phoneNumber := '+39 040 555 9090'
!IR26.number := 611
!IR26.seating := #Inside
!IR26.smoking := #NonSmoking
!insert (R23, IR26) into RestaurantReservation
!insert (IR26, W52) into ReservationWaiter

!new Table('T802_ODN')
!T802_ODN.number := 802
!T802_ODN.description := 'Four-top near open kitchen'
!T802_ODN.capacity := 4
!insert (IR26, T802_ODN) into ReservationTable

!new Table('T803_ODN')
!T803_ODN.number := 803
!T803_ODN.description := 'Four-top pushed adjacent'
!T803_ODN.capacity := 4
!insert (IR26, T803_ODN) into ReservationTable

!new ItemOrder('IO2107')
!IO2107.time := Time('19:10')
!insert (IR26, IO2107) into ReservationItemOrdered
!insert (IO2107, MI64) into ItemOrderMenuItem

!new ItemOrder('IO2108')
!IO2108.time := Time('19:25')
!insert (IR26, IO2108) into ReservationItemOrdered
!insert (IO2108, MI63) into ItemOrderMenuItem

!new DietaryRequirement('DR18')
!DR18.diet := #Halal

!new DietaryRequirement('DR19')
!DR19.diet := #Vegan

!new ReportedAllergy('RA16')
!RA16.allergen := #Nuts

!new ReportedAllergy('RA17')
!RA17.allergen := #Lactose
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 376 | 0.00% |
| Multiplicities Errors | 0 | 81 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 24 | 0.00% |
| Phones | 0 | 24 | 0.00% |

## Category edge
```
!new Restaurant('R30')
!R30.name := 'La Plaza de los Ecos'

!new Restaurant('R31')
!R31.name := 'Harbor Pierogi Atelier'

!new Owner('O66')
!O66.name := 'Noura Al-Khatib'
!O66.percentageShares := 50
!insert (R30, O66) into RestaurantOwner
!insert (R31, O66) into RestaurantOwner

!new Owner('O67')
!O67.name := 'Paweł Zieliński'
!O67.percentageShares := 30
!insert (R30, O67) into RestaurantOwner
!insert (R31, O67) into RestaurantOwner

!new Owner('O68')
!O68.name := 'Mei-Ling Chen'
!O68.percentageShares := 20
!insert (R30, O68) into RestaurantOwner

!new Owner('O69')
!O69.name := 'Bjørn Eide'
!O69.percentageShares := 0
!insert (R30, O69) into RestaurantOwner

!new Owner('O70')
!O70.name := 'Samira Doumbia'
!O70.percentageShares := 20
!insert (R31, O70) into RestaurantOwner

!new RegularCustomer('C32')
!C32.name := 'Chiara Bianchi'
!C32.prefferedLanguage := #Italian

!new RegularCustomer('C33')
!C33.name := 'Mustafa Yilmaz'
!C33.prefferedLanguage := #German

!new HeadWaiter('HW29')
!HW29.name := 'Esi Agyeman'
!HW29.dateOfBirth := Date('1984-04-08')
!HW29.phoneNumber := '+233-20-555-0188'

!new HeadWaiter('HW30')
!HW30.name := 'Alessandro Conti'
!HW30.dateOfBirth := Date('1972-09-17')
!HW30.phoneNumber := '+39-02-555-0177'

!new Waiter('W64')
!W64.name := 'Yara Haddad'
!W64.dateOfBirth := Date('2000-12-01')
!W64.phoneNumber := '+961-70-555-012'
!W64.spokenLanguage := #English
!insert (HW29, W64) into HeadWaiterWaiter

!new Waiter('W65')
!W65.name := 'Tomasz Krawiec'
!W65.dateOfBirth := Date('1996-03-22')
!W65.phoneNumber := '+48-505-555-014'
!W65.spokenLanguage := #German
!insert (HW29, W65) into HeadWaiterWaiter

!new Waiter('W66')
!W66.name := 'María José Rivas'
!W66.dateOfBirth := Date('1993-07-05')
!W66.phoneNumber := '+56-9-5555-0133'
!W66.spokenLanguage := #Spanish
!insert (HW30, W66) into HeadWaiterWaiter

!new Cook('K47')
!K47.name := 'Rakesh Iyer'
!K47.dateOfBirth := Date('1999-01-15')
!K47.phoneNumber := '+91-98765-555-010'
!K47.yearsOfExperience := 1

!new Cook('K48')
!K48.name := 'Rakesh Iyer'
!K48.dateOfBirth := Date('1999-01-15')
!K48.phoneNumber := '+91-98765-555-010'
!K48.yearsOfExperience := 1

!new Cook('K49')
!K49.name := 'Olena Shevchenko'
!K49.dateOfBirth := Date('1986-10-26')
!K49.phoneNumber := '+380-67-555-0160'
!K49.yearsOfExperience := 12

!new Chef('CH51')
!CH51.name := 'Khaled Mansour'
!CH51.dateOfBirth := Date('1991-11-11')
!CH51.phoneNumber := '+20-10-555-0191'
!insert (CH51, K47) into ChefCook

!new Chef('CH52')
!CH52.name := 'Sofia Duarte'
!CH52.dateOfBirth := Date('1989-06-02')
!CH52.phoneNumber := '+351-91-555-0152'
!insert (CH52, K48) into ChefCook

!new Chef('CH53')
!CH53.name := 'Noam Levi'
!CH53.dateOfBirth := Date('1994-08-19')
!CH53.phoneNumber := '+972-52-555-0119'
!insert (CH53, K49) into ChefCook

!new Manager('M22')
!M22.name := 'Hana Suzuki'
!M22.dateOfBirth := Date('1978-02-28')
!M22.phoneNumber := '+81-3-5555-0180'

!new Allergen('AL5_E3c')
!AL5_E3c.type := #Gluten

!new Allergen('AL6_E3c')
!AL6_E3c.type := #Nuts

!new Allergen('AL7_E3c')
!AL7_E3c.type := #Seafood

!new Allergen('AL8_E3c')
!AL8_E3c.type := #Lactose

!new FoodItem('FI30_E3c')
!FI30_E3c.number := 30
!FI30_E3c.description := 'Rye bread cubes'
!FI30_E3c.purchaseFlag := true
!FI30_E3c.unit := #Dozen
!insert (FI30_E3c, AL5_E3c) into FoodItemAllergen

!new FoodItem('FI31_E3c')
!FI31_E3c.number := 31
!FI31_E3c.description := 'Crushed hazelnut'
!FI31_E3c.purchaseFlag := true
!FI31_E3c.unit := #Ounce
!insert (FI31_E3c, AL6_E3c) into FoodItemAllergen

!new FoodItem('FI32_E3c')
!FI32_E3c.number := 32
!FI32_E3c.description := 'Goat cheese curd'
!FI32_E3c.purchaseFlag := false
!FI32_E3c.unit := #Pound
!insert (FI32_E3c, AL8_E3c) into FoodItemAllergen

!new FoodItem('FI33_E3c')
!FI33_E3c.number := 33
!FI33_E3c.description := 'Smoked mussels'
!FI33_E3c.purchaseFlag := true
!FI33_E3c.unit := #Gram
!insert (FI33_E3c, AL7_E3c) into FoodItemAllergen

!new FoodItem('FI34_E3c')
!FI34_E3c.number := 34
!FI34_E3c.description := 'Buckwheat flour mix'
!FI34_E3c.purchaseFlag := true
!FI34_E3c.unit := #Pound
!insert (FI34_E3c, AL5_E3c) into FoodItemAllergen

!new FoodItem('FI35_E3c')
!FI35_E3c.number := 35
!FI35_E3c.description := 'Chili-lime oil'
!FI35_E3c.purchaseFlag := false
!FI35_E3c.unit := #Ounce

!new FoodItem('FI36_E3c')
!FI36_E3c.number := 36
!FI36_E3c.description := 'Sorbet base (no dairy)'
!FI36_E3c.purchaseFlag := false
!FI36_E3c.unit := #Ounce

!new FoodItem('FI37_E3c')
!FI37_E3c.number := 37
!FI37_E3c.description := 'Black tea leaves'
!FI37_E3c.purchaseFlag := true
!FI37_E3c.unit := #Gram

!new MenuItem('MI76')
!MI76.description := 'Mussel & Rye Pincho'
!MI76.prepTime := 6.25
!MI76.classification := #Apetizer
!insert (MI76, CH51) into MenuItemChef
!insert (MI76, FI33_E3c) into MenuItemFoodItem
!insert (MI76, FI30_E3c) into MenuItemFoodItem
!insert (MI76, FI35_E3c) into MenuItemFoodItem

!new MenuItem('MI77')
!MI77.description := 'Cheese Pierogi on Buckwheat Dough (Hazelnut Dust)'
!MI77.prepTime := 18.0
!MI77.classification := #Main
!insert (MI77, CH52) into MenuItemChef
!insert (MI77, FI34_E3c) into MenuItemFoodItem
!insert (MI77, FI32_E3c) into MenuItemFoodItem
!insert (MI77, FI31_E3c) into MenuItemFoodItem

!new MenuItem('MI78')
!MI78.description := 'Hazelnut Sorbet Drift'
!MI78.prepTime := 2.5
!MI78.classification := #Dessert
!insert (MI78, CH53) into MenuItemChef
!insert (MI78, FI36_E3c) into MenuItemFoodItem
!insert (MI78, FI31_E3c) into MenuItemFoodItem

!new MenuItem('MI79')
!MI79.description := 'Salted Black Tea (small pot)'
!MI79.prepTime := 1.0
!MI79.classification := #Beverage
!insert (MI79, CH53) into MenuItemChef
!insert (MI79, FI37_E3c) into MenuItemFoodItem

!new Individual('IR32')
!IR32.time := Time('05:07')
!IR32.date := Date('2026-01-01')
!IR32.numberPeople := 0
!IR32.name := 'Chiara Bianchi'
!IR32.phoneNumber := '+39-333-555-0101'
!IR32.number := 3000
!IR32.seating := #Patio
!IR32.smoking := #NonSmoking
!insert (R30, IR32) into RestaurantReservation
!insert (IR32, C32) into ReservationCustomer
!insert (IR32, W64) into ReservationWaiter

!new Table('T300_E3c')
!T300_E3c.number := 300
!T300_E3c.description := 'Patio two-top held as a no-show buffer'
!T300_E3c.capacity := 1
!insert (IR32, T300_E3c) into ReservationTable

!new Banquet('BR24')
!BR24.time := Time('05:30')
!BR24.date := Date('2026-01-01')
!BR24.numberPeople := 15
!BR24.name := 'Chiara Bianchi'
!BR24.phoneNumber := '+39-333-555-0101'
!BR24.number := 3001
!BR24.groupName := 'Choir of the Dawn'
!BR24.paymentMethod := #CreditCard
!BR24.busService := true
!insert (R30, BR24) into RestaurantReservation
!insert (BR24, C32) into ReservationCustomer
!insert (BR24, W64) into ReservationWaiter
!insert (BR24, W66) into ReservationWaiter

!new Table('T301_E3c')
!T301_E3c.number := 301
!T301_E3c.description := 'Long table near stage'
!T301_E3c.capacity := 8
!insert (BR24, T301_E3c) into ReservationTable

!new Table('T302_E3c')
!T302_E3c.number := 302
!T302_E3c.description := 'Long table near window'
!T302_E3c.capacity := 7
!insert (BR24, T302_E3c) into ReservationTable

!new BusDriver('BD30')
!BD30.name := 'Ieva Kazlauskaitė'
!BD30.dateOfBirth := Date('1990-05-03')
!BD30.phoneNumber := '+370-6-555-0100'
!BD30.driverLicenseNr := 'LT-KZ-50390'
!insert (BR24, BD30) into BanquetBusDriver

!new BusDriver('BD31')
!BD31.name := 'Abdoulaye Ndiaye'
!BD31.dateOfBirth := Date('1983-12-29')
!BD31.phoneNumber := '+221-77-555-0123'
!BD31.driverLicenseNr := 'SN-DL-832129'
!insert (BR24, BD31) into BanquetBusDriver

!new ItemOrder('IO2501')
!IO2501.time := Time('05:40')
!insert (BR24, IO2501) into ReservationItemOrdered
!insert (IO2501, MI76) into ItemOrderMenuItem

!new ItemOrder('IO2502')
!IO2502.time := Time('05:41')
!insert (BR24, IO2502) into ReservationItemOrdered
!insert (IO2502, MI77) into ItemOrderMenuItem

!new ItemOrder('IO2503')
!IO2503.time := Time('05:41')
!insert (BR24, IO2503) into ReservationItemOrdered
!insert (IO2503, MI77) into ItemOrderMenuItem

!new ItemOrder('IO2504')
!IO2504.time := Time('05:42')
!insert (BR24, IO2504) into ReservationItemOrdered
!insert (IO2504, MI79) into ItemOrderMenuItem

!new Individual('IR33')
!IR33.time := Time('22:10')
!IR33.date := Date('2026-01-02')
!IR33.numberPeople := 6
!IR33.name := 'Walk-in Alias: Orion'
!IR33.phoneNumber := '+1-000-000-0000'
!IR33.number := 4004
!IR33.seating := #Inside
!IR33.smoking := #Smoking
!insert (R31, IR33) into RestaurantReservation
!insert (IR33, W65) into ReservationWaiter

!new Table('T401_E3c')
!T401_E3c.number := 401
!T401_E3c.description := 'Inside two-top A'
!T401_E3c.capacity := 2
!insert (IR33, T401_E3c) into ReservationTable

!new Table('T402_E3c')
!T402_E3c.number := 402
!T402_E3c.description := 'Inside two-top B'
!T402_E3c.capacity := 2
!insert (IR33, T402_E3c) into ReservationTable

!new Table('T403_E3c')
!T403_E3c.number := 403
!T403_E3c.description := 'Inside two-top C'
!T403_E3c.capacity := 2
!insert (IR33, T403_E3c) into ReservationTable

!new DietaryRequirement('DR25')
!DR25.diet := #Halal

!new ReportedAllergy('RA25')
!RA25.allergen := #Lactose
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 273 | 0.00% |
| Multiplicities Errors | 0 | 56 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 17 | 0.00% |
| Phones | 0 | 17 | 0.00% |

## Category invalid
```
!new Restaurant('R11')
!R11.name := 'Spreeufer Kantine'

!new Owner('O27')
!O27.name := 'Katrin Vogel'
!O27.percentageShares := 70
!insert (R11, O27) into RestaurantOwner

!new Owner('O28')
!O28.name := 'Emre Yılmaz'
!O28.percentageShares := 30
!insert (R11, O28) into RestaurantOwner

!new HeadWaiter('HW11')
!HW11.name := 'Sabine Krüger'
!HW11.dateOfBirth := Date('1980-06-16')
!HW11.phoneNumber := '+49 30 5550 1000'

!new Waiter('W23')
!W23.name := 'Jonas Weber'
!W23.dateOfBirth := Date('1997-02-11')
!W23.phoneNumber := '+49 30 5550 1001'
!W23.spokenLanguage := #German
!insert (HW11, W23) into HeadWaiterWaiter

!new Waiter('W24')
!W24.name := 'Hannah Smith'
!W24.dateOfBirth := Date('1993-09-29')
!W24.phoneNumber := '+49 30 5550 1002'
!W24.spokenLanguage := #English
!insert (HW11, W24) into HeadWaiterWaiter

!new Cook('K16')
!K16.name := 'Peter Neumann'
!K16.dateOfBirth := Date('1974-01-08')
!K16.phoneNumber := '+49 30 5550 2000'
!K16.yearsOfExperience := 7

!new Cook('K17')
!K17.name := 'Aylin Demir'
!K17.dateOfBirth := Date('1988-12-20')
!K17.phoneNumber := '+49 30 5550 2001'
!K17.yearsOfExperience := 2

!new Chef('CH19')
!CH19.name := 'Luca Romano'
!CH19.dateOfBirth := Date('1985-04-14')
!CH19.phoneNumber := '+49 30 5550 3000'
!insert (CH19, K16) into ChefCook

!new Chef('CH20')
!CH20.name := 'Miriam Cohen'
!CH20.dateOfBirth := Date('1990-07-03')
!CH20.phoneNumber := '+49 30 5550 3001'
!insert (CH20, K17) into ChefCook

!new Allergen('ALG11')
!ALG11.type := #Gluten

!new Allergen('ALL11')
!ALL11.type := #Lactose

!new Allergen('ALN11')
!ALN11.type := #Nuts

!new FoodItem('F801')
!F801.number := 501
!F801.description := 'Rye bread slices'
!F801.purchaseFlag := true
!F801.unit := #Dozen
!insert (F801, ALG11) into FoodItemAllergen

!new FoodItem('F802')
!F802.number := 502
!F802.description := 'Quark cheese'
!F802.purchaseFlag := true
!F802.unit := #Ounce
!insert (F802, ALL11) into FoodItemAllergen

!new FoodItem('F803')
!F803.number := 503
!F803.description := 'Hazelnut crumble'
!F803.purchaseFlag := true
!F803.unit := #Gram
!insert (F803, ALN11) into FoodItemAllergen

!new MenuItem('MI32')
!MI32.description := 'Rye bread with herb quark'
!MI32.prepTime := 6.0
!MI32.classification := #Apetizer
!insert (MI32, CH19) into MenuItemChef
!insert (MI32, F801) into MenuItemFoodItem
!insert (MI32, F802) into MenuItemFoodItem

!new MenuItem('MI33')
!MI33.description := 'Apple-hazelnut crumble'
!MI33.prepTime := 20.0
!MI33.classification := #Dessert
!insert (MI33, CH20) into MenuItemChef
!insert (MI33, F803) into MenuItemFoodItem

!new MenuItem('MI34')
!MI34.description := 'Sparkling water (bottle)'
!MI34.prepTime := 0.5
!MI34.classification := #Beverage
!insert (MI34, CH19) into MenuItemChef

!new Table('T21_SK')
!T21_SK.number := 21
!T21_SK.description := 'High-top near the river-facing windows'
!T21_SK.capacity := 4

!new RegularCustomer('C12')
!C12.name := 'Oliver Brown'
!C12.prefferedLanguage := #English

!new Individual('IR13')
!IR13.time := Time('18:45')
!IR13.date := Date('2026-11-05')
!IR13.numberPeople := 3
!IR13.name := 'Oliver Brown'
!IR13.phoneNumber := '+44 7700 900123'
!IR13.number := 8802
!IR13.seating := #Inside
!IR13.smoking := #NonSmoking
!insert (R11, IR13) into RestaurantReservation
!insert (IR13, C12) into ReservationCustomer
!insert (IR13, W24) into ReservationWaiter
!insert (IR13, T21_SK) into ReservationTable

!new ItemOrder('IO1401')
!IO1401.time := Time('19:00')
!insert (IR13, IO1401) into ReservationItemOrdered
!insert (IO1401, MI32) into ItemOrderMenuItem

!new ItemOrder('IO1402')
!IO1402.time := Time('19:05')
!insert (IR13, IO1402) into ReservationItemOrdered
!insert (IO1402, MI34) into ItemOrderMenuItem

!new ItemOrder('IO1403')
!IO1403.time := Time('19:40')
!insert (IR13, IO1403) into ReservationItemOrdered
!insert (IO1403, MI33) into ItemOrderMenuItem

!new Individual('IR14')
!IR14.time := Time('20:15')
!IR14.date := Date('2026-11-05')
!IR14.numberPeople := 2
!IR14.name := 'Nora Klein'
!IR14.phoneNumber := '+49 157 111 2233'
!IR14.number := 8803
!IR14.seating := #Inside
!IR14.smoking := #NonSmoking
!insert (R11, IR14) into RestaurantReservation

!new DietaryRequirement('DR9')
!DR9.diet := #Vegetarian

!new ReportedAllergy('RA8')
!RA8.allergen := #Gluten
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 2 | 26 | 7.69% |
| Invariants Errors (Not included on General) | 1 | 4 | 25.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `ReservationTable':
  Object `IR14' of class `Individual' is connected to 0 objects of class `Table'
  at association end `assignedTo' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `ReservationWaiter':
  Object `IR14' of class `Individual' is connected to 0 objects of class `Waiter'
  at association end `servedBy' but the multiplicity is specified as `1..*'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (2) `Reservation::TablesCapacityGreaterThanPeople': FAILED.
```

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 9 | 0.00% |
| Phones | 0 | 9 | 0.00% |

## Generation 3 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 1322 | 0.00% |
| Multiplicities Errors | 0 | 264 | 0.00% |
| Invariants Errors | 0 | 16 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 2 | 26 | 7.69% |
| Invariants Errors (Not included on General) | 1 | 4 | 25.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `ReservationTable':
  Object `IR14' of class `Individual' is connected to 0 objects of class `Table'
  at association end `assignedTo' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `ReservationWaiter':
  Object `IR14' of class `Individual' is connected to 0 objects of class `Waiter'
  at association end `servedBy' but the multiplicity is specified as `1..*'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (2) `Reservation::TablesCapacityGreaterThanPeople': FAILED.
```

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 81 | 0.00% |
| Phones | 0 | 81 | 0.00% |

# Generation 4
## Category baseline
```
!new Restaurant('R20')
!R20.name := 'Azul Mercado Brasserie'

!new Owner('O42')
!O42.name := 'Renata Souza'
!O42.percentageShares := 45
!insert (R20, O42) into RestaurantOwner

!new Owner('O43')
!O43.name := 'Jonas Richter'
!O43.percentageShares := 35
!insert (R20, O43) into RestaurantOwner

!new Owner('O44')
!O44.name := 'Isabella Rossi'
!O44.percentageShares := 20
!insert (R20, O44) into RestaurantOwner

!new RegularCustomer('C21')
!C21.name := 'Marta Kowalska'
!C21.prefferedLanguage := #German

!new RegularCustomer('C22')
!C22.name := 'Diego Herrera'
!C22.prefferedLanguage := #Spanish

!new HeadWaiter('HW19')
!HW19.name := 'Nina Petrova'
!HW19.dateOfBirth := Date('1982-10-10')
!HW19.phoneNumber := '+351-21-555-0100'

!new Waiter('W43')
!W43.name := 'Paolo Greco'
!W43.dateOfBirth := Date('1998-04-06')
!W43.phoneNumber := '+39-345-555-2233'
!W43.spokenLanguage := #Italian
!insert (HW19, W43) into HeadWaiterWaiter

!new Manager('M16')
!M16.name := 'Ava Thompson'
!M16.dateOfBirth := Date('1977-05-25')
!M16.phoneNumber := '+1-503-555-3322'

!new Cook('K30')
!K30.name := 'Farid Benali'
!K30.dateOfBirth := Date('1986-01-17')
!K30.phoneNumber := '+212-5-555-7788'
!K30.yearsOfExperience := 6

!new Cook('K31')
!K31.name := 'Farid Benali'
!K31.dateOfBirth := Date('1986-01-17')
!K31.phoneNumber := '+212-5-555-7788'
!K31.yearsOfExperience := 6

!new Cook('K32')
!K32.name := 'Farid Benali'
!K32.dateOfBirth := Date('1986-01-17')
!K32.phoneNumber := '+212-5-555-7788'
!K32.yearsOfExperience := 6

!new Chef('CH33')
!CH33.name := 'Samantha Lee'
!CH33.dateOfBirth := Date('1991-09-09')
!CH33.phoneNumber := '+1-415-555-1109'
!insert (CH33, K30) into ChefCook

!new Chef('CH34')
!CH34.name := 'Tomás Silva'
!CH34.dateOfBirth := Date('1989-12-20')
!CH34.phoneNumber := '+55-11-555-8899'
!insert (CH34, K31) into ChefCook

!new Chef('CH35')
!CH35.name := 'Helena Nowak'
!CH35.dateOfBirth := Date('1994-06-02')
!CH35.phoneNumber := '+48-22-555-9911'
!insert (CH35, K32) into ChefCook

!new BusDriver('BD22')
!BD22.name := 'Seán Murphy'
!BD22.dateOfBirth := Date('1973-03-13')
!BD22.phoneNumber := '+353-1-555-7781'
!BD22.driverLicenseNr := 'IE-DL-560044'

!new Individual('IR21')
!IR21.time := Time('17:45')
!IR21.date := Date('2026-06-10')
!IR21.numberPeople := 1
!IR21.name := 'Walk-in: Jamie Park'
!IR21.phoneNumber := '+1-206-555-0404'
!IR21.number := 1201
!IR21.seating := #Patio
!IR21.smoking := #NonSmoking
!insert (R20, IR21) into RestaurantReservation
!insert (IR21, W43) into ReservationWaiter

!new Individual('IR22')
!IR22.time := Time('13:00')
!IR22.date := Date('2026-06-11')
!IR22.numberPeople := 6
!IR22.name := 'S. Martins'
!IR22.phoneNumber := '+55-21-555-5151'
!IR22.number := 1202
!IR22.seating := #Inside
!IR22.smoking := #NonSmoking
!insert (R20, IR22) into RestaurantReservation
!insert (IR22, W43) into ReservationWaiter

!new Banquet('BR18')
!BR18.time := Time('20:30')
!BR18.date := Date('2026-06-12')
!BR18.numberPeople := 22
!BR18.name := 'Marta Kowalska'
!BR18.phoneNumber := '+49-170-555-6010'
!BR18.number := 1300
!BR18.groupName := 'International Chamber Networking Night'
!BR18.paymentMethod := #Cash
!BR18.busService := true
!insert (R20, BR18) into RestaurantReservation
!insert (BR18, C21) into ReservationCustomer
!insert (BR18, W43) into ReservationWaiter
!insert (BR18, BD22) into BanquetBusDriver

!new Table('T70_AMB')
!T70_AMB.number := 70
!T70_AMB.description := 'Patio two-top near herb planters'
!T70_AMB.capacity := 2
!insert (IR21, T70_AMB) into ReservationTable

!new Table('T71_AMB')
!T71_AMB.number := 71
!T71_AMB.description := 'Indoor four-top near open kitchen pass'
!T71_AMB.capacity := 4
!insert (IR22, T71_AMB) into ReservationTable

!new Table('T72_AMB')
!T72_AMB.number := 72
!T72_AMB.description := 'Indoor four-top adjacent to table 71 (can be joined)'
!T72_AMB.capacity := 4
!insert (IR22, T72_AMB) into ReservationTable

!new Table('T80_AMB')
!T80_AMB.number := 80
!T80_AMB.description := 'Banquet table by presentation screen'
!T80_AMB.capacity := 8
!insert (BR18, T80_AMB) into ReservationTable

!new Table('T81_AMB')
!T81_AMB.number := 81
!T81_AMB.description := 'Banquet table center aisle'
!T81_AMB.capacity := 8
!insert (BR18, T81_AMB) into ReservationTable

!new Table('T82_AMB')
!T82_AMB.number := 82
!T82_AMB.description := 'Banquet table near windows (VIP sponsors)'
!T82_AMB.capacity := 10
!insert (BR18, T82_AMB) into ReservationTable

!new Allergen('A4_GLU20')
!A4_GLU20.type := #Gluten

!new Allergen('A4_NUT20')
!A4_NUT20.type := #Nuts

!new Allergen('A4_LAC20')
!A4_LAC20.type := #Lactose

!new Allergen('A4_SEA20')
!A4_SEA20.type := #Seafood

!new FoodItem('F1001')
!F1001.number := 401
!F1001.description := 'Wheat noodles (udon)'
!F1001.purchaseFlag := true
!F1001.unit := #Pound
!insert (F1001, A4_GLU20) into FoodItemAllergen

!new FoodItem('F1002')
!F1002.number := 402
!F1002.description := 'Cashews (roasted)'
!F1002.purchaseFlag := true
!F1002.unit := #Gram
!insert (F1002, A4_NUT20) into FoodItemAllergen

!new FoodItem('F1003')
!F1003.number := 403
!F1003.description := 'Parmesan cheese'
!F1003.purchaseFlag := true
!F1003.unit := #Ounce
!insert (F1003, A4_LAC20) into FoodItemAllergen

!new FoodItem('F1004')
!F1004.number := 404
!F1004.description := 'Octopus (cleaned)'
!F1004.purchaseFlag := true
!F1004.unit := #Pound
!insert (F1004, A4_SEA20) into FoodItemAllergen

!new FoodItem('F1005')
!F1005.number := 405
!F1005.description := 'Eggs'
!F1005.purchaseFlag := true
!F1005.unit := #Dozen

!new MenuItem('MI53')
!MI53.description := 'Octopus fritter skewers'
!MI53.prepTime := 13.0
!MI53.classification := #Apetizer
!insert (MI53, CH33) into MenuItemChef
!insert (MI53, F1004) into MenuItemFoodItem
!insert (MI53, F1005) into MenuItemFoodItem

!new MenuItem('MI54')
!MI54.description := 'Cashew pesto udon'
!MI54.prepTime := 19.0
!MI54.classification := #Main
!insert (MI54, CH34) into MenuItemChef
!insert (MI54, F1001) into MenuItemFoodItem
!insert (MI54, F1002) into MenuItemFoodItem
!insert (MI54, F1003) into MenuItemFoodItem

!new MenuItem('MI55')
!MI55.description := 'Tiramisu jar (espresso-soaked layers)'
!MI55.prepTime := 8.5
!MI55.classification := #Dessert
!insert (MI55, CH35) into MenuItemChef
!insert (MI55, F1003) into MenuItemFoodItem
!insert (MI55, F1005) into MenuItemFoodItem

!new MenuItem('MI56')
!MI56.description := 'Sparkling citrus tonic'
!MI56.prepTime := 2.5
!MI56.classification := #Beverage
!insert (MI56, CH33) into MenuItemChef

!new ItemOrder('IO1901')
!IO1901.time := Time('18:05')
!insert (IR21, IO1901) into ReservationItemOrdered
!insert (IO1901, MI56) into ItemOrderMenuItem

!new ItemOrder('IO1902')
!IO1902.time := Time('20:50')
!insert (BR18, IO1902) into ReservationItemOrdered
!insert (IO1902, MI53) into ItemOrderMenuItem

!new ItemOrder('IO1903')
!IO1903.time := Time('21:10')
!insert (BR18, IO1903) into ReservationItemOrdered
!insert (IO1903, MI54) into ItemOrderMenuItem

!new ItemOrder('IO1904')
!IO1904.time := Time('21:35')
!insert (BR18, IO1904) into ReservationItemOrdered
!insert (IO1904, MI55) into ItemOrderMenuItem

!new DietaryRequirement('DR17')
!DR17.diet := #Vegetarian

!new ReportedAllergy('RA15')
!RA15.allergen := #Lactose
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 219 | 0.00% |
| Multiplicities Errors | 0 | 44 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 13 | 0.00% |
| Phones | 0 | 13 | 0.00% |

## Category boundary
```
!new Restaurant('R25')
!R25.name := 'Ryokan Riverstone Izakaya'

!new Owner('O54')
!O54.name := 'Haruto Saitō'
!O54.percentageShares := 99
!insert (R25, O54) into RestaurantOwner

!new Owner('O55')
!O55.name := 'Lê Ánh Nguyên'
!O55.percentageShares := 1
!insert (R25, O55) into RestaurantOwner

!new HeadWaiter('HW24')
!HW24.name := 'Ayesha Khan'
!HW24.dateOfBirth := Date('1982-02-20')
!HW24.phoneNumber := '+81 3 5555 0100'

!new Waiter('W53')
!W53.name := 'Kenji Watanabe'
!W53.dateOfBirth := Date('1994-09-13')
!W53.phoneNumber := '+81 3 5555 0101'
!W53.spokenLanguage := #English
!insert (HW24, W53) into HeadWaiterWaiter

!new Waiter('W54')
!W54.name := 'Lucía Ortega'
!W54.dateOfBirth := Date('1998-01-04')
!W54.phoneNumber := '+81 3 5555 0102'
!W54.spokenLanguage := #Spanish
!insert (HW24, W54) into HeadWaiterWaiter

!new Waiter('W55')
!W55.name := 'Marius Vogel'
!W55.dateOfBirth := Date('1993-06-28')
!W55.phoneNumber := '+81 3 5555 0103'
!W55.spokenLanguage := #German
!insert (HW24, W55) into HeadWaiterWaiter

!new Waiter('W56')
!W56.name := 'Chiara De Santis'
!W56.dateOfBirth := Date('1999-11-19')
!W56.phoneNumber := '+81 3 5555 0104'
!W56.spokenLanguage := #Italian
!insert (HW24, W56) into HeadWaiterWaiter

!new Waiter('W57')
!W57.name := 'Noah Williams'
!W57.dateOfBirth := Date('2002-03-02')
!W57.phoneNumber := '+81 3 5555 0105'
!W57.spokenLanguage := #English
!insert (HW24, W57) into HeadWaiterWaiter

!new Manager('M19')
!M19.name := 'Soo-jin Park'
!M19.dateOfBirth := Date('1977-07-07')
!M19.phoneNumber := '+81 3 5555 0199'

!new Cook('K39')
!K39.name := 'Boris Ivanov'
!K39.dateOfBirth := Date('1987-12-01')
!K39.phoneNumber := '+81 3 5555 0200'
!K39.yearsOfExperience := 0

!new Cook('K40')
!K40.name := 'Boris Ivanov'
!K40.dateOfBirth := Date('1987-12-01')
!K40.phoneNumber := '+81 3 5555 0200'
!K40.yearsOfExperience := 0

!new Cook('K41')
!K41.name := 'Boris Ivanov'
!K41.dateOfBirth := Date('1987-12-01')
!K41.phoneNumber := '+81 3 5555 0200'
!K41.yearsOfExperience := 0

!new Chef('CH42')
!CH42.name := 'Mai Nakamura'
!CH42.dateOfBirth := Date('1990-05-15')
!CH42.phoneNumber := '+81 3 5555 0301'
!insert (CH42, K39) into ChefCook

!new Chef('CH43')
!CH43.name := 'Rashid Al-Farsi'
!CH43.dateOfBirth := Date('1989-08-08')
!CH43.phoneNumber := '+81 3 5555 0302'
!insert (CH43, K40) into ChefCook

!new Chef('CH44')
!CH44.name := 'Elena Popescu'
!CH44.dateOfBirth := Date('1996-10-10')
!CH44.phoneNumber := '+81 3 5555 0303'
!insert (CH44, K41) into ChefCook

!new Allergen('A_GLU25')
!A_GLU25.type := #Gluten

!new FoodItem('F1301')
!F1301.number := 500
!F1301.description := 'Eggs (for custard)'
!F1301.purchaseFlag := true
!F1301.unit := #Dozen

!new FoodItem('F1302')
!F1302.number := 501
!F1302.description := 'Wheat udon noodles'
!F1302.purchaseFlag := true
!F1302.unit := #Pound
!insert (F1302, A_GLU25) into FoodItemAllergen

!new FoodItem('F1303')
!F1303.number := 502
!F1303.description := 'Broth concentrate'
!F1303.purchaseFlag := true
!F1303.unit := #Ounce

!new FoodItem('F1304')
!F1304.number := 503
!F1304.description := 'Roasted barley tea leaves'
!F1304.purchaseFlag := false
!F1304.unit := #Gram
!insert (F1304, A_GLU25) into FoodItemAllergen

!new MenuItem('MI65')
!MI65.description := 'Kyoto-style Udon Bowl'
!MI65.prepTime := 18.0
!MI65.classification := #Main
!insert (MI65, CH42) into MenuItemChef
!insert (MI65, F1302) into MenuItemFoodItem
!insert (MI65, F1303) into MenuItemFoodItem

!new MenuItem('MI66')
!MI66.description := 'Matcha Custard Pot'
!MI66.prepTime := 30.0
!MI66.classification := #Dessert
!insert (MI66, CH43) into MenuItemChef
!insert (MI66, F1301) into MenuItemFoodItem

!new MenuItem('MI67')
!MI67.description := 'Barley Tea Service'
!MI67.prepTime := 4.0
!MI67.classification := #Beverage
!insert (MI67, CH42) into MenuItemChef
!insert (MI67, F1304) into MenuItemFoodItem

!new RegularCustomer('C27')
!C27.name := 'Chloé Martin'
!C27.prefferedLanguage := #German

!new Individual('IR27')
!IR27.number := 300
!IR27.date := Date('2026-04-05')
!IR27.time := Time('19:10')
!IR27.numberPeople := 8
!IR27.name := 'Chloé Martin'
!IR27.phoneNumber := '+81 80 5555 0300'
!IR27.seating := #Inside
!IR27.smoking := #NonSmoking
!insert (R25, IR27) into RestaurantReservation
!insert (IR27, C27) into ReservationCustomer
!insert (IR27, W53) into ReservationWaiter

!new Table('T201_RRI')
!T201_RRI.number := 201
!T201_RRI.description := 'Window counter seat 1'
!T201_RRI.capacity := 1
!insert (IR27, T201_RRI) into ReservationTable

!new Table('T202_RRI')
!T202_RRI.number := 202
!T202_RRI.description := 'Window counter seat 2'
!T202_RRI.capacity := 1
!insert (IR27, T202_RRI) into ReservationTable

!new Table('T203_RRI')
!T203_RRI.number := 203
!T203_RRI.description := 'Window counter seat 3'
!T203_RRI.capacity := 1
!insert (IR27, T203_RRI) into ReservationTable

!new Table('T204_RRI')
!T204_RRI.number := 204
!T204_RRI.description := 'Window counter seat 4'
!T204_RRI.capacity := 1
!insert (IR27, T204_RRI) into ReservationTable

!new Table('T205_RRI')
!T205_RRI.number := 205
!T205_RRI.description := 'Window counter seat 5'
!T205_RRI.capacity := 1
!insert (IR27, T205_RRI) into ReservationTable

!new Table('T206_RRI')
!T206_RRI.number := 206
!T206_RRI.description := 'Window counter seat 6'
!T206_RRI.capacity := 1
!insert (IR27, T206_RRI) into ReservationTable

!new Table('T207_RRI')
!T207_RRI.number := 207
!T207_RRI.description := 'Window counter seat 7'
!T207_RRI.capacity := 1
!insert (IR27, T207_RRI) into ReservationTable

!new Table('T208_RRI')
!T208_RRI.number := 208
!T208_RRI.description := 'Window counter seat 8'
!T208_RRI.capacity := 1
!insert (IR27, T208_RRI) into ReservationTable

!new ItemOrder('IO2201')
!IO2201.time := Time('19:20')
!insert (IR27, IO2201) into ReservationItemOrdered
!insert (IO2201, MI67) into ItemOrderMenuItem

!new ItemOrder('IO2202')
!IO2202.time := Time('19:22')
!insert (IR27, IO2202) into ReservationItemOrdered
!insert (IO2202, MI67) into ItemOrderMenuItem

!new ItemOrder('IO2203')
!IO2203.time := Time('19:35')
!insert (IR27, IO2203) into ReservationItemOrdered
!insert (IO2203, MI65) into ItemOrderMenuItem

!new ItemOrder('IO2204')
!IO2204.time := Time('19:36')
!insert (IR27, IO2204) into ReservationItemOrdered
!insert (IO2204, MI65) into ItemOrderMenuItem

!new ItemOrder('IO2205')
!IO2205.time := Time('20:05')
!insert (IR27, IO2205) into ReservationItemOrdered
!insert (IO2205, MI66) into ItemOrderMenuItem

!new ItemOrder('IO2206')
!IO2206.time := Time('20:06')
!insert (IR27, IO2206) into ReservationItemOrdered
!insert (IO2206, MI66) into ItemOrderMenuItem

!new Banquet('BR21')
!BR21.number := 301
!BR21.date := Date('2026-04-05')
!BR21.time := Time('20:00')
!BR21.numberPeople := 12
!BR21.name := 'C. Martin (Host)'
!BR21.phoneNumber := '+81 80 5555 0300'
!BR21.groupName := 'Osaka Startup Meetup (Tokyo Chapter)'
!BR21.paymentMethod := #Cash
!BR21.busService := false
!insert (R25, BR21) into RestaurantReservation
!insert (BR21, C27) into ReservationCustomer
!insert (BR21, W53) into ReservationWaiter
!insert (BR21, W54) into ReservationWaiter

!new Table('T209_RRI')
!T209_RRI.number := 209
!T209_RRI.description := 'Tatami room table A'
!T209_RRI.capacity := 4
!insert (BR21, T209_RRI) into ReservationTable

!new Table('T210_RRI')
!T210_RRI.number := 210
!T210_RRI.description := 'Tatami room table B'
!T210_RRI.capacity := 4
!insert (BR21, T210_RRI) into ReservationTable

!new Table('T211_RRI')
!T211_RRI.number := 211
!T211_RRI.description := 'Tatami room table C'
!T211_RRI.capacity := 4
!insert (BR21, T211_RRI) into ReservationTable

!new DietaryRequirement('DR22')
!DR22.diet := #Kosher

!new ReportedAllergy('RA22')
!RA22.allergen := #Nuts
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 233 | 0.00% |
| Multiplicities Errors | 0 | 49 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 15 | 0.00% |
| Phones | 0 | 15 | 0.00% |

## Category complex
```
!new Restaurant('R36')
!R36.name := 'Kiez Koshery'

!new Restaurant('R37')
!R37.name := 'Desert Road Smokehouse'

!new Owner('O79')
!O79.name := 'Miriam Klein'
!O79.percentageShares := 40
!insert (R36, O79) into RestaurantOwner

!new Owner('O80')
!O80.name := 'David Rosen'
!O80.percentageShares := 25
!insert (R36, O80) into RestaurantOwner

!new Owner('O81')
!O81.name := 'Selin Yılmaz'
!O81.percentageShares := 20
!insert (R36, O81) into RestaurantOwner

!new Owner('O82')
!O82.name := 'Jakob Weiss'
!O82.percentageShares := 15
!insert (R36, O82) into RestaurantOwner

!new Owner('O83')
!O83.name := 'Wade Thornton'
!O83.percentageShares := 100
!insert (R37, O83) into RestaurantOwner

!new RegularCustomer('C39')
!C39.name := 'Anke Schneider'
!C39.prefferedLanguage := #German

!new RegularCustomer('C40')
!C40.name := 'Noah Stein'
!C40.prefferedLanguage := #English

!new HeadWaiter('HW34')
!HW34.name := 'Britta Neumann'
!HW34.dateOfBirth := Date('1980-01-17')
!HW34.phoneNumber := '+49 30 555 1200'

!new Waiter('W78')
!W78.name := 'Tarek Mansour'
!W78.dateOfBirth := Date('1992-06-08')
!W78.phoneNumber := '+49 30 555 1201'
!W78.spokenLanguage := #German
!insert (HW34, W78) into HeadWaiterWaiter

!new Waiter('W79')
!W79.name := 'Elena Rossi'
!W79.dateOfBirth := Date('1995-03-26')
!W79.phoneNumber := '+49 30 555 1202'
!W79.spokenLanguage := #Italian
!insert (HW34, W79) into HeadWaiterWaiter

!new HeadWaiter('HW35')
!HW35.name := 'Jolene Hart'
!HW35.dateOfBirth := Date('1984-09-04')
!HW35.phoneNumber := '+1 512 555 2200'

!new Waiter('W80')
!W80.name := 'Mason Cole'
!W80.dateOfBirth := Date('1990-02-12')
!W80.phoneNumber := '+1 512 555 2201'
!W80.spokenLanguage := #English
!insert (HW35, W80) into HeadWaiterWaiter

!new Waiter('W81')
!W81.name := 'Camila Reyes'
!W81.dateOfBirth := Date('1996-07-21')
!W81.phoneNumber := '+1 512 555 2202'
!W81.spokenLanguage := #Spanish
!insert (HW35, W81) into HeadWaiterWaiter

!new Waiter('W82')
!W82.name := 'Jonas Richter'
!W82.dateOfBirth := Date('1993-11-02')
!W82.phoneNumber := '+1 512 555 2203'
!W82.spokenLanguage := #German
!insert (HW35, W82) into HeadWaiterWaiter

!new Cook('K58')
!K58.name := 'Farah Haddad'
!K58.dateOfBirth := Date('1979-05-09')
!K58.phoneNumber := '+49 30 555 3300'
!K58.yearsOfExperience := 18

!new Cook('K59')
!K59.name := 'Farah Haddad'
!K59.dateOfBirth := Date('1979-05-09')
!K59.phoneNumber := '+49 30 555 3300'
!K59.yearsOfExperience := 18

!new Cook('K60')
!K60.name := 'Farah Haddad'
!K60.dateOfBirth := Date('1979-05-09')
!K60.phoneNumber := '+49 30 555 3300'
!K60.yearsOfExperience := 18

!new Cook('K61')
!K61.name := 'Hank Miller'
!K61.dateOfBirth := Date('1986-12-28')
!K61.phoneNumber := '+1 512 555 3301'
!K61.yearsOfExperience := 6

!new Chef('CH62')
!CH62.name := 'Leila Cohen'
!CH62.dateOfBirth := Date('1991-04-15')
!CH62.phoneNumber := '+49 30 555 3310'
!insert (CH62, K58) into ChefCook

!new Chef('CH63')
!CH63.name := 'Felix Brandt'
!CH63.dateOfBirth := Date('1988-10-07')
!CH63.phoneNumber := '+49 30 555 3311'
!insert (CH63, K59) into ChefCook

!new Chef('CH64')
!CH64.name := 'Sara Ben-David'
!CH64.dateOfBirth := Date('1994-02-20')
!CH64.phoneNumber := '+49 30 555 3312'
!insert (CH64, K60) into ChefCook

!new Chef('CH65')
!CH65.name := 'Travis King'
!CH65.dateOfBirth := Date('1985-08-02')
!CH65.phoneNumber := '+1 512 555 3313'
!insert (CH65, K61) into ChefCook

!new Manager('M25')
!M25.name := 'Petra Lange'
!M25.dateOfBirth := Date('1973-06-18')
!M25.phoneNumber := '+49 30 555 4400'

!new Manager('M26')
!M26.name := 'Riley Dawson'
!M26.dateOfBirth := Date('1977-01-26')
!M26.phoneNumber := '+1 512 555 4401'

!new BusDriver('BD34')
!BD34.name := 'Scott Nguyen'
!BD34.dateOfBirth := Date('1970-03-13')
!BD34.phoneNumber := '+1 512 555 5500'
!BD34.driverLicenseNr := 'TX-CDL-448812'

!new BusDriver('BD35')
!BD35.name := 'Marisol Peña'
!BD35.dateOfBirth := Date('1982-09-30')
!BD35.phoneNumber := '+1 512 555 5501'
!BD35.driverLicenseNr := 'TX-CDL-772190'

!new Allergen('A1_KK')
!A1_KK.type := #Gluten

!new Allergen('A2_KK')
!A2_KK.type := #Lactose

!new Allergen('A3_KK')
!A3_KK.type := #Nuts

!new Allergen('A4_KK')
!A4_KK.type := #Seafood

!new FoodItem('F1701')
!F1701.number := 401
!F1701.description := 'Smoked beef brisket'
!F1701.purchaseFlag := true
!F1701.unit := #Pound

!new FoodItem('F1702')
!F1702.number := 402
!F1702.description := 'BBQ sauce (wheat-thickened)'
!F1702.purchaseFlag := true
!F1702.unit := #Ounce
!insert (F1702, A1_KK) into FoodItemAllergen

!new FoodItem('F1703')
!F1703.number := 403
!F1703.description := 'Sesame bagel (wheat)'
!F1703.purchaseFlag := true
!F1703.unit := #Dozen
!insert (F1703, A1_KK) into FoodItemAllergen

!new FoodItem('F1704')
!F1704.number := 404
!F1704.description := 'Cream cheese'
!F1704.purchaseFlag := true
!F1704.unit := #Ounce
!insert (F1704, A2_KK) into FoodItemAllergen

!new FoodItem('F1705')
!F1705.number := 405
!F1705.description := 'Peanut-cocoa filling'
!F1705.purchaseFlag := false
!F1705.unit := #Ounce
!insert (F1705, A3_KK) into FoodItemAllergen

!new FoodItem('F1706')
!F1706.number := 406
!F1706.description := 'Shrimp (peeled)'
!F1706.purchaseFlag := true
!F1706.unit := #Pound
!insert (F1706, A4_KK) into FoodItemAllergen

!new FoodItem('F1707')
!F1707.number := 407
!F1707.description := 'Buttered brioche bun'
!F1707.purchaseFlag := true
!F1707.unit := #Dozen
!insert (F1707, A1_KK) into FoodItemAllergen
!insert (F1707, A2_KK) into FoodItemAllergen

!new FoodItem('F1708')
!F1708.number := 408
!F1708.description := 'Walnut brownie base (milk + flour)'
!F1708.purchaseFlag := true
!F1708.unit := #Sheet
!insert (F1708, A1_KK) into FoodItemAllergen
!insert (F1708, A2_KK) into FoodItemAllergen
!insert (F1708, A3_KK) into FoodItemAllergen

!new FoodItem('F1709')
!F1709.number := 409
!F1709.description := 'Barley malt extract'
!F1709.purchaseFlag := true
!F1709.unit := #Gram
!insert (F1709, A1_KK) into FoodItemAllergen

!new MenuItem('MI93')
!MI93.description := 'Bagel & schmear'
!MI93.prepTime := 4.0
!MI93.classification := #Apetizer
!insert (MI93, CH62) into MenuItemChef
!insert (MI93, F1703) into MenuItemFoodItem
!insert (MI93, F1704) into MenuItemFoodItem

!new MenuItem('MI94')
!MI94.description := 'Brisket plate with sauce'
!MI94.prepTime := 17.0
!MI94.classification := #Main
!insert (MI94, CH65) into MenuItemChef
!insert (MI94, F1701) into MenuItemFoodItem
!insert (MI94, F1702) into MenuItemFoodItem

!new MenuItem('MI95')
!MI95.description := 'Shrimp brioche slider'
!MI95.prepTime := 11.5
!MI95.classification := #Main
!insert (MI95, CH63) into MenuItemChef
!insert (MI95, F1706) into MenuItemFoodItem
!insert (MI95, F1707) into MenuItemFoodItem

!new MenuItem('MI96')
!MI96.description := 'Peanut-walnut brownie square'
!MI96.prepTime := 9.5
!MI96.classification := #Dessert
!insert (MI96, CH64) into MenuItemChef
!insert (MI96, F1705) into MenuItemFoodItem
!insert (MI96, F1708) into MenuItemFoodItem

!new MenuItem('MI97')
!MI97.description := 'House lager (draft)'
!MI97.prepTime := 1.0
!MI97.classification := #Beverage
!insert (MI97, CH65) into MenuItemChef
!insert (MI97, F1709) into MenuItemFoodItem

!new Individual('IR39')
!IR39.time := Time('08:15')
!IR39.date := Date('2026-06-14')
!IR39.numberPeople := 1
!IR39.name := 'Anke Schneider'
!IR39.phoneNumber := '+49 170 555 9090'
!IR39.number := 1001
!IR39.seating := #Inside
!IR39.smoking := #NonSmoking
!insert (R36, IR39) into RestaurantReservation
!insert (IR39, C39) into ReservationCustomer
!insert (IR39, W78) into ReservationWaiter

!new Table('T100_KK')
!T100_KK.number := 100
!T100_KK.description := 'Counter-side two-top'
!T100_KK.capacity := 2
!insert (IR39, T100_KK) into ReservationTable

!new ItemOrder('IO2801')
!IO2801.time := Time('08:22')
!insert (IR39, IO2801) into ReservationItemOrdered
!insert (IO2801, MI93) into ItemOrderMenuItem

!new Banquet('BR28')
!BR28.time := Time('18:30')
!BR28.date := Date('2026-06-14')
!BR28.numberPeople := 12
!BR28.name := 'Noah Stein'
!BR28.phoneNumber := '+49 30 777 1212'
!BR28.number := 2002
!BR28.groupName := 'Startup Shabbat Dinner'
!BR28.paymentMethod := #Cash
!BR28.busService := false
!insert (R36, BR28) into RestaurantReservation
!insert (BR28, C40) into ReservationCustomer
!insert (BR28, W78) into ReservationWaiter
!insert (BR28, W79) into ReservationWaiter

!new Table('T110_KK')
!T110_KK.number := 110
!T110_KK.description := 'Long table near bookcase'
!T110_KK.capacity := 8
!insert (BR28, T110_KK) into ReservationTable

!new Table('T111_KK')
!T111_KK.number := 111
!T111_KK.description := 'Four-top joined to banquet end'
!T111_KK.capacity := 4
!insert (BR28, T111_KK) into ReservationTable

!new ItemOrder('IO2802')
!IO2802.time := Time('18:45')
!insert (BR28, IO2802) into ReservationItemOrdered
!insert (IO2802, MI93) into ItemOrderMenuItem

!new ItemOrder('IO2803')
!IO2803.time := Time('18:46')
!insert (BR28, IO2803) into ReservationItemOrdered
!insert (IO2803, MI93) into ItemOrderMenuItem

!new ItemOrder('IO2804')
!IO2804.time := Time('19:05')
!insert (BR28, IO2804) into ReservationItemOrdered
!insert (IO2804, MI95) into ItemOrderMenuItem

!new ItemOrder('IO2805')
!IO2805.time := Time('19:06')
!insert (BR28, IO2805) into ReservationItemOrdered
!insert (IO2805, MI95) into ItemOrderMenuItem

!new ItemOrder('IO2806')
!IO2806.time := Time('19:10')
!insert (BR28, IO2806) into ReservationItemOrdered
!insert (IO2806, MI96) into ItemOrderMenuItem

!new Individual('IR40')
!IR40.time := Time('20:00')
!IR40.date := Date('2026-06-20')
!IR40.numberPeople := 8
!IR40.name := 'Casey Harper'
!IR40.phoneNumber := '+1 512 555 7788'
!IR40.number := 3003
!IR40.seating := #Patio
!IR40.smoking := #Smoking
!insert (R37, IR40) into RestaurantReservation
!insert (IR40, W80) into ReservationWaiter

!new Table('T210_DRS')
!T210_DRS.number := 210
!T210_DRS.description := 'Patio six-top near fire pit'
!T210_DRS.capacity := 6
!insert (IR40, T210_DRS) into ReservationTable

!new Table('T211_DRS')
!T211_DRS.number := 211
!T211_DRS.description := 'Patio four-top pulled in'
!T211_DRS.capacity := 4
!insert (IR40, T211_DRS) into ReservationTable

!new ItemOrder('IO2807')
!IO2807.time := Time('20:10')
!insert (IR40, IO2807) into ReservationItemOrdered
!insert (IO2807, MI94) into ItemOrderMenuItem

!new ItemOrder('IO2808')
!IO2808.time := Time('20:11')
!insert (IR40, IO2808) into ReservationItemOrdered
!insert (IO2808, MI94) into ItemOrderMenuItem

!new ItemOrder('IO2809')
!IO2809.time := Time('20:18')
!insert (IR40, IO2809) into ReservationItemOrdered
!insert (IO2809, MI97) into ItemOrderMenuItem

!new ItemOrder('IO2810')
!IO2810.time := Time('20:19')
!insert (IR40, IO2810) into ReservationItemOrdered
!insert (IO2810, MI97) into ItemOrderMenuItem

!new ItemOrder('IO2811')
!IO2811.time := Time('20:40')
!insert (IR40, IO2811) into ReservationItemOrdered
!insert (IO2811, MI96) into ItemOrderMenuItem

!new Banquet('BR29')
!BR29.time := Time('17:00')
!BR29.date := Date('2026-06-21')
!BR29.numberPeople := 70
!BR29.name := 'Morgan Ellis'
!BR29.phoneNumber := '+1 512 555 9900'
!BR29.number := 4004
!BR29.groupName := 'Veterans Reunion'
!BR29.paymentMethod := #CreditCard
!BR29.busService := true
!insert (R37, BR29) into RestaurantReservation
!insert (BR29, BD34) into BanquetBusDriver
!insert (BR29, BD35) into BanquetBusDriver
!insert (BR29, W80) into ReservationWaiter
!insert (BR29, W81) into ReservationWaiter
!insert (BR29, W82) into ReservationWaiter

!new Table('T300_DRS')
!T300_DRS.number := 300
!T300_DRS.description := 'Banquet hall row 1'
!T300_DRS.capacity := 20
!insert (BR29, T300_DRS) into ReservationTable

!new Table('T301_DRS')
!T301_DRS.number := 301
!T301_DRS.description := 'Banquet hall row 2'
!T301_DRS.capacity := 20
!insert (BR29, T301_DRS) into ReservationTable

!new Table('T302_DRS')
!T302_DRS.number := 302
!T302_DRS.description := 'Banquet hall row 3'
!T302_DRS.capacity := 15
!insert (BR29, T302_DRS) into ReservationTable

!new Table('T303_DRS')
!T303_DRS.number := 303
!T303_DRS.description := 'Banquet hall row 4'
!T303_DRS.capacity := 15
!insert (BR29, T303_DRS) into ReservationTable

!new ItemOrder('IO2812')
!IO2812.time := Time('17:20')
!insert (BR29, IO2812) into ReservationItemOrdered
!insert (IO2812, MI97) into ItemOrderMenuItem

!new ItemOrder('IO2813')
!IO2813.time := Time('17:21')
!insert (BR29, IO2813) into ReservationItemOrdered
!insert (IO2813, MI97) into ItemOrderMenuItem

!new ItemOrder('IO2814')
!IO2814.time := Time('17:22')
!insert (BR29, IO2814) into ReservationItemOrdered
!insert (IO2814, MI97) into ItemOrderMenuItem

!new DietaryRequirement('DR30')
!DR30.diet := #Kosher

!new DietaryRequirement('DR31')
!DR31.diet := #Vegetarian

!new ReportedAllergy('RA30')
!RA30.allergen := #Seafood

!new ReportedAllergy('RA31')
!RA31.allergen := #Gluten
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 386 | 0.00% |
| Multiplicities Errors | 0 | 91 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 23 | 0.00% |
| Phones | 0 | 23 | 0.00% |

## Category edge
```
!new Restaurant('R39')
!R39.name := 'Himalayan Steam & Sourdough'

!new Restaurant('R40')
!R40.name := 'Cedar Reef Rotisserie'

!new Owner('O87')
!O87.name := 'Tenzin Norbu'
!O87.percentageShares := 100
!insert (R39, O87) into RestaurantOwner

!new Owner('O88')
!O88.name := 'Tenzin Norbu'
!O88.percentageShares := 0
!insert (R40, O88) into RestaurantOwner

!new Owner('O89')
!O89.name := 'Catherine Dubois'
!O89.percentageShares := 40
!insert (R40, O89) into RestaurantOwner

!new Owner('O90')
!O90.name := 'Adeola Okoye'
!O90.percentageShares := 30
!insert (R40, O90) into RestaurantOwner

!new Owner('O91')
!O91.name := 'Håkon Strand'
!O91.percentageShares := 30
!insert (R40, O91) into RestaurantOwner

!new RegularCustomer('C43')
!C43.name := 'Mina El-Sherif'
!C43.prefferedLanguage := #English

!new RegularCustomer('C44')
!C44.name := 'Jonas Weber'
!C44.prefferedLanguage := #German

!new HeadWaiter('HW37')
!HW37.name := 'Rosa Martínez'
!HW37.dateOfBirth := Date('1981-05-28')
!HW37.phoneNumber := '+34-91-555-0191'

!new HeadWaiter('HW38')
!HW38.name := 'Giovanni De Luca'
!HW38.dateOfBirth := Date('1970-01-03')
!HW38.phoneNumber := '+39-06-555-0130'

!new Waiter('W87')
!W87.name := 'Sara Ibrahim'
!W87.dateOfBirth := Date('2002-09-09')
!W87.phoneNumber := '+20-11-555-0108'
!W87.spokenLanguage := #English
!insert (HW37, W87) into HeadWaiterWaiter

!new Waiter('W88')
!W88.name := 'Luis Herrera'
!W88.dateOfBirth := Date('1998-04-14')
!W88.phoneNumber := '+52-55-5555-0119'
!W88.spokenLanguage := #Spanish
!insert (HW37, W88) into HeadWaiterWaiter

!new Waiter('W89')
!W89.name := 'Emma Rossi'
!W89.dateOfBirth := Date('1995-12-20')
!W89.phoneNumber := '+1-503-555-0166'
!W89.spokenLanguage := #Italian
!insert (HW37, W89) into HeadWaiterWaiter

!new Waiter('W90')
!W90.name := 'Lukas Schneider'
!W90.dateOfBirth := Date('1991-07-02')
!W90.phoneNumber := '+49-40-555-0172'
!W90.spokenLanguage := #German
!insert (HW38, W90) into HeadWaiterWaiter

!new Cook('K65')
!K65.name := 'Somchai Prasert'
!K65.dateOfBirth := Date('1948-02-11')
!K65.phoneNumber := '+66-81-555-0144'
!K65.yearsOfExperience := 70

!new Cook('K66')
!K66.name := 'Somchai Prasert'
!K66.dateOfBirth := Date('1948-02-11')
!K66.phoneNumber := '+66-81-555-0144'
!K66.yearsOfExperience := 70

!new Cook('K67')
!K67.name := 'Somchai Prasert'
!K67.dateOfBirth := Date('1948-02-11')
!K67.phoneNumber := '+66-81-555-0144'
!K67.yearsOfExperience := 70

!new Cook('K68')
!K68.name := 'Ava Nguyen'
!K68.dateOfBirth := Date('2000-03-30')
!K68.phoneNumber := '+1-206-555-0105'
!K68.yearsOfExperience := 0

!new Cook('K69')
!K69.name := 'Ava Nguyen'
!K69.dateOfBirth := Date('2000-03-30')
!K69.phoneNumber := '+1-206-555-0105'
!K69.yearsOfExperience := 0

!new Chef('CH69')
!CH69.name := 'Farid Hossain'
!CH69.dateOfBirth := Date('1988-10-10')
!CH69.phoneNumber := '+880-17-5555-0123'
!insert (CH69, K65) into ChefCook

!new Chef('CH70')
!CH70.name := 'Nina Petrović'
!CH70.dateOfBirth := Date('1993-06-06')
!CH70.phoneNumber := '+381-64-555-0120'
!insert (CH70, K66) into ChefCook

!new Chef('CH71')
!CH71.name := 'Ibrahim Diallo'
!CH71.dateOfBirth := Date('1985-08-25')
!CH71.phoneNumber := '+223-70-555-0190'
!insert (CH71, K67) into ChefCook

!new Chef('CH72')
!CH72.name := 'Omar Alavi'
!CH72.dateOfBirth := Date('1997-01-17')
!CH72.phoneNumber := '+971-55-555-0188'
!insert (CH72, K68) into ChefCook

!new Chef('CH73')
!CH73.name := 'Hannah Cohen'
!CH73.dateOfBirth := Date('1990-11-29')
!CH73.phoneNumber := '+1-312-555-0112'
!insert (CH73, K69) into ChefCook

!new Allergen('AL9_E4')
!AL9_E4.type := #Gluten

!new Allergen('AL10_E4')
!AL10_E4.type := #Lactose

!new Allergen('AL11_E4')
!AL11_E4.type := #Nuts

!new Allergen('AL12_E4')
!AL12_E4.type := #Seafood

!new FoodItem('FI40_E4')
!FI40_E4.number := 40
!FI40_E4.description := 'Chef’s All-Flags concentrate (test batch)'
!FI40_E4.purchaseFlag := false
!FI40_E4.unit := #Ounce
!insert (FI40_E4, AL9_E4) into FoodItemAllergen
!insert (FI40_E4, AL10_E4) into FoodItemAllergen
!insert (FI40_E4, AL11_E4) into FoodItemAllergen
!insert (FI40_E4, AL12_E4) into FoodItemAllergen

!new FoodItem('FI41_E4')
!FI41_E4.number := 41
!FI41_E4.description := 'Steamed dumpling wrappers'
!FI41_E4.purchaseFlag := true
!FI41_E4.unit := #Dozen
!insert (FI41_E4, AL9_E4) into FoodItemAllergen

!new FoodItem('FI42_E4')
!FI42_E4.number := 42
!FI42_E4.description := 'Roasted barley tea'
!FI42_E4.purchaseFlag := true
!FI42_E4.unit := #Gram
!insert (FI42_E4, AL9_E4) into FoodItemAllergen

!new FoodItem('FI43_E4')
!FI43_E4.number := 43
!FI43_E4.description := 'Cultured butter'
!FI43_E4.purchaseFlag := true
!FI43_E4.unit := #Ounce
!insert (FI43_E4, AL10_E4) into FoodItemAllergen

!new FoodItem('FI44_E4')
!FI44_E4.number := 44
!FI44_E4.description := 'Ground pistachio'
!FI44_E4.purchaseFlag := true
!FI44_E4.unit := #Gram
!insert (FI44_E4, AL11_E4) into FoodItemAllergen

!new FoodItem('FI45_E4')
!FI45_E4.number := 45
!FI45_E4.description := 'Dried shrimp flakes'
!FI45_E4.purchaseFlag := true
!FI45_E4.unit := #Gram
!insert (FI45_E4, AL12_E4) into FoodItemAllergen

!new MenuItem('MI102')
!MI102.description := 'Dumplings with Caution Sauce'
!MI102.prepTime := 7.0
!MI102.classification := #Apetizer
!insert (MI102, CH69) into MenuItemChef
!insert (MI102, FI41_E4) into MenuItemFoodItem
!insert (MI102, FI40_E4) into MenuItemFoodItem

!new MenuItem('MI103')
!MI103.description := 'Barley Tea, Double-Strength'
!MI103.prepTime := 0.5
!MI103.classification := #Beverage
!insert (MI103, CH70) into MenuItemChef
!insert (MI103, FI42_E4) into MenuItemFoodItem

!new MenuItem('MI104')
!MI104.description := '240-minute Butter-Braised Rotisserie Base'
!MI104.prepTime := 240.0
!MI104.classification := #Main
!insert (MI104, CH69) into MenuItemChef
!insert (MI104, FI43_E4) into MenuItemFoodItem
!insert (MI104, FI40_E4) into MenuItemFoodItem

!new MenuItem('MI105')
!MI105.description := 'Pistachio Sand (tiny dessert)'
!MI105.prepTime := 1.0
!MI105.classification := #Dessert
!insert (MI105, CH72) into MenuItemChef
!insert (MI105, FI44_E4) into MenuItemFoodItem

!new MenuItem('MI106')
!MI106.description := 'Shrimp-Flake Crackle Over Dumpling Skin'
!MI106.prepTime := 4.0
!MI106.classification := #Main
!insert (MI106, CH73) into MenuItemChef
!insert (MI106, FI41_E4) into MenuItemFoodItem
!insert (MI106, FI45_E4) into MenuItemFoodItem

!new Individual('IR43')
!IR43.time := Time('19:00')
!IR43.date := Date('2026-03-13')
!IR43.numberPeople := 3
!IR43.name := 'Алексей'
!IR43.phoneNumber := ''
!IR43.number := 0
!IR43.seating := #Inside
!IR43.smoking := #NonSmoking
!insert (IR43, W87) into ReservationWaiter
!insert (IR43, W88) into ReservationWaiter

!new Table('T500_E4')
!T500_E4.number := 0
!T500_E4.description := 'Narrow inside ledge table'
!T500_E4.capacity := 2
!insert (IR43, T500_E4) into ReservationTable

!new Table('T501_E4')
!T501_E4.number := -7
!T501_E4.description := 'Temporary stool-table (inventory tag -7)'
!T501_E4.capacity := 1
!insert (IR43, T501_E4) into ReservationTable

!new ItemOrder('IO3001')
!IO3001.time := Time('19:00')
!insert (IR43, IO3001) into ReservationItemOrdered
!insert (IO3001, MI102) into ItemOrderMenuItem

!new ItemOrder('IO3002')
!IO3002.time := Time('19:00')
!insert (IR43, IO3002) into ReservationItemOrdered
!insert (IO3002, MI103) into ItemOrderMenuItem

!new Banquet('BR31')
!BR31.time := Time('02:22')
!BR31.date := Date('2026-08-08')
!BR31.numberPeople := 120
!BR31.name := 'Mina El-Sherif'
!BR31.phoneNumber := '+1-416-555-0200'
!BR31.number := 99005
!BR31.groupName := 'Coastal Night Fishermen Cooperative'
!BR31.paymentMethod := #Cash
!BR31.busService := false
!insert (R40, BR31) into RestaurantReservation
!insert (BR31, C43) into ReservationCustomer
!insert (BR31, W89) into ReservationWaiter

!new Table('T600_E4')
!T600_E4.number := 600
!T600_E4.description := 'One-piece hall table (custom build)'
!T600_E4.capacity := 120
!insert (BR31, T600_E4) into ReservationTable

!new BusDriver('BD38')
!BD38.name := 'Svetlana Ivanova'
!BD38.dateOfBirth := Date('1982-02-02')
!BD38.phoneNumber := '+7-921-555-0101'
!BD38.driverLicenseNr := 'RU-SPB-2202'
!insert (BR31, BD38) into BanquetBusDriver

!new BusDriver('BD39')
!BD39.name := 'José da Silva'
!BD39.dateOfBirth := Date('1977-07-19')
!BD39.phoneNumber := '+55-21-5555-0144'
!BD39.driverLicenseNr := 'BR-RJ-7719'
!insert (BR31, BD39) into BanquetBusDriver

!new BusDriver('BD40')
!BD40.name := 'Fatou Ndiaye'
!BD40.dateOfBirth := Date('1990-09-09')
!BD40.phoneNumber := '+221-76-555-0176'
!BD40.driverLicenseNr := 'SN-DK-9009'
!insert (BR31, BD40) into BanquetBusDriver

!new BusDriver('BD41')
!BD41.name := 'Arman Hakobyan'
!BD41.dateOfBirth := Date('1986-12-12')
!BD41.phoneNumber := '+374-77-555-012'
!BD41.driverLicenseNr := 'AM-1212-86'
!insert (BR31, BD41) into BanquetBusDriver

!new BusDriver('BD42')
!BD42.name := 'Linh Pham'
!BD42.dateOfBirth := Date('1994-04-24')
!BD42.phoneNumber := '+84-90-555-0199'
!BD42.driverLicenseNr := 'VN-HCM-4424'
!insert (BR31, BD42) into BanquetBusDriver

!new Individual('IR44')
!IR44.time := Time('23:58')
!IR44.date := Date('2026-08-07')
!IR44.numberPeople := 1
!IR44.name := 'Mina El-Sherif'
!IR44.phoneNumber := '+1-416-555-0200'
!IR44.number := 99006
!IR44.seating := #Patio
!IR44.smoking := #Smoking
!insert (R39, IR44) into RestaurantReservation
!insert (IR44, C43) into ReservationCustomer
!insert (IR44, W90) into ReservationWaiter

!new Table('T900_E4')
!T900_E4.number := 900
!T900_E4.description := 'Patio mega-table held for privacy'
!T900_E4.capacity := 12
!insert (IR44, T900_E4) into ReservationTable

!new ItemOrder('IO3003')
!IO3003.time := Time('23:59')
!insert (IR44, IO3003) into ReservationItemOrdered
!insert (IO3003, MI105) into ItemOrderMenuItem

!new ItemOrder('IO3004')
!IO3004.time := Time('23:59')
!insert (IR44, IO3004) into ReservationItemOrdered
!insert (IO3004, MI106) into ItemOrderMenuItem

!new DietaryRequirement('DR33')
!DR33.diet := #Vegan

!new ReportedAllergy('RA33')
!RA33.allergen := #Nuts
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 298 | 0.00% |
| Multiplicities Errors | 0 | 61 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 24 | 0.00% |
| Phones | 0 | 23 | 0.00% |

## Category invalid
```
!new Restaurant('R17')
!R17.name := 'Desert Pearl Café'

!new Owner('O38')
!O38.name := 'Aisha Al Mansoori'
!O38.percentageShares := 80
!insert (R17, O38) into RestaurantOwner

!new Owner('O39')
!O39.name := 'Omar Haddad'
!O39.percentageShares := 20
!insert (R17, O39) into RestaurantOwner

!new Manager('M15')
!M15.name := 'Priya Nair'
!M15.dateOfBirth := Date('1987-03-21')
!M15.phoneNumber := '+971 50 222 1000'

!new HeadWaiter('HW16')
!HW16.name := 'Samir Khalil'
!HW16.dateOfBirth := Date('1982-09-09')
!HW16.phoneNumber := '+971 50 222 2000'

!new Waiter('W35')
!W35.name := 'Emily Johnson'
!W35.dateOfBirth := Date('1995-01-15')
!W35.phoneNumber := '+971 50 222 3000'
!W35.spokenLanguage := #English
!insert (HW16, W35) into HeadWaiterWaiter

!new Waiter('W36')
!W36.name := 'Carlos Reyes'
!W36.dateOfBirth := Date('1991-06-02')
!W36.phoneNumber := '+971 50 222 4000'
!W36.spokenLanguage := #Spanish
!insert (HW16, W36) into HeadWaiterWaiter

!new Cook('K26')
!K26.name := 'Ravi Kumar'
!K26.dateOfBirth := Date('1980-11-30')
!K26.phoneNumber := '+971 50 222 5000'
!K26.yearsOfExperience := 15

!new Chef('CH29')
!CH29.name := 'Hiro Tanaka'
!CH29.dateOfBirth := Date('1976-04-18')
!CH29.phoneNumber := '+971 50 222 6000'

!new Table('T31_DPC')
!T31_DPC.number := 31
!T31_DPC.description := 'Indoor booth near the coffee bar'
!T31_DPC.capacity := 4

!new Table('T32_DPC')
!T32_DPC.number := 32
!T32_DPC.description := 'Patio table with shade (smoke-free section)'
!T32_DPC.capacity := 2

!new Table('T33_DPC')
!T33_DPC.number := 33
!T33_DPC.description := 'Large round table in the back room for groups'
!T33_DPC.capacity := 8

!new RegularCustomer('C19')
!C19.name := 'María Fernández'
!C19.prefferedLanguage := #Spanish

!new Individual('IR20')
!IR20.time := Time('10:30')
!IR20.date := Date('2026-12-04')
!IR20.numberPeople := 2
!IR20.name := 'María Fernández'
!IR20.phoneNumber := '+34 610 111 222'
!IR20.number := 9001
!IR20.seating := #Patio
!IR20.smoking := #NonSmoking
!insert (R17, IR20) into RestaurantReservation
!insert (IR20, C19) into ReservationCustomer
!insert (IR20, W36) into ReservationWaiter
!insert (IR20, T32_DPC) into ReservationTable

!new Banquet('BR16')
!BR16.time := Time('13:00')
!BR16.date := Date('2026-12-04')
!BR16.numberPeople := 7
!BR16.name := 'Gulf Tech Procurement'
!BR16.phoneNumber := '+971 4 555 1212'
!BR16.number := 9002
!BR16.groupName := 'Gulf Tech Team Lunch'
!BR16.paymentMethod := #CreditCard
!BR16.busService := false
!insert (R17, BR16) into RestaurantReservation
!insert (BR16, W35) into ReservationWaiter
!insert (BR16, W36) into ReservationWaiter
!insert (BR16, T33_DPC) into ReservationTable

!new Allergen('A4G_DPC')
!A4G_DPC.type := #Gluten

!new Allergen('A4N_DPC')
!A4N_DPC.type := #Nuts

!new FoodItem('F906')
!F906.number := 801
!F906.description := 'Sesame flatbread (contains wheat)'
!F906.purchaseFlag := true
!F906.unit := #Dozen
!insert (F906, A4G_DPC) into FoodItemAllergen

!new FoodItem('F907')
!F907.number := 802
!F907.description := 'Pistachio crumble'
!F907.purchaseFlag := true
!F907.unit := #Gram
!insert (F907, A4N_DPC) into FoodItemAllergen

!new MenuItem('MI49')
!MI49.description := 'Spiced lamb flatbread with pistachio garnish'
!MI49.prepTime := 16.0
!MI49.classification := #Main
!insert (MI49, CH29) into MenuItemChef
!insert (MI49, F906) into MenuItemFoodItem
!insert (MI49, F907) into MenuItemFoodItem

!new ItemOrder('IO1701')
!IO1701.time := Time('10:45')
!insert (IR20, IO1701) into ReservationItemOrdered
!insert (IO1701, MI49) into ItemOrderMenuItem

!new ItemOrder('IO1702')
!IO1702.time := Time('13:20')
!insert (BR16, IO1702) into ReservationItemOrdered
!insert (IO1702, MI49) into ItemOrderMenuItem

!new DietaryRequirement('DR15')
!DR15.diet := #Halal

!new ReportedAllergy('RA13')
!RA13.allergen := #Nuts
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 3 | 21 | 14.29% |
| Invariants Errors (Not included on General) | 0 | 4 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `ChefCook':
  Object `CH29' of class `Chef' is connected to 0 objects of class `Cook'
  at association end `supervises' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `ChefCook':
  Object `K26' of class `Cook' is connected to 0 objects of class `Chef'
  at association end `underSupervisionOf' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `ReservationTable':
  Object `T31_DPC' of class `Table' is connected to 0 objects of class `Reservation'
  at association end `reservation' but the multiplicity is specified as `1'.
```

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 8 | 0.00% |
| Phones | 0 | 8 | 0.00% |

## Generation 4 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 1252 | 0.00% |
| Multiplicities Errors | 0 | 245 | 0.00% |
| Invariants Errors | 0 | 16 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 3 | 21 | 14.29% |
| Invariants Errors (Not included on General) | 0 | 4 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `ChefCook':
  Object `CH29' of class `Chef' is connected to 0 objects of class `Cook'
  at association end `supervises' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `ChefCook':
  Object `K26' of class `Cook' is connected to 0 objects of class `Chef'
  at association end `underSupervisionOf' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `ReservationTable':
  Object `T31_DPC' of class `Table' is connected to 0 objects of class `Reservation'
  at association end `reservation' but the multiplicity is specified as `1'.
```

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 83 | 0.00% |
| Phones | 0 | 82 | 0.00% |

# Generation 5
## Category baseline
```
!new Restaurant('R32')
!R32.name := 'Koru Pacific Grill'

!new Restaurant('R33')
!R33.name := 'Desert Lantern Majlis'

!new Owner('O71')
!O71.name := 'Moana Rangi'
!O71.percentageShares := 55
!insert (R32, O71) into RestaurantOwner
!insert (R33, O71) into RestaurantOwner

!new Owner('O72')
!O72.name := 'Hiroshi Tanaka'
!O72.percentageShares := 45
!insert (R32, O72) into RestaurantOwner

!new Owner('O73')
!O73.name := 'Fatima Al-Mansoori'
!O73.percentageShares := 45
!insert (R33, O73) into RestaurantOwner

!new RegularCustomer('C34')
!C34.name := 'Paola Conti'
!C34.prefferedLanguage := #Italian

!new RegularCustomer('C35')
!C35.name := 'Miguel Santos'
!C35.prefferedLanguage := #Spanish

!new HeadWaiter('HW31')
!HW31.name := 'Greta Weiß'
!HW31.dateOfBirth := Date('1981-01-08')
!HW31.phoneNumber := '+49-30-555-8800'

!new Waiter('W67')
!W67.name := 'Liam O’Connor'
!W67.dateOfBirth := Date('1995-03-27')
!W67.phoneNumber := '+353-1-555-1010'
!W67.spokenLanguage := #English
!insert (HW31, W67) into HeadWaiterWaiter

!new Waiter('W68')
!W68.name := 'Valentina Rizzo'
!W68.dateOfBirth := Date('1998-08-12')
!W68.phoneNumber := '+39-06-555-2020'
!W68.spokenLanguage := #Italian
!insert (HW31, W68) into HeadWaiterWaiter

!new Waiter('W69')
!W69.name := 'Carlos Méndez'
!W69.dateOfBirth := Date('1992-11-04')
!W69.phoneNumber := '+34-91-555-3030'
!W69.spokenLanguage := #Spanish
!insert (HW31, W69) into HeadWaiterWaiter

!new Waiter('W70')
!W70.name := 'Emily Chen'
!W70.dateOfBirth := Date('2000-02-19')
!W70.phoneNumber := '+1-604-555-4040'
!W70.spokenLanguage := #English
!insert (HW31, W70) into HeadWaiterWaiter

!new Manager('M23')
!M23.name := 'Noor Haddad'
!M23.dateOfBirth := Date('1974-09-16')
!M23.phoneNumber := '+971-4-555-5050'

!new Cook('K50')
!K50.name := 'Jae-min Park'
!K50.dateOfBirth := Date('1985-06-05')
!K50.phoneNumber := '+82-2-555-6060'
!K50.yearsOfExperience := 3

!new Cook('K51')
!K51.name := 'Jae-min Park'
!K51.dateOfBirth := Date('1985-06-05')
!K51.phoneNumber := '+82-2-555-6060'
!K51.yearsOfExperience := 3

!new Cook('K52')
!K52.name := 'Inés Duarte'
!K52.dateOfBirth := Date('1979-12-29')
!K52.phoneNumber := '+351-21-555-7070'
!K52.yearsOfExperience := 20

!new Chef('CH54')
!CH54.name := 'Said El-Karim'
!CH54.dateOfBirth := Date('1990-04-14')
!CH54.phoneNumber := '+212-5-555-8080'
!insert (CH54, K50) into ChefCook

!new Chef('CH55')
!CH55.name := 'Nadia Petrović'
!CH55.dateOfBirth := Date('1993-10-01')
!CH55.phoneNumber := '+381-11-555-9090'
!insert (CH55, K51) into ChefCook

!new Chef('CH56')
!CH56.name := 'Aroha Te Puni'
!CH56.dateOfBirth := Date('1988-07-22')
!CH56.phoneNumber := '+64-9-555-1111'
!insert (CH56, K52) into ChefCook

!new BusDriver('BD32')
!BD32.name := 'Pavel Ivanov'
!BD32.dateOfBirth := Date('1971-05-03')
!BD32.phoneNumber := '+1-416-555-1212'
!BD32.driverLicenseNr := 'ON-BUS-778833'

!new Individual('IR34')
!IR34.time := Time('19:10')
!IR34.date := Date('2026-07-08')
!IR34.numberPeople := 4
!IR34.name := 'Paola Conti'
!IR34.phoneNumber := '+39-333-000-1212'
!IR34.number := 1501
!IR34.seating := #Inside
!IR34.smoking := #NonSmoking
!insert (R32, IR34) into RestaurantReservation
!insert (IR34, C34) into ReservationCustomer
!insert (IR34, W67) into ReservationWaiter
!insert (IR34, W70) into ReservationWaiter

!new Banquet('BR25')
!BR25.time := Time('21:15')
!BR25.date := Date('2026-07-09')
!BR25.numberPeople := 60
!BR25.name := 'Miguel Santos'
!BR25.phoneNumber := '+34-600-555-777'
!BR25.number := 1600
!BR25.groupName := 'Gulf-Pacific Trade Delegation'
!BR25.paymentMethod := #CreditCard
!BR25.busService := true
!insert (R33, BR25) into RestaurantReservation
!insert (BR25, C35) into ReservationCustomer
!insert (BR25, W68) into ReservationWaiter
!insert (BR25, W69) into ReservationWaiter
!insert (BR25, BD32) into BanquetBusDriver

!new Individual('IR35')
!IR35.time := Time('11:30')
!IR35.date := Date('2026-07-10')
!IR35.numberPeople := 2
!IR35.name := 'Future Booking: R. Singh'
!IR35.phoneNumber := '+1-917-555-3435'
!IR35.number := 1502
!IR35.seating := #Patio
!IR35.smoking := #NonSmoking
!insert (IR35, W67) into ReservationWaiter

!new Table('T90_KPG')
!T90_KPG.number := 90
!T90_KPG.description := 'Four-top booth with view of the grill'
!T90_KPG.capacity := 4
!insert (IR34, T90_KPG) into ReservationTable

!new Table('T91_KPG')
!T91_KPG.number := 91
!T91_KPG.description := 'Small patio two-top under shade sail'
!T91_KPG.capacity := 2
!insert (IR35, T91_KPG) into ReservationTable

!new Table('T100_DLM')
!T100_DLM.number := 100
!T100_DLM.description := 'Banquet round table A'
!T100_DLM.capacity := 10
!insert (BR25, T100_DLM) into ReservationTable

!new Table('T101_DLM')
!T101_DLM.number := 101
!T101_DLM.description := 'Banquet round table B'
!T101_DLM.capacity := 10
!insert (BR25, T101_DLM) into ReservationTable

!new Table('T102_DLM')
!T102_DLM.number := 102
!T102_DLM.description := 'Banquet round table C'
!T102_DLM.capacity := 10
!insert (BR25, T102_DLM) into ReservationTable

!new Table('T103_DLM')
!T103_DLM.number := 103
!T103_DLM.description := 'Banquet round table D'
!T103_DLM.capacity := 10
!insert (BR25, T103_DLM) into ReservationTable

!new Table('T104_DLM')
!T104_DLM.number := 104
!T104_DLM.description := 'Banquet round table E'
!T104_DLM.capacity := 10
!insert (BR25, T104_DLM) into ReservationTable

!new Table('T105_DLM')
!T105_DLM.number := 105
!T105_DLM.description := 'Banquet round table F'
!T105_DLM.capacity := 10
!insert (BR25, T105_DLM) into ReservationTable

!new Allergen('A5_GLU32')
!A5_GLU32.type := #Gluten

!new Allergen('A5_LAC32')
!A5_LAC32.type := #Lactose

!new Allergen('A5_NUT32')
!A5_NUT32.type := #Nuts

!new Allergen('A5_SEA32')
!A5_SEA32.type := #Seafood

!new FoodItem('F1401')
!F1401.number := 501
!F1401.description := 'Barley miso paste'
!F1401.purchaseFlag := true
!F1401.unit := #Ounce
!insert (F1401, A5_GLU32) into FoodItemAllergen

!new FoodItem('F1402')
!F1402.number := 502
!F1402.description := 'Ghee (clarified butter)'
!F1402.purchaseFlag := true
!F1402.unit := #Ounce
!insert (F1402, A5_LAC32) into FoodItemAllergen

!new FoodItem('F1403')
!F1403.number := 503
!F1403.description := 'Walnuts (chopped)'
!F1403.purchaseFlag := true
!F1403.unit := #Gram
!insert (F1403, A5_NUT32) into FoodItemAllergen

!new FoodItem('F1404')
!F1404.number := 504
!F1404.description := 'Scallops (sea-caught)'
!F1404.purchaseFlag := false
!F1404.unit := #Pound
!insert (F1404, A5_SEA32) into FoodItemAllergen

!new FoodItem('F1405')
!F1405.number := 505
!F1405.description := 'Rice (short grain)'
!F1405.purchaseFlag := true
!F1405.unit := #Pound

!new FoodItem('F1406')
!F1406.number := 506
!F1406.description := 'Eggs'
!F1406.purchaseFlag := true
!F1406.unit := #Dozen

!new MenuItem('MI80')
!MI80.description := 'Scallop skewer with barley miso glaze'
!MI80.prepTime := 15.0
!MI80.classification := #Apetizer
!insert (MI80, CH54) into MenuItemChef
!insert (MI80, F1404) into MenuItemFoodItem
!insert (MI80, F1401) into MenuItemFoodItem

!new MenuItem('MI81')
!MI81.description := 'Walnut rice pilaf'
!MI81.prepTime := 17.0
!MI81.classification := #Main
!insert (MI81, CH55) into MenuItemChef
!insert (MI81, F1405) into MenuItemFoodItem
!insert (MI81, F1403) into MenuItemFoodItem

!new MenuItem('MI82')
!MI82.description := 'Ghee brioche pudding'
!MI82.prepTime := 12.0
!MI82.classification := #Dessert
!insert (MI82, CH54) into MenuItemChef
!insert (MI82, F1402) into MenuItemFoodItem
!insert (MI82, F1406) into MenuItemFoodItem
!insert (MI82, F1401) into MenuItemFoodItem

!new MenuItem('MI83')
!MI83.description := 'House ginger lemonade'
!MI83.prepTime := 3.5
!MI83.classification := #Beverage
!insert (MI83, CH56) into MenuItemChef

!new MenuItem('MI84')
!MI84.description := 'Rice porridge with walnuts (small bowl)'
!MI84.prepTime := 9.0
!MI84.classification := #Main
!insert (MI84, CH56) into MenuItemChef
!insert (MI84, F1405) into MenuItemFoodItem
!insert (MI84, F1403) into MenuItemFoodItem

!new ItemOrder('IO2601')
!IO2601.time := Time('19:25')
!insert (IR34, IO2601) into ReservationItemOrdered
!insert (IO2601, MI80) into ItemOrderMenuItem

!new ItemOrder('IO2602')
!IO2602.time := Time('19:50')
!insert (IR34, IO2602) into ReservationItemOrdered
!insert (IO2602, MI81) into ItemOrderMenuItem

!new ItemOrder('IO2603')
!IO2603.time := Time('20:20')
!insert (IR34, IO2603) into ReservationItemOrdered
!insert (IO2603, MI83) into ItemOrderMenuItem

!new ItemOrder('IO2604')
!IO2604.time := Time('21:40')
!insert (BR25, IO2604) into ReservationItemOrdered
!insert (IO2604, MI84) into ItemOrderMenuItem

!new ItemOrder('IO2605')
!IO2605.time := Time('22:05')
!insert (BR25, IO2605) into ReservationItemOrdered
!insert (IO2605, MI82) into ItemOrderMenuItem

!new DietaryRequirement('DR26')
!DR26.diet := #Halal

!new ReportedAllergy('RA26')
!RA26.allergen := #Nuts
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 268 | 0.00% |
| Multiplicities Errors | 0 | 57 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 16 | 0.00% |
| Phones | 0 | 16 | 0.00% |

## Category boundary
```
!new Restaurant('R35')
!R35.name := 'Bistro des Andes'

!new Owner('O76')
!O76.name := 'María Quispe'
!O76.percentageShares := 34
!insert (R35, O76) into RestaurantOwner

!new Owner('O77')
!O77.name := 'Jean Dupont'
!O77.percentageShares := 33
!insert (R35, O77) into RestaurantOwner

!new Owner('O78')
!O78.name := 'Ibrahim Suleiman'
!O78.percentageShares := 33
!insert (R35, O78) into RestaurantOwner

!new HeadWaiter('HW33')
!HW33.name := 'Thandi Ndlovu'
!HW33.dateOfBirth := Date('1985-05-12')
!HW33.phoneNumber := '+27 11 700 1000'

!new Waiter('W73')
!W73.name := 'Luis Herrera'
!W73.dateOfBirth := Date('1992-09-01')
!W73.phoneNumber := '+51 1 700 1001'
!W73.spokenLanguage := #Spanish
!insert (HW33, W73) into HeadWaiterWaiter

!new Waiter('W74')
!W74.name := 'Greta König'
!W74.dateOfBirth := Date('1990-02-10')
!W74.phoneNumber := '+49 40 700 1002'
!W74.spokenLanguage := #German
!insert (HW33, W74) into HeadWaiterWaiter

!new Waiter('W75')
!W75.name := 'Samuel Reed'
!W75.dateOfBirth := Date('1998-12-22')
!W75.phoneNumber := '+1 503 700 1003'
!W75.spokenLanguage := #English
!insert (HW33, W75) into HeadWaiterWaiter

!new Waiter('W76')
!W76.name := 'Alessandro Vitale'
!W76.dateOfBirth := Date('1995-06-14')
!W76.phoneNumber := '+39 02 700 1004'
!W76.spokenLanguage := #Italian
!insert (HW33, W76) into HeadWaiterWaiter

!new Waiter('W77')
!W77.name := 'Marta Silva'
!W77.dateOfBirth := Date('2001-01-30')
!W77.phoneNumber := '+351 21 700 1005'
!W77.spokenLanguage := #Spanish
!insert (HW33, W77) into HeadWaiterWaiter

!new Manager('M24')
!M24.name := 'Nadia Rahimi'
!M24.dateOfBirth := Date('1976-08-08')
!M24.phoneNumber := '+51 1 700 1099'

!new Cook('K55')
!K55.name := 'Pavel Novák'
!K55.dateOfBirth := Date('1993-03-03')
!K55.phoneNumber := '+420 2 700 2001'
!K55.yearsOfExperience := 0

!new Cook('K56')
!K56.name := 'Pavel Novák'
!K56.dateOfBirth := Date('1993-03-03')
!K56.phoneNumber := '+420 2 700 2001'
!K56.yearsOfExperience := 0

!new Cook('K57')
!K57.name := 'Dalia Mansour'
!K57.dateOfBirth := Date('1979-11-17')
!K57.phoneNumber := '+20 2 700 2002'
!K57.yearsOfExperience := 25

!new Chef('CH59')
!CH59.name := 'Rosa Calderón'
!CH59.dateOfBirth := Date('1988-04-09')
!CH59.phoneNumber := '+51 1 700 3001'
!insert (CH59, K55) into ChefCook

!new Chef('CH60')
!CH60.name := 'Ethan Brooks'
!CH60.dateOfBirth := Date('1991-07-27')
!CH60.phoneNumber := '+1 212 700 3002'
!insert (CH60, K56) into ChefCook

!new Chef('CH61')
!CH61.name := 'Salma Ben Youssef'
!CH61.dateOfBirth := Date('1986-10-21')
!CH61.phoneNumber := '+216 71 700 3003'
!insert (CH61, K57) into ChefCook

!new Allergen('A_BDA_GLU')
!A_BDA_GLU.type := #Gluten

!new Allergen('A_BDA_SEA')
!A_BDA_SEA.type := #Seafood

!new FoodItem('F1601')
!F1601.number := 610
!F1601.description := 'Aji amarillo paste'
!F1601.purchaseFlag := false
!F1601.unit := #Gram

!new FoodItem('F1602')
!F1602.number := 611
!F1602.description := 'Wheat buns'
!F1602.purchaseFlag := true
!F1602.unit := #Dozen
!insert (F1602, A_BDA_GLU) into FoodItemAllergen

!new FoodItem('F1603')
!F1603.number := 612
!F1603.description := 'Calamari rings'
!F1603.purchaseFlag := true
!F1603.unit := #Pound
!insert (F1603, A_BDA_SEA) into FoodItemAllergen

!new FoodItem('F1604')
!F1604.number := 613
!F1604.description := 'Rice (long grain)'
!F1604.purchaseFlag := true
!F1604.unit := #Pound

!new FoodItem('F1605')
!F1605.number := 614
!F1605.description := 'Lime'
!F1605.purchaseFlag := true
!F1605.unit := #Ounce

!new MenuItem('MI89')
!MI89.description := 'Aji Calamari Slider'
!MI89.prepTime := 12.0
!MI89.classification := #Apetizer
!insert (MI89, CH59) into MenuItemChef
!insert (MI89, F1601) into MenuItemFoodItem
!insert (MI89, F1602) into MenuItemFoodItem
!insert (MI89, F1603) into MenuItemFoodItem
!insert (MI89, F1605) into MenuItemFoodItem

!new MenuItem('MI90')
!MI90.description := 'Aji Rice Bowl'
!MI90.prepTime := 9.0
!MI90.classification := #Main
!insert (MI90, CH59) into MenuItemChef
!insert (MI90, F1601) into MenuItemFoodItem
!insert (MI90, F1604) into MenuItemFoodItem
!insert (MI90, F1605) into MenuItemFoodItem

!new MenuItem('MI91')
!MI91.description := 'Lime Sparkler'
!MI91.prepTime := 1.5
!MI91.classification := #Beverage
!insert (MI91, CH61) into MenuItemChef
!insert (MI91, F1605) into MenuItemFoodItem

!new MenuItem('MI92')
!MI92.description := 'Chef’s Long-Braise Showcase'
!MI92.prepTime := 300.0
!MI92.classification := #Main
!insert (MI92, CH61) into MenuItemChef
!insert (MI92, F1604) into MenuItemFoodItem

!new RegularCustomer('C37')
!C37.name := 'Valeria Rojas'
!C37.prefferedLanguage := #Spanish

!new RegularCustomer('C38')
!C38.name := 'Oliver Stein'
!C38.prefferedLanguage := #German

!new Individual('IR37')
!IR37.number := 700
!IR37.date := Date('2026-07-02')
!IR37.time := Time('18:05')
!IR37.numberPeople := 2
!IR37.name := 'Kai & Jo'
!IR37.phoneNumber := '+51 999 000 700'
!IR37.seating := #Patio
!IR37.smoking := #NonSmoking
!insert (R35, IR37) into RestaurantReservation
!insert (IR37, W73) into ReservationWaiter
!insert (IR37, W74) into ReservationWaiter
!insert (IR37, W75) into ReservationWaiter
!insert (IR37, W76) into ReservationWaiter

!new Table('T10_BDA')
!T10_BDA.number := 10
!T10_BDA.description := 'Two-top near patio heater'
!T10_BDA.capacity := 2
!insert (IR37, T10_BDA) into ReservationTable

!new Banquet('BR27')
!BR27.number := 701
!BR27.date := Date('2026-07-02')
!BR27.time := Time('18:30')
!BR27.numberPeople := 2
!BR27.name := 'E. Cho (Host)'
!BR27.phoneNumber := '+51 999 000 701'
!BR27.groupName := 'Aymara Delegation (Micro-Formal)'
!BR27.paymentMethod := #Cash
!BR27.busService := true
!insert (R35, BR27) into RestaurantReservation
!insert (BR27, W73) into ReservationWaiter

!new Table('T11_BDA')
!T11_BDA.number := 11
!T11_BDA.description := 'Ceremonial single seat A'
!T11_BDA.capacity := 1
!insert (BR27, T11_BDA) into ReservationTable

!new Table('T12_BDA')
!T12_BDA.number := 12
!T12_BDA.description := 'Ceremonial single seat B'
!T12_BDA.capacity := 1
!insert (BR27, T12_BDA) into ReservationTable

!new BusDriver('BD33')
!BD33.name := 'Rakesh Iyer'
!BD33.dateOfBirth := Date('1980-01-01')
!BD33.phoneNumber := '+51 999 000 771'
!BD33.driverLicenseNr := 'PE-LIM-884201'
!insert (BR27, BD33) into BanquetBusDriver

!new ItemOrder('IO2701')
!IO2701.time := Time('18:40')
!insert (BR27, IO2701) into ReservationItemOrdered
!insert (IO2701, MI91) into ItemOrderMenuItem

!new ItemOrder('IO2702')
!IO2702.time := Time('18:50')
!insert (BR27, IO2702) into ReservationItemOrdered
!insert (IO2702, MI89) into ItemOrderMenuItem

!new ItemOrder('IO2703')
!IO2703.time := Time('19:05')
!insert (BR27, IO2703) into ReservationItemOrdered
!insert (IO2703, MI90) into ItemOrderMenuItem

!new Individual('IR38')
!IR38.number := 702
!IR38.date := Date('2026-07-02')
!IR38.time := Time('20:00')
!IR38.numberPeople := 15
!IR38.name := 'Valeria Rojas'
!IR38.phoneNumber := '+51 999 000 702'
!IR38.seating := #Inside
!IR38.smoking := #NonSmoking
!insert (R35, IR38) into RestaurantReservation
!insert (IR38, C37) into ReservationCustomer
!insert (IR38, W74) into ReservationWaiter
!insert (IR38, W75) into ReservationWaiter

!new Table('T20_BDA')
!T20_BDA.number := 20
!T20_BDA.description := 'Inside booth A'
!T20_BDA.capacity := 6
!insert (IR38, T20_BDA) into ReservationTable

!new Table('T21_BDA')
!T21_BDA.number := 21
!T21_BDA.description := 'Inside booth B'
!T21_BDA.capacity := 5
!insert (IR38, T21_BDA) into ReservationTable

!new Table('T22_BDA')
!T22_BDA.number := 22
!T22_BDA.description := 'Inside round table C'
!T22_BDA.capacity := 4
!insert (IR38, T22_BDA) into ReservationTable

!new ItemOrder('IO2704')
!IO2704.time := Time('20:10')
!insert (IR38, IO2704) into ReservationItemOrdered
!insert (IO2704, MI90) into ItemOrderMenuItem

!new ItemOrder('IO2705')
!IO2705.time := Time('20:11')
!insert (IR38, IO2705) into ReservationItemOrdered
!insert (IO2705, MI90) into ItemOrderMenuItem

!new ItemOrder('IO2706')
!IO2706.time := Time('20:12')
!insert (IR38, IO2706) into ReservationItemOrdered
!insert (IO2706, MI90) into ItemOrderMenuItem

!new ItemOrder('IO2707')
!IO2707.time := Time('20:13')
!insert (IR38, IO2707) into ReservationItemOrdered
!insert (IO2707, MI90) into ItemOrderMenuItem

!new ItemOrder('IO2708')
!IO2708.time := Time('20:14')
!insert (IR38, IO2708) into ReservationItemOrdered
!insert (IO2708, MI90) into ItemOrderMenuItem

!new ItemOrder('IO2709')
!IO2709.time := Time('20:15')
!insert (IR38, IO2709) into ReservationItemOrdered
!insert (IO2709, MI90) into ItemOrderMenuItem

!new ItemOrder('IO2710')
!IO2710.time := Time('20:16')
!insert (IR38, IO2710) into ReservationItemOrdered
!insert (IO2710, MI90) into ItemOrderMenuItem

!new ItemOrder('IO2711')
!IO2711.time := Time('20:17')
!insert (IR38, IO2711) into ReservationItemOrdered
!insert (IO2711, MI90) into ItemOrderMenuItem

!new ItemOrder('IO2712')
!IO2712.time := Time('20:18')
!insert (IR38, IO2712) into ReservationItemOrdered
!insert (IO2712, MI90) into ItemOrderMenuItem

!new ItemOrder('IO2713')
!IO2713.time := Time('20:19')
!insert (IR38, IO2713) into ReservationItemOrdered
!insert (IO2713, MI91) into ItemOrderMenuItem

!new DietaryRequirement('DR28')
!DR28.diet := #Halal

!new ReportedAllergy('RA28')
!RA28.allergen := #Lactose
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 279 | 0.00% |
| Multiplicities Errors | 0 | 70 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 17 | 0.00% |
| Phones | 0 | 17 | 0.00% |

## Category complex
```
!new Restaurant('R42')
!R42.name := 'Karoo Banquet House'

!new Restaurant('R43')
!R43.name := 'Limmat Riverside Trattoria'

!new Owner('O94')
!O94.name := 'Thandi Mokoena'
!O94.percentageShares := 70
!insert (R42, O94) into RestaurantOwner

!new Owner('O95')
!O95.name := 'Enzo Marini'
!O95.percentageShares := 30
!insert (R42, O95) into RestaurantOwner
!insert (R43, O95) into RestaurantOwner

!new Owner('O96')
!O96.name := 'Brigitte Keller'
!O96.percentageShares := 50
!insert (R43, O96) into RestaurantOwner

!new Owner('O97')
!O97.name := 'Rafael Gómez'
!O97.percentageShares := 20
!insert (R43, O97) into RestaurantOwner

!new RegularCustomer('C47')
!C47.name := 'Sipho Dlamini'
!C47.prefferedLanguage := #English

!new RegularCustomer('C48')
!C48.name := 'Martina Rossi'
!C48.prefferedLanguage := #Italian

!new RegularCustomer('C49')
!C49.name := 'Pascal Schärer'
!C49.prefferedLanguage := #German

!new HeadWaiter('HW40')
!HW40.name := 'Lwazi Nkosi'
!HW40.dateOfBirth := Date('1978-03-09')
!HW40.phoneNumber := '+27 21 555 0100'

!new Waiter('W93')
!W93.name := 'Emma-Jane Smith'
!W93.dateOfBirth := Date('1991-05-05')
!W93.phoneNumber := '+27 21 555 0101'
!W93.spokenLanguage := #English
!insert (HW40, W93) into HeadWaiterWaiter

!new Waiter('W94')
!W94.name := 'Luis Ortega'
!W94.dateOfBirth := Date('1993-11-28')
!W94.phoneNumber := '+27 21 555 0102'
!W94.spokenLanguage := #Spanish
!insert (HW40, W94) into HeadWaiterWaiter

!new Waiter('W95')
!W95.name := 'Giada Ferri'
!W95.dateOfBirth := Date('1997-02-14')
!W95.phoneNumber := '+27 21 555 0103'
!W95.spokenLanguage := #Italian
!insert (HW40, W95) into HeadWaiterWaiter

!new HeadWaiter('HW41')
!HW41.name := 'Stefan Baumann'
!HW41.dateOfBirth := Date('1982-10-01')
!HW41.phoneNumber := '+41 44 555 0200'

!new Waiter('W96')
!W96.name := 'Chiara Bassi'
!W96.dateOfBirth := Date('1994-07-07')
!W96.phoneNumber := '+41 44 555 0201'
!W96.spokenLanguage := #Italian
!insert (HW41, W96) into HeadWaiterWaiter

!new Waiter('W97')
!W97.name := 'Noah Weber'
!W97.dateOfBirth := Date('1990-12-12')
!W97.phoneNumber := '+41 44 555 0202'
!W97.spokenLanguage := #German
!insert (HW41, W97) into HeadWaiterWaiter

!new Waiter('W98')
!W98.name := 'Ana Lucía Pérez'
!W98.dateOfBirth := Date('1996-09-30')
!W98.phoneNumber := '+41 44 555 0203'
!W98.spokenLanguage := #Spanish
!insert (HW41, W98) into HeadWaiterWaiter

!new Waiter('W99')
!W99.name := 'Oliver Grant'
!W99.dateOfBirth := Date('1988-04-19')
!W99.phoneNumber := '+41 44 555 0204'
!W99.spokenLanguage := #English
!insert (HW41, W99) into HeadWaiterWaiter

!new Cook('K72')
!K72.name := 'Aisha Rahman'
!K72.dateOfBirth := Date('1985-01-23')
!K72.phoneNumber := '+27 21 555 0300'
!K72.yearsOfExperience := 9

!new Cook('K73')
!K73.name := 'Markus Frei'
!K73.dateOfBirth := Date('1976-06-16')
!K73.phoneNumber := '+41 44 555 0301'
!K73.yearsOfExperience := 22

!new Cook('K74')
!K74.name := 'Markus Frei'
!K74.dateOfBirth := Date('1976-06-16')
!K74.phoneNumber := '+41 44 555 0301'
!K74.yearsOfExperience := 22

!new Cook('K75')
!K75.name := 'Markus Frei'
!K75.dateOfBirth := Date('1976-06-16')
!K75.phoneNumber := '+41 44 555 0301'
!K75.yearsOfExperience := 22

!new Chef('CH76')
!CH76.name := 'Zanele Jacobs'
!CH76.dateOfBirth := Date('1992-08-08')
!CH76.phoneNumber := '+27 21 555 0310'
!insert (CH76, K72) into ChefCook

!new Chef('CH77')
!CH77.name := 'Lorenzo Vitale'
!CH77.dateOfBirth := Date('1987-03-03')
!CH77.phoneNumber := '+41 44 555 0311'
!insert (CH77, K73) into ChefCook

!new Chef('CH78')
!CH78.name := 'Greta Hofer'
!CH78.dateOfBirth := Date('1991-11-11')
!CH78.phoneNumber := '+41 44 555 0312'
!insert (CH78, K74) into ChefCook

!new Chef('CH79')
!CH79.name := 'Samir El Haddad'
!CH79.dateOfBirth := Date('1989-09-09')
!CH79.phoneNumber := '+41 44 555 0313'
!insert (CH79, K75) into ChefCook

!new Manager('M29')
!M29.name := 'Renée Du Toit'
!M29.dateOfBirth := Date('1973-02-02')
!M29.phoneNumber := '+27 21 555 0400'

!new Manager('M30')
!M30.name := 'Claudio Bernasconi'
!M30.dateOfBirth := Date('1979-07-21')
!M30.phoneNumber := '+41 44 555 0401'

!new BusDriver('BD44')
!BD44.name := 'Pieter van Wyk'
!BD44.dateOfBirth := Date('1969-05-17')
!BD44.phoneNumber := '+27 82 555 0500'
!BD44.driverLicenseNr := 'ZA-C-990271'

!new BusDriver('BD45')
!BD45.name := 'Carla Mendes'
!BD45.dateOfBirth := Date('1980-12-24')
!BD45.phoneNumber := '+27 82 555 0501'
!BD45.driverLicenseNr := 'ZA-EC-120883'

!new Allergen('ALG1_KBH')
!ALG1_KBH.type := #Gluten

!new Allergen('ALG2_KBH')
!ALG2_KBH.type := #Lactose

!new Allergen('ALG3_KBH')
!ALG3_KBH.type := #Nuts

!new Allergen('ALG4_KBH')
!ALG4_KBH.type := #Seafood

!new FoodItem('FI501_KBH')
!FI501_KBH.number := 501
!FI501_KBH.description := 'Couscous grain'
!FI501_KBH.purchaseFlag := true
!FI501_KBH.unit := #Pound
!insert (FI501_KBH, ALG1_KBH) into FoodItemAllergen

!new FoodItem('FI502_KBH')
!FI502_KBH.number := 502
!FI502_KBH.description := 'Pine nuts'
!FI502_KBH.purchaseFlag := true
!FI502_KBH.unit := #Gram
!insert (FI502_KBH, ALG3_KBH) into FoodItemAllergen

!new FoodItem('FI503_KBH')
!FI503_KBH.number := 503
!FI503_KBH.description := 'Parmesan cheese'
!FI503_KBH.purchaseFlag := true
!FI503_KBH.unit := #Ounce
!insert (FI503_KBH, ALG2_KBH) into FoodItemAllergen

!new FoodItem('FI504_KBH')
!FI504_KBH.number := 504
!FI504_KBH.description := 'Shrimp'
!FI504_KBH.purchaseFlag := true
!FI504_KBH.unit := #Pound
!insert (FI504_KBH, ALG4_KBH) into FoodItemAllergen

!new FoodItem('FI505_KBH')
!FI505_KBH.number := 505
!FI505_KBH.description := 'Polenta (cornmeal)'
!FI505_KBH.purchaseFlag := false
!FI505_KBH.unit := #Pound

!new FoodItem('FI506_KBH')
!FI506_KBH.number := 506
!FI506_KBH.description := 'Butter'
!FI506_KBH.purchaseFlag := true
!FI506_KBH.unit := #Ounce
!insert (FI506_KBH, ALG2_KBH) into FoodItemAllergen

!new FoodItem('FI507_KBH')
!FI507_KBH.number := 507
!FI507_KBH.description := 'Wheat flatbread'
!FI507_KBH.purchaseFlag := true
!FI507_KBH.unit := #Dozen
!insert (FI507_KBH, ALG1_KBH) into FoodItemAllergen

!new FoodItem('FI508_KBH')
!FI508_KBH.number := 508
!FI508_KBH.description := 'Almond flour'
!FI508_KBH.purchaseFlag := true
!FI508_KBH.unit := #Gram
!insert (FI508_KBH, ALG3_KBH) into FoodItemAllergen

!new MenuItem('MI110')
!MI110.description := 'Harissa couscous bowl'
!MI110.prepTime := 15.0
!MI110.classification := #Main
!insert (MI110, CH76) into MenuItemChef
!insert (MI110, FI501_KBH) into MenuItemFoodItem
!insert (MI110, FI507_KBH) into MenuItemFoodItem

!new MenuItem('MI111')
!MI111.description := 'Pesto polenta bites'
!MI111.prepTime := 13.0
!MI111.classification := #Apetizer
!insert (MI111, CH78) into MenuItemChef
!insert (MI111, FI505_KBH) into MenuItemFoodItem
!insert (MI111, FI502_KBH) into MenuItemFoodItem
!insert (MI111, FI503_KBH) into MenuItemFoodItem

!new MenuItem('MI112')
!MI112.description := 'Butter shrimp on flatbread'
!MI112.prepTime := 11.0
!MI112.classification := #Main
!insert (MI112, CH79) into MenuItemChef
!insert (MI112, FI504_KBH) into MenuItemFoodItem
!insert (MI112, FI506_KBH) into MenuItemFoodItem
!insert (MI112, FI507_KBH) into MenuItemFoodItem

!new MenuItem('MI113')
!MI113.description := 'Almond torte slice'
!MI113.prepTime := 27.5
!MI113.classification := #Dessert
!insert (MI113, CH77) into MenuItemChef
!insert (MI113, FI508_KBH) into MenuItemFoodItem
!insert (MI113, FI503_KBH) into MenuItemFoodItem

!new MenuItem('MI114')
!MI114.description := 'Espresso tonic'
!MI114.prepTime := 3.0
!MI114.classification := #Beverage
!insert (MI114, CH77) into MenuItemChef

!new Banquet('BR33')
!BR33.time := Time('19:00')
!BR33.date := Date('2026-07-05')
!BR33.numberPeople := 120
!BR33.name := 'Sipho Dlamini'
!BR33.phoneNumber := '+27 82 123 7700'
!BR33.number := 9000
!BR33.groupName := 'Cape Town Film Crew Wrap Party'
!BR33.paymentMethod := #CreditCard
!BR33.busService := true
!insert (R42, BR33) into RestaurantReservation
!insert (BR33, C47) into ReservationCustomer
!insert (BR33, W93) into ReservationWaiter
!insert (BR33, W94) into ReservationWaiter
!insert (BR33, W95) into ReservationWaiter

!new Table('T900_KBH')
!T900_KBH.number := 900
!T900_KBH.description := 'Hall section A (rounds)'
!T900_KBH.capacity := 50
!insert (BR33, T900_KBH) into ReservationTable

!new Table('T901_KBH')
!T901_KBH.number := 901
!T901_KBH.description := 'Hall section B (rounds)'
!T901_KBH.capacity := 40
!insert (BR33, T901_KBH) into ReservationTable

!new Table('T902_KBH')
!T902_KBH.number := 902
!T902_KBH.description := 'Hall section C (rounds)'
!T902_KBH.capacity := 30
!insert (BR33, T902_KBH) into ReservationTable

!new Banquet('BR34')
!BR34.time := Time('12:30')
!BR34.date := Date('2026-07-06')
!BR34.numberPeople := 44
!BR34.name := 'Cape Schools Coordinator'
!BR34.phoneNumber := '+27 21 777 2200'
!BR34.number := 9001
!BR34.groupName := 'District Math Olympiad Lunch'
!BR34.paymentMethod := #Cash
!BR34.busService := true
!insert (R42, BR34) into RestaurantReservation
!insert (BR34, BD44) into BanquetBusDriver
!insert (BR34, BD45) into BanquetBusDriver
!insert (BR34, W94) into ReservationWaiter

!new Table('T910_KBH')
!T910_KBH.number := 910
!T910_KBH.description := 'Hall classroom-style row 1'
!T910_KBH.capacity := 24
!insert (BR34, T910_KBH) into ReservationTable

!new Table('T911_KBH')
!T911_KBH.number := 911
!T911_KBH.description := 'Hall classroom-style row 2'
!T911_KBH.capacity := 20
!insert (BR34, T911_KBH) into ReservationTable

!new ItemOrder('IO3201')
!IO3201.time := Time('12:40')
!insert (BR34, IO3201) into ReservationItemOrdered
!insert (IO3201, MI114) into ItemOrderMenuItem

!new ItemOrder('IO3202')
!IO3202.time := Time('13:05')
!insert (BR34, IO3202) into ReservationItemOrdered
!insert (IO3202, MI113) into ItemOrderMenuItem

!new Individual('IR48')
!IR48.time := Time('18:10')
!IR48.date := Date('2026-07-10')
!IR48.numberPeople := 2
!IR48.name := 'Pascal Schärer'
!IR48.phoneNumber := '+41 79 555 6000'
!IR48.number := 5100
!IR48.seating := #Inside
!IR48.smoking := #NonSmoking
!insert (R43, IR48) into RestaurantReservation
!insert (IR48, C49) into ReservationCustomer
!insert (IR48, W97) into ReservationWaiter

!new Table('T920_LRT')
!T920_LRT.number := 920
!T920_LRT.description := 'Two-top by the river window'
!T920_LRT.capacity := 2
!insert (IR48, T920_LRT) into ReservationTable

!new Individual('IR49')
!IR49.time := Time('20:30')
!IR49.date := Date('2026-07-10')
!IR49.numberPeople := 5
!IR49.name := 'Martina Rossi'
!IR49.phoneNumber := '+41 78 555 6100'
!IR49.number := 5101
!IR49.seating := #Patio
!IR49.smoking := #NonSmoking
!insert (R43, IR49) into RestaurantReservation
!insert (IR49, C48) into ReservationCustomer
!insert (IR49, W96) into ReservationWaiter
!insert (IR49, W99) into ReservationWaiter

!new Table('T930_LRT')
!T930_LRT.number := 930
!T930_LRT.description := 'Patio two-top under canopy'
!T930_LRT.capacity := 2
!insert (IR49, T930_LRT) into ReservationTable

!new Table('T931_LRT')
!T931_LRT.number := 931
!T931_LRT.description := 'Patio two-top adjacent'
!T931_LRT.capacity := 2
!insert (IR49, T931_LRT) into ReservationTable

!new Table('T932_LRT')
!T932_LRT.number := 932
!T932_LRT.description := 'Patio two-top pulled in sideways'
!T932_LRT.capacity := 2
!insert (IR49, T932_LRT) into ReservationTable

!new ItemOrder('IO3203')
!IO3203.time := Time('20:45')
!insert (IR49, IO3203) into ReservationItemOrdered
!insert (IO3203, MI111) into ItemOrderMenuItem

!new ItemOrder('IO3204')
!IO3204.time := Time('21:05')
!insert (IR49, IO3204) into ReservationItemOrdered
!insert (IO3204, MI112) into ItemOrderMenuItem

!new ItemOrder('IO3205')
!IO3205.time := Time('21:25')
!insert (IR49, IO3205) into ReservationItemOrdered
!insert (IO3205, MI114) into ItemOrderMenuItem

!new Individual('IR50')
!IR50.time := Time('12:05')
!IR50.date := Date('2026-07-11')
!IR50.numberPeople := 1
!IR50.name := 'Rafael Gómez'
!IR50.phoneNumber := '+41 76 555 6200'
!IR50.number := 5102
!IR50.seating := #Inside
!IR50.smoking := #NonSmoking
!insert (R43, IR50) into RestaurantReservation
!insert (IR50, W98) into ReservationWaiter

!new Table('T940_LRT')
!T940_LRT.number := 940
!T940_LRT.description := 'Bar-height two-top'
!T940_LRT.capacity := 2
!insert (IR50, T940_LRT) into ReservationTable

!new ItemOrder('IO3206')
!IO3206.time := Time('12:12')
!insert (IR50, IO3206) into ReservationItemOrdered
!insert (IO3206, MI114) into ItemOrderMenuItem

!new ItemOrder('IO3207')
!IO3207.time := Time('12:20')
!insert (IR50, IO3207) into ReservationItemOrdered
!insert (IO3207, MI114) into ItemOrderMenuItem

!new ItemOrder('IO3208')
!IO3208.time := Time('12:35')
!insert (IR50, IO3208) into ReservationItemOrdered
!insert (IO3208, MI113) into ItemOrderMenuItem

!new DietaryRequirement('DR35')
!DR35.diet := #Vegetarian

!new DietaryRequirement('DR36')
!DR36.diet := #Halal

!new ReportedAllergy('RA35')
!RA35.allergen := #Lactose

!new ReportedAllergy('RA36')
!RA36.allergen := #Seafood
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 383 | 0.00% |
| Multiplicities Errors | 0 | 82 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 26 | 0.00% |
| Phones | 0 | 26 | 0.00% |

## Category edge
```
!new Restaurant('R44')
!R44.name := 'Kalaallit Micro-Tasting Room'

!new Restaurant('R45')
!R45.name := 'São Bento Midnight Canteen'

!new Owner('O98')
!O98.name := 'Sofía Álvarez'
!O98.percentageShares := 10
!insert (R44, O98) into RestaurantOwner
!insert (R45, O98) into RestaurantOwner

!new Owner('O99')
!O99.name := 'Aqqaluk Jensen'
!O99.percentageShares := 10
!insert (R44, O99) into RestaurantOwner

!new Owner('O100')
!O100.name := 'Niamh Gallagher'
!O100.percentageShares := 10
!insert (R44, O100) into RestaurantOwner

!new Owner('O101')
!O101.name := 'Ryoichi Nakamura'
!O101.percentageShares := 10
!insert (R44, O101) into RestaurantOwner

!new Owner('O102')
!O102.name := 'Linh Trần'
!O102.percentageShares := 10
!insert (R44, O102) into RestaurantOwner

!new Owner('O103')
!O103.name := 'Zara Khan'
!O103.percentageShares := 10
!insert (R44, O103) into RestaurantOwner

!new Owner('O104')
!O104.name := 'Marek Kowalski'
!O104.percentageShares := 10
!insert (R44, O104) into RestaurantOwner

!new Owner('O105')
!O105.name := 'Sibusiso Dlamini'
!O105.percentageShares := 10
!insert (R44, O105) into RestaurantOwner

!new Owner('O106')
!O106.name := 'Yasmin Rahman'
!O106.percentageShares := 10
!insert (R44, O106) into RestaurantOwner

!new Owner('O107')
!O107.name := 'Inez da Costa'
!O107.percentageShares := 10
!insert (R44, O107) into RestaurantOwner

!new Owner('O108')
!O108.name := 'João Pereira'
!O108.percentageShares := 90
!insert (R45, O108) into RestaurantOwner

!new RegularCustomer('C50')
!C50.name := 'Elena Petrova'
!C50.prefferedLanguage := #English

!new RegularCustomer('C51')
!C51.name := 'Diego Morales'
!C51.prefferedLanguage := #Spanish

!new HeadWaiter('HW42')
!HW42.name := 'Bruno Silveira'
!HW42.dateOfBirth := Date('1983-03-11')
!HW42.phoneNumber := '+351-21-555-0101'

!new HeadWaiter('HW43')
!HW43.name := 'Katrin Moser'
!HW43.dateOfBirth := Date('1977-07-27')
!HW43.phoneNumber := '+43-1-555-0199'

!new Waiter('W100')
!W100.name := 'Noel García'
!W100.dateOfBirth := Date('1998-09-09')
!W100.phoneNumber := '+34-600-555-014'
!W100.spokenLanguage := #Spanish
!insert (HW42, W100) into HeadWaiterWaiter

!new Waiter('W101')
!W101.name := 'Greta Schulz'
!W101.dateOfBirth := Date('2000-02-20')
!W101.phoneNumber := '+49-160-555-0135'
!W101.spokenLanguage := #German
!insert (HW42, W101) into HeadWaiterWaiter

!new Waiter('W102')
!W102.name := 'Marco De Santis'
!W102.dateOfBirth := Date('1994-11-04')
!W102.phoneNumber := '+39-333-555-0170'
!W102.spokenLanguage := #Italian
!insert (HW42, W102) into HeadWaiterWaiter

!new Waiter('W103')
!W103.name := 'Hannah Lee'
!W103.dateOfBirth := Date('2001-06-18')
!W103.phoneNumber := '+1-617-555-0126'
!W103.spokenLanguage := #English
!insert (HW43, W103) into HeadWaiterWaiter

!new Cook('K76')
!K76.name := 'Bashir Adeyemi'
!K76.dateOfBirth := Date('1992-01-23')
!K76.phoneNumber := '+234-803-555-0108'
!K76.yearsOfExperience := 0

!new Cook('K77')
!K77.name := 'Bashir Adeyemi'
!K77.dateOfBirth := Date('1992-01-23')
!K77.phoneNumber := '+234-803-555-0108'
!K77.yearsOfExperience := 0

!new Cook('K78')
!K78.name := 'Irina Popescu'
!K78.dateOfBirth := Date('1980-05-15')
!K78.phoneNumber := '+40-721-555-011'
!K78.yearsOfExperience := 22

!new Chef('CH80')
!CH80.name := 'Taika Korhonen'
!CH80.dateOfBirth := Date('1987-12-02')
!CH80.phoneNumber := '+358-40-555-0162'
!insert (CH80, K76) into ChefCook

!new Chef('CH81')
!CH81.name := 'Rafael Souza'
!CH81.dateOfBirth := Date('1991-04-09')
!CH81.phoneNumber := '+55-11-5555-0132'
!insert (CH81, K77) into ChefCook

!new Chef('CH82')
!CH82.name := 'Aiko Tanaka'
!CH82.dateOfBirth := Date('1996-08-08')
!CH82.phoneNumber := '+81-70-5555-0182'
!insert (CH82, K78) into ChefCook

!new BusDriver('BD46')
!BD46.name := 'Viktor Horváth'
!BD46.dateOfBirth := Date('1984-10-30')
!BD46.phoneNumber := '+36-30-555-0112'
!BD46.driverLicenseNr := 'HU-BUS-1030'

!new Allergen('AX2_E5')
!AX2_E5.type := #Nuts

!new Allergen('AX4_E5')
!AX4_E5.type := #Lactose

!new FoodItem('FI50_E5')
!FI50_E5.number := 50
!FI50_E5.description := 'Fermented rye starter'
!FI50_E5.purchaseFlag := false
!FI50_E5.unit := #Gram

!new FoodItem('FI51_E5')
!FI51_E5.number := 51
!FI51_E5.description := 'Skyr powder'
!FI51_E5.purchaseFlag := true
!FI51_E5.unit := #Ounce
!insert (FI51_E5, AX4_E5) into FoodItemAllergen

!new FoodItem('FI52_E5')
!FI52_E5.number := 52
!FI52_E5.description := 'Crushed walnut'
!FI52_E5.purchaseFlag := true
!FI52_E5.unit := #Ounce
!insert (FI52_E5, AX2_E5) into FoodItemAllergen

!new FoodItem('FI53_E5')
!FI53_E5.number := 53
!FI53_E5.description := 'Dried scallop threads'
!FI53_E5.purchaseFlag := true
!FI53_E5.unit := #Gram

!new FoodItem('FI54_E5')
!FI54_E5.number := 54
!FI54_E5.description := 'Arctic herb blend'
!FI54_E5.purchaseFlag := false
!FI54_E5.unit := #Gram

!new FoodItem('FI55_E5')
!FI55_E5.number := 55
!FI55_E5.description := 'Sparkling water'
!FI55_E5.purchaseFlag := true
!FI55_E5.unit := #Ounce

!new FoodItem('FI56_E5')
!FI56_E5.number := 56
!FI56_E5.description := 'Thin chocolate sheet'
!FI56_E5.purchaseFlag := true
!FI56_E5.unit := #Sheet
!insert (FI56_E5, AX4_E5) into FoodItemAllergen

!new MenuItem('MI115')
!MI115.description := 'Rye-Skyr Bite with Herb Dust'
!MI115.prepTime := 2.0
!MI115.classification := #Apetizer
!insert (MI115, CH80) into MenuItemChef
!insert (MI115, FI50_E5) into MenuItemFoodItem
!insert (MI115, FI51_E5) into MenuItemFoodItem
!insert (MI115, FI54_E5) into MenuItemFoodItem

!new MenuItem('MI116')
!MI116.description := 'Scallop Thread Broth Shot'
!MI116.prepTime := 3.5
!MI116.classification := #Beverage
!insert (MI116, CH81) into MenuItemChef
!insert (MI116, FI53_E5) into MenuItemFoodItem

!new MenuItem('MI117')
!MI117.description := 'Six-Component Micro-Plate'
!MI117.prepTime := 9.0
!MI117.classification := #Main
!insert (MI117, CH80) into MenuItemChef
!insert (MI117, FI50_E5) into MenuItemFoodItem
!insert (MI117, FI51_E5) into MenuItemFoodItem
!insert (MI117, FI52_E5) into MenuItemFoodItem
!insert (MI117, FI53_E5) into MenuItemFoodItem
!insert (MI117, FI54_E5) into MenuItemFoodItem
!insert (MI117, FI55_E5) into MenuItemFoodItem

!new MenuItem('MI118')
!MI118.description := 'Walnut-Chocolate Fold'
!MI118.prepTime := 1.2
!MI118.classification := #Dessert
!insert (MI118, CH82) into MenuItemChef
!insert (MI118, FI52_E5) into MenuItemFoodItem
!insert (MI118, FI56_E5) into MenuItemFoodItem

!new MenuItem('MI119')
!MI119.description := 'Plain Sparkle (no garnish)'
!MI119.prepTime := 0.1
!MI119.classification := #Beverage
!insert (MI119, CH82) into MenuItemChef
!insert (MI119, FI55_E5) into MenuItemFoodItem

!new Individual('IR51')
!IR51.time := Time('17:17')
!IR51.date := Date('2026-11-17')
!IR51.numberPeople := 37
!IR51.name := 'Elena Petrova'
!IR51.phoneNumber := '+7-999-555-0137'
!IR51.number := 71717
!IR51.seating := #Inside
!IR51.smoking := #NonSmoking
!insert (R44, IR51) into RestaurantReservation
!insert (IR51, C50) into ReservationCustomer
!insert (IR51, W100) into ReservationWaiter

!new Table('T710_KMTR')
!T710_KMTR.number := 710
!T710_KMTR.description := 'Two-top 1'
!T710_KMTR.capacity := 2
!insert (IR51, T710_KMTR) into ReservationTable

!new Table('T711_KMTR')
!T711_KMTR.number := 711
!T711_KMTR.description := 'Two-top 2'
!T711_KMTR.capacity := 2
!insert (IR51, T711_KMTR) into ReservationTable

!new Table('T712_KMTR')
!T712_KMTR.number := 712
!T712_KMTR.description := 'Two-top 3'
!T712_KMTR.capacity := 2
!insert (IR51, T712_KMTR) into ReservationTable

!new Table('T713_KMTR')
!T713_KMTR.number := 713
!T713_KMTR.description := 'Two-top 4'
!T713_KMTR.capacity := 2
!insert (IR51, T713_KMTR) into ReservationTable

!new Table('T714_KMTR')
!T714_KMTR.number := 714
!T714_KMTR.description := 'Two-top 5'
!T714_KMTR.capacity := 2
!insert (IR51, T714_KMTR) into ReservationTable

!new Table('T715_KMTR')
!T715_KMTR.number := 715
!T715_KMTR.description := 'Two-top 6'
!T715_KMTR.capacity := 2
!insert (IR51, T715_KMTR) into ReservationTable

!new Table('T716_KMTR')
!T716_KMTR.number := 716
!T716_KMTR.description := 'Two-top 7'
!T716_KMTR.capacity := 2
!insert (IR51, T716_KMTR) into ReservationTable

!new Table('T717_KMTR')
!T717_KMTR.number := 717
!T717_KMTR.description := 'Two-top 8'
!T717_KMTR.capacity := 2
!insert (IR51, T717_KMTR) into ReservationTable

!new Table('T718_KMTR')
!T718_KMTR.number := 718
!T718_KMTR.description := 'Two-top 9'
!T718_KMTR.capacity := 2
!insert (IR51, T718_KMTR) into ReservationTable

!new Table('T719_KMTR')
!T719_KMTR.number := 719
!T719_KMTR.description := 'Two-top 10'
!T719_KMTR.capacity := 2
!insert (IR51, T719_KMTR) into ReservationTable

!new Table('T720_KMTR')
!T720_KMTR.number := 720
!T720_KMTR.description := 'Two-top 11'
!T720_KMTR.capacity := 2
!insert (IR51, T720_KMTR) into ReservationTable

!new Table('T721_KMTR')
!T721_KMTR.number := 721
!T721_KMTR.description := 'Two-top 12'
!T721_KMTR.capacity := 2
!insert (IR51, T721_KMTR) into ReservationTable

!new Table('T722_KMTR')
!T722_KMTR.number := 722
!T722_KMTR.description := 'Two-top 13'
!T722_KMTR.capacity := 2
!insert (IR51, T722_KMTR) into ReservationTable

!new Table('T723_KMTR')
!T723_KMTR.number := 723
!T723_KMTR.description := 'Two-top 14'
!T723_KMTR.capacity := 2
!insert (IR51, T723_KMTR) into ReservationTable

!new Table('T724_KMTR')
!T724_KMTR.number := 724
!T724_KMTR.description := 'Two-top 15'
!T724_KMTR.capacity := 2
!insert (IR51, T724_KMTR) into ReservationTable

!new Table('T725_KMTR')
!T725_KMTR.number := 725
!T725_KMTR.description := 'Two-top 16'
!T725_KMTR.capacity := 2
!insert (IR51, T725_KMTR) into ReservationTable

!new Table('T726_KMTR')
!T726_KMTR.number := 726
!T726_KMTR.description := 'Two-top 17'
!T726_KMTR.capacity := 2
!insert (IR51, T726_KMTR) into ReservationTable

!new Table('T727_KMTR')
!T727_KMTR.number := 727
!T727_KMTR.description := 'Two-top 18'
!T727_KMTR.capacity := 2
!insert (IR51, T727_KMTR) into ReservationTable

!new Table('T728_KMTR')
!T728_KMTR.number := 728
!T728_KMTR.description := 'Two-top 19'
!T728_KMTR.capacity := 2
!insert (IR51, T728_KMTR) into ReservationTable

!new ItemOrder('IO3301')
!IO3301.time := Time('17:18')
!insert (IR51, IO3301) into ReservationItemOrdered
!insert (IO3301, MI117) into ItemOrderMenuItem

!new ItemOrder('IO3302')
!IO3302.time := Time('17:18')
!insert (IR51, IO3302) into ReservationItemOrdered
!insert (IO3302, MI117) into ItemOrderMenuItem

!new ItemOrder('IO3303')
!IO3303.time := Time('17:18')
!insert (IR51, IO3303) into ReservationItemOrdered
!insert (IO3303, MI117) into ItemOrderMenuItem

!new ItemOrder('IO3304')
!IO3304.time := Time('17:18')
!insert (IR51, IO3304) into ReservationItemOrdered
!insert (IO3304, MI117) into ItemOrderMenuItem

!new ItemOrder('IO3305')
!IO3305.time := Time('17:18')
!insert (IR51, IO3305) into ReservationItemOrdered
!insert (IO3305, MI115) into ItemOrderMenuItem

!new ItemOrder('IO3306')
!IO3306.time := Time('17:18')
!insert (IR51, IO3306) into ReservationItemOrdered
!insert (IO3306, MI115) into ItemOrderMenuItem

!new ItemOrder('IO3307')
!IO3307.time := Time('17:18')
!insert (IR51, IO3307) into ReservationItemOrdered
!insert (IO3307, MI115) into ItemOrderMenuItem

!new ItemOrder('IO3308')
!IO3308.time := Time('17:18')
!insert (IR51, IO3308) into ReservationItemOrdered
!insert (IO3308, MI116) into ItemOrderMenuItem

!new ItemOrder('IO3309')
!IO3309.time := Time('17:18')
!insert (IR51, IO3309) into ReservationItemOrdered
!insert (IO3309, MI116) into ItemOrderMenuItem

!new ItemOrder('IO3310')
!IO3310.time := Time('17:18')
!insert (IR51, IO3310) into ReservationItemOrdered
!insert (IO3310, MI116) into ItemOrderMenuItem

!new ItemOrder('IO3311')
!IO3311.time := Time('17:18')
!insert (IR51, IO3311) into ReservationItemOrdered
!insert (IO3311, MI118) into ItemOrderMenuItem

!new ItemOrder('IO3312')
!IO3312.time := Time('17:18')
!insert (IR51, IO3312) into ReservationItemOrdered
!insert (IO3312, MI118) into ItemOrderMenuItem

!new ItemOrder('IO3313')
!IO3313.time := Time('17:18')
!insert (IR51, IO3313) into ReservationItemOrdered
!insert (IO3313, MI118) into ItemOrderMenuItem

!new ItemOrder('IO3314')
!IO3314.time := Time('17:18')
!insert (IR51, IO3314) into ReservationItemOrdered
!insert (IO3314, MI118) into ItemOrderMenuItem

!new ItemOrder('IO3315')
!IO3315.time := Time('17:18')
!insert (IR51, IO3315) into ReservationItemOrdered
!insert (IO3315, MI118) into ItemOrderMenuItem

!new Banquet('BR35')
!BR35.time := Time('00:05')
!BR35.date := Date('2026-06-06')
!BR35.numberPeople := 8
!BR35.name := 'Mysterious Organizer'
!BR35.phoneNumber := '+000-000'
!BR35.number := 60606
!BR35.groupName := 'Silent Breakfast Society'
!BR35.paymentMethod := #CreditCard
!BR35.busService := false
!insert (R45, BR35) into RestaurantReservation
!insert (BR35, W101) into ReservationWaiter
!insert (BR35, W102) into ReservationWaiter
!insert (BR35, BD46) into BanquetBusDriver

!new Table('T800_SBMC')
!T800_SBMC.number := 800
!T800_SBMC.description := 'Round table for exactly eight'
!T800_SBMC.capacity := 8
!insert (BR35, T800_SBMC) into ReservationTable

!new Individual('IR52')
!IR52.time := Time('23:59')
!IR52.date := Date('2026-06-05')
!IR52.numberPeople := 1
!IR52.name := 'Elena Petrova'
!IR52.phoneNumber := '+7-999-555-0137'
!IR52.number := 888
!IR52.seating := #Patio
!IR52.smoking := #Smoking
!insert (R45, IR52) into RestaurantReservation
!insert (IR52, C50) into ReservationCustomer
!insert (IR52, W101) into ReservationWaiter

!new Table('T801_SBMC')
!T801_SBMC.number := 801
!T801_SBMC.description := 'Patio single-top'
!T801_SBMC.capacity := 1
!insert (IR52, T801_SBMC) into ReservationTable

!new ItemOrder('IO3316')
!IO3316.time := Time('23:59')
!insert (IR52, IO3316) into ReservationItemOrdered
!insert (IO3316, MI118) into ItemOrderMenuItem

!new DietaryRequirement('DR37')
!DR37.diet := #Kosher

!new ReportedAllergy('RA37')
!RA37.allergen := #Seafood
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 413 | 0.00% |
| Multiplicities Errors | 0 | 103 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 16 | 0.00% |
| Phones | 0 | 16 | 0.00% |

## Category invalid
```
!new Restaurant('R21')
!R21.name := 'Santa Fe Cantina'

!new Owner('O45')
!O45.name := 'Marisol Ortega'
!O45.percentageShares := 50
!insert (R21, O45) into RestaurantOwner

!new Owner('O46')
!O46.name := 'Ethan Brooks'
!O46.percentageShares := 30
!insert (R21, O46) into RestaurantOwner

!new Owner('O47')
!O47.name := 'Kenji Sato'
!O47.percentageShares := 20
!insert (R21, O47) into RestaurantOwner

!new HeadWaiter('HW20')
!HW20.name := 'Rosa Martinez'
!HW20.dateOfBirth := Date('1981-02-06')
!HW20.phoneNumber := '+1 505 555 0101'

!new HeadWaiter('HW21')
!HW21.name := 'Caleb Johnson'
!HW21.dateOfBirth := Date('1979-10-12')
!HW21.phoneNumber := '+1 505 555 0102'

!new Waiter('W45')
!W45.name := 'Ava Nguyen'
!W45.dateOfBirth := Date('1998-03-28')
!W45.phoneNumber := '+1 505 555 0110'
!W45.spokenLanguage := #English

!new Waiter('W46')
!W46.name := 'Luis Hernández'
!W46.dateOfBirth := Date('1990-07-19')
!W46.phoneNumber := '+1 505 555 0111'
!W46.spokenLanguage := #Spanish

!new Waiter('W47')
!W47.name := 'Maya Patel'
!W47.dateOfBirth := Date('1994-09-02')
!W47.phoneNumber := '+1 505 555 0112'
!W47.spokenLanguage := #English

!insert (HW20, W45) into HeadWaiterWaiter
!insert (HW21, W46) into HeadWaiterWaiter
!insert (HW20, W47) into HeadWaiterWaiter
!insert (HW21, W47) into HeadWaiterWaiter

!new Cook('K33')
!K33.name := 'Noah Wilson'
!K33.dateOfBirth := Date('1985-05-05')
!K33.phoneNumber := '+1 505 555 0200'
!K33.yearsOfExperience := 9

!new Cook('K34')
!K34.name := 'Noah Wilson'
!K34.dateOfBirth := Date('1985-05-05')
!K34.phoneNumber := '+1 505 555 0200'
!K34.yearsOfExperience := 9

!new Chef('CH36')
!CH36.name := 'Isabella Romero'
!CH36.dateOfBirth := Date('1989-11-11')
!CH36.phoneNumber := '+1 505 555 0300'
!insert (CH36, K33) into ChefCook

!new Chef('CH37')
!CH37.name := 'Daniel Kim'
!CH37.dateOfBirth := Date('1992-01-23')
!CH37.phoneNumber := '+1 505 555 0301'
!insert (CH37, K34) into ChefCook

!new Table('T41_SFC')
!T41_SFC.number := 41
!T41_SFC.description := 'Inside booth by the adobe wall'
!T41_SFC.capacity := 4

!new Table('T42_SFC')
!T42_SFC.number := 42
!T42_SFC.description := 'Patio two-top with heat lamp'
!T42_SFC.capacity := 2

!new Table('T43_SFC')
!T43_SFC.number := 43
!T43_SFC.description := 'Large family table near the mariachi corner'
!T43_SFC.capacity := 8

!new RegularCustomer('C23')
!C23.name := 'Sofía García'
!C23.prefferedLanguage := #Spanish

!new Allergen('AL5G_SFC')
!AL5G_SFC.type := #Gluten

!new Allergen('AL5L_SFC')
!AL5L_SFC.type := #Lactose

!new Allergen('AL5N_SFC')
!AL5N_SFC.type := #Nuts

!new FoodItem('F1101')
!F1101.number := 901
!F1101.description := 'Flour tortillas'
!F1101.purchaseFlag := true
!F1101.unit := #Dozen
!insert (F1101, AL5G_SFC) into FoodItemAllergen

!new FoodItem('F1102')
!F1102.number := 902
!F1102.description := 'Shredded cheese'
!F1102.purchaseFlag := true
!F1102.unit := #Pound
!insert (F1102, AL5L_SFC) into FoodItemAllergen

!new FoodItem('F1103')
!F1103.number := 903
!F1103.description := 'Almond horchata concentrate'
!F1103.purchaseFlag := true
!F1103.unit := #Ounce
!insert (F1103, AL5N_SFC) into FoodItemAllergen

!new MenuItem('MI57')
!MI57.description := 'Quesadilla with cheese blend'
!MI57.prepTime := 10.0
!MI57.classification := #Main
!insert (MI57, CH36) into MenuItemChef
!insert (MI57, F1101) into MenuItemFoodItem
!insert (MI57, F1102) into MenuItemFoodItem

!new MenuItem('MI58')
!MI58.description := 'Horchata (almond)'
!MI58.prepTime := 2.0
!MI58.classification := #Beverage
!insert (MI58, CH37) into MenuItemChef
!insert (MI58, F1103) into MenuItemFoodItem

!new MenuItem('MI59')
!MI59.description := 'House salsa trio'
!MI59.prepTime := 4.0
!MI59.classification := #Apetizer
!insert (MI59, CH36) into MenuItemChef

!new Individual('IR23')
!IR23.time := Time('12:15')
!IR23.date := Date('2026-08-22')
!IR23.numberPeople := 2
!IR23.name := 'Sofía García'
!IR23.phoneNumber := '+1 505 222 7788'
!IR23.number := 7101
!IR23.seating := #Patio
!IR23.smoking := #NonSmoking
!insert (R21, IR23) into RestaurantReservation
!insert (IR23, C23) into ReservationCustomer
!insert (IR23, W46) into ReservationWaiter
!insert (IR23, T42_SFC) into ReservationTable

!new ItemOrder('IO2001')
!IO2001.time := Time('12:25')
!insert (IR23, IO2001) into ReservationItemOrdered
!insert (IO2001, MI59) into ItemOrderMenuItem

!new ItemOrder('IO2002')
!IO2002.time := Time('12:35')
!insert (IR23, IO2002) into ReservationItemOrdered
!insert (IO2002, MI57) into ItemOrderMenuItem

!new ItemOrder('IO2003')
!IO2003.time := Time('12:40')
!insert (IR23, IO2003) into ReservationItemOrdered
!insert (IO2003, MI58) into ItemOrderMenuItem

!new Banquet('BR19')
!BR19.time := Time('19:00')
!BR19.date := Date('2026-08-22')
!BR19.numberPeople := 7
!BR19.name := 'High Desert Cycling Club'
!BR19.phoneNumber := '+1 505 555 9090'
!BR19.number := 7102
!BR19.groupName := 'HDC Club Season Wrap-up'
!BR19.paymentMethod := #Cash
!BR19.busService := false
!insert (R21, BR19) into RestaurantReservation
!insert (BR19, W45) into ReservationWaiter
!insert (BR19, W47) into ReservationWaiter
!insert (BR19, T43_SFC) into ReservationTable
!insert (BR19, T41_SFC) into ReservationTable

!new ItemOrder('IO2004')
!IO2004.time := Time('19:20')
!insert (BR19, IO2004) into ReservationItemOrdered
!insert (IO2004, MI57) into ItemOrderMenuItem
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 35 | 2.86% |
| Invariants Errors (Not included on General) | 0 | 4 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `HeadWaiterWaiter':
  Object `W47' of class `Waiter' is connected to 2 objects of class `HeadWaiter'
  at association end `headWaiter' but the multiplicity is specified as `1'.
```

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 11 | 0.00% |
| Phones | 0 | 11 | 0.00% |

## Generation 5 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 1505 | 0.00% |
| Multiplicities Errors | 0 | 312 | 0.00% |
| Invariants Errors | 0 | 16 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 35 | 2.86% |
| Invariants Errors (Not included on General) | 0 | 4 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `HeadWaiterWaiter':
  Object `W47' of class `Waiter' is connected to 2 objects of class `HeadWaiter'
  at association end `headWaiter' but the multiplicity is specified as `1'.
```

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 86 | 0.00% |
| Phones | 0 | 86 | 0.00% |

# Generation 6
## Category baseline
```
!new Restaurant('R38')
!R38.name := 'Bo-Kaap Spice & Sea'

!new Owner('O84')
!O84.name := 'Zanele Mkhize'
!O84.percentageShares := 40
!insert (R38, O84) into RestaurantOwner

!new Owner('O85')
!O85.name := 'Erik Lund'
!O85.percentageShares := 35
!insert (R38, O85) into RestaurantOwner

!new Owner('O86')
!O86.name := 'Nicolás Pérez'
!O86.percentageShares := 25
!insert (R38, O86) into RestaurantOwner

!new RegularCustomer('C41')
!C41.name := 'Anneliese Krüger'
!C41.prefferedLanguage := #German

!new RegularCustomer('C42')
!C42.name := 'Santiago Morales'
!C42.prefferedLanguage := #Spanish

!new HeadWaiter('HW36')
!HW36.name := 'Aisha Khan'
!HW36.dateOfBirth := Date('1980-06-18')
!HW36.phoneNumber := '+27-21-555-0100'

!new Waiter('W83')
!W83.name := 'Jonas Neumann'
!W83.dateOfBirth := Date('1996-02-11')
!W83.phoneNumber := '+27-21-555-0101'
!W83.spokenLanguage := #German
!insert (HW36, W83) into HeadWaiterWaiter

!new Waiter('W84')
!W84.name := 'Lucía Serrano'
!W84.dateOfBirth := Date('1999-07-24')
!W84.phoneNumber := '+27-21-555-0102'
!W84.spokenLanguage := #Spanish
!insert (HW36, W84) into HeadWaiterWaiter

!new Waiter('W85')
!W85.name := 'Marco De Santis'
!W85.dateOfBirth := Date('1993-09-02')
!W85.phoneNumber := '+27-21-555-0103'
!W85.spokenLanguage := #Italian
!insert (HW36, W85) into HeadWaiterWaiter

!new Waiter('W86')
!W86.name := 'Bethany Wilson'
!W86.dateOfBirth := Date('2000-12-30')
!W86.phoneNumber := '+27-21-555-0104'
!W86.spokenLanguage := #English
!insert (HW36, W86) into HeadWaiterWaiter

!new Manager('M27')
!M27.name := 'Peter van Dyk'
!M27.dateOfBirth := Date('1975-03-09')
!M27.phoneNumber := '+27-21-555-0199'

!new Cook('K62')
!K62.name := 'Ritika Sharma'
!K62.dateOfBirth := Date('1987-05-20')
!K62.phoneNumber := '+27-21-555-0200'
!K62.yearsOfExperience := 9

!new Cook('K63')
!K63.name := 'Ritika Sharma'
!K63.dateOfBirth := Date('1987-05-20')
!K63.phoneNumber := '+27-21-555-0200'
!K63.yearsOfExperience := 9

!new Cook('K64')
!K64.name := 'Marek Nowicki'
!K64.dateOfBirth := Date('1982-11-08')
!K64.phoneNumber := '+27-21-555-0201'
!K64.yearsOfExperience := 2

!new Chef('CH66')
!CH66.name := 'Yara Haddad'
!CH66.dateOfBirth := Date('1991-01-15')
!CH66.phoneNumber := '+27-21-555-0300'
!insert (CH66, K62) into ChefCook

!new Chef('CH67')
!CH67.name := 'Thabo Dlamini'
!CH67.dateOfBirth := Date('1994-04-04')
!CH67.phoneNumber := '+27-21-555-0301'
!insert (CH67, K63) into ChefCook

!new Chef('CH68')
!CH68.name := 'Elena Popescu'
!CH68.dateOfBirth := Date('1989-08-27')
!CH68.phoneNumber := '+27-21-555-0302'
!insert (CH68, K64) into ChefCook

!new BusDriver('BD36')
!BD36.name := 'Sipho Ndlovu'
!BD36.dateOfBirth := Date('1972-10-05')
!BD36.phoneNumber := '+27-21-555-0400'
!BD36.driverLicenseNr := 'ZA-PDP-771200'

!new BusDriver('BD37')
!BD37.name := 'Ingrid Svensson'
!BD37.dateOfBirth := Date('1978-02-16')
!BD37.phoneNumber := '+27-21-555-0401'
!BD37.driverLicenseNr := 'ZA-PDP-880314'

!new Individual('IR41')
!IR41.time := Time('19:30')
!IR41.date := Date('2026-08-14')
!IR41.numberPeople := 7
!IR41.name := 'K. Botha'
!IR41.phoneNumber := '+27-82-555-1212'
!IR41.number := 1701
!IR41.seating := #Inside
!IR41.smoking := #NonSmoking
!insert (R38, IR41) into RestaurantReservation
!insert (IR41, W83) into ReservationWaiter
!insert (IR41, W84) into ReservationWaiter

!new Banquet('BR30')
!BR30.time := Time('18:15')
!BR30.date := Date('2026-08-15')
!BR30.numberPeople := 18
!BR30.name := 'Anneliese Krüger'
!BR30.phoneNumber := '+49-160-555-7788'
!BR30.number := 1800
!BR30.groupName := 'Cape Town Maritime Conference Delegates'
!BR30.paymentMethod := #CreditCard
!BR30.busService := true
!insert (R38, BR30) into RestaurantReservation
!insert (BR30, C41) into ReservationCustomer
!insert (BR30, W84) into ReservationWaiter
!insert (BR30, W85) into ReservationWaiter
!insert (BR30, W86) into ReservationWaiter
!insert (BR30, BD36) into BanquetBusDriver
!insert (BR30, BD37) into BanquetBusDriver

!new Individual('IR42')
!IR42.time := Time('12:00')
!IR42.date := Date('2026-08-16')
!IR42.numberPeople := 2
!IR42.name := 'Provisional: L. Chen'
!IR42.phoneNumber := '+27-72-555-3434'
!IR42.number := 1702
!IR42.seating := #Patio
!IR42.smoking := #NonSmoking
!insert (IR42, W83) into ReservationWaiter

!new Table('T200_BKSS')
!T200_BKSS.number := 200
!T200_BKSS.description := 'Joined-friendly 4-top near spice wall mural'
!T200_BKSS.capacity := 4
!insert (IR41, T200_BKSS) into ReservationTable

!new Table('T201_BKSS')
!T201_BKSS.number := 201
!T201_BKSS.description := 'Adjacent 4-top to extend table 200'
!T201_BKSS.capacity := 4
!insert (IR41, T201_BKSS) into ReservationTable

!new Table('T202_BKSS')
!T202_BKSS.number := 202
!T202_BKSS.description := 'Patio two-top with ocean breeze exposure'
!T202_BKSS.capacity := 2
!insert (IR42, T202_BKSS) into ReservationTable

!new Table('T210_BKSS')
!T210_BKSS.number := 210
!T210_BKSS.description := 'Banquet table near projector screen'
!T210_BKSS.capacity := 10
!insert (BR30, T210_BKSS) into ReservationTable

!new Table('T211_BKSS')
!T211_BKSS.number := 211
!T211_BKSS.description := 'Banquet table near balcony rail'
!T211_BKSS.capacity := 8
!insert (BR30, T211_BKSS) into ReservationTable

!new Allergen('A7_GLU_BKSS')
!A7_GLU_BKSS.type := #Gluten

!new Allergen('A7_LAC_BKSS')
!A7_LAC_BKSS.type := #Lactose

!new Allergen('A7_NUT_BKSS')
!A7_NUT_BKSS.type := #Nuts

!new Allergen('A7_SEA_BKSS')
!A7_SEA_BKSS.type := #Seafood

!new FoodItem('F1801')
!F1801.number := 701
!F1801.description := 'Flatbread dough (wheat)'
!F1801.purchaseFlag := true
!F1801.unit := #Pound
!insert (F1801, A7_GLU_BKSS) into FoodItemAllergen

!new FoodItem('F1802')
!F1802.number := 702
!F1802.description := 'Feta cheese'
!F1802.purchaseFlag := true
!F1802.unit := #Ounce
!insert (F1802, A7_LAC_BKSS) into FoodItemAllergen

!new FoodItem('F1803')
!F1803.number := 703
!F1803.description := 'Pine nuts'
!F1803.purchaseFlag := true
!F1803.unit := #Gram
!insert (F1803, A7_NUT_BKSS) into FoodItemAllergen

!new FoodItem('F1804')
!F1804.number := 704
!F1804.description := 'Mussels (fresh)'
!F1804.purchaseFlag := false
!F1804.unit := #Pound
!insert (F1804, A7_SEA_BKSS) into FoodItemAllergen

!new FoodItem('F1805')
!F1805.number := 705
!F1805.description := 'Rooibos tea leaves'
!F1805.purchaseFlag := true
!F1805.unit := #Ounce

!new MenuItem('MI98')
!MI98.description := 'Spiced mussels pot (tomato-chili broth)'
!MI98.prepTime := 14.0
!MI98.classification := #Apetizer
!insert (MI98, CH66) into MenuItemChef
!insert (MI98, F1804) into MenuItemFoodItem

!new MenuItem('MI99')
!MI99.description := 'Pine-nut pesto flatbread with feta'
!MI99.prepTime := 20.0
!MI99.classification := #Main
!insert (MI99, CH67) into MenuItemChef
!insert (MI99, F1801) into MenuItemFoodItem
!insert (MI99, F1803) into MenuItemFoodItem
!insert (MI99, F1802) into MenuItemFoodItem

!new MenuItem('MI100')
!MI100.description := 'Feta cheesecake slice'
!MI100.prepTime := 9.5
!MI100.classification := #Dessert
!insert (MI100, CH68) into MenuItemChef
!insert (MI100, F1802) into MenuItemFoodItem
!insert (MI100, F1801) into MenuItemFoodItem

!new MenuItem('MI101')
!MI101.description := 'Iced rooibos tea'
!MI101.prepTime := 3.0
!MI101.classification := #Beverage
!insert (MI101, CH66) into MenuItemChef
!insert (MI101, F1805) into MenuItemFoodItem

!new ItemOrder('IO2901')
!IO2901.time := Time('19:45')
!insert (IR41, IO2901) into ReservationItemOrdered
!insert (IO2901, MI98) into ItemOrderMenuItem

!new ItemOrder('IO2902')
!IO2902.time := Time('20:05')
!insert (IR41, IO2902) into ReservationItemOrdered
!insert (IO2902, MI99) into ItemOrderMenuItem

!new ItemOrder('IO2903')
!IO2903.time := Time('20:20')
!insert (IR41, IO2903) into ReservationItemOrdered
!insert (IO2903, MI101) into ItemOrderMenuItem

!new ItemOrder('IO2904')
!IO2904.time := Time('18:40')
!insert (BR30, IO2904) into ReservationItemOrdered
!insert (IO2904, MI101) into ItemOrderMenuItem

!new ItemOrder('IO2905')
!IO2905.time := Time('19:00')
!insert (BR30, IO2905) into ReservationItemOrdered
!insert (IO2905, MI99) into ItemOrderMenuItem

!new ItemOrder('IO2906')
!IO2906.time := Time('19:25')
!insert (BR30, IO2906) into ReservationItemOrdered
!insert (IO2906, MI98) into ItemOrderMenuItem

!new ItemOrder('IO2907')
!IO2907.time := Time('19:50')
!insert (BR30, IO2907) into ReservationItemOrdered
!insert (IO2907, MI100) into ItemOrderMenuItem

!new ItemOrder('IO2908')
!IO2908.time := Time('12:10')
!insert (IR42, IO2908) into ReservationItemOrdered
!insert (IO2908, MI101) into ItemOrderMenuItem

!new DietaryRequirement('DR32')
!DR32.diet := #Kosher

!new ReportedAllergy('RA32')
!RA32.allergen := #Seafood
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 256 | 0.00% |
| Multiplicities Errors | 0 | 57 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 17 | 0.00% |
| Phones | 0 | 17 | 0.00% |

## Category boundary
```
!new Restaurant('R41')
!R41.name := 'Brasserie Côte d’Armor'

!new Owner('O92')
!O92.name := 'Élodie Martin'
!O92.percentageShares := 50
!insert (R41, O92) into RestaurantOwner

!new Owner('O93')
!O93.name := 'Tariq Benali'
!O93.percentageShares := 50
!insert (R41, O93) into RestaurantOwner

!new HeadWaiter('HW39')
!HW39.name := 'Camille Leclerc'
!HW39.dateOfBirth := Date('1981-09-09')
!HW39.phoneNumber := '+33 2 40 55 10 10'

!new Waiter('W91')
!W91.name := 'Rafael Costa'
!W91.dateOfBirth := Date('1994-04-17')
!W91.phoneNumber := '+351 22 555 1011'
!W91.spokenLanguage := #English
!insert (HW39, W91) into HeadWaiterWaiter

!new Waiter('W92')
!W92.name := 'Isabella Romano'
!W92.dateOfBirth := Date('1997-02-25')
!W92.phoneNumber := '+39 091 555 1012'
!W92.spokenLanguage := #Italian
!insert (HW39, W92) into HeadWaiterWaiter

!new Manager('M28')
!M28.name := 'Abdoulaye Ndiaye'
!M28.dateOfBirth := Date('1973-12-03')
!M28.phoneNumber := '+33 2 40 55 10 99'

!new Cook('K70')
!K70.name := 'Nora Svensson'
!K70.dateOfBirth := Date('1999-01-10')
!K70.phoneNumber := '+46 31 555 2020'
!K70.yearsOfExperience := 0

!new Cook('K71')
!K71.name := 'Nora Svensson'
!K71.dateOfBirth := Date('1999-01-10')
!K71.phoneNumber := '+46 31 555 2020'
!K71.yearsOfExperience := 0

!new Chef('CH74')
!CH74.name := 'Pierre Gauthier'
!CH74.dateOfBirth := Date('1988-06-06')
!CH74.phoneNumber := '+33 6 555 3031'
!insert (CH74, K70) into ChefCook

!new Chef('CH75')
!CH75.name := 'Samira El Idrissi'
!CH75.dateOfBirth := Date('1991-11-21')
!CH75.phoneNumber := '+212 5 555 3032'
!insert (CH75, K71) into ChefCook

!new Allergen('AL_LAC_BCA')
!AL_LAC_BCA.type := #Lactose

!new Allergen('AL_NUT_BCA')
!AL_NUT_BCA.type := #Nuts

!new FoodItem('F1901')
!F1901.number := 1000
!F1901.description := 'Butter (unsalted)'
!F1901.purchaseFlag := true
!F1901.unit := #Ounce
!insert (F1901, AL_LAC_BCA) into FoodItemAllergen

!new FoodItem('F1902')
!F1902.number := 1001
!F1902.description := 'Heavy cream'
!F1902.purchaseFlag := true
!F1902.unit := #Ounce
!insert (F1902, AL_LAC_BCA) into FoodItemAllergen

!new FoodItem('F1903')
!F1903.number := 1002
!F1903.description := 'Hazelnut praline paste'
!F1903.purchaseFlag := true
!F1903.unit := #Gram
!insert (F1903, AL_NUT_BCA) into FoodItemAllergen

!new FoodItem('F1904')
!F1904.number := 1003
!F1904.description := 'Rice flour'
!F1904.purchaseFlag := true
!F1904.unit := #Pound

!new FoodItem('F1905')
!F1905.number := 1004
!F1905.description := 'Hazelnut cream filling (dairy + nuts)'
!F1905.purchaseFlag := false
!F1905.unit := #Gram
!insert (F1905, AL_LAC_BCA) into FoodItemAllergen
!insert (F1905, AL_NUT_BCA) into FoodItemAllergen

!new MenuItem('MI107')
!MI107.description := 'Hazelnut Crème Tart (gluten-free base)'
!MI107.prepTime := 22.0
!MI107.classification := #Dessert
!insert (MI107, CH74) into MenuItemChef
!insert (MI107, F1904) into MenuItemFoodItem
!insert (MI107, F1901) into MenuItemFoodItem
!insert (MI107, F1905) into MenuItemFoodItem

!new MenuItem('MI108')
!MI108.description := 'Crème Chantilly Bowl'
!MI108.prepTime := 3.0
!MI108.classification := #Dessert
!insert (MI108, CH75) into MenuItemChef
!insert (MI108, F1902) into MenuItemFoodItem
!insert (MI108, F1901) into MenuItemFoodItem

!new MenuItem('MI109')
!MI109.description := 'Praline Espresso Spoon'
!MI109.prepTime := 1.0
!MI109.classification := #Beverage
!insert (MI109, CH74) into MenuItemChef
!insert (MI109, F1903) into MenuItemFoodItem

!new RegularCustomer('C45')
!C45.name := 'Gianni Ferraro'
!C45.prefferedLanguage := #Italian

!new RegularCustomer('C46')
!C46.name := 'Ana Torres'
!C46.prefferedLanguage := #Spanish

!new Individual('IR45')
!IR45.number := 810
!IR45.date := Date('2026-05-10')
!IR45.time := Time('12:00')
!IR45.numberPeople := 1
!IR45.name := 'Gianni Ferraro'
!IR45.phoneNumber := '+39 333 555 0810'
!IR45.seating := #Inside
!IR45.smoking := #NonSmoking
!insert (R41, IR45) into RestaurantReservation
!insert (IR45, C45) into ReservationCustomer
!insert (IR45, W91) into ReservationWaiter

!new Table('T1_BCA')
!T1_BCA.number := 1
!T1_BCA.description := 'Single seat by the pastry display'
!T1_BCA.capacity := 1
!insert (IR45, T1_BCA) into ReservationTable

!new ItemOrder('IO3101')
!IO3101.time := Time('12:10')
!insert (IR45, IO3101) into ReservationItemOrdered
!insert (IO3101, MI108) into ItemOrderMenuItem

!new Individual('IR46')
!IR46.number := 811
!IR46.date := Date('2026-05-10')
!IR46.time := Time('12:15')
!IR46.numberPeople := 2
!IR46.name := 'Walk-in Deux'
!IR46.phoneNumber := '+33 0 000 0811'
!IR46.seating := #Patio
!IR46.smoking := #Smoking
!insert (R41, IR46) into RestaurantReservation
!insert (IR46, W91) into ReservationWaiter

!new Table('T2_BCA')
!T2_BCA.number := 2
!T2_BCA.description := 'Small patio bistro table'
!T2_BCA.capacity := 2
!insert (IR46, T2_BCA) into ReservationTable

!new Individual('IR47')
!IR47.number := 812
!IR47.date := Date('2026-05-10')
!IR47.time := Time('12:30')
!IR47.numberPeople := 3
!IR47.name := 'Tasting Trio'
!IR47.phoneNumber := '+33 0 000 0812'
!IR47.seating := #Inside
!IR47.smoking := #NonSmoking
!insert (R41, IR47) into RestaurantReservation
!insert (IR47, W91) into ReservationWaiter

!new Table('T3_BCA')
!T3_BCA.number := 3
!T3_BCA.description := 'Inside two-top near window'
!T3_BCA.capacity := 2
!insert (IR47, T3_BCA) into ReservationTable

!new Table('T4_BCA')
!T4_BCA.number := 4
!T4_BCA.description := 'Add-on single chair (tight fit)'
!T4_BCA.capacity := 1
!insert (IR47, T4_BCA) into ReservationTable

!new ItemOrder('IO3102')
!IO3102.time := Time('12:40')
!insert (IR47, IO3102) into ReservationItemOrdered
!insert (IO3102, MI107) into ItemOrderMenuItem

!new ItemOrder('IO3103')
!IO3103.time := Time('12:42')
!insert (IR47, IO3103) into ReservationItemOrdered
!insert (IO3103, MI108) into ItemOrderMenuItem

!new Banquet('BR32')
!BR32.number := 900
!BR32.date := Date('2026-05-10')
!BR32.time := Time('13:00')
!BR32.numberPeople := 5
!BR32.name := 'Gianni Ferraro (Host)'
!BR32.phoneNumber := '+39 333 555 0900'
!BR32.groupName := 'Cinque Amici Lunch'
!BR32.paymentMethod := #CreditCard
!BR32.busService := false
!insert (R41, BR32) into RestaurantReservation
!insert (BR32, C45) into ReservationCustomer
!insert (BR32, W91) into ReservationWaiter
!insert (BR32, W92) into ReservationWaiter

!new Table('T5_BCA')
!T5_BCA.number := 5
!T5_BCA.description := 'Round table for five'
!T5_BCA.capacity := 5
!insert (BR32, T5_BCA) into ReservationTable

!new BusDriver('BD43')
!BD43.name := 'Milan Jovanović'
!BD43.dateOfBirth := Date('1980-10-10')
!BD43.phoneNumber := '+381 11 555 7700'
!BD43.driverLicenseNr := 'RS-BG-773190'
!insert (BR32, BD43) into BanquetBusDriver

!new ItemOrder('IO3104')
!IO3104.time := Time('13:10')
!insert (BR32, IO3104) into ReservationItemOrdered
!insert (IO3104, MI107) into ItemOrderMenuItem

!new ItemOrder('IO3105')
!IO3105.time := Time('13:12')
!insert (BR32, IO3105) into ReservationItemOrdered
!insert (IO3105, MI107) into ItemOrderMenuItem

!new ItemOrder('IO3106')
!IO3106.time := Time('13:20')
!insert (BR32, IO3106) into ReservationItemOrdered
!insert (IO3106, MI108) into ItemOrderMenuItem

!new DietaryRequirement('DR34')
!DR34.diet := #Vegetarian

!new ReportedAllergy('RA34')
!RA34.allergen := #Nuts
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 218 | 0.00% |
| Multiplicities Errors | 0 | 49 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 13 | 0.00% |
| Phones | 0 | 13 | 0.00% |

## Category complex
```
!new Restaurant('R48')
!R48.name := 'Merlion Quay Bistro'

!new Restaurant('R49')
!R49.name := 'La Pampa Parrilla'

!new Restaurant('R50')
!R50.name := 'Danube Kaffeehaus'

!new Owner('O110')
!O110.name := 'Arjun Iyer'
!O110.percentageShares := 51
!insert (R48, O110) into RestaurantOwner
!insert (R49, O110) into RestaurantOwner
!insert (R50, O110) into RestaurantOwner

!new Owner('O111')
!O111.name := 'Valentina Sosa'
!O111.percentageShares := 49
!insert (R48, O111) into RestaurantOwner
!insert (R49, O111) into RestaurantOwner
!insert (R50, O111) into RestaurantOwner

!new RegularCustomer('C54')
!C54.name := 'Mei Lin Tan'
!C54.prefferedLanguage := #English

!new RegularCustomer('C55')
!C55.name := 'Facundo Álvarez'
!C55.prefferedLanguage := #Spanish

!new RegularCustomer('C56')
!C56.name := 'Greta Hofmann'
!C56.prefferedLanguage := #German

!new HeadWaiter('HW46')
!HW46.name := 'Siti Rahmah'
!HW46.dateOfBirth := Date('1981-09-10')
!HW46.phoneNumber := '+65 6123 4000'

!new Waiter('W107')
!W107.name := 'Daniel Wong'
!W107.dateOfBirth := Date('1992-02-22')
!W107.phoneNumber := '+65 6123 4001'
!W107.spokenLanguage := #English
!insert (HW46, W107) into HeadWaiterWaiter

!new Waiter('W108')
!W108.name := 'María Fernanda López'
!W108.dateOfBirth := Date('1995-06-03')
!W108.phoneNumber := '+65 6123 4002'
!W108.spokenLanguage := #Spanish
!insert (HW46, W108) into HeadWaiterWaiter

!new Waiter('W109')
!W109.name := 'Luca Greco'
!W109.dateOfBirth := Date('1990-12-19')
!W109.phoneNumber := '+65 6123 4003'
!W109.spokenLanguage := #Italian
!insert (HW46, W109) into HeadWaiterWaiter

!new HeadWaiter('HW47')
!HW47.name := 'Tomás Pereyra'
!HW47.dateOfBirth := Date('1976-04-28')
!HW47.phoneNumber := '+54 11 5555 8800'

!new Waiter('W110')
!W110.name := 'Sofía Giménez'
!W110.dateOfBirth := Date('1998-08-14')
!W110.phoneNumber := '+54 11 5555 8801'
!W110.spokenLanguage := #Spanish
!insert (HW47, W110) into HeadWaiterWaiter

!new HeadWaiter('HW48')
!HW48.name := 'Helmut Gruber'
!HW48.dateOfBirth := Date('1983-01-05')
!HW48.phoneNumber := '+43 1 555 7700'

!new Waiter('W111')
!W111.name := 'Anna Leitner'
!W111.dateOfBirth := Date('1991-10-20')
!W111.phoneNumber := '+43 1 555 7701'
!W111.spokenLanguage := #German
!insert (HW48, W111) into HeadWaiterWaiter

!new Waiter('W112')
!W112.name := 'Paolo Rinaldi'
!W112.dateOfBirth := Date('1987-07-07')
!W112.phoneNumber := '+43 1 555 7702'
!W112.spokenLanguage := #Italian
!insert (HW48, W112) into HeadWaiterWaiter

!new Cook('K82')
!K82.name := 'Noor Al‑Farsi'
!K82.dateOfBirth := Date('1988-03-12')
!K82.phoneNumber := '+65 6123 5000'
!K82.yearsOfExperience := 5

!new Cook('K83')
!K83.name := 'Noor Al‑Farsi'
!K83.dateOfBirth := Date('1988-03-12')
!K83.phoneNumber := '+65 6123 5000'
!K83.yearsOfExperience := 5

!new Cook('K84')
!K84.name := 'Renzo Bassi'
!K84.dateOfBirth := Date('1979-11-09')
!K84.phoneNumber := '+54 11 5555 9900'
!K84.yearsOfExperience := 14

!new Cook('K85')
!K85.name := 'Renzo Bassi'
!K85.dateOfBirth := Date('1979-11-09')
!K85.phoneNumber := '+54 11 5555 9900'
!K85.yearsOfExperience := 14

!new Cook('K86')
!K86.name := 'Renzo Bassi'
!K86.dateOfBirth := Date('1979-11-09')
!K86.phoneNumber := '+54 11 5555 9900'
!K86.yearsOfExperience := 14

!new Chef('CH86')
!CH86.name := 'Aiko Nakamura'
!CH86.dateOfBirth := Date('1990-05-30')
!CH86.phoneNumber := '+65 6123 5001'
!insert (CH86, K82) into ChefCook

!new Chef('CH87')
!CH87.name := 'Imran Qureshi'
!CH87.dateOfBirth := Date('1985-09-01')
!CH87.phoneNumber := '+65 6123 5002'
!insert (CH87, K83) into ChefCook

!new Chef('CH88')
!CH88.name := 'Martina Ferraro'
!CH88.dateOfBirth := Date('1992-02-18')
!CH88.phoneNumber := '+54 11 5555 9901'
!insert (CH88, K84) into ChefCook

!new Chef('CH89')
!CH89.name := 'Klaus Steiner'
!CH89.dateOfBirth := Date('1986-06-25')
!CH89.phoneNumber := '+43 1 555 8801'
!insert (CH89, K85) into ChefCook

!new Chef('CH90')
!CH90.name := 'Camilo Vargas'
!CH90.dateOfBirth := Date('1994-04-04')
!CH90.phoneNumber := '+54 11 5555 9902'
!insert (CH90, K86) into ChefCook

!new Manager('M32')
!M32.name := 'Evelyn Ng'
!M32.dateOfBirth := Date('1974-08-08')
!M32.phoneNumber := '+65 6123 6000'

!new Manager('M33')
!M33.name := 'Verónica Ríos'
!M33.dateOfBirth := Date('1980-03-03')
!M33.phoneNumber := '+54 11 5555 6600'

!new BusDriver('BD48')
!BD48.name := 'Jerome Parker'
!BD48.dateOfBirth := Date('1970-01-16')
!BD48.phoneNumber := '+65 6123 7000'
!BD48.driverLicenseNr := 'SG-BD-301188'

!new Allergen('AL_GLU_SIX')
!AL_GLU_SIX.type := #Gluten

!new Allergen('AL_LAC_SIX')
!AL_LAC_SIX.type := #Lactose

!new Allergen('AL_NUT_SIX')
!AL_NUT_SIX.type := #Nuts

!new Allergen('AL_SEA_SIX')
!AL_SEA_SIX.type := #Seafood

!new FoodItem('F2001')
!F2001.number := 601
!F2001.description := 'Wheat noodles'
!F2001.purchaseFlag := true
!F2001.unit := #Pound
!insert (F2001, AL_GLU_SIX) into FoodItemAllergen

!new FoodItem('F2002')
!F2002.number := 602
!F2002.description := 'Peanuts (crushed)'
!F2002.purchaseFlag := true
!F2002.unit := #Gram
!insert (F2002, AL_NUT_SIX) into FoodItemAllergen

!new FoodItem('F2003')
!F2003.number := 603
!F2003.description := 'Satay glaze (peanut + wheat thickener)'
!F2003.purchaseFlag := false
!F2003.unit := #Ounce
!insert (F2003, AL_NUT_SIX) into FoodItemAllergen
!insert (F2003, AL_GLU_SIX) into FoodItemAllergen

!new FoodItem('F2004')
!F2004.number := 604
!F2004.description := 'Shrimp (shell-on)'
!F2004.purchaseFlag := true
!F2004.unit := #Pound
!insert (F2004, AL_SEA_SIX) into FoodItemAllergen

!new FoodItem('F2005')
!F2005.number := 605
!F2005.description := 'Milk (whole)'
!F2005.purchaseFlag := true
!F2005.unit := #Ounce
!insert (F2005, AL_LAC_SIX) into FoodItemAllergen

!new FoodItem('F2006')
!F2006.number := 606
!F2006.description := 'Butter'
!F2006.purchaseFlag := true
!F2006.unit := #Ounce
!insert (F2006, AL_LAC_SIX) into FoodItemAllergen

!new FoodItem('F2007')
!F2007.number := 607
!F2007.description := 'Wheat bread crumbs'
!F2007.purchaseFlag := true
!F2007.unit := #Pound
!insert (F2007, AL_GLU_SIX) into FoodItemAllergen

!new FoodItem('F2008')
!F2008.number := 608
!F2008.description := 'Almond meal'
!F2008.purchaseFlag := true
!F2008.unit := #Gram
!insert (F2008, AL_NUT_SIX) into FoodItemAllergen

!new FoodItem('F2009')
!F2009.number := 609
!F2009.description := 'Dulce de leche (milk caramel)'
!F2009.purchaseFlag := true
!F2009.unit := #Ounce
!insert (F2009, AL_LAC_SIX) into FoodItemAllergen

!new FoodItem('F2010')
!F2010.number := 610
!F2010.description := 'Parmesan-style hard cheese'
!F2010.purchaseFlag := true
!F2010.unit := #Ounce
!insert (F2010, AL_LAC_SIX) into FoodItemAllergen

!new MenuItem('MI125')
!MI125.description := 'Laksa noodle bowl'
!MI125.prepTime := 18.0
!MI125.classification := #Main
!insert (MI125, CH86) into MenuItemChef
!insert (MI125, F2001) into MenuItemFoodItem
!insert (MI125, F2004) into MenuItemFoodItem

!new MenuItem('MI126')
!MI126.description := 'Satay skewers with peanut glaze'
!MI126.prepTime := 12.0
!MI126.classification := #Apetizer
!insert (MI126, CH87) into MenuItemChef
!insert (MI126, F2003) into MenuItemFoodItem

!new MenuItem('MI127')
!MI127.description := 'Milanesa (breaded cutlet)'
!MI127.prepTime := 20.0
!MI127.classification := #Main
!insert (MI127, CH90) into MenuItemChef
!insert (MI127, F2007) into MenuItemFoodItem

!new MenuItem('MI128')
!MI128.description := 'Alfajor plate (dulce de leche)'
!MI128.prepTime := 10.0
!MI128.classification := #Dessert
!insert (MI128, CH88) into MenuItemChef
!insert (MI128, F2009) into MenuItemFoodItem
!insert (MI128, F2008) into MenuItemFoodItem

!new MenuItem('MI129')
!MI129.description := 'Apfelstrudel slice with cream'
!MI129.prepTime := 25.0
!MI129.classification := #Dessert
!insert (MI129, CH89) into MenuItemChef
!insert (MI129, F2005) into MenuItemFoodItem
!insert (MI129, F2006) into MenuItemFoodItem
!insert (MI129, F2007) into MenuItemFoodItem

!new MenuItem('MI130')
!MI130.description := 'Sparkling water'
!MI130.prepTime := 0.5
!MI130.classification := #Beverage
!insert (MI130, CH89) into MenuItemChef

!new Individual('IR55')
!IR55.time := Time('19:10')
!IR55.date := Date('2026-08-02')
!IR55.numberPeople := 2
!IR55.name := 'Mei Lin Tan'
!IR55.phoneNumber := '+65 9876 1200'
!IR55.number := 1201
!IR55.seating := #Inside
!IR55.smoking := #NonSmoking
!insert (R48, IR55) into RestaurantReservation
!insert (IR55, C54) into ReservationCustomer
!insert (IR55, W107) into ReservationWaiter
!insert (IR55, W109) into ReservationWaiter

!new Table('T120_MQB')
!T120_MQB.number := 120
!T120_MQB.description := 'Inside two-top by river window'
!T120_MQB.capacity := 2
!insert (IR55, T120_MQB) into ReservationTable

!new ItemOrder('IO3501')
!IO3501.time := Time('19:20')
!insert (IR55, IO3501) into ReservationItemOrdered
!insert (IO3501, MI126) into ItemOrderMenuItem

!new ItemOrder('IO3502')
!IO3502.time := Time('19:35')
!insert (IR55, IO3502) into ReservationItemOrdered
!insert (IO3502, MI125) into ItemOrderMenuItem

!new ItemOrder('IO3503')
!IO3503.time := Time('19:36')
!insert (IR55, IO3503) into ReservationItemOrdered
!insert (IO3503, MI125) into ItemOrderMenuItem

!new Individual('IR56')
!IR56.time := Time('20:05')
!IR56.date := Date('2026-08-02')
!IR56.numberPeople := 6
!IR56.name := 'Riverfront Cycling Group'
!IR56.phoneNumber := '+65 6123 8888'
!IR56.number := 1202
!IR56.seating := #Patio
!IR56.smoking := #Smoking
!insert (R48, IR56) into RestaurantReservation
!insert (IR56, W107) into ReservationWaiter

!new Table('T121_MQB')
!T121_MQB.number := 121
!T121_MQB.description := 'Patio four-top under fan'
!T121_MQB.capacity := 4
!insert (IR56, T121_MQB) into ReservationTable

!new Table('T122_MQB')
!T122_MQB.number := 122
!T122_MQB.description := 'Patio four-top adjacent'
!T122_MQB.capacity := 4
!insert (IR56, T122_MQB) into ReservationTable

!new ItemOrder('IO3504')
!IO3504.time := Time('20:15')
!insert (IR56, IO3504) into ReservationItemOrdered
!insert (IO3504, MI130) into ItemOrderMenuItem

!new ItemOrder('IO3505')
!IO3505.time := Time('20:25')
!insert (IR56, IO3505) into ReservationItemOrdered
!insert (IO3505, MI126) into ItemOrderMenuItem

!new Banquet('BR37')
!BR37.time := Time('18:30')
!BR37.date := Date('2026-08-03')
!BR37.numberPeople := 30
!BR37.name := 'Corporate Events Desk'
!BR37.phoneNumber := '+65 6000 3000'
!BR37.number := 1300
!BR37.groupName := 'ASEAN FinTech Roundtable'
!BR37.paymentMethod := #Cash
!BR37.busService := true
!insert (R48, BR37) into RestaurantReservation
!insert (BR37, BD48) into BanquetBusDriver
!insert (BR37, W107) into ReservationWaiter
!insert (BR37, W108) into ReservationWaiter
!insert (BR37, W109) into ReservationWaiter

!new Table('T130_MQB')
!T130_MQB.number := 130
!T130_MQB.description := 'Private room table A'
!T130_MQB.capacity := 12
!insert (BR37, T130_MQB) into ReservationTable

!new Table('T131_MQB')
!T131_MQB.number := 131
!T131_MQB.description := 'Private room table B'
!T131_MQB.capacity := 10
!insert (BR37, T131_MQB) into ReservationTable

!new Table('T132_MQB')
!T132_MQB.number := 132
!T132_MQB.description := 'Private room table C'
!T132_MQB.capacity := 10
!insert (BR37, T132_MQB) into ReservationTable

!new ItemOrder('IO3506')
!IO3506.time := Time('18:45')
!insert (BR37, IO3506) into ReservationItemOrdered
!insert (IO3506, MI130) into ItemOrderMenuItem

!new Banquet('BR38')
!BR38.time := Time('21:00')
!BR38.date := Date('2026-08-10')
!BR38.numberPeople := 15
!BR38.name := 'Facundo Álvarez'
!BR38.phoneNumber := '+54 11 4444 1212'
!BR38.number := 2300
!BR38.groupName := 'Peña Folklórica de San Telmo'
!BR38.paymentMethod := #CreditCard
!BR38.busService := false
!insert (R49, BR38) into RestaurantReservation
!insert (BR38, C55) into ReservationCustomer
!insert (BR38, W110) into ReservationWaiter

!new Table('T230_LPP')
!T230_LPP.number := 230
!T230_LPP.description := 'Parrilla back room long table'
!T230_LPP.capacity := 8
!insert (BR38, T230_LPP) into ReservationTable

!new Table('T231_LPP')
!T231_LPP.number := 231
!T231_LPP.description := 'Adjacent long table extension'
!T231_LPP.capacity := 8
!insert (BR38, T231_LPP) into ReservationTable

!new Individual('IR57')
!IR57.time := Time('15:40')
!IR57.date := Date('2026-08-12')
!IR57.numberPeople := 1
!IR57.name := 'Greta Hofmann'
!IR57.phoneNumber := '+43 699 555 1212'
!IR57.number := 3400
!IR57.seating := #Inside
!IR57.smoking := #NonSmoking
!insert (R50, IR57) into RestaurantReservation
!insert (IR57, C56) into ReservationCustomer
!insert (IR57, W111) into ReservationWaiter
!insert (IR57, W112) into ReservationWaiter

!new Table('T340_DK')
!T340_DK.number := 340
!T340_DK.description := 'Corner two-top near piano'
!T340_DK.capacity := 2
!insert (IR57, T340_DK) into ReservationTable

!new ItemOrder('IO3507')
!IO3507.time := Time('15:50')
!insert (IR57, IO3507) into ReservationItemOrdered
!insert (IO3507, MI130) into ItemOrderMenuItem

!new ItemOrder('IO3508')
!IO3508.time := Time('16:05')
!insert (IR57, IO3508) into ReservationItemOrdered
!insert (IO3508, MI129) into ItemOrderMenuItem

!new DietaryRequirement('DR39')
!DR39.diet := #Halal

!new DietaryRequirement('DR40')
!DR40.diet := #Kosher

!new ReportedAllergy('RA39')
!RA39.allergen := #Nuts

!new ReportedAllergy('RA40')
!RA40.allergen := #Seafood
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 396 | 0.00% |
| Multiplicities Errors | 0 | 86 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 27 | 0.00% |
| Phones | 0 | 27 | 0.00% |

## Category edge
```
!new Restaurant('R46')
!R46.name := 'Aurora Capsule Diner'

!new Restaurant('R47')
!R47.name := 'Orbital Bento Bar'

!new Owner('O109')
!O109.name := 'Dr. Selene Kaur'
!O109.percentageShares := 100
!insert (R46, O109) into RestaurantOwner
!insert (R47, O109) into RestaurantOwner

!new RegularCustomer('C52')
!C52.name := 'Bastian Neumann'
!C52.prefferedLanguage := #German

!new RegularCustomer('C53')
!C53.name := 'Marisol Vega'
!C53.prefferedLanguage := #Spanish

!new HeadWaiter('HW44')
!HW44.name := 'Keiko Mori'
!HW44.dateOfBirth := Date('1982-02-06')
!HW44.phoneNumber := '+81-90-5555-0300'

!new HeadWaiter('HW45')
!HW45.name := 'Omar Haddad'
!HW45.dateOfBirth := Date('1976-10-12')
!HW45.phoneNumber := '+971-50-555-0333'

!new Waiter('W104')
!W104.name := 'Nadia Ristova'
!W104.dateOfBirth := Date('1999-03-01')
!W104.phoneNumber := '+389-70-555-011'
!W104.spokenLanguage := #English
!insert (HW44, W104) into HeadWaiterWaiter

!new Waiter('W105')
!W105.name := 'Pablo Ibáñez'
!W105.dateOfBirth := Date('1994-08-24')
!W105.phoneNumber := '+34-611-555-019'
!W105.spokenLanguage := #Spanish
!insert (HW45, W105) into HeadWaiterWaiter

!new Waiter('W106')
!W106.name := 'Greta Schmid'
!W106.dateOfBirth := Date('2003-05-09')
!W106.phoneNumber := '+49-151-555-0212'
!W106.spokenLanguage := #German
!insert (HW44, W106) into HeadWaiterWaiter

!new Cook('K79')
!K79.name := 'Arturo Menéndez'
!K79.dateOfBirth := Date('1955-01-20')
!K79.phoneNumber := '+1-702-555-0100'
!K79.yearsOfExperience := 99

!new Cook('K80')
!K80.name := 'Arturo Menéndez'
!K80.dateOfBirth := Date('1955-01-20')
!K80.phoneNumber := '+1-702-555-0100'
!K80.yearsOfExperience := 99

!new Cook('K81')
!K81.name := 'Siti Nur Aisyah'
!K81.dateOfBirth := Date('1988-11-30')
!K81.phoneNumber := '+60-12-555-0111'
!K81.yearsOfExperience := 7

!new Chef('CH83')
!CH83.name := 'Mikhail Orlov'
!CH83.dateOfBirth := Date('1990-04-14')
!CH83.phoneNumber := '+7-925-555-0144'
!insert (CH83, K79) into ChefCook

!new Chef('CH84')
!CH84.name := 'Hye-jin Park'
!CH84.dateOfBirth := Date('1993-09-18')
!CH84.phoneNumber := '+82-10-5555-0161'
!insert (CH84, K80) into ChefCook

!new Chef('CH85')
!CH85.name := 'Tariq Al-Masri'
!CH85.dateOfBirth := Date('1987-06-25')
!CH85.phoneNumber := '+962-79-555-0183'
!insert (CH85, K81) into ChefCook

!new Manager('M31')
!M31.name := 'Evelyn Hart'
!M31.dateOfBirth := Date('1979-07-07')
!M31.phoneNumber := '+1-415-555-0330'

!new Allergen('AY1_E6')
!AY1_E6.type := #Gluten

!new Allergen('AY2_E6')
!AY2_E6.type := #Lactose

!new Allergen('AY3_E6')
!AY3_E6.type := #Nuts

!new Allergen('AY4_E6')
!AY4_E6.type := #Seafood

!new FoodItem('FI60_E6')
!FI60_E6.number := 60
!FI60_E6.description := 'Sourdough crumb'
!FI60_E6.purchaseFlag := true
!FI60_E6.unit := #Ounce
!insert (FI60_E6, AY1_E6) into FoodItemAllergen

!new FoodItem('FI61_E6')
!FI61_E6.number := 61
!FI61_E6.description := 'Condensed milk ribbon'
!FI61_E6.purchaseFlag := true
!FI61_E6.unit := #Gram
!insert (FI61_E6, AY2_E6) into FoodItemAllergen

!new FoodItem('FI62_E6')
!FI62_E6.number := 62
!FI62_E6.description := 'Toasted almond granules'
!FI62_E6.purchaseFlag := true
!FI62_E6.unit := #Gram
!insert (FI62_E6, AY3_E6) into FoodItemAllergen

!new FoodItem('FI63_E6')
!FI63_E6.number := 63
!FI63_E6.description := 'Anchovy essence'
!FI63_E6.purchaseFlag := false
!FI63_E6.unit := #Ounce
!insert (FI63_E6, AY4_E6) into FoodItemAllergen

!new FoodItem('FI64_E6')
!FI64_E6.number := 64
!FI64_E6.description := 'Sea-salt foam (no allergens)'
!FI64_E6.purchaseFlag := false
!FI64_E6.unit := #Ounce

!new MenuItem('MI120')
!MI120.description := 'Allergen Spectrum Spoon'
!MI120.prepTime := 5.0
!MI120.classification := #Apetizer
!insert (MI120, CH83) into MenuItemChef
!insert (MI120, FI60_E6) into MenuItemFoodItem
!insert (MI120, FI61_E6) into MenuItemFoodItem
!insert (MI120, FI62_E6) into MenuItemFoodItem
!insert (MI120, FI63_E6) into MenuItemFoodItem

!new MenuItem('MI121')
!MI121.description := 'Salt-Foam Water (tiny)'
!MI121.prepTime := 0.3
!MI121.classification := #Beverage
!insert (MI121, CH84) into MenuItemChef
!insert (MI121, FI64_E6) into MenuItemFoodItem

!new MenuItem('MI122')
!MI122.description := 'Anchovy-Butter Crumb Bowl'
!MI122.prepTime := 8.0
!MI122.classification := #Main
!insert (MI122, CH85) into MenuItemChef
!insert (MI122, FI60_E6) into MenuItemFoodItem
!insert (MI122, FI61_E6) into MenuItemFoodItem
!insert (MI122, FI63_E6) into MenuItemFoodItem

!new MenuItem('MI123')
!MI123.description := 'Milk Ribbon on Almond Snow'
!MI123.prepTime := 2.0
!MI123.classification := #Dessert
!insert (MI123, CH83) into MenuItemChef
!insert (MI123, FI61_E6) into MenuItemFoodItem
!insert (MI123, FI62_E6) into MenuItemFoodItem

!new MenuItem('MI124')
!MI124.description := 'Crumb & Salt Minimal Plate'
!MI124.prepTime := 1.0
!MI124.classification := #Main
!insert (MI124, CH85) into MenuItemChef
!insert (MI124, FI60_E6) into MenuItemFoodItem
!insert (MI124, FI64_E6) into MenuItemFoodItem

!new Banquet('BR36')
!BR36.time := Time('03:03')
!BR36.date := Date('2026-04-01')
!BR36.numberPeople := 4
!BR36.name := 'Bastian Neumann'
!BR36.phoneNumber := '+49-30-555-0404'
!BR36.number := 4041
!BR36.groupName := 'April Night Micro-Banquet'
!BR36.paymentMethod := #CreditCard
!BR36.busService := true
!insert (R46, BR36) into RestaurantReservation
!insert (BR36, C52) into ReservationCustomer
!insert (BR36, W104) into ReservationWaiter
!insert (BR36, W105) into ReservationWaiter

!new Table('T910_ACD')
!T910_ACD.number := 910
!T910_ACD.description := 'Capsule seat A'
!T910_ACD.capacity := 1
!insert (BR36, T910_ACD) into ReservationTable

!new Table('T911_ACD')
!T911_ACD.number := 911
!T911_ACD.description := 'Capsule seat B'
!T911_ACD.capacity := 1
!insert (BR36, T911_ACD) into ReservationTable

!new Table('T912_ACD')
!T912_ACD.number := 912
!T912_ACD.description := 'Capsule seat C'
!T912_ACD.capacity := 1
!insert (BR36, T912_ACD) into ReservationTable

!new Table('T913_ACD')
!T913_ACD.number := 913
!T913_ACD.description := 'Capsule seat D'
!T913_ACD.capacity := 1
!insert (BR36, T913_ACD) into ReservationTable

!new BusDriver('BD47')
!BD47.name := 'Rina Sokolov'
!BD47.dateOfBirth := Date('1992-02-02')
!BD47.phoneNumber := '+972-54-555-0199'
!BD47.driverLicenseNr := 'IL-DL-920202'
!insert (BR36, BD47) into BanquetBusDriver

!new ItemOrder('IO3401')
!IO3401.time := Time('02:50')
!insert (BR36, IO3401) into ReservationItemOrdered
!insert (IO3401, MI120) into ItemOrderMenuItem

!new ItemOrder('IO3402')
!IO3402.time := Time('02:51')
!insert (BR36, IO3402) into ReservationItemOrdered
!insert (IO3402, MI121) into ItemOrderMenuItem

!new ItemOrder('IO3403')
!IO3403.time := Time('02:52')
!insert (BR36, IO3403) into ReservationItemOrdered
!insert (IO3403, MI123) into ItemOrderMenuItem

!new Individual('IR53')
!IR53.time := Time('20:20')
!IR53.date := Date('2026-04-01')
!IR53.numberPeople := 2
!IR53.name := 'Marisol Vega'
!IR53.phoneNumber := '+34-622-555-020'
!IR53.number := 2020
!IR53.seating := #Inside
!IR53.smoking := #NonSmoking
!insert (R47, IR53) into RestaurantReservation
!insert (IR53, C53) into ReservationCustomer
!insert (IR53, W106) into ReservationWaiter

!new Table('T914_OBB')
!T914_OBB.number := 914
!T914_OBB.description := 'Two-seat counter slot'
!T914_OBB.capacity := 2
!insert (IR53, T914_OBB) into ReservationTable

!new Individual('IR54')
!IR54.time := Time('09:09')
!IR54.date := Date('2026-04-02')
!IR54.numberPeople := 1
!IR54.name := 'Walk-in: Nova'
!IR54.phoneNumber := '+1-000-909-0909'
!IR54.number := 909
!IR54.seating := #Patio
!IR54.smoking := #Smoking
!insert (IR54, W104) into ReservationWaiter

!new Table('T915_FREE')
!T915_FREE.number := 915
!T915_FREE.description := 'Patio platform table reserved for one'
!T915_FREE.capacity := 10
!insert (IR54, T915_FREE) into ReservationTable

!new ItemOrder('IO3404')
!IO3404.time := Time('09:08')
!insert (IR54, IO3404) into ReservationItemOrdered
!insert (IO3404, MI124) into ItemOrderMenuItem

!new DietaryRequirement('DR38')
!DR38.diet := #Vegetarian

!new ReportedAllergy('RA38')
!RA38.allergen := #Seafood
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 241 | 0.00% |
| Multiplicities Errors | 0 | 52 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 16 | 0.00% |
| Phones | 0 | 16 | 0.00% |

## Category invalid
```
!new Restaurant('R34')
!R34.name := 'Harbor Spice Kitchen'

!new Owner('O74')
!O74.name := 'Mei Lin Tan'
!O74.percentageShares := 51
!insert (R34, O74) into RestaurantOwner

!new Owner('O75')
!O75.name := 'Arjun Menon'
!O75.percentageShares := 49
!insert (R34, O75) into RestaurantOwner

!new HeadWaiter('HW32')
!HW32.name := 'Daniel Wong'
!HW32.dateOfBirth := Date('1986-02-25')
!HW32.phoneNumber := '+65 8123 4000'

!new Waiter('W71')
!W71.name := 'Alicia Reyes'
!W71.dateOfBirth := Date('1998-06-09')
!W71.phoneNumber := '+65 8123 4001'
!W71.spokenLanguage := #English
!insert (HW32, W71) into HeadWaiterWaiter

!new Waiter('W72')
!W72.name := 'Giorgio Rinaldi'
!W72.dateOfBirth := Date('1993-12-17')
!W72.phoneNumber := '+65 8123 4002'
!W72.spokenLanguage := #Italian
!insert (HW32, W72) into HeadWaiterWaiter

!new Cook('K53')
!K53.name := 'Nur Aisyah'
!K53.dateOfBirth := Date('1981-08-03')
!K53.phoneNumber := '+65 8123 5000'
!K53.yearsOfExperience := 5

!new Cook('K54')
!K54.name := 'Nur Aisyah'
!K54.dateOfBirth := Date('1981-08-03')
!K54.phoneNumber := '+65 8123 5000'
!K54.yearsOfExperience := 5

!new Chef('CH57')
!CH57.name := 'Wei Jun Lim'
!CH57.dateOfBirth := Date('1989-04-10')
!CH57.phoneNumber := '+65 8123 6000'
!insert (CH57, K53) into ChefCook

!new Chef('CH58')
!CH58.name := 'Priya Iyer'
!CH58.dateOfBirth := Date('1990-01-29')
!CH58.phoneNumber := '+65 8123 6001'
!insert (CH58, K54) into ChefCook

!new Table('T51_HSK')
!T51_HSK.number := 51
!T51_HSK.description := 'Inside two-top by the herb wall'
!T51_HSK.capacity := 2

!new Table('T52_HSK')
!T52_HSK.number := 52
!T52_HSK.description := 'Corner four-top with view of the open kitchen'
!T52_HSK.capacity := 4

!new RegularCustomer('C36')
!C36.name := 'Ethan Carter'
!C36.prefferedLanguage := #English

!new Individual('IR36')
!IR36.time := Time('18:30')
!IR36.date := Date('2026-10-18')
!IR36.numberPeople := 2
!IR36.name := 'Ethan Carter'
!IR36.phoneNumber := '+1 415 555 0199'
!IR36.number := 30021
!IR36.seating := #Inside
!IR36.smoking := #NonSmoking
!insert (R34, IR36) into RestaurantReservation
!insert (IR36, C36) into ReservationCustomer
!insert (IR36, W71) into ReservationWaiter
!insert (IR36, T51_HSK) into ReservationTable

!new Banquet('BR26')
!BR26.time := Time('20:00')
!BR26.date := Date('2026-10-18')
!BR26.numberPeople := 4
!BR26.name := 'Orchid Studio'
!BR26.phoneNumber := '+65 6777 1212'
!BR26.number := 30022
!BR26.groupName := 'Orchid Studio Project Wrap-up'
!BR26.paymentMethod := #CreditCard
!BR26.busService := false
!insert (R34, BR26) into RestaurantReservation
!insert (BR26, W71) into ReservationWaiter
!insert (BR26, W72) into ReservationWaiter
!insert (BR26, T52_HSK) into ReservationTable

!new Allergen('A6S_HSK')
!A6S_HSK.type := #Seafood

!new Allergen('A6G_HSK')
!A6G_HSK.type := #Gluten

!new Allergen('A6N_HSK')
!A6N_HSK.type := #Nuts

!new Allergen('A6L_HSK')
!A6L_HSK.type := #Lactose

!new FoodItem('F1501')
!F1501.number := 610
!F1501.description := 'Crab meat (fresh)'
!F1501.purchaseFlag := true
!F1501.unit := #Pound
!insert (F1501, A6S_HSK) into FoodItemAllergen

!new FoodItem('F1502')
!F1502.number := 611
!F1502.description := 'Wheat linguine'
!F1502.purchaseFlag := true
!F1502.unit := #Pound
!insert (F1502, A6G_HSK) into FoodItemAllergen

!new FoodItem('F1503')
!F1503.number := 612
!F1503.description := 'Peanut sambal base'
!F1503.purchaseFlag := true
!F1503.unit := #Ounce
!insert (F1503, A6N_HSK) into FoodItemAllergen

!new FoodItem('F1504')
!F1504.number := 613
!F1504.description := 'Heavy cream'
!F1504.purchaseFlag := true
!F1504.unit := #Ounce
!insert (F1504, A6L_HSK) into FoodItemAllergen

!new MenuItem('MI85')
!MI85.description := 'Chili crab linguine'
!MI85.prepTime := 22.0
!MI85.classification := #Main
!insert (MI85, CH57) into MenuItemChef
!insert (MI85, F1501) into MenuItemFoodItem
!insert (MI85, F1502) into MenuItemFoodItem

!new MenuItem('MI86')
!MI86.description := 'Sambal peanut noodles (small plate)'
!MI86.prepTime := 12.0
!MI86.classification := #Apetizer
!insert (MI86, CH58) into MenuItemChef
!insert (MI86, F1502) into MenuItemFoodItem
!insert (MI86, F1503) into MenuItemFoodItem

!new MenuItem('MI87')
!MI87.description := 'Creamy pandan pot (mini dessert)'
!MI87.prepTime := 10.0
!MI87.classification := #Dessert
!insert (MI87, CH58) into MenuItemChef
!insert (MI87, F1504) into MenuItemFoodItem

!new MenuItem('MI88')
!MI88.description := 'Signature Laksa Two-Ways tasting bowl'
!MI88.prepTime := 18.0
!MI88.classification := #Main
!insert (MI88, CH57) into MenuItemChef
!insert (MI88, CH58) into MenuItemChef
!insert (MI88, F1501) into MenuItemFoodItem
!insert (MI88, F1503) into MenuItemFoodItem

!new ItemOrder('IO2606')
!IO2606.time := Time('18:45')
!insert (IR36, IO2606) into ReservationItemOrdered
!insert (IO2606, MI85) into ItemOrderMenuItem

!new ItemOrder('IO2607')
!IO2607.time := Time('19:10')
!insert (IR36, IO2607) into ReservationItemOrdered
!insert (IO2607, MI87) into ItemOrderMenuItem

!new ItemOrder('IO2608')
!IO2608.time := Time('20:20')
!insert (BR26, IO2608) into ReservationItemOrdered
!insert (IO2608, MI88) into ItemOrderMenuItem

!new ItemOrder('IO2609')
!IO2609.time := Time('20:25')
!insert (BR26, IO2609) into ReservationItemOrdered
!insert (IO2609, MI86) into ItemOrderMenuItem

!new DietaryRequirement('DR27')
!DR27.diet := #Halal

!new ReportedAllergy('RA27')
!RA27.allergen := #Seafood
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 38 | 2.63% |
| Invariants Errors (Not included on General) | 0 | 4 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `MenuItemChef':
  Object `MI88' of class `MenuItem' is connected to 2 objects of class `Chef'
  at association end `designedBy' but the multiplicity is specified as `1'.
```

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 9 | 0.00% |
| Phones | 0 | 9 | 0.00% |

## Generation 6 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 1275 | 0.00% |
| Multiplicities Errors | 0 | 244 | 0.00% |
| Invariants Errors | 0 | 16 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 38 | 2.63% |
| Invariants Errors (Not included on General) | 0 | 4 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `MenuItemChef':
  Object `MI88' of class `MenuItem' is connected to 2 objects of class `Chef'
  at association end `designedBy' but the multiplicity is specified as `1'.
```

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 82 | 0.00% |
| Phones | 0 | 82 | 0.00% |

# Summary for all generations
| Summary | Value | 
|---|---| 
| Model | GPT_5_2 | 
| Type | CoT | 
| System | restaurant | 
| Number of generations | 6 | 

| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 7732 | 0.00% |
| Multiplicities Errors | 0 | 1497 | 0.00% |
| Invariants Errors | 0 | 96 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 12 | 203 | 5.91% |
| Invariants Errors (Not included on General) | 1 | 24 | 4.17% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `ChefCook':
  Object `K4' of class `Cook' is connected to 2 objects of class `Chef'
  at association end `underSupervisionOf' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `ReservationTable':
  Object `T5' of class `Table' is connected to 2 objects of class `Reservation'
  at association end `reservation' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `ChefCook':
  Object `K12' of class `Cook' is connected to 2 objects of class `Chef'
  at association end `underSupervisionOf' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `ReservationTable':
  Object `T2_TDF' of class `Table' is connected to 0 objects of class `Reservation'
  at association end `reservation' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `BanquetBusDriver':
  Object `BD8' of class `BusDriver' is connected to 2 objects of class `Banquet'
  at association end `banquet' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `ReservationTable':
  Object `IR14' of class `Individual' is connected to 0 objects of class `Table'
  at association end `assignedTo' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `ReservationWaiter':
  Object `IR14' of class `Individual' is connected to 0 objects of class `Waiter'
  at association end `servedBy' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `ChefCook':
  Object `CH29' of class `Chef' is connected to 0 objects of class `Cook'
  at association end `supervises' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `ChefCook':
  Object `K26' of class `Cook' is connected to 0 objects of class `Chef'
  at association end `underSupervisionOf' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `ReservationTable':
  Object `T31_DPC' of class `Table' is connected to 0 objects of class `Reservation'
  at association end `reservation' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `HeadWaiterWaiter':
  Object `W47' of class `Waiter' is connected to 2 objects of class `HeadWaiter'
  at association end `headWaiter' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `MenuItemChef':
  Object `MI88' of class `MenuItem' is connected to 2 objects of class `Chef'
  at association end `designedBy' but the multiplicity is specified as `1'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (2) `Reservation::TablesCapacityGreaterThanPeople': FAILED.
```

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 463 | 0.00% |
| Phones | 0 | 462 | 0.00% |

