# Adjacency, edges, and labels

```text
Adj-gen1/output.soil: [[0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0]]

Labels-gen1/output.soil: {0: 'Restaurant', 1: 'Owner', 2: 'Owner', 3: 'Table', 4: 'HeadWaiter', 5: 'Waiter', 6: 'Chef', 7: 'Cook', 8: 'Individual', 9: 'MenuItem', 10: 'FoodItem', 11: 'Allergen'}

Edges-gen1/output.soil: [(0, 1, 'RestaurantOwner'), (0, 2, 'RestaurantOwner'), (4, 5, 'HeadWaiterWaiter'), (6, 7, 'ChefCook'), (0, 8, 'RestaurantReservation'), (8, 5, 'ReservationWaiter'), (8, 3, 'ReservationTable'), (9, 6, 'MenuItemChef'), (10, 11, 'FoodItemAllergen')]

Adj-gen2/output.soil: [[0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0], [1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0]]

Labels-gen2/output.soil: {0: 'Restaurant', 1: 'Owner', 2: 'Owner', 3: 'Table', 4: 'Table', 5: 'HeadWaiter', 6: 'Waiter', 7: 'Banquet', 8: 'BusDriver', 9: 'MenuItem', 10: 'Chef', 11: 'Cook', 12: 'ItemOrder'}

Edges-gen2/output.soil: [(0, 1, 'RestaurantOwner'), (0, 2, 'RestaurantOwner'), (5, 6, 'HeadWaiterWaiter'), (0, 7, 'RestaurantReservation'), (7, 6, 'ReservationWaiter'), (7, 3, 'ReservationTable'), (7, 4, 'ReservationTable'), (7, 8, 'BanquetBusDriver'), (9, 10, 'MenuItemChef'), (10, 11, 'ChefCook'), (12, 9, 'ItemOrderMenuItem'), (7, 12, 'ReservationItemOrdered')]

Adj-gen3/output.soil: [[0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0]]

Labels-gen3/output.soil: {0: 'Restaurant', 1: 'Owner', 2: 'Owner', 3: 'Table', 4: 'Table', 5: 'HeadWaiter', 6: 'Waiter', 7: 'RegularCustomer', 8: 'Individual', 9: 'MenuItem', 10: 'Chef', 11: 'Cook', 12: 'ItemOrder'}

Edges-gen3/output.soil: [(0, 1, 'RestaurantOwner'), (0, 2, 'RestaurantOwner'), (5, 6, 'HeadWaiterWaiter'), (0, 8, 'RestaurantReservation'), (8, 6, 'ReservationWaiter'), (8, 3, 'ReservationTable'), (8, 4, 'ReservationTable'), (8, 7, 'ReservationCustomer'), (9, 10, 'MenuItemChef'), (10, 11, 'ChefCook'), (12, 9, 'ItemOrderMenuItem'), (8, 12, 'ReservationItemOrdered')]

Adj-gen4/output.soil: [[0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0], [1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0]]

Labels-gen4/output.soil: {0: 'Restaurant', 1: 'Owner', 2: 'Owner', 3: 'Table', 4: 'Table', 5: 'HeadWaiter', 6: 'Waiter', 7: 'Waiter', 8: 'Banquet', 9: 'BusDriver', 10: 'MenuItem', 11: 'Chef', 12: 'Cook', 13: 'ItemOrder'}

Edges-gen4/output.soil: [(0, 1, 'RestaurantOwner'), (0, 2, 'RestaurantOwner'), (5, 6, 'HeadWaiterWaiter'), (5, 7, 'HeadWaiterWaiter'), (0, 8, 'RestaurantReservation'), (8, 6, 'ReservationWaiter'), (8, 7, 'ReservationWaiter'), (8, 3, 'ReservationTable'), (8, 4, 'ReservationTable'), (8, 9, 'BanquetBusDriver'), (10, 11, 'MenuItemChef'), (11, 12, 'ChefCook'), (13, 10, 'ItemOrderMenuItem'), (8, 13, 'ReservationItemOrdered')]

Adj-gen5/output.soil: [[0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0]]

Labels-gen5/output.soil: {0: 'Restaurant', 1: 'Owner', 2: 'Owner', 3: 'Table', 4: 'Table', 5: 'HeadWaiter', 6: 'Waiter', 7: 'Waiter', 8: 'RegularCustomer', 9: 'Individual', 10: 'MenuItem', 11: 'Chef', 12: 'Cook', 13: 'ItemOrder'}

Edges-gen5/output.soil: [(0, 1, 'RestaurantOwner'), (0, 2, 'RestaurantOwner'), (5, 6, 'HeadWaiterWaiter'), (5, 7, 'HeadWaiterWaiter'), (0, 9, 'RestaurantReservation'), (9, 6, 'ReservationWaiter'), (9, 3, 'ReservationTable'), (9, 4, 'ReservationTable'), (9, 8, 'ReservationCustomer'), (10, 11, 'MenuItemChef'), (11, 12, 'ChefCook'), (13, 10, 'ItemOrderMenuItem'), (9, 13, 'ReservationItemOrdered')]

Adj-gen6/output.soil: [[0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0], [1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0]]

Labels-gen6/output.soil: {0: 'Restaurant', 1: 'Owner', 2: 'Owner', 3: 'Table', 4: 'Table', 5: 'HeadWaiter', 6: 'Waiter', 7: 'Banquet', 8: 'MenuItem', 9: 'Chef', 10: 'Cook', 11: 'ItemOrder'}

Edges-gen6/output.soil: [(0, 1, 'RestaurantOwner'), (0, 2, 'RestaurantOwner'), (5, 6, 'HeadWaiterWaiter'), (0, 7, 'RestaurantReservation'), (7, 6, 'ReservationWaiter'), (7, 3, 'ReservationTable'), (7, 4, 'ReservationTable'), (8, 9, 'MenuItemChef'), (9, 10, 'ChefCook'), (11, 8, 'ItemOrderMenuItem'), (7, 11, 'ReservationItemOrdered')]

Adj-gen7/output.soil: [[0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0]]

Labels-gen7/output.soil: {0: 'Restaurant', 1: 'Owner', 2: 'Owner', 3: 'Table', 4: 'Table', 5: 'HeadWaiter', 6: 'Waiter', 7: 'Waiter', 8: 'Banquet', 9: 'MenuItem', 10: 'Chef', 11: 'Cook', 12: 'ItemOrder'}

Edges-gen7/output.soil: [(0, 1, 'RestaurantOwner'), (0, 2, 'RestaurantOwner'), (5, 6, 'HeadWaiterWaiter'), (5, 7, 'HeadWaiterWaiter'), (0, 8, 'RestaurantReservation'), (8, 6, 'ReservationWaiter'), (8, 7, 'ReservationWaiter'), (8, 3, 'ReservationTable'), (8, 4, 'ReservationTable'), (9, 10, 'MenuItemChef'), (10, 11, 'ChefCook'), (12, 9, 'ItemOrderMenuItem'), (8, 12, 'ReservationItemOrdered')]

Adj-gen8/output.soil: [[0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0], [1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0]]

Labels-gen8/output.soil: {0: 'Restaurant', 1: 'Owner', 2: 'Owner', 3: 'Table', 4: 'Table', 5: 'HeadWaiter', 6: 'Waiter', 7: 'Banquet', 8: 'BusDriver', 9: 'MenuItem', 10: 'Chef', 11: 'Cook', 12: 'ItemOrder'}

Edges-gen8/output.soil: [(0, 1, 'RestaurantOwner'), (0, 2, 'RestaurantOwner'), (5, 6, 'HeadWaiterWaiter'), (0, 7, 'RestaurantReservation'), (7, 6, 'ReservationWaiter'), (7, 3, 'ReservationTable'), (7, 4, 'ReservationTable'), (7, 8, 'BanquetBusDriver'), (9, 10, 'MenuItemChef'), (10, 11, 'ChefCook'), (12, 9, 'ItemOrderMenuItem'), (7, 12, 'ReservationItemOrdered')]

Adj-gen9/output.soil: [[0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0], [1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0]]

Labels-gen9/output.soil: {0: 'Restaurant', 1: 'Owner', 2: 'Owner', 3: 'Table', 4: 'Table', 5: 'HeadWaiter', 6: 'Waiter', 7: 'Individual', 8: 'MenuItem', 9: 'Chef', 10: 'Cook', 11: 'ItemOrder'}

Edges-gen9/output.soil: [(0, 1, 'RestaurantOwner'), (0, 2, 'RestaurantOwner'), (5, 6, 'HeadWaiterWaiter'), (0, 7, 'RestaurantReservation'), (7, 6, 'ReservationWaiter'), (7, 3, 'ReservationTable'), (7, 4, 'ReservationTable'), (8, 9, 'MenuItemChef'), (9, 10, 'ChefCook'), (11, 8, 'ItemOrderMenuItem'), (7, 11, 'ReservationItemOrdered')]

Adj-gen10/output.soil: [[0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0], [1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0]]

Labels-gen10/output.soil: {0: 'Restaurant', 1: 'Owner', 2: 'Owner', 3: 'Table', 4: 'Table', 5: 'HeadWaiter', 6: 'Waiter', 7: 'Banquet', 8: 'BusDriver', 9: 'MenuItem', 10: 'Chef', 11: 'Cook', 12: 'ItemOrder'}

Edges-gen10/output.soil: [(0, 1, 'RestaurantOwner'), (0, 2, 'RestaurantOwner'), (5, 6, 'HeadWaiterWaiter'), (0, 7, 'RestaurantReservation'), (7, 6, 'ReservationWaiter'), (7, 3, 'ReservationTable'), (7, 4, 'ReservationTable'), (7, 8, 'BanquetBusDriver'), (9, 10, 'MenuItemChef'), (10, 11, 'ChefCook'), (12, 9, 'ItemOrderMenuItem'), (7, 12, 'ReservationItemOrdered')]

Adj-gen11/output.soil: [[0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0], [1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0]]

Labels-gen11/output.soil: {0: 'Restaurant', 1: 'Owner', 2: 'Owner', 3: 'Table', 4: 'Table', 5: 'HeadWaiter', 6: 'Waiter', 7: 'Individual', 8: 'MenuItem', 9: 'Chef', 10: 'Cook', 11: 'ItemOrder'}

Edges-gen11/output.soil: [(0, 1, 'RestaurantOwner'), (0, 2, 'RestaurantOwner'), (5, 6, 'HeadWaiterWaiter'), (0, 7, 'RestaurantReservation'), (7, 6, 'ReservationWaiter'), (7, 3, 'ReservationTable'), (7, 4, 'ReservationTable'), (8, 9, 'MenuItemChef'), (9, 10, 'ChefCook'), (11, 8, 'ItemOrderMenuItem'), (7, 11, 'ReservationItemOrdered')]

Adj-gen12/output.soil: [[0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0], [1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0]]

Labels-gen12/output.soil: {0: 'Restaurant', 1: 'Owner', 2: 'Owner', 3: 'Table', 4: 'Table', 5: 'HeadWaiter', 6: 'Waiter', 7: 'Banquet', 8: 'BusDriver', 9: 'MenuItem', 10: 'Chef', 11: 'Cook', 12: 'ItemOrder'}

Edges-gen12/output.soil: [(0, 1, 'RestaurantOwner'), (0, 2, 'RestaurantOwner'), (5, 6, 'HeadWaiterWaiter'), (0, 7, 'RestaurantReservation'), (7, 6, 'ReservationWaiter'), (7, 3, 'ReservationTable'), (7, 4, 'ReservationTable'), (7, 8, 'BanquetBusDriver'), (9, 10, 'MenuItemChef'), (10, 11, 'ChefCook'), (12, 9, 'ItemOrderMenuItem'), (7, 12, 'ReservationItemOrdered')]

Adj-gen13/output.soil: [[0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0], [1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0]]

Labels-gen13/output.soil: {0: 'Restaurant', 1: 'Owner', 2: 'Owner', 3: 'Table', 4: 'Table', 5: 'HeadWaiter', 6: 'Waiter', 7: 'Individual', 8: 'MenuItem', 9: 'Chef', 10: 'Cook', 11: 'ItemOrder'}

Edges-gen13/output.soil: [(0, 1, 'RestaurantOwner'), (0, 2, 'RestaurantOwner'), (5, 6, 'HeadWaiterWaiter'), (0, 7, 'RestaurantReservation'), (7, 6, 'ReservationWaiter'), (7, 3, 'ReservationTable'), (7, 4, 'ReservationTable'), (8, 9, 'MenuItemChef'), (9, 10, 'ChefCook'), (11, 8, 'ItemOrderMenuItem'), (7, 11, 'ReservationItemOrdered')]

Adj-gen14/output.soil: [[0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0], [1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0]]

Labels-gen14/output.soil: {0: 'Restaurant', 1: 'Owner', 2: 'Owner', 3: 'Table', 4: 'Table', 5: 'HeadWaiter', 6: 'Waiter', 7: 'Banquet', 8: 'MenuItem', 9: 'Chef', 10: 'Cook', 11: 'ItemOrder'}

Edges-gen14/output.soil: [(0, 1, 'RestaurantOwner'), (0, 2, 'RestaurantOwner'), (5, 6, 'HeadWaiterWaiter'), (0, 7, 'RestaurantReservation'), (7, 6, 'ReservationWaiter'), (7, 3, 'ReservationTable'), (7, 4, 'ReservationTable'), (8, 9, 'MenuItemChef'), (9, 10, 'ChefCook'), (11, 8, 'ItemOrderMenuItem'), (7, 11, 'ReservationItemOrdered')]

Adj-gen15/output.soil: [[0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0], [1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0]]

Labels-gen15/output.soil: {0: 'Restaurant', 1: 'Owner', 2: 'Owner', 3: 'Table', 4: 'Table', 5: 'HeadWaiter', 6: 'Waiter', 7: 'Individual', 8: 'MenuItem', 9: 'Chef', 10: 'Cook', 11: 'ItemOrder'}

Edges-gen15/output.soil: [(0, 1, 'RestaurantOwner'), (0, 2, 'RestaurantOwner'), (5, 6, 'HeadWaiterWaiter'), (0, 7, 'RestaurantReservation'), (7, 6, 'ReservationWaiter'), (7, 3, 'ReservationTable'), (7, 4, 'ReservationTable'), (8, 9, 'MenuItemChef'), (9, 10, 'ChefCook'), (11, 8, 'ItemOrderMenuItem'), (7, 11, 'ReservationItemOrdered')]

Adj-gen16/output.soil: [[0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0], [1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0]]

Labels-gen16/output.soil: {0: 'Restaurant', 1: 'Owner', 2: 'Owner', 3: 'Table', 4: 'Table', 5: 'HeadWaiter', 6: 'Waiter', 7: 'Banquet', 8: 'MenuItem', 9: 'Chef', 10: 'Cook', 11: 'ItemOrder'}

Edges-gen16/output.soil: [(0, 1, 'RestaurantOwner'), (0, 2, 'RestaurantOwner'), (5, 6, 'HeadWaiterWaiter'), (0, 7, 'RestaurantReservation'), (7, 6, 'ReservationWaiter'), (7, 3, 'ReservationTable'), (7, 4, 'ReservationTable'), (8, 9, 'MenuItemChef'), (9, 10, 'ChefCook'), (11, 8, 'ItemOrderMenuItem'), (7, 11, 'ReservationItemOrdered')]

Adj-gen17/output.soil: [[0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0], [1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0]]

Labels-gen17/output.soil: {0: 'Restaurant', 1: 'Owner', 2: 'Owner', 3: 'Table', 4: 'Table', 5: 'HeadWaiter', 6: 'Waiter', 7: 'Individual', 8: 'MenuItem', 9: 'Chef', 10: 'Cook', 11: 'ItemOrder'}

Edges-gen17/output.soil: [(0, 1, 'RestaurantOwner'), (0, 2, 'RestaurantOwner'), (5, 6, 'HeadWaiterWaiter'), (0, 7, 'RestaurantReservation'), (7, 6, 'ReservationWaiter'), (7, 3, 'ReservationTable'), (7, 4, 'ReservationTable'), (8, 9, 'MenuItemChef'), (9, 10, 'ChefCook'), (11, 8, 'ItemOrderMenuItem'), (7, 11, 'ReservationItemOrdered')]

Adj-gen18/output.soil: [[0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0], [1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0]]

Labels-gen18/output.soil: {0: 'Restaurant', 1: 'Owner', 2: 'Owner', 3: 'Table', 4: 'Table', 5: 'HeadWaiter', 6: 'Waiter', 7: 'Banquet', 8: 'MenuItem', 9: 'Chef', 10: 'Cook', 11: 'ItemOrder'}

Edges-gen18/output.soil: [(0, 1, 'RestaurantOwner'), (0, 2, 'RestaurantOwner'), (5, 6, 'HeadWaiterWaiter'), (0, 7, 'RestaurantReservation'), (7, 6, 'ReservationWaiter'), (7, 3, 'ReservationTable'), (7, 4, 'ReservationTable'), (8, 9, 'MenuItemChef'), (9, 10, 'ChefCook'), (11, 8, 'ItemOrderMenuItem'), (7, 11, 'ReservationItemOrdered')]

Adj-gen19/output.soil: [[0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0], [1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0]]

Labels-gen19/output.soil: {0: 'Restaurant', 1: 'Owner', 2: 'Owner', 3: 'Table', 4: 'Table', 5: 'HeadWaiter', 6: 'Waiter', 7: 'Individual', 8: 'MenuItem', 9: 'Chef', 10: 'Cook', 11: 'ItemOrder'}

Edges-gen19/output.soil: [(0, 1, 'RestaurantOwner'), (0, 2, 'RestaurantOwner'), (5, 6, 'HeadWaiterWaiter'), (0, 7, 'RestaurantReservation'), (7, 6, 'ReservationWaiter'), (7, 3, 'ReservationTable'), (7, 4, 'ReservationTable'), (8, 9, 'MenuItemChef'), (9, 10, 'ChefCook'), (11, 8, 'ItemOrderMenuItem'), (7, 11, 'ReservationItemOrdered')]

Adj-gen20/output.soil: [[0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0], [1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0]]

Labels-gen20/output.soil: {0: 'Restaurant', 1: 'Owner', 2: 'Owner', 3: 'Table', 4: 'Table', 5: 'HeadWaiter', 6: 'Waiter', 7: 'Banquet', 8: 'MenuItem', 9: 'Chef', 10: 'Cook', 11: 'ItemOrder'}

Edges-gen20/output.soil: [(0, 1, 'RestaurantOwner'), (0, 2, 'RestaurantOwner'), (5, 6, 'HeadWaiterWaiter'), (0, 7, 'RestaurantReservation'), (7, 6, 'ReservationWaiter'), (7, 3, 'ReservationTable'), (7, 4, 'ReservationTable'), (8, 9, 'MenuItemChef'), (9, 10, 'ChefCook'), (11, 8, 'ItemOrderMenuItem'), (7, 11, 'ReservationItemOrdered')]

Adj-gen21/output.soil: [[0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0], [1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0]]

Labels-gen21/output.soil: {0: 'Restaurant', 1: 'Owner', 2: 'Owner', 3: 'Table', 4: 'Table', 5: 'HeadWaiter', 6: 'Waiter', 7: 'Individual', 8: 'MenuItem', 9: 'Chef', 10: 'Cook', 11: 'ItemOrder'}

Edges-gen21/output.soil: [(0, 1, 'RestaurantOwner'), (0, 2, 'RestaurantOwner'), (5, 6, 'HeadWaiterWaiter'), (0, 7, 'RestaurantReservation'), (7, 6, 'ReservationWaiter'), (7, 3, 'ReservationTable'), (7, 4, 'ReservationTable'), (8, 9, 'MenuItemChef'), (9, 10, 'ChefCook'), (11, 8, 'ItemOrderMenuItem'), (7, 11, 'ReservationItemOrdered')]

Adj-gen22/output.soil: [[0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0], [1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0]]

Labels-gen22/output.soil: {0: 'Restaurant', 1: 'Owner', 2: 'Owner', 3: 'Table', 4: 'Table', 5: 'HeadWaiter', 6: 'Waiter', 7: 'Banquet', 8: 'MenuItem', 9: 'Chef', 10: 'Cook', 11: 'ItemOrder'}

Edges-gen22/output.soil: [(0, 1, 'RestaurantOwner'), (0, 2, 'RestaurantOwner'), (5, 6, 'HeadWaiterWaiter'), (0, 7, 'RestaurantReservation'), (7, 6, 'ReservationWaiter'), (7, 3, 'ReservationTable'), (7, 4, 'ReservationTable'), (8, 9, 'MenuItemChef'), (9, 10, 'ChefCook'), (11, 8, 'ItemOrderMenuItem'), (7, 11, 'ReservationItemOrdered')]

Adj-gen23/output.soil: [[0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0], [1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0]]

Labels-gen23/output.soil: {0: 'Restaurant', 1: 'Owner', 2: 'Owner', 3: 'Table', 4: 'Table', 5: 'HeadWaiter', 6: 'Waiter', 7: 'Individual', 8: 'MenuItem', 9: 'Chef', 10: 'Cook', 11: 'ItemOrder'}

Edges-gen23/output.soil: [(0, 1, 'RestaurantOwner'), (0, 2, 'RestaurantOwner'), (5, 6, 'HeadWaiterWaiter'), (0, 7, 'RestaurantReservation'), (7, 6, 'ReservationWaiter'), (7, 3, 'ReservationTable'), (7, 4, 'ReservationTable'), (8, 9, 'MenuItemChef'), (9, 10, 'ChefCook'), (11, 8, 'ItemOrderMenuItem'), (7, 11, 'ReservationItemOrdered')]

Adj-gen24/output.soil: [[0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0], [1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0]]

Labels-gen24/output.soil: {0: 'Restaurant', 1: 'Owner', 2: 'Owner', 3: 'Table', 4: 'Table', 5: 'HeadWaiter', 6: 'Waiter', 7: 'Banquet', 8: 'MenuItem', 9: 'Chef', 10: 'Cook', 11: 'ItemOrder'}

Edges-gen24/output.soil: [(0, 1, 'RestaurantOwner'), (0, 2, 'RestaurantOwner'), (5, 6, 'HeadWaiterWaiter'), (0, 7, 'RestaurantReservation'), (7, 6, 'ReservationWaiter'), (7, 3, 'ReservationTable'), (7, 4, 'ReservationTable'), (8, 9, 'MenuItemChef'), (9, 10, 'ChefCook'), (11, 8, 'ItemOrderMenuItem'), (7, 11, 'ReservationItemOrdered')]

Adj-gen25/output.soil: [[0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0], [1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0]]

Labels-gen25/output.soil: {0: 'Restaurant', 1: 'Owner', 2: 'Owner', 3: 'Table', 4: 'Table', 5: 'HeadWaiter', 6: 'Waiter', 7: 'Individual', 8: 'MenuItem', 9: 'Chef', 10: 'Cook', 11: 'ItemOrder'}

Edges-gen25/output.soil: [(0, 1, 'RestaurantOwner'), (0, 2, 'RestaurantOwner'), (5, 6, 'HeadWaiterWaiter'), (0, 7, 'RestaurantReservation'), (7, 6, 'ReservationWaiter'), (7, 3, 'ReservationTable'), (7, 4, 'ReservationTable'), (8, 9, 'MenuItemChef'), (9, 10, 'ChefCook'), (11, 8, 'ItemOrderMenuItem'), (7, 11, 'ReservationItemOrdered')]

Adj-gen26/output.soil: [[0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0], [1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0]]

Labels-gen26/output.soil: {0: 'Restaurant', 1: 'Owner', 2: 'Owner', 3: 'Table', 4: 'Table', 5: 'HeadWaiter', 6: 'Waiter', 7: 'Banquet', 8: 'MenuItem', 9: 'Chef', 10: 'Cook', 11: 'ItemOrder'}

Edges-gen26/output.soil: [(0, 1, 'RestaurantOwner'), (0, 2, 'RestaurantOwner'), (5, 6, 'HeadWaiterWaiter'), (0, 7, 'RestaurantReservation'), (7, 6, 'ReservationWaiter'), (7, 3, 'ReservationTable'), (7, 4, 'ReservationTable'), (8, 9, 'MenuItemChef'), (9, 10, 'ChefCook'), (11, 8, 'ItemOrderMenuItem'), (7, 11, 'ReservationItemOrdered')]

Adj-gen27/output.soil: [[0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0], [1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0]]

Labels-gen27/output.soil: {0: 'Restaurant', 1: 'Owner', 2: 'Owner', 3: 'Table', 4: 'Table', 5: 'HeadWaiter', 6: 'Waiter', 7: 'Banquet', 8: 'MenuItem', 9: 'Chef', 10: 'Cook', 11: 'ItemOrder'}

Edges-gen27/output.soil: [(0, 1, 'RestaurantOwner'), (0, 2, 'RestaurantOwner'), (5, 6, 'HeadWaiterWaiter'), (0, 7, 'RestaurantReservation'), (7, 6, 'ReservationWaiter'), (7, 3, 'ReservationTable'), (7, 4, 'ReservationTable'), (8, 9, 'MenuItemChef'), (9, 10, 'ChefCook'), (11, 8, 'ItemOrderMenuItem'), (7, 11, 'ReservationItemOrdered')]

Adj-gen28/output.soil: [[0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0], [1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0]]

Labels-gen28/output.soil: {0: 'Restaurant', 1: 'Owner', 2: 'Owner', 3: 'Table', 4: 'Table', 5: 'HeadWaiter', 6: 'Waiter', 7: 'Banquet', 8: 'MenuItem', 9: 'Chef', 10: 'Cook', 11: 'ItemOrder'}

Edges-gen28/output.soil: [(0, 1, 'RestaurantOwner'), (0, 2, 'RestaurantOwner'), (5, 6, 'HeadWaiterWaiter'), (0, 7, 'RestaurantReservation'), (7, 6, 'ReservationWaiter'), (7, 3, 'ReservationTable'), (7, 4, 'ReservationTable'), (8, 9, 'MenuItemChef'), (9, 10, 'ChefCook'), (11, 8, 'ItemOrderMenuItem'), (7, 11, 'ReservationItemOrdered')]

Adj-gen29/output.soil: [[0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0], [1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0]]

Labels-gen29/output.soil: {0: 'Restaurant', 1: 'Owner', 2: 'Owner', 3: 'Table', 4: 'Table', 5: 'HeadWaiter', 6: 'Waiter', 7: 'Individual', 8: 'MenuItem', 9: 'Chef', 10: 'Cook', 11: 'ItemOrder'}

Edges-gen29/output.soil: [(0, 1, 'RestaurantOwner'), (0, 2, 'RestaurantOwner'), (5, 6, 'HeadWaiterWaiter'), (0, 7, 'RestaurantReservation'), (7, 6, 'ReservationWaiter'), (7, 3, 'ReservationTable'), (7, 4, 'ReservationTable'), (8, 9, 'MenuItemChef'), (9, 10, 'ChefCook'), (11, 8, 'ItemOrderMenuItem'), (7, 11, 'ReservationItemOrdered')]

Adj-gen30/output.soil: [[0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0], [1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0]]

Labels-gen30/output.soil: {0: 'Restaurant', 1: 'Owner', 2: 'Owner', 3: 'Table', 4: 'Table', 5: 'HeadWaiter', 6: 'Waiter', 7: 'Banquet', 8: 'MenuItem', 9: 'Chef', 10: 'Cook', 11: 'ItemOrder'}

Edges-gen30/output.soil: [(0, 1, 'RestaurantOwner'), (0, 2, 'RestaurantOwner'), (5, 6, 'HeadWaiterWaiter'), (0, 7, 'RestaurantReservation'), (7, 6, 'ReservationWaiter'), (7, 3, 'ReservationTable'), (7, 4, 'ReservationTable'), (8, 9, 'MenuItemChef'), (9, 10, 'ChefCook'), (11, 8, 'ItemOrderMenuItem'), (7, 11, 'ReservationItemOrdered')]

```

# GED Matrix

```json
[[0.0, 9.0, 8.0, 12.0, 10.0, 7.0, 10.0, 9.0, 6.0, 9.0, 6.0, 9.0, 6.0, 7.0, 6.0, 7.0, 6.0, 7.0, 6.0, 7.0, 6.0, 7.0, 6.0, 7.0, 6.0, 7.0, 7.0, 7.0, 6.0, 7.0], [9.0, 0.0, 3.0, 3.0, 5.0, 2.0, 3.0, 0.0, 3.0, 0.0, 3.0, 0.0, 3.0, 2.0, 3.0, 2.0, 3.0, 2.0, 3.0, 2.0, 3.0, 2.0, 3.0, 2.0, 3.0, 2.0, 2.0, 2.0, 3.0, 2.0], [8.0, 3.0, 0.0, 6.0, 2.0, 3.0, 4.0, 3.0, 2.0, 3.0, 2.0, 3.0, 2.0, 3.0, 2.0, 3.0, 2.0, 3.0, 2.0, 3.0, 2.0, 3.0, 2.0, 3.0, 2.0, 3.0, 3.0, 3.0, 2.0, 3.0], [12.0, 3.0, 6.0, 0.0, 4.0, 5.0, 2.0, 3.0, 6.0, 3.0, 6.0, 3.0, 6.0, 5.0, 6.0, 5.0, 6.0, 5.0, 6.0, 5.0, 6.0, 5.0, 6.0, 5.0, 6.0, 5.0, 5.0, 5.0, 6.0, 5.0], [10.0, 5.0, 2.0, 4.0, 0.0, 5.0, 4.0, 5.0, 4.0, 5.0, 4.0, 5.0, 4.0, 5.0, 4.0, 5.0, 4.0, 5.0, 4.0, 5.0, 4.0, 5.0, 4.0, 5.0, 4.0, 5.0, 5.0, 5.0, 4.0, 5.0], [7.0, 2.0, 3.0, 5.0, 5.0, 0.0, 3.0, 2.0, 1.0, 2.0, 1.0, 2.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0], [10.0, 3.0, 4.0, 2.0, 4.0, 3.0, 0.0, 3.0, 4.0, 3.0, 4.0, 3.0, 4.0, 3.0, 4.0, 3.0, 4.0, 3.0, 4.0, 3.0, 4.0, 3.0, 4.0, 3.0, 4.0, 3.0, 3.0, 3.0, 4.0, 3.0], [9.0, 0.0, 3.0, 3.0, 5.0, 2.0, 3.0, 0.0, 3.0, 0.0, 3.0, 0.0, 3.0, 2.0, 3.0, 2.0, 3.0, 2.0, 3.0, 2.0, 3.0, 2.0, 3.0, 2.0, 3.0, 2.0, 2.0, 2.0, 3.0, 2.0], [6.0, 3.0, 2.0, 6.0, 4.0, 1.0, 4.0, 3.0, 0.0, 3.0, 0.0, 3.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0], [9.0, 0.0, 3.0, 3.0, 5.0, 2.0, 3.0, 0.0, 3.0, 0.0, 3.0, 0.0, 3.0, 2.0, 3.0, 2.0, 3.0, 2.0, 3.0, 2.0, 3.0, 2.0, 3.0, 2.0, 3.0, 2.0, 2.0, 2.0, 3.0, 2.0], [6.0, 3.0, 2.0, 6.0, 4.0, 1.0, 4.0, 3.0, 0.0, 3.0, 0.0, 3.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0], [9.0, 0.0, 3.0, 3.0, 5.0, 2.0, 3.0, 0.0, 3.0, 0.0, 3.0, 0.0, 3.0, 2.0, 3.0, 2.0, 3.0, 2.0, 3.0, 2.0, 3.0, 2.0, 3.0, 2.0, 3.0, 2.0, 2.0, 2.0, 3.0, 2.0], [6.0, 3.0, 2.0, 6.0, 4.0, 1.0, 4.0, 3.0, 0.0, 3.0, 0.0, 3.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0], [7.0, 2.0, 3.0, 5.0, 5.0, 0.0, 3.0, 2.0, 1.0, 2.0, 1.0, 2.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0], [6.0, 3.0, 2.0, 6.0, 4.0, 1.0, 4.0, 3.0, 0.0, 3.0, 0.0, 3.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0], [7.0, 2.0, 3.0, 5.0, 5.0, 0.0, 3.0, 2.0, 1.0, 2.0, 1.0, 2.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0], [6.0, 3.0, 2.0, 6.0, 4.0, 1.0, 4.0, 3.0, 0.0, 3.0, 0.0, 3.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0], [7.0, 2.0, 3.0, 5.0, 5.0, 0.0, 3.0, 2.0, 1.0, 2.0, 1.0, 2.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0], [6.0, 3.0, 2.0, 6.0, 4.0, 1.0, 4.0, 3.0, 0.0, 3.0, 0.0, 3.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0], [7.0, 2.0, 3.0, 5.0, 5.0, 0.0, 3.0, 2.0, 1.0, 2.0, 1.0, 2.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0], [6.0, 3.0, 2.0, 6.0, 4.0, 1.0, 4.0, 3.0, 0.0, 3.0, 0.0, 3.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0], [7.0, 2.0, 3.0, 5.0, 5.0, 0.0, 3.0, 2.0, 1.0, 2.0, 1.0, 2.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0], [6.0, 3.0, 2.0, 6.0, 4.0, 1.0, 4.0, 3.0, 0.0, 3.0, 0.0, 3.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0], [7.0, 2.0, 3.0, 5.0, 5.0, 0.0, 3.0, 2.0, 1.0, 2.0, 1.0, 2.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0], [6.0, 3.0, 2.0, 6.0, 4.0, 1.0, 4.0, 3.0, 0.0, 3.0, 0.0, 3.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0], [7.0, 2.0, 3.0, 5.0, 5.0, 0.0, 3.0, 2.0, 1.0, 2.0, 1.0, 2.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0], [7.0, 2.0, 3.0, 5.0, 5.0, 0.0, 3.0, 2.0, 1.0, 2.0, 1.0, 2.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0], [7.0, 2.0, 3.0, 5.0, 5.0, 0.0, 3.0, 2.0, 1.0, 2.0, 1.0, 2.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0], [6.0, 3.0, 2.0, 6.0, 4.0, 1.0, 4.0, 3.0, 0.0, 3.0, 0.0, 3.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0], [7.0, 2.0, 3.0, 5.0, 5.0, 0.0, 3.0, 2.0, 1.0, 2.0, 1.0, 2.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0]]
```

Each cell is the cost of a concrete edit path found by the bipartite assignment (BP), IPFP, and REFINE local search, so it is an upper bound on the exact GED. The interval table pairs it with the BRANCH lower bound. A cell is `exact` when both bounds coincide.

# GED value table (upper bound)

|       | gen1/output | gen2/output | gen3/output | gen4/output | gen5/output | gen6/output | gen7/output | gen8/output | gen9/output | gen10/output | gen11/output | gen12/output | gen13/output | gen14/output | gen15/output | gen16/output | gen17/output | gen18/output | gen19/output | gen20/output | gen21/output | gen22/output | gen23/output | gen24/output | gen25/output | gen26/output | gen27/output | gen28/output | gen29/output | gen30/output |
|-------|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **gen1/output** | 0.000000 | 9.000000 | 8.000000 | 12.000000 | 10.000000 | 7.000000 | 10.000000 | 9.000000 | 6.000000 | 9.000000 | 6.000000 | 9.000000 | 6.000000 | 7.000000 | 6.000000 | 7.000000 | 6.000000 | 7.000000 | 6.000000 | 7.000000 | 6.000000 | 7.000000 | 6.000000 | 7.000000 | 6.000000 | 7.000000 | 7.000000 | 7.000000 | 6.000000 | 7.000000 |
| **gen2/output** |  | 0.000000 | 3.000000 | 3.000000 | 5.000000 | 2.000000 | 3.000000 | 0.000000 | 3.000000 | 0.000000 | 3.000000 | 0.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 2.000000 | 2.000000 | 3.000000 | 2.000000 |
| **gen3/output** |  |  | 0.000000 | 6.000000 | 2.000000 | 3.000000 | 4.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 3.000000 | 3.000000 | 2.000000 | 3.000000 |
| **gen4/output** |  |  |  | 0.000000 | 4.000000 | 5.000000 | 2.000000 | 3.000000 | 6.000000 | 3.000000 | 6.000000 | 3.000000 | 6.000000 | 5.000000 | 6.000000 | 5.000000 | 6.000000 | 5.000000 | 6.000000 | 5.000000 | 6.000000 | 5.000000 | 6.000000 | 5.000000 | 6.000000 | 5.000000 | 5.000000 | 5.000000 | 6.000000 | 5.000000 |
| **gen5/output** |  |  |  |  | 0.000000 | 5.000000 | 4.000000 | 5.000000 | 4.000000 | 5.000000 | 4.000000 | 5.000000 | 4.000000 | 5.000000 | 4.000000 | 5.000000 | 4.000000 | 5.000000 | 4.000000 | 5.000000 | 4.000000 | 5.000000 | 4.000000 | 5.000000 | 4.000000 | 5.000000 | 5.000000 | 5.000000 | 4.000000 | 5.000000 |
| **gen6/output** |  |  |  |  |  | 0.000000 | 3.000000 | 2.000000 | 1.000000 | 2.000000 | 1.000000 | 2.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 0.000000 | 0.000000 | 1.000000 | 0.000000 |
| **gen7/output** |  |  |  |  |  |  | 0.000000 | 3.000000 | 4.000000 | 3.000000 | 4.000000 | 3.000000 | 4.000000 | 3.000000 | 4.000000 | 3.000000 | 4.000000 | 3.000000 | 4.000000 | 3.000000 | 4.000000 | 3.000000 | 4.000000 | 3.000000 | 4.000000 | 3.000000 | 3.000000 | 3.000000 | 4.000000 | 3.000000 |
| **gen8/output** |  |  |  |  |  |  |  | 0.000000 | 3.000000 | 0.000000 | 3.000000 | 0.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 2.000000 | 2.000000 | 3.000000 | 2.000000 |
| **gen9/output** |  |  |  |  |  |  |  |  | 0.000000 | 3.000000 | 0.000000 | 3.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 1.000000 | 1.000000 | 0.000000 | 1.000000 |
| **gen10/output** |  |  |  |  |  |  |  |  |  | 0.000000 | 3.000000 | 0.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 2.000000 | 2.000000 | 3.000000 | 2.000000 |
| **gen11/output** |  |  |  |  |  |  |  |  |  |  | 0.000000 | 3.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 1.000000 | 1.000000 | 0.000000 | 1.000000 |
| **gen12/output** |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 2.000000 | 2.000000 | 3.000000 | 2.000000 |
| **gen13/output** |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 1.000000 | 1.000000 | 0.000000 | 1.000000 |
| **gen14/output** |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 0.000000 | 0.000000 | 1.000000 | 0.000000 |
| **gen15/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 1.000000 | 1.000000 | 0.000000 | 1.000000 |
| **gen16/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 0.000000 | 0.000000 | 1.000000 | 0.000000 |
| **gen17/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 1.000000 | 1.000000 | 0.000000 | 1.000000 |
| **gen18/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 0.000000 | 0.000000 | 1.000000 | 0.000000 |
| **gen19/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 1.000000 | 1.000000 | 0.000000 | 1.000000 |
| **gen20/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 0.000000 | 0.000000 | 1.000000 | 0.000000 |
| **gen21/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 1.000000 | 1.000000 | 0.000000 | 1.000000 |
| **gen22/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 0.000000 | 0.000000 | 1.000000 | 0.000000 |
| **gen23/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 1.000000 | 1.000000 | 0.000000 | 1.000000 |
| **gen24/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 1.000000 | 0.000000 | 0.000000 | 0.000000 | 1.000000 | 0.000000 |
| **gen25/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 1.000000 | 1.000000 | 1.000000 | 0.000000 | 1.000000 |
| **gen26/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 1.000000 | 0.000000 |
| **gen27/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 1.000000 | 0.000000 |
| **gen28/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 1.000000 | 0.000000 |
| **gen29/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 1.000000 |
| **gen30/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 |

# GED bound interval table

A single value is exact; `[lower, upper]` is the certified interval.

|       | gen1/output | gen2/output | gen3/output | gen4/output | gen5/output | gen6/output | gen7/output | gen8/output | gen9/output | gen10/output | gen11/output | gen12/output | gen13/output | gen14/output | gen15/output | gen16/output | gen17/output | gen18/output | gen19/output | gen20/output | gen21/output | gen22/output | gen23/output | gen24/output | gen25/output | gen26/output | gen27/output | gen28/output | gen29/output | gen30/output |
|-------|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **gen1/output** | 0.000000 | [8.000000, 9.000000] | [7.000000, 8.000000] | [11.000000, 12.000000] | [9.000000, 10.000000] | [6.000000, 7.000000] | [9.000000, 10.000000] | [8.000000, 9.000000] | [5.000000, 6.000000] | [8.000000, 9.000000] | [5.000000, 6.000000] | [8.000000, 9.000000] | [5.000000, 6.000000] | [6.000000, 7.000000] | [5.000000, 6.000000] | [6.000000, 7.000000] | [5.000000, 6.000000] | [6.000000, 7.000000] | [5.000000, 6.000000] | [6.000000, 7.000000] | [5.000000, 6.000000] | [6.000000, 7.000000] | [5.000000, 6.000000] | [6.000000, 7.000000] | [5.000000, 6.000000] | [6.000000, 7.000000] | [6.000000, 7.000000] | [6.000000, 7.000000] | [5.000000, 6.000000] | [6.000000, 7.000000] |
| **gen2/output** |  | 0.000000 | 3.000000 | 3.000000 | 5.000000 | 2.000000 | 3.000000 | 0.000000 | 3.000000 | 0.000000 | 3.000000 | 0.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 2.000000 | 2.000000 | 3.000000 | 2.000000 |
| **gen3/output** |  |  | 0.000000 | 6.000000 | 2.000000 | 3.000000 | 4.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 3.000000 | 3.000000 | 2.000000 | 3.000000 |
| **gen4/output** |  |  |  | 0.000000 | 4.000000 | 5.000000 | 2.000000 | 3.000000 | 6.000000 | 3.000000 | 6.000000 | 3.000000 | 6.000000 | 5.000000 | 6.000000 | 5.000000 | 6.000000 | 5.000000 | 6.000000 | 5.000000 | 6.000000 | 5.000000 | 6.000000 | 5.000000 | 6.000000 | 5.000000 | 5.000000 | 5.000000 | 6.000000 | 5.000000 |
| **gen5/output** |  |  |  |  | 0.000000 | 5.000000 | [3.500000, 4.000000] | 5.000000 | 4.000000 | 5.000000 | 4.000000 | 5.000000 | 4.000000 | 5.000000 | 4.000000 | 5.000000 | 4.000000 | 5.000000 | 4.000000 | 5.000000 | 4.000000 | 5.000000 | 4.000000 | 5.000000 | 4.000000 | 5.000000 | 5.000000 | 5.000000 | 4.000000 | 5.000000 |
| **gen6/output** |  |  |  |  |  | 0.000000 | 3.000000 | 2.000000 | 1.000000 | 2.000000 | 1.000000 | 2.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 0.000000 | 0.000000 | 1.000000 | 0.000000 |
| **gen7/output** |  |  |  |  |  |  | 0.000000 | 3.000000 | 4.000000 | 3.000000 | 4.000000 | 3.000000 | 4.000000 | 3.000000 | 4.000000 | 3.000000 | 4.000000 | 3.000000 | 4.000000 | 3.000000 | 4.000000 | 3.000000 | 4.000000 | 3.000000 | 4.000000 | 3.000000 | 3.000000 | 3.000000 | 4.000000 | 3.000000 |
| **gen8/output** |  |  |  |  |  |  |  | 0.000000 | 3.000000 | 0.000000 | 3.000000 | 0.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 2.000000 | 2.000000 | 3.000000 | 2.000000 |
| **gen9/output** |  |  |  |  |  |  |  |  | 0.000000 | 3.000000 | 0.000000 | 3.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 1.000000 | 1.000000 | 0.000000 | 1.000000 |
| **gen10/output** |  |  |  |  |  |  |  |  |  | 0.000000 | 3.000000 | 0.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 2.000000 | 2.000000 | 3.000000 | 2.000000 |
| **gen11/output** |  |  |  |  |  |  |  |  |  |  | 0.000000 | 3.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 1.000000 | 1.000000 | 0.000000 | 1.000000 |
| **gen12/output** |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 3.000000 | 2.000000 | 2.000000 | 2.000000 | 3.000000 | 2.000000 |
| **gen13/output** |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 1.000000 | 1.000000 | 0.000000 | 1.000000 |
| **gen14/output** |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 0.000000 | 0.000000 | 1.000000 | 0.000000 |
| **gen15/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 1.000000 | 1.000000 | 0.000000 | 1.000000 |
| **gen16/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 0.000000 | 0.000000 | 1.000000 | 0.000000 |
| **gen17/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 1.000000 | 1.000000 | 0.000000 | 1.000000 |
| **gen18/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 0.000000 | 0.000000 | 1.000000 | 0.000000 |
| **gen19/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 1.000000 | 1.000000 | 0.000000 | 1.000000 |
| **gen20/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 0.000000 | 0.000000 | 1.000000 | 0.000000 |
| **gen21/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 1.000000 | 1.000000 | 0.000000 | 1.000000 |
| **gen22/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 0.000000 | 0.000000 | 0.000000 | 1.000000 | 0.000000 |
| **gen23/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 1.000000 | 0.000000 | 1.000000 | 1.000000 | 1.000000 | 0.000000 | 1.000000 |
| **gen24/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 1.000000 | 0.000000 | 0.000000 | 0.000000 | 1.000000 | 0.000000 |
| **gen25/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 1.000000 | 1.000000 | 1.000000 | 0.000000 | 1.000000 |
| **gen26/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 1.000000 | 0.000000 |
| **gen27/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 1.000000 | 0.000000 |
| **gen28/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 1.000000 | 0.000000 |
| **gen29/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 1.000000 |
| **gen30/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 |

# Normalized GED diversity table

Diversity(A, B) = GED(A, B) / (GED(A, empty) + GED(B, empty)); the both-empty case is 0. Zero denotes identical labeled graphs, and higher values denote greater structural diversity.

|       | gen1/output | gen2/output | gen3/output | gen4/output | gen5/output | gen6/output | gen7/output | gen8/output | gen9/output | gen10/output | gen11/output | gen12/output | gen13/output | gen14/output | gen15/output | gen16/output | gen17/output | gen18/output | gen19/output | gen20/output | gen21/output | gen22/output | gen23/output | gen24/output | gen25/output | gen26/output | gen27/output | gen28/output | gen29/output | gen30/output |
|-------|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **gen1/output** | 0.000000 | 0.195652 | 0.173913 | 0.244898 | 0.208333 | 0.159091 | 0.212766 | 0.195652 | 0.136364 | 0.195652 | 0.136364 | 0.195652 | 0.136364 | 0.159091 | 0.136364 | 0.159091 | 0.136364 | 0.159091 | 0.136364 | 0.159091 | 0.136364 | 0.159091 | 0.136364 | 0.159091 | 0.136364 | 0.159091 | 0.159091 | 0.159091 | 0.136364 | 0.159091 |
| **gen2/output** |  | 0.000000 | 0.060000 | 0.056604 | 0.096154 | 0.041667 | 0.058824 | 0.000000 | 0.062500 | 0.000000 | 0.062500 | 0.000000 | 0.062500 | 0.041667 | 0.062500 | 0.041667 | 0.062500 | 0.041667 | 0.062500 | 0.041667 | 0.062500 | 0.041667 | 0.062500 | 0.041667 | 0.062500 | 0.041667 | 0.041667 | 0.041667 | 0.062500 | 0.041667 |
| **gen3/output** |  |  | 0.000000 | 0.113208 | 0.038462 | 0.062500 | 0.078431 | 0.060000 | 0.041667 | 0.060000 | 0.041667 | 0.060000 | 0.041667 | 0.062500 | 0.041667 | 0.062500 | 0.041667 | 0.062500 | 0.041667 | 0.062500 | 0.041667 | 0.062500 | 0.041667 | 0.062500 | 0.041667 | 0.062500 | 0.062500 | 0.062500 | 0.041667 | 0.062500 |
| **gen4/output** |  |  |  | 0.000000 | 0.072727 | 0.098039 | 0.037037 | 0.056604 | 0.117647 | 0.056604 | 0.117647 | 0.056604 | 0.117647 | 0.098039 | 0.117647 | 0.098039 | 0.117647 | 0.098039 | 0.117647 | 0.098039 | 0.117647 | 0.098039 | 0.117647 | 0.098039 | 0.117647 | 0.098039 | 0.098039 | 0.098039 | 0.117647 | 0.098039 |
| **gen5/output** |  |  |  |  | 0.000000 | 0.100000 | 0.075472 | 0.096154 | 0.080000 | 0.096154 | 0.080000 | 0.096154 | 0.080000 | 0.100000 | 0.080000 | 0.100000 | 0.080000 | 0.100000 | 0.080000 | 0.100000 | 0.080000 | 0.100000 | 0.080000 | 0.100000 | 0.080000 | 0.100000 | 0.100000 | 0.100000 | 0.080000 | 0.100000 |
| **gen6/output** |  |  |  |  |  | 0.000000 | 0.061224 | 0.041667 | 0.021739 | 0.041667 | 0.021739 | 0.041667 | 0.021739 | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.000000 | 0.000000 | 0.000000 | 0.021739 | 0.000000 |
| **gen7/output** |  |  |  |  |  |  | 0.000000 | 0.058824 | 0.081633 | 0.058824 | 0.081633 | 0.058824 | 0.081633 | 0.061224 | 0.081633 | 0.061224 | 0.081633 | 0.061224 | 0.081633 | 0.061224 | 0.081633 | 0.061224 | 0.081633 | 0.061224 | 0.081633 | 0.061224 | 0.061224 | 0.061224 | 0.081633 | 0.061224 |
| **gen8/output** |  |  |  |  |  |  |  | 0.000000 | 0.062500 | 0.000000 | 0.062500 | 0.000000 | 0.062500 | 0.041667 | 0.062500 | 0.041667 | 0.062500 | 0.041667 | 0.062500 | 0.041667 | 0.062500 | 0.041667 | 0.062500 | 0.041667 | 0.062500 | 0.041667 | 0.041667 | 0.041667 | 0.062500 | 0.041667 |
| **gen9/output** |  |  |  |  |  |  |  |  | 0.000000 | 0.062500 | 0.000000 | 0.062500 | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.021739 | 0.021739 | 0.000000 | 0.021739 |
| **gen10/output** |  |  |  |  |  |  |  |  |  | 0.000000 | 0.062500 | 0.000000 | 0.062500 | 0.041667 | 0.062500 | 0.041667 | 0.062500 | 0.041667 | 0.062500 | 0.041667 | 0.062500 | 0.041667 | 0.062500 | 0.041667 | 0.062500 | 0.041667 | 0.041667 | 0.041667 | 0.062500 | 0.041667 |
| **gen11/output** |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.062500 | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.021739 | 0.021739 | 0.000000 | 0.021739 |
| **gen12/output** |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.062500 | 0.041667 | 0.062500 | 0.041667 | 0.062500 | 0.041667 | 0.062500 | 0.041667 | 0.062500 | 0.041667 | 0.062500 | 0.041667 | 0.062500 | 0.041667 | 0.041667 | 0.041667 | 0.062500 | 0.041667 |
| **gen13/output** |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.021739 | 0.021739 | 0.000000 | 0.021739 |
| **gen14/output** |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.000000 | 0.000000 | 0.000000 | 0.021739 | 0.000000 |
| **gen15/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.021739 | 0.021739 | 0.000000 | 0.021739 |
| **gen16/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.000000 | 0.000000 | 0.000000 | 0.021739 | 0.000000 |
| **gen17/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.021739 | 0.021739 | 0.000000 | 0.021739 |
| **gen18/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.000000 | 0.000000 | 0.000000 | 0.021739 | 0.000000 |
| **gen19/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.021739 | 0.021739 | 0.000000 | 0.021739 |
| **gen20/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.000000 | 0.000000 | 0.000000 | 0.021739 | 0.000000 |
| **gen21/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.021739 | 0.021739 | 0.000000 | 0.021739 |
| **gen22/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.000000 | 0.000000 | 0.000000 | 0.021739 | 0.000000 |
| **gen23/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.021739 | 0.000000 | 0.021739 | 0.021739 | 0.021739 | 0.000000 | 0.021739 |
| **gen24/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.021739 | 0.000000 | 0.000000 | 0.000000 | 0.021739 | 0.000000 |
| **gen25/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.021739 | 0.021739 | 0.021739 | 0.000000 | 0.021739 |
| **gen26/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.021739 | 0.000000 |
| **gen27/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.021739 | 0.000000 |
| **gen28/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.021739 | 0.000000 |
| **gen29/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.021739 |
| **gen30/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 |

# Result status table

|       | gen1/output | gen2/output | gen3/output | gen4/output | gen5/output | gen6/output | gen7/output | gen8/output | gen9/output | gen10/output | gen11/output | gen12/output | gen13/output | gen14/output | gen15/output | gen16/output | gen17/output | gen18/output | gen19/output | gen20/output | gen21/output | gen22/output | gen23/output | gen24/output | gen25/output | gen26/output | gen27/output | gen28/output | gen29/output | gen30/output |
|-------|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **gen1/output** | exact | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded |
| **gen2/output** |  | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact |
| **gen3/output** |  |  | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact |
| **gen4/output** |  |  |  | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact |
| **gen5/output** |  |  |  |  | exact | exact | bounded | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact |
| **gen6/output** |  |  |  |  |  | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact |
| **gen7/output** |  |  |  |  |  |  | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact |
| **gen8/output** |  |  |  |  |  |  |  | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact |
| **gen9/output** |  |  |  |  |  |  |  |  | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact |
| **gen10/output** |  |  |  |  |  |  |  |  |  | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact |
| **gen11/output** |  |  |  |  |  |  |  |  |  |  | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact |
| **gen12/output** |  |  |  |  |  |  |  |  |  |  |  | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact |
| **gen13/output** |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact |
| **gen14/output** |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact |
| **gen15/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact |
| **gen16/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact |
| **gen17/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact |
| **gen18/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact |
| **gen19/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact |
| **gen20/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact |
| **gen21/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact |
| **gen22/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | exact | exact | exact | exact | exact | exact | exact |
| **gen23/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | exact | exact | exact | exact | exact | exact |
| **gen24/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | exact | exact | exact | exact | exact |
| **gen25/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | exact | exact | exact | exact |
| **gen26/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | exact | exact | exact |
| **gen27/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | exact | exact |
| **gen28/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | exact |
| **gen29/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact |
| **gen30/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact |

Pairs: 435; exact pairs: 405; bounded pairs: 30; mean relative gap: 0.97%; max relative gap: 16.67%; invalid files: 0.
