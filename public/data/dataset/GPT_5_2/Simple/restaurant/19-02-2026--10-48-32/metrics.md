# Generation 1
```
!new Restaurant('rest1')
!rest1.name := 'Bistro Verde'

!new Restaurant('rest2')
!rest2.name := 'Ocean Grill'

!new Owner('own1')
!own1.name := 'Alice Romano'
!own1.percentageShares := 60

!new Owner('own2')
!own2.name := 'Marco Bianchi'
!own2.percentageShares := 40

!new Owner('own3')
!own3.name := 'Linda Chen'
!own3.percentageShares := 100

!insert (rest1, own1) into RestaurantOwner
!insert (rest1, own2) into RestaurantOwner
!insert (rest2, own3) into RestaurantOwner

!new HeadWaiter('hw1')
!hw1.name := 'Samuel Price'
!hw1.dateOfBirth := Date('1985-06-12')
!hw1.phoneNumber := '555-0100'

!new Waiter('w1')
!w1.name := 'Eva Martinez'
!w1.dateOfBirth := Date('1998-03-02')
!w1.phoneNumber := '555-0101'
!w1.spokenLanguage := #Spanish

!new Waiter('w2')
!w2.name := 'Jonas Keller'
!w2.dateOfBirth := Date('1992-11-19')
!w2.phoneNumber := '555-0102'
!w2.spokenLanguage := #German

!insert (hw1, w1) into HeadWaiterWaiter
!insert (hw1, w2) into HeadWaiterWaiter

!new HeadWaiter('hw2')
!hw2.name := 'Giulia Conti'
!hw2.dateOfBirth := Date('1989-02-08')
!hw2.phoneNumber := '555-0200'

!new Waiter('w3')
!w3.name := 'Daniela Rossi'
!w3.dateOfBirth := Date('1996-07-14')
!w3.phoneNumber := '555-0201'
!w3.spokenLanguage := #Italian

!new Waiter('w4')
!w4.name := 'Peter Wilson'
!w4.dateOfBirth := Date('1990-12-03')
!w4.phoneNumber := '555-0202'
!w4.spokenLanguage := #English

!insert (hw2, w3) into HeadWaiterWaiter
!insert (hw2, w4) into HeadWaiterWaiter

!new Chef('chef1')
!chef1.name := 'Antoine Dubois'
!chef1.dateOfBirth := Date('1978-01-21')
!chef1.phoneNumber := '555-0301'

!new Cook('cook1')
!cook1.name := 'Mina Patel'
!cook1.dateOfBirth := Date('1988-09-30')
!cook1.phoneNumber := '555-0311'
!cook1.yearsOfExperience := 10

!new Cook('cook2')
!cook2.name := 'Robert King'
!cook2.dateOfBirth := Date('1994-04-17')
!cook2.phoneNumber := '555-0312'
!cook2.yearsOfExperience := 3

!insert (chef1, cook1) into ChefCook
!insert (chef1, cook2) into ChefCook

!new Chef('chef2')
!chef2.name := 'Noor Al-Hassan'
!chef2.dateOfBirth := Date('1981-05-05')
!chef2.phoneNumber := '555-0401'

!new Cook('cook3')
!cook3.name := 'Hiro Tanaka'
!cook3.dateOfBirth := Date('1991-10-11')
!cook3.phoneNumber := '555-0411'
!cook3.yearsOfExperience := 7

!insert (chef2, cook3) into ChefCook

!new Allergen('algLactose')
!algLactose.type := #Lactose

!new Allergen('algGluten')
!algGluten.type := #Gluten

!new Allergen('algNuts')
!algNuts.type := #Nuts

!new Allergen('algSeafood')
!algSeafood.type := #Seafood

!new FoodItem('fiTomatoes')
!fiTomatoes.number := 101
!fiTomatoes.description := 'Roma tomatoes'
!fiTomatoes.purchaseFlag := true
!fiTomatoes.unit := #Pound

!new FoodItem('fiBaguette')
!fiBaguette.number := 102
!fiBaguette.description := 'Baguette'
!fiBaguette.purchaseFlag := true
!fiBaguette.unit := #Dozen

!new FoodItem('fiParmesan')
!fiParmesan.number := 103
!fiParmesan.description := 'Parmesan cheese'
!fiParmesan.purchaseFlag := true
!fiParmesan.unit := #Ounce

!new FoodItem('fiRice')
!fiRice.number := 104
!fiRice.description := 'Arborio rice'
!fiRice.purchaseFlag := true
!fiRice.unit := #Pound

!new FoodItem('fiMushrooms')
!fiMushrooms.number := 105
!fiMushrooms.description := 'Cremini mushrooms'
!fiMushrooms.purchaseFlag := true
!fiMushrooms.unit := #Pound

!new FoodItem('fiEggs')
!fiEggs.number := 106
!fiEggs.description := 'Eggs'
!fiEggs.purchaseFlag := true
!fiEggs.unit := #Dozen

!new FoodItem('fiMascarpone')
!fiMascarpone.number := 107
!fiMascarpone.description := 'Mascarpone'
!fiMascarpone.purchaseFlag := true
!fiMascarpone.unit := #Ounce

!new FoodItem('fiSalmon')
!fiSalmon.number := 108
!fiSalmon.description := 'Atlantic salmon fillet'
!fiSalmon.purchaseFlag := true
!fiSalmon.unit := #Pound

!new FoodItem('fiLemon')
!fiLemon.number := 109
!fiLemon.description := 'Lemons'
!fiLemon.purchaseFlag := true
!fiLemon.unit := #Dozen

!new FoodItem('fiSugar')
!fiSugar.number := 110
!fiSugar.description := 'Granulated sugar'
!fiSugar.purchaseFlag := true
!fiSugar.unit := #Pound

!new FoodItem('fiAlmonds')
!fiAlmonds.number := 112
!fiAlmonds.description := 'Sliced almonds'
!fiAlmonds.purchaseFlag := true
!fiAlmonds.unit := #Ounce

!insert (fiBaguette, algGluten) into FoodItemAllergen
!insert (fiParmesan, algLactose) into FoodItemAllergen
!insert (fiMascarpone, algLactose) into FoodItemAllergen
!insert (fiSalmon, algSeafood) into FoodItemAllergen
!insert (fiAlmonds, algNuts) into FoodItemAllergen

!new MenuItem('miBruschetta')
!miBruschetta.description := 'Bruschetta with tomato and basil'
!miBruschetta.prepTime := 8.0
!miBruschetta.classification := #Apetizer

!new MenuItem('miRisotto')
!miRisotto.description := 'Mushroom risotto'
!miRisotto.prepTime := 18.0
!miRisotto.classification := #Main

!new MenuItem('miTiramisu')
!miTiramisu.description := 'Classic tiramisu'
!miTiramisu.prepTime := 12.0
!miTiramisu.classification := #Dessert

!new MenuItem('miSalmonPlate')
!miSalmonPlate.description := 'Grilled salmon with lemon'
!miSalmonPlate.prepTime := 20.0
!miSalmonPlate.classification := #Main

!new MenuItem('miLemonade')
!miLemonade.description := 'Fresh lemonade'
!miLemonade.prepTime := 2.0
!miLemonade.classification := #Beverage

!insert (miBruschetta, chef1) into MenuItemChef
!insert (miRisotto, chef1) into MenuItemChef
!insert (miTiramisu, chef1) into MenuItemChef
!insert (miSalmonPlate, chef2) into MenuItemChef
!insert (miLemonade, chef2) into MenuItemChef

!insert (miBruschetta, fiTomatoes) into MenuItemFoodItem
!insert (miBruschetta, fiBaguette) into MenuItemFoodItem
!insert (miBruschetta, fiParmesan) into MenuItemFoodItem

!insert (miRisotto, fiRice) into MenuItemFoodItem
!insert (miRisotto, fiMushrooms) into MenuItemFoodItem
!insert (miRisotto, fiParmesan) into MenuItemFoodItem

!insert (miTiramisu, fiEggs) into MenuItemFoodItem
!insert (miTiramisu, fiMascarpone) into MenuItemFoodItem
!insert (miTiramisu, fiSugar) into MenuItemFoodItem
!insert (miTiramisu, fiAlmonds) into MenuItemFoodItem

!insert (miSalmonPlate, fiSalmon) into MenuItemFoodItem
!insert (miSalmonPlate, fiLemon) into MenuItemFoodItem

!insert (miLemonade, fiLemon) into MenuItemFoodItem
!insert (miLemonade, fiSugar) into MenuItemFoodItem

!new RegularCustomer('cust1')
!cust1.name := 'Sophia Hart'
!cust1.prefferedLanguage := #English

!new RegularCustomer('cust2')
!cust2.name := 'Hector Ruiz'
!cust2.prefferedLanguage := #Spanish

!new RegularCustomer('cust3')
!cust3.name := 'Olivia Grant'
!cust3.prefferedLanguage := #English

!new Individual('res1')
!res1.time := Time('18:30')
!res1.date := Date('2026-02-20')
!res1.numberPeople := 2
!res1.name := 'Sophia Hart'
!res1.phoneNumber := '555-1001'
!res1.number := 2001
!res1.seating := #Inside
!res1.smoking := #NonSmoking

!insert (rest1, res1) into RestaurantReservation
!insert (res1, cust1) into ReservationCustomer
!insert (res1, w1) into ReservationWaiter

!new Table('tRes1A')
!tRes1A.number := 11
!tRes1A.description := 'Window two-top'
!tRes1A.capacity := 2
!insert (res1, tRes1A) into ReservationTable

!new ItemOrder('io1')
!io1.time := Time('18:45')
!insert (res1, io1) into ReservationItemOrdered
!insert (io1, miBruschetta) into ItemOrderMenuItem

!new ItemOrder('io2')
!io2.time := Time('19:05')
!insert (res1, io2) into ReservationItemOrdered
!insert (io2, miRisotto) into ItemOrderMenuItem

!new Individual('res2')
!res2.time := Time('19:15')
!res2.date := Date('2026-02-20')
!res2.numberPeople := 4
!res2.name := 'Hector Ruiz'
!res2.phoneNumber := '555-1002'
!res2.number := 2002
!res2.seating := #Patio
!res2.smoking := #Smoking

!insert (rest1, res2) into RestaurantReservation
!insert (res2, cust2) into ReservationCustomer
!insert (res2, w1) into ReservationWaiter
!insert (res2, w2) into ReservationWaiter

!new Table('tRes2A')
!tRes2A.number := 21
!tRes2A.description := 'Patio table (2 seats)'
!tRes2A.capacity := 2
!insert (res2, tRes2A) into ReservationTable

!new Table('tRes2B')
!tRes2B.number := 22
!tRes2B.description := 'Patio table (2 seats)'
!tRes2B.capacity := 2
!insert (res2, tRes2B) into ReservationTable

!new ItemOrder('io3')
!io3.time := Time('19:35')
!insert (res2, io3) into ReservationItemOrdered
!insert (io3, miSalmonPlate) into ItemOrderMenuItem

!new ItemOrder('io4')
!io4.time := Time('19:50')
!insert (res2, io4) into ReservationItemOrdered
!insert (io4, miLemonade) into ItemOrderMenuItem

!new Banquet('banq1')
!banq1.time := Time('12:00')
!banq1.date := Date('2026-03-05')
!banq1.numberPeople := 30
!banq1.name := 'Olivia Grant'
!banq1.phoneNumber := '555-2000'
!banq1.number := 3001
!banq1.groupName := 'Tech Summit Lunch'
!banq1.paymentMethod := #CreditCard
!banq1.busService := true

!insert (rest2, banq1) into RestaurantReservation
!insert (banq1, cust3) into ReservationCustomer
!insert (banq1, w3) into ReservationWaiter
!insert (banq1, w4) into ReservationWaiter

!new Table('tBanq1A')
!tBanq1A.number := 51
!tBanq1A.description := 'Banquet table A'
!tBanq1A.capacity := 10
!insert (banq1, tBanq1A) into ReservationTable

!new Table('tBanq1B')
!tBanq1B.number := 52
!tBanq1B.description := 'Banquet table B'
!tBanq1B.capacity := 10
!insert (banq1, tBanq1B) into ReservationTable

!new Table('tBanq1C')
!tBanq1C.number := 53
!tBanq1C.description := 'Banquet table C'
!tBanq1C.capacity := 10
!insert (banq1, tBanq1C) into ReservationTable

!new BusDriver('bd1')
!bd1.name := 'Carl Jensen'
!bd1.dateOfBirth := Date('1970-09-09')
!bd1.phoneNumber := '555-3000'
!bd1.driverLicenseNr := 'D-8839201'
!insert (banq1, bd1) into BanquetBusDriver

!new ItemOrder('io5')
!io5.time := Time('12:10')
!insert (banq1, io5) into ReservationItemOrdered
!insert (io5, miSalmonPlate) into ItemOrderMenuItem

!new ItemOrder('io6')
!io6.time := Time('12:10')
!insert (banq1, io6) into ReservationItemOrdered
!insert (io6, miLemonade) into ItemOrderMenuItem

!new ItemOrder('io7')
!io7.time := Time('12:25')
!insert (banq1, io7) into ReservationItemOrdered
!insert (io7, miTiramisu) into ItemOrderMenuItem

!new DietaryRequirement('dietReq1')
!dietReq1.diet := #Vegetarian

!new ReportedAllergy('repAlg1')
!repAlg1.allergen := #Gluten
```
## Generation 1 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 297 | 0.00% |
| Multiplicities Errors | 0 | 66 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 15 | 0.00% |
| Phones | 0 | 15 | 0.00% |

# Generation 2
```
!new Restaurant('rest3')
!rest3.name := 'Mountain Hearth'

!new Owner('own4')
!own4.name := 'Harper Singh'
!own4.percentageShares := 50

!new Owner('own5')
!own5.name := 'Elena Novak'
!own5.percentageShares := 30

!new Owner('own6')
!own6.name := 'Miguel Santos'
!own6.percentageShares := 20

!insert (rest3, own4) into RestaurantOwner
!insert (rest3, own5) into RestaurantOwner
!insert (rest3, own6) into RestaurantOwner

!new HeadWaiter('hw3')
!hw3.name := 'Nora Fields'
!hw3.dateOfBirth := Date('1987-08-26')
!hw3.phoneNumber := '555-4000'

!new Waiter('w5')
!w5.name := 'Aisha Khan'
!w5.dateOfBirth := Date('1999-01-09')
!w5.phoneNumber := '555-4001'
!w5.spokenLanguage := #English

!new Waiter('w6')
!w6.name := 'Luis Herrera'
!w6.dateOfBirth := Date('1995-05-23')
!w6.phoneNumber := '555-4002'
!w6.spokenLanguage := #Spanish

!insert (hw3, w5) into HeadWaiterWaiter
!insert (hw3, w6) into HeadWaiterWaiter

!new Manager('mgr1')
!mgr1.name := 'Donna Lee'
!mgr1.dateOfBirth := Date('1980-10-01')
!mgr1.phoneNumber := '555-4010'

!new Chef('chef3')
!chef3.name := 'Kenji Watanabe'
!chef3.dateOfBirth := Date('1976-03-18')
!chef3.phoneNumber := '555-4100'

!new Cook('cook4')
!cook4.name := 'Sara Ahmed'
!cook4.dateOfBirth := Date('1990-02-12')
!cook4.phoneNumber := '555-4101'
!cook4.yearsOfExperience := 14

!new Cook('cook5')
!cook5.name := 'Tom Becker'
!cook5.dateOfBirth := Date('1998-09-05')
!cook5.phoneNumber := '555-4102'
!cook5.yearsOfExperience := 0

!insert (chef3, cook4) into ChefCook
!insert (chef3, cook5) into ChefCook

!new Allergen('alg3Gluten')
!alg3Gluten.type := #Gluten

!new Allergen('alg3Nuts')
!alg3Nuts.type := #Nuts

!new FoodItem('fiFlour')
!fiFlour.number := 201
!fiFlour.description := 'All-purpose flour'
!fiFlour.purchaseFlag := true
!fiFlour.unit := #Pound

!new FoodItem('fiTortillaSheets')
!fiTortillaSheets.number := 202
!fiTortillaSheets.description := 'Tortilla sheets'
!fiTortillaSheets.purchaseFlag := true
!fiTortillaSheets.unit := #Sheet

!new FoodItem('fiBlackBeans')
!fiBlackBeans.number := 203
!fiBlackBeans.description := 'Black beans'
!fiBlackBeans.purchaseFlag := true
!fiBlackBeans.unit := #Gram

!new FoodItem('fiWalnuts')
!fiWalnuts.number := 204
!fiWalnuts.description := 'Walnuts'
!fiWalnuts.purchaseFlag := true
!fiWalnuts.unit := #Ounce

!new FoodItem('fiCoffeeBeans')
!fiCoffeeBeans.number := 205
!fiCoffeeBeans.description := 'Coffee beans'
!fiCoffeeBeans.purchaseFlag := true
!fiCoffeeBeans.unit := #Pound

!insert (fiFlour, alg3Gluten) into FoodItemAllergen
!insert (fiTortillaSheets, alg3Gluten) into FoodItemAllergen
!insert (fiWalnuts, alg3Nuts) into FoodItemAllergen

!new MenuItem('miBeanSoup')
!miBeanSoup.description := 'Smoky black bean soup'
!miBeanSoup.prepTime := 15.0
!miBeanSoup.classification := #Main

!new MenuItem('miWalnutBrownie')
!miWalnutBrownie.description := 'Warm walnut brownie'
!miWalnutBrownie.prepTime := 10.0
!miWalnutBrownie.classification := #Dessert

!new MenuItem('miCoffee')
!miCoffee.description := 'House-brewed coffee'
!miCoffee.prepTime := 3.0
!miCoffee.classification := #Beverage

!new MenuItem('miCrispTortilla')
!miCrispTortilla.description := 'Crisp tortilla chips'
!miCrispTortilla.prepTime := 5.0
!miCrispTortilla.classification := #Apetizer

!insert (miBeanSoup, chef3) into MenuItemChef
!insert (miWalnutBrownie, chef3) into MenuItemChef
!insert (miCoffee, chef3) into MenuItemChef
!insert (miCrispTortilla, chef3) into MenuItemChef

!insert (miBeanSoup, fiBlackBeans) into MenuItemFoodItem
!insert (miWalnutBrownie, fiFlour) into MenuItemFoodItem
!insert (miWalnutBrownie, fiWalnuts) into MenuItemFoodItem
!insert (miCoffee, fiCoffeeBeans) into MenuItemFoodItem
!insert (miCrispTortilla, fiTortillaSheets) into MenuItemFoodItem

!new Banquet('banq2')
!banq2.time := Time('17:00')
!banq2.date := Date('2026-04-12')
!banq2.numberPeople := 12
!banq2.name := 'Green Valley Club'
!banq2.phoneNumber := '555-5000'
!banq2.number := 5001
!banq2.groupName := 'Annual Board Dinner'
!banq2.paymentMethod := #Cash
!banq2.busService := false

!insert (rest3, banq2) into RestaurantReservation
!insert (banq2, w6) into ReservationWaiter

!new Table('tBanq2A')
!tBanq2A.number := 61
!tBanq2A.description := 'Private room table A'
!tBanq2A.capacity := 6
!insert (banq2, tBanq2A) into ReservationTable

!new Table('tBanq2B')
!tBanq2B.number := 62
!tBanq2B.description := 'Private room table B'
!tBanq2B.capacity := 6
!insert (banq2, tBanq2B) into ReservationTable

!new ItemOrder('ioBanq2_1')
!ioBanq2_1.time := Time('17:20')
!insert (banq2, ioBanq2_1) into ReservationItemOrdered
!insert (ioBanq2_1, miBeanSoup) into ItemOrderMenuItem

!new ItemOrder('ioBanq2_2')
!ioBanq2_2.time := Time('17:20')
!insert (banq2, ioBanq2_2) into ReservationItemOrdered
!insert (ioBanq2_2, miCoffee) into ItemOrderMenuItem

!new Individual('res3')
!res3.time := Time('08:15')
!res3.date := Date('2026-04-13')
!res3.numberPeople := 3
!res3.name := 'Walk-in Guest'
!res3.phoneNumber := '555-5001'
!res3.number := 5002
!res3.seating := #Inside
!res3.smoking := #NonSmoking

!insert (rest3, res3) into RestaurantReservation
!insert (res3, w5) into ReservationWaiter

!new Table('tRes3A')
!tRes3A.number := 12
!tRes3A.description := 'Booth near fireplace'
!tRes3A.capacity := 5
!insert (res3, tRes3A) into ReservationTable

!new ItemOrder('ioRes3_1')
!ioRes3_1.time := Time('08:25')
!insert (res3, ioRes3_1) into ReservationItemOrdered
!insert (ioRes3_1, miCoffee) into ItemOrderMenuItem

!new ItemOrder('ioRes3_2')
!ioRes3_2.time := Time('08:30')
!insert (res3, ioRes3_2) into ReservationItemOrdered
!insert (ioRes3_2, miCrispTortilla) into ItemOrderMenuItem

!new DietaryRequirement('dietReq2')
!dietReq2.diet := #Vegan

!new ReportedAllergy('repAlg2')
!repAlg2.allergen := #Nuts
```
## Generation 2 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 165 | 0.00% |
| Multiplicities Errors | 0 | 34 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 9 | 0.00% |
| Phones | 0 | 9 | 0.00% |

# Generation 3
```
!new Restaurant('rest4')
!rest4.name := 'Skyline Tapas'

!new Owner('own7')
!own7.name := 'Priya Nair'
!own7.percentageShares := 25
!new Owner('own8')
!own8.name := 'George Bennett'
!own8.percentageShares := 25
!new Owner('own9')
!own9.name := 'Sofia Alvarez'
!own9.percentageShares := 25
!new Owner('own10')
!own10.name := 'Tomasz Kowalski'
!own10.percentageShares := 25

!insert (rest4, own7) into RestaurantOwner
!insert (rest4, own8) into RestaurantOwner
!insert (rest4, own9) into RestaurantOwner
!insert (rest4, own10) into RestaurantOwner

!new HeadWaiter('hw4')
!hw4.name := 'Clara Nguyen'
!hw4.dateOfBirth := Date('1984-04-09')
!hw4.phoneNumber := '555-6000'

!new Waiter('w7')
!w7.name := 'Matteo Ricci'
!w7.dateOfBirth := Date('1997-06-30')
!w7.phoneNumber := '555-6001'
!w7.spokenLanguage := #Italian

!new Waiter('w8')
!w8.name := 'Lea Schneider'
!w8.dateOfBirth := Date('1993-01-27')
!w8.phoneNumber := '555-6002'
!w8.spokenLanguage := #German

!new Waiter('w9')
!w9.name := 'Camila Ortega'
!w9.dateOfBirth := Date('2000-09-15')
!w9.phoneNumber := '555-6003'
!w9.spokenLanguage := #Spanish

!insert (hw4, w7) into HeadWaiterWaiter
!insert (hw4, w8) into HeadWaiterWaiter
!insert (hw4, w9) into HeadWaiterWaiter

!new Chef('chef4')
!chef4.name := 'Isabella Moretti'
!chef4.dateOfBirth := Date('1979-12-01')
!chef4.phoneNumber := '555-6100'

!new Cook('cook6')
!cook6.name := 'Omar Haddad'
!cook6.dateOfBirth := Date('1989-07-07')
!cook6.phoneNumber := '555-6101'
!cook6.yearsOfExperience := 11

!new Cook('cook7')
!cook7.name := 'Julia Smirnova'
!cook7.dateOfBirth := Date('1996-02-22')
!cook7.phoneNumber := '555-6102'
!cook7.yearsOfExperience := 4

!insert (chef4, cook6) into ChefCook
!insert (chef4, cook7) into ChefCook

!new Chef('chef5')
!chef5.name := 'Patrick OConnell'
!chef5.dateOfBirth := Date('1983-05-16')
!chef5.phoneNumber := '555-6200'

!new Cook('cook8')
!cook8.name := 'Mai Tran'
!cook8.dateOfBirth := Date('1992-11-08')
!cook8.phoneNumber := '555-6201'
!cook8.yearsOfExperience := 8

!insert (chef5, cook8) into ChefCook

!new Allergen('alg4Seafood')
!alg4Seafood.type := #Seafood
!new Allergen('alg4Nuts')
!alg4Nuts.type := #Nuts
!new Allergen('alg4Lactose')
!alg4Lactose.type := #Lactose
!new Allergen('alg4Gluten')
!alg4Gluten.type := #Gluten

!new FoodItem('fiShrimp')
!fiShrimp.number := 301
!fiShrimp.description := 'Shrimp'
!fiShrimp.purchaseFlag := true
!fiShrimp.unit := #Pound

!new FoodItem('fiPeanuts')
!fiPeanuts.number := 302
!fiPeanuts.description := 'Roasted peanuts'
!fiPeanuts.purchaseFlag := true
!fiPeanuts.unit := #Ounce

!new FoodItem('fiMilk')
!fiMilk.number := 303
!fiMilk.description := 'Whole milk'
!fiMilk.purchaseFlag := true
!fiMilk.unit := #Ounce

!new FoodItem('fiRice')
!fiRice.number := 304
!fiRice.description := 'Short-grain rice'
!fiRice.purchaseFlag := true
!fiRice.unit := #Pound

!new FoodItem('fiSaffron')
!fiSaffron.number := 305
!fiSaffron.description := 'Saffron'
!fiSaffron.purchaseFlag := true
!fiSaffron.unit := #Gram

!new FoodItem('fiSparklingWater')
!fiSparklingWater.number := 306
!fiSparklingWater.description := 'Sparkling water'
!fiSparklingWater.purchaseFlag := true
!fiSparklingWater.unit := #Ounce

!new FoodItem('fiWheatCrackers')
!fiWheatCrackers.number := 307
!fiWheatCrackers.description := 'Wheat crackers'
!fiWheatCrackers.purchaseFlag := true
!fiWheatCrackers.unit := #Dozen

!insert (fiShrimp, alg4Seafood) into FoodItemAllergen
!insert (fiPeanuts, alg4Nuts) into FoodItemAllergen
!insert (fiMilk, alg4Lactose) into FoodItemAllergen
!insert (fiWheatCrackers, alg4Gluten) into FoodItemAllergen

!new MenuItem('miShrimpPaella')
!miShrimpPaella.description := 'Shrimp paella with saffron rice'
!miShrimpPaella.prepTime := 28.0
!miShrimpPaella.classification := #Main

!new MenuItem('miPeanutSkewers')
!miPeanutSkewers.description := 'Peanut satay skewers'
!miPeanutSkewers.prepTime := 14.0
!miPeanutSkewers.classification := #Apetizer

!new MenuItem('miGelato')
!miGelato.description := 'Vanilla gelato'
!miGelato.prepTime := 6.0
!miGelato.classification := #Dessert

!new MenuItem('miSparklingWater')
!miSparklingWater.description := 'Chilled sparkling water'
!miSparklingWater.prepTime := 1.0
!miSparklingWater.classification := #Beverage

!new MenuItem('miCrackers')
!miCrackers.description := 'Wheat crackers plate'
!miCrackers.prepTime := 2.0
!miCrackers.classification := #Apetizer

!insert (miShrimpPaella, chef4) into MenuItemChef
!insert (miPeanutSkewers, chef5) into MenuItemChef
!insert (miGelato, chef5) into MenuItemChef
!insert (miSparklingWater, chef4) into MenuItemChef
!insert (miCrackers, chef4) into MenuItemChef

!insert (miShrimpPaella, fiShrimp) into MenuItemFoodItem
!insert (miShrimpPaella, fiRice) into MenuItemFoodItem
!insert (miShrimpPaella, fiSaffron) into MenuItemFoodItem

!insert (miPeanutSkewers, fiPeanuts) into MenuItemFoodItem

!insert (miGelato, fiMilk) into MenuItemFoodItem

!insert (miSparklingWater, fiSparklingWater) into MenuItemFoodItem

!insert (miCrackers, fiWheatCrackers) into MenuItemFoodItem

!new BusDriver('bd2')
!bd2.name := 'Renee Carter'
!bd2.dateOfBirth := Date('1968-02-14')
!bd2.phoneNumber := '555-6300'
!bd2.driverLicenseNr := 'D-7712049'

!new BusDriver('bd3')
!bd3.name := 'Ahmed Farouk'
!bd3.dateOfBirth := Date('1975-09-28')
!bd3.phoneNumber := '555-6301'
!bd3.driverLicenseNr := 'D-5521980'

!new Banquet('banq3')
!banq3.time := Time('20:00')
!banq3.date := Date('2026-05-22')
!banq3.numberPeople := 45
!banq3.name := 'City Arts Foundation'
!banq3.phoneNumber := '555-7000'
!banq3.number := 7001
!banq3.groupName := 'Fundraising Gala Dinner'
!banq3.paymentMethod := #CreditCard
!banq3.busService := true

!insert (rest4, banq3) into RestaurantReservation
!insert (banq3, w7) into ReservationWaiter
!insert (banq3, w8) into ReservationWaiter
!insert (banq3, w9) into ReservationWaiter
!insert (banq3, bd2) into BanquetBusDriver
!insert (banq3, bd3) into BanquetBusDriver

!new Table('tGalaA')
!tGalaA.number := 81
!tGalaA.description := 'Gala table A'
!tGalaA.capacity := 20
!insert (banq3, tGalaA) into ReservationTable

!new Table('tGalaB')
!tGalaB.number := 82
!tGalaB.description := 'Gala table B'
!tGalaB.capacity := 15
!insert (banq3, tGalaB) into ReservationTable

!new Table('tGalaC')
!tGalaC.number := 83
!tGalaC.description := 'Gala table C'
!tGalaC.capacity := 10
!insert (banq3, tGalaC) into ReservationTable

!new ItemOrder('ioGala1')
!ioGala1.time := Time('20:15')
!insert (banq3, ioGala1) into ReservationItemOrdered
!insert (ioGala1, miCrackers) into ItemOrderMenuItem

!new ItemOrder('ioGala2')
!ioGala2.time := Time('20:40')
!insert (banq3, ioGala2) into ReservationItemOrdered
!insert (ioGala2, miShrimpPaella) into ItemOrderMenuItem

!new ItemOrder('ioGala3')
!ioGala3.time := Time('21:10')
!insert (banq3, ioGala3) into ReservationItemOrdered
!insert (ioGala3, miGelato) into ItemOrderMenuItem

!new RegularCustomer('cust4')
!cust4.name := 'Anika Vogel'
!cust4.prefferedLanguage := #German

!new Individual('res4')
!res4.time := Time('16:10')
!res4.date := Date('2026-05-23')
!res4.numberPeople := 1
!res4.name := 'Anika Vogel'
!res4.phoneNumber := '555-7001'
!res4.number := 7002
!res4.seating := #Patio
!res4.smoking := #NonSmoking

!insert (rest4, res4) into RestaurantReservation
!insert (res4, cust4) into ReservationCustomer
!insert (res4, w8) into ReservationWaiter

!new Table('tSolo1')
!tSolo1.number := 14
!tSolo1.description := 'Small patio table'
!tSolo1.capacity := 2
!insert (res4, tSolo1) into ReservationTable

!new ItemOrder('ioSolo1')
!ioSolo1.time := Time('16:20')
!insert (res4, ioSolo1) into ReservationItemOrdered
!insert (ioSolo1, miSparklingWater) into ItemOrderMenuItem

!new ReportedAllergy('repAlg3')
!repAlg3.allergen := #Seafood

!new DietaryRequirement('dietReq3')
!dietReq3.diet := #Kosher
```
## Generation 3 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 226 | 0.00% |
| Multiplicities Errors | 0 | 47 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 13 | 0.00% |
| Phones | 0 | 13 | 0.00% |

# Generation 4
```
!new Restaurant('rest5')
!rest5.name := 'Riverstone Diner'

!new Owner('own11')
!own11.name := 'Jordan Kim'
!own11.percentageShares := 55

!new Owner('own12')
!own12.name := 'Megan Taylor'
!own12.percentageShares := 45

!insert (rest5, own11) into RestaurantOwner
!insert (rest5, own12) into RestaurantOwner

!new Manager('mgr2')
!mgr2.name := 'Victor Alvarez'
!mgr2.dateOfBirth := Date('1982-09-13')
!mgr2.phoneNumber := '555-8008'

!new HeadWaiter('hw5')
!hw5.name := 'Rita Coleman'
!hw5.dateOfBirth := Date('1986-01-25')
!hw5.phoneNumber := '555-8000'

!new Waiter('w10')
!w10.name := 'Noah Stein'
!w10.dateOfBirth := Date('1997-08-04')
!w10.phoneNumber := '555-8001'
!w10.spokenLanguage := #English

!new Waiter('w11')
!w11.name := 'Lucia Moreno'
!w11.dateOfBirth := Date('1994-12-18')
!w11.phoneNumber := '555-8002'
!w11.spokenLanguage := #Spanish

!insert (hw5, w10) into HeadWaiterWaiter
!insert (hw5, w11) into HeadWaiterWaiter

!new Chef('chef6')
!chef6.name := 'Ethan Park'
!chef6.dateOfBirth := Date('1977-04-06')
!chef6.phoneNumber := '555-8100'

!new Cook('cook9')
!cook9.name := 'Paula Green'
!cook9.dateOfBirth := Date('1991-06-22')
!cook9.phoneNumber := '555-8101'
!cook9.yearsOfExperience := 2

!new Cook('cook10')
!cook10.name := 'Sergey Ivanov'
!cook10.dateOfBirth := Date('1989-03-11')
!cook10.phoneNumber := '555-8102'
!cook10.yearsOfExperience := 15

!insert (chef6, cook9) into ChefCook
!insert (chef6, cook10) into ChefCook

!new Allergen('alg5Gluten')
!alg5Gluten.type := #Gluten

!new FoodItem('fiFlour2')
!fiFlour2.number := 401
!fiFlour2.description := 'Bread flour'
!fiFlour2.purchaseFlag := true
!fiFlour2.unit := #Pound

!new FoodItem('fiMapleSyrup')
!fiMapleSyrup.number := 402
!fiMapleSyrup.description := 'Maple syrup'
!fiMapleSyrup.purchaseFlag := true
!fiMapleSyrup.unit := #Ounce

!new FoodItem('fiCoffeeBeans2')
!fiCoffeeBeans2.number := 403
!fiCoffeeBeans2.description := 'Espresso roast beans'
!fiCoffeeBeans2.purchaseFlag := true
!fiCoffeeBeans2.unit := #Pound

!insert (fiFlour2, alg5Gluten) into FoodItemAllergen

!new MenuItem('miPancakes')
!miPancakes.description := 'Buttermilk pancakes'
!miPancakes.prepTime := 9.0
!miPancakes.classification := #Main

!new MenuItem('miEspresso')
!miEspresso.description := 'Single espresso'
!miEspresso.prepTime := 1.5
!miEspresso.classification := #Beverage

!insert (miPancakes, chef6) into MenuItemChef
!insert (miEspresso, chef6) into MenuItemChef

!insert (miPancakes, fiFlour2) into MenuItemFoodItem
!insert (miPancakes, fiMapleSyrup) into MenuItemFoodItem
!insert (miEspresso, fiCoffeeBeans2) into MenuItemFoodItem

!new Individual('res5')
!res5.time := Time('07:30')
!res5.date := Date('2026-06-02')
!res5.numberPeople := 5
!res5.name := 'Jordan Blake'
!res5.phoneNumber := '555-8200'
!res5.number := 8001
!res5.seating := #Inside
!res5.smoking := #NonSmoking

!insert (rest5, res5) into RestaurantReservation
!insert (res5, w10) into ReservationWaiter

!new Table('tRes5A')
!tRes5A.number := 31
!tRes5A.description := 'Corner booth'
!tRes5A.capacity := 4
!insert (res5, tRes5A) into ReservationTable

!new Table('tRes5B')
!tRes5B.number := 32
!tRes5B.description := 'Pull-up side table'
!tRes5B.capacity := 2
!insert (res5, tRes5B) into ReservationTable

!new ItemOrder('ioRes5_1')
!ioRes5_1.time := Time('07:45')
!insert (res5, ioRes5_1) into ReservationItemOrdered
!insert (ioRes5_1, miPancakes) into ItemOrderMenuItem

!new RegularCustomer('cust5')
!cust5.name := 'Fatima El-Sayed'
!cust5.prefferedLanguage := #Italian

!new BusDriver('bd4')
!bd4.name := 'Garry Owens'
!bd4.dateOfBirth := Date('1969-11-30')
!bd4.phoneNumber := '555-8300'
!bd4.driverLicenseNr := 'D-9912073'

!new Banquet('banq4')
!banq4.time := Time('18:00')
!banq4.date := Date('2026-06-15')
!banq4.numberPeople := 80
!banq4.name := 'Fatima El-Sayed'
!banq4.phoneNumber := '555-8201'
!banq4.number := 8002
!banq4.groupName := 'Community Charity Night'
!banq4.paymentMethod := #Cash
!banq4.busService := true

!insert (rest5, banq4) into RestaurantReservation
!insert (banq4, cust5) into ReservationCustomer
!insert (banq4, w10) into ReservationWaiter
!insert (banq4, w11) into ReservationWaiter
!insert (banq4, bd4) into BanquetBusDriver

!new Table('tBanq4A')
!tBanq4A.number := 90
!tBanq4A.description := 'Hall table A'
!tBanq4A.capacity := 30
!insert (banq4, tBanq4A) into ReservationTable

!new Table('tBanq4B')
!tBanq4B.number := 91
!tBanq4B.description := 'Hall table B'
!tBanq4B.capacity := 30
!insert (banq4, tBanq4B) into ReservationTable

!new Table('tBanq4C')
!tBanq4C.number := 92
!tBanq4C.description := 'Hall table C'
!tBanq4C.capacity := 20
!insert (banq4, tBanq4C) into ReservationTable

!new ReportedAllergy('repAlg4')
!repAlg4.allergen := #Gluten

!new DietaryRequirement('dietReq4')
!dietReq4.diet := #Halal
```
## Generation 4 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 144 | 0.00% |
| Multiplicities Errors | 0 | 26 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 10 | 0.00% |
| Phones | 0 | 10 | 0.00% |

# Generation 5
```
!new Restaurant('rest6')
!rest6.name := 'Garden Noodle House'

!new Owner('own13')
!own13.name := 'Chloe Martin'
!own13.percentageShares := 10
!new Owner('own14')
!own14.name := 'Sandeep Gupta'
!own14.percentageShares := 15
!new Owner('own15')
!own15.name := 'Yuki Sato'
!own15.percentageShares := 25
!new Owner('own16')
!own16.name := 'Bruno Ferreira'
!own16.percentageShares := 20
!new Owner('own17')
!own17.name := 'Nadia Petrova'
!own17.percentageShares := 30

!insert (rest6, own13) into RestaurantOwner
!insert (rest6, own14) into RestaurantOwner
!insert (rest6, own15) into RestaurantOwner
!insert (rest6, own16) into RestaurantOwner
!insert (rest6, own17) into RestaurantOwner

!new HeadWaiter('hw6')
!hw6.name := 'Martin Shaw'
!hw6.dateOfBirth := Date('1983-03-03')
!hw6.phoneNumber := '555-9000'

!new Waiter('w12')
!w12.name := 'Sofia Delgado'
!w12.dateOfBirth := Date('1998-10-21')
!w12.phoneNumber := '555-9001'
!w12.spokenLanguage := #Spanish

!new Waiter('w13')
!w13.name := 'Lukas Brandt'
!w13.dateOfBirth := Date('1991-05-09')
!w13.phoneNumber := '555-9002'
!w13.spokenLanguage := #German

!new Waiter('w14')
!w14.name := 'Emily Scott'
!w14.dateOfBirth := Date('2001-01-17')
!w14.phoneNumber := '555-9003'
!w14.spokenLanguage := #English

!insert (hw6, w12) into HeadWaiterWaiter
!insert (hw6, w13) into HeadWaiterWaiter
!insert (hw6, w14) into HeadWaiterWaiter

!new Chef('chef7')
!chef7.name := 'Bao Nguyen'
!chef7.dateOfBirth := Date('1974-08-14')
!chef7.phoneNumber := '555-9100'

!new Cook('cook11')
!cook11.name := 'Hannah Brooks'
!cook11.dateOfBirth := Date('1990-12-12')
!cook11.phoneNumber := '555-9101'
!cook11.yearsOfExperience := 9

!new Cook('cook12')
!cook12.name := 'Diego Morales'
!cook12.dateOfBirth := Date('1996-06-01')
!cook12.phoneNumber := '555-9102'
!cook12.yearsOfExperience := 1

!insert (chef7, cook11) into ChefCook
!insert (chef7, cook12) into ChefCook

!new Chef('chef8')
!chef8.name := 'Francesca Rinaldi'
!chef8.dateOfBirth := Date('1980-02-26')
!chef8.phoneNumber := '555-9200'

!new Cook('cook13')
!cook13.name := 'Oleg Smirnov'
!cook13.dateOfBirth := Date('1988-09-19')
!cook13.phoneNumber := '555-9201'
!cook13.yearsOfExperience := 12

!insert (chef8, cook13) into ChefCook

!new Allergen('alg6Gluten')
!alg6Gluten.type := #Gluten
!new Allergen('alg6Nuts')
!alg6Nuts.type := #Nuts
!new Allergen('alg6Seafood')
!alg6Seafood.type := #Seafood

!new FoodItem('fiRiceNoodles')
!fiRiceNoodles.number := 501
!fiRiceNoodles.description := 'Rice noodles'
!fiRiceNoodles.purchaseFlag := true
!fiRiceNoodles.unit := #Pound

!new FoodItem('fiBeefSlices')
!fiBeefSlices.number := 502
!fiBeefSlices.description := 'Thin beef slices'
!fiBeefSlices.purchaseFlag := true
!fiBeefSlices.unit := #Pound

!new FoodItem('fiBrothBase')
!fiBrothBase.number := 503
!fiBrothBase.description := 'Beef broth base'
!fiBrothBase.purchaseFlag := true
!fiBrothBase.unit := #Ounce

!new FoodItem('fiFishSauce')
!fiFishSauce.number := 504
!fiFishSauce.description := 'Fish sauce'
!fiFishSauce.purchaseFlag := true
!fiFishSauce.unit := #Ounce

!new FoodItem('fiWrapperSheets')
!fiWrapperSheets.number := 505
!fiWrapperSheets.description := 'Wheat wrapper sheets'
!fiWrapperSheets.purchaseFlag := true
!fiWrapperSheets.unit := #Sheet

!new FoodItem('fiPeanuts6')
!fiPeanuts6.number := 506
!fiPeanuts6.description := 'Crushed peanuts'
!fiPeanuts6.purchaseFlag := true
!fiPeanuts6.unit := #Ounce

!new FoodItem('fiTofu')
!fiTofu.number := 507
!fiTofu.description := 'Firm tofu'
!fiTofu.purchaseFlag := true
!fiTofu.unit := #Pound

!new FoodItem('fiMangoes')
!fiMangoes.number := 508
!fiMangoes.description := 'Mangoes'
!fiMangoes.purchaseFlag := true
!fiMangoes.unit := #Dozen

!new FoodItem('fiStickyRice')
!fiStickyRice.number := 509
!fiStickyRice.description := 'Sticky rice'
!fiStickyRice.purchaseFlag := true
!fiStickyRice.unit := #Pound

!new FoodItem('fiTeaLeaves')
!fiTeaLeaves.number := 510
!fiTeaLeaves.description := 'Black tea leaves'
!fiTeaLeaves.purchaseFlag := true
!fiTeaLeaves.unit := #Gram

!insert (fiFishSauce, alg6Seafood) into FoodItemAllergen
!insert (fiWrapperSheets, alg6Gluten) into FoodItemAllergen
!insert (fiPeanuts6, alg6Nuts) into FoodItemAllergen

!new MenuItem('miSpringRolls6')
!miSpringRolls6.description := 'Fresh spring rolls with peanut dip'
!miSpringRolls6.prepTime := 9.0
!miSpringRolls6.classification := #Apetizer

!new MenuItem('miBeefPho6')
!miBeefPho6.description := 'Beef pho with rice noodles'
!miBeefPho6.prepTime := 22.0
!miBeefPho6.classification := #Main

!new MenuItem('miTofuBowl6')
!miTofuBowl6.description := 'Tofu noodle bowl'
!miTofuBowl6.prepTime := 16.0
!miTofuBowl6.classification := #Main

!new MenuItem('miMangoStickyRice6')
!miMangoStickyRice6.description := 'Mango sticky rice'
!miMangoStickyRice6.prepTime := 8.0
!miMangoStickyRice6.classification := #Dessert

!new MenuItem('miIcedTea6')
!miIcedTea6.description := 'Iced tea'
!miIcedTea6.prepTime := 2.5
!miIcedTea6.classification := #Beverage

!insert (miSpringRolls6, chef8) into MenuItemChef
!insert (miBeefPho6, chef7) into MenuItemChef
!insert (miTofuBowl6, chef7) into MenuItemChef
!insert (miMangoStickyRice6, chef8) into MenuItemChef
!insert (miIcedTea6, chef8) into MenuItemChef

!insert (miSpringRolls6, fiWrapperSheets) into MenuItemFoodItem
!insert (miSpringRolls6, fiPeanuts6) into MenuItemFoodItem

!insert (miBeefPho6, fiRiceNoodles) into MenuItemFoodItem
!insert (miBeefPho6, fiBeefSlices) into MenuItemFoodItem
!insert (miBeefPho6, fiBrothBase) into MenuItemFoodItem
!insert (miBeefPho6, fiFishSauce) into MenuItemFoodItem

!insert (miTofuBowl6, fiRiceNoodles) into MenuItemFoodItem
!insert (miTofuBowl6, fiTofu) into MenuItemFoodItem
!insert (miTofuBowl6, fiFishSauce) into MenuItemFoodItem

!insert (miMangoStickyRice6, fiMangoes) into MenuItemFoodItem
!insert (miMangoStickyRice6, fiStickyRice) into MenuItemFoodItem

!insert (miIcedTea6, fiTeaLeaves) into MenuItemFoodItem

!new RegularCustomer('cust6')
!cust6.name := 'Ramon Ibarra'
!cust6.prefferedLanguage := #Spanish

!new BusDriver('bd5')
!bd5.name := 'Keisha Morgan'
!bd5.dateOfBirth := Date('1972-07-22')
!bd5.phoneNumber := '555-9400'
!bd5.driverLicenseNr := 'D-3044551'

!new Banquet('banq5')
!banq5.time := Time('13:30')
!banq5.date := Date('2026-07-10')
!banq5.numberPeople := 22
!banq5.name := 'Northside Book Club'
!banq5.phoneNumber := '555-9300'
!banq5.number := 9001
!banq5.groupName := 'Summer Luncheon'
!banq5.paymentMethod := #Cash
!banq5.busService := true

!insert (rest6, banq5) into RestaurantReservation
!insert (banq5, w12) into ReservationWaiter
!insert (banq5, w13) into ReservationWaiter
!insert (banq5, bd5) into BanquetBusDriver

!new Table('tBanq5A')
!tBanq5A.number := 201
!tBanq5A.description := 'Long table A'
!tBanq5A.capacity := 12
!insert (banq5, tBanq5A) into ReservationTable

!new Table('tBanq5B')
!tBanq5B.number := 202
!tBanq5B.description := 'Long table B'
!tBanq5B.capacity := 10
!insert (banq5, tBanq5B) into ReservationTable

!new ItemOrder('ioBanq5_1')
!ioBanq5_1.time := Time('13:45')
!insert (banq5, ioBanq5_1) into ReservationItemOrdered
!insert (ioBanq5_1, miSpringRolls6) into ItemOrderMenuItem

!new ItemOrder('ioBanq5_2')
!ioBanq5_2.time := Time('14:05')
!insert (banq5, ioBanq5_2) into ReservationItemOrdered
!insert (ioBanq5_2, miBeefPho6) into ItemOrderMenuItem

!new ItemOrder('ioBanq5_3')
!ioBanq5_3.time := Time('14:25')
!insert (banq5, ioBanq5_3) into ReservationItemOrdered
!insert (ioBanq5_3, miIcedTea6) into ItemOrderMenuItem

!new Individual('res6')
!res6.time := Time('19:40')
!res6.date := Date('2026-07-11')
!res6.numberPeople := 6
!res6.name := 'Ramon Ibarra'
!res6.phoneNumber := '555-9301'
!res6.number := 9002
!res6.seating := #Patio
!res6.smoking := #NonSmoking

!insert (rest6, res6) into RestaurantReservation
!insert (res6, cust6) into ReservationCustomer
!insert (res6, w14) into ReservationWaiter

!new Table('tRes6A')
!tRes6A.number := 15
!tRes6A.description := 'Patio round table'
!tRes6A.capacity := 6
!insert (res6, tRes6A) into ReservationTable

!new ItemOrder('ioRes6_1')
!ioRes6_1.time := Time('19:55')
!insert (res6, ioRes6_1) into ReservationItemOrdered
!insert (ioRes6_1, miTofuBowl6) into ItemOrderMenuItem

!new ItemOrder('ioRes6_2')
!ioRes6_2.time := Time('20:10')
!insert (res6, ioRes6_2) into ReservationItemOrdered
!insert (ioRes6_2, miMangoStickyRice6) into ItemOrderMenuItem

!new Individual('res7')
!res7.time := Time('21:15')
!res7.date := Date('2026-07-11')
!res7.numberPeople := 2
!res7.name := 'Late Reservation'
!res7.phoneNumber := '555-9302'
!res7.number := 9003
!res7.seating := #Inside
!res7.smoking := #Smoking

!insert (rest6, res7) into RestaurantReservation
!insert (res7, w12) into ReservationWaiter

!new Table('tRes7A')
!tRes7A.number := 7
!tRes7A.description := 'Two-top near bar'
!tRes7A.capacity := 2
!insert (res7, tRes7A) into ReservationTable

!new DietaryRequirement('dietReq5')
!dietReq5.diet := #Vegan

!new ReportedAllergy('repAlg5')
!repAlg5.allergen := #Nuts
```
## Generation 5 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 255 | 0.00% |
| Multiplicities Errors | 0 | 54 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 13 | 0.00% |
| Phones | 0 | 13 | 0.00% |

# Generation 6
```
!new Restaurant('rest7')
!rest7.name := 'Harbor and Hearth'

!new Restaurant('rest8')
!rest8.name := 'Cedar Lounge'

!new Owner('own18')
!own18.name := 'Riley Thompson'
!own18.percentageShares := 50

!new Owner('own19')
!own19.name := 'Sabrina Cole'
!own19.percentageShares := 50

!new Owner('own20')
!own20.name := 'Ken Adams'
!own20.percentageShares := 50

!insert (rest7, own18) into RestaurantOwner
!insert (rest7, own19) into RestaurantOwner
!insert (rest8, own18) into RestaurantOwner
!insert (rest8, own20) into RestaurantOwner

!new HeadWaiter('hw7')
!hw7.name := 'Derek Miles'
!hw7.dateOfBirth := Date('1982-06-20')
!hw7.phoneNumber := '555-9500'

!new HeadWaiter('hw8')
!hw8.name := 'Irene Fischer'
!hw8.dateOfBirth := Date('1988-02-13')
!hw8.phoneNumber := '555-9510'

!new Waiter('w15')
!w15.name := 'Chloe Bennett'
!w15.dateOfBirth := Date('1999-09-01')
!w15.phoneNumber := '555-9501'
!w15.spokenLanguage := #English

!new Waiter('w16')
!w16.name := 'Paolo Greco'
!w16.dateOfBirth := Date('1993-03-28')
!w16.phoneNumber := '555-9502'
!w16.spokenLanguage := #Italian

!new Waiter('w17')
!w17.name := 'Mara Vogel'
!w17.dateOfBirth := Date('1996-12-05')
!w17.phoneNumber := '555-9511'
!w17.spokenLanguage := #German

!insert (hw7, w15) into HeadWaiterWaiter
!insert (hw7, w16) into HeadWaiterWaiter
!insert (hw8, w17) into HeadWaiterWaiter

!new Manager('mgr3')
!mgr3.name := 'Anthony Reed'
!mgr3.dateOfBirth := Date('1979-11-09')
!mgr3.phoneNumber := '555-9520'

!new Chef('chef9')
!chef9.name := 'Lucia Ferraro'
!chef9.dateOfBirth := Date('1975-01-15')
!chef9.phoneNumber := '555-9600'

!new Chef('chef10')
!chef10.name := 'Markus Stein'
!chef10.dateOfBirth := Date('1984-04-22')
!chef10.phoneNumber := '555-9610'

!new Cook('cook14')
!cook14.name := 'Tanya Brooks'
!cook14.dateOfBirth := Date('1990-07-03')
!cook14.phoneNumber := '555-9601'
!cook14.yearsOfExperience := 6

!new Cook('cook15')
!cook15.name := 'Eli Navarro'
!cook15.dateOfBirth := Date('1997-10-30')
!cook15.phoneNumber := '555-9602'
!cook15.yearsOfExperience := 2

!new Cook('cook16')
!cook16.name := 'Greta Wolf'
!cook16.dateOfBirth := Date('1992-05-17')
!cook16.phoneNumber := '555-9611'
!cook16.yearsOfExperience := 9

!insert (chef9, cook14) into ChefCook
!insert (chef9, cook15) into ChefCook
!insert (chef10, cook16) into ChefCook

!new Allergen('alg7Gluten')
!alg7Gluten.type := #Gluten
!new Allergen('alg7Seafood')
!alg7Seafood.type := #Seafood
!new Allergen('alg7Lactose')
!alg7Lactose.type := #Lactose

!new FoodItem('fiPasta7')
!fiPasta7.number := 601
!fiPasta7.description := 'Dry spaghetti'
!fiPasta7.purchaseFlag := true
!fiPasta7.unit := #Pound

!new FoodItem('fiClams7')
!fiClams7.number := 602
!fiClams7.description := 'Fresh clams'
!fiClams7.purchaseFlag := true
!fiClams7.unit := #Pound

!new FoodItem('fiCream7')
!fiCream7.number := 603
!fiCream7.description := 'Cooking cream'
!fiCream7.purchaseFlag := true
!fiCream7.unit := #Ounce

!new FoodItem('fiHerbs7')
!fiHerbs7.number := 604
!fiHerbs7.description := 'Mixed herbs'
!fiHerbs7.purchaseFlag := true
!fiHerbs7.unit := #Gram

!new FoodItem('fiSoda7')
!fiSoda7.number := 605
!fiSoda7.description := 'Club soda'
!fiSoda7.purchaseFlag := true
!fiSoda7.unit := #Ounce

!new FoodItem('fiChocolate7')
!fiChocolate7.number := 606
!fiChocolate7.description := 'Dark chocolate'
!fiChocolate7.purchaseFlag := true
!fiChocolate7.unit := #Ounce

!new FoodItem('fiFlour7')
!fiFlour7.number := 607
!fiFlour7.description := 'Cake flour'
!fiFlour7.purchaseFlag := true
!fiFlour7.unit := #Pound

!insert (fiPasta7, alg7Gluten) into FoodItemAllergen
!insert (fiFlour7, alg7Gluten) into FoodItemAllergen
!insert (fiClams7, alg7Seafood) into FoodItemAllergen
!insert (fiCream7, alg7Lactose) into FoodItemAllergen

!new MenuItem('miClamPasta7')
!miClamPasta7.description := 'Creamy clam pasta'
!miClamPasta7.prepTime := 24.0
!miClamPasta7.classification := #Main

!new MenuItem('miHerbSoda7')
!miHerbSoda7.description := 'Herbal spritzer'
!miHerbSoda7.prepTime := 2.0
!miHerbSoda7.classification := #Beverage

!new MenuItem('miChocoCake7')
!miChocoCake7.description := 'Chocolate cake slice'
!miChocoCake7.prepTime := 7.0
!miChocoCake7.classification := #Dessert

!new MenuItem('miBreadsticks7')
!miBreadsticks7.description := 'Warm breadsticks'
!miBreadsticks7.prepTime := 6.0
!miBreadsticks7.classification := #Apetizer

!insert (miClamPasta7, chef9) into MenuItemChef
!insert (miHerbSoda7, chef10) into MenuItemChef
!insert (miChocoCake7, chef10) into MenuItemChef
!insert (miBreadsticks7, chef9) into MenuItemChef

!insert (miClamPasta7, fiPasta7) into MenuItemFoodItem
!insert (miClamPasta7, fiClams7) into MenuItemFoodItem
!insert (miClamPasta7, fiCream7) into MenuItemFoodItem
!insert (miClamPasta7, fiHerbs7) into MenuItemFoodItem

!insert (miHerbSoda7, fiSoda7) into MenuItemFoodItem
!insert (miHerbSoda7, fiHerbs7) into MenuItemFoodItem

!insert (miChocoCake7, fiChocolate7) into MenuItemFoodItem
!insert (miChocoCake7, fiFlour7) into MenuItemFoodItem
!insert (miChocoCake7, fiCream7) into MenuItemFoodItem

!insert (miBreadsticks7, fiFlour7) into MenuItemFoodItem

!new RegularCustomer('cust7')
!cust7.name := 'Helena Schmitt'
!cust7.prefferedLanguage := #German

!new RegularCustomer('cust8')
!cust8.name := 'Diego Prieto'
!cust8.prefferedLanguage := #Spanish

!new BusDriver('bd6')
!bd6.name := 'Wendy Parker'
!bd6.dateOfBirth := Date('1971-03-19')
!bd6.phoneNumber := '555-9700'
!bd6.driverLicenseNr := 'D-1188204'

!new BusDriver('bd7')
!bd7.name := 'Ibrahim Saleh'
!bd7.dateOfBirth := Date('1966-08-02')
!bd7.phoneNumber := '555-9701'
!bd7.driverLicenseNr := 'D-4401299'

!new Banquet('banq6')
!banq6.time := Time('19:00')
!banq6.date := Date('2026-08-08')
!banq6.numberPeople := 18
!banq6.name := 'Helena Schmitt'
!banq6.phoneNumber := '555-9800'
!banq6.number := 10001
!banq6.groupName := 'Harbor Chess League'
!banq6.paymentMethod := #CreditCard
!banq6.busService := true

!insert (rest7, banq6) into RestaurantReservation
!insert (banq6, cust7) into ReservationCustomer
!insert (banq6, w15) into ReservationWaiter
!insert (banq6, w16) into ReservationWaiter
!insert (banq6, w17) into ReservationWaiter
!insert (banq6, bd6) into BanquetBusDriver
!insert (banq6, bd7) into BanquetBusDriver

!new Table('tBanq6A')
!tBanq6A.number := 301
!tBanq6A.description := 'Semi-private table A'
!tBanq6A.capacity := 10
!insert (banq6, tBanq6A) into ReservationTable

!new Table('tBanq6B')
!tBanq6B.number := 302
!tBanq6B.description := 'Semi-private table B'
!tBanq6B.capacity := 8
!insert (banq6, tBanq6B) into ReservationTable

!new ItemOrder('ioBanq6_1')
!ioBanq6_1.time := Time('19:20')
!insert (banq6, ioBanq6_1) into ReservationItemOrdered
!insert (ioBanq6_1, miBreadsticks7) into ItemOrderMenuItem

!new ItemOrder('ioBanq6_2')
!ioBanq6_2.time := Time('19:45')
!insert (banq6, ioBanq6_2) into ReservationItemOrdered
!insert (ioBanq6_2, miClamPasta7) into ItemOrderMenuItem

!new ItemOrder('ioBanq6_3')
!ioBanq6_3.time := Time('20:10')
!insert (banq6, ioBanq6_3) into ReservationItemOrdered
!insert (ioBanq6_3, miHerbSoda7) into ItemOrderMenuItem

!new Individual('res8')
!res8.time := Time('17:10')
!res8.date := Date('2026-08-09')
!res8.numberPeople := 7
!res8.name := 'Unassigned Reservation'
!res8.phoneNumber := '555-9811'
!res8.number := 10002
!res8.seating := #Inside
!res8.smoking := #NonSmoking

!insert (res8, w17) into ReservationWaiter

!new Table('tRes8A')
!tRes8A.number := 41
!tRes8A.description := 'Inside booth'
!tRes8A.capacity := 4
!insert (res8, tRes8A) into ReservationTable

!new Table('tRes8B')
!tRes8B.number := 42
!tRes8B.description := 'Adjacent two-top combined'
!tRes8B.capacity := 4
!insert (res8, tRes8B) into ReservationTable

!new ItemOrder('ioRes8_1')
!ioRes8_1.time := Time('17:25')
!insert (res8, ioRes8_1) into ReservationItemOrdered
!insert (ioRes8_1, miHerbSoda7) into ItemOrderMenuItem

!new ItemOrder('ioRes8_2')
!ioRes8_2.time := Time('17:40')
!insert (res8, ioRes8_2) into ReservationItemOrdered
!insert (ioRes8_2, miChocoCake7) into ItemOrderMenuItem

!new DietaryRequirement('dietReq6')
!dietReq6.diet := #Vegetarian

!new ReportedAllergy('repAlg6')
!repAlg6.allergen := #Seafood
```
## Generation 6 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 235 | 0.00% |
| Multiplicities Errors | 0 | 50 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 15 | 0.00% |
| Phones | 0 | 15 | 0.00% |

# Generation 7
```
!new Restaurant('rest9')
!rest9.name := 'Desert Rose Cafe'

!new Restaurant('rest10')
!rest10.name := 'Northern Fork'

!new Owner('own21')
!own21.name := 'Amira Haddad'
!own21.percentageShares := 40
!new Owner('own22')
!own22.name := 'Caleb Morgan'
!own22.percentageShares := 35
!new Owner('own23')
!own23.name := 'Nina Petrov'
!own23.percentageShares := 25

!new Owner('own24')
!own24.name := 'Sven Larsson'
!own24.percentageShares := 100

!insert (rest9, own21) into RestaurantOwner
!insert (rest9, own22) into RestaurantOwner
!insert (rest9, own23) into RestaurantOwner
!insert (rest10, own24) into RestaurantOwner

!new HeadWaiter('hw9')
!hw9.name := 'Diana Brooks'
!hw9.dateOfBirth := Date('1981-09-04')
!hw9.phoneNumber := '555-1100'

!new Waiter('w18')
!w18.name := 'Kevin Cho'
!w18.dateOfBirth := Date('1998-05-11')
!w18.phoneNumber := '555-1101'
!w18.spokenLanguage := #English

!insert (hw9, w18) into HeadWaiterWaiter

!new HeadWaiter('hw10')
!hw10.name := 'Fatima Nasser'
!hw10.dateOfBirth := Date('1986-12-19')
!hw10.phoneNumber := '555-1200'

!new Waiter('w19')
!w19.name := 'Isabel Cruz'
!w19.dateOfBirth := Date('1995-02-07')
!w19.phoneNumber := '555-1201'
!w19.spokenLanguage := #Spanish

!new Waiter('w20')
!w20.name := 'Lorenzo De Luca'
!w20.dateOfBirth := Date('1992-10-23')
!w20.phoneNumber := '555-1202'
!w20.spokenLanguage := #Italian

!insert (hw10, w19) into HeadWaiterWaiter
!insert (hw10, w20) into HeadWaiterWaiter

!new Chef('chef11')
!chef11.name := 'Mariam Saleh'
!chef11.dateOfBirth := Date('1973-03-27')
!chef11.phoneNumber := '555-1300'

!new Cook('cook17')
!cook17.name := 'Owen Price'
!cook17.dateOfBirth := Date('1990-01-16')
!cook17.phoneNumber := '555-1301'
!cook17.yearsOfExperience := 5

!new Cook('cook18')
!cook18.name := 'Katerina Iliou'
!cook18.dateOfBirth := Date('2000-06-08')
!cook18.phoneNumber := '555-1302'
!cook18.yearsOfExperience := 0

!insert (chef11, cook17) into ChefCook
!insert (chef11, cook18) into ChefCook

!new Chef('chef12')
!chef12.name := 'Jonah Whitaker'
!chef12.dateOfBirth := Date('1980-07-30')
!chef12.phoneNumber := '555-1400'

!new Cook('cook19')
!cook19.name := 'Pavel Novak'
!cook19.dateOfBirth := Date('1987-11-12')
!cook19.phoneNumber := '555-1401'
!cook19.yearsOfExperience := 12

!insert (chef12, cook19) into ChefCook

!new Allergen('alg9Gluten')
!alg9Gluten.type := #Gluten
!new Allergen('alg9Nuts')
!alg9Nuts.type := #Nuts

!new FoodItem('fiChickpeas')
!fiChickpeas.number := 701
!fiChickpeas.description := 'Dried chickpeas'
!fiChickpeas.purchaseFlag := true
!fiChickpeas.unit := #Pound

!new FoodItem('fiTahini')
!fiTahini.number := 702
!fiTahini.description := 'Tahini paste'
!fiTahini.purchaseFlag := true
!fiTahini.unit := #Ounce

!new FoodItem('fiWheatPita')
!fiWheatPita.number := 703
!fiWheatPita.description := 'Wheat pita bread'
!fiWheatPita.purchaseFlag := true
!fiWheatPita.unit := #Dozen

!new FoodItem('fiWalnuts9')
!fiWalnuts9.number := 704
!fiWalnuts9.description := 'Chopped walnuts'
!fiWalnuts9.purchaseFlag := true
!fiWalnuts9.unit := #Ounce

!new FoodItem('fiHoney')
!fiHoney.number := 705
!fiHoney.description := 'Wildflower honey'
!fiHoney.purchaseFlag := true
!fiHoney.unit := #Ounce

!new FoodItem('fiTeaLeaves9')
!fiTeaLeaves9.number := 706
!fiTeaLeaves9.description := 'Tea leaves'
!fiTeaLeaves9.purchaseFlag := true
!fiTeaLeaves9.unit := #Gram

!new FoodItem('fiMint9')
!fiMint9.number := 707
!fiMint9.description := 'Fresh mint'
!fiMint9.purchaseFlag := true
!fiMint9.unit := #Gram

!insert (fiWheatPita, alg9Gluten) into FoodItemAllergen
!insert (fiWalnuts9, alg9Nuts) into FoodItemAllergen

!new MenuItem('miHummus9')
!miHummus9.description := 'Hummus with warm pita'
!miHummus9.prepTime := 7.0
!miHummus9.classification := #Apetizer

!new MenuItem('miFalafel9')
!miFalafel9.description := 'Falafel platter'
!miFalafel9.prepTime := 16.0
!miFalafel9.classification := #Main

!new MenuItem('miMintTea9')
!miMintTea9.description := 'Mint tea'
!miMintTea9.prepTime := 3.0
!miMintTea9.classification := #Beverage

!new MenuItem('miBaklava9')
!miBaklava9.description := 'Baklava with walnuts and honey'
!miBaklava9.prepTime := 9.0
!miBaklava9.classification := #Dessert

!insert (miHummus9, chef11) into MenuItemChef
!insert (miFalafel9, chef11) into MenuItemChef
!insert (miMintTea9, chef12) into MenuItemChef
!insert (miBaklava9, chef12) into MenuItemChef

!insert (miHummus9, fiChickpeas) into MenuItemFoodItem
!insert (miHummus9, fiTahini) into MenuItemFoodItem
!insert (miHummus9, fiWheatPita) into MenuItemFoodItem

!insert (miFalafel9, fiChickpeas) into MenuItemFoodItem
!insert (miFalafel9, fiWheatPita) into MenuItemFoodItem

!insert (miMintTea9, fiTeaLeaves9) into MenuItemFoodItem
!insert (miMintTea9, fiMint9) into MenuItemFoodItem

!insert (miBaklava9, fiWheatPita) into MenuItemFoodItem
!insert (miBaklava9, fiWalnuts9) into MenuItemFoodItem
!insert (miBaklava9, fiHoney) into MenuItemFoodItem

!new RegularCustomer('cust9')
!cust9.name := 'Erik Johansson'
!cust9.prefferedLanguage := #English

!new RegularCustomer('cust10')
!cust10.name := 'Gianna Vitale'
!cust10.prefferedLanguage := #Italian

!new Individual('res9')
!res9.time := Time('11:45')
!res9.date := Date('2026-09-03')
!res9.numberPeople := 3
!res9.name := 'Erik Johansson'
!res9.phoneNumber := '555-1501'
!res9.number := 11001
!res9.seating := #Inside
!res9.smoking := #NonSmoking

!insert (rest10, res9) into RestaurantReservation
!insert (res9, cust9) into ReservationCustomer
!insert (res9, w19) into ReservationWaiter

!new Table('tRes9A')
!tRes9A.number := 16
!tRes9A.description := 'Three-seat counter section'
!tRes9A.capacity := 4
!insert (res9, tRes9A) into ReservationTable

!new ItemOrder('ioRes9_1')
!ioRes9_1.time := Time('12:00')
!insert (res9, ioRes9_1) into ReservationItemOrdered
!insert (ioRes9_1, miHummus9) into ItemOrderMenuItem

!new ItemOrder('ioRes9_2')
!ioRes9_2.time := Time('12:05')
!insert (res9, ioRes9_2) into ReservationItemOrdered
!insert (ioRes9_2, miMintTea9) into ItemOrderMenuItem

!new Individual('res10')
!res10.time := Time('20:20')
!res10.date := Date('2026-09-03')
!res10.numberPeople := 4
!res10.name := 'Late Walk-In'
!res10.phoneNumber := '555-1502'
!res10.number := 11002
!res10.seating := #Patio
!res10.smoking := #Smoking

!insert (res10, w18) into ReservationWaiter

!new Table('tRes10A')
!tRes10A.number := 5
!tRes10A.description := 'Patio two-top A'
!tRes10A.capacity := 2
!insert (res10, tRes10A) into ReservationTable

!new Table('tRes10B')
!tRes10B.number := 6
!tRes10B.description := 'Patio two-top B'
!tRes10B.capacity := 2
!insert (res10, tRes10B) into ReservationTable

!new ItemOrder('ioRes10_1')
!ioRes10_1.time := Time('20:35')
!insert (res10, ioRes10_1) into ReservationItemOrdered
!insert (ioRes10_1, miFalafel9) into ItemOrderMenuItem

!new BusDriver('bd8')
!bd8.name := 'Marcos Lima'
!bd8.dateOfBirth := Date('1970-05-10')
!bd8.phoneNumber := '555-1600'
!bd8.driverLicenseNr := 'D-6501207'

!new BusDriver('bd9')
!bd9.name := 'Elaine Turner'
!bd9.dateOfBirth := Date('1976-01-29')
!bd9.phoneNumber := '555-1601'
!bd9.driverLicenseNr := 'D-8833115'

!new Banquet('banq7')
!banq7.time := Time('18:00')
!banq7.date := Date('2026-09-05')
!banq7.numberPeople := 60
!banq7.name := 'Gianna Vitale'
!banq7.phoneNumber := '555-1503'
!banq7.number := 12001
!banq7.groupName := 'University Alumni Meetup'
!banq7.paymentMethod := #Cash
!banq7.busService := true

!insert (rest9, banq7) into RestaurantReservation
!insert (banq7, cust10) into ReservationCustomer
!insert (banq7, w19) into ReservationWaiter
!insert (banq7, w20) into ReservationWaiter
!insert (banq7, bd8) into BanquetBusDriver
!insert (banq7, bd9) into BanquetBusDriver

!new Table('tBanq7A')
!tBanq7A.number := 401
!tBanq7A.description := 'Banquet row A'
!tBanq7A.capacity := 15
!insert (banq7, tBanq7A) into ReservationTable

!new Table('tBanq7B')
!tBanq7B.number := 402
!tBanq7B.description := 'Banquet row B'
!tBanq7B.capacity := 15
!insert (banq7, tBanq7B) into ReservationTable

!new Table('tBanq7C')
!tBanq7C.number := 403
!tBanq7C.description := 'Banquet row C'
!tBanq7C.capacity := 15
!insert (banq7, tBanq7C) into ReservationTable

!new Table('tBanq7D')
!tBanq7D.number := 404
!tBanq7D.description := 'Banquet row D'
!tBanq7D.capacity := 15
!insert (banq7, tBanq7D) into ReservationTable

!new ItemOrder('ioBanq7_1')
!ioBanq7_1.time := Time('18:20')
!insert (banq7, ioBanq7_1) into ReservationItemOrdered
!insert (ioBanq7_1, miFalafel9) into ItemOrderMenuItem

!new ItemOrder('ioBanq7_2')
!ioBanq7_2.time := Time('18:25')
!insert (banq7, ioBanq7_2) into ReservationItemOrdered
!insert (ioBanq7_2, miMintTea9) into ItemOrderMenuItem

!new ItemOrder('ioBanq7_3')
!ioBanq7_3.time := Time('18:50')
!insert (banq7, ioBanq7_3) into ReservationItemOrdered
!insert (ioBanq7_3, miBaklava9) into ItemOrderMenuItem

!new DietaryRequirement('dietReq7')
!dietReq7.diet := #Vegan

!new ReportedAllergy('repAlg7')
!repAlg7.allergen := #Gluten
```
## Generation 7 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 260 | 0.00% |
| Multiplicities Errors | 0 | 55 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 15 | 0.00% |
| Phones | 0 | 15 | 0.00% |

# Generation 8
```
!new Restaurant('rest11')
!rest11.name := 'Sunrise Sushi Bar'

!new Owner('own25')
!own25.name := 'Naomi Ito'
!own25.percentageShares := 70

!new Owner('own26')
!own26.name := 'Chris Meyer'
!own26.percentageShares := 30

!insert (rest11, own25) into RestaurantOwner
!insert (rest11, own26) into RestaurantOwner

!new Manager('mgr4')
!mgr4.name := 'Teresa Quinn'
!mgr4.dateOfBirth := Date('1983-02-02')
!mgr4.phoneNumber := '555-2008'

!new HeadWaiter('hw11')
!hw11.name := 'Kenji Sakamoto'
!hw11.dateOfBirth := Date('1987-09-16')
!hw11.phoneNumber := '555-2000'

!new Waiter('w21')
!w21.name := 'Maya Torres'
!w21.dateOfBirth := Date('1999-04-25')
!w21.phoneNumber := '555-2001'
!w21.spokenLanguage := #Spanish

!new Waiter('w22')
!w22.name := 'Liam Carter'
!w22.dateOfBirth := Date('1996-01-08')
!w22.phoneNumber := '555-2002'
!w22.spokenLanguage := #English

!new Waiter('w23')
!w23.name := 'Greta Hahn'
!w23.dateOfBirth := Date('1994-06-12')
!w23.phoneNumber := '555-2003'
!w23.spokenLanguage := #German

!new Waiter('w24')
!w24.name := 'Paolo Romano'
!w24.dateOfBirth := Date('1992-11-03')
!w24.phoneNumber := '555-2004'
!w24.spokenLanguage := #Italian

!insert (hw11, w21) into HeadWaiterWaiter
!insert (hw11, w22) into HeadWaiterWaiter
!insert (hw11, w23) into HeadWaiterWaiter
!insert (hw11, w24) into HeadWaiterWaiter

!new Chef('chef13')
!chef13.name := 'Aya Nakamura'
!chef13.dateOfBirth := Date('1978-05-20')
!chef13.phoneNumber := '555-2100'

!new Cook('cook20')
!cook20.name := 'Ben Wallace'
!cook20.dateOfBirth := Date('1991-03-14')
!cook20.phoneNumber := '555-2101'
!cook20.yearsOfExperience := 6

!new Cook('cook21')
!cook21.name := 'Sora Kim'
!cook21.dateOfBirth := Date('1997-07-27')
!cook21.phoneNumber := '555-2102'
!cook21.yearsOfExperience := 2

!insert (chef13, cook20) into ChefCook
!insert (chef13, cook21) into ChefCook

!new Chef('chef14')
!chef14.name := 'Miguel Ortega'
!chef14.dateOfBirth := Date('1981-10-06')
!chef14.phoneNumber := '555-2200'

!new Cook('cook22')
!cook22.name := 'Alina Petrova'
!cook22.dateOfBirth := Date('1989-12-09')
!cook22.phoneNumber := '555-2201'
!cook22.yearsOfExperience := 11

!insert (chef14, cook22) into ChefCook

!new Allergen('alg11Seafood')
!alg11Seafood.type := #Seafood
!new Allergen('alg11Gluten')
!alg11Gluten.type := #Gluten
!new Allergen('alg11Lactose')
!alg11Lactose.type := #Lactose

!new FoodItem('fiMisoPaste')
!fiMisoPaste.number := 801
!fiMisoPaste.description := 'Miso paste'
!fiMisoPaste.purchaseFlag := true
!fiMisoPaste.unit := #Gram

!new FoodItem('fiTofu11')
!fiTofu11.number := 802
!fiTofu11.description := 'Silken tofu'
!fiTofu11.purchaseFlag := true
!fiTofu11.unit := #Pound

!new FoodItem('fiSalmon11')
!fiSalmon11.number := 803
!fiSalmon11.description := 'Sushi-grade salmon'
!fiSalmon11.purchaseFlag := true
!fiSalmon11.unit := #Pound

!new FoodItem('fiSushiRice11')
!fiSushiRice11.number := 804
!fiSushiRice11.description := 'Sushi rice'
!fiSushiRice11.purchaseFlag := true
!fiSushiRice11.unit := #Pound

!new FoodItem('fiNori11')
!fiNori11.number := 805
!fiNori11.description := 'Nori sheets'
!fiNori11.purchaseFlag := true
!fiNori11.unit := #Sheet

!new FoodItem('fiMochiDough11')
!fiMochiDough11.number := 806
!fiMochiDough11.description := 'Mochi dough'
!fiMochiDough11.purchaseFlag := false
!fiMochiDough11.unit := #Gram

!new FoodItem('fiIceCream11')
!fiIceCream11.number := 807
!fiIceCream11.description := 'Vanilla ice cream base'
!fiIceCream11.purchaseFlag := true
!fiIceCream11.unit := #Ounce

!new FoodItem('fiTea11')
!fiTea11.number := 808
!fiTea11.description := 'Green tea leaves'
!fiTea11.purchaseFlag := true
!fiTea11.unit := #Gram

!insert (fiSalmon11, alg11Seafood) into FoodItemAllergen
!insert (fiMisoPaste, alg11Gluten) into FoodItemAllergen
!insert (fiMochiDough11, alg11Gluten) into FoodItemAllergen
!insert (fiIceCream11, alg11Lactose) into FoodItemAllergen

!new MenuItem('miMisoSoup11')
!miMisoSoup11.description := 'Miso soup with tofu'
!miMisoSoup11.prepTime := 6.0
!miMisoSoup11.classification := #Apetizer

!new MenuItem('miSalmonNigiri11')
!miSalmonNigiri11.description := 'Salmon nigiri (2 pcs)'
!miSalmonNigiri11.prepTime := 4.0
!miSalmonNigiri11.classification := #Main

!new MenuItem('miMochiIceCream11')
!miMochiIceCream11.description := 'Mochi ice cream'
!miMochiIceCream11.prepTime := 3.0
!miMochiIceCream11.classification := #Dessert

!new MenuItem('miGreenTea11')
!miGreenTea11.description := 'Hot green tea'
!miGreenTea11.prepTime := 2.0
!miGreenTea11.classification := #Beverage

!new MenuItem('miMakiRoll11')
!miMakiRoll11.description := 'Salmon maki roll'
!miMakiRoll11.prepTime := 7.0
!miMakiRoll11.classification := #Main

!insert (miMisoSoup11, chef13) into MenuItemChef
!insert (miSalmonNigiri11, chef13) into MenuItemChef
!insert (miMakiRoll11, chef13) into MenuItemChef
!insert (miMochiIceCream11, chef14) into MenuItemChef
!insert (miGreenTea11, chef14) into MenuItemChef

!insert (miMisoSoup11, fiMisoPaste) into MenuItemFoodItem
!insert (miMisoSoup11, fiTofu11) into MenuItemFoodItem

!insert (miSalmonNigiri11, fiSalmon11) into MenuItemFoodItem
!insert (miSalmonNigiri11, fiSushiRice11) into MenuItemFoodItem

!insert (miMakiRoll11, fiSalmon11) into MenuItemFoodItem
!insert (miMakiRoll11, fiSushiRice11) into MenuItemFoodItem
!insert (miMakiRoll11, fiNori11) into MenuItemFoodItem

!insert (miMochiIceCream11, fiMochiDough11) into MenuItemFoodItem
!insert (miMochiIceCream11, fiIceCream11) into MenuItemFoodItem

!insert (miGreenTea11, fiTea11) into MenuItemFoodItem

!new RegularCustomer('cust11')
!cust11.name := 'Yara Hassan'
!cust11.prefferedLanguage := #English

!new RegularCustomer('cust12')
!cust12.name := 'Stefan Muller'
!cust12.prefferedLanguage := #German

!new Individual('res11')
!res11.time := Time('18:05')
!res11.date := Date('2026-10-02')
!res11.numberPeople := 9
!res11.name := 'Yara Hassan'
!res11.phoneNumber := '555-2301'
!res11.number := 13001
!res11.seating := #Inside
!res11.smoking := #NonSmoking

!insert (rest11, res11) into RestaurantReservation
!insert (res11, cust11) into ReservationCustomer
!insert (res11, w21) into ReservationWaiter
!insert (res11, w22) into ReservationWaiter

!new Table('tRes11A')
!tRes11A.number := 110
!tRes11A.description := 'Communal table'
!tRes11A.capacity := 10
!insert (res11, tRes11A) into ReservationTable

!new ItemOrder('ioRes11_1')
!ioRes11_1.time := Time('18:20')
!insert (res11, ioRes11_1) into ReservationItemOrdered
!insert (ioRes11_1, miMisoSoup11) into ItemOrderMenuItem

!new ItemOrder('ioRes11_2')
!ioRes11_2.time := Time('18:35')
!insert (res11, ioRes11_2) into ReservationItemOrdered
!insert (ioRes11_2, miMakiRoll11) into ItemOrderMenuItem

!new ItemOrder('ioRes11_3')
!ioRes11_3.time := Time('19:05')
!insert (res11, ioRes11_3) into ReservationItemOrdered
!insert (ioRes11_3, miGreenTea11) into ItemOrderMenuItem

!new Individual('res12')
!res12.time := Time('12:10')
!res12.date := Date('2026-10-03')
!res12.numberPeople := 2
!res12.name := 'Stefan Muller'
!res12.phoneNumber := '555-2302'
!res12.number := 13002
!res12.seating := #Patio
!res12.smoking := #NonSmoking

!insert (rest11, res12) into RestaurantReservation
!insert (res12, cust12) into ReservationCustomer
!insert (res12, w23) into ReservationWaiter

!new Table('tRes12A')
!tRes12A.number := 12
!tRes12A.description := 'Patio two-top'
!tRes12A.capacity := 2
!insert (res12, tRes12A) into ReservationTable

!new BusDriver('bd10')
!bd10.name := 'Gloria Pierce'
!bd10.dateOfBirth := Date('1968-12-04')
!bd10.phoneNumber := '555-2400'
!bd10.driverLicenseNr := 'D-9087741'

!new BusDriver('bd11')
!bd11.name := 'Hassan Ali'
!bd11.dateOfBirth := Date('1972-04-18')
!bd11.phoneNumber := '555-2401'
!bd11.driverLicenseNr := 'D-7710955'

!new Banquet('banq8')
!banq8.time := Time('19:30')
!banq8.date := Date('2026-10-05')
!banq8.numberPeople := 24
!banq8.name := 'Community Theater'
!banq8.phoneNumber := '555-2309'
!banq8.number := 14001
!banq8.groupName := 'Cast Celebration Dinner'
!banq8.paymentMethod := #CreditCard
!banq8.busService := true

!insert (rest11, banq8) into RestaurantReservation
!insert (banq8, w23) into ReservationWaiter
!insert (banq8, w24) into ReservationWaiter
!insert (banq8, bd10) into BanquetBusDriver
!insert (banq8, bd11) into BanquetBusDriver

!new Table('tBanq8A')
!tBanq8A.number := 201
!tBanq8A.description := 'Banquet table A'
!tBanq8A.capacity := 8
!insert (banq8, tBanq8A) into ReservationTable

!new Table('tBanq8B')
!tBanq8B.number := 202
!tBanq8B.description := 'Banquet table B'
!tBanq8B.capacity := 8
!insert (banq8, tBanq8B) into ReservationTable

!new Table('tBanq8C')
!tBanq8C.number := 203
!tBanq8C.description := 'Banquet table C'
!tBanq8C.capacity := 10
!insert (banq8, tBanq8C) into ReservationTable

!new ItemOrder('ioBanq8_1')
!ioBanq8_1.time := Time('19:50')
!insert (banq8, ioBanq8_1) into ReservationItemOrdered
!insert (ioBanq8_1, miSalmonNigiri11) into ItemOrderMenuItem

!new ItemOrder('ioBanq8_2')
!ioBanq8_2.time := Time('20:20')
!insert (banq8, ioBanq8_2) into ReservationItemOrdered
!insert (ioBanq8_2, miMochiIceCream11) into ItemOrderMenuItem

!new Individual('res13')
!res13.time := Time('21:10')
!res13.date := Date('2026-10-05')
!res13.numberPeople := 3
!res13.name := 'After-Show Table'
!res13.phoneNumber := '555-2310'
!res13.number := 14002
!res13.seating := #Inside
!res13.smoking := #NonSmoking

!insert (res13, w24) into ReservationWaiter

!new Table('tRes13A')
!tRes13A.number := 17
!tRes13A.description := 'Bar-side high table'
!tRes13A.capacity := 4
!insert (res13, tRes13A) into ReservationTable

!new ItemOrder('ioRes13_1')
!ioRes13_1.time := Time('21:25')
!insert (res13, ioRes13_1) into ReservationItemOrdered
!insert (ioRes13_1, miGreenTea11) into ItemOrderMenuItem

!new DietaryRequirement('dietReq8')
!dietReq8.diet := #Kosher

!new ReportedAllergy('repAlg8')
!repAlg8.allergen := #Lactose
```
## Generation 8 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 277 | 0.00% |
| Multiplicities Errors | 0 | 59 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 17 | 0.00% |
| Phones | 0 | 17 | 0.00% |

# Generation 9
```
!new Restaurant('rest12')
!rest12.name := 'Luna Bistro'

!new Owner('own27')
!own27.name := 'Evelyn Moore'
!own27.percentageShares := 100
!insert (rest12, own27) into RestaurantOwner

!new HeadWaiter('hw12')
!hw12.name := 'Oscar Jensen'
!hw12.dateOfBirth := Date('1986-05-28')
!hw12.phoneNumber := '555-3001'

!new Waiter('w25')
!w25.name := 'Priyanka Iyer'
!w25.dateOfBirth := Date('1997-02-10')
!w25.phoneNumber := '555-3002'
!w25.spokenLanguage := #English

!new Waiter('w26')
!w26.name := 'Mateo Silva'
!w26.dateOfBirth := Date('1993-08-19')
!w26.phoneNumber := '555-3003'
!w26.spokenLanguage := #Spanish

!insert (hw12, w25) into HeadWaiterWaiter
!insert (hw12, w26) into HeadWaiterWaiter

!new Manager('mgr5')
!mgr5.name := 'Helen Dawson'
!mgr5.dateOfBirth := Date('1981-01-11')
!mgr5.phoneNumber := '555-3010'

!new Chef('chef15')
!chef15.name := 'Sven Richter'
!chef15.dateOfBirth := Date('1979-03-09')
!chef15.phoneNumber := '555-3101'

!new Chef('chef16')
!chef16.name := 'Camille Laurent'
!chef16.dateOfBirth := Date('1984-12-22')
!chef16.phoneNumber := '555-3102'

!new Cook('cook23')
!cook23.name := 'Brandon Lee'
!cook23.dateOfBirth := Date('1990-10-04')
!cook23.phoneNumber := '555-3100'
!cook23.yearsOfExperience := 5

!new Cook('cook24')
!cook24.name := 'Elise Martin'
!cook24.dateOfBirth := Date('1995-04-15')
!cook24.phoneNumber := '555-3103'
!cook24.yearsOfExperience := 7

!insert (chef15, cook23) into ChefCook
!insert (chef16, cook24) into ChefCook

!new Allergen('alg12Gluten')
!alg12Gluten.type := #Gluten
!new Allergen('alg12Lactose')
!alg12Lactose.type := #Lactose
!new Allergen('alg12Nuts')
!alg12Nuts.type := #Nuts

!new FoodItem('fiOats12')
!fiOats12.number := 901
!fiOats12.description := 'Rolled oats'
!fiOats12.purchaseFlag := true
!fiOats12.unit := #Pound

!new FoodItem('fiAlmondMilk12')
!fiAlmondMilk12.number := 902
!fiAlmondMilk12.description := 'Almond milk'
!fiAlmondMilk12.purchaseFlag := true
!fiAlmondMilk12.unit := #Ounce

!new FoodItem('fiAlmonds12')
!fiAlmonds12.number := 903
!fiAlmonds12.description := 'Almonds'
!fiAlmonds12.purchaseFlag := true
!fiAlmonds12.unit := #Ounce

!new FoodItem('fiWheatBun12')
!fiWheatBun12.number := 904
!fiWheatBun12.description := 'Wheat bun'
!fiWheatBun12.purchaseFlag := true
!fiWheatBun12.unit := #Dozen

!new FoodItem('fiChicken12')
!fiChicken12.number := 905
!fiChicken12.description := 'Chicken breast'
!fiChicken12.purchaseFlag := true
!fiChicken12.unit := #Pound

!new FoodItem('fiYogurt12')
!fiYogurt12.number := 906
!fiYogurt12.description := 'Plain yogurt'
!fiYogurt12.purchaseFlag := true
!fiYogurt12.unit := #Ounce

!new FoodItem('fiSparkTeaBase12')
!fiSparkTeaBase12.number := 907
!fiSparkTeaBase12.description := 'Black tea concentrate'
!fiSparkTeaBase12.purchaseFlag := true
!fiSparkTeaBase12.unit := #Ounce

!insert (fiWheatBun12, alg12Gluten) into FoodItemAllergen
!insert (fiYogurt12, alg12Lactose) into FoodItemAllergen
!insert (fiAlmondMilk12, alg12Nuts) into FoodItemAllergen
!insert (fiAlmonds12, alg12Nuts) into FoodItemAllergen

!new MenuItem('miOvernightOats12')
!miOvernightOats12.description := 'Overnight oats with almond milk'
!miOvernightOats12.prepTime := 4.0
!miOvernightOats12.classification := #Dessert

!new MenuItem('miChickenSandwich12')
!miChickenSandwich12.description := 'Grilled chicken sandwich'
!miChickenSandwich12.prepTime := 14.0
!miChickenSandwich12.classification := #Main

!new MenuItem('miYogurtDip12')
!miYogurtDip12.description := 'Herbed yogurt dip'
!miYogurtDip12.prepTime := 5.0
!miYogurtDip12.classification := #Apetizer

!new MenuItem('miSparkTea12')
!miSparkTea12.description := 'Sparkling iced tea'
!miSparkTea12.prepTime := 2.0
!miSparkTea12.classification := #Beverage

!insert (miOvernightOats12, chef16) into MenuItemChef
!insert (miChickenSandwich12, chef15) into MenuItemChef
!insert (miYogurtDip12, chef16) into MenuItemChef
!insert (miSparkTea12, chef15) into MenuItemChef

!insert (miOvernightOats12, fiOats12) into MenuItemFoodItem
!insert (miOvernightOats12, fiAlmondMilk12) into MenuItemFoodItem
!insert (miOvernightOats12, fiAlmonds12) into MenuItemFoodItem

!insert (miChickenSandwich12, fiChicken12) into MenuItemFoodItem
!insert (miChickenSandwich12, fiWheatBun12) into MenuItemFoodItem

!insert (miYogurtDip12, fiYogurt12) into MenuItemFoodItem

!insert (miSparkTea12, fiSparkTeaBase12) into MenuItemFoodItem

!new Individual('res14')
!res14.time := Time('09:20')
!res14.date := Date('2026-11-02')
!res14.numberPeople := 11
!res14.name := 'Neighborhood Study Group'
!res14.phoneNumber := '555-3200'
!res14.number := 15001
!res14.seating := #Inside
!res14.smoking := #NonSmoking

!insert (rest12, res14) into RestaurantReservation
!insert (res14, w25) into ReservationWaiter
!insert (res14, w26) into ReservationWaiter

!new Table('tRes14A')
!tRes14A.number := 61
!tRes14A.description := 'Long table (left)'
!tRes14A.capacity := 4
!insert (res14, tRes14A) into ReservationTable

!new Table('tRes14B')
!tRes14B.number := 62
!tRes14B.description := 'Long table (center)'
!tRes14B.capacity := 4
!insert (res14, tRes14B) into ReservationTable

!new Table('tRes14C')
!tRes14C.number := 63
!tRes14C.description := 'Long table (right)'
!tRes14C.capacity := 4
!insert (res14, tRes14C) into ReservationTable

!new ItemOrder('ioRes14_1')
!ioRes14_1.time := Time('09:35')
!insert (res14, ioRes14_1) into ReservationItemOrdered
!insert (ioRes14_1, miSparkTea12) into ItemOrderMenuItem

!new ItemOrder('ioRes14_2')
!ioRes14_2.time := Time('09:45')
!insert (res14, ioRes14_2) into ReservationItemOrdered
!insert (ioRes14_2, miYogurtDip12) into ItemOrderMenuItem

!new ItemOrder('ioRes14_3')
!ioRes14_3.time := Time('10:05')
!insert (res14, ioRes14_3) into ReservationItemOrdered
!insert (ioRes14_3, miChickenSandwich12) into ItemOrderMenuItem

!new Banquet('banq9')
!banq9.time := Time('15:00')
!banq9.date := Date('2026-11-04')
!banq9.numberPeople := 40
!banq9.name := 'City Department Meeting'
!banq9.phoneNumber := '555-3300'
!banq9.number := 16001
!banq9.groupName := 'Public Works Briefing'
!banq9.paymentMethod := #CreditCard
!banq9.busService := false

!insert (rest12, banq9) into RestaurantReservation
!insert (banq9, w26) into ReservationWaiter

!new Table('tBanq9A')
!tBanq9A.number := 71
!tBanq9A.description := 'Conference table A'
!tBanq9A.capacity := 20
!insert (banq9, tBanq9A) into ReservationTable

!new Table('tBanq9B')
!tBanq9B.number := 72
!tBanq9B.description := 'Conference table B'
!tBanq9B.capacity := 12
!insert (banq9, tBanq9B) into ReservationTable

!new Table('tBanq9C')
!tBanq9C.number := 73
!tBanq9C.description := 'Conference table C'
!tBanq9C.capacity := 10
!insert (banq9, tBanq9C) into ReservationTable

!new ItemOrder('ioBanq9_1')
!ioBanq9_1.time := Time('15:20')
!insert (banq9, ioBanq9_1) into ReservationItemOrdered
!insert (ioBanq9_1, miChickenSandwich12) into ItemOrderMenuItem

!new ItemOrder('ioBanq9_2')
!ioBanq9_2.time := Time('15:25')
!insert (banq9, ioBanq9_2) into ReservationItemOrdered
!insert (ioBanq9_2, miSparkTea12) into ItemOrderMenuItem

!new ItemOrder('ioBanq9_3')
!ioBanq9_3.time := Time('15:55')
!insert (banq9, ioBanq9_3) into ReservationItemOrdered
!insert (ioBanq9_3, miOvernightOats12) into ItemOrderMenuItem

!new RegularCustomer('cust13')
!cust13.name := 'Marta Kowalczyk'
!cust13.prefferedLanguage := #German

!insert (res14, cust13) into ReservationCustomer

!new DietaryRequirement('dietReq9')
!dietReq9.diet := #Halal

!new ReportedAllergy('repAlg9')
!repAlg9.allergen := #Gluten
```
## Generation 9 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 204 | 0.00% |
| Multiplicities Errors | 0 | 44 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 10 | 0.00% |
| Phones | 0 | 10 | 0.00% |

# Generation 10
```
!new Restaurant('rest13')
!rest13.name := 'Orchard Terrace'

!new Owner('own28')
!own28.name := 'Mason Rivera'
!own28.percentageShares := 40

!new Owner('own29')
!own29.name := 'Claire Bennett'
!own29.percentageShares := 35

!new Owner('own30')
!own30.name := 'Hyejin Park'
!own30.percentageShares := 15

!new Owner('own31')
!own31.name := 'Omar Hassan'
!own31.percentageShares := 10

!insert (rest13, own28) into RestaurantOwner
!insert (rest13, own29) into RestaurantOwner
!insert (rest13, own30) into RestaurantOwner
!insert (rest13, own31) into RestaurantOwner

!new HeadWaiter('hw13')
!hw13.name := 'Valerie Scott'
!hw13.dateOfBirth := Date('1984-10-18')
!hw13.phoneNumber := '555-4100'

!new Waiter('w27')
!w27.name := 'Nicolas Armand'
!w27.dateOfBirth := Date('1996-09-07')
!w27.phoneNumber := '555-4101'
!w27.spokenLanguage := #English

!new Waiter('w28')
!w28.name := 'Ines Morales'
!w28.dateOfBirth := Date('1999-02-21')
!w28.phoneNumber := '555-4102'
!w28.spokenLanguage := #Spanish

!insert (hw13, w27) into HeadWaiterWaiter
!insert (hw13, w28) into HeadWaiterWaiter

!new Chef('chef17')
!chef17.name := 'Gabriel Novak'
!chef17.dateOfBirth := Date('1976-06-11')
!chef17.phoneNumber := '555-4200'

!new Cook('cook25')
!cook25.name := 'Lena Fischer'
!cook25.dateOfBirth := Date('1990-03-29')
!cook25.phoneNumber := '555-4201'
!cook25.yearsOfExperience := 8

!new Cook('cook26')
!cook26.name := 'Adam Price'
!cook26.dateOfBirth := Date('1994-12-02')
!cook26.phoneNumber := '555-4202'
!cook26.yearsOfExperience := 4

!new Cook('cook27')
!cook27.name := 'Sana Iqbal'
!cook27.dateOfBirth := Date('2000-07-15')
!cook27.phoneNumber := '555-4203'
!cook27.yearsOfExperience := 1

!insert (chef17, cook25) into ChefCook
!insert (chef17, cook26) into ChefCook
!insert (chef17, cook27) into ChefCook

!new Chef('chef18')
!chef18.name := 'Elise Caron'
!chef18.dateOfBirth := Date('1982-01-05')
!chef18.phoneNumber := '555-4210'

!new Cook('cook28')
!cook28.name := 'Bruno Almeida'
!cook28.dateOfBirth := Date('1988-08-23')
!cook28.phoneNumber := '555-4211'
!cook28.yearsOfExperience := 12

!insert (chef18, cook28) into ChefCook

!new Allergen('alg13Lactose')
!alg13Lactose.type := #Lactose

!new Allergen('alg13Gluten')
!alg13Gluten.type := #Gluten

!new Allergen('alg13Seafood')
!alg13Seafood.type := #Seafood

!new FoodItem('fiButter13')
!fiButter13.number := 1001
!fiButter13.description := 'Butter'
!fiButter13.purchaseFlag := true
!fiButter13.unit := #Ounce

!new FoodItem('fiFlour13')
!fiFlour13.number := 1002
!fiFlour13.description := 'Wheat flour'
!fiFlour13.purchaseFlag := true
!fiFlour13.unit := #Pound

!new FoodItem('fiCod13')
!fiCod13.number := 1003
!fiCod13.description := 'Fresh cod'
!fiCod13.purchaseFlag := true
!fiCod13.unit := #Pound

!new FoodItem('fiLettuce13')
!fiLettuce13.number := 1004
!fiLettuce13.description := 'Romaine lettuce'
!fiLettuce13.purchaseFlag := true
!fiLettuce13.unit := #Pound

!new FoodItem('fiCoffeeBeans13')
!fiCoffeeBeans13.number := 1005
!fiCoffeeBeans13.description := 'Coffee beans'
!fiCoffeeBeans13.purchaseFlag := true
!fiCoffeeBeans13.unit := #Pound

!new FoodItem('fiCream13')
!fiCream13.number := 1006
!fiCream13.description := 'Heavy cream'
!fiCream13.purchaseFlag := true
!fiCream13.unit := #Ounce

!insert (fiButter13, alg13Lactose) into FoodItemAllergen
!insert (fiCream13, alg13Lactose) into FoodItemAllergen
!insert (fiFlour13, alg13Gluten) into FoodItemAllergen
!insert (fiCod13, alg13Seafood) into FoodItemAllergen

!new MenuItem('miCodTacos13')
!miCodTacos13.description := 'Crispy cod tacos'
!miCodTacos13.prepTime := 17.0
!miCodTacos13.classification := #Main

!new MenuItem('miGardenSalad13')
!miGardenSalad13.description := 'Garden salad with lemon dressing'
!miGardenSalad13.prepTime := 6.0
!miGardenSalad13.classification := #Apetizer

!new MenuItem('miLatte13')
!miLatte13.description := 'Cafe latte'
!miLatte13.prepTime := 3.0
!miLatte13.classification := #Beverage

!new MenuItem('miCheesecake13')
!miCheesecake13.description := 'House cheesecake slice'
!miCheesecake13.prepTime := 8.0
!miCheesecake13.classification := #Dessert

!insert (miCodTacos13, chef17) into MenuItemChef
!insert (miGardenSalad13, chef18) into MenuItemChef
!insert (miLatte13, chef18) into MenuItemChef
!insert (miCheesecake13, chef17) into MenuItemChef

!insert (miCodTacos13, fiCod13) into MenuItemFoodItem
!insert (miCodTacos13, fiFlour13) into MenuItemFoodItem

!insert (miGardenSalad13, fiLettuce13) into MenuItemFoodItem

!insert (miLatte13, fiCoffeeBeans13) into MenuItemFoodItem
!insert (miLatte13, fiCream13) into MenuItemFoodItem

!insert (miCheesecake13, fiButter13) into MenuItemFoodItem
!insert (miCheesecake13, fiFlour13) into MenuItemFoodItem
!insert (miCheesecake13, fiCream13) into MenuItemFoodItem

!new RegularCustomer('cust14')
!cust14.name := 'Mei Lin'
!cust14.prefferedLanguage := #English

!new RegularCustomer('cust15')
!cust15.name := 'Carlos Vega'
!cust15.prefferedLanguage := #Spanish

!new Individual('res15')
!res15.time := Time('18:00')
!res15.date := Date('2026-12-01')
!res15.numberPeople := 6
!res15.name := 'Mei Lin'
!res15.phoneNumber := '555-5001'
!res15.number := 17001
!res15.seating := #Patio
!res15.smoking := #NonSmoking

!insert (rest13, res15) into RestaurantReservation
!insert (res15, cust14) into ReservationCustomer
!insert (res15, w27) into ReservationWaiter
!insert (res15, w28) into ReservationWaiter

!new Table('tRes15A')
!tRes15A.number := 101
!tRes15A.description := 'Patio table (4 seats)'
!tRes15A.capacity := 4
!insert (res15, tRes15A) into ReservationTable

!new Table('tRes15B')
!tRes15B.number := 102
!tRes15B.description := 'Patio table (4 seats)'
!tRes15B.capacity := 4
!insert (res15, tRes15B) into ReservationTable

!new ItemOrder('ioRes15_1')
!ioRes15_1.time := Time('18:15')
!insert (res15, ioRes15_1) into ReservationItemOrdered
!insert (ioRes15_1, miGardenSalad13) into ItemOrderMenuItem

!new ItemOrder('ioRes15_2')
!ioRes15_2.time := Time('18:35')
!insert (res15, ioRes15_2) into ReservationItemOrdered
!insert (ioRes15_2, miCodTacos13) into ItemOrderMenuItem

!new ItemOrder('ioRes15_3')
!ioRes15_3.time := Time('19:05')
!insert (res15, ioRes15_3) into ReservationItemOrdered
!insert (ioRes15_3, miLatte13) into ItemOrderMenuItem

!new Individual('res16')
!res16.time := Time('20:40')
!res16.date := Date('2026-12-01')
!res16.numberPeople := 2
!res16.name := 'Walk-in Pair'
!res16.phoneNumber := '555-5002'
!res16.number := 17002
!res16.seating := #Inside
!res16.smoking := #Smoking

!insert (rest13, res16) into RestaurantReservation
!insert (res16, w27) into ReservationWaiter

!new Table('tRes16A')
!tRes16A.number := 8
!tRes16A.description := 'Small inside two-top'
!tRes16A.capacity := 2
!insert (res16, tRes16A) into ReservationTable

!new BusDriver('bd12')
!bd12.name := 'Sharon Wells'
!bd12.dateOfBirth := Date('1970-01-24')
!bd12.phoneNumber := '555-5100'
!bd12.driverLicenseNr := 'D-2100457'

!new BusDriver('bd13')
!bd13.name := 'Mohammed Idris'
!bd13.dateOfBirth := Date('1968-09-10')
!bd13.phoneNumber := '555-5101'
!bd13.driverLicenseNr := 'D-3301988'

!new BusDriver('bd14')
!bd14.name := 'Elena Karpova'
!bd14.dateOfBirth := Date('1976-04-03')
!bd14.phoneNumber := '555-5102'
!bd14.driverLicenseNr := 'D-7754021'

!new Banquet('banq10')
!banq10.time := Time('12:30')
!banq10.date := Date('2026-12-03')
!banq10.numberPeople := 50
!banq10.name := 'Harbor District Council'
!banq10.phoneNumber := '555-5200'
!banq10.number := 18001
!banq10.groupName := 'Year-End Luncheon'
!banq10.paymentMethod := #Cash
!banq10.busService := true

!insert (rest13, banq10) into RestaurantReservation
!insert (banq10, w28) into ReservationWaiter
!insert (banq10, bd12) into BanquetBusDriver
!insert (banq10, bd13) into BanquetBusDriver
!insert (banq10, bd14) into BanquetBusDriver

!new Table('tBanq10A')
!tBanq10A.number := 201
!tBanq10A.description := 'Banquet table A'
!tBanq10A.capacity := 10
!insert (banq10, tBanq10A) into ReservationTable

!new Table('tBanq10B')
!tBanq10B.number := 202
!tBanq10B.description := 'Banquet table B'
!tBanq10B.capacity := 10
!insert (banq10, tBanq10B) into ReservationTable

!new Table('tBanq10C')
!tBanq10C.number := 203
!tBanq10C.description := 'Banquet table C'
!tBanq10C.capacity := 10
!insert (banq10, tBanq10C) into ReservationTable

!new Table('tBanq10D')
!tBanq10D.number := 204
!tBanq10D.description := 'Banquet table D'
!tBanq10D.capacity := 10
!insert (banq10, tBanq10D) into ReservationTable

!new Table('tBanq10E')
!tBanq10E.number := 205
!tBanq10E.description := 'Banquet table E'
!tBanq10E.capacity := 5
!insert (banq10, tBanq10E) into ReservationTable

!new Table('tBanq10F')
!tBanq10F.number := 206
!tBanq10F.description := 'Banquet table F'
!tBanq10F.capacity := 5
!insert (banq10, tBanq10F) into ReservationTable

!new ItemOrder('ioBanq10_1')
!ioBanq10_1.time := Time('12:50')
!insert (banq10, ioBanq10_1) into ReservationItemOrdered
!insert (ioBanq10_1, miGardenSalad13) into ItemOrderMenuItem

!new ItemOrder('ioBanq10_2')
!ioBanq10_2.time := Time('13:15')
!insert (banq10, ioBanq10_2) into ReservationItemOrdered
!insert (ioBanq10_2, miCodTacos13) into ItemOrderMenuItem

!new ItemOrder('ioBanq10_3')
!ioBanq10_3.time := Time('13:45')
!insert (banq10, ioBanq10_3) into ReservationItemOrdered
!insert (ioBanq10_3, miCheesecake13) into ItemOrderMenuItem

!new DietaryRequirement('dietReq10')
!dietReq10.diet := #Vegan

!new DietaryRequirement('dietReq11')
!dietReq11.diet := #Halal

!new ReportedAllergy('repAlg10')
!repAlg10.allergen := #Seafood

!new ReportedAllergy('repAlg11')
!repAlg11.allergen := #Lactose
```
## Generation 10 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 271 | 0.00% |
| Multiplicities Errors | 0 | 58 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 15 | 0.00% |
| Phones | 0 | 15 | 0.00% |

# Generation 11
```
!new Restaurant('rest14')
!rest14.name := 'Stonebridge Fine Dining'

!new Owner('own32')
!own32.name := 'Janelle Brooks'
!own32.percentageShares := 80

!new Owner('own33')
!own33.name := 'Hassan El Amin'
!own33.percentageShares := 20

!insert (rest14, own32) into RestaurantOwner
!insert (rest14, own33) into RestaurantOwner

!new HeadWaiter('hw14')
!hw14.name := 'Colin Mercer'
!hw14.dateOfBirth := Date('1985-09-08')
!hw14.phoneNumber := '555-7010'

!new Waiter('w29')
!w29.name := 'Beatriz Santos'
!w29.dateOfBirth := Date('1998-02-14')
!w29.phoneNumber := '555-7011'
!w29.spokenLanguage := #Spanish

!new Waiter('w30')
!w30.name := 'Mika Schneider'
!w30.dateOfBirth := Date('1992-06-26')
!w30.phoneNumber := '555-7012'
!w30.spokenLanguage := #German

!new Waiter('w31')
!w31.name := 'Ethan Cole'
!w31.dateOfBirth := Date('1996-11-05')
!w31.phoneNumber := '555-7013'
!w31.spokenLanguage := #English

!insert (hw14, w29) into HeadWaiterWaiter
!insert (hw14, w30) into HeadWaiterWaiter
!insert (hw14, w31) into HeadWaiterWaiter

!new Chef('chef19')
!chef19.name := 'Rosa Delgado'
!chef19.dateOfBirth := Date('1977-04-12')
!chef19.phoneNumber := '555-7020'

!new Chef('chef20')
!chef20.name := 'Tobias Lang'
!chef20.dateOfBirth := Date('1983-01-29')
!chef20.phoneNumber := '555-7021'

!new Cook('cook29')
!cook29.name := 'Nora Patel'
!cook29.dateOfBirth := Date('1991-03-18')
!cook29.phoneNumber := '555-7030'
!cook29.yearsOfExperience := 9

!new Cook('cook30')
!cook30.name := 'Gavin Pierce'
!cook30.dateOfBirth := Date('1995-08-09')
!cook30.phoneNumber := '555-7031'
!cook30.yearsOfExperience := 4

!new Cook('cook31')
!cook31.name := 'Linh Tran'
!cook31.dateOfBirth := Date('1989-12-21')
!cook31.phoneNumber := '555-7032'
!cook31.yearsOfExperience := 13

!insert (chef19, cook29) into ChefCook
!insert (chef19, cook30) into ChefCook
!insert (chef20, cook31) into ChefCook

!new Allergen('alg14Lactose')
!alg14Lactose.type := #Lactose

!new Allergen('alg14Seafood')
!alg14Seafood.type := #Seafood

!new Allergen('alg14Gluten')
!alg14Gluten.type := #Gluten

!new FoodItem('fiBeets14')
!fiBeets14.number := 1101
!fiBeets14.description := 'Roasted beets'
!fiBeets14.purchaseFlag := true
!fiBeets14.unit := #Pound

!new FoodItem('fiGoatCheese14')
!fiGoatCheese14.number := 1102
!fiGoatCheese14.description := 'Goat cheese'
!fiGoatCheese14.purchaseFlag := true
!fiGoatCheese14.unit := #Ounce

!new FoodItem('fiShrimp14')
!fiShrimp14.number := 1103
!fiShrimp14.description := 'Shrimp'
!fiShrimp14.purchaseFlag := true
!fiShrimp14.unit := #Pound

!new FoodItem('fiArborioRice14')
!fiArborioRice14.number := 1104
!fiArborioRice14.description := 'Arborio rice'
!fiArborioRice14.purchaseFlag := true
!fiArborioRice14.unit := #Pound

!new FoodItem('fiWheatFlour14')
!fiWheatFlour14.number := 1105
!fiWheatFlour14.description := 'Wheat flour'
!fiWheatFlour14.purchaseFlag := true
!fiWheatFlour14.unit := #Pound

!new FoodItem('fiCocoa14')
!fiCocoa14.number := 1106
!fiCocoa14.description := 'Cocoa powder'
!fiCocoa14.purchaseFlag := true
!fiCocoa14.unit := #Ounce

!new FoodItem('fiCream14')
!fiCream14.number := 1107
!fiCream14.description := 'Whipping cream'
!fiCream14.purchaseFlag := true
!fiCream14.unit := #Ounce

!new FoodItem('fiElderflowerSyrup14')
!fiElderflowerSyrup14.number := 1108
!fiElderflowerSyrup14.description := 'Elderflower syrup'
!fiElderflowerSyrup14.purchaseFlag := true
!fiElderflowerSyrup14.unit := #Ounce

!new FoodItem('fiSparklingWater14')
!fiSparklingWater14.number := 1109
!fiSparklingWater14.description := 'Sparkling water'
!fiSparklingWater14.purchaseFlag := true
!fiSparklingWater14.unit := #Ounce

!insert (fiGoatCheese14, alg14Lactose) into FoodItemAllergen
!insert (fiCream14, alg14Lactose) into FoodItemAllergen
!insert (fiShrimp14, alg14Seafood) into FoodItemAllergen
!insert (fiWheatFlour14, alg14Gluten) into FoodItemAllergen

!new MenuItem('miBeetSalad14')
!miBeetSalad14.description := 'Beet salad with goat cheese'
!miBeetSalad14.prepTime := 7.0
!miBeetSalad14.classification := #Apetizer

!new MenuItem('miShrimpRisotto14')
!miShrimpRisotto14.description := 'Shrimp risotto'
!miShrimpRisotto14.prepTime := 26.0
!miShrimpRisotto14.classification := #Main

!new MenuItem('miChocolateMousse14')
!miChocolateMousse14.description := 'Chocolate mousse'
!miChocolateMousse14.prepTime := 9.0
!miChocolateMousse14.classification := #Dessert

!new MenuItem('miElderflowerSoda14')
!miElderflowerSoda14.description := 'Elderflower soda'
!miElderflowerSoda14.prepTime := 1.5
!miElderflowerSoda14.classification := #Beverage

!insert (miBeetSalad14, chef19) into MenuItemChef
!insert (miShrimpRisotto14, chef19) into MenuItemChef
!insert (miChocolateMousse14, chef20) into MenuItemChef
!insert (miElderflowerSoda14, chef20) into MenuItemChef

!insert (miBeetSalad14, fiBeets14) into MenuItemFoodItem
!insert (miBeetSalad14, fiGoatCheese14) into MenuItemFoodItem

!insert (miShrimpRisotto14, fiShrimp14) into MenuItemFoodItem
!insert (miShrimpRisotto14, fiArborioRice14) into MenuItemFoodItem

!insert (miChocolateMousse14, fiCocoa14) into MenuItemFoodItem
!insert (miChocolateMousse14, fiCream14) into MenuItemFoodItem

!insert (miElderflowerSoda14, fiElderflowerSyrup14) into MenuItemFoodItem
!insert (miElderflowerSoda14, fiSparklingWater14) into MenuItemFoodItem

!new RegularCustomer('cust16')
!cust16.name := 'Tania Weber'
!cust16.prefferedLanguage := #German

!new Individual('res17')
!res17.time := Time('19:00')
!res17.date := Date('2027-01-14')
!res17.numberPeople := 13
!res17.name := 'Tania Weber'
!res17.phoneNumber := '555-7040'
!res17.number := 19001
!res17.seating := #Inside
!res17.smoking := #NonSmoking

!insert (rest14, res17) into RestaurantReservation
!insert (res17, cust16) into ReservationCustomer
!insert (res17, w29) into ReservationWaiter
!insert (res17, w30) into ReservationWaiter

!new Table('tRes17A')
!tRes17A.number := 1
!tRes17A.description := 'Dining room table for six'
!tRes17A.capacity := 6

!new Table('tRes17B')
!tRes17B.number := 2
!tRes17B.description := 'Dining room four-top'
!tRes17B.capacity := 4

!new Table('tRes17C')
!tRes17C.number := 3
!tRes17C.description := 'Dining room four-top'
!tRes17C.capacity := 4

!insert (res17, tRes17A) into ReservationTable
!insert (res17, tRes17B) into ReservationTable
!insert (res17, tRes17C) into ReservationTable

!new ItemOrder('ioRes17_1')
!ioRes17_1.time := Time('19:10')
!insert (res17, ioRes17_1) into ReservationItemOrdered
!insert (ioRes17_1, miBeetSalad14) into ItemOrderMenuItem

!new ItemOrder('ioRes17_2')
!ioRes17_2.time := Time('19:35')
!insert (res17, ioRes17_2) into ReservationItemOrdered
!insert (ioRes17_2, miShrimpRisotto14) into ItemOrderMenuItem

!new ItemOrder('ioRes17_3')
!ioRes17_3.time := Time('20:05')
!insert (res17, ioRes17_3) into ReservationItemOrdered
!insert (ioRes17_3, miElderflowerSoda14) into ItemOrderMenuItem

!new BusDriver('bd15')
!bd15.name := 'Darryl Stone'
!bd15.dateOfBirth := Date('1969-07-07')
!bd15.phoneNumber := '555-7050'
!bd15.driverLicenseNr := 'D-5129003'

!new BusDriver('bd16')
!bd16.name := 'Selin Aydin'
!bd16.dateOfBirth := Date('1974-02-20')
!bd16.phoneNumber := '555-7051'
!bd16.driverLicenseNr := 'D-8820144'

!new Banquet('banq11')
!banq11.time := Time('18:30')
!banq11.date := Date('2027-01-20')
!banq11.numberPeople := 35
!banq11.name := 'Westside Medical Association'
!banq11.phoneNumber := '555-7060'
!banq11.number := 20001
!banq11.groupName := 'Awards Reception'
!banq11.paymentMethod := #CreditCard
!banq11.busService := true

!insert (rest14, banq11) into RestaurantReservation
!insert (banq11, w30) into ReservationWaiter
!insert (banq11, w31) into ReservationWaiter
!insert (banq11, bd15) into BanquetBusDriver
!insert (banq11, bd16) into BanquetBusDriver

!new Table('tBanq11A')
!tBanq11A.number := 20
!tBanq11A.description := 'Private room table A'
!tBanq11A.capacity := 20

!new Table('tBanq11B')
!tBanq11B.number := 21
!tBanq11B.description := 'Private room table B'
!tBanq11B.capacity := 10

!new Table('tBanq11C')
!tBanq11C.number := 22
!tBanq11C.description := 'Private room table C'
!tBanq11C.capacity := 6

!insert (banq11, tBanq11A) into ReservationTable
!insert (banq11, tBanq11B) into ReservationTable
!insert (banq11, tBanq11C) into ReservationTable

!new ItemOrder('ioBanq11_1')
!ioBanq11_1.time := Time('18:50')
!insert (banq11, ioBanq11_1) into ReservationItemOrdered
!insert (ioBanq11_1, miBeetSalad14) into ItemOrderMenuItem

!new ItemOrder('ioBanq11_2')
!ioBanq11_2.time := Time('19:20')
!insert (banq11, ioBanq11_2) into ReservationItemOrdered
!insert (ioBanq11_2, miShrimpRisotto14) into ItemOrderMenuItem

!new ItemOrder('ioBanq11_3')
!ioBanq11_3.time := Time('19:55')
!insert (banq11, ioBanq11_3) into ReservationItemOrdered
!insert (ioBanq11_3, miChocolateMousse14) into ItemOrderMenuItem

!new Individual('res18')
!res18.time := Time('21:40')
!res18.date := Date('2027-01-14')
!res18.numberPeople := 2
!res18.name := 'Last Minute Booking'
!res18.phoneNumber := '555-7049'
!res18.number := 19002
!res18.seating := #Inside
!res18.smoking := #NonSmoking

!insert (res18, w31) into ReservationWaiter

!new Table('tRes18A')
!tRes18A.number := 9
!tRes18A.description := 'Chef counter two seats'
!tRes18A.capacity := 2
!insert (res18, tRes18A) into ReservationTable

!new ItemOrder('ioRes18_1')
!ioRes18_1.time := Time('21:50')
!insert (res18, ioRes18_1) into ReservationItemOrdered
!insert (ioRes18_1, miElderflowerSoda14) into ItemOrderMenuItem

!new DietaryRequirement('dietReq12')
!dietReq12.diet := #Vegetarian

!new ReportedAllergy('repAlg12')
!repAlg12.allergen := #Seafood
```
## Generation 11 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 259 | 0.00% |
| Multiplicities Errors | 0 | 55 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 14 | 0.00% |
| Phones | 0 | 14 | 0.00% |

# Generation 12
```
!new Restaurant('rest15')
!rest15.name := 'Airport Express Eatery'

!new Owner('own34')
!own34.name := 'Sasha Novak'
!own34.percentageShares := 10
!new Owner('own35')
!own35.name := 'Minho Park'
!own35.percentageShares := 20
!new Owner('own36')
!own36.name := 'Elena Garcia'
!own36.percentageShares := 30
!new Owner('own37')
!own37.name := 'Thomas Wright'
!own37.percentageShares := 40

!insert (rest15, own34) into RestaurantOwner
!insert (rest15, own35) into RestaurantOwner
!insert (rest15, own36) into RestaurantOwner
!insert (rest15, own37) into RestaurantOwner

!new Manager('mgr6')
!mgr6.name := 'Rachel Stone'
!mgr6.dateOfBirth := Date('1988-08-08')
!mgr6.phoneNumber := '555-7700'

!new HeadWaiter('hw15')
!hw15.name := 'Ian Porter'
!hw15.dateOfBirth := Date('1983-04-04')
!hw15.phoneNumber := '555-7701'

!new HeadWaiter('hw16')
!hw16.name := 'Sabine Koch'
!hw16.dateOfBirth := Date('1985-12-12')
!hw16.phoneNumber := '555-7702'

!new Waiter('w32')
!w32.name := 'Nina Lopez'
!w32.dateOfBirth := Date('1999-01-20')
!w32.phoneNumber := '555-7710'
!w32.spokenLanguage := #English

!new Waiter('w33')
!w33.name := 'Rafael Mendez'
!w33.dateOfBirth := Date('1996-07-02')
!w33.phoneNumber := '555-7711'
!w33.spokenLanguage := #Spanish

!new Waiter('w34')
!w34.name := 'Johann Seidel'
!w34.dateOfBirth := Date('1991-10-29')
!w34.phoneNumber := '555-7712'
!w34.spokenLanguage := #German

!insert (hw15, w32) into HeadWaiterWaiter
!insert (hw15, w33) into HeadWaiterWaiter
!insert (hw16, w34) into HeadWaiterWaiter

!new Chef('chef21')
!chef21.name := 'Carla Bianchi'
!chef21.dateOfBirth := Date('1979-03-17')
!chef21.phoneNumber := '555-7720'

!new Chef('chef22')
!chef22.name := 'Hassan Farid'
!chef22.dateOfBirth := Date('1982-09-01')
!chef22.phoneNumber := '555-7721'

!new Cook('cook32')
!cook32.name := 'Devon Gray'
!cook32.dateOfBirth := Date('1994-05-05')
!cook32.phoneNumber := '555-7730'
!cook32.yearsOfExperience := 6

!new Cook('cook33')
!cook33.name := 'Mai Nguyen'
!cook33.dateOfBirth := Date('1998-02-18')
!cook33.phoneNumber := '555-7731'
!cook33.yearsOfExperience := 2

!new Cook('cook34')
!cook34.name := 'Leila Haddad'
!cook34.dateOfBirth := Date('1990-11-11')
!cook34.phoneNumber := '555-7732'
!cook34.yearsOfExperience := 10

!insert (chef21, cook32) into ChefCook
!insert (chef21, cook33) into ChefCook
!insert (chef22, cook34) into ChefCook

!new Allergen('alg15Gluten')
!alg15Gluten.type := #Gluten
!new Allergen('alg15Lactose')
!alg15Lactose.type := #Lactose
!new Allergen('alg15Nuts')
!alg15Nuts.type := #Nuts

!new FoodItem('fiCroissant15')
!fiCroissant15.number := 1201
!fiCroissant15.description := 'Butter croissant'
!fiCroissant15.purchaseFlag := true
!fiCroissant15.unit := #Dozen

!new FoodItem('fiEggs15')
!fiEggs15.number := 1202
!fiEggs15.description := 'Eggs'
!fiEggs15.purchaseFlag := true
!fiEggs15.unit := #Dozen

!new FoodItem('fiGreekYogurt15')
!fiGreekYogurt15.number := 1203
!fiGreekYogurt15.description := 'Greek yogurt'
!fiGreekYogurt15.purchaseFlag := true
!fiGreekYogurt15.unit := #Ounce

!new FoodItem('fiBerries15')
!fiBerries15.number := 1204
!fiBerries15.description := 'Mixed berries'
!fiBerries15.purchaseFlag := true
!fiBerries15.unit := #Pound

!new FoodItem('fiGranola15')
!fiGranola15.number := 1205
!fiGranola15.description := 'House granola'
!fiGranola15.purchaseFlag := false
!fiGranola15.unit := #Ounce

!new FoodItem('fiAlmondButter15')
!fiAlmondButter15.number := 1206
!fiAlmondButter15.description := 'Almond butter'
!fiAlmondButter15.purchaseFlag := true
!fiAlmondButter15.unit := #Ounce

!new FoodItem('fiOrangeJuice15')
!fiOrangeJuice15.number := 1207
!fiOrangeJuice15.description := 'Orange juice'
!fiOrangeJuice15.purchaseFlag := true
!fiOrangeJuice15.unit := #Ounce

!insert (fiCroissant15, alg15Gluten) into FoodItemAllergen
!insert (fiGranola15, alg15Gluten) into FoodItemAllergen
!insert (fiGreekYogurt15, alg15Lactose) into FoodItemAllergen
!insert (fiAlmondButter15, alg15Nuts) into FoodItemAllergen

!new MenuItem('miQuickBreakfast15')
!miQuickBreakfast15.description := 'Croissant with scrambled eggs'
!miQuickBreakfast15.prepTime := 9.0
!miQuickBreakfast15.classification := #Main

!new MenuItem('miYogurtParfait15')
!miYogurtParfait15.description := 'Yogurt parfait with granola and berries'
!miYogurtParfait15.prepTime := 4.0
!miYogurtParfait15.classification := #Dessert

!new MenuItem('miOrangeJuice15')
!miOrangeJuice15.description := 'Fresh orange juice'
!miOrangeJuice15.prepTime := 1.0
!miOrangeJuice15.classification := #Beverage

!new MenuItem('miAlmondBites15')
!miAlmondBites15.description := 'Almond butter bites'
!miAlmondBites15.prepTime := 3.0
!miAlmondBites15.classification := #Apetizer

!insert (miQuickBreakfast15, chef21) into MenuItemChef
!insert (miYogurtParfait15, chef22) into MenuItemChef
!insert (miOrangeJuice15, chef21) into MenuItemChef
!insert (miAlmondBites15, chef22) into MenuItemChef

!insert (miQuickBreakfast15, fiCroissant15) into MenuItemFoodItem
!insert (miQuickBreakfast15, fiEggs15) into MenuItemFoodItem

!insert (miYogurtParfait15, fiGreekYogurt15) into MenuItemFoodItem
!insert (miYogurtParfait15, fiGranola15) into MenuItemFoodItem
!insert (miYogurtParfait15, fiBerries15) into MenuItemFoodItem

!insert (miOrangeJuice15, fiOrangeJuice15) into MenuItemFoodItem

!insert (miAlmondBites15, fiAlmondButter15) into MenuItemFoodItem

!new Individual('res19')
!res19.time := Time('06:10')
!res19.date := Date('2027-02-03')
!res19.numberPeople := 1
!res19.name := 'Early Traveler'
!res19.phoneNumber := '555-7801'
!res19.number := 21001
!res19.seating := #Inside
!res19.smoking := #NonSmoking

!insert (rest15, res19) into RestaurantReservation
!insert (res19, w32) into ReservationWaiter

!new Table('tRes19A')
!tRes19A.number := 1
!tRes19A.description := 'Counter seat'
!tRes19A.capacity := 2
!insert (res19, tRes19A) into ReservationTable

!new ItemOrder('ioRes19_1')
!ioRes19_1.time := Time('06:15')
!insert (res19, ioRes19_1) into ReservationItemOrdered
!insert (ioRes19_1, miOrangeJuice15) into ItemOrderMenuItem

!new ItemOrder('ioRes19_2')
!ioRes19_2.time := Time('06:18')
!insert (res19, ioRes19_2) into ReservationItemOrdered
!insert (ioRes19_2, miQuickBreakfast15) into ItemOrderMenuItem

!new Individual('res20')
!res20.time := Time('07:45')
!res20.date := Date('2027-02-03')
!res20.numberPeople := 8
!res20.name := 'Conference Transfer Group'
!res20.phoneNumber := '555-7802'
!res20.number := 21002
!res20.seating := #Inside
!res20.smoking := #NonSmoking

!insert (rest15, res20) into RestaurantReservation
!insert (res20, w32) into ReservationWaiter
!insert (res20, w33) into ReservationWaiter

!new Table('tRes20A')
!tRes20A.number := 10
!tRes20A.description := 'High-top table A'
!tRes20A.capacity := 4
!insert (res20, tRes20A) into ReservationTable

!new Table('tRes20B')
!tRes20B.number := 11
!tRes20B.description := 'High-top table B'
!tRes20B.capacity := 4
!insert (res20, tRes20B) into ReservationTable

!new ItemOrder('ioRes20_1')
!ioRes20_1.time := Time('08:00')
!insert (res20, ioRes20_1) into ReservationItemOrdered
!insert (ioRes20_1, miYogurtParfait15) into ItemOrderMenuItem

!new ItemOrder('ioRes20_2')
!ioRes20_2.time := Time('08:02')
!insert (res20, ioRes20_2) into ReservationItemOrdered
!insert (ioRes20_2, miOrangeJuice15) into ItemOrderMenuItem

!new ItemOrder('ioRes20_3')
!ioRes20_3.time := Time('08:10')
!insert (res20, ioRes20_3) into ReservationItemOrdered
!insert (ioRes20_3, miAlmondBites15) into ItemOrderMenuItem

!new Banquet('banq12')
!banq12.time := Time('13:00')
!banq12.date := Date('2027-02-04')
!banq12.numberPeople := 120
!banq12.name := 'Flight Crew Reunion Committee'
!banq12.phoneNumber := '555-7803'
!banq12.number := 22001
!banq12.groupName := 'Flight Crew Reunion'
!banq12.paymentMethod := #CreditCard
!banq12.busService := true

!insert (rest15, banq12) into RestaurantReservation
!insert (banq12, w34) into ReservationWaiter

!new Table('tBanq12A')
!tBanq12A.number := 201
!tBanq12A.description := 'Ballroom row A'
!tBanq12A.capacity := 20
!insert (banq12, tBanq12A) into ReservationTable

!new Table('tBanq12B')
!tBanq12B.number := 202
!tBanq12B.description := 'Ballroom row B'
!tBanq12B.capacity := 20
!insert (banq12, tBanq12B) into ReservationTable

!new Table('tBanq12C')
!tBanq12C.number := 203
!tBanq12C.description := 'Ballroom row C'
!tBanq12C.capacity := 20
!insert (banq12, tBanq12C) into ReservationTable

!new Table('tBanq12D')
!tBanq12D.number := 204
!tBanq12D.description := 'Ballroom row D'
!tBanq12D.capacity := 20
!insert (banq12, tBanq12D) into ReservationTable

!new Table('tBanq12E')
!tBanq12E.number := 205
!tBanq12E.description := 'Ballroom row E'
!tBanq12E.capacity := 20
!insert (banq12, tBanq12E) into ReservationTable

!new Table('tBanq12F')
!tBanq12F.number := 206
!tBanq12F.description := 'Ballroom row F'
!tBanq12F.capacity := 20
!insert (banq12, tBanq12F) into ReservationTable

!new ItemOrder('ioBanq12_1')
!ioBanq12_1.time := Time('13:20')
!insert (banq12, ioBanq12_1) into ReservationItemOrdered
!insert (ioBanq12_1, miQuickBreakfast15) into ItemOrderMenuItem

!new ItemOrder('ioBanq12_2')
!ioBanq12_2.time := Time('13:25')
!insert (banq12, ioBanq12_2) into ReservationItemOrdered
!insert (ioBanq12_2, miOrangeJuice15) into ItemOrderMenuItem

!new ItemOrder('ioBanq12_3')
!ioBanq12_3.time := Time('13:40')
!insert (banq12, ioBanq12_3) into ReservationItemOrdered
!insert (ioBanq12_3, miYogurtParfait15) into ItemOrderMenuItem

!new RegularCustomer('cust17')
!cust17.name := 'Samir Youssef'
!cust17.prefferedLanguage := #English

!new DietaryRequirement('dietReq13')
!dietReq13.diet := #Kosher

!new ReportedAllergy('repAlg13')
!repAlg13.allergen := #Nuts
```
## Generation 12 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 265 | 0.00% |
| Multiplicities Errors | 0 | 57 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 14 | 0.00% |
| Phones | 0 | 14 | 0.00% |

# Generation 13
```
!new Restaurant('rest16')
!rest16.name := 'Lakeside Grill'

!new Restaurant('rest17')
!rest17.name := 'Metro Bento'

!new Owner('own38')
!own38.name := 'Quinn Hart'
!own38.percentageShares := 50

!new Owner('own39')
!own39.name := 'Elisa Moreno'
!own39.percentageShares := 30

!new Owner('own40')
!own40.name := 'Viktor Petrenko'
!own40.percentageShares := 20

!new Owner('own41')
!own41.name := 'Sofia Lange'
!own41.percentageShares := 20

!insert (rest16, own38) into RestaurantOwner
!insert (rest16, own39) into RestaurantOwner
!insert (rest16, own40) into RestaurantOwner

!insert (rest17, own38) into RestaurantOwner
!insert (rest17, own39) into RestaurantOwner
!insert (rest17, own41) into RestaurantOwner

!new HeadWaiter('hw17')
!hw17.name := 'Monica Hale'
!hw17.dateOfBirth := Date('1984-03-12')
!hw17.phoneNumber := '555-8800'

!new HeadWaiter('hw18')
!hw18.name := 'Armin Keller'
!hw18.dateOfBirth := Date('1980-11-06')
!hw18.phoneNumber := '555-8801'

!new Waiter('w35')
!w35.name := 'Jorge Alvarez'
!w35.dateOfBirth := Date('1996-05-02')
!w35.phoneNumber := '555-8810'
!w35.spokenLanguage := #Spanish

!new Waiter('w36')
!w36.name := 'Emily Nguyen'
!w36.dateOfBirth := Date('1999-09-19')
!w36.phoneNumber := '555-8811'
!w36.spokenLanguage := #English

!new Waiter('w37')
!w37.name := 'Nico Schneider'
!w37.dateOfBirth := Date('1993-01-23')
!w37.phoneNumber := '555-8812'
!w37.spokenLanguage := #German

!insert (hw17, w35) into HeadWaiterWaiter
!insert (hw17, w36) into HeadWaiterWaiter
!insert (hw18, w37) into HeadWaiterWaiter

!new Chef('chef23')
!chef23.name := 'Daniela Rizzo'
!chef23.dateOfBirth := Date('1978-07-28')
!chef23.phoneNumber := '555-8900'

!new Chef('chef24')
!chef24.name := 'Hiro Matsuda'
!chef24.dateOfBirth := Date('1982-02-17')
!chef24.phoneNumber := '555-8901'

!new Cook('cook35')
!cook35.name := 'Amina Farouk'
!cook35.dateOfBirth := Date('1991-10-10')
!cook35.phoneNumber := '555-8910'
!cook35.yearsOfExperience := 7

!new Cook('cook36')
!cook36.name := 'Calvin Brooks'
!cook36.dateOfBirth := Date('1998-04-14')
!cook36.phoneNumber := '555-8911'
!cook36.yearsOfExperience := 1

!new Cook('cook37')
!cook37.name := 'Marta Zielinska'
!cook37.dateOfBirth := Date('1989-12-03')
!cook37.phoneNumber := '555-8912'
!cook37.yearsOfExperience := 12

!insert (chef23, cook35) into ChefCook
!insert (chef23, cook36) into ChefCook
!insert (chef24, cook37) into ChefCook

!new Allergen('alg16Gluten')
!alg16Gluten.type := #Gluten

!new Allergen('alg16Lactose')
!alg16Lactose.type := #Lactose

!new FoodItem('fiBeef16')
!fiBeef16.number := 1301
!fiBeef16.description := 'Sliced roast beef'
!fiBeef16.purchaseFlag := true
!fiBeef16.unit := #Pound

!new FoodItem('fiBread16')
!fiBread16.number := 1302
!fiBread16.description := 'Sandwich rolls'
!fiBread16.purchaseFlag := true
!fiBread16.unit := #Dozen

!new FoodItem('fiButter16')
!fiButter16.number := 1303
!fiButter16.description := 'Salted butter'
!fiButter16.purchaseFlag := true
!fiButter16.unit := #Ounce

!new FoodItem('fiCoffee16')
!fiCoffee16.number := 1304
!fiCoffee16.description := 'Coffee beans'
!fiCoffee16.purchaseFlag := true
!fiCoffee16.unit := #Pound

!new FoodItem('fiMilk16')
!fiMilk16.number := 1305
!fiMilk16.description := 'Milk'
!fiMilk16.purchaseFlag := true
!fiMilk16.unit := #Ounce

!new FoodItem('fiBerries16')
!fiBerries16.number := 1306
!fiBerries16.description := 'Mixed berries'
!fiBerries16.purchaseFlag := true
!fiBerries16.unit := #Pound

!insert (fiBread16, alg16Gluten) into FoodItemAllergen
!insert (fiButter16, alg16Lactose) into FoodItemAllergen
!insert (fiMilk16, alg16Lactose) into FoodItemAllergen

!new MenuItem('miSteakSandwich16')
!miSteakSandwich16.description := 'Roast beef sandwich on fresh roll'
!miSteakSandwich16.prepTime := 11.0
!miSteakSandwich16.classification := #Main

!new MenuItem('miIcedLatte16')
!miIcedLatte16.description := 'Iced latte'
!miIcedLatte16.prepTime := 3.0
!miIcedLatte16.classification := #Beverage

!new MenuItem('miBerryTart16')
!miBerryTart16.description := 'Berry tart slice'
!miBerryTart16.prepTime := 8.0
!miBerryTart16.classification := #Dessert

!new MenuItem('miGarlicBread16')
!miGarlicBread16.description := 'Garlic bread side'
!miGarlicBread16.prepTime := 5.0
!miGarlicBread16.classification := #Apetizer

!insert (miSteakSandwich16, chef23) into MenuItemChef
!insert (miIcedLatte16, chef24) into MenuItemChef
!insert (miBerryTart16, chef24) into MenuItemChef
!insert (miGarlicBread16, chef23) into MenuItemChef

!insert (miSteakSandwich16, fiBeef16) into MenuItemFoodItem
!insert (miSteakSandwich16, fiBread16) into MenuItemFoodItem

!insert (miIcedLatte16, fiCoffee16) into MenuItemFoodItem
!insert (miIcedLatte16, fiMilk16) into MenuItemFoodItem

!insert (miBerryTart16, fiBerries16) into MenuItemFoodItem
!insert (miBerryTart16, fiButter16) into MenuItemFoodItem
!insert (miBerryTart16, fiBread16) into MenuItemFoodItem

!insert (miGarlicBread16, fiBread16) into MenuItemFoodItem
!insert (miGarlicBread16, fiButter16) into MenuItemFoodItem

!new Individual('res21')
!res21.time := Time('17:25')
!res21.date := Date('2027-03-10')
!res21.numberPeople := 5
!res21.name := 'Family Lake Trip'
!res21.phoneNumber := '555-9009'
!res21.number := 23001
!res21.seating := #Patio
!res21.smoking := #NonSmoking

!insert (rest16, res21) into RestaurantReservation
!insert (res21, w35) into ReservationWaiter

!new Table('tRes21A')
!tRes21A.number := 31
!tRes21A.description := 'Patio table near railing'
!tRes21A.capacity := 6
!insert (res21, tRes21A) into ReservationTable

!new ItemOrder('ioRes21_1')
!ioRes21_1.time := Time('17:40')
!insert (res21, ioRes21_1) into ReservationItemOrdered
!insert (ioRes21_1, miGarlicBread16) into ItemOrderMenuItem

!new ItemOrder('ioRes21_2')
!ioRes21_2.time := Time('18:05')
!insert (res21, ioRes21_2) into ReservationItemOrdered
!insert (ioRes21_2, miSteakSandwich16) into ItemOrderMenuItem

!new RegularCustomer('cust18')
!cust18.name := 'Mina Ortiz'
!cust18.prefferedLanguage := #Spanish

!new Individual('res22')
!res22.time := Time('22:10')
!res22.date := Date('2027-03-10')
!res22.numberPeople := 2
!res22.name := 'Mina Ortiz'
!res22.phoneNumber := '555-9010'
!res22.number := 23002
!res22.seating := #Inside
!res22.smoking := #Smoking

!insert (res22, cust18) into ReservationCustomer
!insert (res22, w36) into ReservationWaiter

!new Table('tRes22A')
!tRes22A.number := 99
!tRes22A.description := 'Late-night two-top'
!tRes22A.capacity := 2
!insert (res22, tRes22A) into ReservationTable

!new ItemOrder('ioRes22_1')
!ioRes22_1.time := Time('22:20')
!insert (res22, ioRes22_1) into ReservationItemOrdered
!insert (ioRes22_1, miIcedLatte16) into ItemOrderMenuItem

!new Banquet('banq13')
!banq13.time := Time('12:15')
!banq13.date := Date('2027-03-12')
!banq13.numberPeople := 16
!banq13.name := 'Bento Office Team'
!banq13.phoneNumber := '555-9100'
!banq13.number := 24001
!banq13.groupName := 'Quarterly Planning Lunch'
!banq13.paymentMethod := #Cash
!banq13.busService := false

!insert (rest17, banq13) into RestaurantReservation
!insert (banq13, w36) into ReservationWaiter
!insert (banq13, w37) into ReservationWaiter

!new Table('tBanq13A')
!tBanq13A.number := 401
!tBanq13A.description := 'Shared table A'
!tBanq13A.capacity := 8
!insert (banq13, tBanq13A) into ReservationTable

!new Table('tBanq13B')
!tBanq13B.number := 402
!tBanq13B.description := 'Shared table B'
!tBanq13B.capacity := 10
!insert (banq13, tBanq13B) into ReservationTable

!new ItemOrder('ioBanq13_1')
!ioBanq13_1.time := Time('12:35')
!insert (banq13, ioBanq13_1) into ReservationItemOrdered
!insert (ioBanq13_1, miSteakSandwich16) into ItemOrderMenuItem

!new ItemOrder('ioBanq13_2')
!ioBanq13_2.time := Time('12:40')
!insert (banq13, ioBanq13_2) into ReservationItemOrdered
!insert (ioBanq13_2, miIcedLatte16) into ItemOrderMenuItem

!new ItemOrder('ioBanq13_3')
!ioBanq13_3.time := Time('13:05')
!insert (banq13, ioBanq13_3) into ReservationItemOrdered
!insert (ioBanq13_3, miBerryTart16) into ItemOrderMenuItem

!new DietaryRequirement('dietReq14')
!dietReq14.diet := #Vegan

!new ReportedAllergy('repAlg14')
!repAlg14.allergen := #Gluten
```
## Generation 13 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 226 | 0.00% |
| Multiplicities Errors | 0 | 51 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 13 | 0.00% |
| Phones | 0 | 13 | 0.00% |

# Generation 14
```
!new Restaurant('rest18')
!rest18.name := 'Polar Lights Cantina'

!new Owner('own42')
!own42.name := 'Iris Coleman'
!own42.percentageShares := 45

!new Owner('own43')
!own43.name := 'Noah Petrov'
!own43.percentageShares := 35

!new Owner('own44')
!own44.name := 'Selma Aydin'
!own44.percentageShares := 20

!insert (rest18, own42) into RestaurantOwner
!insert (rest18, own43) into RestaurantOwner
!insert (rest18, own44) into RestaurantOwner

!new HeadWaiter('hw19')
!hw19.name := 'Grant Holloway'
!hw19.dateOfBirth := Date('1982-08-31')
!hw19.phoneNumber := '555-8600'

!new Waiter('w38')
!w38.name := 'Sienna Park'
!w38.dateOfBirth := Date('1998-03-06')
!w38.phoneNumber := '555-8601'
!w38.spokenLanguage := #English

!new Waiter('w39')
!w39.name := 'Mateo Cruz'
!w39.dateOfBirth := Date('1994-09-24')
!w39.phoneNumber := '555-8602'
!w39.spokenLanguage := #Spanish

!new Waiter('w40')
!w40.name := 'Anja Weber'
!w40.dateOfBirth := Date('1996-12-12')
!w40.phoneNumber := '555-8603'
!w40.spokenLanguage := #German

!insert (hw19, w38) into HeadWaiterWaiter
!insert (hw19, w39) into HeadWaiterWaiter
!insert (hw19, w40) into HeadWaiterWaiter

!new Chef('chef25')
!chef25.name := 'Marisol Vega'
!chef25.dateOfBirth := Date('1976-04-02')
!chef25.phoneNumber := '555-8610'

!new Chef('chef26')
!chef26.name := 'Luca Marino'
!chef26.dateOfBirth := Date('1980-10-15')
!chef26.phoneNumber := '555-8611'

!new Cook('cook38')
!cook38.name := 'Heather Lin'
!cook38.dateOfBirth := Date('1990-02-17')
!cook38.phoneNumber := '555-8620'
!cook38.yearsOfExperience := 9

!new Cook('cook39')
!cook39.name := 'Rafael Ortega'
!cook39.dateOfBirth := Date('1997-07-01')
!cook39.phoneNumber := '555-8621'
!cook39.yearsOfExperience := 2

!new Cook('cook40')
!cook40.name := 'Daria Novak'
!cook40.dateOfBirth := Date('1989-11-28')
!cook40.phoneNumber := '555-8622'
!cook40.yearsOfExperience := 12

!insert (chef25, cook38) into ChefCook
!insert (chef25, cook39) into ChefCook
!insert (chef26, cook40) into ChefCook

!new Allergen('alg18Gluten')
!alg18Gluten.type := #Gluten

!new Allergen('alg18Lactose')
!alg18Lactose.type := #Lactose

!new FoodItem('fiTortillas18')
!fiTortillas18.number := 1401
!fiTortillas18.description := 'Flour tortillas'
!fiTortillas18.purchaseFlag := true
!fiTortillas18.unit := #Dozen

!new FoodItem('fiBeef18')
!fiBeef18.number := 1402
!fiBeef18.description := 'Seasoned beef'
!fiBeef18.purchaseFlag := true
!fiBeef18.unit := #Pound

!new FoodItem('fiRice18')
!fiRice18.number := 1403
!fiRice18.description := 'Long-grain rice'
!fiRice18.purchaseFlag := true
!fiRice18.unit := #Pound

!new FoodItem('fiBeans18')
!fiBeans18.number := 1404
!fiBeans18.description := 'Black beans'
!fiBeans18.purchaseFlag := true
!fiBeans18.unit := #Gram

!new FoodItem('fiFlour18')
!fiFlour18.number := 1405
!fiFlour18.description := 'Pastry flour'
!fiFlour18.purchaseFlag := true
!fiFlour18.unit := #Pound

!new FoodItem('fiSugar18')
!fiSugar18.number := 1406
!fiSugar18.description := 'Cane sugar'
!fiSugar18.purchaseFlag := true
!fiSugar18.unit := #Pound

!new FoodItem('fiMilk18')
!fiMilk18.number := 1407
!fiMilk18.description := 'Whole milk'
!fiMilk18.purchaseFlag := true
!fiMilk18.unit := #Ounce

!insert (fiTortillas18, alg18Gluten) into FoodItemAllergen
!insert (fiFlour18, alg18Gluten) into FoodItemAllergen
!insert (fiMilk18, alg18Lactose) into FoodItemAllergen

!new MenuItem('miTacos18')
!miTacos18.description := 'Beef tacos with flour tortillas'
!miTacos18.prepTime := 13.0
!miTacos18.classification := #Main

!new MenuItem('miVeggieBowl18')
!miVeggieBowl18.description := 'Rice and black bean bowl'
!miVeggieBowl18.prepTime := 10.0
!miVeggieBowl18.classification := #Main

!new MenuItem('miChurros18')
!miChurros18.description := 'Churros with sugar'
!miChurros18.prepTime := 9.0
!miChurros18.classification := #Dessert

!new MenuItem('miHorchata18')
!miHorchata18.description := 'Horchata'
!miHorchata18.prepTime := 3.0
!miHorchata18.classification := #Beverage

!new MenuItem('miSalsaChips18')
!miSalsaChips18.description := 'Chips with salsa'
!miSalsaChips18.prepTime := 4.0
!miSalsaChips18.classification := #Apetizer

!insert (miTacos18, chef25) into MenuItemChef
!insert (miVeggieBowl18, chef25) into MenuItemChef
!insert (miSalsaChips18, chef25) into MenuItemChef
!insert (miChurros18, chef26) into MenuItemChef
!insert (miHorchata18, chef26) into MenuItemChef

!insert (miTacos18, fiTortillas18) into MenuItemFoodItem
!insert (miTacos18, fiBeef18) into MenuItemFoodItem

!insert (miVeggieBowl18, fiRice18) into MenuItemFoodItem
!insert (miVeggieBowl18, fiBeans18) into MenuItemFoodItem

!insert (miChurros18, fiFlour18) into MenuItemFoodItem
!insert (miChurros18, fiSugar18) into MenuItemFoodItem

!insert (miHorchata18, fiMilk18) into MenuItemFoodItem
!insert (miHorchata18, fiSugar18) into MenuItemFoodItem

!insert (miSalsaChips18, fiTortillas18) into MenuItemFoodItem

!new BusDriver('bd17')
!bd17.name := 'Nikolai Reed'
!bd17.dateOfBirth := Date('1967-05-21')
!bd17.phoneNumber := '555-8630'
!bd17.driverLicenseNr := 'D-6301194'

!new BusDriver('bd18')
!bd18.name := 'Patricia Owens'
!bd18.dateOfBirth := Date('1973-01-09')
!bd18.phoneNumber := '555-8631'
!bd18.driverLicenseNr := 'D-9902810'

!new Banquet('banq14')
!banq14.time := Time('14:00')
!banq14.date := Date('2027-04-05')
!banq14.numberPeople := 28
!banq14.name := 'Aviation Club'
!banq14.phoneNumber := '555-8640'
!banq14.number := 25001
!banq14.groupName := 'Pilot Luncheon'
!banq14.paymentMethod := #Cash
!banq14.busService := true

!insert (rest18, banq14) into RestaurantReservation
!insert (banq14, w38) into ReservationWaiter
!insert (banq14, w39) into ReservationWaiter
!insert (banq14, bd17) into BanquetBusDriver
!insert (banq14, bd18) into BanquetBusDriver

!new Table('tBanq14A')
!tBanq14A.number := 501
!tBanq14A.description := 'Banquet table A'
!tBanq14A.capacity := 16
!insert (banq14, tBanq14A) into ReservationTable

!new Table('tBanq14B')
!tBanq14B.number := 502
!tBanq14B.description := 'Banquet table B'
!tBanq14B.capacity := 12
!insert (banq14, tBanq14B) into ReservationTable

!new ItemOrder('ioBanq14_1')
!ioBanq14_1.time := Time('14:15')
!insert (banq14, ioBanq14_1) into ReservationItemOrdered
!insert (ioBanq14_1, miSalsaChips18) into ItemOrderMenuItem

!new ItemOrder('ioBanq14_2')
!ioBanq14_2.time := Time('14:30')
!insert (banq14, ioBanq14_2) into ReservationItemOrdered
!insert (ioBanq14_2, miTacos18) into ItemOrderMenuItem

!new ItemOrder('ioBanq14_3')
!ioBanq14_3.time := Time('14:55')
!insert (banq14, ioBanq14_3) into ReservationItemOrdered
!insert (ioBanq14_3, miHorchata18) into ItemOrderMenuItem

!new RegularCustomer('cust19')
!cust19.name := 'Lena Rossi'
!cust19.prefferedLanguage := #Italian

!new Individual('res23')
!res23.time := Time('19:10')
!res23.date := Date('2027-04-05')
!res23.numberPeople := 10
!res23.name := 'Evening Tour Group'
!res23.phoneNumber := '555-8650'
!res23.number := 25002
!res23.seating := #Patio
!res23.smoking := #NonSmoking

!insert (rest18, res23) into RestaurantReservation
!insert (res23, cust19) into ReservationCustomer
!insert (res23, w40) into ReservationWaiter

!new Table('tRes23A')
!tRes23A.number := 41
!tRes23A.description := 'Patio table A'
!tRes23A.capacity := 6
!insert (res23, tRes23A) into ReservationTable

!new Table('tRes23B')
!tRes23B.number := 42
!tRes23B.description := 'Patio table B'
!tRes23B.capacity := 4
!insert (res23, tRes23B) into ReservationTable

!new ItemOrder('ioRes23_1')
!ioRes23_1.time := Time('19:25')
!insert (res23, ioRes23_1) into ReservationItemOrdered
!insert (ioRes23_1, miVeggieBowl18) into ItemOrderMenuItem

!new ItemOrder('ioRes23_2')
!ioRes23_2.time := Time('19:40')
!insert (res23, ioRes23_2) into ReservationItemOrdered
!insert (ioRes23_2, miTacos18) into ItemOrderMenuItem

!new ItemOrder('ioRes23_3')
!ioRes23_3.time := Time('20:05')
!insert (res23, ioRes23_3) into ReservationItemOrdered
!insert (ioRes23_3, miChurros18) into ItemOrderMenuItem

!new Individual('res24')
!res24.time := Time('18:00')
!res24.date := Date('2027-04-06')
!res24.numberPeople := 2
!res24.name := 'Pending Booking'
!res24.phoneNumber := '555-8651'
!res24.number := 25003
!res24.seating := #Inside
!res24.smoking := #NonSmoking

!insert (res24, w39) into ReservationWaiter

!new Table('tRes24A')
!tRes24A.number := 7
!tRes24A.description := 'Two-top by entry'
!tRes24A.capacity := 2
!insert (res24, tRes24A) into ReservationTable

!new DietaryRequirement('dietReq15')
!dietReq15.diet := #Vegan

!new ReportedAllergy('repAlg15')
!repAlg15.allergen := #Gluten
```
## Generation 14 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 241 | 0.00% |
| Multiplicities Errors | 0 | 52 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 14 | 0.00% |
| Phones | 0 | 14 | 0.00% |

# Generation 15
```
!new Restaurant('rest19')
!rest19.name := 'Heritage Bakery & Kitchen'

!new Restaurant('rest20')
!rest20.name := 'Night Owl Bar & Grill'

!new Owner('own45')
!own45.name := 'Daphne Nguyen'
!own45.percentageShares := 50

!new Owner('own46')
!own46.name := 'Robert Stein'
!own46.percentageShares := 30

!new Owner('own47')
!own47.name := 'Salma Idris'
!own47.percentageShares := 20

!insert (rest19, own45) into RestaurantOwner
!insert (rest19, own46) into RestaurantOwner
!insert (rest19, own47) into RestaurantOwner

!insert (rest20, own45) into RestaurantOwner
!insert (rest20, own46) into RestaurantOwner
!insert (rest20, own47) into RestaurantOwner

!new Manager('mgr7')
!mgr7.name := 'Julian Cross'
!mgr7.dateOfBirth := Date('1981-06-06')
!mgr7.phoneNumber := '555-6108'

!new HeadWaiter('hw20')
!hw20.name := 'Alicia Romero'
!hw20.dateOfBirth := Date('1989-03-10')
!hw20.phoneNumber := '555-6110'

!new Waiter('w41')
!w41.name := 'Jonah Kim'
!w41.dateOfBirth := Date('1998-01-22')
!w41.phoneNumber := '555-6111'
!w41.spokenLanguage := #English

!new Waiter('w42')
!w42.name := 'Marina Costa'
!w42.dateOfBirth := Date('1996-09-30')
!w42.phoneNumber := '555-6112'
!w42.spokenLanguage := #Italian

!insert (hw20, w41) into HeadWaiterWaiter
!insert (hw20, w42) into HeadWaiterWaiter

!new HeadWaiter('hw21')
!hw21.name := 'Felix Weber'
!hw21.dateOfBirth := Date('1984-12-01')
!hw21.phoneNumber := '555-6120'

!new Waiter('w43')
!w43.name := 'Helena Ortiz'
!w43.dateOfBirth := Date('1995-05-14')
!w43.phoneNumber := '555-6121'
!w43.spokenLanguage := #Spanish

!insert (hw21, w43) into HeadWaiterWaiter

!new Chef('chef27')
!chef27.name := 'Pierre Lambert'
!chef27.dateOfBirth := Date('1976-02-19')
!chef27.phoneNumber := '555-6200'

!new Cook('cook41')
!cook41.name := 'Ava Schultz'
!cook41.dateOfBirth := Date('1991-11-08')
!cook41.phoneNumber := '555-6201'
!cook41.yearsOfExperience := 6

!new Cook('cook42')
!cook42.name := 'Omar Nasser'
!cook42.dateOfBirth := Date('1997-07-16')
!cook42.phoneNumber := '555-6202'
!cook42.yearsOfExperience := 2

!insert (chef27, cook41) into ChefCook
!insert (chef27, cook42) into ChefCook

!new Chef('chef28')
!chef28.name := 'Greta Hoffmann'
!chef28.dateOfBirth := Date('1980-10-04')
!chef28.phoneNumber := '555-6210'

!new Cook('cook43')
!cook43.name := 'Keiko Tanaka'
!cook43.dateOfBirth := Date('1990-04-25')
!cook43.phoneNumber := '555-6211'
!cook43.yearsOfExperience := 11

!insert (chef28, cook43) into ChefCook

!new Allergen('algGluten19')
!algGluten19.type := #Gluten
!new Allergen('algLactose19')
!algLactose19.type := #Lactose
!new Allergen('algNuts19')
!algNuts19.type := #Nuts

!new FoodItem('fiFlour19')
!fiFlour19.number := 1501
!fiFlour19.description := 'Bread flour'
!fiFlour19.purchaseFlag := true
!fiFlour19.unit := #Pound

!new FoodItem('fiButter19')
!fiButter19.number := 1502
!fiButter19.description := 'Unsalted butter'
!fiButter19.purchaseFlag := true
!fiButter19.unit := #Ounce

!new FoodItem('fiAlmonds19')
!fiAlmonds19.number := 1503
!fiAlmonds19.description := 'Toasted almonds'
!fiAlmonds19.purchaseFlag := true
!fiAlmonds19.unit := #Ounce

!new FoodItem('fiLettuce19')
!fiLettuce19.number := 1504
!fiLettuce19.description := 'Baby greens'
!fiLettuce19.purchaseFlag := true
!fiLettuce19.unit := #Gram

!new FoodItem('fiChicken19')
!fiChicken19.number := 1505
!fiChicken19.description := 'Roasted chicken'
!fiChicken19.purchaseFlag := true
!fiChicken19.unit := #Pound

!new FoodItem('fiCoffee19')
!fiCoffee19.number := 1506
!fiCoffee19.description := 'Espresso beans'
!fiCoffee19.purchaseFlag := true
!fiCoffee19.unit := #Pound

!insert (fiFlour19, algGluten19) into FoodItemAllergen
!insert (fiButter19, algLactose19) into FoodItemAllergen
!insert (fiAlmonds19, algNuts19) into FoodItemAllergen

!new MenuItem('miAlmondCroissant19')
!miAlmondCroissant19.description := 'Almond croissant'
!miAlmondCroissant19.prepTime := 6.0
!miAlmondCroissant19.classification := #Dessert

!new MenuItem('miChickenGreens19')
!miChickenGreens19.description := 'Chicken and greens salad'
!miChickenGreens19.prepTime := 10.0
!miChickenGreens19.classification := #Main

!new MenuItem('miBreadBasket19')
!miBreadBasket19.description := 'Warm bread basket'
!miBreadBasket19.prepTime := 4.0
!miBreadBasket19.classification := #Apetizer

!new MenuItem('miEspresso19')
!miEspresso19.description := 'Double espresso'
!miEspresso19.prepTime := 1.5
!miEspresso19.classification := #Beverage

!insert (miAlmondCroissant19, chef28) into MenuItemChef
!insert (miChickenGreens19, chef27) into MenuItemChef
!insert (miBreadBasket19, chef27) into MenuItemChef
!insert (miEspresso19, chef28) into MenuItemChef

!insert (miAlmondCroissant19, fiFlour19) into MenuItemFoodItem
!insert (miAlmondCroissant19, fiButter19) into MenuItemFoodItem
!insert (miAlmondCroissant19, fiAlmonds19) into MenuItemFoodItem

!insert (miChickenGreens19, fiChicken19) into MenuItemFoodItem
!insert (miChickenGreens19, fiLettuce19) into MenuItemFoodItem

!insert (miBreadBasket19, fiFlour19) into MenuItemFoodItem
!insert (miBreadBasket19, fiButter19) into MenuItemFoodItem

!insert (miEspresso19, fiCoffee19) into MenuItemFoodItem

!new BusDriver('bd19')
!bd19.name := 'Megan Pierce'
!bd19.dateOfBirth := Date('1971-09-09')
!bd19.phoneNumber := '555-6305'
!bd19.driverLicenseNr := 'D-5157001'

!new BusDriver('bd20')
!bd20.name := 'Karim Boulos'
!bd20.dateOfBirth := Date('1968-03-03')
!bd20.phoneNumber := '555-6306'
!bd20.driverLicenseNr := 'D-8827009'

!new Banquet('banq15')
!banq15.time := Time('10:30')
!banq15.date := Date('2027-05-18')
!banq15.numberPeople := 55
!banq15.name := 'Regional Sales Meetup'
!banq15.phoneNumber := '555-6400'
!banq15.number := 26001
!banq15.groupName := 'North Region Q2 Breakfast'
!banq15.paymentMethod := #CreditCard
!banq15.busService := true

!insert (banq15, w41) into ReservationWaiter
!insert (banq15, w43) into ReservationWaiter
!insert (banq15, bd19) into BanquetBusDriver
!insert (banq15, bd20) into BanquetBusDriver

!new Table('tBanq15A')
!tBanq15A.number := 801
!tBanq15A.description := 'Conference hall table A'
!tBanq15A.capacity := 20

!new Table('tBanq15B')
!tBanq15B.number := 802
!tBanq15B.description := 'Conference hall table B'
!tBanq15B.capacity := 20

!new Table('tBanq15C')
!tBanq15C.number := 803
!tBanq15C.description := 'Conference hall table C'
!tBanq15C.capacity := 20

!insert (banq15, tBanq15A) into ReservationTable
!insert (banq15, tBanq15B) into ReservationTable
!insert (banq15, tBanq15C) into ReservationTable

!new ItemOrder('ioBanq15_1')
!ioBanq15_1.time := Time('10:40')
!insert (banq15, ioBanq15_1) into ReservationItemOrdered
!insert (ioBanq15_1, miBreadBasket19) into ItemOrderMenuItem

!new ItemOrder('ioBanq15_2')
!ioBanq15_2.time := Time('10:45')
!insert (banq15, ioBanq15_2) into ReservationItemOrdered
!insert (ioBanq15_2, miEspresso19) into ItemOrderMenuItem

!new ItemOrder('ioBanq15_3')
!ioBanq15_3.time := Time('11:10')
!insert (banq15, ioBanq15_3) into ReservationItemOrdered
!insert (ioBanq15_3, miChickenGreens19) into ItemOrderMenuItem

!new ItemOrder('ioBanq15_4')
!ioBanq15_4.time := Time('11:25')
!insert (banq15, ioBanq15_4) into ReservationItemOrdered
!insert (ioBanq15_4, miAlmondCroissant19) into ItemOrderMenuItem

!new DietaryRequirement('dietReq16')
!dietReq16.diet := #Vegetarian

!new ReportedAllergy('repAlg16')
!repAlg16.allergen := #Nuts
```
## Generation 15 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 201 | 0.00% |
| Multiplicities Errors | 0 | 42 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 14 | 0.00% |
| Phones | 0 | 14 | 0.00% |

# Generation 16
```
!new Restaurant('rest21')
!rest21.name := 'Pop-Up Pierogi House'

!new Restaurant('rest22')
!rest22.name := 'Quiet Tea Corner'

!new Owner('own48')
!own48.name := 'Karolina Nowak'
!own48.percentageShares := 50

!new Owner('own49')
!own49.name := 'Elias Romero'
!own49.percentageShares := 30

!new Owner('own50')
!own50.name := 'Wen Li'
!own50.percentageShares := 20

!new Owner('own51')
!own51.name := 'Harriet Bloom'
!own51.percentageShares := 50

!insert (rest21, own48) into RestaurantOwner
!insert (rest21, own49) into RestaurantOwner
!insert (rest21, own50) into RestaurantOwner

!insert (rest22, own48) into RestaurantOwner
!insert (rest22, own51) into RestaurantOwner

!new HeadWaiter('hw22')
!hw22.name := 'Victor Shaw'
!hw22.dateOfBirth := Date('1986-09-02')
!hw22.phoneNumber := '555-4109'

!new HeadWaiter('hw23')
!hw23.name := 'Lara Neumann'
!hw23.dateOfBirth := Date('1983-01-30')
!hw23.phoneNumber := '555-4110'

!new Waiter('w44')
!w44.name := 'Sofia Marin'
!w44.dateOfBirth := Date('1999-05-05')
!w44.phoneNumber := '555-4111'
!w44.spokenLanguage := #Italian

!new Waiter('w45')
!w45.name := 'Diego Serrano'
!w45.dateOfBirth := Date('1996-08-18')
!w45.phoneNumber := '555-4112'
!w45.spokenLanguage := #Spanish

!new Waiter('w46')
!w46.name := 'Hannah Keller'
!w46.dateOfBirth := Date('1994-11-12')
!w46.phoneNumber := '555-4113'
!w46.spokenLanguage := #German

!insert (hw22, w44) into HeadWaiterWaiter
!insert (hw22, w45) into HeadWaiterWaiter
!insert (hw23, w46) into HeadWaiterWaiter

!new Chef('chef29')
!chef29.name := 'Marek Zielinski'
!chef29.dateOfBirth := Date('1977-03-07')
!chef29.phoneNumber := '555-4209'

!new Chef('chef30')
!chef30.name := 'Nora Schmidt'
!chef30.dateOfBirth := Date('1982-07-21')
!chef30.phoneNumber := '555-4210'

!new Cook('cook44')
!cook44.name := 'Amal Hussein'
!cook44.dateOfBirth := Date('1991-02-28')
!cook44.phoneNumber := '555-4211'
!cook44.yearsOfExperience := 9

!new Cook('cook45')
!cook45.name := 'Tom Jensen'
!cook45.dateOfBirth := Date('1998-10-09')
!cook45.phoneNumber := '555-4212'
!cook45.yearsOfExperience := 0

!new Cook('cook46')
!cook46.name := 'Mina Park'
!cook46.dateOfBirth := Date('1989-04-16')
!cook46.phoneNumber := '555-4213'
!cook46.yearsOfExperience := 12

!insert (chef29, cook44) into ChefCook
!insert (chef29, cook45) into ChefCook
!insert (chef30, cook46) into ChefCook

!new Allergen('alg21Gluten')
!alg21Gluten.type := #Gluten

!new Allergen('alg21Lactose')
!alg21Lactose.type := #Lactose

!new Allergen('alg21Nuts')
!alg21Nuts.type := #Nuts

!new FoodItem('fiFlour21')
!fiFlour21.number := 1601
!fiFlour21.description := 'Wheat flour'
!fiFlour21.purchaseFlag := true
!fiFlour21.unit := #Pound

!new FoodItem('fiFarmCheese21')
!fiFarmCheese21.number := 1602
!fiFarmCheese21.description := 'Farm cheese'
!fiFarmCheese21.purchaseFlag := true
!fiFarmCheese21.unit := #Ounce

!new FoodItem('fiSpinach21')
!fiSpinach21.number := 1603
!fiSpinach21.description := 'Spinach'
!fiSpinach21.purchaseFlag := true
!fiSpinach21.unit := #Pound

!new FoodItem('fiWalnuts21')
!fiWalnuts21.number := 1604
!fiWalnuts21.description := 'Walnuts'
!fiWalnuts21.purchaseFlag := true
!fiWalnuts21.unit := #Ounce

!new FoodItem('fiTeaLeaves21')
!fiTeaLeaves21.number := 1605
!fiTeaLeaves21.description := 'Black tea leaves'
!fiTeaLeaves21.purchaseFlag := true
!fiTeaLeaves21.unit := #Gram

!new FoodItem('fiCucumbers21')
!fiCucumbers21.number := 1606
!fiCucumbers21.description := 'Pickling cucumbers'
!fiCucumbers21.purchaseFlag := true
!fiCucumbers21.unit := #Pound

!insert (fiFlour21, alg21Gluten) into FoodItemAllergen
!insert (fiFarmCheese21, alg21Lactose) into FoodItemAllergen
!insert (fiWalnuts21, alg21Nuts) into FoodItemAllergen

!new MenuItem('miPierogi21')
!miPierogi21.description := 'Pierogi with cheese and spinach'
!miPierogi21.prepTime := 25.0
!miPierogi21.classification := #Main

!new MenuItem('miWalnutCake21')
!miWalnutCake21.description := 'Walnut cake slice'
!miWalnutCake21.prepTime := 8.0
!miWalnutCake21.classification := #Dessert

!new MenuItem('miBlackTea21')
!miBlackTea21.description := 'Hot black tea'
!miBlackTea21.prepTime := 2.0
!miBlackTea21.classification := #Beverage

!new MenuItem('miPickles21')
!miPickles21.description := 'House pickles'
!miPickles21.prepTime := 1.0
!miPickles21.classification := #Apetizer

!insert (miPierogi21, chef29) into MenuItemChef
!insert (miPickles21, chef29) into MenuItemChef
!insert (miWalnutCake21, chef30) into MenuItemChef
!insert (miBlackTea21, chef30) into MenuItemChef

!insert (miPierogi21, fiFlour21) into MenuItemFoodItem
!insert (miPierogi21, fiFarmCheese21) into MenuItemFoodItem
!insert (miPierogi21, fiSpinach21) into MenuItemFoodItem

!insert (miWalnutCake21, fiFlour21) into MenuItemFoodItem
!insert (miWalnutCake21, fiWalnuts21) into MenuItemFoodItem
!insert (miWalnutCake21, fiFarmCheese21) into MenuItemFoodItem

!insert (miBlackTea21, fiTeaLeaves21) into MenuItemFoodItem

!insert (miPickles21, fiCucumbers21) into MenuItemFoodItem

!new Individual('res25')
!res25.time := Time('18:10')
!res25.date := Date('2027-06-14')
!res25.numberPeople := 12
!res25.name := 'Community Choir'
!res25.phoneNumber := '555-4300'
!res25.number := 27001
!res25.seating := #Inside
!res25.smoking := #NonSmoking

!insert (res25, w44) into ReservationWaiter
!insert (res25, w45) into ReservationWaiter

!new Table('tRes25A')
!tRes25A.number := 101
!tRes25A.description := 'Main hall table A'
!tRes25A.capacity := 6

!new Table('tRes25B')
!tRes25B.number := 102
!tRes25B.description := 'Main hall table B'
!tRes25B.capacity := 4

!new Table('tRes25C')
!tRes25C.number := 103
!tRes25C.description := 'Main hall table C'
!tRes25C.capacity := 2

!insert (res25, tRes25A) into ReservationTable
!insert (res25, tRes25B) into ReservationTable
!insert (res25, tRes25C) into ReservationTable

!new ItemOrder('ioRes25_1')
!ioRes25_1.time := Time('19:05')
!insert (res25, ioRes25_1) into ReservationItemOrdered
!insert (ioRes25_1, miWalnutCake21) into ItemOrderMenuItem

!new RegularCustomer('cust20')
!cust20.name := 'Amina Yilmaz'
!cust20.prefferedLanguage := #English

!new Banquet('banq16')
!banq16.time := Time('12:00')
!banq16.date := Date('2027-06-15')
!banq16.numberPeople := 25
!banq16.name := 'Amina Yilmaz'
!banq16.phoneNumber := '555-4301'
!banq16.number := 28001
!banq16.groupName := 'Museum Volunteer Brunch'
!banq16.paymentMethod := #Cash
!banq16.busService := false

!insert (rest22, banq16) into RestaurantReservation
!insert (banq16, cust20) into ReservationCustomer
!insert (banq16, w46) into ReservationWaiter

!new Table('tBanq16A')
!tBanq16A.number := 210
!tBanq16A.description := 'Tea room long table'
!tBanq16A.capacity := 30
!insert (banq16, tBanq16A) into ReservationTable

!new ItemOrder('ioBanq16_1')
!ioBanq16_1.time := Time('12:15')
!insert (banq16, ioBanq16_1) into ReservationItemOrdered
!insert (ioBanq16_1, miPickles21) into ItemOrderMenuItem

!new ItemOrder('ioBanq16_2')
!ioBanq16_2.time := Time('12:40')
!insert (banq16, ioBanq16_2) into ReservationItemOrdered
!insert (ioBanq16_2, miPierogi21) into ItemOrderMenuItem

!new ItemOrder('ioBanq16_3')
!ioBanq16_3.time := Time('13:05')
!insert (banq16, ioBanq16_3) into ReservationItemOrdered
!insert (ioBanq16_3, miBlackTea21) into ItemOrderMenuItem

!new DietaryRequirement('dietReq17')
!dietReq17.diet := #Vegan

!new ReportedAllergy('repAlg17')
!repAlg17.allergen := #Gluten
```
## Generation 16 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 207 | 0.00% |
| Multiplicities Errors | 0 | 43 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 12 | 0.00% |
| Phones | 0 | 12 | 0.00% |

# Generation 17
```
!new Restaurant('rest23')
!rest23.name := 'Sky Garden Rooftop'

!new Restaurant('rest24')
!rest24.name := 'Subway Snack Lab'

!new Owner('own52')
!own52.name := 'Morgan Lee'
!own52.percentageShares := 100

!insert (rest23, own52) into RestaurantOwner
!insert (rest24, own52) into RestaurantOwner

!new HeadWaiter('hw24')
!hw24.name := 'Tessa Morgan'
!hw24.dateOfBirth := Date('1986-07-19')
!hw24.phoneNumber := '555-9900'

!new Waiter('w47')
!w47.name := 'Avery Johnson'
!w47.dateOfBirth := Date('1998-02-03')
!w47.phoneNumber := '555-9901'
!w47.spokenLanguage := #English

!new Waiter('w48')
!w48.name := 'Giulia Romano'
!w48.dateOfBirth := Date('1995-10-22')
!w48.phoneNumber := '555-9902'
!w48.spokenLanguage := #Italian

!new Waiter('w49')
!w49.name := 'Mateo Alvarez'
!w49.dateOfBirth := Date('1994-04-16')
!w49.phoneNumber := '555-9903'
!w49.spokenLanguage := #Spanish

!new Waiter('w50')
!w50.name := 'Klara Meier'
!w50.dateOfBirth := Date('1999-12-05')
!w50.phoneNumber := '555-9904'
!w50.spokenLanguage := #German

!insert (hw24, w47) into HeadWaiterWaiter
!insert (hw24, w48) into HeadWaiterWaiter
!insert (hw24, w49) into HeadWaiterWaiter
!insert (hw24, w50) into HeadWaiterWaiter

!new HeadWaiter('hw25')
!hw25.name := 'Jon Perrin'
!hw25.dateOfBirth := Date('1981-03-11')
!hw25.phoneNumber := '555-9910'

!new Waiter('w51')
!w51.name := 'Sana Malik'
!w51.dateOfBirth := Date('1997-06-09')
!w51.phoneNumber := '555-9911'
!w51.spokenLanguage := #English

!insert (hw25, w51) into HeadWaiterWaiter

!new Chef('chef31')
!chef31.name := 'Renata Silva'
!chef31.dateOfBirth := Date('1979-01-23')
!chef31.phoneNumber := '555-9920'

!new Chef('chef32')
!chef32.name := 'Victor Chen'
!chef32.dateOfBirth := Date('1983-09-14')
!chef32.phoneNumber := '555-9921'

!new Cook('cook47')
!cook47.name := 'Elif Demir'
!cook47.dateOfBirth := Date('1991-05-27')
!cook47.phoneNumber := '555-9930'
!cook47.yearsOfExperience := 8

!new Cook('cook48')
!cook48.name := 'Owen Baker'
!cook48.dateOfBirth := Date('1998-08-08')
!cook48.phoneNumber := '555-9931'
!cook48.yearsOfExperience := 1

!new Cook('cook49')
!cook49.name := 'Helena Novak'
!cook49.dateOfBirth := Date('1989-11-30')
!cook49.phoneNumber := '555-9932'
!cook49.yearsOfExperience := 13

!new Cook('cook50')
!cook50.name := 'Diego Santos'
!cook50.dateOfBirth := Date('1996-02-12')
!cook50.phoneNumber := '555-9933'
!cook50.yearsOfExperience := 4

!insert (chef31, cook47) into ChefCook
!insert (chef31, cook48) into ChefCook
!insert (chef32, cook49) into ChefCook
!insert (chef32, cook50) into ChefCook

!new Allergen('alg23Seafood')
!alg23Seafood.type := #Seafood
!new Allergen('alg23Nuts')
!alg23Nuts.type := #Nuts
!new Allergen('alg23Gluten')
!alg23Gluten.type := #Gluten

!new FoodItem('fiOctopus23')
!fiOctopus23.number := 1701
!fiOctopus23.description := 'Octopus'
!fiOctopus23.purchaseFlag := true
!fiOctopus23.unit := #Pound

!new FoodItem('fiTomatoPuree23')
!fiTomatoPuree23.number := 1702
!fiTomatoPuree23.description := 'Tomato puree'
!fiTomatoPuree23.purchaseFlag := true
!fiTomatoPuree23.unit := #Ounce

!new FoodItem('fiPistachios23')
!fiPistachios23.number := 1703
!fiPistachios23.description := 'Pistachios'
!fiPistachios23.purchaseFlag := true
!fiPistachios23.unit := #Ounce

!new FoodItem('fiLemons23')
!fiLemons23.number := 1704
!fiLemons23.description := 'Lemons'
!fiLemons23.purchaseFlag := true
!fiLemons23.unit := #Dozen

!new FoodItem('fiLavender23')
!fiLavender23.number := 1705
!fiLavender23.description := 'Dried lavender'
!fiLavender23.purchaseFlag := true
!fiLavender23.unit := #Gram

!new FoodItem('fiPuffSheets23')
!fiPuffSheets23.number := 1706
!fiPuffSheets23.description := 'Puff pastry sheets'
!fiPuffSheets23.purchaseFlag := true
!fiPuffSheets23.unit := #Sheet

!new FoodItem('fiOliveOil23')
!fiOliveOil23.number := 1707
!fiOliveOil23.description := 'Olive oil'
!fiOliveOil23.purchaseFlag := true
!fiOliveOil23.unit := #Ounce

!insert (fiOctopus23, alg23Seafood) into FoodItemAllergen
!insert (fiPistachios23, alg23Nuts) into FoodItemAllergen
!insert (fiPuffSheets23, alg23Gluten) into FoodItemAllergen

!new MenuItem('miGazpacho23')
!miGazpacho23.description := 'Chilled gazpacho'
!miGazpacho23.prepTime := 5.5
!miGazpacho23.classification := #Apetizer

!new MenuItem('miCharredOctopus23')
!miCharredOctopus23.description := 'Charred octopus with olive oil'
!miCharredOctopus23.prepTime := 19.0
!miCharredOctopus23.classification := #Main

!new MenuItem('miLavenderLemonade23')
!miLavenderLemonade23.description := 'Lavender lemonade'
!miLavenderLemonade23.prepTime := 2.0
!miLavenderLemonade23.classification := #Beverage

!new MenuItem('miPistachioTart23')
!miPistachioTart23.description := 'Pistachio tart'
!miPistachioTart23.prepTime := 9.0
!miPistachioTart23.classification := #Dessert

!insert (miGazpacho23, chef31) into MenuItemChef
!insert (miCharredOctopus23, chef31) into MenuItemChef
!insert (miLavenderLemonade23, chef32) into MenuItemChef
!insert (miPistachioTart23, chef32) into MenuItemChef

!insert (miGazpacho23, fiTomatoPuree23) into MenuItemFoodItem
!insert (miGazpacho23, fiOliveOil23) into MenuItemFoodItem

!insert (miCharredOctopus23, fiOctopus23) into MenuItemFoodItem
!insert (miCharredOctopus23, fiOliveOil23) into MenuItemFoodItem

!insert (miLavenderLemonade23, fiLemons23) into MenuItemFoodItem
!insert (miLavenderLemonade23, fiLavender23) into MenuItemFoodItem

!insert (miPistachioTart23, fiPistachios23) into MenuItemFoodItem
!insert (miPistachioTart23, fiPuffSheets23) into MenuItemFoodItem

!new RegularCustomer('cust21')
!cust21.name := 'Alicia Brown'
!cust21.prefferedLanguage := #English

!new RegularCustomer('cust22')
!cust22.name := 'Giovanni Russo'
!cust22.prefferedLanguage := #Italian

!new Individual('res26')
!res26.time := Time('20:30')
!res26.date := Date('2027-07-04')
!res26.numberPeople := 9
!res26.name := 'Alicia Brown'
!res26.phoneNumber := '555-9940'
!res26.number := 30001
!res26.seating := #Patio
!res26.smoking := #NonSmoking

!insert (rest23, res26) into RestaurantReservation
!insert (res26, cust21) into ReservationCustomer
!insert (res26, w47) into ReservationWaiter
!insert (res26, w48) into ReservationWaiter

!new Table('tRes26A')
!tRes26A.number := 301
!tRes26A.description := 'Rooftop table A'
!tRes26A.capacity := 4

!new Table('tRes26B')
!tRes26B.number := 302
!tRes26B.description := 'Rooftop table B'
!tRes26B.capacity := 4

!new Table('tRes26C')
!tRes26C.number := 303
!tRes26C.description := 'Rooftop side table'
!tRes26C.capacity := 2

!insert (res26, tRes26A) into ReservationTable
!insert (res26, tRes26B) into ReservationTable
!insert (res26, tRes26C) into ReservationTable

!new ItemOrder('ioRes26_1')
!ioRes26_1.time := Time('20:45')
!insert (res26, ioRes26_1) into ReservationItemOrdered
!insert (ioRes26_1, miGazpacho23) into ItemOrderMenuItem

!new ItemOrder('ioRes26_2')
!ioRes26_2.time := Time('21:05')
!insert (res26, ioRes26_2) into ReservationItemOrdered
!insert (ioRes26_2, miCharredOctopus23) into ItemOrderMenuItem

!new ItemOrder('ioRes26_3')
!ioRes26_3.time := Time('21:25')
!insert (res26, ioRes26_3) into ReservationItemOrdered
!insert (ioRes26_3, miLavenderLemonade23) into ItemOrderMenuItem

!new BusDriver('bd21')
!bd21.name := 'Caleb Wright'
!bd21.dateOfBirth := Date('1970-10-10')
!bd21.phoneNumber := '555-9951'
!bd21.driverLicenseNr := 'D-4509012'

!new BusDriver('bd22')
!bd22.name := 'Marta Diaz'
!bd22.dateOfBirth := Date('1978-02-02')
!bd22.phoneNumber := '555-9952'
!bd22.driverLicenseNr := 'D-7782140'

!new Banquet('banq17')
!banq17.time := Time('12:00')
!banq17.date := Date('2027-07-05')
!banq17.numberPeople := 15
!banq17.name := 'Transit Authority'
!banq17.phoneNumber := '555-9960'
!banq17.number := 30002
!banq17.groupName := 'Train Staff Lunch'
!banq17.paymentMethod := #Cash
!banq17.busService := true

!insert (rest24, banq17) into RestaurantReservation
!insert (banq17, w51) into ReservationWaiter
!insert (banq17, w49) into ReservationWaiter
!insert (banq17, bd21) into BanquetBusDriver
!insert (banq17, bd22) into BanquetBusDriver

!new Table('tBanq17A')
!tBanq17A.number := 401
!tBanq17A.description := 'Test kitchen communal table A'
!tBanq17A.capacity := 8

!new Table('tBanq17B')
!tBanq17B.number := 402
!tBanq17B.description := 'Test kitchen communal table B'
!tBanq17B.capacity := 8

!insert (banq17, tBanq17A) into ReservationTable
!insert (banq17, tBanq17B) into ReservationTable

!new ItemOrder('ioBanq17_1')
!ioBanq17_1.time := Time('12:10')
!insert (banq17, ioBanq17_1) into ReservationItemOrdered
!insert (ioBanq17_1, miGazpacho23) into ItemOrderMenuItem

!new ItemOrder('ioBanq17_2')
!ioBanq17_2.time := Time('12:25')
!insert (banq17, ioBanq17_2) into ReservationItemOrdered
!insert (ioBanq17_2, miPistachioTart23) into ItemOrderMenuItem

!new ItemOrder('ioBanq17_3')
!ioBanq17_3.time := Time('12:30')
!insert (banq17, ioBanq17_3) into ReservationItemOrdered
!insert (ioBanq17_3, miLavenderLemonade23) into ItemOrderMenuItem

!new Individual('res27')
!res27.time := Time('18:45')
!res27.date := Date('2027-07-05')
!res27.numberPeople := 2
!res27.name := 'Anonymous Diner'
!res27.phoneNumber := '555-9966'
!res27.number := 30003
!res27.seating := #Inside
!res27.smoking := #Smoking

!insert (res27, w50) into ReservationWaiter

!new Table('tRes27A')
!tRes27A.number := 19
!tRes27A.description := 'Two-top near service station'
!tRes27A.capacity := 2
!insert (res27, tRes27A) into ReservationTable

!new ItemOrder('ioRes27_1')
!ioRes27_1.time := Time('19:00')
!insert (res27, ioRes27_1) into ReservationItemOrdered
!insert (ioRes27_1, miCharredOctopus23) into ItemOrderMenuItem

!new DietaryRequirement('dietReq18')
!dietReq18.diet := #Kosher

!new ReportedAllergy('repAlg18')
!repAlg18.allergen := #Seafood
```
## Generation 17 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 267 | 0.00% |
| Multiplicities Errors | 0 | 56 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 18 | 0.00% |
| Phones | 0 | 18 | 0.00% |

# Generation 18
```
!new Restaurant('rest25')
!rest25.name := 'Museum Courtyard Cafe'

!new Owner('own60')
!own60.name := 'Leonie Kruger'
!own60.percentageShares := 50
!new Owner('own61')
!own61.name := 'Abdul Rahman'
!own61.percentageShares := 25
!new Owner('own62')
!own62.name := 'Carmen Velasquez'
!own62.percentageShares := 25

!insert (rest25, own60) into RestaurantOwner
!insert (rest25, own61) into RestaurantOwner
!insert (rest25, own62) into RestaurantOwner

!new HeadWaiter('hw30')
!hw30.name := 'Bridget Nolan'
!hw30.dateOfBirth := Date('1987-11-23')
!hw30.phoneNumber := '555-3105'

!new Waiter('w60')
!w60.name := 'Teo Marin'
!w60.dateOfBirth := Date('1999-03-08')
!w60.phoneNumber := '555-3106'
!w60.spokenLanguage := #Italian

!new Waiter('w61')
!w61.name := 'Claudia Reyes'
!w61.dateOfBirth := Date('1995-09-27')
!w61.phoneNumber := '555-3107'
!w61.spokenLanguage := #Spanish

!new Waiter('w62')
!w62.name := 'Felix Braun'
!w62.dateOfBirth := Date('1992-01-19')
!w62.phoneNumber := '555-3108'
!w62.spokenLanguage := #German

!insert (hw30, w60) into HeadWaiterWaiter
!insert (hw30, w61) into HeadWaiterWaiter
!insert (hw30, w62) into HeadWaiterWaiter

!new Chef('chef40')
!chef40.name := 'Hana Suzuki'
!chef40.dateOfBirth := Date('1978-09-01')
!chef40.phoneNumber := '555-3115'

!new Chef('chef41')
!chef41.name := 'Mateusz Kowal'
!chef41.dateOfBirth := Date('1983-06-13')
!chef41.phoneNumber := '555-3116'

!new Cook('cook60')
!cook60.name := 'Ravi Desai'
!cook60.dateOfBirth := Date('1991-04-09')
!cook60.phoneNumber := '555-3120'
!cook60.yearsOfExperience := 7

!new Cook('cook61')
!cook61.name := 'Anna Popov'
!cook61.dateOfBirth := Date('1998-12-30')
!cook61.phoneNumber := '555-3121'
!cook61.yearsOfExperience := 1

!new Cook('cook62')
!cook62.name := 'Luis Pereira'
!cook62.dateOfBirth := Date('1989-02-11')
!cook62.phoneNumber := '555-3122'
!cook62.yearsOfExperience := 12

!insert (chef40, cook60) into ChefCook
!insert (chef40, cook61) into ChefCook
!insert (chef41, cook62) into ChefCook

!new Allergen('alg25Gluten')
!alg25Gluten.type := #Gluten
!new Allergen('alg25Lactose')
!alg25Lactose.type := #Lactose
!new Allergen('alg25Nuts')
!alg25Nuts.type := #Nuts

!new FoodItem('fiPhylloSheets25')
!fiPhylloSheets25.number := 1801
!fiPhylloSheets25.description := 'Phyllo pastry sheets'
!fiPhylloSheets25.purchaseFlag := true
!fiPhylloSheets25.unit := #Sheet

!new FoodItem('fiFeta25')
!fiFeta25.number := 1802
!fiFeta25.description := 'Feta cheese'
!fiFeta25.purchaseFlag := true
!fiFeta25.unit := #Ounce

!new FoodItem('fiSpinach25')
!fiSpinach25.number := 1803
!fiSpinach25.description := 'Baby spinach'
!fiSpinach25.purchaseFlag := true
!fiSpinach25.unit := #Gram

!new FoodItem('fiWalnuts25')
!fiWalnuts25.number := 1804
!fiWalnuts25.description := 'Walnuts'
!fiWalnuts25.purchaseFlag := true
!fiWalnuts25.unit := #Ounce

!new FoodItem('fiHoney25')
!fiHoney25.number := 1805
!fiHoney25.description := 'Honey'
!fiHoney25.purchaseFlag := true
!fiHoney25.unit := #Ounce

!new FoodItem('fiCoffeeBeans25')
!fiCoffeeBeans25.number := 1806
!fiCoffeeBeans25.description := 'Coffee beans'
!fiCoffeeBeans25.purchaseFlag := true
!fiCoffeeBeans25.unit := #Pound

!new FoodItem('fiLemon25')
!fiLemon25.number := 1807
!fiLemon25.description := 'Lemons'
!fiLemon25.purchaseFlag := true
!fiLemon25.unit := #Dozen

!insert (fiPhylloSheets25, alg25Gluten) into FoodItemAllergen
!insert (fiFeta25, alg25Lactose) into FoodItemAllergen
!insert (fiWalnuts25, alg25Nuts) into FoodItemAllergen

!new MenuItem('miSpanakopita25')
!miSpanakopita25.description := 'Spanakopita triangle'
!miSpanakopita25.prepTime := 14.0
!miSpanakopita25.classification := #Apetizer

!new MenuItem('miBaklava25')
!miBaklava25.description := 'Baklava square'
!miBaklava25.prepTime := 10.0
!miBaklava25.classification := #Dessert

!new MenuItem('miEspresso25')
!miEspresso25.description := 'Espresso'
!miEspresso25.prepTime := 2.0
!miEspresso25.classification := #Beverage

!new MenuItem('miLemonTea25')
!miLemonTea25.description := 'Hot lemon tea'
!miLemonTea25.prepTime := 3.0
!miLemonTea25.classification := #Beverage

!new MenuItem('miCourtyardPlatter25')
!miCourtyardPlatter25.description := 'Courtyard lunch platter (spinach pie + salad)'
!miCourtyardPlatter25.prepTime := 18.0
!miCourtyardPlatter25.classification := #Main

!insert (miSpanakopita25, chef40) into MenuItemChef
!insert (miCourtyardPlatter25, chef40) into MenuItemChef
!insert (miBaklava25, chef41) into MenuItemChef
!insert (miEspresso25, chef41) into MenuItemChef
!insert (miLemonTea25, chef41) into MenuItemChef

!insert (miSpanakopita25, fiPhylloSheets25) into MenuItemFoodItem
!insert (miSpanakopita25, fiSpinach25) into MenuItemFoodItem
!insert (miSpanakopita25, fiFeta25) into MenuItemFoodItem

!insert (miCourtyardPlatter25, fiPhylloSheets25) into MenuItemFoodItem
!insert (miCourtyardPlatter25, fiSpinach25) into MenuItemFoodItem
!insert (miCourtyardPlatter25, fiFeta25) into MenuItemFoodItem

!insert (miBaklava25, fiPhylloSheets25) into MenuItemFoodItem
!insert (miBaklava25, fiWalnuts25) into MenuItemFoodItem
!insert (miBaklava25, fiHoney25) into MenuItemFoodItem

!insert (miEspresso25, fiCoffeeBeans25) into MenuItemFoodItem
!insert (miLemonTea25, fiLemon25) into MenuItemFoodItem
!insert (miLemonTea25, fiHoney25) into MenuItemFoodItem

!new RegularCustomer('cust30')
!cust30.name := 'Greta Ivanova'
!cust30.prefferedLanguage := #German

!new Individual('res30')
!res30.time := Time('12:20')
!res30.date := Date('2027-08-18')
!res30.numberPeople := 3
!res30.name := 'Greta Ivanova'
!res30.phoneNumber := '555-3130'
!res30.number := 31001
!res30.seating := #Patio
!res30.smoking := #NonSmoking

!insert (rest25, res30) into RestaurantReservation
!insert (res30, cust30) into ReservationCustomer
!insert (res30, w62) into ReservationWaiter

!new Table('tRes30A')
!tRes30A.number := 14
!tRes30A.description := 'Courtyard three-top'
!tRes30A.capacity := 4
!insert (res30, tRes30A) into ReservationTable

!new ItemOrder('ioRes30_1')
!ioRes30_1.time := Time('12:30')
!insert (res30, ioRes30_1) into ReservationItemOrdered
!insert (ioRes30_1, miSpanakopita25) into ItemOrderMenuItem

!new ItemOrder('ioRes30_2')
!ioRes30_2.time := Time('12:45')
!insert (res30, ioRes30_2) into ReservationItemOrdered
!insert (ioRes30_2, miCourtyardPlatter25) into ItemOrderMenuItem

!new ItemOrder('ioRes30_3')
!ioRes30_3.time := Time('13:05')
!insert (res30, ioRes30_3) into ReservationItemOrdered
!insert (ioRes30_3, miEspresso25) into ItemOrderMenuItem

!new BusDriver('bd30')
!bd30.name := 'Ivan Petrenko'
!bd30.dateOfBirth := Date('1970-12-15')
!bd30.phoneNumber := '555-3140'
!bd30.driverLicenseNr := 'D-6001442'

!new Banquet('banq30')
!banq30.time := Time('16:00')
!banq30.date := Date('2027-08-18')
!banq30.numberPeople := 10
!banq30.name := 'Docent Training Group'
!banq30.phoneNumber := '555-3131'
!banq30.number := 32001
!banq30.groupName := 'New Docents Session'
!banq30.paymentMethod := #CreditCard
!banq30.busService := true

!insert (rest25, banq30) into RestaurantReservation
!insert (banq30, w60) into ReservationWaiter
!insert (banq30, w61) into ReservationWaiter
!insert (banq30, bd30) into BanquetBusDriver

!new Table('tBanq30A')
!tBanq30A.number := 40
!tBanq30A.description := 'Indoor training room table A'
!tBanq30A.capacity := 6
!insert (banq30, tBanq30A) into ReservationTable

!new Table('tBanq30B')
!tBanq30B.number := 41
!tBanq30B.description := 'Indoor training room table B'
!tBanq30B.capacity := 4
!insert (banq30, tBanq30B) into ReservationTable

!new ItemOrder('ioBanq30_1')
!ioBanq30_1.time := Time('16:10')
!insert (banq30, ioBanq30_1) into ReservationItemOrdered
!insert (ioBanq30_1, miLemonTea25) into ItemOrderMenuItem

!new ItemOrder('ioBanq30_2')
!ioBanq30_2.time := Time('16:25')
!insert (banq30, ioBanq30_2) into ReservationItemOrdered
!insert (ioBanq30_2, miCourtyardPlatter25) into ItemOrderMenuItem

!new ItemOrder('ioBanq30_3')
!ioBanq30_3.time := Time('16:40')
!insert (banq30, ioBanq30_3) into ReservationItemOrdered
!insert (ioBanq30_3, miBaklava25) into ItemOrderMenuItem

!new Individual('res31')
!res31.time := Time('09:10')
!res31.date := Date('2027-08-19')
!res31.numberPeople := 2
!res31.name := 'Standby Guests'
!res31.phoneNumber := '555-3132'
!res31.number := 31002
!res31.seating := #Inside
!res31.smoking := #NonSmoking

!insert (rest25, res31) into RestaurantReservation
!insert (res31, w61) into ReservationWaiter

!new Table('tRes31A')
!tRes31A.number := 2
!tRes31A.description := 'Small indoor two-top'
!tRes31A.capacity := 2
!insert (res31, tRes31A) into ReservationTable

!new ItemOrder('ioRes31_1')
!ioRes31_1.time := Time('09:20')
!insert (res31, ioRes31_1) into ReservationItemOrdered
!insert (ioRes31_1, miEspresso25) into ItemOrderMenuItem

!new DietaryRequirement('dietReq30')
!dietReq30.diet := #Vegan

!new ReportedAllergy('repAlg30')
!repAlg30.allergen := #Nuts
```
## Generation 18 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 240 | 0.00% |
| Multiplicities Errors | 0 | 56 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 13 | 0.00% |
| Phones | 0 | 13 | 0.00% |

# Generation 19
```
!new Restaurant('rest26')
!rest26.name := 'Starlight Ramen & Sweets'

!new Owner('own63')
!own63.name := 'Tariq Mahmoud'
!own63.percentageShares := 55

!new Owner('own64')
!own64.name := 'Elena Varga'
!own64.percentageShares := 45

!insert (rest26, own63) into RestaurantOwner
!insert (rest26, own64) into RestaurantOwner

!new HeadWaiter('hw31')
!hw31.name := 'Morgan Pierce'
!hw31.dateOfBirth := Date('1988-03-12')
!hw31.phoneNumber := '555-4105'

!new Waiter('w63')
!w63.name := 'Luca Ferri'
!w63.dateOfBirth := Date('1997-09-09')
!w63.phoneNumber := '555-4106'
!w63.spokenLanguage := #Italian

!new Waiter('w64')
!w64.name := 'Hannah Weiss'
!w64.dateOfBirth := Date('1995-01-28')
!w64.phoneNumber := '555-4107'
!w64.spokenLanguage := #German

!insert (hw31, w63) into HeadWaiterWaiter
!insert (hw31, w64) into HeadWaiterWaiter

!new Chef('chef42')
!chef42.name := 'Satoshi Mori'
!chef42.dateOfBirth := Date('1979-06-30')
!chef42.phoneNumber := '555-4110'

!new Cook('cook63')
!cook63.name := 'Nia Campbell'
!cook63.dateOfBirth := Date('2000-10-02')
!cook63.phoneNumber := '555-4111'
!cook63.yearsOfExperience := 0

!new Cook('cook64')
!cook64.name := 'Pavel Dvorak'
!cook64.dateOfBirth := Date('1982-12-14')
!cook64.phoneNumber := '555-4112'
!cook64.yearsOfExperience := 20

!insert (chef42, cook63) into ChefCook
!insert (chef42, cook64) into ChefCook

!new Allergen('alg26Gluten')
!alg26Gluten.type := #Gluten
!new Allergen('alg26Seafood')
!alg26Seafood.type := #Seafood
!new Allergen('alg26Lactose')
!alg26Lactose.type := #Lactose
!new Allergen('alg26Nuts')
!alg26Nuts.type := #Nuts

!new FoodItem('fiMiso26')
!fiMiso26.number := 1901
!fiMiso26.description := 'Red miso paste'
!fiMiso26.purchaseFlag := true
!fiMiso26.unit := #Gram

!new FoodItem('fiWheatNoodles26')
!fiWheatNoodles26.number := 1902
!fiWheatNoodles26.description := 'Fresh wheat ramen noodles'
!fiWheatNoodles26.purchaseFlag := true
!fiWheatNoodles26.unit := #Pound

!new FoodItem('fiPork26')
!fiPork26.number := 1903
!fiPork26.description := 'Braised pork belly'
!fiPork26.purchaseFlag := true
!fiPork26.unit := #Pound

!new FoodItem('fiShrimp26')
!fiShrimp26.number := 1904
!fiShrimp26.description := 'Shrimp'
!fiShrimp26.purchaseFlag := true
!fiShrimp26.unit := #Pound

!new FoodItem('fiEdamame26')
!fiEdamame26.number := 1905
!fiEdamame26.description := 'Edamame beans'
!fiEdamame26.purchaseFlag := true
!fiEdamame26.unit := #Pound

!new FoodItem('fiMatcha26')
!fiMatcha26.number := 1906
!fiMatcha26.description := 'Matcha powder'
!fiMatcha26.purchaseFlag := true
!fiMatcha26.unit := #Gram

!new FoodItem('fiSparklingWater26')
!fiSparklingWater26.number := 1907
!fiSparklingWater26.description := 'Sparkling water'
!fiSparklingWater26.purchaseFlag := true
!fiSparklingWater26.unit := #Ounce

!new FoodItem('fiMochiDough26')
!fiMochiDough26.number := 1908
!fiMochiDough26.description := 'Mochi dough'
!fiMochiDough26.purchaseFlag := false
!fiMochiDough26.unit := #Gram

!new FoodItem('fiIceCream26')
!fiIceCream26.number := 1909
!fiIceCream26.description := 'Ice cream base'
!fiIceCream26.purchaseFlag := true
!fiIceCream26.unit := #Ounce

!new FoodItem('fiPeanuts26')
!fiPeanuts26.number := 1910
!fiPeanuts26.description := 'Crushed peanuts'
!fiPeanuts26.purchaseFlag := true
!fiPeanuts26.unit := #Ounce

!insert (fiMiso26, alg26Gluten) into FoodItemAllergen
!insert (fiWheatNoodles26, alg26Gluten) into FoodItemAllergen
!insert (fiMochiDough26, alg26Gluten) into FoodItemAllergen
!insert (fiShrimp26, alg26Seafood) into FoodItemAllergen
!insert (fiIceCream26, alg26Lactose) into FoodItemAllergen
!insert (fiPeanuts26, alg26Nuts) into FoodItemAllergen

!new MenuItem('miEdamame26')
!miEdamame26.description := 'Salted edamame'
!miEdamame26.prepTime := 4.0
!miEdamame26.classification := #Apetizer

!new MenuItem('miSpicyMisoRamen26')
!miSpicyMisoRamen26.description := 'Spicy miso ramen with pork and shrimp'
!miSpicyMisoRamen26.prepTime := 17.0
!miSpicyMisoRamen26.classification := #Main

!new MenuItem('miMatchaSoda26')
!miMatchaSoda26.description := 'Matcha soda'
!miMatchaSoda26.prepTime := 2.0
!miMatchaSoda26.classification := #Beverage

!new MenuItem('miMochiTrio26')
!miMochiTrio26.description := 'Mochi trio with peanut topping'
!miMochiTrio26.prepTime := 6.0
!miMochiTrio26.classification := #Dessert

!insert (miEdamame26, chef42) into MenuItemChef
!insert (miSpicyMisoRamen26, chef42) into MenuItemChef
!insert (miMatchaSoda26, chef42) into MenuItemChef
!insert (miMochiTrio26, chef42) into MenuItemChef

!insert (miEdamame26, fiEdamame26) into MenuItemFoodItem

!insert (miSpicyMisoRamen26, fiMiso26) into MenuItemFoodItem
!insert (miSpicyMisoRamen26, fiWheatNoodles26) into MenuItemFoodItem
!insert (miSpicyMisoRamen26, fiPork26) into MenuItemFoodItem
!insert (miSpicyMisoRamen26, fiShrimp26) into MenuItemFoodItem

!insert (miMatchaSoda26, fiMatcha26) into MenuItemFoodItem
!insert (miMatchaSoda26, fiSparklingWater26) into MenuItemFoodItem

!insert (miMochiTrio26, fiMochiDough26) into MenuItemFoodItem
!insert (miMochiTrio26, fiIceCream26) into MenuItemFoodItem
!insert (miMochiTrio26, fiPeanuts26) into MenuItemFoodItem

!new Individual('res32')
!res32.time := Time('10:05')
!res32.date := Date('2027-09-02')
!res32.numberPeople := 2
!res32.name := 'City Visitor'
!res32.phoneNumber := '555-4120'
!res32.number := 33001
!res32.seating := #Inside
!res32.smoking := #NonSmoking

!insert (res32, w63) into ReservationWaiter

!new Table('tRes32A')
!tRes32A.number := 5
!tRes32A.description := 'Two-top by pastry case'
!tRes32A.capacity := 2
!insert (res32, tRes32A) into ReservationTable

!new ItemOrder('ioRes32_1')
!ioRes32_1.time := Time('10:12')
!insert (res32, ioRes32_1) into ReservationItemOrdered
!insert (ioRes32_1, miMatchaSoda26) into ItemOrderMenuItem

!new ItemOrder('ioRes32_2')
!ioRes32_2.time := Time('10:20')
!insert (res32, ioRes32_2) into ReservationItemOrdered
!insert (ioRes32_2, miMochiTrio26) into ItemOrderMenuItem

!new RegularCustomer('cust32')
!cust32.name := 'Marco Greco'
!cust32.prefferedLanguage := #Italian

!new Individual('res33')
!res33.time := Time('18:40')
!res33.date := Date('2027-09-02')
!res33.numberPeople := 7
!res33.name := 'Marco Greco'
!res33.phoneNumber := '555-4121'
!res33.number := 33002
!res33.seating := #Patio
!res33.smoking := #NonSmoking

!insert (rest26, res33) into RestaurantReservation
!insert (res33, cust32) into ReservationCustomer
!insert (res33, w63) into ReservationWaiter
!insert (res33, w64) into ReservationWaiter

!new Table('tRes33A')
!tRes33A.number := 20
!tRes33A.description := 'Patio four-top A'
!tRes33A.capacity := 4
!insert (res33, tRes33A) into ReservationTable

!new Table('tRes33B')
!tRes33B.number := 21
!tRes33B.description := 'Patio four-top B'
!tRes33B.capacity := 4
!insert (res33, tRes33B) into ReservationTable

!new ItemOrder('ioRes33_1')
!ioRes33_1.time := Time('18:55')
!insert (res33, ioRes33_1) into ReservationItemOrdered
!insert (ioRes33_1, miEdamame26) into ItemOrderMenuItem

!new ItemOrder('ioRes33_2')
!ioRes33_2.time := Time('19:15')
!insert (res33, ioRes33_2) into ReservationItemOrdered
!insert (ioRes33_2, miSpicyMisoRamen26) into ItemOrderMenuItem

!new ItemOrder('ioRes33_3')
!ioRes33_3.time := Time('19:40')
!insert (res33, ioRes33_3) into ReservationItemOrdered
!insert (ioRes33_3, miMochiTrio26) into ItemOrderMenuItem

!new BusDriver('bd32')
!bd32.name := 'Evelyn Hart'
!bd32.dateOfBirth := Date('1971-04-04')
!bd32.phoneNumber := '555-4130'
!bd32.driverLicenseNr := 'D-9077002'

!new Banquet('banq31')
!banq31.time := Time('13:10')
!banq31.date := Date('2027-09-03')
!banq31.numberPeople := 14
!banq31.name := 'Culinary School Tour'
!banq31.phoneNumber := '555-4125'
!banq31.number := 34001
!banq31.groupName := 'Student Field Trip'
!banq31.paymentMethod := #Cash
!banq31.busService := true

!insert (rest26, banq31) into RestaurantReservation
!insert (banq31, w63) into ReservationWaiter
!insert (banq31, w64) into ReservationWaiter
!insert (banq31, bd32) into BanquetBusDriver

!new Table('tBanq31A')
!tBanq31A.number := 50
!tBanq31A.description := 'Long table A'
!tBanq31A.capacity := 8
!insert (banq31, tBanq31A) into ReservationTable

!new Table('tBanq31B')
!tBanq31B.number := 51
!tBanq31B.description := 'Long table B'
!tBanq31B.capacity := 6
!insert (banq31, tBanq31B) into ReservationTable

!new ItemOrder('ioBanq31_1')
!ioBanq31_1.time := Time('13:20')
!insert (banq31, ioBanq31_1) into ReservationItemOrdered
!insert (ioBanq31_1, miEdamame26) into ItemOrderMenuItem

!new ItemOrder('ioBanq31_2')
!ioBanq31_2.time := Time('13:45')
!insert (banq31, ioBanq31_2) into ReservationItemOrdered
!insert (ioBanq31_2, miSpicyMisoRamen26) into ItemOrderMenuItem

!new ItemOrder('ioBanq31_3')
!ioBanq31_3.time := Time('14:10')
!insert (banq31, ioBanq31_3) into ReservationItemOrdered
!insert (ioBanq31_3, miMatchaSoda26) into ItemOrderMenuItem
```
## Generation 19 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 238 | 0.00% |
| Multiplicities Errors | 0 | 56 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 10 | 0.00% |
| Phones | 0 | 10 | 0.00% |

# Generation 20
```
!new Restaurant('rest27')
!rest27.name := 'Farmhouse Brunch Hall'

!new Owner('own65')
!own65.name := 'Ethan Wallace'
!own65.percentageShares := 50

!new Owner('own66')
!own66.name := 'Svetlana Petrova'
!own66.percentageShares := 30

!new Owner('own67')
!own67.name := 'Nabil Hassan'
!own67.percentageShares := 20

!insert (rest27, own65) into RestaurantOwner
!insert (rest27, own66) into RestaurantOwner
!insert (rest27, own67) into RestaurantOwner

!new Manager('mgr8')
!mgr8.name := 'Grace Elliott'
!mgr8.dateOfBirth := Date('1980-08-15')
!mgr8.phoneNumber := '555-5010'

!new HeadWaiter('hw32')
!hw32.name := 'Ruben Silva'
!hw32.dateOfBirth := Date('1986-02-06')
!hw32.phoneNumber := '555-5011'

!new Waiter('w65')
!w65.name := 'Alba Martin'
!w65.dateOfBirth := Date('1998-04-03')
!w65.phoneNumber := '555-5012'
!w65.spokenLanguage := #Spanish

!new Waiter('w66')
!w66.name := 'Jonas Meier'
!w66.dateOfBirth := Date('1994-09-18')
!w66.phoneNumber := '555-5013'
!w66.spokenLanguage := #German

!new Waiter('w67')
!w67.name := 'Chiara Conti'
!w67.dateOfBirth := Date('1999-12-09')
!w67.phoneNumber := '555-5014'
!w67.spokenLanguage := #Italian

!insert (hw32, w65) into HeadWaiterWaiter
!insert (hw32, w66) into HeadWaiterWaiter
!insert (hw32, w67) into HeadWaiterWaiter

!new Chef('chef43')
!chef43.name := 'Lena Berg'
!chef43.dateOfBirth := Date('1977-11-02')
!chef43.phoneNumber := '555-5020'

!new Chef('chef44')
!chef44.name := 'Hector Salazar'
!chef44.dateOfBirth := Date('1982-05-19')
!chef44.phoneNumber := '555-5021'

!new Cook('cook65')
!cook65.name := 'Mia Novak'
!cook65.dateOfBirth := Date('1990-01-26')
!cook65.phoneNumber := '555-5022'
!cook65.yearsOfExperience := 9

!new Cook('cook66')
!cook66.name := 'Oscar Reed'
!cook66.dateOfBirth := Date('1997-07-30')
!cook66.phoneNumber := '555-5023'
!cook66.yearsOfExperience := 2

!new Cook('cook67')
!cook67.name := 'Dalia Ibrahim'
!cook67.dateOfBirth := Date('1993-03-10')
!cook67.phoneNumber := '555-5024'
!cook67.yearsOfExperience := 6

!insert (chef43, cook65) into ChefCook
!insert (chef43, cook66) into ChefCook
!insert (chef44, cook67) into ChefCook

!new Allergen('alg27Gluten')
!alg27Gluten.type := #Gluten

!new Allergen('alg27Seafood')
!alg27Seafood.type := #Seafood

!new Allergen('alg27Lactose')
!alg27Lactose.type := #Lactose

!new FoodItem('fiSourdough27')
!fiSourdough27.number := 2001
!fiSourdough27.description := 'Sourdough bread'
!fiSourdough27.purchaseFlag := true
!fiSourdough27.unit := #Dozen

!new FoodItem('fiAvocado27')
!fiAvocado27.number := 2002
!fiAvocado27.description := 'Avocados'
!fiAvocado27.purchaseFlag := true
!fiAvocado27.unit := #Dozen

!new FoodItem('fiEggs27')
!fiEggs27.number := 2003
!fiEggs27.description := 'Free-range eggs'
!fiEggs27.purchaseFlag := true
!fiEggs27.unit := #Dozen

!new FoodItem('fiSmokedSalmon27')
!fiSmokedSalmon27.number := 2004
!fiSmokedSalmon27.description := 'Smoked salmon'
!fiSmokedSalmon27.purchaseFlag := true
!fiSmokedSalmon27.unit := #Pound

!new FoodItem('fiYogurt27')
!fiYogurt27.number := 2005
!fiYogurt27.description := 'Greek yogurt'
!fiYogurt27.purchaseFlag := true
!fiYogurt27.unit := #Ounce

!new FoodItem('fiBerries27')
!fiBerries27.number := 2006
!fiBerries27.description := 'Seasonal berries'
!fiBerries27.purchaseFlag := true
!fiBerries27.unit := #Pound

!new FoodItem('fiCoffeeBeans27')
!fiCoffeeBeans27.number := 2007
!fiCoffeeBeans27.description := 'Coffee beans'
!fiCoffeeBeans27.purchaseFlag := true
!fiCoffeeBeans27.unit := #Pound

!insert (fiSourdough27, alg27Gluten) into FoodItemAllergen
!insert (fiSmokedSalmon27, alg27Seafood) into FoodItemAllergen
!insert (fiYogurt27, alg27Lactose) into FoodItemAllergen

!new MenuItem('miAvocadoToast27')
!miAvocadoToast27.description := 'Avocado toast on sourdough'
!miAvocadoToast27.prepTime := 6.0
!miAvocadoToast27.classification := #Main

!new MenuItem('miSalmonEggs27')
!miSalmonEggs27.description := 'Scrambled eggs with smoked salmon'
!miSalmonEggs27.prepTime := 10.0
!miSalmonEggs27.classification := #Main

!new MenuItem('miBerryParfait27')
!miBerryParfait27.description := 'Yogurt berry parfait'
!miBerryParfait27.prepTime := 4.0
!miBerryParfait27.classification := #Dessert

!new MenuItem('miFilterCoffee27')
!miFilterCoffee27.description := 'Fresh filter coffee'
!miFilterCoffee27.prepTime := 2.0
!miFilterCoffee27.classification := #Beverage

!insert (miAvocadoToast27, chef43) into MenuItemChef
!insert (miSalmonEggs27, chef43) into MenuItemChef
!insert (miBerryParfait27, chef44) into MenuItemChef
!insert (miFilterCoffee27, chef44) into MenuItemChef

!insert (miAvocadoToast27, fiSourdough27) into MenuItemFoodItem
!insert (miAvocadoToast27, fiAvocado27) into MenuItemFoodItem

!insert (miSalmonEggs27, fiEggs27) into MenuItemFoodItem
!insert (miSalmonEggs27, fiSmokedSalmon27) into MenuItemFoodItem

!insert (miBerryParfait27, fiYogurt27) into MenuItemFoodItem
!insert (miBerryParfait27, fiBerries27) into MenuItemFoodItem

!insert (miFilterCoffee27, fiCoffeeBeans27) into MenuItemFoodItem

!new RegularCustomer('cust33')
!cust33.name := 'Marek Kowalski'
!cust33.prefferedLanguage := #German

!new RegularCustomer('cust34')
!cust34.name := 'Sofia Alvarez-Gomez'
!cust34.prefferedLanguage := #Spanish

!new BusDriver('bd33')
!bd33.name := 'Colby Harris'
!bd33.dateOfBirth := Date('1971-01-05')
!bd33.phoneNumber := '555-5035'
!bd33.driverLicenseNr := 'D-7011220'

!new BusDriver('bd34')
!bd34.name := 'Noura Khalil'
!bd34.dateOfBirth := Date('1976-06-22')
!bd34.phoneNumber := '555-5036'
!bd34.driverLicenseNr := 'D-8843007'

!new Banquet('banq32')
!banq32.time := Time('09:30')
!banq32.date := Date('2027-10-12')
!banq32.numberPeople := 36
!banq32.name := 'Marek Kowalski'
!banq32.phoneNumber := '555-5040'
!banq32.number := 36001
!banq32.groupName := 'Marathon Volunteer Breakfast'
!banq32.paymentMethod := #CreditCard
!banq32.busService := true

!insert (rest27, banq32) into RestaurantReservation
!insert (banq32, cust33) into ReservationCustomer
!insert (banq32, w65) into ReservationWaiter
!insert (banq32, w66) into ReservationWaiter
!insert (banq32, bd33) into BanquetBusDriver
!insert (banq32, bd34) into BanquetBusDriver

!new Table('tBanq32A')
!tBanq32A.number := 601
!tBanq32A.description := 'Banquet table A'
!tBanq32A.capacity := 20
!insert (banq32, tBanq32A) into ReservationTable

!new Table('tBanq32B')
!tBanq32B.number := 602
!tBanq32B.description := 'Banquet table B'
!tBanq32B.capacity := 16
!insert (banq32, tBanq32B) into ReservationTable

!new ItemOrder('ioBanq32_1')
!ioBanq32_1.time := Time('09:45')
!insert (banq32, ioBanq32_1) into ReservationItemOrdered
!insert (ioBanq32_1, miFilterCoffee27) into ItemOrderMenuItem

!new ItemOrder('ioBanq32_2')
!ioBanq32_2.time := Time('10:05')
!insert (banq32, ioBanq32_2) into ReservationItemOrdered
!insert (ioBanq32_2, miAvocadoToast27) into ItemOrderMenuItem

!new ItemOrder('ioBanq32_3')
!ioBanq32_3.time := Time('10:25')
!insert (banq32, ioBanq32_3) into ReservationItemOrdered
!insert (ioBanq32_3, miBerryParfait27) into ItemOrderMenuItem

!new Individual('res34')
!res34.time := Time('13:15')
!res34.date := Date('2027-10-12')
!res34.numberPeople := 3
!res34.name := 'Walk-up Guests'
!res34.phoneNumber := '555-5041'
!res34.number := 36002
!res34.seating := #Inside
!res34.smoking := #NonSmoking

!insert (res34, w67) into ReservationWaiter

!new Table('tRes34A')
!tRes34A.number := 15
!tRes34A.description := 'Inside three-top'
!tRes34A.capacity := 4
!insert (res34, tRes34A) into ReservationTable

!new ItemOrder('ioRes34_1')
!ioRes34_1.time := Time('13:25')
!insert (res34, ioRes34_1) into ReservationItemOrdered
!insert (ioRes34_1, miSalmonEggs27) into ItemOrderMenuItem

!new Individual('res35')
!res35.time := Time('18:10')
!res35.date := Date('2027-10-12')
!res35.numberPeople := 9
!res35.name := 'Sofia Alvarez-Gomez'
!res35.phoneNumber := '555-5042'
!res35.number := 36003
!res35.seating := #Patio
!res35.smoking := #NonSmoking

!insert (rest27, res35) into RestaurantReservation
!insert (res35, cust34) into ReservationCustomer
!insert (res35, w65) into ReservationWaiter

!new Table('tRes35A')
!tRes35A.number := 31
!tRes35A.description := 'Patio table A'
!tRes35A.capacity := 4
!insert (res35, tRes35A) into ReservationTable

!new Table('tRes35B')
!tRes35B.number := 32
!tRes35B.description := 'Patio table B'
!tRes35B.capacity := 6
!insert (res35, tRes35B) into ReservationTable

!new ItemOrder('ioRes35_1')
!ioRes35_1.time := Time('18:25')
!insert (res35, ioRes35_1) into ReservationItemOrdered
!insert (ioRes35_1, miFilterCoffee27) into ItemOrderMenuItem

!new ItemOrder('ioRes35_2')
!ioRes35_2.time := Time('18:40')
!insert (res35, ioRes35_2) into ReservationItemOrdered
!insert (ioRes35_2, miAvocadoToast27) into ItemOrderMenuItem

!new DietaryRequirement('dietReq19')
!dietReq19.diet := #Vegetarian

!new ReportedAllergy('repAlg19')
!repAlg19.allergen := #Seafood
```
## Generation 20 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 244 | 0.00% |
| Multiplicities Errors | 0 | 50 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 15 | 0.00% |
| Phones | 0 | 15 | 0.00% |

# Generation 21
```
!new Restaurant('rest28')
!rest28.name := 'Nomad Kitchen'

!new Owner('own68')
!own68.name := 'Helene Fischer'
!own68.percentageShares := 70

!new Owner('own69')
!own69.name := 'Omar Javed'
!own69.percentageShares := 30

!insert (rest28, own68) into RestaurantOwner
!insert (rest28, own69) into RestaurantOwner

!new HeadWaiter('hw33')
!hw33.name := 'Caroline Watts'
!hw33.dateOfBirth := Date('1988-06-15')
!hw33.phoneNumber := '555-7001'

!new Waiter('w68')
!w68.name := 'Diego Luna'
!w68.dateOfBirth := Date('1997-03-22')
!w68.phoneNumber := '555-7002'
!w68.spokenLanguage := #Spanish

!new Waiter('w69')
!w69.name := 'Greta Neumann'
!w69.dateOfBirth := Date('1993-09-09')
!w69.phoneNumber := '555-7003'
!w69.spokenLanguage := #German

!insert (hw33, w68) into HeadWaiterWaiter
!insert (hw33, w69) into HeadWaiterWaiter

!new Chef('chef46')
!chef46.name := 'Jun Park'
!chef46.dateOfBirth := Date('1979-02-04')
!chef46.phoneNumber := '555-7010'

!new Cook('cook68')
!cook68.name := 'Sofia Petrenko'
!cook68.dateOfBirth := Date('1991-12-28')
!cook68.phoneNumber := '555-7011'
!cook68.yearsOfExperience := 8

!new Cook('cook69')
!cook69.name := 'Martin Alvarez'
!cook69.dateOfBirth := Date('1999-05-19')
!cook69.phoneNumber := '555-7012'
!cook69.yearsOfExperience := 1

!insert (chef46, cook68) into ChefCook
!insert (chef46, cook69) into ChefCook

!new Allergen('alg28Gluten')
!alg28Gluten.type := #Gluten
!new Allergen('alg28Seafood')
!alg28Seafood.type := #Seafood

!new FoodItem('fiNoodles28')
!fiNoodles28.number := 2101
!fiNoodles28.description := 'Wheat noodles'
!fiNoodles28.purchaseFlag := true
!fiNoodles28.unit := #Pound

!new FoodItem('fiBroth28')
!fiBroth28.number := 2102
!fiBroth28.description := 'Vegetable broth base'
!fiBroth28.purchaseFlag := true
!fiBroth28.unit := #Ounce

!new FoodItem('fiSeaweed28')
!fiSeaweed28.number := 2103
!fiSeaweed28.description := 'Dried seaweed'
!fiSeaweed28.purchaseFlag := true
!fiSeaweed28.unit := #Gram

!new FoodItem('fiShrimp28')
!fiShrimp28.number := 2104
!fiShrimp28.description := 'Shrimp'
!fiShrimp28.purchaseFlag := true
!fiShrimp28.unit := #Pound

!insert (fiNoodles28, alg28Gluten) into FoodItemAllergen
!insert (fiShrimp28, alg28Seafood) into FoodItemAllergen

!new MenuItem('miSeaweedSoup28')
!miSeaweedSoup28.description := 'Seaweed soup'
!miSeaweedSoup28.prepTime := 6.0
!miSeaweedSoup28.classification := #Apetizer

!new MenuItem('miShrimpNoodleBowl28')
!miShrimpNoodleBowl28.description := 'Shrimp noodle bowl'
!miShrimpNoodleBowl28.prepTime := 14.0
!miShrimpNoodleBowl28.classification := #Main

!new MenuItem('miHerbalTea28')
!miHerbalTea28.description := 'Herbal tea'
!miHerbalTea28.prepTime := 2.0
!miHerbalTea28.classification := #Beverage

!insert (miSeaweedSoup28, chef46) into MenuItemChef
!insert (miShrimpNoodleBowl28, chef46) into MenuItemChef
!insert (miHerbalTea28, chef46) into MenuItemChef

!insert (miSeaweedSoup28, fiSeaweed28) into MenuItemFoodItem
!insert (miSeaweedSoup28, fiBroth28) into MenuItemFoodItem

!insert (miShrimpNoodleBowl28, fiNoodles28) into MenuItemFoodItem
!insert (miShrimpNoodleBowl28, fiShrimp28) into MenuItemFoodItem
!insert (miShrimpNoodleBowl28, fiBroth28) into MenuItemFoodItem

!new RegularCustomer('cust35')
!cust35.name := 'Nina Kovacs'
!cust35.prefferedLanguage := #German

!new Individual('res36')
!res36.time := Time('21:10')
!res36.date := Date('2027-11-10')
!res36.numberPeople := 3
!res36.name := 'Nina Kovacs'
!res36.phoneNumber := '555-7025'
!res36.number := 41001
!res36.seating := #Inside
!res36.smoking := #NonSmoking

!insert (res36, cust35) into ReservationCustomer
!insert (res36, w68) into ReservationWaiter

!new Table('tRes36A')
!tRes36A.number := 12
!tRes36A.description := 'Small booth near window'
!tRes36A.capacity := 4
!insert (res36, tRes36A) into ReservationTable

!new ItemOrder('ioRes36_1')
!ioRes36_1.time := Time('21:20')
!insert (res36, ioRes36_1) into ReservationItemOrdered
!insert (ioRes36_1, miSeaweedSoup28) into ItemOrderMenuItem

!new ItemOrder('ioRes36_2')
!ioRes36_2.time := Time('21:35')
!insert (res36, ioRes36_2) into ReservationItemOrdered
!insert (ioRes36_2, miShrimpNoodleBowl28) into ItemOrderMenuItem

!new BusDriver('bd40')
!bd40.name := 'Elias Novak'
!bd40.dateOfBirth := Date('1970-05-02')
!bd40.phoneNumber := '555-7030'
!bd40.driverLicenseNr := 'D-4005519'

!new Banquet('banq33')
!banq33.time := Time('11:30')
!banq33.date := Date('2027-11-11')
!banq33.numberPeople := 20
!banq33.name := 'Regional Language Exchange'
!banq33.phoneNumber := '555-7035'
!banq33.number := 42001
!banq33.groupName := 'Monthly Meetup Lunch'
!banq33.paymentMethod := #Cash
!banq33.busService := true

!insert (banq33, bd40) into BanquetBusDriver
!insert (banq33, w68) into ReservationWaiter
!insert (banq33, w69) into ReservationWaiter

!new Table('tBanq33A')
!tBanq33A.number := 60
!tBanq33A.description := 'Long table A'
!tBanq33A.capacity := 12
!insert (banq33, tBanq33A) into ReservationTable

!new Table('tBanq33B')
!tBanq33B.number := 61
!tBanq33B.description := 'Long table B'
!tBanq33B.capacity := 8
!insert (banq33, tBanq33B) into ReservationTable

!new ItemOrder('ioBanq33_1')
!ioBanq33_1.time := Time('11:45')
!insert (banq33, ioBanq33_1) into ReservationItemOrdered
!insert (ioBanq33_1, miHerbalTea28) into ItemOrderMenuItem

!new ItemOrder('ioBanq33_2')
!ioBanq33_2.time := Time('12:05')
!insert (banq33, ioBanq33_2) into ReservationItemOrdered
!insert (ioBanq33_2, miShrimpNoodleBowl28) into ItemOrderMenuItem

!new DietaryRequirement('dietReq20')
!dietReq20.diet := #Halal

!new ReportedAllergy('repAlg20')
!repAlg20.allergen := #Seafood
```
## Generation 21 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 155 | 0.00% |
| Multiplicities Errors | 0 | 32 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 9 | 0.00% |
| Phones | 0 | 9 | 0.00% |

# Generation 22
```
!new Restaurant('rest29')
!rest29.name := 'Canyon Steakhouse'

!new Owner('own70')
!own70.name := 'Derek Lawson'
!own70.percentageShares := 50

!new Owner('own71')
!own71.name := 'Inez Castillo'
!own71.percentageShares := 30

!new Owner('own72')
!own72.name := 'Marek Nowicki'
!own72.percentageShares := 20

!insert (rest29, own70) into RestaurantOwner
!insert (rest29, own71) into RestaurantOwner
!insert (rest29, own72) into RestaurantOwner

!new HeadWaiter('hw40')
!hw40.name := 'Kylie Morgan'
!hw40.dateOfBirth := Date('1987-07-02')
!hw40.phoneNumber := '555-6100'

!new HeadWaiter('hw41')
!hw41.name := 'Bruno Silva'
!hw41.dateOfBirth := Date('1983-09-14')
!hw41.phoneNumber := '555-6101'

!new Waiter('w70')
!w70.name := 'Paula Reyes'
!w70.dateOfBirth := Date('1999-02-12')
!w70.phoneNumber := '555-6110'
!w70.spokenLanguage := #Spanish

!new Waiter('w71')
!w71.name := 'Jonas Hartmann'
!w71.dateOfBirth := Date('1994-10-03')
!w71.phoneNumber := '555-6111'
!w71.spokenLanguage := #German

!new Waiter('w72')
!w72.name := 'Luca Baresi'
!w72.dateOfBirth := Date('1996-05-21')
!w72.phoneNumber := '555-6112'
!w72.spokenLanguage := #Italian

!insert (hw40, w70) into HeadWaiterWaiter
!insert (hw40, w71) into HeadWaiterWaiter
!insert (hw41, w72) into HeadWaiterWaiter

!new Manager('mgr9')
!mgr9.name := 'Janet Price'
!mgr9.dateOfBirth := Date('1979-01-27')
!mgr9.phoneNumber := '555-6120'

!new Chef('chef47')
!chef47.name := 'Antonio Ferrer'
!chef47.dateOfBirth := Date('1976-03-15')
!chef47.phoneNumber := '555-6200'

!new Chef('chef48')
!chef48.name := 'Hannah Vogel'
!chef48.dateOfBirth := Date('1981-11-06')
!chef48.phoneNumber := '555-6201'

!new Cook('cook70')
!cook70.name := 'Mina Cho'
!cook70.dateOfBirth := Date('1992-08-19')
!cook70.phoneNumber := '555-6210'
!cook70.yearsOfExperience := 9

!new Cook('cook71')
!cook71.name := 'Victor Santos'
!cook71.dateOfBirth := Date('1998-04-04')
!cook71.phoneNumber := '555-6211'
!cook71.yearsOfExperience := 2

!new Cook('cook72')
!cook72.name := 'Elif Kaya'
!cook72.dateOfBirth := Date('1990-12-02')
!cook72.phoneNumber := '555-6212'
!cook72.yearsOfExperience := 11

!insert (chef47, cook70) into ChefCook
!insert (chef47, cook71) into ChefCook
!insert (chef48, cook72) into ChefCook

!new Allergen('alg29Gluten')
!alg29Gluten.type := #Gluten
!new Allergen('alg29Lactose')
!alg29Lactose.type := #Lactose
!new Allergen('alg29Nuts')
!alg29Nuts.type := #Nuts

!new FoodItem('fiRibeye29')
!fiRibeye29.number := 2201
!fiRibeye29.description := 'Ribeye steak'
!fiRibeye29.purchaseFlag := true
!fiRibeye29.unit := #Pound

!new FoodItem('fiPotatoes29')
!fiPotatoes29.number := 2202
!fiPotatoes29.description := 'Yukon gold potatoes'
!fiPotatoes29.purchaseFlag := true
!fiPotatoes29.unit := #Pound

!new FoodItem('fiFlour29')
!fiFlour29.number := 2203
!fiFlour29.description := 'Wheat flour'
!fiFlour29.purchaseFlag := true
!fiFlour29.unit := #Pound

!new FoodItem('fiButter29')
!fiButter29.number := 2204
!fiButter29.description := 'Butter'
!fiButter29.purchaseFlag := true
!fiButter29.unit := #Ounce

!new FoodItem('fiLettuce29')
!fiLettuce29.number := 2205
!fiLettuce29.description := 'Romaine lettuce'
!fiLettuce29.purchaseFlag := true
!fiLettuce29.unit := #Gram

!new FoodItem('fiParmesan29')
!fiParmesan29.number := 2206
!fiParmesan29.description := 'Parmesan'
!fiParmesan29.purchaseFlag := true
!fiParmesan29.unit := #Ounce

!new FoodItem('fiWalnuts29')
!fiWalnuts29.number := 2207
!fiWalnuts29.description := 'Walnuts'
!fiWalnuts29.purchaseFlag := true
!fiWalnuts29.unit := #Ounce

!new FoodItem('fiCoffee29')
!fiCoffee29.number := 2208
!fiCoffee29.description := 'Espresso beans'
!fiCoffee29.purchaseFlag := true
!fiCoffee29.unit := #Pound

!insert (fiFlour29, alg29Gluten) into FoodItemAllergen
!insert (fiButter29, alg29Lactose) into FoodItemAllergen
!insert (fiParmesan29, alg29Lactose) into FoodItemAllergen
!insert (fiWalnuts29, alg29Nuts) into FoodItemAllergen

!new MenuItem('miRibeyePlate29')
!miRibeyePlate29.description := 'Ribeye with mashed potatoes'
!miRibeyePlate29.prepTime := 24.0
!miRibeyePlate29.classification := #Main

!new MenuItem('miCaesarSalad29')
!miCaesarSalad29.description := 'Caesar salad with parmesan'
!miCaesarSalad29.prepTime := 6.0
!miCaesarSalad29.classification := #Apetizer

!new MenuItem('miWalnutCheesecake29')
!miWalnutCheesecake29.description := 'Walnut cheesecake slice'
!miWalnutCheesecake29.prepTime := 9.0
!miWalnutCheesecake29.classification := #Dessert

!new MenuItem('miEspresso29')
!miEspresso29.description := 'Espresso'
!miEspresso29.prepTime := 1.5
!miEspresso29.classification := #Beverage

!insert (miRibeyePlate29, chef47) into MenuItemChef
!insert (miCaesarSalad29, chef47) into MenuItemChef
!insert (miWalnutCheesecake29, chef48) into MenuItemChef
!insert (miEspresso29, chef48) into MenuItemChef

!insert (miRibeyePlate29, fiRibeye29) into MenuItemFoodItem
!insert (miRibeyePlate29, fiPotatoes29) into MenuItemFoodItem
!insert (miRibeyePlate29, fiButter29) into MenuItemFoodItem

!insert (miCaesarSalad29, fiLettuce29) into MenuItemFoodItem
!insert (miCaesarSalad29, fiParmesan29) into MenuItemFoodItem

!insert (miWalnutCheesecake29, fiFlour29) into MenuItemFoodItem
!insert (miWalnutCheesecake29, fiButter29) into MenuItemFoodItem
!insert (miWalnutCheesecake29, fiWalnuts29) into MenuItemFoodItem

!insert (miEspresso29, fiCoffee29) into MenuItemFoodItem

!new RegularCustomer('cust40')
!cust40.name := 'Elsa Richter'
!cust40.prefferedLanguage := #German

!new RegularCustomer('cust41')
!cust41.name := 'Diego Navarro'
!cust41.prefferedLanguage := #Spanish

!new Individual('res40')
!res40.time := Time('18:15')
!res40.date := Date('2027-12-06')
!res40.numberPeople := 5
!res40.name := 'Diego Navarro'
!res40.phoneNumber := '555-6300'
!res40.number := 50001
!res40.seating := #Inside
!res40.smoking := #NonSmoking

!insert (rest29, res40) into RestaurantReservation
!insert (res40, cust41) into ReservationCustomer
!insert (res40, w70) into ReservationWaiter
!insert (res40, w71) into ReservationWaiter

!new Table('tRes40A')
!tRes40A.number := 12
!tRes40A.description := 'Inside four-top'
!tRes40A.capacity := 4

!new Table('tRes40B')
!tRes40B.number := 13
!tRes40B.description := 'Add-on side chair table'
!tRes40B.capacity := 2

!insert (res40, tRes40A) into ReservationTable
!insert (res40, tRes40B) into ReservationTable

!new ItemOrder('ioRes40_1')
!ioRes40_1.time := Time('18:25')
!insert (res40, ioRes40_1) into ReservationItemOrdered
!insert (ioRes40_1, miCaesarSalad29) into ItemOrderMenuItem

!new ItemOrder('ioRes40_2')
!ioRes40_2.time := Time('18:50')
!insert (res40, ioRes40_2) into ReservationItemOrdered
!insert (ioRes40_2, miRibeyePlate29) into ItemOrderMenuItem

!new ItemOrder('ioRes40_3')
!ioRes40_3.time := Time('19:20')
!insert (res40, ioRes40_3) into ReservationItemOrdered
!insert (ioRes40_3, miEspresso29) into ItemOrderMenuItem

!new Individual('res41')
!res41.time := Time('22:05')
!res41.date := Date('2027-12-06')
!res41.numberPeople := 2
!res41.name := 'Late Night Guests'
!res41.phoneNumber := '555-6301'
!res41.number := 50002
!res41.seating := #Patio
!res41.smoking := #Smoking

!insert (rest29, res41) into RestaurantReservation
!insert (res41, w72) into ReservationWaiter

!new Table('tRes41A')
!tRes41A.number := 30
!tRes41A.description := 'Heated patio two-top'
!tRes41A.capacity := 2
!insert (res41, tRes41A) into ReservationTable

!new ItemOrder('ioRes41_1')
!ioRes41_1.time := Time('22:15')
!insert (res41, ioRes41_1) into ReservationItemOrdered
!insert (ioRes41_1, miWalnutCheesecake29) into ItemOrderMenuItem

!new BusDriver('bd41')
!bd41.name := 'Karen Blake'
!bd41.dateOfBirth := Date('1972-02-20')
!bd41.phoneNumber := '555-6400'
!bd41.driverLicenseNr := 'D-2018459'

!new BusDriver('bd42')
!bd42.name := 'Said Farouk'
!bd42.dateOfBirth := Date('1968-09-09')
!bd42.phoneNumber := '555-6401'
!bd42.driverLicenseNr := 'D-7702441'

!new Banquet('banq40')
!banq40.time := Time('12:00')
!banq40.date := Date('2027-12-07')
!banq40.numberPeople := 60
!banq40.name := 'Elsa Richter'
!banq40.phoneNumber := '555-6500'
!banq40.number := 60001
!banq40.groupName := 'Winter Charity Luncheon'
!banq40.paymentMethod := #CreditCard
!banq40.busService := true

!insert (rest29, banq40) into RestaurantReservation
!insert (banq40, cust40) into ReservationCustomer
!insert (banq40, w70) into ReservationWaiter
!insert (banq40, w71) into ReservationWaiter
!insert (banq40, w72) into ReservationWaiter
!insert (banq40, bd41) into BanquetBusDriver
!insert (banq40, bd42) into BanquetBusDriver

!new Table('tBanq40A')
!tBanq40A.number := 201
!tBanq40A.description := 'Banquet table A'
!tBanq40A.capacity := 20
!insert (banq40, tBanq40A) into ReservationTable

!new Table('tBanq40B')
!tBanq40B.number := 202
!tBanq40B.description := 'Banquet table B'
!tBanq40B.capacity := 20
!insert (banq40, tBanq40B) into ReservationTable

!new Table('tBanq40C')
!tBanq40C.number := 203
!tBanq40C.description := 'Banquet table C'
!tBanq40C.capacity := 10
!insert (banq40, tBanq40C) into ReservationTable

!new Table('tBanq40D')
!tBanq40D.number := 204
!tBanq40D.description := 'Banquet table D'
!tBanq40D.capacity := 10
!insert (banq40, tBanq40D) into ReservationTable

!new ItemOrder('ioBanq40_1')
!ioBanq40_1.time := Time('12:10')
!insert (banq40, ioBanq40_1) into ReservationItemOrdered
!insert (ioBanq40_1, miCaesarSalad29) into ItemOrderMenuItem

!new ItemOrder('ioBanq40_2')
!ioBanq40_2.time := Time('12:35')
!insert (banq40, ioBanq40_2) into ReservationItemOrdered
!insert (ioBanq40_2, miRibeyePlate29) into ItemOrderMenuItem

!new ItemOrder('ioBanq40_3')
!ioBanq40_3.time := Time('13:05')
!insert (banq40, ioBanq40_3) into ReservationItemOrdered
!insert (ioBanq40_3, miWalnutCheesecake29) into ItemOrderMenuItem

!new ItemOrder('ioBanq40_4')
!ioBanq40_4.time := Time('13:15')
!insert (banq40, ioBanq40_4) into ReservationItemOrdered
!insert (ioBanq40_4, miEspresso29) into ItemOrderMenuItem

!new DietaryRequirement('dietReq40')
!dietReq40.diet := #Halal

!new ReportedAllergy('repAlg40')
!repAlg40.allergen := #Nuts
```
## Generation 22 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 277 | 0.00% |
| Multiplicities Errors | 0 | 62 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 16 | 0.00% |
| Phones | 0 | 16 | 0.00% |

# Generation 23
```
!new Restaurant('rest30')
!rest30.name := 'Aurora Vegan Deli'

!new Owner('own73')
!own73.name := 'Leila Morgan'
!own73.percentageShares := 45

!new Owner('own74')
!own74.name := 'Tomas Ilic'
!own74.percentageShares := 35

!new Owner('own75')
!own75.name := 'Priya Deshmukh'
!own75.percentageShares := 20

!insert (rest30, own73) into RestaurantOwner
!insert (rest30, own74) into RestaurantOwner
!insert (rest30, own75) into RestaurantOwner

!new HeadWaiter('hw42')
!hw42.name := 'Sergio Alvarez'
!hw42.dateOfBirth := Date('1984-05-09')
!hw42.phoneNumber := '555-7400'

!new Waiter('w73')
!w73.name := 'Mila Novak'
!w73.dateOfBirth := Date('1998-08-11')
!w73.phoneNumber := '555-7401'
!w73.spokenLanguage := #English

!new Waiter('w74')
!w74.name := 'Gianni Costa'
!w74.dateOfBirth := Date('1995-02-18')
!w74.phoneNumber := '555-7402'
!w74.spokenLanguage := #Italian

!new Waiter('w75')
!w75.name := 'Clara Rios'
!w75.dateOfBirth := Date('1999-10-04')
!w75.phoneNumber := '555-7403'
!w75.spokenLanguage := #Spanish

!insert (hw42, w73) into HeadWaiterWaiter
!insert (hw42, w74) into HeadWaiterWaiter
!insert (hw42, w75) into HeadWaiterWaiter

!new HeadWaiter('hw43')
!hw43.name := 'Nadine Weber'
!hw43.dateOfBirth := Date('1981-01-21')
!hw43.phoneNumber := '555-7410'

!new Waiter('w76')
!w76.name := 'Lars Braun'
!w76.dateOfBirth := Date('1993-06-30')
!w76.phoneNumber := '555-7411'
!w76.spokenLanguage := #German

!insert (hw43, w76) into HeadWaiterWaiter

!new Chef('chef49')
!chef49.name := 'Aiko Tanaka'
!chef49.dateOfBirth := Date('1977-09-27')
!chef49.phoneNumber := '555-7420'

!new Chef('chef50')
!chef50.name := 'Omar Haddad'
!chef50.dateOfBirth := Date('1980-12-12')
!chef50.phoneNumber := '555-7421'

!new Cook('cook73')
!cook73.name := 'Jenna Park'
!cook73.dateOfBirth := Date('2001-03-03')
!cook73.phoneNumber := '555-7430'
!cook73.yearsOfExperience := 0

!new Cook('cook74')
!cook74.name := 'Hugo Martins'
!cook74.dateOfBirth := Date('1992-11-09')
!cook74.phoneNumber := '555-7431'
!cook74.yearsOfExperience := 5

!new Cook('cook75')
!cook75.name := 'Elena Petrov'
!cook75.dateOfBirth := Date('1988-07-22')
!cook75.phoneNumber := '555-7432'
!cook75.yearsOfExperience := 12

!insert (chef49, cook73) into ChefCook
!insert (chef49, cook74) into ChefCook
!insert (chef50, cook75) into ChefCook

!new Allergen('alg30Gluten')
!alg30Gluten.type := #Gluten
!new Allergen('alg30Nuts')
!alg30Nuts.type := #Nuts

!new FoodItem('fiSeitan30')
!fiSeitan30.number := 2301
!fiSeitan30.description := 'Seitan strips'
!fiSeitan30.purchaseFlag := true
!fiSeitan30.unit := #Pound

!new FoodItem('fiSourdough30')
!fiSourdough30.number := 2302
!fiSourdough30.description := 'Sourdough bread'
!fiSourdough30.purchaseFlag := true
!fiSourdough30.unit := #Dozen

!new FoodItem('fiCashews30')
!fiCashews30.number := 2303
!fiCashews30.description := 'Cashews'
!fiCashews30.purchaseFlag := true
!fiCashews30.unit := #Ounce

!new FoodItem('fiOats30')
!fiOats30.number := 2304
!fiOats30.description := 'Rolled oats'
!fiOats30.purchaseFlag := true
!fiOats30.unit := #Pound

!new FoodItem('fiCoffeeBeans30')
!fiCoffeeBeans30.number := 2305
!fiCoffeeBeans30.description := 'Coffee beans'
!fiCoffeeBeans30.purchaseFlag := true
!fiCoffeeBeans30.unit := #Pound

!new FoodItem('fiSparklingWater30')
!fiSparklingWater30.number := 2306
!fiSparklingWater30.description := 'Sparkling water'
!fiSparklingWater30.purchaseFlag := true
!fiSparklingWater30.unit := #Ounce

!insert (fiSeitan30, alg30Gluten) into FoodItemAllergen
!insert (fiSourdough30, alg30Gluten) into FoodItemAllergen
!insert (fiOats30, alg30Gluten) into FoodItemAllergen
!insert (fiCashews30, alg30Nuts) into FoodItemAllergen

!new MenuItem('miSeitanReuben30')
!miSeitanReuben30.description := 'Seitan reuben on sourdough'
!miSeitanReuben30.prepTime := 12.0
!miSeitanReuben30.classification := #Main

!new MenuItem('miCashewCheesecake30')
!miCashewCheesecake30.description := 'Cashew cheesecake slice'
!miCashewCheesecake30.prepTime := 7.0
!miCashewCheesecake30.classification := #Dessert

!new MenuItem('miOvernightOats30')
!miOvernightOats30.description := 'Overnight oats'
!miOvernightOats30.prepTime := 3.0
!miOvernightOats30.classification := #Dessert

!new MenuItem('miHouseCoffee30')
!miHouseCoffee30.description := 'House drip coffee'
!miHouseCoffee30.prepTime := 2.0
!miHouseCoffee30.classification := #Beverage

!new MenuItem('miSparklingWater30')
!miSparklingWater30.description := 'Sparkling water'
!miSparklingWater30.prepTime := 1.0
!miSparklingWater30.classification := #Beverage

!insert (miSeitanReuben30, chef49) into MenuItemChef
!insert (miCashewCheesecake30, chef50) into MenuItemChef
!insert (miOvernightOats30, chef50) into MenuItemChef
!insert (miHouseCoffee30, chef49) into MenuItemChef
!insert (miSparklingWater30, chef49) into MenuItemChef

!insert (miSeitanReuben30, fiSeitan30) into MenuItemFoodItem
!insert (miSeitanReuben30, fiSourdough30) into MenuItemFoodItem

!insert (miCashewCheesecake30, fiCashews30) into MenuItemFoodItem
!insert (miCashewCheesecake30, fiOats30) into MenuItemFoodItem

!insert (miOvernightOats30, fiOats30) into MenuItemFoodItem

!insert (miHouseCoffee30, fiCoffeeBeans30) into MenuItemFoodItem

!insert (miSparklingWater30, fiSparklingWater30) into MenuItemFoodItem

!new Banquet('banq41')
!banq41.time := Time('12:30')
!banq41.date := Date('2027-12-15')
!banq41.numberPeople := 25
!banq41.name := 'Solar Tech Workshop'
!banq41.phoneNumber := '555-7490'
!banq41.number := 61001
!banq41.groupName := 'Installer Training Lunch'
!banq41.paymentMethod := #Cash
!banq41.busService := false

!insert (rest30, banq41) into RestaurantReservation
!insert (banq41, w73) into ReservationWaiter
!insert (banq41, w74) into ReservationWaiter

!new Table('tBanq41A')
!tBanq41A.number := 101
!tBanq41A.description := 'Workshop table A'
!tBanq41A.capacity := 10
!insert (banq41, tBanq41A) into ReservationTable

!new Table('tBanq41B')
!tBanq41B.number := 102
!tBanq41B.description := 'Workshop table B'
!tBanq41B.capacity := 10
!insert (banq41, tBanq41B) into ReservationTable

!new Table('tBanq41C')
!tBanq41C.number := 103
!tBanq41C.description := 'Workshop table C'
!tBanq41C.capacity := 8
!insert (banq41, tBanq41C) into ReservationTable

!new ItemOrder('ioBanq41_1')
!ioBanq41_1.time := Time('12:45')
!insert (banq41, ioBanq41_1) into ReservationItemOrdered
!insert (ioBanq41_1, miHouseCoffee30) into ItemOrderMenuItem

!new ItemOrder('ioBanq41_2')
!ioBanq41_2.time := Time('13:05')
!insert (banq41, ioBanq41_2) into ReservationItemOrdered
!insert (ioBanq41_2, miSeitanReuben30) into ItemOrderMenuItem

!new ItemOrder('ioBanq41_3')
!ioBanq41_3.time := Time('13:25')
!insert (banq41, ioBanq41_3) into ReservationItemOrdered
!insert (ioBanq41_3, miSparklingWater30) into ItemOrderMenuItem

!new Individual('res42')
!res42.time := Time('07:05')
!res42.date := Date('2027-12-16')
!res42.numberPeople := 1
!res42.name := 'Morning Commuter'
!res42.phoneNumber := '555-7491'
!res42.number := 61002
!res42.seating := #Inside
!res42.smoking := #NonSmoking

!insert (rest30, res42) into RestaurantReservation
!insert (res42, w75) into ReservationWaiter

!new Table('tRes42A')
!tRes42A.number := 7
!tRes42A.description := 'Single seat at bar'
!tRes42A.capacity := 2
!insert (res42, tRes42A) into ReservationTable

!new ItemOrder('ioRes42_1')
!ioRes42_1.time := Time('07:10')
!insert (res42, ioRes42_1) into ReservationItemOrdered
!insert (ioRes42_1, miHouseCoffee30) into ItemOrderMenuItem

!new RegularCustomer('cust42')
!cust42.name := 'Jasper Miller'
!cust42.prefferedLanguage := #English

!new RegularCustomer('cust43')
!cust43.name := 'Alessia Romano'
!cust43.prefferedLanguage := #Italian

!new Individual('res43')
!res43.time := Time('20:10')
!res43.date := Date('2027-12-16')
!res43.numberPeople := 6
!res43.name := 'Alessia Romano'
!res43.phoneNumber := '555-7492'
!res43.number := 61003
!res43.seating := #Patio
!res43.smoking := #Smoking

!insert (rest30, res43) into RestaurantReservation
!insert (res43, cust43) into ReservationCustomer
!insert (res43, w73) into ReservationWaiter

!new Table('tRes43A')
!tRes43A.number := 31
!tRes43A.description := 'Patio four-top'
!tRes43A.capacity := 4
!insert (res43, tRes43A) into ReservationTable

!new Table('tRes43B')
!tRes43B.number := 32
!tRes43B.description := 'Patio two-top'
!tRes43B.capacity := 2
!insert (res43, tRes43B) into ReservationTable

!new ItemOrder('ioRes43_1')
!ioRes43_1.time := Time('20:25')
!insert (res43, ioRes43_1) into ReservationItemOrdered
!insert (ioRes43_1, miSeitanReuben30) into ItemOrderMenuItem

!new ItemOrder('ioRes43_2')
!ioRes43_2.time := Time('20:55')
!insert (res43, ioRes43_2) into ReservationItemOrdered
!insert (ioRes43_2, miCashewCheesecake30) into ItemOrderMenuItem

!new DietaryRequirement('dietReq21')
!dietReq21.diet := #Vegan

!new ReportedAllergy('repAlg21')
!repAlg21.allergen := #Gluten
```
## Generation 23 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 242 | 0.00% |
| Multiplicities Errors | 0 | 52 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 14 | 0.00% |
| Phones | 0 | 14 | 0.00% |

# Generation 24
```
!new Restaurant('rest31')
!rest31.name := 'Old Town Noodle Club'

!new Owner('own76')
!own76.name := 'Ruth Gallagher'
!own76.percentageShares := 55

!new Owner('own77')
!own77.name := 'Kenji Arai'
!own77.percentageShares := 45

!insert (rest31, own76) into RestaurantOwner
!insert (rest31, own77) into RestaurantOwner

!new HeadWaiter('hw44')
!hw44.name := 'Marek Lis'
!hw44.dateOfBirth := Date('1984-02-25')
!hw44.phoneNumber := '555-8100'

!new Waiter('w77')
!w77.name := 'Elisa Conti'
!w77.dateOfBirth := Date('1998-06-18')
!w77.phoneNumber := '555-8101'
!w77.spokenLanguage := #Italian

!new Waiter('w78')
!w78.name := 'Sergio Morales'
!w78.dateOfBirth := Date('1995-10-07')
!w78.phoneNumber := '555-8102'
!w78.spokenLanguage := #Spanish

!insert (hw44, w77) into HeadWaiterWaiter
!insert (hw44, w78) into HeadWaiterWaiter

!new Chef('chef51')
!chef51.name := 'Hana Kobayashi'
!chef51.dateOfBirth := Date('1979-08-09')
!chef51.phoneNumber := '555-8110'

!new Cook('cook76')
!cook76.name := 'Jordan Pike'
!cook76.dateOfBirth := Date('1990-11-11')
!cook76.phoneNumber := '555-8111'
!cook76.yearsOfExperience := 8

!new Cook('cook77')
!cook77.name := 'Marta Sokolov'
!cook77.dateOfBirth := Date('1997-01-30')
!cook77.phoneNumber := '555-8112'
!cook77.yearsOfExperience := 2

!insert (chef51, cook76) into ChefCook
!insert (chef51, cook77) into ChefCook

!new Allergen('alg31Gluten')
!alg31Gluten.type := #Gluten

!new Allergen('alg31Seafood')
!alg31Seafood.type := #Seafood

!new FoodItem('fiUdon31')
!fiUdon31.number := 2401
!fiUdon31.description := 'Udon noodles'
!fiUdon31.purchaseFlag := true
!fiUdon31.unit := #Pound

!new FoodItem('fiSoySauce31')
!fiSoySauce31.number := 2402
!fiSoySauce31.description := 'Soy sauce'
!fiSoySauce31.purchaseFlag := true
!fiSoySauce31.unit := #Ounce

!new FoodItem('fiChicken31')
!fiChicken31.number := 2403
!fiChicken31.description := 'Chicken thigh'
!fiChicken31.purchaseFlag := true
!fiChicken31.unit := #Pound

!new FoodItem('fiBroccoli31')
!fiBroccoli31.number := 2404
!fiBroccoli31.description := 'Broccoli'
!fiBroccoli31.purchaseFlag := true
!fiBroccoli31.unit := #Pound

!new FoodItem('fiShrimp31')
!fiShrimp31.number := 2405
!fiShrimp31.description := 'Shrimp'
!fiShrimp31.purchaseFlag := true
!fiShrimp31.unit := #Pound

!new FoodItem('fiCoffeeBeans31')
!fiCoffeeBeans31.number := 2406
!fiCoffeeBeans31.description := 'Coffee beans'
!fiCoffeeBeans31.purchaseFlag := true
!fiCoffeeBeans31.unit := #Pound

!insert (fiUdon31, alg31Gluten) into FoodItemAllergen
!insert (fiSoySauce31, alg31Gluten) into FoodItemAllergen
!insert (fiShrimp31, alg31Seafood) into FoodItemAllergen

!new MenuItem('miChickenUdon31')
!miChickenUdon31.description := 'Chicken udon bowl with broccoli'
!miChickenUdon31.prepTime := 13.0
!miChickenUdon31.classification := #Main

!new MenuItem('miShrimpUdon31')
!miShrimpUdon31.description := 'Shrimp udon bowl'
!miShrimpUdon31.prepTime := 14.0
!miShrimpUdon31.classification := #Main

!new MenuItem('miIcedCoffee31')
!miIcedCoffee31.description := 'Iced coffee'
!miIcedCoffee31.prepTime := 2.0
!miIcedCoffee31.classification := #Beverage

!insert (miChickenUdon31, chef51) into MenuItemChef
!insert (miShrimpUdon31, chef51) into MenuItemChef
!insert (miIcedCoffee31, chef51) into MenuItemChef

!insert (miChickenUdon31, fiUdon31) into MenuItemFoodItem
!insert (miChickenUdon31, fiSoySauce31) into MenuItemFoodItem
!insert (miChickenUdon31, fiChicken31) into MenuItemFoodItem
!insert (miChickenUdon31, fiBroccoli31) into MenuItemFoodItem

!insert (miShrimpUdon31, fiUdon31) into MenuItemFoodItem
!insert (miShrimpUdon31, fiSoySauce31) into MenuItemFoodItem
!insert (miShrimpUdon31, fiShrimp31) into MenuItemFoodItem

!insert (miIcedCoffee31, fiCoffeeBeans31) into MenuItemFoodItem

!new RegularCustomer('cust44')
!cust44.name := 'Petra Novak'
!cust44.prefferedLanguage := #German

!new Individual('res44')
!res44.time := Time('19:05')
!res44.date := Date('2028-01-08')
!res44.numberPeople := 5
!res44.name := 'Local Food Bloggers'
!res44.phoneNumber := '555-8200'
!res44.number := 71001
!res44.seating := #Inside
!res44.smoking := #NonSmoking

!insert (res44, w77) into ReservationWaiter

!new Table('tRes44A')
!tRes44A.number := 11
!tRes44A.description := 'Corner booth'
!tRes44A.capacity := 4

!new Table('tRes44B')
!tRes44B.number := 12
!tRes44B.description := 'Add-on two-top'
!tRes44B.capacity := 2

!insert (res44, tRes44A) into ReservationTable
!insert (res44, tRes44B) into ReservationTable

!new ItemOrder('ioRes44_1')
!ioRes44_1.time := Time('19:15')
!insert (res44, ioRes44_1) into ReservationItemOrdered
!insert (ioRes44_1, miChickenUdon31) into ItemOrderMenuItem

!new ItemOrder('ioRes44_2')
!ioRes44_2.time := Time('19:20')
!insert (res44, ioRes44_2) into ReservationItemOrdered
!insert (ioRes44_2, miIcedCoffee31) into ItemOrderMenuItem

!new Banquet('banq42')
!banq42.time := Time('12:10')
!banq42.date := Date('2028-01-09')
!banq42.numberPeople := 18
!banq42.name := 'Neighborhood Workshop'
!banq42.phoneNumber := '555-8201'
!banq42.number := 72001
!banq42.groupName := 'Winter Crafts Meetup'
!banq42.paymentMethod := #Cash
!banq42.busService := false

!insert (banq42, w77) into ReservationWaiter
!insert (banq42, w78) into ReservationWaiter

!new Table('tBanq42A')
!tBanq42A.number := 30
!tBanq42A.description := 'Community table A'
!tBanq42A.capacity := 10

!new Table('tBanq42B')
!tBanq42B.number := 31
!tBanq42B.description := 'Community table B'
!tBanq42B.capacity := 8

!insert (banq42, tBanq42A) into ReservationTable
!insert (banq42, tBanq42B) into ReservationTable

!new ItemOrder('ioBanq42_1')
!ioBanq42_1.time := Time('12:25')
!insert (banq42, ioBanq42_1) into ReservationItemOrdered
!insert (ioBanq42_1, miShrimpUdon31) into ItemOrderMenuItem

!new ItemOrder('ioBanq42_2')
!ioBanq42_2.time := Time('12:25')
!insert (banq42, ioBanq42_2) into ReservationItemOrdered
!insert (ioBanq42_2, miChickenUdon31) into ItemOrderMenuItem

!new ItemOrder('ioBanq42_3')
!ioBanq42_3.time := Time('12:30')
!insert (banq42, ioBanq42_3) into ReservationItemOrdered
!insert (ioBanq42_3, miIcedCoffee31) into ItemOrderMenuItem

!new DietaryRequirement('dietReq22')
!dietReq22.diet := #Vegan

!new ReportedAllergy('repAlg22')
!repAlg22.allergen := #Seafood
```
## Generation 24 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 171 | 0.00% |
| Multiplicities Errors | 0 | 37 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 8 | 0.00% |
| Phones | 0 | 8 | 0.00% |

# Generation 25
```
!new Restaurant('rest32')
!rest32.name := 'River Lantern Izakaya'

!new Owner('own80')
!own80.name := 'Keiko Yamamoto'
!own80.percentageShares := 70

!new Owner('own81')
!own81.name := 'Daniel Hughes'
!own81.percentageShares := 30

!insert (rest32, own80) into RestaurantOwner
!insert (rest32, own81) into RestaurantOwner

!new Manager('mgr10')
!mgr10.name := 'Alicia Stern'
!mgr10.dateOfBirth := Date('1982-07-17')
!mgr10.phoneNumber := '555-8800'

!new HeadWaiter('hw50')
!hw50.name := 'Victor Nguyen'
!hw50.dateOfBirth := Date('1986-01-09')
!hw50.phoneNumber := '555-8801'

!new Waiter('w80')
!w80.name := 'Emily Tan'
!w80.dateOfBirth := Date('1999-04-12')
!w80.phoneNumber := '555-8802'
!w80.spokenLanguage := #English

!new Waiter('w81')
!w81.name := 'Jonas Richter'
!w81.dateOfBirth := Date('1994-10-21')
!w81.phoneNumber := '555-8803'
!w81.spokenLanguage := #German

!new Waiter('w82')
!w82.name := 'Carmen Ruiz'
!w82.dateOfBirth := Date('1997-02-02')
!w82.phoneNumber := '555-8804'
!w82.spokenLanguage := #Spanish

!insert (hw50, w80) into HeadWaiterWaiter
!insert (hw50, w81) into HeadWaiterWaiter
!insert (hw50, w82) into HeadWaiterWaiter

!new Chef('chef60')
!chef60.name := 'Sora Takahashi'
!chef60.dateOfBirth := Date('1978-03-03')
!chef60.phoneNumber := '555-8815'

!new Chef('chef61')
!chef61.name := 'Marta Kowalska'
!chef61.dateOfBirth := Date('1983-09-28')
!chef61.phoneNumber := '555-8816'

!new Cook('cook80')
!cook80.name := 'Ibrahim Saleh'
!cook80.dateOfBirth := Date('1991-05-20')
!cook80.phoneNumber := '555-8820'
!cook80.yearsOfExperience := 8

!new Cook('cook81')
!cook81.name := 'Lena Hoffmann'
!cook81.dateOfBirth := Date('1998-12-05')
!cook81.phoneNumber := '555-8821'
!cook81.yearsOfExperience := 1

!new Cook('cook82')
!cook82.name := 'Pedro Alvarez'
!cook82.dateOfBirth := Date('1989-08-14')
!cook82.phoneNumber := '555-8822'
!cook82.yearsOfExperience := 12

!insert (chef60, cook80) into ChefCook
!insert (chef60, cook81) into ChefCook
!insert (chef61, cook82) into ChefCook

!new Allergen('alg32Gluten')
!alg32Gluten.type := #Gluten
!new Allergen('alg32Seafood')
!alg32Seafood.type := #Seafood
!new Allergen('alg32Nuts')
!alg32Nuts.type := #Nuts
!new Allergen('alg32Lactose')
!alg32Lactose.type := #Lactose

!new FoodItem('fiSobaNoodles32')
!fiSobaNoodles32.number := 3001
!fiSobaNoodles32.description := 'Soba noodles'
!fiSobaNoodles32.purchaseFlag := true
!fiSobaNoodles32.unit := #Pound

!new FoodItem('fiShrimp32')
!fiShrimp32.number := 3002
!fiShrimp32.description := 'Shrimp'
!fiShrimp32.purchaseFlag := true
!fiShrimp32.unit := #Pound

!new FoodItem('fiWheatFlour32')
!fiWheatFlour32.number := 3003
!fiWheatFlour32.description := 'Wheat flour'
!fiWheatFlour32.purchaseFlag := true
!fiWheatFlour32.unit := #Pound

!new FoodItem('fiPeanutSauce32')
!fiPeanutSauce32.number := 3004
!fiPeanutSauce32.description := 'Peanut sauce'
!fiPeanutSauce32.purchaseFlag := true
!fiPeanutSauce32.unit := #Ounce

!new FoodItem('fiTofu32')
!fiTofu32.number := 3005
!fiTofu32.description := 'Firm tofu'
!fiTofu32.purchaseFlag := true
!fiTofu32.unit := #Pound

!new FoodItem('fiRice32')
!fiRice32.number := 3006
!fiRice32.description := 'Steamed rice'
!fiRice32.purchaseFlag := true
!fiRice32.unit := #Pound

!new FoodItem('fiSoyMilk32')
!fiSoyMilk32.number := 3007
!fiSoyMilk32.description := 'Soy milk'
!fiSoyMilk32.purchaseFlag := true
!fiSoyMilk32.unit := #Ounce

!new FoodItem('fiMatcha32')
!fiMatcha32.number := 3008
!fiMatcha32.description := 'Matcha powder'
!fiMatcha32.purchaseFlag := true
!fiMatcha32.unit := #Gram

!new FoodItem('fiSparklingWater32')
!fiSparklingWater32.number := 3009
!fiSparklingWater32.description := 'Sparkling water'
!fiSparklingWater32.purchaseFlag := true
!fiSparklingWater32.unit := #Ounce

!new FoodItem('fiButter32')
!fiButter32.number := 3010
!fiButter32.description := 'Butter'
!fiButter32.purchaseFlag := true
!fiButter32.unit := #Ounce

!insert (fiSobaNoodles32, alg32Gluten) into FoodItemAllergen
!insert (fiWheatFlour32, alg32Gluten) into FoodItemAllergen
!insert (fiShrimp32, alg32Seafood) into FoodItemAllergen
!insert (fiPeanutSauce32, alg32Nuts) into FoodItemAllergen
!insert (fiButter32, alg32Lactose) into FoodItemAllergen

!new MenuItem('miSobaSalad32')
!miSobaSalad32.description := 'Cold soba salad with tofu and peanut dressing'
!miSobaSalad32.prepTime := 8.0
!miSobaSalad32.classification := #Apetizer

!new MenuItem('miShrimpTempura32')
!miShrimpTempura32.description := 'Shrimp tempura'
!miShrimpTempura32.prepTime := 16.0
!miShrimpTempura32.classification := #Main

!new MenuItem('miRiceBowl32')
!miRiceBowl32.description := 'Tofu rice bowl'
!miRiceBowl32.prepTime := 12.0
!miRiceBowl32.classification := #Main

!new MenuItem('miMatchaPudding32')
!miMatchaPudding32.description := 'Matcha pudding made with soy milk'
!miMatchaPudding32.prepTime := 6.0
!miMatchaPudding32.classification := #Dessert

!new MenuItem('miGreenTeaSoda32')
!miGreenTeaSoda32.description := 'Matcha green tea soda'
!miGreenTeaSoda32.prepTime := 2.0
!miGreenTeaSoda32.classification := #Beverage

!insert (miSobaSalad32, chef60) into MenuItemChef
!insert (miShrimpTempura32, chef60) into MenuItemChef
!insert (miRiceBowl32, chef61) into MenuItemChef
!insert (miMatchaPudding32, chef61) into MenuItemChef
!insert (miGreenTeaSoda32, chef61) into MenuItemChef

!insert (miSobaSalad32, fiSobaNoodles32) into MenuItemFoodItem
!insert (miSobaSalad32, fiTofu32) into MenuItemFoodItem
!insert (miSobaSalad32, fiPeanutSauce32) into MenuItemFoodItem

!insert (miShrimpTempura32, fiShrimp32) into MenuItemFoodItem
!insert (miShrimpTempura32, fiWheatFlour32) into MenuItemFoodItem

!insert (miRiceBowl32, fiRice32) into MenuItemFoodItem
!insert (miRiceBowl32, fiTofu32) into MenuItemFoodItem

!insert (miMatchaPudding32, fiMatcha32) into MenuItemFoodItem
!insert (miMatchaPudding32, fiSoyMilk32) into MenuItemFoodItem

!insert (miGreenTeaSoda32, fiMatcha32) into MenuItemFoodItem
!insert (miGreenTeaSoda32, fiSparklingWater32) into MenuItemFoodItem

!new RegularCustomer('cust50')
!cust50.name := 'Emily Tan'
!cust50.prefferedLanguage := #English

!new RegularCustomer('cust51')
!cust51.name := 'Stefan Kruger'
!cust51.prefferedLanguage := #German

!new Individual('res50')
!res50.time := Time('18:30')
!res50.date := Date('2028-02-14')
!res50.numberPeople := 3
!res50.name := 'Emily Tan'
!res50.phoneNumber := '555-8808'
!res50.number := 80001
!res50.seating := #Patio
!res50.smoking := #NonSmoking

!insert (rest32, res50) into RestaurantReservation
!insert (res50, cust50) into ReservationCustomer
!insert (res50, w80) into ReservationWaiter
!insert (res50, w81) into ReservationWaiter

!new Table('t501')
!t501.number := 501
!t501.description := 'Patio two-top A'
!t501.capacity := 2

!new Table('t502')
!t502.number := 502
!t502.description := 'Patio two-top B'
!t502.capacity := 2

!insert (res50, t501) into ReservationTable
!insert (res50, t502) into ReservationTable

!new ItemOrder('io501')
!io501.time := Time('18:45')
!insert (res50, io501) into ReservationItemOrdered
!insert (io501, miSobaSalad32) into ItemOrderMenuItem

!new ItemOrder('io502')
!io502.time := Time('19:05')
!insert (res50, io502) into ReservationItemOrdered
!insert (io502, miShrimpTempura32) into ItemOrderMenuItem

!new ItemOrder('io503')
!io503.time := Time('19:20')
!insert (res50, io503) into ReservationItemOrdered
!insert (io503, miGreenTeaSoda32) into ItemOrderMenuItem

!new BusDriver('bd50')
!bd50.name := 'Harold Finch'
!bd50.dateOfBirth := Date('1970-10-30')
!bd50.phoneNumber := '555-8811'
!bd50.driverLicenseNr := 'D-5531902'

!new Banquet('banq50')
!banq50.time := Time('12:00')
!banq50.date := Date('2028-02-15')
!banq50.numberPeople := 20
!banq50.name := 'Helios Corp'
!banq50.phoneNumber := '555-8810'
!banq50.number := 80002
!banq50.groupName := 'Product Launch Lunch'
!banq50.paymentMethod := #CreditCard
!banq50.busService := true

!insert (rest32, banq50) into RestaurantReservation
!insert (banq50, cust51) into ReservationCustomer
!insert (banq50, w82) into ReservationWaiter
!insert (banq50, bd50) into BanquetBusDriver

!new Table('t510')
!t510.number := 510
!t510.description := 'Private room table A'
!t510.capacity := 10

!new Table('t511')
!t511.number := 511
!t511.description := 'Private room table B'
!t511.capacity := 10

!insert (banq50, t510) into ReservationTable
!insert (banq50, t511) into ReservationTable

!new ItemOrder('io510')
!io510.time := Time('12:15')
!insert (banq50, io510) into ReservationItemOrdered
!insert (io510, miRiceBowl32) into ItemOrderMenuItem

!new ItemOrder('io511')
!io511.time := Time('12:45')
!insert (banq50, io511) into ReservationItemOrdered
!insert (io511, miMatchaPudding32) into ItemOrderMenuItem

!new Individual('res51')
!res51.time := Time('22:00')
!res51.date := Date('2028-02-14')
!res51.numberPeople := 2
!res51.name := 'Late Pair'
!res51.phoneNumber := '555-8899'
!res51.number := 80003
!res51.seating := #Inside
!res51.smoking := #Smoking

!insert (res51, w81) into ReservationWaiter

!new Table('t520')
!t520.number := 520
!t520.description := 'Two-top near entrance'
!t520.capacity := 2
!insert (res51, t520) into ReservationTable

!new ItemOrder('io520')
!io520.time := Time('22:10')
!insert (res51, io520) into ReservationItemOrdered
!insert (io520, miGreenTeaSoda32) into ItemOrderMenuItem

!new DietaryRequirement('dietReq50')
!dietReq50.diet := #Vegan

!new ReportedAllergy('repAlg50')
!repAlg50.allergen := #Seafood
```
## Generation 25 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 262 | 0.00% |
| Multiplicities Errors | 0 | 55 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 14 | 0.00% |
| Phones | 0 | 14 | 0.00% |

# Generation 26
```
!new Restaurant('rest33')
!rest33.name := 'Seaside Breakfast Market'

!new Restaurant('rest34')
!rest34.name := 'Hillside Coffee Annex'

!new Owner('own90')
!own90.name := 'Natalie Brooks'
!own90.percentageShares := 60

!new Owner('own91')
!own91.name := 'Oskar Meier'
!own91.percentageShares := 40

!insert (rest33, own90) into RestaurantOwner
!insert (rest33, own91) into RestaurantOwner
!insert (rest34, own90) into RestaurantOwner
!insert (rest34, own91) into RestaurantOwner

!new HeadWaiter('hw60')
!hw60.name := 'Carson Lee'
!hw60.dateOfBirth := Date('1986-10-09')
!hw60.phoneNumber := '555-2000'

!new Waiter('w90')
!w90.name := 'Isabel Moreno'
!w90.dateOfBirth := Date('1998-06-06')
!w90.phoneNumber := '555-2001'
!w90.spokenLanguage := #Spanish

!new Waiter('w91')
!w91.name := 'Hanna Fischer'
!w91.dateOfBirth := Date('1994-03-22')
!w91.phoneNumber := '555-2002'
!w91.spokenLanguage := #German

!new Waiter('w92')
!w92.name := 'Marco Rinaldi'
!w92.dateOfBirth := Date('1997-12-15')
!w92.phoneNumber := '555-2003'
!w92.spokenLanguage := #Italian

!new Waiter('w93')
!w93.name := 'Alex Morgan'
!w93.dateOfBirth := Date('2000-01-04')
!w93.phoneNumber := '555-2004'
!w93.spokenLanguage := #English

!insert (hw60, w90) into HeadWaiterWaiter
!insert (hw60, w91) into HeadWaiterWaiter
!insert (hw60, w92) into HeadWaiterWaiter
!insert (hw60, w93) into HeadWaiterWaiter

!new HeadWaiter('hw61')
!hw61.name := 'Selina Costa'
!hw61.dateOfBirth := Date('1983-05-17')
!hw61.phoneNumber := '555-2010'

!new Waiter('w94')
!w94.name := 'Tobias Klein'
!w94.dateOfBirth := Date('1992-09-01')
!w94.phoneNumber := '555-2011'
!w94.spokenLanguage := #German

!insert (hw61, w94) into HeadWaiterWaiter

!new Chef('chef70')
!chef70.name := 'Reina Sato'
!chef70.dateOfBirth := Date('1978-02-11')
!chef70.phoneNumber := '555-2100'

!new Chef('chef71')
!chef71.name := 'Gustavo Almeida'
!chef71.dateOfBirth := Date('1981-07-07')
!chef71.phoneNumber := '555-2101'

!new Cook('cook90')
!cook90.name := 'Nora Patel'
!cook90.dateOfBirth := Date('1991-08-19')
!cook90.phoneNumber := '555-2110'
!cook90.yearsOfExperience := 6

!new Cook('cook91')
!cook91.name := 'Eli Zhang'
!cook91.dateOfBirth := Date('1999-04-28')
!cook91.phoneNumber := '555-2111'
!cook91.yearsOfExperience := 1

!new Cook('cook92')
!cook92.name := 'Claudia Rossi'
!cook92.dateOfBirth := Date('1988-12-03')
!cook92.phoneNumber := '555-2112'
!cook92.yearsOfExperience := 12

!insert (chef70, cook90) into ChefCook
!insert (chef70, cook91) into ChefCook
!insert (chef71, cook92) into ChefCook

!new Allergen('alg33Gluten')
!alg33Gluten.type := #Gluten
!new Allergen('alg33Lactose')
!alg33Lactose.type := #Lactose
!new Allergen('alg33Nuts')
!alg33Nuts.type := #Nuts
!new Allergen('alg33Seafood')
!alg33Seafood.type := #Seafood

!new FoodItem('fiBread33')
!fiBread33.number := 3301
!fiBread33.description := 'Sliced sourdough'
!fiBread33.purchaseFlag := true
!fiBread33.unit := #Dozen

!new FoodItem('fiButter33')
!fiButter33.number := 3302
!fiButter33.description := 'Cultured butter'
!fiButter33.purchaseFlag := true
!fiButter33.unit := #Ounce

!new FoodItem('fiEggs33')
!fiEggs33.number := 3303
!fiEggs33.description := 'Eggs'
!fiEggs33.purchaseFlag := true
!fiEggs33.unit := #Dozen

!new FoodItem('fiOats33')
!fiOats33.number := 3304
!fiOats33.description := 'Rolled oats'
!fiOats33.purchaseFlag := true
!fiOats33.unit := #Pound

!new FoodItem('fiAlmonds33')
!fiAlmonds33.number := 3305
!fiAlmonds33.description := 'Almond slivers'
!fiAlmonds33.purchaseFlag := true
!fiAlmonds33.unit := #Ounce

!new FoodItem('fiShrimp33')
!fiShrimp33.number := 3306
!fiShrimp33.description := 'Shrimp'
!fiShrimp33.purchaseFlag := true
!fiShrimp33.unit := #Pound

!new FoodItem('fiCoffeeBeans33')
!fiCoffeeBeans33.number := 3307
!fiCoffeeBeans33.description := 'House roast coffee beans'
!fiCoffeeBeans33.purchaseFlag := true
!fiCoffeeBeans33.unit := #Pound

!new FoodItem('fiLemons33')
!fiLemons33.number := 3308
!fiLemons33.description := 'Lemons'
!fiLemons33.purchaseFlag := true
!fiLemons33.unit := #Dozen

!new FoodItem('fiSugar33')
!fiSugar33.number := 3309
!fiSugar33.description := 'Cane sugar'
!fiSugar33.purchaseFlag := true
!fiSugar33.unit := #Pound

!insert (fiBread33, alg33Gluten) into FoodItemAllergen
!insert (fiOats33, alg33Gluten) into FoodItemAllergen
!insert (fiButter33, alg33Lactose) into FoodItemAllergen
!insert (fiAlmonds33, alg33Nuts) into FoodItemAllergen
!insert (fiShrimp33, alg33Seafood) into FoodItemAllergen

!new MenuItem('miToastTrio33')
!miToastTrio33.description := 'Toast trio with butter'
!miToastTrio33.prepTime := 5.0
!miToastTrio33.classification := #Apetizer

!new MenuItem('miShrimpOmelet33')
!miShrimpOmelet33.description := 'Shrimp omelet with herbs'
!miShrimpOmelet33.prepTime := 14.0
!miShrimpOmelet33.classification := #Main

!new MenuItem('miAlmondOatBowl33')
!miAlmondOatBowl33.description := 'Warm oat bowl with almonds'
!miAlmondOatBowl33.prepTime := 7.0
!miAlmondOatBowl33.classification := #Main

!new MenuItem('miLemonBar33')
!miLemonBar33.description := 'Lemon bar slice'
!miLemonBar33.prepTime := 9.0
!miLemonBar33.classification := #Dessert

!new MenuItem('miAmericano33')
!miAmericano33.description := 'Americano coffee'
!miAmericano33.prepTime := 2.0
!miAmericano33.classification := #Beverage

!insert (miToastTrio33, chef70) into MenuItemChef
!insert (miShrimpOmelet33, chef70) into MenuItemChef
!insert (miAlmondOatBowl33, chef71) into MenuItemChef
!insert (miLemonBar33, chef71) into MenuItemChef
!insert (miAmericano33, chef71) into MenuItemChef

!insert (miToastTrio33, fiBread33) into MenuItemFoodItem
!insert (miToastTrio33, fiButter33) into MenuItemFoodItem

!insert (miShrimpOmelet33, fiEggs33) into MenuItemFoodItem
!insert (miShrimpOmelet33, fiShrimp33) into MenuItemFoodItem
!insert (miShrimpOmelet33, fiButter33) into MenuItemFoodItem

!insert (miAlmondOatBowl33, fiOats33) into MenuItemFoodItem
!insert (miAlmondOatBowl33, fiAlmonds33) into MenuItemFoodItem

!insert (miLemonBar33, fiLemons33) into MenuItemFoodItem
!insert (miLemonBar33, fiSugar33) into MenuItemFoodItem
!insert (miLemonBar33, fiButter33) into MenuItemFoodItem
!insert (miLemonBar33, fiOats33) into MenuItemFoodItem

!insert (miAmericano33, fiCoffeeBeans33) into MenuItemFoodItem

!new RegularCustomer('cust60')
!cust60.name := 'Lena Hoffmann'
!cust60.prefferedLanguage := #German

!new RegularCustomer('cust61')
!cust61.name := 'Carlos Mendez'
!cust61.prefferedLanguage := #Spanish

!new Individual('res60')
!res60.time := Time('08:20')
!res60.date := Date('2028-03-03')
!res60.numberPeople := 5
!res60.name := 'Carlos Mendez'
!res60.phoneNumber := '555-2201'
!res60.number := 90001
!res60.seating := #Patio
!res60.smoking := #NonSmoking

!insert (rest33, res60) into RestaurantReservation
!insert (res60, cust61) into ReservationCustomer
!insert (res60, w90) into ReservationWaiter
!insert (res60, w92) into ReservationWaiter

!new Table('tRes60A')
!tRes60A.number := 41
!tRes60A.description := 'Patio table for three'
!tRes60A.capacity := 3

!new Table('tRes60B')
!tRes60B.number := 42
!tRes60B.description := 'Patio four-top adjacent'
!tRes60B.capacity := 4

!insert (res60, tRes60A) into ReservationTable
!insert (res60, tRes60B) into ReservationTable

!new ItemOrder('ioRes60_1')
!ioRes60_1.time := Time('08:35')
!insert (res60, ioRes60_1) into ReservationItemOrdered
!insert (ioRes60_1, miToastTrio33) into ItemOrderMenuItem

!new ItemOrder('ioRes60_2')
!ioRes60_2.time := Time('08:50')
!insert (res60, ioRes60_2) into ReservationItemOrdered
!insert (ioRes60_2, miShrimpOmelet33) into ItemOrderMenuItem

!new ItemOrder('ioRes60_3')
!ioRes60_3.time := Time('09:10')
!insert (res60, ioRes60_3) into ReservationItemOrdered
!insert (ioRes60_3, miAmericano33) into ItemOrderMenuItem

!new Individual('res61')
!res61.time := Time('07:10')
!res61.date := Date('2028-03-03')
!res61.numberPeople := 1
!res61.name := 'Solo Guest'
!res61.phoneNumber := '555-2202'
!res61.number := 90002
!res61.seating := #Inside
!res61.smoking := #Smoking

!insert (rest33, res61) into RestaurantReservation
!insert (res61, w93) into ReservationWaiter

!new Table('tRes61A')
!tRes61A.number := 3
!tRes61A.description := 'Inside two-top near entrance'
!tRes61A.capacity := 2
!insert (res61, tRes61A) into ReservationTable

!new ItemOrder('ioRes61_1')
!ioRes61_1.time := Time('07:20')
!insert (res61, ioRes61_1) into ReservationItemOrdered
!insert (ioRes61_1, miAmericano33) into ItemOrderMenuItem

!new Individual('res62')
!res62.time := Time('10:30')
!res62.date := Date('2028-03-03')
!res62.numberPeople := 10
!res62.name := 'Coastal Cycling Club'
!res62.phoneNumber := '555-2203'
!res62.number := 90003
!res62.seating := #Inside
!res62.smoking := #NonSmoking

!insert (rest33, res62) into RestaurantReservation
!insert (res62, w91) into ReservationWaiter
!insert (res62, w94) into ReservationWaiter

!new Table('tRes62A')
!tRes62A.number := 10
!tRes62A.description := 'Long inside table'
!tRes62A.capacity := 6

!new Table('tRes62B')
!tRes62B.number := 11
!tRes62B.description := 'Four-top add-on'
!tRes62B.capacity := 4

!insert (res62, tRes62A) into ReservationTable
!insert (res62, tRes62B) into ReservationTable

!new ItemOrder('ioRes62_1')
!ioRes62_1.time := Time('10:45')
!insert (res62, ioRes62_1) into ReservationItemOrdered
!insert (ioRes62_1, miAlmondOatBowl33) into ItemOrderMenuItem

!new ItemOrder('ioRes62_2')
!ioRes62_2.time := Time('11:05')
!insert (res62, ioRes62_2) into ReservationItemOrdered
!insert (ioRes62_2, miLemonBar33) into ItemOrderMenuItem

!new ItemOrder('ioRes62_3')
!ioRes62_3.time := Time('11:10')
!insert (res62, ioRes62_3) into ReservationItemOrdered
!insert (ioRes62_3, miAmericano33) into ItemOrderMenuItem

!new DietaryRequirement('dietReq60')
!dietReq60.diet := #Vegetarian

!new ReportedAllergy('repAlg60')
!repAlg60.allergen := #Seafood
```
## Generation 26 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 272 | 0.00% |
| Multiplicities Errors | 0 | 62 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 15 | 0.00% |
| Phones | 0 | 15 | 0.00% |

# Generation 27
```
!new Restaurant('rest35')
!rest35.name := 'Cobalt Oyster House'

!new Owner('own100')
!own100.name := 'Dana Whitfield'
!own100.percentageShares := 34

!new Owner('own101')
!own101.name := 'Ruben Castillo'
!own101.percentageShares := 33

!new Owner('own102')
!own102.name := 'Yvonne Schaefer'
!own102.percentageShares := 33

!insert (rest35, own100) into RestaurantOwner
!insert (rest35, own101) into RestaurantOwner
!insert (rest35, own102) into RestaurantOwner

!new HeadWaiter('hw70')
!hw70.name := 'Miles Carter'
!hw70.dateOfBirth := Date('1986-02-16')
!hw70.phoneNumber := '555-9000'

!new Waiter('w100')
!w100.name := 'Sofia Vega'
!w100.dateOfBirth := Date('1999-08-08')
!w100.phoneNumber := '555-9001'
!w100.spokenLanguage := #Spanish

!new Waiter('w101')
!w101.name := 'Lena Schmidt'
!w101.dateOfBirth := Date('1996-04-19')
!w101.phoneNumber := '555-9002'
!w101.spokenLanguage := #German

!insert (hw70, w100) into HeadWaiterWaiter
!insert (hw70, w101) into HeadWaiterWaiter

!new HeadWaiter('hw71')
!hw71.name := 'Olivia Park'
!hw71.dateOfBirth := Date('1983-11-03')
!hw71.phoneNumber := '555-9010'

!new Waiter('w102')
!w102.name := 'Marco Bassi'
!w102.dateOfBirth := Date('1994-06-27')
!w102.phoneNumber := '555-9011'
!w102.spokenLanguage := #Italian

!insert (hw71, w102) into HeadWaiterWaiter

!new Chef('chef80')
!chef80.name := 'Evelyn Cho'
!chef80.dateOfBirth := Date('1977-03-25')
!chef80.phoneNumber := '555-9100'

!new Cook('cook100')
!cook100.name := 'Aiden Price'
!cook100.dateOfBirth := Date('1990-09-14')
!cook100.phoneNumber := '555-9101'
!cook100.yearsOfExperience := 8

!new Cook('cook101')
!cook101.name := 'Marta Novak'
!cook101.dateOfBirth := Date('1998-01-06')
!cook101.phoneNumber := '555-9102'
!cook101.yearsOfExperience := 1

!insert (chef80, cook100) into ChefCook
!insert (chef80, cook101) into ChefCook

!new Chef('chef81')
!chef81.name := 'Hassan Nouri'
!chef81.dateOfBirth := Date('1981-12-30')
!chef81.phoneNumber := '555-9110'

!new Cook('cook102')
!cook102.name := 'Giulia Romano'
!cook102.dateOfBirth := Date('1992-07-11')
!cook102.phoneNumber := '555-9111'
!cook102.yearsOfExperience := 12

!insert (chef81, cook102) into ChefCook

!new Allergen('algSeafood35')
!algSeafood35.type := #Seafood

!new Allergen('algLactose35')
!algLactose35.type := #Lactose

!new Allergen('algGluten35')
!algGluten35.type := #Gluten

!new FoodItem('fiOysters35')
!fiOysters35.number := 3501
!fiOysters35.description := 'Fresh oysters'
!fiOysters35.purchaseFlag := true
!fiOysters35.unit := #Dozen

!new FoodItem('fiCream35')
!fiCream35.number := 3502
!fiCream35.description := 'Heavy cream'
!fiCream35.purchaseFlag := true
!fiCream35.unit := #Ounce

!new FoodItem('fiFlour35')
!fiFlour35.number := 3503
!fiFlour35.description := 'Wheat flour'
!fiFlour35.purchaseFlag := true
!fiFlour35.unit := #Pound

!new FoodItem('fiLimes35')
!fiLimes35.number := 3504
!fiLimes35.description := 'Key limes'
!fiLimes35.purchaseFlag := true
!fiLimes35.unit := #Dozen

!insert (fiOysters35, algSeafood35) into FoodItemAllergen
!insert (fiCream35, algLactose35) into FoodItemAllergen
!insert (fiFlour35, algGluten35) into FoodItemAllergen

!new MenuItem('miOysterShot35')
!miOysterShot35.description := 'Oyster shot with lime'
!miOysterShot35.prepTime := 3.0
!miOysterShot35.classification := #Apetizer

!new MenuItem('miSeafoodStew35')
!miSeafoodStew35.description := 'Creamy oyster stew'
!miSeafoodStew35.prepTime := 22.0
!miSeafoodStew35.classification := #Main

!new MenuItem('miKeyLimePie35')
!miKeyLimePie35.description := 'Key lime pie slice'
!miKeyLimePie35.prepTime := 9.0
!miKeyLimePie35.classification := #Dessert

!new MenuItem('miSparklingCider35')
!miSparklingCider35.description := 'Dry sparkling cider'
!miSparklingCider35.prepTime := 1.0
!miSparklingCider35.classification := #Beverage

!insert (miOysterShot35, chef80) into MenuItemChef
!insert (miSeafoodStew35, chef80) into MenuItemChef
!insert (miKeyLimePie35, chef81) into MenuItemChef
!insert (miSparklingCider35, chef81) into MenuItemChef

!insert (miOysterShot35, fiOysters35) into MenuItemFoodItem
!insert (miOysterShot35, fiLimes35) into MenuItemFoodItem

!insert (miSeafoodStew35, fiOysters35) into MenuItemFoodItem
!insert (miSeafoodStew35, fiCream35) into MenuItemFoodItem

!insert (miKeyLimePie35, fiFlour35) into MenuItemFoodItem
!insert (miKeyLimePie35, fiCream35) into MenuItemFoodItem
!insert (miKeyLimePie35, fiLimes35) into MenuItemFoodItem

!new RegularCustomer('cust80')
!cust80.name := 'Nora Klein'
!cust80.prefferedLanguage := #German

!new RegularCustomer('cust81')
!cust81.name := 'Luis Herrera'
!cust81.prefferedLanguage := #Spanish

!new Individual('res70')
!res70.time := Time('16:40')
!res70.date := Date('2028-04-21')
!res70.numberPeople := 3
!res70.name := 'Transit Layover'
!res70.phoneNumber := '555-9200'
!res70.number := 91001
!res70.seating := #Inside
!res70.smoking := #NonSmoking

!insert (res70, w100) into ReservationWaiter

!new Table('tRes70A')
!tRes70A.number := 7
!tRes70A.description := 'Bar two-top A'
!tRes70A.capacity := 2

!new Table('tRes70B')
!tRes70B.number := 8
!tRes70B.description := 'Bar two-top B'
!tRes70B.capacity := 2

!insert (res70, tRes70A) into ReservationTable
!insert (res70, tRes70B) into ReservationTable

!new Individual('res71')
!res71.time := Time('18:10')
!res71.date := Date('2028-04-21')
!res71.numberPeople := 2
!res71.name := 'Nora Klein'
!res71.phoneNumber := '555-9201'
!res71.number := 91002
!res71.seating := #Patio
!res71.smoking := #NonSmoking

!insert (rest35, res71) into RestaurantReservation
!insert (res71, cust80) into ReservationCustomer
!insert (res71, w101) into ReservationWaiter

!new Table('tRes71A')
!tRes71A.number := 14
!tRes71A.description := 'Patio two-top by heater'
!tRes71A.capacity := 2
!insert (res71, tRes71A) into ReservationTable

!new ItemOrder('io710')
!io710.time := Time('18:25')
!insert (res71, io710) into ReservationItemOrdered
!insert (io710, miOysterShot35) into ItemOrderMenuItem

!new BusDriver('bd60')
!bd60.name := 'Erica Wells'
!bd60.dateOfBirth := Date('1972-01-29')
!bd60.phoneNumber := '555-9300'
!bd60.driverLicenseNr := 'D-8400173'

!new Banquet('banq60')
!banq60.time := Time('19:30')
!banq60.date := Date('2028-04-22')
!banq60.numberPeople := 18
!banq60.name := 'Harborview Architects'
!banq60.phoneNumber := '555-9301'
!banq60.number := 92001
!banq60.groupName := 'Project Completion Dinner'
!banq60.paymentMethod := #CreditCard
!banq60.busService := true

!insert (rest35, banq60) into RestaurantReservation
!insert (banq60, w101) into ReservationWaiter
!insert (banq60, w102) into ReservationWaiter
!insert (banq60, bd60) into BanquetBusDriver

!new Table('tBanq60A')
!tBanq60A.number := 50
!tBanq60A.description := 'Private room table A'
!tBanq60A.capacity := 10

!new Table('tBanq60B')
!tBanq60B.number := 51
!tBanq60B.description := 'Private room table B'
!tBanq60B.capacity := 8

!insert (banq60, tBanq60A) into ReservationTable
!insert (banq60, tBanq60B) into ReservationTable

!new ItemOrder('ioBanq60_1')
!ioBanq60_1.time := Time('19:45')
!insert (banq60, ioBanq60_1) into ReservationItemOrdered
!insert (ioBanq60_1, miSeafoodStew35) into ItemOrderMenuItem

!new ItemOrder('ioBanq60_2')
!ioBanq60_2.time := Time('20:05')
!insert (banq60, ioBanq60_2) into ReservationItemOrdered
!insert (ioBanq60_2, miSparklingCider35) into ItemOrderMenuItem

!new DietaryRequirement('dietReq35')
!dietReq35.diet := #Kosher

!new ReportedAllergy('repAlg35')
!repAlg35.allergen := #Seafood
```
## Generation 27 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 210 | 0.00% |
| Multiplicities Errors | 0 | 42 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 14 | 0.00% |
| Phones | 0 | 14 | 0.00% |

# Generation 28
```
!new Restaurant('rest36')
!rest36.name := 'Desert Caravan Kitchen'

!new Owner('own103')
!own103.name := 'Farah El-Masri'
!own103.percentageShares := 50

!new Owner('own104')
!own104.name := 'Jonas Lind'
!own104.percentageShares := 30

!new Owner('own105')
!own105.name := 'Priya Kapoor'
!own105.percentageShares := 20

!insert (rest36, own103) into RestaurantOwner
!insert (rest36, own104) into RestaurantOwner
!insert (rest36, own105) into RestaurantOwner

!new Manager('mgr11')
!mgr11.name := 'Hugo Bernard'
!mgr11.dateOfBirth := Date('1980-05-06')
!mgr11.phoneNumber := '555-4400'

!new HeadWaiter('hw80')
!hw80.name := 'Nadia Osman'
!hw80.dateOfBirth := Date('1987-09-29')
!hw80.phoneNumber := '555-4401'

!new Waiter('w110')
!w110.name := 'Elena Petrova'
!w110.dateOfBirth := Date('1999-02-15')
!w110.phoneNumber := '555-4402'
!w110.spokenLanguage := #German

!new Waiter('w111')
!w111.name := 'Mateo Gutierrez'
!w111.dateOfBirth := Date('1996-08-08')
!w111.phoneNumber := '555-4403'
!w111.spokenLanguage := #Spanish

!insert (hw80, w110) into HeadWaiterWaiter
!insert (hw80, w111) into HeadWaiterWaiter

!new Chef('chef90')
!chef90.name := 'Samira Haddad'
!chef90.dateOfBirth := Date('1976-11-04')
!chef90.phoneNumber := '555-4410'

!new Chef('chef91')
!chef91.name := 'Luca Ferretti'
!chef91.dateOfBirth := Date('1983-03-12')
!chef91.phoneNumber := '555-4411'

!new Cook('cook110')
!cook110.name := 'Owen Clarke'
!cook110.dateOfBirth := Date('1991-06-19')
!cook110.phoneNumber := '555-4412'
!cook110.yearsOfExperience := 7

!new Cook('cook111')
!cook111.name := 'Mina Yildiz'
!cook111.dateOfBirth := Date('1998-01-23')
!cook111.phoneNumber := '555-4413'
!cook111.yearsOfExperience := 2

!new Cook('cook112')
!cook112.name := 'Tomas Novak'
!cook112.dateOfBirth := Date('1988-12-30')
!cook112.phoneNumber := '555-4414'
!cook112.yearsOfExperience := 12

!insert (chef90, cook110) into ChefCook
!insert (chef90, cook111) into ChefCook
!insert (chef91, cook112) into ChefCook

!new Allergen('alg36Gluten')
!alg36Gluten.type := #Gluten
!new Allergen('alg36Nuts')
!alg36Nuts.type := #Nuts
!new Allergen('alg36Seafood')
!alg36Seafood.type := #Seafood
!new Allergen('alg36Lactose')
!alg36Lactose.type := #Lactose

!new FoodItem('fiChickpeas36')
!fiChickpeas36.number := 3601
!fiChickpeas36.description := 'Cooked chickpeas'
!fiChickpeas36.purchaseFlag := true
!fiChickpeas36.unit := #Pound

!new FoodItem('fiPita36')
!fiPita36.number := 3602
!fiPita36.description := 'Pita bread'
!fiPita36.purchaseFlag := true
!fiPita36.unit := #Dozen

!new FoodItem('fiLamb36')
!fiLamb36.number := 3603
!fiLamb36.description := 'Lamb shoulder'
!fiLamb36.purchaseFlag := true
!fiLamb36.unit := #Pound

!new FoodItem('fiPistachios36')
!fiPistachios36.number := 3604
!fiPistachios36.description := 'Pistachios'
!fiPistachios36.purchaseFlag := true
!fiPistachios36.unit := #Ounce

!new FoodItem('fiPhyllo36')
!fiPhyllo36.number := 3605
!fiPhyllo36.description := 'Phyllo sheets'
!fiPhyllo36.purchaseFlag := true
!fiPhyllo36.unit := #Sheet

!new FoodItem('fiYogurt36')
!fiYogurt36.number := 3606
!fiYogurt36.description := 'Yogurt'
!fiYogurt36.purchaseFlag := true
!fiYogurt36.unit := #Ounce

!new FoodItem('fiMint36')
!fiMint36.number := 3607
!fiMint36.description := 'Fresh mint'
!fiMint36.purchaseFlag := true
!fiMint36.unit := #Gram

!new FoodItem('fiShrimp36')
!fiShrimp36.number := 3608
!fiShrimp36.description := 'Shrimp'
!fiShrimp36.purchaseFlag := true
!fiShrimp36.unit := #Pound

!insert (fiPita36, alg36Gluten) into FoodItemAllergen
!insert (fiPhyllo36, alg36Gluten) into FoodItemAllergen
!insert (fiPistachios36, alg36Nuts) into FoodItemAllergen
!insert (fiYogurt36, alg36Lactose) into FoodItemAllergen
!insert (fiShrimp36, alg36Seafood) into FoodItemAllergen

!new MenuItem('miHummus36')
!miHummus36.description := 'Hummus with warm pita'
!miHummus36.prepTime := 7.0
!miHummus36.classification := #Apetizer

!new MenuItem('miLambTagine36')
!miLambTagine36.description := 'Slow-cooked lamb tagine'
!miLambTagine36.prepTime := 28.0
!miLambTagine36.classification := #Main

!new MenuItem('miShrimpSkewers36')
!miShrimpSkewers36.description := 'Harissa shrimp skewers'
!miShrimpSkewers36.prepTime := 12.0
!miShrimpSkewers36.classification := #Apetizer

!new MenuItem('miPistachioBaklava36')
!miPistachioBaklava36.description := 'Pistachio baklava'
!miPistachioBaklava36.prepTime := 11.0
!miPistachioBaklava36.classification := #Dessert

!new MenuItem('miMintLassi36')
!miMintLassi36.description := 'Mint lassi'
!miMintLassi36.prepTime := 2.0
!miMintLassi36.classification := #Beverage

!insert (miHummus36, chef90) into MenuItemChef
!insert (miLambTagine36, chef90) into MenuItemChef
!insert (miShrimpSkewers36, chef91) into MenuItemChef
!insert (miPistachioBaklava36, chef91) into MenuItemChef
!insert (miMintLassi36, chef90) into MenuItemChef

!insert (miHummus36, fiChickpeas36) into MenuItemFoodItem
!insert (miHummus36, fiPita36) into MenuItemFoodItem

!insert (miLambTagine36, fiLamb36) into MenuItemFoodItem

!insert (miShrimpSkewers36, fiShrimp36) into MenuItemFoodItem

!insert (miPistachioBaklava36, fiPhyllo36) into MenuItemFoodItem
!insert (miPistachioBaklava36, fiPistachios36) into MenuItemFoodItem

!insert (miMintLassi36, fiYogurt36) into MenuItemFoodItem
!insert (miMintLassi36, fiMint36) into MenuItemFoodItem

!new RegularCustomer('cust70')
!cust70.name := 'Anya Vogel'
!cust70.prefferedLanguage := #German

!new Banquet('banq70')
!banq70.time := Time('18:00')
!banq70.date := Date('2028-05-12')
!banq70.numberPeople := 26
!banq70.name := 'Desert Film Festival'
!banq70.phoneNumber := '555-4450'
!banq70.number := 95001
!banq70.groupName := 'Volunteer Appreciation Dinner'
!banq70.paymentMethod := #Cash
!banq70.busService := true

!insert (rest36, banq70) into RestaurantReservation
!insert (banq70, w110) into ReservationWaiter
!insert (banq70, w111) into ReservationWaiter

!new BusDriver('bd70')
!bd70.name := 'Colin Bates'
!bd70.dateOfBirth := Date('1971-02-02')
!bd70.phoneNumber := '555-4460'
!bd70.driverLicenseNr := 'D-7022199'
!insert (banq70, bd70) into BanquetBusDriver

!new Table('t701')
!t701.number := 701
!t701.description := 'Banquet table A'
!t701.capacity := 10
!new Table('t702')
!t702.number := 702
!t702.description := 'Banquet table B'
!t702.capacity := 8
!new Table('t703')
!t703.number := 703
!t703.description := 'Banquet table C'
!t703.capacity := 10

!insert (banq70, t701) into ReservationTable
!insert (banq70, t702) into ReservationTable
!insert (banq70, t703) into ReservationTable

!new ItemOrder('ioBanq70_1')
!ioBanq70_1.time := Time('18:20')
!insert (banq70, ioBanq70_1) into ReservationItemOrdered
!insert (ioBanq70_1, miHummus36) into ItemOrderMenuItem

!new ItemOrder('ioBanq70_2')
!ioBanq70_2.time := Time('18:45')
!insert (banq70, ioBanq70_2) into ReservationItemOrdered
!insert (ioBanq70_2, miLambTagine36) into ItemOrderMenuItem

!new ItemOrder('ioBanq70_3')
!ioBanq70_3.time := Time('19:05')
!insert (banq70, ioBanq70_3) into ReservationItemOrdered
!insert (ioBanq70_3, miPistachioBaklava36) into ItemOrderMenuItem

!new Individual('res72')
!res72.time := Time('20:15')
!res72.date := Date('2028-05-12')
!res72.numberPeople := 4
!res72.name := 'Anya Vogel'
!res72.phoneNumber := '555-4451'
!res72.number := 95002
!res72.seating := #Inside
!res72.smoking := #NonSmoking

!insert (rest36, res72) into RestaurantReservation
!insert (res72, cust70) into ReservationCustomer
!insert (res72, w110) into ReservationWaiter

!new Table('t110')
!t110.number := 110
!t110.description := 'Inside four-top near lantern wall'
!t110.capacity := 4
!insert (res72, t110) into ReservationTable

!new ItemOrder('ioRes72_1')
!ioRes72_1.time := Time('20:30')
!insert (res72, ioRes72_1) into ReservationItemOrdered
!insert (ioRes72_1, miShrimpSkewers36) into ItemOrderMenuItem

!new ItemOrder('ioRes72_2')
!ioRes72_2.time := Time('20:55')
!insert (res72, ioRes72_2) into ReservationItemOrdered
!insert (ioRes72_2, miMintLassi36) into ItemOrderMenuItem

!new Individual('res73')
!res73.time := Time('21:00')
!res73.date := Date('2028-05-13')
!res73.numberPeople := 2
!res73.name := 'Unlisted Reservation'
!res73.phoneNumber := '555-4452'
!res73.number := 95003
!res73.seating := #Patio
!res73.smoking := #Smoking

!insert (res73, w111) into ReservationWaiter

!new Table('t111')
!t111.number := 111
!t111.description := 'Patio two-top by fountain'
!t111.capacity := 2
!insert (res73, t111) into ReservationTable

!new DietaryRequirement('dietReq36')
!dietReq36.diet := #Halal

!new ReportedAllergy('repAlg36')
!repAlg36.allergen := #Nuts
```
## Generation 28 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 239 | 0.00% |
| Multiplicities Errors | 0 | 49 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 13 | 0.00% |
| Phones | 0 | 13 | 0.00% |

# Generation 29
```
!new Restaurant('rest37')
!rest37.name := 'Forest Canopy Eatery'

!new Owner('own106')
!own106.name := 'Helen Brooks'
!own106.percentageShares := 40
!new Owner('own107')
!own107.name := 'Rashid Karim'
!own107.percentageShares := 30
!new Owner('own108')
!own108.name := 'Bianca Rossi'
!own108.percentageShares := 20
!new Owner('own109')
!own109.name := 'Sven Adler'
!own109.percentageShares := 10

!insert (rest37, own106) into RestaurantOwner
!insert (rest37, own107) into RestaurantOwner
!insert (rest37, own108) into RestaurantOwner
!insert (rest37, own109) into RestaurantOwner

!new HeadWaiter('hw81')
!hw81.name := 'Mason Price'
!hw81.dateOfBirth := Date('1985-04-03')
!hw81.phoneNumber := '555-8609'

!new Waiter('w112')
!w112.name := 'Claudia Stein'
!w112.dateOfBirth := Date('1997-03-28')
!w112.phoneNumber := '555-8610'
!w112.spokenLanguage := #German

!new Waiter('w113')
!w113.name := 'Andres Vega'
!w113.dateOfBirth := Date('1995-09-15')
!w113.phoneNumber := '555-8611'
!w113.spokenLanguage := #Spanish

!new Waiter('w114')
!w114.name := 'Emma Collins'
!w114.dateOfBirth := Date('2000-01-09')
!w114.phoneNumber := '555-8612'
!w114.spokenLanguage := #English

!insert (hw81, w112) into HeadWaiterWaiter
!insert (hw81, w113) into HeadWaiterWaiter
!insert (hw81, w114) into HeadWaiterWaiter

!new Chef('chef92')
!chef92.name := 'Nikolai Petrov'
!chef92.dateOfBirth := Date('1976-12-18')
!chef92.phoneNumber := '555-8620'

!new Cook('cook113')
!cook113.name := 'Sana Noor'
!cook113.dateOfBirth := Date('1992-05-14')
!cook113.phoneNumber := '555-8621'
!cook113.yearsOfExperience := 8

!new Cook('cook114')
!cook114.name := 'Tom Becker'
!cook114.dateOfBirth := Date('1999-11-21')
!cook114.phoneNumber := '555-8622'
!cook114.yearsOfExperience := 1

!new Cook('cook115')
!cook115.name := 'Lucia Marino'
!cook115.dateOfBirth := Date('1989-08-07')
!cook115.phoneNumber := '555-8623'
!cook115.yearsOfExperience := 12

!insert (chef92, cook113) into ChefCook
!insert (chef92, cook114) into ChefCook
!insert (chef92, cook115) into ChefCook

!new Allergen('alg37Gluten')
!alg37Gluten.type := #Gluten
!new Allergen('alg37Nuts')
!alg37Nuts.type := #Nuts
!new Allergen('alg37Lactose')
!alg37Lactose.type := #Lactose

!new FoodItem('fiBreadFlour37')
!fiBreadFlour37.number := 3701
!fiBreadFlour37.description := 'Bread flour'
!fiBreadFlour37.purchaseFlag := true
!fiBreadFlour37.unit := #Pound

!new FoodItem('fiButter37')
!fiButter37.number := 3702
!fiButter37.description := 'Butter'
!fiButter37.purchaseFlag := true
!fiButter37.unit := #Ounce

!new FoodItem('fiHazelnuts37')
!fiHazelnuts37.number := 3703
!fiHazelnuts37.description := 'Hazelnuts'
!fiHazelnuts37.purchaseFlag := true
!fiHazelnuts37.unit := #Ounce

!new FoodItem('fiHerbalTea37')
!fiHerbalTea37.number := 3704
!fiHerbalTea37.description := 'Herbal tea blend'
!fiHerbalTea37.purchaseFlag := true
!fiHerbalTea37.unit := #Gram

!new FoodItem('fiBerries37')
!fiBerries37.number := 3705
!fiBerries37.description := 'Mixed berries'
!fiBerries37.purchaseFlag := true
!fiBerries37.unit := #Pound

!insert (fiBreadFlour37, alg37Gluten) into FoodItemAllergen
!insert (fiButter37, alg37Lactose) into FoodItemAllergen
!insert (fiHazelnuts37, alg37Nuts) into FoodItemAllergen

!new MenuItem('miForestBread37')
!miForestBread37.description := 'Warm bread with butter'
!miForestBread37.prepTime := 6.0
!miForestBread37.classification := #Apetizer

!new MenuItem('miHazelnutTart37')
!miHazelnutTart37.description := 'Hazelnut berry tart'
!miHazelnutTart37.prepTime := 11.0
!miHazelnutTart37.classification := #Dessert

!new MenuItem('miHerbalTea37')
!miHerbalTea37.description := 'Hot herbal tea'
!miHerbalTea37.prepTime := 2.0
!miHerbalTea37.classification := #Beverage

!insert (miForestBread37, chef92) into MenuItemChef
!insert (miHazelnutTart37, chef92) into MenuItemChef
!insert (miHerbalTea37, chef92) into MenuItemChef

!insert (miForestBread37, fiBreadFlour37) into MenuItemFoodItem
!insert (miForestBread37, fiButter37) into MenuItemFoodItem

!insert (miHazelnutTart37, fiBreadFlour37) into MenuItemFoodItem
!insert (miHazelnutTart37, fiButter37) into MenuItemFoodItem
!insert (miHazelnutTart37, fiHazelnuts37) into MenuItemFoodItem
!insert (miHazelnutTart37, fiBerries37) into MenuItemFoodItem

!insert (miHerbalTea37, fiHerbalTea37) into MenuItemFoodItem

!new RegularCustomer('cust70b')
!cust70b.name := 'Nora Jensen'
!cust70b.prefferedLanguage := #English

!new Individual('res74')
!res74.time := Time('17:10')
!res74.date := Date('2028-06-02')
!res74.numberPeople := 20
!res74.name := 'Community Photography Group'
!res74.phoneNumber := '555-8700'
!res74.number := 97001
!res74.seating := #Patio
!res74.smoking := #NonSmoking

!insert (rest37, res74) into RestaurantReservation
!insert (res74, w113) into ReservationWaiter
!insert (res74, w114) into ReservationWaiter

!new Table('tRes74A')
!tRes74A.number := 201
!tRes74A.description := 'Patio table A'
!tRes74A.capacity := 8
!new Table('tRes74B')
!tRes74B.number := 202
!tRes74B.description := 'Patio table B'
!tRes74B.capacity := 8
!new Table('tRes74C')
!tRes74C.number := 203
!tRes74C.description := 'Patio table C'
!tRes74C.capacity := 6

!insert (res74, tRes74A) into ReservationTable
!insert (res74, tRes74B) into ReservationTable
!insert (res74, tRes74C) into ReservationTable

!new ItemOrder('ioRes74_1')
!ioRes74_1.time := Time('17:25')
!insert (res74, ioRes74_1) into ReservationItemOrdered
!insert (ioRes74_1, miForestBread37) into ItemOrderMenuItem

!new ItemOrder('ioRes74_2')
!ioRes74_2.time := Time('17:40')
!insert (res74, ioRes74_2) into ReservationItemOrdered
!insert (ioRes74_2, miHerbalTea37) into ItemOrderMenuItem

!new ItemOrder('ioRes74_3')
!ioRes74_3.time := Time('18:05')
!insert (res74, ioRes74_3) into ReservationItemOrdered
!insert (ioRes74_3, miHazelnutTart37) into ItemOrderMenuItem

!new BusDriver('bd71')
!bd71.name := 'Paige Turner'
!bd71.dateOfBirth := Date('1970-02-10')
!bd71.phoneNumber := '555-8710'
!bd71.driverLicenseNr := 'D-7102034'

!new BusDriver('bd72')
!bd72.name := 'Naveen Sharma'
!bd72.dateOfBirth := Date('1976-09-22')
!bd72.phoneNumber := '555-8711'
!bd72.driverLicenseNr := 'D-9921106'

!new Banquet('banq72')
!banq72.time := Time('12:15')
!banq72.date := Date('2028-06-03')
!banq72.numberPeople := 9
!banq72.name := 'Botanical Society Committee'
!banq72.phoneNumber := '555-8720'
!banq72.number := 98001
!banq72.groupName := 'Spring Planning Lunch'
!banq72.paymentMethod := #CreditCard
!banq72.busService := true

!insert (rest37, banq72) into RestaurantReservation
!insert (banq72, w112) into ReservationWaiter
!insert (banq72, bd71) into BanquetBusDriver
!insert (banq72, bd72) into BanquetBusDriver

!new Table('tBanq72A')
!tBanq72A.number := 301
!tBanq72A.description := 'Indoor round table'
!tBanq72A.capacity := 10
!insert (banq72, tBanq72A) into ReservationTable

!new ItemOrder('ioBanq72_1')
!ioBanq72_1.time := Time('12:30')
!insert (banq72, ioBanq72_1) into ReservationItemOrdered
!insert (ioBanq72_1, miForestBread37) into ItemOrderMenuItem

!new ItemOrder('ioBanq72_2')
!ioBanq72_2.time := Time('12:55')
!insert (banq72, ioBanq72_2) into ReservationItemOrdered
!insert (ioBanq72_2, miHerbalTea37) into ItemOrderMenuItem

!new DietaryRequirement('dietReq37')
!dietReq37.diet := #Vegetarian

!new ReportedAllergy('repAlg37')
!repAlg37.allergen := #Nuts
```
## Generation 29 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 201 | 0.00% |
| Multiplicities Errors | 0 | 44 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 12 | 0.00% |
| Phones | 0 | 12 | 0.00% |

# Generation 30
```
!new Restaurant('rest38')
!rest38.name := 'City Spice Canteen'

!new Restaurant('rest39')
!rest39.name := 'Arcade Lunchroom'

!new Owner('own110')
!own110.name := 'Samantha Reed'
!own110.percentageShares := 50

!new Owner('own111')
!own111.name := 'Yusuf Demir'
!own111.percentageShares := 30

!new Owner('own112')
!own112.name := 'Paula Nguyen'
!own112.percentageShares := 20

!new Owner('own113')
!own113.name := 'Brent Holman'
!own113.percentageShares := 100

!insert (rest38, own110) into RestaurantOwner
!insert (rest38, own111) into RestaurantOwner
!insert (rest38, own112) into RestaurantOwner

!insert (rest39, own113) into RestaurantOwner

!new HeadWaiter('hw90')
!hw90.name := 'Damon Ellis'
!hw90.dateOfBirth := Date('1988-09-09')
!hw90.phoneNumber := '555-3000'

!new Waiter('w120')
!w120.name := 'Rocio Perez'
!w120.dateOfBirth := Date('1999-05-12')
!w120.phoneNumber := '555-3001'
!w120.spokenLanguage := #Spanish

!new Waiter('w121')
!w121.name := 'Marlon Becker'
!w121.dateOfBirth := Date('1994-11-21')
!w121.phoneNumber := '555-3002'
!w121.spokenLanguage := #German

!insert (hw90, w120) into HeadWaiterWaiter
!insert (hw90, w121) into HeadWaiterWaiter

!new Chef('chef100')
!chef100.name := 'Ivy Chen'
!chef100.dateOfBirth := Date('1979-02-18')
!chef100.phoneNumber := '555-3010'

!new Chef('chef101')
!chef101.name := 'Matteo Galli'
!chef101.dateOfBirth := Date('1983-07-04')
!chef101.phoneNumber := '555-3011'

!new Cook('cook120')
!cook120.name := 'Tariq Abbas'
!cook120.dateOfBirth := Date('1990-03-03')
!cook120.phoneNumber := '555-3020'
!cook120.yearsOfExperience := 9

!new Cook('cook121')
!cook121.name := 'Lena Hoffmann'
!cook121.dateOfBirth := Date('1998-12-14')
!cook121.phoneNumber := '555-3021'
!cook121.yearsOfExperience := 1

!new Cook('cook122')
!cook122.name := 'Daniela Costa'
!cook122.dateOfBirth := Date('1992-06-28')
!cook122.phoneNumber := '555-3022'
!cook122.yearsOfExperience := 6

!insert (chef100, cook120) into ChefCook
!insert (chef100, cook121) into ChefCook
!insert (chef101, cook122) into ChefCook

!new Allergen('alg38Gluten')
!alg38Gluten.type := #Gluten

!new Allergen('alg38Seafood')
!alg38Seafood.type := #Seafood

!new Allergen('alg38Nuts')
!alg38Nuts.type := #Nuts

!new FoodItem('fiShrimp38')
!fiShrimp38.number := 3801
!fiShrimp38.description := 'Shrimp'
!fiShrimp38.purchaseFlag := true
!fiShrimp38.unit := #Pound

!new FoodItem('fiPeanuts38')
!fiPeanuts38.number := 3802
!fiPeanuts38.description := 'Crushed peanuts'
!fiPeanuts38.purchaseFlag := true
!fiPeanuts38.unit := #Ounce

!new FoodItem('fiSoySauce38')
!fiSoySauce38.number := 3803
!fiSoySauce38.description := 'Soy sauce'
!fiSoySauce38.purchaseFlag := true
!fiSoySauce38.unit := #Ounce

!new FoodItem('fiRice38')
!fiRice38.number := 3804
!fiRice38.description := 'Jasmine rice'
!fiRice38.purchaseFlag := true
!fiRice38.unit := #Pound

!new FoodItem('fiLimes38')
!fiLimes38.number := 3805
!fiLimes38.description := 'Limes'
!fiLimes38.purchaseFlag := true
!fiLimes38.unit := #Dozen

!new FoodItem('fiSodaWater38')
!fiSodaWater38.number := 3806
!fiSodaWater38.description := 'Soda water'
!fiSodaWater38.purchaseFlag := true
!fiSodaWater38.unit := #Ounce

!insert (fiShrimp38, alg38Seafood) into FoodItemAllergen
!insert (fiPeanuts38, alg38Nuts) into FoodItemAllergen
!insert (fiSoySauce38, alg38Gluten) into FoodItemAllergen

!new MenuItem('miShrimpSatay38')
!miShrimpSatay38.description := 'Shrimp satay with peanut sauce'
!miShrimpSatay38.prepTime := 12.0
!miShrimpSatay38.classification := #Apetizer

!new MenuItem('miSoyRiceBowl38')
!miSoyRiceBowl38.description := 'Rice bowl with soy glaze'
!miSoyRiceBowl38.prepTime := 9.0
!miSoyRiceBowl38.classification := #Main

!new MenuItem('miLimeSoda38')
!miLimeSoda38.description := 'Fresh lime soda'
!miLimeSoda38.prepTime := 2.0
!miLimeSoda38.classification := #Beverage

!new MenuItem('miPeanutCrumble38')
!miPeanutCrumble38.description := 'Sweet peanut crumble cup'
!miPeanutCrumble38.prepTime := 5.0
!miPeanutCrumble38.classification := #Dessert

!insert (miShrimpSatay38, chef100) into MenuItemChef
!insert (miSoyRiceBowl38, chef100) into MenuItemChef
!insert (miLimeSoda38, chef101) into MenuItemChef
!insert (miPeanutCrumble38, chef101) into MenuItemChef

!insert (miShrimpSatay38, fiShrimp38) into MenuItemFoodItem
!insert (miShrimpSatay38, fiPeanuts38) into MenuItemFoodItem
!insert (miShrimpSatay38, fiSoySauce38) into MenuItemFoodItem

!insert (miSoyRiceBowl38, fiRice38) into MenuItemFoodItem
!insert (miSoyRiceBowl38, fiSoySauce38) into MenuItemFoodItem

!insert (miLimeSoda38, fiLimes38) into MenuItemFoodItem
!insert (miLimeSoda38, fiSodaWater38) into MenuItemFoodItem

!insert (miPeanutCrumble38, fiPeanuts38) into MenuItemFoodItem

!new Individual('res80')
!res80.time := Time('11:55')
!res80.date := Date('2028-07-19')
!res80.numberPeople := 1
!res80.name := 'Counter Seat Guest'
!res80.phoneNumber := '555-3030'
!res80.number := 88001
!res80.seating := #Inside
!res80.smoking := #NonSmoking

!insert (rest38, res80) into RestaurantReservation
!insert (res80, w120) into ReservationWaiter

!new Table('tRes80A')
!tRes80A.number := 1
!tRes80A.description := 'Counter seat section'
!tRes80A.capacity := 2
!insert (res80, tRes80A) into ReservationTable

!new ItemOrder('ioRes80_1')
!ioRes80_1.time := Time('12:05')
!insert (res80, ioRes80_1) into ReservationItemOrdered
!insert (ioRes80_1, miLimeSoda38) into ItemOrderMenuItem

!new ItemOrder('ioRes80_2')
!ioRes80_2.time := Time('12:12')
!insert (res80, ioRes80_2) into ReservationItemOrdered
!insert (ioRes80_2, miSoyRiceBowl38) into ItemOrderMenuItem

!new BusDriver('bd80')
!bd80.name := 'Hector Velez'
!bd80.dateOfBirth := Date('1970-01-10')
!bd80.phoneNumber := '555-3040'
!bd80.driverLicenseNr := 'D-3008182'

!new Banquet('banq80')
!banq80.time := Time('15:30')
!banq80.date := Date('2028-07-19')
!banq80.numberPeople := 9
!banq80.name := 'Esports Team Lunch'
!banq80.phoneNumber := '555-3031'
!banq80.number := 89001
!banq80.groupName := 'Regional Qualifiers'
!banq80.paymentMethod := #CreditCard
!banq80.busService := true

!insert (rest38, banq80) into RestaurantReservation
!insert (banq80, w120) into ReservationWaiter
!insert (banq80, w121) into ReservationWaiter
!insert (banq80, bd80) into BanquetBusDriver

!new Table('tBanq80A')
!tBanq80A.number := 40
!tBanq80A.description := 'Group table near stage screen'
!tBanq80A.capacity := 10
!insert (banq80, tBanq80A) into ReservationTable

!new ItemOrder('ioBanq80_1')
!ioBanq80_1.time := Time('15:45')
!insert (banq80, ioBanq80_1) into ReservationItemOrdered
!insert (ioBanq80_1, miShrimpSatay38) into ItemOrderMenuItem

!new ItemOrder('ioBanq80_2')
!ioBanq80_2.time := Time('16:05')
!insert (banq80, ioBanq80_2) into ReservationItemOrdered
!insert (ioBanq80_2, miSoyRiceBowl38) into ItemOrderMenuItem

!new ItemOrder('ioBanq80_3')
!ioBanq80_3.time := Time('16:20')
!insert (banq80, ioBanq80_3) into ReservationItemOrdered
!insert (ioBanq80_3, miPeanutCrumble38) into ItemOrderMenuItem

!new DietaryRequirement('dietReq80')
!dietReq80.diet := #Vegan

!new ReportedAllergy('repAlg80')
!repAlg80.allergen := #Gluten
```
## Generation 30 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 193 | 0.00% |
| Multiplicities Errors | 0 | 42 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 11 | 0.00% |
| Phones | 0 | 11 | 0.00% |

# Summary for all generations
| Summary | Value | 
|---|---| 
| Model | GPT_5_2 | 
| Type | Simple | 
| System | restaurant | 
| Number of generations | 30 | 

| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 6944 | 0.00% |
| Multiplicities Errors | 0 | 1488 | 0.00% |
| Invariants Errors | 0 | 120 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 395 | 0.00% |
| Phones | 0 | 395 | 0.00% |

