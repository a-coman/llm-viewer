# Generation 1
```
!new Currency('curUSD')
!curUSD.name := 'US Dollar'
!curUSD.abbreviation := 'USD'

!new Currency('curEUR')
!curEUR.name := 'Euro'
!curEUR.abbreviation := 'EUR'

!new Expense('expJanHousehold')
!expJanHousehold.amount := 81.00
!expJanHousehold.startDate := Date('2026-01-01')
!expJanHousehold.endDate := Date('2026-01-31')

!new Bill('billGroceries_2026_01_05')
!billGroceries_2026_01_05.amount := 23.50
!billGroceries_2026_01_05.category := 'Groceries'
!billGroceries_2026_01_05.date := Date('2026-01-05')
!billGroceries_2026_01_05.paymentMethod := #CREDIT_CARD
!billGroceries_2026_01_05.status := #VERIFIED

!new Bill('billHousehold_2026_01_12')
!billHousehold_2026_01_12.amount := 45.20
!billHousehold_2026_01_12.category := 'Household'
!billHousehold_2026_01_12.date := Date('2026-01-12')
!billHousehold_2026_01_12.paymentMethod := #CASH
!billHousehold_2026_01_12.status := #VALIDATED

!new Bill('billPharmacy_2026_01_20')
!billPharmacy_2026_01_20.amount := 12.30
!billPharmacy_2026_01_20.category := 'Pharmacy'
!billPharmacy_2026_01_20.date := Date('2026-01-20')
!billPharmacy_2026_01_20.paymentMethod := #CREDIT_CARD
!billPharmacy_2026_01_20.status := #PENDING

!insert (expJanHousehold, billGroceries_2026_01_05) into ExpenseContainsBills
!insert (expJanHousehold, billHousehold_2026_01_12) into ExpenseContainsBills
!insert (expJanHousehold, billPharmacy_2026_01_20) into ExpenseContainsBills

!insert (billGroceries_2026_01_05, curEUR) into BillCurrency
!insert (billHousehold_2026_01_12, curEUR) into BillCurrency
!insert (billPharmacy_2026_01_20, curEUR) into BillCurrency

!new Comment('cmtJan1')
!cmtJan1.text := 'Monthly household spending for January.'
!new Comment('cmtJan2')
!cmtJan2.text := 'Pharmacy receipt pending verification from provider.'

!insert (expJanHousehold, cmtJan1) into ExpenseComment
!insert (expJanHousehold, cmtJan2) into ExpenseComment


!new Expense('expFebTravel')
!expFebTravel.amount := 234.99
!expFebTravel.startDate := Date('2026-02-10')
!expFebTravel.endDate := Date('2026-02-15')

!new Bill('billFlight_2026_02_10')
!billFlight_2026_02_10.amount := 199.99
!billFlight_2026_02_10.category := 'Travel - Flight'
!billFlight_2026_02_10.date := Date('2026-02-10')
!billFlight_2026_02_10.paymentMethod := #CREDIT_CARD
!billFlight_2026_02_10.status := #VALIDATED

!new Bill('billMetro_2026_02_13')
!billMetro_2026_02_13.amount := 35.00
!billMetro_2026_02_13.category := 'Travel - Local transport'
!billMetro_2026_02_13.date := Date('2026-02-13')
!billMetro_2026_02_13.paymentMethod := #CASH
!billMetro_2026_02_13.status := #VERIFIED

!insert (expFebTravel, billFlight_2026_02_10) into ExpenseContainsBills
!insert (expFebTravel, billMetro_2026_02_13) into ExpenseContainsBills

!insert (billFlight_2026_02_10, curUSD) into BillCurrency
!insert (billMetro_2026_02_13, curUSD) into BillCurrency

!new Comment('cmtTravel1')
!cmtTravel1.text := 'Business trip; flight booked with corporate card.'
!new Comment('cmtTravel2')
!cmtTravel2.text := 'Local transport reimbursed as cash expense.'

!insert (expFebTravel, cmtTravel1) into ExpenseComment
!insert (expFebTravel, cmtTravel2) into ExpenseComment


!new Expense('expMarUtilities')
!expMarUtilities.amount := 118.00
!expMarUtilities.startDate := Date('2026-03-01')
!expMarUtilities.endDate := Date('2026-03-31')

!new Bill('billInternet_2026_03_03')
!billInternet_2026_03_03.amount := 60.00
!billInternet_2026_03_03.category := 'Utilities - Internet'
!billInternet_2026_03_03.date := Date('2026-03-03')
!billInternet_2026_03_03.paymentMethod := #CREDIT_CARD
!billInternet_2026_03_03.status := #PENDING

!new Bill('billElectricity_2026_03_14')
!billElectricity_2026_03_14.amount := 42.75
!billElectricity_2026_03_14.category := 'Utilities - Electricity'
!billElectricity_2026_03_14.date := Date('2026-03-14')
!billElectricity_2026_03_14.paymentMethod := #CHECK
!billElectricity_2026_03_14.status := #VERIFIED

!new Bill('billWater_2026_03_28')
!billWater_2026_03_28.amount := 15.25
!billWater_2026_03_28.category := 'Utilities - Water'
!billWater_2026_03_28.date := Date('2026-03-28')
!billWater_2026_03_28.paymentMethod := #CHECK
!billWater_2026_03_28.status := #DRAFT

!insert (expMarUtilities, billInternet_2026_03_03) into ExpenseContainsBills
!insert (expMarUtilities, billElectricity_2026_03_14) into ExpenseContainsBills
!insert (expMarUtilities, billWater_2026_03_28) into ExpenseContainsBills

!insert (billInternet_2026_03_03, curEUR) into BillCurrency
!insert (billElectricity_2026_03_14, curEUR) into BillCurrency
!insert (billWater_2026_03_28, curEUR) into BillCurrency

!new Comment('cmtUtil1')
!cmtUtil1.text := 'Utilities for March; electricity paid by check.'
!new Comment('cmtUtil2')
!cmtUtil2.text := 'Water bill drafted; waiting for final meter reading.'

!insert (expMarUtilities, cmtUtil1) into ExpenseComment
!insert (expMarUtilities, cmtUtil2) into ExpenseComment
```
## Generation 1 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 100 | 0.00% |
| Multiplicities Errors | 0 | 22 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 3 | 0.00% |

# Generation 2
```
!new Currency('curGBP')
!curGBP.name := 'Pound Sterling'
!curGBP.abbreviation := 'GBP'

!new Expense('expMayConference')
!expMayConference.amount := 512.40
!expMayConference.startDate := Date('2026-05-06')
!expMayConference.endDate := Date('2026-05-09')

!new Bill('billHotel_2026_05_06')
!billHotel_2026_05_06.amount := 300.00
!billHotel_2026_05_06.category := 'Travel - Hotel'
!billHotel_2026_05_06.date := Date('2026-05-06')
!billHotel_2026_05_06.paymentMethod := #CREDIT_CARD
!billHotel_2026_05_06.status := #VALIDATED

!new Bill('billConferenceFee_2026_05_07')
!billConferenceFee_2026_05_07.amount := 150.00
!billConferenceFee_2026_05_07.category := 'Professional - Conference fee'
!billConferenceFee_2026_05_07.date := Date('2026-05-07')
!billConferenceFee_2026_05_07.paymentMethod := #CHECK
!billConferenceFee_2026_05_07.status := #PENDING

!new Bill('billTaxi_2026_05_08')
!billTaxi_2026_05_08.amount := 42.40
!billTaxi_2026_05_08.category := 'Travel - Taxi'
!billTaxi_2026_05_08.date := Date('2026-05-08')
!billTaxi_2026_05_08.paymentMethod := #CASH
!billTaxi_2026_05_08.status := #REFUNDED

!new Bill('billMeal_2026_05_09')
!billMeal_2026_05_09.amount := 20.00
!billMeal_2026_05_09.category := 'Meals'
!billMeal_2026_05_09.date := Date('2026-05-09')
!billMeal_2026_05_09.paymentMethod := #CREDIT_CARD
!billMeal_2026_05_09.status := #REFUSED

!insert (expMayConference, billHotel_2026_05_06) into ExpenseContainsBills
!insert (expMayConference, billConferenceFee_2026_05_07) into ExpenseContainsBills
!insert (expMayConference, billTaxi_2026_05_08) into ExpenseContainsBills
!insert (expMayConference, billMeal_2026_05_09) into ExpenseContainsBills

!insert (billHotel_2026_05_06, curGBP) into BillCurrency
!insert (billConferenceFee_2026_05_07, curGBP) into BillCurrency
!insert (billTaxi_2026_05_08, curGBP) into BillCurrency
!insert (billMeal_2026_05_09, curGBP) into BillCurrency
```
## Generation 2 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 39 | 0.00% |
| Multiplicities Errors | 0 | 8 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

# Generation 3
```
!new Currency('curUSD')
!curUSD.name := 'US Dollar'
!curUSD.abbreviation := 'USD'

!new Expense('expAprLaptopPurchase')
!expAprLaptopPurchase.amount := 1299.00
!expAprLaptopPurchase.startDate := Date('2026-04-22')
!expAprLaptopPurchase.endDate := Date('2026-04-22')

!new Bill('billLaptop_2026_04_22')
!billLaptop_2026_04_22.amount := 1299.00
!billLaptop_2026_04_22.category := 'Equipment - Laptop'
!billLaptop_2026_04_22.date := Date('2026-04-22')
!billLaptop_2026_04_22.paymentMethod := #CREDIT_CARD
!billLaptop_2026_04_22.status := #DRAFT

!insert (expAprLaptopPurchase, billLaptop_2026_04_22) into ExpenseContainsBills
!insert (billLaptop_2026_04_22, curUSD) into BillCurrency

!new Comment('cmtLaptop1')
!cmtLaptop1.text := 'New development laptop intended for work projects.'
!new Comment('cmtLaptop2')
!cmtLaptop2.text := 'Draft bill: waiting for the invoice PDF from the vendor.'
!new Comment('cmtLaptop3')
!cmtLaptop3.text := 'Serial number recorded in asset register.'
!new Comment('cmtLaptop4')
!cmtLaptop4.text := 'Extended warranty included in the purchase price.'
!new Comment('cmtLaptop5')
!cmtLaptop5.text := 'Needs manager approval before reimbursement submission.'

!insert (expAprLaptopPurchase, cmtLaptop1) into ExpenseComment
!insert (expAprLaptopPurchase, cmtLaptop2) into ExpenseComment
!insert (expAprLaptopPurchase, cmtLaptop3) into ExpenseComment
!insert (expAprLaptopPurchase, cmtLaptop4) into ExpenseComment
!insert (expAprLaptopPurchase, cmtLaptop5) into ExpenseComment
```
## Generation 3 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 30 | 0.00% |
| Multiplicities Errors | 0 | 7 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

# Generation 4
```
!new Expense('expJuneNoReceipts')
!expJuneNoReceipts.amount := 0.00
!expJuneNoReceipts.startDate := Date('2026-06-01')
!expJuneNoReceipts.endDate := Date('2026-06-30')

!new Comment('cmtJune1')
!cmtJune1.text := 'Placeholder expense for June: no receipts submitted.'
!new Comment('cmtJune2')
!cmtJune2.text := 'Amount is zero because no bills are attached yet; will update if any late invoices arrive.'

!insert (expJuneNoReceipts, cmtJune1) into ExpenseComment
!insert (expJuneNoReceipts, cmtJune2) into ExpenseComment
```
## Generation 4 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 10 | 0.00% |
| Multiplicities Errors | 0 | 2 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

# Generation 5
```
!new Currency('curCAD')
!curCAD.name := 'Canadian Dollar'
!curCAD.abbreviation := 'CAD'

!new Expense('expAugSubscriptions')
!expAugSubscriptions.amount := 50.00
!expAugSubscriptions.startDate := Date('2026-08-01')
!expAugSubscriptions.endDate := Date('2026-08-31')

!new Bill('billMusicSub_2026_08_02')
!billMusicSub_2026_08_02.amount := 9.99
!billMusicSub_2026_08_02.category := 'Subscription - Music'
!billMusicSub_2026_08_02.date := Date('2026-08-02')
!billMusicSub_2026_08_02.paymentMethod := #CREDIT_CARD
!billMusicSub_2026_08_02.status := #VALIDATED

!new Bill('billCloudStorage_2026_08_05')
!billCloudStorage_2026_08_05.amount := 12.99
!billCloudStorage_2026_08_05.category := 'Subscription - Cloud storage'
!billCloudStorage_2026_08_05.date := Date('2026-08-05')
!billCloudStorage_2026_08_05.paymentMethod := #CREDIT_CARD
!billCloudStorage_2026_08_05.status := #VERIFIED

!new Bill('billAppRenewal_2026_08_11')
!billAppRenewal_2026_08_11.amount := 4.50
!billAppRenewal_2026_08_11.category := 'Subscription - Mobile app'
!billAppRenewal_2026_08_11.date := Date('2026-08-11')
!billAppRenewal_2026_08_11.paymentMethod := #CASH
!billAppRenewal_2026_08_11.status := #PENDING

!new Bill('billStreaming_2026_08_18')
!billStreaming_2026_08_18.amount := 19.00
!billStreaming_2026_08_18.category := 'Subscription - Video streaming'
!billStreaming_2026_08_18.date := Date('2026-08-18')
!billStreaming_2026_08_18.paymentMethod := #CREDIT_CARD
!billStreaming_2026_08_18.status := #REFUNDED

!new Bill('billPaymentFee_2026_08_25')
!billPaymentFee_2026_08_25.amount := 3.52
!billPaymentFee_2026_08_25.category := 'Banking - Payment fee'
!billPaymentFee_2026_08_25.date := Date('2026-08-25')
!billPaymentFee_2026_08_25.paymentMethod := #CHECK
!billPaymentFee_2026_08_25.status := #REFUSED

!insert (expAugSubscriptions, billMusicSub_2026_08_02) into ExpenseContainsBills
!insert (expAugSubscriptions, billCloudStorage_2026_08_05) into ExpenseContainsBills
!insert (expAugSubscriptions, billAppRenewal_2026_08_11) into ExpenseContainsBills
!insert (expAugSubscriptions, billStreaming_2026_08_18) into ExpenseContainsBills
!insert (expAugSubscriptions, billPaymentFee_2026_08_25) into ExpenseContainsBills

!insert (billMusicSub_2026_08_02, curCAD) into BillCurrency
!insert (billCloudStorage_2026_08_05, curCAD) into BillCurrency
!insert (billAppRenewal_2026_08_11, curCAD) into BillCurrency
!insert (billStreaming_2026_08_18, curCAD) into BillCurrency
!insert (billPaymentFee_2026_08_25, curCAD) into BillCurrency
```
## Generation 5 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 47 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

# Generation 6
```
!new Currency('curJPY')
!curJPY.name := 'Japanese Yen'
!curJPY.abbreviation := 'JPY'

!new Currency('curEUR')
!curEUR.name := 'Euro'
!curEUR.abbreviation := 'EUR'

!new Expense('expSepStudyAbroadPrep')
!expSepStudyAbroadPrep.amount := 12274.99
!expSepStudyAbroadPrep.startDate := Date('2026-09-01')
!expSepStudyAbroadPrep.endDate := Date('2026-09-30')

!new Bill('billLanguageSchoolDeposit_2026_09_02')
!billLanguageSchoolDeposit_2026_09_02.amount := 9800.00
!billLanguageSchoolDeposit_2026_09_02.category := 'Education - Language school deposit'
!billLanguageSchoolDeposit_2026_09_02.date := Date('2026-09-02')
!billLanguageSchoolDeposit_2026_09_02.paymentMethod := #CREDIT_CARD
!billLanguageSchoolDeposit_2026_09_02.status := #PENDING

!new Bill('billTransitCard_2026_09_06')
!billTransitCard_2026_09_06.amount := 2400.00
!billTransitCard_2026_09_06.category := 'Travel - Transit card'
!billTransitCard_2026_09_06.date := Date('2026-09-06')
!billTransitCard_2026_09_06.paymentMethod := #CASH
!billTransitCard_2026_09_06.status := #VALIDATED

!new Bill('billTextbook_2026_09_10')
!billTextbook_2026_09_10.amount := 59.99
!billTextbook_2026_09_10.category := 'Education - Textbook'
!billTextbook_2026_09_10.date := Date('2026-09-10')
!billTextbook_2026_09_10.paymentMethod := #CHECK
!billTextbook_2026_09_10.status := #VERIFIED

!new Bill('billPhotoCopies_2026_09_18')
!billPhotoCopies_2026_09_18.amount := 15.00
!billPhotoCopies_2026_09_18.category := 'Education - Copies and printing'
!billPhotoCopies_2026_09_18.date := Date('2026-09-18')
!billPhotoCopies_2026_09_18.paymentMethod := #CASH
!billPhotoCopies_2026_09_18.status := #DRAFT

!insert (expSepStudyAbroadPrep, billLanguageSchoolDeposit_2026_09_02) into ExpenseContainsBills
!insert (expSepStudyAbroadPrep, billTransitCard_2026_09_06) into ExpenseContainsBills
!insert (expSepStudyAbroadPrep, billTextbook_2026_09_10) into ExpenseContainsBills
!insert (expSepStudyAbroadPrep, billPhotoCopies_2026_09_18) into ExpenseContainsBills

!insert (billLanguageSchoolDeposit_2026_09_02, curJPY) into BillCurrency
!insert (billTransitCard_2026_09_06, curJPY) into BillCurrency
!insert (billTextbook_2026_09_10, curEUR) into BillCurrency
!insert (billPhotoCopies_2026_09_18, curEUR) into BillCurrency

!new Comment('cmtStudy1')
!cmtStudy1.text := 'Preparation costs for September; includes a deposit and local transit.'
!new Comment('cmtStudy2')
!cmtStudy2.text := 'Textbook purchased from an EU online retailer; receipt verified.'
!new Comment('cmtStudy3')
!cmtStudy3.text := 'Printing expenses still in draft until the campus invoice is issued.'

!insert (expSepStudyAbroadPrep, cmtStudy1) into ExpenseComment
!insert (expSepStudyAbroadPrep, cmtStudy2) into ExpenseComment
!insert (expSepStudyAbroadPrep, cmtStudy3) into ExpenseComment
```
## Generation 6 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 51 | 0.00% |
| Multiplicities Errors | 0 | 11 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

# Generation 7
```
!new Currency('curAUD')
!curAUD.name := 'Australian Dollar'
!curAUD.abbreviation := 'AUD'

!new Currency('curCHF')
!curCHF.name := 'Swiss Franc'
!curCHF.abbreviation := 'CHF'

!new Expense('expOctInternationalOnlineOrder')
!expOctInternationalOnlineOrder.amount := 145.75
!expOctInternationalOnlineOrder.startDate := Date('2026-10-01')
!expOctInternationalOnlineOrder.endDate := Date('2026-10-31')

!new Bill('billGadget_2026_10_04')
!billGadget_2026_10_04.amount := 59.95
!billGadget_2026_10_04.category := 'Shopping - Electronics'
!billGadget_2026_10_04.date := Date('2026-10-04')
!billGadget_2026_10_04.paymentMethod := #CREDIT_CARD
!billGadget_2026_10_04.status := #VERIFIED

!new Bill('billShipping_2026_10_04')
!billShipping_2026_10_04.amount := 18.50
!billShipping_2026_10_04.category := 'Shopping - Shipping'
!billShipping_2026_10_04.date := Date('2026-10-04')
!billShipping_2026_10_04.paymentMethod := #CREDIT_CARD
!billShipping_2026_10_04.status := #VALIDATED

!new Bill('billImportDuty_2026_10_11')
!billImportDuty_2026_10_11.amount := 12.00
!billImportDuty_2026_10_11.category := 'Taxes - Import duty'
!billImportDuty_2026_10_11.date := Date('2026-10-11')
!billImportDuty_2026_10_11.paymentMethod := #CASH
!billImportDuty_2026_10_11.status := #PENDING

!new Bill('billReturnLabel_2026_10_19')
!billReturnLabel_2026_10_19.amount := 45.00
!billReturnLabel_2026_10_19.category := 'Shopping - Return label'
!billReturnLabel_2026_10_19.date := Date('2026-10-19')
!billReturnLabel_2026_10_19.paymentMethod := #CHECK
!billReturnLabel_2026_10_19.status := #REFUNDED

!new Bill('billBankFee_2026_10_20')
!billBankFee_2026_10_20.amount := 10.30
!billBankFee_2026_10_20.category := 'Banking - Foreign transaction fee'
!billBankFee_2026_10_20.date := Date('2026-10-20')
!billBankFee_2026_10_20.paymentMethod := #CREDIT_CARD
!billBankFee_2026_10_20.status := #VERIFIED

!insert (expOctInternationalOnlineOrder, billGadget_2026_10_04) into ExpenseContainsBills
!insert (expOctInternationalOnlineOrder, billShipping_2026_10_04) into ExpenseContainsBills
!insert (expOctInternationalOnlineOrder, billImportDuty_2026_10_11) into ExpenseContainsBills
!insert (expOctInternationalOnlineOrder, billReturnLabel_2026_10_19) into ExpenseContainsBills
!insert (expOctInternationalOnlineOrder, billBankFee_2026_10_20) into ExpenseContainsBills

!insert (billGadget_2026_10_04, curAUD) into BillCurrency
!insert (billShipping_2026_10_04, curAUD) into BillCurrency
!insert (billImportDuty_2026_10_11, curAUD) into BillCurrency
!insert (billReturnLabel_2026_10_19, curCHF) into BillCurrency
!insert (billBankFee_2026_10_20, curCHF) into BillCurrency
```
## Generation 7 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 50 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

# Generation 8
```
!new Currency('curSEK')
!curSEK.name := 'Swedish Krona'
!curSEK.abbreviation := 'SEK'

!new Expense('expNovHealth')
!expNovHealth.amount := 1400.50
!expNovHealth.startDate := Date('2026-11-01')
!expNovHealth.endDate := Date('2026-11-30')

!new Bill('billDental_2026_11_03')
!billDental_2026_11_03.amount := 850.00
!billDental_2026_11_03.category := 'Health - Dental'
!billDental_2026_11_03.date := Date('2026-11-03')
!billDental_2026_11_03.paymentMethod := #CREDIT_CARD
!billDental_2026_11_03.status := #VALIDATED

!new Bill('billPrescription_2026_11_10')
!billPrescription_2026_11_10.amount := 120.50
!billPrescription_2026_11_10.category := 'Health - Prescription'
!billPrescription_2026_11_10.date := Date('2026-11-10')
!billPrescription_2026_11_10.paymentMethod := #CASH
!billPrescription_2026_11_10.status := #VERIFIED

!new Bill('billPhysio_2026_11_21')
!billPhysio_2026_11_21.amount := 430.00
!billPhysio_2026_11_21.category := 'Health - Physiotherapy'
!billPhysio_2026_11_21.date := Date('2026-11-21')
!billPhysio_2026_11_21.paymentMethod := #CHECK
!billPhysio_2026_11_21.status := #PENDING

!insert (expNovHealth, billDental_2026_11_03) into ExpenseContainsBills
!insert (expNovHealth, billPrescription_2026_11_10) into ExpenseContainsBills
!insert (expNovHealth, billPhysio_2026_11_21) into ExpenseContainsBills

!insert (billDental_2026_11_03, curSEK) into BillCurrency
!insert (billPrescription_2026_11_10, curSEK) into BillCurrency
!insert (billPhysio_2026_11_21, curSEK) into BillCurrency


!new Expense('expNovGifts')
!expNovGifts.amount := 528.50
!expNovGifts.startDate := Date('2026-11-15')
!expNovGifts.endDate := Date('2026-11-28')

!new Bill('billToyStore_2026_11_16')
!billToyStore_2026_11_16.amount := 299.00
!billToyStore_2026_11_16.category := 'Gifts - Toy store'
!billToyStore_2026_11_16.date := Date('2026-11-16')
!billToyStore_2026_11_16.paymentMethod := #CREDIT_CARD
!billToyStore_2026_11_16.status := #VERIFIED

!new Bill('billBookshop_2026_11_17')
!billBookshop_2026_11_17.amount := 159.00
!billBookshop_2026_11_17.category := 'Gifts - Bookshop'
!billBookshop_2026_11_17.date := Date('2026-11-17')
!billBookshop_2026_11_17.paymentMethod := #CASH
!billBookshop_2026_11_17.status := #VALIDATED

!new Bill('billWrapping_2026_11_18')
!billWrapping_2026_11_18.amount := 25.00
!billWrapping_2026_11_18.category := 'Gifts - Wrapping supplies'
!billWrapping_2026_11_18.date := Date('2026-11-18')
!billWrapping_2026_11_18.paymentMethod := #CASH
!billWrapping_2026_11_18.status := #DRAFT

!new Bill('billCourier_2026_11_22')
!billCourier_2026_11_22.amount := 45.50
!billCourier_2026_11_22.category := 'Gifts - Courier shipping'
!billCourier_2026_11_22.date := Date('2026-11-22')
!billCourier_2026_11_22.paymentMethod := #CREDIT_CARD
!billCourier_2026_11_22.status := #REFUNDED

!insert (expNovGifts, billToyStore_2026_11_16) into ExpenseContainsBills
!insert (expNovGifts, billBookshop_2026_11_17) into ExpenseContainsBills
!insert (expNovGifts, billWrapping_2026_11_18) into ExpenseContainsBills
!insert (expNovGifts, billCourier_2026_11_22) into ExpenseContainsBills

!insert (billToyStore_2026_11_16, curSEK) into BillCurrency
!insert (billBookshop_2026_11_17, curSEK) into BillCurrency
!insert (billWrapping_2026_11_18, curSEK) into BillCurrency
!insert (billCourier_2026_11_22, curSEK) into BillCurrency

!new Comment('cmtGifts1')
!cmtGifts1.text := 'Holiday gifts in November; one shipping charge was refunded after a delivery delay.'
!insert (expNovGifts, cmtGifts1) into ExpenseComment
```
## Generation 8 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 70 | 0.00% |
| Multiplicities Errors | 0 | 15 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 2 | 0.00% |

# Generation 9
```
!new Currency('curMXN')
!curMXN.name := 'Mexican Peso'
!curMXN.abbreviation := 'MXN'

!new Currency('curINR')
!curINR.name := 'Indian Rupee'
!curINR.abbreviation := 'INR'

!new Currency('curZAR')
!curZAR.name := 'South African Rand'
!curZAR.abbreviation := 'ZAR'


!new Expense('expDecYearEndGiving')
!expDecYearEndGiving.amount := 1200.00
!expDecYearEndGiving.startDate := Date('2026-12-01')
!expDecYearEndGiving.endDate := Date('2026-12-31')

!new Bill('billFoodBankDonation_2026_12_03')
!billFoodBankDonation_2026_12_03.amount := 250.00
!billFoodBankDonation_2026_12_03.category := 'Charity - Food bank donation'
!billFoodBankDonation_2026_12_03.date := Date('2026-12-03')
!billFoodBankDonation_2026_12_03.paymentMethod := #CASH
!billFoodBankDonation_2026_12_03.status := #VERIFIED

!new Bill('billDisasterRelief_2026_12_08')
!billDisasterRelief_2026_12_08.amount := 300.00
!billDisasterRelief_2026_12_08.category := 'Charity - Disaster relief'
!billDisasterRelief_2026_12_08.date := Date('2026-12-08')
!billDisasterRelief_2026_12_08.paymentMethod := #CREDIT_CARD
!billDisasterRelief_2026_12_08.status := #VALIDATED

!new Bill('billEducationFund_2026_12_12')
!billEducationFund_2026_12_12.amount := 150.00
!billEducationFund_2026_12_12.category := 'Charity - Education fund'
!billEducationFund_2026_12_12.date := Date('2026-12-12')
!billEducationFund_2026_12_12.paymentMethod := #CHECK
!billEducationFund_2026_12_12.status := #PENDING

!new Bill('billFundraisingDinner_2026_12_18')
!billFundraisingDinner_2026_12_18.amount := 420.75
!billFundraisingDinner_2026_12_18.category := 'Charity - Fundraising dinner ticket'
!billFundraisingDinner_2026_12_18.date := Date('2026-12-18')
!billFundraisingDinner_2026_12_18.paymentMethod := #CREDIT_CARD
!billFundraisingDinner_2026_12_18.status := #VERIFIED

!new Bill('billIntlTransferFee_2026_12_21')
!billIntlTransferFee_2026_12_21.amount := 79.25
!billIntlTransferFee_2026_12_21.category := 'Banking - International transfer fee'
!billIntlTransferFee_2026_12_21.date := Date('2026-12-21')
!billIntlTransferFee_2026_12_21.paymentMethod := #CASH
!billIntlTransferFee_2026_12_21.status := #REFUNDED

!insert (expDecYearEndGiving, billFoodBankDonation_2026_12_03) into ExpenseContainsBills
!insert (expDecYearEndGiving, billDisasterRelief_2026_12_08) into ExpenseContainsBills
!insert (expDecYearEndGiving, billEducationFund_2026_12_12) into ExpenseContainsBills
!insert (expDecYearEndGiving, billFundraisingDinner_2026_12_18) into ExpenseContainsBills
!insert (expDecYearEndGiving, billIntlTransferFee_2026_12_21) into ExpenseContainsBills

!insert (billFoodBankDonation_2026_12_03, curMXN) into BillCurrency
!insert (billDisasterRelief_2026_12_08, curMXN) into BillCurrency
!insert (billEducationFund_2026_12_12, curINR) into BillCurrency
!insert (billFundraisingDinner_2026_12_18, curINR) into BillCurrency
!insert (billIntlTransferFee_2026_12_21, curZAR) into BillCurrency

!new Comment('cmtGiving1')
!cmtGiving1.text := 'Year-end donations and fundraising expenses across multiple organizations.'
!insert (expDecYearEndGiving, cmtGiving1) into ExpenseComment


!new Expense('expDecPetCare')
!expDecPetCare.amount := 270.00
!expDecPetCare.startDate := Date('2026-12-05')
!expDecPetCare.endDate := Date('2026-12-20')

!new Bill('billVetVaccination_2026_12_06')
!billVetVaccination_2026_12_06.amount := 180.00
!billVetVaccination_2026_12_06.category := 'Pet - Vaccination'
!billVetVaccination_2026_12_06.date := Date('2026-12-06')
!billVetVaccination_2026_12_06.paymentMethod := #CREDIT_CARD
!billVetVaccination_2026_12_06.status := #VALIDATED

!new Bill('billPetGrooming_2026_12_14')
!billPetGrooming_2026_12_14.amount := 65.50
!billPetGrooming_2026_12_14.category := 'Pet - Grooming'
!billPetGrooming_2026_12_14.date := Date('2026-12-14')
!billPetGrooming_2026_12_14.paymentMethod := #CASH
!billPetGrooming_2026_12_14.status := #VERIFIED

!new Bill('billPetFood_2026_12_19')
!billPetFood_2026_12_19.amount := 24.50
!billPetFood_2026_12_19.category := 'Pet - Food'
!billPetFood_2026_12_19.date := Date('2026-12-19')
!billPetFood_2026_12_19.paymentMethod := #CASH
!billPetFood_2026_12_19.status := #DRAFT

!insert (expDecPetCare, billVetVaccination_2026_12_06) into ExpenseContainsBills
!insert (expDecPetCare, billPetGrooming_2026_12_14) into ExpenseContainsBills
!insert (expDecPetCare, billPetFood_2026_12_19) into ExpenseContainsBills

!insert (billVetVaccination_2026_12_06, curZAR) into BillCurrency
!insert (billPetGrooming_2026_12_14, curZAR) into BillCurrency
!insert (billPetFood_2026_12_19, curZAR) into BillCurrency
```
## Generation 9 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 84 | 0.00% |
| Multiplicities Errors | 0 | 17 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 2 | 0.00% |

# Generation 10
```
!new Currency('curDKK')
!curDKK.name := 'Danish Krone'
!curDKK.abbreviation := 'DKK'

!new Expense('expJulMovingApartment')
!expJulMovingApartment.amount := 1319.55
!expJulMovingApartment.startDate := Date('2026-07-01')
!expJulMovingApartment.endDate := Date('2026-07-31')

!new Bill('billSecurityDeposit_2026_07_02')
!billSecurityDeposit_2026_07_02.amount := 950.00
!billSecurityDeposit_2026_07_02.category := 'Housing - Security deposit'
!billSecurityDeposit_2026_07_02.date := Date('2026-07-02')
!billSecurityDeposit_2026_07_02.paymentMethod := #CHECK
!billSecurityDeposit_2026_07_02.status := #PENDING

!new Bill('billTruckRental_2026_07_09')
!billTruckRental_2026_07_09.amount := 120.00
!billTruckRental_2026_07_09.category := 'Moving - Truck rental'
!billTruckRental_2026_07_09.date := Date('2026-07-09')
!billTruckRental_2026_07_09.paymentMethod := #CREDIT_CARD
!billTruckRental_2026_07_09.status := #VALIDATED

!new Bill('billPackingSupplies_2026_07_10')
!billPackingSupplies_2026_07_10.amount := 43.80
!billPackingSupplies_2026_07_10.category := 'Moving - Packing supplies'
!billPackingSupplies_2026_07_10.date := Date('2026-07-10')
!billPackingSupplies_2026_07_10.paymentMethod := #CASH
!billPackingSupplies_2026_07_10.status := #VERIFIED

!new Bill('billEndOfLeaseCleaning_2026_07_14')
!billEndOfLeaseCleaning_2026_07_14.amount := 160.00
!billEndOfLeaseCleaning_2026_07_14.category := 'Housing - End-of-lease cleaning'
!billEndOfLeaseCleaning_2026_07_14.date := Date('2026-07-14')
!billEndOfLeaseCleaning_2026_07_14.paymentMethod := #CREDIT_CARD
!billEndOfLeaseCleaning_2026_07_14.status := #VERIFIED

!new Bill('billAddressChangeFee_2026_07_18')
!billAddressChangeFee_2026_07_18.amount := 8.50
!billAddressChangeFee_2026_07_18.category := 'Administration - Address change fee'
!billAddressChangeFee_2026_07_18.date := Date('2026-07-18')
!billAddressChangeFee_2026_07_18.paymentMethod := #CASH
!billAddressChangeFee_2026_07_18.status := #DRAFT

!new Bill('billParkingPermit_2026_07_23')
!billParkingPermit_2026_07_23.amount := 37.25
!billParkingPermit_2026_07_23.category := 'Moving - Parking permit'
!billParkingPermit_2026_07_23.date := Date('2026-07-23')
!billParkingPermit_2026_07_23.paymentMethod := #CASH
!billParkingPermit_2026_07_23.status := #VALIDATED

!insert (expJulMovingApartment, billSecurityDeposit_2026_07_02) into ExpenseContainsBills
!insert (expJulMovingApartment, billTruckRental_2026_07_09) into ExpenseContainsBills
!insert (expJulMovingApartment, billPackingSupplies_2026_07_10) into ExpenseContainsBills
!insert (expJulMovingApartment, billEndOfLeaseCleaning_2026_07_14) into ExpenseContainsBills
!insert (expJulMovingApartment, billAddressChangeFee_2026_07_18) into ExpenseContainsBills
!insert (expJulMovingApartment, billParkingPermit_2026_07_23) into ExpenseContainsBills

!insert (billSecurityDeposit_2026_07_02, curDKK) into BillCurrency
!insert (billTruckRental_2026_07_09, curDKK) into BillCurrency
!insert (billPackingSupplies_2026_07_10, curDKK) into BillCurrency
!insert (billEndOfLeaseCleaning_2026_07_14, curDKK) into BillCurrency
!insert (billAddressChangeFee_2026_07_18, curDKK) into BillCurrency
!insert (billParkingPermit_2026_07_23, curDKK) into BillCurrency

!new Comment('cmtMove1')
!cmtMove1.text := 'July move to a new apartment; deposit paid by check, remaining costs mixed.'
!new Comment('cmtMove2')
!cmtMove2.text := 'Address change fee still in draft pending confirmation email.'

!insert (expJulMovingApartment, cmtMove1) into ExpenseComment
!insert (expJulMovingApartment, cmtMove2) into ExpenseComment
```
## Generation 10 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 61 | 0.00% |
| Multiplicities Errors | 0 | 14 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

# Generation 11
```
!new Currency('curNOK')
!curNOK.name := 'Norwegian Krone'
!curNOK.abbreviation := 'NOK'

!new Currency('curPLN')
!curPLN.name := 'Polish Zloty'
!curPLN.abbreviation := 'PLN'

!new Expense('expMarCarRepair')
!expMarCarRepair.amount := 4250.00
!expMarCarRepair.startDate := Date('2026-03-04')
!expMarCarRepair.endDate := Date('2026-03-12')

!new Bill('billCarPartsOrder_2026_03_04')
!billCarPartsOrder_2026_03_04.amount := 1500.00
!billCarPartsOrder_2026_03_04.category := 'Vehicle - Parts'
!billCarPartsOrder_2026_03_04.date := Date('2026-03-04')
!billCarPartsOrder_2026_03_04.paymentMethod := #CREDIT_CARD
!billCarPartsOrder_2026_03_04.status := #PENDING

!new Bill('billGarageLabor_2026_03_08')
!billGarageLabor_2026_03_08.amount := 2200.00
!billGarageLabor_2026_03_08.category := 'Vehicle - Labor'
!billGarageLabor_2026_03_08.date := Date('2026-03-08')
!billGarageLabor_2026_03_08.paymentMethod := #CHECK
!billGarageLabor_2026_03_08.status := #VERIFIED

!new Bill('billTowingService_2026_03_09')
!billTowingService_2026_03_09.amount := 350.00
!billTowingService_2026_03_09.category := 'Vehicle - Towing'
!billTowingService_2026_03_09.date := Date('2026-03-09')
!billTowingService_2026_03_09.paymentMethod := #CASH
!billTowingService_2026_03_09.status := #VALIDATED

!new Bill('billSafetyInspection_2026_03_12')
!billSafetyInspection_2026_03_12.amount := 200.00
!billSafetyInspection_2026_03_12.category := 'Vehicle - Inspection'
!billSafetyInspection_2026_03_12.date := Date('2026-03-12')
!billSafetyInspection_2026_03_12.paymentMethod := #CREDIT_CARD
!billSafetyInspection_2026_03_12.status := #VALIDATED

!insert (expMarCarRepair, billCarPartsOrder_2026_03_04) into ExpenseContainsBills
!insert (expMarCarRepair, billGarageLabor_2026_03_08) into ExpenseContainsBills
!insert (expMarCarRepair, billTowingService_2026_03_09) into ExpenseContainsBills
!insert (expMarCarRepair, billSafetyInspection_2026_03_12) into ExpenseContainsBills

!insert (billCarPartsOrder_2026_03_04, curPLN) into BillCurrency
!insert (billGarageLabor_2026_03_08, curNOK) into BillCurrency
!insert (billTowingService_2026_03_09, curNOK) into BillCurrency
!insert (billSafetyInspection_2026_03_12, curNOK) into BillCurrency
```
## Generation 11 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 42 | 0.00% |
| Multiplicities Errors | 0 | 8 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

# Generation 12
```
!new Currency('curBRL')
!curBRL.name := 'Brazilian Real'
!curBRL.abbreviation := 'BRL'

!new Currency('curSGD')
!curSGD.name := 'Singapore Dollar'
!curSGD.abbreviation := 'SGD'

!new Expense('expFebHomeRenovation')
!expFebHomeRenovation.amount := 2175.00
!expFebHomeRenovation.startDate := Date('2026-02-01')
!expFebHomeRenovation.endDate := Date('2026-02-28')

!new Bill('billPaintAndPrimer_2026_02_03')
!billPaintAndPrimer_2026_02_03.amount := 350.00
!billPaintAndPrimer_2026_02_03.category := 'Home - Paint and primer'
!billPaintAndPrimer_2026_02_03.date := Date('2026-02-03')
!billPaintAndPrimer_2026_02_03.paymentMethod := #CREDIT_CARD
!billPaintAndPrimer_2026_02_03.status := #VALIDATED

!new Bill('billFlooringMaterials_2026_02_05')
!billFlooringMaterials_2026_02_05.amount := 1200.00
!billFlooringMaterials_2026_02_05.category := 'Home - Flooring materials'
!billFlooringMaterials_2026_02_05.date := Date('2026-02-05')
!billFlooringMaterials_2026_02_05.paymentMethod := #CHECK
!billFlooringMaterials_2026_02_05.status := #PENDING

!new Bill('billHardwareFasteners_2026_02_06')
!billHardwareFasteners_2026_02_06.amount := 90.00
!billHardwareFasteners_2026_02_06.category := 'Home - Hardware and fasteners'
!billHardwareFasteners_2026_02_06.date := Date('2026-02-06')
!billHardwareFasteners_2026_02_06.paymentMethod := #CASH
!billHardwareFasteners_2026_02_06.status := #VERIFIED

!new Bill('billToolRental_2026_02_07')
!billToolRental_2026_02_07.amount := 180.00
!billToolRental_2026_02_07.category := 'Home - Tool rental'
!billToolRental_2026_02_07.date := Date('2026-02-07')
!billToolRental_2026_02_07.paymentMethod := #CREDIT_CARD
!billToolRental_2026_02_07.status := #VERIFIED

!new Bill('billPlumbingFix_2026_02_10')
!billPlumbingFix_2026_02_10.amount := 220.00
!billPlumbingFix_2026_02_10.category := 'Home - Plumbing repair'
!billPlumbingFix_2026_02_10.date := Date('2026-02-10')
!billPlumbingFix_2026_02_10.paymentMethod := #CASH
!billPlumbingFix_2026_02_10.status := #VALIDATED

!new Bill('billElectricianVisit_2026_02_14')
!billElectricianVisit_2026_02_14.amount := 60.00
!billElectricianVisit_2026_02_14.category := 'Home - Electrician visit fee'
!billElectricianVisit_2026_02_14.date := Date('2026-02-14')
!billElectricianVisit_2026_02_14.paymentMethod := #CREDIT_CARD
!billElectricianVisit_2026_02_14.status := #REFUNDED

!new Bill('billSecondTripSupplies_2026_02_21')
!billSecondTripSupplies_2026_02_21.amount := 75.00
!billSecondTripSupplies_2026_02_21.category := 'Home - Additional supplies'
!billSecondTripSupplies_2026_02_21.date := Date('2026-02-21')
!billSecondTripSupplies_2026_02_21.paymentMethod := #CHECK
!billSecondTripSupplies_2026_02_21.status := #DRAFT

!insert (expFebHomeRenovation, billPaintAndPrimer_2026_02_03) into ExpenseContainsBills
!insert (expFebHomeRenovation, billFlooringMaterials_2026_02_05) into ExpenseContainsBills
!insert (expFebHomeRenovation, billHardwareFasteners_2026_02_06) into ExpenseContainsBills
!insert (expFebHomeRenovation, billToolRental_2026_02_07) into ExpenseContainsBills
!insert (expFebHomeRenovation, billPlumbingFix_2026_02_10) into ExpenseContainsBills
!insert (expFebHomeRenovation, billElectricianVisit_2026_02_14) into ExpenseContainsBills
!insert (expFebHomeRenovation, billSecondTripSupplies_2026_02_21) into ExpenseContainsBills

!insert (billPaintAndPrimer_2026_02_03, curBRL) into BillCurrency
!insert (billFlooringMaterials_2026_02_05, curBRL) into BillCurrency
!insert (billHardwareFasteners_2026_02_06, curBRL) into BillCurrency
!insert (billPlumbingFix_2026_02_10, curBRL) into BillCurrency

!insert (billToolRental_2026_02_07, curSGD) into BillCurrency
!insert (billElectricianVisit_2026_02_14, curSGD) into BillCurrency
!insert (billSecondTripSupplies_2026_02_21, curSGD) into BillCurrency
```
## Generation 12 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 66 | 0.00% |
| Multiplicities Errors | 0 | 14 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

# Generation 13
```
!new Currency('curNZD')
!curNZD.name := 'New Zealand Dollar'
!curNZD.abbreviation := 'NZD'

!new Currency('curHUF')
!curHUF.name := 'Hungarian Forint'
!curHUF.abbreviation := 'HUF'

!new Expense('expJanTaxFiling')
!expJanTaxFiling.amount := 780.00
!expJanTaxFiling.startDate := Date('2026-01-18')
!expJanTaxFiling.endDate := Date('2026-01-18')

!new Bill('billAccountantFee_2026_01_18')
!billAccountantFee_2026_01_18.amount := 780.00
!billAccountantFee_2026_01_18.category := 'Professional - Tax filing service'
!billAccountantFee_2026_01_18.date := Date('2026-01-18')
!billAccountantFee_2026_01_18.paymentMethod := #CHECK
!billAccountantFee_2026_01_18.status := #VALIDATED

!insert (expJanTaxFiling, billAccountantFee_2026_01_18) into ExpenseContainsBills
!insert (billAccountantFee_2026_01_18, curHUF) into BillCurrency

!new Comment('cmtTax1')
!cmtTax1.text := 'Annual personal tax filing prepared by external accountant; paid by check.'
!insert (expJanTaxFiling, cmtTax1) into ExpenseComment


!new Expense('expJanFamilyEvent')
!expJanFamilyEvent.amount := 346.75
!expJanFamilyEvent.startDate := Date('2026-01-24')
!expJanFamilyEvent.endDate := Date('2026-01-25')

!new Bill('billVenueDeposit_2026_01_24')
!billVenueDeposit_2026_01_24.amount := 120.00
!billVenueDeposit_2026_01_24.category := 'Events - Venue deposit'
!billVenueDeposit_2026_01_24.date := Date('2026-01-24')
!billVenueDeposit_2026_01_24.paymentMethod := #CREDIT_CARD
!billVenueDeposit_2026_01_24.status := #PENDING

!new Bill('billDecorations_2026_01_24')
!billDecorations_2026_01_24.amount := 56.75
!billDecorations_2026_01_24.category := 'Events - Decorations'
!billDecorations_2026_01_24.date := Date('2026-01-24')
!billDecorations_2026_01_24.paymentMethod := #CASH
!billDecorations_2026_01_24.status := #VERIFIED

!new Bill('billCateringFinal_2026_01_25')
!billCateringFinal_2026_01_25.amount := 170.00
!billCateringFinal_2026_01_25.category := 'Events - Catering'
!billCateringFinal_2026_01_25.date := Date('2026-01-25')
!billCateringFinal_2026_01_25.paymentMethod := #CREDIT_CARD
!billCateringFinal_2026_01_25.status := #VALIDATED

!insert (expJanFamilyEvent, billVenueDeposit_2026_01_24) into ExpenseContainsBills
!insert (expJanFamilyEvent, billDecorations_2026_01_24) into ExpenseContainsBills
!insert (expJanFamilyEvent, billCateringFinal_2026_01_25) into ExpenseContainsBills

!insert (billVenueDeposit_2026_01_24, curNZD) into BillCurrency
!insert (billDecorations_2026_01_24, curNZD) into BillCurrency
!insert (billCateringFinal_2026_01_25, curNZD) into BillCurrency

!new Comment('cmtEvent1')
!cmtEvent1.text := 'Family event costs split across deposit, decorations, and final catering bill.'
!new Comment('cmtEvent2')
!cmtEvent2.text := 'Venue deposit is pending confirmation from the event center.'

!insert (expJanFamilyEvent, cmtEvent1) into ExpenseComment
!insert (expJanFamilyEvent, cmtEvent2) into ExpenseComment
```
## Generation 13 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 55 | 0.00% |
| Multiplicities Errors | 0 | 11 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 2 | 0.00% |

# Generation 14
```
!new Currency('curILS')
!curILS.name := 'Israeli New Shekel'
!curILS.abbreviation := 'ILS'

!new Currency('curCZK')
!curCZK.name := 'Czech Koruna'
!curCZK.abbreviation := 'CZK'

!new Expense('expAprSpringMaintenance')
!expAprSpringMaintenance.amount := 570.00
!expAprSpringMaintenance.startDate := Date('2026-04-01')
!expAprSpringMaintenance.endDate := Date('2026-04-30')

!new Bill('billBikeService_2026_04_02')
!billBikeService_2026_04_02.amount := 120.00
!billBikeService_2026_04_02.category := 'Transport - Bicycle service'
!billBikeService_2026_04_02.date := Date('2026-04-02')
!billBikeService_2026_04_02.paymentMethod := #CASH
!billBikeService_2026_04_02.status := #VALIDATED

!new Bill('billGardenSupplies_2026_04_05')
!billGardenSupplies_2026_04_05.amount := 89.90
!billGardenSupplies_2026_04_05.category := 'Home - Garden supplies'
!billGardenSupplies_2026_04_05.date := Date('2026-04-05')
!billGardenSupplies_2026_04_05.paymentMethod := #CREDIT_CARD
!billGardenSupplies_2026_04_05.status := #VERIFIED

!new Bill('billKeyCopy_2026_04_06')
!billKeyCopy_2026_04_06.amount := 15.60
!billKeyCopy_2026_04_06.category := 'Home - Key copy'
!billKeyCopy_2026_04_06.date := Date('2026-04-06')
!billKeyCopy_2026_04_06.paymentMethod := #CASH
!billKeyCopy_2026_04_06.status := #DRAFT

!new Bill('billSmokeDetectors_2026_04_08')
!billSmokeDetectors_2026_04_08.amount := 40.00
!billSmokeDetectors_2026_04_08.category := 'Home - Safety equipment'
!billSmokeDetectors_2026_04_08.date := Date('2026-04-08')
!billSmokeDetectors_2026_04_08.paymentMethod := #CREDIT_CARD
!billSmokeDetectors_2026_04_08.status := #PENDING

!new Bill('billWaterHeaterService_2026_04_12')
!billWaterHeaterService_2026_04_12.amount := 210.00
!billWaterHeaterService_2026_04_12.category := 'Home - Water heater maintenance'
!billWaterHeaterService_2026_04_12.date := Date('2026-04-12')
!billWaterHeaterService_2026_04_12.paymentMethod := #CHECK
!billWaterHeaterService_2026_04_12.status := #VERIFIED

!new Bill('billReplacementHose_2026_04_17')
!billReplacementHose_2026_04_17.amount := 33.33
!billReplacementHose_2026_04_17.category := 'Home - Plumbing parts'
!billReplacementHose_2026_04_17.date := Date('2026-04-17')
!billReplacementHose_2026_04_17.paymentMethod := #CASH
!billReplacementHose_2026_04_17.status := #REFUNDED

!new Bill('billWindowRepair_2026_04_25')
!billWindowRepair_2026_04_25.amount := 61.17
!billWindowRepair_2026_04_25.category := 'Home - Window repair'
!billWindowRepair_2026_04_25.date := Date('2026-04-25')
!billWindowRepair_2026_04_25.paymentMethod := #CREDIT_CARD
!billWindowRepair_2026_04_25.status := #REFUSED

!insert (expAprSpringMaintenance, billBikeService_2026_04_02) into ExpenseContainsBills
!insert (expAprSpringMaintenance, billGardenSupplies_2026_04_05) into ExpenseContainsBills
!insert (expAprSpringMaintenance, billKeyCopy_2026_04_06) into ExpenseContainsBills
!insert (expAprSpringMaintenance, billSmokeDetectors_2026_04_08) into ExpenseContainsBills
!insert (expAprSpringMaintenance, billWaterHeaterService_2026_04_12) into ExpenseContainsBills
!insert (expAprSpringMaintenance, billReplacementHose_2026_04_17) into ExpenseContainsBills
!insert (expAprSpringMaintenance, billWindowRepair_2026_04_25) into ExpenseContainsBills

!insert (billBikeService_2026_04_02, curILS) into BillCurrency
!insert (billGardenSupplies_2026_04_05, curILS) into BillCurrency
!insert (billKeyCopy_2026_04_06, curILS) into BillCurrency
!insert (billSmokeDetectors_2026_04_08, curILS) into BillCurrency

!insert (billWaterHeaterService_2026_04_12, curCZK) into BillCurrency
!insert (billReplacementHose_2026_04_17, curCZK) into BillCurrency
!insert (billWindowRepair_2026_04_25, curCZK) into BillCurrency
```
## Generation 14 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 66 | 0.00% |
| Multiplicities Errors | 0 | 14 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

# Generation 15
```
!new Currency('curKRW')
!curKRW.name := 'South Korean Won'
!curKRW.abbreviation := 'KRW'

!new Currency('curTRY')
!curTRY.name := 'Turkish Lira'
!curTRY.abbreviation := 'TRY'


!new Expense('expFebAcademicJournal')
!expFebAcademicJournal.amount := 28000.00
!expFebAcademicJournal.startDate := Date('2026-02-02')
!expFebAcademicJournal.endDate := Date('2026-02-02')

!new Bill('billJournalAccess_2026_02_02')
!billJournalAccess_2026_02_02.amount := 28000.00
!billJournalAccess_2026_02_02.category := 'Education - Journal access'
!billJournalAccess_2026_02_02.date := Date('2026-02-02')
!billJournalAccess_2026_02_02.paymentMethod := #CREDIT_CARD
!billJournalAccess_2026_02_02.status := #VALIDATED

!insert (expFebAcademicJournal, billJournalAccess_2026_02_02) into ExpenseContainsBills
!insert (billJournalAccess_2026_02_02, curKRW) into BillCurrency


!new Expense('expFebEmergencyFund')
!expFebEmergencyFund.amount := 915.40
!expFebEmergencyFund.startDate := Date('2026-02-16')
!expFebEmergencyFund.endDate := Date('2026-02-16')

!new Bill('billCashWithdrawal_2026_02_16')
!billCashWithdrawal_2026_02_16.amount := 500.00
!billCashWithdrawal_2026_02_16.category := 'Finance - Emergency cash withdrawal'
!billCashWithdrawal_2026_02_16.date := Date('2026-02-16')
!billCashWithdrawal_2026_02_16.paymentMethod := #CASH
!billCashWithdrawal_2026_02_16.status := #VERIFIED

!new Bill('billLocksmithCallout_2026_02_16')
!billLocksmithCallout_2026_02_16.amount := 399.90
!billLocksmithCallout_2026_02_16.category := 'Home - Locksmith callout'
!billLocksmithCallout_2026_02_16.date := Date('2026-02-16')
!billLocksmithCallout_2026_02_16.paymentMethod := #CREDIT_CARD
!billLocksmithCallout_2026_02_16.status := #PENDING

!new Bill('billATMServiceFee_2026_02_16')
!billATMServiceFee_2026_02_16.amount := 15.50
!billATMServiceFee_2026_02_16.category := 'Banking - ATM service fee'
!billATMServiceFee_2026_02_16.date := Date('2026-02-16')
!billATMServiceFee_2026_02_16.paymentMethod := #CASH
!billATMServiceFee_2026_02_16.status := #VALIDATED

!insert (expFebEmergencyFund, billCashWithdrawal_2026_02_16) into ExpenseContainsBills
!insert (expFebEmergencyFund, billLocksmithCallout_2026_02_16) into ExpenseContainsBills
!insert (expFebEmergencyFund, billATMServiceFee_2026_02_16) into ExpenseContainsBills

!insert (billCashWithdrawal_2026_02_16, curTRY) into BillCurrency
!insert (billLocksmithCallout_2026_02_16, curTRY) into BillCurrency
!insert (billATMServiceFee_2026_02_16, curKRW) into BillCurrency

!new Comment('cmtEmergency1')
!cmtEmergency1.text := 'Unexpected lockout; kept receipts for reimbursement review.'
!insert (expFebEmergencyFund, cmtEmergency1) into ExpenseComment


!new Expense('expFebWorkshopMaterials')
!expFebWorkshopMaterials.amount := 242.75
!expFebWorkshopMaterials.startDate := Date('2026-02-20')
!expFebWorkshopMaterials.endDate := Date('2026-02-23')

!new Bill('billNotebooks_2026_02_20')
!billNotebooks_2026_02_20.amount := 89.25
!billNotebooks_2026_02_20.category := 'Education - Notebooks'
!billNotebooks_2026_02_20.date := Date('2026-02-20')
!billNotebooks_2026_02_20.paymentMethod := #CASH
!billNotebooks_2026_02_20.status := #VERIFIED

!new Bill('billMarkers_2026_02_21')
!billMarkers_2026_02_21.amount := 33.50
!billMarkers_2026_02_21.category := 'Education - Markers'
!billMarkers_2026_02_21.date := Date('2026-02-21')
!billMarkers_2026_02_21.paymentMethod := #CASH
!billMarkers_2026_02_21.status := #VALIDATED

!new Bill('billPrintouts_2026_02_22')
!billPrintouts_2026_02_22.amount := 56.00
!billPrintouts_2026_02_22.category := 'Education - Workshop printouts'
!billPrintouts_2026_02_22.date := Date('2026-02-22')
!billPrintouts_2026_02_22.paymentMethod := #CREDIT_CARD
!billPrintouts_2026_02_22.status := #PENDING

!new Bill('billRoomEquipment_2026_02_23')
!billRoomEquipment_2026_02_23.amount := 64.00
!billRoomEquipment_2026_02_23.category := 'Education - Room equipment rental'
!billRoomEquipment_2026_02_23.date := Date('2026-02-23')
!billRoomEquipment_2026_02_23.paymentMethod := #CHECK
!billRoomEquipment_2026_02_23.status := #DRAFT

!insert (expFebWorkshopMaterials, billNotebooks_2026_02_20) into ExpenseContainsBills
!insert (expFebWorkshopMaterials, billMarkers_2026_02_21) into ExpenseContainsBills
!insert (expFebWorkshopMaterials, billPrintouts_2026_02_22) into ExpenseContainsBills
!insert (expFebWorkshopMaterials, billRoomEquipment_2026_02_23) into ExpenseContainsBills

!insert (billNotebooks_2026_02_20, curTRY) into BillCurrency
!insert (billMarkers_2026_02_21, curTRY) into BillCurrency
!insert (billPrintouts_2026_02_22, curTRY) into BillCurrency
!insert (billRoomEquipment_2026_02_23, curTRY) into BillCurrency

!new Comment('cmtWorkshop1')
!cmtWorkshop1.text := 'Materials purchased for a weekend skills workshop.'
!new Comment('cmtWorkshop2')
!cmtWorkshop2.text := 'Room equipment bill is still in draft until the final invoice is issued.'
!insert (expFebWorkshopMaterials, cmtWorkshop1) into ExpenseComment
!insert (expFebWorkshopMaterials, cmtWorkshop2) into ExpenseComment
```
## Generation 15 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 91 | 0.00% |
| Multiplicities Errors | 0 | 19 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 3 | 0.00% |

# Generation 16
```
!new Currency('curTWD')
!curTWD.name := 'New Taiwan Dollar'
!curTWD.abbreviation := 'TWD'

!new Currency('curCNY')
!curCNY.name := 'Chinese Yuan'
!curCNY.abbreviation := 'CNY'

!new Expense('expQ1BusinessSupplies')
!expQ1BusinessSupplies.amount := 1035.60
!expQ1BusinessSupplies.startDate := Date('2026-01-01')
!expQ1BusinessSupplies.endDate := Date('2026-03-31')

!new Bill('billStationery_2026_01_05')
!billStationery_2026_01_05.amount := 120.00
!billStationery_2026_01_05.category := 'Business - Stationery'
!billStationery_2026_01_05.date := Date('2026-01-05')
!billStationery_2026_01_05.paymentMethod := #CASH
!billStationery_2026_01_05.status := #VERIFIED

!new Bill('billPrinterInk_2026_01_19')
!billPrinterInk_2026_01_19.amount := 75.50
!billPrinterInk_2026_01_19.category := 'Business - Printer ink'
!billPrinterInk_2026_01_19.date := Date('2026-01-19')
!billPrinterInk_2026_01_19.paymentMethod := #CREDIT_CARD
!billPrinterInk_2026_01_19.status := #VALIDATED

!new Bill('billErgoChairRepair_2026_02_02')
!billErgoChairRepair_2026_02_02.amount := 210.00
!billErgoChairRepair_2026_02_02.category := 'Business - Office chair repair'
!billErgoChairRepair_2026_02_02.date := Date('2026-02-02')
!billErgoChairRepair_2026_02_02.paymentMethod := #CHECK
!billErgoChairRepair_2026_02_02.status := #PENDING

!new Bill('billDomainRenewal_2026_02_10')
!billDomainRenewal_2026_02_10.amount := 49.99
!billDomainRenewal_2026_02_10.category := 'Business - Domain renewal'
!billDomainRenewal_2026_02_10.date := Date('2026-02-10')
!billDomainRenewal_2026_02_10.paymentMethod := #CREDIT_CARD
!billDomainRenewal_2026_02_10.status := #VERIFIED

!new Bill('billPostOfficeBox_2026_02_15')
!billPostOfficeBox_2026_02_15.amount := 15.00
!billPostOfficeBox_2026_02_15.category := 'Business - PO box'
!billPostOfficeBox_2026_02_15.date := Date('2026-02-15')
!billPostOfficeBox_2026_02_15.paymentMethod := #CASH
!billPostOfficeBox_2026_02_15.status := #DRAFT

!new Bill('billClientPrints_2026_02_22')
!billClientPrints_2026_02_22.amount := 89.90
!billClientPrints_2026_02_22.category := 'Business - Client printouts'
!billClientPrints_2026_02_22.date := Date('2026-02-22')
!billClientPrints_2026_02_22.paymentMethod := #CREDIT_CARD
!billClientPrints_2026_02_22.status := #VALIDATED

!new Bill('billCourierDispatch_2026_03_03')
!billCourierDispatch_2026_03_03.amount := 130.00
!billCourierDispatch_2026_03_03.category := 'Business - Courier dispatch'
!billCourierDispatch_2026_03_03.date := Date('2026-03-03')
!billCourierDispatch_2026_03_03.paymentMethod := #CASH
!billCourierDispatch_2026_03_03.status := #REFUNDED

!new Bill('billUSBHub_2026_03_07')
!billUSBHub_2026_03_07.amount := 60.00
!billUSBHub_2026_03_07.category := 'Business - Computer accessory'
!billUSBHub_2026_03_07.date := Date('2026-03-07')
!billUSBHub_2026_03_07.paymentMethod := #CREDIT_CARD
!billUSBHub_2026_03_07.status := #REFUSED

!new Bill('billCustomsHandling_2026_03_11')
!billCustomsHandling_2026_03_11.amount := 18.75
!billCustomsHandling_2026_03_11.category := 'Business - Customs handling fee'
!billCustomsHandling_2026_03_11.date := Date('2026-03-11')
!billCustomsHandling_2026_03_11.paymentMethod := #CHECK
!billCustomsHandling_2026_03_11.status := #VERIFIED

!new Bill('billCloudToolAnnual_2026_03_15')
!billCloudToolAnnual_2026_03_15.amount := 245.00
!billCloudToolAnnual_2026_03_15.category := 'Business - Cloud tool subscription'
!billCloudToolAnnual_2026_03_15.date := Date('2026-03-15')
!billCloudToolAnnual_2026_03_15.paymentMethod := #CREDIT_CARD
!billCloudToolAnnual_2026_03_15.status := #PENDING

!new Bill('billPasswordManager_2026_03_20')
!billPasswordManager_2026_03_20.amount := 10.00
!billPasswordManager_2026_03_20.category := 'Business - Security software'
!billPasswordManager_2026_03_20.date := Date('2026-03-20')
!billPasswordManager_2026_03_20.paymentMethod := #CREDIT_CARD
!billPasswordManager_2026_03_20.status := #VALIDATED

!new Bill('billBankTransferFee_2026_03_27')
!billBankTransferFee_2026_03_27.amount := 11.46
!billBankTransferFee_2026_03_27.category := 'Business - Bank transfer fee'
!billBankTransferFee_2026_03_27.date := Date('2026-03-27')
!billBankTransferFee_2026_03_27.paymentMethod := #CASH
!billBankTransferFee_2026_03_27.status := #VERIFIED

!insert (expQ1BusinessSupplies, billStationery_2026_01_05) into ExpenseContainsBills
!insert (expQ1BusinessSupplies, billPrinterInk_2026_01_19) into ExpenseContainsBills
!insert (expQ1BusinessSupplies, billErgoChairRepair_2026_02_02) into ExpenseContainsBills
!insert (expQ1BusinessSupplies, billDomainRenewal_2026_02_10) into ExpenseContainsBills
!insert (expQ1BusinessSupplies, billPostOfficeBox_2026_02_15) into ExpenseContainsBills
!insert (expQ1BusinessSupplies, billClientPrints_2026_02_22) into ExpenseContainsBills
!insert (expQ1BusinessSupplies, billCourierDispatch_2026_03_03) into ExpenseContainsBills
!insert (expQ1BusinessSupplies, billUSBHub_2026_03_07) into ExpenseContainsBills
!insert (expQ1BusinessSupplies, billCustomsHandling_2026_03_11) into ExpenseContainsBills
!insert (expQ1BusinessSupplies, billCloudToolAnnual_2026_03_15) into ExpenseContainsBills
!insert (expQ1BusinessSupplies, billPasswordManager_2026_03_20) into ExpenseContainsBills
!insert (expQ1BusinessSupplies, billBankTransferFee_2026_03_27) into ExpenseContainsBills

!insert (billStationery_2026_01_05, curTWD) into BillCurrency
!insert (billPrinterInk_2026_01_19, curTWD) into BillCurrency
!insert (billErgoChairRepair_2026_02_02, curTWD) into BillCurrency
!insert (billDomainRenewal_2026_02_10, curTWD) into BillCurrency
!insert (billPostOfficeBox_2026_02_15, curTWD) into BillCurrency
!insert (billClientPrints_2026_02_22, curTWD) into BillCurrency
!insert (billCourierDispatch_2026_03_03, curTWD) into BillCurrency
!insert (billUSBHub_2026_03_07, curTWD) into BillCurrency

!insert (billCustomsHandling_2026_03_11, curCNY) into BillCurrency
!insert (billCloudToolAnnual_2026_03_15, curCNY) into BillCurrency
!insert (billPasswordManager_2026_03_20, curCNY) into BillCurrency
!insert (billBankTransferFee_2026_03_27, curCNY) into BillCurrency
```
## Generation 16 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 106 | 0.00% |
| Multiplicities Errors | 0 | 24 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

# Generation 17
```
!new Currency('curARS')
!curARS.name := 'Argentine Peso'
!curARS.abbreviation := 'ARS'

!new Currency('curCOP')
!curCOP.name := 'Colombian Peso'
!curCOP.abbreviation := 'COP'


!new Expense('expMarCommunityProject')
!expMarCommunityProject.amount := 27700.00
!expMarCommunityProject.startDate := Date('2026-03-01')
!expMarCommunityProject.endDate := Date('2026-03-10')

!new Bill('billCommunityMaterials_2026_03_01')
!billCommunityMaterials_2026_03_01.amount := 18000.00
!billCommunityMaterials_2026_03_01.category := 'Community - Building materials'
!billCommunityMaterials_2026_03_01.date := Date('2026-03-01')
!billCommunityMaterials_2026_03_01.paymentMethod := #CREDIT_CARD
!billCommunityMaterials_2026_03_01.status := #VERIFIED

!new Bill('billPermitFee_2026_03_02')
!billPermitFee_2026_03_02.amount := 2500.00
!billPermitFee_2026_03_02.category := 'Community - Permit fee'
!billPermitFee_2026_03_02.date := Date('2026-03-02')
!billPermitFee_2026_03_02.paymentMethod := #CHECK
!billPermitFee_2026_03_02.status := #VALIDATED

!new Bill('billVolunteerLunch_2026_03_10')
!billVolunteerLunch_2026_03_10.amount := 7200.00
!billVolunteerLunch_2026_03_10.category := 'Community - Volunteer lunch'
!billVolunteerLunch_2026_03_10.date := Date('2026-03-10')
!billVolunteerLunch_2026_03_10.paymentMethod := #CASH
!billVolunteerLunch_2026_03_10.status := #PENDING

!insert (expMarCommunityProject, billCommunityMaterials_2026_03_01) into ExpenseContainsBills
!insert (expMarCommunityProject, billPermitFee_2026_03_02) into ExpenseContainsBills
!insert (expMarCommunityProject, billVolunteerLunch_2026_03_10) into ExpenseContainsBills

!insert (billCommunityMaterials_2026_03_01, curARS) into BillCurrency
!insert (billPermitFee_2026_03_02, curARS) into BillCurrency
!insert (billVolunteerLunch_2026_03_10, curARS) into BillCurrency


!new Expense('expMarRemoteSupport')
!expMarRemoteSupport.amount := 41500.00
!expMarRemoteSupport.startDate := Date('2026-03-15')
!expMarRemoteSupport.endDate := Date('2026-03-16')

!new Bill('billRemoteConsulting_2026_03_15')
!billRemoteConsulting_2026_03_15.amount := 40000.00
!billRemoteConsulting_2026_03_15.category := 'Services - Remote technical support'
!billRemoteConsulting_2026_03_15.date := Date('2026-03-15')
!billRemoteConsulting_2026_03_15.paymentMethod := #CREDIT_CARD
!billRemoteConsulting_2026_03_15.status := #VERIFIED

!new Bill('billTransferProcessing_2026_03_16')
!billTransferProcessing_2026_03_16.amount := 1500.00
!billTransferProcessing_2026_03_16.category := 'Banking - Transfer processing fee'
!billTransferProcessing_2026_03_16.date := Date('2026-03-16')
!billTransferProcessing_2026_03_16.paymentMethod := #CASH
!billTransferProcessing_2026_03_16.status := #REFUNDED

!insert (expMarRemoteSupport, billRemoteConsulting_2026_03_15) into ExpenseContainsBills
!insert (expMarRemoteSupport, billTransferProcessing_2026_03_16) into ExpenseContainsBills

!insert (billRemoteConsulting_2026_03_15, curCOP) into BillCurrency
!insert (billTransferProcessing_2026_03_16, curARS) into BillCurrency

!new Comment('cmtRemote1')
!cmtRemote1.text := 'Short-notice remote support session for a legacy system.'
!new Comment('cmtRemote2')
!cmtRemote2.text := 'Transfer fee was refunded after the bank corrected a duplicate charge.'

!insert (expMarRemoteSupport, cmtRemote1) into ExpenseComment
!insert (expMarRemoteSupport, cmtRemote2) into ExpenseComment
```
## Generation 17 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 60 | 0.00% |
| Multiplicities Errors | 0 | 12 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 2 | 0.00% |

# Generation 18
```
!new Currency('curAED')
!curAED.name := 'United Arab Emirates Dirham'
!curAED.abbreviation := 'AED'

!new Currency('curUAH')
!curUAH.name := 'Ukrainian Hryvnia'
!curUAH.abbreviation := 'UAH'


!new Expense('expFebWeddingRegistry')
!expFebWeddingRegistry.amount := 1750.00
!expFebWeddingRegistry.startDate := Date('2026-02-04')
!expFebWeddingRegistry.endDate := Date('2026-02-06')

!new Bill('billVenueReservation_2026_02_04')
!billVenueReservation_2026_02_04.amount := 1200.00
!billVenueReservation_2026_02_04.category := 'Events - Venue reservation'
!billVenueReservation_2026_02_04.date := Date('2026-02-04')
!billVenueReservation_2026_02_04.paymentMethod := #CHECK
!billVenueReservation_2026_02_04.status := #PENDING

!new Bill('billPhotographerDeposit_2026_02_06')
!billPhotographerDeposit_2026_02_06.amount := 550.00
!billPhotographerDeposit_2026_02_06.category := 'Events - Photographer deposit'
!billPhotographerDeposit_2026_02_06.date := Date('2026-02-06')
!billPhotographerDeposit_2026_02_06.paymentMethod := #CREDIT_CARD
!billPhotographerDeposit_2026_02_06.status := #VERIFIED

!insert (expFebWeddingRegistry, billVenueReservation_2026_02_04) into ExpenseContainsBills
!insert (expFebWeddingRegistry, billPhotographerDeposit_2026_02_06) into ExpenseContainsBills

!insert (billVenueReservation_2026_02_04, curAED) into BillCurrency
!insert (billPhotographerDeposit_2026_02_06, curAED) into BillCurrency

!new Comment('cmtWedding1')
!cmtWedding1.text := 'Initial deposits for venue and photographer; final invoices to follow.'
!insert (expFebWeddingRegistry, cmtWedding1) into ExpenseComment


!new Expense('expMayZeroValueReceipts')
!expMayZeroValueReceipts.amount := 0.00
!expMayZeroValueReceipts.startDate := Date('2026-05-01')
!expMayZeroValueReceipts.endDate := Date('2026-05-01')

!new Bill('billWarrantyReplacement_2026_05_01')
!billWarrantyReplacement_2026_05_01.amount := 0.00
!billWarrantyReplacement_2026_05_01.category := 'Shopping - Warranty replacement'
!billWarrantyReplacement_2026_05_01.date := Date('2026-05-01')
!billWarrantyReplacement_2026_05_01.paymentMethod := #CASH
!billWarrantyReplacement_2026_05_01.status := #VALIDATED

!new Bill('billPromotionalSample_2026_05_01')
!billPromotionalSample_2026_05_01.amount := 0.00
!billPromotionalSample_2026_05_01.category := 'Shopping - Promotional sample'
!billPromotionalSample_2026_05_01.date := Date('2026-05-01')
!billPromotionalSample_2026_05_01.paymentMethod := #CREDIT_CARD
!billPromotionalSample_2026_05_01.status := #VERIFIED

!new Bill('billNoChargeService_2026_05_01')
!billNoChargeService_2026_05_01.amount := 0.00
!billNoChargeService_2026_05_01.category := 'Services - No-charge adjustment'
!billNoChargeService_2026_05_01.date := Date('2026-05-01')
!billNoChargeService_2026_05_01.paymentMethod := #CHECK
!billNoChargeService_2026_05_01.status := #REFUNDED

!insert (expMayZeroValueReceipts, billWarrantyReplacement_2026_05_01) into ExpenseContainsBills
!insert (expMayZeroValueReceipts, billPromotionalSample_2026_05_01) into ExpenseContainsBills
!insert (expMayZeroValueReceipts, billNoChargeService_2026_05_01) into ExpenseContainsBills

!insert (billWarrantyReplacement_2026_05_01, curUAH) into BillCurrency
!insert (billPromotionalSample_2026_05_01, curUAH) into BillCurrency
!insert (billNoChargeService_2026_05_01, curUAH) into BillCurrency


!new Expense('expJunSoftwareLicenses')
!expJunSoftwareLicenses.amount := 99.95
!expJunSoftwareLicenses.startDate := Date('2026-06-12')
!expJunSoftwareLicenses.endDate := Date('2026-06-12')

!new Bill('billAntivirus_2026_06_12')
!billAntivirus_2026_06_12.amount := 49.99
!billAntivirus_2026_06_12.category := 'Software - Antivirus'
!billAntivirus_2026_06_12.date := Date('2026-06-12')
!billAntivirus_2026_06_12.paymentMethod := #CREDIT_CARD
!billAntivirus_2026_06_12.status := #VALIDATED

!new Bill('billPluginBundle_2026_06_12')
!billPluginBundle_2026_06_12.amount := 29.98
!billPluginBundle_2026_06_12.category := 'Software - Plugin bundle'
!billPluginBundle_2026_06_12.date := Date('2026-06-12')
!billPluginBundle_2026_06_12.paymentMethod := #CREDIT_CARD
!billPluginBundle_2026_06_12.status := #PENDING

!new Bill('billFontLicense_2026_06_12')
!billFontLicense_2026_06_12.amount := 19.98
!billFontLicense_2026_06_12.category := 'Software - Font license'
!billFontLicense_2026_06_12.date := Date('2026-06-12')
!billFontLicense_2026_06_12.paymentMethod := #CREDIT_CARD
!billFontLicense_2026_06_12.status := #VERIFIED

!insert (expJunSoftwareLicenses, billAntivirus_2026_06_12) into ExpenseContainsBills
!insert (expJunSoftwareLicenses, billPluginBundle_2026_06_12) into ExpenseContainsBills
!insert (expJunSoftwareLicenses, billFontLicense_2026_06_12) into ExpenseContainsBills

!insert (billAntivirus_2026_06_12, curAED) into BillCurrency
!insert (billPluginBundle_2026_06_12, curAED) into BillCurrency
!insert (billFontLicense_2026_06_12, curAED) into BillCurrency
```
## Generation 18 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 85 | 0.00% |
| Multiplicities Errors | 0 | 17 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 3 | 0.00% |

# Generation 19
```
!new Currency('curPHP')
!curPHP.name := 'Philippine Peso'
!curPHP.abbreviation := 'PHP'

!new Currency('curRON')
!curRON.name := 'Romanian Leu'
!curRON.abbreviation := 'RON'


!new Expense('expAugChildcareSchool')
!expAugChildcareSchool.amount := 13951.25
!expAugChildcareSchool.startDate := Date('2026-08-01')
!expAugChildcareSchool.endDate := Date('2026-08-31')

!new Bill('billDaycareMonthly_2026_08_01')
!billDaycareMonthly_2026_08_01.amount := 8000.00
!billDaycareMonthly_2026_08_01.category := 'Childcare - Daycare monthly fee'
!billDaycareMonthly_2026_08_01.date := Date('2026-08-01')
!billDaycareMonthly_2026_08_01.paymentMethod := #CREDIT_CARD
!billDaycareMonthly_2026_08_01.status := #VALIDATED

!new Bill('billAfterSchoolProgram_2026_08_07')
!billAfterSchoolProgram_2026_08_07.amount := 3500.00
!billAfterSchoolProgram_2026_08_07.category := 'Childcare - After-school program'
!billAfterSchoolProgram_2026_08_07.date := Date('2026-08-07')
!billAfterSchoolProgram_2026_08_07.paymentMethod := #CHECK
!billAfterSchoolProgram_2026_08_07.status := #PENDING

!new Bill('billSchoolCanteenTopUp_2026_08_12')
!billSchoolCanteenTopUp_2026_08_12.amount := 1200.50
!billSchoolCanteenTopUp_2026_08_12.category := 'School - Canteen top-up'
!billSchoolCanteenTopUp_2026_08_12.date := Date('2026-08-12')
!billSchoolCanteenTopUp_2026_08_12.paymentMethod := #CASH
!billSchoolCanteenTopUp_2026_08_12.status := #VERIFIED

!new Bill('billSchoolSupplies_2026_08_15')
!billSchoolSupplies_2026_08_15.amount := 950.75
!billSchoolSupplies_2026_08_15.category := 'School - Supplies'
!billSchoolSupplies_2026_08_15.date := Date('2026-08-15')
!billSchoolSupplies_2026_08_15.paymentMethod := #CREDIT_CARD
!billSchoolSupplies_2026_08_15.status := #VERIFIED

!new Bill('billOverpaymentReturn_2026_08_28')
!billOverpaymentReturn_2026_08_28.amount := 300.00
!billOverpaymentReturn_2026_08_28.category := 'Childcare - Overpayment return processed'
!billOverpaymentReturn_2026_08_28.date := Date('2026-08-28')
!billOverpaymentReturn_2026_08_28.paymentMethod := #CASH
!billOverpaymentReturn_2026_08_28.status := #REFUNDED

!insert (expAugChildcareSchool, billDaycareMonthly_2026_08_01) into ExpenseContainsBills
!insert (expAugChildcareSchool, billAfterSchoolProgram_2026_08_07) into ExpenseContainsBills
!insert (expAugChildcareSchool, billSchoolCanteenTopUp_2026_08_12) into ExpenseContainsBills
!insert (expAugChildcareSchool, billSchoolSupplies_2026_08_15) into ExpenseContainsBills
!insert (expAugChildcareSchool, billOverpaymentReturn_2026_08_28) into ExpenseContainsBills

!insert (billDaycareMonthly_2026_08_01, curPHP) into BillCurrency
!insert (billAfterSchoolProgram_2026_08_07, curPHP) into BillCurrency
!insert (billSchoolCanteenTopUp_2026_08_12, curPHP) into BillCurrency
!insert (billSchoolSupplies_2026_08_15, curPHP) into BillCurrency
!insert (billOverpaymentReturn_2026_08_28, curPHP) into BillCurrency

!new Comment('cmtChildcare1')
!cmtChildcare1.text := 'August childcare and school-related costs; includes one refunded overpayment.'
!insert (expAugChildcareSchool, cmtChildcare1) into ExpenseComment


!new Expense('expAugPassportRenewal')
!expAugPassportRenewal.amount := 167.50
!expAugPassportRenewal.startDate := Date('2026-08-20')
!expAugPassportRenewal.endDate := Date('2026-08-20')

!new Bill('billPassportFee_2026_08_20')
!billPassportFee_2026_08_20.amount := 120.00
!billPassportFee_2026_08_20.category := 'Administration - Passport renewal fee'
!billPassportFee_2026_08_20.date := Date('2026-08-20')
!billPassportFee_2026_08_20.paymentMethod := #CREDIT_CARD
!billPassportFee_2026_08_20.status := #VALIDATED

!new Bill('billPassportPhotos_2026_08_20')
!billPassportPhotos_2026_08_20.amount := 35.50
!billPassportPhotos_2026_08_20.category := 'Administration - Passport photos'
!billPassportPhotos_2026_08_20.date := Date('2026-08-20')
!billPassportPhotos_2026_08_20.paymentMethod := #CASH
!billPassportPhotos_2026_08_20.status := #VERIFIED

!new Bill('billTransitToOffice_2026_08_20')
!billTransitToOffice_2026_08_20.amount := 12.00
!billTransitToOffice_2026_08_20.category := 'Transport - Transit to government office'
!billTransitToOffice_2026_08_20.date := Date('2026-08-20')
!billTransitToOffice_2026_08_20.paymentMethod := #CASH
!billTransitToOffice_2026_08_20.status := #PENDING

!insert (expAugPassportRenewal, billPassportFee_2026_08_20) into ExpenseContainsBills
!insert (expAugPassportRenewal, billPassportPhotos_2026_08_20) into ExpenseContainsBills
!insert (expAugPassportRenewal, billTransitToOffice_2026_08_20) into ExpenseContainsBills

!insert (billPassportFee_2026_08_20, curRON) into BillCurrency
!insert (billPassportPhotos_2026_08_20, curRON) into BillCurrency
!insert (billTransitToOffice_2026_08_20, curPHP) into BillCurrency

!new Comment('cmtPassport1')
!cmtPassport1.text := 'Renewal completed in one visit; transit ticket kept as supporting document.'
!new Comment('cmtPassport2')
!cmtPassport2.text := 'Photo booth receipt verified; fee payment validated.'

!insert (expAugPassportRenewal, cmtPassport1) into ExpenseComment
!insert (expAugPassportRenewal, cmtPassport2) into ExpenseComment
```
## Generation 19 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 87 | 0.00% |
| Multiplicities Errors | 0 | 19 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 2 | 0.00% |

# Generation 20
```
!new Currency('curKES')
!curKES.name := 'Kenyan Shilling'
!curKES.abbreviation := 'KES'

!new Currency('curMAD')
!curMAD.name := 'Moroccan Dirham'
!curMAD.abbreviation := 'MAD'

!new Currency('curISK')
!curISK.name := 'Icelandic Krona'
!curISK.abbreviation := 'ISK'


!new Expense('expMayVolunteerTripLogistics')
!expMayVolunteerTripLogistics.amount := 260.00
!expMayVolunteerTripLogistics.startDate := Date('2026-05-10')
!expMayVolunteerTripLogistics.endDate := Date('2026-05-17')

!new Bill('billHostelDeposit_2026_05_10')
!billHostelDeposit_2026_05_10.amount := 125.00
!billHostelDeposit_2026_05_10.category := 'Travel - Hostel deposit'
!billHostelDeposit_2026_05_10.date := Date('2026-05-10')
!billHostelDeposit_2026_05_10.paymentMethod := #CREDIT_CARD
!billHostelDeposit_2026_05_10.status := #PENDING

!new Bill('billCoachTickets_2026_05_10')
!billCoachTickets_2026_05_10.amount := 68.40
!billCoachTickets_2026_05_10.category := 'Travel - Coach tickets'
!billCoachTickets_2026_05_10.date := Date('2026-05-10')
!billCoachTickets_2026_05_10.paymentMethod := #CASH
!billCoachTickets_2026_05_10.status := #VERIFIED

!new Bill('billSIMCard_2026_05_11')
!billSIMCard_2026_05_11.amount := 13.00
!billSIMCard_2026_05_11.category := 'Communication - SIM card'
!billSIMCard_2026_05_11.date := Date('2026-05-11')
!billSIMCard_2026_05_11.paymentMethod := #CASH
!billSIMCard_2026_05_11.status := #VALIDATED

!new Bill('billVaccination_2026_05_12')
!billVaccination_2026_05_12.amount := 44.10
!billVaccination_2026_05_12.category := 'Health - Vaccination'
!billVaccination_2026_05_12.date := Date('2026-05-12')
!billVaccination_2026_05_12.paymentMethod := #CREDIT_CARD
!billVaccination_2026_05_12.status := #VALIDATED

!new Bill('billVisaPhoto_2026_05_12')
!billVisaPhoto_2026_05_12.amount := 9.50
!billVisaPhoto_2026_05_12.category := 'Administration - Visa photo'
!billVisaPhoto_2026_05_12.date := Date('2026-05-12')
!billVisaPhoto_2026_05_12.paymentMethod := #CASH
!billVisaPhoto_2026_05_12.status := #DRAFT

!insert (expMayVolunteerTripLogistics, billHostelDeposit_2026_05_10) into ExpenseContainsBills
!insert (expMayVolunteerTripLogistics, billCoachTickets_2026_05_10) into ExpenseContainsBills
!insert (expMayVolunteerTripLogistics, billSIMCard_2026_05_11) into ExpenseContainsBills
!insert (expMayVolunteerTripLogistics, billVaccination_2026_05_12) into ExpenseContainsBills
!insert (expMayVolunteerTripLogistics, billVisaPhoto_2026_05_12) into ExpenseContainsBills

!insert (billHostelDeposit_2026_05_10, curKES) into BillCurrency
!insert (billCoachTickets_2026_05_10, curKES) into BillCurrency
!insert (billSIMCard_2026_05_11, curMAD) into BillCurrency
!insert (billVaccination_2026_05_12, curMAD) into BillCurrency
!insert (billVisaPhoto_2026_05_12, curMAD) into BillCurrency


!new Expense('expMayEquipmentLeaseDeposit')
!expMayEquipmentLeaseDeposit.amount := 500.00
!expMayEquipmentLeaseDeposit.startDate := Date('2026-05-15')
!expMayEquipmentLeaseDeposit.endDate := Date('2026-05-15')

!new Bill('bill3DPrinterLeaseDeposit_2026_05_15')
!bill3DPrinterLeaseDeposit_2026_05_15.amount := 500.00
!bill3DPrinterLeaseDeposit_2026_05_15.category := 'Business - Equipment lease deposit'
!bill3DPrinterLeaseDeposit_2026_05_15.date := Date('2026-05-15')
!bill3DPrinterLeaseDeposit_2026_05_15.paymentMethod := #CHECK
!bill3DPrinterLeaseDeposit_2026_05_15.status := #PENDING

!insert (expMayEquipmentLeaseDeposit, bill3DPrinterLeaseDeposit_2026_05_15) into ExpenseContainsBills
!insert (bill3DPrinterLeaseDeposit_2026_05_15, curISK) into BillCurrency

!new Comment('cmtLease1')
!cmtLease1.text := 'Deposit for short-term lease of a 3D printer for a prototype run.'
!new Comment('cmtLease2')
!cmtLease2.text := 'Payment sent by check; awaiting confirmation from the supplier.'
!new Comment('cmtLease3')
!cmtLease3.text := 'Lease contract stored with procurement documents for audit.'

!insert (expMayEquipmentLeaseDeposit, cmtLease1) into ExpenseComment
!insert (expMayEquipmentLeaseDeposit, cmtLease2) into ExpenseComment
!insert (expMayEquipmentLeaseDeposit, cmtLease3) into ExpenseComment
```
## Generation 20 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 74 | 0.00% |
| Multiplicities Errors | 0 | 15 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 2 | 0.00% |

# Generation 21
```
!new Currency('curEGP')
!curEGP.name := 'Egyptian Pound'
!curEGP.abbreviation := 'EGP'

!new Currency('curPEN')
!curPEN.name := 'Peruvian Sol'
!curPEN.abbreviation := 'PEN'

!new Expense('expDecMedicalInsurance')
!expDecMedicalInsurance.amount := 960.00
!expDecMedicalInsurance.startDate := Date('2026-12-01')
!expDecMedicalInsurance.endDate := Date('2026-12-31')

!new Bill('billInsurancePremium_2026_12_01')
!billInsurancePremium_2026_12_01.amount := 800.00
!billInsurancePremium_2026_12_01.category := 'Insurance - Monthly premium'
!billInsurancePremium_2026_12_01.date := Date('2026-12-01')
!billInsurancePremium_2026_12_01.paymentMethod := #CREDIT_CARD
!billInsurancePremium_2026_12_01.status := #VALIDATED

!new Bill('billClinicCopay_2026_12_19')
!billClinicCopay_2026_12_19.amount := 160.00
!billClinicCopay_2026_12_19.category := 'Health - Clinic co-pay'
!billClinicCopay_2026_12_19.date := Date('2026-12-19')
!billClinicCopay_2026_12_19.paymentMethod := #CASH
!billClinicCopay_2026_12_19.status := #VERIFIED

!insert (expDecMedicalInsurance, billInsurancePremium_2026_12_01) into ExpenseContainsBills
!insert (expDecMedicalInsurance, billClinicCopay_2026_12_19) into ExpenseContainsBills

!insert (billInsurancePremium_2026_12_01, curEGP) into BillCurrency
!insert (billClinicCopay_2026_12_19, curEGP) into BillCurrency

!new Comment('cmtInsurance1')
!cmtInsurance1.text := 'Premium paid at the start of the month; co-pay recorded after appointment.'
!insert (expDecMedicalInsurance, cmtInsurance1) into ExpenseComment


!new Expense('expSepMicroDonations')
!expSepMicroDonations.amount := 100.00
!expSepMicroDonations.startDate := Date('2026-09-01')
!expSepMicroDonations.endDate := Date('2026-09-30')

!new Bill('billDonation1_2026_09_02')
!billDonation1_2026_09_02.amount := 10.00
!billDonation1_2026_09_02.category := 'Charity - Micro-donation (wildlife)'
!billDonation1_2026_09_02.date := Date('2026-09-02')
!billDonation1_2026_09_02.paymentMethod := #CREDIT_CARD
!billDonation1_2026_09_02.status := #VERIFIED

!new Bill('billDonation2_2026_09_05')
!billDonation2_2026_09_05.amount := 10.00
!billDonation2_2026_09_05.category := 'Charity - Micro-donation (education)'
!billDonation2_2026_09_05.date := Date('2026-09-05')
!billDonation2_2026_09_05.paymentMethod := #CASH
!billDonation2_2026_09_05.status := #VALIDATED

!new Bill('billDonation3_2026_09_07')
!billDonation3_2026_09_07.amount := 10.00
!billDonation3_2026_09_07.category := 'Charity - Micro-donation (food)'
!billDonation3_2026_09_07.date := Date('2026-09-07')
!billDonation3_2026_09_07.paymentMethod := #CHECK
!billDonation3_2026_09_07.status := #PENDING

!new Bill('billDonation4_2026_09_10')
!billDonation4_2026_09_10.amount := 10.00
!billDonation4_2026_09_10.category := 'Charity - Micro-donation (medical aid)'
!billDonation4_2026_09_10.date := Date('2026-09-10')
!billDonation4_2026_09_10.paymentMethod := #CREDIT_CARD
!billDonation4_2026_09_10.status := #VERIFIED

!new Bill('billDonation5_2026_09_13')
!billDonation5_2026_09_13.amount := 10.00
!billDonation5_2026_09_13.category := 'Charity - Micro-donation (clean water)'
!billDonation5_2026_09_13.date := Date('2026-09-13')
!billDonation5_2026_09_13.paymentMethod := #CASH
!billDonation5_2026_09_13.status := #DRAFT

!new Bill('billDonation6_2026_09_16')
!billDonation6_2026_09_16.amount := 10.00
!billDonation6_2026_09_16.category := 'Charity - Micro-donation (disaster relief)'
!billDonation6_2026_09_16.date := Date('2026-09-16')
!billDonation6_2026_09_16.paymentMethod := #CREDIT_CARD
!billDonation6_2026_09_16.status := #VALIDATED

!new Bill('billDonation7_2026_09_19')
!billDonation7_2026_09_19.amount := 10.00
!billDonation7_2026_09_19.category := 'Charity - Micro-donation (animal shelters)'
!billDonation7_2026_09_19.date := Date('2026-09-19')
!billDonation7_2026_09_19.paymentMethod := #CHECK
!billDonation7_2026_09_19.status := #VERIFIED

!new Bill('billDonation8_2026_09_22')
!billDonation8_2026_09_22.amount := 10.00
!billDonation8_2026_09_22.category := 'Charity - Micro-donation (community kitchens)'
!billDonation8_2026_09_22.date := Date('2026-09-22')
!billDonation8_2026_09_22.paymentMethod := #CASH
!billDonation8_2026_09_22.status := #PENDING

!new Bill('billDonation9_2026_09_25')
!billDonation9_2026_09_25.amount := 10.00
!billDonation9_2026_09_25.category := 'Charity - Micro-donation (libraries)'
!billDonation9_2026_09_25.date := Date('2026-09-25')
!billDonation9_2026_09_25.paymentMethod := #CREDIT_CARD
!billDonation9_2026_09_25.status := #VERIFIED

!new Bill('billDonation10_2026_09_28')
!billDonation10_2026_09_28.amount := 10.00
!billDonation10_2026_09_28.category := 'Charity - Micro-donation (youth sports)'
!billDonation10_2026_09_28.date := Date('2026-09-28')
!billDonation10_2026_09_28.paymentMethod := #CASH
!billDonation10_2026_09_28.status := #VALIDATED

!insert (expSepMicroDonations, billDonation1_2026_09_02) into ExpenseContainsBills
!insert (expSepMicroDonations, billDonation2_2026_09_05) into ExpenseContainsBills
!insert (expSepMicroDonations, billDonation3_2026_09_07) into ExpenseContainsBills
!insert (expSepMicroDonations, billDonation4_2026_09_10) into ExpenseContainsBills
!insert (expSepMicroDonations, billDonation5_2026_09_13) into ExpenseContainsBills
!insert (expSepMicroDonations, billDonation6_2026_09_16) into ExpenseContainsBills
!insert (expSepMicroDonations, billDonation7_2026_09_19) into ExpenseContainsBills
!insert (expSepMicroDonations, billDonation8_2026_09_22) into ExpenseContainsBills
!insert (expSepMicroDonations, billDonation9_2026_09_25) into ExpenseContainsBills
!insert (expSepMicroDonations, billDonation10_2026_09_28) into ExpenseContainsBills

!insert (billDonation1_2026_09_02, curPEN) into BillCurrency
!insert (billDonation2_2026_09_05, curPEN) into BillCurrency
!insert (billDonation3_2026_09_07, curPEN) into BillCurrency
!insert (billDonation4_2026_09_10, curPEN) into BillCurrency
!insert (billDonation5_2026_09_13, curPEN) into BillCurrency
!insert (billDonation6_2026_09_16, curPEN) into BillCurrency
!insert (billDonation7_2026_09_19, curPEN) into BillCurrency
!insert (billDonation8_2026_09_22, curPEN) into BillCurrency
!insert (billDonation9_2026_09_25, curPEN) into BillCurrency
!insert (billDonation10_2026_09_28, curPEN) into BillCurrency

!new Comment('cmtDonations1')
!cmtDonations1.text := 'September micro-donations split across multiple causes; some entries still pending or drafted.'
!insert (expSepMicroDonations, cmtDonations1) into ExpenseComment
```
## Generation 21 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 116 | 0.00% |
| Multiplicities Errors | 0 | 26 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 2 | 0.00% |

# Generation 22
```
!new Currency('curTHB')
!curTHB.name := 'Thai Baht'
!curTHB.abbreviation := 'THB'

!new Currency('curVND')
!curVND.name := 'Vietnamese Dong'
!curVND.abbreviation := 'VND'

!new Expense('expNovFreelanceProjectCosts')
!expNovFreelanceProjectCosts.amount := 83.34
!expNovFreelanceProjectCosts.startDate := Date('2026-11-04')
!expNovFreelanceProjectCosts.endDate := Date('2026-11-11')

!new Bill('billCodeRepoPlan_2026_11_04')
!billCodeRepoPlan_2026_11_04.amount := 15.00
!billCodeRepoPlan_2026_11_04.category := 'Business - Code repository plan'
!billCodeRepoPlan_2026_11_04.date := Date('2026-11-04')
!billCodeRepoPlan_2026_11_04.paymentMethod := #CREDIT_CARD
!billCodeRepoPlan_2026_11_04.status := #VALIDATED

!new Bill('billCoworkingPass_2026_11_05')
!billCoworkingPass_2026_11_05.amount := 25.50
!billCoworkingPass_2026_11_05.category := 'Business - Coworking day pass'
!billCoworkingPass_2026_11_05.date := Date('2026-11-05')
!billCoworkingPass_2026_11_05.paymentMethod := #CASH
!billCoworkingPass_2026_11_05.status := #VERIFIED

!new Bill('billStockPhotos_2026_11_06')
!billStockPhotos_2026_11_06.amount := 12.99
!billStockPhotos_2026_11_06.category := 'Business - Stock photos'
!billStockPhotos_2026_11_06.date := Date('2026-11-06')
!billStockPhotos_2026_11_06.paymentMethod := #CREDIT_CARD
!billStockPhotos_2026_11_06.status := #PENDING

!new Bill('billClientCoffee_2026_11_07')
!billClientCoffee_2026_11_07.amount := 7.80
!billClientCoffee_2026_11_07.category := 'Business - Client meeting refreshments'
!billClientCoffee_2026_11_07.date := Date('2026-11-07')
!billClientCoffee_2026_11_07.paymentMethod := #CASH
!billClientCoffee_2026_11_07.status := #VALIDATED

!new Bill('billTaxiToClient_2026_11_07')
!billTaxiToClient_2026_11_07.amount := 9.20
!billTaxiToClient_2026_11_07.category := 'Transport - Taxi to client site'
!billTaxiToClient_2026_11_07.date := Date('2026-11-07')
!billTaxiToClient_2026_11_07.paymentMethod := #CASH
!billTaxiToClient_2026_11_07.status := #DRAFT

!new Bill('billPrintProofs_2026_11_09')
!billPrintProofs_2026_11_09.amount := 4.00
!billPrintProofs_2026_11_09.category := 'Business - Print proofs'
!billPrintProofs_2026_11_09.date := Date('2026-11-09')
!billPrintProofs_2026_11_09.paymentMethod := #CHECK
!billPrintProofs_2026_11_09.status := #VERIFIED

!new Bill('billMobileDataTopUp_2026_11_10')
!billMobileDataTopUp_2026_11_10.amount := 6.75
!billMobileDataTopUp_2026_11_10.category := 'Communication - Mobile data top-up'
!billMobileDataTopUp_2026_11_10.date := Date('2026-11-10')
!billMobileDataTopUp_2026_11_10.paymentMethod := #CREDIT_CARD
!billMobileDataTopUp_2026_11_10.status := #REFUNDED

!new Bill('billBankCharge_2026_11_11')
!billBankCharge_2026_11_11.amount := 2.10
!billBankCharge_2026_11_11.category := 'Banking - Small transaction charge'
!billBankCharge_2026_11_11.date := Date('2026-11-11')
!billBankCharge_2026_11_11.paymentMethod := #CASH
!billBankCharge_2026_11_11.status := #REFUSED

!insert (expNovFreelanceProjectCosts, billCodeRepoPlan_2026_11_04) into ExpenseContainsBills
!insert (expNovFreelanceProjectCosts, billCoworkingPass_2026_11_05) into ExpenseContainsBills
!insert (expNovFreelanceProjectCosts, billStockPhotos_2026_11_06) into ExpenseContainsBills
!insert (expNovFreelanceProjectCosts, billClientCoffee_2026_11_07) into ExpenseContainsBills
!insert (expNovFreelanceProjectCosts, billTaxiToClient_2026_11_07) into ExpenseContainsBills
!insert (expNovFreelanceProjectCosts, billPrintProofs_2026_11_09) into ExpenseContainsBills
!insert (expNovFreelanceProjectCosts, billMobileDataTopUp_2026_11_10) into ExpenseContainsBills
!insert (expNovFreelanceProjectCosts, billBankCharge_2026_11_11) into ExpenseContainsBills

!insert (billCodeRepoPlan_2026_11_04, curTHB) into BillCurrency
!insert (billCoworkingPass_2026_11_05, curTHB) into BillCurrency
!insert (billStockPhotos_2026_11_06, curTHB) into BillCurrency
!insert (billClientCoffee_2026_11_07, curTHB) into BillCurrency
!insert (billTaxiToClient_2026_11_07, curTHB) into BillCurrency

!insert (billPrintProofs_2026_11_09, curVND) into BillCurrency
!insert (billMobileDataTopUp_2026_11_10, curVND) into BillCurrency
!insert (billBankCharge_2026_11_11, curVND) into BillCurrency
```
## Generation 22 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 74 | 0.00% |
| Multiplicities Errors | 0 | 16 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

# Generation 23
```
!new Currency('curCLP')
!curCLP.name := 'Chilean Peso'
!curCLP.abbreviation := 'CLP'

!new Currency('curNGN')
!curNGN.name := 'Nigerian Naira'
!curNGN.abbreviation := 'NGN'

!new Currency('curIDR')
!curIDR.name := 'Indonesian Rupiah'
!curIDR.abbreviation := 'IDR'


!new Expense('expOctSolarInstall')
!expOctSolarInstall.amount := 8500.00
!expOctSolarInstall.startDate := Date('2026-10-05')
!expOctSolarInstall.endDate := Date('2026-10-22')

!new Bill('billSolarPanelsKit_2026_10_05')
!billSolarPanelsKit_2026_10_05.amount := 7500.00
!billSolarPanelsKit_2026_10_05.category := 'Home - Solar panels kit'
!billSolarPanelsKit_2026_10_05.date := Date('2026-10-05')
!billSolarPanelsKit_2026_10_05.paymentMethod := #CREDIT_CARD
!billSolarPanelsKit_2026_10_05.status := #PENDING

!new Bill('billElectricalPermit_2026_10_07')
!billElectricalPermit_2026_10_07.amount := 500.00
!billElectricalPermit_2026_10_07.category := 'Home - Electrical permit'
!billElectricalPermit_2026_10_07.date := Date('2026-10-07')
!billElectricalPermit_2026_10_07.paymentMethod := #CASH
!billElectricalPermit_2026_10_07.status := #VALIDATED

!new Bill('billInstallerLabor_2026_10_22')
!billInstallerLabor_2026_10_22.amount := 500.00
!billInstallerLabor_2026_10_22.category := 'Home - Solar installation labor'
!billInstallerLabor_2026_10_22.date := Date('2026-10-22')
!billInstallerLabor_2026_10_22.paymentMethod := #CHECK
!billInstallerLabor_2026_10_22.status := #VERIFIED

!insert (expOctSolarInstall, billSolarPanelsKit_2026_10_05) into ExpenseContainsBills
!insert (expOctSolarInstall, billElectricalPermit_2026_10_07) into ExpenseContainsBills
!insert (expOctSolarInstall, billInstallerLabor_2026_10_22) into ExpenseContainsBills

!insert (billSolarPanelsKit_2026_10_05, curCLP) into BillCurrency
!insert (billElectricalPermit_2026_10_07, curCLP) into BillCurrency
!insert (billInstallerLabor_2026_10_22, curCLP) into BillCurrency


!new Expense('expAprMortgageClosingCosts')
!expAprMortgageClosingCosts.amount := 1375.25
!expAprMortgageClosingCosts.startDate := Date('2026-04-14')
!expAprMortgageClosingCosts.endDate := Date('2026-04-14')

!new Bill('billPropertyAppraisal_2026_04_14')
!billPropertyAppraisal_2026_04_14.amount := 450.00
!billPropertyAppraisal_2026_04_14.category := 'Finance - Property appraisal'
!billPropertyAppraisal_2026_04_14.date := Date('2026-04-14')
!billPropertyAppraisal_2026_04_14.paymentMethod := #CREDIT_CARD
!billPropertyAppraisal_2026_04_14.status := #VERIFIED

!new Bill('billNotaryFees_2026_04_14')
!billNotaryFees_2026_04_14.amount := 125.25
!billNotaryFees_2026_04_14.category := 'Finance - Notary fees'
!billNotaryFees_2026_04_14.date := Date('2026-04-14')
!billNotaryFees_2026_04_14.paymentMethod := #CASH
!billNotaryFees_2026_04_14.status := #VALIDATED

!new Bill('billBankProcessing_2026_04_14')
!billBankProcessing_2026_04_14.amount := 300.00
!billBankProcessing_2026_04_14.category := 'Finance - Bank processing fee'
!billBankProcessing_2026_04_14.date := Date('2026-04-14')
!billBankProcessing_2026_04_14.paymentMethod := #CHECK
!billBankProcessing_2026_04_14.status := #PENDING

!new Bill('billInsuranceEscrow_2026_04_14')
!billInsuranceEscrow_2026_04_14.amount := 500.00
!billInsuranceEscrow_2026_04_14.category := 'Finance - Insurance escrow deposit'
!billInsuranceEscrow_2026_04_14.date := Date('2026-04-14')
!billInsuranceEscrow_2026_04_14.paymentMethod := #CREDIT_CARD
!billInsuranceEscrow_2026_04_14.status := #DRAFT

!insert (expAprMortgageClosingCosts, billPropertyAppraisal_2026_04_14) into ExpenseContainsBills
!insert (expAprMortgageClosingCosts, billNotaryFees_2026_04_14) into ExpenseContainsBills
!insert (expAprMortgageClosingCosts, billBankProcessing_2026_04_14) into ExpenseContainsBills
!insert (expAprMortgageClosingCosts, billInsuranceEscrow_2026_04_14) into ExpenseContainsBills

!insert (billPropertyAppraisal_2026_04_14, curNGN) into BillCurrency
!insert (billNotaryFees_2026_04_14, curNGN) into BillCurrency
!insert (billBankProcessing_2026_04_14, curIDR) into BillCurrency
!insert (billInsuranceEscrow_2026_04_14, curIDR) into BillCurrency

!new Comment('cmtMortgage1')
!cmtMortgage1.text := 'Closing costs paid on signing day; escrow deposit still marked as draft until the lender issues the final statement.'
!insert (expAprMortgageClosingCosts, cmtMortgage1) into ExpenseComment
```
## Generation 23 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 76 | 0.00% |
| Multiplicities Errors | 0 | 15 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 2 | 0.00% |

# Generation 24
```
!new Currency('curBHD')
!curBHD.name := 'Bahraini Dinar'
!curBHD.abbreviation := 'BHD'

!new Expense('expNewYearCelebration')
!expNewYearCelebration.amount := 312.75
!expNewYearCelebration.startDate := Date('2026-12-31')
!expNewYearCelebration.endDate := Date('2027-01-02')

!new Bill('billCateringDeposit_2026_12_31')
!billCateringDeposit_2026_12_31.amount := 150.00
!billCateringDeposit_2026_12_31.category := 'Events - Catering deposit'
!billCateringDeposit_2026_12_31.date := Date('2026-12-31')
!billCateringDeposit_2026_12_31.paymentMethod := #CREDIT_CARD
!billCateringDeposit_2026_12_31.status := #PENDING

!new Bill('billFireworksPermit_2026_12_31')
!billFireworksPermit_2026_12_31.amount := 79.50
!billFireworksPermit_2026_12_31.category := 'Events - Fireworks permit'
!billFireworksPermit_2026_12_31.date := Date('2026-12-31')
!billFireworksPermit_2026_12_31.paymentMethod := #CASH
!billFireworksPermit_2026_12_31.status := #VALIDATED

!new Bill('billLateNightTransit_2027_01_01')
!billLateNightTransit_2027_01_01.amount := 23.25
!billLateNightTransit_2027_01_01.category := 'Transport - Late-night transit'
!billLateNightTransit_2027_01_01.date := Date('2027-01-01')
!billLateNightTransit_2027_01_01.paymentMethod := #CASH
!billLateNightTransit_2027_01_01.status := #VERIFIED

!new Bill('billVenueCleanup_2027_01_02')
!billVenueCleanup_2027_01_02.amount := 60.00
!billVenueCleanup_2027_01_02.category := 'Events - Venue cleanup fee'
!billVenueCleanup_2027_01_02.date := Date('2027-01-02')
!billVenueCleanup_2027_01_02.paymentMethod := #CHECK
!billVenueCleanup_2027_01_02.status := #VERIFIED

!insert (expNewYearCelebration, billCateringDeposit_2026_12_31) into ExpenseContainsBills
!insert (expNewYearCelebration, billFireworksPermit_2026_12_31) into ExpenseContainsBills
!insert (expNewYearCelebration, billLateNightTransit_2027_01_01) into ExpenseContainsBills
!insert (expNewYearCelebration, billVenueCleanup_2027_01_02) into ExpenseContainsBills

!insert (billCateringDeposit_2026_12_31, curBHD) into BillCurrency
!insert (billFireworksPermit_2026_12_31, curBHD) into BillCurrency
!insert (billLateNightTransit_2027_01_01, curBHD) into BillCurrency
!insert (billVenueCleanup_2027_01_02, curBHD) into BillCurrency

!new Comment('cmtNY1')
!cmtNY1.text := 'New Year celebration spanning two calendar years; deposit still pending final catering invoice.'
!new Comment('cmtNY2')
!cmtNY2.text := 'Cleanup fee confirmed by venue manager; transit receipt kept for reference.'
!insert (expNewYearCelebration, cmtNY1) into ExpenseComment
!insert (expNewYearCelebration, cmtNY2) into ExpenseComment


!new Expense('expJanCharityAuction')
!expJanCharityAuction.amount := 980.00
!expJanCharityAuction.startDate := Date('2027-01-15')
!expJanCharityAuction.endDate := Date('2027-01-15')

!new Bill('billAuctionTableSponsor_2027_01_15')
!billAuctionTableSponsor_2027_01_15.amount := 750.00
!billAuctionTableSponsor_2027_01_15.category := 'Charity - Auction table sponsorship'
!billAuctionTableSponsor_2027_01_15.date := Date('2027-01-15')
!billAuctionTableSponsor_2027_01_15.paymentMethod := #CREDIT_CARD
!billAuctionTableSponsor_2027_01_15.status := #VALIDATED

!new Bill('billProgramPrinting_2027_01_15')
!billProgramPrinting_2027_01_15.amount := 230.00
!billProgramPrinting_2027_01_15.category := 'Charity - Program printing'
!billProgramPrinting_2027_01_15.date := Date('2027-01-15')
!billProgramPrinting_2027_01_15.paymentMethod := #CHECK
!billProgramPrinting_2027_01_15.status := #PENDING

!insert (expJanCharityAuction, billAuctionTableSponsor_2027_01_15) into ExpenseContainsBills
!insert (expJanCharityAuction, billProgramPrinting_2027_01_15) into ExpenseContainsBills

!insert (billAuctionTableSponsor_2027_01_15, curBHD) into BillCurrency
!insert (billProgramPrinting_2027_01_15, curBHD) into BillCurrency
```
## Generation 24 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 65 | 0.00% |
| Multiplicities Errors | 0 | 14 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 2 | 0.00% |

# Generation 25
```
!new Currency('curSAR')
!curSAR.name := 'Saudi Riyal'
!curSAR.abbreviation := 'SAR'

!new Currency('curBGN')
!curBGN.name := 'Bulgarian Lev'
!curBGN.abbreviation := 'BGN'

!new Expense('expAprGroupTripSharedCosts')
!expAprGroupTripSharedCosts.amount := 984.00
!expAprGroupTripSharedCosts.startDate := Date('2026-04-03')
!expAprGroupTripSharedCosts.endDate := Date('2026-04-06')

!new Bill('billCabinLodging_2026_04_03')
!billCabinLodging_2026_04_03.amount := 680.00
!billCabinLodging_2026_04_03.category := 'Travel - Cabin lodging'
!billCabinLodging_2026_04_03.date := Date('2026-04-03')
!billCabinLodging_2026_04_03.paymentMethod := #CREDIT_CARD
!billCabinLodging_2026_04_03.status := #VALIDATED

!new Bill('billSharedGroceries_2026_04_03')
!billSharedGroceries_2026_04_03.amount := 142.35
!billSharedGroceries_2026_04_03.category := 'Travel - Shared groceries'
!billSharedGroceries_2026_04_03.date := Date('2026-04-03')
!billSharedGroceries_2026_04_03.paymentMethod := #CASH
!billSharedGroceries_2026_04_03.status := #VERIFIED

!new Bill('billFuel_2026_04_04')
!billFuel_2026_04_04.amount := 95.40
!billFuel_2026_04_04.category := 'Travel - Fuel'
!billFuel_2026_04_04.date := Date('2026-04-04')
!billFuel_2026_04_04.paymentMethod := #CREDIT_CARD
!billFuel_2026_04_04.status := #VERIFIED

!new Bill('billRoadTolls_2026_04_04')
!billRoadTolls_2026_04_04.amount := 12.25
!billRoadTolls_2026_04_04.category := 'Travel - Road tolls'
!billRoadTolls_2026_04_04.date := Date('2026-04-04')
!billRoadTolls_2026_04_04.paymentMethod := #CASH
!billRoadTolls_2026_04_04.status := #PENDING

!new Bill('billMuseumTickets_2026_04_05')
!billMuseumTickets_2026_04_05.amount := 48.00
!billMuseumTickets_2026_04_05.category := 'Travel - Museum tickets'
!billMuseumTickets_2026_04_05.date := Date('2026-04-05')
!billMuseumTickets_2026_04_05.paymentMethod := #CHECK
!billMuseumTickets_2026_04_05.status := #DRAFT

!new Bill('billParkingRefundProcessed_2026_04_06')
!billParkingRefundProcessed_2026_04_06.amount := 6.00
!billParkingRefundProcessed_2026_04_06.category := 'Travel - Parking refund processed'
!billParkingRefundProcessed_2026_04_06.date := Date('2026-04-06')
!billParkingRefundProcessed_2026_04_06.paymentMethod := #CREDIT_CARD
!billParkingRefundProcessed_2026_04_06.status := #REFUNDED

!insert (expAprGroupTripSharedCosts, billCabinLodging_2026_04_03) into ExpenseContainsBills
!insert (expAprGroupTripSharedCosts, billSharedGroceries_2026_04_03) into ExpenseContainsBills
!insert (expAprGroupTripSharedCosts, billFuel_2026_04_04) into ExpenseContainsBills
!insert (expAprGroupTripSharedCosts, billRoadTolls_2026_04_04) into ExpenseContainsBills
!insert (expAprGroupTripSharedCosts, billMuseumTickets_2026_04_05) into ExpenseContainsBills
!insert (expAprGroupTripSharedCosts, billParkingRefundProcessed_2026_04_06) into ExpenseContainsBills

!insert (billCabinLodging_2026_04_03, curSAR) into BillCurrency
!insert (billSharedGroceries_2026_04_03, curSAR) into BillCurrency
!insert (billFuel_2026_04_04, curSAR) into BillCurrency
!insert (billRoadTolls_2026_04_04, curSAR) into BillCurrency
!insert (billMuseumTickets_2026_04_05, curSAR) into BillCurrency
!insert (billParkingRefundProcessed_2026_04_06, curSAR) into BillCurrency

!new Comment('cmtTrip1')
!cmtTrip1.text := 'Shared costs for a small group trip; some items paid in cash and reconciled later.'
!new Comment('cmtTrip2')
!cmtTrip2.text := 'Parking charge was initially taken but later refunded to the card.'

!insert (expAprGroupTripSharedCosts, cmtTrip1) into ExpenseComment
!insert (expAprGroupTripSharedCosts, cmtTrip2) into ExpenseComment


!new Expense('expAprMusicLessonPackage')
!expAprMusicLessonPackage.amount := 275.50
!expAprMusicLessonPackage.startDate := Date('2026-04-18')
!expAprMusicLessonPackage.endDate := Date('2026-04-18')

!new Bill('billPianoLessonsPackage_2026_04_18')
!billPianoLessonsPackage_2026_04_18.amount := 275.50
!billPianoLessonsPackage_2026_04_18.category := 'Education - Piano lesson package'
!billPianoLessonsPackage_2026_04_18.date := Date('2026-04-18')
!billPianoLessonsPackage_2026_04_18.paymentMethod := #CHECK
!billPianoLessonsPackage_2026_04_18.status := #VERIFIED

!insert (expAprMusicLessonPackage, billPianoLessonsPackage_2026_04_18) into ExpenseContainsBills
!insert (billPianoLessonsPackage_2026_04_18, curBGN) into BillCurrency
```
## Generation 25 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 76 | 0.00% |
| Multiplicities Errors | 0 | 16 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 2 | 0.00% |

# Generation 26
```
!new Currency('curMYR_2026')
!curMYR_2026.name := 'Malaysian Ringgit'
!curMYR_2026.abbreviation := 'MYR'

!new Expense('expFebPublicTransportPasses')
!expFebPublicTransportPasses.amount := 215.00
!expFebPublicTransportPasses.startDate := Date('2026-02-01')
!expFebPublicTransportPasses.endDate := Date('2026-02-29')

!new Bill('billMonthlyTransitPass_2026_02_01')
!billMonthlyTransitPass_2026_02_01.amount := 180.00
!billMonthlyTransitPass_2026_02_01.category := 'Transport - Monthly transit pass'
!billMonthlyTransitPass_2026_02_01.date := Date('2026-02-01')
!billMonthlyTransitPass_2026_02_01.paymentMethod := #CREDIT_CARD
!billMonthlyTransitPass_2026_02_01.status := #VALIDATED

!new Bill('billBikeShareAddOn_2026_02_03')
!billBikeShareAddOn_2026_02_03.amount := 25.00
!billBikeShareAddOn_2026_02_03.category := 'Transport - Bike-share add-on'
!billBikeShareAddOn_2026_02_03.date := Date('2026-02-03')
!billBikeShareAddOn_2026_02_03.paymentMethod := #CASH
!billBikeShareAddOn_2026_02_03.status := #PENDING

!new Bill('billTravelCardReplacement_2026_02_12')
!billTravelCardReplacement_2026_02_12.amount := 10.00
!billTravelCardReplacement_2026_02_12.category := 'Transport - Travel card replacement fee'
!billTravelCardReplacement_2026_02_12.date := Date('2026-02-12')
!billTravelCardReplacement_2026_02_12.paymentMethod := #CHECK
!billTravelCardReplacement_2026_02_12.status := #REFUSED

!insert (expFebPublicTransportPasses, billMonthlyTransitPass_2026_02_01) into ExpenseContainsBills
!insert (expFebPublicTransportPasses, billBikeShareAddOn_2026_02_03) into ExpenseContainsBills
!insert (expFebPublicTransportPasses, billTravelCardReplacement_2026_02_12) into ExpenseContainsBills

!insert (billMonthlyTransitPass_2026_02_01, curMYR_2026) into BillCurrency
!insert (billBikeShareAddOn_2026_02_03, curMYR_2026) into BillCurrency
!insert (billTravelCardReplacement_2026_02_12, curMYR_2026) into BillCurrency


!new Expense('expFebKitchenApplianceRepair')
!expFebKitchenApplianceRepair.amount := 370.50
!expFebKitchenApplianceRepair.startDate := Date('2026-02-08')
!expFebKitchenApplianceRepair.endDate := Date('2026-02-09')

!new Bill('billTechnicianCallout_2026_02_08')
!billTechnicianCallout_2026_02_08.amount := 90.00
!billTechnicianCallout_2026_02_08.category := 'Home - Appliance technician callout'
!billTechnicianCallout_2026_02_08.date := Date('2026-02-08')
!billTechnicianCallout_2026_02_08.paymentMethod := #CASH
!billTechnicianCallout_2026_02_08.status := #VERIFIED

!new Bill('billReplacementControlBoard_2026_02_09')
!billReplacementControlBoard_2026_02_09.amount := 250.50
!billReplacementControlBoard_2026_02_09.category := 'Home - Appliance replacement part'
!billReplacementControlBoard_2026_02_09.date := Date('2026-02-09')
!billReplacementControlBoard_2026_02_09.paymentMethod := #CREDIT_CARD
!billReplacementControlBoard_2026_02_09.status := #PENDING

!new Bill('billWarrantyHandlingFee_2026_02_09')
!billWarrantyHandlingFee_2026_02_09.amount := 30.00
!billWarrantyHandlingFee_2026_02_09.category := 'Home - Warranty handling fee'
!billWarrantyHandlingFee_2026_02_09.date := Date('2026-02-09')
!billWarrantyHandlingFee_2026_02_09.paymentMethod := #CHECK
!billWarrantyHandlingFee_2026_02_09.status := #REFUNDED

!insert (expFebKitchenApplianceRepair, billTechnicianCallout_2026_02_08) into ExpenseContainsBills
!insert (expFebKitchenApplianceRepair, billReplacementControlBoard_2026_02_09) into ExpenseContainsBills
!insert (expFebKitchenApplianceRepair, billWarrantyHandlingFee_2026_02_09) into ExpenseContainsBills

!insert (billTechnicianCallout_2026_02_08, curMYR_2026) into BillCurrency
!insert (billReplacementControlBoard_2026_02_09, curMYR_2026) into BillCurrency
!insert (billWarrantyHandlingFee_2026_02_09, curMYR_2026) into BillCurrency

!new Comment('cmtAppliance1')
!cmtAppliance1.text := 'Repair completed, but part charge still pending until merchant posts final settlement.'
!insert (expFebKitchenApplianceRepair, cmtAppliance1) into ExpenseComment


!new Expense('expMarCourseCancellation')
!expMarCourseCancellation.amount := 600.00
!expMarCourseCancellation.startDate := Date('2026-03-01')
!expMarCourseCancellation.endDate := Date('2026-03-15')

!new Bill('billCourseEnrollment_2026_03_01')
!billCourseEnrollment_2026_03_01.amount := 600.00
!billCourseEnrollment_2026_03_01.category := 'Education - Short course enrollment'
!billCourseEnrollment_2026_03_01.date := Date('2026-03-01')
!billCourseEnrollment_2026_03_01.paymentMethod := #CREDIT_CARD
!billCourseEnrollment_2026_03_01.status := #REFUNDED

!insert (expMarCourseCancellation, billCourseEnrollment_2026_03_01) into ExpenseContainsBills
!insert (billCourseEnrollment_2026_03_01, curMYR_2026) into BillCurrency

!new Comment('cmtCourse1')
!cmtCourse1.text := 'Course was cancelled by provider; refund processed to the original card.'
!new Comment('cmtCourse2')
!cmtCourse2.text := 'Kept confirmation email as supporting document for the refunded transaction.'
!insert (expMarCourseCancellation, cmtCourse1) into ExpenseComment
!insert (expMarCourseCancellation, cmtCourse2) into ExpenseComment
```
## Generation 26 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 80 | 0.00% |
| Multiplicities Errors | 0 | 17 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 3 | 0.00% |

# Generation 27
```
!new Currency('curXOF')
!curXOF.name := 'West African CFA franc'
!curXOF.abbreviation := 'XOF'

!new Currency('curHRK')
!curHRK.name := 'Croatian Kuna'
!curHRK.abbreviation := 'HRK'

!new Expense('expFebArtExhibition')
!expFebArtExhibition.amount := 86.25
!expFebArtExhibition.startDate := Date('2026-02-09')
!expFebArtExhibition.endDate := Date('2026-02-09')

!new Bill('billExhibitTickets_2026_02_09')
!billExhibitTickets_2026_02_09.amount := 25.00
!billExhibitTickets_2026_02_09.category := 'Leisure - Museum tickets'
!billExhibitTickets_2026_02_09.date := Date('2026-02-09')
!billExhibitTickets_2026_02_09.paymentMethod := #CREDIT_CARD
!billExhibitTickets_2026_02_09.status := #VALIDATED

!new Bill('billExhibitCatalog_2026_02_09')
!billExhibitCatalog_2026_02_09.amount := 12.50
!billExhibitCatalog_2026_02_09.category := 'Leisure - Exhibition catalog'
!billExhibitCatalog_2026_02_09.date := Date('2026-02-09')
!billExhibitCatalog_2026_02_09.paymentMethod := #CASH
!billExhibitCatalog_2026_02_09.status := #VERIFIED

!new Bill('billMuseumDonation_2026_02_09')
!billMuseumDonation_2026_02_09.amount := 40.00
!billMuseumDonation_2026_02_09.category := 'Charity - Museum support donation'
!billMuseumDonation_2026_02_09.date := Date('2026-02-09')
!billMuseumDonation_2026_02_09.paymentMethod := #CHECK
!billMuseumDonation_2026_02_09.status := #PENDING

!new Bill('billEventParking_2026_02_09')
!billEventParking_2026_02_09.amount := 8.75
!billEventParking_2026_02_09.category := 'Transport - Parking'
!billEventParking_2026_02_09.date := Date('2026-02-09')
!billEventParking_2026_02_09.paymentMethod := #CASH
!billEventParking_2026_02_09.status := #DRAFT

!insert (expFebArtExhibition, billExhibitTickets_2026_02_09) into ExpenseContainsBills
!insert (expFebArtExhibition, billExhibitCatalog_2026_02_09) into ExpenseContainsBills
!insert (expFebArtExhibition, billMuseumDonation_2026_02_09) into ExpenseContainsBills
!insert (expFebArtExhibition, billEventParking_2026_02_09) into ExpenseContainsBills

!insert (billExhibitTickets_2026_02_09, curXOF) into BillCurrency
!insert (billExhibitCatalog_2026_02_09, curXOF) into BillCurrency
!insert (billMuseumDonation_2026_02_09, curXOF) into BillCurrency
!insert (billEventParking_2026_02_09, curXOF) into BillCurrency

!new Comment('cmtExhibit1')
!cmtExhibit1.text := 'Visited the special exhibition on opening week.'
!new Comment('cmtExhibit2')
!cmtExhibit2.text := 'Donation receipt pending confirmation from the museum foundation.'
!new Comment('cmtExhibit3')
!cmtExhibit3.text := 'Parking receipt still in draft because the kiosk printed a partial slip.'

!insert (expFebArtExhibition, cmtExhibit1) into ExpenseComment
!insert (expFebArtExhibition, cmtExhibit2) into ExpenseComment
!insert (expFebArtExhibition, cmtExhibit3) into ExpenseComment


!new Expense('expJunGardenIrrigationSystem')
!expJunGardenIrrigationSystem.amount := 640.00
!expJunGardenIrrigationSystem.startDate := Date('2026-06-03')
!expJunGardenIrrigationSystem.endDate := Date('2026-06-03')

!new Bill('billIrrigationInstall_2026_06_03')
!billIrrigationInstall_2026_06_03.amount := 640.00
!billIrrigationInstall_2026_06_03.category := 'Home - Irrigation system installation'
!billIrrigationInstall_2026_06_03.date := Date('2026-06-03')
!billIrrigationInstall_2026_06_03.paymentMethod := #CHECK
!billIrrigationInstall_2026_06_03.status := #VERIFIED

!insert (expJunGardenIrrigationSystem, billIrrigationInstall_2026_06_03) into ExpenseContainsBills
!insert (billIrrigationInstall_2026_06_03, curHRK) into BillCurrency
```
## Generation 27 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 63 | 0.00% |
| Multiplicities Errors | 0 | 13 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 2 | 0.00% |

# Generation 28
```
!new Currency('curUGX')
!curUGX.name := 'Ugandan Shilling'
!curUGX.abbreviation := 'UGX'

!new Currency('curLKR')
!curLKR.name := 'Sri Lankan Rupee'
!curLKR.abbreviation := 'LKR'

!new Expense('expSepFilmProduction')
!expSepFilmProduction.amount := 1049.50
!expSepFilmProduction.startDate := Date('2026-09-03')
!expSepFilmProduction.endDate := Date('2026-09-06')

!new Bill('billCameraRigRental_2026_09_03')
!billCameraRigRental_2026_09_03.amount := 450.00
!billCameraRigRental_2026_09_03.category := 'Media - Camera rig rental'
!billCameraRigRental_2026_09_03.date := Date('2026-09-03')
!billCameraRigRental_2026_09_03.paymentMethod := #CREDIT_CARD
!billCameraRigRental_2026_09_03.status := #VALIDATED

!new Bill('billLocationFee_2026_09_03')
!billLocationFee_2026_09_03.amount := 300.00
!billLocationFee_2026_09_03.category := 'Media - Location fee'
!billLocationFee_2026_09_03.date := Date('2026-09-03')
!billLocationFee_2026_09_03.paymentMethod := #CASH
!billLocationFee_2026_09_03.status := #VERIFIED

!new Bill('billCrewCatering_2026_09_04')
!billCrewCatering_2026_09_04.amount := 95.75
!billCrewCatering_2026_09_04.category := 'Media - Crew catering'
!billCrewCatering_2026_09_04.date := Date('2026-09-04')
!billCrewCatering_2026_09_04.paymentMethod := #CREDIT_CARD
!billCrewCatering_2026_09_04.status := #PENDING

!new Bill('billFilmingPermit_2026_09_04')
!billFilmingPermit_2026_09_04.amount := 40.00
!billFilmingPermit_2026_09_04.category := 'Media - Filming permit'
!billFilmingPermit_2026_09_04.date := Date('2026-09-04')
!billFilmingPermit_2026_09_04.paymentMethod := #CHECK
!billFilmingPermit_2026_09_04.status := #VALIDATED

!new Bill('billMusicLicense_2026_09_05')
!billMusicLicense_2026_09_05.amount := 60.00
!billMusicLicense_2026_09_05.category := 'Media - Music license'
!billMusicLicense_2026_09_05.date := Date('2026-09-05')
!billMusicLicense_2026_09_05.paymentMethod := #CREDIT_CARD
!billMusicLicense_2026_09_05.status := #VERIFIED

!new Bill('billCostumeAccessories_2026_09_05')
!billCostumeAccessories_2026_09_05.amount := 28.25
!billCostumeAccessories_2026_09_05.category := 'Media - Costume accessories'
!billCostumeAccessories_2026_09_05.date := Date('2026-09-05')
!billCostumeAccessories_2026_09_05.paymentMethod := #CASH
!billCostumeAccessories_2026_09_05.status := #DRAFT

!new Bill('billVanFuel_2026_09_06')
!billVanFuel_2026_09_06.amount := 75.50
!billVanFuel_2026_09_06.category := 'Media - Transport fuel'
!billVanFuel_2026_09_06.date := Date('2026-09-06')
!billVanFuel_2026_09_06.paymentMethod := #CASH
!billVanFuel_2026_09_06.status := #VERIFIED

!insert (expSepFilmProduction, billCameraRigRental_2026_09_03) into ExpenseContainsBills
!insert (expSepFilmProduction, billLocationFee_2026_09_03) into ExpenseContainsBills
!insert (expSepFilmProduction, billCrewCatering_2026_09_04) into ExpenseContainsBills
!insert (expSepFilmProduction, billFilmingPermit_2026_09_04) into ExpenseContainsBills
!insert (expSepFilmProduction, billMusicLicense_2026_09_05) into ExpenseContainsBills
!insert (expSepFilmProduction, billCostumeAccessories_2026_09_05) into ExpenseContainsBills
!insert (expSepFilmProduction, billVanFuel_2026_09_06) into ExpenseContainsBills

!insert (billCameraRigRental_2026_09_03, curUGX) into BillCurrency
!insert (billLocationFee_2026_09_03, curUGX) into BillCurrency
!insert (billCrewCatering_2026_09_04, curUGX) into BillCurrency
!insert (billFilmingPermit_2026_09_04, curUGX) into BillCurrency
!insert (billVanFuel_2026_09_06, curUGX) into BillCurrency
!insert (billMusicLicense_2026_09_05, curLKR) into BillCurrency
!insert (billCostumeAccessories_2026_09_05, curLKR) into BillCurrency

!new Comment('cmtFilm1')
!cmtFilm1.text := 'Short production shoot: rental, permit, and logistics tracked as one expense.'
!insert (expSepFilmProduction, cmtFilm1) into ExpenseComment


!new Expense('expSepLibraryMemberships')
!expSepLibraryMemberships.amount := 40.00
!expSepLibraryMemberships.startDate := Date('2026-09-20')
!expSepLibraryMemberships.endDate := Date('2026-09-20')

!new Bill('billCityLibraryAnnual_2026_09_20')
!billCityLibraryAnnual_2026_09_20.amount := 35.00
!billCityLibraryAnnual_2026_09_20.category := 'Education - Library annual membership'
!billCityLibraryAnnual_2026_09_20.date := Date('2026-09-20')
!billCityLibraryAnnual_2026_09_20.paymentMethod := #CASH
!billCityLibraryAnnual_2026_09_20.status := #VALIDATED

!new Bill('billOverdueFineSettlement_2026_09_20')
!billOverdueFineSettlement_2026_09_20.amount := 5.00
!billOverdueFineSettlement_2026_09_20.category := 'Education - Overdue fine settlement'
!billOverdueFineSettlement_2026_09_20.date := Date('2026-09-20')
!billOverdueFineSettlement_2026_09_20.paymentMethod := #CASH
!billOverdueFineSettlement_2026_09_20.status := #VERIFIED

!insert (expSepLibraryMemberships, billCityLibraryAnnual_2026_09_20) into ExpenseContainsBills
!insert (expSepLibraryMemberships, billOverdueFineSettlement_2026_09_20) into ExpenseContainsBills

!insert (billCityLibraryAnnual_2026_09_20, curLKR) into BillCurrency
!insert (billOverdueFineSettlement_2026_09_20, curLKR) into BillCurrency
```
## Generation 28 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 89 | 0.00% |
| Multiplicities Errors | 0 | 19 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 2 | 0.00% |

# Generation 29
```
!new Currency('curTND')
!curTND.name := 'Tunisian Dinar'
!curTND.abbreviation := 'TND'

!new Currency('curGEL')
!curGEL.name := 'Georgian Lari'
!curGEL.abbreviation := 'GEL'

!new Expense('expAugDisasterPreparednessKit')
!expAugDisasterPreparednessKit.amount := 344.24
!expAugDisasterPreparednessKit.startDate := Date('2026-08-08')
!expAugDisasterPreparednessKit.endDate := Date('2026-08-14')

!new Bill('billWaterJugs_2026_08_08')
!billWaterJugs_2026_08_08.amount := 38.75
!billWaterJugs_2026_08_08.category := 'Emergency - Water storage containers'
!billWaterJugs_2026_08_08.date := Date('2026-08-08')
!billWaterJugs_2026_08_08.paymentMethod := #CASH
!billWaterJugs_2026_08_08.status := #VERIFIED

!new Bill('billFirstAidSupplies_2026_08_09')
!billFirstAidSupplies_2026_08_09.amount := 74.20
!billFirstAidSupplies_2026_08_09.category := 'Emergency - First aid supplies'
!billFirstAidSupplies_2026_08_09.date := Date('2026-08-09')
!billFirstAidSupplies_2026_08_09.paymentMethod := #CREDIT_CARD
!billFirstAidSupplies_2026_08_09.status := #VALIDATED

!new Bill('billPortableStove_2026_08_10')
!billPortableStove_2026_08_10.amount := 112.00
!billPortableStove_2026_08_10.category := 'Emergency - Portable stove'
!billPortableStove_2026_08_10.date := Date('2026-08-10')
!billPortableStove_2026_08_10.paymentMethod := #CREDIT_CARD
!billPortableStove_2026_08_10.status := #PENDING

!new Bill('billFuelCanister_2026_08_10')
!billFuelCanister_2026_08_10.amount := 16.80
!billFuelCanister_2026_08_10.category := 'Emergency - Fuel canister'
!billFuelCanister_2026_08_10.date := Date('2026-08-10')
!billFuelCanister_2026_08_10.paymentMethod := #CASH
!billFuelCanister_2026_08_10.status := #DRAFT

!new Bill('billThermalBlankets_2026_08_11')
!billThermalBlankets_2026_08_11.amount := 22.50
!billThermalBlankets_2026_08_11.category := 'Emergency - Thermal blankets'
!billThermalBlankets_2026_08_11.date := Date('2026-08-11')
!billThermalBlankets_2026_08_11.paymentMethod := #CASH
!billThermalBlankets_2026_08_11.status := #VERIFIED

!new Bill('billPowerBank_2026_08_12')
!billPowerBank_2026_08_12.amount := 49.99
!billPowerBank_2026_08_12.category := 'Emergency - Phone power bank'
!billPowerBank_2026_08_12.date := Date('2026-08-12')
!billPowerBank_2026_08_12.paymentMethod := #CREDIT_CARD
!billPowerBank_2026_08_12.status := #REFUNDED

!new Bill('billHomeSafetyClass_2026_08_14')
!billHomeSafetyClass_2026_08_14.amount := 30.00
!billHomeSafetyClass_2026_08_14.category := 'Emergency - Home safety training class'
!billHomeSafetyClass_2026_08_14.date := Date('2026-08-14')
!billHomeSafetyClass_2026_08_14.paymentMethod := #CHECK
!billHomeSafetyClass_2026_08_14.status := #REFUSED

!insert (expAugDisasterPreparednessKit, billWaterJugs_2026_08_08) into ExpenseContainsBills
!insert (expAugDisasterPreparednessKit, billFirstAidSupplies_2026_08_09) into ExpenseContainsBills
!insert (expAugDisasterPreparednessKit, billPortableStove_2026_08_10) into ExpenseContainsBills
!insert (expAugDisasterPreparednessKit, billFuelCanister_2026_08_10) into ExpenseContainsBills
!insert (expAugDisasterPreparednessKit, billThermalBlankets_2026_08_11) into ExpenseContainsBills
!insert (expAugDisasterPreparednessKit, billPowerBank_2026_08_12) into ExpenseContainsBills
!insert (expAugDisasterPreparednessKit, billHomeSafetyClass_2026_08_14) into ExpenseContainsBills

!insert (billWaterJugs_2026_08_08, curTND) into BillCurrency
!insert (billFirstAidSupplies_2026_08_09, curTND) into BillCurrency
!insert (billPortableStove_2026_08_10, curGEL) into BillCurrency
!insert (billFuelCanister_2026_08_10, curGEL) into BillCurrency
!insert (billThermalBlankets_2026_08_11, curTND) into BillCurrency
!insert (billPowerBank_2026_08_12, curGEL) into BillCurrency
!insert (billHomeSafetyClass_2026_08_14, curTND) into BillCurrency
```
## Generation 29 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 66 | 0.00% |
| Multiplicities Errors | 0 | 14 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

# Generation 30
```
!new Currency('curQAR_2026_05')
!curQAR_2026_05.name := 'Qatari Riyal'
!curQAR_2026_05.abbreviation := 'QAR'

!new Currency('curRSD_2026_05')
!curRSD_2026_05.name := 'Serbian Dinar'
!curRSD_2026_05.abbreviation := 'RSD'

!new Expense('expMayElectronicsRepairCase')
!expMayElectronicsRepairCase.amount := 199.99
!expMayElectronicsRepairCase.startDate := Date('2026-05-03')
!expMayElectronicsRepairCase.endDate := Date('2026-05-07')

!new Bill('billRepairDiagnostic_2026_05_03')
!billRepairDiagnostic_2026_05_03.amount := 49.99
!billRepairDiagnostic_2026_05_03.category := 'Services - Device diagnostic'
!billRepairDiagnostic_2026_05_03.date := Date('2026-05-03')
!billRepairDiagnostic_2026_05_03.paymentMethod := #CASH
!billRepairDiagnostic_2026_05_03.status := #VERIFIED

!new Bill('billReplacementPart_2026_05_06')
!billReplacementPart_2026_05_06.amount := 150.00
!billReplacementPart_2026_05_06.category := 'Repairs - Replacement part'
!billReplacementPart_2026_05_06.date := Date('2026-05-06')
!billReplacementPart_2026_05_06.paymentMethod := #CREDIT_CARD
!billReplacementPart_2026_05_06.status := #PENDING

!new Bill('billWarrantyCoverage_2026_05_07')
!billWarrantyCoverage_2026_05_07.amount := 0.00
!billWarrantyCoverage_2026_05_07.category := 'Repairs - Warranty coverage'
!billWarrantyCoverage_2026_05_07.date := Date('2026-05-07')
!billWarrantyCoverage_2026_05_07.paymentMethod := #CHECK
!billWarrantyCoverage_2026_05_07.status := #VALIDATED

!insert (expMayElectronicsRepairCase, billRepairDiagnostic_2026_05_03) into ExpenseContainsBills
!insert (expMayElectronicsRepairCase, billReplacementPart_2026_05_06) into ExpenseContainsBills
!insert (expMayElectronicsRepairCase, billWarrantyCoverage_2026_05_07) into ExpenseContainsBills

!insert (billRepairDiagnostic_2026_05_03, curQAR_2026_05) into BillCurrency
!insert (billReplacementPart_2026_05_06, curRSD_2026_05) into BillCurrency
!insert (billWarrantyCoverage_2026_05_07, curQAR_2026_05) into BillCurrency
```
## Generation 30 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 34 | 0.00% |
| Multiplicities Errors | 0 | 6 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

# Summary for all generations
| Summary | Value | 
|---|---| 
| Model | GPT_5_2 | 
| Type | Simple | 
| System | myexpenses | 
| Number of generations | 30 | 

| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 2013 | 0.00% |
| Multiplicities Errors | 0 | 425 | 0.00% |
| Invariants Errors | 0 | 60 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 50 | 0.00% |

