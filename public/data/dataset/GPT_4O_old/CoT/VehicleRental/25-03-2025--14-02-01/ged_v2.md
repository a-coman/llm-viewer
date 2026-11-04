# Adjacency, edges, and labels

```text
Adj-gen1/baseline.soil: [[0, 1, 1, 0, 0, 2, 2], [1, 0, 0, 0, 0, 1, 0], [1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 1], [2, 1, 0, 1, 0, 0, 0], [2, 0, 1, 0, 1, 0, 0]]

Labels-gen1/baseline.soil: {0: 'RentalOffice', 1: 'Vehicle', 2: 'Truck', 3: 'Individual', 4: 'Company', 5: 'RentalAgreement', 6: 'RentalAgreement'}

Edges-gen1/baseline.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 5, 'RentalOfficeRentalAgreementOrigin'), (0, 5, 'RentalOfficeRentalAgreementDrop'), (0, 6, 'RentalOfficeRentalAgreementOrigin'), (0, 6, 'RentalOfficeRentalAgreementDrop'), (5, 1, 'RentalAgreementVehicle'), (5, 3, 'RentalAgreementCustomer'), (6, 2, 'RentalAgreementVehicle'), (6, 4, 'RentalAgreementCustomer')]

Adj-gen1/boundary.soil: [[0, 1, 1, 2, 0], [1, 0, 0, 1, 0], [1, 0, 0, 0, 0], [2, 1, 0, 0, 1], [0, 0, 0, 1, 0]]

Labels-gen1/boundary.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Vehicle', 3: 'RentalAgreement', 4: 'Company'}

Edges-gen1/boundary.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeRentalAgreementOrigin'), (0, 3, 'RentalOfficeRentalAgreementDrop'), (3, 1, 'RentalAgreementVehicle'), (3, 4, 'RentalAgreementCustomer')]

Adj-gen1/complex.soil: [[0, 1, 1, 0, 0, 2, 2, 2], [1, 0, 0, 0, 0, 1, 0, 1], [1, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 1, 1], [2, 1, 0, 1, 0, 0, 0, 0], [2, 0, 1, 0, 1, 0, 0, 0], [2, 1, 0, 0, 1, 0, 0, 0]]

Labels-gen1/complex.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Vehicle', 3: 'Individual', 4: 'Company', 5: 'RentalAgreement', 6: 'RentalAgreement', 7: 'RentalAgreement'}

Edges-gen1/complex.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 5, 'RentalOfficeRentalAgreementOrigin'), (0, 5, 'RentalOfficeRentalAgreementDrop'), (5, 1, 'RentalAgreementVehicle'), (5, 3, 'RentalAgreementCustomer'), (0, 6, 'RentalOfficeRentalAgreementOrigin'), (0, 6, 'RentalOfficeRentalAgreementDrop'), (6, 2, 'RentalAgreementVehicle'), (6, 4, 'RentalAgreementCustomer'), (0, 7, 'RentalOfficeRentalAgreementOrigin'), (0, 7, 'RentalOfficeRentalAgreementDrop'), (7, 1, 'RentalAgreementVehicle'), (7, 4, 'RentalAgreementCustomer')]

Adj-gen1/edge.soil: [[0, 1, 1, 2, 0], [1, 0, 0, 0, 0], [1, 0, 0, 1, 0], [2, 0, 1, 0, 1], [0, 0, 0, 1, 0]]

Labels-gen1/edge.soil: {0: 'RentalOffice', 1: 'Vehicle', 2: 'Truck', 3: 'RentalAgreement', 4: 'Individual'}

Edges-gen1/edge.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeRentalAgreementOrigin'), (0, 3, 'RentalOfficeRentalAgreementDrop'), (3, 2, 'RentalAgreementVehicle'), (3, 4, 'RentalAgreementCustomer')]

Adj-gen1/invalid.soil: [[0, 1, 0], [1, 0, 1], [0, 1, 0]]

Labels-gen1/invalid.soil: {0: 'RentalOffice', 1: 'RentalAgreement', 2: 'Individual'}

Edges-gen1/invalid.soil: [(1, 2, 'RentalAgreementCustomer'), (0, 1, 'RentalOfficeRentalAgreementOrigin')]

Adj-gen2/baseline.soil: [[0, 1, 1, 0, 0, 2, 2], [1, 0, 0, 0, 0, 1, 0], [1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 1], [2, 1, 0, 1, 0, 0, 0], [2, 0, 1, 0, 1, 0, 0]]

Labels-gen2/baseline.soil: {0: 'RentalOffice', 1: 'Vehicle', 2: 'Truck', 3: 'Individual', 4: 'Company', 5: 'RentalAgreement', 6: 'RentalAgreement'}

Edges-gen2/baseline.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 5, 'RentalOfficeRentalAgreementOrigin'), (0, 5, 'RentalOfficeRentalAgreementDrop'), (5, 1, 'RentalAgreementVehicle'), (5, 3, 'RentalAgreementCustomer'), (0, 6, 'RentalOfficeRentalAgreementOrigin'), (0, 6, 'RentalOfficeRentalAgreementDrop'), (6, 2, 'RentalAgreementVehicle'), (6, 4, 'RentalAgreementCustomer')]

Adj-gen2/boundary.soil: [[0, 1, 1, 1, 2, 2, 0], [1, 0, 0, 0, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0], [2, 1, 0, 0, 0, 0, 1], [2, 0, 0, 1, 0, 0, 1], [0, 0, 0, 0, 1, 1, 0]]

Labels-gen2/boundary.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Vehicle', 3: 'Vehicle', 4: 'RentalAgreement', 5: 'RentalAgreement', 6: 'Individual'}

Edges-gen2/boundary.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeVehicle'), (0, 4, 'RentalOfficeRentalAgreementOrigin'), (0, 4, 'RentalOfficeRentalAgreementDrop'), (4, 1, 'RentalAgreementVehicle'), (4, 6, 'RentalAgreementCustomer'), (0, 5, 'RentalOfficeRentalAgreementOrigin'), (0, 5, 'RentalOfficeRentalAgreementDrop'), (5, 3, 'RentalAgreementVehicle'), (5, 6, 'RentalAgreementCustomer')]

Adj-gen2/complex.soil: [[0, 1, 1, 1, 0, 0, 2, 2, 2], [1, 0, 0, 0, 0, 0, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1, 0], [1, 0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 1, 0, 1], [0, 0, 0, 0, 0, 0, 0, 1, 0], [2, 1, 0, 0, 1, 0, 0, 0, 0], [2, 0, 1, 0, 0, 1, 0, 0, 0], [2, 0, 0, 1, 1, 0, 0, 0, 0]]

Labels-gen2/complex.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Vehicle', 3: 'Vehicle', 4: 'Individual', 5: 'Company', 6: 'RentalAgreement', 7: 'RentalAgreement', 8: 'RentalAgreement'}

Edges-gen2/complex.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeVehicle'), (0, 6, 'RentalOfficeRentalAgreementOrigin'), (0, 6, 'RentalOfficeRentalAgreementDrop'), (6, 1, 'RentalAgreementVehicle'), (6, 4, 'RentalAgreementCustomer'), (0, 7, 'RentalOfficeRentalAgreementOrigin'), (0, 7, 'RentalOfficeRentalAgreementDrop'), (7, 2, 'RentalAgreementVehicle'), (7, 5, 'RentalAgreementCustomer'), (0, 8, 'RentalOfficeRentalAgreementOrigin'), (0, 8, 'RentalOfficeRentalAgreementDrop'), (8, 3, 'RentalAgreementVehicle'), (8, 4, 'RentalAgreementCustomer')]

Adj-gen2/edge.soil: [[0, 1, 1, 2, 2, 0], [1, 0, 0, 0, 1, 0], [1, 0, 0, 1, 0, 0], [2, 0, 1, 0, 0, 1], [2, 1, 0, 0, 0, 1], [0, 0, 0, 1, 1, 0]]

Labels-gen2/edge.soil: {0: 'RentalOffice', 1: 'Vehicle', 2: 'Truck', 3: 'RentalAgreement', 4: 'RentalAgreement', 5: 'Company'}

Edges-gen2/edge.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeRentalAgreementOrigin'), (0, 3, 'RentalOfficeRentalAgreementDrop'), (3, 2, 'RentalAgreementVehicle'), (3, 5, 'RentalAgreementCustomer'), (0, 4, 'RentalOfficeRentalAgreementOrigin'), (0, 4, 'RentalOfficeRentalAgreementDrop'), (4, 1, 'RentalAgreementVehicle'), (4, 5, 'RentalAgreementCustomer')]

Adj-gen2/invalid.soil: [[0, 1, 1, 2, 0], [1, 0, 0, 1, 0], [1, 0, 0, 1, 0], [2, 1, 1, 0, 1], [0, 0, 0, 1, 0]]

Labels-gen2/invalid.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Vehicle', 3: 'RentalAgreement', 4: 'Company'}

Edges-gen2/invalid.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeRentalAgreementOrigin'), (0, 3, 'RentalOfficeRentalAgreementDrop'), (3, 1, 'RentalAgreementVehicle'), (3, 2, 'RentalAgreementVehicle'), (3, 4, 'RentalAgreementCustomer')]

Adj-gen3/baseline.soil: [[0, 1, 1, 0, 0, 2, 2], [1, 0, 0, 0, 0, 1, 0], [1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 1], [2, 1, 0, 1, 0, 0, 0], [2, 0, 1, 0, 1, 0, 0]]

Labels-gen3/baseline.soil: {0: 'RentalOffice', 1: 'Vehicle', 2: 'Truck', 3: 'Individual', 4: 'Company', 5: 'RentalAgreement', 6: 'RentalAgreement'}

Edges-gen3/baseline.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 5, 'RentalOfficeRentalAgreementOrigin'), (0, 5, 'RentalOfficeRentalAgreementDrop'), (5, 1, 'RentalAgreementVehicle'), (5, 3, 'RentalAgreementCustomer'), (0, 6, 'RentalOfficeRentalAgreementOrigin'), (0, 6, 'RentalOfficeRentalAgreementDrop'), (6, 2, 'RentalAgreementVehicle'), (6, 4, 'RentalAgreementCustomer')]

Adj-gen3/boundary.soil: [[0, 1, 1, 2, 0], [1, 0, 0, 1, 0], [1, 0, 0, 0, 0], [2, 1, 0, 0, 1], [0, 0, 0, 1, 0]]

Labels-gen3/boundary.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Vehicle', 3: 'RentalAgreement', 4: 'Company'}

Edges-gen3/boundary.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeRentalAgreementOrigin'), (0, 3, 'RentalOfficeRentalAgreementDrop'), (3, 1, 'RentalAgreementVehicle'), (3, 4, 'RentalAgreementCustomer')]

Adj-gen3/complex.soil: [[0, 1, 1, 1, 0, 0, 2, 2, 2], [1, 0, 0, 0, 0, 0, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1, 0], [1, 0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 1, 0, 1], [0, 0, 0, 0, 0, 0, 0, 1, 0], [2, 1, 0, 0, 1, 0, 0, 0, 0], [2, 0, 1, 0, 0, 1, 0, 0, 0], [2, 0, 0, 1, 1, 0, 0, 0, 0]]

Labels-gen3/complex.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Vehicle', 3: 'Vehicle', 4: 'Individual', 5: 'Company', 6: 'RentalAgreement', 7: 'RentalAgreement', 8: 'RentalAgreement'}

Edges-gen3/complex.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeVehicle'), (0, 6, 'RentalOfficeRentalAgreementOrigin'), (0, 6, 'RentalOfficeRentalAgreementDrop'), (6, 1, 'RentalAgreementVehicle'), (6, 4, 'RentalAgreementCustomer'), (0, 7, 'RentalOfficeRentalAgreementOrigin'), (0, 7, 'RentalOfficeRentalAgreementDrop'), (7, 2, 'RentalAgreementVehicle'), (7, 5, 'RentalAgreementCustomer'), (0, 8, 'RentalOfficeRentalAgreementOrigin'), (0, 8, 'RentalOfficeRentalAgreementDrop'), (8, 3, 'RentalAgreementVehicle'), (8, 4, 'RentalAgreementCustomer')]

Adj-gen3/edge.soil: [[0, 1, 1, 2, 0], [1, 0, 0, 1, 0], [1, 0, 0, 0, 0], [2, 1, 0, 0, 1], [0, 0, 0, 1, 0]]

Labels-gen3/edge.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Vehicle', 3: 'RentalAgreement', 4: 'Individual'}

Edges-gen3/edge.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeRentalAgreementOrigin'), (0, 3, 'RentalOfficeRentalAgreementDrop'), (3, 1, 'RentalAgreementVehicle'), (3, 4, 'RentalAgreementCustomer')]

Adj-gen3/invalid.soil: [[0, 1, 1, 2, 0, 0], [1, 0, 0, 1, 0, 0], [1, 0, 0, 0, 0, 0], [2, 1, 0, 0, 1, 1], [0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0]]

Labels-gen3/invalid.soil: {0: 'RentalOffice', 1: 'Vehicle', 2: 'Vehicle', 3: 'RentalAgreement', 4: 'Company', 5: 'Company'}

Edges-gen3/invalid.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeRentalAgreementOrigin'), (0, 3, 'RentalOfficeRentalAgreementDrop'), (3, 1, 'RentalAgreementVehicle'), (3, 4, 'RentalAgreementCustomer'), (3, 5, 'RentalAgreementCustomer')]

Adj-gen4/baseline.soil: [[0, 1, 1, 0, 0, 2, 2], [1, 0, 0, 0, 0, 1, 0], [1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 1], [2, 1, 0, 1, 0, 0, 0], [2, 0, 1, 0, 1, 0, 0]]

Labels-gen4/baseline.soil: {0: 'RentalOffice', 1: 'Vehicle', 2: 'Truck', 3: 'Individual', 4: 'Company', 5: 'RentalAgreement', 6: 'RentalAgreement'}

Edges-gen4/baseline.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 5, 'RentalOfficeRentalAgreementOrigin'), (0, 5, 'RentalOfficeRentalAgreementDrop'), (5, 1, 'RentalAgreementVehicle'), (5, 3, 'RentalAgreementCustomer'), (0, 6, 'RentalOfficeRentalAgreementOrigin'), (0, 6, 'RentalOfficeRentalAgreementDrop'), (6, 2, 'RentalAgreementVehicle'), (6, 4, 'RentalAgreementCustomer')]

Adj-gen4/boundary.soil: [[0, 1, 1, 1, 2, 2, 0, 0], [1, 0, 0, 0, 1, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0], [2, 1, 0, 0, 0, 0, 1, 0], [2, 0, 1, 0, 0, 0, 0, 1], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0]]

Labels-gen4/boundary.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Vehicle', 3: 'Truck', 4: 'RentalAgreement', 5: 'RentalAgreement', 6: 'Individual', 7: 'Company'}

Edges-gen4/boundary.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeVehicle'), (0, 4, 'RentalOfficeRentalAgreementOrigin'), (0, 4, 'RentalOfficeRentalAgreementDrop'), (4, 1, 'RentalAgreementVehicle'), (4, 6, 'RentalAgreementCustomer'), (0, 5, 'RentalOfficeRentalAgreementOrigin'), (0, 5, 'RentalOfficeRentalAgreementDrop'), (5, 2, 'RentalAgreementVehicle'), (5, 7, 'RentalAgreementCustomer')]

Adj-gen4/complex.soil: [[0, 1, 1, 1, 0, 0, 2, 2, 2], [1, 0, 0, 0, 0, 0, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1, 0], [1, 0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 1, 1, 0], [2, 1, 0, 0, 0, 1, 0, 0, 0], [2, 0, 1, 0, 0, 1, 0, 0, 0], [2, 0, 0, 1, 1, 0, 0, 0, 0]]

Labels-gen4/complex.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Vehicle', 3: 'Vehicle', 4: 'Individual', 5: 'Company', 6: 'RentalAgreement', 7: 'RentalAgreement', 8: 'RentalAgreement'}

Edges-gen4/complex.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeVehicle'), (0, 6, 'RentalOfficeRentalAgreementOrigin'), (0, 6, 'RentalOfficeRentalAgreementDrop'), (6, 1, 'RentalAgreementVehicle'), (6, 5, 'RentalAgreementCustomer'), (0, 7, 'RentalOfficeRentalAgreementOrigin'), (0, 7, 'RentalOfficeRentalAgreementDrop'), (7, 2, 'RentalAgreementVehicle'), (7, 5, 'RentalAgreementCustomer'), (0, 8, 'RentalOfficeRentalAgreementOrigin'), (0, 8, 'RentalOfficeRentalAgreementDrop'), (8, 3, 'RentalAgreementVehicle'), (8, 4, 'RentalAgreementCustomer')]

Adj-gen4/edge.soil: [[0, 1, 2, 0], [1, 0, 1, 0], [2, 1, 0, 1], [0, 0, 1, 0]]

Labels-gen4/edge.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'RentalAgreement', 3: 'Company'}

Edges-gen4/edge.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeRentalAgreementOrigin'), (0, 2, 'RentalOfficeRentalAgreementDrop'), (2, 1, 'RentalAgreementVehicle'), (2, 3, 'RentalAgreementCustomer')]

Adj-gen4/invalid.soil: [[0, 1, 2, 2, 0, 0], [1, 0, 1, 1, 0, 0], [2, 1, 0, 0, 1, 0], [2, 1, 0, 0, 0, 1], [0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0]]

Labels-gen4/invalid.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'RentalAgreement', 3: 'RentalAgreement', 4: 'Individual', 5: 'Company'}

Edges-gen4/invalid.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeRentalAgreementOrigin'), (0, 2, 'RentalOfficeRentalAgreementDrop'), (2, 1, 'RentalAgreementVehicle'), (2, 4, 'RentalAgreementCustomer'), (0, 3, 'RentalOfficeRentalAgreementOrigin'), (0, 3, 'RentalOfficeRentalAgreementDrop'), (3, 1, 'RentalAgreementVehicle'), (3, 5, 'RentalAgreementCustomer')]

Adj-gen5/baseline.soil: [[0, 1, 1, 0, 0, 2, 2], [1, 0, 0, 0, 0, 1, 0], [1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 1], [2, 1, 0, 1, 0, 0, 0], [2, 0, 1, 0, 1, 0, 0]]

Labels-gen5/baseline.soil: {0: 'RentalOffice', 1: 'Vehicle', 2: 'Truck', 3: 'Individual', 4: 'Company', 5: 'RentalAgreement', 6: 'RentalAgreement'}

Edges-gen5/baseline.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 5, 'RentalOfficeRentalAgreementOrigin'), (0, 5, 'RentalOfficeRentalAgreementDrop'), (5, 1, 'RentalAgreementVehicle'), (5, 3, 'RentalAgreementCustomer'), (0, 6, 'RentalOfficeRentalAgreementOrigin'), (0, 6, 'RentalOfficeRentalAgreementDrop'), (6, 2, 'RentalAgreementVehicle'), (6, 4, 'RentalAgreementCustomer')]

Adj-gen5/boundary.soil: [[0, 1, 1, 1, 2, 2, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 0, 0, 0], [2, 0, 0, 1, 0, 0, 0, 1], [2, 1, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0]]

Labels-gen5/boundary.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Vehicle', 3: 'Truck', 4: 'RentalAgreement', 5: 'RentalAgreement', 6: 'Individual', 7: 'Company'}

Edges-gen5/boundary.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeVehicle'), (0, 4, 'RentalOfficeRentalAgreementOrigin'), (0, 4, 'RentalOfficeRentalAgreementDrop'), (4, 3, 'RentalAgreementVehicle'), (4, 7, 'RentalAgreementCustomer'), (0, 5, 'RentalOfficeRentalAgreementOrigin'), (0, 5, 'RentalOfficeRentalAgreementDrop'), (5, 1, 'RentalAgreementVehicle'), (5, 6, 'RentalAgreementCustomer')]

Adj-gen5/complex.soil: [[0, 1, 1, 1, 0, 0, 2, 2, 2], [1, 0, 0, 0, 0, 0, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1, 0], [1, 0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 1, 0, 1], [2, 1, 0, 0, 0, 1, 0, 0, 0], [2, 0, 1, 0, 1, 0, 0, 0, 0], [2, 0, 0, 1, 0, 1, 0, 0, 0]]

Labels-gen5/complex.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Vehicle', 3: 'Vehicle', 4: 'Individual', 5: 'Company', 6: 'RentalAgreement', 7: 'RentalAgreement', 8: 'RentalAgreement'}

Edges-gen5/complex.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeVehicle'), (0, 6, 'RentalOfficeRentalAgreementOrigin'), (0, 6, 'RentalOfficeRentalAgreementDrop'), (6, 1, 'RentalAgreementVehicle'), (6, 5, 'RentalAgreementCustomer'), (0, 7, 'RentalOfficeRentalAgreementOrigin'), (0, 7, 'RentalOfficeRentalAgreementDrop'), (7, 2, 'RentalAgreementVehicle'), (7, 4, 'RentalAgreementCustomer'), (0, 8, 'RentalOfficeRentalAgreementOrigin'), (0, 8, 'RentalOfficeRentalAgreementDrop'), (8, 3, 'RentalAgreementVehicle'), (8, 5, 'RentalAgreementCustomer')]

Adj-gen5/edge.soil: [[0, 1, 1, 2, 2, 0], [1, 0, 0, 1, 0, 0], [1, 0, 0, 0, 1, 0], [2, 1, 0, 0, 0, 1], [2, 0, 1, 0, 0, 1], [0, 0, 0, 1, 1, 0]]

Labels-gen5/edge.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Vehicle', 3: 'RentalAgreement', 4: 'RentalAgreement', 5: 'Individual'}

Edges-gen5/edge.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeRentalAgreementOrigin'), (0, 3, 'RentalOfficeRentalAgreementDrop'), (3, 1, 'RentalAgreementVehicle'), (3, 5, 'RentalAgreementCustomer'), (0, 4, 'RentalOfficeRentalAgreementOrigin'), (0, 4, 'RentalOfficeRentalAgreementDrop'), (4, 2, 'RentalAgreementVehicle'), (4, 5, 'RentalAgreementCustomer')]

Adj-gen5/invalid.soil: [[0, 1, 1, 2, 2, 0, 0], [1, 0, 0, 1, 0, 0, 0], [1, 0, 0, 0, 1, 0, 0], [2, 1, 0, 0, 0, 1, 0], [2, 0, 1, 0, 0, 0, 1], [0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0]]

Labels-gen5/invalid.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Vehicle', 3: 'RentalAgreement', 4: 'RentalAgreement', 5: 'Individual', 6: 'Company'}

Edges-gen5/invalid.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeRentalAgreementOrigin'), (0, 3, 'RentalOfficeRentalAgreementDrop'), (3, 1, 'RentalAgreementVehicle'), (3, 5, 'RentalAgreementCustomer'), (0, 4, 'RentalOfficeRentalAgreementOrigin'), (0, 4, 'RentalOfficeRentalAgreementDrop'), (4, 2, 'RentalAgreementVehicle'), (4, 6, 'RentalAgreementCustomer')]

Adj-gen6/baseline.soil: [[0, 1, 1, 0, 0, 2, 2], [1, 0, 0, 0, 0, 1, 0], [1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 1], [2, 1, 0, 1, 0, 0, 0], [2, 0, 1, 0, 1, 0, 0]]

Labels-gen6/baseline.soil: {0: 'RentalOffice', 1: 'Vehicle', 2: 'Truck', 3: 'Individual', 4: 'Company', 5: 'RentalAgreement', 6: 'RentalAgreement'}

Edges-gen6/baseline.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 5, 'RentalOfficeRentalAgreementOrigin'), (0, 5, 'RentalOfficeRentalAgreementDrop'), (5, 1, 'RentalAgreementVehicle'), (5, 3, 'RentalAgreementCustomer'), (0, 6, 'RentalOfficeRentalAgreementOrigin'), (0, 6, 'RentalOfficeRentalAgreementDrop'), (6, 2, 'RentalAgreementVehicle'), (6, 4, 'RentalAgreementCustomer')]

Adj-gen6/boundary.soil: [[0, 1, 1, 1, 2, 2, 0, 0], [1, 0, 0, 0, 1, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0], [2, 1, 0, 0, 0, 0, 1, 0], [2, 0, 0, 1, 0, 0, 0, 1], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0]]

Labels-gen6/boundary.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Vehicle', 3: 'Truck', 4: 'RentalAgreement', 5: 'RentalAgreement', 6: 'Individual', 7: 'Company'}

Edges-gen6/boundary.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeVehicle'), (0, 4, 'RentalOfficeRentalAgreementOrigin'), (0, 4, 'RentalOfficeRentalAgreementDrop'), (4, 1, 'RentalAgreementVehicle'), (4, 6, 'RentalAgreementCustomer'), (0, 5, 'RentalOfficeRentalAgreementOrigin'), (0, 5, 'RentalOfficeRentalAgreementDrop'), (5, 3, 'RentalAgreementVehicle'), (5, 7, 'RentalAgreementCustomer')]

Adj-gen6/complex.soil: [[0, 1, 1, 1, 0, 0, 2, 2, 2], [1, 0, 0, 0, 0, 0, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1, 0], [1, 0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 1, 0, 1], [0, 0, 0, 0, 0, 0, 0, 1, 0], [2, 1, 0, 0, 1, 0, 0, 0, 0], [2, 0, 1, 0, 0, 1, 0, 0, 0], [2, 0, 0, 1, 1, 0, 0, 0, 0]]

Labels-gen6/complex.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Vehicle', 3: 'Vehicle', 4: 'Individual', 5: 'Company', 6: 'RentalAgreement', 7: 'RentalAgreement', 8: 'RentalAgreement'}

Edges-gen6/complex.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeVehicle'), (0, 6, 'RentalOfficeRentalAgreementOrigin'), (0, 6, 'RentalOfficeRentalAgreementDrop'), (6, 1, 'RentalAgreementVehicle'), (6, 4, 'RentalAgreementCustomer'), (0, 7, 'RentalOfficeRentalAgreementOrigin'), (0, 7, 'RentalOfficeRentalAgreementDrop'), (7, 2, 'RentalAgreementVehicle'), (7, 5, 'RentalAgreementCustomer'), (0, 8, 'RentalOfficeRentalAgreementOrigin'), (0, 8, 'RentalOfficeRentalAgreementDrop'), (8, 3, 'RentalAgreementVehicle'), (8, 4, 'RentalAgreementCustomer')]

Adj-gen6/edge.soil: [[0, 1, 1, 2, 2, 0], [1, 0, 0, 1, 0, 0], [1, 0, 0, 0, 1, 0], [2, 1, 0, 0, 0, 1], [2, 0, 1, 0, 0, 1], [0, 0, 0, 1, 1, 0]]

Labels-gen6/edge.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Vehicle', 3: 'RentalAgreement', 4: 'RentalAgreement', 5: 'Company'}

Edges-gen6/edge.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeRentalAgreementOrigin'), (0, 3, 'RentalOfficeRentalAgreementDrop'), (3, 1, 'RentalAgreementVehicle'), (3, 5, 'RentalAgreementCustomer'), (0, 4, 'RentalOfficeRentalAgreementOrigin'), (0, 4, 'RentalOfficeRentalAgreementDrop'), (4, 2, 'RentalAgreementVehicle'), (4, 5, 'RentalAgreementCustomer')]

Adj-gen6/invalid.soil: [[0, 1, 2, 0, 0], [1, 0, 1, 0, 0], [2, 1, 0, 1, 1], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0]]

Labels-gen6/invalid.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'RentalAgreement', 3: 'Individual', 4: 'Company'}

Edges-gen6/invalid.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeRentalAgreementOrigin'), (0, 2, 'RentalOfficeRentalAgreementDrop'), (2, 1, 'RentalAgreementVehicle'), (2, 3, 'RentalAgreementCustomer'), (2, 4, 'RentalAgreementCustomer')]

```

# GED Matrix

```json
[[0.0, 6.0, 7.0, 7.0, 12.0, 0.0, 4.0, 8.0, 3.0, 7.0, 0.0, 6.0, 8.0, 7.0, 8.0, 0.0, 4.0, 7.0, 8.0, 4.0, 0.0, 3.0, 7.0, 3.0, 2.0, 0.0, 3.0, 8.0, 3.0, 8.0], [6.0, 0.0, 11.0, 1.0, 7.0, 6.0, 8.0, 14.0, 5.0, 1.0, 6.0, 0.0, 14.0, 1.0, 3.0, 6.0, 9.0, 13.0, 2.0, 6.0, 6.0, 8.0, 13.0, 6.0, 7.0, 6.0, 8.0, 14.0, 5.0, 3.0], [7.0, 11.0, 0.0, 11.0, 17.0, 7.0, 7.0, 6.0, 6.0, 12.0, 7.0, 11.0, 6.0, 11.0, 13.0, 7.0, 5.0, 4.0, 13.0, 7.0, 7.0, 7.0, 4.0, 7.0, 5.0, 7.0, 6.0, 6.0, 6.0, 13.0], [7.0, 1.0, 11.0, 0.0, 6.0, 7.0, 7.0, 13.0, 6.0, 2.0, 7.0, 1.0, 13.0, 0.0, 4.0, 7.0, 8.0, 14.0, 3.0, 6.0, 7.0, 8.0, 14.0, 5.0, 6.0, 7.0, 8.0, 13.0, 6.0, 3.0], [12.0, 7.0, 17.0, 6.0, 0.0, 12.0, 13.0, 19.0, 12.0, 8.0, 12.0, 7.0, 19.0, 6.0, 9.0, 12.0, 14.0, 19.0, 5.0, 10.0, 12.0, 14.0, 19.0, 11.0, 12.0, 12.0, 14.0, 19.0, 12.0, 6.0], [0.0, 6.0, 7.0, 7.0, 12.0, 0.0, 4.0, 8.0, 3.0, 7.0, 0.0, 6.0, 8.0, 7.0, 8.0, 0.0, 4.0, 7.0, 8.0, 4.0, 0.0, 3.0, 7.0, 3.0, 2.0, 0.0, 3.0, 8.0, 3.0, 8.0], [4.0, 8.0, 7.0, 7.0, 13.0, 4.0, 0.0, 6.0, 3.0, 9.0, 4.0, 8.0, 6.0, 7.0, 9.0, 4.0, 4.0, 7.0, 10.0, 7.0, 4.0, 4.0, 7.0, 2.0, 4.0, 4.0, 4.0, 6.0, 3.0, 10.0], [8.0, 14.0, 6.0, 13.0, 19.0, 8.0, 6.0, 0.0, 10.0, 14.0, 8.0, 14.0, 0.0, 13.0, 14.0, 8.0, 6.0, 2.0, 16.0, 11.0, 8.0, 6.0, 2.0, 8.0, 7.0, 8.0, 6.0, 0.0, 10.0, 15.0], [3.0, 5.0, 6.0, 6.0, 12.0, 3.0, 3.0, 10.0, 0.0, 6.0, 3.0, 5.0, 10.0, 6.0, 7.0, 3.0, 5.0, 8.0, 7.0, 5.0, 3.0, 6.0, 8.0, 1.0, 3.0, 3.0, 6.0, 10.0, 0.0, 8.0], [7.0, 1.0, 12.0, 2.0, 8.0, 7.0, 9.0, 14.0, 6.0, 0.0, 7.0, 1.0, 14.0, 2.0, 4.0, 7.0, 9.0, 14.0, 3.0, 7.0, 7.0, 9.0, 14.0, 7.0, 7.0, 7.0, 9.0, 14.0, 6.0, 3.0], [0.0, 6.0, 7.0, 7.0, 12.0, 0.0, 4.0, 8.0, 3.0, 7.0, 0.0, 6.0, 8.0, 7.0, 8.0, 0.0, 4.0, 7.0, 8.0, 4.0, 0.0, 3.0, 7.0, 3.0, 2.0, 0.0, 3.0, 8.0, 3.0, 8.0], [6.0, 0.0, 11.0, 1.0, 7.0, 6.0, 8.0, 14.0, 5.0, 1.0, 6.0, 0.0, 14.0, 1.0, 3.0, 6.0, 9.0, 13.0, 2.0, 6.0, 6.0, 8.0, 13.0, 6.0, 7.0, 6.0, 8.0, 14.0, 5.0, 3.0], [8.0, 14.0, 6.0, 13.0, 19.0, 8.0, 6.0, 0.0, 10.0, 14.0, 8.0, 14.0, 0.0, 13.0, 14.0, 8.0, 6.0, 2.0, 16.0, 11.0, 8.0, 6.0, 2.0, 8.0, 7.0, 8.0, 6.0, 0.0, 10.0, 15.0], [7.0, 1.0, 11.0, 0.0, 6.0, 7.0, 7.0, 13.0, 6.0, 2.0, 7.0, 1.0, 13.0, 0.0, 4.0, 7.0, 8.0, 14.0, 3.0, 6.0, 7.0, 8.0, 14.0, 5.0, 6.0, 7.0, 8.0, 13.0, 6.0, 3.0], [8.0, 3.0, 13.0, 4.0, 9.0, 8.0, 9.0, 14.0, 7.0, 4.0, 8.0, 3.0, 14.0, 4.0, 0.0, 8.0, 10.0, 14.0, 5.0, 8.0, 8.0, 10.0, 14.0, 8.0, 8.0, 8.0, 10.0, 14.0, 7.0, 4.0], [0.0, 6.0, 7.0, 7.0, 12.0, 0.0, 4.0, 8.0, 3.0, 7.0, 0.0, 6.0, 8.0, 7.0, 8.0, 0.0, 4.0, 7.0, 8.0, 4.0, 0.0, 3.0, 7.0, 3.0, 2.0, 0.0, 3.0, 8.0, 3.0, 8.0], [4.0, 9.0, 5.0, 8.0, 14.0, 4.0, 4.0, 6.0, 5.0, 9.0, 4.0, 9.0, 6.0, 8.0, 10.0, 4.0, 0.0, 6.0, 11.0, 6.0, 4.0, 2.0, 8.0, 5.0, 2.0, 4.0, 2.0, 6.0, 5.0, 10.0], [7.0, 13.0, 4.0, 14.0, 19.0, 7.0, 7.0, 2.0, 8.0, 14.0, 7.0, 13.0, 2.0, 14.0, 14.0, 7.0, 6.0, 0.0, 15.0, 11.0, 7.0, 6.0, 0.0, 9.0, 8.0, 7.0, 6.0, 2.0, 8.0, 15.0], [8.0, 2.0, 13.0, 3.0, 5.0, 8.0, 10.0, 16.0, 7.0, 3.0, 8.0, 2.0, 16.0, 3.0, 5.0, 8.0, 11.0, 15.0, 0.0, 6.0, 8.0, 10.0, 15.0, 8.0, 9.0, 8.0, 10.0, 16.0, 7.0, 2.0], [4.0, 6.0, 7.0, 6.0, 10.0, 4.0, 7.0, 11.0, 5.0, 7.0, 4.0, 6.0, 11.0, 6.0, 8.0, 4.0, 6.0, 11.0, 6.0, 0.0, 4.0, 6.0, 11.0, 5.0, 4.0, 4.0, 6.0, 11.0, 5.0, 6.0], [0.0, 6.0, 7.0, 7.0, 12.0, 0.0, 4.0, 8.0, 3.0, 7.0, 0.0, 6.0, 8.0, 7.0, 8.0, 0.0, 4.0, 7.0, 8.0, 4.0, 0.0, 3.0, 7.0, 3.0, 2.0, 0.0, 3.0, 8.0, 3.0, 8.0], [3.0, 8.0, 7.0, 8.0, 14.0, 3.0, 4.0, 6.0, 6.0, 9.0, 3.0, 8.0, 6.0, 8.0, 10.0, 3.0, 2.0, 6.0, 10.0, 6.0, 3.0, 0.0, 6.0, 6.0, 3.0, 3.0, 0.0, 6.0, 6.0, 10.0], [7.0, 13.0, 4.0, 14.0, 19.0, 7.0, 7.0, 2.0, 8.0, 14.0, 7.0, 13.0, 2.0, 14.0, 14.0, 7.0, 8.0, 0.0, 15.0, 11.0, 7.0, 6.0, 0.0, 10.0, 9.0, 7.0, 8.0, 2.0, 8.0, 15.0], [3.0, 6.0, 7.0, 5.0, 11.0, 3.0, 2.0, 8.0, 1.0, 7.0, 3.0, 6.0, 8.0, 5.0, 8.0, 3.0, 5.0, 9.0, 8.0, 5.0, 3.0, 6.0, 10.0, 0.0, 3.0, 3.0, 6.0, 8.0, 1.0, 8.0], [2.0, 7.0, 5.0, 6.0, 12.0, 2.0, 4.0, 7.0, 3.0, 7.0, 2.0, 7.0, 7.0, 6.0, 8.0, 2.0, 2.0, 8.0, 9.0, 4.0, 2.0, 3.0, 9.0, 3.0, 0.0, 2.0, 3.0, 7.0, 3.0, 8.0], [0.0, 6.0, 7.0, 7.0, 12.0, 0.0, 4.0, 8.0, 3.0, 7.0, 0.0, 6.0, 8.0, 7.0, 8.0, 0.0, 4.0, 7.0, 8.0, 4.0, 0.0, 3.0, 7.0, 3.0, 2.0, 0.0, 3.0, 8.0, 3.0, 8.0], [3.0, 8.0, 6.0, 8.0, 14.0, 3.0, 4.0, 6.0, 6.0, 9.0, 3.0, 8.0, 6.0, 8.0, 10.0, 3.0, 2.0, 6.0, 10.0, 6.0, 3.0, 0.0, 8.0, 6.0, 3.0, 3.0, 0.0, 6.0, 6.0, 10.0], [8.0, 14.0, 6.0, 13.0, 19.0, 8.0, 6.0, 0.0, 10.0, 14.0, 8.0, 14.0, 0.0, 13.0, 14.0, 8.0, 6.0, 2.0, 16.0, 11.0, 8.0, 6.0, 2.0, 8.0, 7.0, 8.0, 6.0, 0.0, 10.0, 15.0], [3.0, 5.0, 6.0, 6.0, 12.0, 3.0, 3.0, 10.0, 0.0, 6.0, 3.0, 5.0, 10.0, 6.0, 7.0, 3.0, 5.0, 8.0, 7.0, 5.0, 3.0, 6.0, 8.0, 1.0, 3.0, 3.0, 6.0, 10.0, 0.0, 8.0], [8.0, 3.0, 13.0, 3.0, 6.0, 8.0, 10.0, 15.0, 8.0, 3.0, 8.0, 3.0, 15.0, 3.0, 4.0, 8.0, 10.0, 15.0, 2.0, 6.0, 8.0, 10.0, 15.0, 8.0, 8.0, 8.0, 10.0, 15.0, 8.0, 0.0]]
```

Each cell is the cost of a concrete edit path found by the bipartite assignment (BP), IPFP, and REFINE local search, so it is an upper bound on the exact GED. The interval table pairs it with the BRANCH lower bound. A cell is `exact` when both bounds coincide.

# GED value table (upper bound)

|       | gen1/baseline | gen1/boundary | gen1/complex | gen1/edge | gen1/invalid | gen2/baseline | gen2/boundary | gen2/complex | gen2/edge | gen2/invalid | gen3/baseline | gen3/boundary | gen3/complex | gen3/edge | gen3/invalid | gen4/baseline | gen4/boundary | gen4/complex | gen4/edge | gen4/invalid | gen5/baseline | gen5/boundary | gen5/complex | gen5/edge | gen5/invalid | gen6/baseline | gen6/boundary | gen6/complex | gen6/edge | gen6/invalid |
|-------|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **gen1/baseline** | 0.000000 | 6.000000 | 7.000000 | 7.000000 | 12.000000 | 0.000000 | 4.000000 | 8.000000 | 3.000000 | 7.000000 | 0.000000 | 6.000000 | 8.000000 | 7.000000 | 8.000000 | 0.000000 | 4.000000 | 7.000000 | 8.000000 | 4.000000 | 0.000000 | 3.000000 | 7.000000 | 3.000000 | 2.000000 | 0.000000 | 3.000000 | 8.000000 | 3.000000 | 8.000000 |
| **gen1/boundary** |  | 0.000000 | 11.000000 | 1.000000 | 7.000000 | 6.000000 | 8.000000 | 14.000000 | 5.000000 | 1.000000 | 6.000000 | 0.000000 | 14.000000 | 1.000000 | 3.000000 | 6.000000 | 9.000000 | 13.000000 | 2.000000 | 6.000000 | 6.000000 | 8.000000 | 13.000000 | 6.000000 | 7.000000 | 6.000000 | 8.000000 | 14.000000 | 5.000000 | 3.000000 |
| **gen1/complex** |  |  | 0.000000 | 11.000000 | 17.000000 | 7.000000 | 7.000000 | 6.000000 | 6.000000 | 12.000000 | 7.000000 | 11.000000 | 6.000000 | 11.000000 | 13.000000 | 7.000000 | 5.000000 | 4.000000 | 13.000000 | 7.000000 | 7.000000 | 7.000000 | 4.000000 | 7.000000 | 5.000000 | 7.000000 | 6.000000 | 6.000000 | 6.000000 | 13.000000 |
| **gen1/edge** |  |  |  | 0.000000 | 6.000000 | 7.000000 | 7.000000 | 13.000000 | 6.000000 | 2.000000 | 7.000000 | 1.000000 | 13.000000 | 0.000000 | 4.000000 | 7.000000 | 8.000000 | 14.000000 | 3.000000 | 6.000000 | 7.000000 | 8.000000 | 14.000000 | 5.000000 | 6.000000 | 7.000000 | 8.000000 | 13.000000 | 6.000000 | 3.000000 |
| **gen1/invalid** |  |  |  |  | 0.000000 | 12.000000 | 13.000000 | 19.000000 | 12.000000 | 8.000000 | 12.000000 | 7.000000 | 19.000000 | 6.000000 | 9.000000 | 12.000000 | 14.000000 | 19.000000 | 5.000000 | 10.000000 | 12.000000 | 14.000000 | 19.000000 | 11.000000 | 12.000000 | 12.000000 | 14.000000 | 19.000000 | 12.000000 | 6.000000 |
| **gen2/baseline** |  |  |  |  |  | 0.000000 | 4.000000 | 8.000000 | 3.000000 | 7.000000 | 0.000000 | 6.000000 | 8.000000 | 7.000000 | 8.000000 | 0.000000 | 4.000000 | 7.000000 | 8.000000 | 4.000000 | 0.000000 | 3.000000 | 7.000000 | 3.000000 | 2.000000 | 0.000000 | 3.000000 | 8.000000 | 3.000000 | 8.000000 |
| **gen2/boundary** |  |  |  |  |  |  | 0.000000 | 6.000000 | 3.000000 | 9.000000 | 4.000000 | 8.000000 | 6.000000 | 7.000000 | 9.000000 | 4.000000 | 4.000000 | 7.000000 | 10.000000 | 7.000000 | 4.000000 | 4.000000 | 7.000000 | 2.000000 | 4.000000 | 4.000000 | 4.000000 | 6.000000 | 3.000000 | 10.000000 |
| **gen2/complex** |  |  |  |  |  |  |  | 0.000000 | 10.000000 | 14.000000 | 8.000000 | 14.000000 | 0.000000 | 13.000000 | 14.000000 | 8.000000 | 6.000000 | 2.000000 | 16.000000 | 11.000000 | 8.000000 | 6.000000 | 2.000000 | 8.000000 | 7.000000 | 8.000000 | 6.000000 | 0.000000 | 10.000000 | 15.000000 |
| **gen2/edge** |  |  |  |  |  |  |  |  | 0.000000 | 6.000000 | 3.000000 | 5.000000 | 10.000000 | 6.000000 | 7.000000 | 3.000000 | 5.000000 | 8.000000 | 7.000000 | 5.000000 | 3.000000 | 6.000000 | 8.000000 | 1.000000 | 3.000000 | 3.000000 | 6.000000 | 10.000000 | 0.000000 | 8.000000 |
| **gen2/invalid** |  |  |  |  |  |  |  |  |  | 0.000000 | 7.000000 | 1.000000 | 14.000000 | 2.000000 | 4.000000 | 7.000000 | 9.000000 | 14.000000 | 3.000000 | 7.000000 | 7.000000 | 9.000000 | 14.000000 | 7.000000 | 7.000000 | 7.000000 | 9.000000 | 14.000000 | 6.000000 | 3.000000 |
| **gen3/baseline** |  |  |  |  |  |  |  |  |  |  | 0.000000 | 6.000000 | 8.000000 | 7.000000 | 8.000000 | 0.000000 | 4.000000 | 7.000000 | 8.000000 | 4.000000 | 0.000000 | 3.000000 | 7.000000 | 3.000000 | 2.000000 | 0.000000 | 3.000000 | 8.000000 | 3.000000 | 8.000000 |
| **gen3/boundary** |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 14.000000 | 1.000000 | 3.000000 | 6.000000 | 9.000000 | 13.000000 | 2.000000 | 6.000000 | 6.000000 | 8.000000 | 13.000000 | 6.000000 | 7.000000 | 6.000000 | 8.000000 | 14.000000 | 5.000000 | 3.000000 |
| **gen3/complex** |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 13.000000 | 14.000000 | 8.000000 | 6.000000 | 2.000000 | 16.000000 | 11.000000 | 8.000000 | 6.000000 | 2.000000 | 8.000000 | 7.000000 | 8.000000 | 6.000000 | 0.000000 | 10.000000 | 15.000000 |
| **gen3/edge** |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 4.000000 | 7.000000 | 8.000000 | 14.000000 | 3.000000 | 6.000000 | 7.000000 | 8.000000 | 14.000000 | 5.000000 | 6.000000 | 7.000000 | 8.000000 | 13.000000 | 6.000000 | 3.000000 |
| **gen3/invalid** |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 8.000000 | 10.000000 | 14.000000 | 5.000000 | 8.000000 | 8.000000 | 10.000000 | 14.000000 | 8.000000 | 8.000000 | 8.000000 | 10.000000 | 14.000000 | 7.000000 | 4.000000 |
| **gen4/baseline** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 4.000000 | 7.000000 | 8.000000 | 4.000000 | 0.000000 | 3.000000 | 7.000000 | 3.000000 | 2.000000 | 0.000000 | 3.000000 | 8.000000 | 3.000000 | 8.000000 |
| **gen4/boundary** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 6.000000 | 11.000000 | 6.000000 | 4.000000 | 2.000000 | 8.000000 | 5.000000 | 2.000000 | 4.000000 | 2.000000 | 6.000000 | 5.000000 | 10.000000 |
| **gen4/complex** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 15.000000 | 11.000000 | 7.000000 | 6.000000 | 0.000000 | 9.000000 | 8.000000 | 7.000000 | 6.000000 | 2.000000 | 8.000000 | 15.000000 |
| **gen4/edge** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 6.000000 | 8.000000 | 10.000000 | 15.000000 | 8.000000 | 9.000000 | 8.000000 | 10.000000 | 16.000000 | 7.000000 | 2.000000 |
| **gen4/invalid** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 4.000000 | 6.000000 | 11.000000 | 5.000000 | 4.000000 | 4.000000 | 6.000000 | 11.000000 | 5.000000 | 6.000000 |
| **gen5/baseline** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 3.000000 | 7.000000 | 3.000000 | 2.000000 | 0.000000 | 3.000000 | 8.000000 | 3.000000 | 8.000000 |
| **gen5/boundary** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 6.000000 | 6.000000 | 3.000000 | 3.000000 | 0.000000 | 6.000000 | 6.000000 | 10.000000 |
| **gen5/complex** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 10.000000 | 9.000000 | 7.000000 | 8.000000 | 2.000000 | 8.000000 | 15.000000 |
| **gen5/edge** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 3.000000 | 3.000000 | 6.000000 | 8.000000 | 1.000000 | 8.000000 |
| **gen5/invalid** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 2.000000 | 3.000000 | 7.000000 | 3.000000 | 8.000000 |
| **gen6/baseline** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 3.000000 | 8.000000 | 3.000000 | 8.000000 |
| **gen6/boundary** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 6.000000 | 6.000000 | 10.000000 |
| **gen6/complex** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 10.000000 | 15.000000 |
| **gen6/edge** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 8.000000 |
| **gen6/invalid** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 |

# GED bound interval table

A single value is exact; `[lower, upper]` is the certified interval.

|       | gen1/baseline | gen1/boundary | gen1/complex | gen1/edge | gen1/invalid | gen2/baseline | gen2/boundary | gen2/complex | gen2/edge | gen2/invalid | gen3/baseline | gen3/boundary | gen3/complex | gen3/edge | gen3/invalid | gen4/baseline | gen4/boundary | gen4/complex | gen4/edge | gen4/invalid | gen5/baseline | gen5/boundary | gen5/complex | gen5/edge | gen5/invalid | gen6/baseline | gen6/boundary | gen6/complex | gen6/edge | gen6/invalid |
|-------|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **gen1/baseline** | 0.000000 | 6.000000 | [5.000000, 7.000000] | [6.000000, 7.000000] | 12.000000 | 0.000000 | [2.500000, 4.000000] | [7.000000, 8.000000] | [2.000000, 3.000000] | [6.000000, 7.000000] | 0.000000 | 6.000000 | [7.000000, 8.000000] | [6.000000, 7.000000] | [7.000000, 8.000000] | 0.000000 | [2.000000, 4.000000] | 7.000000 | 8.000000 | [3.000000, 4.000000] | 0.000000 | 3.000000 | 7.000000 | [2.000000, 3.000000] | [0.000000, 2.000000] | 0.000000 | 3.000000 | [7.000000, 8.000000] | [2.000000, 3.000000] | [7.000000, 8.000000] |
| **gen1/boundary** |  | 0.000000 | 11.000000 | 1.000000 | 7.000000 | 6.000000 | 8.000000 | [13.000000, 14.000000] | 5.000000 | 1.000000 | 6.000000 | 0.000000 | [13.000000, 14.000000] | 1.000000 | 3.000000 | 6.000000 | [8.000000, 9.000000] | 13.000000 | 2.000000 | 6.000000 | 6.000000 | 8.000000 | 13.000000 | 6.000000 | [6.000000, 7.000000] | 6.000000 | 8.000000 | [13.000000, 14.000000] | 5.000000 | [2.500000, 3.000000] |
| **gen1/complex** |  |  | 0.000000 | 11.000000 | 17.000000 | [5.000000, 7.000000] | 7.000000 | [4.000000, 6.000000] | 6.000000 | [11.000000, 12.000000] | [5.000000, 7.000000] | 11.000000 | [4.000000, 6.000000] | 11.000000 | [12.000000, 13.000000] | [5.000000, 7.000000] | 5.000000 | [3.000000, 4.000000] | 13.000000 | 7.000000 | [5.000000, 7.000000] | [5.000000, 7.000000] | [3.000000, 4.000000] | 7.000000 | 5.000000 | [5.000000, 7.000000] | [5.000000, 6.000000] | [4.000000, 6.000000] | 6.000000 | [12.000000, 13.000000] |
| **gen1/edge** |  |  |  | 0.000000 | 6.000000 | [6.000000, 7.000000] | 7.000000 | 13.000000 | 6.000000 | 2.000000 | [6.000000, 7.000000] | 1.000000 | 13.000000 | 0.000000 | 4.000000 | [6.000000, 7.000000] | 8.000000 | [13.000000, 14.000000] | 3.000000 | 6.000000 | [6.000000, 7.000000] | 8.000000 | [13.000000, 14.000000] | 5.000000 | 6.000000 | [6.000000, 7.000000] | 8.000000 | 13.000000 | 6.000000 | [2.500000, 3.000000] |
| **gen1/invalid** |  |  |  |  | 0.000000 | 12.000000 | 13.000000 | 19.000000 | 12.000000 | 8.000000 | 12.000000 | 7.000000 | 19.000000 | 6.000000 | 9.000000 | 12.000000 | 14.000000 | 19.000000 | 5.000000 | 10.000000 | 12.000000 | 14.000000 | 19.000000 | 11.000000 | 12.000000 | 12.000000 | 14.000000 | 19.000000 | 12.000000 | 6.000000 |
| **gen2/baseline** |  |  |  |  |  | 0.000000 | [2.500000, 4.000000] | [7.000000, 8.000000] | [2.000000, 3.000000] | [6.000000, 7.000000] | 0.000000 | 6.000000 | [7.000000, 8.000000] | [6.000000, 7.000000] | [7.000000, 8.000000] | 0.000000 | [2.000000, 4.000000] | 7.000000 | 8.000000 | [3.000000, 4.000000] | 0.000000 | 3.000000 | 7.000000 | [2.000000, 3.000000] | [0.000000, 2.000000] | 0.000000 | 3.000000 | [7.000000, 8.000000] | [2.000000, 3.000000] | [7.000000, 8.000000] |
| **gen2/boundary** |  |  |  |  |  |  | 0.000000 | 6.000000 | 3.000000 | [8.000000, 9.000000] | [2.500000, 4.000000] | 8.000000 | 6.000000 | 7.000000 | [8.000000, 9.000000] | [2.500000, 4.000000] | [3.000000, 4.000000] | 7.000000 | 10.000000 | [5.500000, 7.000000] | [2.500000, 4.000000] | [3.000000, 4.000000] | 7.000000 | 2.000000 | [2.500000, 4.000000] | [2.500000, 4.000000] | [3.000000, 4.000000] | 6.000000 | 3.000000 | [9.000000, 10.000000] |
| **gen2/complex** |  |  |  |  |  |  |  | 0.000000 | [9.000000, 10.000000] | [13.000000, 14.000000] | [7.000000, 8.000000] | [13.000000, 14.000000] | 0.000000 | 13.000000 | [13.000000, 14.000000] | [7.000000, 8.000000] | 6.000000 | [1.000000, 2.000000] | [15.000000, 16.000000] | [10.000000, 11.000000] | [7.000000, 8.000000] | 6.000000 | [1.000000, 2.000000] | 8.000000 | 7.000000 | [7.000000, 8.000000] | 6.000000 | 0.000000 | [9.000000, 10.000000] | [14.000000, 15.000000] |
| **gen2/edge** |  |  |  |  |  |  |  |  | 0.000000 | [5.000000, 6.000000] | [2.000000, 3.000000] | 5.000000 | [9.000000, 10.000000] | 6.000000 | [6.000000, 7.000000] | [2.000000, 3.000000] | [4.000000, 5.000000] | 8.000000 | 7.000000 | [3.500000, 5.000000] | [2.000000, 3.000000] | [5.000000, 6.000000] | 8.000000 | 1.000000 | [2.000000, 3.000000] | [2.000000, 3.000000] | [5.000000, 6.000000] | [9.000000, 10.000000] | 0.000000 | [7.000000, 8.000000] |
| **gen2/invalid** |  |  |  |  |  |  |  |  |  | 0.000000 | [6.000000, 7.000000] | 1.000000 | [13.000000, 14.000000] | 2.000000 | [3.500000, 4.000000] | [6.000000, 7.000000] | [8.000000, 9.000000] | [13.000000, 14.000000] | 3.000000 | [6.000000, 7.000000] | [6.000000, 7.000000] | 9.000000 | [13.000000, 14.000000] | [6.000000, 7.000000] | [6.000000, 7.000000] | [6.000000, 7.000000] | 9.000000 | [13.000000, 14.000000] | [5.000000, 6.000000] | 3.000000 |
| **gen3/baseline** |  |  |  |  |  |  |  |  |  |  | 0.000000 | 6.000000 | [7.000000, 8.000000] | [6.000000, 7.000000] | [7.000000, 8.000000] | 0.000000 | [2.000000, 4.000000] | 7.000000 | 8.000000 | [3.000000, 4.000000] | 0.000000 | 3.000000 | 7.000000 | [2.000000, 3.000000] | [0.000000, 2.000000] | 0.000000 | 3.000000 | [7.000000, 8.000000] | [2.000000, 3.000000] | [7.000000, 8.000000] |
| **gen3/boundary** |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | [13.000000, 14.000000] | 1.000000 | 3.000000 | 6.000000 | [8.000000, 9.000000] | 13.000000 | 2.000000 | 6.000000 | 6.000000 | 8.000000 | 13.000000 | 6.000000 | [6.000000, 7.000000] | 6.000000 | 8.000000 | [13.000000, 14.000000] | 5.000000 | [2.500000, 3.000000] |
| **gen3/complex** |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 13.000000 | [13.000000, 14.000000] | [7.000000, 8.000000] | 6.000000 | [1.000000, 2.000000] | [15.000000, 16.000000] | [10.000000, 11.000000] | [7.000000, 8.000000] | 6.000000 | [1.000000, 2.000000] | 8.000000 | 7.000000 | [7.000000, 8.000000] | 6.000000 | 0.000000 | [9.000000, 10.000000] | [14.000000, 15.000000] |
| **gen3/edge** |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 4.000000 | [6.000000, 7.000000] | 8.000000 | [13.000000, 14.000000] | 3.000000 | 6.000000 | [6.000000, 7.000000] | 8.000000 | [13.000000, 14.000000] | 5.000000 | 6.000000 | [6.000000, 7.000000] | 8.000000 | 13.000000 | 6.000000 | [2.500000, 3.000000] |
| **gen3/invalid** |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | [7.000000, 8.000000] | [9.000000, 10.000000] | [13.000000, 14.000000] | 5.000000 | [7.000000, 8.000000] | [7.000000, 8.000000] | [9.000000, 10.000000] | [13.000000, 14.000000] | [7.000000, 8.000000] | [7.000000, 8.000000] | [7.000000, 8.000000] | [9.000000, 10.000000] | [13.000000, 14.000000] | [6.000000, 7.000000] | 4.000000 |
| **gen4/baseline** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | [2.000000, 4.000000] | 7.000000 | 8.000000 | [3.000000, 4.000000] | 0.000000 | 3.000000 | 7.000000 | [2.000000, 3.000000] | [0.000000, 2.000000] | 0.000000 | 3.000000 | [7.000000, 8.000000] | [2.000000, 3.000000] | [7.000000, 8.000000] |
| **gen4/boundary** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 6.000000 | [10.000000, 11.000000] | [5.000000, 6.000000] | [2.000000, 4.000000] | [1.000000, 2.000000] | [6.000000, 8.000000] | [4.000000, 5.000000] | 2.000000 | [2.000000, 4.000000] | [1.000000, 2.000000] | 6.000000 | [4.000000, 5.000000] | [9.000000, 10.000000] |
| **gen4/complex** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 15.000000 | [10.000000, 11.000000] | 7.000000 | 6.000000 | 0.000000 | 9.000000 | [7.000000, 8.000000] | 7.000000 | 6.000000 | [1.000000, 2.000000] | 8.000000 | [14.000000, 15.000000] |
| **gen4/edge** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 6.000000 | 8.000000 | 10.000000 | 15.000000 | 8.000000 | [8.000000, 9.000000] | 8.000000 | 10.000000 | [15.000000, 16.000000] | 7.000000 | 2.000000 |
| **gen4/invalid** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | [3.000000, 4.000000] | [5.000000, 6.000000] | [10.000000, 11.000000] | [3.500000, 5.000000] | [3.000000, 4.000000] | [3.000000, 4.000000] | [5.000000, 6.000000] | [10.000000, 11.000000] | [3.500000, 5.000000] | [5.000000, 6.000000] |
| **gen5/baseline** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 3.000000 | 7.000000 | [2.000000, 3.000000] | [0.000000, 2.000000] | 0.000000 | 3.000000 | [7.000000, 8.000000] | [2.000000, 3.000000] | [7.000000, 8.000000] |
| **gen5/boundary** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 6.000000 | [5.000000, 6.000000] | 3.000000 | 3.000000 | 0.000000 | 6.000000 | [5.000000, 6.000000] | [9.000000, 10.000000] |
| **gen5/complex** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | [9.000000, 10.000000] | [7.000000, 9.000000] | 7.000000 | [6.000000, 8.000000] | [1.000000, 2.000000] | 8.000000 | [14.000000, 15.000000] |
| **gen5/edge** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | [2.000000, 3.000000] | [2.000000, 3.000000] | [5.000000, 6.000000] | 8.000000 | 1.000000 | [7.000000, 8.000000] |
| **gen5/invalid** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | [0.000000, 2.000000] | 3.000000 | 7.000000 | [2.000000, 3.000000] | [7.000000, 8.000000] |
| **gen6/baseline** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 3.000000 | [7.000000, 8.000000] | [2.000000, 3.000000] | [7.000000, 8.000000] |
| **gen6/boundary** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 6.000000 | [5.000000, 6.000000] | [9.000000, 10.000000] |
| **gen6/complex** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | [9.000000, 10.000000] | [14.000000, 15.000000] |
| **gen6/edge** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | [7.000000, 8.000000] |
| **gen6/invalid** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 |

# Normalized GED diversity table

Diversity(A, B) = GED(A, B) / (GED(A, empty) + GED(B, empty)); the both-empty case is 0. Zero denotes identical labeled graphs, and higher values denote greater structural diversity.

|       | gen1/baseline | gen1/boundary | gen1/complex | gen1/edge | gen1/invalid | gen2/baseline | gen2/boundary | gen2/complex | gen2/edge | gen2/invalid | gen3/baseline | gen3/boundary | gen3/complex | gen3/edge | gen3/invalid | gen4/baseline | gen4/boundary | gen4/complex | gen4/edge | gen4/invalid | gen5/baseline | gen5/boundary | gen5/complex | gen5/edge | gen5/invalid | gen6/baseline | gen6/boundary | gen6/complex | gen6/edge | gen6/invalid |
|-------|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **gen1/baseline** | 0.000000 | 0.214286 | 0.179487 | 0.250000 | 0.545455 | 0.000000 | 0.114286 | 0.195122 | 0.090909 | 0.241379 | 0.000000 | 0.214286 | 0.195122 | 0.250000 | 0.266667 | 0.000000 | 0.111111 | 0.170732 | 0.307692 | 0.125000 | 0.000000 | 0.083333 | 0.170732 | 0.090909 | 0.058824 | 0.000000 | 0.083333 | 0.195122 | 0.090909 | 0.285714 |
| **gen1/boundary** |  | 0.000000 | 0.333333 | 0.045455 | 0.437500 | 0.214286 | 0.275862 | 0.400000 | 0.185185 | 0.043478 | 0.214286 | 0.000000 | 0.400000 | 0.045455 | 0.125000 | 0.214286 | 0.300000 | 0.371429 | 0.100000 | 0.230769 | 0.214286 | 0.266667 | 0.371429 | 0.222222 | 0.250000 | 0.214286 | 0.266667 | 0.400000 | 0.185185 | 0.136364 |
| **gen1/complex** |  |  | 0.000000 | 0.333333 | 0.629630 | 0.179487 | 0.175000 | 0.130435 | 0.157895 | 0.352941 | 0.179487 | 0.333333 | 0.130435 | 0.333333 | 0.371429 | 0.179487 | 0.121951 | 0.086957 | 0.419355 | 0.189189 | 0.179487 | 0.170732 | 0.086957 | 0.184211 | 0.128205 | 0.179487 | 0.146341 | 0.130435 | 0.157895 | 0.393939 |
| **gen1/edge** |  |  |  | 0.000000 | 0.375000 | 0.250000 | 0.241379 | 0.371429 | 0.222222 | 0.086957 | 0.250000 | 0.045455 | 0.371429 | 0.000000 | 0.166667 | 0.250000 | 0.266667 | 0.400000 | 0.150000 | 0.230769 | 0.250000 | 0.266667 | 0.400000 | 0.185185 | 0.214286 | 0.250000 | 0.266667 | 0.371429 | 0.222222 | 0.136364 |
| **gen1/invalid** |  |  |  |  | 0.000000 | 0.545455 | 0.565217 | 0.655172 | 0.571429 | 0.470588 | 0.545455 | 0.437500 | 0.655172 | 0.375000 | 0.500000 | 0.545455 | 0.583333 | 0.655172 | 0.357143 | 0.500000 | 0.545455 | 0.583333 | 0.655172 | 0.523810 | 0.545455 | 0.545455 | 0.583333 | 0.655172 | 0.571429 | 0.375000 |
| **gen2/baseline** |  |  |  |  |  | 0.000000 | 0.114286 | 0.195122 | 0.090909 | 0.241379 | 0.000000 | 0.214286 | 0.195122 | 0.250000 | 0.266667 | 0.000000 | 0.111111 | 0.170732 | 0.307692 | 0.125000 | 0.000000 | 0.083333 | 0.170732 | 0.090909 | 0.058824 | 0.000000 | 0.083333 | 0.195122 | 0.090909 | 0.285714 |
| **gen2/boundary** |  |  |  |  |  |  | 0.000000 | 0.142857 | 0.088235 | 0.300000 | 0.114286 | 0.275862 | 0.142857 | 0.241379 | 0.290323 | 0.114286 | 0.108108 | 0.166667 | 0.370370 | 0.212121 | 0.114286 | 0.108108 | 0.166667 | 0.058824 | 0.114286 | 0.114286 | 0.108108 | 0.142857 | 0.088235 | 0.344828 |
| **gen2/complex** |  |  |  |  |  |  |  | 0.000000 | 0.250000 | 0.388889 | 0.195122 | 0.400000 | 0.000000 | 0.371429 | 0.378378 | 0.195122 | 0.139535 | 0.041667 | 0.484848 | 0.282051 | 0.195122 | 0.139535 | 0.041667 | 0.200000 | 0.170732 | 0.195122 | 0.139535 | 0.000000 | 0.250000 | 0.428571 |
| **gen2/edge** |  |  |  |  |  |  |  |  | 0.000000 | 0.214286 | 0.090909 | 0.185185 | 0.250000 | 0.222222 | 0.241379 | 0.090909 | 0.142857 | 0.200000 | 0.280000 | 0.161290 | 0.090909 | 0.171429 | 0.200000 | 0.031250 | 0.090909 | 0.090909 | 0.171429 | 0.250000 | 0.000000 | 0.296296 |
| **gen2/invalid** |  |  |  |  |  |  |  |  |  | 0.000000 | 0.241379 | 0.043478 | 0.388889 | 0.086957 | 0.160000 | 0.241379 | 0.290323 | 0.388889 | 0.142857 | 0.259259 | 0.241379 | 0.290323 | 0.388889 | 0.250000 | 0.241379 | 0.241379 | 0.290323 | 0.388889 | 0.214286 | 0.130435 |
| **gen3/baseline** |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.214286 | 0.195122 | 0.250000 | 0.266667 | 0.000000 | 0.111111 | 0.170732 | 0.307692 | 0.125000 | 0.000000 | 0.083333 | 0.170732 | 0.090909 | 0.058824 | 0.000000 | 0.083333 | 0.195122 | 0.090909 | 0.285714 |
| **gen3/boundary** |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.400000 | 0.045455 | 0.125000 | 0.214286 | 0.300000 | 0.371429 | 0.100000 | 0.230769 | 0.214286 | 0.266667 | 0.371429 | 0.222222 | 0.250000 | 0.214286 | 0.266667 | 0.400000 | 0.185185 | 0.136364 |
| **gen3/complex** |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.371429 | 0.378378 | 0.195122 | 0.139535 | 0.041667 | 0.484848 | 0.282051 | 0.195122 | 0.139535 | 0.041667 | 0.200000 | 0.170732 | 0.195122 | 0.139535 | 0.000000 | 0.250000 | 0.428571 |
| **gen3/edge** |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.166667 | 0.250000 | 0.266667 | 0.400000 | 0.150000 | 0.230769 | 0.250000 | 0.266667 | 0.400000 | 0.185185 | 0.214286 | 0.250000 | 0.266667 | 0.371429 | 0.222222 | 0.136364 |
| **gen3/invalid** |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.266667 | 0.312500 | 0.378378 | 0.227273 | 0.285714 | 0.266667 | 0.312500 | 0.378378 | 0.275862 | 0.266667 | 0.266667 | 0.312500 | 0.378378 | 0.241379 | 0.166667 |
| **gen4/baseline** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.111111 | 0.170732 | 0.307692 | 0.125000 | 0.000000 | 0.083333 | 0.170732 | 0.090909 | 0.058824 | 0.000000 | 0.083333 | 0.195122 | 0.090909 | 0.285714 |
| **gen4/boundary** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.139535 | 0.392857 | 0.176471 | 0.111111 | 0.052632 | 0.186047 | 0.142857 | 0.055556 | 0.111111 | 0.052632 | 0.139535 | 0.142857 | 0.333333 |
| **gen4/complex** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.454545 | 0.282051 | 0.170732 | 0.139535 | 0.000000 | 0.225000 | 0.195122 | 0.170732 | 0.139535 | 0.041667 | 0.200000 | 0.428571 |
| **gen4/edge** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.250000 | 0.307692 | 0.357143 | 0.454545 | 0.320000 | 0.346154 | 0.307692 | 0.357143 | 0.484848 | 0.280000 | 0.100000 |
| **gen4/invalid** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.125000 | 0.176471 | 0.282051 | 0.161290 | 0.125000 | 0.125000 | 0.176471 | 0.282051 | 0.161290 | 0.230769 |
| **gen5/baseline** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.083333 | 0.170732 | 0.090909 | 0.058824 | 0.000000 | 0.083333 | 0.195122 | 0.090909 | 0.285714 |
| **gen5/boundary** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.139535 | 0.171429 | 0.083333 | 0.083333 | 0.000000 | 0.139535 | 0.171429 | 0.333333 |
| **gen5/complex** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.250000 | 0.219512 | 0.170732 | 0.186047 | 0.041667 | 0.200000 | 0.428571 |
| **gen5/edge** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.090909 | 0.090909 | 0.171429 | 0.200000 | 0.031250 | 0.296296 |
| **gen5/invalid** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.058824 | 0.083333 | 0.170732 | 0.090909 | 0.285714 |
| **gen6/baseline** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.083333 | 0.195122 | 0.090909 | 0.285714 |
| **gen6/boundary** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.139535 | 0.171429 | 0.333333 |
| **gen6/complex** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.250000 | 0.428571 |
| **gen6/edge** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.296296 |
| **gen6/invalid** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 |

# Result status table

|       | gen1/baseline | gen1/boundary | gen1/complex | gen1/edge | gen1/invalid | gen2/baseline | gen2/boundary | gen2/complex | gen2/edge | gen2/invalid | gen3/baseline | gen3/boundary | gen3/complex | gen3/edge | gen3/invalid | gen4/baseline | gen4/boundary | gen4/complex | gen4/edge | gen4/invalid | gen5/baseline | gen5/boundary | gen5/complex | gen5/edge | gen5/invalid | gen6/baseline | gen6/boundary | gen6/complex | gen6/edge | gen6/invalid |
|-------|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **gen1/baseline** | exact | exact | bounded | bounded | exact | exact | bounded | bounded | bounded | bounded | exact | exact | bounded | bounded | bounded | exact | bounded | exact | exact | bounded | exact | exact | exact | bounded | bounded | exact | exact | bounded | bounded | bounded |
| **gen1/boundary** |  | exact | exact | exact | exact | exact | exact | bounded | exact | exact | exact | exact | bounded | exact | exact | exact | bounded | exact | exact | exact | exact | exact | exact | exact | bounded | exact | exact | bounded | exact | bounded |
| **gen1/complex** |  |  | exact | exact | exact | bounded | exact | bounded | exact | bounded | bounded | exact | bounded | exact | bounded | bounded | exact | bounded | exact | exact | bounded | bounded | bounded | exact | exact | bounded | bounded | bounded | exact | bounded |
| **gen1/edge** |  |  |  | exact | exact | bounded | exact | exact | exact | exact | bounded | exact | exact | exact | exact | bounded | exact | bounded | exact | exact | bounded | exact | bounded | exact | exact | bounded | exact | exact | exact | bounded |
| **gen1/invalid** |  |  |  |  | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact |
| **gen2/baseline** |  |  |  |  |  | exact | bounded | bounded | bounded | bounded | exact | exact | bounded | bounded | bounded | exact | bounded | exact | exact | bounded | exact | exact | exact | bounded | bounded | exact | exact | bounded | bounded | bounded |
| **gen2/boundary** |  |  |  |  |  |  | exact | exact | exact | bounded | bounded | exact | exact | exact | bounded | bounded | bounded | exact | exact | bounded | bounded | bounded | exact | exact | bounded | bounded | bounded | exact | exact | bounded |
| **gen2/complex** |  |  |  |  |  |  |  | exact | bounded | bounded | bounded | bounded | exact | exact | bounded | bounded | exact | bounded | bounded | bounded | bounded | exact | bounded | exact | exact | bounded | exact | exact | bounded | bounded |
| **gen2/edge** |  |  |  |  |  |  |  |  | exact | bounded | bounded | exact | bounded | exact | bounded | bounded | bounded | exact | exact | bounded | bounded | bounded | exact | exact | bounded | bounded | bounded | bounded | exact | bounded |
| **gen2/invalid** |  |  |  |  |  |  |  |  |  | exact | bounded | exact | bounded | exact | bounded | bounded | bounded | bounded | exact | bounded | bounded | exact | bounded | bounded | bounded | bounded | exact | bounded | bounded | exact |
| **gen3/baseline** |  |  |  |  |  |  |  |  |  |  | exact | exact | bounded | bounded | bounded | exact | bounded | exact | exact | bounded | exact | exact | exact | bounded | bounded | exact | exact | bounded | bounded | bounded |
| **gen3/boundary** |  |  |  |  |  |  |  |  |  |  |  | exact | bounded | exact | exact | exact | bounded | exact | exact | exact | exact | exact | exact | exact | bounded | exact | exact | bounded | exact | bounded |
| **gen3/complex** |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | bounded | bounded | exact | bounded | bounded | bounded | bounded | exact | bounded | exact | exact | bounded | exact | exact | bounded | bounded |
| **gen3/edge** |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | bounded | exact | bounded | exact | exact | bounded | exact | bounded | exact | exact | bounded | exact | exact | exact | bounded |
| **gen3/invalid** |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | bounded | bounded | bounded | exact | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | exact |
| **gen4/baseline** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | bounded | exact | exact | bounded | exact | exact | exact | bounded | bounded | exact | exact | bounded | bounded | bounded |
| **gen4/boundary** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | bounded | bounded | bounded | bounded | bounded | bounded | exact | bounded | bounded | exact | bounded | bounded |
| **gen4/complex** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | bounded | exact | exact | exact | exact | bounded | exact | exact | bounded | exact | bounded |
| **gen4/edge** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | exact | exact | exact | exact | bounded | exact | exact | bounded | exact | exact |
| **gen4/invalid** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded |
| **gen5/baseline** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | exact | bounded | bounded | exact | exact | bounded | bounded | bounded |
| **gen5/boundary** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | bounded | exact | exact | exact | exact | bounded | bounded |
| **gen5/complex** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | bounded | bounded | exact | bounded | bounded | exact | bounded |
| **gen5/edge** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | bounded | bounded | bounded | exact | exact | bounded |
| **gen5/invalid** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | bounded | exact | exact | bounded | bounded |
| **gen6/baseline** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | bounded | bounded | bounded |
| **gen6/boundary** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | bounded | bounded |
| **gen6/complex** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | bounded | bounded |
| **gen6/edge** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | bounded |
| **gen6/invalid** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact |

Pairs: 435; exact pairs: 217; bounded pairs: 218; mean relative gap: 10.84%; max relative gap: 100.00%; invalid files: 0.
