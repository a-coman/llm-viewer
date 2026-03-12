# Generation 1
```
!new RentalOffice('office1')
!office1.name := 'Downtown Rental'
!office1.number := 101
!office1.address := '123 Main St, Denver, CO'

!new Truck('truck1')
!truck1.id := 501
!truck1.registrationState := #CO
!truck1.licensePlateNumber := 'TRK-7890'
!truck1.vehicleTypeCode := #TRUCK24
!truck1.registrationLastMaintenanceDate := Date('2023-05-12')
!truck1.expirationDate := Date('2024-05-12')
!truck1.odometerReading := 15000
!truck1.gasTankCapacity := 30.0
!truck1.workingRadio := true
!truck1.mileage := 22

!new Individual('individual1')
!individual1.name := 'Alice Johnson'
!individual1.address := '456 Elm St, Boulder, CO'
!individual1.poorRisk := false
!individual1.homePhone := '555-2345'
!individual1.driverLicenseState := #CO
!individual1.driverLicenseNumber := 10203045
!individual1.driverLicenseExpirationDate := Date('2027-09-15')

!new RentalAgreement('agreement1')
!agreement1.number := 3001
!agreement1.rentalDate := Date('2023-10-01')
!agreement1.anticipatedDuration := 7
!agreement1.depositPaid := 150.0
!agreement1.quotedDailyRate := 59.99
!agreement1.quotedRatePerMile := 0.35

!new Truck('truck2')
!truck2.id := 502
!truck2.registrationState := #CA
!truck2.licensePlateNumber := 'TRK-1234'
!truck2.vehicleTypeCode := #TRUCK10
!truck2.registrationLastMaintenanceDate := Date('2023-04-20')
!truck2.expirationDate := Date('2024-04-20')
!truck2.odometerReading := 10000
!truck2.gasTankCapacity := 25.5
!truck2.workingRadio := false
!truck2.mileage := 20

!new Company('company1')
!company1.name := 'TechCorp LLC'
!company1.address := '789 Industrial Way, Los Angeles, CA'
!company1.poorRisk := true
!company1.idNumber := 567890

!new RentalAgreement('agreement2')
!agreement2.number := 3002
!agreement2.rentalDate := Date('2023-09-25')
!agreement2.anticipatedDuration := 5
!agreement2.depositPaid := 200.0
!agreement2.quotedDailyRate := 49.99
!agreement2.quotedRatePerMile := 0.4

!insert (office1, truck1) into RentalOfficeVehicle
!insert (office1, truck2) into RentalOfficeVehicle
!insert (office1, agreement1) into RentalOfficeRentalAgreementOrigin
!insert (office1, agreement1) into RentalOfficeRentalAgreementDrop
!insert (office1, agreement2) into RentalOfficeRentalAgreementOrigin
!insert (office1, agreement2) into RentalOfficeRentalAgreementDrop
!insert (agreement1, truck1) into RentalAgreementVehicle
!insert (agreement1, individual1) into RentalAgreementCustomer
!insert (agreement2, truck2) into RentalAgreementVehicle
!insert (agreement2, company1) into RentalAgreementCustomer
```
## Generation 1 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 63 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 3 | 3 | 100.00% |
| License Plates | 0 | 2 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
123 Main St, Denver, CO
```
```
456 Elm St, Boulder, CO
```
```
789 Industrial Way, Los Angeles, CA
```

# Generation 2
```
!new RentalOffice('office2')
!office2.name := 'Airport Rental'
!office2.number := 202
!office2.address := '555 Aviation Blvd, Miami, FL'

!new Truck('truck3')
!truck3.id := 503
!truck3.registrationState := #FL
!truck3.licensePlateNumber := 'FL-TRK-3456'
!truck3.vehicleTypeCode := #TRUCK
!truck3.registrationLastMaintenanceDate := Date('2023-06-10')
!truck3.expirationDate := Date('2025-06-10')
!truck3.odometerReading := 5000
!truck3.gasTankCapacity := 40.0
!truck3.workingRadio := true
!truck3.mileage := 18

!new Individual('individual2')
!individual2.name := 'John Smith'
!individual2.address := '789 Pine St, Orlando, FL'
!individual2.poorRisk := false
!individual2.homePhone := '555-6789'
!individual2.driverLicenseState := #FL
!individual2.driverLicenseNumber := 20304050
!individual2.driverLicenseExpirationDate := Date('2026-11-20')

!new RentalAgreement('agreement3')
!agreement3.number := 3003
!agreement3.rentalDate := Date('2023-11-05')
!agreement3.anticipatedDuration := 3
!agreement3.depositPaid := 120.0
!agreement3.quotedDailyRate := 55.00
!agreement3.quotedRatePerMile := 0.5

!new Truck('truck4')
!truck4.id := 504
!truck4.registrationState := #AZ
!truck4.licensePlateNumber := 'AZ-TRK-5678'
!truck4.vehicleTypeCode := #TRUCK10
!truck4.registrationLastMaintenanceDate := Date('2023-07-15')
!truck4.expirationDate := Date('2025-07-15')
!truck4.odometerReading := 8000
!truck4.gasTankCapacity := 35.0
!truck4.workingRadio := false
!truck4.mileage := 20

!new Company('company2')
!company2.name := 'ConstructionPros Inc.'
!company2.address := '321 Build Rd, Phoenix, AZ'
!company2.poorRisk := false
!company2.idNumber := 678901

!new RentalAgreement('agreement4')
!agreement4.number := 3004
!agreement4.rentalDate := Date('2023-11-10')
!agreement4.anticipatedDuration := 10
!agreement4.depositPaid := 300.0
!agreement4.quotedDailyRate := 65.00
!agreement4.quotedRatePerMile := 0.6

!insert (office2, truck3) into RentalOfficeVehicle
!insert (office2, truck4) into RentalOfficeVehicle
!insert (office2, agreement3) into RentalOfficeRentalAgreementOrigin
!insert (office2, agreement3) into RentalOfficeRentalAgreementDrop
!insert (office2, agreement4) into RentalOfficeRentalAgreementOrigin
!insert (office2, agreement4) into RentalOfficeRentalAgreementDrop
!insert (agreement3, truck3) into RentalAgreementVehicle
!insert (agreement3, individual2) into RentalAgreementCustomer
!insert (agreement4, truck4) into RentalAgreementVehicle
!insert (agreement4, company2) into RentalAgreementCustomer
```
## Generation 2 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 63 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 2 | 3 | 66.67% |
| License Plates | 0 | 2 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
555 Aviation Blvd, Miami, FL
```
```
321 Build Rd, Phoenix, AZ
```

# Generation 3
```
!new RentalOffice('office3')
!office3.name := 'Suburban Wheels'
!office3.number := 303
!office3.address := '1010 Suburb Dr, Hartford, CT'

!new Truck('truck5')
!truck5.id := 505
!truck5.registrationState := #CT
!truck5.licensePlateNumber := 'CT-TRK-6789'
!truck5.vehicleTypeCode := #OPEN_TRAILER
!truck5.registrationLastMaintenanceDate := Date('2023-08-18')
!truck5.expirationDate := Date('2024-08-18')
!truck5.odometerReading := 12000
!truck5.gasTankCapacity := 28.0
!truck5.workingRadio := true
!truck5.mileage := 24

!new Individual('individual3')
!individual3.name := 'Emma White'
!individual3.address := '500 Maple Dr, Stamford, CT'
!individual3.poorRisk := true
!individual3.homePhone := '555-8901'
!individual3.driverLicenseState := #CT
!individual3.driverLicenseNumber := 30405060
!individual3.driverLicenseExpirationDate := Date('2025-02-28')

!new RentalAgreement('agreement5')
!agreement5.number := 3005
!agreement5.rentalDate := Date('2023-12-01')
!agreement5.anticipatedDuration := 2
!agreement5.depositPaid := 100.0
!agreement5.quotedDailyRate := 70.00
!agreement5.quotedRatePerMile := 0.45

!new Truck('truck6')
!truck6.id := 506
!truck6.registrationState := #DE
!truck6.licensePlateNumber := 'DE-TRK-7890'
!truck6.vehicleTypeCode := #COVERED_TRAILER
!truck6.registrationLastMaintenanceDate := Date('2023-09-01')
!truck6.expirationDate := Date('2025-09-01')
!truck6.odometerReading := 15000
!truck6.gasTankCapacity := 25.0
!truck6.workingRadio := false
!truck6.mileage := 16

!new Company('company3')
!company3.name := 'TransLogistics'
!company3.address := '987 Transport Lane, Dover, DE'
!company3.poorRisk := false
!company3.idNumber := 789012

!new RentalAgreement('agreement6')
!agreement6.number := 3006
!agreement6.rentalDate := Date('2023-12-05')
!agreement6.anticipatedDuration := 8
!agreement6.depositPaid := 350.0
!agreement6.quotedDailyRate := 75.00
!agreement6.quotedRatePerMile := 0.55

!insert (office3, truck5) into RentalOfficeVehicle
!insert (office3, truck6) into RentalOfficeVehicle
!insert (office3, agreement5) into RentalOfficeRentalAgreementOrigin
!insert (office3, agreement5) into RentalOfficeRentalAgreementDrop
!insert (office3, agreement6) into RentalOfficeRentalAgreementOrigin
!insert (office3, agreement6) into RentalOfficeRentalAgreementDrop
!insert (agreement5, truck5) into RentalAgreementVehicle
!insert (agreement5, individual3) into RentalAgreementCustomer
!insert (agreement6, truck6) into RentalAgreementVehicle
!insert (agreement6, company3) into RentalAgreementCustomer
```
## Generation 3 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 63 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 3 | 3 | 100.00% |
| License Plates | 0 | 2 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
1010 Suburb Dr, Hartford, CT
```
```
500 Maple Dr, Stamford, CT
```
```
987 Transport Lane, Dover, DE
```

# Generation 4
```
!new RentalOffice('office4')
!office4.name := 'City Rentals'
!office4.number := 404
!office4.address := '222 Urban Ave, Atlanta, GA'

!new Truck('truck7')
!truck7.id := 507
!truck7.registrationState := #FL
!truck7.licensePlateNumber := 'FL-TRK-2345'
!truck7.vehicleTypeCode := #TRUCK24
!truck7.registrationLastMaintenanceDate := Date('2023-03-15')
!truck7.expirationDate := Date('2024-03-15')
!truck7.odometerReading := 8000
!truck7.gasTankCapacity := 32.0
!truck7.workingRadio := true
!truck7.mileage := 20

!new Individual('individual4')
!individual4.name := 'Robert Brown'
!individual4.address := '777 Peachtree Blvd, Savannah, GA'
!individual4.poorRisk := false
!individual4.homePhone := '555-3456'
!individual4.driverLicenseState := #FL
!individual4.driverLicenseNumber := 40506070
!individual4.driverLicenseExpirationDate := Date('2026-08-10')

!new RentalAgreement('agreement7')
!agreement7.number := 3007
!agreement7.rentalDate := Date('2023-12-15')
!agreement7.anticipatedDuration := 6
!agreement7.depositPaid := 250.0
!agreement7.quotedDailyRate := 60.00
!agreement7.quotedRatePerMile := 0.50

!new Truck('truck8')
!truck8.id := 508
!truck8.registrationState := #AL
!truck8.licensePlateNumber := 'AL-TRK-5678'
!truck8.vehicleTypeCode := #TRUCK10
!truck8.registrationLastMaintenanceDate := Date('2023-07-20')
!truck8.expirationDate := Date('2025-07-20')
!truck8.odometerReading := 20000
!truck8.gasTankCapacity := 26.0
!truck8.workingRadio := true
!truck8.mileage := 15

!new Company('company4')
!company4.name := 'Eco Deliveries'
!company4.address := '750 Green Rd, Birmingham, AL'
!company4.poorRisk := true
!company4.idNumber := 890123

!new RentalAgreement('agreement8')
!agreement8.number := 3008
!agreement8.rentalDate := Date('2023-12-20')
!agreement8.anticipatedDuration := 12
!agreement8.depositPaid := 500.0
!agreement8.quotedDailyRate := 80.00
!agreement8.quotedRatePerMile := 0.65

!insert (office4, truck7) into RentalOfficeVehicle
!insert (office4, truck8) into RentalOfficeVehicle
!insert (office4, agreement7) into RentalOfficeRentalAgreementOrigin
!insert (office4, agreement7) into RentalOfficeRentalAgreementDrop
!insert (office4, agreement8) into RentalOfficeRentalAgreementOrigin
!insert (office4, agreement8) into RentalOfficeRentalAgreementDrop
!insert (agreement7, truck7) into RentalAgreementVehicle
!insert (agreement7, individual4) into RentalAgreementCustomer
!insert (agreement8, truck8) into RentalAgreementVehicle
!insert (agreement8, company4) into RentalAgreementCustomer
```
## Generation 4 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 63 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 3 | 3 | 100.00% |
| License Plates | 0 | 2 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
222 Urban Ave, Atlanta, GA
```
```
777 Peachtree Blvd, Savannah, GA
```
```
750 Green Rd, Birmingham, AL
```

# Generation 5
```
!new RentalOffice('office5')
!office5.name := 'Highland Rentals'
!office5.number := 505
!office5.address := '456 Highland Ave, Anchorage, AK'

!new Truck('truck9')
!truck9.id := 509
!truck9.registrationState := #AK
!truck9.licensePlateNumber := 'AK-TRK-9012'
!truck9.vehicleTypeCode := #TRUCK
!truck9.registrationLastMaintenanceDate := Date('2023-02-05')
!truck9.expirationDate := Date('2024-02-05')
!truck9.odometerReading := 25000
!truck9.gasTankCapacity := 29.5
!truck9.workingRadio := true
!truck9.mileage := 19

!new Individual('individual5')
!individual5.name := 'Samantha Green'
!individual5.address := '101 Maple St, Fairbanks, AK'
!individual5.poorRisk := false
!individual5.homePhone := '555-5678'
!individual5.driverLicenseState := #AK
!individual5.driverLicenseNumber := 50607080
!individual5.driverLicenseExpirationDate := Date('2025-06-20')

!new RentalAgreement('agreement9')
!agreement9.number := 3009
!agreement9.rentalDate := Date('2023-10-22')
!agreement9.anticipatedDuration := 5
!agreement9.depositPaid := 175.0
!agreement9.quotedDailyRate := 65.00
!agreement9.quotedRatePerMile := 0.55

!new Truck('truck10')
!truck10.id := 510
!truck10.registrationState := #AZ
!truck10.licensePlateNumber := 'AZ-TRK-3456'
!truck10.vehicleTypeCode := #COVERED_TRAILER
!truck10.registrationLastMaintenanceDate := Date('2023-03-12')
!truck10.expirationDate := Date('2025-03-12')
!truck10.odometerReading := 30000
!truck10.gasTankCapacity := 32.0
!truck10.workingRadio := false
!truck10.mileage := 17

!new Company('company5')
!company5.name := 'Heavy Haulers'
!company5.address := '909 Transport Rd, Tucson, AZ'
!company5.poorRisk := false
!company5.idNumber := 901234

!new RentalAgreement('agreement10')
!agreement10.number := 3010
!agreement10.rentalDate := Date('2023-11-01')
!agreement10.anticipatedDuration := 15
!agreement10.depositPaid := 600.0
!agreement10.quotedDailyRate := 85.00
!agreement10.quotedRatePerMile := 0.75

!insert (office5, truck9) into RentalOfficeVehicle
!insert (office5, truck10) into RentalOfficeVehicle
!insert (office5, agreement9) into RentalOfficeRentalAgreementOrigin
!insert (office5, agreement9) into RentalOfficeRentalAgreementDrop
!insert (office5, agreement10) into RentalOfficeRentalAgreementOrigin
!insert (office5, agreement10) into RentalOfficeRentalAgreementDrop
!insert (agreement9, truck9) into RentalAgreementVehicle
!insert (agreement9, individual5) into RentalAgreementCustomer
!insert (agreement10, truck10) into RentalAgreementVehicle
!insert (agreement10, company5) into RentalAgreementCustomer
```
## Generation 5 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 63 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 2 | 3 | 66.67% |
| License Plates | 0 | 2 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
456 Highland Ave, Anchorage, AK
```
```
909 Transport Rd, Tucson, AZ
```

# Generation 6
```
!new RentalOffice('office6')
!office6.name := 'Seaside Rentals'
!office6.number := 606
!office6.address := '333 Beach Rd, Miami, FL'

!new Truck('truck11')
!truck11.id := 511
!truck11.registrationState := #FL
!truck11.licensePlateNumber := 'FL-TRK-7890'
!truck11.vehicleTypeCode := #TRUCK24
!truck11.registrationLastMaintenanceDate := Date('2023-01-15')
!truck11.expirationDate := Date('2025-01-15')
!truck11.odometerReading := 18000
!truck11.gasTankCapacity := 34.0
!truck11.workingRadio := false
!truck11.mileage := 16

!new Individual('individual6')
!individual6.name := 'Michael King'
!individual6.address := '765 Ocean Blvd, Sarasota, FL'
!individual6.poorRisk := true
!individual6.homePhone := '555-9999'
!individual6.driverLicenseState := #FL
!individual6.driverLicenseNumber := 60708090
!individual6.driverLicenseExpirationDate := Date('2024-11-30')

!new RentalAgreement('agreement11')
!agreement11.number := 3011
!agreement11.rentalDate := Date('2023-12-22')
!agreement11.anticipatedDuration := 4
!agreement11.depositPaid := 220.0
!agreement11.quotedDailyRate := 50.00
!agreement11.quotedRatePerMile := 0.60

!new Truck('truck12')
!truck12.id := 512
!truck12.registrationState := #CT
!truck12.licensePlateNumber := 'CT-TRK-5678'
!truck12.vehicleTypeCode := #OPEN_TRAILER
!truck12.registrationLastMaintenanceDate := Date('2023-04-10')
!truck12.expirationDate := Date('2024-04-10')
!truck12.odometerReading := 26000
!truck12.gasTankCapacity := 24.0
!truck12.workingRadio := true
!truck12.mileage := 25

!new Company('company6')
!company6.name := 'Atlantic Logistics'
!company6.address := '121 Marine Dr, New Haven, CT'
!company6.poorRisk := true
!company6.idNumber := 234567

!new RentalAgreement('agreement12')
!agreement12.number := 3012
!agreement12.rentalDate := Date('2023-12-25')
!agreement12.anticipatedDuration := 7
!agreement12.depositPaid := 350.0
!agreement12.quotedDailyRate := 70.00
!agreement12.quotedRatePerMile := 0.70

!insert (office6, truck11) into RentalOfficeVehicle
!insert (office6, truck12) into RentalOfficeVehicle
!insert (office6, agreement11) into RentalOfficeRentalAgreementOrigin
!insert (office6, agreement11) into RentalOfficeRentalAgreementDrop
!insert (office6, agreement12) into RentalOfficeRentalAgreementOrigin
!insert (office6, agreement12) into RentalOfficeRentalAgreementDrop
!insert (agreement11, truck11) into RentalAgreementVehicle
!insert (agreement11, individual6) into RentalAgreementCustomer
!insert (agreement12, truck12) into RentalAgreementVehicle
!insert (agreement12, company6) into RentalAgreementCustomer
```
## Generation 6 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 63 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 2 | 3 | 66.67% |
| License Plates | 0 | 2 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
333 Beach Rd, Miami, FL
```
```
121 Marine Dr, New Haven, CT
```

# Generation 7
```
!new RentalOffice('office7')
!office7.name := 'Mountain View Rentals'
!office7.number := 707
!office7.address := '888 Summit St, Boulder, CO'

!new Truck('truck13')
!truck13.id := 513
!truck13.registrationState := #CO
!truck13.licensePlateNumber := 'CO-TRK-4321'
!truck13.vehicleTypeCode := #TRUCK10
!truck13.registrationLastMaintenanceDate := Date('2023-11-01')
!truck13.expirationDate := Date('2024-11-01')
!truck13.odometerReading := 10000
!truck13.gasTankCapacity := 31.0
!truck13.workingRadio := true
!truck13.mileage := 18

!new Individual('individual7')
!individual7.name := 'Jessica Lane'
!individual7.address := '23 Pine St, Aspen, CO'
!individual7.poorRisk := false
!individual7.homePhone := '555-4321'
!individual7.driverLicenseState := #CO
!individual7.driverLicenseNumber := 12345678
!individual7.driverLicenseExpirationDate := Date('2025-05-15')

!new RentalAgreement('agreement13')
!agreement13.number := 3013
!agreement13.rentalDate := Date('2023-12-10')
!agreement13.anticipatedDuration := 3
!agreement13.depositPaid := 180.0
!agreement13.quotedDailyRate := 55.00
!agreement13.quotedRatePerMile := 0.40

!new Truck('truck14')
!truck14.id := 514
!truck14.registrationState := #DE
!truck14.licensePlateNumber := 'DE-TRK-8765'
!truck14.vehicleTypeCode := #COVERED_TRAILER
!truck14.registrationLastMaintenanceDate := Date('2023-10-20')
!truck14.expirationDate := Date('2025-10-20')
!truck14.odometerReading := 22000
!truck14.gasTankCapacity := 27.0
!truck14.workingRadio := true
!truck14.mileage := 15

!new Company('company7')
!company7.name := 'Peak Transport Inc.'
!company7.address := '456 Ridge Line, Wilmington, DE'
!company7.poorRisk := false
!company7.idNumber := 345678

!new RentalAgreement('agreement14')
!agreement14.number := 3014
!agreement14.rentalDate := Date('2023-11-29')
!agreement14.anticipatedDuration := 9
!agreement14.depositPaid := 400.0
!agreement14.quotedDailyRate := 75.00
!agreement14.quotedRatePerMile := 0.65

!insert (office7, truck13) into RentalOfficeVehicle
!insert (office7, truck14) into RentalOfficeVehicle
!insert (office7, agreement13) into RentalOfficeRentalAgreementOrigin
!insert (office7, agreement13) into RentalOfficeRentalAgreementDrop
!insert (office7, agreement14) into RentalOfficeRentalAgreementOrigin
!insert (office7, agreement14) into RentalOfficeRentalAgreementDrop
!insert (agreement13, truck13) into RentalAgreementVehicle
!insert (agreement13, individual7) into RentalAgreementCustomer
!insert (agreement14, truck14) into RentalAgreementVehicle
!insert (agreement14, company7) into RentalAgreementCustomer
```
## Generation 7 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 63 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 3 | 3 | 100.00% |
| License Plates | 0 | 2 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
888 Summit St, Boulder, CO
```
```
23 Pine St, Aspen, CO
```
```
456 Ridge Line, Wilmington, DE
```

# Generation 8
```
!new RentalOffice('office8')
!office8.name := 'Desert Rentals'
!office8.number := 808
!office8.address := '777 Sand Dune Dr, Phoenix, AZ'

!new Truck('truck15')
!truck15.id := 515
!truck15.registrationState := #AZ
!truck15.licensePlateNumber := 'AZ-TRK-1234'
!truck15.vehicleTypeCode := #TRUCK24
!truck15.registrationLastMaintenanceDate := Date('2023-05-22')
!truck15.expirationDate := Date('2024-05-22')
!truck15.odometerReading := 15000
!truck15.gasTankCapacity := 35.0
!truck15.workingRadio := false
!truck15.mileage := 19

!new Individual('individual8')
!individual8.name := 'Carlos Sanchez'
!individual8.address := '1111 Cactus Rd, Tucson, AZ'
!individual8.poorRisk := true
!individual8.homePhone := '555-6789'
!individual8.driverLicenseState := #AZ
!individual8.driverLicenseNumber := 78901234
!individual8.driverLicenseExpirationDate := Date('2025-03-19')

!new RentalAgreement('agreement15')
!agreement15.number := 3015
!agreement15.rentalDate := Date('2023-12-18')
!agreement15.anticipatedDuration := 10
!agreement15.depositPaid := 300.0
!agreement15.quotedDailyRate := 66.00
!agreement15.quotedRatePerMile := 0.45

!new Truck('truck16')
!truck16.id := 516
!truck16.registrationState := #CA
!truck16.licensePlateNumber := 'CA-TRK-5678'
!truck16.vehicleTypeCode := #OPEN_TRAILER
!truck16.registrationLastMaintenanceDate := Date('2023-09-10')
!truck16.expirationDate := Date('2025-09-10')
!truck16.odometerReading := 10000
!truck16.gasTankCapacity := 29.0
!truck16.workingRadio := true
!truck16.mileage := 20

!new Company('company8')
!company8.name := 'West Freight Services'
!company8.address := '888 Cargo St, Los Angeles, CA'
!company8.poorRisk := false
!company8.idNumber := 567890

!new RentalAgreement('agreement16')
!agreement16.number := 3016
!agreement16.rentalDate := Date('2023-11-23')
!agreement16.anticipatedDuration := 8
!agreement16.depositPaid := 380.0
!agreement16.quotedDailyRate := 78.00
!agreement16.quotedRatePerMile := 0.60

!insert (office8, truck15) into RentalOfficeVehicle
!insert (office8, truck16) into RentalOfficeVehicle
!insert (office8, agreement15) into RentalOfficeRentalAgreementOrigin
!insert (office8, agreement15) into RentalOfficeRentalAgreementDrop
!insert (office8, agreement16) into RentalOfficeRentalAgreementOrigin
!insert (office8, agreement16) into RentalOfficeRentalAgreementDrop
!insert (agreement15, truck15) into RentalAgreementVehicle
!insert (agreement15, individual8) into RentalAgreementCustomer
!insert (agreement16, truck16) into RentalAgreementVehicle
!insert (agreement16, company8) into RentalAgreementCustomer
```
## Generation 8 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 63 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 3 | 3 | 100.00% |
| License Plates | 0 | 2 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
777 Sand Dune Dr, Phoenix, AZ
```
```
1111 Cactus Rd, Tucson, AZ
```
```
888 Cargo St, Los Angeles, CA
```

# Generation 9
```
!new RentalOffice('office9')
!office9.name := 'Lakeside Rentals'
!office9.number := 909
!office9.address := '1020 Lakefront Blvd, Minneapolis, MN'

!new Truck('truck17')
!truck17.id := 517
!truck17.registrationState := #MN
!truck17.licensePlateNumber := 'MN-TRK-3456'
!truck17.vehicleTypeCode := #TRUCK
!truck17.registrationLastMaintenanceDate := Date('2023-04-05')
!truck17.expirationDate := Date('2024-04-05')
!truck17.odometerReading := 23000
!truck17.gasTankCapacity := 37.0
!truck17.workingRadio := true
!truck17.mileage := 22

!new Individual('individual9')
!individual9.name := 'Leo Anderson'
!individual9.address := '222 Forest Ln, St. Paul, MN'
!individual9.poorRisk := false
!individual9.homePhone := '555-1234'
!individual9.driverLicenseState := #MN
!individual9.driverLicenseNumber := 91011213
!individual9.driverLicenseExpirationDate := Date('2026-05-15')

!new RentalAgreement('agreement17')
!agreement17.number := 3017
!agreement17.rentalDate := Date('2023-11-30')
!agreement17.anticipatedDuration := 5
!agreement17.depositPaid := 250.0
!agreement17.quotedDailyRate := 60.00
!agreement17.quotedRatePerMile := 0.50

!new Truck('truck18')
!truck18.id := 518
!truck18.registrationState := #FL
!truck18.licensePlateNumber := 'FL-TRK-8765'
!truck18.vehicleTypeCode := #TRUCK24
!truck18.registrationLastMaintenanceDate := Date('2023-06-18')
!truck18.expirationDate := Date('2025-06-18')
!truck18.odometerReading := 15000
!truck18.gasTankCapacity := 30.0
!truck18.workingRadio := false
!truck18.mileage := 18

!new Company('company9')
!company9.name := 'Northern Haulers'
!company9.address := '567 Cargo Blvd, Duluth, MN'
!company9.poorRisk := true
!company9.idNumber := 678901

!new RentalAgreement('agreement18')
!agreement18.number := 3018
!agreement18.rentalDate := Date('2023-12-05')
!agreement18.anticipatedDuration := 12
!agreement18.depositPaid := 500.0
!agreement18.quotedDailyRate := 85.00
!agreement18.quotedRatePerMile := 0.70

!insert (office9, truck17) into RentalOfficeVehicle
!insert (office9, truck18) into RentalOfficeVehicle
!insert (office9, agreement17) into RentalOfficeRentalAgreementOrigin
!insert (office9, agreement17) into RentalOfficeRentalAgreementDrop
!insert (office9, agreement18) into RentalOfficeRentalAgreementOrigin
!insert (office9, agreement18) into RentalOfficeRentalAgreementDrop
!insert (agreement17, truck17) into RentalAgreementVehicle
!insert (agreement17, individual9) into RentalAgreementCustomer
!insert (agreement18, truck18) into RentalAgreementVehicle
!insert (agreement18, company9) into RentalAgreementCustomer
```
## Generation 9 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 3 | 63 | 4.76% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| Syntax Errors | 
|---| 
```
<input>:1:0: generation of expression `#MN' failed, with following error:
```
```
<input>:1:30: Undefined enumeration literal `MN'.
```
```
<input>:1:0: generation of expression `#MN' failed, with following error:
```

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 3 | 3 | 100.00% |
| License Plates | 0 | 2 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
1020 Lakefront Blvd, Minneapolis, MN
```
```
222 Forest Ln, St. Paul, MN
```
```
567 Cargo Blvd, Duluth, MN
```

# Generation 10
```
!new RentalOffice('office10')
!office10.name := 'Urban Trucks'
!office10.number := 1010
!office10.address := '234 Market St, San Francisco, CA'

!new Truck('truck19')
!truck19.id := 519
!truck19.registrationState := #CA
!truck19.licensePlateNumber := 'CA-TRK-9021'
!truck19.vehicleTypeCode := #COVERED_TRAILER
!truck19.registrationLastMaintenanceDate := Date('2023-07-12')
!truck19.expirationDate := Date('2024-07-12')
!truck19.odometerReading := 20000
!truck19.gasTankCapacity := 40.0
!truck19.workingRadio := true
!truck19.mileage := 21

!new Individual('individual10')
!individual10.name := 'Ethan Walker'
!individual10.address := '678 Sunset Blvd, Los Angeles, CA'
!individual10.poorRisk := false
!individual10.homePhone := '555-8765'
!individual10.driverLicenseState := #CA
!individual10.driverLicenseNumber := 20191020
!individual10.driverLicenseExpirationDate := Date('2025-03-21')

!new RentalAgreement('agreement19')
!agreement19.number := 3019
!agreement19.rentalDate := Date('2023-12-15')
!agreement19.anticipatedDuration := 7
!agreement19.depositPaid := 350.0
!agreement19.quotedDailyRate := 72.00
!agreement19.quotedRatePerMile := 0.55

!new Truck('truck20')
!truck20.id := 520
!truck20.registrationState := #FL
!truck20.licensePlateNumber := 'FL-TRK-6789'
!truck20.vehicleTypeCode := #OPEN_TRAILER
!truck20.registrationLastMaintenanceDate := Date('2023-05-10')
!truck20.expirationDate := Date('2025-05-10')
!truck20.odometerReading := 12000
!truck20.gasTankCapacity := 32.5
!truck20.workingRadio := true
!truck20.mileage := 18

!new Company('company10')
!company10.name := 'Sunset Movers'
!company10.address := '321 Sunrise Ave, Miami, FL'
!company10.poorRisk := true
!company10.idNumber := 782345

!new RentalAgreement('agreement20')
!agreement20.number := 3020
!agreement20.rentalDate := Date('2023-12-22')
!agreement20.anticipatedDuration := 10
!agreement20.depositPaid := 420.0
!agreement20.quotedDailyRate := 80.00
!agreement20.quotedRatePerMile := 0.60

!insert (office10, truck19) into RentalOfficeVehicle
!insert (office10, truck20) into RentalOfficeVehicle
!insert (office10, agreement19) into RentalOfficeRentalAgreementOrigin
!insert (office10, agreement19) into RentalOfficeRentalAgreementDrop
!insert (office10, agreement20) into RentalOfficeRentalAgreementOrigin
!insert (office10, agreement20) into RentalOfficeRentalAgreementDrop
!insert (agreement19, truck19) into RentalAgreementVehicle
!insert (agreement19, individual10) into RentalAgreementCustomer
!insert (agreement20, truck20) into RentalAgreementVehicle
!insert (agreement20, company10) into RentalAgreementCustomer
```
## Generation 10 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 63 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 2 | 3 | 66.67% |
| License Plates | 0 | 2 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
678 Sunset Blvd, Los Angeles, CA
```
```
321 Sunrise Ave, Miami, FL
```

# Generation 11
```
!new RentalOffice('office11')
!office11.name := 'Countryside Haulers'
!office11.number := 1111
!office11.address := '135 Prairie Rd, Omaha, NE'

!new Truck('truck21')
!truck21.id := 521
!truck21.registrationState := #CO
!truck21.licensePlateNumber := 'CO-TRK-2345'
!truck21.vehicleTypeCode := #TRUCK
!truck21.registrationLastMaintenanceDate := Date('2023-08-20')
!truck21.expirationDate := Date('2024-08-20')
!truck21.odometerReading := 9500
!truck21.gasTankCapacity := 28.0
!truck21.workingRadio := true
!truck21.mileage := 20

!new Individual('individual11')
!individual11.name := 'Olivia Martinez'
!individual11.address := '456 Pioneer Ln, Lincoln, NE'
!individual11.poorRisk := true
!individual11.homePhone := '555-3210'
!individual11.driverLicenseState := #CO
!individual11.driverLicenseNumber := 13243546
!individual11.driverLicenseExpirationDate := Date('2027-01-10')

!new RentalAgreement('agreement21')
!agreement21.number := 3021
!agreement21.rentalDate := Date('2023-12-10')
!agreement21.anticipatedDuration := 4
!agreement21.depositPaid := 150.0
!agreement21.quotedDailyRate := 58.00
!agreement21.quotedRatePerMile := 0.48

!new Truck('truck22')
!truck22.id := 522
!truck22.registrationState := #CT
!truck22.licensePlateNumber := 'CT-TRK-6789'
!truck22.vehicleTypeCode := #TRUCK10
!truck22.registrationLastMaintenanceDate := Date('2023-06-15')
!truck22.expirationDate := Date('2025-06-15')
!truck22.odometerReading := 17000
!truck22.gasTankCapacity := 36.0
!truck22.workingRadio := false
!truck22.mileage := 24

!new Company('company11')
!company11.name := 'Harvest Transports'
!company11.address := '999 Field Rd, Hartford, CT'
!company11.poorRisk := false
!company11.idNumber := 435678

!new RentalAgreement('agreement22')
!agreement22.number := 3022
!agreement22.rentalDate := Date('2023-12-25')
!agreement22.anticipatedDuration := 15
!agreement22.depositPaid := 500.0
!agreement22.quotedDailyRate := 90.00
!agreement22.quotedRatePerMile := 0.68

!insert (office11, truck21) into RentalOfficeVehicle
!insert (office11, truck22) into RentalOfficeVehicle
!insert (office11, agreement21) into RentalOfficeRentalAgreementOrigin
!insert (office11, agreement21) into RentalOfficeRentalAgreementDrop
!insert (office11, agreement22) into RentalOfficeRentalAgreementOrigin
!insert (office11, agreement22) into RentalOfficeRentalAgreementDrop
!insert (agreement21, truck21) into RentalAgreementVehicle
!insert (agreement21, individual11) into RentalAgreementCustomer
!insert (agreement22, truck22) into RentalAgreementVehicle
!insert (agreement22, company11) into RentalAgreementCustomer
```
## Generation 11 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 63 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 3 | 3 | 100.00% |
| License Plates | 0 | 2 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
135 Prairie Rd, Omaha, NE
```
```
456 Pioneer Ln, Lincoln, NE
```
```
999 Field Rd, Hartford, CT
```

# Generation 12
```
!new RentalOffice('office12')
!office12.name := 'Capital Rentals'
!office12.number := 1212
!office12.address := '420 Capitol Ave, Hartford, CT'

!new Truck('truck23')
!truck23.id := 523
!truck23.registrationState := #CT
!truck23.licensePlateNumber := 'CT-TRK-9876'
!truck23.vehicleTypeCode := #COVERED_TRAILER
!truck23.registrationLastMaintenanceDate := Date('2023-09-15')
!truck23.expirationDate := Date('2025-09-15')
!truck23.odometerReading := 14000
!truck23.gasTankCapacity := 33.0
!truck23.workingRadio := true
!truck23.mileage := 19

!new Individual('individual12')
!individual12.name := 'William Clark'
!individual12.address := '789 Elm St, Bridgeport, CT'
!individual12.poorRisk := false
!individual12.homePhone := '555-2022'
!individual12.driverLicenseState := #CT
!individual12.driverLicenseNumber := 23456789
!individual12.driverLicenseExpirationDate := Date('2026-12-05')

!new RentalAgreement('agreement23')
!agreement23.number := 3023
!agreement23.rentalDate := Date('2023-09-01')
!agreement23.anticipatedDuration := 8
!agreement23.depositPaid := 280.0
!agreement23.quotedDailyRate := 65.00
!agreement23.quotedRatePerMile := 0.50

!new Truck('truck24')
!truck24.id := 524
!truck24.registrationState := #DE
!truck24.licensePlateNumber := 'DE-TRK-1234'
!truck24.vehicleTypeCode := #OPEN_TRAILER
!truck24.registrationLastMaintenanceDate := Date('2023-07-30')
!truck24.expirationDate := Date('2025-07-30')
!truck24.odometerReading := 21000
!truck24.gasTankCapacity := 30.5
!truck24.workingRadio := false
!truck24.mileage := 17

!new Company('company12')
!company12.name := 'Eastern Freight'
!company12.address := '333 Commerce St, Dover, DE'
!company12.poorRisk := true
!company12.idNumber := 987654

!new RentalAgreement('agreement24')
!agreement24.number := 3024
!agreement24.rentalDate := Date('2023-12-13')
!agreement24.anticipatedDuration := 10
!agreement24.depositPaid := 450.0
!agreement24.quotedDailyRate := 75.00
!agreement24.quotedRatePerMile := 0.60

!insert (office12, truck23) into RentalOfficeVehicle
!insert (office12, truck24) into RentalOfficeVehicle
!insert (office12, agreement23) into RentalOfficeRentalAgreementOrigin
!insert (office12, agreement23) into RentalOfficeRentalAgreementDrop
!insert (office12, agreement24) into RentalOfficeRentalAgreementOrigin
!insert (office12, agreement24) into RentalOfficeRentalAgreementDrop
!insert (agreement23, truck23) into RentalAgreementVehicle
!insert (agreement23, individual12) into RentalAgreementCustomer
!insert (agreement24, truck24) into RentalAgreementVehicle
!insert (agreement24, company12) into RentalAgreementCustomer
```
## Generation 12 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 63 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 1 | 3 | 33.33% |
| License Plates | 0 | 2 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
333 Commerce St, Dover, DE
```

# Generation 13
```
!new RentalOffice('office13')
!office13.name := 'Bay Rentals'
!office13.number := 1313
!office13.address := '900 Ocean View Blvd, San Diego, CA'

!new Truck('truck25')
!truck25.id := 525
!truck25.registrationState := #CA
!truck25.licensePlateNumber := 'CA-TRK-1122'
!truck25.vehicleTypeCode := #TRUCK24
!truck25.registrationLastMaintenanceDate := Date('2023-08-01')
!truck25.expirationDate := Date('2024-08-01')
!truck25.odometerReading := 18000
!truck25.gasTankCapacity := 45.0
!truck25.workingRadio := false
!truck25.mileage := 20

!new Individual('individual13')
!individual13.name := 'Mia Gonzalez'
!individual13.address := '123 Beach Dr, Santa Monica, CA'
!individual13.poorRisk := false
!individual13.homePhone := '555-3434'
!individual13.driverLicenseState := #CA
!individual13.driverLicenseNumber := 30314215
!individual13.driverLicenseExpirationDate := Date('2027-04-04')

!new RentalAgreement('agreement25')
!agreement25.number := 3025
!agreement25.rentalDate := Date('2023-12-30')
!agreement25.anticipatedDuration := 6
!agreement25.depositPaid := 320.0
!agreement25.quotedDailyRate := 70.00
!agreement25.quotedRatePerMile := 0.65

!new Truck('truck26')
!truck26.id := 526
!truck26.registrationState := #CO
!truck26.licensePlateNumber := 'CO-TRK-3344'
!truck26.vehicleTypeCode := #TRUCK10
!truck26.registrationLastMaintenanceDate := Date('2023-05-11')
!truck26.expirationDate := Date('2025-05-11')
!truck26.odometerReading := 22000
!truck26.gasTankCapacity := 26.0
!truck26.workingRadio := true
!truck26.mileage := 22

!new Company('company13')
!company13.name := 'Mountain Logistics'
!company13.address := '456 Canyon Rd, Denver, CO'
!company13.poorRisk := false
!company13.idNumber := 654321

!new RentalAgreement('agreement26')
!agreement26.number := 3026
!agreement26.rentalDate := Date('2024-01-02')
!agreement26.anticipatedDuration := 12
!agreement26.depositPaid := 550.0
!agreement26.quotedDailyRate := 85.00
!agreement26.quotedRatePerMile := 0.70

!insert (office13, truck25) into RentalOfficeVehicle
!insert (office13, truck26) into RentalOfficeVehicle
!insert (office13, agreement25) into RentalOfficeRentalAgreementOrigin
!insert (office13, agreement25) into RentalOfficeRentalAgreementDrop
!insert (office13, agreement26) into RentalOfficeRentalAgreementOrigin
!insert (office13, agreement26) into RentalOfficeRentalAgreementDrop
!insert (agreement25, truck25) into RentalAgreementVehicle
!insert (agreement25, individual13) into RentalAgreementCustomer
!insert (agreement26, truck26) into RentalAgreementVehicle
!insert (agreement26, company13) into RentalAgreementCustomer
```
## Generation 13 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 63 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 2 | 3 | 66.67% |
| License Plates | 0 | 2 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
123 Beach Dr, Santa Monica, CA
```
```
456 Canyon Rd, Denver, CO
```

# Generation 14
```
!new RentalOffice('office14')
!office14.name := 'Metro Rentals'
!office14.number := 1414
!office14.address := '600 City Plaza, Boston, MA'

!new Truck('truck27')
!truck27.id := 527
!truck27.registrationState := #CT
!truck27.licensePlateNumber := 'CT-TRK-5566'
!truck27.vehicleTypeCode := #OPEN_TRAILER
!truck27.registrationLastMaintenanceDate := Date('2023-07-20')
!truck27.expirationDate := Date('2024-07-20')
!truck27.odometerReading := 8000
!truck27.gasTankCapacity := 32.0
!truck27.workingRadio := true
!truck27.mileage := 25

!new Individual('individual14')
!individual14.name := 'Noah Wright'
!individual14.address := '89 Maple Rd, Springfield, MA'
!individual14.poorRisk := true
!individual14.homePhone := '555-8080'
!individual14.driverLicenseState := #CT
!individual14.driverLicenseNumber := 67898765
!individual14.driverLicenseExpirationDate := Date('2025-09-14')

!new RentalAgreement('agreement27')
!agreement27.number := 3027
!agreement27.rentalDate := Date('2023-12-01')
!agreement27.anticipatedDuration := 9
!agreement27.depositPaid := 270.0
!agreement27.quotedDailyRate := 68.00
!agreement27.quotedRatePerMile := 0.50

!new Truck('truck28')
!truck28.id := 528
!truck28.registrationState := #CT
!truck28.licensePlateNumber := 'CT-TRK-7788'
!truck28.vehicleTypeCode := #COVERED_TRAILER
!truck28.registrationLastMaintenanceDate := Date('2023-02-17')
!truck28.expirationDate := Date('2024-02-17')
!truck28.odometerReading := 16000
!truck28.gasTankCapacity := 29.0
!truck28.workingRadio := false
!truck28.mileage := 21

!new Company('company14')
!company14.name := 'City Transport Services'
!company14.address := '123 Industrial Ln, Worcester, MA'
!company14.poorRisk := true
!company14.idNumber := 765432

!new RentalAgreement('agreement28')
!agreement28.number := 3028
!agreement28.rentalDate := Date('2024-01-10')
!agreement28.anticipatedDuration := 14
!agreement28.depositPaid := 600.0
!agreement28.quotedDailyRate := 88.00
!agreement28.quotedRatePerMile := 0.65

!insert (office14, truck27) into RentalOfficeVehicle
!insert (office14, truck28) into RentalOfficeVehicle
!insert (office14, agreement27) into RentalOfficeRentalAgreementOrigin
!insert (office14, agreement27) into RentalOfficeRentalAgreementDrop
!insert (office14, agreement28) into RentalOfficeRentalAgreementOrigin
!insert (office14, agreement28) into RentalOfficeRentalAgreementDrop
!insert (agreement27, truck27) into RentalAgreementVehicle
!insert (agreement27, individual14) into RentalAgreementCustomer
!insert (agreement28, truck28) into RentalAgreementVehicle
!insert (agreement28, company14) into RentalAgreementCustomer
```
## Generation 14 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 63 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 3 | 3 | 100.00% |
| License Plates | 0 | 2 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
600 City Plaza, Boston, MA
```
```
89 Maple Rd, Springfield, MA
```
```
123 Industrial Ln, Worcester, MA
```

# Generation 15
```
!new RentalOffice('office15')
!office15.name := 'Valley Rentals'
!office15.number := 1515
!office15.address := '210 Valley Ridge Rd, Phoenix, AZ'

!new Truck('truck29')
!truck29.id := 529
!truck29.registrationState := #AZ
!truck29.licensePlateNumber := 'AZ-TRK-9900'
!truck29.vehicleTypeCode := #TRUCK
!truck29.registrationLastMaintenanceDate := Date('2023-03-10')
!truck29.expirationDate := Date('2024-03-10')
!truck29.odometerReading := 24000
!truck29.gasTankCapacity := 31.0
!truck29.workingRadio := true
!truck29.mileage := 19

!new Individual('individual15')
!individual15.name := 'Liam Turner'
!individual15.address := '456 Desert Ave, Tucson, AZ'
!individual15.poorRisk := false
!individual15.homePhone := '555-9090'
!individual15.driverLicenseState := #AZ
!individual15.driverLicenseNumber := 91234567
!individual15.driverLicenseExpirationDate := Date('2026-10-01')

!new RentalAgreement('agreement29')
!agreement29.number := 3029
!agreement29.rentalDate := Date('2023-12-03')
!agreement29.anticipatedDuration := 5
!agreement29.depositPaid := 200.0
!agreement29.quotedDailyRate := 62.00
!agreement29.quotedRatePerMile := 0.55

!new Truck('truck30')
!truck30.id := 530
!truck30.registrationState := #CA
!truck30.licensePlateNumber := 'CA-TRK-1123'
!truck30.vehicleTypeCode := #TRUCK10
!truck30.registrationLastMaintenanceDate := Date('2023-11-07')
!truck30.expirationDate := Date('2024-11-07')
!truck30.odometerReading := 11000
!truck30.gasTankCapacity := 28.5
!truck30.workingRadio := false
!truck30.mileage := 18

!new Company('company15')
!company15.name := 'Desert Transport Co.'
!company15.address := '789 Oasis Blvd, Los Angeles, CA'
!company15.poorRisk := true
!company15.idNumber := 890123

!new RentalAgreement('agreement30')
!agreement30.number := 3030
!agreement30.rentalDate := Date('2024-01-15')
!agreement30.anticipatedDuration := 7
!agreement30.depositPaid := 350.0
!agreement30.quotedDailyRate := 78.00
!agreement30.quotedRatePerMile := 0.60

!insert (office15, truck29) into RentalOfficeVehicle
!insert (office15, truck30) into RentalOfficeVehicle
!insert (office15, agreement29) into RentalOfficeRentalAgreementOrigin
!insert (office15, agreement29) into RentalOfficeRentalAgreementDrop
!insert (office15, agreement30) into RentalOfficeRentalAgreementOrigin
!insert (office15, agreement30) into RentalOfficeRentalAgreementDrop
!insert (agreement29, truck29) into RentalAgreementVehicle
!insert (agreement29, individual15) into RentalAgreementCustomer
!insert (agreement30, truck30) into RentalAgreementVehicle
!insert (agreement30, company15) into RentalAgreementCustomer
```
## Generation 15 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 63 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 2 | 3 | 66.67% |
| License Plates | 0 | 2 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
210 Valley Ridge Rd, Phoenix, AZ
```
```
789 Oasis Blvd, Los Angeles, CA
```

# Generation 16
```
!new RentalOffice('office16')
!office16.name := 'Coastal Rentals'
!office16.number := 1616
!office16.address := '500 Shoreline Dr, Miami, FL'

!new Truck('truck31')
!truck31.id := 531
!truck31.registrationState := #FL
!truck31.licensePlateNumber := 'FL-TRK-3345'
!truck31.vehicleTypeCode := #TRUCK24
!truck31.registrationLastMaintenanceDate := Date('2023-09-10')
!truck31.expirationDate := Date('2024-09-10')
!truck31.odometerReading := 15000
!truck31.gasTankCapacity := 34.0
!truck31.workingRadio := true
!truck31.mileage := 23

!new Individual('individual16')
!individual16.name := 'Sophia Ramirez'
!individual16.address := '162 Palm St, Miami Beach, FL'
!individual16.poorRisk := false
!individual16.homePhone := '555-1122'
!individual16.driverLicenseState := #FL
!individual16.driverLicenseNumber := 34567222
!individual16.driverLicenseExpirationDate := Date('2025-06-15')

!new RentalAgreement('agreement31')
!agreement31.number := 3031
!agreement31.rentalDate := Date('2023-12-08')
!agreement31.anticipatedDuration := 3
!agreement31.depositPaid := 180.0
!agreement31.quotedDailyRate := 59.00
!agreement31.quotedRatePerMile := 0.50

!new Truck('truck32')
!truck32.id := 532
!truck32.registrationState := #AL
!truck32.licensePlateNumber := 'AL-TRK-5567'
!truck32.vehicleTypeCode := #COVERED_TRAILER
!truck32.registrationLastMaintenanceDate := Date('2023-10-01')
!truck32.expirationDate := Date('2025-10-01')
!truck32.odometerReading := 26000
!truck32.gasTankCapacity := 30.0
!truck32.workingRadio := false
!truck32.mileage := 20

!new Company('company16')
!company16.name := 'Seaside Logistics'
!company16.address := '987 Ocean Ave, Mobile, AL'
!company16.poorRisk := false
!company16.idNumber := 432156

!new RentalAgreement('agreement32')
!agreement32.number := 3032
!agreement32.rentalDate := Date('2024-01-09')
!agreement32.anticipatedDuration := 6
!agreement32.depositPaid := 320.0
!agreement32.quotedDailyRate := 74.00
!agreement32.quotedRatePerMile := 0.55

!insert (office16, truck31) into RentalOfficeVehicle
!insert (office16, truck32) into RentalOfficeVehicle
!insert (office16, agreement31) into RentalOfficeRentalAgreementOrigin
!insert (office16, agreement31) into RentalOfficeRentalAgreementDrop
!insert (office16, agreement32) into RentalOfficeRentalAgreementOrigin
!insert (office16, agreement32) into RentalOfficeRentalAgreementDrop
!insert (agreement31, truck31) into RentalAgreementVehicle
!insert (agreement31, individual16) into RentalAgreementCustomer
!insert (agreement32, truck32) into RentalAgreementVehicle
!insert (agreement32, company16) into RentalAgreementCustomer
```
## Generation 16 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 63 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 2 | 3 | 66.67% |
| License Plates | 0 | 2 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
500 Shoreline Dr, Miami, FL
```
```
987 Ocean Ave, Mobile, AL
```

# Generation 17
```
!new RentalOffice('office17')
!office17.name := 'Urban Movers'
!office17.number := 1717
!office17.address := '555 City Center St, Austin, TX'

!new Truck('truck33')
!truck33.id := 533
!truck33.registrationState := #FL
!truck33.licensePlateNumber := 'FL-TRK-1248'
!truck33.vehicleTypeCode := #TRUCK
!truck33.registrationLastMaintenanceDate := Date('2023-06-15')
!truck33.expirationDate := Date('2024-06-15')
!truck33.odometerReading := 17000
!truck33.gasTankCapacity := 27.0
!truck33.workingRadio := true
!truck33.mileage := 21

!new Individual('individual17')
!individual17.name := 'Ella Brooks'
!individual17.address := '789 Lakeview Dr, Dallas, TX'
!individual17.poorRisk := true
!individual17.homePhone := '555-3344'
!individual17.driverLicenseState := #FL
!individual17.driverLicenseNumber := 45672189
!individual17.driverLicenseExpirationDate := Date('2025-12-12')

!new RentalAgreement('agreement33')
!agreement33.number := 3033
!agreement33.rentalDate := Date('2023-11-20')
!agreement33.anticipatedDuration := 4
!agreement33.depositPaid := 200.0
!agreement33.quotedDailyRate := 61.00
!agreement33.quotedRatePerMile := 0.52

!new Truck('truck34')
!truck34.id := 534
!truck34.registrationState := #CA
!truck34.licensePlateNumber := 'CA-TRK-3457'
!truck34.vehicleTypeCode := #OPEN_TRAILER
!truck34.registrationLastMaintenanceDate := Date('2023-08-03')
!truck34.expirationDate := Date('2025-08-03')
!truck34.odometerReading := 25000
!truck34.gasTankCapacity := 33.5
!truck34.workingRadio := false
!truck34.mileage := 17

!new Company('company17')
!company17.name := 'Roadway Freight'
!company17.address := '123 Highway Ln, San Antonio, TX'
!company17.poorRisk := true
!company17.idNumber := 876543

!new RentalAgreement('agreement34')
!agreement34.number := 3034
!agreement34.rentalDate := Date('2023-12-18')
!agreement34.anticipatedDuration := 8
!agreement34.depositPaid := 480.0
!agreement34.quotedDailyRate := 82.00
!agreement34.quotedRatePerMile := 0.62

!insert (office17, truck33) into RentalOfficeVehicle
!insert (office17, truck34) into RentalOfficeVehicle
!insert (office17, agreement33) into RentalOfficeRentalAgreementOrigin
!insert (office17, agreement33) into RentalOfficeRentalAgreementDrop
!insert (office17, agreement34) into RentalOfficeRentalAgreementOrigin
!insert (office17, agreement34) into RentalOfficeRentalAgreementDrop
!insert (agreement33, truck33) into RentalAgreementVehicle
!insert (agreement33, individual17) into RentalAgreementCustomer
!insert (agreement34, truck34) into RentalAgreementVehicle
!insert (agreement34, company17) into RentalAgreementCustomer
```
## Generation 17 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 63 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 2 | 3 | 66.67% |
| License Plates | 0 | 2 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
555 City Center St, Austin, TX
```
```
123 Highway Ln, San Antonio, TX
```

# Generation 18
```
!new RentalOffice('office18')
!office18.name := 'Highland Haulers'
!office18.number := 1818
!office18.address := '345 Hilltop Rd, Denver, CO'

!new Truck('truck35')
!truck35.id := 535
!truck35.registrationState := #CO
!truck35.licensePlateNumber := 'CO-TRK-5678'
!truck35.vehicleTypeCode := #TRUCK10
!truck35.registrationLastMaintenanceDate := Date('2023-10-01')
!truck35.expirationDate := Date('2024-10-01')
!truck35.odometerReading := 12000
!truck35.gasTankCapacity := 26.0
!truck35.workingRadio := true
!truck35.mileage := 19

!new Individual('individual18')
!individual18.name := 'David Kim'
!individual18.address := '101 Mountain View Dr, Boulder, CO'
!individual18.poorRisk := false
!individual18.homePhone := '555-5566'
!individual18.driverLicenseState := #CO
!individual18.driverLicenseNumber := 98765432
!individual18.driverLicenseExpirationDate := Date('2025-07-20')

!new RentalAgreement('agreement35')
!agreement35.number := 3035
!agreement35.rentalDate := Date('2023-12-05')
!agreement35.anticipatedDuration := 7
!agreement35.depositPaid := 300.0
!agreement35.quotedDailyRate := 70.00
!agreement35.quotedRatePerMile := 0.58

!new Truck('truck36')
!truck36.id := 536
!truck36.registrationState := #FL
!truck36.licensePlateNumber := 'FL-TRK-7890'
!truck36.vehicleTypeCode := #COVERED_TRAILER
!truck36.registrationLastMaintenanceDate := Date('2023-02-15')
!truck36.expirationDate := Date('2025-02-15')
!truck36.odometerReading := 15000
!truck36.gasTankCapacity := 35.5
!truck36.workingRadio := true
!truck36.mileage := 22

!new Company('company18')
!company18.name := 'Summit Transport Group'
!company18.address := '789 Peak Blvd, Colorado Springs, CO'
!company18.poorRisk := false
!company18.idNumber := 567982

!new RentalAgreement('agreement36')
!agreement36.number := 3036
!agreement36.rentalDate := Date('2023-11-24')
!agreement36.anticipatedDuration := 10
!agreement36.depositPaid := 450.0
!agreement36.quotedDailyRate := 85.00
!agreement36.quotedRatePerMile := 0.65

!insert (office18, truck35) into RentalOfficeVehicle
!insert (office18, truck36) into RentalOfficeVehicle
!insert (office18, agreement35) into RentalOfficeRentalAgreementOrigin
!insert (office18, agreement35) into RentalOfficeRentalAgreementDrop
!insert (office18, agreement36) into RentalOfficeRentalAgreementOrigin
!insert (office18, agreement36) into RentalOfficeRentalAgreementDrop
!insert (agreement35, truck35) into RentalAgreementVehicle
!insert (agreement35, individual18) into RentalAgreementCustomer
!insert (agreement36, truck36) into RentalAgreementVehicle
!insert (agreement36, company18) into RentalAgreementCustomer
```
## Generation 18 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 63 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 3 | 3 | 100.00% |
| License Plates | 0 | 2 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
345 Hilltop Rd, Denver, CO
```
```
101 Mountain View Dr, Boulder, CO
```
```
789 Peak Blvd, Colorado Springs, CO
```

# Generation 19
```
!new RentalOffice('office19')
!office19.name := 'Desert Drive Rentals'
!office19.number := 1919
!office19.address := '800 Sun Desert Blvd, Phoenix, AZ'

!new Truck('truck37')
!truck37.id := 537
!truck37.registrationState := #AZ
!truck37.licensePlateNumber := 'AZ-TRK-9991'
!truck37.vehicleTypeCode := #OPEN_TRAILER
!truck37.registrationLastMaintenanceDate := Date('2023-03-15')
!truck37.expirationDate := Date('2024-03-15')
!truck37.odometerReading := 13500
!truck37.gasTankCapacity := 33.0
!truck37.workingRadio := false
!truck37.mileage := 20

!new Individual('individual19')
!individual19.name := 'Grace Harris'
!individual19.address := '321 Oasis Ln, Mesa, AZ'
!individual19.poorRisk := false
!individual19.homePhone := '555-7788'
!individual19.driverLicenseState := #AZ
!individual19.driverLicenseNumber := 12349876
!individual19.driverLicenseExpirationDate := Date('2026-05-05')

!new RentalAgreement('agreement37')
!agreement37.number := 3037
!agreement37.rentalDate := Date('2023-11-10')
!agreement37.anticipatedDuration := 6
!agreement37.depositPaid := 250.0
!agreement37.quotedDailyRate := 64.00
!agreement37.quotedRatePerMile := 0.55

!new Truck('truck38')
!truck38.id := 538
!truck38.registrationState := #CA
!truck38.licensePlateNumber := 'CA-TRK-2211'
!truck38.vehicleTypeCode := #TRUCK24
!truck38.registrationLastMaintenanceDate := Date('2023-05-22')
!truck38.expirationDate := Date('2025-05-22')
!truck38.odometerReading := 21000
!truck38.gasTankCapacity := 29.5
!truck38.workingRadio := true
!truck38.mileage := 24

!new Company('company19')
!company19.name := 'Sunset Freightways'
!company19.address := '654 West Coast Dr, San Diego, CA'
!company19.poorRisk := true
!company19.idNumber := 876290

!new RentalAgreement('agreement38')
!agreement38.number := 3038
!agreement38.rentalDate := Date('2023-12-01')
!agreement38.anticipatedDuration := 14
!agreement38.depositPaid := 580.0
!agreement38.quotedDailyRate := 88.00
!agreement38.quotedRatePerMile := 0.68

!insert (office19, truck37) into RentalOfficeVehicle
!insert (office19, truck38) into RentalOfficeVehicle
!insert (office19, agreement37) into RentalOfficeRentalAgreementOrigin
!insert (office19, agreement37) into RentalOfficeRentalAgreementDrop
!insert (office19, agreement38) into RentalOfficeRentalAgreementOrigin
!insert (office19, agreement38) into RentalOfficeRentalAgreementDrop
!insert (agreement37, truck37) into RentalAgreementVehicle
!insert (agreement37, individual19) into RentalAgreementCustomer
!insert (agreement38, truck38) into RentalAgreementVehicle
!insert (agreement38, company19) into RentalAgreementCustomer
```
## Generation 19 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 63 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 3 | 3 | 100.00% |
| License Plates | 0 | 2 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
800 Sun Desert Blvd, Phoenix, AZ
```
```
321 Oasis Ln, Mesa, AZ
```
```
654 West Coast Dr, San Diego, CA
```

# Generation 20
```
!new RentalOffice('office20')
!office20.name := 'Riverside Rentals'
!office20.number := 2020
!office20.address := '456 Riverside Dr, Jacksonville, FL'

!new Truck('truck39')
!truck39.id := 539
!truck39.registrationState := #FL
!truck39.licensePlateNumber := 'FL-TRK-8811'
!truck39.vehicleTypeCode := #TRUCK
!truck39.registrationLastMaintenanceDate := Date('2023-01-30')
!truck39.expirationDate := Date('2024-01-30')
!truck39.odometerReading := 19000
!truck39.gasTankCapacity := 36.0
!truck39.workingRadio := true
!truck39.mileage := 22

!new Individual('individual20')
!individual20.name := 'Jack Mitchell'
!individual20.address := '789 Dock Ln, Tampa, FL'
!individual20.poorRisk := true
!individual20.homePhone := '555-8899'
!individual20.driverLicenseState := #FL
!individual20.driverLicenseNumber := 23456789
!individual20.driverLicenseExpirationDate := Date('2027-08-18')

!new RentalAgreement('agreement39')
!agreement39.number := 3039
!agreement39.rentalDate := Date('2023-12-12')
!agreement39.anticipatedDuration := 5
!agreement39.depositPaid := 225.0
!agreement39.quotedDailyRate := 63.00
!agreement39.quotedRatePerMile := 0.57

!new Truck('truck40')
!truck40.id := 540
!truck40.registrationState := #CO
!truck40.licensePlateNumber := 'CO-TRK-7722'
!truck40.vehicleTypeCode := #COVERED_TRAILER
!truck40.registrationLastMaintenanceDate := Date('2023-08-05')
!truck40.expirationDate := Date('2025-08-05')
!truck40.odometerReading := 22000
!truck40.gasTankCapacity := 35.0
!truck40.workingRadio := false
!truck40.mileage := 20

!new Company('company20')
!company20.name := 'Blue River Logistics'
!company20.address := '321 Rapids Rd, Denver, CO'
!company20.poorRisk := false
!company20.idNumber := 290876

!new RentalAgreement('agreement40')
!agreement40.number := 3040
!agreement40.rentalDate := Date('2023-12-20')
!agreement40.anticipatedDuration := 9
!agreement40.depositPaid := 375.0
!agreement40.quotedDailyRate := 80.00
!agreement40.quotedRatePerMile := 0.64

!insert (office20, truck39) into RentalOfficeVehicle
!insert (office20, truck40) into RentalOfficeVehicle
!insert (office20, agreement39) into RentalOfficeRentalAgreementOrigin
!insert (office20, agreement39) into RentalOfficeRentalAgreementDrop
!insert (office20, agreement40) into RentalOfficeRentalAgreementOrigin
!insert (office20, agreement40) into RentalOfficeRentalAgreementDrop
!insert (agreement39, truck39) into RentalAgreementVehicle
!insert (agreement39, individual20) into RentalAgreementCustomer
!insert (agreement40, truck40) into RentalAgreementVehicle
!insert (agreement40, company20) into RentalAgreementCustomer
```
## Generation 20 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 63 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 3 | 3 | 100.00% |
| License Plates | 0 | 2 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
456 Riverside Dr, Jacksonville, FL
```
```
789 Dock Ln, Tampa, FL
```
```
321 Rapids Rd, Denver, CO
```

# Generation 21
```
!new RentalOffice('office21')
!office21.name := 'Mountain Express'
!office21.number := 2121
!office21.address := '789 Alpine Way, Salt Lake City, UT'

!new Truck('truck41')
!truck41.id := 541
!truck41.registrationState := #CO
!truck41.licensePlateNumber := 'CO-TRK-5566'
!truck41.vehicleTypeCode := #TRUCK10
!truck41.registrationLastMaintenanceDate := Date('2023-05-14')
!truck41.expirationDate := Date('2024-05-14')
!truck41.odometerReading := 14500
!truck41.gasTankCapacity := 32.0
!truck41.workingRadio := true
!truck41.mileage := 18

!new Individual('individual21')
!individual21.name := 'Lily Johnson'
!individual21.address := '345 Mountain Dr, Park City, UT'
!individual21.poorRisk := false
!individual21.homePhone := '555-5567'
!individual21.driverLicenseState := #CO
!individual21.driverLicenseNumber := 56789012
!individual21.driverLicenseExpirationDate := Date('2026-11-22')

!new RentalAgreement('agreement41')
!agreement41.number := 3041
!agreement41.rentalDate := Date('2023-12-25')
!agreement41.anticipatedDuration := 7
!agreement41.depositPaid := 290.0
!agreement41.quotedDailyRate := 72.00
!agreement41.quotedRatePerMile := 0.53

!new Truck('truck42')
!truck42.id := 542
!truck42.registrationState := #AZ
!truck42.licensePlateNumber := 'AZ-TRK-9988'
!truck42.vehicleTypeCode := #TRUCK24
!truck42.registrationLastMaintenanceDate := Date('2023-06-10')
!truck42.expirationDate := Date('2025-06-10')
!truck42.odometerReading := 18000
!truck42.gasTankCapacity := 30.0
!truck42.workingRadio := false
!truck42.mileage := 22

!new Company('company21')
!company21.name := 'Summit Rentals'
!company21.address := '234 Summit Blvd, Flagstaff, AZ'
!company21.poorRisk := true
!company21.idNumber := 589032

!new RentalAgreement('agreement42')
!agreement42.number := 3042
!agreement42.rentalDate := Date('2024-01-05')
!agreement42.anticipatedDuration := 10
!agreement42.depositPaid := 425.0
!agreement42.quotedDailyRate := 85.00
!agreement42.quotedRatePerMile := 0.60

!insert (office21, truck41) into RentalOfficeVehicle
!insert (office21, truck42) into RentalOfficeVehicle
!insert (office21, agreement41) into RentalOfficeRentalAgreementOrigin
!insert (office21, agreement41) into RentalOfficeRentalAgreementDrop
!insert (office21, agreement42) into RentalOfficeRentalAgreementOrigin
!insert (office21, agreement42) into RentalOfficeRentalAgreementDrop
!insert (agreement41, truck41) into RentalAgreementVehicle
!insert (agreement41, individual21) into RentalAgreementCustomer
!insert (agreement42, truck42) into RentalAgreementVehicle
!insert (agreement42, company21) into RentalAgreementCustomer
```
## Generation 21 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 63 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 2 | 3 | 66.67% |
| License Plates | 0 | 2 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
789 Alpine Way, Salt Lake City, UT
```
```
234 Summit Blvd, Flagstaff, AZ
```

# Generation 22
```
!new RentalOffice('office22')
!office22.name := 'Gateway Rentals'
!office22.number := 2222
!office22.address := '123 Gateway Blvd, St. Louis, MO'

!new Truck('truck43')
!truck43.id := 543
!truck43.registrationState := #CO
!truck43.licensePlateNumber := 'CO-TRK-2233'
!truck43.vehicleTypeCode := #TRUCK24
!truck43.registrationLastMaintenanceDate := Date('2023-07-18')
!truck43.expirationDate := Date('2024-07-18')
!truck43.odometerReading := 15500
!truck43.gasTankCapacity := 33.0
!truck43.workingRadio := true
!truck43.mileage := 19

!new Individual('individual22')
!individual22.name := 'Olivia Thompson'
!individual22.address := '789 Woodrow St, Columbia, MO'
!individual22.poorRisk := true
!individual22.homePhone := '555-9988'
!individual22.driverLicenseState := #CO
!individual22.driverLicenseNumber := 78451236
!individual22.driverLicenseExpirationDate := Date('2027-04-10')

!new RentalAgreement('agreement43')
!agreement43.number := 3043
!agreement43.rentalDate := Date('2023-11-28')
!agreement43.anticipatedDuration := 8
!agreement43.depositPaid := 310.0
!agreement43.quotedDailyRate := 68.00
!agreement43.quotedRatePerMile := 0.54

!new Truck('truck44')
!truck44.id := 544
!truck44.registrationState := #FL
!truck44.licensePlateNumber := 'FL-TRK-6789'
!truck44.vehicleTypeCode := #COVERED_TRAILER
!truck44.registrationLastMaintenanceDate := Date('2023-09-20')
!truck44.expirationDate := Date('2025-09-20')
!truck44.odometerReading := 20000
!truck44.gasTankCapacity := 28.0
!truck44.workingRadio := false
!truck44.mileage := 21

!new Company('company22')
!company22.name := 'Midwest Movers'
!company22.address := '145 Delivery Rd, Kansas City, MO'
!company22.poorRisk := false
!company22.idNumber := 902376

!new RentalAgreement('agreement44')
!agreement44.number := 3044
!agreement44.rentalDate := Date('2024-02-12')
!agreement44.anticipatedDuration := 12
!agreement44.depositPaid := 600.0
!agreement44.quotedDailyRate := 78.00
!agreement44.quotedRatePerMile := 0.63

!insert (office22, truck43) into RentalOfficeVehicle
!insert (office22, truck44) into RentalOfficeVehicle
!insert (office22, agreement43) into RentalOfficeRentalAgreementOrigin
!insert (office22, agreement43) into RentalOfficeRentalAgreementDrop
!insert (office22, agreement44) into RentalOfficeRentalAgreementOrigin
!insert (office22, agreement44) into RentalOfficeRentalAgreementDrop
!insert (agreement43, truck43) into RentalAgreementVehicle
!insert (agreement43, individual22) into RentalAgreementCustomer
!insert (agreement44, truck44) into RentalAgreementVehicle
!insert (agreement44, company22) into RentalAgreementCustomer
```
## Generation 22 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 63 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 3 | 3 | 100.00% |
| License Plates | 0 | 2 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
123 Gateway Blvd, St. Louis, MO
```
```
789 Woodrow St, Columbia, MO
```
```
145 Delivery Rd, Kansas City, MO
```

# Generation 23
```
!new RentalOffice('office23')
!office23.name := 'Pine Valley Rentals'
!office23.number := 2323
!office23.address := '456 Pine Valley Ave, Portland, OR'

!new Truck('truck45')
!truck45.id := 545
!truck45.registrationState := #CA
!truck45.licensePlateNumber := 'CA-TRK-5467'
!truck45.vehicleTypeCode := #TRUCK
!truck45.registrationLastMaintenanceDate := Date('2023-04-22')
!truck45.expirationDate := Date('2024-04-22')
!truck45.odometerReading := 17000
!truck45.gasTankCapacity := 27.5
!truck45.workingRadio := true
!truck45.mileage := 22

!new Individual('individual23')
!individual23.name := 'Ethan Lee'
!individual23.address := '190 Forest Ct, Salem, OR'
!individual23.poorRisk := false
!individual23.homePhone := '555-4433'
!individual23.driverLicenseState := #CA
!individual23.driverLicenseNumber := 45678901
!individual23.driverLicenseExpirationDate := Date('2026-08-14')

!new RentalAgreement('agreement45')
!agreement45.number := 3045
!agreement45.rentalDate := Date('2023-12-17')
!agreement45.anticipatedDuration := 5
!agreement45.depositPaid := 200.0
!agreement45.quotedDailyRate := 70.00
!agreement45.quotedRatePerMile := 0.60

!new Truck('truck46')
!truck46.id := 546
!truck46.registrationState := #CT
!truck46.licensePlateNumber := 'CT-TRK-8901'
!truck46.vehicleTypeCode := #TRUCK10
!truck46.registrationLastMaintenanceDate := Date('2023-08-02')
!truck46.expirationDate := Date('2025-08-02')
!truck46.odometerReading := 16000
!truck46.gasTankCapacity := 31.0
!truck46.workingRadio := false
!truck46.mileage := 24

!new Company('company23')
!company23.name := 'Northwest Transports'
!company23.address := '789 Cascade Ln, Eugene, OR'
!company23.poorRisk := true
!company23.idNumber := 341256

!new RentalAgreement('agreement46')
!agreement46.number := 3046
!agreement46.rentalDate := Date('2023-12-23')
!agreement46.anticipatedDuration := 6
!agreement46.depositPaid := 330.0
!agreement46.quotedDailyRate := 75.00
!agreement46.quotedRatePerMile := 0.62

!insert (office23, truck45) into RentalOfficeVehicle
!insert (office23, truck46) into RentalOfficeVehicle
!insert (office23, agreement45) into RentalOfficeRentalAgreementOrigin
!insert (office23, agreement45) into RentalOfficeRentalAgreementDrop
!insert (office23, agreement46) into RentalOfficeRentalAgreementOrigin
!insert (office23, agreement46) into RentalOfficeRentalAgreementDrop
!insert (agreement45, truck45) into RentalAgreementVehicle
!insert (agreement45, individual23) into RentalAgreementCustomer
!insert (agreement46, truck46) into RentalAgreementVehicle
!insert (agreement46, company23) into RentalAgreementCustomer
```
## Generation 23 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 63 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 3 | 3 | 100.00% |
| License Plates | 0 | 2 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
456 Pine Valley Ave, Portland, OR
```
```
190 Forest Ct, Salem, OR
```
```
789 Cascade Ln, Eugene, OR
```

# Generation 24
```
!new RentalOffice('office24')
!office24.name := 'Sunset Rentals'
!office24.number := 2424
!office24.address := '500 Sunset Blvd, Los Angeles, CA'

!new Truck('truck47')
!truck47.id := 547
!truck47.registrationState := #CA
!truck47.licensePlateNumber := 'CA-TRK-3049'
!truck47.vehicleTypeCode := #OPEN_TRAILER
!truck47.registrationLastMaintenanceDate := Date('2023-03-12')
!truck47.expirationDate := Date('2024-03-12')
!truck47.odometerReading := 18500
!truck47.gasTankCapacity := 29.0
!truck47.workingRadio := false
!truck47.mileage := 20

!new Individual('individual24')
!individual24.name := 'Emily Torres'
!individual24.address := '901 Ocean Dr, Santa Monica, CA'
!individual24.poorRisk := true
!individual24.homePhone := '555-6677'
!individual24.driverLicenseState := #CA
!individual24.driverLicenseNumber := 87654321
!individual24.driverLicenseExpirationDate := Date('2026-12-01')

!new RentalAgreement('agreement47')
!agreement47.number := 3047
!agreement47.rentalDate := Date('2023-12-29')
!agreement47.anticipatedDuration := 4
!agreement47.depositPaid := 190.0
!agreement47.quotedDailyRate := 67.00
!agreement47.quotedRatePerMile := 0.58

!new Truck('truck48')
!truck48.id := 548
!truck48.registrationState := #FL
!truck48.licensePlateNumber := 'FL-TRK-6054'
!truck48.vehicleTypeCode := #TRUCK
!truck48.registrationLastMaintenanceDate := Date('2023-07-13')
!truck48.expirationDate := Date('2024-07-13')
!truck48.odometerReading := 21500
!truck48.gasTankCapacity := 33.0
!truck48.workingRadio := true
!truck48.mileage := 22

!new Company('company24')
!company24.name := 'Palm Tree Logistics'
!company24.address := '234 Palm St, Miami, FL'
!company24.poorRisk := false
!company24.idNumber := 675432

!new RentalAgreement('agreement48')
!agreement48.number := 3048
!agreement48.rentalDate := Date('2024-01-03')
!agreement48.anticipatedDuration := 10
!agreement48.depositPaid := 500.0
!agreement48.quotedDailyRate := 77.00
!agreement48.quotedRatePerMile := 0.65

!insert (office24, truck47) into RentalOfficeVehicle
!insert (office24, truck48) into RentalOfficeVehicle
!insert (office24, agreement47) into RentalOfficeRentalAgreementOrigin
!insert (office24, agreement47) into RentalOfficeRentalAgreementDrop
!insert (office24, agreement48) into RentalOfficeRentalAgreementOrigin
!insert (office24, agreement48) into RentalOfficeRentalAgreementDrop
!insert (agreement47, truck47) into RentalAgreementVehicle
!insert (agreement47, individual24) into RentalAgreementCustomer
!insert (agreement48, truck48) into RentalAgreementVehicle
!insert (agreement48, company24) into RentalAgreementCustomer
```
## Generation 24 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 63 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 1 | 3 | 33.33% |
| License Plates | 0 | 2 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
234 Palm St, Miami, FL
```

# Generation 25
```
!new RentalOffice('office25')
!office25.name := 'Midtown Rentals'
!office25.number := 2525
!office25.address := '300 Midtown Ave, Atlanta, GA'

!new Truck('truck49')
!truck49.id := 549
!truck49.registrationState := #FL
!truck49.licensePlateNumber := 'FL-TRK-4590'
!truck49.vehicleTypeCode := #COVERED_TRAILER
!truck49.registrationLastMaintenanceDate := Date('2023-02-25')
!truck49.expirationDate := Date('2024-02-25')
!truck49.odometerReading := 14500
!truck49.gasTankCapacity := 30.5
!truck49.workingRadio := true
!truck49.mileage := 21

!new Individual('individual25')
!individual25.name := 'Ava Green'
!individual25.address := '567 Park Blvd, Savannah, GA'
!individual25.poorRisk := false
!individual25.homePhone := '555-2929'
!individual25.driverLicenseState := #FL
!individual25.driverLicenseNumber := 30495847
!individual25.driverLicenseExpirationDate := Date('2026-09-15')

!new RentalAgreement('agreement49')
!agreement49.number := 3049
!agreement49.rentalDate := Date('2023-12-20')
!agreement49.anticipatedDuration := 7
!agreement49.depositPaid := 280.0
!agreement49.quotedDailyRate := 70.00
!agreement49.quotedRatePerMile := 0.55

!new Truck('truck50')
!truck50.id := 550
!truck50.registrationState := #DE
!truck50.licensePlateNumber := 'DE-TRK-7143'
!truck50.vehicleTypeCode := #TRUCK24
!truck50.registrationLastMaintenanceDate := Date('2023-11-02')
!truck50.expirationDate := Date('2025-11-02')
!truck50.odometerReading := 19000
!truck50.gasTankCapacity := 29.0
!truck50.workingRadio := false
!truck50.mileage := 20

!new Company('company25')
!company25.name := 'Peach State Haulers'
!company25.address := '123 Peach St, Augusta, GA'
!company25.poorRisk := true
!company25.idNumber := 543210

!new RentalAgreement('agreement50')
!agreement50.number := 3050
!agreement50.rentalDate := Date('2024-01-07')
!agreement50.anticipatedDuration := 9
!agreement50.depositPaid := 400.0
!agreement50.quotedDailyRate := 85.00
!agreement50.quotedRatePerMile := 0.62

!insert (office25, truck49) into RentalOfficeVehicle
!insert (office25, truck50) into RentalOfficeVehicle
!insert (office25, agreement49) into RentalOfficeRentalAgreementOrigin
!insert (office25, agreement49) into RentalOfficeRentalAgreementDrop
!insert (office25, agreement50) into RentalOfficeRentalAgreementOrigin
!insert (office25, agreement50) into RentalOfficeRentalAgreementDrop
!insert (agreement49, truck49) into RentalAgreementVehicle
!insert (agreement49, individual25) into RentalAgreementCustomer
!insert (agreement50, truck50) into RentalAgreementVehicle
!insert (agreement50, company25) into RentalAgreementCustomer
```
## Generation 25 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 63 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 2 | 3 | 66.67% |
| License Plates | 0 | 2 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
567 Park Blvd, Savannah, GA
```
```
123 Peach St, Augusta, GA
```

# Generation 26
```
!new RentalOffice('office26')
!office26.name := 'Lakeside Transportation'
!office26.number := 2626
!office26.address := '678 Harbor St, Chicago, IL'

!new Truck('truck51')
!truck51.id := 551
!truck51.registrationState := #FL
!truck51.licensePlateNumber := 'FL-TRK-1122'
!truck51.vehicleTypeCode := #TRUCK10
!truck51.registrationLastMaintenanceDate := Date('2023-04-05')
!truck51.expirationDate := Date('2024-04-05')
!truck51.odometerReading := 18000
!truck51.gasTankCapacity := 32.0
!truck51.workingRadio := true
!truck51.mileage := 18

!new Individual('individual26')
!individual26.name := 'Lucas Davis'
!individual26.address := '345 Ocean Ave, Fort Lauderdale, FL'
!individual26.poorRisk := false
!individual26.homePhone := '555-8085'
!individual26.driverLicenseState := #FL
!individual26.driverLicenseNumber := 12394958
!individual26.driverLicenseExpirationDate := Date('2027-03-11')

!new RentalAgreement('agreement51')
!agreement51.number := 3051
!agreement51.rentalDate := Date('2023-10-15')
!agreement51.anticipatedDuration := 4
!agreement51.depositPaid := 250.0
!agreement51.quotedDailyRate := 66.00
!agreement51.quotedRatePerMile := 0.59

!new Truck('truck52')
!truck52.id := 552
!truck52.registrationState := #AZ
!truck52.licensePlateNumber := 'AZ-TRK-3344'
!truck52.vehicleTypeCode := #COVERED_TRAILER
!truck52.registrationLastMaintenanceDate := Date('2023-09-10')
!truck52.expirationDate := Date('2025-09-10')
!truck52.odometerReading := 20500
!truck52.gasTankCapacity := 35.0
!truck52.workingRadio := false
!truck52.mileage := 20

!new Company('company26')
!company26.name := 'Inland Freight Systems'
!company26.address := '234 Industrial Park, Phoenix, AZ'
!company26.poorRisk := true
!company26.idNumber := 765234

!new RentalAgreement('agreement52')
!agreement52.number := 3052
!agreement52.rentalDate := Date('2023-11-20')
!agreement52.anticipatedDuration := 11
!agreement52.depositPaid := 480.0
!agreement52.quotedDailyRate := 79.00
!agreement52.quotedRatePerMile := 0.66

!insert (office26, truck51) into RentalOfficeVehicle
!insert (office26, truck52) into RentalOfficeVehicle
!insert (office26, agreement51) into RentalOfficeRentalAgreementOrigin
!insert (office26, agreement51) into RentalOfficeRentalAgreementDrop
!insert (office26, agreement52) into RentalOfficeRentalAgreementOrigin
!insert (office26, agreement52) into RentalOfficeRentalAgreementDrop
!insert (agreement51, truck51) into RentalAgreementVehicle
!insert (agreement51, individual26) into RentalAgreementCustomer
!insert (agreement52, truck52) into RentalAgreementVehicle
!insert (agreement52, company26) into RentalAgreementCustomer
```
## Generation 26 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 63 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 3 | 3 | 100.00% |
| License Plates | 0 | 2 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
678 Harbor St, Chicago, IL
```
```
345 Ocean Ave, Fort Lauderdale, FL
```
```
234 Industrial Park, Phoenix, AZ
```

# Generation 27
```
!new RentalOffice('office27')
!office27.name := 'Pacific Rentals'
!office27.number := 2727
!office27.address := '123 Coastline Rd, San Francisco, CA'

!new Truck('truck53')
!truck53.id := 553
!truck53.registrationState := #CA
!truck53.licensePlateNumber := 'CA-TRK-5567'
!truck53.vehicleTypeCode := #TRUCK24
!truck53.registrationLastMaintenanceDate := Date('2023-10-03')
!truck53.expirationDate := Date('2024-10-03')
!truck53.odometerReading := 17000
!truck53.gasTankCapacity := 31.5
!truck53.workingRadio := true
!truck53.mileage := 19

!new Individual('individual27')
!individual27.name := 'Sophia Martinez'
!individual27.address := '456 Bay St, San Jose, CA'
!individual27.poorRisk := false
!individual27.homePhone := '555-9099'
!individual27.driverLicenseState := #CA
!individual27.driverLicenseNumber := 13579246
!individual27.driverLicenseExpirationDate := Date('2025-08-09')

!new RentalAgreement('agreement53')
!agreement53.number := 3053
!agreement53.rentalDate := Date('2023-11-11')
!agreement53.anticipatedDuration := 3
!agreement53.depositPaid := 210.0
!agreement53.quotedDailyRate := 69.00
!agreement53.quotedRatePerMile := 0.57

!new Truck('truck54')
!truck54.id := 554
!truck54.registrationState := #CT
!truck54.licensePlateNumber := 'CT-TRK-8890'
!truck54.vehicleTypeCode := #OPEN_TRAILER
!truck54.registrationLastMaintenanceDate := Date('2023-06-17')
!truck54.expirationDate := Date('2025-06-17')
!truck54.odometerReading := 19000
!truck54.gasTankCapacity := 30.0
!truck54.workingRadio := false
!truck54.mileage := 21

!new Company('company27')
!company27.name := 'Golden Gate Transports'
!company27.address := '789 Pier Ave, Oakland, CA'
!company27.poorRisk := true
!company27.idNumber := 123098

!new RentalAgreement('agreement54')
!agreement54.number := 3054
!agreement54.rentalDate := Date('2023-12-01')
!agreement54.anticipatedDuration := 8
!agreement54.depositPaid := 360.0
!agreement54.quotedDailyRate := 82.00
!agreement54.quotedRatePerMile := 0.65

!insert (office27, truck53) into RentalOfficeVehicle
!insert (office27, truck54) into RentalOfficeVehicle
!insert (office27, agreement53) into RentalOfficeRentalAgreementOrigin
!insert (office27, agreement53) into RentalOfficeRentalAgreementDrop
!insert (office27, agreement54) into RentalOfficeRentalAgreementOrigin
!insert (office27, agreement54) into RentalOfficeRentalAgreementDrop
!insert (agreement53, truck53) into RentalAgreementVehicle
!insert (agreement53, individual27) into RentalAgreementCustomer
!insert (agreement54, truck54) into RentalAgreementVehicle
!insert (agreement54, company27) into RentalAgreementCustomer
```
## Generation 27 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 63 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 3 | 3 | 100.00% |
| License Plates | 0 | 2 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
123 Coastline Rd, San Francisco, CA
```
```
456 Bay St, San Jose, CA
```
```
789 Pier Ave, Oakland, CA
```

# Generation 28
```
!new RentalOffice('office28')
!office28.name := 'Mountain Top Rentals'
!office28.number := 2828
!office28.address := '299 Summit Rd, Asheville, NC'

!new Truck('truck55')
!truck55.id := 555
!truck55.registrationState := #CO
!truck55.licensePlateNumber := 'CO-TRK-6678'
!truck55.vehicleTypeCode := #TRUCK
!truck55.registrationLastMaintenanceDate := Date('2023-07-15')
!truck55.expirationDate := Date('2024-07-15')
!truck55.odometerReading := 16000
!truck55.gasTankCapacity := 32.5
!truck55.workingRadio := true
!truck55.mileage := 20

!new Individual('individual28')
!individual28.name := 'Michael Turner'
!individual28.address := '678 Highland Rd, Charlotte, NC'
!individual28.poorRisk := false
!individual28.homePhone := '555-2211'
!individual28.driverLicenseState := #CO
!individual28.driverLicenseNumber := 98765321
!individual28.driverLicenseExpirationDate := Date('2026-02-12')

!new RentalAgreement('agreement55')
!agreement55.number := 3055
!agreement55.rentalDate := Date('2023-11-25')
!agreement55.anticipatedDuration := 6
!agreement55.depositPaid := 240.0
!agreement55.quotedDailyRate := 67.00
!agreement55.quotedRatePerMile := 0.56

!new Truck('truck56')
!truck56.id := 556
!truck56.registrationState := #CA
!truck56.licensePlateNumber := 'CA-TRK-9987'
!truck56.vehicleTypeCode := #TRUCK24
!truck56.registrationLastMaintenanceDate := Date('2023-09-05')
!truck56.expirationDate := Date('2025-09-05')
!truck56.odometerReading := 23000
!truck56.gasTankCapacity := 34.0
!truck56.workingRadio := false
!truck56.mileage := 19

!new Company('company28')
!company28.name := 'Peak Performance Logistics'
!company28.address := '345 Cliffside Dr, Raleigh, NC'
!company28.poorRisk := true
!company28.idNumber := 321987

!new RentalAgreement('agreement56')
!agreement56.number := 3056
!agreement56.rentalDate := Date('2023-12-15')
!agreement56.anticipatedDuration := 10
!agreement56.depositPaid := 450.0
!agreement56.quotedDailyRate := 79.00
!agreement56.quotedRatePerMile := 0.64

!insert (office28, truck55) into RentalOfficeVehicle
!insert (office28, truck56) into RentalOfficeVehicle
!insert (office28, agreement55) into RentalOfficeRentalAgreementOrigin
!insert (office28, agreement55) into RentalOfficeRentalAgreementDrop
!insert (office28, agreement56) into RentalOfficeRentalAgreementOrigin
!insert (office28, agreement56) into RentalOfficeRentalAgreementDrop
!insert (agreement55, truck55) into RentalAgreementVehicle
!insert (agreement55, individual28) into RentalAgreementCustomer
!insert (agreement56, truck56) into RentalAgreementVehicle
!insert (agreement56, company28) into RentalAgreementCustomer
```
## Generation 28 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 63 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 2 | 3 | 66.67% |
| License Plates | 0 | 2 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
678 Highland Rd, Charlotte, NC
```
```
345 Cliffside Dr, Raleigh, NC
```

# Generation 29
```
!new RentalOffice('office29')
!office29.name := 'Highway Rentals'
!office29.number := 2929
!office29.address := '123 Freeway Ln, Houston, TX'

!new Truck('truck57')
!truck57.id := 557
!truck57.registrationState := #FL
!truck57.licensePlateNumber := 'FL-TRK-4455'
!truck57.vehicleTypeCode := #OPEN_TRAILER
!truck57.registrationLastMaintenanceDate := Date('2023-08-11')
!truck57.expirationDate := Date('2024-08-11')
!truck57.odometerReading := 19000
!truck57.gasTankCapacity := 30.0
!truck57.workingRadio := true
!truck57.mileage := 18

!new Individual('individual29')
!individual29.name := 'Emma Collins'
!individual29.address := '890 Lake St, Austin, TX'
!individual29.poorRisk := false
!individual29.homePhone := '555-3345'
!individual29.driverLicenseState := #FL
!individual29.driverLicenseNumber := 14785236
!individual29.driverLicenseExpirationDate := Date('2025-11-30')

!new RentalAgreement('agreement57')
!agreement57.number := 3057
!agreement57.rentalDate := Date('2023-12-10')
!agreement57.anticipatedDuration := 4
!agreement57.depositPaid := 210.0
!agreement57.quotedDailyRate := 73.00
!agreement57.quotedRatePerMile := 0.50

!new Truck('truck58')
!truck58.id := 558
!truck58.registrationState := #CA
!truck58.licensePlateNumber := 'CA-TRK-1124'
!truck58.vehicleTypeCode := #COVERED_TRAILER
!truck58.registrationLastMaintenanceDate := Date('2023-03-10')
!truck58.expirationDate := Date('2025-03-10')
!truck58.odometerReading := 24000
!truck58.gasTankCapacity := 28.5
!truck58.workingRadio := false
!truck58.mileage := 24

!new Company('company29')
!company29.name := 'Express Line Freight'
!company29.address := '432 Industrial Blvd, Dallas, TX'
!company29.poorRisk := true
!company29.idNumber := 657483

!new RentalAgreement('agreement58')
!agreement58.number := 3058
!agreement58.rentalDate := Date('2023-12-20')
!agreement58.anticipatedDuration := 9
!agreement58.depositPaid := 450.0
!agreement58.quotedDailyRate := 88.00
!agreement58.quotedRatePerMile := 0.65

!insert (office29, truck57) into RentalOfficeVehicle
!insert (office29, truck58) into RentalOfficeVehicle
!insert (office29, agreement57) into RentalOfficeRentalAgreementOrigin
!insert (office29, agreement57) into RentalOfficeRentalAgreementDrop
!insert (office29, agreement58) into RentalOfficeRentalAgreementOrigin
!insert (office29, agreement58) into RentalOfficeRentalAgreementDrop
!insert (agreement57, truck57) into RentalAgreementVehicle
!insert (agreement57, individual29) into RentalAgreementCustomer
!insert (agreement58, truck58) into RentalAgreementVehicle
!insert (agreement58, company29) into RentalAgreementCustomer
```
## Generation 29 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 63 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 2 | 3 | 66.67% |
| License Plates | 0 | 2 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
123 Freeway Ln, Houston, TX
```
```
890 Lake St, Austin, TX
```

# Generation 30
```
!new RentalOffice('office30')
!office30.name := 'Eastern Rentals'
!office30.number := 3030
!office30.address := '200 Sunrise Ave, New York, NY'

!new Truck('truck59')
!truck59.id := 559
!truck59.registrationState := #FL
!truck59.licensePlateNumber := 'FL-TRK-2255'
!truck59.vehicleTypeCode := #TRUCK10
!truck59.registrationLastMaintenanceDate := Date('2023-05-07')
!truck59.expirationDate := Date('2024-05-07')
!truck59.odometerReading := 15500
!truck59.gasTankCapacity := 27.5
!truck59.workingRadio := true
!truck59.mileage := 21

!new Individual('individual30')
!individual30.name := 'Grace Morgan'
!individual30.address := '876 Broadway St, Brooklyn, NY'
!individual30.poorRisk := false
!individual30.homePhone := '555-4567'
!individual30.driverLicenseState := #FL
!individual30.driverLicenseNumber := 25366548
!individual30.driverLicenseExpirationDate := Date('2026-03-15')

!new RentalAgreement('agreement59')
!agreement59.number := 3059
!agreement59.rentalDate := Date('2023-12-12')
!agreement59.anticipatedDuration := 5
!agreement59.depositPaid := 230.0
!agreement59.quotedDailyRate := 65.00
!agreement59.quotedRatePerMile := 0.56

!new Truck('truck60')
!truck60.id := 560
!truck60.registrationState := #AK
!truck60.licensePlateNumber := 'AK-TRK-3345'
!truck60.vehicleTypeCode := #TRUCK24
!truck60.registrationLastMaintenanceDate := Date('2023-10-22')
!truck60.expirationDate := Date('2025-10-22')
!truck60.odometerReading := 17000
!truck60.gasTankCapacity := 34.5
!truck60.workingRadio := false
!truck60.mileage := 23

!new Company('company30')
!company30.name := 'Swift Cargo'
!company30.address := '543 Enterprise Blvd, Albany, NY'
!company30.poorRisk := true
!company30.idNumber := 982134

!new RentalAgreement('agreement60')
!agreement60.number := 3060
!agreement60.rentalDate := Date('2023-12-30')
!agreement60.anticipatedDuration := 12
!agreement60.depositPaid := 520.0
!agreement60.quotedDailyRate := 85.00
!agreement60.quotedRatePerMile := 0.68

!insert (office30, truck59) into RentalOfficeVehicle
!insert (office30, truck60) into RentalOfficeVehicle
!insert (office30, agreement59) into RentalOfficeRentalAgreementOrigin
!insert (office30, agreement59) into RentalOfficeRentalAgreementDrop
!insert (office30, agreement60) into RentalOfficeRentalAgreementOrigin
!insert (office30, agreement60) into RentalOfficeRentalAgreementDrop
!insert (agreement59, truck59) into RentalAgreementVehicle
!insert (agreement59, individual30) into RentalAgreementCustomer
!insert (agreement60, truck60) into RentalAgreementVehicle
!insert (agreement60, company30) into RentalAgreementCustomer
```
## Generation 30 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 63 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 3 | 3 | 100.00% |
| License Plates | 0 | 2 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
200 Sunrise Ave, New York, NY
```
```
876 Broadway St, Brooklyn, NY
```
```
543 Enterprise Blvd, Albany, NY
```

# Summary for all generations
| Summary | Value | 
|---|---| 
| Model | GPT_4O | 
| Type | Simple | 
| System | vehiclerental | 
| Number of generations | 30 | 

| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 3 | 1890 | 0.16% |
| Multiplicities Errors | 0 | 300 | 0.00% |
| Invariants Errors | 0 | 150 | 0.00% |

| Syntax Errors | 
|---| 
```
<input>:1:0: generation of expression `#MN' failed, with following error:
```
```
<input>:1:30: Undefined enumeration literal `MN'.
```
```
<input>:1:0: generation of expression `#MN' failed, with following error:
```

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 74 | 90 | 82.22% |
| License Plates | 0 | 60 | 0.00% |
| Home Phones | 0 | 30 | 0.00% |

| Invalid Addresses | 
|---| 
```
123 Main St, Denver, CO
```
```
456 Elm St, Boulder, CO
```
```
789 Industrial Way, Los Angeles, CA
```
```
555 Aviation Blvd, Miami, FL
```
```
321 Build Rd, Phoenix, AZ
```
```
1010 Suburb Dr, Hartford, CT
```
```
500 Maple Dr, Stamford, CT
```
```
987 Transport Lane, Dover, DE
```
```
222 Urban Ave, Atlanta, GA
```
```
777 Peachtree Blvd, Savannah, GA
```
```
750 Green Rd, Birmingham, AL
```
```
456 Highland Ave, Anchorage, AK
```
```
909 Transport Rd, Tucson, AZ
```
```
333 Beach Rd, Miami, FL
```
```
121 Marine Dr, New Haven, CT
```
```
888 Summit St, Boulder, CO
```
```
23 Pine St, Aspen, CO
```
```
456 Ridge Line, Wilmington, DE
```
```
777 Sand Dune Dr, Phoenix, AZ
```
```
1111 Cactus Rd, Tucson, AZ
```
```
888 Cargo St, Los Angeles, CA
```
```
1020 Lakefront Blvd, Minneapolis, MN
```
```
222 Forest Ln, St. Paul, MN
```
```
567 Cargo Blvd, Duluth, MN
```
```
678 Sunset Blvd, Los Angeles, CA
```
```
321 Sunrise Ave, Miami, FL
```
```
135 Prairie Rd, Omaha, NE
```
```
456 Pioneer Ln, Lincoln, NE
```
```
999 Field Rd, Hartford, CT
```
```
333 Commerce St, Dover, DE
```
```
123 Beach Dr, Santa Monica, CA
```
```
456 Canyon Rd, Denver, CO
```
```
600 City Plaza, Boston, MA
```
```
89 Maple Rd, Springfield, MA
```
```
123 Industrial Ln, Worcester, MA
```
```
210 Valley Ridge Rd, Phoenix, AZ
```
```
789 Oasis Blvd, Los Angeles, CA
```
```
500 Shoreline Dr, Miami, FL
```
```
987 Ocean Ave, Mobile, AL
```
```
555 City Center St, Austin, TX
```
```
123 Highway Ln, San Antonio, TX
```
```
345 Hilltop Rd, Denver, CO
```
```
101 Mountain View Dr, Boulder, CO
```
```
789 Peak Blvd, Colorado Springs, CO
```
```
800 Sun Desert Blvd, Phoenix, AZ
```
```
321 Oasis Ln, Mesa, AZ
```
```
654 West Coast Dr, San Diego, CA
```
```
456 Riverside Dr, Jacksonville, FL
```
```
789 Dock Ln, Tampa, FL
```
```
321 Rapids Rd, Denver, CO
```
```
789 Alpine Way, Salt Lake City, UT
```
```
234 Summit Blvd, Flagstaff, AZ
```
```
123 Gateway Blvd, St. Louis, MO
```
```
789 Woodrow St, Columbia, MO
```
```
145 Delivery Rd, Kansas City, MO
```
```
456 Pine Valley Ave, Portland, OR
```
```
190 Forest Ct, Salem, OR
```
```
789 Cascade Ln, Eugene, OR
```
```
234 Palm St, Miami, FL
```
```
567 Park Blvd, Savannah, GA
```
```
123 Peach St, Augusta, GA
```
```
678 Harbor St, Chicago, IL
```
```
345 Ocean Ave, Fort Lauderdale, FL
```
```
234 Industrial Park, Phoenix, AZ
```
```
123 Coastline Rd, San Francisco, CA
```
```
456 Bay St, San Jose, CA
```
```
789 Pier Ave, Oakland, CA
```
```
678 Highland Rd, Charlotte, NC
```
```
345 Cliffside Dr, Raleigh, NC
```
```
123 Freeway Ln, Houston, TX
```
```
890 Lake St, Austin, TX
```
```
200 Sunrise Ave, New York, NY
```
```
876 Broadway St, Brooklyn, NY
```
```
543 Enterprise Blvd, Albany, NY
```

