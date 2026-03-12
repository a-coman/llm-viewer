# Generation 1
## Category baseline
```
!new Bank('creditNational')
!creditNational.country := 'France'
!creditNational.name := 'Crédit National'
!creditNational.bic := 'CNFRFRPPXXX'

!new Account('account2_1')
!account2_1.iban := 'FR7630004000031234567890185'
!account2_1.balance := 2500

!new Account('account2_2')
!account2_2.iban := 'FR7630004000039876543210284'
!account2_2.balance := 3500

!new Account('account2_3')
!account2_3.iban := 'FR7630004000037654321090187'
!account2_3.balance := 0

!new Person('jeanDupont')
!jeanDupont.firstName := 'Jean'
!jeanDupont.lastName := 'Dupont'
!jeanDupont.age := 32

!new Person('marieCharpentier')
!marieCharpentier.firstName := 'Marie'
!marieCharpentier.lastName := 'Charpentier'
!marieCharpentier.age := 28

!new Person('lucMartin')
!lucMartin.firstName := 'Luc'
!lucMartin.lastName := 'Martin'
!lucMartin.age := 45

!insert (creditNational, account2_1) into AccountOfBanks
!insert (creditNational, account2_2) into AccountOfBanks
!insert (creditNational, account2_3) into AccountOfBanks

!insert (jeanDupont, account2_1) into Ownership
!insert (marieCharpentier, account2_1) into Ownership

!insert (lucMartin, account2_2) into Ownership

!insert (jeanDupont, account2_3) into Ownership
!insert (lucMartin, account2_3) into Ownership

!insert (jeanDupont, account2_1) into Use
!insert (marieCharpentier, account2_1) into Use
!insert (lucMartin, account2_1) into Use

!insert (lucMartin, account2_2) into Use

!insert (jeanDupont, account2_3) into Use
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 38 | 0.00% |
| Multiplicities Errors | 0 | 13 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 3 | 3 | 100.00% |
| IBANs (Realistic) | 0 | 3 | 0.00% |
| BICs (Realistic) | 0 | 1 | 0.00% |
| Countries (Realistic) | 0 | 1 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
FR7630004000031234567890185
```
```
FR7630004000039876543210284
```
```
FR7630004000037654321090187
```
```
FR7630004000031234567890185
```
```
FR7630004000039876543210284
```
```
FR7630004000037654321090187
```

## Category boundary
```
!new Bank('naijaBank')
!naijaBank.country := 'Nigeria'
!naijaBank.name := 'NaijaBank'
!naijaBank.bic := 'NAIJBANKNG01'

!new Account('account1')
!account1.iban := 'NG29NAMA0000001234567890'
!account1.balance := 0

!new Person('adebolaOlatunji')
!adebolaOlatunji.firstName := 'Adebola'
!adebolaOlatunji.lastName := 'Olatunji'
!adebolaOlatunji.age := 25

!new Person('chijiokeOkeke')
!chijiokeOkeke.firstName := 'Chijioke'
!chijiokeOkeke.lastName := 'Okeke'
!chijiokeOkeke.age := 31

!new Person('tundeAdelaja')
!tundeAdelaja.firstName := 'Tunde'
!tundeAdelaja.lastName := 'Adelaja'
!tundeAdelaja.age := 35

!insert (naijaBank, account1) into AccountOfBanks
!insert (adebolaOlatunji, account1) into Ownership
!insert (chijiokeOkeke, account1) into Ownership

!insert (adebolaOlatunji, account1) into Use
!insert (chijiokeOkeke, account1) into Use
!insert (tundeAdelaja, account1) into Use
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 25 | 0.00% |
| Multiplicities Errors | 0 | 6 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 1 | 1 | 100.00% |
| IBANs (Realistic) | 0 | 1 | 0.00% |
| BICs (Realistic) | 1 | 1 | 100.00% |
| Countries (Realistic) | 0 | 1 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
NG29NAMA0000001234567890
```
```
NG29NAMA0000001234567890
```

| Failed BICs (Realistic) | 
|---| 
```
NAIJBANKNG01
```

## Category complex
```
!new Bank('globalBankUSA')
!globalBankUSA.country := 'United States'
!globalBankUSA.name := 'GlobalBank USA'
!globalBankUSA.bic := 'GBUS12345'

!new Bank('nihonBank')
!nihonBank.country := 'Japan'
!nihonBank.name := 'Nihon Bank'
!nihonBank.bic := 'NBJP67890'

!new Person('mariaGonzalez')
!mariaGonzalez.firstName := 'Maria'
!mariaGonzalez.lastName := 'Gonzalez'
!mariaGonzalez.age := 34

!new Person('akiraNakamura')
!akiraNakamura.firstName := 'Akira'
!akiraNakamura.lastName := 'Nakamura'
!akiraNakamura.age := 47

!new Person('johnSmith')
!johnSmith.firstName := 'John'
!johnSmith.lastName := 'Smith'
!johnSmith.age := 51

!new Person('emilyJohnson')
!emilyJohnson.firstName := 'Emily'
!emilyJohnson.lastName := 'Johnson'
!emilyJohnson.age := 29

!new Person('suryaPatel')
!suryaPatel.firstName := 'Surya'
!suryaPatel.lastName := 'Patel'
!suryaPatel.age := 41

!new Person('rioYamamoto')
!rioYamamoto.firstName := 'Rio'
!rioYamamoto.lastName := 'Yamamoto'
!rioYamamoto.age := 38

!new Account('account4_1')
!account4_1.iban := 'US1234567890A'
!account4_1.balance := 5000

!new Account('account4_2')
!account4_2.iban := 'JP0987654321B'
!account4_2.balance := 0

!new Account('account4_3')
!account4_3.iban := 'US1122334455C'
!account4_3.balance := 7500

!new Account('account4_4')
!account4_4.iban := 'JP2233445566D'
!account4_4.balance := 1200

!insert (globalBankUSA, account4_1) into AccountOfBanks
!insert (nihonBank, account4_2) into AccountOfBanks
!insert (globalBankUSA, account4_3) into AccountOfBanks
!insert (nihonBank, account4_4) into AccountOfBanks

!insert (mariaGonzalez, account4_1) into Ownership
!insert (johnSmith, account4_1) into Ownership

!insert (akiraNakamura, account4_2) into Ownership

!insert (emilyJohnson, account4_3) into Ownership

!insert (suryaPatel, account4_4) into Ownership
!insert (rioYamamoto, account4_4) into Ownership

!insert (mariaGonzalez, account4_1) into Use
!insert (johnSmith, account4_1) into Use
!insert (emilyJohnson, account4_1) into Use

!insert (akiraNakamura, account4_2) into Use
!insert (rioYamamoto, account4_2) into Use

!insert (emilyJohnson, account4_3) into Use

!insert (suryaPatel, account4_4) into Use
!insert (rioYamamoto, account4_4) into Use
!insert (akiraNakamura, account4_4) into Use
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 63 | 0.00% |
| Multiplicities Errors | 0 | 19 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 4 | 4 | 100.00% |
| IBANs (Realistic) | 4 | 4 | 100.00% |
| BICs (Realistic) | 2 | 2 | 100.00% |
| Countries (Realistic) | 0 | 2 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
US1234567890A
```
```
JP0987654321B
```
```
US1122334455C
```
```
JP2233445566D
```
```
US1234567890A
```
```
JP0987654321B
```
```
US1122334455C
```
```
JP2233445566D
```

| Failed IBANs (Realistic) | 
|---| 
```
US1234567890A
```
```
JP0987654321B
```
```
US1122334455C
```
```
JP2233445566D
```
```
US1234567890A
```
```
JP0987654321B
```
```
US1122334455C
```
```
JP2233445566D
```

| Failed BICs (Realistic) | 
|---| 
```
GBUS12345
```
```
NBJP67890
```

## Category edge
```
!new Bank('alpineTrustBank')
!alpineTrustBank.country := 'Switzerland'
!alpineTrustBank.name := 'Alpine Trust Bank'
!alpineTrustBank.bic := 'ALPCHZZTEST'

!new Person('ottoMuller')
!ottoMuller.firstName := 'Otto'
!ottoMuller.lastName := 'Müller'
!ottoMuller.age := 82

!new Person('annaMuller')
!annaMuller.firstName := 'Anna'
!annaMuller.lastName := 'Müller'
!annaMuller.age := 18

!new Person('svenJohansson')
!svenJohansson.firstName := 'Sven'
!svenJohansson.lastName := 'Johansson'
!svenJohansson.age := 40

!new Person('luciaRossi')
!luciaRossi.firstName := 'Lucia'
!luciaRossi.lastName := 'Rossi'
!luciaRossi.age := 55

!new Account('account5_1')
!account5_1.iban := 'CH93-0000-0000-1234'
!account5_1.balance := 0

!new Account('account5_2')
!account5_2.iban := 'CH18-0000-0000-5678'
!account5_2.balance := 10000000

!insert (alpineTrustBank, account5_1) into AccountOfBanks
!insert (alpineTrustBank, account5_2) into AccountOfBanks

!insert (ottoMuller, account5_1) into Ownership
!insert (annaMuller, account5_1) into Ownership

!insert (svenJohansson, account5_2) into Ownership
!insert (luciaRossi, account5_2) into Ownership

!insert (ottoMuller, account5_1) into Use
!insert (svenJohansson, account5_1) into Use

!insert (luciaRossi, account5_2) into Use
!insert (annaMuller, account5_2) into Use
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 36 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 2 | 2 | 100.00% |
| IBANs (Realistic) | 0 | 2 | 0.00% |
| BICs (Realistic) | 0 | 1 | 0.00% |
| Countries (Realistic) | 0 | 1 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
CH93000000001234
```
```
CH18000000005678
```
```
CH93000000001234
```
```
CH18000000005678
```

## Category invalid
```
!new Bank('bankAlpha')
!bankAlpha.country := 'Norway'
!bankAlpha.name := 'Nordic Financial Group'
!bankAlpha.bic := 'NFGNOR22'

!new Bank('bankPrime')
!bankPrime.country := 'Singapore'
!bankPrime.name := 'Pacific Trust Bank'
!bankPrime.bic := 'PTBSGSG1'

!new Person('mariaFernandez')
!mariaFernandez.firstName := 'Maria'
!mariaFernandez.lastName := 'Fernandez'
!mariaFernandez.age := 30

!new Person('larsHansen')
!larsHansen.firstName := 'Lars'
!larsHansen.lastName := 'Hansen'
!larsHansen.age := 25

!new Person('lingTan')
!lingTan.firstName := 'Ling'
!lingTan.lastName := 'Tan'
!lingTan.age := 28

!new Account('account3_1')
!account3_1.iban := 'NO93 8601 1117 947'
!account3_1.balance := 5000

!new Account('account3_2')
!account3_2.iban := 'SG18 6761 9120 885'
!account3_2.balance := 12000

!insert (bankAlpha, account3_1) into AccountOfBanks
!insert (bankPrime, account3_2) into AccountOfBanks

!insert (mariaFernandez, account3_1) into Ownership
!insert (larsHansen, account3_1) into Ownership

!insert (mariaFernandez, account3_2) into Ownership

!insert (mariaFernandez, account3_1) into Use
!insert (larsHansen, account3_1) into Use
!insert (lingTan, account3_1) into Use

!insert (mariaFernandez, account3_2) into Use
!insert (larsHansen, account3_2) into Use
!insert (lingTan, account3_2) into Use
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 11 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 1 | 2 | 50.00% |
| IBANs (Realistic) | 0 | 2 | 0.00% |
| BICs (Realistic) | 0 | 2 | 0.00% |
| Countries (Realistic) | 0 | 2 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
SG1867619120885
```
```
SG1867619120885
```

## Generation 1 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 199 | 0.00% |
| Multiplicities Errors | 0 | 48 | 0.00% |
| Invariants Errors | 0 | 8 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 11 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 11 | 12 | 91.67% |
| IBANs (Realistic) | 4 | 12 | 33.33% |
| BICs (Realistic) | 3 | 7 | 42.86% |
| Countries (Realistic) | 0 | 7 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
FR7630004000031234567890185
```
```
FR7630004000039876543210284
```
```
FR7630004000037654321090187
```
```
FR7630004000031234567890185
```
```
FR7630004000039876543210284
```
```
FR7630004000037654321090187
```
```
NG29NAMA0000001234567890
```
```
NG29NAMA0000001234567890
```
```
US1234567890A
```
```
JP0987654321B
```
```
US1122334455C
```
```
JP2233445566D
```
```
US1234567890A
```
```
JP0987654321B
```
```
US1122334455C
```
```
JP2233445566D
```
```
CH93000000001234
```
```
CH18000000005678
```
```
CH93000000001234
```
```
CH18000000005678
```
```
SG1867619120885
```
```
SG1867619120885
```

| Failed IBANs (Realistic) | 
|---| 
```
US1234567890A
```
```
JP0987654321B
```
```
US1122334455C
```
```
JP2233445566D
```
```
US1234567890A
```
```
JP0987654321B
```
```
US1122334455C
```
```
JP2233445566D
```

| Failed BICs (Realistic) | 
|---| 
```
NAIJBANKNG01
```
```
GBUS12345
```
```
NBJP67890
```

# Generation 2
## Category baseline
```
!new Bank('sumitomoMitsuiBankingCorp')
!sumitomoMitsuiBankingCorp.country := 'Japan'
!sumitomoMitsuiBankingCorp.name := 'Sumitomo Mitsui Banking Corporation'
!sumitomoMitsuiBankingCorp.bic := 'SMBCJPJTXXX'

!new Account('account6_1')
!account6_1.iban := 'JP668123455678987654321'
!account6_1.balance := 12000

!new Account('account6_2')
!account6_2.iban := 'JP668123455678123456789'
!account6_2.balance := 55000

!new Account('account6_3')
!account6_3.iban := 'JP668123455678234567891'
!account6_3.balance := 0

!new Account('account6_4')
!account6_4.iban := 'JP668123455678345678912'
!account6_4.balance := 20000

!new Person('harutoTanaka')
!harutoTanaka.firstName := 'Haruto'
!harutoTanaka.lastName := 'Tanaka'
!harutoTanaka.age := 39

!new Person('sakuraYamada')
!sakuraYamada.firstName := 'Sakura'
!sakuraYamada.lastName := 'Yamada'
!sakuraYamada.age := 27

!new Person('kenjiSaito')
!kenjiSaito.firstName := 'Kenji'
!kenjiSaito.lastName := 'Saito'
!kenjiSaito.age := 51

!new Person('aikoFujimoto')
!aikoFujimoto.firstName := 'Aiko'
!aikoFujimoto.lastName := 'Fujimoto'
!aikoFujimoto.age := 30

!insert (sumitomoMitsuiBankingCorp, account6_1) into AccountOfBanks
!insert (sumitomoMitsuiBankingCorp, account6_2) into AccountOfBanks
!insert (sumitomoMitsuiBankingCorp, account6_3) into AccountOfBanks
!insert (sumitomoMitsuiBankingCorp, account6_4) into AccountOfBanks

!insert (harutoTanaka, account6_1) into Ownership

!insert (sakuraYamada, account6_2) into Ownership
!insert (kenjiSaito, account6_2) into Ownership

!insert (aikoFujimoto, account6_3) into Ownership
!insert (harutoTanaka, account6_3) into Ownership

!insert (kenjiSaito, account6_4) into Ownership

!insert (harutoTanaka, account6_1) into Use
!insert (sakuraYamada, account6_1) into Use

!insert (kenjiSaito, account6_2) into Use

!insert (aikoFujimoto, account6_3) into Use
!insert (harutoTanaka, account6_3) into Use
!insert (kenjiSaito, account6_3) into Use

!insert (kenjiSaito, account6_4) into Use
!insert (sakuraYamada, account6_4) into Use
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 50 | 0.00% |
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
JP668123455678987654321
```
```
JP668123455678123456789
```
```
JP668123455678234567891
```
```
JP668123455678345678912
```
```
JP668123455678987654321
```
```
JP668123455678123456789
```
```
JP668123455678234567891
```
```
JP668123455678345678912
```

## Category boundary
```
!new Bank('sakuraBank')
!sakuraBank.country := 'Japan'
!sakuraBank.name := 'Sakura Bank'
!sakuraBank.bic := 'SAKRBANKJP01'

!new Account('account7')
!account7.iban := 'JP32SAKR0000009876543210'
!account7.balance := 10000000

!new Person('takashiYamada')
!takashiYamada.firstName := 'Takashi'
!takashiYamada.lastName := 'Yamada'
!takashiYamada.age := 45

!new Person('ayumiTanaka')
!ayumiTanaka.firstName := 'Ayumi'
!ayumiTanaka.lastName := 'Tanaka'
!ayumiTanaka.age := 20

!new Person('kenjiHayashi')
!kenjiHayashi.firstName := 'Kenji'
!kenjiHayashi.lastName := 'Hayashi'
!kenjiHayashi.age := 30

!insert (sakuraBank, account7) into AccountOfBanks

!insert (takashiYamada, account7) into Ownership

!insert (takashiYamada, account7) into Use
!insert (ayumiTanaka, account7) into Use
!insert (kenjiHayashi, account7) into Use
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 24 | 0.00% |
| Multiplicities Errors | 0 | 5 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 1 | 1 | 100.00% |
| IBANs (Realistic) | 0 | 1 | 0.00% |
| BICs (Realistic) | 1 | 1 | 100.00% |
| Countries (Realistic) | 0 | 1 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
JP32SAKR0000009876543210
```
```
JP32SAKR0000009876543210
```

| Failed BICs (Realistic) | 
|---| 
```
SAKRBANKJP01
```

## Category complex
```
!new Bank('deutscheFinanzbank')
!deutscheFinanzbank.country := 'Germany'
!deutscheFinanzbank.name := 'Deutsche Finanzbank'
!deutscheFinanzbank.bic := 'DFGM54321'

!new Bank('ubuntuBank')
!ubuntuBank.country := 'South Africa'
!ubuntuBank.name := 'Ubuntu Bank'
!ubuntuBank.bic := 'UBTZA99082'

!new Person('hannahMuller')
!hannahMuller.firstName := 'Hannah'
!hannahMuller.lastName := 'Müller'
!hannahMuller.age := 45

!new Person('davidOsei')
!davidOsei.firstName := 'David'
!davidOsei.lastName := 'Osei'
!davidOsei.age := 28

!new Person('ayeshaKhan')
!ayeshaKhan.firstName := 'Ayesha'
!ayeshaKhan.lastName := 'Khan'
!ayeshaKhan.age := 39

!new Person('jurgenSchmidt')
!jurgenSchmidt.firstName := 'Jürgen'
!jurgenSchmidt.lastName := 'Schmidt'
!jurgenSchmidt.age := 52

!new Person('zaneleMbeki')
!zaneleMbeki.firstName := 'Zanele'
!zaneleMbeki.lastName := 'Mbeki'
!zaneleMbeki.age := 33

!new Account('account11_1')
!account11_1.iban := 'DE4455667788E'
!account11_1.balance := 15000

!new Account('account11_2')
!account11_2.iban := 'ZA1239876543F'
!account11_2.balance := 2300

!new Account('account11_3')
!account11_3.iban := 'DE9988776655G'
!account11_3.balance := 10500

!new Account('account11_4')
!account11_4.iban := 'ZA8765432190H'
!account11_4.balance := 500

!insert (deutscheFinanzbank, account11_1) into AccountOfBanks
!insert (ubuntuBank, account11_2) into AccountOfBanks
!insert (deutscheFinanzbank, account11_3) into AccountOfBanks
!insert (ubuntuBank, account11_4) into AccountOfBanks

!insert (hannahMuller, account11_1) into Ownership

!insert (davidOsei, account11_2) into Ownership
!insert (zaneleMbeki, account11_2) into Ownership

!insert (jurgenSchmidt, account11_3) into Ownership
!insert (ayeshaKhan, account11_3) into Ownership

!insert (zaneleMbeki, account11_4) into Ownership

!insert (hannahMuller, account11_1) into Use
!insert (jurgenSchmidt, account11_1) into Use

!insert (davidOsei, account11_2) into Use
!insert (ayeshaKhan, account11_2) into Use

!insert (jurgenSchmidt, account11_3) into Use
!insert (hannahMuller, account11_3) into Use
!insert (ayeshaKhan, account11_3) into Use

!insert (zaneleMbeki, account11_4) into Use
!insert (davidOsei, account11_4) into Use
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 59 | 0.00% |
| Multiplicities Errors | 0 | 19 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 4 | 4 | 100.00% |
| IBANs (Realistic) | 4 | 4 | 100.00% |
| BICs (Realistic) | 2 | 2 | 100.00% |
| Countries (Realistic) | 0 | 2 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
DE4455667788E
```
```
ZA1239876543F
```
```
DE9988776655G
```
```
ZA8765432190H
```
```
DE4455667788E
```
```
ZA1239876543F
```
```
DE9988776655G
```
```
ZA8765432190H
```

| Failed IBANs (Realistic) | 
|---| 
```
DE4455667788E
```
```
ZA1239876543F
```
```
DE9988776655G
```
```
ZA8765432190H
```
```
DE4455667788E
```
```
ZA1239876543F
```
```
DE9988776655G
```
```
ZA8765432190H
```

| Failed BICs (Realistic) | 
|---| 
```
DFGM54321
```
```
UBTZA99082
```

## Category edge
```
!new Bank('bancoDoSol')
!bancoDoSol.country := 'Brazil'
!bancoDoSol.name := 'Banco do Sol'
!bancoDoSol.bic := 'BDOLSBRIX'

!new Bank('orientFinanceHub')
!orientFinanceHub.country := 'Singapore'
!orientFinanceHub.name := 'Orient Finance Hub'
!orientFinanceHub.bic := 'ORFSINXX'

!new Person('carlosSouza')
!carlosSouza.firstName := 'Carlos'
!carlosSouza.lastName := 'Souza'
!carlosSouza.age := 30

!new Person('meiWong')
!meiWong.firstName := 'Mei'
!meiWong.lastName := 'Wong'
!meiWong.age := 45

!new Person('hiroTanaka')
!hiroTanaka.firstName := 'Hiro'
!hiroTanaka.lastName := 'Tanaka'
!hiroTanaka.age := 22

!new Account('account10_1')
!account10_1.iban := 'BR12-3456-7890-0001'
!account10_1.balance := 100

!new Account('account10_2')
!account10_2.iban := 'SG45-6789-0123-0045'
!account10_2.balance := 5000

!new Account('account10_3')
!account10_3.iban := 'SG78-9012-3456-0789'
!account10_3.balance := 50000

!insert (bancoDoSol, account10_1) into AccountOfBanks
!insert (orientFinanceHub, account10_2) into AccountOfBanks
!insert (orientFinanceHub, account10_3) into AccountOfBanks

!insert (carlosSouza, account10_1) into Ownership
!insert (hiroTanaka, account10_1) into Ownership

!insert (meiWong, account10_2) into Ownership

!insert (meiWong, account10_3) into Ownership
!insert (carlosSouza, account10_3) into Ownership

!insert (hiroTanaka, account10_1) into Use
!insert (meiWong, account10_1) into Use

!insert (carlosSouza, account10_2) into Use

!insert (meiWong, account10_3) into Use
!insert (carlosSouza, account10_3) into Use
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 42 | 0.00% |
| Multiplicities Errors | 0 | 13 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 3 | 3 | 100.00% |
| IBANs (Realistic) | 0 | 3 | 0.00% |
| BICs (Realistic) | 1 | 2 | 50.00% |
| Countries (Realistic) | 0 | 2 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
BR12345678900001
```
```
SG45678901230045
```
```
SG78901234560789
```
```
BR12345678900001
```
```
SG45678901230045
```
```
SG78901234560789
```

| Failed BICs (Realistic) | 
|---| 
```
BDOLSBRIX
```

## Category invalid
```
!new Bank('bankHorizon')
!bankHorizon.country := 'Australia'
!bankHorizon.name := 'Horizon National Bank'
!bankHorizon.bic := 'HNBAU33'

!new Person('emmaTakahashi')
!emmaTakahashi.firstName := 'Emma'
!emmaTakahashi.lastName := 'Takahashi'
!emmaTakahashi.age := 70

!new Person('akiraTakahashi')
!akiraTakahashi.firstName := 'Akira'
!akiraTakahashi.lastName := 'Takahashi'
!akiraTakahashi.age := 48

!new Person('keikoTakahashi')
!keikoTakahashi.firstName := 'Keiko'
!keikoTakahashi.lastName := 'Takahashi'
!keikoTakahashi.age := 25

!new Account('account8_3')
!account8_3.iban := 'AU62 1234 5678 9012'
!account8_3.balance := 25000

!new Account('account8_4')
!account8_4.iban := 'AU56 8765 4321 2345'
!account8_4.balance := 0

!insert (bankHorizon, account8_3) into AccountOfBanks
!insert (bankHorizon, account8_4) into AccountOfBanks

!insert (emmaTakahashi, account8_3) into Ownership
!insert (akiraTakahashi, account8_3) into Ownership

!insert (akiraTakahashi, account8_4) into Ownership
!insert (keikoTakahashi, account8_4) into Ownership

!insert (emmaTakahashi, account8_3) into Use
!insert (akiraTakahashi, account8_3) into Use
!insert (keikoTakahashi, account8_3) into Use

!insert (akiraTakahashi, account8_4) into Use
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 10 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 2 | 2 | 100.00% |
| IBANs (Realistic) | 0 | 2 | 0.00% |
| BICs (Realistic) | 1 | 1 | 100.00% |
| Countries (Realistic) | 0 | 1 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
AU62123456789012
```
```
AU56876543212345
```
```
AU62123456789012
```
```
AU56876543212345
```

| Failed BICs (Realistic) | 
|---| 
```
HNBAU33
```

## Generation 2 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 207 | 0.00% |
| Multiplicities Errors | 0 | 55 | 0.00% |
| Invariants Errors | 0 | 8 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 10 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 14 | 14 | 100.00% |
| IBANs (Realistic) | 4 | 14 | 28.57% |
| BICs (Realistic) | 5 | 7 | 71.43% |
| Countries (Realistic) | 0 | 7 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
JP668123455678987654321
```
```
JP668123455678123456789
```
```
JP668123455678234567891
```
```
JP668123455678345678912
```
```
JP668123455678987654321
```
```
JP668123455678123456789
```
```
JP668123455678234567891
```
```
JP668123455678345678912
```
```
JP32SAKR0000009876543210
```
```
JP32SAKR0000009876543210
```
```
DE4455667788E
```
```
ZA1239876543F
```
```
DE9988776655G
```
```
ZA8765432190H
```
```
DE4455667788E
```
```
ZA1239876543F
```
```
DE9988776655G
```
```
ZA8765432190H
```
```
BR12345678900001
```
```
SG45678901230045
```
```
SG78901234560789
```
```
BR12345678900001
```
```
SG45678901230045
```
```
SG78901234560789
```
```
AU62123456789012
```
```
AU56876543212345
```
```
AU62123456789012
```
```
AU56876543212345
```

| Failed IBANs (Realistic) | 
|---| 
```
DE4455667788E
```
```
ZA1239876543F
```
```
DE9988776655G
```
```
ZA8765432190H
```
```
DE4455667788E
```
```
ZA1239876543F
```
```
DE9988776655G
```
```
ZA8765432190H
```

| Failed BICs (Realistic) | 
|---| 
```
SAKRBANKJP01
```
```
DFGM54321
```
```
UBTZA99082
```
```
BDOLSBRIX
```
```
HNBAU33
```

# Generation 3
## Category baseline
```
!new Bank('bancoDoBrasil')
!bancoDoBrasil.country := 'Brazil'
!bancoDoBrasil.name := 'Banco do Brasil'
!bancoDoBrasil.bic := 'BRASBRRJXXX'

!new Account('account9_1')
!account9_1.iban := 'BR1500000000001110000123456C1'
!account9_1.balance := 7500

!new Account('account9_2')
!account9_2.iban := 'BR1500000000002220000234567C2'
!account9_2.balance := 18000

!new Account('account9_3')
!account9_3.iban := 'BR1500000000003330000345678C3'
!account9_3.balance := 2500

!new Person('thiagoAlmeida')
!thiagoAlmeida.firstName := 'Thiago'
!thiagoAlmeida.lastName := 'Almeida'
!thiagoAlmeida.age := 45

!new Person('marinaCosta')
!marinaCosta.firstName := 'Marina'
!marinaCosta.lastName := 'Costa'
!marinaCosta.age := 24

!new Person('carlosSilva')
!carlosSilva.firstName := 'Carlos'
!carlosSilva.lastName := 'Silva'
!carlosSilva.age := 50

!new Person('larissaMendes')
!larissaMendes.firstName := 'Larissa'
!larissaMendes.lastName := 'Mendes'
!larissaMendes.age := 33

!new Person('julianaSantos')
!julianaSantos.firstName := 'Juliana'
!julianaSantos.lastName := 'Santos'
!julianaSantos.age := 27

!insert (bancoDoBrasil, account9_1) into AccountOfBanks
!insert (bancoDoBrasil, account9_2) into AccountOfBanks
!insert (bancoDoBrasil, account9_3) into AccountOfBanks

!insert (thiagoAlmeida, account9_1) into Ownership
!insert (larissaMendes, account9_1) into Ownership

!insert (carlosSilva, account9_2) into Ownership
!insert (marinaCosta, account9_2) into Ownership

!insert (julianaSantos, account9_3) into Ownership

!insert (thiagoAlmeida, account9_1) into Use
!insert (larissaMendes, account9_1) into Use
!insert (marinaCosta, account9_1) into Use

!insert (carlosSilva, account9_2) into Use
!insert (thiagoAlmeida, account9_2) into Use

!insert (julianaSantos, account9_3) into Use
!insert (larissaMendes, account9_3) into Use
!insert (carlosSilva, account9_3) into Use
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 49 | 0.00% |
| Multiplicities Errors | 0 | 16 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 3 | 3 | 100.00% |
| IBANs (Realistic) | 0 | 3 | 0.00% |
| BICs (Realistic) | 0 | 1 | 0.00% |
| Countries (Realistic) | 0 | 1 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
BR1500000000001110000123456C1
```
```
BR1500000000002220000234567C2
```
```
BR1500000000003330000345678C3
```
```
BR1500000000001110000123456C1
```
```
BR1500000000002220000234567C2
```
```
BR1500000000003330000345678C3
```

## Category boundary
```
!new Bank('globalTrustBank')
!globalTrustBank.country := 'India'
!globalTrustBank.name := 'GlobalTrust Bank'
!globalTrustBank.bic := 'GLTRINBB001'

!new Account('account12')
!account12.iban := 'IN75TEST0000012345678901'
!account12.balance := 1

!new Person('nehaSharma')
!nehaSharma.firstName := 'Neha'
!nehaSharma.lastName := 'Sharma'
!nehaSharma.age := 28

!new Person('arvindKumar')
!arvindKumar.firstName := 'Arvind'
!arvindKumar.lastName := 'Kumar'
!arvindKumar.age := 32

!new Person('rohitSharma')
!rohitSharma.firstName := 'Rohit'
!rohitSharma.lastName := 'Sharma'
!rohitSharma.age := 19

!new Person('priyaKumar')
!priyaKumar.firstName := 'Priya'
!priyaKumar.lastName := 'Kumar'
!priyaKumar.age := 22

!insert (globalTrustBank, account12) into AccountOfBanks

!insert (nehaSharma, account12) into Ownership
!insert (arvindKumar, account12) into Ownership

!insert (nehaSharma, account12) into Use
!insert (arvindKumar, account12) into Use
!insert (rohitSharma, account12) into Use
!insert (priyaKumar, account12) into Use
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 30 | 0.00% |
| Multiplicities Errors | 0 | 7 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 1 | 1 | 100.00% |
| IBANs (Realistic) | 0 | 1 | 0.00% |
| BICs (Realistic) | 0 | 1 | 0.00% |
| Countries (Realistic) | 0 | 1 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
IN75TEST0000012345678901
```
```
IN75TEST0000012345678901
```

## Category complex
```
!new Bank('bancoDoBrasil')
!bancoDoBrasil.country := 'Brazil'
!bancoDoBrasil.name := 'Banco do Brasil'
!bancoDoBrasil.bic := 'BBRA00012'

!new Bank('bharatBank')
!bharatBank.country := 'India'
!bharatBank.name := 'Bharat Bank'
!bharatBank.bic := 'BHIN67234'

!new Person('carlosOliveira')
!carlosOliveira.firstName := 'Carlos'
!carlosOliveira.lastName := 'Oliveira'
!carlosOliveira.age := 23

!new Person('priyaSharma')
!priyaSharma.firstName := 'Priya'
!priyaSharma.lastName := 'Sharma'
!priyaSharma.age := 36

!new Person('viniciusFernandez')
!viniciusFernandez.firstName := 'Vinicius'
!viniciusFernandez.lastName := 'Fernandez'
!viniciusFernandez.age := 40

!new Person('aditiGupta')
!aditiGupta.firstName := 'Aditi'
!aditiGupta.lastName := 'Gupta'
!aditiGupta.age := 29

!new Person('anilKapoor')
!anilKapoor.firstName := 'Anil'
!anilKapoor.lastName := 'Kapoor'
!anilKapoor.age := 48

!new Account('account17_1')
!account17_1.iban := 'BR0011223344I'
!account17_1.balance := 800

!new Account('account17_2')
!account17_2.iban := 'IN8765432109J'
!account17_2.balance := 2500

!new Account('account17_3')
!account17_3.iban := 'BR5566778899K'
!account17_3.balance := 5000

!new Account('account17_4')
!account17_4.iban := 'IN1098765432L'
!account17_4.balance := 3000

!insert (bancoDoBrasil, account17_1) into AccountOfBanks
!insert (bharatBank, account17_2) into AccountOfBanks
!insert (bancoDoBrasil, account17_3) into AccountOfBanks
!insert (bharatBank, account17_4) into AccountOfBanks

!insert (carlosOliveira, account17_1) into Ownership

!insert (priyaSharma, account17_2) into Ownership

!insert (viniciusFernandez, account17_3) into Ownership

!insert (aditiGupta, account17_4) into Ownership
!insert (anilKapoor, account17_4) into Ownership

!insert (carlosOliveira, account17_1) into Use
!insert (viniciusFernandez, account17_1) into Use

!insert (priyaSharma, account17_2) into Use
!insert (anilKapoor, account17_2) into Use

!insert (viniciusFernandez, account17_3) into Use
!insert (carlosOliveira, account17_3) into Use
!insert (aditiGupta, account17_3) into Use

!insert (aditiGupta, account17_4) into Use
!insert (priyaSharma, account17_4) into Use
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 58 | 0.00% |
| Multiplicities Errors | 0 | 18 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 4 | 4 | 100.00% |
| IBANs (Realistic) | 4 | 4 | 100.00% |
| BICs (Realistic) | 2 | 2 | 100.00% |
| Countries (Realistic) | 0 | 2 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
BR0011223344I
```
```
IN8765432109J
```
```
BR5566778899K
```
```
IN1098765432L
```
```
BR0011223344I
```
```
IN8765432109J
```
```
BR5566778899K
```
```
IN1098765432L
```

| Failed IBANs (Realistic) | 
|---| 
```
BR0011223344I
```
```
IN8765432109J
```
```
BR5566778899K
```
```
IN1098765432L
```
```
BR0011223344I
```
```
IN8765432109J
```
```
BR5566778899K
```
```
IN1098765432L
```

| Failed BICs (Realistic) | 
|---| 
```
BBRA00012
```
```
BHIN67234
```

## Category edge
```
!new Bank('umojaTrustBank')
!umojaTrustBank.country := 'Kenya'
!umojaTrustBank.name := 'Umoja Trust Bank'
!umojaTrustBank.bic := 'UMLKKE22'

!new Person('aminaNjeri')
!aminaNjeri.firstName := 'Amina'
!aminaNjeri.lastName := 'Njeri'
!aminaNjeri.age := 28

!new Person('priyaSethi')
!priyaSethi.firstName := 'Priya'
!priyaSethi.lastName := 'Sethi'
!priyaSethi.age := 36

!new Person('leoSchmidt')
!leoSchmidt.firstName := 'Leo'
!leoSchmidt.lastName := 'Schmidt'
!leoSchmidt.age := 33

!new Account('account15_1')
!account15_1.iban := 'KE29-7654-3210-0002'
!account15_1.balance := 250000

!new Account('account15_2')
!account15_2.iban := 'KE34-8765-4321-0003'
!account15_2.balance := 50

!insert (umojaTrustBank, account15_1) into AccountOfBanks
!insert (umojaTrustBank, account15_2) into AccountOfBanks

!insert (aminaNjeri, account15_1) into Ownership
!insert (priyaSethi, account15_1) into Ownership

!insert (priyaSethi, account15_2) into Ownership

!insert (aminaNjeri, account15_1) into Use
!insert (leoSchmidt, account15_1) into Use

!insert (aminaNjeri, account15_2) into Use
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 30 | 0.00% |
| Multiplicities Errors | 0 | 8 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 2 | 2 | 100.00% |
| IBANs (Realistic) | 0 | 2 | 0.00% |
| BICs (Realistic) | 0 | 1 | 0.00% |
| Countries (Realistic) | 0 | 1 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
KE29765432100002
```
```
KE34876543210003
```
```
KE29765432100002
```
```
KE34876543210003
```

## Category invalid
```
!new Bank('bankUnity')
!bankUnity.country := 'Canada'
!bankUnity.name := 'Northern Trust Bank'
!bankUnity.bic := 'NTBCA22'

!new Bank('bankContinental')
!bankContinental.country := 'Italy'
!bankContinental.name := 'Mediterranean Commerce Bank'
!bankContinental.bic := 'MCBIT33'

!new Person('giovanniRossi')
!giovanniRossi.firstName := 'Giovanni'
!giovanniRossi.lastName := 'Rossi'
!giovanniRossi.age := 45

!new Person('marcoBertoli')
!marcoBertoli.firstName := 'Marco'
!marcoBertoli.lastName := 'Bertoli'
!marcoBertoli.age := 38

!new Person('aliciaJohnson')
!aliciaJohnson.firstName := 'Alicia'
!aliciaJohnson.lastName := 'Johnson'
!aliciaJohnson.age := 28

!new Person('samanthaLee')
!samanthaLee.firstName := 'Samantha'
!samanthaLee.lastName := 'Lee'
!samanthaLee.age := 26

!new Account('account13_5')
!account13_5.iban := 'CA91 1000 3000 0002'
!account13_5.balance := 15000

!new Account('account13_6')
!account13_6.iban := 'IT20 X054 2811 1010'
!account13_6.balance := 8000

!insert (bankUnity, account13_5) into AccountOfBanks
!insert (bankContinental, account13_6) into AccountOfBanks

!insert (giovanniRossi, account13_5) into Ownership
!insert (marcoBertoli, account13_5) into Ownership

!insert (aliciaJohnson, account13_6) into Ownership
!insert (samanthaLee, account13_6) into Ownership

!insert (giovanniRossi, account13_5) into Use
!insert (marcoBertoli, account13_5) into Use
!insert (aliciaJohnson, account13_5) into Use
!insert (samanthaLee, account13_5) into Use

!insert (aliciaJohnson, account13_6) into Use
!insert (samanthaLee, account13_6) into Use
!insert (marcoBertoli, account13_6) into Use
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 13 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 2 | 2 | 100.00% |
| IBANs (Realistic) | 0 | 2 | 0.00% |
| BICs (Realistic) | 2 | 2 | 100.00% |
| Countries (Realistic) | 0 | 2 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
CA91100030000002
```
```
IT20X05428111010
```
```
CA91100030000002
```
```
IT20X05428111010
```

| Failed BICs (Realistic) | 
|---| 
```
NTBCA22
```
```
MCBIT33
```

## Generation 3 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 210 | 0.00% |
| Multiplicities Errors | 0 | 49 | 0.00% |
| Invariants Errors | 0 | 8 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 13 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 12 | 12 | 100.00% |
| IBANs (Realistic) | 4 | 12 | 33.33% |
| BICs (Realistic) | 4 | 7 | 57.14% |
| Countries (Realistic) | 0 | 7 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
BR1500000000001110000123456C1
```
```
BR1500000000002220000234567C2
```
```
BR1500000000003330000345678C3
```
```
BR1500000000001110000123456C1
```
```
BR1500000000002220000234567C2
```
```
BR1500000000003330000345678C3
```
```
IN75TEST0000012345678901
```
```
IN75TEST0000012345678901
```
```
BR0011223344I
```
```
IN8765432109J
```
```
BR5566778899K
```
```
IN1098765432L
```
```
BR0011223344I
```
```
IN8765432109J
```
```
BR5566778899K
```
```
IN1098765432L
```
```
KE29765432100002
```
```
KE34876543210003
```
```
KE29765432100002
```
```
KE34876543210003
```
```
CA91100030000002
```
```
IT20X05428111010
```
```
CA91100030000002
```
```
IT20X05428111010
```

| Failed IBANs (Realistic) | 
|---| 
```
BR0011223344I
```
```
IN8765432109J
```
```
BR5566778899K
```
```
IN1098765432L
```
```
BR0011223344I
```
```
IN8765432109J
```
```
BR5566778899K
```
```
IN1098765432L
```

| Failed BICs (Realistic) | 
|---| 
```
BBRA00012
```
```
BHIN67234
```
```
NTBCA22
```
```
MCBIT33
```

# Generation 4
## Category baseline
```
!new Bank('firstBankOfNigeria')
!firstBankOfNigeria.country := 'Nigeria'
!firstBankOfNigeria.name := 'First Bank of Nigeria'
!firstBankOfNigeria.bic := 'FBNINGLAXXX'

!new Account('account14_1')
!account14_1.iban := 'NG0112345678901234567890123'
!account14_1.balance := 10000

!new Account('account14_2')
!account14_2.iban := 'NG0123456789012345678901234'
!account14_2.balance := 145000

!new Account('account14_3')
!account14_3.iban := 'NG0134567890123456789012345'
!account14_3.balance := 38000

!new Account('account14_4')
!account14_4.iban := 'NG0145678901234567890123456'
!account14_4.balance := 5000

!new Account('account14_5')
!account14_5.iban := 'NG0156789012345678901234567'
!account14_5.balance := 200000

!new Person('chineduOkoro')
!chineduOkoro.firstName := 'Chinedu'
!chineduOkoro.lastName := 'Okoro'
!chineduOkoro.age := 40

!new Person('ngoziAdeyemi')
!ngoziAdeyemi.firstName := 'Ngozi'
!ngoziAdeyemi.lastName := 'Adeyemi'
!ngoziAdeyemi.age := 34

!new Person('funkeAdebayo')
!funkeAdebayo.firstName := 'Funke'
!funkeAdebayo.lastName := 'Adebayo'
!funkeAdebayo.age := 28

!new Person('tundeBello')
!tundeBello.firstName := 'Tunde'
!tundeBello.lastName := 'Bello'
!tundeBello.age := 47

!insert (firstBankOfNigeria, account14_1) into AccountOfBanks
!insert (firstBankOfNigeria, account14_2) into AccountOfBanks
!insert (firstBankOfNigeria, account14_3) into AccountOfBanks
!insert (firstBankOfNigeria, account14_4) into AccountOfBanks
!insert (firstBankOfNigeria, account14_5) into AccountOfBanks

!insert (tundeBello, account14_1) into Ownership
!insert (chineduOkoro, account14_1) into Ownership

!insert (ngoziAdeyemi, account14_2) into Ownership

!insert (funkeAdebayo, account14_3) into Ownership
!insert (ngoziAdeyemi, account14_3) into Ownership

!insert (chineduOkoro, account14_4) into Ownership
!insert (tundeBello, account14_4) into Ownership

!insert (funkeAdebayo, account14_5) into Ownership

!insert (tundeBello, account14_1) into Use
!insert (chineduOkoro, account14_1) into Use

!insert (ngoziAdeyemi, account14_2) into Use
!insert (funkeAdebayo, account14_2) into Use

!insert (ngoziAdeyemi, account14_3) into Use
!insert (chineduOkoro, account14_3) into Use

!insert (tundeBello, account14_4) into Use
!insert (funkeAdebayo, account14_4) into Use

!insert (funkeAdebayo, account14_5) into Use
!insert (ngoziAdeyemi, account14_5) into Use
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 58 | 0.00% |
| Multiplicities Errors | 0 | 23 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 5 | 5 | 100.00% |
| IBANs (Realistic) | 0 | 5 | 0.00% |
| BICs (Realistic) | 0 | 1 | 0.00% |
| Countries (Realistic) | 0 | 1 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
NG0112345678901234567890123
```
```
NG0123456789012345678901234
```
```
NG0134567890123456789012345
```
```
NG0145678901234567890123456
```
```
NG0156789012345678901234567
```
```
NG0112345678901234567890123
```
```
NG0123456789012345678901234
```
```
NG0134567890123456789012345
```
```
NG0145678901234567890123456
```
```
NG0156789012345678901234567
```

## Category boundary
```
!new Bank('alpenBank')
!alpenBank.country := 'Switzerland'
!alpenBank.name := 'AlpenBank'
!alpenBank.bic := 'ALPNCHZZ001'

!new Account('account16')
!account16.iban := 'CH93ALPN0000001234567890'
!account16.balance := 500000

!new Person('lenaMuller')
!lenaMuller.firstName := 'Lena'
!lenaMuller.lastName := 'Müller'
!lenaMuller.age := 38

!new Person('hansZimmer')
!hansZimmer.firstName := 'Hans'
!hansZimmer.lastName := 'Zimmer'
!hansZimmer.age := 45

!new Person('franzMeier')
!franzMeier.firstName := 'Franz'
!franzMeier.lastName := 'Meier'
!franzMeier.age := 52

!new Person('klaraSchneider')
!klaraSchneider.firstName := 'Klara'
!klaraSchneider.lastName := 'Schneider'
!klaraSchneider.age := 29

!insert (alpenBank, account16) into AccountOfBanks

!insert (lenaMuller, account16) into Ownership
!insert (hansZimmer, account16) into Ownership

!insert (franzMeier, account16) into Use
!insert (klaraSchneider, account16) into Use
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 28 | 0.00% |
| Multiplicities Errors | 0 | 5 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 1 | 1 | 100.00% |
| IBANs (Realistic) | 0 | 1 | 0.00% |
| BICs (Realistic) | 0 | 1 | 0.00% |
| Countries (Realistic) | 0 | 1 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
CH93ALPN0000001234567890
```
```
CH93ALPN0000001234567890
```

## Category complex
```
!new Bank('mapleTrustBank')
!mapleTrustBank.country := 'Canada'
!mapleTrustBank.name := 'Maple Trust Bank'
!mapleTrustBank.bic := 'MTCA00123'

!new Bank('southernCrossBank')
!southernCrossBank.country := 'Australia'
!southernCrossBank.name := 'Southern Cross Bank'
!southernCrossBank.bic := 'SCBAU78901'

!new Person('liamMcCarthy')
!liamMcCarthy.firstName := 'Liam'
!liamMcCarthy.lastName := 'McCarthy'
!liamMcCarthy.age := 28

!new Person('chloeSmith')
!chloeSmith.firstName := 'Chloe'
!chloeSmith.lastName := 'Smith'
!chloeSmith.age := 42

!new Person('oliverWilliams')
!oliverWilliams.firstName := 'Oliver'
!oliverWilliams.lastName := 'Williams'
!oliverWilliams.age := 49

!new Person('miaJohnson')
!miaJohnson.firstName := 'Mia'
!miaJohnson.lastName := 'Johnson'
!miaJohnson.age := 35

!new Person('ethanBrown')
!ethanBrown.firstName := 'Ethan'
!ethanBrown.lastName := 'Brown'
!ethanBrown.age := 46

!new Account('account24_1')
!account24_1.iban := 'CA5553338889M'
!account24_1.balance := 200

!new Account('account24_2')
!account24_2.iban := 'AU7878689501N'
!account24_2.balance := 7200

!new Account('account24_3')
!account24_3.iban := 'CA2233445566O'
!account24_3.balance := 1200

!new Account('account24_4')
!account24_4.iban := 'AU1122334455P'
!account24_4.balance := 6000

!new Account('account24_5')
!account24_5.iban := 'CA6677889900Q'
!account24_5.balance := 0

!insert (mapleTrustBank, account24_1) into AccountOfBanks
!insert (southernCrossBank, account24_2) into AccountOfBanks
!insert (mapleTrustBank, account24_3) into AccountOfBanks
!insert (southernCrossBank, account24_4) into AccountOfBanks
!insert (mapleTrustBank, account24_5) into AccountOfBanks

!insert (liamMcCarthy, account24_1) into Ownership
!insert (chloeSmith, account24_1) into Ownership

!insert (miaJohnson, account24_2) into Ownership

!insert (oliverWilliams, account24_3) into Ownership

!insert (ethanBrown, account24_4) into Ownership

!insert (chloeSmith, account24_5) into Ownership
!insert (oliverWilliams, account24_5) into Ownership

!insert (liamMcCarthy, account24_1) into Use
!insert (chloeSmith, account24_1) into Use
!insert (oliverWilliams, account24_1) into Use

!insert (miaJohnson, account24_2) into Use
!insert (ethanBrown, account24_2) into Use

!insert (oliverWilliams, account24_3) into Use
!insert (chloeSmith, account24_3) into Use

!insert (ethanBrown, account24_4) into Use
!insert (miaJohnson, account24_4) into Use

!insert (chloeSmith, account24_5) into Use
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 65 | 0.00% |
| Multiplicities Errors | 0 | 22 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 5 | 5 | 100.00% |
| IBANs (Realistic) | 5 | 5 | 100.00% |
| BICs (Realistic) | 2 | 2 | 100.00% |
| Countries (Realistic) | 0 | 2 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
CA5553338889M
```
```
AU7878689501N
```
```
CA2233445566O
```
```
AU1122334455P
```
```
CA6677889900Q
```
```
CA5553338889M
```
```
AU7878689501N
```
```
CA2233445566O
```
```
AU1122334455P
```
```
CA6677889900Q
```

| Failed IBANs (Realistic) | 
|---| 
```
CA5553338889M
```
```
AU7878689501N
```
```
CA2233445566O
```
```
AU1122334455P
```
```
CA6677889900Q
```
```
CA5553338889M
```
```
AU7878689501N
```
```
CA2233445566O
```
```
AU1122334455P
```
```
CA6677889900Q
```

| Failed BICs (Realistic) | 
|---| 
```
MTCA00123
```
```
SCBAU78901
```

## Category edge
```
!new Bank('mapleLeafBankingGroup')
!mapleLeafBankingGroup.country := 'Canada'
!mapleLeafBankingGroup.name := 'Maple Leaf Banking Group'
!mapleLeafBankingGroup.bic := 'MLBGCAXR12'

!new Account('account22_1')
!account22_1.iban := 'CA89-1234-5678-9101'
!account22_1.balance := 750000

!new Account('account22_2')
!account22_2.iban := 'CA91-1122-3344-5566'
!account22_2.balance := 0

!new Person('emmaThompson')
!emmaThompson.firstName := 'Emma'
!emmaThompson.lastName := 'Thompson'
!emmaThompson.age := 67

!new Person('liamThompson')
!liamThompson.firstName := 'Liam'
!liamThompson.lastName := 'Thompson'
!liamThompson.age := 45

!new Person('sophieThompson')
!sophieThompson.firstName := 'Sophie'
!sophieThompson.lastName := 'Thompson'
!sophieThompson.age := 20

!new Person('jackChen')
!jackChen.firstName := 'Jack'
!jackChen.lastName := 'Chen'
!jackChen.age := 55

!insert (mapleLeafBankingGroup, account22_1) into AccountOfBanks
!insert (mapleLeafBankingGroup, account22_2) into AccountOfBanks

!insert (emmaThompson, account22_1) into Ownership
!insert (liamThompson, account22_1) into Ownership

!insert (sophieThompson, account22_2) into Ownership

!insert (emmaThompson, account22_1) into Use
!insert (sophieThompson, account22_1) into Use

!insert (liamThompson, account22_2) into Use
!insert (sophieThompson, account22_2) into Use
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 35 | 0.00% |
| Multiplicities Errors | 0 | 9 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 2 | 2 | 100.00% |
| IBANs (Realistic) | 0 | 2 | 0.00% |
| BICs (Realistic) | 1 | 1 | 100.00% |
| Countries (Realistic) | 0 | 1 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
CA89123456789101
```
```
CA91112233445566
```
```
CA89123456789101
```
```
CA91112233445566
```

| Failed BICs (Realistic) | 
|---| 
```
MLBGCAXR12
```

## Category invalid
```
!new Bank('bankGlobal')
!bankGlobal.country := 'United States'
!bankGlobal.name := 'Transnational Banking Corporation'
!bankGlobal.bic := 'TBCUS33'

!new Person('weiZhang')
!weiZhang.firstName := 'Wei'
!weiZhang.lastName := 'Zhang'
!weiZhang.age := 40

!new Person('amaraNguyen')
!amaraNguyen.firstName := 'Amara'
!amaraNguyen.lastName := 'Nguyen'
!amaraNguyen.age := 35

!new Person('liamOConnor')
!liamOConnor.firstName := 'Liam'
!liamOConnor.lastName := 'O''Connor'
!liamOConnor.age := 29

!new Account('account19_7')
!account19_7.iban := 'US72 1234 5678 9012'
!account19_7.balance := 20000

!new Account('account19_8')
!account19_8.iban := 'US37 6789 0123 4567'

!insert (bankGlobal, account19_7) into AccountOfBanks
!insert (bankGlobal, account19_8) into AccountOfBanks

!insert (weiZhang, account19_7) into Ownership
!insert (amaraNguyen, account19_7) into Ownership

!insert (liamOConnor, account19_8) into Ownership

!insert (weiZhang, account19_7) into Use
!insert (amaraNguyen, account19_7) into Use
!insert (liamOConnor, account19_7) into Use

!insert (liamOConnor, account19_8) into Use
!insert (amaraNguyen, account19_8) into Use
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 10 | 0.00% |
| Invariants Errors (Not included on General) | 1 | 2 | 50.00% |

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (2) `Account::positiveBalance': FAILED.
```

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 2 | 2 | 100.00% |
| IBANs (Realistic) | 0 | 2 | 0.00% |
| BICs (Realistic) | 1 | 1 | 100.00% |
| Countries (Realistic) | 0 | 1 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
US72123456789012
```
```
US37678901234567
```
```
US72123456789012
```
```
US37678901234567
```

| Failed BICs (Realistic) | 
|---| 
```
TBCUS33
```

## Generation 4 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 217 | 0.00% |
| Multiplicities Errors | 0 | 59 | 0.00% |
| Invariants Errors | 0 | 8 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 10 | 0.00% |
| Invariants Errors (Not included on General) | 1 | 2 | 50.00% |

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (2) `Account::positiveBalance': FAILED.
```

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 15 | 15 | 100.00% |
| IBANs (Realistic) | 5 | 15 | 33.33% |
| BICs (Realistic) | 4 | 6 | 66.67% |
| Countries (Realistic) | 0 | 6 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
NG0112345678901234567890123
```
```
NG0123456789012345678901234
```
```
NG0134567890123456789012345
```
```
NG0145678901234567890123456
```
```
NG0156789012345678901234567
```
```
NG0112345678901234567890123
```
```
NG0123456789012345678901234
```
```
NG0134567890123456789012345
```
```
NG0145678901234567890123456
```
```
NG0156789012345678901234567
```
```
CH93ALPN0000001234567890
```
```
CH93ALPN0000001234567890
```
```
CA5553338889M
```
```
AU7878689501N
```
```
CA2233445566O
```
```
AU1122334455P
```
```
CA6677889900Q
```
```
CA5553338889M
```
```
AU7878689501N
```
```
CA2233445566O
```
```
AU1122334455P
```
```
CA6677889900Q
```
```
CA89123456789101
```
```
CA91112233445566
```
```
CA89123456789101
```
```
CA91112233445566
```
```
US72123456789012
```
```
US37678901234567
```
```
US72123456789012
```
```
US37678901234567
```

| Failed IBANs (Realistic) | 
|---| 
```
CA5553338889M
```
```
AU7878689501N
```
```
CA2233445566O
```
```
AU1122334455P
```
```
CA6677889900Q
```
```
CA5553338889M
```
```
AU7878689501N
```
```
CA2233445566O
```
```
AU1122334455P
```
```
CA6677889900Q
```

| Failed BICs (Realistic) | 
|---| 
```
MTCA00123
```
```
SCBAU78901
```
```
MLBGCAXR12
```
```
TBCUS33
```

# Generation 5
## Category baseline
```
!new Bank('stateBankOfIndia')
!stateBankOfIndia.country := 'India'
!stateBankOfIndia.name := 'State Bank of India'
!stateBankOfIndia.bic := 'SBININBBXXX'

!new Account('account18_1')
!account18_1.iban := 'IN4321098765432109876543210'
!account18_1.balance := 3000

!new Account('account18_2')
!account18_2.iban := 'IN5432109876543210987654321'
!account18_2.balance := 15000

!new Account('account18_3')
!account18_3.iban := 'IN6543210987654321098765432'
!account18_3.balance := 45000

!new Account('account18_4')
!account18_4.iban := 'IN7654321098765432109876543'
!account18_4.balance := 600

!new Account('account18_5')
!account18_5.iban := 'IN8765432109876543210987654'
!account18_5.balance := 12000

!new Account('account18_6')
!account18_6.iban := 'IN9876543210987654321098765'
!account18_6.balance := 85000

!new Person('rohanSharma')
!rohanSharma.firstName := 'Rohan'
!rohanSharma.lastName := 'Sharma'
!rohanSharma.age := 29

!new Person('priyaKapoor')
!priyaKapoor.firstName := 'Priya'
!priyaKapoor.lastName := 'Kapoor'
!priyaKapoor.age := 35

!new Person('arjunIyer')
!arjunIyer.firstName := 'Arjun'
!arjunIyer.lastName := 'Iyer'
!arjunIyer.age := 42

!new Person('anjaliGupta')
!anjaliGupta.firstName := 'Anjali'
!anjaliGupta.lastName := 'Gupta'
!anjaliGupta.age := 37

!new Person('vivekRao')
!vivekRao.firstName := 'Vivek'
!vivekRao.lastName := 'Rao'
!vivekRao.age := 31

!insert (stateBankOfIndia, account18_1) into AccountOfBanks
!insert (stateBankOfIndia, account18_2) into AccountOfBanks
!insert (stateBankOfIndia, account18_3) into AccountOfBanks
!insert (stateBankOfIndia, account18_4) into AccountOfBanks
!insert (stateBankOfIndia, account18_5) into AccountOfBanks
!insert (stateBankOfIndia, account18_6) into AccountOfBanks

!insert (rohanSharma, account18_1) into Ownership

!insert (priyaKapoor, account18_2) into Ownership
!insert (arjunIyer, account18_2) into Ownership

!insert (anjaliGupta, account18_3) into Ownership
!insert (rohanSharma, account18_3) into Ownership

!insert (vivekRao, account18_4) into Ownership

!insert (priyaKapoor, account18_5) into Ownership

!insert (anjaliGupta, account18_6) into Ownership
!insert (vivekRao, account18_6) into Ownership

!insert (rohanSharma, account18_1) into Use
!insert (priyaKapoor, account18_1) into Use

!insert (arjunIyer, account18_2) into Use
!insert (anjaliGupta, account18_2) into Use

!insert (rohanSharma, account18_3) into Use
!insert (vivekRao, account18_3) into Use

!insert (vivekRao, account18_4) into Use

!insert (priyaKapoor, account18_5) into Use
!insert (anjaliGupta, account18_5) into Use

!insert (anjaliGupta, account18_6) into Use
!insert (rohanSharma, account18_6) into Use
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 68 | 0.00% |
| Multiplicities Errors | 0 | 26 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 6 | 6 | 100.00% |
| IBANs (Realistic) | 0 | 6 | 0.00% |
| BICs (Realistic) | 0 | 1 | 0.00% |
| Countries (Realistic) | 0 | 1 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
IN4321098765432109876543210
```
```
IN5432109876543210987654321
```
```
IN6543210987654321098765432
```
```
IN7654321098765432109876543
```
```
IN8765432109876543210987654
```
```
IN9876543210987654321098765
```
```
IN4321098765432109876543210
```
```
IN5432109876543210987654321
```
```
IN6543210987654321098765432
```
```
IN7654321098765432109876543
```
```
IN8765432109876543210987654
```
```
IN9876543210987654321098765
```

## Category boundary
```
!new Bank('nileDeltaBank')
!nileDeltaBank.country := 'Egypt'
!nileDeltaBank.name := 'NileDelta Bank'
!nileDeltaBank.bic := 'NILDELBK001'

!new Account('account21')
!account21.iban := 'EG64NILDB000000123456789045'
!account21.balance := 100

!new Person('aminaHassan')
!aminaHassan.firstName := 'Amina'
!aminaHassan.lastName := 'Hassan'
!aminaHassan.age := 22

!new Person('youssefAli')
!youssefAli.firstName := 'Youssef'
!youssefAli.lastName := 'Ali'
!youssefAli.age := 23

!new Person('saraMahmoud')
!saraMahmoud.firstName := 'Sara'
!saraMahmoud.lastName := 'Mahmoud'
!saraMahmoud.age := 21

!insert (nileDeltaBank, account21) into AccountOfBanks

!insert (aminaHassan, account21) into Ownership

!insert (aminaHassan, account21) into Use
!insert (youssefAli, account21) into Use
!insert (saraMahmoud, account21) into Use
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 24 | 0.00% |
| Multiplicities Errors | 0 | 5 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 1 | 1 | 100.00% |
| IBANs (Realistic) | 0 | 1 | 0.00% |
| BICs (Realistic) | 0 | 1 | 0.00% |
| Countries (Realistic) | 0 | 1 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
EG64NILDB000000123456789045
```
```
EG64NILDB000000123456789045
```

## Category complex
```
!new Bank('warszawskiBank')
!warszawskiBank.country := 'Poland'
!warszawskiBank.name := 'Warszawski Bank'
!warszawskiBank.bic := 'WBPL10456'

!new Bank('emiratesFinanceCorp')
!emiratesFinanceCorp.country := 'United Arab Emirates'
!emiratesFinanceCorp.name := 'Emirates Finance Corporation'
!emiratesFinanceCorp.bic := 'EFUAE67890'

!new Person('katarzynaNowak')
!katarzynaNowak.firstName := 'Katarzyna'
!katarzynaNowak.lastName := 'Nowak'
!katarzynaNowak.age := 38

!new Person('abdulAlFarsi')
!abdulAlFarsi.firstName := 'Abdul'
!abdulAlFarsi.lastName := 'Al-Farsi'
!abdulAlFarsi.age := 45

!new Person('lechMazur')
!lechMazur.firstName := 'Lech'
!lechMazur.lastName := 'Mazur'
!lechMazur.age := 53

!new Person('fatimaKhan')
!fatimaKhan.firstName := 'Fatima'
!fatimaKhan.lastName := 'Khan'
!fatimaKhan.age := 31

!new Person('zofiaKwiatkowska')
!zofiaKwiatkowska.firstName := 'Zofia'
!zofiaKwiatkowska.lastName := 'Kwiatkowska'
!zofiaKwiatkowska.age := 50

!new Account('account28_1')
!account28_1.iban := 'PL9088776655A'
!account28_1.balance := 4500

!new Account('account28_2')
!account28_2.iban := 'AE4455667788B'
!account28_2.balance := 9100

!new Account('account28_3')
!account28_3.iban := 'PL3322110044C'
!account28_3.balance := 12000

!new Account('account28_4')
!account28_4.iban := 'AE9988776644D'
!account28_4.balance := 2500

!new Account('account28_5')
!account28_5.iban := 'PL6677889900E'
!account28_5.balance := 0

!insert (warszawskiBank, account28_1) into AccountOfBanks
!insert (emiratesFinanceCorp, account28_2) into AccountOfBanks
!insert (warszawskiBank, account28_3) into AccountOfBanks
!insert (emiratesFinanceCorp, account28_4) into AccountOfBanks
!insert (warszawskiBank, account28_5) into AccountOfBanks

!insert (katarzynaNowak, account28_1) into Ownership

!insert (abdulAlFarsi, account28_2) into Ownership

!insert (lechMazur, account28_3) into Ownership
!insert (zofiaKwiatkowska, account28_3) into Ownership

!insert (fatimaKhan, account28_4) into Ownership
!insert (abdulAlFarsi, account28_4) into Ownership

!insert (katarzynaNowak, account28_5) into Ownership
!insert (lechMazur, account28_5) into Ownership

!insert (katarzynaNowak, account28_1) into Use
!insert (lechMazur, account28_1) into Use

!insert (abdulAlFarsi, account28_2) into Use
!insert (fatimaKhan, account28_2) into Use

!insert (lechMazur, account28_3) into Use
!insert (zofiaKwiatkowska, account28_3) into Use
!insert (katarzynaNowak, account28_3) into Use

!insert (fatimaKhan, account28_4) into Use

!insert (katarzynaNowak, account28_5) into Use
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 65 | 0.00% |
| Multiplicities Errors | 0 | 22 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 5 | 5 | 100.00% |
| IBANs (Realistic) | 5 | 5 | 100.00% |
| BICs (Realistic) | 2 | 2 | 100.00% |
| Countries (Realistic) | 0 | 2 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
PL9088776655A
```
```
AE4455667788B
```
```
PL3322110044C
```
```
AE9988776644D
```
```
PL6677889900E
```
```
PL9088776655A
```
```
AE4455667788B
```
```
PL3322110044C
```
```
AE9988776644D
```
```
PL6677889900E
```

| Failed IBANs (Realistic) | 
|---| 
```
PL9088776655A
```
```
AE4455667788B
```
```
PL3322110044C
```
```
AE9988776644D
```
```
PL6677889900E
```
```
PL9088776655A
```
```
AE4455667788B
```
```
PL3322110044C
```
```
AE9988776644D
```
```
PL6677889900E
```

| Failed BICs (Realistic) | 
|---| 
```
WBPL10456
```
```
EFUAE67890
```

## Category edge
```
!new Bank('balticDigitalBank')
!balticDigitalBank.country := 'Estonia'
!balticDigitalBank.name := 'Baltic Digital Bank'
!balticDigitalBank.bic := 'BALTETEE01'

!new Account('account27_1')
!account27_1.iban := 'EE98-7654-3212-0004'
!account27_1.balance := 200000

!new Account('account27_2')
!account27_2.iban := 'EE12-3456-7890-5678'
!account27_2.balance := 3500

!new Account('account27_3')
!account27_3.iban := 'EE34-5678-9012-7890'
!account27_3.balance := 15000

!new Person('erikSavisaar')
!erikSavisaar.firstName := 'Erik'
!erikSavisaar.lastName := 'Savisaar'
!erikSavisaar.age := 38

!new Person('katarinaPetrov')
!katarinaPetrov.firstName := 'Katarina'
!katarinaPetrov.lastName := 'Petrov'
!katarinaPetrov.age := 29

!new Person('miguelAlvarez')
!miguelAlvarez.firstName := 'Miguel'
!miguelAlvarez.lastName := 'Alvarez'
!miguelAlvarez.age := 42

!insert (balticDigitalBank, account27_1) into AccountOfBanks
!insert (balticDigitalBank, account27_2) into AccountOfBanks
!insert (balticDigitalBank, account27_3) into AccountOfBanks

!insert (erikSavisaar, account27_1) into Ownership
!insert (katarinaPetrov, account27_1) into Ownership

!insert (katarinaPetrov, account27_2) into Ownership

!insert (miguelAlvarez, account27_3) into Ownership

!insert (erikSavisaar, account27_1) into Use
!insert (katarinaPetrov, account27_1) into Use
!insert (miguelAlvarez, account27_1) into Use

!insert (erikSavisaar, account27_2) into Use

!insert (katarinaPetrov, account27_3) into Use
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 37 | 0.00% |
| Multiplicities Errors | 0 | 12 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 3 | 3 | 100.00% |
| IBANs (Realistic) | 0 | 3 | 0.00% |
| BICs (Realistic) | 1 | 1 | 100.00% |
| Countries (Realistic) | 0 | 1 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
EE98765432120004
```
```
EE12345678905678
```
```
EE34567890127890
```
```
EE98765432120004
```
```
EE12345678905678
```
```
EE34567890127890
```

| Failed BICs (Realistic) | 
|---| 
```
BALTETEE01
```

## Category invalid
```
!new Bank('unityCooperativeBank')
!unityCooperativeBank.country := 'Kenya'
!unityCooperativeBank.name := 'Unity Cooperative Bank'
!unityCooperativeBank.bic := 'UCBKE44'

!new Account('account23_9')
!account23_9.iban := 'KE74 5678 1234 0001'
!account23_9.balance := 5000

!new Account('account23_10')
!account23_10.iban := 'KE55 2345 6789 0012'
!account23_10.balance := 7500

!new Person('aminaKareem')
!aminaKareem.firstName := 'Amina'
!aminaKareem.lastName := 'Kareem'
!aminaKareem.age := 52

!new Person('victorMwangi')
!victorMwangi.firstName := 'Victor'
!victorMwangi.lastName := 'Mwangi'
!victorMwangi.age := 47

!new Person('graceAchola')
!graceAchola.firstName := 'Grace'
!graceAchola.lastName := 'Achola'
!graceAchola.age := 30

!new Person('elijahWanjiku')
!elijahWanjiku.firstName := 'Elijah'
!elijahWanjiku.lastName := 'Wanjiku'
!elijahWanjiku.age := 32

!insert (unityCooperativeBank, account23_9) into AccountOfBanks
!insert (unityCooperativeBank, account23_10) into AccountOfBanks

!insert (aminaKareem, account23_9) into Ownership
!insert (victorMwangi, account23_9) into Ownership

!insert (aminaKareem, account23_10) into Ownership

!insert (aminaKareem, account23_9) into Use
!insert (victorMwangi, account23_9) into Use
!insert (graceAchola, account23_9) into Use
!insert (elijahWanjiku, account23_9) into Use

!insert (aminaKareem, account23_10) into Use
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 10 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 2 | 2 | 100.00% |
| IBANs (Realistic) | 0 | 2 | 0.00% |
| BICs (Realistic) | 1 | 1 | 100.00% |
| Countries (Realistic) | 0 | 1 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
KE74567812340001
```
```
KE55234567890012
```
```
KE74567812340001
```
```
KE55234567890012
```

| Failed BICs (Realistic) | 
|---| 
```
UCBKE44
```

## Generation 5 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 230 | 0.00% |
| Multiplicities Errors | 0 | 65 | 0.00% |
| Invariants Errors | 0 | 8 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 10 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 17 | 17 | 100.00% |
| IBANs (Realistic) | 5 | 17 | 29.41% |
| BICs (Realistic) | 4 | 6 | 66.67% |
| Countries (Realistic) | 0 | 6 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
IN4321098765432109876543210
```
```
IN5432109876543210987654321
```
```
IN6543210987654321098765432
```
```
IN7654321098765432109876543
```
```
IN8765432109876543210987654
```
```
IN9876543210987654321098765
```
```
IN4321098765432109876543210
```
```
IN5432109876543210987654321
```
```
IN6543210987654321098765432
```
```
IN7654321098765432109876543
```
```
IN8765432109876543210987654
```
```
IN9876543210987654321098765
```
```
EG64NILDB000000123456789045
```
```
EG64NILDB000000123456789045
```
```
PL9088776655A
```
```
AE4455667788B
```
```
PL3322110044C
```
```
AE9988776644D
```
```
PL6677889900E
```
```
PL9088776655A
```
```
AE4455667788B
```
```
PL3322110044C
```
```
AE9988776644D
```
```
PL6677889900E
```
```
EE98765432120004
```
```
EE12345678905678
```
```
EE34567890127890
```
```
EE98765432120004
```
```
EE12345678905678
```
```
EE34567890127890
```
```
KE74567812340001
```
```
KE55234567890012
```
```
KE74567812340001
```
```
KE55234567890012
```

| Failed IBANs (Realistic) | 
|---| 
```
PL9088776655A
```
```
AE4455667788B
```
```
PL3322110044C
```
```
AE9988776644D
```
```
PL6677889900E
```
```
PL9088776655A
```
```
AE4455667788B
```
```
PL3322110044C
```
```
AE9988776644D
```
```
PL6677889900E
```

| Failed BICs (Realistic) | 
|---| 
```
WBPL10456
```
```
EFUAE67890
```
```
BALTETEE01
```
```
UCBKE44
```

# Generation 6
## Category baseline
```
!new Bank('royalBankOfCanada')
!royalBankOfCanada.country := 'Canada'
!royalBankOfCanada.name := 'Royal Bank of Canada'
!royalBankOfCanada.bic := 'ROYCCAT2XXX'

!new Account('account20_1')
!account20_1.iban := 'CA9112345678901234567890123'
!account20_1.balance := 4200

!new Account('account20_2')
!account20_2.iban := 'CA9234567890123456789012345'
!account20_2.balance := 9500

!new Account('account20_3')
!account20_3.iban := 'CA9345678901234567890123456'
!account20_3.balance := 300

!new Person('liamOConnor2')
!liamOConnor2.firstName := 'Liam'
!liamOConnor2.lastName := 'O\'Connor'
!liamOConnor2.age := 38

!new Person('emilyLi')
!emilyLi.firstName := 'Emily'
!emilyLi.lastName := 'Li'
!emilyLi.age := 26

!new Person('noahThompson')
!noahThompson.firstName := 'Noah'
!noahThompson.lastName := 'Thompson'
!noahThompson.age := 44

!new Person('sophiaPatel')
!sophiaPatel.firstName := 'Sophia'
!sophiaPatel.lastName := 'Patel'
!sophiaPatel.age := 33

!insert (royalBankOfCanada, account20_1) into AccountOfBanks
!insert (royalBankOfCanada, account20_2) into AccountOfBanks
!insert (royalBankOfCanada, account20_3) into AccountOfBanks

!insert (liamOConnor2, account20_1) into Ownership

!insert (emilyLi, account20_2) into Ownership
!insert (sophiaPatel, account20_2) into Ownership

!insert (noahThompson, account20_3) into Ownership

!insert (liamOConnor2, account20_1) into Use
!insert (sophiaPatel, account20_1) into Use

!insert (emilyLi, account20_2) into Use
!insert (noahThompson, account20_2) into Use

!insert (noahThompson, account20_3) into Use
!insert (liamOConnor2, account20_3) into Use
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 42 | 0.00% |
| Multiplicities Errors | 0 | 13 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 3 | 3 | 100.00% |
| IBANs (Realistic) | 0 | 3 | 0.00% |
| BICs (Realistic) | 0 | 1 | 0.00% |
| Countries (Realistic) | 0 | 1 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
CA9112345678901234567890123
```
```
CA9234567890123456789012345
```
```
CA9345678901234567890123456
```
```
CA9112345678901234567890123
```
```
CA9234567890123456789012345
```
```
CA9345678901234567890123456
```

## Category boundary
```
!new Bank('brasilBank')
!brasilBank.country := 'Brazil'
!brasilBank.name := 'BrasilBank'
!brasilBank.bic := 'BRASBRSP001'

!new Account('account25')
!account25.iban := 'BR18BRAS00000012345678901'
!account25.balance := 250000

!new Person('carlosSilva')
!carlosSilva.firstName := 'Carlos'
!carlosSilva.lastName := 'Silva'
!carlosSilva.age := 29

!new Person('fernandaLima')
!fernandaLima.firstName := 'Fernanda'
!fernandaLima.lastName := 'Lima'
!fernandaLima.age := 35

!new Person('marceloPereira')
!marceloPereira.firstName := 'Marcelo'
!marceloPereira.lastName := 'Pereira'
!marceloPereira.age := 40

!new Person('anaSouza')
!anaSouza.firstName := 'Ana'
!anaSouza.lastName := 'Souza'
!anaSouza.age := 27

!insert (brasilBank, account25) into AccountOfBanks

!insert (carlosSilva, account25) into Ownership
!insert (fernandaLima, account25) into Ownership

!insert (marceloPereira, account25) into Use
!insert (anaSouza, account25) into Use
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 28 | 0.00% |
| Multiplicities Errors | 0 | 5 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 1 | 1 | 100.00% |
| IBANs (Realistic) | 0 | 1 | 0.00% |
| BICs (Realistic) | 0 | 1 | 0.00% |
| Countries (Realistic) | 0 | 1 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
BR18BRAS00000012345678901
```
```
BR18BRAS00000012345678901
```

## Category complex
```
!new Bank('svenskaKapitalbank')
!svenskaKapitalbank.country := 'Sweden'
!svenskaKapitalbank.name := 'Svenska Kapitalbank'
!svenskaKapitalbank.bic := 'SKSE90123'

!new Bank('dhakaSavingsBank')
!dhakaSavingsBank.country := 'Bangladesh'
!dhakaSavingsBank.name := 'Dhaka Savings Bank'
!dhakaSavingsBank.bic := 'DSBD76980'

!new Person('sigridBlomqvist')
!sigridBlomqvist.firstName := 'Sigrid'
!sigridBlomqvist.lastName := 'Blomqvist'
!sigridBlomqvist.age := 44

!new Person('rahulRoy')
!rahulRoy.firstName := 'Rahul'
!rahulRoy.lastName := 'Roy'
!rahulRoy.age := 37

!new Person('andersLindberg')
!andersLindberg.firstName := 'Anders'
!andersLindberg.lastName := 'Lindberg'
!andersLindberg.age := 59

!new Person('taraKhan')
!taraKhan.firstName := 'Tara'
!taraKhan.lastName := 'Khan'
!taraKhan.age := 27

!new Person('linneaNordin')
!linneaNordin.firstName := 'Linnea'
!linneaNordin.lastName := 'Nordin'
!linneaNordin.age := 35

!new Account('account30_1')
!account30_1.iban := 'SE1234567890F'
!account30_1.balance := 18000

!new Account('account30_2')
!account30_2.iban := 'BD1122334455G'
!account30_2.balance := 4700

!new Account('account30_3')
!account30_3.iban := 'SE7890123456H'
!account30_3.balance := 3500

!new Account('account30_4')
!account30_4.iban := 'BD5544332211I'
!account30_4.balance := 250

!new Account('account30_5')
!account30_5.iban := 'SE4567890123J'
!account30_5.balance := 5000

!insert (svenskaKapitalbank, account30_1) into AccountOfBanks
!insert (dhakaSavingsBank, account30_2) into AccountOfBanks
!insert (svenskaKapitalbank, account30_3) into AccountOfBanks
!insert (dhakaSavingsBank, account30_4) into AccountOfBanks
!insert (svenskaKapitalbank, account30_5) into AccountOfBanks

!insert (sigridBlomqvist, account30_1) into Ownership

!insert (rahulRoy, account30_2) into Ownership

!insert (andersLindberg, account30_3) into Ownership

!insert (taraKhan, account30_4) into Ownership
!insert (rahulRoy, account30_4) into Ownership

!insert (linneaNordin, account30_5) into Ownership
!insert (sigridBlomqvist, account30_5) into Ownership

!insert (sigridBlomqvist, account30_1) into Use
!insert (linneaNordin, account30_1) into Use

!insert (rahulRoy, account30_2) into Use
!insert (taraKhan, account30_2) into Use

!insert (andersLindberg, account30_3) into Use
!insert (sigridBlomqvist, account30_3) into Use

!insert (taraKhan, account30_4) into Use

!insert (linneaNordin, account30_5) into Use
!insert (andersLindberg, account30_5) into Use
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 64 | 0.00% |
| Multiplicities Errors | 0 | 21 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 5 | 5 | 100.00% |
| IBANs (Realistic) | 5 | 5 | 100.00% |
| BICs (Realistic) | 2 | 2 | 100.00% |
| Countries (Realistic) | 0 | 2 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
SE1234567890F
```
```
BD1122334455G
```
```
SE7890123456H
```
```
BD5544332211I
```
```
SE4567890123J
```
```
SE1234567890F
```
```
BD1122334455G
```
```
SE7890123456H
```
```
BD5544332211I
```
```
SE4567890123J
```

| Failed IBANs (Realistic) | 
|---| 
```
SE1234567890F
```
```
BD1122334455G
```
```
SE7890123456H
```
```
BD5544332211I
```
```
SE4567890123J
```
```
SE1234567890F
```
```
BD1122334455G
```
```
SE7890123456H
```
```
BD5544332211I
```
```
SE4567890123J
```

| Failed BICs (Realistic) | 
|---| 
```
SKSE90123
```
```
DSBD76980
```

## Category edge
```
!new Bank('ubuntuGreenBank')
!ubuntuGreenBank.country := 'South Africa'
!ubuntuGreenBank.name := 'Ubuntu Green Bank'
!ubuntuGreenBank.bic := 'UGBZAZAJ'

!new Account('account29_1')
!account29_1.iban := 'ZA20-4567-8912-3410'
!account29_1.balance := 500000

!new Account('account29_2')
!account29_2.iban := 'ZA11-7890-1234-5678'
!account29_2.balance := 2000

!new Person('thaboNkosi')
!thaboNkosi.firstName := 'Thabo'
!thaboNkosi.lastName := 'Nkosi'
!thaboNkosi.age := 50

!new Person('mayaKhanna')
!mayaKhanna.firstName := 'Maya'
!mayaKhanna.lastName := 'Khanna'
!mayaKhanna.age := 47

!new Person('sofiaGarcia')
!sofiaGarcia.firstName := 'Sofia'
!sofiaGarcia.lastName := 'Garcia'
!sofiaGarcia.age := 52

!insert (ubuntuGreenBank, account29_1) into AccountOfBanks
!insert (ubuntuGreenBank, account29_2) into AccountOfBanks

!insert (thaboNkosi, account29_1) into Ownership
!insert (mayaKhanna, account29_1) into Ownership

!insert (thaboNkosi, account29_2) into Ownership
!insert (mayaKhanna, account29_2) into Ownership

!insert (thaboNkosi, account29_1) into Use
!insert (mayaKhanna, account29_1) into Use
!insert (sofiaGarcia, account29_1) into Use

!insert (sofiaGarcia, account29_2) into Use
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 32 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 2 | 2 | 100.00% |
| IBANs (Realistic) | 0 | 2 | 0.00% |
| BICs (Realistic) | 0 | 1 | 0.00% |
| Countries (Realistic) | 0 | 1 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
ZA20456789123410
```
```
ZA11789012345678
```
```
ZA20456789123410
```
```
ZA11789012345678
```

## Category invalid
```
!new Bank('techInnovatorsBank')
!techInnovatorsBank.country := 'Germany'
!techInnovatorsBank.name := 'Tech Innovators Bank'
!techInnovatorsBank.bic := 'TIBDE4F'

!new Account('account26_11')
!account26_11.iban := 'DE89 3704 0044 0532'
!account26_11.balance := 100000

!new Account('account26_12')
!account26_12.iban := 'DE44 5001 0517 5400'
!account26_12.balance := 150000

!new Person('svenSchneider')
!svenSchneider.firstName := 'Sven'
!svenSchneider.lastName := 'Schneider'
!svenSchneider.age := 36

!new Person('luisaGarcia')
!luisaGarcia.firstName := 'Luisa'
!luisaGarcia.lastName := 'Garcia'
!luisaGarcia.age := 42

!new Person('jamalOwens')
!jamalOwens.firstName := 'Jamal'
!jamalOwens.lastName := 'Owens'
!jamalOwens.age := 28

!new Person('fatimaHassan')
!fatimaHassan.firstName := 'Fatima'
!fatimaHassan.lastName := 'Hassan'
!fatimaHassan.age := 33

!insert (techInnovatorsBank, account26_11) into AccountOfBanks
!insert (techInnovatorsBank, account26_12) into AccountOfBanks

!insert (svenSchneider, account26_11) into Ownership
!insert (luisaGarcia, account26_11) into Ownership

!insert (svenSchneider, account26_12) into Ownership
!insert (fatimaHassan, account26_12) into Ownership

!insert (svenSchneider, account26_11) into Use
!insert (luisaGarcia, account26_11) into Use
!insert (jamalOwens, account26_11) into Use
!insert (fatimaHassan, account26_11) into Use

!insert (svenSchneider, account26_12) into Use
!insert (jamalOwens, account26_12) into Use
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 12 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 2 | 2 | 100.00% |
| IBANs (Realistic) | 0 | 2 | 0.00% |
| BICs (Realistic) | 1 | 1 | 100.00% |
| Countries (Realistic) | 0 | 1 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
DE89370400440532
```
```
DE44500105175400
```
```
DE89370400440532
```
```
DE44500105175400
```

| Failed BICs (Realistic) | 
|---| 
```
TIBDE4F
```

## Generation 6 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 204 | 0.00% |
| Multiplicities Errors | 0 | 49 | 0.00% |
| Invariants Errors | 0 | 8 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 12 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 13 | 13 | 100.00% |
| IBANs (Realistic) | 5 | 13 | 38.46% |
| BICs (Realistic) | 3 | 6 | 50.00% |
| Countries (Realistic) | 0 | 6 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
CA9112345678901234567890123
```
```
CA9234567890123456789012345
```
```
CA9345678901234567890123456
```
```
CA9112345678901234567890123
```
```
CA9234567890123456789012345
```
```
CA9345678901234567890123456
```
```
BR18BRAS00000012345678901
```
```
BR18BRAS00000012345678901
```
```
SE1234567890F
```
```
BD1122334455G
```
```
SE7890123456H
```
```
BD5544332211I
```
```
SE4567890123J
```
```
SE1234567890F
```
```
BD1122334455G
```
```
SE7890123456H
```
```
BD5544332211I
```
```
SE4567890123J
```
```
ZA20456789123410
```
```
ZA11789012345678
```
```
ZA20456789123410
```
```
ZA11789012345678
```
```
DE89370400440532
```
```
DE44500105175400
```
```
DE89370400440532
```
```
DE44500105175400
```

| Failed IBANs (Realistic) | 
|---| 
```
SE1234567890F
```
```
BD1122334455G
```
```
SE7890123456H
```
```
BD5544332211I
```
```
SE4567890123J
```
```
SE1234567890F
```
```
BD1122334455G
```
```
SE7890123456H
```
```
BD5544332211I
```
```
SE4567890123J
```

| Failed BICs (Realistic) | 
|---| 
```
SKSE90123
```
```
DSBD76980
```
```
TIBDE4F
```

# Summary for all generations
| Summary | Value | 
|---|---| 
| Model | GPT_4O | 
| Type | CoT | 
| System | bank | 
| Number of generations | 6 | 

| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 1267 | 0.00% |
| Multiplicities Errors | 0 | 325 | 0.00% |
| Invariants Errors | 0 | 48 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 66 | 0.00% |
| Invariants Errors (Not included on General) | 1 | 12 | 8.33% |

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (2) `Account::positiveBalance': FAILED.
```

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 82 | 83 | 98.80% |
| IBANs (Realistic) | 27 | 83 | 32.53% |
| BICs (Realistic) | 23 | 39 | 58.97% |
| Countries (Realistic) | 0 | 39 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
FR7630004000031234567890185
```
```
FR7630004000039876543210284
```
```
FR7630004000037654321090187
```
```
FR7630004000031234567890185
```
```
FR7630004000039876543210284
```
```
FR7630004000037654321090187
```
```
NG29NAMA0000001234567890
```
```
NG29NAMA0000001234567890
```
```
US1234567890A
```
```
JP0987654321B
```
```
US1122334455C
```
```
JP2233445566D
```
```
US1234567890A
```
```
JP0987654321B
```
```
US1122334455C
```
```
JP2233445566D
```
```
CH93000000001234
```
```
CH18000000005678
```
```
CH93000000001234
```
```
CH18000000005678
```
```
SG1867619120885
```
```
SG1867619120885
```
```
JP668123455678987654321
```
```
JP668123455678123456789
```
```
JP668123455678234567891
```
```
JP668123455678345678912
```
```
JP668123455678987654321
```
```
JP668123455678123456789
```
```
JP668123455678234567891
```
```
JP668123455678345678912
```
```
JP32SAKR0000009876543210
```
```
JP32SAKR0000009876543210
```
```
DE4455667788E
```
```
ZA1239876543F
```
```
DE9988776655G
```
```
ZA8765432190H
```
```
DE4455667788E
```
```
ZA1239876543F
```
```
DE9988776655G
```
```
ZA8765432190H
```
```
BR12345678900001
```
```
SG45678901230045
```
```
SG78901234560789
```
```
BR12345678900001
```
```
SG45678901230045
```
```
SG78901234560789
```
```
AU62123456789012
```
```
AU56876543212345
```
```
AU62123456789012
```
```
AU56876543212345
```
```
BR1500000000001110000123456C1
```
```
BR1500000000002220000234567C2
```
```
BR1500000000003330000345678C3
```
```
BR1500000000001110000123456C1
```
```
BR1500000000002220000234567C2
```
```
BR1500000000003330000345678C3
```
```
IN75TEST0000012345678901
```
```
IN75TEST0000012345678901
```
```
BR0011223344I
```
```
IN8765432109J
```
```
BR5566778899K
```
```
IN1098765432L
```
```
BR0011223344I
```
```
IN8765432109J
```
```
BR5566778899K
```
```
IN1098765432L
```
```
KE29765432100002
```
```
KE34876543210003
```
```
KE29765432100002
```
```
KE34876543210003
```
```
CA91100030000002
```
```
IT20X05428111010
```
```
CA91100030000002
```
```
IT20X05428111010
```
```
NG0112345678901234567890123
```
```
NG0123456789012345678901234
```
```
NG0134567890123456789012345
```
```
NG0145678901234567890123456
```
```
NG0156789012345678901234567
```
```
NG0112345678901234567890123
```
```
NG0123456789012345678901234
```
```
NG0134567890123456789012345
```
```
NG0145678901234567890123456
```
```
NG0156789012345678901234567
```
```
CH93ALPN0000001234567890
```
```
CH93ALPN0000001234567890
```
```
CA5553338889M
```
```
AU7878689501N
```
```
CA2233445566O
```
```
AU1122334455P
```
```
CA6677889900Q
```
```
CA5553338889M
```
```
AU7878689501N
```
```
CA2233445566O
```
```
AU1122334455P
```
```
CA6677889900Q
```
```
CA89123456789101
```
```
CA91112233445566
```
```
CA89123456789101
```
```
CA91112233445566
```
```
US72123456789012
```
```
US37678901234567
```
```
US72123456789012
```
```
US37678901234567
```
```
IN4321098765432109876543210
```
```
IN5432109876543210987654321
```
```
IN6543210987654321098765432
```
```
IN7654321098765432109876543
```
```
IN8765432109876543210987654
```
```
IN9876543210987654321098765
```
```
IN4321098765432109876543210
```
```
IN5432109876543210987654321
```
```
IN6543210987654321098765432
```
```
IN7654321098765432109876543
```
```
IN8765432109876543210987654
```
```
IN9876543210987654321098765
```
```
EG64NILDB000000123456789045
```
```
EG64NILDB000000123456789045
```
```
PL9088776655A
```
```
AE4455667788B
```
```
PL3322110044C
```
```
AE9988776644D
```
```
PL6677889900E
```
```
PL9088776655A
```
```
AE4455667788B
```
```
PL3322110044C
```
```
AE9988776644D
```
```
PL6677889900E
```
```
EE98765432120004
```
```
EE12345678905678
```
```
EE34567890127890
```
```
EE98765432120004
```
```
EE12345678905678
```
```
EE34567890127890
```
```
KE74567812340001
```
```
KE55234567890012
```
```
KE74567812340001
```
```
KE55234567890012
```
```
CA9112345678901234567890123
```
```
CA9234567890123456789012345
```
```
CA9345678901234567890123456
```
```
CA9112345678901234567890123
```
```
CA9234567890123456789012345
```
```
CA9345678901234567890123456
```
```
BR18BRAS00000012345678901
```
```
BR18BRAS00000012345678901
```
```
SE1234567890F
```
```
BD1122334455G
```
```
SE7890123456H
```
```
BD5544332211I
```
```
SE4567890123J
```
```
SE1234567890F
```
```
BD1122334455G
```
```
SE7890123456H
```
```
BD5544332211I
```
```
SE4567890123J
```
```
ZA20456789123410
```
```
ZA11789012345678
```
```
ZA20456789123410
```
```
ZA11789012345678
```
```
DE89370400440532
```
```
DE44500105175400
```
```
DE89370400440532
```
```
DE44500105175400
```

| Failed IBANs (Realistic) | 
|---| 
```
US1234567890A
```
```
JP0987654321B
```
```
US1122334455C
```
```
JP2233445566D
```
```
US1234567890A
```
```
JP0987654321B
```
```
US1122334455C
```
```
JP2233445566D
```
```
DE4455667788E
```
```
ZA1239876543F
```
```
DE9988776655G
```
```
ZA8765432190H
```
```
DE4455667788E
```
```
ZA1239876543F
```
```
DE9988776655G
```
```
ZA8765432190H
```
```
BR0011223344I
```
```
IN8765432109J
```
```
BR5566778899K
```
```
IN1098765432L
```
```
BR0011223344I
```
```
IN8765432109J
```
```
BR5566778899K
```
```
IN1098765432L
```
```
CA5553338889M
```
```
AU7878689501N
```
```
CA2233445566O
```
```
AU1122334455P
```
```
CA6677889900Q
```
```
CA5553338889M
```
```
AU7878689501N
```
```
CA2233445566O
```
```
AU1122334455P
```
```
CA6677889900Q
```
```
PL9088776655A
```
```
AE4455667788B
```
```
PL3322110044C
```
```
AE9988776644D
```
```
PL6677889900E
```
```
PL9088776655A
```
```
AE4455667788B
```
```
PL3322110044C
```
```
AE9988776644D
```
```
PL6677889900E
```
```
SE1234567890F
```
```
BD1122334455G
```
```
SE7890123456H
```
```
BD5544332211I
```
```
SE4567890123J
```
```
SE1234567890F
```
```
BD1122334455G
```
```
SE7890123456H
```
```
BD5544332211I
```
```
SE4567890123J
```

| Failed BICs (Realistic) | 
|---| 
```
NAIJBANKNG01
```
```
GBUS12345
```
```
NBJP67890
```
```
SAKRBANKJP01
```
```
DFGM54321
```
```
UBTZA99082
```
```
BDOLSBRIX
```
```
HNBAU33
```
```
BBRA00012
```
```
BHIN67234
```
```
NTBCA22
```
```
MCBIT33
```
```
MTCA00123
```
```
SCBAU78901
```
```
MLBGCAXR12
```
```
TBCUS33
```
```
WBPL10456
```
```
EFUAE67890
```
```
BALTETEE01
```
```
UCBKE44
```
```
SKSE90123
```
```
DSBD76980
```
```
TIBDE4F
```

