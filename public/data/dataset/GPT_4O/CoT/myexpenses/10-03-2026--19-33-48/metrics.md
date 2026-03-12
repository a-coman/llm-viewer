# Generation 1
## Category baseline
```
!new Expense('weekendGetawayExpense')
!weekendGetawayExpense.amount := 550.00
!weekendGetawayExpense.startDate := Date('2023-01-15')
!weekendGetawayExpense.endDate := Date('2023-01-17')

!new Bill('bill1')
!bill1.amount := 350.00
!bill1.category := 'Hotel Accommodation'
!bill1.date := Date('2023-01-15')
!bill1.paymentMethod := #CREDIT_CARD
!bill1.status := #VERIFIED

!new Bill('bill2')
!bill2.amount := 100.00
!bill2.category := 'Meals'
!bill2.date := Date('2023-01-16')
!bill2.paymentMethod := #CASH
!bill2.status := #VALIDATED

!new Bill('bill3')
!bill3.amount := 100.00
!bill3.category := 'Gasoline'
!bill3.date := Date('2023-01-17')
!bill3.paymentMethod := #CHECK
!bill3.status := #PENDING

!new Currency('currencyUSD')
!currencyUSD.name := 'United States Dollar'
!currencyUSD.abbreviation := 'USD'

!insert (bill1, currencyUSD) into BillCurrency
!insert (bill2, currencyUSD) into BillCurrency
!insert (bill3, currencyUSD) into BillCurrency

!insert (weekendGetawayExpense, bill1) into ExpenseContainsBills
!insert (weekendGetawayExpense, bill2) into ExpenseContainsBills
!insert (weekendGetawayExpense, bill3) into ExpenseContainsBills

!new Comment('comment1')
!comment1.text := 'Nice and cozy hotel, worth the price!'

!insert (weekendGetawayExpense, comment1) into ExpenseComment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 34 | 0.00% |
| Multiplicities Errors | 0 | 7 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

## Category boundary
```
!new Expense('myExpenses')
!myExpenses.amount := 1000.00
!myExpenses.startDate := Date('2023-09-01')
!myExpenses.endDate := Date('2023-09-30')

!new Bill('bill1LowerBound')
!bill1LowerBound.amount := 0.01
!bill1LowerBound.category := 'Charity Donation'
!bill1LowerBound.date := Date('2023-09-01')
!bill1LowerBound.paymentMethod := #CHECK
!bill1LowerBound.status := #VERIFIED

!new Bill('bill2UpperBound')
!bill2UpperBound.amount := 999.99
!bill2UpperBound.category := 'Office Equipment'
!bill2UpperBound.date := Date('2023-09-10')
!bill2UpperBound.paymentMethod := #CREDIT_CARD
!bill2UpperBound.status := #VALIDATED

!new Currency('currencyUSD')
!currencyUSD.name := 'US Dollar'
!currencyUSD.abbreviation := 'USD'

!insert (bill1LowerBound, currencyUSD) into BillCurrency
!insert (bill2UpperBound, currencyUSD) into BillCurrency

!insert (myExpenses, bill1LowerBound) into ExpenseContainsBills
!insert (myExpenses, bill2UpperBound) into ExpenseContainsBills

-- No comments to insert for this instance as there are none defined.
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 23 | 0.00% |
| Multiplicities Errors | 0 | 4 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

## Category complex
```
!new Expense('internationalBusinessTrip')
!internationalBusinessTrip.amount := 1200.00
!internationalBusinessTrip.startDate := Date('2023-09-15')
!internationalBusinessTrip.endDate := Date('2023-09-22')

!new Bill('bill1')
!bill1.amount := 600.00
!bill1.category := 'Hotel Accommodation'
!bill1.date := Date('2023-09-15')
!bill1.paymentMethod := #CREDIT_CARD
!bill1.status := #VERIFIED

!new Bill('bill2')
!bill2.amount := 400.00
!bill2.category := 'Flights'
!bill2.date := Date('2023-09-14')
!bill2.paymentMethod := #CREDIT_CARD
!bill2.status := #VALIDATED

!new Bill('bill3')
!bill3.amount := 100.00
!bill3.category := 'Meals'
!bill3.date := Date('2023-09-16')
!bill3.paymentMethod := #CASH
!bill3.status := #VERIFIED

!new Bill('bill4')
!bill4.amount := 100.00
!bill4.category := 'Local Transportation'
!bill4.date := Date('2023-09-21')
!bill4.paymentMethod := #CHECK
!bill4.status := #PENDING

!new Currency('currencyEuro')
!currencyEuro.name := 'Euro'
!currencyEuro.abbreviation := 'EUR'

!new Currency('currencyUSD')
!currencyUSD.name := 'United States Dollar'
!currencyUSD.abbreviation := 'USD'

!insert (bill1, currencyEuro) into BillCurrency
!insert (bill2, currencyUSD) into BillCurrency
!insert (bill3, currencyEuro) into BillCurrency
!insert (bill4, currencyEuro) into BillCurrency

!insert (internationalBusinessTrip, bill1) into ExpenseContainsBills
!insert (internationalBusinessTrip, bill2) into ExpenseContainsBills
!insert (internationalBusinessTrip, bill3) into ExpenseContainsBills
!insert (internationalBusinessTrip, bill4) into ExpenseContainsBills

!new Comment('comment1')
!comment1.text := 'Business trip to Europe for client meetings and a conference.'

!new Comment('comment2')
!comment2.text := 'Attempted to keep expenses within budget where possible.'

!insert (internationalBusinessTrip, comment1) into ExpenseComment
!insert (internationalBusinessTrip, comment2) into ExpenseComment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 48 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

## Category edge
```
!new Expense('endOfYearMultiCurrencySurge')
!endOfYearMultiCurrencySurge.amount := 17750.00
!endOfYearMultiCurrencySurge.startDate := Date('2023-12-28')
!endOfYearMultiCurrencySurge.endDate := Date('2024-01-03')

!new Bill('billSupplierInvoice')
!billSupplierInvoice.amount := 12000.00
!billSupplierInvoice.category := 'Supplier Invoice'
!billSupplierInvoice.date := Date('2023-12-29')
!billSupplierInvoice.paymentMethod := #CREDIT_CARD
!billSupplierInvoice.status := #VERIFIED

!new Bill('billSoftwareRenewal')
!billSoftwareRenewal.amount := 3000.00
!billSoftwareRenewal.category := 'Software Subscription Renewal'
!billSoftwareRenewal.date := Date('2023-12-31')
!billSoftwareRenewal.paymentMethod := #CHECK
!billSoftwareRenewal.status := #VALIDATED

!new Bill('billBonusPayout')
!billBonusPayout.amount := 2750.00
!billBonusPayout.category := 'Year-End Bonus Payout'
!billBonusPayout.date := Date('2024-01-02')
!billBonusPayout.paymentMethod := #CASH
!billBonusPayout.status := #PENDING

!new Currency('currencyUSD')
!currencyUSD.name := 'United States Dollar'
!currencyUSD.abbreviation := 'USD'

!new Currency('currencyEuro')
!currencyEuro.name := 'Euro'
!currencyEuro.abbreviation := 'EUR'

!new Currency('currencyGBP')
!currencyGBP.name := 'British Pound Sterling'
!currencyGBP.abbreviation := 'GBP'

!insert (billSupplierInvoice, currencyUSD) into BillCurrency
!insert (billSoftwareRenewal, currencyEuro) into BillCurrency
!insert (billBonusPayout, currencyGBP) into BillCurrency

!insert (endOfYearMultiCurrencySurge, billSupplierInvoice) into ExpenseContainsBills
!insert (endOfYearMultiCurrencySurge, billSoftwareRenewal) into ExpenseContainsBills
!insert (endOfYearMultiCurrencySurge, billBonusPayout) into ExpenseContainsBills

!new Comment('comment1')
!comment1.text := 'All transactions were processed during the financial year rollover period, necessitating careful review for accurate fiscal reporting.'

!new Comment('comment2')
!comment2.text := 'Note delayed processing due to cross-border banking regulations affecting check clearance timelines for Bill 2.'

!new Comment('comment3')
!comment3.text := 'Cash handling for Bill 3 requires verification of funds received confirmation from regional office.'

!insert (endOfYearMultiCurrencySurge, comment1) into ExpenseComment
!insert (endOfYearMultiCurrencySurge, comment2) into ExpenseComment
!insert (endOfYearMultiCurrencySurge, comment3) into ExpenseComment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 46 | 0.00% |
| Multiplicities Errors | 0 | 9 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

## Category invalid
```
!new Expense('vacayTripExpense')
!vacayTripExpense.amount := 1200.00
!vacayTripExpense.startDate := Date('2024-04-15')
!vacayTripExpense.endDate := Date('2024-04-30')

!new Bill('moroccanSpicesBill')
!moroccanSpicesBill.amount := 500.00
!moroccanSpicesBill.category := 'Traditional Moroccan Spices Purchase'
!moroccanSpicesBill.date := Date('2024-04-16')
!moroccanSpicesBill.paymentMethod := #CASH
!moroccanSpicesBill.status := #VALIDATED

!new Bill('italianPastaBill')
!italianPastaBill.amount := 700.00
!italianPastaBill.category := 'Gourmet Italian Pasta'
!italianPastaBill.date := Date('2024-04-27')
!italianPastaBill.paymentMethod := #CREDIT_CARD
!italianPastaBill.status := #PENDING

!new Currency('currencyMAD')
!currencyMAD.name := 'Moroccan Dirham'
!currencyMAD.abbreviation := 'MAD'

!new Currency('currencyEUR')
!currencyEUR.name := 'Euro'
!currencyEUR.abbreviation := 'EUR'

!insert (moroccanSpicesBill, currencyMAD) into BillCurrency
!insert (italianPastaBill, currencyEUR) into BillCurrency

!insert (vacayTripExpense, moroccanSpicesBill) into ExpenseContainsBills
!insert (vacayTripExpense, italianPastaBill) into ExpenseContainsBills

!new Comment('johnsReflection')
!johnsReflection.text := 'The best spices I have ever bought! Can''t wait for the cooking sessions.'

!new Comment('budgetTip')
!budgetTip.text := 'Always keep an eye on exchange rates when traveling.'

!insert (vacayTripExpense, johnsReflection) into ExpenseComment
!insert (vacayTripExpense, budgetTip) into ExpenseComment
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 6 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

## Generation 1 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 183 | 0.00% |
| Multiplicities Errors | 0 | 30 | 0.00% |
| Invariants Errors | 0 | 8 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 6 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 5 | 0.00% |

# Generation 2
## Category baseline
```
!new Expense('businessConferenceExpense')
!businessConferenceExpense.amount := 2400.00
!businessConferenceExpense.startDate := Date('2023-09-05')
!businessConferenceExpense.endDate := Date('2023-09-10')

!new Bill('billFlightTicket')
!billFlightTicket.amount := 1500.00
!billFlightTicket.category := 'Flight Ticket'
!billFlightTicket.date := Date('2023-09-01')
!billFlightTicket.paymentMethod := #CREDIT_CARD
!billFlightTicket.status := #VALIDATED

!new Bill('billHotelStay')
!billHotelStay.amount := 500.00
!billHotelStay.category := 'Hotel Stay'
!billHotelStay.date := Date('2023-09-05')
!billHotelStay.paymentMethod := #CREDIT_CARD
!billHotelStay.status := #VERIFIED

!new Bill('billConferenceFee')
!billConferenceFee.amount := 300.00
!billConferenceFee.category := 'Conference Fee'
!billConferenceFee.date := Date('2023-09-05')
!billConferenceFee.paymentMethod := #CASH
!billConferenceFee.status := #REFUNDED

!new Bill('billLocalTransport')
!billLocalTransport.amount := 100.00
!billLocalTransport.category := 'Local Transport'
!billLocalTransport.date := Date('2023-09-09')
!billLocalTransport.paymentMethod := #CHECK
!billLocalTransport.status := #PENDING

!new Currency('currencyEuro')
!currencyEuro.name := 'Euro'
!currencyEuro.abbreviation := 'EUR'

!insert (billFlightTicket, currencyEuro) into BillCurrency
!insert (billHotelStay, currencyEuro) into BillCurrency
!insert (billConferenceFee, currencyEuro) into BillCurrency
!insert (billLocalTransport, currencyEuro) into BillCurrency

!insert (businessConferenceExpense, billFlightTicket) into ExpenseContainsBills
!insert (businessConferenceExpense, billHotelStay) into ExpenseContainsBills
!insert (businessConferenceExpense, billConferenceFee) into ExpenseContainsBills
!insert (businessConferenceExpense, billLocalTransport) into ExpenseContainsBills

!new Comment('commentFlight')
!commentFlight.text := 'Flight was on time and comfortable.'

!new Comment('commentHotel')
!commentHotel.text := 'Hotel amenities were excellent, highly recommended.'

!insert (businessConferenceExpense, commentFlight) into ExpenseComment
!insert (businessConferenceExpense, commentHotel) into ExpenseComment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 45 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

## Category boundary
```
!new Expense('boundaryCaseExpense')
!boundaryCaseExpense.amount := 0.00
!boundaryCaseExpense.startDate := Date('2023-01-01')
!boundaryCaseExpense.endDate := Date('2023-01-31')

!new Bill('cancelledSubscriptionBill')
!cancelledSubscriptionBill.amount := 0.00
!cancelledSubscriptionBill.category := 'Cancelled Subscription'
!cancelledSubscriptionBill.date := Date('2023-01-15')
!cancelledSubscriptionBill.paymentMethod := #CREDIT_CARD
!cancelledSubscriptionBill.status := #REFUSED

!new Currency('currencyJPY')
!currencyJPY.name := 'Japanese Yen'
!currencyJPY.abbreviation := 'JPY'

!insert (cancelledSubscriptionBill, currencyJPY) into BillCurrency

!insert (boundaryCaseExpense, cancelledSubscriptionBill) into ExpenseContainsBills

!new Comment('cancellationComment')
!cancellationComment.text := 'This expense was canceled and had no cost.'

!insert (boundaryCaseExpense, cancellationComment) into ExpenseComment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 18 | 0.00% |
| Multiplicities Errors | 0 | 3 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

## Category complex
```
!new Expense('familyVacationExpense')
!familyVacationExpense.amount := 3850.00
!familyVacationExpense.startDate := Date('2023-11-01')
!familyVacationExpense.endDate := Date('2023-11-15')

!new Bill('airfareBill')
!airfareBill.amount := 2000.00
!airfareBill.category := 'Airfare'
!airfareBill.date := Date('2023-10-20')
!airfareBill.paymentMethod := #CREDIT_CARD
!airfareBill.status := #REFUNDED

!new Bill('hotelAccommodationBill')
!hotelAccommodationBill.amount := 600.00
!hotelAccommodationBill.category := 'Hotel Accommodation'
!hotelAccommodationBill.date := Date('2023-11-01')
!hotelAccommodationBill.paymentMethod := #CASH
!hotelAccommodationBill.status := #VERIFIED

!new Bill('toursActivitiesBill')
!toursActivitiesBill.amount := 450.00
!toursActivitiesBill.category := 'Tours and Activities'
!toursActivitiesBill.date := Date('2023-11-05')
!toursActivitiesBill.paymentMethod := #CREDIT_CARD
!toursActivitiesBill.status := #VALIDATED

!new Bill('diningBill')
!diningBill.amount := 300.00
!diningBill.category := 'Dining'
!diningBill.date := Date('2023-11-10')
!diningBill.paymentMethod := #CHECK
!diningBill.status := #VERIFIED

!new Bill('giftsSouvenirsBill')
!giftsSouvenirsBill.amount := 500.00
!giftsSouvenirsBill.category := 'Gifts and Souvenirs'
!giftsSouvenirsBill.date := Date('2023-11-12')
!giftsSouvenirsBill.paymentMethod := #CREDIT_CARD
!giftsSouvenirsBill.status := #PENDING

!new Currency('currencyJPY')
!currencyJPY.name := 'Japanese Yen'
!currencyJPY.abbreviation := 'JPY'

!insert (airfareBill, currencyJPY) into BillCurrency
!insert (hotelAccommodationBill, currencyJPY) into BillCurrency
!insert (toursActivitiesBill, currencyJPY) into BillCurrency
!insert (diningBill, currencyJPY) into BillCurrency
!insert (giftsSouvenirsBill, currencyJPY) into BillCurrency

!insert (familyVacationExpense, airfareBill) into ExpenseContainsBills
!insert (familyVacationExpense, hotelAccommodationBill) into ExpenseContainsBills
!insert (familyVacationExpense, toursActivitiesBill) into ExpenseContainsBills
!insert (familyVacationExpense, diningBill) into ExpenseContainsBills
!insert (familyVacationExpense, giftsSouvenirsBill) into ExpenseContainsBills

!new Comment('familyVacationComment1')
!familyVacationComment1.text := 'Annual family vacation to Japan, including cultural tours and leisure activities.'

!new Comment('familyVacationComment2')
!familyVacationComment2.text := 'Activities included visiting historical sites and tasting local cuisine. A memorable and enriching experience for all.'

!insert (familyVacationExpense, familyVacationComment1) into ExpenseComment
!insert (familyVacationExpense, familyVacationComment2) into ExpenseComment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 53 | 0.00% |
| Multiplicities Errors | 0 | 12 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

## Category edge
```
!new Expense('emergencyReliefFund')
!emergencyReliefFund.amount := 50500.00
!emergencyReliefFund.startDate := Date('2023-11-01')
!emergencyReliefFund.endDate := Date('2023-11-03')

!new Bill('medicalSuppliesBill')
!medicalSuppliesBill.amount := 15000.00
!medicalSuppliesBill.category := 'Medical Supplies'
!medicalSuppliesBill.date := Date('2023-11-01')
!medicalSuppliesBill.paymentMethod := #CASH
!medicalSuppliesBill.status := #VALIDATED

!new Bill('temporarySheltersBill')
!temporarySheltersBill.amount := 17000.00
!temporarySheltersBill.category := 'Temporary Shelters'
!temporarySheltersBill.date := Date('2023-11-02')
!temporarySheltersBill.paymentMethod := #CHECK
!temporarySheltersBill.status := #REFUSED

!new Bill('foodDistributionBill')
!foodDistributionBill.amount := 18500.00
!foodDistributionBill.category := 'Food Distribution'
!foodDistributionBill.date := Date('2023-11-03')
!foodDistributionBill.paymentMethod := #CREDIT_CARD
!foodDistributionBill.status := #VERIFIED

!new Currency('currencyJPY')
!currencyJPY.name := 'Japanese Yen'
!currencyJPY.abbreviation := 'JPY'

!new Currency('currencyINR')
!currencyINR.name := 'Indian Rupee'
!currencyINR.abbreviation := 'INR'

!new Currency('currencyCAD')
!currencyCAD.name := 'Canadian Dollar'
!currencyCAD.abbreviation := 'CAD'

!insert (medicalSuppliesBill, currencyJPY) into BillCurrency
!insert (temporarySheltersBill, currencyINR) into BillCurrency
!insert (foodDistributionBill, currencyCAD) into BillCurrency

!insert (emergencyReliefFund, medicalSuppliesBill) into ExpenseContainsBills
!insert (emergencyReliefFund, temporarySheltersBill) into ExpenseContainsBills
!insert (emergencyReliefFund, foodDistributionBill) into ExpenseContainsBills

!new Comment('emergencyComment1')
!emergencyComment1.text := 'Immediate allocation for medical supplies ensured prompt delivery amidst crisis.'

!new Comment('emergencyComment2')
!emergencyComment2.text := 'Shelter invoices require further verification due to discrepancies in the provided infrastructure.'

!new Comment('emergencyComment3')
!emergencyComment3.text := 'Implemented rapid credit transactions to facilitate expedited food distribution to affected areas.'

!insert (emergencyReliefFund, emergencyComment1) into ExpenseComment
!insert (emergencyReliefFund, emergencyComment2) into ExpenseComment
!insert (emergencyReliefFund, emergencyComment3) into ExpenseComment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 46 | 0.00% |
| Multiplicities Errors | 0 | 9 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

## Category invalid
```
!new Expense('techConferenceExpense')
!techConferenceExpense.amount := 2500.00
!techConferenceExpense.startDate := Date('2024-08-10')
!techConferenceExpense.endDate := Date('2024-08-15')

!new Bill('flightTicketBill')
!flightTicketBill.amount := 900.00
!flightTicketBill.category := 'Round Trip Flight Ticket'
!flightTicketBill.date := Date('2024-08-05')
!flightTicketBill.paymentMethod := #CREDIT_CARD
!flightTicketBill.status := #VERIFIED

!new Bill('hotelStayBill')
!hotelStayBill.amount := 500.00
!hotelStayBill.category := 'Hotel Accommodation'
!hotelStayBill.date := Date('2024-08-12')
!hotelStayBill.paymentMethod := #CHECK
!hotelStayBill.status := #PENDING

!new Bill('conferenceFeeBill')
!conferenceFeeBill.amount := 1100.00
!conferenceFeeBill.category := 'Conference Registration Fee'
!conferenceFeeBill.date := Date('2024-07-15')
!conferenceFeeBill.paymentMethod := #CASH
!conferenceFeeBill.status := #VALIDATED

!new Currency('currencyUSD')
!currencyUSD.name := 'United States Dollar'
!currencyUSD.abbreviation := 'USD'

!new Currency('currencyJPY')
!currencyJPY.name := 'Japanese Yen'
!currencyJPY.abbreviation := 'JPY'

!insert (flightTicketBill, currencyUSD) into BillCurrency
!insert (hotelStayBill, currencyJPY) into BillCurrency
!insert (conferenceFeeBill, currencyJPY) into BillCurrency

!insert (techConferenceExpense, flightTicketBill) into ExpenseContainsBills
!insert (techConferenceExpense, hotelStayBill) into ExpenseContainsBills
!insert (techConferenceExpense, conferenceFeeBill) into ExpenseContainsBills

!new Comment('networkingAdvice')
!networkingAdvice.text := 'Remember to exchange business cards after each session.'

!new Comment('budgetNote')
!budgetNote.text := 'Collaborate with fellow attendees to split accommodation costs.'

!insert (techConferenceExpense, networkingAdvice) into ExpenseComment
!insert (techConferenceExpense, budgetNote) into ExpenseComment
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 8 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

## Generation 2 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 202 | 0.00% |
| Multiplicities Errors | 0 | 34 | 0.00% |
| Invariants Errors | 0 | 8 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 8 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 5 | 0.00% |

# Generation 3
## Category baseline
```
!new Expense('familySummerVacationExpense')
!familySummerVacationExpense.amount := 1000.00
!familySummerVacationExpense.startDate := Date('2023-07-20')
!familySummerVacationExpense.endDate := Date('2023-07-30')

!new Bill('airbnbRentalBill')
!airbnbRentalBill.amount := 300.00
!airbnbRentalBill.category := 'Airbnb Rental'
!airbnbRentalBill.date := Date('2023-07-20')
!airbnbRentalBill.paymentMethod := #CREDIT_CARD
!airbnbRentalBill.status := #DRAFT

!new Bill('groceryShoppingBill')
!groceryShoppingBill.amount := 200.00
!groceryShoppingBill.category := 'Grocery Shopping'
!groceryShoppingBill.date := Date('2023-07-21')
!groceryShoppingBill.paymentMethod := #CREDIT_CARD
!groceryShoppingBill.status := #VERIFIED

!new Bill('restaurantDiningBill')
!restaurantDiningBill.amount := 250.00
!restaurantDiningBill.category := 'Restaurant Dining'
!restaurantDiningBill.date := Date('2023-07-25')
!restaurantDiningBill.paymentMethod := #CHECK
!restaurantDiningBill.status := #REFUNDED

!new Bill('amusementParkTicketsBill')
!amusementParkTicketsBill.amount := 250.00
!amusementParkTicketsBill.category := 'Amusement Park Tickets'
!amusementParkTicketsBill.date := Date('2023-07-28')
!amusementParkTicketsBill.paymentMethod := #CASH
!amusementParkTicketsBill.status := #VALIDATED

!new Currency('currencyGBP')
!currencyGBP.name := 'British Pound'
!currencyGBP.abbreviation := 'GBP'

!insert (airbnbRentalBill, currencyGBP) into BillCurrency
!insert (groceryShoppingBill, currencyGBP) into BillCurrency
!insert (restaurantDiningBill, currencyGBP) into BillCurrency
!insert (amusementParkTicketsBill, currencyGBP) into BillCurrency

!insert (familySummerVacationExpense, airbnbRentalBill) into ExpenseContainsBills
!insert (familySummerVacationExpense, groceryShoppingBill) into ExpenseContainsBills
!insert (familySummerVacationExpense, restaurantDiningBill) into ExpenseContainsBills
!insert (familySummerVacationExpense, amusementParkTicketsBill) into ExpenseContainsBills

!new Comment('commentAirbnb')
!commentAirbnb.text := 'Loved the Airbnb, perfect for a family of five.'

!new Comment('commentGroceryPrices')
!commentGroceryPrices.text := 'Grocery prices were higher than expected, but great quality.'

!new Comment('commentAmusementPark')
!commentAmusementPark.text := 'The amusement park was a highlight; kids had a fantastic time!'

!insert (familySummerVacationExpense, commentAirbnb) into ExpenseComment
!insert (familySummerVacationExpense, commentGroceryPrices) into ExpenseComment
!insert (familySummerVacationExpense, commentAmusementPark) into ExpenseComment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 48 | 0.00% |
| Multiplicities Errors | 0 | 11 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

## Category boundary
```
!new Expense('complexExpense')
!complexExpense.amount := 5000.00
!complexExpense.startDate := Date('2023-11-01')
!complexExpense.endDate := Date('2023-11-30')

!new Bill('conferenceRegistrationBill')
!conferenceRegistrationBill.amount := 3000.00
!conferenceRegistrationBill.category := 'International Conference Registration'
!conferenceRegistrationBill.date := Date('2023-11-05')
!conferenceRegistrationBill.paymentMethod := #CREDIT_CARD
!conferenceRegistrationBill.status := #VALIDATED

!new Bill('flightTicketsBill')
!flightTicketsBill.amount := 2000.00
!flightTicketsBill.category := 'Flight Tickets'
!flightTicketsBill.date := Date('2023-11-10')
!flightTicketsBill.paymentMethod := #CASH
!flightTicketsBill.status := #VERIFIED

!new Currency('currencyEUR')
!currencyEUR.name := 'Euro'
!currencyEUR.abbreviation := 'EUR'

!insert (conferenceRegistrationBill, currencyEUR) into BillCurrency
!insert (flightTicketsBill, currencyEUR) into BillCurrency

!insert (complexExpense, conferenceRegistrationBill) into ExpenseContainsBills
!insert (complexExpense, flightTicketsBill) into ExpenseContainsBills

!new Comment('conferenceComment')
!conferenceComment.text := 'Attending the annual international tech conference.'

!new Comment('flightArrangementComment')
!flightArrangementComment.text := 'Flight arrangements were verified and secured in cash.'

!insert (complexExpense, conferenceComment) into ExpenseComment
!insert (complexExpense, flightArrangementComment) into ExpenseComment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 29 | 0.00% |
| Multiplicities Errors | 0 | 6 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

## Category complex
```
!new Expense('localCharityEventExpense')
!localCharityEventExpense.amount := 1750.00
!localCharityEventExpense.startDate := Date('2023-12-05')
!localCharityEventExpense.endDate := Date('2023-12-07')

!new Bill('venueRentalBill')
!venueRentalBill.amount := 500.00
!venueRentalBill.category := 'Venue Rental'
!venueRentalBill.date := Date('2023-12-01')
!venueRentalBill.paymentMethod := #CHECK
!venueRentalBill.status := #VALIDATED

!new Bill('cateringServicesBill')
!cateringServicesBill.amount := 750.00
!cateringServicesBill.category := 'Catering Services'
!cateringServicesBill.date := Date('2023-12-05')
!cateringServicesBill.paymentMethod := #CREDIT_CARD
!cateringServicesBill.status := #VERIFIED

!new Bill('decorationsBill')
!decorationsBill.amount := 300.00
!decorationsBill.category := 'Decorations'
!decorationsBill.date := Date('2023-12-04')
!decorationsBill.paymentMethod := #CASH
!decorationsBill.status := #PENDING

!new Bill('miscellaneousSuppliesBill')
!miscellaneousSuppliesBill.amount := 200.00
!miscellaneousSuppliesBill.category := 'Miscellaneous Supplies'
!miscellaneousSuppliesBill.date := Date('2023-12-03')
!miscellaneousSuppliesBill.paymentMethod := #CHECK
!miscellaneousSuppliesBill.status := #DRAFT

!new Currency('currencyGBP')
!currencyGBP.name := 'British Pound'
!currencyGBP.abbreviation := 'GBP'

!insert (venueRentalBill, currencyGBP) into BillCurrency
!insert (cateringServicesBill, currencyGBP) into BillCurrency
!insert (decorationsBill, currencyGBP) into BillCurrency
!insert (miscellaneousSuppliesBill, currencyGBP) into BillCurrency

!insert (localCharityEventExpense, venueRentalBill) into ExpenseContainsBills
!insert (localCharityEventExpense, cateringServicesBill) into ExpenseContainsBills
!insert (localCharityEventExpense, decorationsBill) into ExpenseContainsBills
!insert (localCharityEventExpense, miscellaneousSuppliesBill) into ExpenseContainsBills

!new Comment('charityEventComment1')
!charityEventComment1.text := 'Expenses for the annual charity gala, supporting the local animal shelter.'

!new Comment('charityEventComment2')
!charityEventComment2.text := 'Items included venue booking, catering services, and decoration. Event was a success, raising significant funds.'

!insert (localCharityEventExpense, charityEventComment1) into ExpenseComment
!insert (localCharityEventExpense, charityEventComment2) into ExpenseComment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 45 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

## Category edge
```
!new Expense('internationalConferenceBudgetShortfall')
!internationalConferenceBudgetShortfall.amount := 27300.00
!internationalConferenceBudgetShortfall.startDate := Date('2024-06-15')
!internationalConferenceBudgetShortfall.endDate := Date('2024-06-20')

!new Bill('venueRentalBill')
!venueRentalBill.amount := 12500.00
!venueRentalBill.category := 'Venue Rental'
!venueRentalBill.date := Date('2024-06-15')
!venueRentalBill.paymentMethod := #CREDIT_CARD
!venueRentalBill.status := #VALIDATED

!new Bill('cateringServicesBill')
!cateringServicesBill.amount := 9800.00
!cateringServicesBill.category := 'Catering Services'
!cateringServicesBill.date := Date('2024-06-16')
!cateringServicesBill.paymentMethod := #CASH
!cateringServicesBill.status := #REFUNDED

!new Bill('speakerHonorariumsBill')
!speakerHonorariumsBill.amount := 5000.00
!speakerHonorariumsBill.category := 'Speaker Honorariums'
!speakerHonorariumsBill.date := Date('2024-06-17')
!speakerHonorariumsBill.paymentMethod := #CHECK
!speakerHonorariumsBill.status := #REFUSED

!new Currency('currencyCHF')
!currencyCHF.name := 'Swiss Franc'
!currencyCHF.abbreviation := 'CHF'

!new Currency('currencyAUD')
!currencyAUD.name := 'Australian Dollar'
!currencyAUD.abbreviation := 'AUD'

!new Currency('currencySGD')
!currencySGD.name := 'Singapore Dollar'
!currencySGD.abbreviation := 'SGD'

!insert (venueRentalBill, currencyCHF) into BillCurrency
!insert (cateringServicesBill, currencyAUD) into BillCurrency
!insert (speakerHonorariumsBill, currencySGD) into BillCurrency

!insert (internationalConferenceBudgetShortfall, venueRentalBill) into ExpenseContainsBills
!insert (internationalConferenceBudgetShortfall, cateringServicesBill) into ExpenseContainsBills
!insert (internationalConferenceBudgetShortfall, speakerHonorariumsBill) into ExpenseContainsBills

!new Comment('venueComment')
!venueComment.text := 'Venue rental finalized successfully, strategic location improved attendee engagement.'

!new Comment('cateringComment')
!cateringComment.text := 'Catering refund processed after service quality issues reported by several delegates.'

!new Comment('honorariumComment')
!honorariumComment.text := 'Honorarium payment delayed due to incomplete documentation from international speakers.'

!insert (internationalConferenceBudgetShortfall, venueComment) into ExpenseComment
!insert (internationalConferenceBudgetShortfall, cateringComment) into ExpenseComment
!insert (internationalConferenceBudgetShortfall, honorariumComment) into ExpenseComment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 46 | 0.00% |
| Multiplicities Errors | 0 | 9 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

## Category invalid
```
!new Expense('europeanRoadtripExpense')
!europeanRoadtripExpense.amount := 1800.00
!europeanRoadtripExpense.startDate := Date('2024-06-01')
!europeanRoadtripExpense.endDate := Date('2024-06-21')

!new Bill('carRentalBill')
!carRentalBill.amount := 450.00
!carRentalBill.category := 'Car Rental'
!carRentalBill.date := Date('2024-05-30')
!carRentalBill.paymentMethod := #CREDIT_CARD
!carRentalBill.status := #VERIFIED

!new Bill('diningAndFoodBill')
!diningAndFoodBill.amount := 350.00
!diningAndFoodBill.category := 'Dining and Local Cuisine'
!diningAndFoodBill.date := Date('2024-06-11')
!diningAndFoodBill.paymentMethod := #CASH
!diningAndFoodBill.status := #VALIDATED

!new Bill('souvenirsAndShoppingBill')
!souvenirsAndShoppingBill.amount := 250.00
!souvenirsAndShoppingBill.category := 'Souvenirs and Shopping'
!souvenirsAndShoppingBill.date := Date('2024-06-15')
!souvenirsAndShoppingBill.paymentMethod := #CASH
!souvenirsAndShoppingBill.status := #PENDING

!new Bill('accommodationBill')
!accommodationBill.amount := 750.00
!accommodationBill.category := 'Hotel Accommodation'
!accommodationBill.date := Date('2024-06-05')
!accommodationBill.paymentMethod := #CHECK
!accommodationBill.status := #REFUSED

!new Currency('currencyEUR')
!currencyEUR.name := 'Euro'
!currencyEUR.abbreviation := 'EUR'

!new Currency('currencyCHF')
!currencyCHF.name := 'Swiss Franc'
!currencyCHF.abbreviation := 'CHF'

!new Currency('currencyGBP')
!currencyGBP.name := 'British Pound'
!currencyGBP.abbreviation := 'GBP'

!insert (carRentalBill, currencyEUR) into BillCurrency
!insert (diningAndFoodBill, currencyCHF) into BillCurrency
!insert (souvenirsAndShoppingBill, currencyGBP) into BillCurrency
!insert (accommodationBill, currencyEUR) into BillCurrency

!insert (europeanRoadtripExpense, carRentalBill) into ExpenseContainsBills
!insert (europeanRoadtripExpense, diningAndFoodBill) into ExpenseContainsBills
!insert (europeanRoadtripExpense, souvenirsAndShoppingBill) into ExpenseContainsBills
!insert (europeanRoadtripExpense, accommodationBill) into ExpenseContainsBills

!new Comment('travelTip')
!travelTip.text := 'Purchase travel insurance for peace of mind during the trip.'

!new Comment('itinerarySuggestion')
!itinerarySuggestion.text := 'Allocate a day for each major city to fully explore local attractions.'

!insert (europeanRoadtripExpense, travelTip) into ExpenseComment
!insert (europeanRoadtripExpense, itinerarySuggestion) into ExpenseComment
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 10 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

## Generation 3 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 219 | 0.00% |
| Multiplicities Errors | 0 | 36 | 0.00% |
| Invariants Errors | 0 | 8 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 10 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 5 | 0.00% |

# Generation 4
## Category baseline
```
!new Expense('educationalSeminarExpense')
!educationalSeminarExpense.amount := 1280.00
!educationalSeminarExpense.startDate := Date('2023-11-10')
!educationalSeminarExpense.endDate := Date('2023-11-12')

!new Bill('seminarRegistrationBill')
!seminarRegistrationBill.amount := 800.00
!seminarRegistrationBill.category := 'Seminar Registration'
!seminarRegistrationBill.date := Date('2023-10-15')
!seminarRegistrationBill.paymentMethod := #CREDIT_CARD
!seminarRegistrationBill.status := #VERIFIED

!new Bill('accommodationBill')
!accommodationBill.amount := 180.00
!accommodationBill.category := 'Accommodation'
!accommodationBill.date := Date('2023-11-09')
!accommodationBill.paymentMethod := #CREDIT_CARD
!accommodationBill.status := #VALIDATED

!new Bill('dailyMealsBill')
!dailyMealsBill.amount := 150.00
!dailyMealsBill.category := 'Daily Meals'
!dailyMealsBill.date := Date('2023-11-10')
!dailyMealsBill.paymentMethod := #CASH
!dailyMealsBill.status := #VERIFIED

!new Bill('localTransportationBill')
!localTransportationBill.amount := 150.00
!localTransportationBill.category := 'Local Transportation'
!localTransportationBill.date := Date('2023-11-11')
!localTransportationBill.paymentMethod := #CASH
!localTransportationBill.status := #PENDING

!new Currency('currencyJPY')
!currencyJPY.name := 'Japanese Yen'
!currencyJPY.abbreviation := 'JPY'

!insert (seminarRegistrationBill, currencyJPY) into BillCurrency
!insert (accommodationBill, currencyJPY) into BillCurrency
!insert (dailyMealsBill, currencyJPY) into BillCurrency
!insert (localTransportationBill, currencyJPY) into BillCurrency

!insert (educationalSeminarExpense, seminarRegistrationBill) into ExpenseContainsBills
!insert (educationalSeminarExpense, accommodationBill) into ExpenseContainsBills
!insert (educationalSeminarExpense, dailyMealsBill) into ExpenseContainsBills
!insert (educationalSeminarExpense, localTransportationBill) into ExpenseContainsBills

!new Comment('seminarRegistrationComment')
!seminarRegistrationComment.text := 'Registration process was smooth, looking forward to gaining new insights.'

!new Comment('accommodationComment')
!accommodationComment.text := 'Accommodation was comfortable and conveniently located near the seminar venue.'

!new Comment('localTransportationComment')
!localTransportationComment.text := 'Local transportation made it easy to explore the city between sessions.'

!insert (educationalSeminarExpense, seminarRegistrationComment) into ExpenseComment
!insert (educationalSeminarExpense, accommodationComment) into ExpenseComment
!insert (educationalSeminarExpense, localTransportationComment) into ExpenseComment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 48 | 0.00% |
| Multiplicities Errors | 0 | 11 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

## Category boundary
```
!new Expense('boundaryExpense')
!boundaryExpense.amount := 800.00
!boundaryExpense.startDate := Date('2023-05-01')
!boundaryExpense.endDate := Date('2023-05-31')

!new Bill('summerUtilitiesBill')
!summerUtilitiesBill.amount := 500.00
!summerUtilitiesBill.category := 'Summer Utilities'
!summerUtilitiesBill.date := Date('2023-05-10')
!summerUtilitiesBill.paymentMethod := #CHECK
!summerUtilitiesBill.status := #PENDING

!new Bill('emergencyPlumbingBill')
!emergencyPlumbingBill.amount := 300.00
!emergencyPlumbingBill.category := 'Emergency Plumbing'
!emergencyPlumbingBill.date := Date('2023-05-24')
!emergencyPlumbingBill.paymentMethod := #CASH
!emergencyPlumbingBill.status := #REFUNDED

!new Currency('currencyGBP')
!currencyGBP.name := 'British Pound'
!currencyGBP.abbreviation := 'GBP'

!insert (summerUtilitiesBill, currencyGBP) into BillCurrency
!insert (emergencyPlumbingBill, currencyGBP) into BillCurrency

!insert (boundaryExpense, summerUtilitiesBill) into ExpenseContainsBills
!insert (boundaryExpense, emergencyPlumbingBill) into ExpenseContainsBills

!new Comment('utilitiesComment')
!utilitiesComment.text := 'Payment for utility bills, awaiting clearance.'

!new Comment('refundComment')
!refundComment.text := 'Refund processed for emergency expense due to incorrect service billing.'

!insert (boundaryExpense, utilitiesComment) into ExpenseComment
!insert (boundaryExpense, refundComment) into ExpenseComment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 29 | 0.00% |
| Multiplicities Errors | 0 | 6 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

## Category complex
```
!new Expense('renovationProjectExpense')
!renovationProjectExpense.amount := 8500.00
!renovationProjectExpense.startDate := Date('2023-06-01')
!renovationProjectExpense.endDate := Date('2023-07-15')

!new Bill('laborCostsBill')
!laborCostsBill.amount := 3000.00
!laborCostsBill.category := 'Labor Costs'
!laborCostsBill.date := Date('2023-06-01')
!laborCostsBill.paymentMethod := #CHECK
!laborCostsBill.status := #VERIFIED

!new Bill('materialsBill')
!materialsBill.amount := 2500.00
!materialsBill.category := 'Materials'
!materialsBill.date := Date('2023-06-10')
!materialsBill.paymentMethod := #CREDIT_CARD
!materialsBill.status := #VERIFIED

!new Bill('interiorDesignBill')
!interiorDesignBill.amount := 1500.00
!interiorDesignBill.category := 'Interior Design'
!interiorDesignBill.date := Date('2023-06-20')
!interiorDesignBill.paymentMethod := #CASH
!interiorDesignBill.status := #VALIDATED

!new Bill('permitsLegalFeesBill')
!permitsLegalFeesBill.amount := 1000.00
!permitsLegalFeesBill.category := 'Permits and Legal Fees'
!permitsLegalFeesBill.date := Date('2023-06-15')
!permitsLegalFeesBill.paymentMethod := #CREDIT_CARD
!permitsLegalFeesBill.status := #PENDING

!new Bill('miscellaneousExpensesBill')
!miscellaneousExpensesBill.amount := 500.00
!miscellaneousExpensesBill.category := 'Miscellaneous Expenses'
!miscellaneousExpensesBill.date := Date('2023-07-01')
!miscellaneousExpensesBill.paymentMethod := #CHECK
!miscellaneousExpensesBill.status := #REFUNDED

!new Currency('currencyCAD')
!currencyCAD.name := 'Canadian Dollar'
!currencyCAD.abbreviation := 'CAD'

!insert (laborCostsBill, currencyCAD) into BillCurrency
!insert (materialsBill, currencyCAD) into BillCurrency
!insert (interiorDesignBill, currencyCAD) into BillCurrency
!insert (permitsLegalFeesBill, currencyCAD) into BillCurrency
!insert (miscellaneousExpensesBill, currencyCAD) into BillCurrency

!insert (renovationProjectExpense, laborCostsBill) into ExpenseContainsBills
!insert (renovationProjectExpense, materialsBill) into ExpenseContainsBills
!insert (renovationProjectExpense, interiorDesignBill) into ExpenseContainsBills
!insert (renovationProjectExpense, permitsLegalFeesBill) into ExpenseContainsBills
!insert (renovationProjectExpense, miscellaneousExpensesBill) into ExpenseContainsBills

!new Comment('renovationComment1')
!renovationComment1.text := 'Renovation of the downtown office building, including electrical rewiring and interior design updates.'

!new Comment('renovationComment2')
!renovationComment2.text := 'Project completed ahead of schedule despite initial delays due to supply chain disruptions.'

!insert (renovationProjectExpense, renovationComment1) into ExpenseComment
!insert (renovationProjectExpense, renovationComment2) into ExpenseComment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 53 | 0.00% |
| Multiplicities Errors | 0 | 12 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

## Category edge
```
!new Expense('postDisasterInfrastructureRebuild')
!postDisasterInfrastructureRebuild.amount := 86500.00
!postDisasterInfrastructureRebuild.startDate := Date('2023-05-01')
!postDisasterInfrastructureRebuild.endDate := Date('2023-05-05')

!new Bill('constructionMaterialsBill')
!constructionMaterialsBill.amount := 35000.00
!constructionMaterialsBill.category := 'Construction Materials'
!constructionMaterialsBill.date := Date('2023-05-01')
!constructionMaterialsBill.paymentMethod := #CASH
!constructionMaterialsBill.status := #PENDING

!new Bill('laborCostsBill')
!laborCostsBill.amount := 25000.00
!laborCostsBill.category := 'Labor Costs'
!laborCostsBill.date := Date('2023-05-03')
!laborCostsBill.paymentMethod := #CREDIT_CARD
!laborCostsBill.status := #VERIFIED

!new Bill('machineryLeasingBill')
!machineryLeasingBill.amount := 15000.00
!machineryLeasingBill.category := 'Machinery Leasing'
!machineryLeasingBill.date := Date('2023-05-04')
!machineryLeasingBill.paymentMethod := #CHECK
!machineryLeasingBill.status := #VALIDATED

!new Bill('siteSecurityBill')
!siteSecurityBill.amount := 11500.00
!siteSecurityBill.category := 'Site Security'
!siteSecurityBill.date := Date('2023-05-05')
!siteSecurityBill.paymentMethod := #CREDIT_CARD
!siteSecurityBill.status := #DRAFT

!new Currency('currencyUSD')
!currencyUSD.name := 'US Dollar'
!currencyUSD.abbreviation := 'USD'

!new Currency('currencyEUR')
!currencyEUR.name := 'Euro'
!currencyEUR.abbreviation := 'EUR'

!new Currency('currencyJPY')
!currencyJPY.name := 'Japanese Yen'
!currencyJPY.abbreviation := 'JPY'

!new Currency('currencyGBP')
!currencyGBP.name := 'British Pound Sterling'
!currencyGBP.abbreviation := 'GBP'

!insert (constructionMaterialsBill, currencyUSD) into BillCurrency
!insert (laborCostsBill, currencyEUR) into BillCurrency
!insert (machineryLeasingBill, currencyJPY) into BillCurrency
!insert (siteSecurityBill, currencyGBP) into BillCurrency

!insert (postDisasterInfrastructureRebuild, constructionMaterialsBill) into ExpenseContainsBills
!insert (postDisasterInfrastructureRebuild, laborCostsBill) into ExpenseContainsBills
!insert (postDisasterInfrastructureRebuild, machineryLeasingBill) into ExpenseContainsBills
!insert (postDisasterInfrastructureRebuild, siteSecurityBill) into ExpenseContainsBills

!new Comment('materialsComment')
!materialsComment.text := 'Urgent need for construction materials to prevent delays due to administrative hold-ups.'

!new Comment('laborCostsComment')
!laborCostsComment.text := 'Labor costs negotiated successfully, ensuring skillful workforce attendance.'

!new Comment('machineryComment')
!machineryComment.text := 'Machinery efficiency maximized within agreed leasing periods, confirming arrangements are effective.'

!new Comment('securityComment')
!securityComment.text := 'Pending security protocols for site need expedited draft approval, crucial for safety standards compliance.'

!insert (postDisasterInfrastructureRebuild, materialsComment) into ExpenseComment
!insert (postDisasterInfrastructureRebuild, laborCostsComment) into ExpenseComment
!insert (postDisasterInfrastructureRebuild, machineryComment) into ExpenseComment
!insert (postDisasterInfrastructureRebuild, securityComment) into ExpenseComment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 60 | 0.00% |
| Multiplicities Errors | 0 | 12 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

## Category invalid
```
!new Expense('festivalWeekendExpense')
!festivalWeekendExpense.amount := 850.00
!festivalWeekendExpense.startDate := Date('2024-11-05')
!festivalWeekendExpense.endDate := Date('2024-11-07')

!new Bill('festivalTicketBill')
!festivalTicketBill.amount := 300.00
!festivalTicketBill.category := 'Music Festival Ticket'
!festivalTicketBill.date := Date('2024-10-15')
!festivalTicketBill.paymentMethod := #CREDIT_CARD
!festivalTicketBill.status := #REFUNDED

!new Bill('hotelAccommodationBill')
!hotelAccommodationBill.amount := 350.00
!hotelAccommodationBill.category := 'Hotel Stay'
!hotelAccommodationBill.date := Date('2024-11-04')
!hotelAccommodationBill.paymentMethod := #CREDIT_CARD
!hotelAccommodationBill.status := #VALIDATED

!new Bill('souvenirShoppingBill')
!souvenirShoppingBill.amount := 200.00
!souvenirShoppingBill.category := 'Shopping for Souvenirs'
!souvenirShoppingBill.date := Date('2024-11-06')
!souvenirShoppingBill.paymentMethod := #CASH
!souvenirShoppingBill.status := #VERIFIED

!new Currency('currencyINR')
!currencyINR.name := 'Indian Rupee'
!currencyINR.abbreviation := 'INR'

!insert (festivalTicketBill, currencyINR) into BillCurrency
!insert (hotelAccommodationBill, currencyINR) into BillCurrency
!insert (souvenirShoppingBill, currencyINR) into BillCurrency

!insert (festivalWeekendExpense, festivalTicketBill) into ExpenseContainsBills
!insert (festivalWeekendExpense, hotelAccommodationBill) into ExpenseContainsBills
!insert (festivalWeekendExpense, souvenirShoppingBill) into ExpenseContainsBills

!new Comment('festivalExperience')
!festivalExperience.text := 'An unforgettable music experience; must return next year!'

!new Comment('refundIssue')
!refundIssue.text := 'Contact customer service to resolve ticket refund discrepancies.'

!insert (festivalWeekendExpense, festivalExperience) into ExpenseComment
!insert (festivalWeekendExpense, refundIssue) into ExpenseComment
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 8 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

## Generation 4 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 227 | 0.00% |
| Multiplicities Errors | 0 | 41 | 0.00% |
| Invariants Errors | 0 | 8 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 8 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 5 | 0.00% |

# Generation 5
## Category baseline
```
!new Expense('internationalResearchProjectExpense')
!internationalResearchProjectExpense.amount := 5485.00
!internationalResearchProjectExpense.startDate := Date('2023-05-01')
!internationalResearchProjectExpense.endDate := Date('2023-05-31')

!new Bill('laboratoryEquipmentBill')
!laboratoryEquipmentBill.amount := 2500.00
!laboratoryEquipmentBill.category := 'Laboratory Equipment Purchase'
!laboratoryEquipmentBill.date := Date('2023-05-02')
!laboratoryEquipmentBill.paymentMethod := #CREDIT_CARD
!laboratoryEquipmentBill.status := #VERIFIED

!new Bill('airfareBill')
!airfareBill.amount := 1200.00
!airfareBill.category := 'Airfare for Research Team'
!airfareBill.date := Date('2023-04-28')
!airfareBill.paymentMethod := #CREDIT_CARD
!airfareBill.status := #VALIDATED

!new Bill('hotelAccommodationBill')
!hotelAccommodationBill.amount := 785.00
!hotelAccommodationBill.category := 'Hotel Accommodation'
!hotelAccommodationBill.date := Date('2023-05-03')
!hotelAccommodationBill.paymentMethod := #CASH
!hotelAccommodationBill.status := #VERIFIED

!new Bill('fieldResearchTransportationBill')
!fieldResearchTransportationBill.amount := 500.00
!fieldResearchTransportationBill.category := 'Field Research Transportation'
!fieldResearchTransportationBill.date := Date('2023-05-10')
!fieldResearchTransportationBill.paymentMethod := #CHECK
!fieldResearchTransportationBill.status := #PENDING

!new Bill('conferenceFeeBill')
!conferenceFeeBill.amount := 500.00
!conferenceFeeBill.category := 'Conference Fee for Presentation of Findings'
!conferenceFeeBill.date := Date('2023-05-15')
!conferenceFeeBill.paymentMethod := #CREDIT_CARD
!conferenceFeeBill.status := #REFUSED

!new Currency('currencyCHF')
!currencyCHF.name := 'Swiss Franc'
!currencyCHF.abbreviation := 'CHF'

!insert (laboratoryEquipmentBill, currencyCHF) into BillCurrency
!insert (airfareBill, currencyCHF) into BillCurrency
!insert (hotelAccommodationBill, currencyCHF) into BillCurrency
!insert (fieldResearchTransportationBill, currencyCHF) into BillCurrency
!insert (conferenceFeeBill, currencyCHF) into BillCurrency

!insert (internationalResearchProjectExpense, laboratoryEquipmentBill) into ExpenseContainsBills
!insert (internationalResearchProjectExpense, airfareBill) into ExpenseContainsBills
!insert (internationalResearchProjectExpense, hotelAccommodationBill) into ExpenseContainsBills
!insert (internationalResearchProjectExpense, fieldResearchTransportationBill) into ExpenseContainsBills
!insert (internationalResearchProjectExpense, conferenceFeeBill) into ExpenseContainsBills

!new Comment('equipmentComment')
!equipmentComment.text := 'Equipment purchased was essential and within budget expectations.'

!new Comment('flightComment')
!flightComment.text := 'The research team''s flight was comfortable, with smooth booking procedure.'

!new Comment('accommodationComment')
!accommodationComment.text := 'Accommodation was satisfactory, though a bit far from the research site.'

!new Comment('transportationComment')
!transportationComment.text := 'Transportation for fieldwork was a challenge but manageable.'

!insert (internationalResearchProjectExpense, equipmentComment) into ExpenseComment
!insert (internationalResearchProjectExpense, flightComment) into ExpenseComment
!insert (internationalResearchProjectExpense, accommodationComment) into ExpenseComment
!insert (internationalResearchProjectExpense, transportationComment) into ExpenseComment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 59 | 0.00% |
| Multiplicities Errors | 0 | 14 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

## Category boundary
```
!new Expense('boundaryCaseExpense')
!boundaryCaseExpense.amount := 250.00
!boundaryCaseExpense.startDate := Date('2023-07-01')
!boundaryCaseExpense.endDate := Date('2023-07-31')

!new Bill('groceryShoppingBill')
!groceryShoppingBill.amount := 100.00
!groceryShoppingBill.category := 'Grocery Shopping'
!groceryShoppingBill.date := Date('2023-07-05')
!groceryShoppingBill.paymentMethod := #CASH
!groceryShoppingBill.status := #VERIFIED

!new Bill('internetSubscriptionBill')
!internetSubscriptionBill.amount := 150.00
!internetSubscriptionBill.category := 'Internet Subscription'
!internetSubscriptionBill.date := Date('2023-07-15')
!internetSubscriptionBill.paymentMethod := #CREDIT_CARD
!internetSubscriptionBill.status := #REFUNDED

!new Currency('currencyMXN')
!currencyMXN.name := 'Mexican Peso'
!currencyMXN.abbreviation := 'MXN'

!insert (groceryShoppingBill, currencyMXN) into BillCurrency
!insert (internetSubscriptionBill, currencyMXN) into BillCurrency

!insert (boundaryCaseExpense, groceryShoppingBill) into ExpenseContainsBills
!insert (boundaryCaseExpense, internetSubscriptionBill) into ExpenseContainsBills

!new Comment('groceryComment')
!groceryComment.text := 'Grocery bill verified promptly upon purchase.'

!new Comment('subscriptionComment')
!subscriptionComment.text := 'Subscription fee was refunded due to service outage, resolved swiftly.'

!insert (boundaryCaseExpense, groceryComment) into ExpenseComment
!insert (boundaryCaseExpense, subscriptionComment) into ExpenseComment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 29 | 0.00% |
| Multiplicities Errors | 0 | 6 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

## Category complex
```
!new Expense('academicResearchGrantExpense')
!academicResearchGrantExpense.amount := 10500.00
!academicResearchGrantExpense.startDate := Date('2023-05-01')
!academicResearchGrantExpense.endDate := Date('2023-08-31')

!new Bill('personnelAndSalariesBill')
!personnelAndSalariesBill.amount := 4000.00
!personnelAndSalariesBill.category := 'Personnel and Salaries'
!personnelAndSalariesBill.date := Date('2023-05-01')
!personnelAndSalariesBill.paymentMethod := #CREDIT_CARD
!personnelAndSalariesBill.status := #VALIDATED

!new Bill('equipmentAndMaterialsBill')
!equipmentAndMaterialsBill.amount := 2500.00
!equipmentAndMaterialsBill.category := 'Equipment and Materials'
!equipmentAndMaterialsBill.date := Date('2023-05-15')
!equipmentAndMaterialsBill.paymentMethod := #CHECK
!equipmentAndMaterialsBill.status := #VERIFIED

!new Bill('travelAndAccommodationBill')
!travelAndAccommodationBill.amount := 1500.00
!travelAndAccommodationBill.category := 'Travel and Accommodation'
!travelAndAccommodationBill.date := Date('2023-06-05')
!travelAndAccommodationBill.paymentMethod := #CASH
!travelAndAccommodationBill.status := #REFUNDED

!new Bill('conferencesAndSeminarsBill')
!conferencesAndSeminarsBill.amount := 1000.00
!conferencesAndSeminarsBill.category := 'Conferences and Seminars'
!conferencesAndSeminarsBill.date := Date('2023-07-10')
!conferencesAndSeminarsBill.paymentMethod := #CREDIT_CARD
!conferencesAndSeminarsBill.status := #PENDING

!new Bill('publicationAndCommunicationBill')
!publicationAndCommunicationBill.amount := 1500.00
!publicationAndCommunicationBill.category := 'Publication and Communication'
!publicationAndCommunicationBill.date := Date('2023-08-20')
!publicationAndCommunicationBill.paymentMethod := #CHECK
!publicationAndCommunicationBill.status := #DRAFT

!new Currency('currencyUSD')
!currencyUSD.name := 'US Dollar'
!currencyUSD.abbreviation := 'USD'

!insert (personnelAndSalariesBill, currencyUSD) into BillCurrency
!insert (equipmentAndMaterialsBill, currencyUSD) into BillCurrency
!insert (travelAndAccommodationBill, currencyUSD) into BillCurrency
!insert (conferencesAndSeminarsBill, currencyUSD) into BillCurrency
!insert (publicationAndCommunicationBill, currencyUSD) into BillCurrency

!insert (academicResearchGrantExpense, personnelAndSalariesBill) into ExpenseContainsBills
!insert (academicResearchGrantExpense, equipmentAndMaterialsBill) into ExpenseContainsBills
!insert (academicResearchGrantExpense, travelAndAccommodationBill) into ExpenseContainsBills
!insert (academicResearchGrantExpense, conferencesAndSeminarsBill) into ExpenseContainsBills
!insert (academicResearchGrantExpense, publicationAndCommunicationBill) into ExpenseContainsBills

!new Comment('fundingAllocationComment')
!fundingAllocationComment.text := 'Funding allocation for a multidisciplinary research project focusing on renewable energy solutions.'

!new Comment('projectCollaborationComment')
!projectCollaborationComment.text := 'The project involves collaborative efforts between universities, with extensive data collection and analysis.'

!insert (academicResearchGrantExpense, fundingAllocationComment) into ExpenseComment
!insert (academicResearchGrantExpense, projectCollaborationComment) into ExpenseComment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 53 | 0.00% |
| Multiplicities Errors | 0 | 12 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

## Category edge
```
!new Expense('festivalOperationsFundDisbursement')
!festivalOperationsFundDisbursement.amount := 48200.00
!festivalOperationsFundDisbursement.startDate := Date('2023-09-10')
!festivalOperationsFundDisbursement.endDate := Date('2023-09-17')

!new Bill('stageSetupBill')
!stageSetupBill.amount := 15000.00
!stageSetupBill.category := 'Stage Setup'
!stageSetupBill.date := Date('2023-09-11')
!stageSetupBill.paymentMethod := #CHECK
!stageSetupBill.status := #VALIDATED

!new Bill('lightingAndSoundBill')
!lightingAndSoundBill.amount := 12000.00
!lightingAndSoundBill.category := 'Lighting and Sound'
!lightingAndSoundBill.date := Date('2023-09-12')
!lightingAndSoundBill.paymentMethod := #CREDIT_CARD
!lightingAndSoundBill.status := #PENDING

!new Bill('securityServicesBill')
!securityServicesBill.amount := 10000.00
!securityServicesBill.category := 'Security Services'
!securityServicesBill.date := Date('2023-09-13')
!securityServicesBill.paymentMethod := #CASH
!securityServicesBill.status := #VERIFIED

!new Bill('cateringServicesBill')
!cateringServicesBill.amount := 11200.00
!cateringServicesBill.category := 'Catering Services'
!cateringServicesBill.date := Date('2023-09-14')
!cateringServicesBill.paymentMethod := #CHECK
!cateringServicesBill.status := #REFUSED

!new Currency('currencyEUR')
!currencyEUR.name := 'Euro'
!currencyEUR.abbreviation := 'EUR'

!new Currency('currencyUSD')
!currencyUSD.name := 'US Dollar'
!currencyUSD.abbreviation := 'USD'

!new Currency('currencyCAD')
!currencyCAD.name := 'Canadian Dollar'
!currencyCAD.abbreviation := 'CAD'

!new Currency('currencyAUD')
!currencyAUD.name := 'Australian Dollar'
!currencyAUD.abbreviation := 'AUD'

!insert (stageSetupBill, currencyEUR) into BillCurrency
!insert (lightingAndSoundBill, currencyUSD) into BillCurrency
!insert (securityServicesBill, currencyCAD) into BillCurrency
!insert (cateringServicesBill, currencyAUD) into BillCurrency

!insert (festivalOperationsFundDisbursement, stageSetupBill) into ExpenseContainsBills
!insert (festivalOperationsFundDisbursement, lightingAndSoundBill) into ExpenseContainsBills
!insert (festivalOperationsFundDisbursement, securityServicesBill) into ExpenseContainsBills
!insert (festivalOperationsFundDisbursement, cateringServicesBill) into ExpenseContainsBills

!new Comment('stageSetupComment')
!stageSetupComment.text := 'Stage setup contracted to local providers familiar with festival needs, ensuring cultural authenticity.'

!new Comment('lightingIssueComment')
!lightingIssueComment.text := 'Pending issue with lighting invoice due to supplier''s delayed equipment delivery.'

!new Comment('securityComment')
!securityComment.text := 'Security verification completed, operations confirmed compliant with safety regulations.'

!new Comment('cateringComment')
!cateringComment.text := 'Catering bill refused pending renegotiation of menu options to include local delicacies.'

!insert (festivalOperationsFundDisbursement, stageSetupComment) into ExpenseComment
!insert (festivalOperationsFundDisbursement, lightingIssueComment) into ExpenseComment
!insert (festivalOperationsFundDisbursement, securityComment) into ExpenseComment
!insert (festivalOperationsFundDisbursement, cateringComment) into ExpenseComment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 60 | 0.00% |
| Multiplicities Errors | 0 | 12 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

## Category invalid
```
!new Expense('familyReunionExpense')
!familyReunionExpense.amount := 2000.00
!familyReunionExpense.startDate := Date('2024-05-01')
!familyReunionExpense.endDate := Date('2024-05-04')

!new Bill('cateringServiceBill')
!cateringServiceBill.amount := 800.00
!cateringServiceBill.category := 'Catering Services'
!cateringServiceBill.date := Date('2024-05-01')
!cateringServiceBill.paymentMethod := #CHECK
!cateringServiceBill.status := #VALIDATED

!new Bill('venueRentalBill')
!venueRentalBill.amount := 900.00
!venueRentalBill.category := 'Venue Rental'
!venueRentalBill.date := Date('2024-04-20')
!venueRentalBill.paymentMethod := #CHECK
!venueRentalBill.status := #PENDING

!new Bill('decorationBill')
!decorationBill.amount := 300.00
!decorationBill.category := 'Decoration and Setup'
!decorationBill.date := Date('2024-04-29')
!decorationBill.paymentMethod := #CASH
!decorationBill.status := #VERIFIED

!new Currency('currencyUSD')
!currencyUSD.name := 'United States Dollar'
!currencyUSD.abbreviation := 'USD'

!insert (cateringServiceBill, currencyUSD) into BillCurrency
!insert (venueRentalBill, currencyUSD) into BillCurrency
!insert (decorationBill, currencyUSD) into BillCurrency

!insert (familyReunionExpense, cateringServiceBill) into ExpenseContainsBills
!insert (familyReunionExpense, venueRentalBill) into ExpenseContainsBills
!insert (familyReunionExpense, decorationBill) into ExpenseContainsBills

!new Comment('organizationTip')
!organizationTip.text := 'Plan ahead for better family coordination and reduced last-minute expenses.'

!new Comment('expenseReview')
!expenseReview.text := 'Revisit the budget post-event for any tweaks needed.'

!insert (familyReunionExpense, organizationTip) into ExpenseComment
!insert (familyReunionExpense, expenseReview) into ExpenseComment
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 8 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

## Generation 5 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 238 | 0.00% |
| Multiplicities Errors | 0 | 44 | 0.00% |
| Invariants Errors | 0 | 8 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 8 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 5 | 0.00% |

# Generation 6
## Category baseline
```
!new Expense('weddingCelebrationExpense')
!weddingCelebrationExpense.amount := 15000.00
!weddingCelebrationExpense.startDate := Date('2023-06-15')
!weddingCelebrationExpense.endDate := Date('2023-06-17')

!new Bill('venueRentalBill')
!venueRentalBill.amount := 8000.00
!venueRentalBill.category := 'Venue Rental'
!venueRentalBill.date := Date('2023-05-10')
!venueRentalBill.paymentMethod := #CREDIT_CARD
!venueRentalBill.status := #VALIDATED

!new Bill('cateringServicesBill')
!cateringServicesBill.amount := 3000.00
!cateringServicesBill.category := 'Catering Services'
!cateringServicesBill.date := Date('2023-06-16')
!cateringServicesBill.paymentMethod := #CREDIT_CARD
!cateringServicesBill.status := #VERIFIED

!new Bill('decorationsAndFlowersBill')
!decorationsAndFlowersBill.amount := 2000.00
!decorationsAndFlowersBill.category := 'Decorations and Flowers'
!decorationsAndFlowersBill.date := Date('2023-05-20')
!decorationsAndFlowersBill.paymentMethod := #CASH
!decorationsAndFlowersBill.status := #VERIFIED

!new Bill('photographyBill')
!photographyBill.amount := 1500.00
!photographyBill.category := 'Photography'
!photographyBill.date := Date('2023-06-16')
!photographyBill.paymentMethod := #CHECK
!photographyBill.status := #VERIFIED

!new Bill('musicAndEntertainmentBill')
!musicAndEntertainmentBill.amount := 500.00
!musicAndEntertainmentBill.category := 'Music and Entertainment'
!musicAndEntertainmentBill.date := Date('2023-06-17')
!musicAndEntertainmentBill.paymentMethod := #CREDIT_CARD
!musicAndEntertainmentBill.status := #VALIDATED

!new Currency('currencyINR')
!currencyINR.name := 'Indian Rupee'
!currencyINR.abbreviation := 'INR'

!insert (venueRentalBill, currencyINR) into BillCurrency
!insert (cateringServicesBill, currencyINR) into BillCurrency
!insert (decorationsAndFlowersBill, currencyINR) into BillCurrency
!insert (photographyBill, currencyINR) into BillCurrency
!insert (musicAndEntertainmentBill, currencyINR) into BillCurrency

!insert (weddingCelebrationExpense, venueRentalBill) into ExpenseContainsBills
!insert (weddingCelebrationExpense, cateringServicesBill) into ExpenseContainsBills
!insert (weddingCelebrationExpense, decorationsAndFlowersBill) into ExpenseContainsBills
!insert (weddingCelebrationExpense, photographyBill) into ExpenseContainsBills
!insert (weddingCelebrationExpense, musicAndEntertainmentBill) into ExpenseContainsBills

!new Comment('venueComment')
!venueComment.text := 'The venue was breathtaking, complementing the beautiful outdoor setting.'

!new Comment('cateringComment')
!cateringComment.text := 'Catering team did a wonderful job accommodating a variety of dietary needs.'

!new Comment('flowersComment')
!flowersComment.text := 'The choice of flowers was perfect, adding elegance to the decorations.'

!new Comment('photographyComment')
!photographyComment.text := 'Photography captured every magical moment beautifully.'

!new Comment('musicComment')
!musicComment.text := 'Live music kept everyone on their feet, an unforgettable celebration!'

!insert (weddingCelebrationExpense, venueComment) into ExpenseComment
!insert (weddingCelebrationExpense, cateringComment) into ExpenseComment
!insert (weddingCelebrationExpense, flowersComment) into ExpenseComment
!insert (weddingCelebrationExpense, photographyComment) into ExpenseComment
!insert (weddingCelebrationExpense, musicComment) into ExpenseComment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 62 | 0.00% |
| Multiplicities Errors | 0 | 15 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

## Category boundary
```
!new Expense('boundaryCaseExpense')
!boundaryCaseExpense.amount := 0.00
!boundaryCaseExpense.startDate := Date('2023-12-01')
!boundaryCaseExpense.endDate := Date('2023-12-31')

!new Bill('returnedMerchandiseBill')
!returnedMerchandiseBill.amount := 0.00
!returnedMerchandiseBill.category := 'Returned Merchandise'
!returnedMerchandiseBill.date := Date('2023-12-10')
!returnedMerchandiseBill.paymentMethod := #CASH
!returnedMerchandiseBill.status := #REFUNDED

!new Currency('currencyCAD')
!currencyCAD.name := 'Canadian Dollar'
!currencyCAD.abbreviation := 'CAD'

!insert (returnedMerchandiseBill, currencyCAD) into BillCurrency

!insert (boundaryCaseExpense, returnedMerchandiseBill) into ExpenseContainsBills

!new Comment('returnComment')
!returnComment.text := 'All items from the purchase were returned; hence no expense incurred.'

!insert (boundaryCaseExpense, returnComment) into ExpenseComment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 18 | 0.00% |
| Multiplicities Errors | 0 | 3 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

## Category complex
```
!new Expense('weddingPlanningExpense')
!weddingPlanningExpense.amount := 17300.00
!weddingPlanningExpense.startDate := Date('2024-03-01')
!weddingPlanningExpense.endDate := Date('2024-04-30')

!new Bill('venueAndCateringBill')
!venueAndCateringBill.amount := 9000.00
!venueAndCateringBill.category := 'Venue and Catering'
!venueAndCateringBill.date := Date('2024-03-15')
!venueAndCateringBill.paymentMethod := #CHECK
!venueAndCateringBill.status := #VERIFIED

!new Bill('photographyAndVideographyBill')
!photographyAndVideographyBill.amount := 3000.00
!photographyAndVideographyBill.category := 'Photography and Videography'
!photographyAndVideographyBill.date := Date('2024-03-20')
!photographyAndVideographyBill.paymentMethod := #CREDIT_CARD
!photographyAndVideographyBill.status := #VERIFIED

!new Bill('weddingAttireBill')
!weddingAttireBill.amount := 2500.00
!weddingAttireBill.category := 'Wedding Attire'
!weddingAttireBill.date := Date('2024-03-25')
!weddingAttireBill.paymentMethod := #CASH
!weddingAttireBill.status := #DRAFT

!new Bill('decorationAndFloralsBill')
!decorationAndFloralsBill.amount := 1500.00
!decorationAndFloralsBill.category := 'Decoration and Florals'
!decorationAndFloralsBill.date := Date('2024-04-05')
!decorationAndFloralsBill.paymentMethod := #CREDIT_CARD
!decorationAndFloralsBill.status := #PENDING

!new Bill('entertainmentAndMusicBill')
!entertainmentAndMusicBill.amount := 1300.00
!entertainmentAndMusicBill.category := 'Entertainment and Music'
!entertainmentAndMusicBill.date := Date('2024-04-10')
!entertainmentAndMusicBill.paymentMethod := #CHECK
!entertainmentAndMusicBill.status := #REFUSED

!new Currency('currencyEUR')
!currencyEUR.name := 'Euro'
!currencyEUR.abbreviation := 'EUR'

!insert (venueAndCateringBill, currencyEUR) into BillCurrency
!insert (photographyAndVideographyBill, currencyEUR) into BillCurrency
!insert (weddingAttireBill, currencyEUR) into BillCurrency
!insert (decorationAndFloralsBill, currencyEUR) into BillCurrency
!insert (entertainmentAndMusicBill, currencyEUR) into BillCurrency

!insert (weddingPlanningExpense, venueAndCateringBill) into ExpenseContainsBills
!insert (weddingPlanningExpense, photographyAndVideographyBill) into ExpenseContainsBills
!insert (weddingPlanningExpense, weddingAttireBill) into ExpenseContainsBills
!insert (weddingPlanningExpense, decorationAndFloralsBill) into ExpenseContainsBills
!insert (weddingPlanningExpense, entertainmentAndMusicBill) into ExpenseContainsBills

!new Comment('weddingComment1')
!weddingComment1.text := 'Expenses for hosting our wedding ceremony and reception at Lakeview Resort, including all related services and arrangements.'

!new Comment('weddingComment2')
!weddingComment2.text := 'Everything from decoration to catering was exceptional, making it a day to remember for us and our guests.'

!insert (weddingPlanningExpense, weddingComment1) into ExpenseComment
!insert (weddingPlanningExpense, weddingComment2) into ExpenseComment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 53 | 0.00% |
| Multiplicities Errors | 0 | 12 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

## Category edge
```
!new Expense('artExhibitionLaunchExpense')
!artExhibitionLaunchExpense.amount := 33400.00
!artExhibitionLaunchExpense.startDate := Date('2023-04-01')
!artExhibitionLaunchExpense.endDate := Date('2023-04-05')

!new Bill('artworkTransportationBill')
!artworkTransportationBill.amount := 12000.00
!artworkTransportationBill.category := 'Artwork Transportation'
!artworkTransportationBill.date := Date('2023-04-01')
!artworkTransportationBill.paymentMethod := #CHECK
!artworkTransportationBill.status := #VERIFIED

!new Bill('eventMarketingBill')
!eventMarketingBill.amount := 8500.00
!eventMarketingBill.category := 'Event Marketing'
!eventMarketingBill.date := Date('2023-04-02')
!eventMarketingBill.paymentMethod := #CREDIT_CARD
!eventMarketingBill.status := #REFUNDED

!new Bill('venueDecorationBill')
!venueDecorationBill.amount := 9000.00
!venueDecorationBill.category := 'Venue Decoration'
!venueDecorationBill.date := Date('2023-04-03')
!venueDecorationBill.paymentMethod := #CASH
!venueDecorationBill.status := #PENDING

!new Bill('artistAccommodationBill')
!artistAccommodationBill.amount := 3900.00
!artistAccommodationBill.category := 'Artist Accommodation'
!artistAccommodationBill.date := Date('2023-04-04')
!artistAccommodationBill.paymentMethod := #CREDIT_CARD
!artistAccommodationBill.status := #REFUSED

!new Currency('currencyGBP')
!currencyGBP.name := 'British Pound Sterling'
!currencyGBP.abbreviation := 'GBP'

!new Currency('currencyEUR')
!currencyEUR.name := 'Euro'
!currencyEUR.abbreviation := 'EUR'

!new Currency('currencyUSD')
!currencyUSD.name := 'US Dollar'
!currencyUSD.abbreviation := 'USD'

!new Currency('currencyJPY')
!currencyJPY.name := 'Japanese Yen'
!currencyJPY.abbreviation := 'JPY'

!insert (artworkTransportationBill, currencyGBP) into BillCurrency
!insert (eventMarketingBill, currencyEUR) into BillCurrency
!insert (venueDecorationBill, currencyUSD) into BillCurrency
!insert (artistAccommodationBill, currencyJPY) into BillCurrency

!insert (artExhibitionLaunchExpense, artworkTransportationBill) into ExpenseContainsBills
!insert (artExhibitionLaunchExpense, eventMarketingBill) into ExpenseContainsBills
!insert (artExhibitionLaunchExpense, venueDecorationBill) into ExpenseContainsBills
!insert (artExhibitionLaunchExpense, artistAccommodationBill) into ExpenseContainsBills

!new Comment('transportationComment')
!transportationComment.text := 'Verified dispatch of artwork transportation remains within regional compliance.'

!new Comment('marketingComment')
!marketingComment.text := 'Marketing expenditure refunded due to premature cancellation of ad placements.'

!new Comment('decorationComment')
!decorationComment.text := 'Pending verification of venue decor aligns with artistic director''s vision.'

!new Comment('accommodationComment')
!accommodationComment.text := 'Artist accommodation payment refused due to invoice inconsistencies requiring further review.'

!insert (artExhibitionLaunchExpense, transportationComment) into ExpenseComment
!insert (artExhibitionLaunchExpense, marketingComment) into ExpenseComment
!insert (artExhibitionLaunchExpense, decorationComment) into ExpenseComment
!insert (artExhibitionLaunchExpense, accommodationComment) into ExpenseComment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 60 | 0.00% |
| Multiplicities Errors | 0 | 12 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

## Category invalid
```
!new Expense('outdoorAdventureExpense')
!outdoorAdventureExpense.amount := 1500.00
!outdoorAdventureExpense.startDate := Date('2024-02-10')
!outdoorAdventureExpense.endDate := Date('2024-02-20')

!new Bill('guidedHikingBill')
!guidedHikingBill.amount := 600.00
!guidedHikingBill.category := 'Guided Hiking Services'
!guidedHikingBill.date := Date('2024-02-12')
!guidedHikingBill.paymentMethod := #CASH
!guidedHikingBill.status := #VALIDATED

!new Bill('campingEquipmentBill')
!campingEquipmentBill.amount := 300.00
!campingEquipmentBill.category := 'Camping Equipment Rental'
!campingEquipmentBill.date := Date('2024-02-11')
!campingEquipmentBill.paymentMethod := #CHECK
!campingEquipmentBill.status := #VERIFIED

!new Bill('travelInsuranceBill')
!travelInsuranceBill.amount := 200.00
!travelInsuranceBill.category := 'Travel Insurance'
!travelInsuranceBill.date := Date('2024-01-30')
!travelInsuranceBill.paymentMethod := #CREDIT_CARD
!travelInsuranceBill.status := #VERIFIED

!new Bill('unforeseenExpensesBill')
!unforeseenExpensesBill.amount := 400.00
!unforeseenExpensesBill.category := 'Miscellaneous Unforeseen Expenses'
!unforeseenExpensesBill.date := Date('2024-02-18')
!unforeseenExpensesBill.paymentMethod := #CASH
!unforeseenExpensesBill.status := #PENDING

!new Currency('currencyARS')
!currencyARS.name := 'Argentine Peso'
!currencyARS.abbreviation := 'ARS'

!new Currency('currencyUSD')
!currencyUSD.name := 'United States Dollar'
!currencyUSD.abbreviation := 'USD'

!insert (guidedHikingBill, currencyARS) into BillCurrency
!insert (campingEquipmentBill, currencyARS) into BillCurrency
!insert (travelInsuranceBill, currencyUSD) into BillCurrency
!insert (unforeseenExpensesBill, currencyARS) into BillCurrency

!insert (outdoorAdventureExpense, guidedHikingBill) into ExpenseContainsBills
!insert (outdoorAdventureExpense, campingEquipmentBill) into ExpenseContainsBills
!insert (outdoorAdventureExpense, travelInsuranceBill) into ExpenseContainsBills
!insert (outdoorAdventureExpense, unforeseenExpensesBill) into ExpenseContainsBills

!new Comment('safetyAdvice')
!safetyAdvice.text := 'Ensure you have comprehensive travel insurance for adventure trips.'

!new Comment('equipmentTip')
!equipmentTip.text := 'Rent rather than buy equipment to save on costs.'

!insert (outdoorAdventureExpense, safetyAdvice) into ExpenseComment
!insert (outdoorAdventureExpense, equipmentTip) into ExpenseComment
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 10 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

## Generation 6 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 241 | 0.00% |
| Multiplicities Errors | 0 | 42 | 0.00% |
| Invariants Errors | 0 | 8 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 10 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 5 | 0.00% |

# Summary for all generations
| Summary | Value | 
|---|---| 
| Model | GPT_4O | 
| Type | CoT | 
| System | myexpenses | 
| Number of generations | 6 | 

| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 1310 | 0.00% |
| Multiplicities Errors | 0 | 227 | 0.00% |
| Invariants Errors | 0 | 48 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 50 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 12 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 30 | 0.00% |

