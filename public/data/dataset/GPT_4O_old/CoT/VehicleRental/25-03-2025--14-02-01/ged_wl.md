# Adj, edge, label 
```
Adj1-invalid.soil: [[0, 1, 0], [1, 0, 1], [0, 1, 0]]

Labels1-invalid.soil: {0: 'RentalOffice', 1: 'RentalAgreement', 2: 'Individual'}

Edges1-invalid.soil: [(1, 2, 'RentalAgreementCustomer'), (0, 1, 'RentalOfficeRentalAgreementOrigin')]

Adj1-edge.soil: [[0, 1, 1, 2, 0], [1, 0, 0, 0, 0], [1, 0, 0, 1, 0], [2, 0, 1, 0, 1], [0, 0, 0, 1, 0]]

Labels1-edge.soil: {0: 'RentalOffice', 1: 'Vehicle', 2: 'Truck', 3: 'RentalAgreement', 4: 'Individual'}

Edges1-edge.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeRentalAgreementOrigin'), (0, 3, 'RentalOfficeRentalAgreementDrop'), (3, 2, 'RentalAgreementVehicle'), (3, 4, 'RentalAgreementCustomer')]

Adj1-boundary.soil: [[0, 1, 1, 2, 0], [1, 0, 0, 1, 0], [1, 0, 0, 0, 0], [2, 1, 0, 0, 1], [0, 0, 0, 1, 0]]

Labels1-boundary.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Vehicle', 3: 'RentalAgreement', 4: 'Company'}

Edges1-boundary.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeRentalAgreementOrigin'), (0, 3, 'RentalOfficeRentalAgreementDrop'), (3, 1, 'RentalAgreementVehicle'), (3, 4, 'RentalAgreementCustomer')]

Adj1-baseline.soil: [[0, 1, 1, 0, 0, 2, 2], [1, 0, 0, 0, 0, 1, 0], [1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 1], [2, 1, 0, 1, 0, 0, 0], [2, 0, 1, 0, 1, 0, 0]]

Labels1-baseline.soil: {0: 'RentalOffice', 1: 'Vehicle', 2: 'Truck', 3: 'Individual', 4: 'Company', 5: 'RentalAgreement', 6: 'RentalAgreement'}

Edges1-baseline.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 5, 'RentalOfficeRentalAgreementOrigin'), (0, 5, 'RentalOfficeRentalAgreementDrop'), (0, 6, 'RentalOfficeRentalAgreementOrigin'), (0, 6, 'RentalOfficeRentalAgreementDrop'), (5, 1, 'RentalAgreementVehicle'), (5, 3, 'RentalAgreementCustomer'), (6, 2, 'RentalAgreementVehicle'), (6, 4, 'RentalAgreementCustomer')]

Adj1-complex.soil: [[0, 1, 1, 0, 0, 2, 2, 2], [1, 0, 0, 0, 0, 1, 0, 1], [1, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 1, 1], [2, 1, 0, 1, 0, 0, 0, 0], [2, 0, 1, 0, 1, 0, 0, 0], [2, 1, 0, 0, 1, 0, 0, 0]]

Labels1-complex.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Vehicle', 3: 'Individual', 4: 'Company', 5: 'RentalAgreement', 6: 'RentalAgreement', 7: 'RentalAgreement'}

Edges1-complex.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 5, 'RentalOfficeRentalAgreementOrigin'), (0, 5, 'RentalOfficeRentalAgreementDrop'), (5, 1, 'RentalAgreementVehicle'), (5, 3, 'RentalAgreementCustomer'), (0, 6, 'RentalOfficeRentalAgreementOrigin'), (0, 6, 'RentalOfficeRentalAgreementDrop'), (6, 2, 'RentalAgreementVehicle'), (6, 4, 'RentalAgreementCustomer'), (0, 7, 'RentalOfficeRentalAgreementOrigin'), (0, 7, 'RentalOfficeRentalAgreementDrop'), (7, 1, 'RentalAgreementVehicle'), (7, 4, 'RentalAgreementCustomer')]

Adj2-invalid.soil: [[0, 1, 1, 2, 0], [1, 0, 0, 1, 0], [1, 0, 0, 1, 0], [2, 1, 1, 0, 1], [0, 0, 0, 1, 0]]

Labels2-invalid.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Vehicle', 3: 'RentalAgreement', 4: 'Company'}

Edges2-invalid.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeRentalAgreementOrigin'), (0, 3, 'RentalOfficeRentalAgreementDrop'), (3, 1, 'RentalAgreementVehicle'), (3, 2, 'RentalAgreementVehicle'), (3, 4, 'RentalAgreementCustomer')]

Adj2-edge.soil: [[0, 1, 1, 2, 2, 0], [1, 0, 0, 0, 1, 0], [1, 0, 0, 1, 0, 0], [2, 0, 1, 0, 0, 1], [2, 1, 0, 0, 0, 1], [0, 0, 0, 1, 1, 0]]

Labels2-edge.soil: {0: 'RentalOffice', 1: 'Vehicle', 2: 'Truck', 3: 'RentalAgreement', 4: 'RentalAgreement', 5: 'Company'}

Edges2-edge.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeRentalAgreementOrigin'), (0, 3, 'RentalOfficeRentalAgreementDrop'), (3, 2, 'RentalAgreementVehicle'), (3, 5, 'RentalAgreementCustomer'), (0, 4, 'RentalOfficeRentalAgreementOrigin'), (0, 4, 'RentalOfficeRentalAgreementDrop'), (4, 1, 'RentalAgreementVehicle'), (4, 5, 'RentalAgreementCustomer')]

Adj2-boundary.soil: [[0, 1, 1, 1, 2, 2, 0], [1, 0, 0, 0, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0], [2, 1, 0, 0, 0, 0, 1], [2, 0, 0, 1, 0, 0, 1], [0, 0, 0, 0, 1, 1, 0]]

Labels2-boundary.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Vehicle', 3: 'Vehicle', 4: 'RentalAgreement', 5: 'RentalAgreement', 6: 'Individual'}

Edges2-boundary.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeVehicle'), (0, 4, 'RentalOfficeRentalAgreementOrigin'), (0, 4, 'RentalOfficeRentalAgreementDrop'), (4, 1, 'RentalAgreementVehicle'), (4, 6, 'RentalAgreementCustomer'), (0, 5, 'RentalOfficeRentalAgreementOrigin'), (0, 5, 'RentalOfficeRentalAgreementDrop'), (5, 3, 'RentalAgreementVehicle'), (5, 6, 'RentalAgreementCustomer')]

Adj2-baseline.soil: [[0, 1, 1, 0, 0, 2, 2], [1, 0, 0, 0, 0, 1, 0], [1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 1], [2, 1, 0, 1, 0, 0, 0], [2, 0, 1, 0, 1, 0, 0]]

Labels2-baseline.soil: {0: 'RentalOffice', 1: 'Vehicle', 2: 'Truck', 3: 'Individual', 4: 'Company', 5: 'RentalAgreement', 6: 'RentalAgreement'}

Edges2-baseline.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 5, 'RentalOfficeRentalAgreementOrigin'), (0, 5, 'RentalOfficeRentalAgreementDrop'), (5, 1, 'RentalAgreementVehicle'), (5, 3, 'RentalAgreementCustomer'), (0, 6, 'RentalOfficeRentalAgreementOrigin'), (0, 6, 'RentalOfficeRentalAgreementDrop'), (6, 2, 'RentalAgreementVehicle'), (6, 4, 'RentalAgreementCustomer')]

Adj2-complex.soil: [[0, 1, 1, 1, 0, 0, 2, 2, 2], [1, 0, 0, 0, 0, 0, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1, 0], [1, 0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 1, 0, 1], [0, 0, 0, 0, 0, 0, 0, 1, 0], [2, 1, 0, 0, 1, 0, 0, 0, 0], [2, 0, 1, 0, 0, 1, 0, 0, 0], [2, 0, 0, 1, 1, 0, 0, 0, 0]]

Labels2-complex.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Vehicle', 3: 'Vehicle', 4: 'Individual', 5: 'Company', 6: 'RentalAgreement', 7: 'RentalAgreement', 8: 'RentalAgreement'}

Edges2-complex.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeVehicle'), (0, 6, 'RentalOfficeRentalAgreementOrigin'), (0, 6, 'RentalOfficeRentalAgreementDrop'), (6, 1, 'RentalAgreementVehicle'), (6, 4, 'RentalAgreementCustomer'), (0, 7, 'RentalOfficeRentalAgreementOrigin'), (0, 7, 'RentalOfficeRentalAgreementDrop'), (7, 2, 'RentalAgreementVehicle'), (7, 5, 'RentalAgreementCustomer'), (0, 8, 'RentalOfficeRentalAgreementOrigin'), (0, 8, 'RentalOfficeRentalAgreementDrop'), (8, 3, 'RentalAgreementVehicle'), (8, 4, 'RentalAgreementCustomer')]

Adj3-invalid.soil: [[0, 1, 1, 2, 0, 0], [1, 0, 0, 1, 0, 0], [1, 0, 0, 0, 0, 0], [2, 1, 0, 0, 1, 1], [0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0]]

Labels3-invalid.soil: {0: 'RentalOffice', 1: 'Vehicle', 2: 'Vehicle', 3: 'RentalAgreement', 4: 'Company', 5: 'Company'}

Edges3-invalid.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeRentalAgreementOrigin'), (0, 3, 'RentalOfficeRentalAgreementDrop'), (3, 1, 'RentalAgreementVehicle'), (3, 4, 'RentalAgreementCustomer'), (3, 5, 'RentalAgreementCustomer')]

Adj3-edge.soil: [[0, 1, 1, 2, 0], [1, 0, 0, 1, 0], [1, 0, 0, 0, 0], [2, 1, 0, 0, 1], [0, 0, 0, 1, 0]]

Labels3-edge.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Vehicle', 3: 'RentalAgreement', 4: 'Individual'}

Edges3-edge.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeRentalAgreementOrigin'), (0, 3, 'RentalOfficeRentalAgreementDrop'), (3, 1, 'RentalAgreementVehicle'), (3, 4, 'RentalAgreementCustomer')]

Adj3-boundary.soil: [[0, 1, 1, 2, 0], [1, 0, 0, 1, 0], [1, 0, 0, 0, 0], [2, 1, 0, 0, 1], [0, 0, 0, 1, 0]]

Labels3-boundary.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Vehicle', 3: 'RentalAgreement', 4: 'Company'}

Edges3-boundary.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeRentalAgreementOrigin'), (0, 3, 'RentalOfficeRentalAgreementDrop'), (3, 1, 'RentalAgreementVehicle'), (3, 4, 'RentalAgreementCustomer')]

Adj3-baseline.soil: [[0, 1, 1, 0, 0, 2, 2], [1, 0, 0, 0, 0, 1, 0], [1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 1], [2, 1, 0, 1, 0, 0, 0], [2, 0, 1, 0, 1, 0, 0]]

Labels3-baseline.soil: {0: 'RentalOffice', 1: 'Vehicle', 2: 'Truck', 3: 'Individual', 4: 'Company', 5: 'RentalAgreement', 6: 'RentalAgreement'}

Edges3-baseline.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 5, 'RentalOfficeRentalAgreementOrigin'), (0, 5, 'RentalOfficeRentalAgreementDrop'), (5, 1, 'RentalAgreementVehicle'), (5, 3, 'RentalAgreementCustomer'), (0, 6, 'RentalOfficeRentalAgreementOrigin'), (0, 6, 'RentalOfficeRentalAgreementDrop'), (6, 2, 'RentalAgreementVehicle'), (6, 4, 'RentalAgreementCustomer')]

Adj3-complex.soil: [[0, 1, 1, 1, 0, 0, 2, 2, 2], [1, 0, 0, 0, 0, 0, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1, 0], [1, 0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 1, 0, 1], [0, 0, 0, 0, 0, 0, 0, 1, 0], [2, 1, 0, 0, 1, 0, 0, 0, 0], [2, 0, 1, 0, 0, 1, 0, 0, 0], [2, 0, 0, 1, 1, 0, 0, 0, 0]]

Labels3-complex.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Vehicle', 3: 'Vehicle', 4: 'Individual', 5: 'Company', 6: 'RentalAgreement', 7: 'RentalAgreement', 8: 'RentalAgreement'}

Edges3-complex.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeVehicle'), (0, 6, 'RentalOfficeRentalAgreementOrigin'), (0, 6, 'RentalOfficeRentalAgreementDrop'), (6, 1, 'RentalAgreementVehicle'), (6, 4, 'RentalAgreementCustomer'), (0, 7, 'RentalOfficeRentalAgreementOrigin'), (0, 7, 'RentalOfficeRentalAgreementDrop'), (7, 2, 'RentalAgreementVehicle'), (7, 5, 'RentalAgreementCustomer'), (0, 8, 'RentalOfficeRentalAgreementOrigin'), (0, 8, 'RentalOfficeRentalAgreementDrop'), (8, 3, 'RentalAgreementVehicle'), (8, 4, 'RentalAgreementCustomer')]

Adj4-invalid.soil: [[0, 1, 2, 2, 0, 0], [1, 0, 1, 1, 0, 0], [2, 1, 0, 0, 1, 0], [2, 1, 0, 0, 0, 1], [0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0]]

Labels4-invalid.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'RentalAgreement', 3: 'RentalAgreement', 4: 'Individual', 5: 'Company'}

Edges4-invalid.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeRentalAgreementOrigin'), (0, 2, 'RentalOfficeRentalAgreementDrop'), (2, 1, 'RentalAgreementVehicle'), (2, 4, 'RentalAgreementCustomer'), (0, 3, 'RentalOfficeRentalAgreementOrigin'), (0, 3, 'RentalOfficeRentalAgreementDrop'), (3, 1, 'RentalAgreementVehicle'), (3, 5, 'RentalAgreementCustomer')]

Adj4-edge.soil: [[0, 1, 2, 0], [1, 0, 1, 0], [2, 1, 0, 1], [0, 0, 1, 0]]

Labels4-edge.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'RentalAgreement', 3: 'Company'}

Edges4-edge.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeRentalAgreementOrigin'), (0, 2, 'RentalOfficeRentalAgreementDrop'), (2, 1, 'RentalAgreementVehicle'), (2, 3, 'RentalAgreementCustomer')]

Adj4-boundary.soil: [[0, 1, 1, 1, 2, 2, 0, 0], [1, 0, 0, 0, 1, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0], [2, 1, 0, 0, 0, 0, 1, 0], [2, 0, 1, 0, 0, 0, 0, 1], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0]]

Labels4-boundary.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Vehicle', 3: 'Truck', 4: 'RentalAgreement', 5: 'RentalAgreement', 6: 'Individual', 7: 'Company'}

Edges4-boundary.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeVehicle'), (0, 4, 'RentalOfficeRentalAgreementOrigin'), (0, 4, 'RentalOfficeRentalAgreementDrop'), (4, 1, 'RentalAgreementVehicle'), (4, 6, 'RentalAgreementCustomer'), (0, 5, 'RentalOfficeRentalAgreementOrigin'), (0, 5, 'RentalOfficeRentalAgreementDrop'), (5, 2, 'RentalAgreementVehicle'), (5, 7, 'RentalAgreementCustomer')]

Adj4-baseline.soil: [[0, 1, 1, 0, 0, 2, 2], [1, 0, 0, 0, 0, 1, 0], [1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 1], [2, 1, 0, 1, 0, 0, 0], [2, 0, 1, 0, 1, 0, 0]]

Labels4-baseline.soil: {0: 'RentalOffice', 1: 'Vehicle', 2: 'Truck', 3: 'Individual', 4: 'Company', 5: 'RentalAgreement', 6: 'RentalAgreement'}

Edges4-baseline.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 5, 'RentalOfficeRentalAgreementOrigin'), (0, 5, 'RentalOfficeRentalAgreementDrop'), (5, 1, 'RentalAgreementVehicle'), (5, 3, 'RentalAgreementCustomer'), (0, 6, 'RentalOfficeRentalAgreementOrigin'), (0, 6, 'RentalOfficeRentalAgreementDrop'), (6, 2, 'RentalAgreementVehicle'), (6, 4, 'RentalAgreementCustomer')]

Adj4-complex.soil: [[0, 1, 1, 1, 0, 0, 2, 2, 2], [1, 0, 0, 0, 0, 0, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1, 0], [1, 0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 1, 1, 0], [2, 1, 0, 0, 0, 1, 0, 0, 0], [2, 0, 1, 0, 0, 1, 0, 0, 0], [2, 0, 0, 1, 1, 0, 0, 0, 0]]

Labels4-complex.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Vehicle', 3: 'Vehicle', 4: 'Individual', 5: 'Company', 6: 'RentalAgreement', 7: 'RentalAgreement', 8: 'RentalAgreement'}

Edges4-complex.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeVehicle'), (0, 6, 'RentalOfficeRentalAgreementOrigin'), (0, 6, 'RentalOfficeRentalAgreementDrop'), (6, 1, 'RentalAgreementVehicle'), (6, 5, 'RentalAgreementCustomer'), (0, 7, 'RentalOfficeRentalAgreementOrigin'), (0, 7, 'RentalOfficeRentalAgreementDrop'), (7, 2, 'RentalAgreementVehicle'), (7, 5, 'RentalAgreementCustomer'), (0, 8, 'RentalOfficeRentalAgreementOrigin'), (0, 8, 'RentalOfficeRentalAgreementDrop'), (8, 3, 'RentalAgreementVehicle'), (8, 4, 'RentalAgreementCustomer')]

Adj5-invalid.soil: [[0, 1, 1, 2, 2, 0, 0], [1, 0, 0, 1, 0, 0, 0], [1, 0, 0, 0, 1, 0, 0], [2, 1, 0, 0, 0, 1, 0], [2, 0, 1, 0, 0, 0, 1], [0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0]]

Labels5-invalid.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Vehicle', 3: 'RentalAgreement', 4: 'RentalAgreement', 5: 'Individual', 6: 'Company'}

Edges5-invalid.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeRentalAgreementOrigin'), (0, 3, 'RentalOfficeRentalAgreementDrop'), (3, 1, 'RentalAgreementVehicle'), (3, 5, 'RentalAgreementCustomer'), (0, 4, 'RentalOfficeRentalAgreementOrigin'), (0, 4, 'RentalOfficeRentalAgreementDrop'), (4, 2, 'RentalAgreementVehicle'), (4, 6, 'RentalAgreementCustomer')]

Adj5-edge.soil: [[0, 1, 1, 2, 2, 0], [1, 0, 0, 1, 0, 0], [1, 0, 0, 0, 1, 0], [2, 1, 0, 0, 0, 1], [2, 0, 1, 0, 0, 1], [0, 0, 0, 1, 1, 0]]

Labels5-edge.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Vehicle', 3: 'RentalAgreement', 4: 'RentalAgreement', 5: 'Individual'}

Edges5-edge.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeRentalAgreementOrigin'), (0, 3, 'RentalOfficeRentalAgreementDrop'), (3, 1, 'RentalAgreementVehicle'), (3, 5, 'RentalAgreementCustomer'), (0, 4, 'RentalOfficeRentalAgreementOrigin'), (0, 4, 'RentalOfficeRentalAgreementDrop'), (4, 2, 'RentalAgreementVehicle'), (4, 5, 'RentalAgreementCustomer')]

Adj5-boundary.soil: [[0, 1, 1, 1, 2, 2, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 0, 0, 0], [2, 0, 0, 1, 0, 0, 0, 1], [2, 1, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0]]

Labels5-boundary.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Vehicle', 3: 'Truck', 4: 'RentalAgreement', 5: 'RentalAgreement', 6: 'Individual', 7: 'Company'}

Edges5-boundary.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeVehicle'), (0, 4, 'RentalOfficeRentalAgreementOrigin'), (0, 4, 'RentalOfficeRentalAgreementDrop'), (4, 3, 'RentalAgreementVehicle'), (4, 7, 'RentalAgreementCustomer'), (0, 5, 'RentalOfficeRentalAgreementOrigin'), (0, 5, 'RentalOfficeRentalAgreementDrop'), (5, 1, 'RentalAgreementVehicle'), (5, 6, 'RentalAgreementCustomer')]

Adj5-baseline.soil: [[0, 1, 1, 0, 0, 2, 2], [1, 0, 0, 0, 0, 1, 0], [1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 1], [2, 1, 0, 1, 0, 0, 0], [2, 0, 1, 0, 1, 0, 0]]

Labels5-baseline.soil: {0: 'RentalOffice', 1: 'Vehicle', 2: 'Truck', 3: 'Individual', 4: 'Company', 5: 'RentalAgreement', 6: 'RentalAgreement'}

Edges5-baseline.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 5, 'RentalOfficeRentalAgreementOrigin'), (0, 5, 'RentalOfficeRentalAgreementDrop'), (5, 1, 'RentalAgreementVehicle'), (5, 3, 'RentalAgreementCustomer'), (0, 6, 'RentalOfficeRentalAgreementOrigin'), (0, 6, 'RentalOfficeRentalAgreementDrop'), (6, 2, 'RentalAgreementVehicle'), (6, 4, 'RentalAgreementCustomer')]

Adj5-complex.soil: [[0, 1, 1, 1, 0, 0, 2, 2, 2], [1, 0, 0, 0, 0, 0, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1, 0], [1, 0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 1, 0, 1], [2, 1, 0, 0, 0, 1, 0, 0, 0], [2, 0, 1, 0, 1, 0, 0, 0, 0], [2, 0, 0, 1, 0, 1, 0, 0, 0]]

Labels5-complex.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Vehicle', 3: 'Vehicle', 4: 'Individual', 5: 'Company', 6: 'RentalAgreement', 7: 'RentalAgreement', 8: 'RentalAgreement'}

Edges5-complex.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeVehicle'), (0, 6, 'RentalOfficeRentalAgreementOrigin'), (0, 6, 'RentalOfficeRentalAgreementDrop'), (6, 1, 'RentalAgreementVehicle'), (6, 5, 'RentalAgreementCustomer'), (0, 7, 'RentalOfficeRentalAgreementOrigin'), (0, 7, 'RentalOfficeRentalAgreementDrop'), (7, 2, 'RentalAgreementVehicle'), (7, 4, 'RentalAgreementCustomer'), (0, 8, 'RentalOfficeRentalAgreementOrigin'), (0, 8, 'RentalOfficeRentalAgreementDrop'), (8, 3, 'RentalAgreementVehicle'), (8, 5, 'RentalAgreementCustomer')]

Adj6-invalid.soil: [[0, 1, 2, 0, 0], [1, 0, 1, 0, 0], [2, 1, 0, 1, 1], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0]]

Labels6-invalid.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'RentalAgreement', 3: 'Individual', 4: 'Company'}

Edges6-invalid.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeRentalAgreementOrigin'), (0, 2, 'RentalOfficeRentalAgreementDrop'), (2, 1, 'RentalAgreementVehicle'), (2, 3, 'RentalAgreementCustomer'), (2, 4, 'RentalAgreementCustomer')]

Adj6-edge.soil: [[0, 1, 1, 2, 2, 0], [1, 0, 0, 1, 0, 0], [1, 0, 0, 0, 1, 0], [2, 1, 0, 0, 0, 1], [2, 0, 1, 0, 0, 1], [0, 0, 0, 1, 1, 0]]

Labels6-edge.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Vehicle', 3: 'RentalAgreement', 4: 'RentalAgreement', 5: 'Company'}

Edges6-edge.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeRentalAgreementOrigin'), (0, 3, 'RentalOfficeRentalAgreementDrop'), (3, 1, 'RentalAgreementVehicle'), (3, 5, 'RentalAgreementCustomer'), (0, 4, 'RentalOfficeRentalAgreementOrigin'), (0, 4, 'RentalOfficeRentalAgreementDrop'), (4, 2, 'RentalAgreementVehicle'), (4, 5, 'RentalAgreementCustomer')]

Adj6-boundary.soil: [[0, 1, 1, 1, 2, 2, 0, 0], [1, 0, 0, 0, 1, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0], [2, 1, 0, 0, 0, 0, 1, 0], [2, 0, 0, 1, 0, 0, 0, 1], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0]]

Labels6-boundary.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Vehicle', 3: 'Truck', 4: 'RentalAgreement', 5: 'RentalAgreement', 6: 'Individual', 7: 'Company'}

Edges6-boundary.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeVehicle'), (0, 4, 'RentalOfficeRentalAgreementOrigin'), (0, 4, 'RentalOfficeRentalAgreementDrop'), (4, 1, 'RentalAgreementVehicle'), (4, 6, 'RentalAgreementCustomer'), (0, 5, 'RentalOfficeRentalAgreementOrigin'), (0, 5, 'RentalOfficeRentalAgreementDrop'), (5, 3, 'RentalAgreementVehicle'), (5, 7, 'RentalAgreementCustomer')]

Adj6-baseline.soil: [[0, 1, 1, 0, 0, 2, 2], [1, 0, 0, 0, 0, 1, 0], [1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 1], [2, 1, 0, 1, 0, 0, 0], [2, 0, 1, 0, 1, 0, 0]]

Labels6-baseline.soil: {0: 'RentalOffice', 1: 'Vehicle', 2: 'Truck', 3: 'Individual', 4: 'Company', 5: 'RentalAgreement', 6: 'RentalAgreement'}

Edges6-baseline.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 5, 'RentalOfficeRentalAgreementOrigin'), (0, 5, 'RentalOfficeRentalAgreementDrop'), (5, 1, 'RentalAgreementVehicle'), (5, 3, 'RentalAgreementCustomer'), (0, 6, 'RentalOfficeRentalAgreementOrigin'), (0, 6, 'RentalOfficeRentalAgreementDrop'), (6, 2, 'RentalAgreementVehicle'), (6, 4, 'RentalAgreementCustomer')]

Adj6-complex.soil: [[0, 1, 1, 1, 0, 0, 2, 2, 2], [1, 0, 0, 0, 0, 0, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1, 0], [1, 0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 1, 0, 1], [0, 0, 0, 0, 0, 0, 0, 1, 0], [2, 1, 0, 0, 1, 0, 0, 0, 0], [2, 0, 1, 0, 0, 1, 0, 0, 0], [2, 0, 0, 1, 1, 0, 0, 0, 0]]

Labels6-complex.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Vehicle', 3: 'Vehicle', 4: 'Individual', 5: 'Company', 6: 'RentalAgreement', 7: 'RentalAgreement', 8: 'RentalAgreement'}

Edges6-complex.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeVehicle'), (0, 6, 'RentalOfficeRentalAgreementOrigin'), (0, 6, 'RentalOfficeRentalAgreementDrop'), (6, 1, 'RentalAgreementVehicle'), (6, 4, 'RentalAgreementCustomer'), (0, 7, 'RentalOfficeRentalAgreementOrigin'), (0, 7, 'RentalOfficeRentalAgreementDrop'), (7, 2, 'RentalAgreementVehicle'), (7, 5, 'RentalAgreementCustomer'), (0, 8, 'RentalOfficeRentalAgreementOrigin'), (0, 8, 'RentalOfficeRentalAgreementDrop'), (8, 3, 'RentalAgreementVehicle'), (8, 4, 'RentalAgreementCustomer')]

```
# GED Matrix: 
```
[[0.0, 6.0, 7.0, 12.0, 17.0, 8.0, 12.0, 13.0, 12.0, 19.0, 9.0, 6.0, 7.0, 12.0, 19.0, 10.0, 5.0, 14.0, 12.0, 19.0, 12.0, 11.0, 14.0, 12.0, 19.0, 6.0, 12.0, 14.0, 12.0, 19.0], [6.0, 0.0, 1.0, 7.0, 11.0, 2.0, 6.0, 7.0, 7.0, 13.0, 4.0, 0.0, 1.0, 7.0, 13.0, 6.0, 3.0, 8.0, 7.0, 14.0, 6.0, 5.0, 8.0, 7.0, 14.0, 3.0, 6.0, 8.0, 7.0, 13.0], [7.0, 1.0, 0.0, 6.0, 11.0, 1.0, 5.0, 8.0, 6.0, 14.0, 3.0, 1.0, 0.0, 6.0, 14.0, 6.0, 2.0, 9.0, 6.0, 13.0, 7.0, 6.0, 8.0, 6.0, 13.0, 3.0, 5.0, 8.0, 6.0, 14.0], [12.0, 7.0, 6.0, 0.0, 7.0, 7.0, 3.0, 4.0, 0.0, 8.0, 8.0, 7.0, 6.0, 0.0, 8.0, 4.0, 8.0, 4.0, 0.0, 7.0, 2.0, 3.0, 3.0, 0.0, 7.0, 8.0, 3.0, 3.0, 0.0, 8.0], [17.0, 11.0, 11.0, 7.0, 0.0, 12.0, 6.0, 7.0, 7.0, 6.0, 13.0, 11.0, 11.0, 7.0, 6.0, 7.0, 13.0, 5.0, 7.0, 4.0, 5.0, 7.0, 6.0, 7.0, 4.0, 13.0, 6.0, 6.0, 7.0, 6.0], [8.0, 2.0, 1.0, 7.0, 12.0, 0.0, 6.0, 9.0, 7.0, 14.0, 4.0, 2.0, 1.0, 7.0, 14.0, 7.0, 3.0, 9.0, 7.0, 14.0, 7.0, 7.0, 9.0, 7.0, 14.0, 3.0, 6.0, 9.0, 7.0, 14.0], [12.0, 6.0, 5.0, 3.0, 6.0, 6.0, 0.0, 3.0, 3.0, 9.0, 7.0, 6.0, 5.0, 3.0, 9.0, 5.0, 7.0, 5.0, 3.0, 8.0, 3.0, 1.0, 6.0, 3.0, 8.0, 8.0, 0.0, 6.0, 3.0, 9.0], [13.0, 7.0, 8.0, 4.0, 7.0, 9.0, 3.0, 0.0, 4.0, 6.0, 9.0, 7.0, 8.0, 4.0, 6.0, 7.0, 10.0, 4.0, 4.0, 7.0, 4.0, 2.0, 4.0, 4.0, 7.0, 10.0, 3.0, 4.0, 4.0, 6.0], [12.0, 7.0, 6.0, 0.0, 7.0, 7.0, 3.0, 4.0, 0.0, 8.0, 8.0, 7.0, 6.0, 0.0, 8.0, 4.0, 8.0, 4.0, 0.0, 7.0, 2.0, 3.0, 3.0, 0.0, 7.0, 8.0, 3.0, 3.0, 0.0, 8.0], [19.0, 13.0, 14.0, 8.0, 6.0, 14.0, 9.0, 6.0, 8.0, 0.0, 14.0, 13.0, 14.0, 8.0, 0.0, 11.0, 16.0, 6.0, 8.0, 2.0, 7.0, 8.0, 6.0, 8.0, 2.0, 15.0, 9.0, 6.0, 8.0, 0.0], [9.0, 4.0, 3.0, 8.0, 13.0, 4.0, 7.0, 9.0, 8.0, 14.0, 0.0, 4.0, 3.0, 8.0, 14.0, 8.0, 5.0, 10.0, 8.0, 14.0, 8.0, 8.0, 10.0, 8.0, 14.0, 4.0, 7.0, 10.0, 8.0, 14.0], [6.0, 0.0, 1.0, 7.0, 11.0, 2.0, 6.0, 7.0, 7.0, 13.0, 4.0, 0.0, 1.0, 7.0, 13.0, 6.0, 3.0, 8.0, 7.0, 14.0, 6.0, 5.0, 8.0, 7.0, 14.0, 3.0, 6.0, 8.0, 7.0, 13.0], [7.0, 1.0, 0.0, 6.0, 11.0, 1.0, 5.0, 8.0, 6.0, 14.0, 3.0, 1.0, 0.0, 6.0, 14.0, 6.0, 2.0, 9.0, 6.0, 13.0, 7.0, 6.0, 8.0, 6.0, 13.0, 3.0, 5.0, 8.0, 6.0, 14.0], [12.0, 7.0, 6.0, 0.0, 7.0, 7.0, 3.0, 4.0, 0.0, 8.0, 8.0, 7.0, 6.0, 0.0, 8.0, 4.0, 8.0, 4.0, 0.0, 7.0, 2.0, 3.0, 3.0, 0.0, 7.0, 8.0, 3.0, 3.0, 0.0, 8.0], [19.0, 13.0, 14.0, 8.0, 6.0, 14.0, 9.0, 6.0, 8.0, 0.0, 14.0, 13.0, 14.0, 8.0, 0.0, 11.0, 16.0, 6.0, 8.0, 2.0, 7.0, 8.0, 6.0, 8.0, 2.0, 15.0, 9.0, 6.0, 8.0, 0.0], [10.0, 6.0, 6.0, 4.0, 7.0, 7.0, 5.0, 7.0, 4.0, 11.0, 8.0, 6.0, 6.0, 4.0, 11.0, 0.0, 6.0, 6.0, 4.0, 11.0, 4.0, 5.0, 6.0, 4.0, 11.0, 6.0, 5.0, 6.0, 4.0, 11.0], [5.0, 3.0, 2.0, 8.0, 13.0, 3.0, 7.0, 10.0, 8.0, 16.0, 5.0, 3.0, 2.0, 8.0, 16.0, 6.0, 0.0, 11.0, 8.0, 15.0, 9.0, 8.0, 10.0, 8.0, 15.0, 2.0, 7.0, 10.0, 8.0, 16.0], [14.0, 8.0, 9.0, 4.0, 5.0, 9.0, 5.0, 4.0, 4.0, 6.0, 10.0, 8.0, 9.0, 4.0, 6.0, 6.0, 11.0, 0.0, 4.0, 6.0, 2.0, 5.0, 2.0, 4.0, 6.0, 10.0, 5.0, 2.0, 4.0, 6.0], [12.0, 7.0, 6.0, 0.0, 7.0, 7.0, 3.0, 4.0, 0.0, 8.0, 8.0, 7.0, 6.0, 0.0, 8.0, 4.0, 8.0, 4.0, 0.0, 7.0, 2.0, 3.0, 3.0, 0.0, 7.0, 8.0, 3.0, 3.0, 0.0, 8.0], [19.0, 14.0, 13.0, 7.0, 4.0, 14.0, 8.0, 7.0, 7.0, 2.0, 14.0, 14.0, 13.0, 7.0, 2.0, 11.0, 15.0, 6.0, 7.0, 0.0, 8.0, 9.0, 6.0, 7.0, 0.0, 15.0, 8.0, 6.0, 7.0, 2.0], [12.0, 6.0, 7.0, 2.0, 5.0, 7.0, 3.0, 4.0, 2.0, 7.0, 8.0, 6.0, 7.0, 2.0, 7.0, 4.0, 9.0, 2.0, 2.0, 8.0, 0.0, 3.0, 3.0, 2.0, 8.0, 8.0, 3.0, 3.0, 2.0, 7.0], [11.0, 5.0, 6.0, 3.0, 7.0, 7.0, 1.0, 2.0, 3.0, 8.0, 8.0, 5.0, 6.0, 3.0, 8.0, 5.0, 8.0, 5.0, 3.0, 9.0, 3.0, 0.0, 6.0, 3.0, 9.0, 8.0, 1.0, 6.0, 3.0, 8.0], [14.0, 8.0, 8.0, 3.0, 6.0, 9.0, 6.0, 4.0, 3.0, 6.0, 10.0, 8.0, 8.0, 3.0, 6.0, 6.0, 10.0, 2.0, 3.0, 6.0, 3.0, 6.0, 0.0, 3.0, 6.0, 10.0, 6.0, 0.0, 3.0, 6.0], [12.0, 7.0, 6.0, 0.0, 7.0, 7.0, 3.0, 4.0, 0.0, 8.0, 8.0, 7.0, 6.0, 0.0, 8.0, 4.0, 8.0, 4.0, 0.0, 7.0, 2.0, 3.0, 3.0, 0.0, 7.0, 8.0, 3.0, 3.0, 0.0, 8.0], [19.0, 14.0, 13.0, 7.0, 4.0, 14.0, 8.0, 7.0, 7.0, 2.0, 14.0, 14.0, 13.0, 7.0, 2.0, 11.0, 15.0, 6.0, 7.0, 0.0, 8.0, 9.0, 6.0, 7.0, 0.0, 15.0, 8.0, 6.0, 7.0, 2.0], [6.0, 3.0, 3.0, 8.0, 13.0, 3.0, 8.0, 10.0, 8.0, 15.0, 4.0, 3.0, 3.0, 8.0, 15.0, 6.0, 2.0, 10.0, 8.0, 15.0, 8.0, 8.0, 10.0, 8.0, 15.0, 0.0, 8.0, 10.0, 8.0, 15.0], [12.0, 6.0, 5.0, 3.0, 6.0, 6.0, 0.0, 3.0, 3.0, 9.0, 7.0, 6.0, 5.0, 3.0, 9.0, 5.0, 7.0, 5.0, 3.0, 8.0, 3.0, 1.0, 6.0, 3.0, 8.0, 8.0, 0.0, 6.0, 3.0, 9.0], [14.0, 8.0, 8.0, 3.0, 6.0, 9.0, 6.0, 4.0, 3.0, 6.0, 10.0, 8.0, 8.0, 3.0, 6.0, 6.0, 10.0, 2.0, 3.0, 6.0, 3.0, 6.0, 0.0, 3.0, 6.0, 10.0, 6.0, 0.0, 3.0, 6.0], [12.0, 7.0, 6.0, 0.0, 7.0, 7.0, 3.0, 4.0, 0.0, 8.0, 8.0, 7.0, 6.0, 0.0, 8.0, 4.0, 8.0, 4.0, 0.0, 7.0, 2.0, 3.0, 3.0, 0.0, 7.0, 8.0, 3.0, 3.0, 0.0, 8.0], [19.0, 13.0, 14.0, 8.0, 6.0, 14.0, 9.0, 6.0, 8.0, 0.0, 14.0, 13.0, 14.0, 8.0, 0.0, 11.0, 16.0, 6.0, 8.0, 2.0, 7.0, 8.0, 6.0, 8.0, 2.0, 15.0, 9.0, 6.0, 8.0, 0.0]]
```
# GED 2D table: 
|       | invalid1 | edge2 | boundary3 | baseline4 | complex5 | invalid6 | edge7 | boundary8 | baseline9 | complex10 | invalid11 | edge12 | boundary13 | baseline14 | complex15 | invalid16 | edge17 | boundary18 | baseline19 | complex20 | invalid21 | edge22 | boundary23 | baseline24 | complex25 | invalid26 | edge27 | boundary28 | baseline29 | complex30 |
|-------|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **invalid1** | 0.000000 | 6.000000 | 7.000000 | 12.000000 | 17.000000 | 8.000000 | 12.000000 | 13.000000 | 12.000000 | 19.000000 | 9.000000 | 6.000000 | 7.000000 | 12.000000 | 19.000000 | 10.000000 | 5.000000 | 14.000000 | 12.000000 | 19.000000 | 12.000000 | 11.000000 | 14.000000 | 12.000000 | 19.000000 | 6.000000 | 12.000000 | 14.000000 | 12.000000 | 19.000000 |
| **edge2** |  | 0.000000 | 1.000000 | 7.000000 | 11.000000 | 2.000000 | 6.000000 | 7.000000 | 7.000000 | 13.000000 | 4.000000 | 0.000000 | 1.000000 | 7.000000 | 13.000000 | 6.000000 | 3.000000 | 8.000000 | 7.000000 | 14.000000 | 6.000000 | 5.000000 | 8.000000 | 7.000000 | 14.000000 | 3.000000 | 6.000000 | 8.000000 | 7.000000 | 13.000000 |
| **boundary3** |  |  | 0.000000 | 6.000000 | 11.000000 | 1.000000 | 5.000000 | 8.000000 | 6.000000 | 14.000000 | 3.000000 | 1.000000 | 0.000000 | 6.000000 | 14.000000 | 6.000000 | 2.000000 | 9.000000 | 6.000000 | 13.000000 | 7.000000 | 6.000000 | 8.000000 | 6.000000 | 13.000000 | 3.000000 | 5.000000 | 8.000000 | 6.000000 | 14.000000 |
| **baseline4** |  |  |  | 0.000000 | 7.000000 | 7.000000 | 3.000000 | 4.000000 | 0.000000 | 8.000000 | 8.000000 | 7.000000 | 6.000000 | 0.000000 | 8.000000 | 4.000000 | 8.000000 | 4.000000 | 0.000000 | 7.000000 | 2.000000 | 3.000000 | 3.000000 | 0.000000 | 7.000000 | 8.000000 | 3.000000 | 3.000000 | 0.000000 | 8.000000 |
| **complex5** |  |  |  |  | 0.000000 | 12.000000 | 6.000000 | 7.000000 | 7.000000 | 6.000000 | 13.000000 | 11.000000 | 11.000000 | 7.000000 | 6.000000 | 7.000000 | 13.000000 | 5.000000 | 7.000000 | 4.000000 | 5.000000 | 7.000000 | 6.000000 | 7.000000 | 4.000000 | 13.000000 | 6.000000 | 6.000000 | 7.000000 | 6.000000 |
| **invalid6** |  |  |  |  |  | 0.000000 | 6.000000 | 9.000000 | 7.000000 | 14.000000 | 4.000000 | 2.000000 | 1.000000 | 7.000000 | 14.000000 | 7.000000 | 3.000000 | 9.000000 | 7.000000 | 14.000000 | 7.000000 | 7.000000 | 9.000000 | 7.000000 | 14.000000 | 3.000000 | 6.000000 | 9.000000 | 7.000000 | 14.000000 |
| **edge7** |  |  |  |  |  |  | 0.000000 | 3.000000 | 3.000000 | 9.000000 | 7.000000 | 6.000000 | 5.000000 | 3.000000 | 9.000000 | 5.000000 | 7.000000 | 5.000000 | 3.000000 | 8.000000 | 3.000000 | 1.000000 | 6.000000 | 3.000000 | 8.000000 | 8.000000 | 0.000000 | 6.000000 | 3.000000 | 9.000000 |
| **boundary8** |  |  |  |  |  |  |  | 0.000000 | 4.000000 | 6.000000 | 9.000000 | 7.000000 | 8.000000 | 4.000000 | 6.000000 | 7.000000 | 10.000000 | 4.000000 | 4.000000 | 7.000000 | 4.000000 | 2.000000 | 4.000000 | 4.000000 | 7.000000 | 10.000000 | 3.000000 | 4.000000 | 4.000000 | 6.000000 |
| **baseline9** |  |  |  |  |  |  |  |  | 0.000000 | 8.000000 | 8.000000 | 7.000000 | 6.000000 | 0.000000 | 8.000000 | 4.000000 | 8.000000 | 4.000000 | 0.000000 | 7.000000 | 2.000000 | 3.000000 | 3.000000 | 0.000000 | 7.000000 | 8.000000 | 3.000000 | 3.000000 | 0.000000 | 8.000000 |
| **complex10** |  |  |  |  |  |  |  |  |  | 0.000000 | 14.000000 | 13.000000 | 14.000000 | 8.000000 | 0.000000 | 11.000000 | 16.000000 | 6.000000 | 8.000000 | 2.000000 | 7.000000 | 8.000000 | 6.000000 | 8.000000 | 2.000000 | 15.000000 | 9.000000 | 6.000000 | 8.000000 | 0.000000 |
| **invalid11** |  |  |  |  |  |  |  |  |  |  | 0.000000 | 4.000000 | 3.000000 | 8.000000 | 14.000000 | 8.000000 | 5.000000 | 10.000000 | 8.000000 | 14.000000 | 8.000000 | 8.000000 | 10.000000 | 8.000000 | 14.000000 | 4.000000 | 7.000000 | 10.000000 | 8.000000 | 14.000000 |
| **edge12** |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 1.000000 | 7.000000 | 13.000000 | 6.000000 | 3.000000 | 8.000000 | 7.000000 | 14.000000 | 6.000000 | 5.000000 | 8.000000 | 7.000000 | 14.000000 | 3.000000 | 6.000000 | 8.000000 | 7.000000 | 13.000000 |
| **boundary13** |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 6.000000 | 14.000000 | 6.000000 | 2.000000 | 9.000000 | 6.000000 | 13.000000 | 7.000000 | 6.000000 | 8.000000 | 6.000000 | 13.000000 | 3.000000 | 5.000000 | 8.000000 | 6.000000 | 14.000000 |
| **baseline14** |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 8.000000 | 4.000000 | 8.000000 | 4.000000 | 0.000000 | 7.000000 | 2.000000 | 3.000000 | 3.000000 | 0.000000 | 7.000000 | 8.000000 | 3.000000 | 3.000000 | 0.000000 | 8.000000 |
| **complex15** |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 11.000000 | 16.000000 | 6.000000 | 8.000000 | 2.000000 | 7.000000 | 8.000000 | 6.000000 | 8.000000 | 2.000000 | 15.000000 | 9.000000 | 6.000000 | 8.000000 | 0.000000 |
| **invalid16** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 6.000000 | 6.000000 | 4.000000 | 11.000000 | 4.000000 | 5.000000 | 6.000000 | 4.000000 | 11.000000 | 6.000000 | 5.000000 | 6.000000 | 4.000000 | 11.000000 |
| **edge17** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 11.000000 | 8.000000 | 15.000000 | 9.000000 | 8.000000 | 10.000000 | 8.000000 | 15.000000 | 2.000000 | 7.000000 | 10.000000 | 8.000000 | 16.000000 |
| **boundary18** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 4.000000 | 6.000000 | 2.000000 | 5.000000 | 2.000000 | 4.000000 | 6.000000 | 10.000000 | 5.000000 | 2.000000 | 4.000000 | 6.000000 |
| **baseline19** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 7.000000 | 2.000000 | 3.000000 | 3.000000 | 0.000000 | 7.000000 | 8.000000 | 3.000000 | 3.000000 | 0.000000 | 8.000000 |
| **complex20** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 8.000000 | 9.000000 | 6.000000 | 7.000000 | 0.000000 | 15.000000 | 8.000000 | 6.000000 | 7.000000 | 2.000000 |
| **invalid21** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 3.000000 | 3.000000 | 2.000000 | 8.000000 | 8.000000 | 3.000000 | 3.000000 | 2.000000 | 7.000000 |
| **edge22** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 6.000000 | 3.000000 | 9.000000 | 8.000000 | 1.000000 | 6.000000 | 3.000000 | 8.000000 |
| **boundary23** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 3.000000 | 6.000000 | 10.000000 | 6.000000 | 0.000000 | 3.000000 | 6.000000 |
| **baseline24** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 7.000000 | 8.000000 | 3.000000 | 3.000000 | 0.000000 | 8.000000 |
| **complex25** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 15.000000 | 8.000000 | 6.000000 | 7.000000 | 2.000000 |
| **invalid26** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 8.000000 | 10.000000 | 8.000000 | 15.000000 |
| **edge27** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 6.000000 | 3.000000 | 9.000000 |
| **boundary28** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 3.000000 | 6.000000 |
| **baseline29** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 8.000000 |
| **complex30** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 |

# Normalized GED 2D table: 
|       | invalid1 | edge2 | boundary3 | baseline4 | complex5 | invalid6 | edge7 | boundary8 | baseline9 | complex10 | invalid11 | edge12 | boundary13 | baseline14 | complex15 | invalid16 | edge17 | boundary18 | baseline19 | complex20 | invalid21 | edge22 | boundary23 | baseline24 | complex25 | invalid26 | edge27 | boundary28 | baseline29 | complex30 |
|-------|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **invalid1** | 1.000000 | 0.250000 | 0.125000 | 0.000000 | 0.000000 | 0.058824 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.250000 | 0.125000 | 0.000000 | 0.000000 | 0.000000 | 0.285714 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.250000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **edge2** |  | 1.000000 | 0.909091 | 0.500000 | 0.333333 | 0.826087 | 0.555556 | 0.517241 | 0.500000 | 0.257143 | 0.666667 | 1.000000 | 0.909091 | 0.500000 | 0.257143 | 0.538462 | 0.700000 | 0.466667 | 0.500000 | 0.200000 | 0.571429 | 0.629630 | 0.466667 | 0.500000 | 0.200000 | 0.727273 | 0.555556 | 0.466667 | 0.500000 | 0.257143 |
| **boundary3** |  |  | 1.000000 | 0.571429 | 0.333333 | 0.913043 | 0.629630 | 0.448276 | 0.571429 | 0.200000 | 0.750000 | 0.909091 | 1.000000 | 0.571429 | 0.200000 | 0.538462 | 0.800000 | 0.400000 | 0.571429 | 0.257143 | 0.500000 | 0.555556 | 0.466667 | 0.571429 | 0.257143 | 0.727273 | 0.629630 | 0.466667 | 0.571429 | 0.200000 |
| **baseline4** |  |  |  | 1.000000 | 0.641026 | 0.517241 | 0.818182 | 0.771429 | 1.000000 | 0.609756 | 0.466667 | 0.500000 | 0.571429 | 1.000000 | 0.609756 | 0.750000 | 0.384615 | 0.777778 | 1.000000 | 0.658537 | 0.882353 | 0.818182 | 0.833333 | 1.000000 | 0.658537 | 0.428571 | 0.818182 | 0.833333 | 1.000000 | 0.609756 |
| **complex5** |  |  |  |  | 1.000000 | 0.294118 | 0.684211 | 0.650000 | 0.641026 | 0.739130 | 0.257143 | 0.333333 | 0.333333 | 0.641026 | 0.739130 | 0.621622 | 0.161290 | 0.756098 | 0.641026 | 0.826087 | 0.743590 | 0.631579 | 0.707317 | 0.641026 | 0.826087 | 0.212121 | 0.684211 | 0.707317 | 0.641026 | 0.739130 |
| **invalid6** |  |  |  |  |  | 1.000000 | 0.571429 | 0.400000 | 0.517241 | 0.222222 | 0.680000 | 0.826087 | 0.913043 | 0.517241 | 0.222222 | 0.481481 | 0.714286 | 0.419355 | 0.517241 | 0.222222 | 0.517241 | 0.500000 | 0.419355 | 0.517241 | 0.222222 | 0.739130 | 0.571429 | 0.419355 | 0.517241 | 0.222222 |
| **edge7** |  |  |  |  |  |  | 1.000000 | 0.823529 | 0.818182 | 0.550000 | 0.517241 | 0.555556 | 0.629630 | 0.818182 | 0.550000 | 0.677419 | 0.440000 | 0.714286 | 0.818182 | 0.600000 | 0.818182 | 0.937500 | 0.657143 | 0.818182 | 0.600000 | 0.407407 | 1.000000 | 0.657143 | 0.818182 | 0.550000 |
| **boundary8** |  |  |  |  |  |  |  | 1.000000 | 0.771429 | 0.714286 | 0.419355 | 0.517241 | 0.448276 | 0.771429 | 0.714286 | 0.575758 | 0.259259 | 0.783784 | 0.771429 | 0.666667 | 0.771429 | 0.882353 | 0.783784 | 0.771429 | 0.666667 | 0.310345 | 0.823529 | 0.783784 | 0.771429 | 0.714286 |
| **baseline9** |  |  |  |  |  |  |  |  | 1.000000 | 0.609756 | 0.466667 | 0.500000 | 0.571429 | 1.000000 | 0.609756 | 0.750000 | 0.384615 | 0.777778 | 1.000000 | 0.658537 | 0.882353 | 0.818182 | 0.833333 | 1.000000 | 0.658537 | 0.428571 | 0.818182 | 0.833333 | 1.000000 | 0.609756 |
| **complex10** |  |  |  |  |  |  |  |  |  | 1.000000 | 0.243243 | 0.257143 | 0.200000 | 0.609756 | 1.000000 | 0.435897 | 0.030303 | 0.720930 | 0.609756 | 0.916667 | 0.658537 | 0.600000 | 0.720930 | 0.609756 | 0.916667 | 0.142857 | 0.550000 | 0.720930 | 0.609756 | 1.000000 |
| **invalid11** |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.666667 | 0.750000 | 0.466667 | 0.243243 | 0.428571 | 0.545455 | 0.375000 | 0.466667 | 0.243243 | 0.466667 | 0.448276 | 0.375000 | 0.466667 | 0.243243 | 0.666667 | 0.517241 | 0.375000 | 0.466667 | 0.243243 |
| **edge12** |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.909091 | 0.500000 | 0.257143 | 0.538462 | 0.700000 | 0.466667 | 0.500000 | 0.200000 | 0.571429 | 0.629630 | 0.466667 | 0.500000 | 0.200000 | 0.727273 | 0.555556 | 0.466667 | 0.500000 | 0.257143 |
| **boundary13** |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.571429 | 0.200000 | 0.538462 | 0.800000 | 0.400000 | 0.571429 | 0.257143 | 0.500000 | 0.555556 | 0.466667 | 0.571429 | 0.257143 | 0.727273 | 0.629630 | 0.466667 | 0.571429 | 0.200000 |
| **baseline14** |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.609756 | 0.750000 | 0.384615 | 0.777778 | 1.000000 | 0.658537 | 0.882353 | 0.818182 | 0.833333 | 1.000000 | 0.658537 | 0.428571 | 0.818182 | 0.833333 | 1.000000 | 0.609756 |
| **complex15** |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.435897 | 0.030303 | 0.720930 | 0.609756 | 0.916667 | 0.658537 | 0.600000 | 0.720930 | 0.609756 | 0.916667 | 0.142857 | 0.550000 | 0.720930 | 0.609756 | 1.000000 |
| **invalid16** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.500000 | 0.647059 | 0.750000 | 0.435897 | 0.750000 | 0.677419 | 0.647059 | 0.750000 | 0.435897 | 0.538462 | 0.677419 | 0.647059 | 0.750000 | 0.435897 |
| **edge17** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.214286 | 0.384615 | 0.090909 | 0.307692 | 0.360000 | 0.285714 | 0.384615 | 0.090909 | 0.800000 | 0.440000 | 0.285714 | 0.384615 | 0.030303 |
| **boundary18** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.777778 | 0.720930 | 0.888889 | 0.714286 | 0.894737 | 0.777778 | 0.720930 | 0.333333 | 0.714286 | 0.894737 | 0.777778 | 0.720930 |
| **baseline19** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.658537 | 0.882353 | 0.818182 | 0.833333 | 1.000000 | 0.658537 | 0.428571 | 0.818182 | 0.833333 | 1.000000 | 0.609756 |
| **complex20** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.609756 | 0.550000 | 0.720930 | 0.658537 | 1.000000 | 0.142857 | 0.600000 | 0.720930 | 0.658537 | 0.916667 |
| **invalid21** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.818182 | 0.833333 | 0.882353 | 0.609756 | 0.428571 | 0.818182 | 0.833333 | 0.882353 | 0.658537 |
| **edge22** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.657143 | 0.818182 | 0.550000 | 0.407407 | 0.937500 | 0.657143 | 0.818182 | 0.600000 |
| **boundary23** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.833333 | 0.720930 | 0.333333 | 0.657143 | 1.000000 | 0.833333 | 0.720930 |
| **baseline24** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.658537 | 0.428571 | 0.818182 | 0.833333 | 1.000000 | 0.609756 |
| **complex25** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.142857 | 0.600000 | 0.720930 | 0.658537 | 0.916667 |
| **invalid26** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.407407 | 0.333333 | 0.428571 | 0.142857 |
| **edge27** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.657143 | 0.818182 | 0.550000 |
| **boundary28** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.833333 | 0.720930 |
| **baseline29** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 0.609756 |
| **complex30** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 |