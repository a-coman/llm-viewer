# Adj, edge, label 
```
Adj1-output.soil: [[0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1], [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1], [0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0]]

Labels1-output.soil: {0: 'Driver', 1: 'Driver', 2: 'Shipment', 3: 'Shipment', 4: 'Shipment', 5: 'Address', 6: 'Address', 7: 'Address', 8: 'Address', 9: 'GeoLocation', 10: 'GeoLocation', 11: 'GeoLocation', 12: 'GeoLocation', 13: 'Customer', 14: 'Customer', 15: 'Station'}

Edges1-output.soil: [(0, 3, 'DriverShipment'), (1, 4, 'DriverShipment'), (2, 5, 'ShipmentContainsPickUpAddress'), (2, 6, 'ShipmentContainsDeliveryAddress'), (3, 7, 'ShipmentContainsPickUpAddress'), (3, 8, 'ShipmentContainsDeliveryAddress'), (4, 8, 'ShipmentContainsPickUpAddress'), (4, 5, 'ShipmentContainsDeliveryAddress'), (5, 9, 'AddressContainsGeoLocation'), (6, 10, 'AddressContainsGeoLocation'), (7, 11, 'AddressContainsGeoLocation'), (8, 12, 'AddressContainsGeoLocation'), (13, 2, 'CustomerConsistsOfShipment'), (14, 3, 'CustomerConsistsOfShipment'), (14, 4, 'CustomerConsistsOfShipment'), (15, 13, 'StationContainsCustomer'), (15, 14, 'StationContainsCustomer'), (15, 2, 'StationShipment'), (15, 3, 'StationShipment'), (15, 4, 'StationShipment'), (15, 0, 'StationContainsDriver'), (15, 1, 'StationContainsDriver')]

Adj2-output.soil: [[0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1, 0]]

Labels2-output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Shipment', 3: 'Address', 4: 'Address', 5: 'GeoLocation', 6: 'GeoLocation', 7: 'Customer', 8: 'Station'}

Edges2-output.soil: [(0, 1, 'DriverShipment'), (0, 2, 'DriverShipment'), (1, 3, 'ShipmentContainsPickUpAddress'), (1, 4, 'ShipmentContainsDeliveryAddress'), (2, 4, 'ShipmentContainsPickUpAddress'), (2, 3, 'ShipmentContainsDeliveryAddress'), (3, 5, 'AddressContainsGeoLocation'), (4, 6, 'AddressContainsGeoLocation'), (7, 1, 'CustomerConsistsOfShipment'), (7, 2, 'CustomerConsistsOfShipment'), (8, 7, 'StationContainsCustomer'), (8, 1, 'StationShipment'), (8, 2, 'StationShipment'), (8, 0, 'StationContainsDriver')]

Adj3-output.soil: [[0, 0, 1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 1, 1, 0, 0, 1, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1, 0]]

Labels3-output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Shipment', 3: 'Address', 4: 'Address', 5: 'GeoLocation', 6: 'GeoLocation', 7: 'Customer', 8: 'Station'}

Edges3-output.soil: [(0, 2, 'DriverShipment'), (1, 3, 'ShipmentContainsPickUpAddress'), (1, 4, 'ShipmentContainsDeliveryAddress'), (2, 4, 'ShipmentContainsPickUpAddress'), (2, 3, 'ShipmentContainsDeliveryAddress'), (3, 5, 'AddressContainsGeoLocation'), (4, 6, 'AddressContainsGeoLocation'), (7, 1, 'CustomerConsistsOfShipment'), (7, 2, 'CustomerConsistsOfShipment'), (8, 7, 'StationContainsCustomer'), (8, 1, 'StationShipment'), (8, 2, 'StationShipment'), (8, 0, 'StationContainsDriver')]

Adj4-output.soil: [[0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1, 0]]

Labels4-output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Shipment', 3: 'Address', 4: 'Address', 5: 'GeoLocation', 6: 'GeoLocation', 7: 'Customer', 8: 'Station'}

Edges4-output.soil: [(0, 1, 'DriverShipment'), (0, 2, 'DriverShipment'), (1, 3, 'ShipmentContainsPickUpAddress'), (1, 4, 'ShipmentContainsDeliveryAddress'), (2, 4, 'ShipmentContainsPickUpAddress'), (2, 3, 'ShipmentContainsDeliveryAddress'), (3, 5, 'AddressContainsGeoLocation'), (4, 6, 'AddressContainsGeoLocation'), (7, 1, 'CustomerConsistsOfShipment'), (7, 2, 'CustomerConsistsOfShipment'), (8, 7, 'StationContainsCustomer'), (8, 1, 'StationShipment'), (8, 2, 'StationShipment'), (8, 0, 'StationContainsDriver')]

Adj5-output.soil: [[0, 1, 0, 0, 0, 0, 0, 1], [1, 0, 1, 1, 0, 0, 1, 1], [0, 1, 0, 0, 1, 0, 0, 0], [0, 1, 0, 0, 0, 1, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 1], [1, 1, 0, 0, 0, 0, 1, 0]]

Labels5-output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Address', 3: 'Address', 4: 'GeoLocation', 5: 'GeoLocation', 6: 'Customer', 7: 'Station'}

Edges5-output.soil: [(0, 1, 'DriverShipment'), (1, 2, 'ShipmentContainsPickUpAddress'), (1, 3, 'ShipmentContainsDeliveryAddress'), (2, 4, 'AddressContainsGeoLocation'), (3, 5, 'AddressContainsGeoLocation'), (6, 1, 'CustomerConsistsOfShipment'), (7, 6, 'StationContainsCustomer'), (7, 1, 'StationShipment'), (7, 0, 'StationContainsDriver')]

Adj6-output.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [0, 0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1, 0]]

Labels6-output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Shipment', 3: 'Address', 4: 'Address', 5: 'GeoLocation', 6: 'GeoLocation', 7: 'Customer', 8: 'Station'}

Edges6-output.soil: [(0, 1, 'DriverShipment'), (1, 3, 'ShipmentContainsPickUpAddress'), (1, 4, 'ShipmentContainsDeliveryAddress'), (2, 4, 'ShipmentContainsPickUpAddress'), (2, 3, 'ShipmentContainsDeliveryAddress'), (3, 5, 'AddressContainsGeoLocation'), (4, 6, 'AddressContainsGeoLocation'), (7, 1, 'CustomerConsistsOfShipment'), (7, 2, 'CustomerConsistsOfShipment'), (8, 7, 'StationContainsCustomer'), (8, 1, 'StationShipment'), (8, 2, 'StationShipment'), (8, 0, 'StationContainsDriver')]

Adj7-output.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [0, 0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1, 0]]

Labels7-output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Shipment', 3: 'Address', 4: 'Address', 5: 'GeoLocation', 6: 'GeoLocation', 7: 'Customer', 8: 'Station'}

Edges7-output.soil: [(0, 1, 'DriverShipment'), (1, 3, 'ShipmentContainsPickUpAddress'), (1, 4, 'ShipmentContainsDeliveryAddress'), (2, 4, 'ShipmentContainsPickUpAddress'), (2, 3, 'ShipmentContainsDeliveryAddress'), (3, 5, 'AddressContainsGeoLocation'), (4, 6, 'AddressContainsGeoLocation'), (7, 1, 'CustomerConsistsOfShipment'), (7, 2, 'CustomerConsistsOfShipment'), (8, 7, 'StationContainsCustomer'), (8, 1, 'StationShipment'), (8, 2, 'StationShipment'), (8, 0, 'StationContainsDriver')]

Adj8-output.soil: [[0, 1, 0, 0, 0, 0, 0, 1], [1, 0, 1, 1, 0, 0, 1, 1], [0, 1, 0, 0, 1, 0, 0, 0], [0, 1, 0, 0, 0, 1, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 1], [1, 1, 0, 0, 0, 0, 1, 0]]

Labels8-output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Address', 3: 'Address', 4: 'GeoLocation', 5: 'GeoLocation', 6: 'Customer', 7: 'Station'}

Edges8-output.soil: [(0, 1, 'DriverShipment'), (1, 2, 'ShipmentContainsPickUpAddress'), (1, 3, 'ShipmentContainsDeliveryAddress'), (2, 4, 'AddressContainsGeoLocation'), (3, 5, 'AddressContainsGeoLocation'), (6, 1, 'CustomerConsistsOfShipment'), (7, 6, 'StationContainsCustomer'), (7, 1, 'StationShipment'), (7, 0, 'StationContainsDriver')]

Adj9-output.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [0, 0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1, 0]]

Labels9-output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Shipment', 3: 'Address', 4: 'Address', 5: 'GeoLocation', 6: 'GeoLocation', 7: 'Customer', 8: 'Station'}

Edges9-output.soil: [(0, 1, 'DriverShipment'), (1, 3, 'ShipmentContainsPickUpAddress'), (1, 4, 'ShipmentContainsDeliveryAddress'), (2, 4, 'ShipmentContainsPickUpAddress'), (2, 3, 'ShipmentContainsDeliveryAddress'), (3, 5, 'AddressContainsGeoLocation'), (4, 6, 'AddressContainsGeoLocation'), (7, 1, 'CustomerConsistsOfShipment'), (7, 2, 'CustomerConsistsOfShipment'), (8, 7, 'StationContainsCustomer'), (8, 1, 'StationShipment'), (8, 2, 'StationShipment'), (8, 0, 'StationContainsDriver')]

Adj10-output.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [0, 0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1, 0]]

Labels10-output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Shipment', 3: 'Address', 4: 'Address', 5: 'GeoLocation', 6: 'GeoLocation', 7: 'Customer', 8: 'Station'}

Edges10-output.soil: [(0, 1, 'DriverShipment'), (1, 3, 'ShipmentContainsPickUpAddress'), (1, 4, 'ShipmentContainsDeliveryAddress'), (2, 4, 'ShipmentContainsPickUpAddress'), (2, 3, 'ShipmentContainsDeliveryAddress'), (3, 5, 'AddressContainsGeoLocation'), (4, 6, 'AddressContainsGeoLocation'), (7, 1, 'CustomerConsistsOfShipment'), (7, 2, 'CustomerConsistsOfShipment'), (8, 7, 'StationContainsCustomer'), (8, 1, 'StationShipment'), (8, 2, 'StationShipment'), (8, 0, 'StationContainsDriver')]

Adj11-output.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [0, 0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1, 0]]

Labels11-output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Shipment', 3: 'Address', 4: 'Address', 5: 'GeoLocation', 6: 'GeoLocation', 7: 'Customer', 8: 'Station'}

Edges11-output.soil: [(0, 1, 'DriverShipment'), (1, 3, 'ShipmentContainsPickUpAddress'), (1, 4, 'ShipmentContainsDeliveryAddress'), (2, 4, 'ShipmentContainsPickUpAddress'), (2, 3, 'ShipmentContainsDeliveryAddress'), (3, 5, 'AddressContainsGeoLocation'), (4, 6, 'AddressContainsGeoLocation'), (7, 1, 'CustomerConsistsOfShipment'), (7, 2, 'CustomerConsistsOfShipment'), (8, 7, 'StationContainsCustomer'), (8, 1, 'StationShipment'), (8, 2, 'StationShipment'), (8, 0, 'StationContainsDriver')]

Adj12-output.soil: [[0, 1, 0, 0, 0, 0, 0, 1], [1, 0, 1, 1, 0, 0, 1, 1], [0, 1, 0, 0, 1, 0, 0, 0], [0, 1, 0, 0, 0, 1, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 1], [1, 1, 0, 0, 0, 0, 1, 0]]

Labels12-output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Address', 3: 'Address', 4: 'GeoLocation', 5: 'GeoLocation', 6: 'Customer', 7: 'Station'}

Edges12-output.soil: [(0, 1, 'DriverShipment'), (1, 2, 'ShipmentContainsPickUpAddress'), (1, 3, 'ShipmentContainsDeliveryAddress'), (2, 4, 'AddressContainsGeoLocation'), (3, 5, 'AddressContainsGeoLocation'), (6, 1, 'CustomerConsistsOfShipment'), (7, 6, 'StationContainsCustomer'), (7, 1, 'StationShipment'), (7, 0, 'StationContainsDriver')]

Adj13-output.soil: [[0, 0, 1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 1, 1, 0, 0, 1, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1, 0]]

Labels13-output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Shipment', 3: 'Address', 4: 'Address', 5: 'GeoLocation', 6: 'GeoLocation', 7: 'Customer', 8: 'Station'}

Edges13-output.soil: [(0, 2, 'DriverShipment'), (1, 3, 'ShipmentContainsPickUpAddress'), (1, 4, 'ShipmentContainsDeliveryAddress'), (2, 4, 'ShipmentContainsPickUpAddress'), (2, 3, 'ShipmentContainsDeliveryAddress'), (3, 5, 'AddressContainsGeoLocation'), (4, 6, 'AddressContainsGeoLocation'), (7, 1, 'CustomerConsistsOfShipment'), (7, 2, 'CustomerConsistsOfShipment'), (8, 7, 'StationContainsCustomer'), (8, 1, 'StationShipment'), (8, 2, 'StationShipment'), (8, 0, 'StationContainsDriver')]

Adj14-output.soil: [[0, 1, 0, 0, 0, 0, 0, 1], [1, 0, 1, 1, 0, 0, 1, 1], [0, 1, 0, 0, 1, 0, 0, 0], [0, 1, 0, 0, 0, 1, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 1], [1, 1, 0, 0, 0, 0, 1, 0]]

Labels14-output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Address', 3: 'Address', 4: 'GeoLocation', 5: 'GeoLocation', 6: 'Customer', 7: 'Station'}

Edges14-output.soil: [(0, 1, 'DriverShipment'), (1, 2, 'ShipmentContainsPickUpAddress'), (1, 3, 'ShipmentContainsDeliveryAddress'), (2, 4, 'AddressContainsGeoLocation'), (3, 5, 'AddressContainsGeoLocation'), (6, 1, 'CustomerConsistsOfShipment'), (7, 6, 'StationContainsCustomer'), (7, 1, 'StationShipment'), (7, 0, 'StationContainsDriver')]

Adj15-output.soil: [[0, 0, 1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 1, 1, 0, 0, 1, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1, 0]]

Labels15-output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Shipment', 3: 'Address', 4: 'Address', 5: 'GeoLocation', 6: 'GeoLocation', 7: 'Customer', 8: 'Station'}

Edges15-output.soil: [(0, 2, 'DriverShipment'), (1, 3, 'ShipmentContainsPickUpAddress'), (1, 4, 'ShipmentContainsDeliveryAddress'), (2, 4, 'ShipmentContainsPickUpAddress'), (2, 3, 'ShipmentContainsDeliveryAddress'), (3, 5, 'AddressContainsGeoLocation'), (4, 6, 'AddressContainsGeoLocation'), (7, 1, 'CustomerConsistsOfShipment'), (7, 2, 'CustomerConsistsOfShipment'), (8, 7, 'StationContainsCustomer'), (8, 1, 'StationShipment'), (8, 2, 'StationShipment'), (8, 0, 'StationContainsDriver')]

Adj16-output.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [0, 0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1, 0]]

Labels16-output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Shipment', 3: 'Address', 4: 'Address', 5: 'GeoLocation', 6: 'GeoLocation', 7: 'Customer', 8: 'Station'}

Edges16-output.soil: [(0, 1, 'DriverShipment'), (1, 3, 'ShipmentContainsPickUpAddress'), (1, 4, 'ShipmentContainsDeliveryAddress'), (2, 4, 'ShipmentContainsPickUpAddress'), (2, 3, 'ShipmentContainsDeliveryAddress'), (3, 5, 'AddressContainsGeoLocation'), (4, 6, 'AddressContainsGeoLocation'), (7, 1, 'CustomerConsistsOfShipment'), (7, 2, 'CustomerConsistsOfShipment'), (8, 7, 'StationContainsCustomer'), (8, 1, 'StationShipment'), (8, 2, 'StationShipment'), (8, 0, 'StationContainsDriver')]

Adj17-output.soil: [[0, 0, 1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 1, 1, 0, 0, 1, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1, 0]]

Labels17-output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Shipment', 3: 'Address', 4: 'Address', 5: 'GeoLocation', 6: 'GeoLocation', 7: 'Customer', 8: 'Station'}

Edges17-output.soil: [(0, 2, 'DriverShipment'), (1, 3, 'ShipmentContainsPickUpAddress'), (1, 4, 'ShipmentContainsDeliveryAddress'), (2, 4, 'ShipmentContainsPickUpAddress'), (2, 3, 'ShipmentContainsDeliveryAddress'), (3, 5, 'AddressContainsGeoLocation'), (4, 6, 'AddressContainsGeoLocation'), (7, 1, 'CustomerConsistsOfShipment'), (7, 2, 'CustomerConsistsOfShipment'), (8, 7, 'StationContainsCustomer'), (8, 1, 'StationShipment'), (8, 2, 'StationShipment'), (8, 0, 'StationContainsDriver')]

Adj18-output.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [0, 0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1, 0]]

Labels18-output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Shipment', 3: 'Address', 4: 'Address', 5: 'GeoLocation', 6: 'GeoLocation', 7: 'Customer', 8: 'Station'}

Edges18-output.soil: [(0, 1, 'DriverShipment'), (1, 3, 'ShipmentContainsPickUpAddress'), (1, 4, 'ShipmentContainsDeliveryAddress'), (2, 4, 'ShipmentContainsPickUpAddress'), (2, 3, 'ShipmentContainsDeliveryAddress'), (3, 5, 'AddressContainsGeoLocation'), (4, 6, 'AddressContainsGeoLocation'), (7, 1, 'CustomerConsistsOfShipment'), (7, 2, 'CustomerConsistsOfShipment'), (8, 7, 'StationContainsCustomer'), (8, 1, 'StationShipment'), (8, 2, 'StationShipment'), (8, 0, 'StationContainsDriver')]

Adj19-output.soil: [[0, 1, 0, 0, 0, 0, 0, 1], [1, 0, 1, 1, 0, 0, 1, 1], [0, 1, 0, 0, 1, 0, 0, 0], [0, 1, 0, 0, 0, 1, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 1], [1, 1, 0, 0, 0, 0, 1, 0]]

Labels19-output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Address', 3: 'Address', 4: 'GeoLocation', 5: 'GeoLocation', 6: 'Customer', 7: 'Station'}

Edges19-output.soil: [(0, 1, 'DriverShipment'), (1, 2, 'ShipmentContainsPickUpAddress'), (1, 3, 'ShipmentContainsDeliveryAddress'), (2, 4, 'AddressContainsGeoLocation'), (3, 5, 'AddressContainsGeoLocation'), (6, 1, 'CustomerConsistsOfShipment'), (7, 6, 'StationContainsCustomer'), (7, 1, 'StationShipment'), (7, 0, 'StationContainsDriver')]

Adj20-output.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [0, 0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1, 0]]

Labels20-output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Shipment', 3: 'Address', 4: 'Address', 5: 'GeoLocation', 6: 'GeoLocation', 7: 'Customer', 8: 'Station'}

Edges20-output.soil: [(0, 1, 'DriverShipment'), (1, 3, 'ShipmentContainsPickUpAddress'), (1, 4, 'ShipmentContainsDeliveryAddress'), (2, 4, 'ShipmentContainsPickUpAddress'), (2, 3, 'ShipmentContainsDeliveryAddress'), (3, 5, 'AddressContainsGeoLocation'), (4, 6, 'AddressContainsGeoLocation'), (7, 1, 'CustomerConsistsOfShipment'), (7, 2, 'CustomerConsistsOfShipment'), (8, 7, 'StationContainsCustomer'), (8, 1, 'StationShipment'), (8, 2, 'StationShipment'), (8, 0, 'StationContainsDriver')]

Adj21-output.soil: [[0, 0, 1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 1, 1, 0, 0, 1, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1, 0]]

Labels21-output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Shipment', 3: 'Address', 4: 'Address', 5: 'GeoLocation', 6: 'GeoLocation', 7: 'Customer', 8: 'Station'}

Edges21-output.soil: [(0, 2, 'DriverShipment'), (1, 3, 'ShipmentContainsPickUpAddress'), (1, 4, 'ShipmentContainsDeliveryAddress'), (2, 4, 'ShipmentContainsPickUpAddress'), (2, 3, 'ShipmentContainsDeliveryAddress'), (3, 5, 'AddressContainsGeoLocation'), (4, 6, 'AddressContainsGeoLocation'), (7, 1, 'CustomerConsistsOfShipment'), (7, 2, 'CustomerConsistsOfShipment'), (8, 7, 'StationContainsCustomer'), (8, 1, 'StationShipment'), (8, 2, 'StationShipment'), (8, 0, 'StationContainsDriver')]

Adj22-output.soil: [[0, 0, 1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 1, 1, 0, 0, 1, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1, 0]]

Labels22-output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Shipment', 3: 'Address', 4: 'Address', 5: 'GeoLocation', 6: 'GeoLocation', 7: 'Customer', 8: 'Station'}

Edges22-output.soil: [(0, 2, 'DriverShipment'), (1, 3, 'ShipmentContainsPickUpAddress'), (1, 4, 'ShipmentContainsDeliveryAddress'), (2, 4, 'ShipmentContainsPickUpAddress'), (2, 3, 'ShipmentContainsDeliveryAddress'), (3, 5, 'AddressContainsGeoLocation'), (4, 6, 'AddressContainsGeoLocation'), (7, 1, 'CustomerConsistsOfShipment'), (7, 2, 'CustomerConsistsOfShipment'), (8, 7, 'StationContainsCustomer'), (8, 1, 'StationShipment'), (8, 2, 'StationShipment'), (8, 0, 'StationContainsDriver')]

Adj23-output.soil: [[0, 0, 1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 1, 1, 0, 0, 1, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1, 0]]

Labels23-output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Shipment', 3: 'Address', 4: 'Address', 5: 'GeoLocation', 6: 'GeoLocation', 7: 'Customer', 8: 'Station'}

Edges23-output.soil: [(0, 2, 'DriverShipment'), (1, 3, 'ShipmentContainsPickUpAddress'), (1, 4, 'ShipmentContainsDeliveryAddress'), (2, 4, 'ShipmentContainsPickUpAddress'), (2, 3, 'ShipmentContainsDeliveryAddress'), (3, 5, 'AddressContainsGeoLocation'), (4, 6, 'AddressContainsGeoLocation'), (7, 1, 'CustomerConsistsOfShipment'), (7, 2, 'CustomerConsistsOfShipment'), (8, 7, 'StationContainsCustomer'), (8, 1, 'StationShipment'), (8, 2, 'StationShipment'), (8, 0, 'StationContainsDriver')]

Adj24-output.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [0, 0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1, 0]]

Labels24-output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Shipment', 3: 'Address', 4: 'Address', 5: 'GeoLocation', 6: 'GeoLocation', 7: 'Customer', 8: 'Station'}

Edges24-output.soil: [(0, 1, 'DriverShipment'), (1, 3, 'ShipmentContainsPickUpAddress'), (1, 4, 'ShipmentContainsDeliveryAddress'), (2, 4, 'ShipmentContainsPickUpAddress'), (2, 3, 'ShipmentContainsDeliveryAddress'), (3, 5, 'AddressContainsGeoLocation'), (4, 6, 'AddressContainsGeoLocation'), (7, 1, 'CustomerConsistsOfShipment'), (7, 2, 'CustomerConsistsOfShipment'), (8, 7, 'StationContainsCustomer'), (8, 1, 'StationShipment'), (8, 2, 'StationShipment'), (8, 0, 'StationContainsDriver')]

Adj25-output.soil: [[0, 0, 1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 1, 1, 0, 0, 1, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1, 0]]

Labels25-output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Shipment', 3: 'Address', 4: 'Address', 5: 'GeoLocation', 6: 'GeoLocation', 7: 'Customer', 8: 'Station'}

Edges25-output.soil: [(0, 2, 'DriverShipment'), (1, 3, 'ShipmentContainsPickUpAddress'), (1, 4, 'ShipmentContainsDeliveryAddress'), (2, 4, 'ShipmentContainsPickUpAddress'), (2, 3, 'ShipmentContainsDeliveryAddress'), (3, 5, 'AddressContainsGeoLocation'), (4, 6, 'AddressContainsGeoLocation'), (7, 1, 'CustomerConsistsOfShipment'), (7, 2, 'CustomerConsistsOfShipment'), (8, 7, 'StationContainsCustomer'), (8, 1, 'StationShipment'), (8, 2, 'StationShipment'), (8, 0, 'StationContainsDriver')]

Adj26-output.soil: [[0, 0, 1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 1, 1, 0, 0, 1, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1, 0]]

Labels26-output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Shipment', 3: 'Address', 4: 'Address', 5: 'GeoLocation', 6: 'GeoLocation', 7: 'Customer', 8: 'Station'}

Edges26-output.soil: [(0, 2, 'DriverShipment'), (1, 3, 'ShipmentContainsPickUpAddress'), (1, 4, 'ShipmentContainsDeliveryAddress'), (2, 4, 'ShipmentContainsPickUpAddress'), (2, 3, 'ShipmentContainsDeliveryAddress'), (3, 5, 'AddressContainsGeoLocation'), (4, 6, 'AddressContainsGeoLocation'), (7, 1, 'CustomerConsistsOfShipment'), (7, 2, 'CustomerConsistsOfShipment'), (8, 7, 'StationContainsCustomer'), (8, 1, 'StationShipment'), (8, 2, 'StationShipment'), (8, 0, 'StationContainsDriver')]

Adj27-output.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [0, 0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1, 0]]

Labels27-output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Shipment', 3: 'Address', 4: 'Address', 5: 'GeoLocation', 6: 'GeoLocation', 7: 'Customer', 8: 'Station'}

Edges27-output.soil: [(0, 1, 'DriverShipment'), (1, 3, 'ShipmentContainsPickUpAddress'), (1, 4, 'ShipmentContainsDeliveryAddress'), (2, 4, 'ShipmentContainsPickUpAddress'), (2, 3, 'ShipmentContainsDeliveryAddress'), (3, 5, 'AddressContainsGeoLocation'), (4, 6, 'AddressContainsGeoLocation'), (7, 1, 'CustomerConsistsOfShipment'), (7, 2, 'CustomerConsistsOfShipment'), (8, 7, 'StationContainsCustomer'), (8, 1, 'StationShipment'), (8, 2, 'StationShipment'), (8, 0, 'StationContainsDriver')]

Adj28-output.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [0, 0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1, 0]]

Labels28-output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Shipment', 3: 'Address', 4: 'Address', 5: 'GeoLocation', 6: 'GeoLocation', 7: 'Customer', 8: 'Station'}

Edges28-output.soil: [(0, 1, 'DriverShipment'), (1, 3, 'ShipmentContainsPickUpAddress'), (1, 4, 'ShipmentContainsDeliveryAddress'), (2, 4, 'ShipmentContainsPickUpAddress'), (2, 3, 'ShipmentContainsDeliveryAddress'), (3, 5, 'AddressContainsGeoLocation'), (4, 6, 'AddressContainsGeoLocation'), (7, 1, 'CustomerConsistsOfShipment'), (7, 2, 'CustomerConsistsOfShipment'), (8, 7, 'StationContainsCustomer'), (8, 1, 'StationShipment'), (8, 2, 'StationShipment'), (8, 0, 'StationContainsDriver')]

Adj29-output.soil: [[0, 0, 1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 1, 1, 0, 0, 1, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1, 0]]

Labels29-output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Shipment', 3: 'Address', 4: 'Address', 5: 'GeoLocation', 6: 'GeoLocation', 7: 'Customer', 8: 'Station'}

Edges29-output.soil: [(0, 2, 'DriverShipment'), (1, 3, 'ShipmentContainsPickUpAddress'), (1, 4, 'ShipmentContainsDeliveryAddress'), (2, 4, 'ShipmentContainsPickUpAddress'), (2, 3, 'ShipmentContainsDeliveryAddress'), (3, 5, 'AddressContainsGeoLocation'), (4, 6, 'AddressContainsGeoLocation'), (7, 1, 'CustomerConsistsOfShipment'), (7, 2, 'CustomerConsistsOfShipment'), (8, 7, 'StationContainsCustomer'), (8, 1, 'StationShipment'), (8, 2, 'StationShipment'), (8, 0, 'StationContainsDriver')]

Adj30-output.soil: [[0, 1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 0, 0, 1, 1], [0, 0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1, 0]]

Labels30-output.soil: {0: 'Driver', 1: 'Shipment', 2: 'Shipment', 3: 'Address', 4: 'Address', 5: 'GeoLocation', 6: 'GeoLocation', 7: 'Customer', 8: 'Station'}

Edges30-output.soil: [(0, 1, 'DriverShipment'), (1, 3, 'ShipmentContainsPickUpAddress'), (1, 4, 'ShipmentContainsDeliveryAddress'), (2, 4, 'ShipmentContainsPickUpAddress'), (2, 3, 'ShipmentContainsDeliveryAddress'), (3, 5, 'AddressContainsGeoLocation'), (4, 6, 'AddressContainsGeoLocation'), (7, 1, 'CustomerConsistsOfShipment'), (7, 2, 'CustomerConsistsOfShipment'), (8, 7, 'StationContainsCustomer'), (8, 1, 'StationShipment'), (8, 2, 'StationShipment'), (8, 0, 'StationContainsDriver')]

```
# GED Matrix: 
```
[[0.0, 19.0, 18.0, 19.0, 21.0, 18.0, 18.0, 21.0, 18.0, 18.0, 18.0, 21.0, 18.0, 21.0, 18.0, 18.0, 18.0, 18.0, 21.0, 18.0, 18.0, 18.0, 18.0, 18.0, 18.0, 18.0, 18.0, 18.0, 18.0, 18.0], [19.0, 0.0, 1.0, 0.0, 6.0, 1.0, 1.0, 6.0, 1.0, 1.0, 1.0, 6.0, 1.0, 6.0, 1.0, 1.0, 1.0, 1.0, 6.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0], [18.0, 1.0, 0.0, 1.0, 5.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 5.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [19.0, 0.0, 1.0, 0.0, 6.0, 1.0, 1.0, 6.0, 1.0, 1.0, 1.0, 6.0, 1.0, 6.0, 1.0, 1.0, 1.0, 1.0, 6.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0], [21.0, 6.0, 5.0, 6.0, 0.0, 5.0, 5.0, 0.0, 5.0, 5.0, 5.0, 0.0, 5.0, 0.0, 5.0, 5.0, 5.0, 5.0, 0.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0], [18.0, 1.0, 0.0, 1.0, 5.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 5.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [18.0, 1.0, 0.0, 1.0, 5.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 5.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [21.0, 6.0, 5.0, 6.0, 0.0, 5.0, 5.0, 0.0, 5.0, 5.0, 5.0, 0.0, 5.0, 0.0, 5.0, 5.0, 5.0, 5.0, 0.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0], [18.0, 1.0, 0.0, 1.0, 5.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 5.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [18.0, 1.0, 0.0, 1.0, 5.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 5.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [18.0, 1.0, 0.0, 1.0, 5.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 5.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [21.0, 6.0, 5.0, 6.0, 0.0, 5.0, 5.0, 0.0, 5.0, 5.0, 5.0, 0.0, 5.0, 0.0, 5.0, 5.0, 5.0, 5.0, 0.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0], [18.0, 1.0, 0.0, 1.0, 5.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 5.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [21.0, 6.0, 5.0, 6.0, 0.0, 5.0, 5.0, 0.0, 5.0, 5.0, 5.0, 0.0, 5.0, 0.0, 5.0, 5.0, 5.0, 5.0, 0.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0], [18.0, 1.0, 0.0, 1.0, 5.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 5.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [18.0, 1.0, 0.0, 1.0, 5.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 5.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [18.0, 1.0, 0.0, 1.0, 5.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 5.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [18.0, 1.0, 0.0, 1.0, 5.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 5.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [21.0, 6.0, 5.0, 6.0, 0.0, 5.0, 5.0, 0.0, 5.0, 5.0, 5.0, 0.0, 5.0, 0.0, 5.0, 5.0, 5.0, 5.0, 0.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0], [18.0, 1.0, 0.0, 1.0, 5.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 5.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [18.0, 1.0, 0.0, 1.0, 5.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 5.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [18.0, 1.0, 0.0, 1.0, 5.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 5.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [18.0, 1.0, 0.0, 1.0, 5.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 5.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [18.0, 1.0, 0.0, 1.0, 5.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 5.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [18.0, 1.0, 0.0, 1.0, 5.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 5.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [18.0, 1.0, 0.0, 1.0, 5.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 5.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [18.0, 1.0, 0.0, 1.0, 5.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 5.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [18.0, 1.0, 0.0, 1.0, 5.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 5.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [18.0, 1.0, 0.0, 1.0, 5.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 5.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [18.0, 1.0, 0.0, 1.0, 5.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 5.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]]
```
# GED 2D table: 
|       | output1 | output2 | output3 | output4 | output5 | output6 | output7 | output8 | output9 | output10 | output11 | output12 | output13 | output14 | output15 | output16 | output17 | output18 | output19 | output20 | output21 | output22 | output23 | output24 | output25 | output26 | output27 | output28 | output29 | output30 |
|-------|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **output1** | 0.000000 | 19.000000 | 18.000000 | 19.000000 | 21.000000 | 18.000000 | 18.000000 | 21.000000 | 18.000000 | 18.000000 | 18.000000 | 21.000000 | 18.000000 | 21.000000 | 18.000000 | 18.000000 | 18.000000 | 18.000000 | 21.000000 | 18.000000 | 18.000000 | 18.000000 | 18.000000 | 18.000000 | 18.000000 | 18.000000 | 18.000000 | 18.000000 | 18.000000 | 18.000000 |
| **output2** |  | 0.000000 | 1.000000 | 0.000000 | 6.000000 | 1.000000 | 1.000000 | 6.000000 | 1.000000 | 1.000000 | 1.000000 | 6.000000 | 1.000000 | 6.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 6.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 |
| **output3** |  |  | 0.000000 | 1.000000 | 5.000000 | 0.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 5.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **output4** |  |  |  | 0.000000 | 6.000000 | 1.000000 | 1.000000 | 6.000000 | 1.000000 | 1.000000 | 1.000000 | 6.000000 | 1.000000 | 6.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 6.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 |
| **output5** |  |  |  |  | 0.000000 | 5.000000 | 5.000000 | 0.000000 | 5.000000 | 5.000000 | 5.000000 | 0.000000 | 5.000000 | 0.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 0.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 |
| **output6** |  |  |  |  |  | 0.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 5.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **output7** |  |  |  |  |  |  | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 5.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **output8** |  |  |  |  |  |  |  | 0.000000 | 5.000000 | 5.000000 | 5.000000 | 0.000000 | 5.000000 | 0.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 0.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 |
| **output9** |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 5.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **output10** |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 5.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **output11** |  |  |  |  |  |  |  |  |  |  | 0.000000 | 5.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **output12** |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 5.000000 | 0.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 0.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 |
| **output13** |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **output14** |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 0.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 |
| **output15** |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **output16** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **output17** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **output18** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 5.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **output19** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 | 5.000000 |
| **output20** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **output21** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **output22** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **output23** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **output24** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **output25** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **output26** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **output27** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **output28** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 |
| **output29** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 |
| **output30** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 |

# Normalized GED 2D table: 
|       | output1 | output2 | output3 | output4 | output5 | output6 | output7 | output8 | output9 | output10 | output11 | output12 | output13 | output14 | output15 | output16 | output17 | output18 | output19 | output20 | output21 | output22 | output23 | output24 | output25 | output26 | output27 | output28 | output29 | output30 |
|-------|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **output1** | 1.000000 | 0.377049 | 0.400000 | 0.377049 | 0.236364 | 0.400000 | 0.400000 | 0.236364 | 0.400000 | 0.400000 | 0.400000 | 0.236364 | 0.400000 | 0.236364 | 0.400000 | 0.400000 | 0.400000 | 0.400000 | 0.236364 | 0.400000 | 0.400000 | 0.400000 | 0.400000 | 0.400000 | 0.400000 | 0.400000 | 0.400000 | 0.400000 | 0.400000 | 0.400000 |
| **output2** |  | 1.000000 | 0.955556 | 1.000000 | 0.700000 | 0.955556 | 0.955556 | 0.700000 | 0.955556 | 0.955556 | 0.955556 | 0.700000 | 0.955556 | 0.700000 | 0.955556 | 0.955556 | 0.955556 | 0.955556 | 0.700000 | 0.955556 | 0.955556 | 0.955556 | 0.955556 | 0.955556 | 0.955556 | 0.955556 | 0.955556 | 0.955556 | 0.955556 | 0.955556 |
| **output3** |  |  | 1.000000 | 0.955556 | 0.743590 | 1.000000 | 1.000000 | 0.743590 | 1.000000 | 1.000000 | 1.000000 | 0.743590 | 1.000000 | 0.743590 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 0.743590 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 |
| **output4** |  |  |  | 1.000000 | 0.700000 | 0.955556 | 0.955556 | 0.700000 | 0.955556 | 0.955556 | 0.955556 | 0.700000 | 0.955556 | 0.700000 | 0.955556 | 0.955556 | 0.955556 | 0.955556 | 0.700000 | 0.955556 | 0.955556 | 0.955556 | 0.955556 | 0.955556 | 0.955556 | 0.955556 | 0.955556 | 0.955556 | 0.955556 | 0.955556 |
| **output5** |  |  |  |  | 1.000000 | 0.743590 | 0.743590 | 1.000000 | 0.743590 | 0.743590 | 0.743590 | 1.000000 | 0.743590 | 1.000000 | 0.743590 | 0.743590 | 0.743590 | 0.743590 | 1.000000 | 0.743590 | 0.743590 | 0.743590 | 0.743590 | 0.743590 | 0.743590 | 0.743590 | 0.743590 | 0.743590 | 0.743590 | 0.743590 |
| **output6** |  |  |  |  |  | 1.000000 | 1.000000 | 0.743590 | 1.000000 | 1.000000 | 1.000000 | 0.743590 | 1.000000 | 0.743590 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 0.743590 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 |
| **output7** |  |  |  |  |  |  | 1.000000 | 0.743590 | 1.000000 | 1.000000 | 1.000000 | 0.743590 | 1.000000 | 0.743590 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 0.743590 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 |
| **output8** |  |  |  |  |  |  |  | 1.000000 | 0.743590 | 0.743590 | 0.743590 | 1.000000 | 0.743590 | 1.000000 | 0.743590 | 0.743590 | 0.743590 | 0.743590 | 1.000000 | 0.743590 | 0.743590 | 0.743590 | 0.743590 | 0.743590 | 0.743590 | 0.743590 | 0.743590 | 0.743590 | 0.743590 | 0.743590 |
| **output9** |  |  |  |  |  |  |  |  | 1.000000 | 1.000000 | 1.000000 | 0.743590 | 1.000000 | 0.743590 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 0.743590 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 |
| **output10** |  |  |  |  |  |  |  |  |  | 1.000000 | 1.000000 | 0.743590 | 1.000000 | 0.743590 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 0.743590 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 |
| **output11** |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.743590 | 1.000000 | 0.743590 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 0.743590 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 |
| **output12** |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.743590 | 1.000000 | 0.743590 | 0.743590 | 0.743590 | 0.743590 | 1.000000 | 0.743590 | 0.743590 | 0.743590 | 0.743590 | 0.743590 | 0.743590 | 0.743590 | 0.743590 | 0.743590 | 0.743590 | 0.743590 |
| **output13** |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.743590 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 0.743590 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 |
| **output14** |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.743590 | 0.743590 | 0.743590 | 0.743590 | 1.000000 | 0.743590 | 0.743590 | 0.743590 | 0.743590 | 0.743590 | 0.743590 | 0.743590 | 0.743590 | 0.743590 | 0.743590 | 0.743590 |
| **output15** |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 0.743590 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 |
| **output16** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 1.000000 | 1.000000 | 0.743590 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 |
| **output17** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 1.000000 | 0.743590 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 |
| **output18** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.743590 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 |
| **output19** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.743590 | 0.743590 | 0.743590 | 0.743590 | 0.743590 | 0.743590 | 0.743590 | 0.743590 | 0.743590 | 0.743590 | 0.743590 |
| **output20** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 |
| **output21** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 |
| **output22** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 |
| **output23** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 |
| **output24** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 |
| **output25** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 |
| **output26** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 |
| **output27** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 1.000000 | 1.000000 | 1.000000 |
| **output28** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 1.000000 | 1.000000 |
| **output29** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 1.000000 |
| **output30** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 |