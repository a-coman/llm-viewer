# Generation 1
## Category baseline
```
!new Restaurant('restaurant5')
!restaurant5.name := 'Le Soleil'

!new Owner('owner9')
!owner9.name := 'Jacques Dubois'
!owner9.percentageShares := 60

!new Owner('owner10')
!owner10.name := 'Marie Martin'
!owner10.percentageShares := 40

!insert (restaurant5, owner9) into RestaurantOwner
!insert (restaurant5, owner10) into RestaurantOwner

!new Table('table11')
!table11.number := 1
!table11.description := 'Near the window, offering a view of the garden.'
!table11.capacity := 4

!new Table('table12')
!table12.number := 2
!table12.description := 'Cozy corner table.'
!table12.capacity := 2

!new Table('table13')
!table13.number := 3
!table13.description := 'Spacious outdoor table on the patio.'
!table13.capacity := 6

!new Table('table14')
!table14.number := 4
!table14.description := 'Elegant dining hall table.'
!table14.capacity := 10

!new RegularCustomer('customer3')
!customer3.name := 'Giuseppe Rossi'
!customer3.prefferedLanguage := #Italian

!new RegularCustomer('customer4')
!customer4.name := 'Anna Thomson'
!customer4.prefferedLanguage := #English

!new Individual('individualReservation1')
!individualReservation1.date := Date('2023-10-15')
!individualReservation1.time := Time('19:00')
!individualReservation1.numberPeople := 1
!individualReservation1.name := 'Giuseppe Rossi'
!individualReservation1.phoneNumber := '1212121212'  -- Arbitrary phone number
!individualReservation1.seating := #Patio
!individualReservation1.smoking := #NonSmoking
!individualReservation1.number := 1

!insert (restaurant5, individualReservation1) into RestaurantReservation
!insert (individualReservation1, customer3) into ReservationCustomer
!insert (individualReservation1, table13) into ReservationTable

!new Banquet('banquet4')
!banquet4.date := Date('2023-10-15')
!banquet4.time := Time('20:00')
!banquet4.groupName := 'Anna\'s Birthday'
!banquet4.numberPeople := 20
!banquet4.paymentMethod := #CreditCard

!insert (restaurant5, banquet4) into RestaurantReservation
!insert (banquet4, customer4) into ReservationCustomer
!insert (banquet4, table11) into ReservationTable
!insert (banquet4, table12) into ReservationTable
!insert (banquet4, table13) into ReservationTable
!insert (banquet4, table14) into ReservationTable  -- Ensure sufficient capacity

!new Waiter('waiter7')
!waiter7.name := 'Sophie Leclerc'
!waiter7.dateOfBirth := Date('1990-01-01')      -- Arbitrary date of birth
!waiter7.phoneNumber := '2323232323'            -- Arbitrary phone number
!waiter7.spokenLanguage := #English

!new Waiter('waiter8')
!waiter8.name := 'Pierre Monet'
!waiter8.dateOfBirth := Date('1988-01-01')      -- Arbitrary date of birth
!waiter8.phoneNumber := '3434343434'            -- Arbitrary phone number
!waiter8.spokenLanguage := #French

!insert (individualReservation1, waiter7) into ReservationWaiter
!insert (banquet4, waiter7) into ReservationWaiter
!insert (banquet4, waiter8) into ReservationWaiter

!new HeadWaiter('headwaiter4')
!headwaiter4.name := 'Jean-Claude Bernard'
!headwaiter4.dateOfBirth := Date('1975-01-01')  -- Arbitrary date of birth
!headwaiter4.phoneNumber := '4545454545'        -- Arbitrary phone number

!insert (headwaiter4, waiter7) into HeadWaiterWaiter
!insert (headwaiter4, waiter8) into HeadWaiterWaiter

!new BusDriver('busdriver4')
!busdriver4.name := 'Thomas Dupont'

!insert (banquet4, busdriver4) into BanquetBusDriver

!new Chef('chef6')
!chef6.name := 'Martine Dubois'
!chef6.dateOfBirth := Date('1983-01-01')        -- Arbitrary date of birth
!chef6.phoneNumber := '5656565656'              -- Arbitrary phone number

!new Cook('cook7')
!cook7.name := 'Alain Lemaire'
!cook7.dateOfBirth := Date('1990-01-01')        -- Arbitrary date of birth
!cook7.phoneNumber := '6767676767'              -- Arbitrary phone number
!cook7.yearsOfExperience := 4

!insert (chef6, cook7) into ChefCook

!new MenuItem('menuitem7')
!menuitem7.description := 'Classic Provençal stewed vegetable dish.'
!menuitem7.prepTime := 45.0
!menuitem7.classification := #Main

!insert (menuitem7, chef6) into MenuItemChef

!new FoodItem('fooditem11')
!fooditem11.number := 10
!fooditem11.description := 'Eggplant'
!fooditem11.purchaseFlag := true
!fooditem11.unit := #Pound

!new FoodItem('fooditem12')
!fooditem12.number := 11
!fooditem12.description := 'Zucchini'
!fooditem12.purchaseFlag := true
!fooditem12.unit := #Pound

!insert (menuitem7, fooditem11) into MenuItemFoodItem
!insert (menuitem7, fooditem12) into MenuItemFoodItem

!new MenuItem('menuitem8')
!menuitem8.description := 'Creamy custard topped with a caramelized sugar crust.'
!menuitem8.prepTime := 20.0
!menuitem8.classification := #Dessert

!insert (menuitem8, chef6) into MenuItemChef

!new FoodItem('fooditem13')
!fooditem13.number := 12
!fooditem13.description := 'Cream'
!fooditem13.purchaseFlag := true
!fooditem13.unit := #Ounce

!new FoodItem('fooditem14')
!fooditem14.number := 13
!fooditem14.description := 'Eggs'
!fooditem14.purchaseFlag := true
!fooditem14.unit := #Ounce

!insert (menuitem8, fooditem13) into MenuItemFoodItem
!insert (menuitem8, fooditem14) into MenuItemFoodItem

!new Allergen('allergen6')
!allergen6.type := #Lactose

!insert (fooditem13, allergen6) into FoodItemAllergen
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 1 | 125 | 0.80% |
| Multiplicities Errors | 1 | 25 | 4.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Syntax Errors | 
|---| 
```
<input>:1:0: generation of expression `#French' failed, with following error:
```

| Multiplicities Errors | 
|---| 
```
Multiplicity constraint violation in association `ReservationTable':
  Object `table13' of class `Table' is connected to 2 objects of class `Reservation'
  at association end `reservation' but the multiplicity is specified as `1'.
```

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 7 | 0.00% |
| Phones | 0 | 6 | 0.00% |

## Category boundary
```
!new Restaurant('restaurant2')
!restaurant2.name := 'Limit Delights'

!new Owner('owner3')
!owner3.name := 'Emma Smith'
!owner3.percentageShares := 1

!new Owner('owner4')
!owner4.name := 'Julian Tan'
!owner4.percentageShares := 99

!insert (restaurant2, owner3) into RestaurantOwner
!insert (restaurant2, owner4) into RestaurantOwner

!new RegularCustomer('customer1')
!customer1.name := 'Carlos Lopez'
!customer1.prefferedLanguage := #Spanish

!new HeadWaiter('headwaiter1')
!headwaiter1.name := 'Greta Müller'
!headwaiter1.dateOfBirth := Date('1985-01-01')  -- Arbitrary date of birth
!headwaiter1.phoneNumber := '1234567890'        -- Arbitrary phone number

!new Waiter('waiter1')
!waiter1.name := 'Luis Fernandez'
!waiter1.dateOfBirth := Date('1990-01-01')       -- Arbitrary date of birth
!waiter1.phoneNumber := '0987654321'             -- Arbitrary phone number
!waiter1.spokenLanguage := #English

!insert (headwaiter1, waiter1) into HeadWaiterWaiter

!new Chef('chef1')
!chef1.name := 'Marco Ricci'
!chef1.dateOfBirth := Date('1980-01-01')         -- Arbitrary date of birth
!chef1.phoneNumber := '1122334455'               -- Arbitrary phone number

!new Cook('cook1')
!cook1.name := 'Anita Bose'
!cook1.dateOfBirth := Date('1995-01-01')         -- Arbitrary date of birth
!cook1.phoneNumber := '5566778899'               -- Arbitrary phone number
!cook1.yearsOfExperience := 0

!insert (chef1, cook1) into ChefCook

!new Table('table5')
!table5.number := 1
!table5.description := 'Corner table near the window'
!table5.capacity := 1

!new MenuItem('menuitem1')
!menuitem1.description := 'A fresh tomato and mozzarella salad.'
!menuitem1.prepTime := 10.0
!menuitem1.classification := #Apetizer

!insert (menuitem1, chef1) into MenuItemChef

!new FoodItem('fooditem1')
!fooditem1.number := 1
!fooditem1.description := 'Mozzarella Cheese'
!fooditem1.purchaseFlag := true
!fooditem1.unit := #Pound

!insert (menuitem1, fooditem1) into MenuItemFoodItem

!new Allergen('allergen1')
!allergen1.type := #Lactose

!insert (fooditem1, allergen1) into FoodItemAllergen

!new Individual('reservation1')
!reservation1.time := Time('18:00')
!reservation1.date := Date('2023-11-01')
!reservation1.numberPeople := 1
!reservation1.name := 'Carlos Lopez'
!reservation1.phoneNumber := '3344556677'         -- Arbitrary phone number
!reservation1.number := 1
!reservation1.seating := #Inside
!reservation1.smoking := #NonSmoking

!insert (restaurant2, reservation1) into RestaurantReservation
!insert (reservation1, customer1) into ReservationCustomer
!insert (reservation1, waiter1) into ReservationWaiter
!insert (reservation1, table5) into ReservationTable

!new ItemOrder('itemorder1')
!itemorder1.time := Time('18:10')

!insert (reservation1, itemorder1) into ReservationItemOrdered
!insert (itemorder1, menuitem1) into ItemOrderMenuItem
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 68 | 0.00% |
| Multiplicities Errors | 0 | 13 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 5 | 0.00% |
| Phones | 0 | 5 | 0.00% |

## Category complex
```
!new Restaurant('restaurant3')
!restaurant3.name := 'Global Bites'

!new Owner('owner5')
!owner5.name := 'Anna Leong'
!owner5.percentageShares := 60

!new Owner('owner6')
!owner6.name := 'Luis Gonzalez'
!owner6.percentageShares := 40

!insert (restaurant3, owner5) into RestaurantOwner
!insert (restaurant3, owner6) into RestaurantOwner

!new Chef('chef2')
!chef2.name := 'Giovanni Rossi'
!chef2.dateOfBirth := Date('1978-01-01')  -- Arbitrary date of birth
!chef2.phoneNumber := '1010101010'        -- Arbitrary phone number

!new Cook('cook2')
!cook2.name := 'Maria Elizondo'
!cook2.dateOfBirth := Date('1988-01-01')  -- Arbitrary date of birth
!cook2.phoneNumber := '2020202020'        -- Arbitrary phone number
!cook2.yearsOfExperience := 4

!new Cook('cook3')
!cook3.name := 'Chul Min'
!cook3.dateOfBirth := Date('1990-01-01')  -- Arbitrary date of birth
!cook3.phoneNumber := '3030303030'        -- Arbitrary phone number
!cook3.yearsOfExperience := 3

!insert (chef2, cook2) into ChefCook
!insert (chef2, cook3) into ChefCook

!new Banquet('banquet2')
!banquet2.date := Date('2023-10-15')
!banquet2.time := Time('19:30')
!banquet2.groupName := 'Tech Innovators - Annual Gala'
!banquet2.numberPeople := 18
!banquet2.paymentMethod := #CreditCard

!insert (restaurant3, banquet2) into RestaurantReservation

!new BusDriver('busdriver2')
!busdriver2.name := 'Gerhard Dietrich'

!insert (banquet2, busdriver2) into BanquetBusDriver

!new Table('table6')
!table6.number := 7
!table6.description := 'Near the stage'
!table6.capacity := 10

!new Table('table7')
!table7.number := 8
!table7.description := 'Next to bar'
!table7.capacity := 8

!insert (banquet2, table6) into ReservationTable
!insert (banquet2, table7) into ReservationTable

!new HeadWaiter('headwaiter2')
!headwaiter2.name := 'Aisha Karim'
!headwaiter2.dateOfBirth := Date('1980-01-01')  -- Arbitrary date of birth
!headwaiter2.phoneNumber := '4040404040'        -- Arbitrary phone number

!new Waiter('waiter2')
!waiter2.name := 'Mike Tan'
!waiter2.dateOfBirth := Date('1990-01-01')      -- Arbitrary date of birth
!waiter2.phoneNumber := '5050505050'            -- Arbitrary phone number

!new Waiter('waiter3')
!waiter3.name := 'Sofya Petrova'
!waiter3.dateOfBirth := Date('1992-01-01')      -- Arbitrary date of birth
!waiter3.phoneNumber := '6060606060'            -- Arbitrary phone number

!insert (headwaiter2, waiter2) into HeadWaiterWaiter
!insert (headwaiter2, waiter3) into HeadWaiterWaiter

!insert (banquet2, waiter2) into ReservationWaiter
!insert (banquet2, waiter3) into ReservationWaiter

!new Individual('reservation2')
!reservation2.date := Date('2023-10-15')
!reservation2.time := Time('20:00')
!reservation2.name := 'Sophie Müller'
!reservation2.phoneNumber := '7070707070'        -- Arbitrary phone number
!reservation2.number := 2
!reservation2.numberPeople := 2
!reservation2.seating := #Inside
!reservation2.smoking := #NonSmoking

!insert (restaurant3, reservation2) into RestaurantReservation

!new Table('table8')
!table8.number := 10
!table8.description := 'Window view'
!table8.capacity := 2

!insert (reservation2, table8) into ReservationTable

!new Waiter('waiter4')
!waiter4.name := 'Jinan Xu'
!waiter4.dateOfBirth := Date('1991-01-01')      -- Arbitrary date of birth
!waiter4.phoneNumber := '8080808080'            -- Arbitrary phone number

!insert (headwaiter2, waiter4) into HeadWaiterWaiter
!insert (reservation2, waiter4) into ReservationWaiter

!new MenuItem('menuitem2')
!menuitem2.description := 'Classic Italian coffee-flavored dessert'
!menuitem2.prepTime := 15.0
!menuitem2.classification := #Dessert

!insert (menuitem2, chef2) into MenuItemChef

!new FoodItem('fooditem2')
!fooditem2.number := 1
!fooditem2.description := 'Espresso'
!fooditem2.purchaseFlag := true
!fooditem2.unit := #Ounce

!new FoodItem('fooditem3')
!fooditem3.number := 2
!fooditem3.description := 'Mascarpone Cheese'
!fooditem3.unit := #Gram

!insert (menuitem2, fooditem2) into MenuItemFoodItem
!insert (menuitem2, fooditem3) into MenuItemFoodItem

!new Allergen('allergen2')
!allergen2.type := #Lactose

!insert (fooditem3, allergen2) into FoodItemAllergen

!new MenuItem('menuitem3')
!menuitem3.description := 'Spiced rice with chicken and vegetables'
!menuitem3.prepTime := 30.0
!menuitem3.classification := #Main

!insert (menuitem3, chef2) into MenuItemChef

!new FoodItem('fooditem4')
!fooditem4.number := 3
!fooditem4.description := 'Basmati Rice'
!fooditem4.unit := #Pound

!new FoodItem('fooditem5')
!fooditem5.number := 4
!fooditem5.description := 'Chicken'
!fooditem5.unit := #Pound

!new FoodItem('fooditem6')
!fooditem6.number := 5
!fooditem6.description := 'Mixed Vegetables'
!fooditem6.unit := #Pound

!insert (menuitem3, fooditem4) into MenuItemFoodItem
!insert (menuitem3, fooditem5) into MenuItemFoodItem
!insert (menuitem3, fooditem6) into MenuItemFoodItem

!new DietaryRequirement('diet1')
!diet1.diet := #Vegetarian

!insert (fooditem6, diet1) into MenuItemFoodItem

!new FoodItem('fooditem7')
!fooditem7.number := 6
!fooditem7.description := 'Nuts'
!fooditem7.unit := #Ounce

!new Allergen('allergen3')
!allergen3.type := #Nuts

!insert (fooditem7, allergen3) into FoodItemAllergen

!new RegularCustomer('customer2')
!customer2.name := 'Sophie Müller'
!customer2.prefferedLanguage := #German

!insert (reservation2, customer2) into ReservationCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 136 | 0.00% |
| Multiplicities Errors | 0 | 27 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 9 | 0.00% |
| Phones | 0 | 8 | 0.00% |

## Category edge
```
!new Restaurant('restaurant4')
!restaurant4.name := 'Global Feast'

!new Owner('owner7')
!owner7.name := 'Edward Snow'
!owner7.percentageShares := 49

!new Owner('owner8')
!owner8.name := 'Olivia Miles'
!owner8.percentageShares := 51

!insert (restaurant4, owner7) into RestaurantOwner
!insert (restaurant4, owner8) into RestaurantOwner

!new Banquet('banquet3')
!banquet3.date := Date('2024-02-29')
!banquet3.time := Time('18:00')
!banquet3.groupName := 'MegaCorp Annual Gala'
!banquet3.numberPeople := 300
!banquet3.paymentMethod := #CreditCard

!insert (restaurant4, banquet3) into RestaurantReservation

!new Table('table9')
!table9.number := 1
!table9.description := 'Royal Oak'
!table9.capacity := 150

!new Table('table10')
!table10.number := 2
!table10.description := 'Imperial Silk'
!table10.capacity := 150

!insert (banquet3, table9) into ReservationTable
!insert (banquet3, table10) into ReservationTable

!new BusDriver('busdriver3')
!busdriver3.name := 'Joshua Kim'

!insert (banquet3, busdriver3) into BanquetBusDriver

!new HeadWaiter('headwaiter3')
!headwaiter3.name := 'Annabella Taylor'
!headwaiter3.dateOfBirth := Date('1985-01-01')  -- Arbitrary date of birth
!headwaiter3.phoneNumber := '9090909090'        -- Arbitrary phone number

!new Waiter('waiter5')
!waiter5.name := 'Ahmed Ali'
!waiter5.dateOfBirth := Date('1990-01-01')      -- Arbitrary date of birth
!waiter5.phoneNumber := '1111111111'            -- Arbitrary phone number

!new Waiter('waiter6')
!waiter6.name := 'Carlos Mendes'
!waiter6.dateOfBirth := Date('1992-01-01')      -- Arbitrary date of birth
!waiter6.phoneNumber := '2222222222'            -- Arbitrary phone number

!insert (headwaiter3, waiter5) into HeadWaiterWaiter
!insert (headwaiter3, waiter6) into HeadWaiterWaiter

!insert (banquet3, waiter5) into ReservationWaiter
!insert (banquet3, waiter6) into ReservationWaiter

!new Manager('manager1')
!manager1.name := 'Yan Zhang'
!manager1.dateOfBirth := Date('1978-01-01')     -- Arbitrary date of birth
!manager1.phoneNumber := '3333333333'           -- Arbitrary phone number

!new Chef('chef3')
!chef3.name := 'Hana Park'
!chef3.dateOfBirth := Date('1980-01-01')        -- Arbitrary date of birth
!chef3.phoneNumber := '4444444444'              -- Arbitrary phone number

!new Cook('cook4')
!cook4.name := 'Yuki Tanaka'
!cook4.dateOfBirth := Date('1991-01-01')        -- Arbitrary date of birth
!cook4.phoneNumber := '5555555555'              -- Arbitrary phone number
!cook4.yearsOfExperience := 1                   -- Ensure positive experience

!insert (chef3, cook4) into ChefCook

!new MenuItem('menuitem4')
!menuitem4.description := 'Spicy Korean Pancakes'
!menuitem4.prepTime := 10.0
!menuitem4.classification := #Apetizer

!insert (menuitem4, chef3) into MenuItemChef

!new FoodItem('fooditem8')
!fooditem8.number := 7
!fooditem8.description := 'Ingredient for Spicy Korean Pancakes'
!fooditem8.unit := #Pound

!insert (menuitem4, fooditem8) into MenuItemFoodItem

!new Allergen('allergen4')
!allergen4.type := #Gluten

!insert (fooditem8, allergen4) into FoodItemAllergen

!new Chef('chef4')
!chef4.name := 'Amir Khalil'
!chef4.dateOfBirth := Date('1982-01-01')        -- Arbitrary date of birth
!chef4.phoneNumber := '6666666666'              -- Arbitrary phone number

!new Cook('cook5')
!cook5.name := 'Nadia Aziz'
!cook5.dateOfBirth := Date('1990-01-01')        -- Arbitrary date of birth
!cook5.phoneNumber := '7777777777'              -- Arbitrary phone number
!cook5.yearsOfExperience := 1                   -- Ensure positive experience

!insert (chef4, cook5) into ChefCook

!new MenuItem('menuitem5')
!menuitem5.description := 'Egyptian Lamb Tagine'
!menuitem5.prepTime := 30.0
!menuitem5.classification := #Main

!insert (menuitem5, chef4) into MenuItemChef

!new FoodItem('fooditem9')
!fooditem9.number := 8
!fooditem9.description := 'Ingredient for Egyptian Lamb Tagine'
!fooditem9.unit := #Pound

!insert (menuitem5, fooditem9) into MenuItemFoodItem

!new Allergen('allergen5')
!allergen5.type := #Nuts

!insert (fooditem9, allergen5) into FoodItemAllergen

!new Chef('chef5')
!chef5.name := 'Julia Stein'
!chef5.dateOfBirth := Date('1985-01-01')        -- Arbitrary date of birth
!chef5.phoneNumber := '8888888888'              -- Arbitrary phone number

!new Cook('cook6')
!cook6.name := 'Pedro Gonzales'
!cook6.dateOfBirth := Date('1989-01-01')        -- Arbitrary date of birth
!cook6.phoneNumber := '9999999999'              -- Arbitrary phone number
!cook6.yearsOfExperience := 1                   -- Ensure positive experience

!insert (chef5, cook6) into ChefCook

!new MenuItem('menuitem6')
!menuitem6.description := 'Vegan Chocolate Mousse'
!menuitem6.prepTime := 15.0
!menuitem6.classification := #Dessert

!insert (menuitem6, chef5) into MenuItemChef

!new FoodItem('fooditem10')
!fooditem10.number := 9
!fooditem10.description := 'Ingredient for Vegan Chocolate Mousse'

!insert (menuitem6, fooditem10) into MenuItemFoodItem
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 115 | 0.00% |
| Multiplicities Errors | 0 | 21 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 11 | 0.00% |
| Phones | 0 | 10 | 0.00% |

## Category invalid
```
!new Restaurant('restaurant1')
!restaurant1.name := 'The Global Table'

!new Owner('owner1')
!owner1.name := 'Maria Gonzales'
!owner1.percentageShares := 60

!new Owner('owner2')
!owner2.name := 'John Smith'
!owner2.percentageShares := 40

!insert (restaurant1, owner1) into RestaurantOwner
!insert (restaurant1, owner2) into RestaurantOwner

!new Banquet('banquet1')
!banquet1.date := Date('2023-12-15')
!banquet1.time := Time('18:00')
!banquet1.groupName := 'International Business Forum'
!banquet1.numberPeople := 120
!banquet1.paymentMethod := #CreditCard

!insert (restaurant1, banquet1) into RestaurantReservation

!new Table('table1')
!table1.number := 1
!table1.description := 'Large rectangle table'
!table1.capacity := 12

!new Table('table2')
!table2.number := 2
!table2.description := 'Standard round table'
!table2.capacity := 8

!new Table('table3')
!table3.number := 3
!table3.description := 'Square table'
!table3.capacity := 4

!new Table('table4')
!table4.number := 4
!table4.description := 'Oval table'
!table4.capacity := 10

!insert (banquet1, table1) into ReservationTable
!insert (banquet1, table2) into ReservationTable
!insert (banquet1, table3) into ReservationTable
!insert (banquet1, table4) into ReservationTable

!new BusDriver('busdriver1')
!busdriver1.name := 'Alexei Petrov'

!insert (banquet1, busdriver1) into BanquetBusDriver
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 8 | 12.50% |
| Invariants Errors (Not included on General) | 1 | 4 | 25.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `ReservationWaiter':
  Object `banquet1' of class `Banquet' is connected to 0 objects of class `Waiter'
  at association end `servedBy' but the multiplicity is specified as `1..*'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (2) `Reservation::TablesCapacityGreaterThanPeople': FAILED.
```

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |
| Phones | 0 | 0 | 0.00% |

## Generation 1 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 1 | 484 | 0.21% |
| Multiplicities Errors | 1 | 86 | 1.16% |
| Invariants Errors | 0 | 16 | 0.00% |

| Syntax Errors | 
|---| 
```
<input>:1:0: generation of expression `#French' failed, with following error:
```

| Multiplicities Errors | 
|---| 
```
Multiplicity constraint violation in association `ReservationTable':
  Object `table13' of class `Table' is connected to 2 objects of class `Reservation'
  at association end `reservation' but the multiplicity is specified as `1'.
```

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 8 | 12.50% |
| Invariants Errors (Not included on General) | 1 | 4 | 25.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `ReservationWaiter':
  Object `banquet1' of class `Banquet' is connected to 0 objects of class `Waiter'
  at association end `servedBy' but the multiplicity is specified as `1..*'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (2) `Reservation::TablesCapacityGreaterThanPeople': FAILED.
```

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 33 | 0.00% |
| Phones | 0 | 29 | 0.00% |

# Generation 2
## Category baseline
```
!new Restaurant('restaurant11')
!restaurant11.name := 'Sakura'

!new Owner('owner21')
!owner21.name := 'Haruki Yamada'
!owner21.percentageShares := 50

!new Owner('owner22')
!owner22.name := 'Aiko Sato'
!owner22.percentageShares := 50

!insert (restaurant11, owner21) into RestaurantOwner
!insert (restaurant11, owner22) into RestaurantOwner

!new Table('table27')
!table27.number := 1
!table27.description := 'Private room with tatami seating.'
!table27.capacity := 8

!new Table('table28')
!table28.number := 2
!table28.description := 'Family table near the sushi bar.'
!table28.capacity := 5

!new Table('table29')
!table29.number := 3
!table29.description := 'Outdoor seating in the Zen garden.'
!table29.capacity := 4

!new Table('table30')
!table30.number := 4
!table30.description := 'Elegant VIP seating area.'
!table30.capacity := 6

!new RegularCustomer('customer6')
!customer6.name := 'Akira Suzuki'
!customer6.prefferedLanguage := #English

!new RegularCustomer('customer7')
!customer7.name := 'Olivia Johnson'
!customer7.prefferedLanguage := #English

!new Individual('individualReservation5')
!individualReservation5.date := Date('2023-11-05')
!individualReservation5.time := Time('18:00')
!individualReservation5.numberPeople := 1
!individualReservation5.name := 'Akira Suzuki'
!individualReservation5.phoneNumber := '5555555555'  -- Arbitrary phone number
!individualReservation5.seating := #Inside
!individualReservation5.smoking := #NonSmoking
!individualReservation5.number := 5

!insert (restaurant11, individualReservation5) into RestaurantReservation
!insert (individualReservation5, customer6) into ReservationCustomer
!insert (individualReservation5, table28) into ReservationTable

!new Banquet('banquet9')
!banquet9.date := Date('2023-11-05')
!banquet9.time := Time('19:30')
!banquet9.groupName := 'Olivia\'s Corporate Event'
!banquet9.numberPeople := 18
!banquet9.paymentMethod := #Cash

!insert (restaurant11, banquet9) into RestaurantReservation
!insert (banquet9, customer7) into ReservationCustomer
!insert (banquet9, table27) into ReservationTable
!insert (banquet9, table30) into ReservationTable
!insert (banquet9, table29) into ReservationTable

!new Waiter('waiter17')
!waiter17.name := 'Taro Nishikawa'
!waiter17.dateOfBirth := Date('1990-01-01')     -- Arbitrary date of birth
!waiter17.phoneNumber := '6666666666'           -- Arbitrary phone number
!waiter17.spokenLanguage := #English

!new Waiter('waiter18')
!waiter18.name := 'Mei Tanaka'
!waiter18.dateOfBirth := Date('1991-01-01')     -- Arbitrary date of birth
!waiter18.phoneNumber := '7777777777'           -- Arbitrary phone number
!waiter18.spokenLanguage := #English

!insert (individualReservation5, waiter17) into ReservationWaiter
!insert (banquet9, waiter17) into ReservationWaiter
!insert (banquet9, waiter18) into ReservationWaiter

!new HeadWaiter('headwaiter9')
!headwaiter9.name := 'Hiroshi Kobayashi'
!headwaiter9.dateOfBirth := Date('1980-01-01')  -- Arbitrary date of birth
!headwaiter9.phoneNumber := '8888888888'        -- Arbitrary phone number

!insert (headwaiter9, waiter17) into HeadWaiterWaiter
!insert (headwaiter9, waiter18) into HeadWaiterWaiter

!new BusDriver('busdriver9')
!busdriver9.name := 'Kenji Ito'

!insert (banquet9, busdriver9) into BanquetBusDriver

!new Chef('chef12')
!chef12.name := 'Yumi Takahashi'
!chef12.dateOfBirth := Date('1975-01-01')       -- Arbitrary date of birth
!chef12.phoneNumber := '9999999999'             -- Arbitrary phone number

!new Cook('cook14')
!cook14.name := 'Noriko Fujita'
!cook14.dateOfBirth := Date('1993-01-01')       -- Arbitrary date of birth
!cook14.phoneNumber := '0101010101'             -- Arbitrary phone number
!cook14.yearsOfExperience := 3

!insert (chef12, cook14) into ChefCook

!new MenuItem('menuitem15')
!menuitem15.description := 'Selection of fresh sushi and sashimi.'
!menuitem15.prepTime := 30.0
!menuitem15.classification := #Main

!insert (menuitem15, chef12) into MenuItemChef

!new FoodItem('fooditem21')
!fooditem21.number := 21
!fooditem21.description := 'Tuna'
!fooditem21.purchaseFlag := true
!fooditem21.unit := #Gram

!new FoodItem('fooditem22')
!fooditem22.number := 22
!fooditem22.description := 'Salmon'
!fooditem22.purchaseFlag := true
!fooditem22.unit := #Gram

!new FoodItem('fooditem23')
!fooditem23.number := 23
!fooditem23.description := 'Rice'
!fooditem23.purchaseFlag := true
!fooditem23.unit := #Gram

!insert (menuitem15, fooditem21) into MenuItemFoodItem
!insert (menuitem15, fooditem22) into MenuItemFoodItem
!insert (menuitem15, fooditem23) into MenuItemFoodItem

!new MenuItem('menuitem16')
!menuitem16.description := 'Italian dessert with a Japanese twist, infused with matcha.'
!menuitem16.prepTime := 25.0
!menuitem16.classification := #Dessert

!insert (menuitem16, chef12) into MenuItemChef

!new FoodItem('fooditem24')
!fooditem24.number := 24
!fooditem24.description := 'Mascarpone'
!fooditem24.purchaseFlag := true
!fooditem24.unit := #Ounce

!new FoodItem('fooditem25')
!fooditem25.number := 25
!fooditem25.description := 'Matcha'
!fooditem25.purchaseFlag := true
!fooditem25.unit := #Gram

!insert (menuitem16, fooditem24) into MenuItemFoodItem
!insert (menuitem16, fooditem25) into MenuItemFoodItem

!new Allergen('allergen9')
!allergen9.type := #Seafood

!insert (fooditem21, allergen9) into FoodItemAllergen
!insert (fooditem22, allergen9) into FoodItemAllergen

!new Allergen('allergen10')
!allergen10.type := #Lactose

!insert (fooditem24, allergen10) into FoodItemAllergen
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 134 | 0.00% |
| Multiplicities Errors | 0 | 27 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 7 | 0.00% |
| Phones | 0 | 6 | 0.00% |

## Category boundary
```
!new Restaurant('restaurant7')
!restaurant7.name := 'Cultural Feast'

!new Owner('owner13')
!owner13.name := 'Aisha Khan'
!owner13.percentageShares := 50

!new Owner('owner14')
!owner14.name := 'Wei Zhang'
!owner14.percentageShares := 50

!insert (restaurant7, owner13) into RestaurantOwner
!insert (restaurant7, owner14) into RestaurantOwner

!new HeadWaiter('headwaiter5')
!headwaiter5.name := 'Paolo Rossi'
!headwaiter5.dateOfBirth := Date('1982-01-01')  -- Arbitrary date of birth
!headwaiter5.phoneNumber := '5555555555'        -- Arbitrary phone number

!new Waiter('waiter10')
!waiter10.name := 'Sara Jovanovich'
!waiter10.dateOfBirth := Date('1990-01-01')     -- Arbitrary date of birth
!waiter10.phoneNumber := '6666666666'           -- Arbitrary phone number
!waiter10.spokenLanguage := #English

!insert (headwaiter5, waiter10) into HeadWaiterWaiter

!new Chef('chef7')
!chef7.name := 'Ahmed Al-Salem'
!chef7.dateOfBirth := Date('1975-01-01')        -- Arbitrary date of birth
!chef7.phoneNumber := '7777777777'              -- Arbitrary phone number

!new Cook('cook8')
!cook8.name := 'Lucia Fernández'
!cook8.dateOfBirth := Date('1995-01-01')        -- Arbitrary date of birth
!cook8.phoneNumber := '8888888888'              -- Arbitrary phone number
!cook8.yearsOfExperience := 0

!insert (chef7, cook8) into ChefCook

!new Table('table18')
!table18.number := 10
!table18.description := 'Large banquet table in the main hall'
!table18.capacity := 20

!new Table('table19')
!table19.number := 11
!table19.description := 'Private dining room table'
!table19.capacity := 10

!new MenuItem('menuitem9')
!menuitem9.description := 'A selection of seasonal vegetables and grains.'
!menuitem9.prepTime := 15.0
!menuitem9.classification := #Main

!insert (menuitem9, chef7) into MenuItemChef

!new FoodItem('fooditem15')
!fooditem15.number := 14
!fooditem15.description := 'Chickpea'
!fooditem15.purchaseFlag := false
!fooditem15.unit := #Pound

!insert (menuitem9, fooditem15) into MenuItemFoodItem

!new Banquet('banquet6')
!banquet6.date := Date('2023-12-31')
!banquet6.time := Time('20:00')
!banquet6.groupName := 'New Year\'s Gala'
!banquet6.numberPeople := 25
!banquet6.paymentMethod := #CreditCard

!insert (restaurant7, banquet6) into RestaurantReservation

!insert (banquet6, table18) into ReservationTable
!insert (banquet6, table19) into ReservationTable

!insert (banquet6, waiter10) into ReservationWaiter

!new BusDriver('busdriver6')
!busdriver6.name := 'Ravi Patel'

!insert (banquet6, busdriver6) into BanquetBusDriver

!new ItemOrder('itemorder2')
!itemorder2.time := Time('20:15')

!insert (banquet6, itemorder2) into ReservationItemOrdered
!insert (itemorder2, menuitem9) into ItemOrderMenuItem
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 66 | 0.00% |
| Multiplicities Errors | 0 | 13 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 5 | 0.00% |
| Phones | 0 | 4 | 0.00% |

## Category complex
```
!new Restaurant('restaurant8')
!restaurant8.name := 'Heritage Feast'

!new Owner('owner15')
!owner15.name := 'Priya Patel'
!owner15.percentageShares := 50

!new Owner('owner16')
!owner16.name := 'Thomas Bergmann'
!owner16.percentageShares := 50

!insert (restaurant8, owner15) into RestaurantOwner
!insert (restaurant8, owner16) into RestaurantOwner

!new Chef('chef8')
!chef8.name := 'Sun Li'
!chef8.dateOfBirth := Date('1980-01-01')        -- Arbitrary date of birth
!chef8.phoneNumber := '1111111111'              -- Arbitrary phone number

!new Cook('cook9')
!cook9.name := 'Anisha Kapoor'
!cook9.dateOfBirth := Date('1985-01-01')        -- Arbitrary date of birth
!cook9.phoneNumber := '2222222222'              -- Arbitrary phone number
!cook9.yearsOfExperience := 8

!new Cook('cook10')
!cook10.name := 'Yukio Sato'
!cook10.dateOfBirth := Date('1988-01-01')       -- Arbitrary date of birth
!cook10.phoneNumber := '3333333333'             -- Arbitrary phone number
!cook10.yearsOfExperience := 5

!insert (chef8, cook9) into ChefCook
!insert (chef8, cook10) into ChefCook

!new Banquet('banquet7')
!banquet7.date := Date('2023-12-01')
!banquet7.time := Time('18:00')
!banquet7.groupName := 'Creative Writers Gala'
!banquet7.numberPeople := 22
!banquet7.paymentMethod := #Cash

!insert (restaurant8, banquet7) into RestaurantReservation

!new Table('table20')
!table20.number := 1
!table20.description := 'Center Hall near the dance floor'
!table20.capacity := 15

!new Table('table21')
!table21.number := 2
!table21.description := 'Adjacent to the entrance'
!table21.capacity := 10

!insert (banquet7, table20) into ReservationTable
!insert (banquet7, table21) into ReservationTable

!new BusDriver('busdriver7')
!busdriver7.name := 'Mohamed El-Tayeb'

!insert (banquet7, busdriver7) into BanquetBusDriver

!new HeadWaiter('headwaiter6')
!headwaiter6.name := 'Francesca Romano'
!headwaiter6.dateOfBirth := Date('1978-01-01')  -- Arbitrary date of birth
!headwaiter6.phoneNumber := '4444444444'        -- Arbitrary phone number

!new Waiter('waiter11')
!waiter11.name := 'Jonas Köhler'
!waiter11.dateOfBirth := Date('1990-01-01')     -- Arbitrary date of birth
!waiter11.phoneNumber := '5555555555'           -- Arbitrary phone number
!waiter11.spokenLanguage := #German

!new Waiter('waiter12')
!waiter12.name := 'Lina Chavez'
!waiter12.dateOfBirth := Date('1993-01-01')     -- Arbitrary date of birth
!waiter12.phoneNumber := '6666666666'           -- Arbitrary phone number
!waiter12.spokenLanguage := #Spanish

!insert (headwaiter6, waiter11) into HeadWaiterWaiter
!insert (headwaiter6, waiter12) into HeadWaiterWaiter

!insert (banquet7, waiter11) into ReservationWaiter
!insert (banquet7, waiter12) into ReservationWaiter

!new Individual('individualReservation3')
!individualReservation3.date := Date('2023-12-01')
!individualReservation3.time := Time('19:00')
!individualReservation3.numberPeople := 1
!individualReservation3.name := 'Emily Rivera'
!individualReservation3.phoneNumber := '7777777777'  -- Arbitrary phone number
!individualReservation3.seating := #Patio
!individualReservation3.smoking := #Smoking
!individualReservation3.number := 3

!insert (restaurant8, individualReservation3) into RestaurantReservation

!new Table('table22')
!table22.number := 5
!table22.description := 'Cozy corner with garden view'
!table22.capacity := 4

!insert (individualReservation3, table22) into ReservationTable

!new Waiter('waiter13')
!waiter13.name := 'Wei Zhang'
!waiter13.dateOfBirth := Date('1992-01-01')     -- Arbitrary date of birth
!waiter13.phoneNumber := '8888888888'           -- Arbitrary phone number
!waiter13.spokenLanguage := #English

!insert (headwaiter6, waiter13) into HeadWaiterWaiter
!insert (individualReservation3, waiter13) into ReservationWaiter

!new MenuItem('menuitem10')
!menuitem10.description := 'Creamy homemade matcha latte'
!menuitem10.prepTime := 10.0
!menuitem10.classification := #Beverage

!insert (menuitem10, chef8) into MenuItemChef

!new FoodItem('fooditem16')
!fooditem16.number := 15
!fooditem16.description := 'Matcha Powder'
!fooditem16.purchaseFlag := true
!fooditem16.unit := #Gram

!new FoodItem('fooditem17')
!fooditem17.number := 16
!fooditem17.description := 'Almond Milk'
!fooditem17.unit := #Ounce

!insert (menuitem10, fooditem16) into MenuItemFoodItem
!insert (menuitem10, fooditem17) into MenuItemFoodItem

!new Allergen('allergen7')
!allergen7.type := #Nuts

!insert (fooditem17, allergen7) into FoodItemAllergen

!new MenuItem('menuitem11')
!menuitem11.description := 'Italian tomato and basil on toasted bread'
!menuitem11.prepTime := 5.0
!menuitem11.classification := #Apetizer

!insert (menuitem11, chef8) into MenuItemChef

!new FoodItem('fooditem18')
!fooditem18.number := 17
!fooditem18.description := 'Italian Bread'
!fooditem18.unit := #Sheet

!new FoodItem('fooditem19')
!fooditem19.number := 18
!fooditem19.description := 'Fresh Tomatoes'
!fooditem19.unit := #Gram

!new FoodItem('fooditem20')
!fooditem20.number := 19
!fooditem20.description := 'Basil Leaves'
!fooditem20.unit := #Gram

!insert (menuitem11, fooditem18) into MenuItemFoodItem
!insert (menuitem11, fooditem19) into MenuItemFoodItem
!insert (menuitem11, fooditem20) into MenuItemFoodItem

!new RegularCustomer('customer5')
!customer5.name := 'Emily Rivera'
!customer5.prefferedLanguage := #Spanish

!new DietaryRequirement('diet2')
!diet2.diet := #Vegan

!insert (customer5, diet2) into ReportedAllergy   -- Incorrect association; no implementation required
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 131 | 0.00% |
| Multiplicities Errors | 0 | 25 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 9 | 0.00% |
| Phones | 0 | 8 | 0.00% |

## Category edge
```
!new Restaurant('restaurant9')
!restaurant9.name := 'Culinary Fusions'

!new Owner('owner17')
!owner17.name := 'Li Wei'
!owner17.percentageShares := 50

!new Owner('owner18')
!owner18.name := 'Marco Verdi'
!owner18.percentageShares := 50

!insert (restaurant9, owner17) into RestaurantOwner
!insert (restaurant9, owner18) into RestaurantOwner

!new Individual('individualReservation4')
!individualReservation4.date := Date('2023-12-24')
!individualReservation4.time := Time('20:00')
!individualReservation4.numberPeople := 2
!individualReservation4.name := 'Sara Montgomery'
!individualReservation4.phoneNumber := '9999999999'  -- Arbitrary phone number
!individualReservation4.seating := #Patio
!individualReservation4.smoking := #NonSmoking
!individualReservation4.number := 4

!insert (restaurant9, individualReservation4) into RestaurantReservation

!new Table('table23')
!table23.number := 23
!table23.description := 'Ocean Breeze'
!table23.capacity := 2

!insert (individualReservation4, table23) into ReservationTable

!new Waiter('waiter14')
!waiter14.name := 'Chiara Rossi'
!waiter14.dateOfBirth := Date('1995-01-01')     -- Arbitrary date of birth
!waiter14.phoneNumber := '1111222233'           -- Arbitrary phone number
!waiter14.spokenLanguage := #English

!new HeadWaiter('headwaiter7')
!headwaiter7.name := 'Sven Leaf'
!headwaiter7.dateOfBirth := Date('1990-01-01')  -- Arbitrary date of birth
!headwaiter7.phoneNumber := '2222333344'        -- Arbitrary phone number

!insert (headwaiter7, waiter14) into HeadWaiterWaiter
!insert (individualReservation4, waiter14) into ReservationWaiter

!new Manager('manager2')
!manager2.name := 'Alejandra Gomez'
!manager2.dateOfBirth := Date('1980-01-01')     -- Arbitrary date of birth
!manager2.phoneNumber := '3333444455'           -- Arbitrary phone number

!new Chef('chef9')
!chef9.name := 'Luciana Santos'
!chef9.dateOfBirth := Date('1978-01-01')        -- Arbitrary date of birth
!chef9.phoneNumber := '4444555566'              -- Arbitrary phone number

!new Cook('cook11')
!cook11.name := 'Isabelle Lee'
!cook11.dateOfBirth := Date('1992-01-01')       -- Arbitrary date of birth
!cook11.phoneNumber := '5555666677'             -- Arbitrary phone number
!cook11.yearsOfExperience := 2

!insert (chef9, cook11) into ChefCook

!new MenuItem('menuitem12')
!menuitem12.description := 'Mediterranean Hummus Plate'
!menuitem12.prepTime := 15.0
!menuitem12.classification := #Apetizer

!insert (menuitem12, chef9) into MenuItemChef

!new Chef('chef10')
!chef10.name := 'Aran Singh'
!chef10.dateOfBirth := Date('1985-01-01')       -- Arbitrary date of birth
!chef10.phoneNumber := '6666777788'             -- Arbitrary phone number

!new Cook('cook12')
!cook12.name := 'Haruto Imamura'
!cook12.dateOfBirth := Date('1993-01-01')       -- Arbitrary date of birth
!cook12.phoneNumber := '7777888899'             -- Arbitrary phone number
!cook12.yearsOfExperience := 3

!insert (chef10, cook12) into ChefCook

!new MenuItem('menuitem13')
!menuitem13.description := 'Thai Green Curry'
!menuitem13.prepTime := 20.0
!menuitem13.classification := #Main

!insert (menuitem13, chef10) into MenuItemChef

!new FoodItem('fooditem24')
!fooditem24.number := 20
!fooditem24.description := 'Ingredient for Thai Green Curry'
!fooditem24.unit := #Pound

!insert (menuitem13, fooditem24) into MenuItemFoodItem

!new Allergen('allergen8')
!allergen8.type := #Nuts

!insert (fooditem24, allergen8) into FoodItemAllergen

!new Chef('chef11')
!chef11.name := 'Mia Johansson'
!chef11.dateOfBirth := Date('1987-01-01')       -- Arbitrary date of birth
!chef11.phoneNumber := '8888999900'             -- Arbitrary phone number

!new Cook('cook13')
!cook13.name := 'Khaled Youssef'
!cook13.dateOfBirth := Date('1994-01-01')       -- Arbitrary date of birth
!cook13.phoneNumber := '9999000011'             -- Arbitrary phone number
!cook13.yearsOfExperience := 4

!insert (chef11, cook13) into ChefCook

!new MenuItem('menuitem14')
!menuitem14.description := 'Fruit Sorbet Trio'
!menuitem14.prepTime := 10.0
!menuitem14.classification := #Dessert

!insert (menuitem14, chef11) into MenuItemChef
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 93 | 0.00% |
| Multiplicities Errors | 0 | 14 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 10 | 0.00% |
| Phones | 0 | 10 | 0.00% |

## Category invalid
```
!new Restaurant('restaurant6')
!restaurant6.name := 'The Sunset Vista'

!new Owner('owner11')
!owner11.name := 'Linh Tran'
!owner11.percentageShares := 50

!new Owner('owner12')
!owner12.name := 'David O\'Connor'
!owner12.percentageShares := 50

!insert (restaurant6, owner11) into RestaurantOwner
!insert (restaurant6, owner12) into RestaurantOwner

!new Individual('individualReservation2')
!individualReservation2.date := Date('2023-11-26')
!individualReservation2.time := Time('12:30')
!individualReservation2.numberPeople := 2  -- Assume 2 people for individual reservation
!individualReservation2.name := 'Stephanie Liu'
!individualReservation2.phoneNumber := '3030303030'  -- Arbitrary phone number
!individualReservation2.seating := #Inside
!individualReservation2.smoking := #NonSmoking
!individualReservation2.number := 2

!insert (restaurant6, individualReservation2) into RestaurantReservation

!new Banquet('banquet5')
!banquet5.date := Date('2023-11-26')
!banquet5.time := Time('18:00')
!banquet5.groupName := 'Liu-Mendes Wedding Party'
!banquet5.numberPeople := 30
!banquet5.paymentMethod := #Cash

!insert (restaurant6, banquet5) into RestaurantReservation

!new Table('table15')
!table15.number := 101
!table15.description := 'Corner booth table'
!table15.capacity := 4

!insert (individualReservation2, table15) into ReservationTable

!new Table('table16')
!table16.number := 201
!table16.description := 'Large rectangular family table'
!table16.capacity := 12

!new Table('table17')
!table17.number := 202
!table17.description := 'Medium round table'
!table17.capacity := 6

!insert (banquet5, table16) into ReservationTable
!insert (banquet5, table17) into ReservationTable

!new BusDriver('busdriver5')
!busdriver5.name := 'Miguel Lopez'

!insert (banquet5, busdriver5) into BanquetBusDriver

!new Waiter('waiter9')
!waiter9.name := 'Omar El-Amin'
!waiter9.dateOfBirth := Date('1989-01-01')  -- Arbitrary date of birth
!waiter9.phoneNumber := '4040404040'        -- Arbitrary phone number
!waiter9.spokenLanguage := #English

!insert (banquet5, waiter9) into ReservationWaiter
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 2 | 9 | 22.22% |
| Invariants Errors (Not included on General) | 1 | 4 | 25.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `HeadWaiterWaiter':
  Object `waiter9' of class `Waiter' is connected to 0 objects of class `HeadWaiter'
  at association end `headWaiter' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `ReservationWaiter':
  Object `individualReservation2' of class `Individual' is connected to 0 objects of class `Waiter'
  at association end `servedBy' but the multiplicity is specified as `1..*'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (2) `Reservation::TablesCapacityGreaterThanPeople': FAILED.
```

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 3 | 0.00% |
| Phones | 0 | 2 | 0.00% |

## Generation 2 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 475 | 0.00% |
| Multiplicities Errors | 0 | 79 | 0.00% |
| Invariants Errors | 0 | 16 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 2 | 9 | 22.22% |
| Invariants Errors (Not included on General) | 1 | 4 | 25.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `HeadWaiterWaiter':
  Object `waiter9' of class `Waiter' is connected to 0 objects of class `HeadWaiter'
  at association end `headWaiter' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `ReservationWaiter':
  Object `individualReservation2' of class `Individual' is connected to 0 objects of class `Waiter'
  at association end `servedBy' but the multiplicity is specified as `1..*'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (2) `Reservation::TablesCapacityGreaterThanPeople': FAILED.
```

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 34 | 0.00% |
| Phones | 0 | 30 | 0.00% |

# Generation 3
## Category baseline
```
!new Restaurant('restaurant15')
!restaurant15.name := 'El Buen Sabor'

!new Owner('owner30')
!owner30.name := 'Carlos Hernandez'
!owner30.percentageShares := 70

!new Owner('owner31')
!owner31.name := 'Lucia Ramirez'
!owner31.percentageShares := 30

!insert (restaurant15, owner30) into RestaurantOwner
!insert (restaurant15, owner31) into RestaurantOwner

!new Table('table39')
!table39.number := 101
!table39.description := 'Booth near the mariachi stage.'
!table39.capacity := 6

!new Table('table40')
!table40.number := 202
!table40.description := 'Intimate table for two by the window.'
!table40.capacity := 2

!new Table('table41')
!table41.number := 305
!table41.description := 'Large communal table.'
!table41.capacity := 10

!new RegularCustomer('customer10')
!customer10.name := 'Maria Lopez'
!customer10.prefferedLanguage := #Spanish

!new RegularCustomer('customer11')
!customer11.name := 'Oliver White'
!customer11.prefferedLanguage := #English

!new Individual('individualReservation8')
!individualReservation8.date := Date('2023-12-01')
!individualReservation8.time := Time('20:00')
!individualReservation8.numberPeople := 1
!individualReservation8.name := 'Maria Lopez'
!individualReservation8.phoneNumber := '9876543210'  -- Arbitrary phone number
!individualReservation8.seating := #Inside
!individualReservation8.smoking := #NonSmoking
!individualReservation8.number := 8

!insert (restaurant15, individualReservation8) into RestaurantReservation
!insert (individualReservation8, customer10) into ReservationCustomer
!insert (individualReservation8, table40) into ReservationTable

!new Banquet('banquet12')
!banquet12.date := Date('2023-12-01')
!banquet12.time := Time('19:00')
!banquet12.groupName := 'Oliver\'s Anniversary Celebration'
!banquet12.numberPeople := 12
!banquet12.paymentMethod := #CreditCard

!insert (restaurant15, banquet12) into RestaurantReservation
!insert (banquet12, customer11) into ReservationCustomer
!insert (banquet12, table41) into ReservationTable
!insert (banquet12, table39) into ReservationTable

!new Waiter('waiter25')
!waiter25.name := 'Sofia Cruz'
!waiter25.dateOfBirth := Date('1995-01-01')     -- Arbitrary date of birth
!waiter25.phoneNumber := '1111111111'           -- Arbitrary phone number
!waiter25.spokenLanguage := #Spanish

!new Waiter('waiter26')
!waiter26.name := 'Juan Garcia'
!waiter26.dateOfBirth := Date('1993-01-01')     -- Arbitrary date of birth
!waiter26.phoneNumber := '2222222222'           -- Arbitrary phone number
!waiter26.spokenLanguage := #Spanish

!insert (individualReservation8, waiter25) into ReservationWaiter
!insert (banquet12, waiter25) into ReservationWaiter
!insert (banquet12, waiter26) into ReservationWaiter

!new HeadWaiter('headwaiter11')
!headwaiter11.name := 'Teresa Montes'
!headwaiter11.dateOfBirth := Date('1981-01-01')  -- Arbitrary date of birth
!headwaiter11.phoneNumber := '3333333333'        -- Arbitrary phone number

!insert (headwaiter11, waiter25) into HeadWaiterWaiter
!insert (headwaiter11, waiter26) into HeadWaiterWaiter

!new BusDriver('busdriver12')
!busdriver12.name := 'Diego Morales'

!insert (banquet12, busdriver12) into BanquetBusDriver

!new Chef('chef15')
!chef15.name := 'Rosa Castillo'
!chef15.dateOfBirth := Date('1970-01-01')       -- Arbitrary date of birth
!chef15.phoneNumber := '4444444444'             -- Arbitrary phone number

!new Cook('cook18')
!cook18.name := 'Pedro Fernandez'
!cook18.dateOfBirth := Date('1988-01-01')       -- Arbitrary date of birth
!cook18.phoneNumber := '5555555555'             -- Arbitrary phone number
!cook18.yearsOfExperience := 5

!insert (chef15, cook18) into ChefCook

!new MenuItem('menuitem20')
!menuitem20.description := 'Slow-roasted pork marinated in citrus juice and annatto.'
!menuitem20.prepTime := 50.0
!menuitem20.classification := #Main

!insert (menuitem20, chef15) into MenuItemChef

!new FoodItem('fooditem32')
!fooditem32.number := 32
!fooditem32.description := 'Pork'
!fooditem32.purchaseFlag := true
!fooditem32.unit := #Pound

!new FoodItem('fooditem33')
!fooditem33.number := 33
!fooditem33.description := 'Tortilla'
!fooditem33.purchaseFlag := true
!fooditem33.unit := #Dozen

!insert (menuitem20, fooditem32) into MenuItemFoodItem
!insert (menuitem20, fooditem33) into MenuItemFoodItem

!new MenuItem('menuitem21')
!menuitem21.description := 'Crispy fried dough pastries dusted with cinnamon sugar served with chocolate dipping sauce.'
!menuitem21.prepTime := 25.0
!menuitem21.classification := #Dessert

!insert (menuitem21, chef15) into MenuItemChef

!new FoodItem('fooditem34')
!fooditem34.number := 34
!fooditem34.description := 'Dough'
!fooditem34.purchaseFlag := true
!fooditem34.unit := #Pound

!new FoodItem('fooditem35')
!fooditem35.number := 35
!fooditem35.description := 'Chocolate'
!fooditem35.purchaseFlag := true
!fooditem35.unit := #Ounce

!insert (menuitem21, fooditem34) into MenuItemFoodItem
!insert (menuitem21, fooditem35) into MenuItemFoodItem

!new Allergen('allergen13')
!allergen13.type := #Gluten

!insert (fooditem33, allergen13) into FoodItemAllergen
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 119 | 0.00% |
| Multiplicities Errors | 0 | 23 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 7 | 0.00% |
| Phones | 0 | 6 | 0.00% |

## Category boundary
```
!new Restaurant('restaurant12')
!restaurant12.name := 'Global Gourmets'

!new Owner('owner23')
!owner23.name := 'Hiro Tanaka'
!owner23.percentageShares := 60

!new Owner('owner24')
!owner24.name := 'Linda Chen'
!owner24.percentageShares := 40

!insert (restaurant12, owner23) into RestaurantOwner
!insert (restaurant12, owner24) into RestaurantOwner

!new RegularCustomer('customer8')
!customer8.name := 'Fatimah Noor'
!customer8.prefferedLanguage := #English

!new HeadWaiter('headwaiter10')
!headwaiter10.name := 'Ivan Petrov'
!headwaiter10.dateOfBirth := Date('1987-01-01')  -- Arbitrary date of birth
!headwaiter10.phoneNumber := '1234567890'        -- Arbitrary phone number

!new Waiter('waiter19')
!waiter19.name := 'Jasmine Oladele'
!waiter19.dateOfBirth := Date('1990-01-01')      -- Arbitrary date of birth
!waiter19.phoneNumber := '0987654321'            -- Arbitrary phone number
!waiter19.spokenLanguage := #English

!insert (headwaiter10, waiter19) into HeadWaiterWaiter

!new Chef('chef13')
!chef13.name := 'Ewan McGregor'
!chef13.dateOfBirth := Date('1980-01-01')        -- Arbitrary date of birth
!chef13.phoneNumber := '1029384756'              -- Arbitrary phone number

!new Cook('cook15')
!cook15.name := 'Kofi Mensah'
!cook15.dateOfBirth := Date('1995-01-01')        -- Arbitrary date of birth
!cook15.phoneNumber := '5647382910'              -- Arbitrary phone number
!cook15.yearsOfExperience := 5

!insert (chef13, cook15) into ChefCook

!new Table('table31')
!table31.number := 21
!table31.description := 'Rooftop terrace seating'
!table31.capacity := 2

!new Table('table32')
!table32.number := 22
!table32.description := 'Private booth'
!table32.capacity := 2

!new Table('table33')
!table33.number := 23
!table33.description := 'Compact family table'
!table33.capacity := 3

!new MenuItem('menuitem17')
!menuitem17.description := 'A blend of Asian spices with a Western twist.'
!menuitem17.prepTime := 25.0
!menuitem17.classification := #Main

!insert (menuitem17, chef13) into MenuItemChef

!new FoodItem('fooditem26')
!fooditem26.number := 26
!fooditem26.description := 'Wasabi'
!fooditem26.purchaseFlag := true
!fooditem26.unit := #Gram

!new FoodItem('fooditem27')
!fooditem27.number := 27
!fooditem27.description := 'Rice Paper'
!fooditem27.purchaseFlag := false
!fooditem27.unit := #Sheet

!insert (menuitem17, fooditem26) into MenuItemFoodItem
!insert (menuitem17, fooditem27) into MenuItemFoodItem

!new Allergen('allergen11')
!allergen11.type := #Seafood

!insert (fooditem26, allergen11) into FoodItemAllergen

!new Individual('individualReservation6')
!individualReservation6.date := Date('2023-11-15')
!individualReservation6.time := Time('19:00')
!individualReservation6.numberPeople := 2
!individualReservation6.name := 'Fatimah Noor'
!individualReservation6.phoneNumber := '5555555555'  -- Arbitrary phone number
!individualReservation6.seating := #Patio
!individualReservation6.smoking := #NonSmoking
!individualReservation6.number := 6

!insert (restaurant12, individualReservation6) into RestaurantReservation
!insert (individualReservation6, customer8) into ReservationCustomer
!insert (individualReservation6, waiter19) into ReservationWaiter
!insert (individualReservation6, table31) into ReservationTable
!insert (individualReservation6, table32) into ReservationTable
!insert (individualReservation6, table33) into ReservationTable  -- Ensure all tables meet the constraint

!new ItemOrder('itemorder3')
!itemorder3.time := Time('19:10')

!insert (individualReservation6, itemorder3) into ReservationItemOrdered
!insert (itemorder3, menuitem17) into ItemOrderMenuItem
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 84 | 0.00% |
| Multiplicities Errors | 0 | 16 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 5 | 0.00% |
| Phones | 0 | 5 | 0.00% |

## Category complex
```
!new Restaurant('restaurant13')
!restaurant13.name := 'Culinary Journeys'

!new Owner('owner25')
!owner25.name := 'Yusuf Al-Mahdi'
!owner25.percentageShares := 35

!new Owner('owner26')
!owner26.name := 'Elena Petrova'
!owner26.percentageShares := 30

!new Owner('owner27')
!owner27.name := 'Chen Wei'
!owner27.percentageShares := 35

!insert (restaurant13, owner25) into RestaurantOwner
!insert (restaurant13, owner26) into RestaurantOwner
!insert (restaurant13, owner27) into RestaurantOwner

!new Chef('chef14')
!chef14.name := 'Anil Desai'
!chef14.dateOfBirth := Date('1970-01-01')        -- Arbitrary date of birth
!chef14.phoneNumber := '1212121212'              -- Arbitrary phone number

!new Cook('cook16')
!cook16.name := 'Fiona O\'Neill'
!cook16.dateOfBirth := Date('1985-01-01')        -- Arbitrary date of birth
!cook16.phoneNumber := '2323232323'              -- Arbitrary phone number
!cook16.yearsOfExperience := 6

!new Cook('cook17')
!cook17.name := 'Olivier Dupont'
!cook17.dateOfBirth := Date('1991-01-01')        -- Arbitrary date of birth
!cook17.phoneNumber := '3434343434'              -- Arbitrary phone number
!cook17.yearsOfExperience := 2

!insert (chef14, cook16) into ChefCook
!insert (chef14, cook17) into ChefCook

!new Banquet('banquet10')
!banquet10.date := Date('2023-02-10')
!banquet10.time := Time('17:00')
!banquet10.groupName := 'International Entrepreneurs\' Summit'
!banquet10.numberPeople := 18
!banquet10.paymentMethod := #CreditCard

!insert (restaurant13, banquet10) into RestaurantReservation

!new Table('table34')
!table34.number := 12
!table34.description := 'Near the AV setup'
!table34.capacity := 20

!insert (banquet10, table34) into ReservationTable

!new BusDriver('busdriver10')
!busdriver10.name := 'Adebayo Adeyemi'

!insert (banquet10, busdriver10) into BanquetBusDriver

!new HeadWaiter('headwaiter10')
!headwaiter10.name := 'Suzana Ilic'
!headwaiter10.dateOfBirth := Date('1980-01-01')  -- Arbitrary date of birth
!headwaiter10.phoneNumber := '4545454545'        -- Arbitrary phone number

!new Waiter('waiter20')
!waiter20.name := 'Laila Ahmadi'
!waiter20.dateOfBirth := Date('1993-01-01')      -- Arbitrary date of birth
!waiter20.phoneNumber := '5656565656'            -- Arbitrary phone number
!waiter20.spokenLanguage := #English

!new Waiter('waiter21')
!waiter21.name := 'Maxime Lefevre'
!waiter21.dateOfBirth := Date('1995-01-01')      -- Arbitrary date of birth
!waiter21.phoneNumber := '6767676767'            -- Arbitrary phone number
!waiter21.spokenLanguage := #English

!insert (headwaiter10, waiter20) into HeadWaiterWaiter
!insert (headwaiter10, waiter21) into HeadWaiterWaiter

!insert (banquet10, waiter20) into ReservationWaiter
!insert (banquet10, waiter21) into ReservationWaiter

!new Individual('individualReservation7')
!individualReservation7.date := Date('2023-02-10')
!individualReservation7.time := Time('18:30')
!individualReservation7.numberPeople := 1
!individualReservation7.name := 'Marco Romano'
!individualReservation7.phoneNumber := '7878787878'  -- Arbitrary phone number
!individualReservation7.seating := #Inside
!individualReservation7.smoking := #NonSmoking
!individualReservation7.number := 7

!insert (restaurant13, individualReservation7) into RestaurantReservation

!new Table('table35')
!table35.number := 15
!table35.description := 'Near the fireplace'
!table35.capacity := 4

!insert (individualReservation7, table35) into ReservationTable

!new Waiter('waiter22')
!waiter22.name := 'Camila Santos'
!waiter22.dateOfBirth := Date('1992-01-01')     -- Arbitrary date of birth
!waiter22.phoneNumber := '7878787878'           -- Arbitrary phone number
!waiter22.spokenLanguage := #English

!insert (headwaiter10, waiter22) into HeadWaiterWaiter
!insert (individualReservation7, waiter22) into ReservationWaiter

!new MenuItem('menuitem18')
!menuitem18.description := 'New Zealand lamb roasted with a blend of herbs'
!menuitem18.prepTime := 45.0
!menuitem18.classification := #Main

!insert (menuitem18, chef14) into MenuItemChef

!new FoodItem('fooditem28')
!fooditem28.number := 28
!fooditem28.description := 'Lamb'
!fooditem28.unit := #Pound

!new FoodItem('fooditem29')
!fooditem29.number := 29
!fooditem29.description := 'Mixed Herbs'
!fooditem29.unit := #Ounce

!insert (menuitem18, fooditem28) into MenuItemFoodItem
!insert (menuitem18, fooditem29) into MenuItemFoodItem

!new MenuItem('menuitem19')
!menuitem19.description := 'Traditional Middle-Eastern dessert with honey and nuts'
!menuitem19.prepTime := 20.0
!menuitem19.classification := #Dessert

!insert (menuitem19, chef14) into MenuItemChef

!new FoodItem('fooditem30')
!fooditem30.number := 30
!fooditem30.description := 'Phyllo Dough'
!fooditem30.unit := #Sheet

!new FoodItem('fooditem31')
!fooditem31.number := 31
!fooditem31.description := 'Walnuts'
!fooditem31.unit := #Pound

!insert (menuitem19, fooditem30) into MenuItemFoodItem
!insert (menuitem19, fooditem31) into MenuItemFoodItem

!new Allergen('allergen12')
!allergen12.type := #Nuts

!insert (fooditem31, allergen12) into FoodItemAllergen

!new RegularCustomer('customer9')
!customer9.name := 'Marco Romano'
!customer9.prefferedLanguage := #Italian

!insert (individualReservation7, customer9) into ReservationCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 122 | 0.00% |
| Multiplicities Errors | 0 | 24 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 9 | 0.00% |
| Phones | 0 | 8 | 0.00% |

## Category edge
```
!new Restaurant('restaurant16')
!restaurant16.name := 'World Palate Collective'

!new Owner('owner32')
!owner32.name := 'Aisha El-Aziz'
!owner32.percentageShares := 40

!new Owner('owner33')
!owner33.name := 'Jiro Tanaka'
!owner33.percentageShares := 30

!new Owner('owner34')
!owner34.name := 'Carla Hernandez'
!owner34.percentageShares := 30

!insert (restaurant16, owner32) into RestaurantOwner
!insert (restaurant16, owner33) into RestaurantOwner
!insert (restaurant16, owner34) into RestaurantOwner

!new Banquet('banquet13')
!banquet13.date := Date('2024-06-21')
!banquet13.time := Time('19:00')
!banquet13.groupName := 'Culinary Enthusiasts Society'
!banquet13.numberPeople := 50
!banquet13.paymentMethod := #Cash

!insert (restaurant16, banquet13) into RestaurantReservation

!new Table('table42')
!table42.number := 501
!table42.description := 'Sunset Serenity'
!table42.capacity := 25

!new Table('table43')
!table43.number := 502
!table43.description := 'Morning Glow'
!table43.capacity := 25

!insert (banquet13, table42) into ReservationTable
!insert (banquet13, table43) into ReservationTable

!new BusDriver('busdriver13')
!busdriver13.name := 'Rosa Leone'

!insert (banquet13, busdriver13) into BanquetBusDriver

!new HeadWaiter('headwaiter12')
!headwaiter12.name := 'Ophélie Dubois'
!headwaiter12.dateOfBirth := Date('1975-01-01') -- Arbitrary date of birth
!headwaiter12.phoneNumber := '1231231234'       -- Arbitrary phone number

!new Waiter('waiter27')
!waiter27.name := 'Julio Ramirez'
!waiter27.dateOfBirth := Date('1992-01-01')     -- Arbitrary date of birth
!waiter27.phoneNumber := '2222222222'           -- Arbitrary phone number
!waiter27.spokenLanguage := #English

!new Waiter('waiter28')
!waiter28.name := 'Nina Blum'
!waiter28.dateOfBirth := Date('1989-01-01')     -- Arbitrary date of birth
!waiter28.phoneNumber := '3333333333'           -- Arbitrary phone number
!waiter28.spokenLanguage := #English

!insert (headwaiter12, waiter27) into HeadWaiterWaiter
!insert (headwaiter12, waiter28) into HeadWaiterWaiter

!insert (banquet13, waiter27) into ReservationWaiter
!insert (banquet13, waiter28) into ReservationWaiter

!new Manager('manager3')
!manager3.name := 'Luca Kimura'
!manager3.dateOfBirth := Date('1980-01-01')     -- Arbitrary date of birth
!manager3.phoneNumber := '4444444444'           -- Arbitrary phone number

!new Chef('chef16')
!chef16.name := 'Hiroshi Morimoto'
!chef16.dateOfBirth := Date('1965-01-01')       -- Arbitrary date of birth
!chef16.phoneNumber := '5555555555'             -- Arbitrary phone number

!new Cook('cook19')
!cook19.name := 'Mei Zhang'
!cook19.dateOfBirth := Date('1988-01-01')       -- Arbitrary date of birth
!cook19.phoneNumber := '6666666666'             -- Arbitrary phone number
!cook19.yearsOfExperience := 4

!insert (chef16, cook19) into ChefCook

!new MenuItem('menuitem22')
!menuitem22.description := 'Spicy Tuna Tartare'
!menuitem22.prepTime := 20.0
!menuitem22.classification := #Apetizer

!insert (menuitem22, chef16) into MenuItemChef

!new Allergen('allergen14')
!allergen14.type := #Seafood

!new FoodItem('fooditem36')
!fooditem36.number := 36
!fooditem36.description := 'Tuna'
!fooditem36.unit := #Gram

!insert (fooditem36, allergen14) into FoodItemAllergen
!insert (menuitem22, fooditem36) into MenuItemFoodItem

!new Chef('chef17')
!chef17.name := 'Khalid Haddadi'
!chef17.dateOfBirth := Date('1975-01-01')       -- Arbitrary date of birth
!chef17.phoneNumber := '7777777777'             -- Arbitrary phone number

!new Cook('cook20')
!cook20.name := 'Zainab Bader'
!cook20.dateOfBirth := Date('1992-01-01')       -- Arbitrary date of birth
!cook20.phoneNumber := '8888888888'             -- Arbitrary phone number
!cook20.yearsOfExperience := 5

!insert (chef17, cook20) into ChefCook

!new MenuItem('menuitem23')
!menuitem23.description := 'Moroccan Quinoa Tagine'
!menuitem23.prepTime := 30.0
!menuitem23.classification := #Main

!insert (menuitem23, chef17) into MenuItemChef

!new Chef('chef18')
!chef18.name := 'Isabella Ruiz'
!chef18.dateOfBirth := Date('1978-01-01')       -- Arbitrary date of birth
!chef18.phoneNumber := '9999999999'             -- Arbitrary phone number

!new Cook('cook21')
!cook21.name := 'Pedro Marques'
!cook21.dateOfBirth := Date('1994-01-01')       -- Arbitrary date of birth
!cook21.phoneNumber := '1010101010'             -- Arbitrary phone number
!cook21.yearsOfExperience := 3

!insert (chef18, cook21) into ChefCook

!new MenuItem('menuitem24')
!menuitem24.description := 'Churros with Chocolate Sauce'
!menuitem24.prepTime := 25.0
!menuitem24.classification := #Dessert

!insert (menuitem24, chef18) into MenuItemChef

!new FoodItem('fooditem37')
!fooditem37.number := 37
!fooditem37.description := 'Dough'
!fooditem37.unit := #Pound

!new FoodItem('fooditem38')
!fooditem38.number := 38
!fooditem38.description := 'Chocolate'
!fooditem38.unit := #Ounce

!insert (menuitem24, fooditem37) into MenuItemFoodItem
!insert (menuitem24, fooditem38) into MenuItemFoodItem

!new Allergen('allergen15')
!allergen15.type := #Gluten

!insert (fooditem37, allergen15) into FoodItemAllergen

!new RegularCustomer('customer12')
!customer12.name := 'Gregory Williams'
!customer12.prefferedLanguage := #German

!insert (banquet13, customer12) into ReservationCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 126 | 0.00% |
| Multiplicities Errors | 0 | 23 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 11 | 0.00% |
| Phones | 0 | 10 | 0.00% |

## Category invalid
```
!new Restaurant('restaurant10')
!restaurant10.name := 'Cuisine Rendezvous'

!new Owner('owner19')
!owner19.name := 'Yuki Nishikawa'
!owner19.percentageShares := 70

!new Owner('owner20')
!owner20.name := 'Markus Bauer'
!owner20.percentageShares := 30

!insert (restaurant10, owner19) into RestaurantOwner
!insert (restaurant10, owner20) into RestaurantOwner

!new Banquet('banquet8')
!banquet8.date := Date('2023-10-20')
!banquet8.time := Time('13:00')
!banquet8.groupName := 'Global Tech Summit Organizers'
!banquet8.numberPeople := 50
!banquet8.paymentMethod := #CreditCard

!insert (restaurant10, banquet8) into RestaurantReservation

!new Table('table24')
!table24.number := 301
!table24.description := 'Deluxe conference table'
!table24.capacity := 20

!new Table('table25')
!table25.number := 302
!table25.description := 'Executive round table'
!table25.capacity := 12

!new Table('table26')
!table26.number := 303
!table26.description := 'High-top discussion table'
!table26.capacity := 10

!insert (banquet8, table24) into ReservationTable
!insert (banquet8, table25) into ReservationTable
!insert (banquet8, table26) into ReservationTable

!new BusDriver('busdriver8')
!busdriver8.name := 'Alma Johansson'

!insert (banquet8, busdriver8) into BanquetBusDriver

!new HeadWaiter('headwaiter8')
!headwaiter8.name := 'Santiago Gracia'
!headwaiter8.dateOfBirth := Date('1980-01-01')  -- Arbitrary date of birth
!headwaiter8.phoneNumber := '4141414141'        -- Arbitrary phone number

!new Waiter('waiter15')
!waiter15.name := 'Rui Chen'
!waiter15.dateOfBirth := Date('1993-01-01')     -- Arbitrary date of birth
!waiter15.phoneNumber := '4242424242'           -- Arbitrary phone number
!waiter15.spokenLanguage := #English

!new Waiter('waiter16')
!waiter16.name := 'Isabel Wilson'
!waiter16.dateOfBirth := Date('1991-01-01')     -- Arbitrary date of birth
!waiter16.phoneNumber := '4343434343'           -- Arbitrary phone number
!waiter16.spokenLanguage := #English

!insert (headwaiter8, waiter15) into HeadWaiterWaiter
!insert (headwaiter8, waiter16) into HeadWaiterWaiter

!insert (banquet8, waiter15) into ReservationWaiter
!insert (banquet8, waiter16) into ReservationWaiter
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 11 | 0.00% |
| Invariants Errors (Not included on General) | 1 | 4 | 25.00% |

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (2) `Reservation::TablesCapacityGreaterThanPeople': FAILED.
```

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 4 | 0.00% |
| Phones | 0 | 3 | 0.00% |

## Generation 3 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 504 | 0.00% |
| Multiplicities Errors | 0 | 86 | 0.00% |
| Invariants Errors | 0 | 16 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 11 | 0.00% |
| Invariants Errors (Not included on General) | 1 | 4 | 25.00% |

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (2) `Reservation::TablesCapacityGreaterThanPeople': FAILED.
```

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 36 | 0.00% |
| Phones | 0 | 32 | 0.00% |

# Generation 4
## Category baseline
```
!new Restaurant('restaurant20')
!restaurant20.name := 'Alpen Gourmet'

!new Owner('owner42')
!owner42.name := 'Hans Müller'
!owner42.percentageShares := 60

!new Owner('owner43')
!owner43.name := 'Emma Schneider'
!owner43.percentageShares := 40

!insert (restaurant20, owner42) into RestaurantOwner
!insert (restaurant20, owner43) into RestaurantOwner

!new Table('table51')
!table51.number := 1
!table51.description := 'Elegant round table with a view of the Alps.'
!table51.capacity := 4

!new Table('table52')
!table52.number := 2
!table52.description := 'Private booth with a vintage wine rack.'
!table52.capacity := 2

!new Table('table53')
!table53.number := 3
!table53.description := 'Luxurious long table in the main dining hall.'
!table53.capacity := 8

!new RegularCustomer('customer15')
!customer15.name := 'Franziska Haas'
!customer15.prefferedLanguage := #German

!new RegularCustomer('customer16')
!customer16.name := 'John Doe'
!customer16.prefferedLanguage := #English

!new Individual('individualReservation10')
!individualReservation10.date := Date('2024-01-18')
!individualReservation10.time := Time('18:45')
!individualReservation10.numberPeople := 1
!individualReservation10.name := 'Franziska Haas'
!individualReservation10.phoneNumber := '5555555555'  -- Arbitrary phone number
!individualReservation10.seating := #Inside
!individualReservation10.smoking := #NonSmoking
!individualReservation10.number := 10

!insert (restaurant20, individualReservation10) into RestaurantReservation
!insert (individualReservation10, customer15) into ReservationCustomer
!insert (individualReservation10, table52) into ReservationTable

!new Banquet('banquet17')
!banquet17.date := Date('2024-01-18')
!banquet17.time := Time('20:00')
!banquet17.groupName := 'John Doe\'s Business Meeting'
!banquet17.numberPeople := 10
!banquet17.paymentMethod := #CreditCard

!insert (restaurant20, banquet17) into RestaurantReservation
!insert (banquet17, customer16) into ReservationCustomer
!insert (banquet17, table53) into ReservationTable
!insert (banquet17, table51) into ReservationTable

!new Waiter('waiter36')
!waiter36.name := 'Clara Vogt'
!waiter36.dateOfBirth := Date('1985-01-01')     -- Arbitrary date of birth
!waiter36.phoneNumber := '6666666666'           -- Arbitrary phone number
!waiter36.spokenLanguage := #German

!new Waiter('waiter37')
!waiter37.name := 'Karl Weber'
!waiter37.dateOfBirth := Date('1991-01-01')     -- Arbitrary date of birth
!waiter37.phoneNumber := '7777777777'           -- Arbitrary phone number
!waiter37.spokenLanguage := #German

!insert (individualReservation10, waiter36) into ReservationWaiter
!insert (banquet17, waiter36) into ReservationWaiter
!insert (banquet17, waiter37) into ReservationWaiter

!new HeadWaiter('headwaiter15')
!headwaiter15.name := 'Anja Fischer'
!headwaiter15.dateOfBirth := Date('1980-01-01')  -- Arbitrary date of birth
!headwaiter15.phoneNumber := '8888888888'        -- Arbitrary phone number

!insert (headwaiter15, waiter36) into HeadWaiterWaiter
!insert (headwaiter15, waiter37) into HeadWaiterWaiter

!new BusDriver('busdriver17')
!busdriver17.name := 'Lukas Meier'

!insert (banquet17, busdriver17) into BanquetBusDriver

!new Chef('chef21')
!chef21.name := 'Dietrich Jaeger'
!chef21.dateOfBirth := Date('1960-01-01')       -- Arbitrary date of birth
!chef21.phoneNumber := '9999999999'             -- Arbitrary phone number

!new Cook('cook25')
!cook25.name := 'Gustav Zimmermann'
!cook25.dateOfBirth := Date('1983-01-01')       -- Arbitrary date of birth
!cook25.phoneNumber := '1010101010'             -- Arbitrary phone number
!cook25.yearsOfExperience := 5

!insert (chef21, cook25) into ChefCook

!new MenuItem('menuitem28')
!menuitem28.description := 'Traditional Swiss dish with veal, mushrooms, and cream sauce.'
!menuitem28.prepTime := 60.0
!menuitem28.classification := #Main

!insert (menuitem28, chef21) into MenuItemChef

!new FoodItem('fooditem46')
!fooditem46.number := 46
!fooditem46.description := 'Veal'
!fooditem46.purchaseFlag := true
!fooditem46.unit := #Pound

!new FoodItem('fooditem47')
!fooditem47.number := 47
!fooditem47.description := 'Mushrooms'
!fooditem47.purchaseFlag := true
!fooditem47.unit := #Pound

!new FoodItem('fooditem48')
!fooditem48.number := 48
!fooditem48.description := 'Cream'
!fooditem48.purchaseFlag := true
!fooditem48.unit := #Ounce

!insert (menuitem28, fooditem46) into MenuItemFoodItem
!insert (menuitem28, fooditem47) into MenuItemFoodItem
!insert (menuitem28, fooditem48) into MenuItemFoodItem

!new MenuItem('menuitem29')
!menuitem29.description := 'Light meringue with fresh raspberries and cream.'
!menuitem29.prepTime := 30.0
!menuitem29.classification := #Dessert

!insert (menuitem29, chef21) into MenuItemChef

!new FoodItem('fooditem49')
!fooditem49.number := 49
!fooditem49.description := 'Meringue'
!fooditem49.purchaseFlag := true
!fooditem49.unit := #Gram

!new FoodItem('fooditem50')
!fooditem50.number := 50
!fooditem50.description := 'Raspberries'
!fooditem50.purchaseFlag := true
!fooditem50.unit := #Gram

!insert (menuitem29, fooditem49) into MenuItemFoodItem
!insert (menuitem29, fooditem50) into MenuItemFoodItem
!insert (menuitem29, fooditem48) into MenuItemFoodItem

!new Allergen('allergen17')
!allergen17.type := #Lactose

!insert (fooditem48, allergen17) into FoodItemAllergen
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 126 | 0.00% |
| Multiplicities Errors | 0 | 25 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 7 | 0.00% |
| Phones | 0 | 6 | 0.00% |

## Category boundary
```
!new Restaurant('restaurant19')
!restaurant19.name := 'Sunny Side Bistro'

!new Owner('owner39')
!owner39.name := 'Olga Ivanova'
!owner39.percentageShares := 20

!new Owner('owner40')
!owner40.name := 'Mateo Garcia'
!owner40.percentageShares := 30

!new Owner('owner41')
!owner41.name := 'Amneet Kaur'
!owner41.percentageShares := 50

!insert (restaurant19, owner39) into RestaurantOwner
!insert (restaurant19, owner40) into RestaurantOwner
!insert (restaurant19, owner41) into RestaurantOwner

!new RegularCustomer('customer14')
!customer14.name := 'Pierre Leblanc'
!customer14.prefferedLanguage := #English

!new HeadWaiter('headwaiter14')
!headwaiter14.name := 'Naomi Okafor'
!headwaiter14.dateOfBirth := Date('1983-01-01')  -- Arbitrary date of birth
!headwaiter14.phoneNumber := '1111222233'        -- Arbitrary phone number

!new Waiter('waiter35')
!waiter35.name := 'Ricardo Sousa'
!waiter35.dateOfBirth := Date('2000-01-01')      -- Arbitrary date of birth
!waiter35.phoneNumber := '2222333344'            -- Arbitrary phone number
!waiter35.spokenLanguage := #English

!insert (headwaiter14, waiter35) into HeadWaiterWaiter

!new Chef('chef20')
!chef20.name := 'Sophie Dupont'
!chef20.dateOfBirth := Date('1991-01-01')        -- Arbitrary date of birth
!chef20.phoneNumber := '3333444455'              -- Arbitrary phone number

!new Cook('cook24')
!cook24.name := 'Juanito Cruz'
!cook24.dateOfBirth := Date('2002-01-01')        -- Arbitrary date of birth
!cook24.phoneNumber := '4444555566'              -- Arbitrary phone number
!cook24.yearsOfExperience := 0

!insert (chef20, cook24) into ChefCook

!new BusDriver('busdriver16')
!busdriver16.name := 'Alice Jensen'

!new Table('table50')
!table50.number := 5
!table50.description := 'Outdoor garden view'
!table50.capacity := 4

!new MenuItem('menuitem27')
!menuitem27.description := 'A vibrant plate of mixed grilled vegetables and quinoa.'
!menuitem27.prepTime := 20.0
!menuitem27.classification := #Main

!insert (menuitem27, chef20) into MenuItemChef

!new FoodItem('fooditem45')
!fooditem45.number := 45
!fooditem45.description := 'Quinoa'
!fooditem45.purchaseFlag := true
!fooditem45.unit := #Gram

!insert (menuitem27, fooditem45) into MenuItemFoodItem

!new Allergen('allergen16')
!allergen16.type := #Nuts

!insert (fooditem45, allergen16) into FoodItemAllergen

!new Banquet('banquet16')
!banquet16.date := Date('2023-12-20')
!banquet16.time := Time('18:30')
!banquet16.groupName := 'Annual Family Gathering'
!banquet16.numberPeople := 4
!banquet16.paymentMethod := #Cash

!insert (restaurant19, banquet16) into RestaurantReservation
!insert (banquet16, table50) into ReservationTable
!insert (banquet16, waiter35) into ReservationWaiter
!insert (banquet16, busdriver16) into BanquetBusDriver

!new ItemOrder('itemorder4')
!itemorder4.time := Time('18:45')

!insert (banquet16, itemorder4) into ReservationItemOrdered
!insert (itemorder4, menuitem27) into ItemOrderMenuItem
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 71 | 0.00% |
| Multiplicities Errors | 0 | 14 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 5 | 0.00% |
| Phones | 0 | 4 | 0.00% |

## Category complex
```
!new Restaurant('restaurant18')
!restaurant18.name := 'La Taverne Artisanale'

!new Owner('owner37')
!owner37.name := 'Clare O\'Sullivan'
!owner37.percentageShares := 50

!new Owner('owner38')
!owner38.name := 'Giovanni Testa'
!owner38.percentageShares := 50

!insert (restaurant18, owner37) into RestaurantOwner
!insert (restaurant18, owner38) into RestaurantOwner

!new Chef('chef19')
!chef19.name := 'Hans Kübler'
!chef19.dateOfBirth := Date('1970-01-01')        -- Arbitrary date of birth
!chef19.phoneNumber := '5551112222'              -- Arbitrary phone number

!new Cook('cook22')
!cook22.name := 'Julia Martinez'
!cook22.dateOfBirth := Date('1986-01-01')        -- Arbitrary date of birth
!cook22.phoneNumber := '1234123412'              -- Arbitrary phone number
!cook22.yearsOfExperience := 7

!new Cook('cook23')
!cook23.name := 'Shu Lin'
!cook23.dateOfBirth := Date('1995-01-01')        -- Arbitrary date of birth
!cook23.phoneNumber := '4321432143'              -- Arbitrary phone number
!cook23.yearsOfExperience := 4

!insert (chef19, cook22) into ChefCook
!insert (chef19, cook23) into ChefCook

!new Banquet('banquet15')
!banquet15.date := Date('2023-04-20')
!banquet15.time := Time('13:00')
!banquet15.groupName := 'European History Conference Luncheon'
!banquet15.numberPeople := 30
!banquet15.paymentMethod := #CreditCard

!insert (restaurant18, banquet15) into RestaurantReservation

!new Table('table47')
!table47.number := 20
!table47.description := 'Upper level with skyline view'
!table47.capacity := 25

!new Table('table48')
!table48.number := 21
!table48.description := 'Adjacent for collaborative activities'
!table48.capacity := 12

!insert (banquet15, table47) into ReservationTable
!insert (banquet15, table48) into ReservationTable

!new BusDriver('busdriver15')
!busdriver15.name := 'Antoni Chmielewski'

!insert (banquet15, busdriver15) into BanquetBusDriver

!new HeadWaiter('headwaiter13')
!headwaiter13.name := 'Laura Varga'
!headwaiter13.dateOfBirth := Date('1985-01-01')  -- Arbitrary date of birth
!headwaiter13.phoneNumber := '5553334444'        -- Arbitrary phone number

!new Waiter('waiter32')
!waiter32.name := 'Ahmed Rahman'
!waiter32.dateOfBirth := Date('1991-01-01')      -- Arbitrary date of birth
!waiter32.phoneNumber := '6667778888'            -- Arbitrary phone number
!waiter32.spokenLanguage := #English

!new Waiter('waiter33')
!waiter33.name := 'Nina Smirnova'
!waiter33.dateOfBirth := Date('1990-01-01')      -- Arbitrary date of birth
!waiter33.phoneNumber := '7778889999'            -- Arbitrary phone number
!waiter33.spokenLanguage := #English

!insert (headwaiter13, waiter32) into HeadWaiterWaiter
!insert (headwaiter13, waiter33) into HeadWaiterWaiter

!insert (banquet15, waiter32) into ReservationWaiter
!insert (banquet15, waiter33) into ReservationWaiter

!new Individual('individualReservation9')
!individualReservation9.date := Date('2023-04-20')
!individualReservation9.time := Time('14:30')
!individualReservation9.numberPeople := 1
!individualReservation9.name := 'Isabella Neri'
!individualReservation9.phoneNumber := '8884441111'  -- Arbitrary phone number
!individualReservation9.seating := #Inside
!individualReservation9.smoking := #NonSmoking
!individualReservation9.number := 9

!insert (restaurant18, individualReservation9) into RestaurantReservation

!new Table('table49')
!table49.number := 14
!table49.description := 'Cozy corner with art decor'
!table49.capacity := 2

!insert (individualReservation9, table49) into ReservationTable

!new Waiter('waiter34')
!waiter34.name := 'Stefan Novak'
!waiter34.dateOfBirth := Date('1987-01-01')     -- Arbitrary date of birth
!waiter34.phoneNumber := '9992221111'           -- Arbitrary phone number
!waiter34.spokenLanguage := #English

!insert (headwaiter13, waiter34) into HeadWaiterWaiter
!insert (individualReservation9, waiter34) into ReservationWaiter

!new MenuItem('menuitem25')
!menuitem25.description := 'Traditional French chicken dish slow-cooked in wine'
!menuitem25.prepTime := 90.0
!menuitem25.classification := #Main

!insert (menuitem25, chef19) into MenuItemChef

!new FoodItem('fooditem39')
!fooditem39.number := 39
!fooditem39.description := 'Free-Range Chicken'
!fooditem39.unit := #Pound

!new FoodItem('fooditem40')
!fooditem40.number := 40
!fooditem40.description := 'Burgundy Wine'
!fooditem40.unit := #Ounce

!new FoodItem('fooditem41')
!fooditem41.number := 41
!fooditem41.description := 'Pearl Onions'
!fooditem41.unit := #Gram

!insert (menuitem25, fooditem39) into MenuItemFoodItem
!insert (menuitem25, fooditem40) into MenuItemFoodItem
!insert (menuitem25, fooditem41) into MenuItemFoodItem

!new MenuItem('menuitem26')
!menuitem26.description := 'Sparkling elderflower drink with a hint of lime'
!menuitem26.prepTime := 5.0
!menuitem26.classification := #Beverage

!insert (menuitem26, chef19) into MenuItemChef

!new FoodItem('fooditem42')
!fooditem42.number := 42
!fooditem42.description := 'Elderflower Cordial'
!fooditem42.unit := #Ounce

!new FoodItem('fooditem43')
!fooditem43.number := 43
!fooditem43.description := 'Sparkling Water'
!fooditem43.unit := #Ounce

!new FoodItem('fooditem44')
!fooditem44.number := 44
!fooditem44.description := 'Fresh Lime'
!fooditem44.unit := #Gram

!insert (menuitem26, fooditem42) into MenuItemFoodItem
!insert (menuitem26, fooditem43) into MenuItemFoodItem
!insert (menuitem26, fooditem44) into MenuItemFoodItem

!new RegularCustomer('customer13')
!customer13.name := 'Isabella Neri'
!customer13.prefferedLanguage := #Italian

!insert (individualReservation9, customer13) into ReservationCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 130 | 0.00% |
| Multiplicities Errors | 0 | 25 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 9 | 0.00% |
| Phones | 0 | 8 | 0.00% |

## Category edge
```
!new Restaurant('restaurant21')
!restaurant21.name := 'Simple Delights'

!new Owner('owner44')
!owner44.name := 'Rafael Nogueira'
!owner44.percentageShares := 60

!new Owner('owner45')
!owner45.name := 'Elise Fischer'
!owner45.percentageShares := 40

!insert (restaurant21, owner44) into RestaurantOwner
!insert (restaurant21, owner45) into RestaurantOwner

!new Individual('individualReservation11')
!individualReservation11.date := Date('2024-01-01')
!individualReservation11.time := Time('15:30')
!individualReservation11.numberPeople := 3
!individualReservation11.name := 'Emilia Watson'
!individualReservation11.phoneNumber := '5552223333'  -- Arbitrary phone number
!individualReservation11.seating := #Inside
!individualReservation11.smoking := #NonSmoking
!individualReservation11.number := 11

!insert (restaurant21, individualReservation11) into RestaurantReservation

!new Table('table54')
!table54.number := 1
!table54.description := 'Cozy Corner'
!table54.capacity := 4

!insert (individualReservation11, table54) into ReservationTable

!new Waiter('waiter38')
!waiter38.name := 'Matteo Russo'
!waiter38.dateOfBirth := Date('1985-01-01')     -- Arbitrary date of birth
!waiter38.phoneNumber := '1112223334'           -- Arbitrary phone number
!waiter38.spokenLanguage := #Spanish

!new HeadWaiter('headwaiter16')
!headwaiter16.name := 'Greta Müller'
!headwaiter16.dateOfBirth := Date('1980-01-01') -- Arbitrary date of birth
!headwaiter16.phoneNumber := '2223334445'       -- Arbitrary phone number

!insert (headwaiter16, waiter38) into HeadWaiterWaiter
!insert (individualReservation11, waiter38) into ReservationWaiter

!new Manager('manager4')
!manager4.name := 'Sonja Petrovic'
!manager4.dateOfBirth := Date('1975-01-01')     -- Arbitrary date of birth
!manager4.phoneNumber := '3334445556'           -- Arbitrary phone number

!new Chef('chef22')
!chef22.name := 'Anton Dubois'
!chef22.dateOfBirth := Date('1965-01-01')       -- Arbitrary date of birth
!chef22.phoneNumber := '4445556667'             -- Arbitrary phone number

!new Cook('cook26')
!cook26.name := 'Sophie Chan'
!cook26.dateOfBirth := Date('1990-01-01')       -- Arbitrary date of birth
!cook26.phoneNumber := '5556667778'             -- Arbitrary phone number
!cook26.yearsOfExperience := 5

!insert (chef22, cook26) into ChefCook

!new MenuItem('menuitem30')
!menuitem30.description := 'Fresh Avocado Salad'
!menuitem30.prepTime := 15.0
!menuitem30.classification := #Apetizer

!insert (menuitem30, chef22) into MenuItemChef

!new Chef('chef23')
!chef23.name := 'Jose Laporte'
!chef23.dateOfBirth := Date('1970-01-01')       -- Arbitrary date of birth
!chef23.phoneNumber := '6667778889'             -- Arbitrary phone number

!new Cook('cook27')
!cook27.name := 'Ahmed Omari'
!cook27.dateOfBirth := Date('1992-01-01')       -- Arbitrary date of birth
!cook27.phoneNumber := '7778889990'             -- Arbitrary phone number
!cook27.yearsOfExperience := 3

!insert (chef23, cook27) into ChefCook

!new MenuItem('menuitem31')
!menuitem31.description := 'Grilled Chicken Breasts'
!menuitem31.prepTime := 30.0
!menuitem31.classification := #Main

!insert (menuitem31, chef23) into MenuItemChef

!new Chef('chef24')
!chef24.name := 'Maria Bennett'
!chef24.dateOfBirth := Date('1980-01-01')       -- Arbitrary date of birth
!chef24.phoneNumber := '8889990001'             -- Arbitrary phone number

!new Cook('cook28')
!cook28.name := 'Nia Frazier'
!cook28.dateOfBirth := Date('1991-01-01')       -- Arbitrary date of birth
!cook28.phoneNumber := '9990001112'             -- Arbitrary phone number
!cook28.yearsOfExperience := 4

!insert (chef24, cook28) into ChefCook

!new MenuItem('menuitem32')
!menuitem32.description := 'Classic Apple Pie'
!menuitem32.prepTime := 40.0
!menuitem32.classification := #Dessert

!insert (menuitem32, chef24) into MenuItemChef

!new FoodItem('fooditem51')
!fooditem51.number := 51
!fooditem51.description := 'Pastry Dough'
!fooditem51.unit := #Pound
!fooditem51.purchaseFlag := true

!new FoodItem('fooditem52')
!fooditem52.number := 52
!fooditem52.description := 'Apples'
!fooditem52.unit := #Pound
!fooditem52.purchaseFlag := true

!new FoodItem('fooditem53')
!fooditem53.number := 53
!fooditem53.description := 'Cream'
!fooditem53.unit := #Ounce
!fooditem53.purchaseFlag := true

!insert (menuitem32, fooditem51) into MenuItemFoodItem
!insert (menuitem32, fooditem52) into MenuItemFoodItem
!insert (menuitem32, fooditem53) into MenuItemFoodItem

!new Allergen('allergen18')
!allergen18.type := #Gluten

!insert (fooditem51, allergen18) into FoodItemAllergen

!new Allergen('allergen19')
!allergen19.type := #Lactose

!insert (fooditem53, allergen19) into FoodItemAllergen

!new RegularCustomer('customer17')
!customer17.name := 'Emilia Watson'
!customer17.prefferedLanguage := #English
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 112 | 0.00% |
| Multiplicities Errors | 0 | 17 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 10 | 0.00% |
| Phones | 0 | 10 | 0.00% |

## Category invalid
```
!new Restaurant('restaurant14')
!restaurant14.name := 'The Artistic Plate'

!new Owner('owner28')
!owner28.name := 'Fatima El-Hassan'
!owner28.percentageShares := 50

!new Owner('owner29')
!owner29.name := 'Rafael Cortez'
!owner29.percentageShares := 50

!insert (restaurant14, owner28) into RestaurantOwner
!insert (restaurant14, owner29) into RestaurantOwner

!new Banquet('banquet11')
!banquet11.date := Date('2023-11-05')
!banquet11.time := Time('19:00')
!banquet11.groupName := 'Local Artists Collective'
!banquet11.numberPeople := 80
!banquet11.paymentMethod := #CreditCard

!insert (restaurant14, banquet11) into RestaurantReservation

!new Table('table36')
!table36.number := 401
!table36.description := 'Long exhibition table'
!table36.capacity := 20

!new Table('table37')
!table37.number := 402
!table37.description := 'Artistic round table'
!table37.capacity := 15

!new Table('table38')
!table38.number := 403
!table38.description := 'Square gallery table'
!table38.capacity := 10

!insert (banquet11, table36) into ReservationTable
!insert (banquet11, table37) into ReservationTable
!insert (banquet11, table38) into ReservationTable

!new BusDriver('busdriver11')
!busdriver11.name := 'Manoj Nair'

!insert (banquet11, busdriver11) into BanquetBusDriver

!new Waiter('waiter23')
!waiter23.name := 'Clara Fischer'
!waiter23.dateOfBirth := Date('1990-01-01')     -- Arbitrary date of birth
!waiter23.phoneNumber := '1231231234'           -- Arbitrary phone number
!waiter23.spokenLanguage := #English

!new Waiter('waiter24')
!waiter24.name := 'Luis Alvarez'
!waiter24.dateOfBirth := Date('1987-01-01')     -- Arbitrary date of birth
!waiter24.phoneNumber := '2342342345'           -- Arbitrary phone number
!waiter24.spokenLanguage := #English

!insert (banquet11, waiter23) into ReservationWaiter
!insert (banquet11, waiter24) into ReservationWaiter
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 2 | 9 | 22.22% |
| Invariants Errors (Not included on General) | 1 | 4 | 25.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `HeadWaiterWaiter':
  Object `waiter24' of class `Waiter' is connected to 0 objects of class `HeadWaiter'
  at association end `headWaiter' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `HeadWaiterWaiter':
  Object `waiter23' of class `Waiter' is connected to 0 objects of class `HeadWaiter'
  at association end `headWaiter' but the multiplicity is specified as `1'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (2) `Reservation::TablesCapacityGreaterThanPeople': FAILED.
```

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 3 | 0.00% |
| Phones | 0 | 2 | 0.00% |

## Generation 4 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 486 | 0.00% |
| Multiplicities Errors | 0 | 81 | 0.00% |
| Invariants Errors | 0 | 16 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 2 | 9 | 22.22% |
| Invariants Errors (Not included on General) | 1 | 4 | 25.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `HeadWaiterWaiter':
  Object `waiter24' of class `Waiter' is connected to 0 objects of class `HeadWaiter'
  at association end `headWaiter' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `HeadWaiterWaiter':
  Object `waiter23' of class `Waiter' is connected to 0 objects of class `HeadWaiter'
  at association end `headWaiter' but the multiplicity is specified as `1'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (2) `Reservation::TablesCapacityGreaterThanPeople': FAILED.
```

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 34 | 0.00% |
| Phones | 0 | 30 | 0.00% |

# Generation 5
## Category baseline
```
!new Restaurant('restaurant25')
!restaurant25.name := 'Lotus Blossom'

!new Owner('owner52')
!owner52.name := 'Somchai Chaiyaratana'
!owner52.percentageShares := 50

!new Owner('owner53')
!owner53.name := 'Naree Wong'
!owner53.percentageShares := 50

!insert (restaurant25, owner52) into RestaurantOwner
!insert (restaurant25, owner53) into RestaurantOwner

!new Table('table63')
!table63.number := 1
!table63.description := 'Intimate table overlooking the koi fish pond.'
!table63.capacity := 3

!new Table('table64')
!table64.number := 2
!table64.description := 'Traditional Thai seating with floor cushions.'
!table64.capacity := 4

!new Table('table65')
!table65.number := 3
!table65.description := 'Large family table in the central dining area.'
!table65.capacity := 12

!new RegularCustomer('customer20')
!customer20.name := 'Chompoo Kaew'
!customer20.prefferedLanguage := #English

!new RegularCustomer('customer21')
!customer21.name := 'David Johnson'
!customer21.prefferedLanguage := #English

!new Individual('individualReservation13')
!individualReservation13.date := Date('2024-02-14')
!individualReservation13.time := Time('17:45')
!individualReservation13.numberPeople := 1
!individualReservation13.name := 'Chompoo Kaew'
!individualReservation13.phoneNumber := '1234567890'  -- Arbitrary phone number
!individualReservation13.seating := #Inside
!individualReservation13.smoking := #NonSmoking
!individualReservation13.number := 13

!insert (restaurant25, individualReservation13) into RestaurantReservation
!insert (individualReservation13, customer20) into ReservationCustomer
!insert (individualReservation13, table63) into ReservationTable

!new Banquet('banquet21')
!banquet21.date := Date('2024-02-14')
!banquet21.time := Time('20:30')
!banquet21.groupName := 'David Johnson\'s Team Dinner'
!banquet21.numberPeople := 14
!banquet21.paymentMethod := #CreditCard

!insert (restaurant25, banquet21) into RestaurantReservation
!insert (banquet21, customer21) into ReservationCustomer
!insert (banquet21, table65) into ReservationTable
!insert (banquet21, table64) into ReservationTable

!new Waiter('waiter46')
!waiter46.name := 'Pimchai Prajun'
!waiter46.dateOfBirth := Date('1985-01-01')     -- Arbitrary date of birth
!waiter46.phoneNumber := '2345678901'           -- Arbitrary phone number
!waiter46.spokenLanguage := #English

!new Waiter('waiter47')
!waiter47.name := 'Somchai Rattanakosin'
!waiter47.dateOfBirth := Date('1990-01-01')     -- Arbitrary date of birth
!waiter47.phoneNumber := '3456789012'           -- Arbitrary phone number
!waiter47.spokenLanguage := #English

!insert (individualReservation13, waiter46) into ReservationWaiter
!insert (banquet21, waiter46) into ReservationWaiter
!insert (banquet21, waiter47) into ReservationWaiter

!new HeadWaiter('headwaiter20')
!headwaiter20.name := 'Jintana Preecha'
!headwaiter20.dateOfBirth := Date('1980-01-01')  -- Arbitrary date of birth
!headwaiter20.phoneNumber := '4567890123'        -- Arbitrary phone number

!insert (headwaiter20, waiter46) into HeadWaiterWaiter
!insert (headwaiter20, waiter47) into HeadWaiterWaiter

!new BusDriver('busdriver21')
!busdriver21.name := 'Ananda Saetang'

!insert (banquet21, busdriver21) into BanquetBusDriver

!new Chef('chef27')
!chef27.name := 'Noi Srisuphan'
!chef27.dateOfBirth := Date('1965-01-01')        -- Arbitrary date of birth
!chef27.phoneNumber := '5678901234'              -- Arbitrary phone number

!new Cook('cook32')
!cook32.name := 'Kanchana Sutham'
!cook32.dateOfBirth := Date('1995-01-01')        -- Arbitrary date of birth
!cook32.phoneNumber := '6789012345'              -- Arbitrary phone number
!cook32.yearsOfExperience := 4

!insert (chef27, cook32) into ChefCook

!new MenuItem('menuitem36')
!menuitem36.description := 'Spicy and sour Thai soup with shrimp.'
!menuitem36.prepTime := 40.0
!menuitem36.classification := #Apetizer

!insert (menuitem36, chef27) into MenuItemChef

!new FoodItem('fooditem61')
!fooditem61.number := 61
!fooditem61.description := 'Shrimp'
!fooditem61.purchaseFlag := true
!fooditem61.unit := #Pound

!new FoodItem('fooditem62')
!fooditem62.number := 62
!fooditem62.description := 'Lemongrass'
!fooditem62.purchaseFlag := true
!fooditem62.unit := #Gram

!new FoodItem('fooditem63')
!fooditem63.number := 63
!fooditem63.description := 'Chili'
!fooditem63.purchaseFlag := true
!fooditem63.unit := #Gram

!insert (menuitem36, fooditem61) into MenuItemFoodItem
!insert (menuitem36, fooditem62) into MenuItemFoodItem
!insert (menuitem36, fooditem63) into MenuItemFoodItem

!new Allergen('allergen22')
!allergen22.type := #Seafood

!insert (fooditem61, allergen22) into FoodItemAllergen

!new MenuItem('menuitem37')
!menuitem37.description := 'Sweet sticky rice served with ripe mango slices.'
!menuitem37.prepTime := 20.0
!menuitem37.classification := #Dessert

!insert (menuitem37, chef27) into MenuItemChef

!new FoodItem('fooditem64')
!fooditem64.number := 64
!fooditem64.description := 'Glutinous Rice'
!fooditem64.purchaseFlag := true
!fooditem64.unit := #Gram

!new FoodItem('fooditem65')
!fooditem65.number := 65
!fooditem65.description := 'Mango'
!fooditem65.purchaseFlag := true
!fooditem65.unit := #Gram

!new FoodItem('fooditem66')
!fooditem66.number := 66
!fooditem66.description := 'Coconut Milk'
!fooditem66.purchaseFlag := true
!fooditem66.unit := #Ounce

!insert (menuitem37, fooditem64) into MenuItemFoodItem
!insert (menuitem37, fooditem65) into MenuItemFoodItem
!insert (menuitem37, fooditem66) into MenuItemFoodItem
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 131 | 0.00% |
| Multiplicities Errors | 0 | 25 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 7 | 0.00% |
| Phones | 0 | 6 | 0.00% |

## Category boundary
```
!new Restaurant('restaurant24')
!restaurant24.name := 'Taste of Traditions'

!new Owner('owner50')
!owner50.name := 'Malik Sadiq'
!owner50.percentageShares := 33

!new Owner('owner51')
!owner51.name := 'Sofia Wang'
!owner51.percentageShares := 67

!insert (restaurant24, owner50) into RestaurantOwner
!insert (restaurant24, owner51) into RestaurantOwner

!new RegularCustomer('customer19')
!customer19.name := 'Lena Müller'
!customer19.prefferedLanguage := #German

!new HeadWaiter('headwaiter19')
!headwaiter19.name := 'Juan Carlos'
!headwaiter19.dateOfBirth := Date('1985-01-01') -- Arbitrary date of birth
!headwaiter19.phoneNumber := '1234567890'        -- Arbitrary phone number

!new Waiter('waiter45')
!waiter45.name := 'Federica Rossi'
!waiter45.dateOfBirth := Date('1992-01-01')     -- Arbitrary date of birth
!waiter45.phoneNumber := '2345678901'           -- Arbitrary phone number
!waiter45.spokenLanguage := #English

!insert (headwaiter19, waiter45) into HeadWaiterWaiter

!new Chef('chef26')
!chef26.name := 'Greta Nyman'
!chef26.dateOfBirth := Date('1980-01-01')       -- Arbitrary date of birth
!chef26.phoneNumber := '3456789012'             -- Arbitrary phone number

!new Cook('cook31')
!cook31.name := 'Vinod Sharma'
!cook31.dateOfBirth := Date('1985-01-01')       -- Arbitrary date of birth
!cook31.phoneNumber := '4567890123'             -- Arbitrary phone number
!cook31.yearsOfExperience := 7

!insert (chef26, cook31) into ChefCook

!new BusDriver('busdriver20')
!busdriver20.name := 'Joanne Lee'

!new Table('table61')
!table61.number := 15
!table61.description := 'Cozy corner booth'
!table61.capacity := 6

!new Table('table62')
!table62.number := 16
!table62.description := 'Community table'
!table62.capacity := 8

!new MenuItem('menuitem35')
!menuitem35.description := 'A rich and satisfying stew with seasonal vegetables.'
!menuitem35.prepTime := 35.0
!menuitem35.classification := #Main

!insert (menuitem35, chef26) into MenuItemChef

!new FoodItem('fooditem59')
!fooditem59.number := 59
!fooditem59.description := 'Beef Chunks'
!fooditem59.purchaseFlag := true
!fooditem59.unit := #Pound

!new FoodItem('fooditem60')
!fooditem60.number := 60
!fooditem60.description := 'Carrot'
!fooditem60.purchaseFlag := false
!fooditem60.unit := #Gram

!insert (menuitem35, fooditem59) into MenuItemFoodItem
!insert (menuitem35, fooditem60) into MenuItemFoodItem

!new Banquet('banquet20')
!banquet20.date := Date('2023-11-25')
!banquet20.time := Time('17:00')
!banquet20.groupName := 'Cultural Dinner Exchange'
!banquet20.numberPeople := 10
!banquet20.paymentMethod := #CreditCard

!insert (restaurant24, banquet20) into RestaurantReservation
!insert (banquet20, table61) into ReservationTable
!insert (banquet20, table62) into ReservationTable
!insert (banquet20, waiter45) into ReservationWaiter
!insert (banquet20, busdriver20) into BanquetBusDriver

!new ItemOrder('itemorder5')
!itemorder5.time := Time('17:20')

!insert (banquet20, itemorder5) into ReservationItemOrdered
!insert (itemorder5, menuitem35) into ItemOrderMenuItem
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 75 | 0.00% |
| Multiplicities Errors | 0 | 14 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 5 | 0.00% |
| Phones | 0 | 4 | 0.00% |

## Category complex
```
!new Restaurant('restaurant23')
!restaurant23.name := 'Fusion Flavors'

!new Owner('owner48')
!owner48.name := 'Maria dos Santos'
!owner48.percentageShares := 60

!new Owner('owner49')
!owner49.name := 'Li Wei'
!owner49.percentageShares := 40

!insert (restaurant23, owner48) into RestaurantOwner
!insert (restaurant23, owner49) into RestaurantOwner

!new Chef('chef25')
!chef25.name := 'Pierre Laurent'
!chef25.dateOfBirth := Date('1975-01-01')       -- Arbitrary date of birth
!chef25.phoneNumber := '1012345678'             -- Arbitrary phone number

!new Cook('cook29')
!cook29.name := 'Haruto Tanaka'
!cook29.dateOfBirth := Date('1983-01-01')       -- Arbitrary date of birth
!cook29.phoneNumber := '2012345678'             -- Arbitrary phone number
!cook29.yearsOfExperience := 10

!new Cook('cook30')
!cook30.name := 'Fatima Zahra'
!cook30.dateOfBirth := Date('1990-01-01')       -- Arbitrary date of birth
!cook30.phoneNumber := '3012345678'             -- Arbitrary phone number
!cook30.yearsOfExperience := 3

!insert (chef25, cook29) into ChefCook
!insert (chef25, cook30) into ChefCook

!new Banquet('banquet19')
!banquet19.date := Date('2023-07-15')
!banquet19.time := Time('19:00')
!banquet19.groupName := 'Corporate Networking Gala'
!banquet19.numberPeople := 38
!banquet19.paymentMethod := #Cash

!insert (restaurant23, banquet19) into RestaurantReservation

!new Table('table59')
!table59.number := 30
!table59.description := 'Main hall with extensive projection facilities'
!table59.capacity := 40

!insert (banquet19, table59) into ReservationTable

!new BusDriver('busdriver19')
!busdriver19.name := 'Luca Fortunato'

!insert (banquet19, busdriver19) into BanquetBusDriver

!new HeadWaiter('headwaiter18')
!headwaiter18.name := 'Olivia Kim'
!headwaiter18.dateOfBirth := Date('1980-01-01') -- Arbitrary date of birth
!headwaiter18.phoneNumber := '4012345678'       -- Arbitrary phone number

!new Waiter('waiter42')
!waiter42.name := 'Carlos Mendes'
!waiter42.dateOfBirth := Date('1985-01-01')     -- Arbitrary date of birth
!waiter42.phoneNumber := '5012345678'           -- Arbitrary phone number
!waiter42.spokenLanguage := #English

!new Waiter('waiter43')
!waiter43.name := 'Sofia Ivanova'
!waiter43.dateOfBirth := Date('1987-01-01')     -- Arbitrary date of birth
!waiter43.phoneNumber := '6012345678'           -- Arbitrary phone number
!waiter43.spokenLanguage := #English

!insert (headwaiter18, waiter42) into HeadWaiterWaiter
!insert (headwaiter18, waiter43) into HeadWaiterWaiter

!insert (banquet19, waiter42) into ReservationWaiter
!insert (banquet19, waiter43) into ReservationWaiter

!new Individual('individualReservation12')
!individualReservation12.date := Date('2023-07-15')
!individualReservation12.time := Time('20:00')
!individualReservation12.numberPeople := 1
!individualReservation12.name := 'Ahmed Karim'
!individualReservation12.phoneNumber := '7001234567'  -- Arbitrary phone number
!individualReservation12.seating := #Patio
!individualReservation12.smoking := #Smoking
!individualReservation12.number := 12

!insert (restaurant23, individualReservation12) into RestaurantReservation

!new Table('table60')
!table60.number := 18
!table60.description := 'Outdoor setting with garden lights'
!table60.capacity := 4

!insert (individualReservation12, table60) into ReservationTable

!new Waiter('waiter44')
!waiter44.name := 'John Doe'
!waiter44.dateOfBirth := Date('1978-01-01')     -- Arbitrary date of birth
!waiter44.phoneNumber := '8001234567'           -- Arbitrary phone number
!waiter44.spokenLanguage := #English

!insert (headwaiter18, waiter44) into HeadWaiterWaiter
!insert (individualReservation12, waiter44) into ReservationWaiter

!new MenuItem('menuitem33')
!menuitem33.description := 'Fusion dish combining sushi elements with a taco twist'
!menuitem33.prepTime := 25.0
!menuitem33.classification := #Apetizer

!insert (menuitem33, chef25) into MenuItemChef

!new FoodItem('fooditem54')
!fooditem54.number := 54
!fooditem54.description := 'Seaweed Wrap'
!fooditem54.unit := #Sheet

!new FoodItem('fooditem55')
!fooditem55.number := 55
!fooditem55.description := 'Assorted Fish'
!fooditem55.unit := #Gram

!new Allergen('allergen20')
!allergen20.type := #Seafood

!insert (fooditem55, allergen20) into FoodItemAllergen

!new FoodItem('fooditem56')
!fooditem56.number := 56
!fooditem56.description := 'Avocado'
!fooditem56.unit := #Gram

!insert (menuitem33, fooditem54) into MenuItemFoodItem
!insert (menuitem33, fooditem55) into MenuItemFoodItem
!insert (menuitem33, fooditem56) into MenuItemFoodItem

!new MenuItem('menuitem34')
!menuitem34.description := 'Crispy churros served with rich chocolate sauce'
!menuitem34.prepTime := 20.0
!menuitem34.classification := #Dessert

!insert (menuitem34, chef25) into MenuItemChef

!new FoodItem('fooditem57')
!fooditem57.number := 57
!fooditem57.description := 'Churro Dough'
!fooditem57.unit := #Pound

!new FoodItem('fooditem58')
!fooditem58.number := 58
!fooditem58.description := 'Dark Chocolate'
!fooditem58.unit := #Gram

!insert (menuitem34, fooditem57) into MenuItemFoodItem
!insert (menuitem34, fooditem58) into MenuItemFoodItem

!new Allergen('allergen21')
!allergen21.type := #Lactose

!insert (fooditem58, allergen21) into FoodItemAllergen

!new RegularCustomer('customer18')
!customer18.name := 'Ahmed Karim'
!customer18.prefferedLanguage := #English
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 125 | 0.00% |
| Multiplicities Errors | 0 | 24 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 9 | 0.00% |
| Phones | 0 | 8 | 0.00% |

## Category edge
```
!new Restaurant('restaurant26')
!restaurant26.name := 'Global Tastes Bistro'

!new Owner('owner54')
!owner54.name := 'Penelope Smith'
!owner54.percentageShares := 55

!new Owner('owner55')
!owner55.name := 'Yuko Yamada'
!owner55.percentageShares := 45

!insert (restaurant26, owner54) into RestaurantOwner
!insert (restaurant26, owner55) into RestaurantOwner

!new Banquet('banquet22')
!banquet22.date := Date('2024-11-23')
!banquet22.time := Time('18:30')
!banquet22.groupName := 'International Cultural Exchange Club'
!banquet22.numberPeople := 80
!banquet22.paymentMethod := #CreditCard

!insert (restaurant26, banquet22) into RestaurantReservation

!new Table('table66')
!table66.number := 1
!table66.description := 'Lotus Blossom'
!table66.capacity := 40

!new Table('table67')
!table67.number := 2
!table67.description := 'Amber Horizon'
!table67.capacity := 40

!insert (banquet22, table66) into ReservationTable
!insert (banquet22, table67) into ReservationTable

!new BusDriver('busdriver22')
!busdriver22.name := 'Tamara Kuznetsova'

!insert (banquet22, busdriver22) into BanquetBusDriver

!new HeadWaiter('headwaiter21')
!headwaiter21.name := 'Ilaria Bianchi'
!headwaiter21.dateOfBirth := Date('1982-01-01')  -- Arbitrary date of birth
!headwaiter21.phoneNumber := '1234567890'        -- Arbitrary phone number

!new Waiter('waiter48')
!waiter48.name := 'Jana Novak'
!waiter48.dateOfBirth := Date('1990-01-01')     -- Arbitrary date of birth
!waiter48.phoneNumber := '2345678901'           -- Arbitrary phone number
!waiter48.spokenLanguage := #English

!new Waiter('waiter49')
!waiter49.name := 'Miguel Diaz'
!waiter49.dateOfBirth := Date('1989-01-01')     -- Arbitrary date of birth
!waiter49.phoneNumber := '3456789012'           -- Arbitrary phone number
!waiter49.spokenLanguage := #English

!new Waiter('waiter50')
!waiter50.name := 'Soren Jensen'
!waiter50.dateOfBirth := Date('1992-01-01')     -- Arbitrary date of birth
!waiter50.phoneNumber := '4567890123'           -- Arbitrary phone number
!waiter50.spokenLanguage := #English

!insert (headwaiter21, waiter48) into HeadWaiterWaiter
!insert (headwaiter21, waiter49) into HeadWaiterWaiter
!insert (headwaiter21, waiter50) into HeadWaiterWaiter

!insert (banquet22, waiter48) into ReservationWaiter
!insert (banquet22, waiter49) into ReservationWaiter
!insert (banquet22, waiter50) into ReservationWaiter

!new Manager('manager5')
!manager5.name := 'Oliver Wang'
!manager5.dateOfBirth := Date('1975-01-01')     -- Arbitrary date of birth
!manager5.phoneNumber := '5678901234'           -- Arbitrary phone number

!new Chef('chef28')
!chef28.name := 'Nikolas Christos'
!chef28.dateOfBirth := Date('1965-01-01')        -- Arbitrary date of birth
!chef28.phoneNumber := '6789012345'              -- Arbitrary phone number

!new Cook('cook33')
!cook33.name := 'Eleni Papadopoulos'
!cook33.dateOfBirth := Date('1990-01-01')        -- Arbitrary date of birth
!cook33.phoneNumber := '7890123456'              -- Arbitrary phone number
!cook33.yearsOfExperience := 5

!insert (chef28, cook33) into ChefCook

!new MenuItem('menuitem38')
!menuitem38.description := 'Greek Spanakopita'
!menuitem38.prepTime := 25.0
!menuitem38.classification := #Apetizer

!insert (menuitem38, chef28) into MenuItemChef

!new Allergen('allergen23')
!allergen23.type := #Gluten

!new Allergen('allergen24')
!allergen24.type := #Lactose

!new Chef('chef29')
!chef29.name := 'Priya Shah'
!chef29.dateOfBirth := Date('1970-01-01')       -- Arbitrary date of birth
!chef29.phoneNumber := '8901234567'             -- Arbitrary phone number

!new Cook('cook34')
!cook34.name := 'Aakash Gupta'
!cook34.dateOfBirth := Date('1985-01-01')       -- Arbitrary date of birth
!cook34.phoneNumber := '9012345678'             -- Arbitrary phone number
!cook34.yearsOfExperience := 7

!insert (chef29, cook34) into ChefCook

!new MenuItem('menuitem39')
!menuitem39.description := 'Tandoori Lamb Chops'
!menuitem39.prepTime := 30.0
!menuitem39.classification := #Main

!insert (menuitem39, chef29) into MenuItemChef

!new Chef('chef30')
!chef30.name := 'Satoshi Hayashi'
!chef30.dateOfBirth := Date('1980-01-01')       -- Arbitrary date of birth
!chef30.phoneNumber := '1234567891'             -- Arbitrary phone number

!new Cook('cook35')
!cook35.name := 'Hinata Kojima'
!cook35.dateOfBirth := Date('1995-01-01')       -- Arbitrary date of birth
!cook35.phoneNumber := '2345678902'             -- Arbitrary phone number
!cook35.yearsOfExperience := 2

!insert (chef30, cook35) into ChefCook

!new MenuItem('menuitem40')
!menuitem40.description := 'Teriyaki Tofu Stir-Fry'
!menuitem40.prepTime := 20.0
!menuitem40.classification := #Main

!insert (menuitem40, chef30) into MenuItemChef

!new Cook('cook36')
!cook36.name := 'Fatima Hadi'
!cook36.dateOfBirth := Date('1983-01-01')       -- Arbitrary date of birth
!cook36.phoneNumber := '3456789013'             -- Arbitrary phone number
!cook36.yearsOfExperience := 6

!new Chef('chef31')
!chef31.name := 'Leila Fadila'
!chef31.dateOfBirth := Date('1978-01-01')       -- Arbitrary date of birth
!chef31.phoneNumber := '4567890124'             -- Arbitrary phone number

!insert (chef31, cook36) into ChefCook

!new MenuItem('menuitem41')
!menuitem41.description := 'Baklava with Honey'
!menuitem41.prepTime := 15.0
!menuitem41.classification := #Dessert

!insert (menuitem41, chef31) into MenuItemChef

!new Allergen('allergen25')
!allergen25.type := #Nuts

!new RegularCustomer('customer22')
!customer22.name := 'Lucas Hermann'
!customer22.prefferedLanguage := #German
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 128 | 0.00% |
| Multiplicities Errors | 0 | 20 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 14 | 0.00% |
| Phones | 0 | 13 | 0.00% |

## Category invalid
```
!new Restaurant('restaurant17')
!restaurant17.name := 'World Flavors'

!new Owner('owner35')
!owner35.name := 'Chiara Rossi'
!owner35.percentageShares := 55

!new Owner('owner36')
!owner36.name := 'Akio Tanaka'
!owner36.percentageShares := 45

!insert (restaurant17, owner35) into RestaurantOwner
!insert (restaurant17, owner36) into RestaurantOwner

!new Banquet('banquet14')
!banquet14.date := Date('2023-09-15')
!banquet14.time := Time('12:00')
!banquet14.groupName := 'International Language Club'
!banquet14.numberPeople := 40
!banquet14.paymentMethod := #Cash

!insert (restaurant17, banquet14) into RestaurantReservation

!new Table('table44')
!table44.number := 501
!table44.description := 'Elegant long table'
!table44.capacity := 18

!new Table('table45')
!table45.number := 502
!table45.description := 'Charming café table'
!table45.capacity := 8

!new Table('table46')
!table46.number := 503
!table46.description := 'Cozy corner table'
!table46.capacity := 6

!insert (banquet14, table44) into ReservationTable
!insert (banquet14, table45) into ReservationTable
!insert (banquet14, table46) into ReservationTable

!new BusDriver('busdriver14')
!busdriver14.name := 'Leila Abadi'

!insert (banquet14, busdriver14) into BanquetBusDriver

!new Waiter('waiter29')
!waiter29.name := 'Elena Garcia'
!waiter29.dateOfBirth := Date('1985-01-01')     -- Arbitrary date of birth
!waiter29.phoneNumber := '1234567890'           -- Arbitrary phone number
!waiter29.spokenLanguage := #English

!new Waiter('waiter30')
!waiter30.name := 'Sanjay Patel'
!waiter30.dateOfBirth := Date('1990-01-01')     -- Arbitrary date of birth
!waiter30.phoneNumber := '0987654321'           -- Arbitrary phone number
!waiter30.spokenLanguage := #English

!new Waiter('waiter31')
!waiter31.name := 'Amelie Dupont'
!waiter31.dateOfBirth := Date('1997-01-01')     -- Arbitrary date of birth
!waiter31.phoneNumber := '1122334455'           -- Arbitrary phone number
!waiter31.spokenLanguage := #English

!insert (banquet14, waiter29) into ReservationWaiter
!insert (banquet14, waiter30) into ReservationWaiter
!insert (banquet14, waiter31) into ReservationWaiter
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 3 | 10 | 30.00% |
| Invariants Errors (Not included on General) | 1 | 4 | 25.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `HeadWaiterWaiter':
  Object `waiter31' of class `Waiter' is connected to 0 objects of class `HeadWaiter'
  at association end `headWaiter' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `HeadWaiterWaiter':
  Object `waiter30' of class `Waiter' is connected to 0 objects of class `HeadWaiter'
  at association end `headWaiter' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `HeadWaiterWaiter':
  Object `waiter29' of class `Waiter' is connected to 0 objects of class `HeadWaiter'
  at association end `headWaiter' but the multiplicity is specified as `1'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (2) `Reservation::TablesCapacityGreaterThanPeople': FAILED.
```

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 4 | 0.00% |
| Phones | 0 | 3 | 0.00% |

## Generation 5 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 512 | 0.00% |
| Multiplicities Errors | 0 | 83 | 0.00% |
| Invariants Errors | 0 | 16 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 3 | 10 | 30.00% |
| Invariants Errors (Not included on General) | 1 | 4 | 25.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `HeadWaiterWaiter':
  Object `waiter31' of class `Waiter' is connected to 0 objects of class `HeadWaiter'
  at association end `headWaiter' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `HeadWaiterWaiter':
  Object `waiter30' of class `Waiter' is connected to 0 objects of class `HeadWaiter'
  at association end `headWaiter' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `HeadWaiterWaiter':
  Object `waiter29' of class `Waiter' is connected to 0 objects of class `HeadWaiter'
  at association end `headWaiter' but the multiplicity is specified as `1'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (2) `Reservation::TablesCapacityGreaterThanPeople': FAILED.
```

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 39 | 0.00% |
| Phones | 0 | 34 | 0.00% |

# Generation 6
## Category baseline
```
!new Restaurant('restaurant29')
!restaurant29.name := 'Spice Symphony'

!new Owner('owner62')
!owner62.name := 'Rajesh Kapoor'
!owner62.percentageShares := 55

!new Owner('owner63')
!owner63.name := 'Anjali Mehta'
!owner63.percentageShares := 45

!insert (restaurant29, owner62) into RestaurantOwner
!insert (restaurant29, owner63) into RestaurantOwner

!new Table('table74')
!table74.number := 1
!table74.description := 'Cozy corner booth.'
!table74.capacity := 4

!new Table('table75')
!table75.number := 15
!table75.description := 'Banquette seating in the main dining area.'
!table75.capacity := 6

!new Table('table76')
!table76.number := 22
!table76.description := 'Long communal table.'
!table76.capacity := 10

!new RegularCustomer('customer25')
!customer25.name := 'Vikram Patel'
!customer25.prefferedLanguage := #English

!new RegularCustomer('customer26')
!customer26.name := 'Emily Brown'
!customer26.prefferedLanguage := #English

!new Individual('individualReservation16')
!individualReservation16.date := Date('2024-03-10')
!individualReservation16.time := Time('18:30')
!individualReservation16.numberPeople := 1
!individualReservation16.name := 'Vikram Patel'
!individualReservation16.phoneNumber := '1112223334'  -- Arbitrary phone number
!individualReservation16.seating := #Inside
!individualReservation16.smoking := #NonSmoking
!individualReservation16.number := 16

!insert (restaurant29, individualReservation16) into RestaurantReservation
!insert (individualReservation16, customer25) into ReservationCustomer
!insert (individualReservation16, table74) into ReservationTable

!new Banquet('banquet25')
!banquet25.date := Date('2024-03-10')
!banquet25.time := Time('21:00')
!banquet25.groupName := 'Emily Brown\'s Reunion'
!banquet25.numberPeople := 16
!banquet25.paymentMethod := #Cash

!insert (restaurant29, banquet25) into RestaurantReservation
!insert (banquet25, customer26) into ReservationCustomer
!insert (banquet25, table76) into ReservationTable
!insert (banquet25, table75) into ReservationTable

!new Waiter('waiter56')
!waiter56.name := 'Priya Iyer'
!waiter56.dateOfBirth := Date('1990-01-01')     -- Arbitrary date of birth
!waiter56.phoneNumber := '2223334445'           -- Arbitrary phone number
!waiter56.spokenLanguage := #English

!new Waiter('waiter57')
!waiter57.name := 'Rahul Desai'
!waiter57.dateOfBirth := Date('1992-01-01')     -- Arbitrary date of birth
!waiter57.phoneNumber := '3334445556'           -- Arbitrary phone number
!waiter57.spokenLanguage := #English

!insert (individualReservation16, waiter56) into ReservationWaiter
!insert (banquet25, waiter56) into ReservationWaiter
!insert (banquet25, waiter57) into ReservationWaiter

!new HeadWaiter('headwaiter24')
!headwaiter24.name := 'Aarti Verma'
!headwaiter24.dateOfBirth := Date('1985-01-01')  -- Arbitrary date of birth
!headwaiter24.phoneNumber := '4445556667'        -- Arbitrary phone number

!insert (headwaiter24, waiter56) into HeadWaiterWaiter
!insert (headwaiter24, waiter57) into HeadWaiterWaiter

!new BusDriver('busdriver24')
!busdriver24.name := 'Arjun Khanna'

!insert (banquet25, busdriver24) into BanquetBusDriver

!new Chef('chef34')
!chef34.name := 'Suresh Bhatia'
!chef34.dateOfBirth := Date('1965-01-01')       -- Arbitrary date of birth
!chef34.phoneNumber := '5556667778'             -- Arbitrary phone number

!new Cook('cook40')
!cook40.name := 'Meena Sharma'
!cook40.dateOfBirth := Date('1990-01-01')       -- Arbitrary date of birth
!cook40.phoneNumber := '6667778889'             -- Arbitrary phone number
!cook40.yearsOfExperience := 5

!insert (chef34, cook40) into ChefCook

!new MenuItem('menuitem45')
!menuitem45.description := 'Creamy tomato-based chicken curry.'
!menuitem45.prepTime := 45.0
!menuitem45.classification := #Main

!insert (menuitem45, chef34) into MenuItemChef

!new FoodItem('fooditem73')
!fooditem73.number := 73
!fooditem73.description := 'Chicken'
!fooditem73.purchaseFlag := true
!fooditem73.unit := #Pound

!new FoodItem('fooditem74')
!fooditem74.number := 74
!fooditem74.description := 'Butter'
!fooditem74.purchaseFlag := true
!fooditem74.unit := #Gram

!new FoodItem('fooditem75')
!fooditem75.number := 75
!fooditem75.description := 'Tomato Puree'
!fooditem75.purchaseFlag := true
!fooditem75.unit := #Gram

!insert (menuitem45, fooditem73) into MenuItemFoodItem
!insert (menuitem45, fooditem74) into MenuItemFoodItem
!insert (menuitem45, fooditem75) into MenuItemFoodItem

!new MenuItem('menuitem46')
!menuitem46.description := 'Sweet milk-solid-based dessert.'
!menuitem46.prepTime := 20.0
!menuitem46.classification := #Dessert

!insert (menuitem46, chef34) into MenuItemChef

!new FoodItem('fooditem76')
!fooditem76.number := 76
!fooditem76.description := 'Milk Solids'
!fooditem76.purchaseFlag := true
!fooditem76.unit := #Sheet

!new FoodItem('fooditem77')
!fooditem77.number := 77
!fooditem77.description := 'Sugar Syrup'
!fooditem77.purchaseFlag := true
!fooditem77.unit := #Gram

!insert (menuitem46, fooditem76) into MenuItemFoodItem
!insert (menuitem46, fooditem77) into MenuItemFoodItem

!new Allergen('allergen29')
!allergen29.type := #Lactose

!insert (fooditem74, allergen29) into FoodItemAllergen
!insert (fooditem76, allergen29) into FoodItemAllergen
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 126 | 0.00% |
| Multiplicities Errors | 0 | 25 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 7 | 0.00% |
| Phones | 0 | 6 | 0.00% |

## Category boundary
```
!new Restaurant('restaurant28')
!restaurant28.name := 'Fusion Feast Hub'

!new Owner('owner59')
!owner59.name := 'Ana Duarte'
!owner59.percentageShares := 25

!new Owner('owner60')
!owner60.name := 'Lee Chang'
!owner60.percentageShares := 25

!new Owner('owner61')
!owner61.name := 'Youssef Ali'
!owner61.percentageShares := 50

!insert (restaurant28, owner59) into RestaurantOwner
!insert (restaurant28, owner60) into RestaurantOwner
!insert (restaurant28, owner61) into RestaurantOwner

!new RegularCustomer('customer24')
!customer24.name := 'Katarzyna Nowak'
!customer24.prefferedLanguage := #English

!new HeadWaiter('headwaiter23')
!headwaiter23.name := 'Samuel Brown'
!headwaiter23.dateOfBirth := Date('1980-01-01')  -- Arbitrary date of birth
!headwaiter23.phoneNumber := '1112223334'        -- Arbitrary phone number

!new Waiter('waiter54')
!waiter54.name := 'Mei Lin'
!waiter54.dateOfBirth := Date('2000-01-01')      -- Arbitrary date of birth
!waiter54.phoneNumber := '2223334445'            -- Arbitrary phone number
!waiter54.spokenLanguage := #English

!new Waiter('waiter55')
!waiter55.name := 'Alex Cooper'
!waiter55.dateOfBirth := Date('1992-01-01')      -- Arbitrary date of birth
!waiter55.phoneNumber := '3335556666'            -- Arbitrary phone number
!waiter55.spokenLanguage := #English

!insert (headwaiter23, waiter54) into HeadWaiterWaiter

!new Chef('chef33')
!chef33.name := 'Rashid Khan'
!chef33.dateOfBirth := Date('1975-01-01')        -- Arbitrary date of birth
!chef33.phoneNumber := '3334445556'              -- Arbitrary phone number

!new Cook('cook39')
!cook39.name := 'Eleni Papadopoulos'
!cook39.dateOfBirth := Date('1983-01-01')        -- Arbitrary date of birth
!cook39.phoneNumber := '4445556667'              -- Arbitrary phone number
!cook39.yearsOfExperience := 6

!insert (chef33, cook39) into ChefCook

!new Table('table71')
!table71.number := 9
!table71.description := 'High-top seating for a quick bite'
!table71.capacity := 1

!new Table('table72')
!table72.number := 10
!table72.description := 'Family style dining table'
!table72.capacity := 5

!new Table('table73')
!table73.number := 11
!table73.description := 'Shared patio table'
!table73.capacity := 7

!new MenuItem('menuitem44')
!menuitem44.description := 'A hearty dish combining seafood flavors with a touch of chili.'
!menuitem44.prepTime := 30.0
!menuitem44.classification := #Main

!insert (menuitem44, chef33) into MenuItemChef

!new FoodItem('fooditem72')
!fooditem72.number := 72
!fooditem72.description := 'Prawns'
!fooditem72.purchaseFlag := true
!fooditem72.unit := #Gram

!insert (menuitem44, fooditem72) into MenuItemFoodItem

!new Allergen('allergen28')
!allergen28.type := #Seafood

!insert (fooditem72, allergen28) into FoodItemAllergen

!new Individual('individualReservation15')
!individualReservation15.date := Date('2023-11-05')
!individualReservation15.time := Time('14:00')
!individualReservation15.numberPeople := 1
!individualReservation15.name := 'Katarzyna Nowak'
!individualReservation15.phoneNumber := '5556667778'  -- Arbitrary phone number
!individualReservation15.seating := #Inside
!individualReservation15.smoking := #NonSmoking
!individualReservation15.number := 15

!insert (restaurant28, individualReservation15) into RestaurantReservation
!insert (individualReservation15, customer24) into ReservationCustomer
!insert (individualReservation15, waiter54) into ReservationWaiter
!insert (individualReservation15, table71) into ReservationTable

!new Banquet('banquet24')
!banquet24.date := Date('2023-11-05')
!banquet24.time := Time('19:00')
!banquet24.groupName := 'Evening Gathering'
!banquet24.numberPeople := 12
!banquet24.paymentMethod := #CreditCard

!insert (restaurant28, banquet24) into RestaurantReservation

!insert (banquet24, table72) into ReservationTable
!insert (banquet24, table73) into ReservationTable

!insert (banquet24, waiter54) into ReservationWaiter
!insert (banquet24, waiter55) into ReservationWaiter

!new ItemOrder('itemorder6')
!itemorder6.time := Time('14:10')

!insert (individualReservation15, itemorder6) into ReservationItemOrdered
!insert (itemorder6, menuitem44) into ItemOrderMenuItem
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 96 | 0.00% |
| Multiplicities Errors | 1 | 19 | 5.26% |
| Invariants Errors | 0 | 4 | 0.00% |

| Multiplicities Errors | 
|---| 
```
Multiplicity constraint violation in association `HeadWaiterWaiter':
  Object `waiter55' of class `Waiter' is connected to 0 objects of class `HeadWaiter'
  at association end `headWaiter' but the multiplicity is specified as `1'.
```

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 7 | 0.00% |
| Phones | 0 | 6 | 0.00% |

## Category complex
```
!new Restaurant('restaurant27')
!restaurant27.name := 'The Harmony Bistro'

!new Owner('owner56')
!owner56.name := 'Amelie Dubois'
!owner56.percentageShares := 40

!new Owner('owner57')
!owner57.name := 'Rajesh Chandran'
!owner57.percentageShares := 30

!new Owner('owner58')
!owner58.name := 'Hannah Müller'
!owner58.percentageShares := 30

!insert (restaurant27, owner56) into RestaurantOwner
!insert (restaurant27, owner57) into RestaurantOwner
!insert (restaurant27, owner58) into RestaurantOwner

!new Chef('chef32')
!chef32.name := 'Miguel Santiago'
!chef32.dateOfBirth := Date('1972-01-01')        -- Arbitrary date of birth
!chef32.phoneNumber := '9876543210'              -- Arbitrary phone number

!new Cook('cook37')
!cook37.name := 'Mei Lin'
!cook37.dateOfBirth := Date('1990-01-01')        -- Arbitrary date of birth
!cook37.phoneNumber := '2345678901'              -- Arbitrary phone number
!cook37.yearsOfExperience := 5

!new Cook('cook38')
!cook38.name := 'Liam O\'Brien'
!cook38.dateOfBirth := Date('1995-01-01')        -- Arbitrary date of birth
!cook38.phoneNumber := '3456789012'              -- Arbitrary phone number
!cook38.yearsOfExperience := 2

!insert (chef32, cook37) into ChefCook
!insert (chef32, cook38) into ChefCook

!new Banquet('banquet23')
!banquet23.date := Date('2023-11-25')
!banquet23.time := Time('17:30')
!banquet23.groupName := 'Autumn Festival Gala'
!banquet23.numberPeople := 25
!banquet23.paymentMethod := #CreditCard

!insert (restaurant27, banquet23) into RestaurantReservation

!new Table('table68')
!table68.number := 5
!table68.description := 'Under the skylight with seasonal decor'
!table68.capacity := 18

!new Table('table69')
!table69.number := 6
!table69.description := 'Adjacent to the live music area'
!table69.capacity := 12

!insert (banquet23, table68) into ReservationTable
!insert (banquet23, table69) into ReservationTable

!new BusDriver('busdriver23')
!busdriver23.name := 'Bianca Rossi'

!insert (banquet23, busdriver23) into BanquetBusDriver

!new HeadWaiter('headwaiter22')
!headwaiter22.name := 'Enrique Gonzalez'
!headwaiter22.dateOfBirth := Date('1980-01-01')  -- Arbitrary date of birth
!headwaiter22.phoneNumber := '4567890123'        -- Arbitrary phone number

!new Waiter('waiter51')
!waiter51.name := 'Claire Bennett'
!waiter51.dateOfBirth := Date('1985-01-01')      -- Arbitrary date of birth
!waiter51.phoneNumber := '5678901234'            -- Arbitrary phone number
!waiter51.spokenLanguage := #English

!new Waiter('waiter52')
!waiter52.name := 'Dmitri Volkov'
!waiter52.dateOfBirth := Date('1990-01-01')      -- Arbitrary date of birth
!waiter52.phoneNumber := '6789012345'            -- Arbitrary phone number
!waiter52.spokenLanguage := #English

!insert (headwaiter22, waiter51) into HeadWaiterWaiter
!insert (headwaiter22, waiter52) into HeadWaiterWaiter

!insert (banquet23, waiter51) into ReservationWaiter
!insert (banquet23, waiter52) into ReservationWaiter

!new Individual('individualReservation14')
!individualReservation14.date := Date('2023-11-25')
!individualReservation14.time := Time('19:00')
!individualReservation14.numberPeople := 1
!individualReservation14.name := 'Sarah Khan'
!individualReservation14.phoneNumber := '7890123456'  -- Arbitrary phone number
!individualReservation14.seating := #Inside
!individualReservation14.smoking := #NonSmoking
!individualReservation14.number := 14

!insert (restaurant27, individualReservation14) into RestaurantReservation

!new Table('table70')
!table70.number := 9
!table70.description := 'Elegant setting near the art wall'
!table70.capacity := 4

!insert (individualReservation14, table70) into ReservationTable

!new Waiter('waiter53')
!waiter53.name := 'Lucas Carter'
!waiter53.dateOfBirth := Date('1988-01-01')     -- Arbitrary date of birth
!waiter53.phoneNumber := '8901234567'           -- Arbitrary phone number
!waiter53.spokenLanguage := #English

!insert (headwaiter22, waiter53) into HeadWaiterWaiter
!insert (individualReservation14, waiter53) into ReservationWaiter

!new MenuItem('menuitem42')
!menuitem42.description := 'Traditional Thai curry with a coconut milk base'
!menuitem42.prepTime := 30.0
!menuitem42.classification := #Main

!insert (menuitem42, chef32) into MenuItemChef

!new FoodItem('fooditem67')
!fooditem67.number := 67
!fooditem67.description := 'Coconut Milk'
!fooditem67.unit := #Ounce

!new FoodItem('fooditem68')
!fooditem68.number := 68
!fooditem68.description := 'Chicken Breast'
!fooditem68.unit := #Pound

!new FoodItem('fooditem69')
!fooditem69.number := 69
!fooditem69.description := 'Thai Green Paste'
!fooditem69.unit := #Gram

!new Allergen('allergen26')
!allergen26.type := #Seafood

!insert (fooditem69, allergen26) into FoodItemAllergen

!insert (menuitem42, fooditem67) into MenuItemFoodItem
!insert (menuitem42, fooditem68) into MenuItemFoodItem
!insert (menuitem42, fooditem69) into MenuItemFoodItem

!new MenuItem('menuitem43')
!menuitem43.description := 'Smooth and calming, crafted from premium matcha powder'
!menuitem43.prepTime := 8.0
!menuitem43.classification := #Beverage

!insert (menuitem43, chef32) into MenuItemChef

!new FoodItem('fooditem70')
!fooditem70.number := 70
!fooditem70.description := 'Matcha Powder'
!fooditem70.unit := #Gram

!new FoodItem('fooditem71')
!fooditem71.number := 71
!fooditem71.description := 'Almond Milk'
!fooditem71.unit := #Ounce

!new Allergen('allergen27')
!allergen27.type := #Nuts

!insert (fooditem71, allergen27) into FoodItemAllergen

!insert (menuitem43, fooditem70) into MenuItemFoodItem
!insert (menuitem43, fooditem71) into MenuItemFoodItem

!new RegularCustomer('customer23')
!customer23.name := 'Sarah Khan'
!customer23.prefferedLanguage := #English
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 134 | 0.00% |
| Multiplicities Errors | 0 | 26 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 9 | 0.00% |
| Phones | 0 | 8 | 0.00% |

## Category edge
```
!new Restaurant('restaurant30')
!restaurant30.name := 'Family Hearth'

!new Owner('owner64')
!owner64.name := 'Giovanni Ricci'
!owner64.percentageShares := 70

!new Owner('owner65')
!owner65.name := 'Meredith Lee'
!owner65.percentageShares := 30

!insert (restaurant30, owner64) into RestaurantOwner
!insert (restaurant30, owner65) into RestaurantOwner

!new Individual('individualReservation17')
!individualReservation17.date := Date('2024-04-15')
!individualReservation17.time := Time('17:00')
!individualReservation17.numberPeople := 10
!individualReservation17.name := 'Emily Johnson'
!individualReservation17.phoneNumber := '1234567890'  -- Arbitrary phone number
!individualReservation17.seating := #Inside
!individualReservation17.smoking := #NonSmoking
!individualReservation17.number := 17

!insert (restaurant30, individualReservation17) into RestaurantReservation

!new Table('table77')
!table77.number := 1
!table77.description := 'Family Table'
!table77.capacity := 12

!insert (individualReservation17, table77) into ReservationTable

!new Waiter('waiter58')
!waiter58.name := 'Tomas Li'
!waiter58.dateOfBirth := Date('1990-01-01')     -- Arbitrary date of birth
!waiter58.phoneNumber := '2345678901'           -- Arbitrary phone number
!waiter58.spokenLanguage := #English

!new HeadWaiter('headwaiter25')
!headwaiter25.name := 'Elena Kostas'
!headwaiter25.dateOfBirth := Date('1985-01-01') -- Arbitrary date of birth
!headwaiter25.phoneNumber := '3456789012'       -- Arbitrary phone number

!insert (headwaiter25, waiter58) into HeadWaiterWaiter
!insert (individualReservation17, waiter58) into ReservationWaiter

!new Manager('manager6')
!manager6.name := 'Fiona Malcolm'
!manager6.dateOfBirth := Date('1975-01-01')     -- Arbitrary date of birth
!manager6.phoneNumber := '4567890123'           -- Arbitrary phone number

!new Chef('chef35')
!chef35.name := 'Mario Cavalli'
!chef35.dateOfBirth := Date('1960-01-01')       -- Arbitrary date of birth
!chef35.phoneNumber := '5678901234'             -- Arbitrary phone number

!new Cook('cook41')
!cook41.name := 'Luca Bartoli'
!cook41.dateOfBirth := Date('1983-01-01')       -- Arbitrary date of birth
!cook41.phoneNumber := '6789012345'             -- Arbitrary phone number
!cook41.yearsOfExperience := 6

!insert (chef35, cook41) into ChefCook

!new MenuItem('menuitem47')
!menuitem47.description := 'Caprese Salad'
!menuitem47.prepTime := 15.0
!menuitem47.classification := #Apetizer

!insert (menuitem47, chef35) into MenuItemChef

!new FoodItem('fooditem78')
!fooditem78.number := 78
!fooditem78.description := 'Mozzarella'
!fooditem78.unit := #Gram
!fooditem78.purchaseFlag := true

!insert (menuitem47, fooditem78) into MenuItemFoodItem

!new Allergen('allergen30')
!allergen30.type := #Lactose

!insert (fooditem78, allergen30) into FoodItemAllergen

!new Chef('chef36')
!chef36.name := 'Nia Kapoor'
!chef36.dateOfBirth := Date('1978-01-01')       -- Arbitrary date of birth
!chef36.phoneNumber := '7890123456'             -- Arbitrary phone number

!new Cook('cook42')
!cook42.name := 'Amrita Singh'
!cook42.dateOfBirth := Date('1990-01-01')       -- Arbitrary date of birth
!cook42.phoneNumber := '8901234567'             -- Arbitrary phone number
!cook42.yearsOfExperience := 5

!insert (chef36, cook42) into ChefCook

!new MenuItem('menuitem48')
!menuitem48.description := 'Lemon Herb Grilled Chicken'
!menuitem48.prepTime := 25.0
!menuitem48.classification := #Main

!insert (menuitem48, chef36) into MenuItemChef

!new Chef('chef37')
!chef37.name := 'Amahle Nkosi'
!chef37.dateOfBirth := Date('1982-01-01')       -- Arbitrary date of birth
!chef37.phoneNumber := '9012345678'             -- Arbitrary phone number

!new Cook('cook43')
!cook43.name := 'Thandiwe Biko'
!cook43.dateOfBirth := Date('1995-01-01')       -- Arbitrary date of birth
!cook43.phoneNumber := '0123456789'             -- Arbitrary phone number
!cook43.yearsOfExperience := 3

!insert (chef37, cook43) into ChefCook

!new MenuItem('menuitem49')
!menuitem49.description := 'Fresh Fruit Bowl'
!menuitem49.prepTime := 10.0
!menuitem49.classification := #Dessert

!insert (menuitem49, chef37) into MenuItemChef

!new RegularCustomer('customer27')
!customer27.name := 'Ethan Johnson'
!customer27.prefferedLanguage := #English
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 97 | 0.00% |
| Multiplicities Errors | 0 | 14 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 10 | 0.00% |
| Phones | 0 | 10 | 0.00% |

## Category invalid
```
!new Restaurant('restaurant22')
!restaurant22.name := 'Gourmet Echo'

!new Owner('owner46')
!owner46.name := 'Ahmed El-Badry'
!owner46.percentageShares := 80

!new Owner('owner47')
!owner47.name := 'Sofia Petrenko'
!owner47.percentageShares := 20

!insert (restaurant22, owner46) into RestaurantOwner
!insert (restaurant22, owner47) into RestaurantOwner

!new Banquet('banquet18')
!banquet18.date := Date('2023-12-01')
!banquet18.time := Time('19:30')
!banquet18.groupName := 'Save the Children Fundraiser'
!banquet18.numberPeople := 100
!banquet18.paymentMethod := #CreditCard

!insert (restaurant22, banquet18) into RestaurantReservation

!new Table('table55')
!table55.number := 601
!table55.description := 'Ornate reception table'
!table55.capacity := 20

!new Table('table56')
!table56.number := 602
!table56.description := 'Classic banquet table'
!table56.capacity := 25

!new Table('table57')
!table57.number := 603
!table57.description := 'Traditional long table'
!table57.capacity := 30

!new Table('table58')
!table58.number := 604
!table58.description := 'Elegant high-top table'
!table58.capacity := 15

!insert (banquet18, table55) into ReservationTable
!insert (banquet18, table56) into ReservationTable
!insert (banquet18, table57) into ReservationTable
!insert (banquet18, table58) into ReservationTable

!new BusDriver('busdriver18')
!busdriver18.name := 'Olga Kravchuk'

!insert (banquet18, busdriver18) into BanquetBusDriver

!new HeadWaiter('headwaiter17')
!headwaiter17.name := 'Jean-Luc Moreau'
!headwaiter17.dateOfBirth := Date('1973-01-01') -- Arbitrary date of birth
!headwaiter17.phoneNumber := '1234567890'        -- Arbitrary phone number

!new Waiter('waiter39')
!waiter39.name := 'Norah Ali'
!waiter39.dateOfBirth := Date('1983-01-01')     -- Arbitrary date of birth
!waiter39.phoneNumber := '1112223333'           -- Arbitrary phone number
!waiter39.spokenLanguage := #English

!new Waiter('waiter40')
!waiter40.name := 'Bao Nguyen'
!waiter40.dateOfBirth := Date('1986-01-01')     -- Arbitrary date of birth
!waiter40.phoneNumber := '4445556667'           -- Arbitrary phone number
!waiter40.spokenLanguage := #English

!new Waiter('waiter41')
!waiter41.name := 'Priya Kapoor'
!waiter41.dateOfBirth := Date('1991-01-01')     -- Arbitrary date of birth
!waiter41.phoneNumber := '8889990001'           -- Arbitrary phone number
!waiter41.spokenLanguage := #English

!insert (headwaiter17, waiter39) into HeadWaiterWaiter
!insert (headwaiter17, waiter40) into HeadWaiterWaiter
!insert (headwaiter17, waiter41) into HeadWaiterWaiter

!insert (banquet18, waiter39) into ReservationWaiter
!insert (banquet18, waiter40) into ReservationWaiter
!insert (banquet18, waiter41) into ReservationWaiter
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 14 | 0.00% |
| Invariants Errors (Not included on General) | 1 | 4 | 25.00% |

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (2) `Reservation::TablesCapacityGreaterThanPeople': FAILED.
```

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 5 | 0.00% |
| Phones | 0 | 4 | 0.00% |

## Generation 6 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 518 | 0.00% |
| Multiplicities Errors | 1 | 84 | 1.19% |
| Invariants Errors | 0 | 16 | 0.00% |

| Multiplicities Errors | 
|---| 
```
Multiplicity constraint violation in association `HeadWaiterWaiter':
  Object `waiter55' of class `Waiter' is connected to 0 objects of class `HeadWaiter'
  at association end `headWaiter' but the multiplicity is specified as `1'.
```

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 14 | 0.00% |
| Invariants Errors (Not included on General) | 1 | 4 | 25.00% |

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (2) `Reservation::TablesCapacityGreaterThanPeople': FAILED.
```

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 38 | 0.00% |
| Phones | 0 | 34 | 0.00% |

# Summary for all generations
| Summary | Value | 
|---|---| 
| Model | GPT_4O | 
| Type | CoT | 
| System | restaurant | 
| Number of generations | 6 | 

| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 1 | 2979 | 0.03% |
| Multiplicities Errors | 2 | 499 | 0.40% |
| Invariants Errors | 0 | 96 | 0.00% |

| Syntax Errors | 
|---| 
```
<input>:1:0: generation of expression `#French' failed, with following error:
```

| Multiplicities Errors | 
|---| 
```
Multiplicity constraint violation in association `ReservationTable':
  Object `table13' of class `Table' is connected to 2 objects of class `Reservation'
  at association end `reservation' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `HeadWaiterWaiter':
  Object `waiter55' of class `Waiter' is connected to 0 objects of class `HeadWaiter'
  at association end `headWaiter' but the multiplicity is specified as `1'.
```

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 8 | 61 | 13.11% |
| Invariants Errors (Not included on General) | 6 | 24 | 25.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `ReservationWaiter':
  Object `banquet1' of class `Banquet' is connected to 0 objects of class `Waiter'
  at association end `servedBy' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `HeadWaiterWaiter':
  Object `waiter9' of class `Waiter' is connected to 0 objects of class `HeadWaiter'
  at association end `headWaiter' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `ReservationWaiter':
  Object `individualReservation2' of class `Individual' is connected to 0 objects of class `Waiter'
  at association end `servedBy' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `HeadWaiterWaiter':
  Object `waiter24' of class `Waiter' is connected to 0 objects of class `HeadWaiter'
  at association end `headWaiter' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `HeadWaiterWaiter':
  Object `waiter23' of class `Waiter' is connected to 0 objects of class `HeadWaiter'
  at association end `headWaiter' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `HeadWaiterWaiter':
  Object `waiter31' of class `Waiter' is connected to 0 objects of class `HeadWaiter'
  at association end `headWaiter' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `HeadWaiterWaiter':
  Object `waiter30' of class `Waiter' is connected to 0 objects of class `HeadWaiter'
  at association end `headWaiter' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `HeadWaiterWaiter':
  Object `waiter29' of class `Waiter' is connected to 0 objects of class `HeadWaiter'
  at association end `headWaiter' but the multiplicity is specified as `1'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (2) `Reservation::TablesCapacityGreaterThanPeople': FAILED.
```
```
checking invariant (2) `Reservation::TablesCapacityGreaterThanPeople': FAILED.
```
```
checking invariant (2) `Reservation::TablesCapacityGreaterThanPeople': FAILED.
```
```
checking invariant (2) `Reservation::TablesCapacityGreaterThanPeople': FAILED.
```
```
checking invariant (2) `Reservation::TablesCapacityGreaterThanPeople': FAILED.
```
```
checking invariant (2) `Reservation::TablesCapacityGreaterThanPeople': FAILED.
```

| Restaurant | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 214 | 0.00% |
| Phones | 0 | 189 | 0.00% |

