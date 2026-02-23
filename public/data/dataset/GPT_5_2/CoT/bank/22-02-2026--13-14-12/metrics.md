# Generation 1
## Category baseline
```
!new Bank('b1')
!b1.name := 'Nordstadt Bank AG'
!b1.country := 'Germany'
!b1.bic := 'NDSBDEFFXXX'

!new Person('p1')
!p1.firstName := 'Anna'
!p1.lastName := 'Müller'
!p1.age := 34

!new Person('p2')
!p2.firstName := 'Marco'
!p2.lastName := 'Rossi'
!p2.age := 41

!new Person('p3')
!p3.firstName := 'Sofia'
!p3.lastName := 'Müller'
!p3.age := 17

!new Account('a1')
!a1.iban := 'DE89 3704 0044 0532 0130 00'
!a1.balance := 2450

!new Account('a2')
!a2.iban := 'DE44 5001 0517 5407 3249 31'
!a2.balance := 12000

!insert (b1, a1) into AccountOfBanks
!insert (b1, a2) into AccountOfBanks

!insert (p1, a1) into Ownership
!insert (p1, a2) into Ownership
!insert (p2, a2) into Ownership

!insert (p1, a1) into Use
!insert (p3, a1) into Use
!insert (p2, a2) into Use
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 30 | 0.00% |
| Multiplicities Errors | 0 | 8 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 0 | 2 | 0.00% |
| IBANs (Realistic) | 0 | 2 | 0.00% |
| BICs (Realistic) | 0 | 1 | 0.00% |
| Countries (Realistic) | 0 | 1 | 0.00% |

## Category boundary
```
!new Bank('b4')
!b4.country := 'Norway'
!b4.name := 'Nordfjord Bank ASA'
!b4.bic := 'NFBANOKKXXX'

!new Bank('b5')
!b5.country := 'Brazil'
!b5.name := 'Banco do Cerrado'
!b5.bic := 'BCDCBRSPXXX'

!new Bank('b6')
!b6.country := 'Japan'
!b6.name := 'Sakura Trust'
!b6.bic := 'SAKTJPJTXXX'

!new Person('p8')
!p8.firstName := 'Amina'
!p8.lastName := 'El-Fassi'
!p8.age := 18

!new Person('p9')
!p9.firstName := 'João Pedro'
!p9.lastName := 'Souza'
!p9.age := 45

!new Person('p10')
!p10.firstName := 'Linh'
!p10.lastName := 'Nguyen'
!p10.age := 18

!new Person('p11')
!p11.firstName := 'Kofi'
!p11.lastName := 'Mensah'
!p11.age := 17

!new Person('p12')
!p12.firstName := 'Sofía'
!p12.lastName := 'García'
!p12.age := 30

!new Person('p13')
!p13.firstName := 'Marek'
!p13.lastName := 'Nowak'
!p13.age := 22

!new Account('a5')
!a5.iban := 'NO93 8601 1117 947'
!a5.balance := 0

!new Account('a6')
!a6.iban := 'BR15 0000 0000 0000 0000 0000 001'
!a6.balance := 1

!new Account('a7')
!a7.iban := 'BR72 0000 0000 0000 0000 0000 002'
!a7.balance := 2

!insert (b4, a5) into AccountOfBanks
!insert (b5, a6) into AccountOfBanks
!insert (b5, a7) into AccountOfBanks

!insert (p8, a5) into Ownership
!insert (p9, a6) into Ownership
!insert (p10, a6) into Ownership
!insert (p10, a7) into Ownership

!insert (p9, a6) into Use
!insert (p11, a6) into Use
!insert (p12, a6) into Use
!insert (p10, a7) into Use
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 56 | 0.00% |
| Multiplicities Errors | 0 | 11 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 2 | 3 | 66.67% |
| IBANs (Realistic) | 0 | 3 | 0.00% |
| BICs (Realistic) | 0 | 3 | 0.00% |
| Countries (Realistic) | 0 | 3 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
BR1500000000000000000000001
```
```
BR7200000000000000000000002
```
```
BR1500000000000000000000001
```
```
BR7200000000000000000000002
```

## Category complex
```
!new Bank('b9')
!b9.name := 'RheinMain Bank AG'
!b9.country := 'Germany'
!b9.bic := 'RHMNDEFFXXX'

!new Bank('b10')
!b10.name := 'Banco del Pacífico Andino'
!b10.country := 'Spain'
!b10.bic := 'BPANESMMXXX'

!new Bank('b11')
!b11.name := 'Atlas Sahara Bank'
!b11.country := 'Morocco'
!b11.bic := 'ATSBMA MCXXX'

!new Person('p20')
!p20.firstName := 'Anna-Klara'
!p20.lastName := 'Vogel'
!p20.age := 34

!new Person('p21')
!p21.firstName := 'Mehmet'
!p21.lastName := 'Kaya'
!p21.age := 45

!new Person('p22')
!p22.firstName := 'Helga'
!p22.lastName := 'Vogel'
!p22.age := 68

!new Person('p23')
!p23.firstName := 'Luis'
!p23.lastName := 'Martínez'
!p23.age := 39

!new Person('p24')
!p24.firstName := 'Samira'
!p24.lastName := 'El Idrissi'
!p24.age := 28

!new Person('p25')
!p25.firstName := 'François'
!p25.lastName := 'Dubois'
!p25.age := 52

!new Person('p26')
!p26.firstName := 'Niamh'
!p26.lastName := 'O’Connor'
!p26.age := 23

!new Person('p27')
!p27.firstName := 'Youssef'
!p27.lastName := 'Benali'
!p27.age := 17

!new Account('a10')
!a10.iban := 'DE89370400440532013000'
!a10.balance := 4820

!new Account('a11')
!a11.iban := 'DE44500105175407324931'
!a11.balance := 12950

!new Account('a12')
!a12.iban := 'DE12500105170648489890'
!a12.balance := 76000

!new Account('a13')
!a13.iban := 'ES9121000418450200051332'
!a13.balance := 2300

!new Account('a14')
!a14.iban := 'ES7900491500310012345678'
!a14.balance := 15400

!new Account('a15')
!a15.iban := 'MA6400005000080012345678901'
!a15.balance := 980

!new Account('a16')
!a16.iban := 'MA9300021020210012345678901'
!a16.balance := 50500

!insert (b9, a10) into AccountOfBanks
!insert (b9, a11) into AccountOfBanks
!insert (b9, a12) into AccountOfBanks
!insert (b10, a13) into AccountOfBanks
!insert (b10, a14) into AccountOfBanks
!insert (b11, a15) into AccountOfBanks
!insert (b11, a16) into AccountOfBanks

!insert (p20, a10) into Ownership
!insert (p20, a11) into Ownership
!insert (p21, a11) into Ownership
!insert (p22, a12) into Ownership
!insert (p23, a13) into Ownership
!insert (p23, a14) into Ownership
!insert (p24, a14) into Ownership
!insert (p24, a15) into Ownership
!insert (p24, a16) into Ownership
!insert (p25, a16) into Ownership

!insert (p20, a10) into Use
!insert (p22, a10) into Use
!insert (p26, a10) into Use

!insert (p20, a11) into Use
!insert (p21, a11) into Use
!insert (p27, a11) into Use

!insert (p22, a12) into Use
!insert (p20, a12) into Use

!insert (p23, a13) into Use
!insert (p25, a13) into Use

!insert (p23, a14) into Use
!insert (p24, a14) into Use
!insert (p26, a14) into Use

!insert (p24, a15) into Use
!insert (p27, a15) into Use

!insert (p24, a16) into Use
!insert (p25, a16) into Use
!insert (p20, a16) into Use
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 100 | 0.00% |
| Multiplicities Errors | 0 | 35 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 3 | 7 | 42.86% |
| IBANs (Realistic) | 0 | 7 | 0.00% |
| BICs (Realistic) | 0 | 3 | 0.00% |
| Countries (Realistic) | 0 | 3 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
ES7900491500310012345678
```
```
MA6400005000080012345678901
```
```
MA9300021020210012345678901
```
```
ES7900491500310012345678
```
```
MA6400005000080012345678901
```
```
MA9300021020210012345678901
```

## Category edge
```
!new Bank('b2')
!b2.country := 'Monaco'
!b2.name := 'Banque de l’Anse'
!b2.bic := 'ANSEMC01'

!new Bank('b3')
!b3.country := 'Greenland'
!b3.name := 'Kalaallit Banki'
!b3.bic := 'KALAGLGL'

!new Person('p4')
!p4.firstName := 'Noor'
!p4.lastName := 'El-Masri'
!p4.age := 18

!new Person('p5')
!p5.firstName := 'Édith'
!p5.lastName := 'Moreau'
!p5.age := 99

!new Person('p6')
!p6.firstName := 'Luka'
!p6.lastName := 'Kovač'
!p6.age := 16

!new Person('p7')
!p7.firstName := 'Anaya'
!p7.lastName := 'Iyer'
!p7.age := 30

!new Account('a3')
!a3.iban := 'DE89370400440532013000'
!a3.balance := 0

!new Account('a4')
!a4.iban := 'FR1420041010050500013M02606'
!a4.balance := 1

!insert (b2, a3) into AccountOfBanks
!insert (b2, a4) into AccountOfBanks

!insert (p4, a3) into Ownership
!insert (p5, a3) into Ownership
!insert (p5, a4) into Ownership

!insert (p6, a4) into Use
!insert (p7, a4) into Use
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 37 | 0.00% |
| Multiplicities Errors | 0 | 7 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 0 | 2 | 0.00% |
| IBANs (Realistic) | 0 | 2 | 0.00% |
| BICs (Realistic) | 0 | 2 | 0.00% |
| Countries (Realistic) | 0 | 2 | 0.00% |

## Category invalid
```
!new Bank('b7')
!b7.country := 'France'
!b7.name := 'Crédit Agricole Île-de-France'
!b7.bic := 'AGRIFRPPXXX'

!new Bank('b8')
!b8.country := 'Netherlands'
!b8.name := 'De Volksbank (SNS)'
!b8.bic := 'SNSBNL2A'

!new Person('p14')
!p14.firstName := 'Claire'
!p14.lastName := 'Dubois'
!p14.age := 39

!new Person('p15')
!p15.firstName := 'Marc'
!p15.lastName := 'Lefèvre'
!p15.age := 45

!new Person('p16')
!p16.firstName := 'Nadia'
!p16.lastName := 'Benali'
!p16.age := 41

!new Person('p17')
!p17.firstName := 'Sofía'
!p17.lastName := 'Martín'
!p17.age := 33

!new Person('p18')
!p18.firstName := 'Amina'
!p18.lastName := 'Njeri'
!p18.age := 42

!new Person('p19')
!p19.firstName := 'Kevin'
!p19.lastName := 'Otieno'
!p19.age := 16

!new Account('a8')
!a8.iban := 'FR14 3000 6000 0112 3456 7890 189'
!a8.balance := -350

!new Account('a9')
!a9.iban := 'NL55 SNSB 0917 1612 34'
!a9.balance := 120

!insert (b7, a8) into AccountOfBanks
!insert (b8, a9) into AccountOfBanks

!insert (p14, a8) into Ownership
!insert (p15, a8) into Ownership
!insert (p16, a8) into Ownership

!insert (p18, a9) into Ownership
!insert (p19, a9) into Ownership

!insert (p14, a8) into Use
!insert (p15, a8) into Use
!insert (p16, a8) into Use
!insert (p17, a8) into Use

!insert (p18, a9) into Use
!insert (p19, a9) into Use
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 13 | 7.69% |
| Invariants Errors (Not included on General) | 2 | 2 | 100.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `Ownership':
  Object `a8' of class `Account' is connected to 3 objects of class `Person'
  at association end `owner' but the multiplicity is specified as `1..2'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (1) `Account::AdultOwners': FAILED.
```
```
checking invariant (2) `Account::positiveBalance': FAILED.
```

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 2 | 2 | 100.00% |
| IBANs (Realistic) | 0 | 2 | 0.00% |
| BICs (Realistic) | 0 | 2 | 0.00% |
| Countries (Realistic) | 0 | 2 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
FR1430006000011234567890189
```
```
NL55SNSB0917161234
```
```
FR1430006000011234567890189
```
```
NL55SNSB0917161234
```

## Generation 1 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 274 | 0.00% |
| Multiplicities Errors | 0 | 61 | 0.00% |
| Invariants Errors | 0 | 8 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 13 | 7.69% |
| Invariants Errors (Not included on General) | 2 | 2 | 100.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `Ownership':
  Object `a8' of class `Account' is connected to 3 objects of class `Person'
  at association end `owner' but the multiplicity is specified as `1..2'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (1) `Account::AdultOwners': FAILED.
```
```
checking invariant (2) `Account::positiveBalance': FAILED.
```

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 7 | 16 | 43.75% |
| IBANs (Realistic) | 0 | 16 | 0.00% |
| BICs (Realistic) | 0 | 11 | 0.00% |
| Countries (Realistic) | 0 | 11 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
BR1500000000000000000000001
```
```
BR7200000000000000000000002
```
```
BR1500000000000000000000001
```
```
BR7200000000000000000000002
```
```
ES7900491500310012345678
```
```
MA6400005000080012345678901
```
```
MA9300021020210012345678901
```
```
ES7900491500310012345678
```
```
MA6400005000080012345678901
```
```
MA9300021020210012345678901
```
```
FR1430006000011234567890189
```
```
NL55SNSB0917161234
```
```
FR1430006000011234567890189
```
```
NL55SNSB0917161234
```

# Generation 2
## Category baseline
```
!new Bank('b12')
!b12.name := 'Banque Al Maghribia'
!b12.country := 'Morocco'
!b12.bic := 'BAMAMAMCXXX'

!new Bank('b13')
!b13.name := 'Suomi Cooperative Bank'
!b13.country := 'Finland'
!b13.bic := 'SUCOFIHHXXX'

!new Person('p28')
!p28.firstName := 'Fatima'
!p28.lastName := 'El Mansouri'
!p28.age := 38

!new Person('p29')
!p29.firstName := 'Leila'
!p29.lastName := 'Haddad'
!p29.age := 27

!new Person('p30')
!p30.firstName := 'Olli'
!p30.lastName := 'Virtanen'
!p30.age := 45

!new Person('p31')
!p31.firstName := 'Youssef'
!p31.lastName := 'Benali'
!p31.age := 19

!new Person('p32')
!p32.firstName := 'Inès'
!p32.lastName := 'El Mansouri'
!p32.age := 16

!new Account('a17')
!a17.iban := 'MA64 0000 0000 1234 5678 9012 345'
!a17.balance := 0

!new Account('a18')
!a18.iban := 'FI21 1234 5600 0007 85'
!a18.balance := 560

!new Account('a19')
!a19.iban := 'FI87 6543 2100 0011 09'
!a19.balance := 9800

!insert (b12, a17) into AccountOfBanks
!insert (b13, a18) into AccountOfBanks
!insert (b13, a19) into AccountOfBanks

!insert (p28, a17) into Ownership
!insert (p29, a17) into Ownership
!insert (p30, a18) into Ownership
!insert (p31, a19) into Ownership

!insert (p28, a17) into Use
!insert (p32, a17) into Use

!insert (p29, a18) into Use

!insert (p31, a19) into Use
!insert (p28, a19) into Use
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 49 | 0.00% |
| Multiplicities Errors | 0 | 12 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 2 | 3 | 66.67% |
| IBANs (Realistic) | 0 | 3 | 0.00% |
| BICs (Realistic) | 0 | 2 | 0.00% |
| Countries (Realistic) | 0 | 2 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
MA6400000000123456789012345
```
```
FI8765432100001109
```
```
MA6400000000123456789012345
```
```
FI8765432100001109
```

## Category boundary
```
!new Bank('b19')
!b19.country := 'Germany'
!b19.name := 'Bergtal Bank eG'
!b19.bic := 'BERGDEFFXXX'

!new Person('p44')
!p44.firstName := 'Helena'
!p44.lastName := 'Kowalska'
!p44.age := 18

!new Person('p45')
!p45.firstName := 'Omar'
!p45.lastName := 'Al-Nuaimi'
!p45.age := 52

!new Person('p46')
!p46.firstName := 'Priya'
!p46.lastName := 'Iyer'
!p46.age := 19

!new Person('p47')
!p47.firstName := 'Tariq'
!p47.lastName := 'Haddad'
!p47.age := 17

!new Person('p48')
!p48.firstName := 'Wei'
!p48.lastName := 'Zhang'
!p48.age := 34

!new Person('p49')
!p49.firstName := 'Anaïs'
!p49.lastName := 'Dubois'
!p49.age := 28

!new Person('p50')
!p50.firstName := 'Luca'
!p50.lastName := 'Rossi'
!p50.age := 18

!new Person('p51')
!p51.firstName := 'Nala'
!p51.lastName := 'Dlamini'
!p51.age := 40

!new Person('p52')
!p52.firstName := 'Santiago'
!p52.lastName := 'Pérez'
!p52.age := 23

!new Account('a27')
!a27.iban := 'DE11 7009 0000 0000 0001 01'
!a27.balance := 0

!new Account('a28')
!a28.iban := 'DE22 7009 0000 0000 0002 02'
!a28.balance := 2147483647

!new Account('a29')
!a29.iban := 'DE33 7009 0000 0000 0003 03'
!a29.balance := 5

!new Account('a30')
!a30.iban := 'DE44 7009 0000 0000 0004 04'
!a30.balance := 0

!insert (b19, a27) into AccountOfBanks
!insert (b19, a28) into AccountOfBanks
!insert (b19, a29) into AccountOfBanks
!insert (b19, a30) into AccountOfBanks

!insert (p44, a27) into Ownership
!insert (p50, a28) into Ownership
!insert (p49, a28) into Ownership
!insert (p45, a29) into Ownership
!insert (p46, a30) into Ownership

!insert (p45, a27) into Use
!insert (p47, a27) into Use

!insert (p48, a28) into Use
!insert (p44, a28) into Use
!insert (p46, a28) into Use
!insert (p51, a28) into Use
!insert (p50, a28) into Use

!insert (p46, a30) into Use
!insert (p48, a30) into Use
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 70 | 0.00% |
| Multiplicities Errors | 0 | 18 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 4 | 4 | 100.00% |
| IBANs (Realistic) | 0 | 4 | 0.00% |
| BICs (Realistic) | 0 | 1 | 0.00% |
| Countries (Realistic) | 0 | 1 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
DE11700900000000000101
```
```
DE22700900000000000202
```
```
DE33700900000000000303
```
```
DE44700900000000000404
```
```
DE11700900000000000101
```
```
DE22700900000000000202
```
```
DE33700900000000000303
```
```
DE44700900000000000404
```

## Category complex
```
!new Bank('b20')
!b20.name := 'Sakura Trust Bank'
!b20.country := 'Japan'
!b20.bic := 'SAKTJPJTXXX'

!new Bank('b21')
!b21.name := 'Banco Horizonte'
!b21.country := 'Brazil'
!b21.bic := 'HZNTBRSPXXX'

!new Bank('b22')
!b22.name := 'Ubuntu Mutual Bank'
!b22.country := 'South Africa'
!b22.bic := 'UBMTZAJJXXX'

!new Bank('b23')
!b23.name := 'Northern Fjord Credit Union'
!b23.country := 'Canada'
!b23.bic := 'NFJDCATTXXX'

!new Person('p53')
!p53.firstName := 'Haruto'
!p53.lastName := 'Sato'
!p53.age := 41

!new Person('p54')
!p54.firstName := 'Aiko'
!p54.lastName := 'Tanaka'
!p54.age := 37

!new Person('p55')
!p55.firstName := 'Kenji'
!p55.lastName := 'Nakamura'
!p55.age := 22

!new Person('p56')
!p56.firstName := 'Mariana'
!p56.lastName := 'Souza'
!p56.age := 30

!new Person('p57')
!p57.firstName := 'João'
!p57.lastName := 'Pereira'
!p57.age := 44

!new Person('p58')
!p58.firstName := 'Sofia'
!p58.lastName := 'Almeida'
!p58.age := 27

!new Person('p59')
!p59.firstName := 'Lindiwe'
!p59.lastName := 'Mokoena'
!p59.age := 29

!new Person('p60')
!p60.firstName := 'Thabo'
!p60.lastName := 'Dlamini'
!p60.age := 33

!new Person('p61')
!p61.firstName := 'Ingrid'
!p61.lastName := 'van der Merwe'
!p61.age := 61

!new Person('p62')
!p62.firstName := 'Priya'
!p62.lastName := 'Naidoo'
!p62.age := 19

!new Person('p63')
!p63.firstName := 'Ahmed'
!p63.lastName := 'El-Sayed'
!p63.age := 16

!new Account('a31')
!a31.iban := 'JP02SAKT00001234567890'
!a31.balance := 310000

!new Account('a32')
!a32.iban := 'JP77SAKT00000987654321'
!a32.balance := 12500

!new Account('a33')
!a33.iban := 'JP15SAKT00000011223344'
!a33.balance := 0

!new Account('a34')
!a34.iban := 'BR39HZNT0001000200030004'
!a34.balance := 8700

!new Account('a35')
!a35.iban := 'BR11HZNT0009000800070006'
!a35.balance := 64250

!new Account('a36')
!a36.iban := 'ZA90UBMT1234567890000001'
!a36.balance := 150

!new Account('a37')
!a37.iban := 'ZA12UBMT1234567890000002'
!a37.balance := 9800

!new Account('a38')
!a38.iban := 'ZA33UBMT1234567890000003'
!a38.balance := 420000

!new Account('a39')
!a39.iban := 'ZA44UBMT1234567890000004'
!a39.balance := 27500

!insert (b20, a31) into AccountOfBanks
!insert (b20, a32) into AccountOfBanks
!insert (b20, a33) into AccountOfBanks
!insert (b21, a34) into AccountOfBanks
!insert (b21, a35) into AccountOfBanks
!insert (b22, a36) into AccountOfBanks
!insert (b22, a37) into AccountOfBanks
!insert (b22, a38) into AccountOfBanks
!insert (b22, a39) into AccountOfBanks

!insert (p53, a31) into Ownership
!insert (p53, a32) into Ownership
!insert (p54, a32) into Ownership
!insert (p55, a33) into Ownership
!insert (p56, a34) into Ownership
!insert (p56, a35) into Ownership
!insert (p57, a35) into Ownership
!insert (p59, a36) into Ownership
!insert (p60, a37) into Ownership
!insert (p62, a37) into Ownership
!insert (p61, a38) into Ownership
!insert (p59, a39) into Ownership
!insert (p61, a39) into Ownership

!insert (p53, a31) into Use
!insert (p54, a31) into Use

!insert (p55, a32) into Use

!insert (p55, a33) into Use
!insert (p58, a33) into Use

!insert (p56, a34) into Use
!insert (p57, a34) into Use
!insert (p58, a34) into Use

!insert (p56, a35) into Use
!insert (p57, a35) into Use
!insert (p62, a35) into Use

!insert (p59, a36) into Use
!insert (p63, a36) into Use

!insert (p60, a37) into Use
!insert (p58, a37) into Use

!insert (p59, a39) into Use
!insert (p61, a39) into Use
!insert (p63, a39) into Use
!insert (p56, a39) into Use
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 128 | 0.00% |
| Multiplicities Errors | 0 | 41 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 9 | 9 | 100.00% |
| IBANs (Realistic) | 0 | 9 | 0.00% |
| BICs (Realistic) | 0 | 4 | 0.00% |
| Countries (Realistic) | 0 | 4 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
JP02SAKT00001234567890
```
```
JP77SAKT00000987654321
```
```
JP15SAKT00000011223344
```
```
BR39HZNT0001000200030004
```
```
BR11HZNT0009000800070006
```
```
ZA90UBMT1234567890000001
```
```
ZA12UBMT1234567890000002
```
```
ZA33UBMT1234567890000003
```
```
ZA44UBMT1234567890000004
```
```
JP02SAKT00001234567890
```
```
JP77SAKT00000987654321
```
```
JP15SAKT00000011223344
```
```
BR39HZNT0001000200030004
```
```
BR11HZNT0009000800070006
```
```
ZA90UBMT1234567890000001
```
```
ZA12UBMT1234567890000002
```
```
ZA33UBMT1234567890000003
```
```
ZA44UBMT1234567890000004
```

## Category edge
```
!new Bank('b17')
!b17.country := 'Japan'
!b17.name := 'Shōnan Mirai Bank'
!b17.bic := 'SMIRJPJT'

!new Bank('b18')
!b18.country := 'Brazil'
!b18.name := 'Banco do Cerrado'
!b18.bic := 'CERRBRSP'

!new Person('p37')
!p37.firstName := 'Haruto'
!p37.lastName := 'Tanaka'
!p37.age := 18

!new Person('p38')
!p38.firstName := 'Amina'
!p38.lastName := 'Yusuf'
!p38.age := 18

!new Person('p39')
!p39.firstName := 'Benedita'
!p39.lastName := 'Oliveira'
!p39.age := 45

!new Person('p40')
!p40.firstName := 'Marguerite'
!p40.lastName := 'Laurent'
!p40.age := 122

!new Person('p41')
!p41.firstName := 'Tiago'
!p41.lastName := 'Santos'
!p41.age := 17

!new Person('p42')
!p42.firstName := 'Mei'
!p42.lastName := 'Chen'
!p42.age := 34

!new Person('p43')
!p43.firstName := 'Sofia'
!p43.lastName := 'Ribeiro'
!p43.age := 5

!new Account('a24')
!a24.iban := 'JP79SMIR000000000123456789'
!a24.balance := 0

!new Account('a25')
!a25.iban := 'JP79SMIR000000000987654321'
!a25.balance := 2

!new Account('a26')
!a26.iban := 'BR15CERR0000000000004321001'
!a26.balance := 0

!insert (b17, a24) into AccountOfBanks
!insert (b17, a25) into AccountOfBanks
!insert (b18, a26) into AccountOfBanks

!insert (p37, a24) into Ownership
!insert (p38, a24) into Ownership

!insert (p39, a25) into Ownership
!insert (p40, a25) into Ownership

!insert (p39, a26) into Ownership

!insert (p41, a24) into Use
!insert (p42, a24) into Use
!insert (p43, a24) into Use

!insert (p39, a26) into Use
!insert (p42, a26) into Use
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 58 | 0.00% |
| Multiplicities Errors | 0 | 13 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 3 | 3 | 100.00% |
| IBANs (Realistic) | 0 | 3 | 0.00% |
| BICs (Realistic) | 0 | 2 | 0.00% |
| Countries (Realistic) | 0 | 2 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
JP79SMIR000000000123456789
```
```
JP79SMIR000000000987654321
```
```
BR15CERR0000000000004321001
```
```
JP79SMIR000000000123456789
```
```
JP79SMIR000000000987654321
```
```
BR15CERR0000000000004321001
```

## Category invalid
```
!new Bank('b24')
!b24.country := 'Switzerland'
!b24.name := 'UBS Switzerland AG'
!b24.bic := 'UBSWCHZH80A'

!new Bank('b25')
!b25.country := 'Spain'
!b25.name := 'Banco Santander, S.A.'
!b25.bic := 'BSCHESMMXXX'

!new Person('p64')
!p64.firstName := 'Hans'
!p64.lastName := 'Keller'
!p64.age := 52

!new Person('p65')
!p65.firstName := 'Élodie'
!p65.lastName := 'Martin'
!p65.age := 34

!new Person('p66')
!p66.firstName := 'Lucía'
!p66.lastName := 'Ríos'
!p66.age := 17

!new Person('p67')
!p67.firstName := 'Carmen'
!p67.lastName := 'Ríos'
!p67.age := 45

!new Account('a40')
!a40.iban := 'CH93 0023 0000 9876 5432 1'
!a40.balance := 250000

!new Account('a41')
!a41.iban := 'ES91 0049 1500 1234 5678 9012'
!a41.balance := 840

!insert (b24, a40) into AccountOfBanks
!insert (b25, a41) into AccountOfBanks

!insert (p66, a41) into Ownership

!insert (p64, a40) into Use
!insert (p65, a40) into Use

!insert (p66, a41) into Use
!insert (p67, a41) into Use
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 7 | 14.29% |
| Invariants Errors (Not included on General) | 1 | 2 | 50.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `Ownership':
  Object `a40' of class `Account' is connected to 0 objects of class `Person'
  at association end `owner' but the multiplicity is specified as `1..2'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (1) `Account::AdultOwners': FAILED.
```

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 2 | 2 | 100.00% |
| IBANs (Realistic) | 0 | 2 | 0.00% |
| BICs (Realistic) | 0 | 2 | 0.00% |
| Countries (Realistic) | 0 | 2 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
CH9300230000987654321
```
```
ES9100491500123456789012
```
```
CH9300230000987654321
```
```
ES9100491500123456789012
```

## Generation 2 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 342 | 0.00% |
| Multiplicities Errors | 0 | 84 | 0.00% |
| Invariants Errors | 0 | 8 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 7 | 14.29% |
| Invariants Errors (Not included on General) | 1 | 2 | 50.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `Ownership':
  Object `a40' of class `Account' is connected to 0 objects of class `Person'
  at association end `owner' but the multiplicity is specified as `1..2'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (1) `Account::AdultOwners': FAILED.
```

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 20 | 21 | 95.24% |
| IBANs (Realistic) | 0 | 21 | 0.00% |
| BICs (Realistic) | 0 | 11 | 0.00% |
| Countries (Realistic) | 0 | 11 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
MA6400000000123456789012345
```
```
FI8765432100001109
```
```
MA6400000000123456789012345
```
```
FI8765432100001109
```
```
DE11700900000000000101
```
```
DE22700900000000000202
```
```
DE33700900000000000303
```
```
DE44700900000000000404
```
```
DE11700900000000000101
```
```
DE22700900000000000202
```
```
DE33700900000000000303
```
```
DE44700900000000000404
```
```
JP02SAKT00001234567890
```
```
JP77SAKT00000987654321
```
```
JP15SAKT00000011223344
```
```
BR39HZNT0001000200030004
```
```
BR11HZNT0009000800070006
```
```
ZA90UBMT1234567890000001
```
```
ZA12UBMT1234567890000002
```
```
ZA33UBMT1234567890000003
```
```
ZA44UBMT1234567890000004
```
```
JP02SAKT00001234567890
```
```
JP77SAKT00000987654321
```
```
JP15SAKT00000011223344
```
```
BR39HZNT0001000200030004
```
```
BR11HZNT0009000800070006
```
```
ZA90UBMT1234567890000001
```
```
ZA12UBMT1234567890000002
```
```
ZA33UBMT1234567890000003
```
```
ZA44UBMT1234567890000004
```
```
JP79SMIR000000000123456789
```
```
JP79SMIR000000000987654321
```
```
BR15CERR0000000000004321001
```
```
JP79SMIR000000000123456789
```
```
JP79SMIR000000000987654321
```
```
BR15CERR0000000000004321001
```
```
CH9300230000987654321
```
```
ES9100491500123456789012
```
```
CH9300230000987654321
```
```
ES9100491500123456789012
```

# Generation 3
## Category baseline
```
!new Bank('b14')
!b14.name := 'Banco do Atlântico, S.A.'
!b14.country := 'Portugal'
!b14.bic := 'ATLNPTL1XXX'

!new Bank('b15')
!b15.name := 'Türkiye Finans Bankası'
!b15.country := 'Türkiye'
!b15.bic := 'TFINTRISXXX'

!new Bank('b16')
!b16.name := 'Nairobi Heritage Bank'
!b16.country := 'Kenya'
!b16.bic := 'NHERKE22XXX'

!new Person('p33')
!p33.firstName := 'Catarina'
!p33.lastName := 'Sousa'
!p33.age := 29

!new Person('p34')
!p34.firstName := 'Emre'
!p34.lastName := 'Yılmaz'
!p34.age := 52

!new Person('p35')
!p35.firstName := 'Aylin'
!p35.lastName := 'Demir'
!p35.age := 33

!new Person('p36')
!p36.firstName := 'João'
!p36.lastName := 'Pereira'
!p36.age := 19

!new Account('a20')
!a20.iban := 'PT50 0002 0123 1234 5678 9015 4'
!a20.balance := 150

!new Account('a21')
!a21.iban := 'TR33 0006 1005 1978 6457 8413 26'
!a21.balance := 4300

!new Account('a22')
!a22.iban := 'TR12 0014 2000 0099 8877 6655 44'
!a22.balance := 50

!new Account('a23')
!a23.iban := 'PT08 0002 0123 9876 5432 1098 7'
!a23.balance := 20000

!insert (b14, a20) into AccountOfBanks
!insert (b14, a23) into AccountOfBanks
!insert (b15, a21) into AccountOfBanks
!insert (b15, a22) into AccountOfBanks

!insert (p33, a20) into Ownership
!insert (p34, a21) into Ownership
!insert (p35, a21) into Ownership
!insert (p36, a22) into Ownership
!insert (p33, a23) into Ownership
!insert (p35, a23) into Ownership

!insert (p33, a20) into Use
!insert (p36, a20) into Use

!insert (p35, a21) into Use

!insert (p34, a23) into Use
!insert (p33, a23) into Use
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 55 | 0.00% |
| Multiplicities Errors | 0 | 15 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 2 | 4 | 50.00% |
| IBANs (Realistic) | 0 | 4 | 0.00% |
| BICs (Realistic) | 0 | 3 | 0.00% |
| Countries (Realistic) | 0 | 3 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
TR120014200000998877665544
```
```
PT08000201239876543210987
```
```
TR120014200000998877665544
```
```
PT08000201239876543210987
```

## Category boundary
```
!new Bank('b30')
!b30.country := 'Kenya'
!b30.name := 'M-Pesa Community Bank'
!b30.bic := 'MPCBKENAXXX'

!new Bank('b31')
!b31.country := 'Canada'
!b31.name := 'Maple Leaf Credit Union'
!b31.bic := 'MLCUCATTXXX'

!new Bank('b32')
!b32.country := 'India'
!b32.name := 'Kanchan Cooperative Bank'
!b32.bic := 'KACBINBBXXX'

!new Person('p83')
!p83.firstName := 'Asha'
!p83.lastName := 'Njeri'
!p83.age := 18

!new Person('p84')
!p84.firstName := 'Gabriel'
!p84.lastName := 'Tremblay'
!p84.age := 35

!new Person('p85')
!p85.firstName := 'Farah'
!p85.lastName := 'Al-Sayed'
!p85.age := 28

!new Person('p86')
!p86.firstName := 'Hye-jin'
!p86.lastName := 'Park'
!p86.age := 41

!new Person('p87')
!p87.firstName := 'Mateo'
!p87.lastName := 'Ruiz'
!p87.age := 22

!new Person('p88')
!p88.firstName := 'Chinedu'
!p88.lastName := 'Okafor'
!p88.age := 16

!new Person('p89')
!p89.firstName := 'Eleanor'
!p89.lastName := 'Whitmore'
!p89.age := 90

!new Person('p90')
!p90.firstName := 'Zoltán'
!p90.lastName := 'Farkas'
!p90.age := 33

!new Person('p91')
!p91.firstName := 'Laila'
!p91.lastName := 'Benali'
!p91.age := 19

!new Person('p92')
!p92.firstName := 'Arjun'
!p92.lastName := 'Patel'
!p92.age := 18

!new Account('a49')
!a49.iban := 'KE-IBAN-000001'
!a49.balance := 0

!new Account('a50')
!a50.iban := 'KE-IBAN-000002'
!a50.balance := 10

!new Account('a51')
!a51.iban := 'KE-IBAN-000003'
!a51.balance := 999999999

!new Account('a52')
!a52.iban := 'CA-IBAN-900001'
!a52.balance := 0

!new Account('a53')
!a53.iban := 'IN-IBAN-100001'
!a53.balance := 1

!new Account('a54')
!a54.iban := 'IN-IBAN-100002'
!a54.balance := 0

!insert (b30, a49) into AccountOfBanks
!insert (b30, a50) into AccountOfBanks
!insert (b30, a51) into AccountOfBanks
!insert (b31, a52) into AccountOfBanks
!insert (b32, a53) into AccountOfBanks
!insert (b32, a54) into AccountOfBanks

!insert (p83, a49) into Ownership
!insert (p84, a49) into Ownership
!insert (p83, a50) into Ownership
!insert (p89, a51) into Ownership
!insert (p84, a52) into Ownership
!insert (p84, a53) into Ownership
!insert (p92, a53) into Ownership
!insert (p85, a54) into Ownership

!insert (p90, a49) into Use
!insert (p88, a49) into Use
!insert (p91, a49) into Use

!insert (p90, a51) into Use

!insert (p86, a52) into Use
!insert (p87, a52) into Use
!insert (p88, a52) into Use
!insert (p90, a52) into Use
!insert (p91, a52) into Use

!insert (p84, a53) into Use
!insert (p90, a53) into Use

!insert (p83, a54) into Use
!insert (p90, a54) into Use
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 97 | 0.00% |
| Multiplicities Errors | 0 | 27 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 6 | 6 | 100.00% |
| IBANs (Realistic) | 6 | 6 | 100.00% |
| BICs (Realistic) | 0 | 3 | 0.00% |
| Countries (Realistic) | 0 | 3 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
KEIBAN000001
```
```
KEIBAN000002
```
```
KEIBAN000003
```
```
CAIBAN900001
```
```
INIBAN100001
```
```
INIBAN100002
```
```
KEIBAN000001
```
```
KEIBAN000002
```
```
KEIBAN000003
```
```
CAIBAN900001
```
```
INIBAN100001
```
```
INIBAN100002
```

| Failed IBANs (Realistic) | 
|---| 
```
KEIBAN000001
```
```
KEIBAN000002
```
```
KEIBAN000003
```
```
CAIBAN900001
```
```
INIBAN100001
```
```
INIBAN100002
```
```
KEIBAN000001
```
```
KEIBAN000002
```
```
KEIBAN000003
```
```
CAIBAN900001
```
```
INIBAN100001
```
```
INIBAN100002
```

## Category complex
```
!new Bank('b37')
!b37.name := 'Banque Lumière et Commerce'
!b37.country := 'France'
!b37.bic := 'BLCOFRPPXXX'

!new Bank('b38')
!b38.name := 'Gulf Crescent Bank'
!b38.country := 'United Arab Emirates'
!b38.bic := 'GCRBAEADXXX'

!new Bank('b39')
!b39.name := 'Banca delle Dolomiti'
!b39.country := 'Italy'
!b39.bic := 'DOLTITMMXXX'

!new Person('p105')
!p105.firstName := 'Claire'
!p105.lastName := 'Moreau'
!p105.age := 46

!new Person('p106')
!p106.firstName := 'Étienne'
!p106.lastName := 'Moreau'
!p106.age := 48

!new Person('p107')
!p107.firstName := 'Yara'
!p107.lastName := 'Al Mansouri'
!p107.age := 35

!new Person('p108')
!p108.firstName := 'Khalid'
!p108.lastName := 'Al Mansouri'
!p108.age := 38

!new Person('p109')
!p109.firstName := 'Rania'
!p109.lastName := 'Haddad'
!p109.age := 29

!new Person('p110')
!p110.firstName := 'Matteo'
!p110.lastName := 'Bianchi'
!p110.age := 31

!new Person('p111')
!p111.firstName := 'Giulia'
!p111.lastName := 'Rossi'
!p111.age := 33

!new Person('p112')
!p112.firstName := 'Luca'
!p112.lastName := 'Conti'
!p112.age := 19

!new Person('p113')
!p113.firstName := 'Fatima'
!p113.lastName := 'Ben Youssef'
!p113.age := 52

!new Person('p114')
!p114.firstName := 'Sven'
!p114.lastName := 'Petersen'
!p114.age := 40

!new Person('p115')
!p115.firstName := 'Omar'
!p115.lastName := 'Nasser'
!p115.age := 16

!new Person('p116')
!p116.firstName := 'Léa'
!p116.lastName := 'Moreau'
!p116.age := 17

!new Account('a61')
!a61.iban := 'FR7630006000011234567890189'
!a61.balance := 12000

!new Account('a62')
!a62.iban := 'FR1420041010050500013M02606'
!a62.balance := 540

!new Account('a63')
!a63.iban := 'FR5930002005500000157845Z14'
!a63.balance := 300000

!new Account('a64')
!a64.iban := 'FR763000700011000997654321098'
!a64.balance := 50

!new Account('a65')
!a65.iban := 'AE070331234567890123456'
!a65.balance := 89000

!new Account('a66')
!a66.iban := 'AE120260000000123456789'
!a66.balance := 0

!new Account('a67')
!a67.iban := 'AE580090000000876543210'
!a67.balance := 7600

!new Account('a68')
!a68.iban := 'AE250020000000333222111'
!a68.balance := 1500

!new Account('a69')
!a69.iban := 'IT60X0542811101000000123456'
!a69.balance := 22000

!new Account('a70')
!a70.iban := 'IT12A0306909606100000012345'
!a70.balance := 400

!insert (b37, a61) into AccountOfBanks
!insert (b37, a62) into AccountOfBanks
!insert (b37, a63) into AccountOfBanks
!insert (b37, a64) into AccountOfBanks
!insert (b38, a65) into AccountOfBanks
!insert (b38, a66) into AccountOfBanks
!insert (b38, a67) into AccountOfBanks
!insert (b38, a68) into AccountOfBanks
!insert (b39, a69) into AccountOfBanks
!insert (b39, a70) into AccountOfBanks

!insert (p105, a61) into Ownership
!insert (p106, a61) into Ownership
!insert (p105, a62) into Ownership
!insert (p113, a63) into Ownership
!insert (p109, a64) into Ownership
!insert (p107, a65) into Ownership
!insert (p108, a65) into Ownership
!insert (p109, a66) into Ownership
!insert (p107, a66) into Ownership
!insert (p108, a67) into Ownership
!insert (p110, a68) into Ownership
!insert (p110, a69) into Ownership
!insert (p111, a69) into Ownership
!insert (p112, a70) into Ownership

!insert (p105, a61) into Use
!insert (p106, a61) into Use
!insert (p116, a61) into Use

!insert (p105, a62) into Use
!insert (p114, a62) into Use

!insert (p113, a63) into Use
!insert (p105, a63) into Use

!insert (p109, a64) into Use

!insert (p107, a65) into Use
!insert (p108, a65) into Use
!insert (p115, a65) into Use

!insert (p109, a66) into Use

!insert (p108, a67) into Use
!insert (p110, a67) into Use
!insert (p111, a67) into Use

!insert (p110, a68) into Use
!insert (p112, a68) into Use
!insert (p115, a68) into Use

!insert (p110, a69) into Use
!insert (p111, a69) into Use
!insert (p105, a69) into Use

!insert (p112, a70) into Use
!insert (p114, a70) into Use
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 137 | 0.00% |
| Multiplicities Errors | 0 | 47 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 6 | 10 | 60.00% |
| IBANs (Realistic) | 0 | 10 | 0.00% |
| BICs (Realistic) | 0 | 3 | 0.00% |
| Countries (Realistic) | 0 | 3 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
FR5930002005500000157845Z14
```
```
FR763000700011000997654321098
```
```
AE120260000000123456789
```
```
AE580090000000876543210
```
```
AE250020000000333222111
```
```
IT12A0306909606100000012345
```
```
FR5930002005500000157845Z14
```
```
FR763000700011000997654321098
```
```
AE120260000000123456789
```
```
AE580090000000876543210
```
```
AE250020000000333222111
```
```
IT12A0306909606100000012345
```

## Category edge
```
!new Bank('b28')
!b28.country := 'Iceland'
!b28.name := 'Íslandshaf Banki'
!b28.bic := 'ISHAFIS1'

!new Bank('b29')
!b29.country := 'United Arab Emirates'
!b29.name := 'Emirates Wadi Bank'
!b29.bic := 'EWAEBAXX'

!new Person('p73')
!p73.firstName := 'Freyja'
!p73.lastName := 'Jónsdóttir'
!p73.age := 18

!new Person('p74')
!p74.firstName := 'Omar'
!p74.lastName := 'Al-Nuaimi'
!p74.age := 18

!new Person('p75')
!p75.firstName := 'Lucía'
!p75.lastName := 'Fernández'
!p75.age := 36

!new Person('p76')
!p76.firstName := 'Marek'
!p76.lastName := 'Nowak'
!p76.age := 41

!new Person('p77')
!p77.firstName := 'Nia'
!p77.lastName := 'Dlamini'
!p77.age := 27

!new Person('p78')
!p78.firstName := 'Huy'
!p78.lastName := 'Nguyễn'
!p78.age := 52

!new Person('p79')
!p79.firstName := 'Aroha'
!p79.lastName := 'Te Rangi'
!p79.age := 2

!new Person('p80')
!p80.firstName := 'Yusuf'
!p80.lastName := 'Hassan'
!p80.age := 15

!new Person('p81')
!p81.firstName := 'Guðmundur'
!p81.lastName := 'Einarsson'
!p81.age := 110

!new Person('p82')
!p82.firstName := 'Priya'
!p82.lastName := 'Menon'
!p82.age := 19

!new Account('a45')
!a45.iban := 'IS14 0159 2600 7654 3210 34'
!a45.balance := 0

!new Account('a46')
!a46.iban := 'IS90 0159 2600 0000 0000 01'
!a46.balance := 2147483647

!new Account('a47')
!a47.iban := 'IS35 0159 2600 1111 2222 33'
!a47.balance := 1

!new Account('a48')
!a48.iban := 'AE07 0331 2345 6789 0123 456'
!a48.balance := 0

!insert (b28, a45) into AccountOfBanks
!insert (b28, a46) into AccountOfBanks
!insert (b28, a47) into AccountOfBanks
!insert (b29, a48) into AccountOfBanks

!insert (p73, a45) into Ownership
!insert (p74, a45) into Ownership

!insert (p74, a46) into Ownership

!insert (p74, a47) into Ownership
!insert (p81, a47) into Ownership

!insert (p82, a48) into Ownership

!insert (p75, a45) into Use
!insert (p76, a45) into Use
!insert (p77, a45) into Use
!insert (p78, a45) into Use
!insert (p79, a45) into Use
!insert (p80, a45) into Use

!insert (p74, a47) into Use
!insert (p76, a47) into Use

!insert (p82, a48) into Use
!insert (p75, a48) into Use
!insert (p80, a48) into Use
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 81 | 0.00% |
| Multiplicities Errors | 0 | 21 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 3 | 4 | 75.00% |
| IBANs (Realistic) | 0 | 4 | 0.00% |
| BICs (Realistic) | 0 | 2 | 0.00% |
| Countries (Realistic) | 0 | 2 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
IS14015926007654321034
```
```
IS90015926000000000001
```
```
IS35015926001111222233
```
```
IS14015926007654321034
```
```
IS90015926000000000001
```
```
IS35015926001111222233
```

## Category invalid
```
!new Bank('b35')
!b35.country := 'Ireland'
!b35.name := 'Bank of Ireland'
!b35.bic := 'BOFIIE2DXXX'

!new Bank('b36')
!b36.country := 'Italy'
!b36.name := 'Banca Popolare Etica'
!b36.bic := 'ETICIT22XXX'

!new Person('p99')
!p99.firstName := 'Siobhán'
!p99.lastName := 'O’Connor'
!p99.age := 28

!new Person('p100')
!p100.firstName := 'Giulia'
!p100.lastName := 'Rossi'
!p100.age := 31

!new Person('p101')
!p101.firstName := 'Marco'
!p101.lastName := 'Bianchi'
!p101.age := 34

!new Person('p102')
!p102.firstName := 'Fatima'
!p102.lastName := 'El-Sayed'
!p102.age := 29

!new Person('p103')
!p103.firstName := 'Luca'
!p103.lastName := 'Conti'
!p103.age := 37

!new Person('p104')
!p104.firstName := 'Paolo'
!p104.lastName := 'Ferraro'
!p104.age := 40

!new Account('a59')
!a59.iban := 'IE12 BOFI 9012 3456 7890 12'
!a59.balance := -1250

!new Account('a60')
!a60.iban := 'IT60 X054 2811 1010 0000 0123 456'
!a60.balance := 18650

!insert (b35, a59) into AccountOfBanks
!insert (b36, a60) into AccountOfBanks

!insert (p99, a59) into Ownership
!insert (p100, a60) into Ownership
!insert (p101, a60) into Ownership
!insert (p102, a60) into Ownership
!insert (p103, a60) into Ownership

!insert (p99, a59) into Use

!insert (p100, a60) into Use
!insert (p101, a60) into Use
!insert (p102, a60) into Use
!insert (p103, a60) into Use
!insert (p104, a60) into Use
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 13 | 7.69% |
| Invariants Errors (Not included on General) | 1 | 2 | 50.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `Ownership':
  Object `a60' of class `Account' is connected to 4 objects of class `Person'
  at association end `owner' but the multiplicity is specified as `1..2'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (2) `Account::positiveBalance': FAILED.
```

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 1 | 2 | 50.00% |
| IBANs (Realistic) | 0 | 2 | 0.00% |
| BICs (Realistic) | 0 | 2 | 0.00% |
| Countries (Realistic) | 0 | 2 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
IE12BOFI90123456789012
```
```
IE12BOFI90123456789012
```

## Generation 3 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 421 | 0.00% |
| Multiplicities Errors | 0 | 110 | 0.00% |
| Invariants Errors | 0 | 8 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 13 | 7.69% |
| Invariants Errors (Not included on General) | 1 | 2 | 50.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `Ownership':
  Object `a60' of class `Account' is connected to 4 objects of class `Person'
  at association end `owner' but the multiplicity is specified as `1..2'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (2) `Account::positiveBalance': FAILED.
```

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 18 | 26 | 69.23% |
| IBANs (Realistic) | 6 | 26 | 23.08% |
| BICs (Realistic) | 0 | 13 | 0.00% |
| Countries (Realistic) | 0 | 13 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
TR120014200000998877665544
```
```
PT08000201239876543210987
```
```
TR120014200000998877665544
```
```
PT08000201239876543210987
```
```
KEIBAN000001
```
```
KEIBAN000002
```
```
KEIBAN000003
```
```
CAIBAN900001
```
```
INIBAN100001
```
```
INIBAN100002
```
```
KEIBAN000001
```
```
KEIBAN000002
```
```
KEIBAN000003
```
```
CAIBAN900001
```
```
INIBAN100001
```
```
INIBAN100002
```
```
FR5930002005500000157845Z14
```
```
FR763000700011000997654321098
```
```
AE120260000000123456789
```
```
AE580090000000876543210
```
```
AE250020000000333222111
```
```
IT12A0306909606100000012345
```
```
FR5930002005500000157845Z14
```
```
FR763000700011000997654321098
```
```
AE120260000000123456789
```
```
AE580090000000876543210
```
```
AE250020000000333222111
```
```
IT12A0306909606100000012345
```
```
IS14015926007654321034
```
```
IS90015926000000000001
```
```
IS35015926001111222233
```
```
IS14015926007654321034
```
```
IS90015926000000000001
```
```
IS35015926001111222233
```
```
IE12BOFI90123456789012
```
```
IE12BOFI90123456789012
```

| Failed IBANs (Realistic) | 
|---| 
```
KEIBAN000001
```
```
KEIBAN000002
```
```
KEIBAN000003
```
```
CAIBAN900001
```
```
INIBAN100001
```
```
INIBAN100002
```
```
KEIBAN000001
```
```
KEIBAN000002
```
```
KEIBAN000003
```
```
CAIBAN900001
```
```
INIBAN100001
```
```
INIBAN100002
```

# Generation 4
## Category baseline
```
!new Bank('b26')
!b26.name := 'Riyadh Horizons Bank'
!b26.country := 'Saudi Arabia'
!b26.bic := 'RHHBSAJEXXX'

!new Bank('b27')
!b27.name := 'Caja del Norte'
!b27.country := 'Spain'
!b27.bic := 'CDNRESMMXXX'

!new Person('p68')
!p68.firstName := 'Ahmed'
!p68.lastName := 'Al-Qahtani'
!p68.age := 28

!new Person('p69')
!p69.firstName := 'Noor'
!p69.lastName := 'Al-Harbi'
!p69.age := 30

!new Person('p70')
!p70.firstName := 'Lucía'
!p70.lastName := 'Fernández'
!p70.age := 46

!new Person('p71')
!p71.firstName := 'Diego'
!p71.lastName := 'Martín'
!p71.age := 22

!new Person('p72')
!p72.firstName := 'Mei'
!p72.lastName := 'Tanaka'
!p72.age := 31

!new Account('a42')
!a42.iban := 'SA44 8000 0000 6080 1016 7519'
!a42.balance := 7350

!new Account('a43')
!a43.iban := 'ES91 2100 0418 4502 0005 1332'
!a43.balance := 40

!new Account('a44')
!a44.iban := 'ES30 0049 1500 1234 5678 9012'
!a44.balance := 1580

!insert (b26, a42) into AccountOfBanks
!insert (b27, a43) into AccountOfBanks
!insert (b27, a44) into AccountOfBanks

!insert (p68, a42) into Ownership
!insert (p69, a42) into Ownership
!insert (p70, a43) into Ownership
!insert (p71, a44) into Ownership

!insert (p68, a42) into Use
!insert (p72, a42) into Use

!insert (p71, a43) into Use

!insert (p71, a44) into Use
!insert (p70, a44) into Use
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 49 | 0.00% |
| Multiplicities Errors | 0 | 12 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 2 | 3 | 66.67% |
| IBANs (Realistic) | 0 | 3 | 0.00% |
| BICs (Realistic) | 0 | 2 | 0.00% |
| Countries (Realistic) | 0 | 2 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
SA4480000000608010167519
```
```
ES3000491500123456789012
```
```
SA4480000000608010167519
```
```
ES3000491500123456789012
```

## Category boundary
```
!new Bank('b43')
!b43.country := 'Iceland'
!b43.name := 'Alþingi Savings Bank'
!b43.bic := 'ALSBISREXXX'

!new Bank('b44')
!b44.country := 'Lebanon'
!b44.name := 'Banque du Levant'
!b44.bic := 'BDLVLB22XXX'

!new Person('p124')
!p124.firstName := 'Þór'
!p124.lastName := 'Einarsson'
!p124.age := 18

!new Person('p125')
!p125.firstName := 'Yvette'
!p125.lastName := 'Morel'
!p125.age := 121

!new Person('p126')
!p126.firstName := 'Rami'
!p126.lastName := 'Haddad'
!p126.age := 17

!new Person('p127')
!p127.firstName := 'María-José'
!p127.lastName := 'Quispe'
!p127.age := 29

!new Person('p128')
!p128.firstName := 'Saidou'
!p128.lastName := 'Traoré'
!p128.age := 38

!new Account('a77')
!a77.iban := 'IS64 0000 0000 0000 0000 0000 01'
!a77.balance := 0

!new Account('a78')
!a78.iban := 'LB20 0999 0000 0000 0000 0001 23'
!a78.balance := 2000000000

!new Account('a79')
!a79.iban := 'LB20 0999 0000 0000 0000 0004 56'
!a79.balance := 0

!insert (b43, a77) into AccountOfBanks
!insert (b44, a78) into AccountOfBanks
!insert (b44, a79) into AccountOfBanks

!insert (p124, a77) into Ownership
!insert (p124, a78) into Ownership
!insert (p125, a78) into Ownership
!insert (p125, a79) into Ownership

!insert (p127, a78) into Use
!insert (p126, a79) into Use
!insert (p127, a79) into Use
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 47 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 3 | 3 | 100.00% |
| IBANs (Realistic) | 0 | 3 | 0.00% |
| BICs (Realistic) | 0 | 2 | 0.00% |
| Countries (Realistic) | 0 | 2 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
IS640000000000000000000001
```
```
LB200999000000000000000123
```
```
LB200999000000000000000456
```
```
IS640000000000000000000001
```
```
LB200999000000000000000123
```
```
LB200999000000000000000456
```

## Category complex
```
!new Bank('b47')
!b47.name := 'Delta Noord Bank'
!b47.country := 'Netherlands'
!b47.bic := 'DNBANL2AXXX'

!new Bank('b48')
!b48.name := 'Anadolu Katılım Bankası'
!b48.country := 'Turkey'
!b48.bic := 'ANKBTRISXXX'

!new Bank('b49')
!b49.name := 'Aegean Cooperative Bank'
!b49.country := 'Greece'
!b49.bic := 'AEGEGR2AXXX'

!new Bank('b50')
!b50.name := 'Banque Carthage Nouvelle'
!b50.country := 'Tunisia'
!b50.bic := 'BCNOTNTTXXX'

!new Person('p136')
!p136.firstName := 'Jeroen'
!p136.lastName := 'van Dijk'
!p136.age := 56

!new Person('p137')
!p137.firstName := 'Saskia'
!p137.lastName := 'de Boer'
!p137.age := 49

!new Person('p138')
!p138.firstName := 'Elif'
!p138.lastName := 'Yılmaz'
!p138.age := 32

!new Person('p139')
!p139.firstName := 'Cem'
!p139.lastName := 'Kaya'
!p139.age := 36

!new Person('p140')
!p140.firstName := 'Selin'
!p140.lastName := 'Kaya'
!p140.age := 19

!new Person('p141')
!p141.firstName := 'Nikos'
!p141.lastName := 'Papadopoulos'
!p141.age := 28

!new Person('p142')
!p142.firstName := 'Maria'
!p142.lastName := 'Konstantinou'
!p142.age := 26

!new Person('p143')
!p143.firstName := 'Fatma'
!p143.lastName := 'Ben Salah'
!p143.age := 44

!new Person('p144')
!p144.firstName := 'Hichem'
!p144.lastName := 'Trabelsi'
!p144.age := 47

!new Person('p145')
!p145.firstName := 'Aoife'
!p145.lastName := 'Byrne'
!p145.age := 21

!new Person('p146')
!p146.firstName := 'Daan'
!p146.lastName := 'van Dijk'
!p146.age := 17

!new Person('p147')
!p147.firstName := 'Yannis'
!p147.lastName := 'Papadopoulos'
!p147.age := 15

!new Account('a85')
!a85.iban := 'NL91DNB A0417164300'
!a85.balance := 18450

!new Account('a86')
!a86.iban := 'NL14DNB A0928374650'
!a86.balance := 6000

!new Account('a87')
!a87.iban := 'NL02DNB A5566778899'
!a87.balance := 0

!new Account('a88')
!a88.iban := 'NL67DNB A1029384756'
!a88.balance := 95

!new Account('a89')
!a89.iban := 'TR330006100519786457841326'
!a89.balance := 225000

!new Account('a90')
!a90.iban := 'TR120001000000123456789012'
!a90.balance := 4100

!new Account('a91')
!a91.iban := 'TR450001000000987654321098'
!a91.balance := 780

!new Account('a92')
!a92.iban := 'GR1601101250000000012300695'
!a92.balance := 1320

!new Account('a93')
!a93.iban := 'GR3901101250000000012300777'
!a93.balance := 50500

!new Account('a94')
!a94.iban := 'GR7401101250000000012300888'
!a94.balance := 260

!new Account('a95')
!a95.iban := 'TN5904005155101000001234'
!a95.balance := 9100

!insert (b47, a85) into AccountOfBanks
!insert (b47, a86) into AccountOfBanks
!insert (b47, a87) into AccountOfBanks
!insert (b47, a88) into AccountOfBanks
!insert (b48, a89) into AccountOfBanks
!insert (b48, a90) into AccountOfBanks
!insert (b48, a91) into AccountOfBanks
!insert (b49, a92) into AccountOfBanks
!insert (b49, a93) into AccountOfBanks
!insert (b49, a94) into AccountOfBanks
!insert (b50, a95) into AccountOfBanks

!insert (p136, a85) into Ownership
!insert (p136, a86) into Ownership
!insert (p137, a86) into Ownership
!insert (p145, a87) into Ownership
!insert (p140, a88) into Ownership
!insert (p138, a89) into Ownership
!insert (p139, a89) into Ownership
!insert (p139, a90) into Ownership
!insert (p138, a91) into Ownership
!insert (p141, a92) into Ownership
!insert (p142, a92) into Ownership
!insert (p141, a93) into Ownership
!insert (p142, a94) into Ownership
!insert (p143, a95) into Ownership
!insert (p144, a95) into Ownership

!insert (p136, a85) into Use
!insert (p137, a85) into Use
!insert (p146, a85) into Use

!insert (p145, a87) into Use
!insert (p136, a87) into Use

!insert (p140, a88) into Use
!insert (p138, a88) into Use

!insert (p138, a89) into Use
!insert (p139, a89) into Use
!insert (p140, a89) into Use

!insert (p139, a90) into Use

!insert (p138, a91) into Use
!insert (p146, a91) into Use

!insert (p141, a92) into Use
!insert (p142, a92) into Use
!insert (p147, a92) into Use

!insert (p142, a94) into Use
!insert (p145, a94) into Use

!insert (p143, a95) into Use
!insert (p144, a95) into Use
!insert (p137, a95) into Use
!insert (p139, a95) into Use
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 145 | 0.00% |
| Multiplicities Errors | 0 | 48 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 9 | 11 | 81.82% |
| IBANs (Realistic) | 0 | 11 | 0.00% |
| BICs (Realistic) | 0 | 4 | 0.00% |
| Countries (Realistic) | 0 | 4 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
NL91DNBA0417164300
```
```
NL14DNBA0928374650
```
```
NL02DNBA5566778899
```
```
NL67DNBA1029384756
```
```
TR120001000000123456789012
```
```
TR450001000000987654321098
```
```
GR3901101250000000012300777
```
```
GR7401101250000000012300888
```
```
TN5904005155101000001234
```
```
NL91DNBA0417164300
```
```
NL14DNBA0928374650
```
```
NL02DNBA5566778899
```
```
NL67DNBA1029384756
```
```
TR120001000000123456789012
```
```
TR450001000000987654321098
```
```
GR3901101250000000012300777
```
```
GR7401101250000000012300888
```
```
TN5904005155101000001234
```

## Category edge
```
!new Bank('b40')
!b40.country := 'New Zealand'
!b40.name := 'Turtle Bay Credit Union'
!b40.bic := 'TBCUNZ21'

!new Bank('b41')
!b41.country := 'Switzerland'
!b41.name := 'Alpine Kantonalbank'
!b41.bic := 'AKBSCHZZ'

!new Bank('b42')
!b42.country := 'Morocco'
!b42.name := 'Sahara Postbank'
!b42.bic := 'SAHAPOMA'

!new Person('p117')
!p117.firstName := 'Kea'
!p117.lastName := 'Rangi'
!p117.age := 18

!new Person('p118')
!p118.firstName := 'Leïla'
!p118.lastName := 'Benomar'
!p118.age := 19

!new Person('p119')
!p119.firstName := 'Hansjörg'
!p119.lastName := 'Keller'
!p119.age := 130

!new Person('p120')
!p120.firstName := 'Mateo'
!p120.lastName := 'García'
!p120.age := 25

!new Person('p121')
!p121.firstName := 'Asha'
!p121.lastName := 'Nair'
!p121.age := 17

!new Person('p122')
!p122.firstName := 'Zuri'
!p122.lastName := 'Okoye'
!p122.age := 0

!new Person('p123')
!p123.firstName := 'Sven'
!p123.lastName := 'Lindström'
!p123.age := 18

!new Account('a71')
!a71.iban := 'NZ17TBCU000000000001'
!a71.balance := 0

!new Account('a72')
!a72.iban := 'NZ65TBCU000000000002'
!a72.balance := 500

!new Account('a73')
!a73.iban := 'CH93AKBS000000000003'
!a73.balance := 999999999

!new Account('a74')
!a74.iban := 'CH11AKBS000000000004'
!a74.balance := 0

!new Account('a75')
!a75.iban := 'CH70AKBS000000000005'
!a75.balance := 1

!new Account('a76')
!a76.iban := 'MA64SAHA000000000006'
!a76.balance := 0

!insert (b40, a71) into AccountOfBanks
!insert (b40, a72) into AccountOfBanks
!insert (b41, a73) into AccountOfBanks
!insert (b41, a74) into AccountOfBanks
!insert (b41, a75) into AccountOfBanks
!insert (b42, a76) into AccountOfBanks

!insert (p117, a71) into Ownership
!insert (p117, a72) into Ownership
!insert (p118, a72) into Ownership
!insert (p119, a73) into Ownership
!insert (p119, a74) into Ownership
!insert (p118, a74) into Ownership
!insert (p123, a75) into Ownership
!insert (p118, a76) into Ownership

!insert (p120, a71) into Use
!insert (p121, a71) into Use
!insert (p122, a71) into Use

!insert (p120, a73) into Use

!insert (p120, a74) into Use
!insert (p117, a74) into Use

!insert (p123, a75) into Use

!insert (p120, a76) into Use
!insert (p121, a76) into Use
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 81 | 0.00% |
| Multiplicities Errors | 0 | 23 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 6 | 6 | 100.00% |
| IBANs (Realistic) | 0 | 6 | 0.00% |
| BICs (Realistic) | 0 | 3 | 0.00% |
| Countries (Realistic) | 0 | 3 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
NZ17TBCU000000000001
```
```
NZ65TBCU000000000002
```
```
CH93AKBS000000000003
```
```
CH11AKBS000000000004
```
```
CH70AKBS000000000005
```
```
MA64SAHA000000000006
```
```
NZ17TBCU000000000001
```
```
NZ65TBCU000000000002
```
```
CH93AKBS000000000003
```
```
CH11AKBS000000000004
```
```
CH70AKBS000000000005
```
```
MA64SAHA000000000006
```

## Category invalid
```
!new Bank('b54')
!b54.country := 'Spain'
!b54.name := 'Bankia, S.A.'
!b54.bic := 'BKAESMMXXX'

!new Bank('b55')
!b55.country := 'Spain'
!b55.name := 'CaixaBank, S.A.'
!b55.bic := 'CAIXESBBXXX'

!new Bank('b56')
!b56.country := 'Argentina'
!b56.name := 'Banco de la Nación Argentina'
!b56.bic := 'NACNARBAXXX'

!new Person('p152')
!p152.firstName := 'Youssef'
!p152.lastName := 'El Mansouri'
!p152.age := 36

!new Person('p153')
!p153.firstName := 'Laura'
!p153.lastName := 'García'
!p153.age := 34

!new Person('p154')
!p154.firstName := 'Jordi'
!p154.lastName := 'Pujol'
!p154.age := 63

!new Person('p155')
!p155.firstName := 'Marta'
!p155.lastName := 'Pujol'
!p155.age := 60

!new Account('a98')
!a98.iban := 'ES30 2038 4501 12 1234567890'
!a98.balance := 1450

!new Account('a99')
!a99.iban := 'ES92 2100 0418 4502 0005 1332'
!a99.balance := 6200

!insert (b55, a98) into AccountOfBanks
!insert (b55, a99) into AccountOfBanks

!insert (p152, a98) into Ownership
!insert (p154, a99) into Ownership
!insert (p155, a99) into Ownership

!insert (p152, a98) into Use
!insert (p153, a98) into Use

!insert (p154, a99) into Use
!insert (p155, a99) into Use
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 9 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 2 | 2 | 100.00% |
| IBANs (Realistic) | 0 | 2 | 0.00% |
| BICs (Realistic) | 1 | 3 | 33.33% |
| Countries (Realistic) | 0 | 3 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
ES3020384501121234567890
```
```
ES9221000418450200051332
```
```
ES3020384501121234567890
```
```
ES9221000418450200051332
```

| Failed BICs (Realistic) | 
|---| 
```
BKAESMMXXX
```

## Generation 4 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 365 | 0.00% |
| Multiplicities Errors | 0 | 93 | 0.00% |
| Invariants Errors | 0 | 8 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 9 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 22 | 25 | 88.00% |
| IBANs (Realistic) | 0 | 25 | 0.00% |
| BICs (Realistic) | 1 | 14 | 7.14% |
| Countries (Realistic) | 0 | 14 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
SA4480000000608010167519
```
```
ES3000491500123456789012
```
```
SA4480000000608010167519
```
```
ES3000491500123456789012
```
```
IS640000000000000000000001
```
```
LB200999000000000000000123
```
```
LB200999000000000000000456
```
```
IS640000000000000000000001
```
```
LB200999000000000000000123
```
```
LB200999000000000000000456
```
```
NL91DNBA0417164300
```
```
NL14DNBA0928374650
```
```
NL02DNBA5566778899
```
```
NL67DNBA1029384756
```
```
TR120001000000123456789012
```
```
TR450001000000987654321098
```
```
GR3901101250000000012300777
```
```
GR7401101250000000012300888
```
```
TN5904005155101000001234
```
```
NL91DNBA0417164300
```
```
NL14DNBA0928374650
```
```
NL02DNBA5566778899
```
```
NL67DNBA1029384756
```
```
TR120001000000123456789012
```
```
TR450001000000987654321098
```
```
GR3901101250000000012300777
```
```
GR7401101250000000012300888
```
```
TN5904005155101000001234
```
```
NZ17TBCU000000000001
```
```
NZ65TBCU000000000002
```
```
CH93AKBS000000000003
```
```
CH11AKBS000000000004
```
```
CH70AKBS000000000005
```
```
MA64SAHA000000000006
```
```
NZ17TBCU000000000001
```
```
NZ65TBCU000000000002
```
```
CH93AKBS000000000003
```
```
CH11AKBS000000000004
```
```
CH70AKBS000000000005
```
```
MA64SAHA000000000006
```
```
ES3020384501121234567890
```
```
ES9221000418450200051332
```
```
ES3020384501121234567890
```
```
ES9221000418450200051332
```

| Failed BICs (Realistic) | 
|---| 
```
BKAESMMXXX
```

# Generation 5
## Category baseline
```
!new Bank('b33')
!b33.name := 'Aegean Trust Bank'
!b33.country := 'Greece'
!b33.bic := 'AETRGRAAXXX'

!new Bank('b34')
!b34.name := 'Nordlys Sparebank'
!b34.country := 'Norway'
!b34.bic := 'NLSBNO21XXX'

!new Person('p93')
!p93.firstName := 'Eleni'
!p93.lastName := 'Papadopoulos'
!p93.age := 37

!new Person('p94')
!p94.firstName := 'Giorgos'
!p94.lastName := 'Nikolaidis'
!p94.age := 39

!new Person('p95')
!p95.firstName := 'Rania'
!p95.lastName := 'Ibrahim'
!p95.age := 26

!new Person('p96')
!p96.firstName := 'Lars'
!p96.lastName := 'Nygård'
!p96.age := 58

!new Person('p97')
!p97.firstName := 'Ingrid'
!p97.lastName := 'Johansen'
!p97.age := 55

!new Person('p98')
!p98.firstName := 'Tomasz'
!p98.lastName := 'Kowalski'
!p98.age := 24

!new Account('a55')
!a55.iban := 'GR16 0110 1250 0000 0001 2300 695'
!a55.balance := 0

!new Account('a56')
!a56.iban := 'GR94 0140 1320 0000 0003 5200 115'
!a56.balance := 320

!new Account('a57')
!a57.iban := 'GR03 0171 2100 0000 0009 8765 432'
!a57.balance := 50000

!new Account('a58')
!a58.iban := 'NO93 8601 1117 947'
!a58.balance := 1250

!insert (b33, a55) into AccountOfBanks
!insert (b33, a56) into AccountOfBanks
!insert (b33, a57) into AccountOfBanks
!insert (b34, a58) into AccountOfBanks

!insert (p93, a55) into Ownership
!insert (p93, a56) into Ownership
!insert (p94, a56) into Ownership
!insert (p95, a57) into Ownership
!insert (p96, a58) into Ownership
!insert (p97, a58) into Ownership

!insert (p93, a55) into Use
!insert (p98, a55) into Use

!insert (p94, a56) into Use

!insert (p95, a57) into Use
!insert (p93, a57) into Use

!insert (p96, a58) into Use
!insert (p98, a58) into Use
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 61 | 0.00% |
| Multiplicities Errors | 0 | 17 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 2 | 4 | 50.00% |
| IBANs (Realistic) | 0 | 4 | 0.00% |
| BICs (Realistic) | 0 | 2 | 0.00% |
| Countries (Realistic) | 0 | 2 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
GR9401401320000000035200115
```
```
GR0301712100000000098765432
```
```
GR9401401320000000035200115
```
```
GR0301712100000000098765432
```

## Category boundary
```
!new Bank('b57')
!b57.country := 'Switzerland'
!b57.name := 'Helvetia Privatbank'
!b57.bic := 'HPBKCHZZXXX'

!new Bank('b58')
!b58.country := 'United Arab Emirates'
!b58.name := 'Emirates Pearl Bank'
!b58.bic := 'EPBLAEADXXX'

!new Bank('b59')
!b59.country := 'South Africa'
!b59.name := 'Ubuntu Mutual'
!b59.bic := 'UBMUZAJJXXX'

!new Bank('b60')
!b60.country := 'Mexico'
!b60.name := 'Banco Sierra Norte'
!b60.bic := 'BSNOMXMMXXX'

!new Person('p156')
!p156.firstName := 'Noor'
!p156.lastName := 'Al-Khatib'
!p156.age := 18

!new Person('p157')
!p157.firstName := 'Léon'
!p157.lastName := 'Mercier'
!p157.age := 19

!new Person('p158')
!p158.firstName := 'Thandi'
!p158.lastName := 'Mokoena'
!p158.age := 45

!new Person('p159')
!p159.firstName := 'Iñaki'
!p159.lastName := 'Echeverría'
!p159.age := 31

!new Person('p160')
!p160.firstName := 'Anya'
!p160.lastName := 'Petrova'
!p160.age := 60

!new Person('p161')
!p161.firstName := 'Salma'
!p161.lastName := 'Ben Jelloun'
!p161.age := 17

!new Person('p162')
!p162.firstName := 'Kenji'
!p162.lastName := 'Sato'
!p162.age := 26

!new Account('a100')
!a100.iban := 'CH93 0076 2011 6238 5295 7'
!a100.balance := 0

!new Account('a101')
!a101.iban := 'CH12 0023 0000 0000 0000 1'
!a101.balance := 1

!new Account('a102')
!a102.iban := 'CH55 0483 5012 3456 7800 9'
!a102.balance := 0

!new Account('a103')
!a103.iban := 'CH01 9999 0000 0000 0004 2'
!a103.balance := 2147483647

!new Account('a104')
!a104.iban := 'CH88 1234 0000 0000 0005 5'
!a104.balance := 42

!insert (b57, a100) into AccountOfBanks
!insert (b57, a101) into AccountOfBanks
!insert (b57, a102) into AccountOfBanks
!insert (b57, a103) into AccountOfBanks
!insert (b57, a104) into AccountOfBanks

!insert (p156, a100) into Ownership
!insert (p156, a101) into Ownership
!insert (p157, a101) into Ownership
!insert (p157, a102) into Ownership
!insert (p159, a103) into Ownership
!insert (p160, a103) into Ownership
!insert (p160, a104) into Ownership

!insert (p158, a101) into Use
!insert (p161, a101) into Use

!insert (p158, a102) into Use

!insert (p158, a103) into Use

!insert (p158, a104) into Use
!insert (p159, a104) into Use
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 77 | 0.00% |
| Multiplicities Errors | 0 | 18 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 4 | 5 | 80.00% |
| IBANs (Realistic) | 0 | 5 | 0.00% |
| BICs (Realistic) | 0 | 4 | 0.00% |
| Countries (Realistic) | 0 | 4 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
CH1200230000000000001
```
```
CH5504835012345678009
```
```
CH0199990000000000042
```
```
CH8812340000000000055
```
```
CH1200230000000000001
```
```
CH5504835012345678009
```
```
CH0199990000000000042
```
```
CH8812340000000000055
```

## Category complex
```
!new Bank('b73')
!b73.name := 'Helvetia Alpine Bank SA'
!b73.country := 'Switzerland'
!b73.bic := 'HABSCHZZXXX'

!new Bank('b74')
!b74.name := 'Bank Polski Północny'
!b74.country := 'Poland'
!b74.bic := 'BPPWPLPWXXX'

!new Bank('b75')
!b75.name := 'Banco do Tejo e Mar'
!b75.country := 'Portugal'
!b75.bic := 'BTMAPTPLXXX'

!new Bank('b76')
!b76.name := 'Riyadh Meridian Bank'
!b76.country := 'Saudi Arabia'
!b76.bic := 'RMBKSAJEXXX'

!new Bank('b77')
!b77.name := 'Emerald Digital Bank'
!b77.country := 'Ireland'
!b77.bic := 'EMDLIE2DXXX'

!new Person('p190')
!p190.firstName := 'Lukas'
!p190.lastName := 'Meier'
!p190.age := 50

!new Person('p191')
!p191.firstName := 'Sofia'
!p191.lastName := 'Rossi'
!p191.age := 42

!new Person('p192')
!p192.firstName := 'Piotr'
!p192.lastName := 'Kowalczyk'
!p192.age := 37

!new Person('p193')
!p193.firstName := 'Agnieszka'
!p193.lastName := 'Zielińska'
!p193.age := 36

!new Person('p194')
!p194.firstName := 'Ewa'
!p194.lastName := 'Nowak'
!p194.age := 29

!new Person('p195')
!p195.firstName := 'Joana'
!p195.lastName := 'Fernandes'
!p195.age := 33

!new Person('p196')
!p196.firstName := 'Tiago'
!p196.lastName := 'Silva'
!p196.age := 35

!new Person('p197')
!p197.firstName := 'Inês'
!p197.lastName := 'Pereira'
!p197.age := 18

!new Person('p198')
!p198.firstName := 'Faisal'
!p198.lastName := 'Al Harbi'
!p198.age := 46

!new Person('p199')
!p199.firstName := 'Nour'
!p199.lastName := 'Al Qahtani'
!p199.age := 31

!new Person('p200')
!p200.firstName := 'Maryam'
!p200.lastName := 'Al Rashid'
!p200.age := 24

!new Person('p201')
!p201.firstName := 'Seán'
!p201.lastName := 'O’Rourke'
!p201.age := 27

!new Person('p202')
!p202.firstName := 'Aoife'
!p202.lastName := 'Gallagher'
!p202.age := 54

!new Account('a124')
!a124.iban := 'CH9300762011623852957'
!a124.balance := 128400

!new Account('a125')
!a125.iban := 'CH5604835012345678009'
!a125.balance := 9200

!new Account('a126')
!a126.iban := 'CH2109000000123456789'
!a126.balance := 450

!new Account('a127')
!a127.iban := 'PL61109010140000071219812874'
!a127.balance := 31600

!new Account('a128')
!a128.iban := 'PL10105000997654321012345678'
!a128.balance := 7800

!new Account('a129')
!a129.iban := 'PL88114020040000300201355387'
!a129.balance := 120

!new Account('a130')
!a130.iban := 'PT50000201231234567890154'
!a130.balance := 20400

!new Account('a131')
!a131.iban := 'PT50003501231230000456789'
!a131.balance := 995

!new Account('a132')
!a132.iban := 'SA0380000000608010167519'
!a132.balance := 67000

!new Account('a133')
!a133.iban := 'SA4420000001234567891234'
!a133.balance := 5100

!new Account('a134')
!a134.iban := 'SA1505000000987654321098'
!a134.balance := 250000

!new Account('a135')
!a135.iban := 'IE29AIBK93115212345678'
!a135.balance := 3400

!insert (b73, a124) into AccountOfBanks
!insert (b73, a125) into AccountOfBanks
!insert (b73, a126) into AccountOfBanks
!insert (b74, a127) into AccountOfBanks
!insert (b74, a128) into AccountOfBanks
!insert (b74, a129) into AccountOfBanks
!insert (b75, a130) into AccountOfBanks
!insert (b75, a131) into AccountOfBanks
!insert (b76, a132) into AccountOfBanks
!insert (b76, a133) into AccountOfBanks
!insert (b76, a134) into AccountOfBanks
!insert (b77, a135) into AccountOfBanks

!insert (p190, a124) into Ownership
!insert (p190, a125) into Ownership
!insert (p191, a125) into Ownership
!insert (p202, a126) into Ownership

!insert (p192, a127) into Ownership
!insert (p193, a127) into Ownership
!insert (p192, a128) into Ownership
!insert (p197, a129) into Ownership

!insert (p195, a130) into Ownership
!insert (p196, a130) into Ownership
!insert (p195, a131) into Ownership

!insert (p198, a132) into Ownership
!insert (p199, a132) into Ownership
!insert (p200, a133) into Ownership
!insert (p198, a134) into Ownership
!insert (p200, a134) into Ownership

!insert (p201, a135) into Ownership

!insert (p194, a124) into Use
!insert (p190, a124) into Use

!insert (p191, a125) into Use
!insert (p201, a125) into Use
!insert (p194, a125) into Use

!insert (p194, a126) into Use

!insert (p192, a127) into Use
!insert (p193, a127) into Use
!insert (p194, a127) into Use

!insert (p194, a128) into Use
!insert (p201, a128) into Use

!insert (p197, a129) into Use
!insert (p195, a129) into Use
!insert (p194, a129) into Use

!insert (p195, a130) into Use
!insert (p196, a130) into Use
!insert (p199, a130) into Use
!insert (p194, a130) into Use

!insert (p201, a131) into Use
!insert (p194, a131) into Use

!insert (p198, a132) into Use
!insert (p199, a132) into Use
!insert (p200, a132) into Use
!insert (p194, a132) into Use

!insert (p200, a133) into Use
!insert (p194, a133) into Use

!insert (p194, a134) into Use
!insert (p201, a134) into Use

!insert (p201, a135) into Use
!insert (p190, a135) into Use
!insert (p197, a135) into Use
!insert (p194, a135) into Use
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 169 | 0.00% |
| Multiplicities Errors | 0 | 61 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 5 | 12 | 41.67% |
| IBANs (Realistic) | 0 | 12 | 0.00% |
| BICs (Realistic) | 0 | 5 | 0.00% |
| Countries (Realistic) | 0 | 5 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
CH2109000000123456789
```
```
PL10105000997654321012345678
```
```
PL88114020040000300201355387
```
```
PT50003501231230000456789
```
```
SA1505000000987654321098
```
```
CH2109000000123456789
```
```
PL10105000997654321012345678
```
```
PL88114020040000300201355387
```
```
PT50003501231230000456789
```
```
SA1505000000987654321098
```

## Category edge
```
!new Bank('b61')
!b61.country := 'Norway'
!b61.name := 'Nordfjord Sparebank'
!b61.bic := 'NORSNO22'

!new Bank('b62')
!b62.country := 'Chile'
!b62.name := 'Andes Digital Bank'
!b62.bic := 'ANDBCLRM'

!new Person('p163')
!p163.firstName := 'Amina'
!p163.lastName := 'Ouédraogo'
!p163.age := 18

!new Person('p164')
!p164.firstName := 'Einar'
!p164.lastName := 'Håkonsson'
!p164.age := 101

!new Person('p165')
!p165.firstName := 'Chihiro'
!p165.lastName := 'Sato'
!p165.age := 29

!new Person('p166')
!p166.firstName := 'Mateo'
!p166.lastName := 'Quispe'
!p166.age := 17

!new Person('p167')
!p167.firstName := 'Laila'
!p167.lastName := 'Hassan'
!p167.age := 40

!new Person('p168')
!p168.firstName := 'Zola'
!p168.lastName := 'Mbeki'
!p168.age := 8

!new Account('a105')
!a105.iban := 'NO93 8601 1117 947'
!a105.balance := 0

!new Account('a106')
!a106.iban := 'NO12 8601 2222 103'
!a106.balance := 0

!new Account('a107')
!a107.iban := 'NO44 8601 3333 812'
!a107.balance := 2147483647

!new Account('a108')
!a108.iban := 'NO58 8601 4444 290'
!a108.balance := 1

!new Account('a109')
!a109.iban := 'NO76 8601 5555 667'
!a109.balance := 0

!new Account('a110')
!a110.iban := 'NO03 8601 6666 451'
!a110.balance := 0

!new Account('a111')
!a111.iban := 'CL19 ANDB 0000 0000 0000 0701'
!a111.balance := 0

!insert (b61, a105) into AccountOfBanks
!insert (b61, a106) into AccountOfBanks
!insert (b61, a107) into AccountOfBanks
!insert (b61, a108) into AccountOfBanks
!insert (b61, a109) into AccountOfBanks
!insert (b61, a110) into AccountOfBanks
!insert (b62, a111) into AccountOfBanks

!insert (p163, a105) into Ownership
!insert (p164, a105) into Ownership
!insert (p163, a106) into Ownership
!insert (p164, a106) into Ownership
!insert (p163, a107) into Ownership
!insert (p163, a108) into Ownership
!insert (p163, a109) into Ownership
!insert (p163, a110) into Ownership
!insert (p164, a111) into Ownership

!insert (p165, a105) into Use
!insert (p166, a105) into Use
!insert (p168, a105) into Use

!insert (p168, a106) into Use

!insert (p165, a107) into Use
!insert (p168, a107) into Use

!insert (p164, a109) into Use
!insert (p168, a109) into Use

!insert (p165, a110) into Use
!insert (p168, a110) into Use

!insert (p165, a111) into Use
!insert (p166, a111) into Use
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 81 | 0.00% |
| Multiplicities Errors | 0 | 28 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 6 | 7 | 85.71% |
| IBANs (Realistic) | 0 | 7 | 0.00% |
| BICs (Realistic) | 0 | 2 | 0.00% |
| Countries (Realistic) | 0 | 2 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
NO1286012222103
```
```
NO4486013333812
```
```
NO5886014444290
```
```
NO7686015555667
```
```
NO0386016666451
```
```
CL19ANDB0000000000000701
```
```
NO1286012222103
```
```
NO4486013333812
```
```
NO5886014444290
```
```
NO7686015555667
```
```
NO0386016666451
```
```
CL19ANDB0000000000000701
```

## Category invalid
```
!new Bank('b72')
!b72.country := 'Belgium'
!b72.name := 'KBC Bank NV'
!b72.bic := 'KREDBEBB'

!new Person('p185')
!p185.firstName := 'An'
!p185.lastName := 'Van den Broeck'
!p185.age := 46

!new Person('p186')
!p186.firstName := 'Bram'
!p186.lastName := 'Van den Broeck'
!p186.age := 44

!new Person('p187')
!p187.firstName := 'Chantal'
!p187.lastName := 'Van den Broeck'
!p187.age := 41

!new Person('p188')
!p188.firstName := 'Diederik'
!p188.lastName := 'Van den Broeck'
!p188.age := 38

!new Person('p189')
!p189.firstName := 'Lamia'
!p189.lastName := 'El Khatib'
!p189.age := 33

!new Account('a122')
!a122.iban := 'BE71 5390 0754 3210'
!a122.balance := 18250

!new Account('a123')
!a123.iban := 'BE24 9795 1300 1107'
!a123.balance := 6400

!insert (b72, a122) into AccountOfBanks
!insert (b72, a123) into AccountOfBanks

!insert (p185, a122) into Ownership
!insert (p186, a122) into Ownership
!insert (p187, a122) into Ownership
!insert (p188, a122) into Ownership

!insert (p185, a123) into Ownership

!insert (p185, a122) into Use
!insert (p186, a122) into Use
!insert (p187, a122) into Use
!insert (p188, a122) into Use
!insert (p189, a122) into Use

!insert (p185, a123) into Use
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 13 | 7.69% |
| Invariants Errors (Not included on General) | 0 | 2 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `Ownership':
  Object `a122' of class `Account' is connected to 4 objects of class `Person'
  at association end `owner' but the multiplicity is specified as `1..2'.
```

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 2 | 2 | 100.00% |
| IBANs (Realistic) | 0 | 2 | 0.00% |
| BICs (Realistic) | 0 | 1 | 0.00% |
| Countries (Realistic) | 0 | 1 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
BE71539007543210
```
```
BE24979513001107
```
```
BE71539007543210
```
```
BE24979513001107
```

## Generation 5 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 431 | 0.00% |
| Multiplicities Errors | 0 | 124 | 0.00% |
| Invariants Errors | 0 | 8 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 13 | 7.69% |
| Invariants Errors (Not included on General) | 0 | 2 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `Ownership':
  Object `a122' of class `Account' is connected to 4 objects of class `Person'
  at association end `owner' but the multiplicity is specified as `1..2'.
```

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 19 | 30 | 63.33% |
| IBANs (Realistic) | 0 | 30 | 0.00% |
| BICs (Realistic) | 0 | 14 | 0.00% |
| Countries (Realistic) | 0 | 14 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
GR9401401320000000035200115
```
```
GR0301712100000000098765432
```
```
GR9401401320000000035200115
```
```
GR0301712100000000098765432
```
```
CH1200230000000000001
```
```
CH5504835012345678009
```
```
CH0199990000000000042
```
```
CH8812340000000000055
```
```
CH1200230000000000001
```
```
CH5504835012345678009
```
```
CH0199990000000000042
```
```
CH8812340000000000055
```
```
CH2109000000123456789
```
```
PL10105000997654321012345678
```
```
PL88114020040000300201355387
```
```
PT50003501231230000456789
```
```
SA1505000000987654321098
```
```
CH2109000000123456789
```
```
PL10105000997654321012345678
```
```
PL88114020040000300201355387
```
```
PT50003501231230000456789
```
```
SA1505000000987654321098
```
```
NO1286012222103
```
```
NO4486013333812
```
```
NO5886014444290
```
```
NO7686015555667
```
```
NO0386016666451
```
```
CL19ANDB0000000000000701
```
```
NO1286012222103
```
```
NO4486013333812
```
```
NO5886014444290
```
```
NO7686015555667
```
```
NO0386016666451
```
```
CL19ANDB0000000000000701
```
```
BE71539007543210
```
```
BE24979513001107
```
```
BE71539007543210
```
```
BE24979513001107
```

# Generation 6
## Category baseline
```
!new Bank('b45')
!b45.name := 'Jadran Komercijalna Banka'
!b45.country := 'Croatia'
!b45.bic := 'JAKBHR22XXX'

!new Bank('b46')
!b46.name := 'River Liffey Bank'
!b46.country := 'Ireland'
!b46.bic := 'RLFBIE2DXXX'

!new Person('p129')
!p129.firstName := 'Ivana'
!p129.lastName := 'Kovač'
!p129.age := 32

!new Person('p130')
!p130.firstName := 'Marko'
!p130.lastName := 'Kovač'
!p130.age := 35

!new Person('p131')
!p131.firstName := 'Milan'
!p131.lastName := 'Petrović'
!p131.age := 70

!new Person('p132')
!p132.firstName := 'Amina'
!p132.lastName := 'Okafor'
!p132.age := 29

!new Person('p133')
!p133.firstName := 'Seán'
!p133.lastName := 'O’Connor'
!p133.age := 44

!new Person('p134')
!p134.firstName := 'Niamh'
!p134.lastName := 'Byrne'
!p134.age := 42

!new Person('p135')
!p135.firstName := 'Luka'
!p135.lastName := 'Kovač'
!p135.age := 15

!new Account('a80')
!a80.iban := 'HR12 1234 5678 9012 3456 7'
!a80.balance := 905

!new Account('a81')
!a81.iban := 'HR45 1234 5678 0000 1122 3'
!a81.balance := 27000

!new Account('a82')
!a82.iban := 'HR88 1234 5678 9999 0000 1'
!a82.balance := 15

!new Account('a83')
!a83.iban := 'HR66 1234 5678 5555 4444 0'
!a83.balance := 6000

!new Account('a84')
!a84.iban := 'IE29 AIBK 9311 5212 3456 78'
!a84.balance := 110

!insert (b45, a80) into AccountOfBanks
!insert (b45, a81) into AccountOfBanks
!insert (b45, a82) into AccountOfBanks
!insert (b45, a83) into AccountOfBanks
!insert (b46, a84) into AccountOfBanks

!insert (p129, a80) into Ownership
!insert (p129, a81) into Ownership
!insert (p130, a81) into Ownership
!insert (p131, a82) into Ownership
!insert (p132, a83) into Ownership
!insert (p133, a84) into Ownership
!insert (p134, a84) into Ownership

!insert (p129, a80) into Use
!insert (p130, a80) into Use
!insert (p135, a80) into Use

!insert (p131, a82) into Use
!insert (p133, a82) into Use

!insert (p130, a83) into Use

!insert (p133, a84) into Use
!insert (p132, a84) into Use
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 71 | 0.00% |
| Multiplicities Errors | 0 | 20 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 4 | 5 | 80.00% |
| IBANs (Realistic) | 0 | 5 | 0.00% |
| BICs (Realistic) | 0 | 2 | 0.00% |
| Countries (Realistic) | 0 | 2 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
HR1212345678901234567
```
```
HR4512345678000011223
```
```
HR8812345678999900001
```
```
HR6612345678555544440
```
```
HR1212345678901234567
```
```
HR4512345678000011223
```
```
HR8812345678999900001
```
```
HR6612345678555544440
```

## Category boundary
```
!new Bank('b67')
!b67.country := 'New Zealand'
!b67.name := 'Aotearoa Kauri Bank'
!b67.bic := 'AOKBNZ2WXXX'

!new Bank('b68')
!b68.country := 'Finland'
!b68.name := 'Suomi Säästöpankki'
!b68.bic := 'SSSPFIHHXXX'

!new Bank('b69')
!b69.country := 'Chile'
!b69.name := 'Banco Andino Austral'
!b69.bic := 'BAAUCLRMXXX'

!new Bank('b70')
!b70.country := 'Egypt'
!b70.name := 'Nile Horizon Bank'
!b70.bic := 'NHBKEGCAAAA'

!new Bank('b71')
!b71.country := 'Pakistan'
!b71.name := 'Punjab Highlands Bank'
!b71.bic := 'PHBLPKKAXXX'

!new Person('p176')
!p176.firstName := 'Mina'
!p176.lastName := 'Sørensen'
!p176.age := 18

!new Person('p177')
!p177.firstName := 'Wiremu'
!p177.lastName := 'Rangi'
!p177.age := 27

!new Person('p178')
!p178.firstName := 'Aino'
!p178.lastName := 'Virtanen'
!p178.age := 65

!new Person('p179')
!p179.firstName := 'Camila'
!p179.lastName := 'Fernández'
!p179.age := 34

!new Person('p180')
!p180.firstName := 'Youssef'
!p180.lastName := 'Abdelrahman'
!p180.age := 43

!new Person('p181')
!p181.firstName := 'Sana'
!p181.lastName := 'Khan'
!p181.age := 21

!new Person('p182')
!p182.firstName := 'Jari'
!p182.lastName := 'Niemi'
!p182.age := 30

!new Person('p183')
!p183.firstName := 'Tama'
!p183.lastName := 'Rangi'
!p183.age := 16

!new Person('p184')
!p184.firstName := 'Boubacar'
!p184.lastName := 'Diallo'
!p184.age := 50

!new Account('a117')
!a117.iban := 'NZ00 KAUR 0000 0000 0001'
!a117.balance := 0

!new Account('a118')
!a118.iban := 'FI21 1234 5600 0007 85'
!a118.balance := 1

!new Account('a119')
!a119.iban := 'CL01 1234 5678 9012 3456 78'
!a119.balance := 2147483646

!new Account('a120')
!a120.iban := 'EG20 0002 0000 0000 0000 0000 001'
!a120.balance := 0

!new Account('a121')
!a121.iban := 'PK88 PHBL 0000 0000 0000 0002'
!a121.balance := 7

!insert (b67, a117) into AccountOfBanks
!insert (b68, a118) into AccountOfBanks
!insert (b69, a119) into AccountOfBanks
!insert (b70, a120) into AccountOfBanks
!insert (b71, a121) into AccountOfBanks

!insert (p176, a117) into Ownership
!insert (p177, a117) into Ownership

!insert (p176, a118) into Ownership
!insert (p178, a118) into Ownership

!insert (p176, a119) into Ownership
!insert (p179, a119) into Ownership

!insert (p180, a120) into Ownership

!insert (p181, a121) into Ownership

!insert (p177, a117) into Use
!insert (p182, a117) into Use
!insert (p183, a117) into Use

!insert (p182, a119) into Use

!insert (p176, a120) into Use
!insert (p180, a120) into Use

!insert (p181, a121) into Use
!insert (p182, a121) into Use
!insert (p176, a121) into Use
!insert (p183, a121) into Use
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 94 | 0.00% |
| Multiplicities Errors | 0 | 23 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 4 | 5 | 80.00% |
| IBANs (Realistic) | 0 | 5 | 0.00% |
| BICs (Realistic) | 0 | 5 | 0.00% |
| Countries (Realistic) | 0 | 5 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
NZ00KAUR000000000001
```
```
CL01123456789012345678
```
```
EG2000020000000000000000001
```
```
PK88PHBL0000000000000002
```
```
NZ00KAUR000000000001
```
```
CL01123456789012345678
```
```
EG2000020000000000000000001
```
```
PK88PHBL0000000000000002
```

## Category complex
```
!new Bank('b79')
!b79.name := 'Oslo Sparebank'
!b79.country := 'Norway'
!b79.bic := 'OSPBNO22XXX'

!new Bank('b80')
!b80.name := 'Vilnius Fintech Bank'
!b80.country := 'Lithuania'
!b80.bic := 'VIFBLT21XXX'

!new Bank('b81')
!b81.name := 'Amman Development Bank'
!b81.country := 'Jordan'
!b81.bic := 'AMDBJOAMXXX'

!new Bank('b82')
!b82.name := 'London Community Bank'
!b82.country := 'United Kingdom'
!b82.bic := 'LDCBGB2LXXX'

!new Person('p207')
!p207.firstName := 'Ingrid'
!p207.lastName := 'Nilsen'
!p207.age := 58

!new Person('p208')
!p208.firstName := 'Erik'
!p208.lastName := 'Johansen'
!p208.age := 60

!new Person('p209')
!p209.firstName := 'Mantas'
!p209.lastName := 'Petrauskas'
!p209.age := 27

!new Person('p210')
!p210.firstName := 'Eglė'
!p210.lastName := 'Jankauskaitė'
!p210.age := 26

!new Person('p211')
!p211.firstName := 'Amina'
!p211.lastName := 'Al‑Khatib'
!p211.age := 34

!new Person('p212')
!p212.firstName := 'Omar'
!p212.lastName := 'Haddad'
!p212.age := 42

!new Person('p213')
!p213.firstName := 'Sara'
!p213.lastName := 'Haddad'
!p213.age := 17

!new Person('p214')
!p214.firstName := 'Thomas'
!p214.lastName := 'Reed'
!p214.age := 31

!new Person('p215')
!p215.firstName := 'Priya'
!p215.lastName := 'Shah'
!p215.age := 29

!new Person('p216')
!p216.firstName := 'Khaled'
!p216.lastName := 'Mansour'
!p216.age := 19

!new Account('a137')
!a137.iban := 'NO9386011117947'
!a137.balance := 24300

!new Account('a138')
!a138.iban := 'NO4260101309945'
!a138.balance := 8750

!new Account('a139')
!a139.iban := 'NO1786019988776'
!a139.balance := 500000

!new Account('a140')
!a140.iban := 'LT121000011101001000'
!a140.balance := 1400

!new Account('a141')
!a141.iban := 'LT601010012345678901'
!a141.balance := 60

!new Account('a142')
!a142.iban := 'LT457300010111222333'
!a142.balance := 9700

!new Account('a143')
!a143.iban := 'JO94AMDB0000000000001234567890'
!a143.balance := 220

!new Account('a144')
!a144.iban := 'JO21AMDB1111222233334444555566'
!a144.balance := 18200

!new Account('a145')
!a145.iban := 'GB29LDCB60161331926819'
!a145.balance := 3300

!insert (b79, a137) into AccountOfBanks
!insert (b79, a138) into AccountOfBanks
!insert (b79, a139) into AccountOfBanks
!insert (b80, a140) into AccountOfBanks
!insert (b80, a141) into AccountOfBanks
!insert (b80, a142) into AccountOfBanks
!insert (b81, a143) into AccountOfBanks
!insert (b81, a144) into AccountOfBanks
!insert (b82, a145) into AccountOfBanks

!insert (p207, a137) into Ownership
!insert (p207, a138) into Ownership
!insert (p208, a138) into Ownership
!insert (p208, a139) into Ownership

!insert (p209, a140) into Ownership
!insert (p210, a141) into Ownership
!insert (p214, a142) into Ownership
!insert (p209, a142) into Ownership

!insert (p211, a143) into Ownership
!insert (p212, a144) into Ownership
!insert (p211, a144) into Ownership

!insert (p214, a145) into Ownership

!insert (p207, a137) into Use

!insert (p215, a138) into Use
!insert (p214, a138) into Use
!insert (p207, a138) into Use

!insert (p209, a140) into Use
!insert (p211, a140) into Use
!insert (p214, a140) into Use

!insert (p210, a141) into Use

!insert (p215, a142) into Use
!insert (p216, a142) into Use

!insert (p211, a143) into Use
!insert (p212, a143) into Use
!insert (p213, a143) into Use

!insert (p212, a144) into Use

!insert (p214, a145) into Use
!insert (p215, a145) into Use
!insert (p207, a145) into Use
!insert (p211, a145) into Use
!insert (p216, a145) into Use
!insert (p213, a145) into Use
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 124 | 0.00% |
| Multiplicities Errors | 0 | 41 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 6 | 9 | 66.67% |
| IBANs (Realistic) | 0 | 9 | 0.00% |
| BICs (Realistic) | 0 | 4 | 0.00% |
| Countries (Realistic) | 0 | 4 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
NO4260101309945
```
```
NO1786019988776
```
```
LT457300010111222333
```
```
JO94AMDB0000000000001234567890
```
```
JO21AMDB1111222233334444555566
```
```
GB29LDCB60161331926819
```
```
NO4260101309945
```
```
NO1786019988776
```
```
LT457300010111222333
```
```
JO94AMDB0000000000001234567890
```
```
JO21AMDB1111222233334444555566
```
```
GB29LDCB60161331926819
```

## Category edge
```
!new Bank('b63')
!b63.country := 'Kenya'
!b63.name := 'Uhuru Community Bank'
!b63.bic := 'UCBKKE01'

!new Bank('b64')
!b64.country := 'Germany'
!b64.name := 'NordWert Bank'
!b64.bic := 'NWBKDEFF'

!new Bank('b65')
!b65.country := 'Singapore'
!b65.name := 'Merlion Digital Bank'
!b65.bic := 'MLDBSGSG'

!new Bank('b66')
!b66.country := 'Canada'
!b66.name := 'Aurora Northern Bank'
!b66.bic := 'AUNBCAWA'

!new Person('p169')
!p169.firstName := 'Imani'
!p169.lastName := 'Njoroge'
!p169.age := 18

!new Person('p170')
!p170.firstName := 'Jonas'
!p170.lastName := 'Feldmann'
!p170.age := 19

!new Person('p171')
!p171.firstName := 'Nur'
!p171.lastName := 'Hidayah'
!p171.age := 34

!new Person('p172')
!p172.firstName := 'Ethel'
!p172.lastName := 'MacLeod'
!p172.age := 104

!new Person('p173')
!p173.firstName := 'Wei'
!p173.lastName := 'Lim'
!p173.age := 17

!new Person('p174')
!p174.firstName := 'Amara'
!p174.lastName := 'Okafor'
!p174.age := 3

!new Person('p175')
!p175.firstName := 'Pavel'
!p175.lastName := 'Novák'
!p175.age := 16

!new Account('a112')
!a112.iban := 'KE21UCBK000000000000101'
!a112.balance := 0

!new Account('a113')
!a113.iban := 'KE21UCBK000000000000102'
!a113.balance := 12

!new Account('a114')
!a114.iban := 'DE44NWBK000000000000201'
!a114.balance := 2147483647

!new Account('a115')
!a115.iban := 'SG12MLDB000000000000301'
!a115.balance := 1

!new Account('a116')
!a116.iban := 'SG12MLDB000000000000302'
!a116.balance := 0

!insert (b63, a112) into AccountOfBanks
!insert (b63, a113) into AccountOfBanks
!insert (b64, a114) into AccountOfBanks
!insert (b65, a115) into AccountOfBanks
!insert (b65, a116) into AccountOfBanks

!insert (p169, a112) into Ownership
!insert (p172, a112) into Ownership

!insert (p169, a113) into Ownership
!insert (p170, a113) into Ownership

!insert (p169, a114) into Ownership
!insert (p172, a114) into Ownership

!insert (p170, a115) into Ownership
!insert (p170, a116) into Ownership

!insert (p171, a112) into Use

!insert (p171, a113) into Use
!insert (p173, a113) into Use
!insert (p174, a113) into Use
!insert (p175, a113) into Use
!insert (p170, a113) into Use

!insert (p170, a115) into Use
!insert (p171, a115) into Use
!insert (p173, a115) into Use

!insert (p171, a116) into Use
!insert (p173, a116) into Use
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 83 | 0.00% |
| Multiplicities Errors | 0 | 24 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 5 | 5 | 100.00% |
| IBANs (Realistic) | 0 | 5 | 0.00% |
| BICs (Realistic) | 0 | 4 | 0.00% |
| Countries (Realistic) | 0 | 4 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
KE21UCBK000000000000101
```
```
KE21UCBK000000000000102
```
```
DE44NWBK000000000000201
```
```
SG12MLDB000000000000301
```
```
SG12MLDB000000000000302
```
```
KE21UCBK000000000000101
```
```
KE21UCBK000000000000102
```
```
DE44NWBK000000000000201
```
```
SG12MLDB000000000000301
```
```
SG12MLDB000000000000302
```

## Category invalid
```
!new Bank('b78')
!b78.country := 'United Kingdom'
!b78.name := 'Barclays Bank PLC'
!b78.bic := 'BARCGB22'

!new Person('p203')
!p203.firstName := 'Aisha'
!p203.lastName := 'Khan'
!p203.age := 50

!new Person('p204')
!p204.firstName := 'Peter'
!p204.lastName := 'O’Neill'
!p204.age := 47

!new Person('p205')
!p205.firstName := 'Mei Ling'
!p205.lastName := 'Tan'
!p205.age := 55

!new Person('p206')
!p206.firstName := 'Santiago'
!p206.lastName := 'Pérez'
!p206.age := 29

!new Account('a136')
!a136.iban := 'GB29 BARC 2001 1234 5678 90'
!a136.balance := 5300

!insert (b78, a136) into AccountOfBanks

!insert (p203, a136) into Ownership
!insert (p204, a136) into Ownership
!insert (p205, a136) into Ownership

!insert (p203, a136) into Use
!insert (p204, a136) into Use
!insert (p205, a136) into Use
!insert (p206, a136) into Use
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 8 | 12.50% |
| Invariants Errors (Not included on General) | 0 | 2 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `Ownership':
  Object `a136' of class `Account' is connected to 3 objects of class `Person'
  at association end `owner' but the multiplicity is specified as `1..2'.
```

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 1 | 1 | 100.00% |
| IBANs (Realistic) | 0 | 1 | 0.00% |
| BICs (Realistic) | 0 | 1 | 0.00% |
| Countries (Realistic) | 0 | 1 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
GB29BARC20011234567890
```
```
GB29BARC20011234567890
```

## Generation 6 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 403 | 0.00% |
| Multiplicities Errors | 0 | 108 | 0.00% |
| Invariants Errors | 0 | 8 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 8 | 12.50% |
| Invariants Errors (Not included on General) | 0 | 2 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `Ownership':
  Object `a136' of class `Account' is connected to 3 objects of class `Person'
  at association end `owner' but the multiplicity is specified as `1..2'.
```

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 20 | 25 | 80.00% |
| IBANs (Realistic) | 0 | 25 | 0.00% |
| BICs (Realistic) | 0 | 16 | 0.00% |
| Countries (Realistic) | 0 | 16 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
HR1212345678901234567
```
```
HR4512345678000011223
```
```
HR8812345678999900001
```
```
HR6612345678555544440
```
```
HR1212345678901234567
```
```
HR4512345678000011223
```
```
HR8812345678999900001
```
```
HR6612345678555544440
```
```
NZ00KAUR000000000001
```
```
CL01123456789012345678
```
```
EG2000020000000000000000001
```
```
PK88PHBL0000000000000002
```
```
NZ00KAUR000000000001
```
```
CL01123456789012345678
```
```
EG2000020000000000000000001
```
```
PK88PHBL0000000000000002
```
```
NO4260101309945
```
```
NO1786019988776
```
```
LT457300010111222333
```
```
JO94AMDB0000000000001234567890
```
```
JO21AMDB1111222233334444555566
```
```
GB29LDCB60161331926819
```
```
NO4260101309945
```
```
NO1786019988776
```
```
LT457300010111222333
```
```
JO94AMDB0000000000001234567890
```
```
JO21AMDB1111222233334444555566
```
```
GB29LDCB60161331926819
```
```
KE21UCBK000000000000101
```
```
KE21UCBK000000000000102
```
```
DE44NWBK000000000000201
```
```
SG12MLDB000000000000301
```
```
SG12MLDB000000000000302
```
```
KE21UCBK000000000000101
```
```
KE21UCBK000000000000102
```
```
DE44NWBK000000000000201
```
```
SG12MLDB000000000000301
```
```
SG12MLDB000000000000302
```
```
GB29BARC20011234567890
```
```
GB29BARC20011234567890
```

# Summary for all generations
| Summary | Value | 
|---|---| 
| Model | GPT_5_2 | 
| Type | CoT | 
| System | bank | 
| Number of generations | 6 | 

| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 2236 | 0.00% |
| Multiplicities Errors | 0 | 580 | 0.00% |
| Invariants Errors | 0 | 48 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 5 | 63 | 7.94% |
| Invariants Errors (Not included on General) | 4 | 12 | 33.33% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `Ownership':
  Object `a8' of class `Account' is connected to 3 objects of class `Person'
  at association end `owner' but the multiplicity is specified as `1..2'.
```
```
Multiplicity constraint violation in association `Ownership':
  Object `a40' of class `Account' is connected to 0 objects of class `Person'
  at association end `owner' but the multiplicity is specified as `1..2'.
```
```
Multiplicity constraint violation in association `Ownership':
  Object `a60' of class `Account' is connected to 4 objects of class `Person'
  at association end `owner' but the multiplicity is specified as `1..2'.
```
```
Multiplicity constraint violation in association `Ownership':
  Object `a122' of class `Account' is connected to 4 objects of class `Person'
  at association end `owner' but the multiplicity is specified as `1..2'.
```
```
Multiplicity constraint violation in association `Ownership':
  Object `a136' of class `Account' is connected to 3 objects of class `Person'
  at association end `owner' but the multiplicity is specified as `1..2'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (1) `Account::AdultOwners': FAILED.
```
```
checking invariant (2) `Account::positiveBalance': FAILED.
```
```
checking invariant (1) `Account::AdultOwners': FAILED.
```
```
checking invariant (2) `Account::positiveBalance': FAILED.
```

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 106 | 143 | 74.13% |
| IBANs (Realistic) | 6 | 143 | 4.20% |
| BICs (Realistic) | 1 | 79 | 1.27% |
| Countries (Realistic) | 0 | 79 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
BR1500000000000000000000001
```
```
BR7200000000000000000000002
```
```
BR1500000000000000000000001
```
```
BR7200000000000000000000002
```
```
ES7900491500310012345678
```
```
MA6400005000080012345678901
```
```
MA9300021020210012345678901
```
```
ES7900491500310012345678
```
```
MA6400005000080012345678901
```
```
MA9300021020210012345678901
```
```
FR1430006000011234567890189
```
```
NL55SNSB0917161234
```
```
FR1430006000011234567890189
```
```
NL55SNSB0917161234
```
```
MA6400000000123456789012345
```
```
FI8765432100001109
```
```
MA6400000000123456789012345
```
```
FI8765432100001109
```
```
DE11700900000000000101
```
```
DE22700900000000000202
```
```
DE33700900000000000303
```
```
DE44700900000000000404
```
```
DE11700900000000000101
```
```
DE22700900000000000202
```
```
DE33700900000000000303
```
```
DE44700900000000000404
```
```
JP02SAKT00001234567890
```
```
JP77SAKT00000987654321
```
```
JP15SAKT00000011223344
```
```
BR39HZNT0001000200030004
```
```
BR11HZNT0009000800070006
```
```
ZA90UBMT1234567890000001
```
```
ZA12UBMT1234567890000002
```
```
ZA33UBMT1234567890000003
```
```
ZA44UBMT1234567890000004
```
```
JP02SAKT00001234567890
```
```
JP77SAKT00000987654321
```
```
JP15SAKT00000011223344
```
```
BR39HZNT0001000200030004
```
```
BR11HZNT0009000800070006
```
```
ZA90UBMT1234567890000001
```
```
ZA12UBMT1234567890000002
```
```
ZA33UBMT1234567890000003
```
```
ZA44UBMT1234567890000004
```
```
JP79SMIR000000000123456789
```
```
JP79SMIR000000000987654321
```
```
BR15CERR0000000000004321001
```
```
JP79SMIR000000000123456789
```
```
JP79SMIR000000000987654321
```
```
BR15CERR0000000000004321001
```
```
CH9300230000987654321
```
```
ES9100491500123456789012
```
```
CH9300230000987654321
```
```
ES9100491500123456789012
```
```
TR120014200000998877665544
```
```
PT08000201239876543210987
```
```
TR120014200000998877665544
```
```
PT08000201239876543210987
```
```
KEIBAN000001
```
```
KEIBAN000002
```
```
KEIBAN000003
```
```
CAIBAN900001
```
```
INIBAN100001
```
```
INIBAN100002
```
```
KEIBAN000001
```
```
KEIBAN000002
```
```
KEIBAN000003
```
```
CAIBAN900001
```
```
INIBAN100001
```
```
INIBAN100002
```
```
FR5930002005500000157845Z14
```
```
FR763000700011000997654321098
```
```
AE120260000000123456789
```
```
AE580090000000876543210
```
```
AE250020000000333222111
```
```
IT12A0306909606100000012345
```
```
FR5930002005500000157845Z14
```
```
FR763000700011000997654321098
```
```
AE120260000000123456789
```
```
AE580090000000876543210
```
```
AE250020000000333222111
```
```
IT12A0306909606100000012345
```
```
IS14015926007654321034
```
```
IS90015926000000000001
```
```
IS35015926001111222233
```
```
IS14015926007654321034
```
```
IS90015926000000000001
```
```
IS35015926001111222233
```
```
IE12BOFI90123456789012
```
```
IE12BOFI90123456789012
```
```
SA4480000000608010167519
```
```
ES3000491500123456789012
```
```
SA4480000000608010167519
```
```
ES3000491500123456789012
```
```
IS640000000000000000000001
```
```
LB200999000000000000000123
```
```
LB200999000000000000000456
```
```
IS640000000000000000000001
```
```
LB200999000000000000000123
```
```
LB200999000000000000000456
```
```
NL91DNBA0417164300
```
```
NL14DNBA0928374650
```
```
NL02DNBA5566778899
```
```
NL67DNBA1029384756
```
```
TR120001000000123456789012
```
```
TR450001000000987654321098
```
```
GR3901101250000000012300777
```
```
GR7401101250000000012300888
```
```
TN5904005155101000001234
```
```
NL91DNBA0417164300
```
```
NL14DNBA0928374650
```
```
NL02DNBA5566778899
```
```
NL67DNBA1029384756
```
```
TR120001000000123456789012
```
```
TR450001000000987654321098
```
```
GR3901101250000000012300777
```
```
GR7401101250000000012300888
```
```
TN5904005155101000001234
```
```
NZ17TBCU000000000001
```
```
NZ65TBCU000000000002
```
```
CH93AKBS000000000003
```
```
CH11AKBS000000000004
```
```
CH70AKBS000000000005
```
```
MA64SAHA000000000006
```
```
NZ17TBCU000000000001
```
```
NZ65TBCU000000000002
```
```
CH93AKBS000000000003
```
```
CH11AKBS000000000004
```
```
CH70AKBS000000000005
```
```
MA64SAHA000000000006
```
```
ES3020384501121234567890
```
```
ES9221000418450200051332
```
```
ES3020384501121234567890
```
```
ES9221000418450200051332
```
```
GR9401401320000000035200115
```
```
GR0301712100000000098765432
```
```
GR9401401320000000035200115
```
```
GR0301712100000000098765432
```
```
CH1200230000000000001
```
```
CH5504835012345678009
```
```
CH0199990000000000042
```
```
CH8812340000000000055
```
```
CH1200230000000000001
```
```
CH5504835012345678009
```
```
CH0199990000000000042
```
```
CH8812340000000000055
```
```
CH2109000000123456789
```
```
PL10105000997654321012345678
```
```
PL88114020040000300201355387
```
```
PT50003501231230000456789
```
```
SA1505000000987654321098
```
```
CH2109000000123456789
```
```
PL10105000997654321012345678
```
```
PL88114020040000300201355387
```
```
PT50003501231230000456789
```
```
SA1505000000987654321098
```
```
NO1286012222103
```
```
NO4486013333812
```
```
NO5886014444290
```
```
NO7686015555667
```
```
NO0386016666451
```
```
CL19ANDB0000000000000701
```
```
NO1286012222103
```
```
NO4486013333812
```
```
NO5886014444290
```
```
NO7686015555667
```
```
NO0386016666451
```
```
CL19ANDB0000000000000701
```
```
BE71539007543210
```
```
BE24979513001107
```
```
BE71539007543210
```
```
BE24979513001107
```
```
HR1212345678901234567
```
```
HR4512345678000011223
```
```
HR8812345678999900001
```
```
HR6612345678555544440
```
```
HR1212345678901234567
```
```
HR4512345678000011223
```
```
HR8812345678999900001
```
```
HR6612345678555544440
```
```
NZ00KAUR000000000001
```
```
CL01123456789012345678
```
```
EG2000020000000000000000001
```
```
PK88PHBL0000000000000002
```
```
NZ00KAUR000000000001
```
```
CL01123456789012345678
```
```
EG2000020000000000000000001
```
```
PK88PHBL0000000000000002
```
```
NO4260101309945
```
```
NO1786019988776
```
```
LT457300010111222333
```
```
JO94AMDB0000000000001234567890
```
```
JO21AMDB1111222233334444555566
```
```
GB29LDCB60161331926819
```
```
NO4260101309945
```
```
NO1786019988776
```
```
LT457300010111222333
```
```
JO94AMDB0000000000001234567890
```
```
JO21AMDB1111222233334444555566
```
```
GB29LDCB60161331926819
```
```
KE21UCBK000000000000101
```
```
KE21UCBK000000000000102
```
```
DE44NWBK000000000000201
```
```
SG12MLDB000000000000301
```
```
SG12MLDB000000000000302
```
```
KE21UCBK000000000000101
```
```
KE21UCBK000000000000102
```
```
DE44NWBK000000000000201
```
```
SG12MLDB000000000000301
```
```
SG12MLDB000000000000302
```
```
GB29BARC20011234567890
```
```
GB29BARC20011234567890
```

| Failed IBANs (Realistic) | 
|---| 
```
KEIBAN000001
```
```
KEIBAN000002
```
```
KEIBAN000003
```
```
CAIBAN900001
```
```
INIBAN100001
```
```
INIBAN100002
```
```
KEIBAN000001
```
```
KEIBAN000002
```
```
KEIBAN000003
```
```
CAIBAN900001
```
```
INIBAN100001
```
```
INIBAN100002
```

| Failed BICs (Realistic) | 
|---| 
```
BKAESMMXXX
```

