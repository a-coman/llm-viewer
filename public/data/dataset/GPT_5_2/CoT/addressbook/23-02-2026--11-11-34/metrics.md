# Generation 1
## Category baseline
```
!new AddressBook('AB_GlobalWorkPartners_1')

!new Person('P_Amina_ElSayed')
!P_Amina_ElSayed.name := 'Amina El-Sayed'
!P_Amina_ElSayed.phone := '+20 2 5550 0199'
!P_Amina_ElSayed.website := 'https://www.aminasayed.example'
!P_Amina_ElSayed.email := 'amina.el-sayed@example.com'
!P_Amina_ElSayed.title := 'Dr.'
!insert (AB_GlobalWorkPartners_1, P_Amina_ElSayed) into AddressBookMadeOfContact

!new Address('Addr_Amina_Cairo_1')
!Addr_Amina_Cairo_1.street := 'Tahrir Square'
!Addr_Amina_Cairo_1.houseNr := '12B'
!Addr_Amina_Cairo_1.city := 'Cairo'
!insert (P_Amina_ElSayed, Addr_Amina_Cairo_1) into ContactContainsAddress

!new Note('Note_Amina_1')
!Note_Amina_1.author := 'Jordan Lee'
!Note_Amina_1.time := Date('2026-01-15')
!Note_Amina_1.type := #MEETING
!Note_Amina_1.comment := 'Introductory meeting about analytics support for Q2 reporting; agreed to follow up with a proposal.'
!insert (P_Amina_ElSayed, Note_Amina_1) into ContactContainsNote

!new Note('Note_Amina_2')
!Note_Amina_2.author := 'Amina El-Sayed'
!Note_Amina_2.time := Date('2026-02-03')
!Note_Amina_2.type := #EMAIL
!Note_Amina_2.comment := 'Sent project summary and access requirements to Riverstone Analytics.'
!insert (P_Amina_ElSayed, Note_Amina_2) into ContactContainsNote

!new Person('P_Kenji_Tanaka')
!P_Kenji_Tanaka.name := 'Kenji Tanaka'
!P_Kenji_Tanaka.phone := '+81 3 6800 1122'
!P_Kenji_Tanaka.website := 'https://www.kenjitanaka.example'
!P_Kenji_Tanaka.email := 'kenji.tanaka@example.jp'
!P_Kenji_Tanaka.title := 'Mr.'
!insert (AB_GlobalWorkPartners_1, P_Kenji_Tanaka) into AddressBookMadeOfContact

!new Address('Addr_Kenji_Tokyo_1')
!Addr_Kenji_Tokyo_1.street := 'Chuo-dori'
!Addr_Kenji_Tokyo_1.houseNr := '5-14'
!Addr_Kenji_Tokyo_1.city := 'Tokyo'
!insert (P_Kenji_Tanaka, Addr_Kenji_Tokyo_1) into ContactContainsAddress

!new Note('Note_Kenji_1')
!Note_Kenji_1.author := 'Amina El-Sayed'
!Note_Kenji_1.time := Date('2026-01-18')
!Note_Kenji_1.type := #CALL
!Note_Kenji_1.comment := 'Quick call: Kenji confirmed timeline and flagged data quality risk in one source feed.'
!insert (P_Kenji_Tanaka, Note_Kenji_1) into ContactContainsNote

!new Person('P_Maria_Gonzalez')
!P_Maria_Gonzalez.name := 'María González'
!P_Maria_Gonzalez.phone := '+34 91 123 45 67'
!P_Maria_Gonzalez.website := 'https://www.mariagonzalez.example'
!P_Maria_Gonzalez.email := 'maria.gonzalez@example.es'
!P_Maria_Gonzalez.title := 'Ms.'
!insert (AB_GlobalWorkPartners_1, P_Maria_Gonzalez) into AddressBookMadeOfContact

!new Address('Addr_Maria_Madrid_1')
!Addr_Maria_Madrid_1.street := 'Calle de Alcalá'
!Addr_Maria_Madrid_1.houseNr := '45'
!Addr_Maria_Madrid_1.city := 'Madrid'
!insert (P_Maria_Gonzalez, Addr_Maria_Madrid_1) into ContactContainsAddress

!new Note('Note_Maria_1')
!Note_Maria_1.author := 'María González'
!Note_Maria_1.time := Date('2026-02-10')
!Note_Maria_1.type := #EMAIL
!Note_Maria_1.comment := 'Emailed Kenji the revised dashboard mockups; awaiting confirmation from Amina.'
!insert (P_Maria_Gonzalez, Note_Maria_1) into ContactContainsNote

!new Company('C_Riverstone_Ltd')
!C_Riverstone_Ltd.name := 'Riverstone Analytics Ltd.'
!C_Riverstone_Ltd.phone := '+44 20 7946 0810'
!C_Riverstone_Ltd.website := 'https://www.riverstone-analytics.example'
!C_Riverstone_Ltd.email := 'contact@riverstone-analytics.example'
!C_Riverstone_Ltd.industry := 'Data analytics and business intelligence consulting'
!insert (AB_GlobalWorkPartners_1, C_Riverstone_Ltd) into AddressBookMadeOfContact

!new Address('Addr_Riverstone_London_1')
!Addr_Riverstone_London_1.street := 'Bishopsgate'
!Addr_Riverstone_London_1.houseNr := '110'
!Addr_Riverstone_London_1.city := 'London'
!insert (C_Riverstone_Ltd, Addr_Riverstone_London_1) into ContactContainsAddress

!new Note('Note_Riverstone_Ltd_1')
!Note_Riverstone_Ltd_1.author := 'Kenji Tanaka'
!Note_Riverstone_Ltd_1.time := Date('2026-01-22')
!Note_Riverstone_Ltd_1.type := #MEETING
!Note_Riverstone_Ltd_1.comment := 'Vendor briefing completed; they can provide ETL support and dashboard QA within 3 weeks.'
!insert (C_Riverstone_Ltd, Note_Riverstone_Ltd_1) into ContactContainsNote

!new Company('C_Riverstone_Iberia')
!C_Riverstone_Iberia.name := 'Riverstone Analytics Iberia S.L.'
!C_Riverstone_Iberia.phone := '+34 93 555 01 20'
!C_Riverstone_Iberia.website := 'https://iberia.riverstone-analytics.example'
!C_Riverstone_Iberia.email := 'hola@iberia.riverstone-analytics.example'
!C_Riverstone_Iberia.industry := 'Data analytics (regional delivery center)'
!insert (AB_GlobalWorkPartners_1, C_Riverstone_Iberia) into AddressBookMadeOfContact

!new Address('Addr_Riverstone_Barcelona_1')
!Addr_Riverstone_Barcelona_1.street := 'Avinguda Diagonal'
!Addr_Riverstone_Barcelona_1.houseNr := '640'
!Addr_Riverstone_Barcelona_1.city := 'Barcelona'
!insert (C_Riverstone_Iberia, Addr_Riverstone_Barcelona_1) into ContactContainsAddress

!new Relationship('Rel_Amina_to_Kenji_Boss_1')
!Rel_Amina_to_Kenji_Boss_1.type := #BOSS
!insert (P_Amina_ElSayed, Rel_Amina_to_Kenji_Boss_1) into ContactToRelationship
!insert (Rel_Amina_to_Kenji_Boss_1, P_Kenji_Tanaka) into RelationshipToContact

!new Relationship('Rel_Amina_to_Maria_Boss_1')
!Rel_Amina_to_Maria_Boss_1.type := #BOSS
!insert (P_Amina_ElSayed, Rel_Amina_to_Maria_Boss_1) into ContactToRelationship
!insert (Rel_Amina_to_Maria_Boss_1, P_Maria_Gonzalez) into RelationshipToContact

!new Relationship('Rel_Kenji_to_Amina_Employee_1')
!Rel_Kenji_to_Amina_Employee_1.type := #EMPLOYEE
!insert (P_Kenji_Tanaka, Rel_Kenji_to_Amina_Employee_1) into ContactToRelationship
!insert (Rel_Kenji_to_Amina_Employee_1, P_Amina_ElSayed) into RelationshipToContact

!new Relationship('Rel_Kenji_to_Maria_Coworker_1')
!Rel_Kenji_to_Maria_Coworker_1.type := #COWORKER
!insert (P_Kenji_Tanaka, Rel_Kenji_to_Maria_Coworker_1) into ContactToRelationship
!insert (Rel_Kenji_to_Maria_Coworker_1, P_Maria_Gonzalez) into RelationshipToContact

!new Relationship('Rel_Maria_to_Amina_Employee_1')
!Rel_Maria_to_Amina_Employee_1.type := #EMPLOYEE
!insert (P_Maria_Gonzalez, Rel_Maria_to_Amina_Employee_1) into ContactToRelationship
!insert (Rel_Maria_to_Amina_Employee_1, P_Amina_ElSayed) into RelationshipToContact

!new Relationship('Rel_RiverstoneLtd_to_Iberia_Subdivision_1')
!Rel_RiverstoneLtd_to_Iberia_Subdivision_1.type := #SUBDIVISION
!insert (C_Riverstone_Ltd, Rel_RiverstoneLtd_to_Iberia_Subdivision_1) into ContactToRelationship
!insert (Rel_RiverstoneLtd_to_Iberia_Subdivision_1, C_Riverstone_Iberia) into RelationshipToContact

!new Relationship('Rel_RiverstoneLtd_to_Kenji_Boss_1')
!Rel_RiverstoneLtd_to_Kenji_Boss_1.type := #BOSS
!insert (C_Riverstone_Ltd, Rel_RiverstoneLtd_to_Kenji_Boss_1) into ContactToRelationship
!insert (Rel_RiverstoneLtd_to_Kenji_Boss_1, P_Kenji_Tanaka) into RelationshipToContact
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 119 | 0.00% |
| Multiplicities Errors | 0 | 29 | 0.00% |
| Invariants Errors | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 5 | 0.00% |
| Websites | 0 | 5 | 0.00% |
| Emails | 0 | 5 | 0.00% |
| Addresses | 2 | 5 | 40.00% |

| Invalid Addresses | 
|---| 
```
Chuo-dori, 5-14, Tokyo
```
```
Tahrir Square, 12B, Cairo
```

## Category boundary
```
!new AddressBook('AB_Emptyish_1')
!new Person('P1')
!P1.name := 'Å'
!P1.phone := ''
!P1.website := ''
!P1.email := ''
!P1.title := ''
!insert (AB_Emptyish_1, P1) into AddressBookMadeOfContact
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 8 | 0.00% |
| Multiplicities Errors | 0 | 1 | 0.00% |
| Invariants Errors | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 1 | 1 | 100.00% |
| Websites | 1 | 1 | 100.00% |
| Emails | 1 | 1 | 100.00% |
| Addresses | 0 | 0 | 0.00% |

| Invalid Phones | 
|---| 
```

```

| Invalid Websites | 
|---| 
```

```

| Invalid Emails | 
|---| 
```

```

## Category complex
```
!new AddressBook('AB_GlobalVentures_2026_1')

!new Person('P_GV_Amina_1')
!P_GV_Amina_1.name := 'Dr. Amina El‑Sayed'
!P_GV_Amina_1.title := 'Dr.'
!P_GV_Amina_1.phone := '+20 2 2794 1130'
!P_GV_Amina_1.website := 'https://amina-elsayed.example.org'
!P_GV_Amina_1.email := 'amina.elsayed@example.org'
!insert (AB_GlobalVentures_2026_1, P_GV_Amina_1) into AddressBookMadeOfContact

!new Address('Addr_GV_Amina_Cairo_1')
!Addr_GV_Amina_Cairo_1.city := 'Cairo'
!Addr_GV_Amina_Cairo_1.street := 'Tahrir Square'
!Addr_GV_Amina_Cairo_1.houseNr := '12B'
!insert (P_GV_Amina_1, Addr_GV_Amina_Cairo_1) into ContactContainsAddress

!new Address('Addr_GV_Amina_Alexandria_1')
!Addr_GV_Amina_Alexandria_1.city := 'Alexandria'
!Addr_GV_Amina_Alexandria_1.street := 'El‑Corniche'
!Addr_GV_Amina_Alexandria_1.houseNr := '55'
!insert (P_GV_Amina_1, Addr_GV_Amina_Alexandria_1) into ContactContainsAddress

!new Note('Note_GV_Amina_1')
!Note_GV_Amina_1.author := 'Amina'
!Note_GV_Amina_1.time := Date('2026-01-08')
!Note_GV_Amina_1.type := #MEETING
!Note_GV_Amina_1.comment := 'Kickoff with Nordic BioAnalytics; agreed on biomarker model evaluation milestones.'
!insert (P_GV_Amina_1, Note_GV_Amina_1) into ContactContainsNote

!new Note('Note_GV_Amina_2')
!Note_GV_Amina_2.author := 'Kenji Tanaka'
!Note_GV_Amina_2.time := Date('2026-01-19')
!Note_GV_Amina_2.type := #EMAIL
!Note_GV_Amina_2.comment := 'Sent updated feature schema + Japanese locale normalization details.'
!insert (P_GV_Amina_1, Note_GV_Amina_2) into ContactContainsNote

!new Note('Note_GV_Amina_3')
!Note_GV_Amina_3.author := 'Sofía García Márquez'
!Note_GV_Amina_3.time := Date('2026-02-03')
!Note_GV_Amina_3.type := #CALL
!Note_GV_Amina_3.comment := 'Discussed EU data retention constraints for the Berlin lab pipeline.'
!insert (P_GV_Amina_1, Note_GV_Amina_3) into ContactContainsNote

!new Person('P_GV_Kenji_1')
!P_GV_Kenji_1.name := 'Kenji Tanaka'
!P_GV_Kenji_1.title := 'Mr.'
!P_GV_Kenji_1.phone := '+81 3-6801-7788'
!P_GV_Kenji_1.website := 'https://kenji-t.example.jp'
!P_GV_Kenji_1.email := 'kenji.tanaka@example.jp'
!insert (AB_GlobalVentures_2026_1, P_GV_Kenji_1) into AddressBookMadeOfContact

!new Address('Addr_GV_Kenji_Tokyo_1')
!Addr_GV_Kenji_Tokyo_1.city := 'Tokyo'
!Addr_GV_Kenji_Tokyo_1.street := 'Shinjuku-dori'
!Addr_GV_Kenji_Tokyo_1.houseNr := '3-14-7'
!insert (P_GV_Kenji_1, Addr_GV_Kenji_Tokyo_1) into ContactContainsAddress

!new Note('Note_GV_Kenji_1')
!Note_GV_Kenji_1.author := 'Miyu Sato'
!Note_GV_Kenji_1.time := Date('2026-01-22')
!Note_GV_Kenji_1.type := #CALL
!Note_GV_Kenji_1.comment := 'Confirmed Kenji’s travel availability for Copenhagen workshop (visa timeline ok).'
!insert (P_GV_Kenji_1, Note_GV_Kenji_1) into ContactContainsNote

!new Note('Note_GV_Kenji_2')
!Note_GV_Kenji_2.author := 'Kenji Tanaka'
!Note_GV_Kenji_2.time := Date('2026-02-10')
!Note_GV_Kenji_2.type := #EMAIL
!Note_GV_Kenji_2.comment := 'Reported intermittent latency on EU endpoint; suggested region failover plan.'
!insert (P_GV_Kenji_1, Note_GV_Kenji_2) into ContactContainsNote

!new Person('P_GV_Sofia_1')
!P_GV_Sofia_1.name := 'Sofía García Márquez'
!P_GV_Sofia_1.title := 'Ms.'
!P_GV_Sofia_1.phone := '+34 93 555 01 90'
!P_GV_Sofia_1.website := 'https://sofiagm.example.es'
!P_GV_Sofia_1.email := 'sofia.garcia@example.es'
!insert (AB_GlobalVentures_2026_1, P_GV_Sofia_1) into AddressBookMadeOfContact

!new Address('Addr_GV_Sofia_Barcelona_1')
!Addr_GV_Sofia_Barcelona_1.city := 'Barcelona'
!Addr_GV_Sofia_Barcelona_1.street := 'Carrer de València'
!Addr_GV_Sofia_Barcelona_1.houseNr := '181'
!insert (P_GV_Sofia_1, Addr_GV_Sofia_Barcelona_1) into ContactContainsAddress

!new Address('Addr_GV_Sofia_Berlin_1')
!Addr_GV_Sofia_Berlin_1.city := 'Berlin'
!Addr_GV_Sofia_Berlin_1.street := 'Friedrichstraße'
!Addr_GV_Sofia_Berlin_1.houseNr := '210'
!insert (P_GV_Sofia_1, Addr_GV_Sofia_Berlin_1) into ContactContainsAddress

!new Note('Note_GV_Sofia_1')
!Note_GV_Sofia_1.author := 'Sofía'
!Note_GV_Sofia_1.time := Date('2026-01-30')
!Note_GV_Sofia_1.type := #MEETING
!Note_GV_Sofia_1.comment := 'Met Berlin QA; mapped validation steps to MDR documentation.'
!insert (P_GV_Sofia_1, Note_GV_Sofia_1) into ContactContainsNote

!new Note('Note_GV_Sofia_2')
!Note_GV_Sofia_2.author := 'Amina El‑Sayed'
!Note_GV_Sofia_2.time := Date('2026-02-05')
!Note_GV_Sofia_2.type := #EMAIL
!Note_GV_Sofia_2.comment := 'Reminder: ensure pseudonymization before export to cloud workspace.'
!insert (P_GV_Sofia_1, Note_GV_Sofia_2) into ContactContainsNote

!new Person('P_GV_Ravi_1')
!P_GV_Ravi_1.name := 'Ravi Kumar'
!P_GV_Ravi_1.title := 'Mr.'
!P_GV_Ravi_1.phone := '+91 80 4123 9900'
!P_GV_Ravi_1.website := 'https://ravi-kumar.example.in'
!P_GV_Ravi_1.email := 'ravi.kumar@example.in'
!insert (AB_GlobalVentures_2026_1, P_GV_Ravi_1) into AddressBookMadeOfContact

!new Address('Addr_GV_Ravi_Bengaluru_1')
!Addr_GV_Ravi_Bengaluru_1.city := 'Bengaluru'
!Addr_GV_Ravi_Bengaluru_1.street := 'MG Road'
!Addr_GV_Ravi_Bengaluru_1.houseNr := '44'
!insert (P_GV_Ravi_1, Addr_GV_Ravi_Bengaluru_1) into ContactContainsAddress

!new Note('Note_GV_Ravi_1')
!Note_GV_Ravi_1.author := 'Ravi'
!Note_GV_Ravi_1.time := Date('2026-02-08')
!Note_GV_Ravi_1.type := #CALL
!Note_GV_Ravi_1.comment := 'Coordinated cold-chain device telemetry format with logistics partner; awaiting sample payloads.'
!insert (P_GV_Ravi_1, Note_GV_Ravi_1) into ContactContainsNote

!new Note('Note_GV_Ravi_2')
!Note_GV_Ravi_2.author := 'Sofía García Márquez'
!Note_GV_Ravi_2.time := Date('2026-02-12')
!Note_GV_Ravi_2.type := #EMAIL
!Note_GV_Ravi_2.comment := 'Please align shipment status codes with Berlin lab intake system.'
!insert (P_GV_Ravi_1, Note_GV_Ravi_2) into ContactContainsNote

!new Person('P_GV_Lars_1')
!P_GV_Lars_1.name := 'Prof. Lars Nørgaard'
!P_GV_Lars_1.title := 'Prof.'
!P_GV_Lars_1.phone := '+45 33 12 90 10'
!P_GV_Lars_1.website := 'https://larsn.example.dk'
!P_GV_Lars_1.email := 'lars.norgaard@example.dk'
!insert (AB_GlobalVentures_2026_1, P_GV_Lars_1) into AddressBookMadeOfContact

!new Address('Addr_GV_Lars_Copenhagen_1')
!Addr_GV_Lars_Copenhagen_1.city := 'Copenhagen'
!Addr_GV_Lars_Copenhagen_1.street := 'Nørregade'
!Addr_GV_Lars_Copenhagen_1.houseNr := '8'
!insert (P_GV_Lars_1, Addr_GV_Lars_Copenhagen_1) into ContactContainsAddress

!new Note('Note_GV_Lars_1')
!Note_GV_Lars_1.author := 'Lars'
!Note_GV_Lars_1.time := Date('2026-01-15')
!Note_GV_Lars_1.type := #MEETING
!Note_GV_Lars_1.comment := 'Reviewed assay drift analysis; recommended robust scaling + outlier audit log.'
!insert (P_GV_Lars_1, Note_GV_Lars_1) into ContactContainsNote

!new Person('P_GV_Chiara_1')
!P_GV_Chiara_1.name := 'Chiara Bianchi'
!P_GV_Chiara_1.title := 'Dr.'
!P_GV_Chiara_1.phone := '+39 02 8734 2222'
!P_GV_Chiara_1.website := 'https://chiara-bianchi.example.it'
!P_GV_Chiara_1.email := 'chiara.bianchi@example.it'
!insert (AB_GlobalVentures_2026_1, P_GV_Chiara_1) into AddressBookMadeOfContact

!new Address('Addr_GV_Chiara_Milan_1')
!Addr_GV_Chiara_Milan_1.city := 'Milan'
!Addr_GV_Chiara_Milan_1.street := 'Via Brera'
!Addr_GV_Chiara_Milan_1.houseNr := '19'
!insert (P_GV_Chiara_1, Addr_GV_Chiara_Milan_1) into ContactContainsAddress

!new Note('Note_GV_Chiara_1')
!Note_GV_Chiara_1.author := 'Chiara'
!Note_GV_Chiara_1.time := Date('2026-02-02')
!Note_GV_Chiara_1.type := #EMAIL
!Note_GV_Chiara_1.comment := 'Shared reproducibility report; flagged two batches needing re-run due to sensor calibration.'
!insert (P_GV_Chiara_1, Note_GV_Chiara_1) into ContactContainsNote

!new Note('Note_GV_Chiara_2')
!Note_GV_Chiara_2.author := 'Prof. Lars Nørgaard'
!Note_GV_Chiara_2.time := Date('2026-02-06')
!Note_GV_Chiara_2.type := #CALL
!Note_GV_Chiara_2.comment := 'Advised to document all preprocessing steps for audit readiness.'
!insert (P_GV_Chiara_1, Note_GV_Chiara_2) into ContactContainsNote

!new Person('P_GV_Miyu_1')
!P_GV_Miyu_1.name := 'Miyu Sato'
!P_GV_Miyu_1.title := 'Ms.'
!P_GV_Miyu_1.phone := '+81 6-6131-4400'
!P_GV_Miyu_1.website := 'https://miyu-sato.example.jp'
!P_GV_Miyu_1.email := 'miyu.sato@example.jp'
!insert (AB_GlobalVentures_2026_1, P_GV_Miyu_1) into AddressBookMadeOfContact

!new Address('Addr_GV_Miyu_Osaka_1')
!Addr_GV_Miyu_Osaka_1.city := 'Osaka'
!Addr_GV_Miyu_Osaka_1.street := 'Umeda'
!Addr_GV_Miyu_Osaka_1.houseNr := '1-1-3'
!insert (P_GV_Miyu_1, Addr_GV_Miyu_Osaka_1) into ContactContainsAddress

!new Note('Note_GV_Miyu_1')
!Note_GV_Miyu_1.author := 'Miyu'
!Note_GV_Miyu_1.time := Date('2026-01-10')
!Note_GV_Miyu_1.type := #EMAIL
!Note_GV_Miyu_1.comment := 'Onboarding checklist updated for cross-border contractors; added new security training link.'
!insert (P_GV_Miyu_1, Note_GV_Miyu_1) into ContactContainsNote

!new Company('C_GV_Nordic_AS_1')
!C_GV_Nordic_AS_1.name := 'Nordic BioAnalytics A/S'
!C_GV_Nordic_AS_1.industry := 'Biotechnology & Clinical Data Science'
!C_GV_Nordic_AS_1.phone := '+45 70 22 11 00'
!C_GV_Nordic_AS_1.website := 'https://nordicbio.example.com'
!C_GV_Nordic_AS_1.email := 'contact@nordicbio.example.com'
!insert (AB_GlobalVentures_2026_1, C_GV_Nordic_AS_1) into AddressBookMadeOfContact

!new Address('Addr_GV_NordicAS_Copenhagen_1')
!Addr_GV_NordicAS_Copenhagen_1.city := 'Copenhagen'
!Addr_GV_NordicAS_Copenhagen_1.street := 'Østerbrogade'
!Addr_GV_NordicAS_Copenhagen_1.houseNr := '120'
!insert (C_GV_Nordic_AS_1, Addr_GV_NordicAS_Copenhagen_1) into ContactContainsAddress

!new Address('Addr_GV_NordicAS_Aarhus_1')
!Addr_GV_NordicAS_Aarhus_1.city := 'Aarhus'
!Addr_GV_NordicAS_Aarhus_1.street := 'Søndergade'
!Addr_GV_NordicAS_Aarhus_1.houseNr := '5A'
!insert (C_GV_Nordic_AS_1, Addr_GV_NordicAS_Aarhus_1) into ContactContainsAddress

!new Note('Note_GV_NordicAS_1')
!Note_GV_NordicAS_1.author := 'Procurement Team'
!Note_GV_NordicAS_1.time := Date('2026-01-28')
!Note_GV_NordicAS_1.type := #EMAIL
!Note_GV_NordicAS_1.comment := 'PO issued for additional refrigerated sensors; delivery to Berlin site.'
!insert (C_GV_Nordic_AS_1, Note_GV_NordicAS_1) into ContactContainsNote

!new Company('C_GV_Nordic_GmbH_1')
!C_GV_Nordic_GmbH_1.name := 'Nordic BioAnalytics GmbH'
!C_GV_Nordic_GmbH_1.industry := 'Medical Laboratory Operations'
!C_GV_Nordic_GmbH_1.phone := '+49 30 2201 7780'
!C_GV_Nordic_GmbH_1.website := 'https://nordicbio-eu.example.de'
!C_GV_Nordic_GmbH_1.email := 'info@nordicbio-eu.example.de'
!insert (AB_GlobalVentures_2026_1, C_GV_Nordic_GmbH_1) into AddressBookMadeOfContact

!new Address('Addr_GV_NordicGmbH_Berlin_1')
!Addr_GV_NordicGmbH_Berlin_1.city := 'Berlin'
!Addr_GV_NordicGmbH_Berlin_1.street := 'Alexanderplatz'
!Addr_GV_NordicGmbH_Berlin_1.houseNr := '4'
!insert (C_GV_Nordic_GmbH_1, Addr_GV_NordicGmbH_Berlin_1) into ContactContainsAddress

!new Company('C_GV_Andes_SpA_1')
!C_GV_Andes_SpA_1.name := 'Andes Cloud SpA'
!C_GV_Andes_SpA_1.industry := 'Cloud Computing & Data Platforms'
!C_GV_Andes_SpA_1.phone := '+56 2 2940 8800'
!C_GV_Andes_SpA_1.website := 'https://andescloud.example.cl'
!C_GV_Andes_SpA_1.email := 'partners@andescloud.example.cl'
!insert (AB_GlobalVentures_2026_1, C_GV_Andes_SpA_1) into AddressBookMadeOfContact

!new Address('Addr_GV_AndesSpA_Santiago_1')
!Addr_GV_AndesSpA_Santiago_1.city := 'Santiago'
!Addr_GV_AndesSpA_Santiago_1.street := 'Av. Providencia'
!Addr_GV_AndesSpA_Santiago_1.houseNr := '1860'
!insert (C_GV_Andes_SpA_1, Addr_GV_AndesSpA_Santiago_1) into ContactContainsAddress

!new Address('Addr_GV_AndesSpA_Lima_1')
!Addr_GV_AndesSpA_Lima_1.city := 'Lima'
!Addr_GV_AndesSpA_Lima_1.street := 'Av. Javier Prado'
!Addr_GV_AndesSpA_Lima_1.houseNr := '2450'
!insert (C_GV_Andes_SpA_1, Addr_GV_AndesSpA_Lima_1) into ContactContainsAddress

!new Note('Note_GV_AndesSpA_1')
!Note_GV_AndesSpA_1.author := 'María Fernanda (Account Mgmt)'
!Note_GV_AndesSpA_1.time := Date('2026-02-01')
!Note_GV_AndesSpA_1.type := #MEETING
!Note_GV_AndesSpA_1.comment := 'Agreed to set up dedicated VPC peering for Nordic BioAnalytics; compliance review scheduled.'
!insert (C_GV_Andes_SpA_1, Note_GV_AndesSpA_1) into ContactContainsNote

!new Company('C_GV_Andes_Europe_SL_1')
!C_GV_Andes_Europe_SL_1.name := 'Andes Cloud Europe S.L.'
!C_GV_Andes_Europe_SL_1.industry := 'Cloud Computing (EU Operations)'
!C_GV_Andes_Europe_SL_1.phone := '+34 91 600 77 40'
!C_GV_Andes_Europe_SL_1.website := 'https://eu.andescloud.example'
!C_GV_Andes_Europe_SL_1.email := 'eu-office@andescloud.example'
!insert (AB_GlobalVentures_2026_1, C_GV_Andes_Europe_SL_1) into AddressBookMadeOfContact

!new Address('Addr_GV_AndesEU_Madrid_1')
!Addr_GV_AndesEU_Madrid_1.city := 'Madrid'
!Addr_GV_AndesEU_Madrid_1.street := 'Calle de Alcalá'
!Addr_GV_AndesEU_Madrid_1.houseNr := '92'
!insert (C_GV_Andes_Europe_SL_1, Addr_GV_AndesEU_Madrid_1) into ContactContainsAddress

!new Note('Note_GV_AndesEU_1')
!Note_GV_AndesEU_1.author := 'Compliance Desk'
!Note_GV_AndesEU_1.time := Date('2026-02-11')
!Note_GV_AndesEU_1.type := #EMAIL
!Note_GV_AndesEU_1.comment := 'Requested DPA addendum and data-processing register entry for Nordic BioAnalytics GmbH integration.'
!insert (C_GV_Andes_Europe_SL_1, Note_GV_AndesEU_1) into ContactContainsNote

!new Company('C_GV_Sahara_SARL_1')
!C_GV_Sahara_SARL_1.name := 'Sahara Logistics SARL'
!C_GV_Sahara_SARL_1.industry := 'Cold-Chain Logistics & International Freight'
!C_GV_Sahara_SARL_1.phone := '+212 522 49 88 10'
!C_GV_Sahara_SARL_1.website := 'https://sahara-logistics.example.ma'
!C_GV_Sahara_SARL_1.email := 'ops@sahara-logistics.example.ma'
!insert (AB_GlobalVentures_2026_1, C_GV_Sahara_SARL_1) into AddressBookMadeOfContact

!new Address('Addr_GV_Sahara_Casablanca_1')
!Addr_GV_Sahara_Casablanca_1.city := 'Casablanca'
!Addr_GV_Sahara_Casablanca_1.street := 'Boulevard Zerktouni'
!Addr_GV_Sahara_Casablanca_1.houseNr := '17'
!insert (C_GV_Sahara_SARL_1, Addr_GV_Sahara_Casablanca_1) into ContactContainsAddress

!new Address('Addr_GV_Sahara_Tangier_1')
!Addr_GV_Sahara_Tangier_1.city := 'Tangier'
!Addr_GV_Sahara_Tangier_1.street := 'Route de Tétouan'
!Addr_GV_Sahara_Tangier_1.houseNr := 'KM 12'
!insert (C_GV_Sahara_SARL_1, Addr_GV_Sahara_Tangier_1) into ContactContainsAddress

!new Note('Note_GV_Sahara_1')
!Note_GV_Sahara_1.author := 'Ops Control'
!Note_GV_Sahara_1.time := Date('2026-01-26')
!Note_GV_Sahara_1.type := #CALL
!Note_GV_Sahara_1.comment := 'Confirmed temperature logger calibration certificate for Q1 shipments.'
!insert (C_GV_Sahara_SARL_1, Note_GV_Sahara_1) into ContactContainsNote

!new Note('Note_GV_Sahara_2')
!Note_GV_Sahara_2.author := 'Ravi Kumar'
!Note_GV_Sahara_2.time := Date('2026-02-09')
!Note_GV_Sahara_2.type := #EMAIL
!Note_GV_Sahara_2.comment := 'Sent mapping table: shipmentStatus -> labIntakeState for Berlin receiving.'
!insert (C_GV_Sahara_SARL_1, Note_GV_Sahara_2) into ContactContainsNote

!new Relationship('Rel_GV_Amina_to_Kenji_Boss_1')
!Rel_GV_Amina_to_Kenji_Boss_1.type := #BOSS
!insert (P_GV_Amina_1, Rel_GV_Amina_to_Kenji_Boss_1) into ContactToRelationship
!insert (Rel_GV_Amina_to_Kenji_Boss_1, P_GV_Kenji_1) into RelationshipToContact

!new Relationship('Rel_GV_Amina_to_Sofia_Boss_1')
!Rel_GV_Amina_to_Sofia_Boss_1.type := #BOSS
!insert (P_GV_Amina_1, Rel_GV_Amina_to_Sofia_Boss_1) into ContactToRelationship
!insert (Rel_GV_Amina_to_Sofia_Boss_1, P_GV_Sofia_1) into RelationshipToContact

!new Relationship('Rel_GV_Amina_to_Lars_Coworker_1')
!Rel_GV_Amina_to_Lars_Coworker_1.type := #COWORKER
!insert (P_GV_Amina_1, Rel_GV_Amina_to_Lars_Coworker_1) into ContactToRelationship
!insert (Rel_GV_Amina_to_Lars_Coworker_1, P_GV_Lars_1) into RelationshipToContact

!new Relationship('Rel_GV_Amina_to_NordicAS_Employee_1')
!Rel_GV_Amina_to_NordicAS_Employee_1.type := #EMPLOYEE
!insert (P_GV_Amina_1, Rel_GV_Amina_to_NordicAS_Employee_1) into ContactToRelationship
!insert (Rel_GV_Amina_to_NordicAS_Employee_1, C_GV_Nordic_AS_1) into RelationshipToContact

!new Relationship('Rel_GV_Kenji_to_Amina_Employee_1')
!Rel_GV_Kenji_to_Amina_Employee_1.type := #EMPLOYEE
!insert (P_GV_Kenji_1, Rel_GV_Kenji_to_Amina_Employee_1) into ContactToRelationship
!insert (Rel_GV_Kenji_to_Amina_Employee_1, P_GV_Amina_1) into RelationshipToContact

!new Relationship('Rel_GV_Kenji_to_NordicAS_Employee_1')
!Rel_GV_Kenji_to_NordicAS_Employee_1.type := #EMPLOYEE
!insert (P_GV_Kenji_1, Rel_GV_Kenji_to_NordicAS_Employee_1) into ContactToRelationship
!insert (Rel_GV_Kenji_to_NordicAS_Employee_1, C_GV_Nordic_AS_1) into RelationshipToContact

!new Relationship('Rel_GV_Kenji_to_Sofia_Coworker_1')
!Rel_GV_Kenji_to_Sofia_Coworker_1.type := #COWORKER
!insert (P_GV_Kenji_1, Rel_GV_Kenji_to_Sofia_Coworker_1) into ContactToRelationship
!insert (Rel_GV_Kenji_to_Sofia_Coworker_1, P_GV_Sofia_1) into RelationshipToContact

!new Relationship('Rel_GV_Kenji_to_Ravi_Coworker_1')
!Rel_GV_Kenji_to_Ravi_Coworker_1.type := #COWORKER
!insert (P_GV_Kenji_1, Rel_GV_Kenji_to_Ravi_Coworker_1) into ContactToRelationship
!insert (Rel_GV_Kenji_to_Ravi_Coworker_1, P_GV_Ravi_1) into RelationshipToContact

!new Relationship('Rel_GV_Sofia_to_Amina_Employee_1')
!Rel_GV_Sofia_to_Amina_Employee_1.type := #EMPLOYEE
!insert (P_GV_Sofia_1, Rel_GV_Sofia_to_Amina_Employee_1) into ContactToRelationship
!insert (Rel_GV_Sofia_to_Amina_Employee_1, P_GV_Amina_1) into RelationshipToContact

!new Relationship('Rel_GV_Sofia_to_NordicGmbH_Employee_1')
!Rel_GV_Sofia_to_NordicGmbH_Employee_1.type := #EMPLOYEE
!insert (P_GV_Sofia_1, Rel_GV_Sofia_to_NordicGmbH_Employee_1) into ContactToRelationship
!insert (Rel_GV_Sofia_to_NordicGmbH_Employee_1, C_GV_Nordic_GmbH_1) into RelationshipToContact

!new Relationship('Rel_GV_Sofia_to_Ravi_Boss_1')
!Rel_GV_Sofia_to_Ravi_Boss_1.type := #BOSS
!insert (P_GV_Sofia_1, Rel_GV_Sofia_to_Ravi_Boss_1) into ContactToRelationship
!insert (Rel_GV_Sofia_to_Ravi_Boss_1, P_GV_Ravi_1) into RelationshipToContact

!new Relationship('Rel_GV_Sofia_to_Kenji_Coworker_1')
!Rel_GV_Sofia_to_Kenji_Coworker_1.type := #COWORKER
!insert (P_GV_Sofia_1, Rel_GV_Sofia_to_Kenji_Coworker_1) into ContactToRelationship
!insert (Rel_GV_Sofia_to_Kenji_Coworker_1, P_GV_Kenji_1) into RelationshipToContact

!new Relationship('Rel_GV_Ravi_to_Sofia_Employee_1')
!Rel_GV_Ravi_to_Sofia_Employee_1.type := #EMPLOYEE
!insert (P_GV_Ravi_1, Rel_GV_Ravi_to_Sofia_Employee_1) into ContactToRelationship
!insert (Rel_GV_Ravi_to_Sofia_Employee_1, P_GV_Sofia_1) into RelationshipToContact

!new Relationship('Rel_GV_Ravi_to_Sahara_Employee_1')
!Rel_GV_Ravi_to_Sahara_Employee_1.type := #EMPLOYEE
!insert (P_GV_Ravi_1, Rel_GV_Ravi_to_Sahara_Employee_1) into ContactToRelationship
!insert (Rel_GV_Ravi_to_Sahara_Employee_1, C_GV_Sahara_SARL_1) into RelationshipToContact

!new Relationship('Rel_GV_Ravi_to_Kenji_Coworker_1')
!Rel_GV_Ravi_to_Kenji_Coworker_1.type := #COWORKER
!insert (P_GV_Ravi_1, Rel_GV_Ravi_to_Kenji_Coworker_1) into ContactToRelationship
!insert (Rel_GV_Ravi_to_Kenji_Coworker_1, P_GV_Kenji_1) into RelationshipToContact

!new Relationship('Rel_GV_Lars_to_Amina_Coworker_1')
!Rel_GV_Lars_to_Amina_Coworker_1.type := #COWORKER
!insert (P_GV_Lars_1, Rel_GV_Lars_to_Amina_Coworker_1) into ContactToRelationship
!insert (Rel_GV_Lars_to_Amina_Coworker_1, P_GV_Amina_1) into RelationshipToContact

!new Relationship('Rel_GV_Lars_to_Chiara_Boss_1')
!Rel_GV_Lars_to_Chiara_Boss_1.type := #BOSS
!insert (P_GV_Lars_1, Rel_GV_Lars_to_Chiara_Boss_1) into ContactToRelationship
!insert (Rel_GV_Lars_to_Chiara_Boss_1, P_GV_Chiara_1) into RelationshipToContact

!new Relationship('Rel_GV_Lars_to_NordicAS_Employee_1')
!Rel_GV_Lars_to_NordicAS_Employee_1.type := #EMPLOYEE
!insert (P_GV_Lars_1, Rel_GV_Lars_to_NordicAS_Employee_1) into ContactToRelationship
!insert (Rel_GV_Lars_to_NordicAS_Employee_1, C_GV_Nordic_AS_1) into RelationshipToContact

!new Relationship('Rel_GV_Chiara_to_Lars_Employee_1')
!Rel_GV_Chiara_to_Lars_Employee_1.type := #EMPLOYEE
!insert (P_GV_Chiara_1, Rel_GV_Chiara_to_Lars_Employee_1) into ContactToRelationship
!insert (Rel_GV_Chiara_to_Lars_Employee_1, P_GV_Lars_1) into RelationshipToContact

!new Relationship('Rel_GV_Chiara_to_NordicAS_Employee_1')
!Rel_GV_Chiara_to_NordicAS_Employee_1.type := #EMPLOYEE
!insert (P_GV_Chiara_1, Rel_GV_Chiara_to_NordicAS_Employee_1) into ContactToRelationship
!insert (Rel_GV_Chiara_to_NordicAS_Employee_1, C_GV_Nordic_AS_1) into RelationshipToContact

!new Relationship('Rel_GV_Chiara_to_Amina_Coworker_1')
!Rel_GV_Chiara_to_Amina_Coworker_1.type := #COWORKER
!insert (P_GV_Chiara_1, Rel_GV_Chiara_to_Amina_Coworker_1) into ContactToRelationship
!insert (Rel_GV_Chiara_to_Amina_Coworker_1, P_GV_Amina_1) into RelationshipToContact

!new Relationship('Rel_GV_Miyu_to_Kenji_Coworker_1')
!Rel_GV_Miyu_to_Kenji_Coworker_1.type := #COWORKER
!insert (P_GV_Miyu_1, Rel_GV_Miyu_to_Kenji_Coworker_1) into ContactToRelationship
!insert (Rel_GV_Miyu_to_Kenji_Coworker_1, P_GV_Kenji_1) into RelationshipToContact

!new Relationship('Rel_GV_Miyu_to_NordicAS_Employee_1')
!Rel_GV_Miyu_to_NordicAS_Employee_1.type := #EMPLOYEE
!insert (P_GV_Miyu_1, Rel_GV_Miyu_to_NordicAS_Employee_1) into ContactToRelationship
!insert (Rel_GV_Miyu_to_NordicAS_Employee_1, C_GV_Nordic_AS_1) into RelationshipToContact

!new Relationship('Rel_GV_NordicAS_to_NordicGmbH_Subdivision_1')
!Rel_GV_NordicAS_to_NordicGmbH_Subdivision_1.type := #SUBDIVISION
!insert (C_GV_Nordic_AS_1, Rel_GV_NordicAS_to_NordicGmbH_Subdivision_1) into ContactToRelationship
!insert (Rel_GV_NordicAS_to_NordicGmbH_Subdivision_1, C_GV_Nordic_GmbH_1) into RelationshipToContact

!new Relationship('Rel_GV_NordicAS_to_AndesSpA_Coworker_1')
!Rel_GV_NordicAS_to_AndesSpA_Coworker_1.type := #COWORKER
!insert (C_GV_Nordic_AS_1, Rel_GV_NordicAS_to_AndesSpA_Coworker_1) into ContactToRelationship
!insert (Rel_GV_NordicAS_to_AndesSpA_Coworker_1, C_GV_Andes_SpA_1) into RelationshipToContact

!new Relationship('Rel_GV_NordicGmbH_to_Sahara_Coworker_1')
!Rel_GV_NordicGmbH_to_Sahara_Coworker_1.type := #COWORKER
!insert (C_GV_Nordic_GmbH_1, Rel_GV_NordicGmbH_to_Sahara_Coworker_1) into ContactToRelationship
!insert (Rel_GV_NordicGmbH_to_Sahara_Coworker_1, C_GV_Sahara_SARL_1) into RelationshipToContact

!new Relationship('Rel_GV_NordicGmbH_to_AndesEU_Coworker_1')
!Rel_GV_NordicGmbH_to_AndesEU_Coworker_1.type := #COWORKER
!insert (C_GV_Nordic_GmbH_1, Rel_GV_NordicGmbH_to_AndesEU_Coworker_1) into ContactToRelationship
!insert (Rel_GV_NordicGmbH_to_AndesEU_Coworker_1, C_GV_Andes_Europe_SL_1) into RelationshipToContact

!new Relationship('Rel_GV_AndesSpA_to_AndesEU_Subdivision_1')
!Rel_GV_AndesSpA_to_AndesEU_Subdivision_1.type := #SUBDIVISION
!insert (C_GV_Andes_SpA_1, Rel_GV_AndesSpA_to_AndesEU_Subdivision_1) into ContactToRelationship
!insert (Rel_GV_AndesSpA_to_AndesEU_Subdivision_1, C_GV_Andes_Europe_SL_1) into RelationshipToContact

!new Relationship('Rel_GV_AndesSpA_to_NordicAS_Coworker_1')
!Rel_GV_AndesSpA_to_NordicAS_Coworker_1.type := #COWORKER
!insert (C_GV_Andes_SpA_1, Rel_GV_AndesSpA_to_NordicAS_Coworker_1) into ContactToRelationship
!insert (Rel_GV_AndesSpA_to_NordicAS_Coworker_1, C_GV_Nordic_AS_1) into RelationshipToContact

!new Relationship('Rel_GV_AndesSpA_to_Sahara_Coworker_1')
!Rel_GV_AndesSpA_to_Sahara_Coworker_1.type := #COWORKER
!insert (C_GV_Andes_SpA_1, Rel_GV_AndesSpA_to_Sahara_Coworker_1) into ContactToRelationship
!insert (Rel_GV_AndesSpA_to_Sahara_Coworker_1, C_GV_Sahara_SARL_1) into RelationshipToContact

!new Relationship('Rel_GV_AndesEU_to_NordicGmbH_Coworker_1')
!Rel_GV_AndesEU_to_NordicGmbH_Coworker_1.type := #COWORKER
!insert (C_GV_Andes_Europe_SL_1, Rel_GV_AndesEU_to_NordicGmbH_Coworker_1) into ContactToRelationship
!insert (Rel_GV_AndesEU_to_NordicGmbH_Coworker_1, C_GV_Nordic_GmbH_1) into RelationshipToContact

!new Relationship('Rel_GV_Sahara_to_NordicGmbH_Coworker_1')
!Rel_GV_Sahara_to_NordicGmbH_Coworker_1.type := #COWORKER
!insert (C_GV_Sahara_SARL_1, Rel_GV_Sahara_to_NordicGmbH_Coworker_1) into ContactToRelationship
!insert (Rel_GV_Sahara_to_NordicGmbH_Coworker_1, C_GV_Nordic_GmbH_1) into RelationshipToContact

!new Relationship('Rel_GV_Sahara_to_AndesSpA_Coworker_1')
!Rel_GV_Sahara_to_AndesSpA_Coworker_1.type := #COWORKER
!insert (C_GV_Sahara_SARL_1, Rel_GV_Sahara_to_AndesSpA_Coworker_1) into ContactToRelationship
!insert (Rel_GV_Sahara_to_AndesSpA_Coworker_1, C_GV_Andes_SpA_1) into RelationshipToContact
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 410 | 0.00% |
| Multiplicities Errors | 0 | 113 | 0.00% |
| Invariants Errors | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 12 | 0.00% |
| Websites | 0 | 12 | 0.00% |
| Emails | 0 | 12 | 0.00% |
| Addresses | 9 | 17 | 52.94% |

| Invalid Addresses | 
|---| 
```
Route de Tétouan, KM 12, Tangier
```
```
Shinjuku-dori, 3-14-7, Tokyo
```
```
El‑Corniche, 55, Alexandria
```
```
Boulevard Zerktouni, 17, Casablanca
```
```
MG Road, 44, Bengaluru
```
```
Av. Javier Prado, 2450, Lima
```
```
Tahrir Square, 12B, Cairo
```
```
Av. Providencia, 1860, Santiago
```
```
Umeda, 1-1-3, Osaka
```

## Category edge
```
!new AddressBook('AB_TransnationalOddities_1')

!new Person('P_C1_XAE12')
!P_C1_XAE12.name := 'X Æ A-12'
!P_C1_XAE12.phone := '+1-000-000-0000 ext. 0000'
!P_C1_XAE12.website := 'https://example.invalid/🚫'
!P_C1_XAE12.email := 'x@invalid'
!P_C1_XAE12.title := 'Mx.'
!insert (AB_TransnationalOddities_1, P_C1_XAE12) into AddressBookMadeOfContact

!new Company('C_C2_ADT')
!C_C2_ADT.name := 'Antarctic Data Trust (ADT)'
!C_C2_ADT.phone := '+672 1 2345'
!C_C2_ADT.website := 'https://adt.example.org'
!C_C2_ADT.email := 'ops@adt.example.org'
!C_C2_ADT.industry := 'Polar cloud hosting'
!insert (AB_TransnationalOddities_1, C_C2_ADT) into AddressBookMadeOfContact

!new Note('Note_C2_N1')
!Note_C2_N1.author := 'София'
!Note_C2_N1.time := Date('9999-12-31')
!Note_C2_N1.type := #EMAIL
!Note_C2_N1.comment := 'End-of-era contingency: rotate credentials after the “final audit”.'
!insert (C_C2_ADT, Note_C2_N1) into ContactContainsNote

!new Note('Note_C2_N2')
!Note_C2_N2.author := 'María-José'
!Note_C2_N2.time := Date('0001-01-01')
!Note_C2_N2.type := #MEETING
!Note_C2_N2.comment := 'Legacy record imported; original timestamp unknown, stored as earliest representable value.'
!insert (C_C2_ADT, Note_C2_N2) into ContactContainsNote

!new Address('Addr_C2_A1')
!Addr_C2_A1.city := 'McMurdo Station'
!Addr_C2_A1.houseNr := '0'
!Addr_C2_A1.street := 'Ice Runway Rd'
!insert (C_C2_ADT, Addr_C2_A1) into ContactContainsAddress

!new Address('Addr_C2_A2')
!Addr_C2_A2.city := 'Ushuaia'
!Addr_C2_A2.houseNr := 'S/N'
!Addr_C2_A2.street := 'Av. Maipú'
!insert (C_C2_ADT, Addr_C2_A2) into ContactContainsAddress

!new Company('C_C3_SVVL')
!C_C3_SVVL.name := 'Svalbard Seed Vault Logistics AS'
!C_C3_SVVL.phone := '+47 79 00 00 00'
!C_C3_SVVL.website := 'https://svvl.no'
!C_C3_SVVL.email := 'dispatch@svvl.no'
!C_C3_SVVL.industry := 'Cryogenic logistics'
!insert (AB_TransnationalOddities_1, C_C3_SVVL) into AddressBookMadeOfContact

!new Note('Note_C3_N1')
!Note_C3_N1.author := 'Nils'
!Note_C3_N1.time := Date('2038-01-19')
!Note_C3_N1.type := #CALL
!Note_C3_N1.comment := 'Confirmed shipment containers rated for −196°C; client asked for “extra cold”.'
!insert (C_C3_SVVL, Note_C3_N1) into ContactContainsNote

!new Address('Addr_C3_A1')
!Addr_C3_A1.city := 'Longyearbyen'
!Addr_C3_A1.houseNr := '12B'
!Addr_C3_A1.street := 'Vei 7'
!insert (C_C3_SVVL, Addr_C3_A1) into ContactContainsAddress

!new Person('P_C4_AminaKhalid')
!P_C4_AminaKhalid.name := 'د. أمينة بنت خالد (Dr. Amina bint Khalid)'
!P_C4_AminaKhalid.phone := '+971 2 555 0101'
!P_C4_AminaKhalid.website := 'https://aminakh.example.ae'
!P_C4_AminaKhalid.email := 'amina.khalid@example.ae'
!P_C4_AminaKhalid.title := 'Dr.'
!insert (AB_TransnationalOddities_1, P_C4_AminaKhalid) into AddressBookMadeOfContact

!new Note('Note_C4_N1')
!Note_C4_N1.author := 'Amina'
!Note_C4_N1.time := Date('2026-02-29')
!Note_C4_N1.type := #MEETING
!Note_C4_N1.comment := 'Met with remote operations; agreed on “no paper trail” protocol for sensitive routing.'
!insert (P_C4_AminaKhalid, Note_C4_N1) into ContactContainsNote

!new Note('Note_C4_N2')
!Note_C4_N2.author := '外部監査 (External Audit)'
!Note_C4_N2.time := Date('2025-11-30')
!Note_C4_N2.type := #EMAIL
!Note_C4_N2.comment := 'Audit memo: validate cross-organization relationship graph for recursion (cycles allowed, self-links forbidden).'
!insert (P_C4_AminaKhalid, Note_C4_N2) into ContactContainsNote

!new Address('Addr_C4_A1')
!Addr_C4_A1.city := 'Abu Dhabi'
!Addr_C4_A1.houseNr := 'Ⅻ'
!Addr_C4_A1.street := 'Corniche Rd'
!insert (P_C4_AminaKhalid, Addr_C4_A1) into ContactContainsAddress

!new Address('Addr_C4_A2')
!Addr_C4_A2.city := 'Reykjavík'
!Addr_C4_A2.houseNr := '-1'
!Addr_C4_A2.street := 'Laugavegur'
!insert (P_C4_AminaKhalid, Addr_C4_A2) into ContactContainsAddress

!new Relationship('Rel_C2_R1_Subdivision_1')
!Rel_C2_R1_Subdivision_1.type := #SUBDIVISION
!insert (C_C2_ADT, Rel_C2_R1_Subdivision_1) into ContactToRelationship
!insert (Rel_C2_R1_Subdivision_1, C_C3_SVVL) into RelationshipToContact

!new Relationship('Rel_C3_R1_Boss_1')
!Rel_C3_R1_Boss_1.type := #BOSS
!insert (C_C3_SVVL, Rel_C3_R1_Boss_1) into ContactToRelationship
!insert (Rel_C3_R1_Boss_1, P_C4_AminaKhalid) into RelationshipToContact

!new Relationship('Rel_C4_R1_Employee_1')
!Rel_C4_R1_Employee_1.type := #EMPLOYEE
!insert (P_C4_AminaKhalid, Rel_C4_R1_Employee_1) into ContactToRelationship
!insert (Rel_C4_R1_Employee_1, C_C2_ADT) into RelationshipToContact

!new Relationship('Rel_C4_R2_Coworker_1')
!Rel_C4_R2_Coworker_1.type := #COWORKER
!insert (P_C4_AminaKhalid, Rel_C4_R2_Coworker_1) into ContactToRelationship
!insert (Rel_C4_R2_Coworker_1, P_C1_XAE12) into RelationshipToContact
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 100 | 0.00% |
| Multiplicities Errors | 0 | 22 | 0.00% |
| Invariants Errors | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 1 | 4 | 25.00% |
| Websites | 1 | 4 | 25.00% |
| Emails | 1 | 4 | 25.00% |
| Addresses | 5 | 5 | 100.00% |

| Invalid Phones | 
|---| 
```
+1-000-000-0000 ext. 0000
```

| Invalid Websites | 
|---| 
```
https://example.invalid/🚫
```

| Invalid Emails | 
|---| 
```
x@invalid
```

| Invalid Addresses | 
|---| 
```
Av. Maipú, S/N, Ushuaia
```
```
Corniche Rd, Ⅻ, Abu Dhabi
```
```
Ice Runway Rd, 0, McMurdo Station
```
```
Vei 7, 12B, Longyearbyen
```
```
Laugavegur, -1, Reykjavík
```

## Category invalid
```
!new AddressBook('AB1_LinaOkafor_2')
!new AddressBook('AB2_SakuraCRM_2')

!new Person('P_Amina_AB1_2')
!P_Amina_AB1_2.name := 'Dr. Amina El‑Sayed'
!P_Amina_AB1_2.title := 'Dr.'
!P_Amina_AB1_2.phone := '+20 2 2794 6100'
!P_Amina_AB1_2.website := 'https://aminaelsayed.example.org'
!P_Amina_AB1_2.email := 'amina.el-sayed@example.org'
!insert (AB1_LinaOkafor_2, P_Amina_AB1_2) into AddressBookMadeOfContact

!new Person('P_KenjiSato_2')
!P_KenjiSato_2.name := 'Kenji Sato'
!P_KenjiSato_2.title := 'Mr.'
!P_KenjiSato_2.phone := '+81 3 4510 8821'
!P_KenjiSato_2.website := 'https://kenji-sato.example.jp'
!P_KenjiSato_2.email := 'kenji.sato@example.jp'
!insert (AB1_LinaOkafor_2, P_KenjiSato_2) into AddressBookMadeOfContact

!new Company('C_OficinaVerde_2')
!C_OficinaVerde_2.name := 'Oficina Verde Ltda.'
!C_OficinaVerde_2.industry := 'Sustainable architecture'
!C_OficinaVerde_2.phone := '+55 11 5083 2001'
!C_OficinaVerde_2.website := 'https://oficinaverde.example.br'
!C_OficinaVerde_2.email := 'contato@oficinaverde.example.br'
!insert (AB1_LinaOkafor_2, C_OficinaVerde_2) into AddressBookMadeOfContact

!new Company('C_SakuraRobotics_2')
!C_SakuraRobotics_2.name := 'Sakura Robotics Co., Ltd.'
!C_SakuraRobotics_2.industry := 'Industrial automation'
!C_SakuraRobotics_2.phone := '+81 3 6800 1122'
!C_SakuraRobotics_2.website := 'https://sakura-robotics.example.jp'
!C_SakuraRobotics_2.email := 'procurement@sakura-robotics.example.jp'
!insert (AB2_SakuraCRM_2, C_SakuraRobotics_2) into AddressBookMadeOfContact

!new Person('P_Amina_AB2_2')
!P_Amina_AB2_2.name := 'Dr. Amina El‑Sayed'
!P_Amina_AB2_2.title := 'Dr.'
!P_Amina_AB2_2.phone := '+20 2 2794 6100'
!P_Amina_AB2_2.website := 'https://aminaelsayed.example.org'
!P_Amina_AB2_2.email := 'amina.el-sayed@example.org'
!insert (AB2_SakuraCRM_2, P_Amina_AB2_2) into AddressBookMadeOfContact

!new Address('Addr_Amina_Cairo_2')
!Addr_Amina_Cairo_2.city := 'Cairo'
!Addr_Amina_Cairo_2.street := 'Al Mansour Mohamed St.'
!Addr_Amina_Cairo_2.houseNr := '14B'
!insert (P_Amina_AB1_2, Addr_Amina_Cairo_2) into ContactContainsAddress

!new Address('Addr_Amina_Tokyo_2')
!Addr_Amina_Tokyo_2.city := 'Tokyo'
!Addr_Amina_Tokyo_2.street := 'Chiyoda-dori'
!Addr_Amina_Tokyo_2.houseNr := '2-15'
!insert (P_Amina_AB1_2, Addr_Amina_Tokyo_2) into ContactContainsAddress

!new Address('Addr_Kenji_Tokyo_2')
!Addr_Kenji_Tokyo_2.city := 'Tokyo'
!Addr_Kenji_Tokyo_2.street := 'Chiyoda-dori'
!Addr_Kenji_Tokyo_2.houseNr := '2-15'
!insert (P_KenjiSato_2, Addr_Kenji_Tokyo_2) into ContactContainsAddress

!new Address('Addr_Sakura_Tokyo_2')
!Addr_Sakura_Tokyo_2.city := 'Tokyo'
!Addr_Sakura_Tokyo_2.street := 'Chiyoda-dori'
!Addr_Sakura_Tokyo_2.houseNr := '2-15'
!insert (C_SakuraRobotics_2, Addr_Sakura_Tokyo_2) into ContactContainsAddress

!new Address('Addr_Oficina_SaoPaulo_2')
!Addr_Oficina_SaoPaulo_2.city := 'São Paulo'
!Addr_Oficina_SaoPaulo_2.street := 'Av. Paulista'
!Addr_Oficina_SaoPaulo_2.houseNr := '1578'
!insert (C_OficinaVerde_2, Addr_Oficina_SaoPaulo_2) into ContactContainsAddress

!new Note('Note_Amina_Kickoff_2')
!Note_Amina_Kickoff_2.author := 'Lina Okafor'
!Note_Amina_Kickoff_2.time := Date('2026-02-10')
!Note_Amina_Kickoff_2.type := #MEETING
!Note_Amina_Kickoff_2.comment := 'Kickoff meeting at Sakura Robotics HQ with Dr. Amina El‑Sayed; discussed scope, timeline, and NDA.'
!insert (P_Amina_AB1_2, Note_Amina_Kickoff_2) into ContactContainsNote

!new Note('Note_Amina_RevisedSOW_2')
!Note_Amina_RevisedSOW_2.author := 'Lina Okafor'
!Note_Amina_RevisedSOW_2.time := Date('2026-02-12')
!Note_Amina_RevisedSOW_2.type := #EMAIL
!Note_Amina_RevisedSOW_2.comment := 'Sent Amina the revised statement of work; awaiting confirmation.'
!insert (P_Amina_AB1_2, Note_Amina_RevisedSOW_2) into ContactContainsNote

!new Note('Note_Kenji_Call_2')
!Note_Kenji_Call_2.author := 'Lina Okafor'
!Note_Kenji_Call_2.time := Date('2026-02-11')
!Note_Kenji_Call_2.type := #CALL
!Note_Kenji_Call_2.comment := 'Kenji confirmed lab access procedure and safety briefing requirements.'
!insert (P_KenjiSato_2, Note_Kenji_Call_2) into ContactContainsNote

!new Note('Note_Sakura_Kickoff_2')
!Note_Sakura_Kickoff_2.author := 'Lina Okafor'
!Note_Sakura_Kickoff_2.time := Date('2026-02-10')
!Note_Sakura_Kickoff_2.type := #MEETING
!Note_Sakura_Kickoff_2.comment := 'Kickoff meeting at Sakura Robotics HQ with Dr. Amina El‑Sayed; discussed scope, timeline, and NDA.'
!insert (C_SakuraRobotics_2, Note_Sakura_Kickoff_2) into ContactContainsNote

!new Relationship('Rel_Amina_to_Kenji_Coworker_2')
!Rel_Amina_to_Kenji_Coworker_2.type := #COWORKER
!insert (P_Amina_AB1_2, Rel_Amina_to_Kenji_Coworker_2) into ContactToRelationship
!insert (Rel_Amina_to_Kenji_Coworker_2, P_KenjiSato_2) into RelationshipToContact

!new Relationship('Rel_Amina_to_Sakura_Coworker_2')
!Rel_Amina_to_Sakura_Coworker_2.type := #COWORKER
!insert (P_Amina_AB1_2, Rel_Amina_to_Sakura_Coworker_2) into ContactToRelationship
!insert (Rel_Amina_to_Sakura_Coworker_2, C_SakuraRobotics_2) into RelationshipToContact

!new Relationship('Rel_Kenji_to_Sakura_Employee_2')
!Rel_Kenji_to_Sakura_Employee_2.type := #EMPLOYEE
!insert (P_KenjiSato_2, Rel_Kenji_to_Sakura_Employee_2) into ContactToRelationship
!insert (Rel_Kenji_to_Sakura_Employee_2, C_SakuraRobotics_2) into RelationshipToContact

!new Relationship('Rel_Kenji_to_Amina_Coworker_2')
!Rel_Kenji_to_Amina_Coworker_2.type := #COWORKER
!insert (P_KenjiSato_2, Rel_Kenji_to_Amina_Coworker_2) into ContactToRelationship
!insert (Rel_Kenji_to_Amina_Coworker_2, P_Amina_AB1_2) into RelationshipToContact

!new Relationship('Rel_Sakura_to_Kenji_Boss_2')
!Rel_Sakura_to_Kenji_Boss_2.type := #BOSS
!insert (C_SakuraRobotics_2, Rel_Sakura_to_Kenji_Boss_2) into ContactToRelationship
!insert (Rel_Sakura_to_Kenji_Boss_2, P_KenjiSato_2) into RelationshipToContact

!new Relationship('Rel_Sakura_to_Oficina_Subdivision_2')
!Rel_Sakura_to_Oficina_Subdivision_2.type := #SUBDIVISION
!insert (C_SakuraRobotics_2, Rel_Sakura_to_Oficina_Subdivision_2) into ContactToRelationship
!insert (Rel_Sakura_to_Oficina_Subdivision_2, C_OficinaVerde_2) into RelationshipToContact
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 26 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 5 | 0.00% |
| Websites | 0 | 5 | 0.00% |
| Emails | 0 | 5 | 0.00% |
| Addresses | 4 | 5 | 80.00% |

| Invalid Addresses | 
|---| 
```
Chiyoda-dori, 2-15, Tokyo
```
```
Al Mansour Mohamed St., 14B, Cairo
```
```
Chiyoda-dori, 2-15, Tokyo
```
```
Chiyoda-dori, 2-15, Tokyo
```

## Generation 1 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 747 | 0.00% |
| Multiplicities Errors | 0 | 165 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 26 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 2 | 27 | 7.41% |
| Websites | 2 | 27 | 7.41% |
| Emails | 2 | 27 | 7.41% |
| Addresses | 20 | 32 | 62.50% |

| Invalid Phones | 
|---| 
```

```
```
+1-000-000-0000 ext. 0000
```

| Invalid Websites | 
|---| 
```

```
```
https://example.invalid/🚫
```

| Invalid Emails | 
|---| 
```

```
```
x@invalid
```

| Invalid Addresses | 
|---| 
```
Chuo-dori, 5-14, Tokyo
```
```
Tahrir Square, 12B, Cairo
```
```
Route de Tétouan, KM 12, Tangier
```
```
Shinjuku-dori, 3-14-7, Tokyo
```
```
El‑Corniche, 55, Alexandria
```
```
Boulevard Zerktouni, 17, Casablanca
```
```
MG Road, 44, Bengaluru
```
```
Av. Javier Prado, 2450, Lima
```
```
Tahrir Square, 12B, Cairo
```
```
Av. Providencia, 1860, Santiago
```
```
Umeda, 1-1-3, Osaka
```
```
Av. Maipú, S/N, Ushuaia
```
```
Corniche Rd, Ⅻ, Abu Dhabi
```
```
Ice Runway Rd, 0, McMurdo Station
```
```
Vei 7, 12B, Longyearbyen
```
```
Laugavegur, -1, Reykjavík
```
```
Chiyoda-dori, 2-15, Tokyo
```
```
Al Mansour Mohamed St., 14B, Cairo
```
```
Chiyoda-dori, 2-15, Tokyo
```
```
Chiyoda-dori, 2-15, Tokyo
```

# Generation 2
## Category baseline
```
!new AddressBook('AB_RedwoodCommunity_1')

!new Person('P_Redwood_Priya_1')
!P_Redwood_Priya_1.name := 'Priya Nair'
!P_Redwood_Priya_1.phone := '+1 415 555 0134'
!P_Redwood_Priya_1.website := 'https://priyanair.example'
!P_Redwood_Priya_1.email := 'priya.nair@example.org'
!P_Redwood_Priya_1.title := 'Ms.'
!insert (AB_RedwoodCommunity_1, P_Redwood_Priya_1) into AddressBookMadeOfContact

!new Address('Addr_Redwood_Priya_SF_1')
!Addr_Redwood_Priya_SF_1.street := 'Market Street'
!Addr_Redwood_Priya_SF_1.houseNr := '1355'
!Addr_Redwood_Priya_SF_1.city := 'San Francisco'
!insert (P_Redwood_Priya_1, Addr_Redwood_Priya_SF_1) into ContactContainsAddress

!new Address('Addr_Redwood_Priya_PaloAlto_1')
!Addr_Redwood_Priya_PaloAlto_1.street := 'University Avenue'
!Addr_Redwood_Priya_PaloAlto_1.houseNr := '255'
!Addr_Redwood_Priya_PaloAlto_1.city := 'Palo Alto'
!insert (P_Redwood_Priya_1, Addr_Redwood_Priya_PaloAlto_1) into ContactContainsAddress

!new Note('Note_Redwood_Priya_1')
!Note_Redwood_Priya_1.author := 'Priya Nair'
!Note_Redwood_Priya_1.time := Date('2026-02-05')
!Note_Redwood_Priya_1.type := #MEETING
!Note_Redwood_Priya_1.comment := 'Kickoff meeting for the mobile outreach reporting workflow; assigned João to data intake coordination.'
!insert (P_Redwood_Priya_1, Note_Redwood_Priya_1) into ContactContainsNote

!new Person('P_Redwood_Joao_1')
!P_Redwood_Joao_1.name := 'João Carvalho'
!P_Redwood_Joao_1.phone := '+351 21 555 0909'
!P_Redwood_Joao_1.website := 'https://joaocarvalho.example'
!P_Redwood_Joao_1.email := 'joao.carvalho@example.pt'
!P_Redwood_Joao_1.title := 'Sr.'
!insert (AB_RedwoodCommunity_1, P_Redwood_Joao_1) into AddressBookMadeOfContact

!new Note('Note_Redwood_Joao_1')
!Note_Redwood_Joao_1.author := 'Dr. Laila Haddad'
!Note_Redwood_Joao_1.time := Date('2026-02-08')
!Note_Redwood_Joao_1.type := #CALL
!Note_Redwood_Joao_1.comment := 'Called João to clarify field-device sync times; agreed on a 18:00 local cutoff.'
!insert (P_Redwood_Joao_1, Note_Redwood_Joao_1) into ContactContainsNote

!new Note('Note_Redwood_Joao_2')
!Note_Redwood_Joao_2.author := 'João Carvalho'
!Note_Redwood_Joao_2.time := Date('2026-02-11')
!Note_Redwood_Joao_2.type := #EMAIL
!Note_Redwood_Joao_2.comment := 'Emailed Nimbus Freight to confirm cold-chain delivery windows for outreach supplies.'
!insert (P_Redwood_Joao_1, Note_Redwood_Joao_2) into ContactContainsNote

!new Person('P_Redwood_Laila_1')
!P_Redwood_Laila_1.name := 'Laila Haddad'
!P_Redwood_Laila_1.phone := '+971 4 555 7711'
!P_Redwood_Laila_1.website := 'https://lailahaddad.example'
!P_Redwood_Laila_1.email := 'laila.haddad@example.ae'
!P_Redwood_Laila_1.title := 'Dr.'
!insert (AB_RedwoodCommunity_1, P_Redwood_Laila_1) into AddressBookMadeOfContact

!new Address('Addr_Redwood_Laila_Dubai_1')
!Addr_Redwood_Laila_Dubai_1.street := 'Al Wasl Road'
!Addr_Redwood_Laila_Dubai_1.houseNr := '77'
!Addr_Redwood_Laila_Dubai_1.city := 'Dubai'
!insert (P_Redwood_Laila_1, Addr_Redwood_Laila_Dubai_1) into ContactContainsAddress

!new Note('Note_Redwood_Laila_1')
!Note_Redwood_Laila_1.author := 'Priya Nair'
!Note_Redwood_Laila_1.time := Date('2026-02-14')
!Note_Redwood_Laila_1.type := #MEETING
!Note_Redwood_Laila_1.comment := 'Reviewed Laila’s draft clinic KPI definitions; aligned metrics with outreach unit reporting needs.'
!insert (P_Redwood_Laila_1, Note_Redwood_Laila_1) into ContactContainsNote

!new Company('C_Redwood_Clinic_1')
!C_Redwood_Clinic_1.name := 'Redwood Community Clinic'
!C_Redwood_Clinic_1.phone := '+1 650 555 4400'
!C_Redwood_Clinic_1.website := 'https://redwoodclinic.example'
!C_Redwood_Clinic_1.email := 'info@redwoodclinic.example'
!C_Redwood_Clinic_1.industry := 'Nonprofit primary healthcare'
!insert (AB_RedwoodCommunity_1, C_Redwood_Clinic_1) into AddressBookMadeOfContact

!new Address('Addr_Redwood_Clinic_RC_1')
!Addr_Redwood_Clinic_RC_1.street := 'El Camino Real'
!Addr_Redwood_Clinic_RC_1.houseNr := '900'
!Addr_Redwood_Clinic_RC_1.city := 'Redwood City'
!insert (C_Redwood_Clinic_1, Addr_Redwood_Clinic_RC_1) into ContactContainsAddress

!new Note('Note_Redwood_Clinic_1')
!Note_Redwood_Clinic_1.author := 'Clinic Operations'
!Note_Redwood_Clinic_1.time := Date('2026-01-28')
!Note_Redwood_Clinic_1.type := #EMAIL
!Note_Redwood_Clinic_1.comment := 'Shared updated compliance checklist for mobile outreach data handling.'
!insert (C_Redwood_Clinic_1, Note_Redwood_Clinic_1) into ContactContainsNote

!new Company('C_Redwood_Outreach_1')
!C_Redwood_Outreach_1.name := 'Redwood Community Clinic – Outreach Unit'
!C_Redwood_Outreach_1.phone := '+1 650 555 4415'
!C_Redwood_Outreach_1.website := 'https://redwoodclinic.example/outreach'
!C_Redwood_Outreach_1.email := 'outreach@redwoodclinic.example'
!C_Redwood_Outreach_1.industry := 'Mobile healthcare services'
!insert (AB_RedwoodCommunity_1, C_Redwood_Outreach_1) into AddressBookMadeOfContact

!new Address('Addr_Redwood_Outreach_MenloPark_1')
!Addr_Redwood_Outreach_MenloPark_1.street := 'Bay Road'
!Addr_Redwood_Outreach_MenloPark_1.houseNr := '320'
!Addr_Redwood_Outreach_MenloPark_1.city := 'Menlo Park'
!insert (C_Redwood_Outreach_1, Addr_Redwood_Outreach_MenloPark_1) into ContactContainsAddress

!new Address('Addr_Redwood_Outreach_SanCarlos_1')
!Addr_Redwood_Outreach_SanCarlos_1.street := 'Industrial Way'
!Addr_Redwood_Outreach_SanCarlos_1.houseNr := '18'
!Addr_Redwood_Outreach_SanCarlos_1.city := 'San Carlos'
!insert (C_Redwood_Outreach_1, Addr_Redwood_Outreach_SanCarlos_1) into ContactContainsAddress

!new Company('C_Redwood_Nimbus_1')
!C_Redwood_Nimbus_1.name := 'Nimbus Freight Sp. z o.o.'
!C_Redwood_Nimbus_1.phone := '+48 58 555 1212'
!C_Redwood_Nimbus_1.website := 'https://nimbusfreight.example'
!C_Redwood_Nimbus_1.email := 'dispatch@nimbusfreight.example'
!C_Redwood_Nimbus_1.industry := 'Logistics and cold-chain transport'
!insert (AB_RedwoodCommunity_1, C_Redwood_Nimbus_1) into AddressBookMadeOfContact

!new Address('Addr_Redwood_Nimbus_Gdansk_1')
!Addr_Redwood_Nimbus_Gdansk_1.street := 'ul. Długa'
!Addr_Redwood_Nimbus_Gdansk_1.houseNr := '19'
!Addr_Redwood_Nimbus_Gdansk_1.city := 'Gdańsk'
!insert (C_Redwood_Nimbus_1, Addr_Redwood_Nimbus_Gdansk_1) into ContactContainsAddress

!new Note('Note_Redwood_Nimbus_1')
!Note_Redwood_Nimbus_1.author := 'João Carvalho'
!Note_Redwood_Nimbus_1.time := Date('2026-02-12')
!Note_Redwood_Nimbus_1.type := #CALL
!Note_Redwood_Nimbus_1.comment := 'Confirmed weekend delivery option for vaccine coolers; driver requires 24h notice.'
!insert (C_Redwood_Nimbus_1, Note_Redwood_Nimbus_1) into ContactContainsNote

!new Relationship('Rel_Redwood_Priya_to_Joao_Boss_1')
!Rel_Redwood_Priya_to_Joao_Boss_1.type := #BOSS
!insert (P_Redwood_Priya_1, Rel_Redwood_Priya_to_Joao_Boss_1) into ContactToRelationship
!insert (Rel_Redwood_Priya_to_Joao_Boss_1, P_Redwood_Joao_1) into RelationshipToContact

!new Relationship('Rel_Redwood_Priya_to_Laila_Coworker_1')
!Rel_Redwood_Priya_to_Laila_Coworker_1.type := #COWORKER
!insert (P_Redwood_Priya_1, Rel_Redwood_Priya_to_Laila_Coworker_1) into ContactToRelationship
!insert (Rel_Redwood_Priya_to_Laila_Coworker_1, P_Redwood_Laila_1) into RelationshipToContact

!new Relationship('Rel_Redwood_Joao_to_Priya_Employee_1')
!Rel_Redwood_Joao_to_Priya_Employee_1.type := #EMPLOYEE
!insert (P_Redwood_Joao_1, Rel_Redwood_Joao_to_Priya_Employee_1) into ContactToRelationship
!insert (Rel_Redwood_Joao_to_Priya_Employee_1, P_Redwood_Priya_1) into RelationshipToContact

!new Relationship('Rel_Redwood_Joao_to_Laila_Coworker_1')
!Rel_Redwood_Joao_to_Laila_Coworker_1.type := #COWORKER
!insert (P_Redwood_Joao_1, Rel_Redwood_Joao_to_Laila_Coworker_1) into ContactToRelationship
!insert (Rel_Redwood_Joao_to_Laila_Coworker_1, P_Redwood_Laila_1) into RelationshipToContact

!new Relationship('Rel_Redwood_Laila_to_Outreach_Employee_1')
!Rel_Redwood_Laila_to_Outreach_Employee_1.type := #EMPLOYEE
!insert (P_Redwood_Laila_1, Rel_Redwood_Laila_to_Outreach_Employee_1) into ContactToRelationship
!insert (Rel_Redwood_Laila_to_Outreach_Employee_1, C_Redwood_Outreach_1) into RelationshipToContact

!new Relationship('Rel_Redwood_Clinic_to_Outreach_Subdivision_1')
!Rel_Redwood_Clinic_to_Outreach_Subdivision_1.type := #SUBDIVISION
!insert (C_Redwood_Clinic_1, Rel_Redwood_Clinic_to_Outreach_Subdivision_1) into ContactToRelationship
!insert (Rel_Redwood_Clinic_to_Outreach_Subdivision_1, C_Redwood_Outreach_1) into RelationshipToContact

!new Relationship('Rel_Redwood_Outreach_to_Laila_Boss_1')
!Rel_Redwood_Outreach_to_Laila_Boss_1.type := #BOSS
!insert (C_Redwood_Outreach_1, Rel_Redwood_Outreach_to_Laila_Boss_1) into ContactToRelationship
!insert (Rel_Redwood_Outreach_to_Laila_Boss_1, P_Redwood_Laila_1) into RelationshipToContact
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 142 | 0.00% |
| Multiplicities Errors | 0 | 33 | 0.00% |
| Invariants Errors | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 6 | 0.00% |
| Websites | 0 | 6 | 0.00% |
| Emails | 0 | 6 | 0.00% |
| Addresses | 3 | 7 | 42.86% |

| Invalid Addresses | 
|---| 
```
Industrial Way, 18, San Carlos
```
```
Al Wasl Road, 77, Dubai
```
```
ul. Długa, 19, Gdańsk
```

## Category boundary
```
!new AddressBook('AB_0Contacts_TehranTrip')
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 1 | 0.00% |
| Multiplicities Errors | 0 | 0 | 0.00% |
| Invariants Errors | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 0 | 0.00% |
| Websites | 0 | 0 | 0.00% |
| Emails | 0 | 0 | 0.00% |
| Addresses | 0 | 0 | 0.00% |

## Category complex
```
!new AddressBook('AB_HarborlightFF_Ops2026_2')

!new Person('P_HF2_Hanae_1')
!P_HF2_Hanae_1.name := 'Hanae Watanabe'
!P_HF2_Hanae_1.title := 'Ms.'
!P_HF2_Hanae_1.phone := '+81 90-4412-7781'
!P_HF2_Hanae_1.website := 'https://hanae-watanabe.example.jp'
!P_HF2_Hanae_1.email := 'hanae.watanabe@example.jp'
!insert (AB_HarborlightFF_Ops2026_2, P_HF2_Hanae_1) into AddressBookMadeOfContact

!new Address('Addr_HF2_Hanae_Yokohama_1')
!Addr_HF2_Hanae_Yokohama_1.city := 'Yokohama'
!Addr_HF2_Hanae_Yokohama_1.street := 'Minato Mirai'
!Addr_HF2_Hanae_Yokohama_1.houseNr := '2-3-5'
!insert (P_HF2_Hanae_1, Addr_HF2_Hanae_Yokohama_1) into ContactContainsAddress

!new Note('Note_HF2_Hanae_1')
!Note_HF2_Hanae_1.author := 'Hanae Watanabe'
!Note_HF2_Hanae_1.time := Date('2026-02-14')
!Note_HF2_Hanae_1.type := #MEETING
!Note_HF2_Hanae_1.comment := 'Confirmed final shortlist for opening night; waiting on subtitle delivery for two titles.'
!insert (P_HF2_Hanae_1, Note_HF2_Hanae_1) into ContactContainsNote

!new Note('Note_HF2_Hanae_2')
!Note_HF2_Hanae_2.author := 'Élodie Martin'
!Note_HF2_Hanae_2.time := Date('2026-02-18')
!Note_HF2_Hanae_2.type := #EMAIL
!Note_HF2_Hanae_2.comment := 'Ticketing platform can support Japanese + English UI; need sponsor pass rules by March 1.'
!insert (P_HF2_Hanae_1, Note_HF2_Hanae_2) into ContactContainsNote

!new Person('P_HF2_Luis_1')
!P_HF2_Luis_1.name := 'Luis Herrera'
!P_HF2_Luis_1.title := 'Mr.'
!P_HF2_Luis_1.phone := '+52 55 9012 3344'
!P_HF2_Luis_1.website := 'https://luis-herrera.example.mx'
!P_HF2_Luis_1.email := 'luis.herrera@example.mx'
!insert (AB_HarborlightFF_Ops2026_2, P_HF2_Luis_1) into AddressBookMadeOfContact

!new Address('Addr_HF2_Luis_CDMX_1')
!Addr_HF2_Luis_CDMX_1.city := 'Ciudad de México'
!Addr_HF2_Luis_CDMX_1.street := 'Av. Insurgentes Sur'
!Addr_HF2_Luis_CDMX_1.houseNr := '1457'
!insert (P_HF2_Luis_1, Addr_HF2_Luis_CDMX_1) into ContactContainsAddress

!new Note('Note_HF2_Luis_1')
!Note_HF2_Luis_1.author := 'Luis Herrera'
!Note_HF2_Luis_1.time := Date('2026-01-27')
!Note_HF2_Luis_1.type := #CALL
!Note_HF2_Luis_1.comment := 'Spoke with cinematography jury candidate; availability depends on visa processing time.'
!insert (P_HF2_Luis_1, Note_HF2_Luis_1) into ContactContainsNote

!new Note('Note_HF2_Luis_2')
!Note_HF2_Luis_2.author := 'Hanae Watanabe'
!Note_HF2_Luis_2.time := Date('2026-02-12')
!Note_HF2_Luis_2.type := #EMAIL
!Note_HF2_Luis_2.comment := 'Please lock program grid before marketing print deadline; prioritize local premieres.'
!insert (P_HF2_Luis_1, Note_HF2_Luis_2) into ContactContainsNote

!new Person('P_HF2_Mereana_1')
!P_HF2_Mereana_1.name := 'Mereana Ngata'
!P_HF2_Mereana_1.title := 'Ms.'
!P_HF2_Mereana_1.phone := '+64 21 889 040'
!P_HF2_Mereana_1.website := 'https://mereana-ngata.example.nz'
!P_HF2_Mereana_1.email := 'mereana.ngata@example.nz'
!insert (AB_HarborlightFF_Ops2026_2, P_HF2_Mereana_1) into AddressBookMadeOfContact

!new Address('Addr_HF2_Mereana_Wellington_1')
!Addr_HF2_Mereana_Wellington_1.city := 'Wellington'
!Addr_HF2_Mereana_Wellington_1.street := 'Taranaki Street'
!Addr_HF2_Mereana_Wellington_1.houseNr := '77'
!insert (P_HF2_Mereana_1, Addr_HF2_Mereana_Wellington_1) into ContactContainsAddress

!new Person('P_HF2_Samira_1')
!P_HF2_Samira_1.name := 'Samira El‑Haddad'
!P_HF2_Samira_1.title := 'Dr.'
!P_HF2_Samira_1.phone := '+212 661-902-118'
!P_HF2_Samira_1.website := 'https://samira-elhaddad.example.ma'
!P_HF2_Samira_1.email := 'samira.elhaddad@example.ma'
!insert (AB_HarborlightFF_Ops2026_2, P_HF2_Samira_1) into AddressBookMadeOfContact

!new Address('Addr_HF2_Samira_Rabat_1')
!Addr_HF2_Samira_Rabat_1.city := 'Rabat'
!Addr_HF2_Samira_Rabat_1.street := 'Avenue Mohammed V'
!Addr_HF2_Samira_Rabat_1.houseNr := '31'
!insert (P_HF2_Samira_1, Addr_HF2_Samira_Rabat_1) into ContactContainsAddress

!new Note('Note_HF2_Samira_1')
!Note_HF2_Samira_1.author := 'Samira El‑Haddad'
!Note_HF2_Samira_1.time := Date('2026-02-06')
!Note_HF2_Samira_1.type := #MEETING
!Note_HF2_Samira_1.comment := 'Accessibility walkthrough: recommend caption device rental and wheelchair seating map updates.'
!insert (P_HF2_Samira_1, Note_HF2_Samira_1) into ContactContainsNote

!new Note('Note_HF2_Samira_2')
!Note_HF2_Samira_2.author := 'Talia Cohen'
!Note_HF2_Samira_2.time := Date('2026-02-20')
!Note_HF2_Samira_2.type := #EMAIL
!Note_HF2_Samira_2.comment := 'Sponsor lounge requires quiet interpretation corner; please advise equipment needs.'
!insert (P_HF2_Samira_1, Note_HF2_Samira_2) into ContactContainsNote

!new Person('P_HF2_Talia_1')
!P_HF2_Talia_1.name := 'Talia Cohen'
!P_HF2_Talia_1.title := 'Ms.'
!P_HF2_Talia_1.phone := '+972 54-778-1109'
!P_HF2_Talia_1.website := 'https://talia-cohen.example.il'
!P_HF2_Talia_1.email := 'talia.cohen@example.il'
!insert (AB_HarborlightFF_Ops2026_2, P_HF2_Talia_1) into AddressBookMadeOfContact

!new Address('Addr_HF2_Talia_TelAviv_1')
!Addr_HF2_Talia_TelAviv_1.city := 'Tel Aviv'
!Addr_HF2_Talia_TelAviv_1.street := 'Rothschild Boulevard'
!Addr_HF2_Talia_TelAviv_1.houseNr := '48'
!insert (P_HF2_Talia_1, Addr_HF2_Talia_TelAviv_1) into ContactContainsAddress

!new Address('Addr_HF2_Talia_Haifa_1')
!Addr_HF2_Talia_Haifa_1.city := 'Haifa'
!Addr_HF2_Talia_Haifa_1.street := 'Yefe Nof'
!Addr_HF2_Talia_Haifa_1.houseNr := '12'
!insert (P_HF2_Talia_1, Addr_HF2_Talia_Haifa_1) into ContactContainsAddress

!new Note('Note_HF2_Talia_1')
!Note_HF2_Talia_1.author := 'Talia Cohen'
!Note_HF2_Talia_1.time := Date('2026-01-31')
!Note_HF2_Talia_1.type := #CALL
!Note_HF2_Talia_1.comment := 'Sponsor lead wants logo placement on tickets + opening night backdrop; pending pricing confirmation.'
!insert (P_HF2_Talia_1, Note_HF2_Talia_1) into ContactContainsNote

!new Note('Note_HF2_Talia_2')
!Note_HF2_Talia_2.author := 'Élodie Martin'
!Note_HF2_Talia_2.time := Date('2026-02-19')
!Note_HF2_Talia_2.type := #EMAIL
!Note_HF2_Talia_2.comment := 'CloudKiosk can add sponsor promo codes; needs approval list and expiry rules.'
!insert (P_HF2_Talia_1, Note_HF2_Talia_2) into ContactContainsNote

!new Person('P_HF2_Elodie_1')
!P_HF2_Elodie_1.name := 'Élodie Martin'
!P_HF2_Elodie_1.title := 'Ms.'
!P_HF2_Elodie_1.phone := '+33 1 84 88 02 11'
!P_HF2_Elodie_1.website := 'https://elodie-martin.example.fr'
!P_HF2_Elodie_1.email := 'elodie.martin@example.fr'
!insert (AB_HarborlightFF_Ops2026_2, P_HF2_Elodie_1) into AddressBookMadeOfContact

!new Address('Addr_HF2_Elodie_Paris_1')
!Addr_HF2_Elodie_Paris_1.city := 'Paris'
!Addr_HF2_Elodie_Paris_1.street := 'Rue de Rivoli'
!Addr_HF2_Elodie_Paris_1.houseNr := '99'
!insert (P_HF2_Elodie_1, Addr_HF2_Elodie_Paris_1) into ContactContainsAddress

!new Note('Note_HF2_Elodie_1')
!Note_HF2_Elodie_1.author := 'Élodie Martin'
!Note_HF2_Elodie_1.time := Date('2026-02-15')
!Note_HF2_Elodie_1.type := #EMAIL
!Note_HF2_Elodie_1.comment := 'Created staging environment for ticket scans; requested venue Wi‑Fi specs and offline mode requirements.'
!insert (P_HF2_Elodie_1, Note_HF2_Elodie_1) into ContactContainsNote

!new Company('C_HF2_Foundation_1')
!C_HF2_Foundation_1.name := 'Harborlight Arts Foundation'
!C_HF2_Foundation_1.industry := 'Nonprofit Arts & Cultural Grants'
!C_HF2_Foundation_1.phone := '+1 604-555-0198'
!C_HF2_Foundation_1.website := 'https://harborlightarts.example.org'
!C_HF2_Foundation_1.email := 'office@harborlightarts.example.org'
!insert (AB_HarborlightFF_Ops2026_2, C_HF2_Foundation_1) into AddressBookMadeOfContact

!new Address('Addr_HF2_Foundation_Vancouver_1')
!Addr_HF2_Foundation_Vancouver_1.city := 'Vancouver'
!Addr_HF2_Foundation_Vancouver_1.street := 'Granville Street'
!Addr_HF2_Foundation_Vancouver_1.houseNr := '801'
!insert (C_HF2_Foundation_1, Addr_HF2_Foundation_Vancouver_1) into ContactContainsAddress

!new Note('Note_HF2_Foundation_1')
!Note_HF2_Foundation_1.author := 'Finance Committee'
!Note_HF2_Foundation_1.time := Date('2026-02-04')
!Note_HF2_Foundation_1.type := #MEETING
!Note_HF2_Foundation_1.comment := 'Approved AV and ticketing budgets; catering cap increased due to dietary compliance requirements.'
!insert (C_HF2_Foundation_1, Note_HF2_Foundation_1) into ContactContainsNote

!new Company('C_HF2_OpsLtd_1')
!C_HF2_OpsLtd_1.name := 'Harborlight Film Festival Operations Ltd.'
!C_HF2_OpsLtd_1.industry := 'Event Production & Festival Operations'
!C_HF2_OpsLtd_1.phone := '+1 604-555-0142'
!C_HF2_OpsLtd_1.website := 'https://hlff-ops.example.com'
!C_HF2_OpsLtd_1.email := 'ops@hlff-ops.example.com'
!insert (AB_HarborlightFF_Ops2026_2, C_HF2_OpsLtd_1) into AddressBookMadeOfContact

!new Address('Addr_HF2_OpsLtd_Vancouver_1')
!Addr_HF2_OpsLtd_Vancouver_1.city := 'Vancouver'
!Addr_HF2_OpsLtd_Vancouver_1.street := 'West Hastings Street'
!Addr_HF2_OpsLtd_Vancouver_1.houseNr := '410'
!insert (C_HF2_OpsLtd_1, Addr_HF2_OpsLtd_Vancouver_1) into ContactContainsAddress

!new Company('C_HF2_LuzSonido_1')
!C_HF2_LuzSonido_1.name := 'LuzSonido Ltda.'
!C_HF2_LuzSonido_1.industry := 'Audiovisual Rental & Live Event Engineering'
!C_HF2_LuzSonido_1.phone := '+56 2 2599 7000'
!C_HF2_LuzSonido_1.website := 'https://luzsonido.example.cl'
!C_HF2_LuzSonido_1.email := 'proyectos@luzsonido.example.cl'
!insert (AB_HarborlightFF_Ops2026_2, C_HF2_LuzSonido_1) into AddressBookMadeOfContact

!new Address('Addr_HF2_LuzSonido_Santiago_1')
!Addr_HF2_LuzSonido_Santiago_1.city := 'Santiago'
!Addr_HF2_LuzSonido_Santiago_1.street := 'Av. Libertador Bernardo O’Higgins'
!Addr_HF2_LuzSonido_Santiago_1.houseNr := '1449'
!insert (C_HF2_LuzSonido_1, Addr_HF2_LuzSonido_Santiago_1) into ContactContainsAddress

!new Note('Note_HF2_LuzSonido_1')
!Note_HF2_LuzSonido_1.author := 'Project Desk'
!Note_HF2_LuzSonido_1.time := Date('2026-02-09')
!Note_HF2_LuzSonido_1.type := #EMAIL
!Note_HF2_LuzSonido_1.comment := 'Quoted two projector options; requires ceiling height and throw distance to finalize lens selection.'
!insert (C_HF2_LuzSonido_1, Note_HF2_LuzSonido_1) into ContactContainsNote

!new Note('Note_HF2_LuzSonido_2')
!Note_HF2_LuzSonido_2.author := 'Samira El‑Haddad'
!Note_HF2_LuzSonido_2.time := Date('2026-02-16')
!Note_HF2_LuzSonido_2.type := #CALL
!Note_HF2_LuzSonido_2.comment := 'Requested caption display integration path for accessible screenings; vendor to provide cabling diagram.'
!insert (C_HF2_LuzSonido_1, Note_HF2_LuzSonido_2) into ContactContainsNote

!new Company('C_HF2_Kintsugi_1')
!C_HF2_Kintsugi_1.name := 'Kintsugi Catering Co.'
!C_HF2_Kintsugi_1.industry := 'Catering & Hospitality (Dietary-Specialized)'
!C_HF2_Kintsugi_1.phone := '+81 6-6231-9080'
!C_HF2_Kintsugi_1.website := 'https://kintsugi-catering.example.jp'
!C_HF2_Kintsugi_1.email := 'events@kintsugi-catering.example.jp'
!insert (AB_HarborlightFF_Ops2026_2, C_HF2_Kintsugi_1) into AddressBookMadeOfContact

!new Address('Addr_HF2_Kintsugi_Osaka_1')
!Addr_HF2_Kintsugi_Osaka_1.city := 'Osaka'
!Addr_HF2_Kintsugi_Osaka_1.street := 'Dōtonbori'
!Addr_HF2_Kintsugi_Osaka_1.houseNr := '5-6'
!insert (C_HF2_Kintsugi_1, Addr_HF2_Kintsugi_Osaka_1) into ContactContainsAddress

!new Note('Note_HF2_Kintsugi_1')
!Note_HF2_Kintsugi_1.author := 'Kintsugi Sales'
!Note_HF2_Kintsugi_1.time := Date('2026-02-07')
!Note_HF2_Kintsugi_1.type := #EMAIL
!Note_HF2_Kintsugi_1.comment := 'Can support halal/vegetarian/gluten-free reception menu; requested headcount split and service window.'
!insert (C_HF2_Kintsugi_1, Note_HF2_Kintsugi_1) into ContactContainsNote

!new Company('C_HF2_CloudKiosk_SAS_1')
!C_HF2_CloudKiosk_SAS_1.name := 'CloudKiosk SAS'
!C_HF2_CloudKiosk_SAS_1.industry := 'Ticketing & Venue Access Software'
!C_HF2_CloudKiosk_SAS_1.phone := '+33 4 72 55 10 10'
!C_HF2_CloudKiosk_SAS_1.website := 'https://cloudkiosk.example.com'
!C_HF2_CloudKiosk_SAS_1.email := 'support@cloudkiosk.example.com'
!insert (AB_HarborlightFF_Ops2026_2, C_HF2_CloudKiosk_SAS_1) into AddressBookMadeOfContact

!new Address('Addr_HF2_CloudKiosk_Lyon_1')
!Addr_HF2_CloudKiosk_Lyon_1.city := 'Lyon'
!Addr_HF2_CloudKiosk_Lyon_1.street := 'Rue de la République'
!Addr_HF2_CloudKiosk_Lyon_1.houseNr := '22'
!insert (C_HF2_CloudKiosk_SAS_1, Addr_HF2_CloudKiosk_Lyon_1) into ContactContainsAddress

!new Note('Note_HF2_CloudKiosk_SAS_1')
!Note_HF2_CloudKiosk_SAS_1.author := 'CloudKiosk Support'
!Note_HF2_CloudKiosk_SAS_1.time := Date('2026-02-10')
!Note_HF2_CloudKiosk_SAS_1.type := #CALL
!Note_HF2_CloudKiosk_SAS_1.comment := 'Advised to preload offline QR whitelist for venues with poor connectivity; will provide playbook.'
!insert (C_HF2_CloudKiosk_SAS_1, Note_HF2_CloudKiosk_SAS_1) into ContactContainsNote

!new Company('C_HF2_CloudKiosk_QC_1')
!C_HF2_CloudKiosk_QC_1.name := 'CloudKiosk Québec Inc.'
!C_HF2_CloudKiosk_QC_1.industry := 'Ticketing (North America Regional Operations)'
!C_HF2_CloudKiosk_QC_1.phone := '+1 418-555-0120'
!C_HF2_CloudKiosk_QC_1.website := 'https://qc.cloudkiosk.example.com'
!C_HF2_CloudKiosk_QC_1.email := 'qc-ops@cloudkiosk.example.com'
!insert (AB_HarborlightFF_Ops2026_2, C_HF2_CloudKiosk_QC_1) into AddressBookMadeOfContact

!new Address('Addr_HF2_CloudKioskQC_QuebecCity_1')
!Addr_HF2_CloudKioskQC_QuebecCity_1.city := 'Québec City'
!Addr_HF2_CloudKioskQC_QuebecCity_1.street := 'Rue Saint-Jean'
!Addr_HF2_CloudKioskQC_QuebecCity_1.houseNr := '310'
!insert (C_HF2_CloudKiosk_QC_1, Addr_HF2_CloudKioskQC_QuebecCity_1) into ContactContainsAddress

!new Relationship('Rel_HF2_Hanae_to_Luis_Boss_1')
!Rel_HF2_Hanae_to_Luis_Boss_1.type := #BOSS
!insert (P_HF2_Hanae_1, Rel_HF2_Hanae_to_Luis_Boss_1) into ContactToRelationship
!insert (Rel_HF2_Hanae_to_Luis_Boss_1, P_HF2_Luis_1) into RelationshipToContact

!new Relationship('Rel_HF2_Hanae_to_Mereana_Boss_1')
!Rel_HF2_Hanae_to_Mereana_Boss_1.type := #BOSS
!insert (P_HF2_Hanae_1, Rel_HF2_Hanae_to_Mereana_Boss_1) into ContactToRelationship
!insert (Rel_HF2_Hanae_to_Mereana_Boss_1, P_HF2_Mereana_1) into RelationshipToContact

!new Relationship('Rel_HF2_Hanae_to_Samira_Coworker_1')
!Rel_HF2_Hanae_to_Samira_Coworker_1.type := #COWORKER
!insert (P_HF2_Hanae_1, Rel_HF2_Hanae_to_Samira_Coworker_1) into ContactToRelationship
!insert (Rel_HF2_Hanae_to_Samira_Coworker_1, P_HF2_Samira_1) into RelationshipToContact

!new Relationship('Rel_HF2_Hanae_to_Foundation_Employee_1')
!Rel_HF2_Hanae_to_Foundation_Employee_1.type := #EMPLOYEE
!insert (P_HF2_Hanae_1, Rel_HF2_Hanae_to_Foundation_Employee_1) into ContactToRelationship
!insert (Rel_HF2_Hanae_to_Foundation_Employee_1, C_HF2_Foundation_1) into RelationshipToContact

!new Relationship('Rel_HF2_Luis_to_Hanae_Employee_1')
!Rel_HF2_Luis_to_Hanae_Employee_1.type := #EMPLOYEE
!insert (P_HF2_Luis_1, Rel_HF2_Luis_to_Hanae_Employee_1) into ContactToRelationship
!insert (Rel_HF2_Luis_to_Hanae_Employee_1, P_HF2_Hanae_1) into RelationshipToContact

!new Relationship('Rel_HF2_Luis_to_Talia_Coworker_1')
!Rel_HF2_Luis_to_Talia_Coworker_1.type := #COWORKER
!insert (P_HF2_Luis_1, Rel_HF2_Luis_to_Talia_Coworker_1) into ContactToRelationship
!insert (Rel_HF2_Luis_to_Talia_Coworker_1, P_HF2_Talia_1) into RelationshipToContact

!new Relationship('Rel_HF2_Luis_to_Samira_Coworker_1')
!Rel_HF2_Luis_to_Samira_Coworker_1.type := #COWORKER
!insert (P_HF2_Luis_1, Rel_HF2_Luis_to_Samira_Coworker_1) into ContactToRelationship
!insert (Rel_HF2_Luis_to_Samira_Coworker_1, P_HF2_Samira_1) into RelationshipToContact

!new Relationship('Rel_HF2_Luis_to_OpsLtd_Employee_1')
!Rel_HF2_Luis_to_OpsLtd_Employee_1.type := #EMPLOYEE
!insert (P_HF2_Luis_1, Rel_HF2_Luis_to_OpsLtd_Employee_1) into ContactToRelationship
!insert (Rel_HF2_Luis_to_OpsLtd_Employee_1, C_HF2_OpsLtd_1) into RelationshipToContact

!new Relationship('Rel_HF2_Mereana_to_Hanae_Employee_1')
!Rel_HF2_Mereana_to_Hanae_Employee_1.type := #EMPLOYEE
!insert (P_HF2_Mereana_1, Rel_HF2_Mereana_to_Hanae_Employee_1) into ContactToRelationship
!insert (Rel_HF2_Mereana_to_Hanae_Employee_1, P_HF2_Hanae_1) into RelationshipToContact

!new Relationship('Rel_HF2_Mereana_to_Elodie_Coworker_1')
!Rel_HF2_Mereana_to_Elodie_Coworker_1.type := #COWORKER
!insert (P_HF2_Mereana_1, Rel_HF2_Mereana_to_Elodie_Coworker_1) into ContactToRelationship
!insert (Rel_HF2_Mereana_to_Elodie_Coworker_1, P_HF2_Elodie_1) into RelationshipToContact

!new Relationship('Rel_HF2_Mereana_to_CloudKiosk_Coworker_1')
!Rel_HF2_Mereana_to_CloudKiosk_Coworker_1.type := #COWORKER
!insert (P_HF2_Mereana_1, Rel_HF2_Mereana_to_CloudKiosk_Coworker_1) into ContactToRelationship
!insert (Rel_HF2_Mereana_to_CloudKiosk_Coworker_1, C_HF2_CloudKiosk_SAS_1) into RelationshipToContact

!new Relationship('Rel_HF2_Mereana_to_Foundation_Employee_1')
!Rel_HF2_Mereana_to_Foundation_Employee_1.type := #EMPLOYEE
!insert (P_HF2_Mereana_1, Rel_HF2_Mereana_to_Foundation_Employee_1) into ContactToRelationship
!insert (Rel_HF2_Mereana_to_Foundation_Employee_1, C_HF2_Foundation_1) into RelationshipToContact

!new Relationship('Rel_HF2_Samira_to_Hanae_Coworker_1')
!Rel_HF2_Samira_to_Hanae_Coworker_1.type := #COWORKER
!insert (P_HF2_Samira_1, Rel_HF2_Samira_to_Hanae_Coworker_1) into ContactToRelationship
!insert (Rel_HF2_Samira_to_Hanae_Coworker_1, P_HF2_Hanae_1) into RelationshipToContact

!new Relationship('Rel_HF2_Samira_to_Luis_Coworker_1')
!Rel_HF2_Samira_to_Luis_Coworker_1.type := #COWORKER
!insert (P_HF2_Samira_1, Rel_HF2_Samira_to_Luis_Coworker_1) into ContactToRelationship
!insert (Rel_HF2_Samira_to_Luis_Coworker_1, P_HF2_Luis_1) into RelationshipToContact

!new Relationship('Rel_HF2_Samira_to_LuzSonido_Coworker_1')
!Rel_HF2_Samira_to_LuzSonido_Coworker_1.type := #COWORKER
!insert (P_HF2_Samira_1, Rel_HF2_Samira_to_LuzSonido_Coworker_1) into ContactToRelationship
!insert (Rel_HF2_Samira_to_LuzSonido_Coworker_1, C_HF2_LuzSonido_1) into RelationshipToContact

!new Relationship('Rel_HF2_Talia_to_Luis_Coworker_1')
!Rel_HF2_Talia_to_Luis_Coworker_1.type := #COWORKER
!insert (P_HF2_Talia_1, Rel_HF2_Talia_to_Luis_Coworker_1) into ContactToRelationship
!insert (Rel_HF2_Talia_to_Luis_Coworker_1, P_HF2_Luis_1) into RelationshipToContact

!new Relationship('Rel_HF2_Talia_to_Elodie_Coworker_1')
!Rel_HF2_Talia_to_Elodie_Coworker_1.type := #COWORKER
!insert (P_HF2_Talia_1, Rel_HF2_Talia_to_Elodie_Coworker_1) into ContactToRelationship
!insert (Rel_HF2_Talia_to_Elodie_Coworker_1, P_HF2_Elodie_1) into RelationshipToContact

!new Relationship('Rel_HF2_Talia_to_OpsLtd_Employee_1')
!Rel_HF2_Talia_to_OpsLtd_Employee_1.type := #EMPLOYEE
!insert (P_HF2_Talia_1, Rel_HF2_Talia_to_OpsLtd_Employee_1) into ContactToRelationship
!insert (Rel_HF2_Talia_to_OpsLtd_Employee_1, C_HF2_OpsLtd_1) into RelationshipToContact

!new Relationship('Rel_HF2_Talia_to_Kintsugi_Coworker_1')
!Rel_HF2_Talia_to_Kintsugi_Coworker_1.type := #COWORKER
!insert (P_HF2_Talia_1, Rel_HF2_Talia_to_Kintsugi_Coworker_1) into ContactToRelationship
!insert (Rel_HF2_Talia_to_Kintsugi_Coworker_1, C_HF2_Kintsugi_1) into RelationshipToContact

!new Relationship('Rel_HF2_Elodie_to_CloudKiosk_Employee_1')
!Rel_HF2_Elodie_to_CloudKiosk_Employee_1.type := #EMPLOYEE
!insert (P_HF2_Elodie_1, Rel_HF2_Elodie_to_CloudKiosk_Employee_1) into ContactToRelationship
!insert (Rel_HF2_Elodie_to_CloudKiosk_Employee_1, C_HF2_CloudKiosk_SAS_1) into RelationshipToContact

!new Relationship('Rel_HF2_Elodie_to_Mereana_Coworker_1')
!Rel_HF2_Elodie_to_Mereana_Coworker_1.type := #COWORKER
!insert (P_HF2_Elodie_1, Rel_HF2_Elodie_to_Mereana_Coworker_1) into ContactToRelationship
!insert (Rel_HF2_Elodie_to_Mereana_Coworker_1, P_HF2_Mereana_1) into RelationshipToContact

!new Relationship('Rel_HF2_Elodie_to_Talia_Coworker_1')
!Rel_HF2_Elodie_to_Talia_Coworker_1.type := #COWORKER
!insert (P_HF2_Elodie_1, Rel_HF2_Elodie_to_Talia_Coworker_1) into ContactToRelationship
!insert (Rel_HF2_Elodie_to_Talia_Coworker_1, P_HF2_Talia_1) into RelationshipToContact

!new Relationship('Rel_HF2_Elodie_to_CloudKioskQC_Coworker_1')
!Rel_HF2_Elodie_to_CloudKioskQC_Coworker_1.type := #COWORKER
!insert (P_HF2_Elodie_1, Rel_HF2_Elodie_to_CloudKioskQC_Coworker_1) into ContactToRelationship
!insert (Rel_HF2_Elodie_to_CloudKioskQC_Coworker_1, C_HF2_CloudKiosk_QC_1) into RelationshipToContact

!new Relationship('Rel_HF2_Foundation_to_OpsLtd_Subdivision_1')
!Rel_HF2_Foundation_to_OpsLtd_Subdivision_1.type := #SUBDIVISION
!insert (C_HF2_Foundation_1, Rel_HF2_Foundation_to_OpsLtd_Subdivision_1) into ContactToRelationship
!insert (Rel_HF2_Foundation_to_OpsLtd_Subdivision_1, C_HF2_OpsLtd_1) into RelationshipToContact

!new Relationship('Rel_HF2_Foundation_to_CloudKiosk_Coworker_1')
!Rel_HF2_Foundation_to_CloudKiosk_Coworker_1.type := #COWORKER
!insert (C_HF2_Foundation_1, Rel_HF2_Foundation_to_CloudKiosk_Coworker_1) into ContactToRelationship
!insert (Rel_HF2_Foundation_to_CloudKiosk_Coworker_1, C_HF2_CloudKiosk_SAS_1) into RelationshipToContact

!new Relationship('Rel_HF2_OpsLtd_to_LuzSonido_Coworker_1')
!Rel_HF2_OpsLtd_to_LuzSonido_Coworker_1.type := #COWORKER
!insert (C_HF2_OpsLtd_1, Rel_HF2_OpsLtd_to_LuzSonido_Coworker_1) into ContactToRelationship
!insert (Rel_HF2_OpsLtd_to_LuzSonido_Coworker_1, C_HF2_LuzSonido_1) into RelationshipToContact

!new Relationship('Rel_HF2_OpsLtd_to_Kintsugi_Coworker_1')
!Rel_HF2_OpsLtd_to_Kintsugi_Coworker_1.type := #COWORKER
!insert (C_HF2_OpsLtd_1, Rel_HF2_OpsLtd_to_Kintsugi_Coworker_1) into ContactToRelationship
!insert (Rel_HF2_OpsLtd_to_Kintsugi_Coworker_1, C_HF2_Kintsugi_1) into RelationshipToContact

!new Relationship('Rel_HF2_OpsLtd_to_CloudKiosk_Coworker_1')
!Rel_HF2_OpsLtd_to_CloudKiosk_Coworker_1.type := #COWORKER
!insert (C_HF2_OpsLtd_1, Rel_HF2_OpsLtd_to_CloudKiosk_Coworker_1) into ContactToRelationship
!insert (Rel_HF2_OpsLtd_to_CloudKiosk_Coworker_1, C_HF2_CloudKiosk_SAS_1) into RelationshipToContact

!new Relationship('Rel_HF2_LuzSonido_to_OpsLtd_Coworker_1')
!Rel_HF2_LuzSonido_to_OpsLtd_Coworker_1.type := #COWORKER
!insert (C_HF2_LuzSonido_1, Rel_HF2_LuzSonido_to_OpsLtd_Coworker_1) into ContactToRelationship
!insert (Rel_HF2_LuzSonido_to_OpsLtd_Coworker_1, C_HF2_OpsLtd_1) into RelationshipToContact

!new Relationship('Rel_HF2_LuzSonido_to_Samira_Coworker_1')
!Rel_HF2_LuzSonido_to_Samira_Coworker_1.type := #COWORKER
!insert (C_HF2_LuzSonido_1, Rel_HF2_LuzSonido_to_Samira_Coworker_1) into ContactToRelationship
!insert (Rel_HF2_LuzSonido_to_Samira_Coworker_1, P_HF2_Samira_1) into RelationshipToContact

!new Relationship('Rel_HF2_Kintsugi_to_Talia_Coworker_1')
!Rel_HF2_Kintsugi_to_Talia_Coworker_1.type := #COWORKER
!insert (C_HF2_Kintsugi_1, Rel_HF2_Kintsugi_to_Talia_Coworker_1) into ContactToRelationship
!insert (Rel_HF2_Kintsugi_to_Talia_Coworker_1, P_HF2_Talia_1) into RelationshipToContact

!new Relationship('Rel_HF2_Kintsugi_to_OpsLtd_Coworker_1')
!Rel_HF2_Kintsugi_to_OpsLtd_Coworker_1.type := #COWORKER
!insert (C_HF2_Kintsugi_1, Rel_HF2_Kintsugi_to_OpsLtd_Coworker_1) into ContactToRelationship
!insert (Rel_HF2_Kintsugi_to_OpsLtd_Coworker_1, C_HF2_OpsLtd_1) into RelationshipToContact

!new Relationship('Rel_HF2_CloudKiosk_to_CloudKioskQC_Subdivision_1')
!Rel_HF2_CloudKiosk_to_CloudKioskQC_Subdivision_1.type := #SUBDIVISION
!insert (C_HF2_CloudKiosk_SAS_1, Rel_HF2_CloudKiosk_to_CloudKioskQC_Subdivision_1) into ContactToRelationship
!insert (Rel_HF2_CloudKiosk_to_CloudKioskQC_Subdivision_1, C_HF2_CloudKiosk_QC_1) into RelationshipToContact

!new Relationship('Rel_HF2_CloudKiosk_to_Foundation_Coworker_1')
!Rel_HF2_CloudKiosk_to_Foundation_Coworker_1.type := #COWORKER
!insert (C_HF2_CloudKiosk_SAS_1, Rel_HF2_CloudKiosk_to_Foundation_Coworker_1) into ContactToRelationship
!insert (Rel_HF2_CloudKiosk_to_Foundation_Coworker_1, C_HF2_Foundation_1) into RelationshipToContact

!new Relationship('Rel_HF2_CloudKiosk_to_OpsLtd_Coworker_1')
!Rel_HF2_CloudKiosk_to_OpsLtd_Coworker_1.type := #COWORKER
!insert (C_HF2_CloudKiosk_SAS_1, Rel_HF2_CloudKiosk_to_OpsLtd_Coworker_1) into ContactToRelationship
!insert (Rel_HF2_CloudKiosk_to_OpsLtd_Coworker_1, C_HF2_OpsLtd_1) into RelationshipToContact

!new Relationship('Rel_HF2_CloudKioskQC_to_Elodie_Coworker_1')
!Rel_HF2_CloudKioskQC_to_Elodie_Coworker_1.type := #COWORKER
!insert (C_HF2_CloudKiosk_QC_1, Rel_HF2_CloudKioskQC_to_Elodie_Coworker_1) into ContactToRelationship
!insert (Rel_HF2_CloudKioskQC_to_Elodie_Coworker_1, P_HF2_Elodie_1) into RelationshipToContact

!new Relationship('Rel_HF2_CloudKioskQC_to_OpsLtd_Coworker_1')
!Rel_HF2_CloudKioskQC_to_OpsLtd_Coworker_1.type := #COWORKER
!insert (C_HF2_CloudKiosk_QC_1, Rel_HF2_CloudKioskQC_to_OpsLtd_Coworker_1) into ContactToRelationship
!insert (Rel_HF2_CloudKioskQC_to_OpsLtd_Coworker_1, C_HF2_OpsLtd_1) into RelationshipToContact
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 382 | 0.00% |
| Multiplicities Errors | 0 | 113 | 0.00% |
| Invariants Errors | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 12 | 0.00% |
| Websites | 0 | 12 | 0.00% |
| Emails | 0 | 12 | 0.00% |
| Addresses | 7 | 13 | 53.85% |

| Invalid Addresses | 
|---| 
```
Rue Saint-Jean, 310, Québec City
```
```
Avenue Mohammed V, 31, Rabat
```
```
Rothschild Boulevard, 48, Tel Aviv
```
```
Dōtonbori, 5-6, Osaka
```
```
Av. Insurgentes Sur, 1457, Ciudad de México
```
```
Minato Mirai, 2-3-5, Yokohama
```
```
Yefe Nof, 12, Haifa
```

## Category edge
```
!new AddressBook('AB_PopupConference_1')

!new Company('C_PopupHub_1')
!C_PopupHub_1.name := 'Pop‑Up Registration Kiosk Co.'
!C_PopupHub_1.phone := ''
!C_PopupHub_1.website := 'https://popup-kiosk.example'
!C_PopupHub_1.email := 'ops@popup-kiosk.example'
!C_PopupHub_1.industry := 'Event services'
!insert (AB_PopupConference_1, C_PopupHub_1) into AddressBookMadeOfContact

!new Person('P_Cher_1')
!P_Cher_1.name := 'Cher'
!P_Cher_1.phone := '+1-555-0100'
!P_Cher_1.website := ''
!P_Cher_1.email := 'cher@localhost'
!P_Cher_1.title := ''
!insert (AB_PopupConference_1, P_Cher_1) into AddressBookMadeOfContact

!new Note('Note_Cher_1')
!Note_Cher_1.author := 'Cher'
!Note_Cher_1.time := Date('1900-02-29')
!Note_Cher_1.type := #CALL
!Note_Cher_1.comment := ''
!insert (P_Cher_1, Note_Cher_1) into ContactContainsNote

!new Note('Note_Cher_2')
!Note_Cher_2.author := ''
!Note_Cher_2.time := Date('2026-01-01')
!Note_Cher_2.type := #EMAIL
!Note_Cher_2.comment := 'Sent badge-print template with no signature line as requested.'
!insert (P_Cher_1, Note_Cher_2) into ContactContainsNote

!new Address('Addr_Cher_LA_1')
!Addr_Cher_LA_1.city := 'Los Angeles'
!Addr_Cher_LA_1.houseNr := '—'
!Addr_Cher_LA_1.street := 'Sunset Blvd'
!insert (P_Cher_1, Addr_Cher_LA_1) into ContactContainsAddress

!new Person('P_Minh_1')
!P_Minh_1.name := 'Nguyễn Thị Minh'
!P_Minh_1.phone := '+84 28 0000 0000'
!P_Minh_1.website := 'https://minh.example.vn'
!P_Minh_1.email := 'minh+conf2026@example.vn'
!P_Minh_1.title := 'Ms.'
!insert (AB_PopupConference_1, P_Minh_1) into AddressBookMadeOfContact

!new Address('Addr_Minh_HCMC_1')
!Addr_Minh_HCMC_1.city := 'Hồ Chí Minh City'
!Addr_Minh_HCMC_1.houseNr := '0'
!Addr_Minh_HCMC_1.street := 'Đường số 1'
!insert (P_Minh_1, Addr_Minh_HCMC_1) into ContactContainsAddress

!new Address('Addr_Minh_Empty_1')
!Addr_Minh_Empty_1.city := ''
!Addr_Minh_Empty_1.houseNr := ''
!Addr_Minh_Empty_1.street := ''
!insert (P_Minh_1, Addr_Minh_Empty_1) into ContactContainsAddress

!new Company('C_SahelEnergy_1')
!C_SahelEnergy_1.name := 'Coopérative Énergie du Sahel'
!C_SahelEnergy_1.phone := '+227 20 00 00 00'
!C_SahelEnergy_1.website := 'https://energie-sahel.example.ne'
!C_SahelEnergy_1.email := 'contact@energie-sahel.example.ne'
!C_SahelEnergy_1.industry := 'Community solar'
!insert (AB_PopupConference_1, C_SahelEnergy_1) into AddressBookMadeOfContact

!new Note('Note_SahelEnergy_1')
!Note_SahelEnergy_1.author := 'Aïchatou'
!Note_SahelEnergy_1.time := Date('1582-10-15')
!Note_SahelEnergy_1.type := #MEETING
!Note_SahelEnergy_1.comment := 'Recorded as “first day” after calendar migration in legacy ledger import.'
!insert (C_SahelEnergy_1, Note_SahelEnergy_1) into ContactContainsNote

!new Address('Addr_SahelEnergy_Niamey_1')
!Addr_SahelEnergy_Niamey_1.city := 'Niamey'
!Addr_SahelEnergy_Niamey_1.houseNr := '1'
!Addr_SahelEnergy_Niamey_1.street := 'Rue de la Coopération'
!insert (C_SahelEnergy_1, Addr_SahelEnergy_Niamey_1) into ContactContainsAddress

!new Person('P_OlegPetrov_1')
!P_OlegPetrov_1.name := 'Олег Петров'
!P_OlegPetrov_1.phone := '+7 495 000-00-00'
!P_OlegPetrov_1.website := 'https://пример.рф/олег'
!P_OlegPetrov_1.email := 'oleg.petrov@example.ru'
!P_OlegPetrov_1.title := 'Mr.'
!insert (AB_PopupConference_1, P_OlegPetrov_1) into AddressBookMadeOfContact

!new Note('Note_Oleg_1')
!Note_Oleg_1.author := 'Олег'
!Note_Oleg_1.time := Date('2025-12-31')
!Note_Oleg_1.type := #CALL
!Note_Oleg_1.comment := 'Confirmed he will only answer calls between 03:00–03:05 local time.'
!insert (P_OlegPetrov_1, Note_Oleg_1) into ContactContainsNote

!new Note('Note_Oleg_2')
!Note_Oleg_2.author := 'Олег'
!Note_Oleg_2.time := Date('2025-12-31')
!Note_Oleg_2.type := #CALL
!Note_Oleg_2.comment := 'Duplicate call log kept intentionally for audit replay.'
!insert (P_OlegPetrov_1, Note_Oleg_2) into ContactContainsNote

!new Company('C_MizuhoTemp_1')
!C_MizuhoTemp_1.name := '株式会社ミズホ臨時窓口'
!C_MizuhoTemp_1.phone := '+81 3 0000 0000'
!C_MizuhoTemp_1.website := 'https://mizuho-temp.example.jp'
!C_MizuhoTemp_1.email := 'desk@mizuho-temp.example.jp'
!C_MizuhoTemp_1.industry := 'Temporary staffing'
!insert (AB_PopupConference_1, C_MizuhoTemp_1) into AddressBookMadeOfContact

!new Address('Addr_Mizuho_Tokyo_1')
!Addr_Mizuho_Tokyo_1.city := '東京'
!Addr_Mizuho_Tokyo_1.houseNr := '000'
!Addr_Mizuho_Tokyo_1.street := '臨時通り'
!insert (C_MizuhoTemp_1, Addr_Mizuho_Tokyo_1) into ContactContainsAddress

!new Address('Addr_Mizuho_SaoPaulo_1')
!Addr_Mizuho_SaoPaulo_1.city := 'São Paulo'
!Addr_Mizuho_SaoPaulo_1.houseNr := '13'
!Addr_Mizuho_SaoPaulo_1.street := 'Rua do Evento'
!insert (C_MizuhoTemp_1, Addr_Mizuho_SaoPaulo_1) into ContactContainsAddress

!new Relationship('Rel_Cher_to_Hub_Employee_1')
!Rel_Cher_to_Hub_Employee_1.type := #EMPLOYEE
!insert (P_Cher_1, Rel_Cher_to_Hub_Employee_1) into ContactToRelationship
!insert (Rel_Cher_to_Hub_Employee_1, C_PopupHub_1) into RelationshipToContact

!new Relationship('Rel_Cher_to_Hub_Coworker_1')
!Rel_Cher_to_Hub_Coworker_1.type := #COWORKER
!insert (P_Cher_1, Rel_Cher_to_Hub_Coworker_1) into ContactToRelationship
!insert (Rel_Cher_to_Hub_Coworker_1, C_PopupHub_1) into RelationshipToContact

!new Relationship('Rel_Minh_to_Hub_Boss_1')
!Rel_Minh_to_Hub_Boss_1.type := #BOSS
!insert (P_Minh_1, Rel_Minh_to_Hub_Boss_1) into ContactToRelationship
!insert (Rel_Minh_to_Hub_Boss_1, C_PopupHub_1) into RelationshipToContact

!new Relationship('Rel_SahelEnergy_to_Hub_Subdivision_1')
!Rel_SahelEnergy_to_Hub_Subdivision_1.type := #SUBDIVISION
!insert (C_SahelEnergy_1, Rel_SahelEnergy_to_Hub_Subdivision_1) into ContactToRelationship
!insert (Rel_SahelEnergy_to_Hub_Subdivision_1, C_PopupHub_1) into RelationshipToContact

!new Relationship('Rel_Oleg_to_Hub_Coworker_1')
!Rel_Oleg_to_Hub_Coworker_1.type := #COWORKER
!insert (P_OlegPetrov_1, Rel_Oleg_to_Hub_Coworker_1) into ContactToRelationship
!insert (Rel_Oleg_to_Hub_Coworker_1, C_PopupHub_1) into RelationshipToContact

!new Relationship('Rel_Mizuho_to_Hub_Employee_1')
!Rel_Mizuho_to_Hub_Employee_1.type := #EMPLOYEE
!insert (C_MizuhoTemp_1, Rel_Mizuho_to_Hub_Employee_1) into ContactToRelationship
!insert (Rel_Mizuho_to_Hub_Employee_1, C_PopupHub_1) into RelationshipToContact

!new Relationship('Rel_Mizuho_to_SahelEnergy_Subdivision_1')
!Rel_Mizuho_to_SahelEnergy_Subdivision_1.type := #SUBDIVISION
!insert (C_MizuhoTemp_1, Rel_Mizuho_to_SahelEnergy_Subdivision_1) into ContactToRelationship
!insert (Rel_Mizuho_to_SahelEnergy_Subdivision_1, C_SahelEnergy_1) into RelationshipToContact
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 131 | 0.00% |
| Multiplicities Errors | 0 | 31 | 0.00% |
| Invariants Errors | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 1 | 6 | 16.67% |
| Websites | 2 | 6 | 33.33% |
| Emails | 1 | 6 | 16.67% |
| Addresses | 6 | 6 | 100.00% |

| Invalid Phones | 
|---| 
```

```

| Invalid Websites | 
|---| 
```
https://пример.рф/олег
```
```

```

| Invalid Emails | 
|---| 
```
cher@localhost
```

| Invalid Addresses | 
|---| 
```
Rue de la Coopération, 1, Niamey
```
```
臨時通り, 000, 東京
```
```
Sunset Blvd, —, Los Angeles
```
```
Đường số 1, 0, Hồ Chí Minh City
```
```
, , 
```
```
Rua do Evento, 13, São Paulo
```

## Category invalid
```
!new AddressBook('AB3_CoopSanteNord_2')

!new Company('C_AB3_CoopSanteNord_2')
!C_AB3_CoopSanteNord_2.name := 'Coop Santé Nord'
!C_AB3_CoopSanteNord_2.industry := 'Community healthcare services'
!C_AB3_CoopSanteNord_2.phone := '+1 514 555 0198'
!C_AB3_CoopSanteNord_2.website := 'https://coopsantenord.example.ca'
!C_AB3_CoopSanteNord_2.email := 'info@coopsantenord.example.ca'
!insert (AB3_CoopSanteNord_2, C_AB3_CoopSanteNord_2) into AddressBookMadeOfContact

!new Address('Addr_AB3_AD10_2')
!Addr_AB3_AD10_2.city := 'Montréal'
!Addr_AB3_AD10_2.street := 'Rue Saint-Jacques'
!Addr_AB3_AD10_2.houseNr := '901'
!insert (C_AB3_CoopSanteNord_2, Addr_AB3_AD10_2) into ContactContainsAddress

!new Note('Note_AB3_N10_2')
!Note_AB3_N10_2.author := 'Sophie Nguyen (Coordinator)'
!Note_AB3_N10_2.time := Date('2026-01-14')
!Note_AB3_N10_2.type := #EMAIL
!Note_AB3_N10_2.comment := 'Updated volunteer onboarding PDF; send to new interpreters and reception backups.'
!insert (C_AB3_CoopSanteNord_2, Note_AB3_N10_2) into ContactContainsNote

!new Person('P_AB3_MariaJose_2')
!P_AB3_MariaJose_2.name := 'María‑José García'
!P_AB3_MariaJose_2.title := 'Ms.'
!P_AB3_MariaJose_2.phone := '+1 438 555 7720'
!P_AB3_MariaJose_2.website := 'https://mjgarcia.example'
!P_AB3_MariaJose_2.email := 'mariajose.garcia@example.com'
!insert (AB3_CoopSanteNord_2, P_AB3_MariaJose_2) into AddressBookMadeOfContact

!new Address('Addr_AB3_AD11_2')
!Addr_AB3_AD11_2.city := 'Montréal'
!Addr_AB3_AD11_2.street := 'Boulevard René‑Lévesque Ouest'
!Addr_AB3_AD11_2.houseNr := '1205'
!insert (P_AB3_MariaJose_2, Addr_AB3_AD11_2) into ContactContainsAddress

!new Note('Note_AB3_N11_2')
!Note_AB3_N11_2.author := 'Sophie Nguyen (Coordinator)'
!Note_AB3_N11_2.time := Date('2026-02-03')
!Note_AB3_N11_2.type := #CALL
!Note_AB3_N11_2.comment := 'María‑José confirmed she can interpret Spanish ↔ French on Tuesdays and Thursdays.'
!insert (P_AB3_MariaJose_2, Note_AB3_N11_2) into ContactContainsNote

!new Person('P_AB3_JeanPierre_2')
!P_AB3_JeanPierre_2.name := 'Jean‑Pierre Lavoie'
!P_AB3_JeanPierre_2.title := 'Mr.'
!P_AB3_JeanPierre_2.phone := '+1 514 555 4402'
!P_AB3_JeanPierre_2.website := 'https://jplavoie.example.ca'
!P_AB3_JeanPierre_2.email := 'jean-pierre.lavoie@example.ca'
!insert (AB3_CoopSanteNord_2, P_AB3_JeanPierre_2) into AddressBookMadeOfContact

!new Address('Addr_AB3_AD12_2')
!Addr_AB3_AD12_2.city := 'Laval'
!Addr_AB3_AD12_2.street := 'Avenue des Laurentides'
!Addr_AB3_AD12_2.houseNr := '3340'
!insert (P_AB3_JeanPierre_2, Addr_AB3_AD12_2) into ContactContainsAddress

!new Note('Note_AB3_N12_2')
!Note_AB3_N12_2.author := 'Jean‑Pierre Lavoie'
!Note_AB3_N12_2.time := Date('2026-02-05')
!Note_AB3_N12_2.type := #MEETING
!Note_AB3_N12_2.comment := 'Met María‑José before shift; agreed on glossary for medical intake questions (FR/ES).'
!insert (P_AB3_JeanPierre_2, Note_AB3_N12_2) into ContactContainsNote

!new Company('C_AB3_MinistryQC_1')
!C_AB3_MinistryQC_1.name := 'Ministère de la Santé et des Services sociaux (Québec)'
!C_AB3_MinistryQC_1.industry := 'Public health authority'
!C_AB3_MinistryQC_1.phone := ''
!C_AB3_MinistryQC_1.website := ''
!C_AB3_MinistryQC_1.email := ''
!insert (AB3_CoopSanteNord_2, C_AB3_MinistryQC_1) into AddressBookMadeOfContact

!new Relationship('Rel_AB3_R11_2')
!Rel_AB3_R11_2.type := #SUBDIVISION
!insert (C_AB3_CoopSanteNord_2, Rel_AB3_R11_2) into ContactToRelationship
!insert (Rel_AB3_R11_2, C_AB3_MinistryQC_1) into RelationshipToContact

!new Relationship('Rel_AB3_R10a_2')
!Rel_AB3_R10a_2.type := #COWORKER
!insert (P_AB3_MariaJose_2, Rel_AB3_R10a_2) into ContactToRelationship
!insert (Rel_AB3_R10a_2, P_AB3_JeanPierre_2) into RelationshipToContact

!new Relationship('Rel_AB3_R10b_2')
!Rel_AB3_R10b_2.type := #COWORKER
!insert (P_AB3_JeanPierre_2, Rel_AB3_R10b_2) into ContactToRelationship
!insert (Rel_AB3_R10b_2, P_AB3_MariaJose_2) into RelationshipToContact
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 16 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 1 | 4 | 25.00% |
| Websites | 1 | 4 | 25.00% |
| Emails | 1 | 4 | 25.00% |
| Addresses | 1 | 3 | 33.33% |

| Invalid Phones | 
|---| 
```

```

| Invalid Websites | 
|---| 
```

```

| Invalid Emails | 
|---| 
```

```

| Invalid Addresses | 
|---| 
```
Avenue des Laurentides, 3340, Laval
```

## Generation 2 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 730 | 0.00% |
| Multiplicities Errors | 0 | 177 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 16 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 2 | 28 | 7.14% |
| Websites | 3 | 28 | 10.71% |
| Emails | 2 | 28 | 7.14% |
| Addresses | 17 | 29 | 58.62% |

| Invalid Phones | 
|---| 
```

```
```

```

| Invalid Websites | 
|---| 
```
https://пример.рф/олег
```
```

```
```

```

| Invalid Emails | 
|---| 
```
cher@localhost
```
```

```

| Invalid Addresses | 
|---| 
```
Industrial Way, 18, San Carlos
```
```
Al Wasl Road, 77, Dubai
```
```
ul. Długa, 19, Gdańsk
```
```
Rue Saint-Jean, 310, Québec City
```
```
Avenue Mohammed V, 31, Rabat
```
```
Rothschild Boulevard, 48, Tel Aviv
```
```
Dōtonbori, 5-6, Osaka
```
```
Av. Insurgentes Sur, 1457, Ciudad de México
```
```
Minato Mirai, 2-3-5, Yokohama
```
```
Yefe Nof, 12, Haifa
```
```
Rue de la Coopération, 1, Niamey
```
```
臨時通り, 000, 東京
```
```
Sunset Blvd, —, Los Angeles
```
```
Đường số 1, 0, Hồ Chí Minh City
```
```
, , 
```
```
Rua do Evento, 13, São Paulo
```
```
Avenue des Laurentides, 3340, Laval
```

# Generation 3
## Category baseline
```
!new AddressBook('AB_ArcticExpedition_2026_1')

!new Person('P_Arctic_Ingrid_1')
!P_Arctic_Ingrid_1.name := 'Ingrid Sørensen'
!P_Arctic_Ingrid_1.phone := '+47 21 555 100'
!P_Arctic_Ingrid_1.website := 'https://ingrid-sorensen.example'
!P_Arctic_Ingrid_1.email := 'ingrid.sorensen@example.no'
!P_Arctic_Ingrid_1.title := 'Capt.'
!insert (AB_ArcticExpedition_2026_1, P_Arctic_Ingrid_1) into AddressBookMadeOfContact

!new Address('Addr_Arctic_Ingrid_Tromso_1')
!Addr_Arctic_Ingrid_Tromso_1.street := 'Havnegata'
!Addr_Arctic_Ingrid_Tromso_1.houseNr := '8'
!Addr_Arctic_Ingrid_Tromso_1.city := 'Tromsø'
!insert (P_Arctic_Ingrid_1, Addr_Arctic_Ingrid_Tromso_1) into ContactContainsAddress

!new Note('Note_Arctic_Ingrid_1')
!Note_Arctic_Ingrid_1.author := 'Hannah Q. Chen'
!Note_Arctic_Ingrid_1.time := Date('2026-01-07')
!Note_Arctic_Ingrid_1.type := #EMAIL
!Note_Arctic_Ingrid_1.comment := 'Shared updated passenger manifest and instrument list for PolarAir.'
!insert (P_Arctic_Ingrid_1, Note_Arctic_Ingrid_1) into ContactContainsNote

!new Note('Note_Arctic_Ingrid_2')
!Note_Arctic_Ingrid_2.author := 'Ingrid Sørensen'
!Note_Arctic_Ingrid_2.time := Date('2026-01-20')
!Note_Arctic_Ingrid_2.type := #CALL
!Note_Arctic_Ingrid_2.comment := 'Called Hotel Kalaallit to confirm late arrival policy due to weather contingency.'
!insert (P_Arctic_Ingrid_1, Note_Arctic_Ingrid_2) into ContactContainsNote

!new Person('P_Arctic_Malik_1')
!P_Arctic_Malik_1.name := 'Malik Okoye'
!P_Arctic_Malik_1.phone := '+1 867 555 0142'
!P_Arctic_Malik_1.website := 'https://malik-okoye.example'
!P_Arctic_Malik_1.email := 'malik.okoye@example.ca'
!P_Arctic_Malik_1.title := 'Mr.'
!insert (AB_ArcticExpedition_2026_1, P_Arctic_Malik_1) into AddressBookMadeOfContact

!new Note('Note_Arctic_Malik_1')
!Note_Arctic_Malik_1.author := 'Malik Okoye'
!Note_Arctic_Malik_1.time := Date('2026-01-12')
!Note_Arctic_Malik_1.type := #MEETING
!Note_Arctic_Malik_1.comment := 'Met PolarAir Cargo Division operations desk; confirmed hazardous-material labeling for battery packs.'
!insert (P_Arctic_Malik_1, Note_Arctic_Malik_1) into ContactContainsNote

!new Person('P_Arctic_Elodie_1')
!P_Arctic_Elodie_1.name := 'Élodie Martin'
!P_Arctic_Elodie_1.phone := '+33 1 555 020 20'
!P_Arctic_Elodie_1.website := 'https://elodie-martin.example'
!P_Arctic_Elodie_1.email := 'elodie.martin@example.fr'
!P_Arctic_Elodie_1.title := 'Dr.'
!insert (AB_ArcticExpedition_2026_1, P_Arctic_Elodie_1) into AddressBookMadeOfContact

!new Address('Addr_Arctic_Elodie_Paris_1')
!Addr_Arctic_Elodie_Paris_1.street := 'Rue des Écoles'
!Addr_Arctic_Elodie_Paris_1.houseNr := '14'
!Addr_Arctic_Elodie_Paris_1.city := 'Paris'
!insert (P_Arctic_Elodie_1, Addr_Arctic_Elodie_Paris_1) into ContactContainsAddress

!new Person('P_Arctic_Hannah_1')
!P_Arctic_Hannah_1.name := 'Hannah Q. Chen'
!P_Arctic_Hannah_1.phone := '+65 5550 7788'
!P_Arctic_Hannah_1.website := 'https://hannahchen.example'
!P_Arctic_Hannah_1.email := 'hannah.chen@example.sg'
!P_Arctic_Hannah_1.title := 'Ms.'
!insert (AB_ArcticExpedition_2026_1, P_Arctic_Hannah_1) into AddressBookMadeOfContact

!new Address('Addr_Arctic_Hannah_Singapore_1')
!Addr_Arctic_Hannah_Singapore_1.street := 'Anson Road'
!Addr_Arctic_Hannah_Singapore_1.houseNr := '10'
!Addr_Arctic_Hannah_Singapore_1.city := 'Singapore'
!insert (P_Arctic_Hannah_1, Addr_Arctic_Hannah_Singapore_1) into ContactContainsAddress

!new Note('Note_Arctic_Hannah_1')
!Note_Arctic_Hannah_1.author := 'Borealis Research Institute Finance'
!Note_Arctic_Hannah_1.time := Date('2026-01-05')
!Note_Arctic_Hannah_1.type := #EMAIL
!Note_Arctic_Hannah_1.comment := 'Sent sponsorship agreement signature page and purchase-order reference for air charter deposit.'
!insert (P_Arctic_Hannah_1, Note_Arctic_Hannah_1) into ContactContainsNote

!new Company('C_Arctic_Borealis_1')
!C_Arctic_Borealis_1.name := 'Borealis Research Institute'
!C_Arctic_Borealis_1.phone := '+1 613 555 0900'
!C_Arctic_Borealis_1.website := 'https://borealis-institute.example'
!C_Arctic_Borealis_1.email := 'admin@borealis-institute.example'
!C_Arctic_Borealis_1.industry := 'Scientific research and expedition funding'
!insert (AB_ArcticExpedition_2026_1, C_Arctic_Borealis_1) into AddressBookMadeOfContact

!new Address('Addr_Arctic_Borealis_Ottawa_1')
!Addr_Arctic_Borealis_Ottawa_1.street := 'Sussex Drive'
!Addr_Arctic_Borealis_Ottawa_1.houseNr := '220'
!Addr_Arctic_Borealis_Ottawa_1.city := 'Ottawa'
!insert (C_Arctic_Borealis_1, Addr_Arctic_Borealis_Ottawa_1) into ContactContainsAddress

!new Note('Note_Arctic_Borealis_1')
!Note_Arctic_Borealis_1.author := 'Hannah Q. Chen'
!Note_Arctic_Borealis_1.time := Date('2026-01-03')
!Note_Arctic_Borealis_1.type := #MEETING
!Note_Arctic_Borealis_1.comment := 'Internal briefing: confirmed budget lines for charter flight, hotel block, and cargo handling.'
!insert (C_Arctic_Borealis_1, Note_Arctic_Borealis_1) into ContactContainsNote

!new Company('C_Arctic_PolarAir_1')
!C_Arctic_PolarAir_1.name := 'PolarAir Aviation A/S'
!C_Arctic_PolarAir_1.phone := '+45 33 555 600'
!C_Arctic_PolarAir_1.website := 'https://polarair.example'
!C_Arctic_PolarAir_1.email := 'ops@polarair.example'
!C_Arctic_PolarAir_1.industry := 'Air charter and regional aviation'
!insert (AB_ArcticExpedition_2026_1, C_Arctic_PolarAir_1) into AddressBookMadeOfContact

!new Address('Addr_Arctic_PolarAir_Kastrup_1')
!Addr_Arctic_PolarAir_Kastrup_1.street := 'Lufthavnsboulevarden'
!Addr_Arctic_PolarAir_Kastrup_1.houseNr := '6'
!Addr_Arctic_PolarAir_Kastrup_1.city := 'Kastrup'
!insert (C_Arctic_PolarAir_1, Addr_Arctic_PolarAir_Kastrup_1) into ContactContainsAddress

!new Note('Note_Arctic_PolarAir_1')
!Note_Arctic_PolarAir_1.author := 'PolarAir Dispatch'
!Note_Arctic_PolarAir_1.time := Date('2026-01-18')
!Note_Arctic_PolarAir_1.type := #CALL
!Note_Arctic_PolarAir_1.comment := 'Confirmed aircraft type change due to runway conditions; requested updated cargo weights.'
!insert (C_Arctic_PolarAir_1, Note_Arctic_PolarAir_1) into ContactContainsNote

!new Company('C_Arctic_PolarAirCargo_1')
!C_Arctic_PolarAirCargo_1.name := 'PolarAir Cargo Division'
!C_Arctic_PolarAirCargo_1.phone := '+45 33 555 640'
!C_Arctic_PolarAirCargo_1.website := 'https://polarair.example/cargo'
!C_Arctic_PolarAirCargo_1.email := 'cargo@polarair.example'
!C_Arctic_PolarAirCargo_1.industry := 'Air cargo handling and special shipments'
!insert (AB_ArcticExpedition_2026_1, C_Arctic_PolarAirCargo_1) into AddressBookMadeOfContact

!new Address('Addr_Arctic_Cargo_Kastrup_1')
!Addr_Arctic_Cargo_Kastrup_1.street := 'Lufthavnsboulevarden'
!Addr_Arctic_Cargo_Kastrup_1.houseNr := '6C'
!Addr_Arctic_Cargo_Kastrup_1.city := 'Kastrup'
!insert (C_Arctic_PolarAirCargo_1, Addr_Arctic_Cargo_Kastrup_1) into ContactContainsAddress

!new Address('Addr_Arctic_Cargo_Nuuk_1')
!Addr_Arctic_Cargo_Nuuk_1.street := 'Havnavej'
!Addr_Arctic_Cargo_Nuuk_1.houseNr := '2'
!Addr_Arctic_Cargo_Nuuk_1.city := 'Nuuk'
!insert (C_Arctic_PolarAirCargo_1, Addr_Arctic_Cargo_Nuuk_1) into ContactContainsAddress

!new Company('C_Arctic_HotelKalaallit_1')
!C_Arctic_HotelKalaallit_1.name := 'Hotel Kalaallit'
!C_Arctic_HotelKalaallit_1.phone := '+299 34 55 00'
!C_Arctic_HotelKalaallit_1.website := 'https://hotel-kalaallit.example'
!C_Arctic_HotelKalaallit_1.email := 'frontdesk@hotel-kalaallit.example'
!C_Arctic_HotelKalaallit_1.industry := 'Hospitality and lodging'
!insert (AB_ArcticExpedition_2026_1, C_Arctic_HotelKalaallit_1) into AddressBookMadeOfContact

!new Address('Addr_Arctic_Hotel_Nuuk_1')
!Addr_Arctic_Hotel_Nuuk_1.street := 'Aqqusinersuaq'
!Addr_Arctic_Hotel_Nuuk_1.houseNr := '12'
!Addr_Arctic_Hotel_Nuuk_1.city := 'Nuuk'
!insert (C_Arctic_HotelKalaallit_1, Addr_Arctic_Hotel_Nuuk_1) into ContactContainsAddress

!new Note('Note_Arctic_Hotel_1')
!Note_Arctic_Hotel_1.author := 'Ingrid Sørensen'
!Note_Arctic_Hotel_1.time := Date('2026-01-21')
!Note_Arctic_Hotel_1.type := #EMAIL
!Note_Arctic_Hotel_1.comment := 'Requested quiet rooms for equipment storage; hotel confirmed availability for two nights.'
!insert (C_Arctic_HotelKalaallit_1, Note_Arctic_Hotel_1) into ContactContainsNote

!new Relationship('Rel_Arctic_Ingrid_to_Malik_Boss_1')
!Rel_Arctic_Ingrid_to_Malik_Boss_1.type := #BOSS
!insert (P_Arctic_Ingrid_1, Rel_Arctic_Ingrid_to_Malik_Boss_1) into ContactToRelationship
!insert (Rel_Arctic_Ingrid_to_Malik_Boss_1, P_Arctic_Malik_1) into RelationshipToContact

!new Relationship('Rel_Arctic_Ingrid_to_Elodie_Boss_1')
!Rel_Arctic_Ingrid_to_Elodie_Boss_1.type := #BOSS
!insert (P_Arctic_Ingrid_1, Rel_Arctic_Ingrid_to_Elodie_Boss_1) into ContactToRelationship
!insert (Rel_Arctic_Ingrid_to_Elodie_Boss_1, P_Arctic_Elodie_1) into RelationshipToContact

!new Relationship('Rel_Arctic_Ingrid_to_Hannah_Coworker_1')
!Rel_Arctic_Ingrid_to_Hannah_Coworker_1.type := #COWORKER
!insert (P_Arctic_Ingrid_1, Rel_Arctic_Ingrid_to_Hannah_Coworker_1) into ContactToRelationship
!insert (Rel_Arctic_Ingrid_to_Hannah_Coworker_1, P_Arctic_Hannah_1) into RelationshipToContact

!new Relationship('Rel_Arctic_Malik_to_Ingrid_Employee_1')
!Rel_Arctic_Malik_to_Ingrid_Employee_1.type := #EMPLOYEE
!insert (P_Arctic_Malik_1, Rel_Arctic_Malik_to_Ingrid_Employee_1) into ContactToRelationship
!insert (Rel_Arctic_Malik_to_Ingrid_Employee_1, P_Arctic_Ingrid_1) into RelationshipToContact

!new Relationship('Rel_Arctic_Malik_to_Elodie_Coworker_1')
!Rel_Arctic_Malik_to_Elodie_Coworker_1.type := #COWORKER
!insert (P_Arctic_Malik_1, Rel_Arctic_Malik_to_Elodie_Coworker_1) into ContactToRelationship
!insert (Rel_Arctic_Malik_to_Elodie_Coworker_1, P_Arctic_Elodie_1) into RelationshipToContact

!new Relationship('Rel_Arctic_Elodie_to_Ingrid_Employee_1')
!Rel_Arctic_Elodie_to_Ingrid_Employee_1.type := #EMPLOYEE
!insert (P_Arctic_Elodie_1, Rel_Arctic_Elodie_to_Ingrid_Employee_1) into ContactToRelationship
!insert (Rel_Arctic_Elodie_to_Ingrid_Employee_1, P_Arctic_Ingrid_1) into RelationshipToContact

!new Relationship('Rel_Arctic_Hannah_to_Borealis_Employee_1')
!Rel_Arctic_Hannah_to_Borealis_Employee_1.type := #EMPLOYEE
!insert (P_Arctic_Hannah_1, Rel_Arctic_Hannah_to_Borealis_Employee_1) into ContactToRelationship
!insert (Rel_Arctic_Hannah_to_Borealis_Employee_1, C_Arctic_Borealis_1) into RelationshipToContact

!new Relationship('Rel_Arctic_Borealis_to_Hannah_Boss_1')
!Rel_Arctic_Borealis_to_Hannah_Boss_1.type := #BOSS
!insert (C_Arctic_Borealis_1, Rel_Arctic_Borealis_to_Hannah_Boss_1) into ContactToRelationship
!insert (Rel_Arctic_Borealis_to_Hannah_Boss_1, P_Arctic_Hannah_1) into RelationshipToContact

!new Relationship('Rel_Arctic_PolarAir_to_Cargo_Subdivision_1')
!Rel_Arctic_PolarAir_to_Cargo_Subdivision_1.type := #SUBDIVISION
!insert (C_Arctic_PolarAir_1, Rel_Arctic_PolarAir_to_Cargo_Subdivision_1) into ContactToRelationship
!insert (Rel_Arctic_PolarAir_to_Cargo_Subdivision_1, C_Arctic_PolarAirCargo_1) into RelationshipToContact

!new Relationship('Rel_Arctic_Cargo_to_Hotel_Coworker_1')
!Rel_Arctic_Cargo_to_Hotel_Coworker_1.type := #COWORKER
!insert (C_Arctic_PolarAirCargo_1, Rel_Arctic_Cargo_to_Hotel_Coworker_1) into ContactToRelationship
!insert (Rel_Arctic_Cargo_to_Hotel_Coworker_1, C_Arctic_HotelKalaallit_1) into RelationshipToContact

!new Relationship('Rel_Arctic_Hotel_to_Cargo_Boss_1')
!Rel_Arctic_Hotel_to_Cargo_Boss_1.type := #BOSS
!insert (C_Arctic_HotelKalaallit_1, Rel_Arctic_Hotel_to_Cargo_Boss_1) into ContactToRelationship
!insert (Rel_Arctic_Hotel_to_Cargo_Boss_1, C_Arctic_PolarAirCargo_1) into RelationshipToContact
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 183 | 0.00% |
| Multiplicities Errors | 0 | 45 | 0.00% |
| Invariants Errors | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 8 | 0.00% |
| Websites | 0 | 8 | 0.00% |
| Emails | 0 | 8 | 0.00% |
| Addresses | 3 | 8 | 37.50% |

| Invalid Addresses | 
|---| 
```
Rue des Écoles, 14, Paris
```
```
Havnegata, 8, Tromsø
```
```
Havnavej, 2, Nuuk
```

## Category boundary
```
!new AddressBook('AB_GlobalOrg_HighLinks_1')

!new Person('P_High_LH_1')
!P_High_LH_1.name := 'Laila Hassan'
!P_High_LH_1.phone := '+20 2 5550 0101'
!P_High_LH_1.website := 'https://lailahassan.example.org'
!P_High_LH_1.email := 'laila.hassan@example.org'
!P_High_LH_1.title := 'Prof.'
!insert (AB_GlobalOrg_HighLinks_1, P_High_LH_1) into AddressBookMadeOfContact

!new Address('Addr_High_LH_1')
!Addr_High_LH_1.city := 'Cairo'
!Addr_High_LH_1.street := 'Tahrir Square'
!Addr_High_LH_1.houseNr := '1'
!insert (P_High_LH_1, Addr_High_LH_1) into ContactContainsAddress

!new Note('Note_High_LH_1')
!Note_High_LH_1.author := 'Laila Hassan'
!Note_High_LH_1.time := Date('0001-01-01')
!Note_High_LH_1.type := #MEETING
!Note_High_LH_1.comment := 'Kick-off meeting notes kept intentionally brief.'
!insert (P_High_LH_1, Note_High_LH_1) into ContactContainsNote

!new Person('P_High_KT_1')
!P_High_KT_1.name := 'Kenji Tanaka'
!P_High_KT_1.phone := '+81 3 4500 7788'
!P_High_KT_1.website := ''
!P_High_KT_1.email := 'kenji.tanaka@example.jp'
!P_High_KT_1.title := 'Mr.'
!insert (AB_GlobalOrg_HighLinks_1, P_High_KT_1) into AddressBookMadeOfContact

!new Person('P_High_MJR_1')
!P_High_MJR_1.name := 'María-José Ríos'
!P_High_MJR_1.phone := '+52 55 4000 9090'
!P_High_MJR_1.website := 'https://mjr.example.mx'
!P_High_MJR_1.email := 'mariajose.rios@example.mx'
!P_High_MJR_1.title := 'Ing.'
!insert (AB_GlobalOrg_HighLinks_1, P_High_MJR_1) into AddressBookMadeOfContact

!new Address('Addr_High_MJR_1')
!Addr_High_MJR_1.city := 'Ciudad de México'
!Addr_High_MJR_1.street := 'Av. Reforma'
!Addr_High_MJR_1.houseNr := '0'
!insert (P_High_MJR_1, Addr_High_MJR_1) into ContactContainsAddress

!new Note('Note_High_MJR_1')
!Note_High_MJR_1.author := 'María-José Ríos'
!Note_High_MJR_1.time := Date('2024-02-29')
!Note_High_MJR_1.type := #EMAIL
!Note_High_MJR_1.comment := 'Sent updated design spec to the team.'
!insert (P_High_MJR_1, Note_High_MJR_1) into ContactContainsNote

!new Note('Note_High_MJR_2')
!Note_High_MJR_2.author := 'Kenji Tanaka'
!Note_High_MJR_2.time := Date('2026-02-23')
!Note_High_MJR_2.type := #CALL
!Note_High_MJR_2.comment := 'Confirmed dependency details over a short call.'
!insert (P_High_MJR_1, Note_High_MJR_2) into ContactContainsNote

!new Company('C_High_NB_1')
!C_High_NB_1.name := 'Nordic Byte AB'
!C_High_NB_1.phone := '+46 8 5000 1212'
!C_High_NB_1.website := 'https://nordicbyte.example.se'
!C_High_NB_1.email := 'info@nordicbyte.example.se'
!C_High_NB_1.industry := 'FinTech'
!insert (AB_GlobalOrg_HighLinks_1, C_High_NB_1) into AddressBookMadeOfContact

!new Address('Addr_High_NB_1')
!Addr_High_NB_1.city := 'Stockholm'
!Addr_High_NB_1.street := 'Sveavägen'
!Addr_High_NB_1.houseNr := '99'
!insert (C_High_NB_1, Addr_High_NB_1) into ContactContainsAddress

!new Address('Addr_High_NB_2')
!Addr_High_NB_2.city := 'Göteborg'
!Addr_High_NB_2.street := 'Avenyn'
!Addr_High_NB_2.houseNr := '5B'
!insert (C_High_NB_1, Addr_High_NB_2) into ContactContainsAddress

!new Address('Addr_High_NB_3')
!Addr_High_NB_3.city := 'Malmö'
!Addr_High_NB_3.street := 'Storgatan'
!Addr_High_NB_3.houseNr := '12'
!insert (C_High_NB_1, Addr_High_NB_3) into ContactContainsAddress

!new Note('Note_High_NB_1')
!Note_High_NB_1.author := 'Ops'
!Note_High_NB_1.time := Date('1999-12-31')
!Note_High_NB_1.type := #CALL
!Note_High_NB_1.comment := 'Legacy support hotline retired.'
!insert (C_High_NB_1, Note_High_NB_1) into ContactContainsNote

!new Note('Note_High_NB_2')
!Note_High_NB_2.author := 'HR'
!Note_High_NB_2.time := Date('2020-01-01')
!Note_High_NB_2.type := #EMAIL
!Note_High_NB_2.comment := 'New onboarding checklist circulated.'
!insert (C_High_NB_1, Note_High_NB_2) into ContactContainsNote

!new Note('Note_High_NB_3')
!Note_High_NB_3.author := 'Laila Hassan'
!Note_High_NB_3.time := Date('2023-05-10')
!Note_High_NB_3.type := #MEETING
!Note_High_NB_3.comment := 'Quarterly review: focus on compliance.'
!insert (C_High_NB_1, Note_High_NB_3) into ContactContainsNote

!new Note('Note_High_NB_4')
!Note_High_NB_4.author := 'Kenji Tanaka'
!Note_High_NB_4.time := Date('2024-02-29')
!Note_High_NB_4.type := #EMAIL
!Note_High_NB_4.comment := 'Submitted leap-day release notes draft.'
!insert (C_High_NB_1, Note_High_NB_4) into ContactContainsNote

!new Note('Note_High_NB_5')
!Note_High_NB_5.author := 'Finance'
!Note_High_NB_5.time := Date('2024-12-31')
!Note_High_NB_5.type := #CALL
!Note_High_NB_5.comment := 'Year-end closing tasks confirmed.'
!insert (C_High_NB_1, Note_High_NB_5) into ContactContainsNote

!new Note('Note_High_NB_6')
!Note_High_NB_6.author := 'Support'
!Note_High_NB_6.time := Date('2025-06-30')
!Note_High_NB_6.type := #EMAIL
!Note_High_NB_6.comment := 'Reported recurring customer issue trend.'
!insert (C_High_NB_1, Note_High_NB_6) into ContactContainsNote

!new Note('Note_High_NB_7')
!Note_High_NB_7.author := 'Security'
!Note_High_NB_7.time := Date('2025-11-01')
!Note_High_NB_7.type := #MEETING
!Note_High_NB_7.comment := 'Incident tabletop exercise completed.'
!insert (C_High_NB_1, Note_High_NB_7) into ContactContainsNote

!new Note('Note_High_NB_8')
!Note_High_NB_8.author := 'Board'
!Note_High_NB_8.time := Date('9999-12-31')
!Note_High_NB_8.type := #MEETING
!Note_High_NB_8.comment := 'Placeholder note dated far in the future (string accepted by model).'
!insert (C_High_NB_1, Note_High_NB_8) into ContactContainsNote

!new Company('C_High_KI_1')
!C_High_KI_1.name := 'Kōchi Innovations Pvt. Ltd.'
!C_High_KI_1.phone := '+91 80 4040 3030'
!C_High_KI_1.website := 'https://kochi-innovations.example.in'
!C_High_KI_1.email := 'contact@kochi-innovations.example.in'
!C_High_KI_1.industry := 'Software R&D'
!insert (AB_GlobalOrg_HighLinks_1, C_High_KI_1) into AddressBookMadeOfContact

!new Relationship('Rel_High_LH_to_KT_1')
!Rel_High_LH_to_KT_1.type := #EMPLOYEE
!insert (P_High_LH_1, Rel_High_LH_to_KT_1) into ContactToRelationship
!insert (Rel_High_LH_to_KT_1, P_High_KT_1) into RelationshipToContact

!new Relationship('Rel_High_LH_to_MJR_1')
!Rel_High_LH_to_MJR_1.type := #EMPLOYEE
!insert (P_High_LH_1, Rel_High_LH_to_MJR_1) into ContactToRelationship
!insert (Rel_High_LH_to_MJR_1, P_High_MJR_1) into RelationshipToContact

!new Relationship('Rel_High_KT_to_LH_1')
!Rel_High_KT_to_LH_1.type := #BOSS
!insert (P_High_KT_1, Rel_High_KT_to_LH_1) into ContactToRelationship
!insert (Rel_High_KT_to_LH_1, P_High_LH_1) into RelationshipToContact

!new Relationship('Rel_High_KT_to_MJR_1')
!Rel_High_KT_to_MJR_1.type := #COWORKER
!insert (P_High_KT_1, Rel_High_KT_to_MJR_1) into ContactToRelationship
!insert (Rel_High_KT_to_MJR_1, P_High_MJR_1) into RelationshipToContact

!new Relationship('Rel_High_MJR_to_LH_1')
!Rel_High_MJR_to_LH_1.type := #BOSS
!insert (P_High_MJR_1, Rel_High_MJR_to_LH_1) into ContactToRelationship
!insert (Rel_High_MJR_to_LH_1, P_High_LH_1) into RelationshipToContact

!new Relationship('Rel_High_MJR_to_KT_1')
!Rel_High_MJR_to_KT_1.type := #COWORKER
!insert (P_High_MJR_1, Rel_High_MJR_to_KT_1) into ContactToRelationship
!insert (Rel_High_MJR_to_KT_1, P_High_KT_1) into RelationshipToContact

!new Relationship('Rel_High_NB_to_LH_1')
!Rel_High_NB_to_LH_1.type := #BOSS
!insert (C_High_NB_1, Rel_High_NB_to_LH_1) into ContactToRelationship
!insert (Rel_High_NB_to_LH_1, P_High_LH_1) into RelationshipToContact

!new Relationship('Rel_High_NB_to_KT_1')
!Rel_High_NB_to_KT_1.type := #EMPLOYEE
!insert (C_High_NB_1, Rel_High_NB_to_KT_1) into ContactToRelationship
!insert (Rel_High_NB_to_KT_1, P_High_KT_1) into RelationshipToContact

!new Relationship('Rel_High_NB_to_MJR_1')
!Rel_High_NB_to_MJR_1.type := #EMPLOYEE
!insert (C_High_NB_1, Rel_High_NB_to_MJR_1) into ContactToRelationship
!insert (Rel_High_NB_to_MJR_1, P_High_MJR_1) into RelationshipToContact

!new Relationship('Rel_High_NB_to_KI_1')
!Rel_High_NB_to_KI_1.type := #SUBDIVISION
!insert (C_High_NB_1, Rel_High_NB_to_KI_1) into ContactToRelationship
!insert (Rel_High_NB_to_KI_1, C_High_KI_1) into RelationshipToContact

!new Relationship('Rel_High_KI_to_LH_1')
!Rel_High_KI_to_LH_1.type := #BOSS
!insert (C_High_KI_1, Rel_High_KI_to_LH_1) into ContactToRelationship
!insert (Rel_High_KI_to_LH_1, P_High_LH_1) into RelationshipToContact
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 171 | 0.00% |
| Multiplicities Errors | 0 | 43 | 0.00% |
| Invariants Errors | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 5 | 0.00% |
| Websites | 1 | 5 | 20.00% |
| Emails | 0 | 5 | 0.00% |
| Addresses | 3 | 5 | 60.00% |

| Invalid Websites | 
|---| 
```

```

| Invalid Addresses | 
|---| 
```
Av. Reforma, 0, Ciudad de México
```
```
Tahrir Square, 1, Cairo
```
```
Avenyn, 5B, Göteborg
```

## Category complex
```
!new AddressBook('AB_CycloneMaiaRelief_1')

!new Person('P_CM_Joao_1')
!P_CM_Joao_1.name := 'Capt. João Pereira'
!P_CM_Joao_1.title := 'Capt.'
!P_CM_Joao_1.phone := '+351 21 555 9081'
!P_CM_Joao_1.website := 'https://joao-pereira.example.pt'
!P_CM_Joao_1.email := 'joao.pereira@example.pt'
!insert (AB_CycloneMaiaRelief_1, P_CM_Joao_1) into AddressBookMadeOfContact

!new Person('P_CM_Aisha_1')
!P_CM_Aisha_1.name := 'Aisha Mwangi'
!P_CM_Aisha_1.title := 'Dr.'
!P_CM_Aisha_1.phone := '+254 20 555 1400'
!P_CM_Aisha_1.website := 'https://aisha-mwangi.example.ke'
!P_CM_Aisha_1.email := 'aisha.mwangi@example.ke'
!insert (AB_CycloneMaiaRelief_1, P_CM_Aisha_1) into AddressBookMadeOfContact

!new Person('P_CM_Lila_1')
!P_CM_Lila_1.name := 'Lila Sørensen'
!P_CM_Lila_1.title := 'Ms.'
!P_CM_Lila_1.phone := '+45 31 44 09 12'
!P_CM_Lila_1.website := 'https://lila-sorensen.example.dk'
!P_CM_Lila_1.email := 'lila.sorensen@example.dk'
!insert (AB_CycloneMaiaRelief_1, P_CM_Lila_1) into AddressBookMadeOfContact

!new Person('P_CM_Suresh_1')
!P_CM_Suresh_1.name := 'Suresh Chatterjee'
!P_CM_Suresh_1.title := 'Mr.'
!P_CM_Suresh_1.phone := '+91 33 4011 2233'
!P_CM_Suresh_1.website := 'https://suresh-chatterjee.example.in'
!P_CM_Suresh_1.email := 'suresh.chatterjee@example.in'
!insert (AB_CycloneMaiaRelief_1, P_CM_Suresh_1) into AddressBookMadeOfContact

!new Person('P_CM_Anika_1')
!P_CM_Anika_1.name := 'Anika Šimkus'
!P_CM_Anika_1.title := 'Ms.'
!P_CM_Anika_1.phone := '+370 5 555 8890'
!P_CM_Anika_1.website := 'https://anika-simkus.example.lt'
!P_CM_Anika_1.email := 'anika.simkus@example.lt'
!insert (AB_CycloneMaiaRelief_1, P_CM_Anika_1) into AddressBookMadeOfContact

!new Person('P_CM_Fatima_1')
!P_CM_Fatima_1.name := 'Fatima Al‑Zahra'
!P_CM_Fatima_1.title := 'Ms.'
!P_CM_Fatima_1.phone := '+971 4 555 3001'
!P_CM_Fatima_1.website := 'https://fatima-alzahra.example.ae'
!P_CM_Fatima_1.email := 'fatima.alzahra@example.ae'
!insert (AB_CycloneMaiaRelief_1, P_CM_Fatima_1) into AddressBookMadeOfContact

!new Company('C_CM_BlueCrescent_1')
!C_CM_BlueCrescent_1.name := 'Blue Crescent Relief NGO'
!C_CM_BlueCrescent_1.industry := 'Humanitarian Aid & Disaster Response'
!C_CM_BlueCrescent_1.phone := '+44 20 7946 7701'
!C_CM_BlueCrescent_1.website := 'https://bluecrescent.example.org'
!C_CM_BlueCrescent_1.email := 'dispatch@bluecrescent.example.org'
!insert (AB_CycloneMaiaRelief_1, C_CM_BlueCrescent_1) into AddressBookMadeOfContact

!new Company('C_CM_BlueCrescent_Coastal_1')
!C_CM_BlueCrescent_Coastal_1.name := 'Blue Crescent Relief NGO — Coastal Field Unit'
!C_CM_BlueCrescent_Coastal_1.industry := 'Humanitarian Field Operations'
!C_CM_BlueCrescent_Coastal_1.phone := '+254 41 555 0190'
!C_CM_BlueCrescent_Coastal_1.website := 'https://coastal-unit.bluecrescent.example.org'
!C_CM_BlueCrescent_Coastal_1.email := 'coastal-unit@bluecrescent.example.org'
!insert (AB_CycloneMaiaRelief_1, C_CM_BlueCrescent_Coastal_1) into AddressBookMadeOfContact

!new Company('C_CM_NakuruHospital_1')
!C_CM_NakuruHospital_1.name := 'Nakuru County Referral Hospital'
!C_CM_NakuruHospital_1.industry := 'Public Healthcare Services'
!C_CM_NakuruHospital_1.phone := '+254 51 221 3400'
!C_CM_NakuruHospital_1.website := 'https://nakuru-hospital.example.ke'
!C_CM_NakuruHospital_1.email := 'admin@nakuru-hospital.example.ke'
!insert (AB_CycloneMaiaRelief_1, C_CM_NakuruHospital_1) into AddressBookMadeOfContact

!new Company('C_CM_BalticSat_1')
!C_CM_BalticSat_1.name := 'BalticSat OÜ'
!C_CM_BalticSat_1.industry := 'Satellite Communications & Remote Sensing'
!C_CM_BalticSat_1.phone := '+372 6 555 012'
!C_CM_BalticSat_1.website := 'https://balticsat.example.ee'
!C_CM_BalticSat_1.email := 'noc@balticsat.example.ee'
!insert (AB_CycloneMaiaRelief_1, C_CM_BalticSat_1) into AddressBookMadeOfContact

!new Company('C_CM_BalticSat_RigaGS_1')
!C_CM_BalticSat_RigaGS_1.name := 'BalticSat Ground Station — Riga'
!C_CM_BalticSat_RigaGS_1.industry := 'Satellite Ground Operations'
!C_CM_BalticSat_RigaGS_1.phone := '+371 6 555 9900'
!C_CM_BalticSat_RigaGS_1.website := 'https://riga-gs.balticsat.example.ee'
!C_CM_BalticSat_RigaGS_1.email := 'riga-gs@balticsat.example.ee'
!insert (AB_CycloneMaiaRelief_1, C_CM_BalticSat_RigaGS_1) into AddressBookMadeOfContact

!new Company('C_CM_KohakuDrones_1')
!C_CM_KohakuDrones_1.name := 'Kōhaku Drone Services K.K.'
!C_CM_KohakuDrones_1.industry := 'UAV Logistics & Mapping'
!C_CM_KohakuDrones_1.phone := '+81 52-555-4401'
!C_CM_KohakuDrones_1.website := 'https://kohaku-drones.example.jp'
!C_CM_KohakuDrones_1.email := 'ops@kohaku-drones.example.jp'
!insert (AB_CycloneMaiaRelief_1, C_CM_KohakuDrones_1) into AddressBookMadeOfContact

!new Company('C_CM_SundarbansCoop_1')
!C_CM_SundarbansCoop_1.name := 'Sundarbans Fisherfolk Cooperative'
!C_CM_SundarbansCoop_1.industry := 'Community Cooperative & Local Transport'
!C_CM_SundarbansCoop_1.phone := '+91 32 5550 1100'
!C_CM_SundarbansCoop_1.website := 'https://sundarbans-coop.example.in'
!C_CM_SundarbansCoop_1.email := 'contact@sundarbans-coop.example.in'
!insert (AB_CycloneMaiaRelief_1, C_CM_SundarbansCoop_1) into AddressBookMadeOfContact

!new Address('Addr_CM_Joao_Lisboa_1')
!Addr_CM_Joao_Lisboa_1.city := 'Lisboa'
!Addr_CM_Joao_Lisboa_1.street := 'Avenida da Liberdade'
!Addr_CM_Joao_Lisboa_1.houseNr := '201'
!insert (P_CM_Joao_1, Addr_CM_Joao_Lisboa_1) into ContactContainsAddress

!new Note('Note_CM_Joao_1')
!Note_CM_Joao_1.author := 'João Pereira'
!Note_CM_Joao_1.time := Date('2026-01-06')
!Note_CM_Joao_1.type := #CALL
!Note_CM_Joao_1.comment := 'Confirmed helicopter slot with coastal authorities; flight plan pending updated weather windows.'
!insert (P_CM_Joao_1, Note_CM_Joao_1) into ContactContainsNote

!new Note('Note_CM_Joao_2')
!Note_CM_Joao_2.author := 'Aisha Mwangi'
!Note_CM_Joao_2.time := Date('2026-01-07')
!Note_CM_Joao_2.type := #EMAIL
!Note_CM_Joao_2.comment := 'Shared med-evac triage criteria; asked to prioritize rural clinics cut off by flooding.'
!insert (P_CM_Joao_1, Note_CM_Joao_2) into ContactContainsNote

!new Address('Addr_CM_Aisha_Nairobi_1')
!Addr_CM_Aisha_Nairobi_1.city := 'Nairobi'
!Addr_CM_Aisha_Nairobi_1.street := 'Ngong Road'
!Addr_CM_Aisha_Nairobi_1.houseNr := '18'
!insert (P_CM_Aisha_1, Addr_CM_Aisha_Nairobi_1) into ContactContainsAddress

!new Address('Addr_CM_Aisha_Nakuru_1')
!Addr_CM_Aisha_Nakuru_1.city := 'Nakuru'
!Addr_CM_Aisha_Nakuru_1.street := 'Kenyatta Avenue'
!Addr_CM_Aisha_Nakuru_1.houseNr := '4'
!insert (P_CM_Aisha_1, Addr_CM_Aisha_Nakuru_1) into ContactContainsAddress

!new Note('Note_CM_Aisha_1')
!Note_CM_Aisha_1.author := 'Aisha Mwangi'
!Note_CM_Aisha_1.time := Date('2026-01-05')
!Note_CM_Aisha_1.type := #MEETING
!Note_CM_Aisha_1.comment := 'Hospital capacity review: oxygen stock low; requested generator fuel and cold-chain boxes for vaccines.'
!insert (P_CM_Aisha_1, Note_CM_Aisha_1) into ContactContainsNote

!new Note('Note_CM_Aisha_2')
!Note_CM_Aisha_2.author := 'Suresh Chatterjee'
!Note_CM_Aisha_2.time := Date('2026-01-08')
!Note_CM_Aisha_2.type := #CALL
!Note_CM_Aisha_2.comment := 'Discussed river crossings and safe landing points for drone drop zones near mangrove islands.'
!insert (P_CM_Aisha_1, Note_CM_Aisha_2) into ContactContainsNote

!new Address('Addr_CM_Lila_Aarhus_1')
!Addr_CM_Lila_Aarhus_1.city := 'Aarhus'
!Addr_CM_Lila_Aarhus_1.street := 'Banegårdsgade'
!Addr_CM_Lila_Aarhus_1.houseNr := '7B'
!insert (P_CM_Lila_1, Addr_CM_Lila_Aarhus_1) into ContactContainsAddress

!new Address('Addr_CM_Suresh_Kolkata_1')
!Addr_CM_Suresh_Kolkata_1.city := 'Kolkata'
!Addr_CM_Suresh_Kolkata_1.street := 'A.J.C. Bose Road'
!Addr_CM_Suresh_Kolkata_1.houseNr := '115'
!insert (P_CM_Suresh_1, Addr_CM_Suresh_Kolkata_1) into ContactContainsAddress

!new Note('Note_CM_Suresh_1')
!Note_CM_Suresh_1.author := 'Suresh Chatterjee'
!Note_CM_Suresh_1.time := Date('2026-01-04')
!Note_CM_Suresh_1.type := #EMAIL
!Note_CM_Suresh_1.comment := 'Sent local-language comms pack for shelter signage; includes Bengali and English templates.'
!insert (P_CM_Suresh_1, Note_CM_Suresh_1) into ContactContainsNote

!new Note('Note_CM_Suresh_2')
!Note_CM_Suresh_2.author := 'Fatima Al‑Zahra'
!Note_CM_Suresh_2.time := Date('2026-01-09')
!Note_CM_Suresh_2.type := #CALL
!Note_CM_Suresh_2.comment := 'Requested SKU list for water purification tablets and packaging constraints for air freight.'
!insert (P_CM_Suresh_1, Note_CM_Suresh_2) into ContactContainsNote

!new Address('Addr_CM_Anika_Vilnius_1')
!Addr_CM_Anika_Vilnius_1.city := 'Vilnius'
!Addr_CM_Anika_Vilnius_1.street := 'Gedimino prospektas'
!Addr_CM_Anika_Vilnius_1.houseNr := '9'
!insert (P_CM_Anika_1, Addr_CM_Anika_Vilnius_1) into ContactContainsAddress

!new Note('Note_CM_Anika_1')
!Note_CM_Anika_1.author := 'Anika Šimkus'
!Note_CM_Anika_1.time := Date('2026-01-06')
!Note_CM_Anika_1.type := #MEETING
!Note_CM_Anika_1.comment := 'Set up daily situation report format; added fields for satellite pass windows and distribution bottlenecks.'
!insert (P_CM_Anika_1, Note_CM_Anika_1) into ContactContainsNote

!new Note('Note_CM_Anika_2')
!Note_CM_Anika_2.author := 'BalticSat NOC'
!Note_CM_Anika_2.time := Date('2026-01-07')
!Note_CM_Anika_2.type := #EMAIL
!Note_CM_Anika_2.comment := 'Provided updated ground-station contact ladder and emergency maintenance procedure.'
!insert (P_CM_Anika_1, Note_CM_Anika_2) into ContactContainsNote

!new Note('Note_CM_Fatima_1')
!Note_CM_Fatima_1.author := 'Fatima Al‑Zahra'
!Note_CM_Fatima_1.time := Date('2026-01-05')
!Note_CM_Fatima_1.type := #EMAIL
!Note_CM_Fatima_1.comment := 'Supplier can deliver 2,000 family hygiene kits; needs confirmed consignee and customs paperwork.'
!insert (P_CM_Fatima_1, Note_CM_Fatima_1) into ContactContainsNote

!new Note('Note_CM_Fatima_2')
!Note_CM_Fatima_2.author := 'Capt. João Pereira'
!Note_CM_Fatima_2.time := Date('2026-01-10')
!Note_CM_Fatima_2.type := #CALL
!Note_CM_Fatima_2.comment := 'Discussed load limits and pallet sizes for airlift; requested weight per carton breakdown.'
!insert (P_CM_Fatima_1, Note_CM_Fatima_2) into ContactContainsNote

!new Address('Addr_CM_BlueCrescent_London_1')
!Addr_CM_BlueCrescent_London_1.city := 'London'
!Addr_CM_BlueCrescent_London_1.street := 'Euston Road'
!Addr_CM_BlueCrescent_London_1.houseNr := '116'
!insert (C_CM_BlueCrescent_1, Addr_CM_BlueCrescent_London_1) into ContactContainsAddress

!new Address('Addr_CM_BlueCrescent_Mombasa_1')
!Addr_CM_BlueCrescent_Mombasa_1.city := 'Mombasa'
!Addr_CM_BlueCrescent_Mombasa_1.street := 'Nkrumah Road'
!Addr_CM_BlueCrescent_Mombasa_1.houseNr := '22'
!insert (C_CM_BlueCrescent_1, Addr_CM_BlueCrescent_Mombasa_1) into ContactContainsAddress

!new Note('Note_CM_BlueCrescent_1')
!Note_CM_BlueCrescent_1.author := 'Duty Officer'
!Note_CM_BlueCrescent_1.time := Date('2026-01-03')
!Note_CM_BlueCrescent_1.type := #MEETING
!Note_CM_BlueCrescent_1.comment := 'Activated incident command structure; logistics, medical, and comms leads assigned.'
!insert (C_CM_BlueCrescent_1, Note_CM_BlueCrescent_1) into ContactContainsNote

!new Note('Note_CM_BlueCrescent_2')
!Note_CM_BlueCrescent_2.author := 'Comms Desk'
!Note_CM_BlueCrescent_2.time := Date('2026-01-08')
!Note_CM_BlueCrescent_2.type := #EMAIL
!Note_CM_BlueCrescent_2.comment := 'Issued guidance: all field updates must include location granularity (district level) and timestamp.'
!insert (C_CM_BlueCrescent_1, Note_CM_BlueCrescent_2) into ContactContainsNote

!new Address('Addr_CM_Coastal_Mombasa_1')
!Addr_CM_Coastal_Mombasa_1.city := 'Mombasa'
!Addr_CM_Coastal_Mombasa_1.street := 'Moi Avenue'
!Addr_CM_Coastal_Mombasa_1.houseNr := '9'
!insert (C_CM_BlueCrescent_Coastal_1, Addr_CM_Coastal_Mombasa_1) into ContactContainsAddress

!new Address('Addr_CM_NakuruHospital_1')
!Addr_CM_NakuruHospital_1.city := 'Nakuru'
!Addr_CM_NakuruHospital_1.street := 'Hospital Road'
!Addr_CM_NakuruHospital_1.houseNr := '1'
!insert (C_CM_NakuruHospital_1, Addr_CM_NakuruHospital_1) into ContactContainsAddress

!new Note('Note_CM_NakuruHospital_1')
!Note_CM_NakuruHospital_1.author := 'Hospital Admin'
!Note_CM_NakuruHospital_1.time := Date('2026-01-06')
!Note_CM_NakuruHospital_1.type := #CALL
!Note_CM_NakuruHospital_1.comment := 'Requested portable water tanks; maternity ward operating on backup generator schedule.'
!insert (C_CM_NakuruHospital_1, Note_CM_NakuruHospital_1) into ContactContainsNote

!new Address('Addr_CM_BalticSat_Tallinn_1')
!Addr_CM_BalticSat_Tallinn_1.city := 'Tallinn'
!Addr_CM_BalticSat_Tallinn_1.street := 'Narva maantee'
!Addr_CM_BalticSat_Tallinn_1.houseNr := '10'
!insert (C_CM_BalticSat_1, Addr_CM_BalticSat_Tallinn_1) into ContactContainsAddress

!new Address('Addr_CM_BalticSat_Riga_1')
!Addr_CM_BalticSat_Riga_1.city := 'Riga'
!Addr_CM_BalticSat_Riga_1.street := 'Brīvības iela'
!Addr_CM_BalticSat_Riga_1.houseNr := '76'
!insert (C_CM_BalticSat_1, Addr_CM_BalticSat_Riga_1) into ContactContainsAddress

!new Address('Addr_CM_BalticSat_Helsinki_1')
!Addr_CM_BalticSat_Helsinki_1.city := 'Helsinki'
!Addr_CM_BalticSat_Helsinki_1.street := 'Itämerenkatu'
!Addr_CM_BalticSat_Helsinki_1.houseNr := '14'
!insert (C_CM_BalticSat_1, Addr_CM_BalticSat_Helsinki_1) into ContactContainsAddress

!new Note('Note_CM_BalticSat_1')
!Note_CM_BalticSat_1.author := 'Network Operations Center'
!Note_CM_BalticSat_1.time := Date('2026-01-04')
!Note_CM_BalticSat_1.type := #EMAIL
!Note_CM_BalticSat_1.comment := 'Issued priority bandwidth allocation for incident response; requires daily renewal confirmation.'
!insert (C_CM_BalticSat_1, Note_CM_BalticSat_1) into ContactContainsNote

!new Address('Addr_CM_RigaGS_1')
!Addr_CM_RigaGS_1.city := 'Riga'
!Addr_CM_RigaGS_1.street := 'Duntes iela'
!Addr_CM_RigaGS_1.houseNr := '23'
!insert (C_CM_BalticSat_RigaGS_1, Addr_CM_RigaGS_1) into ContactContainsAddress

!new Address('Addr_CM_Kohaku_Nagoya_1')
!Addr_CM_Kohaku_Nagoya_1.city := 'Nagoya'
!Addr_CM_Kohaku_Nagoya_1.street := 'Sakae'
!Addr_CM_Kohaku_Nagoya_1.houseNr := '3-2-1'
!insert (C_CM_KohakuDrones_1, Addr_CM_Kohaku_Nagoya_1) into ContactContainsAddress

!new Note('Note_CM_Kohaku_1')
!Note_CM_Kohaku_1.author := 'Flight Ops Lead'
!Note_CM_Kohaku_1.time := Date('2026-01-07')
!Note_CM_Kohaku_1.type := #MEETING
!Note_CM_Kohaku_1.comment := 'Proposed corridor-based drone drops to avoid wildlife sanctuary; needs local liaison sign-off.'
!insert (C_CM_KohakuDrones_1, Note_CM_Kohaku_1) into ContactContainsNote

!new Address('Addr_CM_Sundarbans_Gosaba_1')
!Addr_CM_Sundarbans_Gosaba_1.city := 'Gosaba'
!Addr_CM_Sundarbans_Gosaba_1.street := 'Bazar Road'
!Addr_CM_Sundarbans_Gosaba_1.houseNr := '6'
!insert (C_CM_SundarbansCoop_1, Addr_CM_Sundarbans_Gosaba_1) into ContactContainsAddress

!new Note('Note_CM_Sundarbans_1')
!Note_CM_Sundarbans_1.author := 'Co-op Secretary'
!Note_CM_Sundarbans_1.time := Date('2026-01-05')
!Note_CM_Sundarbans_1.type := #CALL
!Note_CM_Sundarbans_1.comment := 'Boats available for shallow channels; fuel access constrained—needs ration cards or NGO vouchers.'
!insert (C_CM_SundarbansCoop_1, Note_CM_Sundarbans_1) into ContactContainsNote

!new Relationship('Rel_CM_Joao_to_Aisha_Coworker_1')
!Rel_CM_Joao_to_Aisha_Coworker_1.type := #COWORKER
!insert (P_CM_Joao_1, Rel_CM_Joao_to_Aisha_Coworker_1) into ContactToRelationship
!insert (Rel_CM_Joao_to_Aisha_Coworker_1, P_CM_Aisha_1) into RelationshipToContact

!new Relationship('Rel_CM_Joao_to_Fatima_Coworker_1')
!Rel_CM_Joao_to_Fatima_Coworker_1.type := #COWORKER
!insert (P_CM_Joao_1, Rel_CM_Joao_to_Fatima_Coworker_1) into ContactToRelationship
!insert (Rel_CM_Joao_to_Fatima_Coworker_1, P_CM_Fatima_1) into RelationshipToContact

!new Relationship('Rel_CM_Joao_to_BlueCrescent_Employee_1')
!Rel_CM_Joao_to_BlueCrescent_Employee_1.type := #EMPLOYEE
!insert (P_CM_Joao_1, Rel_CM_Joao_to_BlueCrescent_Employee_1) into ContactToRelationship
!insert (Rel_CM_Joao_to_BlueCrescent_Employee_1, C_CM_BlueCrescent_1) into RelationshipToContact

!new Relationship('Rel_CM_Aisha_to_Lila_Boss_1')
!Rel_CM_Aisha_to_Lila_Boss_1.type := #BOSS
!insert (P_CM_Aisha_1, Rel_CM_Aisha_to_Lila_Boss_1) into ContactToRelationship
!insert (Rel_CM_Aisha_to_Lila_Boss_1, P_CM_Lila_1) into RelationshipToContact

!new Relationship('Rel_CM_Aisha_to_Joao_Coworker_1')
!Rel_CM_Aisha_to_Joao_Coworker_1.type := #COWORKER
!insert (P_CM_Aisha_1, Rel_CM_Aisha_to_Joao_Coworker_1) into ContactToRelationship
!insert (Rel_CM_Aisha_to_Joao_Coworker_1, P_CM_Joao_1) into RelationshipToContact

!new Relationship('Rel_CM_Aisha_to_Nakuru_Coworker_1')
!Rel_CM_Aisha_to_Nakuru_Coworker_1.type := #COWORKER
!insert (P_CM_Aisha_1, Rel_CM_Aisha_to_Nakuru_Coworker_1) into ContactToRelationship
!insert (Rel_CM_Aisha_to_Nakuru_Coworker_1, C_CM_NakuruHospital_1) into RelationshipToContact

!new Relationship('Rel_CM_Aisha_to_BlueCrescent_Employee_1')
!Rel_CM_Aisha_to_BlueCrescent_Employee_1.type := #EMPLOYEE
!insert (P_CM_Aisha_1, Rel_CM_Aisha_to_BlueCrescent_Employee_1) into ContactToRelationship
!insert (Rel_CM_Aisha_to_BlueCrescent_Employee_1, C_CM_BlueCrescent_1) into RelationshipToContact

!new Relationship('Rel_CM_Lila_to_Aisha_Employee_1')
!Rel_CM_Lila_to_Aisha_Employee_1.type := #EMPLOYEE
!insert (P_CM_Lila_1, Rel_CM_Lila_to_Aisha_Employee_1) into ContactToRelationship
!insert (Rel_CM_Lila_to_Aisha_Employee_1, P_CM_Aisha_1) into RelationshipToContact

!new Relationship('Rel_CM_Lila_to_Anika_Coworker_1')
!Rel_CM_Lila_to_Anika_Coworker_1.type := #COWORKER
!insert (P_CM_Lila_1, Rel_CM_Lila_to_Anika_Coworker_1) into ContactToRelationship
!insert (Rel_CM_Lila_to_Anika_Coworker_1, P_CM_Anika_1) into RelationshipToContact

!new Relationship('Rel_CM_Suresh_to_Sundarbans_Employee_1')
!Rel_CM_Suresh_to_Sundarbans_Employee_1.type := #EMPLOYEE
!insert (P_CM_Suresh_1, Rel_CM_Suresh_to_Sundarbans_Employee_1) into ContactToRelationship
!insert (Rel_CM_Suresh_to_Sundarbans_Employee_1, C_CM_SundarbansCoop_1) into RelationshipToContact

!new Relationship('Rel_CM_Suresh_to_Kohaku_Coworker_1')
!Rel_CM_Suresh_to_Kohaku_Coworker_1.type := #COWORKER
!insert (P_CM_Suresh_1, Rel_CM_Suresh_to_Kohaku_Coworker_1) into ContactToRelationship
!insert (Rel_CM_Suresh_to_Kohaku_Coworker_1, C_CM_KohakuDrones_1) into RelationshipToContact

!new Relationship('Rel_CM_Suresh_to_Aisha_Coworker_1')
!Rel_CM_Suresh_to_Aisha_Coworker_1.type := #COWORKER
!insert (P_CM_Suresh_1, Rel_CM_Suresh_to_Aisha_Coworker_1) into ContactToRelationship
!insert (Rel_CM_Suresh_to_Aisha_Coworker_1, P_CM_Aisha_1) into RelationshipToContact

!new Relationship('Rel_CM_Anika_to_BalticSat_Employee_1')
!Rel_CM_Anika_to_BalticSat_Employee_1.type := #EMPLOYEE
!insert (P_CM_Anika_1, Rel_CM_Anika_to_BalticSat_Employee_1) into ContactToRelationship
!insert (Rel_CM_Anika_to_BalticSat_Employee_1, C_CM_BalticSat_1) into RelationshipToContact

!new Relationship('Rel_CM_Anika_to_Fatima_Coworker_1')
!Rel_CM_Anika_to_Fatima_Coworker_1.type := #COWORKER
!insert (P_CM_Anika_1, Rel_CM_Anika_to_Fatima_Coworker_1) into ContactToRelationship
!insert (Rel_CM_Anika_to_Fatima_Coworker_1, P_CM_Fatima_1) into RelationshipToContact

!new Relationship('Rel_CM_Anika_to_BlueCrescent_Coworker_1')
!Rel_CM_Anika_to_BlueCrescent_Coworker_1.type := #COWORKER
!insert (P_CM_Anika_1, Rel_CM_Anika_to_BlueCrescent_Coworker_1) into ContactToRelationship
!insert (Rel_CM_Anika_to_BlueCrescent_Coworker_1, C_CM_BlueCrescent_1) into RelationshipToContact

!new Relationship('Rel_CM_Anika_to_Lila_Coworker_1')
!Rel_CM_Anika_to_Lila_Coworker_1.type := #COWORKER
!insert (P_CM_Anika_1, Rel_CM_Anika_to_Lila_Coworker_1) into ContactToRelationship
!insert (Rel_CM_Anika_to_Lila_Coworker_1, P_CM_Lila_1) into RelationshipToContact

!new Relationship('Rel_CM_Fatima_to_BlueCrescent_Employee_1')
!Rel_CM_Fatima_to_BlueCrescent_Employee_1.type := #EMPLOYEE
!insert (P_CM_Fatima_1, Rel_CM_Fatima_to_BlueCrescent_Employee_1) into ContactToRelationship
!insert (Rel_CM_Fatima_to_BlueCrescent_Employee_1, C_CM_BlueCrescent_1) into RelationshipToContact

!new Relationship('Rel_CM_Fatima_to_Joao_Coworker_1')
!Rel_CM_Fatima_to_Joao_Coworker_1.type := #COWORKER
!insert (P_CM_Fatima_1, Rel_CM_Fatima_to_Joao_Coworker_1) into ContactToRelationship
!insert (Rel_CM_Fatima_to_Joao_Coworker_1, P_CM_Joao_1) into RelationshipToContact

!new Relationship('Rel_CM_Fatima_to_Anika_Coworker_1')
!Rel_CM_Fatima_to_Anika_Coworker_1.type := #COWORKER
!insert (P_CM_Fatima_1, Rel_CM_Fatima_to_Anika_Coworker_1) into ContactToRelationship
!insert (Rel_CM_Fatima_to_Anika_Coworker_1, P_CM_Anika_1) into RelationshipToContact

!new Relationship('Rel_CM_Fatima_to_Nakuru_Coworker_1')
!Rel_CM_Fatima_to_Nakuru_Coworker_1.type := #COWORKER
!insert (P_CM_Fatima_1, Rel_CM_Fatima_to_Nakuru_Coworker_1) into ContactToRelationship
!insert (Rel_CM_Fatima_to_Nakuru_Coworker_1, C_CM_NakuruHospital_1) into RelationshipToContact

!new Relationship('Rel_CM_BlueCrescent_to_Coastal_Subdivision_1')
!Rel_CM_BlueCrescent_to_Coastal_Subdivision_1.type := #SUBDIVISION
!insert (C_CM_BlueCrescent_1, Rel_CM_BlueCrescent_to_Coastal_Subdivision_1) into ContactToRelationship
!insert (Rel_CM_BlueCrescent_to_Coastal_Subdivision_1, C_CM_BlueCrescent_Coastal_1) into RelationshipToContact

!new Relationship('Rel_CM_BlueCrescent_to_BalticSat_Coworker_1')
!Rel_CM_BlueCrescent_to_BalticSat_Coworker_1.type := #COWORKER
!insert (C_CM_BlueCrescent_1, Rel_CM_BlueCrescent_to_BalticSat_Coworker_1) into ContactToRelationship
!insert (Rel_CM_BlueCrescent_to_BalticSat_Coworker_1, C_CM_BalticSat_1) into RelationshipToContact

!new Relationship('Rel_CM_BlueCrescent_to_Kohaku_Coworker_1')
!Rel_CM_BlueCrescent_to_Kohaku_Coworker_1.type := #COWORKER
!insert (C_CM_BlueCrescent_1, Rel_CM_BlueCrescent_to_Kohaku_Coworker_1) into ContactToRelationship
!insert (Rel_CM_BlueCrescent_to_Kohaku_Coworker_1, C_CM_KohakuDrones_1) into RelationshipToContact

!new Relationship('Rel_CM_BlueCrescent_to_Nakuru_Coworker_1')
!Rel_CM_BlueCrescent_to_Nakuru_Coworker_1.type := #COWORKER
!insert (C_CM_BlueCrescent_1, Rel_CM_BlueCrescent_to_Nakuru_Coworker_1) into ContactToRelationship
!insert (Rel_CM_BlueCrescent_to_Nakuru_Coworker_1, C_CM_NakuruHospital_1) into RelationshipToContact

!new Relationship('Rel_CM_Coastal_to_Sundarbans_Coworker_1')
!Rel_CM_Coastal_to_Sundarbans_Coworker_1.type := #COWORKER
!insert (C_CM_BlueCrescent_Coastal_1, Rel_CM_Coastal_to_Sundarbans_Coworker_1) into ContactToRelationship
!insert (Rel_CM_Coastal_to_Sundarbans_Coworker_1, C_CM_SundarbansCoop_1) into RelationshipToContact

!new Relationship('Rel_CM_Coastal_to_Nakuru_Coworker_1')
!Rel_CM_Coastal_to_Nakuru_Coworker_1.type := #COWORKER
!insert (C_CM_BlueCrescent_Coastal_1, Rel_CM_Coastal_to_Nakuru_Coworker_1) into ContactToRelationship
!insert (Rel_CM_Coastal_to_Nakuru_Coworker_1, C_CM_NakuruHospital_1) into RelationshipToContact

!new Relationship('Rel_CM_Nakuru_to_BlueCrescent_Coworker_1')
!Rel_CM_Nakuru_to_BlueCrescent_Coworker_1.type := #COWORKER
!insert (C_CM_NakuruHospital_1, Rel_CM_Nakuru_to_BlueCrescent_Coworker_1) into ContactToRelationship
!insert (Rel_CM_Nakuru_to_BlueCrescent_Coworker_1, C_CM_BlueCrescent_1) into RelationshipToContact

!new Relationship('Rel_CM_Nakuru_to_Coastal_Coworker_1')
!Rel_CM_Nakuru_to_Coastal_Coworker_1.type := #COWORKER
!insert (C_CM_NakuruHospital_1, Rel_CM_Nakuru_to_Coastal_Coworker_1) into ContactToRelationship
!insert (Rel_CM_Nakuru_to_Coastal_Coworker_1, C_CM_BlueCrescent_Coastal_1) into RelationshipToContact

!new Relationship('Rel_CM_BalticSat_to_RigaGS_Subdivision_1')
!Rel_CM_BalticSat_to_RigaGS_Subdivision_1.type := #SUBDIVISION
!insert (C_CM_BalticSat_1, Rel_CM_BalticSat_to_RigaGS_Subdivision_1) into ContactToRelationship
!insert (Rel_CM_BalticSat_to_RigaGS_Subdivision_1, C_CM_BalticSat_RigaGS_1) into RelationshipToContact

!new Relationship('Rel_CM_BalticSat_to_BlueCrescent_Coworker_1')
!Rel_CM_BalticSat_to_BlueCrescent_Coworker_1.type := #COWORKER
!insert (C_CM_BalticSat_1, Rel_CM_BalticSat_to_BlueCrescent_Coworker_1) into ContactToRelationship
!insert (Rel_CM_BalticSat_to_BlueCrescent_Coworker_1, C_CM_BlueCrescent_1) into RelationshipToContact

!new Relationship('Rel_CM_RigaGS_to_Anika_Coworker_1')
!Rel_CM_RigaGS_to_Anika_Coworker_1.type := #COWORKER
!insert (C_CM_BalticSat_RigaGS_1, Rel_CM_RigaGS_to_Anika_Coworker_1) into ContactToRelationship
!insert (Rel_CM_RigaGS_to_Anika_Coworker_1, P_CM_Anika_1) into RelationshipToContact

!new Relationship('Rel_CM_Kohaku_to_BlueCrescent_Coworker_1')
!Rel_CM_Kohaku_to_BlueCrescent_Coworker_1.type := #COWORKER
!insert (C_CM_KohakuDrones_1, Rel_CM_Kohaku_to_BlueCrescent_Coworker_1) into ContactToRelationship
!insert (Rel_CM_Kohaku_to_BlueCrescent_Coworker_1, C_CM_BlueCrescent_1) into RelationshipToContact

!new Relationship('Rel_CM_Kohaku_to_Suresh_Coworker_1')
!Rel_CM_Kohaku_to_Suresh_Coworker_1.type := #COWORKER
!insert (C_CM_KohakuDrones_1, Rel_CM_Kohaku_to_Suresh_Coworker_1) into ContactToRelationship
!insert (Rel_CM_Kohaku_to_Suresh_Coworker_1, P_CM_Suresh_1) into RelationshipToContact

!new Relationship('Rel_CM_Kohaku_to_Sundarbans_Coworker_1')
!Rel_CM_Kohaku_to_Sundarbans_Coworker_1.type := #COWORKER
!insert (C_CM_KohakuDrones_1, Rel_CM_Kohaku_to_Sundarbans_Coworker_1) into ContactToRelationship
!insert (Rel_CM_Kohaku_to_Sundarbans_Coworker_1, C_CM_SundarbansCoop_1) into RelationshipToContact

!new Relationship('Rel_CM_Sundarbans_to_Coastal_Coworker_1')
!Rel_CM_Sundarbans_to_Coastal_Coworker_1.type := #COWORKER
!insert (C_CM_SundarbansCoop_1, Rel_CM_Sundarbans_to_Coastal_Coworker_1) into ContactToRelationship
!insert (Rel_CM_Sundarbans_to_Coastal_Coworker_1, C_CM_BlueCrescent_Coastal_1) into RelationshipToContact

!new Relationship('Rel_CM_Sundarbans_to_Kohaku_Coworker_1')
!Rel_CM_Sundarbans_to_Kohaku_Coworker_1.type := #COWORKER
!insert (C_CM_SundarbansCoop_1, Rel_CM_Sundarbans_to_Kohaku_Coworker_1) into ContactToRelationship
!insert (Rel_CM_Sundarbans_to_Kohaku_Coworker_1, C_CM_KohakuDrones_1) into RelationshipToContact
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 412 | 0.00% |
| Multiplicities Errors | 0 | 117 | 0.00% |
| Invariants Errors | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 13 | 0.00% |
| Websites | 0 | 13 | 0.00% |
| Emails | 0 | 13 | 0.00% |
| Addresses | 12 | 16 | 75.00% |

| Invalid Addresses | 
|---| 
```
Bazar Road, 6, Gosaba
```
```
Sakae, 3-2-1, Nagoya
```
```
Euston Road, 116, London
```
```
Avenida da Liberdade, 201, Lisboa
```
```
A.J.C. Bose Road, 115, Kolkata
```
```
Gedimino prospektas, 9, Vilnius
```
```
Moi Avenue, 9, Mombasa
```
```
Kenyatta Avenue, 4, Nakuru
```
```
Ngong Road, 18, Nairobi
```
```
Narva maantee, 10, Tallinn
```
```
Nkrumah Road, 22, Mombasa
```
```
Hospital Road, 1, Nakuru
```

## Category edge
```
!new AddressBook('AB_SolitaryContact_1')

!new Person('P_Solitary_MariaLuz_1')
!P_Solitary_MariaLuz_1.name := 'Sœur María de la Luz'
!P_Solitary_MariaLuz_1.phone := '+8816 000 000 000'
!P_Solitary_MariaLuz_1.website := 'http://exampleonionaddress1234567890.onion'
!P_Solitary_MariaLuz_1.email := 'maria.delaluz@'
!P_Solitary_MariaLuz_1.title := 'Sr.'
!insert (AB_SolitaryContact_1, P_Solitary_MariaLuz_1) into AddressBookMadeOfContact

!new Note('Note_Solitary_1')
!Note_Solitary_1.author := 'María'
!Note_Solitary_1.time := Date('2026-02-23')
!Note_Solitary_1.type := #MEETING
!Note_Solitary_1.comment := 'Met nobody; recorded a “meeting with silence” for routine adherence.'
!insert (P_Solitary_MariaLuz_1, Note_Solitary_1) into ContactContainsNote

!new Note('Note_Solitary_2')
!Note_Solitary_2.author := 'Unknown'
!Note_Solitary_2.time := Date('2026-02-23T25:61:61')
!Note_Solitary_2.type := #EMAIL
!Note_Solitary_2.comment := 'Inbox contains a message with no headers; kept as-is.'
!insert (P_Solitary_MariaLuz_1, Note_Solitary_2) into ContactContainsNote

!new Note('Note_Solitary_3')
!Note_Solitary_3.author := 'Archivist #0'
!Note_Solitary_3.time := Date('0000-00-00')
!Note_Solitary_3.type := #CALL
!Note_Solitary_3.comment := 'Imported from a device that did not store real timestamps.'
!insert (P_Solitary_MariaLuz_1, Note_Solitary_3) into ContactContainsNote

!new Note('Note_Solitary_4')
!Note_Solitary_4.author := 'María'
!Note_Solitary_4.time := Date('1970-01-01')
!Note_Solitary_4.type := #CALL
!Note_Solitary_4.comment := 'Test call to verify the handset still rings.'
!insert (P_Solitary_MariaLuz_1, Note_Solitary_4) into ContactContainsNote

!new Note('Note_Solitary_5')
!Note_Solitary_5.author := 'María / مريم'
!Note_Solitary_5.time := Date('2030-W01-1')
!Note_Solitary_5.type := #EMAIL
!Note_Solitary_5.comment := 'Sent a self-addressed message to keep the account from expiring.'
!insert (P_Solitary_MariaLuz_1, Note_Solitary_5) into ContactContainsNote

!new Note('Note_Solitary_6')
!Note_Solitary_6.author := '自治会 (Neighborhood Council)'
!Note_Solitary_6.time := Date('2024-13-40')
!Note_Solitary_6.type := #MEETING
!Note_Solitary_6.comment := 'Calendar file was corrupted; preserved the original literal value.'
!insert (P_Solitary_MariaLuz_1, Note_Solitary_6) into ContactContainsNote

!new Note('Note_Solitary_7')
!Note_Solitary_7.author := 'María'
!Note_Solitary_7.time := Date('9999-12-31')
!Note_Solitary_7.type := #EMAIL
!Note_Solitary_7.comment := '“If found, forward my archive.” Scheduled for the far future on purpose.'
!insert (P_Solitary_MariaLuz_1, Note_Solitary_7) into ContactContainsNote

!new Note('Note_Solitary_8')
!Note_Solitary_8.author := ''
!Note_Solitary_8.time := Date('2026-02-29')
!Note_Solitary_8.type := #CALL
!Note_Solitary_8.comment := ''
!insert (P_Solitary_MariaLuz_1, Note_Solitary_8) into ContactContainsNote

!new Address('Addr_Solitary_1')
!Addr_Solitary_1.city := 'San Millán de la Cogolla'
!Addr_Solitary_1.houseNr := 'S/N'
!Addr_Solitary_1.street := 'Camino del Monasterio'
!insert (P_Solitary_MariaLuz_1, Addr_Solitary_1) into ContactContainsAddress

!new Address('Addr_Solitary_2')
!Addr_Solitary_2.city := 'Ulaanbaatar'
!Addr_Solitary_2.houseNr := '0'
!Addr_Solitary_2.street := 'Peace Avenue'
!insert (P_Solitary_MariaLuz_1, Addr_Solitary_2) into ContactContainsAddress

!new Address('Addr_Solitary_3')
!Addr_Solitary_3.city := 'Kalaallit Nunaat (Greenland)'
!Addr_Solitary_3.houseNr := 'Igloo-7'
!Addr_Solitary_3.street := 'Fjord Edge'
!insert (P_Solitary_MariaLuz_1, Addr_Solitary_3) into ContactContainsAddress

!new Address('Addr_Solitary_4')
!Addr_Solitary_4.city := '35.6586, 139.7454'
!Addr_Solitary_4.houseNr := 'N/A'
!Addr_Solitary_4.street := 'Marker Post'
!insert (P_Solitary_MariaLuz_1, Addr_Solitary_4) into ContactContainsAddress

!new Address('Addr_Solitary_5')
!Addr_Solitary_5.city := 'Null City'
!Addr_Solitary_5.houseNr := '-0'
!Addr_Solitary_5.street := 'Undefined St'
!insert (P_Solitary_MariaLuz_1, Addr_Solitary_5) into ContactContainsAddress

!new Address('Addr_Solitary_6')
!Addr_Solitary_6.city := 'Chittagong / চট্টগ্রাম'
!Addr_Solitary_6.houseNr := '১২'
!Addr_Solitary_6.street := 'Port Access Rd'
!insert (P_Solitary_MariaLuz_1, Addr_Solitary_6) into ContactContainsAddress

!new Address('Addr_Solitary_7')
!Addr_Solitary_7.city := 'Reunion (La Réunion)'
!Addr_Solitary_7.houseNr := '1BIS'
!Addr_Solitary_7.street := 'Rue des Laves'
!insert (P_Solitary_MariaLuz_1, Addr_Solitary_7) into ContactContainsAddress

!new Address('Addr_Solitary_8')
!Addr_Solitary_8.city := 'Bagan'
!Addr_Solitary_8.houseNr := 'Temple-03'
!Addr_Solitary_8.street := 'Dust Track'
!insert (P_Solitary_MariaLuz_1, Addr_Solitary_8) into ContactContainsAddress

!new Address('Addr_Solitary_9')
!Addr_Solitary_9.city := 'Tromsø'
!Addr_Solitary_9.houseNr := '∞'
!Addr_Solitary_9.street := 'Midnight Sun Way'
!insert (P_Solitary_MariaLuz_1, Addr_Solitary_9) into ContactContainsAddress

!new Address('Addr_Solitary_10')
!Addr_Solitary_10.city := ''
!Addr_Solitary_10.houseNr := ''
!Addr_Solitary_10.street := ''
!insert (P_Solitary_MariaLuz_1, Addr_Solitary_10) into ContactContainsAddress
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 106 | 0.00% |
| Multiplicities Errors | 0 | 19 | 0.00% |
| Invariants Errors | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 1 | 0.00% |
| Websites | 0 | 1 | 0.00% |
| Emails | 1 | 1 | 100.00% |
| Addresses | 10 | 10 | 100.00% |

| Invalid Emails | 
|---| 
```
maria.delaluz@
```

| Invalid Addresses | 
|---| 
```
Camino del Monasterio, S/N, San Millán de la Cogolla
```
```
, , 
```
```
Peace Avenue, 0, Ulaanbaatar
```
```
Fjord Edge, Igloo-7, Kalaallit Nunaat (Greenland)
```
```
Marker Post, N/A, 35.6586, 139.7454
```
```
Undefined St, -0, Null City
```
```
Port Access Rd, ১২, Chittagong / চট্টগ্রাম
```
```
Rue des Laves, 1BIS, Reunion (La Réunion)
```
```
Dust Track, Temple-03, Bagan
```
```
Midnight Sun Way, ∞, Tromsø
```

## Category invalid
```
!new AddressBook('AB4_KauriKayaks_1')

!new Person('P_AB4_HanaRangi_1')
!P_AB4_HanaRangi_1.name := 'Hana Rangi'
!P_AB4_HanaRangi_1.title := 'Ms.'
!P_AB4_HanaRangi_1.phone := '+64 21 447 390'
!P_AB4_HanaRangi_1.website := 'https://hanarangi.example.nz'
!P_AB4_HanaRangi_1.email := 'hana.rangi@example.nz'
!insert (AB4_KauriKayaks_1, P_AB4_HanaRangi_1) into AddressBookMadeOfContact

!new Address('Addr_AB4_AD30_1')
!Addr_AB4_AD30_1.city := 'Whangārei'
!Addr_AB4_AD30_1.street := 'Bank Street'
!Addr_AB4_AD30_1.houseNr := '33'
!insert (P_AB4_HanaRangi_1, Addr_AB4_AD30_1) into ContactContainsAddress

!new Note('Note_AB4_N30_1')
!Note_AB4_N30_1.author := 'Hana Rangi'
!Note_AB4_N30_1.time := Date('2026-02-01')
!Note_AB4_N30_1.type := #EMAIL
!Note_AB4_N30_1.comment := 'Filed GST return; reminder to reconcile invoices before end of month.'
!insert (P_AB4_HanaRangi_1, Note_AB4_N30_1) into ContactContainsNote

!new Note('Note_AB4_N31_1')
!Note_AB4_N31_1.author := 'Moana Te Whaiti'
!Note_AB4_N31_1.time := Date('2026-02-18')
!Note_AB4_N31_1.type := #CALL
!Note_AB4_N31_1.comment := 'Confirmed weekend tour roster; weather contingency plan discussed.'
!insert (P_AB4_HanaRangi_1, Note_AB4_N31_1) into ContactContainsNote

!new Company('C_AB4_KauriKayaks_1')
!C_AB4_KauriKayaks_1.name := 'Kauri Kayaks Ltd.'
!C_AB4_KauriKayaks_1.industry := 'Eco-tourism'
!C_AB4_KauriKayaks_1.phone := '+64 9 430 8802'
!C_AB4_KauriKayaks_1.website := 'https://kaurikayaks.example.nz'
!C_AB4_KauriKayaks_1.email := 'bookings@kaurikayaks.example.nz'
!insert (AB4_KauriKayaks_1, C_AB4_KauriKayaks_1) into AddressBookMadeOfContact

!new Address('Addr_AB4_AD31_1')
!Addr_AB4_AD31_1.city := 'Tutukaka'
!Addr_AB4_AD31_1.street := 'Marina Road'
!Addr_AB4_AD31_1.houseNr := '5'
!insert (C_AB4_KauriKayaks_1, Addr_AB4_AD31_1) into ContactContainsAddress

!new Note('Note_AB4_N32_1')
!Note_AB4_N32_1.author := 'Hana Rangi'
!Note_AB4_N32_1.time := Date('2026-02-06')
!Note_AB4_N32_1.type := #MEETING
!Note_AB4_N32_1.comment := 'Met with council rep about beach access signage; awaiting written approval.'
!insert (C_AB4_KauriKayaks_1, Note_AB4_N32_1) into ContactContainsNote

!new Person('P_AB4_MoanaTeWhaiti_1')
!P_AB4_MoanaTeWhaiti_1.name := 'Moana Te Whaiti'
!P_AB4_MoanaTeWhaiti_1.title := 'Ms.'
!P_AB4_MoanaTeWhaiti_1.phone := '+64 27 602 1199'
!P_AB4_MoanaTeWhaiti_1.website := 'https://moanatewhaiti.example.nz'
!P_AB4_MoanaTeWhaiti_1.email := 'moana.tewhaiti@example.nz'
!insert (AB4_KauriKayaks_1, P_AB4_MoanaTeWhaiti_1) into AddressBookMadeOfContact

!new Note('Note_AB4_N33_1')
!Note_AB4_N33_1.author := 'Hana Rangi'
!Note_AB4_N33_1.time := Date('2026-02-09')
!Note_AB4_N33_1.type := #EMAIL
!Note_AB4_N33_1.comment := 'Sent updated safety checklist and incident reporting procedure.'
!insert (P_AB4_MoanaTeWhaiti_1, Note_AB4_N33_1) into ContactContainsNote

!new Person('P_AB4_LucaBianchi_1')
!P_AB4_LucaBianchi_1.name := 'Luca Bianchi'
!P_AB4_LucaBianchi_1.title := 'Mr.'
!P_AB4_LucaBianchi_1.phone := '+39 06 9480 2211'
!P_AB4_LucaBianchi_1.website := 'https://lucabianchi.example.it'
!P_AB4_LucaBianchi_1.email := 'luca.bianchi@example.it'
!insert (AB4_KauriKayaks_1, P_AB4_LucaBianchi_1) into AddressBookMadeOfContact

!new Address('Addr_AB4_AD32_1')
!Addr_AB4_AD32_1.city := 'Roma'
!Addr_AB4_AD32_1.street := 'Via del Corso'
!Addr_AB4_AD32_1.houseNr := '101'
!insert (P_AB4_LucaBianchi_1, Addr_AB4_AD32_1) into ContactContainsAddress

!new Relationship('Rel_AB4_R30_1')
!Rel_AB4_R30_1.type := #BOSS
!insert (P_AB4_HanaRangi_1, Rel_AB4_R30_1) into ContactToRelationship
!insert (Rel_AB4_R30_1, P_AB4_HanaRangi_1) into RelationshipToContact

!new Relationship('Rel_AB4_R31_1')
!Rel_AB4_R31_1.type := #BOSS
!insert (P_AB4_HanaRangi_1, Rel_AB4_R31_1) into ContactToRelationship
!insert (Rel_AB4_R31_1, P_AB4_MoanaTeWhaiti_1) into RelationshipToContact

!new Relationship('Rel_AB4_R32_1')
!Rel_AB4_R32_1.type := #COWORKER
!insert (P_AB4_HanaRangi_1, Rel_AB4_R32_1) into ContactToRelationship
!insert (Rel_AB4_R32_1, C_AB4_KauriKayaks_1) into RelationshipToContact

!new Relationship('Rel_AB4_R33_1')
!Rel_AB4_R33_1.type := #EMPLOYEE
!insert (C_AB4_KauriKayaks_1, Rel_AB4_R33_1) into ContactToRelationship
!insert (Rel_AB4_R33_1, P_AB4_HanaRangi_1) into RelationshipToContact

!new Relationship('Rel_AB4_R34_1')
!Rel_AB4_R34_1.type := #EMPLOYEE
!insert (C_AB4_KauriKayaks_1, Rel_AB4_R34_1) into ContactToRelationship
!insert (Rel_AB4_R34_1, P_AB4_MoanaTeWhaiti_1) into RelationshipToContact

!new Relationship('Rel_AB4_R35_1')
!Rel_AB4_R35_1.type := #COWORKER
!insert (P_AB4_MoanaTeWhaiti_1, Rel_AB4_R35_1) into ContactToRelationship
!insert (Rel_AB4_R35_1, P_AB4_HanaRangi_1) into RelationshipToContact
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 23 | 0.00% |
| Invariants Errors (Not included on General) | 1 | 1 | 100.00% |

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (1) `Contact::DifferentSourceTarget': FAILED.
```

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 4 | 0.00% |
| Websites | 0 | 4 | 0.00% |
| Emails | 0 | 4 | 0.00% |
| Addresses | 1 | 3 | 33.33% |

| Invalid Addresses | 
|---| 
```
Marina Road, 5, Tutukaka
```

## Generation 3 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 964 | 0.00% |
| Multiplicities Errors | 0 | 224 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 23 | 0.00% |
| Invariants Errors (Not included on General) | 1 | 1 | 100.00% |

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (1) `Contact::DifferentSourceTarget': FAILED.
```

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 31 | 0.00% |
| Websites | 1 | 31 | 3.23% |
| Emails | 1 | 31 | 3.23% |
| Addresses | 29 | 42 | 69.05% |

| Invalid Websites | 
|---| 
```

```

| Invalid Emails | 
|---| 
```
maria.delaluz@
```

| Invalid Addresses | 
|---| 
```
Rue des Écoles, 14, Paris
```
```
Havnegata, 8, Tromsø
```
```
Havnavej, 2, Nuuk
```
```
Av. Reforma, 0, Ciudad de México
```
```
Tahrir Square, 1, Cairo
```
```
Avenyn, 5B, Göteborg
```
```
Bazar Road, 6, Gosaba
```
```
Sakae, 3-2-1, Nagoya
```
```
Euston Road, 116, London
```
```
Avenida da Liberdade, 201, Lisboa
```
```
A.J.C. Bose Road, 115, Kolkata
```
```
Gedimino prospektas, 9, Vilnius
```
```
Moi Avenue, 9, Mombasa
```
```
Kenyatta Avenue, 4, Nakuru
```
```
Ngong Road, 18, Nairobi
```
```
Narva maantee, 10, Tallinn
```
```
Nkrumah Road, 22, Mombasa
```
```
Hospital Road, 1, Nakuru
```
```
Camino del Monasterio, S/N, San Millán de la Cogolla
```
```
, , 
```
```
Peace Avenue, 0, Ulaanbaatar
```
```
Fjord Edge, Igloo-7, Kalaallit Nunaat (Greenland)
```
```
Marker Post, N/A, 35.6586, 139.7454
```
```
Undefined St, -0, Null City
```
```
Port Access Rd, ১২, Chittagong / চট্টগ্রাম
```
```
Rue des Laves, 1BIS, Reunion (La Réunion)
```
```
Dust Track, Temple-03, Bagan
```
```
Midnight Sun Way, ∞, Tromsø
```
```
Marina Road, 5, Tutukaka
```

# Generation 4
## Category baseline
```
!new AddressBook('AB_IndieFilm_SaffronSky_1')

!new Person('P_Saffron_Asha_1')
!P_Saffron_Asha_1.name := 'Asha Rao'
!P_Saffron_Asha_1.phone := '+91 22 5550 7788'
!P_Saffron_Asha_1.website := 'https://asharao.example'
!P_Saffron_Asha_1.email := 'asha.rao@example.in'
!P_Saffron_Asha_1.title := 'Ms.'
!insert (AB_IndieFilm_SaffronSky_1, P_Saffron_Asha_1) into AddressBookMadeOfContact

!new Address('Addr_Saffron_Asha_Mumbai_1')
!Addr_Saffron_Asha_Mumbai_1.street := 'Dr. Annie Besant Road'
!Addr_Saffron_Asha_Mumbai_1.houseNr := '88'
!Addr_Saffron_Asha_Mumbai_1.city := 'Mumbai'
!insert (P_Saffron_Asha_1, Addr_Saffron_Asha_Mumbai_1) into ContactContainsAddress

!new Address('Addr_Saffron_Asha_Mumbai_2')
!Addr_Saffron_Asha_Mumbai_2.street := 'Film City Road'
!Addr_Saffron_Asha_Mumbai_2.houseNr := '3A'
!Addr_Saffron_Asha_Mumbai_2.city := 'Mumbai'
!insert (P_Saffron_Asha_1, Addr_Saffron_Asha_Mumbai_2) into ContactContainsAddress

!new Note('Note_Saffron_Asha_1')
!Note_Saffron_Asha_1.author := 'Asha Rao'
!Note_Saffron_Asha_1.time := Date('2026-02-01')
!Note_Saffron_Asha_1.type := #EMAIL
!Note_Saffron_Asha_1.comment := 'Sent draft shooting schedule to Diego and Chinedu; requested feedback on night exterior sequence.'
!insert (P_Saffron_Asha_1, Note_Saffron_Asha_1) into ContactContainsNote

!new Note('Note_Saffron_Asha_2')
!Note_Saffron_Asha_2.author := 'Kauri Pictures Accounts'
!Note_Saffron_Asha_2.time := Date('2026-02-06')
!Note_Saffron_Asha_2.type := #CALL
!Note_Saffron_Asha_2.comment := 'Confirmed purchase order process and per-diem rates for the Lagos unit.'
!insert (P_Saffron_Asha_1, Note_Saffron_Asha_2) into ContactContainsNote

!new Person('P_Saffron_Diego_1')
!P_Saffron_Diego_1.name := 'Diego Fernández'
!P_Saffron_Diego_1.phone := '+54 11 5555 3010'
!P_Saffron_Diego_1.website := 'https://diegofernandez.example'
!P_Saffron_Diego_1.email := 'diego.fernandez@example.ar'
!P_Saffron_Diego_1.title := 'Mr.'
!insert (AB_IndieFilm_SaffronSky_1, P_Saffron_Diego_1) into AddressBookMadeOfContact

!new Address('Addr_Saffron_Diego_BA_1')
!Addr_Saffron_Diego_BA_1.street := 'Av. Corrientes'
!Addr_Saffron_Diego_BA_1.houseNr := '1860'
!Addr_Saffron_Diego_BA_1.city := 'Buenos Aires'
!insert (P_Saffron_Diego_1, Addr_Saffron_Diego_BA_1) into ContactContainsAddress

!new Note('Note_Saffron_Diego_1')
!Note_Saffron_Diego_1.author := 'Diego Fernández'
!Note_Saffron_Diego_1.time := Date('2026-02-03')
!Note_Saffron_Diego_1.type := #MEETING
!Note_Saffron_Diego_1.comment := 'Creative meeting: locked visual references and approved the handheld approach for the market scene.'
!insert (P_Saffron_Diego_1, Note_Saffron_Diego_1) into ContactContainsNote

!new Person('P_Saffron_Chinedu_1')
!P_Saffron_Chinedu_1.name := 'Chinedu Okafor'
!P_Saffron_Chinedu_1.phone := '+234 1 555 8822'
!P_Saffron_Chinedu_1.website := 'https://chineduokafor.example'
!P_Saffron_Chinedu_1.email := 'chinedu.okafor@example.ng'
!P_Saffron_Chinedu_1.title := 'Mr.'
!insert (AB_IndieFilm_SaffronSky_1, P_Saffron_Chinedu_1) into AddressBookMadeOfContact

!new Note('Note_Saffron_Chinedu_1')
!Note_Saffron_Chinedu_1.author := 'HanRiver Equipment Desk'
!Note_Saffron_Chinedu_1.time := Date('2026-02-04')
!Note_Saffron_Chinedu_1.type := #EMAIL
!Note_Saffron_Chinedu_1.comment := 'Provided lens availability list and insurance requirements for the Seoul pickup.'
!insert (P_Saffron_Chinedu_1, Note_Saffron_Chinedu_1) into ContactContainsNote

!new Note('Note_Saffron_Chinedu_2')
!Note_Saffron_Chinedu_2.author := 'Chinedu Okafor'
!Note_Saffron_Chinedu_2.time := Date('2026-02-09')
!Note_Saffron_Chinedu_2.type := #CALL
!Note_Saffron_Chinedu_2.comment := 'Called Diego to confirm camera test time; requested an extra hour for low-light calibration.'
!insert (P_Saffron_Chinedu_1, Note_Saffron_Chinedu_2) into ContactContainsNote

!new Company('C_Saffron_KauriPics_1')
!C_Saffron_KauriPics_1.name := 'Kauri Pictures Pvt. Ltd.'
!C_Saffron_KauriPics_1.phone := '+91 11 5550 4400'
!C_Saffron_KauriPics_1.website := 'https://kauripictures.example'
!C_Saffron_KauriPics_1.email := 'production@kauripictures.example'
!C_Saffron_KauriPics_1.industry := 'Film and television production'
!insert (AB_IndieFilm_SaffronSky_1, C_Saffron_KauriPics_1) into AddressBookMadeOfContact

!new Address('Addr_Saffron_Kauri_NewDelhi_1')
!Addr_Saffron_Kauri_NewDelhi_1.street := 'Barakhamba Road'
!Addr_Saffron_Kauri_NewDelhi_1.houseNr := '19'
!Addr_Saffron_Kauri_NewDelhi_1.city := 'New Delhi'
!insert (C_Saffron_KauriPics_1, Addr_Saffron_Kauri_NewDelhi_1) into ContactContainsAddress

!new Note('Note_Saffron_Kauri_1')
!Note_Saffron_Kauri_1.author := 'Line Producer'
!Note_Saffron_Kauri_1.time := Date('2026-01-29')
!Note_Saffron_Kauri_1.type := #MEETING
!Note_Saffron_Kauri_1.comment := 'Budget review: approved postproduction scope and reserved contingency for reshoots.'
!insert (C_Saffron_KauriPics_1, Note_Saffron_Kauri_1) into ContactContainsNote

!new Company('C_Saffron_PostUnit_1')
!C_Saffron_PostUnit_1.name := 'Kauri Pictures – Postproduction Unit'
!C_Saffron_PostUnit_1.phone := '+91 80 5550 1212'
!C_Saffron_PostUnit_1.website := 'https://kauripictures.example/post'
!C_Saffron_PostUnit_1.email := 'post@kauripictures.example'
!C_Saffron_PostUnit_1.industry := 'Postproduction (editing, color, sound)'
!insert (AB_IndieFilm_SaffronSky_1, C_Saffron_PostUnit_1) into AddressBookMadeOfContact

!new Address('Addr_Saffron_Post_Bengaluru_1')
!Addr_Saffron_Post_Bengaluru_1.street := 'Church Street'
!Addr_Saffron_Post_Bengaluru_1.houseNr := '40'
!Addr_Saffron_Post_Bengaluru_1.city := 'Bengaluru'
!insert (C_Saffron_PostUnit_1, Addr_Saffron_Post_Bengaluru_1) into ContactContainsAddress

!new Address('Addr_Saffron_Post_Bengaluru_2')
!Addr_Saffron_Post_Bengaluru_2.street := 'Residency Road'
!Addr_Saffron_Post_Bengaluru_2.houseNr := '11'
!Addr_Saffron_Post_Bengaluru_2.city := 'Bengaluru'
!insert (C_Saffron_PostUnit_1, Addr_Saffron_Post_Bengaluru_2) into ContactContainsAddress

!new Company('C_Saffron_HanRiver_1')
!C_Saffron_HanRiver_1.name := 'HanRiver Equipment Co., Ltd.'
!C_Saffron_HanRiver_1.phone := '+82 2 555 6677'
!C_Saffron_HanRiver_1.website := 'https://hanriver-equipment.example'
!C_Saffron_HanRiver_1.email := 'rentals@hanriver-equipment.example'
!C_Saffron_HanRiver_1.industry := 'Cinema camera and lighting rental'
!insert (AB_IndieFilm_SaffronSky_1, C_Saffron_HanRiver_1) into AddressBookMadeOfContact

!new Address('Addr_Saffron_HanRiver_Seoul_1')
!Addr_Saffron_HanRiver_Seoul_1.street := 'Teheran-ro'
!Addr_Saffron_HanRiver_Seoul_1.houseNr := '152'
!Addr_Saffron_HanRiver_Seoul_1.city := 'Seoul'
!insert (C_Saffron_HanRiver_1, Addr_Saffron_HanRiver_Seoul_1) into ContactContainsAddress

!new Note('Note_Saffron_HanRiver_1')
!Note_Saffron_HanRiver_1.author := 'Asha Rao'
!Note_Saffron_HanRiver_1.time := Date('2026-02-02')
!Note_Saffron_HanRiver_1.type := #EMAIL
!Note_Saffron_HanRiver_1.comment := 'Requested quote for 3-week package: camera body, primes, wireless video, and LED kit; asked for bilingual (EN/KR) paperwork.'
!insert (C_Saffron_HanRiver_1, Note_Saffron_HanRiver_1) into ContactContainsNote

!new Relationship('Rel_Saffron_Asha_to_Diego_Boss_1')
!Rel_Saffron_Asha_to_Diego_Boss_1.type := #BOSS
!insert (P_Saffron_Asha_1, Rel_Saffron_Asha_to_Diego_Boss_1) into ContactToRelationship
!insert (Rel_Saffron_Asha_to_Diego_Boss_1, P_Saffron_Diego_1) into RelationshipToContact

!new Relationship('Rel_Saffron_Asha_to_Chinedu_Boss_1')
!Rel_Saffron_Asha_to_Chinedu_Boss_1.type := #BOSS
!insert (P_Saffron_Asha_1, Rel_Saffron_Asha_to_Chinedu_Boss_1) into ContactToRelationship
!insert (Rel_Saffron_Asha_to_Chinedu_Boss_1, P_Saffron_Chinedu_1) into RelationshipToContact

!new Relationship('Rel_Saffron_Asha_to_Kauri_Employee_1')
!Rel_Saffron_Asha_to_Kauri_Employee_1.type := #EMPLOYEE
!insert (P_Saffron_Asha_1, Rel_Saffron_Asha_to_Kauri_Employee_1) into ContactToRelationship
!insert (Rel_Saffron_Asha_to_Kauri_Employee_1, C_Saffron_KauriPics_1) into RelationshipToContact

!new Relationship('Rel_Saffron_Diego_to_Asha_Employee_1')
!Rel_Saffron_Diego_to_Asha_Employee_1.type := #EMPLOYEE
!insert (P_Saffron_Diego_1, Rel_Saffron_Diego_to_Asha_Employee_1) into ContactToRelationship
!insert (Rel_Saffron_Diego_to_Asha_Employee_1, P_Saffron_Asha_1) into RelationshipToContact

!new Relationship('Rel_Saffron_Diego_to_Chinedu_Coworker_1')
!Rel_Saffron_Diego_to_Chinedu_Coworker_1.type := #COWORKER
!insert (P_Saffron_Diego_1, Rel_Saffron_Diego_to_Chinedu_Coworker_1) into ContactToRelationship
!insert (Rel_Saffron_Diego_to_Chinedu_Coworker_1, P_Saffron_Chinedu_1) into RelationshipToContact

!new Relationship('Rel_Saffron_Chinedu_to_Diego_Coworker_1')
!Rel_Saffron_Chinedu_to_Diego_Coworker_1.type := #COWORKER
!insert (P_Saffron_Chinedu_1, Rel_Saffron_Chinedu_to_Diego_Coworker_1) into ContactToRelationship
!insert (Rel_Saffron_Chinedu_to_Diego_Coworker_1, P_Saffron_Diego_1) into RelationshipToContact

!new Relationship('Rel_Saffron_Kauri_to_Post_Subdivision_1')
!Rel_Saffron_Kauri_to_Post_Subdivision_1.type := #SUBDIVISION
!insert (C_Saffron_KauriPics_1, Rel_Saffron_Kauri_to_Post_Subdivision_1) into ContactToRelationship
!insert (Rel_Saffron_Kauri_to_Post_Subdivision_1, C_Saffron_PostUnit_1) into RelationshipToContact

!new Relationship('Rel_Saffron_Kauri_to_Asha_Boss_1')
!Rel_Saffron_Kauri_to_Asha_Boss_1.type := #BOSS
!insert (C_Saffron_KauriPics_1, Rel_Saffron_Kauri_to_Asha_Boss_1) into ContactToRelationship
!insert (Rel_Saffron_Kauri_to_Asha_Boss_1, P_Saffron_Asha_1) into RelationshipToContact

!new Relationship('Rel_Saffron_Post_to_HanRiver_Coworker_1')
!Rel_Saffron_Post_to_HanRiver_Coworker_1.type := #COWORKER
!insert (C_Saffron_PostUnit_1, Rel_Saffron_Post_to_HanRiver_Coworker_1) into ContactToRelationship
!insert (Rel_Saffron_Post_to_HanRiver_Coworker_1, C_Saffron_HanRiver_1) into RelationshipToContact

!new Relationship('Rel_Saffron_HanRiver_to_Post_Employee_1')
!Rel_Saffron_HanRiver_to_Post_Employee_1.type := #EMPLOYEE
!insert (C_Saffron_HanRiver_1, Rel_Saffron_HanRiver_to_Post_Employee_1) into ContactToRelationship
!insert (Rel_Saffron_HanRiver_to_Post_Employee_1, C_Saffron_PostUnit_1) into RelationshipToContact
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 160 | 0.00% |
| Multiplicities Errors | 0 | 40 | 0.00% |
| Invariants Errors | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 6 | 0.00% |
| Websites | 0 | 6 | 0.00% |
| Emails | 0 | 6 | 0.00% |
| Addresses | 3 | 7 | 42.86% |

| Invalid Addresses | 
|---| 
```
Teheran-ro, 152, Seoul
```
```
Film City Road, 3A, Mumbai
```
```
Dr. Annie Besant Road, 88, Mumbai
```

## Category boundary
```
!new AddressBook('AB_MinimumParts_OneLink_1')

!new Person('P_ZW_1')
!P_ZW_1.name := '张伟'
!P_ZW_1.phone := '+86 10 0000 0000'
!P_ZW_1.website := ''
!P_ZW_1.email := 'zhang.wei@example.cn'
!P_ZW_1.title := 'Dr.'
!insert (AB_MinimumParts_OneLink_1, P_ZW_1) into AddressBookMadeOfContact

!new Company('C_Kaitiaki_1')
!C_Kaitiaki_1.name := 'Kaitiaki Energy Ltd.'
!C_Kaitiaki_1.phone := '+64 9 000 0000'
!C_Kaitiaki_1.website := 'https://kaitiaki.example.nz'
!C_Kaitiaki_1.email := ''
!C_Kaitiaki_1.industry := 'Renewable Energy'
!insert (AB_MinimumParts_OneLink_1, C_Kaitiaki_1) into AddressBookMadeOfContact

!new Note('Note_P_ZW_N1_1')
!Note_P_ZW_N1_1.author := ''
!Note_P_ZW_N1_1.time := Date('1970-01-01')
!Note_P_ZW_N1_1.type := #CALL
!Note_P_ZW_N1_1.comment := ''
!insert (P_ZW_1, Note_P_ZW_N1_1) into ContactContainsNote

!new Address('Addr_P_ZW_A1_1')
!Addr_P_ZW_A1_1.city := ''
!Addr_P_ZW_A1_1.street := ''
!Addr_P_ZW_A1_1.houseNr := ''
!insert (P_ZW_1, Addr_P_ZW_A1_1) into ContactContainsAddress

!new Relationship('Rel_P_ZW_R1_1')
!Rel_P_ZW_R1_1.type := #EMPLOYEE
!insert (P_ZW_1, Rel_P_ZW_R1_1) into ContactToRelationship
!insert (Rel_P_ZW_R1_1, C_Kaitiaki_1) into RelationshipToContact
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 30 | 0.00% |
| Multiplicities Errors | 0 | 6 | 0.00% |
| Invariants Errors | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 2 | 0.00% |
| Websites | 1 | 2 | 50.00% |
| Emails | 1 | 2 | 50.00% |
| Addresses | 1 | 1 | 100.00% |

| Invalid Websites | 
|---| 
```

```

| Invalid Emails | 
|---| 
```

```

| Invalid Addresses | 
|---| 
```
, , 
```

## Category complex
```
!new AddressBook('AB_SilkRoadArtifactLoan_2026_1')

!new Person('P_Silk_Nuray_1')
!P_Silk_Nuray_1.name := 'Dr. Nuray Demir'
!P_Silk_Nuray_1.title := 'Dr.'
!P_Silk_Nuray_1.phone := '+90 212 555 0744'
!P_Silk_Nuray_1.website := 'https://nuray-demir.example.tr'
!P_Silk_Nuray_1.email := 'nuray.demir@example.tr'
!insert (AB_SilkRoadArtifactLoan_2026_1, P_Silk_Nuray_1) into AddressBookMadeOfContact

!new Address('Addr_Silk_Nuray_Istanbul_1')
!Addr_Silk_Nuray_Istanbul_1.city := 'İstanbul'
!Addr_Silk_Nuray_Istanbul_1.street := 'Divanyolu Caddesi'
!Addr_Silk_Nuray_Istanbul_1.houseNr := '28'
!insert (P_Silk_Nuray_1, Addr_Silk_Nuray_Istanbul_1) into ContactContainsAddress

!new Note('Note_Silk_Nuray_1')
!Note_Silk_Nuray_1.author := 'Nuray Demir'
!Note_Silk_Nuray_1.time := Date('2026-01-11')
!Note_Silk_Nuray_1.type := #MEETING
!Note_Silk_Nuray_1.comment := 'Loan terms reviewed; requested stricter humidity logging for lacquered items.'
!insert (P_Silk_Nuray_1, Note_Silk_Nuray_1) into ContactContainsNote

!new Note('Note_Silk_Nuray_2')
!Note_Silk_Nuray_2.author := 'Matteo Ricciardi'
!Note_Silk_Nuray_2.time := Date('2026-01-18')
!Note_Silk_Nuray_2.type := #EMAIL
!Note_Silk_Nuray_2.comment := 'Drafted object list + condition-report schedule; awaiting insurer’s valuation confirmation.'
!insert (P_Silk_Nuray_1, Note_Silk_Nuray_2) into ContactContainsNote

!new Person('P_Silk_Matteo_1')
!P_Silk_Matteo_1.name := 'Matteo Ricciardi'
!P_Silk_Matteo_1.title := 'Mr.'
!P_Silk_Matteo_1.phone := '+39 06 555 1902'
!P_Silk_Matteo_1.website := 'https://matteo-ricciardi.example.it'
!P_Silk_Matteo_1.email := 'matteo.ricciardi@example.it'
!insert (AB_SilkRoadArtifactLoan_2026_1, P_Silk_Matteo_1) into AddressBookMadeOfContact

!new Address('Addr_Silk_Matteo_Roma_1')
!Addr_Silk_Matteo_Roma_1.city := 'Roma'
!Addr_Silk_Matteo_Roma_1.street := 'Via del Corso'
!Addr_Silk_Matteo_Roma_1.houseNr := '310'
!insert (P_Silk_Matteo_1, Addr_Silk_Matteo_Roma_1) into ContactContainsAddress

!new Address('Addr_Silk_Matteo_Firenze_1')
!Addr_Silk_Matteo_Firenze_1.city := 'Firenze'
!Addr_Silk_Matteo_Firenze_1.street := 'Borgo Pinti'
!Addr_Silk_Matteo_Firenze_1.houseNr := '14'
!insert (P_Silk_Matteo_1, Addr_Silk_Matteo_Firenze_1) into ContactContainsAddress

!new Note('Note_Silk_Matteo_1')
!Note_Silk_Matteo_1.author := 'Matteo Ricciardi'
!Note_Silk_Matteo_1.time := Date('2026-01-20')
!Note_Silk_Matteo_1.type := #CALL
!Note_Silk_Matteo_1.comment := 'Confirmed crate numbering scheme and photo protocol for seals at each handover.'
!insert (P_Silk_Matteo_1, Note_Silk_Matteo_1) into ContactContainsNote

!new Note('Note_Silk_Matteo_2')
!Note_Silk_Matteo_2.author := 'Aputi Ivalu'
!Note_Silk_Matteo_2.time := Date('2026-01-24')
!Note_Silk_Matteo_2.type := #EMAIL
!Note_Silk_Matteo_2.comment := 'Insurer requires transport route, security plan, and storage address for overnight holds.'
!insert (P_Silk_Matteo_1, Note_Silk_Matteo_2) into ContactContainsNote

!new Person('P_Silk_Priya_1')
!P_Silk_Priya_1.name := 'Priya Nandakumar'
!P_Silk_Priya_1.title := 'Ms.'
!P_Silk_Priya_1.phone := '+91 44 5555 6021'
!P_Silk_Priya_1.website := 'https://priya-nandakumar.example.in'
!P_Silk_Priya_1.email := 'priya.nandakumar@example.in'
!insert (AB_SilkRoadArtifactLoan_2026_1, P_Silk_Priya_1) into AddressBookMadeOfContact

!new Address('Addr_Silk_Priya_Chennai_1')
!Addr_Silk_Priya_Chennai_1.city := 'Chennai'
!Addr_Silk_Priya_Chennai_1.street := 'Anna Salai'
!Addr_Silk_Priya_Chennai_1.houseNr := '77'
!insert (P_Silk_Priya_1, Addr_Silk_Priya_Chennai_1) into ContactContainsAddress

!new Note('Note_Silk_Priya_1')
!Note_Silk_Priya_1.author := 'Priya Nandakumar'
!Note_Silk_Priya_1.time := Date('2026-01-13')
!Note_Silk_Priya_1.type := #MEETING
!Note_Silk_Priya_1.comment := 'Condition check: micro-cracking on one glazed tile; recommend vibration-dampening foam upgrade.'
!insert (P_Silk_Priya_1, Note_Silk_Priya_1) into ContactContainsNote

!new Note('Note_Silk_Priya_2')
!Note_Silk_Priya_2.author := 'Firenze Lab Intake'
!Note_Silk_Priya_2.time := Date('2026-01-28')
!Note_Silk_Priya_2.type := #EMAIL
!Note_Silk_Priya_2.comment := 'Requested solvent restrictions and MSDS for packing materials used near pigments.'
!insert (P_Silk_Priya_1, Note_Silk_Priya_2) into ContactContainsNote

!new Person('P_Silk_Oksana_1')
!P_Silk_Oksana_1.name := 'Oksana Kovalenko'
!P_Silk_Oksana_1.title := 'Ms.'
!P_Silk_Oksana_1.phone := '+48 22 555 8820'
!P_Silk_Oksana_1.website := 'https://oksana-kovalenko.example.pl'
!P_Silk_Oksana_1.email := 'oksana.kovalenko@example.pl'
!insert (AB_SilkRoadArtifactLoan_2026_1, P_Silk_Oksana_1) into AddressBookMadeOfContact

!new Address('Addr_Silk_Oksana_Warszawa_1')
!Addr_Silk_Oksana_Warszawa_1.city := 'Warszawa'
!Addr_Silk_Oksana_Warszawa_1.street := 'ul. Marszałkowska'
!Addr_Silk_Oksana_Warszawa_1.houseNr := '101'
!insert (P_Silk_Oksana_1, Addr_Silk_Oksana_Warszawa_1) into ContactContainsAddress

!new Note('Note_Silk_Oksana_1')
!Note_Silk_Oksana_1.author := 'Oksana Kovalenko'
!Note_Silk_Oksana_1.time := Date('2026-01-22')
!Note_Silk_Oksana_1.type := #CALL
!Note_Silk_Oksana_1.comment := 'Booked climate-controlled air cargo segment; confirmed 24/7 tarmac escort at transfer airport.'
!insert (P_Silk_Oksana_1, Note_Silk_Oksana_1) into ContactContainsNote

!new Note('Note_Silk_Oksana_2')
!Note_Silk_Oksana_2.author := 'Ing. Martín Quispe'
!Note_Silk_Oksana_2.time := Date('2026-02-02')
!Note_Silk_Oksana_2.type := #EMAIL
!Note_Silk_Oksana_2.comment := 'Security vendor needs final gallery layout to place motion sensors and camera coverage for insurer.'
!insert (P_Silk_Oksana_1, Note_Silk_Oksana_2) into ContactContainsNote

!new Person('P_Silk_Martin_1')
!P_Silk_Martin_1.name := 'Ing. Martín Quispe'
!P_Silk_Martin_1.title := 'Ing.'
!P_Silk_Martin_1.phone := '+51 1 555 0091'
!P_Silk_Martin_1.website := 'https://martin-quispe.example.pe'
!P_Silk_Martin_1.email := 'martin.quispe@example.pe'
!insert (AB_SilkRoadArtifactLoan_2026_1, P_Silk_Martin_1) into AddressBookMadeOfContact

!new Note('Note_Silk_Martin_1')
!Note_Silk_Martin_1.author := 'Martín Quispe'
!Note_Silk_Martin_1.time := Date('2026-01-29')
!Note_Silk_Martin_1.type := #MEETING
!Note_Silk_Martin_1.comment := 'Walkthrough with venue ops: proposed tamper sensors on display cases + separate key custody log.'
!insert (P_Silk_Martin_1, Note_Silk_Martin_1) into ContactContainsNote

!new Note('Note_Silk_Martin_2')
!Note_Silk_Martin_2.author := 'Silk Road Heritage Center Ops'
!Note_Silk_Martin_2.time := Date('2026-02-03')
!Note_Silk_Martin_2.type := #CALL
!Note_Silk_Martin_2.comment := 'Requested weekend install window; power outlets and ceiling mounts confirmed.'
!insert (P_Silk_Martin_1, Note_Silk_Martin_2) into ContactContainsNote

!new Person('P_Silk_Aputi_1')
!P_Silk_Aputi_1.name := 'Aputi Ivalu'
!P_Silk_Aputi_1.title := 'Mr.'
!P_Silk_Aputi_1.phone := '+1 867-555-0133'
!P_Silk_Aputi_1.website := 'https://aputi-ivalu.example.ca'
!P_Silk_Aputi_1.email := 'aputi.ivalu@example.ca'
!insert (AB_SilkRoadArtifactLoan_2026_1, P_Silk_Aputi_1) into AddressBookMadeOfContact

!new Address('Addr_Silk_Aputi_Iqaluit_1')
!Addr_Silk_Aputi_Iqaluit_1.city := 'Iqaluit'
!Addr_Silk_Aputi_Iqaluit_1.street := 'Queen Elizabeth Way'
!Addr_Silk_Aputi_Iqaluit_1.houseNr := '12'
!insert (P_Silk_Aputi_1, Addr_Silk_Aputi_Iqaluit_1) into ContactContainsAddress

!new Note('Note_Silk_Aputi_1')
!Note_Silk_Aputi_1.author := 'Aputi Ivalu'
!Note_Silk_Aputi_1.time := Date('2026-01-17')
!Note_Silk_Aputi_1.type := #EMAIL
!Note_Silk_Aputi_1.comment := 'Insurance binder draft: requires dual-signature access policy for storage and nightly alarm test log.'
!insert (P_Silk_Aputi_1, Note_Silk_Aputi_1) into ContactContainsNote

!new Note('Note_Silk_Aputi_2')
!Note_Silk_Aputi_2.author := 'Aputi Ivalu'
!Note_Silk_Aputi_2.time := Date('2026-02-04')
!Note_Silk_Aputi_2.type := #CALL
!Note_Silk_Aputi_2.comment := 'Requested confirmation that storage facility is a separate alarm zone with independent temperature monitoring.'
!insert (P_Silk_Aputi_1, Note_Silk_Aputi_2) into ContactContainsNote

!new Company('C_Silk_BosphorusMuseum_1')
!C_Silk_BosphorusMuseum_1.name := 'Bosphorus Museum of Antiquities'
!C_Silk_BosphorusMuseum_1.industry := 'Museum & Cultural Heritage'
!C_Silk_BosphorusMuseum_1.phone := '+90 212 555 0109'
!C_Silk_BosphorusMuseum_1.website := 'https://bosphorus-museum.example.tr'
!C_Silk_BosphorusMuseum_1.email := 'loans@bosphorus-museum.example.tr'
!insert (AB_SilkRoadArtifactLoan_2026_1, C_Silk_BosphorusMuseum_1) into AddressBookMadeOfContact

!new Address('Addr_Silk_Bosphorus_Istanbul_1')
!Addr_Silk_Bosphorus_Istanbul_1.city := 'İstanbul'
!Addr_Silk_Bosphorus_Istanbul_1.street := 'Alemdar Mahallesi'
!Addr_Silk_Bosphorus_Istanbul_1.houseNr := '6'
!insert (C_Silk_BosphorusMuseum_1, Addr_Silk_Bosphorus_Istanbul_1) into ContactContainsAddress

!new Address('Addr_Silk_Bosphorus_Ankara_1')
!Addr_Silk_Bosphorus_Ankara_1.city := 'Ankara'
!Addr_Silk_Bosphorus_Ankara_1.street := 'Atatürk Bulvarı'
!Addr_Silk_Bosphorus_Ankara_1.houseNr := '142'
!insert (C_Silk_BosphorusMuseum_1, Addr_Silk_Bosphorus_Ankara_1) into ContactContainsAddress

!new Note('Note_Silk_Bosphorus_1')
!Note_Silk_Bosphorus_1.author := 'Loans Office'
!Note_Silk_Bosphorus_1.time := Date('2026-01-09')
!Note_Silk_Bosphorus_1.type := #EMAIL
!Note_Silk_Bosphorus_1.comment := 'Provided object handling restrictions: no direct LED exposure under 3000K for dyed textiles.'
!insert (C_Silk_BosphorusMuseum_1, Note_Silk_Bosphorus_1) into ContactContainsNote

!new Company('C_Silk_HeritageCenter_1')
!C_Silk_HeritageCenter_1.name := 'Silk Road Heritage Center'
!C_Silk_HeritageCenter_1.industry := 'Exhibition Venue & Cultural Programming'
!C_Silk_HeritageCenter_1.phone := '+47 21 555 440'
!C_Silk_HeritageCenter_1.website := 'https://silkroadheritage.example.no'
!C_Silk_HeritageCenter_1.email := 'info@silkroadheritage.example.no'
!insert (AB_SilkRoadArtifactLoan_2026_1, C_Silk_HeritageCenter_1) into AddressBookMadeOfContact

!new Address('Addr_Silk_Heritage_Oslo_1')
!Addr_Silk_Heritage_Oslo_1.city := 'Oslo'
!Addr_Silk_Heritage_Oslo_1.street := 'Karl Johans gate'
!Addr_Silk_Heritage_Oslo_1.houseNr := '15'
!insert (C_Silk_HeritageCenter_1, Addr_Silk_Heritage_Oslo_1) into ContactContainsAddress

!new Note('Note_Silk_Heritage_1')
!Note_Silk_Heritage_1.author := 'Venue Director'
!Note_Silk_Heritage_1.time := Date('2026-01-25')
!Note_Silk_Heritage_1.type := #MEETING
!Note_Silk_Heritage_1.comment := 'Approved after-hours loading dock access; set visitor flow barriers for fragile display cases.'
!insert (C_Silk_HeritageCenter_1, Note_Silk_Heritage_1) into ContactContainsNote

!new Company('C_Silk_StorageAnnex_1')
!C_Silk_StorageAnnex_1.name := 'Silk Road Heritage Center — Secure Storage Annex'
!C_Silk_StorageAnnex_1.industry := 'Collections Storage & Environmental Control'
!C_Silk_StorageAnnex_1.phone := '+47 32 555 118'
!C_Silk_StorageAnnex_1.website := 'https://storage.silkroadheritage.example.no'
!C_Silk_StorageAnnex_1.email := 'storage@silkroadheritage.example.no'
!insert (AB_SilkRoadArtifactLoan_2026_1, C_Silk_StorageAnnex_1) into AddressBookMadeOfContact

!new Address('Addr_Silk_Storage_Drammen_1')
!Addr_Silk_Storage_Drammen_1.city := 'Drammen'
!Addr_Silk_Storage_Drammen_1.street := 'Tollbugata'
!Addr_Silk_Storage_Drammen_1.houseNr := '9'
!insert (C_Silk_StorageAnnex_1, Addr_Silk_Storage_Drammen_1) into ContactContainsAddress

!new Company('C_Silk_AuroraFreight_1')
!C_Silk_AuroraFreight_1.name := 'Aurora Maritime & Air Freight Ltd.'
!C_Silk_AuroraFreight_1.industry := 'Fine-Art Logistics & International Freight'
!C_Silk_AuroraFreight_1.phone := '+31 10 555 7788'
!C_Silk_AuroraFreight_1.website := 'https://aurora-freight.example.com'
!C_Silk_AuroraFreight_1.email := 'controltower@aurora-freight.example.com'
!insert (AB_SilkRoadArtifactLoan_2026_1, C_Silk_AuroraFreight_1) into AddressBookMadeOfContact

!new Address('Addr_Silk_Aurora_Rotterdam_1')
!Addr_Silk_Aurora_Rotterdam_1.city := 'Rotterdam'
!Addr_Silk_Aurora_Rotterdam_1.street := 'Wilhelminakade'
!Addr_Silk_Aurora_Rotterdam_1.houseNr := '901'
!insert (C_Silk_AuroraFreight_1, Addr_Silk_Aurora_Rotterdam_1) into ContactContainsAddress

!new Address('Addr_Silk_Aurora_Singapore_1')
!Addr_Silk_Aurora_Singapore_1.city := 'Singapore'
!Addr_Silk_Aurora_Singapore_1.street := 'Keppel Road'
!Addr_Silk_Aurora_Singapore_1.houseNr := '1'
!insert (C_Silk_AuroraFreight_1, Addr_Silk_Aurora_Singapore_1) into ContactContainsAddress

!new Note('Note_Silk_Aurora_1')
!Note_Silk_Aurora_1.author := 'Customs Desk'
!Note_Silk_Aurora_1.time := Date('2026-01-26')
!Note_Silk_Aurora_1.type := #EMAIL
!Note_Silk_Aurora_1.comment := 'Requested temporary import paperwork + serial numbers for electronic components in display cases.'
!insert (C_Silk_AuroraFreight_1, Note_Silk_Aurora_1) into ContactContainsNote

!new Company('C_Silk_Northstar_1')
!C_Silk_Northstar_1.name := 'Northstar Indemnity PLC'
!C_Silk_Northstar_1.industry := 'Specialty Insurance (Fine Art & Exhibitions)'
!C_Silk_Northstar_1.phone := '+44 20 5555 8811'
!C_Silk_Northstar_1.website := 'https://northstar-indemnity.example.co.uk'
!C_Silk_Northstar_1.email := 'fineart@northstar-indemnity.example.co.uk'
!insert (AB_SilkRoadArtifactLoan_2026_1, C_Silk_Northstar_1) into AddressBookMadeOfContact

!new Address('Addr_Silk_Northstar_London_1')
!Addr_Silk_Northstar_London_1.city := 'London'
!Addr_Silk_Northstar_London_1.street := 'Fenchurch Street'
!Addr_Silk_Northstar_London_1.houseNr := '30'
!insert (C_Silk_Northstar_1, Addr_Silk_Northstar_London_1) into ContactContainsAddress

!new Note('Note_Silk_Northstar_1')
!Note_Silk_Northstar_1.author := 'Underwriting Team'
!Note_Silk_Northstar_1.time := Date('2026-01-16')
!Note_Silk_Northstar_1.type := #MEETING
!Note_Silk_Northstar_1.comment := 'Coverage conditional on secure overnight storage + independent alarm monitoring and incident escalation ladder.'
!insert (C_Silk_Northstar_1, Note_Silk_Northstar_1) into ContactContainsNote

!new Company('C_Silk_FirenzeStudio_1')
!C_Silk_FirenzeStudio_1.name := 'Firenze Conservation Studio S.r.l.'
!C_Silk_FirenzeStudio_1.industry := 'Art Conservation & Restoration'
!C_Silk_FirenzeStudio_1.phone := '+39 055 555 6070'
!C_Silk_FirenzeStudio_1.website := 'https://firenze-conservation.example.it'
!C_Silk_FirenzeStudio_1.email := 'intake@firenze-conservation.example.it'
!insert (AB_SilkRoadArtifactLoan_2026_1, C_Silk_FirenzeStudio_1) into AddressBookMadeOfContact

!new Address('Addr_Silk_FirenzeStudio_Firenze_1')
!Addr_Silk_FirenzeStudio_Firenze_1.city := 'Firenze'
!Addr_Silk_FirenzeStudio_Firenze_1.street := 'Via San Gallo'
!Addr_Silk_FirenzeStudio_Firenze_1.houseNr := '56'
!insert (C_Silk_FirenzeStudio_1, Addr_Silk_FirenzeStudio_Firenze_1) into ContactContainsAddress

!new Note('Note_Silk_FirenzeStudio_1')
!Note_Silk_FirenzeStudio_1.author := 'Lab Manager'
!Note_Silk_FirenzeStudio_1.time := Date('2026-01-27')
!Note_Silk_FirenzeStudio_1.type := #CALL
!Note_Silk_FirenzeStudio_1.comment := 'Confirmed capacity for two emergency treatments; needs high-resolution pre-shipment photos for baseline.'
!insert (C_Silk_FirenzeStudio_1, Note_Silk_FirenzeStudio_1) into ContactContainsNote

!new Company('C_Silk_Qanuk_1')
!C_Silk_Qanuk_1.name := 'Qanuk Security Systems Inc.'
!C_Silk_Qanuk_1.industry := 'Museum Security, Alarms & Access Control'
!C_Silk_Qanuk_1.phone := '+1 416-555-7720'
!C_Silk_Qanuk_1.website := 'https://qanuk-security.example.ca'
!C_Silk_Qanuk_1.email := 'projects@qanuk-security.example.ca'
!insert (AB_SilkRoadArtifactLoan_2026_1, C_Silk_Qanuk_1) into AddressBookMadeOfContact

!new Address('Addr_Silk_Qanuk_Toronto_1')
!Addr_Silk_Qanuk_Toronto_1.city := 'Toronto'
!Addr_Silk_Qanuk_Toronto_1.street := 'King Street West'
!Addr_Silk_Qanuk_Toronto_1.houseNr := '250'
!insert (C_Silk_Qanuk_1, Addr_Silk_Qanuk_Toronto_1) into ContactContainsAddress

!new Address('Addr_Silk_Qanuk_Iqaluit_1')
!Addr_Silk_Qanuk_Iqaluit_1.city := 'Iqaluit'
!Addr_Silk_Qanuk_Iqaluit_1.street := 'Aiviq Street'
!Addr_Silk_Qanuk_Iqaluit_1.houseNr := '3'
!insert (C_Silk_Qanuk_1, Addr_Silk_Qanuk_Iqaluit_1) into ContactContainsAddress

!new Note('Note_Silk_Qanuk_1')
!Note_Silk_Qanuk_1.author := 'Project Coordinator'
!Note_Silk_Qanuk_1.time := Date('2026-02-01')
!Note_Silk_Qanuk_1.type := #EMAIL
!Note_Silk_Qanuk_1.comment := 'Submitted camera placement plan; requested ceiling heights and after-hours access schedule for installers.'
!insert (C_Silk_Qanuk_1, Note_Silk_Qanuk_1) into ContactContainsNote

!new Relationship('Rel_Silk_Nuray_to_Matteo_Boss_1')
!Rel_Silk_Nuray_to_Matteo_Boss_1.type := #BOSS
!insert (P_Silk_Nuray_1, Rel_Silk_Nuray_to_Matteo_Boss_1) into ContactToRelationship
!insert (Rel_Silk_Nuray_to_Matteo_Boss_1, P_Silk_Matteo_1) into RelationshipToContact

!new Relationship('Rel_Silk_Nuray_to_Priya_Boss_1')
!Rel_Silk_Nuray_to_Priya_Boss_1.type := #BOSS
!insert (P_Silk_Nuray_1, Rel_Silk_Nuray_to_Priya_Boss_1) into ContactToRelationship
!insert (Rel_Silk_Nuray_to_Priya_Boss_1, P_Silk_Priya_1) into RelationshipToContact

!new Relationship('Rel_Silk_Nuray_to_Heritage_Coworker_1')
!Rel_Silk_Nuray_to_Heritage_Coworker_1.type := #COWORKER
!insert (P_Silk_Nuray_1, Rel_Silk_Nuray_to_Heritage_Coworker_1) into ContactToRelationship
!insert (Rel_Silk_Nuray_to_Heritage_Coworker_1, C_Silk_HeritageCenter_1) into RelationshipToContact

!new Relationship('Rel_Silk_Nuray_to_Bosphorus_Coworker_1')
!Rel_Silk_Nuray_to_Bosphorus_Coworker_1.type := #COWORKER
!insert (P_Silk_Nuray_1, Rel_Silk_Nuray_to_Bosphorus_Coworker_1) into ContactToRelationship
!insert (Rel_Silk_Nuray_to_Bosphorus_Coworker_1, C_Silk_BosphorusMuseum_1) into RelationshipToContact

!new Relationship('Rel_Silk_Matteo_to_Nuray_Employee_1')
!Rel_Silk_Matteo_to_Nuray_Employee_1.type := #EMPLOYEE
!insert (P_Silk_Matteo_1, Rel_Silk_Matteo_to_Nuray_Employee_1) into ContactToRelationship
!insert (Rel_Silk_Matteo_to_Nuray_Employee_1, P_Silk_Nuray_1) into RelationshipToContact

!new Relationship('Rel_Silk_Matteo_to_Oksana_Coworker_1')
!Rel_Silk_Matteo_to_Oksana_Coworker_1.type := #COWORKER
!insert (P_Silk_Matteo_1, Rel_Silk_Matteo_to_Oksana_Coworker_1) into ContactToRelationship
!insert (Rel_Silk_Matteo_to_Oksana_Coworker_1, P_Silk_Oksana_1) into RelationshipToContact

!new Relationship('Rel_Silk_Matteo_to_Northstar_Coworker_1')
!Rel_Silk_Matteo_to_Northstar_Coworker_1.type := #COWORKER
!insert (P_Silk_Matteo_1, Rel_Silk_Matteo_to_Northstar_Coworker_1) into ContactToRelationship
!insert (Rel_Silk_Matteo_to_Northstar_Coworker_1, C_Silk_Northstar_1) into RelationshipToContact

!new Relationship('Rel_Silk_Matteo_to_Aurora_Coworker_1')
!Rel_Silk_Matteo_to_Aurora_Coworker_1.type := #COWORKER
!insert (P_Silk_Matteo_1, Rel_Silk_Matteo_to_Aurora_Coworker_1) into ContactToRelationship
!insert (Rel_Silk_Matteo_to_Aurora_Coworker_1, C_Silk_AuroraFreight_1) into RelationshipToContact

!new Relationship('Rel_Silk_Priya_to_Nuray_Employee_1')
!Rel_Silk_Priya_to_Nuray_Employee_1.type := #EMPLOYEE
!insert (P_Silk_Priya_1, Rel_Silk_Priya_to_Nuray_Employee_1) into ContactToRelationship
!insert (Rel_Silk_Priya_to_Nuray_Employee_1, P_Silk_Nuray_1) into RelationshipToContact

!new Relationship('Rel_Silk_Priya_to_Firenze_Coworker_1')
!Rel_Silk_Priya_to_Firenze_Coworker_1.type := #COWORKER
!insert (P_Silk_Priya_1, Rel_Silk_Priya_to_Firenze_Coworker_1) into ContactToRelationship
!insert (Rel_Silk_Priya_to_Firenze_Coworker_1, C_Silk_FirenzeStudio_1) into RelationshipToContact

!new Relationship('Rel_Silk_Priya_to_Bosphorus_Coworker_1')
!Rel_Silk_Priya_to_Bosphorus_Coworker_1.type := #COWORKER
!insert (P_Silk_Priya_1, Rel_Silk_Priya_to_Bosphorus_Coworker_1) into ContactToRelationship
!insert (Rel_Silk_Priya_to_Bosphorus_Coworker_1, C_Silk_BosphorusMuseum_1) into RelationshipToContact

!new Relationship('Rel_Silk_Oksana_to_Aurora_Employee_1')
!Rel_Silk_Oksana_to_Aurora_Employee_1.type := #EMPLOYEE
!insert (P_Silk_Oksana_1, Rel_Silk_Oksana_to_Aurora_Employee_1) into ContactToRelationship
!insert (Rel_Silk_Oksana_to_Aurora_Employee_1, C_Silk_AuroraFreight_1) into RelationshipToContact

!new Relationship('Rel_Silk_Oksana_to_Matteo_Coworker_1')
!Rel_Silk_Oksana_to_Matteo_Coworker_1.type := #COWORKER
!insert (P_Silk_Oksana_1, Rel_Silk_Oksana_to_Matteo_Coworker_1) into ContactToRelationship
!insert (Rel_Silk_Oksana_to_Matteo_Coworker_1, P_Silk_Matteo_1) into RelationshipToContact

!new Relationship('Rel_Silk_Oksana_to_Qanuk_Coworker_1')
!Rel_Silk_Oksana_to_Qanuk_Coworker_1.type := #COWORKER
!insert (P_Silk_Oksana_1, Rel_Silk_Oksana_to_Qanuk_Coworker_1) into ContactToRelationship
!insert (Rel_Silk_Oksana_to_Qanuk_Coworker_1, C_Silk_Qanuk_1) into RelationshipToContact

!new Relationship('Rel_Silk_Martin_to_Qanuk_Employee_1')
!Rel_Silk_Martin_to_Qanuk_Employee_1.type := #EMPLOYEE
!insert (P_Silk_Martin_1, Rel_Silk_Martin_to_Qanuk_Employee_1) into ContactToRelationship
!insert (Rel_Silk_Martin_to_Qanuk_Employee_1, C_Silk_Qanuk_1) into RelationshipToContact

!new Relationship('Rel_Silk_Martin_to_Heritage_Coworker_1')
!Rel_Silk_Martin_to_Heritage_Coworker_1.type := #COWORKER
!insert (P_Silk_Martin_1, Rel_Silk_Martin_to_Heritage_Coworker_1) into ContactToRelationship
!insert (Rel_Silk_Martin_to_Heritage_Coworker_1, C_Silk_HeritageCenter_1) into RelationshipToContact

!new Relationship('Rel_Silk_Martin_to_Oksana_Coworker_1')
!Rel_Silk_Martin_to_Oksana_Coworker_1.type := #COWORKER
!insert (P_Silk_Martin_1, Rel_Silk_Martin_to_Oksana_Coworker_1) into ContactToRelationship
!insert (Rel_Silk_Martin_to_Oksana_Coworker_1, P_Silk_Oksana_1) into RelationshipToContact

!new Relationship('Rel_Silk_Aputi_to_Northstar_Employee_1')
!Rel_Silk_Aputi_to_Northstar_Employee_1.type := #EMPLOYEE
!insert (P_Silk_Aputi_1, Rel_Silk_Aputi_to_Northstar_Employee_1) into ContactToRelationship
!insert (Rel_Silk_Aputi_to_Northstar_Employee_1, C_Silk_Northstar_1) into RelationshipToContact

!new Relationship('Rel_Silk_Aputi_to_Matteo_Coworker_1')
!Rel_Silk_Aputi_to_Matteo_Coworker_1.type := #COWORKER
!insert (P_Silk_Aputi_1, Rel_Silk_Aputi_to_Matteo_Coworker_1) into ContactToRelationship
!insert (Rel_Silk_Aputi_to_Matteo_Coworker_1, P_Silk_Matteo_1) into RelationshipToContact

!new Relationship('Rel_Silk_Aputi_to_Storage_Coworker_1')
!Rel_Silk_Aputi_to_Storage_Coworker_1.type := #COWORKER
!insert (P_Silk_Aputi_1, Rel_Silk_Aputi_to_Storage_Coworker_1) into ContactToRelationship
!insert (Rel_Silk_Aputi_to_Storage_Coworker_1, C_Silk_StorageAnnex_1) into RelationshipToContact

!new Relationship('Rel_Silk_Aputi_to_Bosphorus_Coworker_1')
!Rel_Silk_Aputi_to_Bosphorus_Coworker_1.type := #COWORKER
!insert (P_Silk_Aputi_1, Rel_Silk_Aputi_to_Bosphorus_Coworker_1) into ContactToRelationship
!insert (Rel_Silk_Aputi_to_Bosphorus_Coworker_1, C_Silk_BosphorusMuseum_1) into RelationshipToContact

!new Relationship('Rel_Silk_Bosphorus_to_Heritage_Coworker_1')
!Rel_Silk_Bosphorus_to_Heritage_Coworker_1.type := #COWORKER
!insert (C_Silk_BosphorusMuseum_1, Rel_Silk_Bosphorus_to_Heritage_Coworker_1) into ContactToRelationship
!insert (Rel_Silk_Bosphorus_to_Heritage_Coworker_1, C_Silk_HeritageCenter_1) into RelationshipToContact

!new Relationship('Rel_Silk_Bosphorus_to_Northstar_Coworker_1')
!Rel_Silk_Bosphorus_to_Northstar_Coworker_1.type := #COWORKER
!insert (C_Silk_BosphorusMuseum_1, Rel_Silk_Bosphorus_to_Northstar_Coworker_1) into ContactToRelationship
!insert (Rel_Silk_Bosphorus_to_Northstar_Coworker_1, C_Silk_Northstar_1) into RelationshipToContact

!new Relationship('Rel_Silk_Bosphorus_to_Firenze_Coworker_1')
!Rel_Silk_Bosphorus_to_Firenze_Coworker_1.type := #COWORKER
!insert (C_Silk_BosphorusMuseum_1, Rel_Silk_Bosphorus_to_Firenze_Coworker_1) into ContactToRelationship
!insert (Rel_Silk_Bosphorus_to_Firenze_Coworker_1, C_Silk_FirenzeStudio_1) into RelationshipToContact

!new Relationship('Rel_Silk_Heritage_to_Storage_Subdivision_1')
!Rel_Silk_Heritage_to_Storage_Subdivision_1.type := #SUBDIVISION
!insert (C_Silk_HeritageCenter_1, Rel_Silk_Heritage_to_Storage_Subdivision_1) into ContactToRelationship
!insert (Rel_Silk_Heritage_to_Storage_Subdivision_1, C_Silk_StorageAnnex_1) into RelationshipToContact

!new Relationship('Rel_Silk_Heritage_to_Aurora_Coworker_1')
!Rel_Silk_Heritage_to_Aurora_Coworker_1.type := #COWORKER
!insert (C_Silk_HeritageCenter_1, Rel_Silk_Heritage_to_Aurora_Coworker_1) into ContactToRelationship
!insert (Rel_Silk_Heritage_to_Aurora_Coworker_1, C_Silk_AuroraFreight_1) into RelationshipToContact

!new Relationship('Rel_Silk_Heritage_to_Qanuk_Coworker_1')
!Rel_Silk_Heritage_to_Qanuk_Coworker_1.type := #COWORKER
!insert (C_Silk_HeritageCenter_1, Rel_Silk_Heritage_to_Qanuk_Coworker_1) into ContactToRelationship
!insert (Rel_Silk_Heritage_to_Qanuk_Coworker_1, C_Silk_Qanuk_1) into RelationshipToContact

!new Relationship('Rel_Silk_Heritage_to_Bosphorus_Coworker_1')
!Rel_Silk_Heritage_to_Bosphorus_Coworker_1.type := #COWORKER
!insert (C_Silk_HeritageCenter_1, Rel_Silk_Heritage_to_Bosphorus_Coworker_1) into ContactToRelationship
!insert (Rel_Silk_Heritage_to_Bosphorus_Coworker_1, C_Silk_BosphorusMuseum_1) into RelationshipToContact

!new Relationship('Rel_Silk_Storage_to_Northstar_Coworker_1')
!Rel_Silk_Storage_to_Northstar_Coworker_1.type := #COWORKER
!insert (C_Silk_StorageAnnex_1, Rel_Silk_Storage_to_Northstar_Coworker_1) into ContactToRelationship
!insert (Rel_Silk_Storage_to_Northstar_Coworker_1, C_Silk_Northstar_1) into RelationshipToContact

!new Relationship('Rel_Silk_Aurora_to_Heritage_Coworker_1')
!Rel_Silk_Aurora_to_Heritage_Coworker_1.type := #COWORKER
!insert (C_Silk_AuroraFreight_1, Rel_Silk_Aurora_to_Heritage_Coworker_1) into ContactToRelationship
!insert (Rel_Silk_Aurora_to_Heritage_Coworker_1, C_Silk_HeritageCenter_1) into RelationshipToContact

!new Relationship('Rel_Silk_Aurora_to_Northstar_Coworker_1')
!Rel_Silk_Aurora_to_Northstar_Coworker_1.type := #COWORKER
!insert (C_Silk_AuroraFreight_1, Rel_Silk_Aurora_to_Northstar_Coworker_1) into ContactToRelationship
!insert (Rel_Silk_Aurora_to_Northstar_Coworker_1, C_Silk_Northstar_1) into RelationshipToContact

!new Relationship('Rel_Silk_Northstar_to_Bosphorus_Coworker_1')
!Rel_Silk_Northstar_to_Bosphorus_Coworker_1.type := #COWORKER
!insert (C_Silk_Northstar_1, Rel_Silk_Northstar_to_Bosphorus_Coworker_1) into ContactToRelationship
!insert (Rel_Silk_Northstar_to_Bosphorus_Coworker_1, C_Silk_BosphorusMuseum_1) into RelationshipToContact

!new Relationship('Rel_Silk_Northstar_to_Aurora_Coworker_1')
!Rel_Silk_Northstar_to_Aurora_Coworker_1.type := #COWORKER
!insert (C_Silk_Northstar_1, Rel_Silk_Northstar_to_Aurora_Coworker_1) into ContactToRelationship
!insert (Rel_Silk_Northstar_to_Aurora_Coworker_1, C_Silk_AuroraFreight_1) into RelationshipToContact

!new Relationship('Rel_Silk_Northstar_to_Storage_Coworker_1')
!Rel_Silk_Northstar_to_Storage_Coworker_1.type := #COWORKER
!insert (C_Silk_Northstar_1, Rel_Silk_Northstar_to_Storage_Coworker_1) into ContactToRelationship
!insert (Rel_Silk_Northstar_to_Storage_Coworker_1, C_Silk_StorageAnnex_1) into RelationshipToContact

!new Relationship('Rel_Silk_Firenze_to_Priya_Coworker_1')
!Rel_Silk_Firenze_to_Priya_Coworker_1.type := #COWORKER
!insert (C_Silk_FirenzeStudio_1, Rel_Silk_Firenze_to_Priya_Coworker_1) into ContactToRelationship
!insert (Rel_Silk_Firenze_to_Priya_Coworker_1, P_Silk_Priya_1) into RelationshipToContact

!new Relationship('Rel_Silk_Firenze_to_Bosphorus_Coworker_1')
!Rel_Silk_Firenze_to_Bosphorus_Coworker_1.type := #COWORKER
!insert (C_Silk_FirenzeStudio_1, Rel_Silk_Firenze_to_Bosphorus_Coworker_1) into ContactToRelationship
!insert (Rel_Silk_Firenze_to_Bosphorus_Coworker_1, C_Silk_BosphorusMuseum_1) into RelationshipToContact

!new Relationship('Rel_Silk_Qanuk_to_Heritage_Coworker_1')
!Rel_Silk_Qanuk_to_Heritage_Coworker_1.type := #COWORKER
!insert (C_Silk_Qanuk_1, Rel_Silk_Qanuk_to_Heritage_Coworker_1) into ContactToRelationship
!insert (Rel_Silk_Qanuk_to_Heritage_Coworker_1, C_Silk_HeritageCenter_1) into RelationshipToContact

!new Relationship('Rel_Silk_Qanuk_to_Northstar_Coworker_1')
!Rel_Silk_Qanuk_to_Northstar_Coworker_1.type := #COWORKER
!insert (C_Silk_Qanuk_1, Rel_Silk_Qanuk_to_Northstar_Coworker_1) into ContactToRelationship
!insert (Rel_Silk_Qanuk_to_Northstar_Coworker_1, C_Silk_Northstar_1) into RelationshipToContact
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 432 | 0.00% |
| Multiplicities Errors | 0 | 123 | 0.00% |
| Invariants Errors | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 13 | 0.00% |
| Websites | 0 | 13 | 0.00% |
| Emails | 0 | 13 | 0.00% |
| Addresses | 8 | 16 | 50.00% |

| Invalid Addresses | 
|---| 
```
ul. Marszałkowska, 101, Warszawa
```
```
Borgo Pinti, 14, Firenze
```
```
Via San Gallo, 56, Firenze
```
```
Queen Elizabeth Way, 12, Iqaluit
```
```
Keppel Road, 1, Singapore
```
```
Aiviq Street, 3, Iqaluit
```
```
Alemdar Mahallesi, 6, İstanbul
```
```
Anna Salai, 77, Chennai
```

## Category edge
```
!new AddressBook('AB_MinimalPairParadox_1')

!new Company('C_MinPair_Bureau_1')
!C_MinPair_Bureau_1.name := 'Bureau of Temporary Authority'
!C_MinPair_Bureau_1.phone := '000'
!C_MinPair_Bureau_1.website := 'http://'
!C_MinPair_Bureau_1.email := 'noreply@bureau'
!C_MinPair_Bureau_1.industry := 'Regulatory fiction'
!insert (AB_MinimalPairParadox_1, C_MinPair_Bureau_1) into AddressBookMadeOfContact

!new Person('P_MinPair_Lampros_1')
!P_MinPair_Lampros_1.name := 'Λάμπρος “Lampros” 𐍈'
!P_MinPair_Lampros_1.phone := '+30 000 000 0000'
!P_MinPair_Lampros_1.website := 'about:blank'
!P_MinPair_Lampros_1.email := 'lampros@[127.0.0.1]'
!P_MinPair_Lampros_1.title := 'Prof.'
!insert (AB_MinimalPairParadox_1, P_MinPair_Lampros_1) into AddressBookMadeOfContact

!new Relationship('Rel_MinPair_C1_R1_1')
!Rel_MinPair_C1_R1_1.type := #BOSS
!insert (C_MinPair_Bureau_1, Rel_MinPair_C1_R1_1) into ContactToRelationship
!insert (Rel_MinPair_C1_R1_1, P_MinPair_Lampros_1) into RelationshipToContact

!new Relationship('Rel_MinPair_C1_R2_1')
!Rel_MinPair_C1_R2_1.type := #EMPLOYEE
!insert (C_MinPair_Bureau_1, Rel_MinPair_C1_R2_1) into ContactToRelationship
!insert (Rel_MinPair_C1_R2_1, P_MinPair_Lampros_1) into RelationshipToContact

!new Relationship('Rel_MinPair_C1_R3_1')
!Rel_MinPair_C1_R3_1.type := #COWORKER
!insert (C_MinPair_Bureau_1, Rel_MinPair_C1_R3_1) into ContactToRelationship
!insert (Rel_MinPair_C1_R3_1, P_MinPair_Lampros_1) into RelationshipToContact

!new Relationship('Rel_MinPair_C1_R4_1')
!Rel_MinPair_C1_R4_1.type := #SUBDIVISION
!insert (C_MinPair_Bureau_1, Rel_MinPair_C1_R4_1) into ContactToRelationship
!insert (Rel_MinPair_C1_R4_1, P_MinPair_Lampros_1) into RelationshipToContact

!new Relationship('Rel_MinPair_C1_R5_1')
!Rel_MinPair_C1_R5_1.type := #BOSS
!insert (C_MinPair_Bureau_1, Rel_MinPair_C1_R5_1) into ContactToRelationship
!insert (Rel_MinPair_C1_R5_1, P_MinPair_Lampros_1) into RelationshipToContact

!new Relationship('Rel_MinPair_C1_R6_1')
!Rel_MinPair_C1_R6_1.type := #EMPLOYEE
!insert (C_MinPair_Bureau_1, Rel_MinPair_C1_R6_1) into ContactToRelationship
!insert (Rel_MinPair_C1_R6_1, P_MinPair_Lampros_1) into RelationshipToContact

!new Relationship('Rel_MinPair_C2_R1_1')
!Rel_MinPair_C2_R1_1.type := #BOSS
!insert (P_MinPair_Lampros_1, Rel_MinPair_C2_R1_1) into ContactToRelationship
!insert (Rel_MinPair_C2_R1_1, C_MinPair_Bureau_1) into RelationshipToContact

!new Relationship('Rel_MinPair_C2_R2_1')
!Rel_MinPair_C2_R2_1.type := #EMPLOYEE
!insert (P_MinPair_Lampros_1, Rel_MinPair_C2_R2_1) into ContactToRelationship
!insert (Rel_MinPair_C2_R2_1, C_MinPair_Bureau_1) into RelationshipToContact

!new Relationship('Rel_MinPair_C2_R3_1')
!Rel_MinPair_C2_R3_1.type := #COWORKER
!insert (P_MinPair_Lampros_1, Rel_MinPair_C2_R3_1) into ContactToRelationship
!insert (Rel_MinPair_C2_R3_1, C_MinPair_Bureau_1) into RelationshipToContact

!new Relationship('Rel_MinPair_C2_R4_1')
!Rel_MinPair_C2_R4_1.type := #SUBDIVISION
!insert (P_MinPair_Lampros_1, Rel_MinPair_C2_R4_1) into ContactToRelationship
!insert (Rel_MinPair_C2_R4_1, C_MinPair_Bureau_1) into RelationshipToContact

!new Relationship('Rel_MinPair_C2_R5_1')
!Rel_MinPair_C2_R5_1.type := #COWORKER
!insert (P_MinPair_Lampros_1, Rel_MinPair_C2_R5_1) into ContactToRelationship
!insert (Rel_MinPair_C2_R5_1, C_MinPair_Bureau_1) into RelationshipToContact
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 59 | 0.00% |
| Multiplicities Errors | 0 | 24 | 0.00% |
| Invariants Errors | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 1 | 2 | 50.00% |
| Websites | 2 | 2 | 100.00% |
| Emails | 2 | 2 | 100.00% |
| Addresses | 0 | 0 | 0.00% |

| Invalid Phones | 
|---| 
```
000
```

| Invalid Websites | 
|---| 
```
http://
```
```
about:blank
```

| Invalid Emails | 
|---| 
```
noreply@bureau
```
```
lampros@[127.0.0.1]
```

## Category invalid
```
!new AddressBook('AB5_NairobiFilmCrew_1')

!new Person('P_AB5_Wanjiku_1')
!P_AB5_Wanjiku_1.name := 'Wanjiku Njoroge'
!P_AB5_Wanjiku_1.title := 'Ms.'
!P_AB5_Wanjiku_1.phone := '+254 712 345 678'
!P_AB5_Wanjiku_1.website := 'https://wanjiku-njoroge.example.ke'
!P_AB5_Wanjiku_1.email := 'wanjiku.njoroge@example.ke'
!insert (AB5_NairobiFilmCrew_1, P_AB5_Wanjiku_1) into AddressBookMadeOfContact

!new Address('Addr_AB5_AD50_1')
!Addr_AB5_AD50_1.city := 'Nairobi'
!Addr_AB5_AD50_1.street := 'Kenyatta Avenue'
!Addr_AB5_AD50_1.houseNr := '17'
!insert (P_AB5_Wanjiku_1, Addr_AB5_AD50_1) into ContactContainsAddress

!new Note('Note_AB5_N50_1')
!Note_AB5_N50_1.author := 'Wanjiku Njoroge'
!Note_AB5_N50_1.time := Date('2026-02-20')
!Note_AB5_N50_1.type := #MEETING
!Note_AB5_N50_1.comment := 'Pre-production meeting: confirmed shoot dates, crew availability, and equipment pickup window.'
!insert (P_AB5_Wanjiku_1, Note_AB5_N50_1) into ContactContainsNote

!new Person('P_AB5_Aarav_1')
!P_AB5_Aarav_1.name := 'Aarav Patel'
!P_AB5_Aarav_1.title := 'Mr.'
!P_AB5_Aarav_1.phone := '+254 733 901 224'
!P_AB5_Aarav_1.website := 'https://aaravpatel.example'
!P_AB5_Aarav_1.email := 'aarav.patel@example.com'
!insert (AB5_NairobiFilmCrew_1, P_AB5_Aarav_1) into AddressBookMadeOfContact

!new Address('Addr_AB5_AD51_1')
!Addr_AB5_AD51_1.city := 'Nairobi'
!Addr_AB5_AD51_1.street := 'Ngong Road'
!Addr_AB5_AD51_1.houseNr := '88'
!insert (P_AB5_Aarav_1, Addr_AB5_AD51_1) into ContactContainsAddress

!new Person('P_AB5_Zainab_1')
!P_AB5_Zainab_1.name := 'Zainab Hassan'
!P_AB5_Zainab_1.title := 'Ms.'
!P_AB5_Zainab_1.phone := '+254 790 555 041'
!P_AB5_Zainab_1.website := 'https://zainabhassan.example'
!P_AB5_Zainab_1.email := 'zainab.hassan@example.com'
!insert (AB5_NairobiFilmCrew_1, P_AB5_Zainab_1) into AddressBookMadeOfContact

!new Address('Addr_AB5_AD52_1')
!Addr_AB5_AD52_1.city := 'Mombasa'
!Addr_AB5_AD52_1.street := 'Moi Avenue'
!Addr_AB5_AD52_1.houseNr := '42'
!insert (P_AB5_Zainab_1, Addr_AB5_AD52_1) into ContactContainsAddress

!new Note('Note_AB5_N51_1')
!Note_AB5_N51_1.author := 'Wanjiku Njoroge'
!Note_AB5_N51_1.time := Date('2026-02-21')
!Note_AB5_N51_1.type := #CALL
!Note_AB5_N51_1.comment := 'Zainab requested a lightweight gimbal; confirmed it’s available from rental house.'
!insert (P_AB5_Zainab_1, Note_AB5_N51_1) into ContactContainsNote

!new Company('C_AB5_SavannaPost_1')
!C_AB5_SavannaPost_1.name := 'Savanna Post Studio'
!C_AB5_SavannaPost_1.industry := 'Film post-production'
!C_AB5_SavannaPost_1.phone := '+254 20 555 8800'
!C_AB5_SavannaPost_1.website := 'https://savannapost.example.ke'
!C_AB5_SavannaPost_1.email := 'bookings@savannapost.example.ke'
!insert (AB5_NairobiFilmCrew_1, C_AB5_SavannaPost_1) into AddressBookMadeOfContact

!new Address('Addr_AB5_AD53_1')
!Addr_AB5_AD53_1.city := 'Nairobi'
!Addr_AB5_AD53_1.street := 'Chiromo Lane'
!Addr_AB5_AD53_1.houseNr := '6'
!insert (C_AB5_SavannaPost_1, Addr_AB5_AD53_1) into ContactContainsAddress

!new Note('Note_AB5_N52_1')
!Note_AB5_N52_1.author := 'Studio Coordinator'
!Note_AB5_N52_1.time := Date('2026-02-22')
!Note_AB5_N52_1.type := #EMAIL
!Note_AB5_N52_1.comment := 'Reserved color grading suite for March 3–5; deposit invoice sent.'
!insert (C_AB5_SavannaPost_1, Note_AB5_N52_1) into ContactContainsNote

!new Company('C_AB5_SavannaSound_1')
!C_AB5_SavannaSound_1.name := 'Savanna Post Studio – Sound Department'
!C_AB5_SavannaSound_1.industry := 'Audio post-production'
!C_AB5_SavannaSound_1.phone := '+254 20 555 8801'
!C_AB5_SavannaSound_1.website := 'https://savannapost.example.ke/sound'
!C_AB5_SavannaSound_1.email := 'sound@savannapost.example.ke'
!insert (AB5_NairobiFilmCrew_1, C_AB5_SavannaSound_1) into AddressBookMadeOfContact

!new Relationship('Rel_AB5_R50_1')
!Rel_AB5_R50_1.type := #EMPLOYEE
!insert (P_AB5_Wanjiku_1, Rel_AB5_R50_1) into ContactToRelationship
!insert (Rel_AB5_R50_1, P_AB5_Aarav_1) into RelationshipToContact
!insert (Rel_AB5_R50_1, P_AB5_Zainab_1) into RelationshipToContact

!new Relationship('Rel_AB5_R51_1')
!Rel_AB5_R51_1.type := #COWORKER
!insert (P_AB5_Wanjiku_1, Rel_AB5_R51_1) into ContactToRelationship
!insert (Rel_AB5_R51_1, C_AB5_SavannaPost_1) into RelationshipToContact

!new Relationship('Rel_AB5_R52_1')
!Rel_AB5_R52_1.type := #COWORKER
!insert (P_AB5_Aarav_1, Rel_AB5_R52_1) into ContactToRelationship
!insert (Rel_AB5_R52_1, P_AB5_Zainab_1) into RelationshipToContact

!new Relationship('Rel_AB5_R53_1')
!Rel_AB5_R53_1.type := #SUBDIVISION
!insert (C_AB5_SavannaPost_1, Rel_AB5_R53_1) into ContactToRelationship
!insert (Rel_AB5_R53_1, C_AB5_SavannaSound_1) into RelationshipToContact
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 21 | 4.76% |
| Invariants Errors (Not included on General) | 0 | 1 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `RelationshipToContact':
  Object `Rel_AB5_R50_1' of class `Relationship' is connected to 2 objects of class `Contact'
  at association end `target' but the multiplicity is specified as `1'.
```

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 5 | 0.00% |
| Websites | 0 | 5 | 0.00% |
| Emails | 0 | 5 | 0.00% |
| Addresses | 3 | 4 | 75.00% |

| Invalid Addresses | 
|---| 
```
Moi Avenue, 42, Mombasa
```
```
Ngong Road, 88, Nairobi
```
```
Kenyatta Avenue, 17, Nairobi
```

## Generation 4 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 772 | 0.00% |
| Multiplicities Errors | 0 | 193 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 21 | 4.76% |
| Invariants Errors (Not included on General) | 0 | 1 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `RelationshipToContact':
  Object `Rel_AB5_R50_1' of class `Relationship' is connected to 2 objects of class `Contact'
  at association end `target' but the multiplicity is specified as `1'.
```

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 1 | 28 | 3.57% |
| Websites | 3 | 28 | 10.71% |
| Emails | 3 | 28 | 10.71% |
| Addresses | 15 | 28 | 53.57% |

| Invalid Phones | 
|---| 
```
000
```

| Invalid Websites | 
|---| 
```

```
```
http://
```
```
about:blank
```

| Invalid Emails | 
|---| 
```

```
```
noreply@bureau
```
```
lampros@[127.0.0.1]
```

| Invalid Addresses | 
|---| 
```
Teheran-ro, 152, Seoul
```
```
Film City Road, 3A, Mumbai
```
```
Dr. Annie Besant Road, 88, Mumbai
```
```
, , 
```
```
ul. Marszałkowska, 101, Warszawa
```
```
Borgo Pinti, 14, Firenze
```
```
Via San Gallo, 56, Firenze
```
```
Queen Elizabeth Way, 12, Iqaluit
```
```
Keppel Road, 1, Singapore
```
```
Aiviq Street, 3, Iqaluit
```
```
Alemdar Mahallesi, 6, İstanbul
```
```
Anna Salai, 77, Chennai
```
```
Moi Avenue, 42, Mombasa
```
```
Ngong Road, 88, Nairobi
```
```
Kenyatta Avenue, 17, Nairobi
```

# Generation 5
## Category baseline
```
!new AddressBook('AB_StadshavenExchange_Spring2026_1')

!new Person('P_Stad_Noura_1')
!P_Stad_Noura_1.name := 'Noura Benali'
!P_Stad_Noura_1.phone := '+31 20 555 7011'
!P_Stad_Noura_1.website := 'https://noura-benali.example'
!P_Stad_Noura_1.email := 'n.benali@example.nl'
!P_Stad_Noura_1.title := 'Prof.'
!insert (AB_StadshavenExchange_Spring2026_1, P_Stad_Noura_1) into AddressBookMadeOfContact

!new Address('Addr_Stad_Noura_Amsterdam_1')
!Addr_Stad_Noura_Amsterdam_1.street := 'Herengracht'
!Addr_Stad_Noura_Amsterdam_1.houseNr := '312'
!Addr_Stad_Noura_Amsterdam_1.city := 'Amsterdam'
!insert (P_Stad_Noura_1, Addr_Stad_Noura_Amsterdam_1) into ContactContainsAddress

!new Note('Note_Stad_Noura_1')
!Note_Stad_Noura_1.author := 'Prof. Noura Benali'
!Note_Stad_Noura_1.time := Date('2026-03-04')
!Note_Stad_Noura_1.type := #EMAIL
!Note_Stad_Noura_1.comment := 'Sent Luca the reading list and lab safety briefing; copied Zuzanna for onboarding logistics.'
!insert (P_Stad_Noura_1, Note_Stad_Noura_1) into ContactContainsNote

!new Person('P_Stad_Luca_1')
!P_Stad_Luca_1.name := 'Luca Bianchi'
!P_Stad_Luca_1.phone := '+39 02 555 0190'
!P_Stad_Luca_1.website := 'https://lucabianchi.example'
!P_Stad_Luca_1.email := 'luca.bianchi@example.it'
!P_Stad_Luca_1.title := 'Mr.'
!insert (AB_StadshavenExchange_Spring2026_1, P_Stad_Luca_1) into AddressBookMadeOfContact

!new Address('Addr_Stad_Luca_Milan_1')
!Addr_Stad_Luca_Milan_1.street := 'Via Paolo Sarpi'
!Addr_Stad_Luca_Milan_1.houseNr := '21'
!Addr_Stad_Luca_Milan_1.city := 'Milan'
!insert (P_Stad_Luca_1, Addr_Stad_Luca_Milan_1) into ContactContainsAddress

!new Note('Note_Stad_Luca_1')
!Note_Stad_Luca_1.author := 'Zuzanna Nowak'
!Note_Stad_Luca_1.time := Date('2026-03-01')
!Note_Stad_Luca_1.type := #EMAIL
!Note_Stad_Luca_1.comment := 'Emailed Luca instructions for residence registration appointment and the university ID pickup.'
!insert (P_Stad_Luca_1, Note_Stad_Luca_1) into ContactContainsNote

!new Note('Note_Stad_Luca_2')
!Note_Stad_Luca_2.author := 'Luca Bianchi'
!Note_Stad_Luca_2.time := Date('2026-03-09')
!Note_Stad_Luca_2.type := #CALL
!Note_Stad_Luca_2.comment := 'Called CanalView Housing to report a heater issue in the assigned room; asked for an inspection slot.'
!insert (P_Stad_Luca_1, Note_Stad_Luca_2) into ContactContainsNote

!new Person('P_Stad_Zuzanna_1')
!P_Stad_Zuzanna_1.name := 'Zuzanna Nowak'
!P_Stad_Zuzanna_1.phone := '+31 6 555 8821'
!P_Stad_Zuzanna_1.website := 'https://zuzanna-nowak.example'
!P_Stad_Zuzanna_1.email := 'z.nowak@example.nl'
!P_Stad_Zuzanna_1.title := 'Ms.'
!insert (AB_StadshavenExchange_Spring2026_1, P_Stad_Zuzanna_1) into AddressBookMadeOfContact

!new Note('Note_Stad_Zuzanna_1')
!Note_Stad_Zuzanna_1.author := 'Stadshaven International Office'
!Note_Stad_Zuzanna_1.time := Date('2026-02-25')
!Note_Stad_Zuzanna_1.type := #MEETING
!Note_Stad_Zuzanna_1.comment := 'Weekly intake meeting: confirmed arrival dates for four exchange students and assigned housing liaisons.'
!insert (P_Stad_Zuzanna_1, Note_Stad_Zuzanna_1) into ContactContainsNote

!new Person('P_Stad_Siti_1')
!P_Stad_Siti_1.name := 'Siti Nur Aisyah'
!P_Stad_Siti_1.phone := '+62 21 555 3310'
!P_Stad_Siti_1.website := 'https://sitinuraisyah.example'
!P_Stad_Siti_1.email := 'siti.aisyah@example.id'
!P_Stad_Siti_1.title := 'Ms.'
!insert (AB_StadshavenExchange_Spring2026_1, P_Stad_Siti_1) into AddressBookMadeOfContact

!new Address('Addr_Stad_Siti_Jakarta_1')
!Addr_Stad_Siti_Jakarta_1.street := 'Jl. Diponegoro'
!Addr_Stad_Siti_Jakarta_1.houseNr := '17'
!Addr_Stad_Siti_Jakarta_1.city := 'Jakarta'
!insert (P_Stad_Siti_1, Addr_Stad_Siti_Jakarta_1) into ContactContainsAddress

!new Address('Addr_Stad_Siti_Amsterdam_1')
!Addr_Stad_Siti_Amsterdam_1.street := 'Oudezijds Achterburgwal'
!Addr_Stad_Siti_Amsterdam_1.houseNr := '101'
!Addr_Stad_Siti_Amsterdam_1.city := 'Amsterdam'
!insert (P_Stad_Siti_1, Addr_Stad_Siti_Amsterdam_1) into ContactContainsAddress

!new Note('Note_Stad_Siti_1')
!Note_Stad_Siti_1.author := 'Siti Nur Aisyah'
!Note_Stad_Siti_1.time := Date('2026-03-06')
!Note_Stad_Siti_1.type := #EMAIL
!Note_Stad_Siti_1.comment := 'Confirmed arrival time and requested halal-friendly grocery guidance near the student housing.'
!insert (P_Stad_Siti_1, Note_Stad_Siti_1) into ContactContainsNote

!new Company('C_Stad_University_1')
!C_Stad_University_1.name := 'Universiteit Stadshaven'
!C_Stad_University_1.phone := '+31 20 555 0000'
!C_Stad_University_1.website := 'https://stadshaven-university.example'
!C_Stad_University_1.email := 'info@stadshaven-university.example'
!C_Stad_University_1.industry := 'Higher education'
!insert (AB_StadshavenExchange_Spring2026_1, C_Stad_University_1) into AddressBookMadeOfContact

!new Address('Addr_Stad_University_Amsterdam_1')
!Addr_Stad_University_Amsterdam_1.street := 'Science Park'
!Addr_Stad_University_Amsterdam_1.houseNr := '904'
!Addr_Stad_University_Amsterdam_1.city := 'Amsterdam'
!insert (C_Stad_University_1, Addr_Stad_University_Amsterdam_1) into ContactContainsAddress

!new Company('C_Stad_IntOffice_1')
!C_Stad_IntOffice_1.name := 'Stadshaven International Office'
!C_Stad_IntOffice_1.phone := '+31 20 555 0101'
!C_Stad_IntOffice_1.website := 'https://stadshaven-university.example/international'
!C_Stad_IntOffice_1.email := 'international@stadshaven-university.example'
!C_Stad_IntOffice_1.industry := 'University student services'
!insert (AB_StadshavenExchange_Spring2026_1, C_Stad_IntOffice_1) into AddressBookMadeOfContact

!new Address('Addr_Stad_IntOffice_Amsterdam_1')
!Addr_Stad_IntOffice_Amsterdam_1.street := 'Science Park'
!Addr_Stad_IntOffice_Amsterdam_1.houseNr := '906'
!Addr_Stad_IntOffice_Amsterdam_1.city := 'Amsterdam'
!insert (C_Stad_IntOffice_1, Addr_Stad_IntOffice_Amsterdam_1) into ContactContainsAddress

!new Note('Note_Stad_IntOffice_1')
!Note_Stad_IntOffice_1.author := 'Front Desk'
!Note_Stad_IntOffice_1.time := Date('2026-02-27')
!Note_Stad_IntOffice_1.type := #CALL
!Note_Stad_IntOffice_1.comment := 'Called CanalView Housing to verify room allocation list and key pickup procedure.'
!insert (C_Stad_IntOffice_1, Note_Stad_IntOffice_1) into ContactContainsNote

!new Company('C_Stad_CanalView_1')
!C_Stad_CanalView_1.name := 'CanalView Housing B.V.'
!C_Stad_CanalView_1.phone := '+31 20 555 2222'
!C_Stad_CanalView_1.website := 'https://canalview-housing.example'
!C_Stad_CanalView_1.email := 'support@canalview-housing.example'
!C_Stad_CanalView_1.industry := 'Student accommodation and property management'
!insert (AB_StadshavenExchange_Spring2026_1, C_Stad_CanalView_1) into AddressBookMadeOfContact

!new Note('Note_Stad_CanalView_1')
!Note_Stad_CanalView_1.author := 'CanalView Housing B.V.'
!Note_Stad_CanalView_1.time := Date('2026-03-02')
!Note_Stad_CanalView_1.type := #EMAIL
!Note_Stad_CanalView_1.comment := 'Sent digital lease packet and QR code for key locker access; advised to bring passport for verification.'
!insert (C_Stad_CanalView_1, Note_Stad_CanalView_1) into ContactContainsNote

!new Company('C_Stad_MaintUnit_1')
!C_Stad_MaintUnit_1.name := 'CanalView Housing – Maintenance Unit'
!C_Stad_MaintUnit_1.phone := '+31 20 555 2233'
!C_Stad_MaintUnit_1.website := 'https://canalview-housing.example/maintenance'
!C_Stad_MaintUnit_1.email := 'maintenance@canalview-housing.example'
!C_Stad_MaintUnit_1.industry := 'Building maintenance services'
!insert (AB_StadshavenExchange_Spring2026_1, C_Stad_MaintUnit_1) into AddressBookMadeOfContact

!new Address('Addr_Stad_Maint_Houthavens_1')
!Addr_Stad_Maint_Houthavens_1.street := 'Houthavens'
!Addr_Stad_Maint_Houthavens_1.houseNr := '5'
!Addr_Stad_Maint_Houthavens_1.city := 'Amsterdam'
!insert (C_Stad_MaintUnit_1, Addr_Stad_Maint_Houthavens_1) into ContactContainsAddress

!new Address('Addr_Stad_Maint_Transformatorweg_1')
!Addr_Stad_Maint_Transformatorweg_1.street := 'Transformatorweg'
!Addr_Stad_Maint_Transformatorweg_1.houseNr := '12'
!Addr_Stad_Maint_Transformatorweg_1.city := 'Amsterdam'
!insert (C_Stad_MaintUnit_1, Addr_Stad_Maint_Transformatorweg_1) into ContactContainsAddress

!new Note('Note_Stad_Maint_1')
!Note_Stad_Maint_1.author := 'Dispatch'
!Note_Stad_Maint_1.time := Date('2026-03-10')
!Note_Stad_Maint_1.type := #MEETING
!Note_Stad_Maint_1.comment := 'Scheduled on-site inspection for heater issue reported by Luca; parts availability check initiated.'
!insert (C_Stad_MaintUnit_1, Note_Stad_Maint_1) into ContactContainsNote

!new Relationship('Rel_Stad_Noura_to_Luca_Boss_1')
!Rel_Stad_Noura_to_Luca_Boss_1.type := #BOSS
!insert (P_Stad_Noura_1, Rel_Stad_Noura_to_Luca_Boss_1) into ContactToRelationship
!insert (Rel_Stad_Noura_to_Luca_Boss_1, P_Stad_Luca_1) into RelationshipToContact

!new Relationship('Rel_Stad_Noura_to_Zuzanna_Coworker_1')
!Rel_Stad_Noura_to_Zuzanna_Coworker_1.type := #COWORKER
!insert (P_Stad_Noura_1, Rel_Stad_Noura_to_Zuzanna_Coworker_1) into ContactToRelationship
!insert (Rel_Stad_Noura_to_Zuzanna_Coworker_1, P_Stad_Zuzanna_1) into RelationshipToContact

!new Relationship('Rel_Stad_Luca_to_Noura_Employee_1')
!Rel_Stad_Luca_to_Noura_Employee_1.type := #EMPLOYEE
!insert (P_Stad_Luca_1, Rel_Stad_Luca_to_Noura_Employee_1) into ContactToRelationship
!insert (Rel_Stad_Luca_to_Noura_Employee_1, P_Stad_Noura_1) into RelationshipToContact

!new Relationship('Rel_Stad_Luca_to_Siti_Coworker_1')
!Rel_Stad_Luca_to_Siti_Coworker_1.type := #COWORKER
!insert (P_Stad_Luca_1, Rel_Stad_Luca_to_Siti_Coworker_1) into ContactToRelationship
!insert (Rel_Stad_Luca_to_Siti_Coworker_1, P_Stad_Siti_1) into RelationshipToContact

!new Relationship('Rel_Stad_Zuzanna_to_IntOffice_Employee_1')
!Rel_Stad_Zuzanna_to_IntOffice_Employee_1.type := #EMPLOYEE
!insert (P_Stad_Zuzanna_1, Rel_Stad_Zuzanna_to_IntOffice_Employee_1) into ContactToRelationship
!insert (Rel_Stad_Zuzanna_to_IntOffice_Employee_1, C_Stad_IntOffice_1) into RelationshipToContact

!new Relationship('Rel_Stad_Zuzanna_to_Siti_Boss_1')
!Rel_Stad_Zuzanna_to_Siti_Boss_1.type := #BOSS
!insert (P_Stad_Zuzanna_1, Rel_Stad_Zuzanna_to_Siti_Boss_1) into ContactToRelationship
!insert (Rel_Stad_Zuzanna_to_Siti_Boss_1, P_Stad_Siti_1) into RelationshipToContact

!new Relationship('Rel_Stad_Zuzanna_to_CanalView_Coworker_1')
!Rel_Stad_Zuzanna_to_CanalView_Coworker_1.type := #COWORKER
!insert (P_Stad_Zuzanna_1, Rel_Stad_Zuzanna_to_CanalView_Coworker_1) into ContactToRelationship
!insert (Rel_Stad_Zuzanna_to_CanalView_Coworker_1, C_Stad_CanalView_1) into RelationshipToContact

!new Relationship('Rel_Stad_Siti_to_Zuzanna_Employee_1')
!Rel_Stad_Siti_to_Zuzanna_Employee_1.type := #EMPLOYEE
!insert (P_Stad_Siti_1, Rel_Stad_Siti_to_Zuzanna_Employee_1) into ContactToRelationship
!insert (Rel_Stad_Siti_to_Zuzanna_Employee_1, P_Stad_Zuzanna_1) into RelationshipToContact

!new Relationship('Rel_Stad_University_to_IntOffice_Subdivision_1')
!Rel_Stad_University_to_IntOffice_Subdivision_1.type := #SUBDIVISION
!insert (C_Stad_University_1, Rel_Stad_University_to_IntOffice_Subdivision_1) into ContactToRelationship
!insert (Rel_Stad_University_to_IntOffice_Subdivision_1, C_Stad_IntOffice_1) into RelationshipToContact

!new Relationship('Rel_Stad_IntOffice_to_Zuzanna_Boss_1')
!Rel_Stad_IntOffice_to_Zuzanna_Boss_1.type := #BOSS
!insert (C_Stad_IntOffice_1, Rel_Stad_IntOffice_to_Zuzanna_Boss_1) into ContactToRelationship
!insert (Rel_Stad_IntOffice_to_Zuzanna_Boss_1, P_Stad_Zuzanna_1) into RelationshipToContact

!new Relationship('Rel_Stad_CanalView_to_Maint_Subdivision_1')
!Rel_Stad_CanalView_to_Maint_Subdivision_1.type := #SUBDIVISION
!insert (C_Stad_CanalView_1, Rel_Stad_CanalView_to_Maint_Subdivision_1) into ContactToRelationship
!insert (Rel_Stad_CanalView_to_Maint_Subdivision_1, C_Stad_MaintUnit_1) into RelationshipToContact

!new Relationship('Rel_Stad_CanalView_to_Maint_Boss_1')
!Rel_Stad_CanalView_to_Maint_Boss_1.type := #BOSS
!insert (C_Stad_CanalView_1, Rel_Stad_CanalView_to_Maint_Boss_1) into ContactToRelationship
!insert (Rel_Stad_CanalView_to_Maint_Boss_1, C_Stad_MaintUnit_1) into RelationshipToContact

!new Relationship('Rel_Stad_Maint_to_CanalView_Employee_1')
!Rel_Stad_Maint_to_CanalView_Employee_1.type := #EMPLOYEE
!insert (C_Stad_MaintUnit_1, Rel_Stad_Maint_to_CanalView_Employee_1) into ContactToRelationship
!insert (Rel_Stad_Maint_to_CanalView_Employee_1, C_Stad_CanalView_1) into RelationshipToContact
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 197 | 0.00% |
| Multiplicities Errors | 0 | 50 | 0.00% |
| Invariants Errors | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 8 | 0.00% |
| Websites | 0 | 8 | 0.00% |
| Emails | 0 | 8 | 0.00% |
| Addresses | 5 | 8 | 62.50% |

| Invalid Addresses | 
|---| 
```
Jl. Diponegoro, 17, Jakarta
```
```
Herengracht, 312, Amsterdam
```
```
Transformatorweg, 12, Amsterdam
```
```
Houthavens, 5, Amsterdam
```
```
Oudezijds Achterburgwal, 101, Amsterdam
```

## Category boundary
```
!new AddressBook('AB_TwoWay_Employment_1')

!new Person('P_AN_1')
!P_AN_1.name := 'Anika Ndlovu'
!P_AN_1.phone := '+27 11 555 0199'
!P_AN_1.website := 'https://anika-ndlovu.example.za'
!P_AN_1.email := 'anika.ndlovu@example.za'
!P_AN_1.title := 'Ms.'
!insert (AB_TwoWay_Employment_1, P_AN_1) into AddressBookMadeOfContact

!new Company('C_UL_1')
!C_UL_1.name := 'Ubuntu Logistics (Pty) Ltd.'
!C_UL_1.phone := '+27 21 400 2200'
!C_UL_1.website := ''
!C_UL_1.email := 'hr@ubuntu-logistics.example.za'
!C_UL_1.industry := 'Logistics'
!insert (AB_TwoWay_Employment_1, C_UL_1) into AddressBookMadeOfContact

!new Relationship('Rel_P_AN_R1_1')
!Rel_P_AN_R1_1.type := #EMPLOYEE
!insert (P_AN_1, Rel_P_AN_R1_1) into ContactToRelationship
!insert (Rel_P_AN_R1_1, C_UL_1) into RelationshipToContact

!new Relationship('Rel_C_UL_R1_1')
!Rel_C_UL_R1_1.type := #BOSS
!insert (C_UL_1, Rel_C_UL_R1_1) into ContactToRelationship
!insert (Rel_C_UL_R1_1, P_AN_1) into RelationshipToContact
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 23 | 0.00% |
| Multiplicities Errors | 0 | 6 | 0.00% |
| Invariants Errors | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 2 | 0.00% |
| Websites | 1 | 2 | 50.00% |
| Emails | 0 | 2 | 0.00% |
| Addresses | 0 | 0 | 0.00% |

| Invalid Websites | 
|---| 
```

```

## Category complex
```
!new AddressBook('AB_SunWeave_Microgrid_2026_1')

!new Person('P_SW_Kojo_1')
!P_SW_Kojo_1.name := 'Eng. Kojo Mensah'
!P_SW_Kojo_1.title := 'Eng.'
!P_SW_Kojo_1.phone := '+233 30 255 1807'
!P_SW_Kojo_1.website := 'https://kojomensah.example.gh'
!P_SW_Kojo_1.email := 'kojo.mensah@example.gh'
!insert (AB_SunWeave_Microgrid_2026_1, P_SW_Kojo_1) into AddressBookMadeOfContact

!new Address('Addr_SW_Kojo_Accra_1')
!Addr_SW_Kojo_Accra_1.city := 'Accra'
!Addr_SW_Kojo_Accra_1.street := 'Ring Road Central'
!Addr_SW_Kojo_Accra_1.houseNr := '16'
!insert (P_SW_Kojo_1, Addr_SW_Kojo_Accra_1) into ContactContainsAddress

!new Address('Addr_SW_Kojo_Tamale_1')
!Addr_SW_Kojo_Tamale_1.city := 'Tamale'
!Addr_SW_Kojo_Tamale_1.street := 'Hospital Road'
!Addr_SW_Kojo_Tamale_1.houseNr := '3A'
!insert (P_SW_Kojo_1, Addr_SW_Kojo_Tamale_1) into ContactContainsAddress

!new Note('Note_SW_Kojo_1')
!Note_SW_Kojo_1.author := 'Kojo Mensah'
!Note_SW_Kojo_1.time := Date('2026-01-12')
!Note_SW_Kojo_1.type := #MEETING
!Note_SW_Kojo_1.comment := 'Community kickoff in San Isidro; agreed on metering pilot with prepaid option and paper fallback receipts.'
!insert (P_SW_Kojo_1, Note_SW_Kojo_1) into ContactContainsNote

!new Note('Note_SW_Kojo_2')
!Note_SW_Kojo_2.author := 'Benoît Tremblay'
!Note_SW_Kojo_2.time := Date('2026-01-20')
!Note_SW_Kojo_2.type := #EMAIL
!Note_SW_Kojo_2.comment := 'Flagged that the interconnect requires anti-islanding test documentation before final sign-off.'
!insert (P_SW_Kojo_1, Note_SW_Kojo_2) into ContactContainsNote

!new Note('Note_SW_Kojo_3')
!Note_SW_Kojo_3.author := 'Sanna Lehtinen'
!Note_SW_Kojo_3.time := Date('2026-02-02')
!Note_SW_Kojo_3.type := #CALL
!Note_SW_Kojo_3.comment := 'Battery enclosure venting must be updated for tropical humidity; sending revised BOM.'
!insert (P_SW_Kojo_1, Note_SW_Kojo_3) into ContactContainsNote

!new Person('P_SW_Malou_1')
!P_SW_Malou_1.name := 'Maria‑Luisa “Malou” Reyes'
!P_SW_Malou_1.title := 'Ms.'
!P_SW_Malou_1.phone := '+63 917 650 4102'
!P_SW_Malou_1.website := 'https://malou-reyes.example.ph'
!P_SW_Malou_1.email := 'malou.reyes@example.ph'
!insert (AB_SunWeave_Microgrid_2026_1, P_SW_Malou_1) into AddressBookMadeOfContact

!new Address('Addr_SW_Malou_Iloilo_1')
!Addr_SW_Malou_Iloilo_1.city := 'Iloilo City'
!Addr_SW_Malou_Iloilo_1.street := 'Jaro Plaza'
!Addr_SW_Malou_Iloilo_1.houseNr := '9'
!insert (P_SW_Malou_1, Addr_SW_Malou_Iloilo_1) into ContactContainsAddress

!new Address('Addr_SW_Malou_SanIsidro_1')
!Addr_SW_Malou_SanIsidro_1.city := 'San Isidro'
!Addr_SW_Malou_SanIsidro_1.street := 'Rizal Street'
!Addr_SW_Malou_SanIsidro_1.houseNr := '1'
!insert (P_SW_Malou_1, Addr_SW_Malou_SanIsidro_1) into ContactContainsAddress

!new Note('Note_SW_Malou_1')
!Note_SW_Malou_1.author := 'Malou Reyes'
!Note_SW_Malou_1.time := Date('2026-01-14')
!Note_SW_Malou_1.type := #CALL
!Note_SW_Malou_1.comment := 'Barangay leaders asked for clear rules on disconnection and medical-exemption cases.'
!insert (P_SW_Malou_1, Note_SW_Malou_1) into ContactContainsNote

!new Note('Note_SW_Malou_2')
!Note_SW_Malou_2.author := 'Malou Reyes'
!Note_SW_Malou_2.time := Date('2026-02-05')
!Note_SW_Malou_2.type := #EMAIL
!Note_SW_Malou_2.comment := 'Translated customer FAQ into Hiligaynon; requested approval to print 500 copies.'
!insert (P_SW_Malou_1, Note_SW_Malou_2) into ContactContainsNote

!new Person('P_SW_Sanna_1')
!P_SW_Sanna_1.name := 'Sanna Lehtinen'
!P_SW_Sanna_1.title := 'Ms.'
!P_SW_Sanna_1.phone := '+358 40 555 8810'
!P_SW_Sanna_1.website := 'https://sanna-lehtinen.example.fi'
!P_SW_Sanna_1.email := 'sanna.lehtinen@example.fi'
!insert (AB_SunWeave_Microgrid_2026_1, P_SW_Sanna_1) into AddressBookMadeOfContact

!new Address('Addr_SW_Sanna_Tampere_1')
!Addr_SW_Sanna_Tampere_1.city := 'Tampere'
!Addr_SW_Sanna_Tampere_1.street := 'Hämeenkatu'
!Addr_SW_Sanna_Tampere_1.houseNr := '27'
!insert (P_SW_Sanna_1, Addr_SW_Sanna_Tampere_1) into ContactContainsAddress

!new Note('Note_SW_Sanna_1')
!Note_SW_Sanna_1.author := 'Sanna Lehtinen'
!Note_SW_Sanna_1.time := Date('2026-01-09')
!Note_SW_Sanna_1.type := #MEETING
!Note_SW_Sanna_1.comment := 'Reviewed inverter-battery integration; recommended adding surge suppression for unstable generator handover.'
!insert (P_SW_Sanna_1, Note_SW_Sanna_1) into ContactContainsNote

!new Note('Note_SW_Sanna_2')
!Note_SW_Sanna_2.author := 'HydroNord Tech Desk'
!Note_SW_Sanna_2.time := Date('2026-01-21')
!Note_SW_Sanna_2.type := #EMAIL
!Note_SW_Sanna_2.comment := 'Requested frequency response test results and firmware hash for the controller.'
!insert (P_SW_Sanna_1, Note_SW_Sanna_2) into ContactContainsNote

!new Person('P_SW_Benoit_1')
!P_SW_Benoit_1.name := 'Benoît Tremblay'
!P_SW_Benoit_1.title := 'Mr.'
!P_SW_Benoit_1.phone := '+1 418-555-9033'
!P_SW_Benoit_1.website := 'https://benoit-tremblay.example.ca'
!P_SW_Benoit_1.email := 'benoit.tremblay@example.ca'
!insert (AB_SunWeave_Microgrid_2026_1, P_SW_Benoit_1) into AddressBookMadeOfContact

!new Address('Addr_SW_Benoit_QuebecCity_1')
!Addr_SW_Benoit_QuebecCity_1.city := 'Québec City'
!Addr_SW_Benoit_QuebecCity_1.street := 'Boulevard René‑Lévesque Ouest'
!Addr_SW_Benoit_QuebecCity_1.houseNr := '455'
!insert (P_SW_Benoit_1, Addr_SW_Benoit_QuebecCity_1) into ContactContainsAddress

!new Note('Note_SW_Benoit_1')
!Note_SW_Benoit_1.author := 'Benoît Tremblay'
!Note_SW_Benoit_1.time := Date('2026-01-18')
!Note_SW_Benoit_1.type := #MEETING
!Note_SW_Benoit_1.comment := 'Compliance review: confirmed acceptable relay settings; need onsite witness test dates.'
!insert (P_SW_Benoit_1, Note_SW_Benoit_1) into ContactContainsNote

!new Note('Note_SW_Benoit_2')
!Note_SW_Benoit_2.author := 'Kojo Mensah'
!Note_SW_Benoit_2.time := Date('2026-01-25')
!Note_SW_Benoit_2.type := #EMAIL
!Note_SW_Benoit_2.comment := 'Shared proposed commissioning schedule; requested regulator observer availability.'
!insert (P_SW_Benoit_1, Note_SW_Benoit_2) into ContactContainsNote

!new Person('P_SW_Fatou_1')
!P_SW_Fatou_1.name := 'Fatou Ndiaye'
!P_SW_Fatou_1.title := 'Ms.'
!P_SW_Fatou_1.phone := '+221 33 555 7001'
!P_SW_Fatou_1.website := 'https://fatou-ndiaye.example.sn'
!P_SW_Fatou_1.email := 'fatou.ndiaye@example.sn'
!insert (AB_SunWeave_Microgrid_2026_1, P_SW_Fatou_1) into AddressBookMadeOfContact

!new Address('Addr_SW_Fatou_Dakar_1')
!Addr_SW_Fatou_Dakar_1.city := 'Dakar'
!Addr_SW_Fatou_Dakar_1.street := 'Avenue Léopold Sédar Senghor'
!Addr_SW_Fatou_Dakar_1.houseNr := '10'
!insert (P_SW_Fatou_1, Addr_SW_Fatou_Dakar_1) into ContactContainsAddress

!new Address('Addr_SW_Fatou_Paris_1')
!Addr_SW_Fatou_Paris_1.city := 'Paris'
!Addr_SW_Fatou_Paris_1.street := 'Rue La Boétie'
!Addr_SW_Fatou_Paris_1.houseNr := '41'
!insert (P_SW_Fatou_1, Addr_SW_Fatou_Paris_1) into ContactContainsAddress

!new Note('Note_SW_Fatou_1')
!Note_SW_Fatou_1.author := 'Fatou Ndiaye'
!Note_SW_Fatou_1.time := Date('2026-01-16')
!Note_SW_Fatou_1.type := #EMAIL
!Note_SW_Fatou_1.comment := 'Financing conditions: require theft coverage for meters and monthly revenue reconciliation reports.'
!insert (P_SW_Fatou_1, Note_SW_Fatou_1) into ContactContainsNote

!new Note('Note_SW_Fatou_2')
!Note_SW_Fatou_2.author := 'Sahel Impact Bank Credit Committee'
!Note_SW_Fatou_2.time := Date('2026-02-06')
!Note_SW_Fatou_2.type := #MEETING
!Note_SW_Fatou_2.comment := 'Approved tranche 1 subject to regulator interconnect confirmation and community grievance mechanism.'
!insert (P_SW_Fatou_1, Note_SW_Fatou_2) into ContactContainsNote

!new Company('C_SW_SunWeave_1')
!C_SW_SunWeave_1.name := 'SunWeave Energy Cooperative'
!C_SW_SunWeave_1.industry := 'Community Renewable Energy & Microgrids'
!C_SW_SunWeave_1.phone := '+233 30 255 1000'
!C_SW_SunWeave_1.website := 'https://sunweave.example'
!C_SW_SunWeave_1.email := 'info@sunweave.example'
!insert (AB_SunWeave_Microgrid_2026_1, C_SW_SunWeave_1) into AddressBookMadeOfContact

!new Address('Addr_SW_SunWeave_Accra_1')
!Addr_SW_SunWeave_Accra_1.city := 'Accra'
!Addr_SW_SunWeave_Accra_1.street := 'Independence Avenue'
!Addr_SW_SunWeave_Accra_1.houseNr := '88'
!insert (C_SW_SunWeave_1, Addr_SW_SunWeave_Accra_1) into ContactContainsAddress

!new Address('Addr_SW_SunWeave_CapeCoast_1')
!Addr_SW_SunWeave_CapeCoast_1.city := 'Cape Coast'
!Addr_SW_SunWeave_CapeCoast_1.street := 'Kotoka Road'
!Addr_SW_SunWeave_CapeCoast_1.houseNr := '5'
!insert (C_SW_SunWeave_1, Addr_SW_SunWeave_CapeCoast_1) into ContactContainsAddress

!new Note('Note_SW_SunWeave_1')
!Note_SW_SunWeave_1.author := 'Operations Desk'
!Note_SW_SunWeave_1.time := Date('2026-01-08')
!Note_SW_SunWeave_1.type := #EMAIL
!Note_SW_SunWeave_1.comment := 'Reminder: all meter serials must be logged before distribution; photos required for audit trail.'
!insert (C_SW_SunWeave_1, Note_SW_SunWeave_1) into ContactContainsNote

!new Company('C_SW_SunWeave_FieldAccra_1')
!C_SW_SunWeave_FieldAccra_1.name := 'SunWeave Energy Cooperative — Accra Field Office'
!C_SW_SunWeave_FieldAccra_1.industry := 'Microgrid Field Deployment'
!C_SW_SunWeave_FieldAccra_1.phone := '+233 30 255 1044'
!C_SW_SunWeave_FieldAccra_1.website := 'https://field.sunweave.example'
!C_SW_SunWeave_FieldAccra_1.email := 'fieldops@sunweave.example'
!insert (AB_SunWeave_Microgrid_2026_1, C_SW_SunWeave_FieldAccra_1) into AddressBookMadeOfContact

!new Address('Addr_SW_Field_Accra_1')
!Addr_SW_Field_Accra_1.city := 'Accra'
!Addr_SW_Field_Accra_1.street := 'Spintex Road'
!Addr_SW_Field_Accra_1.houseNr := '14'
!insert (C_SW_SunWeave_FieldAccra_1, Addr_SW_Field_Accra_1) into ContactContainsAddress

!new Company('C_SW_AuroraStorage_1')
!C_SW_AuroraStorage_1.name := 'Aurora Storage Oy'
!C_SW_AuroraStorage_1.industry := 'Battery Systems & Power Electronics'
!C_SW_AuroraStorage_1.phone := '+358 9 555 2100'
!C_SW_AuroraStorage_1.website := 'https://aurorastorage.example.fi'
!C_SW_AuroraStorage_1.email := 'projects@aurorastorage.example.fi'
!insert (AB_SunWeave_Microgrid_2026_1, C_SW_AuroraStorage_1) into AddressBookMadeOfContact

!new Address('Addr_SW_Aurora_Espoo_1')
!Addr_SW_Aurora_Espoo_1.city := 'Espoo'
!Addr_SW_Aurora_Espoo_1.street := 'Keilaniementie'
!Addr_SW_Aurora_Espoo_1.houseNr := '4'
!insert (C_SW_AuroraStorage_1, Addr_SW_Aurora_Espoo_1) into ContactContainsAddress

!new Address('Addr_SW_Aurora_Oulu_1')
!Addr_SW_Aurora_Oulu_1.city := 'Oulu'
!Addr_SW_Aurora_Oulu_1.street := 'Teknologiantie'
!Addr_SW_Aurora_Oulu_1.houseNr := '12'
!insert (C_SW_AuroraStorage_1, Addr_SW_Aurora_Oulu_1) into ContactContainsAddress

!new Note('Note_SW_Aurora_1')
!Note_SW_Aurora_1.author := 'Service Coordinator'
!Note_SW_Aurora_1.time := Date('2026-01-23')
!Note_SW_Aurora_1.type := #CALL
!Note_SW_Aurora_1.comment := 'Spare parts kit will ship with two fans and one controller board; confirm destination customs broker.'
!insert (C_SW_AuroraStorage_1, Note_SW_Aurora_1) into ContactContainsNote

!new Company('C_SW_HydroNord_1')
!C_SW_HydroNord_1.name := 'HydroNord Régie'
!C_SW_HydroNord_1.industry := 'Grid Regulation & Utility Interconnect Services'
!C_SW_HydroNord_1.phone := '+1 514-555-6620'
!C_SW_HydroNord_1.website := 'https://hydronord.example.ca'
!C_SW_HydroNord_1.email := 'interconnect@hydronord.example.ca'
!insert (AB_SunWeave_Microgrid_2026_1, C_SW_HydroNord_1) into AddressBookMadeOfContact

!new Address('Addr_SW_HydroNord_Montreal_1')
!Addr_SW_HydroNord_Montreal_1.city := 'Montréal'
!Addr_SW_HydroNord_Montreal_1.street := 'Rue Saint‑Jacques'
!Addr_SW_HydroNord_Montreal_1.houseNr := '200'
!insert (C_SW_HydroNord_1, Addr_SW_HydroNord_Montreal_1) into ContactContainsAddress

!new Note('Note_SW_HydroNord_1')
!Note_SW_HydroNord_1.author := 'Interconnect Office'
!Note_SW_HydroNord_1.time := Date('2026-01-19')
!Note_SW_HydroNord_1.type := #EMAIL
!Note_SW_HydroNord_1.comment := 'Submitted list of required commissioning tests: protection relay verification, black-start simulation, and logs retention policy.'
!insert (C_SW_HydroNord_1, Note_SW_HydroNord_1) into ContactContainsNote

!new Company('C_SW_SahelImpact_1')
!C_SW_SahelImpact_1.name := 'Sahel Impact Bank S.A.'
!C_SW_SahelImpact_1.industry := 'Development Finance & Micro‑Infrastructure Lending'
!C_SW_SahelImpact_1.phone := '+221 33 555 7010'
!C_SW_SahelImpact_1.website := 'https://sahelimpact.example.sn'
!C_SW_SahelImpact_1.email := 'loans@sahelimpact.example.sn'
!insert (AB_SunWeave_Microgrid_2026_1, C_SW_SahelImpact_1) into AddressBookMadeOfContact

!new Address('Addr_SW_Sahel_Dakar_1')
!Addr_SW_Sahel_Dakar_1.city := 'Dakar'
!Addr_SW_Sahel_Dakar_1.street := 'Plateau'
!Addr_SW_Sahel_Dakar_1.houseNr := '2'
!insert (C_SW_SahelImpact_1, Addr_SW_Sahel_Dakar_1) into ContactContainsAddress

!new Address('Addr_SW_Sahel_Abidjan_1')
!Addr_SW_Sahel_Abidjan_1.city := 'Abidjan'
!Addr_SW_Sahel_Abidjan_1.street := 'Boulevard de la République'
!Addr_SW_Sahel_Abidjan_1.houseNr := '15'
!insert (C_SW_SahelImpact_1, Addr_SW_Sahel_Abidjan_1) into ContactContainsAddress

!new Company('C_SW_SahelParis_1')
!C_SW_SahelParis_1.name := 'Sahel Impact Bank — Paris Desk'
!C_SW_SahelParis_1.industry := 'Development Finance (EU Liaison)'
!C_SW_SahelParis_1.phone := '+33 1 55 55 09 70'
!C_SW_SahelParis_1.website := 'https://eu.sahelimpact.example.sn'
!C_SW_SahelParis_1.email := 'parisdesk@sahelimpact.example.sn'
!insert (AB_SunWeave_Microgrid_2026_1, C_SW_SahelParis_1) into AddressBookMadeOfContact

!new Address('Addr_SW_SahelParis_Paris_1')
!Addr_SW_SahelParis_Paris_1.city := 'Paris'
!Addr_SW_SahelParis_Paris_1.street := 'Avenue de l’Opéra'
!Addr_SW_SahelParis_Paris_1.houseNr := '20'
!insert (C_SW_SahelParis_1, Addr_SW_SahelParis_Paris_1) into ContactContainsAddress

!new Note('Note_SW_SahelParis_1')
!Note_SW_SahelParis_1.author := 'Paris Desk Analyst'
!Note_SW_SahelParis_1.time := Date('2026-02-01')
!Note_SW_SahelParis_1.type := #EMAIL
!Note_SW_SahelParis_1.comment := 'Requested translated governance documents for the cooperative (French/English) and board signatory list.'
!insert (C_SW_SahelParis_1, Note_SW_SahelParis_1) into ContactContainsNote

!new Company('C_SW_BarangaySanIsidro_1')
!C_SW_BarangaySanIsidro_1.name := 'Barangay San Isidro Council'
!C_SW_BarangaySanIsidro_1.industry := 'Local Government & Community Services'
!C_SW_BarangaySanIsidro_1.phone := '+63 33 555 1200'
!C_SW_BarangaySanIsidro_1.website := 'https://sanisidro-barangay.example.ph'
!C_SW_BarangaySanIsidro_1.email := 'council@sanisidro-barangay.example.ph'
!insert (AB_SunWeave_Microgrid_2026_1, C_SW_BarangaySanIsidro_1) into AddressBookMadeOfContact

!new Address('Addr_SW_Barangay_SanIsidro_1')
!Addr_SW_Barangay_SanIsidro_1.city := 'San Isidro'
!Addr_SW_Barangay_SanIsidro_1.street := 'Barangay Hall Road'
!Addr_SW_Barangay_SanIsidro_1.houseNr := '1'
!insert (C_SW_BarangaySanIsidro_1, Addr_SW_Barangay_SanIsidro_1) into ContactContainsAddress

!new Note('Note_SW_Barangay_1')
!Note_SW_Barangay_1.author := 'Barangay Secretary'
!Note_SW_Barangay_1.time := Date('2026-01-15')
!Note_SW_Barangay_1.type := #MEETING
!Note_SW_Barangay_1.comment := 'Approved public posting of tariff table; requested monthly townhall for complaints and outage reporting.'
!insert (C_SW_BarangaySanIsidro_1, Note_SW_Barangay_1) into ContactContainsNote

!new Relationship('Rel_SW_Kojo_Boss_Malou_1')
!Rel_SW_Kojo_Boss_Malou_1.type := #BOSS
!insert (P_SW_Kojo_1, Rel_SW_Kojo_Boss_Malou_1) into ContactToRelationship
!insert (Rel_SW_Kojo_Boss_Malou_1, P_SW_Malou_1) into RelationshipToContact

!new Relationship('Rel_SW_Kojo_CW_Sanna_1')
!Rel_SW_Kojo_CW_Sanna_1.type := #COWORKER
!insert (P_SW_Kojo_1, Rel_SW_Kojo_CW_Sanna_1) into ContactToRelationship
!insert (Rel_SW_Kojo_CW_Sanna_1, P_SW_Sanna_1) into RelationshipToContact

!new Relationship('Rel_SW_Kojo_CW_Benoit_1')
!Rel_SW_Kojo_CW_Benoit_1.type := #COWORKER
!insert (P_SW_Kojo_1, Rel_SW_Kojo_CW_Benoit_1) into ContactToRelationship
!insert (Rel_SW_Kojo_CW_Benoit_1, P_SW_Benoit_1) into RelationshipToContact

!new Relationship('Rel_SW_Kojo_Emp_SunWeave_1')
!Rel_SW_Kojo_Emp_SunWeave_1.type := #EMPLOYEE
!insert (P_SW_Kojo_1, Rel_SW_Kojo_Emp_SunWeave_1) into ContactToRelationship
!insert (Rel_SW_Kojo_Emp_SunWeave_1, C_SW_SunWeave_1) into RelationshipToContact

!new Relationship('Rel_SW_Kojo_CW_Sahel_1')
!Rel_SW_Kojo_CW_Sahel_1.type := #COWORKER
!insert (P_SW_Kojo_1, Rel_SW_Kojo_CW_Sahel_1) into ContactToRelationship
!insert (Rel_SW_Kojo_CW_Sahel_1, C_SW_SahelImpact_1) into RelationshipToContact

!new Relationship('Rel_SW_Malou_Emp_Kojo_1')
!Rel_SW_Malou_Emp_Kojo_1.type := #EMPLOYEE
!insert (P_SW_Malou_1, Rel_SW_Malou_Emp_Kojo_1) into ContactToRelationship
!insert (Rel_SW_Malou_Emp_Kojo_1, P_SW_Kojo_1) into RelationshipToContact

!new Relationship('Rel_SW_Malou_Emp_Barangay_1')
!Rel_SW_Malou_Emp_Barangay_1.type := #EMPLOYEE
!insert (P_SW_Malou_1, Rel_SW_Malou_Emp_Barangay_1) into ContactToRelationship
!insert (Rel_SW_Malou_Emp_Barangay_1, C_SW_BarangaySanIsidro_1) into RelationshipToContact

!new Relationship('Rel_SW_Malou_CW_Field_1')
!Rel_SW_Malou_CW_Field_1.type := #COWORKER
!insert (P_SW_Malou_1, Rel_SW_Malou_CW_Field_1) into ContactToRelationship
!insert (Rel_SW_Malou_CW_Field_1, C_SW_SunWeave_FieldAccra_1) into RelationshipToContact

!new Relationship('Rel_SW_Sanna_Emp_Aurora_1')
!Rel_SW_Sanna_Emp_Aurora_1.type := #EMPLOYEE
!insert (P_SW_Sanna_1, Rel_SW_Sanna_Emp_Aurora_1) into ContactToRelationship
!insert (Rel_SW_Sanna_Emp_Aurora_1, C_SW_AuroraStorage_1) into RelationshipToContact

!new Relationship('Rel_SW_Sanna_CW_Kojo_1')
!Rel_SW_Sanna_CW_Kojo_1.type := #COWORKER
!insert (P_SW_Sanna_1, Rel_SW_Sanna_CW_Kojo_1) into ContactToRelationship
!insert (Rel_SW_Sanna_CW_Kojo_1, P_SW_Kojo_1) into RelationshipToContact

!new Relationship('Rel_SW_Sanna_CW_HydroNord_1')
!Rel_SW_Sanna_CW_HydroNord_1.type := #COWORKER
!insert (P_SW_Sanna_1, Rel_SW_Sanna_CW_HydroNord_1) into ContactToRelationship
!insert (Rel_SW_Sanna_CW_HydroNord_1, C_SW_HydroNord_1) into RelationshipToContact

!new Relationship('Rel_SW_Benoit_Emp_HydroNord_1')
!Rel_SW_Benoit_Emp_HydroNord_1.type := #EMPLOYEE
!insert (P_SW_Benoit_1, Rel_SW_Benoit_Emp_HydroNord_1) into ContactToRelationship
!insert (Rel_SW_Benoit_Emp_HydroNord_1, C_SW_HydroNord_1) into RelationshipToContact

!new Relationship('Rel_SW_Benoit_CW_Kojo_1')
!Rel_SW_Benoit_CW_Kojo_1.type := #COWORKER
!insert (P_SW_Benoit_1, Rel_SW_Benoit_CW_Kojo_1) into ContactToRelationship
!insert (Rel_SW_Benoit_CW_Kojo_1, P_SW_Kojo_1) into RelationshipToContact

!new Relationship('Rel_SW_Benoit_CW_Sanna_1')
!Rel_SW_Benoit_CW_Sanna_1.type := #COWORKER
!insert (P_SW_Benoit_1, Rel_SW_Benoit_CW_Sanna_1) into ContactToRelationship
!insert (Rel_SW_Benoit_CW_Sanna_1, P_SW_Sanna_1) into RelationshipToContact

!new Relationship('Rel_SW_Fatou_Emp_Sahel_1')
!Rel_SW_Fatou_Emp_Sahel_1.type := #EMPLOYEE
!insert (P_SW_Fatou_1, Rel_SW_Fatou_Emp_Sahel_1) into ContactToRelationship
!insert (Rel_SW_Fatou_Emp_Sahel_1, C_SW_SahelImpact_1) into RelationshipToContact

!new Relationship('Rel_SW_Fatou_CW_Kojo_1')
!Rel_SW_Fatou_CW_Kojo_1.type := #COWORKER
!insert (P_SW_Fatou_1, Rel_SW_Fatou_CW_Kojo_1) into ContactToRelationship
!insert (Rel_SW_Fatou_CW_Kojo_1, P_SW_Kojo_1) into RelationshipToContact

!new Relationship('Rel_SW_Fatou_CW_SunWeave_1')
!Rel_SW_Fatou_CW_SunWeave_1.type := #COWORKER
!insert (P_SW_Fatou_1, Rel_SW_Fatou_CW_SunWeave_1) into ContactToRelationship
!insert (Rel_SW_Fatou_CW_SunWeave_1, C_SW_SunWeave_1) into RelationshipToContact

!new Relationship('Rel_SW_Fatou_CW_SahelParis_1')
!Rel_SW_Fatou_CW_SahelParis_1.type := #COWORKER
!insert (P_SW_Fatou_1, Rel_SW_Fatou_CW_SahelParis_1) into ContactToRelationship
!insert (Rel_SW_Fatou_CW_SahelParis_1, C_SW_SahelParis_1) into RelationshipToContact

!new Relationship('Rel_SW_SunWeave_Sub_Field_1')
!Rel_SW_SunWeave_Sub_Field_1.type := #SUBDIVISION
!insert (C_SW_SunWeave_1, Rel_SW_SunWeave_Sub_Field_1) into ContactToRelationship
!insert (Rel_SW_SunWeave_Sub_Field_1, C_SW_SunWeave_FieldAccra_1) into RelationshipToContact

!new Relationship('Rel_SW_SunWeave_CW_Aurora_1')
!Rel_SW_SunWeave_CW_Aurora_1.type := #COWORKER
!insert (C_SW_SunWeave_1, Rel_SW_SunWeave_CW_Aurora_1) into ContactToRelationship
!insert (Rel_SW_SunWeave_CW_Aurora_1, C_SW_AuroraStorage_1) into RelationshipToContact

!new Relationship('Rel_SW_SunWeave_CW_HydroNord_1')
!Rel_SW_SunWeave_CW_HydroNord_1.type := #COWORKER
!insert (C_SW_SunWeave_1, Rel_SW_SunWeave_CW_HydroNord_1) into ContactToRelationship
!insert (Rel_SW_SunWeave_CW_HydroNord_1, C_SW_HydroNord_1) into RelationshipToContact

!new Relationship('Rel_SW_SunWeave_CW_Sahel_1')
!Rel_SW_SunWeave_CW_Sahel_1.type := #COWORKER
!insert (C_SW_SunWeave_1, Rel_SW_SunWeave_CW_Sahel_1) into ContactToRelationship
!insert (Rel_SW_SunWeave_CW_Sahel_1, C_SW_SahelImpact_1) into RelationshipToContact

!new Relationship('Rel_SW_SunWeave_CW_Barangay_1')
!Rel_SW_SunWeave_CW_Barangay_1.type := #COWORKER
!insert (C_SW_SunWeave_1, Rel_SW_SunWeave_CW_Barangay_1) into ContactToRelationship
!insert (Rel_SW_SunWeave_CW_Barangay_1, C_SW_BarangaySanIsidro_1) into RelationshipToContact

!new Relationship('Rel_SW_Field_CW_Barangay_1')
!Rel_SW_Field_CW_Barangay_1.type := #COWORKER
!insert (C_SW_SunWeave_FieldAccra_1, Rel_SW_Field_CW_Barangay_1) into ContactToRelationship
!insert (Rel_SW_Field_CW_Barangay_1, C_SW_BarangaySanIsidro_1) into RelationshipToContact

!new Relationship('Rel_SW_Field_CW_Aurora_1')
!Rel_SW_Field_CW_Aurora_1.type := #COWORKER
!insert (C_SW_SunWeave_FieldAccra_1, Rel_SW_Field_CW_Aurora_1) into ContactToRelationship
!insert (Rel_SW_Field_CW_Aurora_1, C_SW_AuroraStorage_1) into RelationshipToContact

!new Relationship('Rel_SW_Aurora_CW_SunWeave_1')
!Rel_SW_Aurora_CW_SunWeave_1.type := #COWORKER
!insert (C_SW_AuroraStorage_1, Rel_SW_Aurora_CW_SunWeave_1) into ContactToRelationship
!insert (Rel_SW_Aurora_CW_SunWeave_1, C_SW_SunWeave_1) into RelationshipToContact

!new Relationship('Rel_SW_Aurora_CW_HydroNord_1')
!Rel_SW_Aurora_CW_HydroNord_1.type := #COWORKER
!insert (C_SW_AuroraStorage_1, Rel_SW_Aurora_CW_HydroNord_1) into ContactToRelationship
!insert (Rel_SW_Aurora_CW_HydroNord_1, C_SW_HydroNord_1) into RelationshipToContact

!new Relationship('Rel_SW_HydroNord_CW_SunWeave_1')
!Rel_SW_HydroNord_CW_SunWeave_1.type := #COWORKER
!insert (C_SW_HydroNord_1, Rel_SW_HydroNord_CW_SunWeave_1) into ContactToRelationship
!insert (Rel_SW_HydroNord_CW_SunWeave_1, C_SW_SunWeave_1) into RelationshipToContact

!new Relationship('Rel_SW_HydroNord_CW_Aurora_1')
!Rel_SW_HydroNord_CW_Aurora_1.type := #COWORKER
!insert (C_SW_HydroNord_1, Rel_SW_HydroNord_CW_Aurora_1) into ContactToRelationship
!insert (Rel_SW_HydroNord_CW_Aurora_1, C_SW_AuroraStorage_1) into RelationshipToContact

!new Relationship('Rel_SW_HydroNord_CW_Sahel_1')
!Rel_SW_HydroNord_CW_Sahel_1.type := #COWORKER
!insert (C_SW_HydroNord_1, Rel_SW_HydroNord_CW_Sahel_1) into ContactToRelationship
!insert (Rel_SW_HydroNord_CW_Sahel_1, C_SW_SahelImpact_1) into RelationshipToContact

!new Relationship('Rel_SW_Sahel_Sub_Paris_1')
!Rel_SW_Sahel_Sub_Paris_1.type := #SUBDIVISION
!insert (C_SW_SahelImpact_1, Rel_SW_Sahel_Sub_Paris_1) into ContactToRelationship
!insert (Rel_SW_Sahel_Sub_Paris_1, C_SW_SahelParis_1) into RelationshipToContact

!new Relationship('Rel_SW_Sahel_CW_SunWeave_1')
!Rel_SW_Sahel_CW_SunWeave_1.type := #COWORKER
!insert (C_SW_SahelImpact_1, Rel_SW_Sahel_CW_SunWeave_1) into ContactToRelationship
!insert (Rel_SW_Sahel_CW_SunWeave_1, C_SW_SunWeave_1) into RelationshipToContact

!new Relationship('Rel_SW_Sahel_CW_HydroNord_1')
!Rel_SW_Sahel_CW_HydroNord_1.type := #COWORKER
!insert (C_SW_SahelImpact_1, Rel_SW_Sahel_CW_HydroNord_1) into ContactToRelationship
!insert (Rel_SW_Sahel_CW_HydroNord_1, C_SW_HydroNord_1) into RelationshipToContact

!new Relationship('Rel_SW_SahelParis_CW_Fatou_1')
!Rel_SW_SahelParis_CW_Fatou_1.type := #COWORKER
!insert (C_SW_SahelParis_1, Rel_SW_SahelParis_CW_Fatou_1) into ContactToRelationship
!insert (Rel_SW_SahelParis_CW_Fatou_1, P_SW_Fatou_1) into RelationshipToContact

!new Relationship('Rel_SW_Barangay_CW_SunWeave_1')
!Rel_SW_Barangay_CW_SunWeave_1.type := #COWORKER
!insert (C_SW_BarangaySanIsidro_1, Rel_SW_Barangay_CW_SunWeave_1) into ContactToRelationship
!insert (Rel_SW_Barangay_CW_SunWeave_1, C_SW_SunWeave_1) into RelationshipToContact

!new Relationship('Rel_SW_Barangay_CW_Field_1')
!Rel_SW_Barangay_CW_Field_1.type := #COWORKER
!insert (C_SW_BarangaySanIsidro_1, Rel_SW_Barangay_CW_Field_1) into ContactToRelationship
!insert (Rel_SW_Barangay_CW_Field_1, C_SW_SunWeave_FieldAccra_1) into RelationshipToContact

!new Relationship('Rel_SW_Barangay_CW_Malou_1')
!Rel_SW_Barangay_CW_Malou_1.type := #COWORKER
!insert (C_SW_BarangaySanIsidro_1, Rel_SW_Barangay_CW_Malou_1) into ContactToRelationship
!insert (Rel_SW_Barangay_CW_Malou_1, P_SW_Malou_1) into RelationshipToContact
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 419 | 0.00% |
| Multiplicities Errors | 0 | 120 | 0.00% |
| Invariants Errors | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 12 | 0.00% |
| Websites | 0 | 12 | 0.00% |
| Emails | 0 | 12 | 0.00% |
| Addresses | 13 | 18 | 72.22% |

| Invalid Addresses | 
|---| 
```
Kotoka Road, 5, Cape Coast
```
```
Independence Avenue, 88, Accra
```
```
Jaro Plaza, 9, Iloilo City
```
```
Plateau, 2, Dakar
```
```
Ring Road Central, 16, Accra
```
```
Rue Saint‑Jacques, 200, Montréal
```
```
Boulevard de la République, 15, Abidjan
```
```
Spintex Road, 14, Accra
```
```
Rizal Street, 1, San Isidro
```
```
Boulevard René‑Lévesque Ouest, 455, Québec City
```
```
Avenue Léopold Sédar Senghor, 10, Dakar
```
```
Hospital Road, 3A, Tamale
```
```
Barangay Hall Road, 1, San Isidro
```

## Category edge
```
!new AddressBook('AB_SingleSuperConnector_1')

!new Person('P_Archivist_1')
!P_Archivist_1.name := 'The Archivist (匿名アーキビスト)'
!P_Archivist_1.phone := '+44 20 0000 0000'
!P_Archivist_1.website := 'urn:contact:archivist'
!P_Archivist_1.email := 'archivist@routing.example'
!P_Archivist_1.title := 'Custodian'
!insert (AB_SingleSuperConnector_1, P_Archivist_1) into AddressBookMadeOfContact

!new Note('Note_Archivist_1')
!Note_Archivist_1.author := 'Archivist'
!Note_Archivist_1.time := Date('2026年02月23日')
!Note_Archivist_1.type := #EMAIL
!Note_Archivist_1.comment := 'Created an address book entry that only makes sense as a relationship router.'
!insert (P_Archivist_1, Note_Archivist_1) into ContactContainsNote

!new Note('Note_Archivist_2')
!Note_Archivist_2.author := 'Archivist'
!Note_Archivist_2.time := Date('23/02/2026')
!Note_Archivist_2.type := #CALL
!Note_Archivist_2.comment := 'Verified each target contact can be reached even if they never initiate any relationships.'
!insert (P_Archivist_1, Note_Archivist_2) into ContactContainsNote

!new Note('Note_Archivist_3')
!Note_Archivist_3.author := 'Archivist'
!Note_Archivist_3.time := Date('Thu, 23 Feb 2026')
!Note_Archivist_3.type := #MEETING
!Note_Archivist_3.comment := 'Met with four parties separately; stored all links as directed edges from me only.'
!insert (P_Archivist_1, Note_Archivist_3) into ContactContainsNote

!new Address('Addr_Archivist_1')
!Addr_Archivist_1.city := 'Valletta'
!Addr_Archivist_1.houseNr := '1/0'
!Addr_Archivist_1.street := 'Archive Lane'
!insert (P_Archivist_1, Addr_Archivist_1) into ContactContainsAddress

!new Person('P_Haakon_1')
!P_Haakon_1.name := 'Håkon Østergård'
!P_Haakon_1.phone := '+47 900 00 000'
!P_Haakon_1.website := 'https://haakon.example.no'
!P_Haakon_1.email := 'haakon.o@example.no'
!P_Haakon_1.title := 'Mr.'
!insert (AB_SingleSuperConnector_1, P_Haakon_1) into AddressBookMadeOfContact

!new Address('Addr_Haakon_1')
!Addr_Haakon_1.city := 'Oslo'
!Addr_Haakon_1.houseNr := '0001'
!Addr_Haakon_1.street := 'Karl Johans gate'
!insert (P_Haakon_1, Addr_Haakon_1) into ContactContainsAddress

!new Address('Addr_Haakon_2')
!Addr_Haakon_2.city := 'Tórshavn'
!Addr_Haakon_2.houseNr := '5'
!Addr_Haakon_2.street := 'Bryggjubakki'
!insert (P_Haakon_1, Addr_Haakon_2) into ContactContainsAddress

!new Person('P_Fatou_1')
!P_Fatou_1.name := 'Fatou Ndiaye'
!P_Fatou_1.phone := '+221 77 000 0000'
!P_Fatou_1.website := 'https://fatou.example.sn'
!P_Fatou_1.email := 'fatou.ndiaye@example.sn'
!P_Fatou_1.title := 'Mme'
!insert (AB_SingleSuperConnector_1, P_Fatou_1) into AddressBookMadeOfContact

!new Note('Note_Fatou_1')
!Note_Fatou_1.author := 'Fatou'
!Note_Fatou_1.time := Date('2026-02-23')
!Note_Fatou_1.type := #EMAIL
!Note_Fatou_1.comment := 'I do not link to anyone; the Archivist links to me twice for redundancy.'
!insert (P_Fatou_1, Note_Fatou_1) into ContactContainsNote

!new Company('C_Paperless_1')
!C_Paperless_1.name := 'कागज़-रहित प्रणालियाँ Pvt Ltd'
!C_Paperless_1.phone := '+91 11 0000 0000'
!C_Paperless_1.website := 'https://paperless.example.in'
!C_Paperless_1.email := 'info@paperless.example.in'
!C_Paperless_1.industry := 'Document automation'
!insert (AB_SingleSuperConnector_1, C_Paperless_1) into AddressBookMadeOfContact

!new Address('Addr_Paperless_1')
!Addr_Paperless_1.city := 'New Delhi'
!Addr_Paperless_1.houseNr := '१२-A'
!Addr_Paperless_1.street := 'Ring Road'
!insert (C_Paperless_1, Addr_Paperless_1) into ContactContainsAddress

!new Address('Addr_Paperless_2')
!Addr_Paperless_2.city := 'Kathmandu'
!Addr_Paperless_2.houseNr := '3'
!Addr_Paperless_2.street := 'धेरै सडक'
!insert (C_Paperless_1, Addr_Paperless_2) into ContactContainsAddress

!new Address('Addr_Paperless_3')
!Addr_Paperless_3.city := 'Port Louis'
!Addr_Paperless_3.houseNr := 'Lot 7'
!Addr_Paperless_3.street := 'Avenue des Docks'
!insert (C_Paperless_1, Addr_Paperless_3) into ContactContainsAddress

!new Company('C_MicroEtats_1')
!C_MicroEtats_1.name := 'Société des Micro-États'
!C_MicroEtats_1.phone := '+377 00 00 00 00'
!C_MicroEtats_1.website := 'https://micro-etats.example.mc'
!C_MicroEtats_1.email := 'contact@micro-etats.example.mc'
!C_MicroEtats_1.industry := 'Jurisdictional consulting'
!insert (AB_SingleSuperConnector_1, C_MicroEtats_1) into AddressBookMadeOfContact

!new Note('Note_MicroEtats_1')
!Note_MicroEtats_1.author := 'Legal Desk'
!Note_MicroEtats_1.time := Date('2026-02-23')
!Note_MicroEtats_1.type := #MEETING
!Note_MicroEtats_1.comment := 'Agreed to be modeled simultaneously as boss, subdivision, and employer in a test dataset.'
!insert (C_MicroEtats_1, Note_MicroEtats_1) into ContactContainsNote

!new Note('Note_MicroEtats_2')
!Note_MicroEtats_2.author := 'Legal Desk'
!Note_MicroEtats_2.time := Date('2026-02-23')
!Note_MicroEtats_2.type := #CALL
!Note_MicroEtats_2.comment := 'Confirmed that contradictions are acceptable because RelationshipType is just a label.'
!insert (C_MicroEtats_1, Note_MicroEtats_2) into ContactContainsNote

!new Address('Addr_MicroEtats_1')
!Addr_MicroEtats_1.city := 'Monaco'
!Addr_MicroEtats_1.houseNr := '1'
!Addr_MicroEtats_1.street := 'Rue des Tests'
!insert (C_MicroEtats_1, Addr_MicroEtats_1) into ContactContainsAddress

!new Relationship('Rel_Archivist_R1_1')
!Rel_Archivist_R1_1.type := #BOSS
!insert (P_Archivist_1, Rel_Archivist_R1_1) into ContactToRelationship
!insert (Rel_Archivist_R1_1, P_Haakon_1) into RelationshipToContact

!new Relationship('Rel_Archivist_R2_1')
!Rel_Archivist_R2_1.type := #EMPLOYEE
!insert (P_Archivist_1, Rel_Archivist_R2_1) into ContactToRelationship
!insert (Rel_Archivist_R2_1, P_Haakon_1) into RelationshipToContact

!new Relationship('Rel_Archivist_R3_1')
!Rel_Archivist_R3_1.type := #COWORKER
!insert (P_Archivist_1, Rel_Archivist_R3_1) into ContactToRelationship
!insert (Rel_Archivist_R3_1, P_Fatou_1) into RelationshipToContact

!new Relationship('Rel_Archivist_R4_1')
!Rel_Archivist_R4_1.type := #COWORKER
!insert (P_Archivist_1, Rel_Archivist_R4_1) into ContactToRelationship
!insert (Rel_Archivist_R4_1, P_Fatou_1) into RelationshipToContact

!new Relationship('Rel_Archivist_R5_1')
!Rel_Archivist_R5_1.type := #SUBDIVISION
!insert (P_Archivist_1, Rel_Archivist_R5_1) into ContactToRelationship
!insert (Rel_Archivist_R5_1, C_Paperless_1) into RelationshipToContact

!new Relationship('Rel_Archivist_R6_1')
!Rel_Archivist_R6_1.type := #EMPLOYEE
!insert (P_Archivist_1, Rel_Archivist_R6_1) into ContactToRelationship
!insert (Rel_Archivist_R6_1, C_Paperless_1) into RelationshipToContact

!new Relationship('Rel_Archivist_R7_1')
!Rel_Archivist_R7_1.type := #BOSS
!insert (P_Archivist_1, Rel_Archivist_R7_1) into ContactToRelationship
!insert (Rel_Archivist_R7_1, C_MicroEtats_1) into RelationshipToContact

!new Relationship('Rel_Archivist_R8_1')
!Rel_Archivist_R8_1.type := #SUBDIVISION
!insert (P_Archivist_1, Rel_Archivist_R8_1) into ContactToRelationship
!insert (Rel_Archivist_R8_1, C_MicroEtats_1) into RelationshipToContact

!new Relationship('Rel_Archivist_R9_1')
!Rel_Archivist_R9_1.type := #EMPLOYEE
!insert (P_Archivist_1, Rel_Archivist_R9_1) into ContactToRelationship
!insert (Rel_Archivist_R9_1, C_MicroEtats_1) into RelationshipToContact
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 143 | 0.00% |
| Multiplicities Errors | 0 | 36 | 0.00% |
| Invariants Errors | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 5 | 0.00% |
| Websites | 1 | 5 | 20.00% |
| Emails | 0 | 5 | 0.00% |
| Addresses | 5 | 7 | 71.43% |

| Invalid Websites | 
|---| 
```
urn:contact:archivist
```

| Invalid Addresses | 
|---| 
```
Ring Road, १२-A, New Delhi
```
```
धेरै सडक, 3, Kathmandu
```
```
Avenue des Docks, Lot 7, Port Louis
```
```
Rue des Tests, 1, Monaco
```
```
Archive Lane, 1/0, Valletta
```

## Category invalid
```
!new AddressBook('AB6_RaoKhan_WeddingPlanning_1')

!new Person('P_AB6_Ananya_1')
!P_AB6_Ananya_1.name := 'Ananya Rao'
!P_AB6_Ananya_1.title := 'Ms.'
!P_AB6_Ananya_1.phone := '+91 98450 11223'
!P_AB6_Ananya_1.website := 'https://ananya-rao.example.in'
!P_AB6_Ananya_1.email := 'ananya.rao@example.in'
!insert (AB6_RaoKhan_WeddingPlanning_1, P_AB6_Ananya_1) into AddressBookMadeOfContact

!new Address('Addr_AB6_AD60_1')
!Addr_AB6_AD60_1.city := 'Bengaluru'
!Addr_AB6_AD60_1.street := '12th Main, Indiranagar'
!Addr_AB6_AD60_1.houseNr := '418'
!insert (P_AB6_Ananya_1, Addr_AB6_AD60_1) into ContactContainsAddress

!new Note('Note_AB6_N60_1')
!Note_AB6_N60_1.author := 'Ananya Rao'
!Note_AB6_N60_1.time := Date('2026-01-30')
!Note_AB6_N60_1.type := #CALL
!Note_AB6_N60_1.comment := 'Spoke with priest about muhurta timings; confirm final slot after venue booking.'
!insert (P_AB6_Ananya_1, Note_AB6_N60_1) into ContactContainsNote

!new Person('P_AB6_Imran_1')
!P_AB6_Imran_1.name := 'Imran Khan'
!P_AB6_Imran_1.title := 'Mr.'
!P_AB6_Imran_1.phone := '+91 99860 33445'
!P_AB6_Imran_1.website := 'https://imran-khan.example.in'
!P_AB6_Imran_1.email := 'imran.khan@example.in'
!insert (AB6_RaoKhan_WeddingPlanning_1, P_AB6_Imran_1) into AddressBookMadeOfContact

!new Note('Note_AB6_N61_1')
!Note_AB6_N61_1.author := 'Imran Khan'
!Note_AB6_N61_1.time := Date('2026-02-02')
!Note_AB6_N61_1.type := #EMAIL
!Note_AB6_N61_1.comment := 'Emailed caterer to request a separate vegetarian buffet line and nut-free dessert options.'
!insert (P_AB6_Imran_1, Note_AB6_N61_1) into ContactContainsNote

!new Company('C_AB6_ShubhamHall_1')
!C_AB6_ShubhamHall_1.name := 'Shubham Convention Hall'
!C_AB6_ShubhamHall_1.industry := 'Event venue services'
!C_AB6_ShubhamHall_1.phone := '+91 80 4123 9000'
!C_AB6_ShubhamHall_1.website := 'https://shubhamhall.example.in'
!C_AB6_ShubhamHall_1.email := 'bookings@shubhamhall.example.in'
!insert (AB6_RaoKhan_WeddingPlanning_1, C_AB6_ShubhamHall_1) into AddressBookMadeOfContact

!new Address('Addr_AB6_AD61_1')
!Addr_AB6_AD61_1.city := 'Bengaluru'
!Addr_AB6_AD61_1.street := 'Tumkur Road'
!Addr_AB6_AD61_1.houseNr := '55'
!insert (C_AB6_ShubhamHall_1, Addr_AB6_AD61_1) into ContactContainsAddress

!new Company('C_AB6_CateringDesk_1')
!C_AB6_CateringDesk_1.name := 'Shubham Convention Hall – Catering Partner Desk'
!C_AB6_CateringDesk_1.industry := 'Event catering coordination'
!C_AB6_CateringDesk_1.phone := '+91 80 4123 9005'
!C_AB6_CateringDesk_1.website := 'https://shubhamhall.example.in/catering'
!C_AB6_CateringDesk_1.email := 'cateringdesk@shubhamhall.example.in'
!insert (AB6_RaoKhan_WeddingPlanning_1, C_AB6_CateringDesk_1) into AddressBookMadeOfContact

!new Relationship('Rel_AB6_R60_1')
!Rel_AB6_R60_1.type := #COWORKER
!insert (P_AB6_Ananya_1, Rel_AB6_R60_1) into ContactToRelationship
!insert (Rel_AB6_R60_1, P_AB6_Imran_1) into RelationshipToContact

!new Relationship('Rel_AB6_R61_1')
!Rel_AB6_R61_1.type := #COWORKER
!insert (P_AB6_Imran_1, Rel_AB6_R61_1) into ContactToRelationship
!insert (Rel_AB6_R61_1, C_AB6_ShubhamHall_1) into RelationshipToContact

!new Relationship('Rel_AB6_R62_1')
!Rel_AB6_R62_1.type := #SUBDIVISION
!insert (C_AB6_ShubhamHall_1, Rel_AB6_R62_1) into ContactToRelationship
!insert (Rel_AB6_R62_1, C_AB6_CateringDesk_1) into RelationshipToContact

!new Address('Addr_AB6_AD62_1')
!Addr_AB6_AD62_1.city := 'Bengaluru'
!Addr_AB6_AD62_1.street := 'Cubbon Park (Main Gate)'
!Addr_AB6_AD62_1.houseNr := '—'

!new Note('Note_AB6_N62_1')
!Note_AB6_N62_1.author := 'Wedding Planning Spreadsheet (shared)'
!Note_AB6_N62_1.time := Date('2026-02-07')
!Note_AB6_N62_1.type := #MEETING
!Note_AB6_N62_1.comment := 'Checklist: confirm guest count, finalize seating draft, book mehndi artist, print signage, confirm parking volunteers.'
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 2 | 14 | 14.29% |
| Invariants Errors (Not included on General) | 0 | 1 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `ContactContainsAddress':
  Object `Addr_AB6_AD62_1' of class `Address' is connected to 0 objects of class `Contact'
  at association end `source' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `ContactContainsNote':
  Object `Note_AB6_N62_1' of class `Note' is connected to 0 objects of class `Contact'
  at association end `contact' but the multiplicity is specified as `1'.
```

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 4 | 0.00% |
| Websites | 0 | 4 | 0.00% |
| Emails | 0 | 4 | 0.00% |
| Addresses | 3 | 3 | 100.00% |

| Invalid Addresses | 
|---| 
```
Cubbon Park (Main Gate), —, Bengaluru
```
```
Tumkur Road, 55, Bengaluru
```
```
12th Main, Indiranagar, 418, Bengaluru
```

## Generation 5 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 854 | 0.00% |
| Multiplicities Errors | 0 | 212 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 2 | 14 | 14.29% |
| Invariants Errors (Not included on General) | 0 | 1 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `ContactContainsAddress':
  Object `Addr_AB6_AD62_1' of class `Address' is connected to 0 objects of class `Contact'
  at association end `source' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `ContactContainsNote':
  Object `Note_AB6_N62_1' of class `Note' is connected to 0 objects of class `Contact'
  at association end `contact' but the multiplicity is specified as `1'.
```

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 31 | 0.00% |
| Websites | 2 | 31 | 6.45% |
| Emails | 0 | 31 | 0.00% |
| Addresses | 26 | 36 | 72.22% |

| Invalid Websites | 
|---| 
```

```
```
urn:contact:archivist
```

| Invalid Addresses | 
|---| 
```
Jl. Diponegoro, 17, Jakarta
```
```
Herengracht, 312, Amsterdam
```
```
Transformatorweg, 12, Amsterdam
```
```
Houthavens, 5, Amsterdam
```
```
Oudezijds Achterburgwal, 101, Amsterdam
```
```
Kotoka Road, 5, Cape Coast
```
```
Independence Avenue, 88, Accra
```
```
Jaro Plaza, 9, Iloilo City
```
```
Plateau, 2, Dakar
```
```
Ring Road Central, 16, Accra
```
```
Rue Saint‑Jacques, 200, Montréal
```
```
Boulevard de la République, 15, Abidjan
```
```
Spintex Road, 14, Accra
```
```
Rizal Street, 1, San Isidro
```
```
Boulevard René‑Lévesque Ouest, 455, Québec City
```
```
Avenue Léopold Sédar Senghor, 10, Dakar
```
```
Hospital Road, 3A, Tamale
```
```
Barangay Hall Road, 1, San Isidro
```
```
Ring Road, १२-A, New Delhi
```
```
धेरै सडक, 3, Kathmandu
```
```
Avenue des Docks, Lot 7, Port Louis
```
```
Rue des Tests, 1, Monaco
```
```
Archive Lane, 1/0, Valletta
```
```
Cubbon Park (Main Gate), —, Bengaluru
```
```
Tumkur Road, 55, Bengaluru
```
```
12th Main, Indiranagar, 418, Bengaluru
```

# Generation 6
## Category baseline
```
!new AddressBook('AB_CycloneKiboRelief_1')

!new Person('P_Kibo_Rui_1')
!P_Kibo_Rui_1.name := 'Rui Matola'
!P_Kibo_Rui_1.phone := '+258 21 555 090'
!P_Kibo_Rui_1.website := 'https://rui-matola.example'
!P_Kibo_Rui_1.email := 'rui.matola@example.mz'
!P_Kibo_Rui_1.title := 'Eng.'
!insert (AB_CycloneKiboRelief_1, P_Kibo_Rui_1) into AddressBookMadeOfContact

!new Person('P_Kibo_Agnes_1')
!P_Kibo_Agnes_1.name := 'Agnes Mwale'
!P_Kibo_Agnes_1.phone := '+265 1 555 771'
!P_Kibo_Agnes_1.website := 'https://agnes-mwale.example'
!P_Kibo_Agnes_1.email := 'agnes.mwale@example.mw'
!P_Kibo_Agnes_1.title := 'Sr.'
!insert (AB_CycloneKiboRelief_1, P_Kibo_Agnes_1) into AddressBookMadeOfContact

!new Person('P_Kibo_Tomas_1')
!P_Kibo_Tomas_1.name := 'Tomás Pereira'
!P_Kibo_Tomas_1.phone := '+351 22 555 1188'
!P_Kibo_Tomas_1.website := 'https://tomas-pereira.example'
!P_Kibo_Tomas_1.email := 'tomas.pereira@example.pt'
!P_Kibo_Tomas_1.title := 'Mr.'
!insert (AB_CycloneKiboRelief_1, P_Kibo_Tomas_1) into AddressBookMadeOfContact

!new Company('C_Kibo_EOC_Maputo_1')
!C_Kibo_EOC_Maputo_1.name := 'Maputo Emergency Operations Center (EOC)'
!C_Kibo_EOC_Maputo_1.phone := '+258 21 555 000'
!C_Kibo_EOC_Maputo_1.website := 'https://eoc-maputo.example'
!C_Kibo_EOC_Maputo_1.email := 'desk@eoc-maputo.example'
!C_Kibo_EOC_Maputo_1.industry := 'Disaster response coordination (government)'
!insert (AB_CycloneKiboRelief_1, C_Kibo_EOC_Maputo_1) into AddressBookMadeOfContact

!new Company('C_Kibo_EOC_FieldBeira_1')
!C_Kibo_EOC_FieldBeira_1.name := 'Maputo EOC – Field Unit (Beira)'
!C_Kibo_EOC_FieldBeira_1.phone := '+258 23 555 212'
!C_Kibo_EOC_FieldBeira_1.website := 'https://eoc-maputo.example/field-beira'
!C_Kibo_EOC_FieldBeira_1.email := 'field.beira@eoc-maputo.example'
!C_Kibo_EOC_FieldBeira_1.industry := 'Field operations (emergency response)'
!insert (AB_CycloneKiboRelief_1, C_Kibo_EOC_FieldBeira_1) into AddressBookMadeOfContact

!new Company('C_Kibo_HelpingHands_1')
!C_Kibo_HelpingHands_1.name := 'Helping Hands International'
!C_Kibo_HelpingHands_1.phone := '+27 11 555 4040'
!C_Kibo_HelpingHands_1.website := 'https://helpinghands.example'
!C_Kibo_HelpingHands_1.email := 'coordination@helpinghands.example'
!C_Kibo_HelpingHands_1.industry := 'Humanitarian NGO'
!insert (AB_CycloneKiboRelief_1, C_Kibo_HelpingHands_1) into AddressBookMadeOfContact

!new Company('C_Kibo_SunCo_1')
!C_Kibo_SunCo_1.name := 'SunCo Solar Solutions Lda'
!C_Kibo_SunCo_1.phone := '+244 222 555 313'
!C_Kibo_SunCo_1.website := 'https://sunco-solar.example'
!C_Kibo_SunCo_1.email := 'dispatch@sunco-solar.example'
!C_Kibo_SunCo_1.industry := 'Solar power systems and microgrid deployment'
!insert (AB_CycloneKiboRelief_1, C_Kibo_SunCo_1) into AddressBookMadeOfContact

!new Company('C_Kibo_Coastline_1')
!C_Kibo_Coastline_1.name := 'Coastline Logistics SARL'
!C_Kibo_Coastline_1.phone := '+261 20 555 8899'
!C_Kibo_Coastline_1.website := 'https://coastline-logistics.example'
!C_Kibo_Coastline_1.email := 'ops@coastline-logistics.example'
!C_Kibo_Coastline_1.industry := 'Regional freight and last-mile delivery'
!insert (AB_CycloneKiboRelief_1, C_Kibo_Coastline_1) into AddressBookMadeOfContact

!new Company('C_Kibo_AquaPure_1')
!C_Kibo_AquaPure_1.name := 'AquaPure Water Services PLC'
!C_Kibo_AquaPure_1.phone := '+251 11 555 6670'
!C_Kibo_AquaPure_1.website := 'https://aquapure.example'
!C_Kibo_AquaPure_1.email := 'support@aquapure.example'
!C_Kibo_AquaPure_1.industry := 'Water treatment and purification equipment'
!insert (AB_CycloneKiboRelief_1, C_Kibo_AquaPure_1) into AddressBookMadeOfContact

!new Address('Addr_Kibo_Rui_Maputo_1')
!Addr_Kibo_Rui_Maputo_1.street := 'Av. Julius Nyerere'
!Addr_Kibo_Rui_Maputo_1.houseNr := '1140'
!Addr_Kibo_Rui_Maputo_1.city := 'Maputo'
!insert (P_Kibo_Rui_1, Addr_Kibo_Rui_Maputo_1) into ContactContainsAddress

!new Note('Note_Kibo_Rui_1')
!Note_Kibo_Rui_1.author := 'Maputo EOC Duty Desk'
!Note_Kibo_Rui_1.time := Date('2026-02-02')
!Note_Kibo_Rui_1.type := #CALL
!Note_Kibo_Rui_1.comment := 'Rui confirmed he will be the single point of contact for supplier approvals and transport routing.'
!insert (P_Kibo_Rui_1, Note_Kibo_Rui_1) into ContactContainsNote

!new Note('Note_Kibo_Rui_2')
!Note_Kibo_Rui_2.author := 'Rui Matola'
!Note_Kibo_Rui_2.time := Date('2026-02-04')
!Note_Kibo_Rui_2.type := #EMAIL
!Note_Kibo_Rui_2.comment := 'Sent consolidated needs list: water purification units, solar lanterns, and tarpaulins; requested delivery ETA to Beira.'
!insert (P_Kibo_Rui_1, Note_Kibo_Rui_2) into ContactContainsNote

!new Note('Note_Kibo_Agnes_1')
!Note_Kibo_Agnes_1.author := 'Agnes Mwale'
!Note_Kibo_Agnes_1.time := Date('2026-02-03')
!Note_Kibo_Agnes_1.type := #MEETING
!Note_Kibo_Agnes_1.comment := 'Met with Field Unit in Beira; agreed on distribution plan prioritizing clinics and temporary shelters.'
!insert (P_Kibo_Agnes_1, Note_Kibo_Agnes_1) into ContactContainsNote

!new Address('Addr_Kibo_Tomas_Porto_1')
!Addr_Kibo_Tomas_Porto_1.street := 'Rua do Porto'
!Addr_Kibo_Tomas_Porto_1.houseNr := '17'
!Addr_Kibo_Tomas_Porto_1.city := 'Porto'
!insert (P_Kibo_Tomas_1, Addr_Kibo_Tomas_Porto_1) into ContactContainsAddress

!new Address('Addr_Kibo_Tomas_Beira_1')
!Addr_Kibo_Tomas_Beira_1.street := 'Estrada Nacional 1'
!Addr_Kibo_Tomas_Beira_1.houseNr := 'KM 12'
!Addr_Kibo_Tomas_Beira_1.city := 'Beira'
!insert (P_Kibo_Tomas_1, Addr_Kibo_Tomas_Beira_1) into ContactContainsAddress

!new Note('Note_Kibo_Tomas_1')
!Note_Kibo_Tomas_1.author := 'Tomás Pereira'
!Note_Kibo_Tomas_1.time := Date('2026-02-05')
!Note_Kibo_Tomas_1.type := #CALL
!Note_Kibo_Tomas_1.comment := 'Called Coastline Logistics to reserve two refrigerated trucks for medical cold-chain boxes.'
!insert (P_Kibo_Tomas_1, Note_Kibo_Tomas_1) into ContactContainsNote

!new Address('Addr_Kibo_EOC_Maputo_1')
!Addr_Kibo_EOC_Maputo_1.street := 'Praça da Independência'
!Addr_Kibo_EOC_Maputo_1.houseNr := '1'
!Addr_Kibo_EOC_Maputo_1.city := 'Maputo'
!insert (C_Kibo_EOC_Maputo_1, Addr_Kibo_EOC_Maputo_1) into ContactContainsAddress

!new Note('Note_Kibo_EOC_1')
!Note_Kibo_EOC_1.author := 'EOC Logistics Section'
!Note_Kibo_EOC_1.time := Date('2026-02-01')
!Note_Kibo_EOC_1.type := #EMAIL
!Note_Kibo_EOC_1.comment := 'Issued vendor onboarding instructions and documentation requirements for emergency procurement.'
!insert (C_Kibo_EOC_Maputo_1, Note_Kibo_EOC_1) into ContactContainsNote

!new Address('Addr_Kibo_FieldBeira_1')
!Addr_Kibo_FieldBeira_1.street := 'Av. do Zimbabwe'
!Addr_Kibo_FieldBeira_1.houseNr := '260'
!Addr_Kibo_FieldBeira_1.city := 'Beira'
!insert (C_Kibo_EOC_FieldBeira_1, Addr_Kibo_FieldBeira_1) into ContactContainsAddress

!new Address('Addr_Kibo_HHI_Johannesburg_1')
!Addr_Kibo_HHI_Johannesburg_1.street := 'Jan Smuts Avenue'
!Addr_Kibo_HHI_Johannesburg_1.houseNr := '50'
!Addr_Kibo_HHI_Johannesburg_1.city := 'Johannesburg'
!insert (C_Kibo_HelpingHands_1, Addr_Kibo_HHI_Johannesburg_1) into ContactContainsAddress

!new Address('Addr_Kibo_HHI_Beira_1')
!Addr_Kibo_HHI_Beira_1.street := 'Rua da Frente'
!Addr_Kibo_HHI_Beira_1.houseNr := '9'
!Addr_Kibo_HHI_Beira_1.city := 'Beira'
!insert (C_Kibo_HelpingHands_1, Addr_Kibo_HHI_Beira_1) into ContactContainsAddress

!new Note('Note_Kibo_HHI_1')
!Note_Kibo_HHI_1.author := 'Helping Hands Logistics'
!Note_Kibo_HHI_1.time := Date('2026-02-02')
!Note_Kibo_HHI_1.type := #CALL
!Note_Kibo_HHI_1.comment := 'Confirmed shared warehousing arrangement with Tomás for incoming hygiene kits.'
!insert (C_Kibo_HelpingHands_1, Note_Kibo_HHI_1) into ContactContainsNote

!new Address('Addr_Kibo_SunCo_Luanda_1')
!Addr_Kibo_SunCo_Luanda_1.street := 'Rua Rainha Ginga'
!Addr_Kibo_SunCo_Luanda_1.houseNr := '101'
!Addr_Kibo_SunCo_Luanda_1.city := 'Luanda'
!insert (C_Kibo_SunCo_1, Addr_Kibo_SunCo_Luanda_1) into ContactContainsAddress

!new Note('Note_Kibo_SunCo_1')
!Note_Kibo_SunCo_1.author := 'SunCo Ops'
!Note_Kibo_SunCo_1.time := Date('2026-02-06')
!Note_Kibo_SunCo_1.type := #EMAIL
!Note_Kibo_SunCo_1.comment := 'Confirmed availability of 120 solar lanterns and 6 portable clinic power kits; requested delivery coordinates.'
!insert (C_Kibo_SunCo_1, Note_Kibo_SunCo_1) into ContactContainsNote

!new Address('Addr_Kibo_Coastline_Toamasina_1')
!Addr_Kibo_Coastline_Toamasina_1.street := 'Boulevard de l’Indépendance'
!Addr_Kibo_Coastline_Toamasina_1.houseNr := '27'
!Addr_Kibo_Coastline_Toamasina_1.city := 'Toamasina'
!insert (C_Kibo_Coastline_1, Addr_Kibo_Coastline_Toamasina_1) into ContactContainsAddress

!new Note('Note_Kibo_AquaPure_1')
!Note_Kibo_AquaPure_1.author := 'Agnes Mwale'
!Note_Kibo_AquaPure_1.time := Date('2026-02-07')
!Note_Kibo_AquaPure_1.type := #CALL
!Note_Kibo_AquaPure_1.comment := 'Discussed spare filter availability and training handouts for local volunteers in Beira.'
!insert (C_Kibo_AquaPure_1, Note_Kibo_AquaPure_1) into ContactContainsNote

!new Relationship('Rel_Kibo_Rui_to_EOC_Employee_1')
!Rel_Kibo_Rui_to_EOC_Employee_1.type := #EMPLOYEE
!insert (P_Kibo_Rui_1, Rel_Kibo_Rui_to_EOC_Employee_1) into ContactToRelationship
!insert (Rel_Kibo_Rui_to_EOC_Employee_1, C_Kibo_EOC_Maputo_1) into RelationshipToContact

!new Relationship('Rel_Kibo_Rui_to_Tomas_Boss_1')
!Rel_Kibo_Rui_to_Tomas_Boss_1.type := #BOSS
!insert (P_Kibo_Rui_1, Rel_Kibo_Rui_to_Tomas_Boss_1) into ContactToRelationship
!insert (Rel_Kibo_Rui_to_Tomas_Boss_1, P_Kibo_Tomas_1) into RelationshipToContact

!new Relationship('Rel_Kibo_Rui_to_Agnes_Coworker_1')
!Rel_Kibo_Rui_to_Agnes_Coworker_1.type := #COWORKER
!insert (P_Kibo_Rui_1, Rel_Kibo_Rui_to_Agnes_Coworker_1) into ContactToRelationship
!insert (Rel_Kibo_Rui_to_Agnes_Coworker_1, P_Kibo_Agnes_1) into RelationshipToContact

!new Relationship('Rel_Kibo_Agnes_to_HHI_Employee_1')
!Rel_Kibo_Agnes_to_HHI_Employee_1.type := #EMPLOYEE
!insert (P_Kibo_Agnes_1, Rel_Kibo_Agnes_to_HHI_Employee_1) into ContactToRelationship
!insert (Rel_Kibo_Agnes_to_HHI_Employee_1, C_Kibo_HelpingHands_1) into RelationshipToContact

!new Relationship('Rel_Kibo_Agnes_to_FieldBeira_Coworker_1')
!Rel_Kibo_Agnes_to_FieldBeira_Coworker_1.type := #COWORKER
!insert (P_Kibo_Agnes_1, Rel_Kibo_Agnes_to_FieldBeira_Coworker_1) into ContactToRelationship
!insert (Rel_Kibo_Agnes_to_FieldBeira_Coworker_1, C_Kibo_EOC_FieldBeira_1) into RelationshipToContact

!new Relationship('Rel_Kibo_Agnes_to_AquaPure_Coworker_1')
!Rel_Kibo_Agnes_to_AquaPure_Coworker_1.type := #COWORKER
!insert (P_Kibo_Agnes_1, Rel_Kibo_Agnes_to_AquaPure_Coworker_1) into ContactToRelationship
!insert (Rel_Kibo_Agnes_to_AquaPure_Coworker_1, C_Kibo_AquaPure_1) into RelationshipToContact

!new Relationship('Rel_Kibo_Tomas_to_Rui_Employee_1')
!Rel_Kibo_Tomas_to_Rui_Employee_1.type := #EMPLOYEE
!insert (P_Kibo_Tomas_1, Rel_Kibo_Tomas_to_Rui_Employee_1) into ContactToRelationship
!insert (Rel_Kibo_Tomas_to_Rui_Employee_1, P_Kibo_Rui_1) into RelationshipToContact

!new Relationship('Rel_Kibo_Tomas_to_Coastline_Coworker_1')
!Rel_Kibo_Tomas_to_Coastline_Coworker_1.type := #COWORKER
!insert (P_Kibo_Tomas_1, Rel_Kibo_Tomas_to_Coastline_Coworker_1) into ContactToRelationship
!insert (Rel_Kibo_Tomas_to_Coastline_Coworker_1, C_Kibo_Coastline_1) into RelationshipToContact

!new Relationship('Rel_Kibo_EOC_to_FieldBeira_Subdivision_1')
!Rel_Kibo_EOC_to_FieldBeira_Subdivision_1.type := #SUBDIVISION
!insert (C_Kibo_EOC_Maputo_1, Rel_Kibo_EOC_to_FieldBeira_Subdivision_1) into ContactToRelationship
!insert (Rel_Kibo_EOC_to_FieldBeira_Subdivision_1, C_Kibo_EOC_FieldBeira_1) into RelationshipToContact

!new Relationship('Rel_Kibo_EOC_to_Rui_Boss_1')
!Rel_Kibo_EOC_to_Rui_Boss_1.type := #BOSS
!insert (C_Kibo_EOC_Maputo_1, Rel_Kibo_EOC_to_Rui_Boss_1) into ContactToRelationship
!insert (Rel_Kibo_EOC_to_Rui_Boss_1, P_Kibo_Rui_1) into RelationshipToContact

!new Relationship('Rel_Kibo_FieldBeira_to_Coastline_Coworker_1')
!Rel_Kibo_FieldBeira_to_Coastline_Coworker_1.type := #COWORKER
!insert (C_Kibo_EOC_FieldBeira_1, Rel_Kibo_FieldBeira_to_Coastline_Coworker_1) into ContactToRelationship
!insert (Rel_Kibo_FieldBeira_to_Coastline_Coworker_1, C_Kibo_Coastline_1) into RelationshipToContact

!new Relationship('Rel_Kibo_FieldBeira_to_SunCo_Boss_1')
!Rel_Kibo_FieldBeira_to_SunCo_Boss_1.type := #BOSS
!insert (C_Kibo_EOC_FieldBeira_1, Rel_Kibo_FieldBeira_to_SunCo_Boss_1) into ContactToRelationship
!insert (Rel_Kibo_FieldBeira_to_SunCo_Boss_1, C_Kibo_SunCo_1) into RelationshipToContact

!new Relationship('Rel_Kibo_HHI_to_Agnes_Boss_1')
!Rel_Kibo_HHI_to_Agnes_Boss_1.type := #BOSS
!insert (C_Kibo_HelpingHands_1, Rel_Kibo_HHI_to_Agnes_Boss_1) into ContactToRelationship
!insert (Rel_Kibo_HHI_to_Agnes_Boss_1, P_Kibo_Agnes_1) into RelationshipToContact

!new Relationship('Rel_Kibo_SunCo_to_Coastline_Coworker_1')
!Rel_Kibo_SunCo_to_Coastline_Coworker_1.type := #COWORKER
!insert (C_Kibo_SunCo_1, Rel_Kibo_SunCo_to_Coastline_Coworker_1) into ContactToRelationship
!insert (Rel_Kibo_SunCo_to_Coastline_Coworker_1, C_Kibo_Coastline_1) into RelationshipToContact

!new Relationship('Rel_Kibo_Coastline_to_FieldBeira_Employee_1')
!Rel_Kibo_Coastline_to_FieldBeira_Employee_1.type := #EMPLOYEE
!insert (C_Kibo_Coastline_1, Rel_Kibo_Coastline_to_FieldBeira_Employee_1) into ContactToRelationship
!insert (Rel_Kibo_Coastline_to_FieldBeira_Employee_1, C_Kibo_EOC_FieldBeira_1) into RelationshipToContact

!new Relationship('Rel_Kibo_AquaPure_to_HHI_Coworker_1')
!Rel_Kibo_AquaPure_to_HHI_Coworker_1.type := #COWORKER
!insert (C_Kibo_AquaPure_1, Rel_Kibo_AquaPure_to_HHI_Coworker_1) into ContactToRelationship
!insert (Rel_Kibo_AquaPure_to_HHI_Coworker_1, C_Kibo_HelpingHands_1) into RelationshipToContact
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 221 | 0.00% |
| Multiplicities Errors | 0 | 58 | 0.00% |
| Invariants Errors | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 9 | 0.00% |
| Websites | 0 | 9 | 0.00% |
| Emails | 0 | 9 | 0.00% |
| Addresses | 8 | 9 | 88.89% |

| Invalid Addresses | 
|---| 
```
Rua da Frente, 9, Beira
```
```
Boulevard de l’Indépendance, 27, Toamasina
```
```
Jan Smuts Avenue, 50, Johannesburg
```
```
Praça da Independência, 1, Maputo
```
```
Av. do Zimbabwe, 260, Beira
```
```
Rua do Porto, 17, Porto
```
```
Estrada Nacional 1, KM 12, Beira
```
```
Rua Rainha Ginga, 101, Luanda
```

## Category boundary
```
!new AddressBook('AB_OutgoingHub_NoDetails_1')

!new Company('C_Aurora_1')
!C_Aurora_1.name := 'Aurora Marítima AS'
!C_Aurora_1.phone := '+47 21 000 111'
!C_Aurora_1.website := 'https://aurora-maritima.example.no'
!C_Aurora_1.email := 'contact@aurora-maritima.example.no'
!C_Aurora_1.industry := 'Shipping & Marine Services'
!insert (AB_OutgoingHub_NoDetails_1, C_Aurora_1) into AddressBookMadeOfContact

!new Person('P_SO_1')
!P_SO_1.name := 'Saoirse Ó Dálaigh'
!P_SO_1.phone := '+353 1 555 0202'
!P_SO_1.website := ''
!P_SO_1.email := 'saoirse.odalaigh@example.ie'
!P_SO_1.title := 'Mx.'
!insert (AB_OutgoingHub_NoDetails_1, P_SO_1) into AddressBookMadeOfContact

!new Person('P_OK_1')
!P_OK_1.name := 'Omar El Khatib'
!P_OK_1.phone := '+212 5 0000 0303'
!P_OK_1.website := 'https://omar-el-khatib.example.ma'
!P_OK_1.email := ''
!P_OK_1.title := ''
!insert (AB_OutgoingHub_NoDetails_1, P_OK_1) into AddressBookMadeOfContact

!new Person('P_SV_1')
!P_SV_1.name := 'Svitlana Hrytsenko'
!P_SV_1.phone := '+380 44 000 0404'
!P_SV_1.website := ''
!P_SV_1.email := 'svitlana.hrytsenko@example.ua'
!P_SV_1.title := 'Ms.'
!insert (AB_OutgoingHub_NoDetails_1, P_SV_1) into AddressBookMadeOfContact

!new Company('C_SambaTech_1')
!C_SambaTech_1.name := 'SambaTech Comércio e Serviços Ltda.'
!C_SambaTech_1.phone := '+55 11 0000 0505'
!C_SambaTech_1.website := 'https://sambatech.example.br'
!C_SambaTech_1.email := 'contato@sambatech.example.br'
!C_SambaTech_1.industry := 'IT Services'
!insert (AB_OutgoingHub_NoDetails_1, C_SambaTech_1) into AddressBookMadeOfContact

!new Company('C_Himalaya_1')
!C_Himalaya_1.name := 'Himalaya Systems Pvt. Ltd.'
!C_Himalaya_1.phone := '+977 1 000 0606'
!C_Himalaya_1.website := ''
!C_Himalaya_1.email := ''
!C_Himalaya_1.industry := 'Infrastructure Engineering'
!insert (AB_OutgoingHub_NoDetails_1, C_Himalaya_1) into AddressBookMadeOfContact

!new Relationship('Rel_Aurora_R1_1')
!Rel_Aurora_R1_1.type := #BOSS
!insert (C_Aurora_1, Rel_Aurora_R1_1) into ContactToRelationship
!insert (Rel_Aurora_R1_1, P_SV_1) into RelationshipToContact

!new Relationship('Rel_Aurora_R2_1')
!Rel_Aurora_R2_1.type := #EMPLOYEE
!insert (C_Aurora_1, Rel_Aurora_R2_1) into ContactToRelationship
!insert (Rel_Aurora_R2_1, P_SO_1) into RelationshipToContact

!new Relationship('Rel_Aurora_R3_1')
!Rel_Aurora_R3_1.type := #EMPLOYEE
!insert (C_Aurora_1, Rel_Aurora_R3_1) into ContactToRelationship
!insert (Rel_Aurora_R3_1, P_OK_1) into RelationshipToContact

!new Relationship('Rel_Aurora_R4_1')
!Rel_Aurora_R4_1.type := #SUBDIVISION
!insert (C_Aurora_1, Rel_Aurora_R4_1) into ContactToRelationship
!insert (Rel_Aurora_R4_1, C_SambaTech_1) into RelationshipToContact

!new Relationship('Rel_Aurora_R5_1')
!Rel_Aurora_R5_1.type := #COWORKER
!insert (C_Aurora_1, Rel_Aurora_R5_1) into ContactToRelationship
!insert (Rel_Aurora_R5_1, C_Himalaya_1) into RelationshipToContact

!new Relationship('Rel_PSO_R1_1')
!Rel_PSO_R1_1.type := #COWORKER
!insert (P_SO_1, Rel_PSO_R1_1) into ContactToRelationship
!insert (Rel_PSO_R1_1, P_OK_1) into RelationshipToContact

!new Relationship('Rel_POK_R1_1')
!Rel_POK_R1_1.type := #COWORKER
!insert (P_OK_1, Rel_POK_R1_1) into ContactToRelationship
!insert (Rel_POK_R1_1, P_SV_1) into RelationshipToContact

!new Relationship('Rel_PSV_R1_1')
!Rel_PSV_R1_1.type := #COWORKER
!insert (P_SV_1, Rel_PSV_R1_1) into ContactToRelationship
!insert (Rel_PSV_R1_1, P_SO_1) into RelationshipToContact

!new Relationship('Rel_SambaTech_R1_1')
!Rel_SambaTech_R1_1.type := #SUBDIVISION
!insert (C_SambaTech_1, Rel_SambaTech_R1_1) into ContactToRelationship
!insert (Rel_SambaTech_R1_1, C_Himalaya_1) into RelationshipToContact
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 79 | 0.00% |
| Multiplicities Errors | 0 | 24 | 0.00% |
| Invariants Errors | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 6 | 0.00% |
| Websites | 3 | 6 | 50.00% |
| Emails | 2 | 6 | 33.33% |
| Addresses | 0 | 0 | 0.00% |

| Invalid Websites | 
|---| 
```

```
```

```
```

```

| Invalid Emails | 
|---| 
```

```
```

```

## Category complex
```
!new AddressBook('AB_KoruCare_Telehealth_Q2_2026_1')

!new Person('P_Koru_Thandiwe_1')
!P_Koru_Thandiwe_1.name := 'Dr. Thandiwe Mokoena'
!P_Koru_Thandiwe_1.title := 'Dr.'
!P_Koru_Thandiwe_1.phone := '+27 11 555 2109'
!P_Koru_Thandiwe_1.website := 'https://thandiwe-mokoena.example.za'
!P_Koru_Thandiwe_1.email := 'thandiwe.mokoena@example.za'
!insert (AB_KoruCare_Telehealth_Q2_2026_1, P_Koru_Thandiwe_1) into AddressBookMadeOfContact

!new Address('Addr_Koru_Thandiwe_JHB_1')
!Addr_Koru_Thandiwe_JHB_1.city := 'Johannesburg'
!Addr_Koru_Thandiwe_JHB_1.street := 'Jan Smuts Avenue'
!Addr_Koru_Thandiwe_JHB_1.houseNr := '144'
!insert (P_Koru_Thandiwe_1, Addr_Koru_Thandiwe_JHB_1) into ContactContainsAddress

!new Address('Addr_Koru_Thandiwe_CapeTown_1')
!Addr_Koru_Thandiwe_CapeTown_1.city := 'Cape Town'
!Addr_Koru_Thandiwe_CapeTown_1.street := 'Main Road'
!Addr_Koru_Thandiwe_CapeTown_1.houseNr := '28'
!insert (P_Koru_Thandiwe_1, Addr_Koru_Thandiwe_CapeTown_1) into ContactContainsAddress

!new Note('Note_Koru_Thandiwe_1')
!Note_Koru_Thandiwe_1.author := 'Thandiwe Mokoena'
!Note_Koru_Thandiwe_1.time := Date('2026-03-03')
!Note_Koru_Thandiwe_1.type := #MEETING
!Note_Koru_Thandiwe_1.comment := 'Clinical governance: approved escalation pathway for chest pain and stroke symptoms; require documented handoff to local clinics.'
!insert (P_Koru_Thandiwe_1, Note_Koru_Thandiwe_1) into ContactContainsNote

!new Note('Note_Koru_Thandiwe_2')
!Note_Koru_Thandiwe_2.author := 'Eirík Jónsson'
!Note_Koru_Thandiwe_2.time := Date('2026-03-08')
!Note_Koru_Thandiwe_2.type := #EMAIL
!Note_Koru_Thandiwe_2.comment := 'Reminder: consent screen must separate treatment consent from data-sharing consent for analytics.'
!insert (P_Koru_Thandiwe_1, Note_Koru_Thandiwe_2) into ContactContainsNote

!new Person('P_Koru_Ahmed_1')
!P_Koru_Ahmed_1.name := 'Ahmed Al‑Mansouri'
!P_Koru_Ahmed_1.title := 'Mr.'
!P_Koru_Ahmed_1.phone := '+971 50 555 7741'
!P_Koru_Ahmed_1.website := 'https://ahmed-al-mansouri.example.ae'
!P_Koru_Ahmed_1.email := 'ahmed.almansouri@example.ae'
!insert (AB_KoruCare_Telehealth_Q2_2026_1, P_Koru_Ahmed_1) into AddressBookMadeOfContact

!new Address('Addr_Koru_Ahmed_Dubai_1')
!Addr_Koru_Ahmed_Dubai_1.city := 'Dubai'
!Addr_Koru_Ahmed_Dubai_1.street := 'Sheikh Zayed Road'
!Addr_Koru_Ahmed_Dubai_1.houseNr := '301'
!insert (P_Koru_Ahmed_1, Addr_Koru_Ahmed_Dubai_1) into ContactContainsAddress

!new Note('Note_Koru_Ahmed_1')
!Note_Koru_Ahmed_1.author := 'Ahmed Al‑Mansouri'
!Note_Koru_Ahmed_1.time := Date('2026-03-05')
!Note_Koru_Ahmed_1.type := #CALL
!Note_Koru_Ahmed_1.comment := 'Confirmed cold-chain packaging for insulin deliveries; pharmacy needs cutoff times per emirate.'
!insert (P_Koru_Ahmed_1, Note_Koru_Ahmed_1) into ContactContainsNote

!new Note('Note_Koru_Ahmed_2')
!Note_Koru_Ahmed_2.author := 'SaharaScript Ops'
!Note_Koru_Ahmed_2.time := Date('2026-03-07')
!Note_Koru_Ahmed_2.type := #EMAIL
!Note_Koru_Ahmed_2.comment := 'Requested API rate limits for prescription status polling; proposing webhook-based updates.'
!insert (P_Koru_Ahmed_1, Note_Koru_Ahmed_2) into ContactContainsNote

!new Person('P_Koru_Eirik_1')
!P_Koru_Eirik_1.name := 'Eirík Jónsson'
!P_Koru_Eirik_1.title := 'Mr.'
!P_Koru_Eirik_1.phone := '+354 555 0188'
!P_Koru_Eirik_1.website := 'https://eirik-jonsson.example.is'
!P_Koru_Eirik_1.email := 'eirik.jonsson@example.is'
!insert (AB_KoruCare_Telehealth_Q2_2026_1, P_Koru_Eirik_1) into AddressBookMadeOfContact

!new Address('Addr_Koru_Eirik_Reykjavik_1')
!Addr_Koru_Eirik_Reykjavik_1.city := 'Reykjavík'
!Addr_Koru_Eirik_Reykjavik_1.street := 'Laugavegur'
!Addr_Koru_Eirik_Reykjavik_1.houseNr := '66'
!insert (P_Koru_Eirik_1, Addr_Koru_Eirik_Reykjavik_1) into ContactContainsAddress

!new Note('Note_Koru_Eirik_1')
!Note_Koru_Eirik_1.author := 'Eirík Jónsson'
!Note_Koru_Eirik_1.time := Date('2026-03-02')
!Note_Koru_Eirik_1.type := #EMAIL
!Note_Koru_Eirik_1.comment := 'DPIA draft: patient chat transcripts must have retention limit; propose 180 days for operational logs.'
!insert (P_Koru_Eirik_1, Note_Koru_Eirik_1) into ContactContainsNote

!new Note('Note_Koru_Eirik_2')
!Note_Koru_Eirik_2.author := 'Eirík Jónsson'
!Note_Koru_Eirik_2.time := Date('2026-03-10')
!Note_Koru_Eirik_2.type := #MEETING
!Note_Koru_Eirik_2.comment := 'Reviewed identity proofing flow with FjordID; require fallback for users without NFC passports.'
!insert (P_Koru_Eirik_1, Note_Koru_Eirik_2) into ContactContainsNote

!new Person('P_Koru_Naran_1')
!P_Koru_Naran_1.name := 'Naran Bold'
!P_Koru_Naran_1.title := 'Ms.'
!P_Koru_Naran_1.phone := '+976 11 555 2200'
!P_Koru_Naran_1.website := 'https://naran-bold.example.mn'
!P_Koru_Naran_1.email := 'naran.bold@example.mn'
!insert (AB_KoruCare_Telehealth_Q2_2026_1, P_Koru_Naran_1) into AddressBookMadeOfContact

!new Address('Addr_Koru_Naran_Ulaanbaatar_1')
!Addr_Koru_Naran_Ulaanbaatar_1.city := 'Ulaanbaatar'
!Addr_Koru_Naran_Ulaanbaatar_1.street := 'Peace Avenue'
!Addr_Koru_Naran_Ulaanbaatar_1.houseNr := '12-4'
!insert (P_Koru_Naran_1, Addr_Koru_Naran_Ulaanbaatar_1) into ContactContainsAddress

!new Person('P_Koru_Camila_1')
!P_Koru_Camila_1.name := 'Camila Souza'
!P_Koru_Camila_1.title := 'Ms.'
!P_Koru_Camila_1.phone := '+55 11 5555 9040'
!P_Koru_Camila_1.website := 'https://camila-souza.example.br'
!P_Koru_Camila_1.email := 'camila.souza@example.br'
!insert (AB_KoruCare_Telehealth_Q2_2026_1, P_Koru_Camila_1) into AddressBookMadeOfContact

!new Address('Addr_Koru_Camila_SaoPaulo_1')
!Addr_Koru_Camila_SaoPaulo_1.city := 'São Paulo'
!Addr_Koru_Camila_SaoPaulo_1.street := 'Avenida Paulista'
!Addr_Koru_Camila_SaoPaulo_1.houseNr := '1578'
!insert (P_Koru_Camila_1, Addr_Koru_Camila_SaoPaulo_1) into ContactContainsAddress

!new Note('Note_Koru_Camila_1')
!Note_Koru_Camila_1.author := 'Camila Souza'
!Note_Koru_Camila_1.time := Date('2026-03-06')
!Note_Koru_Camila_1.type := #MEETING
!Note_Koru_Camila_1.comment := 'Nurse triage training: finalized scripts for respiratory complaints; added language for low-bandwidth video failures.'
!insert (P_Koru_Camila_1, Note_Koru_Camila_1) into ContactContainsNote

!new Note('Note_Koru_Camila_2')
!Note_Koru_Camila_2.author := 'Thandiwe Mokoena'
!Note_Koru_Camila_2.time := Date('2026-03-09')
!Note_Koru_Camila_2.type := #EMAIL
!Note_Koru_Camila_2.comment := 'Please ensure referral notes include vital signs when available; otherwise explicitly mark ‘not measured’.'
!insert (P_Koru_Camila_1, Note_Koru_Camila_2) into ContactContainsNote

!new Company('C_Koru_Health_1')
!C_Koru_Health_1.name := 'KoruCare Health Pty Ltd'
!C_Koru_Health_1.industry := 'Telemedicine & Remote Patient Support'
!C_Koru_Health_1.phone := '+27 10 555 8000'
!C_Koru_Health_1.website := 'https://korucare.example'
!C_Koru_Health_1.email := 'contact@korucare.example'
!insert (AB_KoruCare_Telehealth_Q2_2026_1, C_Koru_Health_1) into AddressBookMadeOfContact

!new Address('Addr_Koru_Health_JHB_1')
!Addr_Koru_Health_JHB_1.city := 'Johannesburg'
!Addr_Koru_Health_JHB_1.street := 'Simmonds Street'
!Addr_Koru_Health_JHB_1.houseNr := '45'
!insert (C_Koru_Health_1, Addr_Koru_Health_JHB_1) into ContactContainsAddress

!new Address('Addr_Koru_Health_Durban_1')
!Addr_Koru_Health_Durban_1.city := 'Durban'
!Addr_Koru_Health_Durban_1.street := 'Umhlanga Ridge Boulevard'
!Addr_Koru_Health_Durban_1.houseNr := '6'
!insert (C_Koru_Health_1, Addr_Koru_Health_Durban_1) into ContactContainsAddress

!new Note('Note_Koru_Health_1')
!Note_Koru_Health_1.author := 'Legal Team'
!Note_Koru_Health_1.time := Date('2026-03-01')
!Note_Koru_Health_1.type := #EMAIL
!Note_Koru_Health_1.comment := 'Updated Terms of Service to include cross-border processing disclosures and dispute resolution venue.'
!insert (C_Koru_Health_1, Note_Koru_Health_1) into ContactContainsNote

!new Company('C_Koru_EU_1')
!C_Koru_EU_1.name := 'KoruCare EU SARL'
!C_Koru_EU_1.industry := 'Telemedicine (EU Operations & Compliance)'
!C_Koru_EU_1.phone := '+352 27 555 112'
!C_Koru_EU_1.website := 'https://eu.korucare.example'
!C_Koru_EU_1.email := 'eu-office@korucare.example'
!insert (AB_KoruCare_Telehealth_Q2_2026_1, C_Koru_EU_1) into AddressBookMadeOfContact

!new Address('Addr_Koru_EU_Luxembourg_1')
!Addr_Koru_EU_Luxembourg_1.city := 'Luxembourg'
!Addr_Koru_EU_Luxembourg_1.street := 'Boulevard Royal'
!Addr_Koru_EU_Luxembourg_1.houseNr := '18'
!insert (C_Koru_EU_1, Addr_Koru_EU_Luxembourg_1) into ContactContainsAddress

!new Address('Addr_Koru_EU_Dublin_1')
!Addr_Koru_EU_Dublin_1.city := 'Dublin'
!Addr_Koru_EU_Dublin_1.street := 'Pearse Street'
!Addr_Koru_EU_Dublin_1.houseNr := '40'
!insert (C_Koru_EU_1, Addr_Koru_EU_Dublin_1) into ContactContainsAddress

!new Company('C_Koru_SupportDesk_1')
!C_Koru_SupportDesk_1.name := 'KoruCare Support Desk (Internal Unit)'
!C_Koru_SupportDesk_1.industry := 'Customer Support & Incident Triage'
!C_Koru_SupportDesk_1.phone := '+27 10 555 8111'
!C_Koru_SupportDesk_1.website := 'https://support.korucare.example'
!C_Koru_SupportDesk_1.email := 'support@korucare.example'
!insert (AB_KoruCare_Telehealth_Q2_2026_1, C_Koru_SupportDesk_1) into AddressBookMadeOfContact

!new Note('Note_Koru_SupportDesk_1')
!Note_Koru_SupportDesk_1.author := 'Shift Lead'
!Note_Koru_SupportDesk_1.time := Date('2026-03-04')
!Note_Koru_SupportDesk_1.type := #CALL
!Note_Koru_SupportDesk_1.comment := 'Weekend protocol: if video consult fails twice, switch to voice and document connectivity issue tag.'
!insert (C_Koru_SupportDesk_1, Note_Koru_SupportDesk_1) into ContactContainsNote

!new Company('C_Koru_UbuntuClinics_1')
!C_Koru_UbuntuClinics_1.name := 'Ubuntu Clinic Network NPC'
!C_Koru_UbuntuClinics_1.industry := 'Primary Care Clinics & Community Health'
!C_Koru_UbuntuClinics_1.phone := '+27 31 555 6600'
!C_Koru_UbuntuClinics_1.website := 'https://ubuntu-clinics.example.za'
!C_Koru_UbuntuClinics_1.email := 'referrals@ubuntu-clinics.example.za'
!insert (AB_KoruCare_Telehealth_Q2_2026_1, C_Koru_UbuntuClinics_1) into AddressBookMadeOfContact

!new Address('Addr_Koru_Ubuntu_Durban_1')
!Addr_Koru_Ubuntu_Durban_1.city := 'Durban'
!Addr_Koru_Ubuntu_Durban_1.street := 'Smith Street'
!Addr_Koru_Ubuntu_Durban_1.houseNr := '90'
!insert (C_Koru_UbuntuClinics_1, Addr_Koru_Ubuntu_Durban_1) into ContactContainsAddress

!new Address('Addr_Koru_Ubuntu_Polokwane_1')
!Addr_Koru_Ubuntu_Polokwane_1.city := 'Polokwane'
!Addr_Koru_Ubuntu_Polokwane_1.street := 'Market Street'
!Addr_Koru_Ubuntu_Polokwane_1.houseNr := '7'
!insert (C_Koru_UbuntuClinics_1, Addr_Koru_Ubuntu_Polokwane_1) into ContactContainsAddress

!new Note('Note_Koru_Ubuntu_1')
!Note_Koru_Ubuntu_1.author := 'Clinic Coordinator'
!Note_Koru_Ubuntu_1.time := Date('2026-03-06')
!Note_Koru_Ubuntu_1.type := #MEETING
!Note_Koru_Ubuntu_1.comment := 'Agreed on referral slot allocation: 6 urgent slots/day reserved for KoruCare tele-triage transfers.'
!insert (C_Koru_UbuntuClinics_1, Note_Koru_Ubuntu_1) into ContactContainsNote

!new Company('C_Koru_SaharaScript_1')
!C_Koru_SaharaScript_1.name := 'SaharaScript Pharmacy Co.'
!C_Koru_SaharaScript_1.industry := 'e‑Pharmacy & Prescription Fulfillment'
!C_Koru_SaharaScript_1.phone := '+971 4 555 9920'
!C_Koru_SaharaScript_1.website := 'https://saharascript.example.ae'
!C_Koru_SaharaScript_1.email := 'integrations@saharascript.example.ae'
!insert (AB_KoruCare_Telehealth_Q2_2026_1, C_Koru_SaharaScript_1) into AddressBookMadeOfContact

!new Address('Addr_Koru_Sahara_Dubai_1')
!Addr_Koru_Sahara_Dubai_1.city := 'Dubai'
!Addr_Koru_Sahara_Dubai_1.street := 'Al Khaleej Street'
!Addr_Koru_Sahara_Dubai_1.houseNr := '14'
!insert (C_Koru_SaharaScript_1, Addr_Koru_Sahara_Dubai_1) into ContactContainsAddress

!new Address('Addr_Koru_Sahara_Sharjah_1')
!Addr_Koru_Sahara_Sharjah_1.city := 'Sharjah'
!Addr_Koru_Sahara_Sharjah_1.street := 'King Faisal Street'
!Addr_Koru_Sahara_Sharjah_1.houseNr := '88'
!insert (C_Koru_SaharaScript_1, Addr_Koru_Sahara_Sharjah_1) into ContactContainsAddress

!new Note('Note_Koru_Sahara_1')
!Note_Koru_Sahara_1.author := 'Integration Team'
!Note_Koru_Sahara_1.time := Date('2026-03-08')
!Note_Koru_Sahara_1.type := #EMAIL
!Note_Koru_Sahara_1.comment := 'Need physician license jurisdiction on each eRx; will reject orders without country code field.'
!insert (C_Koru_SaharaScript_1, Note_Koru_Sahara_1) into ContactContainsNote

!new Company('C_Koru_FjordID_1')
!C_Koru_FjordID_1.name := 'FjordID ehf'
!C_Koru_FjordID_1.industry := 'Digital Identity Verification & KYC'
!C_Koru_FjordID_1.phone := '+354 555 7007'
!C_Koru_FjordID_1.website := 'https://fjordid.example.is'
!C_Koru_FjordID_1.email := 'b2b@fjordid.example.is'
!insert (AB_KoruCare_Telehealth_Q2_2026_1, C_Koru_FjordID_1) into AddressBookMadeOfContact

!new Address('Addr_Koru_FjordID_Reykjavik_1')
!Addr_Koru_FjordID_Reykjavik_1.city := 'Reykjavík'
!Addr_Koru_FjordID_Reykjavik_1.street := 'Borgartún'
!Addr_Koru_FjordID_Reykjavik_1.houseNr := '8'
!insert (C_Koru_FjordID_1, Addr_Koru_FjordID_Reykjavik_1) into ContactContainsAddress

!new Company('C_Koru_SteppeConnect_1')
!C_Koru_SteppeConnect_1.name := 'SteppeConnect LLC'
!C_Koru_SteppeConnect_1.industry := 'Mobile Networks & Rural Connectivity'
!C_Koru_SteppeConnect_1.phone := '+976 7011 5533'
!C_Koru_SteppeConnect_1.website := 'https://steppeconnect.example.mn'
!C_Koru_SteppeConnect_1.email := 'partners@steppeconnect.example.mn'
!insert (AB_KoruCare_Telehealth_Q2_2026_1, C_Koru_SteppeConnect_1) into AddressBookMadeOfContact

!new Address('Addr_Koru_Steppe_Ulaanbaatar_1')
!Addr_Koru_Steppe_Ulaanbaatar_1.city := 'Ulaanbaatar'
!Addr_Koru_Steppe_Ulaanbaatar_1.street := 'Chinggis Avenue'
!Addr_Koru_Steppe_Ulaanbaatar_1.houseNr := '25'
!insert (C_Koru_SteppeConnect_1, Addr_Koru_Steppe_Ulaanbaatar_1) into ContactContainsAddress

!new Address('Addr_Koru_Steppe_Erdenet_1')
!Addr_Koru_Steppe_Erdenet_1.city := 'Erdenet'
!Addr_Koru_Steppe_Erdenet_1.street := 'Copper Street'
!Addr_Koru_Steppe_Erdenet_1.houseNr := '2'
!insert (C_Koru_SteppeConnect_1, Addr_Koru_Steppe_Erdenet_1) into ContactContainsAddress

!new Note('Note_Koru_Steppe_1')
!Note_Koru_Steppe_1.author := 'Partner Engineering'
!Note_Koru_Steppe_1.time := Date('2026-03-07')
!Note_Koru_Steppe_1.type := #CALL
!Note_Koru_Steppe_1.comment := 'Confirmed zero-rating option for health app traffic; requires monthly usage report and endpoint IP list.'
!insert (C_Koru_SteppeConnect_1, Note_Koru_Steppe_1) into ContactContainsNote

!new Relationship('Rel_Koru_Thandiwe_to_Camila_Boss_1')
!Rel_Koru_Thandiwe_to_Camila_Boss_1.type := #BOSS
!insert (P_Koru_Thandiwe_1, Rel_Koru_Thandiwe_to_Camila_Boss_1) into ContactToRelationship
!insert (Rel_Koru_Thandiwe_to_Camila_Boss_1, P_Koru_Camila_1) into RelationshipToContact

!new Relationship('Rel_Koru_Thandiwe_to_Ahmed_Boss_1')
!Rel_Koru_Thandiwe_to_Ahmed_Boss_1.type := #BOSS
!insert (P_Koru_Thandiwe_1, Rel_Koru_Thandiwe_to_Ahmed_Boss_1) into ContactToRelationship
!insert (Rel_Koru_Thandiwe_to_Ahmed_Boss_1, P_Koru_Ahmed_1) into RelationshipToContact

!new Relationship('Rel_Koru_Thandiwe_to_Ubuntu_Coworker_1')
!Rel_Koru_Thandiwe_to_Ubuntu_Coworker_1.type := #COWORKER
!insert (P_Koru_Thandiwe_1, Rel_Koru_Thandiwe_to_Ubuntu_Coworker_1) into ContactToRelationship
!insert (Rel_Koru_Thandiwe_to_Ubuntu_Coworker_1, C_Koru_UbuntuClinics_1) into RelationshipToContact

!new Relationship('Rel_Koru_Thandiwe_to_KoruHealth_Employee_1')
!Rel_Koru_Thandiwe_to_KoruHealth_Employee_1.type := #EMPLOYEE
!insert (P_Koru_Thandiwe_1, Rel_Koru_Thandiwe_to_KoruHealth_Employee_1) into ContactToRelationship
!insert (Rel_Koru_Thandiwe_to_KoruHealth_Employee_1, C_Koru_Health_1) into RelationshipToContact

!new Relationship('Rel_Koru_Ahmed_to_Thandiwe_Employee_1')
!Rel_Koru_Ahmed_to_Thandiwe_Employee_1.type := #EMPLOYEE
!insert (P_Koru_Ahmed_1, Rel_Koru_Ahmed_to_Thandiwe_Employee_1) into ContactToRelationship
!insert (Rel_Koru_Ahmed_to_Thandiwe_Employee_1, P_Koru_Thandiwe_1) into RelationshipToContact

!new Relationship('Rel_Koru_Ahmed_to_Sahara_Coworker_1')
!Rel_Koru_Ahmed_to_Sahara_Coworker_1.type := #COWORKER
!insert (P_Koru_Ahmed_1, Rel_Koru_Ahmed_to_Sahara_Coworker_1) into ContactToRelationship
!insert (Rel_Koru_Ahmed_to_Sahara_Coworker_1, C_Koru_SaharaScript_1) into RelationshipToContact

!new Relationship('Rel_Koru_Ahmed_to_SupportDesk_Coworker_1')
!Rel_Koru_Ahmed_to_SupportDesk_Coworker_1.type := #COWORKER
!insert (P_Koru_Ahmed_1, Rel_Koru_Ahmed_to_SupportDesk_Coworker_1) into ContactToRelationship
!insert (Rel_Koru_Ahmed_to_SupportDesk_Coworker_1, C_Koru_SupportDesk_1) into RelationshipToContact

!new Relationship('Rel_Koru_Ahmed_to_KoruHealth_Employee_1')
!Rel_Koru_Ahmed_to_KoruHealth_Employee_1.type := #EMPLOYEE
!insert (P_Koru_Ahmed_1, Rel_Koru_Ahmed_to_KoruHealth_Employee_1) into ContactToRelationship
!insert (Rel_Koru_Ahmed_to_KoruHealth_Employee_1, C_Koru_Health_1) into RelationshipToContact

!new Relationship('Rel_Koru_Eirik_to_KoruEU_Employee_1')
!Rel_Koru_Eirik_to_KoruEU_Employee_1.type := #EMPLOYEE
!insert (P_Koru_Eirik_1, Rel_Koru_Eirik_to_KoruEU_Employee_1) into ContactToRelationship
!insert (Rel_Koru_Eirik_to_KoruEU_Employee_1, C_Koru_EU_1) into RelationshipToContact

!new Relationship('Rel_Koru_Eirik_to_FjordID_Coworker_1')
!Rel_Koru_Eirik_to_FjordID_Coworker_1.type := #COWORKER
!insert (P_Koru_Eirik_1, Rel_Koru_Eirik_to_FjordID_Coworker_1) into ContactToRelationship
!insert (Rel_Koru_Eirik_to_FjordID_Coworker_1, C_Koru_FjordID_1) into RelationshipToContact

!new Relationship('Rel_Koru_Naran_to_SteppeConnect_Coworker_1')
!Rel_Koru_Naran_to_SteppeConnect_Coworker_1.type := #COWORKER
!insert (P_Koru_Naran_1, Rel_Koru_Naran_to_SteppeConnect_Coworker_1) into ContactToRelationship
!insert (Rel_Koru_Naran_to_SteppeConnect_Coworker_1, C_Koru_SteppeConnect_1) into RelationshipToContact

!new Relationship('Rel_Koru_Naran_to_Camila_Coworker_1')
!Rel_Koru_Naran_to_Camila_Coworker_1.type := #COWORKER
!insert (P_Koru_Naran_1, Rel_Koru_Naran_to_Camila_Coworker_1) into ContactToRelationship
!insert (Rel_Koru_Naran_to_Camila_Coworker_1, P_Koru_Camila_1) into RelationshipToContact

!new Relationship('Rel_Koru_Camila_to_Thandiwe_Employee_1')
!Rel_Koru_Camila_to_Thandiwe_Employee_1.type := #EMPLOYEE
!insert (P_Koru_Camila_1, Rel_Koru_Camila_to_Thandiwe_Employee_1) into ContactToRelationship
!insert (Rel_Koru_Camila_to_Thandiwe_Employee_1, P_Koru_Thandiwe_1) into RelationshipToContact

!new Relationship('Rel_Koru_Camila_to_Ubuntu_Coworker_1')
!Rel_Koru_Camila_to_Ubuntu_Coworker_1.type := #COWORKER
!insert (P_Koru_Camila_1, Rel_Koru_Camila_to_Ubuntu_Coworker_1) into ContactToRelationship
!insert (Rel_Koru_Camila_to_Ubuntu_Coworker_1, C_Koru_UbuntuClinics_1) into RelationshipToContact

!new Relationship('Rel_Koru_Camila_to_KoruHealth_Employee_1')
!Rel_Koru_Camila_to_KoruHealth_Employee_1.type := #EMPLOYEE
!insert (P_Koru_Camila_1, Rel_Koru_Camila_to_KoruHealth_Employee_1) into ContactToRelationship
!insert (Rel_Koru_Camila_to_KoruHealth_Employee_1, C_Koru_Health_1) into RelationshipToContact

!new Relationship('Rel_Koru_Camila_to_Naran_Coworker_1')
!Rel_Koru_Camila_to_Naran_Coworker_1.type := #COWORKER
!insert (P_Koru_Camila_1, Rel_Koru_Camila_to_Naran_Coworker_1) into ContactToRelationship
!insert (Rel_Koru_Camila_to_Naran_Coworker_1, P_Koru_Naran_1) into RelationshipToContact

!new Relationship('Rel_KoruHealth_to_KoruEU_Subdivision_1')
!Rel_KoruHealth_to_KoruEU_Subdivision_1.type := #SUBDIVISION
!insert (C_Koru_Health_1, Rel_KoruHealth_to_KoruEU_Subdivision_1) into ContactToRelationship
!insert (Rel_KoruHealth_to_KoruEU_Subdivision_1, C_Koru_EU_1) into RelationshipToContact

!new Relationship('Rel_KoruHealth_to_SupportDesk_Subdivision_1')
!Rel_KoruHealth_to_SupportDesk_Subdivision_1.type := #SUBDIVISION
!insert (C_Koru_Health_1, Rel_KoruHealth_to_SupportDesk_Subdivision_1) into ContactToRelationship
!insert (Rel_KoruHealth_to_SupportDesk_Subdivision_1, C_Koru_SupportDesk_1) into RelationshipToContact

!new Relationship('Rel_KoruHealth_to_Ubuntu_Coworker_1')
!Rel_KoruHealth_to_Ubuntu_Coworker_1.type := #COWORKER
!insert (C_Koru_Health_1, Rel_KoruHealth_to_Ubuntu_Coworker_1) into ContactToRelationship
!insert (Rel_KoruHealth_to_Ubuntu_Coworker_1, C_Koru_UbuntuClinics_1) into RelationshipToContact

!new Relationship('Rel_KoruHealth_to_Sahara_Coworker_1')
!Rel_KoruHealth_to_Sahara_Coworker_1.type := #COWORKER
!insert (C_Koru_Health_1, Rel_KoruHealth_to_Sahara_Coworker_1) into ContactToRelationship
!insert (Rel_KoruHealth_to_Sahara_Coworker_1, C_Koru_SaharaScript_1) into RelationshipToContact

!new Relationship('Rel_KoruEU_to_FjordID_Coworker_1')
!Rel_KoruEU_to_FjordID_Coworker_1.type := #COWORKER
!insert (C_Koru_EU_1, Rel_KoruEU_to_FjordID_Coworker_1) into ContactToRelationship
!insert (Rel_KoruEU_to_FjordID_Coworker_1, C_Koru_FjordID_1) into RelationshipToContact

!new Relationship('Rel_KoruEU_to_KoruHealth_Coworker_1')
!Rel_KoruEU_to_KoruHealth_Coworker_1.type := #COWORKER
!insert (C_Koru_EU_1, Rel_KoruEU_to_KoruHealth_Coworker_1) into ContactToRelationship
!insert (Rel_KoruEU_to_KoruHealth_Coworker_1, C_Koru_Health_1) into RelationshipToContact

!new Relationship('Rel_SupportDesk_to_Sahara_Coworker_1')
!Rel_SupportDesk_to_Sahara_Coworker_1.type := #COWORKER
!insert (C_Koru_SupportDesk_1, Rel_SupportDesk_to_Sahara_Coworker_1) into ContactToRelationship
!insert (Rel_SupportDesk_to_Sahara_Coworker_1, C_Koru_SaharaScript_1) into RelationshipToContact

!new Relationship('Rel_SupportDesk_to_Ubuntu_Coworker_1')
!Rel_SupportDesk_to_Ubuntu_Coworker_1.type := #COWORKER
!insert (C_Koru_SupportDesk_1, Rel_SupportDesk_to_Ubuntu_Coworker_1) into ContactToRelationship
!insert (Rel_SupportDesk_to_Ubuntu_Coworker_1, C_Koru_UbuntuClinics_1) into RelationshipToContact

!new Relationship('Rel_Ubuntu_to_KoruHealth_Coworker_1')
!Rel_Ubuntu_to_KoruHealth_Coworker_1.type := #COWORKER
!insert (C_Koru_UbuntuClinics_1, Rel_Ubuntu_to_KoruHealth_Coworker_1) into ContactToRelationship
!insert (Rel_Ubuntu_to_KoruHealth_Coworker_1, C_Koru_Health_1) into RelationshipToContact

!new Relationship('Rel_Ubuntu_to_Camila_Coworker_1')
!Rel_Ubuntu_to_Camila_Coworker_1.type := #COWORKER
!insert (C_Koru_UbuntuClinics_1, Rel_Ubuntu_to_Camila_Coworker_1) into ContactToRelationship
!insert (Rel_Ubuntu_to_Camila_Coworker_1, P_Koru_Camila_1) into RelationshipToContact

!new Relationship('Rel_Ubuntu_to_Thandiwe_Coworker_1')
!Rel_Ubuntu_to_Thandiwe_Coworker_1.type := #COWORKER
!insert (C_Koru_UbuntuClinics_1, Rel_Ubuntu_to_Thandiwe_Coworker_1) into ContactToRelationship
!insert (Rel_Ubuntu_to_Thandiwe_Coworker_1, P_Koru_Thandiwe_1) into RelationshipToContact

!new Relationship('Rel_Sahara_to_KoruHealth_Coworker_1')
!Rel_Sahara_to_KoruHealth_Coworker_1.type := #COWORKER
!insert (C_Koru_SaharaScript_1, Rel_Sahara_to_KoruHealth_Coworker_1) into ContactToRelationship
!insert (Rel_Sahara_to_KoruHealth_Coworker_1, C_Koru_Health_1) into RelationshipToContact

!new Relationship('Rel_Sahara_to_SupportDesk_Coworker_1')
!Rel_Sahara_to_SupportDesk_Coworker_1.type := #COWORKER
!insert (C_Koru_SaharaScript_1, Rel_Sahara_to_SupportDesk_Coworker_1) into ContactToRelationship
!insert (Rel_Sahara_to_SupportDesk_Coworker_1, C_Koru_SupportDesk_1) into RelationshipToContact

!new Relationship('Rel_Sahara_to_Ahmed_Coworker_1')
!Rel_Sahara_to_Ahmed_Coworker_1.type := #COWORKER
!insert (C_Koru_SaharaScript_1, Rel_Sahara_to_Ahmed_Coworker_1) into ContactToRelationship
!insert (Rel_Sahara_to_Ahmed_Coworker_1, P_Koru_Ahmed_1) into RelationshipToContact

!new Relationship('Rel_FjordID_to_KoruEU_Coworker_1')
!Rel_FjordID_to_KoruEU_Coworker_1.type := #COWORKER
!insert (C_Koru_FjordID_1, Rel_FjordID_to_KoruEU_Coworker_1) into ContactToRelationship
!insert (Rel_FjordID_to_KoruEU_Coworker_1, C_Koru_EU_1) into RelationshipToContact

!new Relationship('Rel_FjordID_to_Eirik_Coworker_1')
!Rel_FjordID_to_Eirik_Coworker_1.type := #COWORKER
!insert (C_Koru_FjordID_1, Rel_FjordID_to_Eirik_Coworker_1) into ContactToRelationship
!insert (Rel_FjordID_to_Eirik_Coworker_1, P_Koru_Eirik_1) into RelationshipToContact

!new Relationship('Rel_SteppeConnect_to_Naran_Coworker_1')
!Rel_SteppeConnect_to_Naran_Coworker_1.type := #COWORKER
!insert (C_Koru_SteppeConnect_1, Rel_SteppeConnect_to_Naran_Coworker_1) into ContactToRelationship
!insert (Rel_SteppeConnect_to_Naran_Coworker_1, P_Koru_Naran_1) into RelationshipToContact

!new Relationship('Rel_SteppeConnect_to_KoruHealth_Coworker_1')
!Rel_SteppeConnect_to_KoruHealth_Coworker_1.type := #COWORKER
!insert (C_Koru_SteppeConnect_1, Rel_SteppeConnect_to_KoruHealth_Coworker_1) into ContactToRelationship
!insert (Rel_SteppeConnect_to_KoruHealth_Coworker_1, C_Koru_Health_1) into RelationshipToContact
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 384 | 0.00% |
| Multiplicities Errors | 0 | 110 | 0.00% |
| Invariants Errors | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 12 | 0.00% |
| Websites | 0 | 12 | 0.00% |
| Emails | 0 | 12 | 0.00% |
| Addresses | 11 | 17 | 64.71% |

| Invalid Addresses | 
|---| 
```
Copper Street, 2, Erdenet
```
```
Sheikh Zayed Road, 301, Dubai
```
```
Al Khaleej Street, 14, Dubai
```
```
Market Street, 7, Polokwane
```
```
Smith Street, 90, Durban
```
```
King Faisal Street, 88, Sharjah
```
```
Jan Smuts Avenue, 144, Johannesburg
```
```
Chinggis Avenue, 25, Ulaanbaatar
```
```
Borgartún, 8, Reykjavík
```
```
Peace Avenue, 12-4, Ulaanbaatar
```
```
Umhlanga Ridge Boulevard, 6, Durban
```

## Category edge
```
!new AddressBook('AB_CompletelyEmpty_1')
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 1 | 0.00% |
| Multiplicities Errors | 0 | 0 | 0.00% |
| Invariants Errors | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 0 | 0.00% |
| Websites | 0 | 0 | 0.00% |
| Emails | 0 | 0 | 0.00% |
| Addresses | 0 | 0 | 0.00% |

## Category invalid
```
!new AddressBook('AB7_SowetoMicrobusiness_1')

!new Person('P_AB7_H1_1')
!P_AB7_H1_1.name := 'Sipho Dlamini (Dlamini Mobile Repairs)'
!P_AB7_H1_1.phone := '+27 71 234 9901'
!P_AB7_H1_1.website := 'https://dlamini-mobile-repairs.example.co.za'
!P_AB7_H1_1.email := 'sipho@dlamini-repairs.example.co.za'
!P_AB7_H1_1.title := 'Mr.'
!insert (AB7_SowetoMicrobusiness_1, P_AB7_H1_1) into AddressBookMadeOfContact

!new Address('Addr_AB7_AD70_1')
!Addr_AB7_AD70_1.city := 'Soweto'
!Addr_AB7_AD70_1.street := 'Vilakazi Street'
!Addr_AB7_AD70_1.houseNr := '8115'
!insert (P_AB7_H1_1, Addr_AB7_AD70_1) into ContactContainsAddress

!new Note('Note_AB7_N70_1')
!Note_AB7_N70_1.author := 'Nomvula Dlamini'
!Note_AB7_N70_1.time := Date('2026-01-19')
!Note_AB7_N70_1.type := #EMAIL
!Note_AB7_N70_1.comment := 'Sent updated price list for screen replacements; added weekend turnaround option.'
!insert (P_AB7_H1_1, Note_AB7_N70_1) into ContactContainsNote

!new Note('Note_AB7_N71_1')
!Note_AB7_N71_1.author := 'Sipho Dlamini'
!Note_AB7_N71_1.time := Date('2026-02-08')
!Note_AB7_N71_1.type := #CALL
!Note_AB7_N71_1.comment := 'Spoke with wholesaler about bulk battery order; confirm stock on Monday.'
!insert (P_AB7_H1_1, Note_AB7_N71_1) into ContactContainsNote

!new Person('P_AB7_P70_1')
!P_AB7_P70_1.name := 'Nomvula Dlamini'
!P_AB7_P70_1.title := 'Ms.'
!P_AB7_P70_1.phone := '+27 82 555 1033'
!P_AB7_P70_1.website := 'https://nomvula-bookkeeping.example.co.za'
!P_AB7_P70_1.email := 'nomvula.dlamini@example.co.za'
!insert (AB7_SowetoMicrobusiness_1, P_AB7_P70_1) into AddressBookMadeOfContact

!new Note('Note_AB7_N72_1')
!Note_AB7_N72_1.author := 'Nomvula Dlamini'
!Note_AB7_N72_1.time := Date('2026-02-10')
!Note_AB7_N72_1.type := #MEETING
!Note_AB7_N72_1.comment := 'Prepared cashbook template for the repair stall; track parts vs labor separately.'
!insert (P_AB7_P70_1, Note_AB7_N72_1) into ContactContainsNote

!new Company('C_AB7_C70_1')
!C_AB7_C70_1.name := 'eKhaya Business Incubator'
!C_AB7_C70_1.industry := 'Small business support & training'
!C_AB7_C70_1.phone := '+27 11 410 7700'
!C_AB7_C70_1.website := 'https://ekhaya-incubator.example.org.za'
!C_AB7_C70_1.email := 'frontdesk@ekhaya-incubator.example.org.za'
!insert (AB7_SowetoMicrobusiness_1, C_AB7_C70_1) into AddressBookMadeOfContact

!new Address('Addr_AB7_AD71_1')
!Addr_AB7_AD71_1.city := 'Johannesburg'
!Addr_AB7_AD71_1.street := 'Simmonds Street'
!Addr_AB7_AD71_1.houseNr := '102'
!insert (C_AB7_C70_1, Addr_AB7_AD71_1) into ContactContainsAddress

!new Note('Note_AB7_N73_1')
!Note_AB7_N73_1.author := 'Program Office'
!Note_AB7_N73_1.time := Date('2026-02-01')
!Note_AB7_N73_1.type := #EMAIL
!Note_AB7_N73_1.comment := 'Reminder: submit February attendance registers and mentor notes by the 28th.'
!insert (C_AB7_C70_1, Note_AB7_N73_1) into ContactContainsNote

!new Person('P_AB7_P71_1')
!P_AB7_P71_1.name := 'Pieter van der Merwe'
!P_AB7_P71_1.title := 'Mr.'
!P_AB7_P71_1.phone := '+27 83 300 4491'
!P_AB7_P71_1.website := 'https://pieter-mentors.example.za'
!P_AB7_P71_1.email := 'pieter.vdm@example.za'
!insert (AB7_SowetoMicrobusiness_1, P_AB7_P71_1) into AddressBookMadeOfContact

!new Address('Addr_AB7_AD72_1')
!Addr_AB7_AD72_1.city := 'Johannesburg'
!Addr_AB7_AD72_1.street := 'Jan Smuts Avenue'
!Addr_AB7_AD72_1.houseNr := '200'
!insert (P_AB7_P71_1, Addr_AB7_AD72_1) into ContactContainsAddress

!new Company('C_AB7_C71_1')
!C_AB7_C71_1.name := 'Maboneng Parts Wholesale'
!C_AB7_C71_1.industry := 'Electronics parts distribution'
!C_AB7_C71_1.phone := '+27 10 555 8810'
!C_AB7_C71_1.website := 'https://mabonengparts.example.co.za'
!C_AB7_C71_1.email := 'orders@mabonengparts.example.co.za'
!insert (AB7_SowetoMicrobusiness_1, C_AB7_C71_1) into AddressBookMadeOfContact

!new Address('Addr_AB7_AD73_1')
!Addr_AB7_AD73_1.city := 'Johannesburg'
!Addr_AB7_AD73_1.street := 'Fox Street'
!Addr_AB7_AD73_1.houseNr := '286'
!insert (C_AB7_C71_1, Addr_AB7_AD73_1) into ContactContainsAddress

!new Note('Note_AB7_N74_1')
!Note_AB7_N74_1.author := 'Accounts (Maboneng Parts)'
!Note_AB7_N74_1.time := Date('2026-02-09')
!Note_AB7_N74_1.type := #EMAIL
!Note_AB7_N74_1.comment := 'Pro-forma invoice issued for battery lot; payment required before dispatch.'
!insert (C_AB7_C71_1, Note_AB7_N74_1) into ContactContainsNote

!new Company('C_AB7_C72_1')
!C_AB7_C72_1.name := 'eKhaya Repair Skills Track'
!C_AB7_C72_1.industry := 'Technical training program'
!C_AB7_C72_1.phone := '+27 11 410 7702'
!C_AB7_C72_1.website := 'https://ekhaya-incubator.example.org.za/repair-track'
!C_AB7_C72_1.email := 'repairtrack@ekhaya-incubator.example.org.za'
!insert (AB7_SowetoMicrobusiness_1, C_AB7_C72_1) into AddressBookMadeOfContact

!new Relationship('Rel_AB7_R70_1')
!Rel_AB7_R70_1.type := #COWORKER
!insert (P_AB7_H1_1, Rel_AB7_R70_1) into ContactToRelationship
!insert (Rel_AB7_R70_1, C_AB7_C70_1) into RelationshipToContact

!new Relationship('Rel_AB7_R71_1')
!Rel_AB7_R71_1.type := #COWORKER
!insert (P_AB7_H1_1, Rel_AB7_R71_1) into ContactToRelationship
!insert (Rel_AB7_R71_1, C_AB7_C71_1) into RelationshipToContact

!new Relationship('Rel_AB7_R72_1')
!Rel_AB7_R72_1.type := #COWORKER
!insert (P_AB7_H1_1, Rel_AB7_R72_1) into ContactToRelationship
!insert (Rel_AB7_R72_1, P_AB7_P70_1) into RelationshipToContact

!new Relationship('Rel_AB7_R73_1')
!Rel_AB7_R73_1.type := #BOSS
!insert (C_AB7_C70_1, Rel_AB7_R73_1) into ContactToRelationship
!insert (Rel_AB7_R73_1, P_AB7_P71_1) into RelationshipToContact

!new Relationship('Rel_AB7_R74_1')
!Rel_AB7_R74_1.type := #SUBDIVISION
!insert (C_AB7_C70_1, Rel_AB7_R74_1) into ContactToRelationship
!insert (Rel_AB7_R74_1, C_AB7_C72_1) into RelationshipToContact

!new Relationship('Rel_AB7_R75_1')
!Rel_AB7_R75_1.type := #EMPLOYEE
!insert (P_AB7_P71_1, Rel_AB7_R75_1) into ContactToRelationship
!insert (Rel_AB7_R75_1, C_AB7_C70_1) into RelationshipToContact

!new Relationship('Rel_AB7_R76_1')
!Rel_AB7_R76_1.type := #COWORKER
!insert (P_AB7_P71_1, Rel_AB7_R76_1) into ContactToRelationship
!insert (Rel_AB7_R76_1, P_AB7_H1_1) into RelationshipToContact
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 29 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 6 | 0.00% |
| Websites | 0 | 6 | 0.00% |
| Emails | 0 | 6 | 0.00% |
| Addresses | 2 | 4 | 50.00% |

| Invalid Addresses | 
|---| 
```
Jan Smuts Avenue, 200, Johannesburg
```
```
Vilakazi Street, 8115, Soweto
```

## Generation 6 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 806 | 0.00% |
| Multiplicities Errors | 0 | 192 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 29 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 1 | 0.00% |

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 0 | 33 | 0.00% |
| Websites | 3 | 33 | 9.09% |
| Emails | 2 | 33 | 6.06% |
| Addresses | 21 | 30 | 70.00% |

| Invalid Websites | 
|---| 
```

```
```

```
```

```

| Invalid Emails | 
|---| 
```

```
```

```

| Invalid Addresses | 
|---| 
```
Rua da Frente, 9, Beira
```
```
Boulevard de l’Indépendance, 27, Toamasina
```
```
Jan Smuts Avenue, 50, Johannesburg
```
```
Praça da Independência, 1, Maputo
```
```
Av. do Zimbabwe, 260, Beira
```
```
Rua do Porto, 17, Porto
```
```
Estrada Nacional 1, KM 12, Beira
```
```
Rua Rainha Ginga, 101, Luanda
```
```
Copper Street, 2, Erdenet
```
```
Sheikh Zayed Road, 301, Dubai
```
```
Al Khaleej Street, 14, Dubai
```
```
Market Street, 7, Polokwane
```
```
Smith Street, 90, Durban
```
```
King Faisal Street, 88, Sharjah
```
```
Jan Smuts Avenue, 144, Johannesburg
```
```
Chinggis Avenue, 25, Ulaanbaatar
```
```
Borgartún, 8, Reykjavík
```
```
Peace Avenue, 12-4, Ulaanbaatar
```
```
Umhlanga Ridge Boulevard, 6, Durban
```
```
Jan Smuts Avenue, 200, Johannesburg
```
```
Vilakazi Street, 8115, Soweto
```

# Summary for all generations
| Summary | Value | 
|---|---| 
| Model | GPT_5_2 | 
| Type | CoT | 
| System | addressbook | 
| Number of generations | 6 | 

| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 4873 | 0.00% |
| Multiplicities Errors | 0 | 1163 | 0.00% |
| Invariants Errors | 0 | 24 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 3 | 129 | 2.33% |
| Invariants Errors (Not included on General) | 1 | 6 | 16.67% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `RelationshipToContact':
  Object `Rel_AB5_R50_1' of class `Relationship' is connected to 2 objects of class `Contact'
  at association end `target' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `ContactContainsAddress':
  Object `Addr_AB6_AD62_1' of class `Address' is connected to 0 objects of class `Contact'
  at association end `source' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `ContactContainsNote':
  Object `Note_AB6_N62_1' of class `Note' is connected to 0 objects of class `Contact'
  at association end `contact' but the multiplicity is specified as `1'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (1) `Contact::DifferentSourceTarget': FAILED.
```

| AddressBook | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Phones | 5 | 178 | 2.81% |
| Websites | 14 | 178 | 7.87% |
| Emails | 10 | 178 | 5.62% |
| Addresses | 128 | 197 | 64.97% |

| Invalid Phones | 
|---| 
```

```
```
+1-000-000-0000 ext. 0000
```
```

```
```

```
```
000
```

| Invalid Websites | 
|---| 
```

```
```
https://example.invalid/🚫
```
```
https://пример.рф/олег
```
```

```
```

```
```

```
```

```
```
http://
```
```
about:blank
```
```

```
```
urn:contact:archivist
```
```

```
```

```
```

```

| Invalid Emails | 
|---| 
```

```
```
x@invalid
```
```
cher@localhost
```
```

```
```
maria.delaluz@
```
```

```
```
noreply@bureau
```
```
lampros@[127.0.0.1]
```
```

```
```

```

| Invalid Addresses | 
|---| 
```
Chuo-dori, 5-14, Tokyo
```
```
Tahrir Square, 12B, Cairo
```
```
Route de Tétouan, KM 12, Tangier
```
```
Shinjuku-dori, 3-14-7, Tokyo
```
```
El‑Corniche, 55, Alexandria
```
```
Boulevard Zerktouni, 17, Casablanca
```
```
MG Road, 44, Bengaluru
```
```
Av. Javier Prado, 2450, Lima
```
```
Tahrir Square, 12B, Cairo
```
```
Av. Providencia, 1860, Santiago
```
```
Umeda, 1-1-3, Osaka
```
```
Av. Maipú, S/N, Ushuaia
```
```
Corniche Rd, Ⅻ, Abu Dhabi
```
```
Ice Runway Rd, 0, McMurdo Station
```
```
Vei 7, 12B, Longyearbyen
```
```
Laugavegur, -1, Reykjavík
```
```
Chiyoda-dori, 2-15, Tokyo
```
```
Al Mansour Mohamed St., 14B, Cairo
```
```
Chiyoda-dori, 2-15, Tokyo
```
```
Chiyoda-dori, 2-15, Tokyo
```
```
Industrial Way, 18, San Carlos
```
```
Al Wasl Road, 77, Dubai
```
```
ul. Długa, 19, Gdańsk
```
```
Rue Saint-Jean, 310, Québec City
```
```
Avenue Mohammed V, 31, Rabat
```
```
Rothschild Boulevard, 48, Tel Aviv
```
```
Dōtonbori, 5-6, Osaka
```
```
Av. Insurgentes Sur, 1457, Ciudad de México
```
```
Minato Mirai, 2-3-5, Yokohama
```
```
Yefe Nof, 12, Haifa
```
```
Rue de la Coopération, 1, Niamey
```
```
臨時通り, 000, 東京
```
```
Sunset Blvd, —, Los Angeles
```
```
Đường số 1, 0, Hồ Chí Minh City
```
```
, , 
```
```
Rua do Evento, 13, São Paulo
```
```
Avenue des Laurentides, 3340, Laval
```
```
Rue des Écoles, 14, Paris
```
```
Havnegata, 8, Tromsø
```
```
Havnavej, 2, Nuuk
```
```
Av. Reforma, 0, Ciudad de México
```
```
Tahrir Square, 1, Cairo
```
```
Avenyn, 5B, Göteborg
```
```
Bazar Road, 6, Gosaba
```
```
Sakae, 3-2-1, Nagoya
```
```
Euston Road, 116, London
```
```
Avenida da Liberdade, 201, Lisboa
```
```
A.J.C. Bose Road, 115, Kolkata
```
```
Gedimino prospektas, 9, Vilnius
```
```
Moi Avenue, 9, Mombasa
```
```
Kenyatta Avenue, 4, Nakuru
```
```
Ngong Road, 18, Nairobi
```
```
Narva maantee, 10, Tallinn
```
```
Nkrumah Road, 22, Mombasa
```
```
Hospital Road, 1, Nakuru
```
```
Camino del Monasterio, S/N, San Millán de la Cogolla
```
```
, , 
```
```
Peace Avenue, 0, Ulaanbaatar
```
```
Fjord Edge, Igloo-7, Kalaallit Nunaat (Greenland)
```
```
Marker Post, N/A, 35.6586, 139.7454
```
```
Undefined St, -0, Null City
```
```
Port Access Rd, ১২, Chittagong / চট্টগ্রাম
```
```
Rue des Laves, 1BIS, Reunion (La Réunion)
```
```
Dust Track, Temple-03, Bagan
```
```
Midnight Sun Way, ∞, Tromsø
```
```
Marina Road, 5, Tutukaka
```
```
Teheran-ro, 152, Seoul
```
```
Film City Road, 3A, Mumbai
```
```
Dr. Annie Besant Road, 88, Mumbai
```
```
, , 
```
```
ul. Marszałkowska, 101, Warszawa
```
```
Borgo Pinti, 14, Firenze
```
```
Via San Gallo, 56, Firenze
```
```
Queen Elizabeth Way, 12, Iqaluit
```
```
Keppel Road, 1, Singapore
```
```
Aiviq Street, 3, Iqaluit
```
```
Alemdar Mahallesi, 6, İstanbul
```
```
Anna Salai, 77, Chennai
```
```
Moi Avenue, 42, Mombasa
```
```
Ngong Road, 88, Nairobi
```
```
Kenyatta Avenue, 17, Nairobi
```
```
Jl. Diponegoro, 17, Jakarta
```
```
Herengracht, 312, Amsterdam
```
```
Transformatorweg, 12, Amsterdam
```
```
Houthavens, 5, Amsterdam
```
```
Oudezijds Achterburgwal, 101, Amsterdam
```
```
Kotoka Road, 5, Cape Coast
```
```
Independence Avenue, 88, Accra
```
```
Jaro Plaza, 9, Iloilo City
```
```
Plateau, 2, Dakar
```
```
Ring Road Central, 16, Accra
```
```
Rue Saint‑Jacques, 200, Montréal
```
```
Boulevard de la République, 15, Abidjan
```
```
Spintex Road, 14, Accra
```
```
Rizal Street, 1, San Isidro
```
```
Boulevard René‑Lévesque Ouest, 455, Québec City
```
```
Avenue Léopold Sédar Senghor, 10, Dakar
```
```
Hospital Road, 3A, Tamale
```
```
Barangay Hall Road, 1, San Isidro
```
```
Ring Road, १२-A, New Delhi
```
```
धेरै सडक, 3, Kathmandu
```
```
Avenue des Docks, Lot 7, Port Louis
```
```
Rue des Tests, 1, Monaco
```
```
Archive Lane, 1/0, Valletta
```
```
Cubbon Park (Main Gate), —, Bengaluru
```
```
Tumkur Road, 55, Bengaluru
```
```
12th Main, Indiranagar, 418, Bengaluru
```
```
Rua da Frente, 9, Beira
```
```
Boulevard de l’Indépendance, 27, Toamasina
```
```
Jan Smuts Avenue, 50, Johannesburg
```
```
Praça da Independência, 1, Maputo
```
```
Av. do Zimbabwe, 260, Beira
```
```
Rua do Porto, 17, Porto
```
```
Estrada Nacional 1, KM 12, Beira
```
```
Rua Rainha Ginga, 101, Luanda
```
```
Copper Street, 2, Erdenet
```
```
Sheikh Zayed Road, 301, Dubai
```
```
Al Khaleej Street, 14, Dubai
```
```
Market Street, 7, Polokwane
```
```
Smith Street, 90, Durban
```
```
King Faisal Street, 88, Sharjah
```
```
Jan Smuts Avenue, 144, Johannesburg
```
```
Chinggis Avenue, 25, Ulaanbaatar
```
```
Borgartún, 8, Reykjavík
```
```
Peace Avenue, 12-4, Ulaanbaatar
```
```
Umhlanga Ridge Boulevard, 6, Durban
```
```
Jan Smuts Avenue, 200, Johannesburg
```
```
Vilakazi Street, 8115, Soweto
```

