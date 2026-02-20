# Generation 1
```
!new RentalOffice('office_denver')
!office_denver.name := 'Front Range Rentals - Denver'
!office_denver.number := 101
!office_denver.address := '2450 W Colfax Ave, Denver, CO 80204'

!new RentalOffice('office_miami')
!office_miami.name := 'SunCoast Vehicle Rental - Miami'
!office_miami.number := 202
!office_miami.address := '7800 NW 25th St, Miami, FL 33122'

!new RentalOffice('office_losangeles')
!office_losangeles.name := 'Pacific Fleet Rentals - Los Angeles'
!office_losangeles.number := 303
!office_losangeles.address := '6100 S Alameda St, Los Angeles, CA 90001'

!new Truck('truck_den_24ft_01')
!truck_den_24ft_01.id := 5001
!truck_den_24ft_01.registrationState := #CO
!truck_den_24ft_01.licensePlateNumber := 'CO-TRK-8152'
!truck_den_24ft_01.vehicleTypeCode := #TRUCK24
!truck_den_24ft_01.registrationLastMaintenanceDate := Date('2025-12-10')
!truck_den_24ft_01.expirationDate := Date('2026-11-30')
!truck_den_24ft_01.odometerReading := 84215
!truck_den_24ft_01.gasTankCapacity := 60.0
!truck_den_24ft_01.workingRadio := true
!truck_den_24ft_01.mileage := 10

!new Truck('truck_den_10ft_02')
!truck_den_10ft_02.id := 5002
!truck_den_10ft_02.registrationState := #CO
!truck_den_10ft_02.licensePlateNumber := 'CO-TRK-1934'
!truck_den_10ft_02.vehicleTypeCode := #TRUCK10
!truck_den_10ft_02.registrationLastMaintenanceDate := Date('2026-01-15')
!truck_den_10ft_02.expirationDate := Date('2026-08-31')
!truck_den_10ft_02.odometerReading := 31990
!truck_den_10ft_02.gasTankCapacity := 35.0
!truck_den_10ft_02.workingRadio := false
!truck_den_10ft_02.mileage := 14

!new Vehicle('trailer_mia_open_01')
!trailer_mia_open_01.id := 7001
!trailer_mia_open_01.registrationState := #FL
!trailer_mia_open_01.licensePlateNumber := 'FL-TRL-4029'
!trailer_mia_open_01.vehicleTypeCode := #OPEN_TRAILER
!trailer_mia_open_01.registrationLastMaintenanceDate := Date('2025-11-20')
!trailer_mia_open_01.expirationDate := Date('2026-10-31')

!new Vehicle('trailer_mia_covered_02')
!trailer_mia_covered_02.id := 7002
!trailer_mia_covered_02.registrationState := #FL
!trailer_mia_covered_02.licensePlateNumber := 'FL-TRL-1187'
!trailer_mia_covered_02.vehicleTypeCode := #COVERED_TRAILER
!trailer_mia_covered_02.registrationLastMaintenanceDate := Date('2026-02-01')
!trailer_mia_covered_02.expirationDate := Date('2027-01-31')

!new Truck('truck_la_24ft_03')
!truck_la_24ft_03.id := 5003
!truck_la_24ft_03.registrationState := #CA
!truck_la_24ft_03.licensePlateNumber := 'CA-TRK-7710'
!truck_la_24ft_03.vehicleTypeCode := #TRUCK24
!truck_la_24ft_03.registrationLastMaintenanceDate := Date('2025-09-05')
!truck_la_24ft_03.expirationDate := Date('2026-09-30')
!truck_la_24ft_03.odometerReading := 126540
!truck_la_24ft_03.gasTankCapacity := 65.0
!truck_la_24ft_03.workingRadio := true
!truck_la_24ft_03.mileage := 9

!insert (office_denver, truck_den_24ft_01) into RentalOfficeVehicle
!insert (office_denver, truck_den_10ft_02) into RentalOfficeVehicle
!insert (office_miami, trailer_mia_open_01) into RentalOfficeVehicle
!insert (office_miami, trailer_mia_covered_02) into RentalOfficeVehicle
!insert (office_losangeles, truck_la_24ft_03) into RentalOfficeVehicle

!new Individual('cust_ind_sarah')
!cust_ind_sarah.name := 'Sarah Nguyen'
!cust_ind_sarah.address := '1128 S Pearl St, Denver, CO 80210'
!cust_ind_sarah.poorRisk := false
!cust_ind_sarah.homePhone := '303-555-0148'
!cust_ind_sarah.driverLicenseState := #CO
!cust_ind_sarah.driverLicenseNumber := 48201933
!cust_ind_sarah.driverLicenseExpirationDate := Date('2028-04-18')

!new Individual('cust_ind_marcus')
!cust_ind_marcus.name := 'Marcus Reed'
!cust_ind_marcus.address := '4100 NW 79th Ave, Doral, FL 33166'
!cust_ind_marcus.poorRisk := true
!cust_ind_marcus.homePhone := '786-555-0192'
!cust_ind_marcus.driverLicenseState := #FL
!cust_ind_marcus.driverLicenseNumber := 77120456
!cust_ind_marcus.driverLicenseExpirationDate := Date('2026-07-09')

!new Company('cust_co_bluepeak')
!cust_co_bluepeak.name := 'BluePeak Construction, Inc.'
!cust_co_bluepeak.address := '9800 E Easter Ave, Centennial, CO 80112'
!cust_co_bluepeak.poorRisk := false
!cust_co_bluepeak.idNumber := 90014522

!new Company('cust_co_oceanfreight')
!cust_co_oceanfreight.name := 'OceanFreight Logistics LLC'
!cust_co_oceanfreight.address := '2250 NW 102nd Pl, Miami, FL 33172'
!cust_co_oceanfreight.poorRisk := false
!cust_co_oceanfreight.idNumber := 90028710

!new RentalAgreement('ra_10001')
!ra_10001.number := 10001
!ra_10001.rentalDate := Date('2026-02-05')
!ra_10001.anticipatedDuration := 3
!ra_10001.depositPaid := 250.00
!ra_10001.quotedDailyRate := 129.99
!ra_10001.quotedRatePerMile := 0.79

!new RentalAgreement('ra_10002')
!ra_10002.number := 10002
!ra_10002.rentalDate := Date('2026-02-07')
!ra_10002.anticipatedDuration := 1
!ra_10002.depositPaid := 0.00
!ra_10002.quotedDailyRate := 39.00
!ra_10002.quotedRatePerMile := 0.00

!new RentalAgreement('ra_10003')
!ra_10003.number := 10003
!ra_10003.rentalDate := Date('2026-02-10')
!ra_10003.anticipatedDuration := 5
!ra_10003.depositPaid := 500.00
!ra_10003.quotedDailyRate := 149.50
!ra_10003.quotedRatePerMile := 0.69

!new RentalAgreement('ra_10004')
!ra_10004.number := 10004
!ra_10004.rentalDate := Date('2026-02-12')
!ra_10004.anticipatedDuration := 2
!ra_10004.depositPaid := 150.00
!ra_10004.quotedDailyRate := 45.00
!ra_10004.quotedRatePerMile := 0.00

!new RentalAgreement('ra_10005')
!ra_10005.number := 10005
!ra_10005.rentalDate := Date('2026-02-15')
!ra_10005.anticipatedDuration := 4
!ra_10005.depositPaid := 300.00
!ra_10005.quotedDailyRate := 139.00
!ra_10005.quotedRatePerMile := 0.75

!insert (office_denver, ra_10001) into RentalOfficeRentalAgreementOrigin
!insert (office_denver, ra_10001) into RentalOfficeRentalAgreementDrop
!insert (ra_10001, truck_den_24ft_01) into RentalAgreementVehicle
!insert (ra_10001, cust_ind_sarah) into RentalAgreementCustomer

!insert (office_miami, ra_10002) into RentalOfficeRentalAgreementOrigin
!insert (office_miami, ra_10002) into RentalOfficeRentalAgreementDrop
!insert (ra_10002, trailer_mia_open_01) into RentalAgreementVehicle
!insert (ra_10002, cust_ind_marcus) into RentalAgreementCustomer

!insert (office_denver, ra_10003) into RentalOfficeRentalAgreementOrigin
!insert (office_losangeles, ra_10003) into RentalOfficeRentalAgreementDrop
!insert (ra_10003, truck_den_10ft_02) into RentalAgreementVehicle
!insert (ra_10003, cust_co_bluepeak) into RentalAgreementCustomer

!insert (office_miami, ra_10004) into RentalOfficeRentalAgreementOrigin
!insert (office_miami, ra_10004) into RentalOfficeRentalAgreementDrop
!insert (ra_10004, trailer_mia_covered_02) into RentalAgreementVehicle
!insert (ra_10004, cust_co_oceanfreight) into RentalAgreementCustomer

!insert (office_losangeles, ra_10005) into RentalOfficeRentalAgreementOrigin
!insert (office_denver, ra_10005) into RentalOfficeRentalAgreementDrop
!insert (ra_10005, truck_la_24ft_03) into RentalAgreementVehicle
!insert (ra_10005, cust_ind_sarah) into RentalAgreementCustomer
```
## Generation 1 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 145 | 0.00% |
| Multiplicities Errors | 0 | 25 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 0 | 7 | 0.00% |
| License Plates | 0 | 5 | 0.00% |
| Home Phones | 0 | 2 | 0.00% |

# Generation 2
```
!new RentalOffice('office_birmingham')
!office_birmingham.name := 'Heartland Truck & Trailer Rental - Birmingham'
!office_birmingham.number := 404
!office_birmingham.address := '2900 5th Ave S, Birmingham, AL 35233'

!new RentalOffice('office_hartford')
!office_hartford.name := 'Northeast Vehicle Rental - Hartford'
!office_hartford.number := 405
!office_hartford.address := '85 Weston St, Hartford, CT 06120'

!new Truck('truck_al_16ft_01')
!truck_al_16ft_01.id := 6101
!truck_al_16ft_01.registrationState := #AL
!truck_al_16ft_01.licensePlateNumber := 'AL-TRK-6093'
!truck_al_16ft_01.vehicleTypeCode := #TRUCK
!truck_al_16ft_01.registrationLastMaintenanceDate := Date('2026-02-02')
!truck_al_16ft_01.expirationDate := Date('2027-02-28')
!truck_al_16ft_01.odometerReading := 15420
!truck_al_16ft_01.gasTankCapacity := 0.0
!truck_al_16ft_01.workingRadio := true
!truck_al_16ft_01.mileage := 0

!new Vehicle('trailer_al_open_01')
!trailer_al_open_01.id := 8101
!trailer_al_open_01.registrationState := #AL
!trailer_al_open_01.licensePlateNumber := 'AL-TRL-2217'
!trailer_al_open_01.vehicleTypeCode := #OPEN_TRAILER
!trailer_al_open_01.registrationLastMaintenanceDate := Date('2025-08-18')
!trailer_al_open_01.expirationDate := Date('2026-08-31')

!new Vehicle('trailer_ct_covered_01')
!trailer_ct_covered_01.id := 8201
!trailer_ct_covered_01.registrationState := #CT
!trailer_ct_covered_01.licensePlateNumber := 'CT-TRL-9031'
!trailer_ct_covered_01.vehicleTypeCode := #COVERED_TRAILER
!trailer_ct_covered_01.registrationLastMaintenanceDate := Date('2026-01-06')
!trailer_ct_covered_01.expirationDate := Date('2027-01-31')

!insert (office_birmingham, truck_al_16ft_01) into RentalOfficeVehicle
!insert (office_birmingham, trailer_al_open_01) into RentalOfficeVehicle
!insert (office_hartford, trailer_ct_covered_01) into RentalOfficeVehicle

!new Company('cust_co_starlite')
!cust_co_starlite.name := 'Starlite Event Services, LLC'
!cust_co_starlite.address := '1775 2nd Ave N, Birmingham, AL 35203'
!cust_co_starlite.poorRisk := true
!cust_co_starlite.idNumber := 77100984

!new Individual('cust_ind_eli')
!cust_ind_eli.name := 'Eli Patterson'
!cust_ind_eli.address := '14 Oak Meadow Ln, West Hartford, CT 06107'
!cust_ind_eli.poorRisk := false
!cust_ind_eli.homePhone := '860-555-0137'
!cust_ind_eli.driverLicenseState := #CT
!cust_ind_eli.driverLicenseNumber := 59381207
!cust_ind_eli.driverLicenseExpirationDate := Date('2027-11-30')

!new RentalAgreement('ra_20001')
!ra_20001.number := 20001
!ra_20001.rentalDate := Date('2026-03-01')
!ra_20001.anticipatedDuration := 14
!ra_20001.depositPaid := 1200.00
!ra_20001.quotedDailyRate := 159.00
!ra_20001.quotedRatePerMile := 0.85

!new RentalAgreement('ra_20002')
!ra_20002.number := 20002
!ra_20002.rentalDate := Date('2026-03-03')
!ra_20002.anticipatedDuration := 7
!ra_20002.depositPaid := 200.00
!ra_20002.quotedDailyRate := 55.00
!ra_20002.quotedRatePerMile := 0.00

!new RentalAgreement('ra_20003')
!ra_20003.number := 20003
!ra_20003.rentalDate := Date('2026-03-05')
!ra_20003.anticipatedDuration := 2
!ra_20003.depositPaid := 75.00
!ra_20003.quotedDailyRate := 29.95
!ra_20003.quotedRatePerMile := 0.00

!insert (office_birmingham, ra_20001) into RentalOfficeRentalAgreementOrigin
!insert (office_hartford, ra_20001) into RentalOfficeRentalAgreementDrop
!insert (ra_20001, truck_al_16ft_01) into RentalAgreementVehicle
!insert (ra_20001, cust_co_starlite) into RentalAgreementCustomer

!insert (office_hartford, ra_20002) into RentalOfficeRentalAgreementOrigin
!insert (office_hartford, ra_20002) into RentalOfficeRentalAgreementDrop
!insert (ra_20002, trailer_ct_covered_01) into RentalAgreementVehicle
!insert (ra_20002, cust_ind_eli) into RentalAgreementCustomer

!insert (office_birmingham, ra_20003) into RentalOfficeRentalAgreementOrigin
!insert (office_birmingham, ra_20003) into RentalOfficeRentalAgreementDrop
!insert (ra_20003, trailer_al_open_01) into RentalAgreementVehicle
!insert (ra_20003, cust_ind_eli) into RentalAgreementCustomer
```
## Generation 2 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 82 | 0.00% |
| Multiplicities Errors | 0 | 15 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 1 | 4 | 25.00% |
| License Plates | 0 | 3 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
14 Oak Meadow Ln, West Hartford, CT 06107
```

# Generation 3
```
!new RentalOffice('office_anchorage')
!office_anchorage.name := 'Northern Lights Vehicle Rental - Anchorage'
!office_anchorage.number := 501
!office_anchorage.address := '4550 Spenard Rd, Anchorage, AK 99517'

!new RentalOffice('office_phoenix')
!office_phoenix.name := 'Desert Ridge Truck Rental - Phoenix'
!office_phoenix.number := 502
!office_phoenix.address := '2100 W Broadway Rd, Phoenix, AZ 85041'

!new RentalOffice('office_wilmington')
!office_wilmington.name := 'First State Fleet Rentals - Wilmington'
!office_wilmington.number := 503
!office_wilmington.address := '700 S Madison St, Wilmington, DE 19801'

!new Truck('truck_ak_10ft_01')
!truck_ak_10ft_01.id := 9001
!truck_ak_10ft_01.registrationState := #AK
!truck_ak_10ft_01.licensePlateNumber := 'AK-TRK-0448'
!truck_ak_10ft_01.vehicleTypeCode := #TRUCK10
!truck_ak_10ft_01.registrationLastMaintenanceDate := Date('2026-01-28')
!truck_ak_10ft_01.expirationDate := Date('2026-12-31')
!truck_ak_10ft_01.odometerReading := 22805
!truck_ak_10ft_01.gasTankCapacity := 34.5
!truck_ak_10ft_01.workingRadio := false
!truck_ak_10ft_01.mileage := 15

!new Truck('truck_az_24ft_02')
!truck_az_24ft_02.id := 9002
!truck_az_24ft_02.registrationState := #AZ
!truck_az_24ft_02.licensePlateNumber := 'AZ-TRK-9821'
!truck_az_24ft_02.vehicleTypeCode := #TRUCK24
!truck_az_24ft_02.registrationLastMaintenanceDate := Date('2025-12-03')
!truck_az_24ft_02.expirationDate := Date('2026-06-30')
!truck_az_24ft_02.odometerReading := 98760
!truck_az_24ft_02.gasTankCapacity := 63.0
!truck_az_24ft_02.workingRadio := true
!truck_az_24ft_02.mileage := 9

!new Vehicle('trailer_az_open_01')
!trailer_az_open_01.id := 9101
!trailer_az_open_01.registrationState := #AZ
!trailer_az_open_01.licensePlateNumber := 'AZ-TRL-3306'
!trailer_az_open_01.vehicleTypeCode := #OPEN_TRAILER
!trailer_az_open_01.registrationLastMaintenanceDate := Date('2026-02-11')
!trailer_az_open_01.expirationDate := Date('2027-02-28')

!new Vehicle('trailer_de_covered_01')
!trailer_de_covered_01.id := 9201
!trailer_de_covered_01.registrationState := #DE
!trailer_de_covered_01.licensePlateNumber := 'DE-TRL-5770'
!trailer_de_covered_01.vehicleTypeCode := #COVERED_TRAILER
!trailer_de_covered_01.registrationLastMaintenanceDate := Date('2025-10-22')
!trailer_de_covered_01.expirationDate := Date('2026-10-31')

!insert (office_anchorage, truck_ak_10ft_01) into RentalOfficeVehicle
!insert (office_phoenix, truck_az_24ft_02) into RentalOfficeVehicle
!insert (office_phoenix, trailer_az_open_01) into RentalOfficeVehicle
!insert (office_wilmington, trailer_de_covered_01) into RentalOfficeVehicle

!new Individual('cust_ind_nora')
!cust_ind_nora.name := 'Nora Ellsworth'
!cust_ind_nora.address := '812 W 7th Ave, Anchorage, AK 99501'
!cust_ind_nora.poorRisk := false
!cust_ind_nora.homePhone := '907-555-0164'
!cust_ind_nora.driverLicenseState := #AK
!cust_ind_nora.driverLicenseNumber := 40318827
!cust_ind_nora.driverLicenseExpirationDate := Date('2029-01-14')

!new Individual('cust_ind_javier')
!cust_ind_javier.name := 'Javier Soto'
!cust_ind_javier.address := '1660 E Camelback Rd, Phoenix, AZ 85016'
!cust_ind_javier.poorRisk := false
!cust_ind_javier.homePhone := '602-555-0109'
!cust_ind_javier.driverLicenseState := #AZ
!cust_ind_javier.driverLicenseNumber := 66290113
!cust_ind_javier.driverLicenseExpirationDate := Date('2027-05-02')

!new Company('cust_co_desertworks')
!cust_co_desertworks.name := 'DesertWorks Landscaping Co.'
!cust_co_desertworks.address := '4301 S 36th St, Phoenix, AZ 85040'
!cust_co_desertworks.poorRisk := false
!cust_co_desertworks.idNumber := 88001234

!new Company('cust_co_firststate')
!cust_co_firststate.name := 'FirstState Distribution Group'
!cust_co_firststate.address := '12 Boxwood Rd, Wilmington, DE 19804'
!cust_co_firststate.poorRisk := true
!cust_co_firststate.idNumber := 88007890

!new RentalAgreement('ra_30001')
!ra_30001.number := 30001
!ra_30001.rentalDate := Date('2026-03-18')
!ra_30001.anticipatedDuration := 6
!ra_30001.depositPaid := 400.00
!ra_30001.quotedDailyRate := 119.00
!ra_30001.quotedRatePerMile := 0.72

!new RentalAgreement('ra_30002')
!ra_30002.number := 30002
!ra_30002.rentalDate := Date('2026-03-19')
!ra_30002.anticipatedDuration := 10
!ra_30002.depositPaid := 0.00
!ra_30002.quotedDailyRate := 34.95
!ra_30002.quotedRatePerMile := 0.00

!new RentalAgreement('ra_30003')
!ra_30003.number := 30003
!ra_30003.rentalDate := Date('2026-03-30')
!ra_30003.anticipatedDuration := 3
!ra_30003.depositPaid := 150.00
!ra_30003.quotedDailyRate := 42.00
!ra_30003.quotedRatePerMile := 0.00

!new RentalAgreement('ra_30004')
!ra_30004.number := 30004
!ra_30004.rentalDate := Date('2026-04-02')
!ra_30004.anticipatedDuration := 1
!ra_30004.depositPaid := 50.00
!ra_30004.quotedDailyRate := 49.00
!ra_30004.quotedRatePerMile := 0.00

!new RentalAgreement('ra_30005')
!ra_30005.number := 30005
!ra_30005.rentalDate := Date('2026-04-05')
!ra_30005.anticipatedDuration := 12
!ra_30005.depositPaid := 900.00
!ra_30005.quotedDailyRate := 169.00
!ra_30005.quotedRatePerMile := 0.88

!insert (office_anchorage, ra_30001) into RentalOfficeRentalAgreementOrigin
!insert (office_phoenix, ra_30001) into RentalOfficeRentalAgreementDrop
!insert (ra_30001, truck_ak_10ft_01) into RentalAgreementVehicle
!insert (ra_30001, cust_ind_nora) into RentalAgreementCustomer

!insert (office_phoenix, ra_30002) into RentalOfficeRentalAgreementOrigin
!insert (office_phoenix, ra_30002) into RentalOfficeRentalAgreementDrop
!insert (ra_30002, trailer_az_open_01) into RentalAgreementVehicle
!insert (ra_30002, cust_co_desertworks) into RentalAgreementCustomer

!insert (office_phoenix, ra_30003) into RentalOfficeRentalAgreementOrigin
!insert (office_wilmington, ra_30003) into RentalOfficeRentalAgreementDrop
!insert (ra_30003, trailer_az_open_01) into RentalAgreementVehicle
!insert (ra_30003, cust_co_firststate) into RentalAgreementCustomer

!insert (office_wilmington, ra_30004) into RentalOfficeRentalAgreementOrigin
!insert (office_wilmington, ra_30004) into RentalOfficeRentalAgreementDrop
!insert (ra_30004, trailer_de_covered_01) into RentalAgreementVehicle
!insert (ra_30004, cust_ind_javier) into RentalAgreementCustomer

!insert (office_phoenix, ra_30005) into RentalOfficeRentalAgreementOrigin
!insert (office_anchorage, ra_30005) into RentalOfficeRentalAgreementDrop
!insert (ra_30005, truck_az_24ft_02) into RentalAgreementVehicle
!insert (ra_30005, cust_co_desertworks) into RentalAgreementCustomer
```
## Generation 3 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 133 | 0.00% |
| Multiplicities Errors | 0 | 24 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 0 | 7 | 0.00% |
| License Plates | 0 | 4 | 0.00% |
| Home Phones | 0 | 2 | 0.00% |

# Generation 4
```
!new RentalOffice('office_sanfrancisco')
!office_sanfrancisco.name := 'Bay City Trailer Rentals - San Francisco'
!office_sanfrancisco.number := 610
!office_sanfrancisco.address := '1200 3rd St, San Francisco, CA 94158'

!new RentalOffice('office_orlando_drop')
!office_orlando_drop.name := 'Central Florida Drop-Off Center - Orlando'
!office_orlando_drop.number := 611
!office_orlando_drop.address := '1 Jeff Fuqua Blvd, Orlando, FL 32827'

!new RentalOffice('office_bridgeport')
!office_bridgeport.name := 'Sound Shore Rentals - Bridgeport'
!office_bridgeport.number := 612
!office_bridgeport.address := '500 Seaview Ave, Bridgeport, CT 06607'

!new Vehicle('trailer_ca_covered_10')
!trailer_ca_covered_10.id := 11010
!trailer_ca_covered_10.registrationState := #CA
!trailer_ca_covered_10.licensePlateNumber := 'CA-TRL-2401'
!trailer_ca_covered_10.vehicleTypeCode := #COVERED_TRAILER
!trailer_ca_covered_10.registrationLastMaintenanceDate := Date('2026-02-20')
!trailer_ca_covered_10.expirationDate := Date('2027-02-28')

!new Vehicle('trailer_ca_open_11')
!trailer_ca_open_11.id := 11011
!trailer_ca_open_11.registrationState := #CA
!trailer_ca_open_11.licensePlateNumber := 'CA-TRL-2402'
!trailer_ca_open_11.vehicleTypeCode := #OPEN_TRAILER
!trailer_ca_open_11.registrationLastMaintenanceDate := Date('2025-12-14')
!trailer_ca_open_11.expirationDate := Date('2026-12-31')

!new Vehicle('trailer_ct_open_12')
!trailer_ct_open_12.id := 11012
!trailer_ct_open_12.registrationState := #CT
!trailer_ct_open_12.licensePlateNumber := 'CT-TRL-7715'
!trailer_ct_open_12.vehicleTypeCode := #OPEN_TRAILER
!trailer_ct_open_12.registrationLastMaintenanceDate := Date('2026-01-03')
!trailer_ct_open_12.expirationDate := Date('2027-01-31')

!insert (office_sanfrancisco, trailer_ca_covered_10) into RentalOfficeVehicle
!insert (office_sanfrancisco, trailer_ca_open_11) into RentalOfficeVehicle
!insert (office_bridgeport, trailer_ct_open_12) into RentalOfficeVehicle

!new Company('cust_co_silverframe')
!cust_co_silverframe.name := 'SilverFrame Productions'
!cust_co_silverframe.address := '2600 Marin St, San Francisco, CA 94124'
!cust_co_silverframe.poorRisk := false
!cust_co_silverframe.idNumber := 93004417

!new Individual('cust_ind_danielle')
!cust_ind_danielle.name := 'Danielle Morales'
!cust_ind_danielle.address := '88 Atlantic St, Bridgeport, CT 06604'
!cust_ind_danielle.poorRisk := false
!cust_ind_danielle.homePhone := '203-555-0176'
!cust_ind_danielle.driverLicenseState := #CT
!cust_ind_danielle.driverLicenseNumber := 84512039
!cust_ind_danielle.driverLicenseExpirationDate := Date('2028-09-22')

!new RentalAgreement('ra_41001')
!ra_41001.number := 41001
!ra_41001.rentalDate := Date('2026-04-10')
!ra_41001.anticipatedDuration := 9
!ra_41001.depositPaid := 800.00
!ra_41001.quotedDailyRate := 74.50
!ra_41001.quotedRatePerMile := 0.00

!new RentalAgreement('ra_41002')
!ra_41002.number := 41002
!ra_41002.rentalDate := Date('2026-04-12')
!ra_41002.anticipatedDuration := 4
!ra_41002.depositPaid := 125.00
!ra_41002.quotedDailyRate := 32.00
!ra_41002.quotedRatePerMile := 0.00

!new RentalAgreement('ra_41003')
!ra_41003.number := 41003
!ra_41003.rentalDate := Date('2026-04-20')
!ra_41003.anticipatedDuration := 2
!ra_41003.depositPaid := 0.00
!ra_41003.quotedDailyRate := 29.00
!ra_41003.quotedRatePerMile := 0.00

!insert (office_sanfrancisco, ra_41001) into RentalOfficeRentalAgreementOrigin
!insert (office_orlando_drop, ra_41001) into RentalOfficeRentalAgreementDrop
!insert (ra_41001, trailer_ca_covered_10) into RentalAgreementVehicle
!insert (ra_41001, cust_co_silverframe) into RentalAgreementCustomer

!insert (office_bridgeport, ra_41002) into RentalOfficeRentalAgreementOrigin
!insert (office_bridgeport, ra_41002) into RentalOfficeRentalAgreementDrop
!insert (ra_41002, trailer_ct_open_12) into RentalAgreementVehicle
!insert (ra_41002, cust_ind_danielle) into RentalAgreementCustomer

!insert (office_sanfrancisco, ra_41003) into RentalOfficeRentalAgreementOrigin
!insert (office_sanfrancisco, ra_41003) into RentalOfficeRentalAgreementDrop
!insert (ra_41003, trailer_ca_open_11) into RentalAgreementVehicle
!insert (ra_41003, cust_co_silverframe) into RentalAgreementCustomer
```
## Generation 4 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 82 | 0.00% |
| Multiplicities Errors | 0 | 15 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 0 | 5 | 0.00% |
| License Plates | 0 | 3 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

# Generation 5
```
!new RentalOffice('office_wilmington_hub2')
!office_wilmington_hub2.name := 'Delaware River Vehicle Rental - Wilmington Hub'
!office_wilmington_hub2.number := 701
!office_wilmington_hub2.address := '901 N Market St, Wilmington, DE 19801'

!new RentalOffice('office_newark_drop2')
!office_newark_drop2.name := 'Newark Return-Only Lot'
!office_newark_drop2.number := 702
!office_newark_drop2.address := '10 Mopar Dr, Newark, DE 19713'

!new RentalOffice('office_juneau')
!office_juneau.name := 'Capital City Rentals - Juneau'
!office_juneau.number := 703
!office_juneau.address := '545 Glacier Hwy, Juneau, AK 99801'

!new RentalOffice('office_fairbanks_drop')
!office_fairbanks_drop.name := 'Interior Alaska Drop-Off Yard - Fairbanks'
!office_fairbanks_drop.number := 704
!office_fairbanks_drop.address := '6450 Airport Way, Fairbanks, AK 99709'

!new Truck('truck_de_24ft_07')
!truck_de_24ft_07.id := 12007
!truck_de_24ft_07.registrationState := #DE
!truck_de_24ft_07.licensePlateNumber := 'DE-TRK-6304'
!truck_de_24ft_07.vehicleTypeCode := #TRUCK24
!truck_de_24ft_07.registrationLastMaintenanceDate := Date('2026-02-25')
!truck_de_24ft_07.expirationDate := Date('2027-02-28')
!truck_de_24ft_07.odometerReading := 56340
!truck_de_24ft_07.gasTankCapacity := 62.0
!truck_de_24ft_07.workingRadio := true
!truck_de_24ft_07.mileage := 9

!new Vehicle('trailer_de_open_07')
!trailer_de_open_07.id := 13007
!trailer_de_open_07.registrationState := #DE
!trailer_de_open_07.licensePlateNumber := 'DE-TRL-1440'
!trailer_de_open_07.vehicleTypeCode := #OPEN_TRAILER
!trailer_de_open_07.registrationLastMaintenanceDate := Date('2026-01-12')
!trailer_de_open_07.expirationDate := Date('2027-01-31')

!new Truck('truck_ak_10ft_08')
!truck_ak_10ft_08.id := 14008
!truck_ak_10ft_08.registrationState := #AK
!truck_ak_10ft_08.licensePlateNumber := 'AK-TRK-7116'
!truck_ak_10ft_08.vehicleTypeCode := #TRUCK10
!truck_ak_10ft_08.registrationLastMaintenanceDate := Date('2025-12-18')
!truck_ak_10ft_08.expirationDate := Date('2026-12-31')
!truck_ak_10ft_08.odometerReading := 11890
!truck_ak_10ft_08.gasTankCapacity := 33.0
!truck_ak_10ft_08.workingRadio := false
!truck_ak_10ft_08.mileage := 16

!insert (office_wilmington_hub2, truck_de_24ft_07) into RentalOfficeVehicle
!insert (office_wilmington_hub2, trailer_de_open_07) into RentalOfficeVehicle
!insert (office_juneau, truck_ak_10ft_08) into RentalOfficeVehicle

!new Individual('cust_ind_helen')
!cust_ind_helen.name := 'Helen Carter'
!cust_ind_helen.address := '27 Kentmere Pkwy, Wilmington, DE 19806'
!cust_ind_helen.poorRisk := true
!cust_ind_helen.homePhone := '302-555-0121'
!cust_ind_helen.driverLicenseState := #DE
!cust_ind_helen.driverLicenseNumber := 61590322
!cust_ind_helen.driverLicenseExpirationDate := Date('2026-10-15')

!new Company('cust_co_arcticbuild')
!cust_co_arcticbuild.name := 'ArcticBuild Services'
!cust_co_arcticbuild.address := '100 Franklin St, Juneau, AK 99801'
!cust_co_arcticbuild.poorRisk := false
!cust_co_arcticbuild.idNumber := 77550019

!new RentalAgreement('ra_52001')
!ra_52001.number := 52001
!ra_52001.rentalDate := Date('2026-04-22')
!ra_52001.anticipatedDuration := 2
!ra_52001.depositPaid := 0.00
!ra_52001.quotedDailyRate := 28.00
!ra_52001.quotedRatePerMile := 0.00

!new RentalAgreement('ra_52002')
!ra_52002.number := 52002
!ra_52002.rentalDate := Date('2026-04-25')
!ra_52002.anticipatedDuration := 8
!ra_52002.depositPaid := 650.00
!ra_52002.quotedDailyRate := 155.00
!ra_52002.quotedRatePerMile := 0.83

!new RentalAgreement('ra_52003')
!ra_52003.number := 52003
!ra_52003.rentalDate := Date('2026-05-03')
!ra_52003.anticipatedDuration := 5
!ra_52003.depositPaid := 500.00
!ra_52003.quotedDailyRate := 112.00
!ra_52003.quotedRatePerMile := 0.70

!new RentalAgreement('ra_52004')
!ra_52004.number := 52004
!ra_52004.rentalDate := Date('2026-05-15')
!ra_52004.anticipatedDuration := 1
!ra_52004.depositPaid := 300.00
!ra_52004.quotedDailyRate := 169.00
!ra_52004.quotedRatePerMile := 0.89

!insert (office_wilmington_hub2, ra_52001) into RentalOfficeRentalAgreementOrigin
!insert (office_newark_drop2, ra_52001) into RentalOfficeRentalAgreementDrop
!insert (ra_52001, trailer_de_open_07) into RentalAgreementVehicle
!insert (ra_52001, cust_ind_helen) into RentalAgreementCustomer

!insert (office_wilmington_hub2, ra_52002) into RentalOfficeRentalAgreementOrigin
!insert (office_juneau, ra_52002) into RentalOfficeRentalAgreementDrop
!insert (ra_52002, truck_de_24ft_07) into RentalAgreementVehicle
!insert (ra_52002, cust_co_arcticbuild) into RentalAgreementCustomer

!insert (office_juneau, ra_52003) into RentalOfficeRentalAgreementOrigin
!insert (office_fairbanks_drop, ra_52003) into RentalOfficeRentalAgreementDrop
!insert (ra_52003, truck_ak_10ft_08) into RentalAgreementVehicle
!insert (ra_52003, cust_co_arcticbuild) into RentalAgreementCustomer

!insert (office_wilmington_hub2, ra_52004) into RentalOfficeRentalAgreementOrigin
!insert (office_wilmington_hub2, ra_52004) into RentalOfficeRentalAgreementDrop
!insert (ra_52004, truck_de_24ft_07) into RentalAgreementVehicle
!insert (ra_52004, cust_ind_helen) into RentalAgreementCustomer
```
## Generation 5 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 105 | 0.00% |
| Multiplicities Errors | 0 | 19 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 2 | 6 | 33.33% |
| License Plates | 0 | 3 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
545 Glacier Hwy, Juneau, AK 99801
```
```
27 Kentmere Pkwy, Wilmington, DE 19806
```

# Generation 6
```
!new RentalOffice('office_mobile')
!office_mobile.name := 'Gulf Coast Vehicle Rental - Mobile'
!office_mobile.number := 801
!office_mobile.address := '3100 Airport Blvd, Mobile, AL 36606'

!new RentalOffice('office_tallahassee')
!office_tallahassee.name := 'Capital City Truck Rental - Tallahassee'
!office_tallahassee.number := 802
!office_tallahassee.address := '3850 N Monroe St, Tallahassee, FL 32303'

!new RentalOffice('office_newhaven')
!office_newhaven.name := 'Harborline Rentals - New Haven'
!office_newhaven.number := 803
!office_newhaven.address := '60 S Water St, New Haven, CT 06519'

!new RentalOffice('office_de_drop_yard')
!office_de_drop_yard.name := 'Delaware Return Yard (Unstaffed)'
!office_de_drop_yard.number := 804
!office_de_drop_yard.address := '250 River Rd, New Castle, DE 19720'

!new Truck('truck_al_standard_01')
!truck_al_standard_01.id := 16001
!truck_al_standard_01.registrationState := #AL
!truck_al_standard_01.licensePlateNumber := 'AL-TRK-8801'
!truck_al_standard_01.vehicleTypeCode := #TRUCK
!truck_al_standard_01.registrationLastMaintenanceDate := Date('2026-03-08')
!truck_al_standard_01.expirationDate := Date('2027-03-31')
!truck_al_standard_01.odometerReading := 40755
!truck_al_standard_01.gasTankCapacity := 50.0
!truck_al_standard_01.workingRadio := true
!truck_al_standard_01.mileage := 11

!new Vehicle('trailer_al_covered_01')
!trailer_al_covered_01.id := 17001
!trailer_al_covered_01.registrationState := #AL
!trailer_al_covered_01.licensePlateNumber := 'AL-TRL-6008'
!trailer_al_covered_01.vehicleTypeCode := #COVERED_TRAILER
!trailer_al_covered_01.registrationLastMaintenanceDate := Date('2026-02-19')
!trailer_al_covered_01.expirationDate := Date('2027-02-28')

!new Vehicle('trailer_fl_open_01')
!trailer_fl_open_01.id := 17002
!trailer_fl_open_01.registrationState := #FL
!trailer_fl_open_01.licensePlateNumber := 'FL-TRL-8904'
!trailer_fl_open_01.vehicleTypeCode := #OPEN_TRAILER
!trailer_fl_open_01.registrationLastMaintenanceDate := Date('2025-11-27')
!trailer_fl_open_01.expirationDate := Date('2026-11-30')

!new Truck('truck_fl_10ft_01')
!truck_fl_10ft_01.id := 16002
!truck_fl_10ft_01.registrationState := #FL
!truck_fl_10ft_01.licensePlateNumber := 'FL-TRK-3120'
!truck_fl_10ft_01.vehicleTypeCode := #TRUCK10
!truck_fl_10ft_01.registrationLastMaintenanceDate := Date('2026-01-30')
!truck_fl_10ft_01.expirationDate := Date('2026-09-30')
!truck_fl_10ft_01.odometerReading := 27110
!truck_fl_10ft_01.gasTankCapacity := 36.0
!truck_fl_10ft_01.workingRadio := false
!truck_fl_10ft_01.mileage := 15

!insert (office_mobile, truck_al_standard_01) into RentalOfficeVehicle
!insert (office_mobile, trailer_al_covered_01) into RentalOfficeVehicle
!insert (office_tallahassee, trailer_fl_open_01) into RentalOfficeVehicle
!insert (office_tallahassee, truck_fl_10ft_01) into RentalOfficeVehicle

!new Company('cust_co_gulfport')
!cust_co_gulfport.name := 'GulfPort Movers & Storage'
!cust_co_gulfport.address := '920 Government St, Mobile, AL 36604'
!cust_co_gulfport.poorRisk := false
!cust_co_gulfport.idNumber := 99012001

!new Individual('cust_ind_priya')
!cust_ind_priya.name := 'Priya Desai'
!cust_ind_priya.address := '155 Orange St, New Haven, CT 06510'
!cust_ind_priya.poorRisk := true
!cust_ind_priya.homePhone := '475-555-0160'
!cust_ind_priya.driverLicenseState := #CT
!cust_ind_priya.driverLicenseNumber := 77441028
!cust_ind_priya.driverLicenseExpirationDate := Date('2026-06-01')

!new RentalAgreement('ra_61001')
!ra_61001.number := 61001
!ra_61001.rentalDate := Date('2026-05-01')
!ra_61001.anticipatedDuration := 11
!ra_61001.depositPaid := 1000.00
!ra_61001.quotedDailyRate := 145.00
!ra_61001.quotedRatePerMile := 0.82

!new RentalAgreement('ra_61002')
!ra_61002.number := 61002
!ra_61002.rentalDate := Date('2026-05-02')
!ra_61002.anticipatedDuration := 3
!ra_61002.depositPaid := 150.00
!ra_61002.quotedDailyRate := 39.95
!ra_61002.quotedRatePerMile := 0.00

!new RentalAgreement('ra_61003')
!ra_61003.number := 61003
!ra_61003.rentalDate := Date('2026-05-04')
!ra_61003.anticipatedDuration := 1
!ra_61003.depositPaid := 75.00
!ra_61003.quotedDailyRate := 59.00
!ra_61003.quotedRatePerMile := 0.00

!new RentalAgreement('ra_61004')
!ra_61004.number := 61004
!ra_61004.rentalDate := Date('2026-05-06')
!ra_61004.anticipatedDuration := 6
!ra_61004.depositPaid := 0.00
!ra_61004.quotedDailyRate := 35.00
!ra_61004.quotedRatePerMile := 0.00

!new RentalAgreement('ra_61005')
!ra_61005.number := 61005
!ra_61005.rentalDate := Date('2026-05-07')
!ra_61005.anticipatedDuration := 4
!ra_61005.depositPaid := 500.00
!ra_61005.quotedDailyRate := 119.00
!ra_61005.quotedRatePerMile := 0.75

!new RentalAgreement('ra_61006')
!ra_61006.number := 61006
!ra_61006.rentalDate := Date('2026-05-10')
!ra_61006.anticipatedDuration := 2
!ra_61006.depositPaid := 200.00
!ra_61006.quotedDailyRate := 109.00
!ra_61006.quotedRatePerMile := 0.70

!insert (office_mobile, ra_61001) into RentalOfficeRentalAgreementOrigin
!insert (office_de_drop_yard, ra_61001) into RentalOfficeRentalAgreementDrop
!insert (ra_61001, truck_al_standard_01) into RentalAgreementVehicle
!insert (ra_61001, cust_co_gulfport) into RentalAgreementCustomer

!insert (office_mobile, ra_61002) into RentalOfficeRentalAgreementOrigin
!insert (office_newhaven, ra_61002) into RentalOfficeRentalAgreementDrop
!insert (ra_61002, trailer_al_covered_01) into RentalAgreementVehicle
!insert (ra_61002, cust_co_gulfport) into RentalAgreementCustomer

!insert (office_newhaven, ra_61003) into RentalOfficeRentalAgreementOrigin
!insert (office_newhaven, ra_61003) into RentalOfficeRentalAgreementDrop
!insert (ra_61003, trailer_al_covered_01) into RentalAgreementVehicle
!insert (ra_61003, cust_ind_priya) into RentalAgreementCustomer

!insert (office_tallahassee, ra_61004) into RentalOfficeRentalAgreementOrigin
!insert (office_de_drop_yard, ra_61004) into RentalOfficeRentalAgreementDrop
!insert (ra_61004, trailer_fl_open_01) into RentalAgreementVehicle
!insert (ra_61004, cust_ind_priya) into RentalAgreementCustomer

!insert (office_tallahassee, ra_61005) into RentalOfficeRentalAgreementOrigin
!insert (office_mobile, ra_61005) into RentalOfficeRentalAgreementDrop
!insert (ra_61005, truck_fl_10ft_01) into RentalAgreementVehicle
!insert (ra_61005, cust_co_gulfport) into RentalAgreementCustomer

!insert (office_tallahassee, ra_61006) into RentalOfficeRentalAgreementOrigin
!insert (office_tallahassee, ra_61006) into RentalOfficeRentalAgreementDrop
!insert (ra_61006, truck_fl_10ft_01) into RentalAgreementVehicle
!insert (ra_61006, cust_ind_priya) into RentalAgreementCustomer
```
## Generation 6 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 135 | 0.00% |
| Multiplicities Errors | 0 | 28 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 0 | 6 | 0.00% |
| License Plates | 0 | 4 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

# Generation 7
```
!new RentalOffice('office_sacramento')
!office_sacramento.name := 'Capitol Region Vehicle Rental - Sacramento'
!office_sacramento.number := 901
!office_sacramento.address := '3400 Florin Rd, Sacramento, CA 95823'

!new RentalOffice('office_tucson')
!office_tucson.name := 'Sonoran Fleet Rental - Tucson'
!office_tucson.number := 902
!office_tucson.address := '4550 E Benson Hwy, Tucson, AZ 85706'

!new RentalOffice('office_sandiego_return')
!office_sandiego_return.name := 'San Diego Return Center'
!office_sandiego_return.number := 903
!office_sandiego_return.address := '3270 Kurtz St, San Diego, CA 92110'

!new Truck('truck_ca_24ft_20')
!truck_ca_24ft_20.id := 21020
!truck_ca_24ft_20.registrationState := #CA
!truck_ca_24ft_20.licensePlateNumber := 'CA-TRK-2047'
!truck_ca_24ft_20.vehicleTypeCode := #TRUCK24
!truck_ca_24ft_20.registrationLastMaintenanceDate := Date('2026-02-08')
!truck_ca_24ft_20.expirationDate := Date('2026-12-31')
!truck_ca_24ft_20.odometerReading := 66705
!truck_ca_24ft_20.gasTankCapacity := 64.0
!truck_ca_24ft_20.workingRadio := false
!truck_ca_24ft_20.mileage := 9

!new Truck('truck_ca_10ft_21')
!truck_ca_10ft_21.id := 21021
!truck_ca_10ft_21.registrationState := #CA
!truck_ca_10ft_21.licensePlateNumber := 'CA-TRK-3391'
!truck_ca_10ft_21.vehicleTypeCode := #TRUCK10
!truck_ca_10ft_21.registrationLastMaintenanceDate := Date('2026-03-02')
!truck_ca_10ft_21.expirationDate := Date('2027-03-31')
!truck_ca_10ft_21.odometerReading := 12005
!truck_ca_10ft_21.gasTankCapacity := 32.0
!truck_ca_10ft_21.workingRadio := true
!truck_ca_10ft_21.mileage := 17

!new Vehicle('trailer_ca_open_20')
!trailer_ca_open_20.id := 22020
!trailer_ca_open_20.registrationState := #CA
!trailer_ca_open_20.licensePlateNumber := 'CA-TRL-5188'
!trailer_ca_open_20.vehicleTypeCode := #OPEN_TRAILER
!trailer_ca_open_20.registrationLastMaintenanceDate := Date('2025-11-05')
!trailer_ca_open_20.expirationDate := Date('2026-11-30')

!new Vehicle('trailer_ca_covered_21')
!trailer_ca_covered_21.id := 22021
!trailer_ca_covered_21.registrationState := #CA
!trailer_ca_covered_21.licensePlateNumber := 'CA-TRL-5199'
!trailer_ca_covered_21.vehicleTypeCode := #COVERED_TRAILER
!trailer_ca_covered_21.registrationLastMaintenanceDate := Date('2026-01-19')
!trailer_ca_covered_21.expirationDate := Date('2027-01-31')

!new Vehicle('trailer_az_open_22')
!trailer_az_open_22.id := 23022
!trailer_az_open_22.registrationState := #AZ
!trailer_az_open_22.licensePlateNumber := 'AZ-TRL-7401'
!trailer_az_open_22.vehicleTypeCode := #OPEN_TRAILER
!trailer_az_open_22.registrationLastMaintenanceDate := Date('2026-02-26')
!trailer_az_open_22.expirationDate := Date('2027-02-28')

!insert (office_sacramento, truck_ca_24ft_20) into RentalOfficeVehicle
!insert (office_sacramento, truck_ca_10ft_21) into RentalOfficeVehicle
!insert (office_sacramento, trailer_ca_open_20) into RentalOfficeVehicle
!insert (office_sacramento, trailer_ca_covered_21) into RentalOfficeVehicle
!insert (office_tucson, trailer_az_open_22) into RentalOfficeVehicle

!new Company('cust_co_redstone')
!cust_co_redstone.name := 'RedStone Data Center Services'
!cust_co_redstone.address := '1800 Del Paso Rd, Sacramento, CA 95834'
!cust_co_redstone.poorRisk := false
!cust_co_redstone.idNumber := 66050177

!new Individual('cust_ind_oliver')
!cust_ind_oliver.name := 'Oliver Bennett'
!cust_ind_oliver.address := '925 E 2nd St, Tucson, AZ 85719'
!cust_ind_oliver.poorRisk := false
!cust_ind_oliver.homePhone := '520-555-0188'
!cust_ind_oliver.driverLicenseState := #AZ
!cust_ind_oliver.driverLicenseNumber := 50888142
!cust_ind_oliver.driverLicenseExpirationDate := Date('2028-12-05')

!new RentalAgreement('ra_71001')
!ra_71001.number := 71001
!ra_71001.rentalDate := Date('2026-06-03')
!ra_71001.anticipatedDuration := 5
!ra_71001.depositPaid := 750.00
!ra_71001.quotedDailyRate := 164.00
!ra_71001.quotedRatePerMile := 0.86

!new RentalAgreement('ra_71002')
!ra_71002.number := 71002
!ra_71002.rentalDate := Date('2026-06-06')
!ra_71002.anticipatedDuration := 2
!ra_71002.depositPaid := 100.00
!ra_71002.quotedDailyRate := 33.50
!ra_71002.quotedRatePerMile := 0.00

!new RentalAgreement('ra_71003')
!ra_71003.number := 71003
!ra_71003.rentalDate := Date('2026-06-08')
!ra_71003.anticipatedDuration := 21
!ra_71003.depositPaid := 0.00
!ra_71003.quotedDailyRate := 69.00
!ra_71003.quotedRatePerMile := 0.00

!new RentalAgreement('ra_71004')
!ra_71004.number := 71004
!ra_71004.rentalDate := Date('2026-07-01')
!ra_71004.anticipatedDuration := 1
!ra_71004.depositPaid := 300.00
!ra_71004.quotedDailyRate := 179.00
!ra_71004.quotedRatePerMile := 0.92

!insert (office_tucson, ra_71001) into RentalOfficeRentalAgreementOrigin
!insert (office_sacramento, ra_71001) into RentalOfficeRentalAgreementDrop
!insert (ra_71001, truck_ca_24ft_20) into RentalAgreementVehicle
!insert (ra_71001, cust_co_redstone) into RentalAgreementCustomer

!insert (office_tucson, ra_71002) into RentalOfficeRentalAgreementOrigin
!insert (office_tucson, ra_71002) into RentalOfficeRentalAgreementDrop
!insert (ra_71002, trailer_az_open_22) into RentalAgreementVehicle
!insert (ra_71002, cust_ind_oliver) into RentalAgreementCustomer

!insert (office_sacramento, ra_71003) into RentalOfficeRentalAgreementOrigin
!insert (office_sandiego_return, ra_71003) into RentalOfficeRentalAgreementDrop
!insert (ra_71003, trailer_ca_covered_21) into RentalAgreementVehicle
!insert (ra_71003, cust_co_redstone) into RentalAgreementCustomer

!insert (office_tucson, ra_71004) into RentalOfficeRentalAgreementOrigin
!insert (office_tucson, ra_71004) into RentalOfficeRentalAgreementDrop
!insert (ra_71004, truck_ca_24ft_20) into RentalAgreementVehicle
!insert (ra_71004, cust_ind_oliver) into RentalAgreementCustomer
```
## Generation 7 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 117 | 0.00% |
| Multiplicities Errors | 0 | 21 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 0 | 5 | 0.00% |
| License Plates | 0 | 5 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

# Generation 8
```
!new RentalOffice('office_honolulu_temp')
!office_honolulu_temp.name := 'Island Freight Rentals - Temporary Counter'
!office_honolulu_temp.number := 1001
!office_honolulu_temp.address := '300 Rodgers Blvd, Honolulu, HI 96819'

!new RentalOffice('office_phoenix_west')
!office_phoenix_west.name := 'Phoenix West Truck Rental'
!office_phoenix_west.number := 1002
!office_phoenix_west.address := '5151 W Van Buren St, Phoenix, AZ 85043'

!new RentalOffice('office_flagstaff_return')
!office_flagstaff_return.name := 'Flagstaff Return Yard (After-Hours)'
!office_flagstaff_return.number := 1003
!office_flagstaff_return.address := '2200 N Fort Valley Rd, Flagstaff, AZ 86001'

!new RentalOffice('office_tucson_micro')
!office_tucson_micro.name := 'Tucson Micro Depot'
!office_tucson_micro.number := 1004
!office_tucson_micro.address := '1310 E Ajo Way, Tucson, AZ 85713'

!new Truck('truck_az_24ft_90')
!truck_az_24ft_90.id := 30990
!truck_az_24ft_90.registrationState := #AZ
!truck_az_24ft_90.licensePlateNumber := 'AZ-TRK-4908'
!truck_az_24ft_90.vehicleTypeCode := #TRUCK24
!truck_az_24ft_90.registrationLastMaintenanceDate := Date('2026-02-14')
!truck_az_24ft_90.expirationDate := Date('2027-02-28')
!truck_az_24ft_90.odometerReading := 45120
!truck_az_24ft_90.gasTankCapacity := 63.5
!truck_az_24ft_90.workingRadio := true
!truck_az_24ft_90.mileage := 9

!new Truck('truck_az_10ft_91')
!truck_az_10ft_91.id := 30991
!truck_az_10ft_91.registrationState := #AZ
!truck_az_10ft_91.licensePlateNumber := 'AZ-TRK-7713'
!truck_az_10ft_91.vehicleTypeCode := #TRUCK10
!truck_az_10ft_91.registrationLastMaintenanceDate := Date('2026-03-11')
!truck_az_10ft_91.expirationDate := Date('2026-12-31')
!truck_az_10ft_91.odometerReading := 9055
!truck_az_10ft_91.gasTankCapacity := 31.0
!truck_az_10ft_91.workingRadio := false
!truck_az_10ft_91.mileage := 17

!new Vehicle('trailer_az_covered_92')
!trailer_az_covered_92.id := 31992
!trailer_az_covered_92.registrationState := #AZ
!trailer_az_covered_92.licensePlateNumber := 'AZ-TRL-0082'
!trailer_az_covered_92.vehicleTypeCode := #COVERED_TRAILER
!trailer_az_covered_92.registrationLastMaintenanceDate := Date('2026-01-05')
!trailer_az_covered_92.expirationDate := Date('2027-01-31')

!new Vehicle('trailer_az_open_93')
!trailer_az_open_93.id := 31993
!trailer_az_open_93.registrationState := #AZ
!trailer_az_open_93.licensePlateNumber := 'AZ-TRL-0194'
!trailer_az_open_93.vehicleTypeCode := #OPEN_TRAILER
!trailer_az_open_93.registrationLastMaintenanceDate := Date('2025-10-29')
!trailer_az_open_93.expirationDate := Date('2026-10-31')

!insert (office_phoenix_west, truck_az_24ft_90) into RentalOfficeVehicle
!insert (office_tucson_micro, truck_az_10ft_91) into RentalOfficeVehicle
!insert (office_tucson_micro, trailer_az_covered_92) into RentalOfficeVehicle
!insert (office_phoenix_west, trailer_az_open_93) into RentalOfficeVehicle

!new Individual('cust_ind_kyle')
!cust_ind_kyle.name := 'Kyle Sanderson'
!cust_ind_kyle.address := '742 W Roosevelt St, Phoenix, AZ 85007'
!cust_ind_kyle.poorRisk := false
!cust_ind_kyle.homePhone := '602-555-0126'
!cust_ind_kyle.driverLicenseState := #AZ
!cust_ind_kyle.driverLicenseNumber := 70018422
!cust_ind_kyle.driverLicenseExpirationDate := Date('2029-03-20')

!new Individual('cust_ind_mina')
!cust_ind_mina.name := 'Mina Park'
!cust_ind_mina.address := '3601 E 7th St, Tucson, AZ 85716'
!cust_ind_mina.poorRisk := false
!cust_ind_mina.homePhone := '520-555-0159'
!cust_ind_mina.driverLicenseState := #AZ
!cust_ind_mina.driverLicenseNumber := 61390211
!cust_ind_mina.driverLicenseExpirationDate := Date('2027-08-31')

!new Company('cust_co_canyon')
!cust_co_canyon.name := 'Canyon Solar Installations'
!cust_co_canyon.address := '2150 S Country Club Rd, Tucson, AZ 85713'
!cust_co_canyon.poorRisk := true
!cust_co_canyon.idNumber := 44001987

!new RentalAgreement('ra_81001')
!ra_81001.number := 81001
!ra_81001.rentalDate := Date('2026-08-01')
!ra_81001.anticipatedDuration := 2
!ra_81001.depositPaid := 400.00
!ra_81001.quotedDailyRate := 179.00
!ra_81001.quotedRatePerMile := 0.95

!new RentalAgreement('ra_81002')
!ra_81002.number := 81002
!ra_81002.rentalDate := Date('2026-08-03')
!ra_81002.anticipatedDuration := 30
!ra_81002.depositPaid := 0.00
!ra_81002.quotedDailyRate := 62.00
!ra_81002.quotedRatePerMile := 0.00

!new RentalAgreement('ra_81003')
!ra_81003.number := 81003
!ra_81003.rentalDate := Date('2026-08-05')
!ra_81003.anticipatedDuration := 1
!ra_81003.depositPaid := 150.00
!ra_81003.quotedDailyRate := 49.00
!ra_81003.quotedRatePerMile := 0.00

!new RentalAgreement('ra_81004')
!ra_81004.number := 81004
!ra_81004.rentalDate := Date('2026-08-06')
!ra_81004.anticipatedDuration := 6
!ra_81004.depositPaid := 600.00
!ra_81004.quotedDailyRate := 139.00
!ra_81004.quotedRatePerMile := 0.78

!new RentalAgreement('ra_81005')
!ra_81005.number := 81005
!ra_81005.rentalDate := Date('2026-08-10')
!ra_81005.anticipatedDuration := 3
!ra_81005.depositPaid := 0.00
!ra_81005.quotedDailyRate := 29.95
!ra_81005.quotedRatePerMile := 0.00

!insert (office_phoenix_west, ra_81001) into RentalOfficeRentalAgreementOrigin
!insert (office_flagstaff_return, ra_81001) into RentalOfficeRentalAgreementDrop
!insert (ra_81001, truck_az_24ft_90) into RentalAgreementVehicle
!insert (ra_81001, cust_ind_kyle) into RentalAgreementCustomer

!insert (office_tucson_micro, ra_81002) into RentalOfficeRentalAgreementOrigin
!insert (office_tucson_micro, ra_81002) into RentalOfficeRentalAgreementDrop
!insert (ra_81002, trailer_az_covered_92) into RentalAgreementVehicle
!insert (ra_81002, cust_co_canyon) into RentalAgreementCustomer

!insert (office_tucson_micro, ra_81003) into RentalOfficeRentalAgreementOrigin
!insert (office_phoenix_west, ra_81003) into RentalOfficeRentalAgreementDrop
!insert (ra_81003, truck_az_10ft_91) into RentalAgreementVehicle
!insert (ra_81003, cust_ind_mina) into RentalAgreementCustomer

!insert (office_phoenix_west, ra_81004) into RentalOfficeRentalAgreementOrigin
!insert (office_phoenix_west, ra_81004) into RentalOfficeRentalAgreementDrop
!insert (ra_81004, truck_az_24ft_90) into RentalAgreementVehicle
!insert (ra_81004, cust_co_canyon) into RentalAgreementCustomer

!insert (office_phoenix_west, ra_81005) into RentalOfficeRentalAgreementOrigin
!insert (office_honolulu_temp, ra_81005) into RentalOfficeRentalAgreementDrop
!insert (ra_81005, trailer_az_open_93) into RentalAgreementVehicle
!insert (ra_81005, cust_ind_kyle) into RentalAgreementCustomer
```
## Generation 8 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 132 | 0.00% |
| Multiplicities Errors | 0 | 24 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 2 | 7 | 28.57% |
| License Plates | 0 | 4 | 0.00% |
| Home Phones | 0 | 2 | 0.00% |

| Invalid Addresses | 
|---| 
```
3601 E 7th St, Tucson, AZ 85716
```
```
2150 S Country Club Rd, Tucson, AZ 85713
```

# Generation 9
```
!new RentalOffice('office_sanjose')
!office_sanjose.name := 'Silicon Valley Vehicle Rental - San Jose'
!office_sanjose.number := 1101
!office_sanjose.address := '1650 S 7th St, San Jose, CA 95112'

!new RentalOffice('office_jacksonville')
!office_jacksonville.name := 'River City Fleet Rentals - Jacksonville'
!office_jacksonville.number := 1102
!office_jacksonville.address := '8800 Baymeadows Rd, Jacksonville, FL 32256'

!new RentalOffice('office_hartford_returnonly')
!office_hartford_returnonly.name := 'Hartford Return-Only Depot'
!office_hartford_returnonly.number := 1103
!office_hartford_returnonly.address := '1400 Park St, Hartford, CT 06106'

!new Truck('truck_de_24ft_55')
!truck_de_24ft_55.id := 45555
!truck_de_24ft_55.registrationState := #DE
!truck_de_24ft_55.licensePlateNumber := 'DE-TRK-5520'
!truck_de_24ft_55.vehicleTypeCode := #TRUCK24
!truck_de_24ft_55.registrationLastMaintenanceDate := Date('2026-02-27')
!truck_de_24ft_55.expirationDate := Date('2027-02-28')
!truck_de_24ft_55.odometerReading := 70512
!truck_de_24ft_55.gasTankCapacity := 55.0
!truck_de_24ft_55.workingRadio := true
!truck_de_24ft_55.mileage := 8

!new Vehicle('trailer_co_open_55')
!trailer_co_open_55.id := 46655
!trailer_co_open_55.registrationState := #CO
!trailer_co_open_55.licensePlateNumber := 'CO-TRL-6605'
!trailer_co_open_55.vehicleTypeCode := #OPEN_TRAILER
!trailer_co_open_55.registrationLastMaintenanceDate := Date('2026-03-06')
!trailer_co_open_55.expirationDate := Date('2027-03-31')

!new Vehicle('trailer_fl_covered_56')
!trailer_fl_covered_56.id := 47756
!trailer_fl_covered_56.registrationState := #FL
!trailer_fl_covered_56.licensePlateNumber := 'FL-TRL-5588'
!trailer_fl_covered_56.vehicleTypeCode := #COVERED_TRAILER
!trailer_fl_covered_56.registrationLastMaintenanceDate := Date('2025-12-09')
!trailer_fl_covered_56.expirationDate := Date('2026-12-31')

!insert (office_sanjose, truck_de_24ft_55) into RentalOfficeVehicle
!insert (office_sanjose, trailer_co_open_55) into RentalOfficeVehicle
!insert (office_jacksonville, trailer_fl_covered_56) into RentalOfficeVehicle

!new Company('cust_co_northstarit')
!cust_co_northstarit.name := 'NorthStar IT Relocations'
!cust_co_northstarit.address := '99 N 1st St, San Jose, CA 95113'
!cust_co_northstarit.poorRisk := false
!cust_co_northstarit.idNumber := 31004567

!new Company('cust_co_quickship')
!cust_co_quickship.name := 'QuickShip Freight Brokers'
!cust_co_quickship.address := '10140 Philips Hwy, Jacksonville, FL 32256'
!cust_co_quickship.poorRisk := true
!cust_co_quickship.idNumber := 31007881

!new RentalAgreement('ra_90001')
!ra_90001.number := 90001
!ra_90001.rentalDate := Date('2026-09-02')
!ra_90001.anticipatedDuration := 2
!ra_90001.depositPaid := 600.00
!ra_90001.quotedDailyRate := 189.00
!ra_90001.quotedRatePerMile := 0.99

!new RentalAgreement('ra_90002')
!ra_90002.number := 90002
!ra_90002.rentalDate := Date('2026-09-06')
!ra_90002.anticipatedDuration := 9
!ra_90002.depositPaid := 0.00
!ra_90002.quotedDailyRate := 155.00
!ra_90002.quotedRatePerMile := 0.87

!new RentalAgreement('ra_90003')
!ra_90003.number := 90003
!ra_90003.rentalDate := Date('2026-09-10')
!ra_90003.anticipatedDuration := 5
!ra_90003.depositPaid := 250.00
!ra_90003.quotedDailyRate := 58.00
!ra_90003.quotedRatePerMile := 0.00

!new RentalAgreement('ra_90004')
!ra_90004.number := 90004
!ra_90004.rentalDate := Date('2026-09-12')
!ra_90004.anticipatedDuration := 1
!ra_90004.depositPaid := 50.00
!ra_90004.quotedDailyRate := 35.00
!ra_90004.quotedRatePerMile := 0.00

!insert (office_sanjose, ra_90001) into RentalOfficeRentalAgreementOrigin
!insert (office_sanjose, ra_90001) into RentalOfficeRentalAgreementDrop
!insert (ra_90001, truck_de_24ft_55) into RentalAgreementVehicle
!insert (ra_90001, cust_co_northstarit) into RentalAgreementCustomer

!insert (office_sanjose, ra_90002) into RentalOfficeRentalAgreementOrigin
!insert (office_jacksonville, ra_90002) into RentalOfficeRentalAgreementDrop
!insert (ra_90002, truck_de_24ft_55) into RentalAgreementVehicle
!insert (ra_90002, cust_co_quickship) into RentalAgreementCustomer

!insert (office_jacksonville, ra_90003) into RentalOfficeRentalAgreementOrigin
!insert (office_jacksonville, ra_90003) into RentalOfficeRentalAgreementDrop
!insert (ra_90003, trailer_fl_covered_56) into RentalAgreementVehicle
!insert (ra_90003, cust_co_quickship) into RentalAgreementCustomer

!insert (office_sanjose, ra_90004) into RentalOfficeRentalAgreementOrigin
!insert (office_hartford_returnonly, ra_90004) into RentalOfficeRentalAgreementDrop
!insert (ra_90004, trailer_co_open_55) into RentalAgreementVehicle
!insert (ra_90004, cust_co_northstarit) into RentalAgreementCustomer
```
## Generation 9 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 94 | 0.00% |
| Multiplicities Errors | 0 | 19 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 0 | 5 | 0.00% |
| License Plates | 0 | 3 | 0.00% |
| Home Phones | 0 | 0 | 0.00% |

# Generation 10
```
!new RentalOffice('office_newcastle_de')
!office_newcastle_de.name := 'Brandywine Vehicle Rental - New Castle'
!office_newcastle_de.number := 1201
!office_newcastle_de.address := '201 Basin Rd, New Castle, DE 19720'

!new RentalOffice('office_stamford_ct')
!office_stamford_ct.name := 'SoundLink Rentals - Stamford'
!office_stamford_ct.number := 1202
!office_stamford_ct.address := '350 Fairfield Ave, Stamford, CT 06902'

!new RentalOffice('office_admin_center')
!office_admin_center.name := 'National Reservations Admin Center'
!office_admin_center.number := 1203
!office_admin_center.address := '455 Mission St, San Francisco, CA 94105'

!new Truck('truck_de_17ft_01')
!truck_de_17ft_01.id := 56001
!truck_de_17ft_01.registrationState := #DE
!truck_de_17ft_01.licensePlateNumber := 'DE-TRK-9007'
!truck_de_17ft_01.vehicleTypeCode := #TRUCK
!truck_de_17ft_01.registrationLastMaintenanceDate := Date('2026-04-01')
!truck_de_17ft_01.expirationDate := Date('2027-04-30')
!truck_de_17ft_01.odometerReading := 39210
!truck_de_17ft_01.gasTankCapacity := 48.0
!truck_de_17ft_01.workingRadio := true
!truck_de_17ft_01.mileage := 12

!new Vehicle('trailer_de_covered_20')
!trailer_de_covered_20.id := 56020
!trailer_de_covered_20.registrationState := #DE
!trailer_de_covered_20.licensePlateNumber := 'DE-TRL-3002'
!trailer_de_covered_20.vehicleTypeCode := #COVERED_TRAILER
!trailer_de_covered_20.registrationLastMaintenanceDate := Date('2026-03-20')
!trailer_de_covered_20.expirationDate := Date('2027-03-31')

!new Truck('truck_ct_24ft_01')
!truck_ct_24ft_01.id := 56101
!truck_ct_24ft_01.registrationState := #CT
!truck_ct_24ft_01.licensePlateNumber := 'CT-TRK-4481'
!truck_ct_24ft_01.vehicleTypeCode := #TRUCK24
!truck_ct_24ft_01.registrationLastMaintenanceDate := Date('2026-02-09')
!truck_ct_24ft_01.expirationDate := Date('2026-10-31')
!truck_ct_24ft_01.odometerReading := 101880
!truck_ct_24ft_01.gasTankCapacity := 64.0
!truck_ct_24ft_01.workingRadio := false
!truck_ct_24ft_01.mileage := 9

!new Vehicle('trailer_ct_open_20')
!trailer_ct_open_20.id := 56120
!trailer_ct_open_20.registrationState := #CT
!trailer_ct_open_20.licensePlateNumber := 'CT-TRL-2209'
!trailer_ct_open_20.vehicleTypeCode := #OPEN_TRAILER
!trailer_ct_open_20.registrationLastMaintenanceDate := Date('2026-04-03')
!trailer_ct_open_20.expirationDate := Date('2027-04-30')

!insert (office_newcastle_de, truck_de_17ft_01) into RentalOfficeVehicle
!insert (office_newcastle_de, trailer_de_covered_20) into RentalOfficeVehicle
!insert (office_stamford_ct, truck_ct_24ft_01) into RentalOfficeVehicle
!insert (office_stamford_ct, trailer_ct_open_20) into RentalOfficeVehicle

!new Individual('cust_ind_ramon')
!cust_ind_ramon.name := 'Ramon Alvarez'
!cust_ind_ramon.address := '18 E 7th St, New Castle, DE 19720'
!cust_ind_ramon.poorRisk := true
!cust_ind_ramon.homePhone := '302-555-0180'
!cust_ind_ramon.driverLicenseState := #DE
!cust_ind_ramon.driverLicenseNumber := 31804577
!cust_ind_ramon.driverLicenseExpirationDate := Date('2026-12-20')

!new Individual('cust_ind_julie')
!cust_ind_julie.name := 'Julie Han'
!cust_ind_julie.address := '77 Morgan St, Stamford, CT 06905'
!cust_ind_julie.poorRisk := false
!cust_ind_julie.homePhone := '203-555-0114'
!cust_ind_julie.driverLicenseState := #CT
!cust_ind_julie.driverLicenseNumber := 90277413
!cust_ind_julie.driverLicenseExpirationDate := Date('2029-02-28')

!new Company('cust_co_eastcoast')
!cust_co_eastcoast.name := 'EastCoast Medical Supply Co.'
!cust_co_eastcoast.address := '500 Waterfront Dr, New Castle, DE 19720'
!cust_co_eastcoast.poorRisk := false
!cust_co_eastcoast.idNumber := 50199201

!new RentalAgreement('ra_100101')
!ra_100101.number := 100101
!ra_100101.rentalDate := Date('2026-06-14')
!ra_100101.anticipatedDuration := 1
!ra_100101.depositPaid := 200.00
!ra_100101.quotedDailyRate := 89.00
!ra_100101.quotedRatePerMile := 0.65

!new RentalAgreement('ra_100102')
!ra_100102.number := 100102
!ra_100102.rentalDate := Date('2026-07-01')
!ra_100102.anticipatedDuration := 7
!ra_100102.depositPaid := 500.00
!ra_100102.quotedDailyRate := 99.00
!ra_100102.quotedRatePerMile := 0.60

!new RentalAgreement('ra_100103')
!ra_100103.number := 100103
!ra_100103.rentalDate := Date('2026-07-10')
!ra_100103.anticipatedDuration := 30
!ra_100103.depositPaid := 0.00
!ra_100103.quotedDailyRate := 25.00
!ra_100103.quotedRatePerMile := 0.00

!new RentalAgreement('ra_100104')
!ra_100104.number := 100104
!ra_100104.rentalDate := Date('2026-07-15')
!ra_100104.anticipatedDuration := 3
!ra_100104.depositPaid := 100.00
!ra_100104.quotedDailyRate := 29.00
!ra_100104.quotedRatePerMile := 0.00

!new RentalAgreement('ra_100105')
!ra_100105.number := 100105
!ra_100105.rentalDate := Date('2026-07-20')
!ra_100105.anticipatedDuration := 2
!ra_100105.depositPaid := 800.00
!ra_100105.quotedDailyRate := 175.00
!ra_100105.quotedRatePerMile := 0.90

!insert (office_newcastle_de, ra_100101) into RentalOfficeRentalAgreementOrigin
!insert (office_newcastle_de, ra_100101) into RentalOfficeRentalAgreementDrop
!insert (ra_100101, truck_de_17ft_01) into RentalAgreementVehicle
!insert (ra_100101, cust_ind_ramon) into RentalAgreementCustomer

!insert (office_admin_center, ra_100102) into RentalOfficeRentalAgreementOrigin
!insert (office_stamford_ct, ra_100102) into RentalOfficeRentalAgreementDrop
!insert (ra_100102, truck_de_17ft_01) into RentalAgreementVehicle
!insert (ra_100102, cust_ind_ramon) into RentalAgreementCustomer

!insert (office_newcastle_de, ra_100103) into RentalOfficeRentalAgreementOrigin
!insert (office_stamford_ct, ra_100103) into RentalOfficeRentalAgreementDrop
!insert (ra_100103, trailer_de_covered_20) into RentalAgreementVehicle
!insert (ra_100103, cust_co_eastcoast) into RentalAgreementCustomer

!insert (office_stamford_ct, ra_100104) into RentalOfficeRentalAgreementOrigin
!insert (office_admin_center, ra_100104) into RentalOfficeRentalAgreementDrop
!insert (ra_100104, trailer_ct_open_20) into RentalAgreementVehicle
!insert (ra_100104, cust_ind_julie) into RentalAgreementCustomer

!insert (office_stamford_ct, ra_100105) into RentalOfficeRentalAgreementOrigin
!insert (office_stamford_ct, ra_100105) into RentalOfficeRentalAgreementDrop
!insert (ra_100105, truck_ct_24ft_01) into RentalAgreementVehicle
!insert (ra_100105, cust_co_eastcoast) into RentalAgreementCustomer
```
## Generation 10 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 128 | 0.00% |
| Multiplicities Errors | 0 | 24 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 2 | 6 | 33.33% |
| License Plates | 0 | 4 | 0.00% |
| Home Phones | 0 | 2 | 0.00% |

| Invalid Addresses | 
|---| 
```
18 E 7th St, New Castle, DE 19720
```
```
500 Waterfront Dr, New Castle, DE 19720
```

# Generation 11
```
!new RentalOffice('office_orlando_main')
!office_orlando_main.name := 'Orange County Vehicle Rental - Orlando'
!office_orlando_main.number := 1301
!office_orlando_main.address := '7350 Cargo Rd, Orlando, FL 32827'

!new RentalOffice('office_boulder')
!office_boulder.name := 'Flatirons Fleet Rentals - Boulder'
!office_boulder.number := 1302
!office_boulder.address := '5555 Arapahoe Ave, Boulder, CO 80303'

!new RentalOffice('office_hartford_ct3')
!office_hartford_ct3.name := 'Capitol Area Drop-Off Site - Hartford'
!office_hartford_ct3.number := 1303
!office_hartford_ct3.address := '25 Brainard Rd, Hartford, CT 06114'

!new Truck('truck_fl_24ft_31')
!truck_fl_24ft_31.id := 63131
!truck_fl_24ft_31.registrationState := #FL
!truck_fl_24ft_31.licensePlateNumber := 'FL-TRK-6409'
!truck_fl_24ft_31.vehicleTypeCode := #TRUCK24
!truck_fl_24ft_31.registrationLastMaintenanceDate := Date('2026-04-06')
!truck_fl_24ft_31.expirationDate := Date('2027-04-30')
!truck_fl_24ft_31.odometerReading := 58802
!truck_fl_24ft_31.gasTankCapacity := 61.0
!truck_fl_24ft_31.workingRadio := true
!truck_fl_24ft_31.mileage := 10

!new Vehicle('trailer_fl_covered_31')
!trailer_fl_covered_31.id := 64131
!trailer_fl_covered_31.registrationState := #FL
!trailer_fl_covered_31.licensePlateNumber := 'FL-TRL-2408'
!trailer_fl_covered_31.vehicleTypeCode := #COVERED_TRAILER
!trailer_fl_covered_31.registrationLastMaintenanceDate := Date('2026-03-28')
!trailer_fl_covered_31.expirationDate := Date('2027-03-31')

!new Vehicle('trailer_co_open_31')
!trailer_co_open_31.id := 65131
!trailer_co_open_31.registrationState := #CO
!trailer_co_open_31.licensePlateNumber := 'CO-TRL-9110'
!trailer_co_open_31.vehicleTypeCode := #OPEN_TRAILER
!trailer_co_open_31.registrationLastMaintenanceDate := Date('2025-12-02')
!trailer_co_open_31.expirationDate := Date('2026-12-31')

!insert (office_orlando_main, truck_fl_24ft_31) into RentalOfficeVehicle
!insert (office_orlando_main, trailer_fl_covered_31) into RentalOfficeVehicle
!insert (office_boulder, trailer_co_open_31) into RentalOfficeVehicle

!new Individual('cust_ind_tomas')
!cust_ind_tomas.name := 'Tomas Ibarra'
!cust_ind_tomas.address := '9107 Lakeside Dr, Orlando, FL 32810'
!cust_ind_tomas.poorRisk := false
!cust_ind_tomas.homePhone := '407-555-0194'
!cust_ind_tomas.driverLicenseState := #FL
!cust_ind_tomas.driverLicenseNumber := 45199210
!cust_ind_tomas.driverLicenseExpirationDate := Date('2028-01-31')

!new Individual('cust_ind_amelia')
!cust_ind_amelia.name := 'Amelia Grant'
!cust_ind_amelia.address := '3120 Walnut St, Boulder, CO 80301'
!cust_ind_amelia.poorRisk := false
!cust_ind_amelia.homePhone := '720-555-0103'
!cust_ind_amelia.driverLicenseState := #CO
!cust_ind_amelia.driverLicenseNumber := 77314009
!cust_ind_amelia.driverLicenseExpirationDate := Date('2027-10-12')

!new Company('cust_co_greenvalley')
!cust_co_greenvalley.name := 'GreenValley Office Interiors'
!cust_co_greenvalley.address := '4800 Innovation Dr, Orlando, FL 32826'
!cust_co_greenvalley.poorRisk := true
!cust_co_greenvalley.idNumber := 72004490

!new RentalAgreement('ra_120001')
!ra_120001.number := 120001
!ra_120001.rentalDate := Date('2026-10-04')
!ra_120001.anticipatedDuration := 4
!ra_120001.depositPaid := 950.00
!ra_120001.quotedDailyRate := 172.00
!ra_120001.quotedRatePerMile := 0.91

!new RentalAgreement('ra_120002')
!ra_120002.number := 120002
!ra_120002.rentalDate := Date('2026-10-08')
!ra_120002.anticipatedDuration := 2
!ra_120002.depositPaid := 0.00
!ra_120002.quotedDailyRate := 34.00
!ra_120002.quotedRatePerMile := 0.00

!new RentalAgreement('ra_120003')
!ra_120003.number := 120003
!ra_120003.rentalDate := Date('2026-10-10')
!ra_120003.anticipatedDuration := 7
!ra_120003.depositPaid := 200.00
!ra_120003.quotedDailyRate := 49.95
!ra_120003.quotedRatePerMile := 0.00

!new RentalAgreement('ra_120004')
!ra_120004.number := 120004
!ra_120004.rentalDate := Date('2026-10-20')
!ra_120004.anticipatedDuration := 1
!ra_120004.depositPaid := 300.00
!ra_120004.quotedDailyRate := 189.00
!ra_120004.quotedRatePerMile := 0.99

!insert (office_orlando_main, ra_120001) into RentalOfficeRentalAgreementOrigin
!insert (office_hartford_ct3, ra_120001) into RentalOfficeRentalAgreementDrop
!insert (ra_120001, truck_fl_24ft_31) into RentalAgreementVehicle
!insert (ra_120001, cust_co_greenvalley) into RentalAgreementCustomer

!insert (office_boulder, ra_120002) into RentalOfficeRentalAgreementOrigin
!insert (office_boulder, ra_120002) into RentalOfficeRentalAgreementDrop
!insert (ra_120002, trailer_co_open_31) into RentalAgreementVehicle
!insert (ra_120002, cust_ind_amelia) into RentalAgreementCustomer

!insert (office_orlando_main, ra_120003) into RentalOfficeRentalAgreementOrigin
!insert (office_orlando_main, ra_120003) into RentalOfficeRentalAgreementDrop
!insert (ra_120003, trailer_fl_covered_31) into RentalAgreementVehicle
!insert (ra_120003, cust_ind_tomas) into RentalAgreementCustomer

!insert (office_hartford_ct3, ra_120004) into RentalOfficeRentalAgreementOrigin
!insert (office_orlando_main, ra_120004) into RentalOfficeRentalAgreementDrop
!insert (ra_120004, truck_fl_24ft_31) into RentalAgreementVehicle
!insert (ra_120004, cust_ind_amelia) into RentalAgreementCustomer
```
## Generation 11 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 105 | 0.00% |
| Multiplicities Errors | 0 | 19 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 3 | 6 | 50.00% |
| License Plates | 0 | 3 | 0.00% |
| Home Phones | 0 | 2 | 0.00% |

| Invalid Addresses | 
|---| 
```
7350 Cargo Rd, Orlando, FL 32827
```
```
9107 Lakeside Dr, Orlando, FL 32810
```
```
4800 Innovation Dr, Orlando, FL 32826
```

# Generation 12
```
!new RentalOffice('office_colorado_springs')
!office_colorado_springs.name := 'Pikes Peak Truck & Trailer Rental - Colorado Springs'
!office_colorado_springs.number := 1401
!office_colorado_springs.address := '3650 S Academy Blvd, Colorado Springs, CO 80916'

!new RentalOffice('office_tampa')
!office_tampa.name := 'Bay Area Vehicle Rental - Tampa'
!office_tampa.number := 1402
!office_tampa.address := '5402 W Cypress St, Tampa, FL 33607'

!new RentalOffice('office_newlondon')
!office_newlondon.name := 'Thames River Rentals - New London'
!office_newlondon.number := 1403
!office_newlondon.address := '165 State St, New London, CT 06320'

!new RentalOffice('office_dover')
!office_dover.name := 'Delmarva Fleet Rental - Dover'
!office_dover.number := 1404
!office_dover.address := '125 S State St, Dover, DE 19901'

!new Truck('truck_co_24ft_77')
!truck_co_24ft_77.id := 77077
!truck_co_24ft_77.registrationState := #CO
!truck_co_24ft_77.licensePlateNumber := 'CO-TRK-7707'
!truck_co_24ft_77.vehicleTypeCode := #TRUCK24
!truck_co_24ft_77.registrationLastMaintenanceDate := Date('2026-05-12')
!truck_co_24ft_77.expirationDate := Date('2027-05-31')
!truck_co_24ft_77.odometerReading := 73440
!truck_co_24ft_77.gasTankCapacity := 62.0
!truck_co_24ft_77.workingRadio := true
!truck_co_24ft_77.mileage := 9

!new Truck('truck_co_10ft_78')
!truck_co_10ft_78.id := 77078
!truck_co_10ft_78.registrationState := #CO
!truck_co_10ft_78.licensePlateNumber := 'CO-TRK-7708'
!truck_co_10ft_78.vehicleTypeCode := #TRUCK10
!truck_co_10ft_78.registrationLastMaintenanceDate := Date('2026-06-01')
!truck_co_10ft_78.expirationDate := Date('2027-06-30')
!truck_co_10ft_78.odometerReading := 19860
!truck_co_10ft_78.gasTankCapacity := 34.0
!truck_co_10ft_78.workingRadio := false
!truck_co_10ft_78.mileage := 16

!new Vehicle('trailer_de_covered_77')
!trailer_de_covered_77.id := 88077
!trailer_de_covered_77.registrationState := #DE
!trailer_de_covered_77.licensePlateNumber := 'DE-TRL-7771'
!trailer_de_covered_77.vehicleTypeCode := #COVERED_TRAILER
!trailer_de_covered_77.registrationLastMaintenanceDate := Date('2026-04-18')
!trailer_de_covered_77.expirationDate := Date('2027-04-30')

!new Vehicle('trailer_de_open_78')
!trailer_de_open_78.id := 88078
!trailer_de_open_78.registrationState := #DE
!trailer_de_open_78.licensePlateNumber := 'DE-TRL-7772'
!trailer_de_open_78.vehicleTypeCode := #OPEN_TRAILER
!trailer_de_open_78.registrationLastMaintenanceDate := Date('2025-12-21')
!trailer_de_open_78.expirationDate := Date('2026-12-31')

!insert (office_colorado_springs, truck_co_24ft_77) into RentalOfficeVehicle
!insert (office_colorado_springs, truck_co_10ft_78) into RentalOfficeVehicle
!insert (office_dover, trailer_de_covered_77) into RentalOfficeVehicle
!insert (office_dover, trailer_de_open_78) into RentalOfficeVehicle

!new Company('cust_co_peaklogistics')
!cust_co_peaklogistics.name := 'Peak Logistics Partners'
!cust_co_peaklogistics.address := '2400 Waynoka Rd, Colorado Springs, CO 80915'
!cust_co_peaklogistics.poorRisk := false
!cust_co_peaklogistics.idNumber := 84012055

!new Individual('cust_ind_brooke')
!cust_ind_brooke.name := 'Brooke Ellison'
!cust_ind_brooke.address := '401 S Howard Ave, Tampa, FL 33606'
!cust_ind_brooke.poorRisk := false
!cust_ind_brooke.homePhone := '813-555-0151'
!cust_ind_brooke.driverLicenseState := #FL
!cust_ind_brooke.driverLicenseNumber := 31077429
!cust_ind_brooke.driverLicenseExpirationDate := Date('2028-03-18')

!new Individual('cust_ind_hassan')
!cust_ind_hassan.name := 'Hassan Khalid'
!cust_ind_hassan.address := '22 Broad St, New London, CT 06320'
!cust_ind_hassan.poorRisk := true
!cust_ind_hassan.homePhone := '860-555-0199'
!cust_ind_hassan.driverLicenseState := #CT
!cust_ind_hassan.driverLicenseNumber := 44098211
!cust_ind_hassan.driverLicenseExpirationDate := Date('2026-09-30')

!new RentalAgreement('ra_130001')
!ra_130001.number := 130001
!ra_130001.rentalDate := Date('2026-11-02')
!ra_130001.anticipatedDuration := 3
!ra_130001.depositPaid := 500.00
!ra_130001.quotedDailyRate := 169.00
!ra_130001.quotedRatePerMile := 0.89

!new RentalAgreement('ra_130002')
!ra_130002.number := 130002
!ra_130002.rentalDate := Date('2026-11-06')
!ra_130002.anticipatedDuration := 1
!ra_130002.depositPaid := 0.00
!ra_130002.quotedDailyRate := 42.00
!ra_130002.quotedRatePerMile := 0.00

!new RentalAgreement('ra_130003')
!ra_130003.number := 130003
!ra_130003.rentalDate := Date('2026-11-08')
!ra_130003.anticipatedDuration := 10
!ra_130003.depositPaid := 1200.00
!ra_130003.quotedDailyRate := 155.00
!ra_130003.quotedRatePerMile := 0.80

!new RentalAgreement('ra_130004')
!ra_130004.number := 130004
!ra_130004.rentalDate := Date('2026-11-20')
!ra_130004.anticipatedDuration := 4
!ra_130004.depositPaid := 250.00
!ra_130004.quotedDailyRate := 35.00
!ra_130004.quotedRatePerMile := 0.00

!new RentalAgreement('ra_130005')
!ra_130005.number := 130005
!ra_130005.rentalDate := Date('2026-12-01')
!ra_130005.anticipatedDuration := 2
!ra_130005.depositPaid := 150.00
!ra_130005.quotedDailyRate := 29.95
!ra_130005.quotedRatePerMile := 0.00

!new RentalAgreement('ra_130006')
!ra_130006.number := 130006
!ra_130006.rentalDate := Date('2026-12-03')
!ra_130006.anticipatedDuration := 6
!ra_130006.depositPaid := 0.00
!ra_130006.quotedDailyRate := 59.00
!ra_130006.quotedRatePerMile := 0.00

!insert (office_tampa, ra_130001) into RentalOfficeRentalAgreementOrigin
!insert (office_colorado_springs, ra_130001) into RentalOfficeRentalAgreementDrop
!insert (ra_130001, truck_co_24ft_77) into RentalAgreementVehicle
!insert (ra_130001, cust_ind_brooke) into RentalAgreementCustomer

!insert (office_colorado_springs, ra_130002) into RentalOfficeRentalAgreementOrigin
!insert (office_colorado_springs, ra_130002) into RentalOfficeRentalAgreementDrop
!insert (ra_130002, truck_co_24ft_77) into RentalAgreementVehicle
!insert (ra_130002, cust_co_peaklogistics) into RentalAgreementCustomer

!insert (office_colorado_springs, ra_130003) into RentalOfficeRentalAgreementOrigin
!insert (office_tampa, ra_130003) into RentalOfficeRentalAgreementDrop
!insert (ra_130003, truck_co_24ft_77) into RentalAgreementVehicle
!insert (ra_130003, cust_co_peaklogistics) into RentalAgreementCustomer

!insert (office_newlondon, ra_130004) into RentalOfficeRentalAgreementOrigin
!insert (office_dover, ra_130004) into RentalOfficeRentalAgreementDrop
!insert (ra_130004, trailer_de_covered_77) into RentalAgreementVehicle
!insert (ra_130004, cust_ind_hassan) into RentalAgreementCustomer

!insert (office_dover, ra_130005) into RentalOfficeRentalAgreementOrigin
!insert (office_newlondon, ra_130005) into RentalOfficeRentalAgreementDrop
!insert (ra_130005, trailer_de_open_78) into RentalAgreementVehicle
!insert (ra_130005, cust_ind_hassan) into RentalAgreementCustomer

!insert (office_tampa, ra_130006) into RentalOfficeRentalAgreementOrigin
!insert (office_tampa, ra_130006) into RentalOfficeRentalAgreementDrop
!insert (ra_130006, truck_co_10ft_78) into RentalAgreementVehicle
!insert (ra_130006, cust_ind_brooke) into RentalAgreementCustomer
```
## Generation 12 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 143 | 0.00% |
| Multiplicities Errors | 0 | 28 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 0 | 7 | 0.00% |
| License Plates | 0 | 4 | 0.00% |
| Home Phones | 0 | 2 | 0.00% |

# Generation 13
```
!new RentalOffice('office_fairbanks_main')
!office_fairbanks_main.name := 'Interior Fleet Rentals - Fairbanks'
!office_fairbanks_main.number := 1501
!office_fairbanks_main.address := '6450 Airport Way, Fairbanks, AK 99709'

!new RentalOffice('office_tucson_east')
!office_tucson_east.name := 'Sonoran Vehicle Rental - Tucson East'
!office_tucson_east.number := 1502
!office_tucson_east.address := '7401 E 22nd St, Tucson, AZ 85710'

!new RentalOffice('office_newark_depot3')
!office_newark_depot3.name := 'Christiana Fleet Depot - Newark'
!office_newark_depot3.number := 1503
!office_newark_depot3.address := '900 Churchmans Rd, Newark, DE 19713'

!new RentalOffice('office_national_reservations2')
!office_national_reservations2.name := 'National Reservations Center - West'
!office_national_reservations2.number := 1504
!office_national_reservations2.address := '1 Market St, San Francisco, CA 94105'

!new Truck('truck_ak_24ft_501')
!truck_ak_24ft_501.id := 35001
!truck_ak_24ft_501.registrationState := #AK
!truck_ak_24ft_501.licensePlateNumber := 'AK-TRK-3501'
!truck_ak_24ft_501.vehicleTypeCode := #TRUCK24
!truck_ak_24ft_501.registrationLastMaintenanceDate := Date('2026-05-21')
!truck_ak_24ft_501.expirationDate := Date('2027-05-31')
!truck_ak_24ft_501.odometerReading := 46218
!truck_ak_24ft_501.gasTankCapacity := 64.0
!truck_ak_24ft_501.workingRadio := true
!truck_ak_24ft_501.mileage := 9

!new Truck('truck_de_10ft_502')
!truck_de_10ft_502.id := 35002
!truck_de_10ft_502.registrationState := #DE
!truck_de_10ft_502.licensePlateNumber := 'DE-TRK-3502'
!truck_de_10ft_502.vehicleTypeCode := #TRUCK10
!truck_de_10ft_502.registrationLastMaintenanceDate := Date('2026-04-30')
!truck_de_10ft_502.expirationDate := Date('2027-04-30')
!truck_de_10ft_502.odometerReading := 11040
!truck_de_10ft_502.gasTankCapacity := 0.0
!truck_de_10ft_502.workingRadio := false
!truck_de_10ft_502.mileage := 0

!new Vehicle('trailer_az_covered_503')
!trailer_az_covered_503.id := 36003
!trailer_az_covered_503.registrationState := #AZ
!trailer_az_covered_503.licensePlateNumber := 'AZ-TRL-8820'
!trailer_az_covered_503.vehicleTypeCode := #COVERED_TRAILER
!trailer_az_covered_503.registrationLastMaintenanceDate := Date('2026-02-16')
!trailer_az_covered_503.expirationDate := Date('2027-02-28')

!new Vehicle('trailer_ak_open_504')
!trailer_ak_open_504.id := 36004
!trailer_ak_open_504.registrationState := #AK
!trailer_ak_open_504.licensePlateNumber := 'AK-TRL-1140'
!trailer_ak_open_504.vehicleTypeCode := #OPEN_TRAILER
!trailer_ak_open_504.registrationLastMaintenanceDate := Date('2026-01-09')
!trailer_ak_open_504.expirationDate := Date('2026-12-31')

!insert (office_fairbanks_main, truck_ak_24ft_501) into RentalOfficeVehicle
!insert (office_newark_depot3, truck_de_10ft_502) into RentalOfficeVehicle
!insert (office_tucson_east, trailer_az_covered_503) into RentalOfficeVehicle
!insert (office_fairbanks_main, trailer_ak_open_504) into RentalOfficeVehicle

!new Individual('cust_ind_lena')
!cust_ind_lena.name := 'Lena Whitaker'
!cust_ind_lena.address := '904 College Rd, Fairbanks, AK 99709'
!cust_ind_lena.poorRisk := false
!cust_ind_lena.homePhone := '907-555-0112'
!cust_ind_lena.driverLicenseState := #AK
!cust_ind_lena.driverLicenseNumber := 40011229
!cust_ind_lena.driverLicenseExpirationDate := Date('2028-10-31')

!new Individual('cust_ind_george')
!cust_ind_george.name := 'George Simmons'
!cust_ind_george.address := '12 W Main St, Newark, DE 19711'
!cust_ind_george.poorRisk := true
!cust_ind_george.homePhone := '302-555-0177'
!cust_ind_george.driverLicenseState := #DE
!cust_ind_george.driverLicenseNumber := 77890114
!cust_ind_george.driverLicenseExpirationDate := Date('2026-08-20')

!new Company('cust_co_northbridge')
!cust_co_northbridge.name := 'NorthBridge Retail Fixtures'
!cust_co_northbridge.address := '3100 E Valencia Rd, Tucson, AZ 85706'
!cust_co_northbridge.poorRisk := false
!cust_co_northbridge.idNumber := 60177009

!new RentalAgreement('ra_14001')
!ra_14001.number := 14001
!ra_14001.rentalDate := Date('2026-12-05')
!ra_14001.anticipatedDuration := 12
!ra_14001.depositPaid := 1000.00
!ra_14001.quotedDailyRate := 158.00
!ra_14001.quotedRatePerMile := 0.84

!new RentalAgreement('ra_14002')
!ra_14002.number := 14002
!ra_14002.rentalDate := Date('2026-12-08')
!ra_14002.anticipatedDuration := 3
!ra_14002.depositPaid := 0.00
!ra_14002.quotedDailyRate := 27.50
!ra_14002.quotedRatePerMile := 0.00

!new RentalAgreement('ra_14003')
!ra_14003.number := 14003
!ra_14003.rentalDate := Date('2026-12-10')
!ra_14003.anticipatedDuration := 1
!ra_14003.depositPaid := 200.00
!ra_14003.quotedDailyRate := 69.00
!ra_14003.quotedRatePerMile := 0.79

!new RentalAgreement('ra_14004')
!ra_14004.number := 14004
!ra_14004.rentalDate := Date('2026-12-15')
!ra_14004.anticipatedDuration := 20
!ra_14004.depositPaid := 0.00
!ra_14004.quotedDailyRate := 58.00
!ra_14004.quotedRatePerMile := 0.00

!new RentalAgreement('ra_14005')
!ra_14005.number := 14005
!ra_14005.rentalDate := Date('2026-12-18')
!ra_14005.anticipatedDuration := 2
!ra_14005.depositPaid := 150.00
!ra_14005.quotedDailyRate := 75.00
!ra_14005.quotedRatePerMile := 0.65

!new RentalAgreement('ra_14006')
!ra_14006.number := 14006
!ra_14006.rentalDate := Date('2026-12-20')
!ra_14006.anticipatedDuration := 5
!ra_14006.depositPaid := 500.00
!ra_14006.quotedDailyRate := 140.00
!ra_14006.quotedRatePerMile := 0.80

!insert (office_national_reservations2, ra_14001) into RentalOfficeRentalAgreementOrigin
!insert (office_fairbanks_main, ra_14001) into RentalOfficeRentalAgreementDrop
!insert (ra_14001, truck_ak_24ft_501) into RentalAgreementVehicle
!insert (ra_14001, cust_co_northbridge) into RentalAgreementCustomer

!insert (office_fairbanks_main, ra_14002) into RentalOfficeRentalAgreementOrigin
!insert (office_tucson_east, ra_14002) into RentalOfficeRentalAgreementDrop
!insert (ra_14002, trailer_ak_open_504) into RentalAgreementVehicle
!insert (ra_14002, cust_ind_lena) into RentalAgreementCustomer

!insert (office_newark_depot3, ra_14003) into RentalOfficeRentalAgreementOrigin
!insert (office_newark_depot3, ra_14003) into RentalOfficeRentalAgreementDrop
!insert (ra_14003, truck_de_10ft_502) into RentalAgreementVehicle
!insert (ra_14003, cust_ind_george) into RentalAgreementCustomer

!insert (office_tucson_east, ra_14004) into RentalOfficeRentalAgreementOrigin
!insert (office_newark_depot3, ra_14004) into RentalOfficeRentalAgreementDrop
!insert (ra_14004, trailer_az_covered_503) into RentalAgreementVehicle
!insert (ra_14004, cust_co_northbridge) into RentalAgreementCustomer

!insert (office_national_reservations2, ra_14005) into RentalOfficeRentalAgreementOrigin
!insert (office_national_reservations2, ra_14005) into RentalOfficeRentalAgreementDrop
!insert (ra_14005, truck_de_10ft_502) into RentalAgreementVehicle
!insert (ra_14005, cust_ind_lena) into RentalAgreementCustomer

!insert (office_fairbanks_main, ra_14006) into RentalOfficeRentalAgreementOrigin
!insert (office_fairbanks_main, ra_14006) into RentalOfficeRentalAgreementDrop
!insert (ra_14006, truck_ak_24ft_501) into RentalAgreementVehicle
!insert (ra_14006, cust_ind_george) into RentalAgreementCustomer
```
## Generation 13 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 143 | 0.00% |
| Multiplicities Errors | 0 | 28 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 0 | 7 | 0.00% |
| License Plates | 0 | 4 | 0.00% |
| Home Phones | 0 | 2 | 0.00% |

# Generation 14
```
!new RentalOffice('office_callcenter_east')
!office_callcenter_east.name := 'National Reservations Call Center - East'
!office_callcenter_east.number := 2001
!office_callcenter_east.address := '1000 Market St, Wilmington, DE 19801'

!new RentalOffice('office_newark_de4')
!office_newark_de4.name := 'Christiana Trailer Depot - Newark'
!office_newark_de4.number := 2002
!office_newark_de4.address := '35 S College Ave, Newark, DE 19713'

!new RentalOffice('office_hartford_ct4')
!office_hartford_ct4.name := 'Capitol Trailer Lot - Hartford'
!office_hartford_ct4.number := 2003
!office_hartford_ct4.address := '180 Weston St, Hartford, CT 06120'

!new RentalOffice('office_montgomery_al')
!office_montgomery_al.name := 'River Region Rentals - Montgomery'
!office_montgomery_al.number := 2004
!office_montgomery_al.address := '2750 Eastern Blvd, Montgomery, AL 36117'

!new Vehicle('trailer_de_open_a1')
!trailer_de_open_a1.id := 50101
!trailer_de_open_a1.registrationState := #DE
!trailer_de_open_a1.licensePlateNumber := 'DE-TRL-4107'
!trailer_de_open_a1.vehicleTypeCode := #OPEN_TRAILER
!trailer_de_open_a1.registrationLastMaintenanceDate := Date('2026-04-15')
!trailer_de_open_a1.expirationDate := Date('2027-04-30')

!new Vehicle('trailer_de_covered_a2')
!trailer_de_covered_a2.id := 50102
!trailer_de_covered_a2.registrationState := #DE
!trailer_de_covered_a2.licensePlateNumber := 'DE-TRL-4112'
!trailer_de_covered_a2.vehicleTypeCode := #COVERED_TRAILER
!trailer_de_covered_a2.registrationLastMaintenanceDate := Date('2026-02-28')
!trailer_de_covered_a2.expirationDate := Date('2027-02-28')

!new Vehicle('trailer_ct_open_b1')
!trailer_ct_open_b1.id := 50103
!trailer_ct_open_b1.registrationState := #CT
!trailer_ct_open_b1.licensePlateNumber := 'CT-TRL-8803'
!trailer_ct_open_b1.vehicleTypeCode := #OPEN_TRAILER
!trailer_ct_open_b1.registrationLastMaintenanceDate := Date('2026-05-02')
!trailer_ct_open_b1.expirationDate := Date('2027-05-31')

!new Vehicle('trailer_al_covered_c1')
!trailer_al_covered_c1.id := 50104
!trailer_al_covered_c1.registrationState := #AL
!trailer_al_covered_c1.licensePlateNumber := 'AL-TRL-2204'
!trailer_al_covered_c1.vehicleTypeCode := #COVERED_TRAILER
!trailer_al_covered_c1.registrationLastMaintenanceDate := Date('2026-03-10')
!trailer_al_covered_c1.expirationDate := Date('2027-03-31')

!insert (office_newark_de4, trailer_de_open_a1) into RentalOfficeVehicle
!insert (office_newark_de4, trailer_de_covered_a2) into RentalOfficeVehicle
!insert (office_hartford_ct4, trailer_ct_open_b1) into RentalOfficeVehicle
!insert (office_montgomery_al, trailer_al_covered_c1) into RentalOfficeVehicle

!new Company('cust_co_artisanhomes')
!cust_co_artisanhomes.name := 'Artisan Homes & Renovation'
!cust_co_artisanhomes.address := '4100 Kirkwood Hwy, Wilmington, DE 19808'
!cust_co_artisanhomes.poorRisk := false
!cust_co_artisanhomes.idNumber := 81204519

!new Individual('cust_ind_zoe')
!cust_ind_zoe.name := 'Zoe Franklin'
!cust_ind_zoe.address := '9 Park Ter, Hartford, CT 06106'
!cust_ind_zoe.poorRisk := false
!cust_ind_zoe.homePhone := '860-555-0142'
!cust_ind_zoe.driverLicenseState := #CT
!cust_ind_zoe.driverLicenseNumber := 60319941
!cust_ind_zoe.driverLicenseExpirationDate := Date('2028-06-30')

!new Individual('cust_ind_derek')
!cust_ind_derek.name := 'Derek Wallace'
!cust_ind_derek.address := '1205 Carmichael Rd, Montgomery, AL 36106'
!cust_ind_derek.poorRisk := true
!cust_ind_derek.homePhone := '334-555-0186'
!cust_ind_derek.driverLicenseState := #AL
!cust_ind_derek.driverLicenseNumber := 77104502
!cust_ind_derek.driverLicenseExpirationDate := Date('2026-11-05')

!new RentalAgreement('ra_200001')
!ra_200001.number := 200001
!ra_200001.rentalDate := Date('2026-01-05')
!ra_200001.anticipatedDuration := 14
!ra_200001.depositPaid := 0.00
!ra_200001.quotedDailyRate := 28.00
!ra_200001.quotedRatePerMile := 0.00

!new RentalAgreement('ra_200002')
!ra_200002.number := 200002
!ra_200002.rentalDate := Date('2026-01-07')
!ra_200002.anticipatedDuration := 3
!ra_200002.depositPaid := 75.00
!ra_200002.quotedDailyRate := 34.50
!ra_200002.quotedRatePerMile := 0.00

!new RentalAgreement('ra_200003')
!ra_200003.number := 200003
!ra_200003.rentalDate := Date('2026-01-12')
!ra_200003.anticipatedDuration := 5
!ra_200003.depositPaid := 150.00
!ra_200003.quotedDailyRate := 39.00
!ra_200003.quotedRatePerMile := 0.00

!new RentalAgreement('ra_200004')
!ra_200004.number := 200004
!ra_200004.rentalDate := Date('2026-02-01')
!ra_200004.anticipatedDuration := 21
!ra_200004.depositPaid := 300.00
!ra_200004.quotedDailyRate := 25.00
!ra_200004.quotedRatePerMile := 0.00

!new RentalAgreement('ra_200005')
!ra_200005.number := 200005
!ra_200005.rentalDate := Date('2026-02-18')
!ra_200005.anticipatedDuration := 2
!ra_200005.depositPaid := 100.00
!ra_200005.quotedDailyRate := 45.00
!ra_200005.quotedRatePerMile := 0.00

!new RentalAgreement('ra_200006')
!ra_200006.number := 200006
!ra_200006.rentalDate := Date('2026-03-03')
!ra_200006.anticipatedDuration := 8
!ra_200006.depositPaid := 200.00
!ra_200006.quotedDailyRate := 29.50
!ra_200006.quotedRatePerMile := 0.00

!insert (office_callcenter_east, ra_200001) into RentalOfficeRentalAgreementOrigin
!insert (office_newark_de4, ra_200001) into RentalOfficeRentalAgreementDrop
!insert (ra_200001, trailer_de_open_a1) into RentalAgreementVehicle
!insert (ra_200001, cust_co_artisanhomes) into RentalAgreementCustomer

!insert (office_newark_de4, ra_200002) into RentalOfficeRentalAgreementOrigin
!insert (office_newark_de4, ra_200002) into RentalOfficeRentalAgreementDrop
!insert (ra_200002, trailer_de_open_a1) into RentalAgreementVehicle
!insert (ra_200002, cust_ind_zoe) into RentalAgreementCustomer

!insert (office_callcenter_east, ra_200003) into RentalOfficeRentalAgreementOrigin
!insert (office_hartford_ct4, ra_200003) into RentalOfficeRentalAgreementDrop
!insert (ra_200003, trailer_ct_open_b1) into RentalAgreementVehicle
!insert (ra_200003, cust_ind_zoe) into RentalAgreementCustomer

!insert (office_callcenter_east, ra_200004) into RentalOfficeRentalAgreementOrigin
!insert (office_montgomery_al, ra_200004) into RentalOfficeRentalAgreementDrop
!insert (ra_200004, trailer_al_covered_c1) into RentalAgreementVehicle
!insert (ra_200004, cust_ind_derek) into RentalAgreementCustomer

!insert (office_montgomery_al, ra_200005) into RentalOfficeRentalAgreementOrigin
!insert (office_newark_de4, ra_200005) into RentalOfficeRentalAgreementDrop
!insert (ra_200005, trailer_de_covered_a2) into RentalAgreementVehicle
!insert (ra_200005, cust_co_artisanhomes) into RentalAgreementCustomer

!insert (office_hartford_ct4, ra_200006) into RentalOfficeRentalAgreementOrigin
!insert (office_hartford_ct4, ra_200006) into RentalOfficeRentalAgreementDrop
!insert (ra_200006, trailer_ct_open_b1) into RentalAgreementVehicle
!insert (ra_200006, cust_co_artisanhomes) into RentalAgreementCustomer
```
## Generation 14 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 135 | 0.00% |
| Multiplicities Errors | 0 | 28 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 1 | 7 | 14.29% |
| License Plates | 0 | 4 | 0.00% |
| Home Phones | 0 | 2 | 0.00% |

| Invalid Addresses | 
|---| 
```
1205 Carmichael Rd, Montgomery, AL 36106
```

# Generation 15
```
!new RentalOffice('office_pensacola')
!office_pensacola.name := 'Panhandle Vehicle Rental - Pensacola'
!office_pensacola.number := 2101
!office_pensacola.address := '4200 N Davis Hwy, Pensacola, FL 32503'

!new RentalOffice('office_tucson_north2')
!office_tucson_north2.name := 'Tucson North Truck & Trailer Rental'
!office_tucson_north2.number := 2102
!office_tucson_north2.address := '4700 N Flowing Wells Rd, Tucson, AZ 85705'

!new RentalOffice('office_newcastle_drop4')
!office_newcastle_drop4.name := 'New Castle Drop Yard - After Hours'
!office_newcastle_drop4.number := 2103
!office_newcastle_drop4.address := '305 Terminal Ave, New Castle, DE 19720'

!new RentalOffice('office_reservations_mid')
!office_reservations_mid.name := 'Central Reservations Office'
!office_reservations_mid.number := 2104
!office_reservations_mid.address := '1600 Broadway, Denver, CO 80202'

!new Truck('truck_fl_24ft_210')
!truck_fl_24ft_210.id := 92110
!truck_fl_24ft_210.registrationState := #FL
!truck_fl_24ft_210.licensePlateNumber := 'FL-TRK-92110'
!truck_fl_24ft_210.vehicleTypeCode := #TRUCK24
!truck_fl_24ft_210.registrationLastMaintenanceDate := Date('2026-01-18')
!truck_fl_24ft_210.expirationDate := Date('2027-01-31')
!truck_fl_24ft_210.odometerReading := 41890
!truck_fl_24ft_210.gasTankCapacity := 63.0
!truck_fl_24ft_210.workingRadio := true
!truck_fl_24ft_210.mileage := 10

!new Truck('truck_az_10ft_211')
!truck_az_10ft_211.id := 92111
!truck_az_10ft_211.registrationState := #AZ
!truck_az_10ft_211.licensePlateNumber := 'AZ-TRK-92111'
!truck_az_10ft_211.vehicleTypeCode := #TRUCK10
!truck_az_10ft_211.registrationLastMaintenanceDate := Date('2026-02-22')
!truck_az_10ft_211.expirationDate := Date('2026-11-30')
!truck_az_10ft_211.odometerReading := 16505
!truck_az_10ft_211.gasTankCapacity := 32.5
!truck_az_10ft_211.workingRadio := false
!truck_az_10ft_211.mileage := 16

!new Vehicle('trailer_de_covered_212')
!trailer_de_covered_212.id := 93112
!trailer_de_covered_212.registrationState := #DE
!trailer_de_covered_212.licensePlateNumber := 'DE-TRL-93112'
!trailer_de_covered_212.vehicleTypeCode := #COVERED_TRAILER
!trailer_de_covered_212.registrationLastMaintenanceDate := Date('2025-12-05')
!trailer_de_covered_212.expirationDate := Date('2026-12-31')

!new Vehicle('trailer_fl_open_213')
!trailer_fl_open_213.id := 93113
!trailer_fl_open_213.registrationState := #FL
!trailer_fl_open_213.licensePlateNumber := 'FL-TRL-93113'
!trailer_fl_open_213.vehicleTypeCode := #OPEN_TRAILER
!trailer_fl_open_213.registrationLastMaintenanceDate := Date('2026-03-01')
!trailer_fl_open_213.expirationDate := Date('2027-02-28')

!insert (office_pensacola, truck_fl_24ft_210) into RentalOfficeVehicle
!insert (office_tucson_north2, truck_az_10ft_211) into RentalOfficeVehicle
!insert (office_newcastle_drop4, trailer_de_covered_212) into RentalOfficeVehicle
!insert (office_pensacola, trailer_fl_open_213) into RentalOfficeVehicle

!new Company('cust_co_skyline')
!cust_co_skyline.name := 'Skyline Stage & Lighting, Inc.'
!cust_co_skyline.address := '1550 Industrial Dr, Pensacola, FL 32505'
!cust_co_skyline.poorRisk := false
!cust_co_skyline.idNumber := 61022018

!new Individual('cust_ind_kevin')
!cust_ind_kevin.name := 'Kevin OBrien'
!cust_ind_kevin.address := '922 W Congress St, Tucson, AZ 85745'
!cust_ind_kevin.poorRisk := false
!cust_ind_kevin.homePhone := '520-555-0122'
!cust_ind_kevin.driverLicenseState := #AZ
!cust_ind_kevin.driverLicenseNumber := 88014420
!cust_ind_kevin.driverLicenseExpirationDate := Date('2029-05-10')

!new Individual('cust_ind_melissa')
!cust_ind_melissa.name := 'Melissa Hart'
!cust_ind_melissa.address := '18 Battery Park, New Castle, DE 19720'
!cust_ind_melissa.poorRisk := true
!cust_ind_melissa.homePhone := '302-555-0155'
!cust_ind_melissa.driverLicenseState := #DE
!cust_ind_melissa.driverLicenseNumber := 34099127
!cust_ind_melissa.driverLicenseExpirationDate := Date('2026-05-30')

!new RentalAgreement('ra_210001')
!ra_210001.number := 210001
!ra_210001.rentalDate := Date('2026-02-03')
!ra_210001.anticipatedDuration := 60
!ra_210001.depositPaid := 0.00
!ra_210001.quotedDailyRate := 79.00
!ra_210001.quotedRatePerMile := 0.00

!new RentalAgreement('ra_210002')
!ra_210002.number := 210002
!ra_210002.rentalDate := Date('2026-02-06')
!ra_210002.anticipatedDuration := 2
!ra_210002.depositPaid := 700.00
!ra_210002.quotedDailyRate := 189.00
!ra_210002.quotedRatePerMile := 0.98

!new RentalAgreement('ra_210003')
!ra_210003.number := 210003
!ra_210003.rentalDate := Date('2026-02-10')
!ra_210003.anticipatedDuration := 1
!ra_210003.depositPaid := 50.00
!ra_210003.quotedDailyRate := 39.00
!ra_210003.quotedRatePerMile := 0.00

!new RentalAgreement('ra_210004')
!ra_210004.number := 210004
!ra_210004.rentalDate := Date('2026-02-15')
!ra_210004.anticipatedDuration := 9
!ra_210004.depositPaid := 400.00
!ra_210004.quotedDailyRate := 119.00
!ra_210004.quotedRatePerMile := 0.75

!new RentalAgreement('ra_210005')
!ra_210005.number := 210005
!ra_210005.rentalDate := Date('2026-03-01')
!ra_210005.anticipatedDuration := 3
!ra_210005.depositPaid := 0.00
!ra_210005.quotedDailyRate := 29.50
!ra_210005.quotedRatePerMile := 0.00

!new RentalAgreement('ra_210006')
!ra_210006.number := 210006
!ra_210006.rentalDate := Date('2026-03-04')
!ra_210006.anticipatedDuration := 5
!ra_210006.depositPaid := 300.00
!ra_210006.quotedDailyRate := 35.00
!ra_210006.quotedRatePerMile := 0.00

!insert (office_reservations_mid, ra_210001) into RentalOfficeRentalAgreementOrigin
!insert (office_newcastle_drop4, ra_210001) into RentalOfficeRentalAgreementDrop
!insert (ra_210001, trailer_de_covered_212) into RentalAgreementVehicle
!insert (ra_210001, cust_co_skyline) into RentalAgreementCustomer

!insert (office_pensacola, ra_210002) into RentalOfficeRentalAgreementOrigin
!insert (office_pensacola, ra_210002) into RentalOfficeRentalAgreementDrop
!insert (ra_210002, truck_fl_24ft_210) into RentalAgreementVehicle
!insert (ra_210002, cust_co_skyline) into RentalAgreementCustomer

!insert (office_pensacola, ra_210003) into RentalOfficeRentalAgreementOrigin
!insert (office_tucson_north2, ra_210003) into RentalOfficeRentalAgreementDrop
!insert (ra_210003, trailer_fl_open_213) into RentalAgreementVehicle
!insert (ra_210003, cust_ind_kevin) into RentalAgreementCustomer

!insert (office_tucson_north2, ra_210004) into RentalOfficeRentalAgreementOrigin
!insert (office_newcastle_drop4, ra_210004) into RentalOfficeRentalAgreementDrop
!insert (ra_210004, truck_az_10ft_211) into RentalAgreementVehicle
!insert (ra_210004, cust_ind_kevin) into RentalAgreementCustomer

!insert (office_newcastle_drop4, ra_210005) into RentalOfficeRentalAgreementOrigin
!insert (office_newcastle_drop4, ra_210005) into RentalOfficeRentalAgreementDrop
!insert (ra_210005, trailer_de_covered_212) into RentalAgreementVehicle
!insert (ra_210005, cust_ind_melissa) into RentalAgreementCustomer

!insert (office_reservations_mid, ra_210006) into RentalOfficeRentalAgreementOrigin
!insert (office_pensacola, ra_210006) into RentalOfficeRentalAgreementDrop
!insert (ra_210006, trailer_fl_open_213) into RentalAgreementVehicle
!insert (ra_210006, cust_co_skyline) into RentalAgreementCustomer
```
## Generation 15 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 143 | 0.00% |
| Multiplicities Errors | 0 | 28 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 1 | 7 | 14.29% |
| License Plates | 4 | 4 | 100.00% |
| Home Phones | 0 | 2 | 0.00% |

| Invalid Addresses | 
|---| 
```
1550 Industrial Dr, Pensacola, FL 32505
```

| Invalid License Plates | 
|---| 
```
FL-TRK-92110
```
```
AZ-TRK-92111
```
```
DE-TRL-93112
```
```
FL-TRL-93113
```

# Generation 16
```
!new RentalOffice('office_callcenter_national3')
!office_callcenter_national3.name := 'National Reservations Call Center - 24/7'
!office_callcenter_national3.number := 3001
!office_callcenter_national3.address := '200 E Capitol St, Washington, DC 20003'

!new RentalOffice('office_santaana')
!office_santaana.name := 'Orange County Fleet Rentals - Santa Ana'
!office_santaana.number := 3002
!office_santaana.address := '1700 E Edinger Ave, Santa Ana, CA 92705'

!new RentalOffice('office_flagstaff_main2')
!office_flagstaff_main2.name := 'High Country Vehicle Rental - Flagstaff'
!office_flagstaff_main2.number := 3003
!office_flagstaff_main2.address := '3000 S Country Club Dr, Flagstaff, AZ 86004'

!new RentalOffice('office_newhaven_ct2')
!office_newhaven_ct2.name := 'Elm City Vehicle Rental - New Haven'
!office_newhaven_ct2.number := 3004
!office_newhaven_ct2.address := '100 Sargent Dr, New Haven, CT 06511'

!new Truck('truck_ca_24ft_301')
!truck_ca_24ft_301.id := 93001
!truck_ca_24ft_301.registrationState := #CA
!truck_ca_24ft_301.licensePlateNumber := 'CA-TRK-93001'
!truck_ca_24ft_301.vehicleTypeCode := #TRUCK24
!truck_ca_24ft_301.registrationLastMaintenanceDate := Date('2026-05-03')
!truck_ca_24ft_301.expirationDate := Date('2027-05-31')
!truck_ca_24ft_301.odometerReading := 28440
!truck_ca_24ft_301.gasTankCapacity := 64.0
!truck_ca_24ft_301.workingRadio := true
!truck_ca_24ft_301.mileage := 9

!new Truck('truck_ct_standard_302')
!truck_ct_standard_302.id := 93002
!truck_ct_standard_302.registrationState := #CT
!truck_ct_standard_302.licensePlateNumber := 'CT-TRK-93002'
!truck_ct_standard_302.vehicleTypeCode := #TRUCK
!truck_ct_standard_302.registrationLastMaintenanceDate := Date('2026-04-22')
!truck_ct_standard_302.expirationDate := Date('2027-04-30')
!truck_ct_standard_302.odometerReading := 61205
!truck_ct_standard_302.gasTankCapacity := 49.0
!truck_ct_standard_302.workingRadio := false
!truck_ct_standard_302.mileage := 12

!new Vehicle('trailer_az_covered_301')
!trailer_az_covered_301.id := 94001
!trailer_az_covered_301.registrationState := #AZ
!trailer_az_covered_301.licensePlateNumber := 'AZ-TRL-94001'
!trailer_az_covered_301.vehicleTypeCode := #COVERED_TRAILER
!trailer_az_covered_301.registrationLastMaintenanceDate := Date('2026-02-12')
!trailer_az_covered_301.expirationDate := Date('2027-02-28')

!new Vehicle('trailer_ca_open_302')
!trailer_ca_open_302.id := 94002
!trailer_ca_open_302.registrationState := #CA
!trailer_ca_open_302.licensePlateNumber := 'CA-TRL-94002'
!trailer_ca_open_302.vehicleTypeCode := #OPEN_TRAILER
!trailer_ca_open_302.registrationLastMaintenanceDate := Date('2026-03-19')
!trailer_ca_open_302.expirationDate := Date('2027-03-31')

!insert (office_santaana, truck_ca_24ft_301) into RentalOfficeVehicle
!insert (office_newhaven_ct2, truck_ct_standard_302) into RentalOfficeVehicle
!insert (office_flagstaff_main2, trailer_az_covered_301) into RentalOfficeVehicle
!insert (office_santaana, trailer_ca_open_302) into RentalOfficeVehicle

!new Company('cust_co_gallerymove')
!cust_co_gallerymove.name := 'GalleryMove Fine Art Transport'
!cust_co_gallerymove.address := '520 S Grand Ave, Los Angeles, CA 90071'
!cust_co_gallerymove.poorRisk := false
!cust_co_gallerymove.idNumber := 70033012

!new Individual('cust_ind_chloe')
!cust_ind_chloe.name := 'Chloe Martin'
!cust_ind_chloe.address := '89 N Main St, Flagstaff, AZ 86001'
!cust_ind_chloe.poorRisk := false
!cust_ind_chloe.homePhone := '928-555-0108'
!cust_ind_chloe.driverLicenseState := #AZ
!cust_ind_chloe.driverLicenseNumber := 50571933
!cust_ind_chloe.driverLicenseExpirationDate := Date('2028-09-14')

!new RentalAgreement('ra_300001')
!ra_300001.number := 300001
!ra_300001.rentalDate := Date('2026-02-21')
!ra_300001.anticipatedDuration := 6
!ra_300001.depositPaid := 1500.00
!ra_300001.quotedDailyRate := 199.00
!ra_300001.quotedRatePerMile := 0.95

!new RentalAgreement('ra_300002')
!ra_300002.number := 300002
!ra_300002.rentalDate := Date('2026-02-22')
!ra_300002.anticipatedDuration := 2
!ra_300002.depositPaid := 100.00
!ra_300002.quotedDailyRate := 35.00
!ra_300002.quotedRatePerMile := 0.00

!new RentalAgreement('ra_300003')
!ra_300003.number := 300003
!ra_300003.rentalDate := Date('2026-03-01')
!ra_300003.anticipatedDuration := 45
!ra_300003.depositPaid := 0.00
!ra_300003.quotedDailyRate := 55.00
!ra_300003.quotedRatePerMile := 0.00

!new RentalAgreement('ra_300004')
!ra_300004.number := 300004
!ra_300004.rentalDate := Date('2026-03-05')
!ra_300004.anticipatedDuration := 1
!ra_300004.depositPaid := 250.00
!ra_300004.quotedDailyRate := 99.00
!ra_300004.quotedRatePerMile := 0.70

!insert (office_callcenter_national3, ra_300001) into RentalOfficeRentalAgreementOrigin
!insert (office_newhaven_ct2, ra_300001) into RentalOfficeRentalAgreementDrop
!insert (ra_300001, truck_ca_24ft_301) into RentalAgreementVehicle
!insert (ra_300001, cust_co_gallerymove) into RentalAgreementCustomer

!insert (office_santaana, ra_300002) into RentalOfficeRentalAgreementOrigin
!insert (office_flagstaff_main2, ra_300002) into RentalOfficeRentalAgreementDrop
!insert (ra_300002, trailer_ca_open_302) into RentalAgreementVehicle
!insert (ra_300002, cust_ind_chloe) into RentalAgreementCustomer

!insert (office_flagstaff_main2, ra_300003) into RentalOfficeRentalAgreementOrigin
!insert (office_santaana, ra_300003) into RentalOfficeRentalAgreementDrop
!insert (ra_300003, trailer_az_covered_301) into RentalAgreementVehicle
!insert (ra_300003, cust_co_gallerymove) into RentalAgreementCustomer

!insert (office_newhaven_ct2, ra_300004) into RentalOfficeRentalAgreementOrigin
!insert (office_newhaven_ct2, ra_300004) into RentalOfficeRentalAgreementDrop
!insert (ra_300004, truck_ct_standard_302) into RentalAgreementVehicle
!insert (ra_300004, cust_ind_chloe) into RentalAgreementCustomer
```
## Generation 16 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 113 | 0.00% |
| Multiplicities Errors | 0 | 20 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 1 | 6 | 16.67% |
| License Plates | 4 | 4 | 100.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
89 N Main St, Flagstaff, AZ 86001
```

| Invalid License Plates | 
|---| 
```
CA-TRK-93001
```
```
CT-TRK-93002
```
```
AZ-TRL-94001
```
```
CA-TRL-94002
```

# Generation 17
```
!new RentalOffice('office_denver_res4')
!office_denver_res4.name := 'Rocky Mountain Reservations Desk'
!office_denver_res4.number := 4001
!office_denver_res4.address := '1700 Lincoln St, Denver, CO 80203'

!new RentalOffice('office_sandiego_ops4')
!office_sandiego_ops4.name := 'Coastal Operations Yard - San Diego'
!office_sandiego_ops4.number := 4002
!office_sandiego_ops4.address := '3120 Kurtz St, San Diego, CA 92110'

!new RentalOffice('office_huntsville4')
!office_huntsville4.name := 'Tennessee Valley Rentals - Huntsville'
!office_huntsville4.number := 4003
!office_huntsville4.address := '2850 Wall Triana Hwy, Huntsville, AL 35824'

!new RentalOffice('office_fortlauderdale4')
!office_fortlauderdale4.name := 'Fort Lauderdale Drop & Service Lot'
!office_fortlauderdale4.number := 4004
!office_fortlauderdale4.address := '600 Terminal Dr, Fort Lauderdale, FL 33315'

!new Truck('truck_ca_24ft_401')
!truck_ca_24ft_401.id := 84001
!truck_ca_24ft_401.registrationState := #CA
!truck_ca_24ft_401.licensePlateNumber := 'CA-TRK-84001'
!truck_ca_24ft_401.vehicleTypeCode := #TRUCK24
!truck_ca_24ft_401.registrationLastMaintenanceDate := Date('2026-05-29')
!truck_ca_24ft_401.expirationDate := Date('2027-05-31')
!truck_ca_24ft_401.odometerReading := 142330
!truck_ca_24ft_401.gasTankCapacity := 65.0
!truck_ca_24ft_401.workingRadio := true
!truck_ca_24ft_401.mileage := 8

!new Truck('truck_al_10ft_402')
!truck_al_10ft_402.id := 84002
!truck_al_10ft_402.registrationState := #AL
!truck_al_10ft_402.licensePlateNumber := 'AL-TRK-84002'
!truck_al_10ft_402.vehicleTypeCode := #TRUCK10
!truck_al_10ft_402.registrationLastMaintenanceDate := Date('2026-04-12')
!truck_al_10ft_402.expirationDate := Date('2027-04-30')
!truck_al_10ft_402.odometerReading := 25505
!truck_al_10ft_402.gasTankCapacity := 36.0
!truck_al_10ft_402.workingRadio := false
!truck_al_10ft_402.mileage := 15

!new Vehicle('trailer_ca_covered_401')
!trailer_ca_covered_401.id := 84501
!trailer_ca_covered_401.registrationState := #CA
!trailer_ca_covered_401.licensePlateNumber := 'CA-TRL-84501'
!trailer_ca_covered_401.vehicleTypeCode := #COVERED_TRAILER
!trailer_ca_covered_401.registrationLastMaintenanceDate := Date('2026-03-07')
!trailer_ca_covered_401.expirationDate := Date('2027-03-31')

!new Vehicle('trailer_co_open_401')
!trailer_co_open_401.id := 84502
!trailer_co_open_401.registrationState := #CO
!trailer_co_open_401.licensePlateNumber := 'CO-TRL-84502'
!trailer_co_open_401.vehicleTypeCode := #OPEN_TRAILER
!trailer_co_open_401.registrationLastMaintenanceDate := Date('2026-02-18')
!trailer_co_open_401.expirationDate := Date('2027-02-28')

!new Vehicle('trailer_ct_open_401')
!trailer_ct_open_401.id := 84503
!trailer_ct_open_401.registrationState := #CT
!trailer_ct_open_401.licensePlateNumber := 'CT-TRL-84503'
!trailer_ct_open_401.vehicleTypeCode := #OPEN_TRAILER
!trailer_ct_open_401.registrationLastMaintenanceDate := Date('2026-04-03')
!trailer_ct_open_401.expirationDate := Date('2027-04-30')

!insert (office_sandiego_ops4, truck_ca_24ft_401) into RentalOfficeVehicle
!insert (office_huntsville4, truck_al_10ft_402) into RentalOfficeVehicle
!insert (office_sandiego_ops4, trailer_ca_covered_401) into RentalOfficeVehicle
!insert (office_denver_res4, trailer_co_open_401) into RentalOfficeVehicle
!insert (office_fortlauderdale4, trailer_ct_open_401) into RentalOfficeVehicle

!new Company('cust_co_vertexmed4')
!cust_co_vertexmed4.name := 'Vertex Medical Logistics'
!cust_co_vertexmed4.address := '4550 Morena Blvd, San Diego, CA 92117'
!cust_co_vertexmed4.poorRisk := false
!cust_co_vertexmed4.idNumber := 41088021

!new Individual('cust_ind_renee4')
!cust_ind_renee4.name := 'Renee Lawson'
!cust_ind_renee4.address := '2105 Governors Dr SW, Huntsville, AL 35801'
!cust_ind_renee4.poorRisk := false
!cust_ind_renee4.homePhone := '256-555-0139'
!cust_ind_renee4.driverLicenseState := #AL
!cust_ind_renee4.driverLicenseNumber := 55019384
!cust_ind_renee4.driverLicenseExpirationDate := Date('2028-07-12')

!new Individual('cust_ind_malcolm4')
!cust_ind_malcolm4.name := 'Malcolm Pierce'
!cust_ind_malcolm4.address := '920 E Las Olas Blvd, Fort Lauderdale, FL 33301'
!cust_ind_malcolm4.poorRisk := true
!cust_ind_malcolm4.homePhone := '954-555-0170'
!cust_ind_malcolm4.driverLicenseState := #FL
!cust_ind_malcolm4.driverLicenseNumber := 88077102
!cust_ind_malcolm4.driverLicenseExpirationDate := Date('2026-03-31')

!new RentalAgreement('ra_400001')
!ra_400001.number := 400001
!ra_400001.rentalDate := Date('2026-01-11')
!ra_400001.anticipatedDuration := 90
!ra_400001.depositPaid := 0.00
!ra_400001.quotedDailyRate := 69.00
!ra_400001.quotedRatePerMile := 0.00

!new RentalAgreement('ra_400002')
!ra_400002.number := 400002
!ra_400002.rentalDate := Date('2026-02-01')
!ra_400002.anticipatedDuration := 2
!ra_400002.depositPaid := 1200.00
!ra_400002.quotedDailyRate := 210.00
!ra_400002.quotedRatePerMile := 0.98

!new RentalAgreement('ra_400003')
!ra_400003.number := 400003
!ra_400003.rentalDate := Date('2026-02-05')
!ra_400003.anticipatedDuration := 7
!ra_400003.depositPaid := 300.00
!ra_400003.quotedDailyRate := 45.00
!ra_400003.quotedRatePerMile := 0.00

!new RentalAgreement('ra_400004')
!ra_400004.number := 400004
!ra_400004.rentalDate := Date('2026-02-12')
!ra_400004.anticipatedDuration := 1
!ra_400004.depositPaid := 0.00
!ra_400004.quotedDailyRate := 35.00
!ra_400004.quotedRatePerMile := 0.00

!new RentalAgreement('ra_400005')
!ra_400005.number := 400005
!ra_400005.rentalDate := Date('2026-03-03')
!ra_400005.anticipatedDuration := 4
!ra_400005.depositPaid := 500.00
!ra_400005.quotedDailyRate := 160.00
!ra_400005.quotedRatePerMile := 0.85

!new RentalAgreement('ra_400006')
!ra_400006.number := 400006
!ra_400006.rentalDate := Date('2026-03-15')
!ra_400006.anticipatedDuration := 14
!ra_400006.depositPaid := 150.00
!ra_400006.quotedDailyRate := 29.95
!ra_400006.quotedRatePerMile := 0.00

!new RentalAgreement('ra_400007')
!ra_400007.number := 400007
!ra_400007.rentalDate := Date('2026-04-01')
!ra_400007.anticipatedDuration := 3
!ra_400007.depositPaid := 250.00
!ra_400007.quotedDailyRate := 79.00
!ra_400007.quotedRatePerMile := 0.60

!insert (office_denver_res4, ra_400001) into RentalOfficeRentalAgreementOrigin
!insert (office_denver_res4, ra_400001) into RentalOfficeRentalAgreementDrop
!insert (ra_400001, trailer_co_open_401) into RentalAgreementVehicle
!insert (ra_400001, cust_co_vertexmed4) into RentalAgreementCustomer

!insert (office_denver_res4, ra_400002) into RentalOfficeRentalAgreementOrigin
!insert (office_fortlauderdale4, ra_400002) into RentalOfficeRentalAgreementDrop
!insert (ra_400002, truck_ca_24ft_401) into RentalAgreementVehicle
!insert (ra_400002, cust_co_vertexmed4) into RentalAgreementCustomer

!insert (office_huntsville4, ra_400003) into RentalOfficeRentalAgreementOrigin
!insert (office_huntsville4, ra_400003) into RentalOfficeRentalAgreementDrop
!insert (ra_400003, truck_al_10ft_402) into RentalAgreementVehicle
!insert (ra_400003, cust_ind_renee4) into RentalAgreementCustomer

!insert (office_denver_res4, ra_400004) into RentalOfficeRentalAgreementOrigin
!insert (office_sandiego_ops4, ra_400004) into RentalOfficeRentalAgreementDrop
!insert (ra_400004, trailer_ca_covered_401) into RentalAgreementVehicle
!insert (ra_400004, cust_ind_renee4) into RentalAgreementCustomer

!insert (office_sandiego_ops4, ra_400005) into RentalOfficeRentalAgreementOrigin
!insert (office_sandiego_ops4, ra_400005) into RentalOfficeRentalAgreementDrop
!insert (ra_400005, truck_ca_24ft_401) into RentalAgreementVehicle
!insert (ra_400005, cust_ind_malcolm4) into RentalAgreementCustomer

!insert (office_fortlauderdale4, ra_400006) into RentalOfficeRentalAgreementOrigin
!insert (office_fortlauderdale4, ra_400006) into RentalOfficeRentalAgreementDrop
!insert (ra_400006, trailer_ct_open_401) into RentalAgreementVehicle
!insert (ra_400006, cust_ind_malcolm4) into RentalAgreementCustomer

!insert (office_denver_res4, ra_400007) into RentalOfficeRentalAgreementOrigin
!insert (office_huntsville4, ra_400007) into RentalOfficeRentalAgreementDrop
!insert (ra_400007, truck_al_10ft_402) into RentalAgreementVehicle
!insert (ra_400007, cust_co_vertexmed4) into RentalAgreementCustomer
```
## Generation 17 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 162 | 0.00% |
| Multiplicities Errors | 0 | 33 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 0 | 7 | 0.00% |
| License Plates | 5 | 5 | 100.00% |
| Home Phones | 0 | 2 | 0.00% |

| Invalid License Plates | 
|---| 
```
CA-TRK-84001
```
```
AL-TRK-84002
```
```
CA-TRL-84501
```
```
CO-TRL-84502
```
```
CT-TRL-84503
```

# Generation 18
```
!new RentalOffice('office_boulder_main5')
!office_boulder_main5.name := 'Flatirons Commercial Rentals - Boulder'
!office_boulder_main5.number := 5001
!office_boulder_main5.address := '6300 Spine Rd, Boulder, CO 80301'

!new RentalOffice('office_sacramento_sat5')
!office_sacramento_sat5.name := 'Sacramento Satellite Yard'
!office_sacramento_sat5.number := 5002
!office_sacramento_sat5.address := '8120 Fruitridge Rd, Sacramento, CA 95826'

!new RentalOffice('office_wilmington_port5')
!office_wilmington_port5.name := 'Wilmington Port Drop Yard'
!office_wilmington_port5.number := 5003
!office_wilmington_port5.address := '1 Port of Wilmington Rd, Wilmington, DE 19801'

!new RentalOffice('office_hartford_admin5')
!office_hartford_admin5.name := 'Hartford Back Office (Billing Only)'
!office_hartford_admin5.number := 5004
!office_hartford_admin5.address := '500 Main St, Hartford, CT 06103'

!new Truck('truck_co_24ft_501')
!truck_co_24ft_501.id := 95001
!truck_co_24ft_501.registrationState := #CO
!truck_co_24ft_501.licensePlateNumber := 'CO-TRK-95001'
!truck_co_24ft_501.vehicleTypeCode := #TRUCK24
!truck_co_24ft_501.registrationLastMaintenanceDate := Date('2026-06-10')
!truck_co_24ft_501.expirationDate := Date('2027-06-30')
!truck_co_24ft_501.odometerReading := 90440
!truck_co_24ft_501.gasTankCapacity := 68.0
!truck_co_24ft_501.workingRadio := true
!truck_co_24ft_501.mileage := 8

!new Truck('truck_ca_10ft_502')
!truck_ca_10ft_502.id := 95002
!truck_ca_10ft_502.registrationState := #CA
!truck_ca_10ft_502.licensePlateNumber := 'CA-TRK-95002'
!truck_ca_10ft_502.vehicleTypeCode := #TRUCK10
!truck_ca_10ft_502.registrationLastMaintenanceDate := Date('2026-05-18')
!truck_ca_10ft_502.expirationDate := Date('2027-05-31')
!truck_ca_10ft_502.odometerReading := 14215
!truck_ca_10ft_502.gasTankCapacity := 33.0
!truck_ca_10ft_502.workingRadio := false
!truck_ca_10ft_502.mileage := 16

!new Vehicle('trailer_de_covered_501')
!trailer_de_covered_501.id := 96001
!trailer_de_covered_501.registrationState := #DE
!trailer_de_covered_501.licensePlateNumber := 'DE-TRL-96001'
!trailer_de_covered_501.vehicleTypeCode := #COVERED_TRAILER
!trailer_de_covered_501.registrationLastMaintenanceDate := Date('2026-04-21')
!trailer_de_covered_501.expirationDate := Date('2027-04-30')

!new Vehicle('trailer_ca_open_502')
!trailer_ca_open_502.id := 96002
!trailer_ca_open_502.registrationState := #CA
!trailer_ca_open_502.licensePlateNumber := 'CA-TRL-96002'
!trailer_ca_open_502.vehicleTypeCode := #OPEN_TRAILER
!trailer_ca_open_502.registrationLastMaintenanceDate := Date('2026-02-05')
!trailer_ca_open_502.expirationDate := Date('2027-02-28')

!new Vehicle('trailer_co_open_503')
!trailer_co_open_503.id := 96003
!trailer_co_open_503.registrationState := #CO
!trailer_co_open_503.licensePlateNumber := 'CO-TRL-96003'
!trailer_co_open_503.vehicleTypeCode := #OPEN_TRAILER
!trailer_co_open_503.registrationLastMaintenanceDate := Date('2026-06-01')
!trailer_co_open_503.expirationDate := Date('2027-06-30')

!insert (office_boulder_main5, truck_co_24ft_501) into RentalOfficeVehicle
!insert (office_sacramento_sat5, truck_ca_10ft_502) into RentalOfficeVehicle
!insert (office_wilmington_port5, trailer_de_covered_501) into RentalOfficeVehicle
!insert (office_sacramento_sat5, trailer_ca_open_502) into RentalOfficeVehicle
!insert (office_boulder_main5, trailer_co_open_503) into RentalOfficeVehicle

!new Individual('cust_ind_evan5')
!cust_ind_evan5.name := 'Evan Price'
!cust_ind_evan5.address := '1440 Pearl St, Boulder, CO 80302'
!cust_ind_evan5.poorRisk := false
!cust_ind_evan5.homePhone := '303-555-0106'
!cust_ind_evan5.driverLicenseState := #CO
!cust_ind_evan5.driverLicenseNumber := 66150328
!cust_ind_evan5.driverLicenseExpirationDate := Date('2029-09-30')

!new Company('cust_co_redcanyon5')
!cust_co_redcanyon5.name := 'RedCanyon Auction Services'
!cust_co_redcanyon5.address := '2850 Fruitridge Rd, Sacramento, CA 95820'
!cust_co_redcanyon5.poorRisk := true
!cust_co_redcanyon5.idNumber := 50588014

!new Company('cust_co_baycold5')
!cust_co_baycold5.name := 'BayCold Food Distribution'
!cust_co_baycold5.address := '400 Port Center Dr, Wilmington, DE 19801'
!cust_co_baycold5.poorRisk := false
!cust_co_baycold5.idNumber := 50588991

!new RentalAgreement('ra_500001')
!ra_500001.number := 500001
!ra_500001.rentalDate := Date('2026-02-02')
!ra_500001.anticipatedDuration := 120
!ra_500001.depositPaid := 0.00
!ra_500001.quotedDailyRate := 52.00
!ra_500001.quotedRatePerMile := 0.00

!new RentalAgreement('ra_500002')
!ra_500002.number := 500002
!ra_500002.rentalDate := Date('2026-02-14')
!ra_500002.anticipatedDuration := 2
!ra_500002.depositPaid := 900.00
!ra_500002.quotedDailyRate := 205.00
!ra_500002.quotedRatePerMile := 0.97

!new RentalAgreement('ra_500003')
!ra_500003.number := 500003
!ra_500003.rentalDate := Date('2026-03-01')
!ra_500003.anticipatedDuration := 5
!ra_500003.depositPaid := 150.00
!ra_500003.quotedDailyRate := 44.00
!ra_500003.quotedRatePerMile := 0.00

!new RentalAgreement('ra_500004')
!ra_500004.number := 500004
!ra_500004.rentalDate := Date('2026-03-05')
!ra_500004.anticipatedDuration := 1
!ra_500004.depositPaid := 250.00
!ra_500004.quotedDailyRate := 89.00
!ra_500004.quotedRatePerMile := 0.65

!new RentalAgreement('ra_500005')
!ra_500005.number := 500005
!ra_500005.rentalDate := Date('2026-03-18')
!ra_500005.anticipatedDuration := 14
!ra_500005.depositPaid := 400.00
!ra_500005.quotedDailyRate := 35.00
!ra_500005.quotedRatePerMile := 0.00

!new RentalAgreement('ra_500006')
!ra_500006.number := 500006
!ra_500006.rentalDate := Date('2026-04-01')
!ra_500006.anticipatedDuration := 3
!ra_500006.depositPaid := 700.00
!ra_500006.quotedDailyRate := 175.00
!ra_500006.quotedRatePerMile := 0.90

!insert (office_hartford_admin5, ra_500001) into RentalOfficeRentalAgreementOrigin
!insert (office_wilmington_port5, ra_500001) into RentalOfficeRentalAgreementDrop
!insert (ra_500001, trailer_de_covered_501) into RentalAgreementVehicle
!insert (ra_500001, cust_co_baycold5) into RentalAgreementCustomer

!insert (office_boulder_main5, ra_500002) into RentalOfficeRentalAgreementOrigin
!insert (office_sacramento_sat5, ra_500002) into RentalOfficeRentalAgreementDrop
!insert (ra_500002, truck_co_24ft_501) into RentalAgreementVehicle
!insert (ra_500002, cust_ind_evan5) into RentalAgreementCustomer

!insert (office_sacramento_sat5, ra_500003) into RentalOfficeRentalAgreementOrigin
!insert (office_sacramento_sat5, ra_500003) into RentalOfficeRentalAgreementDrop
!insert (ra_500003, trailer_ca_open_502) into RentalAgreementVehicle
!insert (ra_500003, cust_co_redcanyon5) into RentalAgreementCustomer

!insert (office_wilmington_port5, ra_500004) into RentalOfficeRentalAgreementOrigin
!insert (office_hartford_admin5, ra_500004) into RentalOfficeRentalAgreementDrop
!insert (ra_500004, trailer_de_covered_501) into RentalAgreementVehicle
!insert (ra_500004, cust_ind_evan5) into RentalAgreementCustomer

!insert (office_boulder_main5, ra_500005) into RentalOfficeRentalAgreementOrigin
!insert (office_boulder_main5, ra_500005) into RentalOfficeRentalAgreementDrop
!insert (ra_500005, trailer_co_open_503) into RentalAgreementVehicle
!insert (ra_500005, cust_ind_evan5) into RentalAgreementCustomer

!insert (office_sacramento_sat5, ra_500006) into RentalOfficeRentalAgreementOrigin
!insert (office_wilmington_port5, ra_500006) into RentalOfficeRentalAgreementDrop
!insert (ra_500006, truck_ca_10ft_502) into RentalAgreementVehicle
!insert (ra_500006, cust_co_redcanyon5) into RentalAgreementCustomer
```
## Generation 18 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 148 | 0.00% |
| Multiplicities Errors | 0 | 29 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 2 | 7 | 28.57% |
| License Plates | 5 | 5 | 100.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
1 Port of Wilmington Rd, Wilmington, DE 19801
```
```
400 Port Center Dr, Wilmington, DE 19801
```

| Invalid License Plates | 
|---| 
```
CO-TRK-95001
```
```
CA-TRK-95002
```
```
DE-TRL-96001
```
```
CA-TRL-96002
```
```
CO-TRL-96003
```

# Generation 19
```
!new RentalOffice('office_callcenter_ct6')
!office_callcenter_ct6.name := 'Northeast Reservations Call Center'
!office_callcenter_ct6.number := 6001
!office_callcenter_ct6.address := '200 Asylum St, Hartford, CT 06103'

!new RentalOffice('office_tampa_west6')
!office_tampa_west6.name := 'Tampa West Service Yard'
!office_tampa_west6.number := 6002
!office_tampa_west6.address := '5201 W Cypress St, Tampa, FL 33607'

!new RentalOffice('office_denver_airport6')
!office_denver_airport6.name := 'Denver Airport Commercial Rentals'
!office_denver_airport6.number := 6003
!office_denver_airport6.address := '8500 Peña Blvd, Denver, CO 80249'

!new Truck('truck_ct_24ft_601')
!truck_ct_24ft_601.id := 60601
!truck_ct_24ft_601.registrationState := #CT
!truck_ct_24ft_601.licensePlateNumber := 'CT-TRK-60601'
!truck_ct_24ft_601.vehicleTypeCode := #TRUCK24
!truck_ct_24ft_601.registrationLastMaintenanceDate := Date('2026-06-28')
!truck_ct_24ft_601.expirationDate := Date('2027-06-30')
!truck_ct_24ft_601.odometerReading := 38005
!truck_ct_24ft_601.gasTankCapacity := 62.0
!truck_ct_24ft_601.workingRadio := true
!truck_ct_24ft_601.mileage := 9

!new Vehicle('trailer_fl_open_602')
!trailer_fl_open_602.id := 60602
!trailer_fl_open_602.registrationState := #FL
!trailer_fl_open_602.licensePlateNumber := 'FL-TRL-60602'
!trailer_fl_open_602.vehicleTypeCode := #OPEN_TRAILER
!trailer_fl_open_602.registrationLastMaintenanceDate := Date('2026-05-16')
!trailer_fl_open_602.expirationDate := Date('2027-05-31')

!new Vehicle('trailer_co_covered_603')
!trailer_co_covered_603.id := 60603
!trailer_co_covered_603.registrationState := #CO
!trailer_co_covered_603.licensePlateNumber := 'CO-TRL-60603'
!trailer_co_covered_603.vehicleTypeCode := #COVERED_TRAILER
!trailer_co_covered_603.registrationLastMaintenanceDate := Date('2026-04-07')
!trailer_co_covered_603.expirationDate := Date('2027-04-30')

!insert (office_tampa_west6, truck_ct_24ft_601) into RentalOfficeVehicle
!insert (office_tampa_west6, trailer_fl_open_602) into RentalOfficeVehicle
!insert (office_denver_airport6, trailer_co_covered_603) into RentalOfficeVehicle

!new Individual('cust_ind_stephanie6')
!cust_ind_stephanie6.name := 'Stephanie Ruiz'
!cust_ind_stephanie6.address := '18 W 6th St, Wilmington, DE 19801'
!cust_ind_stephanie6.poorRisk := false
!cust_ind_stephanie6.homePhone := '302-555-0168'
!cust_ind_stephanie6.driverLicenseState := #DE
!cust_ind_stephanie6.driverLicenseNumber := 31980455
!cust_ind_stephanie6.driverLicenseExpirationDate := Date('2028-11-30')

!new Individual('cust_ind_caleb6')
!cust_ind_caleb6.name := 'Caleb Monroe'
!cust_ind_caleb6.address := '940 S Colorado Blvd, Denver, CO 80246'
!cust_ind_caleb6.poorRisk := true
!cust_ind_caleb6.homePhone := '720-555-0181'
!cust_ind_caleb6.driverLicenseState := #CO
!cust_ind_caleb6.driverLicenseNumber := 77130062
!cust_ind_caleb6.driverLicenseExpirationDate := Date('2026-12-31')

!new Company('cust_co_seaboard6')
!cust_co_seaboard6.name := 'Seaboard Exhibit Services'
!cust_co_seaboard6.address := '5600 E Adamo Dr, Tampa, FL 33619'
!cust_co_seaboard6.poorRisk := false
!cust_co_seaboard6.idNumber := 60688011

!new RentalAgreement('ra_600001')
!ra_600001.number := 600001
!ra_600001.rentalDate := Date('2026-02-03')
!ra_600001.anticipatedDuration := 10
!ra_600001.depositPaid := 0.00
!ra_600001.quotedDailyRate := 149.00
!ra_600001.quotedRatePerMile := 0.82

!new RentalAgreement('ra_600002')
!ra_600002.number := 600002
!ra_600002.rentalDate := Date('2026-02-05')
!ra_600002.anticipatedDuration := 1
!ra_600002.depositPaid := 50.00
!ra_600002.quotedDailyRate := 29.00
!ra_600002.quotedRatePerMile := 0.00

!new RentalAgreement('ra_600003')
!ra_600003.number := 600003
!ra_600003.rentalDate := Date('2026-02-14')
!ra_600003.anticipatedDuration := 45
!ra_600003.depositPaid := 500.00
!ra_600003.quotedDailyRate := 39.95
!ra_600003.quotedRatePerMile := 0.00

!new RentalAgreement('ra_600004')
!ra_600004.number := 600004
!ra_600004.rentalDate := Date('2026-03-10')
!ra_600004.anticipatedDuration := 3
!ra_600004.depositPaid := 900.00
!ra_600004.quotedDailyRate := 199.00
!ra_600004.quotedRatePerMile := 0.95

!insert (office_callcenter_ct6, ra_600001) into RentalOfficeRentalAgreementOrigin
!insert (office_denver_airport6, ra_600001) into RentalOfficeRentalAgreementDrop
!insert (ra_600001, trailer_co_covered_603) into RentalAgreementVehicle
!insert (ra_600001, cust_co_seaboard6) into RentalAgreementCustomer

!insert (office_denver_airport6, ra_600002) into RentalOfficeRentalAgreementOrigin
!insert (office_denver_airport6, ra_600002) into RentalOfficeRentalAgreementDrop
!insert (ra_600002, trailer_co_covered_603) into RentalAgreementVehicle
!insert (ra_600002, cust_ind_caleb6) into RentalAgreementCustomer

!insert (office_callcenter_ct6, ra_600003) into RentalOfficeRentalAgreementOrigin
!insert (office_tampa_west6, ra_600003) into RentalOfficeRentalAgreementDrop
!insert (ra_600003, trailer_fl_open_602) into RentalAgreementVehicle
!insert (ra_600003, cust_ind_stephanie6) into RentalAgreementCustomer

!insert (office_callcenter_ct6, ra_600004) into RentalOfficeRentalAgreementOrigin
!insert (office_tampa_west6, ra_600004) into RentalOfficeRentalAgreementDrop
!insert (ra_600004, truck_ct_24ft_601) into RentalAgreementVehicle
!insert (ra_600004, cust_co_seaboard6) into RentalAgreementCustomer
```
## Generation 19 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 105 | 0.00% |
| Multiplicities Errors | 0 | 19 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 1 | 6 | 16.67% |
| License Plates | 3 | 3 | 100.00% |
| Home Phones | 0 | 2 | 0.00% |

| Invalid Addresses | 
|---| 
```
5600 E Adamo Dr, Tampa, FL 33619
```

| Invalid License Plates | 
|---| 
```
CT-TRK-60601
```
```
FL-TRL-60602
```
```
CO-TRL-60603
```

# Generation 20
```
!new RentalOffice('office_de_regional7')
!office_de_regional7.name := 'Brandywine Regional Rental Office'
!office_de_regional7.number := 7001
!office_de_regional7.address := '45 Lukens Dr, New Castle, DE 19720'

!new RentalOffice('office_ct_service7')
!office_ct_service7.name := 'Connecticut Service & Returns - New Britain'
!office_ct_service7.number := 7002
!office_ct_service7.address := '320 Ellis St, New Britain, CT 06051'

!new RentalOffice('office_ca_return7')
!office_ca_return7.name := 'Southern California Return Yard - Ontario'
!office_ca_return7.number := 7003
!office_ca_return7.address := '2200 E Airport Dr, Ontario, CA 91761'

!new Truck('truck_de_24ft_701')
!truck_de_24ft_701.id := 70101
!truck_de_24ft_701.registrationState := #DE
!truck_de_24ft_701.licensePlateNumber := 'DE-TRK-70101'
!truck_de_24ft_701.vehicleTypeCode := #TRUCK24
!truck_de_24ft_701.registrationLastMaintenanceDate := Date('2026-06-02')
!truck_de_24ft_701.expirationDate := Date('2027-06-30')
!truck_de_24ft_701.odometerReading := 100220
!truck_de_24ft_701.gasTankCapacity := 64.0
!truck_de_24ft_701.workingRadio := true
!truck_de_24ft_701.mileage := 9

!new Truck('truck_ct_10ft_702')
!truck_ct_10ft_702.id := 70102
!truck_ct_10ft_702.registrationState := #CT
!truck_ct_10ft_702.licensePlateNumber := 'CT-TRK-70102'
!truck_ct_10ft_702.vehicleTypeCode := #TRUCK10
!truck_ct_10ft_702.registrationLastMaintenanceDate := Date('2026-05-10')
!truck_ct_10ft_702.expirationDate := Date('2027-05-31')
!truck_ct_10ft_702.odometerReading := 22140
!truck_ct_10ft_702.gasTankCapacity := 34.0
!truck_ct_10ft_702.workingRadio := false
!truck_ct_10ft_702.mileage := 16

!new Vehicle('trailer_ca_covered_703')
!trailer_ca_covered_703.id := 70903
!trailer_ca_covered_703.registrationState := #CA
!trailer_ca_covered_703.licensePlateNumber := 'CA-TRL-70903'
!trailer_ca_covered_703.vehicleTypeCode := #COVERED_TRAILER
!trailer_ca_covered_703.registrationLastMaintenanceDate := Date('2026-04-01')
!trailer_ca_covered_703.expirationDate := Date('2027-04-30')

!insert (office_de_regional7, truck_de_24ft_701) into RentalOfficeVehicle
!insert (office_ct_service7, truck_ct_10ft_702) into RentalOfficeVehicle
!insert (office_ca_return7, trailer_ca_covered_703) into RentalOfficeVehicle

!new Company('cust_co_harborstone7')
!cust_co_harborstone7.name := 'HarborStone Records Management'
!cust_co_harborstone7.address := '800 River Rd, New Castle, DE 19720'
!cust_co_harborstone7.poorRisk := false
!cust_co_harborstone7.idNumber := 77230015

!new Individual('cust_ind_nadine7')
!cust_ind_nadine7.name := 'Nadine Kessler'
!cust_ind_nadine7.address := '55 Myrtle St, New Britain, CT 06051'
!cust_ind_nadine7.poorRisk := true
!cust_ind_nadine7.homePhone := '860-555-0129'
!cust_ind_nadine7.driverLicenseState := #CT
!cust_ind_nadine7.driverLicenseNumber := 44981207
!cust_ind_nadine7.driverLicenseExpirationDate := Date('2026-10-31')

!new RentalAgreement('ra_700001')
!ra_700001.number := 700001
!ra_700001.rentalDate := Date('2026-03-01')
!ra_700001.anticipatedDuration := 60
!ra_700001.depositPaid := 0.00
!ra_700001.quotedDailyRate := 74.00
!ra_700001.quotedRatePerMile := 0.00

!new RentalAgreement('ra_700002')
!ra_700002.number := 700002
!ra_700002.rentalDate := Date('2026-03-05')
!ra_700002.anticipatedDuration := 2
!ra_700002.depositPaid := 1200.00
!ra_700002.quotedDailyRate := 209.00
!ra_700002.quotedRatePerMile := 0.99

!new RentalAgreement('ra_700003')
!ra_700003.number := 700003
!ra_700003.rentalDate := Date('2026-03-10')
!ra_700003.anticipatedDuration := 1
!ra_700003.depositPaid := 100.00
!ra_700003.quotedDailyRate := 49.00
!ra_700003.quotedRatePerMile := 0.00

!new RentalAgreement('ra_700004')
!ra_700004.number := 700004
!ra_700004.rentalDate := Date('2026-03-12')
!ra_700004.anticipatedDuration := 7
!ra_700004.depositPaid := 300.00
!ra_700004.quotedDailyRate := 139.00
!ra_700004.quotedRatePerMile := 0.82

!new RentalAgreement('ra_700005')
!ra_700005.number := 700005
!ra_700005.rentalDate := Date('2026-03-20')
!ra_700005.anticipatedDuration := 3
!ra_700005.depositPaid := 0.00
!ra_700005.quotedDailyRate := 35.00
!ra_700005.quotedRatePerMile := 0.00

!insert (office_de_regional7, ra_700001) into RentalOfficeRentalAgreementOrigin
!insert (office_ct_service7, ra_700001) into RentalOfficeRentalAgreementDrop
!insert (ra_700001, truck_de_24ft_701) into RentalAgreementVehicle
!insert (ra_700001, cust_co_harborstone7) into RentalAgreementCustomer

!insert (office_de_regional7, ra_700002) into RentalOfficeRentalAgreementOrigin
!insert (office_ca_return7, ra_700002) into RentalOfficeRentalAgreementDrop
!insert (ra_700002, truck_de_24ft_701) into RentalAgreementVehicle
!insert (ra_700002, cust_co_harborstone7) into RentalAgreementCustomer

!insert (office_ct_service7, ra_700003) into RentalOfficeRentalAgreementOrigin
!insert (office_ct_service7, ra_700003) into RentalOfficeRentalAgreementDrop
!insert (ra_700003, truck_ct_10ft_702) into RentalAgreementVehicle
!insert (ra_700003, cust_ind_nadine7) into RentalAgreementCustomer

!insert (office_ca_return7, ra_700004) into RentalOfficeRentalAgreementOrigin
!insert (office_de_regional7, ra_700004) into RentalOfficeRentalAgreementDrop
!insert (ra_700004, trailer_ca_covered_703) into RentalAgreementVehicle
!insert (ra_700004, cust_ind_nadine7) into RentalAgreementCustomer

!insert (office_ct_service7, ra_700005) into RentalOfficeRentalAgreementOrigin
!insert (office_de_regional7, ra_700005) into RentalOfficeRentalAgreementDrop
!insert (ra_700005, truck_ct_10ft_702) into RentalAgreementVehicle
!insert (ra_700005, cust_co_harborstone7) into RentalAgreementCustomer
```
## Generation 20 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 112 | 0.00% |
| Multiplicities Errors | 0 | 23 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 0 | 5 | 0.00% |
| License Plates | 3 | 3 | 100.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid License Plates | 
|---| 
```
DE-TRK-70101
```
```
CT-TRK-70102
```
```
CA-TRL-70903
```

# Generation 21
```
!new RentalOffice('office_online_center8')
!office_online_center8.name := 'National Online Booking Center'
!office_online_center8.number := 8001
!office_online_center8.address := '500 Central Ave, Wilmington, DE 19801'

!new RentalOffice('office_fleet_yard8')
!office_fleet_yard8.name := 'Fleet Pool & Maintenance Yard'
!office_fleet_yard8.number := 8002
!office_fleet_yard8.address := '2500 Industrial Pkwy, Hartford, CT 06120'

!new RentalOffice('office_drop_hub8')
!office_drop_hub8.name := 'Coastal Drop Hub'
!office_drop_hub8.number := 8003
!office_drop_hub8.address := '901 Harbor Blvd, Miami, FL 33132'

!new Truck('truck_fl_24ft_801')
!truck_fl_24ft_801.id := 88001
!truck_fl_24ft_801.registrationState := #FL
!truck_fl_24ft_801.licensePlateNumber := 'FL-TRK-88001'
!truck_fl_24ft_801.vehicleTypeCode := #TRUCK24
!truck_fl_24ft_801.registrationLastMaintenanceDate := Date('2026-06-04')
!truck_fl_24ft_801.expirationDate := Date('2027-06-30')
!truck_fl_24ft_801.odometerReading := 210455
!truck_fl_24ft_801.gasTankCapacity := 64.0
!truck_fl_24ft_801.workingRadio := true
!truck_fl_24ft_801.mileage := 8

!new Truck('truck_de_standard_802')
!truck_de_standard_802.id := 88002
!truck_de_standard_802.registrationState := #DE
!truck_de_standard_802.licensePlateNumber := 'DE-TRK-88002'
!truck_de_standard_802.vehicleTypeCode := #TRUCK
!truck_de_standard_802.registrationLastMaintenanceDate := Date('2026-05-22')
!truck_de_standard_802.expirationDate := Date('2027-05-31')
!truck_de_standard_802.odometerReading := 48210
!truck_de_standard_802.gasTankCapacity := 47.5
!truck_de_standard_802.workingRadio := false
!truck_de_standard_802.mileage := 12

!new Vehicle('trailer_ct_covered_803')
!trailer_ct_covered_803.id := 89003
!trailer_ct_covered_803.registrationState := #CT
!trailer_ct_covered_803.licensePlateNumber := 'CT-TRL-89003'
!trailer_ct_covered_803.vehicleTypeCode := #COVERED_TRAILER
!trailer_ct_covered_803.registrationLastMaintenanceDate := Date('2026-04-30')
!trailer_ct_covered_803.expirationDate := Date('2027-04-30')

!new Vehicle('trailer_ak_open_804')
!trailer_ak_open_804.id := 89004
!trailer_ak_open_804.registrationState := #AK
!trailer_ak_open_804.licensePlateNumber := 'AK-TRL-89004'
!trailer_ak_open_804.vehicleTypeCode := #OPEN_TRAILER
!trailer_ak_open_804.registrationLastMaintenanceDate := Date('2026-01-26')
!trailer_ak_open_804.expirationDate := Date('2026-12-31')

!insert (office_fleet_yard8, truck_fl_24ft_801) into RentalOfficeVehicle
!insert (office_fleet_yard8, truck_de_standard_802) into RentalOfficeVehicle
!insert (office_fleet_yard8, trailer_ct_covered_803) into RentalOfficeVehicle
!insert (office_drop_hub8, trailer_ak_open_804) into RentalOfficeVehicle

!new Company('cust_co_nightowl8')
!cust_co_nightowl8.name := 'NightOwl Film Services'
!cust_co_nightowl8.address := '18 Studio Way, Stamford, CT 06902'
!cust_co_nightowl8.poorRisk := false
!cust_co_nightowl8.idNumber := 88014021

!new Company('cust_co_budgethaul8')
!cust_co_budgethaul8.name := 'BudgetHaul Wholesale'
!cust_co_budgethaul8.address := '2100 NW 7th Ave, Miami, FL 33127'
!cust_co_budgethaul8.poorRisk := true
!cust_co_budgethaul8.idNumber := 88019990

!new Individual('cust_ind_samira8')
!cust_ind_samira8.name := 'Samira Hassan'
!cust_ind_samira8.address := '740 NE 14th St, Miami, FL 33132'
!cust_ind_samira8.poorRisk := false
!cust_ind_samira8.homePhone := '305-555-0118'
!cust_ind_samira8.driverLicenseState := #FL
!cust_ind_samira8.driverLicenseNumber := 61245019
!cust_ind_samira8.driverLicenseExpirationDate := Date('2029-04-15')

!new RentalAgreement('ra_800001')
!ra_800001.number := 800001
!ra_800001.rentalDate := Date('2026-02-02')
!ra_800001.anticipatedDuration := 2
!ra_800001.depositPaid := 200.00
!ra_800001.quotedDailyRate := 0.00
!ra_800001.quotedRatePerMile := 1.25

!new RentalAgreement('ra_800002')
!ra_800002.number := 800002
!ra_800002.rentalDate := Date('2026-02-10')
!ra_800002.anticipatedDuration := 180
!ra_800002.depositPaid := 0.00
!ra_800002.quotedDailyRate := 45.00
!ra_800002.quotedRatePerMile := 0.00

!new RentalAgreement('ra_800003')
!ra_800003.number := 800003
!ra_800003.rentalDate := Date('2026-02-14')
!ra_800003.anticipatedDuration := 10
!ra_800003.depositPaid := 1000.00
!ra_800003.quotedDailyRate := 99.00
!ra_800003.quotedRatePerMile := 0.55

!new RentalAgreement('ra_800004')
!ra_800004.number := 800004
!ra_800004.rentalDate := Date('2026-03-01')
!ra_800004.anticipatedDuration := 7
!ra_800004.depositPaid := 50.00
!ra_800004.quotedDailyRate := 25.00
!ra_800004.quotedRatePerMile := 0.00

!insert (office_online_center8, ra_800001) into RentalOfficeRentalAgreementOrigin
!insert (office_drop_hub8, ra_800001) into RentalOfficeRentalAgreementDrop
!insert (ra_800001, truck_fl_24ft_801) into RentalAgreementVehicle
!insert (ra_800001, cust_ind_samira8) into RentalAgreementCustomer

!insert (office_online_center8, ra_800002) into RentalOfficeRentalAgreementOrigin
!insert (office_fleet_yard8, ra_800002) into RentalOfficeRentalAgreementDrop
!insert (ra_800002, trailer_ct_covered_803) into RentalAgreementVehicle
!insert (ra_800002, cust_co_nightowl8) into RentalAgreementCustomer

!insert (office_drop_hub8, ra_800003) into RentalOfficeRentalAgreementOrigin
!insert (office_drop_hub8, ra_800003) into RentalOfficeRentalAgreementDrop
!insert (ra_800003, truck_de_standard_802) into RentalAgreementVehicle
!insert (ra_800003, cust_co_budgethaul8) into RentalAgreementCustomer

!insert (office_fleet_yard8, ra_800004) into RentalOfficeRentalAgreementOrigin
!insert (office_online_center8, ra_800004) into RentalOfficeRentalAgreementDrop
!insert (ra_800004, trailer_ak_open_804) into RentalAgreementVehicle
!insert (ra_800004, cust_ind_samira8) into RentalAgreementCustomer
```
## Generation 21 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 114 | 0.00% |
| Multiplicities Errors | 0 | 20 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 4 | 6 | 66.67% |
| License Plates | 4 | 4 | 100.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
500 Central Ave, Wilmington, DE 19801
```
```
2500 Industrial Pkwy, Hartford, CT 06120
```
```
901 Harbor Blvd, Miami, FL 33132
```
```
740 NE 14th St, Miami, FL 33132
```

| Invalid License Plates | 
|---| 
```
FL-TRK-88001
```
```
DE-TRK-88002
```
```
CT-TRL-89003
```
```
AK-TRL-89004
```

# Generation 22
```
!new RentalOffice('office_reservations9')
!office_reservations9.name := 'Southwest Reservations Desk'
!office_reservations9.number := 9000
!office_reservations9.address := '1100 N Market St, Wilmington, DE 19801'

!new RentalOffice('office_tempe9')
!office_tempe9.name := 'Tempe Truck & Trailer Rental'
!office_tempe9.number := 9001
!office_tempe9.address := '1420 W Broadway Rd, Tempe, AZ 85282'

!new RentalOffice('office_santa_monica9')
!office_santa_monica9.name := 'Westside Fleet Rentals - Santa Monica'
!office_santa_monica9.number := 9002
!office_santa_monica9.address := '1640 14th St, Santa Monica, CA 90404'

!new RentalOffice('office_jacksonville9')
!office_jacksonville9.name := 'Jacksonville Commercial Rentals'
!office_jacksonville9.number := 9003
!office_jacksonville9.address := '10200 Atlantic Blvd, Jacksonville, FL 32225'

!new Truck('truck_az_24ft_901')
!truck_az_24ft_901.id := 99001
!truck_az_24ft_901.registrationState := #AZ
!truck_az_24ft_901.licensePlateNumber := 'AZ-TRK-99001'
!truck_az_24ft_901.vehicleTypeCode := #TRUCK24
!truck_az_24ft_901.registrationLastMaintenanceDate := Date('2026-06-15')
!truck_az_24ft_901.expirationDate := Date('2027-06-30')
!truck_az_24ft_901.odometerReading := 58740
!truck_az_24ft_901.gasTankCapacity := 63.0
!truck_az_24ft_901.workingRadio := true
!truck_az_24ft_901.mileage := 9

!new Truck('truck_az_standard_902')
!truck_az_standard_902.id := 99002
!truck_az_standard_902.registrationState := #AZ
!truck_az_standard_902.licensePlateNumber := 'AZ-TRK-99002'
!truck_az_standard_902.vehicleTypeCode := #TRUCK
!truck_az_standard_902.registrationLastMaintenanceDate := Date('2026-05-09')
!truck_az_standard_902.expirationDate := Date('2027-05-31')
!truck_az_standard_902.odometerReading := 33305
!truck_az_standard_902.gasTankCapacity := 52.5
!truck_az_standard_902.workingRadio := false
!truck_az_standard_902.mileage := 12

!new Truck('truck_ca_10ft_903')
!truck_ca_10ft_903.id := 99003
!truck_ca_10ft_903.registrationState := #CA
!truck_ca_10ft_903.licensePlateNumber := 'CA-TRK-99003'
!truck_ca_10ft_903.vehicleTypeCode := #TRUCK10
!truck_ca_10ft_903.registrationLastMaintenanceDate := Date('2026-04-18')
!truck_ca_10ft_903.expirationDate := Date('2027-04-30')
!truck_ca_10ft_903.odometerReading := 14080
!truck_ca_10ft_903.gasTankCapacity := 32.0
!truck_ca_10ft_903.workingRadio := true
!truck_ca_10ft_903.mileage := 17

!new Vehicle('trailer_az_open_904')
!trailer_az_open_904.id := 99104
!trailer_az_open_904.registrationState := #AZ
!trailer_az_open_904.licensePlateNumber := 'AZ-TRL-99104'
!trailer_az_open_904.vehicleTypeCode := #OPEN_TRAILER
!trailer_az_open_904.registrationLastMaintenanceDate := Date('2026-02-12')
!trailer_az_open_904.expirationDate := Date('2027-02-28')

!new Vehicle('trailer_ca_covered_905')
!trailer_ca_covered_905.id := 99105
!trailer_ca_covered_905.registrationState := #CA
!trailer_ca_covered_905.licensePlateNumber := 'CA-TRL-99105'
!trailer_ca_covered_905.vehicleTypeCode := #COVERED_TRAILER
!trailer_ca_covered_905.registrationLastMaintenanceDate := Date('2026-03-28')
!trailer_ca_covered_905.expirationDate := Date('2027-03-31')

!new Vehicle('trailer_de_open_906')
!trailer_de_open_906.id := 99106
!trailer_de_open_906.registrationState := #DE
!trailer_de_open_906.licensePlateNumber := 'DE-TRL-99106'
!trailer_de_open_906.vehicleTypeCode := #OPEN_TRAILER
!trailer_de_open_906.registrationLastMaintenanceDate := Date('2026-01-20')
!trailer_de_open_906.expirationDate := Date('2026-12-31')

!insert (office_tempe9, truck_az_24ft_901) into RentalOfficeVehicle
!insert (office_tempe9, truck_az_standard_902) into RentalOfficeVehicle
!insert (office_santa_monica9, truck_ca_10ft_903) into RentalOfficeVehicle
!insert (office_tempe9, trailer_az_open_904) into RentalOfficeVehicle
!insert (office_santa_monica9, trailer_ca_covered_905) into RentalOfficeVehicle
!insert (office_jacksonville9, trailer_de_open_906) into RentalOfficeVehicle

!new Individual('cust_ind_riley9')
!cust_ind_riley9.name := 'Riley Thompson'
!cust_ind_riley9.address := '525 S Mill Ave, Tempe, AZ 85281'
!cust_ind_riley9.poorRisk := false
!cust_ind_riley9.homePhone := '480-555-0120'
!cust_ind_riley9.driverLicenseState := #AZ
!cust_ind_riley9.driverLicenseNumber := 77155021
!cust_ind_riley9.driverLicenseExpirationDate := Date('2028-05-31')

!new Individual('cust_ind_faith9')
!cust_ind_faith9.name := 'Faith Delgado'
!cust_ind_faith9.address := '231 Ocean Park Blvd, Santa Monica, CA 90405'
!cust_ind_faith9.poorRisk := true
!cust_ind_faith9.homePhone := '310-555-0193'
!cust_ind_faith9.driverLicenseState := #CA
!cust_ind_faith9.driverLicenseNumber := 40592118
!cust_ind_faith9.driverLicenseExpirationDate := Date('2026-09-30')

!new Company('cust_co_mesa9')
!cust_co_mesa9.name := 'MesaLab Scientific Services'
!cust_co_mesa9.address := '1830 S Country Club Dr, Mesa, AZ 85210'
!cust_co_mesa9.poorRisk := false
!cust_co_mesa9.idNumber := 90077110

!new Company('cust_co_citrus9')
!cust_co_citrus9.name := 'Citrus Coast Imports LLC'
!cust_co_citrus9.address := '4100 Sunbeam Rd, Jacksonville, FL 32257'
!cust_co_citrus9.poorRisk := false
!cust_co_citrus9.idNumber := 90088231

!new RentalAgreement('ra_900901')
!ra_900901.number := 900901
!ra_900901.rentalDate := Date('2026-01-19')
!ra_900901.anticipatedDuration := 6
!ra_900901.depositPaid := 750.00
!ra_900901.quotedDailyRate := 165.00
!ra_900901.quotedRatePerMile := 0.85

!new RentalAgreement('ra_900902')
!ra_900902.number := 900902
!ra_900902.rentalDate := Date('2026-01-22')
!ra_900902.anticipatedDuration := 4
!ra_900902.depositPaid := 0.00
!ra_900902.quotedDailyRate := 39.95
!ra_900902.quotedRatePerMile := 0.00

!new RentalAgreement('ra_900903')
!ra_900903.number := 900903
!ra_900903.rentalDate := Date('2026-01-25')
!ra_900903.anticipatedDuration := 8
!ra_900903.depositPaid := 1200.00
!ra_900903.quotedDailyRate := 189.00
!ra_900903.quotedRatePerMile := 0.92

!new RentalAgreement('ra_900904')
!ra_900904.number := 900904
!ra_900904.rentalDate := Date('2026-01-26')
!ra_900904.anticipatedDuration := 14
!ra_900904.depositPaid := 300.00
!ra_900904.quotedDailyRate := 27.00
!ra_900904.quotedRatePerMile := 0.00

!new RentalAgreement('ra_900905')
!ra_900905.number := 900905
!ra_900905.rentalDate := Date('2026-02-02')
!ra_900905.anticipatedDuration := 1
!ra_900905.depositPaid := 150.00
!ra_900905.quotedDailyRate := 49.00
!ra_900905.quotedRatePerMile := 0.00

!new RentalAgreement('ra_900906')
!ra_900906.number := 900906
!ra_900906.rentalDate := Date('2026-02-10')
!ra_900906.anticipatedDuration := 2
!ra_900906.depositPaid := 100.00
!ra_900906.quotedDailyRate := 0.00
!ra_900906.quotedRatePerMile := 1.10

!insert (office_reservations9, ra_900901) into RentalOfficeRentalAgreementOrigin
!insert (office_tempe9, ra_900901) into RentalOfficeRentalAgreementDrop
!insert (ra_900901, truck_az_24ft_901) into RentalAgreementVehicle
!insert (ra_900901, cust_co_mesa9) into RentalAgreementCustomer

!insert (office_tempe9, ra_900902) into RentalOfficeRentalAgreementOrigin
!insert (office_santa_monica9, ra_900902) into RentalOfficeRentalAgreementDrop
!insert (ra_900902, trailer_az_open_904) into RentalAgreementVehicle
!insert (ra_900902, cust_ind_riley9) into RentalAgreementCustomer

!insert (office_santa_monica9, ra_900903) into RentalOfficeRentalAgreementOrigin
!insert (office_jacksonville9, ra_900903) into RentalOfficeRentalAgreementDrop
!insert (ra_900903, truck_ca_10ft_903) into RentalAgreementVehicle
!insert (ra_900903, cust_co_citrus9) into RentalAgreementCustomer

!insert (office_jacksonville9, ra_900904) into RentalOfficeRentalAgreementOrigin
!insert (office_jacksonville9, ra_900904) into RentalOfficeRentalAgreementDrop
!insert (ra_900904, trailer_de_open_906) into RentalAgreementVehicle
!insert (ra_900904, cust_co_citrus9) into RentalAgreementCustomer

!insert (office_reservations9, ra_900905) into RentalOfficeRentalAgreementOrigin
!insert (office_santa_monica9, ra_900905) into RentalOfficeRentalAgreementDrop
!insert (ra_900905, trailer_ca_covered_905) into RentalAgreementVehicle
!insert (ra_900905, cust_ind_faith9) into RentalAgreementCustomer

!insert (office_tempe9, ra_900906) into RentalOfficeRentalAgreementOrigin
!insert (office_tempe9, ra_900906) into RentalOfficeRentalAgreementDrop
!insert (ra_900906, truck_az_standard_902) into RentalAgreementVehicle
!insert (ra_900906, cust_ind_riley9) into RentalAgreementCustomer
```
## Generation 22 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 168 | 0.00% |
| Multiplicities Errors | 0 | 30 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 0 | 8 | 0.00% |
| License Plates | 6 | 6 | 100.00% |
| Home Phones | 0 | 2 | 0.00% |

| Invalid License Plates | 
|---| 
```
AZ-TRK-99001
```
```
AZ-TRK-99002
```
```
CA-TRK-99003
```
```
AZ-TRL-99104
```
```
CA-TRL-99105
```
```
DE-TRL-99106
```

# Generation 23
```
!new RentalOffice('office_callcenter10')
!office_callcenter10.name := 'National Booking Hotline Center'
!office_callcenter10.number := 10010
!office_callcenter10.address := '2000 Reservation Blvd, Wilmington, DE 19801'

!new RentalOffice('office_philadelphia_yard10')
!office_philadelphia_yard10.name := 'Mid-Atlantic Fleet Yard - Philadelphia'
!office_philadelphia_yard10.number := 10011
!office_philadelphia_yard10.address := '4600 Island Ave, Philadelphia, PA 19153'

!new RentalOffice('office_orange_county_return10')
!office_orange_county_return10.name := 'Orange County Return Yard - Anaheim'
!office_orange_county_return10.number := 10012
!office_orange_county_return10.address := '1290 S Anaheim Blvd, Anaheim, CA 92805'

!new Truck('truck_de_24ft_10a')
!truck_de_24ft_10a.id := 51010
!truck_de_24ft_10a.registrationState := #DE
!truck_de_24ft_10a.licensePlateNumber := 'DE-TRK-51010'
!truck_de_24ft_10a.vehicleTypeCode := #TRUCK24
!truck_de_24ft_10a.registrationLastMaintenanceDate := Date('2026-06-08')
!truck_de_24ft_10a.expirationDate := Date('2027-06-30')
!truck_de_24ft_10a.odometerReading := 132405
!truck_de_24ft_10a.gasTankCapacity := 65.0
!truck_de_24ft_10a.workingRadio := true
!truck_de_24ft_10a.mileage := 8

!new Truck('truck_ct_10ft_10b')
!truck_ct_10ft_10b.id := 51011
!truck_ct_10ft_10b.registrationState := #CT
!truck_ct_10ft_10b.licensePlateNumber := 'CT-TRK-51011'
!truck_ct_10ft_10b.vehicleTypeCode := #TRUCK10
!truck_ct_10ft_10b.registrationLastMaintenanceDate := Date('2026-05-14')
!truck_ct_10ft_10b.expirationDate := Date('2027-05-31')
!truck_ct_10ft_10b.odometerReading := 28490
!truck_ct_10ft_10b.gasTankCapacity := 34.0
!truck_ct_10ft_10b.workingRadio := false
!truck_ct_10ft_10b.mileage := 16

!new Vehicle('trailer_ct_covered_10c')
!trailer_ct_covered_10c.id := 52010
!trailer_ct_covered_10c.registrationState := #CT
!trailer_ct_covered_10c.licensePlateNumber := 'CT-TRL-52010'
!trailer_ct_covered_10c.vehicleTypeCode := #COVERED_TRAILER
!trailer_ct_covered_10c.registrationLastMaintenanceDate := Date('2026-04-02')
!trailer_ct_covered_10c.expirationDate := Date('2027-04-30')

!insert (office_philadelphia_yard10, truck_de_24ft_10a) into RentalOfficeVehicle
!insert (office_philadelphia_yard10, truck_ct_10ft_10b) into RentalOfficeVehicle
!insert (office_philadelphia_yard10, trailer_ct_covered_10c) into RentalOfficeVehicle

!new Individual('cust_ind_morgan10')
!cust_ind_morgan10.name := 'Morgan Ellis'
!cust_ind_morgan10.address := '41 S 3rd St, Newark, DE 19711'
!cust_ind_morgan10.poorRisk := false
!cust_ind_morgan10.homePhone := '302-555-0140'
!cust_ind_morgan10.driverLicenseState := #DE
!cust_ind_morgan10.driverLicenseNumber := 61044022
!cust_ind_morgan10.driverLicenseExpirationDate := Date('2028-08-31')

!new Individual('cust_ind_tanya10')
!cust_ind_tanya10.name := 'Tanya Brooks'
!cust_ind_tanya10.address := '88 Park St, Hartford, CT 06106'
!cust_ind_tanya10.poorRisk := true
!cust_ind_tanya10.homePhone := '860-555-0111'
!cust_ind_tanya10.driverLicenseState := #CT
!cust_ind_tanya10.driverLicenseNumber := 90331107
!cust_ind_tanya10.driverLicenseExpirationDate := Date('2026-12-31')

!new Company('cust_co_northline10')
!cust_co_northline10.name := 'NorthLine Exhibit & Trade Services'
!cust_co_northline10.address := '700 Essington Ave, Philadelphia, PA 19153'
!cust_co_northline10.poorRisk := false
!cust_co_northline10.idNumber := 31061010

!new RentalAgreement('ra_100100')
!ra_100100.number := 100100
!ra_100100.rentalDate := Date('2026-01-03')
!ra_100100.anticipatedDuration := 1
!ra_100100.depositPaid := 300.00
!ra_100100.quotedDailyRate := 0.00
!ra_100100.quotedRatePerMile := 1.15

!new RentalAgreement('ra_1001010')
!ra_1001010.number := 1001010
!ra_1001010.rentalDate := Date('2026-01-10')
!ra_1001010.anticipatedDuration := 14
!ra_1001010.depositPaid := 0.00
!ra_1001010.quotedDailyRate := 59.00
!ra_1001010.quotedRatePerMile := 0.00

!new RentalAgreement('ra_1001020')
!ra_1001020.number := 1001020
!ra_1001020.rentalDate := Date('2026-01-18')
!ra_1001020.anticipatedDuration := 3
!ra_1001020.depositPaid := 800.00
!ra_1001020.quotedDailyRate := 189.00
!ra_1001020.quotedRatePerMile := 0.95

!new RentalAgreement('ra_1001030')
!ra_1001030.number := 1001030
!ra_1001030.rentalDate := Date('2026-02-01')
!ra_1001030.anticipatedDuration := 30
!ra_1001030.depositPaid := 500.00
!ra_1001030.quotedDailyRate := 35.00
!ra_1001030.quotedRatePerMile := 0.00

!new RentalAgreement('ra_1001040')
!ra_1001040.number := 1001040
!ra_1001040.rentalDate := Date('2026-02-20')
!ra_1001040.anticipatedDuration := 2
!ra_1001040.depositPaid := 150.00
!ra_1001040.quotedDailyRate := 49.00
!ra_1001040.quotedRatePerMile := 0.00

!insert (office_callcenter10, ra_100100) into RentalOfficeRentalAgreementOrigin
!insert (office_philadelphia_yard10, ra_100100) into RentalOfficeRentalAgreementDrop
!insert (ra_100100, truck_ct_10ft_10b) into RentalAgreementVehicle
!insert (ra_100100, cust_ind_morgan10) into RentalAgreementCustomer

!insert (office_callcenter10, ra_1001010) into RentalOfficeRentalAgreementOrigin
!insert (office_orange_county_return10, ra_1001010) into RentalOfficeRentalAgreementDrop
!insert (ra_1001010, trailer_ct_covered_10c) into RentalAgreementVehicle
!insert (ra_1001010, cust_co_northline10) into RentalAgreementCustomer

!insert (office_philadelphia_yard10, ra_1001020) into RentalOfficeRentalAgreementOrigin
!insert (office_philadelphia_yard10, ra_1001020) into RentalOfficeRentalAgreementDrop
!insert (ra_1001020, truck_de_24ft_10a) into RentalAgreementVehicle
!insert (ra_1001020, cust_ind_tanya10) into RentalAgreementCustomer

!insert (office_callcenter10, ra_1001030) into RentalOfficeRentalAgreementOrigin
!insert (office_philadelphia_yard10, ra_1001030) into RentalOfficeRentalAgreementDrop
!insert (ra_1001030, truck_de_24ft_10a) into RentalAgreementVehicle
!insert (ra_1001030, cust_co_northline10) into RentalAgreementCustomer

!insert (office_orange_county_return10, ra_1001040) into RentalOfficeRentalAgreementOrigin
!insert (office_orange_county_return10, ra_1001040) into RentalOfficeRentalAgreementDrop
!insert (ra_1001040, truck_ct_10ft_10b) into RentalAgreementVehicle
!insert (ra_1001040, cust_ind_morgan10) into RentalAgreementCustomer
```
## Generation 23 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 120 | 0.00% |
| Multiplicities Errors | 0 | 23 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 3 | 6 | 50.00% |
| License Plates | 3 | 3 | 100.00% |
| Home Phones | 0 | 2 | 0.00% |

| Invalid Addresses | 
|---| 
```
2000 Reservation Blvd, Wilmington, DE 19801
```
```
41 S 3rd St, Newark, DE 19711
```
```
700 Essington Ave, Philadelphia, PA 19153
```

| Invalid License Plates | 
|---| 
```
DE-TRK-51010
```
```
CT-TRK-51011
```
```
CT-TRL-52010
```

# Generation 24
```
!new RentalOffice('office_keywest11')
!office_keywest11.name := 'Keys Vehicle Rental - Key West'
!office_keywest11.number := 11001
!office_keywest11.address := '2801 N Roosevelt Blvd, Key West, FL 33040'

!new RentalOffice('office_wilmington11')
!office_wilmington11.name := 'Delaware Fleet Desk - Wilmington'
!office_wilmington11.number := 11002
!office_wilmington11.address := '600 S Madison St, Wilmington, DE 19801'

!new RentalOffice('office_fortcollins11')
!office_fortcollins11.name := 'Front Range Returns - Fort Collins'
!office_fortcollins11.number := 11003
!office_fortcollins11.address := '4200 S College Ave, Fort Collins, CO 80525'

!new Truck('truck_fl_24ft_1101')
!truck_fl_24ft_1101.id := 110101
!truck_fl_24ft_1101.registrationState := #FL
!truck_fl_24ft_1101.licensePlateNumber := 'FL-TRK-110101'
!truck_fl_24ft_1101.vehicleTypeCode := #TRUCK24
!truck_fl_24ft_1101.registrationLastMaintenanceDate := Date('2026-06-30')
!truck_fl_24ft_1101.expirationDate := Date('2027-06-30')
!truck_fl_24ft_1101.odometerReading := 189005
!truck_fl_24ft_1101.gasTankCapacity := 64.0
!truck_fl_24ft_1101.workingRadio := false
!truck_fl_24ft_1101.mileage := 8

!new Vehicle('trailer_de_covered_1102')
!trailer_de_covered_1102.id := 110102
!trailer_de_covered_1102.registrationState := #DE
!trailer_de_covered_1102.licensePlateNumber := 'DE-TRL-110102'
!trailer_de_covered_1102.vehicleTypeCode := #COVERED_TRAILER
!trailer_de_covered_1102.registrationLastMaintenanceDate := Date('2026-05-18')
!trailer_de_covered_1102.expirationDate := Date('2027-05-31')

!new Vehicle('trailer_fl_open_1103')
!trailer_fl_open_1103.id := 110103
!trailer_fl_open_1103.registrationState := #FL
!trailer_fl_open_1103.licensePlateNumber := 'FL-TRL-110103'
!trailer_fl_open_1103.vehicleTypeCode := #OPEN_TRAILER
!trailer_fl_open_1103.registrationLastMaintenanceDate := Date('2026-04-02')
!trailer_fl_open_1103.expirationDate := Date('2027-04-30')

!insert (office_keywest11, truck_fl_24ft_1101) into RentalOfficeVehicle
!insert (office_wilmington11, trailer_de_covered_1102) into RentalOfficeVehicle
!insert (office_keywest11, trailer_fl_open_1103) into RentalOfficeVehicle

!new Individual('cust_ind_mei11')
!cust_ind_mei11.name := 'Mei Larson'
!cust_ind_mei11.address := '1010 Whitehead St, Key West, FL 33040'
!cust_ind_mei11.poorRisk := false
!cust_ind_mei11.homePhone := '305-555-0133'
!cust_ind_mei11.driverLicenseState := #FL
!cust_ind_mei11.driverLicenseNumber := 70031122
!cust_ind_mei11.driverLicenseExpirationDate := Date('2029-07-31')

!new Company('cust_co_seabreeze11')
!cust_co_seabreeze11.name := 'SeaBreeze Marine Supply Co.'
!cust_co_seabreeze11.address := '801 N Market St, Wilmington, DE 19801'
!cust_co_seabreeze11.poorRisk := true
!cust_co_seabreeze11.idNumber := 11088001

!new Company('cust_co_mountainlab11')
!cust_co_mountainlab11.name := 'MountainLab Instruments'
!cust_co_mountainlab11.address := '300 Pine St, Fort Collins, CO 80524'
!cust_co_mountainlab11.poorRisk := false
!cust_co_mountainlab11.idNumber := 11088002

!new RentalAgreement('ra_110001')
!ra_110001.number := 110001
!ra_110001.rentalDate := Date('2026-01-04')
!ra_110001.anticipatedDuration := 1
!ra_110001.depositPaid := 0.00
!ra_110001.quotedDailyRate := 0.00
!ra_110001.quotedRatePerMile := 1.35

!new RentalAgreement('ra_110002')
!ra_110002.number := 110002
!ra_110002.rentalDate := Date('2026-01-06')
!ra_110002.anticipatedDuration := 10
!ra_110002.depositPaid := 350.00
!ra_110002.quotedDailyRate := 29.00
!ra_110002.quotedRatePerMile := 0.00

!new RentalAgreement('ra_110003')
!ra_110003.number := 110003
!ra_110003.rentalDate := Date('2026-01-10')
!ra_110003.anticipatedDuration := 5
!ra_110003.depositPaid := 1200.00
!ra_110003.quotedDailyRate := 210.00
!ra_110003.quotedRatePerMile := 0.95

!new RentalAgreement('ra_110004')
!ra_110004.number := 110004
!ra_110004.rentalDate := Date('2026-01-18')
!ra_110004.anticipatedDuration := 30
!ra_110004.depositPaid := 0.00
!ra_110004.quotedDailyRate := 49.50
!ra_110004.quotedRatePerMile := 0.00

!new RentalAgreement('ra_110005')
!ra_110005.number := 110005
!ra_110005.rentalDate := Date('2026-02-01')
!ra_110005.anticipatedDuration := 2
!ra_110005.depositPaid := 200.00
!ra_110005.quotedDailyRate := 0.00
!ra_110005.quotedRatePerMile := 0.90

!new RentalAgreement('ra_110006')
!ra_110006.number := 110006
!ra_110006.rentalDate := Date('2026-02-12')
!ra_110006.anticipatedDuration := 3
!ra_110006.depositPaid := 900.00
!ra_110006.quotedDailyRate := 189.00
!ra_110006.quotedRatePerMile := 0.98

!insert (office_wilmington11, ra_110001) into RentalOfficeRentalAgreementOrigin
!insert (office_keywest11, ra_110001) into RentalOfficeRentalAgreementDrop
!insert (ra_110001, truck_fl_24ft_1101) into RentalAgreementVehicle
!insert (ra_110001, cust_co_mountainlab11) into RentalAgreementCustomer

!insert (office_keywest11, ra_110002) into RentalOfficeRentalAgreementOrigin
!insert (office_keywest11, ra_110002) into RentalOfficeRentalAgreementDrop
!insert (ra_110002, trailer_fl_open_1103) into RentalAgreementVehicle
!insert (ra_110002, cust_ind_mei11) into RentalAgreementCustomer

!insert (office_fortcollins11, ra_110003) into RentalOfficeRentalAgreementOrigin
!insert (office_fortcollins11, ra_110003) into RentalOfficeRentalAgreementDrop
!insert (ra_110003, truck_fl_24ft_1101) into RentalAgreementVehicle
!insert (ra_110003, cust_co_seabreeze11) into RentalAgreementCustomer

!insert (office_wilmington11, ra_110004) into RentalOfficeRentalAgreementOrigin
!insert (office_fortcollins11, ra_110004) into RentalOfficeRentalAgreementDrop
!insert (ra_110004, trailer_de_covered_1102) into RentalAgreementVehicle
!insert (ra_110004, cust_co_seabreeze11) into RentalAgreementCustomer

!insert (office_keywest11, ra_110005) into RentalOfficeRentalAgreementOrigin
!insert (office_wilmington11, ra_110005) into RentalOfficeRentalAgreementDrop
!insert (ra_110005, trailer_fl_open_1103) into RentalAgreementVehicle
!insert (ra_110005, cust_co_mountainlab11) into RentalAgreementCustomer

!insert (office_wilmington11, ra_110006) into RentalOfficeRentalAgreementOrigin
!insert (office_keywest11, ra_110006) into RentalOfficeRentalAgreementDrop
!insert (ra_110006, truck_fl_24ft_1101) into RentalAgreementVehicle
!insert (ra_110006, cust_ind_mei11) into RentalAgreementCustomer
```
## Generation 24 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 124 | 0.00% |
| Multiplicities Errors | 0 | 27 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 1 | 6 | 16.67% |
| License Plates | 3 | 3 | 100.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
300 Pine St, Fort Collins, CO 80524
```

| Invalid License Plates | 
|---| 
```
FL-TRK-110101
```
```
DE-TRL-110102
```
```
FL-TRL-110103
```

# Generation 25
```
!new RentalOffice('office_denver_fleet12')
!office_denver_fleet12.name := 'High Plains Fleet Pool - Denver'
!office_denver_fleet12.number := 12001
!office_denver_fleet12.address := '5200 Havana St, Denver, CO 80239'

!new RentalOffice('office_hartford_counter12')
!office_hartford_counter12.name := 'Hartford Airport Rental Counter'
!office_hartford_counter12.number := 12002
!office_hartford_counter12.address := '11 Schoephoester Rd, Windsor Locks, CT 06096'

!new RentalOffice('office_wilmington_drop12')
!office_wilmington_drop12.name := 'Wilmington Commercial Drop Yard'
!office_wilmington_drop12.number := 12003
!office_wilmington_drop12.address := '300 Terminal Ave, Wilmington, DE 19801'

!new RentalOffice('office_anchorage_counter12')
!office_anchorage_counter12.name := 'Anchorage Downtown Pickup'
!office_anchorage_counter12.number := 12004
!office_anchorage_counter12.address := '601 W 5th Ave, Anchorage, AK 99501'

!new Truck('truck_co_24ft_1201')
!truck_co_24ft_1201.id := 312001
!truck_co_24ft_1201.registrationState := #CO
!truck_co_24ft_1201.licensePlateNumber := 'CO-TRK-1201'
!truck_co_24ft_1201.vehicleTypeCode := #TRUCK24
!truck_co_24ft_1201.registrationLastMaintenanceDate := Date('2026-06-05')
!truck_co_24ft_1201.expirationDate := Date('2027-06-30')
!truck_co_24ft_1201.odometerReading := 158220
!truck_co_24ft_1201.gasTankCapacity := 64.0
!truck_co_24ft_1201.workingRadio := true
!truck_co_24ft_1201.mileage := 8

!new Truck('truck_de_10ft_1202')
!truck_de_10ft_1202.id := 312002
!truck_de_10ft_1202.registrationState := #DE
!truck_de_10ft_1202.licensePlateNumber := 'DE-TRK-1202'
!truck_de_10ft_1202.vehicleTypeCode := #TRUCK10
!truck_de_10ft_1202.registrationLastMaintenanceDate := Date('2026-05-19')
!truck_de_10ft_1202.expirationDate := Date('2027-05-31')
!truck_de_10ft_1202.odometerReading := 24550
!truck_de_10ft_1202.gasTankCapacity := 33.0
!truck_de_10ft_1202.workingRadio := false
!truck_de_10ft_1202.mileage := 16

!new Vehicle('trailer_co_covered_1203')
!trailer_co_covered_1203.id := 412003
!trailer_co_covered_1203.registrationState := #CO
!trailer_co_covered_1203.licensePlateNumber := 'CO-TRL-1203'
!trailer_co_covered_1203.vehicleTypeCode := #COVERED_TRAILER
!trailer_co_covered_1203.registrationLastMaintenanceDate := Date('2026-04-28')
!trailer_co_covered_1203.expirationDate := Date('2027-04-30')

!new Vehicle('trailer_ak_open_1204')
!trailer_ak_open_1204.id := 412004
!trailer_ak_open_1204.registrationState := #AK
!trailer_ak_open_1204.licensePlateNumber := 'AK-TRL-1204'
!trailer_ak_open_1204.vehicleTypeCode := #OPEN_TRAILER
!trailer_ak_open_1204.registrationLastMaintenanceDate := Date('2026-01-22')
!trailer_ak_open_1204.expirationDate := Date('2026-12-31')

!insert (office_denver_fleet12, truck_co_24ft_1201) into RentalOfficeVehicle
!insert (office_denver_fleet12, truck_de_10ft_1202) into RentalOfficeVehicle
!insert (office_denver_fleet12, trailer_co_covered_1203) into RentalOfficeVehicle
!insert (office_denver_fleet12, trailer_ak_open_1204) into RentalOfficeVehicle

!new Individual('cust_ind_luke12')
!cust_ind_luke12.name := 'Luke Harrington'
!cust_ind_luke12.address := '44 Alton Rd, Wilmington, DE 19810'
!cust_ind_luke12.poorRisk := true
!cust_ind_luke12.homePhone := '302-555-0138'
!cust_ind_luke12.driverLicenseState := #DE
!cust_ind_luke12.driverLicenseNumber := 50122874
!cust_ind_luke12.driverLicenseExpirationDate := Date('2026-07-31')

!new Individual('cust_ind_sonia12')
!cust_ind_sonia12.name := 'Sonia Patel'
!cust_ind_sonia12.address := '19 Garden St, Hartford, CT 06105'
!cust_ind_sonia12.poorRisk := false
!cust_ind_sonia12.homePhone := '860-555-0175'
!cust_ind_sonia12.driverLicenseState := #CT
!cust_ind_sonia12.driverLicenseNumber := 74201955
!cust_ind_sonia12.driverLicenseExpirationDate := Date('2028-02-28')

!new Company('cust_co_auroraworks12')
!cust_co_auroraworks12.name := 'AuroraWorks Industrial Services'
!cust_co_auroraworks12.address := '9000 E 40th Ave, Denver, CO 80238'
!cust_co_auroraworks12.poorRisk := false
!cust_co_auroraworks12.idNumber := 12088011

!new RentalAgreement('ra_1200012')
!ra_1200012.number := 1200012
!ra_1200012.rentalDate := Date('2026-02-01')
!ra_1200012.anticipatedDuration := 2
!ra_1200012.depositPaid := 500.00
!ra_1200012.quotedDailyRate := 0.00
!ra_1200012.quotedRatePerMile := 1.20

!new RentalAgreement('ra_1200013')
!ra_1200013.number := 1200013
!ra_1200013.rentalDate := Date('2026-02-03')
!ra_1200013.anticipatedDuration := 14
!ra_1200013.depositPaid := 0.00
!ra_1200013.quotedDailyRate := 55.00
!ra_1200013.quotedRatePerMile := 0.00

!new RentalAgreement('ra_1200014')
!ra_1200014.number := 1200014
!ra_1200014.rentalDate := Date('2026-02-10')
!ra_1200014.anticipatedDuration := 1
!ra_1200014.depositPaid := 200.00
!ra_1200014.quotedDailyRate := 95.00
!ra_1200014.quotedRatePerMile := 0.75

!new RentalAgreement('ra_1200015')
!ra_1200015.number := 1200015
!ra_1200015.rentalDate := Date('2026-02-14')
!ra_1200015.anticipatedDuration := 30
!ra_1200015.depositPaid := 1000.00
!ra_1200015.quotedDailyRate := 79.00
!ra_1200015.quotedRatePerMile := 0.40

!new RentalAgreement('ra_1200016')
!ra_1200016.number := 1200016
!ra_1200016.rentalDate := Date('2026-03-01')
!ra_1200016.anticipatedDuration := 3
!ra_1200016.depositPaid := 0.00
!ra_1200016.quotedDailyRate := 39.95
!ra_1200016.quotedRatePerMile := 0.00

!insert (office_anchorage_counter12, ra_1200012) into RentalOfficeRentalAgreementOrigin
!insert (office_denver_fleet12, ra_1200012) into RentalOfficeRentalAgreementDrop
!insert (ra_1200012, trailer_ak_open_1204) into RentalAgreementVehicle
!insert (ra_1200012, cust_ind_sonia12) into RentalAgreementCustomer

!insert (office_hartford_counter12, ra_1200013) into RentalOfficeRentalAgreementOrigin
!insert (office_wilmington_drop12, ra_1200013) into RentalOfficeRentalAgreementDrop
!insert (ra_1200013, truck_de_10ft_1202) into RentalAgreementVehicle
!insert (ra_1200013, cust_ind_luke12) into RentalAgreementCustomer

!insert (office_denver_fleet12, ra_1200014) into RentalOfficeRentalAgreementOrigin
!insert (office_denver_fleet12, ra_1200014) into RentalOfficeRentalAgreementDrop
!insert (ra_1200014, truck_co_24ft_1201) into RentalAgreementVehicle
!insert (ra_1200014, cust_co_auroraworks12) into RentalAgreementCustomer

!insert (office_denver_fleet12, ra_1200015) into RentalOfficeRentalAgreementOrigin
!insert (office_anchorage_counter12, ra_1200015) into RentalOfficeRentalAgreementDrop
!insert (ra_1200015, trailer_co_covered_1203) into RentalAgreementVehicle
!insert (ra_1200015, cust_co_auroraworks12) into RentalAgreementCustomer

!insert (office_wilmington_drop12, ra_1200016) into RentalOfficeRentalAgreementOrigin
!insert (office_hartford_counter12, ra_1200016) into RentalOfficeRentalAgreementDrop
!insert (ra_1200016, truck_de_10ft_1202) into RentalAgreementVehicle
!insert (ra_1200016, cust_ind_sonia12) into RentalAgreementCustomer
```
## Generation 25 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 132 | 0.00% |
| Multiplicities Errors | 0 | 24 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 2 | 7 | 28.57% |
| License Plates | 0 | 4 | 0.00% |
| Home Phones | 0 | 2 | 0.00% |

| Invalid Addresses | 
|---| 
```
44 Alton Rd, Wilmington, DE 19810
```
```
9000 E 40th Ave, Denver, CO 80238
```

# Generation 26
```
!new RentalOffice('office_mesa13')
!office_mesa13.name := 'East Valley Vehicle Rental - Mesa'
!office_mesa13.number := 13001
!office_mesa13.address := '1150 S Country Club Dr, Mesa, AZ 85210'

!new RentalOffice('office_sanbernardino13')
!office_sanbernardino13.name := 'Inland Empire Fleet Rentals - San Bernardino'
!office_sanbernardino13.number := 13002
!office_sanbernardino13.address := '400 S E St, San Bernardino, CA 92401'

!new RentalOffice('office_newlondon13')
!office_newlondon13.name := 'Thames Coast Rentals - New London'
!office_newlondon13.number := 13003
!office_newlondon13.address := '150 Pequot Ave, New London, CT 06320'

!new Truck('truck_az_24ft_1301')
!truck_az_24ft_1301.id := 130101
!truck_az_24ft_1301.registrationState := #AZ
!truck_az_24ft_1301.licensePlateNumber := 'AZ-TRK-1301'
!truck_az_24ft_1301.vehicleTypeCode := #TRUCK24
!truck_az_24ft_1301.registrationLastMaintenanceDate := Date('2026-06-12')
!truck_az_24ft_1301.expirationDate := Date('2027-06-30')
!truck_az_24ft_1301.odometerReading := 106440
!truck_az_24ft_1301.gasTankCapacity := 63.0
!truck_az_24ft_1301.workingRadio := true
!truck_az_24ft_1301.mileage := 9

!new Truck('truck_ca_10ft_1302')
!truck_ca_10ft_1302.id := 130102
!truck_ca_10ft_1302.registrationState := #CA
!truck_ca_10ft_1302.licensePlateNumber := 'CA-TRK-1302'
!truck_ca_10ft_1302.vehicleTypeCode := #TRUCK10
!truck_ca_10ft_1302.registrationLastMaintenanceDate := Date('2026-05-22')
!truck_ca_10ft_1302.expirationDate := Date('2027-05-31')
!truck_ca_10ft_1302.odometerReading := 18470
!truck_ca_10ft_1302.gasTankCapacity := 32.0
!truck_ca_10ft_1302.workingRadio := false
!truck_ca_10ft_1302.mileage := 17

!new Vehicle('trailer_ct_covered_1303')
!trailer_ct_covered_1303.id := 130103
!trailer_ct_covered_1303.registrationState := #CT
!trailer_ct_covered_1303.licensePlateNumber := 'CT-TRL-1303'
!trailer_ct_covered_1303.vehicleTypeCode := #COVERED_TRAILER
!trailer_ct_covered_1303.registrationLastMaintenanceDate := Date('2026-04-09')
!trailer_ct_covered_1303.expirationDate := Date('2027-04-30')

!new Vehicle('trailer_az_open_1304')
!trailer_az_open_1304.id := 130104
!trailer_az_open_1304.registrationState := #AZ
!trailer_az_open_1304.licensePlateNumber := 'AZ-TRL-1304'
!trailer_az_open_1304.vehicleTypeCode := #OPEN_TRAILER
!trailer_az_open_1304.registrationLastMaintenanceDate := Date('2026-03-18')
!trailer_az_open_1304.expirationDate := Date('2027-03-31')

!insert (office_mesa13, truck_az_24ft_1301) into RentalOfficeVehicle
!insert (office_sanbernardino13, truck_ca_10ft_1302) into RentalOfficeVehicle
!insert (office_newlondon13, trailer_ct_covered_1303) into RentalOfficeVehicle
!insert (office_mesa13, trailer_az_open_1304) into RentalOfficeVehicle

!new Company('cust_co_summitstaging13')
!cust_co_summitstaging13.name := 'Summit Staging & AV, LLC'
!cust_co_summitstaging13.address := '780 W Main St, Mesa, AZ 85201'
!cust_co_summitstaging13.poorRisk := false
!cust_co_summitstaging13.idNumber := 13055001

!new Individual('cust_ind_joel13')
!cust_ind_joel13.name := 'Joel Ramirez'
!cust_ind_joel13.address := '950 E 2nd St, San Bernardino, CA 92410'
!cust_ind_joel13.poorRisk := true
!cust_ind_joel13.homePhone := '909-555-0146'
!cust_ind_joel13.driverLicenseState := #CA
!cust_ind_joel13.driverLicenseNumber := 77214019
!cust_ind_joel13.driverLicenseExpirationDate := Date('2026-08-31')

!new Individual('cust_ind_emily13')
!cust_ind_emily13.name := 'Emily Chen'
!cust_ind_emily13.address := '12 Ocean Ave, New London, CT 06320'
!cust_ind_emily13.poorRisk := false
!cust_ind_emily13.homePhone := '860-555-0125'
!cust_ind_emily13.driverLicenseState := #CT
!cust_ind_emily13.driverLicenseNumber := 50190312
!cust_ind_emily13.driverLicenseExpirationDate := Date('2029-01-31')

!new RentalAgreement('ra_130001')
!ra_130001.number := 130001
!ra_130001.rentalDate := Date('2026-04-03')
!ra_130001.anticipatedDuration := 2
!ra_130001.depositPaid := 250.00
!ra_130001.quotedDailyRate := 0.00
!ra_130001.quotedRatePerMile := 1.05

!new RentalAgreement('ra_130002')
!ra_130002.number := 130002
!ra_130002.rentalDate := Date('2026-04-07')
!ra_130002.anticipatedDuration := 21
!ra_130002.depositPaid := 0.00
!ra_130002.quotedDailyRate := 49.00
!ra_130002.quotedRatePerMile := 0.00

!new RentalAgreement('ra_130003')
!ra_130003.number := 130003
!ra_130003.rentalDate := Date('2026-04-15')
!ra_130003.anticipatedDuration := 1
!ra_130003.depositPaid := 900.00
!ra_130003.quotedDailyRate := 199.00
!ra_130003.quotedRatePerMile := 0.95

!new RentalAgreement('ra_130004')
!ra_130004.number := 130004
!ra_130004.rentalDate := Date('2026-04-18')
!ra_130004.anticipatedDuration := 5
!ra_130004.depositPaid := 100.00
!ra_130004.quotedDailyRate := 32.00
!ra_130004.quotedRatePerMile := 0.00

!insert (office_mesa13, ra_130001) into RentalOfficeRentalAgreementOrigin
!insert (office_sanbernardino13, ra_130001) into RentalOfficeRentalAgreementDrop
!insert (ra_130001, truck_az_24ft_1301) into RentalAgreementVehicle
!insert (ra_130001, cust_co_summitstaging13) into RentalAgreementCustomer

!insert (office_newlondon13, ra_130002) into RentalOfficeRentalAgreementOrigin
!insert (office_newlondon13, ra_130002) into RentalOfficeRentalAgreementDrop
!insert (ra_130002, trailer_ct_covered_1303) into RentalAgreementVehicle
!insert (ra_130002, cust_ind_emily13) into RentalAgreementCustomer

!insert (office_sanbernardino13, ra_130003) into RentalOfficeRentalAgreementOrigin
!insert (office_mesa13, ra_130003) into RentalOfficeRentalAgreementDrop
!insert (ra_130003, truck_ca_10ft_1302) into RentalAgreementVehicle
!insert (ra_130003, cust_ind_joel13) into RentalAgreementCustomer

!insert (office_mesa13, ra_130004) into RentalOfficeRentalAgreementOrigin
!insert (office_mesa13, ra_130004) into RentalOfficeRentalAgreementDrop
!insert (ra_130004, trailer_az_open_1304) into RentalAgreementVehicle
!insert (ra_130004, cust_co_summitstaging13) into RentalAgreementCustomer
```
## Generation 26 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 117 | 0.00% |
| Multiplicities Errors | 0 | 20 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 0 | 6 | 0.00% |
| License Plates | 0 | 4 | 0.00% |
| Home Phones | 0 | 2 | 0.00% |

# Generation 27
```
!new RentalOffice('office_tucson14')
!office_tucson14.name := 'Sonoran Commercial Rentals - Tucson'
!office_tucson14.number := 14001
!office_tucson14.address := '2210 E Valencia Rd, Tucson, AZ 85706'

!new RentalOffice('office_colorado_springs14')
!office_colorado_springs14.name := 'Pikes Peak Return & Service - Colorado Springs'
!office_colorado_springs14.number := 14002
!office_colorado_springs14.address := '3775 Airport Rd, Colorado Springs, CO 80910'

!new RentalOffice('office_wilmington_admin14')
!office_wilmington_admin14.name := 'Delaware Corporate Admin Desk'
!office_wilmington_admin14.number := 14003
!office_wilmington_admin14.address := '900 N Market St, Wilmington, DE 19801'

!new Truck('truck_az_24ft_1401')
!truck_az_24ft_1401.id := 140101
!truck_az_24ft_1401.registrationState := #AZ
!truck_az_24ft_1401.licensePlateNumber := 'AZ-TRK-1401'
!truck_az_24ft_1401.vehicleTypeCode := #TRUCK24
!truck_az_24ft_1401.registrationLastMaintenanceDate := Date('2026-06-07')
!truck_az_24ft_1401.expirationDate := Date('2027-06-30')
!truck_az_24ft_1401.odometerReading := 60218
!truck_az_24ft_1401.gasTankCapacity := 63.0
!truck_az_24ft_1401.workingRadio := true
!truck_az_24ft_1401.mileage := 9

!new Truck('truck_co_10ft_1402')
!truck_co_10ft_1402.id := 140102
!truck_co_10ft_1402.registrationState := #CO
!truck_co_10ft_1402.licensePlateNumber := 'CO-TRK-1402'
!truck_co_10ft_1402.vehicleTypeCode := #TRUCK10
!truck_co_10ft_1402.registrationLastMaintenanceDate := Date('2026-05-11')
!truck_co_10ft_1402.expirationDate := Date('2027-05-31')
!truck_co_10ft_1402.odometerReading := 17890
!truck_co_10ft_1402.gasTankCapacity := 34.0
!truck_co_10ft_1402.workingRadio := false
!truck_co_10ft_1402.mileage := 16

!new Vehicle('trailer_az_covered_1403')
!trailer_az_covered_1403.id := 140103
!trailer_az_covered_1403.registrationState := #AZ
!trailer_az_covered_1403.licensePlateNumber := 'AZ-TRL-1403'
!trailer_az_covered_1403.vehicleTypeCode := #COVERED_TRAILER
!trailer_az_covered_1403.registrationLastMaintenanceDate := Date('2026-04-19')
!trailer_az_covered_1403.expirationDate := Date('2027-04-30')

!new Vehicle('trailer_de_open_1404')
!trailer_de_open_1404.id := 140104
!trailer_de_open_1404.registrationState := #DE
!trailer_de_open_1404.licensePlateNumber := 'DE-TRL-1404'
!trailer_de_open_1404.vehicleTypeCode := #OPEN_TRAILER
!trailer_de_open_1404.registrationLastMaintenanceDate := Date('2026-03-02')
!trailer_de_open_1404.expirationDate := Date('2027-03-31')

!insert (office_tucson14, truck_az_24ft_1401) into RentalOfficeVehicle
!insert (office_colorado_springs14, truck_co_10ft_1402) into RentalOfficeVehicle
!insert (office_tucson14, trailer_az_covered_1403) into RentalOfficeVehicle
!insert (office_wilmington_admin14, trailer_de_open_1404) into RentalOfficeVehicle

!new Company('cust_co_evergreen14')
!cust_co_evergreen14.name := 'Evergreen Facilities Group'
!cust_co_evergreen14.address := '1200 N Market St, Wilmington, DE 19801'
!cust_co_evergreen14.poorRisk := false
!cust_co_evergreen14.idNumber := 14088077

!new Individual('cust_ind_alina14')
!cust_ind_alina14.name := 'Alina Voss'
!cust_ind_alina14.address := '630 E Grant Rd, Tucson, AZ 85705'
!cust_ind_alina14.poorRisk := false
!cust_ind_alina14.homePhone := '520-555-0161'
!cust_ind_alina14.driverLicenseState := #AZ
!cust_ind_alina14.driverLicenseNumber := 50311982
!cust_ind_alina14.driverLicenseExpirationDate := Date('2028-11-30')

!new Individual('cust_ind_ben14')
!cust_ind_ben14.name := 'Ben Holloway'
!cust_ind_ben14.address := '11 N Tejon St, Colorado Springs, CO 80903'
!cust_ind_ben14.poorRisk := true
!cust_ind_ben14.homePhone := '719-555-0127'
!cust_ind_ben14.driverLicenseState := #CO
!cust_ind_ben14.driverLicenseNumber := 77190240
!cust_ind_ben14.driverLicenseExpirationDate := Date('2026-10-31')

!new RentalAgreement('ra_140001')
!ra_140001.number := 140001
!ra_140001.rentalDate := Date('2026-01-15')
!ra_140001.anticipatedDuration := 365
!ra_140001.depositPaid := 0.00
!ra_140001.quotedDailyRate := 22.00
!ra_140001.quotedRatePerMile := 0.00

!new RentalAgreement('ra_140002')
!ra_140002.number := 140002
!ra_140002.rentalDate := Date('2026-02-02')
!ra_140002.anticipatedDuration := 2
!ra_140002.depositPaid := 300.00
!ra_140002.quotedDailyRate := 0.00
!ra_140002.quotedRatePerMile := 1.18

!new RentalAgreement('ra_140003')
!ra_140003.number := 140003
!ra_140003.rentalDate := Date('2026-02-10')
!ra_140003.anticipatedDuration := 7
!ra_140003.depositPaid := 500.00
!ra_140003.quotedDailyRate := 59.00
!ra_140003.quotedRatePerMile := 0.00

!new RentalAgreement('ra_140004')
!ra_140004.number := 140004
!ra_140004.rentalDate := Date('2026-02-18')
!ra_140004.anticipatedDuration := 1
!ra_140004.depositPaid := 150.00
!ra_140004.quotedDailyRate := 45.00
!ra_140004.quotedRatePerMile := 0.00

!new RentalAgreement('ra_140005')
!ra_140005.number := 140005
!ra_140005.rentalDate := Date('2026-03-01')
!ra_140005.anticipatedDuration := 10
!ra_140005.depositPaid := 800.00
!ra_140005.quotedDailyRate := 129.00
!ra_140005.quotedRatePerMile := 0.72

!new RentalAgreement('ra_140006')
!ra_140006.number := 140006
!ra_140006.rentalDate := Date('2026-03-05')
!ra_140006.anticipatedDuration := 3
!ra_140006.depositPaid := 0.00
!ra_140006.quotedDailyRate := 28.00
!ra_140006.quotedRatePerMile := 0.00

!insert (office_wilmington_admin14, ra_140001) into RentalOfficeRentalAgreementOrigin
!insert (office_wilmington_admin14, ra_140001) into RentalOfficeRentalAgreementDrop
!insert (ra_140001, trailer_de_open_1404) into RentalAgreementVehicle
!insert (ra_140001, cust_co_evergreen14) into RentalAgreementCustomer

!insert (office_tucson14, ra_140002) into RentalOfficeRentalAgreementOrigin
!insert (office_colorado_springs14, ra_140002) into RentalOfficeRentalAgreementDrop
!insert (ra_140002, truck_az_24ft_1401) into RentalAgreementVehicle
!insert (ra_140002, cust_ind_alina14) into RentalAgreementCustomer

!insert (office_colorado_springs14, ra_140003) into RentalOfficeRentalAgreementOrigin
!insert (office_colorado_springs14, ra_140003) into RentalOfficeRentalAgreementDrop
!insert (ra_140003, truck_co_10ft_1402) into RentalAgreementVehicle
!insert (ra_140003, cust_ind_ben14) into RentalAgreementCustomer

!insert (office_tucson14, ra_140004) into RentalOfficeRentalAgreementOrigin
!insert (office_tucson14, ra_140004) into RentalOfficeRentalAgreementDrop
!insert (ra_140004, trailer_az_covered_1403) into RentalAgreementVehicle
!insert (ra_140004, cust_ind_alina14) into RentalAgreementCustomer

!insert (office_wilmington_admin14, ra_140005) into RentalOfficeRentalAgreementOrigin
!insert (office_tucson14, ra_140005) into RentalOfficeRentalAgreementDrop
!insert (ra_140005, truck_az_24ft_1401) into RentalAgreementVehicle
!insert (ra_140005, cust_co_evergreen14) into RentalAgreementCustomer

!insert (office_wilmington_admin14, ra_140006) into RentalOfficeRentalAgreementOrigin
!insert (office_colorado_springs14, ra_140006) into RentalOfficeRentalAgreementDrop
!insert (ra_140006, trailer_de_open_1404) into RentalAgreementVehicle
!insert (ra_140006, cust_ind_ben14) into RentalAgreementCustomer
```
## Generation 27 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 139 | 0.00% |
| Multiplicities Errors | 0 | 28 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 0 | 6 | 0.00% |
| License Plates | 0 | 4 | 0.00% |
| Home Phones | 0 | 2 | 0.00% |

# Generation 28
```
!new RentalOffice('office_fleet_hub15')
!office_fleet_hub15.name := 'West Coast Fleet Hub'
!office_fleet_hub15.number := 15001
!office_fleet_hub15.address := '8900 Slauson Ave, Los Angeles, CA 90040'

!new RentalOffice('office_backoffice15')
!office_backoffice15.name := 'Customer Care & Billing Office'
!office_backoffice15.number := 15002
!office_backoffice15.address := '151 Farmington Ave, Hartford, CT 06105'

!new RentalOffice('office_event_popup15')
!office_event_popup15.name := 'Seasonal Pickup Counter - Jacksonville'
!office_event_popup15.number := 15003
!office_event_popup15.address := '2400 Monument Rd, Jacksonville, FL 32225'

!new RentalOffice('office_remote_drop15')
!office_remote_drop15.name := 'Remote Drop Lot - Flagstaff'
!office_remote_drop15.number := 15004
!office_remote_drop15.address := '5200 N US Highway 89, Flagstaff, AZ 86004'

!new Truck('truck_ca_24ft_1501')
!truck_ca_24ft_1501.id := 515001
!truck_ca_24ft_1501.registrationState := #CA
!truck_ca_24ft_1501.licensePlateNumber := 'CA-TRK-15A01'
!truck_ca_24ft_1501.vehicleTypeCode := #TRUCK24
!truck_ca_24ft_1501.registrationLastMaintenanceDate := Date('2026-06-16')
!truck_ca_24ft_1501.expirationDate := Date('2027-06-30')
!truck_ca_24ft_1501.odometerReading := 221905
!truck_ca_24ft_1501.gasTankCapacity := 65.0
!truck_ca_24ft_1501.workingRadio := true
!truck_ca_24ft_1501.mileage := 8

!new Truck('truck_ca_10ft_1502')
!truck_ca_10ft_1502.id := 515002
!truck_ca_10ft_1502.registrationState := #CA
!truck_ca_10ft_1502.licensePlateNumber := 'CA-TRK-15B02'
!truck_ca_10ft_1502.vehicleTypeCode := #TRUCK10
!truck_ca_10ft_1502.registrationLastMaintenanceDate := Date('2026-05-09')
!truck_ca_10ft_1502.expirationDate := Date('2027-05-31')
!truck_ca_10ft_1502.odometerReading := 40880
!truck_ca_10ft_1502.gasTankCapacity := 33.0
!truck_ca_10ft_1502.workingRadio := false
!truck_ca_10ft_1502.mileage := 16

!new Vehicle('trailer_ca_open_1503')
!trailer_ca_open_1503.id := 525003
!trailer_ca_open_1503.registrationState := #CA
!trailer_ca_open_1503.licensePlateNumber := 'CA-TRL-15C03'
!trailer_ca_open_1503.vehicleTypeCode := #OPEN_TRAILER
!trailer_ca_open_1503.registrationLastMaintenanceDate := Date('2026-04-04')
!trailer_ca_open_1503.expirationDate := Date('2027-04-30')

!new Vehicle('trailer_ca_covered_1504')
!trailer_ca_covered_1504.id := 525004
!trailer_ca_covered_1504.registrationState := #CA
!trailer_ca_covered_1504.licensePlateNumber := 'CA-TRL-15D04'
!trailer_ca_covered_1504.vehicleTypeCode := #COVERED_TRAILER
!trailer_ca_covered_1504.registrationLastMaintenanceDate := Date('2026-03-11')
!trailer_ca_covered_1504.expirationDate := Date('2027-03-31')

!insert (office_fleet_hub15, truck_ca_24ft_1501) into RentalOfficeVehicle
!insert (office_fleet_hub15, truck_ca_10ft_1502) into RentalOfficeVehicle
!insert (office_fleet_hub15, trailer_ca_open_1503) into RentalOfficeVehicle
!insert (office_fleet_hub15, trailer_ca_covered_1504) into RentalOfficeVehicle

!new Company('cust_co_stagecraft15')
!cust_co_stagecraft15.name := 'StageCraft Touring Services'
!cust_co_stagecraft15.address := '3100 E 46th St, Los Angeles, CA 90058'
!cust_co_stagecraft15.poorRisk := false
!cust_co_stagecraft15.idNumber := 15077001

!new Individual('cust_ind_noah15')
!cust_ind_noah15.name := 'Noah Kim'
!cust_ind_noah15.address := '34 Park Pl, Hartford, CT 06106'
!cust_ind_noah15.poorRisk := false
!cust_ind_noah15.homePhone := '860-555-0144'
!cust_ind_noah15.driverLicenseState := #CT
!cust_ind_noah15.driverLicenseNumber := 60441982
!cust_ind_noah15.driverLicenseExpirationDate := Date('2029-03-31')

!new Individual('cust_ind_iris15')
!cust_ind_iris15.name := 'Iris Delgado'
!cust_ind_iris15.address := '88 Beach Blvd, Jacksonville, FL 32250'
!cust_ind_iris15.poorRisk := true
!cust_ind_iris15.homePhone := '904-555-0129'
!cust_ind_iris15.driverLicenseState := #FL
!cust_ind_iris15.driverLicenseNumber := 33099110
!cust_ind_iris15.driverLicenseExpirationDate := Date('2026-05-31')

!new RentalAgreement('ra_150001')
!ra_150001.number := 150001
!ra_150001.rentalDate := Date('2026-01-08')
!ra_150001.anticipatedDuration := 120
!ra_150001.depositPaid := 0.00
!ra_150001.quotedDailyRate := 89.00
!ra_150001.quotedRatePerMile := 0.00

!new RentalAgreement('ra_150002')
!ra_150002.number := 150002
!ra_150002.rentalDate := Date('2026-01-12')
!ra_150002.anticipatedDuration := 1
!ra_150002.depositPaid := 150.00
!ra_150002.quotedDailyRate := 0.00
!ra_150002.quotedRatePerMile := 1.30

!new RentalAgreement('ra_150003')
!ra_150003.number := 150003
!ra_150003.rentalDate := Date('2026-01-15')
!ra_150003.anticipatedDuration := 7
!ra_150003.depositPaid := 700.00
!ra_150003.quotedDailyRate := 179.00
!ra_150003.quotedRatePerMile := 0.90

!new RentalAgreement('ra_150004')
!ra_150004.number := 150004
!ra_150004.rentalDate := Date('2026-02-01')
!ra_150004.anticipatedDuration := 3
!ra_150004.depositPaid := 0.00
!ra_150004.quotedDailyRate := 35.00
!ra_150004.quotedRatePerMile := 0.00

!new RentalAgreement('ra_150005')
!ra_150005.number := 150005
!ra_150005.rentalDate := Date('2026-02-10')
!ra_150005.anticipatedDuration := 2
!ra_150005.depositPaid := 400.00
!ra_150005.quotedDailyRate := 0.00
!ra_150005.quotedRatePerMile := 0.95

!insert (office_backoffice15, ra_150001) into RentalOfficeRentalAgreementOrigin
!insert (office_fleet_hub15, ra_150001) into RentalOfficeRentalAgreementDrop
!insert (ra_150001, trailer_ca_covered_1504) into RentalAgreementVehicle
!insert (ra_150001, cust_co_stagecraft15) into RentalAgreementCustomer

!insert (office_event_popup15, ra_150002) into RentalOfficeRentalAgreementOrigin
!insert (office_remote_drop15, ra_150002) into RentalOfficeRentalAgreementDrop
!insert (ra_150002, truck_ca_10ft_1502) into RentalAgreementVehicle
!insert (ra_150002, cust_ind_iris15) into RentalAgreementCustomer

!insert (office_backoffice15, ra_150003) into RentalOfficeRentalAgreementOrigin
!insert (office_event_popup15, ra_150003) into RentalOfficeRentalAgreementDrop
!insert (ra_150003, truck_ca_24ft_1501) into RentalAgreementVehicle
!insert (ra_150003, cust_co_stagecraft15) into RentalAgreementCustomer

!insert (office_remote_drop15, ra_150004) into RentalOfficeRentalAgreementOrigin
!insert (office_remote_drop15, ra_150004) into RentalOfficeRentalAgreementDrop
!insert (ra_150004, trailer_ca_open_1503) into RentalAgreementVehicle
!insert (ra_150004, cust_ind_noah15) into RentalAgreementCustomer

!insert (office_backoffice15, ra_150005) into RentalOfficeRentalAgreementOrigin
!insert (office_backoffice15, ra_150005) into RentalOfficeRentalAgreementDrop
!insert (ra_150005, truck_ca_10ft_1502) into RentalAgreementVehicle
!insert (ra_150005, cust_ind_noah15) into RentalAgreementCustomer
```
## Generation 28 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 132 | 0.00% |
| Multiplicities Errors | 0 | 24 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 1 | 7 | 14.29% |
| License Plates | 4 | 4 | 100.00% |
| Home Phones | 0 | 2 | 0.00% |

| Invalid Addresses | 
|---| 
```
5200 N US Highway 89, Flagstaff, AZ 86004
```

| Invalid License Plates | 
|---| 
```
CA-TRK-15A01
```
```
CA-TRK-15B02
```
```
CA-TRL-15C03
```
```
CA-TRL-15D04
```

# Generation 29
```
!new RentalOffice('office_norwich16')
!office_norwich16.name := 'Southeast Connecticut Rentals - Norwich'
!office_norwich16.number := 1601
!office_norwich16.address := '55 Salem Tpke, Norwich, CT 06360'

!new RentalOffice('office_yuma16')
!office_yuma16.name := 'Desert Crossing Rentals - Yuma'
!office_yuma16.number := 1602
!office_yuma16.address := '3990 S 4th Ave, Yuma, AZ 85365'

!new RentalOffice('office_bocaraton16')
!office_bocaraton16.name := 'Palm Coast Vehicle Rental - Boca Raton'
!office_bocaraton16.number := 1603
!office_bocaraton16.address := '2100 NW 2nd Ave, Boca Raton, FL 33431'

!new Truck('truck_ct_standard_16')
!truck_ct_standard_16.id := 160001
!truck_ct_standard_16.registrationState := #CT
!truck_ct_standard_16.licensePlateNumber := 'CT-TRK-160001'
!truck_ct_standard_16.vehicleTypeCode := #TRUCK
!truck_ct_standard_16.registrationLastMaintenanceDate := Date('2026-06-20')
!truck_ct_standard_16.expirationDate := Date('2027-06-30')
!truck_ct_standard_16.odometerReading := 47650
!truck_ct_standard_16.gasTankCapacity := 49.0
!truck_ct_standard_16.workingRadio := true
!truck_ct_standard_16.mileage := 12

!new Vehicle('trailer_ct_open_16')
!trailer_ct_open_16.id := 160101
!trailer_ct_open_16.registrationState := #CT
!trailer_ct_open_16.licensePlateNumber := 'CT-TRL-160101'
!trailer_ct_open_16.vehicleTypeCode := #OPEN_TRAILER
!trailer_ct_open_16.registrationLastMaintenanceDate := Date('2026-05-02')
!trailer_ct_open_16.expirationDate := Date('2027-05-31')

!new Vehicle('trailer_az_covered_16')
!trailer_az_covered_16.id := 160201
!trailer_az_covered_16.registrationState := #AZ
!trailer_az_covered_16.licensePlateNumber := 'AZ-TRL-160201'
!trailer_az_covered_16.vehicleTypeCode := #COVERED_TRAILER
!trailer_az_covered_16.registrationLastMaintenanceDate := Date('2026-04-14')
!trailer_az_covered_16.expirationDate := Date('2027-04-30')

!new Truck('truck_fl_24ft_16')
!truck_fl_24ft_16.id := 160301
!truck_fl_24ft_16.registrationState := #FL
!truck_fl_24ft_16.licensePlateNumber := 'FL-TRK-160301'
!truck_fl_24ft_16.vehicleTypeCode := #TRUCK24
!truck_fl_24ft_16.registrationLastMaintenanceDate := Date('2026-06-01')
!truck_fl_24ft_16.expirationDate := Date('2027-05-31')
!truck_fl_24ft_16.odometerReading := 118905
!truck_fl_24ft_16.gasTankCapacity := 64.0
!truck_fl_24ft_16.workingRadio := false
!truck_fl_24ft_16.mileage := 9

!insert (office_norwich16, truck_ct_standard_16) into RentalOfficeVehicle
!insert (office_norwich16, trailer_ct_open_16) into RentalOfficeVehicle
!insert (office_yuma16, trailer_az_covered_16) into RentalOfficeVehicle
!insert (office_bocaraton16, truck_fl_24ft_16) into RentalOfficeVehicle

!new Individual('cust_ind_hugo16')
!cust_ind_hugo16.name := 'Hugo Santoro'
!cust_ind_hugo16.address := '9 Washington St, Norwich, CT 06360'
!cust_ind_hugo16.poorRisk := false
!cust_ind_hugo16.homePhone := '860-555-0187'
!cust_ind_hugo16.driverLicenseState := #CT
!cust_ind_hugo16.driverLicenseNumber := 50977124
!cust_ind_hugo16.driverLicenseExpirationDate := Date('2028-05-31')

!new Individual('cust_ind_maya16')
!cust_ind_maya16.name := 'Maya Feldman'
!cust_ind_maya16.address := '1400 E Palmetto Park Rd, Boca Raton, FL 33432'
!cust_ind_maya16.poorRisk := true
!cust_ind_maya16.homePhone := '561-555-0123'
!cust_ind_maya16.driverLicenseState := #FL
!cust_ind_maya16.driverLicenseNumber := 66144029
!cust_ind_maya16.driverLicenseExpirationDate := Date('2026-09-30')

!new Company('cust_co_saguaro16')
!cust_co_saguaro16.name := 'Saguaro Field Services'
!cust_co_saguaro16.address := '2850 S Avenue 3E, Yuma, AZ 85365'
!cust_co_saguaro16.poorRisk := false
!cust_co_saguaro16.idNumber := 16088055

!new RentalAgreement('ra_160001')
!ra_160001.number := 160001
!ra_160001.rentalDate := Date('2026-03-03')
!ra_160001.anticipatedDuration := 1
!ra_160001.depositPaid := 0.00
!ra_160001.quotedDailyRate := 0.00
!ra_160001.quotedRatePerMile := 1.05

!new RentalAgreement('ra_160002')
!ra_160002.number := 160002
!ra_160002.rentalDate := Date('2026-03-04')
!ra_160002.anticipatedDuration := 10
!ra_160002.depositPaid := 600.00
!ra_160002.quotedDailyRate := 155.00
!ra_160002.quotedRatePerMile := 0.80

!new RentalAgreement('ra_160003')
!ra_160003.number := 160003
!ra_160003.rentalDate := Date('2026-03-10')
!ra_160003.anticipatedDuration := 45
!ra_160003.depositPaid := 0.00
!ra_160003.quotedDailyRate := 42.00
!ra_160003.quotedRatePerMile := 0.00

!new RentalAgreement('ra_160004')
!ra_160004.number := 160004
!ra_160004.rentalDate := Date('2026-03-15')
!ra_160004.anticipatedDuration := 3
!ra_160004.depositPaid := 250.00
!ra_160004.quotedDailyRate := 0.00
!ra_160004.quotedRatePerMile := 0.95

!new RentalAgreement('ra_160005')
!ra_160005.number := 160005
!ra_160005.rentalDate := Date('2026-04-01')
!ra_160005.anticipatedDuration := 2
!ra_160005.depositPaid := 900.00
!ra_160005.quotedDailyRate := 199.00
!ra_160005.quotedRatePerMile := 0.92

!insert (office_norwich16, ra_160001) into RentalOfficeRentalAgreementOrigin
!insert (office_norwich16, ra_160001) into RentalOfficeRentalAgreementDrop
!insert (ra_160001, trailer_ct_open_16) into RentalAgreementVehicle
!insert (ra_160001, cust_ind_hugo16) into RentalAgreementCustomer

!insert (office_bocaraton16, ra_160002) into RentalOfficeRentalAgreementOrigin
!insert (office_norwich16, ra_160002) into RentalOfficeRentalAgreementDrop
!insert (ra_160002, truck_fl_24ft_16) into RentalAgreementVehicle
!insert (ra_160002, cust_co_saguaro16) into RentalAgreementCustomer

!insert (office_yuma16, ra_160003) into RentalOfficeRentalAgreementOrigin
!insert (office_yuma16, ra_160003) into RentalOfficeRentalAgreementDrop
!insert (ra_160003, trailer_az_covered_16) into RentalAgreementVehicle
!insert (ra_160003, cust_co_saguaro16) into RentalAgreementCustomer

!insert (office_bocaraton16, ra_160004) into RentalOfficeRentalAgreementOrigin
!insert (office_bocaraton16, ra_160004) into RentalOfficeRentalAgreementDrop
!insert (ra_160004, truck_fl_24ft_16) into RentalAgreementVehicle
!insert (ra_160004, cust_ind_maya16) into RentalAgreementCustomer

!insert (office_norwich16, ra_160005) into RentalOfficeRentalAgreementOrigin
!insert (office_yuma16, ra_160005) into RentalOfficeRentalAgreementDrop
!insert (ra_160005, truck_ct_standard_16) into RentalAgreementVehicle
!insert (ra_160005, cust_ind_hugo16) into RentalAgreementCustomer
```
## Generation 29 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 128 | 0.00% |
| Multiplicities Errors | 0 | 24 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 2 | 6 | 33.33% |
| License Plates | 4 | 4 | 100.00% |
| Home Phones | 0 | 2 | 0.00% |

| Invalid Addresses | 
|---| 
```
1400 E Palmetto Park Rd, Boca Raton, FL 33432
```
```
2850 S Avenue 3E, Yuma, AZ 85365
```

| Invalid License Plates | 
|---| 
```
CT-TRK-160001
```
```
CT-TRL-160101
```
```
AZ-TRL-160201
```
```
FL-TRK-160301
```

# Generation 30
```
!new RentalOffice('office_hartford_ct16b')
!office_hartford_ct16b.name := 'Capitol Region Trailer Rentals - Hartford'
!office_hartford_ct16b.number := 16010
!office_hartford_ct16b.address := '90 Weston St, Hartford, CT 06120'

!new RentalOffice('office_newark_de16b')
!office_newark_de16b.name := 'Christiana Drop Yard - Newark'
!office_newark_de16b.number := 16011
!office_newark_de16b.address := '4100 Ogletown Stanton Rd, Newark, DE 19713'

!new RentalOffice('office_miami_fl16b')
!office_miami_fl16b.name := 'Port of Miami Trailer Counter'
!office_miami_fl16b.number := 16012
!office_miami_fl16b.address := '1015 N America Way, Miami, FL 33132'

!new Vehicle('trailer_ct_covered_16b01')
!trailer_ct_covered_16b01.id := 160901
!trailer_ct_covered_16b01.registrationState := #CT
!trailer_ct_covered_16b01.licensePlateNumber := 'CT-TRL-160901'
!trailer_ct_covered_16b01.vehicleTypeCode := #COVERED_TRAILER
!trailer_ct_covered_16b01.registrationLastMaintenanceDate := Date('2026-06-01')
!trailer_ct_covered_16b01.expirationDate := Date('2027-05-31')

!new Vehicle('trailer_fl_open_16b02')
!trailer_fl_open_16b02.id := 160902
!trailer_fl_open_16b02.registrationState := #FL
!trailer_fl_open_16b02.licensePlateNumber := 'FL-TRL-160902'
!trailer_fl_open_16b02.vehicleTypeCode := #OPEN_TRAILER
!trailer_fl_open_16b02.registrationLastMaintenanceDate := Date('2026-04-20')
!trailer_fl_open_16b02.expirationDate := Date('2027-04-30')

!insert (office_hartford_ct16b, trailer_ct_covered_16b01) into RentalOfficeVehicle
!insert (office_miami_fl16b, trailer_fl_open_16b02) into RentalOfficeVehicle

!new Company('cust_co_archivestorage16b')
!cust_co_archivestorage16b.name := 'ArchiveStorage Services LLC'
!cust_co_archivestorage16b.address := '12 Research Pkwy, Hartford, CT 06120'
!cust_co_archivestorage16b.poorRisk := false
!cust_co_archivestorage16b.idNumber := 16050101

!new Individual('cust_ind_kendra16b')
!cust_ind_kendra16b.name := 'Kendra Wallace'
!cust_ind_kendra16b.address := '85 Haines St, Newark, DE 19711'
!cust_ind_kendra16b.poorRisk := false
!cust_ind_kendra16b.homePhone := '302-555-0108'
!cust_ind_kendra16b.driverLicenseState := #DE
!cust_ind_kendra16b.driverLicenseNumber := 50993321
!cust_ind_kendra16b.driverLicenseExpirationDate := Date('2028-10-31')

!new Individual('cust_ind_omar16b')
!cust_ind_omar16b.name := 'Omar Haddad'
!cust_ind_omar16b.address := '151 SE 1st St, Miami, FL 33131'
!cust_ind_omar16b.poorRisk := true
!cust_ind_omar16b.homePhone := '305-555-0172'
!cust_ind_omar16b.driverLicenseState := #FL
!cust_ind_omar16b.driverLicenseNumber := 77120018
!cust_ind_omar16b.driverLicenseExpirationDate := Date('2026-08-31')

!new RentalAgreement('ra_16b_001')
!ra_16b_001.number := 160001
!ra_16b_001.rentalDate := Date('2026-05-06')
!ra_16b_001.anticipatedDuration := 28
!ra_16b_001.depositPaid := 0.00
!ra_16b_001.quotedDailyRate := 35.00
!ra_16b_001.quotedRatePerMile := 0.00

!new RentalAgreement('ra_16b_002')
!ra_16b_002.number := 160002
!ra_16b_002.rentalDate := Date('2026-05-15')
!ra_16b_002.anticipatedDuration := 2
!ra_16b_002.depositPaid := 125.00
!ra_16b_002.quotedDailyRate := 0.00
!ra_16b_002.quotedRatePerMile := 0.85

!new RentalAgreement('ra_16b_003')
!ra_16b_003.number := 160003
!ra_16b_003.rentalDate := Date('2026-05-20')
!ra_16b_003.anticipatedDuration := 7
!ra_16b_003.depositPaid := 50.00
!ra_16b_003.quotedDailyRate := 22.00
!ra_16b_003.quotedRatePerMile := 0.00

!insert (office_hartford_ct16b, ra_16b_001) into RentalOfficeRentalAgreementOrigin
!insert (office_newark_de16b, ra_16b_001) into RentalOfficeRentalAgreementDrop
!insert (ra_16b_001, trailer_ct_covered_16b01) into RentalAgreementVehicle
!insert (ra_16b_001, cust_co_archivestorage16b) into RentalAgreementCustomer

!insert (office_newark_de16b, ra_16b_002) into RentalOfficeRentalAgreementOrigin
!insert (office_newark_de16b, ra_16b_002) into RentalOfficeRentalAgreementDrop
!insert (ra_16b_002, trailer_ct_covered_16b01) into RentalAgreementVehicle
!insert (ra_16b_002, cust_ind_kendra16b) into RentalAgreementCustomer

!insert (office_miami_fl16b, ra_16b_003) into RentalOfficeRentalAgreementOrigin
!insert (office_miami_fl16b, ra_16b_003) into RentalOfficeRentalAgreementDrop
!insert (ra_16b_003, trailer_fl_open_16b02) into RentalAgreementVehicle
!insert (ra_16b_003, cust_ind_omar16b) into RentalAgreementCustomer
```
## Generation 30 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 82 | 0.00% |
| Multiplicities Errors | 0 | 14 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 1 | 6 | 16.67% |
| License Plates | 2 | 2 | 100.00% |
| Home Phones | 0 | 2 | 0.00% |

| Invalid Addresses | 
|---| 
```
12 Research Pkwy, Hartford, CT 06120
```

| Invalid License Plates | 
|---| 
```
CT-TRL-160901
```
```
FL-TRL-160902
```

# Summary for all generations
| Summary | Value | 
|---|---| 
| Model | GPT_5_2 | 
| Type | Simple | 
| System | vehiclerental | 
| Number of generations | 30 | 

| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 3718 | 0.00% |
| Multiplicities Errors | 0 | 703 | 0.00% |
| Invariants Errors | 0 | 150 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 30 | 187 | 16.04% |
| License Plates | 50 | 115 | 43.48% |
| Home Phones | 0 | 48 | 0.00% |

| Invalid Addresses | 
|---| 
```
14 Oak Meadow Ln, West Hartford, CT 06107
```
```
545 Glacier Hwy, Juneau, AK 99801
```
```
27 Kentmere Pkwy, Wilmington, DE 19806
```
```
3601 E 7th St, Tucson, AZ 85716
```
```
2150 S Country Club Rd, Tucson, AZ 85713
```
```
18 E 7th St, New Castle, DE 19720
```
```
500 Waterfront Dr, New Castle, DE 19720
```
```
7350 Cargo Rd, Orlando, FL 32827
```
```
9107 Lakeside Dr, Orlando, FL 32810
```
```
4800 Innovation Dr, Orlando, FL 32826
```
```
1205 Carmichael Rd, Montgomery, AL 36106
```
```
1550 Industrial Dr, Pensacola, FL 32505
```
```
89 N Main St, Flagstaff, AZ 86001
```
```
1 Port of Wilmington Rd, Wilmington, DE 19801
```
```
400 Port Center Dr, Wilmington, DE 19801
```
```
5600 E Adamo Dr, Tampa, FL 33619
```
```
500 Central Ave, Wilmington, DE 19801
```
```
2500 Industrial Pkwy, Hartford, CT 06120
```
```
901 Harbor Blvd, Miami, FL 33132
```
```
740 NE 14th St, Miami, FL 33132
```
```
2000 Reservation Blvd, Wilmington, DE 19801
```
```
41 S 3rd St, Newark, DE 19711
```
```
700 Essington Ave, Philadelphia, PA 19153
```
```
300 Pine St, Fort Collins, CO 80524
```
```
44 Alton Rd, Wilmington, DE 19810
```
```
9000 E 40th Ave, Denver, CO 80238
```
```
5200 N US Highway 89, Flagstaff, AZ 86004
```
```
1400 E Palmetto Park Rd, Boca Raton, FL 33432
```
```
2850 S Avenue 3E, Yuma, AZ 85365
```
```
12 Research Pkwy, Hartford, CT 06120
```

| Invalid License Plates | 
|---| 
```
FL-TRK-92110
```
```
AZ-TRK-92111
```
```
DE-TRL-93112
```
```
FL-TRL-93113
```
```
CA-TRK-93001
```
```
CT-TRK-93002
```
```
AZ-TRL-94001
```
```
CA-TRL-94002
```
```
CA-TRK-84001
```
```
AL-TRK-84002
```
```
CA-TRL-84501
```
```
CO-TRL-84502
```
```
CT-TRL-84503
```
```
CO-TRK-95001
```
```
CA-TRK-95002
```
```
DE-TRL-96001
```
```
CA-TRL-96002
```
```
CO-TRL-96003
```
```
CT-TRK-60601
```
```
FL-TRL-60602
```
```
CO-TRL-60603
```
```
DE-TRK-70101
```
```
CT-TRK-70102
```
```
CA-TRL-70903
```
```
FL-TRK-88001
```
```
DE-TRK-88002
```
```
CT-TRL-89003
```
```
AK-TRL-89004
```
```
AZ-TRK-99001
```
```
AZ-TRK-99002
```
```
CA-TRK-99003
```
```
AZ-TRL-99104
```
```
CA-TRL-99105
```
```
DE-TRL-99106
```
```
DE-TRK-51010
```
```
CT-TRK-51011
```
```
CT-TRL-52010
```
```
FL-TRK-110101
```
```
DE-TRL-110102
```
```
FL-TRL-110103
```
```
CA-TRK-15A01
```
```
CA-TRK-15B02
```
```
CA-TRL-15C03
```
```
CA-TRL-15D04
```
```
CT-TRK-160001
```
```
CT-TRL-160101
```
```
AZ-TRL-160201
```
```
FL-TRK-160301
```
```
CT-TRL-160901
```
```
FL-TRL-160902
```

