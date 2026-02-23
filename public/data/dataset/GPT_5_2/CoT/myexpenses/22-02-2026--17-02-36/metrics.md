# Generation 1
## Category baseline
```
!new Currency('currencyEUR')
!currencyEUR.name := 'Euro'
!currencyEUR.abbreviation := 'EUR'

!new Expense('expenseEXP2026001')
!expenseEXP2026001.amount := 323.70
!expenseEXP2026001.startDate := Date('2026-01-10')
!expenseEXP2026001.endDate := Date('2026-01-12')

!new Bill('billBILL001')
!billBILL001.amount := 240.00
!billBILL001.category := 'Lodging'
!billBILL001.date := Date('2026-01-10')
!billBILL001.paymentMethod := #CREDIT_CARD
!billBILL001.status := #VERIFIED

!new Bill('billBILL002')
!billBILL002.amount := 35.50
!billBILL002.category := 'Transport'
!billBILL002.date := Date('2026-01-10')
!billBILL002.paymentMethod := #CASH
!billBILL002.status := #VALIDATED

!new Bill('billBILL003')
!billBILL003.amount := 48.20
!billBILL003.category := 'Meals'
!billBILL003.date := Date('2026-01-11')
!billBILL003.paymentMethod := #CREDIT_CARD
!billBILL003.status := #PENDING

!insert (expenseEXP2026001, billBILL001) into ExpenseContainsBills
!insert (expenseEXP2026001, billBILL002) into ExpenseContainsBills
!insert (expenseEXP2026001, billBILL003) into ExpenseContainsBills

!insert (billBILL001, currencyEUR) into BillCurrency
!insert (billBILL002, currencyEUR) into BillCurrency
!insert (billBILL003, currencyEUR) into BillCurrency

!new Comment('commentCMT001')
!commentCMT001.text := 'Receipts attached for hotel, taxi, and meals. Taxi tip included in cash amount.'

!new Comment('commentCMT002')
!commentCMT002.text := 'Please confirm the meals comply with per-diem policy; hotel bill looks OK.'

!insert (expenseEXP2026001, commentCMT001) into ExpenseComment
!insert (expenseEXP2026001, commentCMT002) into ExpenseComment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 37 | 0.00% |
| Multiplicities Errors | 0 | 8 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

## Category boundary
```
!new Expense('expenseEMin')
!expenseEMin.amount := 0.0
!expenseEMin.startDate := Date('2026-02-22')
!expenseEMin.endDate := Date('2026-02-22')
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 4 | 0.00% |
| Multiplicities Errors | 0 | 0 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

## Category complex
```
!new Currency('currencyJPYComplex')
!currencyJPYComplex.name := 'Japanese Yen'
!currencyJPYComplex.abbreviation := 'JPY'

!new Currency('currencyEURComplex')
!currencyEURComplex.name := 'Euro'
!currencyEURComplex.abbreviation := 'EUR'

!new Currency('currencyMADComplex')
!currencyMADComplex.name := 'Moroccan Dirham'
!currencyMADComplex.abbreviation := 'MAD'

!new Expense('expenseTokyoConferenceTravel')
!expenseTokyoConferenceTravel.amount := 68600.00
!expenseTokyoConferenceTravel.startDate := Date('2026-01-10')
!expenseTokyoConferenceTravel.endDate := Date('2026-01-15')

!new Bill('billTokyoA1')
!billTokyoA1.amount := 18500.00
!billTokyoA1.category := 'Hotel'
!billTokyoA1.date := Date('2026-01-10')
!billTokyoA1.paymentMethod := #CREDIT_CARD
!billTokyoA1.status := #VERIFIED

!new Bill('billTokyoA2')
!billTokyoA2.amount := 3200.00
!billTokyoA2.category := 'Airport train (Narita Express)'
!billTokyoA2.date := Date('2026-01-10')
!billTokyoA2.paymentMethod := #CASH
!billTokyoA2.status := #VALIDATED

!new Bill('billTokyoA3')
!billTokyoA3.amount := 14600.00
!billTokyoA3.category := 'Conference registration'
!billTokyoA3.date := Date('2026-01-11')
!billTokyoA3.paymentMethod := #CREDIT_CARD
!billTokyoA3.status := #PENDING

!new Bill('billTokyoA4')
!billTokyoA4.amount := 9800.00
!billTokyoA4.category := 'Meals'
!billTokyoA4.date := Date('2026-01-12')
!billTokyoA4.paymentMethod := #CASH
!billTokyoA4.status := #VERIFIED

!new Bill('billTokyoA5')
!billTokyoA5.amount := 5400.00
!billTokyoA5.category := 'Local taxi transfers'
!billTokyoA5.date := Date('2026-01-13')
!billTokyoA5.paymentMethod := #CASH
!billTokyoA5.status := #VERIFIED

!new Bill('billTokyoA6')
!billTokyoA6.amount := 17100.00
!billTokyoA6.category := 'Client dinner (Kanda)'
!billTokyoA6.date := Date('2026-01-13')
!billTokyoA6.paymentMethod := #CREDIT_CARD
!billTokyoA6.status := #VALIDATED

!insert (expenseTokyoConferenceTravel, billTokyoA1) into ExpenseContainsBills
!insert (expenseTokyoConferenceTravel, billTokyoA2) into ExpenseContainsBills
!insert (expenseTokyoConferenceTravel, billTokyoA3) into ExpenseContainsBills
!insert (expenseTokyoConferenceTravel, billTokyoA4) into ExpenseContainsBills
!insert (expenseTokyoConferenceTravel, billTokyoA5) into ExpenseContainsBills
!insert (expenseTokyoConferenceTravel, billTokyoA6) into ExpenseContainsBills

!insert (billTokyoA1, currencyJPYComplex) into BillCurrency
!insert (billTokyoA2, currencyJPYComplex) into BillCurrency
!insert (billTokyoA3, currencyJPYComplex) into BillCurrency
!insert (billTokyoA4, currencyJPYComplex) into BillCurrency
!insert (billTokyoA5, currencyJPYComplex) into BillCurrency
!insert (billTokyoA6, currencyJPYComplex) into BillCurrency

!new Comment('commentTokyoAC1')
!commentTokyoAC1.text := 'Receipts are split between cash and card; hotel invoice includes city tax in the printed total.'

!new Comment('commentTokyoAC2')
!commentTokyoAC2.text := 'Conference badge pickup required ID; registration marked pending until attendance confirmed.'

!insert (expenseTokyoConferenceTravel, commentTokyoAC1) into ExpenseComment
!insert (expenseTokyoConferenceTravel, commentTokyoAC2) into ExpenseComment

!new Expense('expenseMadridClientVisit')
!expenseMadridClientVisit.amount := 312.40
!expenseMadridClientVisit.startDate := Date('2025-11-03')
!expenseMadridClientVisit.endDate := Date('2025-11-06')

!new Bill('billMadridB1')
!billMadridB1.amount := 189.00
!billMadridB1.category := 'Hotel (Puerta del Sol)'
!billMadridB1.date := Date('2025-11-03')
!billMadridB1.paymentMethod := #CREDIT_CARD
!billMadridB1.status := #VALIDATED

!new Bill('billMadridB2')
!billMadridB2.amount := 34.50
!billMadridB2.category := 'Public transport (10-trip metro pass)'
!billMadridB2.date := Date('2025-11-04')
!billMadridB2.paymentMethod := #CASH
!billMadridB2.status := #VERIFIED

!new Bill('billMadridB3')
!billMadridB3.amount := 88.90
!billMadridB3.category := 'Team meal (tapas)'
!billMadridB3.date := Date('2025-11-05')
!billMadridB3.paymentMethod := #CREDIT_CARD
!billMadridB3.status := #REFUNDED

!insert (expenseMadridClientVisit, billMadridB1) into ExpenseContainsBills
!insert (expenseMadridClientVisit, billMadridB2) into ExpenseContainsBills
!insert (expenseMadridClientVisit, billMadridB3) into ExpenseContainsBills

!insert (billMadridB1, currencyEURComplex) into BillCurrency
!insert (billMadridB2, currencyEURComplex) into BillCurrency
!insert (billMadridB3, currencyEURComplex) into BillCurrency

!new Comment('commentMadridBC1')
!commentMadridBC1.text := 'Meal was refunded due to duplicate charge; keep both the original slip and the refund confirmation.'

!insert (expenseMadridClientVisit, commentMadridBC1) into ExpenseComment

!new Expense('expenseCasablancaSupplierMeeting')
!expenseCasablancaSupplierMeeting.amount := 1450.00
!expenseCasablancaSupplierMeeting.startDate := Date('2025-09-18')
!expenseCasablancaSupplierMeeting.endDate := Date('2025-09-20')

!new Bill('billCasablancaC1')
!billCasablancaC1.amount := 900.00
!billCasablancaC1.category := 'Lodging (riad)'
!billCasablancaC1.date := Date('2025-09-18')
!billCasablancaC1.paymentMethod := #CASH
!billCasablancaC1.status := #VERIFIED

!new Bill('billCasablancaC2')
!billCasablancaC2.amount := 550.00
!billCasablancaC2.category := 'Train (Casa–Rabat round trip)'
!billCasablancaC2.date := Date('2025-09-19')
!billCasablancaC2.paymentMethod := #CHECK
!billCasablancaC2.status := #REFUSED

!insert (expenseCasablancaSupplierMeeting, billCasablancaC1) into ExpenseContainsBills
!insert (expenseCasablancaSupplierMeeting, billCasablancaC2) into ExpenseContainsBills

!insert (billCasablancaC1, currencyMADComplex) into BillCurrency
!insert (billCasablancaC2, currencyMADComplex) into BillCurrency

!new Comment('commentCasablancaCC1')
!commentCasablancaCC1.text := 'Supplier requested payment evidence; check receipt attached to the train booking confirmation.'

!new Comment('commentCasablancaCC2')
!commentCasablancaCC2.text := 'Train expense refused pending clearer category justification (workshop vs. transport).'

!new Comment('commentCasablancaCC3')
!commentCasablancaCC3.text := 'Cash lodging receipt is handwritten; translation note added for accounting.'

!insert (expenseCasablancaSupplierMeeting, commentCasablancaCC1) into ExpenseComment
!insert (expenseCasablancaSupplierMeeting, commentCasablancaCC2) into ExpenseComment
!insert (expenseCasablancaSupplierMeeting, commentCasablancaCC3) into ExpenseComment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 127 | 0.00% |
| Multiplicities Errors | 0 | 28 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 3 | 0.00% |

## Category edge
```
!new Currency('currencyCUR1')
!currencyCUR1.name := 'Euro'
!currencyCUR1.abbreviation := 'EUR'

!new Currency('currencyCUR2')
!currencyCUR2.name := 'Japanese Yen'
!currencyCUR2.abbreviation := 'JPY'

!new Currency('currencyCUR3')
!currencyCUR3.name := 'Swiss Franc'
!currencyCUR3.abbreviation := 'CHF'

!new Expense('expenseEXPEDGE001')
!expenseEXPEDGE001.amount := 0.01
!expenseEXPEDGE001.startDate := Date('2024-02-29')
!expenseEXPEDGE001.endDate := Date('2024-02-29')

!new Bill('billEDGE001')
!billEDGE001.amount := 0.00
!billEDGE001.category := 'Administrative rounding adjustment'
!billEDGE001.date := Date('2024-02-29')
!billEDGE001.paymentMethod := #CASH
!billEDGE001.status := #VERIFIED

!new Bill('billEDGE002')
!billEDGE002.amount := 125000.00
!billEDGE002.category := 'Conference registration (prepaid)'
!billEDGE002.date := Date('2024-02-29')
!billEDGE002.paymentMethod := #CREDIT_CARD
!billEDGE002.status := #VALIDATED

!new Bill('billEDGE003')
!billEDGE003.amount := -125000.00
!billEDGE003.category := 'Full refund (same day reversal)'
!billEDGE003.date := Date('2024-02-29')
!billEDGE003.paymentMethod := #CHECK
!billEDGE003.status := #REFUNDED

!new Bill('billEDGE004')
!billEDGE004.amount := 0.01
!billEDGE004.category := 'Currency conversion remainder'
!billEDGE004.date := Date('2024-02-29')
!billEDGE004.paymentMethod := #CASH
!billEDGE004.status := #PENDING

!insert (expenseEXPEDGE001, billEDGE001) into ExpenseContainsBills
!insert (expenseEXPEDGE001, billEDGE002) into ExpenseContainsBills
!insert (expenseEXPEDGE001, billEDGE003) into ExpenseContainsBills
!insert (expenseEXPEDGE001, billEDGE004) into ExpenseContainsBills

!insert (billEDGE001, currencyCUR1) into BillCurrency
!insert (billEDGE002, currencyCUR2) into BillCurrency
!insert (billEDGE003, currencyCUR2) into BillCurrency
!insert (billEDGE004, currencyCUR3) into BillCurrency

!new Comment('commentEDGE001')
!commentEDGE001.text := 'Multi-currency edge case: JPY charge and JPY refund cancel out; only CHF remainder stays. 日本語メモ: 返金済み. ملاحظة: تم الاسترداد.'

!new Comment('commentEDGE002')
!commentEDGE002.text := 'Leap-day single-day expense. Total intentionally tiny (0.01) to test rounding and sum-of-bills invariant.'

!insert (expenseEXPEDGE001, commentEDGE001) into ExpenseComment
!insert (expenseEXPEDGE001, commentEDGE002) into ExpenseComment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 51 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

## Category invalid
```
!new Currency('currencyEuro2')
!currencyEuro2.name := 'Euro'
!currencyEuro2.abbreviation := 'EUR'

!new Currency('currencyUSD')
!currencyUSD.name := 'US Dollar'
!currencyUSD.abbreviation := 'USD'

!new Currency('currencyJPY')
!currencyJPY.name := 'Japanese Yen'
!currencyJPY.abbreviation := 'JPY'

!new Expense('expenseJan2026ClientVisit')
!expenseJan2026ClientVisit.amount := 142.00
!expenseJan2026ClientVisit.startDate := Date('2026-01-10')
!expenseJan2026ClientVisit.endDate := Date('2026-01-14')

!new Bill('billClientVisit001')
!billClientVisit001.amount := 100.00
!billClientVisit001.category := 'Ground transport (airport taxi)'
!billClientVisit001.date := Date('2026-01-11')
!billClientVisit001.paymentMethod := #CREDIT_CARD
!billClientVisit001.status := #VALIDATED

!new Bill('billClientVisit002')
!billClientVisit002.amount := 50.00
!billClientVisit002.category := 'Meals (team dinner)'
!billClientVisit002.date := Date('2026-01-12')
!billClientVisit002.paymentMethod := #CASH
!billClientVisit002.status := #VERIFIED

!insert (expenseJan2026ClientVisit, billClientVisit001) into ExpenseContainsBills
!insert (expenseJan2026ClientVisit, billClientVisit002) into ExpenseContainsBills

!insert (billClientVisit001, currencyUSD) into BillCurrency
!insert (billClientVisit002, currencyEuro2) into BillCurrency

!new Comment('commentClientVisit001')
!commentClientVisit001.text := 'USD taxi converted using corporate monthly rate: 1 USD = 0.92 EUR.'

!new Comment('commentClientVisit002')
!commentClientVisit002.text := 'Reimbursed total is 92.00 EUR (from USD) + 50.00 EUR = 142.00 EUR; receipts attached.'

!insert (expenseJan2026ClientVisit, commentClientVisit001) into ExpenseComment
!insert (expenseJan2026ClientVisit, commentClientVisit002) into ExpenseComment
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 6 | 16.67% |
| Invariants Errors (Not included on General) | 1 | 2 | 50.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `BillCurrency':
  Object `currencyJPY' of class `Currency' is connected to 0 objects of class `Bill'
  at association end `bill' but the multiplicity is specified as `1..*'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (1) `Expense::expenseSumOfBills': FAILED.
```

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

## Generation 1 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 254 | 0.00% |
| Multiplicities Errors | 0 | 46 | 0.00% |
| Invariants Errors | 0 | 8 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 6 | 16.67% |
| Invariants Errors (Not included on General) | 1 | 2 | 50.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `BillCurrency':
  Object `currencyJPY' of class `Currency' is connected to 0 objects of class `Bill'
  at association end `bill' but the multiplicity is specified as `1..*'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (1) `Expense::expenseSumOfBills': FAILED.
```

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 7 | 0.00% |

# Generation 2
## Category baseline
```
!new Currency('currencyBRL')
!currencyBRL.name := 'Brazilian Real'
!currencyBRL.abbreviation := 'BRL'

!new Currency('currencyUSDBRLTrip')
!currencyUSDBRLTrip.name := 'US Dollar'
!currencyUSDBRLTrip.abbreviation := 'USD'

!new Expense('expenseEXP2026014')
!expenseEXP2026014.amount := 1211.80
!expenseEXP2026014.startDate := Date('2026-02-03')
!expenseEXP2026014.endDate := Date('2026-02-07')

!new Bill('billBILL101')
!billBILL101.amount := 28.50
!billBILL101.category := 'Local transport'
!billBILL101.date := Date('2026-02-03')
!billBILL101.paymentMethod := #CASH
!billBILL101.status := #VALIDATED

!new Bill('billBILL102')
!billBILL102.amount := 610.00
!billBILL102.category := 'Lodging'
!billBILL102.date := Date('2026-02-03')
!billBILL102.paymentMethod := #CREDIT_CARD
!billBILL102.status := #VERIFIED

!new Bill('billBILL103')
!billBILL103.amount := 195.40
!billBILL103.category := 'Meals & entertainment'
!billBILL103.date := Date('2026-02-05')
!billBILL103.paymentMethod := #CREDIT_CARD
!billBILL103.status := #PENDING

!new Bill('billBILL104')
!billBILL104.amount := 42.90
!billBILL104.category := 'Office supplies'
!billBILL104.date := Date('2026-02-06')
!billBILL104.paymentMethod := #CASH
!billBILL104.status := #REFUSED

!new Bill('billBILL105')
!billBILL105.amount := 320.00
!billBILL105.category := 'Conference fees'
!billBILL105.date := Date('2026-02-04')
!billBILL105.paymentMethod := #CHECK
!billBILL105.status := #VALIDATED

!new Bill('billBILL106')
!billBILL106.amount := 15.00
!billBILL106.category := 'Telecom'
!billBILL106.date := Date('2026-02-03')
!billBILL106.paymentMethod := #CREDIT_CARD
!billBILL106.status := #REFUNDED

!insert (expenseEXP2026014, billBILL101) into ExpenseContainsBills
!insert (expenseEXP2026014, billBILL102) into ExpenseContainsBills
!insert (expenseEXP2026014, billBILL103) into ExpenseContainsBills
!insert (expenseEXP2026014, billBILL104) into ExpenseContainsBills
!insert (expenseEXP2026014, billBILL105) into ExpenseContainsBills
!insert (expenseEXP2026014, billBILL106) into ExpenseContainsBills

!insert (billBILL101, currencyBRL) into BillCurrency
!insert (billBILL102, currencyBRL) into BillCurrency
!insert (billBILL103, currencyBRL) into BillCurrency
!insert (billBILL104, currencyBRL) into BillCurrency
!insert (billBILL105, currencyBRL) into BillCurrency
!insert (billBILL106, currencyUSDBRLTrip) into BillCurrency

!new Comment('commentCMT101')
!commentCMT101.text := 'Observação: a gráfica não aceitou CNPJ na nota; por isso o item de impressão foi recusado.'

!new Comment('commentCMT102')
!commentCMT102.text := 'Conference fee was paid by check per vendor requirement; receipt provided by the organizer.'

!new Comment('commentCMT103')
!commentCMT103.text := 'E-SIM plan was refunded by the provider due to activation issues; keeping record for audit trail.'

!insert (expenseEXP2026014, commentCMT101) into ExpenseComment
!insert (expenseEXP2026014, commentCMT102) into ExpenseComment
!insert (expenseEXP2026014, commentCMT103) into ExpenseComment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 67 | 0.00% |
| Multiplicities Errors | 0 | 15 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

## Category boundary
```
!new Currency('currencyUSDHigh')
!currencyUSDHigh.name := 'US Dollar'
!currencyUSDHigh.abbreviation := 'USD'

!new Currency('currencyJPYHigh')
!currencyJPYHigh.name := 'Japanese Yen'
!currencyJPYHigh.abbreviation := 'JPY'

!new Currency('currencyINRHigh')
!currencyINRHigh.name := 'Indian Rupee'
!currencyINRHigh.abbreviation := 'INR'

!new Expense('expenseEHigh')
!expenseEHigh.amount := 1000000000.00
!expenseEHigh.startDate := Date('2024-02-29')
!expenseEHigh.endDate := Date('2024-03-01')

!new Bill('billEHighB1')
!billEHighB1.amount := 999999999.99
!billEHighB1.category := 'Intercontinental flight (business)'
!billEHighB1.date := Date('2024-02-29')
!billEHighB1.paymentMethod := #CREDIT_CARD
!billEHighB1.status := #VERIFIED

!new Bill('billEHighB2')
!billEHighB2.amount := 0.00
!billEHighB2.category := 'Tokyo metro ticket (promotional free ride)'
!billEHighB2.date := Date('2024-02-29')
!billEHighB2.paymentMethod := #CASH
!billEHighB2.status := #REFUNDED

!new Bill('billEHighB3')
!billEHighB3.amount := 0.01
!billEHighB3.category := 'Masala chai (token charge)'
!billEHighB3.date := Date('2024-03-01')
!billEHighB3.paymentMethod := #CASH
!billEHighB3.status := #VALIDATED

!new Bill('billEHighB4')
!billEHighB4.amount := 0.00
!billEHighB4.category := 'Hotel deposit pre-authorization (released)'
!billEHighB4.date := Date('2024-03-01')
!billEHighB4.paymentMethod := #CREDIT_CARD
!billEHighB4.status := #REFUNDED

!new Bill('billEHighB5')
!billEHighB5.amount := 0.00
!billEHighB5.category := 'Rail pass processing fee waived'
!billEHighB5.date := Date('2024-03-01')
!billEHighB5.paymentMethod := #CHECK
!billEHighB5.status := #PENDING

!insert (expenseEHigh, billEHighB1) into ExpenseContainsBills
!insert (expenseEHigh, billEHighB2) into ExpenseContainsBills
!insert (expenseEHigh, billEHighB3) into ExpenseContainsBills
!insert (expenseEHigh, billEHighB4) into ExpenseContainsBills
!insert (expenseEHigh, billEHighB5) into ExpenseContainsBills

!insert (billEHighB1, currencyUSDHigh) into BillCurrency
!insert (billEHighB2, currencyJPYHigh) into BillCurrency
!insert (billEHighB3, currencyINRHigh) into BillCurrency
!insert (billEHighB4, currencyUSDHigh) into BillCurrency
!insert (billEHighB5, currencyJPYHigh) into BillCurrency

!new Comment('commentEHighC1')
!commentEHighC1.text := 'Flight cost is exceptionally high due to last-minute rebooking after a weather disruption.'

!new Comment('commentEHighC2')
!commentEHighC2.text := '領収書は電子版のみです（紙の発行なし）。'

!new Comment('commentEHighC3')
!commentEHighC3.text := 'Importante: los cargos de 0.00 corresponden a autorizaciones/liberaciones, no a gastos reales.'

!insert (expenseEHigh, commentEHighC1) into ExpenseComment
!insert (expenseEHigh, commentEHighC2) into ExpenseComment
!insert (expenseEHigh, commentEHighC3) into ExpenseComment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 62 | 0.00% |
| Multiplicities Errors | 0 | 13 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

## Category complex
```
!new Currency('currencyGBPNew2')
!currencyGBPNew2.name := 'British Pound Sterling'
!currencyGBPNew2.abbreviation := 'GBP'

!new Currency('currencyBRLNew2')
!currencyBRLNew2.name := 'Brazilian Real'
!currencyBRLNew2.abbreviation := 'BRL'

!new Currency('currencyINRNew2')
!currencyINRNew2.name := 'Indian Rupee'
!currencyINRNew2.abbreviation := 'INR'

!new Currency('currencyUSDNew2')
!currencyUSDNew2.name := 'US Dollar'
!currencyUSDNew2.abbreviation := 'USD'

!new Expense('expenseHomeOfficeUpgradeManchester2')
!expenseHomeOfficeUpgradeManchester2.amount := 360.44
!expenseHomeOfficeUpgradeManchester2.startDate := Date('2026-02-01')
!expenseHomeOfficeUpgradeManchester2.endDate := Date('2026-02-02')

!new Bill('billHomeOfficeD1_2')
!billHomeOfficeD1_2.amount := 249.99
!billHomeOfficeD1_2.category := 'External monitor'
!billHomeOfficeD1_2.date := Date('2026-02-01')
!billHomeOfficeD1_2.paymentMethod := #CREDIT_CARD
!billHomeOfficeD1_2.status := #PENDING

!new Bill('billHomeOfficeD2_2')
!billHomeOfficeD2_2.amount := 79.50
!billHomeOfficeD2_2.category := 'Keyboard and mouse'
!billHomeOfficeD2_2.date := Date('2026-02-01')
!billHomeOfficeD2_2.paymentMethod := #CREDIT_CARD
!billHomeOfficeD2_2.status := #DRAFT

!new Bill('billHomeOfficeD3_2')
!billHomeOfficeD3_2.amount := 18.00
!billHomeOfficeD3_2.category := 'USB-C to HDMI adapter'
!billHomeOfficeD3_2.date := Date('2026-02-02')
!billHomeOfficeD3_2.paymentMethod := #CASH
!billHomeOfficeD3_2.status := #VERIFIED

!new Bill('billHomeOfficeD4_2')
!billHomeOfficeD4_2.amount := 12.95
!billHomeOfficeD4_2.category := 'Shipping fee'
!billHomeOfficeD4_2.date := Date('2026-02-02')
!billHomeOfficeD4_2.paymentMethod := #CREDIT_CARD
!billHomeOfficeD4_2.status := #VERIFIED

!insert (expenseHomeOfficeUpgradeManchester2, billHomeOfficeD1_2) into ExpenseContainsBills
!insert (expenseHomeOfficeUpgradeManchester2, billHomeOfficeD2_2) into ExpenseContainsBills
!insert (expenseHomeOfficeUpgradeManchester2, billHomeOfficeD3_2) into ExpenseContainsBills
!insert (expenseHomeOfficeUpgradeManchester2, billHomeOfficeD4_2) into ExpenseContainsBills

!insert (billHomeOfficeD1_2, currencyGBPNew2) into BillCurrency
!insert (billHomeOfficeD2_2, currencyGBPNew2) into BillCurrency
!insert (billHomeOfficeD3_2, currencyGBPNew2) into BillCurrency
!insert (billHomeOfficeD4_2, currencyGBPNew2) into BillCurrency

!new Comment('commentHomeOfficeDC1_2')
!commentHomeOfficeDC1_2.text := 'Monitor purchased to meet accessibility requirements; awaiting manager validation.'

!new Comment('commentHomeOfficeDC2_2')
!commentHomeOfficeDC2_2.text := 'Keyboard/mouse still in draft because the invoice PDF was missing VAT number; supplier resent it.'

!insert (expenseHomeOfficeUpgradeManchester2, commentHomeOfficeDC1_2) into ExpenseComment
!insert (expenseHomeOfficeUpgradeManchester2, commentHomeOfficeDC2_2) into ExpenseComment

!new Expense('expenseSaoPauloWarehouseAudit2')
!expenseSaoPauloWarehouseAudit2.amount := 890.00
!expenseSaoPauloWarehouseAudit2.startDate := Date('2025-10-14')
!expenseSaoPauloWarehouseAudit2.endDate := Date('2025-10-16')

!new Bill('billSaoPauloE1_2')
!billSaoPauloE1_2.amount := 680.00
!billSaoPauloE1_2.category := 'Hotel (2 nights)'
!billSaoPauloE1_2.date := Date('2025-10-14')
!billSaoPauloE1_2.paymentMethod := #CREDIT_CARD
!billSaoPauloE1_2.status := #VALIDATED

!new Bill('billSaoPauloE2_2')
!billSaoPauloE2_2.amount := 54.30
!billSaoPauloE2_2.category := 'Airport bus'
!billSaoPauloE2_2.date := Date('2025-10-14')
!billSaoPauloE2_2.paymentMethod := #CASH
!billSaoPauloE2_2.status := #VERIFIED

!new Bill('billSaoPauloE3_2')
!billSaoPauloE3_2.amount := 120.00
!billSaoPauloE3_2.category := 'Ride-share to industrial park'
!billSaoPauloE3_2.date := Date('2025-10-15')
!billSaoPauloE3_2.paymentMethod := #CREDIT_CARD
!billSaoPauloE3_2.status := #REFUSED

!new Bill('billSaoPauloE4_2')
!billSaoPauloE4_2.amount := 35.70
!billSaoPauloE4_2.category := 'Printing & badges'
!billSaoPauloE4_2.date := Date('2025-10-15')
!billSaoPauloE4_2.paymentMethod := #CASH
!billSaoPauloE4_2.status := #VERIFIED

!insert (expenseSaoPauloWarehouseAudit2, billSaoPauloE1_2) into ExpenseContainsBills
!insert (expenseSaoPauloWarehouseAudit2, billSaoPauloE2_2) into ExpenseContainsBills
!insert (expenseSaoPauloWarehouseAudit2, billSaoPauloE3_2) into ExpenseContainsBills
!insert (expenseSaoPauloWarehouseAudit2, billSaoPauloE4_2) into ExpenseContainsBills

!insert (billSaoPauloE1_2, currencyBRLNew2) into BillCurrency
!insert (billSaoPauloE2_2, currencyBRLNew2) into BillCurrency
!insert (billSaoPauloE3_2, currencyBRLNew2) into BillCurrency
!insert (billSaoPauloE4_2, currencyBRLNew2) into BillCurrency

!new Comment('commentSaoPauloEC1_2')
!commentSaoPauloEC1_2.text := 'Ride-share was refused: no itemized receipt provided by the app (requested re-issue).'

!new Comment('commentSaoPauloEC2_2')
!commentSaoPauloEC2_2.text := 'Hotel invoice includes ‘taxa de serviço’; accounting asked to keep the original hard copy.'

!insert (expenseSaoPauloWarehouseAudit2, commentSaoPauloEC1_2) into ExpenseComment
!insert (expenseSaoPauloWarehouseAudit2, commentSaoPauloEC2_2) into ExpenseComment

!new Expense('expenseBengaluruOnboardingTraining2')
!expenseBengaluruOnboardingTraining2.amount := 19020.00
!expenseBengaluruOnboardingTraining2.startDate := Date('2025-07-07')
!expenseBengaluruOnboardingTraining2.endDate := Date('2025-07-11')

!new Bill('billBengaluruF1_2')
!billBengaluruF1_2.amount := 15000.00
!billBengaluruF1_2.category := 'Training fee (vendor invoice)'
!billBengaluruF1_2.date := Date('2025-07-07')
!billBengaluruF1_2.paymentMethod := #CHECK
!billBengaluruF1_2.status := #VERIFIED

!new Bill('billBengaluruF2_2')
!billBengaluruF2_2.amount := 1850.00
!billBengaluruF2_2.category := 'Coworking day passes'
!billBengaluruF2_2.date := Date('2025-07-08')
!billBengaluruF2_2.paymentMethod := #CREDIT_CARD
!billBengaluruF2_2.status := #VALIDATED

!new Bill('billBengaluruF3_2')
!billBengaluruF3_2.amount := 640.00
!billBengaluruF3_2.category := 'Metro card top-up'
!billBengaluruF3_2.date := Date('2025-07-09')
!billBengaluruF3_2.paymentMethod := #CASH
!billBengaluruF3_2.status := #VERIFIED

!new Bill('billBengaluruF4_2')
!billBengaluruF4_2.amount := 1320.00
!billBengaluruF4_2.category := 'Meals'
!billBengaluruF4_2.date := Date('2025-07-10')
!billBengaluruF4_2.paymentMethod := #CASH
!billBengaluruF4_2.status := #PENDING

!new Bill('billBengaluruF5_2')
!billBengaluruF5_2.amount := 210.00
!billBengaluruF5_2.category := 'Prepaid SIM (partial refund)'
!billBengaluruF5_2.date := Date('2025-07-11')
!billBengaluruF5_2.paymentMethod := #CASH
!billBengaluruF5_2.status := #REFUNDED

!insert (expenseBengaluruOnboardingTraining2, billBengaluruF1_2) into ExpenseContainsBills
!insert (expenseBengaluruOnboardingTraining2, billBengaluruF2_2) into ExpenseContainsBills
!insert (expenseBengaluruOnboardingTraining2, billBengaluruF3_2) into ExpenseContainsBills
!insert (expenseBengaluruOnboardingTraining2, billBengaluruF4_2) into ExpenseContainsBills
!insert (expenseBengaluruOnboardingTraining2, billBengaluruF5_2) into ExpenseContainsBills

!insert (billBengaluruF1_2, currencyINRNew2) into BillCurrency
!insert (billBengaluruF2_2, currencyINRNew2) into BillCurrency
!insert (billBengaluruF3_2, currencyINRNew2) into BillCurrency
!insert (billBengaluruF4_2, currencyINRNew2) into BillCurrency
!insert (billBengaluruF5_2, currencyINRNew2) into BillCurrency

!new Comment('commentBengaluruFC1_2')
!commentBengaluruFC1_2.text := 'Training fee paid by check per vendor policy; receipt stamped PAID by finance desk.'

!new Comment('commentBengaluruFC2_2')
!commentBengaluruFC2_2.text := 'Meals are pending because one receipt is in Kannada; translation note attached for reviewers.'

!new Comment('commentBengaluruFC3_2')
!commentBengaluruFC3_2.text := 'SIM refund processed same day due to wrong plan activation; kept both the activation slip and refund slip.'

!insert (expenseBengaluruOnboardingTraining2, commentBengaluruFC1_2) into ExpenseComment
!insert (expenseBengaluruOnboardingTraining2, commentBengaluruFC2_2) into ExpenseComment
!insert (expenseBengaluruOnboardingTraining2, commentBengaluruFC3_2) into ExpenseComment

!new Expense('expenseNewYorkSameDayClientSupport2')
!expenseNewYorkSameDayClientSupport2.amount := 188.67
!expenseNewYorkSameDayClientSupport2.startDate := Date('2026-01-22')
!expenseNewYorkSameDayClientSupport2.endDate := Date('2026-01-22')

!new Bill('billNewYorkG1_2')
!billNewYorkG1_2.amount := 42.18
!billNewYorkG1_2.category := 'Local transit (subway)'
!billNewYorkG1_2.date := Date('2026-01-22')
!billNewYorkG1_2.paymentMethod := #CASH
!billNewYorkG1_2.status := #VERIFIED

!new Bill('billNewYorkG2_2')
!billNewYorkG2_2.amount := 129.99
!billNewYorkG2_2.category := 'Laptop charger (emergency replacement)'
!billNewYorkG2_2.date := Date('2026-01-22')
!billNewYorkG2_2.paymentMethod := #CREDIT_CARD
!billNewYorkG2_2.status := #VALIDATED

!new Bill('billNewYorkG3_2')
!billNewYorkG3_2.amount := 16.50
!billNewYorkG3_2.category := 'Client coffee'
!billNewYorkG3_2.date := Date('2026-01-22')
!billNewYorkG3_2.paymentMethod := #CREDIT_CARD
!billNewYorkG3_2.status := #VERIFIED

!insert (expenseNewYorkSameDayClientSupport2, billNewYorkG1_2) into ExpenseContainsBills
!insert (expenseNewYorkSameDayClientSupport2, billNewYorkG2_2) into ExpenseContainsBills
!insert (expenseNewYorkSameDayClientSupport2, billNewYorkG3_2) into ExpenseContainsBills

!insert (billNewYorkG1_2, currencyUSDNew2) into BillCurrency
!insert (billNewYorkG2_2, currencyUSDNew2) into BillCurrency
!insert (billNewYorkG3_2, currencyUSDNew2) into BillCurrency

!new Expense('expenseCancelledSiteVisitNoSpend2')
!expenseCancelledSiteVisitNoSpend2.amount := 0.00
!expenseCancelledSiteVisitNoSpend2.startDate := Date('2025-12-02')
!expenseCancelledSiteVisitNoSpend2.endDate := Date('2025-12-04')

!new Comment('commentCancelledHC1_2')
!commentCancelledHC1_2.text := 'Trip cancelled due to weather disruption; created record for audit trail only.'

!new Comment('commentCancelledHC2_2')
!commentCancelledHC2_2.text := 'No charges incurred; bookings were cancelled within free-cancellation window.'

!insert (expenseCancelledSiteVisitNoSpend2, commentCancelledHC1_2) into ExpenseComment
!insert (expenseCancelledSiteVisitNoSpend2, commentCancelledHC2_2) into ExpenseComment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 187 | 0.00% |
| Multiplicities Errors | 0 | 41 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 5 | 0.00% |

## Category edge
```
!new Currency('currencyCURA')
!currencyCURA.name := 'US Dollar'
!currencyCURA.abbreviation := 'USD'

!new Currency('currencyCURB')
!currencyCURB.name := 'Universal Service Dollar'
!currencyCURB.abbreviation := 'USD'

!new Expense('expenseEXPEDGE002')
!expenseEXPEDGE002.amount := 0.00
!expenseEXPEDGE002.startDate := Date('2025-12-31')
!expenseEXPEDGE002.endDate := Date('2025-01-01')

!new Bill('billEXPEDGE002_101')
!billEXPEDGE002_101.amount := 0.00
!billEXPEDGE002_101.category := 'Complimentary lounge access (no charge)'
!billEXPEDGE002_101.date := Date('2025-06-15')
!billEXPEDGE002_101.paymentMethod := #CREDIT_CARD
!billEXPEDGE002_101.status := #VALIDATED

!new Bill('billEXPEDGE002_102')
!billEXPEDGE002_102.amount := 0.00
!billEXPEDGE002_102.category := 'Receipt placeholder / missing amount'
!billEXPEDGE002_102.date := Date('2025-06-15')
!billEXPEDGE002_102.paymentMethod := #CASH
!billEXPEDGE002_102.status := #DRAFT

!new Bill('billEXPEDGE002_103')
!billEXPEDGE002_103.amount := 0.00
!billEXPEDGE002_103.category := 'Transaction refused by vendor (no settlement)'
!billEXPEDGE002_103.date := Date('2025-06-16')
!billEXPEDGE002_103.paymentMethod := #CHECK
!billEXPEDGE002_103.status := #REFUSED

!new Bill('billEXPEDGE002_104')
!billEXPEDGE002_104.amount := 0.00
!billEXPEDGE002_104.category := 'Internal voucher issued (non-monetary)'
!billEXPEDGE002_104.date := Date('2025-06-16')
!billEXPEDGE002_104.paymentMethod := #CASH
!billEXPEDGE002_104.status := #PENDING

!new Bill('billEXPEDGE002_105')
!billEXPEDGE002_105.amount := 0.00
!billEXPEDGE002_105.category := 'Voucher reversal (net zero)'
!billEXPEDGE002_105.date := Date('2025-06-17')
!billEXPEDGE002_105.paymentMethod := #CREDIT_CARD
!billEXPEDGE002_105.status := #REFUNDED

!insert (expenseEXPEDGE002, billEXPEDGE002_101) into ExpenseContainsBills
!insert (expenseEXPEDGE002, billEXPEDGE002_102) into ExpenseContainsBills
!insert (expenseEXPEDGE002, billEXPEDGE002_103) into ExpenseContainsBills
!insert (expenseEXPEDGE002, billEXPEDGE002_104) into ExpenseContainsBills
!insert (expenseEXPEDGE002, billEXPEDGE002_105) into ExpenseContainsBills

!insert (billEXPEDGE002_101, currencyCURA) into BillCurrency
!insert (billEXPEDGE002_102, currencyCURA) into BillCurrency
!insert (billEXPEDGE002_103, currencyCURA) into BillCurrency
!insert (billEXPEDGE002_104, currencyCURB) into BillCurrency
!insert (billEXPEDGE002_105, currencyCURB) into BillCurrency

!new Comment('commentEXPEDGE002_COM101')
!commentEXPEDGE002_COM101.text := 'All bills are zero by design to stress-test sum invariants and workflow states.'

!new Comment('commentEXPEDGE002_COM102')
!commentEXPEDGE002_COM102.text := 'Note: two different currencies share abbreviation USD (intentional edge-case for reporting).'

!new Comment('commentEXPEDGE002_COM103')
!commentEXPEDGE002_COM103.text := '备注：该报销单日期范围反常，但模型未限制。Комментарий: суммы нулевые.'

!insert (expenseEXPEDGE002, commentEXPEDGE002_COM101) into ExpenseComment
!insert (expenseEXPEDGE002, commentEXPEDGE002_COM102) into ExpenseComment
!insert (expenseEXPEDGE002, commentEXPEDGE002_COM103) into ExpenseComment

!new Expense('expenseEXPEDGE003')
!expenseEXPEDGE003.amount := 0.00
!expenseEXPEDGE003.startDate := Date('1900-01-01')
!expenseEXPEDGE003.endDate := Date('1900-01-01')

!new Comment('commentEXPEDGE003_COM201')
!commentEXPEDGE003_COM201.text := 'Empty expense shell created by an integration before bills were imported; valid because amount=0 and there are no bills.'

!insert (expenseEXPEDGE003, commentEXPEDGE003_COM201) into ExpenseComment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 66 | 0.00% |
| Multiplicities Errors | 0 | 14 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 1 | 2 | 50.00% |

| Invalid dates | 
|---| 
```
End date: 2025-01-01 is before start date: 2025-12-31
```

## Category invalid
```
!new Currency('currencyMXN')
!currencyMXN.name := 'Mexican Peso'
!currencyMXN.abbreviation := 'MXN'

!new Expense('expenseAdvanceSettlementGuadalajara')
!expenseAdvanceSettlementGuadalajara.amount := -300.00
!expenseAdvanceSettlementGuadalajara.startDate := Date('2026-02-10')
!expenseAdvanceSettlementGuadalajara.endDate := Date('2026-02-12')

!new Bill('billGuadalajara001')
!billGuadalajara001.amount := 850.00
!billGuadalajara001.category := 'Hotel (2 nights)'
!billGuadalajara001.date := Date('2026-02-10')
!billGuadalajara001.paymentMethod := #CREDIT_CARD
!billGuadalajara001.status := #VALIDATED

!new Bill('billGuadalajara002')
!billGuadalajara002.amount := 420.00
!billGuadalajara002.category := 'Meals (per receipts)'
!billGuadalajara002.date := Date('2026-02-11')
!billGuadalajara002.paymentMethod := #CASH
!billGuadalajara002.status := #VERIFIED

!new Bill('billGuadalajara003')
!billGuadalajara003.amount := 130.00
!billGuadalajara003.category := 'Local transport (ride-share)'
!billGuadalajara003.date := Date('2026-02-12')
!billGuadalajara003.paymentMethod := #CHECK
!billGuadalajara003.status := #PENDING

!insert (expenseAdvanceSettlementGuadalajara, billGuadalajara001) into ExpenseContainsBills
!insert (expenseAdvanceSettlementGuadalajara, billGuadalajara002) into ExpenseContainsBills
!insert (expenseAdvanceSettlementGuadalajara, billGuadalajara003) into ExpenseContainsBills

!insert (billGuadalajara001, currencyMXN) into BillCurrency
!insert (billGuadalajara002, currencyMXN) into BillCurrency
!insert (billGuadalajara003, currencyMXN) into BillCurrency

!new Comment('commentGuadalajara001')
!commentGuadalajara001.text := 'Se entregó un anticipo de viaje de 1,700.00 MXN antes de la salida.'

!new Comment('commentGuadalajara002')
!commentGuadalajara002.text := 'Gastos comprobados: 850.00 + 420.00 + 130.00 = 1,400.00 MXN. Neto: 1,400.00 - 1,700.00 = -300.00 MXN (a devolver por el empleado).'

!new Comment('commentGuadalajara003')
!commentGuadalajara003.text := 'Contabilidad registró este reporte como liquidación de anticipo, no como reembolso.'

!insert (expenseAdvanceSettlementGuadalajara, commentGuadalajara001) into ExpenseComment
!insert (expenseAdvanceSettlementGuadalajara, commentGuadalajara002) into ExpenseComment
!insert (expenseAdvanceSettlementGuadalajara, commentGuadalajara003) into ExpenseComment
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 9 | 0.00% |
| Invariants Errors (Not included on General) | 2 | 2 | 100.00% |

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (1) `Expense::expenseSumOfBills': FAILED.
```
```
checking invariant (2) `Expense::positiveAmount': FAILED.
```

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

## Generation 2 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 422 | 0.00% |
| Multiplicities Errors | 0 | 83 | 0.00% |
| Invariants Errors | 0 | 8 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 9 | 0.00% |
| Invariants Errors (Not included on General) | 2 | 2 | 100.00% |

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (1) `Expense::expenseSumOfBills': FAILED.
```
```
checking invariant (2) `Expense::positiveAmount': FAILED.
```

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 1 | 10 | 10.00% |

| Invalid dates | 
|---| 
```
End date: 2025-01-01 is before start date: 2025-12-31
```

# Generation 3
## Category baseline
```
!new Currency('currencyMADTrip033')
!currencyMADTrip033.name := 'Moroccan Dirham'
!currencyMADTrip033.abbreviation := 'MAD'

!new Expense('expenseEXP2026033')
!expenseEXP2026033.amount := 1850.00
!expenseEXP2026033.startDate := Date('2026-03-18')
!expenseEXP2026033.endDate := Date('2026-03-22')

!new Bill('billEXP2026033_BILL201')
!billEXP2026033_BILL201.amount := 650.00
!billEXP2026033_BILL201.category := 'Lodging'
!billEXP2026033_BILL201.date := Date('2026-03-18')
!billEXP2026033_BILL201.paymentMethod := #CREDIT_CARD
!billEXP2026033_BILL201.status := #VERIFIED

!new Bill('billEXP2026033_BILL202')
!billEXP2026033_BILL202.amount := 120.00
!billEXP2026033_BILL202.category := 'Intercity transport'
!billEXP2026033_BILL202.date := Date('2026-03-19')
!billEXP2026033_BILL202.paymentMethod := #CASH
!billEXP2026033_BILL202.status := #VALIDATED

!new Bill('billEXP2026033_BILL203')
!billEXP2026033_BILL203.amount := 310.50
!billEXP2026033_BILL203.category := 'Meals'
!billEXP2026033_BILL203.date := Date('2026-03-20')
!billEXP2026033_BILL203.paymentMethod := #CREDIT_CARD
!billEXP2026033_BILL203.status := #PENDING

!new Bill('billEXP2026033_BILL204')
!billEXP2026033_BILL204.amount := 45.00
!billEXP2026033_BILL204.category := 'Local transport'
!billEXP2026033_BILL204.date := Date('2026-03-20')
!billEXP2026033_BILL204.paymentMethod := #CASH
!billEXP2026033_BILL204.status := #DRAFT

!new Bill('billEXP2026033_BILL205')
!billEXP2026033_BILL205.amount := 220.00
!billEXP2026033_BILL205.category := 'Client relations'
!billEXP2026033_BILL205.date := Date('2026-03-21')
!billEXP2026033_BILL205.paymentMethod := #CHECK
!billEXP2026033_BILL205.status := #VALIDATED

!new Bill('billEXP2026033_BILL206')
!billEXP2026033_BILL206.amount := 15.25
!billEXP2026033_BILL206.category := 'Telecom'
!billEXP2026033_BILL206.date := Date('2026-03-19')
!billEXP2026033_BILL206.paymentMethod := #CASH
!billEXP2026033_BILL206.status := #REFUSED

!new Bill('billEXP2026033_BILL207')
!billEXP2026033_BILL207.amount := 489.25
!billEXP2026033_BILL207.category := 'Fuel'
!billEXP2026033_BILL207.date := Date('2026-03-22')
!billEXP2026033_BILL207.paymentMethod := #CREDIT_CARD
!billEXP2026033_BILL207.status := #REFUNDED

!insert (expenseEXP2026033, billEXP2026033_BILL201) into ExpenseContainsBills
!insert (expenseEXP2026033, billEXP2026033_BILL202) into ExpenseContainsBills
!insert (expenseEXP2026033, billEXP2026033_BILL203) into ExpenseContainsBills
!insert (expenseEXP2026033, billEXP2026033_BILL204) into ExpenseContainsBills
!insert (expenseEXP2026033, billEXP2026033_BILL205) into ExpenseContainsBills
!insert (expenseEXP2026033, billEXP2026033_BILL206) into ExpenseContainsBills
!insert (expenseEXP2026033, billEXP2026033_BILL207) into ExpenseContainsBills

!insert (billEXP2026033_BILL201, currencyMADTrip033) into BillCurrency
!insert (billEXP2026033_BILL202, currencyMADTrip033) into BillCurrency
!insert (billEXP2026033_BILL203, currencyMADTrip033) into BillCurrency
!insert (billEXP2026033_BILL204, currencyMADTrip033) into BillCurrency
!insert (billEXP2026033_BILL205, currencyMADTrip033) into BillCurrency
!insert (billEXP2026033_BILL206, currencyMADTrip033) into BillCurrency
!insert (billEXP2026033_BILL207, currencyMADTrip033) into BillCurrency

!new Comment('commentEXP2026033_CMT201')
!commentEXP2026033_CMT201.text := 'Note: parking receipt is handwritten; kept as draft until finance confirms it is acceptable.'

!new Comment('commentEXP2026033_CMT202')
!commentEXP2026033_CMT202.text := 'ملاحظة: تعبئة الهاتف رُفضت لأن الإيصال بلا تاريخ واضح. (Top-up refused due to missing clear date on receipt.)'

!insert (expenseEXP2026033, commentEXP2026033_CMT201) into ExpenseComment
!insert (expenseEXP2026033, commentEXP2026033_CMT202) into ExpenseComment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 69 | 0.00% |
| Multiplicities Errors | 0 | 16 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

## Category boundary
```
!new Currency('currencyCHFBoundary')
!currencyCHFBoundary.name := 'Swiss Franc'
!currencyCHFBoundary.abbreviation := 'CHF'

!new Currency('currencyMADBoundary')
!currencyMADBoundary.name := 'Moroccan Dirham'
!currencyMADBoundary.abbreviation := 'MAD'

!new Expense('expenseEZeroNonEmpty')
!expenseEZeroNonEmpty.amount := 0.00
!expenseEZeroNonEmpty.startDate := Date('2025-12-31')
!expenseEZeroNonEmpty.endDate := Date('2026-01-01')

!new Expense('expenseEMicro')
!expenseEMicro.amount := 0.02
!expenseEMicro.startDate := Date('2026-01-15')
!expenseEMicro.endDate := Date('2026-01-15')

!new Bill('billEZeroNonEmpty_BZ1')
!billEZeroNonEmpty_BZ1.amount := 0.00
!billEZeroNonEmpty_BZ1.category := 'VAT receipt correction (no charge)'
!billEZeroNonEmpty_BZ1.date := Date('2025-12-31')
!billEZeroNonEmpty_BZ1.paymentMethod := #CHECK
!billEZeroNonEmpty_BZ1.status := #DRAFT

!new Bill('billEZeroNonEmpty_BZ2')
!billEZeroNonEmpty_BZ2.amount := 0.00
!billEZeroNonEmpty_BZ2.category := 'Parking session cancelled at gate'
!billEZeroNonEmpty_BZ2.date := Date('2026-01-01')
!billEZeroNonEmpty_BZ2.paymentMethod := #CASH
!billEZeroNonEmpty_BZ2.status := #REFUSED

!new Bill('billEZeroNonEmpty_BZ3')
!billEZeroNonEmpty_BZ3.amount := 0.00
!billEZeroNonEmpty_BZ3.category := 'Merchant test transaction void'
!billEZeroNonEmpty_BZ3.date := Date('2026-01-01')
!billEZeroNonEmpty_BZ3.paymentMethod := #CREDIT_CARD
!billEZeroNonEmpty_BZ3.status := #REFUNDED

!insert (expenseEZeroNonEmpty, billEZeroNonEmpty_BZ1) into ExpenseContainsBills
!insert (expenseEZeroNonEmpty, billEZeroNonEmpty_BZ2) into ExpenseContainsBills
!insert (expenseEZeroNonEmpty, billEZeroNonEmpty_BZ3) into ExpenseContainsBills

!insert (billEZeroNonEmpty_BZ1, currencyCHFBoundary) into BillCurrency
!insert (billEZeroNonEmpty_BZ2, currencyCHFBoundary) into BillCurrency
!insert (billEZeroNonEmpty_BZ3, currencyMADBoundary) into BillCurrency

!new Bill('billEMicro_BM1')
!billEMicro_BM1.amount := 0.01
!billEMicro_BM1.category := 'SMS receipt delivery fee'
!billEMicro_BM1.date := Date('2026-01-15')
!billEMicro_BM1.paymentMethod := #CASH
!billEMicro_BM1.status := #PENDING

!new Bill('billEMicro_BM2')
!billEMicro_BM2.amount := 0.01
!billEMicro_BM2.category := 'Rounding adjustment'
!billEMicro_BM2.date := Date('2026-01-15')
!billEMicro_BM2.paymentMethod := #CREDIT_CARD
!billEMicro_BM2.status := #VALIDATED

!insert (expenseEMicro, billEMicro_BM1) into ExpenseContainsBills
!insert (expenseEMicro, billEMicro_BM2) into ExpenseContainsBills

!insert (billEMicro_BM1, currencyMADBoundary) into BillCurrency
!insert (billEMicro_BM2, currencyCHFBoundary) into BillCurrency

!new Comment('commentEMicro_CM1')
!commentEMicro_CM1.text := 'هذه مبالغ رمزية لاختبار إدخال الفواتير قبل الإرسال.'

!new Comment('commentEMicro_CM2')
!commentEMicro_CM2.text := 'Note: Two tiny items split across currencies to verify multi-currency handling.'

!insert (expenseEMicro, commentEMicro_CM1) into ExpenseComment
!insert (expenseEMicro, commentEMicro_CM2) into ExpenseComment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 60 | 0.00% |
| Multiplicities Errors | 0 | 12 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 2 | 0.00% |

## Category complex
```
!new Currency('currencyCHFMedCongress')
!currencyCHFMedCongress.name := 'Swiss Franc'
!currencyCHFMedCongress.abbreviation := 'CHF'

!new Currency('currencyAUDResearchVisit')
!currencyAUDResearchVisit.name := 'Australian Dollar'
!currencyAUDResearchVisit.abbreviation := 'AUD'

!new Currency('currencyMXNOutreach')
!currencyMXNOutreach.name := 'Mexican Peso'
!currencyMXNOutreach.abbreviation := 'MXN'

!new Currency('currencyZARCapeTown')
!currencyZARCapeTown.name := 'South African Rand'
!currencyZARCapeTown.abbreviation := 'ZAR'

!new Expense('expenseZurichCardiologyCongress')
!expenseZurichCardiologyCongress.amount := 740.70
!expenseZurichCardiologyCongress.startDate := Date('2026-03-02')
!expenseZurichCardiologyCongress.endDate := Date('2026-03-05')

!new Bill('billZurichZH1')
!billZurichZH1.amount := 480.00
!billZurichZH1.category := 'Hotel (3 nights)'
!billZurichZH1.date := Date('2026-03-02')
!billZurichZH1.paymentMethod := #CREDIT_CARD
!billZurichZH1.status := #VALIDATED

!new Bill('billZurichZH2')
!billZurichZH2.amount := 34.00
!billZurichZH2.category := 'Tram pass'
!billZurichZH2.date := Date('2026-03-02')
!billZurichZH2.paymentMethod := #CASH
!billZurichZH2.status := #VERIFIED

!new Bill('billZurichZH3')
!billZurichZH3.amount := 76.50
!billZurichZH3.category := 'Poster printing'
!billZurichZH3.date := Date('2026-03-03')
!billZurichZH3.paymentMethod := #CREDIT_CARD
!billZurichZH3.status := #PENDING

!new Bill('billZurichZH4')
!billZurichZH4.amount := 58.20
!billZurichZH4.category := 'Lunch with scientific committee'
!billZurichZH4.date := Date('2026-03-04')
!billZurichZH4.paymentMethod := #CREDIT_CARD
!billZurichZH4.status := #VERIFIED

!new Bill('billZurichZH5')
!billZurichZH5.amount := 92.00
!billZurichZH5.category := 'Airport transfer'
!billZurichZH5.date := Date('2026-03-05')
!billZurichZH5.paymentMethod := #CASH
!billZurichZH5.status := #DRAFT

!insert (expenseZurichCardiologyCongress, billZurichZH1) into ExpenseContainsBills
!insert (expenseZurichCardiologyCongress, billZurichZH2) into ExpenseContainsBills
!insert (expenseZurichCardiologyCongress, billZurichZH3) into ExpenseContainsBills
!insert (expenseZurichCardiologyCongress, billZurichZH4) into ExpenseContainsBills
!insert (expenseZurichCardiologyCongress, billZurichZH5) into ExpenseContainsBills

!insert (billZurichZH1, currencyCHFMedCongress) into BillCurrency
!insert (billZurichZH2, currencyCHFMedCongress) into BillCurrency
!insert (billZurichZH3, currencyCHFMedCongress) into BillCurrency
!insert (billZurichZH4, currencyCHFMedCongress) into BillCurrency
!insert (billZurichZH5, currencyCHFMedCongress) into BillCurrency

!new Expense('expenseSydneyUniversityCollaborationWeek')
!expenseSydneyUniversityCollaborationWeek.amount := 1056.00
!expenseSydneyUniversityCollaborationWeek.startDate := Date('2025-08-18')
!expenseSydneyUniversityCollaborationWeek.endDate := Date('2025-08-24')

!new Bill('billSydneySY1')
!billSydneySY1.amount := 315.40
!billSydneySY1.category := 'Domestic flight (MEL-SYD)'
!billSydneySY1.date := Date('2025-08-18')
!billSydneySY1.paymentMethod := #CREDIT_CARD
!billSydneySY1.status := #VERIFIED

!new Bill('billSydneySY2')
!billSydneySY2.amount := 128.60
!billSydneySY2.category := 'Lab consumables (pipette tips, tubes)'
!billSydneySY2.date := Date('2025-08-20')
!billSydneySY2.paymentMethod := #CREDIT_CARD
!billSydneySY2.status := #PENDING

!new Bill('billSydneySY3')
!billSydneySY3.amount := 612.00
!billSydneySY3.category := 'Serviced apartment'
!billSydneySY3.date := Date('2025-08-18')
!billSydneySY3.paymentMethod := #CHECK
!billSydneySY3.status := #VALIDATED

!insert (expenseSydneyUniversityCollaborationWeek, billSydneySY1) into ExpenseContainsBills
!insert (expenseSydneyUniversityCollaborationWeek, billSydneySY2) into ExpenseContainsBills
!insert (expenseSydneyUniversityCollaborationWeek, billSydneySY3) into ExpenseContainsBills

!insert (billSydneySY1, currencyAUDResearchVisit) into BillCurrency
!insert (billSydneySY2, currencyAUDResearchVisit) into BillCurrency
!insert (billSydneySY3, currencyAUDResearchVisit) into BillCurrency

!new Comment('commentSydneySYC1')
!commentSydneySYC1.text := 'Apartment paid by check because the supplier required local bank deposit; receipt attached as scanned PDF.'

!new Comment('commentSydneySYC2')
!commentSydneySYC2.text := 'Lab consumables pending: project code confirmation requested by grants office.'

!new Comment('commentSydneySYC3')
!commentSydneySYC3.text := 'Flight receipt includes a name abbreviation that matches passport; travel desk verified identity.'

!insert (expenseSydneyUniversityCollaborationWeek, commentSydneySYC1) into ExpenseComment
!insert (expenseSydneyUniversityCollaborationWeek, commentSydneySYC2) into ExpenseComment
!insert (expenseSydneyUniversityCollaborationWeek, commentSydneySYC3) into ExpenseComment

!new Expense('expenseCDMXCommunityHealthOutreach')
!expenseCDMXCommunityHealthOutreach.amount := 4891.25
!expenseCDMXCommunityHealthOutreach.startDate := Date('2024-11-09')
!expenseCDMXCommunityHealthOutreach.endDate := Date('2024-11-10')

!new Bill('billCDMXMX1')
!billCDMXMX1.amount := 2500.00
!billCDMXMX1.category := 'Venue deposit'
!billCDMXMX1.date := Date('2024-11-09')
!billCDMXMX1.paymentMethod := #CASH
!billCDMXMX1.status := #VALIDATED

!new Bill('billCDMXMX2')
!billCDMXMX2.amount := 1320.50
!billCDMXMX2.category := 'Catering (agua, snacks)'
!billCDMXMX2.date := Date('2024-11-10')
!billCDMXMX2.paymentMethod := #CREDIT_CARD
!billCDMXMX2.status := #PENDING

!new Bill('billCDMXMX3')
!billCDMXMX3.amount := 860.00
!billCDMXMX3.category := 'Flyers and signage printing'
!billCDMXMX3.date := Date('2024-11-09')
!billCDMXMX3.paymentMethod := #CASH
!billCDMXMX3.status := #VERIFIED

!new Bill('billCDMXMX4')
!billCDMXMX4.amount := 210.75
!billCDMXMX4.category := 'Ride-hailing to venue'
!billCDMXMX4.date := Date('2024-11-10')
!billCDMXMX4.paymentMethod := #CREDIT_CARD
!billCDMXMX4.status := #REFUSED

!insert (expenseCDMXCommunityHealthOutreach, billCDMXMX1) into ExpenseContainsBills
!insert (expenseCDMXCommunityHealthOutreach, billCDMXMX2) into ExpenseContainsBills
!insert (expenseCDMXCommunityHealthOutreach, billCDMXMX3) into ExpenseContainsBills
!insert (expenseCDMXCommunityHealthOutreach, billCDMXMX4) into ExpenseContainsBills

!insert (billCDMXMX1, currencyMXNOutreach) into BillCurrency
!insert (billCDMXMX2, currencyMXNOutreach) into BillCurrency
!insert (billCDMXMX3, currencyMXNOutreach) into BillCurrency
!insert (billCDMXMX4, currencyMXNOutreach) into BillCurrency

!new Comment('commentCDMXMXC1')
!commentCDMXMXC1.text := 'Ride-hailing refused: receipt lacked route and tax details; requested a compliant factura invoice from the provider.'

!insert (expenseCDMXCommunityHealthOutreach, commentCDMXMXC1) into ExpenseComment

!new Expense('expenseCapeTownComplianceOnboardingAdmin')
!expenseCapeTownComplianceOnboardingAdmin.amount := 1170.00
!expenseCapeTownComplianceOnboardingAdmin.startDate := Date('2026-01-06')
!expenseCapeTownComplianceOnboardingAdmin.endDate := Date('2026-01-07')

!new Bill('billCapeTownCT1')
!billCapeTownCT1.amount := 950.00
!billCapeTownCT1.category := 'Certified document translation'
!billCapeTownCT1.date := Date('2026-01-06')
!billCapeTownCT1.paymentMethod := #CHECK
!billCapeTownCT1.status := #VERIFIED

!new Bill('billCapeTownCT2')
!billCapeTownCT2.amount := 220.00
!billCapeTownCT2.category := 'Mobile data top-up (field access)'
!billCapeTownCT2.date := Date('2026-01-07')
!billCapeTownCT2.paymentMethod := #CASH
!billCapeTownCT2.status := #REFUNDED

!insert (expenseCapeTownComplianceOnboardingAdmin, billCapeTownCT1) into ExpenseContainsBills
!insert (expenseCapeTownComplianceOnboardingAdmin, billCapeTownCT2) into ExpenseContainsBills

!insert (billCapeTownCT1, currencyZARCapeTown) into BillCurrency
!insert (billCapeTownCT2, currencyZARCapeTown) into BillCurrency

!new Comment('commentCapeTownCTC1')
!commentCapeTownCTC1.text := 'Translation required for HR file submission; vendor provided stamped certificate page.'

!new Comment('commentCapeTownCTC2')
!commentCapeTownCTC2.text := 'Data top-up refunded after wrong bundle purchased; refund confirmation included on the operator slip.'

!insert (expenseCapeTownComplianceOnboardingAdmin, commentCapeTownCTC1) into ExpenseComment
!insert (expenseCapeTownComplianceOnboardingAdmin, commentCapeTownCTC2) into ExpenseComment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 158 | 0.00% |
| Multiplicities Errors | 0 | 34 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 4 | 0.00% |

## Category edge
```
!new Currency('currencyCURX_BTC2')
!currencyCURX_BTC2.name := 'Bitcoin'
!currencyCURX_BTC2.abbreviation := 'BTC'

!new Currency('currencyCURY_ISK2')
!currencyCURY_ISK2.name := 'Icelandic Króna'
!currencyCURY_ISK2.abbreviation := 'ISK'

!new Currency('currencyCURZ_MAD2')
!currencyCURZ_MAD2.name := 'Moroccan Dirham'
!currencyCURZ_MAD2.abbreviation := 'MAD'

!new Expense('expenseEXPEDGE004_2')
!expenseEXPEDGE004_2.amount := 0.00000001
!expenseEXPEDGE004_2.startDate := Date('9999-12-31')
!expenseEXPEDGE004_2.endDate := Date('9999-12-31')

!new Bill('billEXPEDGE004_2_BILL401')
!billEXPEDGE004_2_BILL401.amount := 0.00000001
!billEXPEDGE004_2_BILL401.category := 'On-chain fee (1 satoshi equivalent)'
!billEXPEDGE004_2_BILL401.date := Date('9999-12-31')
!billEXPEDGE004_2_BILL401.paymentMethod := #CREDIT_CARD
!billEXPEDGE004_2_BILL401.status := #VERIFIED

!insert (expenseEXPEDGE004_2, billEXPEDGE004_2_BILL401) into ExpenseContainsBills
!insert (billEXPEDGE004_2_BILL401, currencyCURX_BTC2) into BillCurrency

!new Expense('expenseEXPEDGE005_2')
!expenseEXPEDGE005_2.amount := 40201.00
!expenseEXPEDGE005_2.startDate := Date('2026-01-01')
!expenseEXPEDGE005_2.endDate := Date('2026-01-31')

!new Bill('billEXPEDGE005_2_BILL501')
!billEXPEDGE005_2_BILL501.amount := 199.99
!billEXPEDGE005_2_BILL501.category := 'Riad lodging (مبيت رياض)'
!billEXPEDGE005_2_BILL501.date := Date('2025-12-15')
!billEXPEDGE005_2_BILL501.paymentMethod := #CASH
!billEXPEDGE005_2_BILL501.status := #PENDING

!new Bill('billEXPEDGE005_2_BILL502')
!billEXPEDGE005_2_BILL502.amount := 0.01
!billEXPEDGE005_2_BILL502.category := 'Local tax rounding remainder'
!billEXPEDGE005_2_BILL502.date := Date('2026-02-01')
!billEXPEDGE005_2_BILL502.paymentMethod := #CASH
!billEXPEDGE005_2_BILL502.status := #VALIDATED

!new Bill('billEXPEDGE005_2_BILL503')
!billEXPEDGE005_2_BILL503.amount := 35000.00
!billEXPEDGE005_2_BILL503.category := 'Geothermal spa entry (Bláa lónið)'
!billEXPEDGE005_2_BILL503.date := Date('2026-01-10')
!billEXPEDGE005_2_BILL503.paymentMethod := #CREDIT_CARD
!billEXPEDGE005_2_BILL503.status := #VALIDATED

!new Bill('billEXPEDGE005_2_BILL504')
!billEXPEDGE005_2_BILL504.amount := 1.00
!billEXPEDGE005_2_BILL504.category := 'Parking meter test charge'
!billEXPEDGE005_2_BILL504.date := Date('2026-01-11')
!billEXPEDGE005_2_BILL504.paymentMethod := #CHECK
!billEXPEDGE005_2_BILL504.status := #DRAFT

!new Bill('billEXPEDGE005_2_BILL505')
!billEXPEDGE005_2_BILL505.amount := 0.00
!billEXPEDGE005_2_BILL505.category := 'Duplicate scan rejected'
!billEXPEDGE005_2_BILL505.date := Date('2026-01-12')
!billEXPEDGE005_2_BILL505.paymentMethod := #CREDIT_CARD
!billEXPEDGE005_2_BILL505.status := #REFUSED

!new Bill('billEXPEDGE005_2_BILL506')
!billEXPEDGE005_2_BILL506.amount := 5000.00
!billEXPEDGE005_2_BILL506.category := 'Archival service fee — extremely delayed invoicing / seirbhís chartlainne / خدمة الأرشفة'
!billEXPEDGE005_2_BILL506.date := Date('1800-01-01')
!billEXPEDGE005_2_BILL506.paymentMethod := #CASH
!billEXPEDGE005_2_BILL506.status := #VERIFIED

!insert (expenseEXPEDGE005_2, billEXPEDGE005_2_BILL501) into ExpenseContainsBills
!insert (expenseEXPEDGE005_2, billEXPEDGE005_2_BILL502) into ExpenseContainsBills
!insert (expenseEXPEDGE005_2, billEXPEDGE005_2_BILL503) into ExpenseContainsBills
!insert (expenseEXPEDGE005_2, billEXPEDGE005_2_BILL504) into ExpenseContainsBills
!insert (expenseEXPEDGE005_2, billEXPEDGE005_2_BILL505) into ExpenseContainsBills
!insert (expenseEXPEDGE005_2, billEXPEDGE005_2_BILL506) into ExpenseContainsBills

!insert (billEXPEDGE005_2_BILL501, currencyCURZ_MAD2) into BillCurrency
!insert (billEXPEDGE005_2_BILL502, currencyCURZ_MAD2) into BillCurrency
!insert (billEXPEDGE005_2_BILL503, currencyCURY_ISK2) into BillCurrency
!insert (billEXPEDGE005_2_BILL504, currencyCURY_ISK2) into BillCurrency
!insert (billEXPEDGE005_2_BILL505, currencyCURY_ISK2) into BillCurrency
!insert (billEXPEDGE005_2_BILL506, currencyCURY_ISK2) into BillCurrency

!new Comment('commentEXPEDGE005_2_COM501')
!commentEXPEDGE005_2_COM501.text := 'Bills intentionally include dates before and after the expense period to test validation gaps.'

!new Comment('commentEXPEDGE005_2_COM502')
!commentEXPEDGE005_2_COM502.text := ''

!new Comment('commentEXPEDGE005_2_COM503')
!commentEXPEDGE005_2_COM503.text := 'Cross-currency total is nonsensical financially but valid per model (sum of Real amounts only).'

!new Comment('commentEXPEDGE005_2_COM504')
!commentEXPEDGE005_2_COM504.text := 'Ath.: ISK bills include decimals even though the real currency often does not; allowed by Real.'

!new Comment('commentEXPEDGE005_2_COM505')
!commentEXPEDGE005_2_COM505.text := 'Nota en español: revisar el recibo del año 1800; es un caso extremo deliberado.'

!insert (expenseEXPEDGE005_2, commentEXPEDGE005_2_COM501) into ExpenseComment
!insert (expenseEXPEDGE005_2, commentEXPEDGE005_2_COM502) into ExpenseComment
!insert (expenseEXPEDGE005_2, commentEXPEDGE005_2_COM503) into ExpenseComment
!insert (expenseEXPEDGE005_2, commentEXPEDGE005_2_COM504) into ExpenseComment
!insert (expenseEXPEDGE005_2, commentEXPEDGE005_2_COM505) into ExpenseComment

!new Expense('expenseEXPEDGE006_2')
!expenseEXPEDGE006_2.amount := 1.00
!expenseEXPEDGE006_2.startDate := Date('1582-10-15')
!expenseEXPEDGE006_2.endDate := Date('1582-10-04')

!new Bill('billEXPEDGE006_2_BILL601')
!billEXPEDGE006_2_BILL601.amount := 0.50
!billEXPEDGE006_2_BILL601.category := 'Historical per diem half-unit'
!billEXPEDGE006_2_BILL601.date := Date('1582-10-04')
!billEXPEDGE006_2_BILL601.paymentMethod := #CHECK
!billEXPEDGE006_2_BILL601.status := #PENDING

!new Bill('billEXPEDGE006_2_BILL602')
!billEXPEDGE006_2_BILL602.amount := 0.50
!billEXPEDGE006_2_BILL602.category := 'Archivo fee / رسوم الأرشيف'
!billEXPEDGE006_2_BILL602.date := Date('1582-10-15')
!billEXPEDGE006_2_BILL602.paymentMethod := #CASH
!billEXPEDGE006_2_BILL602.status := #DRAFT

!insert (expenseEXPEDGE006_2, billEXPEDGE006_2_BILL601) into ExpenseContainsBills
!insert (expenseEXPEDGE006_2, billEXPEDGE006_2_BILL602) into ExpenseContainsBills

!insert (billEXPEDGE006_2_BILL601, currencyCURX_BTC2) into BillCurrency
!insert (billEXPEDGE006_2_BILL602, currencyCURY_ISK2) into BillCurrency
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 108 | 0.00% |
| Multiplicities Errors | 0 | 23 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 1 | 3 | 33.33% |

| Invalid dates | 
|---| 
```
End date: 1582-10-04 is before start date: 1582-10-15
```

## Category invalid
```
!new Currency('currencyMADSplitProjects2')
!currencyMADSplitProjects2.name := 'Moroccan Dirham'
!currencyMADSplitProjects2.abbreviation := 'MAD'

!new Expense('expenseProjectAtlasCasablancaSplit2')
!expenseProjectAtlasCasablancaSplit2.amount := 1200.00
!expenseProjectAtlasCasablancaSplit2.startDate := Date('2026-02-03')
!expenseProjectAtlasCasablancaSplit2.endDate := Date('2026-02-05')

!new Expense('expenseProjectBeaconCasablancaSplit2')
!expenseProjectBeaconCasablancaSplit2.amount := 1650.00
!expenseProjectBeaconCasablancaSplit2.startDate := Date('2026-02-03')
!expenseProjectBeaconCasablancaSplit2.endDate := Date('2026-02-05')

!new Bill('billProjectAtlasH1_2')
!billProjectAtlasH1_2.amount := 1200.00
!billProjectAtlasH1_2.category := 'Hotel invoice (shared stay)'
!billProjectAtlasH1_2.date := Date('2026-02-05')
!billProjectAtlasH1_2.paymentMethod := #CREDIT_CARD
!billProjectAtlasH1_2.status := #PENDING

!new Bill('billProjectBeaconH1_2')
!billProjectBeaconH1_2.amount := 1200.00
!billProjectBeaconH1_2.category := 'Hotel invoice (shared stay)'
!billProjectBeaconH1_2.date := Date('2026-02-05')
!billProjectBeaconH1_2.paymentMethod := #CREDIT_CARD
!billProjectBeaconH1_2.status := #PENDING

!new Bill('billProjectBeaconC1_2')
!billProjectBeaconC1_2.amount := 350.00
!billProjectBeaconC1_2.category := 'Catering (working lunch)'
!billProjectBeaconC1_2.date := Date('2026-02-04')
!billProjectBeaconC1_2.paymentMethod := #CASH
!billProjectBeaconC1_2.status := #VERIFIED

!new Bill('billProjectBeaconP1_2')
!billProjectBeaconP1_2.amount := 100.00
!billProjectBeaconP1_2.category := 'Printing & badges'
!billProjectBeaconP1_2.date := Date('2026-02-03')
!billProjectBeaconP1_2.paymentMethod := #CHECK
!billProjectBeaconP1_2.status := #DRAFT

!insert (expenseProjectAtlasCasablancaSplit2, billProjectAtlasH1_2) into ExpenseContainsBills
!insert (expenseProjectBeaconCasablancaSplit2, billProjectBeaconH1_2) into ExpenseContainsBills
!insert (expenseProjectBeaconCasablancaSplit2, billProjectBeaconC1_2) into ExpenseContainsBills
!insert (expenseProjectBeaconCasablancaSplit2, billProjectBeaconP1_2) into ExpenseContainsBills

!insert (billProjectAtlasH1_2, currencyMADSplitProjects2) into BillCurrency
!insert (billProjectBeaconH1_2, currencyMADSplitProjects2) into BillCurrency
!insert (billProjectBeaconC1_2, currencyMADSplitProjects2) into BillCurrency
!insert (billProjectBeaconP1_2, currencyMADSplitProjects2) into BillCurrency

!new Comment('commentProjectSplitSharedAtlas2')
!commentProjectSplitSharedAtlas2.text := 'Single hotel invoice to be split across two project codes (Atlas/Beacon) per finance instruction.'

!new Comment('commentProjectSplitA1_2')
!commentProjectSplitA1_2.text := 'Atlas share booked as 1200 MAD based on internal allocation sheet.'

!new Comment('commentProjectSplitSharedBeacon2')
!commentProjectSplitSharedBeacon2.text := 'Single hotel invoice to be split across two project codes (Atlas/Beacon) per finance instruction.'

!new Comment('commentProjectSplitB1_2')
!commentProjectSplitB1_2.text := 'Beacon paid catering locally; receipt handwritten in French/Arabic, scanned for audit.'

!insert (expenseProjectAtlasCasablancaSplit2, commentProjectSplitSharedAtlas2) into ExpenseComment
!insert (expenseProjectAtlasCasablancaSplit2, commentProjectSplitA1_2) into ExpenseComment
!insert (expenseProjectBeaconCasablancaSplit2, commentProjectSplitSharedBeacon2) into ExpenseComment
!insert (expenseProjectBeaconCasablancaSplit2, commentProjectSplitB1_2) into ExpenseComment
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 12 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 2 | 0.00% |

## Generation 3 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 450 | 0.00% |
| Multiplicities Errors | 0 | 85 | 0.00% |
| Invariants Errors | 0 | 8 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 12 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 1 | 12 | 8.33% |

| Invalid dates | 
|---| 
```
End date: 1582-10-04 is before start date: 1582-10-15
```

# Generation 4
## Category baseline
```
!new Currency('currencyCAD')
!currencyCAD.name := 'Canadian Dollar'
!currencyCAD.abbreviation := 'CAD'

!new Expense('expenseEXP2026058')
!expenseEXP2026058.amount := 464.49
!expenseEXP2026058.startDate := Date('2026-01-01')
!expenseEXP2026058.endDate := Date('2026-01-31')

!new Bill('billEXP2026058_BILL301')
!billEXP2026058_BILL301.amount := 389.99
!billEXP2026058_BILL301.category := 'Home office equipment'
!billEXP2026058_BILL301.date := Date('2026-01-12')
!billEXP2026058_BILL301.paymentMethod := #CREDIT_CARD
!billEXP2026058_BILL301.status := #VERIFIED

!new Bill('billEXP2026058_BILL302')
!billEXP2026058_BILL302.amount := 74.50
!billEXP2026058_BILL302.category := 'Home office equipment'
!billEXP2026058_BILL302.date := Date('2026-01-20')
!billEXP2026058_BILL302.paymentMethod := #CASH
!billEXP2026058_BILL302.status := #VALIDATED

!insert (expenseEXP2026058, billEXP2026058_BILL301) into ExpenseContainsBills
!insert (expenseEXP2026058, billEXP2026058_BILL302) into ExpenseContainsBills

!insert (billEXP2026058_BILL301, currencyCAD) into BillCurrency
!insert (billEXP2026058_BILL302, currencyCAD) into BillCurrency

!new Comment('commentEXP2026058_CMT301')
!commentEXP2026058_CMT301.text := 'Achat approuvé selon la politique télétravail (montant < 500 CAD). Receipts included for audit.'

!insert (expenseEXP2026058, commentEXP2026058_CMT301) into ExpenseComment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 26 | 0.00% |
| Multiplicities Errors | 0 | 5 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

## Category boundary
```
!new Currency('currencyISK')
!currencyISK.name := 'Icelandic Króna'
!currencyISK.abbreviation := 'ISK'

!new Expense('expenseEOneBillZero')
!expenseEOneBillZero.amount := 0.00
!expenseEOneBillZero.startDate := Date('1970-01-01')
!expenseEOneBillZero.endDate := Date('1970-01-01')

!new Bill('billEOneBillZeroOnly')
!billEOneBillZeroOnly.amount := 0.00
!billEOneBillZeroOnly.category := 'Reissued receipt (no charge)'
!billEOneBillZeroOnly.date := Date('1970-01-01')
!billEOneBillZeroOnly.paymentMethod := #CREDIT_CARD
!billEOneBillZeroOnly.status := #VALIDATED

!insert (expenseEOneBillZero, billEOneBillZeroOnly) into ExpenseContainsBills
!insert (billEOneBillZeroOnly, currencyISK) into BillCurrency

!new Comment('commentEOneBillZeroC1')
!commentEOneBillZeroC1.text := 'Created as a zero-amount test case for audit: one bill only.'

!new Comment('commentEOneBillZeroC2')
!commentEOneBillZeroC2.text := 'Frais à 0,00 : document réémis, aucun paiement effectué.'

!new Comment('commentEOneBillZeroC3')
!commentEOneBillZeroC3.text := 'End date equals start date to represent a single-day expense period.'

!new Comment('commentEOneBillZeroC4')
!commentEOneBillZeroC4.text := 'Currency chosen: ISK to validate handling of less common currencies.'

!new Comment('commentEOneBillZeroC5')
!commentEOneBillZeroC5.text := 'Bill is marked VALIDATED despite 0.00 because it represents a corrected document.'

!new Comment('commentEOneBillZeroC6')
!commentEOneBillZeroC6.text := 'Internal control note: no reimbursement should be generated.'

!new Comment('commentEOneBillZeroC7')
!commentEOneBillZeroC7.text := 'Gögnin eru aðeins til prófunar í kerfinu.'

!new Comment('commentEOneBillZeroC8')
!commentEOneBillZeroC8.text := 'Ensure downstream export keeps 0.00 without dropping the line item.'

!new Comment('commentEOneBillZeroC9')
!commentEOneBillZeroC9.text := 'Single bill satisfies non-empty composition edge case.'

!new Comment('commentEOneBillZeroC10')
!commentEOneBillZeroC10.text := 'If validation rules change, keep this as a regression fixture.'

!insert (expenseEOneBillZero, commentEOneBillZeroC1) into ExpenseComment
!insert (expenseEOneBillZero, commentEOneBillZeroC2) into ExpenseComment
!insert (expenseEOneBillZero, commentEOneBillZeroC3) into ExpenseComment
!insert (expenseEOneBillZero, commentEOneBillZeroC4) into ExpenseComment
!insert (expenseEOneBillZero, commentEOneBillZeroC5) into ExpenseComment
!insert (expenseEOneBillZero, commentEOneBillZeroC6) into ExpenseComment
!insert (expenseEOneBillZero, commentEOneBillZeroC7) into ExpenseComment
!insert (expenseEOneBillZero, commentEOneBillZeroC8) into ExpenseComment
!insert (expenseEOneBillZero, commentEOneBillZeroC9) into ExpenseComment
!insert (expenseEOneBillZero, commentEOneBillZeroC10) into ExpenseComment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 45 | 0.00% |
| Multiplicities Errors | 0 | 12 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

## Category complex
```
!new Currency('currencyCADComplex3')
!currencyCADComplex3.name := 'Canadian Dollar'
!currencyCADComplex3.abbreviation := 'CAD'

!new Currency('currencyNOKComplex3')
!currencyNOKComplex3.name := 'Norwegian Krone'
!currencyNOKComplex3.abbreviation := 'NOK'

!new Currency('currencySGDComplex3')
!currencySGDComplex3.name := 'Singapore Dollar'
!currencySGDComplex3.abbreviation := 'SGD'

!new Currency('currencyPLNComplex3')
!currencyPLNComplex3.name := 'Polish Złoty'
!currencyPLNComplex3.abbreviation := 'PLN'

!new Expense('expenseVancouverDocumentaryShoot')
!expenseVancouverDocumentaryShoot.amount := 1141.00
!expenseVancouverDocumentaryShoot.startDate := Date('2026-04-11')
!expenseVancouverDocumentaryShoot.endDate := Date('2026-04-16')

!new Bill('billVancouverVC1')
!billVancouverVC1.amount := 620.00
!billVancouverVC1.category := 'Camera battery kit rental'
!billVancouverVC1.date := Date('2026-04-11')
!billVancouverVC1.paymentMethod := #CREDIT_CARD
!billVancouverVC1.status := #VALIDATED

!new Bill('billVancouverVC2')
!billVancouverVC2.amount := 150.00
!billVancouverVC2.category := 'Municipal filming permit'
!billVancouverVC2.date := Date('2026-04-12')
!billVancouverVC2.paymentMethod := #CHECK
!billVancouverVC2.status := #VERIFIED

!new Bill('billVancouverVC3')
!billVancouverVC3.amount := 96.45
!billVancouverVC3.category := 'Fuel (van refill)'
!billVancouverVC3.date := Date('2026-04-13')
!billVancouverVC3.paymentMethod := #CASH
!billVancouverVC3.status := #VERIFIED

!new Bill('billVancouverVC4')
!billVancouverVC4.amount := 212.30
!billVancouverVC4.category := 'On-set catering (2 days)'
!billVancouverVC4.date := Date('2026-04-14')
!billVancouverVC4.paymentMethod := #CREDIT_CARD
!billVancouverVC4.status := #PENDING

!new Bill('billVancouverVC5')
!billVancouverVC5.amount := 28.00
!billVancouverVC5.category := 'Parking (refund processed)'
!billVancouverVC5.date := Date('2026-04-14')
!billVancouverVC5.paymentMethod := #CASH
!billVancouverVC5.status := #REFUNDED

!new Bill('billVancouverVC6')
!billVancouverVC6.amount := 34.25
!billVancouverVC6.category := 'Courier to post-production'
!billVancouverVC6.date := Date('2026-04-16')
!billVancouverVC6.paymentMethod := #CREDIT_CARD
!billVancouverVC6.status := #DRAFT

!insert (expenseVancouverDocumentaryShoot, billVancouverVC1) into ExpenseContainsBills
!insert (expenseVancouverDocumentaryShoot, billVancouverVC2) into ExpenseContainsBills
!insert (expenseVancouverDocumentaryShoot, billVancouverVC3) into ExpenseContainsBills
!insert (expenseVancouverDocumentaryShoot, billVancouverVC4) into ExpenseContainsBills
!insert (expenseVancouverDocumentaryShoot, billVancouverVC5) into ExpenseContainsBills
!insert (expenseVancouverDocumentaryShoot, billVancouverVC6) into ExpenseContainsBills

!insert (billVancouverVC1, currencyCADComplex3) into BillCurrency
!insert (billVancouverVC2, currencyCADComplex3) into BillCurrency
!insert (billVancouverVC3, currencyCADComplex3) into BillCurrency
!insert (billVancouverVC4, currencyCADComplex3) into BillCurrency
!insert (billVancouverVC5, currencyCADComplex3) into BillCurrency
!insert (billVancouverVC6, currencyCADComplex3) into BillCurrency

!new Comment('commentVancouverVCC1')
!commentVancouverVCC1.text := 'Permit paid by check because the city office did not accept corporate cards.'

!new Comment('commentVancouverVCC2')
!commentVancouverVCC2.text := 'Catering marked pending until the call sheet is attached to justify headcount.'

!insert (expenseVancouverDocumentaryShoot, commentVancouverVCC1) into ExpenseComment
!insert (expenseVancouverDocumentaryShoot, commentVancouverVCC2) into ExpenseComment

!new Expense('expenseOsloDataCenterInspection')
!expenseOsloDataCenterInspection.amount := 3500.00
!expenseOsloDataCenterInspection.startDate := Date('2025-03-05')
!expenseOsloDataCenterInspection.endDate := Date('2025-03-07')

!new Bill('billOsloOS1')
!billOsloOS1.amount := 2400.00
!billOsloOS1.category := 'Hotel near Fornebu'
!billOsloOS1.date := Date('2025-03-05')
!billOsloOS1.paymentMethod := #CREDIT_CARD
!billOsloOS1.status := #VERIFIED

!new Bill('billOsloOS2')
!billOsloOS2.amount := 420.00
!billOsloOS2.category := 'Airport express train'
!billOsloOS2.date := Date('2025-03-05')
!billOsloOS2.paymentMethod := #CASH
!billOsloOS2.status := #VALIDATED

!new Bill('billOsloOS3')
!billOsloOS3.amount := 680.00
!billOsloOS3.category := 'Client lunch (project stakeholders)'
!billOsloOS3.date := Date('2025-03-06')
!billOsloOS3.paymentMethod := #CREDIT_CARD
!billOsloOS3.status := #REFUSED

!insert (expenseOsloDataCenterInspection, billOsloOS1) into ExpenseContainsBills
!insert (expenseOsloDataCenterInspection, billOsloOS2) into ExpenseContainsBills
!insert (expenseOsloDataCenterInspection, billOsloOS3) into ExpenseContainsBills

!insert (billOsloOS1, currencyNOKComplex3) into BillCurrency
!insert (billOsloOS2, currencyNOKComplex3) into BillCurrency
!insert (billOsloOS3, currencyNOKComplex3) into BillCurrency

!new Comment('commentOsloOSC1')
!commentOsloOSC1.text := 'Lunch refused: attendee list was missing; resubmission will include meeting agenda and participants.'

!insert (expenseOsloDataCenterInspection, commentOsloOSC1) into ExpenseComment

!new Expense('expenseSingaporeDemoDayBoothSupport')
!expenseSingaporeDemoDayBoothSupport.amount := 242.40
!expenseSingaporeDemoDayBoothSupport.startDate := Date('2026-02-18')
!expenseSingaporeDemoDayBoothSupport.endDate := Date('2026-02-19')

!new Bill('billSingaporeDemoSG1')
!billSingaporeDemoSG1.amount := 180.00
!billSingaporeDemoSG1.category := 'Booth poster printing'
!billSingaporeDemoSG1.date := Date('2026-02-18')
!billSingaporeDemoSG1.paymentMethod := #CASH
!billSingaporeDemoSG1.status := #VERIFIED

!new Bill('billSingaporeDemoSG2')
!billSingaporeDemoSG2.amount := 39.90
!billSingaporeDemoSG2.category := 'Universal power adapter'
!billSingaporeDemoSG2.date := Date('2026-02-18')
!billSingaporeDemoSG2.paymentMethod := #CREDIT_CARD
!billSingaporeDemoSG2.status := #VERIFIED

!new Bill('billSingaporeDemoSG3')
!billSingaporeDemoSG3.amount := 22.50
!billSingaporeDemoSG3.category := 'Ride-hailing to venue'
!billSingaporeDemoSG3.date := Date('2026-02-19')
!billSingaporeDemoSG3.paymentMethod := #CREDIT_CARD
!billSingaporeDemoSG3.status := #PENDING

!insert (expenseSingaporeDemoDayBoothSupport, billSingaporeDemoSG1) into ExpenseContainsBills
!insert (expenseSingaporeDemoDayBoothSupport, billSingaporeDemoSG2) into ExpenseContainsBills
!insert (expenseSingaporeDemoDayBoothSupport, billSingaporeDemoSG3) into ExpenseContainsBills

!insert (billSingaporeDemoSG1, currencySGDComplex3) into BillCurrency
!insert (billSingaporeDemoSG2, currencySGDComplex3) into BillCurrency
!insert (billSingaporeDemoSG3, currencySGDComplex3) into BillCurrency

!new Expense('expenseKrakowTranslationKickoff')
!expenseKrakowTranslationKickoff.amount := 1735.70
!expenseKrakowTranslationKickoff.startDate := Date('2025-05-12')
!expenseKrakowTranslationKickoff.endDate := Date('2025-05-15')

!new Bill('billKrakowKR1')
!billKrakowKR1.amount := 300.00
!billKrakowKR1.category := 'Coworking meeting room'
!billKrakowKR1.date := Date('2025-05-12')
!billKrakowKR1.paymentMethod := #CREDIT_CARD
!billKrakowKR1.status := #VALIDATED

!new Bill('billKrakowKR2')
!billKrakowKR2.amount := 950.00
!billKrakowKR2.category := 'Interpreter deposit'
!billKrakowKR2.date := Date('2025-05-13')
!billKrakowKR2.paymentMethod := #CHECK
!billKrakowKR2.status := #VERIFIED

!new Bill('billKrakowKR3')
!billKrakowKR3.amount := 160.50
!billKrakowKR3.category := 'Train (Warszawa–Kraków)'
!billKrakowKR3.date := Date('2025-05-13')
!billKrakowKR3.paymentMethod := #CASH
!billKrakowKR3.status := #VERIFIED

!new Bill('billKrakowKR4')
!billKrakowKR4.amount := 280.00
!billKrakowKR4.category := 'Vendor dinner (refund after overcharge)'
!billKrakowKR4.date := Date('2025-05-14')
!billKrakowKR4.paymentMethod := #CREDIT_CARD
!billKrakowKR4.status := #REFUNDED

!new Bill('billKrakowKR5')
!billKrakowKR5.amount := 45.20
!billKrakowKR5.category := 'Stationery for workshop'
!billKrakowKR5.date := Date('2025-05-15')
!billKrakowKR5.paymentMethod := #CASH
!billKrakowKR5.status := #DRAFT

!insert (expenseKrakowTranslationKickoff, billKrakowKR1) into ExpenseContainsBills
!insert (expenseKrakowTranslationKickoff, billKrakowKR2) into ExpenseContainsBills
!insert (expenseKrakowTranslationKickoff, billKrakowKR3) into ExpenseContainsBills
!insert (expenseKrakowTranslationKickoff, billKrakowKR4) into ExpenseContainsBills
!insert (expenseKrakowTranslationKickoff, billKrakowKR5) into ExpenseContainsBills

!insert (billKrakowKR1, currencyPLNComplex3) into BillCurrency
!insert (billKrakowKR2, currencyPLNComplex3) into BillCurrency
!insert (billKrakowKR3, currencyPLNComplex3) into BillCurrency
!insert (billKrakowKR4, currencyPLNComplex3) into BillCurrency
!insert (billKrakowKR5, currencyPLNComplex3) into BillCurrency

!new Comment('commentKrakowKRC1')
!commentKrakowKRC1.text := 'Interpreter deposit paid by check per contract clause; final invoice expected after delivery.'

!new Comment('commentKrakowKRC2')
!commentKrakowKRC2.text := 'Dinner refunded due to incorrect tip calculation on the terminal; refund slip attached.'

!new Comment('commentKrakowKRC3')
!commentKrakowKRC3.text := 'Stationery is draft pending clearer categorization as training materials for the localization budget.'

!insert (expenseKrakowTranslationKickoff, commentKrakowKRC1) into ExpenseComment
!insert (expenseKrakowTranslationKickoff, commentKrakowKRC2) into ExpenseComment
!insert (expenseKrakowTranslationKickoff, commentKrakowKRC3) into ExpenseComment

!new Expense('expenseMonthEndPlaceholderAwaitingReceipts')
!expenseMonthEndPlaceholderAwaitingReceipts.amount := 0.00
!expenseMonthEndPlaceholderAwaitingReceipts.startDate := Date('2026-01-01')
!expenseMonthEndPlaceholderAwaitingReceipts.endDate := Date('2026-01-31')
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 186 | 0.00% |
| Multiplicities Errors | 0 | 40 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 5 | 0.00% |

## Category edge
```
!new Currency('currencyBTN')
!currencyBTN.name := 'Bhutanese Ngultrum'
!currencyBTN.abbreviation := 'BTN'

!new Currency('currencyXPF')
!currencyXPF.name := 'CFP Franc'
!currencyXPF.abbreviation := 'XPF'

!new Currency('currencyKES')
!currencyKES.name := 'Kenyan Shilling'
!currencyKES.abbreviation := 'KES'

!new Currency('currencyINREdgeHuge')
!currencyINREdgeHuge.name := 'Indian Rupee'
!currencyINREdgeHuge.abbreviation := 'INR'

!new Expense('expenseEXPEDGE007')
!expenseEXPEDGE007.amount := 0.00
!expenseEXPEDGE007.startDate := Date('2026-06-01')
!expenseEXPEDGE007.endDate := Date('2026-06-01')

!new Bill('billEXPEDGE007_BILL701')
!billEXPEDGE007_BILL701.amount := 500.00
!billEXPEDGE007_BILL701.category := 'Deposit posted'
!billEXPEDGE007_BILL701.date := Date('2026-06-01')
!billEXPEDGE007_BILL701.paymentMethod := #CREDIT_CARD
!billEXPEDGE007_BILL701.status := #PENDING

!new Bill('billEXPEDGE007_BILL702')
!billEXPEDGE007_BILL702.amount := -500.00
!billEXPEDGE007_BILL702.category := 'Deposit reversal'
!billEXPEDGE007_BILL702.date := Date('2026-06-01')
!billEXPEDGE007_BILL702.paymentMethod := #CREDIT_CARD
!billEXPEDGE007_BILL702.status := #REFUNDED

!new Bill('billEXPEDGE007_BILL703')
!billEXPEDGE007_BILL703.amount := 1.00
!billEXPEDGE007_BILL703.category := 'Manual correction +1'
!billEXPEDGE007_BILL703.date := Date('2026-06-01')
!billEXPEDGE007_BILL703.paymentMethod := #CASH
!billEXPEDGE007_BILL703.status := #VERIFIED

!new Bill('billEXPEDGE007_BILL704')
!billEXPEDGE007_BILL704.amount := -1.00
!billEXPEDGE007_BILL704.category := 'Manual correction -1'
!billEXPEDGE007_BILL704.date := Date('2026-06-01')
!billEXPEDGE007_BILL704.paymentMethod := #CASH
!billEXPEDGE007_BILL704.status := #VALIDATED

!new Bill('billEXPEDGE007_BILL705')
!billEXPEDGE007_BILL705.amount := 0.10
!billEXPEDGE007_BILL705.category := 'Test micro-charge (decimal in KES)'
!billEXPEDGE007_BILL705.date := Date('2026-06-01')
!billEXPEDGE007_BILL705.paymentMethod := #CHECK
!billEXPEDGE007_BILL705.status := #DRAFT

!new Bill('billEXPEDGE007_BILL706')
!billEXPEDGE007_BILL706.amount := -0.05
!billEXPEDGE007_BILL706.category := 'Split refund part A'
!billEXPEDGE007_BILL706.date := Date('2026-06-01')
!billEXPEDGE007_BILL706.paymentMethod := #CHECK
!billEXPEDGE007_BILL706.status := #REFUNDED

!new Bill('billEXPEDGE007_BILL707')
!billEXPEDGE007_BILL707.amount := -0.05
!billEXPEDGE007_BILL707.category := 'Split refund part B'
!billEXPEDGE007_BILL707.date := Date('2026-06-01')
!billEXPEDGE007_BILL707.paymentMethod := #CHECK
!billEXPEDGE007_BILL707.status := #REFUNDED

!new Bill('billEXPEDGE007_BILL708')
!billEXPEDGE007_BILL708.amount := 0.00
!billEXPEDGE007_BILL708.category := '   '
!billEXPEDGE007_BILL708.date := Date('2026-06-01')
!billEXPEDGE007_BILL708.paymentMethod := #CASH
!billEXPEDGE007_BILL708.status := #REFUSED

!insert (expenseEXPEDGE007, billEXPEDGE007_BILL701) into ExpenseContainsBills
!insert (expenseEXPEDGE007, billEXPEDGE007_BILL702) into ExpenseContainsBills
!insert (expenseEXPEDGE007, billEXPEDGE007_BILL703) into ExpenseContainsBills
!insert (expenseEXPEDGE007, billEXPEDGE007_BILL704) into ExpenseContainsBills
!insert (expenseEXPEDGE007, billEXPEDGE007_BILL705) into ExpenseContainsBills
!insert (expenseEXPEDGE007, billEXPEDGE007_BILL706) into ExpenseContainsBills
!insert (expenseEXPEDGE007, billEXPEDGE007_BILL707) into ExpenseContainsBills
!insert (expenseEXPEDGE007, billEXPEDGE007_BILL708) into ExpenseContainsBills

!insert (billEXPEDGE007_BILL701, currencyBTN) into BillCurrency
!insert (billEXPEDGE007_BILL702, currencyBTN) into BillCurrency
!insert (billEXPEDGE007_BILL703, currencyXPF) into BillCurrency
!insert (billEXPEDGE007_BILL704, currencyXPF) into BillCurrency
!insert (billEXPEDGE007_BILL705, currencyKES) into BillCurrency
!insert (billEXPEDGE007_BILL706, currencyKES) into BillCurrency
!insert (billEXPEDGE007_BILL707, currencyKES) into BillCurrency
!insert (billEXPEDGE007_BILL708, currencyKES) into BillCurrency

!new Comment('commentEXPEDGE007_COM701')
!commentEXPEDGE007_COM701.text := 'Zero-sum expense created to verify aggregation logic under mixed positive/negative bills.'

!new Comment('commentEXPEDGE007_COM702')
!commentEXPEDGE007_COM702.text := 'BTN deposit and reversal intentionally cancel out.'

!new Comment('commentEXPEDGE007_COM703')
!commentEXPEDGE007_COM703.text := 'XPF manual corrections included to test small-value adjustments.'

!new Comment('commentEXPEDGE007_COM704')
!commentEXPEDGE007_COM704.text := 'KES micro-charge split into two refund lines to test multiple negative entries.'

!new Comment('commentEXPEDGE007_COM705')
!commentEXPEDGE007_COM705.text := 'Arabic note: تمت التسوية إلى صفر.'

!new Comment('commentEXPEDGE007_COM706')
!commentEXPEDGE007_COM706.text := 'हिन्दी टिप्पणी: कुल राशि शून्य है।'

!new Comment('commentEXPEDGE007_COM707')
!commentEXPEDGE007_COM707.text := 'Note en français: cas limite — somme des factures = 0.'

!new Comment('commentEXPEDGE007_COM708')
!commentEXPEDGE007_COM708.text := '中文备注：该报销单用于测试边界情况（零合计）。'

!new Comment('commentEXPEDGE007_COM709')
!commentEXPEDGE007_COM709.text := 'Whitespace-only category on one bill is deliberate; category is a free String in the model.'

!new Comment('commentEXPEDGE007_COM710')
!commentEXPEDGE007_COM710.text := 'Audit trail: statuses span DRAFT/PENDING/VERIFIED/VALIDATED/REFUSED/REFUNDED in one expense.'

!insert (expenseEXPEDGE007, commentEXPEDGE007_COM701) into ExpenseComment
!insert (expenseEXPEDGE007, commentEXPEDGE007_COM702) into ExpenseComment
!insert (expenseEXPEDGE007, commentEXPEDGE007_COM703) into ExpenseComment
!insert (expenseEXPEDGE007, commentEXPEDGE007_COM704) into ExpenseComment
!insert (expenseEXPEDGE007, commentEXPEDGE007_COM705) into ExpenseComment
!insert (expenseEXPEDGE007, commentEXPEDGE007_COM706) into ExpenseComment
!insert (expenseEXPEDGE007, commentEXPEDGE007_COM707) into ExpenseComment
!insert (expenseEXPEDGE007, commentEXPEDGE007_COM708) into ExpenseComment
!insert (expenseEXPEDGE007, commentEXPEDGE007_COM709) into ExpenseComment
!insert (expenseEXPEDGE007, commentEXPEDGE007_COM710) into ExpenseComment

!new Expense('expenseEXPEDGE008')
!expenseEXPEDGE008.amount := 9999999999.99
!expenseEXPEDGE008.startDate := Date('2020-01-01')
!expenseEXPEDGE008.endDate := Date('2020-12-31')

!new Bill('billEXPEDGE008_BILL801')
!billEXPEDGE008_BILL801.amount := 9999999999.99
!billEXPEDGE008_BILL801.category := 'One-off settlement invoice #00000001 (bulk reimbursement)'
!billEXPEDGE008_BILL801.date := Date('2020-07-01')
!billEXPEDGE008_BILL801.paymentMethod := #CHECK
!billEXPEDGE008_BILL801.status := #VALIDATED

!insert (expenseEXPEDGE008, billEXPEDGE008_BILL801) into ExpenseContainsBills
!insert (billEXPEDGE008_BILL801, currencyINREdgeHuge) into BillCurrency
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 122 | 0.00% |
| Multiplicities Errors | 0 | 28 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 2 | 0.00% |

## Category invalid
```
!new Currency('currencyINRKerala')
!currencyINRKerala.name := 'Indian Rupee'
!currencyINRKerala.abbreviation := 'INR'

!new Currency('currencyGBPKerala')
!currencyGBPKerala.name := 'Pound Sterling'
!currencyGBPKerala.abbreviation := 'GBP'

!new Expense('expenseKeralaCommunityFieldwork')
!expenseKeralaCommunityFieldwork.amount := 2350.00
!expenseKeralaCommunityFieldwork.startDate := Date('2026-01-18')
!expenseKeralaCommunityFieldwork.endDate := Date('2026-01-22')

!new Bill('billKeralaIN1')
!billKeralaIN1.amount := 1750.00
!billKeralaIN1.category := 'Lodging (homestay contribution)'
!billKeralaIN1.date := Date('2026-01-19')
!billKeralaIN1.paymentMethod := #CASH
!billKeralaIN1.status := #VERIFIED

!new Bill('billKeralaIN2')
!billKeralaIN2.amount := 600.00
!billKeralaIN2.category := 'Local transport (auto-rickshaw pooled rides)'
!billKeralaIN2.date := Date('2026-01-21')
!billKeralaIN2.paymentMethod := #CASH
!billKeralaIN2.status := #PENDING

!insert (expenseKeralaCommunityFieldwork, billKeralaIN1) into ExpenseContainsBills
!insert (expenseKeralaCommunityFieldwork, billKeralaIN2) into ExpenseContainsBills

!insert (billKeralaIN1, currencyINRKerala) into BillCurrency
!insert (billKeralaIN2, currencyINRKerala) into BillCurrency

!new Comment('commentKeralaE1')
!commentKeralaE1.text := 'Receipts are a mix of Malayalam and English; translations provided on the scan.'

!insert (expenseKeralaCommunityFieldwork, commentKeralaE1) into ExpenseComment

!new Bill('billUnassignedUK1')
!billUnassignedUK1.amount := 28.40
!billUnassignedUK1.category := 'Rail ticket (London–Cambridge)'
!billUnassignedUK1.date := Date('2026-01-16')
!billUnassignedUK1.paymentMethod := #CREDIT_CARD
!billUnassignedUK1.status := #DRAFT

!insert (billUnassignedUK1, currencyGBPKerala) into BillCurrency

!new Comment('commentUnassignedFREE1')
!commentUnassignedFREE1.text := 'Waiting for supervisor to confirm whether this trip should be billed to Project A or Project B.'
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 2 | 6 | 33.33% |
| Invariants Errors (Not included on General) | 0 | 2 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `ExpenseComment':
  Object `commentUnassignedFREE1' of class `Comment' is connected to 0 objects of class `Expense'
  at association end `expense' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `ExpenseContainsBills':
  Object `billUnassignedUK1' of class `Bill' is connected to 0 objects of class `Expense'
  at association end `expense' but the multiplicity is specified as `1'.
```

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

## Generation 4 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 417 | 0.00% |
| Multiplicities Errors | 0 | 85 | 0.00% |
| Invariants Errors | 0 | 8 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 2 | 6 | 33.33% |
| Invariants Errors (Not included on General) | 0 | 2 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `ExpenseComment':
  Object `commentUnassignedFREE1' of class `Comment' is connected to 0 objects of class `Expense'
  at association end `expense' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `ExpenseContainsBills':
  Object `billUnassignedUK1' of class `Bill' is connected to 0 objects of class `Expense'
  at association end `expense' but the multiplicity is specified as `1'.
```

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 10 | 0.00% |

# Generation 5
## Category baseline
```
!new Currency('currencyPHP')
!currencyPHP.name := 'Philippine Peso'
!currencyPHP.abbreviation := 'PHP'

!new Currency('currencySGD')
!currencySGD.name := 'Singapore Dollar'
!currencySGD.abbreviation := 'SGD'

!new Expense('expenseEXP2026072')
!expenseEXP2026072.amount := 0.00
!expenseEXP2026072.startDate := Date('2026-04-01')
!expenseEXP2026072.endDate := Date('2026-04-30')

!new Comment('commentEXP2026072_CMT401')
!commentEXP2026072_CMT401.text := 'Created for record-keeping; no reimbursable purchases were made during this period.'

!insert (expenseEXP2026072, commentEXP2026072_CMT401) into ExpenseComment

!new Expense('expenseEXP2026073')
!expenseEXP2026073.amount := 5328.90
!expenseEXP2026073.startDate := Date('2026-04-05')
!expenseEXP2026073.endDate := Date('2026-04-12')

!new Bill('billEXP2026073_BILL401')
!billEXP2026073_BILL401.amount := 1200.00
!billEXP2026073_BILL401.category := 'Air travel'
!billEXP2026073_BILL401.date := Date('2026-04-05')
!billEXP2026073_BILL401.paymentMethod := #CREDIT_CARD
!billEXP2026073_BILL401.status := #VALIDATED

!new Bill('billEXP2026073_BILL402')
!billEXP2026073_BILL402.amount := 300.00
!billEXP2026073_BILL402.category := 'Telecom'
!billEXP2026073_BILL402.date := Date('2026-04-06')
!billEXP2026073_BILL402.paymentMethod := #CASH
!billEXP2026073_BILL402.status := #VERIFIED

!new Bill('billEXP2026073_BILL403')
!billEXP2026073_BILL403.amount := 560.50
!billEXP2026073_BILL403.category := 'Local transport'
!billEXP2026073_BILL403.date := Date('2026-04-07')
!billEXP2026073_BILL403.paymentMethod := #CASH
!billEXP2026073_BILL403.status := #PENDING

!new Bill('billEXP2026073_BILL404')
!billEXP2026073_BILL404.amount := 2450.00
!billEXP2026073_BILL404.category := 'Supplies'
!billEXP2026073_BILL404.date := Date('2026-04-08')
!billEXP2026073_BILL404.paymentMethod := #CHECK
!billEXP2026073_BILL404.status := #VERIFIED

!new Bill('billEXP2026073_BILL405')
!billEXP2026073_BILL405.amount := 18.40
!billEXP2026073_BILL405.category := 'Meals'
!billEXP2026073_BILL405.date := Date('2026-04-05')
!billEXP2026073_BILL405.paymentMethod := #CREDIT_CARD
!billEXP2026073_BILL405.status := #REFUNDED

!new Bill('billEXP2026073_BILL406')
!billEXP2026073_BILL406.amount := 800.00
!billEXP2026073_BILL406.category := 'Lodging'
!billEXP2026073_BILL406.date := Date('2026-04-10')
!billEXP2026073_BILL406.paymentMethod := #CREDIT_CARD
!billEXP2026073_BILL406.status := #REFUSED

!insert (expenseEXP2026073, billEXP2026073_BILL401) into ExpenseContainsBills
!insert (expenseEXP2026073, billEXP2026073_BILL402) into ExpenseContainsBills
!insert (expenseEXP2026073, billEXP2026073_BILL403) into ExpenseContainsBills
!insert (expenseEXP2026073, billEXP2026073_BILL404) into ExpenseContainsBills
!insert (expenseEXP2026073, billEXP2026073_BILL405) into ExpenseContainsBills
!insert (expenseEXP2026073, billEXP2026073_BILL406) into ExpenseContainsBills

!insert (billEXP2026073_BILL401, currencyPHP) into BillCurrency
!insert (billEXP2026073_BILL402, currencyPHP) into BillCurrency
!insert (billEXP2026073_BILL403, currencyPHP) into BillCurrency
!insert (billEXP2026073_BILL404, currencyPHP) into BillCurrency
!insert (billEXP2026073_BILL405, currencySGD) into BillCurrency
!insert (billEXP2026073_BILL406, currencyPHP) into BillCurrency

!new Comment('commentEXP2026073_CMT402')
!commentEXP2026073_CMT402.text := 'Refund applied for the Singapore layover charge; refund confirmation attached.'

!new Comment('commentEXP2026073_CMT403')
!commentEXP2026073_CMT403.text := 'Paki-verify po ang cancellation fee—na-refuse dahil wala sa approved accommodation list.'

!insert (expenseEXP2026073, commentEXP2026073_CMT402) into ExpenseComment
!insert (expenseEXP2026073, commentEXP2026073_CMT403) into ExpenseComment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 71 | 0.00% |
| Multiplicities Errors | 0 | 15 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 2 | 0.00% |

## Category boundary
```
!new Currency('currencyBHD')
!currencyBHD.name := 'Bahraini Dinar'
!currencyBHD.abbreviation := 'BHD'

!new Currency('currencyNZD')
!currencyNZD.name := 'New Zealand Dollar'
!currencyNZD.abbreviation := 'NZD'

!new Expense('expenseECommentOnly')
!expenseECommentOnly.amount := 0.00
!expenseECommentOnly.startDate := Date('9999-12-31')
!expenseECommentOnly.endDate := Date('9999-12-31')

!new Comment('commentECommentOnly_CCO1')
!commentECommentOnly_CCO1.text := 'No bills attached: this is a placeholder expense used to test comment workflows only.'

!new Comment('commentECommentOnly_CCO2')
!commentECommentOnly_CCO2.text := 'नोट: कुल राशि शून्य है क्योंकि कोई रसीद संलग्न नहीं है।'

!new Comment('commentECommentOnly_CCO3')
!commentECommentOnly_CCO3.text := 'ملاحظة: سيتم إضافة الفواتير لاحقًا إذا لزم الأمر.'

!new Comment('commentECommentOnly_CCO4')
!commentECommentOnly_CCO4.text := 'Дата установлена на 9999-12-31 для проверки предельных значений.'

!insert (expenseECommentOnly, commentECommentOnly_CCO1) into ExpenseComment
!insert (expenseECommentOnly, commentECommentOnly_CCO2) into ExpenseComment
!insert (expenseECommentOnly, commentECommentOnly_CCO3) into ExpenseComment
!insert (expenseECommentOnly, commentECommentOnly_CCO4) into ExpenseComment

!new Expense('expenseEPrecise')
!expenseEPrecise.amount := 13.01
!expenseEPrecise.startDate := Date('2026-02-28')
!expenseEPrecise.endDate := Date('2026-02-28')

!new Bill('billEPrecise_BP1')
!billEPrecise_BP1.amount := 12.345
!billEPrecise_BP1.category := 'Client dinner (Manama)'
!billEPrecise_BP1.date := Date('2026-02-28')
!billEPrecise_BP1.paymentMethod := #CREDIT_CARD
!billEPrecise_BP1.status := #VERIFIED

!new Bill('billEPrecise_BP2')
!billEPrecise_BP2.amount := 0.655
!billEPrecise_BP2.category := 'Service charge adjustment'
!billEPrecise_BP2.date := Date('2026-02-28')
!billEPrecise_BP2.paymentMethod := #CHECK
!billEPrecise_BP2.status := #VALIDATED

!new Bill('billEPrecise_BP3')
!billEPrecise_BP3.amount := 0.01
!billEPrecise_BP3.category := 'Koha (token contribution)'
!billEPrecise_BP3.date := Date('2026-02-28')
!billEPrecise_BP3.paymentMethod := #CASH
!billEPrecise_BP3.status := #PENDING

!insert (expenseEPrecise, billEPrecise_BP1) into ExpenseContainsBills
!insert (expenseEPrecise, billEPrecise_BP2) into ExpenseContainsBills
!insert (expenseEPrecise, billEPrecise_BP3) into ExpenseContainsBills

!insert (billEPrecise_BP1, currencyBHD) into BillCurrency
!insert (billEPrecise_BP2, currencyBHD) into BillCurrency
!insert (billEPrecise_BP3, currencyNZD) into BillCurrency
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 50 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 2 | 0.00% |

## Category complex
```
!new Currency('currencySEKComplex4')
!currencySEKComplex4.name := 'Swedish Krona'
!currencySEKComplex4.abbreviation := 'SEK'

!new Currency('currencyTHBComplex4')
!currencyTHBComplex4.name := 'Thai Baht'
!currencyTHBComplex4.abbreviation := 'THB'

!new Currency('currencyAEDComplex4')
!currencyAEDComplex4.name := 'United Arab Emirates Dirham'
!currencyAEDComplex4.abbreviation := 'AED'

!new Currency('currencyNZDComplex4')
!currencyNZDComplex4.name := 'New Zealand Dollar'
!currencyNZDComplex4.abbreviation := 'NZD'

!new Currency('currencyKRWComplex4')
!currencyKRWComplex4.name := 'South Korean Won'
!currencyKRWComplex4.abbreviation := 'KRW'

!new Expense('expenseStockholmDesignSprint')
!expenseStockholmDesignSprint.amount := 5790.50
!expenseStockholmDesignSprint.startDate := Date('2025-02-10')
!expenseStockholmDesignSprint.endDate := Date('2025-02-14')

!new Bill('billStockholmST1')
!billStockholmST1.amount := 3200.00
!billStockholmST1.category := 'Hotel (4 nights)'
!billStockholmST1.date := Date('2025-02-10')
!billStockholmST1.paymentMethod := #CREDIT_CARD
!billStockholmST1.status := #VALIDATED

!new Bill('billStockholmST2')
!billStockholmST2.amount := 280.00
!billStockholmST2.category := 'Transit pass (SL 7-day)'
!billStockholmST2.date := Date('2025-02-11')
!billStockholmST2.paymentMethod := #CASH
!billStockholmST2.status := #VERIFIED

!new Bill('billStockholmST3')
!billStockholmST3.amount := 1450.00
!billStockholmST3.category := 'Workshop room rental'
!billStockholmST3.date := Date('2025-02-12')
!billStockholmST3.paymentMethod := #CHECK
!billStockholmST3.status := #PENDING

!new Bill('billStockholmST4')
!billStockholmST4.amount := 860.50
!billStockholmST4.category := 'Team meals (fika + working lunch)'
!billStockholmST4.date := Date('2025-02-13')
!billStockholmST4.paymentMethod := #CREDIT_CARD
!billStockholmST4.status := #VERIFIED

!insert (expenseStockholmDesignSprint, billStockholmST1) into ExpenseContainsBills
!insert (expenseStockholmDesignSprint, billStockholmST2) into ExpenseContainsBills
!insert (expenseStockholmDesignSprint, billStockholmST3) into ExpenseContainsBills
!insert (expenseStockholmDesignSprint, billStockholmST4) into ExpenseContainsBills

!insert (billStockholmST1, currencySEKComplex4) into BillCurrency
!insert (billStockholmST2, currencySEKComplex4) into BillCurrency
!insert (billStockholmST3, currencySEKComplex4) into BillCurrency
!insert (billStockholmST4, currencySEKComplex4) into BillCurrency

!new Comment('commentStockholmSTC1')
!commentStockholmSTC1.text := 'Room rental is pending because the municipality requested the purchase order reference (PO-nummer) on the invoice.'

!insert (expenseStockholmDesignSprint, commentStockholmSTC1) into ExpenseComment

!new Expense('expenseBangkokRiverSampling')
!expenseBangkokRiverSampling.amount := 7920.00
!expenseBangkokRiverSampling.startDate := Date('2026-05-03')
!expenseBangkokRiverSampling.endDate := Date('2026-05-09')

!new Bill('billBangkokBK1')
!billBangkokBK1.amount := 4200.00
!billBangkokBK1.category := 'Longtail boat hire (half-day)'
!billBangkokBK1.date := Date('2026-05-04')
!billBangkokBK1.paymentMethod := #CASH
!billBangkokBK1.status := #VERIFIED

!new Bill('billBangkokBK2')
!billBangkokBK2.amount := 980.00
!billBangkokBK2.category := 'Sample containers (sterile bottles)'
!billBangkokBK2.date := Date('2026-05-04')
!billBangkokBK2.paymentMethod := #CREDIT_CARD
!billBangkokBK2.status := #VERIFIED

!new Bill('billBangkokBK3')
!billBangkokBK3.amount := 560.00
!billBangkokBK3.category := 'Ice packs + cooler supplies'
!billBangkokBK3.date := Date('2026-05-05')
!billBangkokBK3.paymentMethod := #CASH
!billBangkokBK3.status := #DRAFT

!new Bill('billBangkokBK4')
!billBangkokBK4.amount := 300.00
!billBangkokBK4.category := 'PPE (masks, nitrile gloves)'
!billBangkokBK4.date := Date('2026-05-05')
!billBangkokBK4.paymentMethod := #CASH
!billBangkokBK4.status := #VERIFIED

!new Bill('billBangkokBK5')
!billBangkokBK5.amount := 450.00
!billBangkokBK5.category := 'SIM top-up (field communications)'
!billBangkokBK5.date := Date('2026-05-06')
!billBangkokBK5.paymentMethod := #CASH
!billBangkokBK5.status := #REFUNDED

!new Bill('billBangkokBK6')
!billBangkokBK6.amount := 1250.00
!billBangkokBK6.category := 'Basic lab analysis fee (same-week processing)'
!billBangkokBK6.date := Date('2026-05-07')
!billBangkokBK6.paymentMethod := #CHECK
!billBangkokBK6.status := #PENDING

!new Bill('billBangkokBK7')
!billBangkokBK7.amount := 180.00
!billBangkokBK7.category := 'Printing (sampling maps)'
!billBangkokBK7.date := Date('2026-05-08')
!billBangkokBK7.paymentMethod := #CASH
!billBangkokBK7.status := #VERIFIED

!insert (expenseBangkokRiverSampling, billBangkokBK1) into ExpenseContainsBills
!insert (expenseBangkokRiverSampling, billBangkokBK2) into ExpenseContainsBills
!insert (expenseBangkokRiverSampling, billBangkokBK3) into ExpenseContainsBills
!insert (expenseBangkokRiverSampling, billBangkokBK4) into ExpenseContainsBills
!insert (expenseBangkokRiverSampling, billBangkokBK5) into ExpenseContainsBills
!insert (expenseBangkokRiverSampling, billBangkokBK6) into ExpenseContainsBills
!insert (expenseBangkokRiverSampling, billBangkokBK7) into ExpenseContainsBills

!insert (billBangkokBK1, currencyTHBComplex4) into BillCurrency
!insert (billBangkokBK2, currencyTHBComplex4) into BillCurrency
!insert (billBangkokBK3, currencyTHBComplex4) into BillCurrency
!insert (billBangkokBK4, currencyTHBComplex4) into BillCurrency
!insert (billBangkokBK5, currencyTHBComplex4) into BillCurrency
!insert (billBangkokBK6, currencyTHBComplex4) into BillCurrency
!insert (billBangkokBK7, currencyTHBComplex4) into BillCurrency

!new Comment('commentBangkokBKC1')
!commentBangkokBKC1.text := 'Ice packs bill is draft because the receipt is faded; vendor will reprint (ขอใบเสร็จใหม่).'

!new Comment('commentBangkokBKC2')
!commentBangkokBKC2.text := 'SIM top-up was refunded after wrong package was activated; refund slip attached.'

!new Comment('commentBangkokBKC3')
!commentBangkokBKC3.text := 'Lab analysis marked pending until chain-of-custody form is signed by the receiving technician.'

!insert (expenseBangkokRiverSampling, commentBangkokBKC1) into ExpenseComment
!insert (expenseBangkokRiverSampling, commentBangkokBKC2) into ExpenseComment
!insert (expenseBangkokRiverSampling, commentBangkokBKC3) into ExpenseComment

!new Expense('expenseDubaiFoodIndustryExpo')
!expenseDubaiFoodIndustryExpo.amount := 2500.00
!expenseDubaiFoodIndustryExpo.startDate := Date('2025-09-20')
!expenseDubaiFoodIndustryExpo.endDate := Date('2025-09-23')

!new Bill('billDubaiDX1')
!billDubaiDX1.amount := 1650.00
!billDubaiDX1.category := 'Expo access package (3-day badge)'
!billDubaiDX1.date := Date('2025-09-20')
!billDubaiDX1.paymentMethod := #CREDIT_CARD
!billDubaiDX1.status := #VALIDATED

!new Bill('billDubaiDX2')
!billDubaiDX2.amount := 740.00
!billDubaiDX2.category := 'Hotel (1 night extension)'
!billDubaiDX2.date := Date('2025-09-22')
!billDubaiDX2.paymentMethod := #CREDIT_CARD
!billDubaiDX2.status := #VERIFIED

!new Bill('billDubaiDX3')
!billDubaiDX3.amount := 110.00
!billDubaiDX3.category := 'Taxi between venue and hotel'
!billDubaiDX3.date := Date('2025-09-23')
!billDubaiDX3.paymentMethod := #CASH
!billDubaiDX3.status := #REFUSED

!insert (expenseDubaiFoodIndustryExpo, billDubaiDX1) into ExpenseContainsBills
!insert (expenseDubaiFoodIndustryExpo, billDubaiDX2) into ExpenseContainsBills
!insert (expenseDubaiFoodIndustryExpo, billDubaiDX3) into ExpenseContainsBills

!insert (billDubaiDX1, currencyAEDComplex4) into BillCurrency
!insert (billDubaiDX2, currencyAEDComplex4) into BillCurrency
!insert (billDubaiDX3, currencyAEDComplex4) into BillCurrency

!new Comment('commentDubaiDXC1')
!commentDubaiDXC1.text := 'Taxi bill refused because it was a non-itemized handwritten slip; reviewer requested official meter receipt.'

!insert (expenseDubaiFoodIndustryExpo, commentDubaiDXC1) into ExpenseComment

!new Expense('expenseWellingtonCoDesignWorkshop')
!expenseWellingtonCoDesignWorkshop.amount := 745.75
!expenseWellingtonCoDesignWorkshop.startDate := Date('2026-03-15')
!expenseWellingtonCoDesignWorkshop.endDate := Date('2026-03-16')

!new Bill('billWellingtonWL1')
!billWellingtonWL1.amount := 480.00
!billWellingtonWL1.category := 'Venue hire (community hall)'
!billWellingtonWL1.date := Date('2026-03-15')
!billWellingtonWL1.paymentMethod := #CHECK
!billWellingtonWL1.status := #VERIFIED

!new Bill('billWellingtonWL2')
!billWellingtonWL2.amount := 265.75
!billWellingtonWL2.category := 'Catering (tea, sandwiches)'
!billWellingtonWL2.date := Date('2026-03-16')
!billWellingtonWL2.paymentMethod := #CREDIT_CARD
!billWellingtonWL2.status := #VALIDATED

!insert (expenseWellingtonCoDesignWorkshop, billWellingtonWL1) into ExpenseContainsBills
!insert (expenseWellingtonCoDesignWorkshop, billWellingtonWL2) into ExpenseContainsBills

!insert (billWellingtonWL1, currencyNZDComplex4) into BillCurrency
!insert (billWellingtonWL2, currencyNZDComplex4) into BillCurrency

!new Expense('expenseSeoulVendorSoftwareLicense')
!expenseSeoulVendorSoftwareLicense.amount := 198000.00
!expenseSeoulVendorSoftwareLicense.startDate := Date('2025-12-01')
!expenseSeoulVendorSoftwareLicense.endDate := Date('2025-12-01')

!new Bill('billSeoulSL1')
!billSeoulSL1.amount := 198000.00
!billSeoulSL1.category := 'Annual license: localization QA plugin'
!billSeoulSL1.date := Date('2025-12-01')
!billSeoulSL1.paymentMethod := #CREDIT_CARD
!billSeoulSL1.status := #PENDING

!insert (expenseSeoulVendorSoftwareLicense, billSeoulSL1) into ExpenseContainsBills
!insert (billSeoulSL1, currencyKRWComplex4) into BillCurrency

!new Comment('commentSeoulSLC1')
!commentSeoulSLC1.text := 'Pending until IT confirms the license is assigned to the shared build account (not a personal email).'

!insert (expenseSeoulVendorSoftwareLicense, commentSeoulSLC1) into ExpenseComment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 189 | 0.00% |
| Multiplicities Errors | 0 | 40 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 5 | 0.00% |

## Category edge
```
!new Currency('currencyXOFEdge')
!currencyXOFEdge.name := 'West African CFA franc'
!currencyXOFEdge.abbreviation := 'XOF'

!new Currency('currencyTOPEdge')
!currencyTOPEdge.name := 'Tongan Paʻanga'
!currencyTOPEdge.abbreviation := 'TOP'

!new Currency('currencyWSTEdge')
!currencyWSTEdge.name := 'Samoan Tālā'
!currencyWSTEdge.abbreviation := 'WST'

!new Currency('currencyCLFEdge')
!currencyCLFEdge.name := 'Chilean Unidad de Fomento'
!currencyCLFEdge.abbreviation := 'CLF'

!new Expense('expenseEXPEDGE009')
!expenseEXPEDGE009.amount := 0.00
!expenseEXPEDGE009.startDate := Date('1970-01-01')
!expenseEXPEDGE009.endDate := Date('1970-01-01')

!new Comment('commentEXPEDGE009_COM901')
!commentEXPEDGE009_COM901.text := 'Created automatically by an import job; awaiting bills from upstream system.'

!new Comment('commentEXPEDGE009_COM902')
!commentEXPEDGE009_COM902.text := 'No bills were attached; keeping record for audit trail only.'

!new Comment('commentEXPEDGE009_COM903')
!commentEXPEDGE009_COM903.text := '日本語: 請求書未連携のため保留。'

!new Comment('commentEXPEDGE009_COM904')
!commentEXPEDGE009_COM904.text := 'Français : brouillon sans justificatifs (cas limite volontaire).'

!new Comment('commentEXPEDGE009_COM905')
!commentEXPEDGE009_COM905.text := '한국어 메모: 영수증이 아직 없습니다.'

!new Comment('commentEXPEDGE009_COM906')
!commentEXPEDGE009_COM906.text := 'Multiline note:\n- Step 1: create expense\n- Step 2: attach bills later\n- Step 3: reconcile totals'

!new Comment('commentEXPEDGE009_COM907')
!commentEXPEDGE009_COM907.text := '⚠ System note: This expense is valid in the model because sum(empty bills)=0.'

!insert (expenseEXPEDGE009, commentEXPEDGE009_COM901) into ExpenseComment
!insert (expenseEXPEDGE009, commentEXPEDGE009_COM902) into ExpenseComment
!insert (expenseEXPEDGE009, commentEXPEDGE009_COM903) into ExpenseComment
!insert (expenseEXPEDGE009, commentEXPEDGE009_COM904) into ExpenseComment
!insert (expenseEXPEDGE009, commentEXPEDGE009_COM905) into ExpenseComment
!insert (expenseEXPEDGE009, commentEXPEDGE009_COM906) into ExpenseComment
!insert (expenseEXPEDGE009, commentEXPEDGE009_COM907) into ExpenseComment

!new Expense('expenseEXPEDGE010')
!expenseEXPEDGE010.amount := 0.02
!expenseEXPEDGE010.startDate := Date('0001-01-01')
!expenseEXPEDGE010.endDate := Date('9999-12-31')

!new Bill('billEXPEDGE010_BILL1001')
!billEXPEDGE010_BILL1001.amount := 1000.00
!billEXPEDGE010_BILL1001.category := 'Foundational charge (legacy ledger seed)'
!billEXPEDGE010_BILL1001.date := Date('0001-01-01')
!billEXPEDGE010_BILL1001.paymentMethod := #CASH
!billEXPEDGE010_BILL1001.status := #VERIFIED

!new Bill('billEXPEDGE010_BILL1002')
!billEXPEDGE010_BILL1002.amount := -999.99
!billEXPEDGE010_BILL1002.category := 'Retroactive correction/refund'
!billEXPEDGE010_BILL1002.date := Date('9999-12-31')
!billEXPEDGE010_BILL1002.paymentMethod := #CREDIT_CARD
!billEXPEDGE010_BILL1002.status := #REFUNDED

!new Bill('billEXPEDGE010_BILL1003')
!billEXPEDGE010_BILL1003.amount := 0.00
!billEXPEDGE010_BILL1003.category := 'Zero-value verification line'
!billEXPEDGE010_BILL1003.date := Date('2000-01-01')
!billEXPEDGE010_BILL1003.paymentMethod := #CHECK
!billEXPEDGE010_BILL1003.status := #VALIDATED

!new Bill('billEXPEDGE010_BILL1004')
!billEXPEDGE010_BILL1004.amount := 0.01
!billEXPEDGE010_BILL1004.category := 'Precision residue A'
!billEXPEDGE010_BILL1004.date := Date('2016-12-31')
!billEXPEDGE010_BILL1004.paymentMethod := #CASH
!billEXPEDGE010_BILL1004.status := #PENDING

!insert (expenseEXPEDGE010, billEXPEDGE010_BILL1001) into ExpenseContainsBills
!insert (expenseEXPEDGE010, billEXPEDGE010_BILL1002) into ExpenseContainsBills
!insert (expenseEXPEDGE010, billEXPEDGE010_BILL1003) into ExpenseContainsBills
!insert (expenseEXPEDGE010, billEXPEDGE010_BILL1004) into ExpenseContainsBills

!insert (billEXPEDGE010_BILL1001, currencyXOFEdge) into BillCurrency
!insert (billEXPEDGE010_BILL1002, currencyTOPEdge) into BillCurrency
!insert (billEXPEDGE010_BILL1003, currencyWSTEdge) into BillCurrency
!insert (billEXPEDGE010_BILL1004, currencyCLFEdge) into BillCurrency

!new Comment('commentEXPEDGE010_COM1001')
!commentEXPEDGE010_COM1001.text := 'Edge test: bills span the earliest and latest representable dates; totals rely on near-cancellation (1000.00 - 999.99 + 0 + 0.01 = 0.02).'

!insert (expenseEXPEDGE010, commentEXPEDGE010_COM1001) into ExpenseComment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 76 | 0.00% |
| Multiplicities Errors | 0 | 16 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 2 | 0.00% |

## Category invalid
```
!new Currency('currencySGD_DCC')
!currencySGD_DCC.name := 'Singapore Dollar'
!currencySGD_DCC.abbreviation := 'SGD'

!new Currency('currencyUSD_DCC')
!currencyUSD_DCC.name := 'US Dollar'
!currencyUSD_DCC.abbreviation := 'USD'

!new Expense('expenseSingaporeConferenceDCC')
!expenseSingaporeConferenceDCC.amount := 1345.00
!expenseSingaporeConferenceDCC.startDate := Date('2026-02-16')
!expenseSingaporeConferenceDCC.endDate := Date('2026-02-18')

!new Bill('billSingaporeSG1')
!billSingaporeSG1.amount := 1280.00
!billSingaporeSG1.category := 'Hotel (3 nights, invoice shows SGD + DCC USD)'
!billSingaporeSG1.date := Date('2026-02-18')
!billSingaporeSG1.paymentMethod := #CREDIT_CARD
!billSingaporeSG1.status := #PENDING

!new Bill('billSingaporeSG2')
!billSingaporeSG2.amount := 65.00
!billSingaporeSG2.category := 'Metro & bus (EZ-Link top-up)'
!billSingaporeSG2.date := Date('2026-02-17')
!billSingaporeSG2.paymentMethod := #CASH
!billSingaporeSG2.status := #VERIFIED

!insert (expenseSingaporeConferenceDCC, billSingaporeSG1) into ExpenseContainsBills
!insert (expenseSingaporeConferenceDCC, billSingaporeSG2) into ExpenseContainsBills

!insert (billSingaporeSG1, currencySGD_DCC) into BillCurrency
!insert (billSingaporeSG1, currencyUSD_DCC) into BillCurrency
!insert (billSingaporeSG2, currencySGD_DCC) into BillCurrency

!new Comment('commentSingaporeDCC1')
!commentSingaporeDCC1.text := 'Hotel receipt lists 1,280.00 SGD, but terminal also printed Dynamic Currency Conversion showing 950.00 USD. Finance asked to keep both figures for audit.'

!new Comment('commentSingaporeDCC2')
!commentSingaporeDCC2.text := '请注意：同一笔交易有本地币种与结算币种两种金额 (SGD vs USD).'

!insert (expenseSingaporeConferenceDCC, commentSingaporeDCC1) into ExpenseComment
!insert (expenseSingaporeConferenceDCC, commentSingaporeDCC2) into ExpenseComment
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 7 | 14.29% |
| Invariants Errors (Not included on General) | 0 | 2 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `BillCurrency':
  Object `billSingaporeSG1' of class `Bill' is connected to 2 objects of class `Currency'
  at association end `currency' but the multiplicity is specified as `1'.
```

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

## Generation 5 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 419 | 0.00% |
| Multiplicities Errors | 0 | 81 | 0.00% |
| Invariants Errors | 0 | 8 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 7 | 14.29% |
| Invariants Errors (Not included on General) | 0 | 2 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `BillCurrency':
  Object `billSingaporeSG1' of class `Bill' is connected to 2 objects of class `Currency'
  at association end `currency' but the multiplicity is specified as `1'.
```

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 12 | 0.00% |

# Generation 6
## Category baseline
```
!new Currency('currencyGBPUniTrip')
!currencyGBPUniTrip.name := 'British Pound Sterling'
!currencyGBPUniTrip.abbreviation := 'GBP'

!new Currency('currencyNOKUniTrip')
!currencyNOKUniTrip.name := 'Norwegian Krone'
!currencyNOKUniTrip.abbreviation := 'NOK'

!new Currency('currencySEKUniTrip')
!currencySEKUniTrip.name := 'Swedish Krona'
!currencySEKUniTrip.abbreviation := 'SEK'

!new Expense('expenseEXP2026091')
!expenseEXP2026091.amount := 2006.25
!expenseEXP2026091.startDate := Date('2026-05-11')
!expenseEXP2026091.endDate := Date('2026-05-16')

!new Bill('billEXP2026091_BILL501')
!billEXP2026091_BILL501.amount := 180.00
!billEXP2026091_BILL501.category := 'Ground transport'
!billEXP2026091_BILL501.date := Date('2026-05-11')
!billEXP2026091_BILL501.paymentMethod := #CREDIT_CARD
!billEXP2026091_BILL501.status := #VALIDATED

!new Bill('billEXP2026091_BILL502')
!billEXP2026091_BILL502.amount := 1250.00
!billEXP2026091_BILL502.category := 'Lodging'
!billEXP2026091_BILL502.date := Date('2026-05-12')
!billEXP2026091_BILL502.paymentMethod := #CREDIT_CARD
!billEXP2026091_BILL502.status := #VERIFIED

!new Bill('billEXP2026091_BILL503')
!billEXP2026091_BILL503.amount := 320.50
!billEXP2026091_BILL503.category := 'Meals (work meeting)'
!billEXP2026091_BILL503.date := Date('2026-05-14')
!billEXP2026091_BILL503.paymentMethod := #CASH
!billEXP2026091_BILL503.status := #PENDING

!new Bill('billEXP2026091_BILL504')
!billEXP2026091_BILL504.amount := 210.00
!billEXP2026091_BILL504.category := 'Local transport'
!billEXP2026091_BILL504.date := Date('2026-05-13')
!billEXP2026091_BILL504.paymentMethod := #CASH
!billEXP2026091_BILL504.status := #REFUNDED

!new Bill('billEXP2026091_BILL505')
!billEXP2026091_BILL505.amount := 45.75
!billEXP2026091_BILL505.category := 'Printing'
!billEXP2026091_BILL505.date := Date('2026-05-15')
!billEXP2026091_BILL505.paymentMethod := #CHECK
!billEXP2026091_BILL505.status := #DRAFT

!insert (expenseEXP2026091, billEXP2026091_BILL501) into ExpenseContainsBills
!insert (expenseEXP2026091, billEXP2026091_BILL502) into ExpenseContainsBills
!insert (expenseEXP2026091, billEXP2026091_BILL503) into ExpenseContainsBills
!insert (expenseEXP2026091, billEXP2026091_BILL504) into ExpenseContainsBills
!insert (expenseEXP2026091, billEXP2026091_BILL505) into ExpenseContainsBills

!insert (billEXP2026091_BILL501, currencyGBPUniTrip) into BillCurrency
!insert (billEXP2026091_BILL502, currencyNOKUniTrip) into BillCurrency
!insert (billEXP2026091_BILL503, currencySEKUniTrip) into BillCurrency
!insert (billEXP2026091_BILL504, currencyNOKUniTrip) into BillCurrency
!insert (billEXP2026091_BILL505, currencyGBPUniTrip) into BillCurrency

!new Comment('commentEXP2026091_CMT501')
!commentEXP2026091_CMT501.text := 'Trip covers two partner universities; some items are in local currency because the vendors required local payment.'

!new Comment('commentEXP2026091_CMT502')
!commentEXP2026091_CMT502.text := 'Transit card shows REFUNDED because the kiosk returned the remaining balance; included for traceability.'

!new Comment('commentEXP2026091_CMT503')
!commentEXP2026091_CMT503.text := 'Kvitto saknas för en del av lunchdricksen; resten finns på kvittot. (Tip partially missing from receipt.)'

!new Comment('commentEXP2026091_CMT504')
!commentEXP2026091_CMT504.text := 'Poster printing is still in DRAFT pending department confirmation of allowable cost center.'

!insert (expenseEXP2026091, commentEXP2026091_CMT501) into ExpenseComment
!insert (expenseEXP2026091, commentEXP2026091_CMT502) into ExpenseComment
!insert (expenseEXP2026091, commentEXP2026091_CMT503) into ExpenseComment
!insert (expenseEXP2026091, commentEXP2026091_CMT504) into ExpenseComment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 65 | 0.00% |
| Multiplicities Errors | 0 | 14 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

## Category boundary
```
!new Currency('currencyZARStatuses')
!currencyZARStatuses.name := 'South African Rand'
!currencyZARStatuses.abbreviation := 'ZAR'

!new Expense('expenseEStatusesSmall')
!expenseEStatusesSmall.amount := 0.03
!expenseEStatusesSmall.startDate := Date('1900-02-28')
!expenseEStatusesSmall.endDate := Date('1900-02-28')

!new Bill('billEStatusesSmall_BS1')
!billEStatusesSmall_BS1.amount := 0.01
!billEStatusesSmall_BS1.category := 'Photocopy (archival record)'
!billEStatusesSmall_BS1.date := Date('1900-02-28')
!billEStatusesSmall_BS1.paymentMethod := #CASH
!billEStatusesSmall_BS1.status := #DRAFT

!new Bill('billEStatusesSmall_BS2')
!billEStatusesSmall_BS2.amount := 0.01
!billEStatusesSmall_BS2.category := 'Local transit fare adjustment'
!billEStatusesSmall_BS2.date := Date('1900-02-28')
!billEStatusesSmall_BS2.paymentMethod := #CREDIT_CARD
!billEStatusesSmall_BS2.status := #PENDING

!new Bill('billEStatusesSmall_BS3')
!billEStatusesSmall_BS3.amount := 0.01
!billEStatusesSmall_BS3.category := 'Stationery (single label)'
!billEStatusesSmall_BS3.date := Date('1900-02-28')
!billEStatusesSmall_BS3.paymentMethod := #CHECK
!billEStatusesSmall_BS3.status := #VERIFIED

!new Bill('billEStatusesSmall_BS4')
!billEStatusesSmall_BS4.amount := 0.00
!billEStatusesSmall_BS4.category := 'Invoice reprint (no fee)'
!billEStatusesSmall_BS4.date := Date('1900-02-28')
!billEStatusesSmall_BS4.paymentMethod := #CASH
!billEStatusesSmall_BS4.status := #VALIDATED

!new Bill('billEStatusesSmall_BS5')
!billEStatusesSmall_BS5.amount := 0.00
!billEStatusesSmall_BS5.category := 'Charge disputed (rejected by policy)'
!billEStatusesSmall_BS5.date := Date('1900-02-28')
!billEStatusesSmall_BS5.paymentMethod := #CREDIT_CARD
!billEStatusesSmall_BS5.status := #REFUSED

!new Bill('billEStatusesSmall_BS6')
!billEStatusesSmall_BS6.amount := 0.00
!billEStatusesSmall_BS6.category := 'Voided line item (refunded immediately)'
!billEStatusesSmall_BS6.date := Date('1900-02-28')
!billEStatusesSmall_BS6.paymentMethod := #CHECK
!billEStatusesSmall_BS6.status := #REFUNDED

!insert (expenseEStatusesSmall, billEStatusesSmall_BS1) into ExpenseContainsBills
!insert (expenseEStatusesSmall, billEStatusesSmall_BS2) into ExpenseContainsBills
!insert (expenseEStatusesSmall, billEStatusesSmall_BS3) into ExpenseContainsBills
!insert (expenseEStatusesSmall, billEStatusesSmall_BS4) into ExpenseContainsBills
!insert (expenseEStatusesSmall, billEStatusesSmall_BS5) into ExpenseContainsBills
!insert (expenseEStatusesSmall, billEStatusesSmall_BS6) into ExpenseContainsBills

!insert (billEStatusesSmall_BS1, currencyZARStatuses) into BillCurrency
!insert (billEStatusesSmall_BS2, currencyZARStatuses) into BillCurrency
!insert (billEStatusesSmall_BS3, currencyZARStatuses) into BillCurrency
!insert (billEStatusesSmall_BS4, currencyZARStatuses) into BillCurrency
!insert (billEStatusesSmall_BS5, currencyZARStatuses) into BillCurrency
!insert (billEStatusesSmall_BS6, currencyZARStatuses) into BillCurrency
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 55 | 0.00% |
| Multiplicities Errors | 0 | 12 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

## Category complex
```
!new Currency('currencyCNYComplex5b')
!currencyCNYComplex5b.name := 'Chinese Yuan Renminbi'
!currencyCNYComplex5b.abbreviation := 'CNY'

!new Currency('currencyARSComplex5b')
!currencyARSComplex5b.name := 'Argentine Peso'
!currencyARSComplex5b.abbreviation := 'ARS'

!new Currency('currencyTRYComplex5b')
!currencyTRYComplex5b.name := 'Turkish Lira'
!currencyTRYComplex5b.abbreviation := 'TRY'

!new Currency('currencyKESComplex5b')
!currencyKESComplex5b.name := 'Kenyan Shilling'
!currencyKESComplex5b.abbreviation := 'KES'

!new Expense('expenseShanghaiPackagingSupplierAudit_b')
!expenseShanghaiPackagingSupplierAudit_b.amount := 3245.50
!expenseShanghaiPackagingSupplierAudit_b.startDate := Date('2025-06-09')
!expenseShanghaiPackagingSupplierAudit_b.endDate := Date('2025-06-12')

!new Bill('billShanghaiCN1_b')
!billShanghaiCN1_b.amount := 1680.00
!billShanghaiCN1_b.category := 'Hotel (3 nights)'
!billShanghaiCN1_b.date := Date('2025-06-09')
!billShanghaiCN1_b.paymentMethod := #CREDIT_CARD
!billShanghaiCN1_b.status := #VALIDATED

!new Bill('billShanghaiCN2_b')
!billShanghaiCN2_b.amount := 120.00
!billShanghaiCN2_b.category := 'Metro card top-up'
!billShanghaiCN2_b.date := Date('2025-06-10')
!billShanghaiCN2_b.paymentMethod := #CASH
!billShanghaiCN2_b.status := #VERIFIED

!new Bill('billShanghaiCN3_b')
!billShanghaiCN3_b.amount := 85.50
!billShanghaiCN3_b.category := 'On-site PPE (safety glasses, gloves)'
!billShanghaiCN3_b.date := Date('2025-06-10')
!billShanghaiCN3_b.paymentMethod := #CASH
!billShanghaiCN3_b.status := #VERIFIED

!new Bill('billShanghaiCN4_b')
!billShanghaiCN4_b.amount := 460.00
!billShanghaiCN4_b.category := 'Supplier working dinner'
!billShanghaiCN4_b.date := Date('2025-06-11')
!billShanghaiCN4_b.paymentMethod := #CREDIT_CARD
!billShanghaiCN4_b.status := #PENDING

!new Bill('billShanghaiCN5_b')
!billShanghaiCN5_b.amount := 900.00
!billShanghaiCN5_b.category := 'Interpreter (half-day, factory walkthrough)'
!billShanghaiCN5_b.date := Date('2025-06-11')
!billShanghaiCN5_b.paymentMethod := #CHECK
!billShanghaiCN5_b.status := #DRAFT

!insert (expenseShanghaiPackagingSupplierAudit_b, billShanghaiCN1_b) into ExpenseContainsBills
!insert (expenseShanghaiPackagingSupplierAudit_b, billShanghaiCN2_b) into ExpenseContainsBills
!insert (expenseShanghaiPackagingSupplierAudit_b, billShanghaiCN3_b) into ExpenseContainsBills
!insert (expenseShanghaiPackagingSupplierAudit_b, billShanghaiCN4_b) into ExpenseContainsBills
!insert (expenseShanghaiPackagingSupplierAudit_b, billShanghaiCN5_b) into ExpenseContainsBills

!insert (billShanghaiCN1_b, currencyCNYComplex5b) into BillCurrency
!insert (billShanghaiCN2_b, currencyCNYComplex5b) into BillCurrency
!insert (billShanghaiCN3_b, currencyCNYComplex5b) into BillCurrency
!insert (billShanghaiCN4_b, currencyCNYComplex5b) into BillCurrency
!insert (billShanghaiCN5_b, currencyCNYComplex5b) into BillCurrency

!new Expense('expenseBuenosAiresFintechComplianceConference_b')
!expenseBuenosAiresFintechComplianceConference_b.amount := 51100.00
!expenseBuenosAiresFintechComplianceConference_b.startDate := Date('2025-10-02')
!expenseBuenosAiresFintechComplianceConference_b.endDate := Date('2025-10-05')

!new Bill('billBuenosAiresAR1_b')
!billBuenosAiresAR1_b.amount := 30000.00
!billBuenosAiresAR1_b.category := 'Conference registration'
!billBuenosAiresAR1_b.date := Date('2025-10-02')
!billBuenosAiresAR1_b.paymentMethod := #CREDIT_CARD
!billBuenosAiresAR1_b.status := #VERIFIED

!new Bill('billBuenosAiresAR2_b')
!billBuenosAiresAR2_b.amount := 8500.00
!billBuenosAiresAR2_b.category := 'Airport taxi (EZE to city)'
!billBuenosAiresAR2_b.date := Date('2025-10-02')
!billBuenosAiresAR2_b.paymentMethod := #CASH
!billBuenosAiresAR2_b.status := #REFUSED

!new Bill('billBuenosAiresAR3_b')
!billBuenosAiresAR3_b.amount := 12600.00
!billBuenosAiresAR3_b.category := 'Client dinner (post-panel)'
!billBuenosAiresAR3_b.date := Date('2025-10-04')
!billBuenosAiresAR3_b.paymentMethod := #CREDIT_CARD
!billBuenosAiresAR3_b.status := #VALIDATED

!insert (expenseBuenosAiresFintechComplianceConference_b, billBuenosAiresAR1_b) into ExpenseContainsBills
!insert (expenseBuenosAiresFintechComplianceConference_b, billBuenosAiresAR2_b) into ExpenseContainsBills
!insert (expenseBuenosAiresFintechComplianceConference_b, billBuenosAiresAR3_b) into ExpenseContainsBills

!insert (billBuenosAiresAR1_b, currencyARSComplex5b) into BillCurrency
!insert (billBuenosAiresAR2_b, currencyARSComplex5b) into BillCurrency
!insert (billBuenosAiresAR3_b, currencyARSComplex5b) into BillCurrency

!new Comment('commentBuenosAiresARC1_b')
!commentBuenosAiresARC1_b.text := 'Taxi bill refused: driver did not provide an official receipt; will attempt to obtain a compliant invoice from the dispatch company.'

!new Comment('commentBuenosAiresARC2_b')
!commentBuenosAiresARC2_b.text := 'Registration receipt includes attendee name without middle initial; badge photo attached to support verification.'

!insert (expenseBuenosAiresFintechComplianceConference_b, commentBuenosAiresARC1_b) into ExpenseComment
!insert (expenseBuenosAiresFintechComplianceConference_b, commentBuenosAiresARC2_b) into ExpenseComment

!new Expense('expenseIstanbulCustomerWorkshopEnablement_b')
!expenseIstanbulCustomerWorkshopEnablement_b.amount := 7730.00
!expenseIstanbulCustomerWorkshopEnablement_b.startDate := Date('2026-02-09')
!expenseIstanbulCustomerWorkshopEnablement_b.endDate := Date('2026-02-11')

!new Bill('billIstanbulTR1_b')
!billIstanbulTR1_b.amount := 4500.00
!billIstanbulTR1_b.category := 'Workshop venue deposit'
!billIstanbulTR1_b.date := Date('2026-02-09')
!billIstanbulTR1_b.paymentMethod := #CHECK
!billIstanbulTR1_b.status := #VERIFIED

!new Bill('billIstanbulTR2_b')
!billIstanbulTR2_b.amount := 2100.00
!billIstanbulTR2_b.category := 'Catering (coffee break + lunch)'
!billIstanbulTR2_b.date := Date('2026-02-10')
!billIstanbulTR2_b.paymentMethod := #CREDIT_CARD
!billIstanbulTR2_b.status := #PENDING

!new Bill('billIstanbulTR3_b')
!billIstanbulTR3_b.amount := 180.00
!billIstanbulTR3_b.category := 'Ferry/transit fares'
!billIstanbulTR3_b.date := Date('2026-02-10')
!billIstanbulTR3_b.paymentMethod := #CASH
!billIstanbulTR3_b.status := #VERIFIED

!new Bill('billIstanbulTR4_b')
!billIstanbulTR4_b.amount := 950.00
!billIstanbulTR4_b.category := 'Projector rental (backup unit)'
!billIstanbulTR4_b.date := Date('2026-02-10')
!billIstanbulTR4_b.paymentMethod := #CREDIT_CARD
!billIstanbulTR4_b.status := #VALIDATED

!insert (expenseIstanbulCustomerWorkshopEnablement_b, billIstanbulTR1_b) into ExpenseContainsBills
!insert (expenseIstanbulCustomerWorkshopEnablement_b, billIstanbulTR2_b) into ExpenseContainsBills
!insert (expenseIstanbulCustomerWorkshopEnablement_b, billIstanbulTR3_b) into ExpenseContainsBills
!insert (expenseIstanbulCustomerWorkshopEnablement_b, billIstanbulTR4_b) into ExpenseContainsBills

!insert (billIstanbulTR1_b, currencyTRYComplex5b) into BillCurrency
!insert (billIstanbulTR2_b, currencyTRYComplex5b) into BillCurrency
!insert (billIstanbulTR3_b, currencyTRYComplex5b) into BillCurrency
!insert (billIstanbulTR4_b, currencyTRYComplex5b) into BillCurrency

!new Comment('commentIstanbulTRC1_b')
!commentIstanbulTRC1_b.text := 'Catering is pending until the signed attendance sheet is uploaded to justify participant count.'

!insert (expenseIstanbulCustomerWorkshopEnablement_b, commentIstanbulTRC1_b) into ExpenseComment

!new Expense('expenseNairobiRuralConnectivityPilot_b')
!expenseNairobiRuralConnectivityPilot_b.amount := 13200.00
!expenseNairobiRuralConnectivityPilot_b.startDate := Date('2025-04-21')
!expenseNairobiRuralConnectivityPilot_b.endDate := Date('2025-04-24')

!new Bill('billNairobiKE1_b')
!billNairobiKE1_b.amount := 7200.00
!billNairobiKE1_b.category := 'Vehicle hire (2 days, driver included)'
!billNairobiKE1_b.date := Date('2025-04-21')
!billNairobiKE1_b.paymentMethod := #CASH
!billNairobiKE1_b.status := #VERIFIED

!new Bill('billNairobiKE2_b')
!billNairobiKE2_b.amount := 3400.00
!billNairobiKE2_b.category := 'Satellite data bundle (pilot testing)'
!billNairobiKE2_b.date := Date('2025-04-22')
!billNairobiKE2_b.paymentMethod := #CREDIT_CARD
!billNairobiKE2_b.status := #VALIDATED

!new Bill('billNairobiKE3_b')
!billNairobiKE3_b.amount := 2600.00
!billNairobiKE3_b.category := 'Meals and water (field team)'
!billNairobiKE3_b.date := Date('2025-04-23')
!billNairobiKE3_b.paymentMethod := #CASH
!billNairobiKE3_b.status := #DRAFT

!insert (expenseNairobiRuralConnectivityPilot_b, billNairobiKE1_b) into ExpenseContainsBills
!insert (expenseNairobiRuralConnectivityPilot_b, billNairobiKE2_b) into ExpenseContainsBills
!insert (expenseNairobiRuralConnectivityPilot_b, billNairobiKE3_b) into ExpenseContainsBills

!insert (billNairobiKE1_b, currencyKESComplex5b) into BillCurrency
!insert (billNairobiKE2_b, currencyKESComplex5b) into BillCurrency
!insert (billNairobiKE3_b, currencyKESComplex5b) into BillCurrency

!new Comment('commentNairobiKEC1_b')
!commentNairobiKEC1_b.text := 'Meals marked draft because receipts were collected as a single handwritten note; supervisor requested itemization.'

!new Comment('commentNairobiKEC2_b')
!commentNairobiKEC2_b.text := 'Vehicle hire verified against daily logbook entries (odometer photos included).'

!insert (expenseNairobiRuralConnectivityPilot_b, commentNairobiKEC1_b) into ExpenseComment
!insert (expenseNairobiRuralConnectivityPilot_b, commentNairobiKEC2_b) into ExpenseComment

!new Expense('expenseBuenosAiresInterpretationService_b')
!expenseBuenosAiresInterpretationService_b.amount := 18000.00
!expenseBuenosAiresInterpretationService_b.startDate := Date('2025-10-01')
!expenseBuenosAiresInterpretationService_b.endDate := Date('2025-10-01')

!new Bill('billBuenosAiresAR4_b')
!billBuenosAiresAR4_b.amount := 18000.00
!billBuenosAiresAR4_b.category := 'Interpretation service (2 hours, Spanish-English)'
!billBuenosAiresAR4_b.date := Date('2025-10-01')
!billBuenosAiresAR4_b.paymentMethod := #CHECK
!billBuenosAiresAR4_b.status := #PENDING

!insert (expenseBuenosAiresInterpretationService_b, billBuenosAiresAR4_b) into ExpenseContainsBills
!insert (billBuenosAiresAR4_b, currencyARSComplex5b) into BillCurrency

!new Comment('commentBuenosAiresARSVC1_b')
!commentBuenosAiresARSVC1_b.text := 'Service invoiced under vendor contract; pending until procurement confirms the supplier is active in the system.'

!new Comment('commentBuenosAiresARSVC2_b')
!commentBuenosAiresARSVC2_b.text := 'Invoice lists event location only as Microcentro; request sent to add full address for audit trail.'

!new Comment('commentBuenosAiresARSVC3_b')
!commentBuenosAiresARSVC3_b.text := 'Payment by check used due to vendor preference; bank deposit slip will be attached once received.'

!insert (expenseBuenosAiresInterpretationService_b, commentBuenosAiresARSVC1_b) into ExpenseComment
!insert (expenseBuenosAiresInterpretationService_b, commentBuenosAiresARSVC2_b) into ExpenseComment
!insert (expenseBuenosAiresInterpretationService_b, commentBuenosAiresARSVC3_b) into ExpenseComment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 184 | 0.00% |
| Multiplicities Errors | 0 | 40 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 5 | 0.00% |

## Category edge
```
!new Currency('currencyCURN1')
!currencyCURN1.name := 'South African Rand'
!currencyCURN1.abbreviation := 'zar'

!new Currency('currencyCURN2')
!currencyCURN2.name := ''
!currencyCURN2.abbreviation := 'Ø'

!new Currency('currencyCURN3')
!currencyCURN3.name := 'Réunion franc (historic / test currency)'
!currencyCURN3.abbreviation := 'RF'

!new Expense('expenseEXPEDGE011_3')
!expenseEXPEDGE011_3.amount := 25.00
!expenseEXPEDGE011_3.startDate := Date('2026-03-10')
!expenseEXPEDGE011_3.endDate := Date('2026-03-10')

!new Bill('billEXPEDGE011_3_BILL1101')
!billEXPEDGE011_3_BILL1101.amount := 10.00
!billEXPEDGE011_3_BILL1101.category := 'Transit fare\n(printed on two lines)'
!billEXPEDGE011_3_BILL1101.date := Date('2026-03-10')
!billEXPEDGE011_3_BILL1101.paymentMethod := #CASH
!billEXPEDGE011_3_BILL1101.status := #VERIFIED

!new Bill('billEXPEDGE011_3_BILL1102')
!billEXPEDGE011_3_BILL1102.amount := 20.00
!billEXPEDGE011_3_BILL1102.category := 'Meal (rejected by policy but still logged)'
!billEXPEDGE011_3_BILL1102.date := Date('2026-03-10')
!billEXPEDGE011_3_BILL1102.paymentMethod := #CREDIT_CARD
!billEXPEDGE011_3_BILL1102.status := #REFUSED

!new Bill('billEXPEDGE011_3_BILL1103')
!billEXPEDGE011_3_BILL1103.amount := -5.00
!billEXPEDGE011_3_BILL1103.category := 'Partial refund applied after refusal'
!billEXPEDGE011_3_BILL1103.date := Date('2026-03-10')
!billEXPEDGE011_3_BILL1103.paymentMethod := #CREDIT_CARD
!billEXPEDGE011_3_BILL1103.status := #REFUNDED

!insert (expenseEXPEDGE011_3, billEXPEDGE011_3_BILL1101) into ExpenseContainsBills
!insert (expenseEXPEDGE011_3, billEXPEDGE011_3_BILL1102) into ExpenseContainsBills
!insert (expenseEXPEDGE011_3, billEXPEDGE011_3_BILL1103) into ExpenseContainsBills

!insert (billEXPEDGE011_3_BILL1101, currencyCURN1) into BillCurrency
!insert (billEXPEDGE011_3_BILL1102, currencyCURN1) into BillCurrency
!insert (billEXPEDGE011_3_BILL1103, currencyCURN3) into BillCurrency

!new Expense('expenseEXPEDGE012_3')
!expenseEXPEDGE012_3.amount := 0.00
!expenseEXPEDGE012_3.startDate := Date('2026-03-11')
!expenseEXPEDGE012_3.endDate := Date('2026-03-10')

!new Bill('billEXPEDGE012_3_BILL1201')
!billEXPEDGE012_3_BILL1201.amount := 0.00
!billEXPEDGE012_3_BILL1201.category := 'Zero-value placeholder A'
!billEXPEDGE012_3_BILL1201.date := Date('2026-03-11')
!billEXPEDGE012_3_BILL1201.paymentMethod := #CHECK
!billEXPEDGE012_3_BILL1201.status := #DRAFT

!new Bill('billEXPEDGE012_3_BILL1202')
!billEXPEDGE012_3_BILL1202.amount := 0.00
!billEXPEDGE012_3_BILL1202.category := 'Zero-value placeholder B'
!billEXPEDGE012_3_BILL1202.date := Date('2026-03-09')
!billEXPEDGE012_3_BILL1202.paymentMethod := #CASH
!billEXPEDGE012_3_BILL1202.status := #PENDING

!insert (expenseEXPEDGE012_3, billEXPEDGE012_3_BILL1201) into ExpenseContainsBills
!insert (expenseEXPEDGE012_3, billEXPEDGE012_3_BILL1202) into ExpenseContainsBills

!insert (billEXPEDGE012_3_BILL1201, currencyCURN3) into BillCurrency
!insert (billEXPEDGE012_3_BILL1202, currencyCURN1) into BillCurrency

!new Comment('commentEXPEDGE012_3_COM1201')
!commentEXPEDGE012_3_COM1201.text := 'This expense intentionally contains only zero-amount bills.'

!new Comment('commentEXPEDGE012_3_COM1202')
!commentEXPEDGE012_3_COM1202.text := '   '

!new Comment('commentEXPEDGE012_3_COM1203')
!commentEXPEDGE012_3_COM1203.text := 'RTL/LTR mix test: العربية English עברית'

!new Comment('commentEXPEDGE012_3_COM1204')
!commentEXPEDGE012_3_COM1204.text := 'Very long note used as a boundary test for comment storage and display; no model constraint limits length, so this remains valid even if it is unusually verbose for an expense report comment.'

!insert (expenseEXPEDGE012_3, commentEXPEDGE012_3_COM1201) into ExpenseComment
!insert (expenseEXPEDGE012_3, commentEXPEDGE012_3_COM1202) into ExpenseComment
!insert (expenseEXPEDGE012_3, commentEXPEDGE012_3_COM1203) into ExpenseComment
!insert (expenseEXPEDGE012_3, commentEXPEDGE012_3_COM1204) into ExpenseComment

!new Expense('expenseEXPEDGE013_3')
!expenseEXPEDGE013_3.amount := 0.3333333333
!expenseEXPEDGE013_3.startDate := Date('2026-03-12')
!expenseEXPEDGE013_3.endDate := Date('2026-03-12')

!new Bill('billEXPEDGE013_3_BILL1301')
!billEXPEDGE013_3_BILL1301.amount := 0.3333333333
!billEXPEDGE013_3_BILL1301.category := 'One-third allocation (precision stress test)'
!billEXPEDGE013_3_BILL1301.date := Date('2026-03-12')
!billEXPEDGE013_3_BILL1301.paymentMethod := #CHECK
!billEXPEDGE013_3_BILL1301.status := #VALIDATED

!insert (expenseEXPEDGE013_3, billEXPEDGE013_3_BILL1301) into ExpenseContainsBills
!insert (billEXPEDGE013_3_BILL1301, currencyCURN2) into BillCurrency

!new Comment('commentEXPEDGE013_3_COM1301')
!commentEXPEDGE013_3_COM1301.text := 'Uses currency with empty name and a high-precision Real amount; valid per model.'

!insert (expenseEXPEDGE013_3, commentEXPEDGE013_3_COM1301) into ExpenseComment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 84 | 0.00% |
| Multiplicities Errors | 0 | 17 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 1 | 3 | 33.33% |

| Invalid dates | 
|---| 
```
End date: 2026-03-10 is before start date: 2026-03-11
```

## Category invalid
```
!new Expense('expensePerDiemOnlyDakar')
!expensePerDiemOnlyDakar.amount := 120.00
!expensePerDiemOnlyDakar.startDate := Date('2026-02-01')
!expensePerDiemOnlyDakar.endDate := Date('2026-02-02')

!new Comment('commentPerDiemDakar1')
!commentPerDiemDakar1.text := 'Per diem policy applies for trips under 48 hours; no receipts are required.'

!new Comment('commentPerDiemDakar2')
!commentPerDiemDakar2.text := 'Montant demandé: 2 jours × 60,00 = 120,00 (indemnité journalière).'

!new Comment('commentPerDiemDakar3')
!commentPerDiemDakar3.text := 'Meals and local transport are covered by the allowance; do not attach bills.'

!insert (expensePerDiemOnlyDakar, commentPerDiemDakar1) into ExpenseComment
!insert (expensePerDiemOnlyDakar, commentPerDiemDakar2) into ExpenseComment
!insert (expensePerDiemOnlyDakar, commentPerDiemDakar3) into ExpenseComment
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 3 | 0.00% |
| Invariants Errors (Not included on General) | 1 | 2 | 50.00% |

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (1) `Expense::expenseSumOfBills': FAILED.
```

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1 | 0.00% |

## Generation 6 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 401 | 0.00% |
| Multiplicities Errors | 0 | 83 | 0.00% |
| Invariants Errors | 0 | 8 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 3 | 0.00% |
| Invariants Errors (Not included on General) | 1 | 2 | 50.00% |

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (1) `Expense::expenseSumOfBills': FAILED.
```

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 1 | 11 | 9.09% |

| Invalid dates | 
|---| 
```
End date: 2026-03-10 is before start date: 2026-03-11
```

# Summary for all generations
| Summary | Value | 
|---|---| 
| Model | GPT_5_2 | 
| Type | CoT | 
| System | myexpenses | 
| Number of generations | 6 | 

| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 2363 | 0.00% |
| Multiplicities Errors | 0 | 463 | 0.00% |
| Invariants Errors | 0 | 48 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 4 | 43 | 9.30% |
| Invariants Errors (Not included on General) | 4 | 12 | 33.33% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `BillCurrency':
  Object `currencyJPY' of class `Currency' is connected to 0 objects of class `Bill'
  at association end `bill' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `ExpenseComment':
  Object `commentUnassignedFREE1' of class `Comment' is connected to 0 objects of class `Expense'
  at association end `expense' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `ExpenseContainsBills':
  Object `billUnassignedUK1' of class `Bill' is connected to 0 objects of class `Expense'
  at association end `expense' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `BillCurrency':
  Object `billSingaporeSG1' of class `Bill' is connected to 2 objects of class `Currency'
  at association end `currency' but the multiplicity is specified as `1'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (1) `Expense::expenseSumOfBills': FAILED.
```
```
checking invariant (1) `Expense::expenseSumOfBills': FAILED.
```
```
checking invariant (2) `Expense::positiveAmount': FAILED.
```
```
checking invariant (1) `Expense::expenseSumOfBills': FAILED.
```

| MyExpenses | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 3 | 62 | 4.84% |

| Invalid dates | 
|---| 
```
End date: 2025-01-01 is before start date: 2025-12-31
```
```
End date: 1582-10-04 is before start date: 1582-10-15
```
```
End date: 2026-03-10 is before start date: 2026-03-11
```

