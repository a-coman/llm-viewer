# Generation 1
## Category baseline
```
!new AddressBook('GlobalConnectAddressBook')

!new Person('MariaGonzalez')
!MariaGonzalez.name := 'Maria Gonzalez'
!MariaGonzalez.phone := '+34-608-123456'
!MariaGonzalez.website := 'www.mariagonzalez.com'
!MariaGonzalez.email := 'maria.gonzalez@example.com'
!MariaGonzalez.title := 'Software Engineer'

!new Address('MariaGonzalezAddress')
!MariaGonzalezAddress.city := 'Barcelona'
!MariaGonzalezAddress.street := 'Carrer de Balmes'
!MariaGonzalezAddress.houseNr := '10B'
!insert (MariaGonzalez, MariaGonzalezAddress) into ContactContainsAddress

!new Note('MariaGonzalezNote1')
!MariaGonzalezNote1.author := 'Maria Gonzalez'
!MariaGonzalezNote1.time := Date('2023-03-15')
!MariaGonzalezNote1.type := #MEETING
!MariaGonzalezNote1.comment := 'Discuss project milestones with team A.'
!insert (MariaGonzalez, MariaGonzalezNote1) into ContactContainsNote

!new Note('MariaGonzalezNote2')
!MariaGonzalezNote2.author := 'Maria Gonzalez'
!MariaGonzalezNote2.time := Date('2023-06-05')
!MariaGonzalezNote2.type := #CALL
!MariaGonzalezNote2.comment := 'Client feedback on the recent software release.'
!insert (MariaGonzalez, MariaGonzalezNote2) into ContactContainsNote

!new Person('AliceChen')
!AliceChen.name := 'Alice Chen'
!AliceChen.phone := '+86-21-3338-7766'
!AliceChen.website := 'www.alicechen.cn'
!AliceChen.email := 'alice.chen@example.cn'
!AliceChen.title := 'Product Manager'

!new Address('AliceChenAddress')
!AliceChenAddress.city := 'Shanghai'
!AliceChenAddress.street := 'Nanjing Road'
!AliceChenAddress.houseNr := '89'
!insert (AliceChen, AliceChenAddress) into ContactContainsAddress

!new Note('AliceChenNote1')
!AliceChenNote1.author := 'Alice Chen'
!AliceChenNote1.time := Date('2023-05-01')
!AliceChenNote1.type := #CALL
!AliceChenNote1.comment := 'Supplier negotiation update.'
!insert (AliceChen, AliceChenNote1) into ContactContainsNote

!new Relationship('MariaToAliceCoworker')
!MariaToAliceCoworker.type := #COWORKER
!insert (MariaToAliceCoworker, AliceChen) into RelationshipToContact
!insert (MariaGonzalez, MariaToAliceCoworker) into ContactToRelationship

!new Person('DavidEllis')
!DavidEllis.name := 'David Ellis'
!DavidEllis.phone := '+44-20-555-9876'
!DavidEllis.website := 'www.davidellis.net'
!DavidEllis.email := 'david.ellis@corporatemail.com'
!DavidEllis.title := 'CEO'

!new Address('DavidEllisAddress')
!DavidEllisAddress.city := 'London'
!DavidEllisAddress.street := 'Kensington High St'
!DavidEllisAddress.houseNr := '245'
!insert (DavidEllis, DavidEllisAddress) into ContactContainsAddress

!new Note('DavidEllisNote1')
!DavidEllisNote1.author := 'David Ellis'
!DavidEllisNote1.time := Date('2023-11-14')
!DavidEllisNote1.type := #MEETING
!DavidEllisNote1.comment := 'Board meeting scheduled for next year\'s planning.'
!insert (DavidEllis, DavidEllisNote1) into ContactContainsNote

!new Relationship('MariaToDavidBoss')
!MariaToDavidBoss.type := #BOSS
!insert (MariaToDavidBoss, DavidEllis) into RelationshipToContact
!insert (MariaGonzalez, MariaToDavidBoss) into ContactToRelationship

!new Relationship('DavidToMariaEmployee')
!DavidToMariaEmployee.type := #EMPLOYEE
!insert (DavidToMariaEmployee, MariaGonzalez) into RelationshipToContact
!insert (DavidEllis, DavidToMariaEmployee) into ContactToRelationship

!new Relationship('DavidToAliceCoworker')
!DavidToAliceCoworker.type := #COWORKER
!insert (DavidToAliceCoworker, AliceChen) into RelationshipToContact
!insert (DavidEllis, DavidToAliceCoworker) into ContactToRelationship

!new Company('TechSolutionsLtd')
!TechSolutionsLtd.name := 'Tech Solutions Ltd.'
!TechSolutionsLtd.phone := '+1-213-555-0110'
!TechSolutionsLtd.website := 'www.techsolutions.com'
!TechSolutionsLtd.email := 'contact@techsolutions.com'
!TechSolutionsLtd.industry := 'Information Technology'

!new Address('TechSolutionsAddress1')
!TechSolutionsAddress1.city := 'Los Angeles'
!TechSolutionsAddress1.street := 'Sunset Blvd'
!TechSolutionsAddress1.houseNr := '120'
!insert (TechSolutionsLtd, TechSolutionsAddress1) into ContactContainsAddress

!new Address('TechSolutionsAddress2')
!TechSolutionsAddress2.city := 'New York'
!TechSolutionsAddress2.street := 'Avenue of the Americas'
!TechSolutionsAddress2.houseNr := '55'
!insert (TechSolutionsLtd, TechSolutionsAddress2) into ContactContainsAddress

!new Note('TechSolutionsNote1')
!TechSolutionsNote1.author := 'John Doe'
!TechSolutionsNote1.time := Date('2023-08-22')
!TechSolutionsNote1.type := #EMAIL
!TechSolutionsNote1.comment := 'Confirmation of the annual contract renewal.'
!insert (TechSolutionsLtd, TechSolutionsNote1) into ContactContainsNote

!new Relationship('AliceToTechSolutionsSubdivision')
!AliceToTechSolutionsSubdivision.type := #SUBDIVISION
!insert (AliceToTechSolutionsSubdivision, TechSolutionsLtd) into RelationshipToContact
!insert (AliceChen, AliceToTechSolutionsSubdivision) into ContactToRelationship

!insert (GlobalConnectAddressBook, MariaGonzalez) into AddressBookMadeOfContact
!insert (GlobalConnectAddressBook, TechSolutionsLtd) into AddressBookMadeOfContact
!insert (GlobalConnectAddressBook, DavidEllis) into AddressBookMadeOfContact
!insert (GlobalConnectAddressBook, AliceChen) into AddressBookMadeOfContact
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 104 | 0.00% |
| Multiplicities Errors | 0 | 24 | 0.00% |
| Invariants Errors | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 4 | 0.00% |
| Websites | 0 | 4 | 0.00% |
| Emails | 0 | 4 | 0.00% |
| Addresses | 4 | 5 | 80.00% |

| Invalid Addresses | 
|---| 
```
Nanjing Road, 89, Shanghai
```
```
Kensington High St, 245, London
```
```
Sunset Blvd, 120, Los Angeles
```
```
Avenue of the Americas, 55, New York
```

## Category boundary
```
!new AddressBook('GlobalBusinessNetworkAddressBook')

!new Company('WorldCorp')
!WorldCorp.name := 'World Corp'
!WorldCorp.phone := '+1-800-555-0198'
!WorldCorp.website := 'www.worldcorp.com'
!WorldCorp.email := 'contact@worldcorp.com'
!WorldCorp.industry := 'Technology'

!new Address('WorldCorpAddress1')
!WorldCorpAddress1.city := 'New York'
!WorldCorpAddress1.houseNr := '789'
!WorldCorpAddress1.street := 'Broad Street'
!insert (WorldCorp, WorldCorpAddress1) into ContactContainsAddress

!new Note('WorldCorpNote1')
!WorldCorpNote1.author := 'John Smith'
!WorldCorpNote1.time := Date('2023-03-15')
!WorldCorpNote1.type := #MEETING
!WorldCorpNote1.comment := 'Initial meeting to discuss potential partnership.'
!insert (WorldCorp, WorldCorpNote1) into ContactContainsNote

!new Note('WorldCorpNote2')
!WorldCorpNote2.author := 'Jane Doe'
!WorldCorpNote2.time := Date('2023-04-01')
!WorldCorpNote2.type := #CALL
!WorldCorpNote2.comment := 'Follow-up call regarding merger details.'
!insert (WorldCorp, WorldCorpNote2) into ContactContainsNote

!new Note('WorldCorpNote3')
!WorldCorpNote3.author := 'Michael Chan'
!WorldCorpNote3.time := Date('2023-05-10')
!WorldCorpNote3.type := #EMAIL
!WorldCorpNote3.comment := 'Email correspondence about project timelines.'
!insert (WorldCorp, WorldCorpNote3) into ContactContainsNote

!new Person('JaneDoe')
!JaneDoe.name := 'Jane Doe'
!JaneDoe.phone := '+44-20-7946-0958'
!JaneDoe.email := 'jane.doe@globalnetwork.com'
!JaneDoe.title := 'Senior Project Manager'

!new Address('JaneDoeAddress1')
!JaneDoeAddress1.city := 'London'
!JaneDoeAddress1.houseNr := '12'
!JaneDoeAddress1.street := 'Fleet Street'
!insert (JaneDoe, JaneDoeAddress1) into ContactContainsAddress

!new Company('InnovateLtd')
!InnovateLtd.name := 'Innovate Ltd'
!InnovateLtd.phone := '+49-89-123456'
!InnovateLtd.website := 'www.innovateltd.de'
!InnovateLtd.email := 'info@innovateltd.de'
!InnovateLtd.industry := 'Engineering'

!new Address('InnovateLtdAddress1')
!InnovateLtdAddress1.city := 'Munich'
!InnovateLtdAddress1.houseNr := '101'
!InnovateLtdAddress1.street := 'Beethovenstrasse'
!insert (InnovateLtd, InnovateLtdAddress1) into ContactContainsAddress

!new Note('InnovateLtdNote1')
!InnovateLtdNote1.author := 'Linda Bernard'
!InnovateLtdNote1.time := Date('2023-02-28')
!InnovateLtdNote1.type := #MEETING
!InnovateLtdNote1.comment := 'Reviewed technical specifications for joint venture.'
!insert (InnovateLtd, InnovateLtdNote1) into ContactContainsNote

!new Relationship('WorldCorpInnovateLtdSubdivision')
!WorldCorpInnovateLtdSubdivision.type := #SUBDIVISION
!insert (WorldCorpInnovateLtdSubdivision, InnovateLtd) into RelationshipToContact
!insert (WorldCorp, WorldCorpInnovateLtdSubdivision) into ContactToRelationship

!new Relationship('JaneDoeWorldCorpCoworker')
!JaneDoeWorldCorpCoworker.type := #COWORKER
!insert (JaneDoeWorldCorpCoworker, WorldCorp) into RelationshipToContact
!insert (JaneDoe, JaneDoeWorldCorpCoworker) into ContactToRelationship

!new Relationship('WorldCorpJaneDoeBoss')
!WorldCorpJaneDoeBoss.type := #BOSS
!insert (WorldCorpJaneDoeBoss, JaneDoe) into RelationshipToContact
!insert (WorldCorp, WorldCorpJaneDoeBoss) into ContactToRelationship

!insert (GlobalBusinessNetworkAddressBook, WorldCorp) into AddressBookMadeOfContact
!insert (GlobalBusinessNetworkAddressBook, JaneDoe) into AddressBookMadeOfContact
!insert (GlobalBusinessNetworkAddressBook, InnovateLtd) into AddressBookMadeOfContact
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 72 | 0.00% |
| Multiplicities Errors | 0 | 16 | 0.00% |
| Invariants Errors | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 3 | 0.00% |
| Websites | 0 | 2 | 0.00% |
| Emails | 0 | 3 | 0.00% |
| Addresses | 2 | 3 | 66.67% |

| Invalid Addresses | 
|---| 
```
Beethovenstrasse, 101, Munich
```
```
Fleet Street, 12, London
```

## Category complex
```
!new AddressBook('GlobalConnections')

!new Person('EmmaThompson')
!EmmaThompson.name := 'Emma Thompson'
!EmmaThompson.phone := '+44 207 432 1234'
!EmmaThompson.website := 'www.emmathompson-photography.com'
!EmmaThompson.email := 'emma.t@photography.com'
!EmmaThompson.title := 'Freelance Photographer'

!new Address('EmmaThompsonAddress')
!EmmaThompsonAddress.city := 'London'
!EmmaThompsonAddress.street := 'Queen\'s Road'
!EmmaThompsonAddress.houseNr := '42'
!insert (EmmaThompson, EmmaThompsonAddress) into ContactContainsAddress

!new Note('EmmaThompsonNote1')
!EmmaThompsonNote1.author := 'Emma Thompson'
!EmmaThompsonNote1.time := Date('2023-02-15')
!EmmaThompsonNote1.type := #MEETING
!EmmaThompsonNote1.comment := 'Discussed new project opportunities at the Arts Council event.'
!insert (EmmaThompson, EmmaThompsonNote1) into ContactContainsNote

!new Note('EmmaThompsonNote2')
!EmmaThompsonNote2.author := 'Emma Thompson'
!EmmaThompsonNote2.time := Date('2023-02-20')
!EmmaThompsonNote2.type := #CALL
!EmmaThompsonNote2.comment := 'Contacted to confirm booking for next photo session at the National Gallery.'
!insert (EmmaThompson, EmmaThompsonNote2) into ContactContainsNote

!new Person('MaxHarmon')
!MaxHarmon.name := 'Max Harmon'
!MaxHarmon.phone := '+1 212 555 7890'
!MaxHarmon.website := 'www.productionsbeyond.com'
!MaxHarmon.email := 'max@productionsbeyond.com'
!MaxHarmon.title := 'CEO'

!new Address('MaxHarmonAddress')
!MaxHarmonAddress.city := 'New York'
!MaxHarmonAddress.street := 'Broadway'
!MaxHarmonAddress.houseNr := '16A'
!insert (MaxHarmon, MaxHarmonAddress) into ContactContainsAddress

!new Note('MaxHarmonNote1')
!MaxHarmonNote1.author := 'Max Harmon'
!MaxHarmonNote1.time := Date('2023-03-05')
!MaxHarmonNote1.type := #EMAIL
!MaxHarmonNote1.comment := 'Finalized contract details for upcoming film project.'
!insert (MaxHarmon, MaxHarmonNote1) into ContactContainsNote

!new Relationship('EmmaToMaxCoworker')
!EmmaToMaxCoworker.type := #COWORKER
!insert (EmmaToMaxCoworker, MaxHarmon) into RelationshipToContact
!insert (EmmaThompson, EmmaToMaxCoworker) into ContactToRelationship

!new Relationship('MaxToEmmaCoworker')
!MaxToEmmaCoworker.type := #COWORKER
!insert (MaxToEmmaCoworker, EmmaThompson) into RelationshipToContact
!insert (MaxHarmon, MaxToEmmaCoworker) into ContactToRelationship

!new Company('CreativeCorp')
!CreativeCorp.name := 'Creative Corp'
!CreativeCorp.phone := '+61 3 9654 2830'
!CreativeCorp.website := 'www.creativecorp.com'
!CreativeCorp.email := 'contact@creativecorp.com'
!CreativeCorp.industry := 'Media Production'

!new Address('CreativeCorpAddress')
!CreativeCorpAddress.city := 'Melbourne'
!CreativeCorpAddress.street := 'Collins Street'
!CreativeCorpAddress.houseNr := '88'
!insert (CreativeCorp, CreativeCorpAddress) into ContactContainsAddress

!new Note('CreativeCorpNote1')
!CreativeCorpNote1.author := 'Creative Corp'
!CreativeCorpNote1.time := Date('2023-04-10')
!CreativeCorpNote1.type := #MEETING
!CreativeCorpNote1.comment := 'Annual board meeting discussing future projects and expansions.'
!insert (CreativeCorp, CreativeCorpNote1) into ContactContainsNote

!new Relationship('MaxToCreativeCorpBoss')
!MaxToCreativeCorpBoss.type := #BOSS
!insert (MaxToCreativeCorpBoss, CreativeCorp) into RelationshipToContact
!insert (MaxHarmon, MaxToCreativeCorpBoss) into ContactToRelationship

!new Company('BoltDigitalStudios')
!BoltDigitalStudios.name := 'Bolt Digital Studios'
!BoltDigitalStudios.phone := '+91 22 1234 5678'
!BoltDigitalStudios.website := 'www.boltdigital.in'
!BoltDigitalStudios.email := 'info@boltdigital.in'
!BoltDigitalStudios.industry := 'Film and Animation'

!new Address('BoltDigitalAddress')
!BoltDigitalAddress.city := 'Mumbai'
!BoltDigitalAddress.street := 'Film City Road'
!BoltDigitalAddress.houseNr := '301'
!insert (BoltDigitalStudios, BoltDigitalAddress) into ContactContainsAddress

!new Note('BoltDigitalNote1')
!BoltDigitalNote1.author := 'Bolt Digital Studios'
!BoltDigitalNote1.time := Date('2023-05-08')
!BoltDigitalNote1.type := #EMAIL
!BoltDigitalNote1.comment := 'Email exchange regarding collaborative animation project proposals.'
!insert (BoltDigitalStudios, BoltDigitalNote1) into ContactContainsNote

!new Relationship('CreativeCorpToBoltDigitalSubdivision')
!CreativeCorpToBoltDigitalSubdivision.type := #SUBDIVISION
!insert (CreativeCorpToBoltDigitalSubdivision, BoltDigitalStudios) into RelationshipToContact
!insert (CreativeCorp, CreativeCorpToBoltDigitalSubdivision) into ContactToRelationship

!new Relationship('BoltDigitalToCreativeCorpSubdivision')
!BoltDigitalToCreativeCorpSubdivision.type := #SUBDIVISION
!insert (BoltDigitalToCreativeCorpSubdivision, CreativeCorp) into RelationshipToContact
!insert (BoltDigitalStudios, BoltDigitalToCreativeCorpSubdivision) into ContactToRelationship

!insert (GlobalConnections, EmmaThompson) into AddressBookMadeOfContact
!insert (GlobalConnections, MaxHarmon) into AddressBookMadeOfContact
!insert (GlobalConnections, CreativeCorp) into AddressBookMadeOfContact
!insert (GlobalConnections, BoltDigitalStudios) into AddressBookMadeOfContact
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 99 | 0.00% |
| Multiplicities Errors | 0 | 23 | 0.00% |
| Invariants Errors | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 4 | 0.00% |
| Websites | 0 | 4 | 0.00% |
| Emails | 0 | 4 | 0.00% |
| Addresses | 2 | 4 | 50.00% |

| Invalid Addresses | 
|---| 
```
Queen\s Road, 42, London
```
```
Film City Road, 301, Mumbai
```

## Category edge
```
!new AddressBook('CorwinEnterprisesContactBook')

!new Person('DrSabineMueller')
!DrSabineMueller.name := 'Dr. Sabine Müller'
!DrSabineMueller.phone := '+49-171-5551234'
!DrSabineMueller.website := 'www.sabinemueller.de'
!DrSabineMueller.email := 'sabine.mueller@example.com'
!DrSabineMueller.title := 'Lead Scientist'

!new Address('SabineMuellerAddress')
!SabineMuellerAddress.city := 'Berlin'
!SabineMuellerAddress.houseNr := '123'
!SabineMuellerAddress.street := 'Wissenschaftsstraße'
!insert (DrSabineMueller, SabineMuellerAddress) into ContactContainsAddress

!new Note('SabineMuellerNote1')
!SabineMuellerNote1.author := 'Dr. Sabine Müller'
!SabineMuellerNote1.time := Date('2023-10-01T09:00:00')
!SabineMuellerNote1.type := #MEETING
!SabineMuellerNote1.comment := 'Preliminary research discussion in Berlin.'
!insert (DrSabineMueller, SabineMuellerNote1) into ContactContainsNote

!new Note('SabineMuellerNote2')
!SabineMuellerNote2.author := 'Dr. Sabine Müller'
!SabineMuellerNote2.time := Date('2023-09-23T15:30:00')
!SabineMuellerNote2.type := #CALL
!SabineMuellerNote2.comment := 'Conference call with Asian partners.'
!insert (DrSabineMueller, SabineMuellerNote2) into ContactContainsNote

!new Company('AlpinTechGmbH')
!AlpinTechGmbH.name := 'AlpinTech GmbH'
!AlpinTechGmbH.phone := '+43-1-12345678'
!AlpinTechGmbH.website := 'www.alpintech.at'
!AlpinTechGmbH.email := 'info@alpintech.at'
!AlpinTechGmbH.industry := 'Biotechnology'

!new Address('AlpinTechAddress')
!AlpinTechAddress.city := 'Vienna'
!AlpinTechAddress.houseNr := '45'
!AlpinTechAddress.street := 'Hauptplatz 12'
!insert (AlpinTechGmbH, AlpinTechAddress) into ContactContainsAddress

!new Note('AlpinTechNote1')
!AlpinTechNote1.author := 'Gerda Silberschneider'
!AlpinTechNote1.time := Date('2023-08-15T11:00:00')
!AlpinTechNote1.type := #EMAIL
!AlpinTechNote1.comment := 'Strategic partnership proposal with Corwin Enterprises.'
!insert (AlpinTechGmbH, AlpinTechNote1) into ContactContainsNote

!new Person('ProfDavidLiu')
!ProfDavidLiu.name := 'Prof. David Liu'
!ProfDavidLiu.phone := '+1-310-9876543'
!ProfDavidLiu.website := 'www.davidliuresearch.org'
!ProfDavidLiu.email := 'dliu@research.org'
!ProfDavidLiu.title := 'Chief Research Officer'

!new Address('DavidLiuAddress')
!DavidLiuAddress.city := 'Los Angeles'
!DavidLiuAddress.houseNr := '72'
!DavidLiuAddress.street := 'Sunset Boulevard'
!insert (ProfDavidLiu, DavidLiuAddress) into ContactContainsAddress

!new Note('DavidLiuNote1')
!DavidLiuNote1.author := 'Prof. David Liu'
!DavidLiuNote1.time := Date('2023-07-10T14:45:00')
!DavidLiuNote1.type := #MEETING
!DavidLiuNote1.comment := 'Cross-continental R&D summit.'
!insert (ProfDavidLiu, DavidLiuNote1) into ContactContainsNote

!new Relationship('SabineToDavidCoworker')
!SabineToDavidCoworker.type := #COWORKER
!insert (SabineToDavidCoworker, ProfDavidLiu) into RelationshipToContact
!insert (DrSabineMueller, SabineToDavidCoworker) into ContactToRelationship

!new Relationship('SabineToAlpinTechBoss')
!SabineToAlpinTechBoss.type := #BOSS
!insert (SabineToAlpinTechBoss, AlpinTechGmbH) into RelationshipToContact
!insert (DrSabineMueller, SabineToAlpinTechBoss) into ContactToRelationship

!new Relationship('AlpinTechToSabineEmployee')
!AlpinTechToSabineEmployee.type := #EMPLOYEE
!insert (AlpinTechToSabineEmployee, DrSabineMueller) into RelationshipToContact
!insert (AlpinTechGmbH, AlpinTechToSabineEmployee) into ContactToRelationship

!new Relationship('AlpinTechToDavidSubdivision')
!AlpinTechToDavidSubdivision.type := #SUBDIVISION
!insert (AlpinTechToDavidSubdivision, ProfDavidLiu) into RelationshipToContact
!insert (AlpinTechGmbH, AlpinTechToDavidSubdivision) into ContactToRelationship

!new Relationship('DavidToSabineCoworker')
!DavidToSabineCoworker.type := #COWORKER
!insert (DavidToSabineCoworker, DrSabineMueller) into RelationshipToContact
!insert (ProfDavidLiu, DavidToSabineCoworker) into ContactToRelationship

!new Relationship('DavidToAlpinTechSubdivision')
!DavidToAlpinTechSubdivision.type := #SUBDIVISION
!insert (DavidToAlpinTechSubdivision, AlpinTechGmbH) into RelationshipToContact
!insert (ProfDavidLiu, DavidToAlpinTechSubdivision) into ContactToRelationship

!insert (CorwinEnterprisesContactBook, DrSabineMueller) into AddressBookMadeOfContact
!insert (CorwinEnterprisesContactBook, AlpinTechGmbH) into AddressBookMadeOfContact
!insert (CorwinEnterprisesContactBook, ProfDavidLiu) into AddressBookMadeOfContact
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 85 | 0.00% |
| Multiplicities Errors | 0 | 22 | 0.00% |
| Invariants Errors | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 3 | 0.00% |
| Websites | 0 | 3 | 0.00% |
| Emails | 0 | 3 | 0.00% |
| Addresses | 3 | 3 | 100.00% |

| Invalid Addresses | 
|---| 
```
Sunset Boulevard, 72, Los Angeles
```
```
Wissenschaftsstraße, 123, Berlin
```
```
Hauptplatz 12, 45, Vienna
```

## Category invalid
```
!new AddressBook('PrimaryAddressBook')

!new Company('MegaTechSolutionsInc')
!MegaTechSolutionsInc.name := 'MegaTech Solutions Inc.'
!MegaTechSolutionsInc.phone := '+1-800-555-0199'
!MegaTechSolutionsInc.website := 'www.megatech.com'
!MegaTechSolutionsInc.email := 'info@megatech.com'
!MegaTechSolutionsInc.industry := 'Technology'

!new Address('MegaTechAddress1')
!MegaTechAddress1.city := 'San Francisco'
!MegaTechAddress1.houseNr := '22'
!MegaTechAddress1.street := 'Market Street'
!insert (MegaTechSolutionsInc, MegaTechAddress1) into ContactContainsAddress

!new Company('GreenWorldEnergy')
!GreenWorldEnergy.name := 'GreenWorld Energy'
!GreenWorldEnergy.phone := '+44-208-555-0123'
!GreenWorldEnergy.website := 'www.greenworldenergy.co.uk'
!GreenWorldEnergy.email := 'contact@greenworldenergy.co.uk'
!GreenWorldEnergy.industry := 'Renewable Energy'

!new Address('GreenWorldAddress1')
!GreenWorldAddress1.city := 'London'
!GreenWorldAddress1.houseNr := '110'
!GreenWorldAddress1.street := 'Green Lane'
!insert (GreenWorldEnergy, GreenWorldAddress1) into ContactContainsAddress

!new Company('TechDistributorsLtd')
!TechDistributorsLtd.name := 'TechDistributors Ltd.'
!TechDistributorsLtd.phone := '+91-22-5550987'
!TechDistributorsLtd.website := 'www.techdistributors.in'
!TechDistributorsLtd.email := 'info@techdistributors.in'
!TechDistributorsLtd.industry := 'Supply Chain Management'

!new Address('TechDistributorsAddress1')
!TechDistributorsAddress1.city := 'Mumbai'
!TechDistributorsAddress1.houseNr := '305'
!TechDistributorsAddress1.street := 'MG Road'
!insert (TechDistributorsLtd, TechDistributorsAddress1) into ContactContainsAddress

!new Relationship('MegaTechToGreenWorldPartner')
!MegaTechToGreenWorldPartner.type := #COWORKER
!insert (MegaTechToGreenWorldPartner, GreenWorldEnergy) into RelationshipToContact
!insert (MegaTechSolutionsInc, MegaTechToGreenWorldPartner) into ContactToRelationship

!new Relationship('MegaTechToTechDistributorsSupplier')
!MegaTechToTechDistributorsSupplier.type := #EMPLOYEE
!insert (MegaTechToTechDistributorsSupplier, TechDistributorsLtd) into RelationshipToContact
!insert (MegaTechSolutionsInc, MegaTechToTechDistributorsSupplier) into ContactToRelationship

!new Relationship('GreenWorldToMegaTechSubdivision')
!GreenWorldToMegaTechSubdivision.type := #SUBDIVISION
!insert (GreenWorldToMegaTechSubdivision, MegaTechSolutionsInc) into RelationshipToContact
!insert (GreenWorldEnergy, GreenWorldToMegaTechSubdivision) into ContactToRelationship

!new Relationship('GreenWorldToTechDistributorsPartner')
!GreenWorldToTechDistributorsPartner.type := #COWORKER
!insert (GreenWorldToTechDistributorsPartner, TechDistributorsLtd) into RelationshipToContact
!insert (GreenWorldEnergy, GreenWorldToTechDistributorsPartner) into ContactToRelationship

!new Relationship('TechDistributorsToMegaTechBoss')
!TechDistributorsToMegaTechBoss.type := #BOSS
!insert (TechDistributorsToMegaTechBoss, MegaTechSolutionsInc) into RelationshipToContact
!insert (TechDistributorsLtd, TechDistributorsToMegaTechBoss) into ContactToRelationship

!new Relationship('TechDistributorsToGreenWorldEmployee')
!TechDistributorsToGreenWorldEmployee.type := #EMPLOYEE
!insert (TechDistributorsToGreenWorldEmployee, GreenWorldEnergy) into RelationshipToContact
!insert (TechDistributorsLtd, TechDistributorsToGreenWorldEmployee) into ContactToRelationship

!new Note('MegaTechNote')
!MegaTechNote.author := 'Emily C., CMO'
!MegaTechNote.time := Date('2023-05-15')
!MegaTechNote.type := #MEETING
!MegaTechNote.comment := 'Discussed strategic partnerships.'
!insert (MegaTechSolutionsInc, MegaTechNote) into ContactContainsNote

!insert (PrimaryAddressBook, MegaTechSolutionsInc) into AddressBookMadeOfContact
!insert (PrimaryAddressBook, GreenWorldEnergy) into AddressBookMadeOfContact
!insert (PrimaryAddressBook, TechDistributorsLtd) into AddressBookMadeOfContact
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 19 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 3 | 0.00% |
| Websites | 0 | 3 | 0.00% |
| Emails | 0 | 3 | 0.00% |
| Addresses | 2 | 3 | 66.67% |

| Invalid Addresses | 
|---| 
```
MG Road, 305, Mumbai
```
```
Green Lane, 110, London
```

## Generation 1 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 427 | 0.00% |
| Multiplicities Errors | 0 | 85 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 19 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 17 | 0.00% |
| Websites | 0 | 16 | 0.00% |
| Emails | 0 | 17 | 0.00% |
| Addresses | 13 | 18 | 72.22% |

| Invalid Addresses | 
|---| 
```
Nanjing Road, 89, Shanghai
```
```
Kensington High St, 245, London
```
```
Sunset Blvd, 120, Los Angeles
```
```
Avenue of the Americas, 55, New York
```
```
Beethovenstrasse, 101, Munich
```
```
Fleet Street, 12, London
```
```
Queen\s Road, 42, London
```
```
Film City Road, 301, Mumbai
```
```
Sunset Boulevard, 72, Los Angeles
```
```
Wissenschaftsstraße, 123, Berlin
```
```
Hauptplatz 12, 45, Vienna
```
```
MG Road, 305, Mumbai
```
```
Green Lane, 110, London
```

# Generation 2
## Category baseline
```
!new AddressBook('ContinentalNetworkAddressBook')

!new Person('HiroshiTanaka')
!HiroshiTanaka.name := 'Hiroshi Tanaka'
!HiroshiTanaka.phone := '+81-90-5555-1234'
!HiroshiTanaka.website := 'www.hiroshitanaka.com'
!HiroshiTanaka.email := 'hiroshi.tanaka@businessmail.jp'
!HiroshiTanaka.title := 'Marketing Director'

!new Address('HiroshiTanakaAddress')
!HiroshiTanakaAddress.city := 'Tokyo'
!HiroshiTanakaAddress.street := 'Ginza District'
!HiroshiTanakaAddress.houseNr := '88-03'
!insert (HiroshiTanaka, HiroshiTanakaAddress) into ContactContainsAddress

!new Note('HiroshiTanakaNote1')
!HiroshiTanakaNote1.author := 'Hiroshi Tanaka'
!HiroshiTanakaNote1.time := Date('2023-02-20')
!HiroshiTanakaNote1.type := #EMAIL
!HiroshiTanakaNote1.comment := 'Exchange ideas for the upcoming Tokyo Expo campaign.'
!insert (HiroshiTanaka, HiroshiTanakaNote1) into ContactContainsNote

!new Person('KeikoYamada')
!KeikoYamada.name := 'Keiko Yamada'
!KeikoYamada.phone := '+81-70-6655-9988'
!KeikoYamada.website := 'www.keikoyamada.net'
!KeikoYamada.email := 'keiko.yamada@creativeagency.jp'
!KeikoYamada.title := 'Junior Graphic Designer'

!new Address('KeikoYamadaAddress')
!KeikoYamadaAddress.city := 'Osaka'
!KeikoYamadaAddress.street := 'Ebisubashi'
!KeikoYamadaAddress.houseNr := '1204'
!insert (KeikoYamada, KeikoYamadaAddress) into ContactContainsAddress

!new Note('KeikoYamadaNote1')
!KeikoYamadaNote1.author := 'Keiko Yamada'
!KeikoYamadaNote1.time := Date('2023-04-12')
!KeikoYamadaNote1.type := #MEETING
!KeikoYamadaNote1.comment := 'Brainstorming session for new ad visual concepts.'
!insert (KeikoYamada, KeikoYamadaNote1) into ContactContainsNote

!new Relationship('HiroshiToKeikoBoss')
!HiroshiToKeikoBoss.type := #BOSS
!insert (HiroshiToKeikoBoss, KeikoYamada) into RelationshipToContact
!insert (HiroshiTanaka, HiroshiToKeikoBoss) into ContactToRelationship

!new Company('NordicHardwareInc')
!NordicHardwareInc.name := 'Nordic Hardware Inc.'
!NordicHardwareInc.phone := '+46-31-555-4432'
!NordicHardwareInc.website := 'www.nordichardware.se'
!NordicHardwareInc.email := 'contact@nordichardware.se'
!NordicHardwareInc.industry := 'Manufacturing'

!new Address('NordicHardwareAddress1')
!NordicHardwareAddress1.city := 'Gothenburg'
!NordicHardwareAddress1.street := 'Haga Nygata'
!NordicHardwareAddress1.houseNr := '110A'
!insert (NordicHardwareInc, NordicHardwareAddress1) into ContactContainsAddress

!new Address('NordicHardwareAddress2')
!NordicHardwareAddress2.city := 'Stockholm'
!NordicHardwareAddress2.street := 'Drottninggatan'
!NordicHardwareAddress2.houseNr := '42'
!insert (NordicHardwareInc, NordicHardwareAddress2) into ContactContainsAddress

!new Note('NordicHardwareNote1')
!NordicHardwareNote1.author := 'Erik Jonsson'
!NordicHardwareNote1.time := Date('2023-07-15')
!NordicHardwareNote1.type := #CALL
!NordicHardwareNote1.comment := 'Discuss logistics for new product lines across Europe.'
!insert (NordicHardwareInc, NordicHardwareNote1) into ContactContainsNote

!new Person('ErikJonsson')
!ErikJonsson.name := 'Erik Jonsson'
!ErikJonsson.phone := '+46-08-5556-7890'
!ErikJonsson.website := 'www.erikjonssonconsulting.se'
!ErikJonsson.email := 'erik.jonsson@consult.se'
!ErikJonsson.title := 'Supply Chain Manager'

!new Address('ErikJonssonAddress')
!ErikJonssonAddress.city := 'Malmö'
!ErikJonssonAddress.street := 'Lilla Fiskaregatan'
!ErikJonssonAddress.houseNr := '74B'
!insert (ErikJonsson, ErikJonssonAddress) into ContactContainsAddress

!new Note('ErikJonssonNote1')
!ErikJonssonNote1.author := 'Erik Jonsson'
!ErikJonssonNote1.time := Date('2023-10-23')
!ErikJonssonNote1.type := #CALL
!ErikJonssonNote1.comment := 'Monthly call with international suppliers review.'
!insert (ErikJonsson, ErikJonssonNote1) into ContactContainsNote

!new Relationship('KeikoToHiroshiEmployee')
!KeikoToHiroshiEmployee.type := #EMPLOYEE
!insert (KeikoToHiroshiEmployee, HiroshiTanaka) into RelationshipToContact
!insert (KeikoYamada, KeikoToHiroshiEmployee) into ContactToRelationship

!new Relationship('ErikToNordicSubdivision')
!ErikToNordicSubdivision.type := #SUBDIVISION
!insert (ErikToNordicSubdivision, NordicHardwareInc) into RelationshipToContact
!insert (ErikJonsson, ErikToNordicSubdivision) into ContactToRelationship

!new Relationship('ErikToHiroshiCoworker')
!ErikToHiroshiCoworker.type := #COWORKER
!insert (ErikToHiroshiCoworker, HiroshiTanaka) into RelationshipToContact
!insert (ErikJonsson, ErikToHiroshiCoworker) into ContactToRelationship

!insert (ContinentalNetworkAddressBook, HiroshiTanaka) into AddressBookMadeOfContact
!insert (ContinentalNetworkAddressBook, NordicHardwareInc) into AddressBookMadeOfContact
!insert (ContinentalNetworkAddressBook, KeikoYamada) into AddressBookMadeOfContact
!insert (ContinentalNetworkAddressBook, ErikJonsson) into AddressBookMadeOfContact
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 94 | 0.00% |
| Multiplicities Errors | 0 | 21 | 0.00% |
| Invariants Errors | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 4 | 0.00% |
| Websites | 0 | 4 | 0.00% |
| Emails | 0 | 4 | 0.00% |
| Addresses | 4 | 5 | 80.00% |

| Invalid Addresses | 
|---| 
```
Ginza District, 88-03, Tokyo
```
```
Lilla Fiskaregatan, 74B, Malmö
```
```
Haga Nygata, 110A, Gothenburg
```
```
Ebisubashi, 1204, Osaka
```

## Category boundary
```
!new AddressBook('StartupCommunityAddressBook')

!new Company('TechHub')
!TechHub.name := 'Tech Hub'
!TechHub.phone := '+1-303-123-4567'
!TechHub.website := 'www.techhub.startup'
!TechHub.email := 'info@techhub.startup'
!TechHub.industry := 'Information Technology'

!new Person('BarbaraGreen')
!BarbaraGreen.name := 'Barbara Green'
!BarbaraGreen.phone := '+1-415-555-0111'
!BarbaraGreen.email := 'barbara.green@innovators.com'
!BarbaraGreen.title := 'Founder'

!new Address('BarbaraGreenAddress1')
!BarbaraGreenAddress1.city := 'San Francisco'
!BarbaraGreenAddress1.houseNr := '23'
!BarbaraGreenAddress1.street := 'Silicon Alley'
!insert (BarbaraGreen, BarbaraGreenAddress1) into ContactContainsAddress

!new Address('BarbaraGreenAddress2')
!BarbaraGreenAddress2.city := 'Palo Alto'
!BarbaraGreenAddress2.houseNr := '456'
!BarbaraGreenAddress2.street := 'Innovation Drive'
!insert (BarbaraGreen, BarbaraGreenAddress2) into ContactContainsAddress

!new Note('BarbaraGreenNote1')
!BarbaraGreenNote1.author := 'Matthew Clark'
!BarbaraGreenNote1.time := Date('2023-07-22')
!BarbaraGreenNote1.type := #EMAIL
!BarbaraGreenNote1.comment := 'Discussed opportunities for co-working space collaboration.'
!insert (BarbaraGreen, BarbaraGreenNote1) into ContactContainsNote

!new Company('EcoVentures')
!EcoVentures.name := 'Eco Ventures'
!EcoVentures.phone := '+44-141-555-0199'
!EcoVentures.website := 'www.ecoventures.co.uk'
!EcoVentures.email := 'hello@ecoventures.co.uk'
!EcoVentures.industry := 'Environmental Services'

!new Address('EcoVenturesAddress1')
!EcoVenturesAddress1.city := 'Glasgow'
!EcoVenturesAddress1.houseNr := '9'
!EcoVenturesAddress1.street := 'Greenway Boulevard'
!insert (EcoVentures, EcoVenturesAddress1) into ContactContainsAddress

!new Note('EcoVenturesNote1')
!EcoVenturesNote1.author := 'Anna Davis'
!EcoVenturesNote1.time := Date('2023-09-05')
!EcoVenturesNote1.type := #CALL
!EcoVenturesNote1.comment := 'Phone call to plan tree planting initiative.'
!insert (EcoVentures, EcoVenturesNote1) into ContactContainsNote

!new Relationship('TechHubToBarbaraEmployee')
!TechHubToBarbaraEmployee.type := #EMPLOYEE
!insert (TechHubToBarbaraEmployee, BarbaraGreen) into RelationshipToContact
!insert (TechHub, TechHubToBarbaraEmployee) into ContactToRelationship

!new Relationship('BarbaraToEcoCoworker')
!BarbaraToEcoCoworker.type := #COWORKER
!insert (BarbaraToEcoCoworker, EcoVentures) into RelationshipToContact
!insert (BarbaraGreen, BarbaraToEcoCoworker) into ContactToRelationship

!insert (StartupCommunityAddressBook, TechHub) into AddressBookMadeOfContact
!insert (StartupCommunityAddressBook, BarbaraGreen) into AddressBookMadeOfContact
!insert (StartupCommunityAddressBook, EcoVentures) into AddressBookMadeOfContact
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 56 | 0.00% |
| Multiplicities Errors | 0 | 12 | 0.00% |
| Invariants Errors | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 3 | 0.00% |
| Websites | 0 | 2 | 0.00% |
| Emails | 0 | 3 | 0.00% |
| Addresses | 3 | 3 | 100.00% |

| Invalid Addresses | 
|---| 
```
Silicon Alley, 23, San Francisco
```
```
Innovation Drive, 456, Palo Alto
```
```
Greenway Boulevard, 9, Glasgow
```

## Category complex
```
!new AddressBook('ContinentalNetwork')

!new Person('DrAyeshaKhan')
!DrAyeshaKhan.name := 'Dr. Ayesha Khan'
!DrAyeshaKhan.phone := '+92 21 987 6543'
!DrAyeshaKhan.website := 'www.ayeshakresearch.org'
!DrAyeshaKhan.email := 'khan.ayesha@uni.edu'
!DrAyeshaKhan.title := 'Professor of Environmental Science'

!new Address('AyeshaKhanAddress')
!AyeshaKhanAddress.city := 'Karachi'
!AyeshaKhanAddress.street := 'University Avenue'
!AyeshaKhanAddress.houseNr := '12'
!insert (DrAyeshaKhan, AyeshaKhanAddress) into ContactContainsAddress

!new Note('AyeshaKhanNote1')
!AyeshaKhanNote1.author := 'Dr. Ayesha Khan'
!AyeshaKhanNote1.time := Date('2023-06-01')
!AyeshaKhanNote1.type := #EMAIL
!AyeshaKhanNote1.comment := 'Follow-up email about the environmental research collaboration with EU partners.'
!insert (DrAyeshaKhan, AyeshaKhanNote1) into ContactContainsNote

!new Note('AyeshaKhanNote2')
!AyeshaKhanNote2.author := 'Dr. Ayesha Khan'
!AyeshaKhanNote2.time := Date('2023-06-10')
!AyeshaKhanNote2.type := #MEETING
!AyeshaKhanNote2.comment := 'Attended the Global Climate Change Conference.'
!insert (DrAyeshaKhan, AyeshaKhanNote2) into ContactContainsNote

!new Person('ProfJohnMartinez')
!ProfJohnMartinez.name := 'Prof. John Martinez'
!ProfJohnMartinez.phone := '+34 91 555 6644'
!ProfJohnMartinez.website := 'www.innovateenergy.com'
!ProfJohnMartinez.email := 'martinez.j@energy-research.org'
!ProfJohnMartinez.title := 'Head of Research Department'

!new Address('JohnMartinezAddress')
!JohnMartinezAddress.city := 'Madrid'
!JohnMartinezAddress.street := 'Ciencia Street'
!JohnMartinezAddress.houseNr := '101'
!insert (ProfJohnMartinez, JohnMartinezAddress) into ContactContainsAddress

!new Note('JohnMartinezNote1')
!JohnMartinezNote1.author := 'Prof. John Martinez'
!JohnMartinezNote1.time := Date('2023-06-15')
!JohnMartinezNote1.type := #CALL
!JohnMartinezNote1.comment := 'Discussed joint paper publication with Dr. Ayesha Khan.'
!insert (ProfJohnMartinez, JohnMartinezNote1) into ContactContainsNote

!new Company('EcoResearchInstitute')
!EcoResearchInstitute.name := 'Eco Research Institute'
!EcoResearchInstitute.phone := '+61 7 3221 2345'
!EcoResearchInstitute.website := 'www.ecoresearch.org.au'
!EcoResearchInstitute.email := 'info@ecoresearch.org.au'
!EcoResearchInstitute.industry := 'Environmental Research'

!new Address('EcoResearchAddress')
!EcoResearchAddress.city := 'Brisbane'
!EcoResearchAddress.street := 'Green Street'
!EcoResearchAddress.houseNr := '55B'
!insert (EcoResearchInstitute, EcoResearchAddress) into ContactContainsAddress

!new Note('EcoResearchNote1')
!EcoResearchNote1.author := 'Eco Research Institute'
!EcoResearchNote1.time := Date('2023-07-01')
!EcoResearchNote1.type := #MEETING
!EcoResearchNote1.comment := 'Organized meeting for the annual environmental awareness workshop.'
!insert (EcoResearchInstitute, EcoResearchNote1) into ContactContainsNote

!new Company('EnerTechSolutionsLtd')
!EnerTechSolutionsLtd.name := 'EnerTech Solutions Ltd.'
!EnerTechSolutionsLtd.phone := '+49 30 1234 567'
!EnerTechSolutionsLtd.website := 'www.enertechsol.de'
!EnerTechSolutionsLtd.email := 'contact@enertechsol.de'
!EnerTechSolutionsLtd.industry := 'Renewable Energy'

!new Address('EnerTechSolutionsAddress')
!EnerTechSolutionsAddress.city := 'Berlin'
!EnerTechSolutionsAddress.street := 'Solar Parkway'
!EnerTechSolutionsAddress.houseNr := '200'
!insert (EnerTechSolutionsLtd, EnerTechSolutionsAddress) into ContactContainsAddress

!new Note('EnerTechSolutionsNote1')
!EnerTechSolutionsNote1.author := 'EnerTech Solutions Ltd.'
!EnerTechSolutionsNote1.time := Date('2023-08-10')
!EnerTechSolutionsNote1.type := #EMAIL
!EnerTechSolutionsNote1.comment := 'Sent an email confirming availability for upcoming renewable energy summit.'
!insert (EnerTechSolutionsLtd, EnerTechSolutionsNote1) into ContactContainsNote

!new Relationship('AyeshaToJohnCoworker')
!AyeshaToJohnCoworker.type := #COWORKER
!insert (AyeshaToJohnCoworker, ProfJohnMartinez) into RelationshipToContact
!insert (DrAyeshaKhan, AyeshaToJohnCoworker) into ContactToRelationship

!new Relationship('AyeshaToEcoEmployee')
!AyeshaToEcoEmployee.type := #EMPLOYEE
!insert (AyeshaToEcoEmployee, EcoResearchInstitute) into RelationshipToContact
!insert (DrAyeshaKhan, AyeshaToEcoEmployee) into ContactToRelationship

!new Relationship('JohnToAyeshaCoworker')
!JohnToAyeshaCoworker.type := #COWORKER
!insert (JohnToAyeshaCoworker, DrAyeshaKhan) into RelationshipToContact
!insert (ProfJohnMartinez, JohnToAyeshaCoworker) into ContactToRelationship

!new Relationship('JohnToEnerTechBoss')
!JohnToEnerTechBoss.type := #BOSS
!insert (JohnToEnerTechBoss, EnerTechSolutionsLtd) into RelationshipToContact
!insert (ProfJohnMartinez, JohnToEnerTechBoss) into ContactToRelationship

!new Relationship('EcoToAyeshaBoss')
!EcoToAyeshaBoss.type := #BOSS
!insert (EcoToAyeshaBoss, DrAyeshaKhan) into RelationshipToContact
!insert (EcoResearchInstitute, EcoToAyeshaBoss) into ContactToRelationship

!new Relationship('EnerTechToJohnEmployee')
!EnerTechToJohnEmployee.type := #EMPLOYEE
!insert (EnerTechToJohnEmployee, ProfJohnMartinez) into RelationshipToContact
!insert (EnerTechSolutionsLtd, EnerTechToJohnEmployee) into ContactToRelationship

!insert (ContinentalNetwork, DrAyeshaKhan) into AddressBookMadeOfContact
!insert (ContinentalNetwork, ProfJohnMartinez) into AddressBookMadeOfContact
!insert (ContinentalNetwork, EcoResearchInstitute) into AddressBookMadeOfContact
!insert (ContinentalNetwork, EnerTechSolutionsLtd) into AddressBookMadeOfContact
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 103 | 0.00% |
| Multiplicities Errors | 0 | 25 | 0.00% |
| Invariants Errors | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 4 | 0.00% |
| Websites | 0 | 4 | 0.00% |
| Emails | 0 | 4 | 0.00% |
| Addresses | 3 | 4 | 75.00% |

| Invalid Addresses | 
|---| 
```
Ciencia Street, 101, Madrid
```
```
Solar Parkway, 200, Berlin
```
```
University Avenue, 12, Karachi
```

## Category edge
```
!new AddressBook('GlobalNetworksReferenceBook')

!new Company('QuantumInnovationsLtd')
!QuantumInnovationsLtd.name := 'Quantum Innovations Ltd.'
!QuantumInnovationsLtd.phone := '+44-20-79301000'
!QuantumInnovationsLtd.website := 'www.quantuminnovations.co.uk'
!QuantumInnovationsLtd.email := 'contact@quantuminnovations.co.uk'
!QuantumInnovationsLtd.industry := 'Advanced Electronics'

!new Address('QuantumInnovationsAddress')
!QuantumInnovationsAddress.city := 'London'
!QuantumInnovationsAddress.street := 'Tech Park Avenue'
!QuantumInnovationsAddress.houseNr := '50'
!insert (QuantumInnovationsLtd, QuantumInnovationsAddress) into ContactContainsAddress

!new Note('QuantumInnovationsNote1')
!QuantumInnovationsNote1.author := 'Helena Fox'
!QuantumInnovationsNote1.time := Date('2023-06-18T10:00:00')
!QuantumInnovationsNote1.type := #CALL
!QuantumInnovationsNote1.comment := 'Discussed collaboration on the Higgs-Boson project.'
!insert (QuantumInnovationsLtd, QuantumInnovationsNote1) into ContactContainsNote

!new Person('ProfEmilyZhang')
!ProfEmilyZhang.name := 'Prof. Emily Zhang'
!ProfEmilyZhang.phone := '+86-10-22334455'
!ProfEmilyZhang.website := 'profzhangeducation.cn'
!ProfEmilyZhang.email := 'emily.zhang@edu.cn'
!ProfEmilyZhang.title := 'Director of International Studies'

!new Address('EmilyZhangAddress')
!EmilyZhangAddress.city := 'Beijing'
!EmilyZhangAddress.street := 'Knowledge Hub Road'
!EmilyZhangAddress.houseNr := '88'
!insert (ProfEmilyZhang, EmilyZhangAddress) into ContactContainsAddress

!new Note('EmilyZhangNote1')
!EmilyZhangNote1.author := 'Prof. Emily Zhang'
!EmilyZhangNote1.time := Date('2023-09-12T12:30:00')
!EmilyZhangNote1.type := #EMAIL
!EmilyZhangNote1.comment := 'Follow-up on the educational exchange program.'
!insert (ProfEmilyZhang, EmilyZhangNote1) into ContactContainsNote

!new Note('EmilyZhangNote2')
!EmilyZhangNote2.author := 'Prof. Emily Zhang'
!EmilyZhangNote2.time := Date('2023-08-28T16:15:00')
!EmilyZhangNote2.type := #MEETING
!EmilyZhangNote2.comment := 'Quarterly academic council meeting in Beijing.'
!insert (ProfEmilyZhang, EmilyZhangNote2) into ContactContainsNote

!new Person('DrMarcusJames')
!DrMarcusJames.name := 'Dr. Marcus James'
!DrMarcusJames.phone := '+1-617-5557890'
!DrMarcusJames.website := 'www.marcusjamesconsulting.com'
!DrMarcusJames.email := 'marcus.james@consulting.com'
!DrMarcusJames.title := 'Senior Consultant'

!new Address('MarcusJamesAddress')
!MarcusJamesAddress.city := 'Boston'
!MarcusJamesAddress.street := 'Innovation Row'
!MarcusJamesAddress.houseNr := '101'
!insert (DrMarcusJames, MarcusJamesAddress) into ContactContainsAddress

!new Note('MarcusJamesNote1')
!MarcusJamesNote1.author := 'Dr. Marcus James'
!MarcusJamesNote1.time := Date('2023-05-05T10:45:00')
!MarcusJamesNote1.type := #CALL
!MarcusJamesNote1.comment := 'Consulting session on green technology.'
!insert (DrMarcusJames, MarcusJamesNote1) into ContactContainsNote

!new Person('ProfAntonIvanovich')
!ProfAntonIvanovich.name := 'Prof. Anton Ivanovich'
!ProfAntonIvanovich.phone := '+7-495-8889990'
!ProfAntonIvanovich.website := 'anton-ivanovich-research.ru'
!ProfAntonIvanovich.email := 'anton.ivanovich@research.gov.ru'
!ProfAntonIvanovich.title := 'Head of Research'

!new Address('AntonIvanovichAddress')
!AntonIvanovichAddress.city := 'Moscow'
!AntonIvanovichAddress.street := 'Science Boulevard'
!AntonIvanovichAddress.houseNr := '77'
!insert (ProfAntonIvanovich, AntonIvanovichAddress) into ContactContainsAddress

!new Note('AntonIvanovichNote1')
!AntonIvanovichNote1.author := 'Prof. Anton Ivanovich'
!AntonIvanovichNote1.time := Date('2023-04-22T09:30:00')
!AntonIvanovichNote1.type := #MEETING
!AntonIvanovichNote1.comment := 'Innovation leaders summit in Moscow.'
!insert (ProfAntonIvanovich, AntonIvanovichNote1) into ContactContainsNote

!new Relationship('QuantumToEmilySubdivision')
!QuantumToEmilySubdivision.type := #SUBDIVISION
!insert (QuantumToEmilySubdivision, ProfEmilyZhang) into RelationshipToContact
!insert (QuantumInnovationsLtd, QuantumToEmilySubdivision) into ContactToRelationship

!new Relationship('QuantumToAntonBoss')
!QuantumToAntonBoss.type := #BOSS
!insert (QuantumToAntonBoss, ProfAntonIvanovich) into RelationshipToContact
!insert (QuantumInnovationsLtd, QuantumToAntonBoss) into ContactToRelationship

!new Relationship('EmilyToMarcusCoworker')
!EmilyToMarcusCoworker.type := #COWORKER
!insert (EmilyToMarcusCoworker, DrMarcusJames) into RelationshipToContact
!insert (ProfEmilyZhang, EmilyToMarcusCoworker) into ContactToRelationship

!new Relationship('MarcusToEmilyCoworker')
!MarcusToEmilyCoworker.type := #COWORKER
!insert (MarcusToEmilyCoworker, ProfEmilyZhang) into RelationshipToContact
!insert (DrMarcusJames, MarcusToEmilyCoworker) into ContactToRelationship

!new Relationship('MarcusToQuantumEmployee')
!MarcusToQuantumEmployee.type := #EMPLOYEE
!insert (MarcusToQuantumEmployee, QuantumInnovationsLtd) into RelationshipToContact
!insert (DrMarcusJames, MarcusToQuantumEmployee) into ContactToRelationship

!insert (GlobalNetworksReferenceBook, QuantumInnovationsLtd) into AddressBookMadeOfContact
!insert (GlobalNetworksReferenceBook, ProfEmilyZhang) into AddressBookMadeOfContact
!insert (GlobalNetworksReferenceBook, DrMarcusJames) into AddressBookMadeOfContact
!insert (GlobalNetworksReferenceBook, ProfAntonIvanovich) into AddressBookMadeOfContact
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 99 | 0.00% |
| Multiplicities Errors | 0 | 23 | 0.00% |
| Invariants Errors | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 4 | 0.00% |
| Websites | 0 | 4 | 0.00% |
| Emails | 0 | 4 | 0.00% |
| Addresses | 4 | 4 | 100.00% |

| Invalid Addresses | 
|---| 
```
Innovation Row, 101, Boston
```
```
Knowledge Hub Road, 88, Beijing
```
```
Science Boulevard, 77, Moscow
```
```
Tech Park Avenue, 50, London
```

## Category invalid
```
!new AddressBook('PrimaryAddressBook')

!new Company('WorldAidInternational')
!WorldAidInternational.name := 'WorldAid International'
!WorldAidInternational.phone := '+1-888-555-1234'
!WorldAidInternational.website := 'www.worldaid.org'
!WorldAidInternational.email := 'contact@worldaid.org'
!WorldAidInternational.industry := 'Non-profit Humanitarian Aid'

!new Address('WorldAidInternationalAddress1')
!WorldAidInternationalAddress1.city := 'New York'
!WorldAidInternationalAddress1.houseNr := '870'
!WorldAidInternationalAddress1.street := 'Liberty Avenue'
!insert (WorldAidInternational, WorldAidInternationalAddress1) into ContactContainsAddress

!new Company('WorldAidAsiaPacific')
!WorldAidAsiaPacific.name := 'WorldAid Asia Pacific'
!WorldAidAsiaPacific.phone := '+61-2-5550-9876'
!WorldAidAsiaPacific.website := 'asia.worldaid.org'
!WorldAidAsiaPacific.email := 'admin@asia.worldaid.org'
!WorldAidAsiaPacific.industry := 'Non-profit Regional Branch'

!new Address('WorldAidAsiaPacificAddress1')
!WorldAidAsiaPacificAddress1.city := 'Sydney'
!WorldAidAsiaPacificAddress1.houseNr := '101'
!WorldAidAsiaPacificAddress1.street := 'Ocean Avenue'
!insert (WorldAidAsiaPacific, WorldAidAsiaPacificAddress1) into ContactContainsAddress

!new Company('WorldAidEurope')
!WorldAidEurope.name := 'WorldAid Europe'
!WorldAidEurope.phone := '+49-30-5551-2345'
!WorldAidEurope.website := 'europe.worldaid.org'
!WorldAidEurope.email := 'europe@worldaid.org'
!WorldAidEurope.industry := 'Non-profit Regional Branch'

!new Address('WorldAidEuropeAddress1')
!WorldAidEuropeAddress1.city := 'Berlin'
!WorldAidEuropeAddress1.houseNr := '75'
!WorldAidEuropeAddress1.street := 'Wilhelmstrasse'
!insert (WorldAidEurope, WorldAidEuropeAddress1) into ContactContainsAddress

!new Company('HelpingHandsAsia')
!HelpingHandsAsia.name := 'Helping Hands Asia'
!HelpingHandsAsia.phone := '+91-40-5552-6789'
!HelpingHandsAsia.website := 'helpinghands.org'
!HelpingHandsAsia.email := 'info@helpinghands.org'
!HelpingHandsAsia.industry := 'Local NGO'

!new Address('HelpingHandsAsiaAddress1')
!HelpingHandsAsiaAddress1.city := 'Mumbai'
!HelpingHandsAsiaAddress1.houseNr := '50'
!HelpingHandsAsiaAddress1.street := 'Unity Road'
!insert (HelpingHandsAsia, HelpingHandsAsiaAddress1) into ContactContainsAddress

!new Company('CareAndShareEurope')
!CareAndShareEurope.name := 'Care & Share Europe'
!CareAndShareEurope.phone := '+34-914-555722'
!CareAndShareEurope.website := 'careandshare.org'
!CareAndShareEurope.email := 'contact@careandshare.org'
!CareAndShareEurope.industry := 'Local NGO'

!new Address('CareAndShareEuropeAddress1')
!CareAndShareEuropeAddress1.city := 'Madrid'
!CareAndShareEuropeAddress1.houseNr := '190'
!CareAndShareEuropeAddress1.street := 'Gran Via'
!insert (CareAndShareEurope, CareAndShareEuropeAddress1) into ContactContainsAddress

!new Note('WorldAidAsiaPacificNote1')
!WorldAidAsiaPacificNote1.author := 'John D., Head of Operations'
!WorldAidAsiaPacificNote1.time := Date('2023-08-01')
!WorldAidAsiaPacificNote1.type := #CALL
!WorldAidAsiaPacificNote1.comment := 'Coordination for the upcoming regional conference.'
!insert (WorldAidAsiaPacific, WorldAidAsiaPacificNote1) into ContactContainsNote

!new Relationship('WorldAidToAsiaSubdivision')
!WorldAidToAsiaSubdivision.type := #SUBDIVISION
!insert (WorldAidToAsiaSubdivision, WorldAidAsiaPacific) into RelationshipToContact
!insert (WorldAidInternational, WorldAidToAsiaSubdivision) into ContactToRelationship

!new Relationship('WorldAidToEuropeBoss')
!WorldAidToEuropeBoss.type := #BOSS
!insert (WorldAidToEuropeBoss, WorldAidEurope) into RelationshipToContact
!insert (WorldAidInternational, WorldAidToEuropeBoss) into ContactToRelationship

!new Relationship('AsiaToHelpingHandsPartner')
!AsiaToHelpingHandsPartner.type := #COWORKER
!insert (AsiaToHelpingHandsPartner, HelpingHandsAsia) into RelationshipToContact
!insert (WorldAidAsiaPacific, AsiaToHelpingHandsPartner) into ContactToRelationship

!new Relationship('EuropeToAsiaCoworker')
!EuropeToAsiaCoworker.type := #COWORKER
!insert (EuropeToAsiaCoworker, WorldAidAsiaPacific) into RelationshipToContact
!insert (WorldAidEurope, EuropeToAsiaCoworker) into ContactToRelationship

!new Relationship('EuropeToCareAndSharePartner')
!EuropeToCareAndSharePartner.type := #COWORKER
!insert (EuropeToCareAndSharePartner, CareAndShareEurope) into RelationshipToContact
!insert (WorldAidEurope, EuropeToCareAndSharePartner) into ContactToRelationship

!insert (PrimaryAddressBook, WorldAidInternational) into AddressBookMadeOfContact
!insert (PrimaryAddressBook, WorldAidAsiaPacific) into AddressBookMadeOfContact
!insert (PrimaryAddressBook, WorldAidEurope) into AddressBookMadeOfContact
!insert (PrimaryAddressBook, HelpingHandsAsia) into AddressBookMadeOfContact
!insert (PrimaryAddressBook, CareAndShareEurope) into AddressBookMadeOfContact
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 21 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 5 | 0.00% |
| Websites | 0 | 5 | 0.00% |
| Emails | 0 | 5 | 0.00% |
| Addresses | 3 | 5 | 60.00% |

| Invalid Addresses | 
|---| 
```
Ocean Avenue, 101, Sydney
```
```
Unity Road, 50, Mumbai
```
```
Gran Via, 190, Madrid
```

## Generation 2 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 439 | 0.00% |
| Multiplicities Errors | 0 | 81 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 21 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 20 | 0.00% |
| Websites | 0 | 19 | 0.00% |
| Emails | 0 | 20 | 0.00% |
| Addresses | 17 | 21 | 80.95% |

| Invalid Addresses | 
|---| 
```
Ginza District, 88-03, Tokyo
```
```
Lilla Fiskaregatan, 74B, Malmö
```
```
Haga Nygata, 110A, Gothenburg
```
```
Ebisubashi, 1204, Osaka
```
```
Silicon Alley, 23, San Francisco
```
```
Innovation Drive, 456, Palo Alto
```
```
Greenway Boulevard, 9, Glasgow
```
```
Ciencia Street, 101, Madrid
```
```
Solar Parkway, 200, Berlin
```
```
University Avenue, 12, Karachi
```
```
Innovation Row, 101, Boston
```
```
Knowledge Hub Road, 88, Beijing
```
```
Science Boulevard, 77, Moscow
```
```
Tech Park Avenue, 50, London
```
```
Ocean Avenue, 101, Sydney
```
```
Unity Road, 50, Mumbai
```
```
Gran Via, 190, Madrid
```

# Generation 3
## Category baseline
```
!new AddressBook('IntercontinentalContactsDirectory')

!new Person('PriyaNair')
!PriyaNair.name := 'Priya Nair'
!PriyaNair.phone := '+91-98123-45678'
!PriyaNair.website := 'www.priyanair.in'
!PriyaNair.email := 'priya.nair@consultant.in'
!PriyaNair.title := 'Business Analyst'

!new Address('PriyaNairAddress')
!PriyaNairAddress.city := 'Mumbai'
!PriyaNairAddress.houseNr := '23D'
!PriyaNairAddress.street := 'Laxmi Nagar'
!insert (PriyaNair, PriyaNairAddress) into ContactContainsAddress

!new Note('PriyaNairNote1')
!PriyaNairNote1.author := 'Priya Nair'
!PriyaNairNote1.time := Date('2023-01-05')
!PriyaNairNote1.type := #CALL
!PriyaNairNote1.comment := 'Initial client requirement gathering for project "Asha".'
!insert (PriyaNair, PriyaNairNote1) into ContactContainsNote

!new Company('PacificMineralExploration')
!PacificMineralExploration.name := 'Pacific Mineral Exploration'
!PacificMineralExploration.phone := '+61-2-9999-5555'
!PacificMineralExploration.website := 'www.pacificminerals.com.au'
!PacificMineralExploration.email := 'info@pacificminerals.com.au'
!PacificMineralExploration.industry := 'Mining'

!new Address('PacificMineralAddress1')
!PacificMineralAddress1.city := 'Sydney'
!PacificMineralAddress1.houseNr := '5'
!PacificMineralAddress1.street := 'George Street'
!insert (PacificMineralExploration, PacificMineralAddress1) into ContactContainsAddress

!new Address('PacificMineralAddress2')
!PacificMineralAddress2.city := 'Perth'
!PacificMineralAddress2.houseNr := '101'
!PacificMineralAddress2.street := 'St Georges Terrace'
!insert (PacificMineralExploration, PacificMineralAddress2) into ContactContainsAddress

!new Note('PacificMineralNote1')
!PacificMineralNote1.author := 'Li Wei'
!PacificMineralNote1.time := Date('2023-03-15')
!PacificMineralNote1.type := #MEETING
!PacificMineralNote1.comment := 'Annual environmental compliance review meeting.'
!insert (PacificMineralExploration, PacificMineralNote1) into ContactContainsNote

!new Person('JohanFredriksson')
!JohanFredriksson.name := 'Johan Fredriksson'
!JohanFredriksson.phone := '+46-73-400-1112'
!JohanFredriksson.website := 'www.fredriksolconsulting.se'
!JohanFredriksson.email := 'johan.fredriksson@intermediate.com'
!JohanFredriksson.title := 'Financial Advisor'

!new Address('JohanFredrikssonAddress')
!JohanFredrikssonAddress.city := 'Stockholm'
!JohanFredrikssonAddress.houseNr := '67'
!JohanFredrikssonAddress.street := 'Östermalmstorg'
!insert (JohanFredriksson, JohanFredrikssonAddress) into ContactContainsAddress

!new Note('JohanFredrikssonNote1')
!JohanFredrikssonNote1.author := 'Johan Fredriksson'
!JohanFredrikssonNote1.time := Date('2023-09-05')
!JohanFredrikssonNote1.type := #EMAIL
!JohanFredrikssonNote1.comment := 'Recommendations for optimizing investment strategies for the next fiscal year.'
!insert (JohanFredriksson, JohanFredrikssonNote1) into ContactContainsNote

!new Person('MeiLing')
!MeiLing.name := 'Mei Ling'
!MeiLing.phone := '+86-10-6655-4422'
!MeiLing.website := 'www.meilingart.com.cn'
!MeiLing.email := 'mei.ling@artisticvision.cn'
!MeiLing.title := 'Creative Director'

!new Address('MeiLingAddress')
!MeiLingAddress.city := 'Beijing'
!MeiLingAddress.houseNr := '3-5'
!MeiLingAddress.street := 'Wangfujing'
!insert (MeiLing, MeiLingAddress) into ContactContainsAddress

!new Note('MeiLingNote1')
!MeiLingNote1.author := 'Mei Ling'
!MeiLingNote1.time := Date('2023-06-20')
!MeiLingNote1.type := #MEETING
!MeiLingNote1.comment := 'Brainstorming session for the upcoming digital art exhibition.'
!insert (MeiLing, MeiLingNote1) into ContactContainsNote

!new Relationship('PriyaToJohanCoworker')
!PriyaToJohanCoworker.type := #COWORKER
!insert (PriyaToJohanCoworker, JohanFredriksson) into RelationshipToContact
!insert (PriyaNair, PriyaToJohanCoworker) into ContactToRelationship

!new Relationship('PriyaToMeiBoss')
!PriyaToMeiBoss.type := #BOSS
!insert (PriyaToMeiBoss, MeiLing) into RelationshipToContact
!insert (PriyaNair, PriyaToMeiBoss) into ContactToRelationship

!new Relationship('JohanToPriyaCoworker')
!JohanToPriyaCoworker.type := #COWORKER
!insert (JohanToPriyaCoworker, PriyaNair) into RelationshipToContact
!insert (JohanFredriksson, JohanToPriyaCoworker) into ContactToRelationship

!new Relationship('JohanToPacificSubdivision')
!JohanToPacificSubdivision.type := #SUBDIVISION
!insert (JohanToPacificSubdivision, PacificMineralExploration) into RelationshipToContact
!insert (JohanFredriksson, JohanToPacificSubdivision) into ContactToRelationship

!new Relationship('MeiToPriyaEmployee')
!MeiToPriyaEmployee.type := #EMPLOYEE
!insert (MeiToPriyaEmployee, PriyaNair) into RelationshipToContact
!insert (MeiLing, MeiToPriyaEmployee) into ContactToRelationship

!insert (IntercontinentalContactsDirectory, PriyaNair) into AddressBookMadeOfContact
!insert (IntercontinentalContactsDirectory, PacificMineralExploration) into AddressBookMadeOfContact
!insert (IntercontinentalContactsDirectory, JohanFredriksson) into AddressBookMadeOfContact
!insert (IntercontinentalContactsDirectory, MeiLing) into AddressBookMadeOfContact
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 98 | 0.00% |
| Multiplicities Errors | 0 | 23 | 0.00% |
| Invariants Errors | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 4 | 0.00% |
| Websites | 0 | 4 | 0.00% |
| Emails | 0 | 4 | 0.00% |
| Addresses | 3 | 5 | 60.00% |

| Invalid Addresses | 
|---| 
```
Laxmi Nagar, 23D, Mumbai
```
```
Wangfujing, 3-5, Beijing
```
```
Östermalmstorg, 67, Stockholm
```

## Category boundary
```
!new AddressBook('ArtisticNetworkAddressBook')

!new Company('SculptorsGuild')
!SculptorsGuild.name := 'Sculptors Guild'
!SculptorsGuild.phone := '+1-212-555-0234'
!SculptorsGuild.website := 'www.sculptorsguild.org'
!SculptorsGuild.email := 'contact@sculptorsguild.org'
!SculptorsGuild.industry := 'Arts and Crafts'

!new Person('MartaRivera')
!MartaRivera.name := 'Marta Rivera'
!MartaRivera.phone := '+34-91-123-4567'
!MartaRivera.website := 'www.martarivera.art'
!MartaRivera.email := 'marta@rivera.art'
!MartaRivera.title := 'Renowned Painter'

!new Address('MartaRiveraAddress')
!MartaRiveraAddress.city := 'Madrid'
!MartaRiveraAddress.houseNr := '88'
!MartaRiveraAddress.street := 'Calle de Alcalá'
!insert (MartaRivera, MartaRiveraAddress) into ContactContainsAddress

!new Company('EastEndGallery')
!EastEndGallery.name := 'EastEnd Gallery'
!EastEndGallery.phone := '+49-30-555-0170'
!EastEndGallery.website := 'www.eastendgallery.de'
!EastEndGallery.email := 'info@eastendgallery.de'
!EastEndGallery.industry := 'Art Gallery'

!new Address('EastEndGalleryAddress1')
!EastEndGalleryAddress1.city := 'Berlin'
!EastEndGalleryAddress1.houseNr := '44'
!EastEndGalleryAddress1.street := 'Kurfürstendamm'
!insert (EastEndGallery, EastEndGalleryAddress1) into ContactContainsAddress

!new Address('EastEndGalleryAddress2')
!EastEndGalleryAddress2.city := 'Hamburg'
!EastEndGalleryAddress2.houseNr := '10'
!EastEndGalleryAddress2.street := 'Kunstallee'
!insert (EastEndGallery, EastEndGalleryAddress2) into ContactContainsAddress

!new Person('JulienMonet')
!JulienMonet.name := 'Julien Monet'
!JulienMonet.phone := '+33-1-555-0130'
!JulienMonet.website := 'www.julienmonet.eu'
!JulienMonet.email := 'julien@monetstudio.fr'
!JulienMonet.title := 'Art Critic'

!new Note('JulienMonetNote1')
!JulienMonetNote1.author := 'Julien Monet'
!JulienMonetNote1.time := Date('2023-06-12')
!JulienMonetNote1.type := #EMAIL
!JulienMonetNote1.comment := 'Offered critique and insights on the new exhibit.'
!insert (JulienMonet, JulienMonetNote1) into ContactContainsNote

!new Relationship('EastEndGalleryToMartaSubdivision')
!EastEndGalleryToMartaSubdivision.type := #SUBDIVISION
!insert (EastEndGalleryToMartaSubdivision, MartaRivera) into RelationshipToContact
!insert (EastEndGallery, EastEndGalleryToMartaSubdivision) into ContactToRelationship

!new Relationship('JulienToEastEndCoworker')
!JulienToEastEndCoworker.type := #COWORKER
!insert (JulienToEastEndCoworker, EastEndGallery) into RelationshipToContact
!insert (JulienMonet, JulienToEastEndCoworker) into ContactToRelationship

!new Relationship('SculptorsToJulienEmployee')
!SculptorsToJulienEmployee.type := #EMPLOYEE
!insert (SculptorsToJulienEmployee, JulienMonet) into RelationshipToContact
!insert (SculptorsGuild, SculptorsToJulienEmployee) into ContactToRelationship

!insert (ArtisticNetworkAddressBook, SculptorsGuild) into AddressBookMadeOfContact
!insert (ArtisticNetworkAddressBook, MartaRivera) into AddressBookMadeOfContact
!insert (ArtisticNetworkAddressBook, EastEndGallery) into AddressBookMadeOfContact
!insert (ArtisticNetworkAddressBook, JulienMonet) into AddressBookMadeOfContact
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 62 | 0.00% |
| Multiplicities Errors | 0 | 14 | 0.00% |
| Invariants Errors | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 4 | 0.00% |
| Websites | 0 | 4 | 0.00% |
| Emails | 0 | 4 | 0.00% |
| Addresses | 1 | 3 | 33.33% |

| Invalid Addresses | 
|---| 
```
Kunstallee, 10, Hamburg
```

## Category complex
```
!new AddressBook('CulturalExchangeHub')

!new Person('SarahLiu')
!SarahLiu.name := 'Sarah Liu'
!SarahLiu.phone := '+86 10 6677 8899'
!SarahLiu.website := 'www.sarahliuart.com'
!SarahLiu.email := 'sarah.liu@artspaces.cn'
!SarahLiu.title := 'Curator'

!new Address('SarahLiuAddress')
!SarahLiuAddress.city := 'Beijing'
!SarahLiuAddress.street := 'Art District'
!SarahLiuAddress.houseNr := '72'
!insert (SarahLiu, SarahLiuAddress) into ContactContainsAddress

!new Note('SarahLiuNote1')
!SarahLiuNote1.author := 'Sarah Liu'
!SarahLiuNote1.time := Date('2023-09-12')
!SarahLiuNote1.type := #MEETING
!SarahLiuNote1.comment := 'Visited the European Art & Cultural Expo to explore potential collaborations.'
!insert (SarahLiu, SarahLiuNote1) into ContactContainsNote

!new Note('SarahLiuNote2')
!SarahLiuNote2.author := 'Sarah Liu'
!SarahLiuNote2.time := Date('2023-09-20')
!SarahLiuNote2.type := #EMAIL
!SarahLiuNote2.comment := 'Discussed arrangements for the contemporary art exhibit with international partners.'
!insert (SarahLiu, SarahLiuNote2) into ContactContainsNote

!new Person('CarlosRovira')
!CarlosRovira.name := 'Carlos Rovira'
!CarlosRovira.phone := '+54 11 4966 7722'
!CarlosRovira.website := 'www.carlosrovira.com'
!CarlosRovira.email := 'carlosrovira@aol.com'
!CarlosRovira.title := 'Cultural Attaché'

!new Address('CarlosRoviraAddress')
!CarlosRoviraAddress.city := 'Buenos Aires'
!CarlosRoviraAddress.street := 'Libertador Avenue'
!CarlosRoviraAddress.houseNr := '999'
!insert (CarlosRovira, CarlosRoviraAddress) into ContactContainsAddress

!new Note('CarlosRoviraNote1')
!CarlosRoviraNote1.author := 'Carlos Rovira'
!CarlosRoviraNote1.time := Date('2023-10-05')
!CarlosRoviraNote1.type := #CALL
!CarlosRoviraNote1.comment := 'Phone call with local artists about the upcoming cultural exchange program.'
!insert (CarlosRovira, CarlosRoviraNote1) into ContactContainsNote

!new Company('GlobalArtExchange')
!GlobalArtExchange.name := 'Global Art Exchange'
!GlobalArtExchange.phone := '+44 20 3004 5678'
!GlobalArtExchange.website := 'www.globalartexchange.org'
!GlobalArtExchange.email := 'admin@globalartexchange.org'
!GlobalArtExchange.industry := 'Arts and Culture'

!new Address('GlobalArtExchangeAddress')
!GlobalArtExchangeAddress.city := 'London'
!GlobalArtExchangeAddress.street := 'Culture Lane'
!GlobalArtExchangeAddress.houseNr := '85'
!insert (GlobalArtExchange, GlobalArtExchangeAddress) into ContactContainsAddress

!new Note('GlobalArtExchangeNote1')
!GlobalArtExchangeNote1.author := 'Global Art Exchange'
!GlobalArtExchangeNote1.time := Date('2023-10-12')
!GlobalArtExchangeNote1.type := #MEETING
!GlobalArtExchangeNote1.comment := 'Strategic planning meeting for next year\'s international cultural festival.'
!insert (GlobalArtExchange, GlobalArtExchangeNote1) into ContactContainsNote

!new Company('CulturalHorizons')
!CulturalHorizons.name := 'Cultural Horizons'
!CulturalHorizons.phone := '+81 3 1234 7890'
!CulturalHorizons.website := 'www.culturalhorizons.jp'
!CulturalHorizons.email := 'info@culturalhorizons.jp'
!CulturalHorizons.industry := 'Art and Heritage'

!new Address('CulturalHorizonsAddress')
!CulturalHorizonsAddress.city := 'Tokyo'
!CulturalHorizonsAddress.street := 'Artisans Lane'
!CulturalHorizonsAddress.houseNr := '58'
!insert (CulturalHorizons, CulturalHorizonsAddress) into ContactContainsAddress

!new Note('CulturalHorizonsNote1')
!CulturalHorizonsNote1.author := 'Cultural Horizons'
!CulturalHorizonsNote1.time := Date('2023-10-20')
!CulturalHorizonsNote1.type := #EMAIL
!CulturalHorizonsNote1.comment := 'Coordinated the preparation of exhibits for the Global Art Exchange partnership.'
!insert (CulturalHorizons, CulturalHorizonsNote1) into ContactContainsNote

!new Relationship('SarahToGlobalArtEmployee')
!SarahToGlobalArtEmployee.type := #EMPLOYEE
!insert (SarahToGlobalArtEmployee, GlobalArtExchange) into RelationshipToContact
!insert (SarahLiu, SarahToGlobalArtEmployee) into ContactToRelationship

!new Relationship('CarlosToGlobalArtCoworker')
!CarlosToGlobalArtCoworker.type := #COWORKER
!insert (CarlosToGlobalArtCoworker, GlobalArtExchange) into RelationshipToContact
!insert (CarlosRovira, CarlosToGlobalArtCoworker) into ContactToRelationship

!new Relationship('GlobalArtToCulturalSubdivision')
!GlobalArtToCulturalSubdivision.type := #SUBDIVISION
!insert (GlobalArtToCulturalSubdivision, CulturalHorizons) into RelationshipToContact
!insert (GlobalArtExchange, GlobalArtToCulturalSubdivision) into ContactToRelationship

!new Relationship('GlobalArtToSarahBoss')
!GlobalArtToSarahBoss.type := #BOSS
!insert (GlobalArtToSarahBoss, SarahLiu) into RelationshipToContact
!insert (GlobalArtExchange, GlobalArtToSarahBoss) into ContactToRelationship

!new Relationship('CulturalToGlobalArtSubdivision')
!CulturalToGlobalArtSubdivision.type := #SUBDIVISION
!insert (CulturalToGlobalArtSubdivision, GlobalArtExchange) into RelationshipToContact
!insert (CulturalHorizons, CulturalToGlobalArtSubdivision) into ContactToRelationship

!new Relationship('CulturalToCarlosBoss')
!CulturalToCarlosBoss.type := #BOSS
!insert (CulturalToCarlosBoss, CarlosRovira) into RelationshipToContact
!insert (CulturalHorizons, CulturalToCarlosBoss) into ContactToRelationship

!insert (CulturalExchangeHub, SarahLiu) into AddressBookMadeOfContact
!insert (CulturalExchangeHub, CarlosRovira) into AddressBookMadeOfContact
!insert (CulturalExchangeHub, GlobalArtExchange) into AddressBookMadeOfContact
!insert (CulturalExchangeHub, CulturalHorizons) into AddressBookMadeOfContact
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 103 | 0.00% |
| Multiplicities Errors | 0 | 25 | 0.00% |
| Invariants Errors | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 4 | 0.00% |
| Websites | 0 | 4 | 0.00% |
| Emails | 0 | 4 | 0.00% |
| Addresses | 4 | 4 | 100.00% |

| Invalid Addresses | 
|---| 
```
Art District, 72, Beijing
```
```
Culture Lane, 85, London
```
```
Artisans Lane, 58, Tokyo
```
```
Libertador Avenue, 999, Buenos Aires
```

## Category edge
```
!new AddressBook('GlobalLegalNetworkDirectory')

!new Company('MeyerAndChang')
!MeyerAndChang.name := 'Meyer & Chang Legal Advisors'
!MeyerAndChang.phone := '+61-2-90348888'
!MeyerAndChang.website := 'www.meyerchanglaw.au'
!MeyerAndChang.email := 'contact@meyerchanglaw.au'
!MeyerAndChang.industry := 'Legal Services'

!new Address('MeyerAndChangAddress')
!MeyerAndChangAddress.city := 'Sydney'
!MeyerAndChangAddress.houseNr := '23'
!MeyerAndChangAddress.street := 'Barrister Lane'
!insert (MeyerAndChang, MeyerAndChangAddress) into ContactContainsAddress

!new Note('MeyerAndChangNote1')
!MeyerAndChangNote1.author := 'Justine Meyer'
!MeyerAndChangNote1.time := Date('2023-07-02T09:00:00')
!MeyerAndChangNote1.type := #MEETING
!MeyerAndChangNote1.comment := 'Discussed merger with Lin & Partners.'
!insert (MeyerAndChang, MeyerAndChangNote1) into ContactContainsNote

!new Company('LinAndPartners')
!LinAndPartners.name := 'Lin & Partners'
!LinAndPartners.phone := '+852-25387890'
!LinAndPartners.website := 'www.linpartners.hk'
!LinAndPartners.email := 'contact@linpartners.hk'
!LinAndPartners.industry := 'Corporate Advisory'

!new Address('LinAndPartnersAddress')
!LinAndPartnersAddress.city := 'Hong Kong'
!LinAndPartnersAddress.houseNr := '88'
!LinAndPartnersAddress.street := 'Financial Plaza'
!insert (LinAndPartners, LinAndPartnersAddress) into ContactContainsAddress

!new Note('LinAndPartnersNote1')
!LinAndPartnersNote1.author := 'Zheng Lin'
!LinAndPartnersNote1.time := Date('2023-08-12T10:30:00')
!LinAndPartnersNote1.type := #EMAIL
!LinAndPartnersNote1.comment := 'Strategic partnership proposal with Meyer & Chang.'
!insert (LinAndPartners, LinAndPartnersNote1) into ContactContainsNote

!new Person('ProfRaphaelTaylor')
!ProfRaphaelTaylor.name := 'Prof. Raphael Taylor'
!ProfRaphaelTaylor.phone := '+44-20-78594567'
!ProfRaphaelTaylor.website := 'www.taylorlegalresearch.org'
!ProfRaphaelTaylor.email := 'r.taylor@edu.ac.uk'
!ProfRaphaelTaylor.title := 'Head of International Law Division'

!new Address('RaphaelTaylorAddress')
!RaphaelTaylorAddress.city := 'London'
!RaphaelTaylorAddress.houseNr := '15'
!RaphaelTaylorAddress.street := 'Legal Research Avenue'
!insert (ProfRaphaelTaylor, RaphaelTaylorAddress) into ContactContainsAddress

!new Note('RaphaelTaylorNote1')
!RaphaelTaylorNote1.author := 'Prof. Raphael Taylor'
!RaphaelTaylorNote1.time := Date('2023-06-20T14:00:00')
!RaphaelTaylorNote1.type := #MEETING
!RaphaelTaylorNote1.comment := 'Attended international law convention in Geneva.'
!insert (ProfRaphaelTaylor, RaphaelTaylorNote1) into ContactContainsNote

!new Note('RaphaelTaylorNote2')
!RaphaelTaylorNote2.author := 'Prof. Raphael Taylor'
!RaphaelTaylorNote2.time := Date('2023-05-19T11:45:00')
!RaphaelTaylorNote2.type := #CALL
!RaphaelTaylorNote2.comment := 'Conference call on regulatory compliance with EU partners.'
!insert (ProfRaphaelTaylor, RaphaelTaylorNote2) into ContactContainsNote

!new Person('AlexanderDavis')
!AlexanderDavis.name := 'Alexander Davis'
!AlexanderDavis.phone := '+1-212-5550987'
!AlexanderDavis.website := 'www.davislegaladvisor.com'
!AlexanderDavis.email := 'alex.davis@law.com'
!AlexanderDavis.title := 'Senior Corporate Counsel'

!new Address('AlexanderDavisAddress')
!AlexanderDavisAddress.city := 'New York'
!AlexanderDavisAddress.houseNr := '101'
!AlexanderDavisAddress.street := 'Madison Avenue'
!insert (AlexanderDavis, AlexanderDavisAddress) into ContactContainsAddress

!new Note('AlexanderDavisNote1')
!AlexanderDavisNote1.author := 'Alexander Davis'
!AlexanderDavisNote1.time := Date('2023-07-15T16:30:00')
!AlexanderDavisNote1.type := #MEETING
!AlexanderDavisNote1.comment := 'New York office quarterly review.'
!insert (AlexanderDavis, AlexanderDavisNote1) into ContactContainsNote

!new Relationship('MeyerToLinCoworker')
!MeyerToLinCoworker.type := #COWORKER
!insert (MeyerToLinCoworker, LinAndPartners) into RelationshipToContact
!insert (MeyerAndChang, MeyerToLinCoworker) into ContactToRelationship

!new Relationship('MeyerToRaphaelSubdivision')
!MeyerToRaphaelSubdivision.type := #SUBDIVISION
!insert (MeyerToRaphaelSubdivision, ProfRaphaelTaylor) into RelationshipToContact
!insert (MeyerAndChang, MeyerToRaphaelSubdivision) into ContactToRelationship

!new Relationship('LinToMeyerCoworker')
!LinToMeyerCoworker.type := #COWORKER
!insert (LinToMeyerCoworker, MeyerAndChang) into RelationshipToContact
!insert (LinAndPartners, LinToMeyerCoworker) into ContactToRelationship

!new Relationship('LinToRaphaelBoss')
!LinToRaphaelBoss.type := #BOSS
!insert (LinToRaphaelBoss, ProfRaphaelTaylor) into RelationshipToContact
!insert (LinAndPartners, LinToRaphaelBoss) into ContactToRelationship

!new Relationship('RaphaelToMeyerSubdivision')
!RaphaelToMeyerSubdivision.type := #SUBDIVISION
!insert (RaphaelToMeyerSubdivision, MeyerAndChang) into RelationshipToContact
!insert (ProfRaphaelTaylor, RaphaelToMeyerSubdivision) into ContactToRelationship

!new Relationship('RaphaelToLinEmployee')
!RaphaelToLinEmployee.type := #EMPLOYEE
!insert (RaphaelToLinEmployee, LinAndPartners) into RelationshipToContact
!insert (ProfRaphaelTaylor, RaphaelToLinEmployee) into ContactToRelationship

!new Relationship('AlexToLinCoworker')
!AlexToLinCoworker.type := #COWORKER
!insert (AlexToLinCoworker, LinAndPartners) into RelationshipToContact
!insert (AlexanderDavis, AlexToLinCoworker) into ContactToRelationship

!new Relationship('AlexToRaphaelSubdivision')
!AlexToRaphaelSubdivision.type := #SUBDIVISION
!insert (AlexToRaphaelSubdivision, ProfRaphaelTaylor) into RelationshipToContact
!insert (AlexanderDavis, AlexToRaphaelSubdivision) into ContactToRelationship

!insert (GlobalLegalNetworkDirectory, MeyerAndChang) into AddressBookMadeOfContact
!insert (GlobalLegalNetworkDirectory, LinAndPartners) into AddressBookMadeOfContact
!insert (GlobalLegalNetworkDirectory, ProfRaphaelTaylor) into AddressBookMadeOfContact
!insert (GlobalLegalNetworkDirectory, AlexanderDavis) into AddressBookMadeOfContact
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 111 | 0.00% |
| Multiplicities Errors | 0 | 29 | 0.00% |
| Invariants Errors | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 4 | 0.00% |
| Websites | 0 | 4 | 0.00% |
| Emails | 0 | 4 | 0.00% |
| Addresses | 3 | 4 | 75.00% |

| Invalid Addresses | 
|---| 
```
Financial Plaza, 88, Hong Kong
```
```
Legal Research Avenue, 15, London
```
```
Barrister Lane, 23, Sydney
```

## Category invalid
```
!new AddressBook('ResearchCollaborationAddressBook')

!new Company('GlobalTechUniversity')
!GlobalTechUniversity.name := 'GlobalTech University'
!GlobalTechUniversity.phone := '+1-617-555-6789'
!GlobalTechUniversity.website := 'www.globaltech.edu'
!GlobalTechUniversity.email := 'info@globaltech.edu'
!GlobalTechUniversity.industry := 'Education'

!new Address('GlobalTechAddress1')
!GlobalTechAddress1.city := 'Boston'
!GlobalTechAddress1.houseNr := '50'
!GlobalTechAddress1.street := 'College Road'
!insert (GlobalTechUniversity, GlobalTechAddress1) into ContactContainsAddress

!new Address('GlobalTechAddress2')
!GlobalTechAddress2.city := 'New York'
!GlobalTechAddress2.houseNr := '130'
!GlobalTechAddress2.street := 'Empire Ave'
!insert (GlobalTechUniversity, GlobalTechAddress2) into ContactContainsAddress

!new Company('EuroScienceInstitute')
!EuroScienceInstitute.name := 'EuroScience Institute'
!EuroScienceInstitute.phone := '+33-144-555555'
!EuroScienceInstitute.website := 'www.euroscience.edu'
!EuroScienceInstitute.email := 'office@euroscience.edu'
!EuroScienceInstitute.industry := 'Education'

!new Address('EuroScienceAddress')
!EuroScienceAddress.city := 'Paris'
!EuroScienceAddress.houseNr := '77'
!EuroScienceAddress.street := 'Science Boulevard'
!insert (EuroScienceInstitute, EuroScienceAddress) into ContactContainsAddress

!new Person('DrJuliaKim')
!DrJuliaKim.name := 'Dr. Julia Kim'
!DrJuliaKim.phone := '+1-212-555-0147'
!DrJuliaKim.email := 'julia.kim@globaltech.edu'
!DrJuliaKim.title := 'Professor'

!new Address('JuliaKimAddress')
!JuliaKimAddress.city := 'New York'
!JuliaKimAddress.houseNr := '100'
!JuliaKimAddress.street := 'Academic Way'
!insert (DrJuliaKim, JuliaKimAddress) into ContactContainsAddress

!new Person('DrAhmedElSaid')
!DrAhmedElSaid.name := 'Dr. Ahmed El Said'
!DrAhmedElSaid.phone := '+20-2-5555781'
!DrAhmedElSaid.email := 'ahmed.elsaid@euroscience.edu'
!DrAhmedElSaid.title := 'Research Fellow'

!new Address('AhmedElSaidAddress')
!AhmedElSaidAddress.city := 'Cairo'
!AhmedElSaidAddress.houseNr := '200'
!AhmedElSaidAddress.street := 'Nile Street'
!insert (DrAhmedElSaid, AhmedElSaidAddress) into ContactContainsAddress

!new Note('UniversityANote1')
!UniversityANote1.author := 'Dean Richard G.'
!UniversityANote1.time := Date('2023-09-15')
!UniversityANote1.type := #MEETING
!UniversityANote1.comment := 'Annual collaboration review meeting scheduled.'
!insert (GlobalTechUniversity, UniversityANote1) into ContactContainsNote

!new Note('ResearcherCNote1')
!ResearcherCNote1.author := 'Prof. Lisa Wong'
!ResearcherCNote1.time := Date('2023-08-20')
!ResearcherCNote1.type := #EMAIL
!ResearcherCNote1.comment := 'Follow-up on the joint paper submission highlights.'
!insert (DrJuliaKim, ResearcherCNote1) into ContactContainsNote

!new Relationship('GlobalTechToEuroScienceCoworker')
!GlobalTechToEuroScienceCoworker.type := #COWORKER
!insert (GlobalTechToEuroScienceCoworker, EuroScienceInstitute) into RelationshipToContact
!insert (GlobalTechUniversity, GlobalTechToEuroScienceCoworker) into ContactToRelationship

!new Relationship('GlobalTechToJuliaEmployee')
!GlobalTechToJuliaEmployee.type := #EMPLOYEE
!insert (GlobalTechToJuliaEmployee, DrJuliaKim) into RelationshipToContact
!insert (GlobalTechUniversity, GlobalTechToJuliaEmployee) into ContactToRelationship

!new Relationship('EuroScienceToAhmedBoss')
!EuroScienceToAhmedBoss.type := #BOSS
!insert (EuroScienceToAhmedBoss, DrAhmedElSaid) into RelationshipToContact
!insert (EuroScienceInstitute, EuroScienceToAhmedBoss) into ContactToRelationship

!new Relationship('JuliaToGlobalTechEmployee')
!JuliaToGlobalTechEmployee.type := #EMPLOYEE
!insert (JuliaToGlobalTechEmployee, GlobalTechUniversity) into RelationshipToContact
!insert (DrJuliaKim, JuliaToGlobalTechEmployee) into ContactToRelationship

!new Relationship('JuliaToEuroScienceCoworker')
!JuliaToEuroScienceCoworker.type := #COWORKER
!insert (JuliaToEuroScienceCoworker, EuroScienceInstitute) into RelationshipToContact
!insert (DrJuliaKim, JuliaToEuroScienceCoworker) into ContactToRelationship

!insert (ResearchCollaborationAddressBook, GlobalTechUniversity) into AddressBookMadeOfContact
!insert (ResearchCollaborationAddressBook, EuroScienceInstitute) into AddressBookMadeOfContact
!insert (ResearchCollaborationAddressBook, DrJuliaKim) into AddressBookMadeOfContact
!insert (ResearchCollaborationAddressBook, DrAhmedElSaid) into AddressBookMadeOfContact
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 21 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 4 | 0.00% |
| Websites | 0 | 2 | 0.00% |
| Emails | 0 | 4 | 0.00% |
| Addresses | 5 | 5 | 100.00% |

| Invalid Addresses | 
|---| 
```
Nile Street, 200, Cairo
```
```
Academic Way, 100, New York
```
```
College Road, 50, Boston
```
```
Empire Ave, 130, New York
```
```
Science Boulevard, 77, Paris
```

## Generation 3 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 458 | 0.00% |
| Multiplicities Errors | 0 | 91 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 21 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 20 | 0.00% |
| Websites | 0 | 18 | 0.00% |
| Emails | 0 | 20 | 0.00% |
| Addresses | 16 | 21 | 76.19% |

| Invalid Addresses | 
|---| 
```
Laxmi Nagar, 23D, Mumbai
```
```
Wangfujing, 3-5, Beijing
```
```
Östermalmstorg, 67, Stockholm
```
```
Kunstallee, 10, Hamburg
```
```
Art District, 72, Beijing
```
```
Culture Lane, 85, London
```
```
Artisans Lane, 58, Tokyo
```
```
Libertador Avenue, 999, Buenos Aires
```
```
Financial Plaza, 88, Hong Kong
```
```
Legal Research Avenue, 15, London
```
```
Barrister Lane, 23, Sydney
```
```
Nile Street, 200, Cairo
```
```
Academic Way, 100, New York
```
```
College Road, 50, Boston
```
```
Empire Ave, 130, New York
```
```
Science Boulevard, 77, Paris
```

# Generation 4
## Category baseline
```
!new AddressBook('InternationalProfessionalNetwork')

!new Person('CarlosMendesIPN')
!CarlosMendesIPN.name := 'Carlos Mendes'
!CarlosMendesIPN.phone := '+351-21-998-7654'
!CarlosMendesIPN.website := 'www.carlosmendes.pt'
!CarlosMendesIPN.email := 'carlos.mendes@marketingportugal.pt'
!CarlosMendesIPN.title := 'Chief Marketing Officer'

!new Address('CarlosMendesAddressIPN')
!CarlosMendesAddressIPN.city := 'Lisbon'
!CarlosMendesAddressIPN.street := 'Rua Augusta'
!CarlosMendesAddressIPN.houseNr := '45'
!insert (CarlosMendesIPN, CarlosMendesAddressIPN) into ContactContainsAddress

!new Note('CarlosMendesNoteIPN')
!CarlosMendesNoteIPN.author := 'Carlos Mendes'
!CarlosMendesNoteIPN.time := Date('2023-02-10')
!CarlosMendesNoteIPN.type := #EMAIL
!CarlosMendesNoteIPN.comment := 'Overview of strategic marketing initiatives for Q2.'
!insert (CarlosMendesIPN, CarlosMendesNoteIPN) into ContactContainsNote

!new Company('EcoEnergySystems')
!EcoEnergySystems.name := 'Eco Energy Systems'
!EcoEnergySystems.phone := '+49-89-1234-5678'
!EcoEnergySystems.website := 'www.ecoenergysystems.de'
!EcoEnergySystems.email := 'info@ecoenergysystems.de'
!EcoEnergySystems.industry := 'Renewable Energy'

!new Address('EcoEnergySystemsAddress')
!EcoEnergySystemsAddress.city := 'Munich'
!EcoEnergySystemsAddress.street := 'Sonnenstraße'
!EcoEnergySystemsAddress.houseNr := '30'
!insert (EcoEnergySystems, EcoEnergySystemsAddress) into ContactContainsAddress

!new Note('EcoEnergySystemsNoteIPN')
!EcoEnergySystemsNoteIPN.author := 'Hans Müller'
!EcoEnergySystemsNoteIPN.time := Date('2023-05-25')
!EcoEnergySystemsNoteIPN.type := #MEETING
!EcoEnergySystemsNoteIPN.comment := 'Discussion about expanding solar energy projects in Southern Europe.'
!insert (EcoEnergySystems, EcoEnergySystemsNoteIPN) into ContactContainsNote

!new Person('PaoloConti')
!PaoloConti.name := 'Paolo Conti'
!PaoloConti.phone := '+39-06-4444-5555'
!PaoloConti.website := 'www.paoloconticonsulting.it'
!PaoloConti.email := 'paolo.conti@innovationitalia.it'
!PaoloConti.title := 'Innovation Consultant'

!new Address('PaoloContiAddress')
!PaoloContiAddress.city := 'Rome'
!PaoloContiAddress.street := 'Via Condotti'
!PaoloContiAddress.houseNr := '22'
!insert (PaoloConti, PaoloContiAddress) into ContactContainsAddress

!new Note('PaoloContiNoteIPN')
!PaoloContiNoteIPN.author := 'Paolo Conti'
!PaoloContiNoteIPN.time := Date('2023-04-18')
!PaoloContiNoteIPN.type := #CALL
!PaoloContiNoteIPN.comment := 'Insights on integrating AI into customer service.'
!insert (PaoloConti, PaoloContiNoteIPN) into ContactContainsNote

!new Person('JeanBaptiste')
!JeanBaptiste.name := 'Jean Baptiste'
!JeanBaptiste.phone := '+33-1-7543-2109'
!JeanBaptiste.website := 'www.jeanbaptiste.fr'
!JeanBaptiste.email := 'jean.baptiste@entrepreneurfrance.fr'
!JeanBaptiste.title := 'Entrepreneur'

!new Address('JeanBaptisteAddress')
!JeanBaptisteAddress.city := 'Paris'
!JeanBaptisteAddress.street := 'Champs-Élysées'
!JeanBaptisteAddress.houseNr := '12'
!insert (JeanBaptiste, JeanBaptisteAddress) into ContactContainsAddress

!new Note('JeanBaptisteNoteIPN')
!JeanBaptisteNoteIPN.author := 'Jean Baptiste'
!JeanBaptisteNoteIPN.time := Date('2023-03-30')
!JeanBaptisteNoteIPN.type := #EMAIL
!JeanBaptisteNoteIPN.comment := 'Proposal for joint ventures in sustainable agriculture.'
!insert (JeanBaptiste, JeanBaptisteNoteIPN) into ContactContainsNote

!new Relationship('CarlosToPaoloBoss')
!CarlosToPaoloBoss.type := #BOSS
!insert (CarlosToPaoloBoss, PaoloConti) into RelationshipToContact
!insert (CarlosMendesIPN, CarlosToPaoloBoss) into ContactToRelationship

!new Relationship('PaoloToCarlosEmployee')
!PaoloToCarlosEmployee.type := #EMPLOYEE
!insert (PaoloToCarlosEmployee, CarlosMendesIPN) into RelationshipToContact
!insert (PaoloConti, PaoloToCarlosEmployee) into ContactToRelationship

!new Relationship('CarlosToJeanCoworker')
!CarlosToJeanCoworker.type := #COWORKER
!insert (CarlosToJeanCoworker, JeanBaptiste) into RelationshipToContact
!insert (CarlosMendesIPN, CarlosToJeanCoworker) into ContactToRelationship

!new Relationship('JeanToCarlosCoworker')
!JeanToCarlosCoworker.type := #COWORKER
!insert (JeanToCarlosCoworker, CarlosMendesIPN) into RelationshipToContact
!insert (JeanBaptiste, JeanToCarlosCoworker) into ContactToRelationship

!new Relationship('JeanToEcoSubdivision')
!JeanToEcoSubdivision.type := #SUBDIVISION
!insert (JeanToEcoSubdivision, EcoEnergySystems) into RelationshipToContact
!insert (JeanBaptiste, JeanToEcoSubdivision) into ContactToRelationship

!insert (InternationalProfessionalNetwork, CarlosMendesIPN) into AddressBookMadeOfContact
!insert (InternationalProfessionalNetwork, EcoEnergySystems) into AddressBookMadeOfContact
!insert (InternationalProfessionalNetwork, PaoloConti) into AddressBookMadeOfContact
!insert (InternationalProfessionalNetwork, JeanBaptiste) into AddressBookMadeOfContact
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 93 | 0.00% |
| Multiplicities Errors | 0 | 22 | 0.00% |
| Invariants Errors | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 4 | 0.00% |
| Websites | 0 | 4 | 0.00% |
| Emails | 0 | 4 | 0.00% |
| Addresses | 1 | 4 | 25.00% |

| Invalid Addresses | 
|---| 
```
Champs-Élysées, 12, Paris
```

## Category boundary
```
!new AddressBook('HealthcareProfessionalsAddressBook')

!new Company('WellnessPharmaceuticals')
!WellnessPharmaceuticals.name := 'Wellness Pharmaceuticals'
!WellnessPharmaceuticals.phone := '+1-800-987-6543'
!WellnessPharmaceuticals.website := 'www.wellnesspharma.com'
!WellnessPharmaceuticals.email := 'contact@wellnesspharma.com'
!WellnessPharmaceuticals.industry := 'Pharmaceuticals'

!new Address('WellnessPharmaAddress')
!WellnessPharmaAddress.city := 'Boston'
!WellnessPharmaAddress.houseNr := '525'
!WellnessPharmaAddress.street := 'Cambridge Street'
!insert (WellnessPharmaceuticals, WellnessPharmaAddress) into ContactContainsAddress

!new Note('WellnessPharmaNote1')
!WellnessPharmaNote1.author := 'Dr. Emily Chen'
!WellnessPharmaNote1.time := Date('2023-08-10')
!WellnessPharmaNote1.type := #CALL
!WellnessPharmaNote1.comment := 'Discussed the side effects of the new medication batch.'
!insert (WellnessPharmaceuticals, WellnessPharmaNote1) into ContactContainsNote

!new Person('DrEmilyChen')
!DrEmilyChen.name := 'Dr. Emily Chen'
!DrEmilyChen.phone := '+44-20-555-0194'
!DrEmilyChen.email := 'emily.chen@healthclinic.com'
!DrEmilyChen.title := 'Cardiologist'

!new Address('EmilyChenAddress1')
!EmilyChenAddress1.city := 'London'
!EmilyChenAddress1.houseNr := '78'
!EmilyChenAddress1.street := 'Harley Street'
!insert (DrEmilyChen, EmilyChenAddress1) into ContactContainsAddress

!new Address('EmilyChenAddress2')
!EmilyChenAddress2.city := 'Manchester'
!EmilyChenAddress2.houseNr := '14'
!EmilyChenAddress2.street := 'Health Avenue'
!insert (DrEmilyChen, EmilyChenAddress2) into ContactContainsAddress

!new Note('EmilyChenNote1')
!EmilyChenNote1.author := 'Wellness Pharmaceuticals'
!EmilyChenNote1.time := Date('2023-09-12')
!EmilyChenNote1.type := #EMAIL
!EmilyChenNote1.comment := 'Sent detailed report on drug interactions.'
!insert (DrEmilyChen, EmilyChenNote1) into ContactContainsNote

!new Company('SunshineDentalClinic')
!SunshineDentalClinic.name := 'Sunshine Dental Clinic'
!SunshineDentalClinic.phone := '+61-2-5550-1789'
!SunshineDentalClinic.website := 'www.sunshinedental.au'
!SunshineDentalClinic.email := 'info@sunshinedental.au'
!SunshineDentalClinic.industry := 'Healthcare'

!new Address('SunshineDentalAddress1')
!SunshineDentalAddress1.city := 'Sydney'
!SunshineDentalAddress1.houseNr := '34'
!SunshineDentalAddress1.street := 'Oral Care Drive'
!insert (SunshineDentalClinic, SunshineDentalAddress1) into ContactContainsAddress

!new Relationship('WellnessToEmilyBoss')
!WellnessToEmilyBoss.type := #BOSS
!insert (WellnessToEmilyBoss, DrEmilyChen) into RelationshipToContact
!insert (WellnessPharmaceuticals, WellnessToEmilyBoss) into ContactToRelationship

!new Relationship('SunshineToWellnessSubdivision')
!SunshineToWellnessSubdivision.type := #SUBDIVISION
!insert (SunshineToWellnessSubdivision, WellnessPharmaceuticals) into RelationshipToContact
!insert (SunshineDentalClinic, SunshineToWellnessSubdivision) into ContactToRelationship

!new Relationship('EmilyToSunshineEmployee')
!EmilyToSunshineEmployee.type := #EMPLOYEE
!insert (EmilyToSunshineEmployee, SunshineDentalClinic) into RelationshipToContact
!insert (DrEmilyChen, EmilyToSunshineEmployee) into ContactToRelationship

!insert (HealthcareProfessionalsAddressBook, WellnessPharmaceuticals) into AddressBookMadeOfContact
!insert (HealthcareProfessionalsAddressBook, DrEmilyChen) into AddressBookMadeOfContact
!insert (HealthcareProfessionalsAddressBook, SunshineDentalClinic) into AddressBookMadeOfContact
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 65 | 0.00% |
| Multiplicities Errors | 0 | 15 | 0.00% |
| Invariants Errors | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 3 | 0.00% |
| Websites | 0 | 2 | 0.00% |
| Emails | 0 | 3 | 0.00% |
| Addresses | 2 | 4 | 50.00% |

| Invalid Addresses | 
|---| 
```
Health Avenue, 14, Manchester
```
```
Oral Care Drive, 34, Sydney
```

## Category complex
```
!new AddressBook('TechInnovatorsCircle')

!new Person('DrAnitaDesai')
!DrAnitaDesai.name := 'Dr. Anita Desai'
!DrAnitaDesai.phone := '+91 80 2233 4455'
!DrAnitaDesai.website := 'www.anitadesai.tech'
!DrAnitaDesai.email := 'adesai@techresearch.in'
!DrAnitaDesai.title := 'Chief Technology Officer'

!new Address('AnitaDesaiAddress')
!AnitaDesaiAddress.city := 'Bangalore'
!AnitaDesaiAddress.street := 'Innovation Street'
!AnitaDesaiAddress.houseNr := '147'
!insert (DrAnitaDesai, AnitaDesaiAddress) into ContactContainsAddress

!new Note('AnitaDesaiNote1')
!AnitaDesaiNote1.author := 'Dr. Anita Desai'
!AnitaDesaiNote1.time := Date('2023-07-25')
!AnitaDesaiNote1.type := #CALL
!AnitaDesaiNote1.comment := 'Discussed potential AI research opportunities with international collaborators.'
!insert (DrAnitaDesai, AnitaDesaiNote1) into ContactContainsNote

!new Note('AnitaDesaiNote2')
!AnitaDesaiNote2.author := 'Dr. Anita Desai'
!AnitaDesaiNote2.time := Date('2023-08-03')
!AnitaDesaiNote2.type := #MEETING
!AnitaDesaiNote2.comment := 'Presented findings on quantum computing advancements at the Tech Symposium.'
!insert (DrAnitaDesai, AnitaDesaiNote2) into ContactContainsNote

!new Person('MiguelSantos')
!MiguelSantos.name := 'Miguel Santos'
!MiguelSantos.phone := '+55 21 5555 6677'
!MiguelSantos.website := 'www.miguelsantos.dev'
!MiguelSantos.email := 'miguel.s@developbr.org'
!MiguelSantos.title := 'Lead Developer'

!new Address('MiguelSantosAddress')
!MiguelSantosAddress.city := 'Rio de Janeiro'
!MiguelSantosAddress.street := 'Tech Valley'
!MiguelSantosAddress.houseNr := '33'
!insert (MiguelSantos, MiguelSantosAddress) into ContactContainsAddress

!new Note('MiguelSantosNote')
!MiguelSantosNote.author := 'Miguel Santos'
!MiguelSantosNote.time := Date('2023-08-10')
!MiguelSantosNote.type := #EMAIL
!MiguelSantosNote.comment := 'Followed up on collaborative development project with European partners.'
!insert (MiguelSantos, MiguelSantosNote) into ContactContainsNote

!new Company('FutureTechLabs')
!FutureTechLabs.name := 'FutureTech Labs'
!FutureTechLabs.phone := '+1 415 998 7654'
!FutureTechLabs.website := 'www.futuretechlabs.com'
!FutureTechLabs.email := 'info@futuretechlabs.com'
!FutureTechLabs.industry := 'Software Development'

!new Address('FutureTechAddress')
!FutureTechAddress.city := 'San Francisco'
!FutureTechAddress.street := 'Tomorrow Blvd'
!FutureTechAddress.houseNr := '98F'
!insert (FutureTechLabs, FutureTechAddress) into ContactContainsAddress

!new Note('FutureTechNote')
!FutureTechNote.author := 'FutureTech Labs'
!FutureTechNote.time := Date('2023-09-01')
!FutureTechNote.type := #MEETING
!FutureTechNote.comment := 'Hosted workshop on pioneering digital security solutions.'
!insert (FutureTechLabs, FutureTechNote) into ContactContainsNote

!new Company('InnovateGlobal')
!InnovateGlobal.name := 'Innovate Global'
!InnovateGlobal.phone := '+49 221 444 7788'
!InnovateGlobal.website := 'www.innovateglobal.com'
!InnovateGlobal.email := 'contact@innovateglobal.de'
!InnovateGlobal.industry := 'Technology Consulting'

!new Address('InnovateGlobalAddress')
!InnovateGlobalAddress.city := 'Cologne'
!InnovateGlobalAddress.street := 'Innovation Park'
!InnovateGlobalAddress.houseNr := '502'
!insert (InnovateGlobal, InnovateGlobalAddress) into ContactContainsAddress

!new Note('InnovateGlobalNote')
!InnovateGlobalNote.author := 'Innovate Global'
!InnovateGlobalNote.time := Date('2023-09-15')
!InnovateGlobalNote.type := #CALL
!InnovateGlobalNote.comment := 'Coordinated efforts for a major tech conference partnership.'
!insert (InnovateGlobal, InnovateGlobalNote) into ContactContainsNote

!new Relationship('AnitaToMiguelCoworker')
!AnitaToMiguelCoworker.type := #COWORKER
!insert (AnitaToMiguelCoworker, MiguelSantos) into RelationshipToContact
!insert (DrAnitaDesai, AnitaToMiguelCoworker) into ContactToRelationship

!new Relationship('MiguelToAnitaCoworker')
!MiguelToAnitaCoworker.type := #COWORKER
!insert (MiguelToAnitaCoworker, DrAnitaDesai) into RelationshipToContact
!insert (MiguelSantos, MiguelToAnitaCoworker) into ContactToRelationship

!new Relationship('MiguelToInnovateBoss')
!MiguelToInnovateBoss.type := #BOSS
!insert (MiguelToInnovateBoss, InnovateGlobal) into RelationshipToContact
!insert (MiguelSantos, MiguelToInnovateBoss) into ContactToRelationship

!new Relationship('FutureTechToInnovateSubdivision')
!FutureTechToInnovateSubdivision.type := #SUBDIVISION
!insert (FutureTechToInnovateSubdivision, InnovateGlobal) into RelationshipToContact
!insert (FutureTechLabs, FutureTechToInnovateSubdivision) into ContactToRelationship

!new Relationship('InnovateToFutureTechBoss')
!InnovateToFutureTechBoss.type := #BOSS
!insert (InnovateToFutureTechBoss, FutureTechLabs) into RelationshipToContact
!insert (InnovateGlobal, InnovateToFutureTechBoss) into ContactToRelationship

!new Relationship('InnovateToMiguelEmployee')
!InnovateToMiguelEmployee.type := #EMPLOYEE
!insert (InnovateToMiguelEmployee, MiguelSantos) into RelationshipToContact
!insert (InnovateGlobal, InnovateToMiguelEmployee) into ContactToRelationship

!insert (TechInnovatorsCircle, DrAnitaDesai) into AddressBookMadeOfContact
!insert (TechInnovatorsCircle, MiguelSantos) into AddressBookMadeOfContact
!insert (TechInnovatorsCircle, FutureTechLabs) into AddressBookMadeOfContact
!insert (TechInnovatorsCircle, InnovateGlobal) into AddressBookMadeOfContact
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 103 | 0.00% |
| Multiplicities Errors | 0 | 25 | 0.00% |
| Invariants Errors | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 4 | 0.00% |
| Websites | 0 | 4 | 0.00% |
| Emails | 0 | 4 | 0.00% |
| Addresses | 4 | 4 | 100.00% |

| Invalid Addresses | 
|---| 
```
Tomorrow Blvd, 98F, San Francisco
```
```
Innovation Park, 502, Cologne
```
```
Innovation Street, 147, Bangalore
```
```
Tech Valley, 33, Rio de Janeiro
```

## Category edge
```
!new AddressBook('GlobalResearchConsortiumDirectory')

!new Company('GreenEarthInitiative')
!GreenEarthInitiative.name := 'GreenEarth Initiative'
!GreenEarthInitiative.phone := '+27-11-2345678'
!GreenEarthInitiative.website := 'www.greenearth.org.za'
!GreenEarthInitiative.email := 'contact@greenearth.org.za'
!GreenEarthInitiative.industry := 'Environmental Advocacy'

!new Address('GreenEarthAddress')
!GreenEarthAddress.city := 'Johannesburg'
!GreenEarthAddress.houseNr := '50'
!GreenEarthAddress.street := 'Green Lane'
!insert (GreenEarthInitiative, GreenEarthAddress) into ContactContainsAddress

!new Note('GreenEarthNote1')
!GreenEarthNote1.author := 'Jonathan Ndlovu'
!GreenEarthNote1.time := Date('2023-09-05T12:00:00')
!GreenEarthNote1.type := #EMAIL
!GreenEarthNote1.comment := 'Submission for environmental policy reform proposal.'
!insert (GreenEarthInitiative, GreenEarthNote1) into ContactContainsNote

!new Company('ForFutureGenerations')
!ForFutureGenerations.name := 'For Future Generations'
!ForFutureGenerations.phone := '+91-22-5556789'
!ForFutureGenerations.website := 'www.futuregenerations.in'
!ForFutureGenerations.email := 'info@futuregenerations.in'
!ForFutureGenerations.industry := 'Education and Research'

!new Address('ForFutureGenerationsAddress')
!ForFutureGenerationsAddress.city := 'Mumbai'
!ForFutureGenerationsAddress.houseNr := '101'
!ForFutureGenerationsAddress.street := 'Millennial Way'
!insert (ForFutureGenerations, ForFutureGenerationsAddress) into ContactContainsAddress

!new Note('ForFutureGenerationsNote1')
!ForFutureGenerationsNote1.author := 'Sneha Kapoor'
!ForFutureGenerationsNote1.time := Date('2023-07-18T14:30:00')
!ForFutureGenerationsNote1.type := #MEETING
!ForFutureGenerationsNote1.comment := 'Regional conference on sustainable development goals.'
!insert (ForFutureGenerations, ForFutureGenerationsNote1) into ContactContainsNote

!new Person('DrAnikaRajan')
!DrAnikaRajan.name := 'Dr. Anika Rajan'
!DrAnikaRajan.phone := '+49-30-7779955'
!DrAnikaRajan.website := 'www.anikarajan.org'
!DrAnikaRajan.email := 'anika.rajan@researcher.de'
!DrAnikaRajan.title := 'Sustainability Scientist'

!new Address('AnikaRajanAddress')
!AnikaRajanAddress.city := 'Berlin'
!AnikaRajanAddress.houseNr := '5'
!AnikaRajanAddress.street := 'Innovation Allee'
!insert (DrAnikaRajan, AnikaRajanAddress) into ContactContainsAddress

!new Note('AnikaRajanNote1')
!AnikaRajanNote1.author := 'Dr. Anika Rajan'
!AnikaRajanNote1.time := Date('2023-08-25T09:00:00')
!AnikaRajanNote1.type := #CALL
!AnikaRajanNote1.comment := 'Discussed collaboration on climate change models.'
!insert (DrAnikaRajan, AnikaRajanNote1) into ContactContainsNote

!new Note('AnikaRajanNote2')
!AnikaRajanNote2.author := 'Dr. Anika Rajan'
!AnikaRajanNote2.time := Date('2023-06-10T10:15:00')
!AnikaRajanNote2.type := #EMAIL
!AnikaRajanNote2.comment := 'Sent project updates and next steps overview.'
!insert (DrAnikaRajan, AnikaRajanNote2) into ContactContainsNote

!new Company('OceanSaverCoalition')
!OceanSaverCoalition.name := 'OceanSaver Coalition'
!OceanSaverCoalition.phone := '+81-3-4567890'
!OceanSaverCoalition.website := 'www.oceansaver.jp'
!OceanSaverCoalition.email := 'admin@oceansaver.jp'
!OceanSaverCoalition.industry := 'Marine Conservation'

!new Address('OceanSaverAddress')
!OceanSaverAddress.city := 'Tokyo'
!OceanSaverAddress.houseNr := '7'
!OceanSaverAddress.street := 'Ocean Drive'
!insert (OceanSaverCoalition, OceanSaverAddress) into ContactContainsAddress

!new Note('OceanSaverNote1')
!OceanSaverNote1.author := 'Yukiko Tanaka'
!OceanSaverNote1.time := Date('2023-05-29T15:00:00')
!OceanSaverNote1.type := #MEETING
!OceanSaverNote1.comment := 'Broader outreach for Pacific marine life preservation.'
!insert (OceanSaverCoalition, OceanSaverNote1) into ContactContainsNote

!new Relationship('GreenEarthToAnikaCoworker')
!GreenEarthToAnikaCoworker.type := #COWORKER
!insert (GreenEarthToAnikaCoworker, DrAnikaRajan) into RelationshipToContact
!insert (GreenEarthInitiative, GreenEarthToAnikaCoworker) into ContactToRelationship

!new Relationship('GreenEarthToFutureSubdivision')
!GreenEarthToFutureSubdivision.type := #SUBDIVISION
!insert (GreenEarthToFutureSubdivision, ForFutureGenerations) into RelationshipToContact
!insert (GreenEarthInitiative, GreenEarthToFutureSubdivision) into ContactToRelationship

!new Relationship('FutureToGreenEarthBoss')
!FutureToGreenEarthBoss.type := #BOSS
!insert (FutureToGreenEarthBoss, GreenEarthInitiative) into RelationshipToContact
!insert (ForFutureGenerations, FutureToGreenEarthBoss) into ContactToRelationship

!new Relationship('FutureToAnikaBoss')
!FutureToAnikaBoss.type := #BOSS
!insert (FutureToAnikaBoss, DrAnikaRajan) into RelationshipToContact
!insert (ForFutureGenerations, FutureToAnikaBoss) into ContactToRelationship

!new Relationship('AnikaToGreenEarthCoworker')
!AnikaToGreenEarthCoworker.type := #COWORKER
!insert (AnikaToGreenEarthCoworker, GreenEarthInitiative) into RelationshipToContact
!insert (DrAnikaRajan, AnikaToGreenEarthCoworker) into ContactToRelationship

!new Relationship('AnikaToFutureEmployee')
!AnikaToFutureEmployee.type := #EMPLOYEE
!insert (AnikaToFutureEmployee, ForFutureGenerations) into RelationshipToContact
!insert (DrAnikaRajan, AnikaToFutureEmployee) into ContactToRelationship

!new Relationship('OceanSaverToAnikaSubdivision')
!OceanSaverToAnikaSubdivision.type := #SUBDIVISION
!insert (OceanSaverToAnikaSubdivision, DrAnikaRajan) into RelationshipToContact
!insert (OceanSaverCoalition, OceanSaverToAnikaSubdivision) into ContactToRelationship

!insert (GlobalResearchConsortiumDirectory, GreenEarthInitiative) into AddressBookMadeOfContact
!insert (GlobalResearchConsortiumDirectory, ForFutureGenerations) into AddressBookMadeOfContact
!insert (GlobalResearchConsortiumDirectory, DrAnikaRajan) into AddressBookMadeOfContact
!insert (GlobalResearchConsortiumDirectory, OceanSaverCoalition) into AddressBookMadeOfContact
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 107 | 0.00% |
| Multiplicities Errors | 0 | 27 | 0.00% |
| Invariants Errors | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 4 | 0.00% |
| Websites | 0 | 4 | 0.00% |
| Emails | 0 | 4 | 0.00% |
| Addresses | 4 | 4 | 100.00% |

| Invalid Addresses | 
|---| 
```
Innovation Allee, 5, Berlin
```
```
Ocean Drive, 7, Tokyo
```
```
Green Lane, 50, Johannesburg
```
```
Millennial Way, 101, Mumbai
```

## Category invalid
```
!new AddressBook('FestivalCoordinationAddressBook')

!new Company('ArtStreamProductions')
!ArtStreamProductions.name := 'ArtStream Productions'
!ArtStreamProductions.phone := '+44-7501-555987'
!ArtStreamProductions.website := 'www.artstreamprod.uk'
!ArtStreamProductions.email := 'contact@artstreamprod.uk'
!ArtStreamProductions.industry := 'Event Production'

!new Address('ArtStreamProductionsAddress')
!ArtStreamProductionsAddress.city := 'London'
!ArtStreamProductionsAddress.houseNr := '450'
!ArtStreamProductionsAddress.street := 'Piccadilly Circus'
!insert (ArtStreamProductions, ArtStreamProductionsAddress) into ContactContainsAddress

!new Note('ArtStreamProductionsNote1')
!ArtStreamProductionsNote1.author := 'Festival Committee'
!ArtStreamProductionsNote1.time := Date('2023-10-02')
!ArtStreamProductionsNote1.type := #EMAIL
!ArtStreamProductionsNote1.comment := 'Confirm stage arrangements for the opening ceremony.'
!insert (ArtStreamProductions, ArtStreamProductionsNote1) into ContactContainsNote

!new Person('ElenaGarcia')
!ElenaGarcia.name := 'Elena Garcia'
!ElenaGarcia.phone := '+34-919-555132'
!ElenaGarcia.email := 'elena.garcia@artnet.es'
!ElenaGarcia.title := 'Visual Artist'

!new Address('ElenaGarciaAddress')
!ElenaGarciaAddress.city := 'Madrid'
!ElenaGarciaAddress.houseNr := '25'
!ElenaGarciaAddress.street := 'Painter\'s Alley'
!insert (ElenaGarcia, ElenaGarciaAddress) into ContactContainsAddress

!new Note('ElenaGarciaNote1')
!ElenaGarciaNote1.author := 'Elena Garcia'
!ElenaGarciaNote1.time := Date('2023-10-05')
!ElenaGarciaNote1.type := #MEETING
!ElenaGarciaNote1.comment := 'Discuss installation logistics with ArtStream Productions.'
!insert (ElenaGarcia, ElenaGarciaNote1) into ContactContainsNote

!new Person('RoanLee')
!RoanLee.name := 'Roan Lee'
!RoanLee.phone := '+82-10-5554098'
!RoanLee.email := 'roan.lee@performances.kr'
!RoanLee.title := 'Performance Artist'

!new Address('RoanLeeAddress')
!RoanLeeAddress.city := 'Seoul'
!RoanLeeAddress.houseNr := '88'
!RoanLeeAddress.street := 'Culture Street'
!insert (RoanLee, RoanLeeAddress) into ContactContainsAddress

!new Note('RoanLeeNote1')
!RoanLeeNote1.author := 'Roan Lee'
!RoanLeeNote1.time := Date('2023-09-20')
!RoanLeeNote1.type := #CALL
!RoanLeeNote1.comment := 'Finalize schedule for performance timetable.'
!insert (RoanLee, RoanLeeNote1) into ContactContainsNote

!new Person('MiaT')
!MiaT.name := 'Mia T.'
!MiaT.phone := '+1-202-555-0191'
!MiaT.email := 'mia.t@festivalcoord.com'
!MiaT.title := 'Festival Coordinator'

!new Address('MiaTAddress')
!MiaTAddress.city := 'New York'
!MiaTAddress.houseNr := '1000'
!MiaTAddress.street := 'Event Blvd'
!insert (MiaT, MiaTAddress) into ContactContainsAddress

!new Relationship('ArtStreamToElenaBoss')
!ArtStreamToElenaBoss.type := #BOSS
!insert (ArtStreamToElenaBoss, ElenaGarcia) into RelationshipToContact
!insert (ArtStreamProductions, ArtStreamToElenaBoss) into ContactToRelationship

!new Relationship('ArtStreamToMiaCoworker')
!ArtStreamToMiaCoworker.type := #COWORKER
!insert (ArtStreamToMiaCoworker, MiaT) into RelationshipToContact
!insert (ArtStreamProductions, ArtStreamToMiaCoworker) into ContactToRelationship

!new Relationship('ElenaToArtStreamEmployee')
!ElenaToArtStreamEmployee.type := #EMPLOYEE
!insert (ElenaToArtStreamEmployee, ArtStreamProductions) into RelationshipToContact
!insert (ElenaGarcia, ElenaToArtStreamEmployee) into ContactToRelationship

!new Relationship('ElenaToRoanCoworker')
!ElenaToRoanCoworker.type := #COWORKER
!insert (ElenaToRoanCoworker, RoanLee) into RelationshipToContact
!insert (ElenaGarcia, ElenaToRoanCoworker) into ContactToRelationship

!new Relationship('RoanToElenaCoworker')
!RoanToElenaCoworker.type := #COWORKER
!insert (RoanToElenaCoworker, ElenaGarcia) into RelationshipToContact
!insert (RoanLee, RoanToElenaCoworker) into ContactToRelationship

!new Relationship('RoanToMiaEmployee')
!RoanToMiaEmployee.type := #EMPLOYEE
!insert (RoanToMiaEmployee, MiaT) into RelationshipToContact
!insert (RoanLee, RoanToMiaEmployee) into ContactToRelationship

!insert (FestivalCoordinationAddressBook, ArtStreamProductions) into AddressBookMadeOfContact
!insert (FestivalCoordinationAddressBook, ElenaGarcia) into AddressBookMadeOfContact
!insert (FestivalCoordinationAddressBook, RoanLee) into AddressBookMadeOfContact
!insert (FestivalCoordinationAddressBook, MiaT) into AddressBookMadeOfContact
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 23 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 4 | 0.00% |
| Websites | 0 | 1 | 0.00% |
| Emails | 0 | 4 | 0.00% |
| Addresses | 4 | 4 | 100.00% |

| Invalid Addresses | 
|---| 
```
Painter\s Alley, 25, Madrid
```
```
Culture Street, 88, Seoul
```
```
Piccadilly Circus, 450, London
```
```
Event Blvd, 1000, New York
```

## Generation 4 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 456 | 0.00% |
| Multiplicities Errors | 0 | 89 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 23 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 19 | 0.00% |
| Websites | 0 | 15 | 0.00% |
| Emails | 0 | 19 | 0.00% |
| Addresses | 15 | 20 | 75.00% |

| Invalid Addresses | 
|---| 
```
Champs-Élysées, 12, Paris
```
```
Health Avenue, 14, Manchester
```
```
Oral Care Drive, 34, Sydney
```
```
Tomorrow Blvd, 98F, San Francisco
```
```
Innovation Park, 502, Cologne
```
```
Innovation Street, 147, Bangalore
```
```
Tech Valley, 33, Rio de Janeiro
```
```
Innovation Allee, 5, Berlin
```
```
Ocean Drive, 7, Tokyo
```
```
Green Lane, 50, Johannesburg
```
```
Millennial Way, 101, Mumbai
```
```
Painter\s Alley, 25, Madrid
```
```
Culture Street, 88, Seoul
```
```
Piccadilly Circus, 450, London
```
```
Event Blvd, 1000, New York
```

# Generation 5
## Category baseline
```
!new AddressBook('GlobalEnterpriseConnections')

!new Person('NnekaOkafor')
!NnekaOkafor.name := 'Nneka Okafor'
!NnekaOkafor.phone := '+234-703-555-1234'
!NnekaOkafor.website := 'www.nnekaokafor.ng'
!NnekaOkafor.email := 'nneka.okafor@africatechnology.ng'
!NnekaOkafor.title := 'Chief Technology Officer'

!new Address('NnekaOkaforAddress')
!NnekaOkaforAddress.city := 'Lagos'
!NnekaOkaforAddress.houseNr := '118'
!NnekaOkaforAddress.street := 'Victoria Island'
!insert (NnekaOkafor, NnekaOkaforAddress) into ContactContainsAddress

!new Note('NnekaOkaforNote1')
!NnekaOkaforNote1.author := 'Nneka Okafor'
!NnekaOkaforNote1.time := Date('2023-05-10')
!NnekaOkaforNote1.type := #CALL
!NnekaOkaforNote1.comment := 'Follow-up with partners on the integration of blockchain technologies.'
!insert (NnekaOkafor, NnekaOkaforNote1) into ContactContainsNote

!new Company('DigitalInnovationsConsortium')
!DigitalInnovationsConsortium.name := 'Digital Innovations Consortium'
!DigitalInnovationsConsortium.phone := '+1-415-999-8888'
!DigitalInnovationsConsortium.website := 'www.digitalinnovations.com'
!DigitalInnovationsConsortium.email := 'info@digitalinnovations.com'
!DigitalInnovationsConsortium.industry := 'Technology'

!new Address('DigitalInnovationsAddress')
!DigitalInnovationsAddress.city := 'San Francisco'
!DigitalInnovationsAddress.houseNr := '200'
!DigitalInnovationsAddress.street := 'Market Street'
!insert (DigitalInnovationsConsortium, DigitalInnovationsAddress) into ContactContainsAddress

!new Note('DigitalInnovationsNote1')
!DigitalInnovationsNote1.author := 'Laura Johnson'
!DigitalInnovationsNote1.time := Date('2023-07-29')
!DigitalInnovationsNote1.type := #MEETING
!DigitalInnovationsNote1.comment := 'Strategic planning session for expansion in African markets.'
!insert (DigitalInnovationsConsortium, DigitalInnovationsNote1) into ContactContainsNote

!new Person('SamuelMensah')
!SamuelMensah.name := 'Samuel Mensah'
!SamuelMensah.phone := '+233-24-888-5555'
!SamuelMensah.website := 'www.samuelmensah.edu.gh'
!SamuelMensah.email := 'samuel.mensah@ghanatech.com'
!SamuelMensah.title := 'Data Scientist'

!new Address('SamuelMensahAddress')
!SamuelMensahAddress.city := 'Accra'
!SamuelMensahAddress.houseNr := '9'
!SamuelMensahAddress.street := 'Kwame Nkrumah Avenue'
!insert (SamuelMensah, SamuelMensahAddress) into ContactContainsAddress

!new Note('SamuelMensahNote1')
!SamuelMensahNote1.author := 'Samuel Mensah'
!SamuelMensahNote1.time := Date('2023-04-22')
!SamuelMensahNote1.type := #EMAIL
!SamuelMensahNote1.comment := 'Preliminary report on data analytics for market trends.'
!insert (SamuelMensah, SamuelMensahNote1) into ContactContainsNote

!new Person('LauraJohnson')
!LauraJohnson.name := 'Laura Johnson'
!LauraJohnson.phone := '+44-20-1234-6789'
!LauraJohnson.website := 'www.laurajohnsonconsulting.co.uk'
!LauraJohnson.email := 'laura.johnson@businessstrategy.co.uk'
!LauraJohnson.title := 'Strategic Development Manager'

!new Address('LauraJohnsonAddress')
!LauraJohnsonAddress.city := 'London'
!LauraJohnsonAddress.houseNr := '80'
!LauraJohnsonAddress.street := 'Piccadilly'
!insert (LauraJohnson, LauraJohnsonAddress) into ContactContainsAddress

!new Note('LauraJohnsonNote1')
!LauraJohnsonNote1.author := 'Laura Johnson'
!LauraJohnsonNote1.time := Date('2023-08-12')
!LauraJohnsonNote1.type := #EMAIL
!LauraJohnsonNote1.comment := 'Update on the partnership proposal for green tech initiatives.'
!insert (LauraJohnson, LauraJohnsonNote1) into ContactContainsNote

!new Relationship('NnekaToSamuelBoss')
!NnekaToSamuelBoss.type := #BOSS
!insert (NnekaToSamuelBoss, SamuelMensah) into RelationshipToContact
!insert (NnekaOkafor, NnekaToSamuelBoss) into ContactToRelationship

!new Relationship('SamuelToNnekaEmployee')
!SamuelToNnekaEmployee.type := #EMPLOYEE
!insert (SamuelToNnekaEmployee, NnekaOkafor) into RelationshipToContact
!insert (SamuelMensah, SamuelToNnekaEmployee) into ContactToRelationship

!new Relationship('NnekaToDigitalInnovationsSubdivision')
!NnekaToDigitalInnovationsSubdivision.type := #SUBDIVISION
!insert (NnekaToDigitalInnovationsSubdivision, DigitalInnovationsConsortium) into RelationshipToContact
!insert (NnekaOkafor, NnekaToDigitalInnovationsSubdivision) into ContactToRelationship

!new Relationship('NnekaToLauraCoworker')
!NnekaToLauraCoworker.type := #COWORKER
!insert (NnekaToLauraCoworker, LauraJohnson) into RelationshipToContact
!insert (NnekaOkafor, NnekaToLauraCoworker) into ContactToRelationship

!insert (GlobalEnterpriseConnections, NnekaOkafor) into AddressBookMadeOfContact
!insert (GlobalEnterpriseConnections, DigitalInnovationsConsortium) into AddressBookMadeOfContact
!insert (GlobalEnterpriseConnections, SamuelMensah) into AddressBookMadeOfContact
!insert (GlobalEnterpriseConnections, LauraJohnson) into AddressBookMadeOfContact
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 89 | 0.00% |
| Multiplicities Errors | 0 | 20 | 0.00% |
| Invariants Errors | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 4 | 0.00% |
| Websites | 0 | 4 | 0.00% |
| Emails | 0 | 4 | 0.00% |
| Addresses | 2 | 4 | 50.00% |

| Invalid Addresses | 
|---| 
```
Victoria Island, 118, Lagos
```
```
Kwame Nkrumah Avenue, 9, Accra
```

## Category boundary
```
!new AddressBook('GlobalResearchCollaborationAddressBook')

!new Company('InternationalSpaceResearchAgency')
!InternationalSpaceResearchAgency.name := 'International Space Research Agency'
!InternationalSpaceResearchAgency.phone := '+1-713-555-0190'
!InternationalSpaceResearchAgency.website := 'www.spaceresearch.org'
!InternationalSpaceResearchAgency.email := 'info@spaceresearch.org'
!InternationalSpaceResearchAgency.industry := 'Aerospace & Research'

!new Address('SpaceResearchAddress')
!SpaceResearchAddress.city := 'Houston'
!SpaceResearchAddress.houseNr := '400'
!SpaceResearchAddress.street := 'Galileo Parkway'
!insert (InternationalSpaceResearchAgency, SpaceResearchAddress) into ContactContainsAddress

!new Person('ProfAikoTanaka')
!ProfAikoTanaka.name := 'Prof. Aiko Tanaka'
!ProfAikoTanaka.phone := '+81-3-5550-7432'
!ProfAikoTanaka.website := 'www.aikotanaka.jp'
!ProfAikoTanaka.email := 'aiko.tanaka@tokyouniversity.ac.jp'
!ProfAikoTanaka.title := 'Astrophysicist'

!new Address('AikoTanakaAddress')
!AikoTanakaAddress.city := 'Tokyo'
!AikoTanakaAddress.houseNr := '55'
!AikoTanakaAddress.street := 'University Drive'
!insert (ProfAikoTanaka, AikoTanakaAddress) into ContactContainsAddress

!new Note('AikoTanakaNote1')
!AikoTanakaNote1.author := 'International Space Research Agency'
!AikoTanakaNote1.time := Date('2023-11-15')
!AikoTanakaNote1.type := #MEETING
!AikoTanakaNote1.comment := 'Held a virtual seminar on recent advancements in satellite technology.'
!insert (ProfAikoTanaka, AikoTanakaNote1) into ContactContainsNote

!new Company('AdvancedBiologyInstitute')
!AdvancedBiologyInstitute.name := 'Advanced Biology Institute'
!AdvancedBiologyInstitute.phone := '+49-89-555-0886'
!AdvancedBiologyInstitute.website := 'www.advancedbiologi.de'
!AdvancedBiologyInstitute.email := 'contact@advancedbiologi.de'
!AdvancedBiologyInstitute.industry := 'Biotechnology'

!new Person('DrCarlosMendes')
!DrCarlosMendes.name := 'Dr. Carlos Mendes'
!DrCarlosMendes.phone := '+55-21-555-6712'
!DrCarlosMendes.email := 'carlos.mendes@pesquisador.br'
!DrCarlosMendes.title := 'Marine Ecologist'

!new Address('CarlosMendesAddress1')
!CarlosMendesAddress1.city := 'Rio de Janeiro'
!CarlosMendesAddress1.houseNr := '101'
!CarlosMendesAddress1.street := 'Ocean Street'
!insert (DrCarlosMendes, CarlosMendesAddress1) into ContactContainsAddress

!new Address('CarlosMendesAddress2')
!CarlosMendesAddress2.city := 'São Paulo'
!CarlosMendesAddress2.houseNr := '202'
!CarlosMendesAddress2.street := 'Ecosystem Lane'
!insert (DrCarlosMendes, CarlosMendesAddress2) into ContactContainsAddress

!new Relationship('SpaceToAikoCoworker')
!SpaceToAikoCoworker.type := #COWORKER
!insert (SpaceToAikoCoworker, ProfAikoTanaka) into RelationshipToContact
!insert (InternationalSpaceResearchAgency, SpaceToAikoCoworker) into ContactToRelationship

!new Relationship('BiologyToCarlosEmployee')
!BiologyToCarlosEmployee.type := #EMPLOYEE
!insert (BiologyToCarlosEmployee, DrCarlosMendes) into RelationshipToContact
!insert (AdvancedBiologyInstitute, BiologyToCarlosEmployee) into ContactToRelationship

!new Relationship('CarlosToAikoSubdivision')
!CarlosToAikoSubdivision.type := #SUBDIVISION
!insert (CarlosToAikoSubdivision, ProfAikoTanaka) into RelationshipToContact
!insert (DrCarlosMendes, CarlosToAikoSubdivision) into ContactToRelationship

!insert (GlobalResearchCollaborationAddressBook, InternationalSpaceResearchAgency) into AddressBookMadeOfContact
!insert (GlobalResearchCollaborationAddressBook, ProfAikoTanaka) into AddressBookMadeOfContact
!insert (GlobalResearchCollaborationAddressBook, AdvancedBiologyInstitute) into AddressBookMadeOfContact
!insert (GlobalResearchCollaborationAddressBook, DrCarlosMendes) into AddressBookMadeOfContact
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 66 | 0.00% |
| Multiplicities Errors | 0 | 15 | 0.00% |
| Invariants Errors | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 4 | 0.00% |
| Websites | 0 | 3 | 0.00% |
| Emails | 0 | 4 | 0.00% |
| Addresses | 4 | 4 | 100.00% |

| Invalid Addresses | 
|---| 
```
University Drive, 55, Tokyo
```
```
Galileo Parkway, 400, Houston
```
```
Ecosystem Lane, 202, São Paulo
```
```
Ocean Street, 101, Rio de Janeiro
```

## Category complex
```
!new AddressBook('HealthcareNetwork')

!new Person('DrLisaChen')
!DrLisaChen.name := 'Dr. Lisa Chen'
!DrLisaChen.phone := '+65 6221 1122'
!DrLisaChen.website := 'www.drlisachenmedical.com'
!DrLisaChen.email := 'lisa.chen@wellhealth.sg'
!DrLisaChen.title := 'Oncology Specialist'

!new Address('LisaChenAddress')
!LisaChenAddress.city := 'Singapore'
!LisaChenAddress.street := 'Health Avenue'
!LisaChenAddress.houseNr := '88'
!insert (DrLisaChen, LisaChenAddress) into ContactContainsAddress

!new Note('LisaChenNote1')
!LisaChenNote1.author := 'Dr. Lisa Chen'
!LisaChenNote1.time := Date('2023-07-05')
!LisaChenNote1.type := #MEETING
!LisaChenNote1.comment := 'Discussed new treatment protocols in regional cancer summit.'
!insert (DrLisaChen, LisaChenNote1) into ContactContainsNote

!new Note('LisaChenNote2')
!LisaChenNote2.author := 'Dr. Lisa Chen'
!LisaChenNote2.time := Date('2023-07-12')
!LisaChenNote2.type := #CALL
!LisaChenNote2.comment := 'Phone consultation with European experts on rare cancer cases.'
!insert (DrLisaChen, LisaChenNote2) into ContactContainsNote

!new Person('ProfMahmoudElNahas')
!ProfMahmoudElNahas.name := 'Prof. Mahmoud El-Nahas'
!ProfMahmoudElNahas.phone := '+20 2 3546 8799'
!ProfMahmoudElNahas.website := 'www.mahmoudelnresearch.com'
!ProfMahmoudElNahas.email := 'mahmoud.el@medresearch.edu.eg'
!ProfMahmoudElNahas.title := 'Medical Research Director'

!new Address('MahmoudElNahasAddress')
!MahmoudElNahasAddress.city := 'Cairo'
!MahmoudElNahasAddress.street := 'University Road'
!MahmoudElNahasAddress.houseNr := '5'
!insert (ProfMahmoudElNahas, MahmoudElNahasAddress) into ContactContainsAddress

!new Note('MahmoudElNahasNote')
!MahmoudElNahasNote.author := 'Prof. Mahmoud El-Nahas'
!MahmoudElNahasNote.time := Date('2023-08-20')
!MahmoudElNahasNote.type := #EMAIL
!MahmoudElNahasNote.comment := 'Shared latest findings on genetic disorders with the global research community.'
!insert (ProfMahmoudElNahas, MahmoudElNahasNote) into ContactContainsNote

!new Company('MedLifePharmaceuticals')
!MedLifePharmaceuticals.name := 'MedLife Pharmaceuticals'
!MedLifePharmaceuticals.phone := '+1 312 555 6789'
!MedLifePharmaceuticals.website := 'www.medlifepharma.com'
!MedLifePharmaceuticals.email := 'contactus@medlife.com'
!MedLifePharmaceuticals.industry := 'Pharmaceutical'

!new Address('MedLifeAddress')
!MedLifeAddress.city := 'Chicago'
!MedLifeAddress.street := 'Medicine Drive'
!MedLifeAddress.houseNr := '100A'
!insert (MedLifePharmaceuticals, MedLifeAddress) into ContactContainsAddress

!new Note('MedLifeNote')
!MedLifeNote.author := 'MedLife Pharmaceuticals'
!MedLifeNote.time := Date('2023-08-01')
!MedLifeNote.type := #MEETING
!MedLifeNote.comment := 'Annual review of research partnerships with international hospitals.'
!insert (MedLifePharmaceuticals, MedLifeNote) into ContactContainsNote

!new Company('GlobalHealthPartners')
!GlobalHealthPartners.name := 'Global Health Partners'
!GlobalHealthPartners.phone := '+61 2 8765 4321'
!GlobalHealthPartners.website := 'www.globalhealthpartners.org'
!GlobalHealthPartners.email := 'admin@globalhealth.org'
!GlobalHealthPartners.industry := 'Healthcare Consulting'

!new Address('GlobalHealthAddress')
!GlobalHealthAddress.city := 'Sydney'
!GlobalHealthAddress.street := 'Healthcare Boulevard'
!GlobalHealthAddress.houseNr := '222'
!insert (GlobalHealthPartners, GlobalHealthAddress) into ContactContainsAddress

!new Note('GlobalHealthNote')
!GlobalHealthNote.author := 'Global Health Partners'
!GlobalHealthNote.time := Date('2023-08-15')
!GlobalHealthNote.type := #EMAIL
!GlobalHealthNote.comment := 'Coordinated a global conference on emergent health technologies.'
!insert (GlobalHealthPartners, GlobalHealthNote) into ContactContainsNote

!new Relationship('LisaToMedLifeCoworker')
!LisaToMedLifeCoworker.type := #COWORKER
!insert (LisaToMedLifeCoworker, MedLifePharmaceuticals) into RelationshipToContact
!insert (DrLisaChen, LisaToMedLifeCoworker) into ContactToRelationship

!new Relationship('MahmoudToHealthPartnersEmployee')
!MahmoudToHealthPartnersEmployee.type := #EMPLOYEE
!insert (MahmoudToHealthPartnersEmployee, GlobalHealthPartners) into RelationshipToContact
!insert (ProfMahmoudElNahas, MahmoudToHealthPartnersEmployee) into ContactToRelationship

!new Relationship('MedLifeToLisaBoss')
!MedLifeToLisaBoss.type := #BOSS
!insert (MedLifeToLisaBoss, DrLisaChen) into RelationshipToContact
!insert (MedLifePharmaceuticals, MedLifeToLisaBoss) into ContactToRelationship

!new Relationship('MedLifeToGlobalHealthSubdivision')
!MedLifeToGlobalHealthSubdivision.type := #SUBDIVISION
!insert (MedLifeToGlobalHealthSubdivision, GlobalHealthPartners) into RelationshipToContact
!insert (MedLifePharmaceuticals, MedLifeToGlobalHealthSubdivision) into ContactToRelationship

!new Relationship('HealthPartnersToMahmoudBoss')
!HealthPartnersToMahmoudBoss.type := #BOSS
!insert (HealthPartnersToMahmoudBoss, ProfMahmoudElNahas) into RelationshipToContact
!insert (GlobalHealthPartners, HealthPartnersToMahmoudBoss) into ContactToRelationship

!new Relationship('HealthPartnersToMedLifeSubdivision')
!HealthPartnersToMedLifeSubdivision.type := #SUBDIVISION
!insert (HealthPartnersToMedLifeSubdivision, MedLifePharmaceuticals) into RelationshipToContact
!insert (GlobalHealthPartners, HealthPartnersToMedLifeSubdivision) into ContactToRelationship

!insert (HealthcareNetwork, DrLisaChen) into AddressBookMadeOfContact
!insert (HealthcareNetwork, ProfMahmoudElNahas) into AddressBookMadeOfContact
!insert (HealthcareNetwork, MedLifePharmaceuticals) into AddressBookMadeOfContact
!insert (HealthcareNetwork, GlobalHealthPartners) into AddressBookMadeOfContact
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 103 | 0.00% |
| Multiplicities Errors | 0 | 25 | 0.00% |
| Invariants Errors | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 4 | 0.00% |
| Websites | 0 | 4 | 0.00% |
| Emails | 0 | 4 | 0.00% |
| Addresses | 4 | 4 | 100.00% |

| Invalid Addresses | 
|---| 
```
Health Avenue, 88, Singapore
```
```
Medicine Drive, 100A, Chicago
```
```
University Road, 5, Cairo
```
```
Healthcare Boulevard, 222, Sydney
```

## Category edge
```
!new AddressBook('ArtisticCollectiveNetwork')

!new Company('GlobalArtMovement')
!GlobalArtMovement.name := 'Global Art Movement'
!GlobalArtMovement.phone := '+33-1-23456789'
!GlobalArtMovement.website := 'www.globalartmovement.fr'
!GlobalArtMovement.email := 'connect@globalartmovement.fr'
!GlobalArtMovement.industry := 'Art and Culture'

!new Address('GlobalArtMovementAddress')
!GlobalArtMovementAddress.city := 'Paris'
!GlobalArtMovementAddress.houseNr := '220'
!GlobalArtMovementAddress.street := 'Rue de l\'Artiste'
!insert (GlobalArtMovement, GlobalArtMovementAddress) into ContactContainsAddress

!new Note('GlobalArtMovementNote1')
!GlobalArtMovementNote1.author := 'Amélie Dubois'
!GlobalArtMovementNote1.time := Date('2023-04-15T11:00:00')
!GlobalArtMovementNote1.type := #MEETING
!GlobalArtMovementNote1.comment := 'Paris symposium on cross-cultural artistic exchange.'
!insert (GlobalArtMovement, GlobalArtMovementNote1) into ContactContainsNote

!new Company('ArtHavenAcademy')
!ArtHavenAcademy.name := 'Art Haven Academy'
!ArtHavenAcademy.phone := '+61-3-87654321'
!ArtHavenAcademy.website := 'www.arthaven.edu.au'
!ArtHavenAcademy.email := 'admissions@arthaven.edu.au'
!ArtHavenAcademy.industry := 'Education and Culture'

!new Address('ArtHavenAcademyAddress')
!ArtHavenAcademyAddress.city := 'Melbourne'
!ArtHavenAcademyAddress.houseNr := '88'
!ArtHavenAcademyAddress.street := 'Artistic Avenue'
!insert (ArtHavenAcademy, ArtHavenAcademyAddress) into ContactContainsAddress

!new Note('ArtHavenNote1')
!ArtHavenNote1.author := 'Oliver Nguyen'
!ArtHavenNote1.time := Date('2023-03-22T14:20:00')
!ArtHavenNote1.type := #EMAIL
!ArtHavenNote1.comment := 'Webinar on "The Future of Art Education."'
!insert (ArtHavenAcademy, ArtHavenNote1) into ContactContainsNote

!new Person('SantiagoReyes')
!SantiagoReyes.name := 'Santiago Reyes'
!SantiagoReyes.phone := '+34-91-6543210'
!SantiagoReyes.website := 'www.santiagoreyes.com'
!SantiagoReyes.email := 's.reyes@artistry.com'
!SantiagoReyes.title := 'Curator'

!new Address('SantiagoReyesAddress')
!SantiagoReyesAddress.city := 'Madrid'
!SantiagoReyesAddress.houseNr := '15'
!SantiagoReyesAddress.street := 'Paseo del Arte'
!insert (SantiagoReyes, SantiagoReyesAddress) into ContactContainsAddress

!new Note('SantiagoReyesNote1')
!SantiagoReyesNote1.author := 'Santiago Reyes'
!SantiagoReyesNote1.time := Date('2023-11-02T16:00:00')
!SantiagoReyesNote1.type := #CALL
!SantiagoReyesNote1.comment := 'Discussion on an upcoming exhibition in Tokyo.'
!insert (SantiagoReyes, SantiagoReyesNote1) into ContactContainsNote

!new Note('SantiagoReyesNote2')
!SantiagoReyesNote2.author := 'Santiago Reyes'
!SantiagoReyesNote2.time := Date('2023-07-10T10:30:00')
!SantiagoReyesNote2.type := #MEETING
!SantiagoReyesNote2.comment := 'Artist collaboration workshop in Madrid.'
!insert (SantiagoReyes, SantiagoReyesNote2) into ContactContainsNote

!new Person('FionaChen')
!FionaChen.name := 'Fiona Chen'
!FionaChen.phone := '+86-21-9876543'
!FionaChen.website := 'www.fionachenstudio.cn'
!FionaChen.email := 'fiona.chen@art.cn'
!FionaChen.title := 'Visual Artist'

!new Address('FionaChenAddress')
!FionaChenAddress.city := 'Shanghai'
!FionaChenAddress.houseNr := '202'
!FionaChenAddress.street := 'Culture Street'
!insert (FionaChen, FionaChenAddress) into ContactContainsAddress

!new Note('FionaChenNote1')
!FionaChenNote1.author := 'Fiona Chen'
!FionaChenNote1.time := Date('2023-05-12T08:45:00')
!FionaChenNote1.type := #EMAIL
!FionaChenNote1.comment := 'Submitted portfolio for Global Art Residency.'
!insert (FionaChen, FionaChenNote1) into ContactContainsNote

!new Relationship('GlobalArtToSantiagoSubdivision')
!GlobalArtToSantiagoSubdivision.type := #SUBDIVISION
!insert (GlobalArtToSantiagoSubdivision, SantiagoReyes) into RelationshipToContact
!insert (GlobalArtMovement, GlobalArtToSantiagoSubdivision) into ContactToRelationship

!new Relationship('GlobalArtToArtHavenCoworker')
!GlobalArtToArtHavenCoworker.type := #COWORKER
!insert (GlobalArtToArtHavenCoworker, ArtHavenAcademy) into RelationshipToContact
!insert (GlobalArtMovement, GlobalArtToArtHavenCoworker) into ContactToRelationship

!new Relationship('ArtHavenToGlobalArtCoworker')
!ArtHavenToGlobalArtCoworker.type := #COWORKER
!insert (ArtHavenToGlobalArtCoworker, GlobalArtMovement) into RelationshipToContact
!insert (ArtHavenAcademy, ArtHavenToGlobalArtCoworker) into ContactToRelationship

!new Relationship('ArtHavenToSantiagoEmployee')
!ArtHavenToSantiagoEmployee.type := #EMPLOYEE
!insert (ArtHavenToSantiagoEmployee, SantiagoReyes) into RelationshipToContact
!insert (ArtHavenAcademy, ArtHavenToSantiagoEmployee) into ContactToRelationship

!new Relationship('SantiagoToGlobalArtSubdivision')
!SantiagoToGlobalArtSubdivision.type := #SUBDIVISION
!insert (SantiagoToGlobalArtSubdivision, GlobalArtMovement) into RelationshipToContact
!insert (SantiagoReyes, SantiagoToGlobalArtSubdivision) into ContactToRelationship

!new Relationship('SantiagoToArtHavenEmployee')
!SantiagoToArtHavenEmployee.type := #EMPLOYEE
!insert (SantiagoToArtHavenEmployee, ArtHavenAcademy) into RelationshipToContact
!insert (SantiagoReyes, SantiagoToArtHavenEmployee) into ContactToRelationship

!new Relationship('FionaToSantiagoCoworker')
!FionaToSantiagoCoworker.type := #COWORKER
!insert (FionaToSantiagoCoworker, SantiagoReyes) into RelationshipToContact
!insert (FionaChen, FionaToSantiagoCoworker) into ContactToRelationship

!insert (ArtisticCollectiveNetwork, GlobalArtMovement) into AddressBookMadeOfContact
!insert (ArtisticCollectiveNetwork, ArtHavenAcademy) into AddressBookMadeOfContact
!insert (ArtisticCollectiveNetwork, SantiagoReyes) into AddressBookMadeOfContact
!insert (ArtisticCollectiveNetwork, FionaChen) into AddressBookMadeOfContact
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 107 | 0.00% |
| Multiplicities Errors | 0 | 27 | 0.00% |
| Invariants Errors | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 4 | 0.00% |
| Websites | 0 | 4 | 0.00% |
| Emails | 0 | 4 | 0.00% |
| Addresses | 4 | 4 | 100.00% |

| Invalid Addresses | 
|---| 
```
Paseo del Arte, 15, Madrid
```
```
Rue de l\Artiste, 220, Paris
```
```
Artistic Avenue, 88, Melbourne
```
```
Culture Street, 202, Shanghai
```

## Category invalid
```
!new AddressBook('EmergencyResponseAddressBook')

!new Company('NationalDisasterManagementAuthority')
!NationalDisasterManagementAuthority.name := 'National Disaster Management Authority'
!NationalDisasterManagementAuthority.phone := '+1-555-0100'
!NationalDisasterManagementAuthority.website := 'www.ndma.gov'
!NationalDisasterManagementAuthority.email := 'admin@ndma.gov'
!NationalDisasterManagementAuthority.industry := 'Government Agency'

!new Address('NDMAAddress')
!NDMAAddress.city := 'Washington, D.C.'
!NDMAAddress.houseNr := '400'
!NDMAAddress.street := 'Capital Blvd'
!insert (NationalDisasterManagementAuthority, NDMAAddress) into ContactContainsAddress

!new Note('NDMANote1')
!NDMANote1.author := 'Director Operations'
!NDMANote1.time := Date('2023-07-20')
!NDMANote1.type := #MEETING
!NDMANote1.comment := 'Coordinate cross-border relief logistics.'
!insert (NationalDisasterManagementAuthority, NDMANote1) into ContactContainsNote

!new Company('GlobalReliefNetwork')
!GlobalReliefNetwork.name := 'Global Relief Network'
!GlobalReliefNetwork.phone := '+44-203-555667'
!GlobalReliefNetwork.website := 'www.globalrelief.org'
!GlobalReliefNetwork.email := 'partner@globalrelief.org'
!GlobalReliefNetwork.industry := 'Non-Governmental Organization'

!new Address('GlobalReliefAddress1')
!GlobalReliefAddress1.city := 'London'
!GlobalReliefAddress1.houseNr := '120'
!GlobalReliefAddress1.street := 'Aid Avenue'
!insert (GlobalReliefNetwork, GlobalReliefAddress1) into ContactContainsAddress

!new Address('GlobalReliefAddress2')
!GlobalReliefAddress2.city := 'Nairobi'
!GlobalReliefAddress2.houseNr := '17'
!GlobalReliefAddress2.street := 'Hope Street'
!insert (GlobalReliefNetwork, GlobalReliefAddress2) into ContactContainsAddress

!new Note('GlobalReliefNote1')
!GlobalReliefNote1.author := 'Logistics Coordinator'
!GlobalReliefNote1.time := Date('2023-07-22')
!GlobalReliefNote1.type := #EMAIL
!GlobalReliefNote1.comment := 'Status update on resource allocation.'
!insert (GlobalReliefNetwork, GlobalReliefNote1) into ContactContainsNote

!new Person('JordanNguyen')
!JordanNguyen.name := 'Jordan Nguyen'
!JordanNguyen.phone := '+61-2-5551123'
!JordanNguyen.email := 'j.nguyen@emergencyresponse.org'
!JordanNguyen.title := 'Chief Coordinator'

!new Address('JordanNguyenAddress')
!JordanNguyenAddress.city := 'Sydney'
!JordanNguyenAddress.houseNr := '500'
!JordanNguyenAddress.street := 'Response Lane'
!insert (JordanNguyen, JordanNguyenAddress) into ContactContainsAddress

!new Company('RapidTransportCo')
!RapidTransportCo.name := 'Rapid Transport Co.'
!RapidTransportCo.phone := '+91-80-5559990'
!RapidTransportCo.website := 'www.rapidtransport.in'
!RapidTransportCo.email := 'logistics@rapidtransport.in'
!RapidTransportCo.industry := 'Logistics'

!new Address('RapidTransportAddress')
!RapidTransportAddress.city := 'Bangalore'
!RapidTransportAddress.houseNr := '45'
!RapidTransportAddress.street := 'Cargo Street'
!insert (RapidTransportCo, RapidTransportAddress) into ContactContainsAddress

!new Relationship('NDMAToGlobalReliefBoss')
!NDMAToGlobalReliefBoss.type := #BOSS
!insert (NDMAToGlobalReliefBoss, GlobalReliefNetwork) into RelationshipToContact
!insert (NationalDisasterManagementAuthority, NDMAToGlobalReliefBoss) into ContactToRelationship

!new Relationship('NDMAToJordanCoworker')
!NDMAToJordanCoworker.type := #COWORKER
!insert (NDMAToJordanCoworker, JordanNguyen) into RelationshipToContact
!insert (NationalDisasterManagementAuthority, NDMAToJordanCoworker) into ContactToRelationship

!new Relationship('NDMAToRapidTransportCoworker')
!NDMAToRapidTransportCoworker.type := #COWORKER
!insert (NDMAToRapidTransportCoworker, RapidTransportCo) into RelationshipToContact
!insert (NationalDisasterManagementAuthority, NDMAToRapidTransportCoworker) into ContactToRelationship

!new Relationship('GlobalReliefToNDMAEmployee')
!GlobalReliefToNDMAEmployee.type := #EMPLOYEE
!insert (GlobalReliefToNDMAEmployee, NationalDisasterManagementAuthority) into RelationshipToContact
!insert (GlobalReliefNetwork, GlobalReliefToNDMAEmployee) into ContactToRelationship

!new Relationship('GlobalReliefToJordanEmployee')
!GlobalReliefToJordanEmployee.type := #EMPLOYEE
!insert (GlobalReliefToJordanEmployee, JordanNguyen) into RelationshipToContact
!insert (GlobalReliefNetwork, GlobalReliefToJordanEmployee) into ContactToRelationship

!new Relationship('JordanToRapidTransportBoss')
!JordanToRapidTransportBoss.type := #BOSS
!insert (JordanToRapidTransportBoss, RapidTransportCo) into RelationshipToContact
!insert (JordanNguyen, JordanToRapidTransportBoss) into ContactToRelationship

!insert (EmergencyResponseAddressBook, NationalDisasterManagementAuthority) into AddressBookMadeOfContact
!insert (EmergencyResponseAddressBook, GlobalReliefNetwork) into AddressBookMadeOfContact
!insert (EmergencyResponseAddressBook, JordanNguyen) into AddressBookMadeOfContact
!insert (EmergencyResponseAddressBook, RapidTransportCo) into AddressBookMadeOfContact
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 23 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 4 | 0.00% |
| Websites | 0 | 3 | 0.00% |
| Emails | 0 | 4 | 0.00% |
| Addresses | 5 | 5 | 100.00% |

| Invalid Addresses | 
|---| 
```
Aid Avenue, 120, London
```
```
Hope Street, 17, Nairobi
```
```
Capital Blvd, 400, Washington, D.C.
```
```
Response Lane, 500, Sydney
```
```
Cargo Street, 45, Bangalore
```

## Generation 5 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 454 | 0.00% |
| Multiplicities Errors | 0 | 87 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 23 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 20 | 0.00% |
| Websites | 0 | 18 | 0.00% |
| Emails | 0 | 20 | 0.00% |
| Addresses | 19 | 21 | 90.48% |

| Invalid Addresses | 
|---| 
```
Victoria Island, 118, Lagos
```
```
Kwame Nkrumah Avenue, 9, Accra
```
```
University Drive, 55, Tokyo
```
```
Galileo Parkway, 400, Houston
```
```
Ecosystem Lane, 202, São Paulo
```
```
Ocean Street, 101, Rio de Janeiro
```
```
Health Avenue, 88, Singapore
```
```
Medicine Drive, 100A, Chicago
```
```
University Road, 5, Cairo
```
```
Healthcare Boulevard, 222, Sydney
```
```
Paseo del Arte, 15, Madrid
```
```
Rue de l\Artiste, 220, Paris
```
```
Artistic Avenue, 88, Melbourne
```
```
Culture Street, 202, Shanghai
```
```
Aid Avenue, 120, London
```
```
Hope Street, 17, Nairobi
```
```
Capital Blvd, 400, Washington, D.C.
```
```
Response Lane, 500, Sydney
```
```
Cargo Street, 45, Bangalore
```

# Generation 6
## Category baseline
```
!new AddressBook('TranscontinentalBusinessNetwork')

!new Person('AnaSilva')
!AnaSilva.name := 'Ana Silva'
!AnaSilva.phone := '+55-21-98765-4321'
!AnaSilva.website := 'www.anasilva.br'
!AnaSilva.email := 'ana.silva@southamericatraders.br'
!AnaSilva.title := 'International Trade Manager'

!new Address('AnaSilvaAddress')
!AnaSilvaAddress.city := 'Rio de Janeiro'
!AnaSilvaAddress.houseNr := '50'
!AnaSilvaAddress.street := 'Avenida Atlântica'
!insert (AnaSilva, AnaSilvaAddress) into ContactContainsAddress

!new Note('AnaSilvaNote')
!AnaSilvaNote.author := 'Ana Silva'
!AnaSilvaNote.time := Date('2023-01-18')
!AnaSilvaNote.type := #CALL
!AnaSilvaNote.comment := 'Confirm shipment details with European partners post-Brexit.'
!insert (AnaSilva, AnaSilvaNote) into ContactContainsNote

!new Company('PantherLogistics')
!PantherLogistics.name := 'Panther Logistics'
!PantherLogistics.phone := '+49-30-555-6666'
!PantherLogistics.website := 'www.pantherlogistics.de'
!PantherLogistics.email := 'contact@pantherlogistics.de'
!PantherLogistics.industry := 'Logistics and Supply Chain'

!new Address('PantherLogisticsAddress')
!PantherLogisticsAddress.city := 'Berlin'
!PantherLogisticsAddress.houseNr := '18'
!PantherLogisticsAddress.street := 'Potsdamer Straße'
!insert (PantherLogistics, PantherLogisticsAddress) into ContactContainsAddress

!new Note('PantherLogisticsNote')
!PantherLogisticsNote.author := 'Manfred Bauer'
!PantherLogisticsNote.time := Date('2023-03-01')
!PantherLogisticsNote.type := #MEETING
!PantherLogisticsNote.comment := 'Discuss logistics optimization for the new cargo routes.'
!insert (PantherLogistics, PantherLogisticsNote) into ContactContainsNote

!new Person('MiguelSantana')
!MiguelSantana.name := 'Miguel Santana'
!MiguelSantana.phone := '+34-622-555-9933'
!MiguelSantana.website := 'www.miguelsantana.es'
!MiguelSantana.email := 'miguel.santana@esolutions.es'
!MiguelSantana.title := 'Procurement Specialist'

!new Address('MiguelSantanaAddress')
!MiguelSantanaAddress.city := 'Madrid'
!MiguelSantanaAddress.houseNr := '10'
!MiguelSantanaAddress.street := 'Gran Vía'
!insert (MiguelSantana, MiguelSantanaAddress) into ContactContainsAddress

!new Note('MiguelSantanaNote')
!MiguelSantanaNote.author := 'Miguel Santana'
!MiguelSantanaNote.time := Date('2023-05-30')
!MiguelSantanaNote.type := #EMAIL
!MiguelSantanaNote.comment := 'Recommendations for sourcing sustainable materials from Asia.'
!insert (MiguelSantana, MiguelSantanaNote) into ContactContainsNote

!new Person('EmmaLi')
!EmmaLi.name := 'Emma Li'
!EmmaLi.phone := '+86-10-6655-2233'
!EmmaLi.website := 'www.emmali.cn'
!EmmaLi.email := 'emma.li@chinabusiness.cn'
!EmmaLi.title := 'Regional Sales Director'

!new Address('EmmaLiAddress')
!EmmaLiAddress.city := 'Beijing'
!EmmaLiAddress.houseNr := '47'
!EmmaLiAddress.street := 'Dongcheng Street'
!insert (EmmaLi, EmmaLiAddress) into ContactContainsAddress

!new Note('EmmaLiNote')
!EmmaLiNote.author := 'Emma Li'
!EmmaLiNote.time := Date('2023-06-15')
!EmmaLiNote.type := #EMAIL
!EmmaLiNote.comment := 'Quarterly sales performance review with stakeholders.'
!insert (EmmaLi, EmmaLiNote) into ContactContainsNote

!new Relationship('AnaToMiguelBoss')
!AnaToMiguelBoss.type := #BOSS
!insert (AnaToMiguelBoss, MiguelSantana) into RelationshipToContact
!insert (AnaSilva, AnaToMiguelBoss) into ContactToRelationship

!new Relationship('MiguelToAnaEmployee')
!MiguelToAnaEmployee.type := #EMPLOYEE
!insert (MiguelToAnaEmployee, AnaSilva) into RelationshipToContact
!insert (MiguelSantana, MiguelToAnaEmployee) into ContactToRelationship

!new Relationship('AnaToEmmaCoworker')
!AnaToEmmaCoworker.type := #COWORKER
!insert (AnaToEmmaCoworker, EmmaLi) into RelationshipToContact
!insert (AnaSilva, AnaToEmmaCoworker) into ContactToRelationship

!new Relationship('EmmaToPantherSubdivision')
!EmmaToPantherSubdivision.type := #SUBDIVISION
!insert (EmmaToPantherSubdivision, PantherLogistics) into RelationshipToContact
!insert (EmmaLi, EmmaToPantherSubdivision) into ContactToRelationship

!insert (TranscontinentalBusinessNetwork, AnaSilva) into AddressBookMadeOfContact
!insert (TranscontinentalBusinessNetwork, PantherLogistics) into AddressBookMadeOfContact
!insert (TranscontinentalBusinessNetwork, MiguelSantana) into AddressBookMadeOfContact
!insert (TranscontinentalBusinessNetwork, EmmaLi) into AddressBookMadeOfContact
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 89 | 0.00% |
| Multiplicities Errors | 0 | 20 | 0.00% |
| Invariants Errors | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 4 | 0.00% |
| Websites | 0 | 4 | 0.00% |
| Emails | 0 | 4 | 0.00% |
| Addresses | 1 | 4 | 25.00% |

| Invalid Addresses | 
|---| 
```
Dongcheng Street, 47, Beijing
```

## Category boundary
```
!new AddressBook('WorldCulinaryNetworkAddressBook')

!new Company('GourmetGroupInc')
!GourmetGroupInc.name := 'Gourmet Group Inc.'
!GourmetGroupInc.phone := '+1-212-555-1020'
!GourmetGroupInc.website := 'www.gourmetgroup.com'
!GourmetGroupInc.email := 'inquiries@gourmetgroup.com'
!GourmetGroupInc.industry := 'Hospitality & Food'

!new Address('GourmetGroupAddress')
!GourmetGroupAddress.city := 'New York'
!GourmetGroupAddress.houseNr := '750'
!GourmetGroupAddress.street := 'Culinary Plaza'
!insert (GourmetGroupInc, GourmetGroupAddress) into ContactContainsAddress

!new Person('ChefPierreDubois')
!ChefPierreDubois.name := 'Chef Pierre Dubois'
!ChefPierreDubois.phone := '+33-1-555-0654'
!ChefPierreDubois.email := 'pierre.dubois@frenchflavor.fr'
!ChefPierreDubois.title := 'Executive Chef'

!new Address('PierreDuboisAddress')
!PierreDuboisAddress.city := 'Paris'
!PierreDuboisAddress.houseNr := '66'
!PierreDuboisAddress.street := 'Rue de la Cuisine'
!insert (ChefPierreDubois, PierreDuboisAddress) into ContactContainsAddress

!new Note('PierreDuboisNote1')
!PierreDuboisNote1.author := 'Gourmet Group Inc.'
!PierreDuboisNote1.time := Date('2023-10-07')
!PierreDuboisNote1.type := #EMAIL
!PierreDuboisNote1.comment := 'Sent invitation to Global Culinary Summit.'
!insert (ChefPierreDubois, PierreDuboisNote1) into ContactContainsNote

!new Company('AsianCulinaryAcademy')
!AsianCulinaryAcademy.name := 'Asian Culinary Academy'
!AsianCulinaryAcademy.phone := '+81-3-5550-2208'
!AsianCulinaryAcademy.website := 'www.asianculinary.ac.jp'
!AsianCulinaryAcademy.email := 'info@asianculinary.ac.jp'
!AsianCulinaryAcademy.industry := 'Education'

!new Person('ChefMariaLopez')
!ChefMariaLopez.name := 'Chef Maria Lopez'
!ChefMariaLopez.phone := '+34-91-555-0423'
!ChefMariaLopez.website := 'www.chefmaria.es'
!ChefMariaLopez.email := 'maria.lopez@innovocuisine.es'
!ChefMariaLopez.title := 'Pastry Chef'

!new Address('MariaLopezAddress1')
!MariaLopezAddress1.city := 'Madrid'
!MariaLopezAddress1.houseNr := '99'
!MariaLopezAddress1.street := 'Dulce Street'
!insert (ChefMariaLopez, MariaLopezAddress1) into ContactContainsAddress

!new Address('MariaLopezAddress2')
!MariaLopezAddress2.city := 'Barcelona'
!MariaLopezAddress2.houseNr := '88'
!MariaLopezAddress2.street := 'Pastelería Avenue'
!insert (ChefMariaLopez, MariaLopezAddress2) into ContactContainsAddress

!new Relationship('GourmetToPierreBoss')
!GourmetToPierreBoss.type := #BOSS
!insert (GourmetToPierreBoss, ChefPierreDubois) into RelationshipToContact
!insert (GourmetGroupInc, GourmetToPierreBoss) into ContactToRelationship

!new Relationship('MariaToAsianCulinaryEmployee')
!MariaToAsianCulinaryEmployee.type := #EMPLOYEE
!insert (MariaToAsianCulinaryEmployee, AsianCulinaryAcademy) into RelationshipToContact
!insert (ChefMariaLopez, MariaToAsianCulinaryEmployee) into ContactToRelationship

!new Relationship('PierreToMariaCoworker')
!PierreToMariaCoworker.type := #COWORKER
!insert (PierreToMariaCoworker, ChefMariaLopez) into RelationshipToContact
!insert (ChefPierreDubois, PierreToMariaCoworker) into ContactToRelationship

!insert (WorldCulinaryNetworkAddressBook, GourmetGroupInc) into AddressBookMadeOfContact
!insert (WorldCulinaryNetworkAddressBook, ChefPierreDubois) into AddressBookMadeOfContact
!insert (WorldCulinaryNetworkAddressBook, AsianCulinaryAcademy) into AddressBookMadeOfContact
!insert (WorldCulinaryNetworkAddressBook, ChefMariaLopez) into AddressBookMadeOfContact
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 66 | 0.00% |
| Multiplicities Errors | 0 | 15 | 0.00% |
| Invariants Errors | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 4 | 0.00% |
| Websites | 0 | 3 | 0.00% |
| Emails | 0 | 4 | 0.00% |
| Addresses | 4 | 4 | 100.00% |

| Invalid Addresses | 
|---| 
```
Culinary Plaza, 750, New York
```
```
Pastelería Avenue, 88, Barcelona
```
```
Dulce Street, 99, Madrid
```
```
Rue de la Cuisine, 66, Paris
```

## Category complex
```
!new AddressBook('GlobalEducationNetwork')

!new Person('ProfElenaMartinez')
!ProfElenaMartinez.name := 'Prof. Elena Martinez'
!ProfElenaMartinez.phone := '+34 91 3344 9988'
!ProfElenaMartinez.website := 'www.elenamartinez.academia.es'
!ProfElenaMartinez.email := 'elena.martinez@univ.es'
!ProfElenaMartinez.title := 'Dean of Social Sciences'

!new Address('ElenaMartinezAddress')
!ElenaMartinezAddress.city := 'Madrid'
!ElenaMartinezAddress.street := 'Knowledge Lane'
!ElenaMartinezAddress.houseNr := '101'
!insert (ProfElenaMartinez, ElenaMartinezAddress) into ContactContainsAddress

!new Note('ElenaMartinezNote1')
!ElenaMartinezNote1.author := 'Prof. Elena Martinez'
!ElenaMartinezNote1.time := Date('2023-05-12')
!ElenaMartinezNote1.type := #MEETING
!ElenaMartinezNote1.comment := 'Led panel on the impacts of globalization on education systems worldwide.'
!insert (ProfElenaMartinez, ElenaMartinezNote1) into ContactContainsNote

!new Note('ElenaMartinezNote2')
!ElenaMartinezNote2.author := 'Prof. Elena Martinez'
!ElenaMartinezNote2.time := Date('2023-05-20')
!ElenaMartinezNote2.type := #EMAIL
!ElenaMartinezNote2.comment := 'Sent a strategic proposal for a new international student exchange program.'
!insert (ProfElenaMartinez, ElenaMartinezNote2) into ContactContainsNote

!new Person('DrNiaHadjari')
!DrNiaHadjari.name := 'Dr. Nia Hadjari'
!DrNiaHadjari.phone := '+231 445 8876'
!DrNiaHadjari.website := 'www.niahadjari.org'
!DrNiaHadjari.email := 'nhadjari@minedu.gov.lr'
!DrNiaHadjari.title := 'Educational Policy Advisor'

!new Address('NiaHadjariAddress')
!NiaHadjariAddress.city := 'Monrovia'
!NiaHadjariAddress.street := 'Policy Drive'
!NiaHadjariAddress.houseNr := '12'
!insert (DrNiaHadjari, NiaHadjariAddress) into ContactContainsAddress

!new Note('NiaHadjariNote')
!NiaHadjariNote.author := 'Dr. Nia Hadjari'
!NiaHadjariNote.time := Date('2023-06-07')
!NiaHadjariNote.type := #CALL
!NiaHadjariNote.comment := 'Phone call with EU representatives regarding educational initiatives.'
!insert (DrNiaHadjari, NiaHadjariNote) into ContactContainsNote

!new Company('EducationForAllFoundation')
!EducationForAllFoundation.name := 'Education for All Foundation'
!EducationForAllFoundation.phone := '+44 20 4455 6677'
!EducationForAllFoundation.website := 'www.educationforall.org'
!EducationForAllFoundation.email := 'info@educationforall.org'
!EducationForAllFoundation.industry := 'Non-Profit Education'

!new Address('EducationForAllAddress')
!EducationForAllAddress.city := 'London'
!EducationForAllAddress.street := 'Equity Street'
!EducationForAllAddress.houseNr := '50'
!insert (EducationForAllFoundation, EducationForAllAddress) into ContactContainsAddress

!new Note('EducationForAllNote')
!EducationForAllNote.author := 'Education for All Foundation'
!EducationForAllNote.time := Date('2023-07-10')
!EducationForAllNote.type := #MEETING
!EducationForAllNote.comment := 'Hosted annual summit on educational access and equity.'
!insert (EducationForAllFoundation, EducationForAllNote) into ContactContainsNote

!new Company('GlobalLearningInitiative')
!GlobalLearningInitiative.name := 'Global Learning Initiative'
!GlobalLearningInitiative.phone := '+1 212 567 8901'
!GlobalLearningInitiative.website := 'www.globallearninginitiative.org'
!GlobalLearningInitiative.email := 'admin@globallearning.org'
!GlobalLearningInitiative.industry := 'Educational Consulting'

!new Address('GlobalLearningAddress')
!GlobalLearningAddress.city := 'New York'
!GlobalLearningAddress.street := 'Learning Avenue'
!GlobalLearningAddress.houseNr := '88'
!insert (GlobalLearningInitiative, GlobalLearningAddress) into ContactContainsAddress

!new Note('GlobalLearningNote')
!GlobalLearningNote.author := 'Global Learning Initiative'
!GlobalLearningNote.time := Date('2023-07-25')
!GlobalLearningNote.type := #EMAIL
!GlobalLearningNote.comment := 'Announced new funding opportunities for collaborative educational projects.'
!insert (GlobalLearningInitiative, GlobalLearningNote) into ContactContainsNote

!new Relationship('ElenaToEducationForAllEmployee')
!ElenaToEducationForAllEmployee.type := #EMPLOYEE
!insert (ElenaToEducationForAllEmployee, EducationForAllFoundation) into RelationshipToContact
!insert (ProfElenaMartinez, ElenaToEducationForAllEmployee) into ContactToRelationship

!new Relationship('NiaToGlobalLearningEmployee')
!NiaToGlobalLearningEmployee.type := #EMPLOYEE
!insert (NiaToGlobalLearningEmployee, GlobalLearningInitiative) into RelationshipToContact
!insert (DrNiaHadjari, NiaToGlobalLearningEmployee) into ContactToRelationship

!new Relationship('EducationForAllToElenaBoss')
!EducationForAllToElenaBoss.type := #BOSS
!insert (EducationForAllToElenaBoss, ProfElenaMartinez) into RelationshipToContact
!insert (EducationForAllFoundation, EducationForAllToElenaBoss) into ContactToRelationship

!new Relationship('GlobalLearningToNiaBoss')
!GlobalLearningToNiaBoss.type := #BOSS
!insert (GlobalLearningToNiaBoss, DrNiaHadjari) into RelationshipToContact
!insert (GlobalLearningInitiative, GlobalLearningToNiaBoss) into ContactToRelationship

!new Relationship('GlobalLearningToEducationForAllSubdivision')
!GlobalLearningToEducationForAllSubdivision.type := #SUBDIVISION
!insert (GlobalLearningToEducationForAllSubdivision, EducationForAllFoundation) into RelationshipToContact
!insert (GlobalLearningInitiative, GlobalLearningToEducationForAllSubdivision) into ContactToRelationship

!insert (GlobalEducationNetwork, ProfElenaMartinez) into AddressBookMadeOfContact
!insert (GlobalEducationNetwork, DrNiaHadjari) into AddressBookMadeOfContact
!insert (GlobalEducationNetwork, EducationForAllFoundation) into AddressBookMadeOfContact
!insert (GlobalEducationNetwork, GlobalLearningInitiative) into AddressBookMadeOfContact
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 99 | 0.00% |
| Multiplicities Errors | 0 | 23 | 0.00% |
| Invariants Errors | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 4 | 0.00% |
| Websites | 0 | 4 | 0.00% |
| Emails | 0 | 4 | 0.00% |
| Addresses | 4 | 4 | 100.00% |

| Invalid Addresses | 
|---| 
```
Equity Street, 50, London
```
```
Knowledge Lane, 101, Madrid
```
```
Policy Drive, 12, Monrovia
```
```
Learning Avenue, 88, New York
```

## Category edge
```
!new AddressBook('MediaAndEntertainmentNetwork')

!new Company('LunaProductions')
!LunaProductions.name := 'Luna Productions'
!LunaProductions.phone := '+1-310-7771234'
!LunaProductions.website := 'www.lunaproductions.us'
!LunaProductions.email := 'contact@lunaproductions.us'
!LunaProductions.industry := 'Film Production'

!new Address('LunaProductionsAddress')
!LunaProductionsAddress.city := 'Los Angeles'
!LunaProductionsAddress.houseNr := '500'
!LunaProductionsAddress.street := 'Hollywood Boulevard'
!insert (LunaProductions, LunaProductionsAddress) into ContactContainsAddress

!new Note('LunaProductionsNote1')
!LunaProductionsNote1.author := 'Evelyn Hart'
!LunaProductionsNote1.time := Date('2023-09-15T10:00:00')
!LunaProductionsNote1.type := #MEETING
!LunaProductionsNote1.comment := 'Annual planning session held in Los Angeles.'
!insert (LunaProductions, LunaProductionsNote1) into ContactContainsNote

!new Company('BrighterDaysPublishing')
!BrighterDaysPublishing.name := 'Brighter Days Publishing'
!BrighterDaysPublishing.phone := '+44-20-76191122'
!BrighterDaysPublishing.website := 'www.brighterdayspub.co.uk'
!BrighterDaysPublishing.email := 'editor@brighterdayspub.co.uk'
!BrighterDaysPublishing.industry := 'Publishing'

!new Address('BrighterDaysAddress')
!BrighterDaysAddress.city := 'London'
!BrighterDaysAddress.houseNr := '120'
!BrighterDaysAddress.street := 'Print Press Way'
!insert (BrighterDaysPublishing, BrighterDaysAddress) into ContactContainsAddress

!new Note('BrighterDaysNote1')
!BrighterDaysNote1.author := 'Jonathan Price'
!BrighterDaysNote1.time := Date('2023-06-22T08:30:00')
!BrighterDaysNote1.type := #EMAIL
!BrighterDaysNote1.comment := 'Draft collaboration agreement with Luna Productions.'
!insert (BrighterDaysPublishing, BrighterDaysNote1) into ContactContainsNote

!new Person('MaxwellChen')
!MaxwellChen.name := 'Maxwell Chen'
!MaxwellChen.phone := '+86-10-88765432'
!MaxwellChen.website := 'www.maxwellchenmedia.cn'
!MaxwellChen.email := 'm.chen@media.cn'
!MaxwellChen.title := 'Media Strategist'

!new Address('MaxwellChenAddress')
!MaxwellChenAddress.city := 'Beijing'
!MaxwellChenAddress.houseNr := '18'
!MaxwellChenAddress.street := 'Media Hub Road'
!insert (MaxwellChen, MaxwellChenAddress) into ContactContainsAddress

!new Note('MaxwellChenNote1')
!MaxwellChenNote1.author := 'Maxwell Chen'
!MaxwellChenNote1.time := Date('2023-08-30T18:00:00')
!MaxwellChenNote1.type := #CALL
!MaxwellChenNote1.comment := 'Discussed expanding media research in Asian markets.'
!insert (MaxwellChen, MaxwellChenNote1) into ContactContainsNote

!new Note('MaxwellChenNote2')
!MaxwellChenNote2.author := 'Maxwell Chen'
!MaxwellChenNote2.time := Date('2023-07-04T14:00:00')
!MaxwellChenNote2.type := #MEETING
!MaxwellChenNote2.comment := 'Strategy meeting with multiple divisions in Beijing.'
!insert (MaxwellChen, MaxwellChenNote2) into ContactContainsNote

!new Company('StarSoundStudios')
!StarSoundStudios.name := 'StarSound Studios'
!StarSoundStudios.phone := '+91-80-66554433'
!StarSoundStudios.website := 'www.starsoundstudios.in'
!StarSoundStudios.email := 'info@starsoundstudios.in'
!StarSoundStudios.industry := 'Music Production'

!new Address('StarSoundAddress')
!StarSoundAddress.city := 'Bangalore'
!StarSoundAddress.houseNr := '33'
!StarSoundAddress.street := 'Melody Lane'
!insert (StarSoundStudios, StarSoundAddress) into ContactContainsAddress

!new Note('StarSoundNote1')
!StarSoundNote1.author := 'Priya Menon'
!StarSoundNote1.time := Date('2023-05-10T11:30:00')
!StarSoundNote1.type := #CALL
!StarSoundNote1.comment := 'Meeting with investors on the upcoming music festival.'
!insert (StarSoundStudios, StarSoundNote1) into ContactContainsNote

!new Relationship('LunaToMaxwellCoworker')
!LunaToMaxwellCoworker.type := #COWORKER
!insert (LunaToMaxwellCoworker, MaxwellChen) into RelationshipToContact
!insert (LunaProductions, LunaToMaxwellCoworker) into ContactToRelationship

!new Relationship('LunaToBrighterDaysSubdivision')
!LunaToBrighterDaysSubdivision.type := #SUBDIVISION
!insert (LunaToBrighterDaysSubdivision, BrighterDaysPublishing) into RelationshipToContact
!insert (LunaProductions, LunaToBrighterDaysSubdivision) into ContactToRelationship

!new Relationship('BrighterDaysToLunaBoss')
!BrighterDaysToLunaBoss.type := #BOSS
!insert (BrighterDaysToLunaBoss, LunaProductions) into RelationshipToContact
!insert (BrighterDaysPublishing, BrighterDaysToLunaBoss) into ContactToRelationship

!new Relationship('BrighterDaysToMaxwellEmployee')
!BrighterDaysToMaxwellEmployee.type := #EMPLOYEE
!insert (BrighterDaysToMaxwellEmployee, MaxwellChen) into RelationshipToContact
!insert (BrighterDaysPublishing, BrighterDaysToMaxwellEmployee) into ContactToRelationship

!new Relationship('StarSoundToMaxwellCoworker')
!StarSoundToMaxwellCoworker.type := #COWORKER
!insert (StarSoundToMaxwellCoworker, MaxwellChen) into RelationshipToContact
!insert (StarSoundStudios, StarSoundToMaxwellCoworker) into ContactToRelationship

!insert (MediaAndEntertainmentNetwork, LunaProductions) into AddressBookMadeOfContact
!insert (MediaAndEntertainmentNetwork, BrighterDaysPublishing) into AddressBookMadeOfContact
!insert (MediaAndEntertainmentNetwork, MaxwellChen) into AddressBookMadeOfContact
!insert (MediaAndEntertainmentNetwork, StarSoundStudios) into AddressBookMadeOfContact
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 99 | 0.00% |
| Multiplicities Errors | 0 | 23 | 0.00% |
| Invariants Errors | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 4 | 0.00% |
| Websites | 0 | 4 | 0.00% |
| Emails | 0 | 4 | 0.00% |
| Addresses | 3 | 4 | 75.00% |

| Invalid Addresses | 
|---| 
```
Media Hub Road, 18, Beijing
```
```
Print Press Way, 120, London
```
```
Melody Lane, 33, Bangalore
```

## Category invalid
```
!new AddressBook('CulinaryFestivalAddressBook')

!new Company('InternationalCulinaryAcademy')
!InternationalCulinaryAcademy.name := 'International Culinary Academy'
!InternationalCulinaryAcademy.phone := '+1-213-555-0280'
!InternationalCulinaryAcademy.website := 'www.iculinaryacademy.org'
!InternationalCulinaryAcademy.email := 'info@iculinaryacademy.org'
!InternationalCulinaryAcademy.industry := 'Education'

!new Address('CulinaryAcademyAddress')
!CulinaryAcademyAddress.city := 'Los Angeles'
!CulinaryAcademyAddress.houseNr := '356'
!CulinaryAcademyAddress.street := 'Gastronomy Blvd'
!insert (InternationalCulinaryAcademy, CulinaryAcademyAddress) into ContactContainsAddress

!new Note('CulinaryAcademyNote1')
!CulinaryAcademyNote1.author := 'Festival Director'
!CulinaryAcademyNote1.time := Date('2023-06-10')
!CulinaryAcademyNote1.type := #EMAIL
!CulinaryAcademyNote1.comment := 'Confirm participation in the international food festival.'
!insert (InternationalCulinaryAcademy, CulinaryAcademyNote1) into ContactContainsNote

!new Person('ChefMaria')
!ChefMaria.name := 'Maria del Sol'
!ChefMaria.phone := '+34-655-555123'
!ChefMaria.email := 'maria.delsol@chefcuisine.es'
!ChefMaria.title := 'Head Chef'

!new Address('MariaDelSolAddress')
!MariaDelSolAddress.city := 'Barcelona'
!MariaDelSolAddress.houseNr := '18'
!MariaDelSolAddress.street := 'Chef Street'
!insert (ChefMaria, MariaDelSolAddress) into ContactContainsAddress

!new Note('ChefMariaNote1')
!ChefMariaNote1.author := 'Chef Maria'
!ChefMariaNote1.time := Date('2023-05-12')
!ChefMariaNote1.type := #MEETING
!ChefMariaNote1.comment := 'Coordinate Mediterranean cuisine showcase plan.'
!insert (ChefMaria, ChefMariaNote1) into ContactContainsNote

!new Person('ChefAntoine')
!ChefAntoine.name := 'Antoine Dubois'
!ChefAntoine.phone := '+33-1-5557532'
!ChefAntoine.email := 'antoine.dubois@frenchdelights.fr'
!ChefAntoine.title := 'Pastry Chef'

!new Address('AntoineDuboisAddress')
!AntoineDuboisAddress.city := 'Paris'
!AntoineDuboisAddress.houseNr := '24'
!AntoineDuboisAddress.street := 'Desserts Alley'
!insert (ChefAntoine, AntoineDuboisAddress) into ContactContainsAddress

!new Note('ChefAntoineNote1')
!ChefAntoineNote1.author := 'Patissier\'s Network'
!ChefAntoineNote1.time := Date('2023-05-14')
!ChefAntoineNote1.type := #CALL
!ChefAntoineNote1.comment := 'Discuss the arrangement for the multi-national dessert tasting.'
!insert (ChefAntoine, ChefAntoineNote1) into ContactContainsNote

!new Person('SophiaTran')
!SophiaTran.name := 'Sophia Tran'
!SophiaTran.phone := '+61-3-5552377'
!SophiaTran.email := 'sophia.tran@culinaryevents.com'
!SophiaTran.title := 'Event Organizer'

!new Address('SophiaTranAddress')
!SophiaTranAddress.city := 'Melbourne'
!SophiaTranAddress.houseNr := '200'
!SophiaTranAddress.street := 'Event Drive'
!insert (SophiaTran, SophiaTranAddress) into ContactContainsAddress

!new Relationship('CulinaryAcademyToMariaEmployee')
!CulinaryAcademyToMariaEmployee.type := #EMPLOYEE
!insert (CulinaryAcademyToMariaEmployee, ChefMaria) into RelationshipToContact
!insert (InternationalCulinaryAcademy, CulinaryAcademyToMariaEmployee) into ContactToRelationship

!new Relationship('CulinaryAcademyToAntoineSubdivision')
!CulinaryAcademyToAntoineSubdivision.type := #SUBDIVISION
!insert (CulinaryAcademyToAntoineSubdivision, ChefAntoine) into RelationshipToContact
!insert (InternationalCulinaryAcademy, CulinaryAcademyToAntoineSubdivision) into ContactToRelationship

!new Relationship('MariaToAntoineCoworker')
!MariaToAntoineCoworker.type := #COWORKER
!insert (MariaToAntoineCoworker, ChefAntoine) into RelationshipToContact
!insert (ChefMaria, MariaToAntoineCoworker) into ContactToRelationship

!new Relationship('MariaToSophiaCoworker')
!MariaToSophiaCoworker.type := #COWORKER
!insert (MariaToSophiaCoworker, SophiaTran) into RelationshipToContact
!insert (ChefMaria, MariaToSophiaCoworker) into ContactToRelationship

!new Relationship('AntoineToCulinaryAcademyEmployee')
!AntoineToCulinaryAcademyEmployee.type := #EMPLOYEE
!insert (AntoineToCulinaryAcademyEmployee, InternationalCulinaryAcademy) into RelationshipToContact
!insert (ChefAntoine, AntoineToCulinaryAcademyEmployee) into ContactToRelationship

!insert (CulinaryFestivalAddressBook, InternationalCulinaryAcademy) into AddressBookMadeOfContact
!insert (CulinaryFestivalAddressBook, ChefMaria) into AddressBookMadeOfContact
!insert (CulinaryFestivalAddressBook, ChefAntoine) into AddressBookMadeOfContact
!insert (CulinaryFestivalAddressBook, SophiaTran) into AddressBookMadeOfContact
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 21 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 4 | 0.00% |
| Websites | 0 | 1 | 0.00% |
| Emails | 0 | 4 | 0.00% |
| Addresses | 4 | 4 | 100.00% |

| Invalid Addresses | 
|---| 
```
Gastronomy Blvd, 356, Los Angeles
```
```
Desserts Alley, 24, Paris
```
```
Event Drive, 200, Melbourne
```
```
Chef Street, 18, Barcelona
```

## Generation 6 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 437 | 0.00% |
| Multiplicities Errors | 0 | 81 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 21 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 20 | 0.00% |
| Websites | 0 | 16 | 0.00% |
| Emails | 0 | 20 | 0.00% |
| Addresses | 16 | 20 | 80.00% |

| Invalid Addresses | 
|---| 
```
Dongcheng Street, 47, Beijing
```
```
Culinary Plaza, 750, New York
```
```
Pastelería Avenue, 88, Barcelona
```
```
Dulce Street, 99, Madrid
```
```
Rue de la Cuisine, 66, Paris
```
```
Equity Street, 50, London
```
```
Knowledge Lane, 101, Madrid
```
```
Policy Drive, 12, Monrovia
```
```
Learning Avenue, 88, New York
```
```
Media Hub Road, 18, Beijing
```
```
Print Press Way, 120, London
```
```
Melody Lane, 33, Bangalore
```
```
Gastronomy Blvd, 356, Los Angeles
```
```
Desserts Alley, 24, Paris
```
```
Event Drive, 200, Melbourne
```
```
Chef Street, 18, Barcelona
```

# Summary for all generations
| Summary | Value | 
|---|---| 
| Model | GPT_4O | 
| Type | CoT | 
| System | addressbook | 
| Number of generations | 6 | 

| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 2671 | 0.00% |
| Multiplicities Errors | 0 | 514 | 0.00% |
| Invariants Errors | 0 | 24 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 128 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 6 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 116 | 0.00% |
| Websites | 0 | 102 | 0.00% |
| Emails | 0 | 116 | 0.00% |
| Addresses | 96 | 121 | 79.34% |

| Invalid Addresses | 
|---| 
```
Nanjing Road, 89, Shanghai
```
```
Kensington High St, 245, London
```
```
Sunset Blvd, 120, Los Angeles
```
```
Avenue of the Americas, 55, New York
```
```
Beethovenstrasse, 101, Munich
```
```
Fleet Street, 12, London
```
```
Queen\s Road, 42, London
```
```
Film City Road, 301, Mumbai
```
```
Sunset Boulevard, 72, Los Angeles
```
```
Wissenschaftsstraße, 123, Berlin
```
```
Hauptplatz 12, 45, Vienna
```
```
MG Road, 305, Mumbai
```
```
Green Lane, 110, London
```
```
Ginza District, 88-03, Tokyo
```
```
Lilla Fiskaregatan, 74B, Malmö
```
```
Haga Nygata, 110A, Gothenburg
```
```
Ebisubashi, 1204, Osaka
```
```
Silicon Alley, 23, San Francisco
```
```
Innovation Drive, 456, Palo Alto
```
```
Greenway Boulevard, 9, Glasgow
```
```
Ciencia Street, 101, Madrid
```
```
Solar Parkway, 200, Berlin
```
```
University Avenue, 12, Karachi
```
```
Innovation Row, 101, Boston
```
```
Knowledge Hub Road, 88, Beijing
```
```
Science Boulevard, 77, Moscow
```
```
Tech Park Avenue, 50, London
```
```
Ocean Avenue, 101, Sydney
```
```
Unity Road, 50, Mumbai
```
```
Gran Via, 190, Madrid
```
```
Laxmi Nagar, 23D, Mumbai
```
```
Wangfujing, 3-5, Beijing
```
```
Östermalmstorg, 67, Stockholm
```
```
Kunstallee, 10, Hamburg
```
```
Art District, 72, Beijing
```
```
Culture Lane, 85, London
```
```
Artisans Lane, 58, Tokyo
```
```
Libertador Avenue, 999, Buenos Aires
```
```
Financial Plaza, 88, Hong Kong
```
```
Legal Research Avenue, 15, London
```
```
Barrister Lane, 23, Sydney
```
```
Nile Street, 200, Cairo
```
```
Academic Way, 100, New York
```
```
College Road, 50, Boston
```
```
Empire Ave, 130, New York
```
```
Science Boulevard, 77, Paris
```
```
Champs-Élysées, 12, Paris
```
```
Health Avenue, 14, Manchester
```
```
Oral Care Drive, 34, Sydney
```
```
Tomorrow Blvd, 98F, San Francisco
```
```
Innovation Park, 502, Cologne
```
```
Innovation Street, 147, Bangalore
```
```
Tech Valley, 33, Rio de Janeiro
```
```
Innovation Allee, 5, Berlin
```
```
Ocean Drive, 7, Tokyo
```
```
Green Lane, 50, Johannesburg
```
```
Millennial Way, 101, Mumbai
```
```
Painter\s Alley, 25, Madrid
```
```
Culture Street, 88, Seoul
```
```
Piccadilly Circus, 450, London
```
```
Event Blvd, 1000, New York
```
```
Victoria Island, 118, Lagos
```
```
Kwame Nkrumah Avenue, 9, Accra
```
```
University Drive, 55, Tokyo
```
```
Galileo Parkway, 400, Houston
```
```
Ecosystem Lane, 202, São Paulo
```
```
Ocean Street, 101, Rio de Janeiro
```
```
Health Avenue, 88, Singapore
```
```
Medicine Drive, 100A, Chicago
```
```
University Road, 5, Cairo
```
```
Healthcare Boulevard, 222, Sydney
```
```
Paseo del Arte, 15, Madrid
```
```
Rue de l\Artiste, 220, Paris
```
```
Artistic Avenue, 88, Melbourne
```
```
Culture Street, 202, Shanghai
```
```
Aid Avenue, 120, London
```
```
Hope Street, 17, Nairobi
```
```
Capital Blvd, 400, Washington, D.C.
```
```
Response Lane, 500, Sydney
```
```
Cargo Street, 45, Bangalore
```
```
Dongcheng Street, 47, Beijing
```
```
Culinary Plaza, 750, New York
```
```
Pastelería Avenue, 88, Barcelona
```
```
Dulce Street, 99, Madrid
```
```
Rue de la Cuisine, 66, Paris
```
```
Equity Street, 50, London
```
```
Knowledge Lane, 101, Madrid
```
```
Policy Drive, 12, Monrovia
```
```
Learning Avenue, 88, New York
```
```
Media Hub Road, 18, Beijing
```
```
Print Press Way, 120, London
```
```
Melody Lane, 33, Bangalore
```
```
Gastronomy Blvd, 356, Los Angeles
```
```
Desserts Alley, 24, Paris
```
```
Event Drive, 200, Melbourne
```
```
Chef Street, 18, Barcelona
```

