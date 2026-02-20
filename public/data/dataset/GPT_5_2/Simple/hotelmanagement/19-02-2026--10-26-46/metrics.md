# Generation 1
```
!new Booking('booking1')
!booking1.startDate := '2026-03-10'
!booking1.endDate := '2026-03-13'
!booking1.canceled := false
!booking1.bookingId := 1001
!booking1.confirmed := true

!new Customer('customer1')
!customer1.firstName := 'Alice'
!customer1.lastName := 'Nguyen'

!new RoomReservation('rr1')
!rr1.checkInDate := '2026-03-10'
!rr1.checkOutDate := '2026-03-12'

!new RoomReservation('rr2')
!rr2.checkInDate := '2026-03-10'
!rr2.checkOutDate := '2026-03-13'

!new Room('room101')
!room101.roomNumber := 101
!room101.numBeds := 1
!room101.pricePerNight := 95.0
!room101.occupied := false
!room101.blocked := true

!new Room('room201')
!room201.roomNumber := 201
!room201.numBeds := 2
!room201.pricePerNight := 160.0
!room201.occupied := false
!room201.blocked := true

!new Room('room202')
!room202.roomNumber := 202
!room202.numBeds := 2
!room202.pricePerNight := 160.0
!room202.occupied := false
!room202.blocked := true

!new RoomExtra('extraBreakfast')
!extraBreakfast.price := 24.0
!extraBreakfast.description := 'Breakfast package'

!new RoomExtra('extraParking')
!extraParking.price := 15.0
!extraParking.description := 'Parking (1 vehicle)'

!new RoomExtra('extraSpa')
!extraSpa.price := 60.0
!extraSpa.description := 'Spa access (day pass)'

!new Bill('bill1')
!bill1.billId := 5001
!bill1.price := 229.0

!new Bill('bill2')
!bill2.billId := 5002
!bill2.price := 1020.0

!insert (booking1, customer1) into BookingCustomer
!insert (booking1, rr1) into BookingRoomReservation
!insert (booking1, rr2) into BookingRoomReservation
!insert (rr1, room101) into RoomReservationRoom
!insert (rr2, room201) into RoomReservationRoom
!insert (rr2, room202) into RoomReservationRoom
!insert (rr1, extraBreakfast) into RoomReservationExtras
!insert (rr1, extraParking) into RoomReservationExtras
!insert (rr2, extraSpa) into RoomReservationExtras
!insert (bill1, rr1) into BillRoomReservation
!insert (bill2, rr2) into BillRoomReservation
!insert (booking1, bill1) into BookingBill
!insert (booking1, bill2) into BookingBill

!new Booking('booking2')
!booking2.startDate := '2026-04-01'
!booking2.endDate := '2026-04-05'
!booking2.canceled := true
!booking2.bookingId := 1002
!booking2.confirmed := false

!new Customer('customer2')
!customer2.firstName := 'Marco'
!customer2.lastName := 'Silva'

!insert (booking2, customer2) into BookingCustomer

!new Booking('booking3')
!booking3.startDate := '2026-05-20'
!booking3.endDate := '2026-05-22'
!booking3.canceled := false
!booking3.bookingId := 1003
!booking3.confirmed := true

!new Customer('customer3')
!customer3.firstName := 'Priya'
!customer3.lastName := 'Kumar'

!new RoomReservation('rr3')
!rr3.checkInDate := '2026-05-20'
!rr3.checkOutDate := '2026-05-22'

!new Room('room305')
!room305.roomNumber := 305
!room305.numBeds := 1
!room305.pricePerNight := 110.0
!room305.occupied := false
!room305.blocked := true

!new Bill('bill3')
!bill3.billId := 5003
!bill3.price := 220.0

!insert (booking3, customer3) into BookingCustomer
!insert (booking3, rr3) into BookingRoomReservation
!insert (rr3, room305) into RoomReservationRoom
!insert (bill3, rr3) into BillRoomReservation
!insert (booking3, bill3) into BookingBill

!new FreeRoomTypesDTO('dtoSingle')
!dtoSingle.roomTypeDescription := 'Single room (city view)'
!dtoSingle.numBeds := 1
!dtoSingle.pricePerNight := 95.0
!dtoSingle.numFreeRooms := 7

!new FreeRoomTypesDTO('dtoDouble')
!dtoDouble.roomTypeDescription := 'Double room (standard)'
!dtoDouble.numBeds := 2
!dtoDouble.pricePerNight := 160.0
!dtoDouble.numFreeRooms := 3

!new FreeRoomTypesDTO('dtoSuite')
!dtoSuite.roomTypeDescription := 'Junior suite (balcony)'
!dtoSuite.numBeds := 2
!dtoSuite.pricePerNight := 245.0
!dtoSuite.numFreeRooms := 1
```
## Generation 1 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 112 | 0.00% |
| Multiplicities Errors | 0 | 19 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 2 | 0.00% |
| checkOutDate <= endDate | 0 | 2 | 0.00% |

# Generation 2
```
!new Booking('booking4')
!booking4.startDate := '2026-06-14'
!booking4.endDate := '2026-06-21'
!booking4.canceled := false
!booking4.bookingId := 2001
!booking4.confirmed := true

!new Customer('customer4')
!customer4.firstName := 'Hiro'
!customer4.lastName := 'Tanaka'

!new RoomReservation('rr4')
!rr4.checkInDate := '2026-06-14'
!rr4.checkOutDate := '2026-06-18'

!new RoomReservation('rr5')
!rr5.checkInDate := '2026-06-18'
!rr5.checkOutDate := '2026-06-21'

!new Room('room410')
!room410.roomNumber := 410
!room410.numBeds := 3
!room410.pricePerNight := 240.0
!room410.occupied := false
!room410.blocked := true

!new Room('room411')
!room411.roomNumber := 411
!room411.numBeds := 3
!room411.pricePerNight := 240.0
!room411.occupied := false
!room411.blocked := true

!new Room('room120')
!room120.roomNumber := 120
!room120.numBeds := 1
!room120.pricePerNight := 105.0
!room120.occupied := false
!room120.blocked := true

!new RoomExtra('extraAirportPickup')
!extraAirportPickup.price := 80.0
!extraAirportPickup.description := 'Airport pickup (one-way)'

!new RoomExtra('extraLateCheckout')
!extraLateCheckout.price := 40.0
!extraLateCheckout.description := 'Late checkout'

!new RoomExtra('extraLaundry')
!extraLaundry.price := 0.0
!extraLaundry.description := 'Laundry voucher (promo)'

!new Bill('bill4')
!bill4.billId := 6001
!bill4.price := 1200.0

!new Bill('bill5')
!bill5.billId := 6002
!bill5.price := 395.0

!insert (booking4, customer4) into BookingCustomer
!insert (booking4, rr4) into BookingRoomReservation
!insert (booking4, rr5) into BookingRoomReservation

!insert (rr4, room410) into RoomReservationRoom
!insert (rr4, room411) into RoomReservationRoom
!insert (rr5, room120) into RoomReservationRoom

!insert (rr4, extraAirportPickup) into RoomReservationExtras
!insert (rr4, extraLaundry) into RoomReservationExtras
!insert (rr5, extraLateCheckout) into RoomReservationExtras

!insert (bill4, rr4) into BillRoomReservation
!insert (bill5, rr5) into BillRoomReservation

!insert (booking4, bill4) into BookingBill
!insert (booking4, bill5) into BookingBill

!new FreeRoomTypesDTO('dtoFamily')
!dtoFamily.roomTypeDescription := 'Family room (3 beds)'
!dtoFamily.numBeds := 3
!dtoFamily.pricePerNight := 240.0
!dtoFamily.numFreeRooms := 2

!new FreeRoomTypesDTO('dtoEconomySingle')
!dtoEconomySingle.roomTypeDescription := 'Economy single (courtyard)'
!dtoEconomySingle.numBeds := 1
!dtoEconomySingle.pricePerNight := 105.0
!dtoEconomySingle.numFreeRooms := 9
```
## Generation 2 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 71 | 0.00% |
| Multiplicities Errors | 0 | 13 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

# Generation 3
```
!new Booking('booking5')
!booking5.startDate := '2026-07-02'
!booking5.endDate := '2026-07-10'
!booking5.canceled := false
!booking5.bookingId := 3001
!booking5.confirmed := true

!new Customer('customer5')
!customer5.firstName := 'Sara'
!customer5.lastName := 'Connor'

!insert (booking5, customer5) into BookingCustomer

!new RoomReservation('rr6')
!rr6.checkInDate := '2026-07-02'
!rr6.checkOutDate := '2026-07-05'

!new RoomReservation('rr7')
!rr7.checkInDate := '2026-07-05'
!rr7.checkOutDate := '2026-07-10'

!insert (booking5, rr6) into BookingRoomReservation
!insert (booking5, rr7) into BookingRoomReservation

!new Room('room515')
!room515.roomNumber := 515
!room515.numBeds := 2
!room515.pricePerNight := 180.0
!room515.occupied := true
!room515.blocked := false

!new Room('room212')
!room212.roomNumber := 212
!room212.numBeds := 1
!room212.pricePerNight := 130.0
!room212.occupied := true
!room212.blocked := false

!insert (rr6, room515) into RoomReservationRoom
!insert (rr7, room212) into RoomReservationRoom

!new RoomExtra('extraMinibarUse')
!extraMinibarUse.price := 35.0
!extraMinibarUse.description := 'Minibar consumption'

!new RoomExtra('extraPetFee')
!extraPetFee.price := 50.0
!extraPetFee.description := 'Pet fee'

!insert (rr7, extraMinibarUse) into RoomReservationExtras
!insert (rr7, extraPetFee) into RoomReservationExtras

!new Bill('bill7')
!bill7.billId := 7001
!bill7.price := 540.0

!new Bill('bill8')
!bill8.billId := 7002
!bill8.price := 735.0

!insert (bill7, rr6) into BillRoomReservation
!insert (bill8, rr7) into BillRoomReservation

!insert (booking5, bill7) into BookingBill
!insert (booking5, bill8) into BookingBill

!new FreeRoomTypesDTO('dtoBusinessDouble')
!dtoBusinessDouble.roomTypeDescription := 'Business double (high floor)'
!dtoBusinessDouble.numBeds := 2
!dtoBusinessDouble.pricePerNight := 180.0
!dtoBusinessDouble.numFreeRooms := 4
```
## Generation 3 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 55 | 0.00% |
| Multiplicities Errors | 0 | 11 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

# Generation 4
```
!new Booking('booking6')
!booking6.startDate := '2026-08-30'
!booking6.endDate := '2026-09-02'
!booking6.canceled := false
!booking6.bookingId := 4001
!booking6.confirmed := false

!new Customer('customer6')
!customer6.firstName := 'Nadia'
!customer6.lastName := 'El-Masri'

!insert (booking6, customer6) into BookingCustomer

!new RoomReservation('rr8')
!rr8.checkInDate := '2026-08-30'
!rr8.checkOutDate := '2026-09-02'

!insert (booking6, rr8) into BookingRoomReservation

!new Room('room601')
!room601.roomNumber := 601
!room601.numBeds := 2
!room601.pricePerNight := 210.0
!room601.occupied := false
!room601.blocked := false

!new Room('room602')
!room602.roomNumber := 602
!room602.numBeds := 2
!room602.pricePerNight := 210.0
!room602.occupied := false
!room602.blocked := false

!insert (rr8, room601) into RoomReservationRoom
!insert (rr8, room602) into RoomReservationRoom

!new Bill('bill9')
!bill9.billId := 8001
!bill9.price := 0.0

!insert (bill9, rr8) into BillRoomReservation
!insert (booking6, bill9) into BookingBill

!new FreeRoomTypesDTO('dtoComplimentary')
!dtoComplimentary.roomTypeDescription := 'Complimentary twin (promotion)'
!dtoComplimentary.numBeds := 2
!dtoComplimentary.pricePerNight := 0.0
!dtoComplimentary.numFreeRooms := 1

!new FreeRoomTypesDTO('dtoPenthouse')
!dtoPenthouse.roomTypeDescription := 'Penthouse suite (connecting rooms)'
!dtoPenthouse.numBeds := 4
!dtoPenthouse.pricePerNight := 520.0
!dtoPenthouse.numFreeRooms := 0
```
## Generation 4 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 43 | 0.00% |
| Multiplicities Errors | 0 | 6 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

# Generation 5
```
!new Booking('booking7')
!booking7.startDate := '2026-12-24'
!booking7.endDate := '2026-12-27'
!booking7.canceled := true
!booking7.bookingId := 5001
!booking7.confirmed := true

!new Customer('customer7')
!customer7.firstName := 'Elena'
!customer7.lastName := 'Rossi'

!insert (booking7, customer7) into BookingCustomer

!new RoomReservation('rr9')
!rr9.checkInDate := '2026-12-24'
!rr9.checkOutDate := '2026-12-25'

!new RoomReservation('rr10')
!rr10.checkInDate := '2026-12-25'
!rr10.checkOutDate := '2026-12-26'

!new RoomReservation('rr11')
!rr11.checkInDate := '2026-12-26'
!rr11.checkOutDate := '2026-12-27'

!insert (booking7, rr9) into BookingRoomReservation
!insert (booking7, rr10) into BookingRoomReservation
!insert (booking7, rr11) into BookingRoomReservation

!new Room('room701')
!room701.roomNumber := 701
!room701.numBeds := 2
!room701.pricePerNight := 210.0
!room701.occupied := false
!room701.blocked := true

!new Room('room702')
!room702.roomNumber := 702
!room702.numBeds := 2
!room702.pricePerNight := 210.0
!room702.occupied := false
!room702.blocked := true

!new Room('room850')
!room850.roomNumber := 850
!room850.numBeds := 1
!room850.pricePerNight := 140.0
!room850.occupied := false
!room850.blocked := true

!new Room('room851')
!room851.roomNumber := 851
!room851.numBeds := 1
!room851.pricePerNight := 140.0
!room851.occupied := false
!room851.blocked := true

!new Room('room303')
!room303.roomNumber := 303
!room303.numBeds := 3
!room303.pricePerNight := 260.0
!room303.occupied := false
!room303.blocked := true

!insert (rr9, room701) into RoomReservationRoom
!insert (rr9, room702) into RoomReservationRoom
!insert (rr10, room850) into RoomReservationRoom
!insert (rr10, room851) into RoomReservationRoom
!insert (rr11, room303) into RoomReservationRoom

!new RoomExtra('extraWelcomeFruit')
!extraWelcomeFruit.price := 18.0
!extraWelcomeFruit.description := 'Welcome fruit basket'

!new RoomExtra('extraChampagne')
!extraChampagne.price := 55.0
!extraChampagne.description := 'Champagne in room'

!new RoomExtra('extraDinner')
!extraDinner.price := 120.0
!extraDinner.description := 'Holiday dinner (2 persons)'

!new RoomExtra('extraCityTax')
!extraCityTax.price := 0.0
!extraCityTax.description := 'City tax included'

!insert (rr9, extraWelcomeFruit) into RoomReservationExtras
!insert (rr9, extraChampagne) into RoomReservationExtras
!insert (rr10, extraDinner) into RoomReservationExtras
!insert (rr11, extraCityTax) into RoomReservationExtras

!new Bill('bill10')
!bill10.billId := 9001
!bill10.price := 475.0

!new Bill('bill11')
!bill11.billId := 9002
!bill11.price := 400.0

!new Bill('bill12')
!bill12.billId := 9003
!bill12.price := 260.0

!insert (bill10, rr9) into BillRoomReservation
!insert (bill11, rr10) into BillRoomReservation
!insert (bill12, rr11) into BillRoomReservation

!insert (booking7, bill10) into BookingBill
!insert (booking7, bill11) into BookingBill
!insert (booking7, bill12) into BookingBill

!new FreeRoomTypesDTO('dtoHolidayConnecting')
!dtoHolidayConnecting.roomTypeDescription := 'Holiday connecting double rooms'
!dtoHolidayConnecting.numBeds := 2
!dtoHolidayConnecting.pricePerNight := 210.0
!dtoHolidayConnecting.numFreeRooms := 0
```
## Generation 5 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 93 | 0.00% |
| Multiplicities Errors | 0 | 19 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

# Generation 6
```
!new Booking('booking8')
!booking8.startDate := '2027-01-15'
!booking8.endDate := '2027-01-18'
!booking8.canceled := false
!booking8.bookingId := 6001
!booking8.confirmed := false

!new Customer('customer8')
!customer8.firstName := 'Jonas'
!customer8.lastName := 'Berg'

!insert (booking8, customer8) into BookingCustomer

!new FreeRoomTypesDTO('dtoWinterSingle')
!dtoWinterSingle.roomTypeDescription := 'Winter single (street view)'
!dtoWinterSingle.numBeds := 1
!dtoWinterSingle.pricePerNight := 89.0
!dtoWinterSingle.numFreeRooms := 12

!new FreeRoomTypesDTO('dtoWinterDouble')
!dtoWinterDouble.roomTypeDescription := 'Winter double (quiet side)'
!dtoWinterDouble.numBeds := 2
!dtoWinterDouble.pricePerNight := 145.0
!dtoWinterDouble.numFreeRooms := 6

!new FreeRoomTypesDTO('dtoAccessible')
!dtoAccessible.roomTypeDescription := 'Accessible room (roll-in shower)'
!dtoAccessible.numBeds := 2
!dtoAccessible.pricePerNight := 155.0
!dtoAccessible.numFreeRooms := 2
```
## Generation 6 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 25 | 0.00% |
| Multiplicities Errors | 0 | 1 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 0 | 0.00% |
| checkOutDate <= endDate | 0 | 0 | 0.00% |

# Generation 7
```
!new Booking('booking9')
!booking9.startDate := '2027-02-03'
!booking9.endDate := '2027-02-06'
!booking9.canceled := false
!booking9.bookingId := 7001
!booking9.confirmed := false

!new Customer('customer9')
!customer9.firstName := 'Mila'
!customer9.lastName := 'Hernandez'

!insert (booking9, customer9) into BookingCustomer

!new RoomReservation('rr12')
!rr12.checkInDate := '2027-02-03'
!rr12.checkOutDate := '2027-02-06'

!insert (booking9, rr12) into BookingRoomReservation

!new Room('room910')
!room910.roomNumber := 910
!room910.numBeds := 2
!room910.pricePerNight := 175.0
!room910.occupied := false
!room910.blocked := true

!new Room('room911')
!room911.roomNumber := 911
!room911.numBeds := 2
!room911.pricePerNight := 175.0
!room911.occupied := false
!room911.blocked := true

!new Room('room912')
!room912.roomNumber := 912
!room912.numBeds := 1
!room912.pricePerNight := 120.0
!room912.occupied := false
!room912.blocked := true

!insert (rr12, room910) into RoomReservationRoom
!insert (rr12, room911) into RoomReservationRoom
!insert (rr12, room912) into RoomReservationRoom

!new Bill('bill13')
!bill13.billId := 10001
!bill13.price := 1410.0

!insert (bill13, rr12) into BillRoomReservation
!insert (booking9, bill13) into BookingBill

!new FreeRoomTypesDTO('dtoGroupRate')
!dtoGroupRate.roomTypeDescription := 'Group rate (standard floors)'
!dtoGroupRate.numBeds := 2
!dtoGroupRate.pricePerNight := 175.0
!dtoGroupRate.numFreeRooms := 15
```
## Generation 7 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 45 | 0.00% |
| Multiplicities Errors | 0 | 7 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

# Generation 8
```
!new Booking('booking10')
!booking10.startDate := '2027-03-11'
!booking10.endDate := '2027-03-16'
!booking10.canceled := false
!booking10.bookingId := 8001
!booking10.confirmed := false

!new Customer('customer10')
!customer10.firstName := 'Omar'
!customer10.lastName := 'Hassan'

!insert (booking10, customer10) into BookingCustomer

!new RoomReservation('rr13')
!rr13.checkInDate := '2027-03-11'
!rr13.checkOutDate := '2027-03-13'

!new RoomReservation('rr14')
!rr14.checkInDate := '2027-03-13'
!rr14.checkOutDate := '2027-03-16'

!insert (booking10, rr13) into BookingRoomReservation
!insert (booking10, rr14) into BookingRoomReservation

!new Bill('bill14')
!bill14.billId := 11001
!bill14.price := 0.0

!new Bill('bill15')
!bill15.billId := 11002
!bill15.price := 585.0

!insert (bill14, rr13) into BillRoomReservation
!insert (bill15, rr14) into BillRoomReservation

!insert (booking10, bill14) into BookingBill
!insert (booking10, bill15) into BookingBill

!new Room('room1003')
!room1003.roomNumber := 1003
!room1003.numBeds := 1
!room1003.pricePerNight := 135.0
!room1003.occupied := false
!room1003.blocked := false

!new Room('room1004')
!room1004.roomNumber := 1004
!room1004.numBeds := 1
!room1004.pricePerNight := 135.0
!room1004.occupied := false
!room1004.blocked := false

!new Room('room1201')
!room1201.roomNumber := 1201
!room1201.numBeds := 2
!room1201.pricePerNight := 195.0
!room1201.occupied := false
!room1201.blocked := true

!insert (rr13, room1003) into RoomReservationRoom
!insert (rr13, room1004) into RoomReservationRoom
!insert (rr14, room1201) into RoomReservationRoom

!new RoomExtra('extraBabyCot')
!extraBabyCot.price := 12.0
!extraBabyCot.description := 'Baby cot (per night)'

!new RoomExtra('extraHighSpeedWifi')
!extraHighSpeedWifi.price := 9.0
!extraHighSpeedWifi.description := 'High-speed Wi-Fi upgrade'

!insert (rr14, extraBabyCot) into RoomReservationExtras
!insert (rr14, extraHighSpeedWifi) into RoomReservationExtras

!new FreeRoomTypesDTO('dtoPendingAssignment')
!dtoPendingAssignment.roomTypeDescription := 'Standard double (assignment pending)'
!dtoPendingAssignment.numBeds := 2
!dtoPendingAssignment.pricePerNight := 195.0
!dtoPendingAssignment.numFreeRooms := 5

!new FreeRoomTypesDTO('dtoSingleMarch')
!dtoSingleMarch.roomTypeDescription := 'Single room (spring offer)'
!dtoSingleMarch.numBeds := 1
!dtoSingleMarch.pricePerNight := 135.0
!dtoSingleMarch.numFreeRooms := 11
```
## Generation 8 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 67 | 0.00% |
| Multiplicities Errors | 0 | 12 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

# Generation 9
```
!new Booking('booking11')
!booking11.startDate := '2027-04-05'
!booking11.endDate := '2027-04-12'
!booking11.canceled := false
!booking11.bookingId := 9001
!booking11.confirmed := true

!new Customer('customer11')
!customer11.firstName := 'Chloe'
!customer11.lastName := 'Martin'

!insert (booking11, customer11) into BookingCustomer

!new RoomReservation('rr15')
!rr15.checkInDate := '2027-04-05'
!rr15.checkOutDate := '2027-04-07'

!new RoomReservation('rr16')
!rr16.checkInDate := '2027-04-07'
!rr16.checkOutDate := '2027-04-10'

!new RoomReservation('rr17')
!rr17.checkInDate := '2027-04-10'
!rr17.checkOutDate := '2027-04-12'

!insert (booking11, rr15) into BookingRoomReservation
!insert (booking11, rr16) into BookingRoomReservation
!insert (booking11, rr17) into BookingRoomReservation

!new Room('room430')
!room430.roomNumber := 430
!room430.numBeds := 2
!room430.pricePerNight := 205.0
!room430.occupied := true
!room430.blocked := false

!new Room('room431')
!room431.roomNumber := 431
!room431.numBeds := 2
!room431.pricePerNight := 205.0
!room431.occupied := true
!room431.blocked := false

!new Room('room115')
!room115.roomNumber := 115
!room115.numBeds := 1
!room115.pricePerNight := 125.0
!room115.occupied := true
!room115.blocked := false

!new Room('room116')
!room116.roomNumber := 116
!room116.numBeds := 1
!room116.pricePerNight := 125.0
!room116.occupied := true
!room116.blocked := false

!insert (rr15, room430) into RoomReservationRoom
!insert (rr16, room431) into RoomReservationRoom
!insert (rr17, room115) into RoomReservationRoom
!insert (rr17, room116) into RoomReservationRoom

!new RoomExtra('extraMeetingRoom')
!extraMeetingRoom.price := 90.0
!extraMeetingRoom.description := 'Meeting room (2 hours)'

!new RoomExtra('extraProjector')
!extraProjector.price := 25.0
!extraProjector.description := 'Projector rental'

!new RoomExtra('extraSnackTray')
!extraSnackTray.price := 35.0
!extraSnackTray.description := 'Snack tray'

!insert (rr16, extraMeetingRoom) into RoomReservationExtras
!insert (rr16, extraProjector) into RoomReservationExtras
!insert (rr15, extraSnackTray) into RoomReservationExtras

!new Bill('bill16')
!bill16.billId := 12001
!bill16.price := 445.0

!new Bill('bill17')
!bill17.billId := 12002
!bill17.price := 730.0

!new Bill('bill18')
!bill18.billId := 12003
!bill18.price := 500.0

!insert (bill16, rr15) into BillRoomReservation
!insert (bill17, rr16) into BillRoomReservation
!insert (bill18, rr17) into BillRoomReservation

!insert (booking11, bill16) into BookingBill
!insert (booking11, bill17) into BookingBill
!insert (booking11, bill18) into BookingBill

!new FreeRoomTypesDTO('dtoConferenceTwin')
!dtoConferenceTwin.roomTypeDescription := 'Conference twin (near elevator)'
!dtoConferenceTwin.numBeds := 2
!dtoConferenceTwin.pricePerNight := 205.0
!dtoConferenceTwin.numFreeRooms := 2

!new FreeRoomTypesDTO('dtoBudgetSingle')
!dtoBudgetSingle.roomTypeDescription := 'Budget single (ground floor)'
!dtoBudgetSingle.numBeds := 1
!dtoBudgetSingle.pricePerNight := 125.0
!dtoBudgetSingle.numFreeRooms := 8
```
## Generation 9 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 87 | 0.00% |
| Multiplicities Errors | 0 | 17 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

# Generation 10
```
!new Booking('booking12')
!booking12.startDate := '2027-06-01'
!booking12.endDate := '2027-06-08'
!booking12.canceled := false
!booking12.bookingId := 9002
!booking12.confirmed := true

!new Customer('customer12')
!customer12.firstName := 'Liam'
!customer12.lastName := 'ONeil'

!insert (booking12, customer12) into BookingCustomer

!new RoomReservation('rr18')
!rr18.checkInDate := '2027-06-01'
!rr18.checkOutDate := '2027-06-04'

!new RoomReservation('rr19')
!rr19.checkInDate := '2027-06-04'
!rr19.checkOutDate := '2027-06-08'

!insert (booking12, rr18) into BookingRoomReservation
!insert (booking12, rr19) into BookingRoomReservation

!new Room('room620')
!room620.roomNumber := 620
!room620.numBeds := 2
!room620.pricePerNight := 190.0
!room620.occupied := false
!room620.blocked := true

!new Room('room621')
!room621.roomNumber := 621
!room621.numBeds := 2
!room621.pricePerNight := 190.0
!room621.occupied := false
!room621.blocked := true

!insert (rr18, room620) into RoomReservationRoom
!insert (rr18, room621) into RoomReservationRoom

!new RoomExtra('extraGymPass')
!extraGymPass.price := 20.0
!extraGymPass.description := 'Gym pass (3 days)'

!new RoomExtra('extraDeposit')
!extraDeposit.price := 50.0
!extraDeposit.description := 'Deposit for room assignment'

!insert (rr18, extraGymPass) into RoomReservationExtras
!insert (rr19, extraDeposit) into RoomReservationExtras

!new Bill('bill19')
!bill19.billId := 13001
!bill19.price := 590.0

!new Bill('bill20')
!bill20.billId := 13002
!bill20.price := 50.0

!insert (bill19, rr18) into BillRoomReservation
!insert (bill20, rr19) into BillRoomReservation

!insert (booking12, bill19) into BookingBill
!insert (booking12, bill20) into BookingBill

!new FreeRoomTypesDTO('dtoUnassignedJune')
!dtoUnassignedJune.roomTypeDescription := 'Standard room (pending assignment for June)'
!dtoUnassignedJune.numBeds := 2
!dtoUnassignedJune.pricePerNight := 190.0
!dtoUnassignedJune.numFreeRooms := 0
```
## Generation 10 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 55 | 0.00% |
| Multiplicities Errors | 0 | 11 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

# Generation 11
```
!new Booking('booking13')
!booking13.startDate := '2027-09-14'
!booking13.endDate := '2027-09-18'
!booking13.canceled := false
!booking13.bookingId := 9100
!booking13.confirmed := false

!new Customer('customer13')
!customer13.firstName := 'Fatima'
!customer13.lastName := 'Al-Sayed'

!insert (booking13, customer13) into BookingCustomer

!new FreeRoomTypesDTO('dtoSeptemberSingle')
!dtoSeptemberSingle.roomTypeDescription := 'Single room (weekday saver)'
!dtoSeptemberSingle.numBeds := 1
!dtoSeptemberSingle.pricePerNight := 99.0
!dtoSeptemberSingle.numFreeRooms := 14

!new FreeRoomTypesDTO('dtoSeptemberSuite')
!dtoSeptemberSuite.roomTypeDescription := 'Suite (limited availability)'
!dtoSeptemberSuite.numBeds := 2
!dtoSeptemberSuite.pricePerNight := 310.0
!dtoSeptemberSuite.numFreeRooms := 1
```
## Generation 11 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 20 | 0.00% |
| Multiplicities Errors | 0 | 1 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 0 | 0.00% |
| checkOutDate <= endDate | 0 | 0 | 0.00% |

# Generation 12
```
!new Booking('booking14')
!booking14.startDate := '2027-10-02'
!booking14.endDate := '2027-10-06'
!booking14.canceled := false
!booking14.bookingId := 9200
!booking14.confirmed := true

!new Customer('customer14')
!customer14.firstName := 'Noah'
!customer14.lastName := 'Whitaker'

!insert (booking14, customer14) into BookingCustomer

!new RoomReservation('rr20')
!rr20.checkInDate := '2027-10-02'
!rr20.checkOutDate := '2027-10-06'

!insert (booking14, rr20) into BookingRoomReservation

!new Room('room330')
!room330.roomNumber := 330
!room330.numBeds := 2
!room330.pricePerNight := 155.0
!room330.occupied := false
!room330.blocked := true

!new Room('room331')
!room331.roomNumber := 331
!room331.numBeds := 2
!room331.pricePerNight := 155.0
!room331.occupied := false
!room331.blocked := true

!new Room('room332')
!room332.roomNumber := 332
!room332.numBeds := 2
!room332.pricePerNight := 155.0
!room332.occupied := false
!room332.blocked := true

!new Room('room333')
!room333.roomNumber := 333
!room333.numBeds := 2
!room333.pricePerNight := 155.0
!room333.occupied := false
!room333.blocked := true

!insert (rr20, room330) into RoomReservationRoom
!insert (rr20, room331) into RoomReservationRoom
!insert (rr20, room332) into RoomReservationRoom
!insert (rr20, room333) into RoomReservationRoom

!new Bill('bill21')
!bill21.billId := 14001
!bill21.price := 2480.0

!insert (bill21, rr20) into BillRoomReservation
!insert (booking14, bill21) into BookingBill

!new FreeRoomTypesDTO('dtoGroupBlockOctober')
!dtoGroupBlockOctober.roomTypeDescription := 'Blocked group doubles (October)'
!dtoGroupBlockOctober.numBeds := 2
!dtoGroupBlockOctober.pricePerNight := 155.0
!dtoGroupBlockOctober.numFreeRooms := 0
```
## Generation 12 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 52 | 0.00% |
| Multiplicities Errors | 0 | 8 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

# Generation 13
```
!new Booking('booking15')
!booking15.startDate := '2027-11-28'
!booking15.endDate := '2027-11-29'
!booking15.canceled := false
!booking15.bookingId := 9300
!booking15.confirmed := true

!new Customer('customer15')
!customer15.firstName := 'Yuki'
!customer15.lastName := 'Sato'

!insert (booking15, customer15) into BookingCustomer

!new RoomReservation('rr21')
!rr21.checkInDate := '2027-11-28'
!rr21.checkOutDate := '2027-11-29'

!insert (booking15, rr21) into BookingRoomReservation

!new Room('room055')
!room055.roomNumber := 55
!room055.numBeds := 1
!room055.pricePerNight := 75.5
!room055.occupied := false
!room055.blocked := true

!insert (rr21, room055) into RoomReservationRoom

!new RoomExtra('extraLoyaltyRedemption')
!extraLoyaltyRedemption.price := 0.0
!extraLoyaltyRedemption.description := 'Loyalty points redemption'

!new RoomExtra('extraTourismFee')
!extraTourismFee.price := 7.5
!extraTourismFee.description := 'Local tourism fee'

!insert (rr21, extraLoyaltyRedemption) into RoomReservationExtras
!insert (rr21, extraTourismFee) into RoomReservationExtras

!new Bill('bill22')
!bill22.billId := 15001
!bill22.price := 7.5

!insert (bill22, rr21) into BillRoomReservation
!insert (booking15, bill22) into BookingBill

!new FreeRoomTypesDTO('dtoLastMinuteSingle')
!dtoLastMinuteSingle.roomTypeDescription := 'Last-minute single (compact)'
!dtoLastMinuteSingle.numBeds := 1
!dtoLastMinuteSingle.pricePerNight := 75.5
!dtoLastMinuteSingle.numFreeRooms := 1
```
## Generation 13 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 39 | 0.00% |
| Multiplicities Errors | 0 | 7 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

# Generation 14
```
!new Booking('booking16')
!booking16.startDate := '2028-01-04'
!booking16.endDate := '2028-01-06'
!booking16.canceled := true
!booking16.bookingId := 9400
!booking16.confirmed := false

!new Customer('customer16')
!customer16.firstName := 'Daniela'
!customer16.lastName := 'Meyer'

!insert (booking16, customer16) into BookingCustomer

!new RoomReservation('rr22')
!rr22.checkInDate := '2028-01-04'
!rr22.checkOutDate := '2028-01-05'

!new RoomReservation('rr23')
!rr23.checkInDate := '2028-01-05'
!rr23.checkOutDate := '2028-01-06'

!insert (booking16, rr22) into BookingRoomReservation
!insert (booking16, rr23) into BookingRoomReservation

!new Room('room1402')
!room1402.roomNumber := 1402
!room1402.numBeds := 2
!room1402.pricePerNight := 220.0
!room1402.occupied := false
!room1402.blocked := false

!insert (rr22, room1402) into RoomReservationRoom

!new RoomExtra('extraRoomServiceLate')
!extraRoomServiceLate.price := 35.0
!extraRoomServiceLate.description := 'Late room service'

!new RoomExtra('extraExpressCleaning')
!extraExpressCleaning.price := 0.0
!extraExpressCleaning.description := 'Express cleaning (goodwill)'

!new RoomExtra('extraCancellationAdmin')
!extraCancellationAdmin.price := 20.0
!extraCancellationAdmin.description := 'Cancellation administration fee'

!new RoomExtra('extraRebookingVoucher')
!extraRebookingVoucher.price := 0.0
!extraRebookingVoucher.description := 'Rebooking voucher issued'

!insert (rr22, extraRoomServiceLate) into RoomReservationExtras
!insert (rr22, extraExpressCleaning) into RoomReservationExtras
!insert (rr23, extraCancellationAdmin) into RoomReservationExtras
!insert (rr23, extraRebookingVoucher) into RoomReservationExtras

!new Bill('bill23')
!bill23.billId := 16001
!bill23.price := 255.0

!new Bill('bill24')
!bill24.billId := 16002
!bill24.price := 20.0

!insert (bill23, rr22) into BillRoomReservation
!insert (bill24, rr23) into BillRoomReservation

!insert (booking16, bill23) into BookingBill
!insert (booking16, bill24) into BookingBill

!new FreeRoomTypesDTO('dtoJanLimited')
!dtoJanLimited.roomTypeDescription := 'January limited offer (suite-like double)'
!dtoJanLimited.numBeds := 2
!dtoJanLimited.pricePerNight := 220.0
!dtoJanLimited.numFreeRooms := 1

!new FreeRoomTypesDTO('dtoJanEconomy')
!dtoJanEconomy.roomTypeDescription := 'January economy single'
!dtoJanEconomy.numBeds := 1
!dtoJanEconomy.pricePerNight := 85.0
!dtoJanEconomy.numFreeRooms := 18
```
## Generation 14 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 61 | 0.00% |
| Multiplicities Errors | 0 | 12 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

# Generation 15
```
!new Booking('booking17')
!booking17.startDate := '2028-02-14'
!booking17.endDate := '2028-02-15'
!booking17.canceled := false
!booking17.bookingId := 9500
!booking17.confirmed := true

!new Customer('customer17')
!customer17.firstName := 'Ibrahim'
!customer17.lastName := 'Khan'

!insert (booking17, customer17) into BookingCustomer

!new RoomReservation('rr24')
!rr24.checkInDate := '2028-02-14'
!rr24.checkOutDate := '2028-02-14'

!new RoomReservation('rr25')
!rr25.checkInDate := '2028-02-14'
!rr25.checkOutDate := '2028-02-15'

!insert (booking17, rr24) into BookingRoomReservation
!insert (booking17, rr25) into BookingRoomReservation

!new RoomExtra('extraDayUseWorkspace')
!extraDayUseWorkspace.price := 45.0
!extraDayUseWorkspace.description := 'Day-use workspace fee'

!insert (rr24, extraDayUseWorkspace) into RoomReservationExtras

!new Room('room020')
!room020.roomNumber := 20
!room020.numBeds := 1
!room020.pricePerNight := 92.0
!room020.occupied := false
!room020.blocked := true

!new Room('room021')
!room021.roomNumber := 21
!room021.numBeds := 1
!room021.pricePerNight := 92.0
!room021.occupied := false
!room021.blocked := true

!insert (rr25, room020) into RoomReservationRoom
!insert (rr25, room021) into RoomReservationRoom

!new Bill('bill25')
!bill25.billId := 17001
!bill25.price := 45.0

!new Bill('bill26')
!bill26.billId := 17002
!bill26.price := 184.0

!insert (bill25, rr24) into BillRoomReservation
!insert (bill26, rr25) into BillRoomReservation

!insert (booking17, bill25) into BookingBill
!insert (booking17, bill26) into BookingBill

!new FreeRoomTypesDTO('dtoDayUseSingle')
!dtoDayUseSingle.roomTypeDescription := 'Compact single (day-use eligible)'
!dtoDayUseSingle.numBeds := 1
!dtoDayUseSingle.pricePerNight := 92.0
!dtoDayUseSingle.numFreeRooms := 6

!new FreeRoomTypesDTO('dtoQuietSingle')
!dtoQuietSingle.roomTypeDescription := 'Quiet single (inner courtyard)'
!dtoQuietSingle.numBeds := 1
!dtoQuietSingle.pricePerNight := 105.0
!dtoQuietSingle.numFreeRooms := 3
```
## Generation 15 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 56 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

# Generation 16
```
!new Booking('booking18')
!booking18.startDate := '2028-05-01'
!booking18.endDate := '2028-05-07'
!booking18.canceled := false
!booking18.bookingId := 9600
!booking18.confirmed := true

!new Customer('customer18')
!customer18.firstName := 'Tomasz'
!customer18.lastName := 'Kowalski'

!insert (booking18, customer18) into BookingCustomer

!new RoomReservation('rr26')
!rr26.checkInDate := '2028-05-01'
!rr26.checkOutDate := '2028-05-01'

!new RoomReservation('rr27')
!rr27.checkInDate := '2028-05-03'
!rr27.checkOutDate := '2028-05-07'

!insert (booking18, rr26) into BookingRoomReservation
!insert (booking18, rr27) into BookingRoomReservation

!new RoomExtra('extraAdvancePayment')
!extraAdvancePayment.price := 200.0
!extraAdvancePayment.description := 'Advance payment (room assignment pending)'

!insert (rr26, extraAdvancePayment) into RoomReservationExtras

!new Bill('bill27')
!bill27.billId := 18001
!bill27.price := 200.0

!new Bill('bill28')
!bill28.billId := 18002
!bill28.price := 2460.0

!insert (bill27, rr26) into BillRoomReservation
!insert (bill28, rr27) into BillRoomReservation

!insert (booking18, bill27) into BookingBill
!insert (booking18, bill28) into BookingBill

!new Room('room1501')
!room1501.roomNumber := 1501
!room1501.numBeds := 2
!room1501.pricePerNight := 205.0
!room1501.occupied := false
!room1501.blocked := true

!new Room('room1502')
!room1502.roomNumber := 1502
!room1502.numBeds := 2
!room1502.pricePerNight := 205.0
!room1502.occupied := false
!room1502.blocked := true

!new Room('room1503')
!room1503.roomNumber := 1503
!room1503.numBeds := 1
!room1503.pricePerNight := 160.0
!room1503.occupied := false
!room1503.blocked := true

!insert (rr27, room1501) into RoomReservationRoom
!insert (rr27, room1502) into RoomReservationRoom
!insert (rr27, room1503) into RoomReservationRoom
```
## Generation 16 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 53 | 0.00% |
| Multiplicities Errors | 0 | 11 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

# Generation 17
```
!new Booking('booking19')
!booking19.startDate := '2028-07-19'
!booking19.endDate := '2028-07-23'
!booking19.canceled := false
!booking19.bookingId := 9700
!booking19.confirmed := true

!new Customer('customer19')
!customer19.firstName := 'Wei'
!customer19.lastName := 'Zhang'

!insert (booking19, customer19) into BookingCustomer

!new RoomReservation('rr28')
!rr28.checkInDate := '2028-07-19'
!rr28.checkOutDate := '2028-07-20'

!new RoomReservation('rr29')
!rr29.checkInDate := '2028-07-20'
!rr29.checkOutDate := '2028-07-23'

!insert (booking19, rr28) into BookingRoomReservation
!insert (booking19, rr29) into BookingRoomReservation

!new RoomExtra('extraReservationDeposit')
!extraReservationDeposit.price := 150.0
!extraReservationDeposit.description := 'Reservation deposit (room assignment pending)'

!insert (rr28, extraReservationDeposit) into RoomReservationExtras

!new Room('room1707')
!room1707.roomNumber := 1707
!room1707.numBeds := 2
!room1707.pricePerNight := 210.0
!room1707.occupied := false
!room1707.blocked := true

!insert (rr29, room1707) into RoomReservationRoom

!new Bill('bill29')
!bill29.billId := 19001
!bill29.price := 150.0

!new Bill('bill30')
!bill30.billId := 19002
!bill30.price := 630.0

!insert (bill29, rr28) into BillRoomReservation
!insert (bill30, rr29) into BillRoomReservation

!insert (booking19, bill29) into BookingBill
!insert (booking19, bill30) into BookingBill

!new FreeRoomTypesDTO('dtoSummerDouble')
!dtoSummerDouble.roomTypeDescription := 'Summer double (river side)'
!dtoSummerDouble.numBeds := 2
!dtoSummerDouble.pricePerNight := 210.0
!dtoSummerDouble.numFreeRooms := 5

!new FreeRoomTypesDTO('dtoSummerSinglePromo')
!dtoSummerSinglePromo.roomTypeDescription := 'Summer single (promo rate)'
!dtoSummerSinglePromo.numBeds := 1
!dtoSummerSinglePromo.pricePerNight := 98.0
!dtoSummerSinglePromo.numFreeRooms := 10
```
## Generation 17 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 49 | 0.00% |
| Multiplicities Errors | 0 | 9 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

# Generation 18
```
!new Booking('booking20')
!booking20.startDate := '2028-10-09'
!booking20.endDate := '2028-10-13'
!booking20.canceled := false
!booking20.bookingId := 9800
!booking20.confirmed := true

!new Customer('customer20')
!customer20.firstName := 'Gabriel'
!customer20.lastName := 'Moreau'

!insert (booking20, customer20) into BookingCustomer

!new RoomReservation('rr30')
!rr30.checkInDate := '2028-10-09'
!rr30.checkOutDate := '2028-10-13'

!insert (booking20, rr30) into BookingRoomReservation

!new Room('room2001')
!room2001.roomNumber := 2001
!room2001.numBeds := 1
!room2001.pricePerNight := 165.0
!room2001.occupied := false
!room2001.blocked := true

!new Room('room2002')
!room2002.roomNumber := 2002
!room2002.numBeds := 1
!room2002.pricePerNight := 165.0
!room2002.occupied := false
!room2002.blocked := true

!new Room('room2003')
!room2003.roomNumber := 2003
!room2003.numBeds := 2
!room2003.pricePerNight := 215.0
!room2003.occupied := false
!room2003.blocked := true

!new Room('room2004')
!room2004.roomNumber := 2004
!room2004.numBeds := 2
!room2004.pricePerNight := 215.0
!room2004.occupied := false
!room2004.blocked := true

!new Room('room2005')
!room2005.roomNumber := 2005
!room2005.numBeds := 2
!room2005.pricePerNight := 215.0
!room2005.occupied := false
!room2005.blocked := true

!new Room('room2006')
!room2006.roomNumber := 2006
!room2006.numBeds := 3
!room2006.pricePerNight := 275.0
!room2006.occupied := false
!room2006.blocked := true

!insert (rr30, room2001) into RoomReservationRoom
!insert (rr30, room2002) into RoomReservationRoom
!insert (rr30, room2003) into RoomReservationRoom
!insert (rr30, room2004) into RoomReservationRoom
!insert (rr30, room2005) into RoomReservationRoom
!insert (rr30, room2006) into RoomReservationRoom

!new RoomExtra('extraAVPackage')
!extraAVPackage.price := 180.0
!extraAVPackage.description := 'AV package for meeting'

!new RoomExtra('extraCoffeeBreak')
!extraCoffeeBreak.price := 95.0
!extraCoffeeBreak.description := 'Coffee break service'

!new RoomExtra('extraWelcomeSignage')
!extraWelcomeSignage.price := 0.0
!extraWelcomeSignage.description := 'Welcome signage (included)'

!new RoomExtra('extraServiceFee')
!extraServiceFee.price := 45.0
!extraServiceFee.description := 'Service handling fee'

!insert (rr30, extraAVPackage) into RoomReservationExtras
!insert (rr30, extraCoffeeBreak) into RoomReservationExtras
!insert (rr30, extraWelcomeSignage) into RoomReservationExtras
!insert (rr30, extraServiceFee) into RoomReservationExtras

!new Bill('bill31')
!bill31.billId := 20001
!bill31.price := 5180.0

!insert (bill31, rr30) into BillRoomReservation
!insert (booking20, bill31) into BookingBill

!new FreeRoomTypesDTO('dtoEventBlock')
!dtoEventBlock.roomTypeDescription := 'Event block (multiple rooms reserved)'
!dtoEventBlock.numBeds := 2
!dtoEventBlock.pricePerNight := 215.0
!dtoEventBlock.numFreeRooms := 0
```
## Generation 18 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 82 | 0.00% |
| Multiplicities Errors | 0 | 14 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

# Generation 19
```
!new Booking('booking21')
!booking21.startDate := '2028-12-31'
!booking21.endDate := '2029-01-03'
!booking21.canceled := true
!booking21.bookingId := 9900
!booking21.confirmed := false

!new Customer('customer21')
!customer21.firstName := 'Sven'
!customer21.lastName := 'Lindstrom'

!insert (booking21, customer21) into BookingCustomer

!new FreeRoomTypesDTO('dtoNewYearsDorm')
!dtoNewYearsDorm.roomTypeDescription := 'Dorm-style shared room (New Year special)'
!dtoNewYearsDorm.numBeds := 6
!dtoNewYearsDorm.pricePerNight := 45.0
!dtoNewYearsDorm.numFreeRooms := 20

!new FreeRoomTypesDTO('dtoNewYearsDoublePremium')
!dtoNewYearsDoublePremium.roomTypeDescription := 'Premium double (New Year rate)'
!dtoNewYearsDoublePremium.numBeds := 2
!dtoNewYearsDoublePremium.pricePerNight := 260.0
!dtoNewYearsDoublePremium.numFreeRooms := 0
```
## Generation 19 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 20 | 0.00% |
| Multiplicities Errors | 0 | 1 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 0 | 0.00% |
| checkOutDate <= endDate | 0 | 0 | 0.00% |

# Generation 20
```
!new Booking('booking22')
!booking22.startDate := '2029-03-01'
!booking22.endDate := '2029-03-04'
!booking22.canceled := false
!booking22.bookingId := 10010
!booking22.confirmed := true

!new Customer('customer22')
!customer22.firstName := 'Ana'
!customer22.lastName := 'Sousa'

!insert (booking22, customer22) into BookingCustomer

!new RoomReservation('rr31')
!rr31.checkInDate := '2029-03-01'
!rr31.checkOutDate := '2029-03-04'

!insert (booking22, rr31) into BookingRoomReservation

!new Room('room077')
!room077.roomNumber := 77
!room077.numBeds := 1
!room077.pricePerNight := 88.0
!room077.occupied := false
!room077.blocked := true

!insert (rr31, room077) into RoomReservationRoom

!new Bill('bill32')
!bill32.billId := 21001
!bill32.price := 0.0

!insert (bill32, rr31) into BillRoomReservation
!insert (booking22, bill32) into BookingBill

!new FreeRoomTypesDTO('dtoMarchSingleTrial')
!dtoMarchSingleTrial.roomTypeDescription := 'Single room (first-stay trial)'
!dtoMarchSingleTrial.numBeds := 1
!dtoMarchSingleTrial.pricePerNight := 88.0
!dtoMarchSingleTrial.numFreeRooms := 1
```
## Generation 20 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 31 | 0.00% |
| Multiplicities Errors | 0 | 5 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

# Generation 21
```
!new Booking('booking24')
!booking24.startDate := '2029-06-10'
!booking24.endDate := '2029-06-15'
!booking24.canceled := false
!booking24.bookingId := 10124
!booking24.confirmed := false

!new Customer('customer24')
!customer24.firstName := 'Katerina'
!customer24.lastName := 'Novak'

!insert (booking24, customer24) into BookingCustomer

!new FreeRoomTypesDTO('dtoEarlySummerSingle')
!dtoEarlySummerSingle.roomTypeDescription := 'Early summer single (garden side)'
!dtoEarlySummerSingle.numBeds := 1
!dtoEarlySummerSingle.pricePerNight := 102.0
!dtoEarlySummerSingle.numFreeRooms := 9

!new FreeRoomTypesDTO('dtoEarlySummerFamily')
!dtoEarlySummerFamily.roomTypeDescription := 'Early summer family room (4 beds)'
!dtoEarlySummerFamily.numBeds := 4
!dtoEarlySummerFamily.pricePerNight := 275.0
!dtoEarlySummerFamily.numFreeRooms := 2
```
## Generation 21 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 20 | 0.00% |
| Multiplicities Errors | 0 | 1 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 0 | 0.00% |
| checkOutDate <= endDate | 0 | 0 | 0.00% |

# Generation 22
```
!new Booking('booking23')
!booking23.startDate := '2029-04-22'
!booking23.endDate := '2029-04-25'
!booking23.canceled := false
!booking23.bookingId := 10075
!booking23.confirmed := true

!new Customer('customer23')
!customer23.firstName := 'Renee'
!customer23.lastName := 'Dubois'

!insert (booking23, customer23) into BookingCustomer

!new RoomReservation('rr32')
!rr32.checkInDate := '2029-04-22'
!rr32.checkOutDate := '2029-04-25'

!insert (booking23, rr32) into BookingRoomReservation

!new RoomExtra('extraGreenOption')
!extraGreenOption.price := 0.0
!extraGreenOption.description := 'Green option (no daily housekeeping)'

!new RoomExtra('extraCarbonOffset')
!extraCarbonOffset.price := 8.0
!extraCarbonOffset.description := 'Carbon offset contribution'

!new RoomExtra('extraCorporateRateNote')
!extraCorporateRateNote.price := 0.0
!extraCorporateRateNote.description := 'Corporate rate applied (billing to company)'

!insert (rr32, extraGreenOption) into RoomReservationExtras
!insert (rr32, extraCarbonOffset) into RoomReservationExtras
!insert (rr32, extraCorporateRateNote) into RoomReservationExtras

!new Bill('bill33')
!bill33.billId := 22001
!bill33.price := 8.0

!insert (bill33, rr32) into BillRoomReservation
!insert (booking23, bill33) into BookingBill

!new FreeRoomTypesDTO('dtoCorporateApril')
!dtoCorporateApril.roomTypeDescription := 'Corporate rooms (assignment at check-in)'
!dtoCorporateApril.numBeds := 1
!dtoCorporateApril.pricePerNight := 115.0
!dtoCorporateApril.numFreeRooms := 6
```
## Generation 22 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 36 | 0.00% |
| Multiplicities Errors | 0 | 7 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

# Generation 23
```
!new Booking('booking25')
!booking25.startDate := '2029-08-18'
!booking25.endDate := '2029-08-19'
!booking25.canceled := false
!booking25.bookingId := 10250
!booking25.confirmed := true

!new Customer('customer25')
!customer25.firstName := 'Mason'
!customer25.lastName := 'Reed'

!insert (booking25, customer25) into BookingCustomer

!new RoomReservation('rr33')
!rr33.checkInDate := '2029-08-18'
!rr33.checkOutDate := '2029-08-19'

!insert (booking25, rr33) into BookingRoomReservation

!new Room('room905')
!room905.roomNumber := 905
!room905.numBeds := 3
!room905.pricePerNight := 0.0
!room905.occupied := false
!room905.blocked := true

!insert (rr33, room905) into RoomReservationRoom

!new Bill('bill34')
!bill34.billId := 23001
!bill34.price := 0.0

!insert (bill34, rr33) into BillRoomReservation
!insert (booking25, bill34) into BookingBill

!new FreeRoomTypesDTO('dtoEmergencyComp')
!dtoEmergencyComp.roomTypeDescription := 'Emergency relocation (complimentary triple)'
!dtoEmergencyComp.numBeds := 3
!dtoEmergencyComp.pricePerNight := 0.0
!dtoEmergencyComp.numFreeRooms := 0
```
## Generation 23 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 31 | 0.00% |
| Multiplicities Errors | 0 | 5 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

# Generation 24
```
!new Booking('booking26')
!booking26.startDate := '2029-12-05'
!booking26.endDate := '2029-12-12'
!booking26.canceled := false
!booking26.bookingId := 10310
!booking26.confirmed := true

!new Customer('customer26')
!customer26.firstName := 'Amir'
!customer26.lastName := 'Rahimi'

!insert (booking26, customer26) into BookingCustomer

!new RoomReservation('rr34')
!rr34.checkInDate := '2029-12-05'
!rr34.checkOutDate := '2029-12-12'

!insert (booking26, rr34) into BookingRoomReservation

!new Bill('bill35')
!bill35.billId := 23010
!bill35.price := 1190.0

!insert (bill35, rr34) into BillRoomReservation
!insert (booking26, bill35) into BookingBill

!new FreeRoomTypesDTO('dtoWinterWeekStandard')
!dtoWinterWeekStandard.roomTypeDescription := 'Standard room (winter week)'
!dtoWinterWeekStandard.numBeds := 2
!dtoWinterWeekStandard.pricePerNight := 170.0
!dtoWinterWeekStandard.numFreeRooms := 8

!new FreeRoomTypesDTO('dtoWinterWeekSingle')
!dtoWinterWeekSingle.roomTypeDescription := 'Single room (winter week)'
!dtoWinterWeekSingle.numBeds := 1
!dtoWinterWeekSingle.pricePerNight := 110.0
!dtoWinterWeekSingle.numFreeRooms := 5
```
## Generation 24 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 29 | 0.00% |
| Multiplicities Errors | 0 | 4 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

# Generation 25
```
!new Booking('booking27')
!booking27.startDate := '2030-02-10'
!booking27.endDate := '2030-02-20'
!booking27.canceled := false
!booking27.bookingId := 10400
!booking27.confirmed := false

!new Customer('customer27')
!customer27.firstName := 'Isabella'
!customer27.lastName := 'Santiago'

!insert (booking27, customer27) into BookingCustomer

!new RoomReservation('rr35')
!rr35.checkInDate := '2030-02-10'
!rr35.checkOutDate := '2030-02-13'

!new RoomReservation('rr36')
!rr36.checkInDate := '2030-02-13'
!rr36.checkOutDate := '2030-02-17'

!new RoomReservation('rr37')
!rr37.checkInDate := '2030-02-17'
!rr37.checkOutDate := '2030-02-20'

!insert (booking27, rr35) into BookingRoomReservation
!insert (booking27, rr36) into BookingRoomReservation
!insert (booking27, rr37) into BookingRoomReservation

!new Room('room1608')
!room1608.roomNumber := 1608
!room1608.numBeds := 1
!room1608.pricePerNight := 118.0
!room1608.occupied := false
!room1608.blocked := true

!new Room('room1701')
!room1701.roomNumber := 1701
!room1701.numBeds := 2
!room1701.pricePerNight := 175.0
!room1701.occupied := false
!room1701.blocked := true

!new Room('room1715')
!room1715.roomNumber := 1715
!room1715.numBeds := 2
!room1715.pricePerNight := 175.0
!room1715.occupied := false
!room1715.blocked := true

!insert (rr35, room1608) into RoomReservationRoom
!insert (rr36, room1701) into RoomReservationRoom
!insert (rr37, room1715) into RoomReservationRoom

!new RoomExtra('extraKeyReplacement')
!extraKeyReplacement.price := 10.0
!extraKeyReplacement.description := 'Key card replacement'

!new RoomExtra('extraPrintDocuments')
!extraPrintDocuments.price := 5.0
!extraPrintDocuments.description := 'Printing documents at reception'

!insert (rr36, extraKeyReplacement) into RoomReservationExtras
!insert (rr37, extraPrintDocuments) into RoomReservationExtras

!new Bill('bill36')
!bill36.billId := 24001
!bill36.price := 354.0

!new Bill('bill37')
!bill37.billId := 24002
!bill37.price := 710.0

!new Bill('bill38')
!bill38.billId := 24003
!bill38.price := 530.0

!insert (bill36, rr35) into BillRoomReservation
!insert (bill37, rr36) into BillRoomReservation
!insert (bill38, rr37) into BillRoomReservation

!insert (booking27, bill36) into BookingBill
!insert (booking27, bill37) into BookingBill
!insert (booking27, bill38) into BookingBill

!new FreeRoomTypesDTO('dtoFebSolo')
!dtoFebSolo.roomTypeDescription := 'February solo traveler (single)'
!dtoFebSolo.numBeds := 1
!dtoFebSolo.pricePerNight := 118.0
!dtoFebSolo.numFreeRooms := 4

!new FreeRoomTypesDTO('dtoFebTwinFlexible')
!dtoFebTwinFlexible.roomTypeDescription := 'February flexible twin (refundable)'
!dtoFebTwinFlexible.numBeds := 2
!dtoFebTwinFlexible.pricePerNight := 175.0
!dtoFebTwinFlexible.numFreeRooms := 2
```
## Generation 25 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 76 | 0.00% |
| Multiplicities Errors | 0 | 15 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

# Generation 26
```
!new Booking('booking28')
!booking28.startDate := '2030-05-11'
!booking28.endDate := '2030-05-15'
!booking28.canceled := false
!booking28.bookingId := 10500
!booking28.confirmed := true

!new Customer('customer28')
!customer28.firstName := 'Johanna'
!customer28.lastName := 'Schultz'

!insert (booking28, customer28) into BookingCustomer

!new RoomReservation('rr38')
!rr38.checkInDate := '2030-05-11'
!rr38.checkOutDate := '2030-05-13'

!new RoomReservation('rr39')
!rr39.checkInDate := '2030-05-13'
!rr39.checkOutDate := '2030-05-15'

!insert (booking28, rr38) into BookingRoomReservation
!insert (booking28, rr39) into BookingRoomReservation

!new Room('room402')
!room402.roomNumber := 402
!room402.numBeds := 1
!room402.pricePerNight := 128.0
!room402.occupied := false
!room402.blocked := true

!new Room('room918')
!room918.roomNumber := 918
!room918.numBeds := 2
!room918.pricePerNight := 185.0
!room918.occupied := false
!room918.blocked := true

!insert (rr38, room402) into RoomReservationRoom
!insert (rr39, room918) into RoomReservationRoom

!new Bill('bill39')
!bill39.billId := 25001
!bill39.price := 256.0

!new Bill('bill40')
!bill40.billId := 25002
!bill40.price := 370.0

!insert (bill39, rr38) into BillRoomReservation
!insert (bill40, rr39) into BillRoomReservation

!insert (booking28, bill39) into BookingBill
!insert (booking28, bill40) into BookingBill

!new FreeRoomTypesDTO('dtoMayStandardSingle')
!dtoMayStandardSingle.roomTypeDescription := 'Standard single (May)'
!dtoMayStandardSingle.numBeds := 1
!dtoMayStandardSingle.pricePerNight := 128.0
!dtoMayStandardSingle.numFreeRooms := 10

!new FreeRoomTypesDTO('dtoMayDouble')
!dtoMayDouble.roomTypeDescription := 'Double room (May)'
!dtoMayDouble.numBeds := 2
!dtoMayDouble.pricePerNight := 185.0
!dtoMayDouble.numFreeRooms := 4
```
## Generation 26 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 52 | 0.00% |
| Multiplicities Errors | 0 | 9 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

# Generation 27
```
!new Booking('booking29')
!booking29.startDate := '2030-09-01'
!booking29.endDate := '2030-09-05'
!booking29.canceled := false
!booking29.bookingId := 10600
!booking29.confirmed := false

!new Customer('customer29')
!customer29.firstName := 'Helene'
!customer29.lastName := 'Fischer'

!insert (booking29, customer29) into BookingCustomer

!new RoomReservation('rr40')
!rr40.checkInDate := '2030-09-01'
!rr40.checkOutDate := '2030-09-03'

!new RoomReservation('rr41')
!rr41.checkInDate := '2030-09-03'
!rr41.checkOutDate := '2030-09-05'

!insert (booking29, rr40) into BookingRoomReservation
!insert (booking29, rr41) into BookingRoomReservation

!new RoomExtra('extraPreauthDeposit')
!extraPreauthDeposit.price := 100.0
!extraPreauthDeposit.description := 'Pre-authorization deposit (rooms not assigned yet)'

!insert (rr40, extraPreauthDeposit) into RoomReservationExtras

!new Room('room512')
!room512.roomNumber := 512
!room512.numBeds := 1
!room512.pricePerNight := 190.0
!room512.occupied := false
!room512.blocked := true

!new Room('room513')
!room513.roomNumber := 513
!room513.numBeds := 1
!room513.pricePerNight := 190.0
!room513.occupied := false
!room513.blocked := true

!insert (rr41, room512) into RoomReservationRoom
!insert (rr41, room513) into RoomReservationRoom

!new Bill('bill41')
!bill41.billId := 26001
!bill41.price := 100.0

!new Bill('bill42')
!bill42.billId := 26002
!bill42.price := 760.0

!insert (bill41, rr40) into BillRoomReservation
!insert (bill42, rr41) into BillRoomReservation

!insert (booking29, bill41) into BookingBill
!insert (booking29, bill42) into BookingBill

!new FreeRoomTypesDTO('dtoSeptemberWalkIn')
!dtoSeptemberWalkIn.roomTypeDescription := 'September walk-in rooms (unblocked)'
!dtoSeptemberWalkIn.numBeds := 1
!dtoSeptemberWalkIn.pricePerNight := 120.0
!dtoSeptemberWalkIn.numFreeRooms := 5

!new FreeRoomTypesDTO('dtoSeptemberConnectingSingles')
!dtoSeptemberConnectingSingles.roomTypeDescription := 'Connecting singles (limited)'
!dtoSeptemberConnectingSingles.numBeds := 1
!dtoSeptemberConnectingSingles.pricePerNight := 190.0
!dtoSeptemberConnectingSingles.numFreeRooms := 0
```
## Generation 27 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 56 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

# Generation 28
```
!new Booking('booking30')
!booking30.startDate := '2031-01-20'
!booking30.endDate := '2031-01-27'
!booking30.canceled := false
!booking30.bookingId := 10700
!booking30.confirmed := true

!new Customer('customer30')
!customer30.firstName := 'Asha'
!customer30.lastName := 'Patel'

!insert (booking30, customer30) into BookingCustomer

!new RoomReservation('rr42')
!rr42.checkInDate := '2031-01-20'
!rr42.checkOutDate := '2031-01-27'

!insert (booking30, rr42) into BookingRoomReservation

!new Room('room3001')
!room3001.roomNumber := 3001
!room3001.numBeds := 2
!room3001.pricePerNight := 165.0
!room3001.occupied := false
!room3001.blocked := true

!insert (rr42, room3001) into RoomReservationRoom

!new Bill('bill43')
!bill43.billId := 27001
!bill43.price := 1155.0

!insert (bill43, rr42) into BillRoomReservation
!insert (booking30, bill43) into BookingBill

!new FreeRoomTypesDTO('dtoJanuaryLongStay')
!dtoJanuaryLongStay.roomTypeDescription := 'January long-stay double'
!dtoJanuaryLongStay.numBeds := 2
!dtoJanuaryLongStay.pricePerNight := 165.0
!dtoJanuaryLongStay.numFreeRooms := 1
```
## Generation 28 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 31 | 0.00% |
| Multiplicities Errors | 0 | 5 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

# Generation 29
```
!new Booking('booking31')
!booking31.startDate := '2031-07-01'
!booking31.endDate := '2031-07-12'
!booking31.canceled := false
!booking31.bookingId := 10800
!booking31.confirmed := true

!new Customer('customer31')
!customer31.firstName := 'Leila'
!customer31.lastName := 'Haddad'

!insert (booking31, customer31) into BookingCustomer

!new RoomReservation('rr43')
!rr43.checkInDate := '2031-07-01'
!rr43.checkOutDate := '2031-07-04'

!new RoomReservation('rr44')
!rr44.checkInDate := '2031-07-04'
!rr44.checkOutDate := '2031-07-08'

!new RoomReservation('rr45')
!rr45.checkInDate := '2031-07-08'
!rr45.checkOutDate := '2031-07-10'

!new RoomReservation('rr46')
!rr46.checkInDate := '2031-07-10'
!rr46.checkOutDate := '2031-07-12'

!insert (booking31, rr43) into BookingRoomReservation
!insert (booking31, rr44) into BookingRoomReservation
!insert (booking31, rr45) into BookingRoomReservation
!insert (booking31, rr46) into BookingRoomReservation

!new Room('room4101')
!room4101.roomNumber := 4101
!room4101.numBeds := 2
!room4101.pricePerNight := 155.0
!room4101.occupied := false
!room4101.blocked := true

!new Room('room4102')
!room4102.roomNumber := 4102
!room4102.numBeds := 2
!room4102.pricePerNight := 155.0
!room4102.occupied := false
!room4102.blocked := true

!new Room('room1110')
!room1110.roomNumber := 1110
!room1110.numBeds := 3
!room1110.pricePerNight := 240.0
!room1110.occupied := false
!room1110.blocked := true

!new Room('room0520')
!room0520.roomNumber := 520
!room0520.numBeds := 1
!room0520.pricePerNight := 125.0
!room0520.occupied := false
!room0520.blocked := true

!new Room('room2305')
!room2305.roomNumber := 2305
!room2305.numBeds := 2
!room2305.pricePerNight := 185.0
!room2305.occupied := false
!room2305.blocked := true

!new Room('room2306')
!room2306.roomNumber := 2306
!room2306.numBeds := 2
!room2306.pricePerNight := 185.0
!room2306.occupied := false
!room2306.blocked := true

!insert (rr43, room4101) into RoomReservationRoom
!insert (rr43, room4102) into RoomReservationRoom
!insert (rr44, room1110) into RoomReservationRoom
!insert (rr45, room0520) into RoomReservationRoom
!insert (rr46, room2305) into RoomReservationRoom
!insert (rr46, room2306) into RoomReservationRoom

!new RoomExtra('extraCrib')
!extraCrib.price := 0.0
!extraCrib.description := 'Baby crib (included)'

!new RoomExtra('extraKitchenetteAccess')
!extraKitchenetteAccess.price := 30.0
!extraKitchenetteAccess.description := 'Kitchenette access fee'

!new RoomExtra('extraMaintenanceMoveNote')
!extraMaintenanceMoveNote.price := 0.0
!extraMaintenanceMoveNote.description := 'Room move due to maintenance'

!new RoomExtra('extraEveningShuttle')
!extraEveningShuttle.price := 25.0
!extraEveningShuttle.description := 'Evening shuttle to airport'

!insert (rr43, extraCrib) into RoomReservationExtras
!insert (rr43, extraKitchenetteAccess) into RoomReservationExtras
!insert (rr45, extraMaintenanceMoveNote) into RoomReservationExtras
!insert (rr46, extraEveningShuttle) into RoomReservationExtras

!new Bill('bill44')
!bill44.billId := 28001
!bill44.price := 310.0

!new Bill('bill45')
!bill45.billId := 28002
!bill45.price := 960.0

!new Bill('bill46')
!bill46.billId := 28003
!bill46.price := 250.0

!new Bill('bill47')
!bill47.billId := 28004
!bill47.price := 765.0

!insert (bill44, rr43) into BillRoomReservation
!insert (bill45, rr44) into BillRoomReservation
!insert (bill46, rr45) into BillRoomReservation
!insert (bill47, rr46) into BillRoomReservation

!insert (booking31, bill44) into BookingBill
!insert (booking31, bill45) into BookingBill
!insert (booking31, bill46) into BookingBill
!insert (booking31, bill47) into BookingBill

!new FreeRoomTypesDTO('dtoJulyFamilyConnect')
!dtoJulyFamilyConnect.roomTypeDescription := 'Family connecting rooms (July)'
!dtoJulyFamilyConnect.numBeds := 2
!dtoJulyFamilyConnect.pricePerNight := 155.0
!dtoJulyFamilyConnect.numFreeRooms := 1

!new FreeRoomTypesDTO('dtoJulyTriple')
!dtoJulyTriple.roomTypeDescription := 'Triple room (July peak)'
!dtoJulyTriple.numBeds := 3
!dtoJulyTriple.pricePerNight := 240.0
!dtoJulyTriple.numFreeRooms := 0
```
## Generation 29 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 114 | 0.00% |
| Multiplicities Errors | 0 | 23 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

# Generation 30
```
!new Booking('booking32')
!booking32.startDate := '2031-09-05'
!booking32.endDate := '2031-09-09'
!booking32.canceled := true
!booking32.bookingId := 10900
!booking32.confirmed := true

!new Customer('customer32')
!customer32.firstName := 'Ethan'
!customer32.lastName := 'Brooks'

!insert (booking32, customer32) into BookingCustomer

!new RoomReservation('rr47')
!rr47.checkInDate := '2031-09-05'
!rr47.checkOutDate := '2031-09-09'

!new RoomReservation('rr48')
!rr48.checkInDate := '2031-09-05'
!rr48.checkOutDate := '2031-09-05'

!insert (booking32, rr47) into BookingRoomReservation
!insert (booking32, rr48) into BookingRoomReservation

!new Room('room1444')
!room1444.roomNumber := 1444
!room1444.numBeds := 2
!room1444.pricePerNight := 198.0
!room1444.occupied := false
!room1444.blocked := true

!new Room('room1445')
!room1445.roomNumber := 1445
!room1445.numBeds := 2
!room1445.pricePerNight := 198.0
!room1445.occupied := false
!room1445.blocked := true

!insert (rr47, room1444) into RoomReservationRoom
!insert (rr47, room1445) into RoomReservationRoom

!new RoomExtra('extraCancellationCharge')
!extraCancellationCharge.price := 35.0
!extraCancellationCharge.description := 'Late cancellation charge'

!insert (rr48, extraCancellationCharge) into RoomReservationExtras

!new Bill('bill48')
!bill48.billId := 29001
!bill48.price := 0.0

!new Bill('bill49')
!bill49.billId := 29002
!bill49.price := 35.0

!insert (bill48, rr47) into BillRoomReservation
!insert (bill49, rr48) into BillRoomReservation

!insert (booking32, bill48) into BookingBill
!insert (booking32, bill49) into BookingBill

!new FreeRoomTypesDTO('dtoSeptemberAfterCancel')
!dtoSeptemberAfterCancel.roomTypeDescription := 'Standard double (released after cancellation)'
!dtoSeptemberAfterCancel.numBeds := 2
!dtoSeptemberAfterCancel.pricePerNight := 198.0
!dtoSeptemberAfterCancel.numFreeRooms := 2
```
## Generation 30 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 51 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

# Summary for all generations
| Summary | Value | 
|---|---| 
| Model | GPT_5_2 | 
| Type | Simple | 
| System | hotelmanagement | 
| Number of generations | 30 | 

| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 1612 | 0.00% |
| Multiplicities Errors | 0 | 283 | 0.00% |
| Invariants Errors | 0 | 90 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 27 | 0.00% |
| checkOutDate <= endDate | 0 | 27 | 0.00% |

