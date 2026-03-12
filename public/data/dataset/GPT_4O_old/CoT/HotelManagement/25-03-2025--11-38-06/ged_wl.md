# Adj, edge, label 
```
Adj1-invalid.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 0, 0, 1], [0, 1, 0, 1, 1, 1, 1, 1, 1], [0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0]]

Labels1-invalid.soil: {0: 'Customer', 1: 'Booking', 2: 'RoomReservation', 3: 'Room', 4: 'Room', 5: 'Room', 6: 'RoomExtra', 7: 'RoomExtra', 8: 'Bill'}

Edges1-invalid.soil: [(1, 0, 'BookingCustomer'), (1, 2, 'BookingRoomReservation'), (1, 8, 'BookingBill'), (2, 3, 'RoomReservationRoom'), (2, 4, 'RoomReservationRoom'), (2, 5, 'RoomReservationRoom'), (2, 6, 'RoomReservationExtras'), (2, 7, 'RoomReservationExtras'), (8, 2, 'BillRoomReservation')]

Adj1-edge.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0], [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0], [0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0], [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels1-edge.soil: {0: 'Customer', 1: 'Booking', 2: 'RoomReservation', 3: 'RoomReservation', 4: 'RoomReservation', 5: 'Room', 6: 'Room', 7: 'Room', 8: 'RoomExtra', 9: 'RoomExtra', 10: 'RoomExtra', 11: 'Bill', 12: 'Bill', 13: 'Bill', 14: 'FreeRoomTypesDTO'}

Edges1-edge.soil: [(1, 0, 'BookingCustomer'), (1, 2, 'BookingRoomReservation'), (1, 3, 'BookingRoomReservation'), (1, 4, 'BookingRoomReservation'), (2, 5, 'RoomReservationRoom'), (3, 6, 'RoomReservationRoom'), (4, 7, 'RoomReservationRoom'), (2, 8, 'RoomReservationExtras'), (3, 9, 'RoomReservationExtras'), (4, 10, 'RoomReservationExtras'), (11, 2, 'BillRoomReservation'), (12, 3, 'BillRoomReservation'), (13, 4, 'BillRoomReservation'), (1, 11, 'BookingBill'), (1, 12, 'BookingBill'), (1, 13, 'BookingBill')]

Adj1-boundary.soil: [[0, 1, 1, 1, 1, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 1, 1, 1, 1, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels1-boundary.soil: {0: 'Booking', 1: 'Customer', 2: 'Bill', 3: 'Bill', 4: 'RoomReservation', 5: 'Room', 6: 'Room', 7: 'RoomExtra', 8: 'RoomExtra', 9: 'FreeRoomTypesDTO'}

Edges1-boundary.soil: [(0, 1, 'BookingCustomer'), (0, 4, 'BookingRoomReservation'), (0, 2, 'BookingBill'), (0, 3, 'BookingBill'), (4, 5, 'RoomReservationRoom'), (4, 6, 'RoomReservationRoom'), (4, 7, 'RoomReservationExtras'), (4, 8, 'RoomReservationExtras'), (2, 4, 'BillRoomReservation')]

Adj1-baseline.soil: [[0, 1, 1, 0, 0, 0, 1, 0], [1, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 1, 1, 1, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]

Labels1-baseline.soil: {0: 'Booking', 1: 'Customer', 2: 'RoomReservation', 3: 'Room', 4: 'RoomExtra', 5: 'RoomExtra', 6: 'Bill', 7: 'FreeRoomTypesDTO'}

Edges1-baseline.soil: [(0, 1, 'BookingCustomer'), (0, 6, 'BookingBill'), (0, 2, 'BookingRoomReservation'), (2, 3, 'RoomReservationRoom'), (2, 4, 'RoomReservationExtras'), (2, 5, 'RoomReservationExtras'), (6, 2, 'BillRoomReservation')]

Adj1-complex.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels1-complex.soil: {0: 'Booking', 1: 'Customer', 2: 'RoomReservation', 3: 'RoomReservation', 4: 'Room', 5: 'Room', 6: 'Room', 7: 'RoomExtra', 8: 'RoomExtra', 9: 'RoomExtra', 10: 'Bill', 11: 'Bill', 12: 'FreeRoomTypesDTO', 13: 'FreeRoomTypesDTO'}

Edges1-complex.soil: [(0, 1, 'BookingCustomer'), (0, 2, 'BookingRoomReservation'), (0, 3, 'BookingRoomReservation'), (0, 10, 'BookingBill'), (0, 11, 'BookingBill'), (2, 4, 'RoomReservationRoom'), (2, 5, 'RoomReservationRoom'), (2, 7, 'RoomReservationExtras'), (2, 8, 'RoomReservationExtras'), (10, 2, 'BillRoomReservation'), (3, 6, 'RoomReservationRoom'), (3, 9, 'RoomReservationExtras'), (11, 3, 'BillRoomReservation')]

Adj2-invalid.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 1, 1, 1, 1], [0, 1, 0, 1, 1, 1, 1, 1, 1, 1], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0]]

Labels2-invalid.soil: {0: 'Customer', 1: 'Booking', 2: 'RoomReservation', 3: 'Room', 4: 'RoomExtra', 5: 'RoomExtra', 6: 'Bill', 7: 'Bill', 8: 'Bill', 9: 'Bill'}

Edges2-invalid.soil: [(1, 0, 'BookingCustomer'), (1, 2, 'BookingRoomReservation'), (2, 3, 'RoomReservationRoom'), (2, 4, 'RoomReservationExtras'), (2, 5, 'RoomReservationExtras'), (6, 2, 'BillRoomReservation'), (7, 2, 'BillRoomReservation'), (8, 2, 'BillRoomReservation'), (9, 2, 'BillRoomReservation'), (1, 6, 'BookingBill'), (1, 7, 'BookingBill'), (1, 8, 'BookingBill'), (1, 9, 'BookingBill')]

Adj2-edge.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0], [0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels2-edge.soil: {0: 'Customer', 1: 'Booking', 2: 'RoomReservation', 3: 'RoomReservation', 4: 'Room', 5: 'Room', 6: 'RoomExtra', 7: 'RoomExtra', 8: 'Bill', 9: 'Bill', 10: 'FreeRoomTypesDTO'}

Edges2-edge.soil: [(1, 0, 'BookingCustomer'), (1, 2, 'BookingRoomReservation'), (1, 3, 'BookingRoomReservation'), (2, 4, 'RoomReservationRoom'), (3, 5, 'RoomReservationRoom'), (2, 6, 'RoomReservationExtras'), (3, 7, 'RoomReservationExtras'), (8, 2, 'BillRoomReservation'), (9, 3, 'BillRoomReservation'), (1, 8, 'BookingBill'), (1, 9, 'BookingBill')]

Adj2-boundary.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1], [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1], [0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0]]

Labels2-boundary.soil: {0: 'Customer', 1: 'Booking', 2: 'Bill', 3: 'Bill', 4: 'RoomReservation', 5: 'Room', 6: 'Room', 7: 'RoomExtra', 8: 'RoomExtra', 9: 'FreeRoomTypesDTO', 10: 'RoomReservation'}

Edges2-boundary.soil: [(1, 0, 'BookingCustomer'), (1, 4, 'BookingRoomReservation'), (1, 2, 'BookingBill'), (1, 3, 'BookingBill'), (4, 5, 'RoomReservationRoom'), (4, 6, 'RoomReservationRoom'), (4, 7, 'RoomReservationExtras'), (4, 8, 'RoomReservationExtras'), (2, 4, 'BillRoomReservation'), (1, 10, 'BookingRoomReservation'), (10, 5, 'RoomReservationRoom'), (10, 6, 'RoomReservationRoom'), (10, 7, 'RoomReservationExtras'), (10, 8, 'RoomReservationExtras'), (3, 10, 'BillRoomReservation')]

Adj2-baseline.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0], [0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0], [0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]]

Labels2-baseline.soil: {0: 'Customer', 1: 'Booking', 2: 'RoomReservation', 3: 'RoomReservation', 4: 'Room', 5: 'Room', 6: 'RoomExtra', 7: 'Bill', 8: 'FreeRoomTypesDTO', 9: 'RoomExtra', 10: 'Bill'}

Edges2-baseline.soil: [(1, 0, 'BookingCustomer'), (1, 2, 'BookingRoomReservation'), (1, 3, 'BookingRoomReservation'), (1, 7, 'BookingBill'), (2, 4, 'RoomReservationRoom'), (3, 5, 'RoomReservationRoom'), (2, 6, 'RoomReservationExtras'), (3, 9, 'RoomReservationExtras'), (7, 2, 'BillRoomReservation'), (10, 3, 'BillRoomReservation')]

Adj2-complex.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0], [0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels2-complex.soil: {0: 'Customer', 1: 'Booking', 2: 'RoomReservation', 3: 'RoomReservation', 4: 'Room', 5: 'Room', 6: 'RoomExtra', 7: 'RoomExtra', 8: 'RoomExtra', 9: 'RoomExtra', 10: 'Bill', 11: 'Bill', 12: 'FreeRoomTypesDTO', 13: 'FreeRoomTypesDTO'}

Edges2-complex.soil: [(1, 0, 'BookingCustomer'), (1, 2, 'BookingRoomReservation'), (1, 3, 'BookingRoomReservation'), (2, 4, 'RoomReservationRoom'), (3, 5, 'RoomReservationRoom'), (2, 6, 'RoomReservationExtras'), (2, 7, 'RoomReservationExtras'), (3, 8, 'RoomReservationExtras'), (3, 9, 'RoomReservationExtras'), (10, 2, 'BillRoomReservation'), (11, 3, 'BillRoomReservation'), (1, 10, 'BookingBill'), (1, 11, 'BookingBill')]

Adj3-invalid.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 1, 1, 1], [0, 1, 0, 1, 1, 1, 1, 1, 1], [0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0]]

Labels3-invalid.soil: {0: 'Customer', 1: 'Booking', 2: 'RoomReservation', 3: 'Room', 4: 'RoomExtra', 5: 'RoomExtra', 6: 'Bill', 7: 'Bill', 8: 'Bill'}

Edges3-invalid.soil: [(1, 0, 'BookingCustomer'), (1, 2, 'BookingRoomReservation'), (2, 3, 'RoomReservationRoom'), (2, 4, 'RoomReservationExtras'), (2, 5, 'RoomReservationExtras'), (6, 2, 'BillRoomReservation'), (7, 2, 'BillRoomReservation'), (8, 2, 'BillRoomReservation'), (1, 6, 'BookingBill'), (1, 7, 'BookingBill'), (1, 8, 'BookingBill')]

Adj3-edge.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0], [0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels3-edge.soil: {0: 'Customer', 1: 'Booking', 2: 'RoomReservation', 3: 'RoomReservation', 4: 'Room', 5: 'Room', 6: 'RoomExtra', 7: 'RoomExtra', 8: 'Bill', 9: 'Bill', 10: 'FreeRoomTypesDTO'}

Edges3-edge.soil: [(1, 0, 'BookingCustomer'), (1, 2, 'BookingRoomReservation'), (1, 3, 'BookingRoomReservation'), (2, 4, 'RoomReservationRoom'), (3, 5, 'RoomReservationRoom'), (2, 6, 'RoomReservationExtras'), (3, 7, 'RoomReservationExtras'), (8, 2, 'BillRoomReservation'), (9, 3, 'BillRoomReservation'), (1, 8, 'BookingBill'), (1, 9, 'BookingBill')]

Adj3-boundary.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 1, 1, 1, 1, 1, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels3-boundary.soil: {0: 'Customer', 1: 'Booking', 2: 'Bill', 3: 'RoomReservation', 4: 'Room', 5: 'Room', 6: 'RoomExtra', 7: 'RoomExtra', 8: 'RoomExtra', 9: 'FreeRoomTypesDTO'}

Edges3-boundary.soil: [(1, 0, 'BookingCustomer'), (1, 3, 'BookingRoomReservation'), (1, 2, 'BookingBill'), (3, 4, 'RoomReservationRoom'), (3, 5, 'RoomReservationRoom'), (3, 6, 'RoomReservationExtras'), (3, 7, 'RoomReservationExtras'), (3, 8, 'RoomReservationExtras'), (2, 3, 'BillRoomReservation')]

Adj3-baseline.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0], [0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels3-baseline.soil: {0: 'Customer', 1: 'Booking', 2: 'RoomReservation', 3: 'RoomReservation', 4: 'Room', 5: 'Room', 6: 'RoomExtra', 7: 'RoomExtra', 8: 'Bill', 9: 'Bill', 10: 'FreeRoomTypesDTO'}

Edges3-baseline.soil: [(1, 0, 'BookingCustomer'), (1, 2, 'BookingRoomReservation'), (1, 3, 'BookingRoomReservation'), (1, 8, 'BookingBill'), (1, 9, 'BookingBill'), (2, 4, 'RoomReservationRoom'), (3, 5, 'RoomReservationRoom'), (2, 6, 'RoomReservationExtras'), (3, 7, 'RoomReservationExtras'), (8, 2, 'BillRoomReservation'), (9, 3, 'BillRoomReservation')]

Adj3-complex.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0], [0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels3-complex.soil: {0: 'Customer', 1: 'Booking', 2: 'RoomReservation', 3: 'RoomReservation', 4: 'Room', 5: 'Room', 6: 'RoomExtra', 7: 'RoomExtra', 8: 'RoomExtra', 9: 'RoomExtra', 10: 'Bill', 11: 'Bill', 12: 'FreeRoomTypesDTO', 13: 'FreeRoomTypesDTO'}

Edges3-complex.soil: [(1, 0, 'BookingCustomer'), (1, 2, 'BookingRoomReservation'), (1, 3, 'BookingRoomReservation'), (2, 4, 'RoomReservationRoom'), (3, 5, 'RoomReservationRoom'), (2, 6, 'RoomReservationExtras'), (2, 7, 'RoomReservationExtras'), (3, 8, 'RoomReservationExtras'), (3, 9, 'RoomReservationExtras'), (10, 2, 'BillRoomReservation'), (11, 3, 'BillRoomReservation'), (1, 10, 'BookingBill'), (1, 11, 'BookingBill')]

Adj4-invalid.soil: [[0, 1, 0, 0, 0, 0, 0, 0], [1, 0, 1, 1, 0, 0, 0, 1], [0, 1, 0, 0, 1, 1, 0, 1], [0, 1, 0, 0, 1, 0, 1, 1], [0, 0, 1, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 1, 0, 0, 0, 0]]

Labels4-invalid.soil: {0: 'Customer', 1: 'Booking', 2: 'RoomReservation', 3: 'RoomReservation', 4: 'Room', 5: 'RoomExtra', 6: 'RoomExtra', 7: 'Bill'}

Edges4-invalid.soil: [(1, 0, 'BookingCustomer'), (1, 2, 'BookingRoomReservation'), (1, 3, 'BookingRoomReservation'), (2, 4, 'RoomReservationRoom'), (3, 4, 'RoomReservationRoom'), (2, 5, 'RoomReservationExtras'), (3, 6, 'RoomReservationExtras'), (7, 2, 'BillRoomReservation'), (7, 3, 'BillRoomReservation'), (1, 7, 'BookingBill')]

Adj4-edge.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0], [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0], [0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0], [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels4-edge.soil: {0: 'Customer', 1: 'Booking', 2: 'RoomReservation', 3: 'RoomReservation', 4: 'RoomReservation', 5: 'Room', 6: 'Room', 7: 'Room', 8: 'RoomExtra', 9: 'RoomExtra', 10: 'RoomExtra', 11: 'Bill', 12: 'Bill', 13: 'Bill', 14: 'FreeRoomTypesDTO'}

Edges4-edge.soil: [(1, 0, 'BookingCustomer'), (1, 2, 'BookingRoomReservation'), (1, 3, 'BookingRoomReservation'), (1, 4, 'BookingRoomReservation'), (2, 5, 'RoomReservationRoom'), (3, 6, 'RoomReservationRoom'), (4, 7, 'RoomReservationRoom'), (2, 8, 'RoomReservationExtras'), (3, 9, 'RoomReservationExtras'), (4, 10, 'RoomReservationExtras'), (11, 2, 'BillRoomReservation'), (12, 3, 'BillRoomReservation'), (13, 4, 'BillRoomReservation'), (1, 11, 'BookingBill'), (1, 12, 'BookingBill'), (1, 13, 'BookingBill')]

Adj4-boundary.soil: [[0, 1, 0, 0, 0, 0, 0], [1, 0, 1, 1, 0, 0, 0], [0, 1, 0, 1, 0, 0, 0], [0, 1, 1, 0, 1, 1, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]]

Labels4-boundary.soil: {0: 'Customer', 1: 'Booking', 2: 'Bill', 3: 'RoomReservation', 4: 'Room', 5: 'RoomExtra', 6: 'FreeRoomTypesDTO'}

Edges4-boundary.soil: [(1, 0, 'BookingCustomer'), (1, 3, 'BookingRoomReservation'), (1, 2, 'BookingBill'), (3, 4, 'RoomReservationRoom'), (3, 5, 'RoomReservationExtras'), (2, 3, 'BillRoomReservation')]

Adj4-baseline.soil: [[0, 1, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 1, 1, 1, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]

Labels4-baseline.soil: {0: 'Customer', 1: 'Booking', 2: 'RoomReservation', 3: 'Room', 4: 'Room', 5: 'RoomExtra', 6: 'Bill', 7: 'FreeRoomTypesDTO'}

Edges4-baseline.soil: [(1, 0, 'BookingCustomer'), (1, 2, 'BookingRoomReservation'), (1, 6, 'BookingBill'), (2, 3, 'RoomReservationRoom'), (2, 5, 'RoomReservationExtras'), (6, 2, 'BillRoomReservation'), (2, 4, 'RoomReservationRoom')]

Adj4-complex.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 0, 1, 0, 0], [0, 1, 0, 1, 1, 1, 1, 1, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels4-complex.soil: {0: 'Customer', 1: 'Booking', 2: 'RoomReservation', 3: 'Room', 4: 'RoomExtra', 5: 'RoomExtra', 6: 'RoomExtra', 7: 'Bill', 8: 'FreeRoomTypesDTO', 9: 'FreeRoomTypesDTO'}

Edges4-complex.soil: [(1, 0, 'BookingCustomer'), (1, 2, 'BookingRoomReservation'), (1, 7, 'BookingBill'), (2, 3, 'RoomReservationRoom'), (2, 4, 'RoomReservationExtras'), (2, 5, 'RoomReservationExtras'), (2, 6, 'RoomReservationExtras'), (7, 2, 'BillRoomReservation')]

Adj5-invalid.soil: [[0, 1, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 1, 1], [0, 1, 0, 1, 1, 1, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0]]

Labels5-invalid.soil: {0: 'Customer', 1: 'Booking', 2: 'RoomReservation', 3: 'Room', 4: 'RoomExtra', 5: 'RoomExtra', 6: 'Bill', 7: 'Bill'}

Edges5-invalid.soil: [(1, 0, 'BookingCustomer'), (1, 2, 'BookingRoomReservation'), (2, 3, 'RoomReservationRoom'), (2, 4, 'RoomReservationExtras'), (2, 5, 'RoomReservationExtras'), (6, 2, 'BillRoomReservation'), (1, 6, 'BookingBill'), (1, 7, 'BookingBill')]

Adj5-edge.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0], [0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels5-edge.soil: {0: 'Customer', 1: 'Booking', 2: 'RoomReservation', 3: 'RoomReservation', 4: 'Room', 5: 'Room', 6: 'Room', 7: 'RoomExtra', 8: 'RoomExtra', 9: 'Bill', 10: 'Bill', 11: 'FreeRoomTypesDTO'}

Edges5-edge.soil: [(1, 0, 'BookingCustomer'), (1, 2, 'BookingRoomReservation'), (1, 3, 'BookingRoomReservation'), (2, 4, 'RoomReservationRoom'), (2, 5, 'RoomReservationRoom'), (3, 6, 'RoomReservationRoom'), (2, 7, 'RoomReservationExtras'), (3, 8, 'RoomReservationExtras'), (9, 2, 'BillRoomReservation'), (10, 3, 'BillRoomReservation'), (1, 9, 'BookingBill'), (1, 10, 'BookingBill')]

Adj5-boundary.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0], [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels5-boundary.soil: {0: 'Customer', 1: 'Booking', 2: 'RoomReservation', 3: 'Room', 4: 'Room', 5: 'Room', 6: 'RoomExtra', 7: 'RoomExtra', 8: 'RoomExtra', 9: 'Bill', 10: 'FreeRoomTypesDTO'}

Edges5-boundary.soil: [(1, 0, 'BookingCustomer'), (1, 2, 'BookingRoomReservation'), (1, 9, 'BookingBill'), (2, 3, 'RoomReservationRoom'), (2, 4, 'RoomReservationRoom'), (2, 5, 'RoomReservationRoom'), (2, 6, 'RoomReservationExtras'), (2, 7, 'RoomReservationExtras'), (2, 8, 'RoomReservationExtras'), (9, 2, 'BillRoomReservation')]

Adj5-baseline.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0], [0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels5-baseline.soil: {0: 'Customer', 1: 'Booking', 2: 'RoomReservation', 3: 'RoomReservation', 4: 'Room', 5: 'Room', 6: 'RoomExtra', 7: 'RoomExtra', 8: 'Bill', 9: 'Bill', 10: 'FreeRoomTypesDTO'}

Edges5-baseline.soil: [(1, 0, 'BookingCustomer'), (1, 2, 'BookingRoomReservation'), (1, 3, 'BookingRoomReservation'), (1, 8, 'BookingBill'), (1, 9, 'BookingBill'), (2, 4, 'RoomReservationRoom'), (3, 5, 'RoomReservationRoom'), (2, 6, 'RoomReservationExtras'), (3, 7, 'RoomReservationExtras'), (8, 2, 'BillRoomReservation'), (9, 3, 'BillRoomReservation')]

Adj5-complex.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0], [0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels5-complex.soil: {0: 'Customer', 1: 'Booking', 2: 'RoomReservation', 3: 'RoomReservation', 4: 'Room', 5: 'Room', 6: 'RoomExtra', 7: 'RoomExtra', 8: 'RoomExtra', 9: 'RoomExtra', 10: 'Bill', 11: 'Bill', 12: 'FreeRoomTypesDTO', 13: 'FreeRoomTypesDTO'}

Edges5-complex.soil: [(1, 0, 'BookingCustomer'), (1, 2, 'BookingRoomReservation'), (1, 3, 'BookingRoomReservation'), (2, 4, 'RoomReservationRoom'), (3, 5, 'RoomReservationRoom'), (2, 6, 'RoomReservationExtras'), (2, 7, 'RoomReservationExtras'), (3, 8, 'RoomReservationExtras'), (3, 9, 'RoomReservationExtras'), (10, 2, 'BillRoomReservation'), (11, 3, 'BillRoomReservation'), (1, 10, 'BookingBill'), (1, 11, 'BookingBill')]

Adj6-invalid.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1], [0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels6-invalid.soil: {0: 'Customer', 1: 'Booking', 2: 'RoomReservation', 3: 'Room', 4: 'RoomExtra', 5: 'RoomExtra', 6: 'RoomExtra', 7: 'RoomExtra', 8: 'RoomExtra', 9: 'Bill', 10: 'Bill'}

Edges6-invalid.soil: [(1, 0, 'BookingCustomer'), (1, 2, 'BookingRoomReservation'), (2, 3, 'RoomReservationRoom'), (2, 4, 'RoomReservationExtras'), (2, 5, 'RoomReservationExtras'), (2, 6, 'RoomReservationExtras'), (9, 2, 'BillRoomReservation'), (1, 9, 'BookingBill'), (1, 10, 'BookingBill')]

Adj6-edge.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0], [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0], [0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0], [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels6-edge.soil: {0: 'Customer', 1: 'Booking', 2: 'RoomReservation', 3: 'RoomReservation', 4: 'RoomReservation', 5: 'Room', 6: 'Room', 7: 'Room', 8: 'RoomExtra', 9: 'RoomExtra', 10: 'RoomExtra', 11: 'Bill', 12: 'Bill', 13: 'Bill', 14: 'FreeRoomTypesDTO'}

Edges6-edge.soil: [(1, 0, 'BookingCustomer'), (1, 2, 'BookingRoomReservation'), (1, 3, 'BookingRoomReservation'), (1, 4, 'BookingRoomReservation'), (2, 5, 'RoomReservationRoom'), (3, 6, 'RoomReservationRoom'), (4, 7, 'RoomReservationRoom'), (2, 8, 'RoomReservationExtras'), (3, 9, 'RoomReservationExtras'), (4, 10, 'RoomReservationExtras'), (11, 2, 'BillRoomReservation'), (12, 3, 'BillRoomReservation'), (13, 4, 'BillRoomReservation'), (1, 11, 'BookingBill'), (1, 12, 'BookingBill'), (1, 13, 'BookingBill')]

Adj6-boundary.soil: [[0, 1, 0, 0, 0, 0], [1, 0, 1, 1, 0, 0], [0, 1, 0, 1, 0, 0], [0, 1, 1, 0, 1, 0], [0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0]]

Labels6-boundary.soil: {0: 'Customer', 1: 'Booking', 2: 'Bill', 3: 'RoomReservation', 4: 'Room', 5: 'FreeRoomTypesDTO'}

Edges6-boundary.soil: [(1, 0, 'BookingCustomer'), (1, 3, 'BookingRoomReservation'), (1, 2, 'BookingBill'), (3, 4, 'RoomReservationRoom'), (2, 3, 'BillRoomReservation')]

Adj6-baseline.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0], [0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels6-baseline.soil: {0: 'Customer', 1: 'Booking', 2: 'RoomReservation', 3: 'RoomReservation', 4: 'Room', 5: 'Room', 6: 'RoomExtra', 7: 'RoomExtra', 8: 'Bill', 9: 'Bill', 10: 'FreeRoomTypesDTO'}

Edges6-baseline.soil: [(1, 0, 'BookingCustomer'), (1, 2, 'BookingRoomReservation'), (1, 3, 'BookingRoomReservation'), (1, 8, 'BookingBill'), (1, 9, 'BookingBill'), (2, 4, 'RoomReservationRoom'), (3, 5, 'RoomReservationRoom'), (2, 6, 'RoomReservationExtras'), (3, 7, 'RoomReservationExtras'), (8, 2, 'BillRoomReservation'), (9, 3, 'BillRoomReservation')]

Adj6-complex.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 0, 1, 0, 0], [0, 1, 0, 1, 1, 1, 1, 1, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels6-complex.soil: {0: 'Customer', 1: 'Booking', 2: 'RoomReservation', 3: 'Room', 4: 'RoomExtra', 5: 'RoomExtra', 6: 'RoomExtra', 7: 'Bill', 8: 'FreeRoomTypesDTO', 9: 'FreeRoomTypesDTO'}

Edges6-complex.soil: [(1, 0, 'BookingCustomer'), (1, 2, 'BookingRoomReservation'), (1, 7, 'BookingBill'), (2, 3, 'RoomReservationRoom'), (2, 4, 'RoomReservationExtras'), (2, 5, 'RoomReservationExtras'), (2, 6, 'RoomReservationExtras'), (7, 2, 'BillRoomReservation')]

```
# GED Matrix: 
```
[[0.0, 19.0, 4.0, 4.0, 11.0, 9.0, 11.0, 11.0, 10.0, 14.0, 6.0, 11.0, 3.0, 11.0, 14.0, 9.0, 19.0, 6.0, 4.0, 5.0, 5.0, 10.0, 3.0, 11.0, 14.0, 7.0, 19.0, 8.0, 11.0, 5.0], [19.0, 0.0, 16.0, 18.0, 9.0, 18.0, 9.0, 13.0, 10.0, 10.0, 17.0, 9.0, 18.0, 9.0, 10.0, 17.0, 0.0, 18.0, 18.0, 18.0, 17.0, 9.0, 18.0, 9.0, 10.0, 17.0, 0.0, 20.0, 9.0, 18.0], [4.0, 16.0, 0.0, 4.0, 8.0, 7.0, 7.0, 7.0, 8.0, 10.0, 5.0, 7.0, 3.0, 7.0, 10.0, 9.0, 16.0, 6.0, 4.0, 4.0, 3.0, 7.0, 5.0, 7.0, 10.0, 4.0, 16.0, 8.0, 7.0, 4.0], [4.0, 18.0, 4.0, 0.0, 12.0, 9.0, 9.0, 11.0, 8.0, 12.0, 6.0, 9.0, 4.0, 9.0, 12.0, 6.0, 18.0, 2.0, 2.0, 3.0, 2.0, 11.0, 6.0, 9.0, 12.0, 6.0, 18.0, 4.0, 9.0, 3.0], [11.0, 9.0, 8.0, 12.0, 0.0, 14.0, 5.0, 9.0, 6.0, 3.0, 13.0, 5.0, 10.0, 5.0, 3.0, 13.0, 9.0, 14.0, 12.0, 11.0, 11.0, 3.0, 10.0, 5.0, 3.0, 10.0, 9.0, 16.0, 5.0, 11.0], [9.0, 18.0, 7.0, 9.0, 14.0, 0.0, 12.0, 13.0, 13.0, 15.0, 3.0, 12.0, 9.0, 12.0, 15.0, 13.0, 8.0, 11.0, 11.0, 9.0, 7.0, 13.0, 10.0, 12.0, 15.0, 8.0, 8.0, 13.0, 12.0, 9.0], [11.0, 9.0, 7.0, 9.0, 5.0, 12.0, 0.0, 4.0, 1.0, 5.0, 10.0, 0.0, 10.0, 0.0, 5.0, 8.0, 9.0, 9.0, 9.0, 10.0, 8.0, 2.0, 11.0, 0.0, 5.0, 9.0, 9.0, 11.0, 0.0, 10.0], [11.0, 13.0, 7.0, 11.0, 9.0, 13.0, 4.0, 0.0, 5.0, 9.0, 12.0, 4.0, 10.0, 4.0, 9.0, 10.0, 5.0, 13.0, 11.0, 11.0, 10.0, 6.0, 11.0, 4.0, 9.0, 10.0, 5.0, 15.0, 4.0, 11.0], [10.0, 10.0, 8.0, 8.0, 6.0, 13.0, 1.0, 5.0, 0.0, 6.0, 11.0, 1.0, 9.0, 1.0, 6.0, 7.0, 10.0, 8.0, 8.0, 9.0, 9.0, 3.0, 10.0, 1.0, 6.0, 10.0, 10.0, 10.0, 1.0, 9.0], [14.0, 10.0, 10.0, 12.0, 3.0, 15.0, 5.0, 9.0, 6.0, 0.0, 13.0, 5.0, 12.0, 5.0, 0.0, 13.0, 10.0, 14.0, 14.0, 11.0, 11.0, 5.0, 13.0, 5.0, 0.0, 10.0, 10.0, 16.0, 5.0, 11.0], [6.0, 17.0, 5.0, 6.0, 13.0, 3.0, 10.0, 12.0, 11.0, 13.0, 0.0, 10.0, 7.0, 10.0, 13.0, 10.0, 11.0, 8.0, 8.0, 7.0, 4.0, 12.0, 9.0, 10.0, 13.0, 6.0, 11.0, 10.0, 10.0, 7.0], [11.0, 9.0, 7.0, 9.0, 5.0, 12.0, 0.0, 4.0, 1.0, 5.0, 10.0, 0.0, 10.0, 0.0, 5.0, 8.0, 9.0, 9.0, 9.0, 10.0, 8.0, 2.0, 11.0, 0.0, 5.0, 9.0, 9.0, 11.0, 0.0, 10.0], [3.0, 18.0, 3.0, 4.0, 10.0, 9.0, 10.0, 10.0, 9.0, 12.0, 7.0, 10.0, 0.0, 10.0, 12.0, 10.0, 12.0, 6.0, 4.0, 2.0, 6.0, 10.0, 2.0, 10.0, 12.0, 5.0, 12.0, 8.0, 10.0, 2.0], [11.0, 9.0, 7.0, 9.0, 5.0, 12.0, 0.0, 4.0, 1.0, 5.0, 10.0, 0.0, 10.0, 0.0, 5.0, 8.0, 9.0, 9.0, 9.0, 10.0, 8.0, 2.0, 11.0, 0.0, 5.0, 9.0, 9.0, 11.0, 0.0, 10.0], [14.0, 10.0, 10.0, 12.0, 3.0, 15.0, 5.0, 9.0, 6.0, 0.0, 13.0, 5.0, 12.0, 5.0, 0.0, 13.0, 10.0, 14.0, 14.0, 11.0, 11.0, 5.0, 13.0, 5.0, 0.0, 10.0, 10.0, 16.0, 5.0, 11.0], [9.0, 17.0, 9.0, 6.0, 13.0, 13.0, 8.0, 10.0, 7.0, 13.0, 10.0, 8.0, 10.0, 8.0, 13.0, 0.0, 17.0, 6.0, 7.0, 9.0, 6.0, 10.0, 12.0, 8.0, 13.0, 10.0, 17.0, 8.0, 8.0, 9.0], [19.0, 0.0, 16.0, 18.0, 9.0, 8.0, 9.0, 5.0, 10.0, 10.0, 11.0, 9.0, 12.0, 9.0, 10.0, 17.0, 0.0, 18.0, 18.0, 18.0, 17.0, 9.0, 18.0, 9.0, 10.0, 17.0, 0.0, 20.0, 9.0, 18.0], [6.0, 18.0, 6.0, 2.0, 14.0, 11.0, 9.0, 13.0, 8.0, 14.0, 8.0, 9.0, 6.0, 9.0, 14.0, 6.0, 18.0, 0.0, 2.0, 5.0, 4.0, 11.0, 8.0, 9.0, 14.0, 8.0, 18.0, 2.0, 9.0, 5.0], [4.0, 18.0, 4.0, 2.0, 12.0, 11.0, 9.0, 11.0, 8.0, 14.0, 8.0, 9.0, 4.0, 9.0, 14.0, 7.0, 18.0, 2.0, 0.0, 5.0, 4.0, 9.0, 6.0, 9.0, 14.0, 8.0, 18.0, 4.0, 9.0, 5.0], [5.0, 18.0, 4.0, 3.0, 11.0, 9.0, 10.0, 11.0, 9.0, 11.0, 7.0, 10.0, 2.0, 10.0, 11.0, 9.0, 18.0, 5.0, 5.0, 0.0, 5.0, 11.0, 4.0, 10.0, 11.0, 4.0, 18.0, 7.0, 10.0, 0.0], [5.0, 17.0, 3.0, 2.0, 11.0, 7.0, 8.0, 10.0, 9.0, 11.0, 4.0, 8.0, 6.0, 8.0, 11.0, 6.0, 17.0, 4.0, 4.0, 5.0, 0.0, 10.0, 8.0, 8.0, 11.0, 4.0, 17.0, 6.0, 8.0, 5.0], [10.0, 9.0, 7.0, 11.0, 3.0, 13.0, 2.0, 6.0, 3.0, 5.0, 12.0, 2.0, 10.0, 2.0, 5.0, 10.0, 9.0, 11.0, 9.0, 11.0, 10.0, 0.0, 10.0, 2.0, 5.0, 10.0, 9.0, 13.0, 2.0, 11.0], [3.0, 18.0, 5.0, 6.0, 10.0, 10.0, 11.0, 11.0, 10.0, 13.0, 9.0, 11.0, 2.0, 11.0, 13.0, 12.0, 18.0, 8.0, 6.0, 4.0, 8.0, 10.0, 0.0, 11.0, 6.0, 6.0, 10.0, 10.0, 11.0, 4.0], [11.0, 9.0, 7.0, 9.0, 5.0, 12.0, 0.0, 4.0, 1.0, 5.0, 10.0, 0.0, 10.0, 0.0, 5.0, 8.0, 9.0, 9.0, 9.0, 10.0, 8.0, 2.0, 11.0, 0.0, 5.0, 9.0, 9.0, 11.0, 0.0, 10.0], [14.0, 10.0, 10.0, 12.0, 3.0, 15.0, 5.0, 9.0, 6.0, 0.0, 13.0, 5.0, 12.0, 5.0, 0.0, 13.0, 10.0, 14.0, 14.0, 11.0, 11.0, 5.0, 6.0, 5.0, 0.0, 10.0, 10.0, 16.0, 5.0, 11.0], [7.0, 17.0, 4.0, 6.0, 10.0, 8.0, 9.0, 10.0, 10.0, 10.0, 6.0, 9.0, 5.0, 9.0, 10.0, 10.0, 17.0, 8.0, 8.0, 4.0, 4.0, 10.0, 6.0, 9.0, 10.0, 0.0, 11.0, 10.0, 9.0, 4.0], [19.0, 0.0, 16.0, 18.0, 9.0, 8.0, 9.0, 5.0, 10.0, 10.0, 11.0, 9.0, 12.0, 9.0, 10.0, 17.0, 0.0, 18.0, 18.0, 18.0, 17.0, 9.0, 10.0, 9.0, 10.0, 11.0, 0.0, 20.0, 9.0, 18.0], [8.0, 20.0, 8.0, 4.0, 16.0, 13.0, 11.0, 15.0, 10.0, 16.0, 10.0, 11.0, 8.0, 11.0, 16.0, 8.0, 20.0, 2.0, 4.0, 7.0, 6.0, 13.0, 10.0, 11.0, 16.0, 10.0, 20.0, 0.0, 11.0, 7.0], [11.0, 9.0, 7.0, 9.0, 5.0, 12.0, 0.0, 4.0, 1.0, 5.0, 10.0, 0.0, 10.0, 0.0, 5.0, 8.0, 9.0, 9.0, 9.0, 10.0, 8.0, 2.0, 11.0, 0.0, 5.0, 9.0, 9.0, 11.0, 0.0, 10.0], [5.0, 18.0, 4.0, 3.0, 11.0, 9.0, 10.0, 11.0, 9.0, 11.0, 7.0, 10.0, 2.0, 10.0, 11.0, 9.0, 18.0, 5.0, 5.0, 0.0, 5.0, 11.0, 4.0, 10.0, 11.0, 4.0, 18.0, 7.0, 10.0, 0.0]]
```
# GED 2D table: 
|       | invalid1 | edge2 | boundary3 | baseline4 | complex5 | invalid6 | edge7 | boundary8 | baseline9 | complex10 | invalid11 | edge12 | boundary13 | baseline14 | complex15 | invalid16 | edge17 | boundary18 | baseline19 | complex20 | invalid21 | edge22 | boundary23 | baseline24 | complex25 | invalid26 | edge27 | boundary28 | baseline29 | complex30 |
|-------|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **invalid1** | 0.000000 | 19.000000 | 4.000000 | 4.000000 | 11.000000 | 9.000000 | 11.000000 | 11.000000 | 10.000000 | 14.000000 | 6.000000 | 11.000000 | 3.000000 | 11.000000 | 14.000000 | 9.000000 | 19.000000 | 6.000000 | 4.000000 | 5.000000 | 5.000000 | 10.000000 | 3.000000 | 11.000000 | 14.000000 | 7.000000 | 19.000000 | 8.000000 | 11.000000 | 5.000000 |
| **edge2** |  | 0.000000 | 16.000000 | 18.000000 | 9.000000 | 18.000000 | 9.000000 | 13.000000 | 10.000000 | 10.000000 | 17.000000 | 9.000000 | 18.000000 | 9.000000 | 10.000000 | 17.000000 | 0.000000 | 18.000000 | 18.000000 | 18.000000 | 17.000000 | 9.000000 | 18.000000 | 9.000000 | 10.000000 | 17.000000 | 0.000000 | 20.000000 | 9.000000 | 18.000000 |
| **boundary3** |  |  | 0.000000 | 4.000000 | 8.000000 | 7.000000 | 7.000000 | 7.000000 | 8.000000 | 10.000000 | 5.000000 | 7.000000 | 3.000000 | 7.000000 | 10.000000 | 9.000000 | 16.000000 | 6.000000 | 4.000000 | 4.000000 | 3.000000 | 7.000000 | 5.000000 | 7.000000 | 10.000000 | 4.000000 | 16.000000 | 8.000000 | 7.000000 | 4.000000 |
| **baseline4** |  |  |  | 0.000000 | 12.000000 | 9.000000 | 9.000000 | 11.000000 | 8.000000 | 12.000000 | 6.000000 | 9.000000 | 4.000000 | 9.000000 | 12.000000 | 6.000000 | 18.000000 | 2.000000 | 2.000000 | 3.000000 | 2.000000 | 11.000000 | 6.000000 | 9.000000 | 12.000000 | 6.000000 | 18.000000 | 4.000000 | 9.000000 | 3.000000 |
| **complex5** |  |  |  |  | 0.000000 | 14.000000 | 5.000000 | 9.000000 | 6.000000 | 3.000000 | 13.000000 | 5.000000 | 10.000000 | 5.000000 | 3.000000 | 13.000000 | 9.000000 | 14.000000 | 12.000000 | 11.000000 | 11.000000 | 3.000000 | 10.000000 | 5.000000 | 3.000000 | 10.000000 | 9.000000 | 16.000000 | 5.000000 | 11.000000 |
| **invalid6** |  |  |  |  |  | 0.000000 | 12.000000 | 13.000000 | 13.000000 | 15.000000 | 3.000000 | 12.000000 | 9.000000 | 12.000000 | 15.000000 | 13.000000 | 8.000000 | 11.000000 | 11.000000 | 9.000000 | 7.000000 | 13.000000 | 10.000000 | 12.000000 | 15.000000 | 8.000000 | 8.000000 | 13.000000 | 12.000000 | 9.000000 |
| **edge7** |  |  |  |  |  |  | 0.000000 | 4.000000 | 1.000000 | 5.000000 | 10.000000 | 0.000000 | 10.000000 | 0.000000 | 5.000000 | 8.000000 | 9.000000 | 9.000000 | 9.000000 | 10.000000 | 8.000000 | 2.000000 | 11.000000 | 0.000000 | 5.000000 | 9.000000 | 9.000000 | 11.000000 | 0.000000 | 10.000000 |
| **boundary8** |  |  |  |  |  |  |  | 0.000000 | 5.000000 | 9.000000 | 12.000000 | 4.000000 | 10.000000 | 4.000000 | 9.000000 | 10.000000 | 5.000000 | 13.000000 | 11.000000 | 11.000000 | 10.000000 | 6.000000 | 11.000000 | 4.000000 | 9.000000 | 10.000000 | 5.000000 | 15.000000 | 4.000000 | 11.000000 |
| **baseline9** |  |  |  |  |  |  |  |  | 0.000000 | 6.000000 | 11.000000 | 1.000000 | 9.000000 | 1.000000 | 6.000000 | 7.000000 | 10.000000 | 8.000000 | 8.000000 | 9.000000 | 9.000000 | 3.000000 | 10.000000 | 1.000000 | 6.000000 | 10.000000 | 10.000000 | 10.000000 | 1.000000 | 9.000000 |
| **complex10** |  |  |  |  |  |  |  |  |  | 0.000000 | 13.000000 | 5.000000 | 12.000000 | 5.000000 | 0.000000 | 13.000000 | 10.000000 | 14.000000 | 14.000000 | 11.000000 | 11.000000 | 5.000000 | 13.000000 | 5.000000 | 0.000000 | 10.000000 | 10.000000 | 16.000000 | 5.000000 | 11.000000 |
| **invalid11** |  |  |  |  |  |  |  |  |  |  | 0.000000 | 10.000000 | 7.000000 | 10.000000 | 13.000000 | 10.000000 | 11.000000 | 8.000000 | 8.000000 | 7.000000 | 4.000000 | 12.000000 | 9.000000 | 10.000000 | 13.000000 | 6.000000 | 11.000000 | 10.000000 | 10.000000 | 7.000000 |
| **edge12** |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 10.000000 | 0.000000 | 5.000000 | 8.000000 | 9.000000 | 9.000000 | 9.000000 | 10.000000 | 8.000000 | 2.000000 | 11.000000 | 0.000000 | 5.000000 | 9.000000 | 9.000000 | 11.000000 | 0.000000 | 10.000000 |
| **boundary13** |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 10.000000 | 12.000000 | 10.000000 | 12.000000 | 6.000000 | 4.000000 | 2.000000 | 6.000000 | 10.000000 | 2.000000 | 10.000000 | 12.000000 | 5.000000 | 12.000000 | 8.000000 | 10.000000 | 2.000000 |
| **baseline14** |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 5.000000 | 8.000000 | 9.000000 | 9.000000 | 9.000000 | 10.000000 | 8.000000 | 2.000000 | 11.000000 | 0.000000 | 5.000000 | 9.000000 | 9.000000 | 11.000000 | 0.000000 | 10.000000 |
| **complex15** |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 13.000000 | 10.000000 | 14.000000 | 14.000000 | 11.000000 | 11.000000 | 5.000000 | 13.000000 | 5.000000 | 0.000000 | 10.000000 | 10.000000 | 16.000000 | 5.000000 | 11.000000 |
| **invalid16** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 17.000000 | 6.000000 | 7.000000 | 9.000000 | 6.000000 | 10.000000 | 12.000000 | 8.000000 | 13.000000 | 10.000000 | 17.000000 | 8.000000 | 8.000000 | 9.000000 |
| **edge17** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 18.000000 | 18.000000 | 18.000000 | 17.000000 | 9.000000 | 18.000000 | 9.000000 | 10.000000 | 17.000000 | 0.000000 | 20.000000 | 9.000000 | 18.000000 |
| **boundary18** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 2.000000 | 5.000000 | 4.000000 | 11.000000 | 8.000000 | 9.000000 | 14.000000 | 8.000000 | 18.000000 | 2.000000 | 9.000000 | 5.000000 |
| **baseline19** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 5.000000 | 4.000000 | 9.000000 | 6.000000 | 9.000000 | 14.000000 | 8.000000 | 18.000000 | 4.000000 | 9.000000 | 5.000000 |
| **complex20** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 5.000000 | 11.000000 | 4.000000 | 10.000000 | 11.000000 | 4.000000 | 18.000000 | 7.000000 | 10.000000 | 0.000000 |
| **invalid21** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 10.000000 | 8.000000 | 8.000000 | 11.000000 | 4.000000 | 17.000000 | 6.000000 | 8.000000 | 5.000000 |
| **edge22** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 10.000000 | 2.000000 | 5.000000 | 10.000000 | 9.000000 | 13.000000 | 2.000000 | 11.000000 |
| **boundary23** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 11.000000 | 6.000000 | 6.000000 | 10.000000 | 10.000000 | 11.000000 | 4.000000 |
| **baseline24** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 5.000000 | 9.000000 | 9.000000 | 11.000000 | 0.000000 | 10.000000 |
| **complex25** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 10.000000 | 10.000000 | 16.000000 | 5.000000 | 11.000000 |
| **invalid26** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 11.000000 | 10.000000 | 9.000000 | 4.000000 |
| **edge27** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 20.000000 | 9.000000 | 18.000000 |
| **boundary28** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 11.000000 | 7.000000 |
| **baseline29** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 10.000000 |
| **complex30** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 |

# Normalized GED 2D table: 
|       | invalid1 | edge2 | boundary3 | baseline4 | complex5 | invalid6 | edge7 | boundary8 | baseline9 | complex10 | invalid11 | edge12 | boundary13 | baseline14 | complex15 | invalid16 | edge17 | boundary18 | baseline19 | complex20 | invalid21 | edge22 | boundary23 | baseline24 | complex25 | invalid26 | edge27 | boundary28 | baseline29 | complex30 |
|-------|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **invalid1** | 1.000000 | 0.224490 | 0.783784 | 0.757576 | 0.511111 | 0.560976 | 0.450000 | 0.500000 | 0.487179 | 0.377778 | 0.684211 | 0.450000 | 0.837838 | 0.450000 | 0.377778 | 0.500000 | 0.224490 | 0.612903 | 0.757576 | 0.722222 | 0.705882 | 0.523810 | 0.846154 | 0.450000 | 0.377778 | 0.631579 | 0.224490 | 0.448276 | 0.450000 | 0.722222 |
| **edge2** |  | 1.000000 | 0.360000 | 0.217391 | 0.689655 | 0.333333 | 0.660377 | 0.543860 | 0.615385 | 0.655172 | 0.333333 | 0.660377 | 0.280000 | 0.660377 | 0.655172 | 0.306122 | 1.000000 | 0.181818 | 0.217391 | 0.265306 | 0.276596 | 0.672727 | 0.307692 | 0.660377 | 0.655172 | 0.333333 | 1.000000 | 0.047619 | 0.660377 | 0.265306 |
| **boundary3** |  |  | 1.000000 | 0.764706 | 0.652174 | 0.666667 | 0.658537 | 0.688889 | 0.600000 | 0.565217 | 0.743590 | 0.658537 | 0.842105 | 0.658537 | 0.565217 | 0.513514 | 0.360000 | 0.625000 | 0.764706 | 0.783784 | 0.828571 | 0.674419 | 0.750000 | 0.658537 | 0.565217 | 0.794872 | 0.360000 | 0.466667 | 0.658537 | 0.783784 |
| **baseline4** |  |  |  | 1.000000 | 0.428571 | 0.526316 | 0.513514 | 0.463415 | 0.555556 | 0.428571 | 0.657143 | 0.513514 | 0.764706 | 0.513514 | 0.428571 | 0.636364 | 0.217391 | 0.857143 | 0.866667 | 0.818182 | 0.870968 | 0.435897 | 0.666667 | 0.513514 | 0.428571 | 0.657143 | 0.217391 | 0.692308 | 0.513514 | 0.818182 |
| **complex5** |  |  |  |  | 1.000000 | 0.440000 | 0.795918 | 0.660377 | 0.750000 | 0.888889 | 0.446809 | 0.795918 | 0.565217 | 0.795918 | 0.888889 | 0.422222 | 0.689655 | 0.300000 | 0.428571 | 0.511111 | 0.488372 | 0.882353 | 0.583333 | 0.795918 | 0.888889 | 0.574468 | 0.689655 | 0.157895 | 0.795918 | 0.511111 |
| **invalid6** |  |  |  |  |  | 1.000000 | 0.466667 | 0.469388 | 0.409091 | 0.400000 | 0.860465 | 0.466667 | 0.571429 | 0.466667 | 0.400000 | 0.365854 | 0.703704 | 0.388889 | 0.421053 | 0.560976 | 0.641026 | 0.446809 | 0.545455 | 0.466667 | 0.400000 | 0.627907 | 0.703704 | 0.235294 | 0.466667 | 0.560976 |
| **edge7** |  |  |  |  |  |  | 1.000000 | 0.833333 | 0.953488 | 0.795918 | 0.523810 | 1.000000 | 0.512195 | 1.000000 | 0.795918 | 0.600000 | 0.660377 | 0.485714 | 0.513514 | 0.500000 | 0.578947 | 0.913043 | 0.488372 | 1.000000 | 0.795918 | 0.571429 | 0.660377 | 0.333333 | 1.000000 | 0.500000 |
| **boundary8** |  |  |  |  |  |  |  | 1.000000 | 0.787234 | 0.660377 | 0.478261 | 0.833333 | 0.555556 | 0.833333 | 0.660377 | 0.545455 | 0.824561 | 0.333333 | 0.463415 | 0.500000 | 0.523810 | 0.760000 | 0.531915 | 0.833333 | 0.660377 | 0.565217 | 0.824561 | 0.189189 | 0.833333 | 0.500000 |
| **baseline9** |  |  |  |  |  |  |  |  | 1.000000 | 0.750000 | 0.463415 | 0.953488 | 0.550000 | 0.953488 | 0.750000 | 0.641026 | 0.615385 | 0.529412 | 0.555556 | 0.538462 | 0.513514 | 0.866667 | 0.523810 | 0.953488 | 0.750000 | 0.512195 | 0.615385 | 0.375000 | 0.953488 | 0.538462 |
| **complex10** |  |  |  |  |  |  |  |  |  | 1.000000 | 0.446809 | 0.795918 | 0.478261 | 0.795918 | 1.000000 | 0.422222 | 0.655172 | 0.300000 | 0.333333 | 0.511111 | 0.488372 | 0.803922 | 0.458333 | 0.795918 | 1.000000 | 0.574468 | 0.655172 | 0.157895 | 0.795918 | 0.511111 |
| **invalid11** |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.523810 | 0.641026 | 0.523810 | 0.446809 | 0.473684 | 0.568627 | 0.515152 | 0.542857 | 0.631579 | 0.777778 | 0.454545 | 0.560976 | 0.523810 | 0.446809 | 0.700000 | 0.568627 | 0.354839 | 0.523810 | 0.631579 |
| **edge12** |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.512195 | 1.000000 | 0.795918 | 0.600000 | 0.660377 | 0.485714 | 0.513514 | 0.500000 | 0.578947 | 0.913043 | 0.488372 | 1.000000 | 0.795918 | 0.571429 | 0.660377 | 0.333333 | 1.000000 | 0.500000 |
| **boundary13** |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.512195 | 0.478261 | 0.459459 | 0.520000 | 0.625000 | 0.764706 | 0.891892 | 0.657143 | 0.534884 | 0.900000 | 0.512195 | 0.478261 | 0.743590 | 0.520000 | 0.466667 | 0.512195 | 0.891892 |
| **baseline14** |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.795918 | 0.600000 | 0.660377 | 0.485714 | 0.513514 | 0.500000 | 0.578947 | 0.913043 | 0.488372 | 1.000000 | 0.795918 | 0.571429 | 0.660377 | 0.333333 | 1.000000 | 0.500000 |
| **complex15** |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.422222 | 0.655172 | 0.300000 | 0.333333 | 0.511111 | 0.488372 | 0.803922 | 0.458333 | 0.795918 | 1.000000 | 0.574468 | 0.655172 | 0.157895 | 0.795918 | 0.511111 |
| **invalid16** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.306122 | 0.612903 | 0.575758 | 0.500000 | 0.647059 | 0.523810 | 0.384615 | 0.600000 | 0.422222 | 0.473684 | 0.306122 | 0.448276 | 0.600000 | 0.500000 |
| **edge17** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.181818 | 0.217391 | 0.265306 | 0.276596 | 0.672727 | 0.307692 | 0.660377 | 0.655172 | 0.333333 | 1.000000 | 0.047619 | 0.660377 | 0.265306 |
| **boundary18** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.857143 | 0.677419 | 0.724138 | 0.405405 | 0.529412 | 0.485714 | 0.300000 | 0.515152 | 0.181818 | 0.833333 | 0.485714 | 0.677419 |
| **baseline19** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.696970 | 0.741935 | 0.538462 | 0.666667 | 0.513514 | 0.333333 | 0.542857 | 0.217391 | 0.692308 | 0.513514 | 0.696970 |
| **complex20** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.705882 | 0.476190 | 0.794872 | 0.500000 | 0.511111 | 0.789474 | 0.265306 | 0.517241 | 0.500000 | 1.000000 |
| **invalid21** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.500000 | 0.567568 | 0.578947 | 0.488372 | 0.777778 | 0.276596 | 0.555556 | 0.578947 | 0.705882 |
| **edge22** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.555556 | 0.913043 | 0.803922 | 0.545455 | 0.672727 | 0.257143 | 0.913043 | 0.476190 |
| **boundary23** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.488372 | 0.750000 | 0.707317 | 0.615385 | 0.375000 | 0.488372 | 0.794872 |
| **baseline24** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.795918 | 0.571429 | 0.660377 | 0.333333 | 1.000000 | 0.500000 |
| **complex25** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.574468 | 0.655172 | 0.157895 | 0.795918 | 0.511111 |
| **invalid26** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.568627 | 0.354839 | 0.571429 | 0.789474 |
| **edge27** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.047619 | 0.660377 | 0.265306 |
| **boundary28** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.333333 | 0.517241 |
| **baseline29** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.500000 |
| **complex30** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 |