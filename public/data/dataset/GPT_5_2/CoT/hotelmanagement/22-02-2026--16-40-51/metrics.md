# Generation 1
## Category baseline
```
!new Customer('C1')
!C1.firstName := 'Marta'
!C1.lastName := 'García-López'

!new Booking('B1001')
!B1001.startDate := '2026-04-10'
!B1001.endDate := '2026-04-14'
!B1001.canceled := false
!B1001.bookingId := 1001
!B1001.confirmed := true

!new RoomReservation('RR1')
!RR1.checkInDate := '2026-04-10'
!RR1.checkOutDate := '2026-04-13'

!new RoomReservation('RR2')
!RR2.checkInDate := '2026-04-13'
!RR2.checkOutDate := '2026-04-14'

!new Room('R212')
!R212.numBeds := 2
!R212.pricePerNight := 120.00
!R212.occupied := false
!R212.blocked := false
!R212.roomNumber := 212

!new Room('R305')
!R305.numBeds := 1
!R305.pricePerNight := 95.00
!R305.occupied := false
!R305.blocked := false
!R305.roomNumber := 305

!new RoomExtra('E1')
!E1.price := 45.00
!E1.description := 'Breakfast buffet (3 mornings)'

!new RoomExtra('E2')
!E2.price := 25.00
!E2.description := 'Late check-out until 14:00'

!new Bill('BL7001')
!BL7001.price := 430.00
!BL7001.billId := 7001

!new Bill('BL7002')
!BL7002.price := 95.00
!BL7002.billId := 7002

!new FreeRoomTypesDTO('D1')
!D1.roomTypeDescription := 'Standard Twin (Courtyard View)'
!D1.numBeds := 2
!D1.pricePerNight := 120.00
!D1.numFreeRooms := 4

!new FreeRoomTypesDTO('D2')
!D2.roomTypeDescription := 'Single Economy (Compact)'
!D2.numBeds := 1
!D2.pricePerNight := 95.00
!D2.numFreeRooms := 2

!insert (B1001, C1) into BookingCustomer

!insert (B1001, RR1) into BookingRoomReservation
!insert (B1001, RR2) into BookingRoomReservation

!insert (RR1, R212) into RoomReservationRoom
!insert (RR2, R305) into RoomReservationRoom

!insert (RR1, E1) into RoomReservationExtras
!insert (RR1, E2) into RoomReservationExtras

!insert (B1001, BL7001) into BookingBill
!insert (B1001, BL7002) into BookingBill

!insert (BL7001, RR1) into BillRoomReservation
!insert (BL7002, RR2) into BillRoomReservation
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 60 | 0.00% |
| Multiplicities Errors | 0 | 11 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

## Category boundary
```
!new FreeRoomTypesDTO('D7')
!D7.roomTypeDescription := 'Single capsule (windowless)'
!D7.numBeds := 1
!D7.pricePerNight := 0.0
!D7.numFreeRooms := 0

!new Customer('C4')
!C4.firstName := 'Aiko'
!C4.lastName := 'Tanaka'

!new Customer('C5')
!C5.firstName := 'Óscar'
!C5.lastName := 'Núñez'

!new Booking('B1')
!B1.startDate := '2026-03-01'
!B1.endDate := '2026-03-01'
!B1.canceled := false
!B1.bookingId := 1
!B1.confirmed := false

!new RoomReservation('R1_B1')
!R1_B1.checkInDate := '2026-03-01'
!R1_B1.checkOutDate := '2026-03-01'

!new Bill('BL1')
!BL1.price := 0.0
!BL1.billId := 1001

!new RoomReservation('R2_B1')
!R2_B1.checkInDate := '2026-03-01'
!R2_B1.checkOutDate := '2026-03-01'

!new Room('RM1')
!RM1.numBeds := 1
!RM1.pricePerNight := 0.0
!RM1.occupied := false
!RM1.blocked := true
!RM1.roomNumber := 1

!new RoomExtra('E7')
!E7.price := 0.0
!E7.description := 'Complimentary welcome tea'

!new Bill('BL2')
!BL2.price := 0.0
!BL2.billId := 1002

!new Booking('B2')
!B2.startDate := '2026-12-31'
!B2.endDate := '2026-12-31'
!B2.canceled := true
!B2.bookingId := 2
!B2.confirmed := false

!insert (B1, C4) into BookingCustomer
!insert (B2, C5) into BookingCustomer

!insert (B1, R1_B1) into BookingRoomReservation
!insert (B1, R2_B1) into BookingRoomReservation

!insert (B1, BL1) into BookingBill
!insert (B1, BL2) into BookingBill

!insert (BL1, R1_B1) into BillRoomReservation
!insert (BL2, R2_B1) into BillRoomReservation

!insert (R2_B1, RM1) into RoomReservationRoom
!insert (R2_B1, E7) into RoomReservationExtras
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 54 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

## Category complex
```
!new Customer('C6')
!C6.firstName := 'Amina'
!C6.lastName := 'El‑Sayed'

!new Booking('B78021')
!B78021.bookingId := 78021
!B78021.startDate := '2026-03-10'
!B78021.endDate := '2026-03-16'
!B78021.confirmed := true
!B78021.canceled := false

!new RoomReservation('RR78021_1')
!RR78021_1.checkInDate := '2026-03-10'
!RR78021_1.checkOutDate := '2026-03-13'

!new RoomReservation('RR78021_2')
!RR78021_2.checkInDate := '2026-03-13'
!RR78021_2.checkOutDate := '2026-03-16'

!new RoomReservation('RR78021_3')
!RR78021_3.checkInDate := '2026-03-10'
!RR78021_3.checkOutDate := '2026-03-12'

!new Room('R412')
!R412.roomNumber := 412
!R412.numBeds := 2
!R412.pricePerNight := 165.00
!R412.occupied := false
!R412.blocked := false

!new Room('R414')
!R414.roomNumber := 414
!R414.numBeds := 1
!R414.pricePerNight := 140.00
!R414.occupied := false
!R414.blocked := false

!new Room('R701')
!R701.roomNumber := 701
!R701.numBeds := 2
!R701.pricePerNight := 320.00
!R701.occupied := false
!R701.blocked := false

!new Room('R118')
!R118.roomNumber := 118
!R118.numBeds := 1
!R118.pricePerNight := 85.00
!R118.occupied := false
!R118.blocked := false

!new RoomExtra('E8')
!E8.description := 'Breakfast buffet package (2 adults) — per stay segment'
!E8.price := 90.00

!new RoomExtra('E9')
!E9.description := 'Baby crib (requested in advance)'
!E9.price := 0.00

!new RoomExtra('E10')
!E10.description := 'Hammam/spa access pass (2 persons)'
!E10.price := 80.00

!new RoomExtra('E11')
!E11.description := 'Late checkout until 16:00'
!E11.price := 40.00

!new RoomExtra('E12')
!E12.description := 'Airport pickup (one-way) scheduled at 22:40'
!E12.price := 25.00

!new Bill('BL990501')
!BL990501.billId := 990501
!BL990501.price := 1005.00

!new Bill('BL990502')
!BL990502.billId := 990502
!BL990502.price := 1080.00

!new Bill('BL990503')
!BL990503.billId := 990503
!BL990503.price := 195.00

!new FreeRoomTypesDTO('D8')
!D8.roomTypeDescription := 'Standard Queen (city view) — non-smoking'
!D8.numBeds := 1
!D8.pricePerNight := 120.00
!D8.numFreeRooms := 6

!new FreeRoomTypesDTO('D9')
!D9.roomTypeDescription := 'Twin Room (connecting option available)'
!D9.numBeds := 2
!D9.pricePerNight := 160.00
!D9.numFreeRooms := 2

!new FreeRoomTypesDTO('D10')
!D10.roomTypeDescription := 'Family Suite (courtyard side, includes sofa bed)'
!D10.numBeds := 3
!D10.pricePerNight := 310.00
!D10.numFreeRooms := 1

!insert (B78021, C6) into BookingCustomer

!insert (B78021, RR78021_1) into BookingRoomReservation
!insert (B78021, RR78021_2) into BookingRoomReservation
!insert (B78021, RR78021_3) into BookingRoomReservation

!insert (RR78021_1, R412) into RoomReservationRoom
!insert (RR78021_1, R414) into RoomReservationRoom
!insert (RR78021_2, R701) into RoomReservationRoom
!insert (RR78021_3, R118) into RoomReservationRoom

!insert (RR78021_1, E8) into RoomReservationExtras
!insert (RR78021_1, E9) into RoomReservationExtras
!insert (RR78021_2, E10) into RoomReservationExtras
!insert (RR78021_2, E11) into RoomReservationExtras
!insert (RR78021_3, E12) into RoomReservationExtras

!insert (B78021, BL990501) into BookingBill
!insert (B78021, BL990502) into BookingBill
!insert (B78021, BL990503) into BookingBill

!insert (BL990501, RR78021_1) into BillRoomReservation
!insert (BL990502, RR78021_2) into BillRoomReservation
!insert (BL990503, RR78021_3) into BillRoomReservation
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 100 | 0.00% |
| Multiplicities Errors | 0 | 19 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

## Category edge
```
!new Customer('C3')
!C3.firstName := 'Amina'
!C3.lastName := 'El‑Sayed'

!new Booking('B999999')
!B999999.bookingId := 999999
!B999999.startDate := '2026-03-10'
!B999999.endDate := '2026-03-05'
!B999999.confirmed := true
!B999999.canceled := true

!new RoomReservation('R1')
!R1.checkInDate := '2026-03-10'
!R1.checkOutDate := '2026-03-12'

!new RoomReservation('R2')
!R2.checkInDate := '2026-03-10'
!R2.checkOutDate := '2026-03-11'

!new RoomExtra('E4')
!E4.description := 'Late checkout waiver (manual override)'
!E4.price := 0.0

!new RoomExtra('E5')
!E5.description := 'Welcome tea set (complimentary)'
!E5.price := 0.0

!new RoomExtra('E6')
!E6.description := 'Airport pickup note added, service not scheduled'
!E6.price := 0.0

!new Bill('BL50001')
!BL50001.billId := 50001
!BL50001.price := 0.0

!new Room('R13')
!R13.roomNumber := 13
!R13.numBeds := 1
!R13.pricePerNight := 0.01
!R13.occupied := false
!R13.blocked := true

!new Room('R666')
!R666.roomNumber := 666
!R666.numBeds := 2
!R666.pricePerNight := 9999.99
!R666.occupied := true
!R666.blocked := false

!new Bill('BL50002')
!BL50002.billId := 50002
!BL50002.price := 10000.00

!new FreeRoomTypesDTO('D5')
!D5.roomTypeDescription := 'Capsule room (Shinjuku-style), mixed floor'
!D5.numBeds := 1
!D5.pricePerNight := 35.50
!D5.numFreeRooms := 0

!new FreeRoomTypesDTO('D6')
!D6.roomTypeDescription := 'Presidential suite with private hammam (limited offer)'
!D6.numBeds := 3
!D6.pricePerNight := 12000.00
!D6.numFreeRooms := 1

!insert (B999999, C3) into BookingCustomer

!insert (B999999, R1) into BookingRoomReservation
!insert (B999999, R2) into BookingRoomReservation

!insert (R1, E4) into RoomReservationExtras
!insert (R1, E5) into RoomReservationExtras
!insert (R1, E6) into RoomReservationExtras

!insert (R2, R13) into RoomReservationRoom
!insert (R2, R666) into RoomReservationRoom

!insert (B999999, BL50001) into BookingBill
!insert (B999999, BL50002) into BookingBill

!insert (BL50001, R1) into BillRoomReservation
!insert (BL50002, R2) into BillRoomReservation
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 64 | 0.00% |
| Multiplicities Errors | 0 | 12 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 1 | 1 | 100.00% |

| Invalid checkOutDate <= endDate | 
|---| 
```
2026-03-11 !<= 2026-03-05
```

## Category invalid
```
!new Customer('C2')
!C2.firstName := 'Aiko'
!C2.lastName := 'Tanaka'

!new Booking('B1001_2')
!B1001_2.bookingId := 1001
!B1001_2.startDate := '2026-03-10'
!B1001_2.endDate := '2026-03-14'
!B1001_2.confirmed := true
!B1001_2.canceled := false

!new Booking('B1044')
!B1044.bookingId := 1044
!B1044.startDate := '2026-06-02'
!B1044.endDate := '2026-06-05'
!B1044.confirmed := true
!B1044.canceled := false

!new RoomReservation('R5001')
!R5001.checkInDate := '2026-03-10'
!R5001.checkOutDate := '2026-03-14'

!new RoomReservation('R5099')
!R5099.checkInDate := '2026-06-02'
!R5099.checkOutDate := '2026-06-05'

!new Room('RM402')
!RM402.roomNumber := 402
!RM402.numBeds := 1
!RM402.pricePerNight := 129.00
!RM402.occupied := false
!RM402.blocked := false

!new Room('RM305')
!RM305.roomNumber := 305
!RM305.numBeds := 2
!RM305.pricePerNight := 179.00
!RM305.occupied := false
!RM305.blocked := false

!new RoomExtra('E1_2')
!E1_2.description := 'Late checkout (2pm)'
!E1_2.price := 25.00

!new RoomExtra('E2_2')
!E2_2.description := 'Breakfast buffet (4 days)'
!E2_2.price := 72.00

!new RoomExtra('E3')
!E3.description := 'Airport pickup (BER → hotel)'
!E3.price := 49.00

!new Bill('BL9001')
!BL9001.billId := 9001
!BL9001.price := 613.00

!new Bill('BL9077')
!BL9077.billId := 9077
!BL9077.price := 436.00

!new FreeRoomTypesDTO('D3')
!D3.roomTypeDescription := 'Single room, courtyard view'
!D3.numBeds := 1
!D3.pricePerNight := 129.00
!D3.numFreeRooms := 3

!new FreeRoomTypesDTO('D4')
!D4.roomTypeDescription := 'Double room, street view'
!D4.numBeds := 2
!D4.pricePerNight := 179.00
!D4.numFreeRooms := 1

!insert (B1001_2, C2) into BookingCustomer
!insert (B1044, C2) into BookingCustomer

!insert (B1001_2, R5001) into BookingRoomReservation
!insert (B1044, R5099) into BookingRoomReservation

!insert (R5001, E1_2) into RoomReservationExtras
!insert (R5001, E2_2) into RoomReservationExtras
!insert (R5099, E3) into RoomReservationExtras

!insert (R5001, RM402) into RoomReservationRoom
!insert (R5099, RM402) into RoomReservationRoom

!insert (B1001_2, BL9001) into BookingBill
!insert (B1044, BL9077) into BookingBill

!insert (BL9001, R5001) into BillRoomReservation
!insert (BL9077, R5099) into BillRoomReservation
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 3 | 13 | 23.08% |
| Invariants Errors (Not included on General) | 0 | 3 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `BookingCustomer':
  Object `C2' of class `Customer' is connected to 2 objects of class `Booking'
  at association end `booking' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `RoomReservationRoom':
  Object `RM305' of class `Room' is connected to 0 objects of class `RoomReservation'
  at association end `roomReservation' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `RoomReservationRoom':
  Object `RM402' of class `Room' is connected to 2 objects of class `RoomReservation'
  at association end `roomReservation' but the multiplicity is specified as `1'.
```

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 2 | 0.00% |
| checkOutDate <= endDate | 0 | 2 | 0.00% |

## Generation 1 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 349 | 0.00% |
| Multiplicities Errors | 0 | 52 | 0.00% |
| Invariants Errors | 0 | 12 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 3 | 13 | 23.08% |
| Invariants Errors (Not included on General) | 0 | 3 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `BookingCustomer':
  Object `C2' of class `Customer' is connected to 2 objects of class `Booking'
  at association end `booking' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `RoomReservationRoom':
  Object `RM305' of class `Room' is connected to 0 objects of class `RoomReservation'
  at association end `roomReservation' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `RoomReservationRoom':
  Object `RM402' of class `Room' is connected to 2 objects of class `RoomReservation'
  at association end `roomReservation' but the multiplicity is specified as `1'.
```

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 6 | 0.00% |
| checkOutDate <= endDate | 1 | 6 | 16.67% |

| Invalid checkOutDate <= endDate | 
|---| 
```
2026-03-11 !<= 2026-03-05
```

# Generation 2
## Category baseline
```
!new Customer('C7')
!C7.firstName := 'Kenji'
!C7.lastName := 'Tanaka'

!new Booking('B2045')
!B2045.bookingId := 2045
!B2045.startDate := '2026-12-31'
!B2045.endDate := '2027-01-03'
!B2045.confirmed := false
!B2045.canceled := true

!new RoomReservation('RR3_B2045')
!RR3_B2045.checkInDate := '2026-12-31'
!RR3_B2045.checkOutDate := '2027-01-03'

!new Room('R508')
!R508.roomNumber := 508
!R508.numBeds := 2
!R508.pricePerNight := 180.00
!R508.occupied := false
!R508.blocked := false

!new Room('R510')
!R510.roomNumber := 510
!R510.numBeds := 1
!R510.pricePerNight := 140.00
!R510.occupied := false
!R510.blocked := true

!new RoomExtra('E13')
!E13.description := 'Airport pickup (late-night)'
!E13.price := 60.00

!new RoomExtra('E14')
!E14.description := 'Dinner set (2 people, New Year’s menu)'
!E14.price := 110.00

!new RoomExtra('E15')
!E15.description := 'Extra futon/bedding set'
!E15.price := 25.00

!new Bill('BL8010')
!BL8010.billId := 8010
!BL8010.price := 375.00

!new FreeRoomTypesDTO('D11')
!D11.roomTypeDescription := 'Tatami Suite (Japanese-style, shared onsen access)'
!D11.numBeds := 2
!D11.pricePerNight := 210.00
!D11.numFreeRooms := 1

!new FreeRoomTypesDTO('D12')
!D12.roomTypeDescription := 'Family Connecting Rooms (2 rooms, internal door)'
!D12.numBeds := 4
!D12.pricePerNight := 320.00
!D12.numFreeRooms := 0

!new FreeRoomTypesDTO('D13')
!D13.roomTypeDescription := 'Business Single (High floor, city view)'
!D13.numBeds := 1
!D13.pricePerNight := 130.00
!D13.numFreeRooms := 6

!insert (B2045, C7) into BookingCustomer

!insert (B2045, RR3_B2045) into BookingRoomReservation

!insert (RR3_B2045, R508) into RoomReservationRoom
!insert (RR3_B2045, R510) into RoomReservationRoom

!insert (RR3_B2045, E13) into RoomReservationExtras
!insert (RR3_B2045, E14) into RoomReservationExtras
!insert (RR3_B2045, E15) into RoomReservationExtras

!insert (B2045, BL8010) into BookingBill

!insert (BL8010, RR3_B2045) into BillRoomReservation
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 60 | 0.00% |
| Multiplicities Errors | 0 | 9 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

## Category boundary
```
!new FreeRoomTypesDTO('D16')
!D16.roomTypeDescription := 'Presidential family suite (panoramic view)'
!D16.numBeds := 12
!D16.pricePerNight := 9999.99
!D16.numFreeRooms := 250

!new Customer('C10')
!C10.firstName := 'Nneka'
!C10.lastName := 'Okafor'

!new Booking('B3_HV')
!B3_HV.startDate := '2026-07-01'
!B3_HV.endDate := '2026-07-31'
!B3_HV.canceled := false
!B3_HV.bookingId := 3
!B3_HV.confirmed := true

!new RoomReservation('R3_HV')
!R3_HV.checkInDate := '2026-07-01'
!R3_HV.checkOutDate := '2026-07-08'

!new RoomReservation('R4_HV')
!R4_HV.checkInDate := '2026-07-08'
!R4_HV.checkOutDate := '2026-07-15'

!new RoomReservation('R5_HV')
!R5_HV.checkInDate := '2026-07-15'
!R5_HV.checkOutDate := '2026-07-22'

!new RoomReservation('R6_HV')
!R6_HV.checkInDate := '2026-07-22'
!R6_HV.checkOutDate := '2026-07-31'

!new Room('RM101')
!RM101.numBeds := 12
!RM101.pricePerNight := 9999.99
!RM101.occupied := true
!RM101.blocked := false
!RM101.roomNumber := 9001

!new Room('RM102')
!RM102.numBeds := 8
!RM102.pricePerNight := 7500.00
!RM102.occupied := true
!RM102.blocked := false
!RM102.roomNumber := 9002

!new Room('RM103')
!RM103.numBeds := 6
!RM103.pricePerNight := 6200.50
!RM103.occupied := true
!RM103.blocked := false
!RM103.roomNumber := 9003

!new RoomExtra('E21')
!E21.price := 1200.00
!E21.description := 'Private airport transfer (convoy)'

!new RoomExtra('E22')
!E22.price := 3000.00
!E22.description := 'In-suite chef (two evenings)'

!new RoomExtra('E23')
!E23.price := 850.75
!E23.description := 'Laundry service (bulk)'

!new RoomExtra('E24')
!E24.price := 500.00
!E24.description := 'Late checkout guarantee'

!new Bill('BL2001')
!BL2001.price := 125000.00
!BL2001.billId := 2001

!new Room('RM104')
!RM104.numBeds := 4
!RM104.pricePerNight := 4100.00
!RM104.occupied := true
!RM104.blocked := false
!RM104.roomNumber := 9101

!new Room('RM105')
!RM105.numBeds := 4
!RM105.pricePerNight := 4100.00
!RM105.occupied := true
!RM105.blocked := false
!RM105.roomNumber := 9102

!new Room('RM106')
!RM106.numBeds := 2
!RM106.pricePerNight := 2500.00
!RM106.occupied := true
!RM106.blocked := false
!RM106.roomNumber := 9103

!new Room('RM107')
!RM107.numBeds := 2
!RM107.pricePerNight := 2500.00
!RM107.occupied := true
!RM107.blocked := false
!RM107.roomNumber := 9104

!new Bill('BL2002')
!BL2002.price := 98000.25
!BL2002.billId := 2002

!new Room('RM108')
!RM108.numBeds := 1
!RM108.pricePerNight := 1800.00
!RM108.occupied := true
!RM108.blocked := false
!RM108.roomNumber := 9201

!new RoomExtra('E25')
!E25.price := 999.99
!E25.description := 'Premium minibar package'

!new RoomExtra('E26')
!E26.price := 1500.00
!E26.description := 'Daily spa access (7 days)'

!new RoomExtra('E27')
!E27.price := 2000.00
!E27.description := 'Personal interpreter service'

!new RoomExtra('E28')
!E28.price := 300.00
!E28.description := 'Baby crib rental'

!new RoomExtra('E29')
!E29.price := 450.00
!E29.description := 'High-speed dedicated Wi‑Fi line'

!new Bill('BL2003')
!BL2003.price := 25000.75
!BL2003.billId := 2003

!new Room('RM109')
!RM109.numBeds := 3
!RM109.pricePerNight := 3300.00
!RM109.occupied := false
!RM109.blocked := true
!RM109.roomNumber := 9301

!new Room('RM110')
!RM110.numBeds := 5
!RM110.pricePerNight := 5400.00
!RM110.occupied := true
!RM110.blocked := false
!RM110.roomNumber := 9302

!new Room('RM111')
!RM111.numBeds := 2
!RM111.pricePerNight := 2600.00
!RM111.occupied := true
!RM111.blocked := false
!RM111.roomNumber := 9303

!new RoomExtra('E30')
!E30.price := 5000.00
!E30.description := 'Event security team (one week)'

!new Bill('BL2004')
!BL2004.price := 110000.00
!BL2004.billId := 2004

!insert (B3_HV, C10) into BookingCustomer

!insert (B3_HV, R3_HV) into BookingRoomReservation
!insert (B3_HV, R4_HV) into BookingRoomReservation
!insert (B3_HV, R5_HV) into BookingRoomReservation
!insert (B3_HV, R6_HV) into BookingRoomReservation

!insert (R3_HV, RM101) into RoomReservationRoom
!insert (R3_HV, RM102) into RoomReservationRoom
!insert (R3_HV, RM103) into RoomReservationRoom

!insert (R3_HV, E21) into RoomReservationExtras
!insert (R3_HV, E22) into RoomReservationExtras
!insert (R3_HV, E23) into RoomReservationExtras
!insert (R3_HV, E24) into RoomReservationExtras

!insert (R4_HV, RM104) into RoomReservationRoom
!insert (R4_HV, RM105) into RoomReservationRoom
!insert (R4_HV, RM106) into RoomReservationRoom
!insert (R4_HV, RM107) into RoomReservationRoom

!insert (R5_HV, RM108) into RoomReservationRoom

!insert (R5_HV, E25) into RoomReservationExtras
!insert (R5_HV, E26) into RoomReservationExtras
!insert (R5_HV, E27) into RoomReservationExtras
!insert (R5_HV, E28) into RoomReservationExtras
!insert (R5_HV, E29) into RoomReservationExtras

!insert (R6_HV, RM109) into RoomReservationRoom
!insert (R6_HV, RM110) into RoomReservationRoom
!insert (R6_HV, RM111) into RoomReservationRoom

!insert (R6_HV, E30) into RoomReservationExtras

!insert (B3_HV, BL2001) into BookingBill
!insert (B3_HV, BL2002) into BookingBill
!insert (B3_HV, BL2003) into BookingBill
!insert (B3_HV, BL2004) into BookingBill

!insert (BL2001, R3_HV) into BillRoomReservation
!insert (BL2002, R4_HV) into BillRoomReservation
!insert (BL2003, R5_HV) into BillRoomReservation
!insert (BL2004, R6_HV) into BillRoomReservation
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 168 | 0.00% |
| Multiplicities Errors | 0 | 34 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

## Category complex
```
!new Customer('C14')
!C14.firstName := 'Sofía'
!C14.lastName := 'Núñez'

!new Booking('B91044')
!B91044.bookingId := 91044
!B91044.startDate := '2026-11-02'
!B91044.endDate := '2026-11-10'
!B91044.confirmed := true
!B91044.canceled := false

!new RoomReservation('RR_A')
!RR_A.checkInDate := '2026-11-02'
!RR_A.checkOutDate := '2026-11-09'

!new RoomReservation('RR_B')
!RR_B.checkInDate := '2026-11-05'
!RR_B.checkOutDate := '2026-11-10'

!new Room('R203')
!R203.roomNumber := 203
!R203.numBeds := 2
!R203.pricePerNight := 180.00
!R203.occupied := false
!R203.blocked := false

!new Room('R204')
!R204.roomNumber := 204
!R204.numBeds := 2
!R204.pricePerNight := 180.00
!R204.occupied := false
!R204.blocked := false

!new Room('R205')
!R205.roomNumber := 205
!R205.numBeds := 2
!R205.pricePerNight := 180.00
!R205.occupied := false
!R205.blocked := false

!new Room('R219')
!R219.roomNumber := 219
!R219.numBeds := 1
!R219.pricePerNight := 130.00
!R219.occupied := false
!R219.blocked := false

!new RoomExtra('EA1')
!EA1.description := 'Parking permits (2 vehicles) — one-time fee'
!EA1.price := 70.00

!new RoomExtra('EA2')
!EA2.description := 'Laundry bundle for crew uniforms (weekly service)'
!EA2.price := 120.00

!new RoomExtra('EA3')
!EA3.description := 'Portable Wi‑Fi hotspot rental (7 days)'
!EA3.price := 35.00

!new RoomExtra('EA4')
!EA4.description := 'Welcome basket (sin gluten / gluten-free snacks)'
!EA4.price := 55.00

!new Bill('BL880110')
!BL880110.billId := 880110
!BL880110.price := 4970.00

!new Room('R802')
!R802.roomNumber := 802
!R802.numBeds := 3
!R802.pricePerNight := 350.00
!R802.occupied := false
!R802.blocked := false

!new Bill('BL880111')
!BL880111.billId := 880111
!BL880111.price := 1750.00

!new FreeRoomTypesDTO('D21')
!D21.roomTypeDescription := 'Habitación Doble (dos camas) — cerca del ascensor'
!D21.numBeds := 2
!D21.pricePerNight := 175.00
!D21.numFreeRooms := 4

!new FreeRoomTypesDTO('D22')
!D22.roomTypeDescription := 'Chambre simple économique — vue intérieure'
!D22.numBeds := 1
!D22.pricePerNight := 95.00
!D22.numFreeRooms := 9

!new FreeRoomTypesDTO('D23')
!D23.roomTypeDescription := 'Suite familiar (3 camas) — planta alta'
!D23.numBeds := 3
!D23.pricePerNight := 345.00
!D23.numFreeRooms := 1

!insert (B91044, C14) into BookingCustomer

!insert (B91044, RR_A) into BookingRoomReservation
!insert (B91044, RR_B) into BookingRoomReservation

!insert (RR_A, R203) into RoomReservationRoom
!insert (RR_A, R204) into RoomReservationRoom
!insert (RR_A, R205) into RoomReservationRoom
!insert (RR_A, R219) into RoomReservationRoom

!insert (RR_B, R802) into RoomReservationRoom

!insert (RR_A, EA1) into RoomReservationExtras
!insert (RR_A, EA2) into RoomReservationExtras
!insert (RR_A, EA3) into RoomReservationExtras
!insert (RR_A, EA4) into RoomReservationExtras

!insert (B91044, BL880110) into BookingBill
!insert (B91044, BL880111) into BookingBill

!insert (BL880110, RR_A) into BillRoomReservation
!insert (BL880111, RR_B) into BillRoomReservation
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 94 | 0.00% |
| Multiplicities Errors | 0 | 16 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

## Category edge
```
!new Customer('C8')
!C8.firstName := '李'
!C8.lastName := '小龍'

!new Booking('BKG_NEG_1')
!BKG_NEG_1.bookingId := -1
!BKG_NEG_1.startDate := ''
!BKG_NEG_1.endDate := ''
!BKG_NEG_1.confirmed := false
!BKG_NEG_1.canceled := true

!new Customer('C9')
!C9.firstName := 'Siobhán'
!C9.lastName := 'Ó Ríordáin'

!new Booking('BKG_MAXINT')
!BKG_MAXINT.bookingId := 2147483647
!BKG_MAXINT.startDate := '2026-02-29'
!BKG_MAXINT.endDate := '2026-02-29'
!BKG_MAXINT.confirmed := true
!BKG_MAXINT.canceled := false

!new RoomReservation('RR_ZERO_NIGHT')
!RR_ZERO_NIGHT.checkInDate := '2026-02-29'
!RR_ZERO_NIGHT.checkOutDate := '2026-02-29'

!new Room('R0')
!R0.roomNumber := 0
!R0.numBeds := 1
!R0.pricePerNight := 0.0
!R0.occupied := true
!R0.blocked := true

!new RoomExtra('X1')
!X1.description := 'Promotional voucher (manual adjustment)'
!X1.price := -25.0

!new RoomExtra('X2')
!X2.description := 'Noise-canceling headset rental'
!X2.price := 15.0

!new RoomExtra('X3')
!X3.description := 'Security deposit (pre-authorization record)'
!X3.price := 300.0

!new RoomExtra('X4')
!X4.description := '24-hour sauna access (same-day)'
!X4.price := 0.0

!new Bill('BL80001')
!BL80001.billId := 80001
!BL80001.price := 0.0

!new FreeRoomTypesDTO('D14')
!D14.roomTypeDescription := 'Habitación interior sin ventanas (tarifa experimental)'
!D14.numBeds := 1
!D14.pricePerNight := 0.0
!D14.numFreeRooms := 1000000

!new FreeRoomTypesDTO('D15')
!D15.roomTypeDescription := 'Suite familiale (offre festival régional)'
!D15.numBeds := 5
!D15.pricePerNight := 180.75
!D15.numFreeRooms := 1

!insert (BKG_NEG_1, C8) into BookingCustomer
!insert (BKG_MAXINT, C9) into BookingCustomer

!insert (BKG_MAXINT, RR_ZERO_NIGHT) into BookingRoomReservation
!insert (RR_ZERO_NIGHT, R0) into RoomReservationRoom

!insert (RR_ZERO_NIGHT, X1) into RoomReservationExtras
!insert (RR_ZERO_NIGHT, X2) into RoomReservationExtras
!insert (RR_ZERO_NIGHT, X3) into RoomReservationExtras
!insert (RR_ZERO_NIGHT, X4) into RoomReservationExtras

!insert (BKG_MAXINT, BL80001) into BookingBill
!insert (BL80001, RR_ZERO_NIGHT) into BillRoomReservation
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 62 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

## Category invalid
```
!new Customer('C12')
!C12.firstName := 'Sofía'
!C12.lastName := 'Núñez'

!new Customer('C13')
!C13.firstName := 'Asha'
!C13.lastName := 'Nair'

!new Booking('B3001')
!B3001.bookingId := 3001
!B3001.startDate := '2026-02-01'
!B3001.endDate := '2026-02-04'
!B3001.confirmed := true
!B3001.canceled := false

!new Booking('B3002')
!B3002.bookingId := 3002
!B3002.startDate := '2026-02-10'
!B3002.endDate := '2026-02-12'
!B3002.confirmed := true
!B3002.canceled := false

!new RoomReservation('R9101')
!R9101.checkInDate := '2026-02-01'
!R9101.checkOutDate := '2026-02-04'

!new RoomReservation('R9102')
!R9102.checkInDate := '2026-02-10'
!R9102.checkOutDate := '2026-02-12'

!new Room('RM110_QC')
!RM110_QC.roomNumber := 110
!RM110_QC.numBeds := 1
!RM110_QC.pricePerNight := 158.00
!RM110_QC.occupied := false
!RM110_QC.blocked := false

!new Room('RM508_QC')
!RM508_QC.roomNumber := 508
!RM508_QC.numBeds := 2
!RM508_QC.pricePerNight := 96.50
!RM508_QC.occupied := false
!RM508_QC.blocked := false

!new RoomExtra('EX1')
!EX1.description := 'Snow gear drying service'
!EX1.price := 12.00

!new RoomExtra('EX2')
!EX2.description := 'Vegetarian dinner package (2 nights)'
!EX2.price := 38.00

!new Bill('BL_QC_42')
!BL_QC_42.billId := 42
!BL_QC_42.price := 486.00

!new Bill('BL_KOCHI_42')
!BL_KOCHI_42.billId := 42
!BL_KOCHI_42.price := 231.00

!new FreeRoomTypesDTO('D19')
!D19.roomTypeDescription := 'Compact single, old-town view'
!D19.numBeds := 1
!D19.pricePerNight := 158.00
!D19.numFreeRooms := 2

!new FreeRoomTypesDTO('D20')
!D20.roomTypeDescription := 'Twin room, courtyard'
!D20.numBeds := 2
!D20.pricePerNight := 176.00
!D20.numFreeRooms := 1

!insert (B3001, C12) into BookingCustomer
!insert (B3002, C13) into BookingCustomer

!insert (B3001, R9101) into BookingRoomReservation
!insert (B3002, R9102) into BookingRoomReservation

!insert (R9101, RM110_QC) into RoomReservationRoom
!insert (R9102, RM508_QC) into RoomReservationRoom

!insert (R9101, EX1) into RoomReservationExtras
!insert (R9102, EX2) into RoomReservationExtras

!insert (B3001, BL_QC_42) into BookingBill
!insert (B3002, BL_KOCHI_42) into BookingBill

!insert (BL_QC_42, R9101) into BillRoomReservation
!insert (BL_KOCHI_42, R9102) into BillRoomReservation
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 12 | 0.00% |
| Invariants Errors (Not included on General) | 1 | 3 | 33.33% |

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (2) `Bill::uniqueBillId': FAILED.
```

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 2 | 0.00% |
| checkOutDate <= endDate | 0 | 2 | 0.00% |

## Generation 2 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 454 | 0.00% |
| Multiplicities Errors | 0 | 69 | 0.00% |
| Invariants Errors | 0 | 12 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 12 | 0.00% |
| Invariants Errors (Not included on General) | 1 | 3 | 33.33% |

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (2) `Bill::uniqueBillId': FAILED.
```

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 6 | 0.00% |
| checkOutDate <= endDate | 0 | 6 | 0.00% |

# Generation 3
## Category baseline
```
!new Customer('C11')
!C11.firstName := 'Amina'
!C11.lastName := 'El Khatib'

!new Booking('B3107')
!B3107.bookingId := 3107
!B3107.startDate := '2026-06-05'
!B3107.endDate := '2026-06-12'
!B3107.confirmed := true
!B3107.canceled := false

!new RoomReservation('RR4')
!RR4.checkInDate := '2026-06-05'
!RR4.checkOutDate := '2026-06-07'

!new RoomReservation('RR5')
!RR5.checkInDate := '2026-06-07'
!RR5.checkOutDate := '2026-06-10'

!new RoomReservation('RR6')
!RR6.checkInDate := '2026-06-10'
!RR6.checkOutDate := '2026-06-12'

!new Room('R110')
!R110.roomNumber := 110
!R110.numBeds := 1
!R110.pricePerNight := 70.00
!R110.occupied := true
!R110.blocked := false

!new Room('R223')
!R223.roomNumber := 223
!R223.numBeds := 2
!R223.pricePerNight := 100.00
!R223.occupied := false
!R223.blocked := false

!new Room('R417')
!R417.roomNumber := 417
!R417.numBeds := 3
!R417.pricePerNight := 120.00
!R417.occupied := false
!R417.blocked := false

!new RoomExtra('E16')
!E16.description := 'Traditional dinner reservation (rooftop terrace)'
!E16.price := 80.00

!new RoomExtra('E17')
!E17.description := 'Laundry service (1 bag)'
!E17.price := 30.00

!new RoomExtra('E18')
!E18.description := 'Hammam/spa session (60 minutes)'
!E18.price := 55.00

!new RoomExtra('E19')
!E19.description := 'Baby crib (on request)'
!E19.price := 0.00

!new Bill('BL9101')
!BL9101.billId := 9101
!BL9101.price := 140.00

!new Bill('BL9102')
!BL9102.billId := 9102
!BL9102.price := 410.00

!new Bill('BL9103')
!BL9103.billId := 9103
!BL9103.price := 295.00

!new FreeRoomTypesDTO('D17')
!D17.roomTypeDescription := 'Chambre Double (vue médina)'
!D17.numBeds := 2
!D17.pricePerNight := 100.00
!D17.numFreeRooms := 3

!new FreeRoomTypesDTO('D18')
!D18.roomTypeDescription := 'Suite Familiale (3 lits)'
!D18.numBeds := 3
!D18.pricePerNight := 120.00
!D18.numFreeRooms := 1

!insert (B3107, C11) into BookingCustomer

!insert (B3107, RR4) into BookingRoomReservation
!insert (B3107, RR5) into BookingRoomReservation
!insert (B3107, RR6) into BookingRoomReservation

!insert (RR4, R110) into RoomReservationRoom
!insert (RR5, R223) into RoomReservationRoom
!insert (RR6, R417) into RoomReservationRoom

!insert (RR5, E16) into RoomReservationExtras
!insert (RR5, E17) into RoomReservationExtras
!insert (RR6, E18) into RoomReservationExtras
!insert (RR6, E19) into RoomReservationExtras

!insert (B3107, BL9101) into BookingBill
!insert (B3107, BL9102) into BookingBill
!insert (B3107, BL9103) into BookingBill

!insert (BL9101, RR4) into BillRoomReservation
!insert (BL9102, RR5) into BillRoomReservation
!insert (BL9103, RR6) into BillRoomReservation
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 84 | 0.00% |
| Multiplicities Errors | 0 | 17 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

## Category boundary
```
!new FreeRoomTypesDTO('D30')
!D30.roomTypeDescription := 'Desert tent lodge (shared facilities)'
!D30.numBeds := 2
!D30.pricePerNight := 0.01
!D30.numFreeRooms := 1

!new Customer('C17')
!C17.firstName := 'Fatima-Zahra'
!C17.lastName := 'El Amrani'

!new Booking('B4')
!B4.startDate := '2026-12-31'
!B4.endDate := '2027-01-01'
!B4.canceled := true
!B4.bookingId := 4
!B4.confirmed := true

!new RoomReservation('R7_B4')
!R7_B4.checkInDate := '2026-12-31'
!R7_B4.checkOutDate := '2027-01-01'

!new RoomExtra('E31_B4')
!E31_B4.price := 0.0
!E31_B4.description := 'Mint tea welcome set'

!new RoomExtra('E32_B4')
!E32_B4.price := 25000.0
!E32_B4.description := 'Private dune excursion (exclusive guide)'

!new RoomExtra('E33_B4')
!E33_B4.price := 0.01
!E33_B4.description := 'Local SIM activation fee'

!new Bill('BL3001')
!BL3001.price := 25000.01
!BL3001.billId := 3001

!new Customer('C18')
!C18.firstName := 'Solveig'
!C18.lastName := 'Jónsdóttir'

!new Booking('B5')
!B5.startDate := '2026-01-31'
!B5.endDate := '2026-02-01'
!B5.canceled := false
!B5.bookingId := 5
!B5.confirmed := true

!new RoomReservation('R8_B5')
!R8_B5.checkInDate := '2026-01-31'
!R8_B5.checkOutDate := '2026-02-01'

!new Room('RM214_MAX')
!RM214_MAX.numBeds := 1
!RM214_MAX.pricePerNight := 0.01
!RM214_MAX.occupied := false
!RM214_MAX.blocked := false
!RM214_MAX.roomNumber := 2147483647

!new Bill('BL3002')
!BL3002.price := 0.01
!BL3002.billId := 3002

!insert (B4, C17) into BookingCustomer
!insert (B5, C18) into BookingCustomer

!insert (B4, R7_B4) into BookingRoomReservation
!insert (B5, R8_B5) into BookingRoomReservation

!insert (R7_B4, E31_B4) into RoomReservationExtras
!insert (R7_B4, E32_B4) into RoomReservationExtras
!insert (R7_B4, E33_B4) into RoomReservationExtras

!insert (R8_B5, RM214_MAX) into RoomReservationRoom

!insert (B4, BL3001) into BookingBill
!insert (B5, BL3002) into BookingBill

!insert (BL3001, R7_B4) into BillRoomReservation
!insert (BL3002, R8_B5) into BillRoomReservation
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 62 | 0.00% |
| Multiplicities Errors | 0 | 12 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 2 | 0.00% |
| checkOutDate <= endDate | 0 | 2 | 0.00% |

## Category complex
```
!new Customer('C20')
!C20.firstName := 'Takahiro'
!C20.lastName := 'Watanabe'

!new Booking('B64018')
!B64018.bookingId := 64018
!B64018.startDate := '2026-05-20'
!B64018.endDate := '2026-05-23'
!B64018.confirmed := false
!B64018.canceled := false

!new RoomReservation('RR_X')
!RR_X.checkInDate := '2026-05-20'
!RR_X.checkOutDate := '2026-05-23'

!new RoomReservation('RR_Y')
!RR_Y.checkInDate := '2026-05-21'
!RR_Y.checkOutDate := '2026-05-22'

!new Room('R1507')
!R1507.roomNumber := 1507
!R1507.numBeds := 1
!R1507.pricePerNight := 210.00
!R1507.occupied := true
!R1507.blocked := false

!new Room('R1508')
!R1508.roomNumber := 1508
!R1508.numBeds := 2
!R1508.pricePerNight := 260.00
!R1508.occupied := false
!R1508.blocked := false

!new RoomExtra('X1_RX')
!X1_RX.description := 'Traditional futon/tatami setup request'
!X1_RX.price := 30.00

!new RoomExtra('X2_RX')
!X2_RX.description := 'Kaiseki dinner set (1 person, vegetarian)'
!X2_RX.price := 120.00

!new RoomExtra('X3_RX')
!X3_RX.description := 'Airport limousine transfer (one-way)'
!X3_RX.price := 85.00

!new Bill('BL770900')
!BL770900.billId := 770900
!BL770900.price := 1645.00

!new RoomExtra('Y1_RY')
!Y1_RY.description := 'Meeting package: projector + HDMI switch'
!Y1_RY.price := 45.00

!new RoomExtra('Y2_RY')
!Y2_RY.description := 'Coffee/tea service for 6 (afternoon)'
!Y2_RY.price := 60.00

!new RoomExtra('Y3_RY')
!Y3_RY.description := 'Interpretation headsets rental (6 units)'
!Y3_RY.price := 35.00

!new Bill('BL770901')
!BL770901.billId := 770901
!BL770901.price := 140.00

!new FreeRoomTypesDTO('D33')
!D33.roomTypeDescription := 'シングル（禁煙）— 高層階'
!D33.numBeds := 1
!D33.pricePerNight := 205.00
!D33.numFreeRooms := 3

!new FreeRoomTypesDTO('D34')
!D34.roomTypeDescription := 'Deluxe Twin — river view'
!D34.numBeds := 2
!D34.pricePerNight := 275.00
!D34.numFreeRooms := 1

!new FreeRoomTypesDTO('D35')
!D35.roomTypeDescription := 'Economy Single — shared workspace access'
!D35.numBeds := 1
!D35.pricePerNight := 110.00
!D35.numFreeRooms := 8

!insert (B64018, C20) into BookingCustomer

!insert (B64018, RR_X) into BookingRoomReservation
!insert (B64018, RR_Y) into BookingRoomReservation

!insert (RR_X, R1507) into RoomReservationRoom
!insert (RR_X, R1508) into RoomReservationRoom

!insert (RR_X, X1_RX) into RoomReservationExtras
!insert (RR_X, X2_RX) into RoomReservationExtras
!insert (RR_X, X3_RX) into RoomReservationExtras

!insert (RR_Y, Y1_RY) into RoomReservationExtras
!insert (RR_Y, Y2_RY) into RoomReservationExtras
!insert (RR_Y, Y3_RY) into RoomReservationExtras

!insert (B64018, BL770900) into BookingBill
!insert (B64018, BL770901) into BookingBill

!insert (BL770900, RR_X) into BillRoomReservation
!insert (BL770901, RR_Y) into BillRoomReservation
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 81 | 0.00% |
| Multiplicities Errors | 0 | 15 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

## Category edge
```
!new Customer('C19')
!C19.firstName := 'Nguyễn Thị'
!C19.lastName := 'Minh'

!new Booking('B0')
!B0.bookingId := 0
!B0.startDate := '2026-11-01T25:61'
!B0.endDate := '2026/10/31 (local)'
!B0.confirmed := false
!B0.canceled := false

!new RoomReservation('RR0_A')
!RR0_A.checkInDate := '2026-11-01'
!RR0_A.checkOutDate := '2026-11-01'

!new RoomReservation('RR0_B')
!RR0_B.checkInDate := '1900-01-01'
!RR0_B.checkOutDate := '1900-01-02'

!new RoomReservation('RR0_C')
!RR0_C.checkInDate := '2027-12-20'
!RR0_C.checkOutDate := '2028-01-10'

!new Room('RNEG101')
!RNEG101.roomNumber := -101
!RNEG101.numBeds := 1
!RNEG101.pricePerNight := 75.0
!RNEG101.occupied := false
!RNEG101.blocked := false

!new RoomExtra('A1_EX')
!A1_EX.description := 'Lost key penalty (entered in advance)'
!A1_EX.price := 1000000.0

!new RoomExtra('A2_EX')
!A2_EX.description := 'Baby crib (no charge)'
!A2_EX.price := 0.0

!new Bill('BL91001')
!BL91001.billId := 91001
!BL91001.price := 1000000.0

!new Bill('BL91002')
!BL91002.billId := 91002
!BL91002.price := 15.0

!new Room('R1000')
!R1000.roomNumber := 1000
!R1000.numBeds := 50
!R1000.pricePerNight := 0.3333
!R1000.occupied := true
!R1000.blocked := false

!new Room('RNEG7')
!RNEG7.roomNumber := -7
!RNEG7.numBeds := 2
!RNEG7.pricePerNight := 0.01
!RNEG7.occupied := false
!RNEG7.blocked := true

!new Room('R42_ROOM')
!R42_ROOM.roomNumber := 42
!R42_ROOM.numBeds := 3
!R42_ROOM.pricePerNight := 123456.78
!R42_ROOM.occupied := true
!R42_ROOM.blocked := true

!new RoomExtra('C1_EX')
!C1_EX.description := 'Tatami mat setup request (note-only line item)'
!C1_EX.price := 0.0

!new RoomExtra('C2_EX')
!C2_EX.description := 'Carbon-offset contribution'
!C2_EX.price := 0.01

!new RoomExtra('C3_EX')
!C3_EX.description := 'Event surcharge (seasonal)'
!C3_EX.price := 2500.0

!new RoomExtra('C4_EX')
!C4_EX.description := 'Multi-lingual concierge support (prepaid)'
!C4_EX.price := 99.99

!new Bill('BL91003')
!BL91003.billId := 91003
!BL91003.price := 9999.99

!new FreeRoomTypesDTO('D31')
!D31.roomTypeDescription := 'Pod standing-space (no bed platform) — experimental'
!D31.numBeds := 0
!D31.pricePerNight := -10.0
!D31.numFreeRooms := 2

!new FreeRoomTypesDTO('D32')
!D32.roomTypeDescription := 'Chalet alpin privatif (Savoie)'
!D32.numBeds := 12
!D32.pricePerNight := 640.0
!D32.numFreeRooms := 0

!insert (B0, C19) into BookingCustomer

!insert (B0, RR0_A) into BookingRoomReservation
!insert (B0, RR0_B) into BookingRoomReservation
!insert (B0, RR0_C) into BookingRoomReservation

!insert (RR0_A, RNEG101) into RoomReservationRoom

!insert (RR0_A, A1_EX) into RoomReservationExtras
!insert (RR0_A, A2_EX) into RoomReservationExtras

!insert (B0, BL91001) into BookingBill
!insert (B0, BL91002) into BookingBill
!insert (B0, BL91003) into BookingBill

!insert (BL91001, RR0_A) into BillRoomReservation
!insert (BL91002, RR0_B) into BillRoomReservation
!insert (BL91003, RR0_C) into BillRoomReservation

!insert (RR0_C, R1000) into RoomReservationRoom
!insert (RR0_C, RNEG7) into RoomReservationRoom
!insert (RR0_C, R42_ROOM) into RoomReservationRoom

!insert (RR0_C, C1_EX) into RoomReservationExtras
!insert (RR0_C, C2_EX) into RoomReservationExtras
!insert (RR0_C, C3_EX) into RoomReservationExtras
!insert (RR0_C, C4_EX) into RoomReservationExtras
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 99 | 0.00% |
| Multiplicities Errors | 0 | 20 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 0 | 0.00% |
| checkOutDate <= endDate | 0 | 0 | 0.00% |

## Category invalid
```
!new Customer('C16')
!C16.firstName := 'Khadija'
!C16.lastName := 'El Amrani'

!new Booking('B7007')
!B7007.bookingId := 7007
!B7007.startDate := '2026-11-18'
!B7007.endDate := '2026-11-22'
!B7007.confirmed := true
!B7007.canceled := false

!new RoomReservation('R7701')
!R7701.checkInDate := '2026-11-18'
!R7701.checkOutDate := '2026-11-22'

!new RoomReservation('R7702')
!R7702.checkInDate := '2026-11-18'
!R7702.checkOutDate := '2026-11-22'

!new Room('RM210')
!RM210.roomNumber := 210
!RM210.numBeds := 1
!RM210.pricePerNight := 84.00
!RM210.occupied := false
!RM210.blocked := false

!new Room('RM212')
!RM212.roomNumber := 212
!RM212.numBeds := 2
!RM212.pricePerNight := 112.00
!RM212.occupied := false
!RM212.blocked := false

!new RoomExtra('X7701A')
!X7701A.description := 'Airport transfer (late-night pickup)'
!X7701A.price := 22.00

!new RoomExtra('X7702A')
!X7702A.description := 'Traditional hammam spa access'
!X7702A.price := 30.00

!new RoomExtra('X7702B')
!X7702B.description := 'Extra baby cot'
!X7702B.price := 10.00

!new Bill('BL1200')
!BL1200.billId := 1200
!BL1200.price := 846.00

!new FreeRoomTypesDTO('D27')
!D27.roomTypeDescription := 'Single room, inner courtyard'
!D27.numBeds := 1
!D27.pricePerNight := 84.00
!D27.numFreeRooms := 5

!new FreeRoomTypesDTO('D28')
!D28.roomTypeDescription := 'Double room, city view'
!D28.numBeds := 2
!D28.pricePerNight := 112.00
!D28.numFreeRooms := 2

!new FreeRoomTypesDTO('D29')
!D29.roomTypeDescription := 'Family room, 3 beds'
!D29.numBeds := 3
!D29.pricePerNight := 145.00
!D29.numFreeRooms := 0

!insert (B7007, C16) into BookingCustomer

!insert (B7007, R7701) into BookingRoomReservation
!insert (B7007, R7702) into BookingRoomReservation

!insert (R7701, RM210) into RoomReservationRoom
!insert (R7702, RM212) into RoomReservationRoom

!insert (R7701, X7701A) into RoomReservationExtras
!insert (R7702, X7702A) into RoomReservationExtras
!insert (R7702, X7702B) into RoomReservationExtras

!insert (B7007, BL1200) into BookingBill

!insert (BL1200, R7701) into BillRoomReservation
!insert (BL1200, R7702) into BillRoomReservation
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 11 | 9.09% |
| Invariants Errors (Not included on General) | 0 | 3 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `BillRoomReservation':
  Object `BL1200' of class `Bill' is connected to 2 objects of class `RoomReservation'
  at association end `roomReservation' but the multiplicity is specified as `1'.
```

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

## Generation 3 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 391 | 0.00% |
| Multiplicities Errors | 0 | 64 | 0.00% |
| Invariants Errors | 0 | 12 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 11 | 9.09% |
| Invariants Errors (Not included on General) | 0 | 3 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `BillRoomReservation':
  Object `BL1200' of class `Bill' is connected to 2 objects of class `RoomReservation'
  at association end `roomReservation' but the multiplicity is specified as `1'.
```

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 5 | 0.00% |
| checkOutDate <= endDate | 0 | 5 | 0.00% |

# Generation 4
## Category baseline
```
!new Customer('C15')
!C15.firstName := 'Nguyễn Thị'
!C15.lastName := 'Mai'

!new Booking('B4550')
!B4550.bookingId := 4550
!B4550.startDate := '2026-09-18'
!B4550.endDate := '2026-09-20'
!B4550.confirmed := true
!B4550.canceled := false

!new RoomReservation('RR7')
!RR7.checkInDate := '2026-09-18'
!RR7.checkOutDate := '2026-09-20'

!new RoomReservation('RR8')
!RR8.checkInDate := '2026-09-18'
!RR8.checkOutDate := '2026-09-18'

!new Room('R902')
!R902.roomNumber := 902
!R902.numBeds := 2
!R902.pricePerNight := 160.00
!R902.occupied := true
!R902.blocked := false

!new RoomExtra('E20')
!E20.description := 'Welcome fruit + herbal tea set'
!E20.price := 20.00

!new RoomExtra('E21_2')
!E21_2.description := 'Co-working lounge day pass (4 hours)'
!E21_2.price := 15.00

!new RoomExtra('E22_2')
!E22_2.description := 'Luggage storage (pre check-in)'
!E22_2.price := 0.00

!new Bill('BL12005')
!BL12005.billId := 12005
!BL12005.price := 340.00

!new Bill('BL12006')
!BL12006.billId := 12006
!BL12006.price := 15.00

!new FreeRoomTypesDTO('D24')
!D24.roomTypeDescription := 'Quarto Executivo (andar alto, vista cidade)'
!D24.numBeds := 1
!D24.pricePerNight := 150.00
!D24.numFreeRooms := 5

!new FreeRoomTypesDTO('D25')
!D25.roomTypeDescription := 'Семейный номер (две спальни)'
!D25.numBeds := 4
!D25.pricePerNight := 260.00
!D25.numFreeRooms := 1

!new FreeRoomTypesDTO('D26')
!D26.roomTypeDescription := 'Accessible Double (roll-in shower)'
!D26.numBeds := 2
!D26.pricePerNight := 170.00
!D26.numFreeRooms := 0

!insert (B4550, C15) into BookingCustomer

!insert (B4550, RR7) into BookingRoomReservation
!insert (B4550, RR8) into BookingRoomReservation

!insert (RR7, R902) into RoomReservationRoom

!insert (RR7, E20) into RoomReservationExtras
!insert (RR8, E21_2) into RoomReservationExtras
!insert (RR8, E22_2) into RoomReservationExtras

!insert (B4550, BL12005) into BookingBill
!insert (B4550, BL12006) into BookingBill

!insert (BL12005, RR7) into BillRoomReservation
!insert (BL12006, RR8) into BillRoomReservation
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 62 | 0.00% |
| Multiplicities Errors | 0 | 11 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

## Category boundary
```
!new FreeRoomTypesDTO('D43')
!D43.roomTypeDescription := 'Unspecified placeholder type'
!D43.numBeds := 0
!D43.pricePerNight := 0.0
!D43.numFreeRooms := 0

!new Customer('C24')
!C24.firstName := 'Nguyễn'
!C24.lastName := ''

!new Booking('B6_LEAP')
!B6_LEAP.startDate := '2028-02-29'
!B6_LEAP.endDate := '2028-03-02'
!B6_LEAP.canceled := false
!B6_LEAP.bookingId := 0
!B6_LEAP.confirmed := true

!new RoomReservation('R9_B6')
!R9_B6.checkInDate := '2028-02-29'
!R9_B6.checkOutDate := '2028-02-29'

!new Room('RM200_B6')
!RM200_B6.numBeds := 1
!RM200_B6.pricePerNight := 0.01
!RM200_B6.occupied := true
!RM200_B6.blocked := false
!RM200_B6.roomNumber := 0

!new Bill('BL4001')
!BL4001.price := 0.01
!BL4001.billId := 4001

!new RoomReservation('R10_B6')
!R10_B6.checkInDate := '2028-02-29'
!R10_B6.checkOutDate := '2028-03-01'

!new Bill('BL4002')
!BL4002.price := 0.0
!BL4002.billId := 4002

!new RoomReservation('R11_B6')
!R11_B6.checkInDate := '2028-03-01'
!R11_B6.checkOutDate := '2028-03-01'

!new Room('RM201_B6')
!RM201_B6.numBeds := 100
!RM201_B6.pricePerNight := 12345.67
!RM201_B6.occupied := false
!RM201_B6.blocked := false
!RM201_B6.roomNumber := 10000

!new Room('RM202_B6')
!RM202_B6.numBeds := 50
!RM202_B6.pricePerNight := 54321.0
!RM202_B6.occupied := false
!RM202_B6.blocked := true
!RM202_B6.roomNumber := 10001

!new RoomExtra('E41_B6')
!E41_B6.price := 0.0
!E41_B6.description := 'Carbon-offset certificate (digital)'

!new Bill('BL4003')
!BL4003.price := 66666.67
!BL4003.billId := 4003

!new RoomReservation('R12_B6')
!R12_B6.checkInDate := '2028-03-01'
!R12_B6.checkOutDate := '2028-03-02'

!new Room('RM203_B6')
!RM203_B6.numBeds := 2
!RM203_B6.pricePerNight := 999999.99
!RM203_B6.occupied := true
!RM203_B6.blocked := true
!RM203_B6.roomNumber := 404

!new RoomExtra('E42_B6')
!E42_B6.price := 0.0
!E42_B6.description := 'Welcome water ration (complimentary)'

!new RoomExtra('E43_B6')
!E43_B6.price := 250.0
!E43_B6.description := 'Satellite internet day-pass'

!new RoomExtra('E44_B6')
!E44_B6.price := 1000.0
!E44_B6.description := 'Generator fuel surcharge'

!new RoomExtra('E45_B6')
!E45_B6.price := 75.5
!E45_B6.description := 'Thermal blanket rental'

!new RoomExtra('E46_B6')
!E46_B6.price := 0.01
!E46_B6.description := 'Local tax rounding adjustment'

!new RoomExtra('E47_B6')
!E47_B6.price := 500.0
!E47_B6.description := 'Guided stargazing session'

!new RoomExtra('E48_B6')
!E48_B6.price := 120.0
!E48_B6.description := 'Medical check-in (on call)'

!new Bill('BL4004')
!BL4004.price := 1001945.50
!BL4004.billId := 4004

!new RoomReservation('R13_B6')
!R13_B6.checkInDate := '2028-03-02'
!R13_B6.checkOutDate := '2028-03-02'

!new Room('RM204_B6')
!RM204_B6.numBeds := 1
!RM204_B6.pricePerNight := 0.0
!RM204_B6.occupied := false
!RM204_B6.blocked := false
!RM204_B6.roomNumber := -1

!new Room('RM205_B6')
!RM205_B6.numBeds := 1
!RM205_B6.pricePerNight := 0.0
!RM205_B6.occupied := false
!RM205_B6.blocked := false
!RM205_B6.roomNumber := -2

!new Room('RM206_B6')
!RM206_B6.numBeds := 1
!RM206_B6.pricePerNight := 0.0
!RM206_B6.occupied := false
!RM206_B6.blocked := false
!RM206_B6.roomNumber := -3

!new Bill('BL4005')
!BL4005.price := 0.0
!BL4005.billId := 4005

!insert (B6_LEAP, C24) into BookingCustomer

!insert (B6_LEAP, R9_B6) into BookingRoomReservation
!insert (B6_LEAP, R10_B6) into BookingRoomReservation
!insert (B6_LEAP, R11_B6) into BookingRoomReservation
!insert (B6_LEAP, R12_B6) into BookingRoomReservation
!insert (B6_LEAP, R13_B6) into BookingRoomReservation

!insert (R9_B6, RM200_B6) into RoomReservationRoom
!insert (R11_B6, RM201_B6) into RoomReservationRoom
!insert (R11_B6, RM202_B6) into RoomReservationRoom
!insert (R12_B6, RM203_B6) into RoomReservationRoom
!insert (R13_B6, RM204_B6) into RoomReservationRoom
!insert (R13_B6, RM205_B6) into RoomReservationRoom
!insert (R13_B6, RM206_B6) into RoomReservationRoom

!insert (R11_B6, E41_B6) into RoomReservationExtras
!insert (R12_B6, E42_B6) into RoomReservationExtras
!insert (R12_B6, E43_B6) into RoomReservationExtras
!insert (R12_B6, E44_B6) into RoomReservationExtras
!insert (R12_B6, E45_B6) into RoomReservationExtras
!insert (R12_B6, E46_B6) into RoomReservationExtras
!insert (R12_B6, E47_B6) into RoomReservationExtras
!insert (R12_B6, E48_B6) into RoomReservationExtras

!insert (B6_LEAP, BL4001) into BookingBill
!insert (B6_LEAP, BL4002) into BookingBill
!insert (B6_LEAP, BL4003) into BookingBill
!insert (B6_LEAP, BL4004) into BookingBill
!insert (B6_LEAP, BL4005) into BookingBill

!insert (BL4001, R9_B6) into BillRoomReservation
!insert (BL4002, R10_B6) into BillRoomReservation
!insert (BL4003, R11_B6) into BillRoomReservation
!insert (BL4004, R12_B6) into BillRoomReservation
!insert (BL4005, R13_B6) into BillRoomReservation
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 141 | 0.00% |
| Multiplicities Errors | 0 | 31 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

## Category complex
```
!new Customer('C23')
!C23.firstName := 'Nandini'
!C23.lastName := 'Rao'

!new Booking('B50233')
!B50233.bookingId := 50233
!B50233.startDate := '2026-08-14'
!B50233.endDate := '2026-08-18'
!B50233.confirmed := true
!B50233.canceled := true

!new RoomReservation('RR_M1')
!RR_M1.checkInDate := '2026-08-14'
!RR_M1.checkOutDate := '2026-08-16'

!new RoomReservation('RR_M2')
!RR_M2.checkInDate := '2026-08-16'
!RR_M2.checkOutDate := '2026-08-18'

!new RoomReservation('RR_M3')
!RR_M3.checkInDate := '2026-08-14'
!RR_M3.checkOutDate := '2026-08-15'

!new Room('R305_M1')
!R305_M1.roomNumber := 305
!R305_M1.numBeds := 1
!R305_M1.pricePerNight := 92.50
!R305_M1.occupied := false
!R305_M1.blocked := false

!new RoomExtra('M1_1')
!M1_1.description := 'South Indian breakfast set (2 mornings)'
!M1_1.price := 18.00

!new RoomExtra('M1_2')
!M1_2.description := 'Station transfer (prepaid taxi)'
!M1_2.price := 12.50

!new Bill('BL660201')
!BL660201.billId := 660201
!BL660201.price := 215.50

!new Room('R1110_M2')
!R1110_M2.roomNumber := 1110
!R1110_M2.numBeds := 2
!R1110_M2.pricePerNight := 210.00
!R1110_M2.occupied := false
!R1110_M2.blocked := true

!new RoomExtra('M2_1')
!M2_1.description := 'Force-majeure waiver processing (documented disruption)'
!M2_1.price := 0.00

!new Bill('BL660202')
!BL660202.billId := 660202
!BL660202.price := 0.00

!new Room('R210_M3')
!R210_M3.roomNumber := 210
!R210_M3.numBeds := 1
!R210_M3.pricePerNight := 70.00
!R210_M3.occupied := false
!R210_M3.blocked := false

!new Bill('BL660203')
!BL660203.billId := 660203
!BL660203.price := 70.00

!new FreeRoomTypesDTO('D40')
!D40.roomTypeDescription := 'Deluxe Double — AC, near lift'
!D40.numBeds := 2
!D40.pricePerNight := 205.00
!D40.numFreeRooms := 0

!new FreeRoomTypesDTO('D41')
!D41.roomTypeDescription := 'स्टैंडर्ड सिंगल (Standard Single) — नॉन स्मोकिंग'
!D41.numBeds := 1
!D41.pricePerNight := 85.00
!D41.numFreeRooms := 5

!new FreeRoomTypesDTO('D42')
!D42.roomTypeDescription := 'சூப்பீரியர் ட்வின் (Superior Twin) — city side'
!D42.numBeds := 2
!D42.pricePerNight := 155.00
!D42.numFreeRooms := 2

!insert (B50233, C23) into BookingCustomer

!insert (B50233, RR_M1) into BookingRoomReservation
!insert (B50233, RR_M2) into BookingRoomReservation
!insert (B50233, RR_M3) into BookingRoomReservation

!insert (RR_M1, R305_M1) into RoomReservationRoom
!insert (RR_M2, R1110_M2) into RoomReservationRoom
!insert (RR_M3, R210_M3) into RoomReservationRoom

!insert (RR_M1, M1_1) into RoomReservationExtras
!insert (RR_M1, M1_2) into RoomReservationExtras
!insert (RR_M2, M2_1) into RoomReservationExtras

!insert (B50233, BL660201) into BookingBill
!insert (B50233, BL660202) into BookingBill
!insert (B50233, BL660203) into BookingBill

!insert (BL660201, RR_M1) into BillRoomReservation
!insert (BL660202, RR_M2) into BillRoomReservation
!insert (BL660203, RR_M3) into BillRoomReservation
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 85 | 0.00% |
| Multiplicities Errors | 0 | 16 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

## Category edge
```
!new Customer('C25')
!C25.firstName := 'Māia'
!C25.lastName := 'Te Rangi-Whaitiri'

!new Booking('B77')
!B77.bookingId := 77
!B77.startDate := '2026-04-01'
!B77.endDate := '2026-04-02'
!B77.confirmed := true
!B77.canceled := false

!new RoomReservation('RR77_1')
!RR77_1.checkInDate := '2026-03-30'
!RR77_1.checkOutDate := '2026-03-30'

!new Room('R1_RR77')
!R1_RR77.roomNumber := 1
!R1_RR77.numBeds := 1
!R1_RR77.pricePerNight := 0.005
!R1_RR77.occupied := false
!R1_RR77.blocked := false

!new Bill('BL7001_77')
!BL7001_77.billId := 7001
!BL7001_77.price := 0.01

!new RoomReservation('RR77_2')
!RR77_2.checkInDate := '2026-04-01'
!RR77_2.checkOutDate := '2026-04-10'

!new Bill('BL7002_77')
!BL7002_77.billId := 7002
!BL7002_77.price := 0.0

!new RoomReservation('RR77_3')
!RR77_3.checkInDate := '2027-01-01'
!RR77_3.checkOutDate := '2027-01-02'

!new Room('R900000')
!R900000.roomNumber := 900000
!R900000.numBeds := 2
!R900000.pricePerNight := 150.0
!R900000.occupied := true
!R900000.blocked := false

!new Room('R900001')
!R900001.roomNumber := 900001
!R900001.numBeds := 1
!R900001.pricePerNight := 150.0
!R900001.occupied := false
!R900001.blocked := false

!new RoomExtra('EX3A')
!EX3A.description := 'Satellite internet add-on (remote location test)'
!EX3A.price := 50.0

!new Bill('BL7003_77')
!BL7003_77.billId := 7003
!BL7003_77.price := 350.0

!new RoomReservation('RR77_4')
!RR77_4.checkInDate := '2026-04-01'
!RR77_4.checkOutDate := '2026-04-02'

!new Room('R404_RR77')
!R404_RR77.roomNumber := 404
!R404_RR77.numBeds := 1
!R404_RR77.pricePerNight := 88.88
!R404_RR77.occupied := false
!R404_RR77.blocked := true

!new RoomExtra('EX4A')
!EX4A.description := 'Printed map (local language)'
!EX4A.price := 0.20

!new RoomExtra('EX4B')
!EX4B.description := 'Luggage tag'
!EX4B.price := 0.05

!new RoomExtra('EX4C')
!EX4C.description := 'Electricity surcharge rounding adjustment'
!EX4C.price := 0.01

!new RoomExtra('EX4D')
!EX4D.description := 'Reusable water bottle'
!EX4D.price := 3.99

!new RoomExtra('EX4E')
!EX4E.description := 'Local call minute bundle'
!EX4E.price := 1.30

!new Bill('BL7004_77')
!BL7004_77.billId := 7004
!BL7004_77.price := 5.55

!new RoomReservation('RR77_5')
!RR77_5.checkInDate := ''
!RR77_5.checkOutDate := ''

!new Room('R2147483000')
!R2147483000.roomNumber := 2147483000
!R2147483000.numBeds := 3
!R2147483000.pricePerNight := 1.0
!R2147483000.occupied := true
!R2147483000.blocked := true

!new Bill('BL7005_77')
!BL7005_77.billId := 7005
!BL7005_77.price := 1.0

!new RoomReservation('RR77_6')
!RR77_6.checkInDate := '2026-04-02'
!RR77_6.checkOutDate := '2026-04-02'

!new RoomExtra('EX6A')
!EX6A.description := 'Invoice re-issue fee (waived)'
!EX6A.price := 0.0

!new RoomExtra('EX6B')
!EX6B.description := 'Currency conversion note line'
!EX6B.price := 0.0

!new RoomExtra('EX6C')
!EX6C.description := 'Municipal tax exemption recorded'
!EX6C.price := 0.0

!new Bill('BL7006_77')
!BL7006_77.billId := 7006
!BL7006_77.price := 0.0

!new FreeRoomTypesDTO('D44')
!D44.roomTypeDescription := 'Sótano compartido (sin señal móvil)'
!D44.numBeds := 8
!D44.pricePerNight := 12.0
!D44.numFreeRooms := -3

!new FreeRoomTypesDTO('D45')
!D45.roomTypeDescription := 'Ice hotel room (seasonal, melts)'
!D45.numBeds := 1
!D45.pricePerNight := 250.0
!D45.numFreeRooms := 0

!new FreeRoomTypesDTO('D46')
!D46.roomTypeDescription := 'Family longhouse (communal sleeping hall)'
!D46.numBeds := 30
!D46.pricePerNight := 5.0
!D46.numFreeRooms := 2

!insert (B77, C25) into BookingCustomer

!insert (B77, RR77_1) into BookingRoomReservation
!insert (B77, RR77_2) into BookingRoomReservation
!insert (B77, RR77_3) into BookingRoomReservation
!insert (B77, RR77_4) into BookingRoomReservation
!insert (B77, RR77_5) into BookingRoomReservation
!insert (B77, RR77_6) into BookingRoomReservation

!insert (RR77_1, R1_RR77) into RoomReservationRoom
!insert (RR77_3, R900000) into RoomReservationRoom
!insert (RR77_3, R900001) into RoomReservationRoom
!insert (RR77_4, R404_RR77) into RoomReservationRoom
!insert (RR77_5, R2147483000) into RoomReservationRoom

!insert (RR77_3, EX3A) into RoomReservationExtras
!insert (RR77_4, EX4A) into RoomReservationExtras
!insert (RR77_4, EX4B) into RoomReservationExtras
!insert (RR77_4, EX4C) into RoomReservationExtras
!insert (RR77_4, EX4D) into RoomReservationExtras
!insert (RR77_4, EX4E) into RoomReservationExtras
!insert (RR77_6, EX6A) into RoomReservationExtras
!insert (RR77_6, EX6B) into RoomReservationExtras
!insert (RR77_6, EX6C) into RoomReservationExtras

!insert (B77, BL7001_77) into BookingBill
!insert (B77, BL7002_77) into BookingBill
!insert (B77, BL7003_77) into BookingBill
!insert (B77, BL7004_77) into BookingBill
!insert (B77, BL7005_77) into BookingBill
!insert (B77, BL7006_77) into BookingBill

!insert (BL7001_77, RR77_1) into BillRoomReservation
!insert (BL7002_77, RR77_2) into BillRoomReservation
!insert (BL7003_77, RR77_3) into BillRoomReservation
!insert (BL7004_77, RR77_4) into BillRoomReservation
!insert (BL7005_77, RR77_5) into BillRoomReservation
!insert (BL7006_77, RR77_6) into BillRoomReservation
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 150 | 0.00% |
| Multiplicities Errors | 0 | 33 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

## Category invalid
```
!new Customer('C21')
!C21.firstName := 'Fatou'
!C21.lastName := 'Diop'

!new Booking('B8080')
!B8080.bookingId := 8080
!B8080.startDate := '2026-08-14'
!B8080.endDate := '2026-08-16'
!B8080.confirmed := false
!B8080.canceled := true

!new RoomReservation('R8081')
!R8081.checkInDate := '2026-08-14'
!R8081.checkOutDate := '2026-08-16'

!new Room('RM701_REF')
!RM701_REF.roomNumber := 701
!RM701_REF.numBeds := 1
!RM701_REF.pricePerNight := 150.00
!RM701_REF.occupied := false
!RM701_REF.blocked := false

!new Bill('BL5555')
!BL5555.billId := 5555
!BL5555.price := -100.00

!new FreeRoomTypesDTO('D36')
!D36.roomTypeDescription := 'Standard single, high floor'
!D36.numBeds := 1
!D36.pricePerNight := 150.00
!D36.numFreeRooms := 6

!new FreeRoomTypesDTO('D37')
!D37.roomTypeDescription := 'Double room, balcony'
!D37.numBeds := 2
!D37.pricePerNight := 195.00
!D37.numFreeRooms := 2

!insert (B8080, C21) into BookingCustomer

!insert (B8080, R8081) into BookingRoomReservation

!insert (R8081, RM701_REF) into RoomReservationRoom

!insert (B8080, BL5555) into BookingBill

!insert (BL5555, R8081) into BillRoomReservation
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 5 | 0.00% |
| Invariants Errors (Not included on General) | 1 | 3 | 33.33% |

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (1) `Bill::positiveBill': FAILED.
```

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

## Generation 4 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 474 | 0.00% |
| Multiplicities Errors | 0 | 91 | 0.00% |
| Invariants Errors | 0 | 12 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 5 | 0.00% |
| Invariants Errors (Not included on General) | 1 | 3 | 33.33% |

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (1) `Bill::positiveBill': FAILED.
```

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 5 | 0.00% |
| checkOutDate <= endDate | 0 | 5 | 0.00% |

# Generation 5
## Category baseline
```
!new Customer('C22')
!C22.firstName := 'Anand'
!C22.lastName := 'Iyer'

!new Booking('B6002')
!B6002.bookingId := 6002
!B6002.startDate := '2026-02-10'
!B6002.endDate := '2026-02-13'
!B6002.confirmed := true
!B6002.canceled := false

!new RoomReservation('RR9')
!RR9.checkInDate := '2026-02-10'
!RR9.checkOutDate := '2026-02-12'

!new RoomReservation('RR10')
!RR10.checkInDate := '2026-02-12'
!RR10.checkOutDate := '2026-02-13'

!new RoomReservation('RR11')
!RR11.checkInDate := '2026-02-11'
!RR11.checkOutDate := '2026-02-11'

!new Room('R1201')
!R1201.roomNumber := 1201
!R1201.numBeds := 1
!R1201.pricePerNight := 110.00
!R1201.occupied := true
!R1201.blocked := false

!new Room('R1202')
!R1202.roomNumber := 1202
!R1202.numBeds := 4
!R1202.pricePerNight := 120.00
!R1202.occupied := false
!R1202.blocked := false

!new RoomExtra('E34')
!E34.description := 'Rollaway bed (one night)'
!E34.price := 15.00

!new RoomExtra('E35')
!E35.description := 'Vegetarian set dinner'
!E35.price := 30.00

!new RoomExtra('E36')
!E36.description := 'Meeting room rental (2 hours)'
!E36.price := 200.00

!new Bill('BL15001')
!BL15001.billId := 15001
!BL15001.price := 0.00

!new Bill('BL15002')
!BL15002.billId := 15002
!BL15002.price := 165.00

!new Bill('BL15003')
!BL15003.billId := 15003
!BL15003.price := 200.00

!new FreeRoomTypesDTO('D38')
!D38.roomTypeDescription := 'Standard Einzelzimmer (ruhige Lage)'
!D38.numBeds := 1
!D38.pricePerNight := 110.00
!D38.numFreeRooms := 7

!new FreeRoomTypesDTO('D39')
!D39.roomTypeDescription := 'Chumba cha Familia (vitanda vinne)'
!D39.numBeds := 4
!D39.pricePerNight := 120.00
!D39.numFreeRooms := 1

!insert (B6002, C22) into BookingCustomer

!insert (B6002, RR9) into BookingRoomReservation
!insert (B6002, RR10) into BookingRoomReservation
!insert (B6002, RR11) into BookingRoomReservation

!insert (RR9, R1201) into RoomReservationRoom
!insert (RR10, R1202) into RoomReservationRoom

!insert (RR10, E34) into RoomReservationExtras
!insert (RR10, E35) into RoomReservationExtras
!insert (RR11, E36) into RoomReservationExtras

!insert (B6002, BL15001) into BookingBill
!insert (B6002, BL15002) into BookingBill
!insert (B6002, BL15003) into BookingBill

!insert (BL15001, RR9) into BillRoomReservation
!insert (BL15002, RR10) into BillRoomReservation
!insert (BL15003, RR11) into BillRoomReservation
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 73 | 0.00% |
| Multiplicities Errors | 0 | 15 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

## Category boundary
```
!new FreeRoomTypesDTO('D59')
!D59.roomTypeDescription := 'Dormitory bunk (mixed)'
!D59.numBeds := 20
!D59.pricePerNight := 15.0
!D59.numFreeRooms := 0

!new Customer('C31')
!C31.firstName := 'Léa'
!C31.lastName := 'Moreau'

!new Booking('B7')
!B7.startDate := ''
!B7.endDate := ''
!B7.canceled := true
!B7.bookingId := -99
!B7.confirmed := false

!new Customer('C32')
!C32.firstName := 'Илья'
!C32.lastName := 'Петров'

!new Booking('B8')
!B8.startDate := '2026-06-15'
!B8.endDate := '2026-06-16'
!B8.canceled := false
!B8.bookingId := 6
!B8.confirmed := true

!new RoomReservation('RR14_B8')
!RR14_B8.checkInDate := '2026-06-15'
!RR14_B8.checkOutDate := '2026-06-16'

!new Room('RM301_B8')
!RM301_B8.numBeds := 1
!RM301_B8.pricePerNight := 0.0
!RM301_B8.occupied := false
!RM301_B8.blocked := false
!RM301_B8.roomNumber := 7

!new Room('RM302_B8')
!RM302_B8.numBeds := 2147483647
!RM302_B8.pricePerNight := 0.0
!RM302_B8.occupied := false
!RM302_B8.blocked := true
!RM302_B8.roomNumber := 8

!new Bill('BL5001')
!BL5001.price := 0.0
!BL5001.billId := 5001

!new Customer('C33')
!C33.firstName := 'Amrita'
!C33.lastName := 'Singh'

!new Booking('B9')
!B9.startDate := '2026-11-01'
!B9.endDate := '2026-11-02'
!B9.canceled := false
!B9.bookingId := 7
!B9.confirmed := false

!new RoomReservation('RR15_B9')
!RR15_B9.checkInDate := '2026-11-01'
!RR15_B9.checkOutDate := '2026-11-02'

!new RoomExtra('E49_B9')
!E49_B9.price := 0.0
!E49_B9.description := 'Diya lamp set for festival welcome'

!new Bill('BL5002')
!BL5002.price := 0.0
!BL5002.billId := 5002

!insert (B7, C31) into BookingCustomer
!insert (B8, C32) into BookingCustomer
!insert (B9, C33) into BookingCustomer

!insert (B8, RR14_B8) into BookingRoomReservation
!insert (B9, RR15_B9) into BookingRoomReservation

!insert (RR14_B8, RM301_B8) into RoomReservationRoom
!insert (RR14_B8, RM302_B8) into RoomReservationRoom

!insert (RR15_B9, E49_B9) into RoomReservationExtras

!insert (B8, BL5001) into BookingBill
!insert (B9, BL5002) into BookingBill

!insert (BL5001, RR14_B8) into BillRoomReservation
!insert (BL5002, RR15_B9) into BillRoomReservation
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 71 | 0.00% |
| Multiplicities Errors | 0 | 12 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 2 | 0.00% |
| checkOutDate <= endDate | 0 | 2 | 0.00% |

## Category complex
```
!new Customer('C30')
!C30.firstName := 'Oluwaseun'
!C30.lastName := 'Adeyemi'

!new Booking('B31577')
!B31577.bookingId := 31577
!B31577.startDate := '2026-12-24'
!B31577.endDate := '2027-01-02'
!B31577.confirmed := true
!B31577.canceled := false

!new RoomReservation('RR_H1')
!RR_H1.checkInDate := '2026-12-24'
!RR_H1.checkOutDate := '2026-12-26'

!new RoomReservation('RR_H2')
!RR_H2.checkInDate := '2026-12-26'
!RR_H2.checkOutDate := '2026-12-29'

!new RoomReservation('RR_H3')
!RR_H3.checkInDate := '2026-12-29'
!RR_H3.checkOutDate := '2027-01-02'

!new RoomReservation('RR_H4')
!RR_H4.checkInDate := '2026-12-31'
!RR_H4.checkOutDate := '2027-01-01'

!new Room('R12_H1_31577')
!R12_H1_31577.roomNumber := 12
!R12_H1_31577.numBeds := 1
!R12_H1_31577.pricePerNight := 110.00
!R12_H1_31577.occupied := true
!R12_H1_31577.blocked := false

!new Room('R14_H1_31577')
!R14_H1_31577.roomNumber := 14
!R14_H1_31577.numBeds := 2
!R14_H1_31577.pricePerNight := 145.00
!R14_H1_31577.occupied := true
!R14_H1_31577.blocked := false

!new RoomExtra('EH1_1_31577')
!EH1_1_31577.description := 'Festive welcome hamper (non-alcoholic)'
!EH1_1_31577.price := 25.00

!new Bill('BL940001')
!BL940001.billId := 940001
!BL940001.price := 535.00

!new Room('R406_H2_31577')
!R406_H2_31577.roomNumber := 406
!R406_H2_31577.numBeds := 1
!R406_H2_31577.pricePerNight := 125.00
!R406_H2_31577.occupied := true
!R406_H2_31577.blocked := false

!new Bill('BL940002')
!BL940002.billId := 940002
!BL940002.price := 375.00

!new Room('R918_H3_31577')
!R918_H3_31577.roomNumber := 918
!R918_H3_31577.numBeds := 2
!R918_H3_31577.pricePerNight := 190.00
!R918_H3_31577.occupied := false
!R918_H3_31577.blocked := false

!new RoomExtra('EH3_1_31577')
!EH3_1_31577.description := 'New Year’s Eve set dinner (2 persons)'
!EH3_1_31577.price := 160.00

!new RoomExtra('EH3_2_31577')
!EH3_2_31577.description := 'Extra heater (guest comfort request)'
!EH3_2_31577.price := 15.00

!new RoomExtra('EH3_3_31577')
!EH3_3_31577.description := 'Secure luggage storage after checkout'
!EH3_3_31577.price := 5.00

!new Bill('BL940003')
!BL940003.billId := 940003
!BL940003.price := 940.00

!new Room('R520_H4_31577')
!R520_H4_31577.roomNumber := 520
!R520_H4_31577.numBeds := 2
!R520_H4_31577.pricePerNight := 170.00
!R520_H4_31577.occupied := false
!R520_H4_31577.blocked := false

!new Room('R521_H4_31577')
!R521_H4_31577.roomNumber := 521
!R521_H4_31577.numBeds := 2
!R521_H4_31577.pricePerNight := 170.00
!R521_H4_31577.occupied := false
!R521_H4_31577.blocked := false

!new RoomExtra('EH4_1_31577')
!EH4_1_31577.description := 'Additional bedding set (2 rollaway mattresses)'
!EH4_1_31577.price := 40.00

!new Bill('BL940004')
!BL940004.billId := 940004
!BL940004.price := 380.00

!new FreeRoomTypesDTO('D56')
!D56.roomTypeDescription := 'Suite ya familia (Yorùbá/EN mix): Family suite — ocean side'
!D56.numBeds := 3
!D56.pricePerNight := 260.00
!D56.numFreeRooms := 1

!new FreeRoomTypesDTO('D57')
!D57.roomTypeDescription := 'Standard Single — quiet floor (near library lounge)'
!D57.numBeds := 1
!D57.pricePerNight := 115.00
!D57.numFreeRooms := 7

!new FreeRoomTypesDTO('D58')
!D58.roomTypeDescription := 'Kahden hengen huone (Twin) — aamiaisen kanssa'
!D58.numBeds := 2
!D58.pricePerNight := 155.00
!D58.numFreeRooms := 2

!insert (B31577, C30) into BookingCustomer

!insert (B31577, RR_H1) into BookingRoomReservation
!insert (B31577, RR_H2) into BookingRoomReservation
!insert (B31577, RR_H3) into BookingRoomReservation
!insert (B31577, RR_H4) into BookingRoomReservation

!insert (RR_H1, R12_H1_31577) into RoomReservationRoom
!insert (RR_H1, R14_H1_31577) into RoomReservationRoom
!insert (RR_H2, R406_H2_31577) into RoomReservationRoom
!insert (RR_H3, R918_H3_31577) into RoomReservationRoom
!insert (RR_H4, R520_H4_31577) into RoomReservationRoom
!insert (RR_H4, R521_H4_31577) into RoomReservationRoom

!insert (RR_H1, EH1_1_31577) into RoomReservationExtras
!insert (RR_H3, EH3_1_31577) into RoomReservationExtras
!insert (RR_H3, EH3_2_31577) into RoomReservationExtras
!insert (RR_H3, EH3_3_31577) into RoomReservationExtras
!insert (RR_H4, EH4_1_31577) into RoomReservationExtras

!insert (B31577, BL940001) into BookingBill
!insert (B31577, BL940002) into BookingBill
!insert (B31577, BL940003) into BookingBill
!insert (B31577, BL940004) into BookingBill

!insert (BL940001, RR_H1) into BillRoomReservation
!insert (BL940002, RR_H2) into BillRoomReservation
!insert (BL940003, RR_H3) into BillRoomReservation
!insert (BL940004, RR_H4) into BillRoomReservation
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 123 | 0.00% |
| Multiplicities Errors | 0 | 24 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

## Category edge
```
!new Customer('C28')
!C28.firstName := 'Khadija (خديجة)'
!C28.lastName := 'Aït Benhaddou'

!new Booking('B123456')
!B123456.bookingId := 123456
!B123456.startDate := '١٤٤٧-٠٩-٠١ (Hijri)'
!B123456.endDate := '١٤٤٧-٠٩-٠٢ (Hijri)'
!B123456.confirmed := true
!B123456.canceled := false

!new RoomReservation('RR_MULTIROOM_123456')
!RR_MULTIROOM_123456.checkInDate := 'next Friday after Maghrib'
!RR_MULTIROOM_123456.checkOutDate := 'yesterday'

!new Room('RM12_123456')
!RM12_123456.roomNumber := 12
!RM12_123456.numBeds := 1
!RM12_123456.pricePerNight := 0.0
!RM12_123456.occupied := false
!RM12_123456.blocked := false

!new Room('RM1201_123456')
!RM1201_123456.roomNumber := 1201
!RM1201_123456.numBeds := 2
!RM1201_123456.pricePerNight := 0.02
!RM1201_123456.occupied := true
!RM1201_123456.blocked := false

!new Room('RM700_123456')
!RM700_123456.roomNumber := 700
!RM700_123456.numBeds := 4
!RM700_123456.pricePerNight := 8888.88
!RM700_123456.occupied := false
!RM700_123456.blocked := true

!new Room('RM100000_123456')
!RM100000_123456.roomNumber := 100000
!RM100000_123456.numBeds := 3
!RM100000_123456.pricePerNight := 1.9999
!RM100000_123456.occupied := true
!RM100000_123456.blocked := true

!new Bill('BL424242')
!BL424242.billId := 424242
!BL424242.price := 0.0

!new FreeRoomTypesDTO('D52')
!D52.roomTypeDescription := 'Riād courtyard room (traditional), shared bath'
!D52.numBeds := 1
!D52.pricePerNight := 60.0
!D52.numFreeRooms := 0

!new FreeRoomTypesDTO('D53')
!D53.roomTypeDescription := 'Desert tent platform (stargazing), bring your own bedding'
!D53.numBeds := 1
!D53.pricePerNight := 5.0
!D53.numFreeRooms := 99999

!insert (B123456, C28) into BookingCustomer

!insert (B123456, RR_MULTIROOM_123456) into BookingRoomReservation

!insert (RR_MULTIROOM_123456, RM12_123456) into RoomReservationRoom
!insert (RR_MULTIROOM_123456, RM1201_123456) into RoomReservationRoom
!insert (RR_MULTIROOM_123456, RM700_123456) into RoomReservationRoom
!insert (RR_MULTIROOM_123456, RM100000_123456) into RoomReservationRoom

!insert (B123456, BL424242) into BookingBill

!insert (BL424242, RR_MULTIROOM_123456) into BillRoomReservation
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 57 | 0.00% |
| Multiplicities Errors | 0 | 8 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 0 | 0.00% |
| checkOutDate <= endDate | 0 | 0 | 0.00% |

## Category invalid
```
!new Customer('C26')
!C26.firstName := 'Omar'
!C26.lastName := 'Al‑Farsi'

!new Booking('B9090')
!B9090.bookingId := 9090
!B9090.startDate := '2026-09-03'
!B9090.endDate := '2026-09-04'
!B9090.confirmed := true
!B9090.canceled := false

!new RoomReservation('R9090_RS')
!R9090_RS.checkInDate := '2026-09-03'
!R9090_RS.checkOutDate := '2026-09-04'

!new Room('RM1201_B9090')
!RM1201_B9090.roomNumber := 1201
!RM1201_B9090.numBeds := 1
!RM1201_B9090.pricePerNight := 210.00
!RM1201_B9090.occupied := false
!RM1201_B9090.blocked := false

!new Room('RM1202_B9090')
!RM1202_B9090.roomNumber := 1202
!RM1202_B9090.numBeds := 1
!RM1202_B9090.pricePerNight := 95.00
!RM1202_B9090.occupied := false
!RM1202_B9090.blocked := false

!new RoomExtra('RX1_B9090')
!RX1_B9090.description := 'Parking (overnight)'
!RX1_B9090.price := 18.00

!new RoomExtra('RX2_B9090')
!RX2_B9090.description := 'Minibar snacks'
!RX2_B9090.price := 14.50

!new Bill('BL6001')
!BL6001.billId := 6001
!BL6001.price := 305.00

!new Bill('BL6002')
!BL6002.billId := 6002
!BL6002.price := 32.50

!new FreeRoomTypesDTO('D47')
!D47.roomTypeDescription := 'Executive single'
!D47.numBeds := 1
!D47.pricePerNight := 210.00
!D47.numFreeRooms := 4

!new FreeRoomTypesDTO('D48')
!D48.roomTypeDescription := 'Small auxiliary room (day-use capable)'
!D48.numBeds := 1
!D48.pricePerNight := 95.00
!D48.numFreeRooms := 2

!insert (B9090, C26) into BookingCustomer

!insert (B9090, R9090_RS) into BookingRoomReservation

!insert (R9090_RS, RM1201_B9090) into RoomReservationRoom
!insert (R9090_RS, RM1202_B9090) into RoomReservationRoom

!insert (R9090_RS, RX1_B9090) into RoomReservationExtras
!insert (R9090_RS, RX2_B9090) into RoomReservationExtras

!insert (B9090, BL6001) into BookingBill
!insert (B9090, BL6002) into BookingBill

!insert (BL6001, R9090_RS) into BillRoomReservation
!insert (BL6002, R9090_RS) into BillRoomReservation
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 10 | 10.00% |
| Invariants Errors (Not included on General) | 0 | 3 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `BillRoomReservation':
  Object `R9090_RS' of class `RoomReservation' is connected to 2 objects of class `Bill'
  at association end `bill' but the multiplicity is specified as `1'.
```

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

## Generation 5 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 380 | 0.00% |
| Multiplicities Errors | 0 | 59 | 0.00% |
| Invariants Errors | 0 | 12 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 10 | 10.00% |
| Invariants Errors (Not included on General) | 0 | 3 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `BillRoomReservation':
  Object `R9090_RS' of class `RoomReservation' is connected to 2 objects of class `Bill'
  at association end `bill' but the multiplicity is specified as `1'.
```

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 5 | 0.00% |
| checkOutDate <= endDate | 0 | 5 | 0.00% |

# Generation 6
## Category baseline
```
!new Customer('C27')
!C27.firstName := 'Olivia'
!C27.lastName := 'Ndiaye'

!new Booking('B7120')
!B7120.bookingId := 7120
!B7120.startDate := '2026-11-20'
!B7120.endDate := '2026-11-22'
!B7120.confirmed := false
!B7120.canceled := false

!new RoomReservation('RR12_B7120')
!RR12_B7120.checkInDate := '2026-11-20'
!RR12_B7120.checkOutDate := '2026-11-22'

!new RoomReservation('RR13_B7120')
!RR13_B7120.checkInDate := '2026-11-21'
!RR13_B7120.checkOutDate := '2026-11-22'

!new Room('R601_B7120')
!R601_B7120.roomNumber := 601
!R601_B7120.numBeds := 2
!R601_B7120.pricePerNight := 145.00
!R601_B7120.occupied := false
!R601_B7120.blocked := false

!new Room('R602_B7120')
!R602_B7120.roomNumber := 602
!R602_B7120.numBeds := 2
!R602_B7120.pricePerNight := 145.00
!R602_B7120.occupied := false
!R602_B7120.blocked := false

!new Room('R603_B7120')
!R603_B7120.roomNumber := 603
!R603_B7120.numBeds := 3
!R603_B7120.pricePerNight := 175.00
!R603_B7120.occupied := false
!R603_B7120.blocked := false

!new Room('R150_B7120')
!R150_B7120.roomNumber := 150
!R150_B7120.numBeds := 1
!R150_B7120.pricePerNight := 90.00
!R150_B7120.occupied := true
!R150_B7120.blocked := false

!new RoomExtra('E16_B7120')
!E16_B7120.description := 'Projector rental (2 days)'
!E16_B7120.price := 40.00

!new RoomExtra('E17_B7120')
!E17_B7120.description := 'Coffee/tea station (meeting corner)'
!E17_B7120.price := 25.00

!new RoomExtra('E18_B7120')
!E18_B7120.description := 'Extra towels set (per room)'
!E18_B7120.price := 15.00

!new RoomExtra('E19_B7120')
!E19_B7120.description := 'Complimentary city map + transit tips'
!E19_B7120.price := 0.00

!new Bill('BL16010')
!BL16010.billId := 16010
!BL16010.price := 845.00

!new Bill('BL16011')
!BL16011.billId := 16011
!BL16011.price := 90.00

!new FreeRoomTypesDTO('D49')
!D49.roomTypeDescription := 'Habitación Doble (desayuno no incluido)'
!D49.numBeds := 2
!D49.pricePerNight := 145.00
!D49.numFreeRooms := 8

!new FreeRoomTypesDTO('D50')
!D50.roomTypeDescription := 'غرفة مفردة اقتصادية (قريبة من المصعد)'
!D50.numBeds := 1
!D50.pricePerNight := 90.00
!D50.numFreeRooms := 0

!new FreeRoomTypesDTO('D51')
!D51.roomTypeDescription := 'Triple Room (quiet corridor)'
!D51.numBeds := 3
!D51.pricePerNight := 175.00
!D51.numFreeRooms := 2

!insert (B7120, C27) into BookingCustomer

!insert (B7120, RR12_B7120) into BookingRoomReservation
!insert (B7120, RR13_B7120) into BookingRoomReservation

!insert (RR12_B7120, R601_B7120) into RoomReservationRoom
!insert (RR12_B7120, R602_B7120) into RoomReservationRoom
!insert (RR12_B7120, R603_B7120) into RoomReservationRoom
!insert (RR13_B7120, R150_B7120) into RoomReservationRoom

!insert (RR12_B7120, E16_B7120) into RoomReservationExtras
!insert (RR12_B7120, E17_B7120) into RoomReservationExtras
!insert (RR12_B7120, E18_B7120) into RoomReservationExtras
!insert (RR12_B7120, E19_B7120) into RoomReservationExtras

!insert (B7120, BL16010) into BookingBill
!insert (B7120, BL16011) into BookingBill

!insert (BL16010, RR12_B7120) into BillRoomReservation
!insert (BL16011, RR13_B7120) into BillRoomReservation
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 87 | 0.00% |
| Multiplicities Errors | 0 | 15 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

## Category boundary
```
!new FreeRoomTypesDTO('D65')
!D65.roomTypeDescription := 'Twin room (basic, no view)'
!D65.numBeds := 2
!D65.pricePerNight := 0.01
!D65.numFreeRooms := 1000000

!new Customer('C39')
!C39.firstName := 'Μαρία'
!C39.lastName := 'Παπαδοπούλου'

!new Booking('B10_BIGROOMS')
!B10_BIGROOMS.startDate := '2026-09-09'
!B10_BIGROOMS.endDate := '2026-09-10'
!B10_BIGROOMS.canceled := false
!B10_BIGROOMS.bookingId := 8
!B10_BIGROOMS.confirmed := true

!new RoomReservation('R16_BIGROOMS')
!R16_BIGROOMS.checkInDate := '2026-09-09'
!R16_BIGROOMS.checkOutDate := '2026-09-10'

!new Room('RM_MIN_R16')
!RM_MIN_R16.numBeds := 2
!RM_MIN_R16.pricePerNight := 0.01
!RM_MIN_R16.occupied := false
!RM_MIN_R16.blocked := false
!RM_MIN_R16.roomNumber := -2147483647

!new Room('RM601_R16')
!RM601_R16.numBeds := 2
!RM601_R16.pricePerNight := 0.01
!RM601_R16.occupied := true
!RM601_R16.blocked := false
!RM601_R16.roomNumber := 601

!new Room('RM602_R16')
!RM602_R16.numBeds := 2
!RM602_R16.pricePerNight := 0.01
!RM602_R16.occupied := true
!RM602_R16.blocked := false
!RM602_R16.roomNumber := 602

!new Room('RM603_R16')
!RM603_R16.numBeds := 2
!RM603_R16.pricePerNight := 0.01
!RM603_R16.occupied := false
!RM603_R16.blocked := false
!RM603_R16.roomNumber := 603

!new Room('RM604_R16')
!RM604_R16.numBeds := 2
!RM604_R16.pricePerNight := 0.01
!RM604_R16.occupied := false
!RM604_R16.blocked := true
!RM604_R16.roomNumber := 604

!new Room('RM605_R16')
!RM605_R16.numBeds := 2
!RM605_R16.pricePerNight := 0.01
!RM605_R16.occupied := true
!RM605_R16.blocked := false
!RM605_R16.roomNumber := 605

!new Room('RM606_R16')
!RM606_R16.numBeds := 2
!RM606_R16.pricePerNight := 0.01
!RM606_R16.occupied := false
!RM606_R16.blocked := false
!RM606_R16.roomNumber := 606

!new Room('RM607_R16')
!RM607_R16.numBeds := 2
!RM607_R16.pricePerNight := 0.01
!RM607_R16.occupied := false
!RM607_R16.blocked := true
!RM607_R16.roomNumber := 607

!new Room('RM608_R16')
!RM608_R16.numBeds := 2
!RM608_R16.pricePerNight := 0.01
!RM608_R16.occupied := true
!RM608_R16.blocked := false
!RM608_R16.roomNumber := 608

!new Room('RM609_R16')
!RM609_R16.numBeds := 2
!RM609_R16.pricePerNight := 0.01
!RM609_R16.occupied := false
!RM609_R16.blocked := false
!RM609_R16.roomNumber := 609

!new Room('RM610_R16')
!RM610_R16.numBeds := 2
!RM610_R16.pricePerNight := 0.01
!RM610_R16.occupied := true
!RM610_R16.blocked := false
!RM610_R16.roomNumber := 610

!new Room('RM611_R16')
!RM611_R16.numBeds := 2
!RM611_R16.pricePerNight := 0.01
!RM611_R16.occupied := false
!RM611_R16.blocked := false
!RM611_R16.roomNumber := 611

!new Bill('BL16_B10')
!BL16_B10.price := 0.12
!BL16_B10.billId := 60010

!new Customer('C40')
!C40.firstName := 'Wanjiku'
!C40.lastName := 'Mwangi'

!new Booking('B11_CONF_EMPTY')
!B11_CONF_EMPTY.startDate := '2026-05-05'
!B11_CONF_EMPTY.endDate := '2026-05-05'
!B11_CONF_EMPTY.canceled := false
!B11_CONF_EMPTY.bookingId := 9
!B11_CONF_EMPTY.confirmed := true

!insert (B10_BIGROOMS, C39) into BookingCustomer
!insert (B11_CONF_EMPTY, C40) into BookingCustomer

!insert (B10_BIGROOMS, R16_BIGROOMS) into BookingRoomReservation

!insert (R16_BIGROOMS, RM_MIN_R16) into RoomReservationRoom
!insert (R16_BIGROOMS, RM601_R16) into RoomReservationRoom
!insert (R16_BIGROOMS, RM602_R16) into RoomReservationRoom
!insert (R16_BIGROOMS, RM603_R16) into RoomReservationRoom
!insert (R16_BIGROOMS, RM604_R16) into RoomReservationRoom
!insert (R16_BIGROOMS, RM605_R16) into RoomReservationRoom
!insert (R16_BIGROOMS, RM606_R16) into RoomReservationRoom
!insert (R16_BIGROOMS, RM607_R16) into RoomReservationRoom
!insert (R16_BIGROOMS, RM608_R16) into RoomReservationRoom
!insert (R16_BIGROOMS, RM609_R16) into RoomReservationRoom
!insert (R16_BIGROOMS, RM610_R16) into RoomReservationRoom
!insert (R16_BIGROOMS, RM611_R16) into RoomReservationRoom

!insert (B10_BIGROOMS, BL16_B10) into BookingBill
!insert (BL16_B10, R16_BIGROOMS) into BillRoomReservation
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 118 | 0.00% |
| Multiplicities Errors | 0 | 17 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

## Category complex
```
!new Customer('C35')
!C35.firstName := 'Lena'
!C35.lastName := 'Schmidt'

!new Booking('B77110')
!B77110.bookingId := 77110
!B77110.startDate := '2026-09-05'
!B77110.endDate := '2026-09-08'
!B77110.confirmed := true
!B77110.canceled := false

!new RoomReservation('RR_L1')
!RR_L1.checkInDate := '2026-09-05'
!RR_L1.checkOutDate := '2026-09-08'

!new Room('R901_L1')
!R901_L1.roomNumber := 901
!R901_L1.numBeds := 1
!R901_L1.pricePerNight := 155.00
!R901_L1.occupied := false
!R901_L1.blocked := false

!new Room('R902_L1')
!R902_L1.roomNumber := 902
!R902_L1.numBeds := 1
!R902_L1.pricePerNight := 155.00
!R902_L1.occupied := false
!R902_L1.blocked := false

!new Room('R903_L1')
!R903_L1.roomNumber := 903
!R903_L1.numBeds := 1
!R903_L1.pricePerNight := 155.00
!R903_L1.occupied := false
!R903_L1.blocked := false

!new Bill('BL1200450')
!BL1200450.billId := 1200450
!BL1200450.price := 1395.00

!new Customer('C36')
!C36.firstName := 'João'
!C36.lastName := 'Pereira'

!new Booking('B77111')
!B77111.bookingId := 77111
!B77111.startDate := '2026-09-07'
!B77111.endDate := '2026-09-12'
!B77111.confirmed := false
!B77111.canceled := true

!new RoomReservation('RR_J1')
!RR_J1.checkInDate := '2026-09-07'
!RR_J1.checkOutDate := '2026-09-10'

!new Room('R120_J1')
!R120_J1.roomNumber := 120
!R120_J1.numBeds := 2
!R120_J1.pricePerNight := 98.00
!R120_J1.occupied := false
!R120_J1.blocked := false

!new RoomExtra('J1_1')
!J1_1.description := 'Bicycle rental (3 days)'
!J1_1.price := 45.00

!new RoomExtra('J1_2')
!J1_2.description := 'Pet deep-clean fee (small dog)'
!J1_2.price := 30.00

!new Bill('BL1200451')
!BL1200451.billId := 1200451
!BL1200451.price := 369.00

!new RoomReservation('RR_J2')
!RR_J2.checkInDate := '2026-09-10'
!RR_J2.checkOutDate := '2026-09-12'

!new Room('R121_J2')
!R121_J2.roomNumber := 121
!R121_J2.numBeds := 2
!R121_J2.pricePerNight := 98.00
!R121_J2.occupied := false
!R121_J2.blocked := true

!new RoomExtra('J2_1')
!J2_1.description := 'Cancellation/relocation waiver (documented service disruption)'
!J2_1.price := 0.00

!new Bill('BL1200452')
!BL1200452.billId := 1200452
!BL1200452.price := 0.00

!new FreeRoomTypesDTO('D61')
!D61.roomTypeDescription := 'Einzelzimmer (ruhige Lage) — Innenhof'
!D61.numBeds := 1
!D61.pricePerNight := 120.00
!D61.numFreeRooms := 5

!new FreeRoomTypesDTO('D62')
!D62.roomTypeDescription := 'Quarto duplo — perto da praia'
!D62.numBeds := 2
!D62.pricePerNight := 150.00
!D62.numFreeRooms := 2

!new FreeRoomTypesDTO('D63')
!D63.roomTypeDescription := 'غرفة عائلية (Family room) — إطلالة مدينة'
!D63.numBeds := 3
!D63.pricePerNight := 220.00
!D63.numFreeRooms := 1

!insert (B77110, C35) into BookingCustomer
!insert (B77111, C36) into BookingCustomer

!insert (B77110, RR_L1) into BookingRoomReservation
!insert (B77111, RR_J1) into BookingRoomReservation
!insert (B77111, RR_J2) into BookingRoomReservation

!insert (RR_L1, R901_L1) into RoomReservationRoom
!insert (RR_L1, R902_L1) into RoomReservationRoom
!insert (RR_L1, R903_L1) into RoomReservationRoom

!insert (RR_J1, R120_J1) into RoomReservationRoom
!insert (RR_J2, R121_J2) into RoomReservationRoom

!insert (RR_J1, J1_1) into RoomReservationExtras
!insert (RR_J1, J1_2) into RoomReservationExtras
!insert (RR_J2, J2_1) into RoomReservationExtras

!insert (B77110, BL1200450) into BookingBill
!insert (B77111, BL1200451) into BookingBill
!insert (B77111, BL1200452) into BookingBill

!insert (BL1200450, RR_L1) into BillRoomReservation
!insert (BL1200451, RR_J1) into BillRoomReservation
!insert (BL1200452, RR_J2) into BillRoomReservation
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 109 | 0.00% |
| Multiplicities Errors | 0 | 19 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 2 | 0.00% |
| checkOutDate <= endDate | 0 | 2 | 0.00% |

## Category edge
```
!new Customer('C34')
!C34.firstName := 'Örn'
!C34.lastName := 'Þórðardóttir'

!new Booking('B1_DUP')
!B1_DUP.bookingId := 1
!B1_DUP.startDate := '   2026-12-31   '
!B1_DUP.endDate := '2026-01-01'
!B1_DUP.confirmed := true
!B1_DUP.canceled := false

!new RoomReservation('RR_DUP_101')
!RR_DUP_101.checkInDate := 'N/A'
!RR_DUP_101.checkOutDate := 'N/A'

!new Room('R101A_DUP')
!R101A_DUP.roomNumber := 101
!R101A_DUP.numBeds := 1
!R101A_DUP.pricePerNight := 0.0
!R101A_DUP.occupied := true
!R101A_DUP.blocked := false

!new Room('R101B_DUP')
!R101B_DUP.roomNumber := 101
!R101B_DUP.numBeds := 2
!R101B_DUP.pricePerNight := 0.0
!R101B_DUP.occupied := false
!R101B_DUP.blocked := true

!new RoomExtra('D1_DUP')
!D1_DUP.description := 'Duplicate-room-number handling fee'
!D1_DUP.price := 10.0

!new RoomExtra('D2_DUP')
!D2_DUP.description := 'Manual discount (rounding)'
!D2_DUP.price := -0.01

!new RoomExtra('D3_DUP')
!D3_DUP.description := 'Cultural event ticket precharge'
!D3_DUP.price := 250.0

!new RoomExtra('D4_DUP')
!D4_DUP.description := 'Chargeback reversal placeholder'
!D4_DUP.price := -260.0

!new RoomExtra('D5_DUP')
!D5_DUP.description := 'Local tax record-only line'
!D5_DUP.price := 0.0

!new Bill('BL1_MIN')
!BL1_MIN.billId := 1
!BL1_MIN.price := 0.0

!new FreeRoomTypesDTO('D60')
!D60.roomTypeDescription := 'Aurora-view lounge pod (no privacy curtain)'
!D60.numBeds := 1
!D60.pricePerNight := 0.0
!D60.numFreeRooms := -1

!insert (B1_DUP, C34) into BookingCustomer

!insert (B1_DUP, RR_DUP_101) into BookingRoomReservation

!insert (RR_DUP_101, R101A_DUP) into RoomReservationRoom
!insert (RR_DUP_101, R101B_DUP) into RoomReservationRoom

!insert (RR_DUP_101, D1_DUP) into RoomReservationExtras
!insert (RR_DUP_101, D2_DUP) into RoomReservationExtras
!insert (RR_DUP_101, D3_DUP) into RoomReservationExtras
!insert (RR_DUP_101, D4_DUP) into RoomReservationExtras
!insert (RR_DUP_101, D5_DUP) into RoomReservationExtras

!insert (B1_DUP, BL1_MIN) into BookingBill

!insert (BL1_MIN, RR_DUP_101) into BillRoomReservation
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 58 | 0.00% |
| Multiplicities Errors | 0 | 11 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 0 | 0.00% |
| checkOutDate <= endDate | 0 | 0 | 0.00% |

## Category invalid
```
!new Customer('C29')
!C29.firstName := 'Hine'
!C29.lastName := 'Rangi'

!new Booking('B6100')
!B6100.bookingId := 6100
!B6100.startDate := '2026-07-05'
!B6100.endDate := '2026-07-07'
!B6100.confirmed := true
!B6100.canceled := false

!new RoomReservation('R6101')
!R6101.checkInDate := '2026-07-05'
!R6101.checkOutDate := '2026-07-07'

!new Room('RM990')
!RM990.roomNumber := 990
!RM990.numBeds := 0
!RM990.pricePerNight := 45.00
!RM990.occupied := false
!RM990.blocked := false

!new RoomExtra('E6101_R6101')
!E6101_R6101.description := 'Electric hookup (16A)'
!E6101_R6101.price := 8.00

!new RoomExtra('E6102_R6101')
!E6102_R6101.description := 'Shower tokens (2)'
!E6102_R6101.price := 6.00

!new Bill('BL6101')
!BL6101.billId := 6101
!BL6101.price := 104.00

!new FreeRoomTypesDTO('D54')
!D54.roomTypeDescription := 'Campervan pitch with power (outdoor)'
!D54.numBeds := 0
!D54.pricePerNight := 45.00
!D54.numFreeRooms := 7

!new FreeRoomTypesDTO('D55')
!D55.roomTypeDescription := 'Standard double room'
!D55.numBeds := 2
!D55.pricePerNight := 165.00
!D55.numFreeRooms := 1

!insert (B6100, C29) into BookingCustomer

!insert (B6100, R6101) into BookingRoomReservation

!insert (R6101, RM990) into RoomReservationRoom

!insert (R6101, E6101_R6101) into RoomReservationExtras
!insert (R6101, E6102_R6101) into RoomReservationExtras

!insert (B6100, BL6101) into BookingBill

!insert (BL6101, R6101) into BillRoomReservation
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 7 | 0.00% |
| Invariants Errors (Not included on General) | 1 | 3 | 33.33% |

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (3) `Room::positiveNumBeds': FAILED.
```

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 1 | 0.00% |
| checkOutDate <= endDate | 0 | 1 | 0.00% |

## Generation 6 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 416 | 0.00% |
| Multiplicities Errors | 0 | 62 | 0.00% |
| Invariants Errors | 0 | 12 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 7 | 0.00% |
| Invariants Errors (Not included on General) | 1 | 3 | 33.33% |

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (3) `Room::positiveNumBeds': FAILED.
```

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 5 | 0.00% |
| checkOutDate <= endDate | 0 | 5 | 0.00% |

# Summary for all generations
| Summary | Value | 
|---|---| 
| Model | GPT_5_2 | 
| Type | CoT | 
| System | hotelmanagement | 
| Number of generations | 6 | 

| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 2464 | 0.00% |
| Multiplicities Errors | 0 | 397 | 0.00% |
| Invariants Errors | 0 | 72 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 5 | 58 | 8.62% |
| Invariants Errors (Not included on General) | 3 | 18 | 16.67% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `BookingCustomer':
  Object `C2' of class `Customer' is connected to 2 objects of class `Booking'
  at association end `booking' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `RoomReservationRoom':
  Object `RM305' of class `Room' is connected to 0 objects of class `RoomReservation'
  at association end `roomReservation' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `RoomReservationRoom':
  Object `RM402' of class `Room' is connected to 2 objects of class `RoomReservation'
  at association end `roomReservation' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `BillRoomReservation':
  Object `BL1200' of class `Bill' is connected to 2 objects of class `RoomReservation'
  at association end `roomReservation' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `BillRoomReservation':
  Object `R9090_RS' of class `RoomReservation' is connected to 2 objects of class `Bill'
  at association end `bill' but the multiplicity is specified as `1'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (2) `Bill::uniqueBillId': FAILED.
```
```
checking invariant (1) `Bill::positiveBill': FAILED.
```
```
checking invariant (3) `Room::positiveNumBeds': FAILED.
```

| HotelManagement | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| checkInDate >= startDate | 0 | 32 | 0.00% |
| checkOutDate <= endDate | 1 | 32 | 3.13% |

| Invalid checkOutDate <= endDate | 
|---| 
```
2026-03-11 !<= 2026-03-05
```

