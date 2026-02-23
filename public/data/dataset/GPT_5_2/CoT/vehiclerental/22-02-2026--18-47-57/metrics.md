# Generation 1
## Category baseline
```
!new RentalOffice('RO_101')
!RO_101.name := 'Sunshine Vehicle Rentals – Miami Airport'
!RO_101.number := 101
!RO_101.address := '3900 NW 25th St, Miami, FL 33142, USA'

!new RentalOffice('RO_205')
!RO_205.name := 'Front Range Vehicle Rentals – Denver'
!RO_205.number := 205
!RO_205.address := '2460 17th St, Denver, CO 80202, USA'

!new Truck('V_5001')
!V_5001.id := 5001
!V_5001.registrationState := #FL
!V_5001.licensePlateNumber := 'FL-TRK-8421'
!V_5001.vehicleTypeCode := #TRUCK10
!V_5001.registrationLastMaintenanceDate := Date('2026-01-12')
!V_5001.expirationDate := Date('2026-12-31')
!V_5001.odometerReading := 48320
!V_5001.gasTankCapacity := 26.5
!V_5001.workingRadio := true
!V_5001.mileage := 17

!new Vehicle('V_7802')
!V_7802.id := 7802
!V_7802.registrationState := #CO
!V_7802.licensePlateNumber := 'CO-TRL-1907'
!V_7802.vehicleTypeCode := #OPEN_TRAILER
!V_7802.registrationLastMaintenanceDate := Date('2025-11-20')
!V_7802.expirationDate := Date('2026-11-30')

!new Individual('CUST_I_300')
!CUST_I_300.name := 'María Elena Rivera'
!CUST_I_300.address := '1180 SW 8th St, Miami, FL 33130, USA'
!CUST_I_300.poorRisk := false
!CUST_I_300.homePhone := '+1-305-555-0148'
!CUST_I_300.driverLicenseState := #FL
!CUST_I_300.driverLicenseNumber := 74219833
!CUST_I_300.driverLicenseExpirationDate := Date('2028-06-15')

!new Company('CUST_C_410')
!CUST_C_410.name := 'Alpine Event Logistics, LLC'
!CUST_C_410.address := '5600 Federal Blvd, Denver, CO 80221, USA'
!CUST_C_410.poorRisk := false
!CUST_C_410.idNumber := 91004577

!new RentalAgreement('RA_9001')
!RA_9001.number := 9001
!RA_9001.rentalDate := Date('2026-02-10')
!RA_9001.anticipatedDuration := 4
!RA_9001.depositPaid := 250.0
!RA_9001.quotedDailyRate := 89.99
!RA_9001.quotedRatePerMile := 0.29

!new RentalAgreement('RA_9002')
!RA_9002.number := 9002
!RA_9002.rentalDate := Date('2026-02-18')
!RA_9002.anticipatedDuration := 2
!RA_9002.depositPaid := 100.0
!RA_9002.quotedDailyRate := 34.5
!RA_9002.quotedRatePerMile := 0.0

!insert (RO_101, V_5001) into RentalOfficeVehicle
!insert (RO_205, V_7802) into RentalOfficeVehicle

!insert (RO_101, RA_9001) into RentalOfficeRentalAgreementOrigin
!insert (RO_205, RA_9002) into RentalOfficeRentalAgreementOrigin

!insert (RO_205, RA_9001) into RentalOfficeRentalAgreementDrop
!insert (RO_205, RA_9002) into RentalOfficeRentalAgreementDrop

!insert (RA_9001, V_5001) into RentalAgreementVehicle
!insert (RA_9002, V_7802) into RentalAgreementVehicle

!insert (RA_9001, CUST_I_300) into RentalAgreementCustomer
!insert (RA_9002, CUST_C_410) into RentalAgreementCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 63 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 0 | 4 | 0.00% |
| License Plates | 0 | 2 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

## Category boundary
```
!new RentalOffice('RO_0')
!RO_0.name := 'Downtown Minimal Depot'
!RO_0.number := 0
!RO_0.address := '1 Main St, Los Angeles, CA'

!new RentalOffice('RO_1')
!RO_1.name := 'Harbor Return Point'
!RO_1.number := 1
!RO_1.address := '2 Dock Rd, Wilmington, CA'

!new RentalOffice('RO_2')
!RO_2.name := 'Quiet Satellite Office'
!RO_2.number := 2
!RO_2.address := '3 Empty Ln, Dover, DE'

!new Truck('T_0')
!T_0.id := 0
!T_0.registrationState := #FL
!T_0.licensePlateNumber := '0'
!T_0.vehicleTypeCode := #TRUCK10
!T_0.registrationLastMaintenanceDate := Date('2026-01-01')
!T_0.expirationDate := Date('2026-12-31')
!T_0.odometerReading := 0
!T_0.gasTankCapacity := 0.0
!T_0.workingRadio := false
!T_0.mileage := 0

!new Individual('I_0')
!I_0.name := 'Ana Núñez'
!I_0.address := '4 Short St, Los Angeles, CA'
!I_0.poorRisk := false
!I_0.homePhone := '000-0000'
!I_0.driverLicenseState := #CA
!I_0.driverLicenseNumber := 0
!I_0.driverLicenseExpirationDate := Date('2027-01-01')

!new Company('C_0')
!C_0.name := 'Société Zéro'
!C_0.address := '5 Rue Min, Dover, DE'
!C_0.poorRisk := true
!C_0.idNumber := 0

!new RentalAgreement('RA_0')
!RA_0.number := 0
!RA_0.rentalDate := Date('2026-01-02')
!RA_0.anticipatedDuration := 0
!RA_0.depositPaid := 0.0
!RA_0.quotedDailyRate := 0.0
!RA_0.quotedRatePerMile := 0.0

!insert (RO_0, T_0) into RentalOfficeVehicle

!insert (RO_0, RA_0) into RentalOfficeRentalAgreementOrigin
!insert (RO_1, RA_0) into RentalOfficeRentalAgreementDrop

!insert (RA_0, T_0) into RentalAgreementVehicle
!insert (RA_0, I_0) into RentalAgreementCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 48 | 0.00% |
| Multiplicities Errors | 0 | 5 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 5 | 5 | 100.00% |
| License Plates | 1 | 1 | 100.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
1 Main St, Los Angeles, CA
```
```
2 Dock Rd, Wilmington, CA
```
```
3 Empty Ln, Dover, DE
```
```
4 Short St, Los Angeles, CA
```
```
5 Rue Min, Dover, DE
```

| Invalid License Plates | 
|---| 
```
0
```

## Category complex
```
!new RentalOffice('RO_101_PHX')
!RO_101_PHX.name := 'Sonoran Moving & Truck Rental — Phoenix Central'
!RO_101_PHX.number := 101
!RO_101_PHX.address := '725 E Van Buren St, Phoenix, AZ 85006'

!new RentalOffice('RO_202_MIA')
!RO_202_MIA.name := 'SunCoast Vehicle Rentals — Miami Airport'
!RO_202_MIA.number := 202
!RO_202_MIA.address := '3900 NW 25th St, Miami, FL 33142'

!new RentalOffice('RO_303_HFD')
!RO_303_HFD.name := 'Capitol Region Truck & Trailer Rental — Hartford'
!RO_303_HFD.number := 303
!RO_303_HFD.address := '18 Weston St, Hartford, CT 06120'

!new Truck('T_5001_PHX')
!T_5001_PHX.id := 5001
!T_5001_PHX.registrationState := #AZ
!T_5001_PHX.licensePlateNumber := 'AZ B7K-2194'
!T_5001_PHX.vehicleTypeCode := #TRUCK24
!T_5001_PHX.registrationLastMaintenanceDate := Date('2025-12-02')
!T_5001_PHX.expirationDate := Date('2026-11-30')
!T_5001_PHX.odometerReading := 84215
!T_5001_PHX.gasTankCapacity := 40.0
!T_5001_PHX.workingRadio := true
!T_5001_PHX.mileage := 10

!new Truck('T_5002_PHX')
!T_5002_PHX.id := 5002
!T_5002_PHX.registrationState := #CA
!T_5002_PHX.licensePlateNumber := 'CA 9XGZ021'
!T_5002_PHX.vehicleTypeCode := #TRUCK10
!T_5002_PHX.registrationLastMaintenanceDate := Date('2025-10-15')
!T_5002_PHX.expirationDate := Date('2026-10-31')
!T_5002_PHX.odometerReading := 31107
!T_5002_PHX.gasTankCapacity := 25.5
!T_5002_PHX.workingRadio := false
!T_5002_PHX.mileage := 14

!new Vehicle('V_6001_PHX')
!V_6001_PHX.id := 6001
!V_6001_PHX.registrationState := #CO
!V_6001_PHX.licensePlateNumber := 'CO TRL-7712'
!V_6001_PHX.vehicleTypeCode := #COVERED_TRAILER
!V_6001_PHX.registrationLastMaintenanceDate := Date('2025-09-01')
!V_6001_PHX.expirationDate := Date('2026-09-30')

!new Truck('T_5003_MIA')
!T_5003_MIA.id := 5003
!T_5003_MIA.registrationState := #FL
!T_5003_MIA.licensePlateNumber := 'FL KDT-440'
!T_5003_MIA.vehicleTypeCode := #TRUCK
!T_5003_MIA.registrationLastMaintenanceDate := Date('2025-11-20')
!T_5003_MIA.expirationDate := Date('2026-11-30')
!T_5003_MIA.odometerReading := 120433
!T_5003_MIA.gasTankCapacity := 35.0
!T_5003_MIA.workingRadio := true
!T_5003_MIA.mileage := 12

!new Vehicle('V_6002_MIA')
!V_6002_MIA.id := 6002
!V_6002_MIA.registrationState := #DE
!V_6002_MIA.licensePlateNumber := 'DE 58T-PL'
!V_6002_MIA.vehicleTypeCode := #OPEN_TRAILER
!V_6002_MIA.registrationLastMaintenanceDate := Date('2025-08-18')
!V_6002_MIA.expirationDate := Date('2026-08-31')

!new Truck('T_5004_HFD')
!T_5004_HFD.id := 5004
!T_5004_HFD.registrationState := #CT
!T_5004_HFD.licensePlateNumber := 'CT AT-30971'
!T_5004_HFD.vehicleTypeCode := #TRUCK24
!T_5004_HFD.registrationLastMaintenanceDate := Date('2025-12-10')
!T_5004_HFD.expirationDate := Date('2026-12-31')
!T_5004_HFD.odometerReading := 55790
!T_5004_HFD.gasTankCapacity := 38.0
!T_5004_HFD.workingRadio := true
!T_5004_HFD.mileage := 9

!new Individual('CUST_I_1')
!CUST_I_1.name := 'María del Carmen Ruiz'
!CUST_I_1.address := '1842 S 6th Ave, Tucson, AZ 85713'
!CUST_I_1.poorRisk := false
!CUST_I_1.homePhone := '+1-520-555-0148'
!CUST_I_1.driverLicenseState := #AZ
!CUST_I_1.driverLicenseNumber := 81200457
!CUST_I_1.driverLicenseExpirationDate := Date('2027-04-19')

!new Individual('CUST_I_2')
!CUST_I_2.name := 'Omar Haddad'
!CUST_I_2.address := '77 Wethersfield Ave, Hartford, CT 06114'
!CUST_I_2.poorRisk := true
!CUST_I_2.homePhone := '+1-860-555-0199'
!CUST_I_2.driverLicenseState := #CT
!CUST_I_2.driverLicenseNumber := 33991762
!CUST_I_2.driverLicenseExpirationDate := Date('2026-06-30')

!new Company('CUST_C_1')
!CUST_C_1.name := 'Nordic Event Logistics, Inc.'
!CUST_C_1.address := '1000 Brickell Ave, Suite 715, Miami, FL 33131'
!CUST_C_1.poorRisk := false
!CUST_C_1.idNumber := 90077123

!new Company('CUST_C_2')
!CUST_C_2.name := 'GreenLeaf Renovations LLC'
!CUST_C_2.address := '2121 N 24th St, Phoenix, AZ 85008'
!CUST_C_2.poorRisk := false
!CUST_C_2.idNumber := 77831005

!new RentalAgreement('RA_90001')
!RA_90001.number := 90001
!RA_90001.rentalDate := Date('2026-01-05')
!RA_90001.anticipatedDuration := 3
!RA_90001.depositPaid := 300.0
!RA_90001.quotedDailyRate := 89.99
!RA_90001.quotedRatePerMile := 0.79

!new RentalAgreement('RA_90002')
!RA_90002.number := 90002
!RA_90002.rentalDate := Date('2026-01-12')
!RA_90002.anticipatedDuration := 2
!RA_90002.depositPaid := 150.0
!RA_90002.quotedDailyRate := 49.0
!RA_90002.quotedRatePerMile := 0.0

!new RentalAgreement('RA_90003')
!RA_90003.number := 90003
!RA_90003.rentalDate := Date('2026-01-20')
!RA_90003.anticipatedDuration := 5
!RA_90003.depositPaid := 500.0
!RA_90003.quotedDailyRate := 129.0
!RA_90003.quotedRatePerMile := 0.95

!new RentalAgreement('RA_90004')
!RA_90004.number := 90004
!RA_90004.rentalDate := Date('2026-02-02')
!RA_90004.anticipatedDuration := 1
!RA_90004.depositPaid := 0.0
!RA_90004.quotedDailyRate := 35.0
!RA_90004.quotedRatePerMile := 0.0

!new RentalAgreement('RA_90005')
!RA_90005.number := 90005
!RA_90005.rentalDate := Date('2026-02-05')
!RA_90005.anticipatedDuration := 4
!RA_90005.depositPaid := 400.0
!RA_90005.quotedDailyRate := 110.0
!RA_90005.quotedRatePerMile := 0.85

!new RentalAgreement('RA_90006')
!RA_90006.number := 90006
!RA_90006.rentalDate := Date('2026-02-10')
!RA_90006.anticipatedDuration := 7
!RA_90006.depositPaid := 600.0
!RA_90006.quotedDailyRate := 140.0
!RA_90006.quotedRatePerMile := 0.9

!new RentalAgreement('RA_90007')
!RA_90007.number := 90007
!RA_90007.rentalDate := Date('2026-02-18')
!RA_90007.anticipatedDuration := 2
!RA_90007.depositPaid := 200.0
!RA_90007.quotedDailyRate := 75.0
!RA_90007.quotedRatePerMile := 0.6

!insert (RO_101_PHX, T_5001_PHX) into RentalOfficeVehicle
!insert (RO_101_PHX, T_5002_PHX) into RentalOfficeVehicle
!insert (RO_101_PHX, V_6001_PHX) into RentalOfficeVehicle
!insert (RO_202_MIA, T_5003_MIA) into RentalOfficeVehicle
!insert (RO_202_MIA, V_6002_MIA) into RentalOfficeVehicle
!insert (RO_303_HFD, T_5004_HFD) into RentalOfficeVehicle

!insert (RO_101_PHX, RA_90001) into RentalOfficeRentalAgreementOrigin
!insert (RO_101_PHX, RA_90002) into RentalOfficeRentalAgreementOrigin
!insert (RO_202_MIA, RA_90003) into RentalOfficeRentalAgreementOrigin
!insert (RO_202_MIA, RA_90004) into RentalOfficeRentalAgreementOrigin
!insert (RO_303_HFD, RA_90005) into RentalOfficeRentalAgreementOrigin
!insert (RO_101_PHX, RA_90006) into RentalOfficeRentalAgreementOrigin
!insert (RO_303_HFD, RA_90007) into RentalOfficeRentalAgreementOrigin

!insert (RO_101_PHX, RA_90001) into RentalOfficeRentalAgreementDrop
!insert (RO_101_PHX, RA_90002) into RentalOfficeRentalAgreementDrop
!insert (RO_202_MIA, RA_90003) into RentalOfficeRentalAgreementDrop
!insert (RO_303_HFD, RA_90004) into RentalOfficeRentalAgreementDrop
!insert (RO_303_HFD, RA_90005) into RentalOfficeRentalAgreementDrop
!insert (RO_303_HFD, RA_90006) into RentalOfficeRentalAgreementDrop
!insert (RO_101_PHX, RA_90007) into RentalOfficeRentalAgreementDrop

!insert (RA_90001, T_5001_PHX) into RentalAgreementVehicle
!insert (RA_90002, V_6001_PHX) into RentalAgreementVehicle
!insert (RA_90003, T_5003_MIA) into RentalAgreementVehicle
!insert (RA_90004, V_6002_MIA) into RentalAgreementVehicle
!insert (RA_90005, T_5004_HFD) into RentalAgreementVehicle
!insert (RA_90006, T_5001_PHX) into RentalAgreementVehicle
!insert (RA_90007, T_5002_PHX) into RentalAgreementVehicle

!insert (RA_90001, CUST_C_2) into RentalAgreementCustomer
!insert (RA_90002, CUST_I_1) into RentalAgreementCustomer
!insert (RA_90003, CUST_C_1) into RentalAgreementCustomer
!insert (RA_90004, CUST_C_1) into RentalAgreementCustomer
!insert (RA_90005, CUST_I_2) into RentalAgreementCustomer
!insert (RA_90006, CUST_I_1) into RentalAgreementCustomer
!insert (RA_90007, CUST_C_2) into RentalAgreementCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 179 | 0.00% |
| Multiplicities Errors | 0 | 34 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 0 | 7 | 0.00% |
| License Plates | 0 | 6 | 0.00% |
| Home Phones | 0 | 2 | 0.00% |

## Category edge
```
!new RentalOffice('RO_edge1')
!RO_edge1.name := 'Downtown Satellite Kiosk'
!RO_edge1.number := 0
!RO_edge1.address := '1½ Market St, Wilmington, DE 19801'

!new RentalOffice('RO_edge2')
!RO_edge2.name := 'Interstate Drop Yard'
!RO_edge2.number := 999999
!RO_edge2.address := 'Exit 7 Service Rd, Dover, DE 19901'

!new Truck('V_edge1')
!V_edge1.id := 1
!V_edge1.registrationState := #AK
!V_edge1.licensePlateNumber := 'AK-000000'
!V_edge1.vehicleTypeCode := #TRUCK10
!V_edge1.registrationLastMaintenanceDate := Date('2026-02-21')
!V_edge1.expirationDate := Date('2025-01-01')
!V_edge1.odometerReading := 0
!V_edge1.gasTankCapacity := 0.0
!V_edge1.workingRadio := false
!V_edge1.mileage := 0

!new Individual('C_edge1')
!C_edge1.name := 'María-José Núñez'
!C_edge1.address := 'Unit B, 12 Orange St, Dover, DE 19901'
!C_edge1.poorRisk := true
!C_edge1.homePhone := '+1-302-555-0100'
!C_edge1.driverLicenseState := #CA
!C_edge1.driverLicenseNumber := 0
!C_edge1.driverLicenseExpirationDate := Date('2000-01-01')

!new Company('C_edge2')
!C_edge2.name := 'Kalaallit Logistics LLC'
!C_edge2.address := 'Harbor Rd 5, Dover, DE 19904'
!C_edge2.poorRisk := false
!C_edge2.idNumber := 0

!new RentalAgreement('RA_1000000')
!RA_1000000.number := 1000000
!RA_1000000.rentalDate := Date('2026-02-22')
!RA_1000000.anticipatedDuration := 0
!RA_1000000.depositPaid := 0.0
!RA_1000000.quotedDailyRate := 0.0
!RA_1000000.quotedRatePerMile := 0.0

!new RentalAgreement('RA_1000001')
!RA_1000001.number := 1000001
!RA_1000001.rentalDate := Date('2026-02-22')
!RA_1000001.anticipatedDuration := 0
!RA_1000001.depositPaid := 0.0
!RA_1000001.quotedDailyRate := 0.0
!RA_1000001.quotedRatePerMile := 0.0

!insert (RO_edge1, V_edge1) into RentalOfficeVehicle

!insert (RO_edge1, RA_1000000) into RentalOfficeRentalAgreementOrigin
!insert (RO_edge1, RA_1000001) into RentalOfficeRentalAgreementOrigin

!insert (RO_edge2, RA_1000000) into RentalOfficeRentalAgreementDrop
!insert (RO_edge1, RA_1000001) into RentalOfficeRentalAgreementDrop

!insert (RA_1000000, V_edge1) into RentalAgreementVehicle
!insert (RA_1000001, V_edge1) into RentalAgreementVehicle

!insert (RA_1000000, C_edge1) into RentalAgreementCustomer
!insert (RA_1000001, C_edge2) into RentalAgreementCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 55 | 0.00% |
| Multiplicities Errors | 0 | 9 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 4 | 4 | 100.00% |
| License Plates | 0 | 1 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
1½ Market St, Wilmington, DE 19801
```
```
Exit 7 Service Rd, Dover, DE 19901
```
```
Unit B, 12 Orange St, Dover, DE 19901
```
```
Harbor Rd 5, Dover, DE 19904
```

## Category invalid
```
!new RentalOffice('RO_17')
!RO_17.name := 'Port of Miami Commercial Rentals'
!RO_17.number := 17
!RO_17.address := '1015 North America Way, Miami, FL 33132, USA'

!new RentalOffice('RO_42')
!RO_42.name := 'Orlando Logistics Vehicle Desk'
!RO_42.number := 42
!RO_42.address := '1 Jeff Fuqua Blvd, Orlando, FL 32827, USA'

!new RentalOffice('RO_88')
!RO_88.name := 'Los Angeles Harbor Truck Center'
!RO_88.number := 88
!RO_88.address := '425 S Palos Verdes St, San Pedro, CA 90731, USA'

!new Truck('T_60031')
!T_60031.id := 60031
!T_60031.registrationState := #FL
!T_60031.licensePlateNumber := 'FL-3KZQ914'
!T_60031.vehicleTypeCode := #TRUCK24
!T_60031.registrationLastMaintenanceDate := Date('2026-01-12')
!T_60031.expirationDate := Date('2026-11-30')
!T_60031.odometerReading := 184220
!T_60031.gasTankCapacity := 68.0
!T_60031.workingRadio := true
!T_60031.mileage := 8

!new Company('C_CasaNova')
!C_CasaNova.name := 'CasaNova Imports LLC'
!C_CasaNova.address := '7800 NW 25th St, Doral, FL 33122, USA'
!C_CasaNova.poorRisk := false
!C_CasaNova.idNumber := 9137742

!new Individual('I_Gomez')
!I_Gomez.name := 'María-Luisa Gómez'
!I_Gomez.address := '9200 NW 36th St, Doral, FL 33178, USA'
!I_Gomez.poorRisk := false
!I_Gomez.homePhone := '+1 (305) 555-0188'
!I_Gomez.driverLicenseState := #FL
!I_Gomez.driverLicenseNumber := 55319027
!I_Gomez.driverLicenseExpirationDate := Date('2027-05-14')

!new RentalAgreement('RA_202601990')
!RA_202601990.number := 202601990
!RA_202601990.rentalDate := Date('2026-02-20')
!RA_202601990.anticipatedDuration := 5
!RA_202601990.depositPaid := 0.0
!RA_202601990.quotedDailyRate := 129.99
!RA_202601990.quotedRatePerMile := 0.79

!insert (RO_17, T_60031) into RentalOfficeVehicle
!insert (RO_17, RA_202601990) into RentalOfficeRentalAgreementOrigin
!insert (RA_202601990, T_60031) into RentalAgreementVehicle
!insert (RA_202601990, C_CasaNova) into RentalAgreementCustomer
!insert (RA_202601990, I_Gomez) into RentalAgreementCustomer
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 2 | 5 | 40.00% |
| Invariants Errors (Not included on General) | 0 | 5 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `RentalAgreementCustomer':
  Object `RA_202601990' of class `RentalAgreement' is connected to 2 objects of class `Customer'
  at association end `customer' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `RentalOfficeRentalAgreementDrop':
  Object `RA_202601990' of class `RentalAgreement' is connected to 0 objects of class `RentalOffice'
  at association end `droppoffRentalOffice' but the multiplicity is specified as `1'.
```

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 0 | 5 | 0.00% |
| License Plates | 0 | 1 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

## Generation 1 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 393 | 0.00% |
| Multiplicities Errors | 0 | 58 | 0.00% |
| Invariants Errors | 0 | 20 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 2 | 5 | 40.00% |
| Invariants Errors (Not included on General) | 0 | 5 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `RentalAgreementCustomer':
  Object `RA_202601990' of class `RentalAgreement' is connected to 2 objects of class `Customer'
  at association end `customer' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `RentalOfficeRentalAgreementDrop':
  Object `RA_202601990' of class `RentalAgreement' is connected to 0 objects of class `RentalOffice'
  at association end `droppoffRentalOffice' but the multiplicity is specified as `1'.
```

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 9 | 25 | 36.00% |
| License Plates | 1 | 11 | 9.09% |
| Home Phones | 0 | 6 | 0.00% |

| Invalid Addresses | 
|---| 
```
1 Main St, Los Angeles, CA
```
```
2 Dock Rd, Wilmington, CA
```
```
3 Empty Ln, Dover, DE
```
```
4 Short St, Los Angeles, CA
```
```
5 Rue Min, Dover, DE
```
```
1½ Market St, Wilmington, DE 19801
```
```
Exit 7 Service Rd, Dover, DE 19901
```
```
Unit B, 12 Orange St, Dover, DE 19901
```
```
Harbor Rd 5, Dover, DE 19904
```

| Invalid License Plates | 
|---| 
```
0
```

# Generation 2
## Category baseline
```
!new RentalOffice('RO_12')
!RO_12.name := 'Northern Lights Rentals – Anchorage Downtown'
!RO_12.number := 12
!RO_12.address := '601 W 5th Ave, Anchorage, AK 99501, USA'

!new RentalOffice('RO_77')
!RO_77.name := 'Desert Haul Rentals – Tempe'
!RO_77.number := 77
!RO_77.address := '225 E University Dr, Tempe, AZ 85281, USA'

!new RentalOffice('RO_330')
!RO_330.name := 'Nutmeg Truck & Trailer – Hartford'
!RO_330.number := 330
!RO_330.address := '1200 Park St, Hartford, CT 06106, USA'

!new Truck('V_6100')
!V_6100.id := 6100
!V_6100.registrationState := #AK
!V_6100.licensePlateNumber := 'AK-7FZ219'
!V_6100.vehicleTypeCode := #TRUCK24
!V_6100.registrationLastMaintenanceDate := Date('2025-12-05')
!V_6100.expirationDate := Date('2026-10-31')
!V_6100.odometerReading := 102455
!V_6100.gasTankCapacity := 33.0
!V_6100.workingRadio := true
!V_6100.mileage := 14

!new Truck('V_6101')
!V_6101.id := 6101
!V_6101.registrationState := #AZ
!V_6101.licensePlateNumber := 'AZ-BNA4431'
!V_6101.vehicleTypeCode := #TRUCK
!V_6101.registrationLastMaintenanceDate := Date('2026-02-01')
!V_6101.expirationDate := Date('2027-02-28')
!V_6101.odometerReading := 1200
!V_6101.gasTankCapacity := 0.0
!V_6101.workingRadio := false
!V_6101.mileage := 0

!new Vehicle('V_9105')
!V_9105.id := 9105
!V_9105.registrationState := #DE
!V_9105.licensePlateNumber := 'DE-TL5903'
!V_9105.vehicleTypeCode := #COVERED_TRAILER
!V_9105.registrationLastMaintenanceDate := Date('2025-09-18')
!V_9105.expirationDate := Date('2026-09-30')

!new Individual('CUST_I_88')
!CUST_I_88.name := 'Hiroshi Tanaka'
!CUST_I_88.address := '2121 Sawtelle Blvd, Los Angeles, CA 90025, USA'
!CUST_I_88.poorRisk := true
!CUST_I_88.homePhone := '+1-424-555-0196'
!CUST_I_88.driverLicenseState := #CA
!CUST_I_88.driverLicenseNumber := 59300412
!CUST_I_88.driverLicenseExpirationDate := Date('2027-11-09')

!new Company('CUST_C_902')
!CUST_C_902.name := 'Bayou Builders, Inc.'
!CUST_C_902.address := '185 Government St, Mobile, AL 36602, USA'
!CUST_C_902.poorRisk := false
!CUST_C_902.idNumber := 22077104

!new RentalAgreement('RA_30010')
!RA_30010.number := 30010
!RA_30010.rentalDate := Date('2026-03-01')
!RA_30010.anticipatedDuration := 7
!RA_30010.depositPaid := 0.0
!RA_30010.quotedDailyRate := 129.0
!RA_30010.quotedRatePerMile := 0.45

!new RentalAgreement('RA_30011')
!RA_30011.number := 30011
!RA_30011.rentalDate := Date('2026-03-10')
!RA_30011.anticipatedDuration := 1
!RA_30011.depositPaid := 300.0
!RA_30011.quotedDailyRate := 159.0
!RA_30011.quotedRatePerMile := 0.0

!new RentalAgreement('RA_30012')
!RA_30012.number := 30012
!RA_30012.rentalDate := Date('2026-03-12')
!RA_30012.anticipatedDuration := 3
!RA_30012.depositPaid := 150.0
!RA_30012.quotedDailyRate := 55.0
!RA_30012.quotedRatePerMile := 0.15

!new RentalAgreement('RA_30013')
!RA_30013.number := 30013
!RA_30013.rentalDate := Date('2026-03-15')
!RA_30013.anticipatedDuration := 2
!RA_30013.depositPaid := 200.0
!RA_30013.quotedDailyRate := 118.5
!RA_30013.quotedRatePerMile := 0.39

!insert (RO_12, V_6100) into RentalOfficeVehicle
!insert (RO_77, V_6101) into RentalOfficeVehicle
!insert (RO_330, V_9105) into RentalOfficeVehicle

!insert (RO_12, RA_30010) into RentalOfficeRentalAgreementOrigin
!insert (RO_77, RA_30011) into RentalOfficeRentalAgreementOrigin
!insert (RO_330, RA_30012) into RentalOfficeRentalAgreementOrigin
!insert (RO_77, RA_30013) into RentalOfficeRentalAgreementOrigin

!insert (RO_77, RA_30010) into RentalOfficeRentalAgreementDrop
!insert (RO_77, RA_30011) into RentalOfficeRentalAgreementDrop
!insert (RO_330, RA_30012) into RentalOfficeRentalAgreementDrop
!insert (RO_12, RA_30013) into RentalOfficeRentalAgreementDrop

!insert (RA_30010, V_6100) into RentalAgreementVehicle
!insert (RA_30011, V_6101) into RentalAgreementVehicle
!insert (RA_30012, V_9105) into RentalAgreementVehicle
!insert (RA_30013, V_6100) into RentalAgreementVehicle

!insert (RA_30010, CUST_C_902) into RentalAgreementCustomer
!insert (RA_30011, CUST_I_88) into RentalAgreementCustomer
!insert (RA_30012, CUST_C_902) into RentalAgreementCustomer
!insert (RA_30013, CUST_I_88) into RentalAgreementCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 101 | 0.00% |
| Multiplicities Errors | 0 | 19 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 0 | 5 | 0.00% |
| License Plates | 0 | 3 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

## Category boundary
```
!new RentalOffice('RO_100')
!RO_100.name := 'North Slope Logistics Desk'
!RO_100.number := 100
!RO_100.address := '500 Aurora Blvd, Anchorage, AK'

!new RentalOffice('RO_200')
!RO_200.name := 'Capitol Corridor Returns'
!RO_200.number := 200
!RO_200.address := '10 Constitution Plaza, Hartford, CT'

!new Truck('T_2147483647')
!T_2147483647.id := 2147483647
!T_2147483647.registrationState := #AK
!T_2147483647.licensePlateNumber := 'AK-999999'
!T_2147483647.vehicleTypeCode := #TRUCK24
!T_2147483647.registrationLastMaintenanceDate := Date('2025-12-31')
!T_2147483647.expirationDate := Date('2035-12-31')
!T_2147483647.odometerReading := 2000000000
!T_2147483647.gasTankCapacity := 9999.99
!T_2147483647.workingRadio := true
!T_2147483647.mileage := 1500000000

!new Truck('T_999')
!T_999.id := 999
!T_999.registrationState := #AZ
!T_999.licensePlateNumber := 'AZ-ZZTOP1'
!T_999.vehicleTypeCode := #TRUCK24
!T_999.registrationLastMaintenanceDate := Date('2026-02-01')
!T_999.expirationDate := Date('2027-02-01')
!T_999.odometerReading := 1
!T_999.gasTankCapacity := 1.0
!T_999.workingRadio := false
!T_999.mileage := 0

!new Vehicle('V_501')
!V_501.id := 501
!V_501.registrationState := #CO
!V_501.licensePlateNumber := 'CO-TRAIL-501'
!V_501.vehicleTypeCode := #COVERED_TRAILER
!V_501.registrationLastMaintenanceDate := Date('2026-01-15')
!V_501.expirationDate := Date('2028-01-15')

!new Vehicle('V_777')
!V_777.id := 777
!V_777.registrationState := #AL
!V_777.licensePlateNumber := 'AL-777-OPN'
!V_777.vehicleTypeCode := #OPEN_TRAILER
!V_777.registrationLastMaintenanceDate := Date('2024-06-01')
!V_777.expirationDate := Date('2026-06-01')

!new Company('C_888')
!C_888.name := 'Global Relief Transport GmbH'
!C_888.address := '1 Harbor Ring, Anchorage, AK'
!C_888.poorRisk := false
!C_888.idNumber := 888

!new Individual('I_404')
!I_404.name := 'أمل حسين (Amal Hussein)'
!I_404.address := '22 Maple Ave, Hartford, CT'
!I_404.poorRisk := true
!I_404.homePhone := '+1-860-555-0404'
!I_404.driverLicenseState := #CT
!I_404.driverLicenseNumber := 404404404
!I_404.driverLicenseExpirationDate := Date('2030-05-20')

!new RentalAgreement('RA_900')
!RA_900.number := 900
!RA_900.rentalDate := Date('2026-03-01')
!RA_900.anticipatedDuration := 3650
!RA_900.depositPaid := 1000000000.0
!RA_900.quotedDailyRate := 999999.99
!RA_900.quotedRatePerMile := 12345.67

!new RentalAgreement('RA_901')
!RA_901.number := 901
!RA_901.rentalDate := Date('2026-03-02')
!RA_901.anticipatedDuration := 1
!RA_901.depositPaid := 0.01
!RA_901.quotedDailyRate := 0.01
!RA_901.quotedRatePerMile := 0.01

!new RentalAgreement('RA_902')
!RA_902.number := 902
!RA_902.rentalDate := Date('2026-03-03')
!RA_902.anticipatedDuration := 0
!RA_902.depositPaid := 500000.0
!RA_902.quotedDailyRate := 250000.0
!RA_902.quotedRatePerMile := 0.0

!new RentalAgreement('RA_903')
!RA_903.number := 903
!RA_903.rentalDate := Date('2026-04-15')
!RA_903.anticipatedDuration := 30
!RA_903.depositPaid := 250.0
!RA_903.quotedDailyRate := 79.95
!RA_903.quotedRatePerMile := 0.45

!insert (RO_100, T_2147483647) into RentalOfficeVehicle
!insert (RO_200, T_999) into RentalOfficeVehicle
!insert (RO_100, V_501) into RentalOfficeVehicle
!insert (RO_200, V_777) into RentalOfficeVehicle

!insert (RO_100, RA_900) into RentalOfficeRentalAgreementOrigin
!insert (RO_100, RA_901) into RentalOfficeRentalAgreementOrigin
!insert (RO_200, RA_902) into RentalOfficeRentalAgreementOrigin
!insert (RO_200, RA_903) into RentalOfficeRentalAgreementOrigin

!insert (RO_200, RA_900) into RentalOfficeRentalAgreementDrop
!insert (RO_100, RA_901) into RentalOfficeRentalAgreementDrop
!insert (RO_200, RA_902) into RentalOfficeRentalAgreementDrop
!insert (RO_100, RA_903) into RentalOfficeRentalAgreementDrop

!insert (RA_900, T_2147483647) into RentalAgreementVehicle
!insert (RA_901, T_2147483647) into RentalAgreementVehicle
!insert (RA_902, T_2147483647) into RentalAgreementVehicle
!insert (RA_903, T_999) into RentalAgreementVehicle

!insert (RA_900, C_888) into RentalAgreementCustomer
!insert (RA_901, C_888) into RentalAgreementCustomer
!insert (RA_902, C_888) into RentalAgreementCustomer
!insert (RA_903, I_404) into RentalAgreementCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 105 | 0.00% |
| Multiplicities Errors | 0 | 20 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 2 | 4 | 50.00% |
| License Plates | 1 | 4 | 25.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
500 Aurora Blvd, Anchorage, AK
```
```
1 Harbor Ring, Anchorage, AK
```

| Invalid License Plates | 
|---| 
```
CO-TRAIL-501
```

## Category complex
```
!new RentalOffice('RO_410')
!RO_410.name := 'Aurora Haul Rentals — Anchorage'
!RO_410.number := 410
!RO_410.address := '5400 Old Seward Hwy, Anchorage, AK 99518'

!new RentalOffice('RO_420')
!RO_420.name := 'Front Range Truck & Trailer — Denver'
!RO_420.number := 420
!RO_420.address := '2650 W Alameda Ave, Denver, CO 80219'

!new RentalOffice('RO_430')
!RO_430.name := 'Brandywine Cargo Rentals — Wilmington'
!RO_430.number := 430
!RO_430.address := '901 S Market St, Wilmington, DE 19801'

!new RentalOffice('RO_440')
!RO_440.name := 'Steel City Return Depot — Birmingham'
!RO_440.number := 440
!RO_440.address := '1200 3rd Ave N, Birmingham, AL 35203'

!new Truck('T_7101')
!T_7101.id := 7101
!T_7101.registrationState := #AK
!T_7101.licensePlateNumber := 'AK JNQ-284'
!T_7101.vehicleTypeCode := #TRUCK24
!T_7101.registrationLastMaintenanceDate := Date('2025-11-28')
!T_7101.expirationDate := Date('2026-11-30')
!T_7101.odometerReading := 145002
!T_7101.gasTankCapacity := 45.0
!T_7101.workingRadio := true
!T_7101.mileage := 8

!new Truck('T_7102')
!T_7102.id := 7102
!T_7102.registrationState := #AK
!T_7102.licensePlateNumber := 'AK MKT-910'
!T_7102.vehicleTypeCode := #TRUCK10
!T_7102.registrationLastMaintenanceDate := Date('2026-01-03')
!T_7102.expirationDate := Date('2026-12-31')
!T_7102.odometerReading := 12
!T_7102.gasTankCapacity := 0.0
!T_7102.workingRadio := false
!T_7102.mileage := 0

!new Vehicle('V_7201')
!V_7201.id := 7201
!V_7201.registrationState := #AK
!V_7201.licensePlateNumber := 'AK TR-5521'
!V_7201.vehicleTypeCode := #COVERED_TRAILER
!V_7201.registrationLastMaintenanceDate := Date('2025-09-10')
!V_7201.expirationDate := Date('2026-09-30')

!new Truck('T_7301')
!T_7301.id := 7301
!T_7301.registrationState := #CO
!T_7301.licensePlateNumber := 'CO 3KQ-119'
!T_7301.vehicleTypeCode := #TRUCK
!T_7301.registrationLastMaintenanceDate := Date('2025-12-14')
!T_7301.expirationDate := Date('2026-12-31')
!T_7301.odometerReading := 88991
!T_7301.gasTankCapacity := 36.5
!T_7301.workingRadio := true
!T_7301.mileage := 11

!new Vehicle('V_7401')
!V_7401.id := 7401
!V_7401.registrationState := #DE
!V_7401.licensePlateNumber := 'DE C-18493'
!V_7401.vehicleTypeCode := #OPEN_TRAILER
!V_7401.registrationLastMaintenanceDate := Date('2025-10-01')
!V_7401.expirationDate := Date('2026-10-31')

!new Vehicle('V_7402')
!V_7402.id := 7402
!V_7402.registrationState := #DE
!V_7402.licensePlateNumber := 'DE T-99107'
!V_7402.vehicleTypeCode := #COVERED_TRAILER
!V_7402.registrationLastMaintenanceDate := Date('2025-08-22')
!V_7402.expirationDate := Date('2026-08-31')

!new Truck('T_7403')
!T_7403.id := 7403
!T_7403.registrationState := #DE
!T_7403.licensePlateNumber := 'DE 7LM-402'
!T_7403.vehicleTypeCode := #TRUCK24
!T_7403.registrationLastMaintenanceDate := Date('2025-11-05')
!T_7403.expirationDate := Date('2026-11-30')
!T_7403.odometerReading := 60214
!T_7403.gasTankCapacity := 39.0
!T_7403.workingRadio := true
!T_7403.mileage := 9

!new Vehicle('V_7501')
!V_7501.id := 7501
!V_7501.registrationState := #CA
!V_7501.licensePlateNumber := 'CA 8TQW772'
!V_7501.vehicleTypeCode := #OPEN_TRAILER
!V_7501.registrationLastMaintenanceDate := Date('2025-07-11')
!V_7501.expirationDate := Date('2026-07-31')

!new Individual('CUST_I_11')
!CUST_I_11.name := 'Ethan Park'
!CUST_I_11.address := '310 E 11th Ave, Anchorage, AK 99501'
!CUST_I_11.poorRisk := false
!CUST_I_11.homePhone := '+1-907-555-0122'
!CUST_I_11.driverLicenseState := #AK
!CUST_I_11.driverLicenseNumber := 55190231
!CUST_I_11.driverLicenseExpirationDate := Date('2028-02-10')

!new Individual('CUST_I_12')
!CUST_I_12.name := 'Aïcha Benali'
!CUST_I_12.address := '1550 Lowell Blvd, Denver, CO 80204'
!CUST_I_12.poorRisk := false
!CUST_I_12.homePhone := '+1-303-555-0164'
!CUST_I_12.driverLicenseState := #CO
!CUST_I_12.driverLicenseNumber := 24011877
!CUST_I_12.driverLicenseExpirationDate := Date('2027-09-01')

!new Individual('CUST_I_13')
!CUST_I_13.name := 'Caleb Johnson'
!CUST_I_13.address := '220 20th St N, Birmingham, AL 35203'
!CUST_I_13.poorRisk := true
!CUST_I_13.homePhone := '+1-205-555-0188'
!CUST_I_13.driverLicenseState := #AL
!CUST_I_13.driverLicenseNumber := 9911442
!CUST_I_13.driverLicenseExpirationDate := Date('2026-05-15')

!new Company('CUST_C_11')
!CUST_C_11.name := 'Tundra Seafood Cooperative'
!CUST_C_11.address := '601 W 5th Ave, Anchorage, AK 99501'
!CUST_C_11.poorRisk := false
!CUST_C_11.idNumber := 41055001

!new Company('CUST_C_12')
!CUST_C_12.name := 'Delaware Heritage Museum Services Ltd.'
!CUST_C_12.address := '1201 N Market St, Wilmington, DE 19801'
!CUST_C_12.poorRisk := false
!CUST_C_12.idNumber := 43088210

!new RentalAgreement('RA_96001')
!RA_96001.number := 96001
!RA_96001.rentalDate := Date('2026-01-08')
!RA_96001.anticipatedDuration := 6
!RA_96001.depositPaid := 500.0
!RA_96001.quotedDailyRate := 155.0
!RA_96001.quotedRatePerMile := 0.99

!new RentalAgreement('RA_96002')
!RA_96002.number := 96002
!RA_96002.rentalDate := Date('2026-01-15')
!RA_96002.anticipatedDuration := 2
!RA_96002.depositPaid := 75.0
!RA_96002.quotedDailyRate := 29.0
!RA_96002.quotedRatePerMile := 0.0

!new RentalAgreement('RA_96003')
!RA_96003.number := 96003
!RA_96003.rentalDate := Date('2026-02-03')
!RA_96003.anticipatedDuration := 4
!RA_96003.depositPaid := 450.0
!RA_96003.quotedDailyRate := 149.0
!RA_96003.quotedRatePerMile := 1.05

!new RentalAgreement('RA_96004')
!RA_96004.number := 96004
!RA_96004.rentalDate := Date('2026-02-10')
!RA_96004.anticipatedDuration := 3
!RA_96004.depositPaid := 250.0
!RA_96004.quotedDailyRate := 95.0
!RA_96004.quotedRatePerMile := 0.72

!new RentalAgreement('RA_96005')
!RA_96005.number := 96005
!RA_96005.rentalDate := Date('2026-02-18')
!RA_96005.anticipatedDuration := 1
!RA_96005.depositPaid := 0.0
!RA_96005.quotedDailyRate := 19.0
!RA_96005.quotedRatePerMile := 0.0

!new RentalAgreement('RA_96006')
!RA_96006.number := 96006
!RA_96006.rentalDate := Date('2026-02-21')
!RA_96006.anticipatedDuration := 5
!RA_96006.depositPaid := 600.0
!RA_96006.quotedDailyRate := 165.0
!RA_96006.quotedRatePerMile := 0.88

!new RentalAgreement('RA_96007')
!RA_96007.number := 96007
!RA_96007.rentalDate := Date('2026-03-02')
!RA_96007.anticipatedDuration := 2
!RA_96007.depositPaid := 50.0
!RA_96007.quotedDailyRate := 25.0
!RA_96007.quotedRatePerMile := 0.0

!new RentalAgreement('RA_96008')
!RA_96008.number := 96008
!RA_96008.rentalDate := Date('2026-03-10')
!RA_96008.anticipatedDuration := 1
!RA_96008.depositPaid := 100.0
!RA_96008.quotedDailyRate := 59.0
!RA_96008.quotedRatePerMile := 0.4

!new RentalAgreement('RA_96009')
!RA_96009.number := 96009
!RA_96009.rentalDate := Date('2026-03-18')
!RA_96009.anticipatedDuration := 7
!RA_96009.depositPaid := 120.0
!RA_96009.quotedDailyRate := 32.0
!RA_96009.quotedRatePerMile := 0.0

!insert (RO_410, T_7101) into RentalOfficeVehicle
!insert (RO_410, T_7102) into RentalOfficeVehicle
!insert (RO_410, V_7201) into RentalOfficeVehicle
!insert (RO_420, T_7301) into RentalOfficeVehicle
!insert (RO_430, V_7401) into RentalOfficeVehicle
!insert (RO_430, V_7402) into RentalOfficeVehicle
!insert (RO_430, T_7403) into RentalOfficeVehicle
!insert (RO_420, V_7501) into RentalOfficeVehicle

!insert (RO_410, RA_96001) into RentalOfficeRentalAgreementOrigin
!insert (RO_410, RA_96002) into RentalOfficeRentalAgreementOrigin
!insert (RO_410, RA_96003) into RentalOfficeRentalAgreementOrigin
!insert (RO_420, RA_96004) into RentalOfficeRentalAgreementOrigin
!insert (RO_430, RA_96005) into RentalOfficeRentalAgreementOrigin
!insert (RO_430, RA_96006) into RentalOfficeRentalAgreementOrigin
!insert (RO_420, RA_96007) into RentalOfficeRentalAgreementOrigin
!insert (RO_410, RA_96008) into RentalOfficeRentalAgreementOrigin
!insert (RO_430, RA_96009) into RentalOfficeRentalAgreementOrigin

!insert (RO_410, RA_96001) into RentalOfficeRentalAgreementDrop
!insert (RO_410, RA_96002) into RentalOfficeRentalAgreementDrop
!insert (RO_420, RA_96003) into RentalOfficeRentalAgreementDrop
!insert (RO_420, RA_96004) into RentalOfficeRentalAgreementDrop
!insert (RO_440, RA_96005) into RentalOfficeRentalAgreementDrop
!insert (RO_430, RA_96006) into RentalOfficeRentalAgreementDrop
!insert (RO_430, RA_96007) into RentalOfficeRentalAgreementDrop
!insert (RO_410, RA_96008) into RentalOfficeRentalAgreementDrop
!insert (RO_420, RA_96009) into RentalOfficeRentalAgreementDrop

!insert (RA_96001, T_7101) into RentalAgreementVehicle
!insert (RA_96002, V_7201) into RentalAgreementVehicle
!insert (RA_96003, T_7101) into RentalAgreementVehicle
!insert (RA_96004, T_7301) into RentalAgreementVehicle
!insert (RA_96005, V_7401) into RentalAgreementVehicle
!insert (RA_96006, T_7403) into RentalAgreementVehicle
!insert (RA_96007, V_7401) into RentalAgreementVehicle
!insert (RA_96008, T_7102) into RentalAgreementVehicle
!insert (RA_96009, V_7402) into RentalAgreementVehicle

!insert (RA_96001, CUST_C_11) into RentalAgreementCustomer
!insert (RA_96002, CUST_I_11) into RentalAgreementCustomer
!insert (RA_96003, CUST_I_11) into RentalAgreementCustomer
!insert (RA_96004, CUST_I_12) into RentalAgreementCustomer
!insert (RA_96005, CUST_I_13) into RentalAgreementCustomer
!insert (RA_96006, CUST_C_11) into RentalAgreementCustomer
!insert (RA_96007, CUST_I_12) into RentalAgreementCustomer
!insert (RA_96008, CUST_I_11) into RentalAgreementCustomer
!insert (RA_96009, CUST_I_13) into RentalAgreementCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 229 | 0.00% |
| Multiplicities Errors | 0 | 44 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 0 | 9 | 0.00% |
| License Plates | 0 | 8 | 0.00% |
| Home Phones | 0 | 3 | 0.00% |

## Category edge
```
!new RentalOffice('RO10')
!RO10.name := 'Border Returns Depot'
!RO10.number := -1
!RO10.address := '1250 Alameda Ave, El Paso, TX (US–MX crossing lane)'

!new RentalOffice('RO11')
!RO11.name := 'Miami Aeropuerto – Lote B'
!RO11.number := 214
!RO11.address := 'NW 21st St, Miami, FL (Shuttle Stop B)'

!new RentalOffice('RO12')
!RO12.name := 'Phoenix Night Desk (24h)'
!RO12.number := 215
!RO12.address := '3400 E Sky Harbor Blvd, Phoenix, AZ (after-hours kiosk)'

!new Vehicle('V100')
!V100.id := 0
!V100.registrationState := #FL
!V100.licensePlateNumber := 'FL-TRAIL-000'
!V100.vehicleTypeCode := #OPEN_TRAILER
!V100.registrationLastMaintenanceDate := Date('2020-02-29')
!V100.expirationDate := Date('2099-12-31')

!new Vehicle('V101')
!V101.id := 2147483647
!V101.registrationState := #DE
!V101.licensePlateNumber := 'DE-CVR-7'
!V101.vehicleTypeCode := #COVERED_TRAILER
!V101.registrationLastMaintenanceDate := Date('2026-06-30')
!V101.expirationDate := Date('2099-12-31')

!new Truck('V102')
!V102.id := -500
!V102.registrationState := #AZ
!V102.licensePlateNumber := 'AZ-EDGE-500'
!V102.vehicleTypeCode := #TRUCK24
!V102.registrationLastMaintenanceDate := Date('2026-06-30')
!V102.expirationDate := Date('2026-06-30')
!V102.odometerReading := 9999999
!V102.gasTankCapacity := 9999.99
!V102.workingRadio := true
!V102.mileage := 1000000

!new Truck('V103')
!V103.id := 42
!V103.registrationState := #CO
!V103.licensePlateNumber := 'CO-MIN-042'
!V103.vehicleTypeCode := #TRUCK
!V103.registrationLastMaintenanceDate := Date('2026-06-30')
!V103.expirationDate := Date('2099-12-31')
!V103.odometerReading := 1
!V103.gasTankCapacity := 0.0
!V103.workingRadio := true
!V103.mileage := 0

!new Company('C10')
!C10.name := 'Sunrise Cátering S.A.'
!C10.address := '8000 NW 25th St, Miami, FL'
!C10.poorRisk := true
!C10.idNumber := 2147483647

!new Individual('I10')
!I10.name := 'Håkon Østergård'
!I10.address := '1901 Blake St, Denver, CO'
!I10.poorRisk := false
!I10.homePhone := '+1-720-555-0199'
!I10.driverLicenseState := #CT
!I10.driverLicenseNumber := 987654321
!I10.driverLicenseExpirationDate := Date('2099-01-01')

!new Company('C11')
!C11.name := 'No-Contract Holdings Inc.'
!C11.address := '100 King St, Wilmington, DE'
!C11.poorRisk := false
!C11.idNumber := 555

!new RentalAgreement('RA200')
!RA200.number := 0
!RA200.rentalDate := Date('1900-01-01')
!RA200.anticipatedDuration := 1
!RA200.depositPaid := 0.0
!RA200.quotedDailyRate := 99999.99
!RA200.quotedRatePerMile := 0.0

!new RentalAgreement('RA201')
!RA201.number := 2147483647
!RA201.rentalDate := Date('2099-12-31')
!RA201.anticipatedDuration := 999999999
!RA201.depositPaid := 1000000000.0
!RA201.quotedDailyRate := 0.0
!RA201.quotedRatePerMile := 12345.67

!insert (RO12, V100) into RentalOfficeVehicle
!insert (RO12, V101) into RentalOfficeVehicle
!insert (RO10, V102) into RentalOfficeVehicle
!insert (RO11, V103) into RentalOfficeVehicle

!insert (RO11, RA200) into RentalOfficeRentalAgreementOrigin
!insert (RO10, RA200) into RentalOfficeRentalAgreementDrop
!insert (RO12, RA201) into RentalOfficeRentalAgreementOrigin
!insert (RO12, RA201) into RentalOfficeRentalAgreementDrop

!insert (RA200, V100) into RentalAgreementVehicle
!insert (RA201, V102) into RentalAgreementVehicle

!insert (RA200, C10) into RentalAgreementCustomer
!insert (RA201, I10) into RentalAgreementCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 92 | 0.00% |
| Multiplicities Errors | 0 | 12 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 2 | 6 | 33.33% |
| License Plates | 1 | 4 | 25.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
1250 Alameda Ave, El Paso, TX (US–MX crossing lane)
```
```
NW 21st St, Miami, FL (Shuttle Stop B)
```

| Invalid License Plates | 
|---| 
```
FL-TRAIL-000
```

## Category invalid
```
!new RentalOffice('RO_305_DEN2')
!RO_305_DEN2.name := 'Rocky Mountain Fleet Hub'
!RO_305_DEN2.number := 305
!RO_305_DEN2.address := '4900 Washington St, Denver, CO 80216, USA'

!new RentalOffice('RO_12_WHL2')
!RO_12_WHL2.name := 'Sunset Boulevard Rental Depot'
!RO_12_WHL2.number := 12
!RO_12_WHL2.address := '901 N San Vicente Blvd, West Hollywood, CA 90069, USA'

!new RentalOffice('RO_77_PHX2')
!RO_77_PHX2.name := 'Desert Cross-Dock Yard'
!RO_77_PHX2.number := 77
!RO_77_PHX2.address := '2302 E Magnolia St, Phoenix, AZ 85034, USA'

!new Truck('T_71005_2')
!T_71005_2.id := 71005
!T_71005_2.registrationState := #CO
!T_71005_2.licensePlateNumber := 'CO-ADP-7741'
!T_71005_2.vehicleTypeCode := #TRUCK10
!T_71005_2.registrationLastMaintenanceDate := Date('2026-02-01')
!T_71005_2.expirationDate := Date('2027-01-31')
!T_71005_2.odometerReading := 62311
!T_71005_2.gasTankCapacity := 33.0
!T_71005_2.workingRadio := false
!T_71005_2.mileage := 12

!new Vehicle('V_88040_2')
!V_88040_2.id := 88040
!V_88040_2.registrationState := #CA
!V_88040_2.licensePlateNumber := 'NY-TL-98352'
!V_88040_2.vehicleTypeCode := #OPEN_TRAILER
!V_88040_2.registrationLastMaintenanceDate := Date('2025-12-18')
!V_88040_2.expirationDate := Date('2026-12-31')

!new Individual('I_KenjiSato2')
!I_KenjiSato2.name := 'Kenji Sato'
!I_KenjiSato2.address := '36-18 Main St, Flushing, NY 11354, USA'
!I_KenjiSato2.poorRisk := false
!I_KenjiSato2.homePhone := '+1 (718) 555-0144'
!I_KenjiSato2.driverLicenseState := #CA
!I_KenjiSato2.driverLicenseNumber := 90277155
!I_KenjiSato2.driverLicenseExpirationDate := Date('2028-09-09')

!new RentalAgreement('RA_5500123_2')
!RA_5500123_2.number := 5500123
!RA_5500123_2.rentalDate := Date('2026-03-10')
!RA_5500123_2.anticipatedDuration := 4
!RA_5500123_2.depositPaid := 500.0
!RA_5500123_2.quotedDailyRate := 189.95
!RA_5500123_2.quotedRatePerMile := 0.69

!insert (RO_305_DEN2, T_71005_2) into RentalOfficeVehicle
!insert (RO_77_PHX2, V_88040_2) into RentalOfficeVehicle
!insert (RO_12_WHL2, V_88040_2) into RentalOfficeVehicle

!insert (RO_305_DEN2, RA_5500123_2) into RentalOfficeRentalAgreementOrigin
!insert (RO_12_WHL2, RA_5500123_2) into RentalOfficeRentalAgreementDrop

!insert (RA_5500123_2, I_KenjiSato2) into RentalAgreementCustomer

!insert (RA_5500123_2, T_71005_2) into RentalAgreementVehicle
!insert (RA_5500123_2, V_88040_2) into RentalAgreementVehicle
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 2 | 8 | 25.00% |
| Invariants Errors (Not included on General) | 0 | 5 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `RentalOfficeVehicle':
  Object `V_88040_2' of class `Vehicle' is connected to 2 objects of class `RentalOffice'
  at association end `homeOffice' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `RentalAgreementVehicle':
  Object `RA_5500123_2' of class `RentalAgreement' is connected to 2 objects of class `Vehicle'
  at association end `vehicle' but the multiplicity is specified as `1'.
```

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 0 | 4 | 0.00% |
| License Plates | 0 | 2 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

## Generation 2 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 580 | 0.00% |
| Multiplicities Errors | 0 | 95 | 0.00% |
| Invariants Errors | 0 | 20 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 2 | 8 | 25.00% |
| Invariants Errors (Not included on General) | 0 | 5 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `RentalOfficeVehicle':
  Object `V_88040_2' of class `Vehicle' is connected to 2 objects of class `RentalOffice'
  at association end `homeOffice' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `RentalAgreementVehicle':
  Object `RA_5500123_2' of class `RentalAgreement' is connected to 2 objects of class `Vehicle'
  at association end `vehicle' but the multiplicity is specified as `1'.
```

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 4 | 28 | 14.29% |
| License Plates | 2 | 21 | 9.52% |
| Home Phones | 0 | 7 | 0.00% |

| Invalid Addresses | 
|---| 
```
500 Aurora Blvd, Anchorage, AK
```
```
1 Harbor Ring, Anchorage, AK
```
```
1250 Alameda Ave, El Paso, TX (US–MX crossing lane)
```
```
NW 21st St, Miami, FL (Shuttle Stop B)
```

| Invalid License Plates | 
|---| 
```
CO-TRAIL-501
```
```
FL-TRAIL-000
```

# Generation 3
## Category baseline
```
!new RentalOffice('RO_888_MOB')
!RO_888_MOB.name := 'Gulf Coast Haul & Tow – Mobile Port'
!RO_888_MOB.number := 888
!RO_888_MOB.address := '201 S Water St, Mobile, AL 36602, USA'

!new Truck('V_8801')
!V_8801.id := 8801
!V_8801.registrationState := #AL
!V_8801.licensePlateNumber := 'AL-PH8-2041'
!V_8801.vehicleTypeCode := #TRUCK24
!V_8801.registrationLastMaintenanceDate := Date('2026-01-22')
!V_8801.expirationDate := Date('2026-08-31')
!V_8801.odometerReading := 76410
!V_8801.gasTankCapacity := 34.0
!V_8801.workingRadio := false
!V_8801.mileage := 13

!new Vehicle('V_8802')
!V_8802.id := 8802
!V_8802.registrationState := #FL
!V_8802.licensePlateNumber := 'FL-TOW-6620'
!V_8802.vehicleTypeCode := #OPEN_TRAILER
!V_8802.registrationLastMaintenanceDate := Date('2025-10-14')
!V_8802.expirationDate := Date('2026-10-14')

!new Truck('V_8803')
!V_8803.id := 8803
!V_8803.registrationState := #AL
!V_8803.licensePlateNumber := 'AL-WRK-9033'
!V_8803.vehicleTypeCode := #TRUCK10
!V_8803.registrationLastMaintenanceDate := Date('2026-02-03')
!V_8803.expirationDate := Date('2027-02-28')
!V_8803.odometerReading := 15420
!V_8803.gasTankCapacity := 21.0
!V_8803.workingRadio := true
!V_8803.mileage := 18

!new Vehicle('V_8804')
!V_8804.id := 8804
!V_8804.registrationState := #DE
!V_8804.licensePlateNumber := 'DE-CVR-1187'
!V_8804.vehicleTypeCode := #COVERED_TRAILER
!V_8804.registrationLastMaintenanceDate := Date('2025-12-02')
!V_8804.expirationDate := Date('2026-12-02')

!new Individual('CUST_I_701')
!CUST_I_701.name := 'Aïcha Ben Salem'
!CUST_I_701.address := '58 Dauphin St, Mobile, AL 36602, USA'
!CUST_I_701.poorRisk := false
!CUST_I_701.homePhone := '+1-251-555-0129'
!CUST_I_701.driverLicenseState := #AL
!CUST_I_701.driverLicenseNumber := 28017364
!CUST_I_701.driverLicenseExpirationDate := Date('2029-04-30')

!new Company('CUST_C_775')
!CUST_C_775.name := 'Delmarva Cold-Chain Shipping, Inc.'
!CUST_C_775.address := '9 E Loockerman St, Dover, DE 19901, USA'
!CUST_C_775.poorRisk := true
!CUST_C_775.idNumber := 77500931

!new RentalAgreement('RA_88001')
!RA_88001.number := 88001
!RA_88001.rentalDate := Date('2026-04-05')
!RA_88001.anticipatedDuration := 3
!RA_88001.depositPaid := 200.0
!RA_88001.quotedDailyRate := 119.95
!RA_88001.quotedRatePerMile := 0.35

!new RentalAgreement('RA_88002')
!RA_88002.number := 88002
!RA_88002.rentalDate := Date('2026-04-08')
!RA_88002.anticipatedDuration := 5
!RA_88002.depositPaid := 0.0
!RA_88002.quotedDailyRate := 64.0
!RA_88002.quotedRatePerMile := 0.2

!new RentalAgreement('RA_88003')
!RA_88003.number := 88003
!RA_88003.rentalDate := Date('2026-04-20')
!RA_88003.anticipatedDuration := 1
!RA_88003.depositPaid := 75.0
!RA_88003.quotedDailyRate := 28.0
!RA_88003.quotedRatePerMile := 0.0

!insert (RO_888_MOB, V_8801) into RentalOfficeVehicle
!insert (RO_888_MOB, V_8802) into RentalOfficeVehicle
!insert (RO_888_MOB, V_8803) into RentalOfficeVehicle
!insert (RO_888_MOB, V_8804) into RentalOfficeVehicle

!insert (RO_888_MOB, RA_88001) into RentalOfficeRentalAgreementOrigin
!insert (RO_888_MOB, RA_88002) into RentalOfficeRentalAgreementOrigin
!insert (RO_888_MOB, RA_88003) into RentalOfficeRentalAgreementOrigin

!insert (RO_888_MOB, RA_88001) into RentalOfficeRentalAgreementDrop
!insert (RO_888_MOB, RA_88002) into RentalOfficeRentalAgreementDrop
!insert (RO_888_MOB, RA_88003) into RentalOfficeRentalAgreementDrop

!insert (RA_88001, V_8801) into RentalAgreementVehicle
!insert (RA_88002, V_8804) into RentalAgreementVehicle
!insert (RA_88003, V_8802) into RentalAgreementVehicle

!insert (RA_88001, CUST_I_701) into RentalAgreementCustomer
!insert (RA_88002, CUST_C_775) into RentalAgreementCustomer
!insert (RA_88003, CUST_I_701) into RentalAgreementCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 90 | 0.00% |
| Multiplicities Errors | 0 | 16 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 0 | 3 | 0.00% |
| License Plates | 0 | 4 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

## Category boundary
```
!new RentalOffice('RO_10')
!RO_10.name := 'Little Havana Fleet Yard'
!RO_10.number := 10
!RO_10.address := '801 SW 8th St, Miami, FL'

!new RentalOffice('RO_11_B')
!RO_11_B.name := 'Rocky Mountain Counter'
!RO_11_B.number := 11
!RO_11_B.address := '1700 Wynkoop St, Denver, CO'

!new RentalOffice('RO_12_B')
!RO_12_B.name := 'First State Kiosk'
!RO_12_B.number := 12
!RO_12_B.address := '1 Market St, Wilmington, DE'

!new RentalOffice('RO_13')
!RO_13.name := 'Midnight Sun Desk'
!RO_13.number := 13
!RO_13.address := '99 Airport Way, Fairbanks, AK'

!new Truck('T_1_B')
!T_1_B.id := 1
!T_1_B.registrationState := #FL
!T_1_B.licensePlateNumber := 'FL-1A'
!T_1_B.vehicleTypeCode := #TRUCK
!T_1_B.registrationLastMaintenanceDate := Date('1900-01-01')
!T_1_B.expirationDate := Date('9999-12-31')
!T_1_B.odometerReading := 2147483000
!T_1_B.gasTankCapacity := 0.0
!T_1_B.workingRadio := true
!T_1_B.mileage := 2147483647

!new Truck('T_2_B')
!T_2_B.id := 2
!T_2_B.registrationState := #AZ
!T_2_B.licensePlateNumber := 'AZ-0002'
!T_2_B.vehicleTypeCode := #TRUCK10
!T_2_B.registrationLastMaintenanceDate := Date('2026-02-29')
!T_2_B.expirationDate := Date('2026-03-01')
!T_2_B.odometerReading := 0
!T_2_B.gasTankCapacity := 120.5
!T_2_B.workingRadio := false
!T_2_B.mileage := 0

!new Vehicle('V_300_B')
!V_300_B.id := 300
!V_300_B.registrationState := #DE
!V_300_B.licensePlateNumber := 'DE-COV-300'
!V_300_B.vehicleTypeCode := #COVERED_TRAILER
!V_300_B.registrationLastMaintenanceDate := Date('2025-05-05')
!V_300_B.expirationDate := Date('2027-05-05')

!new Vehicle('V_301_B')
!V_301_B.id := 301
!V_301_B.registrationState := #DE
!V_301_B.licensePlateNumber := 'DE-OPN-301'
!V_301_B.vehicleTypeCode := #OPEN_TRAILER
!V_301_B.registrationLastMaintenanceDate := Date('2025-05-06')
!V_301_B.expirationDate := Date('2027-05-06')

!new Vehicle('V_302_B')
!V_302_B.id := 302
!V_302_B.registrationState := #FL
!V_302_B.licensePlateNumber := 'FL-TRAIL-302'
!V_302_B.vehicleTypeCode := #OPEN_TRAILER
!V_302_B.registrationLastMaintenanceDate := Date('2024-12-31')
!V_302_B.expirationDate := Date('2026-12-31')

!new Vehicle('V_400_B')
!V_400_B.id := 400
!V_400_B.registrationState := #CO
!V_400_B.licensePlateNumber := 'CO-COV-400'
!V_400_B.vehicleTypeCode := #COVERED_TRAILER
!V_400_B.registrationLastMaintenanceDate := Date('2026-01-01')
!V_400_B.expirationDate := Date('2026-01-02')

!new Individual('I_10_B')
!I_10_B.name := 'Søren Mikkelsen'
!I_10_B.address := '12 Biscayne Blvd, Miami, FL'
!I_10_B.poorRisk := false
!I_10_B.homePhone := '+1-305-555-0010'
!I_10_B.driverLicenseState := #FL
!I_10_B.driverLicenseNumber := 1000000000
!I_10_B.driverLicenseExpirationDate := Date('9999-12-31')

!new Individual('I_11_B')
!I_11_B.name := 'María-José Rivera'
!I_11_B.address := '2000 Larimer St, Denver, CO'
!I_11_B.poorRisk := true
!I_11_B.homePhone := '303-555-0011'
!I_11_B.driverLicenseState := #CO
!I_11_B.driverLicenseNumber := 1
!I_11_B.driverLicenseExpirationDate := Date('1900-01-01')

!new Company('C_10_B')
!C_10_B.name := 'Kalaallit Freight Co.'
!C_10_B.address := '5 Aurora Industrial Rd, Fairbanks, AK'
!C_10_B.poorRisk := false
!C_10_B.idNumber := 1

!insert (RO_10, T_1_B) into RentalOfficeVehicle
!insert (RO_10, T_2_B) into RentalOfficeVehicle
!insert (RO_10, V_300_B) into RentalOfficeVehicle
!insert (RO_10, V_301_B) into RentalOfficeVehicle
!insert (RO_10, V_302_B) into RentalOfficeVehicle
!insert (RO_11_B, V_400_B) into RentalOfficeVehicle
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 93 | 0.00% |
| Multiplicities Errors | 0 | 6 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 2 | 7 | 28.57% |
| License Plates | 1 | 6 | 16.67% |
| Home Phones | 0 | 2 | 0.00% |

| Invalid Addresses | 
|---| 
```
99 Airport Way, Fairbanks, AK
```
```
5 Aurora Industrial Rd, Fairbanks, AK
```

| Invalid License Plates | 
|---| 
```
FL-TRAIL-302
```

## Category complex
```
!new RentalOffice('RO_510')
!RO_510.name := 'Pacific Coast Cargo Rentals — Los Angeles Harbor'
!RO_510.number := 510
!RO_510.address := '2450 Signal St, Los Angeles, CA 90031'

!new RentalOffice('RO_520')
!RO_520.name := 'Brandywine Utility Rental — Newark'
!RO_520.number := 520
!RO_520.address := '88 Christiana Rd, Newark, DE 19713'

!new RentalOffice('RO_530')
!RO_530.name := 'Capitol Tallahassee Truck Hire'
!RO_530.number := 530
!RO_530.address := '1415 Apalachee Pkwy, Tallahassee, FL 32301'

!new RentalOffice('RO_540')
!RO_540.name := 'Midnight Sun Fleet Rentals — Fairbanks'
!RO_540.number := 540
!RO_540.address := '3100 S Cushman St, Fairbanks, AK 99701'

!new RentalOffice('RO_550')
!RO_550.name := 'Flatirons Mobile Rental Desk — Boulder Pop-up'
!RO_550.number := 550
!RO_550.address := '1770 13th St, Boulder, CO 80302'

!new Truck('T_8101')
!T_8101.id := 8101
!T_8101.registrationState := #AK
!T_8101.licensePlateNumber := 'AK 4HF-771'
!T_8101.vehicleTypeCode := #TRUCK24
!T_8101.registrationLastMaintenanceDate := Date('2026-01-28')
!T_8101.expirationDate := Date('2027-01-31')
!T_8101.odometerReading := 201340
!T_8101.gasTankCapacity := 46.0
!T_8101.workingRadio := true
!T_8101.mileage := 7

!new Truck('T_8102')
!T_8102.id := 8102
!T_8102.registrationState := #AK
!T_8102.licensePlateNumber := 'AK 2RP-033'
!T_8102.vehicleTypeCode := #TRUCK10
!T_8102.registrationLastMaintenanceDate := Date('2026-02-14')
!T_8102.expirationDate := Date('2027-02-28')
!T_8102.odometerReading := 67500
!T_8102.gasTankCapacity := 28.0
!T_8102.workingRadio := false
!T_8102.mileage := 13

!new Truck('T_8103')
!T_8103.id := 8103
!T_8103.registrationState := #FL
!T_8103.licensePlateNumber := 'FL PXM-610'
!T_8103.vehicleTypeCode := #TRUCK
!T_8103.registrationLastMaintenanceDate := Date('2026-03-05')
!T_8103.expirationDate := Date('2027-03-31')
!T_8103.odometerReading := 93440
!T_8103.gasTankCapacity := 34.0
!T_8103.workingRadio := true
!T_8103.mileage := 12

!new Truck('T_8104')
!T_8104.id := 8104
!T_8104.registrationState := #AL
!T_8104.licensePlateNumber := 'AL 6R-20419'
!T_8104.vehicleTypeCode := #TRUCK24
!T_8104.registrationLastMaintenanceDate := Date('2026-02-01')
!T_8104.expirationDate := Date('2027-02-28')
!T_8104.odometerReading := 41220
!T_8104.gasTankCapacity := 41.0
!T_8104.workingRadio := true
!T_8104.mileage := 9

!new Vehicle('V_8201')
!V_8201.id := 8201
!V_8201.registrationState := #DE
!V_8201.licensePlateNumber := 'DE TR-3308'
!V_8201.vehicleTypeCode := #COVERED_TRAILER
!V_8201.registrationLastMaintenanceDate := Date('2025-12-18')
!V_8201.expirationDate := Date('2026-12-31')

!new Vehicle('V_8202')
!V_8202.id := 8202
!V_8202.registrationState := #CA
!V_8202.licensePlateNumber := 'CA 4JXK990'
!V_8202.vehicleTypeCode := #OPEN_TRAILER
!V_8202.registrationLastMaintenanceDate := Date('2026-01-10')
!V_8202.expirationDate := Date('2027-01-31')

!new Vehicle('V_8203')
!V_8203.id := 8203
!V_8203.registrationState := #CA
!V_8203.licensePlateNumber := 'CA 7HVB114'
!V_8203.vehicleTypeCode := #COVERED_TRAILER
!V_8203.registrationLastMaintenanceDate := Date('2025-11-22')
!V_8203.expirationDate := Date('2026-11-30')

!new Vehicle('V_8205')
!V_8205.id := 8205
!V_8205.registrationState := #DE
!V_8205.licensePlateNumber := 'DE TR-7741'
!V_8205.vehicleTypeCode := #OPEN_TRAILER
!V_8205.registrationLastMaintenanceDate := Date('2026-02-02')
!V_8205.expirationDate := Date('2027-02-28')

!new Individual('CUST_I_21')
!CUST_I_21.name := 'Jean-Baptiste Moreau'
!CUST_I_21.address := '611 S Grand Ave, Los Angeles, CA 90017'
!CUST_I_21.poorRisk := false
!CUST_I_21.homePhone := '+1-213-555-0106'
!CUST_I_21.driverLicenseState := #CA
!CUST_I_21.driverLicenseNumber := 49381027
!CUST_I_21.driverLicenseExpirationDate := Date('2028-07-12')

!new Individual('CUST_I_22')
!CUST_I_22.name := 'Keiko Tanaka'
!CUST_I_22.address := '2850 Iris Ave, Boulder, CO 80304'
!CUST_I_22.poorRisk := false
!CUST_I_22.homePhone := '+1-303-555-0133'
!CUST_I_22.driverLicenseState := #CO
!CUST_I_22.driverLicenseNumber := 76011490
!CUST_I_22.driverLicenseExpirationDate := Date('2027-10-09')

!new Individual('CUST_I_23')
!CUST_I_23.name := 'Rashida Khan'
!CUST_I_23.address := '910 W Tennessee St, Tallahassee, FL 32304'
!CUST_I_23.poorRisk := true
!CUST_I_23.homePhone := '+1-850-555-0170'
!CUST_I_23.driverLicenseState := #FL
!CUST_I_23.driverLicenseNumber := 18199002
!CUST_I_23.driverLicenseExpirationDate := Date('2026-12-01')

!new Individual('CUST_I_24')
!CUST_I_24.name := 'Mikkel Sørensen'
!CUST_I_24.address := '14 College Rd, Fairbanks, AK 99701'
!CUST_I_24.poorRisk := false
!CUST_I_24.homePhone := '+1-907-555-0191'
!CUST_I_24.driverLicenseState := #AK
!CUST_I_24.driverLicenseNumber := 33007715
!CUST_I_24.driverLicenseExpirationDate := Date('2029-03-20')

!new Company('CUST_C_21')
!CUST_C_21.name := 'Gulf Coast Film Crew Services, LLC'
!CUST_C_21.address := '33 S Monroe St, Tallahassee, FL 32301'
!CUST_C_21.poorRisk := false
!CUST_C_21.idNumber := 53044012

!new Company('CUST_C_22')
!CUST_C_22.name := 'Arctic Prospecting Partners'
!CUST_C_22.address := '425 Airport Way, Fairbanks, AK 99709'
!CUST_C_22.poorRisk := true
!CUST_C_22.idNumber := 54090277

!new RentalAgreement('RA_97510')
!RA_97510.number := 97510
!RA_97510.rentalDate := Date('2026-04-02')
!RA_97510.anticipatedDuration := 3
!RA_97510.depositPaid := 0.0
!RA_97510.quotedDailyRate := 210.0
!RA_97510.quotedRatePerMile := 1.1

!new RentalAgreement('RA_97511')
!RA_97511.number := 97511
!RA_97511.rentalDate := Date('2026-04-06')
!RA_97511.anticipatedDuration := 1
!RA_97511.depositPaid := 120.0
!RA_97511.quotedDailyRate := 39.0
!RA_97511.quotedRatePerMile := 0.0

!new RentalAgreement('RA_97512')
!RA_97512.number := 97512
!RA_97512.rentalDate := Date('2026-04-07')
!RA_97512.anticipatedDuration := 5
!RA_97512.depositPaid := 250.0
!RA_97512.quotedDailyRate := 49.0
!RA_97512.quotedRatePerMile := 0.0

!new RentalAgreement('RA_97513')
!RA_97513.number := 97513
!RA_97513.rentalDate := Date('2026-04-09')
!RA_97513.anticipatedDuration := 2
!RA_97513.depositPaid := 300.0
!RA_97513.quotedDailyRate := 95.0
!RA_97513.quotedRatePerMile := 0.85

!new RentalAgreement('RA_97514')
!RA_97514.number := 97514
!RA_97514.rentalDate := Date('2026-04-12')
!RA_97514.anticipatedDuration := 7
!RA_97514.depositPaid := 400.0
!RA_97514.quotedDailyRate := 160.0
!RA_97514.quotedRatePerMile := 0.95

!new RentalAgreement('RA_97515')
!RA_97515.number := 97515
!RA_97515.rentalDate := Date('2026-04-20')
!RA_97515.anticipatedDuration := 2
!RA_97515.depositPaid := 0.0
!RA_97515.quotedDailyRate := 0.0
!RA_97515.quotedRatePerMile := 0.0

!new RentalAgreement('RA_97516')
!RA_97516.number := 97516
!RA_97516.rentalDate := Date('2026-04-22')
!RA_97516.anticipatedDuration := 4
!RA_97516.depositPaid := 200.0
!RA_97516.quotedDailyRate := 55.0
!RA_97516.quotedRatePerMile := 0.0

!new RentalAgreement('RA_97517')
!RA_97517.number := 97517
!RA_97517.rentalDate := Date('2026-04-25')
!RA_97517.anticipatedDuration := 1
!RA_97517.depositPaid := 75.0
!RA_97517.quotedDailyRate := 25.0
!RA_97517.quotedRatePerMile := 0.0

!new RentalAgreement('RA_97518')
!RA_97518.number := 97518
!RA_97518.rentalDate := Date('2026-05-01')
!RA_97518.anticipatedDuration := 3
!RA_97518.depositPaid := 500.0
!RA_97518.quotedDailyRate := 210.0
!RA_97518.quotedRatePerMile := 1.1

!new RentalAgreement('RA_97519')
!RA_97519.number := 97519
!RA_97519.rentalDate := Date('2026-05-05')
!RA_97519.anticipatedDuration := 10
!RA_97519.depositPaid := 600.0
!RA_97519.quotedDailyRate := 175.0
!RA_97519.quotedRatePerMile := 0.9

!insert (RO_540, T_8101) into RentalOfficeVehicle
!insert (RO_540, T_8102) into RentalOfficeVehicle
!insert (RO_530, T_8103) into RentalOfficeVehicle
!insert (RO_520, T_8104) into RentalOfficeVehicle
!insert (RO_520, V_8201) into RentalOfficeVehicle
!insert (RO_510, V_8202) into RentalOfficeVehicle
!insert (RO_510, V_8203) into RentalOfficeVehicle
!insert (RO_520, V_8205) into RentalOfficeVehicle

!insert (RO_540, RA_97510) into RentalOfficeRentalAgreementOrigin
!insert (RO_510, RA_97511) into RentalOfficeRentalAgreementOrigin
!insert (RO_530, RA_97512) into RentalOfficeRentalAgreementOrigin
!insert (RO_530, RA_97513) into RentalOfficeRentalAgreementOrigin
!insert (RO_540, RA_97514) into RentalOfficeRentalAgreementOrigin
!insert (RO_550, RA_97515) into RentalOfficeRentalAgreementOrigin
!insert (RO_520, RA_97516) into RentalOfficeRentalAgreementOrigin
!insert (RO_510, RA_97517) into RentalOfficeRentalAgreementOrigin
!insert (RO_510, RA_97518) into RentalOfficeRentalAgreementOrigin
!insert (RO_510, RA_97519) into RentalOfficeRentalAgreementOrigin

!insert (RO_510, RA_97510) into RentalOfficeRentalAgreementDrop
!insert (RO_510, RA_97511) into RentalOfficeRentalAgreementDrop
!insert (RO_510, RA_97512) into RentalOfficeRentalAgreementDrop
!insert (RO_520, RA_97513) into RentalOfficeRentalAgreementDrop
!insert (RO_540, RA_97514) into RentalOfficeRentalAgreementDrop
!insert (RO_520, RA_97515) into RentalOfficeRentalAgreementDrop
!insert (RO_550, RA_97516) into RentalOfficeRentalAgreementDrop
!insert (RO_550, RA_97517) into RentalOfficeRentalAgreementDrop
!insert (RO_540, RA_97518) into RentalOfficeRentalAgreementDrop
!insert (RO_530, RA_97519) into RentalOfficeRentalAgreementDrop

!insert (RA_97510, T_8101) into RentalAgreementVehicle
!insert (RA_97511, V_8202) into RentalAgreementVehicle
!insert (RA_97512, V_8203) into RentalAgreementVehicle
!insert (RA_97513, T_8103) into RentalAgreementVehicle
!insert (RA_97514, T_8102) into RentalAgreementVehicle
!insert (RA_97515, V_8201) into RentalAgreementVehicle
!insert (RA_97516, V_8201) into RentalAgreementVehicle
!insert (RA_97517, V_8203) into RentalAgreementVehicle
!insert (RA_97518, T_8101) into RentalAgreementVehicle
!insert (RA_97519, T_8101) into RentalAgreementVehicle

!insert (RA_97510, CUST_C_22) into RentalAgreementCustomer
!insert (RA_97511, CUST_I_21) into RentalAgreementCustomer
!insert (RA_97512, CUST_C_21) into RentalAgreementCustomer
!insert (RA_97513, CUST_I_23) into RentalAgreementCustomer
!insert (RA_97514, CUST_I_24) into RentalAgreementCustomer
!insert (RA_97515, CUST_I_22) into RentalAgreementCustomer
!insert (RA_97516, CUST_I_22) into RentalAgreementCustomer
!insert (RA_97517, CUST_I_21) into RentalAgreementCustomer
!insert (RA_97518, CUST_C_22) into RentalAgreementCustomer
!insert (RA_97519, CUST_C_21) into RentalAgreementCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 252 | 0.00% |
| Multiplicities Errors | 0 | 48 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 3 | 11 | 27.27% |
| License Plates | 0 | 8 | 0.00% |
| Home Phones | 0 | 4 | 0.00% |

| Invalid Addresses | 
|---| 
```
2450 Signal St, Los Angeles, CA 90031
```
```
33 S Monroe St, Tallahassee, FL 32301
```
```
425 Airport Way, Fairbanks, AK 99709
```

## Category edge
```
!new RentalOffice('RO20')
!RO20.name := 'Central Reservations (No Fleet On Site)'
!RO20.number := 20
!RO20.address := 'Online-only desk, PO Box 20, Hartford, CT'

!new RentalOffice('RO21')
!RO21.name := 'Desert Storage Lot'
!RO21.number := 21
!RO21.address := '701 W Buckeye Rd, Phoenix, AZ'

!new RentalOffice('RO22')
!RO22.name := 'Coastal After-Hours Gate'
!RO22.number := 22
!RO22.address := '500 Port Blvd, Miami, FL (gate code required)'

!new RentalOffice('RO23')
!RO23.name := 'Old Town Counter'
!RO23.number := 23
!RO23.address := '12 King St, Wilmington, DE'

!new Truck('V200')
!V200.id := 200
!V200.registrationState := #AZ
!V200.licensePlateNumber := 'AZ-ZERO-200'
!V200.vehicleTypeCode := #TRUCK10
!V200.registrationLastMaintenanceDate := Date('1999-12-31')
!V200.expirationDate := Date('2030-01-01')
!V200.odometerReading := 0
!V200.gasTankCapacity := 0.0
!V200.workingRadio := false
!V200.mileage := 0

!new Vehicle('V201')
!V201.id := 201
!V201.registrationState := #FL
!V201.licensePlateNumber := 'FL-OPEN-201'
!V201.vehicleTypeCode := #OPEN_TRAILER
!V201.registrationLastMaintenanceDate := Date('2026/07/04')
!V201.expirationDate := Date('2026/07/04')

!new Truck('V202')
!V202.id := 202
!V202.registrationState := #CO
!V202.licensePlateNumber := 'CO-HIGH-202'
!V202.vehicleTypeCode := #TRUCK24
!V202.registrationLastMaintenanceDate := Date('2026-07-04T23:59:59Z')
!V202.expirationDate := Date('2030-01-01')
!V202.odometerReading := 888888
!V202.gasTankCapacity := 150.5
!V202.workingRadio := true
!V202.mileage := 1

!new Vehicle('V203')
!V203.id := 203
!V203.registrationState := #DE
!V203.licensePlateNumber := 'DE-COV-203'
!V203.vehicleTypeCode := #COVERED_TRAILER
!V203.registrationLastMaintenanceDate := Date('04-07-2026')
!V203.expirationDate := Date('2030-01-01')

!new Individual('I20')
!I20.name := 'Samir Al‑Khatib'
!I20.address := '77 Maple Ave, Hartford, CT'
!I20.poorRisk := true
!I20.homePhone := ''
!I20.driverLicenseState := #AL
!I20.driverLicenseNumber := -12345
!I20.driverLicenseExpirationDate := Date('2026/07/04')

!new Company('C20')
!C20.name := 'Kōyō Transport Co.'
!C20.address := '1 Harbor Way, Miami, FL'
!C20.poorRisk := false
!C20.idNumber := -999

!new Company('C21')
!C21.name := 'Dormant Account GmbH'
!C21.address := '12 King St, Wilmington, DE'
!C21.poorRisk := false
!C21.idNumber := 21

!new RentalAgreement('RA300')
!RA300.number := 300
!RA300.rentalDate := Date('2026/07/04')
!RA300.anticipatedDuration := 0
!RA300.depositPaid := 0.0
!RA300.quotedDailyRate := 0.0
!RA300.quotedRatePerMile := 0.0001

!new RentalAgreement('RA301')
!RA301.number := 301
!RA301.rentalDate := Date('2026/07/04')
!RA301.anticipatedDuration := 999999
!RA301.depositPaid := 0.0
!RA301.quotedDailyRate := 999999.99
!RA301.quotedRatePerMile := 0.0

!new RentalAgreement('RA302')
!RA302.number := 302
!RA302.rentalDate := Date('04-07-2026')
!RA302.anticipatedDuration := 1
!RA302.depositPaid := 0.0
!RA302.quotedDailyRate := 1.0
!RA302.quotedRatePerMile := 1.0

!new RentalAgreement('RA303')
!RA303.number := 303
!RA303.rentalDate := Date('2026-07-04T23:59:59Z')
!RA303.anticipatedDuration := 0
!RA303.depositPaid := 100000000.0
!RA303.quotedDailyRate := 0.0
!RA303.quotedRatePerMile := 5000.0

!new RentalAgreement('RA304')
!RA304.number := 304
!RA304.rentalDate := Date('2026/07/04')
!RA304.anticipatedDuration := 0
!RA304.depositPaid := 0.0
!RA304.quotedDailyRate := 0.0
!RA304.quotedRatePerMile := 0.0

!insert (RO21, V200) into RentalOfficeVehicle
!insert (RO21, V201) into RentalOfficeVehicle
!insert (RO21, V202) into RentalOfficeVehicle
!insert (RO23, V203) into RentalOfficeVehicle

!insert (RO20, RA300) into RentalOfficeRentalAgreementOrigin
!insert (RO20, RA301) into RentalOfficeRentalAgreementOrigin
!insert (RO20, RA302) into RentalOfficeRentalAgreementOrigin
!insert (RO20, RA303) into RentalOfficeRentalAgreementOrigin
!insert (RO20, RA304) into RentalOfficeRentalAgreementOrigin

!insert (RO22, RA300) into RentalOfficeRentalAgreementDrop
!insert (RO22, RA301) into RentalOfficeRentalAgreementDrop
!insert (RO21, RA302) into RentalOfficeRentalAgreementDrop
!insert (RO23, RA303) into RentalOfficeRentalAgreementDrop
!insert (RO22, RA304) into RentalOfficeRentalAgreementDrop

!insert (RA300, V200) into RentalAgreementVehicle
!insert (RA301, V200) into RentalAgreementVehicle
!insert (RA302, V201) into RentalAgreementVehicle
!insert (RA303, V202) into RentalAgreementVehicle
!insert (RA304, V200) into RentalAgreementVehicle

!insert (RA300, I20) into RentalAgreementCustomer
!insert (RA301, I20) into RentalAgreementCustomer
!insert (RA302, I20) into RentalAgreementCustomer
!insert (RA303, C20) into RentalAgreementCustomer
!insert (RA304, I20) into RentalAgreementCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 129 | 0.00% |
| Multiplicities Errors | 0 | 24 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 4 | 7 | 57.14% |
| License Plates | 0 | 4 | 0.00% |
| Home Phones | 0 | 0 | 0.00% |

| Invalid Addresses | 
|---| 
```
Online-only desk, PO Box 20, Hartford, CT
```
```
500 Port Blvd, Miami, FL (gate code required)
```
```
12 King St, Wilmington, DE
```
```
12 King St, Wilmington, DE
```

## Category invalid
```
!new RentalOffice('RO_501_OC3')
!RO_501_OC3.name := 'Anchorage Equipment Yard'
!RO_501_OC3.number := 501
!RO_501_OC3.address := '5401 Old Seward Hwy, Anchorage, AK 99518, USA'

!new RentalOffice('RO_502_OC3')
!RO_502_OC3.name := 'Fairbanks Airport Truck Desk'
!RO_502_OC3.number := 502
!RO_502_OC3.address := '6450 Airport Way, Fairbanks, AK 99709, USA'

!new RentalOffice('RO_503_OC3')
!RO_503_OC3.name := 'Juneau Harbor Returns'
!RO_503_OC3.number := 503
!RO_503_OC3.address := '490 S Franklin St, Juneau, AK 99801, USA'

!new Truck('T_30012_OC3')
!T_30012_OC3.id := 30012
!T_30012_OC3.registrationState := #AK
!T_30012_OC3.licensePlateNumber := 'AK-JNU-2047'
!T_30012_OC3.vehicleTypeCode := #TRUCK24
!T_30012_OC3.registrationLastMaintenanceDate := Date('2026-04-05')
!T_30012_OC3.expirationDate := Date('2027-04-30')
!T_30012_OC3.odometerReading := 91207
!T_30012_OC3.gasTankCapacity := 72.5
!T_30012_OC3.workingRadio := true
!T_30012_OC3.mileage := 9

!new Vehicle('V_30088_OC3')
!V_30088_OC3.id := 30088
!V_30088_OC3.registrationState := #AK
!V_30088_OC3.licensePlateNumber := 'AK-TRL-7710'
!V_30088_OC3.vehicleTypeCode := #COVERED_TRAILER
!V_30088_OC3.registrationLastMaintenanceDate := Date('2026-03-18')
!V_30088_OC3.expirationDate := Date('2026-10-15')

!new Company('C_AuroraBorealis_OC3')
!C_AuroraBorealis_OC3.name := 'Aurora Borealis Field Sciences, Inc.'
!C_AuroraBorealis_OC3.address := '1001 Spenard Rd, Anchorage, AK 99503, USA'
!C_AuroraBorealis_OC3.poorRisk := false
!C_AuroraBorealis_OC3.idNumber := 4401906

!new RentalAgreement('RA_90077_OC3')
!RA_90077_OC3.number := 90077
!RA_90077_OC3.rentalDate := Date('2026-06-01')
!RA_90077_OC3.anticipatedDuration := 14
!RA_90077_OC3.depositPaid := -150.0
!RA_90077_OC3.quotedDailyRate := 164.0
!RA_90077_OC3.quotedRatePerMile := 0.55

!insert (RO_502_OC3, T_30012_OC3) into RentalOfficeVehicle
!insert (RO_501_OC3, V_30088_OC3) into RentalOfficeVehicle

!insert (RA_90077_OC3, T_30012_OC3) into RentalAgreementVehicle
!insert (RA_90077_OC3, C_AuroraBorealis_OC3) into RentalAgreementCustomer

!insert (RO_503_OC3, RA_90077_OC3) into RentalOfficeRentalAgreementDrop

!insert (RO_501_OC3, RA_90077_OC3) into RentalOfficeRentalAgreementOrigin
!insert (RO_502_OC3, RA_90077_OC3) into RentalOfficeRentalAgreementOrigin
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 7 | 14.29% |
| Invariants Errors (Not included on General) | 1 | 5 | 20.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `RentalOfficeRentalAgreementOrigin':
  Object `RA_90077_OC3' of class `RentalAgreement' is connected to 2 objects of class `RentalOffice'
  at association end `originatingRentalOffice' but the multiplicity is specified as `1'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (1) `RentalAgreement::positiveDepositPaid': FAILED.
```

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 0 | 4 | 0.00% |
| License Plates | 0 | 2 | 0.00% |
| Home Phones | 0 | 0 | 0.00% |

## Generation 3 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 613 | 0.00% |
| Multiplicities Errors | 0 | 94 | 0.00% |
| Invariants Errors | 0 | 20 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 7 | 14.29% |
| Invariants Errors (Not included on General) | 1 | 5 | 20.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `RentalOfficeRentalAgreementOrigin':
  Object `RA_90077_OC3' of class `RentalAgreement' is connected to 2 objects of class `RentalOffice'
  at association end `originatingRentalOffice' but the multiplicity is specified as `1'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (1) `RentalAgreement::positiveDepositPaid': FAILED.
```

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 9 | 32 | 28.13% |
| License Plates | 1 | 24 | 4.17% |
| Home Phones | 0 | 7 | 0.00% |

| Invalid Addresses | 
|---| 
```
99 Airport Way, Fairbanks, AK
```
```
5 Aurora Industrial Rd, Fairbanks, AK
```
```
2450 Signal St, Los Angeles, CA 90031
```
```
33 S Monroe St, Tallahassee, FL 32301
```
```
425 Airport Way, Fairbanks, AK 99709
```
```
Online-only desk, PO Box 20, Hartford, CT
```
```
500 Port Blvd, Miami, FL (gate code required)
```
```
12 King St, Wilmington, DE
```
```
12 King St, Wilmington, DE
```

| Invalid License Plates | 
|---| 
```
FL-TRAIL-302
```

# Generation 4
## Category baseline
```
!new RentalOffice('RO_41_NHV')
!RO_41_NHV.name := 'Soundside Truck & Trailer – New Haven'
!RO_41_NHV.number := 41
!RO_41_NHV.address := '250 State St, New Haven, CT 06510, USA'

!new RentalOffice('RO_42_WILRF')
!RO_42_WILRF.name := 'Brandywine Rentals – Wilmington Riverfront'
!RO_42_WILRF.number := 42
!RO_42_WILRF.address := '760 Justison St, Wilmington, DE 19801, USA'

!new RentalOffice('RO_9_KW')
!RO_9_KW.name := 'Island Drop Point – Key West'
!RO_9_KW.number := 9
!RO_9_KW.address := '101 Front St, Key West, FL 33040, USA'

!new Truck('V_3001')
!V_3001.id := 3001
!V_3001.registrationState := #CT
!V_3001.licensePlateNumber := 'CT-HL-7049'
!V_3001.vehicleTypeCode := #TRUCK24
!V_3001.registrationLastMaintenanceDate := Date('2026-01-08')
!V_3001.expirationDate := Date('2026-07-31')
!V_3001.odometerReading := 88910
!V_3001.gasTankCapacity := 31.5
!V_3001.workingRadio := true
!V_3001.mileage := 12

!new Vehicle('V_3002')
!V_3002.id := 3002
!V_3002.registrationState := #CT
!V_3002.licensePlateNumber := 'CT-CV-2210'
!V_3002.vehicleTypeCode := #COVERED_TRAILER
!V_3002.registrationLastMaintenanceDate := Date('2025-12-14')
!V_3002.expirationDate := Date('2026-12-14')

!new Vehicle('V_3003')
!V_3003.id := 3003
!V_3003.registrationState := #DE
!V_3003.licensePlateNumber := 'DE-OP-9031'
!V_3003.vehicleTypeCode := #OPEN_TRAILER
!V_3003.registrationLastMaintenanceDate := Date('2026-02-11')
!V_3003.expirationDate := Date('2027-02-28')

!new Company('CUST_C_600')
!CUST_C_600.name := 'Nordic Film Crew AB (US Unit)'
!CUST_C_600.address := '500 S Buena Vista St, Burbank, CA 91521, USA'
!CUST_C_600.poorRisk := false
!CUST_C_600.idNumber := 6007712

!new Individual('CUST_I_155')
!CUST_I_155.name := 'Zoë Martínez'
!CUST_I_155.address := '18 Wooster Pl, New Haven, CT 06511, USA'
!CUST_I_155.poorRisk := false
!CUST_I_155.homePhone := '+1-203-555-0164'
!CUST_I_155.driverLicenseState := #CT
!CUST_I_155.driverLicenseNumber := 41855021
!CUST_I_155.driverLicenseExpirationDate := Date('2028-09-30')

!new Individual('CUST_I_156')
!CUST_I_156.name := 'Caleb Johnson'
!CUST_I_156.address := '904 N Market St, Wilmington, DE 19801, USA'
!CUST_I_156.poorRisk := true
!CUST_I_156.homePhone := '+1-302-555-0108'
!CUST_I_156.driverLicenseState := #DE
!CUST_I_156.driverLicenseNumber := 9901735
!CUST_I_156.driverLicenseExpirationDate := Date('2026-11-20')

!new RentalAgreement('RA_41001')
!RA_41001.number := 41001
!RA_41001.rentalDate := Date('2026-05-02')
!RA_41001.anticipatedDuration := 2
!RA_41001.depositPaid := 500.0
!RA_41001.quotedDailyRate := 149.0
!RA_41001.quotedRatePerMile := 0.55

!new RentalAgreement('RA_41002')
!RA_41002.number := 41002
!RA_41002.rentalDate := Date('2026-05-04')
!RA_41002.anticipatedDuration := 6
!RA_41002.depositPaid := 100.0
!RA_41002.quotedDailyRate := 42.0
!RA_41002.quotedRatePerMile := 0.1

!new RentalAgreement('RA_41003')
!RA_41003.number := 41003
!RA_41003.rentalDate := Date('2026-05-11')
!RA_41003.anticipatedDuration := 5
!RA_41003.depositPaid := 0.0
!RA_41003.quotedDailyRate := 165.0
!RA_41003.quotedRatePerMile := 0.6

!new RentalAgreement('RA_41004')
!RA_41004.number := 41004
!RA_41004.rentalDate := Date('2026-05-18')
!RA_41004.anticipatedDuration := 1
!RA_41004.depositPaid := 75.0
!RA_41004.quotedDailyRate := 35.0
!RA_41004.quotedRatePerMile := 0.0

!new RentalAgreement('RA_41005')
!RA_41005.number := 41005
!RA_41005.rentalDate := Date('2026-05-25')
!RA_41005.anticipatedDuration := 3
!RA_41005.depositPaid := 250.0
!RA_41005.quotedDailyRate := 139.5
!RA_41005.quotedRatePerMile := 0.49

!insert (RO_41_NHV, V_3001) into RentalOfficeVehicle
!insert (RO_41_NHV, V_3002) into RentalOfficeVehicle
!insert (RO_42_WILRF, V_3003) into RentalOfficeVehicle

!insert (RO_41_NHV, RA_41001) into RentalOfficeRentalAgreementOrigin
!insert (RO_42_WILRF, RA_41002) into RentalOfficeRentalAgreementOrigin
!insert (RO_42_WILRF, RA_41003) into RentalOfficeRentalAgreementOrigin
!insert (RO_42_WILRF, RA_41004) into RentalOfficeRentalAgreementOrigin
!insert (RO_41_NHV, RA_41005) into RentalOfficeRentalAgreementOrigin

!insert (RO_42_WILRF, RA_41001) into RentalOfficeRentalAgreementDrop
!insert (RO_41_NHV, RA_41002) into RentalOfficeRentalAgreementDrop
!insert (RO_9_KW, RA_41003) into RentalOfficeRentalAgreementDrop
!insert (RO_42_WILRF, RA_41004) into RentalOfficeRentalAgreementDrop
!insert (RO_41_NHV, RA_41005) into RentalOfficeRentalAgreementDrop

!insert (RA_41001, V_3001) into RentalAgreementVehicle
!insert (RA_41002, V_3002) into RentalAgreementVehicle
!insert (RA_41003, V_3001) into RentalAgreementVehicle
!insert (RA_41004, V_3003) into RentalAgreementVehicle
!insert (RA_41005, V_3001) into RentalAgreementVehicle

!insert (RA_41001, CUST_C_600) into RentalAgreementCustomer
!insert (RA_41002, CUST_I_155) into RentalAgreementCustomer
!insert (RA_41003, CUST_I_156) into RentalAgreementCustomer
!insert (RA_41004, CUST_C_600) into RentalAgreementCustomer
!insert (RA_41005, CUST_I_156) into RentalAgreementCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 116 | 0.00% |
| Multiplicities Errors | 0 | 23 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 0 | 6 | 0.00% |
| License Plates | 0 | 3 | 0.00% |
| Home Phones | 0 | 2 | 0.00% |

## Category boundary
```
!new RentalOffice('RO_500')
!RO_500.name := 'Desert One-Stop Rentals'
!RO_500.number := 500
!RO_500.address := '500 E Van Buren St, Phoenix, AZ 85004'

!new Truck('T_50')
!T_50.id := 50
!T_50.registrationState := #AZ
!T_50.licensePlateNumber := 'AZ-DESERT-0050'
!T_50.vehicleTypeCode := #TRUCK
!T_50.registrationLastMaintenanceDate := Date('2026-01-31')
!T_50.expirationDate := Date('2026-02-01')
!T_50.odometerReading := 1
!T_50.gasTankCapacity := 0.0
!T_50.workingRadio := true
!T_50.mileage := 1

!new Vehicle('V_51')
!V_51.id := 51
!V_51.registrationState := #AL
!V_51.licensePlateNumber := 'AL-TRAILER-000051'
!V_51.vehicleTypeCode := #OPEN_TRAILER
!V_51.registrationLastMaintenanceDate := Date('2025-08-15')
!V_51.expirationDate := Date('2027-08-15')

!new Individual('I_50')
!I_50.name := 'Hiro Tanaka'
!I_50.address := '12 W Monroe St, Phoenix, AZ'
!I_50.poorRisk := true
!I_50.homePhone := '+1-602-555-0050'
!I_50.driverLicenseState := #AZ
!I_50.driverLicenseNumber := 50050
!I_50.driverLicenseExpirationDate := Date('2026-02-01')

!new Company('C_51')
!C_51.name := 'Alabama Stagecraft LLC'
!C_51.address := '1 Theater Way, Montgomery, AL'
!C_51.poorRisk := false
!C_51.idNumber := 51

!new RentalAgreement('RA_5000')
!RA_5000.number := 5000
!RA_5000.rentalDate := Date('2026-02-01')
!RA_5000.anticipatedDuration := 0
!RA_5000.depositPaid := 0.0
!RA_5000.quotedDailyRate := 0.0
!RA_5000.quotedRatePerMile := 0.0

!new RentalAgreement('RA_5001_B')
!RA_5001_B.number := 5001
!RA_5001_B.rentalDate := Date('2026-02-02')
!RA_5001_B.anticipatedDuration := 1
!RA_5001_B.depositPaid := 0.0
!RA_5001_B.quotedDailyRate := 250.0
!RA_5001_B.quotedRatePerMile := 0.0

!insert (RO_500, T_50) into RentalOfficeVehicle
!insert (RO_500, V_51) into RentalOfficeVehicle

!insert (RO_500, RA_5000) into RentalOfficeRentalAgreementOrigin
!insert (RO_500, RA_5001_B) into RentalOfficeRentalAgreementOrigin

!insert (RO_500, RA_5000) into RentalOfficeRentalAgreementDrop
!insert (RO_500, RA_5001_B) into RentalOfficeRentalAgreementDrop

!insert (RA_5000, T_50) into RentalAgreementVehicle
!insert (RA_5001_B, V_51) into RentalAgreementVehicle

!insert (RA_5000, I_50) into RentalAgreementCustomer
!insert (RA_5001_B, I_50) into RentalAgreementCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 59 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 1 | 3 | 33.33% |
| License Plates | 2 | 2 | 100.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
1 Theater Way, Montgomery, AL
```

| Invalid License Plates | 
|---| 
```
AZ-DESERT-0050
```
```
AL-TRAILER-000051
```

## Category complex
```
!new RentalOffice('RO_610')
!RO_610.name := 'Elm City Commercial Rentals — New Haven'
!RO_610.number := 610
!RO_610.address := '1175 State St, New Haven, CT 06511'

!new RentalOffice('RO_620')
!RO_620.name := 'First State Returns Hub — Dover'
!RO_620.number := 620
!RO_620.address := '45 S Governors Ave, Dover, DE 19904'

!new RentalOffice('RO_630')
!RO_630.name := 'Desert Loop Truck & Trailer — Tempe'
!RO_630.number := 630
!RO_630.address := '2120 E University Dr, Tempe, AZ 85281'

!new RentalOffice('RO_640')
!RO_640.name := 'RiverCity Rentals — Jacksonville'
!RO_640.number := 640
!RO_640.address := '3100 Philips Hwy, Jacksonville, FL 32207'

!new Truck('T_9101_CX4')
!T_9101_CX4.id := 9101
!T_9101_CX4.registrationState := #FL
!T_9101_CX4.licensePlateNumber := 'FL RYQ-284'
!T_9101_CX4.vehicleTypeCode := #TRUCK24
!T_9101_CX4.registrationLastMaintenanceDate := Date('2026-01-19')
!T_9101_CX4.expirationDate := Date('2027-01-31')
!T_9101_CX4.odometerReading := 158220
!T_9101_CX4.gasTankCapacity := 43.0
!T_9101_CX4.workingRadio := true
!T_9101_CX4.mileage := 8

!new Truck('T_9102_CX4')
!T_9102_CX4.id := 9102
!T_9102_CX4.registrationState := #CT
!T_9102_CX4.licensePlateNumber := 'CT 6AN-9031'
!T_9102_CX4.vehicleTypeCode := #TRUCK10
!T_9102_CX4.registrationLastMaintenanceDate := Date('2025-12-08')
!T_9102_CX4.expirationDate := Date('2026-12-31')
!T_9102_CX4.odometerReading := 52210
!T_9102_CX4.gasTankCapacity := 26.0
!T_9102_CX4.workingRadio := false
!T_9102_CX4.mileage := 14

!new Truck('T_9103_CX4')
!T_9103_CX4.id := 9103
!T_9103_CX4.registrationState := #AZ
!T_9103_CX4.licensePlateNumber := 'AZ DPK-7710'
!T_9103_CX4.vehicleTypeCode := #TRUCK
!T_9103_CX4.registrationLastMaintenanceDate := Date('2026-02-03')
!T_9103_CX4.expirationDate := Date('2027-02-28')
!T_9103_CX4.odometerReading := 90340
!T_9103_CX4.gasTankCapacity := 34.0
!T_9103_CX4.workingRadio := true
!T_9103_CX4.mileage := 12

!new Vehicle('V_9201_CX4')
!V_9201_CX4.id := 9201
!V_9201_CX4.registrationState := #FL
!V_9201_CX4.licensePlateNumber := 'FL TR-1107'
!V_9201_CX4.vehicleTypeCode := #COVERED_TRAILER
!V_9201_CX4.registrationLastMaintenanceDate := Date('2025-10-21')
!V_9201_CX4.expirationDate := Date('2026-10-31')

!new Vehicle('V_9202_CX4')
!V_9202_CX4.id := 9202
!V_9202_CX4.registrationState := #FL
!V_9202_CX4.licensePlateNumber := 'FL OT-5582'
!V_9202_CX4.vehicleTypeCode := #OPEN_TRAILER
!V_9202_CX4.registrationLastMaintenanceDate := Date('2026-01-09')
!V_9202_CX4.expirationDate := Date('2027-01-31')

!new Vehicle('V_9301_CX4')
!V_9301_CX4.id := 9301
!V_9301_CX4.registrationState := #CT
!V_9301_CX4.licensePlateNumber := 'CT TR-4402'
!V_9301_CX4.vehicleTypeCode := #COVERED_TRAILER
!V_9301_CX4.registrationLastMaintenanceDate := Date('2025-11-30')
!V_9301_CX4.expirationDate := Date('2026-11-30')

!new Vehicle('V_9302_CX4')
!V_9302_CX4.id := 9302
!V_9302_CX4.registrationState := #CO
!V_9302_CX4.licensePlateNumber := 'CO OT-9011'
!V_9302_CX4.vehicleTypeCode := #OPEN_TRAILER
!V_9302_CX4.registrationLastMaintenanceDate := Date('2025-09-12')
!V_9302_CX4.expirationDate := Date('2026-09-30')

!new Vehicle('V_9401_CX4')
!V_9401_CX4.id := 9401
!V_9401_CX4.registrationState := #AZ
!V_9401_CX4.licensePlateNumber := 'AZ TR-3008'
!V_9401_CX4.vehicleTypeCode := #COVERED_TRAILER
!V_9401_CX4.registrationLastMaintenanceDate := Date('2025-08-25')
!V_9401_CX4.expirationDate := Date('2026-08-31')

!new Vehicle('V_9402_CX4')
!V_9402_CX4.id := 9402
!V_9402_CX4.registrationState := #CA
!V_9402_CX4.licensePlateNumber := 'CA 3JQW812'
!V_9402_CX4.vehicleTypeCode := #OPEN_TRAILER
!V_9402_CX4.registrationLastMaintenanceDate := Date('2025-07-17')
!V_9402_CX4.expirationDate := Date('2026-07-31')

!new Vehicle('V_9403_CX4')
!V_9403_CX4.id := 9403
!V_9403_CX4.registrationState := #AZ
!V_9403_CX4.licensePlateNumber := 'AZ OT-7214'
!V_9403_CX4.vehicleTypeCode := #OPEN_TRAILER
!V_9403_CX4.registrationLastMaintenanceDate := Date('2025-12-02')
!V_9403_CX4.expirationDate := Date('2026-12-31')

!new Individual('CUST_I_31_CX4')
!CUST_I_31_CX4.name := 'Nguyễn Thảo'
!CUST_I_31_CX4.address := '940 Riverside Ave, Jacksonville, FL 32204'
!CUST_I_31_CX4.poorRisk := false
!CUST_I_31_CX4.homePhone := '+1-904-555-0141'
!CUST_I_31_CX4.driverLicenseState := #FL
!CUST_I_31_CX4.driverLicenseNumber := 77124019
!CUST_I_31_CX4.driverLicenseExpirationDate := Date('2028-11-08')

!new Individual('CUST_I_32_CX4')
!CUST_I_32_CX4.name := 'Sofía Ibarra'
!CUST_I_32_CX4.address := '155 W 5th St, Tempe, AZ 85281'
!CUST_I_32_CX4.poorRisk := false
!CUST_I_32_CX4.homePhone := '+1-480-555-0176'
!CUST_I_32_CX4.driverLicenseState := #AZ
!CUST_I_32_CX4.driverLicenseNumber := 22090118
!CUST_I_32_CX4.driverLicenseExpirationDate := Date('2027-03-14')

!new Company('CUST_C_31_CX4')
!CUST_C_31_CX4.name := 'BlueHeron Disaster Response Corp.'
!CUST_C_31_CX4.address := '50 N Laura St, Jacksonville, FL 32202'
!CUST_C_31_CX4.poorRisk := true
!CUST_C_31_CX4.idNumber := 64033021

!new Company('CUST_C_32_CX4')
!CUST_C_32_CX4.name := 'Kintsugi Art Shipping Co.'
!CUST_C_32_CX4.address := '302 Crown St, New Haven, CT 06511'
!CUST_C_32_CX4.poorRisk := false
!CUST_C_32_CX4.idNumber := 61088004

!new RentalAgreement('RA_98801_CX4')
!RA_98801_CX4.number := 98801
!RA_98801_CX4.rentalDate := Date('2026-05-02')
!RA_98801_CX4.anticipatedDuration := 2
!RA_98801_CX4.depositPaid := 0.0
!RA_98801_CX4.quotedDailyRate := 199.0
!RA_98801_CX4.quotedRatePerMile := 1.15

!new RentalAgreement('RA_98802_CX4')
!RA_98802_CX4.number := 98802
!RA_98802_CX4.rentalDate := Date('2026-05-04')
!RA_98802_CX4.anticipatedDuration := 1
!RA_98802_CX4.depositPaid := 75.0
!RA_98802_CX4.quotedDailyRate := 35.0
!RA_98802_CX4.quotedRatePerMile := 0.0

!new RentalAgreement('RA_98803_CX4')
!RA_98803_CX4.number := 98803
!RA_98803_CX4.rentalDate := Date('2026-05-10')
!RA_98803_CX4.anticipatedDuration := 3
!RA_98803_CX4.depositPaid := 50.0
!RA_98803_CX4.quotedDailyRate := 29.0
!RA_98803_CX4.quotedRatePerMile := 0.0

!new RentalAgreement('RA_98804_CX4')
!RA_98804_CX4.number := 98804
!RA_98804_CX4.rentalDate := Date('2026-05-12')
!RA_98804_CX4.anticipatedDuration := 6
!RA_98804_CX4.depositPaid := 150.0
!RA_98804_CX4.quotedDailyRate := 45.0
!RA_98804_CX4.quotedRatePerMile := 0.0

!new RentalAgreement('RA_98805_CX4')
!RA_98805_CX4.number := 98805
!RA_98805_CX4.rentalDate := Date('2026-05-15')
!RA_98805_CX4.anticipatedDuration := 2
!RA_98805_CX4.depositPaid := 250.0
!RA_98805_CX4.quotedDailyRate := 109.0
!RA_98805_CX4.quotedRatePerMile := 0.65

!new RentalAgreement('RA_98806_CX4')
!RA_98806_CX4.number := 98806
!RA_98806_CX4.rentalDate := Date('2026-05-18')
!RA_98806_CX4.anticipatedDuration := 1
!RA_98806_CX4.depositPaid := 200.0
!RA_98806_CX4.quotedDailyRate := 99.0
!RA_98806_CX4.quotedRatePerMile := 0.7

!new RentalAgreement('RA_98807_CX4')
!RA_98807_CX4.number := 98807
!RA_98807_CX4.rentalDate := Date('2026-05-20')
!RA_98807_CX4.anticipatedDuration := 4
!RA_98807_CX4.depositPaid := 120.0
!RA_98807_CX4.quotedDailyRate := 39.0
!RA_98807_CX4.quotedRatePerMile := 0.0

!new RentalAgreement('RA_98808_CX4')
!RA_98808_CX4.number := 98808
!RA_98808_CX4.rentalDate := Date('2026-05-23')
!RA_98808_CX4.anticipatedDuration := 2
!RA_98808_CX4.depositPaid := 180.0
!RA_98808_CX4.quotedDailyRate := 79.0
!RA_98808_CX4.quotedRatePerMile := 0.55

!new RentalAgreement('RA_98809_CX4')
!RA_98809_CX4.number := 98809
!RA_98809_CX4.rentalDate := Date('2026-05-26')
!RA_98809_CX4.anticipatedDuration := 1
!RA_98809_CX4.depositPaid := 60.0
!RA_98809_CX4.quotedDailyRate := 27.0
!RA_98809_CX4.quotedRatePerMile := 0.0

!new RentalAgreement('RA_98810_CX4')
!RA_98810_CX4.number := 98810
!RA_98810_CX4.rentalDate := Date('2026-06-01')
!RA_98810_CX4.anticipatedDuration := 5
!RA_98810_CX4.depositPaid := 0.0
!RA_98810_CX4.quotedDailyRate := 205.0
!RA_98810_CX4.quotedRatePerMile := 1.05

!new RentalAgreement('RA_98811_CX4')
!RA_98811_CX4.number := 98811
!RA_98811_CX4.rentalDate := Date('2026-06-04')
!RA_98811_CX4.anticipatedDuration := 1
!RA_98811_CX4.depositPaid := 40.0
!RA_98811_CX4.quotedDailyRate := 22.0
!RA_98811_CX4.quotedRatePerMile := 0.0

!insert (RO_640, T_9101_CX4) into RentalOfficeVehicle
!insert (RO_610, T_9102_CX4) into RentalOfficeVehicle
!insert (RO_630, T_9103_CX4) into RentalOfficeVehicle
!insert (RO_640, V_9201_CX4) into RentalOfficeVehicle
!insert (RO_640, V_9202_CX4) into RentalOfficeVehicle
!insert (RO_610, V_9301_CX4) into RentalOfficeVehicle
!insert (RO_610, V_9302_CX4) into RentalOfficeVehicle
!insert (RO_630, V_9401_CX4) into RentalOfficeVehicle
!insert (RO_630, V_9402_CX4) into RentalOfficeVehicle
!insert (RO_630, V_9403_CX4) into RentalOfficeVehicle

!insert (RO_640, RA_98801_CX4) into RentalOfficeRentalAgreementOrigin
!insert (RO_640, RA_98802_CX4) into RentalOfficeRentalAgreementOrigin
!insert (RO_640, RA_98803_CX4) into RentalOfficeRentalAgreementOrigin
!insert (RO_640, RA_98804_CX4) into RentalOfficeRentalAgreementOrigin
!insert (RO_610, RA_98805_CX4) into RentalOfficeRentalAgreementOrigin
!insert (RO_610, RA_98806_CX4) into RentalOfficeRentalAgreementOrigin
!insert (RO_610, RA_98807_CX4) into RentalOfficeRentalAgreementOrigin
!insert (RO_630, RA_98808_CX4) into RentalOfficeRentalAgreementOrigin
!insert (RO_640, RA_98809_CX4) into RentalOfficeRentalAgreementOrigin
!insert (RO_640, RA_98810_CX4) into RentalOfficeRentalAgreementOrigin
!insert (RO_610, RA_98811_CX4) into RentalOfficeRentalAgreementOrigin

!insert (RO_620, RA_98801_CX4) into RentalOfficeRentalAgreementDrop
!insert (RO_640, RA_98802_CX4) into RentalOfficeRentalAgreementDrop
!insert (RO_620, RA_98803_CX4) into RentalOfficeRentalAgreementDrop
!insert (RO_620, RA_98804_CX4) into RentalOfficeRentalAgreementDrop
!insert (RO_610, RA_98805_CX4) into RentalOfficeRentalAgreementDrop
!insert (RO_620, RA_98806_CX4) into RentalOfficeRentalAgreementDrop
!insert (RO_620, RA_98807_CX4) into RentalOfficeRentalAgreementDrop
!insert (RO_620, RA_98808_CX4) into RentalOfficeRentalAgreementDrop
!insert (RO_640, RA_98809_CX4) into RentalOfficeRentalAgreementDrop
!insert (RO_620, RA_98810_CX4) into RentalOfficeRentalAgreementDrop
!insert (RO_610, RA_98811_CX4) into RentalOfficeRentalAgreementDrop

!insert (RA_98801_CX4, T_9101_CX4) into RentalAgreementVehicle
!insert (RA_98802_CX4, V_9202_CX4) into RentalAgreementVehicle
!insert (RA_98803_CX4, V_9202_CX4) into RentalAgreementVehicle
!insert (RA_98804_CX4, V_9201_CX4) into RentalAgreementVehicle
!insert (RA_98805_CX4, T_9102_CX4) into RentalAgreementVehicle
!insert (RA_98806_CX4, T_9102_CX4) into RentalAgreementVehicle
!insert (RA_98807_CX4, V_9301_CX4) into RentalAgreementVehicle
!insert (RA_98808_CX4, T_9103_CX4) into RentalAgreementVehicle
!insert (RA_98809_CX4, V_9401_CX4) into RentalAgreementVehicle
!insert (RA_98810_CX4, T_9101_CX4) into RentalAgreementVehicle
!insert (RA_98811_CX4, V_9301_CX4) into RentalAgreementVehicle

!insert (RA_98801_CX4, CUST_C_31_CX4) into RentalAgreementCustomer
!insert (RA_98802_CX4, CUST_I_31_CX4) into RentalAgreementCustomer
!insert (RA_98803_CX4, CUST_C_31_CX4) into RentalAgreementCustomer
!insert (RA_98804_CX4, CUST_C_31_CX4) into RentalAgreementCustomer
!insert (RA_98805_CX4, CUST_C_32_CX4) into RentalAgreementCustomer
!insert (RA_98806_CX4, CUST_C_32_CX4) into RentalAgreementCustomer
!insert (RA_98807_CX4, CUST_C_32_CX4) into RentalAgreementCustomer
!insert (RA_98808_CX4, CUST_C_31_CX4) into RentalAgreementCustomer
!insert (RA_98809_CX4, CUST_I_31_CX4) into RentalAgreementCustomer
!insert (RA_98810_CX4, CUST_C_31_CX4) into RentalAgreementCustomer
!insert (RA_98811_CX4, CUST_C_32_CX4) into RentalAgreementCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 255 | 0.00% |
| Multiplicities Errors | 0 | 54 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 0 | 8 | 0.00% |
| License Plates | 0 | 10 | 0.00% |
| Home Phones | 0 | 2 | 0.00% |

## Category edge
```
!new RentalOffice('RO30_B2')
!RO30_B2.name := 'Fleet Overflow Compound'
!RO30_B2.number := 30
!RO30_B2.address := ''

!new RentalOffice('RO31_B2')
!RO31_B2.name := 'Pop-up Event Desk'
!RO31_B2.number := 31
!RO31_B2.address := 'Temporary booth, Jacksonville, FL'

!new Truck('V300_B2')
!V300_B2.id := 300
!V300_B2.registrationState := #CT
!V300_B2.licensePlateNumber := 'CT-Ø-300'
!V300_B2.vehicleTypeCode := #TRUCK
!V300_B2.registrationLastMaintenanceDate := Date('2026-02-30')
!V300_B2.expirationDate := Date('0001-01-01')
!V300_B2.odometerReading := -10
!V300_B2.gasTankCapacity := 0.0
!V300_B2.workingRadio := true
!V300_B2.mileage := 0

!new Truck('V301_B2')
!V301_B2.id := 301
!V301_B2.registrationState := #AL
!V301_B2.licensePlateNumber := 'AL-999999'
!V301_B2.vehicleTypeCode := #TRUCK24
!V301_B2.registrationLastMaintenanceDate := Date('1970-01-01')
!V301_B2.expirationDate := Date('2099-12-31')
!V301_B2.odometerReading := 99999999
!V301_B2.gasTankCapacity := 999999.0
!V301_B2.workingRadio := false
!V301_B2.mileage := 2147483647

!new Vehicle('V302_B2')
!V302_B2.id := 302
!V302_B2.registrationState := #FL
!V302_B2.licensePlateNumber := 'FL-TRLR-302'
!V302_B2.vehicleTypeCode := #OPEN_TRAILER
!V302_B2.registrationLastMaintenanceDate := Date('2026-W05-3')
!V302_B2.expirationDate := Date('2026-W05-3')

!new Vehicle('V303_B2')
!V303_B2.id := 303
!V303_B2.registrationState := #DE
!V303_B2.licensePlateNumber := 'DE-000'
!V303_B2.vehicleTypeCode := #COVERED_TRAILER
!V303_B2.registrationLastMaintenanceDate := Date('0001-01-01')
!V303_B2.expirationDate := Date('2099-12-31')

!new Vehicle('V304_B2')
!V304_B2.id := -304
!V304_B2.registrationState := #AK
!V304_B2.licensePlateNumber := 'AK-ICE-304'
!V304_B2.vehicleTypeCode := #OPEN_TRAILER
!V304_B2.registrationLastMaintenanceDate := Date('2099-12-31')
!V304_B2.expirationDate := Date('1970-01-01')

!new Vehicle('V305_B2')
!V305_B2.id := 305
!V305_B2.registrationState := #CA
!V305_B2.licensePlateNumber := ''
!V305_B2.vehicleTypeCode := #COVERED_TRAILER
!V305_B2.registrationLastMaintenanceDate := Date('1970-01-01')
!V305_B2.expirationDate := Date('2026-02-30')

!new Individual('I30_B2')
!I30_B2.name := 'Nguyễn Thị Lan'
!I30_B2.address := 'Apt 3, 77 Broad St, Wilmington, DE'
!I30_B2.poorRisk := false
!I30_B2.homePhone := '000-000-0000'
!I30_B2.driverLicenseState := #DE
!I30_B2.driverLicenseNumber := 1
!I30_B2.driverLicenseExpirationDate := Date('0001-01-01')

!new Individual('I31_B2')
!I31_B2.name := 'Jean-Pierre Dubois'
!I31_B2.address := ''
!I31_B2.poorRisk := true
!I31_B2.homePhone := '+1 (305) 555-0001'
!I31_B2.driverLicenseState := #FL
!I31_B2.driverLicenseNumber := -1
!I31_B2.driverLicenseExpirationDate := Date('2099-12-31')

!new Company('C30_B2')
!C30_B2.name := 'Arctic Minute Rentals Oy'
!C30_B2.address := 'Harbor Road 1, Dover, DE'
!C30_B2.poorRisk := false
!C30_B2.idNumber := -2147483647

!insert (RO30_B2, V300_B2) into RentalOfficeVehicle
!insert (RO30_B2, V301_B2) into RentalOfficeVehicle
!insert (RO30_B2, V302_B2) into RentalOfficeVehicle
!insert (RO30_B2, V303_B2) into RentalOfficeVehicle
!insert (RO30_B2, V304_B2) into RentalOfficeVehicle
!insert (RO30_B2, V305_B2) into RentalOfficeVehicle
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 85 | 0.00% |
| Multiplicities Errors | 0 | 6 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 3 | 3 | 100.00% |
| License Plates | 1 | 5 | 20.00% |
| Home Phones | 0 | 2 | 0.00% |

| Invalid Addresses | 
|---| 
```
Temporary booth, Jacksonville, FL
```
```
Apt 3, 77 Broad St, Wilmington, DE
```
```
Harbor Road 1, Dover, DE
```

| Invalid License Plates | 
|---| 
```
CT-Ø-300
```

## Category invalid
```
!new RentalOffice('RO_210_HFD')
!RO_210_HFD.name := 'Hartford Downtown Truck Rental'
!RO_210_HFD.number := 210
!RO_210_HFD.address := '25 Columbus Blvd, Hartford, CT 06106, USA'

!new RentalOffice('RO_211_WIL')
!RO_211_WIL.name := 'Wilmington Service & Exchange Center'
!RO_211_WIL.number := 211
!RO_211_WIL.address := '400 N Market St, Wilmington, DE 19801, USA'

!new Truck('T_45001')
!T_45001.id := 45001
!T_45001.registrationState := #CT
!T_45001.licensePlateNumber := 'CT-7MZ-204'
!T_45001.vehicleTypeCode := #TRUCK10
!T_45001.registrationLastMaintenanceDate := Date('2026-01-08')
!T_45001.expirationDate := Date('2026-12-31')
!T_45001.odometerReading := 40312
!T_45001.gasTankCapacity := 34.0
!T_45001.workingRadio := true
!T_45001.mileage := 13

!new Truck('T_45044')
!T_45044.id := 45044
!T_45044.registrationState := #DE
!T_45044.licensePlateNumber := 'DE-TRK-5580'
!T_45044.vehicleTypeCode := #TRUCK10
!T_45044.registrationLastMaintenanceDate := Date('2026-02-14')
!T_45044.expirationDate := Date('2027-02-28')
!T_45044.odometerReading := 19877
!T_45044.gasTankCapacity := 36.0
!T_45044.workingRadio := false
!T_45044.mileage := 12

!new Individual('I_AishaRahman')
!I_AishaRahman.name := 'Aisha Rahman'
!I_AishaRahman.address := '818 N Franklin St, Wilmington, DE 19805, USA'
!I_AishaRahman.poorRisk := false
!I_AishaRahman.homePhone := '+1 (302) 555-0139'
!I_AishaRahman.driverLicenseState := #DE
!I_AishaRahman.driverLicenseNumber := 77120488
!I_AishaRahman.driverLicenseExpirationDate := Date('2029-06-30')

!new RentalAgreement('RA_6100088')
!RA_6100088.number := 6100088
!RA_6100088.rentalDate := Date('2026-05-03')
!RA_6100088.anticipatedDuration := 3
!RA_6100088.depositPaid := 200.0
!RA_6100088.quotedDailyRate := 99.0
!RA_6100088.quotedRatePerMile := 0.45

!insert (RO_210_HFD, T_45001) into RentalOfficeVehicle
!insert (RO_211_WIL, T_45044) into RentalOfficeVehicle

!insert (RO_210_HFD, RA_6100088) into RentalOfficeRentalAgreementOrigin
!insert (RO_211_WIL, RA_6100088) into RentalOfficeRentalAgreementDrop

!insert (RA_6100088, I_AishaRahman) into RentalAgreementCustomer

!insert (RA_6100088, T_45001) into RentalAgreementVehicle
!insert (RA_6100088, T_45044) into RentalAgreementVehicle
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 7 | 14.29% |
| Invariants Errors (Not included on General) | 0 | 5 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `RentalAgreementVehicle':
  Object `RA_6100088' of class `RentalAgreement' is connected to 2 objects of class `Vehicle'
  at association end `vehicle' but the multiplicity is specified as `1'.
```

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 0 | 3 | 0.00% |
| License Plates | 0 | 2 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

## Generation 4 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 567 | 0.00% |
| Multiplicities Errors | 0 | 93 | 0.00% |
| Invariants Errors | 0 | 20 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 7 | 14.29% |
| Invariants Errors (Not included on General) | 0 | 5 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `RentalAgreementVehicle':
  Object `RA_6100088' of class `RentalAgreement' is connected to 2 objects of class `Vehicle'
  at association end `vehicle' but the multiplicity is specified as `1'.
```

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 4 | 23 | 17.39% |
| License Plates | 3 | 22 | 13.64% |
| Home Phones | 0 | 8 | 0.00% |

| Invalid Addresses | 
|---| 
```
1 Theater Way, Montgomery, AL
```
```
Temporary booth, Jacksonville, FL
```
```
Apt 3, 77 Broad St, Wilmington, DE
```
```
Harbor Road 1, Dover, DE
```

| Invalid License Plates | 
|---| 
```
AZ-DESERT-0050
```
```
AL-TRAILER-000051
```
```
CT-Ø-300
```

# Generation 5
## Category baseline
```
!new RentalOffice('RO_150')
!RO_150.name := 'Lakeside Truck & Trailer – Orlando'
!RO_150.number := 150
!RO_150.address := '1 Jeff Fuqua Blvd, Orlando, FL 32827, USA'

!new RentalOffice('RO_151')
!RO_151.name := 'Harbor Freight Rentals – San Diego'
!RO_151.number := 151
!RO_151.address := '2710 Historic Decatur Rd, San Diego, CA 92106, USA'

!new RentalOffice('RO_152')
!RO_152.name := 'First State Haul – Dover'
!RO_152.number := 152
!RO_152.address := '29 S State St, Dover, DE 19901, USA'

!new RentalOffice('RO_153')
!RO_153.name := 'Desert Express Counter – Phoenix'
!RO_153.number := 153
!RO_153.address := '3400 E Sky Harbor Blvd, Phoenix, AZ 85034, USA'

!new Truck('V_12001')
!V_12001.id := 12001
!V_12001.registrationState := #FL
!V_12001.licensePlateNumber := 'FL-ORL-5521'
!V_12001.vehicleTypeCode := #TRUCK24
!V_12001.registrationLastMaintenanceDate := Date('2026-02-14')
!V_12001.expirationDate := Date('2026-09-30')
!V_12001.odometerReading := 33210
!V_12001.gasTankCapacity := 32.2
!V_12001.workingRadio := true
!V_12001.mileage := 15

!new Truck('V_12002')
!V_12002.id := 12002
!V_12002.registrationState := #FL
!V_12002.licensePlateNumber := 'FL-ORL-5588'
!V_12002.vehicleTypeCode := #TRUCK10
!V_12002.registrationLastMaintenanceDate := Date('2026-01-05')
!V_12002.expirationDate := Date('2027-01-31')
!V_12002.odometerReading := 9050
!V_12002.gasTankCapacity := 24.0
!V_12002.workingRadio := true
!V_12002.mileage := 19

!new Truck('V_12004')
!V_12004.id := 12004
!V_12004.registrationState := #CA
!V_12004.licensePlateNumber := 'CA-SD-3901'
!V_12004.vehicleTypeCode := #TRUCK
!V_12004.registrationLastMaintenanceDate := Date('2026-02-28')
!V_12004.expirationDate := Date('2026-12-31')
!V_12004.odometerReading := 150000
!V_12004.gasTankCapacity := 28.0
!V_12004.workingRadio := false
!V_12004.mileage := 11

!new Vehicle('V_12003')
!V_12003.id := 12003
!V_12003.registrationState := #DE
!V_12003.licensePlateNumber := 'DE-COV-7712'
!V_12003.vehicleTypeCode := #COVERED_TRAILER
!V_12003.registrationLastMaintenanceDate := Date('2025-08-19')
!V_12003.expirationDate := Date('2026-08-31')

!new Vehicle('V_12005')
!V_12005.id := 12005
!V_12005.registrationState := #FL
!V_12005.licensePlateNumber := 'FL-TRL-2044'
!V_12005.vehicleTypeCode := #OPEN_TRAILER
!V_12005.registrationLastMaintenanceDate := Date('2025-11-11')
!V_12005.expirationDate := Date('2026-11-30')

!new Individual('CUST_I_990')
!CUST_I_990.name := 'João Pedro Silva'
!CUST_I_990.address := '725 E Amelia St, Orlando, FL 32803, USA'
!CUST_I_990.poorRisk := false
!CUST_I_990.homePhone := '+1-407-555-0182'
!CUST_I_990.driverLicenseState := #FL
!CUST_I_990.driverLicenseNumber := 50199221
!CUST_I_990.driverLicenseExpirationDate := Date('2028-03-20')

!new Individual('CUST_I_991')
!CUST_I_991.name := 'Linh Nguyen'
!CUST_I_991.address := '220 W G St, San Diego, CA 92101, USA'
!CUST_I_991.poorRisk := false
!CUST_I_991.homePhone := '+1-619-555-0107'
!CUST_I_991.driverLicenseState := #CA
!CUST_I_991.driverLicenseNumber := 88412013
!CUST_I_991.driverLicenseExpirationDate := Date('2027-05-07')

!new Company('CUST_C_992')
!CUST_C_992.name := 'Delaware Coastal Renovations Corp.'
!CUST_C_992.address := '800 N DuPont Hwy, Dover, DE 19901, USA'
!CUST_C_992.poorRisk := false
!CUST_C_992.idNumber := 99244106

!new RentalAgreement('RA_7001_BASE')
!RA_7001_BASE.number := 7001
!RA_7001_BASE.rentalDate := Date('2026-06-03')
!RA_7001_BASE.anticipatedDuration := 5
!RA_7001_BASE.depositPaid := 600.0
!RA_7001_BASE.quotedDailyRate := 155.0
!RA_7001_BASE.quotedRatePerMile := 0.52

!new RentalAgreement('RA_7002_BASE')
!RA_7002_BASE.number := 7002
!RA_7002_BASE.rentalDate := Date('2026-06-05')
!RA_7002_BASE.anticipatedDuration := 2
!RA_7002_BASE.depositPaid := 150.0
!RA_7002_BASE.quotedDailyRate := 99.0
!RA_7002_BASE.quotedRatePerMile := 0.25

!new RentalAgreement('RA_7003_BASE')
!RA_7003_BASE.number := 7003
!RA_7003_BASE.rentalDate := Date('2026-06-06')
!RA_7003_BASE.anticipatedDuration := 10
!RA_7003_BASE.depositPaid := 300.0
!RA_7003_BASE.quotedDailyRate := 45.0
!RA_7003_BASE.quotedRatePerMile := 0.18

!new RentalAgreement('RA_7004_BASE')
!RA_7004_BASE.number := 7004
!RA_7004_BASE.rentalDate := Date('2026-06-15')
!RA_7004_BASE.anticipatedDuration := 1
!RA_7004_BASE.depositPaid := 200.0
!RA_7004_BASE.quotedDailyRate := 170.0
!RA_7004_BASE.quotedRatePerMile := 0.0

!new RentalAgreement('RA_7005_BASE')
!RA_7005_BASE.number := 7005
!RA_7005_BASE.rentalDate := Date('2026-06-20')
!RA_7005_BASE.anticipatedDuration := 3
!RA_7005_BASE.depositPaid := 0.0
!RA_7005_BASE.quotedDailyRate := 110.0
!RA_7005_BASE.quotedRatePerMile := 0.4

!new RentalAgreement('RA_7006_BASE')
!RA_7006_BASE.number := 7006
!RA_7006_BASE.rentalDate := Date('2026-06-22')
!RA_7006_BASE.anticipatedDuration := 4
!RA_7006_BASE.depositPaid := 500.0
!RA_7006_BASE.quotedDailyRate := 125.0
!RA_7006_BASE.quotedRatePerMile := 0.5

!insert (RO_150, V_12001) into RentalOfficeVehicle
!insert (RO_150, V_12002) into RentalOfficeVehicle
!insert (RO_150, V_12005) into RentalOfficeVehicle
!insert (RO_151, V_12004) into RentalOfficeVehicle
!insert (RO_152, V_12003) into RentalOfficeVehicle

!insert (RO_150, RA_7001_BASE) into RentalOfficeRentalAgreementOrigin
!insert (RO_153, RA_7002_BASE) into RentalOfficeRentalAgreementOrigin
!insert (RO_152, RA_7003_BASE) into RentalOfficeRentalAgreementOrigin
!insert (RO_150, RA_7004_BASE) into RentalOfficeRentalAgreementOrigin
!insert (RO_150, RA_7005_BASE) into RentalOfficeRentalAgreementOrigin
!insert (RO_151, RA_7006_BASE) into RentalOfficeRentalAgreementOrigin

!insert (RO_153, RA_7001_BASE) into RentalOfficeRentalAgreementDrop
!insert (RO_151, RA_7002_BASE) into RentalOfficeRentalAgreementDrop
!insert (RO_150, RA_7003_BASE) into RentalOfficeRentalAgreementDrop
!insert (RO_150, RA_7004_BASE) into RentalOfficeRentalAgreementDrop
!insert (RO_152, RA_7005_BASE) into RentalOfficeRentalAgreementDrop
!insert (RO_153, RA_7006_BASE) into RentalOfficeRentalAgreementDrop

!insert (RA_7001_BASE, V_12001) into RentalAgreementVehicle
!insert (RA_7002_BASE, V_12004) into RentalAgreementVehicle
!insert (RA_7003_BASE, V_12003) into RentalAgreementVehicle
!insert (RA_7004_BASE, V_12001) into RentalAgreementVehicle
!insert (RA_7005_BASE, V_12002) into RentalAgreementVehicle
!insert (RA_7006_BASE, V_12004) into RentalAgreementVehicle

!insert (RA_7001_BASE, CUST_C_992) into RentalAgreementCustomer
!insert (RA_7002_BASE, CUST_I_991) into RentalAgreementCustomer
!insert (RA_7003_BASE, CUST_C_992) into RentalAgreementCustomer
!insert (RA_7004_BASE, CUST_I_990) into RentalAgreementCustomer
!insert (RA_7005_BASE, CUST_I_990) into RentalAgreementCustomer
!insert (RA_7006_BASE, CUST_C_992) into RentalAgreementCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 155 | 0.00% |
| Multiplicities Errors | 0 | 29 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 0 | 7 | 0.00% |
| License Plates | 0 | 5 | 0.00% |
| Home Phones | 0 | 2 | 0.00% |

## Category boundary
```
!new RentalOffice('RO_700_BC')
!RO_700_BC.name := 'Interstate Booking Center'
!RO_700_BC.number := 700
!RO_700_BC.address := '101 Asylum St, Hartford, CT'

!new RentalOffice('RO_701_RL')
!RO_701_RL.name := 'Steel City After-Hours Return Lot'
!RO_701_RL.number := 701
!RO_701_RL.address := '202 1st Ave N, Birmingham, AL'

!new RentalOffice('RO_702_YD')
!RO_702_YD.name := 'Pacific Maintenance Yard'
!RO_702_YD.number := 702
!RO_702_YD.address := '3030 Morena Blvd, San Diego, CA'

!new Truck('T_700_YD')
!T_700_YD.id := 700
!T_700_YD.registrationState := #CA
!T_700_YD.licensePlateNumber := 'CA-YARD-700'
!T_700_YD.vehicleTypeCode := #TRUCK10
!T_700_YD.registrationLastMaintenanceDate := Date('2026-04-30')
!T_700_YD.expirationDate := Date('2026-05-01')
!T_700_YD.odometerReading := 0
!T_700_YD.gasTankCapacity := 0.0
!T_700_YD.workingRadio := false
!T_700_YD.mileage := 0

!new Truck('T_701_LONG')
!T_701_LONG.id := 701
!T_701_LONG.registrationState := #AZ
!T_701_LONG.licensePlateNumber := 'AZ-LONGHAUL-701'
!T_701_LONG.vehicleTypeCode := #TRUCK24
!T_701_LONG.registrationLastMaintenanceDate := Date('2025-01-01')
!T_701_LONG.expirationDate := Date('2030-12-31')
!T_701_LONG.odometerReading := 1999999999
!T_701_LONG.gasTankCapacity := 1500.0
!T_701_LONG.workingRadio := true
!T_701_LONG.mileage := 2000000000

!new Vehicle('V_702_TRLR')
!V_702_TRLR.id := 702
!V_702_TRLR.registrationState := #CA
!V_702_TRLR.licensePlateNumber := 'CA-TRLR-0702'
!V_702_TRLR.vehicleTypeCode := #OPEN_TRAILER
!V_702_TRLR.registrationLastMaintenanceDate := Date('2026-01-15')
!V_702_TRLR.expirationDate := Date('2027-01-15')

!new Company('C_700_IMP')
!C_700_IMP.name := 'Nile & Son Importers, Inc.'
!C_700_IMP.address := '400 Commerce St, Hartford, CT'
!C_700_IMP.poorRisk := false
!C_700_IMP.idNumber := 700000000

!new Individual('I_700_LINH')
!I_700_LINH.name := 'Linh Trần'
!I_700_LINH.address := '55 Magnolia Ave, Birmingham, AL'
!I_700_LINH.poorRisk := false
!I_700_LINH.homePhone := '+1-205-555-0700'
!I_700_LINH.driverLicenseState := #AL
!I_700_LINH.driverLicenseNumber := 7007007
!I_700_LINH.driverLicenseExpirationDate := Date('2029-07-01')

!new Company('C_701_PROPS')
!C_701_PROPS.name := 'Coastal Props LLC'
!C_701_PROPS.address := '999 Harbor Dr, San Diego, CA'
!C_701_PROPS.poorRisk := true
!C_701_PROPS.idNumber := 701

!new RentalAgreement('RA_7000')
!RA_7000.number := 7000
!RA_7000.rentalDate := Date('2026-05-01')
!RA_7000.anticipatedDuration := 0
!RA_7000.depositPaid := 0.0
!RA_7000.quotedDailyRate := 150.0
!RA_7000.quotedRatePerMile := 0.0

!new RentalAgreement('RA_7001')
!RA_7001.number := 7001
!RA_7001.rentalDate := Date('2026-05-02')
!RA_7001.anticipatedDuration := 9999
!RA_7001.depositPaid := 5000.0
!RA_7001.quotedDailyRate := 0.0
!RA_7001.quotedRatePerMile := 2.5

!new RentalAgreement('RA_7002')
!RA_7002.number := 7002
!RA_7002.rentalDate := Date('2026-05-03')
!RA_7002.anticipatedDuration := 1
!RA_7002.depositPaid := 0.0
!RA_7002.quotedDailyRate := 0.0
!RA_7002.quotedRatePerMile := 0.01

!new RentalAgreement('RA_7003')
!RA_7003.number := 7003
!RA_7003.rentalDate := Date('2026-05-04')
!RA_7003.anticipatedDuration := 1
!RA_7003.depositPaid := 0.01
!RA_7003.quotedDailyRate := 0.01
!RA_7003.quotedRatePerMile := 0.0

!insert (RO_702_YD, T_700_YD) into RentalOfficeVehicle
!insert (RO_702_YD, T_701_LONG) into RentalOfficeVehicle
!insert (RO_702_YD, V_702_TRLR) into RentalOfficeVehicle

!insert (RO_700_BC, RA_7000) into RentalOfficeRentalAgreementOrigin
!insert (RO_700_BC, RA_7001) into RentalOfficeRentalAgreementOrigin
!insert (RO_700_BC, RA_7002) into RentalOfficeRentalAgreementOrigin
!insert (RO_700_BC, RA_7003) into RentalOfficeRentalAgreementOrigin

!insert (RO_701_RL, RA_7000) into RentalOfficeRentalAgreementDrop
!insert (RO_701_RL, RA_7001) into RentalOfficeRentalAgreementDrop
!insert (RO_701_RL, RA_7002) into RentalOfficeRentalAgreementDrop
!insert (RO_701_RL, RA_7003) into RentalOfficeRentalAgreementDrop

!insert (RA_7000, T_700_YD) into RentalAgreementVehicle
!insert (RA_7001, T_701_LONG) into RentalAgreementVehicle
!insert (RA_7002, V_702_TRLR) into RentalAgreementVehicle
!insert (RA_7003, T_701_LONG) into RentalAgreementVehicle

!insert (RA_7000, C_700_IMP) into RentalAgreementCustomer
!insert (RA_7001, C_700_IMP) into RentalAgreementCustomer
!insert (RA_7002, I_700_LINH) into RentalAgreementCustomer
!insert (RA_7003, C_700_IMP) into RentalAgreementCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 106 | 0.00% |
| Multiplicities Errors | 0 | 19 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 2 | 6 | 33.33% |
| License Plates | 2 | 3 | 66.67% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
400 Commerce St, Hartford, CT
```
```
55 Magnolia Ave, Birmingham, AL
```

| Invalid License Plates | 
|---| 
```
AZ-LONGHAUL-701
```
```
CA-TRLR-0702
```

## Category complex
```
!new RentalOffice('RO_701_CX5')
!RO_701_CX5.name := 'Coastal Plains Rentals — Mobile'
!RO_701_CX5.number := 701
!RO_701_CX5.address := '1860 Government Blvd, Mobile, AL 36606'

!new RentalOffice('RO_702_CX5')
!RO_702_CX5.name := 'Desert Sky Truck Hire — Flagstaff'
!RO_702_CX5.number := 702
!RO_702_CX5.address := '2101 E Route 66, Flagstaff, AZ 86004'

!new RentalOffice('RO_703_CX5')
!RO_703_CX5.name := 'Golden Gate Cargo Rentals — Oakland'
!RO_703_CX5.number := 703
!RO_703_CX5.address := '880 7th St, Oakland, CA 94607'

!new RentalOffice('RO_704_CX5')
!RO_704_CX5.name := 'Rocky Mountain Depot — Fort Collins'
!RO_704_CX5.number := 704
!RO_704_CX5.address := '3120 S College Ave, Fort Collins, CO 80525'

!new RentalOffice('RO_705_CX5')
!RO_705_CX5.name := 'Nutmeg State Moving Center — Bridgeport'
!RO_705_CX5.number := 705
!RO_705_CX5.address := '475 Barnum Ave, Bridgeport, CT 06608'

!new RentalOffice('RO_706_CX5')
!RO_706_CX5.name := 'Delmarva Return & Inspection Lane — Newark'
!RO_706_CX5.number := 706
!RO_706_CX5.address := '140 E Main St, Newark, DE 19711'

!new Truck('T_10001_CX5')
!T_10001_CX5.id := 10001
!T_10001_CX5.registrationState := #CA
!T_10001_CX5.licensePlateNumber := 'CA 6WQH219'
!T_10001_CX5.vehicleTypeCode := #TRUCK24
!T_10001_CX5.registrationLastMaintenanceDate := Date('2026-02-20')
!T_10001_CX5.expirationDate := Date('2027-02-28')
!T_10001_CX5.odometerReading := 110845
!T_10001_CX5.gasTankCapacity := 42.0
!T_10001_CX5.workingRadio := true
!T_10001_CX5.mileage := 9

!new Truck('T_10002_CX5')
!T_10002_CX5.id := 10002
!T_10002_CX5.registrationState := #AZ
!T_10002_CX5.licensePlateNumber := 'AZ HPA-4401'
!T_10002_CX5.vehicleTypeCode := #TRUCK10
!T_10002_CX5.registrationLastMaintenanceDate := Date('2026-03-02')
!T_10002_CX5.expirationDate := Date('2027-03-31')
!T_10002_CX5.odometerReading := 48330
!T_10002_CX5.gasTankCapacity := 27.5
!T_10002_CX5.workingRadio := false
!T_10002_CX5.mileage := 15

!new Truck('T_10003_CX5')
!T_10003_CX5.id := 10003
!T_10003_CX5.registrationState := #AL
!T_10003_CX5.licensePlateNumber := 'AL 4V-11870'
!T_10003_CX5.vehicleTypeCode := #TRUCK
!T_10003_CX5.registrationLastMaintenanceDate := Date('2026-01-25')
!T_10003_CX5.expirationDate := Date('2027-01-31')
!T_10003_CX5.odometerReading := 79210
!T_10003_CX5.gasTankCapacity := 33.0
!T_10003_CX5.workingRadio := true
!T_10003_CX5.mileage := 12

!new Truck('T_10004_CX5')
!T_10004_CX5.id := 10004
!T_10004_CX5.registrationState := #CO
!T_10004_CX5.licensePlateNumber := 'CO QLJ-772'
!T_10004_CX5.vehicleTypeCode := #TRUCK24
!T_10004_CX5.registrationLastMaintenanceDate := Date('2026-02-11')
!T_10004_CX5.expirationDate := Date('2027-02-28')
!T_10004_CX5.odometerReading := 99005
!T_10004_CX5.gasTankCapacity := 44.0
!T_10004_CX5.workingRadio := true
!T_10004_CX5.mileage := 10

!new Truck('T_10005_CX5')
!T_10005_CX5.id := 10005
!T_10005_CX5.registrationState := #CT
!T_10005_CX5.licensePlateNumber := 'CT 9BD-5003'
!T_10005_CX5.vehicleTypeCode := #TRUCK10
!T_10005_CX5.registrationLastMaintenanceDate := Date('2026-03-08')
!T_10005_CX5.expirationDate := Date('2027-03-31')
!T_10005_CX5.odometerReading := 40512
!T_10005_CX5.gasTankCapacity := 26.0
!T_10005_CX5.workingRadio := true
!T_10005_CX5.mileage := 16

!new Truck('T_10006_CX5')
!T_10006_CX5.id := 10006
!T_10006_CX5.registrationState := #CA
!T_10006_CX5.licensePlateNumber := 'CA 8NZX403'
!T_10006_CX5.vehicleTypeCode := #TRUCK24
!T_10006_CX5.registrationLastMaintenanceDate := Date('2026-02-28')
!T_10006_CX5.expirationDate := Date('2027-02-28')
!T_10006_CX5.odometerReading := 132909
!T_10006_CX5.gasTankCapacity := 45.0
!T_10006_CX5.workingRadio := false
!T_10006_CX5.mileage := 8

!new Vehicle('V_11001_CX5')
!V_11001_CX5.id := 11001
!V_11001_CX5.registrationState := #DE
!V_11001_CX5.licensePlateNumber := 'DE OT-2719'
!V_11001_CX5.vehicleTypeCode := #OPEN_TRAILER
!V_11001_CX5.registrationLastMaintenanceDate := Date('2025-12-15')
!V_11001_CX5.expirationDate := Date('2026-12-31')

!new Vehicle('V_11002_CX5')
!V_11002_CX5.id := 11002
!V_11002_CX5.registrationState := #DE
!V_11002_CX5.licensePlateNumber := 'DE CT-8804'
!V_11002_CX5.vehicleTypeCode := #COVERED_TRAILER
!V_11002_CX5.registrationLastMaintenanceDate := Date('2026-01-07')
!V_11002_CX5.expirationDate := Date('2027-01-31')

!new Vehicle('V_11003_CX5')
!V_11003_CX5.id := 11003
!V_11003_CX5.registrationState := #CO
!V_11003_CX5.licensePlateNumber := 'CO TR-6002'
!V_11003_CX5.vehicleTypeCode := #COVERED_TRAILER
!V_11003_CX5.registrationLastMaintenanceDate := Date('2025-11-18')
!V_11003_CX5.expirationDate := Date('2026-11-30')

!new Individual('CUST_I_41_CX5')
!CUST_I_41_CX5.name := 'Hélène Dubois'
!CUST_I_41_CX5.address := '410 Lake Merritt Blvd, Oakland, CA 94610'
!CUST_I_41_CX5.poorRisk := false
!CUST_I_41_CX5.homePhone := '+1-510-555-0108'
!CUST_I_41_CX5.driverLicenseState := #CA
!CUST_I_41_CX5.driverLicenseNumber := 62018499
!CUST_I_41_CX5.driverLicenseExpirationDate := Date('2028-08-30')

!new Individual('CUST_I_42_CX5')
!CUST_I_42_CX5.name := 'Tariq Al-Mansouri'
!CUST_I_42_CX5.address := '905 S College Ave, Fort Collins, CO 80524'
!CUST_I_42_CX5.poorRisk := true
!CUST_I_42_CX5.homePhone := '+1-970-555-0162'
!CUST_I_42_CX5.driverLicenseState := #CO
!CUST_I_42_CX5.driverLicenseNumber := 31007741
!CUST_I_42_CX5.driverLicenseExpirationDate := Date('2027-01-14')

!new Individual('CUST_I_43_CX5')
!CUST_I_43_CX5.name := 'Ana Paula Silva'
!CUST_I_43_CX5.address := '1220 Park St, Jacksonville, FL 32204'
!CUST_I_43_CX5.poorRisk := false
!CUST_I_43_CX5.homePhone := '+1-904-555-0181'
!CUST_I_43_CX5.driverLicenseState := #FL
!CUST_I_43_CX5.driverLicenseNumber := 88451003
!CUST_I_43_CX5.driverLicenseExpirationDate := Date('2026-09-22')

!new Company('CUST_C_41_CX5')
!CUST_C_41_CX5.name := 'BayBridge Catering Co.'
!CUST_C_41_CX5.address := '55 Embarcadero West, Oakland, CA 94607'
!CUST_C_41_CX5.poorRisk := false
!CUST_C_41_CX5.idNumber := 70355011

!new Company('CUST_C_42_CX5')
!CUST_C_42_CX5.name := 'Saguaro Solar Installers, Inc.'
!CUST_C_42_CX5.address := '123 S Milton Rd, Flagstaff, AZ 86001'
!CUST_C_42_CX5.poorRisk := false
!CUST_C_42_CX5.idNumber := 70288102

!new Company('CUST_C_43_CX5')
!CUST_C_43_CX5.name := 'Gulf Relief Supplies Ltd.'
!CUST_C_43_CX5.address := '200 Water St, Mobile, AL 36602'
!CUST_C_43_CX5.poorRisk := true
!CUST_C_43_CX5.idNumber := 70190220

!new RentalAgreement('RA_99001_CX5')
!RA_99001_CX5.number := 99001
!RA_99001_CX5.rentalDate := Date('2026-06-03')
!RA_99001_CX5.anticipatedDuration := 1
!RA_99001_CX5.depositPaid := 100.0
!RA_99001_CX5.quotedDailyRate := 30.0
!RA_99001_CX5.quotedRatePerMile := 0.0

!new RentalAgreement('RA_99002_CX5')
!RA_99002_CX5.number := 99002
!RA_99002_CX5.rentalDate := Date('2026-06-05')
!RA_99002_CX5.anticipatedDuration := 4
!RA_99002_CX5.depositPaid := 450.0
!RA_99002_CX5.quotedDailyRate := 185.0
!RA_99002_CX5.quotedRatePerMile := 0.95

!new RentalAgreement('RA_99003_CX5')
!RA_99003_CX5.number := 99003
!RA_99003_CX5.rentalDate := Date('2026-06-07')
!RA_99003_CX5.anticipatedDuration := 7
!RA_99003_CX5.depositPaid := 0.0
!RA_99003_CX5.quotedDailyRate := 160.0
!RA_99003_CX5.quotedRatePerMile := 0.88

!new RentalAgreement('RA_99004_CX5')
!RA_99004_CX5.number := 99004
!RA_99004_CX5.rentalDate := Date('2026-06-10')
!RA_99004_CX5.anticipatedDuration := 3
!RA_99004_CX5.depositPaid := 300.0
!RA_99004_CX5.quotedDailyRate := 99.0
!RA_99004_CX5.quotedRatePerMile := 0.7

!new RentalAgreement('RA_99005_CX5')
!RA_99005_CX5.number := 99005
!RA_99005_CX5.rentalDate := Date('2026-06-12')
!RA_99005_CX5.anticipatedDuration := 2
!RA_99005_CX5.depositPaid := 80.0
!RA_99005_CX5.quotedDailyRate := 28.0
!RA_99005_CX5.quotedRatePerMile := 0.0

!new RentalAgreement('RA_99006_CX5')
!RA_99006_CX5.number := 99006
!RA_99006_CX5.rentalDate := Date('2026-06-14')
!RA_99006_CX5.anticipatedDuration := 5
!RA_99006_CX5.depositPaid := 600.0
!RA_99006_CX5.quotedDailyRate := 175.0
!RA_99006_CX5.quotedRatePerMile := 0.92

!new RentalAgreement('RA_99007_CX5')
!RA_99007_CX5.number := 99007
!RA_99007_CX5.rentalDate := Date('2026-06-16')
!RA_99007_CX5.anticipatedDuration := 1
!RA_99007_CX5.depositPaid := 200.0
!RA_99007_CX5.quotedDailyRate := 89.0
!RA_99007_CX5.quotedRatePerMile := 0.6

!new RentalAgreement('RA_99008_CX5')
!RA_99008_CX5.number := 99008
!RA_99008_CX5.rentalDate := Date('2026-06-18')
!RA_99008_CX5.anticipatedDuration := 2
!RA_99008_CX5.depositPaid := 500.0
!RA_99008_CX5.quotedDailyRate := 190.0
!RA_99008_CX5.quotedRatePerMile := 1.05

!new RentalAgreement('RA_99009_CX5')
!RA_99009_CX5.number := 99009
!RA_99009_CX5.rentalDate := Date('2026-06-21')
!RA_99009_CX5.anticipatedDuration := 10
!RA_99009_CX5.depositPaid := 800.0
!RA_99009_CX5.quotedDailyRate := 165.0
!RA_99009_CX5.quotedRatePerMile := 0.85

!new RentalAgreement('RA_99010_CX5')
!RA_99010_CX5.number := 99010
!RA_99010_CX5.rentalDate := Date('2026-06-25')
!RA_99010_CX5.anticipatedDuration := 3
!RA_99010_CX5.depositPaid := 120.0
!RA_99010_CX5.quotedDailyRate := 35.0
!RA_99010_CX5.quotedRatePerMile := 0.0

!new RentalAgreement('RA_99011_CX5')
!RA_99011_CX5.number := 99011
!RA_99011_CX5.rentalDate := Date('2026-06-28')
!RA_99011_CX5.anticipatedDuration := 2
!RA_99011_CX5.depositPaid := 0.0
!RA_99011_CX5.quotedDailyRate := 205.0
!RA_99011_CX5.quotedRatePerMile := 1.1

!new RentalAgreement('RA_99012_CX5')
!RA_99012_CX5.number := 99012
!RA_99012_CX5.rentalDate := Date('2026-07-02')
!RA_99012_CX5.anticipatedDuration := 4
!RA_99012_CX5.depositPaid := 350.0
!RA_99012_CX5.quotedDailyRate := 150.0
!RA_99012_CX5.quotedRatePerMile := 0.75

!insert (RO_703_CX5, T_10001_CX5) into RentalOfficeVehicle
!insert (RO_702_CX5, T_10002_CX5) into RentalOfficeVehicle
!insert (RO_701_CX5, T_10003_CX5) into RentalOfficeVehicle
!insert (RO_704_CX5, T_10004_CX5) into RentalOfficeVehicle
!insert (RO_705_CX5, T_10005_CX5) into RentalOfficeVehicle
!insert (RO_703_CX5, T_10006_CX5) into RentalOfficeVehicle
!insert (RO_706_CX5, V_11001_CX5) into RentalOfficeVehicle
!insert (RO_706_CX5, V_11002_CX5) into RentalOfficeVehicle
!insert (RO_704_CX5, V_11003_CX5) into RentalOfficeVehicle

!insert (RO_703_CX5, RA_99001_CX5) into RentalOfficeRentalAgreementOrigin
!insert (RO_703_CX5, RA_99002_CX5) into RentalOfficeRentalAgreementOrigin
!insert (RO_701_CX5, RA_99003_CX5) into RentalOfficeRentalAgreementOrigin
!insert (RO_702_CX5, RA_99004_CX5) into RentalOfficeRentalAgreementOrigin
!insert (RO_704_CX5, RA_99005_CX5) into RentalOfficeRentalAgreementOrigin
!insert (RO_704_CX5, RA_99006_CX5) into RentalOfficeRentalAgreementOrigin
!insert (RO_705_CX5, RA_99007_CX5) into RentalOfficeRentalAgreementOrigin
!insert (RO_703_CX5, RA_99008_CX5) into RentalOfficeRentalAgreementOrigin
!insert (RO_702_CX5, RA_99009_CX5) into RentalOfficeRentalAgreementOrigin
!insert (RO_705_CX5, RA_99010_CX5) into RentalOfficeRentalAgreementOrigin
!insert (RO_701_CX5, RA_99011_CX5) into RentalOfficeRentalAgreementOrigin
!insert (RO_704_CX5, RA_99012_CX5) into RentalOfficeRentalAgreementOrigin

!insert (RO_706_CX5, RA_99001_CX5) into RentalOfficeRentalAgreementDrop
!insert (RO_701_CX5, RA_99002_CX5) into RentalOfficeRentalAgreementDrop
!insert (RO_706_CX5, RA_99003_CX5) into RentalOfficeRentalAgreementDrop
!insert (RO_704_CX5, RA_99004_CX5) into RentalOfficeRentalAgreementDrop
!insert (RO_705_CX5, RA_99005_CX5) into RentalOfficeRentalAgreementDrop
!insert (RO_706_CX5, RA_99006_CX5) into RentalOfficeRentalAgreementDrop
!insert (RO_706_CX5, RA_99007_CX5) into RentalOfficeRentalAgreementDrop
!insert (RO_706_CX5, RA_99008_CX5) into RentalOfficeRentalAgreementDrop
!insert (RO_706_CX5, RA_99009_CX5) into RentalOfficeRentalAgreementDrop
!insert (RO_701_CX5, RA_99010_CX5) into RentalOfficeRentalAgreementDrop
!insert (RO_706_CX5, RA_99011_CX5) into RentalOfficeRentalAgreementDrop
!insert (RO_703_CX5, RA_99012_CX5) into RentalOfficeRentalAgreementDrop

!insert (RA_99001_CX5, V_11001_CX5) into RentalAgreementVehicle
!insert (RA_99002_CX5, T_10006_CX5) into RentalAgreementVehicle
!insert (RA_99003_CX5, T_10003_CX5) into RentalAgreementVehicle
!insert (RA_99004_CX5, T_10002_CX5) into RentalAgreementVehicle
!insert (RA_99005_CX5, V_11003_CX5) into RentalAgreementVehicle
!insert (RA_99006_CX5, T_10004_CX5) into RentalAgreementVehicle
!insert (RA_99007_CX5, T_10005_CX5) into RentalAgreementVehicle
!insert (RA_99008_CX5, T_10001_CX5) into RentalAgreementVehicle
!insert (RA_99009_CX5, T_10006_CX5) into RentalAgreementVehicle
!insert (RA_99010_CX5, V_11002_CX5) into RentalAgreementVehicle
!insert (RA_99011_CX5, T_10006_CX5) into RentalAgreementVehicle
!insert (RA_99012_CX5, T_10006_CX5) into RentalAgreementVehicle

!insert (RA_99001_CX5, CUST_C_41_CX5) into RentalAgreementCustomer
!insert (RA_99002_CX5, CUST_I_41_CX5) into RentalAgreementCustomer
!insert (RA_99003_CX5, CUST_C_43_CX5) into RentalAgreementCustomer
!insert (RA_99004_CX5, CUST_C_42_CX5) into RentalAgreementCustomer
!insert (RA_99005_CX5, CUST_I_42_CX5) into RentalAgreementCustomer
!insert (RA_99006_CX5, CUST_C_43_CX5) into RentalAgreementCustomer
!insert (RA_99007_CX5, CUST_C_41_CX5) into RentalAgreementCustomer
!insert (RA_99008_CX5, CUST_I_43_CX5) into RentalAgreementCustomer
!insert (RA_99009_CX5, CUST_C_42_CX5) into RentalAgreementCustomer
!insert (RA_99010_CX5, CUST_I_41_CX5) into RentalAgreementCustomer
!insert (RA_99011_CX5, CUST_C_43_CX5) into RentalAgreementCustomer
!insert (RA_99012_CX5, CUST_I_42_CX5) into RentalAgreementCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 291 | 0.00% |
| Multiplicities Errors | 0 | 57 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 2 | 12 | 16.67% |
| License Plates | 0 | 9 | 0.00% |
| Home Phones | 0 | 3 | 0.00% |

| Invalid Addresses | 
|---| 
```
1860 Government Blvd, Mobile, AL 36606
```
```
410 Lake Merritt Blvd, Oakland, CA 94610
```

## Category edge
```
!new RentalOffice('RO40')
!RO40.name := 'Fairbanks Remote Counter'
!RO40.number := 4040
!RO40.address := '100 Aurora Dr, Fairbanks, AK'

!new RentalOffice('RO41')
!RO41.name := 'Call Center East (No On-Site Fleet)'
!RO41.number := 4141
!RO41.address := '200 Elm St, Hartford, CT'

!new RentalOffice('RO42')
!RO42.name := 'Orlando Return-Only Booth'
!RO42.number := 4242
!RO42.address := '1 Jetport Way, Orlando, FL (returns only)'

!new RentalOffice('RO43')
!RO43.name := 'Denver Maintenance Hangar'
!RO43.number := 4343
!RO43.address := '77 Service Rd, Denver, CO'

!new Vehicle('V400')
!V400.id := 400
!V400.registrationState := #AK
!V400.licensePlateNumber := 'AK-CCTR-400'
!V400.vehicleTypeCode := #TRUCK24
!V400.registrationLastMaintenanceDate := Date('2026-08-01')
!V400.expirationDate := Date('2099-12-31')

!new Truck('V401')
!V401.id := 401
!V401.registrationState := #CO
!V401.licensePlateNumber := 'CO-DEN-401'
!V401.vehicleTypeCode := #OPEN_TRAILER
!V401.registrationLastMaintenanceDate := Date('2026-08-02')
!V401.expirationDate := Date('2027-01-15')
!V401.odometerReading := 5
!V401.gasTankCapacity := 0.0
!V401.workingRadio := false
!V401.mileage := 0

!new Vehicle('V402')
!V402.id := 402
!V402.registrationState := #CA
!V402.licensePlateNumber := 'CA-COV-402'
!V402.vehicleTypeCode := #COVERED_TRAILER
!V402.registrationLastMaintenanceDate := Date('2099-12-31')
!V402.expirationDate := Date('2099-12-31')

!new Truck('V403')
!V403.id := 403
!V403.registrationState := #DE
!V403.licensePlateNumber := 'DE-TRK10-403'
!V403.vehicleTypeCode := #TRUCK10
!V403.registrationLastMaintenanceDate := Date('0000-12-31')
!V403.expirationDate := Date('2026-08-01')
!V403.odometerReading := 2147483647
!V403.gasTankCapacity := 0.000001
!V403.workingRadio := true
!V403.mileage := 0

!new Vehicle('V404')
!V404.id := 404
!V404.registrationState := #AZ
!V404.licensePlateNumber := ''
!V404.vehicleTypeCode := #OPEN_TRAILER
!V404.registrationLastMaintenanceDate := Date('2027-01-15')
!V404.expirationDate := Date('0000-12-31')

!new Individual('I40')
!I40.name := '佐藤 太郎'
!I40.address := '77 Service Rd, Denver, CO'
!I40.poorRisk := false
!I40.homePhone := '+1-303-555-0140'
!I40.driverLicenseState := #CO
!I40.driverLicenseNumber := 777
!I40.driverLicenseExpirationDate := Date('2099-12-31')

!new Individual('I41')
!I41.name := 'ليلى منصور'
!I41.address := '200 Elm St, Hartford, CT'
!I41.poorRisk := true
!I41.homePhone := '+1-860-555-0141'
!I41.driverLicenseState := #CT
!I41.driverLicenseNumber := 1
!I41.driverLicenseExpirationDate := Date('0000-12-31')

!new Individual('I42')
!I42.name := 'Mikaël Jean-Baptiste'
!I42.address := '1 Jetport Way, Orlando, FL'
!I42.poorRisk := false
!I42.homePhone := '+1-407-555-0142'
!I42.driverLicenseState := #FL
!I42.driverLicenseNumber := 999999
!I42.driverLicenseExpirationDate := Date('2027-01-15')

!new Individual('I43')
!I43.name := 'Anya Petrova'
!I43.address := '100 Aurora Dr, Fairbanks, AK'
!I43.poorRisk := false
!I43.homePhone := '+1-907-555-0143'
!I43.driverLicenseState := #AK
!I43.driverLicenseNumber := 0
!I43.driverLicenseExpirationDate := Date('2026-08-01')

!new RentalAgreement('RA4000')
!RA4000.number := 4000
!RA4000.rentalDate := Date('2026-08-02')
!RA4000.anticipatedDuration := 0
!RA4000.depositPaid := 0.0
!RA4000.quotedDailyRate := 0.0
!RA4000.quotedRatePerMile := 0.0

!new RentalAgreement('RA4001')
!RA4001.number := 4001
!RA4001.rentalDate := Date('2026-08-02')
!RA4001.anticipatedDuration := 1
!RA4001.depositPaid := 0.01
!RA4001.quotedDailyRate := 0.0
!RA4001.quotedRatePerMile := 99999.9999

!new RentalAgreement('RA4002')
!RA4002.number := 4002
!RA4002.rentalDate := Date('2026-08-02')
!RA4002.anticipatedDuration := 365
!RA4002.depositPaid := 0.0
!RA4002.quotedDailyRate := 0.000000001
!RA4002.quotedRatePerMile := 0.0

!insert (RO40, V400) into RentalOfficeVehicle
!insert (RO43, V401) into RentalOfficeVehicle
!insert (RO43, V402) into RentalOfficeVehicle
!insert (RO43, V403) into RentalOfficeVehicle
!insert (RO42, V404) into RentalOfficeVehicle

!insert (RO41, RA4000) into RentalOfficeRentalAgreementOrigin
!insert (RO41, RA4001) into RentalOfficeRentalAgreementOrigin
!insert (RO40, RA4002) into RentalOfficeRentalAgreementOrigin

!insert (RO42, RA4000) into RentalOfficeRentalAgreementDrop
!insert (RO42, RA4001) into RentalOfficeRentalAgreementDrop
!insert (RO42, RA4002) into RentalOfficeRentalAgreementDrop

!insert (RA4000, V401) into RentalAgreementVehicle
!insert (RA4001, V400) into RentalAgreementVehicle
!insert (RA4002, V403) into RentalAgreementVehicle

!insert (RA4000, I40) into RentalAgreementCustomer
!insert (RA4001, I41) into RentalAgreementCustomer
!insert (RA4002, I42) into RentalAgreementCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 129 | 0.00% |
| Multiplicities Errors | 0 | 17 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 6 | 8 | 75.00% |
| License Plates | 1 | 4 | 25.00% |
| Home Phones | 0 | 4 | 0.00% |

| Invalid Addresses | 
|---| 
```
200 Elm St, Hartford, CT
```
```
1 Jetport Way, Orlando, FL (returns only)
```
```
77 Service Rd, Denver, CO
```
```
77 Service Rd, Denver, CO
```
```
200 Elm St, Hartford, CT
```
```
1 Jetport Way, Orlando, FL
```

| Invalid License Plates | 
|---| 
```
DE-TRK10-403
```

## Category invalid
```
!new RentalOffice('RO_61_GC')
!RO_61_GC.name := 'Gulf Coast Commercial Rentals - Mobile'
!RO_61_GC.number := 61
!RO_61_GC.address := '1201 Water St, Mobile, AL 36602, USA'

!new RentalOffice('RO_62_PEN')
!RO_62_PEN.name := 'Panhandle Returns Desk - Pensacola'
!RO_62_PEN.number := 62
!RO_62_PEN.address := '2430 Airport Blvd, Pensacola, FL 32504, USA'

!new Truck('T_99001_OC5')
!T_99001_OC5.id := 99001
!T_99001_OC5.registrationState := #FL
!T_99001_OC5.licensePlateNumber := 'FL-NEW-4812'
!T_99001_OC5.vehicleTypeCode := #TRUCK24
!T_99001_OC5.registrationLastMaintenanceDate := Date('2026-02-05')
!T_99001_OC5.expirationDate := Date('2027-02-28')
!T_99001_OC5.odometerReading := 1250
!T_99001_OC5.gasTankCapacity := 80.0
!T_99001_OC5.workingRadio := true
!T_99001_OC5.mileage := 10

!new Vehicle('V_99077_OC5')
!V_99077_OC5.id := 99077
!V_99077_OC5.registrationState := #AL
!V_99077_OC5.licensePlateNumber := 'AL-TRL-3301'
!V_99077_OC5.vehicleTypeCode := #OPEN_TRAILER
!V_99077_OC5.registrationLastMaintenanceDate := Date('2026-01-20')
!V_99077_OC5.expirationDate := Date('2026-08-31')

!new Company('C_Kleber_OC5')
!C_Kleber_OC5.name := 'Kléber & Sons Event Logistics, Inc.'
!C_Kleber_OC5.address := '505 Dauphin St, Mobile, AL 36602, USA'
!C_Kleber_OC5.poorRisk := false
!C_Kleber_OC5.idNumber := 7700319

!new RentalAgreement('RA_770045_OC5')
!RA_770045_OC5.number := 770045
!RA_770045_OC5.rentalDate := Date('2026-03-01')
!RA_770045_OC5.anticipatedDuration := 2
!RA_770045_OC5.depositPaid := 300.0
!RA_770045_OC5.quotedDailyRate := 210.0
!RA_770045_OC5.quotedRatePerMile := 0.65

!insert (RO_61_GC, V_99077_OC5) into RentalOfficeVehicle

!insert (RO_61_GC, RA_770045_OC5) into RentalOfficeRentalAgreementOrigin
!insert (RO_62_PEN, RA_770045_OC5) into RentalOfficeRentalAgreementDrop

!insert (RA_770045_OC5, C_Kleber_OC5) into RentalAgreementCustomer
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 2 | 4 | 50.00% |
| Invariants Errors (Not included on General) | 0 | 5 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `RentalOfficeVehicle':
  Object `T_99001_OC5' of class `Truck' is connected to 0 objects of class `RentalOffice'
  at association end `homeOffice' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `RentalAgreementVehicle':
  Object `RA_770045_OC5' of class `RentalAgreement' is connected to 0 objects of class `Vehicle'
  at association end `vehicle' but the multiplicity is specified as `1'.
```

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 1 | 3 | 33.33% |
| License Plates | 0 | 2 | 0.00% |
| Home Phones | 0 | 0 | 0.00% |

| Invalid Addresses | 
|---| 
```
1201 Water St, Mobile, AL 36602, USA
```

## Generation 5 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 723 | 0.00% |
| Multiplicities Errors | 0 | 122 | 0.00% |
| Invariants Errors | 0 | 20 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 2 | 4 | 50.00% |
| Invariants Errors (Not included on General) | 0 | 5 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `RentalOfficeVehicle':
  Object `T_99001_OC5' of class `Truck' is connected to 0 objects of class `RentalOffice'
  at association end `homeOffice' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `RentalAgreementVehicle':
  Object `RA_770045_OC5' of class `RentalAgreement' is connected to 0 objects of class `Vehicle'
  at association end `vehicle' but the multiplicity is specified as `1'.
```

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 11 | 36 | 30.56% |
| License Plates | 3 | 23 | 13.04% |
| Home Phones | 0 | 10 | 0.00% |

| Invalid Addresses | 
|---| 
```
400 Commerce St, Hartford, CT
```
```
55 Magnolia Ave, Birmingham, AL
```
```
1860 Government Blvd, Mobile, AL 36606
```
```
410 Lake Merritt Blvd, Oakland, CA 94610
```
```
200 Elm St, Hartford, CT
```
```
1 Jetport Way, Orlando, FL (returns only)
```
```
77 Service Rd, Denver, CO
```
```
77 Service Rd, Denver, CO
```
```
200 Elm St, Hartford, CT
```
```
1 Jetport Way, Orlando, FL
```
```
1201 Water St, Mobile, AL 36602, USA
```

| Invalid License Plates | 
|---| 
```
AZ-LONGHAUL-701
```
```
CA-TRLR-0702
```
```
DE-TRK10-403
```

# Generation 6
## Category baseline
```
!new RentalOffice('RO_501_FC')
!RO_501_FC.name := 'High Plains Rental Yard – Fort Collins'
!RO_501_FC.number := 501
!RO_501_FC.address := '2400 S College Ave, Fort Collins, CO 80525, USA'

!new RentalOffice('RO_502_BP')
!RO_502_BP.name := 'Seaside Counter – Bridgeport Ferry Terminal'
!RO_502_BP.number := 502
!RO_502_BP.address := '1 Ferry Access Rd, Bridgeport, CT 06604, USA'

!new Truck('V_20010')
!V_20010.id := 20010
!V_20010.registrationState := #CO
!V_20010.licensePlateNumber := 'CO-HP-82010'
!V_20010.vehicleTypeCode := #TRUCK24
!V_20010.registrationLastMaintenanceDate := Date('2026-03-02')
!V_20010.expirationDate := Date('2026-12-15')
!V_20010.odometerReading := 41875
!V_20010.gasTankCapacity := 29.8
!V_20010.workingRadio := true
!V_20010.mileage := 16

!new Vehicle('V_20011')
!V_20011.id := 20011
!V_20011.registrationState := #CO
!V_20011.licensePlateNumber := 'CO-TRL-20011'
!V_20011.vehicleTypeCode := #OPEN_TRAILER
!V_20011.registrationLastMaintenanceDate := Date('2025-10-30')
!V_20011.expirationDate := Date('2026-10-30')

!new Vehicle('V_20012')
!V_20012.id := 20012
!V_20012.registrationState := #AL
!V_20012.licensePlateNumber := 'AL-COV-7740'
!V_20012.vehicleTypeCode := #COVERED_TRAILER
!V_20012.registrationLastMaintenanceDate := Date('2026-01-19')
!V_20012.expirationDate := Date('2027-01-31')

!new Individual('CUST_I_240')
!CUST_I_240.name := 'Søren Nielsen'
!CUST_I_240.address := '33 Fairfield Ave, Bridgeport, CT 06604, USA'
!CUST_I_240.poorRisk := false
!CUST_I_240.homePhone := '+1-203-555-0133'
!CUST_I_240.driverLicenseState := #CT
!CUST_I_240.driverLicenseNumber := 31077244
!CUST_I_240.driverLicenseExpirationDate := Date('2027-08-01')

!new Company('CUST_C_241')
!CUST_C_241.name := 'La Estrella Catering & Events, LLC'
!CUST_C_241.address := '1450 Larimer St, Denver, CO 80202, USA'
!CUST_C_241.poorRisk := true
!CUST_C_241.idNumber := 24190066

!new RentalAgreement('RA_50100')
!RA_50100.number := 50100
!RA_50100.rentalDate := Date('2026-07-08')
!RA_50100.anticipatedDuration := 6
!RA_50100.depositPaid := 850.0
!RA_50100.quotedDailyRate := 175.0
!RA_50100.quotedRatePerMile := 0.58

!new RentalAgreement('RA_50101')
!RA_50101.number := 50101
!RA_50101.rentalDate := Date('2026-07-15')
!RA_50101.anticipatedDuration := 2
!RA_50101.depositPaid := 50.0
!RA_50101.quotedDailyRate := 29.0
!RA_50101.quotedRatePerMile := 0.12

!insert (RO_501_FC, V_20010) into RentalOfficeVehicle
!insert (RO_501_FC, V_20011) into RentalOfficeVehicle
!insert (RO_501_FC, V_20012) into RentalOfficeVehicle

!insert (RO_502_BP, RA_50100) into RentalOfficeRentalAgreementOrigin
!insert (RO_502_BP, RA_50101) into RentalOfficeRentalAgreementOrigin

!insert (RO_501_FC, RA_50100) into RentalOfficeRentalAgreementDrop
!insert (RO_502_BP, RA_50101) into RentalOfficeRentalAgreementDrop

!insert (RA_50100, V_20010) into RentalAgreementVehicle
!insert (RA_50101, V_20011) into RentalAgreementVehicle

!insert (RA_50100, CUST_C_241) into RentalAgreementCustomer
!insert (RA_50101, CUST_I_240) into RentalAgreementCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 71 | 0.00% |
| Multiplicities Errors | 0 | 11 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 0 | 4 | 0.00% |
| License Plates | 1 | 3 | 33.33% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid License Plates | 
|---| 
```
CO-TRL-20011
```

## Category boundary
```
!new RentalOffice('RO_800')
!RO_800.name := 'Sunset Blvd Rentals'
!RO_800.number := 800
!RO_800.address := '800 Sunset Blvd, Los Angeles, CA'

!new RentalOffice('RO_801')
!RO_801.name := 'Riverfront Pickup'
!RO_801.number := 801
!RO_801.address := '801 Riverside Dr, Hartford, CT'

!new RentalOffice('RO_802')
!RO_802.name := 'Old Port Counter'
!RO_802.number := 802
!RO_802.address := '802 Market St, Wilmington, DE'

!new RentalOffice('RO_803')
!RO_803.name := 'Causeway Returns'
!RO_803.number := 803
!RO_803.address := '803 Bayshore Dr, Miami, FL'

!new RentalOffice('RO_804')
!RO_804.name := 'High Plains Service Desk'
!RO_804.number := 804
!RO_804.address := '804 16th St, Denver, CO'

!new Vehicle('V_800')
!V_800.id := 800
!V_800.registrationState := #CA
!V_800.licensePlateNumber := 'CA-OPEN-0800'
!V_800.vehicleTypeCode := #OPEN_TRAILER
!V_800.registrationLastMaintenanceDate := Date('2026-01-10')
!V_800.expirationDate := Date('2027-01-10')

!new Vehicle('V_801')
!V_801.id := 801
!V_801.registrationState := #CT
!V_801.licensePlateNumber := 'CT-COV-0801'
!V_801.vehicleTypeCode := #COVERED_TRAILER
!V_801.registrationLastMaintenanceDate := Date('2025-12-31')
!V_801.expirationDate := Date('2026-12-31')

!new Vehicle('V_802')
!V_802.id := 802
!V_802.registrationState := #DE
!V_802.licensePlateNumber := 'DE-OPEN-0802'
!V_802.vehicleTypeCode := #OPEN_TRAILER
!V_802.registrationLastMaintenanceDate := Date('2026-02-01')
!V_802.expirationDate := Date('2026-02-02')

!new Vehicle('V_803')
!V_803.id := 803
!V_803.registrationState := #FL
!V_803.licensePlateNumber := 'FL-COV-0803'
!V_803.vehicleTypeCode := #COVERED_TRAILER
!V_803.registrationLastMaintenanceDate := Date('2026-03-15')
!V_803.expirationDate := Date('2028-03-15')

!new Truck('T_804')
!T_804.id := 804
!T_804.registrationState := #CO
!T_804.licensePlateNumber := 'CO-TRK-0804'
!T_804.vehicleTypeCode := #TRUCK24
!T_804.registrationLastMaintenanceDate := Date('2026-01-01')
!T_804.expirationDate := Date('2026-01-02')
!T_804.odometerReading := 0
!T_804.gasTankCapacity := 0.0
!T_804.workingRadio := false
!T_804.mileage := 0

!new Individual('I_800')
!I_800.name := 'Chloé Martin'
!I_800.address := '10 Vine St, Los Angeles, CA'
!I_800.poorRisk := false
!I_800.homePhone := '+1-213-555-0800'
!I_800.driverLicenseState := #CA
!I_800.driverLicenseNumber := 80001
!I_800.driverLicenseExpirationDate := Date('2029-11-30')

!new Individual('I_801')
!I_801.name := 'DeShawn Carter'
!I_801.address := '22 Pearl St, Hartford, CT'
!I_801.poorRisk := true
!I_801.homePhone := '+1-860-555-0801'
!I_801.driverLicenseState := #CT
!I_801.driverLicenseNumber := 80101
!I_801.driverLicenseExpirationDate := Date('2026-12-31')

!new Company('C_802')
!C_802.name := 'Mercado y Mar LLC'
!C_802.address := '5 Wharf Rd, Wilmington, DE'
!C_802.poorRisk := false
!C_802.idNumber := 802

!new Company('C_803')
!C_803.name := 'Sundial Event Supply, Inc.'
!C_803.address := '803 Brickell Ave, Miami, FL'
!C_803.poorRisk := false
!C_803.idNumber := 803

!new Individual('I_804')
!I_804.name := 'Nguyễn Minh'
!I_804.address := '99 Colfax Ave, Denver, CO'
!I_804.poorRisk := false
!I_804.homePhone := '+1-303-555-0804'
!I_804.driverLicenseState := #CO
!I_804.driverLicenseNumber := 80401
!I_804.driverLicenseExpirationDate := Date('2031-05-01')

!new RentalAgreement('RA_8000')
!RA_8000.number := 8000
!RA_8000.rentalDate := Date('2026-04-01')
!RA_8000.anticipatedDuration := 0
!RA_8000.depositPaid := 0.0
!RA_8000.quotedDailyRate := 0.0
!RA_8000.quotedRatePerMile := 0.0

!new RentalAgreement('RA_8001')
!RA_8001.number := 8001
!RA_8001.rentalDate := Date('2026-04-02')
!RA_8001.anticipatedDuration := 2147483647
!RA_8001.depositPaid := 0.01
!RA_8001.quotedDailyRate := 1.0
!RA_8001.quotedRatePerMile := 9999.99

!new RentalAgreement('RA_8002')
!RA_8002.number := 8002
!RA_8002.rentalDate := Date('2026-02-02')
!RA_8002.anticipatedDuration := 1
!RA_8002.depositPaid := 500.0
!RA_8002.quotedDailyRate := 0.0
!RA_8002.quotedRatePerMile := 0.5

!new RentalAgreement('RA_8003')
!RA_8003.number := 8003
!RA_8003.rentalDate := Date('2026-04-03')
!RA_8003.anticipatedDuration := 2
!RA_8003.depositPaid := 0.0
!RA_8003.quotedDailyRate := 250.0
!RA_8003.quotedRatePerMile := 0.0

!insert (RO_800, V_800) into RentalOfficeVehicle
!insert (RO_801, V_801) into RentalOfficeVehicle
!insert (RO_802, V_802) into RentalOfficeVehicle
!insert (RO_803, V_803) into RentalOfficeVehicle
!insert (RO_804, T_804) into RentalOfficeVehicle

!insert (RO_800, RA_8000) into RentalOfficeRentalAgreementOrigin
!insert (RO_801, RA_8001) into RentalOfficeRentalAgreementOrigin
!insert (RO_802, RA_8002) into RentalOfficeRentalAgreementOrigin
!insert (RO_803, RA_8003) into RentalOfficeRentalAgreementOrigin

!insert (RO_800, RA_8000) into RentalOfficeRentalAgreementDrop
!insert (RO_803, RA_8001) into RentalOfficeRentalAgreementDrop
!insert (RO_801, RA_8002) into RentalOfficeRentalAgreementDrop
!insert (RO_802, RA_8003) into RentalOfficeRentalAgreementDrop

!insert (RA_8000, V_800) into RentalAgreementVehicle
!insert (RA_8001, V_801) into RentalAgreementVehicle
!insert (RA_8002, V_802) into RentalAgreementVehicle
!insert (RA_8003, V_803) into RentalAgreementVehicle

!insert (RA_8000, I_800) into RentalAgreementCustomer
!insert (RA_8001, I_801) into RentalAgreementCustomer
!insert (RA_8002, C_802) into RentalAgreementCustomer
!insert (RA_8003, C_803) into RentalAgreementCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 142 | 0.00% |
| Multiplicities Errors | 0 | 21 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 4 | 10 | 40.00% |
| License Plates | 2 | 5 | 40.00% |
| Home Phones | 0 | 3 | 0.00% |

| Invalid Addresses | 
|---| 
```
801 Riverside Dr, Hartford, CT
```
```
803 Bayshore Dr, Miami, FL
```
```
10 Vine St, Los Angeles, CA
```
```
5 Wharf Rd, Wilmington, DE
```

| Invalid License Plates | 
|---| 
```
CA-OPEN-0800
```
```
DE-OPEN-0802
```

## Category complex
```
!new RentalOffice('RO_801_NL_CX6')
!RO_801_NL_CX6.name := 'Thames River Truck & Trailer Rental — New London'
!RO_801_NL_CX6.number := 801
!RO_801_NL_CX6.address := '160 Bank St, New London, CT 06320'

!new Truck('T_12001_CX6')
!T_12001_CX6.id := 12001
!T_12001_CX6.registrationState := #CT
!T_12001_CX6.licensePlateNumber := 'CT 8KM-1442'
!T_12001_CX6.vehicleTypeCode := #TRUCK24
!T_12001_CX6.registrationLastMaintenanceDate := Date('2026-01-11')
!T_12001_CX6.expirationDate := Date('2027-01-31')
!T_12001_CX6.odometerReading := 178440
!T_12001_CX6.gasTankCapacity := 44.0
!T_12001_CX6.workingRadio := true
!T_12001_CX6.mileage := 8

!new Truck('T_12002_CX6')
!T_12002_CX6.id := 12002
!T_12002_CX6.registrationState := #DE
!T_12002_CX6.licensePlateNumber := 'DE 5H-9920'
!T_12002_CX6.vehicleTypeCode := #TRUCK10
!T_12002_CX6.registrationLastMaintenanceDate := Date('2026-02-03')
!T_12002_CX6.expirationDate := Date('2027-02-28')
!T_12002_CX6.odometerReading := 62155
!T_12002_CX6.gasTankCapacity := 28.5
!T_12002_CX6.workingRadio := false
!T_12002_CX6.mileage := 14

!new Truck('T_12003_CX6')
!T_12003_CX6.id := 12003
!T_12003_CX6.registrationState := #FL
!T_12003_CX6.licensePlateNumber := 'FL HZN-203'
!T_12003_CX6.vehicleTypeCode := #TRUCK
!T_12003_CX6.registrationLastMaintenanceDate := Date('2026-03-06')
!T_12003_CX6.expirationDate := Date('2027-03-31')
!T_12003_CX6.odometerReading := 90512
!T_12003_CX6.gasTankCapacity := 35.0
!T_12003_CX6.workingRadio := true
!T_12003_CX6.mileage := 12

!new Vehicle('V_12101_CX6')
!V_12101_CX6.id := 12101
!V_12101_CX6.registrationState := #CT
!V_12101_CX6.licensePlateNumber := 'CT TR-7701'
!V_12101_CX6.vehicleTypeCode := #COVERED_TRAILER
!V_12101_CX6.registrationLastMaintenanceDate := Date('2025-12-20')
!V_12101_CX6.expirationDate := Date('2026-12-31')

!new Vehicle('V_12102_CX6')
!V_12102_CX6.id := 12102
!V_12102_CX6.registrationState := #CA
!V_12102_CX6.licensePlateNumber := 'CA 3LKT609'
!V_12102_CX6.vehicleTypeCode := #OPEN_TRAILER
!V_12102_CX6.registrationLastMaintenanceDate := Date('2026-01-05')
!V_12102_CX6.expirationDate := Date('2027-01-31')

!new Vehicle('V_12103_CX6')
!V_12103_CX6.id := 12103
!V_12103_CX6.registrationState := #CO
!V_12103_CX6.licensePlateNumber := 'CO CT-4490'
!V_12103_CX6.vehicleTypeCode := #COVERED_TRAILER
!V_12103_CX6.registrationLastMaintenanceDate := Date('2025-11-02')
!V_12103_CX6.expirationDate := Date('2026-11-30')

!new Vehicle('V_12104_CX6')
!V_12104_CX6.id := 12104
!V_12104_CX6.registrationState := #DE
!V_12104_CX6.licensePlateNumber := 'DE OT-6612'
!V_12104_CX6.vehicleTypeCode := #OPEN_TRAILER
!V_12104_CX6.registrationLastMaintenanceDate := Date('2026-02-18')
!V_12104_CX6.expirationDate := Date('2027-02-28')

!new Individual('CUST_I_51_CX6')
!CUST_I_51_CX6.name := 'Linh Trần'
!CUST_I_51_CX6.address := '22 Broad St, New London, CT 06320'
!CUST_I_51_CX6.poorRisk := false
!CUST_I_51_CX6.homePhone := '+1-860-555-0101'
!CUST_I_51_CX6.driverLicenseState := #CT
!CUST_I_51_CX6.driverLicenseNumber := 51022017
!CUST_I_51_CX6.driverLicenseExpirationDate := Date('2028-05-30')

!new Individual('CUST_I_52_CX6')
!CUST_I_52_CX6.name := 'Derek O’Connell'
!CUST_I_52_CX6.address := '9 Ocean Ave, Groton, CT 06340'
!CUST_I_52_CX6.poorRisk := true
!CUST_I_52_CX6.homePhone := '+1-860-555-0184'
!CUST_I_52_CX6.driverLicenseState := #CT
!CUST_I_52_CX6.driverLicenseNumber := 77290110
!CUST_I_52_CX6.driverLicenseExpirationDate := Date('2026-08-21')

!new Individual('CUST_I_53_CX6')
!CUST_I_53_CX6.name := 'Samira El-Amin'
!CUST_I_53_CX6.address := '145 State St, New London, CT 06320'
!CUST_I_53_CX6.poorRisk := false
!CUST_I_53_CX6.homePhone := '+1-860-555-0155'
!CUST_I_53_CX6.driverLicenseState := #DE
!CUST_I_53_CX6.driverLicenseNumber := 66031492
!CUST_I_53_CX6.driverLicenseExpirationDate := Date('2027-12-09')

!new Company('CUST_C_51_CX6')
!CUST_C_51_CX6.name := 'Soundview Maritime Services, Inc.'
!CUST_C_51_CX6.address := '400 Water St, New London, CT 06320'
!CUST_C_51_CX6.poorRisk := false
!CUST_C_51_CX6.idNumber := 80134011

!new Company('CUST_C_52_CX6')
!CUST_C_52_CX6.name := 'Northeast Salvage & Cleanout Co.'
!CUST_C_52_CX6.address := '18 Fort Hill Rd, Groton, CT 06340'
!CUST_C_52_CX6.poorRisk := true
!CUST_C_52_CX6.idNumber := 80199070

!new RentalAgreement('RA_120901')
!RA_120901.number := 120901
!RA_120901.rentalDate := Date('2026-03-20')
!RA_120901.anticipatedDuration := 1
!RA_120901.depositPaid := 120.0
!RA_120901.quotedDailyRate := 35.0
!RA_120901.quotedRatePerMile := 0.0

!new RentalAgreement('RA_120902')
!RA_120902.number := 120902
!RA_120902.rentalDate := Date('2026-03-22')
!RA_120902.anticipatedDuration := 3
!RA_120902.depositPaid := 700.0
!RA_120902.quotedDailyRate := 210.0
!RA_120902.quotedRatePerMile := 1.05

!new RentalAgreement('RA_120903')
!RA_120903.number := 120903
!RA_120903.rentalDate := Date('2026-03-25')
!RA_120903.anticipatedDuration := 2
!RA_120903.depositPaid := 250.0
!RA_120903.quotedDailyRate := 89.0
!RA_120903.quotedRatePerMile := 0.72

!new RentalAgreement('RA_120904')
!RA_120904.number := 120904
!RA_120904.rentalDate := Date('2026-03-28')
!RA_120904.anticipatedDuration := 2
!RA_120904.depositPaid := 500.0
!RA_120904.quotedDailyRate := 175.0
!RA_120904.quotedRatePerMile := 0.95

!new RentalAgreement('RA_120905')
!RA_120905.number := 120905
!RA_120905.rentalDate := Date('2026-03-29')
!RA_120905.anticipatedDuration := 1
!RA_120905.depositPaid := 90.0
!RA_120905.quotedDailyRate := 30.0
!RA_120905.quotedRatePerMile := 0.0

!new RentalAgreement('RA_120906')
!RA_120906.number := 120906
!RA_120906.rentalDate := Date('2026-04-02')
!RA_120906.anticipatedDuration := 4
!RA_120906.depositPaid := 0.0
!RA_120906.quotedDailyRate := 28.0
!RA_120906.quotedRatePerMile := 0.0

!new RentalAgreement('RA_120907')
!RA_120907.number := 120907
!RA_120907.rentalDate := Date('2026-04-06')
!RA_120907.anticipatedDuration := 2
!RA_120907.depositPaid := 140.0
!RA_120907.quotedDailyRate := 34.0
!RA_120907.quotedRatePerMile := 0.0

!new RentalAgreement('RA_120908')
!RA_120908.number := 120908
!RA_120908.rentalDate := Date('2026-04-10')
!RA_120908.anticipatedDuration := 3
!RA_120908.depositPaid := 900.0
!RA_120908.quotedDailyRate := 195.0
!RA_120908.quotedRatePerMile := 1.1

!new RentalAgreement('RA_120909')
!RA_120909.number := 120909
!RA_120909.rentalDate := Date('2026-04-12')
!RA_120909.anticipatedDuration := 1
!RA_120909.depositPaid := 60.0
!RA_120909.quotedDailyRate := 22.0
!RA_120909.quotedRatePerMile := 0.0

!new RentalAgreement('RA_120910')
!RA_120910.number := 120910
!RA_120910.rentalDate := Date('2026-04-15')
!RA_120910.anticipatedDuration := 2
!RA_120910.depositPaid := 650.0
!RA_120910.quotedDailyRate := 205.0
!RA_120910.quotedRatePerMile := 1.0

!new RentalAgreement('RA_120911')
!RA_120911.number := 120911
!RA_120911.rentalDate := Date('2026-04-18')
!RA_120911.anticipatedDuration := 5
!RA_120911.depositPaid := 300.0
!RA_120911.quotedDailyRate := 92.0
!RA_120911.quotedRatePerMile := 0.68

!new RentalAgreement('RA_120912')
!RA_120912.number := 120912
!RA_120912.rentalDate := Date('2026-04-21')
!RA_120912.anticipatedDuration := 2
!RA_120912.depositPaid := 110.0
!RA_120912.quotedDailyRate := 27.0
!RA_120912.quotedRatePerMile := 0.0

!new RentalAgreement('RA_120913')
!RA_120913.number := 120913
!RA_120913.rentalDate := Date('2026-04-25')
!RA_120913.anticipatedDuration := 1
!RA_120913.depositPaid := 85.0
!RA_120913.quotedDailyRate := 29.0
!RA_120913.quotedRatePerMile := 0.0

!new RentalAgreement('RA_120914')
!RA_120914.number := 120914
!RA_120914.rentalDate := Date('2026-04-28')
!RA_120914.anticipatedDuration := 3
!RA_120914.depositPaid := 450.0
!RA_120914.quotedDailyRate := 160.0
!RA_120914.quotedRatePerMile := 0.9

!insert (RO_801_NL_CX6, T_12001_CX6) into RentalOfficeVehicle
!insert (RO_801_NL_CX6, T_12002_CX6) into RentalOfficeVehicle
!insert (RO_801_NL_CX6, T_12003_CX6) into RentalOfficeVehicle
!insert (RO_801_NL_CX6, V_12101_CX6) into RentalOfficeVehicle
!insert (RO_801_NL_CX6, V_12102_CX6) into RentalOfficeVehicle
!insert (RO_801_NL_CX6, V_12103_CX6) into RentalOfficeVehicle
!insert (RO_801_NL_CX6, V_12104_CX6) into RentalOfficeVehicle

!insert (RO_801_NL_CX6, RA_120901) into RentalOfficeRentalAgreementOrigin
!insert (RO_801_NL_CX6, RA_120902) into RentalOfficeRentalAgreementOrigin
!insert (RO_801_NL_CX6, RA_120903) into RentalOfficeRentalAgreementOrigin
!insert (RO_801_NL_CX6, RA_120904) into RentalOfficeRentalAgreementOrigin
!insert (RO_801_NL_CX6, RA_120905) into RentalOfficeRentalAgreementOrigin
!insert (RO_801_NL_CX6, RA_120906) into RentalOfficeRentalAgreementOrigin
!insert (RO_801_NL_CX6, RA_120907) into RentalOfficeRentalAgreementOrigin
!insert (RO_801_NL_CX6, RA_120908) into RentalOfficeRentalAgreementOrigin
!insert (RO_801_NL_CX6, RA_120909) into RentalOfficeRentalAgreementOrigin
!insert (RO_801_NL_CX6, RA_120910) into RentalOfficeRentalAgreementOrigin
!insert (RO_801_NL_CX6, RA_120911) into RentalOfficeRentalAgreementOrigin
!insert (RO_801_NL_CX6, RA_120912) into RentalOfficeRentalAgreementOrigin
!insert (RO_801_NL_CX6, RA_120913) into RentalOfficeRentalAgreementOrigin
!insert (RO_801_NL_CX6, RA_120914) into RentalOfficeRentalAgreementOrigin

!insert (RO_801_NL_CX6, RA_120901) into RentalOfficeRentalAgreementDrop
!insert (RO_801_NL_CX6, RA_120902) into RentalOfficeRentalAgreementDrop
!insert (RO_801_NL_CX6, RA_120903) into RentalOfficeRentalAgreementDrop
!insert (RO_801_NL_CX6, RA_120904) into RentalOfficeRentalAgreementDrop
!insert (RO_801_NL_CX6, RA_120905) into RentalOfficeRentalAgreementDrop
!insert (RO_801_NL_CX6, RA_120906) into RentalOfficeRentalAgreementDrop
!insert (RO_801_NL_CX6, RA_120907) into RentalOfficeRentalAgreementDrop
!insert (RO_801_NL_CX6, RA_120908) into RentalOfficeRentalAgreementDrop
!insert (RO_801_NL_CX6, RA_120909) into RentalOfficeRentalAgreementDrop
!insert (RO_801_NL_CX6, RA_120910) into RentalOfficeRentalAgreementDrop
!insert (RO_801_NL_CX6, RA_120911) into RentalOfficeRentalAgreementDrop
!insert (RO_801_NL_CX6, RA_120912) into RentalOfficeRentalAgreementDrop
!insert (RO_801_NL_CX6, RA_120913) into RentalOfficeRentalAgreementDrop
!insert (RO_801_NL_CX6, RA_120914) into RentalOfficeRentalAgreementDrop

!insert (RA_120901, V_12102_CX6) into RentalAgreementVehicle
!insert (RA_120902, T_12001_CX6) into RentalAgreementVehicle
!insert (RA_120903, T_12002_CX6) into RentalAgreementVehicle
!insert (RA_120904, T_12003_CX6) into RentalAgreementVehicle
!insert (RA_120905, V_12104_CX6) into RentalAgreementVehicle
!insert (RA_120906, V_12102_CX6) into RentalAgreementVehicle
!insert (RA_120907, V_12103_CX6) into RentalAgreementVehicle
!insert (RA_120908, T_12001_CX6) into RentalAgreementVehicle
!insert (RA_120909, V_12101_CX6) into RentalAgreementVehicle
!insert (RA_120910, T_12001_CX6) into RentalAgreementVehicle
!insert (RA_120911, T_12002_CX6) into RentalAgreementVehicle
!insert (RA_120912, V_12104_CX6) into RentalAgreementVehicle
!insert (RA_120913, V_12102_CX6) into RentalAgreementVehicle
!insert (RA_120914, T_12003_CX6) into RentalAgreementVehicle

!insert (RA_120901, CUST_I_51_CX6) into RentalAgreementCustomer
!insert (RA_120902, CUST_C_51_CX6) into RentalAgreementCustomer
!insert (RA_120903, CUST_I_53_CX6) into RentalAgreementCustomer
!insert (RA_120904, CUST_C_52_CX6) into RentalAgreementCustomer
!insert (RA_120905, CUST_I_52_CX6) into RentalAgreementCustomer
!insert (RA_120906, CUST_C_51_CX6) into RentalAgreementCustomer
!insert (RA_120907, CUST_I_51_CX6) into RentalAgreementCustomer
!insert (RA_120908, CUST_C_52_CX6) into RentalAgreementCustomer
!insert (RA_120909, CUST_I_53_CX6) into RentalAgreementCustomer
!insert (RA_120910, CUST_I_52_CX6) into RentalAgreementCustomer
!insert (RA_120911, CUST_C_51_CX6) into RentalAgreementCustomer
!insert (RA_120912, CUST_C_52_CX6) into RentalAgreementCustomer
!insert (RA_120913, CUST_I_52_CX6) into RentalAgreementCustomer
!insert (RA_120914, CUST_I_51_CX6) into RentalAgreementCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 260 | 0.00% |
| Multiplicities Errors | 0 | 63 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 1 | 6 | 16.67% |
| License Plates | 0 | 7 | 0.00% |
| Home Phones | 0 | 3 | 0.00% |

| Invalid Addresses | 
|---| 
```
400 Water St, New London, CT 06320
```

## Category edge
```
!new RentalOffice('RO50_EC6')
!RO50_EC6.name := 'One-Stop Micro Branch'
!RO50_EC6.number := 50
!RO50_EC6.address := '50 Union Sq, Wilmington, DE 19801 (single counter for pickup/return)'

!new Truck('V500_EC6')
!V500_EC6.id := 500
!V500_EC6.registrationState := #DE
!V500_EC6.licensePlateNumber := 'DE-ONLYOFFICE-500-XXXXXXXXXXXXXXXX'
!V500_EC6.vehicleTypeCode := #TRUCK
!V500_EC6.registrationLastMaintenanceDate := Date('2026-01-01+14:00')
!V500_EC6.expirationDate := Date('2026-01-01-12:00')
!V500_EC6.odometerReading := 0
!V500_EC6.gasTankCapacity := 0.0
!V500_EC6.workingRadio := false
!V500_EC6.mileage := 0

!new Vehicle('V501_EC6')
!V501_EC6.id := 501
!V501_EC6.registrationState := #FL
!V501_EC6.licensePlateNumber := 'FL-TRAIL-501'
!V501_EC6.vehicleTypeCode := #COVERED_TRAILER
!V501_EC6.registrationLastMaintenanceDate := Date('1990-05-20')
!V501_EC6.expirationDate := Date('2099-12-31')

!new Individual('I50_EC6')
!I50_EC6.name := 'Oumar Ndiaye'
!I50_EC6.address := 'c/o One-Stop Micro Branch, 50 Union Sq, Wilmington, DE 19801'
!I50_EC6.poorRisk := false
!I50_EC6.homePhone := '+1 302 555 0150'
!I50_EC6.driverLicenseState := #DE
!I50_EC6.driverLicenseNumber := 2147483647
!I50_EC6.driverLicenseExpirationDate := Date('2026-12-31T23:59:60Z')

!new Company('C50_EC6')
!C50_EC6.name := 'Apex Zero-Day Shipping, Inc.'
!C50_EC6.address := '1 Warehouse Loop, Orlando, FL 32827'
!C50_EC6.poorRisk := true
!C50_EC6.idNumber := 50

!new Company('C51_EC6')
!C51_EC6.name := 'Silent Ledger Ltd.'
!C51_EC6.address := 'PO Box 501, Wilmington, DE 19899'
!C51_EC6.poorRisk := false
!C51_EC6.idNumber := 0

!new RentalAgreement('RA500_EC6')
!RA500_EC6.number := -500
!RA500_EC6.rentalDate := Date('2026-01-01+14:00')
!RA500_EC6.anticipatedDuration := -1
!RA500_EC6.depositPaid := 0.0
!RA500_EC6.quotedDailyRate := 0.0
!RA500_EC6.quotedRatePerMile := 0.0

!new RentalAgreement('RA501_EC6')
!RA501_EC6.number := 501
!RA501_EC6.rentalDate := Date('2026-12-31T23:59:60Z')
!RA501_EC6.anticipatedDuration := 0
!RA501_EC6.depositPaid := 9999999999.99
!RA501_EC6.quotedDailyRate := 0.0000000001
!RA501_EC6.quotedRatePerMile := 123456789.123456

!insert (RO50_EC6, V500_EC6) into RentalOfficeVehicle
!insert (RO50_EC6, V501_EC6) into RentalOfficeVehicle

!insert (RO50_EC6, RA500_EC6) into RentalOfficeRentalAgreementOrigin
!insert (RO50_EC6, RA501_EC6) into RentalOfficeRentalAgreementOrigin

!insert (RO50_EC6, RA500_EC6) into RentalOfficeRentalAgreementDrop
!insert (RO50_EC6, RA501_EC6) into RentalOfficeRentalAgreementDrop

!insert (RA500_EC6, V500_EC6) into RentalAgreementVehicle
!insert (RA501_EC6, V501_EC6) into RentalAgreementVehicle

!insert (RA500_EC6, I50_EC6) into RentalAgreementCustomer
!insert (RA501_EC6, C50_EC6) into RentalAgreementCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 64 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 3 | 4 | 75.00% |
| License Plates | 2 | 2 | 100.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
50 Union Sq, Wilmington, DE 19801 (single counter for pickup/return)
```
```
c/o One-Stop Micro Branch, 50 Union Sq, Wilmington, DE 19801
```
```
1 Warehouse Loop, Orlando, FL 32827
```

| Invalid License Plates | 
|---| 
```
DE-ONLYOFFICE-500-XXXXXXXXXXXXXXXX
```
```
FL-TRAIL-501
```

## Category invalid
```
!new RentalOffice('RO_SD_9_OC6')
!RO_SD_9_OC6.name := 'San Diego Airport Commercial Desk'
!RO_SD_9_OC6.number := 9
!RO_SD_9_OC6.address := '3225 N Harbor Dr, San Diego, CA 92101, USA'

!new RentalOffice('RO_TUC_33_OC6')
!RO_TUC_33_OC6.name := 'Tucson Downtown Fleet Center'
!RO_TUC_33_OC6.number := 33
!RO_TUC_33_OC6.address := '450 E Congress St, Tucson, AZ 85701, USA'

!new Truck('T_77110_OC6')
!T_77110_OC6.id := 77110
!T_77110_OC6.registrationState := #CA
!T_77110_OC6.licensePlateNumber := 'CA-8HXR219'
!T_77110_OC6.vehicleTypeCode := #TRUCK10
!T_77110_OC6.registrationLastMaintenanceDate := Date('2026-06-28')
!T_77110_OC6.expirationDate := Date('2027-06-30')
!T_77110_OC6.odometerReading := 55804
!T_77110_OC6.gasTankCapacity := 35.5
!T_77110_OC6.workingRadio := true
!T_77110_OC6.mileage := 14

!new Individual('I_LuisHernandez_OC6')
!I_LuisHernandez_OC6.name := 'Luis Hernández'
!I_LuisHernandez_OC6.address := '1090 W Morena Blvd, San Diego, CA 92110, USA'
!I_LuisHernandez_OC6.poorRisk := false
!I_LuisHernandez_OC6.homePhone := '+1 (619) 555-0106'
!I_LuisHernandez_OC6.driverLicenseState := #CA
!I_LuisHernandez_OC6.driverLicenseNumber := 72840115
!I_LuisHernandez_OC6.driverLicenseExpirationDate := Date('2028-11-19')

!new Company('C_SolySombra_OC6')
!C_SolySombra_OC6.name := 'Sol y Sombra Solar, Inc.'
!C_SolySombra_OC6.address := '2450 Kettner Blvd, San Diego, CA 92101, USA'
!C_SolySombra_OC6.poorRisk := false
!C_SolySombra_OC6.idNumber := 6004182

!new RentalAgreement('RA_88001_OC6')
!RA_88001_OC6.number := 88001
!RA_88001_OC6.rentalDate := Date('2026-07-15')
!RA_88001_OC6.anticipatedDuration := 21
!RA_88001_OC6.depositPaid := 250.0
!RA_88001_OC6.quotedDailyRate := 119.0
!RA_88001_OC6.quotedRatePerMile := 0.49

!insert (RO_SD_9_OC6, T_77110_OC6) into RentalOfficeVehicle

!insert (RO_SD_9_OC6, RA_88001_OC6) into RentalOfficeRentalAgreementOrigin
!insert (RO_TUC_33_OC6, RA_88001_OC6) into RentalOfficeRentalAgreementDrop

!insert (RA_88001_OC6, T_77110_OC6) into RentalAgreementVehicle

!insert (RA_88001_OC6, I_LuisHernandez_OC6) into RentalAgreementCustomer
!insert (RA_88001_OC6, C_SolySombra_OC6) into RentalAgreementCustomer
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 6 | 16.67% |
| Invariants Errors (Not included on General) | 0 | 5 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `RentalAgreementCustomer':
  Object `RA_88001_OC6' of class `RentalAgreement' is connected to 2 objects of class `Customer'
  at association end `customer' but the multiplicity is specified as `1'.
```

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 1 | 4 | 25.00% |
| License Plates | 0 | 1 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
450 E Congress St, Tucson, AZ 85701, USA
```

## Generation 6 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 582 | 0.00% |
| Multiplicities Errors | 0 | 105 | 0.00% |
| Invariants Errors | 0 | 20 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 6 | 16.67% |
| Invariants Errors (Not included on General) | 0 | 5 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `RentalAgreementCustomer':
  Object `RA_88001_OC6' of class `RentalAgreement' is connected to 2 objects of class `Customer'
  at association end `customer' but the multiplicity is specified as `1'.
```

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 9 | 28 | 32.14% |
| License Plates | 5 | 18 | 27.78% |
| Home Phones | 0 | 9 | 0.00% |

| Invalid Addresses | 
|---| 
```
801 Riverside Dr, Hartford, CT
```
```
803 Bayshore Dr, Miami, FL
```
```
10 Vine St, Los Angeles, CA
```
```
5 Wharf Rd, Wilmington, DE
```
```
400 Water St, New London, CT 06320
```
```
50 Union Sq, Wilmington, DE 19801 (single counter for pickup/return)
```
```
c/o One-Stop Micro Branch, 50 Union Sq, Wilmington, DE 19801
```
```
1 Warehouse Loop, Orlando, FL 32827
```
```
450 E Congress St, Tucson, AZ 85701, USA
```

| Invalid License Plates | 
|---| 
```
CO-TRL-20011
```
```
CA-OPEN-0800
```
```
DE-OPEN-0802
```
```
DE-ONLYOFFICE-500-XXXXXXXXXXXXXXXX
```
```
FL-TRAIL-501
```

# Summary for all generations
| Summary | Value | 
|---|---| 
| Model | GPT_5_2 | 
| Type | CoT | 
| System | vehiclerental | 
| Number of generations | 6 | 

| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 3458 | 0.00% |
| Multiplicities Errors | 0 | 567 | 0.00% |
| Invariants Errors | 0 | 120 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 9 | 37 | 24.32% |
| Invariants Errors (Not included on General) | 1 | 30 | 3.33% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `RentalAgreementCustomer':
  Object `RA_202601990' of class `RentalAgreement' is connected to 2 objects of class `Customer'
  at association end `customer' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `RentalOfficeRentalAgreementDrop':
  Object `RA_202601990' of class `RentalAgreement' is connected to 0 objects of class `RentalOffice'
  at association end `droppoffRentalOffice' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `RentalOfficeVehicle':
  Object `V_88040_2' of class `Vehicle' is connected to 2 objects of class `RentalOffice'
  at association end `homeOffice' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `RentalAgreementVehicle':
  Object `RA_5500123_2' of class `RentalAgreement' is connected to 2 objects of class `Vehicle'
  at association end `vehicle' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `RentalOfficeRentalAgreementOrigin':
  Object `RA_90077_OC3' of class `RentalAgreement' is connected to 2 objects of class `RentalOffice'
  at association end `originatingRentalOffice' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `RentalAgreementVehicle':
  Object `RA_6100088' of class `RentalAgreement' is connected to 2 objects of class `Vehicle'
  at association end `vehicle' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `RentalOfficeVehicle':
  Object `T_99001_OC5' of class `Truck' is connected to 0 objects of class `RentalOffice'
  at association end `homeOffice' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `RentalAgreementVehicle':
  Object `RA_770045_OC5' of class `RentalAgreement' is connected to 0 objects of class `Vehicle'
  at association end `vehicle' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `RentalAgreementCustomer':
  Object `RA_88001_OC6' of class `RentalAgreement' is connected to 2 objects of class `Customer'
  at association end `customer' but the multiplicity is specified as `1'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (1) `RentalAgreement::positiveDepositPaid': FAILED.
```

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 46 | 172 | 26.74% |
| License Plates | 15 | 119 | 12.61% |
| Home Phones | 0 | 47 | 0.00% |

| Invalid Addresses | 
|---| 
```
1 Main St, Los Angeles, CA
```
```
2 Dock Rd, Wilmington, CA
```
```
3 Empty Ln, Dover, DE
```
```
4 Short St, Los Angeles, CA
```
```
5 Rue Min, Dover, DE
```
```
1½ Market St, Wilmington, DE 19801
```
```
Exit 7 Service Rd, Dover, DE 19901
```
```
Unit B, 12 Orange St, Dover, DE 19901
```
```
Harbor Rd 5, Dover, DE 19904
```
```
500 Aurora Blvd, Anchorage, AK
```
```
1 Harbor Ring, Anchorage, AK
```
```
1250 Alameda Ave, El Paso, TX (US–MX crossing lane)
```
```
NW 21st St, Miami, FL (Shuttle Stop B)
```
```
99 Airport Way, Fairbanks, AK
```
```
5 Aurora Industrial Rd, Fairbanks, AK
```
```
2450 Signal St, Los Angeles, CA 90031
```
```
33 S Monroe St, Tallahassee, FL 32301
```
```
425 Airport Way, Fairbanks, AK 99709
```
```
Online-only desk, PO Box 20, Hartford, CT
```
```
500 Port Blvd, Miami, FL (gate code required)
```
```
12 King St, Wilmington, DE
```
```
12 King St, Wilmington, DE
```
```
1 Theater Way, Montgomery, AL
```
```
Temporary booth, Jacksonville, FL
```
```
Apt 3, 77 Broad St, Wilmington, DE
```
```
Harbor Road 1, Dover, DE
```
```
400 Commerce St, Hartford, CT
```
```
55 Magnolia Ave, Birmingham, AL
```
```
1860 Government Blvd, Mobile, AL 36606
```
```
410 Lake Merritt Blvd, Oakland, CA 94610
```
```
200 Elm St, Hartford, CT
```
```
1 Jetport Way, Orlando, FL (returns only)
```
```
77 Service Rd, Denver, CO
```
```
77 Service Rd, Denver, CO
```
```
200 Elm St, Hartford, CT
```
```
1 Jetport Way, Orlando, FL
```
```
1201 Water St, Mobile, AL 36602, USA
```
```
801 Riverside Dr, Hartford, CT
```
```
803 Bayshore Dr, Miami, FL
```
```
10 Vine St, Los Angeles, CA
```
```
5 Wharf Rd, Wilmington, DE
```
```
400 Water St, New London, CT 06320
```
```
50 Union Sq, Wilmington, DE 19801 (single counter for pickup/return)
```
```
c/o One-Stop Micro Branch, 50 Union Sq, Wilmington, DE 19801
```
```
1 Warehouse Loop, Orlando, FL 32827
```
```
450 E Congress St, Tucson, AZ 85701, USA
```

| Invalid License Plates | 
|---| 
```
0
```
```
CO-TRAIL-501
```
```
FL-TRAIL-000
```
```
FL-TRAIL-302
```
```
AZ-DESERT-0050
```
```
AL-TRAILER-000051
```
```
CT-Ø-300
```
```
AZ-LONGHAUL-701
```
```
CA-TRLR-0702
```
```
DE-TRK10-403
```
```
CO-TRL-20011
```
```
CA-OPEN-0800
```
```
DE-OPEN-0802
```
```
DE-ONLYOFFICE-500-XXXXXXXXXXXXXXXX
```
```
FL-TRAIL-501
```

