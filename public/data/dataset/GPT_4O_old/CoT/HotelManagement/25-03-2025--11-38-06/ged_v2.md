# Adjacency, edges, and labels

```text
Adj-gen1/baseline.soil: [[0, 1, 1, 0, 0, 0, 1, 0], [1, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 1, 1, 1, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen1/baseline.soil: {0: 'Booking', 1: 'Customer', 2: 'RoomReservation', 3: 'Room', 4: 'RoomExtra', 5: 'RoomExtra', 6: 'Bill', 7: 'FreeRoomTypesDTO'}

Edges-gen1/baseline.soil: [(0, 1, 'BookingCustomer'), (0, 6, 'BookingBill'), (0, 2, 'BookingRoomReservation'), (2, 3, 'RoomReservationRoom'), (2, 4, 'RoomReservationExtras'), (2, 5, 'RoomReservationExtras'), (6, 2, 'BillRoomReservation')]

Adj-gen1/boundary.soil: [[0, 1, 1, 1, 1, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 1, 1, 1, 1, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen1/boundary.soil: {0: 'Booking', 1: 'Customer', 2: 'Bill', 3: 'Bill', 4: 'RoomReservation', 5: 'Room', 6: 'Room', 7: 'RoomExtra', 8: 'RoomExtra', 9: 'FreeRoomTypesDTO'}

Edges-gen1/boundary.soil: [(0, 1, 'BookingCustomer'), (0, 4, 'BookingRoomReservation'), (0, 2, 'BookingBill'), (0, 3, 'BookingBill'), (4, 5, 'RoomReservationRoom'), (4, 6, 'RoomReservationRoom'), (4, 7, 'RoomReservationExtras'), (4, 8, 'RoomReservationExtras'), (2, 4, 'BillRoomReservation')]

Adj-gen1/complex.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen1/complex.soil: {0: 'Booking', 1: 'Customer', 2: 'RoomReservation', 3: 'RoomReservation', 4: 'Room', 5: 'Room', 6: 'Room', 7: 'RoomExtra', 8: 'RoomExtra', 9: 'RoomExtra', 10: 'Bill', 11: 'Bill', 12: 'FreeRoomTypesDTO', 13: 'FreeRoomTypesDTO'}

Edges-gen1/complex.soil: [(0, 1, 'BookingCustomer'), (0, 2, 'BookingRoomReservation'), (0, 3, 'BookingRoomReservation'), (0, 10, 'BookingBill'), (0, 11, 'BookingBill'), (2, 4, 'RoomReservationRoom'), (2, 5, 'RoomReservationRoom'), (2, 7, 'RoomReservationExtras'), (2, 8, 'RoomReservationExtras'), (10, 2, 'BillRoomReservation'), (3, 6, 'RoomReservationRoom'), (3, 9, 'RoomReservationExtras'), (11, 3, 'BillRoomReservation')]

Adj-gen1/edge.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0], [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0], [0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0], [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen1/edge.soil: {0: 'Customer', 1: 'Booking', 2: 'RoomReservation', 3: 'RoomReservation', 4: 'RoomReservation', 5: 'Room', 6: 'Room', 7: 'Room', 8: 'RoomExtra', 9: 'RoomExtra', 10: 'RoomExtra', 11: 'Bill', 12: 'Bill', 13: 'Bill', 14: 'FreeRoomTypesDTO'}

Edges-gen1/edge.soil: [(1, 0, 'BookingCustomer'), (1, 2, 'BookingRoomReservation'), (1, 3, 'BookingRoomReservation'), (1, 4, 'BookingRoomReservation'), (2, 5, 'RoomReservationRoom'), (3, 6, 'RoomReservationRoom'), (4, 7, 'RoomReservationRoom'), (2, 8, 'RoomReservationExtras'), (3, 9, 'RoomReservationExtras'), (4, 10, 'RoomReservationExtras'), (11, 2, 'BillRoomReservation'), (12, 3, 'BillRoomReservation'), (13, 4, 'BillRoomReservation'), (1, 11, 'BookingBill'), (1, 12, 'BookingBill'), (1, 13, 'BookingBill')]

Adj-gen1/invalid.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 0, 0, 1], [0, 1, 0, 1, 1, 1, 1, 1, 1], [0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0]]

Labels-gen1/invalid.soil: {0: 'Customer', 1: 'Booking', 2: 'RoomReservation', 3: 'Room', 4: 'Room', 5: 'Room', 6: 'RoomExtra', 7: 'RoomExtra', 8: 'Bill'}

Edges-gen1/invalid.soil: [(1, 0, 'BookingCustomer'), (1, 2, 'BookingRoomReservation'), (1, 8, 'BookingBill'), (2, 3, 'RoomReservationRoom'), (2, 4, 'RoomReservationRoom'), (2, 5, 'RoomReservationRoom'), (2, 6, 'RoomReservationExtras'), (2, 7, 'RoomReservationExtras'), (8, 2, 'BillRoomReservation')]

Adj-gen2/baseline.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0], [0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0], [0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen2/baseline.soil: {0: 'Customer', 1: 'Booking', 2: 'RoomReservation', 3: 'RoomReservation', 4: 'Room', 5: 'Room', 6: 'RoomExtra', 7: 'Bill', 8: 'FreeRoomTypesDTO', 9: 'RoomExtra', 10: 'Bill'}

Edges-gen2/baseline.soil: [(1, 0, 'BookingCustomer'), (1, 2, 'BookingRoomReservation'), (1, 3, 'BookingRoomReservation'), (1, 7, 'BookingBill'), (2, 4, 'RoomReservationRoom'), (3, 5, 'RoomReservationRoom'), (2, 6, 'RoomReservationExtras'), (3, 9, 'RoomReservationExtras'), (7, 2, 'BillRoomReservation'), (10, 3, 'BillRoomReservation')]

Adj-gen2/boundary.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1], [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1], [0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0]]

Labels-gen2/boundary.soil: {0: 'Customer', 1: 'Booking', 2: 'Bill', 3: 'Bill', 4: 'RoomReservation', 5: 'Room', 6: 'Room', 7: 'RoomExtra', 8: 'RoomExtra', 9: 'FreeRoomTypesDTO', 10: 'RoomReservation'}

Edges-gen2/boundary.soil: [(1, 0, 'BookingCustomer'), (1, 4, 'BookingRoomReservation'), (1, 2, 'BookingBill'), (1, 3, 'BookingBill'), (4, 5, 'RoomReservationRoom'), (4, 6, 'RoomReservationRoom'), (4, 7, 'RoomReservationExtras'), (4, 8, 'RoomReservationExtras'), (2, 4, 'BillRoomReservation'), (1, 10, 'BookingRoomReservation'), (10, 5, 'RoomReservationRoom'), (10, 6, 'RoomReservationRoom'), (10, 7, 'RoomReservationExtras'), (10, 8, 'RoomReservationExtras'), (3, 10, 'BillRoomReservation')]

Adj-gen2/complex.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0], [0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen2/complex.soil: {0: 'Customer', 1: 'Booking', 2: 'RoomReservation', 3: 'RoomReservation', 4: 'Room', 5: 'Room', 6: 'RoomExtra', 7: 'RoomExtra', 8: 'RoomExtra', 9: 'RoomExtra', 10: 'Bill', 11: 'Bill', 12: 'FreeRoomTypesDTO', 13: 'FreeRoomTypesDTO'}

Edges-gen2/complex.soil: [(1, 0, 'BookingCustomer'), (1, 2, 'BookingRoomReservation'), (1, 3, 'BookingRoomReservation'), (2, 4, 'RoomReservationRoom'), (3, 5, 'RoomReservationRoom'), (2, 6, 'RoomReservationExtras'), (2, 7, 'RoomReservationExtras'), (3, 8, 'RoomReservationExtras'), (3, 9, 'RoomReservationExtras'), (10, 2, 'BillRoomReservation'), (11, 3, 'BillRoomReservation'), (1, 10, 'BookingBill'), (1, 11, 'BookingBill')]

Adj-gen2/edge.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0], [0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen2/edge.soil: {0: 'Customer', 1: 'Booking', 2: 'RoomReservation', 3: 'RoomReservation', 4: 'Room', 5: 'Room', 6: 'RoomExtra', 7: 'RoomExtra', 8: 'Bill', 9: 'Bill', 10: 'FreeRoomTypesDTO'}

Edges-gen2/edge.soil: [(1, 0, 'BookingCustomer'), (1, 2, 'BookingRoomReservation'), (1, 3, 'BookingRoomReservation'), (2, 4, 'RoomReservationRoom'), (3, 5, 'RoomReservationRoom'), (2, 6, 'RoomReservationExtras'), (3, 7, 'RoomReservationExtras'), (8, 2, 'BillRoomReservation'), (9, 3, 'BillRoomReservation'), (1, 8, 'BookingBill'), (1, 9, 'BookingBill')]

Adj-gen2/invalid.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 1, 1, 1, 1], [0, 1, 0, 1, 1, 1, 1, 1, 1, 1], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen2/invalid.soil: {0: 'Customer', 1: 'Booking', 2: 'RoomReservation', 3: 'Room', 4: 'RoomExtra', 5: 'RoomExtra', 6: 'Bill', 7: 'Bill', 8: 'Bill', 9: 'Bill'}

Edges-gen2/invalid.soil: [(1, 0, 'BookingCustomer'), (1, 2, 'BookingRoomReservation'), (2, 3, 'RoomReservationRoom'), (2, 4, 'RoomReservationExtras'), (2, 5, 'RoomReservationExtras'), (6, 2, 'BillRoomReservation'), (7, 2, 'BillRoomReservation'), (8, 2, 'BillRoomReservation'), (9, 2, 'BillRoomReservation'), (1, 6, 'BookingBill'), (1, 7, 'BookingBill'), (1, 8, 'BookingBill'), (1, 9, 'BookingBill')]

Adj-gen3/baseline.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0], [0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen3/baseline.soil: {0: 'Customer', 1: 'Booking', 2: 'RoomReservation', 3: 'RoomReservation', 4: 'Room', 5: 'Room', 6: 'RoomExtra', 7: 'RoomExtra', 8: 'Bill', 9: 'Bill', 10: 'FreeRoomTypesDTO'}

Edges-gen3/baseline.soil: [(1, 0, 'BookingCustomer'), (1, 2, 'BookingRoomReservation'), (1, 3, 'BookingRoomReservation'), (1, 8, 'BookingBill'), (1, 9, 'BookingBill'), (2, 4, 'RoomReservationRoom'), (3, 5, 'RoomReservationRoom'), (2, 6, 'RoomReservationExtras'), (3, 7, 'RoomReservationExtras'), (8, 2, 'BillRoomReservation'), (9, 3, 'BillRoomReservation')]

Adj-gen3/boundary.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 1, 1, 1, 1, 1, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen3/boundary.soil: {0: 'Customer', 1: 'Booking', 2: 'Bill', 3: 'RoomReservation', 4: 'Room', 5: 'Room', 6: 'RoomExtra', 7: 'RoomExtra', 8: 'RoomExtra', 9: 'FreeRoomTypesDTO'}

Edges-gen3/boundary.soil: [(1, 0, 'BookingCustomer'), (1, 3, 'BookingRoomReservation'), (1, 2, 'BookingBill'), (3, 4, 'RoomReservationRoom'), (3, 5, 'RoomReservationRoom'), (3, 6, 'RoomReservationExtras'), (3, 7, 'RoomReservationExtras'), (3, 8, 'RoomReservationExtras'), (2, 3, 'BillRoomReservation')]

Adj-gen3/complex.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0], [0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen3/complex.soil: {0: 'Customer', 1: 'Booking', 2: 'RoomReservation', 3: 'RoomReservation', 4: 'Room', 5: 'Room', 6: 'RoomExtra', 7: 'RoomExtra', 8: 'RoomExtra', 9: 'RoomExtra', 10: 'Bill', 11: 'Bill', 12: 'FreeRoomTypesDTO', 13: 'FreeRoomTypesDTO'}

Edges-gen3/complex.soil: [(1, 0, 'BookingCustomer'), (1, 2, 'BookingRoomReservation'), (1, 3, 'BookingRoomReservation'), (2, 4, 'RoomReservationRoom'), (3, 5, 'RoomReservationRoom'), (2, 6, 'RoomReservationExtras'), (2, 7, 'RoomReservationExtras'), (3, 8, 'RoomReservationExtras'), (3, 9, 'RoomReservationExtras'), (10, 2, 'BillRoomReservation'), (11, 3, 'BillRoomReservation'), (1, 10, 'BookingBill'), (1, 11, 'BookingBill')]

Adj-gen3/edge.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0], [0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen3/edge.soil: {0: 'Customer', 1: 'Booking', 2: 'RoomReservation', 3: 'RoomReservation', 4: 'Room', 5: 'Room', 6: 'RoomExtra', 7: 'RoomExtra', 8: 'Bill', 9: 'Bill', 10: 'FreeRoomTypesDTO'}

Edges-gen3/edge.soil: [(1, 0, 'BookingCustomer'), (1, 2, 'BookingRoomReservation'), (1, 3, 'BookingRoomReservation'), (2, 4, 'RoomReservationRoom'), (3, 5, 'RoomReservationRoom'), (2, 6, 'RoomReservationExtras'), (3, 7, 'RoomReservationExtras'), (8, 2, 'BillRoomReservation'), (9, 3, 'BillRoomReservation'), (1, 8, 'BookingBill'), (1, 9, 'BookingBill')]

Adj-gen3/invalid.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 1, 1, 1], [0, 1, 0, 1, 1, 1, 1, 1, 1], [0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0]]

Labels-gen3/invalid.soil: {0: 'Customer', 1: 'Booking', 2: 'RoomReservation', 3: 'Room', 4: 'RoomExtra', 5: 'RoomExtra', 6: 'Bill', 7: 'Bill', 8: 'Bill'}

Edges-gen3/invalid.soil: [(1, 0, 'BookingCustomer'), (1, 2, 'BookingRoomReservation'), (2, 3, 'RoomReservationRoom'), (2, 4, 'RoomReservationExtras'), (2, 5, 'RoomReservationExtras'), (6, 2, 'BillRoomReservation'), (7, 2, 'BillRoomReservation'), (8, 2, 'BillRoomReservation'), (1, 6, 'BookingBill'), (1, 7, 'BookingBill'), (1, 8, 'BookingBill')]

Adj-gen4/baseline.soil: [[0, 1, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 1, 1, 1, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen4/baseline.soil: {0: 'Customer', 1: 'Booking', 2: 'RoomReservation', 3: 'Room', 4: 'Room', 5: 'RoomExtra', 6: 'Bill', 7: 'FreeRoomTypesDTO'}

Edges-gen4/baseline.soil: [(1, 0, 'BookingCustomer'), (1, 2, 'BookingRoomReservation'), (1, 6, 'BookingBill'), (2, 3, 'RoomReservationRoom'), (2, 5, 'RoomReservationExtras'), (6, 2, 'BillRoomReservation'), (2, 4, 'RoomReservationRoom')]

Adj-gen4/boundary.soil: [[0, 1, 0, 0, 0, 0, 0], [1, 0, 1, 1, 0, 0, 0], [0, 1, 0, 1, 0, 0, 0], [0, 1, 1, 0, 1, 1, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]]

Labels-gen4/boundary.soil: {0: 'Customer', 1: 'Booking', 2: 'Bill', 3: 'RoomReservation', 4: 'Room', 5: 'RoomExtra', 6: 'FreeRoomTypesDTO'}

Edges-gen4/boundary.soil: [(1, 0, 'BookingCustomer'), (1, 3, 'BookingRoomReservation'), (1, 2, 'BookingBill'), (3, 4, 'RoomReservationRoom'), (3, 5, 'RoomReservationExtras'), (2, 3, 'BillRoomReservation')]

Adj-gen4/complex.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 0, 1, 0, 0], [0, 1, 0, 1, 1, 1, 1, 1, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen4/complex.soil: {0: 'Customer', 1: 'Booking', 2: 'RoomReservation', 3: 'Room', 4: 'RoomExtra', 5: 'RoomExtra', 6: 'RoomExtra', 7: 'Bill', 8: 'FreeRoomTypesDTO', 9: 'FreeRoomTypesDTO'}

Edges-gen4/complex.soil: [(1, 0, 'BookingCustomer'), (1, 2, 'BookingRoomReservation'), (1, 7, 'BookingBill'), (2, 3, 'RoomReservationRoom'), (2, 4, 'RoomReservationExtras'), (2, 5, 'RoomReservationExtras'), (2, 6, 'RoomReservationExtras'), (7, 2, 'BillRoomReservation')]

Adj-gen4/edge.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0], [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0], [0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0], [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen4/edge.soil: {0: 'Customer', 1: 'Booking', 2: 'RoomReservation', 3: 'RoomReservation', 4: 'RoomReservation', 5: 'Room', 6: 'Room', 7: 'Room', 8: 'RoomExtra', 9: 'RoomExtra', 10: 'RoomExtra', 11: 'Bill', 12: 'Bill', 13: 'Bill', 14: 'FreeRoomTypesDTO'}

Edges-gen4/edge.soil: [(1, 0, 'BookingCustomer'), (1, 2, 'BookingRoomReservation'), (1, 3, 'BookingRoomReservation'), (1, 4, 'BookingRoomReservation'), (2, 5, 'RoomReservationRoom'), (3, 6, 'RoomReservationRoom'), (4, 7, 'RoomReservationRoom'), (2, 8, 'RoomReservationExtras'), (3, 9, 'RoomReservationExtras'), (4, 10, 'RoomReservationExtras'), (11, 2, 'BillRoomReservation'), (12, 3, 'BillRoomReservation'), (13, 4, 'BillRoomReservation'), (1, 11, 'BookingBill'), (1, 12, 'BookingBill'), (1, 13, 'BookingBill')]

Adj-gen4/invalid.soil: [[0, 1, 0, 0, 0, 0, 0, 0], [1, 0, 1, 1, 0, 0, 0, 1], [0, 1, 0, 0, 1, 1, 0, 1], [0, 1, 0, 0, 1, 0, 1, 1], [0, 0, 1, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 1, 0, 0, 0, 0]]

Labels-gen4/invalid.soil: {0: 'Customer', 1: 'Booking', 2: 'RoomReservation', 3: 'RoomReservation', 4: 'Room', 5: 'RoomExtra', 6: 'RoomExtra', 7: 'Bill'}

Edges-gen4/invalid.soil: [(1, 0, 'BookingCustomer'), (1, 2, 'BookingRoomReservation'), (1, 3, 'BookingRoomReservation'), (2, 4, 'RoomReservationRoom'), (3, 4, 'RoomReservationRoom'), (2, 5, 'RoomReservationExtras'), (3, 6, 'RoomReservationExtras'), (7, 2, 'BillRoomReservation'), (7, 3, 'BillRoomReservation'), (1, 7, 'BookingBill')]

Adj-gen5/baseline.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0], [0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen5/baseline.soil: {0: 'Customer', 1: 'Booking', 2: 'RoomReservation', 3: 'RoomReservation', 4: 'Room', 5: 'Room', 6: 'RoomExtra', 7: 'RoomExtra', 8: 'Bill', 9: 'Bill', 10: 'FreeRoomTypesDTO'}

Edges-gen5/baseline.soil: [(1, 0, 'BookingCustomer'), (1, 2, 'BookingRoomReservation'), (1, 3, 'BookingRoomReservation'), (1, 8, 'BookingBill'), (1, 9, 'BookingBill'), (2, 4, 'RoomReservationRoom'), (3, 5, 'RoomReservationRoom'), (2, 6, 'RoomReservationExtras'), (3, 7, 'RoomReservationExtras'), (8, 2, 'BillRoomReservation'), (9, 3, 'BillRoomReservation')]

Adj-gen5/boundary.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0], [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen5/boundary.soil: {0: 'Customer', 1: 'Booking', 2: 'RoomReservation', 3: 'Room', 4: 'Room', 5: 'Room', 6: 'RoomExtra', 7: 'RoomExtra', 8: 'RoomExtra', 9: 'Bill', 10: 'FreeRoomTypesDTO'}

Edges-gen5/boundary.soil: [(1, 0, 'BookingCustomer'), (1, 2, 'BookingRoomReservation'), (1, 9, 'BookingBill'), (2, 3, 'RoomReservationRoom'), (2, 4, 'RoomReservationRoom'), (2, 5, 'RoomReservationRoom'), (2, 6, 'RoomReservationExtras'), (2, 7, 'RoomReservationExtras'), (2, 8, 'RoomReservationExtras'), (9, 2, 'BillRoomReservation')]

Adj-gen5/complex.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0], [0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen5/complex.soil: {0: 'Customer', 1: 'Booking', 2: 'RoomReservation', 3: 'RoomReservation', 4: 'Room', 5: 'Room', 6: 'RoomExtra', 7: 'RoomExtra', 8: 'RoomExtra', 9: 'RoomExtra', 10: 'Bill', 11: 'Bill', 12: 'FreeRoomTypesDTO', 13: 'FreeRoomTypesDTO'}

Edges-gen5/complex.soil: [(1, 0, 'BookingCustomer'), (1, 2, 'BookingRoomReservation'), (1, 3, 'BookingRoomReservation'), (2, 4, 'RoomReservationRoom'), (3, 5, 'RoomReservationRoom'), (2, 6, 'RoomReservationExtras'), (2, 7, 'RoomReservationExtras'), (3, 8, 'RoomReservationExtras'), (3, 9, 'RoomReservationExtras'), (10, 2, 'BillRoomReservation'), (11, 3, 'BillRoomReservation'), (1, 10, 'BookingBill'), (1, 11, 'BookingBill')]

Adj-gen5/edge.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0], [0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen5/edge.soil: {0: 'Customer', 1: 'Booking', 2: 'RoomReservation', 3: 'RoomReservation', 4: 'Room', 5: 'Room', 6: 'Room', 7: 'RoomExtra', 8: 'RoomExtra', 9: 'Bill', 10: 'Bill', 11: 'FreeRoomTypesDTO'}

Edges-gen5/edge.soil: [(1, 0, 'BookingCustomer'), (1, 2, 'BookingRoomReservation'), (1, 3, 'BookingRoomReservation'), (2, 4, 'RoomReservationRoom'), (2, 5, 'RoomReservationRoom'), (3, 6, 'RoomReservationRoom'), (2, 7, 'RoomReservationExtras'), (3, 8, 'RoomReservationExtras'), (9, 2, 'BillRoomReservation'), (10, 3, 'BillRoomReservation'), (1, 9, 'BookingBill'), (1, 10, 'BookingBill')]

Adj-gen5/invalid.soil: [[0, 1, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 1, 1], [0, 1, 0, 1, 1, 1, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0]]

Labels-gen5/invalid.soil: {0: 'Customer', 1: 'Booking', 2: 'RoomReservation', 3: 'Room', 4: 'RoomExtra', 5: 'RoomExtra', 6: 'Bill', 7: 'Bill'}

Edges-gen5/invalid.soil: [(1, 0, 'BookingCustomer'), (1, 2, 'BookingRoomReservation'), (2, 3, 'RoomReservationRoom'), (2, 4, 'RoomReservationExtras'), (2, 5, 'RoomReservationExtras'), (6, 2, 'BillRoomReservation'), (1, 6, 'BookingBill'), (1, 7, 'BookingBill')]

Adj-gen6/baseline.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0], [0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen6/baseline.soil: {0: 'Customer', 1: 'Booking', 2: 'RoomReservation', 3: 'RoomReservation', 4: 'Room', 5: 'Room', 6: 'RoomExtra', 7: 'RoomExtra', 8: 'Bill', 9: 'Bill', 10: 'FreeRoomTypesDTO'}

Edges-gen6/baseline.soil: [(1, 0, 'BookingCustomer'), (1, 2, 'BookingRoomReservation'), (1, 3, 'BookingRoomReservation'), (1, 8, 'BookingBill'), (1, 9, 'BookingBill'), (2, 4, 'RoomReservationRoom'), (3, 5, 'RoomReservationRoom'), (2, 6, 'RoomReservationExtras'), (3, 7, 'RoomReservationExtras'), (8, 2, 'BillRoomReservation'), (9, 3, 'BillRoomReservation')]

Adj-gen6/boundary.soil: [[0, 1, 0, 0, 0, 0], [1, 0, 1, 1, 0, 0], [0, 1, 0, 1, 0, 0], [0, 1, 1, 0, 1, 0], [0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0]]

Labels-gen6/boundary.soil: {0: 'Customer', 1: 'Booking', 2: 'Bill', 3: 'RoomReservation', 4: 'Room', 5: 'FreeRoomTypesDTO'}

Edges-gen6/boundary.soil: [(1, 0, 'BookingCustomer'), (1, 3, 'BookingRoomReservation'), (1, 2, 'BookingBill'), (3, 4, 'RoomReservationRoom'), (2, 3, 'BillRoomReservation')]

Adj-gen6/complex.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 0, 1, 0, 0], [0, 1, 0, 1, 1, 1, 1, 1, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen6/complex.soil: {0: 'Customer', 1: 'Booking', 2: 'RoomReservation', 3: 'Room', 4: 'RoomExtra', 5: 'RoomExtra', 6: 'RoomExtra', 7: 'Bill', 8: 'FreeRoomTypesDTO', 9: 'FreeRoomTypesDTO'}

Edges-gen6/complex.soil: [(1, 0, 'BookingCustomer'), (1, 2, 'BookingRoomReservation'), (1, 7, 'BookingBill'), (2, 3, 'RoomReservationRoom'), (2, 4, 'RoomReservationExtras'), (2, 5, 'RoomReservationExtras'), (2, 6, 'RoomReservationExtras'), (7, 2, 'BillRoomReservation')]

Adj-gen6/edge.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0], [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0], [0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0], [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen6/edge.soil: {0: 'Customer', 1: 'Booking', 2: 'RoomReservation', 3: 'RoomReservation', 4: 'RoomReservation', 5: 'Room', 6: 'Room', 7: 'Room', 8: 'RoomExtra', 9: 'RoomExtra', 10: 'RoomExtra', 11: 'Bill', 12: 'Bill', 13: 'Bill', 14: 'FreeRoomTypesDTO'}

Edges-gen6/edge.soil: [(1, 0, 'BookingCustomer'), (1, 2, 'BookingRoomReservation'), (1, 3, 'BookingRoomReservation'), (1, 4, 'BookingRoomReservation'), (2, 5, 'RoomReservationRoom'), (3, 6, 'RoomReservationRoom'), (4, 7, 'RoomReservationRoom'), (2, 8, 'RoomReservationExtras'), (3, 9, 'RoomReservationExtras'), (4, 10, 'RoomReservationExtras'), (11, 2, 'BillRoomReservation'), (12, 3, 'BillRoomReservation'), (13, 4, 'BillRoomReservation'), (1, 11, 'BookingBill'), (1, 12, 'BookingBill'), (1, 13, 'BookingBill')]

Adj-gen6/invalid.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1], [0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen6/invalid.soil: {0: 'Customer', 1: 'Booking', 2: 'RoomReservation', 3: 'Room', 4: 'RoomExtra', 5: 'RoomExtra', 6: 'RoomExtra', 7: 'RoomExtra', 8: 'RoomExtra', 9: 'Bill', 10: 'Bill'}

Edges-gen6/invalid.soil: [(1, 0, 'BookingCustomer'), (1, 2, 'BookingRoomReservation'), (2, 3, 'RoomReservationRoom'), (2, 4, 'RoomReservationExtras'), (2, 5, 'RoomReservationExtras'), (2, 6, 'RoomReservationExtras'), (9, 2, 'BillRoomReservation'), (1, 9, 'BookingBill'), (1, 10, 'BookingBill')]

```

# GED Matrix

```json
[[0.0, 4.0, 12.0, 18.0, 4.0, 8.0, 11.0, 12.0, 9.0, 9.0, 9.0, 4.0, 12.0, 9.0, 6.0, 2.0, 2.0, 3.0, 18.0, 6.0, 9.0, 6.0, 12.0, 11.0, 2.0, 9.0, 4.0, 3.0, 18.0, 6.0], [4.0, 0.0, 8.0, 16.0, 4.0, 8.0, 7.0, 10.0, 7.0, 7.0, 7.0, 3.0, 10.0, 7.0, 5.0, 4.0, 6.0, 4.0, 16.0, 9.0, 7.0, 5.0, 10.0, 7.0, 3.0, 7.0, 8.0, 4.0, 16.0, 4.0], [12.0, 8.0, 0.0, 9.0, 11.0, 6.0, 9.0, 3.0, 5.0, 14.0, 5.0, 10.0, 3.0, 5.0, 13.0, 12.0, 14.0, 11.0, 9.0, 13.0, 5.0, 10.0, 3.0, 3.0, 11.0, 5.0, 16.0, 11.0, 9.0, 10.0], [18.0, 16.0, 9.0, 0.0, 19.0, 10.0, 13.0, 10.0, 9.0, 18.0, 9.0, 18.0, 10.0, 9.0, 17.0, 18.0, 18.0, 18.0, 0.0, 17.0, 9.0, 18.0, 10.0, 9.0, 17.0, 9.0, 20.0, 18.0, 0.0, 17.0], [4.0, 4.0, 11.0, 19.0, 0.0, 10.0, 11.0, 14.0, 11.0, 9.0, 11.0, 3.0, 14.0, 11.0, 6.0, 4.0, 6.0, 5.0, 19.0, 9.0, 11.0, 3.0, 14.0, 10.0, 5.0, 11.0, 8.0, 5.0, 19.0, 7.0], [8.0, 8.0, 6.0, 10.0, 10.0, 0.0, 5.0, 6.0, 1.0, 13.0, 1.0, 9.0, 6.0, 1.0, 11.0, 8.0, 8.0, 9.0, 10.0, 7.0, 1.0, 10.0, 6.0, 3.0, 9.0, 1.0, 10.0, 9.0, 10.0, 10.0], [11.0, 7.0, 9.0, 13.0, 11.0, 5.0, 0.0, 9.0, 4.0, 13.0, 4.0, 10.0, 9.0, 4.0, 12.0, 11.0, 13.0, 11.0, 13.0, 10.0, 4.0, 11.0, 9.0, 6.0, 10.0, 4.0, 15.0, 11.0, 13.0, 10.0], [12.0, 10.0, 3.0, 10.0, 14.0, 6.0, 9.0, 0.0, 5.0, 15.0, 5.0, 12.0, 0.0, 5.0, 13.0, 14.0, 14.0, 11.0, 10.0, 13.0, 5.0, 13.0, 0.0, 5.0, 11.0, 5.0, 16.0, 11.0, 10.0, 10.0], [9.0, 7.0, 5.0, 9.0, 11.0, 1.0, 4.0, 5.0, 0.0, 12.0, 0.0, 10.0, 5.0, 0.0, 10.0, 9.0, 9.0, 10.0, 9.0, 8.0, 0.0, 11.0, 5.0, 2.0, 8.0, 0.0, 11.0, 10.0, 9.0, 9.0], [9.0, 7.0, 14.0, 18.0, 9.0, 13.0, 13.0, 15.0, 12.0, 0.0, 12.0, 9.0, 15.0, 12.0, 3.0, 11.0, 11.0, 9.0, 18.0, 13.0, 12.0, 10.0, 15.0, 13.0, 7.0, 12.0, 13.0, 9.0, 18.0, 8.0], [9.0, 7.0, 5.0, 9.0, 11.0, 1.0, 4.0, 5.0, 0.0, 12.0, 0.0, 10.0, 5.0, 0.0, 10.0, 9.0, 9.0, 10.0, 9.0, 8.0, 0.0, 11.0, 5.0, 2.0, 8.0, 0.0, 11.0, 10.0, 9.0, 9.0], [4.0, 3.0, 10.0, 18.0, 3.0, 9.0, 10.0, 12.0, 10.0, 9.0, 10.0, 0.0, 12.0, 10.0, 7.0, 4.0, 6.0, 2.0, 18.0, 10.0, 10.0, 2.0, 12.0, 10.0, 6.0, 10.0, 8.0, 2.0, 18.0, 5.0], [12.0, 10.0, 3.0, 10.0, 14.0, 6.0, 9.0, 0.0, 5.0, 15.0, 5.0, 12.0, 0.0, 5.0, 13.0, 14.0, 14.0, 11.0, 10.0, 13.0, 5.0, 13.0, 0.0, 5.0, 11.0, 5.0, 16.0, 11.0, 10.0, 10.0], [9.0, 7.0, 5.0, 9.0, 11.0, 1.0, 4.0, 5.0, 0.0, 12.0, 0.0, 10.0, 5.0, 0.0, 10.0, 9.0, 9.0, 10.0, 9.0, 8.0, 0.0, 11.0, 5.0, 2.0, 8.0, 0.0, 11.0, 10.0, 9.0, 9.0], [6.0, 5.0, 13.0, 17.0, 6.0, 11.0, 12.0, 13.0, 10.0, 3.0, 10.0, 7.0, 13.0, 10.0, 0.0, 8.0, 8.0, 7.0, 17.0, 10.0, 10.0, 9.0, 13.0, 12.0, 4.0, 10.0, 10.0, 7.0, 17.0, 6.0], [2.0, 4.0, 12.0, 18.0, 4.0, 8.0, 11.0, 14.0, 9.0, 11.0, 9.0, 4.0, 14.0, 9.0, 8.0, 0.0, 2.0, 5.0, 18.0, 7.0, 9.0, 6.0, 14.0, 9.0, 4.0, 9.0, 4.0, 5.0, 18.0, 8.0], [2.0, 6.0, 14.0, 18.0, 6.0, 8.0, 13.0, 14.0, 9.0, 11.0, 9.0, 6.0, 14.0, 9.0, 8.0, 2.0, 0.0, 5.0, 18.0, 6.0, 9.0, 8.0, 14.0, 11.0, 4.0, 9.0, 2.0, 5.0, 18.0, 8.0], [3.0, 4.0, 11.0, 18.0, 5.0, 9.0, 11.0, 11.0, 10.0, 9.0, 10.0, 2.0, 11.0, 10.0, 7.0, 5.0, 5.0, 0.0, 18.0, 9.0, 10.0, 4.0, 11.0, 11.0, 5.0, 10.0, 7.0, 0.0, 18.0, 4.0], [18.0, 16.0, 9.0, 0.0, 19.0, 10.0, 13.0, 10.0, 9.0, 18.0, 9.0, 18.0, 10.0, 9.0, 17.0, 18.0, 18.0, 18.0, 0.0, 17.0, 9.0, 18.0, 10.0, 9.0, 17.0, 9.0, 20.0, 18.0, 0.0, 17.0], [6.0, 9.0, 13.0, 17.0, 9.0, 7.0, 10.0, 13.0, 8.0, 13.0, 8.0, 10.0, 13.0, 8.0, 10.0, 7.0, 6.0, 9.0, 17.0, 0.0, 8.0, 12.0, 13.0, 10.0, 6.0, 8.0, 8.0, 9.0, 17.0, 10.0], [9.0, 7.0, 5.0, 9.0, 11.0, 1.0, 4.0, 5.0, 0.0, 12.0, 0.0, 10.0, 5.0, 0.0, 10.0, 9.0, 9.0, 10.0, 9.0, 8.0, 0.0, 11.0, 5.0, 2.0, 8.0, 0.0, 11.0, 10.0, 9.0, 9.0], [6.0, 5.0, 10.0, 18.0, 3.0, 10.0, 11.0, 13.0, 11.0, 10.0, 11.0, 2.0, 13.0, 11.0, 9.0, 6.0, 8.0, 4.0, 18.0, 12.0, 11.0, 0.0, 13.0, 10.0, 8.0, 11.0, 10.0, 4.0, 18.0, 6.0], [12.0, 10.0, 3.0, 10.0, 14.0, 6.0, 9.0, 0.0, 5.0, 15.0, 5.0, 12.0, 0.0, 5.0, 13.0, 14.0, 14.0, 11.0, 10.0, 13.0, 5.0, 13.0, 0.0, 5.0, 11.0, 5.0, 16.0, 11.0, 10.0, 10.0], [11.0, 7.0, 3.0, 9.0, 10.0, 3.0, 6.0, 5.0, 2.0, 13.0, 2.0, 10.0, 5.0, 2.0, 12.0, 9.0, 11.0, 11.0, 9.0, 10.0, 2.0, 10.0, 5.0, 0.0, 10.0, 2.0, 13.0, 11.0, 9.0, 10.0], [2.0, 3.0, 11.0, 17.0, 5.0, 9.0, 10.0, 11.0, 8.0, 7.0, 8.0, 6.0, 11.0, 8.0, 4.0, 4.0, 4.0, 5.0, 17.0, 6.0, 8.0, 8.0, 11.0, 10.0, 0.0, 8.0, 6.0, 5.0, 17.0, 4.0], [9.0, 7.0, 5.0, 9.0, 11.0, 1.0, 4.0, 5.0, 0.0, 12.0, 0.0, 10.0, 5.0, 0.0, 10.0, 9.0, 9.0, 10.0, 9.0, 8.0, 0.0, 11.0, 5.0, 2.0, 8.0, 0.0, 11.0, 10.0, 9.0, 9.0], [4.0, 8.0, 16.0, 20.0, 8.0, 10.0, 15.0, 16.0, 11.0, 13.0, 11.0, 8.0, 16.0, 11.0, 10.0, 4.0, 2.0, 7.0, 20.0, 8.0, 11.0, 10.0, 16.0, 13.0, 6.0, 11.0, 0.0, 7.0, 20.0, 10.0], [3.0, 4.0, 11.0, 18.0, 5.0, 9.0, 11.0, 11.0, 10.0, 9.0, 10.0, 2.0, 11.0, 10.0, 7.0, 5.0, 5.0, 0.0, 18.0, 9.0, 10.0, 4.0, 11.0, 11.0, 5.0, 10.0, 7.0, 0.0, 18.0, 4.0], [18.0, 16.0, 9.0, 0.0, 19.0, 10.0, 13.0, 10.0, 9.0, 18.0, 9.0, 18.0, 10.0, 9.0, 17.0, 18.0, 18.0, 18.0, 0.0, 17.0, 9.0, 18.0, 10.0, 9.0, 17.0, 9.0, 20.0, 18.0, 0.0, 17.0], [6.0, 4.0, 10.0, 17.0, 7.0, 10.0, 10.0, 10.0, 9.0, 8.0, 9.0, 5.0, 10.0, 9.0, 6.0, 8.0, 8.0, 4.0, 17.0, 10.0, 9.0, 6.0, 10.0, 10.0, 4.0, 9.0, 10.0, 4.0, 17.0, 0.0]]
```

Each cell is the cost of a concrete edit path found by the bipartite assignment (BP), IPFP, and REFINE local search, so it is an upper bound on the exact GED. The interval table pairs it with the BRANCH lower bound. A cell is `exact` when both bounds coincide.

# GED value table (upper bound)

|       | gen1/baseline | gen1/boundary | gen1/complex | gen1/edge | gen1/invalid | gen2/baseline | gen2/boundary | gen2/complex | gen2/edge | gen2/invalid | gen3/baseline | gen3/boundary | gen3/complex | gen3/edge | gen3/invalid | gen4/baseline | gen4/boundary | gen4/complex | gen4/edge | gen4/invalid | gen5/baseline | gen5/boundary | gen5/complex | gen5/edge | gen5/invalid | gen6/baseline | gen6/boundary | gen6/complex | gen6/edge | gen6/invalid |
|-------|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **gen1/baseline** | 0.000000 | 4.000000 | 12.000000 | 18.000000 | 4.000000 | 8.000000 | 11.000000 | 12.000000 | 9.000000 | 9.000000 | 9.000000 | 4.000000 | 12.000000 | 9.000000 | 6.000000 | 2.000000 | 2.000000 | 3.000000 | 18.000000 | 6.000000 | 9.000000 | 6.000000 | 12.000000 | 11.000000 | 2.000000 | 9.000000 | 4.000000 | 3.000000 | 18.000000 | 6.000000 |
| **gen1/boundary** |  | 0.000000 | 8.000000 | 16.000000 | 4.000000 | 8.000000 | 7.000000 | 10.000000 | 7.000000 | 7.000000 | 7.000000 | 3.000000 | 10.000000 | 7.000000 | 5.000000 | 4.000000 | 6.000000 | 4.000000 | 16.000000 | 9.000000 | 7.000000 | 5.000000 | 10.000000 | 7.000000 | 3.000000 | 7.000000 | 8.000000 | 4.000000 | 16.000000 | 4.000000 |
| **gen1/complex** |  |  | 0.000000 | 9.000000 | 11.000000 | 6.000000 | 9.000000 | 3.000000 | 5.000000 | 14.000000 | 5.000000 | 10.000000 | 3.000000 | 5.000000 | 13.000000 | 12.000000 | 14.000000 | 11.000000 | 9.000000 | 13.000000 | 5.000000 | 10.000000 | 3.000000 | 3.000000 | 11.000000 | 5.000000 | 16.000000 | 11.000000 | 9.000000 | 10.000000 |
| **gen1/edge** |  |  |  | 0.000000 | 19.000000 | 10.000000 | 13.000000 | 10.000000 | 9.000000 | 18.000000 | 9.000000 | 18.000000 | 10.000000 | 9.000000 | 17.000000 | 18.000000 | 18.000000 | 18.000000 | 0.000000 | 17.000000 | 9.000000 | 18.000000 | 10.000000 | 9.000000 | 17.000000 | 9.000000 | 20.000000 | 18.000000 | 0.000000 | 17.000000 |
| **gen1/invalid** |  |  |  |  | 0.000000 | 10.000000 | 11.000000 | 14.000000 | 11.000000 | 9.000000 | 11.000000 | 3.000000 | 14.000000 | 11.000000 | 6.000000 | 4.000000 | 6.000000 | 5.000000 | 19.000000 | 9.000000 | 11.000000 | 3.000000 | 14.000000 | 10.000000 | 5.000000 | 11.000000 | 8.000000 | 5.000000 | 19.000000 | 7.000000 |
| **gen2/baseline** |  |  |  |  |  | 0.000000 | 5.000000 | 6.000000 | 1.000000 | 13.000000 | 1.000000 | 9.000000 | 6.000000 | 1.000000 | 11.000000 | 8.000000 | 8.000000 | 9.000000 | 10.000000 | 7.000000 | 1.000000 | 10.000000 | 6.000000 | 3.000000 | 9.000000 | 1.000000 | 10.000000 | 9.000000 | 10.000000 | 10.000000 |
| **gen2/boundary** |  |  |  |  |  |  | 0.000000 | 9.000000 | 4.000000 | 13.000000 | 4.000000 | 10.000000 | 9.000000 | 4.000000 | 12.000000 | 11.000000 | 13.000000 | 11.000000 | 13.000000 | 10.000000 | 4.000000 | 11.000000 | 9.000000 | 6.000000 | 10.000000 | 4.000000 | 15.000000 | 11.000000 | 13.000000 | 10.000000 |
| **gen2/complex** |  |  |  |  |  |  |  | 0.000000 | 5.000000 | 15.000000 | 5.000000 | 12.000000 | 0.000000 | 5.000000 | 13.000000 | 14.000000 | 14.000000 | 11.000000 | 10.000000 | 13.000000 | 5.000000 | 13.000000 | 0.000000 | 5.000000 | 11.000000 | 5.000000 | 16.000000 | 11.000000 | 10.000000 | 10.000000 |
| **gen2/edge** |  |  |  |  |  |  |  |  | 0.000000 | 12.000000 | 0.000000 | 10.000000 | 5.000000 | 0.000000 | 10.000000 | 9.000000 | 9.000000 | 10.000000 | 9.000000 | 8.000000 | 0.000000 | 11.000000 | 5.000000 | 2.000000 | 8.000000 | 0.000000 | 11.000000 | 10.000000 | 9.000000 | 9.000000 |
| **gen2/invalid** |  |  |  |  |  |  |  |  |  | 0.000000 | 12.000000 | 9.000000 | 15.000000 | 12.000000 | 3.000000 | 11.000000 | 11.000000 | 9.000000 | 18.000000 | 13.000000 | 12.000000 | 10.000000 | 15.000000 | 13.000000 | 7.000000 | 12.000000 | 13.000000 | 9.000000 | 18.000000 | 8.000000 |
| **gen3/baseline** |  |  |  |  |  |  |  |  |  |  | 0.000000 | 10.000000 | 5.000000 | 0.000000 | 10.000000 | 9.000000 | 9.000000 | 10.000000 | 9.000000 | 8.000000 | 0.000000 | 11.000000 | 5.000000 | 2.000000 | 8.000000 | 0.000000 | 11.000000 | 10.000000 | 9.000000 | 9.000000 |
| **gen3/boundary** |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 12.000000 | 10.000000 | 7.000000 | 4.000000 | 6.000000 | 2.000000 | 18.000000 | 10.000000 | 10.000000 | 2.000000 | 12.000000 | 10.000000 | 6.000000 | 10.000000 | 8.000000 | 2.000000 | 18.000000 | 5.000000 |
| **gen3/complex** |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 5.000000 | 13.000000 | 14.000000 | 14.000000 | 11.000000 | 10.000000 | 13.000000 | 5.000000 | 13.000000 | 0.000000 | 5.000000 | 11.000000 | 5.000000 | 16.000000 | 11.000000 | 10.000000 | 10.000000 |
| **gen3/edge** |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 10.000000 | 9.000000 | 9.000000 | 10.000000 | 9.000000 | 8.000000 | 0.000000 | 11.000000 | 5.000000 | 2.000000 | 8.000000 | 0.000000 | 11.000000 | 10.000000 | 9.000000 | 9.000000 |
| **gen3/invalid** |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 8.000000 | 8.000000 | 7.000000 | 17.000000 | 10.000000 | 10.000000 | 9.000000 | 13.000000 | 12.000000 | 4.000000 | 10.000000 | 10.000000 | 7.000000 | 17.000000 | 6.000000 |
| **gen4/baseline** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 2.000000 | 5.000000 | 18.000000 | 7.000000 | 9.000000 | 6.000000 | 14.000000 | 9.000000 | 4.000000 | 9.000000 | 4.000000 | 5.000000 | 18.000000 | 8.000000 |
| **gen4/boundary** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 5.000000 | 18.000000 | 6.000000 | 9.000000 | 8.000000 | 14.000000 | 11.000000 | 4.000000 | 9.000000 | 2.000000 | 5.000000 | 18.000000 | 8.000000 |
| **gen4/complex** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 18.000000 | 9.000000 | 10.000000 | 4.000000 | 11.000000 | 11.000000 | 5.000000 | 10.000000 | 7.000000 | 0.000000 | 18.000000 | 4.000000 |
| **gen4/edge** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 17.000000 | 9.000000 | 18.000000 | 10.000000 | 9.000000 | 17.000000 | 9.000000 | 20.000000 | 18.000000 | 0.000000 | 17.000000 |
| **gen4/invalid** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 8.000000 | 12.000000 | 13.000000 | 10.000000 | 6.000000 | 8.000000 | 8.000000 | 9.000000 | 17.000000 | 10.000000 |
| **gen5/baseline** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 11.000000 | 5.000000 | 2.000000 | 8.000000 | 0.000000 | 11.000000 | 10.000000 | 9.000000 | 9.000000 |
| **gen5/boundary** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 13.000000 | 10.000000 | 8.000000 | 11.000000 | 10.000000 | 4.000000 | 18.000000 | 6.000000 |
| **gen5/complex** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 5.000000 | 11.000000 | 5.000000 | 16.000000 | 11.000000 | 10.000000 | 10.000000 |
| **gen5/edge** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 10.000000 | 2.000000 | 13.000000 | 11.000000 | 9.000000 | 10.000000 |
| **gen5/invalid** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 8.000000 | 6.000000 | 5.000000 | 17.000000 | 4.000000 |
| **gen6/baseline** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 11.000000 | 10.000000 | 9.000000 | 9.000000 |
| **gen6/boundary** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 7.000000 | 20.000000 | 10.000000 |
| **gen6/complex** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 18.000000 | 4.000000 |
| **gen6/edge** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 17.000000 |
| **gen6/invalid** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 |

# GED bound interval table

A single value is exact; `[lower, upper]` is the certified interval.

|       | gen1/baseline | gen1/boundary | gen1/complex | gen1/edge | gen1/invalid | gen2/baseline | gen2/boundary | gen2/complex | gen2/edge | gen2/invalid | gen3/baseline | gen3/boundary | gen3/complex | gen3/edge | gen3/invalid | gen4/baseline | gen4/boundary | gen4/complex | gen4/edge | gen4/invalid | gen5/baseline | gen5/boundary | gen5/complex | gen5/edge | gen5/invalid | gen6/baseline | gen6/boundary | gen6/complex | gen6/edge | gen6/invalid |
|-------|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **gen1/baseline** | 0.000000 | 4.000000 | 12.000000 | [17.000000, 18.000000] | 4.000000 | [7.000000, 8.000000] | 11.000000 | 12.000000 | [8.000000, 9.000000] | 9.000000 | [8.000000, 9.000000] | 4.000000 | 12.000000 | [8.000000, 9.000000] | 6.000000 | 2.000000 | 2.000000 | 3.000000 | [17.000000, 18.000000] | [5.000000, 6.000000] | [8.000000, 9.000000] | 6.000000 | 12.000000 | [9.500000, 11.000000] | 2.000000 | [8.000000, 9.000000] | 4.000000 | 3.000000 | [17.000000, 18.000000] | 6.000000 |
| **gen1/boundary** |  | 0.000000 | 8.000000 | [14.000000, 16.000000] | [3.500000, 4.000000] | [5.000000, 8.000000] | 7.000000 | [9.000000, 10.000000] | [5.000000, 7.000000] | 7.000000 | [5.000000, 7.000000] | [2.500000, 3.000000] | [9.000000, 10.000000] | [5.000000, 7.000000] | 5.000000 | 4.000000 | 6.000000 | 4.000000 | [14.000000, 16.000000] | [7.500000, 9.000000] | [5.000000, 7.000000] | [4.500000, 5.000000] | [9.000000, 10.000000] | [6.000000, 7.000000] | 3.000000 | [5.000000, 7.000000] | 8.000000 | 4.000000 | [14.000000, 16.000000] | 4.000000 |
| **gen1/complex** |  |  | 0.000000 | [7.000000, 9.000000] | [10.000000, 11.000000] | 6.000000 | [7.000000, 9.000000] | [2.500000, 3.000000] | 5.000000 | [12.000000, 14.000000] | 5.000000 | [9.000000, 10.000000] | [2.500000, 3.000000] | 5.000000 | [10.500000, 13.000000] | 12.000000 | 14.000000 | [9.500000, 11.000000] | [7.000000, 9.000000] | [11.000000, 13.000000] | 5.000000 | [8.000000, 10.000000] | [2.500000, 3.000000] | 3.000000 | 11.000000 | 5.000000 | 16.000000 | [9.500000, 11.000000] | [7.000000, 9.000000] | [9.500000, 10.000000] |
| **gen1/edge** |  |  |  | 0.000000 | [16.000000, 19.000000] | 10.000000 | 13.000000 | [8.000000, 10.000000] | 9.000000 | [14.000000, 18.000000] | 9.000000 | [15.000000, 18.000000] | [8.000000, 10.000000] | 9.000000 | [14.000000, 17.000000] | [17.000000, 18.000000] | 18.000000 | [16.000000, 18.000000] | 0.000000 | [15.000000, 17.000000] | 9.000000 | [14.000000, 18.000000] | [8.000000, 10.000000] | [8.000000, 9.000000] | [16.000000, 17.000000] | 9.000000 | 20.000000 | [16.000000, 18.000000] | 0.000000 | [15.000000, 17.000000] |
| **gen1/invalid** |  |  |  |  | 0.000000 | [7.000000, 10.000000] | [10.000000, 11.000000] | [12.000000, 14.000000] | [8.000000, 11.000000] | 9.000000 | [8.000000, 11.000000] | 3.000000 | [12.000000, 14.000000] | [8.000000, 11.000000] | 6.000000 | 4.000000 | 6.000000 | 5.000000 | [16.000000, 19.000000] | [7.000000, 9.000000] | [8.000000, 11.000000] | 3.000000 | [12.000000, 14.000000] | [8.000000, 10.000000] | [4.500000, 5.000000] | [8.000000, 11.000000] | 8.000000 | 5.000000 | [16.000000, 19.000000] | [6.500000, 7.000000] |
| **gen2/baseline** |  |  |  |  |  | 0.000000 | 5.000000 | 6.000000 | 1.000000 | [9.500000, 13.000000] | 1.000000 | [6.000000, 9.000000] | 6.000000 | 1.000000 | [8.000000, 11.000000] | [7.000000, 8.000000] | 8.000000 | [7.000000, 9.000000] | 10.000000 | [5.000000, 7.000000] | 1.000000 | [6.500000, 10.000000] | 6.000000 | 3.000000 | [7.000000, 9.000000] | 1.000000 | 10.000000 | [7.000000, 9.000000] | 10.000000 | [7.000000, 10.000000] |
| **gen2/boundary** |  |  |  |  |  |  | 0.000000 | [7.000000, 9.000000] | 4.000000 | [10.500000, 13.000000] | 4.000000 | [9.000000, 10.000000] | [7.000000, 9.000000] | 4.000000 | [9.500000, 12.000000] | 11.000000 | 13.000000 | [10.500000, 11.000000] | 13.000000 | [9.000000, 10.000000] | 4.000000 | [9.500000, 11.000000] | [7.000000, 9.000000] | [5.000000, 6.000000] | 10.000000 | 4.000000 | 15.000000 | [10.500000, 11.000000] | 13.000000 | [9.500000, 10.000000] |
| **gen2/complex** |  |  |  |  |  |  |  | 0.000000 | 5.000000 | [12.500000, 15.000000] | 5.000000 | [10.000000, 12.000000] | 0.000000 | 5.000000 | [11.000000, 13.000000] | [12.500000, 14.000000] | 14.000000 | [10.000000, 11.000000] | [8.000000, 10.000000] | [11.000000, 13.000000] | 5.000000 | [10.000000, 13.000000] | 0.000000 | 5.000000 | 11.000000 | 5.000000 | 16.000000 | [10.000000, 11.000000] | [8.000000, 10.000000] | [9.000000, 10.000000] |
| **gen2/edge** |  |  |  |  |  |  |  |  | 0.000000 | [8.500000, 12.000000] | 0.000000 | [7.000000, 10.000000] | 5.000000 | 0.000000 | [7.000000, 10.000000] | [8.000000, 9.000000] | 9.000000 | [8.000000, 10.000000] | 9.000000 | [6.000000, 8.000000] | 0.000000 | [7.500000, 11.000000] | 5.000000 | 2.000000 | [7.000000, 8.000000] | 0.000000 | 11.000000 | [8.000000, 10.000000] | 9.000000 | [7.000000, 9.000000] |
| **gen2/invalid** |  |  |  |  |  |  |  |  |  | 0.000000 | [8.500000, 12.000000] | 9.000000 | [12.500000, 15.000000] | [8.500000, 12.000000] | 3.000000 | 11.000000 | 11.000000 | 9.000000 | [14.000000, 18.000000] | [11.000000, 13.000000] | [8.500000, 12.000000] | 10.000000 | [12.500000, 15.000000] | [10.000000, 13.000000] | 7.000000 | [8.500000, 12.000000] | 13.000000 | 9.000000 | [14.000000, 18.000000] | 8.000000 |
| **gen3/baseline** |  |  |  |  |  |  |  |  |  |  | 0.000000 | [7.000000, 10.000000] | 5.000000 | 0.000000 | [7.000000, 10.000000] | [8.000000, 9.000000] | 9.000000 | [8.000000, 10.000000] | 9.000000 | [6.000000, 8.000000] | 0.000000 | [7.500000, 11.000000] | 5.000000 | 2.000000 | [7.000000, 8.000000] | 0.000000 | 11.000000 | [8.000000, 10.000000] | 9.000000 | [7.000000, 9.000000] |
| **gen3/boundary** |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | [10.000000, 12.000000] | [7.000000, 10.000000] | 7.000000 | 4.000000 | 6.000000 | 2.000000 | [15.000000, 18.000000] | [8.000000, 10.000000] | [7.000000, 10.000000] | 2.000000 | [10.000000, 12.000000] | [8.000000, 10.000000] | [5.500000, 6.000000] | [7.000000, 10.000000] | 8.000000 | 2.000000 | [15.000000, 18.000000] | [4.500000, 5.000000] |
| **gen3/complex** |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 5.000000 | [11.000000, 13.000000] | [12.500000, 14.000000] | 14.000000 | [10.000000, 11.000000] | [8.000000, 10.000000] | [11.000000, 13.000000] | 5.000000 | [10.000000, 13.000000] | 0.000000 | 5.000000 | 11.000000 | 5.000000 | 16.000000 | [10.000000, 11.000000] | [8.000000, 10.000000] | [9.000000, 10.000000] |
| **gen3/edge** |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | [7.000000, 10.000000] | [8.000000, 9.000000] | 9.000000 | [8.000000, 10.000000] | 9.000000 | [6.000000, 8.000000] | 0.000000 | [7.500000, 11.000000] | 5.000000 | 2.000000 | [7.000000, 8.000000] | 0.000000 | 11.000000 | [8.000000, 10.000000] | 9.000000 | [7.000000, 9.000000] |
| **gen3/invalid** |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 8.000000 | 8.000000 | 7.000000 | [14.000000, 17.000000] | [8.000000, 10.000000] | [7.000000, 10.000000] | 9.000000 | [11.000000, 13.000000] | [8.500000, 12.000000] | 4.000000 | [7.000000, 10.000000] | 10.000000 | 7.000000 | [14.000000, 17.000000] | 6.000000 |
| **gen4/baseline** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 2.000000 | 5.000000 | [17.000000, 18.000000] | [6.000000, 7.000000] | [8.000000, 9.000000] | 6.000000 | [12.500000, 14.000000] | 9.000000 | 4.000000 | [8.000000, 9.000000] | 4.000000 | 5.000000 | [17.000000, 18.000000] | 8.000000 |
| **gen4/boundary** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 5.000000 | 18.000000 | 6.000000 | 9.000000 | 8.000000 | 14.000000 | 11.000000 | 4.000000 | 9.000000 | 2.000000 | 5.000000 | 18.000000 | 8.000000 |
| **gen4/complex** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | [16.000000, 18.000000] | [7.000000, 9.000000] | [8.000000, 10.000000] | 4.000000 | [10.000000, 11.000000] | [9.500000, 11.000000] | [4.500000, 5.000000] | [8.000000, 10.000000] | 7.000000 | 0.000000 | [16.000000, 18.000000] | 4.000000 |
| **gen4/edge** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | [15.000000, 17.000000] | 9.000000 | [14.000000, 18.000000] | [8.000000, 10.000000] | [8.000000, 9.000000] | [16.000000, 17.000000] | 9.000000 | 20.000000 | [16.000000, 18.000000] | 0.000000 | [15.000000, 17.000000] |
| **gen4/invalid** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | [6.000000, 8.000000] | [10.000000, 12.000000] | [11.000000, 13.000000] | [8.000000, 10.000000] | [5.000000, 6.000000] | [6.000000, 8.000000] | 8.000000 | [7.000000, 9.000000] | [15.000000, 17.000000] | [8.500000, 10.000000] |
| **gen5/baseline** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | [7.500000, 11.000000] | 5.000000 | 2.000000 | [7.000000, 8.000000] | 0.000000 | 11.000000 | [8.000000, 10.000000] | 9.000000 | [7.000000, 9.000000] |
| **gen5/boundary** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | [10.000000, 13.000000] | [7.000000, 10.000000] | [7.500000, 8.000000] | [7.500000, 11.000000] | 10.000000 | 4.000000 | [14.000000, 18.000000] | [5.500000, 6.000000] |
| **gen5/complex** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 5.000000 | 11.000000 | 5.000000 | 16.000000 | [10.000000, 11.000000] | [8.000000, 10.000000] | [9.000000, 10.000000] |
| **gen5/edge** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | [8.500000, 10.000000] | 2.000000 | 13.000000 | [9.500000, 11.000000] | [8.000000, 9.000000] | [8.500000, 10.000000] |
| **gen5/invalid** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | [7.000000, 8.000000] | 6.000000 | [4.500000, 5.000000] | [16.000000, 17.000000] | 4.000000 |
| **gen6/baseline** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 11.000000 | [8.000000, 10.000000] | 9.000000 | [7.000000, 9.000000] |
| **gen6/boundary** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 7.000000 | 20.000000 | 10.000000 |
| **gen6/complex** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | [16.000000, 18.000000] | 4.000000 |
| **gen6/edge** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | [15.000000, 17.000000] |
| **gen6/invalid** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 |

# Normalized GED diversity table

Diversity(A, B) = GED(A, B) / (GED(A, empty) + GED(B, empty)); the both-empty case is 0. Zero denotes identical labeled graphs, and higher values denote greater structural diversity.

|       | gen1/baseline | gen1/boundary | gen1/complex | gen1/edge | gen1/invalid | gen2/baseline | gen2/boundary | gen2/complex | gen2/edge | gen2/invalid | gen3/baseline | gen3/boundary | gen3/complex | gen3/edge | gen3/invalid | gen4/baseline | gen4/boundary | gen4/complex | gen4/edge | gen4/invalid | gen5/baseline | gen5/boundary | gen5/complex | gen5/edge | gen5/invalid | gen6/baseline | gen6/boundary | gen6/complex | gen6/edge | gen6/invalid |
|-------|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **gen1/baseline** | 0.000000 | 0.117647 | 0.285714 | 0.391304 | 0.121212 | 0.222222 | 0.268293 | 0.285714 | 0.243243 | 0.236842 | 0.243243 | 0.117647 | 0.285714 | 0.243243 | 0.171429 | 0.066667 | 0.071429 | 0.090909 | 0.391304 | 0.181818 | 0.243243 | 0.166667 | 0.285714 | 0.282051 | 0.064516 | 0.243243 | 0.153846 | 0.090909 | 0.391304 | 0.171429 |
| **gen1/boundary** |  | 0.000000 | 0.173913 | 0.320000 | 0.108108 | 0.200000 | 0.155556 | 0.217391 | 0.170732 | 0.166667 | 0.170732 | 0.078947 | 0.217391 | 0.170732 | 0.128205 | 0.117647 | 0.187500 | 0.108108 | 0.320000 | 0.243243 | 0.170732 | 0.125000 | 0.217391 | 0.162791 | 0.085714 | 0.170732 | 0.266667 | 0.108108 | 0.320000 | 0.102564 |
| **gen1/complex** |  |  | 0.000000 | 0.155172 | 0.244444 | 0.125000 | 0.169811 | 0.055556 | 0.102041 | 0.280000 | 0.102041 | 0.217391 | 0.055556 | 0.102041 | 0.276596 | 0.285714 | 0.350000 | 0.244444 | 0.155172 | 0.288889 | 0.102041 | 0.208333 | 0.055556 | 0.058824 | 0.255814 | 0.102041 | 0.421053 | 0.244444 | 0.155172 | 0.212766 |
| **gen1/edge** |  |  |  | 0.000000 | 0.387755 | 0.192308 | 0.228070 | 0.172414 | 0.169811 | 0.333333 | 0.169811 | 0.360000 | 0.172414 | 0.169811 | 0.333333 | 0.391304 | 0.409091 | 0.367347 | 0.000000 | 0.346939 | 0.169811 | 0.346154 | 0.172414 | 0.163636 | 0.361702 | 0.169811 | 0.476190 | 0.367347 | 0.000000 | 0.333333 |
| **gen1/invalid** |  |  |  |  | 0.000000 | 0.256410 | 0.250000 | 0.311111 | 0.275000 | 0.219512 | 0.275000 | 0.081081 | 0.311111 | 0.275000 | 0.157895 | 0.121212 | 0.193548 | 0.138889 | 0.387755 | 0.250000 | 0.275000 | 0.076923 | 0.311111 | 0.238095 | 0.147059 | 0.275000 | 0.275862 | 0.138889 | 0.387755 | 0.184211 |
| **gen2/baseline** |  |  |  |  |  | 0.000000 | 0.106383 | 0.125000 | 0.023256 | 0.295455 | 0.023256 | 0.225000 | 0.125000 | 0.023256 | 0.268293 | 0.222222 | 0.235294 | 0.230769 | 0.192308 | 0.179487 | 0.023256 | 0.238095 | 0.125000 | 0.066667 | 0.243243 | 0.023256 | 0.312500 | 0.230769 | 0.192308 | 0.243902 |
| **gen2/boundary** |  |  |  |  |  |  | 0.000000 | 0.169811 | 0.083333 | 0.265306 | 0.083333 | 0.222222 | 0.169811 | 0.083333 | 0.260870 | 0.268293 | 0.333333 | 0.250000 | 0.228070 | 0.227273 | 0.083333 | 0.234043 | 0.169811 | 0.120000 | 0.238095 | 0.083333 | 0.405405 | 0.250000 | 0.228070 | 0.217391 |
| **gen2/complex** |  |  |  |  |  |  |  | 0.000000 | 0.102041 | 0.300000 | 0.102041 | 0.260870 | 0.000000 | 0.102041 | 0.276596 | 0.333333 | 0.350000 | 0.244444 | 0.172414 | 0.288889 | 0.102041 | 0.270833 | 0.000000 | 0.098039 | 0.255814 | 0.102041 | 0.421053 | 0.244444 | 0.172414 | 0.212766 |
| **gen2/edge** |  |  |  |  |  |  |  |  | 0.000000 | 0.266667 | 0.000000 | 0.243902 | 0.102041 | 0.000000 | 0.238095 | 0.243243 | 0.257143 | 0.250000 | 0.169811 | 0.200000 | 0.000000 | 0.255814 | 0.102041 | 0.043478 | 0.210526 | 0.000000 | 0.333333 | 0.250000 | 0.169811 | 0.214286 |
| **gen2/invalid** |  |  |  |  |  |  |  |  |  | 0.000000 | 0.266667 | 0.214286 | 0.300000 | 0.266667 | 0.069767 | 0.289474 | 0.305556 | 0.219512 | 0.333333 | 0.317073 | 0.266667 | 0.227273 | 0.300000 | 0.276596 | 0.179487 | 0.266667 | 0.382353 | 0.219512 | 0.333333 | 0.186047 |
| **gen3/baseline** |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.243902 | 0.102041 | 0.000000 | 0.238095 | 0.243243 | 0.257143 | 0.250000 | 0.169811 | 0.200000 | 0.000000 | 0.255814 | 0.102041 | 0.043478 | 0.210526 | 0.000000 | 0.333333 | 0.250000 | 0.169811 | 0.214286 |
| **gen3/boundary** |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.260870 | 0.243902 | 0.179487 | 0.117647 | 0.187500 | 0.054054 | 0.360000 | 0.270270 | 0.243902 | 0.050000 | 0.260870 | 0.232558 | 0.171429 | 0.243902 | 0.266667 | 0.054054 | 0.360000 | 0.128205 |
| **gen3/complex** |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.102041 | 0.276596 | 0.333333 | 0.350000 | 0.244444 | 0.172414 | 0.288889 | 0.102041 | 0.270833 | 0.000000 | 0.098039 | 0.255814 | 0.102041 | 0.421053 | 0.244444 | 0.172414 | 0.212766 |
| **gen3/edge** |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.238095 | 0.243243 | 0.257143 | 0.250000 | 0.169811 | 0.200000 | 0.000000 | 0.255814 | 0.102041 | 0.043478 | 0.210526 | 0.000000 | 0.333333 | 0.250000 | 0.169811 | 0.214286 |
| **gen3/invalid** |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.228571 | 0.242424 | 0.184211 | 0.333333 | 0.263158 | 0.238095 | 0.219512 | 0.276596 | 0.272727 | 0.111111 | 0.238095 | 0.322581 | 0.184211 | 0.333333 | 0.150000 |
| **gen4/baseline** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.071429 | 0.151515 | 0.391304 | 0.212121 | 0.243243 | 0.166667 | 0.333333 | 0.230769 | 0.129032 | 0.243243 | 0.153846 | 0.151515 | 0.391304 | 0.228571 |
| **gen4/boundary** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.161290 | 0.409091 | 0.193548 | 0.257143 | 0.235294 | 0.350000 | 0.297297 | 0.137931 | 0.257143 | 0.083333 | 0.161290 | 0.409091 | 0.242424 |
| **gen4/complex** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.367347 | 0.250000 | 0.250000 | 0.102564 | 0.244444 | 0.261905 | 0.147059 | 0.250000 | 0.241379 | 0.000000 | 0.367347 | 0.105263 |
| **gen4/edge** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.346939 | 0.169811 | 0.346154 | 0.172414 | 0.163636 | 0.361702 | 0.169811 | 0.476190 | 0.367347 | 0.000000 | 0.333333 |
| **gen4/invalid** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.200000 | 0.307692 | 0.288889 | 0.238095 | 0.176471 | 0.200000 | 0.275862 | 0.250000 | 0.346939 | 0.263158 |
| **gen5/baseline** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.255814 | 0.102041 | 0.043478 | 0.210526 | 0.000000 | 0.333333 | 0.250000 | 0.169811 | 0.214286 |
| **gen5/boundary** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.270833 | 0.222222 | 0.216216 | 0.255814 | 0.312500 | 0.102564 | 0.346154 | 0.146341 |
| **gen5/complex** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.098039 | 0.255814 | 0.102041 | 0.421053 | 0.244444 | 0.172414 | 0.212766 |
| **gen5/edge** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.250000 | 0.043478 | 0.371429 | 0.261905 | 0.163636 | 0.227273 |
| **gen5/invalid** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.210526 | 0.222222 | 0.147059 | 0.361702 | 0.111111 |
| **gen6/baseline** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.333333 | 0.250000 | 0.169811 | 0.214286 |
| **gen6/boundary** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.241379 | 0.476190 | 0.322581 |
| **gen6/complex** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.367347 | 0.105263 |
| **gen6/edge** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.333333 |
| **gen6/invalid** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 |

# Result status table

|       | gen1/baseline | gen1/boundary | gen1/complex | gen1/edge | gen1/invalid | gen2/baseline | gen2/boundary | gen2/complex | gen2/edge | gen2/invalid | gen3/baseline | gen3/boundary | gen3/complex | gen3/edge | gen3/invalid | gen4/baseline | gen4/boundary | gen4/complex | gen4/edge | gen4/invalid | gen5/baseline | gen5/boundary | gen5/complex | gen5/edge | gen5/invalid | gen6/baseline | gen6/boundary | gen6/complex | gen6/edge | gen6/invalid |
|-------|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **gen1/baseline** | exact | exact | exact | bounded | exact | bounded | exact | exact | bounded | exact | bounded | exact | exact | bounded | exact | exact | exact | exact | bounded | bounded | bounded | exact | exact | bounded | exact | bounded | exact | exact | bounded | exact |
| **gen1/boundary** |  | exact | exact | bounded | bounded | bounded | exact | bounded | bounded | exact | bounded | bounded | bounded | bounded | exact | exact | exact | exact | bounded | bounded | bounded | bounded | bounded | bounded | exact | bounded | exact | exact | bounded | exact |
| **gen1/complex** |  |  | exact | bounded | bounded | exact | bounded | bounded | exact | bounded | exact | bounded | bounded | exact | bounded | exact | exact | bounded | bounded | bounded | exact | bounded | bounded | exact | exact | exact | exact | bounded | bounded | bounded |
| **gen1/edge** |  |  |  | exact | bounded | exact | exact | bounded | exact | bounded | exact | bounded | bounded | exact | bounded | bounded | exact | bounded | exact | bounded | exact | bounded | bounded | bounded | bounded | exact | exact | bounded | exact | bounded |
| **gen1/invalid** |  |  |  |  | exact | bounded | bounded | bounded | bounded | exact | bounded | exact | bounded | bounded | exact | exact | exact | exact | bounded | bounded | bounded | exact | bounded | bounded | bounded | bounded | exact | exact | bounded | bounded |
| **gen2/baseline** |  |  |  |  |  | exact | exact | exact | exact | bounded | exact | bounded | exact | exact | bounded | bounded | exact | bounded | exact | bounded | exact | bounded | exact | exact | bounded | exact | exact | bounded | exact | bounded |
| **gen2/boundary** |  |  |  |  |  |  | exact | bounded | exact | bounded | exact | bounded | bounded | exact | bounded | exact | exact | bounded | exact | bounded | exact | bounded | bounded | bounded | exact | exact | exact | bounded | exact | bounded |
| **gen2/complex** |  |  |  |  |  |  |  | exact | exact | bounded | exact | bounded | exact | exact | bounded | bounded | exact | bounded | bounded | bounded | exact | bounded | exact | exact | exact | exact | exact | bounded | bounded | bounded |
| **gen2/edge** |  |  |  |  |  |  |  |  | exact | bounded | exact | bounded | exact | exact | bounded | bounded | exact | bounded | exact | bounded | exact | bounded | exact | exact | bounded | exact | exact | bounded | exact | bounded |
| **gen2/invalid** |  |  |  |  |  |  |  |  |  | exact | bounded | exact | bounded | bounded | exact | exact | exact | exact | bounded | bounded | bounded | exact | bounded | bounded | exact | bounded | exact | exact | bounded | exact |
| **gen3/baseline** |  |  |  |  |  |  |  |  |  |  | exact | bounded | exact | exact | bounded | bounded | exact | bounded | exact | bounded | exact | bounded | exact | exact | bounded | exact | exact | bounded | exact | bounded |
| **gen3/boundary** |  |  |  |  |  |  |  |  |  |  |  | exact | bounded | bounded | exact | exact | exact | exact | bounded | bounded | bounded | exact | bounded | bounded | bounded | bounded | exact | exact | bounded | bounded |
| **gen3/complex** |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | bounded | bounded | exact | bounded | bounded | bounded | exact | bounded | exact | exact | exact | exact | exact | bounded | bounded | bounded |
| **gen3/edge** |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | bounded | bounded | exact | bounded | exact | bounded | exact | bounded | exact | exact | bounded | exact | exact | bounded | exact | bounded |
| **gen3/invalid** |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | exact | exact | bounded | bounded | bounded | exact | bounded | bounded | exact | bounded | exact | exact | bounded | exact |
| **gen4/baseline** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | exact | bounded | bounded | bounded | exact | bounded | exact | exact | bounded | exact | exact | bounded | exact |
| **gen4/boundary** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact |
| **gen4/complex** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | bounded | bounded | bounded | exact | bounded | bounded | bounded | bounded | exact | exact | bounded | exact |
| **gen4/edge** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | bounded | exact | bounded | bounded | bounded | bounded | exact | exact | bounded | exact | bounded |
| **gen4/invalid** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | bounded | bounded | bounded | bounded | bounded | bounded | exact | bounded | bounded | bounded |
| **gen5/baseline** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | bounded | exact | exact | bounded | exact | exact | bounded | exact | bounded |
| **gen5/boundary** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | bounded | bounded | bounded | bounded | exact | exact | bounded | bounded |
| **gen5/complex** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | exact | exact | exact | bounded | bounded | bounded |
| **gen5/edge** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | bounded | exact | exact | bounded | bounded | bounded |
| **gen5/invalid** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | bounded | exact | bounded | bounded | exact |
| **gen6/baseline** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | bounded | exact | bounded |
| **gen6/boundary** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | exact | exact |
| **gen6/complex** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | bounded | exact |
| **gen6/edge** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | bounded |
| **gen6/invalid** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact |

Pairs: 435; exact pairs: 209; bounded pairs: 226; mean relative gap: 9.20%; max relative gap: 37.50%; invalid files: 0.
