# Generation 1
## Category baseline
```
!new Station('S1')

!new Driver('D1001')
!D1001.id := 'D-1001'
!D1001.name := 'Marek Nowak'

!new Driver('D1002')
!D1002.id := 'D-1002'
!D1002.name := 'Aylin Demir'

!insert (S1, D1001) into StationContainsDriver
!insert (S1, D1002) into StationContainsDriver

!new Customer('C2001')
!C2001.id := 'C-2001'
!C2001.name := 'Hannah Müller'
!C2001.twitterUserName := '@hannahmueller'

!new Customer('C2002')
!C2002.id := 'C-2002'
!C2002.name := 'Kenji Sato'
!C2002.twitterUserName := '@kenjisato_berlin'

!insert (S1, C2001) into StationContainsCustomer
!insert (S1, C2002) into StationContainsCustomer

!new Address('APU1')
!APU1.text := 'Kantstraße 12, 10623 Berlin, Germany'
!new GeoLocation('GL1')
!GL1.latitude := 52.5076
!GL1.longitude := 13.3290
!insert (APU1, GL1) into AddressContainsGeoLocation

!new Address('ADEL1')
!ADEL1.text := 'Revaler Str. 99, 10245 Berlin, Germany'
!new GeoLocation('GL2')
!GL2.latitude := 52.5070
!GL2.longitude := 13.4550
!insert (ADEL1, GL2) into AddressContainsGeoLocation

!new Address('APU2')
!APU2.text := 'Hardenbergplatz 8, 10623 Berlin, Germany'
!new GeoLocation('GL3')
!GL3.latitude := 52.5063
!GL3.longitude := 13.3335
!insert (APU2, GL3) into AddressContainsGeoLocation

!new Address('ADEL2')
!ADEL2.text := 'Tempelhofer Damm 216, 12099 Berlin, Germany'
!new GeoLocation('GL4')
!GL4.latitude := 52.4561
!GL4.longitude := 13.3852
!insert (ADEL2, GL4) into AddressContainsGeoLocation

!new Shipment('SH3001')
!SH3001.id := 'SH-3001'
!SH3001.status := #ASSIGNED

!new Shipment('SH3002')
!SH3002.id := 'SH-3002'
!SH3002.status := #NEW

!insert (S1, SH3001) into StationShipment
!insert (S1, SH3002) into StationShipment

!insert (C2001, SH3001) into CustomerConsistsOfShipment
!insert (C2002, SH3002) into CustomerConsistsOfShipment

!insert (SH3001, APU1) into ShipmentContainsPickUpAddress
!insert (SH3001, ADEL1) into ShipmentContainsDeliveryAddress

!insert (SH3002, APU2) into ShipmentContainsPickUpAddress
!insert (SH3002, ADEL2) into ShipmentContainsDeliveryAddress

!insert (D1001, SH3001) into DriverShipment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 58 | 0.00% |
| Multiplicities Errors | 0 | 17 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 0 | 4 | 0.00% |
| Lat/Lon (out of valid addresses) | 0 | 4 | 0.00% |
| Twitter | 1 | 2 | 50.00% |

| Invalid Twitters | 
|---| 
```
@kenjisato_berlin
```

## Category boundary
```
!new Station('S1')

!new Customer('CUST0001')
!CUST0001.id := 'CUST-0001'
!CUST0001.name := 'Amina El-Hassan'
!CUST0001.twitterUserName := '@Amina_الرحلات'

!new Shipment('SHP0001')
!SHP0001.id := 'SHP-0001'
!SHP0001.status := #NEW

!new Address('APU001')
!APU001.text := 'Amundsen–Scott South Pole Station, Antarctic Plateau (pickup point)'
!new GeoLocation('GPU001')
!GPU001.latitude := -90.0
!GPU001.longitude := -180.0

!new Address('ADL001')
!ADL001.text := 'Geographic North Pole research drop zone (delivery point)'
!new GeoLocation('GDL001')
!GDL001.latitude := 90.0
!GDL001.longitude := 180.0

!insert (S1, CUST0001) into StationContainsCustomer
!insert (S1, SHP0001) into StationShipment
!insert (CUST0001, SHP0001) into CustomerConsistsOfShipment

!insert (SHP0001, APU001) into ShipmentContainsPickUpAddress
!insert (SHP0001, ADL001) into ShipmentContainsDeliveryAddress

!insert (APU001, GPU001) into AddressContainsGeoLocation
!insert (ADL001, GDL001) into AddressContainsGeoLocation
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 25 | 0.00% |
| Multiplicities Errors | 0 | 7 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 2 | 2 | 100.00% |
| Lat/Lon (out of valid addresses) | 0 | 0 | 0.00% |
| Twitter | 1 | 1 | 100.00% |

| Invalid Addresses | 
|---| 
```
Amundsen–Scott South Pole Station, Antarctic Plateau (pickup point)
```
```
Geographic North Pole research drop zone (delivery point)
```

| Invalid Twitters | 
|---| 
```
@Amina_الرحلات
```

## Category complex
```
!new Station('BCNPortOpsStation')

!new Driver('DRVBCN017')
!DRVBCN017.id := 'DRV-BCN-017'
!DRVBCN017.name := 'Jordi Pujol'

!new Driver('DRVBCN023')
!DRVBCN023.id := 'DRV-BCN-023'
!DRVBCN023.name := 'Amina El‑Tayeb'

!new Driver('DRVBCN031')
!DRVBCN031.id := 'DRV-BCN-031'
!DRVBCN031.name := 'Lukas Schneider'

!new Driver('DRVBCN045')
!DRVBCN045.id := 'DRV-BCN-045'
!DRVBCN045.name := 'María Fernanda Ríos'

!insert (BCNPortOpsStation, DRVBCN017) into StationContainsDriver
!insert (BCNPortOpsStation, DRVBCN023) into StationContainsDriver
!insert (BCNPortOpsStation, DRVBCN031) into StationContainsDriver
!insert (BCNPortOpsStation, DRVBCN045) into StationContainsDriver

!new Customer('CUSTBCN1001')
!CUSTBCN1001.id := 'CUST-BCN-1001'
!CUSTBCN1001.name := 'Núria Solé'
!CUSTBCN1001.twitterUserName := '@nuria_sole'

!new Customer('CUSTBCN1002')
!CUSTBCN1002.id := 'CUST-BCN-1002'
!CUSTBCN1002.name := 'Hassan Al‑Khatib'
!CUSTBCN1002.twitterUserName := '@HassanKhatib'

!new Customer('CUSTBCN1003')
!CUSTBCN1003.id := 'CUST-BCN-1003'
!CUSTBCN1003.name := 'Keiko Tanaka'
!CUSTBCN1003.twitterUserName := '@keikodelivers'

!new Customer('CUSTBCN1004')
!CUSTBCN1004.id := 'CUST-BCN-1004'
!CUSTBCN1004.name := 'Olga Petrova'
!CUSTBCN1004.twitterUserName := '@olga_petrova'

!insert (BCNPortOpsStation, CUSTBCN1001) into StationContainsCustomer
!insert (BCNPortOpsStation, CUSTBCN1002) into StationContainsCustomer
!insert (BCNPortOpsStation, CUSTBCN1003) into StationContainsCustomer
!insert (BCNPortOpsStation, CUSTBCN1004) into StationContainsCustomer

!new Address('BCN_A1')
!BCN_A1.text := 'Passeig de Gràcia 43, 08007 Barcelona, Catalunya, Spain'
!new GeoLocation('BCN_GL1')
!BCN_GL1.latitude := 41.3929
!BCN_GL1.longitude := 2.1649
!insert (BCN_A1, BCN_GL1) into AddressContainsGeoLocation

!new Address('BCN_A2')
!BCN_A2.text := 'Carrer de la Marina 102, 08018 Barcelona, Catalunya, Spain'
!new GeoLocation('BCN_GL2')
!BCN_GL2.latitude := 41.4033
!BCN_GL2.longitude := 2.1886
!insert (BCN_A2, BCN_GL2) into AddressContainsGeoLocation

!new Address('BCN_A3')
!BCN_A3.text := 'Terminal de Càrrega T1, Aeroport Josep Tarradellas Barcelona–El Prat, 08820 El Prat de Llobregat'
!new GeoLocation('BCN_GL3')
!BCN_GL3.latitude := 41.2974
!BCN_GL3.longitude := 2.0833
!insert (BCN_A3, BCN_GL3) into AddressContainsGeoLocation

!new Address('BCN_A4')
!BCN_A4.text := 'Carrer d’Aragó 255, 08007 Barcelona, Catalunya, Spain'
!new GeoLocation('BCN_GL4')
!BCN_GL4.latitude := 41.3923
!BCN_GL4.longitude := 2.1631
!insert (BCN_A4, BCN_GL4) into AddressContainsGeoLocation

!new Address('BCN_A5')
!BCN_A5.text := 'Mercabarna, Carrer Major 76, 08040 Barcelona, Catalunya, Spain'
!new GeoLocation('BCN_GL5')
!BCN_GL5.latitude := 41.3349
!BCN_GL5.longitude := 2.1267
!insert (BCN_A5, BCN_GL5) into AddressContainsGeoLocation

!new Address('BCN_A6')
!BCN_A6.text := 'Hospital Clínic (Entrada Logística), Carrer de Villarroel 170, 08036 Barcelona'
!new GeoLocation('BCN_GL6')
!BCN_GL6.latitude := 41.3892
!BCN_GL6.longitude := 2.1535
!insert (BCN_A6, BCN_GL6) into AddressContainsGeoLocation

!new Address('BCN_A7')
!BCN_A7.text := 'Carrer de Sants 210, 08028 Barcelona, Catalunya, Spain'
!new GeoLocation('BCN_GL7')
!BCN_GL7.latitude := 41.3751
!BCN_GL7.longitude := 2.1296
!insert (BCN_A7, BCN_GL7) into AddressContainsGeoLocation

!new Address('BCN_A8')
!BCN_A8.text := 'Avinguda de Martí Pujol 120, 08912 Badalona, Catalunya, Spain'
!new GeoLocation('BCN_GL8')
!BCN_GL8.latitude := 41.4500
!BCN_GL8.longitude := 2.2474
!insert (BCN_A8, BCN_GL8) into AddressContainsGeoLocation

!new Address('BCN_A9')
!BCN_A9.text := 'Carrer de Sant Pau 18, 08870 Sitges, Catalunya, Spain'
!new GeoLocation('BCN_GL9')
!BCN_GL9.latitude := 41.2362
!BCN_GL9.longitude := 1.8062
!insert (BCN_A9, BCN_GL9) into AddressContainsGeoLocation

!new Address('BCN_A10')
!BCN_A10.text := 'Carrer de Balmes 67, 08007 Barcelona, Catalunya, Spain'
!new GeoLocation('BCN_GL10')
!BCN_GL10.latitude := 41.3899
!BCN_GL10.longitude := 2.1619
!insert (BCN_A10, BCN_GL10) into AddressContainsGeoLocation

!new Address('BCN_A11')
!BCN_A11.text := 'Avinguda de Cerdanyola 98, 08172 Sant Cugat del Vallès, Catalunya, Spain'
!new GeoLocation('BCN_GL11')
!BCN_GL11.latitude := 41.4722
!BCN_GL11.longitude := 2.0860
!insert (BCN_A11, BCN_GL11) into AddressContainsGeoLocation

!new Address('BCN_A12')
!BCN_A12.text := 'Carrer d’Irlanda 14, 08922 Santa Coloma de Gramenet, Catalunya, Spain'
!new GeoLocation('BCN_GL12')
!BCN_GL12.latitude := 41.4517
!BCN_GL12.longitude := 2.2088
!insert (BCN_A12, BCN_GL12) into AddressContainsGeoLocation

!new Address('BCN_A13')
!BCN_A13.text := 'Carrer de la Maquinista 12, 08003 Barcelona (Barceloneta), Catalunya, Spain'
!new GeoLocation('BCN_GL13')
!BCN_GL13.latitude := 41.3793
!BCN_GL13.longitude := 2.1915
!insert (BCN_A13, BCN_GL13) into AddressContainsGeoLocation

!new Shipment('SHPBCN20260001')
!SHPBCN20260001.id := 'SHP-BCN-2026-0001'
!SHPBCN20260001.status := #NEW

!new Shipment('SHPBCN20260002')
!SHPBCN20260002.id := 'SHP-BCN-2026-0002'
!SHPBCN20260002.status := #ASSIGNED

!new Shipment('SHPBCN20260003')
!SHPBCN20260003.id := 'SHP-BCN-2026-0003'
!SHPBCN20260003.status := #UNDERWAY

!new Shipment('SHPBCN20260004')
!SHPBCN20260004.id := 'SHP-BCN-2026-0004'
!SHPBCN20260004.status := #DELIVERED

!new Shipment('SHPBCN20260005')
!SHPBCN20260005.id := 'SHP-BCN-2026-0005'
!SHPBCN20260005.status := #UNDERWAY

!new Shipment('SHPBCN20260006')
!SHPBCN20260006.id := 'SHP-BCN-2026-0006'
!SHPBCN20260006.status := #ASSIGNED

!new Shipment('SHPBCN20260007')
!SHPBCN20260007.id := 'SHP-BCN-2026-0007'
!SHPBCN20260007.status := #NEW

!new Shipment('SHPBCN20260008')
!SHPBCN20260008.id := 'SHP-BCN-2026-0008'
!SHPBCN20260008.status := #DELIVERED

!insert (BCNPortOpsStation, SHPBCN20260001) into StationShipment
!insert (BCNPortOpsStation, SHPBCN20260002) into StationShipment
!insert (BCNPortOpsStation, SHPBCN20260003) into StationShipment
!insert (BCNPortOpsStation, SHPBCN20260004) into StationShipment
!insert (BCNPortOpsStation, SHPBCN20260005) into StationShipment
!insert (BCNPortOpsStation, SHPBCN20260006) into StationShipment
!insert (BCNPortOpsStation, SHPBCN20260007) into StationShipment
!insert (BCNPortOpsStation, SHPBCN20260008) into StationShipment

!insert (CUSTBCN1001, SHPBCN20260001) into CustomerConsistsOfShipment
!insert (CUSTBCN1001, SHPBCN20260002) into CustomerConsistsOfShipment
!insert (CUSTBCN1001, SHPBCN20260003) into CustomerConsistsOfShipment

!insert (CUSTBCN1002, SHPBCN20260004) into CustomerConsistsOfShipment
!insert (CUSTBCN1002, SHPBCN20260005) into CustomerConsistsOfShipment

!insert (CUSTBCN1003, SHPBCN20260006) into CustomerConsistsOfShipment
!insert (CUSTBCN1003, SHPBCN20260007) into CustomerConsistsOfShipment
!insert (CUSTBCN1003, SHPBCN20260008) into CustomerConsistsOfShipment

!insert (SHPBCN20260001, BCN_A1) into ShipmentContainsPickUpAddress
!insert (SHPBCN20260001, BCN_A2) into ShipmentContainsDeliveryAddress

!insert (SHPBCN20260002, BCN_A3) into ShipmentContainsPickUpAddress
!insert (SHPBCN20260002, BCN_A4) into ShipmentContainsDeliveryAddress

!insert (SHPBCN20260003, BCN_A5) into ShipmentContainsPickUpAddress
!insert (SHPBCN20260003, BCN_A6) into ShipmentContainsDeliveryAddress

!insert (SHPBCN20260004, BCN_A7) into ShipmentContainsPickUpAddress
!insert (SHPBCN20260004, BCN_A8) into ShipmentContainsDeliveryAddress

!insert (SHPBCN20260005, BCN_A8) into ShipmentContainsPickUpAddress
!insert (SHPBCN20260005, BCN_A9) into ShipmentContainsDeliveryAddress

!insert (SHPBCN20260006, BCN_A10) into ShipmentContainsPickUpAddress
!insert (SHPBCN20260006, BCN_A7) into ShipmentContainsDeliveryAddress

!insert (SHPBCN20260007, BCN_A2) into ShipmentContainsPickUpAddress
!insert (SHPBCN20260007, BCN_A11) into ShipmentContainsDeliveryAddress

!insert (SHPBCN20260008, BCN_A12) into ShipmentContainsPickUpAddress
!insert (SHPBCN20260008, BCN_A13) into ShipmentContainsDeliveryAddress

!insert (DRVBCN017, SHPBCN20260002) into DriverShipment
!insert (DRVBCN023, SHPBCN20260003) into DriverShipment
!insert (DRVBCN031, SHPBCN20260004) into DriverShipment
!insert (DRVBCN017, SHPBCN20260005) into DriverShipment
!insert (DRVBCN023, SHPBCN20260006) into DriverShipment
!insert (DRVBCN031, SHPBCN20260008) into DriverShipment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 177 | 0.00% |
| Multiplicities Errors | 0 | 59 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 4 | 13 | 30.77% |
| Lat/Lon (out of valid addresses) | 0 | 9 | 0.00% |
| Twitter | 0 | 4 | 0.00% |

| Invalid Addresses | 
|---| 
```
Avinguda de Cerdanyola 98, 08172 Sant Cugat del Vallès, Catalunya, Spain
```
```
Terminal de Càrrega T1, Aeroport Josep Tarradellas Barcelona–El Prat, 08820 El Prat de Llobregat
```
```
Mercabarna, Carrer Major 76, 08040 Barcelona, Catalunya, Spain
```
```
Avinguda de Martí Pujol 120, 08912 Badalona, Catalunya, Spain
```

## Category edge
```
!new Station('S1')

!new Driver('EDGE_D1')
!EDGE_D1.id := 'DRV-JP-0001'
!EDGE_D1.name := 'Ayumi Tanaka'

!new Driver('EDGE_D2')
!EDGE_D2.id := 'DRV-JP-0002'
!EDGE_D2.name := 'Олег Серов'

!insert (S1, EDGE_D1) into StationContainsDriver
!insert (S1, EDGE_D2) into StationContainsDriver

!new Customer('EDGE_C1')
!EDGE_C1.id := 'CUS-0001'
!EDGE_C1.name := 'أمينة القحطاني'
!EDGE_C1.twitterUserName := '@Amina_Q8'

!new Customer('EDGE_C2')
!EDGE_C2.id := 'CUS-0002'
!EDGE_C2.name := 'Liam O’Connor'
!EDGE_C2.twitterUserName := '@liamoconnor_ie'

!new Customer('EDGE_C3')
!EDGE_C3.id := 'CUS-0003'
!EDGE_C3.name := 'Mina Park (박민아)'
!EDGE_C3.twitterUserName := '@minapark_kr'

!new Customer('EDGE_C4')
!EDGE_C4.id := 'CUS-0004'
!EDGE_C4.name := 'José da Silva'
!EDGE_C4.twitterUserName := '@ze_silva_br'

!insert (S1, EDGE_C1) into StationContainsCustomer
!insert (S1, EDGE_C2) into StationContainsCustomer
!insert (S1, EDGE_C3) into StationContainsCustomer
!insert (S1, EDGE_C4) into StationContainsCustomer

!new Address('EDGE_A1')
!EDGE_A1.text := 'Service corridor Door C, Teine Station parcel cage, 5-1-1 Teinehoncho, Teine-ku, Sapporo, Hokkaidō 006-0021, Japan'
!new GeoLocation('EDGE_GL1')
!EDGE_GL1.latitude := 43.107487
!EDGE_GL1.longitude := 141.243012
!insert (EDGE_A1, EDGE_GL1) into AddressContainsGeoLocation

!new Address('EDGE_A2')
!EDGE_A2.text := 'Front lobby lockers (same street address), 5-1-1 Teinehoncho, Teine-ku, Sapporo, Hokkaidō 006-0021, Japan'
!new GeoLocation('EDGE_GL2')
!EDGE_GL2.latitude := 43.107487
!EDGE_GL2.longitude := 141.243012
!insert (EDGE_A2, EDGE_GL2) into AddressContainsGeoLocation

!new Address('EDGE_A3')
!EDGE_A3.text := 'Counter pickup, Sapporo Central Post Office, Kita 6 Nishi 1, Kita-ku, Sapporo, Hokkaidō 060-8799, Japan'
!new GeoLocation('EDGE_GL3')
!EDGE_GL3.latitude := 43.068660
!EDGE_GL3.longitude := 141.350755
!insert (EDGE_A3, EDGE_GL3) into AddressContainsGeoLocation

!new Address('EDGE_A4')
!EDGE_A4.text := 'Boat Slip 3, Port of Otaru, Otaru, Hokkaidō, Japan'
!new GeoLocation('EDGE_GL4')
!EDGE_GL4.latitude := 43.214965
!EDGE_GL4.longitude := 141.003876
!insert (EDGE_A4, EDGE_GL4) into AddressContainsGeoLocation

!new Address('EDGE_A5')
!EDGE_A5.text := 'Temporary festival stall “雪まつり” delivery point, Odori Park, Chuo-ku, Sapporo, Hokkaidō, Japan'
!new GeoLocation('EDGE_GL5')
!EDGE_GL5.latitude := 43.060540
!EDGE_GL5.longitude := 141.351000
!insert (EDGE_A5, EDGE_GL5) into AddressContainsGeoLocation

!new Address('EDGE_A6')
!EDGE_A6.text := 'UNIS logistics shed, Longyearbyen, Svalbard, Norway'
!new GeoLocation('EDGE_GL6')
!EDGE_GL6.latitude := 78.223200
!EDGE_GL6.longitude := 15.646900
!insert (EDGE_A6, EDGE_GL6) into AddressContainsGeoLocation

!new Address('EDGE_A7')
!EDGE_A7.text := 'McMurdo Station cargo pad, Ross Island, Antarctica'
!new GeoLocation('EDGE_GL7')
!EDGE_GL7.latitude := -77.841900
!EDGE_GL7.longitude := 166.686300
!insert (EDGE_A7, EDGE_GL7) into AddressContainsGeoLocation

!new Shipment('EDGE_SHP1')
!EDGE_SHP1.id := 'SHP-EDGE-0001'
!EDGE_SHP1.status := #DELIVERED

!new Shipment('EDGE_SHP2')
!EDGE_SHP2.id := 'SHP-EDGE-0002'
!EDGE_SHP2.status := #ASSIGNED

!new Shipment('EDGE_SHP3')
!EDGE_SHP3.id := 'SHP-EDGE-0003'
!EDGE_SHP3.status := #NEW

!new Shipment('EDGE_SHP4')
!EDGE_SHP4.id := 'SHP-EDGE-0004'
!EDGE_SHP4.status := #UNDERWAY

!new Shipment('EDGE_SHP5')
!EDGE_SHP5.id := 'SHP-EDGE-0005'
!EDGE_SHP5.status := #UNDERWAY

!insert (S1, EDGE_SHP1) into StationShipment
!insert (S1, EDGE_SHP2) into StationShipment
!insert (S1, EDGE_SHP3) into StationShipment
!insert (S1, EDGE_SHP4) into StationShipment
!insert (S1, EDGE_SHP5) into StationShipment

!insert (EDGE_C1, EDGE_SHP1) into CustomerConsistsOfShipment
!insert (EDGE_C1, EDGE_SHP2) into CustomerConsistsOfShipment
!insert (EDGE_C2, EDGE_SHP3) into CustomerConsistsOfShipment
!insert (EDGE_C2, EDGE_SHP4) into CustomerConsistsOfShipment
!insert (EDGE_C3, EDGE_SHP5) into CustomerConsistsOfShipment

!insert (EDGE_SHP1, EDGE_A1) into ShipmentContainsPickUpAddress
!insert (EDGE_SHP1, EDGE_A2) into ShipmentContainsDeliveryAddress

!insert (EDGE_SHP2, EDGE_A1) into ShipmentContainsPickUpAddress
!insert (EDGE_SHP2, EDGE_A3) into ShipmentContainsDeliveryAddress

!insert (EDGE_SHP3, EDGE_A4) into ShipmentContainsPickUpAddress
!insert (EDGE_SHP3, EDGE_A5) into ShipmentContainsDeliveryAddress

!insert (EDGE_SHP4, EDGE_A6) into ShipmentContainsPickUpAddress
!insert (EDGE_SHP4, EDGE_A7) into ShipmentContainsDeliveryAddress

!insert (EDGE_SHP5, EDGE_A5) into ShipmentContainsPickUpAddress
!insert (EDGE_SHP5, EDGE_A3) into ShipmentContainsDeliveryAddress

!insert (EDGE_D2, EDGE_SHP3) into DriverShipment
!insert (EDGE_D2, EDGE_SHP4) into DriverShipment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 108 | 0.00% |
| Multiplicities Errors | 0 | 35 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 7 | 7 | 100.00% |
| Lat/Lon (out of valid addresses) | 0 | 0 | 0.00% |
| Twitter | 0 | 4 | 0.00% |

| Invalid Addresses | 
|---| 
```
Service corridor Door C, Teine Station parcel cage, 5-1-1 Teinehoncho, Teine-ku, Sapporo, Hokkaidō 006-0021, Japan
```
```
Front lobby lockers (same street address), 5-1-1 Teinehoncho, Teine-ku, Sapporo, Hokkaidō 006-0021, Japan
```
```
Counter pickup, Sapporo Central Post Office, Kita 6 Nishi 1, Kita-ku, Sapporo, Hokkaidō 060-8799, Japan
```
```
Boat Slip 3, Port of Otaru, Otaru, Hokkaidō, Japan
```
```
Temporary festival stall “雪まつり” delivery point, Odori Park, Chuo-ku, Sapporo, Hokkaidō, Japan
```
```
UNIS logistics shed, Longyearbyen, Svalbard, Norway
```
```
McMurdo Station cargo pad, Ross Island, Antarctica
```

## Category invalid
```
!new Station('OSK_HUB')
!new Station('KYO_HUB')

!new Customer('CJP104_OSK')
!CJP104_OSK.id := 'C-JP-104'
!CJP104_OSK.name := 'Yumi Nakamura'
!CJP104_OSK.twitterUserName := '@yumi_naka'

!new Customer('CJP104_KYO')
!CJP104_KYO.id := 'C-JP-104'
!CJP104_KYO.name := 'Yumi Nakamura'
!CJP104_KYO.twitterUserName := '@yumi_naka'

!insert (OSK_HUB, CJP104_OSK) into StationContainsCustomer
!insert (KYO_HUB, CJP104_KYO) into StationContainsCustomer

!new Driver('DOSK01_2')
!DOSK01_2.id := 'D-OSK-01'
!DOSK01_2.name := 'Haruto Sato'

!new Driver('DOSK02_2')
!DOSK02_2.id := 'D-OSK-02'
!DOSK02_2.name := 'Mei Tanaka'

!new Driver('DKYO01_2')
!DKYO01_2.id := 'D-KYO-01'
!DKYO01_2.name := 'Jean Dubois'

!insert (OSK_HUB, DOSK01_2) into StationContainsDriver
!insert (OSK_HUB, DOSK02_2) into StationContainsDriver
!insert (KYO_HUB, DKYO01_2) into StationContainsDriver

!new Address('AOSKGFO_2')
!AOSKGFO_2.text := 'グランフロント大阪 北館 3F（Grand Front Osaka North Building 3F）, 3-1 Ofukachō, Kita-ku, Osaka 530-0011, Japan'
!new GeoLocation('GLOSKGFO_2')
!GLOSKGFO_2.latitude := 34.7053
!GLOSKGFO_2.longitude := 135.4949
!insert (AOSKGFO_2, GLOSKGFO_2) into AddressContainsGeoLocation

!new Address('AKYOPICK_2')
!AKYOPICK_2.text := '〒600-8216 京都府京都市下京区東塩小路町 901 (Kyoto Station area), Japan'
!new GeoLocation('GLKYOPICK_2')
!GLKYOPICK_2.latitude := 34.9855
!GLKYOPICK_2.longitude := 135.7586
!insert (AKYOPICK_2, GLKYOPICK_2) into AddressContainsGeoLocation

!new Address('AKYODEST_2')
!AKYODEST_2.text := '京都大学医学部附属病院, 54 Kawahara-chō, Shōgoin, Sakyo Ward, Kyoto 606-8507, Japan'
!new GeoLocation('GLKYODEST_2')
!GLKYODEST_2.latitude := 35.0260
!GLKYODEST_2.longitude := 135.7809
!insert (AKYODEST_2, GLKYODEST_2) into AddressContainsGeoLocation

!new Shipment('SHPOSK0007_L1')
!SHPOSK0007_L1.id := 'SHP-OSK-0007'
!SHPOSK0007_L1.status := #UNDERWAY

!new Shipment('SHPOSK0007_L2')
!SHPOSK0007_L2.id := 'SHP-OSK-0007'
!SHPOSK0007_L2.status := #UNDERWAY

!new Shipment('SHPKYO0031_2')
!SHPKYO0031_2.id := 'SHP-KYO-0031'
!SHPKYO0031_2.status := #ASSIGNED

!insert (OSK_HUB, SHPOSK0007_L1) into StationShipment
!insert (OSK_HUB, SHPOSK0007_L2) into StationShipment
!insert (KYO_HUB, SHPKYO0031_2) into StationShipment

!insert (CJP104_OSK, SHPOSK0007_L1) into CustomerConsistsOfShipment
!insert (CJP104_OSK, SHPOSK0007_L2) into CustomerConsistsOfShipment
!insert (CJP104_KYO, SHPKYO0031_2) into CustomerConsistsOfShipment

!insert (SHPOSK0007_L1, AOSKGFO_2) into ShipmentContainsPickUpAddress
!insert (SHPOSK0007_L1, AOSKGFO_2) into ShipmentContainsDeliveryAddress

!insert (SHPOSK0007_L2, AOSKGFO_2) into ShipmentContainsPickUpAddress
!insert (SHPOSK0007_L2, AOSKGFO_2) into ShipmentContainsDeliveryAddress

!insert (SHPKYO0031_2, AKYOPICK_2) into ShipmentContainsPickUpAddress
!insert (SHPKYO0031_2, AKYODEST_2) into ShipmentContainsDeliveryAddress

!insert (DOSK01_2, SHPOSK0007_L1) into DriverShipment
!insert (DOSK02_2, SHPOSK0007_L2) into DriverShipment
!insert (DKYO01_2, SHPKYO0031_2) into DriverShipment
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 23 | 0.00% |
| Invariants Errors (Not included on General) | 3 | 4 | 75.00% |

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (1) `Customer::uniqueCustomerId': FAILED.
```
```
checking invariant (3) `Shipment::differentPickupAndDeliveryAddress': FAILED.
```
```
checking invariant (4) `Shipment::uniqueShipmentId': FAILED.
```

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 3 | 3 | 100.00% |
| Lat/Lon (out of valid addresses) | 0 | 0 | 0.00% |
| Twitter | 0 | 2 | 0.00% |

| Invalid Addresses | 
|---| 
```
京都大学医学部附属病院, 54 Kawahara-chō, Shōgoin, Sakyo Ward, Kyoto 606-8507, Japan
```
```
グランフロント大阪 北館 3F（Grand Front Osaka North Building 3F）, 3-1 Ofukachō, Kita-ku, Osaka 530-0011, Japan
```
```
〒600-8216 京都府京都市下京区東塩小路町 901 (Kyoto Station area), Japan
```

## Generation 1 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 434 | 0.00% |
| Multiplicities Errors | 0 | 118 | 0.00% |
| Invariants Errors | 0 | 16 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 23 | 0.00% |
| Invariants Errors (Not included on General) | 3 | 4 | 75.00% |

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (1) `Customer::uniqueCustomerId': FAILED.
```
```
checking invariant (3) `Shipment::differentPickupAndDeliveryAddress': FAILED.
```
```
checking invariant (4) `Shipment::uniqueShipmentId': FAILED.
```

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 16 | 29 | 55.17% |
| Lat/Lon (out of valid addresses) | 0 | 13 | 0.00% |
| Twitter | 2 | 13 | 15.38% |

| Invalid Addresses | 
|---| 
```
Amundsen–Scott South Pole Station, Antarctic Plateau (pickup point)
```
```
Geographic North Pole research drop zone (delivery point)
```
```
Avinguda de Cerdanyola 98, 08172 Sant Cugat del Vallès, Catalunya, Spain
```
```
Terminal de Càrrega T1, Aeroport Josep Tarradellas Barcelona–El Prat, 08820 El Prat de Llobregat
```
```
Mercabarna, Carrer Major 76, 08040 Barcelona, Catalunya, Spain
```
```
Avinguda de Martí Pujol 120, 08912 Badalona, Catalunya, Spain
```
```
Service corridor Door C, Teine Station parcel cage, 5-1-1 Teinehoncho, Teine-ku, Sapporo, Hokkaidō 006-0021, Japan
```
```
Front lobby lockers (same street address), 5-1-1 Teinehoncho, Teine-ku, Sapporo, Hokkaidō 006-0021, Japan
```
```
Counter pickup, Sapporo Central Post Office, Kita 6 Nishi 1, Kita-ku, Sapporo, Hokkaidō 060-8799, Japan
```
```
Boat Slip 3, Port of Otaru, Otaru, Hokkaidō, Japan
```
```
Temporary festival stall “雪まつり” delivery point, Odori Park, Chuo-ku, Sapporo, Hokkaidō, Japan
```
```
UNIS logistics shed, Longyearbyen, Svalbard, Norway
```
```
McMurdo Station cargo pad, Ross Island, Antarctica
```
```
京都大学医学部附属病院, 54 Kawahara-chō, Shōgoin, Sakyo Ward, Kyoto 606-8507, Japan
```
```
グランフロント大阪 北館 3F（Grand Front Osaka North Building 3F）, 3-1 Ofukachō, Kita-ku, Osaka 530-0011, Japan
```
```
〒600-8216 京都府京都市下京区東塩小路町 901 (Kyoto Station area), Japan
```

| Invalid Twitters | 
|---| 
```
@kenjisato_berlin
```
```
@Amina_الرحلات
```

# Generation 2
## Category baseline
```
!new Station('S2_BLR')

!new Driver('D2100')
!D2100.id := 'D-2100'
!D2100.name := 'Ananya Rao'
!insert (S2_BLR, D2100) into StationContainsDriver

!new Customer('C5101')
!C5101.id := 'C-5101'
!C5101.name := 'Priya Iyer'
!C5101.twitterUserName := '@priyaiyer_blr'

!new Customer('C5102')
!C5102.id := 'C-5102'
!C5102.name := 'Omar El-Badry'
!C5102.twitterUserName := '@omar_elbadry'

!new Customer('C5103')
!C5103.id := 'C-5103'
!C5103.name := 'Chloé Tremblay'
!C5103.twitterUserName := '@chloe_tremblay'

!insert (S2_BLR, C5101) into StationContainsCustomer
!insert (S2_BLR, C5102) into StationContainsCustomer
!insert (S2_BLR, C5103) into StationContainsCustomer

!new Address('AWH1')
!AWH1.text := 'Fulfillment Bay 3, 45 Hosur Road, Bommanahalli, Bengaluru 560068, India'
!new GeoLocation('GL11_BLR')
!GL11_BLR.latitude := 12.8928
!GL11_BLR.longitude := 77.6366
!insert (AWH1, GL11_BLR) into AddressContainsGeoLocation

!new Address('AAPT1')
!AAPT1.text := 'Flat 12B, 3rd Cross, Indiranagar, Bengaluru 560038, India'
!new GeoLocation('GL12_BLR')
!GL12_BLR.latitude := 12.9784
!GL12_BLR.longitude := 77.6408
!insert (AAPT1, GL12_BLR) into AddressContainsGeoLocation

!new Address('AOFF1')
!AOFF1.text := 'Unit 7, Manyata Tech Park, Nagawara, Bengaluru 560045, India'
!new GeoLocation('GL13_BLR')
!GL13_BLR.latitude := 13.0477
!GL13_BLR.longitude := 77.6214
!insert (AOFF1, GL13_BLR) into AddressContainsGeoLocation

!new Address('APU2_BLR')
!APU2_BLR.text := 'Omar’s Café, 9 Church Street, Bengaluru 560001, India'
!new GeoLocation('GL14_BLR')
!GL14_BLR.latitude := 12.9759
!GL14_BLR.longitude := 77.6033
!insert (APU2_BLR, GL14_BLR) into AddressContainsGeoLocation

!new Shipment('SH88001')
!SH88001.id := 'SH-88001'
!SH88001.status := #UNDERWAY

!new Shipment('SH88002')
!SH88002.id := 'SH-88002'
!SH88002.status := #DELIVERED

!new Shipment('SH88003')
!SH88003.id := 'SH-88003'
!SH88003.status := #NEW

!insert (S2_BLR, SH88001) into StationShipment
!insert (S2_BLR, SH88002) into StationShipment
!insert (S2_BLR, SH88003) into StationShipment

!insert (C5101, SH88001) into CustomerConsistsOfShipment
!insert (C5101, SH88002) into CustomerConsistsOfShipment
!insert (C5102, SH88003) into CustomerConsistsOfShipment

!insert (SH88001, AWH1) into ShipmentContainsPickUpAddress
!insert (SH88001, AAPT1) into ShipmentContainsDeliveryAddress
!insert (D2100, SH88001) into DriverShipment

!insert (SH88002, AWH1) into ShipmentContainsPickUpAddress
!insert (SH88002, AOFF1) into ShipmentContainsDeliveryAddress
!insert (D2100, SH88002) into DriverShipment

!insert (SH88003, APU2_BLR) into ShipmentContainsPickUpAddress
!insert (SH88003, AOFF1) into ShipmentContainsDeliveryAddress
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 67 | 0.00% |
| Multiplicities Errors | 0 | 22 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 0 | 4 | 0.00% |
| Lat/Lon (out of valid addresses) | 0 | 4 | 0.00% |
| Twitter | 0 | 3 | 0.00% |

## Category boundary
```
!new Station('S2')

!new Driver('DRV100')
!DRV100.id := 'DRV-100'
!DRV100.name := 'María-José Ortega'

!new Driver('DRV101')
!DRV101.id := 'DRV-101'
!DRV101.name := 'Kenji Tanaka'

!insert (S2, DRV100) into StationContainsDriver
!insert (S2, DRV101) into StationContainsDriver

!new Customer('CUST2001')
!CUST2001.id := 'CUST-2001'
!CUST2001.name := 'Sofía Álvarez'
!CUST2001.twitterUserName := '@sofia_envios'

!new Customer('CUST2002')
!CUST2002.id := 'CUST-2002'
!CUST2002.name := 'Hiroko Saitō'
!CUST2002.twitterUserName := '@斉藤ひろこ'

!insert (S2, CUST2001) into StationContainsCustomer
!insert (S2, CUST2002) into StationContainsCustomer

!new Address('APU2001')
!APU2001.text := 'Null Island buoy area, Gulf of Guinea (0°N 0°E)'
!new GeoLocation('G2001')
!G2001.latitude := 0.0
!G2001.longitude := 0.0
!insert (APU2001, G2001) into AddressContainsGeoLocation

!new Address('ADL2001')
!ADL2001.text := 'Suva Harbour, Fiji (near the International Date Line)'
!new GeoLocation('G2002')
!G2002.latitude := -18.1416
!G2002.longitude := 179.9999
!insert (ADL2001, G2002) into AddressContainsGeoLocation

!new Address('APU2002')
!APU2002.text := 'Apia, Samoa (western side of the Date Line)'
!new GeoLocation('G2003')
!G2003.latitude := -13.8333
!G2003.longitude := -171.7667
!insert (APU2002, G2003) into AddressContainsGeoLocation

!new Address('ADL2002')
!ADL2002.text := 'Nukuʻalofa, Tonga (eastern side of the Date Line)'
!new GeoLocation('G2004')
!G2004.latitude := -21.1394
!G2004.longitude := -175.2049
!insert (ADL2002, G2004) into AddressContainsGeoLocation

!new Shipment('SHP2001')
!SHP2001.id := 'SHP-2001'
!SHP2001.status := #DELIVERED

!new Shipment('SHP2002')
!SHP2002.id := 'SHP-2002'
!SHP2002.status := #UNDERWAY

!insert (S2, SHP2001) into StationShipment
!insert (S2, SHP2002) into StationShipment

!insert (CUST2002, SHP2001) into CustomerConsistsOfShipment
!insert (CUST2002, SHP2002) into CustomerConsistsOfShipment

!insert (SHP2001, APU2001) into ShipmentContainsPickUpAddress
!insert (SHP2001, ADL2001) into ShipmentContainsDeliveryAddress

!insert (SHP2002, APU2002) into ShipmentContainsPickUpAddress
!insert (SHP2002, ADL2002) into ShipmentContainsDeliveryAddress
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 57 | 0.00% |
| Multiplicities Errors | 0 | 16 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 4 | 4 | 100.00% |
| Lat/Lon (out of valid addresses) | 0 | 0 | 0.00% |
| Twitter | 1 | 2 | 50.00% |

| Invalid Addresses | 
|---| 
```
Null Island buoy area, Gulf of Guinea (0°N 0°E)
```
```
Apia, Samoa (western side of the Date Line)
```
```
Nukuʻalofa, Tonga (eastern side of the Date Line)
```
```
Suva Harbour, Fiji (near the International Date Line)
```

| Invalid Twitters | 
|---| 
```
@斉藤ひろこ
```

## Category complex
```
!new Station('OSKNambaMicroHub')
!new Station('ISLReykjavikDepot')

!new Driver('DRVOSK001')
!DRVOSK001.id := 'DRV-OSK-001'
!DRVOSK001.name := 'Sakura Mori'

!new Driver('DRVOSK002')
!DRVOSK002.id := 'DRV-OSK-002'
!DRVOSK002.name := 'Kenji Watanabe'

!new Driver('DRVISL011')
!DRVISL011.id := 'DRV-ISL-011'
!DRVISL011.name := 'Sigríður Jónsdóttir'

!insert (OSKNambaMicroHub, DRVOSK001) into StationContainsDriver
!insert (OSKNambaMicroHub, DRVOSK002) into StationContainsDriver
!insert (ISLReykjavikDepot, DRVISL011) into StationContainsDriver

!new Customer('CUSTOSK2001')
!CUSTOSK2001.id := 'CUST-OSK-2001'
!CUSTOSK2001.name := 'Takeshi Nakamura'
!CUSTOSK2001.twitterUserName := '@nkmr_takeshi'

!new Customer('CUSTOSK2002')
!CUSTOSK2002.id := 'CUST-OSK-2002'
!CUSTOSK2002.name := 'Mei Chen'
!CUSTOSK2002.twitterUserName := '@mei_chen_osaka'

!new Customer('CUSTISL9001')
!CUSTISL9001.id := 'CUST-ISL-9001'
!CUSTISL9001.name := 'Einar Þór Guðmundsson'
!CUSTISL9001.twitterUserName := '@einarthor'

!new Customer('CUSTISL9002')
!CUSTISL9002.id := 'CUST-ISL-9002'
!CUSTISL9002.name := 'Aisha Al‑Harbi'
!CUSTISL9002.twitterUserName := '@aisha_harbi'

!insert (OSKNambaMicroHub, CUSTOSK2001) into StationContainsCustomer
!insert (OSKNambaMicroHub, CUSTOSK2002) into StationContainsCustomer
!insert (ISLReykjavikDepot, CUSTISL9001) into StationContainsCustomer
!insert (ISLReykjavikDepot, CUSTISL9002) into StationContainsCustomer

!new Address('OSK_O1')
!OSK_O1.text := '〒542-0076 大阪府大阪市中央区難波1丁目 (Namba 1-chōme, Chūō-ku, Osaka)'
!new GeoLocation('OSK_GL1')
!OSK_GL1.latitude := 34.6687
!OSK_GL1.longitude := 135.5019
!insert (OSK_O1, OSK_GL1) into AddressContainsGeoLocation

!new Address('OSK_O2')
!OSK_O2.text := '〒542-0071 大阪府大阪市中央区道頓堀2丁目 (Dōtonbori 2-chōme, Chūō-ku, Osaka)'
!new GeoLocation('OSK_GL2')
!OSK_GL2.latitude := 34.6689
!OSK_GL2.longitude := 135.5023
!insert (OSK_O2, OSK_GL2) into AddressContainsGeoLocation

!new Address('OSK_O3')
!OSK_O3.text := '〒530-0001 大阪府大阪市北区梅田3丁目 大阪駅 (Osaka Station, Umeda 3-chōme, Kita-ku, Osaka)'
!new GeoLocation('OSK_GL3')
!OSK_GL3.latitude := 34.7025
!OSK_GL3.longitude := 135.4959
!insert (OSK_O3, OSK_GL3) into AddressContainsGeoLocation

!new Address('OSK_O4')
!OSK_O4.text := '〒532-0011 大阪府大阪市淀川区西中島5丁目 新大阪駅 (Shin-Osaka Station, Nishinakajima 5-chōme)'
!new GeoLocation('OSK_GL4')
!OSK_GL4.latitude := 34.7335
!OSK_GL4.longitude := 135.5000
!insert (OSK_O4, OSK_GL4) into AddressContainsGeoLocation

!new Address('OSK_O5')
!OSK_O5.text := '〒543-0051 大阪府大阪市天王寺区四天王寺1丁目 (Shitennōji 1-chōme, Tennōji-ku, Osaka)'
!new GeoLocation('OSK_GL5')
!OSK_GL5.latitude := 34.6546
!OSK_GL5.longitude := 135.5160
!insert (OSK_O5, OSK_GL5) into AddressContainsGeoLocation

!new Address('OSK_O6')
!OSK_O6.text := '〒544-0034 大阪府大阪市生野区桃谷5丁目 (Momodani 5-chōme, Ikuno-ku, Osaka)'
!new GeoLocation('OSK_GL6')
!OSK_GL6.latitude := 34.6609
!OSK_GL6.longitude := 135.5287
!insert (OSK_O6, OSK_GL6) into AddressContainsGeoLocation

!new Address('OSK_O7')
!OSK_O7.text := '〒559-0034 大阪府大阪市住之江区南港北2丁目 インテックス大阪 (INTEX Osaka, Nankō-kita 2-chōme)'
!new GeoLocation('OSK_GL7')
!OSK_GL7.latitude := 34.6380
!OSK_GL7.longitude := 135.4143
!insert (OSK_O7, OSK_GL7) into AddressContainsGeoLocation

!new Address('ISL_R1')
!ISL_R1.text := 'Laugavegur 12, 101 Reykjavík, Iceland'
!new GeoLocation('ISL_GL1')
!ISL_GL1.latitude := 64.1466
!ISL_GL1.longitude := -21.9349
!insert (ISL_R1, ISL_GL1) into AddressContainsGeoLocation

!new Address('ISL_R2')
!ISL_R2.text := 'Skólavörðustígur 6, 101 Reykjavík, Iceland'
!new GeoLocation('ISL_GL2')
!ISL_GL2.latitude := 64.1460
!ISL_GL2.longitude := -21.9266
!insert (ISL_R2, ISL_GL2) into AddressContainsGeoLocation

!new Address('ISL_R3')
!ISL_R3.text := 'Fiskislóð 31, 101 Reykjavík (Old Harbour), Iceland'
!new GeoLocation('ISL_GL3')
!ISL_GL3.latitude := 64.1505
!ISL_GL3.longitude := -21.9483
!insert (ISL_R3, ISL_GL3) into AddressContainsGeoLocation

!new Address('ISL_R4')
!ISL_R4.text := 'Kringlan 4, 103 Reykjavík, Iceland'
!new GeoLocation('ISL_GL4')
!ISL_GL4.latitude := 64.1319
!ISL_GL4.longitude := -21.8895
!insert (ISL_R4, ISL_GL4) into AddressContainsGeoLocation

!new Address('ISL_R5')
!ISL_R5.text := 'Keflavíkurflugvöllur (KEF) Cargo, 235 Reykjanesbær, Iceland'
!new GeoLocation('ISL_GL5')
!ISL_GL5.latitude := 63.9850
!ISL_GL5.longitude := -22.6056
!insert (ISL_R5, ISL_GL5) into AddressContainsGeoLocation

!new Shipment('SHPOSK20260101')
!SHPOSK20260101.id := 'SHP-OSK-2026-0101'
!SHPOSK20260101.status := #NEW

!new Shipment('SHPOSK20260102')
!SHPOSK20260102.id := 'SHP-OSK-2026-0102'
!SHPOSK20260102.status := #ASSIGNED

!new Shipment('SHPOSK20260103')
!SHPOSK20260103.id := 'SHP-OSK-2026-0103'
!SHPOSK20260103.status := #UNDERWAY

!new Shipment('SHPOSK20260104')
!SHPOSK20260104.id := 'SHP-OSK-2026-0104'
!SHPOSK20260104.status := #DELIVERED

!new Shipment('SHPOSK20260105')
!SHPOSK20260105.id := 'SHP-OSK-2026-0105'
!SHPOSK20260105.status := #ASSIGNED

!new Shipment('SHPOSK20260106')
!SHPOSK20260106.id := 'SHP-OSK-2026-0106'
!SHPOSK20260106.status := #NEW

!new Shipment('SHPISL20267701')
!SHPISL20267701.id := 'SHP-ISL-2026-7701'
!SHPISL20267701.status := #UNDERWAY

!new Shipment('SHPISL20267702')
!SHPISL20267702.id := 'SHP-ISL-2026-7702'
!SHPISL20267702.status := #ASSIGNED

!new Shipment('SHPISL20267703')
!SHPISL20267703.id := 'SHP-ISL-2026-7703'
!SHPISL20267703.status := #DELIVERED

!new Shipment('SHPISL20267704')
!SHPISL20267704.id := 'SHP-ISL-2026-7704'
!SHPISL20267704.status := #NEW

!insert (OSKNambaMicroHub, SHPOSK20260101) into StationShipment
!insert (OSKNambaMicroHub, SHPOSK20260102) into StationShipment
!insert (OSKNambaMicroHub, SHPOSK20260103) into StationShipment
!insert (OSKNambaMicroHub, SHPOSK20260104) into StationShipment
!insert (OSKNambaMicroHub, SHPOSK20260105) into StationShipment
!insert (OSKNambaMicroHub, SHPOSK20260106) into StationShipment

!insert (ISLReykjavikDepot, SHPISL20267701) into StationShipment
!insert (ISLReykjavikDepot, SHPISL20267702) into StationShipment
!insert (ISLReykjavikDepot, SHPISL20267703) into StationShipment
!insert (ISLReykjavikDepot, SHPISL20267704) into StationShipment

!insert (CUSTOSK2001, SHPOSK20260101) into CustomerConsistsOfShipment
!insert (CUSTOSK2001, SHPOSK20260102) into CustomerConsistsOfShipment
!insert (CUSTOSK2002, SHPOSK20260103) into CustomerConsistsOfShipment
!insert (CUSTOSK2002, SHPOSK20260104) into CustomerConsistsOfShipment
!insert (CUSTOSK2001, SHPOSK20260105) into CustomerConsistsOfShipment
!insert (CUSTOSK2002, SHPOSK20260106) into CustomerConsistsOfShipment

!insert (CUSTISL9001, SHPISL20267701) into CustomerConsistsOfShipment
!insert (CUSTISL9001, SHPISL20267702) into CustomerConsistsOfShipment
!insert (CUSTISL9001, SHPISL20267703) into CustomerConsistsOfShipment
!insert (CUSTISL9001, SHPISL20267704) into CustomerConsistsOfShipment

!insert (SHPOSK20260101, OSK_O3) into ShipmentContainsPickUpAddress
!insert (SHPOSK20260101, OSK_O1) into ShipmentContainsDeliveryAddress

!insert (SHPOSK20260102, OSK_O7) into ShipmentContainsPickUpAddress
!insert (SHPOSK20260102, OSK_O5) into ShipmentContainsDeliveryAddress

!insert (SHPOSK20260103, OSK_O2) into ShipmentContainsPickUpAddress
!insert (SHPOSK20260103, OSK_O6) into ShipmentContainsDeliveryAddress

!insert (SHPOSK20260104, OSK_O4) into ShipmentContainsPickUpAddress
!insert (SHPOSK20260104, OSK_O2) into ShipmentContainsDeliveryAddress

!insert (SHPOSK20260105, OSK_O1) into ShipmentContainsPickUpAddress
!insert (SHPOSK20260105, OSK_O7) into ShipmentContainsDeliveryAddress

!insert (SHPOSK20260106, OSK_O5) into ShipmentContainsPickUpAddress
!insert (SHPOSK20260106, OSK_O3) into ShipmentContainsDeliveryAddress

!insert (SHPISL20267701, ISL_R5) into ShipmentContainsPickUpAddress
!insert (SHPISL20267701, ISL_R3) into ShipmentContainsDeliveryAddress

!insert (SHPISL20267702, ISL_R3) into ShipmentContainsPickUpAddress
!insert (SHPISL20267702, ISL_R4) into ShipmentContainsDeliveryAddress

!insert (SHPISL20267703, ISL_R1) into ShipmentContainsPickUpAddress
!insert (SHPISL20267703, ISL_R2) into ShipmentContainsDeliveryAddress

!insert (SHPISL20267704, ISL_R4) into ShipmentContainsPickUpAddress
!insert (SHPISL20267704, ISL_R1) into ShipmentContainsDeliveryAddress

!insert (DRVOSK001, SHPOSK20260102) into DriverShipment
!insert (DRVOSK002, SHPOSK20260103) into DriverShipment
!insert (DRVOSK001, SHPOSK20260104) into DriverShipment
!insert (DRVOSK002, SHPOSK20260105) into DriverShipment

!insert (DRVISL011, SHPISL20267701) into DriverShipment
!insert (DRVISL011, SHPISL20267702) into DriverShipment
!insert (DRVISL011, SHPISL20267703) into DriverShipment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 183 | 0.00% |
| Multiplicities Errors | 0 | 66 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 8 | 12 | 66.67% |
| Lat/Lon (out of valid addresses) | 0 | 4 | 0.00% |
| Twitter | 0 | 4 | 0.00% |

| Invalid Addresses | 
|---| 
```
〒559-0034 大阪府大阪市住之江区南港北2丁目 インテックス大阪 (INTEX Osaka, Nankō-kita 2-chōme)
```
```
Keflavíkurflugvöllur (KEF) Cargo, 235 Reykjanesbær, Iceland
```
```
〒542-0071 大阪府大阪市中央区道頓堀2丁目 (Dōtonbori 2-chōme, Chūō-ku, Osaka)
```
```
〒542-0076 大阪府大阪市中央区難波1丁目 (Namba 1-chōme, Chūō-ku, Osaka)
```
```
〒544-0034 大阪府大阪市生野区桃谷5丁目 (Momodani 5-chōme, Ikuno-ku, Osaka)
```
```
〒543-0051 大阪府大阪市天王寺区四天王寺1丁目 (Shitennōji 1-chōme, Tennōji-ku, Osaka)
```
```
〒532-0011 大阪府大阪市淀川区西中島5丁目 新大阪駅 (Shin-Osaka Station, Nishinakajima 5-chōme)
```
```
〒530-0001 大阪府大阪市北区梅田3丁目 大阪駅 (Osaka Station, Umeda 3-chōme, Kita-ku, Osaka)
```

## Category edge
```
!new Station('S2_driverless')

!new Customer('C10')
!C10.id := 'CUS-EDGE-1001'
!C10.name := 'Kalaallit Express ApS'
!C10.twitterUserName := '@kal_express'

!new Customer('C11')
!C11.id := 'CUS-EDGE-1002'
!C11.name := 'Nawojka Żuk'
!C11.twitterUserName := ''

!new Customer('C12')
!C12.id := 'CUS-EDGE-1003'
!C12.name := 'Te Whare Pounamu Trust'
!C12.twitterUserName := '@tewharepounamu'

!insert (S2_driverless, C10) into StationContainsCustomer
!insert (S2_driverless, C11) into StationContainsCustomer
!insert (S2_driverless, C12) into StationContainsCustomer

!new Address('A100')
!A100.text := 'Polar cache “NP-90”, North Pole (no street address)'
!new GeoLocation('GL100')
!GL100.latitude := 90.0
!GL100.longitude := 0.0
!insert (A100, GL100) into AddressContainsGeoLocation

!new Address('A101')
!A101.text := 'Amundsen–Scott marker zone, South Pole, Antarctica'
!new GeoLocation('GL101')
!GL101.latitude := -90.0
!GL101.longitude := 0.0
!insert (A101, GL101) into AddressContainsGeoLocation

!new Address('A102')
!A102.text := 'International Date Line buoy (east side), equatorial Pacific'
!new GeoLocation('GL102')
!GL102.latitude := 0.0
!GL102.longitude := 179.9999
!insert (A102, GL102) into AddressContainsGeoLocation

!new Address('A103')
!A103.text := 'International Date Line buoy (west side), equatorial Pacific'
!new GeoLocation('GL103')
!GL103.latitude := 0.0
!GL103.longitude := -179.9999
!insert (A103, GL103) into AddressContainsGeoLocation

!new Address('A104')
!A104.text := '“Null Island” floating platform, Gulf of Guinea (0,0)'
!new GeoLocation('GL104')
!GL104.latitude := 0.0
!GL104.longitude := 0.0
!insert (A104, GL104) into AddressContainsGeoLocation

!new Address('A105')
!A105.text := '“Null Island” floating platform, Gulf of Guinea (0,0) — secondary deck'
!new GeoLocation('GL105')
!GL105.latitude := 0.0008
!GL105.longitude := 0.0008
!insert (A105, GL105) into AddressContainsGeoLocation

!new Shipment('SHPEDGE1001')
!SHPEDGE1001.id := 'SHP-EDGE-1001'
!SHPEDGE1001.status := #ASSIGNED

!new Shipment('SHPEDGE1002')
!SHPEDGE1002.id := 'SHP-EDGE-1002'
!SHPEDGE1002.status := #UNDERWAY

!new Shipment('SHPEDGE1003')
!SHPEDGE1003.id := 'SHP-EDGE-1003'
!SHPEDGE1003.status := #DELIVERED

!insert (S2_driverless, SHPEDGE1001) into StationShipment
!insert (S2_driverless, SHPEDGE1002) into StationShipment
!insert (S2_driverless, SHPEDGE1003) into StationShipment

!insert (C10, SHPEDGE1001) into CustomerConsistsOfShipment
!insert (C11, SHPEDGE1002) into CustomerConsistsOfShipment
!insert (C11, SHPEDGE1003) into CustomerConsistsOfShipment

!insert (SHPEDGE1001, A102) into ShipmentContainsPickUpAddress
!insert (SHPEDGE1001, A103) into ShipmentContainsDeliveryAddress

!insert (SHPEDGE1002, A100) into ShipmentContainsPickUpAddress
!insert (SHPEDGE1002, A101) into ShipmentContainsDeliveryAddress

!insert (SHPEDGE1003, A104) into ShipmentContainsPickUpAddress
!insert (SHPEDGE1003, A105) into ShipmentContainsDeliveryAddress
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 73 | 0.00% |
| Multiplicities Errors | 0 | 21 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 6 | 6 | 100.00% |
| Lat/Lon (out of valid addresses) | 0 | 0 | 0.00% |
| Twitter | 0 | 2 | 0.00% |

| Invalid Addresses | 
|---| 
```
“Null Island” floating platform, Gulf of Guinea (0,0)
```
```
“Null Island” floating platform, Gulf of Guinea (0,0) — secondary deck
```
```
International Date Line buoy (east side), equatorial Pacific
```
```
International Date Line buoy (west side), equatorial Pacific
```
```
Polar cache “NP-90”, North Pole (no street address)
```
```
Amundsen–Scott marker zone, South Pole, Antarctica
```

## Category invalid
```
!new Station('LAGHUB2')
!new Station('ABVHUB2')

!new Driver('DNG77_2')
!DNG77_2.id := 'D-NG-77'
!DNG77_2.name := 'Khadijat Musa'

!new Driver('DNG05_2')
!DNG05_2.id := 'D-NG-05'
!DNG05_2.name := 'Tunde Adeyemi'

!new Driver('DNG12_2')
!DNG12_2.id := 'D-NG-12'
!DNG12_2.name := 'Emeka Nwosu'

!insert (LAGHUB2, DNG77_2) into StationContainsDriver
!insert (LAGHUB2, DNG05_2) into StationContainsDriver
!insert (ABVHUB2, DNG12_2) into StationContainsDriver

!new Customer('CNG2001_2')
!CNG2001_2.id := 'C-NG-2001'
!CNG2001_2.name := 'Amina Bello'
!CNG2001_2.twitterUserName := '@aminabello_ng'

!new Customer('CNG2002_2')
!CNG2002_2.id := 'C-NG-2002'
!CNG2002_2.name := 'Chinedu Okoye'
!CNG2002_2.twitterUserName := '@chinedu_ok'

!insert (LAGHUB2, CNG2001_2) into StationContainsCustomer
!insert (ABVHUB2, CNG2002_2) into StationContainsCustomer

!new Address('ALAG01_2')
!ALAG01_2.text := 'Ikeja City Mall, Gate A, Obafemi Awolowo Way, Ikeja, Lagos, Nigeria'
!new GeoLocation('GLLAGMALL_A2')
!GLLAGMALL_A2.latitude := 6.6069
!GLLAGMALL_A2.longitude := 3.3491
!insert (ALAG01_2, GLLAGMALL_A2) into AddressContainsGeoLocation

!new Address('ALAG02_2')
!ALAG02_2.text := 'Ikeja City Mall, Loading Bay Gate B (rear entrance), Ikeja, Lagos, Nigeria'
!new GeoLocation('GLLAGMALL_B2')
!GLLAGMALL_B2.latitude := 6.6069
!GLLAGMALL_B2.longitude := 3.3491
!insert (ALAG02_2, GLLAGMALL_B2) into AddressContainsGeoLocation

!new Address('ALAG03_2')
!ALAG03_2.text := 'Yaba College of Technology, Yaba, Lagos, Nigeria'
!new GeoLocation('GLLAGYABA_2')
!GLLAGYABA_2.latitude := 6.5160
!GLLAGYABA_2.longitude := 3.3741
!insert (ALAG03_2, GLLAGYABA_2) into AddressContainsGeoLocation

!new Address('AABV01_2')
!AABV01_2.text := 'Jabi Lake Mall, Jabi District, Abuja (FCT), Nigeria'
!new GeoLocation('GLABVJABI_2')
!GLABVJABI_2.latitude := 9.0765
!GLABVJABI_2.longitude := 7.4266
!insert (AABV01_2, GLABVJABI_2) into AddressContainsGeoLocation

!new Address('AABV02_2')
!AABV02_2.text := 'Wuse Market (Gate 3), Wuse Zone 5, Abuja (FCT), Nigeria'
!new GeoLocation('GLABVWUSE_2')
!GLABVWUSE_2.latitude := 9.0833
!GLABVWUSE_2.longitude := 7.4756
!insert (AABV02_2, GLABVWUSE_2) into AddressContainsGeoLocation

!new Address('AABV03_2')
!AABV03_2.text := 'Garki Area 11, Yakubu Gowon Crescent, Abuja (FCT), Nigeria'
!new GeoLocation('GLABVGARKI_2')
!GLABVGARKI_2.latitude := 9.0402
!GLABVGARKI_2.longitude := 7.4897
!insert (AABV03_2, GLABVGARKI_2) into AddressContainsGeoLocation

!new Shipment('SHPNG4450_A2')
!SHPNG4450_A2.id := 'SHP-NG-4450'
!SHPNG4450_A2.status := #UNDERWAY

!new Shipment('SHPNG4450_B2')
!SHPNG4450_B2.id := 'SHP-NG-4450'
!SHPNG4450_B2.status := #NEW

!new Shipment('SHPNG7781_2')
!SHPNG7781_2.id := 'SHP-NG-7781'
!SHPNG7781_2.status := #DELIVERED

!insert (LAGHUB2, SHPNG4450_A2) into StationShipment
!insert (ABVHUB2, SHPNG4450_B2) into StationShipment
!insert (LAGHUB2, SHPNG7781_2) into StationShipment

!insert (CNG2001_2, SHPNG4450_A2) into CustomerConsistsOfShipment
!insert (CNG2002_2, SHPNG4450_B2) into CustomerConsistsOfShipment
!insert (CNG2001_2, SHPNG7781_2) into CustomerConsistsOfShipment

!insert (SHPNG4450_A2, ALAG01_2) into ShipmentContainsPickUpAddress
!insert (SHPNG4450_A2, AABV01_2) into ShipmentContainsDeliveryAddress
!insert (DNG77_2, SHPNG4450_A2) into DriverShipment

!insert (SHPNG4450_B2, AABV02_2) into ShipmentContainsPickUpAddress
!insert (SHPNG4450_B2, AABV03_2) into ShipmentContainsDeliveryAddress

!insert (SHPNG7781_2, ALAG02_2) into ShipmentContainsPickUpAddress
!insert (SHPNG7781_2, ALAG03_2) into ShipmentContainsDeliveryAddress
!insert (DNG05_2, SHPNG7781_2) into DriverShipment
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 25 | 0.00% |
| Invariants Errors (Not included on General) | 1 | 4 | 25.00% |

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (4) `Shipment::uniqueShipmentId': FAILED.
```

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 5 | 6 | 83.33% |
| Lat/Lon (out of valid addresses) | 0 | 1 | 0.00% |
| Twitter | 0 | 2 | 0.00% |

| Invalid Addresses | 
|---| 
```
Ikeja City Mall, Gate A, Obafemi Awolowo Way, Ikeja, Lagos, Nigeria
```
```
Ikeja City Mall, Loading Bay Gate B (rear entrance), Ikeja, Lagos, Nigeria
```
```
Yaba College of Technology, Yaba, Lagos, Nigeria
```
```
Garki Area 11, Yakubu Gowon Crescent, Abuja (FCT), Nigeria
```
```
Wuse Market (Gate 3), Wuse Zone 5, Abuja (FCT), Nigeria
```

## Generation 2 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 463 | 0.00% |
| Multiplicities Errors | 0 | 125 | 0.00% |
| Invariants Errors | 0 | 16 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 25 | 0.00% |
| Invariants Errors (Not included on General) | 1 | 4 | 25.00% |

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (4) `Shipment::uniqueShipmentId': FAILED.
```

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 23 | 32 | 71.88% |
| Lat/Lon (out of valid addresses) | 0 | 9 | 0.00% |
| Twitter | 1 | 13 | 7.69% |

| Invalid Addresses | 
|---| 
```
Null Island buoy area, Gulf of Guinea (0°N 0°E)
```
```
Apia, Samoa (western side of the Date Line)
```
```
Nukuʻalofa, Tonga (eastern side of the Date Line)
```
```
Suva Harbour, Fiji (near the International Date Line)
```
```
〒559-0034 大阪府大阪市住之江区南港北2丁目 インテックス大阪 (INTEX Osaka, Nankō-kita 2-chōme)
```
```
Keflavíkurflugvöllur (KEF) Cargo, 235 Reykjanesbær, Iceland
```
```
〒542-0071 大阪府大阪市中央区道頓堀2丁目 (Dōtonbori 2-chōme, Chūō-ku, Osaka)
```
```
〒542-0076 大阪府大阪市中央区難波1丁目 (Namba 1-chōme, Chūō-ku, Osaka)
```
```
〒544-0034 大阪府大阪市生野区桃谷5丁目 (Momodani 5-chōme, Ikuno-ku, Osaka)
```
```
〒543-0051 大阪府大阪市天王寺区四天王寺1丁目 (Shitennōji 1-chōme, Tennōji-ku, Osaka)
```
```
〒532-0011 大阪府大阪市淀川区西中島5丁目 新大阪駅 (Shin-Osaka Station, Nishinakajima 5-chōme)
```
```
〒530-0001 大阪府大阪市北区梅田3丁目 大阪駅 (Osaka Station, Umeda 3-chōme, Kita-ku, Osaka)
```
```
“Null Island” floating platform, Gulf of Guinea (0,0)
```
```
“Null Island” floating platform, Gulf of Guinea (0,0) — secondary deck
```
```
International Date Line buoy (east side), equatorial Pacific
```
```
International Date Line buoy (west side), equatorial Pacific
```
```
Polar cache “NP-90”, North Pole (no street address)
```
```
Amundsen–Scott marker zone, South Pole, Antarctica
```
```
Ikeja City Mall, Gate A, Obafemi Awolowo Way, Ikeja, Lagos, Nigeria
```
```
Ikeja City Mall, Loading Bay Gate B (rear entrance), Ikeja, Lagos, Nigeria
```
```
Yaba College of Technology, Yaba, Lagos, Nigeria
```
```
Garki Area 11, Yakubu Gowon Crescent, Abuja (FCT), Nigeria
```
```
Wuse Market (Gate 3), Wuse Zone 5, Abuja (FCT), Nigeria
```

| Invalid Twitters | 
|---| 
```
@斉藤ひろこ
```

# Generation 3
## Category baseline
```
!new Station('S3NBO')
!new Station('S4REK')

!new Driver('D3301')
!D3301.id := 'D-3301'
!D3301.name := 'Wanjiku Mwangi'

!new Driver('D3302')
!D3302.id := 'D-3302'
!D3302.name := 'Ahmed Hassan'

!insert (S3NBO, D3301) into StationContainsDriver
!insert (S3NBO, D3302) into StationContainsDriver

!new Customer('C7301')
!C7301.id := 'C-7301'
!C7301.name := 'Njeri Kamau'
!C7301.twitterUserName := '@njeri_kamau'

!new Customer('C7302')
!C7302.id := 'C-7302'
!C7302.name := 'Diego Fernández'
!C7302.twitterUserName := '@dfernandez_travel'

!insert (S3NBO, C7301) into StationContainsCustomer
!insert (S3NBO, C7302) into StationContainsCustomer

!new Address('AS3_1')
!AS3_1.text := 'Kariobangi North, near the Kenya Power offices, Nairobi, Kenya'
!new GeoLocation('GLS3_1')
!GLS3_1.latitude := -1.2460
!GLS3_1.longitude := 36.9025
!insert (AS3_1, GLS3_1) into AddressContainsGeoLocation

!new Address('AS3_2')
!AS3_2.text := 'Apartment 4C, Kilimani, Nairobi, Kenya'
!new GeoLocation('GLS3_2')
!GLS3_2.latitude := -1.2921
!GLS3_2.longitude := 36.7890
!insert (AS3_2, GLS3_2) into AddressContainsGeoLocation

!new Address('AS3_3')
!AS3_3.text := 'Greenhouse Mall, Ngong Road, Nairobi, Kenya'
!new GeoLocation('GLS3_3')
!GLS3_3.latitude := -1.3005
!GLS3_3.longitude := 36.7768
!insert (AS3_3, GLS3_3) into AddressContainsGeoLocation

!new Address('AS3_4')
!AS3_4.text := 'Jomo Kenyatta International Airport (JKIA), Arrivals, Nairobi, Kenya'
!new GeoLocation('GLS3_4')
!GLS3_4.latitude := -1.3192
!GLS3_4.longitude := 36.9278
!insert (AS3_4, GLS3_4) into AddressContainsGeoLocation

!new Shipment('SH99010')
!SH99010.id := 'SH-99010'
!SH99010.status := #UNDERWAY

!new Shipment('SH99011')
!SH99011.id := 'SH-99011'
!SH99011.status := #DELIVERED

!new Shipment('SH99012')
!SH99012.id := 'SH-99012'
!SH99012.status := #NEW

!insert (S3NBO, SH99010) into StationShipment
!insert (S3NBO, SH99011) into StationShipment
!insert (S3NBO, SH99012) into StationShipment

!insert (C7301, SH99010) into CustomerConsistsOfShipment
!insert (C7301, SH99012) into CustomerConsistsOfShipment
!insert (C7302, SH99011) into CustomerConsistsOfShipment

!insert (SH99010, AS3_1) into ShipmentContainsPickUpAddress
!insert (SH99010, AS3_2) into ShipmentContainsDeliveryAddress
!insert (D3301, SH99010) into DriverShipment

!insert (SH99011, AS3_2) into ShipmentContainsPickUpAddress
!insert (SH99011, AS3_4) into ShipmentContainsDeliveryAddress
!insert (D3301, SH99011) into DriverShipment

!insert (SH99012, AS3_3) into ShipmentContainsPickUpAddress
!insert (SH99012, AS3_1) into ShipmentContainsDeliveryAddress

!new Driver('D4401')
!D4401.id := 'D-4401'
!D4401.name := 'Sóley Jónsdóttir'

!insert (S4REK, D4401) into StationContainsDriver

!new Customer('C8401')
!C8401.id := 'C-8401'
!C8401.name := 'Ethan Chen'
!C8401.twitterUserName := '@ethan_chen_is'

!insert (S4REK, C8401) into StationContainsCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 76 | 0.00% |
| Multiplicities Errors | 0 | 24 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 3 | 4 | 75.00% |
| Lat/Lon (out of valid addresses) | 0 | 1 | 0.00% |
| Twitter | 1 | 3 | 33.33% |

| Invalid Addresses | 
|---| 
```
Kariobangi North, near the Kenya Power offices, Nairobi, Kenya
```
```
Jomo Kenyatta International Airport (JKIA), Arrivals, Nairobi, Kenya
```
```
Greenhouse Mall, Ngong Road, Nairobi, Kenya
```

| Invalid Twitters | 
|---| 
```
@dfernandez_travel
```

## Category boundary
```
!new Station('S3')

!new Driver('DRV500')
!DRV500.id := 'DRV-500'
!DRV500.name := 'Abebe Bekele'

!new Driver('DRV501')
!DRV501.id := 'DRV-501'
!DRV501.name := 'Eileen O’Connor'

!new Driver('DRV502')
!DRV502.id := 'DRV-502'
!DRV502.name := 'Nguyễn Minh'

!insert (S3, DRV500) into StationContainsDriver
!insert (S3, DRV501) into StationContainsDriver
!insert (S3, DRV502) into StationContainsDriver

!new Customer('CUST5001')
!CUST5001.id := 'CUST-5001'
!CUST5001.name := 'Laila Hassan'
!CUST5001.twitterUserName := '@laila_dispatch'

!insert (S3, CUST5001) into StationContainsCustomer

!new Address('APUHUB')
!APUHUB.text := 'Blue Port Consolidation Hub, Port of Rotterdam, Netherlands'
!new GeoLocation('GPUHUB')
!GPUHUB.latitude := 51.9496
!GPUHUB.longitude := 4.1447
!insert (APUHUB, GPUHUB) into AddressContainsGeoLocation

!new Address('ADL5001')
!ADL5001.text := 'Nuuk Airport Cargo Gate, Nuuk, Greenland'
!new GeoLocation('GDL5001')
!GDL5001.latitude := 64.1909
!GDL5001.longitude := -51.6781
!insert (ADL5001, GDL5001) into AddressContainsGeoLocation

!new Address('ADL5002')
!ADL5002.text := 'Papeete Ferry Terminal, Tahiti, French Polynesia'
!new GeoLocation('GDL5002')
!GDL5002.latitude := -17.5516
!GDL5002.longitude := -149.5585
!insert (ADL5002, GDL5002) into AddressContainsGeoLocation

!new Address('ADL5003')
!ADL5003.text := 'Tiksi Port, Sakha Republic, Russia (Arctic coast)'
!new GeoLocation('GDL5003')
!GDL5003.latitude := 71.6350
!GDL5003.longitude := 128.8600
!insert (ADL5003, GDL5003) into AddressContainsGeoLocation

!new Address('ADL5004')
!ADL5004.text := 'Pago Pago Harbor, American Samoa'
!new GeoLocation('GDL5004')
!GDL5004.latitude := -14.2756
!GDL5004.longitude := -170.7020
!insert (ADL5004, GDL5004) into AddressContainsGeoLocation

!new Address('ADL5006')
!ADL5006.text := 'Hanga Roa Airfield Cargo Shed, Rapa Nui (Easter Island), Chile'
!new GeoLocation('GDL5006')
!GDL5006.latitude := -27.1648
!GDL5006.longitude := -109.4218
!insert (ADL5006, GDL5006) into AddressContainsGeoLocation

!new Address('ADL5007')
!ADL5007.text := 'Longyearbyen Logistics Yard, Svalbard, Norway'
!new GeoLocation('GDL5007')
!GDL5007.latitude := 78.2232
!GDL5007.longitude := 15.6469
!insert (ADL5007, GDL5007) into AddressContainsGeoLocation

!new Address('ADL5008')
!ADL5008.text := 'Chatham Islands Wharf, Waitangi, New Zealand (near the Date Line)'
!new GeoLocation('GDL5008')
!GDL5008.latitude := -43.9535
!GDL5008.longitude := -176.5597
!insert (ADL5008, GDL5008) into AddressContainsGeoLocation

!new Shipment('SHP5001')
!SHP5001.id := 'SHP-5001'
!SHP5001.status := #ASSIGNED

!new Shipment('SHP5002')
!SHP5002.id := 'SHP-5002'
!SHP5002.status := #UNDERWAY

!new Shipment('SHP5003')
!SHP5003.id := 'SHP-5003'
!SHP5003.status := #ASSIGNED

!new Shipment('SHP5004')
!SHP5004.id := 'SHP-5004'
!SHP5004.status := #DELIVERED

!new Shipment('SHP5005')
!SHP5005.id := 'SHP-5005'
!SHP5005.status := #UNDERWAY

!new Shipment('SHP5006')
!SHP5006.id := 'SHP-5006'
!SHP5006.status := #ASSIGNED

!new Shipment('SHP5007')
!SHP5007.id := 'SHP-5007'
!SHP5007.status := #DELIVERED

!new Shipment('SHP5008')
!SHP5008.id := 'SHP-5008'
!SHP5008.status := #NEW

!insert (S3, SHP5001) into StationShipment
!insert (S3, SHP5002) into StationShipment
!insert (S3, SHP5003) into StationShipment
!insert (S3, SHP5004) into StationShipment
!insert (S3, SHP5005) into StationShipment
!insert (S3, SHP5006) into StationShipment
!insert (S3, SHP5007) into StationShipment
!insert (S3, SHP5008) into StationShipment

!insert (CUST5001, SHP5001) into CustomerConsistsOfShipment
!insert (CUST5001, SHP5002) into CustomerConsistsOfShipment
!insert (CUST5001, SHP5003) into CustomerConsistsOfShipment
!insert (CUST5001, SHP5004) into CustomerConsistsOfShipment
!insert (CUST5001, SHP5005) into CustomerConsistsOfShipment
!insert (CUST5001, SHP5006) into CustomerConsistsOfShipment
!insert (CUST5001, SHP5007) into CustomerConsistsOfShipment
!insert (CUST5001, SHP5008) into CustomerConsistsOfShipment

!insert (SHP5001, APUHUB) into ShipmentContainsPickUpAddress
!insert (SHP5001, ADL5001) into ShipmentContainsDeliveryAddress

!insert (SHP5002, APUHUB) into ShipmentContainsPickUpAddress
!insert (SHP5002, ADL5002) into ShipmentContainsDeliveryAddress

!insert (SHP5003, APUHUB) into ShipmentContainsPickUpAddress
!insert (SHP5003, ADL5003) into ShipmentContainsDeliveryAddress

!insert (SHP5004, APUHUB) into ShipmentContainsPickUpAddress
!insert (SHP5004, ADL5004) into ShipmentContainsDeliveryAddress

!insert (SHP5005, APUHUB) into ShipmentContainsPickUpAddress
!insert (SHP5005, ADL5004) into ShipmentContainsDeliveryAddress

!insert (SHP5006, APUHUB) into ShipmentContainsPickUpAddress
!insert (SHP5006, ADL5006) into ShipmentContainsDeliveryAddress

!insert (SHP5007, APUHUB) into ShipmentContainsPickUpAddress
!insert (SHP5007, ADL5007) into ShipmentContainsDeliveryAddress

!insert (SHP5008, APUHUB) into ShipmentContainsPickUpAddress
!insert (SHP5008, ADL5008) into ShipmentContainsDeliveryAddress

!insert (DRV500, SHP5001) into DriverShipment
!insert (DRV500, SHP5002) into DriverShipment
!insert (DRV500, SHP5003) into DriverShipment
!insert (DRV500, SHP5004) into DriverShipment
!insert (DRV500, SHP5005) into DriverShipment
!insert (DRV500, SHP5006) into DriverShipment
!insert (DRV500, SHP5007) into DriverShipment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 129 | 0.00% |
| Multiplicities Errors | 0 | 51 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 7 | 8 | 87.50% |
| Lat/Lon (out of valid addresses) | 0 | 1 | 0.00% |
| Twitter | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
Papeete Ferry Terminal, Tahiti, French Polynesia
```
```
Tiksi Port, Sakha Republic, Russia (Arctic coast)
```
```
Nuuk Airport Cargo Gate, Nuuk, Greenland
```
```
Blue Port Consolidation Hub, Port of Rotterdam, Netherlands
```
```
Chatham Islands Wharf, Waitangi, New Zealand (near the Date Line)
```
```
Hanga Roa Airfield Cargo Shed, Rapa Nui (Easter Island), Chile
```
```
Longyearbyen Logistics Yard, Svalbard, Norway
```

## Category complex
```
!new Station('SPButantaOps')
!new Station('MAKGuelizDepot')
!new Station('TRNRemoteSandbox')

!new Driver('DRVSP101')
!DRVSP101.id := 'DRV-SP-101'
!DRVSP101.name := 'Ana Paula Ribeiro'

!new Driver('DRVSP102')
!DRVSP102.id := 'DRV-SP-102'
!DRVSP102.name := 'João Vítor Santos'

!new Driver('DRVSP103')
!DRVSP103.id := 'DRV-SP-103'
!DRVSP103.name := 'Renata Oliveira'

!new Driver('DRVMAK201')
!DRVMAK201.id := 'DRV-MAK-201'
!DRVMAK201.name := 'Youssef El Amrani'

!new Driver('DRVTRN001')
!DRVTRN001.id := 'DRV-TRN-001'
!DRVTRN001.name := 'Devon Lee'

!insert (SPButantaOps, DRVSP101) into StationContainsDriver
!insert (SPButantaOps, DRVSP102) into StationContainsDriver
!insert (SPButantaOps, DRVSP103) into StationContainsDriver
!insert (MAKGuelizDepot, DRVMAK201) into StationContainsDriver
!insert (TRNRemoteSandbox, DRVTRN001) into StationContainsDriver

!new Customer('CUSTSP3001')
!CUSTSP3001.id := 'CUST-SP-3001'
!CUSTSP3001.name := 'Instituto Butantã (Logística)'
!CUSTSP3001.twitterUserName := '@butantan_log'

!new Customer('CUSTSP3002')
!CUSTSP3002.id := 'CUST-SP-3002'
!CUSTSP3002.name := 'Carlos Eduardo Lima'
!CUSTSP3002.twitterUserName := '@cadu_limaSP'

!new Customer('CUSTSP3003')
!CUSTSP3003.id := 'CUST-SP-3003'
!CUSTSP3003.name := 'Yara Nascimento'
!CUSTSP3003.twitterUserName := '@yara_nasc'

!new Customer('CUSTMAK4001')
!CUSTMAK4001.id := 'CUST-MAK-4001'
!CUSTMAK4001.name := 'Rachida Aït Lahcen'
!CUSTMAK4001.twitterUserName := '@rachida_ait'

!new Customer('CUSTMAK4002')
!CUSTMAK4002.id := 'CUST-MAK-4002'
!CUSTMAK4002.name := 'Maison du Tapis'
!CUSTMAK4002.twitterUserName := '@maisondutapis'

!insert (SPButantaOps, CUSTSP3001) into StationContainsCustomer
!insert (SPButantaOps, CUSTSP3002) into StationContainsCustomer
!insert (SPButantaOps, CUSTSP3003) into StationContainsCustomer
!insert (MAKGuelizDepot, CUSTMAK4001) into StationContainsCustomer
!insert (MAKGuelizDepot, CUSTMAK4002) into StationContainsCustomer

!new Address('SPB_A1')
!SPB_A1.text := 'Centro de Distribuição Butantã, Av. Vital Brasil 1500, Butantã, São Paulo - SP, Brazil'
!new GeoLocation('SPB_GL1')
!SPB_GL1.latitude := -23.5679
!SPB_GL1.longitude := -46.7192
!insert (SPB_A1, SPB_GL1) into AddressContainsGeoLocation

!new Address('SPB_A2')
!SPB_A2.text := 'Hospital das Clínicas, Av. Dr. Enéas Carvalho de Aguiar 255, Cerqueira César, São Paulo - SP, Brazil'
!new GeoLocation('SPB_GL2')
!SPB_GL2.latitude := -23.5555
!SPB_GL2.longitude := -46.6706
!insert (SPB_A2, SPB_GL2) into AddressContainsGeoLocation

!new Address('SPB_A3')
!SPB_A3.text := 'Rua Teodoro Sampaio 1000, Pinheiros, São Paulo - SP, Brazil'
!new GeoLocation('SPB_GL3')
!SPB_GL3.latitude := -23.5578
!SPB_GL3.longitude := -46.6821
!insert (SPB_A3, SPB_GL3) into AddressContainsGeoLocation

!new Address('SPB_A4')
!SPB_A4.text := 'Av. Paulista 1578, Bela Vista, São Paulo - SP, Brazil'
!new GeoLocation('SPB_GL4')
!SPB_GL4.latitude := -23.5616
!SPB_GL4.longitude := -46.6559
!insert (SPB_A4, SPB_GL4) into AddressContainsGeoLocation

!new Address('SPB_A5')
!SPB_A5.text := 'TECA Cargas (GRU), Rod. Hélio Smidt, Guarulhos - SP, Brazil'
!new GeoLocation('SPB_GL5')
!SPB_GL5.latitude := -23.4356
!SPB_GL5.longitude := -46.4731
!insert (SPB_A5, SPB_GL5) into AddressContainsGeoLocation

!new Address('SPB_A6')
!SPB_A6.text := 'Paraisópolis (Ponto de Encontro), Vila Andrade, São Paulo - SP, Brazil'
!new GeoLocation('SPB_GL6')
!SPB_GL6.latitude := -23.6254
!SPB_GL6.longitude := -46.7354
!insert (SPB_A6, SPB_GL6) into AddressContainsGeoLocation

!new Address('SPB_A7')
!SPB_A7.text := 'CEAGESP, Av. Dr. Gastão Vidigal 1946, Vila Leopoldina, São Paulo - SP, Brazil'
!new GeoLocation('SPB_GL7')
!SPB_GL7.latitude := -23.5267
!SPB_GL7.longitude := -46.7219
!insert (SPB_A7, SPB_GL7) into AddressContainsGeoLocation

!new Address('SPB_A8')
!SPB_A8.text := 'Praça da Liberdade 80, Liberdade, São Paulo - SP, Brazil'
!new GeoLocation('SPB_GL8')
!SPB_GL8.latitude := -23.5594
!SPB_GL8.longitude := -46.6359
!insert (SPB_A8, SPB_GL8) into AddressContainsGeoLocation

!new Address('SPB_A9')
!SPB_A9.text := 'Cidade Tiradentes (Base Comunitária), São Paulo - SP, Brazil'
!new GeoLocation('SPB_GL9')
!SPB_GL9.latitude := -23.5898
!SPB_GL9.longitude := -46.4032
!insert (SPB_A9, SPB_GL9) into AddressContainsGeoLocation

!new Address('SPB_A10')
!SPB_A10.text := 'USP Cidade Universitária, Portaria 1, Butantã, São Paulo - SP, Brazil'
!new GeoLocation('SPB_GL10')
!SPB_GL10.latitude := -23.5598
!SPB_GL10.longitude := -46.7309
!insert (SPB_A10, SPB_GL10) into AddressContainsGeoLocation

!new Address('MAK_A1')
!MAK_A1.text := 'ساحة جامع الفنا (Jemaa el‑Fna), Marrakech 40000, Morocco'
!new GeoLocation('MAK_GL1')
!MAK_GL1.latitude := 31.6258
!MAK_GL1.longitude := -7.9892
!insert (MAK_A1, MAK_GL1) into AddressContainsGeoLocation

!new Address('MAK_A2')
!MAK_A2.text := 'Gueliz, Avenue Mohammed V (près du café), Marrakech 40000, Morocco'
!new GeoLocation('MAK_GL2')
!MAK_GL2.latitude := 31.6342
!MAK_GL2.longitude := -8.0089
!insert (MAK_A2, MAK_GL2) into AddressContainsGeoLocation

!new Address('MAK_A3')
!MAK_A3.text := 'Aéroport Marrakech‑Menara (Arrivées / Fret), Marrakech, Morocco'
!new GeoLocation('MAK_GL3')
!MAK_GL3.latitude := 31.6069
!MAK_GL3.longitude := -8.0363
!insert (MAK_A3, MAK_GL3) into AddressContainsGeoLocation

!new Address('MAK_A4')
!MAK_A4.text := 'Bab Doukkala, Marrakech 40000, Morocco'
!new GeoLocation('MAK_GL4')
!MAK_GL4.latitude := 31.6349
!MAK_GL4.longitude := -7.9996
!insert (MAK_A4, MAK_GL4) into AddressContainsGeoLocation

!new Address('MAK_A5')
!MAK_A5.text := 'Route de l’Ourika, Km 12 (point relais), Marrakech-Safi, Morocco'
!new GeoLocation('MAK_GL5')
!MAK_GL5.latitude := 31.5589
!MAK_GL5.longitude := -7.9585
!insert (MAK_A5, MAK_GL5) into AddressContainsGeoLocation

!new Shipment('SHPSP20261001')
!SHPSP20261001.id := 'SHP-SP-2026-1001'
!SHPSP20261001.status := #NEW

!new Shipment('SHPSP20261002')
!SHPSP20261002.id := 'SHP-SP-2026-1002'
!SHPSP20261002.status := #ASSIGNED

!new Shipment('SHPSP20261003')
!SHPSP20261003.id := 'SHP-SP-2026-1003'
!SHPSP20261003.status := #UNDERWAY

!new Shipment('SHPSP20261004')
!SHPSP20261004.id := 'SHP-SP-2026-1004'
!SHPSP20261004.status := #DELIVERED

!new Shipment('SHPSP20261005')
!SHPSP20261005.id := 'SHP-SP-2026-1005'
!SHPSP20261005.status := #ASSIGNED

!new Shipment('SHPSP20261006')
!SHPSP20261006.id := 'SHP-SP-2026-1006'
!SHPSP20261006.status := #NEW

!new Shipment('SHPSP20261007')
!SHPSP20261007.id := 'SHP-SP-2026-1007'
!SHPSP20261007.status := #UNDERWAY

!new Shipment('SHPMAK20262001')
!SHPMAK20262001.id := 'SHP-MAK-2026-2001'
!SHPMAK20262001.status := #DELIVERED

!new Shipment('SHPMAK20262002')
!SHPMAK20262002.id := 'SHP-MAK-2026-2002'
!SHPMAK20262002.status := #ASSIGNED

!new Shipment('SHPMAK20262003')
!SHPMAK20262003.id := 'SHP-MAK-2026-2003'
!SHPMAK20262003.status := #NEW

!insert (SPButantaOps, SHPSP20261001) into StationShipment
!insert (SPButantaOps, SHPSP20261002) into StationShipment
!insert (SPButantaOps, SHPSP20261003) into StationShipment
!insert (SPButantaOps, SHPSP20261004) into StationShipment
!insert (SPButantaOps, SHPSP20261005) into StationShipment
!insert (SPButantaOps, SHPSP20261006) into StationShipment
!insert (SPButantaOps, SHPSP20261007) into StationShipment

!insert (MAKGuelizDepot, SHPMAK20262001) into StationShipment
!insert (MAKGuelizDepot, SHPMAK20262002) into StationShipment
!insert (MAKGuelizDepot, SHPMAK20262003) into StationShipment

!insert (CUSTSP3001, SHPSP20261001) into CustomerConsistsOfShipment
!insert (CUSTSP3002, SHPSP20261002) into CustomerConsistsOfShipment
!insert (CUSTSP3001, SHPSP20261003) into CustomerConsistsOfShipment
!insert (CUSTSP3003, SHPSP20261004) into CustomerConsistsOfShipment
!insert (CUSTSP3003, SHPSP20261005) into CustomerConsistsOfShipment
!insert (CUSTSP3002, SHPSP20261006) into CustomerConsistsOfShipment
!insert (CUSTSP3001, SHPSP20261007) into CustomerConsistsOfShipment

!insert (CUSTMAK4002, SHPMAK20262001) into CustomerConsistsOfShipment
!insert (CUSTMAK4001, SHPMAK20262002) into CustomerConsistsOfShipment
!insert (CUSTMAK4002, SHPMAK20262003) into CustomerConsistsOfShipment

!insert (SHPSP20261001, SPB_A1) into ShipmentContainsPickUpAddress
!insert (SHPSP20261001, SPB_A2) into ShipmentContainsDeliveryAddress

!insert (SHPSP20261002, SPB_A3) into ShipmentContainsPickUpAddress
!insert (SHPSP20261002, SPB_A4) into ShipmentContainsDeliveryAddress

!insert (SHPSP20261003, SPB_A2) into ShipmentContainsPickUpAddress
!insert (SHPSP20261003, SPB_A5) into ShipmentContainsDeliveryAddress

!insert (SHPSP20261004, SPB_A1) into ShipmentContainsPickUpAddress
!insert (SHPSP20261004, SPB_A6) into ShipmentContainsDeliveryAddress

!insert (SHPSP20261005, SPB_A7) into ShipmentContainsPickUpAddress
!insert (SHPSP20261005, SPB_A8) into ShipmentContainsDeliveryAddress

!insert (SHPSP20261006, SPB_A4) into ShipmentContainsPickUpAddress
!insert (SHPSP20261006, SPB_A9) into ShipmentContainsDeliveryAddress

!insert (SHPSP20261007, SPB_A10) into ShipmentContainsPickUpAddress
!insert (SHPSP20261007, SPB_A1) into ShipmentContainsDeliveryAddress

!insert (SHPMAK20262001, MAK_A1) into ShipmentContainsPickUpAddress
!insert (SHPMAK20262001, MAK_A2) into ShipmentContainsDeliveryAddress

!insert (SHPMAK20262002, MAK_A3) into ShipmentContainsPickUpAddress
!insert (SHPMAK20262002, MAK_A4) into ShipmentContainsDeliveryAddress

!insert (SHPMAK20262003, MAK_A2) into ShipmentContainsPickUpAddress
!insert (SHPMAK20262003, MAK_A5) into ShipmentContainsDeliveryAddress

!insert (DRVSP101, SHPSP20261002) into DriverShipment
!insert (DRVSP102, SHPSP20261003) into DriverShipment
!insert (DRVSP103, SHPSP20261004) into DriverShipment
!insert (DRVSP103, SHPSP20261005) into DriverShipment
!insert (DRVSP101, SHPSP20261007) into DriverShipment

!insert (DRVMAK201, SHPMAK20262001) into DriverShipment
!insert (DRVMAK201, SHPMAK20262002) into DriverShipment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 215 | 0.00% |
| Multiplicities Errors | 0 | 72 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 6 | 15 | 40.00% |
| Lat/Lon (out of valid addresses) | 0 | 9 | 0.00% |
| Twitter | 0 | 5 | 0.00% |

| Invalid Addresses | 
|---| 
```
Route de l’Ourika, Km 12 (point relais), Marrakech-Safi, Morocco
```
```
Gueliz, Avenue Mohammed V (près du café), Marrakech 40000, Morocco
```
```
Aéroport Marrakech‑Menara (Arrivées / Fret), Marrakech, Morocco
```
```
TECA Cargas (GRU), Rod. Hélio Smidt, Guarulhos - SP, Brazil
```
```
USP Cidade Universitária, Portaria 1, Butantã, São Paulo - SP, Brazil
```
```
Cidade Tiradentes (Base Comunitária), São Paulo - SP, Brazil
```

## Category edge
```
!new Station('S3_EDGE3')
!new Station('S4_EDGE3')

!new Driver('EDGE3_D20')
!EDGE3_D20.id := 'DRV-EDGE-020'
!EDGE3_D20.name := 'Marta Nowak'

!new Driver('EDGE3_D30')
!EDGE3_D30.id := 'DRV-EDGE-030'
!EDGE3_D30.name := 'Ravi Patel'

!new Driver('EDGE3_D31')
!EDGE3_D31.id := 'DRV-EDGE-031'
!EDGE3_D31.name := 'Léa Dubois'

!insert (S3_EDGE3, EDGE3_D20) into StationContainsDriver
!insert (S4_EDGE3, EDGE3_D30) into StationContainsDriver
!insert (S4_EDGE3, EDGE3_D31) into StationContainsDriver

!new Customer('EDGE3_C20')
!EDGE3_C20.id := 'CUS-EDGE-2001'
!EDGE3_C20.name := 'Chinwe Okafor'
!EDGE3_C20.twitterUserName := '@chinwe_okafor'

!new Customer('EDGE3_C21')
!EDGE3_C21.id := 'CUS-EDGE-2002'
!EDGE3_C21.name := 'Søren Mikkelsen'
!EDGE3_C21.twitterUserName := '@soren_mk'

!insert (S3_EDGE3, EDGE3_C20) into StationContainsCustomer
!insert (S3_EDGE3, EDGE3_C21) into StationContainsCustomer

!new Address('A201')
!A201.text := 'Kenyatta Market, back service gate, Nairobi, Kenya'
!new GeoLocation('GL201')
!GL201.latitude := -1.3032
!GL201.longitude := 36.7859
!insert (A201, GL201) into AddressContainsGeoLocation

!new Address('A202')
!A202.text := 'Kenyatta Market, main entrance, Nairobi, Kenya'
!new GeoLocation('GL202')
!GL202.latitude := -1.3030
!GL202.longitude := 36.7862
!insert (A202, GL202) into AddressContainsGeoLocation

!new Address('A203')
!A203.text := 'Virtual pickup point “Cloud Locker 7” (no physical street address)'
!new GeoLocation('GL203')
!GL203.latitude := 91.5
!GL203.longitude := 181.2
!insert (A203, GL203) into AddressContainsGeoLocation

!new Address('A204')
!A204.text := 'Virtual delivery endpoint “Cloud Locker 8” (no physical street address)'
!new GeoLocation('GL204')
!GL204.latitude := -91.0
!GL204.longitude := -181.0
!insert (A204, GL204) into AddressContainsGeoLocation

!new Address('A205')
!A205.text := 'Unnamed dirt track, “Kilometer 0” marker, roadside pull-off'
!new GeoLocation('GL205')
!GL205.latitude := 0.0
!GL205.longitude := 30.0
!insert (A205, GL205) into AddressContainsGeoLocation

!new Address('A206')
!A206.text := 'Unnamed dirt track, “Kilometer 0” marker, opposite shoulder'
!new GeoLocation('GL206')
!GL206.latitude := 0.0
!GL206.longitude := 30.0001
!insert (A206, GL206) into AddressContainsGeoLocation

!new Address('A207')
!A207.text := 'Nuuk supply shed, Nuuk, Greenland'
!new GeoLocation('GL207')
!GL207.latitude := 64.1835
!GL207.longitude := -51.7216
!insert (A207, GL207) into AddressContainsGeoLocation

!new Address('A208')
!A208.text := 'Frederiksberg parcel desk, Copenhagen, Denmark'
!new GeoLocation('GL208')
!GL208.latitude := 55.6796
!GL208.longitude := 12.5346
!insert (A208, GL208) into AddressContainsGeoLocation

!new Shipment('SHPEDGE2001')
!SHPEDGE2001.id := 'SHP-EDGE-2001'
!SHPEDGE2001.status := #NEW

!new Shipment('SHPEDGE2002')
!SHPEDGE2002.id := 'SHP-EDGE-2002'
!SHPEDGE2002.status := #DELIVERED

!new Shipment('SHPEDGE2003')
!SHPEDGE2003.id := 'SHP-EDGE-2003'
!SHPEDGE2003.status := #UNDERWAY

!new Shipment('SHPEDGE2004')
!SHPEDGE2004.id := 'SHP-EDGE-2004'
!SHPEDGE2004.status := #ASSIGNED

!new Shipment('SHPEDGE2005')
!SHPEDGE2005.id := 'SHP-EDGE-2005'
!SHPEDGE2005.status := #ASSIGNED

!insert (S4_EDGE3, SHPEDGE2001) into StationShipment
!insert (S4_EDGE3, SHPEDGE2002) into StationShipment
!insert (S4_EDGE3, SHPEDGE2003) into StationShipment
!insert (S4_EDGE3, SHPEDGE2004) into StationShipment
!insert (S3_EDGE3, SHPEDGE2005) into StationShipment

!insert (EDGE3_C20, SHPEDGE2001) into CustomerConsistsOfShipment
!insert (EDGE3_C20, SHPEDGE2002) into CustomerConsistsOfShipment
!insert (EDGE3_C20, SHPEDGE2003) into CustomerConsistsOfShipment
!insert (EDGE3_C20, SHPEDGE2004) into CustomerConsistsOfShipment
!insert (EDGE3_C21, SHPEDGE2005) into CustomerConsistsOfShipment

!insert (SHPEDGE2001, A201) into ShipmentContainsPickUpAddress
!insert (SHPEDGE2001, A202) into ShipmentContainsDeliveryAddress

!insert (SHPEDGE2002, A202) into ShipmentContainsPickUpAddress
!insert (SHPEDGE2002, A201) into ShipmentContainsDeliveryAddress

!insert (SHPEDGE2003, A203) into ShipmentContainsPickUpAddress
!insert (SHPEDGE2003, A204) into ShipmentContainsDeliveryAddress

!insert (SHPEDGE2004, A205) into ShipmentContainsPickUpAddress
!insert (SHPEDGE2004, A206) into ShipmentContainsDeliveryAddress

!insert (SHPEDGE2005, A207) into ShipmentContainsPickUpAddress
!insert (SHPEDGE2005, A208) into ShipmentContainsDeliveryAddress

!insert (EDGE3_D30, SHPEDGE2001) into DriverShipment
!insert (EDGE3_D30, SHPEDGE2002) into DriverShipment
!insert (EDGE3_D31, SHPEDGE2004) into DriverShipment
!insert (EDGE3_D20, SHPEDGE2005) into DriverShipment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 111 | 0.00% |
| Multiplicities Errors | 0 | 37 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 7 | 8 | 87.50% |
| Lat/Lon (out of valid addresses) | 0 | 1 | 0.00% |
| Twitter | 0 | 2 | 0.00% |

| Invalid Addresses | 
|---| 
```
Frederiksberg parcel desk, Copenhagen, Denmark
```
```
Unnamed dirt track, “Kilometer 0” marker, roadside pull-off
```
```
Unnamed dirt track, “Kilometer 0” marker, opposite shoulder
```
```
Virtual pickup point “Cloud Locker 7” (no physical street address)
```
```
Virtual delivery endpoint “Cloud Locker 8” (no physical street address)
```
```
Kenyatta Market, back service gate, Nairobi, Kenya
```
```
Kenyatta Market, main entrance, Nairobi, Kenya
```

## Category invalid
```
!new Station('SCLURB')

!new Driver('DCL11')
!DCL11.id := 'D-CL-11'
!DCL11.name := 'Valentina Rojas'

!new Driver('DCL44')
!DCL44.id := 'D-CL-44'
!DCL44.name := 'Matías González'

!insert (SCLURB, DCL11) into StationContainsDriver
!insert (SCLURB, DCL44) into StationContainsDriver

!new Customer('CCL310')
!CCL310.id := 'C-CL-310'
!CCL310.name := 'Antü Leftraru'
!CCL310.twitterUserName := '@antu_hechoamano'

!new Customer('CCL502')
!CCL502.id := 'C-CL-502'
!CCL502.name := 'Camila Fernández'
!CCL502.twitterUserName := '@cami_fernandez'

!insert (SCLURB, CCL310) into StationContainsCustomer
!insert (SCLURB, CCL502) into StationContainsCustomer

!new Address('ASCLPICK01')
!ASCLPICK01.text := 'Barrio Italia, Av. Italia 1150, Providencia, Santiago, Chile'
!new GeoLocation('GLSCLITALIA')
!GLSCLITALIA.latitude := -33.4449
!GLSCLITALIA.longitude := -70.6273
!insert (ASCLPICK01, GLSCLITALIA) into AddressContainsGeoLocation

!new Address('ASCLDEL01')
!ASCLDEL01.text := 'Edificio Mirador, Torre A, Depto. 1204, Av. Irarrázaval 3200, Ñuñoa, Santiago, Chile'
!new GeoLocation('GLSCLIRRAZAPT')
!GLSCLIRRAZAPT.latitude := -33.4562
!GLSCLIRRAZAPT.longitude := -70.5969
!insert (ASCLDEL01, GLSCLIRRAZAPT) into AddressContainsGeoLocation

!new Address('ASCLDEL02')
!ASCLDEL02.text := 'Edificio Mirador, Conserjería (lobby), Av. Irarrázaval 3200, Ñuñoa, Santiago, Chile'
!new GeoLocation('GLSCLIRRAZLOBBY')
!GLSCLIRRAZLOBBY.latitude := -33.4561
!GLSCLIRRAZLOBBY.longitude := -70.5971
!insert (ASCLDEL02, GLSCLIRRAZLOBBY) into AddressContainsGeoLocation

!new Address('ASCLPICK02')
!ASCLPICK02.text := 'Mercado Central de Santiago, San Pablo 967, Santiago Centro, Chile'
!new GeoLocation('GLSCLMERCADOF')
!GLSCLMERCADOF.latitude := -33.4367
!GLSCLMERCADOF.longitude := -70.6503
!new GeoLocation('GLSCLMERCADOL')
!GLSCLMERCADOL.latitude := -33.4370
!GLSCLMERCADOL.longitude := -70.6506
!insert (ASCLPICK02, GLSCLMERCADOF) into AddressContainsGeoLocation
!insert (ASCLPICK02, GLSCLMERCADOL) into AddressContainsGeoLocation

!new Address('ASCLDEL03')
!ASCLDEL03.text := 'Av. Apoquindo 4900, Las Condes, Santiago, Chile'
!new GeoLocation('GLSCLAPOQUINDO')
!GLSCLAPOQUINDO.latitude := -33.4096
!GLSCLAPOQUINDO.longitude := -70.5664
!insert (ASCLDEL03, GLSCLAPOQUINDO) into AddressContainsGeoLocation

!new Shipment('SHPCL9002')
!SHPCL9002.id := 'SHP-CL-9002'
!SHPCL9002.status := #ASSIGNED

!new Shipment('SHPCL9010')
!SHPCL9010.id := 'SHP-CL-9010'
!SHPCL9010.status := #UNDERWAY

!insert (SCLURB, SHPCL9002) into StationShipment
!insert (SCLURB, SHPCL9010) into StationShipment

!insert (CCL310, SHPCL9002) into CustomerConsistsOfShipment
!insert (CCL502, SHPCL9010) into CustomerConsistsOfShipment

!insert (SHPCL9002, ASCLPICK01) into ShipmentContainsPickUpAddress
!insert (SHPCL9002, ASCLDEL01) into ShipmentContainsDeliveryAddress
!insert (SHPCL9002, ASCLDEL02) into ShipmentContainsDeliveryAddress
!insert (DCL11, SHPCL9002) into DriverShipment

!insert (SHPCL9010, ASCLPICK02) into ShipmentContainsPickUpAddress
!insert (SHPCL9010, ASCLDEL03) into ShipmentContainsDeliveryAddress
!insert (DCL44, SHPCL9010) into DriverShipment
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 2 | 21 | 9.52% |
| Invariants Errors (Not included on General) | 0 | 4 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `ShipmentContainsDeliveryAddress':
  Object `SHPCL9002' of class `Shipment' is connected to 2 objects of class `Address'
  at association end `shipToAddress' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `AddressContainsGeoLocation':
  Object `ASCLPICK02' of class `Address' is connected to 2 objects of class `GeoLocation'
  at association end `geoLocation' but the multiplicity is specified as `1'.
```

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 1 | 5 | 20.00% |
| Lat/Lon (out of valid addresses) | 0 | 4 | 0.00% |
| Twitter | 0 | 2 | 0.00% |

| Invalid Addresses | 
|---| 
```
Mercado Central de Santiago, San Pablo 967, Santiago Centro, Chile
```

## Generation 3 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 601 | 0.00% |
| Multiplicities Errors | 0 | 184 | 0.00% |
| Invariants Errors | 0 | 16 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 2 | 21 | 9.52% |
| Invariants Errors (Not included on General) | 0 | 4 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `ShipmentContainsDeliveryAddress':
  Object `SHPCL9002' of class `Shipment' is connected to 2 objects of class `Address'
  at association end `shipToAddress' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `AddressContainsGeoLocation':
  Object `ASCLPICK02' of class `Address' is connected to 2 objects of class `GeoLocation'
  at association end `geoLocation' but the multiplicity is specified as `1'.
```

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 24 | 40 | 60.00% |
| Lat/Lon (out of valid addresses) | 0 | 16 | 0.00% |
| Twitter | 1 | 13 | 7.69% |

| Invalid Addresses | 
|---| 
```
Kariobangi North, near the Kenya Power offices, Nairobi, Kenya
```
```
Jomo Kenyatta International Airport (JKIA), Arrivals, Nairobi, Kenya
```
```
Greenhouse Mall, Ngong Road, Nairobi, Kenya
```
```
Papeete Ferry Terminal, Tahiti, French Polynesia
```
```
Tiksi Port, Sakha Republic, Russia (Arctic coast)
```
```
Nuuk Airport Cargo Gate, Nuuk, Greenland
```
```
Blue Port Consolidation Hub, Port of Rotterdam, Netherlands
```
```
Chatham Islands Wharf, Waitangi, New Zealand (near the Date Line)
```
```
Hanga Roa Airfield Cargo Shed, Rapa Nui (Easter Island), Chile
```
```
Longyearbyen Logistics Yard, Svalbard, Norway
```
```
Route de l’Ourika, Km 12 (point relais), Marrakech-Safi, Morocco
```
```
Gueliz, Avenue Mohammed V (près du café), Marrakech 40000, Morocco
```
```
Aéroport Marrakech‑Menara (Arrivées / Fret), Marrakech, Morocco
```
```
TECA Cargas (GRU), Rod. Hélio Smidt, Guarulhos - SP, Brazil
```
```
USP Cidade Universitária, Portaria 1, Butantã, São Paulo - SP, Brazil
```
```
Cidade Tiradentes (Base Comunitária), São Paulo - SP, Brazil
```
```
Frederiksberg parcel desk, Copenhagen, Denmark
```
```
Unnamed dirt track, “Kilometer 0” marker, roadside pull-off
```
```
Unnamed dirt track, “Kilometer 0” marker, opposite shoulder
```
```
Virtual pickup point “Cloud Locker 7” (no physical street address)
```
```
Virtual delivery endpoint “Cloud Locker 8” (no physical street address)
```
```
Kenyatta Market, back service gate, Nairobi, Kenya
```
```
Kenyatta Market, main entrance, Nairobi, Kenya
```
```
Mercado Central de Santiago, San Pablo 967, Santiago Centro, Chile
```

| Invalid Twitters | 
|---| 
```
@dfernandez_travel
```

# Generation 4
## Category baseline
```
!new Station('S5SP')

!new Driver('D5501')
!D5501.id := 'D-5501'
!D5501.name := 'João Pedro Silva'

!new Driver('D5502')
!D5502.id := 'D-5502'
!D5502.name := 'Mariana Costa'

!new Driver('D5503')
!D5503.id := 'D-5503'
!D5503.name := 'Rafael Almeida'

!insert (S5SP, D5501) into StationContainsDriver
!insert (S5SP, D5502) into StationContainsDriver
!insert (S5SP, D5503) into StationContainsDriver

!new Customer('C9501')
!C9501.id := 'C-9501'
!C9501.name := 'Ana Paula Rodrigues'
!C9501.twitterUserName := '@anapaularod'

!new Customer('C9502')
!C9502.id := 'C-9502'
!C9502.name := 'Mateus Ferreira'
!C9502.twitterUserName := '@mateusferreira_sp'

!insert (S5SP, C9501) into StationContainsCustomer
!insert (S5SP, C9502) into StationContainsCustomer

!new Address('ASPWH1')
!ASPWH1.text := 'Centro de Distribuição, Av. dos Autonomistas 1200, Osasco - SP, 06020-010, Brasil'
!new GeoLocation('GLSP1')
!GLSP1.latitude := -23.5326
!GLSP1.longitude := -46.7927
!insert (ASPWH1, GLSP1) into AddressContainsGeoLocation

!new Address('ASPLOCK1')
!ASPLOCK1.text := 'Armários de Retirada, Estação Luz, Praça da Luz s/n, São Paulo - SP, 01120-010, Brasil'
!new GeoLocation('GLSP2')
!GLSP2.latitude := -23.5362
!GLSP2.longitude := -46.6334
!insert (ASPLOCK1, GLSP2) into AddressContainsGeoLocation

!new Address('ASPAPT1')
!ASPAPT1.text := 'Rua Harmonia 321, Vila Madalena, São Paulo - SP, 05435-000, Brasil'
!new GeoLocation('GLSP3')
!GLSP3.latitude := -23.5520
!GLSP3.longitude := -46.6900
!insert (ASPAPT1, GLSP3) into AddressContainsGeoLocation

!new Address('ASPSTORE1')
!ASPSTORE1.text := 'Livraria Centro, Av. Paulista 900, Bela Vista, São Paulo - SP, 01310-100, Brasil'
!new GeoLocation('GLSP4')
!GLSP4.latitude := -23.5649
!GLSP4.longitude := -46.6516
!insert (ASPSTORE1, GLSP4) into AddressContainsGeoLocation

!new Shipment('SH120001')
!SH120001.id := 'SH-120001'
!SH120001.status := #ASSIGNED

!new Shipment('SH120002')
!SH120002.id := 'SH-120002'
!SH120002.status := #UNDERWAY

!new Shipment('SH120003')
!SH120003.id := 'SH-120003'
!SH120003.status := #DELIVERED

!insert (S5SP, SH120001) into StationShipment
!insert (S5SP, SH120002) into StationShipment
!insert (S5SP, SH120003) into StationShipment

!insert (C9501, SH120001) into CustomerConsistsOfShipment
!insert (C9501, SH120002) into CustomerConsistsOfShipment
!insert (C9502, SH120003) into CustomerConsistsOfShipment

!insert (SH120001, ASPWH1) into ShipmentContainsPickUpAddress
!insert (SH120001, ASPLOCK1) into ShipmentContainsDeliveryAddress
!insert (D5501, SH120001) into DriverShipment

!insert (SH120002, ASPWH1) into ShipmentContainsPickUpAddress
!insert (SH120002, ASPAPT1) into ShipmentContainsDeliveryAddress
!insert (D5502, SH120002) into DriverShipment

!insert (SH120003, ASPSTORE1) into ShipmentContainsPickUpAddress
!insert (SH120003, ASPLOCK1) into ShipmentContainsDeliveryAddress
!insert (D5501, SH120003) into DriverShipment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 71 | 0.00% |
| Multiplicities Errors | 0 | 24 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 1 | 4 | 25.00% |
| Lat/Lon (out of valid addresses) | 0 | 3 | 0.00% |
| Twitter | 1 | 2 | 50.00% |

| Invalid Addresses | 
|---| 
```
Armários de Retirada, Estação Luz, Praça da Luz s/n, São Paulo - SP, 01120-010, Brasil
```

| Invalid Twitters | 
|---| 
```
@mateusferreira_sp
```

## Category boundary
```
!new Station('S4')
!new Station('S5')

!new Driver('DRV900')
!DRV900.id := 'DRV-900'
!DRV900.name := 'Ólafur Jónsson'
!insert (S5, DRV900) into StationContainsDriver

!new Customer('CUST9001')
!CUST9001.id := 'CUST-9001'
!CUST9001.name := 'Mereana Rangi'
!CUST9001.twitterUserName := '@mereana_rangi'
!insert (S5, CUST9001) into StationContainsCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 11 | 0.00% |
| Multiplicities Errors | 0 | 2 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 0 | 0 | 0.00% |
| Lat/Lon (out of valid addresses) | 0 | 0 | 0.00% |
| Twitter | 0 | 1 | 0.00% |

## Category complex
```
!new Station('DELNCRAgriHub')

!new Driver('DRVDEL501')
!DRVDEL501.id := 'DRV-DEL-501'
!DRVDEL501.name := 'Rohit Sharma'

!new Driver('DRVDEL502')
!DRVDEL502.id := 'DRV-DEL-502'
!DRVDEL502.name := 'Sana Khan'

!new Driver('DRVDEL503')
!DRVDEL503.id := 'DRV-DEL-503'
!DRVDEL503.name := 'Gurpreet Singh'

!new Driver('DRVDEL504')
!DRVDEL504.id := 'DRV-DEL-504'
!DRVDEL504.name := 'Deepa Iyer'

!new Driver('DRVDEL505')
!DRVDEL505.id := 'DRV-DEL-505'
!DRVDEL505.name := 'Arjun Mehta'

!insert (DELNCRAgriHub, DRVDEL501) into StationContainsDriver
!insert (DELNCRAgriHub, DRVDEL502) into StationContainsDriver
!insert (DELNCRAgriHub, DRVDEL503) into StationContainsDriver
!insert (DELNCRAgriHub, DRVDEL504) into StationContainsDriver
!insert (DELNCRAgriHub, DRVDEL505) into StationContainsDriver

!new Customer('CUSTDEL7001')
!CUSTDEL7001.id := 'CUST-DEL-7001'
!CUSTDEL7001.name := 'NCR FreshMart Pvt. Ltd.'
!CUSTDEL7001.twitterUserName := '@NCRFreshMart'

!new Customer('CUSTDEL7002')
!CUSTDEL7002.id := 'CUST-DEL-7002'
!CUSTDEL7002.name := 'Priya Verma'
!CUSTDEL7002.twitterUserName := '@priyaverma_del'

!insert (DELNCRAgriHub, CUSTDEL7001) into StationContainsCustomer
!insert (DELNCRAgriHub, CUSTDEL7002) into StationContainsCustomer

!new Address('DELA1')
!DELA1.text := 'आज़ादपुर मंडी, गेट नं. 2 (Azadpur Mandi Gate 2), New Delhi, Delhi 110033, India'
!new GeoLocation('DELGL1')
!DELGL1.latitude := 28.7077
!DELGL1.longitude := 77.1769
!insert (DELA1, DELGL1) into AddressContainsGeoLocation

!new Address('DELA2')
!DELA2.text := 'Narela Cold Chain Warehouse, Sector A-9, Narela, Delhi 110040, India'
!new GeoLocation('DELGL2')
!DELGL2.latitude := 28.8546
!DELGL2.longitude := 77.0898
!insert (DELA2, DELGL2) into AddressContainsGeoLocation

!new Address('DELA3')
!DELA3.text := 'AIIMS New Delhi – Logistics Dock, Sri Aurobindo Marg, New Delhi 110029, India'
!new GeoLocation('DELGL3')
!DELGL3.latitude := 28.5672
!DELGL3.longitude := 77.2100
!insert (DELA3, DELGL3) into AddressContainsGeoLocation

!new Address('DELA4')
!DELA4.text := 'Safdarjung Hospital – Stores Gate, Ansari Nagar West, New Delhi 110029, India'
!new GeoLocation('DELGL4')
!DELGL4.latitude := 28.5686
!DELGL4.longitude := 77.2048
!insert (DELA4, DELGL4) into AddressContainsGeoLocation

!new Address('DELA5')
!DELA5.text := 'Indira Gandhi International Airport (IGI) – Cargo Terminal, New Delhi 110037, India'
!new GeoLocation('DELGL5')
!DELGL5.latitude := 28.5562
!DELGL5.longitude := 77.1000
!insert (DELA5, DELGL5) into AddressContainsGeoLocation

!new Address('DELA6')
!DELA6.text := 'Gurugram Sector 29 Market, Gurugram, Haryana 122001, India'
!new GeoLocation('DELGL6')
!DELGL6.latitude := 28.4676
!DELGL6.longitude := 77.0643
!insert (DELA6, DELGL6) into AddressContainsGeoLocation

!new Address('DELA7')
!DELA7.text := 'Noida Sector 18 Metro Exit (Pickup Point), Noida, Uttar Pradesh 201301, India'
!new GeoLocation('DELGL7')
!DELGL7.latitude := 28.5708
!DELGL7.longitude := 77.3261
!insert (DELA7, DELGL7) into AddressContainsGeoLocation

!new Address('DELA8')
!DELA8.text := 'Ghaziabad New Bus Adda (Service Road), Ghaziabad, Uttar Pradesh 201001, India'
!new GeoLocation('DELGL8')
!DELGL8.latitude := 28.6692
!DELGL8.longitude := 77.4317
!insert (DELA8, DELGL8) into AddressContainsGeoLocation

!new Address('DELA9')
!DELA9.text := 'Connaught Place (CP), Inner Circle, New Delhi 110001, India'
!new GeoLocation('DELGL9')
!DELGL9.latitude := 28.6315
!DELGL9.longitude := 77.2167
!insert (DELA9, DELGL9) into AddressContainsGeoLocation

!new Address('DELA10')
!DELA10.text := 'Okhla Phase II – Small Business Cluster, New Delhi 110020, India'
!new GeoLocation('DELGL10')
!DELGL10.latitude := 28.5340
!DELGL10.longitude := 77.2750
!insert (DELA10, DELGL10) into AddressContainsGeoLocation

!new Address('DELA11')
!DELA11.text := 'Ghazipur Mandi, NH-24, Delhi 110096, India'
!new GeoLocation('DELGL11')
!DELGL11.latitude := 28.6245
!DELGL11.longitude := 77.3159
!insert (DELA11, DELGL11) into AddressContainsGeoLocation

!new Shipment('SHPDEL3001')
!SHPDEL3001.id := 'SHP-DEL-2026-3001'
!SHPDEL3001.status := #NEW

!new Shipment('SHPDEL3002')
!SHPDEL3002.id := 'SHP-DEL-2026-3002'
!SHPDEL3002.status := #ASSIGNED

!new Shipment('SHPDEL3003')
!SHPDEL3003.id := 'SHP-DEL-2026-3003'
!SHPDEL3003.status := #UNDERWAY

!new Shipment('SHPDEL3004')
!SHPDEL3004.id := 'SHP-DEL-2026-3004'
!SHPDEL3004.status := #DELIVERED

!new Shipment('SHPDEL3005')
!SHPDEL3005.id := 'SHP-DEL-2026-3005'
!SHPDEL3005.status := #ASSIGNED

!new Shipment('SHPDEL3006')
!SHPDEL3006.id := 'SHP-DEL-2026-3006'
!SHPDEL3006.status := #UNDERWAY

!new Shipment('SHPDEL3007')
!SHPDEL3007.id := 'SHP-DEL-2026-3007'
!SHPDEL3007.status := #DELIVERED

!new Shipment('SHPDEL3008')
!SHPDEL3008.id := 'SHP-DEL-2026-3008'
!SHPDEL3008.status := #ASSIGNED

!new Shipment('SHPDEL3009')
!SHPDEL3009.id := 'SHP-DEL-2026-3009'
!SHPDEL3009.status := #NEW

!new Shipment('SHPDEL3010')
!SHPDEL3010.id := 'SHP-DEL-2026-3010'
!SHPDEL3010.status := #DELIVERED

!new Shipment('SHPDEL3011')
!SHPDEL3011.id := 'SHP-DEL-2026-3011'
!SHPDEL3011.status := #UNDERWAY

!new Shipment('SHPDEL3012')
!SHPDEL3012.id := 'SHP-DEL-2026-3012'
!SHPDEL3012.status := #ASSIGNED

!insert (DELNCRAgriHub, SHPDEL3001) into StationShipment
!insert (DELNCRAgriHub, SHPDEL3002) into StationShipment
!insert (DELNCRAgriHub, SHPDEL3003) into StationShipment
!insert (DELNCRAgriHub, SHPDEL3004) into StationShipment
!insert (DELNCRAgriHub, SHPDEL3005) into StationShipment
!insert (DELNCRAgriHub, SHPDEL3006) into StationShipment
!insert (DELNCRAgriHub, SHPDEL3007) into StationShipment
!insert (DELNCRAgriHub, SHPDEL3008) into StationShipment
!insert (DELNCRAgriHub, SHPDEL3009) into StationShipment
!insert (DELNCRAgriHub, SHPDEL3010) into StationShipment
!insert (DELNCRAgriHub, SHPDEL3011) into StationShipment
!insert (DELNCRAgriHub, SHPDEL3012) into StationShipment

!insert (CUSTDEL7001, SHPDEL3001) into CustomerConsistsOfShipment
!insert (CUSTDEL7001, SHPDEL3002) into CustomerConsistsOfShipment
!insert (CUSTDEL7001, SHPDEL3003) into CustomerConsistsOfShipment
!insert (CUSTDEL7001, SHPDEL3004) into CustomerConsistsOfShipment
!insert (CUSTDEL7001, SHPDEL3005) into CustomerConsistsOfShipment
!insert (CUSTDEL7001, SHPDEL3006) into CustomerConsistsOfShipment
!insert (CUSTDEL7001, SHPDEL3007) into CustomerConsistsOfShipment
!insert (CUSTDEL7001, SHPDEL3008) into CustomerConsistsOfShipment
!insert (CUSTDEL7001, SHPDEL3009) into CustomerConsistsOfShipment
!insert (CUSTDEL7001, SHPDEL3010) into CustomerConsistsOfShipment
!insert (CUSTDEL7001, SHPDEL3011) into CustomerConsistsOfShipment

!insert (CUSTDEL7002, SHPDEL3012) into CustomerConsistsOfShipment

!insert (SHPDEL3001, DELA1) into ShipmentContainsPickUpAddress
!insert (SHPDEL3001, DELA2) into ShipmentContainsDeliveryAddress

!insert (SHPDEL3002, DELA2) into ShipmentContainsPickUpAddress
!insert (SHPDEL3002, DELA6) into ShipmentContainsDeliveryAddress
!insert (DRVDEL501, SHPDEL3002) into DriverShipment

!insert (SHPDEL3003, DELA2) into ShipmentContainsPickUpAddress
!insert (SHPDEL3003, DELA7) into ShipmentContainsDeliveryAddress
!insert (DRVDEL502, SHPDEL3003) into DriverShipment

!insert (SHPDEL3004, DELA5) into ShipmentContainsPickUpAddress
!insert (SHPDEL3004, DELA2) into ShipmentContainsDeliveryAddress
!insert (DRVDEL503, SHPDEL3004) into DriverShipment

!insert (SHPDEL3005, DELA1) into ShipmentContainsPickUpAddress
!insert (SHPDEL3005, DELA10) into ShipmentContainsDeliveryAddress
!insert (DRVDEL504, SHPDEL3005) into DriverShipment

!insert (SHPDEL3006, DELA11) into ShipmentContainsPickUpAddress
!insert (SHPDEL3006, DELA2) into ShipmentContainsDeliveryAddress
!insert (DRVDEL501, SHPDEL3006) into DriverShipment

!insert (SHPDEL3007, DELA1) into ShipmentContainsPickUpAddress
!insert (SHPDEL3007, DELA8) into ShipmentContainsDeliveryAddress
!insert (DRVDEL502, SHPDEL3007) into DriverShipment

!insert (SHPDEL3008, DELA2) into ShipmentContainsPickUpAddress
!insert (SHPDEL3008, DELA9) into ShipmentContainsDeliveryAddress
!insert (DRVDEL503, SHPDEL3008) into DriverShipment

!insert (SHPDEL3009, DELA1) into ShipmentContainsPickUpAddress
!insert (SHPDEL3009, DELA6) into ShipmentContainsDeliveryAddress

!insert (SHPDEL3010, DELA2) into ShipmentContainsPickUpAddress
!insert (SHPDEL3010, DELA3) into ShipmentContainsDeliveryAddress
!insert (DRVDEL501, SHPDEL3010) into DriverShipment

!insert (SHPDEL3011, DELA2) into ShipmentContainsPickUpAddress
!insert (SHPDEL3011, DELA4) into ShipmentContainsDeliveryAddress
!insert (DRVDEL502, SHPDEL3011) into DriverShipment

!insert (SHPDEL3012, DELA9) into ShipmentContainsPickUpAddress
!insert (SHPDEL3012, DELA7) into ShipmentContainsDeliveryAddress
!insert (DRVDEL503, SHPDEL3012) into DriverShipment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 191 | 0.00% |
| Multiplicities Errors | 0 | 76 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 10 | 11 | 90.91% |
| Lat/Lon (out of valid addresses) | 0 | 1 | 0.00% |
| Twitter | 0 | 2 | 0.00% |

| Invalid Addresses | 
|---| 
```
Safdarjung Hospital – Stores Gate, Ansari Nagar West, New Delhi 110029, India
```
```
Indira Gandhi International Airport (IGI) – Cargo Terminal, New Delhi 110037, India
```
```
Narela Cold Chain Warehouse, Sector A-9, Narela, Delhi 110040, India
```
```
AIIMS New Delhi – Logistics Dock, Sri Aurobindo Marg, New Delhi 110029, India
```
```
आज़ादपुर मंडी, गेट नं. 2 (Azadpur Mandi Gate 2), New Delhi, Delhi 110033, India
```
```
Ghaziabad New Bus Adda (Service Road), Ghaziabad, Uttar Pradesh 201001, India
```
```
Okhla Phase II – Small Business Cluster, New Delhi 110020, India
```
```
Connaught Place (CP), Inner Circle, New Delhi 110001, India
```
```
Gurugram Sector 29 Market, Gurugram, Haryana 122001, India
```
```
Noida Sector 18 Metro Exit (Pickup Point), Noida, Uttar Pradesh 201301, India
```

## Category edge
```
!new Station('S5_HUBOPS_EDGE4')
!new Station('S6_CUSTONLY_EDGE4')
!new Station('S7_CUSTONLY_EDGE4')

!new Driver('EDGE4_D50')
!EDGE4_D50.id := 'DRV-EDGE-050'
!EDGE4_D50.name := 'Samir Haddad'

!new Driver('EDGE4_D51')
!EDGE4_D51.id := 'DRV-EDGE-051'
!EDGE4_D51.name := 'Samir Haddad'

!new Driver('EDGE4_D52')
!EDGE4_D52.id := 'DRV-EDGE-052'
!EDGE4_D52.name := 'Inés Fernández'

!insert (S5_HUBOPS_EDGE4, EDGE4_D50) into StationContainsDriver
!insert (S5_HUBOPS_EDGE4, EDGE4_D51) into StationContainsDriver
!insert (S5_HUBOPS_EDGE4, EDGE4_D52) into StationContainsDriver

!new Customer('EDGE4_C30')
!EDGE4_C30.id := 'CUS-EDGE-3001'
!EDGE4_C30.name := 'Xóchitl Hernández'
!EDGE4_C30.twitterUserName := '@xochitl_oax'

!new Customer('EDGE4_C31')
!EDGE4_C31.id := 'CUS-EDGE-3002'
!EDGE4_C31.name := 'Nguyễn Hữu An'
!EDGE4_C31.twitterUserName := '@an_nguyen_vn'

!new Customer('EDGE4_C32')
!EDGE4_C32.id := 'CUS-EDGE-3003'
!EDGE4_C32.name := 'Bryndís Jónsdóttir'
!EDGE4_C32.twitterUserName := '@bryndis_is'

!insert (S6_CUSTONLY_EDGE4, EDGE4_C30) into StationContainsCustomer
!insert (S6_CUSTONLY_EDGE4, EDGE4_C31) into StationContainsCustomer
!insert (S7_CUSTONLY_EDGE4, EDGE4_C32) into StationContainsCustomer

!new Address('EDGE4_A301')
!EDGE4_A301.text := 'Side door (no signage), Calle de Bolívar, Centro Histórico, Ciudad de México, México'
!new GeoLocation('EDGE4_GL301')
!EDGE4_GL301.latitude := 19.4326077
!EDGE4_GL301.longitude := -99.1332080
!insert (EDGE4_A301, EDGE4_GL301) into AddressContainsGeoLocation

!new Address('EDGE4_A302')
!EDGE4_A302.text := 'PO Box 0 (general delivery), Reykjavík 101, Iceland'
!new GeoLocation('EDGE4_GL302')
!EDGE4_GL302.latitude := 64.1465820
!EDGE4_GL302.longitude := -21.9426354
!insert (EDGE4_A302, EDGE4_GL302) into AddressContainsGeoLocation

!new Address('EDGE4_A303')
!EDGE4_A303.text := ''
!new GeoLocation('EDGE4_GL303')
!EDGE4_GL303.latitude := -0.0
!EDGE4_GL303.longitude := 0.0
!insert (EDGE4_A303, EDGE4_GL303) into AddressContainsGeoLocation

!new Address('EDGE4_A304')
!EDGE4_A304.text := 'Ridge trail marker “7A”, Sơn Đoòng perimeter staging area, Quảng Bình, Việt Nam'
!new GeoLocation('EDGE4_GL304')
!EDGE4_GL304.latitude := 17.452389123456
!EDGE4_GL304.longitude := 106.287441654321
!insert (EDGE4_A304, EDGE4_GL304) into AddressContainsGeoLocation

!new Shipment('EDGE4_SHP3001')
!EDGE4_SHP3001.id := 'SHP-EDGE-3001'
!EDGE4_SHP3001.status := #NEW

!new Shipment('EDGE4_SHP3002')
!EDGE4_SHP3002.id := 'SHP-EDGE-3002'
!EDGE4_SHP3002.status := #UNDERWAY

!new Shipment('EDGE4_SHP3003')
!EDGE4_SHP3003.id := 'SHP-EDGE-3003'
!EDGE4_SHP3003.status := #DELIVERED

!new Shipment('EDGE4_SHP3004')
!EDGE4_SHP3004.id := 'SHP-EDGE-3004'
!EDGE4_SHP3004.status := #ASSIGNED

!new Shipment('EDGE4_SHP3005')
!EDGE4_SHP3005.id := 'SHP-EDGE-3005'
!EDGE4_SHP3005.status := #DELIVERED

!new Shipment('EDGE4_SHP3006')
!EDGE4_SHP3006.id := 'SHP-EDGE-3006'
!EDGE4_SHP3006.status := #NEW

!insert (S5_HUBOPS_EDGE4, EDGE4_SHP3001) into StationShipment
!insert (S5_HUBOPS_EDGE4, EDGE4_SHP3002) into StationShipment
!insert (S5_HUBOPS_EDGE4, EDGE4_SHP3003) into StationShipment
!insert (S5_HUBOPS_EDGE4, EDGE4_SHP3004) into StationShipment
!insert (S5_HUBOPS_EDGE4, EDGE4_SHP3005) into StationShipment
!insert (S5_HUBOPS_EDGE4, EDGE4_SHP3006) into StationShipment

!insert (EDGE4_C30, EDGE4_SHP3001) into CustomerConsistsOfShipment
!insert (EDGE4_C30, EDGE4_SHP3002) into CustomerConsistsOfShipment
!insert (EDGE4_C31, EDGE4_SHP3003) into CustomerConsistsOfShipment
!insert (EDGE4_C31, EDGE4_SHP3004) into CustomerConsistsOfShipment
!insert (EDGE4_C32, EDGE4_SHP3005) into CustomerConsistsOfShipment
!insert (EDGE4_C32, EDGE4_SHP3006) into CustomerConsistsOfShipment

!insert (EDGE4_SHP3001, EDGE4_A301) into ShipmentContainsPickUpAddress
!insert (EDGE4_SHP3001, EDGE4_A302) into ShipmentContainsDeliveryAddress
!insert (EDGE4_D50, EDGE4_SHP3001) into DriverShipment

!insert (EDGE4_SHP3002, EDGE4_A301) into ShipmentContainsPickUpAddress
!insert (EDGE4_SHP3002, EDGE4_A302) into ShipmentContainsDeliveryAddress
!insert (EDGE4_D50, EDGE4_SHP3002) into DriverShipment

!insert (EDGE4_SHP3003, EDGE4_A301) into ShipmentContainsPickUpAddress
!insert (EDGE4_SHP3003, EDGE4_A303) into ShipmentContainsDeliveryAddress
!insert (EDGE4_D50, EDGE4_SHP3003) into DriverShipment

!insert (EDGE4_SHP3004, EDGE4_A303) into ShipmentContainsPickUpAddress
!insert (EDGE4_SHP3004, EDGE4_A302) into ShipmentContainsDeliveryAddress

!insert (EDGE4_SHP3005, EDGE4_A304) into ShipmentContainsPickUpAddress
!insert (EDGE4_SHP3005, EDGE4_A302) into ShipmentContainsDeliveryAddress
!insert (EDGE4_D52, EDGE4_SHP3005) into DriverShipment

!insert (EDGE4_SHP3006, EDGE4_A302) into ShipmentContainsPickUpAddress
!insert (EDGE4_SHP3006, EDGE4_A301) into ShipmentContainsDeliveryAddress
!insert (EDGE4_D50, EDGE4_SHP3006) into DriverShipment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 101 | 0.00% |
| Multiplicities Errors | 0 | 39 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 4 | 4 | 100.00% |
| Lat/Lon (out of valid addresses) | 0 | 0 | 0.00% |
| Twitter | 0 | 3 | 0.00% |

| Invalid Addresses | 
|---| 
```
Ridge trail marker “7A”, Sơn Đoòng perimeter staging area, Quảng Bình, Việt Nam
```
```

```
```
PO Box 0 (general delivery), Reykjavík 101, Iceland
```
```
Side door (no signage), Calle de Bolívar, Centro Histórico, Ciudad de México, México
```

## Category invalid
```
!new Station('YVRNORTH')

!new Customer('CCA880')
!CCA880.id := 'C-CA-880'
!CCA880.name := 'Noah Chen'
!CCA880.twitterUserName := '@noahchen_van'
!insert (YVRNORTH, CCA880) into StationContainsCustomer

!new Driver('DCA100A')
!DCA100A.id := 'D-CA-100'
!DCA100A.name := 'Avery Singh'

!new Driver('DCA100B')
!DCA100B.id := 'D-CA-100'
!DCA100B.name := 'Avery S. (Subcontract)'

!new Driver('DCA219')
!DCA219.id := 'D-CA-219'
!DCA219.name := 'Élodie Martin'

!insert (YVRNORTH, DCA100A) into StationContainsDriver
!insert (YVRNORTH, DCA100B) into StationContainsDriver
!insert (YVRNORTH, DCA219) into StationContainsDriver

!new Address('AYVRPICK01')
!AYVRPICK01.text := 'Gastown Retail Counter, 101 Water St, Vancouver, BC V6B 1A7, Canada'
!new GeoLocation('GLYVRWATER')
!GLYVRWATER.latitude := 49.2832
!GLYVRWATER.longitude := -123.1076
!insert (AYVRPICK01, GLYVRWATER) into AddressContainsGeoLocation

!new Address('AYVRPICK02')
!AYVRPICK02.text := 'Micro-fulfillment unit, 55 Powell St, Vancouver, BC V6A 1E9, Canada'
!new GeoLocation('GLYVRPOWELL')
!GLYVRPOWELL.latitude := 49.2838
!GLYVRPOWELL.longitude := -123.0989
!insert (AYVRPICK02, GLYVRPOWELL) into AddressContainsGeoLocation

!new Address('AYVRDEL01')
!AYVRDEL01.text := 'Parcel concierge desk, 1288 Alberni St, Vancouver, BC V6E 4N5, Canada'
!new GeoLocation('GLYVRALBERNI')
!GLYVRALBERNI.latitude := 49.2891
!GLYVRALBERNI.longitude := -123.1283
!insert (AYVRDEL01, GLYVRALBERNI) into AddressContainsGeoLocation

!new Address('AYVRDEL02')
!AYVRDEL02.text := 'UBC Residence Front Desk, 6331 Crescent Rd, Vancouver, BC V6T 1Z1, Canada'
!new GeoLocation('GLYVRUBC')
!GLYVRUBC.latitude := 49.2623
!GLYVRUBC.longitude := -123.2506
!insert (AYVRDEL02, GLYVRUBC) into AddressContainsGeoLocation

!new Shipment('SHPCA6009')
!SHPCA6009.id := 'SHP-CA-6009'
!SHPCA6009.status := #ASSIGNED

!new Shipment('SHPCA6010')
!SHPCA6010.id := 'SHP-CA-6010'
!SHPCA6010.status := #UNDERWAY

!insert (YVRNORTH, SHPCA6009) into StationShipment
!insert (YVRNORTH, SHPCA6010) into StationShipment

!insert (CCA880, SHPCA6009) into CustomerConsistsOfShipment
!insert (CCA880, SHPCA6010) into CustomerConsistsOfShipment

!insert (SHPCA6009, AYVRPICK01) into ShipmentContainsPickUpAddress
!insert (SHPCA6009, AYVRPICK02) into ShipmentContainsPickUpAddress
!insert (SHPCA6009, AYVRDEL01) into ShipmentContainsDeliveryAddress
!insert (DCA100A, SHPCA6009) into DriverShipment

!insert (SHPCA6010, AYVRPICK01) into ShipmentContainsPickUpAddress
!insert (SHPCA6010, AYVRDEL02) into ShipmentContainsDeliveryAddress
!insert (DCA219, SHPCA6010) into DriverShipment
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 19 | 5.26% |
| Invariants Errors (Not included on General) | 1 | 4 | 25.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `ShipmentContainsPickUpAddress':
  Object `SHPCA6009' of class `Shipment' is connected to 2 objects of class `Address'
  at association end `pickUpAddress' but the multiplicity is specified as `1'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (2) `Driver::uniqueDriverId': FAILED.
```

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 0 | 4 | 0.00% |
| Lat/Lon (out of valid addresses) | 0 | 4 | 0.00% |
| Twitter | 0 | 1 | 0.00% |

## Generation 4 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 433 | 0.00% |
| Multiplicities Errors | 0 | 141 | 0.00% |
| Invariants Errors | 0 | 16 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 19 | 5.26% |
| Invariants Errors (Not included on General) | 1 | 4 | 25.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `ShipmentContainsPickUpAddress':
  Object `SHPCA6009' of class `Shipment' is connected to 2 objects of class `Address'
  at association end `pickUpAddress' but the multiplicity is specified as `1'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (2) `Driver::uniqueDriverId': FAILED.
```

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 15 | 23 | 65.22% |
| Lat/Lon (out of valid addresses) | 0 | 8 | 0.00% |
| Twitter | 1 | 9 | 11.11% |

| Invalid Addresses | 
|---| 
```
Armários de Retirada, Estação Luz, Praça da Luz s/n, São Paulo - SP, 01120-010, Brasil
```
```
Safdarjung Hospital – Stores Gate, Ansari Nagar West, New Delhi 110029, India
```
```
Indira Gandhi International Airport (IGI) – Cargo Terminal, New Delhi 110037, India
```
```
Narela Cold Chain Warehouse, Sector A-9, Narela, Delhi 110040, India
```
```
AIIMS New Delhi – Logistics Dock, Sri Aurobindo Marg, New Delhi 110029, India
```
```
आज़ादपुर मंडी, गेट नं. 2 (Azadpur Mandi Gate 2), New Delhi, Delhi 110033, India
```
```
Ghaziabad New Bus Adda (Service Road), Ghaziabad, Uttar Pradesh 201001, India
```
```
Okhla Phase II – Small Business Cluster, New Delhi 110020, India
```
```
Connaught Place (CP), Inner Circle, New Delhi 110001, India
```
```
Gurugram Sector 29 Market, Gurugram, Haryana 122001, India
```
```
Noida Sector 18 Metro Exit (Pickup Point), Noida, Uttar Pradesh 201301, India
```
```
Ridge trail marker “7A”, Sơn Đoòng perimeter staging area, Quảng Bình, Việt Nam
```
```

```
```
PO Box 0 (general delivery), Reykjavík 101, Iceland
```
```
Side door (no signage), Calle de Bolívar, Centro Histórico, Ciudad de México, México
```

| Invalid Twitters | 
|---| 
```
@mateusferreira_sp
```

# Generation 5
## Category baseline
```
!new Station('S6AKL')

!new Driver('D6601')
!D6601.id := 'D-6601'
!D6601.name := 'Wiremu Te Rangi'

!new Driver('D6602')
!D6602.id := 'D-6602'
!D6602.name := 'Sofia Papadopoulos'

!insert (S6AKL, D6601) into StationContainsDriver
!insert (S6AKL, D6602) into StationContainsDriver

!new Customer('C6601')
!C6601.id := 'C-6601'
!C6601.name := 'Aroha Ngata'
!C6601.twitterUserName := '@aroha_ngata'

!new Customer('C6602')
!C6602.id := 'C-6602'
!C6602.name := 'Yusuf Al-Khalil'
!C6602.twitterUserName := '@yusuf_alkhalil'

!insert (S6AKL, C6601) into StationContainsCustomer
!insert (S6AKL, C6602) into StationContainsCustomer

!new Address('AAKLPu1')
!AAKLPu1.text := 'ParcelPoint Depot, 14 Timberly Rd, Mangere, Auckland 2022, New Zealand'
!new GeoLocation('GLAKL1')
!GLAKL1.latitude := -36.9686
!GLAKL1.longitude := 174.7866
!insert (AAKLPu1, GLAKL1) into AddressContainsGeoLocation

!new Address('AAKLDel1')
!AAKLDel1.text := 'Auckland City Hospital, 2 Park Rd, Grafton, Auckland 1023, New Zealand'
!new GeoLocation('GLAKL2')
!GLAKL2.latitude := -36.8629
!GLAKL2.longitude := 174.7706
!insert (AAKLDel1, GLAKL2) into AddressContainsGeoLocation

!new Address('AAKLDel2')
!AAKLDel2.text := 'University of Auckland, 22 Princes St, Auckland CBD, Auckland 1010, New Zealand'
!new GeoLocation('GLAKL3')
!GLAKL3.latitude := -36.8523
!GLAKL3.longitude := 174.7680
!insert (AAKLDel2, GLAKL3) into AddressContainsGeoLocation

!new Address('AAKLPu2')
!AAKLPu2.text := 'K Road Bookshop, 172 Karangahape Rd, Auckland 1010, New Zealand'
!new GeoLocation('GLAKL4')
!GLAKL4.latitude := -36.8576
!GLAKL4.longitude := 174.7594
!insert (AAKLPu2, GLAKL4) into AddressContainsGeoLocation

!new Address('AAKLDel3')
!AAKLDel3.text := 'Auckland Airport (International Arrivals), Ray Emery Dr, Auckland 2022, New Zealand'
!new GeoLocation('GLAKL5')
!GLAKL5.latitude := -37.0082
!GLAKL5.longitude := 174.7850
!insert (AAKLDel3, GLAKL5) into AddressContainsGeoLocation

!new Shipment('SH66001')
!SH66001.id := 'SH-66001'
!SH66001.status := #NEW

!new Shipment('SH66002')
!SH66002.id := 'SH-66002'
!SH66002.status := #ASSIGNED

!new Shipment('SH66003')
!SH66003.id := 'SH-66003'
!SH66003.status := #UNDERWAY

!new Shipment('SH66004')
!SH66004.id := 'SH-66004'
!SH66004.status := #DELIVERED

!insert (S6AKL, SH66001) into StationShipment
!insert (S6AKL, SH66002) into StationShipment
!insert (S6AKL, SH66003) into StationShipment
!insert (S6AKL, SH66004) into StationShipment

!insert (C6602, SH66001) into CustomerConsistsOfShipment
!insert (C6601, SH66002) into CustomerConsistsOfShipment
!insert (C6601, SH66003) into CustomerConsistsOfShipment
!insert (C6602, SH66004) into CustomerConsistsOfShipment

!insert (SH66001, AAKLPu2) into ShipmentContainsPickUpAddress
!insert (SH66001, AAKLDel3) into ShipmentContainsDeliveryAddress

!insert (SH66002, AAKLPu1) into ShipmentContainsPickUpAddress
!insert (SH66002, AAKLDel2) into ShipmentContainsDeliveryAddress
!insert (D6601, SH66002) into DriverShipment

!insert (SH66003, AAKLPu1) into ShipmentContainsPickUpAddress
!insert (SH66003, AAKLDel1) into ShipmentContainsDeliveryAddress
!insert (D6602, SH66003) into DriverShipment

!insert (SH66004, AAKLPu2) into ShipmentContainsPickUpAddress
!insert (SH66004, AAKLDel1) into ShipmentContainsDeliveryAddress
!insert (D6601, SH66004) into DriverShipment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 80 | 0.00% |
| Multiplicities Errors | 0 | 28 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 1 | 5 | 20.00% |
| Lat/Lon (out of valid addresses) | 0 | 4 | 0.00% |
| Twitter | 0 | 2 | 0.00% |

| Invalid Addresses | 
|---| 
```
Auckland Airport (International Arrivals), Ray Emery Dr, Auckland 2022, New Zealand
```

## Category boundary
```
!new Station('S6')

!new Driver('DRV600')
!DRV600.id := 'DRV-600'
!DRV600.name := 'Kofi Mensah'

!new Driver('DRV601')
!DRV601.id := 'DRV-601'
!DRV601.name := 'Anastasiya Petrova'

!new Driver('DRV602')
!DRV602.id := 'DRV-602'
!DRV602.name := 'Priya Nair'

!new Driver('DRV603')
!DRV603.id := 'DRV-603'
!DRV603.name := 'Liam Byrne'

!insert (S6, DRV600) into StationContainsDriver
!insert (S6, DRV601) into StationContainsDriver
!insert (S6, DRV602) into StationContainsDriver
!insert (S6, DRV603) into StationContainsDriver

!new Customer('CUST6001')
!CUST6001.id := 'CUST-6001'
!CUST6001.name := 'Ananya Mukherjee'
!CUST6001.twitterUserName := '@ananya_sends'

!new Customer('CUST6002')
!CUST6002.id := 'CUST-6002'
!CUST6002.name := 'Tenzin Dorje'
!CUST6002.twitterUserName := '@བོད་སྐྱེལ'

!new Customer('CUST6003')
!CUST6003.id := 'CUST-6003'
!CUST6003.name := 'Adaeze Okafor'
!CUST6003.twitterUserName := ''

!insert (S6, CUST6001) into StationContainsCustomer
!insert (S6, CUST6002) into StationContainsCustomer
!insert (S6, CUST6003) into StationContainsCustomer

!new Address('AORIG600')
!AORIG600.text := 'Howrah Station parcel counter, Kolkata, India'
!new GeoLocation('GORIG600')
!GORIG600.latitude := 22.5850
!GORIG600.longitude := 88.3426
!insert (AORIG600, GORIG600) into AddressContainsGeoLocation

!new Address('ADEST600')
!ADEST600.text := 'Durbar Marg, Kathmandu, Nepal'
!new GeoLocation('GDEST600')
!GDEST600.latitude := 27.7172
!GDEST600.longitude := 85.3240
!insert (ADEST600, GDEST600) into AddressContainsGeoLocation

!new Address('ABLANK600')
!ABLANK600.text := ''
!new GeoLocation('GBLANK600')
!GBLANK600.latitude := 0.0
!GBLANK600.longitude := -179.9999
!insert (ABLANK600, GBLANK600) into AddressContainsGeoLocation

!new Address('AIDL600')
!AIDL600.text := 'Kiritimati (Christmas Island) cargo pier, Kiribati'
!new GeoLocation('GIDL600')
!GIDL600.latitude := 1.8721
!GIDL600.longitude := 179.9999
!insert (AIDL600, GIDL600) into AddressContainsGeoLocation

!new Address('ANORTH600')
!ANORTH600.text := 'Arctic ice camp waypoint (near the pole)'
!new GeoLocation('GNORTH600')
!GNORTH600.latitude := 89.9999
!GNORTH600.longitude := 45.0
!insert (ANORTH600, GNORTH600) into AddressContainsGeoLocation

!new Address('ASOUTH600')
!ASOUTH600.text := 'Antarctic field depot waypoint (near the pole)'
!new GeoLocation('GSOUTH600')
!GSOUTH600.latitude := -89.9999
!GSOUTH600.longitude := -45.0
!insert (ASOUTH600, GSOUTH600) into AddressContainsGeoLocation

!new Shipment('SHP6001')
!SHP6001.id := 'SHP-6001'
!SHP6001.status := #ASSIGNED

!new Shipment('SHP6002')
!SHP6002.id := 'SHP-6002'
!SHP6002.status := #UNDERWAY

!new Shipment('SHP6003')
!SHP6003.id := 'SHP-6003'
!SHP6003.status := #DELIVERED

!new Shipment('SHP6004')
!SHP6004.id := 'SHP-6004'
!SHP6004.status := #NEW

!insert (S6, SHP6001) into StationShipment
!insert (S6, SHP6002) into StationShipment
!insert (S6, SHP6003) into StationShipment
!insert (S6, SHP6004) into StationShipment

!insert (CUST6001, SHP6001) into CustomerConsistsOfShipment
!insert (CUST6001, SHP6002) into CustomerConsistsOfShipment
!insert (CUST6002, SHP6003) into CustomerConsistsOfShipment
!insert (CUST6002, SHP6004) into CustomerConsistsOfShipment

!insert (SHP6001, AORIG600) into ShipmentContainsPickUpAddress
!insert (SHP6001, ABLANK600) into ShipmentContainsDeliveryAddress
!insert (DRV602, SHP6001) into DriverShipment

!insert (SHP6002, ABLANK600) into ShipmentContainsPickUpAddress
!insert (SHP6002, AIDL600) into ShipmentContainsDeliveryAddress
!insert (DRV600, SHP6002) into DriverShipment

!insert (SHP6003, ANORTH600) into ShipmentContainsPickUpAddress
!insert (SHP6003, ASOUTH600) into ShipmentContainsDeliveryAddress
!insert (DRV601, SHP6003) into DriverShipment

!insert (SHP6004, AIDL600) into ShipmentContainsPickUpAddress
!insert (SHP6004, ADEST600) into ShipmentContainsDeliveryAddress
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 99 | 0.00% |
| Multiplicities Errors | 0 | 32 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 4 | 6 | 66.67% |
| Lat/Lon (out of valid addresses) | 1 | 2 | 50.00% |
| Twitter | 1 | 2 | 50.00% |

| Invalid Addresses | 
|---| 
```

```
```
Arctic ice camp waypoint (near the pole)
```
```
Kiritimati (Christmas Island) cargo pier, Kiribati
```
```
Howrah Station parcel counter, Kolkata, India
```

| Invalid Lat/Lon | 
|---| 
```
Invalid Lat: -89.9999 Lon: -45.0 for address: Antarctic field depot waypoint (near the pole)
```

| Invalid Twitters | 
|---| 
```
@བོད་སྐྱེལ
```

## Category complex
```
!new Station('AKLCarbonBikeHub')
!new Station('SELSongpaSmartDepot')

!new Driver('DRVSEL110')
!DRVSEL110.id := 'DRV-SEL-110'
!DRVSEL110.name := 'Park Min-jun (박민준)'

!new Driver('DRVSEL111')
!DRVSEL111.id := 'DRV-SEL-111'
!DRVSEL111.name := 'Choi Hye-jin (최혜진)'

!new Driver('DRVSEL112')
!DRVSEL112.id := 'DRV-SEL-112'
!DRVSEL112.name := 'Lee Joon-ho (이준호)'

!new Driver('DRVSEL113')
!DRVSEL113.id := 'DRV-SEL-113'
!DRVSEL113.name := 'Nguyen Thi Lan'

!insert (SELSongpaSmartDepot, DRVSEL110) into StationContainsDriver
!insert (SELSongpaSmartDepot, DRVSEL111) into StationContainsDriver
!insert (SELSongpaSmartDepot, DRVSEL112) into StationContainsDriver
!insert (SELSongpaSmartDepot, DRVSEL113) into StationContainsDriver

!new Customer('CUSTAKL5101')
!CUSTAKL5101.id := 'CUST-AKL-5101'
!CUSTAKL5101.name := 'Tāmaki Eco Grocers'
!CUSTAKL5101.twitterUserName := '@tamaki_ecogrocer'

!new Customer('CUSTAKL5102')
!CUSTAKL5102.id := 'CUST-AKL-5102'
!CUSTAKL5102.name := 'Mereana Rangi'
!CUSTAKL5102.twitterUserName := '@mereana_rangi'

!new Customer('CUSTAKL5103')
!CUSTAKL5103.id := 'CUST-AKL-5103'
!CUSTAKL5103.name := 'Kauri Print Studio'
!CUSTAKL5103.twitterUserName := '@kauriprint'

!new Customer('CUSTAKL5104')
!CUSTAKL5104.id := 'CUST-AKL-5104'
!CUSTAKL5104.name := 'Noah Thompson'
!CUSTAKL5104.twitterUserName := '@noahthompson_nz'

!insert (AKLCarbonBikeHub, CUSTAKL5101) into StationContainsCustomer
!insert (AKLCarbonBikeHub, CUSTAKL5102) into StationContainsCustomer
!insert (AKLCarbonBikeHub, CUSTAKL5103) into StationContainsCustomer
!insert (AKLCarbonBikeHub, CUSTAKL5104) into StationContainsCustomer

!new Customer('CUSTSEL6001')
!CUSTSEL6001.id := 'CUST-SEL-6001'
!CUSTSEL6001.name := 'HanRiver Merch Co.'
!CUSTSEL6001.twitterUserName := '@hanrivermerch'

!new Customer('CUSTSEL6002')
!CUSTSEL6002.id := 'CUST-SEL-6002'
!CUSTSEL6002.name := 'Yuki Sato'
!CUSTSEL6002.twitterUserName := '@yuki_in_seoul'

!new Customer('CUSTSEL6003')
!CUSTSEL6003.id := 'CUST-SEL-6003'
!CUSTSEL6003.name := 'Dr. Kim Ara (김아라)'
!CUSTSEL6003.twitterUserName := '@ara_kim_md'

!insert (SELSongpaSmartDepot, CUSTSEL6001) into StationContainsCustomer
!insert (SELSongpaSmartDepot, CUSTSEL6002) into StationContainsCustomer
!insert (SELSongpaSmartDepot, CUSTSEL6003) into StationContainsCustomer

!new Address('AKLCB_A1')
!AKLCB_A1.text := 'Wynyard Quarter Micro-Depot, 120 Halsey St, Auckland 1010, New Zealand'
!new GeoLocation('AKLCB_GL1')
!AKLCB_GL1.latitude := -36.8426
!AKLCB_GL1.longitude := 174.7580
!insert (AKLCB_A1, AKLCB_GL1) into AddressContainsGeoLocation

!new Address('AKLCB_A2')
!AKLCB_A2.text := 'Britomart Transport Centre, 8-10 Queen St, Auckland 1010, New Zealand'
!new GeoLocation('AKLCB_GL2')
!AKLCB_GL2.latitude := -36.8445
!AKLCB_GL2.longitude := 174.7670
!insert (AKLCB_A2, AKLCB_GL2) into AddressContainsGeoLocation

!new Address('AKLCB_A3')
!AKLCB_A3.text := 'Auckland City Hospital – Loading Bay, Park Rd, Grafton, Auckland 1023, New Zealand'
!new GeoLocation('AKLCB_GL3')
!AKLCB_GL3.latitude := -36.8666
!AKLCB_GL3.longitude := 174.7700
!insert (AKLCB_A3, AKLCB_GL3) into AddressContainsGeoLocation

!new Address('AKLCB_A4')
!AKLCB_A4.text := 'Mt Eden Village (Pickup Counter), 449 Mt Eden Rd, Auckland 1024, New Zealand'
!new GeoLocation('AKLCB_GL4')
!AKLCB_GL4.latitude := -36.8759
!AKLCB_GL4.longitude := 174.7610
!insert (AKLCB_A4, AKLCB_GL4) into AddressContainsGeoLocation

!new Address('AKLCB_A5')
!AKLCB_A5.text := 'Auckland Airport Freight Precinct, Ray Emery Dr, Māngere, Auckland 2022, New Zealand'
!new GeoLocation('AKLCB_GL5')
!AKLCB_GL5.latitude := -37.0082
!AKLCB_GL5.longitude := 174.7850
!insert (AKLCB_A5, AKLCB_GL5) into AddressContainsGeoLocation

!new Address('AKLCB_A6')
!AKLCB_A6.text := 'Devonport Ferry Terminal, Queens Parade, Devonport, Auckland 0624, New Zealand'
!new GeoLocation('AKLCB_GL6')
!AKLCB_GL6.latitude := -36.8309
!AKLCB_GL6.longitude := 174.7978
!insert (AKLCB_A6, AKLCB_GL6) into AddressContainsGeoLocation

!new Address('SELSD_A1')
!SELSD_A1.text := '인천국제공항 화물터미널 (Incheon Int’l Airport Cargo), Incheon, South Korea'
!new GeoLocation('SELSD_GL1')
!SELSD_GL1.latitude := 37.4691
!SELSD_GL1.longitude := 126.4505
!insert (SELSD_A1, SELSD_GL1) into AddressContainsGeoLocation

!new Address('SELSD_A2')
!SELSD_A2.text := '잠실역 7번출구 (Jamsil Station Exit 7), 송파구, 서울, South Korea'
!new GeoLocation('SELSD_GL2')
!SELSD_GL2.latitude := 37.5133
!SELSD_GL2.longitude := 127.1002
!insert (SELSD_A2, SELSD_GL2) into AddressContainsGeoLocation

!new Address('SELSD_A3')
!SELSD_A3.text := '롯데월드타워 물류출입구 (Lotte World Tower Receiving), 300 Olympic-ro, 송파구, 서울'
!new GeoLocation('SELSD_GL3')
!SELSD_GL3.latitude := 37.5126
!SELSD_GL3.longitude := 127.1026
!insert (SELSD_A3, SELSD_GL3) into AddressContainsGeoLocation

!new Address('SELSD_A4')
!SELSD_A4.text := '구로디지털단지역 (Guro Digital Complex), 구로구, 서울, South Korea'
!new GeoLocation('SELSD_GL4')
!SELSD_GL4.latitude := 37.4853
!SELSD_GL4.longitude := 126.9015
!insert (SELSD_A4, SELSD_GL4) into AddressContainsGeoLocation

!new Address('SELSD_A5')
!SELSD_A5.text := '서울대학교병원 물품하역장 (SNUH Receiving), 종로구, 서울, South Korea'
!new GeoLocation('SELSD_GL5')
!SELSD_GL5.latitude := 37.5796
!SELSD_GL5.longitude := 126.9970
!insert (SELSD_A5, SELSD_GL5) into AddressContainsGeoLocation

!new Address('SELSD_A6')
!SELSD_A6.text := '코엑스 (COEX Mall Delivery Bay), 강남구, 서울, South Korea'
!new GeoLocation('SELSD_GL6')
!SELSD_GL6.latitude := 37.5125
!SELSD_GL6.longitude := 127.0588
!insert (SELSD_A6, SELSD_GL6) into AddressContainsGeoLocation

!new Address('SELSD_A7')
!SELSD_A7.text := '성수동 공방거리 (Seongsu Workshop Street), 성동구, 서울, South Korea'
!new GeoLocation('SELSD_GL7')
!SELSD_GL7.latitude := 37.5446
!SELSD_GL7.longitude := 127.0564
!insert (SELSD_A7, SELSD_GL7) into AddressContainsGeoLocation

!new Address('SELSD_A8')
!SELSD_A8.text := '강남대로 396 (Gangnam-daero 396, Office Reception), 강남구, 서울, South Korea'
!new GeoLocation('SELSD_GL8')
!SELSD_GL8.latitude := 37.4979
!SELSD_GL8.longitude := 127.0276
!insert (SELSD_A8, SELSD_GL8) into AddressContainsGeoLocation

!new Shipment('SHPAKL20264001')
!SHPAKL20264001.id := 'SHP-AKL-2026-4001'
!SHPAKL20264001.status := #NEW

!new Shipment('SHPAKL20264002')
!SHPAKL20264002.id := 'SHP-AKL-2026-4002'
!SHPAKL20264002.status := #NEW

!new Shipment('SHPAKL20264003')
!SHPAKL20264003.id := 'SHP-AKL-2026-4003'
!SHPAKL20264003.status := #NEW

!insert (AKLCarbonBikeHub, SHPAKL20264001) into StationShipment
!insert (AKLCarbonBikeHub, SHPAKL20264002) into StationShipment
!insert (AKLCarbonBikeHub, SHPAKL20264003) into StationShipment

!insert (CUSTAKL5101, SHPAKL20264001) into CustomerConsistsOfShipment
!insert (CUSTAKL5102, SHPAKL20264002) into CustomerConsistsOfShipment
!insert (CUSTAKL5101, SHPAKL20264003) into CustomerConsistsOfShipment

!insert (SHPAKL20264001, AKLCB_A1) into ShipmentContainsPickUpAddress
!insert (SHPAKL20264001, AKLCB_A2) into ShipmentContainsDeliveryAddress

!insert (SHPAKL20264002, AKLCB_A4) into ShipmentContainsPickUpAddress
!insert (SHPAKL20264002, AKLCB_A6) into ShipmentContainsDeliveryAddress

!insert (SHPAKL20264003, AKLCB_A5) into ShipmentContainsPickUpAddress
!insert (SHPAKL20264003, AKLCB_A1) into ShipmentContainsDeliveryAddress

!new Shipment('SHPSEL20269001')
!SHPSEL20269001.id := 'SHP-SEL-2026-9001'
!SHPSEL20269001.status := #ASSIGNED

!new Shipment('SHPSEL20269002')
!SHPSEL20269002.id := 'SHP-SEL-2026-9002'
!SHPSEL20269002.status := #UNDERWAY

!new Shipment('SHPSEL20269003')
!SHPSEL20269003.id := 'SHP-SEL-2026-9003'
!SHPSEL20269003.status := #DELIVERED

!new Shipment('SHPSEL20269004')
!SHPSEL20269004.id := 'SHP-SEL-2026-9004'
!SHPSEL20269004.status := #NEW

!new Shipment('SHPSEL20269005')
!SHPSEL20269005.id := 'SHP-SEL-2026-9005'
!SHPSEL20269005.status := #ASSIGNED

!new Shipment('SHPSEL20269006')
!SHPSEL20269006.id := 'SHP-SEL-2026-9006'
!SHPSEL20269006.status := #UNDERWAY

!new Shipment('SHPSEL20269007')
!SHPSEL20269007.id := 'SHP-SEL-2026-9007'
!SHPSEL20269007.status := #DELIVERED

!insert (SELSongpaSmartDepot, SHPSEL20269001) into StationShipment
!insert (SELSongpaSmartDepot, SHPSEL20269002) into StationShipment
!insert (SELSongpaSmartDepot, SHPSEL20269003) into StationShipment
!insert (SELSongpaSmartDepot, SHPSEL20269004) into StationShipment
!insert (SELSongpaSmartDepot, SHPSEL20269005) into StationShipment
!insert (SELSongpaSmartDepot, SHPSEL20269006) into StationShipment
!insert (SELSongpaSmartDepot, SHPSEL20269007) into StationShipment

!insert (CUSTSEL6001, SHPSEL20269001) into CustomerConsistsOfShipment
!insert (CUSTSEL6001, SHPSEL20269002) into CustomerConsistsOfShipment
!insert (CUSTSEL6002, SHPSEL20269003) into CustomerConsistsOfShipment
!insert (CUSTSEL6002, SHPSEL20269004) into CustomerConsistsOfShipment
!insert (CUSTSEL6001, SHPSEL20269005) into CustomerConsistsOfShipment
!insert (CUSTSEL6001, SHPSEL20269006) into CustomerConsistsOfShipment
!insert (CUSTSEL6001, SHPSEL20269007) into CustomerConsistsOfShipment

!insert (SHPSEL20269001, SELSD_A1) into ShipmentContainsPickUpAddress
!insert (SHPSEL20269001, SELSD_A3) into ShipmentContainsDeliveryAddress
!insert (DRVSEL110, SHPSEL20269001) into DriverShipment

!insert (SHPSEL20269002, SELSD_A7) into ShipmentContainsPickUpAddress
!insert (SHPSEL20269002, SELSD_A8) into ShipmentContainsDeliveryAddress
!insert (DRVSEL111, SHPSEL20269002) into DriverShipment

!insert (SHPSEL20269003, SELSD_A2) into ShipmentContainsPickUpAddress
!insert (SHPSEL20269003, SELSD_A6) into ShipmentContainsDeliveryAddress
!insert (DRVSEL112, SHPSEL20269003) into DriverShipment

!insert (SHPSEL20269004, SELSD_A6) into ShipmentContainsPickUpAddress
!insert (SHPSEL20269004, SELSD_A2) into ShipmentContainsDeliveryAddress

!insert (SHPSEL20269005, SELSD_A1) into ShipmentContainsPickUpAddress
!insert (SHPSEL20269005, SELSD_A5) into ShipmentContainsDeliveryAddress
!insert (DRVSEL110, SHPSEL20269005) into DriverShipment

!insert (SHPSEL20269006, SELSD_A4) into ShipmentContainsPickUpAddress
!insert (SHPSEL20269006, SELSD_A7) into ShipmentContainsDeliveryAddress
!insert (DRVSEL113, SHPSEL20269006) into DriverShipment

!insert (SHPSEL20269007, SELSD_A3) into ShipmentContainsPickUpAddress
!insert (SHPSEL20269007, SELSD_A8) into ShipmentContainsDeliveryAddress
!insert (DRVSEL111, SHPSEL20269007) into DriverShipment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 213 | 0.00% |
| Multiplicities Errors | 0 | 71 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 12 | 14 | 85.71% |
| Lat/Lon (out of valid addresses) | 0 | 2 | 0.00% |
| Twitter | 1 | 7 | 14.29% |

| Invalid Addresses | 
|---| 
```
Devonport Ferry Terminal, Queens Parade, Devonport, Auckland 0624, New Zealand
```
```
Auckland Airport Freight Precinct, Ray Emery Dr, Māngere, Auckland 2022, New Zealand
```
```
Auckland City Hospital – Loading Bay, Park Rd, Grafton, Auckland 1023, New Zealand
```
```
Britomart Transport Centre, 8-10 Queen St, Auckland 1010, New Zealand
```
```
잠실역 7번출구 (Jamsil Station Exit 7), 송파구, 서울, South Korea
```
```
인천국제공항 화물터미널 (Incheon Int’l Airport Cargo), Incheon, South Korea
```
```
구로디지털단지역 (Guro Digital Complex), 구로구, 서울, South Korea
```
```
롯데월드타워 물류출입구 (Lotte World Tower Receiving), 300 Olympic-ro, 송파구, 서울
```
```
코엑스 (COEX Mall Delivery Bay), 강남구, 서울, South Korea
```
```
서울대학교병원 물품하역장 (SNUH Receiving), 종로구, 서울, South Korea
```
```
강남대로 396 (Gangnam-daero 396, Office Reception), 강남구, 서울, South Korea
```
```
성수동 공방거리 (Seongsu Workshop Street), 성동구, 서울, South Korea
```

| Invalid Twitters | 
|---| 
```
@tamaki_ecogrocer
```

## Category edge
```
!new Station('S8_EDGE5')
!new Station('S9_EDGE5')

!new Driver('EDGE5_D60')
!EDGE5_D60.id := 'DRV-EDGE-060'
!EDGE5_D60.name := '陈伟 (Chen Wei)'

!new Driver('EDGE5_D61')
!EDGE5_D61.id := 'DRV-EDGE-061'
!EDGE5_D61.name := 'Aïssatou Mbaye'

!new Driver('EDGE5_D62')
!EDGE5_D62.id := 'DRV-EDGE-062'
!EDGE5_D62.name := 'Mikkel Sørensen'

!insert (S9_EDGE5, EDGE5_D60) into StationContainsDriver
!insert (S9_EDGE5, EDGE5_D61) into StationContainsDriver
!insert (S9_EDGE5, EDGE5_D62) into StationContainsDriver

!new Customer('EDGE5_C40')
!EDGE5_C40.id := 'CUS-EDGE-4001'
!EDGE5_C40.name := 'अनुष्का वर्मा (Anushka Verma)'
!EDGE5_C40.twitterUserName := '@anushka_v'

!new Customer('EDGE5_C41')
!EDGE5_C41.id := 'CUS-EDGE-4002'
!EDGE5_C41.name := 'Jean-Baptiste Désir'
!EDGE5_C41.twitterUserName := '@jb_desir'

!insert (S8_EDGE5, EDGE5_C40) into StationContainsCustomer
!insert (S8_EDGE5, EDGE5_C41) into StationContainsCustomer

!new Address('EDGE5_A401')
!EDGE5_A401.text := 'Collection kiosk, Changi Airport T2 service road, Singapore'
!new GeoLocation('EDGE5_GL401')
!EDGE5_GL401.latitude := 1.364420
!EDGE5_GL401.longitude := 103.991531
!insert (EDGE5_A401, EDGE5_GL401) into AddressContainsGeoLocation

!new Address('EDGE5_A402')
!EDGE5_A402.text := 'Batam Center ferry terminal locker bank, Batam, Indonesia'
!new GeoLocation('EDGE5_GL402')
!EDGE5_GL402.latitude := 1.129815
!EDGE5_GL402.longitude := 104.053014
!insert (EDGE5_A402, EDGE5_GL402) into AddressContainsGeoLocation

!new Address('EDGE5_A403')
!EDGE5_A403.text := '“Dateline East” marker buoy, open ocean'
!new GeoLocation('EDGE5_GL403')
!EDGE5_GL403.latitude := 10.000000
!EDGE5_GL403.longitude := 180.0
!insert (EDGE5_A403, EDGE5_GL403) into AddressContainsGeoLocation

!new Address('EDGE5_A404')
!EDGE5_A404.text := '“Dateline West” marker buoy, open ocean'
!new GeoLocation('EDGE5_GL404')
!EDGE5_GL404.latitude := 10.000000
!EDGE5_GL404.longitude := -180.0
!insert (EDGE5_A404, EDGE5_GL404) into AddressContainsGeoLocation

!new Address('EDGE5_A405')
!EDGE5_A405.text := '   '
!new GeoLocation('EDGE5_GL405')
!EDGE5_GL405.latitude := 51.500700
!EDGE5_GL405.longitude := -0.124600
!insert (EDGE5_A405, EDGE5_GL405) into AddressContainsGeoLocation

!new Address('EDGE5_A406')
!EDGE5_A406.text := 'Pedestrian-only gate, Parliament Square perimeter, London, UK'
!new GeoLocation('EDGE5_GL406')
!EDGE5_GL406.latitude := 51.501000
!EDGE5_GL406.longitude := -0.125700
!insert (EDGE5_A406, EDGE5_GL406) into AddressContainsGeoLocation

!new Address('EDGE5_A407')
!EDGE5_A407.text := 'Pickup window “窗口B”, West Kowloon Station service level, Hong Kong'
!new GeoLocation('EDGE5_GL407')
!EDGE5_GL407.latitude := 22.304900
!EDGE5_GL407.longitude := 114.162800
!insert (EDGE5_A407, EDGE5_GL407) into AddressContainsGeoLocation

!new Address('EDGE5_A408')
!EDGE5_A408.text := 'GPO Poste Restante counter, Central, Hong Kong'
!new GeoLocation('EDGE5_GL408')
!EDGE5_GL408.latitude := 22.284900
!EDGE5_GL408.longitude := 114.158900
!insert (EDGE5_A408, EDGE5_GL408) into AddressContainsGeoLocation

!new Address('EDGE5_A409')
!EDGE5_A409.text := 'Research float “MICRO-1”, coastal test basin'
!new GeoLocation('EDGE5_GL409')
!EDGE5_GL409.latitude := 0.000000001
!EDGE5_GL409.longitude := -0.000000001
!insert (EDGE5_A409, EDGE5_GL409) into AddressContainsGeoLocation

!new Address('EDGE5_A410')
!EDGE5_A410.text := 'Research float “MICRO-2”, coastal test basin'
!new GeoLocation('EDGE5_GL410')
!EDGE5_GL410.latitude := 0.000000002
!EDGE5_GL410.longitude := -0.000000002
!insert (EDGE5_A410, EDGE5_GL410) into AddressContainsGeoLocation

!new Address('EDGE5_A411')
!EDGE5_A411.text := 'Cité Soleil transfer point, Port-au-Prince, Haïti'
!new GeoLocation('EDGE5_GL411')
!EDGE5_GL411.latitude := 18.594400
!EDGE5_GL411.longitude := -72.293600
!insert (EDGE5_A411, EDGE5_GL411) into AddressContainsGeoLocation

!new Address('EDGE5_A412')
!EDGE5_A412.text := 'Papine market drop zone, Port-au-Prince, Haïti'
!new GeoLocation('EDGE5_GL412')
!EDGE5_GL412.latitude := 18.539200
!EDGE5_GL412.longitude := -72.336400
!insert (EDGE5_A412, EDGE5_GL412) into AddressContainsGeoLocation

!new Shipment('EDGE5_SHP4001')
!EDGE5_SHP4001.id := 'SHP-EDGE-4001'
!EDGE5_SHP4001.status := #ASSIGNED

!new Shipment('EDGE5_SHP4002')
!EDGE5_SHP4002.id := 'SHP-EDGE-4002'
!EDGE5_SHP4002.status := #UNDERWAY

!new Shipment('EDGE5_SHP4003')
!EDGE5_SHP4003.id := 'SHP-EDGE-4003'
!EDGE5_SHP4003.status := #NEW

!new Shipment('EDGE5_SHP4004')
!EDGE5_SHP4004.id := 'SHP-EDGE-4004'
!EDGE5_SHP4004.status := #DELIVERED

!new Shipment('EDGE5_SHP4005')
!EDGE5_SHP4005.id := 'SHP-EDGE-4005'
!EDGE5_SHP4005.status := #ASSIGNED

!new Shipment('EDGE5_SHP4006')
!EDGE5_SHP4006.id := 'SHP-EDGE-4006'
!EDGE5_SHP4006.status := #UNDERWAY

!insert (S8_EDGE5, EDGE5_SHP4001) into StationShipment
!insert (S8_EDGE5, EDGE5_SHP4002) into StationShipment
!insert (S8_EDGE5, EDGE5_SHP4003) into StationShipment
!insert (S8_EDGE5, EDGE5_SHP4004) into StationShipment
!insert (S8_EDGE5, EDGE5_SHP4005) into StationShipment
!insert (S8_EDGE5, EDGE5_SHP4006) into StationShipment

!insert (EDGE5_C40, EDGE5_SHP4001) into CustomerConsistsOfShipment
!insert (EDGE5_C40, EDGE5_SHP4002) into CustomerConsistsOfShipment
!insert (EDGE5_C40, EDGE5_SHP4003) into CustomerConsistsOfShipment
!insert (EDGE5_C40, EDGE5_SHP4004) into CustomerConsistsOfShipment
!insert (EDGE5_C40, EDGE5_SHP4005) into CustomerConsistsOfShipment
!insert (EDGE5_C41, EDGE5_SHP4006) into CustomerConsistsOfShipment

!insert (EDGE5_SHP4001, EDGE5_A401) into ShipmentContainsPickUpAddress
!insert (EDGE5_SHP4001, EDGE5_A402) into ShipmentContainsDeliveryAddress

!insert (EDGE5_SHP4002, EDGE5_A403) into ShipmentContainsPickUpAddress
!insert (EDGE5_SHP4002, EDGE5_A404) into ShipmentContainsDeliveryAddress

!insert (EDGE5_SHP4003, EDGE5_A405) into ShipmentContainsPickUpAddress
!insert (EDGE5_SHP4003, EDGE5_A406) into ShipmentContainsDeliveryAddress

!insert (EDGE5_SHP4004, EDGE5_A407) into ShipmentContainsPickUpAddress
!insert (EDGE5_SHP4004, EDGE5_A408) into ShipmentContainsDeliveryAddress

!insert (EDGE5_SHP4005, EDGE5_A409) into ShipmentContainsPickUpAddress
!insert (EDGE5_SHP4005, EDGE5_A410) into ShipmentContainsDeliveryAddress

!insert (EDGE5_SHP4006, EDGE5_A411) into ShipmentContainsPickUpAddress
!insert (EDGE5_SHP4006, EDGE5_A412) into ShipmentContainsDeliveryAddress

!insert (EDGE5_D60, EDGE5_SHP4001) into DriverShipment
!insert (EDGE5_D60, EDGE5_SHP4002) into DriverShipment
!insert (EDGE5_D61, EDGE5_SHP4003) into DriverShipment
!insert (EDGE5_D62, EDGE5_SHP4004) into DriverShipment
!insert (EDGE5_D60, EDGE5_SHP4006) into DriverShipment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 143 | 0.00% |
| Multiplicities Errors | 0 | 46 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 11 | 12 | 91.67% |
| Lat/Lon (out of valid addresses) | 0 | 1 | 0.00% |
| Twitter | 0 | 2 | 0.00% |

| Invalid Addresses | 
|---| 
```
Pedestrian-only gate, Parliament Square perimeter, London, UK
```
```
Pickup window “窗口B”, West Kowloon Station service level, Hong Kong
```
```
GPO Poste Restante counter, Central, Hong Kong
```
```
Research float “MICRO-1”, coastal test basin
```
```
Batam Center ferry terminal locker bank, Batam, Indonesia
```
```
“Dateline East” marker buoy, open ocean
```
```
“Dateline West” marker buoy, open ocean
```
```
   
```
```
Research float “MICRO-2”, coastal test basin
```
```
Cité Soleil transfer point, Port-au-Prince, Haïti
```
```
Collection kiosk, Changi Airport T2 service road, Singapore
```

## Category invalid
```
!new Station('DELCENTRAL')

!new Driver('DIN301')
!DIN301.id := 'D-IN-301'
!DIN301.name := 'Arjun Mehta'

!new Driver('DIN302')
!DIN302.id := 'D-IN-302'
!DIN302.name := 'Farah Khan'

!insert (DELCENTRAL, DIN301) into StationContainsDriver
!insert (DELCENTRAL, DIN302) into StationContainsDriver

!new Customer('CIN501')
!CIN501.id := 'C-IN-501'
!CIN501.name := 'Rahul Verma'
!CIN501.twitterUserName := '@rahulverma_del'

!new Customer('CINNEW998')
!CINNEW998.id := 'C-IN-NEW998'
!CINNEW998.name := 'Savitri Devi'
!CINNEW998.twitterUserName := '@savitri_new998'

!insert (DELCENTRAL, CIN501) into StationContainsCustomer

!new Address('ADEL_PICK07')
!ADEL_PICK07.text := 'Shop 14, Lajpat Nagar Central Market, New Delhi 110024, India'
!new GeoLocation('GLDELLAJPAT')
!GLDELLAJPAT.latitude := 28.5677
!GLDELLAJPAT.longitude := 77.2426
!insert (ADEL_PICK07, GLDELLAJPAT) into AddressContainsGeoLocation

!new Address('ABIH_DEL02')
!ABIH_DEL02.text := 'Khetpur Village, near the old banyan tree and the handpump, P.S. Barharia area, Siwan district, Bihar, India'

!new Address('ADEL_PICK08')
!ADEL_PICK08.text := 'Connaught Place, Inner Circle, Gate near Rajiv Chowk Metro Exit 6, New Delhi 110001, India'
!new GeoLocation('GLDELCP')
!GLDELCP.latitude := 28.6315
!GLDELCP.longitude := 77.2167
!insert (ADEL_PICK08, GLDELCP) into AddressContainsGeoLocation

!new Address('ADEL_DEL09')
!ADEL_DEL09.text := 'AIIMS Main Gate, Sri Aurobindo Marg, New Delhi 110029, India'
!new GeoLocation('GLDELAIIMS')
!GLDELAIIMS.latitude := 28.5672
!GLDELAIIMS.longitude := 77.2100
!insert (ADEL_DEL09, GLDELAIIMS) into AddressContainsGeoLocation

!new Shipment('SHPIN12001')
!SHPIN12001.id := 'SHP-IN-12001'
!SHPIN12001.status := #NEW

!new Shipment('SHPIN12002')
!SHPIN12002.id := 'SHP-IN-12002'
!SHPIN12002.status := #ASSIGNED

!insert (DELCENTRAL, SHPIN12002) into StationShipment

!insert (CINNEW998, SHPIN12001) into CustomerConsistsOfShipment
!insert (CIN501, SHPIN12002) into CustomerConsistsOfShipment

!insert (SHPIN12001, ADEL_PICK07) into ShipmentContainsPickUpAddress
!insert (SHPIN12001, ABIH_DEL02) into ShipmentContainsDeliveryAddress

!insert (SHPIN12002, ADEL_PICK08) into ShipmentContainsPickUpAddress
!insert (SHPIN12002, ADEL_DEL09) into ShipmentContainsDeliveryAddress

!insert (DIN301, SHPIN12002) into DriverShipment
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 3 | 14 | 21.43% |
| Invariants Errors (Not included on General) | 0 | 4 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `StationShipment':
  Object `SHPIN12001' of class `Shipment' is connected to 0 objects of class `Station'
  at association end `station' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `AddressContainsGeoLocation':
  Object `ABIH_DEL02' of class `Address' is connected to 0 objects of class `GeoLocation'
  at association end `geoLocation' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `StationContainsCustomer':
  Object `CINNEW998' of class `Customer' is connected to 0 objects of class `Station'
  at association end `station' but the multiplicity is specified as `1'.
```

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 2 | 3 | 66.67% |
| Lat/Lon (out of valid addresses) | 0 | 1 | 0.00% |
| Twitter | 0 | 2 | 0.00% |

| Invalid Addresses | 
|---| 
```
AIIMS Main Gate, Sri Aurobindo Marg, New Delhi 110029, India
```
```
Connaught Place, Inner Circle, Gate near Rajiv Chowk Metro Exit 6, New Delhi 110001, India
```

## Generation 5 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 587 | 0.00% |
| Multiplicities Errors | 0 | 177 | 0.00% |
| Invariants Errors | 0 | 16 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 3 | 14 | 21.43% |
| Invariants Errors (Not included on General) | 0 | 4 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `StationShipment':
  Object `SHPIN12001' of class `Shipment' is connected to 0 objects of class `Station'
  at association end `station' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `AddressContainsGeoLocation':
  Object `ABIH_DEL02' of class `Address' is connected to 0 objects of class `GeoLocation'
  at association end `geoLocation' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `StationContainsCustomer':
  Object `CINNEW998' of class `Customer' is connected to 0 objects of class `Station'
  at association end `station' but the multiplicity is specified as `1'.
```

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 30 | 40 | 75.00% |
| Lat/Lon (out of valid addresses) | 1 | 10 | 10.00% |
| Twitter | 2 | 15 | 13.33% |

| Invalid Addresses | 
|---| 
```
Auckland Airport (International Arrivals), Ray Emery Dr, Auckland 2022, New Zealand
```
```

```
```
Arctic ice camp waypoint (near the pole)
```
```
Kiritimati (Christmas Island) cargo pier, Kiribati
```
```
Howrah Station parcel counter, Kolkata, India
```
```
Devonport Ferry Terminal, Queens Parade, Devonport, Auckland 0624, New Zealand
```
```
Auckland Airport Freight Precinct, Ray Emery Dr, Māngere, Auckland 2022, New Zealand
```
```
Auckland City Hospital – Loading Bay, Park Rd, Grafton, Auckland 1023, New Zealand
```
```
Britomart Transport Centre, 8-10 Queen St, Auckland 1010, New Zealand
```
```
잠실역 7번출구 (Jamsil Station Exit 7), 송파구, 서울, South Korea
```
```
인천국제공항 화물터미널 (Incheon Int’l Airport Cargo), Incheon, South Korea
```
```
구로디지털단지역 (Guro Digital Complex), 구로구, 서울, South Korea
```
```
롯데월드타워 물류출입구 (Lotte World Tower Receiving), 300 Olympic-ro, 송파구, 서울
```
```
코엑스 (COEX Mall Delivery Bay), 강남구, 서울, South Korea
```
```
서울대학교병원 물품하역장 (SNUH Receiving), 종로구, 서울, South Korea
```
```
강남대로 396 (Gangnam-daero 396, Office Reception), 강남구, 서울, South Korea
```
```
성수동 공방거리 (Seongsu Workshop Street), 성동구, 서울, South Korea
```
```
Pedestrian-only gate, Parliament Square perimeter, London, UK
```
```
Pickup window “窗口B”, West Kowloon Station service level, Hong Kong
```
```
GPO Poste Restante counter, Central, Hong Kong
```
```
Research float “MICRO-1”, coastal test basin
```
```
Batam Center ferry terminal locker bank, Batam, Indonesia
```
```
“Dateline East” marker buoy, open ocean
```
```
“Dateline West” marker buoy, open ocean
```
```
   
```
```
Research float “MICRO-2”, coastal test basin
```
```
Cité Soleil transfer point, Port-au-Prince, Haïti
```
```
Collection kiosk, Changi Airport T2 service road, Singapore
```
```
AIIMS Main Gate, Sri Aurobindo Marg, New Delhi 110029, India
```
```
Connaught Place, Inner Circle, Gate near Rajiv Chowk Metro Exit 6, New Delhi 110001, India
```

| Invalid Lat/Lon | 
|---| 
```
Invalid Lat: -89.9999 Lon: -45.0 for address: Antarctic field depot waypoint (near the pole)
```

| Invalid Twitters | 
|---| 
```
@བོད་སྐྱེལ
```
```
@tamaki_ecogrocer
```

# Generation 6
## Category baseline
```
!new Station('S7DXB')
!new Station('S8CUZ')

!new Driver('D7701')
!D7701.id := 'D-7701'
!D7701.name := 'Rogelio Santos'

!new Driver('D7702')
!D7702.id := 'D-7702'
!D7702.name := 'Fatima Al Hammadi'

!insert (S7DXB, D7701) into StationContainsDriver
!insert (S7DXB, D7702) into StationContainsDriver

!new Customer('C7701')
!C7701.id := 'C-7701'
!C7701.name := 'Maha Al Suwaidi'
!C7701.twitterUserName := '@maha_suwaidi'

!new Customer('C7702')
!C7702.id := 'C-7702'
!C7702.name := 'Vikram Nair'
!C7702.twitterUserName := '@vikramnair_uae'

!insert (S7DXB, C7701) into StationContainsCustomer
!insert (S7DXB, C7702) into StationContainsCustomer

!new Address('DXB_A1')
!DXB_A1.text := 'JAFZA Gate 5, Warehouse Cluster J, Dubai, UAE'
!new GeoLocation('DXB_GL1')
!DXB_GL1.latitude := 24.9882
!DXB_GL1.longitude := 55.0696
!insert (DXB_A1, DXB_GL1) into AddressContainsGeoLocation

!new Address('DXB_A2')
!DXB_A2.text := 'Dubai Marina, The Walk (JBR), Dubai, UAE'
!new GeoLocation('DXB_GL2')
!DXB_GL2.latitude := 25.0800
!DXB_GL2.longitude := 55.1362
!insert (DXB_A2, DXB_GL2) into AddressContainsGeoLocation

!new Address('DXB_A3')
!DXB_A3.text := 'Al Fahidi Historical Neighbourhood, Bur Dubai, UAE'
!new GeoLocation('DXB_GL3')
!DXB_GL3.latitude := 25.2632
!DXB_GL3.longitude := 55.2973
!insert (DXB_A3, DXB_GL3) into AddressContainsGeoLocation

!new Address('DXB_A4')
!DXB_A4.text := 'Mall of the Emirates, Sheikh Zayed Rd, Dubai, UAE'
!new GeoLocation('DXB_GL4')
!DXB_GL4.latitude := 25.1180
!DXB_GL4.longitude := 55.2006
!insert (DXB_A4, DXB_GL4) into AddressContainsGeoLocation

!new Address('DXB_A5')
!DXB_A5.text := 'Gold Souk, Deira, Dubai, UAE'
!new GeoLocation('DXB_GL5')
!DXB_GL5.latitude := 25.2696
!DXB_GL5.longitude := 55.2972
!insert (DXB_A5, DXB_GL5) into AddressContainsGeoLocation

!new Shipment('SH77001')
!SH77001.id := 'SH-77001'
!SH77001.status := #UNDERWAY

!new Shipment('SH77002')
!SH77002.id := 'SH-77002'
!SH77002.status := #DELIVERED

!new Shipment('SH77003')
!SH77003.id := 'SH-77003'
!SH77003.status := #ASSIGNED

!new Shipment('SH77004')
!SH77004.id := 'SH-77004'
!SH77004.status := #NEW

!insert (S7DXB, SH77001) into StationShipment
!insert (S7DXB, SH77002) into StationShipment
!insert (S7DXB, SH77003) into StationShipment
!insert (S7DXB, SH77004) into StationShipment

!insert (C7701, SH77001) into CustomerConsistsOfShipment
!insert (C7701, SH77002) into CustomerConsistsOfShipment
!insert (C7702, SH77003) into CustomerConsistsOfShipment
!insert (C7702, SH77004) into CustomerConsistsOfShipment

!insert (SH77001, DXB_A1) into ShipmentContainsPickUpAddress
!insert (SH77001, DXB_A2) into ShipmentContainsDeliveryAddress
!insert (D7701, SH77001) into DriverShipment

!insert (SH77002, DXB_A3) into ShipmentContainsPickUpAddress
!insert (SH77002, DXB_A4) into ShipmentContainsDeliveryAddress
!insert (D7702, SH77002) into DriverShipment

!insert (SH77003, DXB_A5) into ShipmentContainsPickUpAddress
!insert (SH77003, DXB_A4) into ShipmentContainsDeliveryAddress
!insert (D7701, SH77003) into DriverShipment

!insert (SH77004, DXB_A1) into ShipmentContainsPickUpAddress
!insert (SH77004, DXB_A5) into ShipmentContainsDeliveryAddress

!new Customer('C8801')
!C8801.id := 'C-8801'
!C8801.name := 'Rosa Quispe'
!C8801.twitterUserName := '@rosa_quispe_cusco'

!insert (S8CUZ, C8801) into StationContainsCustomer

!new Address('CUZ_A1')
!CUZ_A1.text := 'Av. El Sol 800, Centro Histórico, Cusco, Perú'
!new GeoLocation('CUZ_GL1')
!CUZ_GL1.latitude := -13.5209
!CUZ_GL1.longitude := -71.9753
!insert (CUZ_A1, CUZ_GL1) into AddressContainsGeoLocation

!new Address('CUZ_A2')
!CUZ_A2.text := 'Terminal Terrestre de Cusco, Av. Industrial, Cusco, Perú'
!new GeoLocation('CUZ_GL2')
!CUZ_GL2.latitude := -13.5383
!CUZ_GL2.longitude := -71.9187
!insert (CUZ_A2, CUZ_GL2) into AddressContainsGeoLocation

!new Shipment('SH88001_CUZ')
!SH88001_CUZ.id := 'SH-88001-CUZ'
!SH88001_CUZ.status := #NEW

!new Shipment('SH88002_CUZ')
!SH88002_CUZ.id := 'SH-88002-CUZ'
!SH88002_CUZ.status := #NEW

!insert (S8CUZ, SH88001_CUZ) into StationShipment
!insert (S8CUZ, SH88002_CUZ) into StationShipment

!insert (C8801, SH88001_CUZ) into CustomerConsistsOfShipment
!insert (C8801, SH88002_CUZ) into CustomerConsistsOfShipment

!insert (SH88001_CUZ, CUZ_A2) into ShipmentContainsPickUpAddress
!insert (SH88001_CUZ, CUZ_A1) into ShipmentContainsDeliveryAddress

!insert (SH88002_CUZ, CUZ_A1) into ShipmentContainsPickUpAddress
!insert (SH88002_CUZ, CUZ_A2) into ShipmentContainsDeliveryAddress
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 112 | 0.00% |
| Multiplicities Errors | 0 | 39 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 4 | 7 | 57.14% |
| Lat/Lon (out of valid addresses) | 0 | 3 | 0.00% |
| Twitter | 1 | 3 | 33.33% |

| Invalid Addresses | 
|---| 
```
JAFZA Gate 5, Warehouse Cluster J, Dubai, UAE
```
```
Al Fahidi Historical Neighbourhood, Bur Dubai, UAE
```
```
Dubai Marina, The Walk (JBR), Dubai, UAE
```
```
Terminal Terrestre de Cusco, Av. Industrial, Cusco, Perú
```

| Invalid Twitters | 
|---| 
```
@rosa_quispe_cusco
```

## Category boundary
```
!new Station('S7')

!new Driver('DRVLONG7000000001')
!DRVLONG7000000001.id := 'DRV-LONG-7000000001'
!DRVLONG7000000001.name := 'Jean-Baptiste Tremblay'

!new Driver('DRV7002_S7')
!DRV7002_S7.id := 'DRV-7002'
!DRV7002_S7.name := 'Samira Al-Masri'

!insert (S7, DRVLONG7000000001) into StationContainsDriver
!insert (S7, DRV7002_S7) into StationContainsDriver

!new Customer('CUST7001_S7')
!CUST7001_S7.id := 'CUST-7001'
!CUST7001_S7.name := 'Noura El Idrissi'
!CUST7001_S7.twitterUserName := '@noura_casa'

!new Customer('CUST7002_S7')
!CUST7002_S7.id := 'CUST-7002'
!CUST7002_S7.name := 'ᐊᓂᑲ ᑕᐸᓐ (Anika Tapan)'
!CUST7002_S7.twitterUserName := '@anika_nunavut'

!new Customer('CUST7003_S7')
!CUST7003_S7.id := 'CUST-7003'
!CUST7003_S7.name := 'François Dubois'
!CUST7003_S7.twitterUserName := '@francois_dubois_qc'

!new Customer('CUST7004_S7')
!CUST7004_S7.id := 'CUST-7004'
!CUST7004_S7.name := 'أحمد الزهراني (Ahmed Al-Zahrani)'
!CUST7004_S7.twitterUserName := '@ahmed_الطلبات_السريعة_2026'

!insert (S7, CUST7001_S7) into StationContainsCustomer
!insert (S7, CUST7002_S7) into StationContainsCustomer
!insert (S7, CUST7003_S7) into StationContainsCustomer
!insert (S7, CUST7004_S7) into StationContainsCustomer

!new Address('ADLCOMMON700')
!ADLCOMMON700.text := 'Community Parcel Locker Bank #7, Avenida de la Constitución, Seville, Spain'
!new GeoLocation('GDLCOMMON700')
!GDLCOMMON700.latitude := 37.3891
!GDLCOMMON700.longitude := -0.0
!insert (ADLCOMMON700, GDLCOMMON700) into AddressContainsGeoLocation

!new Address('APU7001')
!APU7001.text := 'Rue de la Liberté, Casablanca, Maroc'
!new GeoLocation('GPU7001')
!GPU7001.latitude := 33.5731
!GPU7001.longitude := -7.5898
!insert (APU7001, GPU7001) into AddressContainsGeoLocation

!new Address('APU7002')
!APU7002.text := 'Iqaluit cargo shed, Nunavut, Canada'
!new GeoLocation('GPU7002')
!GPU7002.latitude := 63.7467
!GPU7002.longitude := -68.5167
!insert (APU7002, GPU7002) into AddressContainsGeoLocation

!new Address('APU7003')
!APU7003.text := 'Port-aux-Français supply pier, Kerguelen Islands (TAAF)'
!new GeoLocation('GPU7003')
!GPU7003.latitude := -49.3497
!GPU7003.longitude := 70.2196
!insert (APU7003, GPU7003) into AddressContainsGeoLocation

!new Address('APU7004')
!APU7004.text := 'Remote waypoint on the 180th meridian (pickup marker)'
!new GeoLocation('GPU7004')
!GPU7004.latitude := 10.0
!GPU7004.longitude := 180.0
!insert (APU7004, GPU7004) into AddressContainsGeoLocation

!new Shipment('SHP7001')
!SHP7001.id := 'SHP-7001'
!SHP7001.status := #NEW

!new Shipment('SHP7002')
!SHP7002.id := 'SHP-7002'
!SHP7002.status := #ASSIGNED

!new Shipment('SHP7003')
!SHP7003.id := 'SHP-7003'
!SHP7003.status := #UNDERWAY

!new Shipment('SHP7004')
!SHP7004.id := 'SHP-7004'
!SHP7004.status := #DELIVERED

!insert (S7, SHP7001) into StationShipment
!insert (S7, SHP7002) into StationShipment
!insert (S7, SHP7003) into StationShipment
!insert (S7, SHP7004) into StationShipment

!insert (CUST7001_S7, SHP7001) into CustomerConsistsOfShipment
!insert (CUST7002_S7, SHP7002) into CustomerConsistsOfShipment
!insert (CUST7003_S7, SHP7003) into CustomerConsistsOfShipment
!insert (CUST7004_S7, SHP7004) into CustomerConsistsOfShipment

!insert (SHP7001, APU7001) into ShipmentContainsPickUpAddress
!insert (SHP7001, ADLCOMMON700) into ShipmentContainsDeliveryAddress

!insert (SHP7002, APU7002) into ShipmentContainsPickUpAddress
!insert (SHP7002, ADLCOMMON700) into ShipmentContainsDeliveryAddress
!insert (DRVLONG7000000001, SHP7002) into DriverShipment

!insert (SHP7003, APU7003) into ShipmentContainsPickUpAddress
!insert (SHP7003, ADLCOMMON700) into ShipmentContainsDeliveryAddress
!insert (DRV7002_S7, SHP7003) into DriverShipment

!insert (SHP7004, APU7004) into ShipmentContainsPickUpAddress
!insert (SHP7004, ADLCOMMON700) into ShipmentContainsDeliveryAddress
!insert (DRVLONG7000000001, SHP7004) into DriverShipment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 90 | 0.00% |
| Multiplicities Errors | 0 | 30 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 4 | 5 | 80.00% |
| Lat/Lon (out of valid addresses) | 0 | 1 | 0.00% |
| Twitter | 2 | 4 | 50.00% |

| Invalid Addresses | 
|---| 
```
Iqaluit cargo shed, Nunavut, Canada
```
```
Port-aux-Français supply pier, Kerguelen Islands (TAAF)
```
```
Community Parcel Locker Bank #7, Avenida de la Constitución, Seville, Spain
```
```
Remote waypoint on the 180th meridian (pickup marker)
```

| Invalid Twitters | 
|---| 
```
@francois_dubois_qc
```
```
@ahmed_الطلبات_السريعة_2026
```

## Category complex
```
!new Station('DXBJAFZACrossDock')
!new Station('KGLGasaboDepot')

!new Driver('DRVDXB801')
!DRVDXB801.id := 'DRV-DXB-801'
!DRVDXB801.name := 'Fatima Al Suwaidi'

!new Driver('DRVDXB802')
!DRVDXB802.id := 'DRV-DXB-802'
!DRVDXB802.name := 'Rajesh Nair'

!new Driver('DRVDXB803')
!DRVDXB803.id := 'DRV-DXB-803'
!DRVDXB803.name := 'Omar Haddad'

!insert (DXBJAFZACrossDock, DRVDXB801) into StationContainsDriver
!insert (DXBJAFZACrossDock, DRVDXB802) into StationContainsDriver
!insert (DXBJAFZACrossDock, DRVDXB803) into StationContainsDriver

!new Driver('DRVKGL401')
!DRVKGL401.id := 'DRV-KGL-401'
!DRVKGL401.name := 'Jean‑Claude Nshimiyimana'

!new Driver('DRVKGL402')
!DRVKGL402.id := 'DRV-KGL-402'
!DRVKGL402.name := 'Aline Mukamana'

!insert (KGLGasaboDepot, DRVKGL401) into StationContainsDriver
!insert (KGLGasaboDepot, DRVKGL402) into StationContainsDriver

!new Customer('CUSTDXB9001')
!CUSTDXB9001.id := 'CUST-DXB-9001'
!CUSTDXB9001.name := 'Gulf DutyFree Trading LLC'
!CUSTDXB9001.twitterUserName := '@gulfdutyfree'
!insert (DXBJAFZACrossDock, CUSTDXB9001) into StationContainsCustomer

!new Customer('CUSTKGL3001')
!CUSTKGL3001.id := 'CUST-KGL-3001'
!CUSTKGL3001.name := 'Akagera Coffee Cooperative'
!CUSTKGL3001.twitterUserName := '@akageracoffee'

!new Customer('CUSTKGL3002')
!CUSTKGL3002.id := 'CUST-KGL-3002'
!CUSTKGL3002.name := 'Umuryango Health Clinic'
!CUSTKGL3002.twitterUserName := '@umuryango_clinic'

!new Customer('CUSTKGL3003')
!CUSTKGL3003.id := 'CUST-KGL-3003'
!CUSTKGL3003.name := 'Nadia Habimana'
!CUSTKGL3003.twitterUserName := '@nadia_habi'

!insert (KGLGasaboDepot, CUSTKGL3001) into StationContainsCustomer
!insert (KGLGasaboDepot, CUSTKGL3002) into StationContainsCustomer
!insert (KGLGasaboDepot, CUSTKGL3003) into StationContainsCustomer

!new Address('DXBCD_D1')
!DXBCD_D1.text := 'مطار دبي الدولي DXB – Cargo Village, Dubai, UAE'
!new GeoLocation('DXBCD_GL1')
!DXBCD_GL1.latitude := 25.2532
!DXBCD_GL1.longitude := 55.3657
!insert (DXBCD_D1, DXBCD_GL1) into AddressContainsGeoLocation

!new Address('DXBCD_D2')
!DXBCD_D2.text := 'Jebel Ali Free Zone (JAFZA) Warehouse Block M, Dubai, UAE'
!new GeoLocation('DXBCD_GL2')
!DXBCD_GL2.latitude := 24.9948
!DXBCD_GL2.longitude := 55.0612
!insert (DXBCD_D2, DXBCD_GL2) into AddressContainsGeoLocation

!new Address('DXBCD_D3')
!DXBCD_D3.text := 'Gold Souk, Deira, Dubai, UAE'
!new GeoLocation('DXBCD_GL3')
!DXBCD_GL3.latitude := 25.2706
!DXBCD_GL3.longitude := 55.2963
!insert (DXBCD_D3, DXBCD_GL3) into AddressContainsGeoLocation

!new Address('DXBCD_D4')
!DXBCD_D4.text := 'Dubai Marina Mall – Receiving Bay, Dubai, UAE'
!new GeoLocation('DXBCD_GL4')
!DXBCD_GL4.latitude := 25.0773
!DXBCD_GL4.longitude := 55.1403
!insert (DXBCD_D4, DXBCD_GL4) into AddressContainsGeoLocation

!new Address('DXBCD_D5')
!DXBCD_D5.text := 'Al Quoz Industrial Area 3 – Loading Gate, Dubai, UAE'
!new GeoLocation('DXBCD_GL5')
!DXBCD_GL5.latitude := 25.1267
!DXBCD_GL5.longitude := 55.2230
!insert (DXBCD_D5, DXBCD_GL5) into AddressContainsGeoLocation

!new Address('DXBCD_D6')
!DXBCD_D6.text := 'Downtown Dubai – Souk Al Bahar Service Entrance, Dubai, UAE'
!new GeoLocation('DXBCD_GL6')
!DXBCD_GL6.latitude := 25.1955
!DXBCD_GL6.longitude := 55.2797
!insert (DXBCD_D6, DXBCD_GL6) into AddressContainsGeoLocation

!new Address('DXBCD_D7')
!DXBCD_D7.text := 'Dubai Silicon Oasis – Tech Park Delivery Point, Dubai, UAE'
!new GeoLocation('DXBCD_GL7')
!DXBCD_GL7.latitude := 25.1279
!DXBCD_GL7.longitude := 55.3888
!insert (DXBCD_D7, DXBCD_GL7) into AddressContainsGeoLocation

!new Address('KGLD_K1')
!KGLD_K1.text := 'Kigali Special Economic Zone (KSEZ), Masoro, Rwanda'
!new GeoLocation('KGLD_GL1')
!KGLD_GL1.latitude := -1.9356
!KGLD_GL1.longitude := 30.1767
!insert (KGLD_K1, KGLD_GL1) into AddressContainsGeoLocation

!new Address('KGLD_K2')
!KGLD_K2.text := 'Kimironko Market (Amasoko ya Kimironko), Kigali, Rwanda'
!new GeoLocation('KGLD_GL2')
!KGLD_GL2.latitude := -1.9369
!KGLD_GL2.longitude := 30.1306
!insert (KGLD_K2, KGLD_GL2) into AddressContainsGeoLocation

!new Address('KGLD_K3')
!KGLD_K3.text := 'Kigali Convention Centre, KG 2 Roundabout, Kigali, Rwanda'
!new GeoLocation('KGLD_GL3')
!KGLD_GL3.latitude := -1.9537
!KGLD_GL3.longitude := 30.0927
!insert (KGLD_K3, KGLD_GL3) into AddressContainsGeoLocation

!new Address('KGLD_K4')
!KGLD_K4.text := 'Kigali International Airport (Kanombe) – Cargo/Stores Gate, Rwanda'
!new GeoLocation('KGLD_GL4')
!KGLD_GL4.latitude := -1.9686
!KGLD_GL4.longitude := 30.1395
!insert (KGLD_K4, KGLD_GL4) into AddressContainsGeoLocation

!new Address('KGLD_K5')
!KGLD_K5.text := 'Nyabugogo Bus Terminal – Parcel Point, Kigali, Rwanda'
!new GeoLocation('KGLD_GL5')
!KGLD_GL5.latitude := -1.9444
!KGLD_GL5.longitude := 30.0588
!insert (KGLD_K5, KGLD_GL5) into AddressContainsGeoLocation

!new Shipment('SHPDXB6101')
!SHPDXB6101.id := 'SHP-DXB-2026-6101'
!SHPDXB6101.status := #NEW

!new Shipment('SHPDXB6102')
!SHPDXB6102.id := 'SHP-DXB-2026-6102'
!SHPDXB6102.status := #ASSIGNED

!new Shipment('SHPDXB6103')
!SHPDXB6103.id := 'SHP-DXB-2026-6103'
!SHPDXB6103.status := #UNDERWAY

!new Shipment('SHPDXB6104')
!SHPDXB6104.id := 'SHP-DXB-2026-6104'
!SHPDXB6104.status := #DELIVERED

!new Shipment('SHPDXB6105')
!SHPDXB6105.id := 'SHP-DXB-2026-6105'
!SHPDXB6105.status := #ASSIGNED

!new Shipment('SHPDXB6106')
!SHPDXB6106.id := 'SHP-DXB-2026-6106'
!SHPDXB6106.status := #NEW

!insert (DXBJAFZACrossDock, SHPDXB6101) into StationShipment
!insert (DXBJAFZACrossDock, SHPDXB6102) into StationShipment
!insert (DXBJAFZACrossDock, SHPDXB6103) into StationShipment
!insert (DXBJAFZACrossDock, SHPDXB6104) into StationShipment
!insert (DXBJAFZACrossDock, SHPDXB6105) into StationShipment
!insert (DXBJAFZACrossDock, SHPDXB6106) into StationShipment

!insert (CUSTDXB9001, SHPDXB6101) into CustomerConsistsOfShipment
!insert (CUSTDXB9001, SHPDXB6102) into CustomerConsistsOfShipment
!insert (CUSTDXB9001, SHPDXB6103) into CustomerConsistsOfShipment
!insert (CUSTDXB9001, SHPDXB6104) into CustomerConsistsOfShipment
!insert (CUSTDXB9001, SHPDXB6105) into CustomerConsistsOfShipment
!insert (CUSTDXB9001, SHPDXB6106) into CustomerConsistsOfShipment

!insert (SHPDXB6101, DXBCD_D1) into ShipmentContainsPickUpAddress
!insert (SHPDXB6101, DXBCD_D2) into ShipmentContainsDeliveryAddress

!insert (SHPDXB6102, DXBCD_D2) into ShipmentContainsPickUpAddress
!insert (SHPDXB6102, DXBCD_D4) into ShipmentContainsDeliveryAddress
!insert (DRVDXB801, SHPDXB6102) into DriverShipment

!insert (SHPDXB6103, DXBCD_D3) into ShipmentContainsPickUpAddress
!insert (SHPDXB6103, DXBCD_D2) into ShipmentContainsDeliveryAddress
!insert (DRVDXB802, SHPDXB6103) into DriverShipment

!insert (SHPDXB6104, DXBCD_D5) into ShipmentContainsPickUpAddress
!insert (SHPDXB6104, DXBCD_D6) into ShipmentContainsDeliveryAddress
!insert (DRVDXB801, SHPDXB6104) into DriverShipment

!insert (SHPDXB6105, DXBCD_D1) into ShipmentContainsPickUpAddress
!insert (SHPDXB6105, DXBCD_D7) into ShipmentContainsDeliveryAddress
!insert (DRVDXB802, SHPDXB6105) into DriverShipment

!insert (SHPDXB6106, DXBCD_D2) into ShipmentContainsPickUpAddress
!insert (SHPDXB6106, DXBCD_D3) into ShipmentContainsDeliveryAddress

!new Shipment('SHPKGL1201')
!SHPKGL1201.id := 'SHP-KGL-2026-1201'
!SHPKGL1201.status := #UNDERWAY

!new Shipment('SHPKGL1202')
!SHPKGL1202.id := 'SHP-KGL-2026-1202'
!SHPKGL1202.status := #DELIVERED

!insert (KGLGasaboDepot, SHPKGL1201) into StationShipment
!insert (KGLGasaboDepot, SHPKGL1202) into StationShipment

!insert (CUSTKGL3001, SHPKGL1201) into CustomerConsistsOfShipment
!insert (CUSTKGL3001, SHPKGL1202) into CustomerConsistsOfShipment

!insert (SHPKGL1201, KGLD_K1) into ShipmentContainsPickUpAddress
!insert (SHPKGL1201, KGLD_K4) into ShipmentContainsDeliveryAddress
!insert (DRVKGL401, SHPKGL1201) into DriverShipment

!insert (SHPKGL1202, KGLD_K2) into ShipmentContainsPickUpAddress
!insert (SHPKGL1202, KGLD_K5) into ShipmentContainsDeliveryAddress
!insert (DRVKGL402, SHPKGL1202) into DriverShipment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 176 | 0.00% |
| Multiplicities Errors | 0 | 59 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 11 | 12 | 91.67% |
| Lat/Lon (out of valid addresses) | 0 | 1 | 0.00% |
| Twitter | 1 | 4 | 25.00% |

| Invalid Addresses | 
|---| 
```
Dubai Marina Mall – Receiving Bay, Dubai, UAE
```
```
Al Quoz Industrial Area 3 – Loading Gate, Dubai, UAE
```
```
Downtown Dubai – Souk Al Bahar Service Entrance, Dubai, UAE
```
```
Dubai Silicon Oasis – Tech Park Delivery Point, Dubai, UAE
```
```
Kimironko Market (Amasoko ya Kimironko), Kigali, Rwanda
```
```
مطار دبي الدولي DXB – Cargo Village, Dubai, UAE
```
```
Kigali Convention Centre, KG 2 Roundabout, Kigali, Rwanda
```
```
Jebel Ali Free Zone (JAFZA) Warehouse Block M, Dubai, UAE
```
```
Kigali Special Economic Zone (KSEZ), Masoro, Rwanda
```
```
Kigali International Airport (Kanombe) – Cargo/Stores Gate, Rwanda
```
```
Nyabugogo Bus Terminal – Parcel Point, Kigali, Rwanda
```

| Invalid Twitters | 
|---| 
```
@umuryango_clinic
```

## Category edge
```
!new Station('S10_EDGE6')
!new Station('S11_EDGE6')
!new Station('S12_EDGE6')

!new Driver('EDGE6_D80')
!EDGE6_D80.id := 'DRV-EDGE-080'
!EDGE6_D80.name := 'Lucía Quintana'

!new Driver('EDGE6_D81')
!EDGE6_D81.id := 'DRV-EDGE-081'
!EDGE6_D81.name := 'Tenzin Norbu (བསྟན་འཛིན)'

!new Driver('EDGE6_D82')
!EDGE6_D82.id := 'DRV-EDGE-082'
!EDGE6_D82.name := 'Adeyemi Ọlábísí'

!insert (S12_EDGE6, EDGE6_D80) into StationContainsDriver
!insert (S12_EDGE6, EDGE6_D81) into StationContainsDriver
!insert (S12_EDGE6, EDGE6_D82) into StationContainsDriver

!new Customer('EDGE6_C50')
!EDGE6_C50.id := 'CUS-EDGE-5001'
!EDGE6_C50.name := 'Мария Петрова'
!EDGE6_C50.twitterUserName := '@masha_pet'

!new Customer('EDGE6_C51')
!EDGE6_C51.id := 'CUS-EDGE-5002'
!EDGE6_C51.name := 'Kāne Kealoha'
!EDGE6_C51.twitterUserName := '@kane_kealoha'

!new Customer('EDGE6_C52')
!EDGE6_C52.id := 'CUS-EDGE-5003'
!EDGE6_C52.name := 'Fatima el-Masri'
!EDGE6_C52.twitterUserName := '@fatima_elmasri'

!new Customer('EDGE6_C53')
!EDGE6_C53.id := 'CUS-EDGE-5004'
!EDGE6_C53.name := 'บริษัท ลานนาเหนือ (Lanna Nuea Co.)'
!EDGE6_C53.twitterUserName := '@lanna_nuea'

!insert (S11_EDGE6, EDGE6_C50) into StationContainsCustomer
!insert (S11_EDGE6, EDGE6_C51) into StationContainsCustomer
!insert (S11_EDGE6, EDGE6_C52) into StationContainsCustomer
!insert (S11_EDGE6, EDGE6_C53) into StationContainsCustomer

!new Address('EDGE6_A501')
!EDGE6_A501.text := 'Cargo cage “K-17”, Keleti pályaudvar service tunnel, Budapest, Hungary'
!new GeoLocation('EDGE6_GL501')
!EDGE6_GL501.latitude := 47.500930
!EDGE6_GL501.longitude := 19.083280
!insert (EDGE6_A501, EDGE6_GL501) into AddressContainsGeoLocation

!new Address('EDGE6_A502')
!EDGE6_A502.text := '“Bibliobus” stop, Place de la République, 75011 Paris, France'
!new GeoLocation('EDGE6_GL502')
!EDGE6_GL502.latitude := 48.867380
!EDGE6_GL502.longitude := 2.363410
!insert (EDGE6_A502, EDGE6_GL502) into AddressContainsGeoLocation

!new Address('EDGE6_A503')
!EDGE6_A503.text := '〒100-0005 東京都千代田区丸の内1丁目 地下搬入口 (地下B2), Japan'
!new GeoLocation('EDGE6_GL503')
!EDGE6_GL503.latitude := 35.681236
!EDGE6_GL503.longitude := 139.767125
!insert (EDGE6_A503, EDGE6_GL503) into AddressContainsGeoLocation

!new Address('EDGE6_A504')
!EDGE6_A504.text := 'Long-form address: Unit 9999, Tower “A”, Mega-Complex “Seven Rivers”, District 12, Sector 4, Block 27, Lot 3 (rear ramp), Ciudad del Este, Paraguay'
!new GeoLocation('EDGE6_GL504')
!EDGE6_GL504.latitude := -25.509500
!EDGE6_GL504.longitude := -54.611000
!insert (EDGE6_A504, EDGE6_GL504) into AddressContainsGeoLocation

!new Address('EDGE6_A505')
!EDGE6_A505.text := 'PO Box 000, General Delivery counter, Stanley, Falkland Islands'
!new GeoLocation('EDGE6_GL505')
!EDGE6_GL505.latitude := -51.693500
!EDGE6_GL505.longitude := -57.851600
!insert (EDGE6_A505, EDGE6_GL505) into AddressContainsGeoLocation

!new Address('EDGE6_A506')
!EDGE6_A506.text := 'Field drop “Outcrop-Δ”, Simpson Desert track marker, Australia'
!new GeoLocation('EDGE6_GL506')
!EDGE6_GL506.latitude := -25.000000
!EDGE6_GL506.longitude := 137.000000
!insert (EDGE6_A506, EDGE6_GL506) into AddressContainsGeoLocation

!new Shipment('EDGE6_SHP5001')
!EDGE6_SHP5001.id := 'SHP-EDGE-5001'
!EDGE6_SHP5001.status := #UNDERWAY

!new Shipment('EDGE6_SHP5002')
!EDGE6_SHP5002.id := 'SHP-EDGE-5002'
!EDGE6_SHP5002.status := #ASSIGNED

!new Shipment('EDGE6_SHP5003')
!EDGE6_SHP5003.id := 'SHP-EDGE-5003'
!EDGE6_SHP5003.status := #NEW

!new Shipment('EDGE6_SHP5004')
!EDGE6_SHP5004.id := 'SHP-EDGE-5004'
!EDGE6_SHP5004.status := #DELIVERED

!new Shipment('EDGE6_SHP5005')
!EDGE6_SHP5005.id := 'SHP-EDGE-5005'
!EDGE6_SHP5005.status := #ASSIGNED

!insert (S10_EDGE6, EDGE6_SHP5001) into StationShipment
!insert (S10_EDGE6, EDGE6_SHP5002) into StationShipment
!insert (S10_EDGE6, EDGE6_SHP5003) into StationShipment
!insert (S10_EDGE6, EDGE6_SHP5004) into StationShipment
!insert (S10_EDGE6, EDGE6_SHP5005) into StationShipment

!insert (EDGE6_C50, EDGE6_SHP5001) into CustomerConsistsOfShipment
!insert (EDGE6_C50, EDGE6_SHP5002) into CustomerConsistsOfShipment
!insert (EDGE6_C50, EDGE6_SHP5003) into CustomerConsistsOfShipment
!insert (EDGE6_C51, EDGE6_SHP5004) into CustomerConsistsOfShipment
!insert (EDGE6_C52, EDGE6_SHP5005) into CustomerConsistsOfShipment

!insert (EDGE6_SHP5001, EDGE6_A501) into ShipmentContainsPickUpAddress
!insert (EDGE6_SHP5001, EDGE6_A502) into ShipmentContainsDeliveryAddress

!insert (EDGE6_SHP5002, EDGE6_A502) into ShipmentContainsPickUpAddress
!insert (EDGE6_SHP5002, EDGE6_A503) into ShipmentContainsDeliveryAddress

!insert (EDGE6_SHP5003, EDGE6_A503) into ShipmentContainsPickUpAddress
!insert (EDGE6_SHP5003, EDGE6_A501) into ShipmentContainsDeliveryAddress

!insert (EDGE6_SHP5004, EDGE6_A504) into ShipmentContainsPickUpAddress
!insert (EDGE6_SHP5004, EDGE6_A505) into ShipmentContainsDeliveryAddress

!insert (EDGE6_SHP5005, EDGE6_A506) into ShipmentContainsPickUpAddress
!insert (EDGE6_SHP5005, EDGE6_A504) into ShipmentContainsDeliveryAddress

!insert (EDGE6_D80, EDGE6_SHP5001) into DriverShipment
!insert (EDGE6_D81, EDGE6_SHP5002) into DriverShipment
!insert (EDGE6_D81, EDGE6_SHP5003) into DriverShipment
!insert (EDGE6_D80, EDGE6_SHP5004) into DriverShipment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 110 | 0.00% |
| Multiplicities Errors | 0 | 37 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 5 | 6 | 83.33% |
| Lat/Lon (out of valid addresses) | 0 | 1 | 0.00% |
| Twitter | 0 | 4 | 0.00% |

| Invalid Addresses | 
|---| 
```
Cargo cage “K-17”, Keleti pályaudvar service tunnel, Budapest, Hungary
```
```
〒100-0005 東京都千代田区丸の内1丁目 地下搬入口 (地下B2), Japan
```
```
PO Box 000, General Delivery counter, Stanley, Falkland Islands
```
```
Long-form address: Unit 9999, Tower “A”, Mega-Complex “Seven Rivers”, District 12, Sector 4, Block 27, Lot 3 (rear ramp), Ciudad del Este, Paraguay
```
```
Field drop “Outcrop-Δ”, Simpson Desert track marker, Australia
```

## Category invalid
```
!new Station('PARHUB13_2')

!new Customer('CFR700_2')
!CFR700_2.id := 'C-FR-700'
!CFR700_2.name := 'Élodie Moreau'
!CFR700_2.twitterUserName := '@elodie_mr'
!insert (PARHUB13_2, CFR700_2) into StationContainsCustomer

!new Driver('DFR013_2')
!DFR013_2.id := 'D-FR-013'
!DFR013_2.name := 'Karim Benali'
!insert (PARHUB13_2, DFR013_2) into StationContainsDriver

!new Driver('DFRFLEX9_2')
!DFRFLEX9_2.id := 'D-FR-FLEX-9'
!DFRFLEX9_2.name := 'Sofía Álvarez'

!new Address('APARPICK01_2')
!APARPICK01_2.text := '12 Rue de Tolbiac, 75013 Paris, France'
!new GeoLocation('GLPARTOLBIAC_2')
!GLPARTOLBIAC_2.latitude := 48.8276
!GLPARTOLBIAC_2.longitude := 2.3554
!insert (APARPICK01_2, GLPARTOLBIAC_2) into AddressContainsGeoLocation

!new Address('APARPUDO01_2')
!APARPUDO01_2.text := 'Point Relais — Tabac du Square, 5 Avenue d’Italie, 75013 Paris, France'
!new GeoLocation('GLPARITALIE_2')
!GLPARITALIE_2.latitude := 48.8322
!GLPARITALIE_2.longitude := 2.3559
!insert (APARPUDO01_2, GLPARITALIE_2) into AddressContainsGeoLocation

!new Address('APARPUDO02_2')
!APARPUDO02_2.text := 'Point Relais — Librairie des Gobelins, 73 Avenue des Gobelins, 75013 Paris, France'
!new GeoLocation('GLPARGOBELINS_2')
!GLPARGOBELINS_2.latitude := 48.8352
!GLPARGOBELINS_2.longitude := 2.3529
!insert (APARPUDO02_2, GLPARGOBELINS_2) into AddressContainsGeoLocation

!new Address('AORLYWH01_2')
!AORLYWH01_2.text := 'Entrepôt Marchand, 8 Rue du Parc des Vergers, 94310 Orly, France'
!new GeoLocation('GLORLYWH_2')
!GLORLYWH_2.latitude := 48.7422
!GLORLYWH_2.longitude := 2.3896
!insert (AORLYWH01_2, GLORLYWH_2) into AddressContainsGeoLocation

!new Address('APARAREAONLY_2')
!APARAREAONLY_2.text := 'Paris (zone de livraison à confirmer par le destinataire)'
!new GeoLocation('GLPARCENTER_2')
!GLPARCENTER_2.latitude := 48.8566
!GLPARCENTER_2.longitude := 2.3522
!insert (APARAREAONLY_2, GLPARCENTER_2) into AddressContainsGeoLocation

!new Shipment('SHPFR2601_2')
!SHPFR2601_2.id := 'SHP-FR-2601'
!SHPFR2601_2.status := #NEW

!new Shipment('SHPFR2602_2')
!SHPFR2602_2.id := 'SHP-FR-2602'
!SHPFR2602_2.status := #ASSIGNED

!insert (PARHUB13_2, SHPFR2601_2) into StationShipment
!insert (PARHUB13_2, SHPFR2602_2) into StationShipment

!insert (CFR700_2, SHPFR2601_2) into CustomerConsistsOfShipment
!insert (CFR700_2, SHPFR2602_2) into CustomerConsistsOfShipment

!insert (SHPFR2601_2, APARPICK01_2) into ShipmentContainsPickUpAddress

!insert (SHPFR2602_2, APARPUDO01_2) into ShipmentContainsPickUpAddress
!insert (SHPFR2602_2, APARPUDO02_2) into ShipmentContainsPickUpAddress
!insert (SHPFR2602_2, AORLYWH01_2) into ShipmentContainsDeliveryAddress

!insert (DFRFLEX9_2, SHPFR2602_2) into DriverShipment
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 3 | 16 | 18.75% |
| Invariants Errors (Not included on General) | 0 | 4 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `ShipmentContainsDeliveryAddress':
  Object `SHPFR2601_2' of class `Shipment' is connected to 0 objects of class `Address'
  at association end `shipToAddress' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `StationContainsDriver':
  Object `DFRFLEX9_2' of class `Driver' is connected to 0 objects of class `Station'
  at association end `station' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `ShipmentContainsPickUpAddress':
  Object `SHPFR2602_2' of class `Shipment' is connected to 2 objects of class `Address'
  at association end `pickUpAddress' but the multiplicity is specified as `1'.
```

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 2 | 5 | 40.00% |
| Lat/Lon (out of valid addresses) | 0 | 3 | 0.00% |
| Twitter | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
Entrepôt Marchand, 8 Rue du Parc des Vergers, 94310 Orly, France
```
```
Paris (zone de livraison à confirmer par le destinataire)
```

## Generation 6 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 546 | 0.00% |
| Multiplicities Errors | 0 | 165 | 0.00% |
| Invariants Errors | 0 | 16 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 3 | 16 | 18.75% |
| Invariants Errors (Not included on General) | 0 | 4 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `ShipmentContainsDeliveryAddress':
  Object `SHPFR2601_2' of class `Shipment' is connected to 0 objects of class `Address'
  at association end `shipToAddress' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `StationContainsDriver':
  Object `DFRFLEX9_2' of class `Driver' is connected to 0 objects of class `Station'
  at association end `station' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `ShipmentContainsPickUpAddress':
  Object `SHPFR2602_2' of class `Shipment' is connected to 2 objects of class `Address'
  at association end `pickUpAddress' but the multiplicity is specified as `1'.
```

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 26 | 35 | 74.29% |
| Lat/Lon (out of valid addresses) | 0 | 9 | 0.00% |
| Twitter | 4 | 16 | 25.00% |

| Invalid Addresses | 
|---| 
```
JAFZA Gate 5, Warehouse Cluster J, Dubai, UAE
```
```
Al Fahidi Historical Neighbourhood, Bur Dubai, UAE
```
```
Dubai Marina, The Walk (JBR), Dubai, UAE
```
```
Terminal Terrestre de Cusco, Av. Industrial, Cusco, Perú
```
```
Iqaluit cargo shed, Nunavut, Canada
```
```
Port-aux-Français supply pier, Kerguelen Islands (TAAF)
```
```
Community Parcel Locker Bank #7, Avenida de la Constitución, Seville, Spain
```
```
Remote waypoint on the 180th meridian (pickup marker)
```
```
Dubai Marina Mall – Receiving Bay, Dubai, UAE
```
```
Al Quoz Industrial Area 3 – Loading Gate, Dubai, UAE
```
```
Downtown Dubai – Souk Al Bahar Service Entrance, Dubai, UAE
```
```
Dubai Silicon Oasis – Tech Park Delivery Point, Dubai, UAE
```
```
Kimironko Market (Amasoko ya Kimironko), Kigali, Rwanda
```
```
مطار دبي الدولي DXB – Cargo Village, Dubai, UAE
```
```
Kigali Convention Centre, KG 2 Roundabout, Kigali, Rwanda
```
```
Jebel Ali Free Zone (JAFZA) Warehouse Block M, Dubai, UAE
```
```
Kigali Special Economic Zone (KSEZ), Masoro, Rwanda
```
```
Kigali International Airport (Kanombe) – Cargo/Stores Gate, Rwanda
```
```
Nyabugogo Bus Terminal – Parcel Point, Kigali, Rwanda
```
```
Cargo cage “K-17”, Keleti pályaudvar service tunnel, Budapest, Hungary
```
```
〒100-0005 東京都千代田区丸の内1丁目 地下搬入口 (地下B2), Japan
```
```
PO Box 000, General Delivery counter, Stanley, Falkland Islands
```
```
Long-form address: Unit 9999, Tower “A”, Mega-Complex “Seven Rivers”, District 12, Sector 4, Block 27, Lot 3 (rear ramp), Ciudad del Este, Paraguay
```
```
Field drop “Outcrop-Δ”, Simpson Desert track marker, Australia
```
```
Entrepôt Marchand, 8 Rue du Parc des Vergers, 94310 Orly, France
```
```
Paris (zone de livraison à confirmer par le destinataire)
```

| Invalid Twitters | 
|---| 
```
@rosa_quispe_cusco
```
```
@francois_dubois_qc
```
```
@ahmed_الطلبات_السريعة_2026
```
```
@umuryango_clinic
```

# Summary for all generations
| Summary | Value | 
|---|---| 
| Model | GPT_5_2 | 
| Type | CoT | 
| System | pickupnet | 
| Number of generations | 6 | 

| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 3064 | 0.00% |
| Multiplicities Errors | 0 | 910 | 0.00% |
| Invariants Errors | 0 | 96 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 9 | 118 | 7.63% |
| Invariants Errors (Not included on General) | 5 | 24 | 20.83% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `ShipmentContainsDeliveryAddress':
  Object `SHPCL9002' of class `Shipment' is connected to 2 objects of class `Address'
  at association end `shipToAddress' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `AddressContainsGeoLocation':
  Object `ASCLPICK02' of class `Address' is connected to 2 objects of class `GeoLocation'
  at association end `geoLocation' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `ShipmentContainsPickUpAddress':
  Object `SHPCA6009' of class `Shipment' is connected to 2 objects of class `Address'
  at association end `pickUpAddress' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `StationShipment':
  Object `SHPIN12001' of class `Shipment' is connected to 0 objects of class `Station'
  at association end `station' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `AddressContainsGeoLocation':
  Object `ABIH_DEL02' of class `Address' is connected to 0 objects of class `GeoLocation'
  at association end `geoLocation' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `StationContainsCustomer':
  Object `CINNEW998' of class `Customer' is connected to 0 objects of class `Station'
  at association end `station' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `ShipmentContainsDeliveryAddress':
  Object `SHPFR2601_2' of class `Shipment' is connected to 0 objects of class `Address'
  at association end `shipToAddress' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `StationContainsDriver':
  Object `DFRFLEX9_2' of class `Driver' is connected to 0 objects of class `Station'
  at association end `station' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `ShipmentContainsPickUpAddress':
  Object `SHPFR2602_2' of class `Shipment' is connected to 2 objects of class `Address'
  at association end `pickUpAddress' but the multiplicity is specified as `1'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (1) `Customer::uniqueCustomerId': FAILED.
```
```
checking invariant (3) `Shipment::differentPickupAndDeliveryAddress': FAILED.
```
```
checking invariant (4) `Shipment::uniqueShipmentId': FAILED.
```
```
checking invariant (4) `Shipment::uniqueShipmentId': FAILED.
```
```
checking invariant (2) `Driver::uniqueDriverId': FAILED.
```

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 134 | 199 | 67.34% |
| Lat/Lon (out of valid addresses) | 1 | 65 | 1.54% |
| Twitter | 11 | 79 | 13.92% |

| Invalid Addresses | 
|---| 
```
Amundsen–Scott South Pole Station, Antarctic Plateau (pickup point)
```
```
Geographic North Pole research drop zone (delivery point)
```
```
Avinguda de Cerdanyola 98, 08172 Sant Cugat del Vallès, Catalunya, Spain
```
```
Terminal de Càrrega T1, Aeroport Josep Tarradellas Barcelona–El Prat, 08820 El Prat de Llobregat
```
```
Mercabarna, Carrer Major 76, 08040 Barcelona, Catalunya, Spain
```
```
Avinguda de Martí Pujol 120, 08912 Badalona, Catalunya, Spain
```
```
Service corridor Door C, Teine Station parcel cage, 5-1-1 Teinehoncho, Teine-ku, Sapporo, Hokkaidō 006-0021, Japan
```
```
Front lobby lockers (same street address), 5-1-1 Teinehoncho, Teine-ku, Sapporo, Hokkaidō 006-0021, Japan
```
```
Counter pickup, Sapporo Central Post Office, Kita 6 Nishi 1, Kita-ku, Sapporo, Hokkaidō 060-8799, Japan
```
```
Boat Slip 3, Port of Otaru, Otaru, Hokkaidō, Japan
```
```
Temporary festival stall “雪まつり” delivery point, Odori Park, Chuo-ku, Sapporo, Hokkaidō, Japan
```
```
UNIS logistics shed, Longyearbyen, Svalbard, Norway
```
```
McMurdo Station cargo pad, Ross Island, Antarctica
```
```
京都大学医学部附属病院, 54 Kawahara-chō, Shōgoin, Sakyo Ward, Kyoto 606-8507, Japan
```
```
グランフロント大阪 北館 3F（Grand Front Osaka North Building 3F）, 3-1 Ofukachō, Kita-ku, Osaka 530-0011, Japan
```
```
〒600-8216 京都府京都市下京区東塩小路町 901 (Kyoto Station area), Japan
```
```
Null Island buoy area, Gulf of Guinea (0°N 0°E)
```
```
Apia, Samoa (western side of the Date Line)
```
```
Nukuʻalofa, Tonga (eastern side of the Date Line)
```
```
Suva Harbour, Fiji (near the International Date Line)
```
```
〒559-0034 大阪府大阪市住之江区南港北2丁目 インテックス大阪 (INTEX Osaka, Nankō-kita 2-chōme)
```
```
Keflavíkurflugvöllur (KEF) Cargo, 235 Reykjanesbær, Iceland
```
```
〒542-0071 大阪府大阪市中央区道頓堀2丁目 (Dōtonbori 2-chōme, Chūō-ku, Osaka)
```
```
〒542-0076 大阪府大阪市中央区難波1丁目 (Namba 1-chōme, Chūō-ku, Osaka)
```
```
〒544-0034 大阪府大阪市生野区桃谷5丁目 (Momodani 5-chōme, Ikuno-ku, Osaka)
```
```
〒543-0051 大阪府大阪市天王寺区四天王寺1丁目 (Shitennōji 1-chōme, Tennōji-ku, Osaka)
```
```
〒532-0011 大阪府大阪市淀川区西中島5丁目 新大阪駅 (Shin-Osaka Station, Nishinakajima 5-chōme)
```
```
〒530-0001 大阪府大阪市北区梅田3丁目 大阪駅 (Osaka Station, Umeda 3-chōme, Kita-ku, Osaka)
```
```
“Null Island” floating platform, Gulf of Guinea (0,0)
```
```
“Null Island” floating platform, Gulf of Guinea (0,0) — secondary deck
```
```
International Date Line buoy (east side), equatorial Pacific
```
```
International Date Line buoy (west side), equatorial Pacific
```
```
Polar cache “NP-90”, North Pole (no street address)
```
```
Amundsen–Scott marker zone, South Pole, Antarctica
```
```
Ikeja City Mall, Gate A, Obafemi Awolowo Way, Ikeja, Lagos, Nigeria
```
```
Ikeja City Mall, Loading Bay Gate B (rear entrance), Ikeja, Lagos, Nigeria
```
```
Yaba College of Technology, Yaba, Lagos, Nigeria
```
```
Garki Area 11, Yakubu Gowon Crescent, Abuja (FCT), Nigeria
```
```
Wuse Market (Gate 3), Wuse Zone 5, Abuja (FCT), Nigeria
```
```
Kariobangi North, near the Kenya Power offices, Nairobi, Kenya
```
```
Jomo Kenyatta International Airport (JKIA), Arrivals, Nairobi, Kenya
```
```
Greenhouse Mall, Ngong Road, Nairobi, Kenya
```
```
Papeete Ferry Terminal, Tahiti, French Polynesia
```
```
Tiksi Port, Sakha Republic, Russia (Arctic coast)
```
```
Nuuk Airport Cargo Gate, Nuuk, Greenland
```
```
Blue Port Consolidation Hub, Port of Rotterdam, Netherlands
```
```
Chatham Islands Wharf, Waitangi, New Zealand (near the Date Line)
```
```
Hanga Roa Airfield Cargo Shed, Rapa Nui (Easter Island), Chile
```
```
Longyearbyen Logistics Yard, Svalbard, Norway
```
```
Route de l’Ourika, Km 12 (point relais), Marrakech-Safi, Morocco
```
```
Gueliz, Avenue Mohammed V (près du café), Marrakech 40000, Morocco
```
```
Aéroport Marrakech‑Menara (Arrivées / Fret), Marrakech, Morocco
```
```
TECA Cargas (GRU), Rod. Hélio Smidt, Guarulhos - SP, Brazil
```
```
USP Cidade Universitária, Portaria 1, Butantã, São Paulo - SP, Brazil
```
```
Cidade Tiradentes (Base Comunitária), São Paulo - SP, Brazil
```
```
Frederiksberg parcel desk, Copenhagen, Denmark
```
```
Unnamed dirt track, “Kilometer 0” marker, roadside pull-off
```
```
Unnamed dirt track, “Kilometer 0” marker, opposite shoulder
```
```
Virtual pickup point “Cloud Locker 7” (no physical street address)
```
```
Virtual delivery endpoint “Cloud Locker 8” (no physical street address)
```
```
Kenyatta Market, back service gate, Nairobi, Kenya
```
```
Kenyatta Market, main entrance, Nairobi, Kenya
```
```
Mercado Central de Santiago, San Pablo 967, Santiago Centro, Chile
```
```
Armários de Retirada, Estação Luz, Praça da Luz s/n, São Paulo - SP, 01120-010, Brasil
```
```
Safdarjung Hospital – Stores Gate, Ansari Nagar West, New Delhi 110029, India
```
```
Indira Gandhi International Airport (IGI) – Cargo Terminal, New Delhi 110037, India
```
```
Narela Cold Chain Warehouse, Sector A-9, Narela, Delhi 110040, India
```
```
AIIMS New Delhi – Logistics Dock, Sri Aurobindo Marg, New Delhi 110029, India
```
```
आज़ादपुर मंडी, गेट नं. 2 (Azadpur Mandi Gate 2), New Delhi, Delhi 110033, India
```
```
Ghaziabad New Bus Adda (Service Road), Ghaziabad, Uttar Pradesh 201001, India
```
```
Okhla Phase II – Small Business Cluster, New Delhi 110020, India
```
```
Connaught Place (CP), Inner Circle, New Delhi 110001, India
```
```
Gurugram Sector 29 Market, Gurugram, Haryana 122001, India
```
```
Noida Sector 18 Metro Exit (Pickup Point), Noida, Uttar Pradesh 201301, India
```
```
Ridge trail marker “7A”, Sơn Đoòng perimeter staging area, Quảng Bình, Việt Nam
```
```

```
```
PO Box 0 (general delivery), Reykjavík 101, Iceland
```
```
Side door (no signage), Calle de Bolívar, Centro Histórico, Ciudad de México, México
```
```
Auckland Airport (International Arrivals), Ray Emery Dr, Auckland 2022, New Zealand
```
```

```
```
Arctic ice camp waypoint (near the pole)
```
```
Kiritimati (Christmas Island) cargo pier, Kiribati
```
```
Howrah Station parcel counter, Kolkata, India
```
```
Devonport Ferry Terminal, Queens Parade, Devonport, Auckland 0624, New Zealand
```
```
Auckland Airport Freight Precinct, Ray Emery Dr, Māngere, Auckland 2022, New Zealand
```
```
Auckland City Hospital – Loading Bay, Park Rd, Grafton, Auckland 1023, New Zealand
```
```
Britomart Transport Centre, 8-10 Queen St, Auckland 1010, New Zealand
```
```
잠실역 7번출구 (Jamsil Station Exit 7), 송파구, 서울, South Korea
```
```
인천국제공항 화물터미널 (Incheon Int’l Airport Cargo), Incheon, South Korea
```
```
구로디지털단지역 (Guro Digital Complex), 구로구, 서울, South Korea
```
```
롯데월드타워 물류출입구 (Lotte World Tower Receiving), 300 Olympic-ro, 송파구, 서울
```
```
코엑스 (COEX Mall Delivery Bay), 강남구, 서울, South Korea
```
```
서울대학교병원 물품하역장 (SNUH Receiving), 종로구, 서울, South Korea
```
```
강남대로 396 (Gangnam-daero 396, Office Reception), 강남구, 서울, South Korea
```
```
성수동 공방거리 (Seongsu Workshop Street), 성동구, 서울, South Korea
```
```
Pedestrian-only gate, Parliament Square perimeter, London, UK
```
```
Pickup window “窗口B”, West Kowloon Station service level, Hong Kong
```
```
GPO Poste Restante counter, Central, Hong Kong
```
```
Research float “MICRO-1”, coastal test basin
```
```
Batam Center ferry terminal locker bank, Batam, Indonesia
```
```
“Dateline East” marker buoy, open ocean
```
```
“Dateline West” marker buoy, open ocean
```
```
   
```
```
Research float “MICRO-2”, coastal test basin
```
```
Cité Soleil transfer point, Port-au-Prince, Haïti
```
```
Collection kiosk, Changi Airport T2 service road, Singapore
```
```
AIIMS Main Gate, Sri Aurobindo Marg, New Delhi 110029, India
```
```
Connaught Place, Inner Circle, Gate near Rajiv Chowk Metro Exit 6, New Delhi 110001, India
```
```
JAFZA Gate 5, Warehouse Cluster J, Dubai, UAE
```
```
Al Fahidi Historical Neighbourhood, Bur Dubai, UAE
```
```
Dubai Marina, The Walk (JBR), Dubai, UAE
```
```
Terminal Terrestre de Cusco, Av. Industrial, Cusco, Perú
```
```
Iqaluit cargo shed, Nunavut, Canada
```
```
Port-aux-Français supply pier, Kerguelen Islands (TAAF)
```
```
Community Parcel Locker Bank #7, Avenida de la Constitución, Seville, Spain
```
```
Remote waypoint on the 180th meridian (pickup marker)
```
```
Dubai Marina Mall – Receiving Bay, Dubai, UAE
```
```
Al Quoz Industrial Area 3 – Loading Gate, Dubai, UAE
```
```
Downtown Dubai – Souk Al Bahar Service Entrance, Dubai, UAE
```
```
Dubai Silicon Oasis – Tech Park Delivery Point, Dubai, UAE
```
```
Kimironko Market (Amasoko ya Kimironko), Kigali, Rwanda
```
```
مطار دبي الدولي DXB – Cargo Village, Dubai, UAE
```
```
Kigali Convention Centre, KG 2 Roundabout, Kigali, Rwanda
```
```
Jebel Ali Free Zone (JAFZA) Warehouse Block M, Dubai, UAE
```
```
Kigali Special Economic Zone (KSEZ), Masoro, Rwanda
```
```
Kigali International Airport (Kanombe) – Cargo/Stores Gate, Rwanda
```
```
Nyabugogo Bus Terminal – Parcel Point, Kigali, Rwanda
```
```
Cargo cage “K-17”, Keleti pályaudvar service tunnel, Budapest, Hungary
```
```
〒100-0005 東京都千代田区丸の内1丁目 地下搬入口 (地下B2), Japan
```
```
PO Box 000, General Delivery counter, Stanley, Falkland Islands
```
```
Long-form address: Unit 9999, Tower “A”, Mega-Complex “Seven Rivers”, District 12, Sector 4, Block 27, Lot 3 (rear ramp), Ciudad del Este, Paraguay
```
```
Field drop “Outcrop-Δ”, Simpson Desert track marker, Australia
```
```
Entrepôt Marchand, 8 Rue du Parc des Vergers, 94310 Orly, France
```
```
Paris (zone de livraison à confirmer par le destinataire)
```

| Invalid Lat/Lon | 
|---| 
```
Invalid Lat: -89.9999 Lon: -45.0 for address: Antarctic field depot waypoint (near the pole)
```

| Invalid Twitters | 
|---| 
```
@kenjisato_berlin
```
```
@Amina_الرحلات
```
```
@斉藤ひろこ
```
```
@dfernandez_travel
```
```
@mateusferreira_sp
```
```
@བོད་སྐྱེལ
```
```
@tamaki_ecogrocer
```
```
@rosa_quispe_cusco
```
```
@francois_dubois_qc
```
```
@ahmed_الطلبات_السريعة_2026
```
```
@umuryango_clinic
```

