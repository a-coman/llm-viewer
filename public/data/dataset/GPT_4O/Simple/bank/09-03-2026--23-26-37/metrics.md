# Generation 1
```
!new Bank('bank1')
!bank1.country := 'Germany'
!bank1.name := 'Deutsche Bank'
!bank1.bic := 'DEUTDEFF'

!new Bank('bank2')
!bank2.country := 'USA'
!bank2.name := 'Bank of America'
!bank2.bic := 'BOFAUS3N'

!new Account('account1')
!account1.iban := 'DE89370400440532013000'
!account1.balance := 1500

!new Account('account2')
!account2.iban := 'US33000000012345678900'
!account2.balance := 7500

!new Account('account3')
!account3.iban := 'DE42370400440532013001'
!account3.balance := 2300

!new Person('person1')
!person1.firstName := 'Anna'
!person1.lastName := 'Muller'
!person1.age := 25

!new Person('person2')
!person2.firstName := 'John'
!person2.lastName := 'Doe'
!person2.age := 30

!insert (person1, account1) into Ownership
!insert (person1, account3) into Ownership
!insert (person2, account2) into Ownership
!insert (person2, account3) into Ownership

!insert (person1, account1) into Use
!insert (person2, account2) into Use
!insert (person1, account3) into Use
!insert (person2, account3) into Use

!insert (bank1, account1) into AccountOfBanks
!insert (bank2, account2) into AccountOfBanks
!insert (bank1, account3) into AccountOfBanks

!new Person('person3')
!person3.firstName := 'Emily'
!person3.lastName := 'Clark'
!person3.age := 28

!new Person('person4')
!person4.firstName := 'Michael'
!person4.lastName := 'Brown'
!person4.age := 40

!new Account('account4')
!account4.iban := 'US44000000009876543210'
!account4.balance := 5000

!insert (person3, account4) into Ownership
!insert (person4, account4) into Ownership

!insert (person3, account4) into Use
!insert (person4, account4) into Use

!insert (bank2, account4) into AccountOfBanks
```
## Generation 1 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 52 | 0.00% |
| Multiplicities Errors | 0 | 16 | 0.00% |
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
US33000000012345678900
```
```
DE42370400440532013001
```
```
US44000000009876543210
```
```
US33000000012345678900
```
```
DE42370400440532013001
```
```
US44000000009876543210
```

# Generation 2
```
!new Bank('bank3')
!bank3.country := 'Japan'
!bank3.name := 'Mizuho Bank'
!bank3.bic := 'MHCBJPJT'

!new Bank('bank4')
!bank4.country := 'Canada'
!bank4.name := 'Royal Bank of Canada'
!bank4.bic := 'ROYCAT2V'

!new Account('account5')
!account5.iban := 'JP55012345678912345678'
!account5.balance := 10000

!new Account('account6')
!account6.iban := 'CA58098765432109876543'
!account6.balance := 4200

!new Person('person5')
!person5.firstName := 'Hiroshi'
!person5.lastName := 'Yamamoto'
!person5.age := 45

!new Person('person6')
!person6.firstName := 'Lucy'
!person6.lastName := 'Wang'
!person6.age := 32

!new Person('person7')
!person7.firstName := 'David'
!person7.lastName := 'Marx'
!person7.age := 29

!insert (person5, account5) into Ownership
!insert (person6, account6) into Ownership
!insert (person7, account6) into Ownership

!insert (person5, account5) into Use
!insert (person6, account5) into Use
!insert (person6, account6) into Use
!insert (person7, account6) into Use

!insert (bank3, account5) into AccountOfBanks
!insert (bank4, account6) into AccountOfBanks
```
## Generation 2 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 35 | 0.00% |
| Multiplicities Errors | 0 | 9 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 2 | 2 | 100.00% |
| IBANs (Realistic) | 0 | 2 | 0.00% |
| BICs (Realistic) | 0 | 2 | 0.00% |
| Countries (Realistic) | 0 | 2 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
JP55012345678912345678
```
```
CA58098765432109876543
```
```
JP55012345678912345678
```
```
CA58098765432109876543
```

# Generation 3
```
!new Bank('bank5')
!bank5.country := 'Australia'
!bank5.name := 'Commonwealth Bank'
!bank5.bic := 'CTBAAU2S'

!new Bank('bank6')
!bank6.country := 'India'
!bank6.name := 'State Bank of India'
!bank6.bic := 'SBININBB'

!new Account('account7')
!account7.iban := 'AU12345678901234567890'
!account7.balance := 9000

!new Account('account8')
!account8.iban := 'IN09876543210987654321'
!account8.balance := 3500

!new Account('account9')
!account9.iban := 'AU09876543211234567890'
!account9.balance := 800

!new Person('person8')
!person8.firstName := 'Olivia'
!person8.lastName := 'Taylor'
!person8.age := 37

!new Person('person9')
!person9.firstName := 'Raj'
!person9.lastName := 'Kapoor'
!person9.age := 50

!new Person('person10')
!person10.firstName := 'Sophia'
!person10.lastName := 'Green'
!person10.age := 23

!insert (person8, account7) into Ownership
!insert (person9, account8) into Ownership
!insert (person9, account9) into Ownership
!insert (person10, account9) into Ownership

!insert (person8, account7) into Use
!insert (person8, account8) into Use
!insert (person9, account8) into Use
!insert (person10, account7) into Use

!insert (bank5, account7) into AccountOfBanks
!insert (bank6, account8) into AccountOfBanks
!insert (bank5, account9) into AccountOfBanks
```
## Generation 3 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 40 | 0.00% |
| Multiplicities Errors | 0 | 11 | 0.00% |
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
AU12345678901234567890
```
```
IN09876543210987654321
```
```
AU09876543211234567890
```
```
AU12345678901234567890
```
```
IN09876543210987654321
```
```
AU09876543211234567890
```

# Generation 4
```
!new Bank('bank7')
!bank7.country := 'France'
!bank7.name := 'BNP Paribas'
!bank7.bic := 'BNPAFRPP'

!new Bank('bank8')
!bank8.country := 'Brazil'
!bank8.name := 'Banco do Brasil'
!bank8.bic := 'BRASBRRJ'

!new Account('account10')
!account10.iban := 'FR7630006000011234567890189'
!account10.balance := 6400

!new Account('account11')
!account11.iban := 'BR15000000012345678912345'
!account11.balance := 2100

!new Account('account12')
!account12.iban := 'FR7630006000023456789012345'
!account12.balance := 520

!new Person('person11')
!person11.firstName := 'Claire'
!person11.lastName := 'Dupont'
!person11.age := 41

!new Person('person12')
!person12.firstName := 'Pedro'
!person12.lastName := 'Silva'
!person12.age := 35

!insert (person11, account10) into Ownership
!insert (person12, account11) into Ownership
!insert (person12, account12) into Ownership

!insert (person11, account10) into Use
!insert (person11, account12) into Use
!insert (person12, account11) into Use
!insert (person12, account10) into Use

!insert (bank7, account10) into AccountOfBanks
!insert (bank8, account11) into AccountOfBanks
!insert (bank7, account12) into AccountOfBanks
```
## Generation 4 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 35 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
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
BR15000000012345678912345
```
```
FR7630006000023456789012345
```
```
BR15000000012345678912345
```
```
FR7630006000023456789012345
```

# Generation 5
```
!new Bank('bank9')
!bank9.country := 'Italy'
!bank9.name := 'UniCredit'
!bank9.bic := 'UNCRITMM'

!new Bank('bank10')
!bank10.country := 'South Africa'
!bank10.name := 'First National Bank'
!bank10.bic := 'FIRNZAJJ'

!new Account('account13')
!account13.iban := 'IT6010203030405050678989898'
!account13.balance := 4000

!new Account('account14')
!account14.iban := 'ZA4200005001234567890123'
!account14.balance := 0

!new Account('account15')
!account15.iban := 'IT6010203030405060780878797'
!account15.balance := 2800

!new Person('person13')
!person13.firstName := 'Marco'
!person13.lastName := 'Rossi'
!person13.age := 27

!new Person('person14')
!person14.firstName := 'Thandi'
!person14.lastName := 'Naidoo'
!person14.age := 33

!new Person('person15')
!person15.firstName := 'Elena'
!person15.lastName := 'Bianchi'
!person15.age := 29

!insert (person13, account13) into Ownership
!insert (person14, account14) into Ownership
!insert (person15, account15) into Ownership
!insert (person13, account15) into Ownership

!insert (person13, account13) into Use
!insert (person14, account14) into Use
!insert (person15, account15) into Use
!insert (person15, account13) into Use

!insert (bank9, account13) into AccountOfBanks
!insert (bank10, account14) into AccountOfBanks
!insert (bank9, account15) into AccountOfBanks
```
## Generation 5 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 40 | 0.00% |
| Multiplicities Errors | 0 | 11 | 0.00% |
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
IT6010203030405050678989898
```
```
ZA4200005001234567890123
```
```
IT6010203030405060780878797
```
```
IT6010203030405050678989898
```
```
ZA4200005001234567890123
```
```
IT6010203030405060780878797
```

# Generation 6
```
!new Bank('bank11')
!bank11.country := 'Sweden'
!bank11.name := 'Svenska Handelsbanken'
!bank11.bic := 'HANDSESS'

!new Bank('bank12')
!bank12.country := 'Mexico'
!bank12.name := 'BBVA Bancomer'
!bank12.bic := 'BCMRMXMM'

!new Account('account16')
!account16.iban := 'SE4550000000058398257466'
!account16.balance := 15000

!new Account('account17')
!account17.iban := 'MX5500123456789012345678'
!account17.balance := 6500

!new Account('account18')
!account18.iban := 'SE4550000000058398257467'
!account18.balance := 3100

!new Person('person16')
!person16.firstName := 'Erik'
!person16.lastName := 'Lindberg'
!person16.age := 45

!new Person('person17')
!person17.firstName := 'Maria'
!person17.lastName := 'Garcia'
!person17.age := 38

!new Person('person18')
!person18.firstName := 'Johan'
!person18.lastName := 'Andersson'
!person18.age := 22

!insert (person16, account16) into Ownership
!insert (person17, account17) into Ownership
!insert (person18, account18) into Ownership
!insert (person16, account18) into Ownership

!insert (person16, account16) into Use
!insert (person17, account17) into Use
!insert (person17, account16) into Use
!insert (person18, account17) into Use

!insert (bank11, account16) into AccountOfBanks
!insert (bank12, account17) into AccountOfBanks
!insert (bank11, account18) into AccountOfBanks
```
## Generation 6 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 40 | 0.00% |
| Multiplicities Errors | 0 | 11 | 0.00% |
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
MX5500123456789012345678
```
```
SE4550000000058398257467
```
```
MX5500123456789012345678
```
```
SE4550000000058398257467
```

# Generation 7
```
!new Bank('bank13')
!bank13.country := 'Norway'
!bank13.name := 'DNB Bank'
!bank13.bic := 'DNBANOKK'

!new Bank('bank14')
!bank14.country := 'Argentina'
!bank14.name := 'Banco Galicia'
!bank14.bic := 'GALIARBA'

!new Account('account19')
!account19.iban := 'NO9386011117947'
!account19.balance := 7200

!new Account('account20')
!account20.iban := 'AR4500000001054323456789'
!account20.balance := 0

!new Account('account21')
!account21.iban := 'NO9386011117948'
!account21.balance := 2150

!new Person('person19')
!person19.firstName := 'Lars'
!person19.lastName := 'Hansen'
!person19.age := 67

!new Person('person20')
!person20.firstName := 'Camila'
!person20.lastName := 'Rodriguez'
!person20.age := 26

!new Person('person21')
!person21.firstName := 'Sofia'
!person21.lastName := 'Fernandez'
!person21.age := 31

!insert (person19, account19) into Ownership
!insert (person20, account20) into Ownership
!insert (person21, account21) into Ownership
!insert (person19, account21) into Ownership

!insert (person19, account19) into Use
!insert (person20, account20) into Use
!insert (person21, account21) into Use
!insert (person20, account19) into Use

!insert (bank13, account19) into AccountOfBanks
!insert (bank14, account20) into AccountOfBanks
!insert (bank14, account21) into AccountOfBanks
```
## Generation 7 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 40 | 0.00% |
| Multiplicities Errors | 0 | 11 | 0.00% |
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
AR4500000001054323456789
```
```
NO9386011117948
```
```
AR4500000001054323456789
```
```
NO9386011117948
```

# Generation 8
```
!new Bank('bank15')
!bank15.country := 'Netherlands'
!bank15.name := 'ING Bank'
!bank15.bic := 'INGBNL2A'

!new Bank('bank16')
!bank16.country := 'Turkey'
!bank16.name := 'Turkiye Is Bankasi'
!bank16.bic := 'ISBKTRIS'

!new Account('account22')
!account22.iban := 'NL91ABNA0417164300'
!account22.balance := 3000

!new Account('account23')
!account23.iban := 'TR320006100519786457841326'
!account23.balance := 4900

!new Account('account24')
!account24.iban := 'NL91ABNA0417164301'
!account24.balance := 1500

!new Person('person22')
!person22.firstName := 'Maarten'
!person22.lastName := 'De Jong'
!person22.age := 34

!new Person('person23')
!person23.firstName := 'Elif'
!person23.lastName := 'Yildiz'
!person23.age := 29

!new Person('person24')
!person24.firstName := 'Isabella'
!person24.lastName := 'Visser'
!person24.age := 37

!insert (person22, account22) into Ownership
!insert (person23, account23) into Ownership
!insert (person24, account24) into Ownership
!insert (person22, account24) into Ownership

!insert (person22, account22) into Use
!insert (person23, account23) into Use
!insert (person24, account24) into Use
!insert (person23, account22) into Use

!insert (bank15, account22) into AccountOfBanks
!insert (bank16, account23) into AccountOfBanks
!insert (bank15, account24) into AccountOfBanks
```
## Generation 8 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 40 | 0.00% |
| Multiplicities Errors | 0 | 11 | 0.00% |
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
TR320006100519786457841326
```
```
NL91ABNA0417164301
```
```
TR320006100519786457841326
```
```
NL91ABNA0417164301
```

# Generation 9
```
!new Bank('bank17')
!bank17.country := 'Singapore'
!bank17.name := 'DBS Bank'
!bank17.bic := 'DBSSSGSG'

!new Bank('bank18')
!bank18.country := 'New Zealand'
!bank18.name := 'ANZ Bank'
!bank18.bic := 'ANZBNZ22'

!new Account('account25')
!account25.iban := 'SG9012345678000123456789'
!account25.balance := 8900

!new Account('account26')
!account26.iban := 'NZ2012345678912345678900'
!account26.balance := 3200

!new Account('account27')
!account27.iban := 'SG9012345678000123456790'
!account27.balance := 100

!new Person('person25')
!person25.firstName := 'Wei'
!person25.lastName := 'Tan'
!person25.age := 48

!new Person('person26')
!person26.firstName := 'Peter'
!person26.lastName := 'Hayes'
!person26.age := 39 

!new Person('person27')
!person27.firstName := 'Jessica'
!person27.lastName := 'Nguyen'
!person27.age := 36

!insert (person25, account25) into Ownership
!insert (person26, account26) into Ownership
!insert (person27, account27) into Ownership
!insert (person25, account27) into Ownership

!insert (person25, account25) into Use
!insert (person26, account26) into Use
!insert (person26, account25) into Use
!insert (person27, account26) into Use

!insert (bank17, account25) into AccountOfBanks
!insert (bank18, account26) into AccountOfBanks
!insert (bank17, account27) into AccountOfBanks
```
## Generation 9 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 40 | 0.00% |
| Multiplicities Errors | 0 | 11 | 0.00% |
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
SG9012345678000123456789
```
```
NZ2012345678912345678900
```
```
SG9012345678000123456790
```
```
SG9012345678000123456789
```
```
NZ2012345678912345678900
```
```
SG9012345678000123456790
```

# Generation 10
```
!new Bank('bank19')
!bank19.country := 'Switzerland'
!bank19.name := 'Credit Suisse'
!bank19.bic := 'CRESCHZZ80A'

!new Bank('bank20')
!bank20.country := 'South Korea'
!bank20.name := 'Kookmin Bank'
!bank20.bic := 'CZNBKRSE'

!new Account('account28')
!account28.iban := 'CH5604835012345678009'
!account28.balance := 7600

!new Account('account29')
!account29.iban := 'KR2300005112345678912345'
!account29.balance := 4500

!new Account('account30')
!account30.iban := 'CH5604835012345678010'
!account30.balance := 250

!new Person('person28')
!person28.firstName := 'Hans'
!person28.lastName := 'Müller'
!person28.age := 58

!new Person('person29')
!person29.firstName := 'Jun'
!person29.lastName := 'Lee'
!person29.age := 31

!new Person('person30')
!person30.firstName := 'Anna'
!person30.lastName := 'Kim'
!person30.age := 40

!insert (person28, account28) into Ownership
!insert (person29, account29) into Ownership
!insert (person30, account30) into Ownership
!insert (person29, account30) into Ownership

!insert (person28, account28) into Use
!insert (person29, account29) into Use
!insert (person30, account28) into Use
!insert (person30, account29) into Use

!insert (bank19, account28) into AccountOfBanks
!insert (bank20, account29) into AccountOfBanks
!insert (bank19, account30) into AccountOfBanks
```
## Generation 10 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 40 | 0.00% |
| Multiplicities Errors | 0 | 11 | 0.00% |
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
KR2300005112345678912345
```
```
CH5604835012345678010
```
```
KR2300005112345678912345
```
```
CH5604835012345678010
```

# Generation 11
```
!new Bank('bank21')
!bank21.country := 'Russia'
!bank21.name := 'Sberbank'
!bank21.bic := 'SABRRUMM'

!new Bank('bank22')
!bank22.country := 'Thailand'
!bank22.name := 'Bangkok Bank'
!bank22.bic := 'BKKBTHBK'

!new Account('account31')
!account31.iban := 'RU60123456789012345678'
!account31.balance := 10500

!new Account('account32')
!account32.iban := 'TH27123412341234123412'
!account32.balance := 3850

!new Account('account33')
!account33.iban := 'RU60123456789012345679'
!account33.balance := 500

!new Person('person31')
!person31.firstName := 'Ivan'
!person31.lastName := 'Petrov'
!person31.age := 46

!new Person('person32')
!person32.firstName := 'Somchai'
!person32.lastName := 'Prasert'
!person32.age := 54

!new Person('person33')
!person33.firstName := 'Nina'
!person33.lastName := 'Volkova'
!person33.age := 23

!insert (person31, account31) into Ownership
!insert (person32, account32) into Ownership
!insert (person33, account33) into Ownership
!insert (person31, account33) into Ownership

!insert (person31, account31) into Use
!insert (person32, account32) into Use
!insert (person32, account31) into Use
!insert (person33, account32) into Use

!insert (bank21, account31) into AccountOfBanks
!insert (bank22, account32) into AccountOfBanks
!insert (bank21, account33) into AccountOfBanks
```
## Generation 11 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 40 | 0.00% |
| Multiplicities Errors | 0 | 11 | 0.00% |
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
RU60123456789012345678
```
```
TH27123412341234123412
```
```
RU60123456789012345679
```
```
RU60123456789012345678
```
```
TH27123412341234123412
```
```
RU60123456789012345679
```

# Generation 12
```
!new Bank('bank23')
!bank23.country := 'United Arab Emirates'
!bank23.name := 'Emirates NBD'
!bank23.bic := 'EBILAEAD'

!new Bank('bank24')
!bank24.country := 'Malaysia'
!bank24.name := 'Maybank'
!bank24.bic := 'MBBEMYKL'

!new Account('account34')
!account34.iban := 'AE070331234567890123456'
!account34.balance := 12345

!new Account('account35')
!account35.iban := 'MY301234567898765432100'
!account35.balance := 6750

!new Account('account36')
!account36.iban := 'AE070331234567890123457'
!account36.balance := 2500

!new Person('person34')
!person34.firstName := 'Ahmed'
!person34.lastName := 'Al-Farsi'
!person34.age := 29

!new Person('person35')
!person35.firstName := 'Li'
!person35.lastName := 'Chen'
!person35.age := 47

!new Person('person36')
!person36.firstName := 'Fatima'
!person36.lastName := 'Yusof'
!person36.age := 33

!insert (person34, account34) into Ownership
!insert (person35, account35) into Ownership
!insert (person36, account36) into Ownership
!insert (person34, account36) into Ownership

!insert (person34, account34) into Use
!insert (person35, account35) into Use
!insert (person36, account34) into Use
!insert (person35, account36) into Use

!insert (bank23, account34) into AccountOfBanks
!insert (bank24, account35) into AccountOfBanks
!insert (bank23, account36) into AccountOfBanks
```
## Generation 12 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 40 | 0.00% |
| Multiplicities Errors | 0 | 11 | 0.00% |
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
MY301234567898765432100
```
```
AE070331234567890123457
```
```
MY301234567898765432100
```
```
AE070331234567890123457
```

# Generation 13
```
!new Bank('bank25')
!bank25.country := 'United Kingdom'
!bank25.name := 'Barclays'
!bank25.bic := 'BARCGB22'

!new Bank('bank26')
!bank26.country := 'Vietnam'
!bank26.name := 'Vietcombank'
!bank26.bic := 'BFTVVNVX'

!new Account('account37')
!account37.iban := 'GB12BARC20201555555555'
!account37.balance := 5400

!new Account('account38')
!account38.iban := 'VN02123456789123456789'
!account38.balance := 4700

!new Account('account39')
!account39.iban := 'GB12BARC20201555555556'
!account39.balance := 2950

!new Person('person37')
!person37.firstName := 'James'
!person37.lastName := 'Smith'
!person37.age := 61

!new Person('person38')
!person38.firstName := 'Minh'
!person38.lastName := 'Tran'
!person38.age := 47

!new Person('person39')
!person39.firstName := 'Sophie'
!person39.lastName := 'Brown'
!person39.age := 25

!insert (person37, account37) into Ownership
!insert (person38, account38) into Ownership
!insert (person39, account39) into Ownership
!insert (person39, account37) into Ownership

!insert (person37, account37) into Use
!insert (person38, account38) into Use
!insert (person39, account39) into Use
!insert (person38, account37) into Use

!insert (bank25, account37) into AccountOfBanks
!insert (bank26, account38) into AccountOfBanks
!insert (bank25, account39) into AccountOfBanks
```
## Generation 13 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 40 | 0.00% |
| Multiplicities Errors | 0 | 11 | 0.00% |
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
GB12BARC20201555555555
```
```
VN02123456789123456789
```
```
GB12BARC20201555555556
```
```
GB12BARC20201555555555
```
```
VN02123456789123456789
```
```
GB12BARC20201555555556
```

# Generation 14
```
!new Bank('bank27')
!bank27.country := 'Germany'
!bank27.name := 'Commerzbank'
!bank27.bic := 'COBADEFF'

!new Bank('bank28')
!bank28.country := 'Indonesia'
!bank28.name := 'Bank Mandiri'
!bank28.bic := 'BMRIIDJA'

!new Account('account40')
!account40.iban := 'DE89370400440532013001'
!account40.balance := 10450

!new Account('account41')
!account41.iban := 'ID4512345678901234567890'
!account41.balance := 8200

!new Account('account42')
!account42.iban := 'DE89370400440532013002'
!account42.balance := 150

!new Person('person40')
!person40.firstName := 'Karl'
!person40.lastName := 'Schmidt'
!person40.age := 55

!new Person('person41')
!person41.firstName := 'Rini'
!person41.lastName := 'Sutanto'
!person41.age := 42

!new Person('person42')
!person42.firstName := 'Helga'
!person42.lastName := 'Fischer'
!person42.age := 39

!insert (person40, account40) into Ownership
!insert (person41, account41) into Ownership
!insert (person42, account42) into Ownership
!insert (person40, account42) into Ownership

!insert (person40, account40) into Use
!insert (person41, account41) into Use
!insert (person42, account42) into Use
!insert (person41, account40) into Use

!insert (bank27, account40) into AccountOfBanks
!insert (bank28, account41) into AccountOfBanks
!insert (bank27, account42) into AccountOfBanks
```
## Generation 14 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 40 | 0.00% |
| Multiplicities Errors | 0 | 11 | 0.00% |
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
DE89370400440532013001
```
```
ID4512345678901234567890
```
```
DE89370400440532013002
```
```
DE89370400440532013001
```
```
ID4512345678901234567890
```
```
DE89370400440532013002
```

# Generation 15
```
!new Bank('bank29')
!bank29.country := 'Chile'
!bank29.name := 'Banco de Chile'
!bank29.bic := 'BCHICLRM'

!new Bank('bank30')
!bank30.country := 'Egypt'
!bank30.name := 'CIB Bank'
!bank30.bic := 'CIBEEGCX'

!new Account('account43')
!account43.iban := 'CL1234567890123456789012'
!account43.balance := 8900

!new Account('account44')
!account44.iban := 'EG8000020001567890123456'
!account44.balance := 4150

!new Account('account45')
!account45.iban := 'CL1234567890123456789013'
!account45.balance := 675

!new Person('person43')
!person43.firstName := 'Carlos'
!person43.lastName := 'Diaz'
!person43.age := 32

!new Person('person44')
!person44.firstName := 'Amina'
!person44.lastName := 'Hassan'
!person44.age := 45

!new Person('person45')
!person45.firstName := 'Gabriela'
!person45.lastName := 'Rojas'
!person45.age := 27

!insert (person43, account43) into Ownership
!insert (person44, account44) into Ownership
!insert (person45, account45) into Ownership
!insert (person43, account44) into Ownership

!insert (person43, account43) into Use
!insert (person44, account44) into Use
!insert (person45, account45) into Use
!insert (person44, account45) into Use

!insert (bank29, account43) into AccountOfBanks
!insert (bank30, account44) into AccountOfBanks
!insert (bank29, account45) into AccountOfBanks
```
## Generation 15 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 40 | 0.00% |
| Multiplicities Errors | 0 | 11 | 0.00% |
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
CL1234567890123456789012
```
```
EG8000020001567890123456
```
```
CL1234567890123456789013
```
```
CL1234567890123456789012
```
```
EG8000020001567890123456
```
```
CL1234567890123456789013
```

# Generation 16
```
!new Bank('bank31')
!bank31.country := 'Spain'
!bank31.name := 'Banco Santander'
!bank31.bic := 'BSCHESMM'

!new Bank('bank32')
!bank32.country := 'Philippines'
!bank32.name := 'BDO Unibank'
!bank32.bic := 'BNORPHMM'

!new Account('account46')
!account46.iban := 'ES9120000418450200051332'
!account46.balance := 7200

!new Account('account47')
!account47.iban := 'PH230000012345678901258'
!account47.balance := 5300

!new Account('account48')
!account48.iban := 'ES9120000418450200051333'
!account48.balance := 1200

!new Person('person46')
!person46.firstName := 'Juan'
!person46.lastName := 'Martinez'
!person46.age := 34

!new Person('person47')
!person47.firstName := 'Angelo'
!person47.lastName := 'Santos'
!person47.age := 50

!new Person('person48')
!person48.firstName := 'Laura'
!person48.lastName := 'Gomez'
!person48.age := 28

!insert (person46, account46) into Ownership
!insert (person47, account47) into Ownership
!insert (person48, account48) into Ownership
!insert (person46, account48) into Ownership

!insert (person46, account46) into Use
!insert (person47, account47) into Use
!insert (person48, account48) into Use
!insert (person47, account46) into Use

!insert (bank31, account46) into AccountOfBanks
!insert (bank32, account47) into AccountOfBanks
!insert (bank31, account48) into AccountOfBanks
```
## Generation 16 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 40 | 0.00% |
| Multiplicities Errors | 0 | 11 | 0.00% |
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
ES9120000418450200051332
```
```
PH230000012345678901258
```
```
ES9120000418450200051333
```
```
ES9120000418450200051332
```
```
PH230000012345678901258
```
```
ES9120000418450200051333
```

# Generation 17
```
!new Bank('bank33')
!bank33.country := 'Canada'
!bank33.name := 'Scotiabank'
!bank33.bic := 'NOSCCATTC'

!new Bank('bank34')
!bank34.country := 'Israel'
!bank34.name := 'Bank Hapoalim'
!bank34.bic := 'POALILIT'

!new Account('account49')
!account49.iban := 'CA891234567890123456789'
!account49.balance := 9400

!new Account('account50')
!account50.iban := 'IL620307600000123456789'
!account50.balance := 3600

!new Account('account51')
!account51.iban := 'CA891234567890123456788'
!account51.balance := 500

!new Person('person49')
!person49.firstName := 'Lucas'
!person49.lastName := 'Thompson'
!person49.age := 40

!new Person('person50')
!person50.firstName := 'Leah'
!person50.lastName := 'Cohen'
!person50.age := 46

!new Person('person51')
!person51.firstName := 'Sara'
!person51.lastName := 'Davies'
!person51.age := 31

!insert (person49, account49) into Ownership
!insert (person50, account50) into Ownership
!insert (person51, account51) into Ownership
!insert (person49, account51) into Ownership

!insert (person49, account49) into Use
!insert (person50, account50) into Use
!insert (person51, account51) into Use
!insert (person50, account49) into Use

!insert (bank33, account49) into AccountOfBanks
!insert (bank34, account50) into AccountOfBanks
!insert (bank33, account51) into AccountOfBanks
```
## Generation 17 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 40 | 0.00% |
| Multiplicities Errors | 0 | 11 | 0.00% |
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
CA891234567890123456789
```
```
IL620307600000123456789
```
```
CA891234567890123456788
```
```
CA891234567890123456789
```
```
IL620307600000123456789
```
```
CA891234567890123456788
```

| Failed BICs (Realistic) | 
|---| 
```
NOSCCATTC
```

# Generation 18
```
!new Bank('bank35')
!bank35.country := 'Ireland'
!bank35.name := 'Allied Irish Banks'
!bank35.bic := 'AIBKIE2D'

!new Bank('bank36')
!bank36.country := 'China'
!bank36.name := 'Industrial and Commercial Bank of China'
!bank36.bic := 'ICBKCNBJ'

!new Account('account52')
!account52.iban := 'IE29AIBK93115212345678'
!account52.balance := 7800

!new Account('account53')
!account53.iban := 'CN10223344556677889900'
!account53.balance := 1500

!new Account('account54')
!account54.iban := 'IE29AIBK93115212345679'
!account54.balance := 300

!new Person('person52')
!person52.firstName := 'Sean'
!person52.lastName := 'Murphy'
!person52.age := 38

!new Person('person53')
!person53.firstName := 'Lian'
!person53.lastName := 'Zhang'
!person53.age := 44

!new Person('person54')
!person54.firstName := 'Fiona'
!person54.lastName := 'O\'Brien'
!person54.age := 29

!insert (person52, account52) into Ownership
!insert (person53, account53) into Ownership
!insert (person54, account54) into Ownership
!insert (person52, account54) into Ownership

!insert (person52, account52) into Use
!insert (person53, account53) into Use
!insert (person54, account54) into Use
!insert (person53, account52) into Use

!insert (bank35, account52) into AccountOfBanks
!insert (bank36, account53) into AccountOfBanks
!insert (bank35, account54) into AccountOfBanks
```
## Generation 18 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 40 | 0.00% |
| Multiplicities Errors | 0 | 11 | 0.00% |
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
CN10223344556677889900
```
```
IE29AIBK93115212345679
```
```
CN10223344556677889900
```
```
IE29AIBK93115212345679
```

# Generation 19
```
!new Bank('bank37')
!bank37.country := 'Italy'
!bank37.name := 'Intesa Sanpaolo'
!bank37.bic := 'BCITITMM'

!new Bank('bank38')
!bank38.country := 'Japan'
!bank38.name := 'Mitsubishi UFJ Financial Group'
!bank38.bic := 'BOTKJPJT'

!new Account('account55')
!account55.iban := 'IT60X0542811101000000123456'
!account55.balance := 10400

!new Account('account56')
!account56.iban := 'JP018000030123456789012'
!account56.balance := 5800

!new Account('account57')
!account57.iban := 'IT60X0542811101000000123457'
!account57.balance := 700

!new Person('person55')
!person55.firstName := 'Giovanni'
!person55.lastName := 'Rossi'
!person55.age := 52

!new Person('person56')
!person56.firstName := 'Yuki'
!person56.lastName := 'Tanaka'
!person56.age := 36

!new Person('person57')
!person57.firstName := 'Alessia'
!person57.lastName := 'Russo'
!person57.age := 28

!insert (person55, account55) into Ownership
!insert (person56, account56) into Ownership
!insert (person57, account57) into Ownership
!insert (person55, account57) into Ownership

!insert (person55, account55) into Use
!insert (person56, account56) into Use
!insert (person57, account57) into Use
!insert (person56, account55) into Use

!insert (bank37, account55) into AccountOfBanks
!insert (bank38, account56) into AccountOfBanks
!insert (bank37, account57) into AccountOfBanks
```
## Generation 19 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 40 | 0.00% |
| Multiplicities Errors | 0 | 11 | 0.00% |
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
JP018000030123456789012
```
```
IT60X0542811101000000123457
```
```
JP018000030123456789012
```
```
IT60X0542811101000000123457
```

# Generation 20
```
!new Bank('bank39')
!bank39.country := 'United States'
!bank39.name := 'JP Morgan Chase'
!bank39.bic := 'CHASUS33'

!new Bank('bank40')
!bank40.country := 'South Korea'
!bank40.name := 'Shinhan Bank'
!bank40.bic := 'SHBKKRSE'

!new Account('account58')
!account58.iban := 'US102000123456789876543210'
!account58.balance := 11500

!new Account('account59')
!account59.iban := 'KR9300001112345678901234'
!account59.balance := 7650

!new Account('account60')
!account60.iban := 'US102000123456789876543211'
!account60.balance := 800

!new Person('person58')
!person58.firstName := 'Emily'
!person58.lastName := 'Johnson'
!person58.age := 42

!new Person('person59')
!person59.firstName := 'Hyun'
!person59.lastName := 'Choi'
!person59.age := 39

!new Person('person60')
!person60.firstName := 'Michael'
!person60.lastName := 'Williams'
!person60.age := 35

!insert (person58, account58) into Ownership
!insert (person59, account59) into Ownership
!insert (person60, account60) into Ownership
!insert (person58, account60) into Ownership

!insert (person58, account58) into Use
!insert (person59, account59) into Use
!insert (person60, account60) into Use
!insert (person59, account58) into Use

!insert (bank39, account58) into AccountOfBanks
!insert (bank40, account59) into AccountOfBanks
!insert (bank39, account60) into AccountOfBanks
```
## Generation 20 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 40 | 0.00% |
| Multiplicities Errors | 0 | 11 | 0.00% |
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
US102000123456789876543210
```
```
KR9300001112345678901234
```
```
US102000123456789876543211
```
```
US102000123456789876543210
```
```
KR9300001112345678901234
```
```
US102000123456789876543211
```

# Generation 21
```
!new Bank('bank41')
!bank41.country := 'Brazil'
!bank41.name := 'Itaú Unibanco'
!bank41.bic := 'ITAUBRSP'

!new Bank('bank42')
!bank42.country := 'Australia'
!bank42.name := 'Westpac'
!bank42.bic := 'WPACAU2F'

!new Account('account61')
!account61.iban := 'BR1500000000000010932840814P1'
!account61.balance := 9900

!new Account('account62')
!account62.iban := 'AU320000021098765432100'
!account62.balance := 6200

!new Account('account63')
!account63.iban := 'BR1500000000000010932840815P1'
!account63.balance := 400

!new Person('person61')
!person61.firstName := 'Bruno'
!person61.lastName := 'Silva'
!person61.age := 46

!new Person('person62')
!person62.firstName := 'Samantha'
!person62.lastName := 'Taylor'
!person62.age := 29

!new Person('person63')
!person63.firstName := 'Lucas'
!person63.lastName := 'Costa'
!person63.age := 34

!insert (person61, account61) into Ownership
!insert (person62, account62) into Ownership
!insert (person63, account63) into Ownership
!insert (person61, account63) into Ownership

!insert (person61, account61) into Use
!insert (person62, account62) into Use
!insert (person63, account63) into Use
!insert (person62, account61) into Use

!insert (bank41, account61) into AccountOfBanks
!insert (bank42, account62) into AccountOfBanks
!insert (bank41, account63) into AccountOfBanks
```
## Generation 21 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 40 | 0.00% |
| Multiplicities Errors | 0 | 11 | 0.00% |
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
BR1500000000000010932840814P1
```
```
AU320000021098765432100
```
```
BR1500000000000010932840815P1
```
```
BR1500000000000010932840814P1
```
```
AU320000021098765432100
```
```
BR1500000000000010932840815P1
```

# Generation 22
```
!new Bank('bank43')
!bank43.country := 'France'
!bank43.name := 'Société Générale'
!bank43.bic := 'SOGEFRPP'

!new Bank('bank44')
!bank44.country := 'India'
!bank44.name := 'HDFC Bank'
!bank44.bic := 'HDFCINBB'

!new Account('account64')
!account64.iban := 'FR7612548029989876543210893'
!account64.balance := 8300

!new Account('account65')
!account65.iban := 'IN30123456789012345678'
!account65.balance := 5400

!new Account('account66')
!account66.iban := 'FR7612548029989876543210894'
!account66.balance := 600

!new Person('person64')
!person64.firstName := 'Julien'
!person64.lastName := 'Dubois'
!person64.age := 48

!new Person('person65')
!person65.firstName := 'Ananya'
!person65.lastName := 'Sharma'
!person65.age := 27

!new Person('person66')
!person66.firstName := 'Marie'
!person66.lastName := 'Leroux'
!person66.age := 36

!insert (person64, account64) into Ownership
!insert (person65, account65) into Ownership
!insert (person66, account66) into Ownership
!insert (person64, account66) into Ownership

!insert (person64, account64) into Use
!insert (person65, account65) into Use
!insert (person66, account66) into Use
!insert (person65, account64) into Use

!insert (bank43, account64) into AccountOfBanks
!insert (bank44, account65) into AccountOfBanks
!insert (bank43, account66) into AccountOfBanks
```
## Generation 22 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 40 | 0.00% |
| Multiplicities Errors | 0 | 11 | 0.00% |
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
FR7612548029989876543210893
```
```
IN30123456789012345678
```
```
FR7612548029989876543210894
```
```
FR7612548029989876543210893
```
```
IN30123456789012345678
```
```
FR7612548029989876543210894
```

# Generation 23
```
!new Bank('bank45')
!bank45.country := 'Norway'
!bank45.name := 'DNB'
!bank45.bic := 'DNBANOKK'

!new Bank('bank46')
!bank46.country := 'Mexico'
!bank46.name := 'Santander México'
!bank46.bic := 'BSCHMXMM'

!new Account('account67')
!account67.iban := 'NO9386011117947'
!account67.balance := 6200

!new Account('account68')
!account68.iban := 'MX640002026548362643488'
!account68.balance := 5000

!new Account('account69')
!account69.iban := 'NO9386011117948'
!account69.balance := 1500

!new Person('person67')
!person67.firstName := 'Ole'
!person67.lastName := 'Jensen'
!person67.age := 52

!new Person('person68')
!person68.firstName := 'Carlos'
!person68.lastName := 'Gonzalez'
!person68.age := 41

!new Person('person69')
!person69.firstName := 'Emma'
!person69.lastName := 'Johansen'
!person69.age := 29

!insert (person67, account67) into Ownership
!insert (person68, account68) into Ownership
!insert (person69, account69) into Ownership
!insert (person67, account69) into Ownership

!insert (person67, account67) into Use
!insert (person68, account68) into Use
!insert (person69, account69) into Use
!insert (person68, account67) into Use

!insert (bank45, account67) into AccountOfBanks
!insert (bank46, account68) into AccountOfBanks
!insert (bank45, account69) into AccountOfBanks
```
## Generation 23 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 40 | 0.00% |
| Multiplicities Errors | 0 | 11 | 0.00% |
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
MX640002026548362643488
```
```
NO9386011117948
```
```
MX640002026548362643488
```
```
NO9386011117948
```

# Generation 24
```
!new Bank('bank47')
!bank47.country := 'Portugal'
!bank47.name := 'Caixa Geral de Depósitos'
!bank47.bic := 'CGDIPTPL'

!new Bank('bank48')
!bank48.country := 'Singapore'
!bank48.name := 'Oversea-Chinese Banking Corporation'
!bank48.bic := 'OCBCSGSG'

!new Account('account70')
!account70.iban := 'PT50000201231234567890154'
!account70.balance := 7200

!new Account('account71')
!account71.iban := 'SG901234567800123456789'
!account71.balance := 6800

!new Account('account72')
!account72.iban := 'PT50000201231234567890155'
!account72.balance := 950

!new Person('person70')
!person70.firstName := 'Miguel'
!person70.lastName := 'Silveira'
!person70.age := 45

!new Person('person71')
!person71.firstName := 'Chen'
!person71.lastName := 'Wei'
!person71.age := 50

!new Person('person72')
!person72.firstName := 'Ana'
!person72.lastName := 'Moreira'
!person72.age := 33

!insert (person70, account70) into Ownership
!insert (person71, account71) into Ownership
!insert (person72, account72) into Ownership
!insert (person70, account72) into Ownership

!insert (person70, account70) into Use
!insert (person71, account71) into Use
!insert (person72, account72) into Use
!insert (person71, account70) into Use

!insert (bank47, account70) into AccountOfBanks
!insert (bank48, account71) into AccountOfBanks
!insert (bank47, account72) into AccountOfBanks
```
## Generation 24 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 40 | 0.00% |
| Multiplicities Errors | 0 | 11 | 0.00% |
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
SG901234567800123456789
```
```
PT50000201231234567890155
```
```
SG901234567800123456789
```
```
PT50000201231234567890155
```

# Generation 25
```
!new Bank('bank49')
!bank49.country := 'Greece'
!bank49.name := 'National Bank of Greece'
!bank49.bic := 'ETHNGRAA'

!new Bank('bank50')
!bank50.country := 'New Zealand'
!bank50.name := 'Kiwibank'
!bank50.bic := 'KIWINZ22'

!new Account('account73')
!account73.iban := 'GR1601101250000000012300695'
!account73.balance := 8200

!new Account('account74')
!account74.iban := 'NZ9300000123456789012'
!account74.balance := 5700

!new Account('account75')
!account75.iban := 'GR1601101250000000012300696'
!account75.balance := 1200

!new Person('person73')
!person73.firstName := 'Nikos'
!person73.lastName := 'Papadopoulos'
!person73.age := 60

!new Person('person74')
!person74.firstName := 'Mia'
!person74.lastName := 'Johnson'
!person74.age := 46

!new Person('person75')
!person75.firstName := 'Eleni'
!person75.lastName := 'Katsaros'
!person75.age := 34

!insert (person73, account73) into Ownership
!insert (person74, account74) into Ownership
!insert (person75, account75) into Ownership
!insert (person73, account75) into Ownership

!insert (person73, account73) into Use
!insert (person74, account74) into Use
!insert (person75, account75) into Use
!insert (person74, account73) into Use

!insert (bank49, account73) into AccountOfBanks
!insert (bank50, account74) into AccountOfBanks
!insert (bank49, account75) into AccountOfBanks
```
## Generation 25 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 40 | 0.00% |
| Multiplicities Errors | 0 | 11 | 0.00% |
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
NZ9300000123456789012
```
```
GR1601101250000000012300696
```
```
NZ9300000123456789012
```
```
GR1601101250000000012300696
```

# Generation 26
```
!new Bank('bank51')
!bank51.country := 'Turkey'
!bank51.name := 'Ziraat Bank'
!bank51.bic := 'TCZBTR2A'

!new Bank('bank52')
!bank52.country := 'Finland'
!bank52.name := 'Nordea'
!bank52.bic := 'NDEAFIHH'

!new Account('account76')
!account76.iban := 'TR750006200027006400029328'
!account76.balance := 9400

!new Account('account77')
!account77.iban := 'FI2112345600000785'
!account77.balance := 4800

!new Account('account78')
!account78.iban := 'TR750006200027006400029329'
!account78.balance := 350

!new Person('person76')
!person76.firstName := 'Ahmet'
!person76.lastName := 'Yildirim'
!person76.age := 51

!new Person('person77')
!person77.firstName := 'Erik'
!person77.lastName := 'Virtanen'
!person77.age := 37

!new Person('person78')
!person78.firstName := 'Selin'
!person78.lastName := 'Ozdemir'
!person78.age := 28

!insert (person76, account76) into Ownership
!insert (person77, account77) into Ownership
!insert (person78, account78) into Ownership
!insert (person76, account78) into Ownership

!insert (person76, account76) into Use
!insert (person77, account77) into Use
!insert (person78, account78) into Use
!insert (person77, account76) into Use

!insert (bank51, account76) into AccountOfBanks
!insert (bank52, account77) into AccountOfBanks
!insert (bank51, account78) into AccountOfBanks
```
## Generation 26 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 40 | 0.00% |
| Multiplicities Errors | 0 | 11 | 0.00% |
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
TR750006200027006400029328
```
```
TR750006200027006400029329
```
```
TR750006200027006400029328
```
```
TR750006200027006400029329
```

# Generation 27
```
!new Bank('bank53')
!bank53.country := 'Austria'
!bank53.name := 'Raiffeisen Bank'
!bank53.bic := 'RZBAATWW'

!new Bank('bank54')
!bank54.country := 'Thailand'
!bank54.name := 'Kasikornbank'
!bank54.bic := 'KASITHBK'

!new Account('account79')
!account79.iban := 'AT611904300234573201'
!account79.balance := 5100

!new Account('account80')
!account80.iban := 'TH320000000012345678901'
!account80.balance := 4200

!new Account('account81')
!account81.iban := 'AT611904300234573202'
!account81.balance := 100

!new Person('person79')
!person79.firstName := 'Ulrich'
!person79.lastName := 'Baumgartner'
!person79.age := 45

!new Person('person80')
!person80.firstName := 'Narong'
!person80.lastName := 'Sukcharoen'
!person80.age := 54

!new Person('person81')
!person81.firstName := 'Sophia'
!person81.lastName := 'Müller'
!person81.age := 32

!insert (person79, account79) into Ownership
!insert (person80, account80) into Ownership
!insert (person81, account81) into Ownership
!insert (person79, account81) into Ownership

!insert (person79, account79) into Use
!insert (person80, account80) into Use
!insert (person81, account81) into Use
!insert (person80, account79) into Use

!insert (bank53, account79) into AccountOfBanks
!insert (bank54, account80) into AccountOfBanks
!insert (bank53, account81) into AccountOfBanks
```
## Generation 27 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 40 | 0.00% |
| Multiplicities Errors | 0 | 11 | 0.00% |
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
TH320000000012345678901
```
```
AT611904300234573202
```
```
TH320000000012345678901
```
```
AT611904300234573202
```

# Generation 28
```
!new Bank('bank55')
!bank55.country := 'Belgium'
!bank55.name := 'KBC Bank'
!bank55.bic := 'KREDBEBB'

!new Bank('bank56')
!bank56.country := 'South Africa'
!bank56.name := 'Standard Bank'
!bank56.bic := 'SBZAZAJJ'

!new Account('account82')
!account82.iban := 'BE68539007547034'
!account82.balance := 13000

!new Account('account83')
!account83.iban := 'ZA65432109871234567890'
!account83.balance := 6700

!new Account('account84')
!account84.iban := 'BE68539007547035'
!account84.balance := 210

!new Person('person82')
!person82.firstName := 'Luc'
!person82.lastName := 'Dupont'
!person82.age := 53

!new Person('person83')
!person83.firstName := 'Thabo'
!person83.lastName := 'Mbanjwa'
!person83.age := 43

!new Person('person84')
!person84.firstName := 'Nathalie'
!person84.lastName := 'Vermeulen'
!person84.age := 30

!insert (person82, account82) into Ownership
!insert (person83, account83) into Ownership
!insert (person84, account84) into Ownership
!insert (person82, account84) into Ownership

!insert (person82, account82) into Use
!insert (person83, account83) into Use
!insert (person84, account84) into Use
!insert (person83, account82) into Use

!insert (bank55, account82) into AccountOfBanks
!insert (bank56, account83) into AccountOfBanks
!insert (bank55, account84) into AccountOfBanks
```
## Generation 28 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 40 | 0.00% |
| Multiplicities Errors | 0 | 11 | 0.00% |
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
ZA65432109871234567890
```
```
BE68539007547035
```
```
ZA65432109871234567890
```
```
BE68539007547035
```

# Generation 29
```
!new Bank('bank57')
!bank57.country := 'Sweden'
!bank57.name := 'Swedbank'
!bank57.bic := 'SWEDSESS'

!new Bank('bank58')
!bank58.country := 'India'
!bank58.name := 'Axis Bank'
!bank58.bic := 'UTIBINBB'

!new Account('account85')
!account85.iban := 'SE3550000000054910000003'
!account85.balance := 7400

!new Account('account86')
!account86.iban := 'IN09123456789012345678'
!account86.balance := 5400

!new Account('account87')
!account87.iban := 'SE3550000000054910000004'
!account87.balance := 300

!new Person('person85')
!person85.firstName := 'Axel'
!person85.lastName := 'Lundin'
!person85.age := 59

!new Person('person86')
!person86.firstName := 'Priya'
!person86.lastName := 'Kumar'
!person86.age := 49

!new Person('person87')
!person87.firstName := 'Erika'
!person87.lastName := 'Svensson'
!person87.age := 35

!insert (person85, account85) into Ownership
!insert (person86, account86) into Ownership
!insert (person87, account87) into Ownership
!insert (person85, account87) into Ownership

!insert (person85, account85) into Use
!insert (person86, account86) into Use
!insert (person87, account87) into Use
!insert (person86, account85) into Use

!insert (bank57, account85) into AccountOfBanks
!insert (bank58, account86) into AccountOfBanks
!insert (bank57, account87) into AccountOfBanks
```
## Generation 29 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 40 | 0.00% |
| Multiplicities Errors | 0 | 11 | 0.00% |
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
IN09123456789012345678
```
```
SE3550000000054910000004
```
```
IN09123456789012345678
```
```
SE3550000000054910000004
```

# Generation 30
```
!new Bank('bank59')
!bank59.country := 'Denmark'
!bank59.name := 'Danske Bank'
!bank59.bic := 'DABADKKK'

!new Bank('bank60')
!bank60.country := 'Malaysia'
!bank60.name := 'Public Bank'
!bank60.bic := 'PBBEMYKL'

!new Account('account88')
!account88.iban := 'DK5000400440116243'
!account88.balance := 8600

!new Account('account89')
!account89.iban := 'MY790123456789012345'
!account89.balance := 7300

!new Account('account90')
!account90.iban := 'DK5000400440116244'
!account90.balance := 450

!new Person('person88')
!person88.firstName := 'Niels'
!person88.lastName := 'Christensen'
!person88.age := 47

!new Person('person89')
!person89.firstName := 'Aisha'
!person89.lastName := 'Rahman'
!person89.age := 39

!new Person('person90')
!person90.firstName := 'Soren'
!person90.lastName := 'Jensen'
!person90.age := 30

!insert (person88, account88) into Ownership
!insert (person89, account89) into Ownership
!insert (person90, account90) into Ownership
!insert (person88, account90) into Ownership

!insert (person88, account88) into Use
!insert (person89, account89) into Use
!insert (person90, account90) into Use
!insert (person89, account88) into Use

!insert (bank59, account88) into AccountOfBanks
!insert (bank60, account89) into AccountOfBanks
!insert (bank59, account90) into AccountOfBanks
```
## Generation 30 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 40 | 0.00% |
| Multiplicities Errors | 0 | 11 | 0.00% |
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
MY790123456789012345
```
```
DK5000400440116244
```
```
MY790123456789012345
```
```
DK5000400440116244
```

# Summary for all generations
| Summary | Value | 
|---|---| 
| Model | GPT_4O | 
| Type | Simple | 
| System | bank | 
| Number of generations | 30 | 

| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 1202 | 0.00% |
| Multiplicities Errors | 0 | 332 | 0.00% |
| Invariants Errors | 0 | 60 | 0.00% |

| Bank | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| IBANs (Real) | 73 | 90 | 81.11% |
| IBANs (Realistic) | 0 | 90 | 0.00% |
| BICs (Realistic) | 1 | 60 | 1.67% |
| Countries (Realistic) | 0 | 60 | 0.00% |

| Failed IBANs (Real) | 
|---| 
```
US33000000012345678900
```
```
DE42370400440532013001
```
```
US44000000009876543210
```
```
US33000000012345678900
```
```
DE42370400440532013001
```
```
US44000000009876543210
```
```
JP55012345678912345678
```
```
CA58098765432109876543
```
```
JP55012345678912345678
```
```
CA58098765432109876543
```
```
AU12345678901234567890
```
```
IN09876543210987654321
```
```
AU09876543211234567890
```
```
AU12345678901234567890
```
```
IN09876543210987654321
```
```
AU09876543211234567890
```
```
BR15000000012345678912345
```
```
FR7630006000023456789012345
```
```
BR15000000012345678912345
```
```
FR7630006000023456789012345
```
```
IT6010203030405050678989898
```
```
ZA4200005001234567890123
```
```
IT6010203030405060780878797
```
```
IT6010203030405050678989898
```
```
ZA4200005001234567890123
```
```
IT6010203030405060780878797
```
```
MX5500123456789012345678
```
```
SE4550000000058398257467
```
```
MX5500123456789012345678
```
```
SE4550000000058398257467
```
```
AR4500000001054323456789
```
```
NO9386011117948
```
```
AR4500000001054323456789
```
```
NO9386011117948
```
```
TR320006100519786457841326
```
```
NL91ABNA0417164301
```
```
TR320006100519786457841326
```
```
NL91ABNA0417164301
```
```
SG9012345678000123456789
```
```
NZ2012345678912345678900
```
```
SG9012345678000123456790
```
```
SG9012345678000123456789
```
```
NZ2012345678912345678900
```
```
SG9012345678000123456790
```
```
KR2300005112345678912345
```
```
CH5604835012345678010
```
```
KR2300005112345678912345
```
```
CH5604835012345678010
```
```
RU60123456789012345678
```
```
TH27123412341234123412
```
```
RU60123456789012345679
```
```
RU60123456789012345678
```
```
TH27123412341234123412
```
```
RU60123456789012345679
```
```
MY301234567898765432100
```
```
AE070331234567890123457
```
```
MY301234567898765432100
```
```
AE070331234567890123457
```
```
GB12BARC20201555555555
```
```
VN02123456789123456789
```
```
GB12BARC20201555555556
```
```
GB12BARC20201555555555
```
```
VN02123456789123456789
```
```
GB12BARC20201555555556
```
```
DE89370400440532013001
```
```
ID4512345678901234567890
```
```
DE89370400440532013002
```
```
DE89370400440532013001
```
```
ID4512345678901234567890
```
```
DE89370400440532013002
```
```
CL1234567890123456789012
```
```
EG8000020001567890123456
```
```
CL1234567890123456789013
```
```
CL1234567890123456789012
```
```
EG8000020001567890123456
```
```
CL1234567890123456789013
```
```
ES9120000418450200051332
```
```
PH230000012345678901258
```
```
ES9120000418450200051333
```
```
ES9120000418450200051332
```
```
PH230000012345678901258
```
```
ES9120000418450200051333
```
```
CA891234567890123456789
```
```
IL620307600000123456789
```
```
CA891234567890123456788
```
```
CA891234567890123456789
```
```
IL620307600000123456789
```
```
CA891234567890123456788
```
```
CN10223344556677889900
```
```
IE29AIBK93115212345679
```
```
CN10223344556677889900
```
```
IE29AIBK93115212345679
```
```
JP018000030123456789012
```
```
IT60X0542811101000000123457
```
```
JP018000030123456789012
```
```
IT60X0542811101000000123457
```
```
US102000123456789876543210
```
```
KR9300001112345678901234
```
```
US102000123456789876543211
```
```
US102000123456789876543210
```
```
KR9300001112345678901234
```
```
US102000123456789876543211
```
```
BR1500000000000010932840814P1
```
```
AU320000021098765432100
```
```
BR1500000000000010932840815P1
```
```
BR1500000000000010932840814P1
```
```
AU320000021098765432100
```
```
BR1500000000000010932840815P1
```
```
FR7612548029989876543210893
```
```
IN30123456789012345678
```
```
FR7612548029989876543210894
```
```
FR7612548029989876543210893
```
```
IN30123456789012345678
```
```
FR7612548029989876543210894
```
```
MX640002026548362643488
```
```
NO9386011117948
```
```
MX640002026548362643488
```
```
NO9386011117948
```
```
SG901234567800123456789
```
```
PT50000201231234567890155
```
```
SG901234567800123456789
```
```
PT50000201231234567890155
```
```
NZ9300000123456789012
```
```
GR1601101250000000012300696
```
```
NZ9300000123456789012
```
```
GR1601101250000000012300696
```
```
TR750006200027006400029328
```
```
TR750006200027006400029329
```
```
TR750006200027006400029328
```
```
TR750006200027006400029329
```
```
TH320000000012345678901
```
```
AT611904300234573202
```
```
TH320000000012345678901
```
```
AT611904300234573202
```
```
ZA65432109871234567890
```
```
BE68539007547035
```
```
ZA65432109871234567890
```
```
BE68539007547035
```
```
IN09123456789012345678
```
```
SE3550000000054910000004
```
```
IN09123456789012345678
```
```
SE3550000000054910000004
```
```
MY790123456789012345
```
```
DK5000400440116244
```
```
MY790123456789012345
```
```
DK5000400440116244
```

| Failed BICs (Realistic) | 
|---| 
```
NOSCCATTC
```

