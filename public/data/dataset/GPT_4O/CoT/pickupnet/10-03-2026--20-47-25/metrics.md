# Generation 1
## Category baseline
```
!new Driver('driver1')
!driver1.id := 'DR-101'
!driver1.name := 'Luis Gonzalez'

!new Driver('driver2')
!driver2.id := 'DR-102'
!driver2.name := 'Sarah Tan'

!new Shipment('shipment1')
!shipment1.id := 'SH-501'
!shipment1.status := #UNDERWAY

!new Shipment('shipment2')
!shipment2.id := 'SH-502'
!shipment2.status := #DELIVERED

!new Address('address1')
!address1.text := '123 Elm Street, Brooklyn, NY'

!new GeoLocation('geoLocation1')
!geoLocation1.latitude := 40.6782
!geoLocation1.longitude := -73.9442

!insert (address1, geoLocation1) into AddressContainsGeoLocation

!new Address('address2')
!address2.text := '456 Maple Avenue, Manhattan, NY'

!new GeoLocation('geoLocation2')
!geoLocation2.latitude := 40.7831
!geoLocation2.longitude := -73.9712

!insert (address2, geoLocation2) into AddressContainsGeoLocation

!new Address('address3')
!address3.text := '789 Broadway, Queens, NY'

!new GeoLocation('geoLocation3')
!geoLocation3.latitude := 40.7282
!geoLocation3.longitude := -73.7949

!insert (address3, geoLocation3) into AddressContainsGeoLocation

!new Address('address4')
!address4.text := '160 Central Park West, NY'

!new GeoLocation('geoLocation4')
!geoLocation4.latitude := 40.7825
!geoLocation4.longitude := -73.9654

!insert (address4, geoLocation4) into AddressContainsGeoLocation

!new Station('station1')

!new Customer('customer1')
!customer1.id := 'CUST-301'
!customer1.name := 'Alex Johnson'
!customer1.twitterUserName := '@alexJ_Trader'

!new Customer('customer2')
!customer2.id := 'CUST-302'
!customer2.name := 'Nina Patel'
!customer2.twitterUserName := '@nina_world'

!insert (driver1, shipment1) into DriverShipment
!insert (driver2, shipment2) into DriverShipment

!insert (shipment1, address1) into ShipmentContainsPickUpAddress
!insert (shipment2, address3) into ShipmentContainsPickUpAddress

!insert (shipment1, address2) into ShipmentContainsDeliveryAddress
!insert (shipment2, address4) into ShipmentContainsDeliveryAddress

!insert (customer1, shipment1) into CustomerConsistsOfShipment
!insert (customer2, shipment2) into CustomerConsistsOfShipment

!insert (station1, customer1) into StationContainsCustomer
!insert (station1, customer2) into StationContainsCustomer

!insert (station1, shipment1) into StationShipment
!insert (station1, shipment2) into StationShipment

!insert (station1, driver1) into StationContainsDriver
!insert (station1, driver2) into StationContainsDriver
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 59 | 0.00% |
| Multiplicities Errors | 0 | 18 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 2 | 4 | 50.00% |
| Lat/Lon (out of valid addresses) | 0 | 2 | 0.00% |
| Twitter | 0 | 2 | 0.00% |

| Invalid Addresses | 
|---| 
```
456 Maple Avenue, Manhattan, NY
```
```
123 Elm Street, Brooklyn, NY
```

## Category boundary
```
!new Driver('driver7')
!driver7.id := 'DR001'
!driver7.name := 'Kai Zhang'

!new Customer('customer7')
!customer7.id := 'CU100'
!customer7.name := 'Mario Garcia'
!customer7.twitterUserName := '@marioGarciaMX'

!new Shipment('shipment8')
!shipment8.id := 'SH600'
!shipment8.status := #NEW

!new Address('address15')
!address15.text := '123 Elm Street, Springfield, USA'

!new GeoLocation('geoLocation15')
!geoLocation15.latitude := 39.7837304
!geoLocation15.longitude := -100.4458825

!insert (address15, geoLocation15) into AddressContainsGeoLocation

!new Address('address16')
!address16.text := '789 Oak Avenue, Metropolis, USA'

!new GeoLocation('geoLocation16')
!geoLocation16.latitude := 38.627003
!geoLocation16.longitude := -90.199404

!insert (address16, geoLocation16) into AddressContainsGeoLocation

!new Station('station6')

!insert (driver7, shipment8) into DriverShipment

!insert (shipment8, address15) into ShipmentContainsPickUpAddress
!insert (shipment8, address16) into ShipmentContainsDeliveryAddress

!insert (customer7, shipment8) into CustomerConsistsOfShipment

!insert (station6, shipment8) into StationShipment
!insert (station6, driver7) into StationContainsDriver
!insert (station6, customer7) into StationContainsCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 30 | 0.00% |
| Multiplicities Errors | 0 | 9 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 2 | 2 | 100.00% |
| Lat/Lon (out of valid addresses) | 0 | 0 | 0.00% |
| Twitter | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
123 Elm Street, Springfield, USA
```
```
789 Oak Avenue, Metropolis, USA
```

## Category complex
```
!new Driver('driver4')
!driver4.id := 'DRV001'
!driver4.name := 'Kaito Tanaka'

!new Driver('driver5')
!driver5.id := 'DRV002'
!driver5.name := 'Alessandro Rossi'

!new Customer('customer4')
!customer4.id := 'CUST001'
!customer4.name := 'Maria Garcia'
!customer4.twitterUserName := '@mariag_spain'

!new Customer('customer5')
!customer5.id := 'CUST002'
!customer5.name := 'Jamal Ibrahim'
!customer5.twitterUserName := '@jamal_i_kg'

!new Address('address7')
!address7.text := 'Calle de Alcalá, 50, 28014 Madrid, Spain'

!new GeoLocation('geoLocation7')
!geoLocation7.latitude := 40.4167
!geoLocation7.longitude := -3.70325

!insert (address7, geoLocation7) into AddressContainsGeoLocation

!new Address('address8')
!address8.text := 'Avenida Paulista, 1578, São Paulo, Brazil'

!new GeoLocation('geoLocation8')
!geoLocation8.latitude := -23.563210
!geoLocation8.longitude := -46.654250

!insert (address8, geoLocation8) into AddressContainsGeoLocation

!new Address('address9')
!address9.text := '2nd Avenue, 43rd Street, New York, NY, USA'

!new GeoLocation('geoLocation9')
!geoLocation9.latitude := 40.750610
!geoLocation9.longitude := -73.993520

!insert (address9, geoLocation9) into AddressContainsGeoLocation

!new Address('address10')
!address10.text := 'P.O. Box 895, Shuwaikh, Kuwait'

!new GeoLocation('geoLocation10')
!geoLocation10.latitude := 29.36972
!geoLocation10.longitude := 47.97833

!insert (address10, geoLocation10) into AddressContainsGeoLocation

!new Shipment('shipment4')
!shipment4.id := 'SHIP001'
!shipment4.status := #DELIVERED

!new Shipment('shipment5')
!shipment5.id := 'SHIP002'
!shipment5.status := #UNDERWAY

!new Station('station3')

!new Station('station4')

!insert (driver4, shipment4) into DriverShipment
!insert (driver5, shipment5) into DriverShipment

!insert (shipment4, address7) into ShipmentContainsPickUpAddress
!insert (shipment4, address8) into ShipmentContainsDeliveryAddress

!insert (shipment5, address9) into ShipmentContainsPickUpAddress
!insert (shipment5, address10) into ShipmentContainsDeliveryAddress

!insert (customer4, shipment4) into CustomerConsistsOfShipment
!insert (customer5, shipment5) into CustomerConsistsOfShipment

!insert (station3, customer4) into StationContainsCustomer
!insert (station4, customer5) into StationContainsCustomer

!insert (station3, driver4) into StationContainsDriver
!insert (station4, driver5) into StationContainsDriver

!insert (station3, shipment4) into StationShipment
!insert (station4, shipment5) into StationShipment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 60 | 0.00% |
| Multiplicities Errors | 0 | 18 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 0 | 4 | 0.00% |
| Lat/Lon (out of valid addresses) | 0 | 4 | 0.00% |
| Twitter | 0 | 2 | 0.00% |

## Category edge
```
!new Driver('driver3')
!driver3.id := 'DRV123456'
!driver3.name := 'Isabella NoRoute'

!new Shipment('shipment3')
!shipment3.id := 'SHP665544'
!shipment3.status := #NEW

!new Address('address5')
!address5.text := 'Top of Mount Roraima, Venezuela'

!new GeoLocation('geoLocation5')
!geoLocation5.latitude := 5.141743
!geoLocation5.longitude := -60.763992

!insert (address5, geoLocation5) into AddressContainsGeoLocation

!new Address('address6')
!address6.text := 'Phugtal Monastery, India'

!new GeoLocation('geoLocation6')
!geoLocation6.latitude := 33.309199
!geoLocation6.longitude := 77.028687

!insert (address6, geoLocation6) into AddressContainsGeoLocation

!new Customer('customer3')
!customer3.id := 'CUS987654'
!customer3.name := 'Remote Explorer'
!customer3.twitterUserName := '@ExplorerRemote'

!new Station('station2')

!insert (shipment3, address5) into ShipmentContainsPickUpAddress
!insert (shipment3, address6) into ShipmentContainsDeliveryAddress

!insert (customer3, shipment3) into CustomerConsistsOfShipment

!insert (station2, customer3) into StationContainsCustomer
!insert (station2, driver3) into StationContainsDriver
!insert (station2, shipment3) into StationShipment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 29 | 0.00% |
| Multiplicities Errors | 0 | 8 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 2 | 2 | 100.00% |
| Lat/Lon (out of valid addresses) | 0 | 0 | 0.00% |
| Twitter | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
Phugtal Monastery, India
```
```
Top of Mount Roraima, Venezuela
```

## Category invalid
```
!new Driver('driver6')
!driver6.id := 'D004'
!driver6.name := 'Gabriella Ruiz'

!new Shipment('shipment6')
!shipment6.id := 'S1001'
!shipment6.status := #ASSIGNED

!new Shipment('shipment7')
!shipment7.id := 'S1002'
!shipment7.status := #UNDERWAY

!new Address('address11')
!address11.text := '175 London Street, São Paulo, Brazil'

!new GeoLocation('geoLocation11')
!geoLocation11.latitude := -23.550520
!geoLocation11.longitude := -46.633308

!insert (address11, geoLocation11) into AddressContainsGeoLocation

!new Address('address12')
!address12.text := '389 Rio Avenue, Rio de Janeiro, Brazil'

!new GeoLocation('geoLocation12')
!geoLocation12.latitude := -22.906847
!geoLocation12.longitude := -43.172896

!insert (address12, geoLocation12) into AddressContainsGeoLocation

!new Address('address13')
!address13.text := '30 Avenida Siempre Viva, Lima, Peru'

!new GeoLocation('geoLocation13')
!geoLocation13.latitude := -12.046373
!geoLocation13.longitude := -77.042754

!insert (address13, geoLocation13) into AddressContainsGeoLocation

!new Address('address14')
!address14.text := '50 Rivadavia, Buenos Aires, Argentina'

!new GeoLocation('geoLocation14')
!geoLocation14.latitude := -34.603722
!geoLocation14.longitude := -58.381592

!insert (address14, geoLocation14) into AddressContainsGeoLocation

!new Customer('customer6')
!customer6.id := 'C007'
!customer6.name := 'Tiago Martins'
!customer6.twitterUserName := '@tiagovnts'

!new Station('station5')

!insert (driver6, shipment6) into DriverShipment
!insert (driver6, shipment7) into DriverShipment

!insert (shipment6, address11) into ShipmentContainsPickUpAddress
!insert (shipment6, address12) into ShipmentContainsDeliveryAddress

!insert (shipment7, address13) into ShipmentContainsPickUpAddress
!insert (shipment7, address14) into ShipmentContainsDeliveryAddress

!insert (customer6, shipment6) into CustomerConsistsOfShipment
!insert (customer6, shipment7) into CustomerConsistsOfShipment

!insert (station5, shipment6) into StationShipment
!insert (station5, shipment7) into StationShipment

!insert (station5, driver6) into StationContainsDriver
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 15 | 6.67% |
| Invariants Errors (Not included on General) | 0 | 4 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `StationContainsCustomer':
  Object `customer6' of class `Customer' is connected to 0 objects of class `Station'
  at association end `station' but the multiplicity is specified as `1'.
```

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 2 | 4 | 50.00% |
| Lat/Lon (out of valid addresses) | 0 | 2 | 0.00% |
| Twitter | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
175 London Street, São Paulo, Brazil
```
```
50 Rivadavia, Buenos Aires, Argentina
```

## Generation 1 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 227 | 0.00% |
| Multiplicities Errors | 0 | 53 | 0.00% |
| Invariants Errors | 0 | 16 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 15 | 6.67% |
| Invariants Errors (Not included on General) | 0 | 4 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `StationContainsCustomer':
  Object `customer6' of class `Customer' is connected to 0 objects of class `Station'
  at association end `station' but the multiplicity is specified as `1'.
```

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 8 | 16 | 50.00% |
| Lat/Lon (out of valid addresses) | 0 | 8 | 0.00% |
| Twitter | 0 | 7 | 0.00% |

| Invalid Addresses | 
|---| 
```
456 Maple Avenue, Manhattan, NY
```
```
123 Elm Street, Brooklyn, NY
```
```
123 Elm Street, Springfield, USA
```
```
789 Oak Avenue, Metropolis, USA
```
```
Phugtal Monastery, India
```
```
Top of Mount Roraima, Venezuela
```
```
175 London Street, São Paulo, Brazil
```
```
50 Rivadavia, Buenos Aires, Argentina
```

# Generation 2
## Category baseline
```
!new Driver('driver8')
!driver8.id := 'DR-201'
!driver8.name := 'Jake Morrison'

!new Shipment('shipment9')
!shipment9.id := 'SH-601'
!shipment9.status := #NEW

!new Shipment('shipment10')
!shipment10.id := 'SH-602'
!shipment10.status := #ASSIGNED

!new Shipment('shipment11')
!shipment11.id := 'SH-603'
!shipment11.status := #UNDERWAY

!new Address('address17')
!address17.text := '15 Ocean Drive, Bondi Beach, NSW'

!new GeoLocation('geoLocation17')
!geoLocation17.latitude := -33.8915
!geoLocation17.longitude := 151.2767

!insert (address17, geoLocation17) into AddressContainsGeoLocation

!new Address('address18')
!address18.text := '220 George Street, Sydney CBD, NSW'

!new GeoLocation('geoLocation18')
!geoLocation18.latitude := -33.8650
!geoLocation18.longitude := 151.2094

!insert (address18, geoLocation18) into AddressContainsGeoLocation

!new Address('address19')
!address19.text := '34 King Road, Parramatta, NSW'

!new GeoLocation('geoLocation19')
!geoLocation19.latitude := -33.8146
!geoLocation19.longitude := 151.0034

!insert (address19, geoLocation19) into AddressContainsGeoLocation

!new Address('address20')
!address20.text := '100 Main Street, North Sydney, NSW'

!new GeoLocation('geoLocation20')
!geoLocation20.latitude := -33.8393
!geoLocation20.longitude := 151.2093

!insert (address20, geoLocation20) into AddressContainsGeoLocation

!new Address('address21')
!address21.text := '50 Mountain View, Blue Mountains, NSW'

!new GeoLocation('geoLocation21')
!geoLocation21.latitude := -33.7123
!geoLocation21.longitude := 150.3119

!insert (address21, geoLocation21) into AddressContainsGeoLocation

!new Address('address22')
!address22.text := '15 Park Lane, Manly Beach, NSW'

!new GeoLocation('geoLocation22')
!geoLocation22.latitude := -33.7979
!geoLocation22.longitude := 151.2886

!insert (address22, geoLocation22) into AddressContainsGeoLocation

!new Station('station7')

!new Station('station8')

!new Customer('customer8')
!customer8.id := 'CUST-401'
!customer8.name := 'Emily Wong'
!customer8.twitterUserName := '@emily.travel'

!new Customer('customer9')
!customer9.id := 'CUST-402'
!customer9.name := 'Rajesh Kumar'
!customer9.twitterUserName := '@rajeshSydney'

!insert (driver8, shipment10) into DriverShipment
!insert (driver8, shipment11) into DriverShipment

!insert (shipment9, address17) into ShipmentContainsPickUpAddress
!insert (shipment10, address19) into ShipmentContainsPickUpAddress
!insert (shipment11, address21) into ShipmentContainsPickUpAddress

!insert (shipment9, address18) into ShipmentContainsDeliveryAddress
!insert (shipment10, address20) into ShipmentContainsDeliveryAddress
!insert (shipment11, address22) into ShipmentContainsDeliveryAddress

!insert (customer8, shipment9) into CustomerConsistsOfShipment
!insert (customer8, shipment11) into CustomerConsistsOfShipment
!insert (customer9, shipment10) into CustomerConsistsOfShipment

!insert (station7, customer8) into StationContainsCustomer
!insert (station7, customer9) into StationContainsCustomer

!insert (station7, shipment9) into StationShipment
!insert (station7, shipment10) into StationShipment
!insert (station8, shipment11) into StationShipment

!insert (station7, driver8) into StationContainsDriver
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 75 | 0.00% |
| Multiplicities Errors | 0 | 23 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 5 | 6 | 83.33% |
| Lat/Lon (out of valid addresses) | 0 | 1 | 0.00% |
| Twitter | 1 | 2 | 50.00% |

| Invalid Addresses | 
|---| 
```
100 Main Street, North Sydney, NSW
```
```
50 Mountain View, Blue Mountains, NSW
```
```
15 Park Lane, Manly Beach, NSW
```
```
15 Ocean Drive, Bondi Beach, NSW
```
```
34 King Road, Parramatta, NSW
```

| Invalid Twitters | 
|---| 
```
@emily.travel
```

## Category boundary
```
!new Driver('driver18')
!driver18.id := 'DR999'
!driver18.name := 'Amira Nasser'

!new Customer('customer15')
!customer15.id := 'CU999'
!customer15.name := 'Aiko Tanaka'
!customer15.twitterUserName := '@tanakaAikoJP'

!new Shipment('shipment18')
!shipment18.id := 'SH900'
!shipment18.status := #NEW

!new Shipment('shipment19')
!shipment19.id := 'SH901'
!shipment19.status := #DELIVERED

!new Address('address37')
!address37.text := '10 Downing Street, London, UK'

!new GeoLocation('geoLocation37')
!geoLocation37.latitude := 51.5033630
!geoLocation37.longitude := -0.1276250

!insert (address37, geoLocation37) into AddressContainsGeoLocation

!new Address('address38')
!address38.text := '221B Baker Street, London, UK'

!new GeoLocation('geoLocation38')
!geoLocation38.latitude := 51.523767
!geoLocation38.longitude := -0.1585557

!insert (address38, geoLocation38) into AddressContainsGeoLocation

!new Address('address39')
!address39.text := '15 Rue de Rivoli, Paris, France'

!new GeoLocation('geoLocation39')
!geoLocation39.latitude := 48.855372
!geoLocation39.longitude := 2.341442

!insert (address39, geoLocation39) into AddressContainsGeoLocation

!new Address('address40')
!address40.text := '1600 Pennsylvania Ave NW, Washington, DC, USA'

!new GeoLocation('geoLocation40')
!geoLocation40.latitude := 38.897676
!geoLocation40.longitude := -77.036530

!insert (address40, geoLocation40) into AddressContainsGeoLocation

!new Station('station14')

!insert (shipment18, address37) into ShipmentContainsPickUpAddress
!insert (shipment18, address38) into ShipmentContainsDeliveryAddress

!insert (shipment19, address39) into ShipmentContainsPickUpAddress
!insert (shipment19, address40) into ShipmentContainsDeliveryAddress

!insert (customer15, shipment18) into CustomerConsistsOfShipment
!insert (customer15, shipment19) into CustomerConsistsOfShipment

!insert (station14, customer15) into StationContainsCustomer
!insert (station14, shipment18) into StationShipment
!insert (station14, shipment19) into StationShipment
!insert (station14, driver18) into StationContainsDriver

!insert (driver18, shipment19) into DriverShipment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 49 | 0.00% |
| Multiplicities Errors | 0 | 15 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 0 | 4 | 0.00% |
| Lat/Lon (out of valid addresses) | 0 | 4 | 0.00% |
| Twitter | 0 | 1 | 0.00% |

## Category complex
```
!new Driver('driver10')
!driver10.id := 'DRV003'
!driver10.name := 'Elif Demir'

!new Driver('driver11')
!driver11.id := 'DRV004'
!driver11.name := 'Bogdan Petrov'

!new Customer('customer11')
!customer11.id := 'CUST003'
!customer11.name := 'Omar Al-Farsi'
!customer11.twitterUserName := '@omar_af_uae'

!new Customer('customer12')
!customer12.id := 'CUST004'
!customer12.name := 'Sofia Müller'
!customer12.twitterUserName := '@mueller_sofia'

!new Customer('customer13')
!customer13.id := 'CUST005'
!customer13.name := 'Emma Johansson'
!customer13.twitterUserName := '@emma_j_swe'

!new Address('address27')
!address27.text := 'Istiklal Avenue, Beyoğlu, Istanbul, Turkey'

!new GeoLocation('geoLocation27')
!geoLocation27.latitude := 41.04093
!geoLocation27.longitude := 28.98790

!insert (address27, geoLocation27) into AddressContainsGeoLocation

!new Address('address28')
!address28.text := 'Long Acre, Covent Garden, London, UK'

!new GeoLocation('geoLocation28')
!geoLocation28.latitude := 51.51121
!geoLocation28.longitude := -0.12513

!insert (address28, geoLocation28) into AddressContainsGeoLocation

!new Address('address29')
!address29.text := 'Nevsky Prospekt, 22, Saint Petersburg, Russia'

!new GeoLocation('geoLocation29')
!geoLocation29.latitude := 59.93106
!geoLocation29.longitude := 30.36157

!insert (address29, geoLocation29) into AddressContainsGeoLocation

!new Address('address30')
!address30.text := 'Via Roma, 15, Milan, Italy'

!new GeoLocation('geoLocation30')
!geoLocation30.latitude := 45.46542
!geoLocation30.longitude := 9.18523

!insert (address30, geoLocation30) into AddressContainsGeoLocation

!new Address('address31')
!address31.text := 'Drottninggatan, Stockholm, Sweden'

!new GeoLocation('geoLocation31')
!geoLocation31.latitude := 59.334591
!geoLocation31.longitude := 18.063240

!insert (address31, geoLocation31) into AddressContainsGeoLocation

!new Address('address32')
!address32.text := 'Khalifa Street, Abu Dhabi, UAE'

!new GeoLocation('geoLocation32')
!geoLocation32.latitude := 24.466667
!geoLocation32.longitude := 54.366667

!insert (address32, geoLocation32) into AddressContainsGeoLocation

!new Shipment('shipment13')
!shipment13.id := 'SHIP003'
!shipment13.status := #NEW

!new Shipment('shipment14')
!shipment14.id := 'SHIP004'
!shipment14.status := #ASSIGNED

!new Shipment('shipment15')
!shipment15.id := 'SHIP005'
!shipment15.status := #UNDERWAY

!new Station('station10')

!new Station('station11')

!new Station('station12')

!insert (shipment13, address27) into ShipmentContainsPickUpAddress
!insert (shipment13, address28) into ShipmentContainsDeliveryAddress

!insert (shipment14, address29) into ShipmentContainsPickUpAddress
!insert (shipment14, address30) into ShipmentContainsDeliveryAddress

!insert (shipment15, address31) into ShipmentContainsPickUpAddress
!insert (shipment15, address32) into ShipmentContainsDeliveryAddress

!insert (customer12, shipment13) into CustomerConsistsOfShipment
!insert (customer11, shipment14) into CustomerConsistsOfShipment
!insert (customer13, shipment15) into CustomerConsistsOfShipment

!insert (driver10, shipment14) into DriverShipment
!insert (driver11, shipment15) into DriverShipment

!insert (station10, customer11) into StationContainsCustomer
!insert (station10, driver10) into StationContainsDriver
!insert (station10, shipment14) into StationShipment

!insert (station11, customer13) into StationContainsCustomer
!insert (station11, driver11) into StationContainsDriver
!insert (station11, shipment15) into StationShipment

!insert (station12, customer12) into StationContainsCustomer
!insert (station12, shipment13) into StationShipment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 85 | 0.00% |
| Multiplicities Errors | 0 | 25 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 2 | 6 | 33.33% |
| Lat/Lon (out of valid addresses) | 0 | 4 | 0.00% |
| Twitter | 0 | 3 | 0.00% |

| Invalid Addresses | 
|---| 
```
Khalifa Street, Abu Dhabi, UAE
```
```
Nevsky Prospekt, 22, Saint Petersburg, Russia
```

## Category edge
```
!new Driver('driver9')
!driver9.id := 'DRV654321'
!driver9.name := 'Sam Flexroute'

!new Shipment('shipment12')
!shipment12.id := 'SHP112233'
!shipment12.status := #ASSIGNED

!new Address('address23')
!address23.text := '123 Old Street, Central City'

!new GeoLocation('geoLocation23')
!geoLocation23.latitude := 21.025288
!geoLocation23.longitude := 105.827149

!insert (address23, geoLocation23) into AddressContainsGeoLocation

!new Address('address24')
!address24.text := '150 New Avenue, Central City'

!new GeoLocation('geoLocation24')
!geoLocation24.latitude := 21.030484
!geoLocation24.longitude := 105.842695

!insert (address24, geoLocation24) into AddressContainsGeoLocation

!new Customer('customer10')
!customer10.id := 'CUS100100'
!customer10.name := 'Metro Buyer'
!customer10.twitterUserName := '@HappyUrban'

!new Station('station9')

!insert (driver9, shipment12) into DriverShipment

!insert (shipment12, address23) into ShipmentContainsPickUpAddress
!insert (shipment12, address24) into ShipmentContainsDeliveryAddress

!insert (customer10, shipment12) into CustomerConsistsOfShipment

!insert (station9, driver9) into StationContainsDriver
!insert (station9, shipment12) into StationShipment
!insert (station9, customer10) into StationContainsCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 30 | 0.00% |
| Multiplicities Errors | 0 | 9 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 2 | 2 | 100.00% |
| Lat/Lon (out of valid addresses) | 0 | 0 | 0.00% |
| Twitter | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
123 Old Street, Central City
```
```
150 New Avenue, Central City
```

## Category invalid
```
!new Station('station13')

!new Driver('driver12')
!driver12.id := 'D005'
!driver12.name := 'Aisha Al-Nahyan'

!new Driver('driver13')
!driver13.id := 'D006'
!driver13.name := 'Yuto Takahashi'

!new Driver('driver14')
!driver14.id := 'D007'
!driver14.name := 'Heidi Svensson'

!new Driver('driver15')
!driver15.id := 'D008'
!driver15.name := 'Victor Mendez'

!new Driver('driver16')
!driver16.id := 'D009'
!driver16.name := 'Fatima Khan'

!new Driver('driver17')
!driver17.id := 'D010'
!driver17.name := 'Luka Popov'

!new Shipment('shipment16')
!shipment16.id := 'S2001'
!shipment16.status := #NEW

!new Address('address33')
!address33.text := '1200 Sheik Zayed Road, Dubai, UAE'

!new GeoLocation('geoLocation33')
!geoLocation33.latitude := 25.204849
!geoLocation33.longitude := 55.270782

!insert (address33, geoLocation33) into AddressContainsGeoLocation

!new Address('address34')
!address34.text := '432 Orchard Road, Singapore'

!new GeoLocation('geoLocation34')
!geoLocation34.latitude := 1.352083
!geoLocation34.longitude := 103.819836

!insert (address34, geoLocation34) into AddressContainsGeoLocation

!new Shipment('shipment17')
!shipment17.id := 'S2002'
!shipment17.status := #DELIVERED

!new Address('address35')
!address35.text := '500 Hay St, Perth, Australia'

!new GeoLocation('geoLocation35')
!geoLocation35.latitude := -31.950527
!geoLocation35.longitude := 115.860457

!insert (address35, geoLocation35) into AddressContainsGeoLocation

!new Address('address36')
!address36.text := '250 Avenida de las Artes, Santiago, Chile'

!new GeoLocation('geoLocation36')
!geoLocation36.latitude := -33.448890
!geoLocation36.longitude := -70.669265

!insert (address36, geoLocation36) into AddressContainsGeoLocation

!new Customer('customer14')
!customer14.id := 'C008'
!customer14.name := 'Manuella Costa'
!customer14.twitterUserName := '@manu_cost'

!insert (shipment16, address33) into ShipmentContainsPickUpAddress
!insert (shipment16, address34) into ShipmentContainsDeliveryAddress

!insert (shipment17, address35) into ShipmentContainsPickUpAddress
!insert (shipment17, address36) into ShipmentContainsDeliveryAddress

!insert (customer14, shipment16) into CustomerConsistsOfShipment
!insert (customer14, shipment17) into CustomerConsistsOfShipment

!insert (station13, driver12) into StationContainsDriver
!insert (station13, driver13) into StationContainsDriver
!insert (station13, driver14) into StationContainsDriver
!insert (station13, driver15) into StationContainsDriver
!insert (station13, driver16) into StationContainsDriver
!insert (station13, driver17) into StationContainsDriver
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 3 | 16 | 18.75% |
| Invariants Errors (Not included on General) | 0 | 4 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `StationShipment':
  Object `shipment17' of class `Shipment' is connected to 0 objects of class `Station'
  at association end `station' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `StationShipment':
  Object `shipment16' of class `Shipment' is connected to 0 objects of class `Station'
  at association end `station' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `StationContainsCustomer':
  Object `customer14' of class `Customer' is connected to 0 objects of class `Station'
  at association end `station' but the multiplicity is specified as `1'.
```

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 2 | 4 | 50.00% |
| Lat/Lon (out of valid addresses) | 0 | 2 | 0.00% |
| Twitter | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
1200 Sheik Zayed Road, Dubai, UAE
```
```
250 Avenida de las Artes, Santiago, Chile
```

## Generation 2 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 304 | 0.00% |
| Multiplicities Errors | 0 | 72 | 0.00% |
| Invariants Errors | 0 | 16 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 3 | 16 | 18.75% |
| Invariants Errors (Not included on General) | 0 | 4 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `StationShipment':
  Object `shipment17' of class `Shipment' is connected to 0 objects of class `Station'
  at association end `station' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `StationShipment':
  Object `shipment16' of class `Shipment' is connected to 0 objects of class `Station'
  at association end `station' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `StationContainsCustomer':
  Object `customer14' of class `Customer' is connected to 0 objects of class `Station'
  at association end `station' but the multiplicity is specified as `1'.
```

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 11 | 22 | 50.00% |
| Lat/Lon (out of valid addresses) | 0 | 11 | 0.00% |
| Twitter | 1 | 8 | 12.50% |

| Invalid Addresses | 
|---| 
```
100 Main Street, North Sydney, NSW
```
```
50 Mountain View, Blue Mountains, NSW
```
```
15 Park Lane, Manly Beach, NSW
```
```
15 Ocean Drive, Bondi Beach, NSW
```
```
34 King Road, Parramatta, NSW
```
```
Khalifa Street, Abu Dhabi, UAE
```
```
Nevsky Prospekt, 22, Saint Petersburg, Russia
```
```
123 Old Street, Central City
```
```
150 New Avenue, Central City
```
```
1200 Sheik Zayed Road, Dubai, UAE
```
```
250 Avenida de las Artes, Santiago, Chile
```

| Invalid Twitters | 
|---| 
```
@emily.travel
```

# Generation 3
## Category baseline
```
!new Driver('driver24')
!driver24.id := 'DR-301'
!driver24.name := 'Alyssa Tran'

!new Driver('driver25')
!driver25.id := 'DR-302'
!driver25.name := 'Mohamed Alawi'

!new Driver('driver26')
!driver26.id := 'DR-303'
!driver26.name := 'Deepa Roy'

!new Shipment('shipment28')
!shipment28.id := 'SH-701'
!shipment28.status := #ASSIGNED

!new Shipment('shipment29')
!shipment29.id := 'SH-702'
!shipment29.status := #NEW

!new Shipment('shipment30')
!shipment30.id := 'SH-703'
!shipment30.status := #DELIVERED

!new Shipment('shipment31')
!shipment31.id := 'SH-704'
!shipment31.status := #UNDERWAY

!new Address('address53')
!address53.text := '5 Lakeshore Blvd West, Etobicoke, ON'

!new GeoLocation('geoLocation53')
!geoLocation53.latitude := 43.6205
!geoLocation53.longitude := -79.4997

!insert (address53, geoLocation53) into AddressContainsGeoLocation

!new Address('address54')
!address54.text := '80 Bloor Street West, Downtown Toronto, ON'

!new GeoLocation('geoLocation54')
!geoLocation54.latitude := 43.6655
!geoLocation54.longitude := -79.3871

!insert (address54, geoLocation54) into AddressContainsGeoLocation

!new Address('address55')
!address55.text := '200 Main Street, Markham, ON'

!new GeoLocation('geoLocation55')
!geoLocation55.latitude := 43.8561
!geoLocation55.longitude := -79.3370

!insert (address55, geoLocation55) into AddressContainsGeoLocation

!new Address('address56')
!address56.text := '15 Richmond Hill Drive, Richmond Hill, ON'

!new GeoLocation('geoLocation56')
!geoLocation56.latitude := 43.8307
!geoLocation56.longitude := -79.4163

!insert (address56, geoLocation56) into AddressContainsGeoLocation

!new Address('address57')
!address57.text := '100 Finch Avenue West, North York, ON'

!new GeoLocation('geoLocation57')
!geoLocation57.latitude := 43.7807
!geoLocation57.longitude := -79.4146

!insert (address57, geoLocation57) into AddressContainsGeoLocation

!new Address('address58')
!address58.text := '50 Queen Street East, Downtown Toronto, ON'

!new GeoLocation('geoLocation58')
!geoLocation58.latitude := 43.6510
!geoLocation58.longitude := -79.3786

!insert (address58, geoLocation58) into AddressContainsGeoLocation

!new Address('address59')
!address59.text := '5 University Avenue, Toronto, ON'

!new GeoLocation('geoLocation59')
!geoLocation59.latitude := 43.6471
!geoLocation59.longitude := -79.3870

!insert (address59, geoLocation59) into AddressContainsGeoLocation

!new Address('address60')
!address60.text := '25 Sheppard Avenue East, North York, ON'

!new GeoLocation('geoLocation60')
!geoLocation60.latitude := 43.7613
!geoLocation60.longitude := -79.4111

!insert (address60, geoLocation60) into AddressContainsGeoLocation

!new Station('station21')

!new Station('station22')

!new Customer('customer21')
!customer21.id := 'CUST-501'
!customer21.name := "Liam O'Reilly"
!customer21.twitterUserName := '@liam_inTO'

!new Customer('customer22')
!customer22.id := 'CUST-502'
!customer22.name := 'Sophia Chan'
!customer22.twitterUserName := '@sophia_writes'

!new Customer('customer23')
!customer23.id := 'CUST-503'
!customer23.name := 'Omar Khan'
!customer23.twitterUserName := '@khanspeaks'

!insert (driver24, shipment28) into DriverShipment
!insert (driver25, shipment30) into DriverShipment
!insert (driver26, shipment31) into DriverShipment

!insert (shipment28, address53) into ShipmentContainsPickUpAddress
!insert (shipment29, address55) into ShipmentContainsPickUpAddress
!insert (shipment30, address57) into ShipmentContainsPickUpAddress
!insert (shipment31, address59) into ShipmentContainsPickUpAddress

!insert (shipment28, address54) into ShipmentContainsDeliveryAddress
!insert (shipment29, address56) into ShipmentContainsDeliveryAddress
!insert (shipment30, address58) into ShipmentContainsDeliveryAddress
!insert (shipment31, address60) into ShipmentContainsDeliveryAddress

!insert (customer21, shipment28) into CustomerConsistsOfShipment
!insert (customer22, shipment29) into CustomerConsistsOfShipment
!insert (customer22, shipment30) into CustomerConsistsOfShipment
!insert (customer23, shipment31) into CustomerConsistsOfShipment

!insert (station21, customer21) into StationContainsCustomer
!insert (station21, customer22) into StationContainsCustomer
!insert (station22, customer23) into StationContainsCustomer

!insert (station21, shipment28) into StationShipment
!insert (station21, shipment29) into StationShipment
!insert (station22, shipment30) into StationShipment
!insert (station22, shipment31) into StationShipment

!insert (station21, driver24) into StationContainsDriver
!insert (station21, driver25) into StationContainsDriver
!insert (station22, driver26) into StationContainsDriver
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 108 | 0.00% |
| Multiplicities Errors | 0 | 33 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 2 | 8 | 25.00% |
| Lat/Lon (out of valid addresses) | 0 | 6 | 0.00% |
| Twitter | 0 | 3 | 0.00% |

| Invalid Addresses | 
|---| 
```
5 Lakeshore Blvd West, Etobicoke, ON
```
```
15 Richmond Hill Drive, Richmond Hill, ON
```

## Category boundary
```
!new Driver('driver27')
!driver27.id := 'DR1234'
!driver27.name := 'Liam O\'Reilly'

!new Customer('customer24')
!customer24.id := 'CU2001'
!customer24.name := 'Fatima Al-Hassan'
!customer24.twitterUserName := '@fatimaMiddleEast'

!new Shipment('shipment32')
!shipment32.id := 'SH001'
!shipment32.status := #ASSIGNED

!new Shipment('shipment33')
!shipment33.id := 'SH002'
!shipment33.status := #UNDERWAY

!new Shipment('shipment34')
!shipment34.id := 'SH003'
!shipment34.status := #DELIVERED

!new Address('address61')
!address61.text := '1 Sahara Street, Casablanca, Morocco'

!new GeoLocation('geoLocation61')
!geoLocation61.latitude := 33.573110
!geoLocation61.longitude := -7.589843

!insert (address61, geoLocation61) into AddressContainsGeoLocation

!new Address('address62')
!address62.text := '5 Nile Crescent, Cairo, Egypt'

!new GeoLocation('geoLocation62')
!geoLocation62.latitude := 30.044420
!geoLocation62.longitude := 31.235712

!insert (address62, geoLocation62) into AddressContainsGeoLocation

!new Address('address63')
!address63.text := '3 Sunset Boulevard, Johannesburg, South Africa'

!new GeoLocation('geoLocation63')
!geoLocation63.latitude := -26.204103
!geoLocation63.longitude := 28.047305

!insert (address63, geoLocation63) into AddressContainsGeoLocation

!new Address('address64')
!address64.text := '100 Broadway, Sydney, Australia'

!new GeoLocation('geoLocation64')
!geoLocation64.latitude := -33.868820
!geoLocation64.longitude := 151.209296

!insert (address64, geoLocation64) into AddressContainsGeoLocation

!new Address('address65')
!address65.text := '350 Curry Street, Wellington, New Zealand'

!new GeoLocation('geoLocation65')
!geoLocation65.latitude := -41.286460
!geoLocation65.longitude := 174.776236

!insert (address65, geoLocation65) into AddressContainsGeoLocation

!new Station('station23')

!insert (driver27, shipment33) into DriverShipment

!insert (shipment32, address61) into ShipmentContainsPickUpAddress
!insert (shipment32, address62) into ShipmentContainsDeliveryAddress

!insert (shipment33, address61) into ShipmentContainsPickUpAddress
!insert (shipment33, address63) into ShipmentContainsDeliveryAddress

!insert (shipment34, address64) into ShipmentContainsPickUpAddress
!insert (shipment34, address65) into ShipmentContainsDeliveryAddress

!insert (customer24, shipment32) into CustomerConsistsOfShipment
!insert (customer24, shipment33) into CustomerConsistsOfShipment
!insert (customer24, shipment34) into CustomerConsistsOfShipment

!insert (station23, customer24) into StationContainsCustomer

!insert (station23, shipment32) into StationShipment
!insert (station23, shipment33) into StationShipment
!insert (station23, shipment34) into StationShipment

!insert (station23, driver27) into StationContainsDriver
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 62 | 0.00% |
| Multiplicities Errors | 0 | 20 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 4 | 5 | 80.00% |
| Lat/Lon (out of valid addresses) | 0 | 1 | 0.00% |
| Twitter | 1 | 1 | 100.00% |

| Invalid Addresses | 
|---| 
```
5 Nile Crescent, Cairo, Egypt
```
```
3 Sunset Boulevard, Johannesburg, South Africa
```
```
350 Curry Street, Wellington, New Zealand
```
```
1 Sahara Street, Casablanca, Morocco
```

| Invalid Twitters | 
|---| 
```
@fatimaMiddleEast
```

## Category complex
```
!new Driver('driver22')
!driver22.id := 'DRV005'
!driver22.name := 'Lucy Wang'

!new Driver('driver23')
!driver23.id := 'DRV006'
!driver23.name := 'Amir Khan'

!new Customer('customer18')
!customer18.id := 'CUST006'
!customer18.name := 'Nguyen Van'
!customer18.twitterUserName := '@nguyen_van_vn'

!new Customer('customer19')
!customer19.id := 'CUST007'
!customer19.name := 'Ethan Brown'
!customer19.twitterUserName := '@ethan_b_aus'

!new Customer('customer20')
!customer20.id := 'CUST008'
!customer20.name := 'Aiko Suzuki'
!customer20.twitterUserName := '@aiko_jpn'

!new Address('address47')
!address47.text := '123 Collins St, Melbourne, Australia'

!new GeoLocation('geoLocation47')
!geoLocation47.latitude := -37.813629
!geoLocation47.longitude := 144.963058

!insert (address47, geoLocation47) into AddressContainsGeoLocation

!new Address('address48')
!address48.text := 'Yasaka Shrine, Higashiyama, Kyoto, Japan'

!new GeoLocation('geoLocation48')
!geoLocation48.latitude := 35.00340
!geoLocation48.longitude := 135.77505

!insert (address48, geoLocation48) into AddressContainsGeoLocation

!new Address('address49')
!address49.text := 'Nguyen Hue St, District 1, Ho Chi Minh City, Vietnam'

!new GeoLocation('geoLocation49')
!geoLocation49.latitude := 10.77584
!geoLocation49.longitude := 106.700457

!insert (address49, geoLocation49) into AddressContainsGeoLocation

!new Address('address50')
!address50.text := 'Kowloon Bay, Hong Kong'

!new GeoLocation('geoLocation50')
!geoLocation50.latitude := 22.3129
!geoLocation50.longitude := 114.2258

!insert (address50, geoLocation50) into AddressContainsGeoLocation

!new Address('address51')
!address51.text := 'Sapporo Station, Kita, Sapporo, Japan'

!new GeoLocation('geoLocation51')
!geoLocation51.latitude := 43.0679
!geoLocation51.longitude := 141.3508

!insert (address51, geoLocation51) into AddressContainsGeoLocation

!new Address('address52')
!address52.text := 'Sydney Opera House, Sydney, Australia'

!new GeoLocation('geoLocation52')
!geoLocation52.latitude := -33.8568
!geoLocation52.longitude := 151.2153

!insert (address52, geoLocation52) into AddressContainsGeoLocation

!new Shipment('shipment25')
!shipment25.id := 'SHIP006'
!shipment25.status := #DELIVERED

!insert (shipment25, address47) into ShipmentContainsPickUpAddress
!insert (shipment25, address48) into ShipmentContainsDeliveryAddress

!insert (customer19, shipment25) into CustomerConsistsOfShipment
!insert (driver22, shipment25) into DriverShipment

!new Shipment('shipment26')
!shipment26.id := 'SHIP007'
!shipment26.status := #NEW

!insert (shipment26, address49) into ShipmentContainsPickUpAddress
!insert (shipment26, address50) into ShipmentContainsDeliveryAddress

!insert (customer18, shipment26) into CustomerConsistsOfShipment

!new Shipment('shipment27')
!shipment27.id := 'SHIP008'
!shipment27.status := #ASSIGNED

!insert (shipment27, address51) into ShipmentContainsPickUpAddress
!insert (shipment27, address52) into ShipmentContainsDeliveryAddress

!insert (customer20, shipment27) into CustomerConsistsOfShipment
!insert (driver23, shipment27) into DriverShipment

!new Station('station18')
!insert (station18, customer19) into StationContainsCustomer
!insert (station18, driver22) into StationContainsDriver
!insert (station18, shipment25) into StationShipment

!new Station('station19')
!insert (station19, customer18) into StationContainsCustomer
!insert (station19, shipment26) into StationShipment

!new Station('station20')
!insert (station20, customer20) into StationContainsCustomer
!insert (station20, driver23) into StationContainsDriver
!insert (station20, shipment27) into StationShipment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 85 | 0.00% |
| Multiplicities Errors | 0 | 25 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 2 | 6 | 33.33% |
| Lat/Lon (out of valid addresses) | 0 | 4 | 0.00% |
| Twitter | 0 | 3 | 0.00% |

| Invalid Addresses | 
|---| 
```
Sapporo Station, Kita, Sapporo, Japan
```
```
Kowloon Bay, Hong Kong
```

## Category edge
```
!new Driver('driver19')
!driver19.id := 'DRV999888'
!driver19.name := 'Alex Crossroads'

!new Shipment('shipment20')
!shipment20.id := 'SHP000111'
!shipment20.status := #UNDERWAY

!new Shipment('shipment21')
!shipment21.id := 'SHP000112'
!shipment21.status := #UNDERWAY

!new Shipment('shipment22')
!shipment22.id := 'SHP000113'
!shipment22.status := #UNDERWAY

!new Address('address41')
!address41.text := 'LogistiX Hub, Hamburg, Germany'

!new GeoLocation('geoLocation41')
!geoLocation41.latitude := 53.551086
!geoLocation41.longitude := 9.993682

!insert (address41, geoLocation41) into AddressContainsGeoLocation

!new Address('address42')
!address42.text := 'Depot France, Paris, France'

!new GeoLocation('geoLocation42')
!geoLocation42.latitude := 48.856613
!geoLocation42.longitude := 2.352222

!insert (address42, geoLocation42) into AddressContainsGeoLocation

!new Address('address43')
!address43.text := 'Barcelona Warehouse, Barcelona, Spain'

!new GeoLocation('geoLocation43')
!geoLocation43.latitude := 41.387917
!geoLocation43.longitude := 2.169919

!insert (address43, geoLocation43) into AddressContainsGeoLocation

!new Customer('customer16')
!customer16.id := 'CUS555666'
!customer16.name := 'Global Exporter Inc.'
!customer16.twitterUserName := '@GlobalExport'

!new Station('station15')

!insert (driver19, shipment20) into DriverShipment
!insert (driver19, shipment21) into DriverShipment
!insert (driver19, shipment22) into DriverShipment

!insert (shipment20, address41) into ShipmentContainsPickUpAddress
!insert (shipment21, address41) into ShipmentContainsPickUpAddress
!insert (shipment22, address41) into ShipmentContainsPickUpAddress

!insert (shipment20, address42) into ShipmentContainsDeliveryAddress
!insert (shipment21, address43) into ShipmentContainsDeliveryAddress
!insert (shipment22, address43) into ShipmentContainsDeliveryAddress

!insert (customer16, shipment20) into CustomerConsistsOfShipment
!insert (customer16, shipment21) into CustomerConsistsOfShipment
!insert (customer16, shipment22) into CustomerConsistsOfShipment

!insert (station15, driver19) into StationContainsDriver
!insert (station15, shipment20) into StationShipment
!insert (station15, shipment21) into StationShipment
!insert (station15, shipment22) into StationShipment
!insert (station15, customer16) into StationContainsCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 52 | 0.00% |
| Multiplicities Errors | 0 | 20 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 2 | 3 | 66.67% |
| Lat/Lon (out of valid addresses) | 0 | 1 | 0.00% |
| Twitter | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
LogistiX Hub, Hamburg, Germany
```
```
Depot France, Paris, France
```

## Category invalid
```
!new Shipment('shipment23')
!shipment23.id := 'S3001'
!shipment23.status := #ASSIGNED

!new Address('address44')
!address44.text := '250 Via San Francesco, Milan, Italy'

!new GeoLocation('geoLocation44')
!geoLocation44.latitude := 45.464664
!geoLocation44.longitude := 9.188540

!insert (address44, geoLocation44) into AddressContainsGeoLocation

!new Address('address45')
!address45.text := '500 Boulevard St. Germain, Paris, France'

!new GeoLocation('geoLocation45')
!geoLocation45.latitude := 48.858844
!geoLocation45.longitude := 2.294351

!insert (address45, geoLocation45) into AddressContainsGeoLocation

!insert (shipment23, address44) into ShipmentContainsPickUpAddress
!insert (shipment23, address45) into ShipmentContainsDeliveryAddress

!new Shipment('shipment24')
!shipment24.id := 'S3002'
!shipment24.status := #NEW

!new Address('address46')
!address46.text := '100 Piazza Navona, Rome, Italy'

!new GeoLocation('geoLocation46')
!geoLocation46.latitude := 41.902782
!geoLocation46.longitude := 12.496366

!insert (address46, geoLocation46) into AddressContainsGeoLocation

!insert (shipment24, address46) into ShipmentContainsPickUpAddress
!insert (shipment24, address45) into ShipmentContainsDeliveryAddress

!new Customer('customer17')
!customer17.id := 'C009'
!customer17.name := 'Ingrid Jansen'
!customer17.twitterUserName := '@ingrid_jan'

!insert (customer17, shipment23) into CustomerConsistsOfShipment
!insert (customer17, shipment24) into CustomerConsistsOfShipment

!new Driver('driver20')
!driver20.id := 'D011'
!driver20.name := 'Tomislav Kovac'

!insert (driver20, shipment23) into DriverShipment

!new Station('station16')
!insert (station16, shipment23) into StationShipment
!insert (station16, shipment24) into StationShipment
!insert (station16, driver20) into StationContainsDriver

!new Driver('driver21')
!driver21.id := 'D012'
!driver21.name := 'Maria Andrade'

!new Station('station17')
!insert (station17, driver21) into StationContainsDriver
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 14 | 7.14% |
| Invariants Errors (Not included on General) | 0 | 4 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `StationContainsCustomer':
  Object `customer17' of class `Customer' is connected to 0 objects of class `Station'
  at association end `station' but the multiplicity is specified as `1'.
```

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 2 | 3 | 66.67% |
| Lat/Lon (out of valid addresses) | 0 | 1 | 0.00% |
| Twitter | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
250 Via San Francesco, Milan, Italy
```
```
500 Boulevard St. Germain, Paris, France
```

## Generation 3 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 354 | 0.00% |
| Multiplicities Errors | 0 | 98 | 0.00% |
| Invariants Errors | 0 | 16 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 14 | 7.14% |
| Invariants Errors (Not included on General) | 0 | 4 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `StationContainsCustomer':
  Object `customer17' of class `Customer' is connected to 0 objects of class `Station'
  at association end `station' but the multiplicity is specified as `1'.
```

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 12 | 25 | 48.00% |
| Lat/Lon (out of valid addresses) | 0 | 13 | 0.00% |
| Twitter | 1 | 9 | 11.11% |

| Invalid Addresses | 
|---| 
```
5 Lakeshore Blvd West, Etobicoke, ON
```
```
15 Richmond Hill Drive, Richmond Hill, ON
```
```
5 Nile Crescent, Cairo, Egypt
```
```
3 Sunset Boulevard, Johannesburg, South Africa
```
```
350 Curry Street, Wellington, New Zealand
```
```
1 Sahara Street, Casablanca, Morocco
```
```
Sapporo Station, Kita, Sapporo, Japan
```
```
Kowloon Bay, Hong Kong
```
```
LogistiX Hub, Hamburg, Germany
```
```
Depot France, Paris, France
```
```
250 Via San Francesco, Milan, Italy
```
```
500 Boulevard St. Germain, Paris, France
```

| Invalid Twitters | 
|---| 
```
@fatimaMiddleEast
```

# Generation 4
## Category baseline
```
!new Driver('driver35')
!driver35.id := 'DR-401'
!driver35.name := 'Giovanna Carvalho'

!new Driver('driver36')
!driver36.id := 'DR-402'
!driver36.name := 'Mateus Silva'

!new Shipment('shipment44')
!shipment44.id := 'SH-801'
!shipment44.status := #DELIVERED

!new Shipment('shipment45')
!shipment45.id := 'SH-802'
!shipment45.status := #ASSIGNED

!new Shipment('shipment46')
!shipment46.id := 'SH-803'
!shipment46.status := #UNDERWAY

!new Shipment('shipment47')
!shipment47.id := 'SH-804'
!shipment47.status := #NEW

!new Address('address80')
!address80.text := 'Rua Augusta, 1500, Consolação, São Paulo, SP'

!new GeoLocation('geoLocation80')
!geoLocation80.latitude := -23.5558
!geoLocation80.longitude := -46.6619

!insert (address80, geoLocation80) into AddressContainsGeoLocation

!new Address('address81')
!address81.text := 'Av. Paulista, 900, Bela Vista, São Paulo, SP'

!new GeoLocation('geoLocation81')
!geoLocation81.latitude := -23.5631
!geoLocation81.longitude := -46.6543

!insert (address81, geoLocation81) into AddressContainsGeoLocation

!new Address('address82')
!address82.text := 'Rua Oscar Freire, 350, Jardins, São Paulo, SP'

!new GeoLocation('geoLocation82')
!geoLocation82.latitude := -23.5636
!geoLocation82.longitude := -46.6674

!insert (address82, geoLocation82) into AddressContainsGeoLocation

!new Address('address83')
!address83.text := 'Av. Ibirapuera, 4000, Moema, São Paulo, SP'

!new GeoLocation('geoLocation83')
!geoLocation83.latitude := -23.6102
!geoLocation83.longitude := -46.6618

!insert (address83, geoLocation83) into AddressContainsGeoLocation

!new Address('address84')
!address84.text := 'Rua 25 de Março, 100, Centro, São Paulo, SP'

!new GeoLocation('geoLocation84')
!geoLocation84.latitude := -23.5433
!geoLocation84.longitude := -46.6283

!insert (address84, geoLocation84) into AddressContainsGeoLocation

!new Address('address85')
!address85.text := 'Rua da Consolação, 2000, Centro, São Paulo, SP'

!new GeoLocation('geoLocation85')
!geoLocation85.latitude := -23.5518
!geoLocation85.longitude := -46.6412

!insert (address85, geoLocation85) into AddressContainsGeoLocation

!new Station('station30')

!new Station('station31')

!new Customer('customer32')
!customer32.id := 'CUST-601'
!customer32.name := 'Carlos Mendes'
!customer32.twitterUserName := '@carlos_msp'

!new Customer('customer33')
!customer33.id := 'CUST-602'
!customer33.name := 'Juliana Oliveira'
!customer33.twitterUserName := '@juliana_oliv'

!new Customer('customer34')
!customer34.id := 'CUST-603'
!customer34.name := 'Lucas Pereira'
!customer34.twitterUserName := '@lucas_p_sampa'

!insert (driver35, shipment44) into DriverShipment
!insert (driver35, shipment45) into DriverShipment
!insert (driver36, shipment46) into DriverShipment

!insert (shipment44, address80) into ShipmentContainsPickUpAddress
!insert (shipment45, address82) into ShipmentContainsPickUpAddress
!insert (shipment46, address84) into ShipmentContainsPickUpAddress
!insert (shipment47, address82) into ShipmentContainsPickUpAddress

!insert (shipment44, address81) into ShipmentContainsDeliveryAddress
!insert (shipment45, address83) into ShipmentContainsDeliveryAddress
!insert (shipment46, address85) into ShipmentContainsDeliveryAddress
!insert (shipment47, address81) into ShipmentContainsDeliveryAddress

!insert (customer32, shipment44) into CustomerConsistsOfShipment
!insert (customer33, shipment45) into CustomerConsistsOfShipment
!insert (customer34, shipment46) into CustomerConsistsOfShipment
!insert (customer34, shipment47) into CustomerConsistsOfShipment

!insert (station30, customer32) into StationContainsCustomer
!insert (station30, customer33) into StationContainsCustomer
!insert (station30, customer34) into StationContainsCustomer

!insert (station30, shipment44) into StationShipment
!insert (station30, shipment46) into StationShipment
!insert (station30, shipment47) into StationShipment
!insert (station31, shipment45) into StationShipment

!insert (station30, driver35) into StationContainsDriver
!insert (station30, driver36) into StationContainsDriver
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 92 | 0.00% |
| Multiplicities Errors | 0 | 30 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 1 | 6 | 16.67% |
| Lat/Lon (out of valid addresses) | 1 | 5 | 20.00% |
| Twitter | 0 | 3 | 0.00% |

| Invalid Addresses | 
|---| 
```
Av. Ibirapuera, 4000, Moema, São Paulo, SP
```

| Invalid Lat/Lon | 
|---| 
```
Invalid Lat: -23.5433 Lon: -46.6283 for address: Rua 25 de Março, 100, Centro, São Paulo, SP
```

## Category boundary
```
!new Driver('driver37')
!driver37.id := 'DR4321'
!driver37.name := 'Juan López'

!new Customer('customer35')
!customer35.id := 'CU3000'
!customer35.name := 'Zhen Yao'
!customer35.twitterUserName := '@ZhenYaoChina'

!new Shipment('shipment48')
!shipment48.id := 'SH1001'
!shipment48.status := #NEW

!new Shipment('shipment49')
!shipment49.id := 'SH1002'
!shipment49.status := #ASSIGNED

!new Shipment('shipment50')
!shipment50.id := 'SH1003'
!shipment50.status := #DELIVERED

!new Address('address86')
!address86.text := '65 Kyoto Street, Tokyo, Japan'

!new GeoLocation('geoLocation86')
!geoLocation86.latitude := 35.689487
!geoLocation86.longitude := 139.691711

!insert (address86, geoLocation86) into AddressContainsGeoLocation

!new Address('address87')
!address87.text := '123 Seoul Drive, Seoul, South Korea'

!new GeoLocation('geoLocation87')
!geoLocation87.latitude := 37.566536
!geoLocation87.longitude := 126.977966

!insert (address87, geoLocation87) into AddressContainsGeoLocation

!new Address('address88')
!address88.text := '456 Ganges Road, Mumbai, India'

!new GeoLocation('geoLocation88')
!geoLocation88.latitude := 19.076090
!geoLocation88.longitude := 72.877426

!insert (address88, geoLocation88) into AddressContainsGeoLocation

!new Address('address89')
!address89.text := '789 Great Wall Avenue, Beijing, China'

!new GeoLocation('geoLocation89')
!geoLocation89.latitude := 39.904202
!geoLocation89.longitude := 116.407394

!insert (address89, geoLocation89) into AddressContainsGeoLocation

!new Address('address90')
!address90.text := '234 Huangpu River Avenue, Shanghai, China'

!new GeoLocation('geoLocation90')
!geoLocation90.latitude := 31.230391
!geoLocation90.longitude := 121.473701

!insert (address90, geoLocation90) into AddressContainsGeoLocation

!new Station('station32')

!insert (driver37, shipment49) into DriverShipment

!insert (shipment48, address86) into ShipmentContainsPickUpAddress
!insert (shipment48, address87) into ShipmentContainsDeliveryAddress

!insert (shipment49, address86) into ShipmentContainsPickUpAddress
!insert (shipment49, address88) into ShipmentContainsDeliveryAddress

!insert (shipment50, address89) into ShipmentContainsPickUpAddress
!insert (shipment50, address90) into ShipmentContainsDeliveryAddress

!insert (customer35, shipment48) into CustomerConsistsOfShipment
!insert (customer35, shipment49) into CustomerConsistsOfShipment
!insert (customer35, shipment50) into CustomerConsistsOfShipment

!insert (station32, customer35) into StationContainsCustomer

!insert (station32, shipment48) into StationShipment
!insert (station32, shipment49) into StationShipment
!insert (station32, shipment50) into StationShipment

!insert (station32, driver37) into StationContainsDriver
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 62 | 0.00% |
| Multiplicities Errors | 0 | 20 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 5 | 5 | 100.00% |
| Lat/Lon (out of valid addresses) | 0 | 0 | 0.00% |
| Twitter | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
65 Kyoto Street, Tokyo, Japan
```
```
123 Seoul Drive, Seoul, South Korea
```
```
456 Ganges Road, Mumbai, India
```
```
789 Great Wall Avenue, Beijing, China
```
```
234 Huangpu River Avenue, Shanghai, China
```

## Category complex
```
!new Driver('driver32')
!driver32.id := 'DRV007'
!driver32.name := 'Kwame Mensah'

!new Driver('driver33')
!driver33.id := 'DRV008'
!driver33.name := 'Emily Johnson'

!new Customer('customer28')
!customer28.id := 'CUST009'
!customer28.name := 'Fatima El-Shabazz'
!customer28.twitterUserName := '@fatima_egypt'

!new Customer('customer29')
!customer29.id := 'CUST010'
!customer29.name := 'Carlos Ramirez'
!customer29.twitterUserName := '@carlos_r_mex'

!new Customer('customer30')
!customer30.id := 'CUST011'
!customer30.name := 'Liam O\'Connor'
!customer30.twitterUserName := '@liam_oc_usa'

!new Address('address73')
!address73.text := '5th Avenue, New York, NY, USA'

!new GeoLocation('geoLocation73')
!geoLocation73.latitude := 40.758896
!geoLocation73.longitude := -73.985130

!insert (address73, geoLocation73) into AddressContainsGeoLocation

!new Address('address74')
!address74.text := 'Rue Royale, Dakar, Senegal'

!new GeoLocation('geoLocation74')
!geoLocation74.latitude := 14.692778
!geoLocation74.longitude := -17.446667

!insert (address74, geoLocation74) into AddressContainsGeoLocation

!new Address('address75')
!address75.text := 'Polanco, Mexico City, Mexico'

!new GeoLocation('geoLocation75')
!geoLocation75.latitude := 19.43306
!geoLocation75.longitude := -99.13323

!insert (address75, geoLocation75) into AddressContainsGeoLocation

!new Address('address76')
!address76.text := 'King\'s Cross, London, UK'

!new GeoLocation('geoLocation76')
!geoLocation76.latitude := 51.5308
!geoLocation76.longitude := -0.1207

!insert (address76, geoLocation76) into AddressContainsGeoLocation

!new Address('address77')
!address77.text := 'Cairo International Airport, Cairo, Egypt'

!new GeoLocation('geoLocation77')
!geoLocation77.latitude := 30.121941
!geoLocation77.longitude := 31.405471

!insert (address77, geoLocation77) into AddressContainsGeoLocation

!new Address('address78')
!address78.text := 'Lagos Mainland, Lagos, Nigeria'

!new GeoLocation('geoLocation78')
!geoLocation78.latitude := 6.524379
!geoLocation78.longitude := 3.379206

!insert (address78, geoLocation78) into AddressContainsGeoLocation

!new Shipment('shipment40')
!shipment40.id := 'SHIP009'
!shipment40.status := #UNDERWAY

!new Shipment('shipment41')
!shipment41.id := 'SHIP010'
!shipment41.status := #NEW

!new Shipment('shipment42')
!shipment42.id := 'SHIP011'
!shipment42.status := #DELIVERED

!insert (shipment40, address73) into ShipmentContainsPickUpAddress
!insert (shipment40, address74) into ShipmentContainsDeliveryAddress

!insert (shipment41, address75) into ShipmentContainsPickUpAddress
!insert (shipment41, address76) into ShipmentContainsDeliveryAddress

!insert (shipment42, address77) into ShipmentContainsPickUpAddress
!insert (shipment42, address78) into ShipmentContainsDeliveryAddress

!insert (customer28, shipment42) into CustomerConsistsOfShipment
!insert (customer29, shipment41) into CustomerConsistsOfShipment
!insert (customer30, shipment40) into CustomerConsistsOfShipment

!insert (driver32, shipment42) into DriverShipment
!insert (driver33, shipment40) into DriverShipment

!new Station('station26')

!new Station('station27')

!new Station('station28')

!insert (station26, customer30) into StationContainsCustomer
!insert (station26, driver33) into StationContainsDriver
!insert (station26, shipment40) into StationShipment

!insert (station27, customer29) into StationContainsCustomer
!insert (station27, shipment41) into StationShipment

!insert (station28, customer28) into StationContainsCustomer
!insert (station28, driver32) into StationContainsDriver
!insert (station28, shipment42) into StationShipment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 85 | 0.00% |
| Multiplicities Errors | 0 | 25 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 2 | 6 | 33.33% |
| Lat/Lon (out of valid addresses) | 0 | 4 | 0.00% |
| Twitter | 0 | 3 | 0.00% |

| Invalid Addresses | 
|---| 
```
Rue Royale, Dakar, Senegal
```
```
King\s Cross, London, UK
```

## Category edge
```
!new Driver('driver30')
!driver30.id := 'DRV303202'
!driver30.name := 'Charlie Fastlane'

!new Driver('driver31')
!driver31.id := 'DRV303203'
!driver31.name := 'Riley Quickdash'

!new Shipment('shipment37')
!shipment37.id := 'SHP202103'
!shipment37.status := #NEW

!new Shipment('shipment38')
!shipment38.id := 'SHP202104'
!shipment38.status := #NEW

!new Shipment('shipment39')
!shipment39.id := 'SHP202105'
!shipment39.status := #NEW

!new Address('address70')
!address70.text := 'Central Hospital, 10 Medical Ave, Gotham City'

!new GeoLocation('geoLocation70')
!geoLocation70.latitude := 40.730610
!geoLocation70.longitude := -73.935242

!insert (address70, geoLocation70) into AddressContainsGeoLocation

!new Address('address71')
!address71.text := 'Northview Clinic, 22 Wellness Street, Metropolis'

!new GeoLocation('geoLocation71')
!geoLocation71.latitude := 34.052235
!geoLocation71.longitude := -118.243683

!insert (address71, geoLocation71) into AddressContainsGeoLocation

!new Address('address72')
!address72.text := 'Eastside Emergency Room, 88 Health Blvd, Star City'

!new GeoLocation('geoLocation72')
!geoLocation72.latitude := 39.971778
!geoLocation72.longitude := -105.217499

!insert (address72, geoLocation72) into AddressContainsGeoLocation

!new Customer('customer27')
!customer27.id := 'CUS111222'
!customer27.name := 'Medical Express LLC'
!customer27.twitterUserName := '@MediExLLC'

!new Station('station25')

!insert (driver30, shipment37) into DriverShipment
!insert (driver31, shipment38) into DriverShipment
!insert (driver31, shipment39) into DriverShipment

!insert (shipment37, address70) into ShipmentContainsPickUpAddress
!insert (shipment38, address70) into ShipmentContainsPickUpAddress
!insert (shipment39, address70) into ShipmentContainsPickUpAddress

!insert (shipment37, address71) into ShipmentContainsDeliveryAddress
!insert (shipment38, address72) into ShipmentContainsDeliveryAddress
!insert (shipment39, address72) into ShipmentContainsDeliveryAddress

!insert (customer27, shipment37) into CustomerConsistsOfShipment
!insert (customer27, shipment38) into CustomerConsistsOfShipment
!insert (customer27, shipment39) into CustomerConsistsOfShipment

!insert (station25, driver30) into StationContainsDriver
!insert (station25, driver31) into StationContainsDriver
!insert (station25, shipment37) into StationShipment
!insert (station25, shipment38) into StationShipment
!insert (station25, shipment39) into StationShipment
!insert (station25, customer27) into StationContainsCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 56 | 0.00% |
| Multiplicities Errors | 0 | 21 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 3 | 3 | 100.00% |
| Lat/Lon (out of valid addresses) | 0 | 0 | 0.00% |
| Twitter | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
Central Hospital, 10 Medical Ave, Gotham City
```
```
Northview Clinic, 22 Wellness Street, Metropolis
```
```
Eastside Emergency Room, 88 Health Blvd, Star City
```

## Category invalid
```
!new Customer('customer25')
!customer25.id := 'C010'
!customer25.name := 'Alejandro Lopez'
!customer25.twitterUserName := '@alejo'

!new Customer('customer26')
-- Intentional duplicate ID to simulate an error
!customer26.id := 'C010'
!customer26.name := 'Camila Perez'
!customer26.twitterUserName := '@cami_perez'

!new Shipment('shipment35')
!shipment35.id := 'S4001'
!shipment35.status := #NEW

!new Address('address66')
!address66.text := '123 Avenida Paulista, São Paulo, Brazil'

!new GeoLocation('geoLocation66')
!geoLocation66.latitude := -23.56168
!geoLocation66.longitude := -46.655881

!insert (address66, geoLocation66) into AddressContainsGeoLocation

!new Address('address67')
!address67.text := '789 Calle Florida, Buenos Aires, Argentina'

!new GeoLocation('geoLocation67')
!geoLocation67.latitude := -34.6037
!geoLocation67.longitude := -58.3816

!insert (address67, geoLocation67) into AddressContainsGeoLocation

!insert (shipment35, address66) into ShipmentContainsPickUpAddress
!insert (shipment35, address67) into ShipmentContainsDeliveryAddress

!new Shipment('shipment36')
!shipment36.id := 'S4002'
!shipment36.status := #DELIVERED

!new Address('address68')
!address68.text := '2000 Main St, Cape Town, South Africa'

!new GeoLocation('geoLocation68')
!geoLocation68.latitude := -33.924868
!geoLocation68.longitude := 18.424055

!insert (address68, geoLocation68) into AddressContainsGeoLocation

!new Address('address69')
!address69.text := '950 Kent St, Sydney, Australia'

!new GeoLocation('geoLocation69')
!geoLocation69.latitude := -33.8688
!geoLocation69.longitude := 151.2093

!insert (address69, geoLocation69) into AddressContainsGeoLocation

!insert (shipment36, address68) into ShipmentContainsPickUpAddress
!insert (shipment36, address69) into ShipmentContainsDeliveryAddress

!new Driver('driver28')
!driver28.id := 'D013'
!driver28.name := 'Samantha Lee'

!new Driver('driver29')
!driver29.id := 'D014'
!driver29.name := 'Haruto Nakamura'

!insert (driver28, shipment35) into DriverShipment
!insert (driver29, shipment36) into DriverShipment

!new Station('station24')

!insert (station24, driver28) into StationContainsDriver
!insert (station24, driver29) into StationContainsDriver
!insert (station24, shipment35) into StationShipment
!insert (station24, shipment36) into StationShipment
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 4 | 14 | 28.57% |
| Invariants Errors (Not included on General) | 1 | 4 | 25.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `CustomerConsistsOfShipment':
  Object `shipment36' of class `Shipment' is connected to 0 objects of class `Customer'
  at association end `orderer' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `CustomerConsistsOfShipment':
  Object `shipment35' of class `Shipment' is connected to 0 objects of class `Customer'
  at association end `orderer' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `StationContainsCustomer':
  Object `customer25' of class `Customer' is connected to 0 objects of class `Station'
  at association end `station' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `StationContainsCustomer':
  Object `customer26' of class `Customer' is connected to 0 objects of class `Station'
  at association end `station' but the multiplicity is specified as `1'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (1) `Customer::uniqueCustomerId': FAILED.
```

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 3 | 4 | 75.00% |
| Lat/Lon (out of valid addresses) | 0 | 1 | 0.00% |
| Twitter | 0 | 2 | 0.00% |

| Invalid Addresses | 
|---| 
```
123 Avenida Paulista, São Paulo, Brazil
```
```
2000 Main St, Cape Town, South Africa
```
```
950 Kent St, Sydney, Australia
```

## Generation 4 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 350 | 0.00% |
| Multiplicities Errors | 0 | 96 | 0.00% |
| Invariants Errors | 0 | 16 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 4 | 14 | 28.57% |
| Invariants Errors (Not included on General) | 1 | 4 | 25.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `CustomerConsistsOfShipment':
  Object `shipment36' of class `Shipment' is connected to 0 objects of class `Customer'
  at association end `orderer' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `CustomerConsistsOfShipment':
  Object `shipment35' of class `Shipment' is connected to 0 objects of class `Customer'
  at association end `orderer' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `StationContainsCustomer':
  Object `customer25' of class `Customer' is connected to 0 objects of class `Station'
  at association end `station' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `StationContainsCustomer':
  Object `customer26' of class `Customer' is connected to 0 objects of class `Station'
  at association end `station' but the multiplicity is specified as `1'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (1) `Customer::uniqueCustomerId': FAILED.
```

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 14 | 24 | 58.33% |
| Lat/Lon (out of valid addresses) | 1 | 10 | 10.00% |
| Twitter | 0 | 10 | 0.00% |

| Invalid Addresses | 
|---| 
```
Av. Ibirapuera, 4000, Moema, São Paulo, SP
```
```
65 Kyoto Street, Tokyo, Japan
```
```
123 Seoul Drive, Seoul, South Korea
```
```
456 Ganges Road, Mumbai, India
```
```
789 Great Wall Avenue, Beijing, China
```
```
234 Huangpu River Avenue, Shanghai, China
```
```
Rue Royale, Dakar, Senegal
```
```
King\s Cross, London, UK
```
```
Central Hospital, 10 Medical Ave, Gotham City
```
```
Northview Clinic, 22 Wellness Street, Metropolis
```
```
Eastside Emergency Room, 88 Health Blvd, Star City
```
```
123 Avenida Paulista, São Paulo, Brazil
```
```
2000 Main St, Cape Town, South Africa
```
```
950 Kent St, Sydney, Australia
```

| Invalid Lat/Lon | 
|---| 
```
Invalid Lat: -23.5433 Lon: -46.6283 for address: Rua 25 de Março, 100, Centro, São Paulo, SP
```

# Generation 5
## Category baseline
```
!new Driver('driver43')
!driver43.id := 'DR-501'
!driver43.name := 'Anjali Kumar'

!new Driver('driver44')
!driver44.id := 'DR-502'
!driver44.name := 'Rohan Desai'

!new Driver('driver45')
!driver45.id := 'DR-503'
!driver45.name := 'Priya Singh'

!new Shipment('shipment57')
!shipment57.id := 'SH-901'
!shipment57.status := #UNDERWAY

!new Shipment('shipment58')
!shipment58.id := 'SH-902'
!shipment58.status := #DELIVERED

!new Shipment('shipment59')
!shipment59.id := 'SH-903'
!shipment59.status := #NEW

!new Address('address101')
!address101.text := '34 Marine Drive, Churchgate, Mumbai'

!new GeoLocation('geoLocation101')
!geoLocation101.latitude := 18.9440
!geoLocation101.longitude := 72.8237

!insert (address101, geoLocation101) into AddressContainsGeoLocation

!new Address('address102')
!address102.text := '12 Carter Road, Bandra, Mumbai'

!new GeoLocation('geoLocation102')
!geoLocation102.latitude := 19.0632
!geoLocation102.longitude := 72.8308

!insert (address102, geoLocation102) into AddressContainsGeoLocation

!new Address('address103')
!address103.text := '56 Linking Road, Bandra, Mumbai'

!new GeoLocation('geoLocation103')
!geoLocation103.latitude := 19.0645
!geoLocation103.longitude := 72.8296

!insert (address103, geoLocation103) into AddressContainsGeoLocation

!new Address('address104')
!address104.text := '90 Nariman Point, Mumbai'

!new GeoLocation('geoLocation104')
!geoLocation104.latitude := 18.9256
!geoLocation104.longitude := 72.8242

!insert (address104, geoLocation104) into AddressContainsGeoLocation

!new Station('station38')

!new Station('station39')

!new Customer('customer44')
!customer44.id := 'CUST-701'
!customer44.name := 'Rajiv Verma'
!customer44.twitterUserName := '@rajivv_mumbai'

!new Customer('customer45')
!customer45.id := 'CUST-702'
!customer45.name := 'Sana Malhotra'
!customer45.twitterUserName := '@sana_mj'

!insert (driver43, shipment57) into DriverShipment
!insert (driver44, shipment58) into DriverShipment

!insert (shipment57, address101) into ShipmentContainsPickUpAddress
!insert (shipment58, address103) into ShipmentContainsPickUpAddress
!insert (shipment59, address103) into ShipmentContainsPickUpAddress

!insert (shipment57, address102) into ShipmentContainsDeliveryAddress
!insert (shipment58, address104) into ShipmentContainsDeliveryAddress
!insert (shipment59, address102) into ShipmentContainsDeliveryAddress

!insert (customer44, shipment57) into CustomerConsistsOfShipment
!insert (customer45, shipment58) into CustomerConsistsOfShipment
!insert (customer44, shipment59) into CustomerConsistsOfShipment

!insert (station38, customer44) into StationContainsCustomer
!insert (station38, customer45) into StationContainsCustomer

!insert (station38, shipment57) into StationShipment
!insert (station38, shipment58) into StationShipment
!insert (station39, shipment59) into StationShipment

!insert (station38, driver43) into StationContainsDriver
!insert (station38, driver44) into StationContainsDriver
!insert (station39, driver45) into StationContainsDriver
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 71 | 0.00% |
| Multiplicities Errors | 0 | 23 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 3 | 4 | 75.00% |
| Lat/Lon (out of valid addresses) | 0 | 1 | 0.00% |
| Twitter | 0 | 2 | 0.00% |

| Invalid Addresses | 
|---| 
```
34 Marine Drive, Churchgate, Mumbai
```
```
12 Carter Road, Bandra, Mumbai
```
```
56 Linking Road, Bandra, Mumbai
```

## Category boundary
```
!new Driver('driver46')
!driver46.id := 'DR9999'
!driver46.name := 'Anisha Patel'

!new Customer('customer46')
!customer46.id := 'CU4001'
!customer46.name := 'Olaf Jørgensen'
!customer46.twitterUserName := '@olafNordic'

!new Shipment('shipment60')
!shipment60.id := 'SH2001'
!shipment60.status := #NEW

!new Address('address105')
!address105.text := '10 Fjord Street, Oslo, Norway'

!new GeoLocation('geoLocation105')
!geoLocation105.latitude := 59.913868
!geoLocation105.longitude := 10.752245

!insert (address105, geoLocation105) into AddressContainsGeoLocation

!new Address('address106')
!address106.text := '250 Viking Road, Copenhagen, Denmark'

!new GeoLocation('geoLocation106')
!geoLocation106.latitude := 55.676098
!geoLocation106.longitude := 12.568337

!insert (address106, geoLocation106) into AddressContainsGeoLocation

!new Station('station40')

!insert (shipment60, address105) into ShipmentContainsPickUpAddress
!insert (shipment60, address106) into ShipmentContainsDeliveryAddress

!insert (customer46, shipment60) into CustomerConsistsOfShipment

!insert (station40, customer46) into StationContainsCustomer

!insert (station40, shipment60) into StationShipment
!insert (station40, driver46) into StationContainsDriver
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 29 | 0.00% |
| Multiplicities Errors | 0 | 8 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 2 | 2 | 100.00% |
| Lat/Lon (out of valid addresses) | 0 | 0 | 0.00% |
| Twitter | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
10 Fjord Street, Oslo, Norway
```
```
250 Viking Road, Copenhagen, Denmark
```

## Category complex
```
!new Driver('driver40')
!driver40.id := 'DRV009'
!driver40.name := 'Ana Beatriz Silva'

!new Driver('driver41')
!driver41.id := 'DRV010'
!driver41.name := 'Lars Bergmann'

!new Customer('customer37')
!customer37.id := 'CUST012'
!customer37.name := 'Javier Peña'
!customer37.twitterUserName := '@javier_p_col'

!new Customer('customer38')
!customer38.id := 'CUST013'
!customer38.name := 'Marta Rossi'
!customer38.twitterUserName := '@marta_italia'

!new Customer('customer39')
!customer39.id := 'CUST014'
!customer39.name := 'Isla McGregor'
!customer39.twitterUserName := '@isla_m_sco'

!new Address('address95')
!address95.text := 'Avenida Paulista, São Paulo, Brazil'

!new GeoLocation('geoLocation95')
!geoLocation95.latitude := -23.561399
!geoLocation95.longitude := -46.656196

!insert (address95, geoLocation95) into AddressContainsGeoLocation

!new Address('address96')
!address96.text := 'Plaza de Cibeles, Madrid, Spain'

!new GeoLocation('geoLocation96')
!geoLocation96.latitude := 40.418056
!geoLocation96.longitude := -3.699444

!insert (address96, geoLocation96) into AddressContainsGeoLocation

!new Address('address97')
!address97.text := 'Via Appia Antica, Rome, Italy'

!new GeoLocation('geoLocation97')
!geoLocation97.latitude := 41.853271
!geoLocation97.longitude := 12.500134

!insert (address97, geoLocation97) into AddressContainsGeoLocation

!new Address('address98')
!address98.text := 'Alexanderplatz, Berlin, Germany'

!new GeoLocation('geoLocation98')
!geoLocation98.latitude := 52.521862
!geoLocation98.longitude := 13.413201

!insert (address98, geoLocation98) into AddressContainsGeoLocation

!new Address('address99')
!address99.text := 'Royal Mile, Edinburgh, Scotland'

!new GeoLocation('geoLocation99')
!geoLocation99.latitude := 55.9492
!geoLocation99.longitude := -3.1939

!insert (address99, geoLocation99) into AddressContainsGeoLocation

!new Address('address100')
!address100.text := 'Avenida del Libertador, Buenos Aires, Argentina'

!new GeoLocation('geoLocation100')
!geoLocation100.latitude := -34.5836
!geoLocation100.longitude := -58.3931

!insert (address100, geoLocation100) into AddressContainsGeoLocation

!new Shipment('shipment54')
!shipment54.id := 'SHIP012'
!shipment54.status := #ASSIGNED

!new Shipment('shipment55')
!shipment55.id := 'SHIP013'
!shipment55.status := #NEW

!new Shipment('shipment56')
!shipment56.id := 'SHIP014'
!shipment56.status := #DELIVERED

!insert (shipment54, address95) into ShipmentContainsPickUpAddress
!insert (shipment54, address96) into ShipmentContainsDeliveryAddress

!insert (shipment55, address97) into ShipmentContainsPickUpAddress
!insert (shipment55, address98) into ShipmentContainsDeliveryAddress

!insert (shipment56, address99) into ShipmentContainsPickUpAddress
!insert (shipment56, address100) into ShipmentContainsDeliveryAddress

!insert (customer37, shipment54) into CustomerConsistsOfShipment
!insert (customer38, shipment55) into CustomerConsistsOfShipment
!insert (customer39, shipment56) into CustomerConsistsOfShipment

!insert (driver40, shipment54) into DriverShipment
!insert (driver41, shipment56) into DriverShipment

!new Station('station34')

!new Station('station35')

!new Station('station36')

!insert (station34, customer37) into StationContainsCustomer
!insert (station34, driver40) into StationContainsDriver
!insert (station34, shipment54) into StationShipment

!insert (station35, customer38) into StationContainsCustomer
!insert (station35, shipment55) into StationShipment

!insert (station36, customer39) into StationContainsCustomer
!insert (station36, driver41) into StationContainsDriver
!insert (station36, shipment56) into StationShipment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 85 | 0.00% |
| Multiplicities Errors | 0 | 25 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 1 | 6 | 16.67% |
| Lat/Lon (out of valid addresses) | 0 | 5 | 0.00% |
| Twitter | 0 | 3 | 0.00% |

| Invalid Addresses | 
|---| 
```
Plaza de Cibeles, Madrid, Spain
```

## Category edge
```
!new Driver('driver38')
!driver38.id := 'DRV404505'
!driver38.name := 'Paula Roundtrip'

!new Driver('driver39')
!driver39.id := 'DRV404506'
!driver39.name := 'Oscar Looper'

!new Shipment('shipment51')
!shipment51.id := 'SHP303304'
!shipment51.status := #ASSIGNED

!new Shipment('shipment52')
!shipment52.id := 'SHP303305'
!shipment52.status := #UNDERWAY

!new Shipment('shipment53')
!shipment53.id := 'SHP303306'
!shipment53.status := #DELIVERED

!new Address('address91')
!address91.text := '12 Maple Lane, Pleasantville'

!new GeoLocation('geoLocation91')
!geoLocation91.latitude := 38.895111
!geoLocation91.longitude := -77.036667

!insert (address91, geoLocation91) into AddressContainsGeoLocation

!new Address('address92')
!address92.text := '45 River Road, Rivertown'

!new GeoLocation('geoLocation92')
!geoLocation92.latitude := 40.712776
!geoLocation92.longitude := -74.005974

!insert (address92, geoLocation92) into AddressContainsGeoLocation

!new Address('address93')
!address93.text := '29 Pine Terrace, BBQ Junction'

!new GeoLocation('geoLocation93')
!geoLocation93.latitude := 34.052235
!geoLocation93.longitude := -118.243683

!insert (address93, geoLocation93) into AddressContainsGeoLocation

!new Address('address94')
!address94.text := '96 Forest Path, Greenfield'

!new GeoLocation('geoLocation94')
!geoLocation94.latitude := 37.774929
!geoLocation94.longitude := -122.419418

!insert (address94, geoLocation94) into AddressContainsGeoLocation

!new Customer('customer36')
!customer36.id := 'CUS303200'
!customer36.name := 'Home Swappers Club'
!customer36.twitterUserName := '@SwapClub'

!new Station('station33')

!insert (driver38, shipment51) into DriverShipment
!insert (driver39, shipment52) into DriverShipment
!insert (driver39, shipment53) into DriverShipment

!insert (shipment51, address91) into ShipmentContainsPickUpAddress
!insert (shipment51, address93) into ShipmentContainsDeliveryAddress

!insert (shipment52, address91) into ShipmentContainsPickUpAddress
!insert (shipment52, address94) into ShipmentContainsDeliveryAddress

!insert (shipment53, address92) into ShipmentContainsPickUpAddress
!insert (shipment53, address93) into ShipmentContainsDeliveryAddress

!insert (customer36, shipment51) into CustomerConsistsOfShipment
!insert (customer36, shipment52) into CustomerConsistsOfShipment
!insert (customer36, shipment53) into CustomerConsistsOfShipment

!insert (station33, driver38) into StationContainsDriver
!insert (station33, driver39) into StationContainsDriver
!insert (station33, shipment51) into StationShipment
!insert (station33, shipment52) into StationShipment
!insert (station33, shipment53) into StationShipment

!insert (station33, customer36) into StationContainsCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 62 | 0.00% |
| Multiplicities Errors | 0 | 22 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 4 | 4 | 100.00% |
| Lat/Lon (out of valid addresses) | 0 | 0 | 0.00% |
| Twitter | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
12 Maple Lane, Pleasantville
```
```
45 River Road, Rivertown
```
```
29 Pine Terrace, BBQ Junction
```
```
96 Forest Path, Greenfield
```

## Category invalid
```
!new Shipment('shipment43')
!shipment43.id := 'S5001'
!shipment43.status := #NEW

!new Address('address79')
!address79.text := '10 Downing Street, London, UK'

!new GeoLocation('geoLocation79')
!geoLocation79.latitude := 51.503363
!geoLocation79.longitude := -0.127625

!insert (address79, geoLocation79) into AddressContainsGeoLocation

!insert (shipment43, address79) into ShipmentContainsPickUpAddress
!insert (shipment43, address79) into ShipmentContainsDeliveryAddress

!new Customer('customer31')
!customer31.id := 'C011'
!customer31.name := 'Harold Smythe'
!customer31.twitterUserName := '@harold_smith'

!insert (customer31, shipment43) into CustomerConsistsOfShipment

!new Driver('driver34')
!driver34.id := 'D015'
!driver34.name := 'Pietro Rossi'

!insert (driver34, shipment43) into DriverShipment

!new Station('station29')

!insert (station29, driver34) into StationContainsDriver
!insert (station29, shipment43) into StationShipment
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 7 | 14.29% |
| Invariants Errors (Not included on General) | 1 | 4 | 25.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `StationContainsCustomer':
  Object `customer31' of class `Customer' is connected to 0 objects of class `Station'
  at association end `station' but the multiplicity is specified as `1'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (3) `Shipment::differentPickupAndDeliveryAddress': FAILED.
```

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 0 | 1 | 0.00% |
| Lat/Lon (out of valid addresses) | 0 | 1 | 0.00% |
| Twitter | 0 | 1 | 0.00% |

## Generation 5 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 270 | 0.00% |
| Multiplicities Errors | 0 | 78 | 0.00% |
| Invariants Errors | 0 | 16 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 7 | 14.29% |
| Invariants Errors (Not included on General) | 1 | 4 | 25.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `StationContainsCustomer':
  Object `customer31' of class `Customer' is connected to 0 objects of class `Station'
  at association end `station' but the multiplicity is specified as `1'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (3) `Shipment::differentPickupAndDeliveryAddress': FAILED.
```

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 10 | 17 | 58.82% |
| Lat/Lon (out of valid addresses) | 0 | 7 | 0.00% |
| Twitter | 0 | 8 | 0.00% |

| Invalid Addresses | 
|---| 
```
34 Marine Drive, Churchgate, Mumbai
```
```
12 Carter Road, Bandra, Mumbai
```
```
56 Linking Road, Bandra, Mumbai
```
```
10 Fjord Street, Oslo, Norway
```
```
250 Viking Road, Copenhagen, Denmark
```
```
Plaza de Cibeles, Madrid, Spain
```
```
12 Maple Lane, Pleasantville
```
```
45 River Road, Rivertown
```
```
29 Pine Terrace, BBQ Junction
```
```
96 Forest Path, Greenfield
```

# Generation 6
## Category baseline
```
!new Driver('driver51')
!driver51.id := 'DR-601'
!driver51.name := 'Lakshmi Reddy'

!new Driver('driver52')
!driver52.id := 'DR-602'
!driver52.name := 'Akhil Nair'

!new Shipment('shipment67')
!shipment67.id := 'SH-1001'
!shipment67.status := #NEW

!new Shipment('shipment68')
!shipment68.id := 'SH-1002'
!shipment68.status := #UNDERWAY

!new Shipment('shipment69')
!shipment69.id := 'SH-1003'
!shipment69.status := #ASSIGNED

!new Address('address117')
!address117.text := '24 MG Road, Ashok Nagar, Bangalore'

!new GeoLocation('geoLocation117')
!geoLocation117.latitude := 12.9716
!geoLocation117.longitude := 77.5946

!insert (address117, geoLocation117) into AddressContainsGeoLocation

!new Address('address118')
!address118.text := '2 Indiranagar, Bangalore'

!new GeoLocation('geoLocation118')
!geoLocation118.latitude := 12.9787
!geoLocation118.longitude := 77.6401

!insert (address118, geoLocation118) into AddressContainsGeoLocation

!new Address('address119')
!address119.text := '10 Whitefield Main Road, Bangalore'

!new GeoLocation('geoLocation119')
!geoLocation119.latitude := 12.9698
!geoLocation119.longitude := 77.7500

!insert (address119, geoLocation119) into AddressContainsGeoLocation

!new Address('address120')
!address120.text := '56 Electronic City, Bangalore'

!new GeoLocation('geoLocation120')
!geoLocation120.latitude := 12.8419
!geoLocation120.longitude := 77.6770

!insert (address120, geoLocation120) into AddressContainsGeoLocation

!new Station('station45')

!new Customer('customer51')
!customer51.id := 'CUST-801'
!customer51.name := 'Pranav Joshi'
!customer51.twitterUserName := '@pranav_j'

!new Customer('customer52')
!customer52.id := 'CUST-802'
!customer52.name := 'Meera Sinha'
!customer52.twitterUserName := '@meera_sinha'

!insert (driver51, shipment68) into DriverShipment

!insert (shipment67, address117) into ShipmentContainsPickUpAddress
!insert (shipment68, address119) into ShipmentContainsPickUpAddress
!insert (shipment69, address117) into ShipmentContainsPickUpAddress

!insert (shipment67, address118) into ShipmentContainsDeliveryAddress
!insert (shipment68, address120) into ShipmentContainsDeliveryAddress
!insert (shipment69, address118) into ShipmentContainsDeliveryAddress

!insert (customer51, shipment67) into CustomerConsistsOfShipment
!insert (customer52, shipment68) into CustomerConsistsOfShipment
!insert (customer52, shipment69) into CustomerConsistsOfShipment

!insert (station45, customer51) into StationContainsCustomer
!insert (station45, customer52) into StationContainsCustomer

!insert (station45, shipment67) into StationShipment
!insert (station45, shipment68) into StationShipment
!insert (station45, shipment69) into StationShipment

!insert (station45, driver51) into StationContainsDriver
!insert (station45, driver52) into StationContainsDriver
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 65 | 0.00% |
| Multiplicities Errors | 0 | 21 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 3 | 4 | 75.00% |
| Lat/Lon (out of valid addresses) | 0 | 1 | 0.00% |
| Twitter | 0 | 2 | 0.00% |

| Invalid Addresses | 
|---| 
```
56 Electronic City, Bangalore
```
```
10 Whitefield Main Road, Bangalore
```
```
24 MG Road, Ashok Nagar, Bangalore
```

## Category boundary
```
!new Driver('driver53')
!driver53.id := 'DR0001'
!driver53.name := 'Soumaya El-Amin'

!new Customer('customer53')
!customer53.id := 'CU5001'
!customer53.name := 'Javier Morales'
!customer53.twitterUserName := '@javierLatAm'

!new Shipment('shipment70')
!shipment70.id := 'SH3001'
!shipment70.status := #NEW

!new Shipment('shipment71')
!shipment71.id := 'SH3002'
!shipment71.status := #UNDERWAY

!new Address('address121')
!address121.text := 'Av. Río Amazonas, Quito, Ecuador'

!new GeoLocation('geoLocation121')
!geoLocation121.latitude := -0.22985
!geoLocation121.longitude := -78.52495

!insert (address121, geoLocation121) into AddressContainsGeoLocation

!new Address('address122')
!address122.text := 'Calle Ocho, Miami, USA'

!new GeoLocation('geoLocation122')
!geoLocation122.latitude := 25.76168
!geoLocation122.longitude := -80.19179

!insert (address122, geoLocation122) into AddressContainsGeoLocation

!new Address('address123')
!address123.text := 'Plaza Mayor, Madrid, Spain'

!new GeoLocation('geoLocation123')
!geoLocation123.latitude := 40.416775
!geoLocation123.longitude := -3.703790

!insert (address123, geoLocation123) into AddressContainsGeoLocation

!new Address('address124')
!address124.text := 'Champs-Élysées, Paris, France'

!new GeoLocation('geoLocation124')
!geoLocation124.latitude := 48.856613
!geoLocation124.longitude := 2.352222

!insert (address124, geoLocation124) into AddressContainsGeoLocation

!new Station('station46')

!insert (driver53, shipment71) into DriverShipment

!insert (shipment70, address121) into ShipmentContainsPickUpAddress
!insert (shipment70, address122) into ShipmentContainsDeliveryAddress

!insert (shipment71, address123) into ShipmentContainsPickUpAddress
!insert (shipment71, address124) into ShipmentContainsDeliveryAddress

!insert (customer53, shipment70) into CustomerConsistsOfShipment
!insert (customer53, shipment71) into CustomerConsistsOfShipment

!insert (station46, customer53) into StationContainsCustomer

!insert (station46, shipment70) into StationShipment
!insert (station46, shipment71) into StationShipment

!insert (station46, driver53) into StationContainsDriver
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 49 | 0.00% |
| Multiplicities Errors | 0 | 15 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 0 | 4 | 0.00% |
| Lat/Lon (out of valid addresses) | 0 | 4 | 0.00% |
| Twitter | 0 | 1 | 0.00% |

## Category complex
```
!new Driver('driver47')
!driver47.id := 'DRV011'
!driver47.name := 'Ravi Kumar'

!new Driver('driver48')
!driver48.id := 'DRV012'
!driver48.name := 'Sophia Chen'

!new Customer('customer47')
!customer47.id := 'CUST015'
!customer47.name := 'Michael Johnson'
!customer47.twitterUserName := '@mjohnson_usa'

!new Customer('customer48')
!customer48.id := 'CUST016'
!customer48.name := 'Yuki Nakamura'
!customer48.twitterUserName := '@yukin_japan'

!new Customer('customer49')
!customer49.id := 'CUST017'
!customer49.name := 'Chen Wei'
!customer49.twitterUserName := '@chen_w_beijing'

!new Address('address107')
!address107.text := 'Wall Street, New York, USA'

!new GeoLocation('geoLocation107')
!geoLocation107.latitude := 40.7074
!geoLocation107.longitude := -74.0113

!insert (address107, geoLocation107) into AddressContainsGeoLocation

!new Address('address108')
!address108.text := 'Nanjing Road, Shanghai, China'

!new GeoLocation('geoLocation108')
!geoLocation108.latitude := 31.2304
!geoLocation108.longitude := 121.4737

!insert (address108, geoLocation108) into AddressContainsGeoLocation

!new Address('address109')
!address109.text := 'Ginza, Tokyo, Japan'

!new GeoLocation('geoLocation109')
!geoLocation109.latitude := 35.6716
!geoLocation109.longitude := 139.765

!insert (address109, geoLocation109) into AddressContainsGeoLocation

!new Address('address110')
!address110.text := 'The Bund, Shanghai, China'

!new GeoLocation('geoLocation110')
!geoLocation110.latitude := 31.2385
!geoLocation110.longitude := 121.4903

!insert (address110, geoLocation110) into AddressContainsGeoLocation

!new Address('address111')
!address111.text := 'Silicon Valley, CA, USA'

!new GeoLocation('geoLocation111')
!geoLocation111.latitude := 37.3875
!geoLocation111.longitude := -122.0575

!insert (address111, geoLocation111) into AddressContainsGeoLocation

!new Address('address112')
!address112.text := 'Indira Gandhi International Airport, Delhi, India'

!new GeoLocation('geoLocation112')
!geoLocation112.latitude := 28.5562
!geoLocation112.longitude := 77.1000

!insert (address112, geoLocation112) into AddressContainsGeoLocation

!new Shipment('shipment61')
!shipment61.id := 'SHIP015'
!shipment61.status := #UNDERWAY

!new Shipment('shipment62')
!shipment62.id := 'SHIP016'
!shipment62.status := #NEW

!new Shipment('shipment63')
!shipment63.id := 'SHIP017'
!shipment63.status := #DELIVERED

!insert (shipment61, address107) into ShipmentContainsPickUpAddress
!insert (shipment61, address108) into ShipmentContainsDeliveryAddress

!insert (shipment62, address109) into ShipmentContainsPickUpAddress
!insert (shipment62, address110) into ShipmentContainsDeliveryAddress

!insert (shipment63, address111) into ShipmentContainsPickUpAddress
!insert (shipment63, address112) into ShipmentContainsDeliveryAddress

!insert (customer47, shipment61) into CustomerConsistsOfShipment
!insert (customer48, shipment62) into CustomerConsistsOfShipment
!insert (customer49, shipment63) into CustomerConsistsOfShipment

!insert (driver48, shipment61) into DriverShipment
!insert (driver47, shipment63) into DriverShipment

!new Station('station41')

!new Station('station42')

!new Station('station43')

!insert (station41, customer47) into StationContainsCustomer
!insert (station41, driver48) into StationContainsDriver
!insert (station41, shipment61) into StationShipment

!insert (station42, customer48) into StationContainsCustomer
!insert (station42, shipment62) into StationShipment

!insert (station43, customer49) into StationContainsCustomer
!insert (station43, driver47) into StationContainsDriver
!insert (station43, shipment63) into StationShipment
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 85 | 0.00% |
| Multiplicities Errors | 0 | 25 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 2 | 6 | 33.33% |
| Lat/Lon (out of valid addresses) | 0 | 4 | 0.00% |
| Twitter | 0 | 3 | 0.00% |

| Invalid Addresses | 
|---| 
```
Silicon Valley, CA, USA
```
```
Ginza, Tokyo, Japan
```

## Category edge
```
!new Driver('driver49')
!driver49.id := 'DRV512789'
!driver49.name := 'Liam Segmented'

!new Driver('driver50')
!driver50.id := 'DRV512790'
!driver50.name := 'Nora Patchwork'

!new Shipment('shipment64')
!shipment64.id := 'SHP404505'
!shipment64.status := #DELIVERED

!new Shipment('shipment65')
!shipment65.id := 'SHP404506'
!shipment65.status := #ASSIGNED

!new Shipment('shipment66')
!shipment66.id := 'SHP404507'
!shipment66.status := #NEW

!new Address('address113')
!address113.text := 'Warehouse Hub, 5 Logistics Lane, Central City'

!new GeoLocation('geoLocation113')
!geoLocation113.latitude := 37.774929
!geoLocation113.longitude := -122.419418

!insert (address113, geoLocation113) into AddressContainsGeoLocation

!new Address('address114')
!address114.text := 'Shop 1, 14 Market Street, Central City'

!new GeoLocation('geoLocation114')
!geoLocation114.latitude := 37.775000
!geoLocation114.longitude := -122.419300

!insert (address114, geoLocation114) into AddressContainsGeoLocation

!new Address('address115')
!address115.text := 'Shop 2, 15 Beacon Road, Central City'

!new GeoLocation('geoLocation115')
!geoLocation115.latitude := 37.774850
!geoLocation115.longitude := -122.418900

!insert (address115, geoLocation115) into AddressContainsGeoLocation

!new Address('address116')
!address116.text := 'Shop 3, 16 Water Avenue, Central City'

!new GeoLocation('geoLocation116')
!geoLocation116.latitude := 37.775150
!geoLocation116.longitude := -122.419100

!insert (address116, geoLocation116) into AddressContainsGeoLocation

!new Customer('customer50')
!customer50.id := 'CUS808999'
!customer50.name := 'City Retail Collective'
!customer50.twitterUserName := '@CityRetailCo'

!new Station('station44')

!insert (driver49, shipment65) into DriverShipment
!insert (driver50, shipment64) into DriverShipment

!insert (shipment64, address113) into ShipmentContainsPickUpAddress
!insert (shipment65, address113) into ShipmentContainsPickUpAddress
!insert (shipment66, address113) into ShipmentContainsPickUpAddress

!insert (shipment64, address114) into ShipmentContainsDeliveryAddress
!insert (shipment65, address115) into ShipmentContainsDeliveryAddress
!insert (shipment66, address116) into ShipmentContainsDeliveryAddress

!insert (customer50, shipment64) into CustomerConsistsOfShipment
!insert (customer50, shipment65) into CustomerConsistsOfShipment
!insert (customer50, shipment66) into CustomerConsistsOfShipment

!insert (station44, driver49) into StationContainsDriver
!insert (station44, driver50) into StationContainsDriver
!insert (station44, shipment64) into StationShipment
!insert (station44, shipment65) into StationShipment
!insert (station44, shipment66) into StationShipment

!insert (station44, customer50) into StationContainsCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 61 | 0.00% |
| Multiplicities Errors | 0 | 21 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 4 | 4 | 100.00% |
| Lat/Lon (out of valid addresses) | 0 | 0 | 0.00% |
| Twitter | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
Warehouse Hub, 5 Logistics Lane, Central City
```
```
Shop 3, 16 Water Avenue, Central City
```
```
Shop 1, 14 Market Street, Central City
```
```
Shop 2, 15 Beacon Road, Central City
```

## Category invalid
```
!new Station('station37')

!new Customer('customer40')
!customer40.id := 'C012'
!customer40.name := 'Elena Kustova'
!customer40.twitterUserName := '@elena_kustova'

!new Customer('customer41')
!customer41.id := 'C013'
!customer41.name := 'Anil Desai'
!customer41.twitterUserName := '@anil_d'

!new Customer('customer42')
!customer42.id := 'C014'
!customer42.name := 'Marie Dubois'
!customer42.twitterUserName := '@marie_dub'

!new Customer('customer43')
!customer43.id := 'C015'
!customer43.name := 'Faisal Khan'
!customer43.twitterUserName := '@faisal_k'

!new Driver('driver42')
!driver42.id := 'D016'
!driver42.name := 'Li Zhang'

!insert (station37, customer40) into StationContainsCustomer
!insert (station37, customer41) into StationContainsCustomer
!insert (station37, customer42) into StationContainsCustomer
!insert (station37, customer43) into StationContainsCustomer

!insert (station37, driver42) into StationContainsDriver
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 5 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 0 | 0 | 0.00% |
| Lat/Lon (out of valid addresses) | 0 | 0 | 0.00% |
| Twitter | 0 | 4 | 0.00% |

## Generation 6 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 285 | 0.00% |
| Multiplicities Errors | 0 | 82 | 0.00% |
| Invariants Errors | 0 | 16 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 5 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 9 | 18 | 50.00% |
| Lat/Lon (out of valid addresses) | 0 | 9 | 0.00% |
| Twitter | 0 | 11 | 0.00% |

| Invalid Addresses | 
|---| 
```
56 Electronic City, Bangalore
```
```
10 Whitefield Main Road, Bangalore
```
```
24 MG Road, Ashok Nagar, Bangalore
```
```
Silicon Valley, CA, USA
```
```
Ginza, Tokyo, Japan
```
```
Warehouse Hub, 5 Logistics Lane, Central City
```
```
Shop 3, 16 Water Avenue, Central City
```
```
Shop 1, 14 Market Street, Central City
```
```
Shop 2, 15 Beacon Road, Central City
```

# Summary for all generations
| Summary | Value | 
|---|---| 
| Model | GPT_4O | 
| Type | CoT | 
| System | pickupnet | 
| Number of generations | 6 | 

| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 1790 | 0.00% |
| Multiplicities Errors | 0 | 479 | 0.00% |
| Invariants Errors | 0 | 96 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 10 | 71 | 14.08% |
| Invariants Errors (Not included on General) | 2 | 24 | 8.33% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `StationContainsCustomer':
  Object `customer6' of class `Customer' is connected to 0 objects of class `Station'
  at association end `station' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `StationShipment':
  Object `shipment17' of class `Shipment' is connected to 0 objects of class `Station'
  at association end `station' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `StationShipment':
  Object `shipment16' of class `Shipment' is connected to 0 objects of class `Station'
  at association end `station' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `StationContainsCustomer':
  Object `customer14' of class `Customer' is connected to 0 objects of class `Station'
  at association end `station' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `StationContainsCustomer':
  Object `customer17' of class `Customer' is connected to 0 objects of class `Station'
  at association end `station' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `CustomerConsistsOfShipment':
  Object `shipment36' of class `Shipment' is connected to 0 objects of class `Customer'
  at association end `orderer' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `CustomerConsistsOfShipment':
  Object `shipment35' of class `Shipment' is connected to 0 objects of class `Customer'
  at association end `orderer' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `StationContainsCustomer':
  Object `customer25' of class `Customer' is connected to 0 objects of class `Station'
  at association end `station' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `StationContainsCustomer':
  Object `customer26' of class `Customer' is connected to 0 objects of class `Station'
  at association end `station' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `StationContainsCustomer':
  Object `customer31' of class `Customer' is connected to 0 objects of class `Station'
  at association end `station' but the multiplicity is specified as `1'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (1) `Customer::uniqueCustomerId': FAILED.
```
```
checking invariant (3) `Shipment::differentPickupAndDeliveryAddress': FAILED.
```

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 64 | 122 | 52.46% |
| Lat/Lon (out of valid addresses) | 1 | 58 | 1.72% |
| Twitter | 2 | 53 | 3.77% |

| Invalid Addresses | 
|---| 
```
456 Maple Avenue, Manhattan, NY
```
```
123 Elm Street, Brooklyn, NY
```
```
123 Elm Street, Springfield, USA
```
```
789 Oak Avenue, Metropolis, USA
```
```
Phugtal Monastery, India
```
```
Top of Mount Roraima, Venezuela
```
```
175 London Street, São Paulo, Brazil
```
```
50 Rivadavia, Buenos Aires, Argentina
```
```
100 Main Street, North Sydney, NSW
```
```
50 Mountain View, Blue Mountains, NSW
```
```
15 Park Lane, Manly Beach, NSW
```
```
15 Ocean Drive, Bondi Beach, NSW
```
```
34 King Road, Parramatta, NSW
```
```
Khalifa Street, Abu Dhabi, UAE
```
```
Nevsky Prospekt, 22, Saint Petersburg, Russia
```
```
123 Old Street, Central City
```
```
150 New Avenue, Central City
```
```
1200 Sheik Zayed Road, Dubai, UAE
```
```
250 Avenida de las Artes, Santiago, Chile
```
```
5 Lakeshore Blvd West, Etobicoke, ON
```
```
15 Richmond Hill Drive, Richmond Hill, ON
```
```
5 Nile Crescent, Cairo, Egypt
```
```
3 Sunset Boulevard, Johannesburg, South Africa
```
```
350 Curry Street, Wellington, New Zealand
```
```
1 Sahara Street, Casablanca, Morocco
```
```
Sapporo Station, Kita, Sapporo, Japan
```
```
Kowloon Bay, Hong Kong
```
```
LogistiX Hub, Hamburg, Germany
```
```
Depot France, Paris, France
```
```
250 Via San Francesco, Milan, Italy
```
```
500 Boulevard St. Germain, Paris, France
```
```
Av. Ibirapuera, 4000, Moema, São Paulo, SP
```
```
65 Kyoto Street, Tokyo, Japan
```
```
123 Seoul Drive, Seoul, South Korea
```
```
456 Ganges Road, Mumbai, India
```
```
789 Great Wall Avenue, Beijing, China
```
```
234 Huangpu River Avenue, Shanghai, China
```
```
Rue Royale, Dakar, Senegal
```
```
King\s Cross, London, UK
```
```
Central Hospital, 10 Medical Ave, Gotham City
```
```
Northview Clinic, 22 Wellness Street, Metropolis
```
```
Eastside Emergency Room, 88 Health Blvd, Star City
```
```
123 Avenida Paulista, São Paulo, Brazil
```
```
2000 Main St, Cape Town, South Africa
```
```
950 Kent St, Sydney, Australia
```
```
34 Marine Drive, Churchgate, Mumbai
```
```
12 Carter Road, Bandra, Mumbai
```
```
56 Linking Road, Bandra, Mumbai
```
```
10 Fjord Street, Oslo, Norway
```
```
250 Viking Road, Copenhagen, Denmark
```
```
Plaza de Cibeles, Madrid, Spain
```
```
12 Maple Lane, Pleasantville
```
```
45 River Road, Rivertown
```
```
29 Pine Terrace, BBQ Junction
```
```
96 Forest Path, Greenfield
```
```
56 Electronic City, Bangalore
```
```
10 Whitefield Main Road, Bangalore
```
```
24 MG Road, Ashok Nagar, Bangalore
```
```
Silicon Valley, CA, USA
```
```
Ginza, Tokyo, Japan
```
```
Warehouse Hub, 5 Logistics Lane, Central City
```
```
Shop 3, 16 Water Avenue, Central City
```
```
Shop 1, 14 Market Street, Central City
```
```
Shop 2, 15 Beacon Road, Central City
```

| Invalid Lat/Lon | 
|---| 
```
Invalid Lat: -23.5433 Lon: -46.6283 for address: Rua 25 de Março, 100, Centro, São Paulo, SP
```

| Invalid Twitters | 
|---| 
```
@emily.travel
```
```
@fatimaMiddleEast
```

