# Generation 1
```
!new Station('st_hamburg')
!new Station('st_munich')

!new Customer('cust_001')
!cust_001.id := 'C-001'
!cust_001.name := 'Anna Keller'
!cust_001.twitterUserName := 'anna_keller'

!new Customer('cust_002')
!cust_002.id := 'C-002'
!cust_002.name := 'Boris Novak'
!cust_002.twitterUserName := 'borisn'

!new Customer('cust_003')
!cust_003.id := 'C-003'
!cust_003.name := 'Chloe Martin'
!cust_003.twitterUserName := 'chloemartin'

!insert (st_hamburg, cust_001) into StationContainsCustomer
!insert (st_hamburg, cust_002) into StationContainsCustomer
!insert (st_munich, cust_003) into StationContainsCustomer

!new Driver('drv_100')
!drv_100.id := 'D-100'
!drv_100.name := 'Lars Petersen'

!new Driver('drv_101')
!drv_101.id := 'D-101'
!drv_101.name := 'Mina Sato'

!new Driver('drv_200')
!drv_200.id := 'D-200'
!drv_200.name := 'Tobias Reiter'

!insert (st_hamburg, drv_100) into StationContainsDriver
!insert (st_hamburg, drv_101) into StationContainsDriver
!insert (st_munich, drv_200) into StationContainsDriver

!new Shipment('shp_9001')
!shp_9001.id := 'S-9001'
!shp_9001.status := #NEW

!new Shipment('shp_9002')
!shp_9002.id := 'S-9002'
!shp_9002.status := #ASSIGNED

!new Shipment('shp_9003')
!shp_9003.id := 'S-9003'
!shp_9003.status := #UNDERWAY

!new Shipment('shp_9004')
!shp_9004.id := 'S-9004'
!shp_9004.status := #DELIVERED

!new Shipment('shp_9005')
!shp_9005.id := 'S-9005'
!shp_9005.status := #ASSIGNED

!insert (cust_001, shp_9001) into CustomerConsistsOfShipment
!insert (cust_001, shp_9002) into CustomerConsistsOfShipment
!insert (cust_002, shp_9003) into CustomerConsistsOfShipment
!insert (cust_003, shp_9004) into CustomerConsistsOfShipment
!insert (cust_003, shp_9005) into CustomerConsistsOfShipment

!insert (st_hamburg, shp_9001) into StationShipment
!insert (st_hamburg, shp_9002) into StationShipment
!insert (st_hamburg, shp_9003) into StationShipment
!insert (st_munich, shp_9004) into StationShipment
!insert (st_munich, shp_9005) into StationShipment

!insert (drv_100, shp_9002) into DriverShipment
!insert (drv_101, shp_9003) into DriverShipment
!insert (drv_200, shp_9004) into DriverShipment
!insert (drv_200, shp_9005) into DriverShipment

!new Address('addr_pu_9001')
!addr_pu_9001.text := 'Spitalerstrasse 10, 20095 Hamburg, Germany'
!new GeoLocation('geo_addr_pu_9001')
!geo_addr_pu_9001.latitude := 53.5515
!geo_addr_pu_9001.longitude := 9.9963
!insert (addr_pu_9001, geo_addr_pu_9001) into AddressContainsGeoLocation

!new Address('addr_dl_9001')
!addr_dl_9001.text := 'Altonaer Strasse 22, 20357 Hamburg, Germany'
!new GeoLocation('geo_addr_dl_9001')
!geo_addr_dl_9001.latitude := 53.5619
!geo_addr_dl_9001.longitude := 9.9581
!insert (addr_dl_9001, geo_addr_dl_9001) into AddressContainsGeoLocation

!insert (shp_9001, addr_pu_9001) into ShipmentContainsPickUpAddress
!insert (shp_9001, addr_dl_9001) into ShipmentContainsDeliveryAddress

!new Address('addr_pu_9002')
!addr_pu_9002.text := 'Glockengiesserwall 1, 20095 Hamburg, Germany'
!new GeoLocation('geo_addr_pu_9002')
!geo_addr_pu_9002.latitude := 53.5532
!geo_addr_pu_9002.longitude := 10.0066
!insert (addr_pu_9002, geo_addr_pu_9002) into AddressContainsGeoLocation

!new Address('addr_dl_9002')
!addr_dl_9002.text := 'Eppendorfer Landstrasse 55, 20249 Hamburg, Germany'
!new GeoLocation('geo_addr_dl_9002')
!geo_addr_dl_9002.latitude := 53.5853
!geo_addr_dl_9002.longitude := 9.9857
!insert (addr_dl_9002, geo_addr_dl_9002) into AddressContainsGeoLocation

!insert (shp_9002, addr_pu_9002) into ShipmentContainsPickUpAddress
!insert (shp_9002, addr_dl_9002) into ShipmentContainsDeliveryAddress

!new Address('addr_pu_9003')
!addr_pu_9003.text := 'Willy-Brandt-Strasse 45, 20457 Hamburg, Germany'
!new GeoLocation('geo_addr_pu_9003')
!geo_addr_pu_9003.latitude := 53.5467
!geo_addr_pu_9003.longitude := 9.9840
!insert (addr_pu_9003, geo_addr_pu_9003) into AddressContainsGeoLocation

!new Address('addr_dl_9003')
!addr_dl_9003.text := 'Fuhlsbuettler Strasse 180, 22305 Hamburg, Germany'
!new GeoLocation('geo_addr_dl_9003')
!geo_addr_dl_9003.latitude := 53.5974
!geo_addr_dl_9003.longitude := 10.0392
!insert (addr_dl_9003, geo_addr_dl_9003) into AddressContainsGeoLocation

!insert (shp_9003, addr_pu_9003) into ShipmentContainsPickUpAddress
!insert (shp_9003, addr_dl_9003) into ShipmentContainsDeliveryAddress

!new Address('addr_pu_9004')
!addr_pu_9004.text := 'Arnulfstrasse 195, 80634 Munich, Germany'
!new GeoLocation('geo_addr_pu_9004')
!geo_addr_pu_9004.latitude := 48.1450
!geo_addr_pu_9004.longitude := 11.5356
!insert (addr_pu_9004, geo_addr_pu_9004) into AddressContainsGeoLocation

!new Address('addr_dl_9004')
!addr_dl_9004.text := 'Sendlinger Strasse 31, 80331 Munich, Germany'
!new GeoLocation('geo_addr_dl_9004')
!geo_addr_dl_9004.latitude := 48.1344
!geo_addr_dl_9004.longitude := 11.5717
!insert (addr_dl_9004, geo_addr_dl_9004) into AddressContainsGeoLocation

!insert (shp_9004, addr_pu_9004) into ShipmentContainsPickUpAddress
!insert (shp_9004, addr_dl_9004) into ShipmentContainsDeliveryAddress

!new Address('addr_pu_9005')
!addr_pu_9005.text := 'Leopoldstrasse 50, 80802 Munich, Germany'
!new GeoLocation('geo_addr_pu_9005')
!geo_addr_pu_9005.latitude := 48.1582
!geo_addr_pu_9005.longitude := 11.5862
!insert (addr_pu_9005, geo_addr_pu_9005) into AddressContainsGeoLocation

!new Address('addr_dl_9005')
!addr_dl_9005.text := 'Rosenheimer Strasse 145, 81671 Munich, Germany'
!new GeoLocation('geo_addr_dl_9005')
!geo_addr_dl_9005.latitude := 48.1214
!geo_addr_dl_9005.longitude := 11.6121
!insert (addr_dl_9005, geo_addr_dl_9005) into AddressContainsGeoLocation

!insert (shp_9005, addr_pu_9005) into ShipmentContainsPickUpAddress
!insert (shp_9005, addr_dl_9005) into ShipmentContainsDeliveryAddress
```
## Generation 1 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 128 | 0.00% |
| Multiplicities Errors | 0 | 40 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 0 | 10 | 0.00% |
| Lat/Lon (out of valid addresses) | 0 | 10 | 0.00% |
| Twitter | 0 | 3 | 0.00% |

# Generation 2
```
!new Station('st_berlin')

!new Customer('cust_010')
!cust_010.id := 'C-010'
!cust_010.name := 'Daria Schulz'
!cust_010.twitterUserName := 'daria_schulz'

!new Customer('cust_011')
!cust_011.id := 'C-011'
!cust_011.name := 'Emre Yilmaz'
!cust_011.twitterUserName := 'emrey'

!new Customer('cust_012')
!cust_012.id := 'C-012'
!cust_012.name := 'Fatima Hassan'
!cust_012.twitterUserName := 'fatima_h'

!insert (st_berlin, cust_010) into StationContainsCustomer
!insert (st_berlin, cust_011) into StationContainsCustomer
!insert (st_berlin, cust_012) into StationContainsCustomer

!new Driver('drv_310')
!drv_310.id := 'D-310'
!drv_310.name := 'Jonas Krueger'

!new Driver('drv_311')
!drv_311.id := 'D-311'
!drv_311.name := 'Nadia Ivanova'

!insert (st_berlin, drv_310) into StationContainsDriver
!insert (st_berlin, drv_311) into StationContainsDriver

!new Shipment('shp_7001')
!shp_7001.id := 'S-7001'
!shp_7001.status := #NEW

!new Shipment('shp_7002')
!shp_7002.id := 'S-7002'
!shp_7002.status := #ASSIGNED

!new Shipment('shp_7003')
!shp_7003.id := 'S-7003'
!shp_7003.status := #DELIVERED

!new Shipment('shp_7004')
!shp_7004.id := 'S-7004'
!shp_7004.status := #UNDERWAY

!insert (cust_010, shp_7001) into CustomerConsistsOfShipment
!insert (cust_010, shp_7002) into CustomerConsistsOfShipment
!insert (cust_011, shp_7003) into CustomerConsistsOfShipment
!insert (cust_011, shp_7004) into CustomerConsistsOfShipment

!insert (st_berlin, shp_7001) into StationShipment
!insert (st_berlin, shp_7002) into StationShipment
!insert (st_berlin, shp_7003) into StationShipment
!insert (st_berlin, shp_7004) into StationShipment

!insert (drv_310, shp_7002) into DriverShipment
!insert (drv_310, shp_7003) into DriverShipment
!insert (drv_310, shp_7004) into DriverShipment

!new Address('addr_wh_berlin')
!addr_wh_berlin.text := 'Gradestrasse 36, 12347 Berlin, Germany'
!new GeoLocation('geo_addr_wh_berlin')
!geo_addr_wh_berlin.latitude := 52.4469
!geo_addr_wh_berlin.longitude := 13.4381
!insert (addr_wh_berlin, geo_addr_wh_berlin) into AddressContainsGeoLocation

!new Address('addr_pu_7004')
!addr_pu_7004.text := 'Warschauer Strasse 33, 10243 Berlin, Germany'
!new GeoLocation('geo_addr_pu_7004')
!geo_addr_pu_7004.latitude := 52.5052
!geo_addr_pu_7004.longitude := 13.4498
!insert (addr_pu_7004, geo_addr_pu_7004) into AddressContainsGeoLocation

!new Address('addr_dlv_7001')
!addr_dlv_7001.text := 'Kaiserdamm 12, 14057 Berlin, Germany'
!new GeoLocation('geo_addr_dlv_7001')
!geo_addr_dlv_7001.latitude := 52.5097
!geo_addr_dlv_7001.longitude := 13.2736
!insert (addr_dlv_7001, geo_addr_dlv_7001) into AddressContainsGeoLocation

!new Address('addr_dlv_shared_berlin')
!addr_dlv_shared_berlin.text := 'Prenzlauer Allee 217, 10405 Berlin, Germany'
!new GeoLocation('geo_addr_dlv_shared_berlin')
!geo_addr_dlv_shared_berlin.latitude := 52.5386
!geo_addr_dlv_shared_berlin.longitude := 13.4249
!insert (addr_dlv_shared_berlin, geo_addr_dlv_shared_berlin) into AddressContainsGeoLocation

!new Address('addr_dlv_7004')
!addr_dlv_7004.text := 'Schlossstrasse 34, 12163 Berlin, Germany'
!new GeoLocation('geo_addr_dlv_7004')
!geo_addr_dlv_7004.latitude := 52.4565
!geo_addr_dlv_7004.longitude := 13.3226
!insert (addr_dlv_7004, geo_addr_dlv_7004) into AddressContainsGeoLocation

!insert (shp_7001, addr_wh_berlin) into ShipmentContainsPickUpAddress
!insert (shp_7001, addr_dlv_7001) into ShipmentContainsDeliveryAddress

!insert (shp_7002, addr_wh_berlin) into ShipmentContainsPickUpAddress
!insert (shp_7002, addr_dlv_shared_berlin) into ShipmentContainsDeliveryAddress

!insert (shp_7003, addr_wh_berlin) into ShipmentContainsPickUpAddress
!insert (shp_7003, addr_dlv_shared_berlin) into ShipmentContainsDeliveryAddress

!insert (shp_7004, addr_pu_7004) into ShipmentContainsPickUpAddress
!insert (shp_7004, addr_dlv_7004) into ShipmentContainsDeliveryAddress
```
## Generation 2 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 85 | 0.00% |
| Multiplicities Errors | 0 | 29 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 0 | 5 | 0.00% |
| Lat/Lon (out of valid addresses) | 0 | 5 | 0.00% |
| Twitter | 0 | 3 | 0.00% |

# Generation 3
```
!new Station('st_cologne')

!new Customer('cust_020')
!cust_020.id := 'C-020'
!cust_020.name := 'Gregor Weiss'
!cust_020.twitterUserName := 'gregorweiss'

!new Customer('cust_021')
!cust_021.id := 'C-021'
!cust_021.name := 'Hana Ito'
!cust_021.twitterUserName := 'hana_ito'

!new Customer('cust_022')
!cust_022.id := 'C-022'
!cust_022.name := 'Ibrahim Demir'
!cust_022.twitterUserName := 'ibrahimdemir'

!insert (st_cologne, cust_020) into StationContainsCustomer
!insert (st_cologne, cust_021) into StationContainsCustomer
!insert (st_cologne, cust_022) into StationContainsCustomer

!new Driver('drv_400')
!drv_400.id := 'D-400'
!drv_400.name := 'Svenja Lorenz'

!new Driver('drv_401')
!drv_401.id := 'D-401'
!drv_401.name := 'Omar Haddad'

!insert (st_cologne, drv_400) into StationContainsDriver
!insert (st_cologne, drv_401) into StationContainsDriver

!new Shipment('shp_8001')
!shp_8001.id := 'S-8001'
!shp_8001.status := #NEW

!new Shipment('shp_8002')
!shp_8002.id := 'S-8002'
!shp_8002.status := #ASSIGNED

!new Shipment('shp_8003')
!shp_8003.id := 'S-8003'
!shp_8003.status := #DELIVERED

!insert (cust_020, shp_8001) into CustomerConsistsOfShipment
!insert (cust_020, shp_8002) into CustomerConsistsOfShipment
!insert (cust_021, shp_8003) into CustomerConsistsOfShipment

!insert (st_cologne, shp_8001) into StationShipment
!insert (st_cologne, shp_8002) into StationShipment
!insert (st_cologne, shp_8003) into StationShipment

!insert (drv_400, shp_8002) into DriverShipment
!insert (drv_400, shp_8003) into DriverShipment

!new Address('addr_hub_cgn')
!addr_hub_cgn.text := 'Eifeltor 1, 50997 Cologne, Germany'
!new GeoLocation('geo_addr_hub_cgn')
!geo_addr_hub_cgn.latitude := 50.8856
!geo_addr_hub_cgn.longitude := 6.9564
!insert (addr_hub_cgn, geo_addr_hub_cgn) into AddressContainsGeoLocation

!new Address('addr_home_cgn')
!addr_home_cgn.text := 'Aachener Strasse 1200, 50858 Cologne, Germany'
!new GeoLocation('geo_addr_home_cgn')
!geo_addr_home_cgn.latitude := 50.9389
!geo_addr_home_cgn.longitude := 6.8356
!insert (addr_home_cgn, geo_addr_home_cgn) into AddressContainsGeoLocation

!new Address('addr_shop_cgn')
!addr_shop_cgn.text := 'Schildergasse 65, 50667 Cologne, Germany'
!new GeoLocation('geo_addr_shop_cgn')
!geo_addr_shop_cgn.latitude := 50.9372
!geo_addr_shop_cgn.longitude := 6.9531
!insert (addr_shop_cgn, geo_addr_shop_cgn) into AddressContainsGeoLocation

!new Address('addr_office_cgn')
!addr_office_cgn.text := 'Im Mediapark 8, 50670 Cologne, Germany'
!new GeoLocation('geo_addr_office_cgn')
!geo_addr_office_cgn.latitude := 50.9487
!geo_addr_office_cgn.longitude := 6.9444
!insert (addr_office_cgn, geo_addr_office_cgn) into AddressContainsGeoLocation

!insert (shp_8001, addr_hub_cgn) into ShipmentContainsPickUpAddress
!insert (shp_8001, addr_home_cgn) into ShipmentContainsDeliveryAddress

!insert (shp_8002, addr_hub_cgn) into ShipmentContainsPickUpAddress
!insert (shp_8002, addr_shop_cgn) into ShipmentContainsDeliveryAddress

!insert (shp_8003, addr_office_cgn) into ShipmentContainsPickUpAddress
!insert (shp_8003, addr_hub_cgn) into ShipmentContainsDeliveryAddress
```
## Generation 3 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 71 | 0.00% |
| Multiplicities Errors | 0 | 23 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 0 | 4 | 0.00% |
| Lat/Lon (out of valid addresses) | 0 | 4 | 0.00% |
| Twitter | 0 | 3 | 0.00% |

# Generation 4
```
!new Station('st_frankfurt')
!new Station('st_stuttgart')

!new Customer('cust_030')
!cust_030.id := 'C-030'
!cust_030.name := 'Julia Brandt'
!cust_030.twitterUserName := 'juliabrandt'

!new Customer('cust_031')
!cust_031.id := 'C-031'
!cust_031.name := 'Karim El-Sayed'
!cust_031.twitterUserName := 'karimelsayed'

!new Customer('cust_032')
!cust_032.id := 'C-032'
!cust_032.name := 'Leonie Graf'
!cust_032.twitterUserName := 'leonie_graf'

!new Customer('cust_033')
!cust_033.id := 'C-033'
!cust_033.name := 'Marco Bianchi'
!cust_033.twitterUserName := 'marco_b'

!insert (st_frankfurt, cust_030) into StationContainsCustomer
!insert (st_frankfurt, cust_031) into StationContainsCustomer
!insert (st_stuttgart, cust_032) into StationContainsCustomer
!insert (st_stuttgart, cust_033) into StationContainsCustomer

!new Driver('drv_500')
!drv_500.id := 'D-500'
!drv_500.name := 'Helena Vogt'

!new Driver('drv_501')
!drv_501.id := 'D-501'
!drv_501.name := 'Rashid Alami'

!insert (st_stuttgart, drv_500) into StationContainsDriver
!insert (st_stuttgart, drv_501) into StationContainsDriver

!new Shipment('shp_8501')
!shp_8501.id := 'S-8501'
!shp_8501.status := #NEW

!new Shipment('shp_8502')
!shp_8502.id := 'S-8502'
!shp_8502.status := #ASSIGNED

!new Shipment('shp_8503')
!shp_8503.id := 'S-8503'
!shp_8503.status := #UNDERWAY

!new Shipment('shp_8504')
!shp_8504.id := 'S-8504'
!shp_8504.status := #DELIVERED

!new Shipment('shp_8505')
!shp_8505.id := 'S-8505'
!shp_8505.status := #NEW

!insert (cust_030, shp_8501) into CustomerConsistsOfShipment
!insert (cust_030, shp_8502) into CustomerConsistsOfShipment
!insert (cust_031, shp_8503) into CustomerConsistsOfShipment
!insert (cust_033, shp_8504) into CustomerConsistsOfShipment
!insert (cust_031, shp_8505) into CustomerConsistsOfShipment

!insert (st_frankfurt, shp_8501) into StationShipment
!insert (st_frankfurt, shp_8502) into StationShipment
!insert (st_frankfurt, shp_8503) into StationShipment
!insert (st_stuttgart, shp_8504) into StationShipment
!insert (st_frankfurt, shp_8505) into StationShipment

!insert (drv_500, shp_8502) into DriverShipment
!insert (drv_500, shp_8503) into DriverShipment
!insert (drv_501, shp_8504) into DriverShipment

!new Address('addr_pu_fra_warehouse')
!addr_pu_fra_warehouse.text := 'Cargo City Sued 1, 60549 Frankfurt am Main, Germany'
!new GeoLocation('geo_addr_pu_fra_warehouse')
!geo_addr_pu_fra_warehouse.latitude := 50.0382
!geo_addr_pu_fra_warehouse.longitude := 8.5622
!insert (addr_pu_fra_warehouse, geo_addr_pu_fra_warehouse) into AddressContainsGeoLocation

!new Address('addr_pu_fra_pharmacy')
!addr_pu_fra_pharmacy.text := 'Zeil 106, 60313 Frankfurt am Main, Germany'
!new GeoLocation('geo_addr_pu_fra_pharmacy')
!geo_addr_pu_fra_pharmacy.latitude := 50.1152
!geo_addr_pu_fra_pharmacy.longitude := 8.6843
!insert (addr_pu_fra_pharmacy, geo_addr_pu_fra_pharmacy) into AddressContainsGeoLocation

!new Address('addr_dl_fra_bank')
!addr_dl_fra_bank.text := 'Taunusanlage 12, 60325 Frankfurt am Main, Germany'
!new GeoLocation('geo_addr_dl_fra_bank')
!geo_addr_dl_fra_bank.latitude := 50.1117
!geo_addr_dl_fra_bank.longitude := 8.6716
!insert (addr_dl_fra_bank, geo_addr_dl_fra_bank) into AddressContainsGeoLocation

!new Address('addr_dl_fra_airport_t1')
!addr_dl_fra_airport_t1.text := 'Terminal 1, 60549 Frankfurt am Main, Germany'
!new GeoLocation('geo_addr_dl_fra_airport_t1')
!geo_addr_dl_fra_airport_t1.latitude := 50.0500
!geo_addr_dl_fra_airport_t1.longitude := 8.5716
!insert (addr_dl_fra_airport_t1, geo_addr_dl_fra_airport_t1) into AddressContainsGeoLocation

!new Address('addr_dl_fra_hotel')
!addr_dl_fra_hotel.text := 'Konrad-Adenauer-Strasse 7, 60313 Frankfurt am Main, Germany'
!new GeoLocation('geo_addr_dl_fra_hotel')
!geo_addr_dl_fra_hotel.latitude := 50.1138
!geo_addr_dl_fra_hotel.longitude := 8.6920
!insert (addr_dl_fra_hotel, geo_addr_dl_fra_hotel) into AddressContainsGeoLocation

!new Address('addr_pu_str_market')
!addr_pu_str_market.text := 'Marktplatz 1, 70173 Stuttgart, Germany'
!new GeoLocation('geo_addr_pu_str_market')
!geo_addr_pu_str_market.latitude := 48.7774
!geo_addr_pu_str_market.longitude := 9.1799
!insert (addr_pu_str_market, geo_addr_pu_str_market) into AddressContainsGeoLocation

!new Address('addr_dl_str_residence')
!addr_dl_str_residence.text := 'Königstrasse 28, 70173 Stuttgart, Germany'
!new GeoLocation('geo_addr_dl_str_residence')
!geo_addr_dl_str_residence.latitude := 48.7768
!geo_addr_dl_str_residence.longitude := 9.1770
!insert (addr_dl_str_residence, geo_addr_dl_str_residence) into AddressContainsGeoLocation

!insert (shp_8501, addr_pu_fra_warehouse) into ShipmentContainsPickUpAddress
!insert (shp_8501, addr_dl_fra_bank) into ShipmentContainsDeliveryAddress

!insert (shp_8502, addr_pu_fra_warehouse) into ShipmentContainsPickUpAddress
!insert (shp_8502, addr_dl_fra_bank) into ShipmentContainsDeliveryAddress

!insert (shp_8503, addr_pu_fra_pharmacy) into ShipmentContainsPickUpAddress
!insert (shp_8503, addr_dl_fra_airport_t1) into ShipmentContainsDeliveryAddress

!insert (shp_8504, addr_pu_str_market) into ShipmentContainsPickUpAddress
!insert (shp_8504, addr_dl_str_residence) into ShipmentContainsDeliveryAddress

!insert (shp_8505, addr_pu_fra_warehouse) into ShipmentContainsPickUpAddress
!insert (shp_8505, addr_dl_fra_hotel) into ShipmentContainsDeliveryAddress
```
## Generation 4 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 110 | 0.00% |
| Multiplicities Errors | 0 | 36 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 1 | 7 | 14.29% |
| Lat/Lon (out of valid addresses) | 0 | 6 | 0.00% |
| Twitter | 0 | 4 | 0.00% |

| Invalid Addresses | 
|---| 
```
Cargo City Sued 1, 60549 Frankfurt am Main, Germany
```

# Generation 5
```
!new Station('st_leipzig')
!new Station('st_dresden')

!new Customer('cust_040')
!cust_040.id := 'C-040'
!cust_040.name := 'Nora Heinrich'
!cust_040.twitterUserName := 'nora_heinrich'
!insert (st_leipzig, cust_040) into StationContainsCustomer

!new Driver('drv_600')
!drv_600.id := 'D-600'
!drv_600.name := 'Paul Neumann'

!new Driver('drv_601')
!drv_601.id := 'D-601'
!drv_601.name := 'Selin Arslan'

!new Driver('drv_610')
!drv_610.id := 'D-610'
!drv_610.name := 'Victor Lange'

!insert (st_leipzig, drv_600) into StationContainsDriver
!insert (st_leipzig, drv_601) into StationContainsDriver
!insert (st_dresden, drv_610) into StationContainsDriver

!new Shipment('shp_9101')
!shp_9101.id := 'S-9101'
!shp_9101.status := #NEW

!new Shipment('shp_9102')
!shp_9102.id := 'S-9102'
!shp_9102.status := #ASSIGNED

!new Shipment('shp_9103')
!shp_9103.id := 'S-9103'
!shp_9103.status := #DELIVERED

!insert (cust_040, shp_9101) into CustomerConsistsOfShipment
!insert (cust_040, shp_9102) into CustomerConsistsOfShipment
!insert (cust_040, shp_9103) into CustomerConsistsOfShipment

!insert (st_leipzig, shp_9101) into StationShipment
!insert (st_leipzig, shp_9102) into StationShipment
!insert (st_dresden, shp_9103) into StationShipment

!insert (drv_600, shp_9102) into DriverShipment
!insert (drv_610, shp_9103) into DriverShipment

!new Address('addr_pu_lpz_locker')
!addr_pu_lpz_locker.text := 'Petersstrasse 12 (Locker), 04109 Leipzig, Germany'
!new GeoLocation('geo_addr_pu_lpz_locker')
!geo_addr_pu_lpz_locker.latitude := 51.3404
!geo_addr_pu_lpz_locker.longitude := 12.3731
!insert (addr_pu_lpz_locker, geo_addr_pu_lpz_locker) into AddressContainsGeoLocation

!new Address('addr_dl_lpz_shared')
!addr_dl_lpz_shared.text := 'Karl-Liebknecht-Strasse 40, 04107 Leipzig, Germany'
!new GeoLocation('geo_addr_dl_lpz_shared')
!geo_addr_dl_lpz_shared.latitude := 51.3289
!geo_addr_dl_lpz_shared.longitude := 12.3719
!insert (addr_dl_lpz_shared, geo_addr_dl_lpz_shared) into AddressContainsGeoLocation

!new Address('addr_dl_lpz_office')
!addr_dl_lpz_office.text := 'Dittrichring 16, 04109 Leipzig, Germany'
!new GeoLocation('geo_addr_dl_lpz_office')
!geo_addr_dl_lpz_office.latitude := 51.3398
!geo_addr_dl_lpz_office.longitude := 12.3660
!insert (addr_dl_lpz_office, geo_addr_dl_lpz_office) into AddressContainsGeoLocation

!new Address('addr_pu_drs_depot')
!addr_pu_drs_depot.text := 'Ferdinandplatz 2 (Depot), 01069 Dresden, Germany'
!new GeoLocation('geo_addr_pu_drs_depot')
!geo_addr_pu_drs_depot.latitude := 51.0459
!geo_addr_pu_drs_depot.longitude := 13.7392
!insert (addr_pu_drs_depot, geo_addr_pu_drs_depot) into AddressContainsGeoLocation

!insert (shp_9101, addr_pu_lpz_locker) into ShipmentContainsPickUpAddress
!insert (shp_9101, addr_dl_lpz_shared) into ShipmentContainsDeliveryAddress

!insert (shp_9102, addr_pu_lpz_locker) into ShipmentContainsPickUpAddress
!insert (shp_9102, addr_dl_lpz_office) into ShipmentContainsDeliveryAddress

!insert (shp_9103, addr_pu_drs_depot) into ShipmentContainsPickUpAddress
!insert (shp_9103, addr_dl_lpz_shared) into ShipmentContainsDeliveryAddress
```
## Generation 5 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 66 | 0.00% |
| Multiplicities Errors | 0 | 22 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 0 | 4 | 0.00% |
| Lat/Lon (out of valid addresses) | 0 | 4 | 0.00% |
| Twitter | 0 | 1 | 0.00% |

# Generation 6
```
!new Station('st_nuremberg')
!new Station('st_augsburg')
!new Station('st_wuerzburg')

!new Customer('cust_050')
!cust_050.id := 'C-050'
!cust_050.name := 'Olivia Meier'
!cust_050.twitterUserName := 'olivia_meier'
!insert (st_nuremberg, cust_050) into StationContainsCustomer

!new Customer('cust_051')
!cust_051.id := 'C-051'
!cust_051.name := 'Pascal Laurent'
!cust_051.twitterUserName := 'p_laurent'
!insert (st_wuerzburg, cust_051) into StationContainsCustomer

!new Driver('drv_700')
!drv_700.id := 'D-700'
!drv_700.name := 'Katrin Seidel'
!insert (st_augsburg, drv_700) into StationContainsDriver

!new Driver('drv_701')
!drv_701.id := 'D-701'
!drv_701.name := 'Youssef Benali'
!insert (st_augsburg, drv_701) into StationContainsDriver

!new Shipment('shp_9601')
!shp_9601.id := 'S-9601'
!shp_9601.status := #NEW

!new Shipment('shp_9602')
!shp_9602.id := 'S-9602'
!shp_9602.status := #UNDERWAY

!new Shipment('shp_9603')
!shp_9603.id := 'S-9603'
!shp_9603.status := #ASSIGNED

!new Shipment('shp_9604')
!shp_9604.id := 'S-9604'
!shp_9604.status := #DELIVERED

!insert (cust_050, shp_9601) into CustomerConsistsOfShipment
!insert (cust_050, shp_9602) into CustomerConsistsOfShipment
!insert (cust_051, shp_9603) into CustomerConsistsOfShipment
!insert (cust_051, shp_9604) into CustomerConsistsOfShipment

!insert (st_augsburg, shp_9601) into StationShipment
!insert (st_augsburg, shp_9602) into StationShipment
!insert (st_wuerzburg, shp_9603) into StationShipment
!insert (st_nuremberg, shp_9604) into StationShipment

!insert (drv_700, shp_9602) into DriverShipment
!insert (drv_701, shp_9603) into DriverShipment
!insert (drv_700, shp_9604) into DriverShipment

!new Address('addr_pu_return_center')
!addr_pu_return_center.text := 'Gutenbergstrasse 12 (Returns), 86150 Augsburg, Germany'
!new GeoLocation('geo_addr_pu_return_center')
!geo_addr_pu_return_center.latitude := 48.3685
!geo_addr_pu_return_center.longitude := 10.8978
!insert (addr_pu_return_center, geo_addr_pu_return_center) into AddressContainsGeoLocation

!new Address('addr_dl_packstation_aux')
!addr_dl_packstation_aux.text := 'Paketstation 178, Bahnhofstrasse 2, 86150 Augsburg, Germany'
!new GeoLocation('geo_addr_dl_packstation_aux')
!geo_addr_dl_packstation_aux.latitude := 48.3658
!geo_addr_dl_packstation_aux.longitude := 10.8867
!insert (addr_dl_packstation_aux, geo_addr_dl_packstation_aux) into AddressContainsGeoLocation

!new Address('addr_pu_cust051_home')
!addr_pu_cust051_home.text := 'Sanderstrasse 19, 97070 Wuerzburg, Germany'
!new GeoLocation('geo_addr_pu_cust051_home')
!geo_addr_pu_cust051_home.latitude := 49.7949
!geo_addr_pu_cust051_home.longitude := 9.9312
!insert (addr_pu_cust051_home, geo_addr_pu_cust051_home) into AddressContainsGeoLocation

!new Address('addr_dl_wue_university')
!addr_dl_wue_university.text := 'Sanderring 2, 97070 Wuerzburg, Germany'
!new GeoLocation('geo_addr_dl_wue_university')
!geo_addr_dl_wue_university.latitude := 49.7893
!geo_addr_dl_wue_university.longitude := 9.9346
!insert (addr_dl_wue_university, geo_addr_dl_wue_university) into AddressContainsGeoLocation

!new Address('addr_pu_nue_service_desk')
!addr_pu_nue_service_desk.text := 'Bahnhofsplatz 9 (Service Desk), 90402 Nuremberg, Germany'
!new GeoLocation('geo_addr_pu_nue_service_desk')
!geo_addr_pu_nue_service_desk.latitude := 49.4456
!geo_addr_pu_nue_service_desk.longitude := 11.0822
!insert (addr_pu_nue_service_desk, geo_addr_pu_nue_service_desk) into AddressContainsGeoLocation

!new Address('addr_dl_nue_old_town')
!addr_dl_nue_old_town.text := 'Hauptmarkt 18, 90403 Nuremberg, Germany'
!new GeoLocation('geo_addr_dl_nue_old_town')
!geo_addr_dl_nue_old_town.latitude := 49.4542
!geo_addr_dl_nue_old_town.longitude := 11.0775
!insert (addr_dl_nue_old_town, geo_addr_dl_nue_old_town) into AddressContainsGeoLocation

!insert (shp_9601, addr_pu_return_center) into ShipmentContainsPickUpAddress
!insert (shp_9601, addr_dl_packstation_aux) into ShipmentContainsDeliveryAddress

!insert (shp_9602, addr_pu_return_center) into ShipmentContainsPickUpAddress
!insert (shp_9602, addr_pu_cust051_home) into ShipmentContainsDeliveryAddress

!insert (shp_9603, addr_pu_cust051_home) into ShipmentContainsPickUpAddress
!insert (shp_9603, addr_dl_wue_university) into ShipmentContainsDeliveryAddress

!insert (shp_9604, addr_pu_nue_service_desk) into ShipmentContainsPickUpAddress
!insert (shp_9604, addr_dl_nue_old_town) into ShipmentContainsDeliveryAddress
```
## Generation 6 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 88 | 0.00% |
| Multiplicities Errors | 0 | 29 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 1 | 6 | 16.67% |
| Lat/Lon (out of valid addresses) | 0 | 5 | 0.00% |
| Twitter | 0 | 2 | 0.00% |

| Invalid Addresses | 
|---| 
```
Gutenbergstrasse 12 (Returns), 86150 Augsburg, Germany
```

# Generation 7
```
!new Station('st_bremen')
!new Station('st_hanover')
!new Station('st_kiel')

!new Customer('cust_060')
!cust_060.id := 'C-060'
!cust_060.name := 'Quirin Adler'
!cust_060.twitterUserName := 'quirin_adler'

!new Customer('cust_061')
!cust_061.id := 'C-061'
!cust_061.name := 'Rina Okafor'
!cust_061.twitterUserName := 'rina_okafor'

!new Customer('cust_062')
!cust_062.id := 'C-062'
!cust_062.name := 'Santiago Ruiz'
!cust_062.twitterUserName := 'santi_ruiz'

!insert (st_bremen, cust_060) into StationContainsCustomer
!insert (st_bremen, cust_061) into StationContainsCustomer
!insert (st_bremen, cust_062) into StationContainsCustomer

!new Driver('drv_800')
!drv_800.id := 'D-800'
!drv_800.name := 'Franziska Holm'

!new Driver('drv_801')
!drv_801.id := 'D-801'
!drv_801.name := 'Nikolai Petrov'

!new Driver('drv_802')
!drv_802.id := 'D-802'
!drv_802.name := 'Merve Aydin'

!insert (st_hanover, drv_800) into StationContainsDriver
!insert (st_hanover, drv_801) into StationContainsDriver
!insert (st_bremen, drv_802) into StationContainsDriver

!new Shipment('shp_9901')
!shp_9901.id := 'S-9901'
!shp_9901.status := #NEW

!new Shipment('shp_9902')
!shp_9902.id := 'S-9902'
!shp_9902.status := #ASSIGNED

!new Shipment('shp_9903')
!shp_9903.id := 'S-9903'
!shp_9903.status := #DELIVERED

!insert (st_bremen, shp_9901) into StationShipment
!insert (st_bremen, shp_9902) into StationShipment
!insert (st_bremen, shp_9903) into StationShipment

!insert (cust_060, shp_9901) into CustomerConsistsOfShipment
!insert (cust_060, shp_9902) into CustomerConsistsOfShipment
!insert (cust_062, shp_9903) into CustomerConsistsOfShipment

!insert (drv_802, shp_9902) into DriverShipment

!new Address('addr_pu_bre_hub')
!addr_pu_bre_hub.text := 'Überseering 2 (Hub), 28217 Bremen, Germany'
!new GeoLocation('geo_addr_pu_bre_hub')
!geo_addr_pu_bre_hub.latitude := 53.1118
!geo_addr_pu_bre_hub.longitude := 8.7669
!insert (addr_pu_bre_hub, geo_addr_pu_bre_hub) into AddressContainsGeoLocation

!new Address('addr_dl_bre_home_quirin')
!addr_dl_bre_home_quirin.text := 'Böttcherstrasse 3, 28195 Bremen, Germany'
!new GeoLocation('geo_addr_dl_bre_home_quirin')
!geo_addr_dl_bre_home_quirin.latitude := 53.0759
!geo_addr_dl_bre_home_quirin.longitude := 8.8073
!insert (addr_dl_bre_home_quirin, geo_addr_dl_bre_home_quirin) into AddressContainsGeoLocation

!new Address('addr_dl_bre_office_quirin')
!addr_dl_bre_office_quirin.text := 'Herdentorsteinweg 25, 28195 Bremen, Germany'
!new GeoLocation('geo_addr_dl_bre_office_quirin')
!geo_addr_dl_bre_office_quirin.latitude := 53.0807
!geo_addr_dl_bre_office_quirin.longitude := 8.8050
!insert (addr_dl_bre_office_quirin, geo_addr_dl_bre_office_quirin) into AddressContainsGeoLocation

!new Address('addr_pu_bre_home_santiago')
!addr_pu_bre_home_santiago.text := 'Vor dem Steintor 120, 28203 Bremen, Germany'
!new GeoLocation('geo_addr_pu_bre_home_santiago')
!geo_addr_pu_bre_home_santiago.latitude := 53.0744
!geo_addr_pu_bre_home_santiago.longitude := 8.8315
!insert (addr_pu_bre_home_santiago, geo_addr_pu_bre_home_santiago) into AddressContainsGeoLocation

!new Address('addr_dl_bre_hub_returns')
!addr_dl_bre_hub_returns.text := 'Hansator 5 (Returns Desk), 28217 Bremen, Germany'
!new GeoLocation('geo_addr_dl_bre_hub_returns')
!geo_addr_dl_bre_hub_returns.latitude := 53.1092
!geo_addr_dl_bre_hub_returns.longitude := 8.7584
!insert (addr_dl_bre_hub_returns, geo_addr_dl_bre_hub_returns) into AddressContainsGeoLocation

!insert (shp_9901, addr_pu_bre_hub) into ShipmentContainsPickUpAddress
!insert (shp_9901, addr_dl_bre_home_quirin) into ShipmentContainsDeliveryAddress

!insert (shp_9902, addr_pu_bre_hub) into ShipmentContainsPickUpAddress
!insert (shp_9902, addr_dl_bre_office_quirin) into ShipmentContainsDeliveryAddress

!insert (shp_9903, addr_pu_bre_home_santiago) into ShipmentContainsPickUpAddress
!insert (shp_9903, addr_dl_bre_hub_returns) into ShipmentContainsDeliveryAddress
```
## Generation 7 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 82 | 0.00% |
| Multiplicities Errors | 0 | 24 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 2 | 5 | 40.00% |
| Lat/Lon (out of valid addresses) | 0 | 3 | 0.00% |
| Twitter | 0 | 3 | 0.00% |

| Invalid Addresses | 
|---| 
```
Überseering 2 (Hub), 28217 Bremen, Germany
```
```
Hansator 5 (Returns Desk), 28217 Bremen, Germany
```

# Generation 8
```
!new Station('st_dortmund')
!new Station('st_essen')

!new Customer('cust_070')
!cust_070.id := 'C-070'
!cust_070.name := 'Tanja Moeller'
!cust_070.twitterUserName := 'tanja_moeller'

!new Customer('cust_071')
!cust_071.id := 'C-071'
!cust_071.name := 'Ugur Koc'
!cust_071.twitterUserName := 'ugur_koc'

!new Customer('cust_072')
!cust_072.id := 'C-072'
!cust_072.name := 'Valeria Conte'
!cust_072.twitterUserName := 'valeria_conte'

!insert (st_dortmund, cust_070) into StationContainsCustomer
!insert (st_dortmund, cust_071) into StationContainsCustomer
!insert (st_dortmund, cust_072) into StationContainsCustomer

!new Driver('drv_900')
!drv_900.id := 'D-900'
!drv_900.name := 'Kai Hartmann'

!new Driver('drv_901')
!drv_901.id := 'D-901'
!drv_901.name := 'Zehra Demir'

!insert (st_essen, drv_900) into StationContainsDriver
!insert (st_essen, drv_901) into StationContainsDriver

!new Shipment('shp_11001')
!shp_11001.id := 'S-11001'
!shp_11001.status := #NEW

!new Shipment('shp_11002')
!shp_11002.id := 'S-11002'
!shp_11002.status := #ASSIGNED

!new Shipment('shp_11003')
!shp_11003.id := 'S-11003'
!shp_11003.status := #DELIVERED

!insert (cust_070, shp_11001) into CustomerConsistsOfShipment
!insert (cust_070, shp_11002) into CustomerConsistsOfShipment
!insert (cust_071, shp_11003) into CustomerConsistsOfShipment

!insert (st_dortmund, shp_11001) into StationShipment
!insert (st_dortmund, shp_11002) into StationShipment
!insert (st_dortmund, shp_11003) into StationShipment

!new Address('addr_pu_shared_dtm')
!addr_pu_shared_dtm.text := 'Borsigplatz 1, 44145 Dortmund, Germany'
!new GeoLocation('geo_addr_pu_shared_dtm')
!geo_addr_pu_shared_dtm.latitude := 51.5283
!geo_addr_pu_shared_dtm.longitude := 7.4660
!insert (addr_pu_shared_dtm, geo_addr_pu_shared_dtm) into AddressContainsGeoLocation

!new Address('addr_pu_11003')
!addr_pu_11003.text := 'Friedensplatz 1, 44135 Dortmund, Germany'
!new GeoLocation('geo_addr_pu_11003')
!geo_addr_pu_11003.latitude := 51.5136
!geo_addr_pu_11003.longitude := 7.4653
!insert (addr_pu_11003, geo_addr_pu_11003) into AddressContainsGeoLocation

!new Address('addr_dl_shared_dtm')
!addr_dl_shared_dtm.text := 'Westenhellweg 102, 44137 Dortmund, Germany'
!new GeoLocation('geo_addr_dl_shared_dtm')
!geo_addr_dl_shared_dtm.latitude := 51.5149
!geo_addr_dl_shared_dtm.longitude := 7.4667
!insert (addr_dl_shared_dtm, geo_addr_dl_shared_dtm) into AddressContainsGeoLocation

!new Address('addr_dl_11002')
!addr_dl_11002.text := 'Phoenixseestrasse 10, 44263 Dortmund, Germany'
!new GeoLocation('geo_addr_dl_11002')
!geo_addr_dl_11002.latitude := 51.4862
!geo_addr_dl_11002.longitude := 7.5045
!insert (addr_dl_11002, geo_addr_dl_11002) into AddressContainsGeoLocation

!insert (shp_11001, addr_pu_shared_dtm) into ShipmentContainsPickUpAddress
!insert (shp_11001, addr_dl_shared_dtm) into ShipmentContainsDeliveryAddress

!insert (shp_11002, addr_pu_shared_dtm) into ShipmentContainsPickUpAddress
!insert (shp_11002, addr_dl_11002) into ShipmentContainsDeliveryAddress

!insert (shp_11003, addr_pu_11003) into ShipmentContainsPickUpAddress
!insert (shp_11003, addr_dl_shared_dtm) into ShipmentContainsDeliveryAddress
```
## Generation 8 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 70 | 0.00% |
| Multiplicities Errors | 0 | 21 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 0 | 4 | 0.00% |
| Lat/Lon (out of valid addresses) | 0 | 4 | 0.00% |
| Twitter | 0 | 3 | 0.00% |

# Generation 9
```
!new Station('st_freiburg')

!new Customer('cust_080')
!cust_080.id := 'C-080'
!cust_080.name := 'Wiebke Schuster'
!cust_080.twitterUserName := 'wiebke_s'
!insert (st_freiburg, cust_080) into StationContainsCustomer

!new Customer('cust_081')
!cust_081.id := 'C-081'
!cust_081.name := 'Xavier Dupont'
!cust_081.twitterUserName := 'xdupont'
!insert (st_freiburg, cust_081) into StationContainsCustomer

!new Driver('drv_950')
!drv_950.id := 'D-950'
!drv_950.name := 'Elif Yavuz'
!insert (st_freiburg, drv_950) into StationContainsDriver

!new Shipment('shp_12001')
!shp_12001.id := 'S-12001'
!shp_12001.status := #NEW

!new Shipment('shp_12002')
!shp_12002.id := 'S-12002'
!shp_12002.status := #NEW

!insert (cust_080, shp_12001) into CustomerConsistsOfShipment
!insert (cust_080, shp_12002) into CustomerConsistsOfShipment

!insert (st_freiburg, shp_12001) into StationShipment
!insert (st_freiburg, shp_12002) into StationShipment

!new Address('addr_pu_12001_home')
!addr_pu_12001_home.text := 'Habsburgerstrasse 30, 79104 Freiburg im Breisgau, Germany'
!new GeoLocation('geo_addr_pu_12001_home')
!geo_addr_pu_12001_home.latitude := 47.9996
!geo_addr_pu_12001_home.longitude := 7.8616
!insert (addr_pu_12001_home, geo_addr_pu_12001_home) into AddressContainsGeoLocation

!new Address('addr_dl_12001_locker')
!addr_dl_12001_locker.text := 'Paketstation 125, Bertoldstrasse 45, 79098 Freiburg im Breisgau, Germany'
!new GeoLocation('geo_addr_dl_12001_locker')
!geo_addr_dl_12001_locker.latitude := 47.9957
!geo_addr_dl_12001_locker.longitude := 7.8522
!insert (addr_dl_12001_locker, geo_addr_dl_12001_locker) into AddressContainsGeoLocation

!insert (shp_12001, addr_pu_12001_home) into ShipmentContainsPickUpAddress
!insert (shp_12001, addr_dl_12001_locker) into ShipmentContainsDeliveryAddress

!new Address('addr_pu_12002_shop')
!addr_pu_12002_shop.text := 'Kaiser-Joseph-Strasse 248, 79098 Freiburg im Breisgau, Germany'
!new GeoLocation('geo_addr_pu_12002_shop')
!geo_addr_pu_12002_shop.latitude := 47.9952
!geo_addr_pu_12002_shop.longitude := 7.8506
!insert (addr_pu_12002_shop, geo_addr_pu_12002_shop) into AddressContainsGeoLocation

!new Address('addr_dl_12002_home')
!addr_dl_12002_home.text := 'Zähringer Strasse 12, 79108 Freiburg im Breisgau, Germany'
!new GeoLocation('geo_addr_dl_12002_home')
!geo_addr_dl_12002_home.latitude := 48.0225
!geo_addr_dl_12002_home.longitude := 7.8498
!insert (addr_dl_12002_home, geo_addr_dl_12002_home) into AddressContainsGeoLocation

!insert (shp_12002, addr_pu_12002_shop) into ShipmentContainsPickUpAddress
!insert (shp_12002, addr_dl_12002_home) into ShipmentContainsDeliveryAddress
```
## Generation 9 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 53 | 0.00% |
| Multiplicities Errors | 0 | 15 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 0 | 4 | 0.00% |
| Lat/Lon (out of valid addresses) | 0 | 4 | 0.00% |
| Twitter | 0 | 2 | 0.00% |

# Generation 10
```
!new Station('st_bonn')
!new Station('st_mannheim')
!new Station('st_trier')

!new Customer('cust_090')
!cust_090.id := 'C-090'
!cust_090.name := 'Yara Stein'
!cust_090.twitterUserName := 'yara_stein'
!insert (st_mannheim, cust_090) into StationContainsCustomer

!new Customer('cust_091')
!cust_091.id := 'C-091'
!cust_091.name := 'Zaid Nasser'
!cust_091.twitterUserName := 'zaid_nasser'
!insert (st_mannheim, cust_091) into StationContainsCustomer

!new Customer('cust_092')
!cust_092.id := 'C-092'
!cust_092.name := 'Alicia Becker'
!cust_092.twitterUserName := 'alicia_becker'
!insert (st_trier, cust_092) into StationContainsCustomer

!new Driver('drv_1000')
!drv_1000.id := 'D-1000'
!drv_1000.name := 'Matthias Fuchs'
!insert (st_bonn, drv_1000) into StationContainsDriver

!new Driver('drv_1001')
!drv_1001.id := 'D-1001'
!drv_1001.name := 'Noor Elahi'
!insert (st_bonn, drv_1001) into StationContainsDriver

!new Shipment('shp_13001')
!shp_13001.id := 'S-13001'
!shp_13001.status := #NEW

!new Shipment('shp_13002')
!shp_13002.id := 'S-13002'
!shp_13002.status := #ASSIGNED

!new Shipment('shp_13003')
!shp_13003.id := 'S-13003'
!shp_13003.status := #UNDERWAY

!new Shipment('shp_13004')
!shp_13004.id := 'S-13004'
!shp_13004.status := #DELIVERED

!new Shipment('shp_13005')
!shp_13005.id := 'S-13005'
!shp_13005.status := #NEW

!new Shipment('shp_13006')
!shp_13006.id := 'S-13006'
!shp_13006.status := #ASSIGNED

!insert (cust_090, shp_13001) into CustomerConsistsOfShipment
!insert (cust_090, shp_13002) into CustomerConsistsOfShipment
!insert (cust_091, shp_13003) into CustomerConsistsOfShipment
!insert (cust_091, shp_13004) into CustomerConsistsOfShipment
!insert (cust_092, shp_13005) into CustomerConsistsOfShipment
!insert (cust_092, shp_13006) into CustomerConsistsOfShipment

!insert (st_bonn, shp_13001) into StationShipment
!insert (st_bonn, shp_13002) into StationShipment
!insert (st_bonn, shp_13003) into StationShipment
!insert (st_bonn, shp_13004) into StationShipment
!insert (st_bonn, shp_13005) into StationShipment
!insert (st_bonn, shp_13006) into StationShipment

!insert (drv_1000, shp_13002) into DriverShipment
!insert (drv_1000, shp_13003) into DriverShipment
!insert (drv_1000, shp_13004) into DriverShipment
!insert (drv_1000, shp_13006) into DriverShipment

!new Address('addr_pu_bonn_depot')
!addr_pu_bonn_depot.text := 'Auguststrasse 45 (Depot), 53229 Bonn, Germany'
!new GeoLocation('geo_addr_pu_bonn_depot')
!geo_addr_pu_bonn_depot.latitude := 50.7352
!geo_addr_pu_bonn_depot.longitude := 7.1399
!insert (addr_pu_bonn_depot, geo_addr_pu_bonn_depot) into AddressContainsGeoLocation

!new Address('addr_dl_mh_center')
!addr_dl_mh_center.text := 'Planken 10, 68159 Mannheim, Germany'
!new GeoLocation('geo_addr_dl_mh_center')
!geo_addr_dl_mh_center.latitude := 49.4891
!geo_addr_dl_mh_center.longitude := 8.4669
!insert (addr_dl_mh_center, geo_addr_dl_mh_center) into AddressContainsGeoLocation

!new Address('addr_dl_mh_locker')
!addr_dl_mh_locker.text := 'Paketstation 22, Willy-Brandt-Platz 1, 68161 Mannheim, Germany'
!new GeoLocation('geo_addr_dl_mh_locker')
!geo_addr_dl_mh_locker.latitude := 49.4796
!geo_addr_dl_mh_locker.longitude := 8.4695
!insert (addr_dl_mh_locker, geo_addr_dl_mh_locker) into AddressContainsGeoLocation

!new Address('addr_dl_trier_station')
!addr_dl_trier_station.text := 'Bahnhofsplatz 1, 54292 Trier, Germany'
!new GeoLocation('geo_addr_dl_trier_station')
!geo_addr_dl_trier_station.latitude := 49.7566
!geo_addr_dl_trier_station.longitude := 6.6432
!insert (addr_dl_trier_station, geo_addr_dl_trier_station) into AddressContainsGeoLocation

!new Address('addr_dl_trier_uni')
!addr_dl_trier_uni.text := 'Universitaetsring 15, 54296 Trier, Germany'
!new GeoLocation('geo_addr_dl_trier_uni')
!geo_addr_dl_trier_uni.latitude := 49.7474
!geo_addr_dl_trier_uni.longitude := 6.6866
!insert (addr_dl_trier_uni, geo_addr_dl_trier_uni) into AddressContainsGeoLocation

!new Address('addr_pu_mh_return')
!addr_pu_mh_return.text := 'Seckenheimer Strasse 10, 68165 Mannheim, Germany'
!new GeoLocation('geo_addr_pu_mh_return')
!geo_addr_pu_mh_return.latitude := 49.4771
!geo_addr_pu_mh_return.longitude := 8.4973
!insert (addr_pu_mh_return, geo_addr_pu_mh_return) into AddressContainsGeoLocation

!new Address('addr_dl_bonn_repair')
!addr_dl_bonn_repair.text := 'Bornheimer Strasse 135 (Repair Center), 53119 Bonn, Germany'
!new GeoLocation('geo_addr_dl_bonn_repair')
!geo_addr_dl_bonn_repair.latitude := 50.7444
!geo_addr_dl_bonn_repair.longitude := 7.0865
!insert (addr_dl_bonn_repair, geo_addr_dl_bonn_repair) into AddressContainsGeoLocation

!insert (shp_13001, addr_pu_bonn_depot) into ShipmentContainsPickUpAddress
!insert (shp_13001, addr_dl_mh_center) into ShipmentContainsDeliveryAddress

!insert (shp_13002, addr_pu_bonn_depot) into ShipmentContainsPickUpAddress
!insert (shp_13002, addr_dl_mh_locker) into ShipmentContainsDeliveryAddress

!insert (shp_13003, addr_pu_bonn_depot) into ShipmentContainsPickUpAddress
!insert (shp_13003, addr_dl_mh_center) into ShipmentContainsDeliveryAddress

!insert (shp_13004, addr_pu_bonn_depot) into ShipmentContainsPickUpAddress
!insert (shp_13004, addr_dl_trier_station) into ShipmentContainsDeliveryAddress

!insert (shp_13005, addr_pu_bonn_depot) into ShipmentContainsPickUpAddress
!insert (shp_13005, addr_dl_trier_uni) into ShipmentContainsDeliveryAddress

!insert (shp_13006, addr_pu_mh_return) into ShipmentContainsPickUpAddress
!insert (shp_13006, addr_dl_bonn_repair) into ShipmentContainsDeliveryAddress
```
## Generation 10 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 114 | 0.00% |
| Multiplicities Errors | 0 | 40 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 1 | 7 | 14.29% |
| Lat/Lon (out of valid addresses) | 0 | 6 | 0.00% |
| Twitter | 0 | 3 | 0.00% |

| Invalid Addresses | 
|---| 
```
Auguststrasse 45 (Depot), 53229 Bonn, Germany
```

# Generation 11
```
!new Station('st_ulm')
!new Station('st_kassel')
!new Station('st_regensburg')

!new Customer('cust_100')
!cust_100.id := 'C-100'
!cust_100.name := 'Benno Hartl'
!cust_100.twitterUserName := 'benno_hartl'
!insert (st_ulm, cust_100) into StationContainsCustomer

!new Customer('cust_101')
!cust_101.id := 'C-101'
!cust_101.name := 'Lina Aydogan'
!cust_101.twitterUserName := 'lina_ayd'
!insert (st_kassel, cust_101) into StationContainsCustomer

!new Customer('cust_102')
!cust_102.id := 'C-102'
!cust_102.name := 'Marek Nowak'
!cust_102.twitterUserName := 'marek_nowak'
!insert (st_regensburg, cust_102) into StationContainsCustomer

!new Customer('cust_103')
!cust_103.id := 'C-103'
!cust_103.name := 'Sophie Nguyen'
!cust_103.twitterUserName := 'sophie_ng'
!insert (st_regensburg, cust_103) into StationContainsCustomer

!new Driver('drv_1100')
!drv_1100.id := 'D-1100'
!drv_1100.name := 'Hanna Brunner'
!insert (st_ulm, drv_1100) into StationContainsDriver

!new Driver('drv_1101')
!drv_1101.id := 'D-1101'
!drv_1101.name := 'Ismail Cetin'
!insert (st_ulm, drv_1101) into StationContainsDriver

!new Driver('drv_1102')
!drv_1102.id := 'D-1102'
!drv_1102.name := 'Jens Kolb'
!insert (st_ulm, drv_1102) into StationContainsDriver

!new Driver('drv_1300')
!drv_1300.id := 'D-1300'
!drv_1300.name := 'Katarina Vukovic'
!insert (st_regensburg, drv_1300) into StationContainsDriver

!new Shipment('shp_14001')
!shp_14001.id := 'S-14001'
!shp_14001.status := #NEW

!new Shipment('shp_14002')
!shp_14002.id := 'S-14002'
!shp_14002.status := #ASSIGNED

!new Shipment('shp_14003')
!shp_14003.id := 'S-14003'
!shp_14003.status := #ASSIGNED

!new Shipment('shp_14004')
!shp_14004.id := 'S-14004'
!shp_14004.status := #DELIVERED

!new Shipment('shp_14005')
!shp_14005.id := 'S-14005'
!shp_14005.status := #NEW

!insert (cust_100, shp_14001) into CustomerConsistsOfShipment
!insert (cust_100, shp_14002) into CustomerConsistsOfShipment
!insert (cust_101, shp_14003) into CustomerConsistsOfShipment
!insert (cust_101, shp_14004) into CustomerConsistsOfShipment
!insert (cust_101, shp_14005) into CustomerConsistsOfShipment

!insert (st_ulm, shp_14001) into StationShipment
!insert (st_ulm, shp_14002) into StationShipment
!insert (st_kassel, shp_14003) into StationShipment
!insert (st_kassel, shp_14004) into StationShipment
!insert (st_ulm, shp_14005) into StationShipment

!insert (drv_1100, shp_14002) into DriverShipment
!insert (drv_1101, shp_14004) into DriverShipment

!new Address('addr_pu_ulm_store')
!addr_pu_ulm_store.text := 'Bahnhofstrasse 1, 89073 Ulm, Germany'
!new GeoLocation('geo_addr_pu_ulm_store')
!geo_addr_pu_ulm_store.latitude := 48.3984
!geo_addr_pu_ulm_store.longitude := 9.9916
!insert (addr_pu_ulm_store, geo_addr_pu_ulm_store) into AddressContainsGeoLocation

!new Address('addr_dl_ulm_home1')
!addr_dl_ulm_home1.text := 'Fischergasse 12, 89073 Ulm, Germany'
!new GeoLocation('geo_addr_dl_ulm_home1')
!geo_addr_dl_ulm_home1.latitude := 48.3971
!geo_addr_dl_ulm_home1.longitude := 9.9939
!insert (addr_dl_ulm_home1, geo_addr_dl_ulm_home1) into AddressContainsGeoLocation

!new Address('addr_dl_str_lab')
!addr_dl_str_lab.text := 'Rotebuehlplatz 20, 70173 Stuttgart, Germany'
!new GeoLocation('geo_addr_dl_str_lab')
!geo_addr_dl_str_lab.latitude := 48.7760
!geo_addr_dl_str_lab.longitude := 9.1761
!insert (addr_dl_str_lab, geo_addr_dl_str_lab) into AddressContainsGeoLocation

!new Address('addr_pu_ks_hub')
!addr_pu_ks_hub.text := 'Rudolf-Schwander-Strasse 1 (Hub), 34117 Kassel, Germany'
!new GeoLocation('geo_addr_pu_ks_hub')
!geo_addr_pu_ks_hub.latitude := 51.3127
!geo_addr_pu_ks_hub.longitude := 9.4797
!insert (addr_pu_ks_hub, geo_addr_pu_ks_hub) into AddressContainsGeoLocation

!new Address('addr_dl_ks_uni')
!addr_dl_ks_uni.text := 'Moenchebergstrasse 19, 34125 Kassel, Germany'
!new GeoLocation('geo_addr_dl_ks_uni')
!geo_addr_dl_ks_uni.latitude := 51.3255
!geo_addr_dl_ks_uni.longitude := 9.5134
!insert (addr_dl_ks_uni, geo_addr_dl_ks_uni) into AddressContainsGeoLocation

!new Address('addr_pu_ks_market')
!addr_pu_ks_market.text := 'Koenigsplatz 61, 34117 Kassel, Germany'
!new GeoLocation('geo_addr_pu_ks_market')
!geo_addr_pu_ks_market.latitude := 51.3165
!geo_addr_pu_ks_market.longitude := 9.4950
!insert (addr_pu_ks_market, geo_addr_pu_ks_market) into AddressContainsGeoLocation

!new Address('addr_dl_fulda_clinic')
!addr_dl_fulda_clinic.text := 'Pacelliallee 4, 36043 Fulda, Germany'
!new GeoLocation('geo_addr_dl_fulda_clinic')
!geo_addr_dl_fulda_clinic.latitude := 50.5520
!geo_addr_dl_fulda_clinic.longitude := 9.6730
!insert (addr_dl_fulda_clinic, geo_addr_dl_fulda_clinic) into AddressContainsGeoLocation

!insert (shp_14001, addr_pu_ulm_store) into ShipmentContainsPickUpAddress
!insert (shp_14001, addr_dl_ulm_home1) into ShipmentContainsDeliveryAddress

!insert (shp_14002, addr_pu_ulm_store) into ShipmentContainsPickUpAddress
!insert (shp_14002, addr_dl_str_lab) into ShipmentContainsDeliveryAddress

!insert (shp_14003, addr_pu_ks_hub) into ShipmentContainsPickUpAddress
!insert (shp_14003, addr_dl_ks_uni) into ShipmentContainsDeliveryAddress

!insert (shp_14004, addr_pu_ks_market) into ShipmentContainsPickUpAddress
!insert (shp_14004, addr_dl_fulda_clinic) into ShipmentContainsDeliveryAddress

!insert (shp_14005, addr_pu_ulm_store) into ShipmentContainsPickUpAddress
!insert (shp_14005, addr_dl_ks_uni) into ShipmentContainsDeliveryAddress
```
## Generation 11 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 118 | 0.00% |
| Multiplicities Errors | 0 | 37 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 0 | 7 | 0.00% |
| Lat/Lon (out of valid addresses) | 0 | 7 | 0.00% |
| Twitter | 0 | 4 | 0.00% |

# Generation 12
```
!new Station('st_rostock')
!new Station('st_magdeburg')

!new Customer('cust_200')
!cust_200.id := 'C-200'
!cust_200.name := 'Helmut Kranz'
!cust_200.twitterUserName := 'helmut_kranz'

!new Customer('cust_201')
!cust_201.id := 'C-201'
!cust_201.name := 'Irina Volkov'
!cust_201.twitterUserName := 'irinav'

!new Customer('cust_202')
!cust_202.id := 'C-202'
!cust_202.name := 'Jonas Seifert'
!cust_202.twitterUserName := 'jonas_seifert'

!insert (st_rostock, cust_200) into StationContainsCustomer
!insert (st_rostock, cust_201) into StationContainsCustomer
!insert (st_magdeburg, cust_202) into StationContainsCustomer

!new Driver('drv_2000')
!drv_2000.id := 'D-2000'
!drv_2000.name := 'Mara Lenz'

!new Driver('drv_2001')
!drv_2001.id := 'D-2001'
!drv_2001.name := 'Nils Thomsen'

!new Driver('drv_2002')
!drv_2002.id := 'D-2002'
!drv_2002.name := 'Oana Popescu'

!insert (st_magdeburg, drv_2000) into StationContainsDriver
!insert (st_magdeburg, drv_2001) into StationContainsDriver
!insert (st_rostock, drv_2002) into StationContainsDriver

!new Shipment('shp_20001')
!shp_20001.id := 'S-20001'
!shp_20001.status := #NEW

!new Shipment('shp_20002')
!shp_20002.id := 'S-20002'
!shp_20002.status := #ASSIGNED

!new Shipment('shp_20003')
!shp_20003.id := 'S-20003'
!shp_20003.status := #UNDERWAY

!new Shipment('shp_20004')
!shp_20004.id := 'S-20004'
!shp_20004.status := #DELIVERED

!insert (cust_200, shp_20001) into CustomerConsistsOfShipment
!insert (cust_200, shp_20002) into CustomerConsistsOfShipment
!insert (cust_200, shp_20003) into CustomerConsistsOfShipment
!insert (cust_202, shp_20004) into CustomerConsistsOfShipment

!insert (st_magdeburg, shp_20001) into StationShipment
!insert (st_magdeburg, shp_20002) into StationShipment
!insert (st_magdeburg, shp_20003) into StationShipment
!insert (st_rostock, shp_20004) into StationShipment

!insert (drv_2000, shp_20002) into DriverShipment
!insert (drv_2000, shp_20003) into DriverShipment
!insert (drv_2000, shp_20004) into DriverShipment

!new Address('addr_pu_mdg_warehouse')
!addr_pu_mdg_warehouse.text := 'Walter-Rathenau-Strasse 1 (Warehouse), 39106 Magdeburg, Germany'
!new GeoLocation('geo_addr_pu_mdg_warehouse')
!geo_addr_pu_mdg_warehouse.latitude := 52.1425
!geo_addr_pu_mdg_warehouse.longitude := 11.6466
!insert (addr_pu_mdg_warehouse, geo_addr_pu_mdg_warehouse) into AddressContainsGeoLocation

!new Address('addr_dl_hro_oldtown')
!addr_dl_hro_oldtown.text := 'Kroepeliner Strasse 12, 18055 Rostock, Germany'
!new GeoLocation('geo_addr_dl_hro_oldtown')
!geo_addr_dl_hro_oldtown.latitude := 54.0887
!geo_addr_dl_hro_oldtown.longitude := 12.1402
!insert (addr_dl_hro_oldtown, geo_addr_dl_hro_oldtown) into AddressContainsGeoLocation

!new Address('addr_dl_hro_locker')
!addr_dl_hro_locker.text := 'Paketstation 308, Doberaner Strasse 110, 18057 Rostock, Germany'
!new GeoLocation('geo_addr_dl_hro_locker')
!geo_addr_dl_hro_locker.latitude := 54.0812
!geo_addr_dl_hro_locker.longitude := 12.1120
!insert (addr_dl_hro_locker, geo_addr_dl_hro_locker) into AddressContainsGeoLocation

!new Address('addr_dl_hro_university')
!addr_dl_hro_university.text := 'Universitaetsplatz 1, 18055 Rostock, Germany'
!new GeoLocation('geo_addr_dl_hro_university')
!geo_addr_dl_hro_university.latitude := 54.0880
!geo_addr_dl_hro_university.longitude := 12.1321
!insert (addr_dl_hro_university, geo_addr_dl_hro_university) into AddressContainsGeoLocation

!new Address('addr_pu_hro_port')
!addr_pu_hro_port.text := 'Am Seehafen 1, 18147 Rostock, Germany'
!new GeoLocation('geo_addr_pu_hro_port')
!geo_addr_pu_hro_port.latitude := 54.1373
!geo_addr_pu_hro_port.longitude := 12.1071
!insert (addr_pu_hro_port, geo_addr_pu_hro_port) into AddressContainsGeoLocation

!new Address('addr_dl_mdg_sciencepark')
!addr_dl_mdg_sciencepark.text := 'Universitaetsplatz 2, 39106 Magdeburg, Germany'
!new GeoLocation('geo_addr_dl_mdg_sciencepark')
!geo_addr_dl_mdg_sciencepark.latitude := 52.1396
!geo_addr_dl_mdg_sciencepark.longitude := 11.6406
!insert (addr_dl_mdg_sciencepark, geo_addr_dl_mdg_sciencepark) into AddressContainsGeoLocation

!insert (shp_20001, addr_pu_mdg_warehouse) into ShipmentContainsPickUpAddress
!insert (shp_20001, addr_dl_hro_oldtown) into ShipmentContainsDeliveryAddress

!insert (shp_20002, addr_pu_mdg_warehouse) into ShipmentContainsPickUpAddress
!insert (shp_20002, addr_dl_hro_locker) into ShipmentContainsDeliveryAddress

!insert (shp_20003, addr_pu_mdg_warehouse) into ShipmentContainsPickUpAddress
!insert (shp_20003, addr_dl_hro_university) into ShipmentContainsDeliveryAddress

!insert (shp_20004, addr_pu_hro_port) into ShipmentContainsPickUpAddress
!insert (shp_20004, addr_dl_mdg_sciencepark) into ShipmentContainsDeliveryAddress
```
## Generation 12 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 96 | 0.00% |
| Multiplicities Errors | 0 | 31 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 2 | 6 | 33.33% |
| Lat/Lon (out of valid addresses) | 0 | 4 | 0.00% |
| Twitter | 0 | 3 | 0.00% |

| Invalid Addresses | 
|---| 
```
Am Seehafen 1, 18147 Rostock, Germany
```
```
Walter-Rathenau-Strasse 1 (Warehouse), 39106 Magdeburg, Germany
```

# Generation 13
```
!new Station('st_saarbruecken')
!new Station('st_mainz')
!new Station('st_luebeck')

!new Customer('cust_300')
!cust_300.id := 'C-300'
!cust_300.name := 'Nele Winkler'
!cust_300.twitterUserName := 'nele_winkler'
!insert (st_saarbruecken, cust_300) into StationContainsCustomer

!new Customer('cust_301')
!cust_301.id := 'C-301'
!cust_301.name := 'Oleg Smirnov'
!cust_301.twitterUserName := 'oleg_smirnov'
!insert (st_saarbruecken, cust_301) into StationContainsCustomer

!new Customer('cust_302')
!cust_302.id := 'C-302'
!cust_302.name := 'Petra Jahn'
!cust_302.twitterUserName := 'petra_jahn'
!insert (st_luebeck, cust_302) into StationContainsCustomer

!new Driver('drv_3000')
!drv_3000.id := 'D-3000'
!drv_3000.name := 'Robin Schaefer'
!insert (st_mainz, drv_3000) into StationContainsDriver

!new Driver('drv_3001')
!drv_3001.id := 'D-3001'
!drv_3001.name := 'Salma Darwish'
!insert (st_mainz, drv_3001) into StationContainsDriver

!new Driver('drv_3002')
!drv_3002.id := 'D-3002'
!drv_3002.name := 'Tommy Hansen'
!insert (st_luebeck, drv_3002) into StationContainsDriver

!new Shipment('shp_30001')
!shp_30001.id := 'S-30001'
!shp_30001.status := #NEW

!new Shipment('shp_30002')
!shp_30002.id := 'S-30002'
!shp_30002.status := #ASSIGNED

!new Shipment('shp_30003')
!shp_30003.id := 'S-30003'
!shp_30003.status := #DELIVERED

!new Shipment('shp_30004')
!shp_30004.id := 'S-30004'
!shp_30004.status := #UNDERWAY

!new Shipment('shp_30005')
!shp_30005.id := 'S-30005'
!shp_30005.status := #UNDERWAY

!new Shipment('shp_30006')
!shp_30006.id := 'S-30006'
!shp_30006.status := #DELIVERED

!insert (cust_300, shp_30001) into CustomerConsistsOfShipment
!insert (cust_300, shp_30002) into CustomerConsistsOfShipment
!insert (cust_301, shp_30003) into CustomerConsistsOfShipment
!insert (cust_301, shp_30004) into CustomerConsistsOfShipment
!insert (cust_302, shp_30005) into CustomerConsistsOfShipment
!insert (cust_302, shp_30006) into CustomerConsistsOfShipment

!insert (st_saarbruecken, shp_30001) into StationShipment
!insert (st_saarbruecken, shp_30002) into StationShipment
!insert (st_saarbruecken, shp_30003) into StationShipment
!insert (st_saarbruecken, shp_30004) into StationShipment
!insert (st_luebeck, shp_30005) into StationShipment
!insert (st_luebeck, shp_30006) into StationShipment

!insert (drv_3002, shp_30005) into DriverShipment
!insert (drv_3002, shp_30006) into DriverShipment

!new Address('addr_pu_sbr_depot')
!addr_pu_sbr_depot.text := 'Mainzer Strasse 120 (Depot), 66121 Saarbruecken, Germany'
!new GeoLocation('geo_addr_pu_sbr_depot')
!geo_addr_pu_sbr_depot.latitude := 49.2392
!geo_addr_pu_sbr_depot.longitude := 6.9996
!insert (addr_pu_sbr_depot, geo_addr_pu_sbr_depot) into AddressContainsGeoLocation

!new Address('addr_pu_sbr_home_oleg')
!addr_pu_sbr_home_oleg.text := 'Bismarckstrasse 5, 66121 Saarbruecken, Germany'
!new GeoLocation('geo_addr_pu_sbr_home_oleg')
!geo_addr_pu_sbr_home_oleg.latitude := 49.2410
!geo_addr_pu_sbr_home_oleg.longitude := 7.0041
!insert (addr_pu_sbr_home_oleg, geo_addr_pu_sbr_home_oleg) into AddressContainsGeoLocation

!new Address('addr_dl_mainz_office')
!addr_dl_mainz_office.text := 'Rheinallee 1, 55118 Mainz, Germany'
!new GeoLocation('geo_addr_dl_mainz_office')
!geo_addr_dl_mainz_office.latitude := 50.0080
!geo_addr_dl_mainz_office.longitude := 8.2685
!insert (addr_dl_mainz_office, geo_addr_dl_mainz_office) into AddressContainsGeoLocation

!new Address('addr_dl_trier_museum')
!addr_dl_trier_museum.text := 'Weberbach 25, 54290 Trier, Germany'
!new GeoLocation('geo_addr_dl_trier_museum')
!geo_addr_dl_trier_museum.latitude := 49.7517
!geo_addr_dl_trier_museum.longitude := 6.6439
!insert (addr_dl_trier_museum, geo_addr_dl_trier_museum) into AddressContainsGeoLocation

!new Address('addr_dl_sbr_uni')
!addr_dl_sbr_uni.text := 'Campus Saarbruecken, 66123 Saarbruecken, Germany'
!new GeoLocation('geo_addr_dl_sbr_uni')
!geo_addr_dl_sbr_uni.latitude := 49.2545
!geo_addr_dl_sbr_uni.longitude := 7.0413
!insert (addr_dl_sbr_uni, geo_addr_dl_sbr_uni) into AddressContainsGeoLocation

!new Address('addr_dl_sbr_oldtown')
!addr_dl_sbr_oldtown.text := 'St Johanner Markt 20, 66111 Saarbruecken, Germany'
!new GeoLocation('geo_addr_dl_sbr_oldtown')
!geo_addr_dl_sbr_oldtown.latitude := 49.2359
!geo_addr_dl_sbr_oldtown.longitude := 6.9963
!insert (addr_dl_sbr_oldtown, geo_addr_dl_sbr_oldtown) into AddressContainsGeoLocation

!new Address('addr_pu_lue_shop')
!addr_pu_lue_shop.text := 'Breite Strasse 80, 23552 Luebeck, Germany'
!new GeoLocation('geo_addr_pu_lue_shop')
!geo_addr_pu_lue_shop.latitude := 53.8663
!geo_addr_pu_lue_shop.longitude := 10.6865
!insert (addr_pu_lue_shop, geo_addr_pu_lue_shop) into AddressContainsGeoLocation

!new Address('addr_dl_lue_oldtown')
!addr_dl_lue_oldtown.text := 'An der Obertrave 15, 23552 Luebeck, Germany'
!new GeoLocation('geo_addr_dl_lue_oldtown')
!geo_addr_dl_lue_oldtown.latitude := 53.8618
!geo_addr_dl_lue_oldtown.longitude := 10.6806
!insert (addr_dl_lue_oldtown, geo_addr_dl_lue_oldtown) into AddressContainsGeoLocation

!new Address('addr_dl_ham_airport')
!addr_dl_ham_airport.text := 'Flughafenstrasse 1, 22335 Hamburg, Germany'
!new GeoLocation('geo_addr_dl_ham_airport')
!geo_addr_dl_ham_airport.latitude := 53.6325
!geo_addr_dl_ham_airport.longitude := 9.9882
!insert (addr_dl_ham_airport, geo_addr_dl_ham_airport) into AddressContainsGeoLocation

!insert (shp_30001, addr_pu_sbr_depot) into ShipmentContainsPickUpAddress
!insert (shp_30001, addr_dl_mainz_office) into ShipmentContainsDeliveryAddress

!insert (shp_30002, addr_pu_sbr_depot) into ShipmentContainsPickUpAddress
!insert (shp_30002, addr_dl_trier_museum) into ShipmentContainsDeliveryAddress

!insert (shp_30003, addr_pu_sbr_home_oleg) into ShipmentContainsPickUpAddress
!insert (shp_30003, addr_dl_sbr_oldtown) into ShipmentContainsDeliveryAddress

!insert (shp_30004, addr_pu_sbr_depot) into ShipmentContainsPickUpAddress
!insert (shp_30004, addr_dl_sbr_uni) into ShipmentContainsDeliveryAddress

!insert (shp_30005, addr_pu_lue_shop) into ShipmentContainsPickUpAddress
!insert (shp_30005, addr_dl_lue_oldtown) into ShipmentContainsDeliveryAddress

!insert (shp_30006, addr_pu_lue_shop) into ShipmentContainsPickUpAddress
!insert (shp_30006, addr_dl_ham_airport) into ShipmentContainsDeliveryAddress
```
## Generation 13 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 128 | 0.00% |
| Multiplicities Errors | 0 | 41 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 0 | 9 | 0.00% |
| Lat/Lon (out of valid addresses) | 0 | 9 | 0.00% |
| Twitter | 0 | 3 | 0.00% |

# Generation 14
```
!new Station('st_aachen_hub')
!new Station('st_koblenz_point')

!new Customer('cust_400')
!cust_400.id := 'C-400'
!cust_400.name := 'Mila Reuter'
!cust_400.twitterUserName := 'mila_reuter'
!insert (st_koblenz_point, cust_400) into StationContainsCustomer

!new Customer('cust_401')
!cust_401.id := 'C-401'
!cust_401.name := 'Naveen Iyer'
!cust_401.twitterUserName := 'naveen_iyer'
!insert (st_koblenz_point, cust_401) into StationContainsCustomer

!new Driver('drv_4000')
!drv_4000.id := 'D-4000'
!drv_4000.name := 'Greta Albrecht'
!insert (st_aachen_hub, drv_4000) into StationContainsDriver

!new Driver('drv_4001')
!drv_4001.id := 'D-4001'
!drv_4001.name := 'Hector Silva'
!insert (st_aachen_hub, drv_4001) into StationContainsDriver

!new Shipment('shp_40001')
!shp_40001.id := 'S-40001'
!shp_40001.status := #NEW

!new Shipment('shp_40002')
!shp_40002.id := 'S-40002'
!shp_40002.status := #ASSIGNED

!new Shipment('shp_40003')
!shp_40003.id := 'S-40003'
!shp_40003.status := #UNDERWAY

!insert (cust_400, shp_40001) into CustomerConsistsOfShipment
!insert (cust_401, shp_40002) into CustomerConsistsOfShipment
!insert (cust_401, shp_40003) into CustomerConsistsOfShipment

!insert (st_aachen_hub, shp_40001) into StationShipment
!insert (st_aachen_hub, shp_40002) into StationShipment
!insert (st_aachen_hub, shp_40003) into StationShipment

!insert (drv_4000, shp_40002) into DriverShipment
!insert (drv_4000, shp_40003) into DriverShipment

!new Address('addr_pu_aachen_hub')
!addr_pu_aachen_hub.text := 'Adenauerallee 20 (Main Hub), 52066 Aachen, Germany'
!new GeoLocation('geo_addr_pu_aachen_hub')
!geo_addr_pu_aachen_hub.latitude := 50.7708
!geo_addr_pu_aachen_hub.longitude := 6.1065
!insert (addr_pu_aachen_hub, geo_addr_pu_aachen_hub) into AddressContainsGeoLocation

!new Address('addr_dl_koblenz_locker')
!addr_dl_koblenz_locker.text := 'Paketstation 55, Lohrstrasse 87, 56068 Koblenz, Germany'
!new GeoLocation('geo_addr_dl_koblenz_locker')
!geo_addr_dl_koblenz_locker.latitude := 50.3566
!geo_addr_dl_koblenz_locker.longitude := 7.5971
!insert (addr_dl_koblenz_locker, geo_addr_dl_koblenz_locker) into AddressContainsGeoLocation

!new Address('addr_pu_koblenz_home_naveen')
!addr_pu_koblenz_home_naveen.text := 'Hohenzollernstrasse 34, 56068 Koblenz, Germany'
!new GeoLocation('geo_addr_pu_koblenz_home_naveen')
!geo_addr_pu_koblenz_home_naveen.latitude := 50.3507
!geo_addr_pu_koblenz_home_naveen.longitude := 7.5940
!insert (addr_pu_koblenz_home_naveen, geo_addr_pu_koblenz_home_naveen) into AddressContainsGeoLocation

!new Address('addr_dl_aachen_repair')
!addr_dl_aachen_repair.text := 'Juelicher Strasse 72 (Repair Desk), 52070 Aachen, Germany'
!new GeoLocation('geo_addr_dl_aachen_repair')
!geo_addr_dl_aachen_repair.latitude := 50.7862
!geo_addr_dl_aachen_repair.longitude := 6.1049
!insert (addr_dl_aachen_repair, geo_addr_dl_aachen_repair) into AddressContainsGeoLocation

!new Address('addr_dl_koblenz_office_mila')
!addr_dl_koblenz_office_mila.text := 'Rizzastrasse 11, 56068 Koblenz, Germany'
!new GeoLocation('geo_addr_dl_koblenz_office_mila')
!geo_addr_dl_koblenz_office_mila.latitude := 50.3550
!geo_addr_dl_koblenz_office_mila.longitude := 7.5960
!insert (addr_dl_koblenz_office_mila, geo_addr_dl_koblenz_office_mila) into AddressContainsGeoLocation

!insert (shp_40001, addr_pu_aachen_hub) into ShipmentContainsPickUpAddress
!insert (shp_40001, addr_dl_koblenz_locker) into ShipmentContainsDeliveryAddress

!insert (shp_40002, addr_pu_koblenz_home_naveen) into ShipmentContainsPickUpAddress
!insert (shp_40002, addr_dl_aachen_repair) into ShipmentContainsDeliveryAddress

!insert (shp_40003, addr_pu_aachen_hub) into ShipmentContainsPickUpAddress
!insert (shp_40003, addr_dl_koblenz_office_mila) into ShipmentContainsDeliveryAddress
```
## Generation 14 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 73 | 0.00% |
| Multiplicities Errors | 0 | 23 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 1 | 5 | 20.00% |
| Lat/Lon (out of valid addresses) | 0 | 4 | 0.00% |
| Twitter | 0 | 2 | 0.00% |

| Invalid Addresses | 
|---| 
```
Adenauerallee 20 (Main Hub), 52066 Aachen, Germany
```

# Generation 15
```
!new Station('st_duesseldorf')
!new Station('st_wiesbaden')

!new Customer('cust_500')
!cust_500.id := 'C-500'
!cust_500.name := 'Isabel Roth'
!cust_500.twitterUserName := 'isabel_roth'
!insert (st_duesseldorf, cust_500) into StationContainsCustomer

!new Customer('cust_501')
!cust_501.id := 'C-501'
!cust_501.name := 'Kenji Tanaka'
!cust_501.twitterUserName := 'kenji_tanaka'
!insert (st_duesseldorf, cust_501) into StationContainsCustomer

!new Driver('drv_5000')
!drv_5000.id := 'D-5000'
!drv_5000.name := 'Marcel Engel'
!insert (st_wiesbaden, drv_5000) into StationContainsDriver

!new Driver('drv_5001')
!drv_5001.id := 'D-5001'
!drv_5001.name := 'Priya Nair'
!insert (st_wiesbaden, drv_5001) into StationContainsDriver

!new Shipment('shp_50001')
!shp_50001.id := 'S-50001'
!shp_50001.status := #NEW

!new Shipment('shp_50002')
!shp_50002.id := 'S-50002'
!shp_50002.status := #ASSIGNED

!new Shipment('shp_50003')
!shp_50003.id := 'S-50003'
!shp_50003.status := #UNDERWAY

!insert (cust_500, shp_50001) into CustomerConsistsOfShipment
!insert (cust_500, shp_50002) into CustomerConsistsOfShipment
!insert (cust_501, shp_50003) into CustomerConsistsOfShipment

!insert (st_duesseldorf, shp_50001) into StationShipment
!insert (st_duesseldorf, shp_50002) into StationShipment
!insert (st_duesseldorf, shp_50003) into StationShipment

!insert (drv_5000, shp_50002) into DriverShipment
!insert (drv_5000, shp_50003) into DriverShipment

!new Address('addr_pu_dd_supplier')
!addr_pu_dd_supplier.text := 'Schadowstrasse 50 (Supplier Pickup), 40212 Duesseldorf, Germany'
!new GeoLocation('geo_addr_pu_dd_supplier')
!geo_addr_pu_dd_supplier.latitude := 51.2252
!geo_addr_pu_dd_supplier.longitude := 6.7783
!insert (addr_pu_dd_supplier, geo_addr_pu_dd_supplier) into AddressContainsGeoLocation

!new Address('addr_pu_dd_home_kenji')
!addr_pu_dd_home_kenji.text := 'Lorettostrasse 12, 40219 Duesseldorf, Germany'
!new GeoLocation('geo_addr_pu_dd_home_kenji')
!geo_addr_pu_dd_home_kenji.latitude := 51.2136
!geo_addr_pu_dd_home_kenji.longitude := 6.7711
!insert (addr_pu_dd_home_kenji, geo_addr_pu_dd_home_kenji) into AddressContainsGeoLocation

!new Address('addr_dl_dd_kiosk')
!addr_dl_dd_kiosk.text := 'Worringer Platz 6 (Kiosk), 40210 Duesseldorf, Germany'
!new GeoLocation('geo_addr_dl_dd_kiosk')
!geo_addr_dl_dd_kiosk.latitude := 51.2278
!geo_addr_dl_dd_kiosk.longitude := 6.7950
!insert (addr_dl_dd_kiosk, geo_addr_dl_dd_kiosk) into AddressContainsGeoLocation

!new Address('addr_dl_duisburg_dock')
!addr_dl_duisburg_dock.text := 'Philosophenweg 31 (Dock Gate), 47051 Duisburg, Germany'
!new GeoLocation('geo_addr_dl_duisburg_dock')
!geo_addr_dl_duisburg_dock.latitude := 51.4330
!geo_addr_dl_duisburg_dock.longitude := 6.7623
!insert (addr_dl_duisburg_dock, geo_addr_dl_duisburg_dock) into AddressContainsGeoLocation

!new Address('addr_dl_cologne_agency')
!addr_dl_cologne_agency.text := 'Hohenzollernring 62, 50672 Cologne, Germany'
!new GeoLocation('geo_addr_dl_cologne_agency')
!geo_addr_dl_cologne_agency.latitude := 50.9419
!geo_addr_dl_cologne_agency.longitude := 6.9366
!insert (addr_dl_cologne_agency, geo_addr_dl_cologne_agency) into AddressContainsGeoLocation

!insert (shp_50001, addr_pu_dd_supplier) into ShipmentContainsPickUpAddress
!insert (shp_50001, addr_dl_dd_kiosk) into ShipmentContainsDeliveryAddress

!insert (shp_50002, addr_pu_dd_supplier) into ShipmentContainsPickUpAddress
!insert (shp_50002, addr_dl_duisburg_dock) into ShipmentContainsDeliveryAddress

!insert (shp_50003, addr_pu_dd_home_kenji) into ShipmentContainsPickUpAddress
!insert (shp_50003, addr_dl_cologne_agency) into ShipmentContainsDeliveryAddress
```
## Generation 15 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 73 | 0.00% |
| Multiplicities Errors | 0 | 23 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 0 | 5 | 0.00% |
| Lat/Lon (out of valid addresses) | 0 | 5 | 0.00% |
| Twitter | 0 | 2 | 0.00% |

# Generation 16
```
!new Station('st_heidelberg')
!new Station('st_potsdam')

!new Customer('cust_600')
!cust_600.id := 'C-600'
!cust_600.name := 'Hannah Voigt'
!cust_600.twitterUserName := 'hannah_voigt'
!insert (st_heidelberg, cust_600) into StationContainsCustomer

!new Customer('cust_601')
!cust_601.id := 'C-601'
!cust_601.name := 'Mateo Alvarez'
!cust_601.twitterUserName := 'mateo_alvarez'
!insert (st_potsdam, cust_601) into StationContainsCustomer

!new Driver('drv_6000')
!drv_6000.id := 'D-6000'
!drv_6000.name := 'Stefan Klose'
!insert (st_heidelberg, drv_6000) into StationContainsDriver

!new Driver('drv_6001')
!drv_6001.id := 'D-6001'
!drv_6001.name := 'Lara Wendt'
!insert (st_potsdam, drv_6001) into StationContainsDriver

!new Shipment('shp_60001')
!shp_60001.id := 'S-60001'
!shp_60001.status := #NEW

!new Shipment('shp_60002')
!shp_60002.id := 'S-60002'
!shp_60002.status := #ASSIGNED

!new Shipment('shp_60003')
!shp_60003.id := 'S-60003'
!shp_60003.status := #UNDERWAY

!new Shipment('shp_60004')
!shp_60004.id := 'S-60004'
!shp_60004.status := #DELIVERED

!insert (cust_600, shp_60001) into CustomerConsistsOfShipment
!insert (cust_601, shp_60002) into CustomerConsistsOfShipment
!insert (cust_601, shp_60003) into CustomerConsistsOfShipment
!insert (cust_600, shp_60004) into CustomerConsistsOfShipment

!insert (st_heidelberg, shp_60001) into StationShipment
!insert (st_heidelberg, shp_60002) into StationShipment
!insert (st_heidelberg, shp_60003) into StationShipment
!insert (st_heidelberg, shp_60004) into StationShipment

!insert (drv_6000, shp_60002) into DriverShipment
!insert (drv_6000, shp_60003) into DriverShipment

!new Address('addr_pu_hd_packshop')
!addr_pu_hd_packshop.text := 'Hauptstrasse 45 (Packshop), 69117 Heidelberg, Germany'
!new GeoLocation('geo_addr_pu_hd_packshop')
!geo_addr_pu_hd_packshop.latitude := 49.4099
!geo_addr_pu_hd_packshop.longitude := 8.6936
!insert (addr_pu_hd_packshop, geo_addr_pu_hd_packshop) into AddressContainsGeoLocation

!new Address('addr_pu_hd_hospital')
!addr_pu_hd_hospital.text := 'Im Neuenheimer Feld 672, 69120 Heidelberg, Germany'
!new GeoLocation('geo_addr_pu_hd_hospital')
!geo_addr_pu_hd_hospital.latitude := 49.4177
!geo_addr_pu_hd_hospital.longitude := 8.6725
!insert (addr_pu_hd_hospital, geo_addr_pu_hd_hospital) into AddressContainsGeoLocation

!new Address('addr_dl_hd_university')
!addr_dl_hd_university.text := 'Grabengasse 1, 69117 Heidelberg, Germany'
!new GeoLocation('geo_addr_dl_hd_university')
!geo_addr_dl_hd_university.latitude := 49.4115
!geo_addr_dl_hd_university.longitude := 8.7084
!insert (addr_dl_hd_university, geo_addr_dl_hd_university) into AddressContainsGeoLocation

!new Address('addr_dl_potsdam_filmpark')
!addr_dl_potsdam_filmpark.text := 'Großbeerenstrasse 200, 14482 Potsdam, Germany'
!new GeoLocation('geo_addr_dl_potsdam_filmpark')
!geo_addr_dl_potsdam_filmpark.latitude := 52.3929
!geo_addr_dl_potsdam_filmpark.longitude := 13.1277
!insert (addr_dl_potsdam_filmpark, geo_addr_dl_potsdam_filmpark) into AddressContainsGeoLocation

!new Address('addr_dl_berlin_hbf')
!addr_dl_berlin_hbf.text := 'Europaplatz 1, 10557 Berlin, Germany'
!new GeoLocation('geo_addr_dl_berlin_hbf')
!geo_addr_dl_berlin_hbf.latitude := 52.5251
!geo_addr_dl_berlin_hbf.longitude := 13.3694
!insert (addr_dl_berlin_hbf, geo_addr_dl_berlin_hbf) into AddressContainsGeoLocation

!new Address('addr_dl_hd_residential')
!addr_dl_hd_residential.text := 'Rohrbacher Strasse 110, 69115 Heidelberg, Germany'
!new GeoLocation('geo_addr_dl_hd_residential')
!geo_addr_dl_hd_residential.latitude := 49.3989
!geo_addr_dl_hd_residential.longitude := 8.6898
!insert (addr_dl_hd_residential, geo_addr_dl_hd_residential) into AddressContainsGeoLocation

!insert (shp_60001, addr_pu_hd_packshop) into ShipmentContainsPickUpAddress
!insert (shp_60001, addr_dl_hd_university) into ShipmentContainsDeliveryAddress

!insert (shp_60002, addr_pu_hd_packshop) into ShipmentContainsPickUpAddress
!insert (shp_60002, addr_dl_potsdam_filmpark) into ShipmentContainsDeliveryAddress

!insert (shp_60003, addr_pu_hd_hospital) into ShipmentContainsPickUpAddress
!insert (shp_60003, addr_dl_berlin_hbf) into ShipmentContainsDeliveryAddress

!insert (shp_60004, addr_pu_hd_packshop) into ShipmentContainsPickUpAddress
!insert (shp_60004, addr_dl_hd_residential) into ShipmentContainsDeliveryAddress
```
## Generation 16 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 86 | 0.00% |
| Multiplicities Errors | 0 | 28 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 0 | 6 | 0.00% |
| Lat/Lon (out of valid addresses) | 0 | 6 | 0.00% |
| Twitter | 0 | 2 | 0.00% |

# Generation 17
```
!new Station('st_halle')

!new Customer('cust_700')
!cust_700.id := 'C-700'
!cust_700.name := 'Miriam Scholz'
!cust_700.twitterUserName := 'miriam_scholz'
!insert (st_halle, cust_700) into StationContainsCustomer

!new Customer('cust_701')
!cust_701.id := 'C-701'
!cust_701.name := 'Oskar Lindner'
!cust_701.twitterUserName := 'oskar_lindner'
!insert (st_halle, cust_701) into StationContainsCustomer

!new Customer('cust_702')
!cust_702.id := 'C-702'
!cust_702.name := 'Priyanka Das'
!cust_702.twitterUserName := 'priyanka_das'
!insert (st_halle, cust_702) into StationContainsCustomer

!new Customer('cust_703')
!cust_703.id := 'C-703'
!cust_703.name := 'Rafael Costa'
!cust_703.twitterUserName := 'rafa_costa'
!insert (st_halle, cust_703) into StationContainsCustomer

!new Driver('drv_7000')
!drv_7000.id := 'D-7000'
!drv_7000.name := 'Nico Werner'
!insert (st_halle, drv_7000) into StationContainsDriver

!new Driver('drv_7001')
!drv_7001.id := 'D-7001'
!drv_7001.name := 'Selma Kurt'
!insert (st_halle, drv_7001) into StationContainsDriver

!new Driver('drv_7002')
!drv_7002.id := 'D-7002'
!drv_7002.name := 'Tarek Jamil'
!insert (st_halle, drv_7002) into StationContainsDriver

!new Address('addr_pu_halle_depot')
!addr_pu_halle_depot.text := 'Delitzscher Strasse 70 (Depot), 06112 Halle (Saale), Germany'
!new GeoLocation('geo_addr_pu_halle_depot')
!geo_addr_pu_halle_depot.latitude := 51.4879
!geo_addr_pu_halle_depot.longitude := 11.9996
!insert (addr_pu_halle_depot, geo_addr_pu_halle_depot) into AddressContainsGeoLocation

!new Address('addr_dl_halle_locker')
!addr_dl_halle_locker.text := 'Paketstation 87, Marktplatz 10, 06108 Halle (Saale), Germany'
!new GeoLocation('geo_addr_dl_halle_locker')
!geo_addr_dl_halle_locker.latitude := 51.4824
!geo_addr_dl_halle_locker.longitude := 11.9692
!insert (addr_dl_halle_locker, geo_addr_dl_halle_locker) into AddressContainsGeoLocation

!new Address('addr_dl_halle_uni')
!addr_dl_halle_uni.text := 'Universitaetsring 4, 06108 Halle (Saale), Germany'
!new GeoLocation('geo_addr_dl_halle_uni')
!geo_addr_dl_halle_uni.latitude := 51.4837
!geo_addr_dl_halle_uni.longitude := 11.9685
!insert (addr_dl_halle_uni, geo_addr_dl_halle_uni) into AddressContainsGeoLocation

!new Address('addr_pu_halle_home_miriam')
!addr_pu_halle_home_miriam.text := 'Ludwig-Wucherer-Strasse 10, 06108 Halle (Saale), Germany'
!new GeoLocation('geo_addr_pu_halle_home_miriam')
!geo_addr_pu_halle_home_miriam.latitude := 51.4909
!geo_addr_pu_halle_home_miriam.longitude := 11.9636
!insert (addr_pu_halle_home_miriam, geo_addr_pu_halle_home_miriam) into AddressContainsGeoLocation

!new Address('addr_dl_leipzig_tradefair')
!addr_dl_leipzig_tradefair.text := 'Messe-Allee 1, 04356 Leipzig, Germany'
!new GeoLocation('geo_addr_dl_leipzig_tradefair')
!geo_addr_dl_leipzig_tradefair.latitude := 51.3967
!geo_addr_dl_leipzig_tradefair.longitude := 12.3976
!insert (addr_dl_leipzig_tradefair, geo_addr_dl_leipzig_tradefair) into AddressContainsGeoLocation

!new Address('addr_pu_halle_pharmacy')
!addr_pu_halle_pharmacy.text := 'Leipziger Strasse 2, 06108 Halle (Saale), Germany'
!new GeoLocation('geo_addr_pu_halle_pharmacy')
!geo_addr_pu_halle_pharmacy.latitude := 51.4818
!geo_addr_pu_halle_pharmacy.longitude := 11.9727
!insert (addr_pu_halle_pharmacy, geo_addr_pu_halle_pharmacy) into AddressContainsGeoLocation

!new Address('addr_dl_halle_cityhall')
!addr_dl_halle_cityhall.text := 'Marktplatz 1 (Rathaus), 06108 Halle (Saale), Germany'
!new GeoLocation('geo_addr_dl_halle_cityhall')
!geo_addr_dl_halle_cityhall.latitude := 51.4827
!geo_addr_dl_halle_cityhall.longitude := 11.9690
!insert (addr_dl_halle_cityhall, geo_addr_dl_halle_cityhall) into AddressContainsGeoLocation

!new Shipment('shp_70001')
!shp_70001.id := 'S-70001'
!shp_70001.status := #NEW

!new Shipment('shp_70002')
!shp_70002.id := 'S-70002'
!shp_70002.status := #ASSIGNED

!new Shipment('shp_70003')
!shp_70003.id := 'S-70003'
!shp_70003.status := #DELIVERED

!new Shipment('shp_70004')
!shp_70004.id := 'S-70004'
!shp_70004.status := #UNDERWAY

!new Shipment('shp_70005')
!shp_70005.id := 'S-70005'
!shp_70005.status := #NEW

!insert (cust_700, shp_70001) into CustomerConsistsOfShipment
!insert (cust_700, shp_70002) into CustomerConsistsOfShipment
!insert (cust_701, shp_70003) into CustomerConsistsOfShipment
!insert (cust_702, shp_70004) into CustomerConsistsOfShipment
!insert (cust_702, shp_70005) into CustomerConsistsOfShipment

!insert (st_halle, shp_70001) into StationShipment
!insert (st_halle, shp_70002) into StationShipment
!insert (st_halle, shp_70003) into StationShipment
!insert (st_halle, shp_70004) into StationShipment
!insert (st_halle, shp_70005) into StationShipment

!insert (drv_7001, shp_70002) into DriverShipment
!insert (drv_7001, shp_70004) into DriverShipment

!insert (shp_70001, addr_pu_halle_depot) into ShipmentContainsPickUpAddress
!insert (shp_70001, addr_dl_halle_locker) into ShipmentContainsDeliveryAddress

!insert (shp_70002, addr_pu_halle_depot) into ShipmentContainsPickUpAddress
!insert (shp_70002, addr_dl_halle_uni) into ShipmentContainsDeliveryAddress

!insert (shp_70003, addr_pu_halle_home_miriam) into ShipmentContainsPickUpAddress
!insert (shp_70003, addr_pu_halle_depot) into ShipmentContainsDeliveryAddress

!insert (shp_70004, addr_pu_halle_depot) into ShipmentContainsPickUpAddress
!insert (shp_70004, addr_dl_leipzig_tradefair) into ShipmentContainsDeliveryAddress

!insert (shp_70005, addr_pu_halle_pharmacy) into ShipmentContainsPickUpAddress
!insert (shp_70005, addr_dl_halle_cityhall) into ShipmentContainsDeliveryAddress
```
## Generation 17 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 112 | 0.00% |
| Multiplicities Errors | 0 | 36 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 1 | 7 | 14.29% |
| Lat/Lon (out of valid addresses) | 0 | 6 | 0.00% |
| Twitter | 0 | 4 | 0.00% |

| Invalid Addresses | 
|---| 
```
Marktplatz 1 (Rathaus), 06108 Halle (Saale), Germany
```

# Generation 18
```
!new Station('st_jena')
!new Station('st_erfurt')

!new Customer('cust_800')
!cust_800.id := 'C-800'
!cust_800.name := 'Clara Weiss'
!cust_800.twitterUserName := 'clara_weiss'
!insert (st_jena, cust_800) into StationContainsCustomer

!new Customer('cust_801')
!cust_801.id := 'C-801'
!cust_801.name := 'Dmitri Petrenko'
!cust_801.twitterUserName := 'dpetrenko'
!insert (st_jena, cust_801) into StationContainsCustomer

!new Driver('drv_8000')
!drv_8000.id := 'D-8000'
!drv_8000.name := 'Anja Becker'
!insert (st_erfurt, drv_8000) into StationContainsDriver

!new Driver('drv_8001')
!drv_8001.id := 'D-8001'
!drv_8001.name := 'Bilal Rahmani'
!insert (st_erfurt, drv_8001) into StationContainsDriver

!new Driver('drv_8002')
!drv_8002.id := 'D-8002'
!drv_8002.name := 'Carsten Wolf'
!insert (st_erfurt, drv_8002) into StationContainsDriver

!new Address('addr_pu_erf_warehouse')
!addr_pu_erf_warehouse.text := 'Hugo-John-Strasse 8 (Central Warehouse), 99086 Erfurt, Germany'
!new GeoLocation('geo_addr_pu_erf_warehouse')
!geo_addr_pu_erf_warehouse.latitude := 50.9959
!geo_addr_pu_erf_warehouse.longitude := 11.0416
!insert (addr_pu_erf_warehouse, geo_addr_pu_erf_warehouse) into AddressContainsGeoLocation

!new Address('addr_pu_jena_home_dmitri')
!addr_pu_jena_home_dmitri.text := 'Lutherstrasse 12, 07743 Jena, Germany'
!new GeoLocation('geo_addr_pu_jena_home_dmitri')
!geo_addr_pu_jena_home_dmitri.latitude := 50.9271
!geo_addr_pu_jena_home_dmitri.longitude := 11.5899
!insert (addr_pu_jena_home_dmitri, geo_addr_pu_jena_home_dmitri) into AddressContainsGeoLocation

!new Address('addr_dl_jena_uni')
!addr_dl_jena_uni.text := 'Fürstengraben 1, 07743 Jena, Germany'
!new GeoLocation('geo_addr_dl_jena_uni')
!geo_addr_dl_jena_uni.latitude := 50.9289
!geo_addr_dl_jena_uni.longitude := 11.5872
!insert (addr_dl_jena_uni, geo_addr_dl_jena_uni) into AddressContainsGeoLocation

!new Address('addr_dl_weimar_museum')
!addr_dl_weimar_museum.text := 'Theaterplatz 1, 99423 Weimar, Germany'
!new GeoLocation('geo_addr_dl_weimar_museum')
!geo_addr_dl_weimar_museum.latitude := 50.9795
!geo_addr_dl_weimar_museum.longitude := 11.3291
!insert (addr_dl_weimar_museum, geo_addr_dl_weimar_museum) into AddressContainsGeoLocation

!new Address('addr_dl_erf_locker')
!addr_dl_erf_locker.text := 'Paketstation 144, Anger 1, 99084 Erfurt, Germany'
!new GeoLocation('geo_addr_dl_erf_locker')
!geo_addr_dl_erf_locker.latitude := 50.9763
!geo_addr_dl_erf_locker.longitude := 11.0376
!insert (addr_dl_erf_locker, geo_addr_dl_erf_locker) into AddressContainsGeoLocation

!new Address('addr_dl_gera_office')
!addr_dl_gera_office.text := 'Heinrichstrasse 30, 07545 Gera, Germany'
!new GeoLocation('geo_addr_dl_gera_office')
!geo_addr_dl_gera_office.latitude := 50.8807
!geo_addr_dl_gera_office.longitude := 12.0812
!insert (addr_dl_gera_office, geo_addr_dl_gera_office) into AddressContainsGeoLocation

!new Shipment('shp_80001')
!shp_80001.id := 'S-80001'
!shp_80001.status := #ASSIGNED

!new Shipment('shp_80002')
!shp_80002.id := 'S-80002'
!shp_80002.status := #NEW

!new Shipment('shp_80003')
!shp_80003.id := 'S-80003'
!shp_80003.status := #UNDERWAY

!new Shipment('shp_80004')
!shp_80004.id := 'S-80004'
!shp_80004.status := #DELIVERED

!new Shipment('shp_80005')
!shp_80005.id := 'S-80005'
!shp_80005.status := #ASSIGNED

!insert (cust_800, shp_80001) into CustomerConsistsOfShipment
!insert (cust_800, shp_80002) into CustomerConsistsOfShipment
!insert (cust_801, shp_80003) into CustomerConsistsOfShipment
!insert (cust_801, shp_80004) into CustomerConsistsOfShipment
!insert (cust_801, shp_80005) into CustomerConsistsOfShipment

!insert (st_erfurt, shp_80001) into StationShipment
!insert (st_erfurt, shp_80002) into StationShipment
!insert (st_erfurt, shp_80003) into StationShipment
!insert (st_erfurt, shp_80004) into StationShipment
!insert (st_erfurt, shp_80005) into StationShipment

!insert (drv_8000, shp_80001) into DriverShipment
!insert (drv_8000, shp_80003) into DriverShipment
!insert (drv_8001, shp_80004) into DriverShipment

!insert (shp_80001, addr_pu_erf_warehouse) into ShipmentContainsPickUpAddress
!insert (shp_80001, addr_dl_jena_uni) into ShipmentContainsDeliveryAddress

!insert (shp_80002, addr_pu_erf_warehouse) into ShipmentContainsPickUpAddress
!insert (shp_80002, addr_dl_jena_uni) into ShipmentContainsDeliveryAddress

!insert (shp_80003, addr_pu_erf_warehouse) into ShipmentContainsPickUpAddress
!insert (shp_80003, addr_dl_weimar_museum) into ShipmentContainsDeliveryAddress

!insert (shp_80004, addr_pu_jena_home_dmitri) into ShipmentContainsPickUpAddress
!insert (shp_80004, addr_dl_erf_locker) into ShipmentContainsDeliveryAddress

!insert (shp_80005, addr_pu_erf_warehouse) into ShipmentContainsPickUpAddress
!insert (shp_80005, addr_dl_gera_office) into ShipmentContainsDeliveryAddress
```
## Generation 18 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 98 | 0.00% |
| Multiplicities Errors | 0 | 34 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 0 | 6 | 0.00% |
| Lat/Lon (out of valid addresses) | 0 | 6 | 0.00% |
| Twitter | 0 | 2 | 0.00% |

# Generation 19
```
!new Station('st_remote_depot')
!new Station('st_city_service')

!new Driver('drv_9000')
!drv_9000.id := 'D-9000'
!drv_9000.name := 'Edda Fischer'
!insert (st_remote_depot, drv_9000) into StationContainsDriver

!new Customer('cust_900')
!cust_900.id := 'C-900'
!cust_900.name := 'Rui Matsumoto'
!cust_900.twitterUserName := 'rui_matsumoto'
!insert (st_city_service, cust_900) into StationContainsCustomer

!new Customer('cust_901')
!cust_901.id := 'C-901'
!cust_901.name := 'Sabine Krueger'
!cust_901.twitterUserName := 'sabine_krueger'
!insert (st_city_service, cust_901) into StationContainsCustomer

!new Shipment('shp_90001')
!shp_90001.id := 'S-90001'
!shp_90001.status := #NEW

!new Shipment('shp_90002')
!shp_90002.id := 'S-90002'
!shp_90002.status := #ASSIGNED

!insert (cust_900, shp_90001) into CustomerConsistsOfShipment
!insert (cust_900, shp_90002) into CustomerConsistsOfShipment

!insert (st_city_service, shp_90001) into StationShipment
!insert (st_city_service, shp_90002) into StationShipment

!new Address('addr_pu_city_kiosk')
!addr_pu_city_kiosk.text := 'Neumarkt 1 (Kiosk Pickup), 50667 Cologne, Germany'
!new GeoLocation('geo_addr_pu_city_kiosk')
!geo_addr_pu_city_kiosk.latitude := 50.9370
!geo_addr_pu_city_kiosk.longitude := 6.9566
!insert (addr_pu_city_kiosk, geo_addr_pu_city_kiosk) into AddressContainsGeoLocation

!new Address('addr_dl_city_hotel')
!addr_dl_city_hotel.text := 'Komodienstrasse 3 (Hotel Reception), 50667 Cologne, Germany'
!new GeoLocation('geo_addr_dl_city_hotel')
!geo_addr_dl_city_hotel.latitude := 50.9413
!geo_addr_dl_city_hotel.longitude := 6.9583
!insert (addr_dl_city_hotel, geo_addr_dl_city_hotel) into AddressContainsGeoLocation

!new Address('addr_dl_city_lab')
!addr_dl_city_lab.text := 'Sachsenring 79 (Lab Entrance), 50677 Cologne, Germany'
!new GeoLocation('geo_addr_dl_city_lab')
!geo_addr_dl_city_lab.latitude := 50.9228
!geo_addr_dl_city_lab.longitude := 6.9531
!insert (addr_dl_city_lab, geo_addr_dl_city_lab) into AddressContainsGeoLocation

!insert (shp_90001, addr_pu_city_kiosk) into ShipmentContainsPickUpAddress
!insert (shp_90001, addr_dl_city_hotel) into ShipmentContainsDeliveryAddress

!insert (shp_90002, addr_pu_city_kiosk) into ShipmentContainsPickUpAddress
!insert (shp_90002, addr_dl_city_lab) into ShipmentContainsDeliveryAddress
```
## Generation 19 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 48 | 0.00% |
| Multiplicities Errors | 0 | 14 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 2 | 3 | 66.67% |
| Lat/Lon (out of valid addresses) | 0 | 1 | 0.00% |
| Twitter | 0 | 2 | 0.00% |

| Invalid Addresses | 
|---| 
```
Neumarkt 1 (Kiosk Pickup), 50667 Cologne, Germany
```
```
Sachsenring 79 (Lab Entrance), 50677 Cologne, Germany
```

# Generation 20
```
!new Station('st_karlsruhe')
!new Station('st_backup_fleet')

!new Customer('cust_1000')
!cust_1000.id := 'C-1000'
!cust_1000.name := 'Tobias Kern'
!cust_1000.twitterUserName := 'tobias_kern'

!new Customer('cust_1001')
!cust_1001.id := 'C-1001'
!cust_1001.name := 'Amina Bouzid'
!cust_1001.twitterUserName := 'amina_bouzid'

!new Customer('cust_1002')
!cust_1002.id := 'C-1002'
!cust_1002.name := 'Luca Ferraro'
!cust_1002.twitterUserName := 'luca_ferraro'

!insert (st_karlsruhe, cust_1000) into StationContainsCustomer
!insert (st_karlsruhe, cust_1001) into StationContainsCustomer
!insert (st_backup_fleet, cust_1002) into StationContainsCustomer

!new Driver('drv_10000')
!drv_10000.id := 'D-10000'
!drv_10000.name := 'Melanie Schenk'

!new Driver('drv_10001')
!drv_10001.id := 'D-10001'
!drv_10001.name := 'Yasin Celik'

!new Driver('drv_10002')
!drv_10002.id := 'D-10002'
!drv_10002.name := 'Beate Lorbeer'

!insert (st_karlsruhe, drv_10000) into StationContainsDriver
!insert (st_karlsruhe, drv_10001) into StationContainsDriver
!insert (st_backup_fleet, drv_10002) into StationContainsDriver

!new Shipment('shp_100001')
!shp_100001.id := 'S-100001'
!shp_100001.status := #NEW

!new Shipment('shp_100002')
!shp_100002.id := 'S-100002'
!shp_100002.status := #UNDERWAY

!new Shipment('shp_100003')
!shp_100003.id := 'S-100003'
!shp_100003.status := #DELIVERED

!new Shipment('shp_100004')
!shp_100004.id := 'S-100004'
!shp_100004.status := #ASSIGNED

!insert (cust_1000, shp_100001) into CustomerConsistsOfShipment
!insert (cust_1000, shp_100002) into CustomerConsistsOfShipment
!insert (cust_1000, shp_100003) into CustomerConsistsOfShipment
!insert (cust_1001, shp_100004) into CustomerConsistsOfShipment

!insert (st_karlsruhe, shp_100001) into StationShipment
!insert (st_karlsruhe, shp_100002) into StationShipment
!insert (st_karlsruhe, shp_100003) into StationShipment
!insert (st_karlsruhe, shp_100004) into StationShipment

!insert (drv_10000, shp_100002) into DriverShipment
!insert (drv_10000, shp_100003) into DriverShipment
!insert (drv_10001, shp_100004) into DriverShipment

!new Address('addr_pu_karlsruhe_shared')
!addr_pu_karlsruhe_shared.text := 'Durlacher Allee 111 (Central Pickup Counter), 76137 Karlsruhe, Germany'
!new GeoLocation('geo_addr_pu_karlsruhe_shared')
!geo_addr_pu_karlsruhe_shared.latitude := 49.0069
!geo_addr_pu_karlsruhe_shared.longitude := 8.4319
!insert (addr_pu_karlsruhe_shared, geo_addr_pu_karlsruhe_shared) into AddressContainsGeoLocation

!new Address('addr_dl_karlsruhe_home')
!addr_dl_karlsruhe_home.text := 'Kaiserstrasse 140, 76133 Karlsruhe, Germany'
!new GeoLocation('geo_addr_dl_karlsruhe_home')
!geo_addr_dl_karlsruhe_home.latitude := 49.0094
!geo_addr_dl_karlsruhe_home.longitude := 8.4043
!insert (addr_dl_karlsruhe_home, geo_addr_dl_karlsruhe_home) into AddressContainsGeoLocation

!new Address('addr_dl_karlsruhe_office')
!addr_dl_karlsruhe_office.text := 'Rintheimer Strasse 2, 76131 Karlsruhe, Germany'
!new GeoLocation('geo_addr_dl_karlsruhe_office')
!geo_addr_dl_karlsruhe_office.latitude := 49.0149
!geo_addr_dl_karlsruhe_office.longitude := 8.4311
!insert (addr_dl_karlsruhe_office, geo_addr_dl_karlsruhe_office) into AddressContainsGeoLocation

!new Address('addr_dl_karlsruhe_locker')
!addr_dl_karlsruhe_locker.text := 'Paketstation 311, Ettlinger-Tor-Platz 1, 76133 Karlsruhe, Germany'
!new GeoLocation('geo_addr_dl_karlsruhe_locker')
!geo_addr_dl_karlsruhe_locker.latitude := 48.9997
!geo_addr_dl_karlsruhe_locker.longitude := 8.4049
!insert (addr_dl_karlsruhe_locker, geo_addr_dl_karlsruhe_locker) into AddressContainsGeoLocation

!new Address('addr_pu_karlsruhe_customer_aminas_home')
!addr_pu_karlsruhe_customer_aminas_home.text := 'Sophienstrasse 65, 76133 Karlsruhe, Germany'
!new GeoLocation('geo_addr_pu_karlsruhe_customer_aminas_home')
!geo_addr_pu_karlsruhe_customer_aminas_home.latitude := 49.0083
!geo_addr_pu_karlsruhe_customer_aminas_home.longitude := 8.3908
!insert (addr_pu_karlsruhe_customer_aminas_home, geo_addr_pu_karlsruhe_customer_aminas_home) into AddressContainsGeoLocation

!insert (shp_100001, addr_pu_karlsruhe_shared) into ShipmentContainsPickUpAddress
!insert (shp_100001, addr_dl_karlsruhe_home) into ShipmentContainsDeliveryAddress

!insert (shp_100002, addr_pu_karlsruhe_shared) into ShipmentContainsPickUpAddress
!insert (shp_100002, addr_dl_karlsruhe_locker) into ShipmentContainsDeliveryAddress

!insert (shp_100003, addr_pu_karlsruhe_shared) into ShipmentContainsPickUpAddress
!insert (shp_100003, addr_dl_karlsruhe_office) into ShipmentContainsDeliveryAddress

!insert (shp_100004, addr_pu_karlsruhe_customer_aminas_home) into ShipmentContainsPickUpAddress
!insert (shp_100004, addr_dl_karlsruhe_home) into ShipmentContainsDeliveryAddress
```
## Generation 20 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 90 | 0.00% |
| Multiplicities Errors | 0 | 30 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 0 | 5 | 0.00% |
| Lat/Lon (out of valid addresses) | 0 | 5 | 0.00% |
| Twitter | 0 | 3 | 0.00% |

# Generation 21
```
!new Station('st_crossdock_hub')
!new Station('st_driver_pool')
!new Station('st_pickup_point')

!new Customer('cust_1100')
!cust_1100.id := 'C-1100'
!cust_1100.name := 'Nicoleta Ionescu'
!cust_1100.twitterUserName := 'nicoleta_io'
!insert (st_pickup_point, cust_1100) into StationContainsCustomer

!new Customer('cust_1101')
!cust_1101.id := 'C-1101'
!cust_1101.name := 'Julian Mertens'
!cust_1101.twitterUserName := 'julian_mertens'
!insert (st_pickup_point, cust_1101) into StationContainsCustomer

!new Customer('cust_1102')
!cust_1102.id := 'C-1102'
!cust_1102.name := 'Farah Saleh'
!cust_1102.twitterUserName := 'farah_saleh'
!insert (st_crossdock_hub, cust_1102) into StationContainsCustomer

!new Driver('drv_12000')
!drv_12000.id := 'D-12000'
!drv_12000.name := 'Erik Bender'
!insert (st_driver_pool, drv_12000) into StationContainsDriver

!new Driver('drv_12001')
!drv_12001.id := 'D-12001'
!drv_12001.name := 'Linh Tran'
!insert (st_driver_pool, drv_12001) into StationContainsDriver

!new Driver('drv_12002')
!drv_12002.id := 'D-12002'
!drv_12002.name := 'Sara Nyman'
!insert (st_driver_pool, drv_12002) into StationContainsDriver

!new Address('addr_pu_shared_crossdock')
!addr_pu_shared_crossdock.text := 'Crossdock Gate 7, Nordring 18, 30163 Hanover, Germany'
!new GeoLocation('geo_addr_pu_shared_crossdock')
!geo_addr_pu_shared_crossdock.latitude := 52.4058
!geo_addr_pu_shared_crossdock.longitude := 9.7324
!insert (addr_pu_shared_crossdock, geo_addr_pu_shared_crossdock) into AddressContainsGeoLocation

!new Address('addr_dl_shared_dropoff')
!addr_dl_shared_dropoff.text := 'Parcel Locker Wall, Ernst-August-Platz 2, 30159 Hanover, Germany'
!new GeoLocation('geo_addr_dl_shared_dropoff')
!geo_addr_dl_shared_dropoff.latitude := 52.3768
!geo_addr_dl_shared_dropoff.longitude := 9.7423
!insert (addr_dl_shared_dropoff, geo_addr_dl_shared_dropoff) into AddressContainsGeoLocation

!new Address('addr_pu_customer1100_home')
!addr_pu_customer1100_home.text := 'Lister Meile 22, 30161 Hanover, Germany'
!new GeoLocation('geo_addr_pu_customer1100_home')
!geo_addr_pu_customer1100_home.latitude := 52.3802
!geo_addr_pu_customer1100_home.longitude := 9.7489
!insert (addr_pu_customer1100_home, geo_addr_pu_customer1100_home) into AddressContainsGeoLocation

!new Address('addr_dl_city_hospital')
!addr_dl_city_hospital.text := 'Carl-Neuberg-Strasse 1, 30625 Hanover, Germany'
!new GeoLocation('geo_addr_dl_city_hospital')
!geo_addr_dl_city_hospital.latitude := 52.3867
!geo_addr_dl_city_hospital.longitude := 9.8169
!insert (addr_dl_city_hospital, geo_addr_dl_city_hospital) into AddressContainsGeoLocation

!new Address('addr_dl_airfield_gate')
!addr_dl_airfield_gate.text := 'Airport Cargo Gate, Flughafenstrasse 4, 30855 Langenhagen, Germany'
!new GeoLocation('geo_addr_dl_airfield_gate')
!geo_addr_dl_airfield_gate.latitude := 52.4611
!geo_addr_dl_airfield_gate.longitude := 9.6906
!insert (addr_dl_airfield_gate, geo_addr_dl_airfield_gate) into AddressContainsGeoLocation

!new Address('addr_dl_student_residence')
!addr_dl_student_residence.text := 'Welfengarten 1, 30167 Hanover, Germany'
!new GeoLocation('geo_addr_dl_student_residence')
!geo_addr_dl_student_residence.latitude := 52.3906
!geo_addr_dl_student_residence.longitude := 9.7136
!insert (addr_dl_student_residence, geo_addr_dl_student_residence) into AddressContainsGeoLocation

!new Address('addr_pu_retail_return_box')
!addr_pu_retail_return_box.text := 'Return Box, Georgstrasse 35, 30159 Hanover, Germany'
!new GeoLocation('geo_addr_pu_retail_return_box')
!geo_addr_pu_retail_return_box.latitude := 52.3728
!geo_addr_pu_retail_return_box.longitude := 9.7380
!insert (addr_pu_retail_return_box, geo_addr_pu_retail_return_box) into AddressContainsGeoLocation

!new Shipment('shp_210001')
!shp_210001.id := 'S-210001'
!shp_210001.status := #NEW

!new Shipment('shp_210002')
!shp_210002.id := 'S-210002'
!shp_210002.status := #ASSIGNED

!new Shipment('shp_210003')
!shp_210003.id := 'S-210003'
!shp_210003.status := #UNDERWAY

!new Shipment('shp_210004')
!shp_210004.id := 'S-210004'
!shp_210004.status := #DELIVERED

!new Shipment('shp_210005')
!shp_210005.id := 'S-210005'
!shp_210005.status := #ASSIGNED

!insert (cust_1100, shp_210001) into CustomerConsistsOfShipment
!insert (cust_1101, shp_210002) into CustomerConsistsOfShipment
!insert (cust_1101, shp_210003) into CustomerConsistsOfShipment
!insert (cust_1102, shp_210004) into CustomerConsistsOfShipment
!insert (cust_1102, shp_210005) into CustomerConsistsOfShipment

!insert (st_crossdock_hub, shp_210001) into StationShipment
!insert (st_crossdock_hub, shp_210002) into StationShipment
!insert (st_crossdock_hub, shp_210003) into StationShipment
!insert (st_crossdock_hub, shp_210004) into StationShipment
!insert (st_crossdock_hub, shp_210005) into StationShipment

!insert (drv_12001, shp_210002) into DriverShipment
!insert (drv_12001, shp_210003) into DriverShipment
!insert (drv_12000, shp_210004) into DriverShipment
!insert (drv_12002, shp_210005) into DriverShipment

!insert (shp_210001, addr_pu_shared_crossdock) into ShipmentContainsPickUpAddress
!insert (shp_210001, addr_dl_shared_dropoff) into ShipmentContainsDeliveryAddress

!insert (shp_210002, addr_pu_shared_crossdock) into ShipmentContainsPickUpAddress
!insert (shp_210002, addr_dl_airfield_gate) into ShipmentContainsDeliveryAddress

!insert (shp_210003, addr_pu_shared_crossdock) into ShipmentContainsPickUpAddress
!insert (shp_210003, addr_dl_student_residence) into ShipmentContainsDeliveryAddress

!insert (shp_210004, addr_pu_customer1100_home) into ShipmentContainsPickUpAddress
!insert (shp_210004, addr_dl_shared_dropoff) into ShipmentContainsDeliveryAddress

!insert (shp_210005, addr_pu_retail_return_box) into ShipmentContainsPickUpAddress
!insert (shp_210005, addr_dl_city_hospital) into ShipmentContainsDeliveryAddress
```
## Generation 21 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 111 | 0.00% |
| Multiplicities Errors | 0 | 37 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 0 | 7 | 0.00% |
| Lat/Lon (out of valid addresses) | 0 | 7 | 0.00% |
| Twitter | 0 | 3 | 0.00% |

# Generation 22
```
!new Station('st_remote_island')
!new Station('st_central_dispatch')

!new Customer('cust_1500')
!cust_1500.id := 'C-1500'
!cust_1500.name := 'Ines Borgmann'
!cust_1500.twitterUserName := 'ines_borgmann'
!insert (st_remote_island, cust_1500) into StationContainsCustomer

!new Customer('cust_1501')
!cust_1501.id := 'C-1501'
!cust_1501.name := 'Kamil Nowicki'
!cust_1501.twitterUserName := 'kamil_nowicki'
!insert (st_remote_island, cust_1501) into StationContainsCustomer

!new Customer('cust_1502')
!cust_1502.id := 'C-1502'
!cust_1502.name := 'Lena Schwarz'
!cust_1502.twitterUserName := 'lena_schwarz'
!insert (st_central_dispatch, cust_1502) into StationContainsCustomer

!new Driver('drv_15000')
!drv_15000.id := 'D-15000'
!drv_15000.name := 'Sven Rohde'
!insert (st_central_dispatch, drv_15000) into StationContainsDriver

!new Driver('drv_15001')
!drv_15001.id := 'D-15001'
!drv_15001.name := 'Aisha Qureshi'
!insert (st_central_dispatch, drv_15001) into StationContainsDriver

!new Shipment('shp_150001')
!shp_150001.id := 'S-150001'
!shp_150001.status := #ASSIGNED

!new Shipment('shp_150002')
!shp_150002.id := 'S-150002'
!shp_150002.status := #NEW

!new Shipment('shp_150003')
!shp_150003.id := 'S-150003'
!shp_150003.status := #DELIVERED

!insert (cust_1500, shp_150001) into CustomerConsistsOfShipment
!insert (cust_1500, shp_150002) into CustomerConsistsOfShipment
!insert (cust_1501, shp_150003) into CustomerConsistsOfShipment

!insert (st_central_dispatch, shp_150001) into StationShipment
!insert (st_central_dispatch, shp_150002) into StationShipment
!insert (st_central_dispatch, shp_150003) into StationShipment

!insert (drv_15000, shp_150001) into DriverShipment
!insert (drv_15000, shp_150003) into DriverShipment

!new Address('addr_pu_central_supplier_1')
!addr_pu_central_supplier_1.text := 'Vendor Dock 3, Spaldingstrasse 110, 20097 Hamburg, Germany'
!new GeoLocation('geo_addr_pu_central_supplier_1')
!geo_addr_pu_central_supplier_1.latitude := 53.5483
!geo_addr_pu_central_supplier_1.longitude := 10.0187
!insert (addr_pu_central_supplier_1, geo_addr_pu_central_supplier_1) into AddressContainsGeoLocation

!new Address('addr_pu_central_supplier_2')
!addr_pu_central_supplier_2.text := 'Warehouse West, Ruhrstrasse 11, 22761 Hamburg, Germany'
!new GeoLocation('geo_addr_pu_central_supplier_2')
!geo_addr_pu_central_supplier_2.latitude := 53.5607
!geo_addr_pu_central_supplier_2.longitude := 9.9145
!insert (addr_pu_central_supplier_2, geo_addr_pu_central_supplier_2) into AddressContainsGeoLocation

!new Address('addr_pu_island_port')
!addr_pu_island_port.text := 'Island Ferry Terminal (Drop-off), Hafenstrasse 1, 25938 Wyk auf Foehr, Germany'
!new GeoLocation('geo_addr_pu_island_port')
!geo_addr_pu_island_port.latitude := 54.6912
!geo_addr_pu_island_port.longitude := 8.5674
!insert (addr_pu_island_port, geo_addr_pu_island_port) into AddressContainsGeoLocation

!new Address('addr_dl_island_home_ines')
!addr_dl_island_home_ines.text := 'Mittelweg 7, 25938 Wyk auf Foehr, Germany'
!new GeoLocation('geo_addr_dl_island_home_ines')
!geo_addr_dl_island_home_ines.latitude := 54.6821
!geo_addr_dl_island_home_ines.longitude := 8.5660
!insert (addr_dl_island_home_ines, geo_addr_dl_island_home_ines) into AddressContainsGeoLocation

!new Address('addr_dl_central_inspection')
!addr_dl_central_inspection.text := 'Inspection Center, Billbrookdeich 15, 22113 Hamburg, Germany'
!new GeoLocation('geo_addr_dl_central_inspection')
!geo_addr_dl_central_inspection.latitude := 53.5226
!geo_addr_dl_central_inspection.longitude := 10.0716
!insert (addr_dl_central_inspection, geo_addr_dl_central_inspection) into AddressContainsGeoLocation

!new Address('addr_dl_island_locker')
!addr_dl_island_locker.text := 'Parcel Locker 12, Sandwall 2, 25938 Wyk auf Foehr, Germany'
!new GeoLocation('geo_addr_dl_island_locker')
!geo_addr_dl_island_locker.latitude := 54.6897
!geo_addr_dl_island_locker.longitude := 8.5651
!insert (addr_dl_island_locker, geo_addr_dl_island_locker) into AddressContainsGeoLocation

!insert (shp_150001, addr_pu_central_supplier_1) into ShipmentContainsPickUpAddress
!insert (shp_150001, addr_dl_island_home_ines) into ShipmentContainsDeliveryAddress

!insert (shp_150002, addr_pu_island_port) into ShipmentContainsPickUpAddress
!insert (shp_150002, addr_dl_central_inspection) into ShipmentContainsDeliveryAddress

!insert (shp_150003, addr_pu_central_supplier_2) into ShipmentContainsPickUpAddress
!insert (shp_150003, addr_dl_island_locker) into ShipmentContainsDeliveryAddress
```
## Generation 22 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 84 | 0.00% |
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
Mittelweg 7, 25938 Wyk auf Foehr, Germany
```

# Generation 23
```
!new Station('st_customer_portal')
!new Station('st_logistics_depot')

!new Customer('cust_1600')
!cust_1600.id := 'C-1600'
!cust_1600.name := 'Tarek Osman'
!cust_1600.twitterUserName := 'tarek_osman'
!insert (st_customer_portal, cust_1600) into StationContainsCustomer

!new Customer('cust_1601')
!cust_1601.id := 'C-1601'
!cust_1601.name := 'Bianca Huber'
!cust_1601.twitterUserName := 'bianca_huber'
!insert (st_customer_portal, cust_1601) into StationContainsCustomer

!new Customer('cust_1602')
!cust_1602.id := 'C-1602'
!cust_1602.name := 'Noah Madsen'
!cust_1602.twitterUserName := 'noah_madsen'
!insert (st_customer_portal, cust_1602) into StationContainsCustomer

!new Driver('drv_16000')
!drv_16000.id := 'D-16000'
!drv_16000.name := 'Kira Baumann'
!insert (st_logistics_depot, drv_16000) into StationContainsDriver

!new Driver('drv_16001')
!drv_16001.id := 'D-16001'
!drv_16001.name := 'Ivo Jankovic'
!insert (st_logistics_depot, drv_16001) into StationContainsDriver

!new Address('addr_pu_shared_depot_gate')
!addr_pu_shared_depot_gate.text := 'Depot Gate A, Industrieweg 4, 28199 Bremen, Germany'
!new GeoLocation('geo_addr_pu_shared_depot_gate')
!geo_addr_pu_shared_depot_gate.latitude := 53.0496
!geo_addr_pu_shared_depot_gate.longitude := 8.7857
!insert (addr_pu_shared_depot_gate, geo_addr_pu_shared_depot_gate) into AddressContainsGeoLocation

!new Address('addr_pu_cust1602_home')
!addr_pu_cust1602_home.text := 'Buntentorsteinweg 92, 28201 Bremen, Germany'
!new GeoLocation('geo_addr_pu_cust1602_home')
!geo_addr_pu_cust1602_home.latitude := 53.0613
!geo_addr_pu_cust1602_home.longitude := 8.7979
!insert (addr_pu_cust1602_home, geo_addr_pu_cust1602_home) into AddressContainsGeoLocation

!new Address('addr_dl_bre_library')
!addr_dl_bre_library.text := 'Am Wall 201, 28195 Bremen, Germany'
!new GeoLocation('geo_addr_dl_bre_library')
!geo_addr_dl_bre_library.latitude := 53.0809
!geo_addr_dl_bre_library.longitude := 8.8044
!insert (addr_dl_bre_library, geo_addr_dl_bre_library) into AddressContainsGeoLocation

!new Address('addr_dl_bre_locker_station')
!addr_dl_bre_locker_station.text := 'Paketstation 418, Bahnhofsplatz 15, 28195 Bremen, Germany'
!new GeoLocation('geo_addr_dl_bre_locker_station')
!geo_addr_dl_bre_locker_station.latitude := 53.0833
!geo_addr_dl_bre_locker_station.longitude := 8.8137
!insert (addr_dl_bre_locker_station, geo_addr_dl_bre_locker_station) into AddressContainsGeoLocation

!new Address('addr_dl_oldenburg_office')
!addr_dl_oldenburg_office.text := 'Schlossplatz 1, 26122 Oldenburg, Germany'
!new GeoLocation('geo_addr_dl_oldenburg_office')
!geo_addr_dl_oldenburg_office.latitude := 53.1403
!geo_addr_dl_oldenburg_office.longitude := 8.2146
!insert (addr_dl_oldenburg_office, geo_addr_dl_oldenburg_office) into AddressContainsGeoLocation

!new Address('addr_dl_bre_recycling_center')
!addr_dl_bre_recycling_center.text := 'Recyclinghof Findorff, Hemmstrasse 351, 28215 Bremen, Germany'
!new GeoLocation('geo_addr_dl_bre_recycling_center')
!geo_addr_dl_bre_recycling_center.latitude := 53.0960
!geo_addr_dl_bre_recycling_center.longitude := 8.7873
!insert (addr_dl_bre_recycling_center, geo_addr_dl_bre_recycling_center) into AddressContainsGeoLocation

!new Shipment('shp_160001')
!shp_160001.id := 'S-160001'
!shp_160001.status := #ASSIGNED

!new Shipment('shp_160002')
!shp_160002.id := 'S-160002'
!shp_160002.status := #NEW

!new Shipment('shp_160003')
!shp_160003.id := 'S-160003'
!shp_160003.status := #DELIVERED

!new Shipment('shp_160004')
!shp_160004.id := 'S-160004'
!shp_160004.status := #UNDERWAY

!insert (cust_1600, shp_160001) into CustomerConsistsOfShipment
!insert (cust_1601, shp_160002) into CustomerConsistsOfShipment
!insert (cust_1601, shp_160003) into CustomerConsistsOfShipment
!insert (cust_1602, shp_160004) into CustomerConsistsOfShipment

!insert (st_logistics_depot, shp_160001) into StationShipment
!insert (st_logistics_depot, shp_160002) into StationShipment
!insert (st_logistics_depot, shp_160003) into StationShipment
!insert (st_logistics_depot, shp_160004) into StationShipment

!insert (drv_16000, shp_160001) into DriverShipment
!insert (drv_16001, shp_160004) into DriverShipment

!insert (shp_160001, addr_pu_shared_depot_gate) into ShipmentContainsPickUpAddress
!insert (shp_160001, addr_dl_oldenburg_office) into ShipmentContainsDeliveryAddress

!insert (shp_160002, addr_pu_shared_depot_gate) into ShipmentContainsPickUpAddress
!insert (shp_160002, addr_dl_bre_locker_station) into ShipmentContainsDeliveryAddress

!insert (shp_160003, addr_pu_shared_depot_gate) into ShipmentContainsPickUpAddress
!insert (shp_160003, addr_dl_bre_library) into ShipmentContainsDeliveryAddress

!insert (shp_160004, addr_pu_cust1602_home) into ShipmentContainsPickUpAddress
!insert (shp_160004, addr_dl_bre_recycling_center) into ShipmentContainsDeliveryAddress
```
## Generation 23 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 91 | 0.00% |
| Multiplicities Errors | 0 | 29 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 1 | 6 | 16.67% |
| Lat/Lon (out of valid addresses) | 0 | 5 | 0.00% |
| Twitter | 0 | 3 | 0.00% |

| Invalid Addresses | 
|---| 
```
Depot Gate A, Industrieweg 4, 28199 Bremen, Germany
```

# Generation 24
```
!new Station('st_bielefeld')
!new Station('st_muenster')

!new Customer('cust_2000')
!cust_2000.id := 'C-2000'
!cust_2000.name := 'Johanna Feld'
!cust_2000.twitterUserName := 'johanna_feld'
!insert (st_bielefeld, cust_2000) into StationContainsCustomer

!new Customer('cust_2001')
!cust_2001.id := 'C-2001'
!cust_2001.name := 'Lars Ebert'
!cust_2001.twitterUserName := 'lars_ebert'
!insert (st_bielefeld, cust_2001) into StationContainsCustomer

!new Customer('cust_2002')
!cust_2002.id := 'C-2002'
!cust_2002.name := 'Maya Nouri'
!cust_2002.twitterUserName := 'maya_nouri'
!insert (st_bielefeld, cust_2002) into StationContainsCustomer

!new Driver('drv_20000')
!drv_20000.id := 'D-20000'
!drv_20000.name := 'Ralf Koenig'
!insert (st_muenster, drv_20000) into StationContainsDriver

!new Driver('drv_20001')
!drv_20001.id := 'D-20001'
!drv_20001.name := 'Simone Brandis'
!insert (st_muenster, drv_20001) into StationContainsDriver

!new Driver('drv_20002')
!drv_20002.id := 'D-20002'
!drv_20002.name := 'Yara Amini'
!insert (st_muenster, drv_20002) into StationContainsDriver

!new Address('addr_pu_bi_store')
!addr_pu_bi_store.text := 'Bahnhofstrasse 28 (Pickup Desk), 33602 Bielefeld, Germany'
!new GeoLocation('geo_addr_pu_bi_store')
!geo_addr_pu_bi_store.latitude := 52.0266
!geo_addr_pu_bi_store.longitude := 8.5351
!insert (addr_pu_bi_store, geo_addr_pu_bi_store) into AddressContainsGeoLocation

!new Address('addr_pu_ms_depot')
!addr_pu_ms_depot.text := 'Albersloher Weg 10 (Depot), 48155 Muenster, Germany'
!new GeoLocation('geo_addr_pu_ms_depot')
!geo_addr_pu_ms_depot.latitude := 51.9474
!geo_addr_pu_ms_depot.longitude := 7.6548
!insert (addr_pu_ms_depot, geo_addr_pu_ms_depot) into AddressContainsGeoLocation

!new Address('addr_dl_bi_cityhall')
!addr_dl_bi_cityhall.text := 'Niederwall 25 (City Hall), 33602 Bielefeld, Germany'
!new GeoLocation('geo_addr_dl_bi_cityhall')
!geo_addr_dl_bi_cityhall.latitude := 52.0218
!geo_addr_dl_bi_cityhall.longitude := 8.5332
!insert (addr_dl_bi_cityhall, geo_addr_dl_bi_cityhall) into AddressContainsGeoLocation

!new Address('addr_dl_ms_station')
!addr_dl_ms_station.text := 'Berliner Platz 22 (Main Station), 48143 Muenster, Germany'
!new GeoLocation('geo_addr_dl_ms_station')
!geo_addr_dl_ms_station.latitude := 51.9565
!geo_addr_dl_ms_station.longitude := 7.6346
!insert (addr_dl_ms_station, geo_addr_dl_ms_station) into AddressContainsGeoLocation

!new Address('addr_dl_osnabrueck_office')
!addr_dl_osnabrueck_office.text := 'Neumarkt 4, 49074 Osnabrueck, Germany'
!new GeoLocation('geo_addr_dl_osnabrueck_office')
!geo_addr_dl_osnabrueck_office.latitude := 52.2729
!geo_addr_dl_osnabrueck_office.longitude := 8.0472
!insert (addr_dl_osnabrueck_office, geo_addr_dl_osnabrueck_office) into AddressContainsGeoLocation

!new Shipment('shp_250001')
!shp_250001.id := 'S-250001'
!shp_250001.status := #NEW

!new Shipment('shp_250002')
!shp_250002.id := 'S-250002'
!shp_250002.status := #ASSIGNED

!new Shipment('shp_250003')
!shp_250003.id := 'S-250003'
!shp_250003.status := #UNDERWAY

!new Shipment('shp_250004')
!shp_250004.id := 'S-250004'
!shp_250004.status := #DELIVERED

!insert (cust_2000, shp_250001) into CustomerConsistsOfShipment
!insert (cust_2000, shp_250002) into CustomerConsistsOfShipment
!insert (cust_2002, shp_250003) into CustomerConsistsOfShipment
!insert (cust_2002, shp_250004) into CustomerConsistsOfShipment

!insert (st_muenster, shp_250001) into StationShipment
!insert (st_muenster, shp_250002) into StationShipment
!insert (st_muenster, shp_250003) into StationShipment
!insert (st_muenster, shp_250004) into StationShipment

!insert (drv_20000, shp_250002) into DriverShipment
!insert (drv_20000, shp_250003) into DriverShipment
!insert (drv_20000, shp_250004) into DriverShipment

!insert (shp_250001, addr_pu_bi_store) into ShipmentContainsPickUpAddress
!insert (shp_250001, addr_dl_ms_station) into ShipmentContainsDeliveryAddress

!insert (shp_250002, addr_pu_ms_depot) into ShipmentContainsPickUpAddress
!insert (shp_250002, addr_dl_bi_cityhall) into ShipmentContainsDeliveryAddress

!insert (shp_250003, addr_pu_ms_depot) into ShipmentContainsPickUpAddress
!insert (shp_250003, addr_dl_osnabrueck_office) into ShipmentContainsDeliveryAddress

!insert (shp_250004, addr_pu_bi_store) into ShipmentContainsPickUpAddress
!insert (shp_250004, addr_dl_bi_cityhall) into ShipmentContainsDeliveryAddress
```
## Generation 24 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 90 | 0.00% |
| Multiplicities Errors | 0 | 30 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 0 | 5 | 0.00% |
| Lat/Lon (out of valid addresses) | 0 | 5 | 0.00% |
| Twitter | 0 | 3 | 0.00% |

# Generation 25
```
!new Station('st_goettingen')
!new Station('st_kassel_hub2')

!new Customer('cust_3000')
!cust_3000.id := 'C-3000'
!cust_3000.name := 'Felix Brandner'
!cust_3000.twitterUserName := 'felix_brandner'

!new Customer('cust_3001')
!cust_3001.id := 'C-3001'
!cust_3001.name := 'Giulia Romano'
!cust_3001.twitterUserName := 'giulia_romano'

!new Customer('cust_3002')
!cust_3002.id := 'C-3002'
!cust_3002.name := 'Hassan Ali'
!cust_3002.twitterUserName := 'hassan_ali'

!insert (st_goettingen, cust_3000) into StationContainsCustomer
!insert (st_goettingen, cust_3001) into StationContainsCustomer
!insert (st_goettingen, cust_3002) into StationContainsCustomer

!new Driver('drv_30000')
!drv_30000.id := 'D-30000'
!drv_30000.name := 'Jule Steinmann'

!new Driver('drv_30001')
!drv_30001.id := 'D-30001'
!drv_30001.name := 'Konrad Zielinski'

!insert (st_kassel_hub2, drv_30000) into StationContainsDriver
!insert (st_kassel_hub2, drv_30001) into StationContainsDriver

!new Address('addr_pu_goe_bookstore')
!addr_pu_goe_bookstore.text := 'Prinzenstrasse 13 (Bookstore Pickup), 37073 Goettingen, Germany'
!new GeoLocation('geo_addr_pu_goe_bookstore')
!geo_addr_pu_goe_bookstore.latitude := 51.5412
!geo_addr_pu_goe_bookstore.longitude := 9.9356
!insert (addr_pu_goe_bookstore, geo_addr_pu_goe_bookstore) into AddressContainsGeoLocation

!new Address('addr_dl_goe_home_felix')
!addr_dl_goe_home_felix.text := 'Goetheallee 8, 37073 Goettingen, Germany'
!new GeoLocation('geo_addr_dl_goe_home_felix')
!geo_addr_dl_goe_home_felix.latitude := 51.5348
!geo_addr_dl_goe_home_felix.longitude := 9.9273
!insert (addr_dl_goe_home_felix, geo_addr_dl_goe_home_felix) into AddressContainsGeoLocation

!new Address('addr_dl_goe_locker_station')
!addr_dl_goe_locker_station.text := 'Paketstation 207, Bahnhofsplatz 1, 37073 Goettingen, Germany'
!new GeoLocation('geo_addr_dl_goe_locker_station')
!geo_addr_dl_goe_locker_station.latitude := 51.5352
!geo_addr_dl_goe_locker_station.longitude := 9.9351
!insert (addr_dl_goe_locker_station, geo_addr_dl_goe_locker_station) into AddressContainsGeoLocation

!new Address('addr_pu_goe_farmstand')
!addr_pu_goe_farmstand.text := 'Weender Landstrasse 90 (Farm Stand), 37075 Goettingen, Germany'
!new GeoLocation('geo_addr_pu_goe_farmstand')
!geo_addr_pu_goe_farmstand.latitude := 51.5564
!geo_addr_pu_goe_farmstand.longitude := 9.9539
!insert (addr_pu_goe_farmstand, geo_addr_pu_goe_farmstand) into AddressContainsGeoLocation

!new Address('addr_pu_goe_clinic')
!addr_pu_goe_clinic.text := 'Robert-Koch-Strasse 40 (Clinic Dispatch), 37075 Goettingen, Germany'
!new GeoLocation('geo_addr_pu_goe_clinic')
!geo_addr_pu_goe_clinic.latitude := 51.5540
!geo_addr_pu_goe_clinic.longitude := 9.9506
!insert (addr_pu_goe_clinic, geo_addr_pu_goe_clinic) into AddressContainsGeoLocation

!new Address('addr_pu_kassel_hub_gate')
!addr_pu_kassel_hub_gate.text := 'Hub Gate 2, Leipziger Strasse 200, 34123 Kassel, Germany'
!new GeoLocation('geo_addr_pu_kassel_hub_gate')
!geo_addr_pu_kassel_hub_gate.latitude := 51.3104
!geo_addr_pu_kassel_hub_gate.longitude := 9.5426
!insert (addr_pu_kassel_hub_gate, geo_addr_pu_kassel_hub_gate) into AddressContainsGeoLocation

!new Address('addr_dl_goe_office_complex')
!addr_dl_goe_office_complex.text := 'Grisebachstrasse 6 (Office Reception), 37077 Goettingen, Germany'
!new GeoLocation('geo_addr_dl_goe_office_complex')
!geo_addr_dl_goe_office_complex.latitude := 51.5501
!geo_addr_dl_goe_office_complex.longitude := 9.9482
!insert (addr_dl_goe_office_complex, geo_addr_dl_goe_office_complex) into AddressContainsGeoLocation

!new Shipment('shp_300001')
!shp_300001.id := 'S-300001'
!shp_300001.status := #NEW

!new Shipment('shp_300002')
!shp_300002.id := 'S-300002'
!shp_300002.status := #ASSIGNED

!new Shipment('shp_300003')
!shp_300003.id := 'S-300003'
!shp_300003.status := #UNDERWAY

!new Shipment('shp_300004')
!shp_300004.id := 'S-300004'
!shp_300004.status := #DELIVERED

!new Shipment('shp_300005')
!shp_300005.id := 'S-300005'
!shp_300005.status := #ASSIGNED

!insert (cust_3000, shp_300001) into CustomerConsistsOfShipment
!insert (cust_3000, shp_300002) into CustomerConsistsOfShipment
!insert (cust_3001, shp_300003) into CustomerConsistsOfShipment
!insert (cust_3002, shp_300004) into CustomerConsistsOfShipment
!insert (cust_3001, shp_300005) into CustomerConsistsOfShipment

!insert (st_goettingen, shp_300001) into StationShipment
!insert (st_goettingen, shp_300002) into StationShipment
!insert (st_goettingen, shp_300003) into StationShipment
!insert (st_goettingen, shp_300004) into StationShipment
!insert (st_kassel_hub2, shp_300005) into StationShipment

!insert (drv_30000, shp_300002) into DriverShipment
!insert (drv_30000, shp_300003) into DriverShipment
!insert (drv_30001, shp_300005) into DriverShipment

!insert (shp_300001, addr_pu_goe_bookstore) into ShipmentContainsPickUpAddress
!insert (shp_300001, addr_dl_goe_home_felix) into ShipmentContainsDeliveryAddress

!insert (shp_300002, addr_pu_goe_bookstore) into ShipmentContainsPickUpAddress
!insert (shp_300002, addr_dl_goe_locker_station) into ShipmentContainsDeliveryAddress

!insert (shp_300003, addr_pu_goe_farmstand) into ShipmentContainsPickUpAddress
!insert (shp_300003, addr_pu_goe_bookstore) into ShipmentContainsDeliveryAddress

!insert (shp_300004, addr_pu_goe_clinic) into ShipmentContainsPickUpAddress
!insert (shp_300004, addr_dl_goe_home_felix) into ShipmentContainsDeliveryAddress

!insert (shp_300005, addr_pu_kassel_hub_gate) into ShipmentContainsPickUpAddress
!insert (shp_300005, addr_dl_goe_office_complex) into ShipmentContainsDeliveryAddress
```
## Generation 25 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 105 | 0.00% |
| Multiplicities Errors | 0 | 35 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 0 | 7 | 0.00% |
| Lat/Lon (out of valid addresses) | 0 | 7 | 0.00% |
| Twitter | 0 | 3 | 0.00% |

# Generation 26
```
!new Station('st_remote_support')
!new Station('st_local_ops')

!new Customer('cust_20000')
!cust_20000.id := 'C-20000'
!cust_20000.name := 'Emanuel Pohl'
!cust_20000.twitterUserName := 'emanuel_pohl'
!insert (st_remote_support, cust_20000) into StationContainsCustomer

!new Customer('cust_20001')
!cust_20001.id := 'C-20001'
!cust_20001.name := 'Sanae Idrissi'
!cust_20001.twitterUserName := 'sanae_idrissi'
!insert (st_remote_support, cust_20001) into StationContainsCustomer

!new Driver('drv_21000')
!drv_21000.id := 'D-21000'
!drv_21000.name := 'Uwe Schaefer'
!insert (st_local_ops, drv_21000) into StationContainsDriver

!new Driver('drv_21001')
!drv_21001.id := 'D-21001'
!drv_21001.name := 'Marta Kaczmarek'
!insert (st_local_ops, drv_21001) into StationContainsDriver

!new Address('addr_pu_local_microhub')
!addr_pu_local_microhub.text := 'Microhub West, Hafenweg 16, 48155 Muenster, Germany'
!new GeoLocation('geo_addr_pu_local_microhub')
!geo_addr_pu_local_microhub.latitude := 51.9512
!geo_addr_pu_local_microhub.longitude := 7.6708
!insert (addr_pu_local_microhub, geo_addr_pu_local_microhub) into AddressContainsGeoLocation

!new Address('addr_dl_handtoff_counter')
!addr_dl_handtoff_counter.text := 'Hand-off Counter, Prinzipalmarkt 10, 48143 Muenster, Germany'
!new GeoLocation('geo_addr_dl_handtoff_counter')
!geo_addr_dl_handtoff_counter.latitude := 51.9622
!geo_addr_dl_handtoff_counter.longitude := 7.6287
!insert (addr_dl_handtoff_counter, geo_addr_dl_handtoff_counter) into AddressContainsGeoLocation

!new Address('addr_dl_outside_city_gate')
!addr_dl_outside_city_gate.text := 'Gatehouse Entrance, Steinfurter Strasse 100, 48149 Muenster, Germany'
!new GeoLocation('geo_addr_dl_outside_city_gate')
!geo_addr_dl_outside_city_gate.latitude := 51.9740
!geo_addr_dl_outside_city_gate.longitude := 7.6025
!insert (addr_dl_outside_city_gate, geo_addr_dl_outside_city_gate) into AddressContainsGeoLocation

!new Address('addr_dl_service_workshop')
!addr_dl_service_workshop.text := 'Service Workshop, Am Mittelhafen 30, 48155 Muenster, Germany'
!new GeoLocation('geo_addr_dl_service_workshop')
!geo_addr_dl_service_workshop.latitude := 51.9497
!geo_addr_dl_service_workshop.longitude := 7.6469
!insert (addr_dl_service_workshop, geo_addr_dl_service_workshop) into AddressContainsGeoLocation

!new Shipment('shp_310001')
!shp_310001.id := 'S-310001'
!shp_310001.status := #NEW

!new Shipment('shp_310002')
!shp_310002.id := 'S-310002'
!shp_310002.status := #UNDERWAY

!new Shipment('shp_310003')
!shp_310003.id := 'S-310003'
!shp_310003.status := #DELIVERED

!new Shipment('shp_310004')
!shp_310004.id := 'S-310004'
!shp_310004.status := #ASSIGNED

!insert (cust_20000, shp_310001) into CustomerConsistsOfShipment
!insert (cust_20000, shp_310002) into CustomerConsistsOfShipment
!insert (cust_20001, shp_310003) into CustomerConsistsOfShipment
!insert (cust_20001, shp_310004) into CustomerConsistsOfShipment

!insert (st_local_ops, shp_310001) into StationShipment
!insert (st_local_ops, shp_310002) into StationShipment
!insert (st_local_ops, shp_310003) into StationShipment
!insert (st_local_ops, shp_310004) into StationShipment

!insert (drv_21000, shp_310002) into DriverShipment
!insert (drv_21001, shp_310003) into DriverShipment

!insert (shp_310001, addr_pu_local_microhub) into ShipmentContainsPickUpAddress
!insert (shp_310001, addr_dl_handtoff_counter) into ShipmentContainsDeliveryAddress

!insert (shp_310002, addr_pu_local_microhub) into ShipmentContainsPickUpAddress
!insert (shp_310002, addr_dl_outside_city_gate) into ShipmentContainsDeliveryAddress

!insert (shp_310003, addr_pu_local_microhub) into ShipmentContainsPickUpAddress
!insert (shp_310003, addr_dl_service_workshop) into ShipmentContainsDeliveryAddress

!insert (shp_310004, addr_pu_local_microhub) into ShipmentContainsPickUpAddress
!insert (shp_310004, addr_dl_handtoff_counter) into ShipmentContainsDeliveryAddress
```
## Generation 26 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 74 | 0.00% |
| Multiplicities Errors | 0 | 26 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 0 | 4 | 0.00% |
| Lat/Lon (out of valid addresses) | 0 | 4 | 0.00% |
| Twitter | 0 | 2 | 0.00% |

# Generation 27
```
!new Station('st_event_hub')
!new Station('st_night_ops')
!new Station('st_regional_sort')

!new Customer('cust_22000')
!cust_22000.id := 'C-22000'
!cust_22000.name := 'Silke Baum'
!cust_22000.twitterUserName := 'silke_baum'
!insert (st_event_hub, cust_22000) into StationContainsCustomer

!new Customer('cust_22001')
!cust_22001.id := 'C-22001'
!cust_22001.name := 'Owen Gallagher'
!cust_22001.twitterUserName := 'owen_g'
!insert (st_event_hub, cust_22001) into StationContainsCustomer

!new Driver('drv_22000')
!drv_22000.id := 'D-22000'
!drv_22000.name := 'Heike Lorenzen'
!insert (st_night_ops, drv_22000) into StationContainsDriver

!new Driver('drv_22001')
!drv_22001.id := 'D-22001'
!drv_22001.name := 'Rachid Benomar'
!insert (st_night_ops, drv_22001) into StationContainsDriver

!new Driver('drv_22002')
!drv_22002.id := 'D-22002'
!drv_22002.name := 'Tomasz Wilk'
!insert (st_night_ops, drv_22002) into StationContainsDriver

!new Address('addr_pu_concert_gate')
!addr_pu_concert_gate.text := 'Event Gate 3 (Pickup Tent), Arenastrasse 1, 40474 Duesseldorf, Germany'
!new GeoLocation('geo_addr_pu_concert_gate')
!geo_addr_pu_concert_gate.latitude := 51.2612
!geo_addr_pu_concert_gate.longitude := 6.7339
!insert (addr_pu_concert_gate, geo_addr_pu_concert_gate) into AddressContainsGeoLocation

!new Address('addr_pu_regional_sort')
!addr_pu_regional_sort.text := 'Regional Sort Center, Am Hafentor 9, 40221 Duesseldorf, Germany'
!new GeoLocation('geo_addr_pu_regional_sort')
!geo_addr_pu_regional_sort.latitude := 51.2077
!geo_addr_pu_regional_sort.longitude := 6.7569
!insert (addr_pu_regional_sort, geo_addr_pu_regional_sort) into AddressContainsGeoLocation

!new Address('addr_dl_hotel_reception')
!addr_dl_hotel_reception.text := 'Hotel Reception, Immermannstrasse 41, 40210 Duesseldorf, Germany'
!new GeoLocation('geo_addr_dl_hotel_reception')
!geo_addr_dl_hotel_reception.latitude := 51.2220
!geo_addr_dl_hotel_reception.longitude := 6.7862
!insert (addr_dl_hotel_reception, geo_addr_dl_hotel_reception) into AddressContainsGeoLocation

!new Address('addr_dl_media_office')
!addr_dl_media_office.text := 'Media Office, Speditionstrasse 15, 40221 Duesseldorf, Germany'
!new GeoLocation('geo_addr_dl_media_office')
!geo_addr_dl_media_office.latitude := 51.2162
!geo_addr_dl_media_office.longitude := 6.7614
!insert (addr_dl_media_office, geo_addr_dl_media_office) into AddressContainsGeoLocation

!new Address('addr_dl_locker_airport')
!addr_dl_locker_airport.text := 'Parcel Locker (Airport), Flughafenstrasse 105, 40474 Duesseldorf, Germany'
!new GeoLocation('geo_addr_dl_locker_airport')
!geo_addr_dl_locker_airport.latitude := 51.2793
!geo_addr_dl_locker_airport.longitude := 6.7656
!insert (addr_dl_locker_airport, geo_addr_dl_locker_airport) into AddressContainsGeoLocation

!new Address('addr_dl_repair_bench')
!addr_dl_repair_bench.text := 'Repair Bench Intake, Kettwiger Strasse 12, 45127 Essen, Germany'
!new GeoLocation('geo_addr_dl_repair_bench')
!geo_addr_dl_repair_bench.latitude := 51.4566
!geo_addr_dl_repair_bench.longitude := 7.0128
!insert (addr_dl_repair_bench, geo_addr_dl_repair_bench) into AddressContainsGeoLocation

!new Shipment('shp_420001')
!shp_420001.id := 'S-420001'
!shp_420001.status := #NEW

!new Shipment('shp_420002')
!shp_420002.id := 'S-420002'
!shp_420002.status := #ASSIGNED

!new Shipment('shp_420003')
!shp_420003.id := 'S-420003'
!shp_420003.status := #UNDERWAY

!new Shipment('shp_420004')
!shp_420004.id := 'S-420004'
!shp_420004.status := #DELIVERED

!insert (cust_22000, shp_420001) into CustomerConsistsOfShipment
!insert (cust_22000, shp_420002) into CustomerConsistsOfShipment
!insert (cust_22001, shp_420003) into CustomerConsistsOfShipment
!insert (cust_22001, shp_420004) into CustomerConsistsOfShipment

!insert (st_regional_sort, shp_420001) into StationShipment
!insert (st_regional_sort, shp_420002) into StationShipment
!insert (st_regional_sort, shp_420003) into StationShipment
!insert (st_regional_sort, shp_420004) into StationShipment

!insert (drv_22000, shp_420002) into DriverShipment
!insert (drv_22001, shp_420003) into DriverShipment
!insert (drv_22000, shp_420004) into DriverShipment

!insert (shp_420001, addr_pu_concert_gate) into ShipmentContainsPickUpAddress
!insert (shp_420001, addr_dl_hotel_reception) into ShipmentContainsDeliveryAddress

!insert (shp_420002, addr_pu_concert_gate) into ShipmentContainsPickUpAddress
!insert (shp_420002, addr_dl_locker_airport) into ShipmentContainsDeliveryAddress

!insert (shp_420003, addr_pu_regional_sort) into ShipmentContainsPickUpAddress
!insert (shp_420003, addr_dl_media_office) into ShipmentContainsDeliveryAddress

!insert (shp_420004, addr_pu_concert_gate) into ShipmentContainsPickUpAddress
!insert (shp_420004, addr_dl_repair_bench) into ShipmentContainsDeliveryAddress
```
## Generation 27 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 92 | 0.00% |
| Multiplicities Errors | 0 | 30 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 1 | 6 | 16.67% |
| Lat/Lon (out of valid addresses) | 0 | 5 | 0.00% |
| Twitter | 0 | 2 | 0.00% |

| Invalid Addresses | 
|---| 
```
Regional Sort Center, Am Hafentor 9, 40221 Duesseldorf, Germany
```

# Generation 28
```
!new Station('st_chemnitz')
!new Station('st_zwickau')

!new Customer('cust_33000')
!cust_33000.id := 'C-33000'
!cust_33000.name := 'Romy Schneider'
!cust_33000.twitterUserName := 'romy_s'
!insert (st_chemnitz, cust_33000) into StationContainsCustomer

!new Customer('cust_33001')
!cust_33001.id := 'C-33001'
!cust_33001.name := 'Nils Berg'
!cust_33001.twitterUserName := 'nils_berg'
!insert (st_chemnitz, cust_33001) into StationContainsCustomer

!new Driver('drv_33000')
!drv_33000.id := 'D-33000'
!drv_33000.name := 'Kerstin Jansen'
!insert (st_zwickau, drv_33000) into StationContainsDriver

!new Driver('drv_33001')
!drv_33001.id := 'D-33001'
!drv_33001.name := 'Adrian Popa'
!insert (st_zwickau, drv_33001) into StationContainsDriver

!new Driver('drv_33002')
!drv_33002.id := 'D-33002'
!drv_33002.name := 'Mehmet Kaya'
!insert (st_zwickau, drv_33002) into StationContainsDriver

!new Shipment('shp_530001')
!shp_530001.id := 'S-530001'
!shp_530001.status := #ASSIGNED

!new Shipment('shp_530002')
!shp_530002.id := 'S-530002'
!shp_530002.status := #UNDERWAY

!new Shipment('shp_530003')
!shp_530003.id := 'S-530003'
!shp_530003.status := #NEW

!new Shipment('shp_530004')
!shp_530004.id := 'S-530004'
!shp_530004.status := #DELIVERED

!insert (cust_33000, shp_530001) into CustomerConsistsOfShipment
!insert (cust_33000, shp_530003) into CustomerConsistsOfShipment
!insert (cust_33001, shp_530002) into CustomerConsistsOfShipment
!insert (cust_33001, shp_530004) into CustomerConsistsOfShipment

!insert (st_chemnitz, shp_530001) into StationShipment
!insert (st_chemnitz, shp_530002) into StationShipment
!insert (st_chemnitz, shp_530003) into StationShipment
!insert (st_chemnitz, shp_530004) into StationShipment

!insert (drv_33000, shp_530001) into DriverShipment
!insert (drv_33000, shp_530002) into DriverShipment
!insert (drv_33001, shp_530004) into DriverShipment

!new Address('addr_pu_cx_microhub')
!addr_pu_cx_microhub.text := 'Neefestrasse 82 (Microhub), 09119 Chemnitz, Germany'
!new GeoLocation('geo_addr_pu_cx_microhub')
!geo_addr_pu_cx_microhub.latitude := 50.8236
!geo_addr_pu_cx_microhub.longitude := 12.8953
!insert (addr_pu_cx_microhub, geo_addr_pu_cx_microhub) into AddressContainsGeoLocation

!new Address('addr_dl_cx_home_romy')
!addr_dl_cx_home_romy.text := 'Brueckenstrasse 10, 09111 Chemnitz, Germany'
!new GeoLocation('geo_addr_dl_cx_home_romy')
!geo_addr_dl_cx_home_romy.latitude := 50.8326
!geo_addr_dl_cx_home_romy.longitude := 12.9197
!insert (addr_dl_cx_home_romy, geo_addr_dl_cx_home_romy) into AddressContainsGeoLocation

!new Address('addr_dl_cx_locker_center')
!addr_dl_cx_locker_center.text := 'Paketstation 61, Zentralhaltestelle 1, 09111 Chemnitz, Germany'
!new GeoLocation('geo_addr_dl_cx_locker_center')
!geo_addr_dl_cx_locker_center.latitude := 50.8320
!geo_addr_dl_cx_locker_center.longitude := 12.9232
!insert (addr_dl_cx_locker_center, geo_addr_dl_cx_locker_center) into AddressContainsGeoLocation

!new Address('addr_pu_cx_home_nils')
!addr_pu_cx_home_nils.text := 'Zschopauer Strasse 70, 09111 Chemnitz, Germany'
!new GeoLocation('geo_addr_pu_cx_home_nils')
!geo_addr_pu_cx_home_nils.latitude := 50.8259
!geo_addr_pu_cx_home_nils.longitude := 12.9358
!insert (addr_pu_cx_home_nils, geo_addr_pu_cx_home_nils) into AddressContainsGeoLocation

!new Address('addr_dl_plauen_office')
!addr_dl_plauen_office.text := 'Postplatz 1 (Office Reception), 08523 Plauen, Germany'
!new GeoLocation('geo_addr_dl_plauen_office')
!geo_addr_dl_plauen_office.latitude := 50.4987
!geo_addr_dl_plauen_office.longitude := 12.1366
!insert (addr_dl_plauen_office, geo_addr_dl_plauen_office) into AddressContainsGeoLocation

!new Address('addr_dl_cx_repair_desk')
!addr_dl_cx_repair_desk.text := 'Reichenhainer Strasse 29 (Repair Desk), 09126 Chemnitz, Germany'
!new GeoLocation('geo_addr_dl_cx_repair_desk')
!geo_addr_dl_cx_repair_desk.latitude := 50.8138
!geo_addr_dl_cx_repair_desk.longitude := 12.9294
!insert (addr_dl_cx_repair_desk, geo_addr_dl_cx_repair_desk) into AddressContainsGeoLocation

!insert (shp_530001, addr_pu_cx_microhub) into ShipmentContainsPickUpAddress
!insert (shp_530001, addr_dl_cx_home_romy) into ShipmentContainsDeliveryAddress

!insert (shp_530002, addr_pu_cx_microhub) into ShipmentContainsPickUpAddress
!insert (shp_530002, addr_dl_plauen_office) into ShipmentContainsDeliveryAddress

!insert (shp_530003, addr_pu_cx_microhub) into ShipmentContainsPickUpAddress
!insert (shp_530003, addr_dl_cx_locker_center) into ShipmentContainsDeliveryAddress

!insert (shp_530004, addr_pu_cx_home_nils) into ShipmentContainsPickUpAddress
!insert (shp_530004, addr_dl_cx_repair_desk) into ShipmentContainsDeliveryAddress
```
## Generation 28 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 91 | 0.00% |
| Multiplicities Errors | 0 | 30 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 1 | 6 | 16.67% |
| Lat/Lon (out of valid addresses) | 0 | 5 | 0.00% |
| Twitter | 0 | 2 | 0.00% |

| Invalid Addresses | 
|---| 
```
Paketstation 61, Zentralhaltestelle 1, 09111 Chemnitz, Germany
```

# Generation 29
```
!new Station('st_popuplab')
!new Station('st_training_yard')

!new Customer('cust_50000')
!cust_50000.id := 'C-50000'
!cust_50000.name := 'Alina Petrovic'
!cust_50000.twitterUserName := 'alina_petrovic'
!insert (st_popuplab, cust_50000) into StationContainsCustomer

!new Customer('cust_50001')
!cust_50001.id := 'C-50001'
!cust_50001.name := 'Bruno Almeida'
!cust_50001.twitterUserName := 'bruno_almeida'
!insert (st_popuplab, cust_50001) into StationContainsCustomer

!new Customer('cust_50002')
!cust_50002.id := 'C-50002'
!cust_50002.name := 'Celine Fischer'
!cust_50002.twitterUserName := 'celine_fischer'
!insert (st_popuplab, cust_50002) into StationContainsCustomer

!new Driver('drv_50000')
!drv_50000.id := 'D-50000'
!drv_50000.name := 'Jan Holzer'
!insert (st_training_yard, drv_50000) into StationContainsDriver

!new Driver('drv_50001')
!drv_50001.id := 'D-50001'
!drv_50001.name := 'Mouna Kassem'
!insert (st_training_yard, drv_50001) into StationContainsDriver

!new Address('addr_pu_popuplab_center')
!addr_pu_popuplab_center.text := 'Pop-up Lab Counter, Marktplatz 5, 86150 Augsburg, Germany'
!new GeoLocation('geo_addr_pu_popuplab_center')
!geo_addr_pu_popuplab_center.latitude := 48.3696
!geo_addr_pu_popuplab_center.longitude := 10.8973
!insert (addr_pu_popuplab_center, geo_addr_pu_popuplab_center) into AddressContainsGeoLocation

!new Address('addr_dl_quality_check')
!addr_dl_quality_check.text := 'Quality Check Desk, Provinostrasse 52, 86153 Augsburg, Germany'
!new GeoLocation('geo_addr_dl_quality_check')
!geo_addr_dl_quality_check.latitude := 48.3762
!geo_addr_dl_quality_check.longitude := 10.9151
!insert (addr_dl_quality_check, geo_addr_dl_quality_check) into AddressContainsGeoLocation

!new Address('addr_pu_customer50001_home')
!addr_pu_customer50001_home.text := 'Jakoberstrasse 30, 86152 Augsburg, Germany'
!new GeoLocation('geo_addr_pu_customer50001_home')
!geo_addr_pu_customer50001_home.latitude := 48.3738
!geo_addr_pu_customer50001_home.longitude := 10.9055
!insert (addr_pu_customer50001_home, geo_addr_pu_customer50001_home) into AddressContainsGeoLocation

!new Address('addr_dl_locker_tramstop')
!addr_dl_locker_tramstop.text := 'Parcel Locker (Tram Stop), Königsplatz 1, 86150 Augsburg, Germany'
!new GeoLocation('geo_addr_dl_locker_tramstop')
!geo_addr_dl_locker_tramstop.latitude := 48.3654
!geo_addr_dl_locker_tramstop.longitude := 10.8987
!insert (addr_dl_locker_tramstop, geo_addr_dl_locker_tramstop) into AddressContainsGeoLocation

!new Address('addr_dl_cust50002_office')
!addr_dl_cust50002_office.text := 'Office Reception, Hermanstrasse 12, 86150 Augsburg, Germany'
!new GeoLocation('geo_addr_dl_cust50002_office')
!geo_addr_dl_cust50002_office.latitude := 48.3642
!geo_addr_dl_cust50002_office.longitude := 10.8934
!insert (addr_dl_cust50002_office, geo_addr_dl_cust50002_office) into AddressContainsGeoLocation

!new Shipment('shp_700000')
!shp_700000.id := 'S-700000'
!shp_700000.status := #NEW

!new Shipment('shp_700001')
!shp_700001.id := 'S-700001'
!shp_700001.status := #NEW

!new Shipment('shp_700002')
!shp_700002.id := 'S-700002'
!shp_700002.status := #NEW

!new Shipment('shp_700003')
!shp_700003.id := 'S-700003'
!shp_700003.status := #NEW

!insert (cust_50000, shp_700000) into CustomerConsistsOfShipment
!insert (cust_50001, shp_700001) into CustomerConsistsOfShipment
!insert (cust_50001, shp_700002) into CustomerConsistsOfShipment
!insert (cust_50002, shp_700003) into CustomerConsistsOfShipment

!insert (st_popuplab, shp_700000) into StationShipment
!insert (st_popuplab, shp_700001) into StationShipment
!insert (st_popuplab, shp_700002) into StationShipment
!insert (st_popuplab, shp_700003) into StationShipment

!insert (shp_700000, addr_pu_popuplab_center) into ShipmentContainsPickUpAddress
!insert (shp_700000, addr_dl_quality_check) into ShipmentContainsDeliveryAddress

!insert (shp_700001, addr_pu_customer50001_home) into ShipmentContainsPickUpAddress
!insert (shp_700001, addr_dl_locker_tramstop) into ShipmentContainsDeliveryAddress

!insert (shp_700002, addr_pu_popuplab_center) into ShipmentContainsPickUpAddress
!insert (shp_700002, addr_dl_locker_tramstop) into ShipmentContainsDeliveryAddress

!insert (shp_700003, addr_pu_popuplab_center) into ShipmentContainsPickUpAddress
!insert (shp_700003, addr_dl_cust50002_office) into ShipmentContainsDeliveryAddress
```
## Generation 29 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 83 | 0.00% |
| Multiplicities Errors | 0 | 26 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 2 | 5 | 40.00% |
| Lat/Lon (out of valid addresses) | 0 | 3 | 0.00% |
| Twitter | 0 | 3 | 0.00% |

| Invalid Addresses | 
|---| 
```
Pop-up Lab Counter, Marktplatz 5, 86150 Augsburg, Germany
```
```
Office Reception, Hermanstrasse 12, 86150 Augsburg, Germany
```

# Generation 30
```
!new Station('st_temporary_relief')
!new Station('st_longhaul_base')

!new Customer('cust_60000')
!cust_60000.id := 'C-60000'
!cust_60000.name := 'Klara Beckmann'
!cust_60000.twitterUserName := 'klara_beckmann'
!insert (st_temporary_relief, cust_60000) into StationContainsCustomer

!new Customer('cust_60001')
!cust_60001.id := 'C-60001'
!cust_60001.name := 'Hiro Watanabe'
!cust_60001.twitterUserName := 'hiro_w'
!insert (st_temporary_relief, cust_60001) into StationContainsCustomer

!new Driver('drv_60000')
!drv_60000.id := 'D-60000'
!drv_60000.name := 'Petar Jovic'
!insert (st_longhaul_base, drv_60000) into StationContainsDriver

!new Driver('drv_60001')
!drv_60001.id := 'D-60001'
!drv_60001.name := 'Nora Iqbal'
!insert (st_longhaul_base, drv_60001) into StationContainsDriver

!new Shipment('shp_800000')
!shp_800000.id := 'S-800000'
!shp_800000.status := #ASSIGNED

!new Shipment('shp_800001')
!shp_800001.id := 'S-800001'
!shp_800001.status := #UNDERWAY

!new Shipment('shp_800002')
!shp_800002.id := 'S-800002'
!shp_800002.status := #NEW

!insert (cust_60000, shp_800000) into CustomerConsistsOfShipment
!insert (cust_60000, shp_800001) into CustomerConsistsOfShipment
!insert (cust_60000, shp_800002) into CustomerConsistsOfShipment

!insert (st_temporary_relief, shp_800000) into StationShipment
!insert (st_temporary_relief, shp_800001) into StationShipment
!insert (st_temporary_relief, shp_800002) into StationShipment

!insert (drv_60000, shp_800000) into DriverShipment
!insert (drv_60001, shp_800001) into DriverShipment

!new Address('addr_pu_relief_warehouse')
!addr_pu_relief_warehouse.text := 'Relief Warehouse, Gewerbepark 3, 06712 Zeitz, Germany'
!new GeoLocation('geo_addr_pu_relief_warehouse')
!geo_addr_pu_relief_warehouse.latitude := 51.0469
!geo_addr_pu_relief_warehouse.longitude := 12.1409
!insert (addr_pu_relief_warehouse, geo_addr_pu_relief_warehouse) into AddressContainsGeoLocation

!new Address('addr_dl_shelter_halle')
!addr_dl_shelter_halle.text := 'Emergency Shelter, Richard-Wagner-Strasse 16, 06114 Halle (Saale), Germany'
!new GeoLocation('geo_addr_dl_shelter_halle')
!geo_addr_dl_shelter_halle.latitude := 51.4960
!geo_addr_dl_shelter_halle.longitude := 11.9698
!insert (addr_dl_shelter_halle, geo_addr_dl_shelter_halle) into AddressContainsGeoLocation

!new Address('addr_dl_clinic_merseburg')
!addr_dl_clinic_merseburg.text := 'Clinic Receiving, Rudolf-Breitscheid-Strasse 6, 06217 Merseburg, Germany'
!new GeoLocation('geo_addr_dl_clinic_merseburg')
!geo_addr_dl_clinic_merseburg.latitude := 51.3528
!geo_addr_dl_clinic_merseburg.longitude := 11.9891
!insert (addr_dl_clinic_merseburg, geo_addr_dl_clinic_merseburg) into AddressContainsGeoLocation

!new Address('addr_pu_klara_home')
!addr_pu_klara_home.text := 'Gartenweg 9, 06618 Naumburg (Saale), Germany'
!new GeoLocation('geo_addr_pu_klara_home')
!geo_addr_pu_klara_home.latitude := 51.1527
!geo_addr_pu_klara_home.longitude := 11.8134
!insert (addr_pu_klara_home, geo_addr_pu_klara_home) into AddressContainsGeoLocation

!new Address('addr_dl_relief_intake')
!addr_dl_relief_intake.text := 'Relief Intake Desk, Bahnhofstrasse 2, 06712 Zeitz, Germany'
!new GeoLocation('geo_addr_dl_relief_intake')
!geo_addr_dl_relief_intake.latitude := 51.0496
!geo_addr_dl_relief_intake.longitude := 12.1369
!insert (addr_dl_relief_intake, geo_addr_dl_relief_intake) into AddressContainsGeoLocation

!insert (shp_800000, addr_pu_relief_warehouse) into ShipmentContainsPickUpAddress
!insert (shp_800000, addr_dl_shelter_halle) into ShipmentContainsDeliveryAddress

!insert (shp_800001, addr_pu_relief_warehouse) into ShipmentContainsPickUpAddress
!insert (shp_800001, addr_dl_clinic_merseburg) into ShipmentContainsDeliveryAddress

!insert (shp_800002, addr_pu_klara_home) into ShipmentContainsPickUpAddress
!insert (shp_800002, addr_dl_relief_intake) into ShipmentContainsDeliveryAddress
```
## Generation 30 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 73 | 0.00% |
| Multiplicities Errors | 0 | 23 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 2 | 5 | 40.00% |
| Lat/Lon (out of valid addresses) | 0 | 3 | 0.00% |
| Twitter | 0 | 2 | 0.00% |

| Invalid Addresses | 
|---| 
```
Relief Warehouse, Gewerbepark 3, 06712 Zeitz, Germany
```
```
Clinic Receiving, Rudolf-Breitscheid-Strasse 6, 06217 Merseburg, Germany
```

# Summary for all generations
| Summary | Value | 
|---|---| 
| Model | GPT_5_2 | 
| Type | Simple | 
| System | pickupnet | 
| Number of generations | 30 | 

| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 2683 | 0.00% |
| Multiplicities Errors | 0 | 867 | 0.00% |
| Invariants Errors | 0 | 120 | 0.00% |

| PickupNet | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Address | 19 | 172 | 11.05% |
| Lat/Lon (out of valid addresses) | 0 | 153 | 0.00% |
| Twitter | 0 | 80 | 0.00% |

| Invalid Addresses | 
|---| 
```
Cargo City Sued 1, 60549 Frankfurt am Main, Germany
```
```
Gutenbergstrasse 12 (Returns), 86150 Augsburg, Germany
```
```
Überseering 2 (Hub), 28217 Bremen, Germany
```
```
Hansator 5 (Returns Desk), 28217 Bremen, Germany
```
```
Auguststrasse 45 (Depot), 53229 Bonn, Germany
```
```
Am Seehafen 1, 18147 Rostock, Germany
```
```
Walter-Rathenau-Strasse 1 (Warehouse), 39106 Magdeburg, Germany
```
```
Adenauerallee 20 (Main Hub), 52066 Aachen, Germany
```
```
Marktplatz 1 (Rathaus), 06108 Halle (Saale), Germany
```
```
Neumarkt 1 (Kiosk Pickup), 50667 Cologne, Germany
```
```
Sachsenring 79 (Lab Entrance), 50677 Cologne, Germany
```
```
Mittelweg 7, 25938 Wyk auf Foehr, Germany
```
```
Depot Gate A, Industrieweg 4, 28199 Bremen, Germany
```
```
Regional Sort Center, Am Hafentor 9, 40221 Duesseldorf, Germany
```
```
Paketstation 61, Zentralhaltestelle 1, 09111 Chemnitz, Germany
```
```
Pop-up Lab Counter, Marktplatz 5, 86150 Augsburg, Germany
```
```
Office Reception, Hermanstrasse 12, 86150 Augsburg, Germany
```
```
Relief Warehouse, Gewerbepark 3, 06712 Zeitz, Germany
```
```
Clinic Receiving, Rudolf-Breitscheid-Strasse 6, 06217 Merseburg, Germany
```

