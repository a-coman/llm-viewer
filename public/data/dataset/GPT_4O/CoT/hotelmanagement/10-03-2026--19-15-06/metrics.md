# Generation 1
## Category baseline
```
!new Customer('customer1')
!customer1.firstName := 'Maria'
!customer1.lastName := 'Fernandez'

!new Booking('booking1')
!booking1.startDate := '2023-05-15'
!booking1.endDate := '2023-05-20'
!booking1.canceled := false
!booking1.bookingId := 101
!booking1.confirmed := true

!new Bill('bill1')
!bill1.price := 750.0
!bill1.billId := 201

!new Bill('bill2')
!bill2.price := 150.0
!bill2.billId := 202

!new FreeRoomTypesDTO('freeRoomType1')
!freeRoomType1.roomTypeDescription := 'Deluxe Suite'
!freeRoomType1.numBeds := 2
!freeRoomType1.pricePerNight := 150.0
!freeRoomType1.numFreeRooms := 3

!new RoomReservation('roomReservation1')
!roomReservation1.checkInDate := '2023-05-15'
!roomReservation1.checkOutDate := '2023-05-20'

!new RoomExtra('roomExtra1')
!roomExtra1.price := 100.0
!roomExtra1.description := 'Spa treatment package'

!new RoomExtra('roomExtra2')
!roomExtra2.price := 50.0
!roomExtra2.description := 'Minibar consumption'

!new Room('room1')
!room1.numBeds := 2
!room1.pricePerNight := 150.0
!room1.occupied := true
!room1.blocked := false
!room1.roomNumber := 305

!insert (booking1, customer1) into BookingCustomer

!insert (booking1, bill1) into BookingBill
!insert (booking1, bill2) into BookingBill

!insert (booking1, roomReservation1) into BookingRoomReservation

!insert (roomReservation1, roomExtra1) into RoomReservationExtras
!insert (roomReservation1, roomExtra2) into RoomReservationExtras

!insert (roomReservation1, room1) into RoomReservationRoom

!insert (bill1, roomReservation1) into BillRoomReservation
!insert (bill2, roomReservation1) into BillRoomReservation
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 44 | 0.00% |
| Multiplicities Errors | 1 | 9 | 11.11% |
| Invariants Errors | 0 | 3 | 0.00% |

| Multiplicities Errors | 
|---| 
```
Multiplicity constraint violation in association `BillRoomReservation':
  Object `roomReservation1' of class `RoomReservation' is connected to 2 objects of class `Bill'
  at association end `bill' but the multiplicity is specified as `1'.
```

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

## Category boundary
```
!new Customer('customer3')
!customer3.firstName := 'Anika'
!customer3.lastName := 'Sng'

!new Booking('booking3')
!booking3.startDate := '2023-12-30'
!booking3.endDate := '2024-01-02'
!booking3.canceled := false
!booking3.bookingId := 101
!booking3.confirmed := true

!new Bill('bill6')
!bill6.price := 0.0
!bill6.billId := 501

!new Bill('bill7')
!bill7.price := 9999.99
!bill7.billId := 502

!new FreeRoomTypesDTO('freeRoomType3')
!freeRoomType3.roomTypeDescription := 'Suite'
!freeRoomType3.numBeds := 6
!freeRoomType3.pricePerNight := 1500.00
!freeRoomType3.numFreeRooms := 0

!new RoomReservation('roomReservation3')
!roomReservation3.checkInDate := '2023-12-30'
!roomReservation3.checkOutDate := '2024-01-02'

!new RoomExtra('roomExtra5')
!roomExtra5.price := 0.0
!roomExtra5.description := 'Free WiFi'

!new RoomExtra('roomExtra6')
!roomExtra6.price := 250.0
!roomExtra6.description := 'Buffet Breakfast for two'

!new Room('room3_301')
!room3_301.numBeds := 6
!room3_301.pricePerNight := 1000.0
!room3_301.occupied := true
!room3_301.blocked := false
!room3_301.roomNumber := 301

!new Room('room3_302')
!room3_302.numBeds := 1
!room3_302.pricePerNight := 80.0
!room3_302.occupied := false
!room3_302.blocked := true
!room3_302.roomNumber := 302

!insert (booking3, customer3) into BookingCustomer

!insert (booking3, bill6) into BookingBill
!insert (booking3, bill7) into BookingBill

!insert (booking3, roomReservation3) into BookingRoomReservation

!insert (roomReservation3, roomExtra5) into RoomReservationExtras
!insert (roomReservation3, roomExtra6) into RoomReservationExtras

!insert (roomReservation3, room3_301) into RoomReservationRoom
!insert (roomReservation3, room3_302) into RoomReservationRoom

!insert (bill6, roomReservation3) into BillRoomReservation

!insert (bill7, roomReservation3) into BillRoomReservation
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 51 | 0.00% |
| Multiplicities Errors | 1 | 10 | 10.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Multiplicities Errors | 
|---| 
```
Multiplicity constraint violation in association `BillRoomReservation':
  Object `roomReservation3' of class `RoomReservation' is connected to 2 objects of class `Bill'
  at association end `bill' but the multiplicity is specified as `1'.
```

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

## Category complex
```
!new Customer('customer4')
!customer4.firstName := 'Sophia'
!customer4.lastName := 'Martinez'

!new Booking('booking4')
!booking4.startDate := '2023-11-20'
!booking4.endDate := '2023-11-27'
!booking4.canceled := false
!booking4.bookingId := 1007
!booking4.confirmed := true

!new Bill('bill8')
!bill8.price := 1325.00
!bill8.billId := 3002

!new RoomReservation('roomReservation4_1')
!roomReservation4_1.checkInDate := '2023-11-20'
!roomReservation4_1.checkOutDate := '2023-11-24'

!new RoomReservation('roomReservation4_2')
!roomReservation4_2.checkInDate := '2023-11-24'
!roomReservation4_2.checkOutDate := '2023-11-27'

!new Room('room4_101')
!room4_101.numBeds := 2
!room4_101.pricePerNight := 150.00
!room4_101.occupied := true
!room4_101.blocked := false
!room4_101.roomNumber := 101

!new Room('room4_105')
!room4_105.numBeds := 3
!room4_105.pricePerNight := 200.00
!room4_105.occupied := true
!room4_105.blocked := false
!room4_105.roomNumber := 105

!new RoomExtra('roomExtra7')
!roomExtra7.price := 30.00
!roomExtra7.description := 'Daily Breakfast Buffet'

!new RoomExtra('roomExtra9')
!roomExtra9.price := 45.00
!roomExtra9.description := 'Sunset Wine Tasting Event'

!new FreeRoomTypesDTO('freeRoomType4')
!freeRoomType4.roomTypeDescription := 'Suite with Sea View'
!freeRoomType4.numBeds := 2
!freeRoomType4.pricePerNight := 220.00
!freeRoomType4.numFreeRooms := 1

!insert (booking4, customer4) into BookingCustomer

!insert (booking4, bill8) into BookingBill

!insert (booking4, roomReservation4_1) into BookingRoomReservation
!insert (booking4, roomReservation4_2) into BookingRoomReservation

!insert (roomReservation4_1, room4_101) into RoomReservationRoom
!insert (roomReservation4_1, roomExtra7) into RoomReservationExtras
!insert (roomReservation4_1, roomExtra9) into RoomReservationExtras

!insert (roomReservation4_2, room4_105) into RoomReservationRoom
!insert (roomReservation4_2, roomExtra7) into RoomReservationExtras

!insert (bill8, roomReservation4_1) into BillRoomReservation
!insert (bill8, roomReservation4_2) into BillRoomReservation
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 52 | 0.00% |
| Multiplicities Errors | 2 | 11 | 18.18% |
| Invariants Errors | 0 | 3 | 0.00% |

| Multiplicities Errors | 
|---| 
```
Multiplicity constraint violation in association `BillRoomReservation':
  Object `bill8' of class `Bill' is connected to 2 objects of class `RoomReservation'
  at association end `roomReservation' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `RoomReservationExtras':
  Object `roomExtra7' of class `RoomExtra' is connected to 2 objects of class `RoomReservation'
  at association end `roomReservation' but the multiplicity is specified as `1'.
```

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

## Category edge
```
!new Customer('customer5')
!customer5.firstName := 'Lakshmi'
!customer5.lastName := 'Iyer'

!new Booking('booking5')
!booking5.startDate := '20-10-2023'
!booking5.endDate := '20-11-2023'
!booking5.canceled := false
!booking5.bookingId := 101
!booking5.confirmed := true

!new RoomReservation('roomReservation5_1')
!roomReservation5_1.checkInDate := '20-10-2023'
!roomReservation5_1.checkOutDate := '10-11-2023'

!new RoomReservation('roomReservation5_2')
!roomReservation5_2.checkInDate := '10-11-2023'
!roomReservation5_2.checkOutDate := '20-11-2023'

!new Room('room5_301')
!room5_301.numBeds := 2
!room5_301.pricePerNight := 150.00
!room5_301.occupied := true
!room5_301.blocked := false
!room5_301.roomNumber := 301

!new RoomExtra('extra5_1')
!extra5_1.price := 50.00
!extra5_1.description := 'Daily Spa Access'

!new RoomExtra('extra5_2')
!extra5_2.price := 30.00
!extra5_2.description := 'Cultural Festival Tickets'

!new RoomExtra('extra5_3')
!extra5_3.price := 20.00
!extra5_3.description := 'Premium Breakfast'

!new Bill('bill9')
!bill9.price := 3200.00
!bill9.billId := 501

!new Bill('bill10')
!bill10.price := 600.00
!bill10.billId := 502

!new Bill('bill11')
!bill11.price := 200.00
!bill11.billId := 503

!insert (booking5, customer5) into BookingCustomer

!insert (booking5, roomReservation5_1) into BookingRoomReservation
!insert (booking5, roomReservation5_2) into BookingRoomReservation

!insert (booking5, bill9) into BookingBill
!insert (booking5, bill10) into BookingBill
!insert (booking5, bill11) into BookingBill

!insert (roomReservation5_1, extra5_1) into RoomReservationExtras
!insert (roomReservation5_1, extra5_2) into RoomReservationExtras

!insert (roomReservation5_2, extra5_3) into RoomReservationExtras

!insert (bill9, roomReservation5_1) into BillRoomReservation
!insert (bill10, roomReservation5_2) into BillRoomReservation
!insert (bill11, roomReservation5_1) into BillRoomReservation

!new Room('room5_302')
!room5_302.numBeds := 2
!room5_302.pricePerNight := 150.00
!room5_302.occupied := true
!room5_302.blocked := false
!room5_302.roomNumber := 302

!insert (roomReservation5_1, room5_301) into RoomReservationRoom
!insert (roomReservation5_2, room5_302) into RoomReservationRoom
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 59 | 0.00% |
| Multiplicities Errors | 1 | 14 | 7.14% |
| Invariants Errors | 0 | 3 | 0.00% |

| Multiplicities Errors | 
|---| 
```
Multiplicity constraint violation in association `BillRoomReservation':
  Object `roomReservation5_1' of class `RoomReservation' is connected to 2 objects of class `Bill'
  at association end `bill' but the multiplicity is specified as `1'.
```

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

## Category invalid
```
!new Customer('customer2')
!customer2.firstName := 'Lucia'
!customer2.lastName := 'Fernández'

!new Booking('booking2')
!booking2.startDate := '2023-07-15'
!booking2.endDate := '2023-07-21'
!booking2.canceled := false
!booking2.bookingId := 1001
!booking2.confirmed := true

!new RoomReservation('roomReservation2_1')
!roomReservation2_1.checkInDate := '2023-07-15'
!roomReservation2_1.checkOutDate := '2023-07-21'

!new RoomReservation('roomReservation2_2')
!roomReservation2_2.checkInDate := '2023-07-15'
!roomReservation2_2.checkOutDate := '2023-07-21'

!new RoomReservation('roomReservation2_3')
!roomReservation2_3.checkInDate := '2023-07-15'
!roomReservation2_3.checkOutDate := '2023-07-21'

!new Bill('bill3')
!bill3.price := 2400.0
!bill3.billId := 501

!new Bill('bill4')
!bill4.price := 2300.0
!bill4.billId := 502

!new Bill('bill5')
!bill5.price := 2500.0
!bill5.billId := 503

!new FreeRoomTypesDTO('freeRoomType2')
!freeRoomType2.roomTypeDescription := 'Family Suite'
!freeRoomType2.numBeds := 3
!freeRoomType2.pricePerNight := 200.0
!freeRoomType2.numFreeRooms := 2

!new Room('room2_101')
!room2_101.numBeds := 2
!room2_101.pricePerNight := 150.0
!room2_101.occupied := true
!room2_101.blocked := false
!room2_101.roomNumber := 101

!new Room('room2_102')
!room2_102.numBeds := 2
!room2_102.pricePerNight := 150.0
!room2_102.occupied := true
!room2_102.blocked := false
!room2_102.roomNumber := 102

!new Room('room2_201')
!room2_201.numBeds := 2
!room2_201.pricePerNight := 150.0
!room2_201.occupied := true
!room2_201.blocked := false
!room2_201.roomNumber := 201

!new Room('room2_202')
!room2_202.numBeds := 2
!room2_202.pricePerNight := 150.0
!room2_202.occupied := true
!room2_202.blocked := false
!room2_202.roomNumber := 202

!new Room('room2_301')
!room2_301.numBeds := 2
!room2_301.pricePerNight := 150.0
!room2_301.occupied := true
!room2_301.blocked := false
!room2_301.roomNumber := 301

!new Room('room2_302')
!room2_302.numBeds := 2
!room2_302.pricePerNight := 150.0
!room2_302.occupied := true
!room2_302.blocked := false
!room2_302.roomNumber := 302

!new RoomExtra('roomExtra3')
!roomExtra3.price := 50.0
!roomExtra3.description := 'Breakfast Buffet'

!new RoomExtra('roomExtra4')
!roomExtra4.price := 30.0
!roomExtra4.description := 'Parking Facility'

!insert (booking2, customer2) into BookingCustomer

!insert (booking2, roomReservation2_1) into BookingRoomReservation
!insert (booking2, roomReservation2_2) into BookingRoomReservation
!insert (booking2, roomReservation2_3) into BookingRoomReservation

!insert (roomReservation2_1, room2_101) into RoomReservationRoom
!insert (roomReservation2_1, room2_102) into RoomReservationRoom

!insert (roomReservation2_2, room2_201) into RoomReservationRoom
!insert (roomReservation2_2, room2_202) into RoomReservationRoom

!insert (roomReservation2_3, room2_301) into RoomReservationRoom
!insert (roomReservation2_3, room2_302) into RoomReservationRoom

!insert (roomReservation2_1, roomExtra3) into RoomReservationExtras
!insert (roomReservation2_1, roomExtra4) into RoomReservationExtras

!insert (roomReservation2_2, roomExtra3) into RoomReservationExtras
!insert (roomReservation2_2, roomExtra4) into RoomReservationExtras

!insert (roomReservation2_3, roomExtra3) into RoomReservationExtras
!insert (roomReservation2_3, roomExtra4) into RoomReservationExtras

!insert (bill3, roomReservation2_1) into BillRoomReservation
!insert (bill4, roomReservation2_2) into BillRoomReservation
!insert (bill5, roomReservation2_3) into BillRoomReservation
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 5 | 19 | 26.32% |
| Invariants Errors (Not included on General) | 0 | 3 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `BookingBill':
  Object `bill5' of class `Bill' is connected to 0 objects of class `Booking'
  at association end `booking' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `BookingBill':
  Object `bill3' of class `Bill' is connected to 0 objects of class `Booking'
  at association end `booking' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `BookingBill':
  Object `bill4' of class `Bill' is connected to 0 objects of class `Booking'
  at association end `booking' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `RoomReservationExtras':
  Object `roomExtra3' of class `RoomExtra' is connected to 3 objects of class `RoomReservation'
  at association end `roomReservation' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `RoomReservationExtras':
  Object `roomExtra4' of class `RoomExtra' is connected to 3 objects of class `RoomReservation'
  at association end `roomReservation' but the multiplicity is specified as `1'.
```

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

## Generation 1 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 299 | 0.00% |
| Multiplicities Errors | 5 | 44 | 11.36% |
| Invariants Errors | 0 | 12 | 0.00% |

| Multiplicities Errors | 
|---| 
```
Multiplicity constraint violation in association `BillRoomReservation':
  Object `roomReservation1' of class `RoomReservation' is connected to 2 objects of class `Bill'
  at association end `bill' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `BillRoomReservation':
  Object `roomReservation3' of class `RoomReservation' is connected to 2 objects of class `Bill'
  at association end `bill' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `BillRoomReservation':
  Object `bill8' of class `Bill' is connected to 2 objects of class `RoomReservation'
  at association end `roomReservation' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `RoomReservationExtras':
  Object `roomExtra7' of class `RoomExtra' is connected to 2 objects of class `RoomReservation'
  at association end `roomReservation' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `BillRoomReservation':
  Object `roomReservation5_1' of class `RoomReservation' is connected to 2 objects of class `Bill'
  at association end `bill' but the multiplicity is specified as `1'.
```

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 5 | 19 | 26.32% |
| Invariants Errors (Not included on General) | 0 | 3 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `BookingBill':
  Object `bill5' of class `Bill' is connected to 0 objects of class `Booking'
  at association end `booking' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `BookingBill':
  Object `bill3' of class `Bill' is connected to 0 objects of class `Booking'
  at association end `booking' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `BookingBill':
  Object `bill4' of class `Bill' is connected to 0 objects of class `Booking'
  at association end `booking' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `RoomReservationExtras':
  Object `roomExtra3' of class `RoomExtra' is connected to 3 objects of class `RoomReservation'
  at association end `roomReservation' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `RoomReservationExtras':
  Object `roomExtra4' of class `RoomExtra' is connected to 3 objects of class `RoomReservation'
  at association end `roomReservation' but the multiplicity is specified as `1'.
```

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 5 | 0.00% |
| checkOutDate <= endDate | 0 | 5 | 0.00% |

# Generation 2
## Category baseline
```
!new Customer('customer8')
!customer8.firstName := 'Akira'
!customer8.lastName := 'Nakamura'

!new Booking('booking8')
!booking8.startDate := '2023-12-01'
!booking8.endDate := '2023-12-10'
!booking8.canceled := false
!booking8.bookingId := 102
!booking8.confirmed := true

!new Bill('bill16')
!bill16.price := 1800.0
!bill16.billId := 301

!new Bill('bill17')
!bill17.price := 300.0
!bill17.billId := 302

!new FreeRoomTypesDTO('freeRoomType7')
!freeRoomType7.roomTypeDescription := 'Family Suite'
!freeRoomType7.numBeds := 4
!freeRoomType7.pricePerNight := 200.0
!freeRoomType7.numFreeRooms := 1

!new RoomReservation('roomReservation8_1')
!roomReservation8_1.checkInDate := '2023-12-01'
!roomReservation8_1.checkOutDate := '2023-12-10'

!new RoomReservation('roomReservation8_2')
!roomReservation8_2.checkInDate := '2023-12-01'
!roomReservation8_2.checkOutDate := '2023-12-10'

!new RoomExtra('extra8_1')
!extra8_1.price := 80.0
!extra8_1.description := 'Daily Room Service'

!new RoomExtra('extra8_2')
!extra8_2.price := 220.0
!extra8_2.description := 'City Tour Package'

!new Room('room8_401')
!room8_401.numBeds := 2
!room8_401.pricePerNight := 200.0
!room8_401.occupied := true
!room8_401.blocked := false
!room8_401.roomNumber := 401

!new Room('room8_402')
!room8_402.numBeds := 2
!room8_402.pricePerNight := 200.0
!room8_402.occupied := true
!room8_402.blocked := false
!room8_402.roomNumber := 402

!insert (booking8, customer8) into BookingCustomer

!insert (booking8, bill16) into BookingBill
!insert (booking8, bill17) into BookingBill

!insert (booking8, roomReservation8_1) into BookingRoomReservation
!insert (booking8, roomReservation8_2) into BookingRoomReservation

!insert (roomReservation8_1, room8_401) into RoomReservationRoom
!insert (roomReservation8_2, room8_402) into RoomReservationRoom

!insert (roomReservation8_1, extra8_1) into RoomReservationExtras
!insert (roomReservation8_2, extra8_2) into RoomReservationExtras

!insert (bill16, roomReservation8_1) into BillRoomReservation
!insert (bill17, roomReservation8_2) into BillRoomReservation
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 55 | 0.00% |
| Multiplicities Errors | 0 | 11 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

## Category boundary
```
!new Customer('customer6')
!customer6.firstName := 'Jorge'
!customer6.lastName := 'Ruiz'

!new Booking('booking6')
!booking6.startDate := '2024-06-01'
!booking6.endDate := '2024-06-05'
!booking6.canceled := true
!booking6.bookingId := 202
!booking6.confirmed := false

!new Bill('bill12')
!bill12.price := 500.0
!bill12.billId := 601

!new FreeRoomTypesDTO('freeRoomType5')
!freeRoomType5.roomTypeDescription := 'Single Room'
!freeRoomType5.numBeds := 1
!freeRoomType5.pricePerNight := 50.00
!freeRoomType5.numFreeRooms := 5

!new RoomReservation('roomReservation6')
!roomReservation6.checkInDate := '2024-06-01'
!roomReservation6.checkOutDate := '2024-06-05'

!new RoomExtra('extra6_1')
!extra6_1.price := 30.0
!extra6_1.description := 'Airport Pickup Service'

!new RoomExtra('extra6_2')
!extra6_2.price := 10.0
!extra6_2.description := 'Late Check-out'

!new Room('room6_401')
!room6_401.numBeds := 2
!room6_401.pricePerNight := 75.0
!room6_401.occupied := true
!room6_401.blocked := false
!room6_401.roomNumber := 401

!new Room('room6_402')
!room6_402.numBeds := 3
!room6_402.pricePerNight := 120.0
!room6_402.occupied := false
!room6_402.blocked := false
!room6_402.roomNumber := 402

!insert (booking6, customer6) into BookingCustomer

!insert (booking6, bill12) into BookingBill

!insert (booking6, roomReservation6) into BookingRoomReservation

!insert (roomReservation6, extra6_1) into RoomReservationExtras
!insert (roomReservation6, extra6_2) into RoomReservationExtras

!insert (roomReservation6, room6_401) into RoomReservationRoom
!insert (roomReservation6, room6_402) into RoomReservationRoom

!insert (bill12, roomReservation6) into BillRoomReservation
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 46 | 0.00% |
| Multiplicities Errors | 0 | 8 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

## Category complex
```
!new Customer('customer9')
!customer9.firstName := 'Liam'
!customer9.lastName := 'MacGregor'

!new Booking('booking9')
!booking9.startDate := '2023-12-05'
!booking9.endDate := '2023-12-12'
!booking9.canceled := false
!booking9.bookingId := 1015
!booking9.confirmed := true

!new Bill('bill18')
!bill18.price := 850.00
!bill18.billId := 3015

!new Bill('bill19')
!bill19.price := 860.00
!bill19.billId := 3016

!new RoomReservation('roomReservation9_1')
!roomReservation9_1.checkInDate := '2023-12-05'
!roomReservation9_1.checkOutDate := '2023-12-09'

!new RoomReservation('roomReservation9_2')
!roomReservation9_2.checkInDate := '2023-12-09'
!roomReservation9_2.checkOutDate := '2023-12-12'

!new Room('room9_203')
!room9_203.numBeds := 1
!room9_203.pricePerNight := 120.00
!room9_203.occupied := true
!room9_203.blocked := false
!room9_203.roomNumber := 203

!new Room('room9_208')
!room9_208.numBeds := 2
!room9_208.pricePerNight := 180.00
!room9_208.occupied := true
!room9_208.blocked := false
!room9_208.roomNumber := 208

!new RoomExtra('extra9_1')
!extra9_1.price := 40.00
!extra9_1.description := 'Traditional Scottish Breakfast'

!new RoomExtra('extra9_2')
!extra9_2.price := 60.00
!extra9_2.description := 'Guided Highland Tour with Lunch'

!new FreeRoomTypesDTO('freeRoomType8')
!freeRoomType8.roomTypeDescription := 'Family Room with Mountain View'
!freeRoomType8.numBeds := 3
!freeRoomType8.pricePerNight := 210.00
!freeRoomType8.numFreeRooms := 2

!insert (booking9, customer9) into BookingCustomer

!insert (booking9, bill18) into BookingBill
!insert (booking9, bill19) into BookingBill

!insert (booking9, roomReservation9_1) into BookingRoomReservation
!insert (booking9, roomReservation9_2) into BookingRoomReservation

!insert (roomReservation9_1, room9_203) into RoomReservationRoom
!insert (roomReservation9_1, extra9_1) into RoomReservationExtras

!insert (roomReservation9_2, room9_208) into RoomReservationRoom
!insert (roomReservation9_2, extra9_2) into RoomReservationExtras

!insert (bill18, roomReservation9_1) into BillRoomReservation
!insert (bill19, roomReservation9_2) into BillRoomReservation
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 55 | 0.00% |
| Multiplicities Errors | 0 | 11 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

## Category edge
```
!new Customer('customer10')
!customer10.firstName := 'Juan'
!customer10.lastName := 'Rodriguez'

!new Customer('customer11')
!customer11.firstName := 'Anna'
!customer11.lastName := 'Kowalski'

!new Booking('booking10')
!booking10.startDate := '05-12-2023'
!booking10.endDate := '12-12-2023'
!booking10.canceled := false
!booking10.bookingId := 102
!booking10.confirmed := true

!new RoomReservation('roomReservation10_1')
!roomReservation10_1.checkInDate := '05-12-2023'
!roomReservation10_1.checkOutDate := '12-12-2023'

!new RoomReservation('roomReservation10_2')
!roomReservation10_2.checkInDate := '05-12-2023'
!roomReservation10_2.checkOutDate := '12-12-2023'

!new Room('room10_201')
!room10_201.numBeds := 2
!room10_201.pricePerNight := 100.00
!room10_201.occupied := true
!room10_201.blocked := false
!room10_201.roomNumber := 204

!new Room('room10_202')
!room10_202.numBeds := 3
!room10_202.pricePerNight := 150.00
!room10_202.occupied := true
!room10_202.blocked := false
!room10_202.roomNumber := 205

!new RoomExtra('extra10_1')
!extra10_1.price := 100.00
!extra10_1.description := 'Shared Family Dinner'

!new RoomExtra('extra10_2')
!extra10_2.price := 75.00
!extra10_2.description := 'Shared Private Tour'

!new Bill('bill20')
!bill20.price := 1200.00
!bill20.billId := 504

!new Bill('bill21')
!bill21.price := 1225.00
!bill21.billId := 505

!insert (booking10, customer10) into BookingCustomer

!insert (booking10, roomReservation10_1) into BookingRoomReservation
!insert (booking10, roomReservation10_2) into BookingRoomReservation

!insert (booking10, bill20) into BookingBill
!insert (booking10, bill21) into BookingBill

!insert (roomReservation10_1, room10_201) into RoomReservationRoom
!insert (roomReservation10_2, room10_202) into RoomReservationRoom

!insert (roomReservation10_1, extra10_1) into RoomReservationExtras
!insert (roomReservation10_2, extra10_2) into RoomReservationExtras

!insert (bill20, roomReservation10_1) into BillRoomReservation
!insert (bill21, roomReservation10_2) into BillRoomReservation
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 53 | 0.00% |
| Multiplicities Errors | 1 | 11 | 9.09% |
| Invariants Errors | 0 | 3 | 0.00% |

| Multiplicities Errors | 
|---| 
```
Multiplicity constraint violation in association `BookingCustomer':
  Object `customer11' of class `Customer' is connected to 0 objects of class `Booking'
  at association end `booking' but the multiplicity is specified as `1'.
```

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

## Category invalid
```
!new Customer('customer7')
!customer7.firstName := 'Hiroshi'
!customer7.lastName := 'Yamamoto'

!new Booking('booking7')
!booking7.startDate := '2023-11-10'
!booking7.endDate := '2023-11-14'
!booking7.canceled := false
!booking7.bookingId := 2002
!booking7.confirmed := true

!new RoomReservation('roomReservation7_1')
!roomReservation7_1.checkInDate := '2023-11-10'
!roomReservation7_1.checkOutDate := '2023-11-14'

!new RoomReservation('roomReservation7_2')
!roomReservation7_2.checkInDate := '2023-11-10'
!roomReservation7_2.checkOutDate := '2023-11-14'

!new RoomReservation('roomReservation7_3')
!roomReservation7_3.checkInDate := '2023-11-10'
!roomReservation7_3.checkOutDate := '2023-11-14'

!new Room('room701')
!room701.numBeds := 1
!room701.pricePerNight := 400.0
!room701.occupied := true
!room701.blocked := false
!room701.roomNumber := 701

!new Room('room7_401')
!room7_401.numBeds := 1
!room7_401.pricePerNight := 300.0
!room7_401.occupied := true
!room7_401.blocked := false
!room7_401.roomNumber := 401

!new Room('room7_402')
!room7_402.numBeds := 1
!room7_402.pricePerNight := 300.0
!room7_402.occupied := true
!room7_402.blocked := false
!room7_402.roomNumber := 402

!new Room('room7_501')
!room7_501.numBeds := 1
!room7_501.pricePerNight := 200.0
!room7_501.occupied := true
!room7_501.blocked := false
!room7_501.roomNumber := 501

!new Room('room7_502')
!room7_502.numBeds := 1
!room7_502.pricePerNight := 200.0
!room7_502.occupied := true
!room7_502.blocked := false
!room7_502.roomNumber := 502

!new Bill('bill13')
!bill13.price := 3600.0
!bill13.billId := 601

!new Bill('bill14')
!bill14.price := 2800.0
!bill14.billId := 602

!new Bill('bill15')
!bill15.price := 4000.0
!bill15.billId := 603

!new RoomExtra('extra7_1')
!extra7_1.price := 100.0
!extra7_1.description := 'Airport Shuttle Service'

!new RoomExtra('extra7_2')
!extra7_2.price := 75.0
!extra7_2.description := 'Tokyo City Tour'

!new FreeRoomTypesDTO('freeRoomType6')
!freeRoomType6.roomTypeDescription := 'Executive Suite'
!freeRoomType6.numBeds := 1
!freeRoomType6.pricePerNight := 400.0
!freeRoomType6.numFreeRooms := 1

!insert (booking7, customer7) into BookingCustomer

!insert (booking7, roomReservation7_1) into BookingRoomReservation
!insert (booking7, roomReservation7_2) into BookingRoomReservation
!insert (booking7, roomReservation7_3) into BookingRoomReservation

!insert (booking7, bill13) into BookingBill
!insert (booking7, bill14) into BookingBill
!insert (booking7, bill15) into BookingBill

!insert (roomReservation7_1, room7_401) into RoomReservationRoom
!insert (roomReservation7_1, room7_402) into RoomReservationRoom

!insert (roomReservation7_2, room7_501) into RoomReservationRoom
!insert (roomReservation7_2, room7_502) into RoomReservationRoom

!insert (roomReservation7_3, room701) into RoomReservationRoom

!insert (roomReservation7_1, extra7_1) into RoomReservationExtras
!insert (roomReservation7_2, extra7_2) into RoomReservationExtras

!insert (bill13, roomReservation7_1) into BillRoomReservation
!insert (bill14, roomReservation7_2) into BillRoomReservation
!insert (bill15, roomReservation7_3) into BillRoomReservation
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 17 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

## Generation 2 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 294 | 0.00% |
| Multiplicities Errors | 1 | 41 | 2.44% |
| Invariants Errors | 0 | 12 | 0.00% |

| Multiplicities Errors | 
|---| 
```
Multiplicity constraint violation in association `BookingCustomer':
  Object `customer11' of class `Customer' is connected to 0 objects of class `Booking'
  at association end `booking' but the multiplicity is specified as `1'.
```

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 17 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 5 | 0.00% |
| checkOutDate <= endDate | 0 | 5 | 0.00% |

# Generation 3
## Category baseline
```
!new Customer('customer14')
!customer14.firstName := 'Priya'
!customer14.lastName := 'Singh'

!new Booking('booking13')
!booking13.startDate := '2024-03-05'
!booking13.endDate := '2024-03-10'
!booking13.canceled := false
!booking13.bookingId := 103
!booking13.confirmed := true

!new Bill('bill26')
!bill26.price := 1000.0
!bill26.billId := 401

!new Bill('bill27')
!bill27.price := 500.0
!bill27.billId := 402

!new Bill('bill28')
!bill28.price := 400.0
!bill28.billId := 403

!new FreeRoomTypesDTO('freeRoomType11')
!freeRoomType11.roomTypeDescription := 'Executive Suite'
!freeRoomType11.numBeds := 1
!freeRoomType11.pricePerNight := 200.0
!freeRoomType11.numFreeRooms := 5

!new RoomReservation('roomReservation13_1')
!roomReservation13_1.checkInDate := '2024-03-05'
!roomReservation13_1.checkOutDate := '2024-03-10'

!new RoomReservation('roomReservation13_2')
!roomReservation13_2.checkInDate := '2024-03-06'
!roomReservation13_2.checkOutDate := '2024-03-09'

!new RoomExtra('extra13_1')
!extra13_1.price := 100.0
!extra13_1.description := 'High-Speed Wi-Fi Access'

!new RoomExtra('extra13_2')
!extra13_2.price := 200.0
!extra13_2.description := 'Audio-Visual Equipment Rental'

!new Room('room13_501')
!room13_501.numBeds := 1
!room13_501.pricePerNight := 200.0
!room13_501.occupied := true
!room13_501.blocked := false
!room13_501.roomNumber := 501

!new Room('room13_101')
!room13_101.numBeds := 1
!room13_101.pricePerNight := 0.0
!room13_101.occupied := true
!room13_101.blocked := true
!room13_101.roomNumber := 101

!insert (booking13, customer14) into BookingCustomer

!insert (booking13, bill26) into BookingBill
!insert (booking13, bill27) into BookingBill
!insert (booking13, bill28) into BookingBill

!insert (booking13, roomReservation13_1) into BookingRoomReservation
!insert (booking13, roomReservation13_2) into BookingRoomReservation

!insert (roomReservation13_1, room13_501) into RoomReservationRoom
!insert (roomReservation13_2, room13_101) into RoomReservationRoom

!insert (roomReservation13_1, extra13_1) into RoomReservationExtras
!insert (roomReservation13_2, extra13_2) into RoomReservationExtras

!insert (bill26, roomReservation13_1) into BillRoomReservation
!insert (bill27, roomReservation13_2) into BillRoomReservation
!insert (bill28, roomReservation13_2) into BillRoomReservation
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 60 | 0.00% |
| Multiplicities Errors | 1 | 13 | 7.69% |
| Invariants Errors | 0 | 3 | 0.00% |

| Multiplicities Errors | 
|---| 
```
Multiplicity constraint violation in association `BillRoomReservation':
  Object `roomReservation13_2' of class `RoomReservation' is connected to 2 objects of class `Bill'
  at association end `bill' but the multiplicity is specified as `1'.
```

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

## Category boundary
```
!new Customer('customer12')
!customer12.firstName := 'Fatima'
!customer12.lastName := 'Ali'

!new Booking('booking11')
!booking11.startDate := '2023-01-01'
!booking11.endDate := '2023-01-02'
!booking11.canceled := false
!booking11.bookingId := 303
!booking11.confirmed := true

!new Bill('bill22')
!bill22.price := 150.0
!bill22.billId := 701

!new FreeRoomTypesDTO('freeRoomType9')
!freeRoomType9.roomTypeDescription := 'Deluxe Room'
!freeRoomType9.numBeds := 2
!freeRoomType9.pricePerNight := 150.00
!freeRoomType9.numFreeRooms := 10

!new RoomReservation('roomReservation11')
!roomReservation11.checkInDate := '2023-01-01'
!roomReservation11.checkOutDate := '2023-01-02'

!new RoomExtra('extra11_1')
!extra11_1.price := 20.0
!extra11_1.description := 'Room Service'

!new Room('room11_501')
!room11_501.numBeds := 2
!room11_501.pricePerNight := 150.0
!room11_501.occupied := true
!room11_501.blocked := false
!room11_501.roomNumber := 501

!insert (booking11, customer12) into BookingCustomer

!insert (booking11, bill22) into BookingBill

!insert (booking11, roomReservation11) into BookingRoomReservation

!insert (roomReservation11, room11_501) into RoomReservationRoom

!insert (roomReservation11, extra11_1) into RoomReservationExtras

!insert (bill22, roomReservation11) into BillRoomReservation
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 35 | 0.00% |
| Multiplicities Errors | 0 | 6 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

## Category complex
```
!new Customer('customer15')
!customer15.firstName := 'Ayesha'
!customer15.lastName := 'Al-Mansoori'

!new Booking('booking14')
!booking14.startDate := '2023-10-15'
!booking14.endDate := '2023-10-22'
!booking14.canceled := false
!booking14.bookingId := 1023
!booking14.confirmed := true

!new Bill('bill29_1')
!bill29_1.price := 1225.00
!bill29_1.billId := 3027

!new Bill('bill29_2')
!bill29_2.price := 1225.00
!bill29_2.billId := 3028

!new RoomReservation('roomReservation14_1')
!roomReservation14_1.checkInDate := '2023-10-15'
!roomReservation14_1.checkOutDate := '2023-10-18'

!new RoomReservation('roomReservation14_2')
!roomReservation14_2.checkInDate := '2023-10-18'
!roomReservation14_2.checkOutDate := '2023-10-22'

!new Room('room14_310')
!room14_310.numBeds := 2
!room14_310.pricePerNight := 300.00
!room14_310.occupied := true
!room14_310.blocked := false
!room14_310.roomNumber := 310

!new Room('room14_312')
!room14_312.numBeds := 1
!room14_312.pricePerNight := 250.00
!room14_312.occupied := true
!room14_312.blocked := false
!room14_312.roomNumber := 312

!new RoomExtra('extra14_1')
!extra14_1.price := 50.00
!extra14_1.description := 'Desert Safari Adventure'

!new RoomExtra('extra14_2')
!extra14_2.price := 20.00
!extra14_2.description := 'Arabic Coffee and Pastry Service'

!new FreeRoomTypesDTO('freeRoomType12')
!freeRoomType12.roomTypeDescription := 'Luxury King Suite with Balcony'
!freeRoomType12.numBeds := 1
!freeRoomType12.pricePerNight := 380.00
!freeRoomType12.numFreeRooms := 0

!insert (booking14, customer15) into BookingCustomer

!insert (booking14, bill29_1) into BookingBill
!insert (booking14, bill29_2) into BookingBill

!insert (booking14, roomReservation14_1) into BookingRoomReservation
!insert (booking14, roomReservation14_2) into BookingRoomReservation

!insert (roomReservation14_1, room14_310) into RoomReservationRoom
!insert (roomReservation14_1, extra14_1) into RoomReservationExtras

!insert (roomReservation14_2, room14_312) into RoomReservationRoom
!insert (roomReservation14_2, extra14_2) into RoomReservationExtras

!insert (bill29_1, roomReservation14_1) into BillRoomReservation
!insert (bill29_2, roomReservation14_2) into BillRoomReservation
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 55 | 0.00% |
| Multiplicities Errors | 0 | 11 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

## Category edge
```
!new Customer('customer16')
!customer16.firstName := 'Thabo'
!customer16.lastName := 'Dlamini'

!new Booking('booking15')
!booking15.startDate := '15-01-2024'
!booking15.endDate := '22-01-2024'
!booking15.canceled := false
!booking15.bookingId := 103
!booking15.confirmed := true

!new RoomReservation('roomReservation15')
!roomReservation15.checkInDate := '15-01-2024'
!roomReservation15.checkOutDate := '22-01-2024'

!new Room('room15_101')
!room15_101.numBeds := 1
!room15_101.pricePerNight := 50.00
!room15_101.occupied := true
!room15_101.blocked := false
!room15_101.roomNumber := 101

!new RoomExtra('extra15_1')
!extra15_1.price := 5.00
!extra15_1.description := 'Daily Newspaper'

!new RoomExtra('extra15_2')
!extra15_2.price := 10.00
!extra15_2.description := 'One-Time Gym Access'

!new RoomExtra('extra15_3')
!extra15_3.price := 8.00
!extra15_3.description := 'Evening Snack Combo'

!new Bill('bill30')
!bill30.price := 453.00
!bill30.billId := 506

!insert (booking15, customer16) into BookingCustomer

!insert (booking15, roomReservation15) into BookingRoomReservation

!insert (booking15, bill30) into BookingBill

!insert (roomReservation15, room15_101) into RoomReservationRoom

!insert (roomReservation15, extra15_1) into RoomReservationExtras
!insert (roomReservation15, extra15_2) into RoomReservationExtras
!insert (roomReservation15, extra15_3) into RoomReservationExtras

!insert (bill30, roomReservation15) into BillRoomReservation
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 38 | 0.00% |
| Multiplicities Errors | 0 | 8 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

## Category invalid
```
!new Customer('customer13')
!customer13.firstName := 'Deepak'
!customer13.lastName := 'Hegde'

!new Booking('booking12')
!booking12.startDate := '2024-01-05'
!booking12.endDate := '2024-01-12'
!booking12.canceled := false
!booking12.bookingId := 3003
!booking12.confirmed := true

!new RoomReservation('roomReservation12_1')
!roomReservation12_1.checkInDate := '2024-01-05'
!roomReservation12_1.checkOutDate := '2024-01-12'

!new RoomReservation('roomReservation12_2')
!roomReservation12_2.checkInDate := '2024-01-05'
!roomReservation12_2.checkOutDate := '2024-01-12'

!new RoomReservation('roomReservation12_3')
!roomReservation12_3.checkInDate := '2024-01-05'
!roomReservation12_3.checkOutDate := '2024-01-12'

!new Room('room12_801')
!room12_801.numBeds := 2
!room12_801.pricePerNight := 300.0
!room12_801.occupied := true
!room12_801.blocked := false
!room12_801.roomNumber := 801

!new Room('room12_802')
!room12_802.numBeds := 2
!room12_802.pricePerNight := 300.0
!room12_802.occupied := true
!room12_802.blocked := false
!room12_802.roomNumber := 802

!new Room('room12_901')
!room12_901.numBeds := 2
!room12_901.pricePerNight := 300.0
!room12_901.occupied := true
!room12_901.blocked := false
!room12_901.roomNumber := 901

!new Room('room12_902')
!room12_902.numBeds := 2
!room12_902.pricePerNight := 300.0
!room12_902.occupied := true
!room12_902.blocked := false
!room12_902.roomNumber := 902

!new Room('room12_1001')
!room12_1001.numBeds := 2
!room12_1001.pricePerNight := 300.0
!room12_1001.occupied := true
!room12_1001.blocked := false
!room12_1001.roomNumber := 1001

!new Bill('bill23')
!bill23.price := 4100.0
!bill23.billId := 701

!new Bill('bill24')
!bill24.price := 4300.0
!bill24.billId := 702

!new Bill('bill25')
!bill25.price := 2200.0
!bill25.billId := 703

!new RoomExtra('extra12_1')
!extra12_1.price := 20.0
!extra12_1.description := 'Vegetarian Breakfast'

!new RoomExtra('extra12_2')
!extra12_2.price := 35.0
!extra12_2.description := 'Mandarin Language Guide'

!new FreeRoomTypesDTO('freeRoomType10')
!freeRoomType10.roomTypeDescription := 'Family Double Room'
!freeRoomType10.numBeds := 2
!freeRoomType10.pricePerNight := 300.0
!freeRoomType10.numFreeRooms := 5

!insert (booking12, customer13) into BookingCustomer

!insert (booking12, roomReservation12_1) into BookingRoomReservation
!insert (booking12, roomReservation12_2) into BookingRoomReservation
!insert (booking12, roomReservation12_3) into BookingRoomReservation

!insert (booking12, bill23) into BookingBill
!insert (booking12, bill24) into BookingBill
!insert (booking12, bill25) into BookingBill

!insert (roomReservation12_1, room12_801) into RoomReservationRoom
!insert (roomReservation12_1, room12_802) into RoomReservationRoom

!insert (roomReservation12_2, room12_901) into RoomReservationRoom
!insert (roomReservation12_2, room12_902) into RoomReservationRoom

!insert (roomReservation12_3, room12_1001) into RoomReservationRoom

!insert (roomReservation12_1, extra12_1) into RoomReservationExtras
!insert (roomReservation12_2, extra12_2) into RoomReservationExtras

!insert (bill23, roomReservation12_1) into BillRoomReservation
!insert (bill24, roomReservation12_2) into BillRoomReservation
!insert (bill25, roomReservation12_3) into BillRoomReservation
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 17 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

## Generation 3 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 273 | 0.00% |
| Multiplicities Errors | 1 | 38 | 2.63% |
| Invariants Errors | 0 | 12 | 0.00% |

| Multiplicities Errors | 
|---| 
```
Multiplicity constraint violation in association `BillRoomReservation':
  Object `roomReservation13_2' of class `RoomReservation' is connected to 2 objects of class `Bill'
  at association end `bill' but the multiplicity is specified as `1'.
```

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 17 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 5 | 0.00% |
| checkOutDate <= endDate | 0 | 5 | 0.00% |

# Generation 4
## Category baseline
```
!new Customer('customer19')
!customer19.firstName := 'Leila'
!customer19.lastName := 'Jafari'

!new Booking('booking18')
!booking18.startDate := '2024-06-15'
!booking18.endDate := '2024-06-22'
!booking18.canceled := false
!booking18.bookingId := 104
!booking18.confirmed := true

!new Bill('bill37')
!bill37.price := 1400.0
!bill37.billId := 501

!new Bill('bill38')
!bill38.price := 600.0
!bill38.billId := 502

!new FreeRoomTypesDTO('freeRoomType15')
!freeRoomType15.roomTypeDescription := 'Romantic Suite'
!freeRoomType15.numBeds := 1
!freeRoomType15.pricePerNight := 200.0
!freeRoomType15.numFreeRooms := 2

!new RoomReservation('roomReservation18_1')
!roomReservation18_1.checkInDate := '2024-06-15'
!roomReservation18_1.checkOutDate := '2024-06-22'

!new RoomReservation('roomReservation18_2')
!roomReservation18_2.checkInDate := '2024-06-15'
!roomReservation18_2.checkOutDate := '2024-06-22'

!new RoomExtra('extra18_1')
!extra18_1.price := 120.0
!extra18_1.description := 'Private Candlelight Dinner'

!new RoomExtra('extra18_2')
!extra18_2.price := 180.0
!extra18_2.description := 'Couple Spa Session'

!new RoomExtra('extra18_3')
!extra18_3.price := 50.0
!extra18_3.description := 'Complimentary Champagne on Arrival'

!new Room('room18_601')
!room18_601.numBeds := 1
!room18_601.pricePerNight := 200.0
!room18_601.occupied := false
!room18_601.blocked := true
!room18_601.roomNumber := 601

!insert (booking18, customer19) into BookingCustomer

!insert (booking18, bill37) into BookingBill
!insert (booking18, bill38) into BookingBill

!insert (booking18, roomReservation18_1) into BookingRoomReservation
!insert (booking18, roomReservation18_2) into BookingRoomReservation

!insert (roomReservation18_1, room18_601) into RoomReservationRoom

!insert (roomReservation18_1, extra18_1) into RoomReservationExtras
!insert (roomReservation18_1, extra18_2) into RoomReservationExtras
!insert (roomReservation18_2, extra18_3) into RoomReservationExtras

!insert (bill37, roomReservation18_1) into BillRoomReservation
!insert (bill38, roomReservation18_2) into BillRoomReservation
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 52 | 0.00% |
| Multiplicities Errors | 0 | 11 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

## Category boundary
```
!new Customer('customer17')
!customer17.firstName := 'Claude'
!customer17.lastName := 'Dubois'

!new Booking('booking16')
!booking16.startDate := '2024-08-15'
!booking16.endDate := '2024-08-25'
!booking16.canceled := false
!booking16.bookingId := 404
!booking16.confirmed := true

!new Bill('bill31')
!bill31.price := 3000.0
!bill31.billId := 801

!new Bill('bill32')
!bill32.price := 1200.0
!bill32.billId := 802

!new FreeRoomTypesDTO('freeRoomType13')
!freeRoomType13.roomTypeDescription := 'Family Suite'
!freeRoomType13.numBeds := 5
!freeRoomType13.pricePerNight := 300.00
!freeRoomType13.numFreeRooms := 1

!new RoomReservation('roomReservation16_1')
!roomReservation16_1.checkInDate := '2024-08-15'
!roomReservation16_1.checkOutDate := '2024-08-25'

!new RoomReservation('roomReservation16_2')
!roomReservation16_2.checkInDate := '2024-08-15'
!roomReservation16_2.checkOutDate := '2024-08-25'

!new RoomExtra('extra16_1')
!extra16_1.price := 150.0
!extra16_1.description := 'Guided City Tour'

!new RoomExtra('extra16_2')
!extra16_2.price := 75.0
!extra16_2.description := 'Spa Package'

!new RoomExtra('extra16_3')
!extra16_3.price := 125.0
!extra16_3.description := 'Dinner at Rooftop Restaurant'

!new Room('room16_601')
!room16_601.numBeds := 5
!room16_601.pricePerNight := 250.0
!room16_601.occupied := true
!room16_601.blocked := false
!room16_601.roomNumber := 601

!new Room('room16_602')
!room16_602.numBeds := 4
!room16_602.pricePerNight := 200.0
!room16_602.occupied := true
!room16_602.blocked := false
!room16_602.roomNumber := 602

!insert (booking16, customer17) into BookingCustomer

!insert (booking16, bill31) into BookingBill
!insert (booking16, bill32) into BookingBill

!insert (booking16, roomReservation16_1) into BookingRoomReservation
!insert (booking16, roomReservation16_2) into BookingRoomReservation

!insert (roomReservation16_1, room16_601) into RoomReservationRoom
!insert (roomReservation16_2, room16_602) into RoomReservationRoom

!insert (roomReservation16_1, extra16_1) into RoomReservationExtras
!insert (roomReservation16_1, extra16_2) into RoomReservationExtras
!insert (roomReservation16_2, extra16_3) into RoomReservationExtras

!insert (bill31, roomReservation16_1) into BillRoomReservation
!insert (bill32, roomReservation16_2) into BillRoomReservation
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 59 | 0.00% |
| Multiplicities Errors | 0 | 12 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

## Category complex
```
!new Customer('customer20')
!customer20.firstName := 'Carlos'
!customer20.lastName := 'Fernández'

!new Booking('booking19')
!booking19.startDate := '2023-07-10'
!booking19.endDate := '2023-07-17'
!booking19.canceled := false
!booking19.bookingId := 1034
!booking19.confirmed := true

!new Bill('bill39_1')
!bill39_1.price := 1075.00
!bill39_1.billId := 3038

!new Bill('bill39_2')
!bill39_2.price := 1075.00
!bill39_2.billId := 3039

!new RoomReservation('roomReservation19_1')
!roomReservation19_1.checkInDate := '2023-07-10'
!roomReservation19_1.checkOutDate := '2023-07-13'

!new RoomReservation('roomReservation19_2')
!roomReservation19_2.checkInDate := '2023-07-13'
!roomReservation19_2.checkOutDate := '2023-07-17'

!new Room('room19_27')
!room19_27.numBeds := 2
!room19_27.pricePerNight := 220.00
!room19_27.occupied := true
!room19_27.blocked := false
!room19_27.roomNumber := 27

!new Room('room19_31')
!room19_31.numBeds := 1
!room19_31.pricePerNight := 200.00
!room19_31.occupied := true
!room19_31.blocked := false
!room19_31.roomNumber := 31

!new RoomExtra('extra19_1')
!extra19_1.price := 75.00
!extra19_1.description := 'Jungle Night Tour'

!new RoomExtra('extra19_2')
!extra19_2.price := 50.00
!extra19_2.description := 'Traditional Costa Rican Dinner'

!new RoomExtra('extra19_3')
!extra19_3.price := 40.00
!extra19_3.description := 'Yoga and Meditation Session'

!new FreeRoomTypesDTO('freeRoomType16')
!freeRoomType16.roomTypeDescription := 'Eco-Suite with River View'
!freeRoomType16.numBeds := 2
!freeRoomType16.pricePerNight := 260.00
!freeRoomType16.numFreeRooms := 3

!insert (booking19, customer20) into BookingCustomer

!insert (booking19, bill39_1) into BookingBill
!insert (booking19, bill39_2) into BookingBill

!insert (booking19, roomReservation19_1) into BookingRoomReservation
!insert (booking19, roomReservation19_2) into BookingRoomReservation

!insert (roomReservation19_1, room19_27) into RoomReservationRoom
!insert (roomReservation19_1, extra19_1) into RoomReservationExtras
!insert (roomReservation19_1, extra19_2) into RoomReservationExtras

!insert (roomReservation19_2, room19_31) into RoomReservationRoom
!insert (roomReservation19_2, extra19_3) into RoomReservationExtras

!insert (bill39_1, roomReservation19_1) into BillRoomReservation
!insert (bill39_2, roomReservation19_2) into BillRoomReservation
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 59 | 0.00% |
| Multiplicities Errors | 0 | 12 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

## Category edge
```
!new Customer('customer23')
!customer23.firstName := 'Sarah'
!customer23.lastName := 'Lee'

!new Booking('booking22')
!booking22.startDate := '01-03-2024'
!booking22.endDate := '05-03-2024'
!booking22.canceled := false
!booking22.bookingId := 104
!booking22.confirmed := true

!new RoomReservation('roomReservation22_1')
!roomReservation22_1.checkInDate := '01-03-2024'
!roomReservation22_1.checkOutDate := '05-03-2024'

!new RoomReservation('roomReservation22_2')
!roomReservation22_2.checkInDate := '01-03-2024'
!roomReservation22_2.checkOutDate := '05-03-2024'

!new Room('room22_301')
!room22_301.numBeds := 2
!room22_301.pricePerNight := 200.00
!room22_301.occupied := true
!room22_301.blocked := false
!room22_301.roomNumber := 501

!new Room('room22_302')
!room22_302.numBeds := 2
!room22_302.pricePerNight := 200.00
!room22_302.occupied := false
!room22_302.blocked := true
!room22_302.roomNumber := 502

!new Room('room22_303')
!room22_303.numBeds := 2
!room22_303.pricePerNight := 200.00
!room22_303.occupied := false
!room22_303.blocked := true
!room22_303.roomNumber := 503

!new RoomExtra('extra22_1')
!extra22_1.price := 20.00
!extra22_1.description := 'Conference Call Setup'

!new RoomExtra('extra22_2')
!extra22_2.price := 50.00
!extra22_2.description := 'Business Catering Package'

!new Bill('bill44')
!bill44.price := 1280.00
!bill44.billId := 507

!new Bill('bill45')
!bill45.price := 800.00
!bill45.billId := 508

!insert (booking22, customer23) into BookingCustomer

!insert (booking22, roomReservation22_1) into BookingRoomReservation
!insert (booking22, roomReservation22_2) into BookingRoomReservation

!insert (booking22, bill44) into BookingBill
!insert (booking22, bill45) into BookingBill

!insert (roomReservation22_1, room22_301) into RoomReservationRoom
!insert (roomReservation22_2, room22_302) into RoomReservationRoom
!insert (roomReservation22_2, room22_303) into RoomReservationRoom

!insert (roomReservation22_1, extra22_1) into RoomReservationExtras
!insert (roomReservation22_1, extra22_2) into RoomReservationExtras

!insert (bill44, roomReservation22_1) into BillRoomReservation
!insert (bill45, roomReservation22_2) into BillRoomReservation
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 57 | 0.00% |
| Multiplicities Errors | 0 | 12 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

## Category invalid
```
!new Customer('customer18')
!customer18.firstName := 'Emily'
!customer18.lastName := 'Carter'

!new Booking('booking17')
!booking17.startDate := '2024-03-20'
!booking17.endDate := '2024-03-25'
!booking17.canceled := false
!booking17.bookingId := 4004
!booking17.confirmed := true

!new RoomReservation('roomReservation17_1')
!roomReservation17_1.checkInDate := '2024-03-20'
!roomReservation17_1.checkOutDate := '2024-03-25'

!new RoomReservation('roomReservation17_2')
!roomReservation17_2.checkInDate := '2024-03-20'
!roomReservation17_2.checkOutDate := '2024-03-25'

!new RoomReservation('roomReservation17_3')
!roomReservation17_3.checkInDate := '2024-03-20'
!roomReservation17_3.checkOutDate := '2024-03-25'

!new RoomReservation('roomReservation17_4')
!roomReservation17_4.checkInDate := '2024-03-20'
!roomReservation17_4.checkOutDate := '2024-03-25'

!new Room('room17_1101')
!room17_1101.numBeds := 1
!room17_1101.pricePerNight := 250.0
!room17_1101.occupied := true
!room17_1101.blocked := false
!room17_1101.roomNumber := 1101

!new Room('room17_1102')
!room17_1102.numBeds := 1
!room17_1102.pricePerNight := 250.0
!room17_1102.occupied := true
!room17_1102.blocked := false
!room17_1102.roomNumber := 1102

!new Room('room17_1103')
!room17_1103.numBeds := 1
!room17_1103.pricePerNight := 250.0
!room17_1103.occupied := true
!room17_1103.blocked := false
!room17_1103.roomNumber := 1103

!new Room('room17_1104')
!room17_1104.numBeds := 1
!room17_1104.pricePerNight := 250.0
!room17_1104.occupied := true
!room17_1104.blocked := false
!room17_1104.roomNumber := 1104

!new Bill('bill33')
!bill33.price := 1250.0
!bill33.billId := 801

!new Bill('bill34')
!bill34.price := 1300.0
!bill34.billId := 802

!new Bill('bill35')
!bill35.price := 1200.0
!bill35.billId := 803

!new Bill('bill36')
!bill36.price := 1350.0
!bill36.billId := 804

!new RoomExtra('extra17_1')
!extra17_1.price := 40.0
!extra17_1.description := 'Conference Kit'

!new RoomExtra('extra17_2')
!extra17_2.price := 20.0
!extra17_2.description := 'Daily Newspaper Delivery'

!new FreeRoomTypesDTO('freeRoomType14')
!freeRoomType14.roomTypeDescription := 'Conference Single Room'
!freeRoomType14.numBeds := 1
!freeRoomType14.pricePerNight := 250.0
!freeRoomType14.numFreeRooms := 10

!insert (booking17, customer18) into BookingCustomer

!insert (booking17, roomReservation17_1) into BookingRoomReservation
!insert (booking17, roomReservation17_2) into BookingRoomReservation
!insert (booking17, roomReservation17_3) into BookingRoomReservation
!insert (booking17, roomReservation17_4) into BookingRoomReservation

!insert (booking17, bill33) into BookingBill
!insert (booking17, bill34) into BookingBill
!insert (booking17, bill35) into BookingBill
!insert (booking17, bill36) into BookingBill

!insert (roomReservation17_1, room17_1101) into RoomReservationRoom
!insert (roomReservation17_2, room17_1102) into RoomReservationRoom
!insert (roomReservation17_3, room17_1103) into RoomReservationRoom
!insert (roomReservation17_4, room17_1104) into RoomReservationRoom

!insert (roomReservation17_1, extra17_1) into RoomReservationExtras
!insert (roomReservation17_2, extra17_2) into RoomReservationExtras

!insert (bill33, roomReservation17_1) into BillRoomReservation
!insert (bill34, roomReservation17_2) into BillRoomReservation
!insert (bill35, roomReservation17_3) into BillRoomReservation
!insert (bill36, roomReservation17_4) into BillRoomReservation
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 19 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

## Generation 4 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 314 | 0.00% |
| Multiplicities Errors | 0 | 47 | 0.00% |
| Invariants Errors | 0 | 12 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 19 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 5 | 0.00% |
| checkOutDate <= endDate | 0 | 5 | 0.00% |

# Generation 5
## Category baseline
```
!new Customer('customer21')
!customer21.firstName := 'Carlos'
!customer21.lastName := 'Hernández'

!new Booking('booking20')
!booking20.startDate := '2024-02-01'
!booking20.endDate := '2024-04-01'
!booking20.canceled := false
!booking20.bookingId := 105
!booking20.confirmed := true

!new Bill('bill40')
!bill40.price := 3000.0
!bill40.billId := 601

!new Bill('bill41')
!bill41.price := 2900.0
!bill41.billId := 602

!new Bill('bill42')
!bill42.price := 100.0
!bill42.billId := 603

!new FreeRoomTypesDTO('freeRoomType17')
!freeRoomType17.roomTypeDescription := 'Business Apartment'
!freeRoomType17.numBeds := 1
!freeRoomType17.pricePerNight := 100.0
!freeRoomType17.numFreeRooms := 4

!new RoomReservation('roomReservation20_1')
!roomReservation20_1.checkInDate := '2024-02-01'
!roomReservation20_1.checkOutDate := '2024-03-01'

!new RoomReservation('roomReservation20_2')
!roomReservation20_2.checkInDate := '2024-03-01'
!roomReservation20_2.checkOutDate := '2024-04-01'

!new RoomExtra('extra20_1')
!extra20_1.price := 50.0
!extra20_1.description := 'Printer Rental'

!new RoomExtra('extra20_2')
!extra20_2.price := 50.0
!extra20_2.description := 'Extended Pantry Kitchen Set'

!new Room('room20_701')
!room20_701.numBeds := 1
!room20_701.pricePerNight := 100.0
!room20_701.occupied := true
!room20_701.blocked := false
!room20_701.roomNumber := 701

!insert (booking20, customer21) into BookingCustomer

!insert (booking20, bill40) into BookingBill
!insert (booking20, bill41) into BookingBill
!insert (booking20, bill42) into BookingBill

!insert (booking20, roomReservation20_1) into BookingRoomReservation
!insert (booking20, roomReservation20_2) into BookingRoomReservation

!insert (roomReservation20_1, room20_701) into RoomReservationRoom
!insert (roomReservation20_2, room20_701) into RoomReservationRoom

!insert (roomReservation20_1, extra20_1) into RoomReservationExtras
!insert (roomReservation20_2, extra20_2) into RoomReservationExtras

!insert (bill40, roomReservation20_1) into BillRoomReservation
!insert (bill41, roomReservation20_2) into BillRoomReservation
!insert (bill42, roomReservation20_2) into BillRoomReservation
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 54 | 0.00% |
| Multiplicities Errors | 2 | 13 | 15.38% |
| Invariants Errors | 0 | 3 | 0.00% |

| Multiplicities Errors | 
|---| 
```
Multiplicity constraint violation in association `BillRoomReservation':
  Object `roomReservation20_2' of class `RoomReservation' is connected to 2 objects of class `Bill'
  at association end `bill' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `RoomReservationRoom':
  Object `room20_701' of class `Room' is connected to 2 objects of class `RoomReservation'
  at association end `roomReservation' but the multiplicity is specified as `1'.
```

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

## Category boundary
```
!new Customer('customer22')
!customer22.firstName := 'Lila'
!customer22.lastName := 'Chen'

!new Booking('booking21')
!booking21.startDate := '2025-11-01'
!booking21.endDate := '2025-11-01'
!booking21.canceled := false
!booking21.bookingId := 505
!booking21.confirmed := true

!new Bill('bill43')
!bill43.price := 0.0
!bill43.billId := 901

!new FreeRoomTypesDTO('freeRoomType18')
!freeRoomType18.roomTypeDescription := 'Conference Room'
!freeRoomType18.numBeds := 0
!freeRoomType18.pricePerNight := 500.00
!freeRoomType18.numFreeRooms := 3

!new RoomReservation('roomReservation21')
!roomReservation21.checkInDate := '2025-11-01'
!roomReservation21.checkOutDate := '2025-11-01'

!new RoomExtra('extra21_1')
!extra21_1.price := 0.0
!extra21_1.description := 'Projector Rental'

!new RoomExtra('extra21_2')
!extra21_2.price := 15.0
!extra21_2.description := 'Coffee and Snacks Service'

!new Room('room21_701')
!room21_701.numBeds := 1
!room21_701.pricePerNight := 0.0
!room21_701.occupied := true
!room21_701.blocked := false
!room21_701.roomNumber := 701

!insert (booking21, customer22) into BookingCustomer

!insert (booking21, bill43) into BookingBill

!insert (booking21, roomReservation21) into BookingRoomReservation

!insert (roomReservation21, room21_701) into RoomReservationRoom

!insert (roomReservation21, extra21_1) into RoomReservationExtras
!insert (roomReservation21, extra21_2) into RoomReservationExtras

!insert (bill43, roomReservation21) into BillRoomReservation
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 39 | 0.00% |
| Multiplicities Errors | 0 | 7 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

## Category complex
```
!new Customer('customer24')
!customer24.firstName := 'Eva'
!customer24.lastName := 'Schneider'

!new Booking('booking23')
!booking23.startDate := '2024-01-15'
!booking23.endDate := '2024-01-22'
!booking23.canceled := false
!booking23.bookingId := 1041
!booking23.confirmed := true

!new Bill('bill46_1')
!bill46_1.price := 925.00
!bill46_1.billId := 3045

!new Bill('bill46_2')
!bill46_2.price := 925.00
!bill46_2.billId := 3046

!new RoomReservation('roomReservation23_1')
!roomReservation23_1.checkInDate := '2024-01-15'
!roomReservation23_1.checkOutDate := '2024-01-19'

!new RoomReservation('roomReservation23_2')
!roomReservation23_2.checkInDate := '2024-01-19'
!roomReservation23_2.checkOutDate := '2024-01-22'

!new Room('room23_12')
!room23_12.numBeds := 1
!room23_12.pricePerNight := 130.00
!room23_12.occupied := true
!room23_12.blocked := false
!room23_12.roomNumber := 12

!new Room('room23_14')
!room23_14.numBeds := 2
!room23_14.pricePerNight := 180.00
!room23_14.occupied := true
!room23_14.blocked := false
!room23_14.roomNumber := 14

!new RoomExtra('extra23_1')
!extra23_1.price := 65.00
!extra23_1.description := 'Ski Pass and Equipment Rental'

!new RoomExtra('extra23_2')
!extra23_2.price := 30.00
!extra23_2.description := 'Guided Snowshoe Hike'

!new FreeRoomTypesDTO('freeRoomType19')
!freeRoomType19.roomTypeDescription := 'Romantic Chalet Room'
!freeRoomType19.numBeds := 1
!freeRoomType19.pricePerNight := 150.00
!freeRoomType19.numFreeRooms := 5

!insert (booking23, customer24) into BookingCustomer

!insert (booking23, bill46_1) into BookingBill
!insert (booking23, bill46_2) into BookingBill

!insert (booking23, roomReservation23_1) into BookingRoomReservation
!insert (booking23, roomReservation23_2) into BookingRoomReservation

!insert (roomReservation23_1, room23_12) into RoomReservationRoom
!insert (roomReservation23_1, extra23_1) into RoomReservationExtras

!insert (roomReservation23_2, room23_14) into RoomReservationRoom
!insert (roomReservation23_2, extra23_2) into RoomReservationExtras

!insert (bill46_1, roomReservation23_1) into BillRoomReservation
!insert (bill46_2, roomReservation23_2) into BillRoomReservation
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 55 | 0.00% |
| Multiplicities Errors | 0 | 11 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

## Category edge
```
!new Customer('customer28')
!customer28.firstName := 'Emergency'
!customer28.lastName := 'Coordinator'

!new Booking('booking27')
!booking27.startDate := '10-02-2024'
!booking27.endDate := '15-02-2024'
!booking27.canceled := false
!booking27.bookingId := 105
!booking27.confirmed := true

!new RoomReservation('roomReservation27')
!roomReservation27.checkInDate := '10-02-2024'
!roomReservation27.checkOutDate := '15-02-2024'

!new Room('room27_401')
!room27_401.numBeds := 4
!room27_401.pricePerNight := 0.00
!room27_401.occupied := true
!room27_401.blocked := false
!room27_401.roomNumber := 601

!new Room('room27_402')
!room27_402.numBeds := 4
!room27_402.pricePerNight := 0.00
!room27_402.occupied := true
!room27_402.blocked := false
!room27_402.roomNumber := 602

!new RoomExtra('extra27_1')
!extra27_1.price := 0.00
!extra27_1.description := 'Rapid Medical Assistance'

!new RoomExtra('extra27_2')
!extra27_2.price := 0.00
!extra27_2.description := 'Round-the-Clock Meal Service'

!new RoomExtra('extra27_3')
!extra27_3.price := 0.00
!extra27_3.description := 'Temporary Clothing Supply'

!new Bill('bill53')
!bill53.price := 0.00
!bill53.billId := 509

!insert (booking27, customer28) into BookingCustomer

!insert (booking27, roomReservation27) into BookingRoomReservation

!insert (booking27, bill53) into BookingBill

!insert (roomReservation27, room27_401) into RoomReservationRoom
!insert (roomReservation27, room27_402) into RoomReservationRoom

!insert (roomReservation27, extra27_1) into RoomReservationExtras
!insert (roomReservation27, extra27_2) into RoomReservationExtras
!insert (roomReservation27, extra27_3) into RoomReservationExtras

!insert (bill53, roomReservation27) into BillRoomReservation
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 45 | 0.00% |
| Multiplicities Errors | 0 | 9 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

## Category invalid
```
!new Customer('customer25')
!customer25.firstName := 'Jane'
!customer25.lastName := 'Dupont'

!new Booking('booking24')
!booking24.startDate := '2024-06-15'
!booking24.endDate := '2024-06-22'
!booking24.canceled := false
!booking24.bookingId := 5005
!booking24.confirmed := true

!new RoomReservation('roomReservation24_1')
!roomReservation24_1.checkInDate := '2024-06-15'
!roomReservation24_1.checkOutDate := '2024-06-22'

!new RoomReservation('roomReservation24_2')
!roomReservation24_2.checkInDate := '2024-06-15'
!roomReservation24_2.checkOutDate := '2024-06-22'

!new RoomReservation('roomReservation24_3')
!roomReservation24_3.checkInDate := '2024-06-15'
!roomReservation24_3.checkOutDate := '2024-06-22'

!new Room('room24_2101')
!room24_2101.numBeds := 1
!room24_2101.pricePerNight := 1250.0
!room24_2101.occupied := true
!room24_2101.blocked := false
!room24_2101.roomNumber := 2101

!new Room('room24_2102')
!room24_2102.numBeds := 1
!room24_2102.pricePerNight := 1250.0
!room24_2102.occupied := true
!room24_2102.blocked := false
!room24_2102.roomNumber := 2102

!new Room('room24_3101')
!room24_3101.numBeds := 1
!room24_3101.pricePerNight := 950.0
!room24_3101.occupied := true
!room24_3101.blocked := false
!room24_3101.roomNumber := 3101

!new Room('room24_3102')
!room24_3102.numBeds := 1
!room24_3102.pricePerNight := 950.0
!room24_3102.occupied := true
!room24_3102.blocked := false
!room24_3102.roomNumber := 3102

!new Room('room24_4101')
!room24_4101.numBeds := 1
!room24_4101.pricePerNight := 1500.0
!room24_4101.occupied := true
!room24_4101.blocked := false
!room24_4101.roomNumber := 4101

!new Bill('bill47')
!bill47.price := 8800.0
!bill47.billId := 901

!new Bill('bill48')
!bill48.price := 7600.0
!bill48.billId := 902

!new Bill('bill49')
!bill49.price := 12000.0
!bill49.billId := 903

!new RoomExtra('extra24_1')
!extra24_1.price := 300.0
!extra24_1.description := 'Wedding Arch Decoration'

!new RoomExtra('extra24_2')
!extra24_2.price := 200.0
!extra24_2.description := 'Private Dinner Setup on Beach'

!new FreeRoomTypesDTO('freeRoomType20')
!freeRoomType20.roomTypeDescription := 'Beachfront Suite'
!freeRoomType20.numBeds := 1
!freeRoomType20.pricePerNight := 1250.0
!freeRoomType20.numFreeRooms := 4

!insert (booking24, customer25) into BookingCustomer

!insert (booking24, roomReservation24_1) into BookingRoomReservation
!insert (booking24, roomReservation24_2) into BookingRoomReservation
!insert (booking24, roomReservation24_3) into BookingRoomReservation

!insert (booking24, bill47) into BookingBill
!insert (booking24, bill48) into BookingBill
!insert (booking24, bill49) into BookingBill

!insert (roomReservation24_1, room24_2101) into RoomReservationRoom
!insert (roomReservation24_1, room24_2102) into RoomReservationRoom

!insert (roomReservation24_2, room24_3101) into RoomReservationRoom
!insert (roomReservation24_2, room24_3102) into RoomReservationRoom

!insert (roomReservation24_3, room24_4101) into RoomReservationRoom

!insert (roomReservation24_1, extra24_1) into RoomReservationExtras
!insert (roomReservation24_2, extra24_2) into RoomReservationExtras

!insert (bill47, roomReservation24_1) into BillRoomReservation
!insert (bill48, roomReservation24_2) into BillRoomReservation
!insert (bill49, roomReservation24_3) into BillRoomReservation
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 17 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

## Generation 5 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 278 | 0.00% |
| Multiplicities Errors | 2 | 40 | 5.00% |
| Invariants Errors | 0 | 12 | 0.00% |

| Multiplicities Errors | 
|---| 
```
Multiplicity constraint violation in association `BillRoomReservation':
  Object `roomReservation20_2' of class `RoomReservation' is connected to 2 objects of class `Bill'
  at association end `bill' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `RoomReservationRoom':
  Object `room20_701' of class `Room' is connected to 2 objects of class `RoomReservation'
  at association end `roomReservation' but the multiplicity is specified as `1'.
```

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 17 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 5 | 0.00% |
| checkOutDate <= endDate | 0 | 5 | 0.00% |

# Generation 6
## Category baseline
```
!new Customer('customer26')
!customer26.firstName := 'Oliver'
!customer26.lastName := 'Edwards'

!new Booking('booking25')
!booking25.startDate := '2024-07-10'
!booking25.endDate := '2024-07-17'
!booking25.canceled := false
!booking25.bookingId := 106
!booking25.confirmed := true

!new Bill('bill50')
!bill50.price := 5000.0
!bill50.billId := 701

!new Bill('bill51')
!bill51.price := 1500.0
!bill51.billId := 702

!new FreeRoomTypesDTO('freeRoomType21')
!freeRoomType21.roomTypeDescription := 'Adventure Suite'
!freeRoomType21.numBeds := 3
!freeRoomType21.pricePerNight := 300.0
!freeRoomType21.numFreeRooms := 2

!new RoomReservation('roomReservation25_1')
!roomReservation25_1.checkInDate := '2024-07-10'
!roomReservation25_1.checkOutDate := '2024-07-17'

!new RoomReservation('roomReservation25_2')
!roomReservation25_2.checkInDate := '2024-07-10'
!roomReservation25_2.checkOutDate := '2024-07-17'

!new RoomExtra('extra25_1')
!extra25_1.price := 300.0
!extra25_1.description := 'Hiking and Rafting Gear Rental'

!new RoomExtra('extra25_2')
!extra25_2.price := 800.0
!extra25_2.description := 'Guided Mountain and River Tours'

!new RoomExtra('extra25_3')
!extra25_3.price := 400.0
!extra25_3.description := 'Professional Photography Session'

!new Room('room25_801')
!room25_801.numBeds := 3
!room25_801.pricePerNight := 300.0
!room25_801.occupied := true
!room25_801.blocked := false
!room25_801.roomNumber := 801

!new Room('room25_802')
!room25_802.numBeds := 3
!room25_802.pricePerNight := 300.0
!room25_802.occupied := true
!room25_802.blocked := false
!room25_802.roomNumber := 802

!insert (booking25, customer26) into BookingCustomer

!insert (booking25, bill50) into BookingBill
!insert (booking25, bill51) into BookingBill

!insert (booking25, roomReservation25_1) into BookingRoomReservation
!insert (booking25, roomReservation25_2) into BookingRoomReservation

!insert (roomReservation25_1, room25_801) into RoomReservationRoom
!insert (roomReservation25_2, room25_802) into RoomReservationRoom

!insert (roomReservation25_1, extra25_1) into RoomReservationExtras
!insert (roomReservation25_1, extra25_2) into RoomReservationExtras
!insert (roomReservation25_2, extra25_3) into RoomReservationExtras

!insert (bill50, roomReservation25_1) into BillRoomReservation
!insert (bill51, roomReservation25_2) into BillRoomReservation
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 59 | 0.00% |
| Multiplicities Errors | 0 | 12 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

## Category boundary
```
!new Customer('customer27')
!customer27.firstName := 'Omar'
!customer27.lastName := 'Al-Farsi'

!new Booking('booking26')
!booking26.startDate := '2025-03-10'
!booking26.endDate := '2025-03-14'
!booking26.canceled := false
!booking26.bookingId := 606
!booking26.confirmed := true

!new Bill('bill52')
!bill52.price := 2500.0
!bill52.billId := 1001

!new FreeRoomTypesDTO('freeRoomType22')
!freeRoomType22.roomTypeDescription := 'Executive Suite'
!freeRoomType22.numBeds := 1
!freeRoomType22.pricePerNight := 250.00
!freeRoomType22.numFreeRooms := 0

!new RoomReservation('roomReservation26')
!roomReservation26.checkInDate := '2025-03-10'
!roomReservation26.checkOutDate := '2025-03-14'

!new RoomExtra('extra26_1')
!extra26_1.price := 300.0
!extra26_1.description := 'Conference Package with AV Support'

!new RoomExtra('extra26_2')
!extra26_2.price := 50.0
!extra26_2.description := 'Daily Breakfast Buffet'

!new RoomExtra('extra26_3')
!extra26_3.price := 200.0
!extra26_3.description := 'Gala Dinner'

!new Room('room26_801')
!room26_801.numBeds := 1
!room26_801.pricePerNight := 250.0
!room26_801.occupied := true
!room26_801.blocked := false
!room26_801.roomNumber := 801

!new Room('room26_802')
!room26_802.numBeds := 1
!room26_802.pricePerNight := 700.0
!room26_802.occupied := true
!room26_802.blocked := false
!room26_802.roomNumber := 802

!insert (booking26, customer27) into BookingCustomer

!insert (booking26, bill52) into BookingBill

!insert (booking26, roomReservation26) into BookingRoomReservation

!insert (roomReservation26, room26_801) into RoomReservationRoom
!insert (roomReservation26, room26_802) into RoomReservationRoom

!insert (roomReservation26, extra26_1) into RoomReservationExtras
!insert (roomReservation26, extra26_2) into RoomReservationExtras
!insert (roomReservation26, extra26_3) into RoomReservationExtras

!insert (bill52, roomReservation26) into BillRoomReservation
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 50 | 0.00% |
| Multiplicities Errors | 0 | 9 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

## Category complex
```
!new Customer('customer29')
!customer29.firstName := 'Putri'
!customer29.lastName := 'Sari'

!new Booking('booking28')
!booking28.startDate := '2024-02-10'
!booking28.endDate := '2024-02-17'
!booking28.canceled := false
!booking28.bookingId := 1057
!booking28.confirmed := true

!new Bill('bill54')
!bill54.price := 950.00
!bill54.billId := 3061

!new Bill('bill55')
!bill55.price := 1200.00
!bill55.billId := 3062

!new RoomReservation('roomReservation28_1')
!roomReservation28_1.checkInDate := '2024-02-10'
!roomReservation28_1.checkOutDate := '2024-02-13'

!new RoomReservation('roomReservation28_2')
!roomReservation28_2.checkInDate := '2024-02-13'
!roomReservation28_2.checkOutDate := '2024-02-17'

!new Room('room28_401')
!room28_401.numBeds := 1
!room28_401.pricePerNight := 150.00
!room28_401.occupied := true
!room28_401.blocked := false
!room28_401.roomNumber := 401

!new Room('room28_405')
!room28_405.numBeds := 3
!room28_405.pricePerNight := 200.00
!room28_405.occupied := true
!room28_405.blocked := false
!room28_405.roomNumber := 405

!new RoomExtra('extra28_1')
!extra28_1.price := 25.00
!extra28_1.description := 'Balinese Spa Treatment'

!new RoomExtra('extra28_2')
!extra28_2.price := 40.00
!extra28_2.description := 'Sunset Dinner on the Beach'

!new RoomExtra('extra28_3')
!extra28_3.price := 30.00
!extra28_3.description := 'Cultural Dance Performance Tickets'

!new FreeRoomTypesDTO('freeRoomType23')
!freeRoomType23.roomTypeDescription := 'Ocean View Villa'
!freeRoomType23.numBeds := 2
!freeRoomType23.pricePerNight := 250.00
!freeRoomType23.numFreeRooms := 2

!insert (booking28, customer29) into BookingCustomer

!insert (booking28, bill54) into BookingBill
!insert (booking28, bill55) into BookingBill

!insert (booking28, roomReservation28_1) into BookingRoomReservation
!insert (booking28, roomReservation28_2) into BookingRoomReservation

!insert (roomReservation28_1, room28_401) into RoomReservationRoom
!insert (roomReservation28_1, extra28_1) into RoomReservationExtras
!insert (roomReservation28_1, extra28_3) into RoomReservationExtras

!insert (roomReservation28_2, room28_405) into RoomReservationRoom
!insert (roomReservation28_2, extra28_2) into RoomReservationExtras

!insert (bill54, roomReservation28_1) into BillRoomReservation
!insert (bill55, roomReservation28_2) into BillRoomReservation
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 59 | 0.00% |
| Multiplicities Errors | 0 | 12 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

## Category edge
```
!new Customer('customer31')
!customer31.firstName := 'Alexis'
!customer31.lastName := 'Devereaux'

!new Booking('booking30')
!booking30.startDate := '10-04-2024'
!booking30.endDate := '15-04-2024'
!booking30.canceled := false
!booking30.bookingId := 106
!booking30.confirmed := true

!new RoomReservation('roomReservation30_1')
!roomReservation30_1.checkInDate := '10-04-2024'
!roomReservation30_1.checkOutDate := '15-04-2024'

!new RoomReservation('roomReservation30_2')
!roomReservation30_2.checkInDate := '10-04-2024'
!roomReservation30_2.checkOutDate := '15-04-2024'

!new Room('room30_701')
!room30_701.numBeds := 1
!room30_701.pricePerNight := 1000.00
!room30_701.occupied := true
!room30_701.blocked := false
!room30_701.roomNumber := 701

!new RoomExtra('extra30_1')
!extra30_1.price := 200.00
!extra30_1.description := 'Private Chef Service'

!new RoomExtra('extra30_2')
!extra30_2.price := 150.00
!extra30_2.description := 'Personalized Chauffeur on Standby'

!new RoomExtra('extra30_3')
!extra30_3.price := 100.00
!extra30_3.description := '24/7 Butler and Concierge'

!new RoomExtra('extra30_4')
!extra30_4.price := 500.00
!extra30_4.description := 'Exclusive Art Collection Exhibit'

!new Bill('bill59')
!bill59.price := 6000.00
!bill59.billId := 510

!new Bill('bill60')
!bill60.price := 950.00
!bill60.billId := 511

!insert (booking30, customer31) into BookingCustomer

!insert (booking30, roomReservation30_1) into BookingRoomReservation
!insert (booking30, roomReservation30_2) into BookingRoomReservation

!insert (booking30, bill59) into BookingBill
!insert (booking30, bill60) into BookingBill

!insert (roomReservation30_1, room30_701) into RoomReservationRoom

!insert (roomReservation30_1, extra30_1) into RoomReservationExtras
!insert (roomReservation30_1, extra30_2) into RoomReservationExtras
!insert (roomReservation30_2, extra30_3) into RoomReservationExtras
!insert (roomReservation30_2, extra30_4) into RoomReservationExtras

!insert (bill59, roomReservation30_1) into BillRoomReservation
!insert (bill60, roomReservation30_2) into BillRoomReservation
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 51 | 0.00% |
| Multiplicities Errors | 0 | 12 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

## Category invalid
```
!new Customer('customer30')
!customer30.firstName := 'Ana'
!customer30.lastName := 'Gómez'

!new Booking('booking29')
!booking29.startDate := '2024-09-10'
!booking29.endDate := '2024-09-17'
!booking29.canceled := false
!booking29.bookingId := 6006
!booking29.confirmed := true

!new RoomReservation('roomReservation29_1')
!roomReservation29_1.checkInDate := '2024-09-10'
!roomReservation29_1.checkOutDate := '2024-09-17'

!new RoomReservation('roomReservation29_2')
!roomReservation29_2.checkInDate := '2024-09-10'
!roomReservation29_2.checkOutDate := '2024-09-17'

!new RoomReservation('roomReservation29_3')
!roomReservation29_3.checkInDate := '2024-09-10'
!roomReservation29_3.checkOutDate := '2024-09-17'

!new Room('room29_6101')
!room29_6101.numBeds := 2
!room29_6101.pricePerNight := 150.0
!room29_6101.occupied := true
!room29_6101.blocked := false
!room29_6101.roomNumber := 6101

!new Room('room29_6102')
!room29_6102.numBeds := 2
!room29_6102.pricePerNight := 150.0
!room29_6102.occupied := true
!room29_6102.blocked := false
!room29_6102.roomNumber := 6102

!new Room('room29_6201')
!room29_6201.numBeds := 2
!room29_6201.pricePerNight := 180.0
!room29_6201.occupied := true
!room29_6201.blocked := false
!room29_6201.roomNumber := 6201

!new Room('room29_6202')
!room29_6202.numBeds := 2
!room29_6202.pricePerNight := 180.0
!room29_6202.occupied := true
!room29_6202.blocked := false
!room29_6202.roomNumber := 6202

!new Room('room29_6301')
!room29_6301.numBeds := 4
!room29_6301.pricePerNight := 50.0
!room29_6301.occupied := true
!room29_6301.blocked := false
!room29_6301.roomNumber := 6301

!new Bill('bill56')
!bill56.price := 5400.0
!bill56.billId := 1001

!new Bill('bill57')
!bill57.price := 6400.0
!bill57.billId := 1002

!new Bill('bill58')
!bill58.price := 1500.0
!bill58.billId := 1003

!new RoomExtra('extra29_1')
!extra29_1.price := 100.0
!extra29_1.description := 'Biodegradable Amenities Kit'

!new RoomExtra('extra29_2')
!extra29_2.price := 75.0
!extra29_2.description := 'Zero-Waste Meal Plan'

!new FreeRoomTypesDTO('freeRoomType24')
!freeRoomType24.roomTypeDescription := 'Eco Cabin'
!freeRoomType24.numBeds := 2
!freeRoomType24.pricePerNight := 150.0
!freeRoomType24.numFreeRooms := 6

!insert (booking29, customer30) into BookingCustomer

!insert (booking29, roomReservation29_1) into BookingRoomReservation
!insert (booking29, roomReservation29_2) into BookingRoomReservation
!insert (booking29, roomReservation29_3) into BookingRoomReservation

!insert (booking29, bill56) into BookingBill
!insert (booking29, bill57) into BookingBill
!insert (booking29, bill58) into BookingBill

!insert (roomReservation29_1, room29_6101) into RoomReservationRoom
!insert (roomReservation29_1, room29_6102) into RoomReservationRoom

!insert (roomReservation29_2, room29_6201) into RoomReservationRoom
!insert (roomReservation29_2, room29_6202) into RoomReservationRoom

!insert (roomReservation29_3, room29_6301) into RoomReservationRoom

!insert (roomReservation29_1, extra29_1) into RoomReservationExtras
!insert (roomReservation29_2, extra29_2) into RoomReservationExtras

!insert (bill56, roomReservation29_1) into BillRoomReservation
!insert (bill57, roomReservation29_2) into BillRoomReservation
!insert (bill58, roomReservation29_3) into BillRoomReservation
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 17 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

## Generation 6 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 304 | 0.00% |
| Multiplicities Errors | 0 | 45 | 0.00% |
| Invariants Errors | 0 | 12 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 17 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 5 | 0.00% |
| checkOutDate <= endDate | 0 | 5 | 0.00% |

# Summary for all generations
| Summary | Value | 
|---|---| 
| Model | GPT_4O | 
| Type | CoT | 
| System | hotelmanagement | 
| Number of generations | 6 | 

| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 1762 | 0.00% |
| Multiplicities Errors | 9 | 255 | 3.53% |
| Invariants Errors | 0 | 72 | 0.00% |

| Multiplicities Errors | 
|---| 
```
Multiplicity constraint violation in association `BillRoomReservation':
  Object `roomReservation1' of class `RoomReservation' is connected to 2 objects of class `Bill'
  at association end `bill' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `BillRoomReservation':
  Object `roomReservation3' of class `RoomReservation' is connected to 2 objects of class `Bill'
  at association end `bill' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `BillRoomReservation':
  Object `bill8' of class `Bill' is connected to 2 objects of class `RoomReservation'
  at association end `roomReservation' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `RoomReservationExtras':
  Object `roomExtra7' of class `RoomExtra' is connected to 2 objects of class `RoomReservation'
  at association end `roomReservation' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `BillRoomReservation':
  Object `roomReservation5_1' of class `RoomReservation' is connected to 2 objects of class `Bill'
  at association end `bill' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `BookingCustomer':
  Object `customer11' of class `Customer' is connected to 0 objects of class `Booking'
  at association end `booking' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `BillRoomReservation':
  Object `roomReservation13_2' of class `RoomReservation' is connected to 2 objects of class `Bill'
  at association end `bill' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `BillRoomReservation':
  Object `roomReservation20_2' of class `RoomReservation' is connected to 2 objects of class `Bill'
  at association end `bill' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `RoomReservationRoom':
  Object `room20_701' of class `Room' is connected to 2 objects of class `RoomReservation'
  at association end `roomReservation' but the multiplicity is specified as `1'.
```

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 5 | 106 | 4.72% |
| Invariants Errors (Not included on General) | 0 | 18 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `BookingBill':
  Object `bill5' of class `Bill' is connected to 0 objects of class `Booking'
  at association end `booking' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `BookingBill':
  Object `bill3' of class `Bill' is connected to 0 objects of class `Booking'
  at association end `booking' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `BookingBill':
  Object `bill4' of class `Bill' is connected to 0 objects of class `Booking'
  at association end `booking' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `RoomReservationExtras':
  Object `roomExtra3' of class `RoomExtra' is connected to 3 objects of class `RoomReservation'
  at association end `roomReservation' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `RoomReservationExtras':
  Object `roomExtra4' of class `RoomExtra' is connected to 3 objects of class `RoomReservation'
  at association end `roomReservation' but the multiplicity is specified as `1'.
```

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 30 | 0.00% |
| checkOutDate <= endDate | 0 | 30 | 0.00% |

