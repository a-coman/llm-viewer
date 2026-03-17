# Adj, edge, label 
```
Adj1-baseline.soil: [[0, 1, 0, 2], [1, 0, 0, 1], [0, 0, 0, 1], [2, 1, 1, 0]]

Labels1-baseline.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Individual', 3: 'RentalAgreement'}

Edges1-baseline.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeRentalAgreementOrigin'), (0, 3, 'RentalOfficeRentalAgreementDrop'), (3, 1, 'RentalAgreementVehicle'), (3, 2, 'RentalAgreementCustomer')]

Adj1-invalid.soil: [[0, 1, 0, 0, 2], [1, 0, 0, 0, 1], [0, 0, 0, 0, 1], [0, 0, 0, 0, 1], [2, 1, 1, 1, 0]]

Labels1-invalid.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Individual', 3: 'Company', 4: 'RentalAgreement'}

Edges1-invalid.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 4, 'RentalOfficeRentalAgreementOrigin'), (0, 4, 'RentalOfficeRentalAgreementDrop'), (4, 1, 'RentalAgreementVehicle'), (4, 2, 'RentalAgreementCustomer'), (4, 3, 'RentalAgreementCustomer')]

Adj1-boundary.soil: [[0, 1, 0, 2], [1, 0, 0, 1], [0, 0, 0, 1], [2, 1, 1, 0]]

Labels1-boundary.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Individual', 3: 'RentalAgreement'}

Edges1-boundary.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeRentalAgreementOrigin'), (0, 3, 'RentalOfficeRentalAgreementDrop'), (3, 1, 'RentalAgreementVehicle'), (3, 2, 'RentalAgreementCustomer')]

Adj1-complex.soil: [[0, 1, 1, 0, 0, 2, 2], [1, 0, 0, 0, 0, 1, 0], [1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 1], [2, 1, 0, 1, 0, 0, 0], [2, 0, 1, 0, 1, 0, 0]]

Labels1-complex.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Vehicle', 3: 'Individual', 4: 'Company', 5: 'RentalAgreement', 6: 'RentalAgreement'}

Edges1-complex.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 5, 'RentalOfficeRentalAgreementOrigin'), (0, 6, 'RentalOfficeRentalAgreementOrigin'), (0, 5, 'RentalOfficeRentalAgreementDrop'), (0, 6, 'RentalOfficeRentalAgreementDrop'), (5, 1, 'RentalAgreementVehicle'), (6, 2, 'RentalAgreementVehicle'), (5, 3, 'RentalAgreementCustomer'), (6, 4, 'RentalAgreementCustomer')]

Adj1-edge.soil: [[0, 1, 0, 0, 2, 2], [1, 0, 0, 0, 1, 1], [0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1], [2, 1, 1, 0, 0, 0], [2, 1, 0, 1, 0, 0]]

Labels1-edge.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Individual', 3: 'Company', 4: 'RentalAgreement', 5: 'RentalAgreement'}

Edges1-edge.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 4, 'RentalOfficeRentalAgreementOrigin'), (0, 4, 'RentalOfficeRentalAgreementDrop'), (4, 1, 'RentalAgreementVehicle'), (4, 2, 'RentalAgreementCustomer'), (0, 5, 'RentalOfficeRentalAgreementOrigin'), (0, 5, 'RentalOfficeRentalAgreementDrop'), (5, 1, 'RentalAgreementVehicle'), (5, 3, 'RentalAgreementCustomer')]

Adj2-baseline.soil: [[0, 1, 1, 0, 2], [1, 0, 0, 0, 0], [1, 0, 0, 0, 1], [0, 0, 0, 0, 1], [2, 0, 1, 1, 0]]

Labels2-baseline.soil: {0: 'RentalOffice', 1: 'Vehicle', 2: 'Truck', 3: 'Company', 4: 'RentalAgreement'}

Edges2-baseline.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 4, 'RentalOfficeRentalAgreementOrigin'), (0, 4, 'RentalOfficeRentalAgreementDrop'), (4, 2, 'RentalAgreementVehicle'), (4, 3, 'RentalAgreementCustomer')]

Adj2-invalid.soil: [[0, 1, 0, 2], [1, 0, 0, 1], [0, 0, 0, 1], [2, 1, 1, 0]]

Labels2-invalid.soil: {0: 'RentalOffice', 1: 'Vehicle', 2: 'Individual', 3: 'RentalAgreement'}

Edges2-invalid.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeRentalAgreementOrigin'), (0, 3, 'RentalOfficeRentalAgreementDrop'), (3, 1, 'RentalAgreementVehicle'), (3, 2, 'RentalAgreementCustomer')]

Adj2-boundary.soil: [[0, 1, 2, 0], [1, 0, 1, 0], [2, 1, 0, 1], [0, 0, 1, 0]]

Labels2-boundary.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'RentalAgreement', 3: 'Company'}

Edges2-boundary.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeRentalAgreementOrigin'), (0, 2, 'RentalOfficeRentalAgreementDrop'), (2, 1, 'RentalAgreementVehicle'), (2, 3, 'RentalAgreementCustomer')]

Adj2-complex.soil: [[0, 1, 1, 1, 0, 0, 2, 2, 2], [1, 0, 0, 0, 0, 0, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1, 0], [1, 0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1], [2, 1, 0, 0, 1, 0, 0, 0, 0], [2, 0, 1, 0, 0, 1, 0, 0, 0], [2, 0, 0, 1, 0, 1, 0, 0, 0]]

Labels2-complex.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Vehicle', 3: 'Truck', 4: 'Individual', 5: 'Company', 6: 'RentalAgreement', 7: 'RentalAgreement', 8: 'RentalAgreement'}

Edges2-complex.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeVehicle'), (0, 6, 'RentalOfficeRentalAgreementOrigin'), (0, 7, 'RentalOfficeRentalAgreementOrigin'), (0, 8, 'RentalOfficeRentalAgreementOrigin'), (0, 6, 'RentalOfficeRentalAgreementDrop'), (0, 7, 'RentalOfficeRentalAgreementDrop'), (0, 8, 'RentalOfficeRentalAgreementDrop'), (6, 1, 'RentalAgreementVehicle'), (7, 2, 'RentalAgreementVehicle'), (8, 3, 'RentalAgreementVehicle'), (6, 4, 'RentalAgreementCustomer'), (7, 5, 'RentalAgreementCustomer'), (8, 5, 'RentalAgreementCustomer')]

Adj2-edge.soil: [[0, 1, 1, 0, 0, 2, 2], [1, 0, 0, 0, 0, 1, 0], [1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 1], [2, 1, 0, 1, 0, 0, 0], [2, 0, 1, 0, 1, 0, 0]]

Labels2-edge.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Vehicle', 3: 'Individual', 4: 'Company', 5: 'RentalAgreement', 6: 'RentalAgreement'}

Edges2-edge.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 5, 'RentalOfficeRentalAgreementOrigin'), (0, 6, 'RentalOfficeRentalAgreementOrigin'), (0, 5, 'RentalOfficeRentalAgreementDrop'), (0, 6, 'RentalOfficeRentalAgreementDrop'), (5, 1, 'RentalAgreementVehicle'), (6, 2, 'RentalAgreementVehicle'), (5, 3, 'RentalAgreementCustomer'), (6, 4, 'RentalAgreementCustomer')]

Adj3-baseline.soil: [[0, 1, 1, 0, 2], [1, 0, 0, 0, 0], [1, 0, 0, 0, 1], [0, 0, 0, 0, 1], [2, 0, 1, 1, 0]]

Labels3-baseline.soil: {0: 'RentalOffice', 1: 'Vehicle', 2: 'Truck', 3: 'Individual', 4: 'RentalAgreement'}

Edges3-baseline.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 4, 'RentalOfficeRentalAgreementOrigin'), (0, 4, 'RentalOfficeRentalAgreementDrop'), (4, 2, 'RentalAgreementVehicle'), (4, 3, 'RentalAgreementCustomer')]

Adj3-invalid.soil: [[0, 1, 0, 2], [1, 0, 0, 1], [0, 0, 0, 1], [2, 1, 1, 0]]

Labels3-invalid.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Company', 3: 'RentalAgreement'}

Edges3-invalid.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeRentalAgreementOrigin'), (0, 3, 'RentalOfficeRentalAgreementDrop'), (3, 1, 'RentalAgreementVehicle'), (3, 2, 'RentalAgreementCustomer')]

Adj3-boundary.soil: [[0, 1, 2, 0], [1, 0, 1, 0], [2, 1, 0, 1], [0, 0, 1, 0]]

Labels3-boundary.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'RentalAgreement', 3: 'Individual'}

Edges3-boundary.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeRentalAgreementOrigin'), (0, 2, 'RentalOfficeRentalAgreementDrop'), (2, 1, 'RentalAgreementVehicle'), (2, 3, 'RentalAgreementCustomer')]

Adj3-complex.soil: [[0, 1, 1, 1, 0, 0, 2, 2, 2], [1, 0, 0, 0, 0, 0, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1, 0], [1, 0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1], [2, 1, 0, 0, 1, 0, 0, 0, 0], [2, 0, 1, 0, 0, 1, 0, 0, 0], [2, 0, 0, 1, 0, 1, 0, 0, 0]]

Labels3-complex.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Truck', 3: 'Vehicle', 4: 'Individual', 5: 'Company', 6: 'RentalAgreement', 7: 'RentalAgreement', 8: 'RentalAgreement'}

Edges3-complex.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeVehicle'), (0, 6, 'RentalOfficeRentalAgreementOrigin'), (0, 7, 'RentalOfficeRentalAgreementOrigin'), (0, 8, 'RentalOfficeRentalAgreementOrigin'), (0, 6, 'RentalOfficeRentalAgreementDrop'), (0, 7, 'RentalOfficeRentalAgreementDrop'), (0, 8, 'RentalOfficeRentalAgreementDrop'), (6, 1, 'RentalAgreementVehicle'), (7, 2, 'RentalAgreementVehicle'), (8, 3, 'RentalAgreementVehicle'), (6, 4, 'RentalAgreementCustomer'), (7, 5, 'RentalAgreementCustomer'), (8, 5, 'RentalAgreementCustomer')]

Adj3-edge.soil: [[0, 1, 0, 0, 2, 2], [1, 0, 0, 0, 1, 1], [0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1], [2, 1, 1, 0, 0, 0], [2, 1, 0, 1, 0, 0]]

Labels3-edge.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Individual', 3: 'Company', 4: 'RentalAgreement', 5: 'RentalAgreement'}

Edges3-edge.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 4, 'RentalOfficeRentalAgreementOrigin'), (0, 5, 'RentalOfficeRentalAgreementOrigin'), (0, 4, 'RentalOfficeRentalAgreementDrop'), (0, 5, 'RentalOfficeRentalAgreementDrop'), (4, 1, 'RentalAgreementVehicle'), (5, 1, 'RentalAgreementVehicle'), (4, 2, 'RentalAgreementCustomer'), (5, 3, 'RentalAgreementCustomer')]

Adj4-baseline.soil: [[0, 1, 1, 0, 2], [1, 0, 0, 0, 1], [1, 0, 0, 0, 0], [0, 0, 0, 0, 1], [2, 1, 0, 1, 0]]

Labels4-baseline.soil: {0: 'RentalOffice', 1: 'Vehicle', 2: 'Truck', 3: 'Company', 4: 'RentalAgreement'}

Edges4-baseline.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 4, 'RentalOfficeRentalAgreementOrigin'), (0, 4, 'RentalOfficeRentalAgreementDrop'), (4, 1, 'RentalAgreementVehicle'), (4, 3, 'RentalAgreementCustomer')]

Adj4-invalid.soil: [[0, 1, 0, 0, 2, 2], [1, 0, 0, 0, 1, 1], [0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1], [2, 1, 1, 0, 0, 0], [2, 1, 0, 1, 0, 0]]

Labels4-invalid.soil: {0: 'RentalOffice', 1: 'Vehicle', 2: 'Individual', 3: 'Company', 4: 'RentalAgreement', 5: 'RentalAgreement'}

Edges4-invalid.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 4, 'RentalOfficeRentalAgreementOrigin'), (0, 5, 'RentalOfficeRentalAgreementOrigin'), (0, 4, 'RentalOfficeRentalAgreementDrop'), (0, 5, 'RentalOfficeRentalAgreementDrop'), (4, 1, 'RentalAgreementVehicle'), (5, 1, 'RentalAgreementVehicle'), (4, 2, 'RentalAgreementCustomer'), (5, 3, 'RentalAgreementCustomer')]

Adj4-boundary.soil: [[0, 1, 2, 0], [1, 0, 1, 0], [2, 1, 0, 1], [0, 0, 1, 0]]

Labels4-boundary.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'RentalAgreement', 3: 'Company'}

Edges4-boundary.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeRentalAgreementOrigin'), (0, 2, 'RentalOfficeRentalAgreementDrop'), (2, 1, 'RentalAgreementVehicle'), (2, 3, 'RentalAgreementCustomer')]

Adj4-complex.soil: [[0, 1, 1, 1, 0, 0, 2, 2, 2], [1, 0, 0, 0, 0, 0, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1, 0], [1, 0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1], [2, 1, 0, 0, 1, 0, 0, 0, 0], [2, 0, 1, 0, 0, 1, 0, 0, 0], [2, 0, 0, 1, 0, 1, 0, 0, 0]]

Labels4-complex.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Truck', 3: 'Vehicle', 4: 'Individual', 5: 'Company', 6: 'RentalAgreement', 7: 'RentalAgreement', 8: 'RentalAgreement'}

Edges4-complex.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeVehicle'), (0, 6, 'RentalOfficeRentalAgreementOrigin'), (0, 7, 'RentalOfficeRentalAgreementOrigin'), (0, 8, 'RentalOfficeRentalAgreementOrigin'), (0, 6, 'RentalOfficeRentalAgreementDrop'), (0, 7, 'RentalOfficeRentalAgreementDrop'), (0, 8, 'RentalOfficeRentalAgreementDrop'), (6, 1, 'RentalAgreementVehicle'), (7, 2, 'RentalAgreementVehicle'), (8, 3, 'RentalAgreementVehicle'), (6, 4, 'RentalAgreementCustomer'), (7, 5, 'RentalAgreementCustomer'), (8, 5, 'RentalAgreementCustomer')]

Adj4-edge.soil: [[0, 1, 0, 0, 2, 2], [1, 0, 0, 0, 1, 1], [0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1], [2, 1, 1, 0, 0, 0], [2, 1, 0, 1, 0, 0]]

Labels4-edge.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Individual', 3: 'Company', 4: 'RentalAgreement', 5: 'RentalAgreement'}

Edges4-edge.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 4, 'RentalOfficeRentalAgreementOrigin'), (0, 5, 'RentalOfficeRentalAgreementOrigin'), (0, 4, 'RentalOfficeRentalAgreementDrop'), (0, 5, 'RentalOfficeRentalAgreementDrop'), (4, 1, 'RentalAgreementVehicle'), (5, 1, 'RentalAgreementVehicle'), (4, 2, 'RentalAgreementCustomer'), (5, 3, 'RentalAgreementCustomer')]

Adj5-baseline.soil: [[0, 1, 1, 0, 2], [1, 0, 0, 0, 0], [1, 0, 0, 0, 1], [0, 0, 0, 0, 1], [2, 0, 1, 1, 0]]

Labels5-baseline.soil: {0: 'RentalOffice', 1: 'Vehicle', 2: 'Truck', 3: 'Individual', 4: 'RentalAgreement'}

Edges5-baseline.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 4, 'RentalOfficeRentalAgreementOrigin'), (0, 4, 'RentalOfficeRentalAgreementDrop'), (4, 2, 'RentalAgreementVehicle'), (4, 3, 'RentalAgreementCustomer')]

Adj5-invalid.soil: [[0, 1, 0, 2], [1, 0, 0, 1], [0, 0, 0, 1], [2, 1, 1, 0]]

Labels5-invalid.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Individual', 3: 'RentalAgreement'}

Edges5-invalid.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeRentalAgreementOrigin'), (0, 3, 'RentalOfficeRentalAgreementDrop'), (3, 1, 'RentalAgreementVehicle'), (3, 2, 'RentalAgreementCustomer')]

Adj5-boundary.soil: [[0, 1, 2, 0], [1, 0, 1, 0], [2, 1, 0, 1], [0, 0, 1, 0]]

Labels5-boundary.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'RentalAgreement', 3: 'Individual'}

Edges5-boundary.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeRentalAgreementOrigin'), (0, 2, 'RentalOfficeRentalAgreementDrop'), (2, 1, 'RentalAgreementVehicle'), (2, 3, 'RentalAgreementCustomer')]

Adj5-complex.soil: [[0, 1, 1, 1, 1, 0, 0, 0, 2, 2, 2, 2], [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0], [2, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [2, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0], [2, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0], [2, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0]]

Labels5-complex.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Truck', 3: 'Vehicle', 4: 'Vehicle', 5: 'Individual', 6: 'Company', 7: 'Company', 8: 'RentalAgreement', 9: 'RentalAgreement', 10: 'RentalAgreement', 11: 'RentalAgreement'}

Edges5-complex.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeVehicle'), (0, 4, 'RentalOfficeVehicle'), (0, 8, 'RentalOfficeRentalAgreementOrigin'), (0, 9, 'RentalOfficeRentalAgreementOrigin'), (0, 10, 'RentalOfficeRentalAgreementOrigin'), (0, 11, 'RentalOfficeRentalAgreementOrigin'), (0, 8, 'RentalOfficeRentalAgreementDrop'), (0, 9, 'RentalOfficeRentalAgreementDrop'), (0, 10, 'RentalOfficeRentalAgreementDrop'), (0, 11, 'RentalOfficeRentalAgreementDrop'), (8, 1, 'RentalAgreementVehicle'), (9, 3, 'RentalAgreementVehicle'), (10, 4, 'RentalAgreementVehicle'), (11, 2, 'RentalAgreementVehicle'), (8, 5, 'RentalAgreementCustomer'), (9, 6, 'RentalAgreementCustomer'), (10, 7, 'RentalAgreementCustomer'), (11, 6, 'RentalAgreementCustomer')]

Adj5-edge.soil: [[0, 1, 1, 0, 0, 2, 2], [1, 0, 0, 0, 0, 1, 0], [1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 1], [2, 1, 0, 1, 0, 0, 0], [2, 0, 1, 0, 1, 0, 0]]

Labels5-edge.soil: {0: 'RentalOffice', 1: 'Vehicle', 2: 'Truck', 3: 'Individual', 4: 'Company', 5: 'RentalAgreement', 6: 'RentalAgreement'}

Edges5-edge.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 5, 'RentalOfficeRentalAgreementOrigin'), (0, 6, 'RentalOfficeRentalAgreementOrigin'), (0, 5, 'RentalOfficeRentalAgreementDrop'), (0, 6, 'RentalOfficeRentalAgreementDrop'), (5, 1, 'RentalAgreementVehicle'), (6, 2, 'RentalAgreementVehicle'), (5, 3, 'RentalAgreementCustomer'), (6, 4, 'RentalAgreementCustomer')]

Adj6-baseline.soil: [[0, 1, 1, 0, 2], [1, 0, 0, 0, 1], [1, 0, 0, 0, 0], [0, 0, 0, 0, 1], [2, 1, 0, 1, 0]]

Labels6-baseline.soil: {0: 'RentalOffice', 1: 'Vehicle', 2: 'Truck', 3: 'Company', 4: 'RentalAgreement'}

Edges6-baseline.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 4, 'RentalOfficeRentalAgreementOrigin'), (0, 4, 'RentalOfficeRentalAgreementDrop'), (4, 1, 'RentalAgreementVehicle'), (4, 3, 'RentalAgreementCustomer')]

Adj6-invalid.soil: [[0, 1, 0, 2], [1, 0, 0, 1], [0, 0, 0, 1], [2, 1, 1, 0]]

Labels6-invalid.soil: {0: 'RentalOffice', 1: 'Vehicle', 2: 'Company', 3: 'RentalAgreement'}

Edges6-invalid.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeRentalAgreementOrigin'), (0, 3, 'RentalOfficeRentalAgreementDrop'), (3, 1, 'RentalAgreementVehicle'), (3, 2, 'RentalAgreementCustomer')]

Adj6-boundary.soil: [[0, 1, 2, 0], [1, 0, 1, 0], [2, 1, 0, 1], [0, 0, 1, 0]]

Labels6-boundary.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'RentalAgreement', 3: 'Company'}

Edges6-boundary.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeRentalAgreementOrigin'), (0, 2, 'RentalOfficeRentalAgreementDrop'), (2, 1, 'RentalAgreementVehicle'), (2, 3, 'RentalAgreementCustomer')]

Adj6-complex.soil: [[0, 1, 1, 1, 1, 0, 0, 0, 2, 2, 2, 2], [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0], [2, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [2, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0], [2, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0], [2, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0]]

Labels6-complex.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Truck', 3: 'Vehicle', 4: 'Vehicle', 5: 'Individual', 6: 'Company', 7: 'Company', 8: 'RentalAgreement', 9: 'RentalAgreement', 10: 'RentalAgreement', 11: 'RentalAgreement'}

Edges6-complex.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeVehicle'), (0, 4, 'RentalOfficeVehicle'), (0, 8, 'RentalOfficeRentalAgreementOrigin'), (0, 9, 'RentalOfficeRentalAgreementOrigin'), (0, 10, 'RentalOfficeRentalAgreementOrigin'), (0, 11, 'RentalOfficeRentalAgreementOrigin'), (0, 8, 'RentalOfficeRentalAgreementDrop'), (0, 9, 'RentalOfficeRentalAgreementDrop'), (0, 10, 'RentalOfficeRentalAgreementDrop'), (0, 11, 'RentalOfficeRentalAgreementDrop'), (8, 1, 'RentalAgreementVehicle'), (9, 3, 'RentalAgreementVehicle'), (10, 2, 'RentalAgreementVehicle'), (11, 4, 'RentalAgreementVehicle'), (8, 5, 'RentalAgreementCustomer'), (9, 6, 'RentalAgreementCustomer'), (10, 7, 'RentalAgreementCustomer'), (11, 6, 'RentalAgreementCustomer')]

Adj6-edge.soil: [[0, 1, 0, 0, 2, 2], [1, 0, 0, 0, 1, 1], [0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1], [2, 1, 1, 0, 0, 0], [2, 1, 0, 1, 0, 0]]

Labels6-edge.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Individual', 3: 'Company', 4: 'RentalAgreement', 5: 'RentalAgreement'}

Edges6-edge.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 4, 'RentalOfficeRentalAgreementOrigin'), (0, 5, 'RentalOfficeRentalAgreementOrigin'), (0, 4, 'RentalOfficeRentalAgreementDrop'), (0, 5, 'RentalOfficeRentalAgreementDrop'), (4, 1, 'RentalAgreementVehicle'), (5, 1, 'RentalAgreementVehicle'), (4, 2, 'RentalAgreementCustomer'), (5, 3, 'RentalAgreementCustomer')]

```
# GED Matrix: 
```
[[0.0, 2.0, 0.0, 8.0, 6.0, 3.0, 1.0, 1.0, 15.0, 8.0, 2.0, 1.0, 0.0, 15.0, 6.0, 4.0, 7.0, 1.0, 15.0, 6.0, 2.0, 0.0, 0.0, 23.0, 9.0, 4.0, 2.0, 1.0, 23.0, 6.0], [2.0, 0.0, 2.0, 8.0, 6.0, 3.0, 3.0, 2.0, 15.0, 8.0, 3.0, 2.0, 2.0, 15.0, 6.0, 4.0, 7.0, 2.0, 15.0, 6.0, 3.0, 2.0, 2.0, 23.0, 8.0, 4.0, 3.0, 2.0, 23.0, 6.0], [0.0, 2.0, 0.0, 8.0, 6.0, 3.0, 1.0, 1.0, 15.0, 8.0, 2.0, 1.0, 0.0, 15.0, 6.0, 4.0, 7.0, 1.0, 15.0, 6.0, 2.0, 0.0, 0.0, 23.0, 9.0, 4.0, 2.0, 1.0, 23.0, 6.0], [8.0, 8.0, 8.0, 0.0, 4.0, 7.0, 9.0, 9.0, 7.0, 0.0, 6.0, 9.0, 8.0, 7.0, 4.0, 6.0, 4.0, 9.0, 7.0, 4.0, 6.0, 8.0, 8.0, 15.0, 2.0, 6.0, 8.0, 9.0, 15.0, 4.0], [6.0, 6.0, 6.0, 4.0, 0.0, 6.0, 7.0, 6.0, 11.0, 4.0, 6.0, 6.0, 6.0, 11.0, 0.0, 7.0, 1.0, 6.0, 11.0, 0.0, 6.0, 6.0, 6.0, 19.0, 4.0, 7.0, 7.0, 6.0, 19.0, 0.0], [3.0, 3.0, 3.0, 7.0, 6.0, 0.0, 4.0, 2.0, 13.0, 7.0, 1.0, 2.0, 3.0, 13.0, 6.0, 2.0, 7.0, 2.0, 13.0, 6.0, 1.0, 3.0, 3.0, 21.0, 6.0, 2.0, 3.0, 2.0, 21.0, 6.0], [1.0, 3.0, 1.0, 9.0, 7.0, 4.0, 0.0, 2.0, 16.0, 9.0, 3.0, 2.0, 1.0, 16.0, 7.0, 3.0, 6.0, 2.0, 16.0, 7.0, 3.0, 1.0, 1.0, 24.0, 8.0, 3.0, 1.0, 2.0, 24.0, 7.0], [1.0, 2.0, 1.0, 9.0, 6.0, 2.0, 2.0, 0.0, 15.0, 9.0, 3.0, 0.0, 1.0, 15.0, 6.0, 3.0, 7.0, 0.0, 15.0, 6.0, 3.0, 1.0, 1.0, 23.0, 8.0, 3.0, 1.0, 0.0, 23.0, 6.0], [15.0, 15.0, 15.0, 7.0, 11.0, 13.0, 16.0, 15.0, 0.0, 7.0, 13.0, 15.0, 15.0, 0.0, 11.0, 13.0, 11.0, 15.0, 0.0, 11.0, 13.0, 15.0, 15.0, 8.0, 8.0, 13.0, 15.0, 15.0, 9.0, 11.0], [8.0, 8.0, 8.0, 0.0, 4.0, 7.0, 9.0, 9.0, 7.0, 0.0, 6.0, 9.0, 8.0, 7.0, 4.0, 6.0, 4.0, 9.0, 7.0, 4.0, 6.0, 8.0, 8.0, 15.0, 2.0, 6.0, 8.0, 9.0, 15.0, 4.0], [2.0, 3.0, 2.0, 6.0, 6.0, 1.0, 3.0, 3.0, 13.0, 6.0, 0.0, 3.0, 2.0, 13.0, 6.0, 3.0, 7.0, 3.0, 13.0, 6.0, 0.0, 2.0, 2.0, 21.0, 7.0, 3.0, 4.0, 3.0, 21.0, 6.0], [1.0, 2.0, 1.0, 9.0, 6.0, 2.0, 2.0, 0.0, 15.0, 9.0, 3.0, 0.0, 1.0, 15.0, 6.0, 3.0, 7.0, 0.0, 15.0, 6.0, 3.0, 1.0, 1.0, 23.0, 8.0, 3.0, 1.0, 0.0, 23.0, 6.0], [0.0, 2.0, 0.0, 8.0, 6.0, 3.0, 1.0, 1.0, 15.0, 8.0, 2.0, 1.0, 0.0, 15.0, 6.0, 4.0, 7.0, 1.0, 15.0, 6.0, 2.0, 0.0, 0.0, 23.0, 9.0, 4.0, 2.0, 1.0, 23.0, 6.0], [15.0, 15.0, 15.0, 7.0, 11.0, 13.0, 16.0, 15.0, 0.0, 7.0, 13.0, 15.0, 15.0, 0.0, 11.0, 13.0, 11.0, 15.0, 0.0, 11.0, 13.0, 15.0, 15.0, 8.0, 8.0, 13.0, 15.0, 15.0, 9.0, 11.0], [6.0, 6.0, 6.0, 4.0, 0.0, 6.0, 7.0, 6.0, 11.0, 4.0, 6.0, 6.0, 6.0, 11.0, 0.0, 7.0, 1.0, 6.0, 11.0, 0.0, 6.0, 6.0, 6.0, 19.0, 4.0, 7.0, 7.0, 6.0, 19.0, 0.0], [4.0, 4.0, 4.0, 6.0, 7.0, 2.0, 3.0, 3.0, 13.0, 6.0, 3.0, 3.0, 4.0, 13.0, 7.0, 0.0, 6.0, 3.0, 13.0, 7.0, 3.0, 4.0, 4.0, 21.0, 7.0, 0.0, 2.0, 3.0, 21.0, 7.0], [7.0, 7.0, 7.0, 4.0, 1.0, 7.0, 6.0, 7.0, 11.0, 4.0, 7.0, 7.0, 7.0, 11.0, 1.0, 6.0, 0.0, 7.0, 11.0, 1.0, 7.0, 7.0, 7.0, 19.0, 4.0, 6.0, 6.0, 7.0, 19.0, 1.0], [1.0, 2.0, 1.0, 9.0, 6.0, 2.0, 2.0, 0.0, 15.0, 9.0, 3.0, 0.0, 1.0, 15.0, 6.0, 3.0, 7.0, 0.0, 15.0, 6.0, 3.0, 1.0, 1.0, 23.0, 8.0, 3.0, 1.0, 0.0, 23.0, 6.0], [15.0, 15.0, 15.0, 7.0, 11.0, 13.0, 16.0, 15.0, 0.0, 7.0, 13.0, 15.0, 15.0, 0.0, 11.0, 13.0, 11.0, 15.0, 0.0, 11.0, 13.0, 15.0, 15.0, 8.0, 8.0, 13.0, 15.0, 15.0, 9.0, 11.0], [6.0, 6.0, 6.0, 4.0, 0.0, 6.0, 7.0, 6.0, 11.0, 4.0, 6.0, 6.0, 6.0, 11.0, 0.0, 7.0, 1.0, 6.0, 11.0, 0.0, 6.0, 6.0, 6.0, 19.0, 4.0, 7.0, 7.0, 6.0, 19.0, 0.0], [2.0, 3.0, 2.0, 6.0, 6.0, 1.0, 3.0, 3.0, 13.0, 6.0, 0.0, 3.0, 2.0, 13.0, 6.0, 3.0, 7.0, 3.0, 13.0, 6.0, 0.0, 2.0, 2.0, 21.0, 7.0, 3.0, 4.0, 3.0, 21.0, 6.0], [0.0, 2.0, 0.0, 8.0, 6.0, 3.0, 1.0, 1.0, 15.0, 8.0, 2.0, 1.0, 0.0, 15.0, 6.0, 4.0, 7.0, 1.0, 15.0, 6.0, 2.0, 0.0, 0.0, 23.0, 9.0, 4.0, 2.0, 1.0, 23.0, 6.0], [0.0, 2.0, 0.0, 8.0, 6.0, 3.0, 1.0, 1.0, 15.0, 8.0, 2.0, 1.0, 0.0, 15.0, 6.0, 4.0, 7.0, 1.0, 15.0, 6.0, 2.0, 0.0, 0.0, 23.0, 9.0, 4.0, 2.0, 1.0, 23.0, 6.0], [23.0, 23.0, 23.0, 15.0, 19.0, 21.0, 24.0, 23.0, 8.0, 15.0, 21.0, 23.0, 23.0, 8.0, 19.0, 21.0, 19.0, 23.0, 8.0, 19.0, 21.0, 23.0, 23.0, 0.0, 16.0, 21.0, 23.0, 23.0, 2.0, 19.0], [9.0, 8.0, 9.0, 2.0, 4.0, 6.0, 8.0, 8.0, 8.0, 2.0, 7.0, 8.0, 9.0, 8.0, 4.0, 7.0, 4.0, 8.0, 8.0, 4.0, 7.0, 9.0, 9.0, 16.0, 0.0, 7.0, 9.0, 8.0, 16.0, 4.0], [4.0, 4.0, 4.0, 6.0, 7.0, 2.0, 3.0, 3.0, 13.0, 6.0, 3.0, 3.0, 4.0, 13.0, 7.0, 0.0, 6.0, 3.0, 13.0, 7.0, 3.0, 4.0, 4.0, 21.0, 7.0, 0.0, 2.0, 3.0, 21.0, 7.0], [2.0, 3.0, 2.0, 8.0, 7.0, 3.0, 1.0, 1.0, 15.0, 8.0, 4.0, 1.0, 2.0, 15.0, 7.0, 2.0, 6.0, 1.0, 15.0, 7.0, 4.0, 2.0, 2.0, 23.0, 9.0, 2.0, 0.0, 1.0, 23.0, 7.0], [1.0, 2.0, 1.0, 9.0, 6.0, 2.0, 2.0, 0.0, 15.0, 9.0, 3.0, 0.0, 1.0, 15.0, 6.0, 3.0, 7.0, 0.0, 15.0, 6.0, 3.0, 1.0, 1.0, 23.0, 8.0, 3.0, 1.0, 0.0, 23.0, 6.0], [23.0, 23.0, 23.0, 15.0, 19.0, 21.0, 24.0, 23.0, 9.0, 15.0, 21.0, 23.0, 23.0, 9.0, 19.0, 21.0, 19.0, 23.0, 9.0, 19.0, 21.0, 23.0, 23.0, 2.0, 16.0, 21.0, 23.0, 23.0, 0.0, 19.0], [6.0, 6.0, 6.0, 4.0, 0.0, 6.0, 7.0, 6.0, 11.0, 4.0, 6.0, 6.0, 6.0, 11.0, 0.0, 7.0, 1.0, 6.0, 11.0, 0.0, 6.0, 6.0, 6.0, 19.0, 4.0, 7.0, 7.0, 6.0, 19.0, 0.0]]
```
# GED 2D table: 
|       | baseline1 | invalid2 | boundary3 | complex4 | edge5 | baseline6 | invalid7 | boundary8 | complex9 | edge10 | baseline11 | invalid12 | boundary13 | complex14 | edge15 | baseline16 | invalid17 | boundary18 | complex19 | edge20 | baseline21 | invalid22 | boundary23 | complex24 | edge25 | baseline26 | invalid27 | boundary28 | complex29 | edge30 |
|-------|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **baseline1** | 0.000000 | 2.000000 | 0.000000 | 8.000000 | 6.000000 | 3.000000 | 1.000000 | 1.000000 | 15.000000 | 8.000000 | 2.000000 | 1.000000 | 0.000000 | 15.000000 | 6.000000 | 4.000000 | 7.000000 | 1.000000 | 15.000000 | 6.000000 | 2.000000 | 0.000000 | 0.000000 | 23.000000 | 9.000000 | 4.000000 | 2.000000 | 1.000000 | 23.000000 | 6.000000 |
| **invalid2** |  | 0.000000 | 2.000000 | 8.000000 | 6.000000 | 3.000000 | 3.000000 | 2.000000 | 15.000000 | 8.000000 | 3.000000 | 2.000000 | 2.000000 | 15.000000 | 6.000000 | 4.000000 | 7.000000 | 2.000000 | 15.000000 | 6.000000 | 3.000000 | 2.000000 | 2.000000 | 23.000000 | 8.000000 | 4.000000 | 3.000000 | 2.000000 | 23.000000 | 6.000000 |
| **boundary3** |  |  | 0.000000 | 8.000000 | 6.000000 | 3.000000 | 1.000000 | 1.000000 | 15.000000 | 8.000000 | 2.000000 | 1.000000 | 0.000000 | 15.000000 | 6.000000 | 4.000000 | 7.000000 | 1.000000 | 15.000000 | 6.000000 | 2.000000 | 0.000000 | 0.000000 | 23.000000 | 9.000000 | 4.000000 | 2.000000 | 1.000000 | 23.000000 | 6.000000 |
| **complex4** |  |  |  | 0.000000 | 4.000000 | 7.000000 | 9.000000 | 9.000000 | 7.000000 | 0.000000 | 6.000000 | 9.000000 | 8.000000 | 7.000000 | 4.000000 | 6.000000 | 4.000000 | 9.000000 | 7.000000 | 4.000000 | 6.000000 | 8.000000 | 8.000000 | 15.000000 | 2.000000 | 6.000000 | 8.000000 | 9.000000 | 15.000000 | 4.000000 |
| **edge5** |  |  |  |  | 0.000000 | 6.000000 | 7.000000 | 6.000000 | 11.000000 | 4.000000 | 6.000000 | 6.000000 | 6.000000 | 11.000000 | 0.000000 | 7.000000 | 1.000000 | 6.000000 | 11.000000 | 0.000000 | 6.000000 | 6.000000 | 6.000000 | 19.000000 | 4.000000 | 7.000000 | 7.000000 | 6.000000 | 19.000000 | 0.000000 |
| **baseline6** |  |  |  |  |  | 0.000000 | 4.000000 | 2.000000 | 13.000000 | 7.000000 | 1.000000 | 2.000000 | 3.000000 | 13.000000 | 6.000000 | 2.000000 | 7.000000 | 2.000000 | 13.000000 | 6.000000 | 1.000000 | 3.000000 | 3.000000 | 21.000000 | 6.000000 | 2.000000 | 3.000000 | 2.000000 | 21.000000 | 6.000000 |
| **invalid7** |  |  |  |  |  |  | 0.000000 | 2.000000 | 16.000000 | 9.000000 | 3.000000 | 2.000000 | 1.000000 | 16.000000 | 7.000000 | 3.000000 | 6.000000 | 2.000000 | 16.000000 | 7.000000 | 3.000000 | 1.000000 | 1.000000 | 24.000000 | 8.000000 | 3.000000 | 1.000000 | 2.000000 | 24.000000 | 7.000000 |
| **boundary8** |  |  |  |  |  |  |  | 0.000000 | 15.000000 | 9.000000 | 3.000000 | 0.000000 | 1.000000 | 15.000000 | 6.000000 | 3.000000 | 7.000000 | 0.000000 | 15.000000 | 6.000000 | 3.000000 | 1.000000 | 1.000000 | 23.000000 | 8.000000 | 3.000000 | 1.000000 | 0.000000 | 23.000000 | 6.000000 |
| **complex9** |  |  |  |  |  |  |  |  | 0.000000 | 7.000000 | 13.000000 | 15.000000 | 15.000000 | 0.000000 | 11.000000 | 13.000000 | 11.000000 | 15.000000 | 0.000000 | 11.000000 | 13.000000 | 15.000000 | 15.000000 | 8.000000 | 8.000000 | 13.000000 | 15.000000 | 15.000000 | 9.000000 | 11.000000 |
| **edge10** |  |  |  |  |  |  |  |  |  | 0.000000 | 6.000000 | 9.000000 | 8.000000 | 7.000000 | 4.000000 | 6.000000 | 4.000000 | 9.000000 | 7.000000 | 4.000000 | 6.000000 | 8.000000 | 8.000000 | 15.000000 | 2.000000 | 6.000000 | 8.000000 | 9.000000 | 15.000000 | 4.000000 |
| **baseline11** |  |  |  |  |  |  |  |  |  |  | 0.000000 | 3.000000 | 2.000000 | 13.000000 | 6.000000 | 3.000000 | 7.000000 | 3.000000 | 13.000000 | 6.000000 | 0.000000 | 2.000000 | 2.000000 | 21.000000 | 7.000000 | 3.000000 | 4.000000 | 3.000000 | 21.000000 | 6.000000 |
| **invalid12** |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 1.000000 | 15.000000 | 6.000000 | 3.000000 | 7.000000 | 0.000000 | 15.000000 | 6.000000 | 3.000000 | 1.000000 | 1.000000 | 23.000000 | 8.000000 | 3.000000 | 1.000000 | 0.000000 | 23.000000 | 6.000000 |
| **boundary13** |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 15.000000 | 6.000000 | 4.000000 | 7.000000 | 1.000000 | 15.000000 | 6.000000 | 2.000000 | 0.000000 | 0.000000 | 23.000000 | 9.000000 | 4.000000 | 2.000000 | 1.000000 | 23.000000 | 6.000000 |
| **complex14** |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 11.000000 | 13.000000 | 11.000000 | 15.000000 | 0.000000 | 11.000000 | 13.000000 | 15.000000 | 15.000000 | 8.000000 | 8.000000 | 13.000000 | 15.000000 | 15.000000 | 9.000000 | 11.000000 |
| **edge15** |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 7.000000 | 1.000000 | 6.000000 | 11.000000 | 0.000000 | 6.000000 | 6.000000 | 6.000000 | 19.000000 | 4.000000 | 7.000000 | 7.000000 | 6.000000 | 19.000000 | 0.000000 |
| **baseline16** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 6.000000 | 3.000000 | 13.000000 | 7.000000 | 3.000000 | 4.000000 | 4.000000 | 21.000000 | 7.000000 | 0.000000 | 2.000000 | 3.000000 | 21.000000 | 7.000000 |
| **invalid17** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 7.000000 | 11.000000 | 1.000000 | 7.000000 | 7.000000 | 7.000000 | 19.000000 | 4.000000 | 6.000000 | 6.000000 | 7.000000 | 19.000000 | 1.000000 |
| **boundary18** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 15.000000 | 6.000000 | 3.000000 | 1.000000 | 1.000000 | 23.000000 | 8.000000 | 3.000000 | 1.000000 | 0.000000 | 23.000000 | 6.000000 |
| **complex19** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 11.000000 | 13.000000 | 15.000000 | 15.000000 | 8.000000 | 8.000000 | 13.000000 | 15.000000 | 15.000000 | 9.000000 | 11.000000 |
| **edge20** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 6.000000 | 6.000000 | 6.000000 | 19.000000 | 4.000000 | 7.000000 | 7.000000 | 6.000000 | 19.000000 | 0.000000 |
| **baseline21** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 2.000000 | 2.000000 | 21.000000 | 7.000000 | 3.000000 | 4.000000 | 3.000000 | 21.000000 | 6.000000 |
| **invalid22** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 23.000000 | 9.000000 | 4.000000 | 2.000000 | 1.000000 | 23.000000 | 6.000000 |
| **boundary23** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 23.000000 | 9.000000 | 4.000000 | 2.000000 | 1.000000 | 23.000000 | 6.000000 |
| **complex24** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 16.000000 | 21.000000 | 23.000000 | 23.000000 | 2.000000 | 19.000000 |
| **edge25** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 7.000000 | 9.000000 | 8.000000 | 16.000000 | 4.000000 |
| **baseline26** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 2.000000 | 3.000000 | 21.000000 | 7.000000 |
| **invalid27** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 1.000000 | 23.000000 | 7.000000 |
| **boundary28** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 23.000000 | 6.000000 |
| **complex29** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 19.000000 |
| **edge30** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 |

# Normalized GED 2D table: 
|       | baseline1 | invalid2 | boundary3 | complex4 | edge5 | baseline6 | invalid7 | boundary8 | complex9 | edge10 | baseline11 | invalid12 | boundary13 | complex14 | edge15 | baseline16 | invalid17 | boundary18 | complex19 | edge20 | baseline21 | invalid22 | boundary23 | complex24 | edge25 | baseline26 | invalid27 | boundary28 | complex29 | edge30 |
|-------|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **baseline1** | 1.000000 | 0.800000 | 1.000000 | 0.384615 | 0.500000 | 0.700000 | 0.888889 | 0.888889 | 0.090909 | 0.384615 | 0.800000 | 0.888889 | 1.000000 | 0.090909 | 0.500000 | 0.600000 | 0.416667 | 0.888889 | 0.090909 | 0.500000 | 0.800000 | 1.000000 | 1.000000 | 0.000000 | 0.307692 | 0.600000 | 0.777778 | 0.888889 | 0.000000 | 0.500000 |
| **invalid2** |  | 1.000000 | 0.800000 | 0.428571 | 0.538462 | 0.727273 | 0.700000 | 0.800000 | 0.142857 | 0.428571 | 0.727273 | 0.800000 | 0.800000 | 0.142857 | 0.538462 | 0.636364 | 0.461538 | 0.800000 | 0.142857 | 0.538462 | 0.727273 | 0.800000 | 0.800000 | 0.000000 | 0.428571 | 0.636364 | 0.700000 | 0.800000 | 0.000000 | 0.538462 |
| **boundary3** |  |  | 1.000000 | 0.384615 | 0.500000 | 0.700000 | 0.888889 | 0.888889 | 0.090909 | 0.384615 | 0.800000 | 0.888889 | 1.000000 | 0.090909 | 0.500000 | 0.600000 | 0.416667 | 0.888889 | 0.090909 | 0.500000 | 0.800000 | 1.000000 | 1.000000 | 0.000000 | 0.307692 | 0.600000 | 0.777778 | 0.888889 | 0.000000 | 0.500000 |
| **complex4** |  |  |  | 1.000000 | 0.750000 | 0.500000 | 0.307692 | 0.307692 | 0.658537 | 1.000000 | 0.571429 | 0.307692 | 0.384615 | 0.658537 | 0.750000 | 0.571429 | 0.750000 | 0.307692 | 0.658537 | 0.750000 | 0.571429 | 0.384615 | 0.384615 | 0.387755 | 0.882353 | 0.571429 | 0.384615 | 0.307692 | 0.387755 | 0.750000 |
| **edge5** |  |  |  |  | 1.000000 | 0.538462 | 0.416667 | 0.500000 | 0.435897 | 0.750000 | 0.538462 | 0.500000 | 0.500000 | 0.435897 | 1.000000 | 0.461538 | 0.933333 | 0.500000 | 0.435897 | 1.000000 | 0.538462 | 0.500000 | 0.500000 | 0.191489 | 0.750000 | 0.461538 | 0.416667 | 0.500000 | 0.191489 | 1.000000 |
| **baseline6** |  |  |  |  |  | 1.000000 | 0.600000 | 0.800000 | 0.257143 | 0.500000 | 0.909091 | 0.800000 | 0.700000 | 0.257143 | 0.538462 | 0.818182 | 0.461538 | 0.800000 | 0.257143 | 0.538462 | 0.909091 | 0.700000 | 0.700000 | 0.023256 | 0.571429 | 0.818182 | 0.700000 | 0.800000 | 0.023256 | 0.538462 |
| **invalid7** |  |  |  |  |  |  | 1.000000 | 0.777778 | 0.030303 | 0.307692 | 0.700000 | 0.777778 | 0.888889 | 0.030303 | 0.416667 | 0.700000 | 0.500000 | 0.777778 | 0.030303 | 0.416667 | 0.700000 | 0.888889 | 0.888889 | 0.000000 | 0.384615 | 0.700000 | 0.888889 | 0.777778 | 0.000000 | 0.416667 |
| **boundary8** |  |  |  |  |  |  |  | 1.000000 | 0.090909 | 0.307692 | 0.700000 | 1.000000 | 0.888889 | 0.090909 | 0.500000 | 0.700000 | 0.416667 | 1.000000 | 0.090909 | 0.500000 | 0.700000 | 0.888889 | 0.888889 | 0.000000 | 0.384615 | 0.700000 | 0.888889 | 1.000000 | 0.000000 | 0.500000 |
| **complex9** |  |  |  |  |  |  |  |  | 1.000000 | 0.658537 | 0.257143 | 0.090909 | 0.090909 | 1.000000 | 0.435897 | 0.257143 | 0.435897 | 0.090909 | 1.000000 | 0.435897 | 0.257143 | 0.090909 | 0.090909 | 0.714286 | 0.609756 | 0.257143 | 0.090909 | 0.090909 | 0.678571 | 0.435897 |
| **edge10** |  |  |  |  |  |  |  |  |  | 1.000000 | 0.571429 | 0.307692 | 0.384615 | 0.658537 | 0.750000 | 0.571429 | 0.750000 | 0.307692 | 0.658537 | 0.750000 | 0.571429 | 0.384615 | 0.384615 | 0.387755 | 0.882353 | 0.571429 | 0.384615 | 0.307692 | 0.387755 | 0.750000 |
| **baseline11** |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.700000 | 0.800000 | 0.257143 | 0.538462 | 0.727273 | 0.461538 | 0.700000 | 0.257143 | 0.538462 | 1.000000 | 0.800000 | 0.800000 | 0.023256 | 0.500000 | 0.727273 | 0.600000 | 0.700000 | 0.023256 | 0.538462 |
| **invalid12** |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.888889 | 0.090909 | 0.500000 | 0.700000 | 0.416667 | 1.000000 | 0.090909 | 0.500000 | 0.700000 | 0.888889 | 0.888889 | 0.000000 | 0.384615 | 0.700000 | 0.888889 | 1.000000 | 0.000000 | 0.500000 |
| **boundary13** |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.090909 | 0.500000 | 0.600000 | 0.416667 | 0.888889 | 0.090909 | 0.500000 | 0.800000 | 1.000000 | 1.000000 | 0.000000 | 0.307692 | 0.600000 | 0.777778 | 0.888889 | 0.000000 | 0.500000 |
| **complex14** |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.435897 | 0.257143 | 0.435897 | 0.090909 | 1.000000 | 0.435897 | 0.257143 | 0.090909 | 0.090909 | 0.714286 | 0.609756 | 0.257143 | 0.090909 | 0.090909 | 0.678571 | 0.435897 |
| **edge15** |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.461538 | 0.933333 | 0.500000 | 0.435897 | 1.000000 | 0.538462 | 0.500000 | 0.500000 | 0.191489 | 0.750000 | 0.461538 | 0.416667 | 0.500000 | 0.191489 | 1.000000 |
| **baseline16** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.538462 | 0.700000 | 0.257143 | 0.461538 | 0.727273 | 0.600000 | 0.600000 | 0.023256 | 0.500000 | 1.000000 | 0.800000 | 0.700000 | 0.023256 | 0.461538 |
| **invalid17** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.416667 | 0.435897 | 0.933333 | 0.461538 | 0.416667 | 0.416667 | 0.191489 | 0.750000 | 0.538462 | 0.500000 | 0.416667 | 0.191489 | 0.933333 |
| **boundary18** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.090909 | 0.500000 | 0.700000 | 0.888889 | 0.888889 | 0.000000 | 0.384615 | 0.700000 | 0.888889 | 1.000000 | 0.000000 | 0.500000 |
| **complex19** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.435897 | 0.257143 | 0.090909 | 0.090909 | 0.714286 | 0.609756 | 0.257143 | 0.090909 | 0.090909 | 0.678571 | 0.435897 |
| **edge20** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.538462 | 0.500000 | 0.500000 | 0.191489 | 0.750000 | 0.461538 | 0.416667 | 0.500000 | 0.191489 | 1.000000 |
| **baseline21** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.800000 | 0.800000 | 0.023256 | 0.500000 | 0.727273 | 0.600000 | 0.700000 | 0.023256 | 0.538462 |
| **invalid22** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 1.000000 | 0.000000 | 0.307692 | 0.600000 | 0.777778 | 0.888889 | 0.000000 | 0.500000 |
| **boundary23** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.000000 | 0.307692 | 0.600000 | 0.777778 | 0.888889 | 0.000000 | 0.500000 |
| **complex24** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.346939 | 0.023256 | 0.000000 | 0.000000 | 0.937500 | 0.191489 |
| **edge25** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.500000 | 0.307692 | 0.384615 | 0.346939 | 0.750000 |
| **baseline26** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.800000 | 0.700000 | 0.023256 | 0.461538 |
| **invalid27** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.888889 | 0.000000 | 0.416667 |
| **boundary28** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.000000 | 0.500000 |
| **complex29** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.191489 |
| **edge30** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 |