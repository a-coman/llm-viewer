# Generation 1
## Category baseline
```
!new RentalOffice('officeBostonDowntown')
!officeBostonDowntown.name := 'Boston Downtown'
!officeBostonDowntown.number := 101
!officeBostonDowntown.address := '123 Main St, Boston, MA 02101'

!new Truck('truck001')
!truck001.id := 301
!truck001.registrationState := #MA
!truck001.licensePlateNumber := 'MA1234TR'
!truck001.vehicleTypeCode := #TRUCK
!truck001.registrationLastMaintenanceDate := Date('2023-08-15')
!truck001.expirationDate := Date('2024-08-14')
!truck001.odometerReading := 12000
!truck001.gasTankCapacity := 15.5
!truck001.workingRadio := true
!truck001.mileage := 25000

!new Individual('individualJohnDoe')
!individualJohnDoe.name := 'John Doe'
!individualJohnDoe.address := '456 Elm St, Boston, MA 02110'
!individualJohnDoe.poorRisk := false
!individualJohnDoe.homePhone := '617-555-2323'
!individualJohnDoe.driverLicenseState := #MA
!individualJohnDoe.driverLicenseNumber := 987654321
!individualJohnDoe.driverLicenseExpirationDate := Date('2025-05-10')

!new RentalAgreement('rentalAgreement1001')
!rentalAgreement1001.number := 1001
!rentalAgreement1001.rentalDate := Date('2023-09-01')
!rentalAgreement1001.anticipatedDuration := 7
!rentalAgreement1001.depositPaid := 200.0
!rentalAgreement1001.quotedDailyRate := 50.0
!rentalAgreement1001.quotedRatePerMile := 0.5

!insert (officeBostonDowntown, truck001) into RentalOfficeVehicle
!insert (officeBostonDowntown, rentalAgreement1001) into RentalOfficeRentalAgreementOrigin
!insert (officeBostonDowntown, rentalAgreement1001) into RentalOfficeRentalAgreementDrop
!insert (rentalAgreement1001, truck001) into RentalAgreementVehicle
!insert (rentalAgreement1001, individualJohnDoe) into RentalAgreementCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 3 | 35 | 8.57% |
| Multiplicities Errors | 0 | 5 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| Syntax Errors | 
|---| 
```
<input>:1:0: generation of expression `#MA' failed, with following error:
```
```
<input>:1:31: Undefined enumeration literal `MA'.
```
```
<input>:1:0: generation of expression `#MA' failed, with following error:
```

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 1 | 2 | 50.00% |
| License Plates | 0 | 1 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
456 Elm St, Boston, MA 02110
```

## Category boundary
```
!new RentalOffice('officeBoundaryStateRentals')
!officeBoundaryStateRentals.name := 'Boundary State Rentals'
!officeBoundaryStateRentals.number := 1
!officeBoundaryStateRentals.address := '123 Lone Star Road, Austin, TX'

!new Truck('truckBoundaryCase')
!truckBoundaryCase.id := 1
!truckBoundaryCase.registrationState := #TX
!truckBoundaryCase.licensePlateNumber := 'TX-0001-EDGE'
!truckBoundaryCase.vehicleTypeCode := #TRUCK
!truckBoundaryCase.registrationLastMaintenanceDate := Date('2024-01-01')
!truckBoundaryCase.expirationDate := Date('2025-01-01')
!truckBoundaryCase.odometerReading := 0
!truckBoundaryCase.gasTankCapacity := 0.0
!truckBoundaryCase.workingRadio := false
!truckBoundaryCase.mileage := 0

!new Individual('individualJohnNull')
!individualJohnNull.name := 'John Null'
!individualJohnNull.address := '456 Empty Lane, Nowhere, NY'
!individualJohnNull.poorRisk := true
!individualJohnNull.homePhone := '000-000-0000'
!individualJohnNull.driverLicenseState := #NY
!individualJohnNull.driverLicenseNumber := 1000000000
!individualJohnNull.driverLicenseExpirationDate := Date('2023-10-01')

!new RentalAgreement('rentalAgreementBoundaryCase')
!rentalAgreementBoundaryCase.number := 1
!rentalAgreementBoundaryCase.rentalDate := Date('2024-12-31')
!rentalAgreementBoundaryCase.anticipatedDuration := 0
!rentalAgreementBoundaryCase.depositPaid := 0.0
!rentalAgreementBoundaryCase.quotedDailyRate := 0.0
!rentalAgreementBoundaryCase.quotedRatePerMile := 0.0

!insert (officeBoundaryStateRentals, truckBoundaryCase) into RentalOfficeVehicle
!insert (officeBoundaryStateRentals, rentalAgreementBoundaryCase) into RentalOfficeRentalAgreementOrigin
!insert (officeBoundaryStateRentals, rentalAgreementBoundaryCase) into RentalOfficeRentalAgreementDrop
!insert (rentalAgreementBoundaryCase, truckBoundaryCase) into RentalAgreementVehicle
!insert (rentalAgreementBoundaryCase, individualJohnNull) into RentalAgreementCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 3 | 35 | 8.57% |
| Multiplicities Errors | 0 | 5 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| Syntax Errors | 
|---| 
```
<input>:1:0: generation of expression `#TX' failed, with following error:
```
```
<input>:1:40: Undefined enumeration literal `TX'.
```
```
<input>:1:0: generation of expression `#NY' failed, with following error:
```

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 2 | 2 | 100.00% |
| License Plates | 1 | 1 | 100.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
123 Lone Star Road, Austin, TX
```
```
456 Empty Lane, Nowhere, NY
```

| Invalid License Plates | 
|---| 
```
TX-0001-EDGE
```

## Category complex
```
!new RentalOffice('officeQuickNGoRentals')
!officeQuickNGoRentals.name := 'QuickNGo Rentals'
!officeQuickNGoRentals.number := 101
!officeQuickNGoRentals.address := '456 Market St, San Francisco, CA 94111'

!new Truck('truck2021')
!truck2021.id := 2021
!truck2021.registrationState := #CA
!truck2021.licensePlateNumber := 'CAL1234'
!truck2021.vehicleTypeCode := #TRUCK
!truck2021.registrationLastMaintenanceDate := Date('2023-07-15')
!truck2021.expirationDate := Date('2024-07-15')
!truck2021.odometerReading := 30000
!truck2021.gasTankCapacity := 26.5
!truck2021.workingRadio := true
!truck2021.mileage := 15

!new Vehicle('trailer3019')
!trailer3019.id := 3019
!trailer3019.registrationState := #CA
!trailer3019.licensePlateNumber := 'CAL5678'
!trailer3019.vehicleTypeCode := #COVERED_TRAILER
!trailer3019.registrationLastMaintenanceDate := Date('2023-08-10')
!trailer3019.expirationDate := Date('2024-09-10')

!new Individual('individualJohnDoe')
!individualJohnDoe.name := 'John Doe'
!individualJohnDoe.address := '789 Pine St, San Francisco, CA 94108'
!individualJohnDoe.poorRisk := false
!individualJohnDoe.homePhone := '415-555-0101'
!individualJohnDoe.driverLicenseState := #CA
!individualJohnDoe.driverLicenseNumber := 98765432
!individualJohnDoe.driverLicenseExpirationDate := Date('2025-03-23')

!new Company('companyTechInnovators')
!companyTechInnovators.name := 'Tech Innovators Inc.'
!companyTechInnovators.address := '123 Silicon Valley Blvd, Palo Alto, CA 94301'
!companyTechInnovators.poorRisk := false
!companyTechInnovators.idNumber := 9001

!new RentalAgreement('rentalAgreement5001')
!rentalAgreement5001.number := 5001
!rentalAgreement5001.rentalDate := Date('2023-09-01')
!rentalAgreement5001.anticipatedDuration := 7
!rentalAgreement5001.depositPaid := 200.0
!rentalAgreement5001.quotedDailyRate := 45.0
!rentalAgreement5001.quotedRatePerMile := 0.5

!new RentalAgreement('rentalAgreement6003')
!rentalAgreement6003.number := 6003
!rentalAgreement6003.rentalDate := Date('2023-09-10')
!rentalAgreement6003.anticipatedDuration := 14
!rentalAgreement6003.depositPaid := 500.0
!rentalAgreement6003.quotedDailyRate := 35.0
!rentalAgreement6003.quotedRatePerMile := 0.3

!insert (officeQuickNGoRentals, truck2021) into RentalOfficeVehicle
!insert (officeQuickNGoRentals, trailer3019) into RentalOfficeVehicle

!insert (officeQuickNGoRentals, rentalAgreement5001) into RentalOfficeRentalAgreementOrigin
!insert (officeQuickNGoRentals, rentalAgreement6003) into RentalOfficeRentalAgreementOrigin

!insert (officeQuickNGoRentals, rentalAgreement5001) into RentalOfficeRentalAgreementDrop
!insert (officeQuickNGoRentals, rentalAgreement6003) into RentalOfficeRentalAgreementDrop

!insert (rentalAgreement5001, truck2021) into RentalAgreementVehicle
!insert (rentalAgreement6003, trailer3019) into RentalAgreementVehicle

!insert (rentalAgreement5001, individualJohnDoe) into RentalAgreementCustomer
!insert (rentalAgreement6003, companyTechInnovators) into RentalAgreementCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 59 | 0.00% |
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
123 Silicon Valley Blvd, Palo Alto, CA 94301
```

## Category edge
```
!new RentalOffice('officeRemotePeaks')
!officeRemotePeaks.name := 'Remote Peaks Rental'
!officeRemotePeaks.number := 101
!officeRemotePeaks.address := '123 Mountain Top Lane, Isolation, WY 82000'

!new Truck('truck56789')
!truck56789.id := 56789
!truck56789.registrationState := #WY
!truck56789.licensePlateNumber := 'WYO-123-EFG'
!truck56789.vehicleTypeCode := #TRUCK
!truck56789.registrationLastMaintenanceDate := Date('2022-12-31')
!truck56789.expirationDate := Date('2023-12-31')
!truck56789.odometerReading := 7
!truck56789.gasTankCapacity := 0.5
!truck56789.workingRadio := true
!truck56789.mileage := 0

!new Individual('individualErikMountainclimber')
!individualErikMountainclimber.name := 'Erik Mountainclimber'
!individualErikMountainclimber.address := '789 Cliffside Drive, Alpine, CO 80420'
!individualErikMountainclimber.poorRisk := true
!individualErikMountainclimber.homePhone := '+1-970-555-0123'
!individualErikMountainclimber.driverLicenseState := #CO
!individualErikMountainclimber.driverLicenseNumber := 98765432
!individualErikMountainclimber.driverLicenseExpirationDate := Date('2024-06-30')

!new Company('companyHighAltitudeVentures')
!companyHighAltitudeVentures.name := 'High Altitude Ventures'
!companyHighAltitudeVentures.address := '45 Boulder Front, Summit City, CO 80001'
!companyHighAltitudeVentures.poorRisk := false
!companyHighAltitudeVentures.idNumber := 123456789

!new RentalAgreement('rentalAgreement1001')
!rentalAgreement1001.number := 1001
!rentalAgreement1001.rentalDate := Date('2025-01-15')
!rentalAgreement1001.anticipatedDuration := 1
!rentalAgreement1001.depositPaid := 0.0
!rentalAgreement1001.quotedDailyRate := 300.0
!rentalAgreement1001.quotedRatePerMile := 1.5

!new RentalAgreement('rentalAgreement1002')
!rentalAgreement1002.number := 1002
!rentalAgreement1002.rentalDate := Date('2025-01-15')
!rentalAgreement1002.anticipatedDuration := 30
!rentalAgreement1002.depositPaid := 10000.0
!rentalAgreement1002.quotedDailyRate := 250.0
!rentalAgreement1002.quotedRatePerMile := 1.0

!insert (officeRemotePeaks, truck56789) into RentalOfficeVehicle

!insert (officeRemotePeaks, rentalAgreement1001) into RentalOfficeRentalAgreementOrigin
!insert (officeRemotePeaks, rentalAgreement1001) into RentalOfficeRentalAgreementDrop
!insert (rentalAgreement1001, truck56789) into RentalAgreementVehicle
!insert (rentalAgreement1001, individualErikMountainclimber) into RentalAgreementCustomer

!insert (officeRemotePeaks, rentalAgreement1002) into RentalOfficeRentalAgreementOrigin
!insert (officeRemotePeaks, rentalAgreement1002) into RentalOfficeRentalAgreementDrop
!insert (rentalAgreement1002, truck56789) into RentalAgreementVehicle
!insert (rentalAgreement1002, companyHighAltitudeVentures) into RentalAgreementCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 1 | 51 | 1.96% |
| Multiplicities Errors | 0 | 9 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| Syntax Errors | 
|---| 
```
<input>:1:0: generation of expression `#WY' failed, with following error:
```

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 3 | 3 | 100.00% |
| License Plates | 0 | 1 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
123 Mountain Top Lane, Isolation, WY 82000
```
```
789 Cliffside Drive, Alpine, CO 80420
```
```
45 Boulder Front, Summit City, CO 80001
```

## Category invalid
```
!new RentalOffice('officeMiamiDowntown')
!officeMiamiDowntown.name := 'Miami Downtown Branch'
!officeMiamiDowntown.number := 101
!officeMiamiDowntown.address := '123 Biscayne Blvd, Miami, FL'

!new Truck('truck3001')
!truck3001.id := 3001
!truck3001.registrationState := #FL
!truck3001.licensePlateNumber := 'FL1234AB'
!truck3001.vehicleTypeCode := #TRUCK
!truck3001.odometerReading := 100000
!truck3001.gasTankCapacity := 0.0
!truck3001.workingRadio := true
!truck3001.mileage := 15
!truck3001.registrationLastMaintenanceDate := Date('2023-06-15')
!truck3001.expirationDate := Date('2024-06-14')

!new Individual('individualJuanPerez')
!individualJuanPerez.name := 'Juan Pérez'
!individualJuanPerez.address := '456 Little Havana, Miami, FL'
!individualJuanPerez.poorRisk := false
!individualJuanPerez.homePhone := '(305) 555-7890'
!individualJuanPerez.driverLicenseState := #FL
!individualJuanPerez.driverLicenseNumber := 987654321
!individualJuanPerez.driverLicenseExpirationDate := Date('2023-12-31')

!new Company('companySunshineCorp')
!companySunshineCorp.name := 'Sunshine Corp Logistics'
!companySunshineCorp.address := '789 Brickell Ave, Miami, FL'
!companySunshineCorp.poorRisk := true
!companySunshineCorp.idNumber := 87654321

!new RentalAgreement('rentalAgreement5001')
!rentalAgreement5001.number := 5001
!rentalAgreement5001.rentalDate := Date('2023-10-01')
!rentalAgreement5001.anticipatedDuration := 15
!rentalAgreement5001.depositPaid := 200.0
!rentalAgreement5001.quotedDailyRate := 150.0
!rentalAgreement5001.quotedRatePerMile := 0.0

!insert (officeMiamiDowntown, truck3001) into RentalOfficeVehicle

!insert (officeMiamiDowntown, rentalAgreement5001) into RentalOfficeRentalAgreementOrigin
!insert (officeMiamiDowntown, rentalAgreement5001) into RentalOfficeRentalAgreementDrop

!insert (rentalAgreement5001, truck3001) into RentalAgreementVehicle

!insert (rentalAgreement5001, individualJuanPerez) into RentalAgreementCustomer
!insert (rentalAgreement5001, companySunshineCorp) into RentalAgreementCustomer
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 6 | 16.67% |
| Invariants Errors (Not included on General) | 0 | 5 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `RentalAgreementCustomer':
  Object `rentalAgreement5001' of class `RentalAgreement' is connected to 2 objects of class `Customer'
  at association end `customer' but the multiplicity is specified as `1'.
```

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 1 | 3 | 33.33% |
| License Plates | 0 | 1 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
456 Little Havana, Miami, FL
```

## Generation 1 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 7 | 221 | 3.17% |
| Multiplicities Errors | 0 | 29 | 0.00% |
| Invariants Errors | 0 | 20 | 0.00% |

| Syntax Errors | 
|---| 
```
<input>:1:0: generation of expression `#MA' failed, with following error:
```
```
<input>:1:31: Undefined enumeration literal `MA'.
```
```
<input>:1:0: generation of expression `#MA' failed, with following error:
```
```
<input>:1:0: generation of expression `#TX' failed, with following error:
```
```
<input>:1:40: Undefined enumeration literal `TX'.
```
```
<input>:1:0: generation of expression `#NY' failed, with following error:
```
```
<input>:1:0: generation of expression `#WY' failed, with following error:
```

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 6 | 16.67% |
| Invariants Errors (Not included on General) | 0 | 5 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `RentalAgreementCustomer':
  Object `rentalAgreement5001' of class `RentalAgreement' is connected to 2 objects of class `Customer'
  at association end `customer' but the multiplicity is specified as `1'.
```

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 8 | 13 | 61.54% |
| License Plates | 1 | 6 | 16.67% |
| Home Phones | 0 | 5 | 0.00% |

| Invalid Addresses | 
|---| 
```
456 Elm St, Boston, MA 02110
```
```
123 Lone Star Road, Austin, TX
```
```
456 Empty Lane, Nowhere, NY
```
```
123 Silicon Valley Blvd, Palo Alto, CA 94301
```
```
123 Mountain Top Lane, Isolation, WY 82000
```
```
789 Cliffside Drive, Alpine, CO 80420
```
```
45 Boulder Front, Summit City, CO 80001
```
```
456 Little Havana, Miami, FL
```

| Invalid License Plates | 
|---| 
```
TX-0001-EDGE
```

# Generation 2
## Category baseline
```
!new RentalOffice('officeLosAngelesCenter')
!officeLosAngelesCenter.name := 'Los Angeles Center'
!officeLosAngelesCenter.number := 202
!officeLosAngelesCenter.address := '789 Sunset Blvd, Los Angeles, CA 90028'

!new Vehicle('coveredTrailer002')
!coveredTrailer002.id := 302
!coveredTrailer002.registrationState := #CA
!coveredTrailer002.licensePlateNumber := 'CA5678CT'
!coveredTrailer002.vehicleTypeCode := #COVERED_TRAILER
!coveredTrailer002.registrationLastMaintenanceDate := Date('2023-06-20')
!coveredTrailer002.expirationDate := Date('2024-06-19')

!new Truck('truck003')
!truck003.id := 303
!truck003.registrationState := #CA
!truck003.licensePlateNumber := 'NV4683TR'
!truck003.vehicleTypeCode := #TRUCK
!truck003.registrationLastMaintenanceDate := Date('2023-07-10')
!truck003.expirationDate := Date('2024-07-09')
!truck003.odometerReading := 8000
!truck003.gasTankCapacity := 13.2
!truck003.workingRadio := false
!truck003.mileage := 15000

!new Company('companySunTechLogistics')
!companySunTechLogistics.name := 'SunTech Logistics'
!companySunTechLogistics.address := '100 Corporate Park, Los Angeles, CA 90001'
!companySunTechLogistics.poorRisk := false
!companySunTechLogistics.idNumber := 759001

!new RentalAgreement('rentalAgreement2002')
!rentalAgreement2002.number := 2002
!rentalAgreement2002.rentalDate := Date('2023-10-05')
!rentalAgreement2002.anticipatedDuration := 14
!rentalAgreement2002.depositPaid := 400.0
!rentalAgreement2002.quotedDailyRate := 70.0
!rentalAgreement2002.quotedRatePerMile := 0.3

!insert (officeLosAngelesCenter, coveredTrailer002) into RentalOfficeVehicle
!insert (officeLosAngelesCenter, truck003) into RentalOfficeVehicle

!insert (officeLosAngelesCenter, rentalAgreement2002) into RentalOfficeRentalAgreementOrigin
!insert (officeLosAngelesCenter, rentalAgreement2002) into RentalOfficeRentalAgreementDrop

!insert (rentalAgreement2002, truck003) into RentalAgreementVehicle
!insert (rentalAgreement2002, companySunTechLogistics) into RentalAgreementCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 40 | 0.00% |
| Multiplicities Errors | 0 | 6 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 1 | 2 | 50.00% |
| License Plates | 0 | 2 | 0.00% |
| Home Phones | 0 | 0 | 0.00% |

| Invalid Addresses | 
|---| 
```
100 Corporate Park, Los Angeles, CA 90001
```

## Category boundary
```
!new RentalOffice('officePeakPointRentals')
!officePeakPointRentals.name := 'Peak Point Rentals'
!officePeakPointRentals.number := 99999
!officePeakPointRentals.address := '999 Summit Avenue, Denver, CO'

!new Truck('truckMaxId')
!truckMaxId.id := 2147483647
!truckMaxId.registrationState := #CO
!truckMaxId.licensePlateNumber := 'CO-MAX-999'
!truckMaxId.vehicleTypeCode := #TRUCK
!truckMaxId.registrationLastMaintenanceDate := Date('2023-08-15')
!truckMaxId.expirationDate := Date('2024-08-15')
!truckMaxId.odometerReading := 1000000
!truckMaxId.gasTankCapacity := 100.0
!truckMaxId.workingRadio := true
!truckMaxId.mileage := 500000

!new RentalAgreement('rentalAgreementMaxId')
!rentalAgreementMaxId.number := 999999
!rentalAgreementMaxId.rentalDate := Date('2023-12-01')
!rentalAgreementMaxId.anticipatedDuration := 365
!rentalAgreementMaxId.depositPaid := 10000.0
!rentalAgreementMaxId.quotedDailyRate := 300.0
!rentalAgreementMaxId.quotedRatePerMile := 5.0

!new Company('companyBigTimeConstruction')
!companyBigTimeConstruction.name := 'Big Time Construction Co'
!companyBigTimeConstruction.address := '999 Builder\'s Way, Construction City, TN'
!companyBigTimeConstruction.poorRisk := false
!companyBigTimeConstruction.idNumber := 999999999

!insert (officePeakPointRentals, truckMaxId) into RentalOfficeVehicle
!insert (officePeakPointRentals, rentalAgreementMaxId) into RentalOfficeRentalAgreementOrigin
!insert (officePeakPointRentals, rentalAgreementMaxId) into RentalOfficeRentalAgreementDrop
!insert (rentalAgreementMaxId, truckMaxId) into RentalAgreementVehicle
!insert (rentalAgreementMaxId, companyBigTimeConstruction) into RentalAgreementCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 32 | 0.00% |
| Multiplicities Errors | 0 | 5 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 2 | 2 | 100.00% |
| License Plates | 0 | 1 | 0.00% |
| Home Phones | 0 | 0 | 0.00% |

| Invalid Addresses | 
|---| 
```
999 Summit Avenue, Denver, CO
```
```
999 Builder\
```

## Category complex
```
!new RentalOffice('officeMileHighRentals')
!officeMileHighRentals.name := 'Mile High Rentals'
!officeMileHighRentals.number := 205
!officeMileHighRentals.address := '1234 Colorado Blvd, Denver, CO 80206'

!new Truck('truck1045')
!truck1045.id := 1045
!truck1045.registrationState := #CO
!truck1045.licensePlateNumber := 'CO3456'
!truck1045.vehicleTypeCode := #TRUCK
!truck1045.registrationLastMaintenanceDate := Date('2023-06-20')
!truck1045.expirationDate := Date('2024-06-20')
!truck1045.odometerReading := 50000
!truck1045.gasTankCapacity := 30.0
!truck1045.workingRadio := false
!truck1045.mileage := 12

!new Vehicle('coveredTrailer2078')
!coveredTrailer2078.id := 2078
!coveredTrailer2078.registrationState := #CO
!coveredTrailer2078.licensePlateNumber := 'CO7890'
!coveredTrailer2078.vehicleTypeCode := #COVERED_TRAILER
!coveredTrailer2078.registrationLastMaintenanceDate := Date('2023-07-12')
!coveredTrailer2078.expirationDate := Date('2024-07-12')

!new Truck('truck1050')
!truck1050.id := 1050
!truck1050.registrationState := #TX
!truck1050.licensePlateNumber := 'TX0987'
!truck1050.vehicleTypeCode := #TRUCK
!truck1050.registrationLastMaintenanceDate := Date('2023-05-18')
!truck1050.expirationDate := Date('2024-05-18')
!truck1050.odometerReading := 70000
!truck1050.gasTankCapacity := 28.0
!truck1050.workingRadio := true
!truck1050.mileage := 10

!new Individual('individualEmilyChen')
!individualEmilyChen.name := 'Emily Chen'
!individualEmilyChen.address := '456 Aspen Lane, Boulder, CO 80302'
!individualEmilyChen.poorRisk := true
!individualEmilyChen.homePhone := '303-555-0234'
!individualEmilyChen.driverLicenseState := #CO
!individualEmilyChen.driverLicenseNumber := 33221144
!individualEmilyChen.driverLicenseExpirationDate := Date('2026-01-16')

!new Company('companyRockyMountainAdventures')
!companyRockyMountainAdventures.name := 'Rocky Mountain Adventures'
!companyRockyMountainAdventures.address := '789 Peak Dr, Denver, CO 80202'
!companyRockyMountainAdventures.poorRisk := false
!companyRockyMountainAdventures.idNumber := 4568

!new RentalAgreement('rentalAgreement7002')
!rentalAgreement7002.number := 7002
!rentalAgreement7002.rentalDate := Date('2023-10-05')
!rentalAgreement7002.anticipatedDuration := 3
!rentalAgreement7002.depositPaid := 100.0
!rentalAgreement7002.quotedDailyRate := 50.0
!rentalAgreement7002.quotedRatePerMile := 0.6

!new RentalAgreement('rentalAgreement8004')
!rentalAgreement8004.number := 8004
!rentalAgreement8004.rentalDate := Date('2023-09-25')
!rentalAgreement8004.anticipatedDuration := 10
!rentalAgreement8004.depositPaid := 400.0
!rentalAgreement8004.quotedDailyRate := 40.0
!rentalAgreement8004.quotedRatePerMile := 0.4

!new RentalAgreement('rentalAgreement9005')
!rentalAgreement9005.number := 9005
!rentalAgreement9005.rentalDate := Date('2023-10-10')
!rentalAgreement9005.anticipatedDuration := 5
!rentalAgreement9005.depositPaid := 250.0
!rentalAgreement9005.quotedDailyRate := 55.0
!rentalAgreement9005.quotedRatePerMile := 0.45

!insert (officeMileHighRentals, truck1045) into RentalOfficeVehicle
!insert (officeMileHighRentals, coveredTrailer2078) into RentalOfficeVehicle
!insert (officeMileHighRentals, truck1050) into RentalOfficeVehicle

!insert (officeMileHighRentals, rentalAgreement7002) into RentalOfficeRentalAgreementOrigin
!insert (officeMileHighRentals, rentalAgreement8004) into RentalOfficeRentalAgreementOrigin
!insert (officeMileHighRentals, rentalAgreement9005) into RentalOfficeRentalAgreementOrigin

!insert (officeMileHighRentals, rentalAgreement7002) into RentalOfficeRentalAgreementDrop
!insert (officeMileHighRentals, rentalAgreement8004) into RentalOfficeRentalAgreementDrop
!insert (officeMileHighRentals, rentalAgreement9005) into RentalOfficeRentalAgreementDrop

!insert (rentalAgreement7002, truck1045) into RentalAgreementVehicle
!insert (rentalAgreement8004, coveredTrailer2078) into RentalAgreementVehicle
!insert (rentalAgreement9005, truck1050) into RentalAgreementVehicle

!insert (rentalAgreement7002, individualEmilyChen) into RentalAgreementCustomer
!insert (rentalAgreement8004, companyRockyMountainAdventures) into RentalAgreementCustomer
!insert (rentalAgreement9005, companyRockyMountainAdventures) into RentalAgreementCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 1 | 82 | 1.22% |
| Multiplicities Errors | 0 | 15 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| Syntax Errors | 
|---| 
```
<input>:1:0: generation of expression `#TX' failed, with following error:
```

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 2 | 3 | 66.67% |
| License Plates | 0 | 3 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
456 Aspen Lane, Boulder, CO 80302
```
```
789 Peak Dr, Denver, CO 80202
```

## Category edge
```
!new RentalOffice('officeTriStateHub')
!officeTriStateHub.name := 'Tri-State Transportation Hub'
!officeTriStateHub.number := 202
!officeTriStateHub.address := '369 Border Loop, Tristate Area, IL-IN-KY 62000'

!new Truck('truck67890')
!truck67890.id := 67890
!truck67890.registrationState := #IL
!truck67890.licensePlateNumber := 'IL-456-HIJ'
!truck67890.vehicleTypeCode := #TRUCK
!truck67890.registrationLastMaintenanceDate := Date('2023-01-05')
!truck67890.expirationDate := Date('2023-11-15')
!truck67890.odometerReading := 500000
!truck67890.gasTankCapacity := 100.0
!truck67890.workingRadio := false
!truck67890.mileage := 10

!new Vehicle('coveredTrailer67891')
!coveredTrailer67891.id := 67891
!coveredTrailer67891.registrationState := #IN
!coveredTrailer67891.licensePlateNumber := 'IN-789-KLM'
!coveredTrailer67891.vehicleTypeCode := #COVERED_TRAILER
!coveredTrailer67891.registrationLastMaintenanceDate := Date('2022-11-10')
!coveredTrailer67891.expirationDate := Date('2023-11-10')

!new Individual('individualJesseInterstate')
!individualJesseInterstate.name := 'Jesse Interstate'
!individualJesseInterstate.address := '150 Route Road, Crossroads, KY 41001'
!individualJesseInterstate.poorRisk := false
!individualJesseInterstate.homePhone := '+1-859-555-0456'
!individualJesseInterstate.driverLicenseState := #KY
!individualJesseInterstate.driverLicenseNumber := 456123789
!individualJesseInterstate.driverLicenseExpirationDate := Date('2026-05-22')

!new Company('companyRegionalLogisticsLLC')
!companyRegionalLogisticsLLC.name := 'Regional Logistics LLC'
!companyRegionalLogisticsLLC.address := '312 Interstate Parkway, Commerce, IL 60007'
!companyRegionalLogisticsLLC.poorRisk := true
!companyRegionalLogisticsLLC.idNumber := 987456321

!new RentalAgreement('rentalAgreement2003')
!rentalAgreement2003.number := 2003
!rentalAgreement2003.rentalDate := Date('2025-11-01')
!rentalAgreement2003.anticipatedDuration := 3
!rentalAgreement2003.depositPaid := 50.0
!rentalAgreement2003.quotedDailyRate := 125.0
!rentalAgreement2003.quotedRatePerMile := 2.5

!new RentalAgreement('rentalAgreement2004')
!rentalAgreement2004.number := 2004
!rentalAgreement2004.rentalDate := Date('2025-11-01')
!rentalAgreement2004.anticipatedDuration := 180
!rentalAgreement2004.depositPaid := 500.0
!rentalAgreement2004.quotedDailyRate := 35.0
!rentalAgreement2004.quotedRatePerMile := 0.5

!insert (officeTriStateHub, truck67890) into RentalOfficeVehicle
!insert (officeTriStateHub, coveredTrailer67891) into RentalOfficeVehicle

!insert (officeTriStateHub, rentalAgreement2003) into RentalOfficeRentalAgreementOrigin
!insert (officeTriStateHub, rentalAgreement2004) into RentalOfficeRentalAgreementOrigin

!insert (officeTriStateHub, rentalAgreement2003) into RentalOfficeRentalAgreementDrop
!insert (officeTriStateHub, rentalAgreement2004) into RentalOfficeRentalAgreementDrop

!insert (rentalAgreement2003, truck67890) into RentalAgreementVehicle
!insert (rentalAgreement2004, coveredTrailer67891) into RentalAgreementVehicle

!insert (rentalAgreement2003, individualJesseInterstate) into RentalAgreementCustomer
!insert (rentalAgreement2004, companyRegionalLogisticsLLC) into RentalAgreementCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 5 | 59 | 8.47% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| Syntax Errors | 
|---| 
```
<input>:1:0: generation of expression `#IL' failed, with following error:
```
```
<input>:1:33: Undefined enumeration literal `IL'.
```
```
<input>:1:0: generation of expression `#IN' failed, with following error:
```
```
<input>:1:42: Undefined enumeration literal `IN'.
```
```
<input>:1:0: generation of expression `#KY' failed, with following error:
```

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 3 | 3 | 100.00% |
| License Plates | 0 | 2 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
369 Border Loop, Tristate Area, IL-IN-KY 62000
```
```
150 Route Road, Crossroads, KY 41001
```
```
312 Interstate Parkway, Commerce, IL 60007
```

## Category invalid
```
!new RentalOffice('officeSeattlePioneerSquare')
!officeSeattlePioneerSquare.name := 'Seattle Pioneer Square Office'
!officeSeattlePioneerSquare.number := 202
!officeSeattlePioneerSquare.address := '789 Occidental Ave S, Seattle, WA'

!new Vehicle('coveredTrailer4002')
!coveredTrailer4002.id := 4002
!coveredTrailer4002.registrationState := #WA
!coveredTrailer4002.licensePlateNumber := 'WA5678CD'
!coveredTrailer4002.vehicleTypeCode := #COVERED_TRAILER
!coveredTrailer4002.registrationLastMaintenanceDate := Date('2023-05-20')
!coveredTrailer4002.expirationDate := Date('2023-11-20')

!new Individual('individualEmilyZhang')
!individualEmilyZhang.name := 'Emily Zhang'
!individualEmilyZhang.address := '321 Capitol Hill, Seattle, WA'
!individualEmilyZhang.poorRisk := false
!individualEmilyZhang.homePhone := '(206) 555-1345'
!individualEmilyZhang.driverLicenseState := #CA
!individualEmilyZhang.driverLicenseNumber := 11223344
!individualEmilyZhang.driverLicenseExpirationDate := Date('2025-02-28')

!new RentalAgreement('rentalAgreement6002')
!rentalAgreement6002.number := 6002
!rentalAgreement6002.rentalDate := Date('2023-11-25')
!rentalAgreement6002.anticipatedDuration := 7
!rentalAgreement6002.depositPaid := 0.0
!rentalAgreement6002.quotedDailyRate := 60.0
!rentalAgreement6002.quotedRatePerMile := 0.25

!insert (officeSeattlePioneerSquare, coveredTrailer4002) into RentalOfficeVehicle
!insert (officeSeattlePioneerSquare, rentalAgreement6002) into RentalOfficeRentalAgreementOrigin
!insert (officeSeattlePioneerSquare, rentalAgreement6002) into RentalOfficeRentalAgreementDrop
!insert (rentalAgreement6002, coveredTrailer4002) into RentalAgreementVehicle
!insert (rentalAgreement6002, individualEmilyZhang) into RentalAgreementCustomer
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 5 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 1 | 2 | 50.00% |
| License Plates | 0 | 1 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
321 Capitol Hill, Seattle, WA
```

## Generation 2 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 7 | 244 | 2.87% |
| Multiplicities Errors | 0 | 36 | 0.00% |
| Invariants Errors | 0 | 20 | 0.00% |

| Syntax Errors | 
|---| 
```
<input>:1:0: generation of expression `#TX' failed, with following error:
```
```
<input>:1:0: generation of expression `#IL' failed, with following error:
```
```
<input>:1:33: Undefined enumeration literal `IL'.
```
```
<input>:1:0: generation of expression `#IN' failed, with following error:
```
```
<input>:1:42: Undefined enumeration literal `IN'.
```
```
<input>:1:0: generation of expression `#KY' failed, with following error:
```
```
<input>:1:0: generation of expression `#WA' failed, with following error:
```

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 5 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 9 | 12 | 75.00% |
| License Plates | 0 | 9 | 0.00% |
| Home Phones | 0 | 3 | 0.00% |

| Invalid Addresses | 
|---| 
```
100 Corporate Park, Los Angeles, CA 90001
```
```
999 Summit Avenue, Denver, CO
```
```
999 Builder\
```
```
456 Aspen Lane, Boulder, CO 80302
```
```
789 Peak Dr, Denver, CO 80202
```
```
369 Border Loop, Tristate Area, IL-IN-KY 62000
```
```
150 Route Road, Crossroads, KY 41001
```
```
312 Interstate Parkway, Commerce, IL 60007
```
```
321 Capitol Hill, Seattle, WA
```

# Generation 3
## Category baseline
```
!new RentalOffice('officeNewYorkUptown')
!officeNewYorkUptown.name := 'New York Uptown'
!officeNewYorkUptown.number := 303
!officeNewYorkUptown.address := '321 Broadway, New York, NY 10007'

!new Vehicle('coveredTrailer004')
!coveredTrailer004.id := 304
!coveredTrailer004.registrationState := #NY
!coveredTrailer004.licensePlateNumber := 'NY1345CT'
!coveredTrailer004.vehicleTypeCode := #COVERED_TRAILER
!coveredTrailer004.registrationLastMaintenanceDate := Date('2023-09-12')
!coveredTrailer004.expirationDate := Date('2024-09-11')

!new Truck('truck005')
!truck005.id := 305
!truck005.registrationState := #TX
!truck005.licensePlateNumber := 'TX9807TR'
!truck005.vehicleTypeCode := #TRUCK
!truck005.registrationLastMaintenanceDate := Date('2023-05-04')
!truck005.expirationDate := Date('2024-05-03')
!truck005.odometerReading := 3000
!truck005.gasTankCapacity := 18.0
!truck005.workingRadio := true
!truck005.mileage := 10000

!new Individual('individualAkiraTanaka')
!individualAkiraTanaka.name := 'Akira Tanaka'
!individualAkiraTanaka.address := '25 Lexington Ave, Brooklyn, NY 11224'
!individualAkiraTanaka.poorRisk := true
!individualAkiraTanaka.homePhone := '718-555-6789'
!individualAkiraTanaka.driverLicenseState := #NY
!individualAkiraTanaka.driverLicenseNumber := 132457690
!individualAkiraTanaka.driverLicenseExpirationDate := Date('2025-03-15')

!new RentalAgreement('rentalAgreement3003')
!rentalAgreement3003.number := 3003
!rentalAgreement3003.rentalDate := Date('2023-11-10')
!rentalAgreement3003.anticipatedDuration := 3
!rentalAgreement3003.depositPaid := 150.0
!rentalAgreement3003.quotedDailyRate := 60.0
!rentalAgreement3003.quotedRatePerMile := 0.4

!insert (officeNewYorkUptown, coveredTrailer004) into RentalOfficeVehicle
!insert (officeNewYorkUptown, truck005) into RentalOfficeVehicle

!insert (officeNewYorkUptown, rentalAgreement3003) into RentalOfficeRentalAgreementOrigin
!insert (officeNewYorkUptown, rentalAgreement3003) into RentalOfficeRentalAgreementDrop

!insert (rentalAgreement3003, truck005) into RentalAgreementVehicle
!insert (rentalAgreement3003, individualAkiraTanaka) into RentalAgreementCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 5 | 43 | 11.63% |
| Multiplicities Errors | 0 | 6 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| Syntax Errors | 
|---| 
```
<input>:1:0: generation of expression `#NY' failed, with following error:
```
```
<input>:1:40: Undefined enumeration literal `NY'.
```
```
<input>:1:0: generation of expression `#TX' failed, with following error:
```
```
<input>:1:31: Undefined enumeration literal `TX'.
```
```
<input>:1:0: generation of expression `#NY' failed, with following error:
```

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 0 | 2 | 0.00% |
| License Plates | 0 | 2 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

## Category boundary
```
!new RentalOffice('officeOceanicRentalsHub')
!officeOceanicRentalsHub.name := 'Oceanic Rentals Hub'
!officeOceanicRentalsHub.number := 50000
!officeOceanicRentalsHub.address := '500 Coastal Drive, Miami, FL'

!new Truck('truckZeroId')
!truckZeroId.id := 0
!truckZeroId.registrationState := #FL
!truckZeroId.licensePlateNumber := 'FL-ZERO-PLATE'
!truckZeroId.vehicleTypeCode := #COVERED_TRAILER
!truckZeroId.registrationLastMaintenanceDate := Date('2022-05-05')
!truckZeroId.expirationDate := Date('2023-05-05')
!truckZeroId.odometerReading := 10
!truckZeroId.gasTankCapacity := 1.0
!truckZeroId.workingRadio := false
!truckZeroId.mileage := 1

!new RentalAgreement('rentalAgreementZeroId')
!rentalAgreementZeroId.number := 0
!rentalAgreementZeroId.rentalDate := Date('2023-01-01')
!rentalAgreementZeroId.anticipatedDuration := 1
!rentalAgreementZeroId.depositPaid := 0.01
!rentalAgreementZeroId.quotedDailyRate := 0.01
!rentalAgreementZeroId.quotedRatePerMile := 0.01

!new Individual('individualMinimalMax')
!individualMinimalMax.name := 'Minimal Max'
!individualMinimalMax.address := '1 Bay Avenue, Key West, FL'
!individualMinimalMax.poorRisk := false
!individualMinimalMax.homePhone := '111-111-1111'
!individualMinimalMax.driverLicenseState := #FL
!individualMinimalMax.driverLicenseNumber := 1
!individualMinimalMax.driverLicenseExpirationDate := Date('2024-12-31')

!insert (officeOceanicRentalsHub, truckZeroId) into RentalOfficeVehicle
!insert (officeOceanicRentalsHub, rentalAgreementZeroId) into RentalOfficeRentalAgreementOrigin
!insert (officeOceanicRentalsHub, rentalAgreementZeroId) into RentalOfficeRentalAgreementDrop
!insert (rentalAgreementZeroId, truckZeroId) into RentalAgreementVehicle
!insert (rentalAgreementZeroId, individualMinimalMax) into RentalAgreementCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 35 | 0.00% |
| Multiplicities Errors | 0 | 5 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 1 | 2 | 50.00% |
| License Plates | 1 | 1 | 100.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
500 Coastal Drive, Miami, FL
```

| Invalid License Plates | 
|---| 
```
FL-ZERO-PLATE
```

## Category complex
```
!new RentalOffice('officeBeachsideRentals')
!officeBeachsideRentals.name := 'Beachside Rentals'
!officeBeachsideRentals.number := 310
!officeBeachsideRentals.address := '1500 Ocean Dr, Miami Beach, FL 33139'

!new Truck('truck4020')
!truck4020.id := 4020
!truck4020.registrationState := #FL
!truck4020.licensePlateNumber := 'FL1122'
!truck4020.vehicleTypeCode := #TRUCK
!truck4020.registrationLastMaintenanceDate := Date('2023-09-01')
!truck4020.expirationDate := Date('2024-09-01')
!truck4020.odometerReading := 25000
!truck4020.gasTankCapacity := 22.0
!truck4020.workingRadio := true
!truck4020.mileage := 14

!new Truck('truck4021')
!truck4021.id := 4021
!truck4021.registrationState := #FL
!truck4021.licensePlateNumber := 'GA3344'
!truck4021.vehicleTypeCode := #TRUCK
!truck4021.registrationLastMaintenanceDate := Date('2023-03-15')
!truck4021.expirationDate := Date('2024-03-15')
!truck4021.odometerReading := 40000
!truck4021.gasTankCapacity := 24.5
!truck4021.workingRadio := false
!truck4021.mileage := 13

!new Vehicle('coveredTrailer5031')
!coveredTrailer5031.id := 5031
!coveredTrailer5031.registrationState := #FL
!coveredTrailer5031.licensePlateNumber := 'FL4455'
!coveredTrailer5031.vehicleTypeCode := #COVERED_TRAILER
!coveredTrailer5031.registrationLastMaintenanceDate := Date('2023-10-05')
!coveredTrailer5031.expirationDate := Date('2024-10-05')

!new Individual('individualCarlosMendez')
!individualCarlosMendez.name := 'Carlos Mendez'
!individualCarlosMendez.address := '123 Bayshore Dr, Miami, FL 33131'
!individualCarlosMendez.poorRisk := false
!individualCarlosMendez.homePhone := '305-555-0199'
!individualCarlosMendez.driverLicenseState := #FL
!individualCarlosMendez.driverLicenseNumber := 55667788
!individualCarlosMendez.driverLicenseExpirationDate := Date('2025-07-01')

!new Company('companySeasideToursLLC')
!companySeasideToursLLC.name := 'Seaside Tours LLC'
!companySeasideToursLLC.address := '987 Ocean Front, Miami Beach, FL 33140'
!companySeasideToursLLC.poorRisk := true
!companySeasideToursLLC.idNumber := 7890

!new RentalAgreement('rentalAgreement10010')
!rentalAgreement10010.number := 10010
!rentalAgreement10010.rentalDate := Date('2023-12-15')
!rentalAgreement10010.anticipatedDuration := 2
!rentalAgreement10010.depositPaid := 50.0
!rentalAgreement10010.quotedDailyRate := 60.0
!rentalAgreement10010.quotedRatePerMile := 0.55

!new RentalAgreement('rentalAgreement10011')
!rentalAgreement10011.number := 10011
!rentalAgreement10011.rentalDate := Date('2024-01-05')
!rentalAgreement10011.anticipatedDuration := 14
!rentalAgreement10011.depositPaid := 300.0
!rentalAgreement10011.quotedDailyRate := 38.0
!rentalAgreement10011.quotedRatePerMile := 0.45

!new RentalAgreement('rentalAgreement10012')
!rentalAgreement10012.number := 10012
!rentalAgreement10012.rentalDate := Date('2024-02-01')
!rentalAgreement10012.anticipatedDuration := 7
!rentalAgreement10012.depositPaid := 150.0
!rentalAgreement10012.quotedDailyRate := 40.0
!rentalAgreement10012.quotedRatePerMile := 0.50

!insert (officeBeachsideRentals, truck4020) into RentalOfficeVehicle
!insert (officeBeachsideRentals, truck4021) into RentalOfficeVehicle
!insert (officeBeachsideRentals, coveredTrailer5031) into RentalOfficeVehicle

!insert (officeBeachsideRentals, rentalAgreement10010) into RentalOfficeRentalAgreementOrigin
!insert (officeBeachsideRentals, rentalAgreement10011) into RentalOfficeRentalAgreementOrigin
!insert (officeBeachsideRentals, rentalAgreement10012) into RentalOfficeRentalAgreementOrigin

!insert (officeBeachsideRentals, rentalAgreement10010) into RentalOfficeRentalAgreementDrop
!insert (officeBeachsideRentals, rentalAgreement10011) into RentalOfficeRentalAgreementDrop
!insert (officeBeachsideRentals, rentalAgreement10012) into RentalOfficeRentalAgreementDrop

!insert (rentalAgreement10010, truck4020) into RentalAgreementVehicle
!insert (rentalAgreement10011, truck4021) into RentalAgreementVehicle
!insert (rentalAgreement10012, coveredTrailer5031) into RentalAgreementVehicle

!insert (rentalAgreement10010, individualCarlosMendez) into RentalAgreementCustomer
!insert (rentalAgreement10011, companySeasideToursLLC) into RentalAgreementCustomer
!insert (rentalAgreement10012, companySeasideToursLLC) into RentalAgreementCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 82 | 0.00% |
| Multiplicities Errors | 0 | 15 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 2 | 3 | 66.67% |
| License Plates | 0 | 3 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
123 Bayshore Dr, Miami, FL 33131
```
```
987 Ocean Front, Miami Beach, FL 33140
```

## Category edge
```
!new RentalOffice('officeDesertMirageRentals')
!officeDesertMirageRentals.name := 'Desert Mirage Rentals'
!officeDesertMirageRentals.number := 303
!officeDesertMirageRentals.address := '477 Oasis Dr, Mirage City, NV 89001'

!new Truck('truck78901')
!truck78901.id := 78901
!truck78901.registrationState := #NV
!truck78901.licensePlateNumber := 'NV-654-OPQ'
!truck78901.vehicleTypeCode := #TRUCK
!truck78901.registrationLastMaintenanceDate := Date('2023-08-01')
!truck78901.expirationDate := Date('2024-08-01')
!truck78901.odometerReading := 15000
!truck78901.gasTankCapacity := 150.0
!truck78901.workingRadio := true
!truck78901.mileage := 12

!new Individual('individualSandyDunes')
!individualSandyDunes.name := 'Sandy Dunes'
!individualSandyDunes.address := '900 Windy Path, Sun Valley, AZ 85001'
!individualSandyDunes.poorRisk := false
!individualSandyDunes.homePhone := '+1-602-555-0789'
!individualSandyDunes.driverLicenseState := #AZ
!individualSandyDunes.driverLicenseNumber := 1239876543
!individualSandyDunes.driverLicenseExpirationDate := Date('2023-05-01')

!new Company('companyRenewableExplorationsCorp')
!companyRenewableExplorationsCorp.name := 'Renewable Explorations Corp.'
!companyRenewableExplorationsCorp.address := '101 Solar Field, Desert Outpost, CA 93501'
!companyRenewableExplorationsCorp.poorRisk := false
!companyRenewableExplorationsCorp.idNumber := 556677889

!new RentalAgreement('rentalAgreement3005')
!rentalAgreement3005.number := 3005
!rentalAgreement3005.rentalDate := Date('2025-02-01')
!rentalAgreement3005.anticipatedDuration := 10
!rentalAgreement3005.depositPaid := 500.0
!rentalAgreement3005.quotedDailyRate := 110.0
!rentalAgreement3005.quotedRatePerMile := 3.0

!new RentalAgreement('rentalAgreement3006')
!rentalAgreement3006.number := 3006
!rentalAgreement3006.rentalDate := Date('2025-07-01')
!rentalAgreement3006.anticipatedDuration := 30
!rentalAgreement3006.depositPaid := 1500.0
!rentalAgreement3006.quotedDailyRate := 70.0
!rentalAgreement3006.quotedRatePerMile := 0.8

!insert (officeDesertMirageRentals, truck78901) into RentalOfficeVehicle

!insert (officeDesertMirageRentals, rentalAgreement3005) into RentalOfficeRentalAgreementOrigin
!insert (officeDesertMirageRentals, rentalAgreement3006) into RentalOfficeRentalAgreementOrigin

!insert (officeDesertMirageRentals, rentalAgreement3005) into RentalOfficeRentalAgreementDrop
!insert (officeDesertMirageRentals, rentalAgreement3006) into RentalOfficeRentalAgreementDrop

!insert (rentalAgreement3005, truck78901) into RentalAgreementVehicle
!insert (rentalAgreement3006, truck78901) into RentalAgreementVehicle

!insert (rentalAgreement3005, individualSandyDunes) into RentalAgreementCustomer
!insert (rentalAgreement3006, companyRenewableExplorationsCorp) into RentalAgreementCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 1 | 51 | 1.96% |
| Multiplicities Errors | 0 | 9 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| Syntax Errors | 
|---| 
```
<input>:1:0: generation of expression `#NV' failed, with following error:
```

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 3 | 3 | 100.00% |
| License Plates | 0 | 1 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
477 Oasis Dr, Mirage City, NV 89001
```
```
900 Windy Path, Sun Valley, AZ 85001
```
```
101 Solar Field, Desert Outpost, CA 93501
```

## Category invalid
```
!new RentalOffice('officeBostonDowntown')
!officeBostonDowntown.name := 'Boston Downtown Office'
!officeBostonDowntown.number := 303
!officeBostonDowntown.address := '456 Beacon St, Boston, MA'

!new Truck('truck5003')
!truck5003.id := 5003
!truck5003.registrationState := #MA
!truck5003.licensePlateNumber := 'MA8910EF'
!truck5003.vehicleTypeCode := #TRUCK
!truck5003.odometerReading := -10000
!truck5003.gasTankCapacity := 15.0
!truck5003.workingRadio := false
!truck5003.mileage := 10
!truck5003.registrationLastMaintenanceDate := Date('2023-07-01')
!truck5003.expirationDate := Date('2024-07-31')

!new Company('companyBostonCargoTransport')
!companyBostonCargoTransport.name := 'Boston Cargo Transport'
!companyBostonCargoTransport.address := '789 Financial District, Boston, MA'
!companyBostonCargoTransport.poorRisk := false
!companyBostonCargoTransport.idNumber := 34567890

!new RentalAgreement('rentalAgreement7003')
!rentalAgreement7003.number := 7003
!rentalAgreement7003.rentalDate := Date('2023-09-10')
!rentalAgreement7003.anticipatedDuration := 5
!rentalAgreement7003.depositPaid := 300.0
!rentalAgreement7003.quotedDailyRate := 80.0
!rentalAgreement7003.quotedRatePerMile := 0.35

!insert (officeBostonDowntown, truck5003) into RentalOfficeVehicle
!insert (officeBostonDowntown, rentalAgreement7003) into RentalOfficeRentalAgreementOrigin
!insert (officeBostonDowntown, rentalAgreement7003) into RentalOfficeRentalAgreementDrop
!insert (rentalAgreement7003, truck5003) into RentalAgreementVehicle
!insert (rentalAgreement7003, companyBostonCargoTransport) into RentalAgreementCustomer
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 5 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 1 | 2 | 50.00% |
| License Plates | 0 | 1 | 0.00% |
| Home Phones | 0 | 0 | 0.00% |

| Invalid Addresses | 
|---| 
```
789 Financial District, Boston, MA
```

## Generation 3 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 7 | 243 | 2.88% |
| Multiplicities Errors | 0 | 35 | 0.00% |
| Invariants Errors | 0 | 20 | 0.00% |

| Syntax Errors | 
|---| 
```
<input>:1:0: generation of expression `#NY' failed, with following error:
```
```
<input>:1:40: Undefined enumeration literal `NY'.
```
```
<input>:1:0: generation of expression `#TX' failed, with following error:
```
```
<input>:1:31: Undefined enumeration literal `TX'.
```
```
<input>:1:0: generation of expression `#NY' failed, with following error:
```
```
<input>:1:0: generation of expression `#NV' failed, with following error:
```
```
<input>:1:0: generation of expression `#MA' failed, with following error:
```

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 5 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 7 | 12 | 58.33% |
| License Plates | 1 | 8 | 12.50% |
| Home Phones | 0 | 4 | 0.00% |

| Invalid Addresses | 
|---| 
```
500 Coastal Drive, Miami, FL
```
```
123 Bayshore Dr, Miami, FL 33131
```
```
987 Ocean Front, Miami Beach, FL 33140
```
```
477 Oasis Dr, Mirage City, NV 89001
```
```
900 Windy Path, Sun Valley, AZ 85001
```
```
101 Solar Field, Desert Outpost, CA 93501
```
```
789 Financial District, Boston, MA
```

| Invalid License Plates | 
|---| 
```
FL-ZERO-PLATE
```

# Generation 4
## Category baseline
```
!new RentalOffice('officeMiamiBeach')
!officeMiamiBeach.name := 'Miami Beach'
!officeMiamiBeach.number := 404
!officeMiamiBeach.address := '456 Ocean Dr, Miami, FL 33139'

!new Vehicle('coveredTrailer006')
!coveredTrailer006.id := 306
!coveredTrailer006.registrationState := #FL
!coveredTrailer006.licensePlateNumber := 'FL4523CT'
!coveredTrailer006.vehicleTypeCode := #COVERED_TRAILER
!coveredTrailer006.registrationLastMaintenanceDate := Date('2023-04-18')
!coveredTrailer006.expirationDate := Date('2024-04-17')

!new Truck('truck007')
!truck007.id := 307
!truck007.registrationState := #FL
!truck007.licensePlateNumber := 'GA9901TR'
!truck007.vehicleTypeCode := #TRUCK
!truck007.registrationLastMaintenanceDate := Date('2023-01-20')
!truck007.expirationDate := Date('2024-01-19')
!truck007.odometerReading := 5000
!truck007.gasTankCapacity := 16.8
!truck007.workingRadio := true
!truck007.mileage := 12000

!new Company('companyGlobalEventCoordinators')
!companyGlobalEventCoordinators.name := 'GlobalEvent Coordinators'
!companyGlobalEventCoordinators.address := '1500 Biscayne Blvd, Miami, FL 33132'
!companyGlobalEventCoordinators.poorRisk := false
!companyGlobalEventCoordinators.idNumber := 802345

!new RentalAgreement('rentalAgreement4004')
!rentalAgreement4004.number := 4004
!rentalAgreement4004.rentalDate := Date('2024-02-12')
!rentalAgreement4004.anticipatedDuration := 30
!rentalAgreement4004.depositPaid := 600.0
!rentalAgreement4004.quotedDailyRate := 80.0
!rentalAgreement4004.quotedRatePerMile := 0.25

!insert (officeMiamiBeach, coveredTrailer006) into RentalOfficeVehicle
!insert (officeMiamiBeach, truck007) into RentalOfficeVehicle

!insert (officeMiamiBeach, rentalAgreement4004) into RentalOfficeRentalAgreementOrigin
!insert (officeMiamiBeach, rentalAgreement4004) into RentalOfficeRentalAgreementDrop

!insert (rentalAgreement4004, coveredTrailer006) into RentalAgreementVehicle
!insert (rentalAgreement4004, companyGlobalEventCoordinators) into RentalAgreementCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 40 | 0.00% |
| Multiplicities Errors | 0 | 6 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 0 | 2 | 0.00% |
| License Plates | 0 | 2 | 0.00% |
| Home Phones | 0 | 0 | 0.00% |

## Category boundary
```
!new RentalOffice('officeDesertShoresRentals')
!officeDesertShoresRentals.name := 'Desert Shores Rentals'
!officeDesertShoresRentals.number := 1000
!officeDesertShoresRentals.address := '1000 Arid Lane, Phoenix, AZ'

!new Truck('truck999')
!truck999.id := 999
!truck999.registrationState := #AZ
!truck999.licensePlateNumber := 'AZ999DESERT'
!truck999.vehicleTypeCode := #TRUCK
!truck999.registrationLastMaintenanceDate := Date('2023-10-15')
!truck999.expirationDate := Date('2024-10-15')
!truck999.odometerReading := 150000
!truck999.gasTankCapacity := 80.0
!truck999.workingRadio := true
!truck999.mileage := 120000

!new RentalAgreement('rentalAgreement10000')
!rentalAgreement10000.number := 10000
!rentalAgreement10000.rentalDate := Date('2023-11-20')
!rentalAgreement10000.anticipatedDuration := 7
!rentalAgreement10000.depositPaid := 1500.0
!rentalAgreement10000.quotedDailyRate := 150.0
!rentalAgreement10000.quotedRatePerMile := 0.2

!new Company('companyCactusLogisticsInc')
!companyCactusLogisticsInc.name := 'Cactus Logistics Inc.'
!companyCactusLogisticsInc.address := '900 Commerce Blvd, Tucson, AZ'
!companyCactusLogisticsInc.poorRisk := true
!companyCactusLogisticsInc.idNumber := 888888888

!insert (officeDesertShoresRentals, truck999) into RentalOfficeVehicle
!insert (officeDesertShoresRentals, rentalAgreement10000) into RentalOfficeRentalAgreementOrigin
!insert (officeDesertShoresRentals, rentalAgreement10000) into RentalOfficeRentalAgreementDrop
!insert (rentalAgreement10000, truck999) into RentalAgreementVehicle
!insert (rentalAgreement10000, companyCactusLogisticsInc) into RentalAgreementCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 32 | 0.00% |
| Multiplicities Errors | 0 | 5 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 2 | 2 | 100.00% |
| License Plates | 0 | 1 | 0.00% |
| Home Phones | 0 | 0 | 0.00% |

| Invalid Addresses | 
|---| 
```
1000 Arid Lane, Phoenix, AZ
```
```
900 Commerce Blvd, Tucson, AZ
```

## Category complex
```
!new RentalOffice('officeHarborViewRentals')
!officeHarborViewRentals.name := 'Harbor View Rentals'
!officeHarborViewRentals.number := 450
!officeHarborViewRentals.address := '200 Seaport Blvd, Boston, MA 02210'

!new Truck('truck5070')
!truck5070.id := 5070
!truck5070.registrationState := #CA
!truck5070.licensePlateNumber := 'MA9987'
!truck5070.vehicleTypeCode := #TRUCK
!truck5070.registrationLastMaintenanceDate := Date('2023-08-12')
!truck5070.expirationDate := Date('2024-08-12')
!truck5070.odometerReading := 60000
!truck5070.gasTankCapacity := 25.5
!truck5070.workingRadio := true
!truck5070.mileage := 11

!new Truck('truck5071')
!truck5071.id := 5071
!truck5071.registrationState := #CA
!truck5071.licensePlateNumber := 'NY2244'
!truck5071.vehicleTypeCode := #TRUCK
!truck5071.registrationLastMaintenanceDate := Date('2023-10-05')
!truck5071.expirationDate := Date('2024-10-05')
!truck5071.odometerReading := 45000
!truck5071.gasTankCapacity := 29.0
!truck5071.workingRadio := true
!truck5071.mileage := 12

!new Vehicle('coveredTrailer6085')
!coveredTrailer6085.id := 6085
!coveredTrailer6085.registrationState := #CA
!coveredTrailer6085.licensePlateNumber := 'CT6789'
!coveredTrailer6085.vehicleTypeCode := #COVERED_TRAILER
!coveredTrailer6085.registrationLastMaintenanceDate := Date('2023-09-15')
!coveredTrailer6085.expirationDate := Date('2024-09-15')

!new Individual('individualSophiaMartinez')
!individualSophiaMartinez.name := 'Sophia Martinez'
!individualSophiaMartinez.address := '987 Beacon St, Boston, MA 02115'
!individualSophiaMartinez.poorRisk := false
!individualSophiaMartinez.homePhone := '617-555-0214'
!individualSophiaMartinez.driverLicenseState := #CA
!individualSophiaMartinez.driverLicenseNumber := 11223344
!individualSophiaMartinez.driverLicenseExpirationDate := Date('2027-02-14')

!new Company('companyGreenTechLogistics')
!companyGreenTechLogistics.name := 'GreenTech Logistics'
!companyGreenTechLogistics.address := '345 Innovation Way, Cambridge, MA 02139'
!companyGreenTechLogistics.poorRisk := true
!companyGreenTechLogistics.idNumber := 3029

!new RentalAgreement('rentalAgreement11001')
!rentalAgreement11001.number := 11001
!rentalAgreement11001.rentalDate := Date('2024-04-10')
!rentalAgreement11001.anticipatedDuration := 5
!rentalAgreement11001.depositPaid := 120.0
!rentalAgreement11001.quotedDailyRate := 58.0
!rentalAgreement11001.quotedRatePerMile := 0.60

!new RentalAgreement('rentalAgreement12009')
!rentalAgreement12009.number := 12009
!rentalAgreement12009.rentalDate := Date('2024-05-20')
!rentalAgreement12009.anticipatedDuration := 20
!rentalAgreement12009.depositPaid := 700.0
!rentalAgreement12009.quotedDailyRate := 30.0
!rentalAgreement12009.quotedRatePerMile := 0.35

!new RentalAgreement('rentalAgreement12010')
!rentalAgreement12010.number := 12010
!rentalAgreement12010.rentalDate := Date('2024-06-01')
!rentalAgreement12010.anticipatedDuration := 15
!rentalAgreement12010.depositPaid := 450.0
!rentalAgreement12010.quotedDailyRate := 25.0
!rentalAgreement12010.quotedRatePerMile := 0.20

!insert (officeHarborViewRentals, truck5070) into RentalOfficeVehicle
!insert (officeHarborViewRentals, truck5071) into RentalOfficeVehicle
!insert (officeHarborViewRentals, coveredTrailer6085) into RentalOfficeVehicle

!insert (officeHarborViewRentals, rentalAgreement11001) into RentalOfficeRentalAgreementOrigin
!insert (officeHarborViewRentals, rentalAgreement12009) into RentalOfficeRentalAgreementOrigin
!insert (officeHarborViewRentals, rentalAgreement12010) into RentalOfficeRentalAgreementOrigin

!insert (officeHarborViewRentals, rentalAgreement11001) into RentalOfficeRentalAgreementDrop
!insert (officeHarborViewRentals, rentalAgreement12009) into RentalOfficeRentalAgreementDrop
!insert (officeHarborViewRentals, rentalAgreement12010) into RentalOfficeRentalAgreementDrop

!insert (rentalAgreement11001, truck5070) into RentalAgreementVehicle
!insert (rentalAgreement12009, truck5071) into RentalAgreementVehicle
!insert (rentalAgreement12010, coveredTrailer6085) into RentalAgreementVehicle

!insert (rentalAgreement11001, individualSophiaMartinez) into RentalAgreementCustomer
!insert (rentalAgreement12009, companyGreenTechLogistics) into RentalAgreementCustomer
!insert (rentalAgreement12010, companyGreenTechLogistics) into RentalAgreementCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 82 | 0.00% |
| Multiplicities Errors | 0 | 15 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 1 | 3 | 33.33% |
| License Plates | 0 | 3 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
345 Innovation Way, Cambridge, MA 02139
```

## Category edge
```
!new RentalOffice('officeHighPlainsStation')
!officeHighPlainsStation.name := 'High Plains Station'
!officeHighPlainsStation.number := 404
!officeHighPlainsStation.address := '525 Summit Way, Climbton, CO 80439'

!new Truck('truck89012')
!truck89012.id := 89012
!truck89012.registrationState := #CO
!truck89012.licensePlateNumber := 'CO-321-RST'
!truck89012.vehicleTypeCode := #TRUCK
!truck89012.registrationLastMaintenanceDate := Date('2023-07-15')
!truck89012.expirationDate := Date('2024-07-15')
!truck89012.odometerReading := 20000
!truck89012.gasTankCapacity := 80.0
!truck89012.workingRadio := true
!truck89012.mileage := 10

!new Individual('individualAlpineSlider')
!individualAlpineSlider.name := 'Alpine Slider'
!individualAlpineSlider.address := '123 Glacier Turn, River Valley, CO 80401'
!individualAlpineSlider.poorRisk := true
!individualAlpineSlider.homePhone := '+1-303-555-0987'
!individualAlpineSlider.driverLicenseState := #CO
!individualAlpineSlider.driverLicenseNumber := 456789012
!individualAlpineSlider.driverLicenseExpirationDate := Date('2026-03-15')

!new Company('companyPeakExpeditionsCo')
!companyPeakExpeditionsCo.name := 'Peak Expeditions Co.'
!companyPeakExpeditionsCo.address := '789 Winter Dr, Snowcap Loop, UT 84049'
!companyPeakExpeditionsCo.poorRisk := true
!companyPeakExpeditionsCo.idNumber := 667788990

!new RentalAgreement('rentalAgreement4007')
!rentalAgreement4007.number := 4007
!rentalAgreement4007.rentalDate := Date('2025-12-20')
!rentalAgreement4007.anticipatedDuration := 5
!rentalAgreement4007.depositPaid := 400.0
!rentalAgreement4007.quotedDailyRate := 150.0
!rentalAgreement4007.quotedRatePerMile := 3.5

!new RentalAgreement('rentalAgreement4008')
!rentalAgreement4008.number := 4008
!rentalAgreement4008.rentalDate := Date('2025-07-01')
!rentalAgreement4008.anticipatedDuration := 90
!rentalAgreement4008.depositPaid := 10000.0
!rentalAgreement4008.quotedDailyRate := 60.0
!rentalAgreement4008.quotedRatePerMile := 2.0

!insert (officeHighPlainsStation, truck89012) into RentalOfficeVehicle

!insert (officeHighPlainsStation, rentalAgreement4007) into RentalOfficeRentalAgreementOrigin
!insert (officeHighPlainsStation, rentalAgreement4008) into RentalOfficeRentalAgreementOrigin

!insert (officeHighPlainsStation, rentalAgreement4007) into RentalOfficeRentalAgreementDrop
!insert (officeHighPlainsStation, rentalAgreement4008) into RentalOfficeRentalAgreementDrop

!insert (rentalAgreement4007, truck89012) into RentalAgreementVehicle
!insert (rentalAgreement4008, truck89012) into RentalAgreementVehicle

!insert (rentalAgreement4007, individualAlpineSlider) into RentalAgreementCustomer
!insert (rentalAgreement4008, companyPeakExpeditionsCo) into RentalAgreementCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 51 | 0.00% |
| Multiplicities Errors | 0 | 9 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 3 | 3 | 100.00% |
| License Plates | 0 | 1 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
525 Summit Way, Climbton, CO 80439
```
```
123 Glacier Turn, River Valley, CO 80401
```
```
789 Winter Dr, Snowcap Loop, UT 84049
```

## Category invalid
```
!new RentalOffice('officeSanFranciscoBayAreaHub')
!officeSanFranciscoBayAreaHub.name := 'San Francisco Bay Area Hub'
!officeSanFranciscoBayAreaHub.number := 404
!officeSanFranciscoBayAreaHub.address := '101 Market St, San Francisco, CA'

!new Vehicle('coveredTrailer6004')
!coveredTrailer6004.id := 6004
!coveredTrailer6004.registrationState := #CA
!coveredTrailer6004.licensePlateNumber := 'CA1122GH'
!coveredTrailer6004.vehicleTypeCode := #COVERED_TRAILER
!coveredTrailer6004.registrationLastMaintenanceDate := Date('2023-09-05')
!coveredTrailer6004.expirationDate := Date('2024-09-04')

!new Individual('individualAishaKhan')
!individualAishaKhan.name := 'Aisha Khan'
!individualAishaKhan.address := '202 Lombard St, San Francisco, CA'
!individualAishaKhan.poorRisk := true
!individualAishaKhan.homePhone := '(415) 555-9988'
!individualAishaKhan.driverLicenseState := #CA
!individualAishaKhan.driverLicenseNumber := 55667788
!individualAishaKhan.driverLicenseExpirationDate := Date('2025-08-15')

!new Company('companyUrbanMoversInc')
!companyUrbanMoversInc.name := 'Urban Movers Inc.'
!companyUrbanMoversInc.address := '303 Silicon Valley Blvd, San Jose, CA'
!companyUrbanMoversInc.poorRisk := false
!companyUrbanMoversInc.idNumber := 10293847

!new RentalAgreement('rentalAgreement8004')
!rentalAgreement8004.number := 8004
!rentalAgreement8004.rentalDate := Date('2023-11-01')
!rentalAgreement8004.anticipatedDuration := 3
!rentalAgreement8004.depositPaid := 100.0
!rentalAgreement8004.quotedDailyRate := 50.0
!rentalAgreement8004.quotedRatePerMile := 0.30

!new RentalAgreement('rentalAgreement8005')
!rentalAgreement8005.number := 8005
!rentalAgreement8005.rentalDate := Date('2023-11-02')
!rentalAgreement8005.anticipatedDuration := 5
!rentalAgreement8005.depositPaid := 150.0
!rentalAgreement8005.quotedDailyRate := 60.0
!rentalAgreement8005.quotedRatePerMile := 0.35

!insert (officeSanFranciscoBayAreaHub, coveredTrailer6004) into RentalOfficeVehicle

!insert (officeSanFranciscoBayAreaHub, rentalAgreement8004) into RentalOfficeRentalAgreementOrigin
!insert (officeSanFranciscoBayAreaHub, rentalAgreement8005) into RentalOfficeRentalAgreementOrigin

!insert (officeSanFranciscoBayAreaHub, rentalAgreement8004) into RentalOfficeRentalAgreementDrop
!insert (officeSanFranciscoBayAreaHub, rentalAgreement8005) into RentalOfficeRentalAgreementDrop

!insert (rentalAgreement8004, coveredTrailer6004) into RentalAgreementVehicle
!insert (rentalAgreement8005, coveredTrailer6004) into RentalAgreementVehicle

!insert (rentalAgreement8004, individualAishaKhan) into RentalAgreementCustomer
!insert (rentalAgreement8005, companyUrbanMoversInc) into RentalAgreementCustomer
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 9 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 0 | 3 | 0.00% |
| License Plates | 0 | 1 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

## Generation 4 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 252 | 0.00% |
| Multiplicities Errors | 0 | 35 | 0.00% |
| Invariants Errors | 0 | 20 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 9 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 6 | 13 | 46.15% |
| License Plates | 0 | 8 | 0.00% |
| Home Phones | 0 | 3 | 0.00% |

| Invalid Addresses | 
|---| 
```
1000 Arid Lane, Phoenix, AZ
```
```
900 Commerce Blvd, Tucson, AZ
```
```
345 Innovation Way, Cambridge, MA 02139
```
```
525 Summit Way, Climbton, CO 80439
```
```
123 Glacier Turn, River Valley, CO 80401
```
```
789 Winter Dr, Snowcap Loop, UT 84049
```

# Generation 5
## Category baseline
```
!new RentalOffice('officeSaltLakeCityDepot')
!officeSaltLakeCityDepot.name := 'Salt Lake City Depot'
!officeSaltLakeCityDepot.number := 505
!officeSaltLakeCityDepot.address := '789 Mountain View Rd, Salt Lake City, UT 84103'

!new Vehicle('coveredTrailer008')
!coveredTrailer008.id := 308
!coveredTrailer008.registrationState := #CO
!coveredTrailer008.licensePlateNumber := 'UT2468CT'
!coveredTrailer008.vehicleTypeCode := #COVERED_TRAILER
!coveredTrailer008.registrationLastMaintenanceDate := Date('2023-03-29')
!coveredTrailer008.expirationDate := Date('2024-03-28')

!new Truck('truck009')
!truck009.id := 309
!truck009.registrationState := #CO
!truck009.licensePlateNumber := 'WY1234TR'
!truck009.vehicleTypeCode := #TRUCK
!truck009.registrationLastMaintenanceDate := Date('2023-02-10')
!truck009.expirationDate := Date('2024-02-09')
!truck009.odometerReading := 25000
!truck009.gasTankCapacity := 21.5
!truck009.workingRadio := false
!truck009.mileage := 40000

!new Individual('individualEmmaJohnson')
!individualEmmaJohnson.name := 'Emma Johnson'
!individualEmmaJohnson.address := '81 Cowboy Way, Jackson, WY 83001'
!individualEmmaJohnson.poorRisk := false
!individualEmmaJohnson.homePhone := '307-555-7856'
!individualEmmaJohnson.driverLicenseState := #CO
!individualEmmaJohnson.driverLicenseNumber := 876543210
!individualEmmaJohnson.driverLicenseExpirationDate := Date('2026-01-21')

!new RentalAgreement('rentalAgreement5005')
!rentalAgreement5005.number := 5005
!rentalAgreement5005.rentalDate := Date('2024-03-03')
!rentalAgreement5005.anticipatedDuration := 10
!rentalAgreement5005.depositPaid := 300.0
!rentalAgreement5005.quotedDailyRate := 55.0
!rentalAgreement5005.quotedRatePerMile := 0.35

!insert (officeSaltLakeCityDepot, coveredTrailer008) into RentalOfficeVehicle
!insert (officeSaltLakeCityDepot, truck009) into RentalOfficeVehicle

!insert (officeSaltLakeCityDepot, rentalAgreement5005) into RentalOfficeRentalAgreementOrigin
!insert (officeSaltLakeCityDepot, rentalAgreement5005) into RentalOfficeRentalAgreementDrop

!insert (rentalAgreement5005, truck009) into RentalAgreementVehicle
!insert (rentalAgreement5005, individualEmmaJohnson) into RentalAgreementCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 43 | 0.00% |
| Multiplicities Errors | 0 | 6 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 2 | 2 | 100.00% |
| License Plates | 0 | 2 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
789 Mountain View Rd, Salt Lake City, UT 84103
```
```
81 Cowboy Way, Jackson, WY 83001
```

## Category boundary
```
!new RentalOffice('officeArcticVenturesRentals')
!officeArcticVenturesRentals.name := 'Arctic Ventures Rentals'
!officeArcticVenturesRentals.number := 2500
!officeArcticVenturesRentals.address := '123 Frostbite Street, Fairbanks, AK'

!new Truck('truck200')
!truck200.id := 200
!truck200.registrationState := #AK
!truck200.licensePlateNumber := 'AK-COLD-200'
!truck200.vehicleTypeCode := #COVERED_TRAILER
!truck200.registrationLastMaintenanceDate := Date('2023-09-01')
!truck200.expirationDate := Date('2024-09-01')
!truck200.odometerReading := 50000
!truck200.gasTankCapacity := 70.0
!truck200.workingRadio := false
!truck200.mileage := 45000

!new RentalAgreement('rentalAgreement500')
!rentalAgreement500.number := 500
!rentalAgreement500.rentalDate := Date('2024-01-10')
!rentalAgreement500.anticipatedDuration := 15
!rentalAgreement500.depositPaid := 3000.0
!rentalAgreement500.quotedDailyRate := 200.0
!rentalAgreement500.quotedRatePerMile := 0.15

!new Individual('individualPolarExplorer')
!individualPolarExplorer.name := 'Polar Explorer'
!individualPolarExplorer.address := '55 Expedition Drive, Nome, AK'
!individualPolarExplorer.poorRisk := false
!individualPolarExplorer.homePhone := '555-EXP-ROAD'
!individualPolarExplorer.driverLicenseState := #AK
!individualPolarExplorer.driverLicenseNumber := 56781234
!individualPolarExplorer.driverLicenseExpirationDate := Date('2025-12-31')

!insert (officeArcticVenturesRentals, truck200) into RentalOfficeVehicle
!insert (officeArcticVenturesRentals, rentalAgreement500) into RentalOfficeRentalAgreementOrigin
!insert (officeArcticVenturesRentals, rentalAgreement500) into RentalOfficeRentalAgreementDrop
!insert (rentalAgreement500, truck200) into RentalAgreementVehicle
!insert (rentalAgreement500, individualPolarExplorer) into RentalAgreementCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 35 | 0.00% |
| Multiplicities Errors | 0 | 5 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 2 | 2 | 100.00% |
| License Plates | 0 | 1 | 0.00% |
| Home Phones | 1 | 1 | 100.00% |

| Invalid Addresses | 
|---| 
```
123 Frostbite Street, Fairbanks, AK
```
```
55 Expedition Drive, Nome, AK
```

| Invalid Home Phones | 
|---| 
```
555-EXP-ROAD
```

## Category complex
```
!new RentalOffice('officeCascadiaRentals')
!officeCascadiaRentals.name := 'Cascadia Rentals'
!officeCascadiaRentals.number := 560
!officeCascadiaRentals.address := '749 NW Portland St, Portland, OR 97209'

!new Truck('truck6090')
!truck6090.id := 6090
!truck6090.registrationState := #CA
!truck6090.licensePlateNumber := 'OR3344'
!truck6090.vehicleTypeCode := #TRUCK
!truck6090.registrationLastMaintenanceDate := Date('2023-11-01')
!truck6090.expirationDate := Date('2024-11-01')
!truck6090.odometerReading := 35000
!truck6090.gasTankCapacity := 21.0
!truck6090.workingRadio := true
!truck6090.mileage := 16

!new Truck('truck6091')
!truck6091.id := 6091
!truck6091.registrationState := #CA
!truck6091.licensePlateNumber := 'CA5588'
!truck6091.vehicleTypeCode := #TRUCK
!truck6091.registrationLastMaintenanceDate := Date('2023-09-10')
!truck6091.expirationDate := Date('2024-09-10')
!truck6091.odometerReading := 55000
!truck6091.gasTankCapacity := 27.5
!truck6091.workingRadio := false
!truck6091.mileage := 14

!new Vehicle('coveredTrailer7102')
!coveredTrailer7102.id := 7102
!coveredTrailer7102.registrationState := #CA
!coveredTrailer7102.licensePlateNumber := 'WA8923'
!coveredTrailer7102.vehicleTypeCode := #COVERED_TRAILER
!coveredTrailer7102.registrationLastMaintenanceDate := Date('2023-08-22')
!coveredTrailer7102.expirationDate := Date('2024-08-22')

!new Vehicle('coveredTrailer7110')
!coveredTrailer7110.id := 7110
!coveredTrailer7110.registrationState := #CA
!coveredTrailer7110.licensePlateNumber := 'ID1234'
!coveredTrailer7110.vehicleTypeCode := #COVERED_TRAILER
!coveredTrailer7110.registrationLastMaintenanceDate := Date('2023-07-15')
!coveredTrailer7110.expirationDate := Date('2024-07-15')

!new Individual('individualLiamAnderson')
!individualLiamAnderson.name := 'Liam Anderson'
!individualLiamAnderson.address := '345 Elm St, Portland, OR 97210'
!individualLiamAnderson.poorRisk := true
!individualLiamAnderson.homePhone := '503-555-0377'
!individualLiamAnderson.driverLicenseState := #CA
!individualLiamAnderson.driverLicenseNumber := 78904567
!individualLiamAnderson.driverLicenseExpirationDate := Date('2026-09-19')

!new Company('companyEvergreenAdventures')
!companyEvergreenAdventures.name := 'Evergreen Adventures'
!companyEvergreenAdventures.address := '112 Spruce Ave, Bend, OR 97702'
!companyEvergreenAdventures.poorRisk := false
!companyEvergreenAdventures.idNumber := 1015

!new Company('companySustainableSolutionsLLC')
!companySustainableSolutionsLLC.name := 'Sustainable Solutions LLC'
!companySustainableSolutionsLLC.address := '678 Greenway Dr, Eugene, OR 97401'
!companySustainableSolutionsLLC.poorRisk := true
!companySustainableSolutionsLLC.idNumber := 3030

!new RentalAgreement('rentalAgreement13004')
!rentalAgreement13004.number := 13004
!rentalAgreement13004.rentalDate := Date('2024-03-14')
!rentalAgreement13004.anticipatedDuration := 3
!rentalAgreement13004.depositPaid := 90.0
!rentalAgreement13004.quotedDailyRate := 45.0
!rentalAgreement13004.quotedRatePerMile := 0.50

!new RentalAgreement('rentalAgreement14007')
!rentalAgreement14007.number := 14007
!rentalAgreement14007.rentalDate := Date('2024-02-15')
!rentalAgreement14007.anticipatedDuration := 10
!rentalAgreement14007.depositPaid := 200.0
!rentalAgreement14007.quotedDailyRate := 32.0
!rentalAgreement14007.quotedRatePerMile := 0.25

!new RentalAgreement('rentalAgreement15008')
!rentalAgreement15008.number := 15008
!rentalAgreement15008.rentalDate := Date('2024-04-05')
!rentalAgreement15008.anticipatedDuration := 7
!rentalAgreement15008.depositPaid := 150.0
!rentalAgreement15008.quotedDailyRate := 28.0
!rentalAgreement15008.quotedRatePerMile := 0.30

!new RentalAgreement('rentalAgreement14009')
!rentalAgreement14009.number := 14009
!rentalAgreement14009.rentalDate := Date('2024-02-18')
!rentalAgreement14009.anticipatedDuration := 14
!rentalAgreement14009.depositPaid := 350.0
!rentalAgreement14009.quotedDailyRate := 30.0
!rentalAgreement14009.quotedRatePerMile := 0.40

!insert (officeCascadiaRentals, truck6090) into RentalOfficeVehicle
!insert (officeCascadiaRentals, truck6091) into RentalOfficeVehicle
!insert (officeCascadiaRentals, coveredTrailer7102) into RentalOfficeVehicle
!insert (officeCascadiaRentals, coveredTrailer7110) into RentalOfficeVehicle

!insert (officeCascadiaRentals, rentalAgreement13004) into RentalOfficeRentalAgreementOrigin
!insert (officeCascadiaRentals, rentalAgreement14007) into RentalOfficeRentalAgreementOrigin
!insert (officeCascadiaRentals, rentalAgreement15008) into RentalOfficeRentalAgreementOrigin
!insert (officeCascadiaRentals, rentalAgreement14009) into RentalOfficeRentalAgreementOrigin

!insert (officeCascadiaRentals, rentalAgreement13004) into RentalOfficeRentalAgreementDrop
!insert (officeCascadiaRentals, rentalAgreement14007) into RentalOfficeRentalAgreementDrop
!insert (officeCascadiaRentals, rentalAgreement15008) into RentalOfficeRentalAgreementDrop
!insert (officeCascadiaRentals, rentalAgreement14009) into RentalOfficeRentalAgreementDrop

!insert (rentalAgreement13004, truck6090) into RentalAgreementVehicle
!insert (rentalAgreement14007, coveredTrailer7102) into RentalAgreementVehicle
!insert (rentalAgreement15008, coveredTrailer7110) into RentalAgreementVehicle
!insert (rentalAgreement14009, truck6091) into RentalAgreementVehicle

!insert (rentalAgreement13004, individualLiamAnderson) into RentalAgreementCustomer
!insert (rentalAgreement14007, companyEvergreenAdventures) into RentalAgreementCustomer
!insert (rentalAgreement15008, companySustainableSolutionsLLC) into RentalAgreementCustomer
!insert (rentalAgreement14009, companyEvergreenAdventures) into RentalAgreementCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 106 | 0.00% |
| Multiplicities Errors | 0 | 20 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 4 | 4 | 100.00% |
| License Plates | 0 | 4 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
749 NW Portland St, Portland, OR 97209
```
```
345 Elm St, Portland, OR 97210
```
```
112 Spruce Ave, Bend, OR 97702
```
```
678 Greenway Dr, Eugene, OR 97401
```

## Category edge
```
!new RentalOffice('officeMetroShuttleRentals')
!officeMetroShuttleRentals.name := 'Metropolitan Shuttle Rentals'
!officeMetroShuttleRentals.number := 505
!officeMetroShuttleRentals.address := '1100 Urban Center Blvd, Metroville, NY 10001'

!new Vehicle('coveredTrailer90123')
!coveredTrailer90123.id := 90123
!coveredTrailer90123.registrationState := #CA
!coveredTrailer90123.licensePlateNumber := 'NY-567-UVW'
!coveredTrailer90123.vehicleTypeCode := #COVERED_TRAILER
!coveredTrailer90123.registrationLastMaintenanceDate := Date('2023-09-10')
!coveredTrailer90123.expirationDate := Date('2024-09-10')

!new Truck('truck90124')
!truck90124.id := 90124
!truck90124.registrationState := #CA
!truck90124.licensePlateNumber := 'NY-678-XYZ'
!truck90124.vehicleTypeCode := #TRUCK
!truck90124.registrationLastMaintenanceDate := Date('2023-10-15')
!truck90124.expirationDate := Date('2024-10-15')
!truck90124.odometerReading := 75000
!truck90124.gasTankCapacity := 70.0
!truck90124.workingRadio := true
!truck90124.mileage := 8

!new Individual('individualUrbanJohnson')
!individualUrbanJohnson.name := 'Urban Johnson'
!individualUrbanJohnson.address := '450 Cityscape Rd, Newtown, NJ 07601'
!individualUrbanJohnson.poorRisk := true
!individualUrbanJohnson.homePhone := '+1-201-555-0123'
!individualUrbanJohnson.driverLicenseState := #CA
!individualUrbanJohnson.driverLicenseNumber := 1456789012
!individualUrbanJohnson.driverLicenseExpirationDate := Date('2024-11-01')

!new Company('companyCityLogisticsPartners')
!companyCityLogisticsPartners.name := 'City Logistics Partners'
!companyCityLogisticsPartners.address := '902 Business Park, Suburbia, NJ 07083'
!companyCityLogisticsPartners.poorRisk := false
!companyCityLogisticsPartners.idNumber := 1122334455

!new RentalAgreement('rentalAgreement5009')
!rentalAgreement5009.number := 5009
!rentalAgreement5009.rentalDate := Date('2025-03-15')
!rentalAgreement5009.anticipatedDuration := 7
!rentalAgreement5009.depositPaid := 200.0
!rentalAgreement5009.quotedDailyRate := 90.0
!rentalAgreement5009.quotedRatePerMile := 2.2

!new RentalAgreement('rentalAgreement5010')
!rentalAgreement5010.number := 5010
!rentalAgreement5010.rentalDate := Date('2025-10-01')
!rentalAgreement5010.anticipatedDuration := 15
!rentalAgreement5010.depositPaid := 1200.0
!rentalAgreement5010.quotedDailyRate := 85.0
!rentalAgreement5010.quotedRatePerMile := 1.5

!insert (officeMetroShuttleRentals, coveredTrailer90123) into RentalOfficeVehicle
!insert (officeMetroShuttleRentals, truck90124) into RentalOfficeVehicle

!insert (officeMetroShuttleRentals, rentalAgreement5009) into RentalOfficeRentalAgreementOrigin
!insert (officeMetroShuttleRentals, rentalAgreement5010) into RentalOfficeRentalAgreementOrigin

!insert (officeMetroShuttleRentals, rentalAgreement5009) into RentalOfficeRentalAgreementDrop
!insert (officeMetroShuttleRentals, rentalAgreement5010) into RentalOfficeRentalAgreementDrop

!insert (rentalAgreement5009, coveredTrailer90123) into RentalAgreementVehicle
!insert (rentalAgreement5010, truck90124) into RentalAgreementVehicle

!insert (rentalAgreement5009, individualUrbanJohnson) into RentalAgreementCustomer
!insert (rentalAgreement5010, companyCityLogisticsPartners) into RentalAgreementCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 59 | 0.00% |
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
1100 Urban Center Blvd, Metroville, NY 10001
```
```
450 Cityscape Rd, Newtown, NJ 07601
```
```
902 Business Park, Suburbia, NJ 07083
```

## Category invalid
```
!new RentalOffice('officeNYCUptownDepot')
!officeNYCUptownDepot.name := 'New York City Uptown Depot'
!officeNYCUptownDepot.number := 505
!officeNYCUptownDepot.address := '252 Broadway, New York, NY'

!new Truck('truck7005')
!truck7005.id := 7005
!truck7005.registrationState := #CA
!truck7005.licensePlateNumber := 'NY4455IJ'
!truck7005.vehicleTypeCode := #TRUCK
!truck7005.odometerReading := 50456
!truck7005.gasTankCapacity := 20.5
!truck7005.workingRadio := true
!truck7005.mileage := 12
!truck7005.registrationLastMaintenanceDate := Date('2024-01-05')
!truck7005.expirationDate := Date('2023-12-31')

!new Individual('individualDerekColeman')
!individualDerekColeman.name := 'Derek Coleman'
!individualDerekColeman.address := '123 Harlem Ave, New York, NY'
!individualDerekColeman.poorRisk := true
!individualDerekColeman.homePhone := '(212) 555-7890'
!individualDerekColeman.driverLicenseState := #CA
!individualDerekColeman.driverLicenseNumber := 76543210
!individualDerekColeman.driverLicenseExpirationDate := Date('2023-11-30')

!new RentalAgreement('rentalAgreement9006')
!rentalAgreement9006.number := 9006
!rentalAgreement9006.rentalDate := Date('2023-11-25')
!rentalAgreement9006.anticipatedDuration := 10
!rentalAgreement9006.depositPaid := 50.0
!rentalAgreement9006.quotedDailyRate := 100.0
!rentalAgreement9006.quotedRatePerMile := 0.40

!insert (officeNYCUptownDepot, truck7005) into RentalOfficeVehicle
!insert (officeNYCUptownDepot, rentalAgreement9006) into RentalOfficeRentalAgreementOrigin
!insert (officeNYCUptownDepot, rentalAgreement9006) into RentalOfficeRentalAgreementDrop
!insert (rentalAgreement9006, truck7005) into RentalAgreementVehicle
!insert (rentalAgreement9006, individualDerekColeman) into RentalAgreementCustomer
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 5 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 1 | 2 | 50.00% |
| License Plates | 0 | 1 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
123 Harlem Ave, New York, NY
```

## Generation 5 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 278 | 0.00% |
| Multiplicities Errors | 0 | 41 | 0.00% |
| Invariants Errors | 0 | 20 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 5 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 12 | 13 | 92.31% |
| License Plates | 0 | 10 | 0.00% |
| Home Phones | 1 | 5 | 20.00% |

| Invalid Addresses | 
|---| 
```
789 Mountain View Rd, Salt Lake City, UT 84103
```
```
81 Cowboy Way, Jackson, WY 83001
```
```
123 Frostbite Street, Fairbanks, AK
```
```
55 Expedition Drive, Nome, AK
```
```
749 NW Portland St, Portland, OR 97209
```
```
345 Elm St, Portland, OR 97210
```
```
112 Spruce Ave, Bend, OR 97702
```
```
678 Greenway Dr, Eugene, OR 97401
```
```
1100 Urban Center Blvd, Metroville, NY 10001
```
```
450 Cityscape Rd, Newtown, NJ 07601
```
```
902 Business Park, Suburbia, NJ 07083
```
```
123 Harlem Ave, New York, NY
```

| Invalid Home Phones | 
|---| 
```
555-EXP-ROAD
```

# Generation 6
## Category baseline
```
!new RentalOffice('officeHoustonCentral')
!officeHoustonCentral.name := 'Houston Central'
!officeHoustonCentral.number := 606
!officeHoustonCentral.address := '101 Space Center Blvd, Houston, TX 77058'

!new Vehicle('coveredTrailer010')
!coveredTrailer010.id := 310
!coveredTrailer010.registrationState := #CA
!coveredTrailer010.licensePlateNumber := 'TX3210CT'
!coveredTrailer010.vehicleTypeCode := #COVERED_TRAILER
!coveredTrailer010.registrationLastMaintenanceDate := Date('2023-10-02')
!coveredTrailer010.expirationDate := Date('2024-10-01')

!new Truck('truck011')
!truck011.id := 311
!truck011.registrationState := #CA
!truck011.licensePlateNumber := 'LA5432TR'
!truck011.vehicleTypeCode := #TRUCK
!truck011.registrationLastMaintenanceDate := Date('2023-09-15')
!truck011.expirationDate := Date('2024-09-14')
!truck011.odometerReading := 1000
!truck011.gasTankCapacity := 20.0
!truck011.workingRadio := true
!truck011.mileage := 5000

!new Company('companyRapidReliefServices')
!companyRapidReliefServices.name := 'RapidRelief Services'
!companyRapidReliefServices.address := '400 Emergency Ave, Baton Rouge, LA 70801'
!companyRapidReliefServices.poorRisk := false
!companyRapidReliefServices.idNumber := 903456

!new RentalAgreement('rentalAgreement6006')
!rentalAgreement6006.number := 6006
!rentalAgreement6006.rentalDate := Date('2024-01-01')
!rentalAgreement6006.anticipatedDuration := 5
!rentalAgreement6006.depositPaid := 250.0
!rentalAgreement6006.quotedDailyRate := 65.0
!rentalAgreement6006.quotedRatePerMile := 0.2

!insert (officeHoustonCentral, coveredTrailer010) into RentalOfficeVehicle
!insert (officeHoustonCentral, truck011) into RentalOfficeVehicle

!insert (officeHoustonCentral, rentalAgreement6006) into RentalOfficeRentalAgreementOrigin
!insert (officeHoustonCentral, rentalAgreement6006) into RentalOfficeRentalAgreementDrop

!insert (rentalAgreement6006, coveredTrailer010) into RentalAgreementVehicle
!insert (rentalAgreement6006, companyRapidReliefServices) into RentalAgreementCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 40 | 0.00% |
| Multiplicities Errors | 0 | 6 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 2 | 2 | 100.00% |
| License Plates | 0 | 2 | 0.00% |
| Home Phones | 0 | 0 | 0.00% |

| Invalid Addresses | 
|---| 
```
101 Space Center Blvd, Houston, TX 77058
```
```
400 Emergency Ave, Baton Rouge, LA 70801
```

## Category boundary
```
!new RentalOffice('officeUrbanFleetRentals')
!officeUrbanFleetRentals.name := 'Urban Fleet Rentals'
!officeUrbanFleetRentals.number := 3001
!officeUrbanFleetRentals.address := '3001 Metropolis Drive, Atlanta, GA'

!new Truck('truck50')
!truck50.id := 50
!truck50.registrationState := #CA
!truck50.licensePlateNumber := 'GA-MID-050'
!truck50.vehicleTypeCode := #TRUCK
!truck50.registrationLastMaintenanceDate := Date('2023-06-15')
!truck50.expirationDate := Date('2024-06-15')
!truck50.odometerReading := 2000
!truck50.gasTankCapacity := 65.0
!truck50.workingRadio := true
!truck50.mileage := 2000

!new RentalAgreement('rentalAgreement250')
!rentalAgreement250.number := 250
!rentalAgreement250.rentalDate := Date('2023-12-25')
!rentalAgreement250.anticipatedDuration := 3
!rentalAgreement250.depositPaid := 100.0
!rentalAgreement250.quotedDailyRate := 49.99
!rentalAgreement250.quotedRatePerMile := 0.05

!new Company('companyMetroMoversLLC')
!companyMetroMoversLLC.name := 'Metro Movers LLC'
!companyMetroMoversLLC.address := '71 Peachtree Plaza, Atlanta, GA'
!companyMetroMoversLLC.poorRisk := true
!companyMetroMoversLLC.idNumber := 123456789

!insert (officeUrbanFleetRentals, truck50) into RentalOfficeVehicle
!insert (officeUrbanFleetRentals, rentalAgreement250) into RentalOfficeRentalAgreementOrigin
!insert (officeUrbanFleetRentals, rentalAgreement250) into RentalOfficeRentalAgreementDrop
!insert (rentalAgreement250, truck50) into RentalAgreementVehicle
!insert (rentalAgreement250, companyMetroMoversLLC) into RentalAgreementCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 32 | 0.00% |
| Multiplicities Errors | 0 | 5 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 1 | 2 | 50.00% |
| License Plates | 0 | 1 | 0.00% |
| Home Phones | 0 | 0 | 0.00% |

| Invalid Addresses | 
|---| 
```
3001 Metropolis Drive, Atlanta, GA
```

## Category complex
```
!new RentalOffice('officeLoneStarRentals')
!officeLoneStarRentals.name := 'Lone Star Rentals'
!officeLoneStarRentals.number := 675
!officeLoneStarRentals.address := '3500 S Congress Ave, Austin, TX 78704'

!new Truck('truck8005')
!truck8005.id := 8005
!truck8005.registrationState := #CA
!truck8005.licensePlateNumber := 'TX7890'
!truck8005.vehicleTypeCode := #TRUCK
!truck8005.registrationLastMaintenanceDate := Date('2023-04-22')
!truck8005.expirationDate := Date('2024-04-22')
!truck8005.odometerReading := 80000
!truck8005.gasTankCapacity := 23.0
!truck8005.workingRadio := true
!truck8005.mileage := 13

!new Truck('truck8006')
!truck8006.id := 8006
!truck8006.registrationState := #CA
!truck8006.licensePlateNumber := 'LA0021'
!truck8006.vehicleTypeCode := #TRUCK
!truck8006.registrationLastMaintenanceDate := Date('2023-05-30')
!truck8006.expirationDate := Date('2024-05-30')
!truck8006.odometerReading := 65000
!truck8006.gasTankCapacity := 24.0
!truck8006.workingRadio := true
!truck8006.mileage := 14

!new Vehicle('coveredTrailer9010')
!coveredTrailer9010.id := 9010
!coveredTrailer9010.registrationState := #CA
!coveredTrailer9010.licensePlateNumber := 'TX4512'
!coveredTrailer9010.vehicleTypeCode := #COVERED_TRAILER
!coveredTrailer9010.registrationLastMaintenanceDate := Date('2023-06-10')
!coveredTrailer9010.expirationDate := Date('2024-06-10')

!new Vehicle('coveredTrailer9011')
!coveredTrailer9011.id := 9011
!coveredTrailer9011.registrationState := #CA
!coveredTrailer9011.licensePlateNumber := 'AR2233'
!coveredTrailer9011.vehicleTypeCode := #COVERED_TRAILER
!coveredTrailer9011.registrationLastMaintenanceDate := Date('2023-07-20')
!coveredTrailer9011.expirationDate := Date('2024-07-20')

!new Individual('individualEmmaRobinson')
!individualEmmaRobinson.name := 'Emma Robinson'
!individualEmmaRobinson.address := '789 W 5th St, Austin, TX 78701'
!individualEmmaRobinson.poorRisk := false
!individualEmmaRobinson.homePhone := '512-555-0144'
!individualEmmaRobinson.driverLicenseState := #CA
!individualEmmaRobinson.driverLicenseNumber := 55669988
!individualEmmaRobinson.driverLicenseExpirationDate := Date('2026-11-25')

!new Company('companyLiveMusicTransport')
!companyLiveMusicTransport.name := 'Live Music Transport'
!companyLiveMusicTransport.address := '1236 Sound Avenue, Austin, TX 78705'
!companyLiveMusicTransport.poorRisk := false
!companyLiveMusicTransport.idNumber := 5050

!new Company('companyTechConDistributors')
!companyTechConDistributors.name := 'TechCon Distributors'
!companyTechConDistributors.address := '114 Amplify Ct, Austin, TX 78744'
!companyTechConDistributors.poorRisk := true
!companyTechConDistributors.idNumber := 5051

!new RentalAgreement('rentalAgreement16002')
!rentalAgreement16002.number := 16002
!rentalAgreement16002.rentalDate := Date('2024-01-10')
!rentalAgreement16002.anticipatedDuration := 4
!rentalAgreement16002.depositPaid := 100.0
!rentalAgreement16002.quotedDailyRate := 55.0
!rentalAgreement16002.quotedRatePerMile := 0.50

!new RentalAgreement('rentalAgreement17003')
!rentalAgreement17003.number := 17003
!rentalAgreement17003.rentalDate := Date('2024-01-22')
!rentalAgreement17003.anticipatedDuration := 6
!rentalAgreement17003.depositPaid := 300.0
!rentalAgreement17003.quotedDailyRate := 40.0
!rentalAgreement17003.quotedRatePerMile := 0.35

!new RentalAgreement('rentalAgreement18004')
!rentalAgreement18004.number := 18004
!rentalAgreement18004.rentalDate := Date('2024-02-15')
!rentalAgreement18004.anticipatedDuration := 8
!rentalAgreement18004.depositPaid := 250.0
!rentalAgreement18004.quotedDailyRate := 50.0
!rentalAgreement18004.quotedRatePerMile := 0.38

!new RentalAgreement('rentalAgreement17004')
!rentalAgreement17004.number := 17004
!rentalAgreement17004.rentalDate := Date('2024-03-01')
!rentalAgreement17004.anticipatedDuration := 5
!rentalAgreement17004.depositPaid := 120.0
!rentalAgreement17004.quotedDailyRate := 33.0
!rentalAgreement17004.quotedRatePerMile := 0.30

!insert (officeLoneStarRentals, truck8005) into RentalOfficeVehicle
!insert (officeLoneStarRentals, truck8006) into RentalOfficeVehicle
!insert (officeLoneStarRentals, coveredTrailer9010) into RentalOfficeVehicle
!insert (officeLoneStarRentals, coveredTrailer9011) into RentalOfficeVehicle

!insert (officeLoneStarRentals, rentalAgreement16002) into RentalOfficeRentalAgreementOrigin
!insert (officeLoneStarRentals, rentalAgreement17003) into RentalOfficeRentalAgreementOrigin
!insert (officeLoneStarRentals, rentalAgreement18004) into RentalOfficeRentalAgreementOrigin
!insert (officeLoneStarRentals, rentalAgreement17004) into RentalOfficeRentalAgreementOrigin

!insert (officeLoneStarRentals, rentalAgreement16002) into RentalOfficeRentalAgreementDrop
!insert (officeLoneStarRentals, rentalAgreement17003) into RentalOfficeRentalAgreementDrop
!insert (officeLoneStarRentals, rentalAgreement18004) into RentalOfficeRentalAgreementDrop
!insert (officeLoneStarRentals, rentalAgreement17004) into RentalOfficeRentalAgreementDrop

!insert (rentalAgreement16002, truck8005) into RentalAgreementVehicle
!insert (rentalAgreement17003, coveredTrailer9010) into RentalAgreementVehicle
!insert (rentalAgreement18004, truck8006) into RentalAgreementVehicle
!insert (rentalAgreement17004, coveredTrailer9011) into RentalAgreementVehicle

!insert (rentalAgreement16002, individualEmmaRobinson) into RentalAgreementCustomer
!insert (rentalAgreement17003, companyLiveMusicTransport) into RentalAgreementCustomer
!insert (rentalAgreement18004, companyTechConDistributors) into RentalAgreementCustomer
!insert (rentalAgreement17004, companyLiveMusicTransport) into RentalAgreementCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 106 | 0.00% |
| Multiplicities Errors | 0 | 20 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 2 | 4 | 50.00% |
| License Plates | 0 | 4 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
1236 Sound Avenue, Austin, TX 78705
```
```
114 Amplify Ct, Austin, TX 78744
```

## Category edge
```
!new RentalOffice('officeCoastalEmergencyRentals')
!officeCoastalEmergencyRentals.name := 'Coastal Emergency Rentals'
!officeCoastalEmergencyRentals.number := 606
!officeCoastalEmergencyRentals.address := '120 Shoreline Dr, Harbor Town, FL 33001'

!new Truck('truck12345')
!truck12345.id := 12345
!truck12345.registrationState := #FL
!truck12345.licensePlateNumber := 'FL-987-ZYX'
!truck12345.vehicleTypeCode := #TRUCK
!truck12345.registrationLastMaintenanceDate := Date('2023-03-01')
!truck12345.expirationDate := Date('2024-03-01')
!truck12345.odometerReading := 120000
!truck12345.gasTankCapacity := 100.0
!truck12345.workingRadio := false
!truck12345.mileage := 7

!new Individual('individualSarahBeachcomber')
!individualSarahBeachcomber.name := 'Sarah Beachcomber'
!individualSarahBeachcomber.address := '781 Ocean View Ave, Seaside Bay, FL 33301'
!individualSarahBeachcomber.poorRisk := false
!individualSarahBeachcomber.homePhone := '+1-754-555-0458'
!individualSarahBeachcomber.driverLicenseState := #FL
!individualSarahBeachcomber.driverLicenseNumber := 789012345
!individualSarahBeachcomber.driverLicenseExpirationDate := Date('2027-12-31')

!new Company('companyCoastalReliefCorps')
!companyCoastalReliefCorps.name := 'Coastal Relief Corps'
!companyCoastalReliefCorps.address := '500 Relief Rd, Sunshine Plaza, FL 33401'
!companyCoastalReliefCorps.poorRisk := false
!companyCoastalReliefCorps.idNumber := 334455667

!new RentalAgreement('rentalAgreement6011')
!rentalAgreement6011.number := 6011
!rentalAgreement6011.rentalDate := Date('2025-09-05')
!rentalAgreement6011.anticipatedDuration := 14
!rentalAgreement6011.depositPaid := 100.0
!rentalAgreement6011.quotedDailyRate := 50.0
!rentalAgreement6011.quotedRatePerMile := 1.0

!new RentalAgreement('rentalAgreement6012')
!rentalAgreement6012.number := 6012
!rentalAgreement6012.rentalDate := Date('2025-11-10')
!rentalAgreement6012.anticipatedDuration := 60
!rentalAgreement6012.depositPaid := 0.0
!rentalAgreement6012.quotedDailyRate := 30.0
!rentalAgreement6012.quotedRatePerMile := 0.5

!insert (officeCoastalEmergencyRentals, truck12345) into RentalOfficeVehicle

!insert (officeCoastalEmergencyRentals, rentalAgreement6011) into RentalOfficeRentalAgreementOrigin
!insert (officeCoastalEmergencyRentals, rentalAgreement6012) into RentalOfficeRentalAgreementOrigin

!insert (officeCoastalEmergencyRentals, rentalAgreement6011) into RentalOfficeRentalAgreementDrop
!insert (officeCoastalEmergencyRentals, rentalAgreement6012) into RentalOfficeRentalAgreementDrop

!insert (rentalAgreement6011, truck12345) into RentalAgreementVehicle
!insert (rentalAgreement6012, truck12345) into RentalAgreementVehicle

!insert (rentalAgreement6011, individualSarahBeachcomber) into RentalAgreementCustomer
!insert (rentalAgreement6012, companyCoastalReliefCorps) into RentalAgreementCustomer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 51 | 0.00% |
| Multiplicities Errors | 0 | 9 | 0.00% |
| Invariants Errors | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 3 | 3 | 100.00% |
| License Plates | 0 | 1 | 0.00% |
| Home Phones | 0 | 1 | 0.00% |

| Invalid Addresses | 
|---| 
```
120 Shoreline Dr, Harbor Town, FL 33001
```
```
781 Ocean View Ave, Seaside Bay, FL 33301
```
```
500 Relief Rd, Sunshine Plaza, FL 33401
```

## Category invalid
```
!new RentalOffice('officeDenverMountainBase')
!officeDenverMountainBase.name := 'Denver Mountain Base Office'
!officeDenverMountainBase.number := 606
!officeDenverMountainBase.address := '404 Colfax Ave, Denver, CO'

!new Vehicle('coveredTrailer8006')
!coveredTrailer8006.id := 8006
!coveredTrailer8006.registrationState := #CO
!coveredTrailer8006.licensePlateNumber := 'CO6677KL'
!coveredTrailer8006.vehicleTypeCode := #COVERED_TRAILER
!coveredTrailer8006.registrationLastMaintenanceDate := Date('2023-02-14')
!coveredTrailer8006.expirationDate := Date('2023-03-14')

!new Company('companyRockyMountainLogistics')
!companyRockyMountainLogistics.name := 'Rocky Mountain Logistics'
!companyRockyMountainLogistics.address := '123 Tech Park Dr, Boulder, CO'
!companyRockyMountainLogistics.poorRisk := false
!companyRockyMountainLogistics.idNumber := 19283746

!new RentalAgreement('rentalAgreement10007')
!rentalAgreement10007.number := 10007
!rentalAgreement10007.rentalDate := Date('2022-12-01')
!rentalAgreement10007.anticipatedDuration := 365
!rentalAgreement10007.depositPaid := 400.0
!rentalAgreement10007.quotedDailyRate := 40.0
!rentalAgreement10007.quotedRatePerMile := 0.15

!insert (officeDenverMountainBase, coveredTrailer8006) into RentalOfficeVehicle

!insert (officeDenverMountainBase, rentalAgreement10007) into RentalOfficeRentalAgreementOrigin
!insert (officeDenverMountainBase, rentalAgreement10007) into RentalOfficeRentalAgreementDrop

!insert (rentalAgreement10007, coveredTrailer8006) into RentalAgreementVehicle
!insert (rentalAgreement10007, companyRockyMountainLogistics) into RentalAgreementCustomer
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 5 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 1 | 2 | 50.00% |
| License Plates | 0 | 1 | 0.00% |
| Home Phones | 0 | 0 | 0.00% |

| Invalid Addresses | 
|---| 
```
123 Tech Park Dr, Boulder, CO
```

## Generation 6 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 257 | 0.00% |
| Multiplicities Errors | 0 | 40 | 0.00% |
| Invariants Errors | 0 | 20 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 5 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 5 | 0.00% |

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 9 | 13 | 69.23% |
| License Plates | 0 | 9 | 0.00% |
| Home Phones | 0 | 2 | 0.00% |

| Invalid Addresses | 
|---| 
```
101 Space Center Blvd, Houston, TX 77058
```
```
400 Emergency Ave, Baton Rouge, LA 70801
```
```
3001 Metropolis Drive, Atlanta, GA
```
```
1236 Sound Avenue, Austin, TX 78705
```
```
114 Amplify Ct, Austin, TX 78744
```
```
120 Shoreline Dr, Harbor Town, FL 33001
```
```
781 Ocean View Ave, Seaside Bay, FL 33301
```
```
500 Relief Rd, Sunshine Plaza, FL 33401
```
```
123 Tech Park Dr, Boulder, CO
```

# Summary for all generations
| Summary | Value | 
|---|---| 
| Model | GPT_4O | 
| Type | CoT | 
| System | vehiclerental | 
| Number of generations | 6 | 

| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 21 | 1495 | 1.40% |
| Multiplicities Errors | 0 | 216 | 0.00% |
| Invariants Errors | 0 | 120 | 0.00% |

| Syntax Errors | 
|---| 
```
<input>:1:0: generation of expression `#MA' failed, with following error:
```
```
<input>:1:31: Undefined enumeration literal `MA'.
```
```
<input>:1:0: generation of expression `#MA' failed, with following error:
```
```
<input>:1:0: generation of expression `#TX' failed, with following error:
```
```
<input>:1:40: Undefined enumeration literal `TX'.
```
```
<input>:1:0: generation of expression `#NY' failed, with following error:
```
```
<input>:1:0: generation of expression `#WY' failed, with following error:
```
```
<input>:1:0: generation of expression `#TX' failed, with following error:
```
```
<input>:1:0: generation of expression `#IL' failed, with following error:
```
```
<input>:1:33: Undefined enumeration literal `IL'.
```
```
<input>:1:0: generation of expression `#IN' failed, with following error:
```
```
<input>:1:42: Undefined enumeration literal `IN'.
```
```
<input>:1:0: generation of expression `#KY' failed, with following error:
```
```
<input>:1:0: generation of expression `#WA' failed, with following error:
```
```
<input>:1:0: generation of expression `#NY' failed, with following error:
```
```
<input>:1:40: Undefined enumeration literal `NY'.
```
```
<input>:1:0: generation of expression `#TX' failed, with following error:
```
```
<input>:1:31: Undefined enumeration literal `TX'.
```
```
<input>:1:0: generation of expression `#NY' failed, with following error:
```
```
<input>:1:0: generation of expression `#NV' failed, with following error:
```
```
<input>:1:0: generation of expression `#MA' failed, with following error:
```

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 35 | 2.86% |
| Invariants Errors (Not included on General) | 0 | 30 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `RentalAgreementCustomer':
  Object `rentalAgreement5001' of class `RentalAgreement' is connected to 2 objects of class `Customer'
  at association end `customer' but the multiplicity is specified as `1'.
```

| VehicleRental | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Addresses | 51 | 76 | 67.11% |
| License Plates | 2 | 50 | 4.00% |
| Home Phones | 1 | 22 | 4.55% |

| Invalid Addresses | 
|---| 
```
456 Elm St, Boston, MA 02110
```
```
123 Lone Star Road, Austin, TX
```
```
456 Empty Lane, Nowhere, NY
```
```
123 Silicon Valley Blvd, Palo Alto, CA 94301
```
```
123 Mountain Top Lane, Isolation, WY 82000
```
```
789 Cliffside Drive, Alpine, CO 80420
```
```
45 Boulder Front, Summit City, CO 80001
```
```
456 Little Havana, Miami, FL
```
```
100 Corporate Park, Los Angeles, CA 90001
```
```
999 Summit Avenue, Denver, CO
```
```
999 Builder\
```
```
456 Aspen Lane, Boulder, CO 80302
```
```
789 Peak Dr, Denver, CO 80202
```
```
369 Border Loop, Tristate Area, IL-IN-KY 62000
```
```
150 Route Road, Crossroads, KY 41001
```
```
312 Interstate Parkway, Commerce, IL 60007
```
```
321 Capitol Hill, Seattle, WA
```
```
500 Coastal Drive, Miami, FL
```
```
123 Bayshore Dr, Miami, FL 33131
```
```
987 Ocean Front, Miami Beach, FL 33140
```
```
477 Oasis Dr, Mirage City, NV 89001
```
```
900 Windy Path, Sun Valley, AZ 85001
```
```
101 Solar Field, Desert Outpost, CA 93501
```
```
789 Financial District, Boston, MA
```
```
1000 Arid Lane, Phoenix, AZ
```
```
900 Commerce Blvd, Tucson, AZ
```
```
345 Innovation Way, Cambridge, MA 02139
```
```
525 Summit Way, Climbton, CO 80439
```
```
123 Glacier Turn, River Valley, CO 80401
```
```
789 Winter Dr, Snowcap Loop, UT 84049
```
```
789 Mountain View Rd, Salt Lake City, UT 84103
```
```
81 Cowboy Way, Jackson, WY 83001
```
```
123 Frostbite Street, Fairbanks, AK
```
```
55 Expedition Drive, Nome, AK
```
```
749 NW Portland St, Portland, OR 97209
```
```
345 Elm St, Portland, OR 97210
```
```
112 Spruce Ave, Bend, OR 97702
```
```
678 Greenway Dr, Eugene, OR 97401
```
```
1100 Urban Center Blvd, Metroville, NY 10001
```
```
450 Cityscape Rd, Newtown, NJ 07601
```
```
902 Business Park, Suburbia, NJ 07083
```
```
123 Harlem Ave, New York, NY
```
```
101 Space Center Blvd, Houston, TX 77058
```
```
400 Emergency Ave, Baton Rouge, LA 70801
```
```
3001 Metropolis Drive, Atlanta, GA
```
```
1236 Sound Avenue, Austin, TX 78705
```
```
114 Amplify Ct, Austin, TX 78744
```
```
120 Shoreline Dr, Harbor Town, FL 33001
```
```
781 Ocean View Ave, Seaside Bay, FL 33301
```
```
500 Relief Rd, Sunshine Plaza, FL 33401
```
```
123 Tech Park Dr, Boulder, CO
```

| Invalid License Plates | 
|---| 
```
TX-0001-EDGE
```
```
FL-ZERO-PLATE
```

| Invalid Home Phones | 
|---| 
```
555-EXP-ROAD
```

