# Adjacency, edges, and labels

```text
Adj-gen1/output.soil: [[0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1], [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1], [0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0]]

Labels-gen1/output.soil: {0: 'Driver', 1: 'Driver', 2: 'Shipment', 3: 'Shipment', 4: 'Shipment', 5: 'Address', 6: 'Address', 7: 'Address', 8: 'Address', 9: 'GeoLocation', 10: 'GeoLocation', 11: 'GeoLocation', 12: 'GeoLocation', 13: 'Customer', 14: 'Customer', 15: 'Station'}

Edges-gen1/output.soil: [(0, 3, 'DriverShipment'), (1, 4, 'DriverShipment'), (2, 5, 'ShipmentContainsPickUpAddress'), (2, 6, 'ShipmentContainsDeliveryAddress'), (3, 7, 'ShipmentContainsPickUpAddress'), (3, 8, 'ShipmentContainsDeliveryAddress'), (4, 8, 'ShipmentContainsPickUpAddress'), (4, 5, 'ShipmentContainsDeliveryAddress'), (5, 9, 'AddressContainsGeoLocation'), (6, 10, 'AddressContainsGeoLocation'), (7, 11, 'AddressContainsGeoLocation'), (8, 12, 'AddressContainsGeoLocation'), (13, 2, 'CustomerConsistsOfShipment'), (14, 3, 'CustomerConsistsOfShipment'), (14, 4, 'CustomerConsistsOfShipment'), (15, 13, 'StationContainsCustomer'), (15, 14, 'StationContainsCustomer'), (15, 2, 'StationShipment'), (15, 3, 'StationShipment'), (15, 4, 'StationShipment'), (15, 0, 'StationContainsDriver'), (15, 1, 'StationContainsDriver')]

Adj-gen2/output.soil: [[0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1, 0]]

Labels-gen2/output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Shipment', 3: 'Address', 4: 'Address', 5: 'GeoLocation', 6: 'GeoLocation', 7: 'Customer', 8: 'Station'}

Edges-gen2/output.soil: [(0, 1, 'DriverShipment'), (0, 2, 'DriverShipment'), (1, 3, 'ShipmentContainsPickUpAddress'), (1, 4, 'ShipmentContainsDeliveryAddress'), (2, 4, 'ShipmentContainsPickUpAddress'), (2, 3, 'ShipmentContainsDeliveryAddress'), (3, 5, 'AddressContainsGeoLocation'), (4, 6, 'AddressContainsGeoLocation'), (7, 1, 'CustomerConsistsOfShipment'), (7, 2, 'CustomerConsistsOfShipment'), (8, 7, 'StationContainsCustomer'), (8, 1, 'StationShipment'), (8, 2, 'StationShipment'), (8, 0, 'StationContainsDriver')]

Adj-gen3/output.soil: [[0, 0, 1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 1, 1, 0, 0, 1, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1, 0]]

Labels-gen3/output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Shipment', 3: 'Address', 4: 'Address', 5: 'GeoLocation', 6: 'GeoLocation', 7: 'Customer', 8: 'Station'}

Edges-gen3/output.soil: [(0, 2, 'DriverShipment'), (1, 3, 'ShipmentContainsPickUpAddress'), (1, 4, 'ShipmentContainsDeliveryAddress'), (2, 4, 'ShipmentContainsPickUpAddress'), (2, 3, 'ShipmentContainsDeliveryAddress'), (3, 5, 'AddressContainsGeoLocation'), (4, 6, 'AddressContainsGeoLocation'), (7, 1, 'CustomerConsistsOfShipment'), (7, 2, 'CustomerConsistsOfShipment'), (8, 7, 'StationContainsCustomer'), (8, 1, 'StationShipment'), (8, 2, 'StationShipment'), (8, 0, 'StationContainsDriver')]

Adj-gen4/output.soil: [[0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1, 0]]

Labels-gen4/output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Shipment', 3: 'Address', 4: 'Address', 5: 'GeoLocation', 6: 'GeoLocation', 7: 'Customer', 8: 'Station'}

Edges-gen4/output.soil: [(0, 1, 'DriverShipment'), (0, 2, 'DriverShipment'), (1, 3, 'ShipmentContainsPickUpAddress'), (1, 4, 'ShipmentContainsDeliveryAddress'), (2, 4, 'ShipmentContainsPickUpAddress'), (2, 3, 'ShipmentContainsDeliveryAddress'), (3, 5, 'AddressContainsGeoLocation'), (4, 6, 'AddressContainsGeoLocation'), (7, 1, 'CustomerConsistsOfShipment'), (7, 2, 'CustomerConsistsOfShipment'), (8, 7, 'StationContainsCustomer'), (8, 1, 'StationShipment'), (8, 2, 'StationShipment'), (8, 0, 'StationContainsDriver')]

Adj-gen5/output.soil: [[0, 1, 0, 0, 0, 0, 0, 1], [1, 0, 1, 1, 0, 0, 1, 1], [0, 1, 0, 0, 1, 0, 0, 0], [0, 1, 0, 0, 0, 1, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 1], [1, 1, 0, 0, 0, 0, 1, 0]]

Labels-gen5/output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Address', 3: 'Address', 4: 'GeoLocation', 5: 'GeoLocation', 6: 'Customer', 7: 'Station'}

Edges-gen5/output.soil: [(0, 1, 'DriverShipment'), (1, 2, 'ShipmentContainsPickUpAddress'), (1, 3, 'ShipmentContainsDeliveryAddress'), (2, 4, 'AddressContainsGeoLocation'), (3, 5, 'AddressContainsGeoLocation'), (6, 1, 'CustomerConsistsOfShipment'), (7, 6, 'StationContainsCustomer'), (7, 1, 'StationShipment'), (7, 0, 'StationContainsDriver')]

Adj-gen6/output.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [0, 0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1, 0]]

Labels-gen6/output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Shipment', 3: 'Address', 4: 'Address', 5: 'GeoLocation', 6: 'GeoLocation', 7: 'Customer', 8: 'Station'}

Edges-gen6/output.soil: [(0, 1, 'DriverShipment'), (1, 3, 'ShipmentContainsPickUpAddress'), (1, 4, 'ShipmentContainsDeliveryAddress'), (2, 4, 'ShipmentContainsPickUpAddress'), (2, 3, 'ShipmentContainsDeliveryAddress'), (3, 5, 'AddressContainsGeoLocation'), (4, 6, 'AddressContainsGeoLocation'), (7, 1, 'CustomerConsistsOfShipment'), (7, 2, 'CustomerConsistsOfShipment'), (8, 7, 'StationContainsCustomer'), (8, 1, 'StationShipment'), (8, 2, 'StationShipment'), (8, 0, 'StationContainsDriver')]

Adj-gen7/output.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [0, 0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1, 0]]

Labels-gen7/output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Shipment', 3: 'Address', 4: 'Address', 5: 'GeoLocation', 6: 'GeoLocation', 7: 'Customer', 8: 'Station'}

Edges-gen7/output.soil: [(0, 1, 'DriverShipment'), (1, 3, 'ShipmentContainsPickUpAddress'), (1, 4, 'ShipmentContainsDeliveryAddress'), (2, 4, 'ShipmentContainsPickUpAddress'), (2, 3, 'ShipmentContainsDeliveryAddress'), (3, 5, 'AddressContainsGeoLocation'), (4, 6, 'AddressContainsGeoLocation'), (7, 1, 'CustomerConsistsOfShipment'), (7, 2, 'CustomerConsistsOfShipment'), (8, 7, 'StationContainsCustomer'), (8, 1, 'StationShipment'), (8, 2, 'StationShipment'), (8, 0, 'StationContainsDriver')]

Adj-gen8/output.soil: [[0, 1, 0, 0, 0, 0, 0, 1], [1, 0, 1, 1, 0, 0, 1, 1], [0, 1, 0, 0, 1, 0, 0, 0], [0, 1, 0, 0, 0, 1, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 1], [1, 1, 0, 0, 0, 0, 1, 0]]

Labels-gen8/output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Address', 3: 'Address', 4: 'GeoLocation', 5: 'GeoLocation', 6: 'Customer', 7: 'Station'}

Edges-gen8/output.soil: [(0, 1, 'DriverShipment'), (1, 2, 'ShipmentContainsPickUpAddress'), (1, 3, 'ShipmentContainsDeliveryAddress'), (2, 4, 'AddressContainsGeoLocation'), (3, 5, 'AddressContainsGeoLocation'), (6, 1, 'CustomerConsistsOfShipment'), (7, 6, 'StationContainsCustomer'), (7, 1, 'StationShipment'), (7, 0, 'StationContainsDriver')]

Adj-gen9/output.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [0, 0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1, 0]]

Labels-gen9/output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Shipment', 3: 'Address', 4: 'Address', 5: 'GeoLocation', 6: 'GeoLocation', 7: 'Customer', 8: 'Station'}

Edges-gen9/output.soil: [(0, 1, 'DriverShipment'), (1, 3, 'ShipmentContainsPickUpAddress'), (1, 4, 'ShipmentContainsDeliveryAddress'), (2, 4, 'ShipmentContainsPickUpAddress'), (2, 3, 'ShipmentContainsDeliveryAddress'), (3, 5, 'AddressContainsGeoLocation'), (4, 6, 'AddressContainsGeoLocation'), (7, 1, 'CustomerConsistsOfShipment'), (7, 2, 'CustomerConsistsOfShipment'), (8, 7, 'StationContainsCustomer'), (8, 1, 'StationShipment'), (8, 2, 'StationShipment'), (8, 0, 'StationContainsDriver')]

Adj-gen10/output.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [0, 0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1, 0]]

Labels-gen10/output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Shipment', 3: 'Address', 4: 'Address', 5: 'GeoLocation', 6: 'GeoLocation', 7: 'Customer', 8: 'Station'}

Edges-gen10/output.soil: [(0, 1, 'DriverShipment'), (1, 3, 'ShipmentContainsPickUpAddress'), (1, 4, 'ShipmentContainsDeliveryAddress'), (2, 4, 'ShipmentContainsPickUpAddress'), (2, 3, 'ShipmentContainsDeliveryAddress'), (3, 5, 'AddressContainsGeoLocation'), (4, 6, 'AddressContainsGeoLocation'), (7, 1, 'CustomerConsistsOfShipment'), (7, 2, 'CustomerConsistsOfShipment'), (8, 7, 'StationContainsCustomer'), (8, 1, 'StationShipment'), (8, 2, 'StationShipment'), (8, 0, 'StationContainsDriver')]

Adj-gen11/output.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [0, 0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1, 0]]

Labels-gen11/output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Shipment', 3: 'Address', 4: 'Address', 5: 'GeoLocation', 6: 'GeoLocation', 7: 'Customer', 8: 'Station'}

Edges-gen11/output.soil: [(0, 1, 'DriverShipment'), (1, 3, 'ShipmentContainsPickUpAddress'), (1, 4, 'ShipmentContainsDeliveryAddress'), (2, 4, 'ShipmentContainsPickUpAddress'), (2, 3, 'ShipmentContainsDeliveryAddress'), (3, 5, 'AddressContainsGeoLocation'), (4, 6, 'AddressContainsGeoLocation'), (7, 1, 'CustomerConsistsOfShipment'), (7, 2, 'CustomerConsistsOfShipment'), (8, 7, 'StationContainsCustomer'), (8, 1, 'StationShipment'), (8, 2, 'StationShipment'), (8, 0, 'StationContainsDriver')]

Adj-gen12/output.soil: [[0, 1, 0, 0, 0, 0, 0, 1], [1, 0, 1, 1, 0, 0, 1, 1], [0, 1, 0, 0, 1, 0, 0, 0], [0, 1, 0, 0, 0, 1, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 1], [1, 1, 0, 0, 0, 0, 1, 0]]

Labels-gen12/output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Address', 3: 'Address', 4: 'GeoLocation', 5: 'GeoLocation', 6: 'Customer', 7: 'Station'}

Edges-gen12/output.soil: [(0, 1, 'DriverShipment'), (1, 2, 'ShipmentContainsPickUpAddress'), (1, 3, 'ShipmentContainsDeliveryAddress'), (2, 4, 'AddressContainsGeoLocation'), (3, 5, 'AddressContainsGeoLocation'), (6, 1, 'CustomerConsistsOfShipment'), (7, 6, 'StationContainsCustomer'), (7, 1, 'StationShipment'), (7, 0, 'StationContainsDriver')]

Adj-gen13/output.soil: [[0, 0, 1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 1, 1, 0, 0, 1, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1, 0]]

Labels-gen13/output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Shipment', 3: 'Address', 4: 'Address', 5: 'GeoLocation', 6: 'GeoLocation', 7: 'Customer', 8: 'Station'}

Edges-gen13/output.soil: [(0, 2, 'DriverShipment'), (1, 3, 'ShipmentContainsPickUpAddress'), (1, 4, 'ShipmentContainsDeliveryAddress'), (2, 4, 'ShipmentContainsPickUpAddress'), (2, 3, 'ShipmentContainsDeliveryAddress'), (3, 5, 'AddressContainsGeoLocation'), (4, 6, 'AddressContainsGeoLocation'), (7, 1, 'CustomerConsistsOfShipment'), (7, 2, 'CustomerConsistsOfShipment'), (8, 7, 'StationContainsCustomer'), (8, 1, 'StationShipment'), (8, 2, 'StationShipment'), (8, 0, 'StationContainsDriver')]

Adj-gen14/output.soil: [[0, 1, 0, 0, 0, 0, 0, 1], [1, 0, 1, 1, 0, 0, 1, 1], [0, 1, 0, 0, 1, 0, 0, 0], [0, 1, 0, 0, 0, 1, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 1], [1, 1, 0, 0, 0, 0, 1, 0]]

Labels-gen14/output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Address', 3: 'Address', 4: 'GeoLocation', 5: 'GeoLocation', 6: 'Customer', 7: 'Station'}

Edges-gen14/output.soil: [(0, 1, 'DriverShipment'), (1, 2, 'ShipmentContainsPickUpAddress'), (1, 3, 'ShipmentContainsDeliveryAddress'), (2, 4, 'AddressContainsGeoLocation'), (3, 5, 'AddressContainsGeoLocation'), (6, 1, 'CustomerConsistsOfShipment'), (7, 6, 'StationContainsCustomer'), (7, 1, 'StationShipment'), (7, 0, 'StationContainsDriver')]

Adj-gen15/output.soil: [[0, 0, 1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 1, 1, 0, 0, 1, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1, 0]]

Labels-gen15/output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Shipment', 3: 'Address', 4: 'Address', 5: 'GeoLocation', 6: 'GeoLocation', 7: 'Customer', 8: 'Station'}

Edges-gen15/output.soil: [(0, 2, 'DriverShipment'), (1, 3, 'ShipmentContainsPickUpAddress'), (1, 4, 'ShipmentContainsDeliveryAddress'), (2, 4, 'ShipmentContainsPickUpAddress'), (2, 3, 'ShipmentContainsDeliveryAddress'), (3, 5, 'AddressContainsGeoLocation'), (4, 6, 'AddressContainsGeoLocation'), (7, 1, 'CustomerConsistsOfShipment'), (7, 2, 'CustomerConsistsOfShipment'), (8, 7, 'StationContainsCustomer'), (8, 1, 'StationShipment'), (8, 2, 'StationShipment'), (8, 0, 'StationContainsDriver')]

Adj-gen16/output.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [0, 0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1, 0]]

Labels-gen16/output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Shipment', 3: 'Address', 4: 'Address', 5: 'GeoLocation', 6: 'GeoLocation', 7: 'Customer', 8: 'Station'}

Edges-gen16/output.soil: [(0, 1, 'DriverShipment'), (1, 3, 'ShipmentContainsPickUpAddress'), (1, 4, 'ShipmentContainsDeliveryAddress'), (2, 4, 'ShipmentContainsPickUpAddress'), (2, 3, 'ShipmentContainsDeliveryAddress'), (3, 5, 'AddressContainsGeoLocation'), (4, 6, 'AddressContainsGeoLocation'), (7, 1, 'CustomerConsistsOfShipment'), (7, 2, 'CustomerConsistsOfShipment'), (8, 7, 'StationContainsCustomer'), (8, 1, 'StationShipment'), (8, 2, 'StationShipment'), (8, 0, 'StationContainsDriver')]

Adj-gen17/output.soil: [[0, 0, 1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 1, 1, 0, 0, 1, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1, 0]]

Labels-gen17/output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Shipment', 3: 'Address', 4: 'Address', 5: 'GeoLocation', 6: 'GeoLocation', 7: 'Customer', 8: 'Station'}

Edges-gen17/output.soil: [(0, 2, 'DriverShipment'), (1, 3, 'ShipmentContainsPickUpAddress'), (1, 4, 'ShipmentContainsDeliveryAddress'), (2, 4, 'ShipmentContainsPickUpAddress'), (2, 3, 'ShipmentContainsDeliveryAddress'), (3, 5, 'AddressContainsGeoLocation'), (4, 6, 'AddressContainsGeoLocation'), (7, 1, 'CustomerConsistsOfShipment'), (7, 2, 'CustomerConsistsOfShipment'), (8, 7, 'StationContainsCustomer'), (8, 1, 'StationShipment'), (8, 2, 'StationShipment'), (8, 0, 'StationContainsDriver')]

Adj-gen18/output.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [0, 0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1, 0]]

Labels-gen18/output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Shipment', 3: 'Address', 4: 'Address', 5: 'GeoLocation', 6: 'GeoLocation', 7: 'Customer', 8: 'Station'}

Edges-gen18/output.soil: [(0, 1, 'DriverShipment'), (1, 3, 'ShipmentContainsPickUpAddress'), (1, 4, 'ShipmentContainsDeliveryAddress'), (2, 4, 'ShipmentContainsPickUpAddress'), (2, 3, 'ShipmentContainsDeliveryAddress'), (3, 5, 'AddressContainsGeoLocation'), (4, 6, 'AddressContainsGeoLocation'), (7, 1, 'CustomerConsistsOfShipment'), (7, 2, 'CustomerConsistsOfShipment'), (8, 7, 'StationContainsCustomer'), (8, 1, 'StationShipment'), (8, 2, 'StationShipment'), (8, 0, 'StationContainsDriver')]

Adj-gen19/output.soil: [[0, 1, 0, 0, 0, 0, 0, 1], [1, 0, 1, 1, 0, 0, 1, 1], [0, 1, 0, 0, 1, 0, 0, 0], [0, 1, 0, 0, 0, 1, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 1], [1, 1, 0, 0, 0, 0, 1, 0]]

Labels-gen19/output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Address', 3: 'Address', 4: 'GeoLocation', 5: 'GeoLocation', 6: 'Customer', 7: 'Station'}

Edges-gen19/output.soil: [(0, 1, 'DriverShipment'), (1, 2, 'ShipmentContainsPickUpAddress'), (1, 3, 'ShipmentContainsDeliveryAddress'), (2, 4, 'AddressContainsGeoLocation'), (3, 5, 'AddressContainsGeoLocation'), (6, 1, 'CustomerConsistsOfShipment'), (7, 6, 'StationContainsCustomer'), (7, 1, 'StationShipment'), (7, 0, 'StationContainsDriver')]

Adj-gen20/output.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [0, 0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1, 0]]

Labels-gen20/output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Shipment', 3: 'Address', 4: 'Address', 5: 'GeoLocation', 6: 'GeoLocation', 7: 'Customer', 8: 'Station'}

Edges-gen20/output.soil: [(0, 1, 'DriverShipment'), (1, 3, 'ShipmentContainsPickUpAddress'), (1, 4, 'ShipmentContainsDeliveryAddress'), (2, 4, 'ShipmentContainsPickUpAddress'), (2, 3, 'ShipmentContainsDeliveryAddress'), (3, 5, 'AddressContainsGeoLocation'), (4, 6, 'AddressContainsGeoLocation'), (7, 1, 'CustomerConsistsOfShipment'), (7, 2, 'CustomerConsistsOfShipment'), (8, 7, 'StationContainsCustomer'), (8, 1, 'StationShipment'), (8, 2, 'StationShipment'), (8, 0, 'StationContainsDriver')]

Adj-gen21/output.soil: [[0, 0, 1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 1, 1, 0, 0, 1, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1, 0]]

Labels-gen21/output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Shipment', 3: 'Address', 4: 'Address', 5: 'GeoLocation', 6: 'GeoLocation', 7: 'Customer', 8: 'Station'}

Edges-gen21/output.soil: [(0, 2, 'DriverShipment'), (1, 3, 'ShipmentContainsPickUpAddress'), (1, 4, 'ShipmentContainsDeliveryAddress'), (2, 4, 'ShipmentContainsPickUpAddress'), (2, 3, 'ShipmentContainsDeliveryAddress'), (3, 5, 'AddressContainsGeoLocation'), (4, 6, 'AddressContainsGeoLocation'), (7, 1, 'CustomerConsistsOfShipment'), (7, 2, 'CustomerConsistsOfShipment'), (8, 7, 'StationContainsCustomer'), (8, 1, 'StationShipment'), (8, 2, 'StationShipment'), (8, 0, 'StationContainsDriver')]

Adj-gen22/output.soil: [[0, 0, 1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 1, 1, 0, 0, 1, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1, 0]]

Labels-gen22/output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Shipment', 3: 'Address', 4: 'Address', 5: 'GeoLocation', 6: 'GeoLocation', 7: 'Customer', 8: 'Station'}

Edges-gen22/output.soil: [(0, 2, 'DriverShipment'), (1, 3, 'ShipmentContainsPickUpAddress'), (1, 4, 'ShipmentContainsDeliveryAddress'), (2, 4, 'ShipmentContainsPickUpAddress'), (2, 3, 'ShipmentContainsDeliveryAddress'), (3, 5, 'AddressContainsGeoLocation'), (4, 6, 'AddressContainsGeoLocation'), (7, 1, 'CustomerConsistsOfShipment'), (7, 2, 'CustomerConsistsOfShipment'), (8, 7, 'StationContainsCustomer'), (8, 1, 'StationShipment'), (8, 2, 'StationShipment'), (8, 0, 'StationContainsDriver')]

Adj-gen23/output.soil: [[0, 0, 1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 1, 1, 0, 0, 1, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1, 0]]

Labels-gen23/output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Shipment', 3: 'Address', 4: 'Address', 5: 'GeoLocation', 6: 'GeoLocation', 7: 'Customer', 8: 'Station'}

Edges-gen23/output.soil: [(0, 2, 'DriverShipment'), (1, 3, 'ShipmentContainsPickUpAddress'), (1, 4, 'ShipmentContainsDeliveryAddress'), (2, 4, 'ShipmentContainsPickUpAddress'), (2, 3, 'ShipmentContainsDeliveryAddress'), (3, 5, 'AddressContainsGeoLocation'), (4, 6, 'AddressContainsGeoLocation'), (7, 1, 'CustomerConsistsOfShipment'), (7, 2, 'CustomerConsistsOfShipment'), (8, 7, 'StationContainsCustomer'), (8, 1, 'StationShipment'), (8, 2, 'StationShipment'), (8, 0, 'StationContainsDriver')]

Adj-gen24/output.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [0, 0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1, 0]]

Labels-gen24/output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Shipment', 3: 'Address', 4: 'Address', 5: 'GeoLocation', 6: 'GeoLocation', 7: 'Customer', 8: 'Station'}

Edges-gen24/output.soil: [(0, 1, 'DriverShipment'), (1, 3, 'ShipmentContainsPickUpAddress'), (1, 4, 'ShipmentContainsDeliveryAddress'), (2, 4, 'ShipmentContainsPickUpAddress'), (2, 3, 'ShipmentContainsDeliveryAddress'), (3, 5, 'AddressContainsGeoLocation'), (4, 6, 'AddressContainsGeoLocation'), (7, 1, 'CustomerConsistsOfShipment'), (7, 2, 'CustomerConsistsOfShipment'), (8, 7, 'StationContainsCustomer'), (8, 1, 'StationShipment'), (8, 2, 'StationShipment'), (8, 0, 'StationContainsDriver')]

Adj-gen25/output.soil: [[0, 0, 1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 1, 1, 0, 0, 1, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1, 0]]

Labels-gen25/output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Shipment', 3: 'Address', 4: 'Address', 5: 'GeoLocation', 6: 'GeoLocation', 7: 'Customer', 8: 'Station'}

Edges-gen25/output.soil: [(0, 2, 'DriverShipment'), (1, 3, 'ShipmentContainsPickUpAddress'), (1, 4, 'ShipmentContainsDeliveryAddress'), (2, 4, 'ShipmentContainsPickUpAddress'), (2, 3, 'ShipmentContainsDeliveryAddress'), (3, 5, 'AddressContainsGeoLocation'), (4, 6, 'AddressContainsGeoLocation'), (7, 1, 'CustomerConsistsOfShipment'), (7, 2, 'CustomerConsistsOfShipment'), (8, 7, 'StationContainsCustomer'), (8, 1, 'StationShipment'), (8, 2, 'StationShipment'), (8, 0, 'StationContainsDriver')]

Adj-gen26/output.soil: [[0, 0, 1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 1, 1, 0, 0, 1, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1, 0]]

Labels-gen26/output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Shipment', 3: 'Address', 4: 'Address', 5: 'GeoLocation', 6: 'GeoLocation', 7: 'Customer', 8: 'Station'}

Edges-gen26/output.soil: [(0, 2, 'DriverShipment'), (1, 3, 'ShipmentContainsPickUpAddress'), (1, 4, 'ShipmentContainsDeliveryAddress'), (2, 4, 'ShipmentContainsPickUpAddress'), (2, 3, 'ShipmentContainsDeliveryAddress'), (3, 5, 'AddressContainsGeoLocation'), (4, 6, 'AddressContainsGeoLocation'), (7, 1, 'CustomerConsistsOfShipment'), (7, 2, 'CustomerConsistsOfShipment'), (8, 7, 'StationContainsCustomer'), (8, 1, 'StationShipment'), (8, 2, 'StationShipment'), (8, 0, 'StationContainsDriver')]

Adj-gen27/output.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [0, 0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1, 0]]

Labels-gen27/output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Shipment', 3: 'Address', 4: 'Address', 5: 'GeoLocation', 6: 'GeoLocation', 7: 'Customer', 8: 'Station'}

Edges-gen27/output.soil: [(0, 1, 'DriverShipment'), (1, 3, 'ShipmentContainsPickUpAddress'), (1, 4, 'ShipmentContainsDeliveryAddress'), (2, 4, 'ShipmentContainsPickUpAddress'), (2, 3, 'ShipmentContainsDeliveryAddress'), (3, 5, 'AddressContainsGeoLocation'), (4, 6, 'AddressContainsGeoLocation'), (7, 1, 'CustomerConsistsOfShipment'), (7, 2, 'CustomerConsistsOfShipment'), (8, 7, 'StationContainsCustomer'), (8, 1, 'StationShipment'), (8, 2, 'StationShipment'), (8, 0, 'StationContainsDriver')]

Adj-gen28/output.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [0, 0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1, 0]]

Labels-gen28/output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Shipment', 3: 'Address', 4: 'Address', 5: 'GeoLocation', 6: 'GeoLocation', 7: 'Customer', 8: 'Station'}

Edges-gen28/output.soil: [(0, 1, 'DriverShipment'), (1, 3, 'ShipmentContainsPickUpAddress'), (1, 4, 'ShipmentContainsDeliveryAddress'), (2, 4, 'ShipmentContainsPickUpAddress'), (2, 3, 'ShipmentContainsDeliveryAddress'), (3, 5, 'AddressContainsGeoLocation'), (4, 6, 'AddressContainsGeoLocation'), (7, 1, 'CustomerConsistsOfShipment'), (7, 2, 'CustomerConsistsOfShipment'), (8, 7, 'StationContainsCustomer'), (8, 1, 'StationShipment'), (8, 2, 'StationShipment'), (8, 0, 'StationContainsDriver')]

Adj-gen29/output.soil: [[0, 0, 1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 1, 1, 0, 0, 1, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1, 0]]

Labels-gen29/output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Shipment', 3: 'Address', 4: 'Address', 5: 'GeoLocation', 6: 'GeoLocation', 7: 'Customer', 8: 'Station'}

Edges-gen29/output.soil: [(0, 2, 'DriverShipment'), (1, 3, 'ShipmentContainsPickUpAddress'), (1, 4, 'ShipmentContainsDeliveryAddress'), (2, 4, 'ShipmentContainsPickUpAddress'), (2, 3, 'ShipmentContainsDeliveryAddress'), (3, 5, 'AddressContainsGeoLocation'), (4, 6, 'AddressContainsGeoLocation'), (7, 1, 'CustomerConsistsOfShipment'), (7, 2, 'CustomerConsistsOfShipment'), (8, 7, 'StationContainsCustomer'), (8, 1, 'StationShipment'), (8, 2, 'StationShipment'), (8, 0, 'StationContainsDriver')]

Adj-gen30/output.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [0, 0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1, 0]]

Labels-gen30/output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Shipment', 3: 'Address', 4: 'Address', 5: 'GeoLocation', 6: 'GeoLocation', 7: 'Customer', 8: 'Station'}

Edges-gen30/output.soil: [(0, 1, 'DriverShipment'), (1, 3, 'ShipmentContainsPickUpAddress'), (1, 4, 'ShipmentContainsDeliveryAddress'), (2, 4, 'ShipmentContainsPickUpAddress'), (2, 3, 'ShipmentContainsDeliveryAddress'), (3, 5, 'AddressContainsGeoLocation'), (4, 6, 'AddressContainsGeoLocation'), (7, 1, 'CustomerConsistsOfShipment'), (7, 2, 'CustomerConsistsOfShipment'), (8, 7, 'StationContainsCustomer'), (8, 1, 'StationShipment'), (8, 2, 'StationShipment'), (8, 0, 'StationContainsDriver')]

```

# GED Matrix

```json
[[0.0, 19.0, 18.0, 19.0, 21.0, 18.0, 18.0, 21.0, 18.0, 18.0, 18.0, 21.0, 18.0, 21.0, 18.0, 18.0, 18.0, 18.0, 21.0, 18.0, 18.0, 18.0, 18.0, 18.0, 18.0, 18.0, 18.0, 18.0, 18.0, 18.0], [19.0, 0.0, 1.0, 0.0, 6.0, 1.0, 1.0, 6.0, 1.0, 1.0, 1.0, 6.0, 1.0, 6.0, 1.0, 1.0, 1.0, 1.0, 6.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0], [18.0, 1.0, 0.0, 1.0, 5.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 5.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [19.0, 0.0, 1.0, 0.0, 6.0, 1.0, 1.0, 6.0, 1.0, 1.0, 1.0, 6.0, 1.0, 6.0, 1.0, 1.0, 1.0, 1.0, 6.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0], [21.0, 6.0, 5.0, 6.0, 0.0, 5.0, 5.0, 0.0, 5.0, 5.0, 5.0, 0.0, 5.0, 0.0, 5.0, 5.0, 5.0, 5.0, 0.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0], [18.0, 1.0, 0.0, 1.0, 5.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 5.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [18.0, 1.0, 0.0, 1.0, 5.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 5.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [21.0, 6.0, 5.0, 6.0, 0.0, 5.0, 5.0, 0.0, 5.0, 5.0, 5.0, 0.0, 5.0, 0.0, 5.0, 5.0, 5.0, 5.0, 0.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0], [18.0, 1.0, 0.0, 1.0, 5.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 5.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [18.0, 1.0, 0.0, 1.0, 5.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 5.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [18.0, 1.0, 0.0, 1.0, 5.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 5.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [21.0, 6.0, 5.0, 6.0, 0.0, 5.0, 5.0, 0.0, 5.0, 5.0, 5.0, 0.0, 5.0, 0.0, 5.0, 5.0, 5.0, 5.0, 0.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0], [18.0, 1.0, 0.0, 1.0, 5.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 5.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [21.0, 6.0, 5.0, 6.0, 0.0, 5.0, 5.0, 0.0, 5.0, 5.0, 5.0, 0.0, 5.0, 0.0, 5.0, 5.0, 5.0, 5.0, 0.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0], [18.0, 1.0, 0.0, 1.0, 5.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 5.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [18.0, 1.0, 0.0, 1.0, 5.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 5.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [18.0, 1.0, 0.0, 1.0, 5.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 5.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [18.0, 1.0, 0.0, 1.0, 5.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 5.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [21.0, 6.0, 5.0, 6.0, 0.0, 5.0, 5.0, 0.0, 5.0, 5.0, 5.0, 0.0, 5.0, 0.0, 5.0, 5.0, 5.0, 5.0, 0.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0], [18.0, 1.0, 0.0, 1.0, 5.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 5.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [18.0, 1.0, 0.0, 1.0, 5.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 5.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [18.0, 1.0, 0.0, 1.0, 5.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 5.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [18.0, 1.0, 0.0, 1.0, 5.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 5.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [18.0, 1.0, 0.0, 1.0, 5.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 5.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [18.0, 1.0, 0.0, 1.0, 5.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 5.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [18.0, 1.0, 0.0, 1.0, 5.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 5.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [18.0, 1.0, 0.0, 1.0, 5.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 5.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [18.0, 1.0, 0.0, 1.0, 5.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 5.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [18.0, 1.0, 0.0, 1.0, 5.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 5.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [18.0, 1.0, 0.0, 1.0, 5.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 5.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]]
```

Each cell is the cost of a concrete edit path found by the bipartite assignment (BP), IPFP, and REFINE local search, so it is an upper bound on the exact GED. The interval table pairs it with the BRANCH lower bound. A cell is `exact` when both bounds coincide.

# GED value table (upper bound)

|       | gen1/output | gen2/output | gen3/output | gen4/output | gen5/output | gen6/output | gen7/output | gen8/output | gen9/output | gen10/output | gen11/output | gen12/output | gen13/output | gen14/output | gen15/output | gen16/output | gen17/output | gen18/output | gen19/output | gen20/output | gen21/output | gen22/output | gen23/output | gen24/output | gen25/output | gen26/output | gen27/output | gen28/output | gen29/output | gen30/output |
|-------|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **gen1/output** | 0.000000 | 19.000000 | 18.000000 | 19.000000 | 21.000000 | 18.000000 | 18.000000 | 21.000000 | 18.000000 | 18.000000 | 18.000000 | 21.000000 | 18.000000 | 21.000000 | 18.000000 | 18.000000 | 18.000000 | 18.000000 | 21.000000 | 18.000000 | 18.000000 | 18.000000 | 18.000000 | 18.000000 | 18.000000 | 18.000000 | 18.000000 | 18.000000 | 18.000000 | 18.000000 |
| **gen2/output** |  | 0.000000 | 1.000000 | 0.000000 | 6.000000 | 1.000000 | 1.000000 | 6.000000 | 1.000000 | 1.000000 | 1.000000 | 6.000000 | 1.000000 | 6.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 6.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 |
| **gen3/output** |  |  | 0.000000 | 1.000000 | 5.000000 | 0.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 5.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen4/output** |  |  |  | 0.000000 | 6.000000 | 1.000000 | 1.000000 | 6.000000 | 1.000000 | 1.000000 | 1.000000 | 6.000000 | 1.000000 | 6.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 6.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 |
| **gen5/output** |  |  |  |  | 0.000000 | 5.000000 | 5.000000 | 0.000000 | 5.000000 | 5.000000 | 5.000000 | 0.000000 | 5.000000 | 0.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 0.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 |
| **gen6/output** |  |  |  |  |  | 0.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 5.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen7/output** |  |  |  |  |  |  | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 5.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen8/output** |  |  |  |  |  |  |  | 0.000000 | 5.000000 | 5.000000 | 5.000000 | 0.000000 | 5.000000 | 0.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 0.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 |
| **gen9/output** |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 5.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen10/output** |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 5.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen11/output** |  |  |  |  |  |  |  |  |  |  | 0.000000 | 5.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen12/output** |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 5.000000 | 0.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 0.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 |
| **gen13/output** |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen14/output** |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 0.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 |
| **gen15/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen16/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen17/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen18/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen19/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 |
| **gen20/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen21/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen22/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen23/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen24/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen25/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen26/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen27/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen28/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 |
| **gen29/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 |
| **gen30/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 |

# GED bound interval table

A single value is exact; `[lower, upper]` is the certified interval.

|       | gen1/output | gen2/output | gen3/output | gen4/output | gen5/output | gen6/output | gen7/output | gen8/output | gen9/output | gen10/output | gen11/output | gen12/output | gen13/output | gen14/output | gen15/output | gen16/output | gen17/output | gen18/output | gen19/output | gen20/output | gen21/output | gen22/output | gen23/output | gen24/output | gen25/output | gen26/output | gen27/output | gen28/output | gen29/output | gen30/output |
|-------|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **gen1/output** | 0.000000 | [16.000000, 19.000000] | [16.000000, 18.000000] | [16.000000, 19.000000] | 21.000000 | [16.000000, 18.000000] | [16.000000, 18.000000] | 21.000000 | [16.000000, 18.000000] | [16.000000, 18.000000] | [16.000000, 18.000000] | 21.000000 | [16.000000, 18.000000] | 21.000000 | [16.000000, 18.000000] | [16.000000, 18.000000] | [16.000000, 18.000000] | [16.000000, 18.000000] | 21.000000 | [16.000000, 18.000000] | [16.000000, 18.000000] | [16.000000, 18.000000] | [16.000000, 18.000000] | [16.000000, 18.000000] | [16.000000, 18.000000] | [16.000000, 18.000000] | [16.000000, 18.000000] | [16.000000, 18.000000] | [16.000000, 18.000000] | [16.000000, 18.000000] |
| **gen2/output** |  | 0.000000 | 1.000000 | 0.000000 | 6.000000 | 1.000000 | 1.000000 | 6.000000 | 1.000000 | 1.000000 | 1.000000 | 6.000000 | 1.000000 | 6.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 6.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 |
| **gen3/output** |  |  | 0.000000 | 1.000000 | 5.000000 | 0.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 5.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen4/output** |  |  |  | 0.000000 | 6.000000 | 1.000000 | 1.000000 | 6.000000 | 1.000000 | 1.000000 | 1.000000 | 6.000000 | 1.000000 | 6.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 6.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 |
| **gen5/output** |  |  |  |  | 0.000000 | 5.000000 | 5.000000 | 0.000000 | 5.000000 | 5.000000 | 5.000000 | 0.000000 | 5.000000 | 0.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 0.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 |
| **gen6/output** |  |  |  |  |  | 0.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 5.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen7/output** |  |  |  |  |  |  | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 5.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen8/output** |  |  |  |  |  |  |  | 0.000000 | 5.000000 | 5.000000 | 5.000000 | 0.000000 | 5.000000 | 0.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 0.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 |
| **gen9/output** |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 5.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen10/output** |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 5.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen11/output** |  |  |  |  |  |  |  |  |  |  | 0.000000 | 5.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen12/output** |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 5.000000 | 0.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 0.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 |
| **gen13/output** |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen14/output** |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 0.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 |
| **gen15/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen16/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen17/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen18/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen19/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 |
| **gen20/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen21/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen22/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen23/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen24/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen25/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen26/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen27/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen28/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 |
| **gen29/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 |
| **gen30/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 |

# Normalized GED diversity table

Diversity(A, B) = GED(A, B) / (GED(A, empty) + GED(B, empty)); the both-empty case is 0. Zero denotes identical labeled graphs, and higher values denote greater structural diversity.

|       | gen1/output | gen2/output | gen3/output | gen4/output | gen5/output | gen6/output | gen7/output | gen8/output | gen9/output | gen10/output | gen11/output | gen12/output | gen13/output | gen14/output | gen15/output | gen16/output | gen17/output | gen18/output | gen19/output | gen20/output | gen21/output | gen22/output | gen23/output | gen24/output | gen25/output | gen26/output | gen27/output | gen28/output | gen29/output | gen30/output |
|-------|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **gen1/output** | 0.000000 | 0.311475 | 0.300000 | 0.311475 | 0.381818 | 0.300000 | 0.300000 | 0.381818 | 0.300000 | 0.300000 | 0.300000 | 0.381818 | 0.300000 | 0.381818 | 0.300000 | 0.300000 | 0.300000 | 0.300000 | 0.381818 | 0.300000 | 0.300000 | 0.300000 | 0.300000 | 0.300000 | 0.300000 | 0.300000 | 0.300000 | 0.300000 | 0.300000 | 0.300000 |
| **gen2/output** |  | 0.000000 | 0.022222 | 0.000000 | 0.150000 | 0.022222 | 0.022222 | 0.150000 | 0.022222 | 0.022222 | 0.022222 | 0.150000 | 0.022222 | 0.150000 | 0.022222 | 0.022222 | 0.022222 | 0.022222 | 0.150000 | 0.022222 | 0.022222 | 0.022222 | 0.022222 | 0.022222 | 0.022222 | 0.022222 | 0.022222 | 0.022222 | 0.022222 | 0.022222 |
| **gen3/output** |  |  | 0.000000 | 0.022222 | 0.128205 | 0.000000 | 0.000000 | 0.128205 | 0.000000 | 0.000000 | 0.000000 | 0.128205 | 0.000000 | 0.128205 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.128205 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen4/output** |  |  |  | 0.000000 | 0.150000 | 0.022222 | 0.022222 | 0.150000 | 0.022222 | 0.022222 | 0.022222 | 0.150000 | 0.022222 | 0.150000 | 0.022222 | 0.022222 | 0.022222 | 0.022222 | 0.150000 | 0.022222 | 0.022222 | 0.022222 | 0.022222 | 0.022222 | 0.022222 | 0.022222 | 0.022222 | 0.022222 | 0.022222 | 0.022222 |
| **gen5/output** |  |  |  |  | 0.000000 | 0.128205 | 0.128205 | 0.000000 | 0.128205 | 0.128205 | 0.128205 | 0.000000 | 0.128205 | 0.000000 | 0.128205 | 0.128205 | 0.128205 | 0.128205 | 0.000000 | 0.128205 | 0.128205 | 0.128205 | 0.128205 | 0.128205 | 0.128205 | 0.128205 | 0.128205 | 0.128205 | 0.128205 | 0.128205 |
| **gen6/output** |  |  |  |  |  | 0.000000 | 0.000000 | 0.128205 | 0.000000 | 0.000000 | 0.000000 | 0.128205 | 0.000000 | 0.128205 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.128205 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen7/output** |  |  |  |  |  |  | 0.000000 | 0.128205 | 0.000000 | 0.000000 | 0.000000 | 0.128205 | 0.000000 | 0.128205 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.128205 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen8/output** |  |  |  |  |  |  |  | 0.000000 | 0.128205 | 0.128205 | 0.128205 | 0.000000 | 0.128205 | 0.000000 | 0.128205 | 0.128205 | 0.128205 | 0.128205 | 0.000000 | 0.128205 | 0.128205 | 0.128205 | 0.128205 | 0.128205 | 0.128205 | 0.128205 | 0.128205 | 0.128205 | 0.128205 | 0.128205 |
| **gen9/output** |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.128205 | 0.000000 | 0.128205 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.128205 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen10/output** |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.128205 | 0.000000 | 0.128205 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.128205 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen11/output** |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.128205 | 0.000000 | 0.128205 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.128205 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen12/output** |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.128205 | 0.000000 | 0.128205 | 0.128205 | 0.128205 | 0.128205 | 0.000000 | 0.128205 | 0.128205 | 0.128205 | 0.128205 | 0.128205 | 0.128205 | 0.128205 | 0.128205 | 0.128205 | 0.128205 | 0.128205 |
| **gen13/output** |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.128205 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.128205 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen14/output** |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.128205 | 0.128205 | 0.128205 | 0.128205 | 0.000000 | 0.128205 | 0.128205 | 0.128205 | 0.128205 | 0.128205 | 0.128205 | 0.128205 | 0.128205 | 0.128205 | 0.128205 | 0.128205 |
| **gen15/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.128205 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen16/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.128205 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen17/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.128205 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen18/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.128205 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen19/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.128205 | 0.128205 | 0.128205 | 0.128205 | 0.128205 | 0.128205 | 0.128205 | 0.128205 | 0.128205 | 0.128205 | 0.128205 |
| **gen20/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen21/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen22/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen23/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen24/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen25/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen26/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen27/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen28/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 |
| **gen29/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 |
| **gen30/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 |

# Result status table

|       | gen1/output | gen2/output | gen3/output | gen4/output | gen5/output | gen6/output | gen7/output | gen8/output | gen9/output | gen10/output | gen11/output | gen12/output | gen13/output | gen14/output | gen15/output | gen16/output | gen17/output | gen18/output | gen19/output | gen20/output | gen21/output | gen22/output | gen23/output | gen24/output | gen25/output | gen26/output | gen27/output | gen28/output | gen29/output | gen30/output |
|-------|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **gen1/output** | exact | bounded | bounded | bounded | exact | bounded | bounded | exact | bounded | bounded | bounded | exact | bounded | exact | bounded | bounded | bounded | bounded | exact | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded |
| **gen2/output** |  | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact |
| **gen3/output** |  |  | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact |
| **gen4/output** |  |  |  | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact |
| **gen5/output** |  |  |  |  | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact |
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

Pairs: 435; exact pairs: 411; bounded pairs: 24; mean relative gap: 0.63%; max relative gap: 15.79%; invalid files: 0.
