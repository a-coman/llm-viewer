# Adjacency, edges, and labels

```text
Adj-gen1/output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen1/output.soil: {0: 'Booking', 1: 'Customer', 2: 'RoomReservation', 3: 'RoomReservation', 4: 'Room', 5: 'Room', 6: 'Room', 7: 'RoomExtra', 8: 'RoomExtra', 9: 'RoomExtra', 10: 'Bill', 11: 'Bill', 12: 'Booking', 13: 'Customer', 14: 'Booking', 15: 'Customer', 16: 'RoomReservation', 17: 'Room', 18: 'Bill', 19: 'FreeRoomTypesDTO', 20: 'FreeRoomTypesDTO', 21: 'FreeRoomTypesDTO'}

Edges-gen1/output.soil: [(0, 1, 'BookingCustomer'), (0, 2, 'BookingRoomReservation'), (0, 3, 'BookingRoomReservation'), (2, 4, 'RoomReservationRoom'), (3, 5, 'RoomReservationRoom'), (3, 6, 'RoomReservationRoom'), (2, 7, 'RoomReservationExtras'), (2, 8, 'RoomReservationExtras'), (3, 9, 'RoomReservationExtras'), (10, 2, 'BillRoomReservation'), (11, 3, 'BillRoomReservation'), (0, 10, 'BookingBill'), (0, 11, 'BookingBill'), (12, 13, 'BookingCustomer'), (14, 15, 'BookingCustomer'), (14, 16, 'BookingRoomReservation'), (16, 17, 'RoomReservationRoom'), (18, 16, 'BillRoomReservation'), (14, 18, 'BookingBill')]

Adj-gen2/output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen2/output.soil: {0: 'Booking', 1: 'Customer', 2: 'RoomReservation', 3: 'RoomReservation', 4: 'Room', 5: 'Room', 6: 'Room', 7: 'RoomExtra', 8: 'RoomExtra', 9: 'RoomExtra', 10: 'Bill', 11: 'Bill', 12: 'FreeRoomTypesDTO', 13: 'FreeRoomTypesDTO'}

Edges-gen2/output.soil: [(0, 1, 'BookingCustomer'), (0, 2, 'BookingRoomReservation'), (0, 3, 'BookingRoomReservation'), (2, 4, 'RoomReservationRoom'), (2, 5, 'RoomReservationRoom'), (3, 6, 'RoomReservationRoom'), (2, 7, 'RoomReservationExtras'), (2, 9, 'RoomReservationExtras'), (3, 8, 'RoomReservationExtras'), (10, 2, 'BillRoomReservation'), (11, 3, 'BillRoomReservation'), (0, 10, 'BookingBill'), (0, 11, 'BookingBill')]

Adj-gen3/output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0], [1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen3/output.soil: {0: 'Booking', 1: 'Customer', 2: 'RoomReservation', 3: 'RoomReservation', 4: 'Room', 5: 'Room', 6: 'RoomExtra', 7: 'RoomExtra', 8: 'Bill', 9: 'Bill', 10: 'FreeRoomTypesDTO'}

Edges-gen3/output.soil: [(0, 1, 'BookingCustomer'), (0, 2, 'BookingRoomReservation'), (0, 3, 'BookingRoomReservation'), (2, 4, 'RoomReservationRoom'), (3, 5, 'RoomReservationRoom'), (3, 6, 'RoomReservationExtras'), (3, 7, 'RoomReservationExtras'), (8, 2, 'BillRoomReservation'), (9, 3, 'BillRoomReservation'), (0, 8, 'BookingBill'), (0, 9, 'BookingBill')]

Adj-gen4/output.soil: [[0, 1, 1, 0, 0, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen4/output.soil: {0: 'Booking', 1: 'Customer', 2: 'RoomReservation', 3: 'Room', 4: 'Room', 5: 'Bill', 6: 'FreeRoomTypesDTO', 7: 'FreeRoomTypesDTO'}

Edges-gen4/output.soil: [(0, 1, 'BookingCustomer'), (0, 2, 'BookingRoomReservation'), (2, 3, 'RoomReservationRoom'), (2, 4, 'RoomReservationRoom'), (5, 2, 'BillRoomReservation'), (0, 5, 'BookingBill')]

Adj-gen5/output.soil: [[0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen5/output.soil: {0: 'Booking', 1: 'Customer', 2: 'RoomReservation', 3: 'RoomReservation', 4: 'RoomReservation', 5: 'Room', 6: 'Room', 7: 'Room', 8: 'Room', 9: 'Room', 10: 'RoomExtra', 11: 'RoomExtra', 12: 'RoomExtra', 13: 'RoomExtra', 14: 'Bill', 15: 'Bill', 16: 'Bill', 17: 'FreeRoomTypesDTO'}

Edges-gen5/output.soil: [(0, 1, 'BookingCustomer'), (0, 2, 'BookingRoomReservation'), (0, 3, 'BookingRoomReservation'), (0, 4, 'BookingRoomReservation'), (2, 5, 'RoomReservationRoom'), (2, 6, 'RoomReservationRoom'), (3, 7, 'RoomReservationRoom'), (3, 8, 'RoomReservationRoom'), (4, 9, 'RoomReservationRoom'), (2, 10, 'RoomReservationExtras'), (2, 11, 'RoomReservationExtras'), (3, 12, 'RoomReservationExtras'), (4, 13, 'RoomReservationExtras'), (14, 2, 'BillRoomReservation'), (15, 3, 'BillRoomReservation'), (16, 4, 'BillRoomReservation'), (0, 14, 'BookingBill'), (0, 15, 'BookingBill'), (0, 16, 'BookingBill')]

Adj-gen6/output.soil: [[0, 1, 0, 0, 0], [1, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]

Labels-gen6/output.soil: {0: 'Booking', 1: 'Customer', 2: 'FreeRoomTypesDTO', 3: 'FreeRoomTypesDTO', 4: 'FreeRoomTypesDTO'}

Edges-gen6/output.soil: [(0, 1, 'BookingCustomer')]

Adj-gen7/output.soil: [[0, 1, 1, 0, 0, 0, 1, 0], [1, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 1, 1, 1, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen7/output.soil: {0: 'Booking', 1: 'Customer', 2: 'RoomReservation', 3: 'Room', 4: 'Room', 5: 'Room', 6: 'Bill', 7: 'FreeRoomTypesDTO'}

Edges-gen7/output.soil: [(0, 1, 'BookingCustomer'), (0, 2, 'BookingRoomReservation'), (2, 3, 'RoomReservationRoom'), (2, 4, 'RoomReservationRoom'), (2, 5, 'RoomReservationRoom'), (6, 2, 'BillRoomReservation'), (0, 6, 'BookingBill')]

Adj-gen8/output.soil: [[0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0], [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen8/output.soil: {0: 'Booking', 1: 'Customer', 2: 'RoomReservation', 3: 'RoomReservation', 4: 'Bill', 5: 'Bill', 6: 'Room', 7: 'Room', 8: 'Room', 9: 'RoomExtra', 10: 'RoomExtra', 11: 'FreeRoomTypesDTO', 12: 'FreeRoomTypesDTO'}

Edges-gen8/output.soil: [(0, 1, 'BookingCustomer'), (0, 2, 'BookingRoomReservation'), (0, 3, 'BookingRoomReservation'), (4, 2, 'BillRoomReservation'), (5, 3, 'BillRoomReservation'), (0, 4, 'BookingBill'), (0, 5, 'BookingBill'), (2, 6, 'RoomReservationRoom'), (2, 7, 'RoomReservationRoom'), (3, 8, 'RoomReservationRoom'), (3, 9, 'RoomReservationExtras'), (3, 10, 'RoomReservationExtras')]

Adj-gen9/output.soil: [[0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen9/output.soil: {0: 'Booking', 1: 'Customer', 2: 'RoomReservation', 3: 'RoomReservation', 4: 'RoomReservation', 5: 'Room', 6: 'Room', 7: 'Room', 8: 'Room', 9: 'RoomExtra', 10: 'RoomExtra', 11: 'RoomExtra', 12: 'Bill', 13: 'Bill', 14: 'Bill', 15: 'FreeRoomTypesDTO', 16: 'FreeRoomTypesDTO'}

Edges-gen9/output.soil: [(0, 1, 'BookingCustomer'), (0, 2, 'BookingRoomReservation'), (0, 3, 'BookingRoomReservation'), (0, 4, 'BookingRoomReservation'), (2, 5, 'RoomReservationRoom'), (3, 6, 'RoomReservationRoom'), (4, 7, 'RoomReservationRoom'), (4, 8, 'RoomReservationRoom'), (3, 9, 'RoomReservationExtras'), (3, 10, 'RoomReservationExtras'), (2, 11, 'RoomReservationExtras'), (12, 2, 'BillRoomReservation'), (13, 3, 'BillRoomReservation'), (14, 4, 'BillRoomReservation'), (0, 12, 'BookingBill'), (0, 13, 'BookingBill'), (0, 14, 'BookingBill')]

Adj-gen10/output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen10/output.soil: {0: 'Booking', 1: 'Customer', 2: 'RoomReservation', 3: 'RoomReservation', 4: 'Room', 5: 'Room', 6: 'RoomExtra', 7: 'RoomExtra', 8: 'Bill', 9: 'Bill', 10: 'FreeRoomTypesDTO'}

Edges-gen10/output.soil: [(0, 1, 'BookingCustomer'), (0, 2, 'BookingRoomReservation'), (0, 3, 'BookingRoomReservation'), (2, 4, 'RoomReservationRoom'), (2, 5, 'RoomReservationRoom'), (2, 6, 'RoomReservationExtras'), (3, 7, 'RoomReservationExtras'), (8, 2, 'BillRoomReservation'), (9, 3, 'BillRoomReservation'), (0, 8, 'BookingBill'), (0, 9, 'BookingBill')]

Adj-gen11/output.soil: [[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]

Labels-gen11/output.soil: {0: 'Booking', 1: 'Customer', 2: 'FreeRoomTypesDTO', 3: 'FreeRoomTypesDTO'}

Edges-gen11/output.soil: [(0, 1, 'BookingCustomer')]

Adj-gen12/output.soil: [[0, 1, 1, 0, 0, 0, 0, 1, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 1, 1, 1, 1, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen12/output.soil: {0: 'Booking', 1: 'Customer', 2: 'RoomReservation', 3: 'Room', 4: 'Room', 5: 'Room', 6: 'Room', 7: 'Bill', 8: 'FreeRoomTypesDTO'}

Edges-gen12/output.soil: [(0, 1, 'BookingCustomer'), (0, 2, 'BookingRoomReservation'), (2, 3, 'RoomReservationRoom'), (2, 4, 'RoomReservationRoom'), (2, 5, 'RoomReservationRoom'), (2, 6, 'RoomReservationRoom'), (7, 2, 'BillRoomReservation'), (0, 7, 'BookingBill')]

Adj-gen13/output.soil: [[0, 1, 1, 0, 0, 0, 1, 0], [1, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 1, 1, 1, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen13/output.soil: {0: 'Booking', 1: 'Customer', 2: 'RoomReservation', 3: 'Room', 4: 'RoomExtra', 5: 'RoomExtra', 6: 'Bill', 7: 'FreeRoomTypesDTO'}

Edges-gen13/output.soil: [(0, 1, 'BookingCustomer'), (0, 2, 'BookingRoomReservation'), (2, 3, 'RoomReservationRoom'), (2, 4, 'RoomReservationExtras'), (2, 5, 'RoomReservationExtras'), (6, 2, 'BillRoomReservation'), (0, 6, 'BookingBill')]

Adj-gen14/output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen14/output.soil: {0: 'Booking', 1: 'Customer', 2: 'RoomReservation', 3: 'RoomReservation', 4: 'Room', 5: 'RoomExtra', 6: 'RoomExtra', 7: 'RoomExtra', 8: 'RoomExtra', 9: 'Bill', 10: 'Bill', 11: 'FreeRoomTypesDTO', 12: 'FreeRoomTypesDTO'}

Edges-gen14/output.soil: [(0, 1, 'BookingCustomer'), (0, 2, 'BookingRoomReservation'), (0, 3, 'BookingRoomReservation'), (2, 4, 'RoomReservationRoom'), (2, 5, 'RoomReservationExtras'), (2, 6, 'RoomReservationExtras'), (3, 7, 'RoomReservationExtras'), (3, 8, 'RoomReservationExtras'), (9, 2, 'BillRoomReservation'), (10, 3, 'BillRoomReservation'), (0, 9, 'BookingBill'), (0, 10, 'BookingBill')]

Adj-gen15/output.soil: [[0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0], [1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen15/output.soil: {0: 'Booking', 1: 'Customer', 2: 'RoomReservation', 3: 'RoomReservation', 4: 'RoomExtra', 5: 'Room', 6: 'Room', 7: 'Bill', 8: 'Bill', 9: 'FreeRoomTypesDTO', 10: 'FreeRoomTypesDTO'}

Edges-gen15/output.soil: [(0, 1, 'BookingCustomer'), (0, 2, 'BookingRoomReservation'), (0, 3, 'BookingRoomReservation'), (2, 4, 'RoomReservationExtras'), (3, 5, 'RoomReservationRoom'), (3, 6, 'RoomReservationRoom'), (7, 2, 'BillRoomReservation'), (8, 3, 'BillRoomReservation'), (0, 7, 'BookingBill'), (0, 8, 'BookingBill')]

Adj-gen16/output.soil: [[0, 1, 1, 1, 0, 1, 1, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 1, 1, 1], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0]]

Labels-gen16/output.soil: {0: 'Booking', 1: 'Customer', 2: 'RoomReservation', 3: 'RoomReservation', 4: 'RoomExtra', 5: 'Bill', 6: 'Bill', 7: 'Room', 8: 'Room', 9: 'Room'}

Edges-gen16/output.soil: [(0, 1, 'BookingCustomer'), (0, 2, 'BookingRoomReservation'), (0, 3, 'BookingRoomReservation'), (2, 4, 'RoomReservationExtras'), (5, 2, 'BillRoomReservation'), (6, 3, 'BillRoomReservation'), (0, 5, 'BookingBill'), (0, 6, 'BookingBill'), (3, 7, 'RoomReservationRoom'), (3, 8, 'RoomReservationRoom'), (3, 9, 'RoomReservationRoom')]

Adj-gen17/output.soil: [[0, 1, 1, 1, 0, 0, 1, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 0, 1, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0, 1, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen17/output.soil: {0: 'Booking', 1: 'Customer', 2: 'RoomReservation', 3: 'RoomReservation', 4: 'RoomExtra', 5: 'Room', 6: 'Bill', 7: 'Bill', 8: 'FreeRoomTypesDTO', 9: 'FreeRoomTypesDTO'}

Edges-gen17/output.soil: [(0, 1, 'BookingCustomer'), (0, 2, 'BookingRoomReservation'), (0, 3, 'BookingRoomReservation'), (2, 4, 'RoomReservationExtras'), (3, 5, 'RoomReservationRoom'), (6, 2, 'BillRoomReservation'), (7, 3, 'BillRoomReservation'), (0, 6, 'BookingBill'), (0, 7, 'BookingBill')]

Adj-gen18/output.soil: [[0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen18/output.soil: {0: 'Booking', 1: 'Customer', 2: 'RoomReservation', 3: 'Room', 4: 'Room', 5: 'Room', 6: 'Room', 7: 'Room', 8: 'Room', 9: 'RoomExtra', 10: 'RoomExtra', 11: 'RoomExtra', 12: 'RoomExtra', 13: 'Bill', 14: 'FreeRoomTypesDTO'}

Edges-gen18/output.soil: [(0, 1, 'BookingCustomer'), (0, 2, 'BookingRoomReservation'), (2, 3, 'RoomReservationRoom'), (2, 4, 'RoomReservationRoom'), (2, 5, 'RoomReservationRoom'), (2, 6, 'RoomReservationRoom'), (2, 7, 'RoomReservationRoom'), (2, 8, 'RoomReservationRoom'), (2, 9, 'RoomReservationExtras'), (2, 10, 'RoomReservationExtras'), (2, 11, 'RoomReservationExtras'), (2, 12, 'RoomReservationExtras'), (13, 2, 'BillRoomReservation'), (0, 13, 'BookingBill')]

Adj-gen19/output.soil: [[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]

Labels-gen19/output.soil: {0: 'Booking', 1: 'Customer', 2: 'FreeRoomTypesDTO', 3: 'FreeRoomTypesDTO'}

Edges-gen19/output.soil: [(0, 1, 'BookingCustomer')]

Adj-gen20/output.soil: [[0, 1, 1, 0, 1, 0], [1, 0, 0, 0, 0, 0], [1, 0, 0, 1, 1, 0], [0, 0, 1, 0, 0, 0], [1, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0]]

Labels-gen20/output.soil: {0: 'Booking', 1: 'Customer', 2: 'RoomReservation', 3: 'Room', 4: 'Bill', 5: 'FreeRoomTypesDTO'}

Edges-gen20/output.soil: [(0, 1, 'BookingCustomer'), (0, 2, 'BookingRoomReservation'), (2, 3, 'RoomReservationRoom'), (4, 2, 'BillRoomReservation'), (0, 4, 'BookingBill')]

Adj-gen21/output.soil: [[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]

Labels-gen21/output.soil: {0: 'Booking', 1: 'Customer', 2: 'FreeRoomTypesDTO', 3: 'FreeRoomTypesDTO'}

Edges-gen21/output.soil: [(0, 1, 'BookingCustomer')]

Adj-gen22/output.soil: [[0, 1, 1, 0, 0, 0, 1, 0], [1, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 1, 1, 1, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen22/output.soil: {0: 'Booking', 1: 'Customer', 2: 'RoomReservation', 3: 'RoomExtra', 4: 'RoomExtra', 5: 'RoomExtra', 6: 'Bill', 7: 'FreeRoomTypesDTO'}

Edges-gen22/output.soil: [(0, 1, 'BookingCustomer'), (0, 2, 'BookingRoomReservation'), (2, 3, 'RoomReservationExtras'), (2, 4, 'RoomReservationExtras'), (2, 5, 'RoomReservationExtras'), (6, 2, 'BillRoomReservation'), (0, 6, 'BookingBill')]

Adj-gen23/output.soil: [[0, 1, 1, 0, 1, 0], [1, 0, 0, 0, 0, 0], [1, 0, 0, 1, 1, 0], [0, 0, 1, 0, 0, 0], [1, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0]]

Labels-gen23/output.soil: {0: 'Booking', 1: 'Customer', 2: 'RoomReservation', 3: 'Room', 4: 'Bill', 5: 'FreeRoomTypesDTO'}

Edges-gen23/output.soil: [(0, 1, 'BookingCustomer'), (0, 2, 'BookingRoomReservation'), (2, 3, 'RoomReservationRoom'), (4, 2, 'BillRoomReservation'), (0, 4, 'BookingBill')]

Adj-gen24/output.soil: [[0, 1, 1, 1, 0, 0], [1, 0, 0, 0, 0, 0], [1, 0, 0, 1, 0, 0], [1, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]]

Labels-gen24/output.soil: {0: 'Booking', 1: 'Customer', 2: 'RoomReservation', 3: 'Bill', 4: 'FreeRoomTypesDTO', 5: 'FreeRoomTypesDTO'}

Edges-gen24/output.soil: [(0, 1, 'BookingCustomer'), (0, 2, 'BookingRoomReservation'), (3, 2, 'BillRoomReservation'), (0, 3, 'BookingBill')]

Adj-gen25/output.soil: [[0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen25/output.soil: {0: 'Booking', 1: 'Customer', 2: 'RoomReservation', 3: 'RoomReservation', 4: 'RoomReservation', 5: 'Room', 6: 'Room', 7: 'Room', 8: 'RoomExtra', 9: 'RoomExtra', 10: 'Bill', 11: 'Bill', 12: 'Bill', 13: 'FreeRoomTypesDTO', 14: 'FreeRoomTypesDTO'}

Edges-gen25/output.soil: [(0, 1, 'BookingCustomer'), (0, 2, 'BookingRoomReservation'), (0, 3, 'BookingRoomReservation'), (0, 4, 'BookingRoomReservation'), (2, 5, 'RoomReservationRoom'), (3, 6, 'RoomReservationRoom'), (4, 7, 'RoomReservationRoom'), (3, 8, 'RoomReservationExtras'), (4, 9, 'RoomReservationExtras'), (10, 2, 'BillRoomReservation'), (11, 3, 'BillRoomReservation'), (12, 4, 'BillRoomReservation'), (0, 10, 'BookingBill'), (0, 11, 'BookingBill'), (0, 12, 'BookingBill')]

Adj-gen26/output.soil: [[0, 1, 1, 1, 0, 0, 1, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 0, 1, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0, 1, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen26/output.soil: {0: 'Booking', 1: 'Customer', 2: 'RoomReservation', 3: 'RoomReservation', 4: 'Room', 5: 'Room', 6: 'Bill', 7: 'Bill', 8: 'FreeRoomTypesDTO', 9: 'FreeRoomTypesDTO'}

Edges-gen26/output.soil: [(0, 1, 'BookingCustomer'), (0, 2, 'BookingRoomReservation'), (0, 3, 'BookingRoomReservation'), (2, 4, 'RoomReservationRoom'), (3, 5, 'RoomReservationRoom'), (6, 2, 'BillRoomReservation'), (7, 3, 'BillRoomReservation'), (0, 6, 'BookingBill'), (0, 7, 'BookingBill')]

Adj-gen27/output.soil: [[0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0], [1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen27/output.soil: {0: 'Booking', 1: 'Customer', 2: 'RoomReservation', 3: 'RoomReservation', 4: 'RoomExtra', 5: 'Room', 6: 'Room', 7: 'Bill', 8: 'Bill', 9: 'FreeRoomTypesDTO', 10: 'FreeRoomTypesDTO'}

Edges-gen27/output.soil: [(0, 1, 'BookingCustomer'), (0, 2, 'BookingRoomReservation'), (0, 3, 'BookingRoomReservation'), (2, 4, 'RoomReservationExtras'), (3, 5, 'RoomReservationRoom'), (3, 6, 'RoomReservationRoom'), (7, 2, 'BillRoomReservation'), (8, 3, 'BillRoomReservation'), (0, 7, 'BookingBill'), (0, 8, 'BookingBill')]

Adj-gen28/output.soil: [[0, 1, 1, 0, 1, 0], [1, 0, 0, 0, 0, 0], [1, 0, 0, 1, 1, 0], [0, 0, 1, 0, 0, 0], [1, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0]]

Labels-gen28/output.soil: {0: 'Booking', 1: 'Customer', 2: 'RoomReservation', 3: 'Room', 4: 'Bill', 5: 'FreeRoomTypesDTO'}

Edges-gen28/output.soil: [(0, 1, 'BookingCustomer'), (0, 2, 'BookingRoomReservation'), (2, 3, 'RoomReservationRoom'), (4, 2, 'BillRoomReservation'), (0, 4, 'BookingBill')]

Adj-gen29/output.soil: [[0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen29/output.soil: {0: 'Booking', 1: 'Customer', 2: 'RoomReservation', 3: 'RoomReservation', 4: 'RoomReservation', 5: 'RoomReservation', 6: 'Room', 7: 'Room', 8: 'Room', 9: 'Room', 10: 'Room', 11: 'Room', 12: 'RoomExtra', 13: 'RoomExtra', 14: 'RoomExtra', 15: 'RoomExtra', 16: 'Bill', 17: 'Bill', 18: 'Bill', 19: 'Bill', 20: 'FreeRoomTypesDTO', 21: 'FreeRoomTypesDTO'}

Edges-gen29/output.soil: [(0, 1, 'BookingCustomer'), (0, 2, 'BookingRoomReservation'), (0, 3, 'BookingRoomReservation'), (0, 4, 'BookingRoomReservation'), (0, 5, 'BookingRoomReservation'), (2, 6, 'RoomReservationRoom'), (2, 7, 'RoomReservationRoom'), (3, 8, 'RoomReservationRoom'), (4, 9, 'RoomReservationRoom'), (5, 10, 'RoomReservationRoom'), (5, 11, 'RoomReservationRoom'), (2, 12, 'RoomReservationExtras'), (2, 13, 'RoomReservationExtras'), (4, 14, 'RoomReservationExtras'), (5, 15, 'RoomReservationExtras'), (16, 2, 'BillRoomReservation'), (17, 3, 'BillRoomReservation'), (18, 4, 'BillRoomReservation'), (19, 5, 'BillRoomReservation'), (0, 16, 'BookingBill'), (0, 17, 'BookingBill'), (0, 18, 'BookingBill'), (0, 19, 'BookingBill')]

Adj-gen30/output.soil: [[0, 1, 1, 1, 0, 0, 0, 1, 1, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 1, 0, 1, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen30/output.soil: {0: 'Booking', 1: 'Customer', 2: 'RoomReservation', 3: 'RoomReservation', 4: 'Room', 5: 'Room', 6: 'RoomExtra', 7: 'Bill', 8: 'Bill', 9: 'FreeRoomTypesDTO'}

Edges-gen30/output.soil: [(0, 1, 'BookingCustomer'), (0, 2, 'BookingRoomReservation'), (0, 3, 'BookingRoomReservation'), (2, 4, 'RoomReservationRoom'), (2, 5, 'RoomReservationRoom'), (3, 6, 'RoomReservationExtras'), (7, 2, 'BillRoomReservation'), (8, 3, 'BillRoomReservation'), (0, 7, 'BookingBill'), (0, 8, 'BookingBill')]

```

# GED Matrix

```json
[[0.0, 16.0, 19.0, 27.0, 13.0, 35.0, 28.0, 16.0, 13.0, 19.0, 36.0, 28.0, 26.0, 18.0, 20.0, 22.0, 22.0, 29.0, 36.0, 30.0, 36.0, 28.0, 30.0, 31.0, 15.0, 22.0, 20.0, 30.0, 16.0, 21.0], [16.0, 0.0, 5.0, 13.0, 11.0, 22.0, 14.0, 4.0, 9.0, 5.0, 22.0, 14.0, 12.0, 4.0, 6.0, 8.0, 8.0, 15.0, 22.0, 16.0, 22.0, 14.0, 16.0, 17.0, 8.0, 8.0, 6.0, 16.0, 18.0, 7.0], [19.0, 5.0, 0.0, 11.0, 15.0, 18.0, 11.0, 3.0, 12.0, 4.0, 18.0, 11.0, 7.0, 5.0, 6.0, 7.0, 4.0, 17.0, 18.0, 11.0, 18.0, 9.0, 11.0, 13.0, 10.0, 4.0, 6.0, 11.0, 23.0, 4.0], [27.0, 13.0, 11.0, 0.0, 24.0, 9.0, 2.0, 11.0, 20.0, 9.0, 9.0, 4.0, 4.0, 13.0, 7.0, 9.0, 8.0, 16.0, 9.0, 3.0, 9.0, 6.0, 3.0, 4.0, 18.0, 7.0, 7.0, 3.0, 31.0, 7.0], [13.0, 11.0, 15.0, 24.0, 0.0, 33.0, 24.0, 13.0, 4.0, 15.0, 33.0, 24.0, 22.0, 15.0, 17.0, 18.0, 19.0, 21.0, 33.0, 26.0, 33.0, 24.0, 26.0, 28.0, 8.0, 19.0, 17.0, 26.0, 8.0, 17.0], [35.0, 22.0, 18.0, 9.0, 33.0, 0.0, 11.0, 20.0, 29.0, 18.0, 1.0, 13.0, 11.0, 20.0, 16.0, 18.0, 14.0, 25.0, 1.0, 7.0, 1.0, 11.0, 7.0, 5.0, 25.0, 14.0, 16.0, 7.0, 40.0, 16.0], [28.0, 14.0, 11.0, 2.0, 24.0, 11.0, 0.0, 12.0, 23.0, 9.0, 11.0, 2.0, 4.0, 14.0, 9.0, 7.0, 10.0, 14.0, 11.0, 4.0, 11.0, 6.0, 4.0, 6.0, 19.0, 9.0, 9.0, 4.0, 32.0, 8.0], [16.0, 4.0, 3.0, 11.0, 13.0, 20.0, 12.0, 0.0, 9.0, 5.0, 20.0, 13.0, 10.0, 4.0, 4.0, 6.0, 6.0, 17.0, 20.0, 14.0, 20.0, 12.0, 14.0, 15.0, 9.0, 6.0, 4.0, 14.0, 20.0, 5.0], [13.0, 9.0, 12.0, 20.0, 4.0, 29.0, 23.0, 9.0, 0.0, 14.0, 29.0, 23.0, 19.0, 11.0, 13.0, 15.0, 15.0, 22.0, 29.0, 23.0, 29.0, 21.0, 23.0, 24.0, 4.0, 15.0, 13.0, 23.0, 11.0, 14.0], [19.0, 5.0, 4.0, 9.0, 15.0, 18.0, 9.0, 5.0, 14.0, 0.0, 18.0, 10.0, 9.0, 5.0, 2.0, 3.0, 4.0, 17.0, 18.0, 11.0, 18.0, 11.0, 11.0, 13.0, 10.0, 6.0, 2.0, 11.0, 23.0, 2.0], [36.0, 22.0, 18.0, 9.0, 33.0, 1.0, 11.0, 20.0, 29.0, 18.0, 0.0, 13.0, 11.0, 20.0, 16.0, 18.0, 14.0, 25.0, 0.0, 7.0, 0.0, 11.0, 7.0, 5.0, 25.0, 14.0, 16.0, 7.0, 40.0, 16.0], [28.0, 14.0, 11.0, 4.0, 24.0, 13.0, 2.0, 13.0, 23.0, 10.0, 13.0, 0.0, 6.0, 15.0, 10.0, 8.0, 11.0, 12.0, 13.0, 6.0, 13.0, 8.0, 6.0, 8.0, 19.0, 10.0, 10.0, 6.0, 32.0, 9.0], [26.0, 12.0, 7.0, 4.0, 22.0, 11.0, 4.0, 10.0, 19.0, 9.0, 11.0, 6.0, 0.0, 10.0, 10.0, 11.0, 9.0, 14.0, 11.0, 4.0, 11.0, 2.0, 4.0, 6.0, 17.0, 10.0, 10.0, 4.0, 30.0, 9.0], [18.0, 4.0, 5.0, 13.0, 15.0, 20.0, 14.0, 4.0, 11.0, 5.0, 20.0, 15.0, 10.0, 0.0, 6.0, 8.0, 6.0, 17.0, 20.0, 14.0, 20.0, 12.0, 14.0, 15.0, 10.0, 8.0, 6.0, 14.0, 22.0, 7.0], [20.0, 6.0, 6.0, 7.0, 17.0, 16.0, 9.0, 4.0, 13.0, 2.0, 16.0, 10.0, 10.0, 6.0, 0.0, 3.0, 2.0, 19.0, 16.0, 10.0, 16.0, 12.0, 10.0, 11.0, 11.0, 4.0, 0.0, 10.0, 24.0, 1.0], [22.0, 8.0, 7.0, 9.0, 18.0, 18.0, 7.0, 6.0, 15.0, 3.0, 18.0, 8.0, 11.0, 8.0, 3.0, 0.0, 4.0, 18.0, 18.0, 11.0, 18.0, 13.0, 11.0, 13.0, 13.0, 6.0, 3.0, 11.0, 26.0, 2.0], [22.0, 8.0, 4.0, 8.0, 19.0, 14.0, 10.0, 6.0, 15.0, 4.0, 14.0, 11.0, 9.0, 6.0, 2.0, 4.0, 0.0, 21.0, 14.0, 8.0, 14.0, 10.0, 8.0, 9.0, 11.0, 2.0, 2.0, 8.0, 26.0, 2.0], [29.0, 15.0, 17.0, 16.0, 21.0, 25.0, 14.0, 17.0, 22.0, 17.0, 25.0, 12.0, 14.0, 17.0, 19.0, 18.0, 21.0, 0.0, 25.0, 18.0, 25.0, 14.0, 18.0, 20.0, 22.0, 21.0, 19.0, 18.0, 28.0, 19.0], [36.0, 22.0, 18.0, 9.0, 33.0, 1.0, 11.0, 20.0, 29.0, 18.0, 0.0, 13.0, 11.0, 20.0, 16.0, 18.0, 14.0, 25.0, 0.0, 7.0, 0.0, 11.0, 7.0, 5.0, 25.0, 14.0, 16.0, 7.0, 40.0, 16.0], [30.0, 16.0, 11.0, 3.0, 26.0, 7.0, 4.0, 14.0, 23.0, 11.0, 7.0, 6.0, 4.0, 14.0, 10.0, 11.0, 8.0, 18.0, 7.0, 0.0, 7.0, 6.0, 0.0, 2.0, 19.0, 8.0, 10.0, 0.0, 34.0, 9.0], [36.0, 22.0, 18.0, 9.0, 33.0, 1.0, 11.0, 20.0, 29.0, 18.0, 0.0, 13.0, 11.0, 20.0, 16.0, 18.0, 14.0, 25.0, 0.0, 7.0, 0.0, 11.0, 7.0, 5.0, 25.0, 14.0, 16.0, 7.0, 40.0, 16.0], [28.0, 14.0, 9.0, 6.0, 24.0, 11.0, 6.0, 12.0, 21.0, 11.0, 11.0, 8.0, 2.0, 12.0, 12.0, 13.0, 10.0, 14.0, 11.0, 6.0, 11.0, 0.0, 6.0, 6.0, 19.0, 12.0, 12.0, 6.0, 32.0, 11.0], [30.0, 16.0, 11.0, 3.0, 26.0, 7.0, 4.0, 14.0, 23.0, 11.0, 7.0, 6.0, 4.0, 14.0, 10.0, 11.0, 8.0, 18.0, 7.0, 0.0, 7.0, 6.0, 0.0, 2.0, 19.0, 8.0, 10.0, 0.0, 34.0, 9.0], [31.0, 17.0, 13.0, 4.0, 28.0, 5.0, 6.0, 15.0, 24.0, 13.0, 5.0, 8.0, 6.0, 15.0, 11.0, 13.0, 9.0, 20.0, 5.0, 2.0, 5.0, 6.0, 2.0, 0.0, 20.0, 9.0, 11.0, 2.0, 35.0, 11.0], [15.0, 8.0, 10.0, 18.0, 8.0, 25.0, 19.0, 9.0, 4.0, 10.0, 25.0, 19.0, 17.0, 10.0, 11.0, 13.0, 11.0, 22.0, 25.0, 19.0, 25.0, 19.0, 19.0, 20.0, 0.0, 11.0, 11.0, 19.0, 15.0, 12.0], [22.0, 8.0, 4.0, 7.0, 19.0, 14.0, 9.0, 6.0, 15.0, 6.0, 14.0, 10.0, 10.0, 8.0, 4.0, 6.0, 2.0, 21.0, 14.0, 8.0, 14.0, 12.0, 8.0, 9.0, 11.0, 0.0, 4.0, 8.0, 26.0, 4.0], [20.0, 6.0, 6.0, 7.0, 17.0, 16.0, 9.0, 4.0, 13.0, 2.0, 16.0, 10.0, 10.0, 6.0, 0.0, 3.0, 2.0, 19.0, 16.0, 10.0, 16.0, 12.0, 10.0, 11.0, 11.0, 4.0, 0.0, 10.0, 24.0, 1.0], [30.0, 16.0, 11.0, 3.0, 26.0, 7.0, 4.0, 14.0, 23.0, 11.0, 7.0, 6.0, 4.0, 14.0, 10.0, 11.0, 8.0, 18.0, 7.0, 0.0, 7.0, 6.0, 0.0, 2.0, 19.0, 8.0, 10.0, 0.0, 34.0, 9.0], [16.0, 18.0, 23.0, 31.0, 8.0, 40.0, 32.0, 20.0, 11.0, 23.0, 40.0, 32.0, 30.0, 22.0, 24.0, 26.0, 26.0, 28.0, 40.0, 34.0, 40.0, 32.0, 34.0, 35.0, 15.0, 26.0, 24.0, 34.0, 0.0, 25.0], [21.0, 7.0, 4.0, 7.0, 17.0, 16.0, 8.0, 5.0, 14.0, 2.0, 16.0, 9.0, 9.0, 7.0, 1.0, 2.0, 2.0, 19.0, 16.0, 9.0, 16.0, 11.0, 9.0, 11.0, 12.0, 4.0, 1.0, 9.0, 25.0, 0.0]]
```

Each cell is the cost of a concrete edit path found by the bipartite assignment (BP), IPFP, and REFINE local search, so it is an upper bound on the exact GED. The interval table pairs it with the BRANCH lower bound. A cell is `exact` when both bounds coincide.

# GED value table (upper bound)

|       | gen1/output | gen2/output | gen3/output | gen4/output | gen5/output | gen6/output | gen7/output | gen8/output | gen9/output | gen10/output | gen11/output | gen12/output | gen13/output | gen14/output | gen15/output | gen16/output | gen17/output | gen18/output | gen19/output | gen20/output | gen21/output | gen22/output | gen23/output | gen24/output | gen25/output | gen26/output | gen27/output | gen28/output | gen29/output | gen30/output |
|-------|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **gen1/output** | 0.000000 | 16.000000 | 19.000000 | 27.000000 | 13.000000 | 35.000000 | 28.000000 | 16.000000 | 13.000000 | 19.000000 | 36.000000 | 28.000000 | 26.000000 | 18.000000 | 20.000000 | 22.000000 | 22.000000 | 29.000000 | 36.000000 | 30.000000 | 36.000000 | 28.000000 | 30.000000 | 31.000000 | 15.000000 | 22.000000 | 20.000000 | 30.000000 | 16.000000 | 21.000000 |
| **gen2/output** |  | 0.000000 | 5.000000 | 13.000000 | 11.000000 | 22.000000 | 14.000000 | 4.000000 | 9.000000 | 5.000000 | 22.000000 | 14.000000 | 12.000000 | 4.000000 | 6.000000 | 8.000000 | 8.000000 | 15.000000 | 22.000000 | 16.000000 | 22.000000 | 14.000000 | 16.000000 | 17.000000 | 8.000000 | 8.000000 | 6.000000 | 16.000000 | 18.000000 | 7.000000 |
| **gen3/output** |  |  | 0.000000 | 11.000000 | 15.000000 | 18.000000 | 11.000000 | 3.000000 | 12.000000 | 4.000000 | 18.000000 | 11.000000 | 7.000000 | 5.000000 | 6.000000 | 7.000000 | 4.000000 | 17.000000 | 18.000000 | 11.000000 | 18.000000 | 9.000000 | 11.000000 | 13.000000 | 10.000000 | 4.000000 | 6.000000 | 11.000000 | 23.000000 | 4.000000 |
| **gen4/output** |  |  |  | 0.000000 | 24.000000 | 9.000000 | 2.000000 | 11.000000 | 20.000000 | 9.000000 | 9.000000 | 4.000000 | 4.000000 | 13.000000 | 7.000000 | 9.000000 | 8.000000 | 16.000000 | 9.000000 | 3.000000 | 9.000000 | 6.000000 | 3.000000 | 4.000000 | 18.000000 | 7.000000 | 7.000000 | 3.000000 | 31.000000 | 7.000000 |
| **gen5/output** |  |  |  |  | 0.000000 | 33.000000 | 24.000000 | 13.000000 | 4.000000 | 15.000000 | 33.000000 | 24.000000 | 22.000000 | 15.000000 | 17.000000 | 18.000000 | 19.000000 | 21.000000 | 33.000000 | 26.000000 | 33.000000 | 24.000000 | 26.000000 | 28.000000 | 8.000000 | 19.000000 | 17.000000 | 26.000000 | 8.000000 | 17.000000 |
| **gen6/output** |  |  |  |  |  | 0.000000 | 11.000000 | 20.000000 | 29.000000 | 18.000000 | 1.000000 | 13.000000 | 11.000000 | 20.000000 | 16.000000 | 18.000000 | 14.000000 | 25.000000 | 1.000000 | 7.000000 | 1.000000 | 11.000000 | 7.000000 | 5.000000 | 25.000000 | 14.000000 | 16.000000 | 7.000000 | 40.000000 | 16.000000 |
| **gen7/output** |  |  |  |  |  |  | 0.000000 | 12.000000 | 23.000000 | 9.000000 | 11.000000 | 2.000000 | 4.000000 | 14.000000 | 9.000000 | 7.000000 | 10.000000 | 14.000000 | 11.000000 | 4.000000 | 11.000000 | 6.000000 | 4.000000 | 6.000000 | 19.000000 | 9.000000 | 9.000000 | 4.000000 | 32.000000 | 8.000000 |
| **gen8/output** |  |  |  |  |  |  |  | 0.000000 | 9.000000 | 5.000000 | 20.000000 | 13.000000 | 10.000000 | 4.000000 | 4.000000 | 6.000000 | 6.000000 | 17.000000 | 20.000000 | 14.000000 | 20.000000 | 12.000000 | 14.000000 | 15.000000 | 9.000000 | 6.000000 | 4.000000 | 14.000000 | 20.000000 | 5.000000 |
| **gen9/output** |  |  |  |  |  |  |  |  | 0.000000 | 14.000000 | 29.000000 | 23.000000 | 19.000000 | 11.000000 | 13.000000 | 15.000000 | 15.000000 | 22.000000 | 29.000000 | 23.000000 | 29.000000 | 21.000000 | 23.000000 | 24.000000 | 4.000000 | 15.000000 | 13.000000 | 23.000000 | 11.000000 | 14.000000 |
| **gen10/output** |  |  |  |  |  |  |  |  |  | 0.000000 | 18.000000 | 10.000000 | 9.000000 | 5.000000 | 2.000000 | 3.000000 | 4.000000 | 17.000000 | 18.000000 | 11.000000 | 18.000000 | 11.000000 | 11.000000 | 13.000000 | 10.000000 | 6.000000 | 2.000000 | 11.000000 | 23.000000 | 2.000000 |
| **gen11/output** |  |  |  |  |  |  |  |  |  |  | 0.000000 | 13.000000 | 11.000000 | 20.000000 | 16.000000 | 18.000000 | 14.000000 | 25.000000 | 0.000000 | 7.000000 | 0.000000 | 11.000000 | 7.000000 | 5.000000 | 25.000000 | 14.000000 | 16.000000 | 7.000000 | 40.000000 | 16.000000 |
| **gen12/output** |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 6.000000 | 15.000000 | 10.000000 | 8.000000 | 11.000000 | 12.000000 | 13.000000 | 6.000000 | 13.000000 | 8.000000 | 6.000000 | 8.000000 | 19.000000 | 10.000000 | 10.000000 | 6.000000 | 32.000000 | 9.000000 |
| **gen13/output** |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 10.000000 | 10.000000 | 11.000000 | 9.000000 | 14.000000 | 11.000000 | 4.000000 | 11.000000 | 2.000000 | 4.000000 | 6.000000 | 17.000000 | 10.000000 | 10.000000 | 4.000000 | 30.000000 | 9.000000 |
| **gen14/output** |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 6.000000 | 8.000000 | 6.000000 | 17.000000 | 20.000000 | 14.000000 | 20.000000 | 12.000000 | 14.000000 | 15.000000 | 10.000000 | 8.000000 | 6.000000 | 14.000000 | 22.000000 | 7.000000 |
| **gen15/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 3.000000 | 2.000000 | 19.000000 | 16.000000 | 10.000000 | 16.000000 | 12.000000 | 10.000000 | 11.000000 | 11.000000 | 4.000000 | 0.000000 | 10.000000 | 24.000000 | 1.000000 |
| **gen16/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 4.000000 | 18.000000 | 18.000000 | 11.000000 | 18.000000 | 13.000000 | 11.000000 | 13.000000 | 13.000000 | 6.000000 | 3.000000 | 11.000000 | 26.000000 | 2.000000 |
| **gen17/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 21.000000 | 14.000000 | 8.000000 | 14.000000 | 10.000000 | 8.000000 | 9.000000 | 11.000000 | 2.000000 | 2.000000 | 8.000000 | 26.000000 | 2.000000 |
| **gen18/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 25.000000 | 18.000000 | 25.000000 | 14.000000 | 18.000000 | 20.000000 | 22.000000 | 21.000000 | 19.000000 | 18.000000 | 28.000000 | 19.000000 |
| **gen19/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 7.000000 | 0.000000 | 11.000000 | 7.000000 | 5.000000 | 25.000000 | 14.000000 | 16.000000 | 7.000000 | 40.000000 | 16.000000 |
| **gen20/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 7.000000 | 6.000000 | 0.000000 | 2.000000 | 19.000000 | 8.000000 | 10.000000 | 0.000000 | 34.000000 | 9.000000 |
| **gen21/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 11.000000 | 7.000000 | 5.000000 | 25.000000 | 14.000000 | 16.000000 | 7.000000 | 40.000000 | 16.000000 |
| **gen22/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 6.000000 | 6.000000 | 19.000000 | 12.000000 | 12.000000 | 6.000000 | 32.000000 | 11.000000 |
| **gen23/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 2.000000 | 19.000000 | 8.000000 | 10.000000 | 0.000000 | 34.000000 | 9.000000 |
| **gen24/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 20.000000 | 9.000000 | 11.000000 | 2.000000 | 35.000000 | 11.000000 |
| **gen25/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 11.000000 | 11.000000 | 19.000000 | 15.000000 | 12.000000 |
| **gen26/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 4.000000 | 8.000000 | 26.000000 | 4.000000 |
| **gen27/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 10.000000 | 24.000000 | 1.000000 |
| **gen28/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 34.000000 | 9.000000 |
| **gen29/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 25.000000 |
| **gen30/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 |

# GED bound interval table

A single value is exact; `[lower, upper]` is the certified interval.

|       | gen1/output | gen2/output | gen3/output | gen4/output | gen5/output | gen6/output | gen7/output | gen8/output | gen9/output | gen10/output | gen11/output | gen12/output | gen13/output | gen14/output | gen15/output | gen16/output | gen17/output | gen18/output | gen19/output | gen20/output | gen21/output | gen22/output | gen23/output | gen24/output | gen25/output | gen26/output | gen27/output | gen28/output | gen29/output | gen30/output |
|-------|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **gen1/output** | 0.000000 | [15.000000, 16.000000] | 19.000000 | 27.000000 | [11.000000, 13.000000] | 35.000000 | [26.500000, 28.000000] | 16.000000 | [10.000000, 13.000000] | 19.000000 | 36.000000 | [25.500000, 28.000000] | 26.000000 | 18.000000 | 20.000000 | [20.500000, 22.000000] | 22.000000 | [22.500000, 29.000000] | 36.000000 | 30.000000 | 36.000000 | [26.500000, 28.000000] | 30.000000 | 31.000000 | [13.000000, 15.000000] | 22.000000 | 20.000000 | 30.000000 | [11.500000, 16.000000] | 21.000000 |
| **gen2/output** |  | 0.000000 | 5.000000 | 13.000000 | 11.000000 | 22.000000 | [12.500000, 14.000000] | [2.500000, 4.000000] | [8.000000, 9.000000] | 5.000000 | 22.000000 | [12.000000, 14.000000] | 12.000000 | 4.000000 | 6.000000 | [6.500000, 8.000000] | 8.000000 | [11.500000, 15.000000] | 22.000000 | 16.000000 | 22.000000 | [12.500000, 14.000000] | 16.000000 | 17.000000 | [6.500000, 8.000000] | 8.000000 | 6.000000 | 16.000000 | 18.000000 | 7.000000 |
| **gen3/output** |  |  | 0.000000 | [9.500000, 11.000000] | 15.000000 | 18.000000 | [9.000000, 11.000000] | 3.000000 | 12.000000 | [1.000000, 4.000000] | 18.000000 | [9.500000, 11.000000] | 7.000000 | 5.000000 | [3.000000, 6.000000] | [4.000000, 7.000000] | 4.000000 | [14.500000, 17.000000] | 18.000000 | 11.000000 | 18.000000 | 9.000000 | 11.000000 | 13.000000 | [9.000000, 10.000000] | 4.000000 | [3.000000, 6.000000] | 11.000000 | 23.000000 | [3.000000, 4.000000] |
| **gen4/output** |  |  |  | 0.000000 | 24.000000 | 9.000000 | 2.000000 | 11.000000 | 20.000000 | 9.000000 | 9.000000 | 4.000000 | 4.000000 | 13.000000 | 7.000000 | 9.000000 | [7.500000, 8.000000] | 16.000000 | 9.000000 | 3.000000 | 9.000000 | 6.000000 | 3.000000 | 4.000000 | [16.500000, 18.000000] | [6.000000, 7.000000] | 7.000000 | 3.000000 | 31.000000 | 7.000000 |
| **gen5/output** |  |  |  |  | 0.000000 | 33.000000 | [22.500000, 24.000000] | 13.000000 | 4.000000 | 15.000000 | 33.000000 | [21.000000, 24.000000] | 22.000000 | [13.500000, 15.000000] | 17.000000 | [16.500000, 18.000000] | 19.000000 | [15.000000, 21.000000] | 33.000000 | 26.000000 | 33.000000 | [22.500000, 24.000000] | 26.000000 | 28.000000 | 8.000000 | 19.000000 | 17.000000 | 26.000000 | 8.000000 | 17.000000 |
| **gen6/output** |  |  |  |  |  | 0.000000 | 11.000000 | 20.000000 | 29.000000 | 18.000000 | 1.000000 | 13.000000 | 11.000000 | 20.000000 | 16.000000 | 18.000000 | 14.000000 | 25.000000 | 1.000000 | 7.000000 | 1.000000 | 11.000000 | 7.000000 | 5.000000 | 25.000000 | 14.000000 | 16.000000 | 7.000000 | 40.000000 | 16.000000 |
| **gen7/output** |  |  |  |  |  |  | 0.000000 | [11.000000, 12.000000] | [20.000000, 23.000000] | 9.000000 | 11.000000 | 2.000000 | 4.000000 | 14.000000 | [8.500000, 9.000000] | 7.000000 | [9.000000, 10.000000] | 14.000000 | 11.000000 | 4.000000 | 11.000000 | 6.000000 | 4.000000 | 6.000000 | [16.500000, 19.000000] | [7.000000, 9.000000] | [8.500000, 9.000000] | 4.000000 | [30.500000, 32.000000] | [7.500000, 8.000000] |
| **gen8/output** |  |  |  |  |  |  |  | 0.000000 | 9.000000 | [4.000000, 5.000000] | 20.000000 | [11.000000, 13.000000] | 10.000000 | 4.000000 | 4.000000 | [5.000000, 6.000000] | 6.000000 | [13.500000, 17.000000] | 20.000000 | 14.000000 | 20.000000 | 12.000000 | 14.000000 | 15.000000 | [6.500000, 9.000000] | 6.000000 | 4.000000 | 14.000000 | 20.000000 | 5.000000 |
| **gen9/output** |  |  |  |  |  |  |  |  | 0.000000 | [12.500000, 14.000000] | 29.000000 | [19.000000, 23.000000] | 19.000000 | 11.000000 | 13.000000 | [14.000000, 15.000000] | 15.000000 | [15.500000, 22.000000] | 29.000000 | 23.000000 | 29.000000 | [19.500000, 21.000000] | 23.000000 | 24.000000 | 4.000000 | 15.000000 | 13.000000 | 23.000000 | 11.000000 | 14.000000 |
| **gen10/output** |  |  |  |  |  |  |  |  |  | 0.000000 | 18.000000 | [9.500000, 10.000000] | [7.500000, 9.000000] | 5.000000 | 2.000000 | 3.000000 | 4.000000 | [14.500000, 17.000000] | 18.000000 | 11.000000 | 18.000000 | [9.000000, 11.000000] | 11.000000 | 13.000000 | [9.000000, 10.000000] | [4.500000, 6.000000] | 2.000000 | 11.000000 | 23.000000 | 2.000000 |
| **gen11/output** |  |  |  |  |  |  |  |  |  |  | 0.000000 | 13.000000 | 11.000000 | 20.000000 | 16.000000 | 18.000000 | 14.000000 | 25.000000 | 0.000000 | 7.000000 | 0.000000 | 11.000000 | 7.000000 | 5.000000 | 25.000000 | 14.000000 | 16.000000 | 7.000000 | 40.000000 | 16.000000 |
| **gen12/output** |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 6.000000 | [14.500000, 15.000000] | [9.000000, 10.000000] | [7.500000, 8.000000] | [9.500000, 11.000000] | 12.000000 | 13.000000 | 6.000000 | 13.000000 | 8.000000 | 6.000000 | 8.000000 | [16.500000, 19.000000] | [7.500000, 10.000000] | [9.000000, 10.000000] | 6.000000 | [29.000000, 32.000000] | [8.000000, 9.000000] |
| **gen13/output** |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 10.000000 | [8.500000, 10.000000] | [9.000000, 11.000000] | [7.000000, 9.000000] | 14.000000 | 11.000000 | 4.000000 | 11.000000 | 2.000000 | 4.000000 | 6.000000 | [16.000000, 17.000000] | [9.000000, 10.000000] | [8.500000, 10.000000] | 4.000000 | 30.000000 | [7.500000, 9.000000] |
| **gen14/output** |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 6.000000 | 8.000000 | 6.000000 | [14.000000, 17.000000] | 20.000000 | 14.000000 | 20.000000 | [10.500000, 12.000000] | 14.000000 | 15.000000 | [9.500000, 10.000000] | 8.000000 | 6.000000 | 14.000000 | [20.500000, 22.000000] | 7.000000 |
| **gen15/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 3.000000 | 2.000000 | [16.500000, 19.000000] | 16.000000 | 10.000000 | 16.000000 | [10.500000, 12.000000] | 10.000000 | 11.000000 | [9.500000, 11.000000] | [2.500000, 4.000000] | 0.000000 | 10.000000 | 24.000000 | 1.000000 |
| **gen16/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 4.000000 | [15.500000, 18.000000] | 18.000000 | 11.000000 | 18.000000 | [11.000000, 13.000000] | 11.000000 | 13.000000 | [10.500000, 13.000000] | [4.500000, 6.000000] | 3.000000 | 11.000000 | [24.500000, 26.000000] | 2.000000 |
| **gen17/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | [18.500000, 21.000000] | 14.000000 | 8.000000 | 14.000000 | [9.000000, 10.000000] | 8.000000 | 9.000000 | 11.000000 | 2.000000 | 2.000000 | 8.000000 | 26.000000 | 2.000000 |
| **gen18/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 25.000000 | 18.000000 | 25.000000 | 14.000000 | 18.000000 | 20.000000 | [16.000000, 22.000000] | [18.500000, 21.000000] | [16.500000, 19.000000] | 18.000000 | [22.000000, 28.000000] | [16.500000, 19.000000] |
| **gen19/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 7.000000 | 0.000000 | 11.000000 | 7.000000 | 5.000000 | 25.000000 | 14.000000 | 16.000000 | 7.000000 | 40.000000 | 16.000000 |
| **gen20/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 7.000000 | 6.000000 | 0.000000 | 2.000000 | 19.000000 | 8.000000 | 10.000000 | 0.000000 | 34.000000 | 9.000000 |
| **gen21/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 11.000000 | 7.000000 | 5.000000 | 25.000000 | 14.000000 | 16.000000 | 7.000000 | 40.000000 | 16.000000 |
| **gen22/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 6.000000 | 6.000000 | [17.500000, 19.000000] | [11.000000, 12.000000] | [10.500000, 12.000000] | 6.000000 | [30.500000, 32.000000] | [9.500000, 11.000000] |
| **gen23/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 2.000000 | 19.000000 | 8.000000 | 10.000000 | 0.000000 | 34.000000 | 9.000000 |
| **gen24/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 20.000000 | 9.000000 | 11.000000 | 2.000000 | 35.000000 | 11.000000 |
| **gen25/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 11.000000 | [9.500000, 11.000000] | 19.000000 | 15.000000 | [10.500000, 12.000000] |
| **gen26/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | [2.500000, 4.000000] | 8.000000 | 26.000000 | [2.500000, 4.000000] |
| **gen27/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 10.000000 | 24.000000 | 1.000000 |
| **gen28/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 34.000000 | 9.000000 |
| **gen29/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 25.000000 |
| **gen30/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 |

# Normalized GED diversity table

Diversity(A, B) = GED(A, B) / (GED(A, empty) + GED(B, empty)); the both-empty case is 0. Zero denotes identical labeled graphs, and higher values denote greater structural diversity.

|       | gen1/output | gen2/output | gen3/output | gen4/output | gen5/output | gen6/output | gen7/output | gen8/output | gen9/output | gen10/output | gen11/output | gen12/output | gen13/output | gen14/output | gen15/output | gen16/output | gen17/output | gen18/output | gen19/output | gen20/output | gen21/output | gen22/output | gen23/output | gen24/output | gen25/output | gen26/output | gen27/output | gen28/output | gen29/output | gen30/output |
|-------|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **gen1/output** | 0.000000 | 0.235294 | 0.301587 | 0.490909 | 0.166667 | 0.744681 | 0.500000 | 0.242424 | 0.173333 | 0.301587 | 0.782609 | 0.482759 | 0.464286 | 0.272727 | 0.322581 | 0.354839 | 0.366667 | 0.414286 | 0.782609 | 0.576923 | 0.782609 | 0.500000 | 0.576923 | 0.607843 | 0.211268 | 0.366667 | 0.322581 | 0.576923 | 0.186047 | 0.344262 |
| **gen2/output** |  | 0.000000 | 0.102041 | 0.317073 | 0.171875 | 0.666667 | 0.333333 | 0.076923 | 0.147541 | 0.102041 | 0.687500 | 0.318182 | 0.285714 | 0.076923 | 0.125000 | 0.166667 | 0.173913 | 0.267857 | 0.687500 | 0.421053 | 0.687500 | 0.333333 | 0.421053 | 0.459459 | 0.140351 | 0.173913 | 0.125000 | 0.421053 | 0.250000 | 0.148936 |
| **gen3/output** |  |  | 0.000000 | 0.305556 | 0.254237 | 0.642857 | 0.297297 | 0.063830 | 0.214286 | 0.090909 | 0.666667 | 0.282051 | 0.189189 | 0.106383 | 0.139535 | 0.162791 | 0.097561 | 0.333333 | 0.666667 | 0.333333 | 0.666667 | 0.243243 | 0.333333 | 0.406250 | 0.192308 | 0.097561 | 0.139535 | 0.333333 | 0.343284 | 0.095238 |
| **gen4/output** |  |  |  | 0.000000 | 0.470588 | 0.450000 | 0.068966 | 0.282051 | 0.416667 | 0.250000 | 0.473684 | 0.129032 | 0.137931 | 0.333333 | 0.200000 | 0.257143 | 0.242424 | 0.372093 | 0.473684 | 0.120000 | 0.473684 | 0.206897 | 0.120000 | 0.166667 | 0.409091 | 0.212121 | 0.200000 | 0.120000 | 0.525424 | 0.205882 |
| **gen5/output** |  |  |  |  | 0.000000 | 0.767442 | 0.461538 | 0.209677 | 0.056338 | 0.254237 | 0.785714 | 0.444444 | 0.423077 | 0.241935 | 0.293103 | 0.310345 | 0.339286 | 0.318182 | 0.785714 | 0.541667 | 0.785714 | 0.461538 | 0.541667 | 0.595745 | 0.119403 | 0.339286 | 0.293103 | 0.541667 | 0.097561 | 0.298246 |
| **gen6/output** |  |  |  |  |  | 0.000000 | 0.523810 | 0.645161 | 0.725000 | 0.642857 | 0.090909 | 0.565217 | 0.523810 | 0.645161 | 0.592593 | 0.666667 | 0.560000 | 0.714286 | 0.090909 | 0.411765 | 0.090909 | 0.523810 | 0.411765 | 0.312500 | 0.694444 | 0.560000 | 0.592593 | 0.411765 | 0.784314 | 0.615385 |
| **gen7/output** |  |  |  |  |  |  | 0.000000 | 0.300000 | 0.469388 | 0.243243 | 0.550000 | 0.062500 | 0.133333 | 0.350000 | 0.250000 | 0.194444 | 0.294118 | 0.318182 | 0.550000 | 0.153846 | 0.550000 | 0.200000 | 0.153846 | 0.240000 | 0.422222 | 0.264706 | 0.250000 | 0.153846 | 0.533333 | 0.228571 |
| **gen8/output** |  |  |  |  |  |  |  | 0.000000 | 0.152542 | 0.106383 | 0.666667 | 0.309524 | 0.250000 | 0.080000 | 0.086957 | 0.130435 | 0.136364 | 0.314815 | 0.666667 | 0.388889 | 0.666667 | 0.300000 | 0.388889 | 0.428571 | 0.163636 | 0.136364 | 0.086957 | 0.388889 | 0.285714 | 0.111111 |
| **gen9/output** |  |  |  |  |  |  |  |  | 0.000000 | 0.250000 | 0.743590 | 0.450980 | 0.387755 | 0.186441 | 0.236364 | 0.272727 | 0.283019 | 0.349206 | 0.743590 | 0.511111 | 0.743590 | 0.428571 | 0.511111 | 0.545455 | 0.062500 | 0.283019 | 0.236364 | 0.511111 | 0.139241 | 0.259259 |
| **gen10/output** |  |  |  |  |  |  |  |  |  | 0.000000 | 0.666667 | 0.256410 | 0.243243 | 0.106383 | 0.046512 | 0.069767 | 0.097561 | 0.333333 | 0.666667 | 0.333333 | 0.666667 | 0.297297 | 0.333333 | 0.406250 | 0.192308 | 0.146341 | 0.046512 | 0.333333 | 0.343284 | 0.047619 |
| **gen11/output** |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.590909 | 0.550000 | 0.666667 | 0.615385 | 0.692308 | 0.583333 | 0.735294 | 0.000000 | 0.437500 | 0.000000 | 0.550000 | 0.437500 | 0.333333 | 0.714286 | 0.583333 | 0.615385 | 0.437500 | 0.800000 | 0.640000 |
| **gen12/output** |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.187500 | 0.357143 | 0.263158 | 0.210526 | 0.305556 | 0.260870 | 0.590909 | 0.214286 | 0.590909 | 0.250000 | 0.214286 | 0.296296 | 0.404255 | 0.277778 | 0.263158 | 0.214286 | 0.516129 | 0.243243 |
| **gen13/output** |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.250000 | 0.277778 | 0.305556 | 0.264706 | 0.318182 | 0.550000 | 0.153846 | 0.550000 | 0.066667 | 0.153846 | 0.240000 | 0.377778 | 0.294118 | 0.277778 | 0.153846 | 0.500000 | 0.257143 |
| **gen14/output** |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.130435 | 0.173913 | 0.136364 | 0.314815 | 0.666667 | 0.388889 | 0.666667 | 0.300000 | 0.388889 | 0.428571 | 0.181818 | 0.181818 | 0.130435 | 0.388889 | 0.314286 | 0.155556 |
| **gen15/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.071429 | 0.050000 | 0.380000 | 0.615385 | 0.312500 | 0.615385 | 0.333333 | 0.312500 | 0.354839 | 0.215686 | 0.100000 | 0.000000 | 0.312500 | 0.363636 | 0.024390 |
| **gen16/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.100000 | 0.360000 | 0.692308 | 0.343750 | 0.692308 | 0.361111 | 0.343750 | 0.419355 | 0.254902 | 0.150000 | 0.071429 | 0.343750 | 0.393939 | 0.048780 |
| **gen17/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.437500 | 0.583333 | 0.266667 | 0.583333 | 0.294118 | 0.266667 | 0.310345 | 0.224490 | 0.052632 | 0.050000 | 0.266667 | 0.406250 | 0.051282 |
| **gen18/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.735294 | 0.450000 | 0.735294 | 0.318182 | 0.450000 | 0.512821 | 0.372881 | 0.437500 | 0.380000 | 0.450000 | 0.378378 | 0.387755 |
| **gen19/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.437500 | 0.000000 | 0.550000 | 0.437500 | 0.333333 | 0.714286 | 0.583333 | 0.615385 | 0.437500 | 0.800000 | 0.640000 |
| **gen20/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.437500 | 0.230769 | 0.000000 | 0.095238 | 0.463415 | 0.266667 | 0.312500 | 0.000000 | 0.607143 | 0.290323 |
| **gen21/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.550000 | 0.437500 | 0.333333 | 0.714286 | 0.583333 | 0.615385 | 0.437500 | 0.800000 | 0.640000 |
| **gen22/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.230769 | 0.240000 | 0.422222 | 0.352941 | 0.333333 | 0.230769 | 0.533333 | 0.314286 |
| **gen23/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.095238 | 0.463415 | 0.266667 | 0.312500 | 0.000000 | 0.607143 | 0.290323 |
| **gen24/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.500000 | 0.310345 | 0.354839 | 0.095238 | 0.636364 | 0.366667 |
| **gen25/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.224490 | 0.215686 | 0.463415 | 0.200000 | 0.240000 |
| **gen26/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.100000 | 0.266667 | 0.406250 | 0.102564 |
| **gen27/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.312500 | 0.363636 | 0.024390 |
| **gen28/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.607143 | 0.290323 |
| **gen29/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.384615 |
| **gen30/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 |

# Result status table

|       | gen1/output | gen2/output | gen3/output | gen4/output | gen5/output | gen6/output | gen7/output | gen8/output | gen9/output | gen10/output | gen11/output | gen12/output | gen13/output | gen14/output | gen15/output | gen16/output | gen17/output | gen18/output | gen19/output | gen20/output | gen21/output | gen22/output | gen23/output | gen24/output | gen25/output | gen26/output | gen27/output | gen28/output | gen29/output | gen30/output |
|-------|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **gen1/output** | exact | bounded | exact | exact | bounded | exact | bounded | exact | bounded | exact | exact | bounded | exact | exact | exact | bounded | exact | bounded | exact | exact | exact | bounded | exact | exact | bounded | exact | exact | exact | bounded | exact |
| **gen2/output** |  | exact | exact | exact | exact | exact | bounded | bounded | bounded | exact | exact | bounded | exact | exact | exact | bounded | exact | bounded | exact | exact | exact | bounded | exact | exact | bounded | exact | exact | exact | exact | exact |
| **gen3/output** |  |  | exact | bounded | exact | exact | bounded | exact | exact | bounded | exact | bounded | exact | exact | bounded | bounded | exact | bounded | exact | exact | exact | exact | exact | exact | bounded | exact | bounded | exact | exact | bounded |
| **gen4/output** |  |  |  | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | bounded | exact | exact | exact | exact | exact | exact | exact | bounded | bounded | exact | exact | exact | exact |
| **gen5/output** |  |  |  |  | exact | exact | bounded | exact | exact | exact | exact | bounded | exact | bounded | exact | bounded | exact | bounded | exact | exact | exact | bounded | exact | exact | exact | exact | exact | exact | exact | exact |
| **gen6/output** |  |  |  |  |  | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact |
| **gen7/output** |  |  |  |  |  |  | exact | bounded | bounded | exact | exact | exact | exact | exact | bounded | exact | bounded | exact | exact | exact | exact | exact | exact | exact | bounded | bounded | bounded | exact | bounded | bounded |
| **gen8/output** |  |  |  |  |  |  |  | exact | exact | bounded | exact | bounded | exact | exact | exact | bounded | exact | bounded | exact | exact | exact | exact | exact | exact | bounded | exact | exact | exact | exact | exact |
| **gen9/output** |  |  |  |  |  |  |  |  | exact | bounded | exact | bounded | exact | exact | exact | bounded | exact | bounded | exact | exact | exact | bounded | exact | exact | exact | exact | exact | exact | exact | exact |
| **gen10/output** |  |  |  |  |  |  |  |  |  | exact | exact | bounded | bounded | exact | exact | exact | exact | bounded | exact | exact | exact | bounded | exact | exact | bounded | bounded | exact | exact | exact | exact |
| **gen11/output** |  |  |  |  |  |  |  |  |  |  | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact |
| **gen12/output** |  |  |  |  |  |  |  |  |  |  |  | exact | exact | bounded | bounded | bounded | bounded | exact | exact | exact | exact | exact | exact | exact | bounded | bounded | bounded | exact | bounded | bounded |
| **gen13/output** |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | bounded | bounded | bounded | exact | exact | exact | exact | exact | exact | exact | bounded | bounded | bounded | exact | exact | bounded |
| **gen14/output** |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | exact | exact | bounded | exact | exact | exact | bounded | exact | exact | bounded | exact | exact | exact | bounded | exact |
| **gen15/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | exact | bounded | exact | exact | exact | bounded | exact | exact | bounded | bounded | exact | exact | exact | exact |
| **gen16/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | bounded | exact | exact | exact | bounded | exact | exact | bounded | bounded | exact | exact | bounded | exact |
| **gen17/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | bounded | exact | exact | exact | bounded | exact | exact | exact | exact | exact | exact | exact | exact |
| **gen18/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | exact | exact | exact | exact | exact | bounded | bounded | bounded | exact | bounded | bounded |
| **gen19/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact |
| **gen20/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact |
| **gen21/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact |
| **gen22/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | exact | bounded | bounded | bounded | exact | bounded | bounded |
| **gen23/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | exact | exact | exact | exact | exact | exact |
| **gen24/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | exact | exact | exact | exact | exact |
| **gen25/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | bounded | exact | exact | bounded |
| **gen26/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | bounded | exact | exact | bounded |
| **gen27/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | exact | exact |
| **gen28/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | exact |
| **gen29/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact |
| **gen30/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact |

Pairs: 435; exact pairs: 328; bounded pairs: 107; mean relative gap: 3.92%; max relative gap: 75.00%; invalid files: 0.
