# Adjacency, edges, and labels

```text
Adj-gen1/baseline.soil: [[0, 1, 0, 2], [1, 0, 0, 1], [0, 0, 0, 1], [2, 1, 1, 0]]

Labels-gen1/baseline.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Individual', 3: 'RentalAgreement'}

Edges-gen1/baseline.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeRentalAgreementOrigin'), (0, 3, 'RentalOfficeRentalAgreementDrop'), (3, 1, 'RentalAgreementVehicle'), (3, 2, 'RentalAgreementCustomer')]

Adj-gen1/boundary.soil: [[0, 1, 0, 2], [1, 0, 0, 1], [0, 0, 0, 1], [2, 1, 1, 0]]

Labels-gen1/boundary.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Individual', 3: 'RentalAgreement'}

Edges-gen1/boundary.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeRentalAgreementOrigin'), (0, 3, 'RentalOfficeRentalAgreementDrop'), (3, 1, 'RentalAgreementVehicle'), (3, 2, 'RentalAgreementCustomer')]

Adj-gen1/complex.soil: [[0, 1, 1, 0, 0, 2, 2], [1, 0, 0, 0, 0, 1, 0], [1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 1], [2, 1, 0, 1, 0, 0, 0], [2, 0, 1, 0, 1, 0, 0]]

Labels-gen1/complex.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Vehicle', 3: 'Individual', 4: 'Company', 5: 'RentalAgreement', 6: 'RentalAgreement'}

Edges-gen1/complex.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 5, 'RentalOfficeRentalAgreementOrigin'), (0, 6, 'RentalOfficeRentalAgreementOrigin'), (0, 5, 'RentalOfficeRentalAgreementDrop'), (0, 6, 'RentalOfficeRentalAgreementDrop'), (5, 1, 'RentalAgreementVehicle'), (6, 2, 'RentalAgreementVehicle'), (5, 3, 'RentalAgreementCustomer'), (6, 4, 'RentalAgreementCustomer')]

Adj-gen1/edge.soil: [[0, 1, 0, 0, 2, 2], [1, 0, 0, 0, 1, 1], [0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1], [2, 1, 1, 0, 0, 0], [2, 1, 0, 1, 0, 0]]

Labels-gen1/edge.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Individual', 3: 'Company', 4: 'RentalAgreement', 5: 'RentalAgreement'}

Edges-gen1/edge.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 4, 'RentalOfficeRentalAgreementOrigin'), (0, 4, 'RentalOfficeRentalAgreementDrop'), (4, 1, 'RentalAgreementVehicle'), (4, 2, 'RentalAgreementCustomer'), (0, 5, 'RentalOfficeRentalAgreementOrigin'), (0, 5, 'RentalOfficeRentalAgreementDrop'), (5, 1, 'RentalAgreementVehicle'), (5, 3, 'RentalAgreementCustomer')]

Adj-gen1/invalid.soil: [[0, 1, 0, 0, 2], [1, 0, 0, 0, 1], [0, 0, 0, 0, 1], [0, 0, 0, 0, 1], [2, 1, 1, 1, 0]]

Labels-gen1/invalid.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Individual', 3: 'Company', 4: 'RentalAgreement'}

Edges-gen1/invalid.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 4, 'RentalOfficeRentalAgreementOrigin'), (0, 4, 'RentalOfficeRentalAgreementDrop'), (4, 1, 'RentalAgreementVehicle'), (4, 2, 'RentalAgreementCustomer'), (4, 3, 'RentalAgreementCustomer')]

Adj-gen2/baseline.soil: [[0, 1, 1, 0, 2], [1, 0, 0, 0, 0], [1, 0, 0, 0, 1], [0, 0, 0, 0, 1], [2, 0, 1, 1, 0]]

Labels-gen2/baseline.soil: {0: 'RentalOffice', 1: 'Vehicle', 2: 'Truck', 3: 'Company', 4: 'RentalAgreement'}

Edges-gen2/baseline.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 4, 'RentalOfficeRentalAgreementOrigin'), (0, 4, 'RentalOfficeRentalAgreementDrop'), (4, 2, 'RentalAgreementVehicle'), (4, 3, 'RentalAgreementCustomer')]

Adj-gen2/boundary.soil: [[0, 1, 2, 0], [1, 0, 1, 0], [2, 1, 0, 1], [0, 0, 1, 0]]

Labels-gen2/boundary.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'RentalAgreement', 3: 'Company'}

Edges-gen2/boundary.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeRentalAgreementOrigin'), (0, 2, 'RentalOfficeRentalAgreementDrop'), (2, 1, 'RentalAgreementVehicle'), (2, 3, 'RentalAgreementCustomer')]

Adj-gen2/complex.soil: [[0, 1, 1, 1, 0, 0, 2, 2, 2], [1, 0, 0, 0, 0, 0, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1, 0], [1, 0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1], [2, 1, 0, 0, 1, 0, 0, 0, 0], [2, 0, 1, 0, 0, 1, 0, 0, 0], [2, 0, 0, 1, 0, 1, 0, 0, 0]]

Labels-gen2/complex.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Vehicle', 3: 'Truck', 4: 'Individual', 5: 'Company', 6: 'RentalAgreement', 7: 'RentalAgreement', 8: 'RentalAgreement'}

Edges-gen2/complex.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeVehicle'), (0, 6, 'RentalOfficeRentalAgreementOrigin'), (0, 7, 'RentalOfficeRentalAgreementOrigin'), (0, 8, 'RentalOfficeRentalAgreementOrigin'), (0, 6, 'RentalOfficeRentalAgreementDrop'), (0, 7, 'RentalOfficeRentalAgreementDrop'), (0, 8, 'RentalOfficeRentalAgreementDrop'), (6, 1, 'RentalAgreementVehicle'), (7, 2, 'RentalAgreementVehicle'), (8, 3, 'RentalAgreementVehicle'), (6, 4, 'RentalAgreementCustomer'), (7, 5, 'RentalAgreementCustomer'), (8, 5, 'RentalAgreementCustomer')]

Adj-gen2/edge.soil: [[0, 1, 1, 0, 0, 2, 2], [1, 0, 0, 0, 0, 1, 0], [1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 1], [2, 1, 0, 1, 0, 0, 0], [2, 0, 1, 0, 1, 0, 0]]

Labels-gen2/edge.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Vehicle', 3: 'Individual', 4: 'Company', 5: 'RentalAgreement', 6: 'RentalAgreement'}

Edges-gen2/edge.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 5, 'RentalOfficeRentalAgreementOrigin'), (0, 6, 'RentalOfficeRentalAgreementOrigin'), (0, 5, 'RentalOfficeRentalAgreementDrop'), (0, 6, 'RentalOfficeRentalAgreementDrop'), (5, 1, 'RentalAgreementVehicle'), (6, 2, 'RentalAgreementVehicle'), (5, 3, 'RentalAgreementCustomer'), (6, 4, 'RentalAgreementCustomer')]

Adj-gen2/invalid.soil: [[0, 1, 0, 2], [1, 0, 0, 1], [0, 0, 0, 1], [2, 1, 1, 0]]

Labels-gen2/invalid.soil: {0: 'RentalOffice', 1: 'Vehicle', 2: 'Individual', 3: 'RentalAgreement'}

Edges-gen2/invalid.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeRentalAgreementOrigin'), (0, 3, 'RentalOfficeRentalAgreementDrop'), (3, 1, 'RentalAgreementVehicle'), (3, 2, 'RentalAgreementCustomer')]

Adj-gen3/baseline.soil: [[0, 1, 1, 0, 2], [1, 0, 0, 0, 0], [1, 0, 0, 0, 1], [0, 0, 0, 0, 1], [2, 0, 1, 1, 0]]

Labels-gen3/baseline.soil: {0: 'RentalOffice', 1: 'Vehicle', 2: 'Truck', 3: 'Individual', 4: 'RentalAgreement'}

Edges-gen3/baseline.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 4, 'RentalOfficeRentalAgreementOrigin'), (0, 4, 'RentalOfficeRentalAgreementDrop'), (4, 2, 'RentalAgreementVehicle'), (4, 3, 'RentalAgreementCustomer')]

Adj-gen3/boundary.soil: [[0, 1, 2, 0], [1, 0, 1, 0], [2, 1, 0, 1], [0, 0, 1, 0]]

Labels-gen3/boundary.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'RentalAgreement', 3: 'Individual'}

Edges-gen3/boundary.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeRentalAgreementOrigin'), (0, 2, 'RentalOfficeRentalAgreementDrop'), (2, 1, 'RentalAgreementVehicle'), (2, 3, 'RentalAgreementCustomer')]

Adj-gen3/complex.soil: [[0, 1, 1, 1, 0, 0, 2, 2, 2], [1, 0, 0, 0, 0, 0, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1, 0], [1, 0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1], [2, 1, 0, 0, 1, 0, 0, 0, 0], [2, 0, 1, 0, 0, 1, 0, 0, 0], [2, 0, 0, 1, 0, 1, 0, 0, 0]]

Labels-gen3/complex.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Truck', 3: 'Vehicle', 4: 'Individual', 5: 'Company', 6: 'RentalAgreement', 7: 'RentalAgreement', 8: 'RentalAgreement'}

Edges-gen3/complex.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeVehicle'), (0, 6, 'RentalOfficeRentalAgreementOrigin'), (0, 7, 'RentalOfficeRentalAgreementOrigin'), (0, 8, 'RentalOfficeRentalAgreementOrigin'), (0, 6, 'RentalOfficeRentalAgreementDrop'), (0, 7, 'RentalOfficeRentalAgreementDrop'), (0, 8, 'RentalOfficeRentalAgreementDrop'), (6, 1, 'RentalAgreementVehicle'), (7, 2, 'RentalAgreementVehicle'), (8, 3, 'RentalAgreementVehicle'), (6, 4, 'RentalAgreementCustomer'), (7, 5, 'RentalAgreementCustomer'), (8, 5, 'RentalAgreementCustomer')]

Adj-gen3/edge.soil: [[0, 1, 0, 0, 2, 2], [1, 0, 0, 0, 1, 1], [0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1], [2, 1, 1, 0, 0, 0], [2, 1, 0, 1, 0, 0]]

Labels-gen3/edge.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Individual', 3: 'Company', 4: 'RentalAgreement', 5: 'RentalAgreement'}

Edges-gen3/edge.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 4, 'RentalOfficeRentalAgreementOrigin'), (0, 5, 'RentalOfficeRentalAgreementOrigin'), (0, 4, 'RentalOfficeRentalAgreementDrop'), (0, 5, 'RentalOfficeRentalAgreementDrop'), (4, 1, 'RentalAgreementVehicle'), (5, 1, 'RentalAgreementVehicle'), (4, 2, 'RentalAgreementCustomer'), (5, 3, 'RentalAgreementCustomer')]

Adj-gen3/invalid.soil: [[0, 1, 0, 2], [1, 0, 0, 1], [0, 0, 0, 1], [2, 1, 1, 0]]

Labels-gen3/invalid.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Company', 3: 'RentalAgreement'}

Edges-gen3/invalid.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeRentalAgreementOrigin'), (0, 3, 'RentalOfficeRentalAgreementDrop'), (3, 1, 'RentalAgreementVehicle'), (3, 2, 'RentalAgreementCustomer')]

Adj-gen4/baseline.soil: [[0, 1, 1, 0, 2], [1, 0, 0, 0, 1], [1, 0, 0, 0, 0], [0, 0, 0, 0, 1], [2, 1, 0, 1, 0]]

Labels-gen4/baseline.soil: {0: 'RentalOffice', 1: 'Vehicle', 2: 'Truck', 3: 'Company', 4: 'RentalAgreement'}

Edges-gen4/baseline.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 4, 'RentalOfficeRentalAgreementOrigin'), (0, 4, 'RentalOfficeRentalAgreementDrop'), (4, 1, 'RentalAgreementVehicle'), (4, 3, 'RentalAgreementCustomer')]

Adj-gen4/boundary.soil: [[0, 1, 2, 0], [1, 0, 1, 0], [2, 1, 0, 1], [0, 0, 1, 0]]

Labels-gen4/boundary.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'RentalAgreement', 3: 'Company'}

Edges-gen4/boundary.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeRentalAgreementOrigin'), (0, 2, 'RentalOfficeRentalAgreementDrop'), (2, 1, 'RentalAgreementVehicle'), (2, 3, 'RentalAgreementCustomer')]

Adj-gen4/complex.soil: [[0, 1, 1, 1, 0, 0, 2, 2, 2], [1, 0, 0, 0, 0, 0, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1, 0], [1, 0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1], [2, 1, 0, 0, 1, 0, 0, 0, 0], [2, 0, 1, 0, 0, 1, 0, 0, 0], [2, 0, 0, 1, 0, 1, 0, 0, 0]]

Labels-gen4/complex.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Truck', 3: 'Vehicle', 4: 'Individual', 5: 'Company', 6: 'RentalAgreement', 7: 'RentalAgreement', 8: 'RentalAgreement'}

Edges-gen4/complex.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeVehicle'), (0, 6, 'RentalOfficeRentalAgreementOrigin'), (0, 7, 'RentalOfficeRentalAgreementOrigin'), (0, 8, 'RentalOfficeRentalAgreementOrigin'), (0, 6, 'RentalOfficeRentalAgreementDrop'), (0, 7, 'RentalOfficeRentalAgreementDrop'), (0, 8, 'RentalOfficeRentalAgreementDrop'), (6, 1, 'RentalAgreementVehicle'), (7, 2, 'RentalAgreementVehicle'), (8, 3, 'RentalAgreementVehicle'), (6, 4, 'RentalAgreementCustomer'), (7, 5, 'RentalAgreementCustomer'), (8, 5, 'RentalAgreementCustomer')]

Adj-gen4/edge.soil: [[0, 1, 0, 0, 2, 2], [1, 0, 0, 0, 1, 1], [0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1], [2, 1, 1, 0, 0, 0], [2, 1, 0, 1, 0, 0]]

Labels-gen4/edge.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Individual', 3: 'Company', 4: 'RentalAgreement', 5: 'RentalAgreement'}

Edges-gen4/edge.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 4, 'RentalOfficeRentalAgreementOrigin'), (0, 5, 'RentalOfficeRentalAgreementOrigin'), (0, 4, 'RentalOfficeRentalAgreementDrop'), (0, 5, 'RentalOfficeRentalAgreementDrop'), (4, 1, 'RentalAgreementVehicle'), (5, 1, 'RentalAgreementVehicle'), (4, 2, 'RentalAgreementCustomer'), (5, 3, 'RentalAgreementCustomer')]

Adj-gen4/invalid.soil: [[0, 1, 0, 0, 2, 2], [1, 0, 0, 0, 1, 1], [0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1], [2, 1, 1, 0, 0, 0], [2, 1, 0, 1, 0, 0]]

Labels-gen4/invalid.soil: {0: 'RentalOffice', 1: 'Vehicle', 2: 'Individual', 3: 'Company', 4: 'RentalAgreement', 5: 'RentalAgreement'}

Edges-gen4/invalid.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 4, 'RentalOfficeRentalAgreementOrigin'), (0, 5, 'RentalOfficeRentalAgreementOrigin'), (0, 4, 'RentalOfficeRentalAgreementDrop'), (0, 5, 'RentalOfficeRentalAgreementDrop'), (4, 1, 'RentalAgreementVehicle'), (5, 1, 'RentalAgreementVehicle'), (4, 2, 'RentalAgreementCustomer'), (5, 3, 'RentalAgreementCustomer')]

Adj-gen5/baseline.soil: [[0, 1, 1, 0, 2], [1, 0, 0, 0, 0], [1, 0, 0, 0, 1], [0, 0, 0, 0, 1], [2, 0, 1, 1, 0]]

Labels-gen5/baseline.soil: {0: 'RentalOffice', 1: 'Vehicle', 2: 'Truck', 3: 'Individual', 4: 'RentalAgreement'}

Edges-gen5/baseline.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 4, 'RentalOfficeRentalAgreementOrigin'), (0, 4, 'RentalOfficeRentalAgreementDrop'), (4, 2, 'RentalAgreementVehicle'), (4, 3, 'RentalAgreementCustomer')]

Adj-gen5/boundary.soil: [[0, 1, 2, 0], [1, 0, 1, 0], [2, 1, 0, 1], [0, 0, 1, 0]]

Labels-gen5/boundary.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'RentalAgreement', 3: 'Individual'}

Edges-gen5/boundary.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeRentalAgreementOrigin'), (0, 2, 'RentalOfficeRentalAgreementDrop'), (2, 1, 'RentalAgreementVehicle'), (2, 3, 'RentalAgreementCustomer')]

Adj-gen5/complex.soil: [[0, 1, 1, 1, 1, 0, 0, 0, 2, 2, 2, 2], [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0], [2, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [2, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0], [2, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0], [2, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0]]

Labels-gen5/complex.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Truck', 3: 'Vehicle', 4: 'Vehicle', 5: 'Individual', 6: 'Company', 7: 'Company', 8: 'RentalAgreement', 9: 'RentalAgreement', 10: 'RentalAgreement', 11: 'RentalAgreement'}

Edges-gen5/complex.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeVehicle'), (0, 4, 'RentalOfficeVehicle'), (0, 8, 'RentalOfficeRentalAgreementOrigin'), (0, 9, 'RentalOfficeRentalAgreementOrigin'), (0, 10, 'RentalOfficeRentalAgreementOrigin'), (0, 11, 'RentalOfficeRentalAgreementOrigin'), (0, 8, 'RentalOfficeRentalAgreementDrop'), (0, 9, 'RentalOfficeRentalAgreementDrop'), (0, 10, 'RentalOfficeRentalAgreementDrop'), (0, 11, 'RentalOfficeRentalAgreementDrop'), (8, 1, 'RentalAgreementVehicle'), (9, 3, 'RentalAgreementVehicle'), (10, 4, 'RentalAgreementVehicle'), (11, 2, 'RentalAgreementVehicle'), (8, 5, 'RentalAgreementCustomer'), (9, 6, 'RentalAgreementCustomer'), (10, 7, 'RentalAgreementCustomer'), (11, 6, 'RentalAgreementCustomer')]

Adj-gen5/edge.soil: [[0, 1, 1, 0, 0, 2, 2], [1, 0, 0, 0, 0, 1, 0], [1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 1], [2, 1, 0, 1, 0, 0, 0], [2, 0, 1, 0, 1, 0, 0]]

Labels-gen5/edge.soil: {0: 'RentalOffice', 1: 'Vehicle', 2: 'Truck', 3: 'Individual', 4: 'Company', 5: 'RentalAgreement', 6: 'RentalAgreement'}

Edges-gen5/edge.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 5, 'RentalOfficeRentalAgreementOrigin'), (0, 6, 'RentalOfficeRentalAgreementOrigin'), (0, 5, 'RentalOfficeRentalAgreementDrop'), (0, 6, 'RentalOfficeRentalAgreementDrop'), (5, 1, 'RentalAgreementVehicle'), (6, 2, 'RentalAgreementVehicle'), (5, 3, 'RentalAgreementCustomer'), (6, 4, 'RentalAgreementCustomer')]

Adj-gen5/invalid.soil: [[0, 1, 0, 2], [1, 0, 0, 1], [0, 0, 0, 1], [2, 1, 1, 0]]

Labels-gen5/invalid.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Individual', 3: 'RentalAgreement'}

Edges-gen5/invalid.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeRentalAgreementOrigin'), (0, 3, 'RentalOfficeRentalAgreementDrop'), (3, 1, 'RentalAgreementVehicle'), (3, 2, 'RentalAgreementCustomer')]

Adj-gen6/baseline.soil: [[0, 1, 1, 0, 2], [1, 0, 0, 0, 1], [1, 0, 0, 0, 0], [0, 0, 0, 0, 1], [2, 1, 0, 1, 0]]

Labels-gen6/baseline.soil: {0: 'RentalOffice', 1: 'Vehicle', 2: 'Truck', 3: 'Company', 4: 'RentalAgreement'}

Edges-gen6/baseline.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 4, 'RentalOfficeRentalAgreementOrigin'), (0, 4, 'RentalOfficeRentalAgreementDrop'), (4, 1, 'RentalAgreementVehicle'), (4, 3, 'RentalAgreementCustomer')]

Adj-gen6/boundary.soil: [[0, 1, 2, 0], [1, 0, 1, 0], [2, 1, 0, 1], [0, 0, 1, 0]]

Labels-gen6/boundary.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'RentalAgreement', 3: 'Company'}

Edges-gen6/boundary.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeRentalAgreementOrigin'), (0, 2, 'RentalOfficeRentalAgreementDrop'), (2, 1, 'RentalAgreementVehicle'), (2, 3, 'RentalAgreementCustomer')]

Adj-gen6/complex.soil: [[0, 1, 1, 1, 1, 0, 0, 0, 2, 2, 2, 2], [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0], [2, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [2, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0], [2, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0], [2, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0]]

Labels-gen6/complex.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Truck', 3: 'Vehicle', 4: 'Vehicle', 5: 'Individual', 6: 'Company', 7: 'Company', 8: 'RentalAgreement', 9: 'RentalAgreement', 10: 'RentalAgreement', 11: 'RentalAgreement'}

Edges-gen6/complex.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 2, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeVehicle'), (0, 4, 'RentalOfficeVehicle'), (0, 8, 'RentalOfficeRentalAgreementOrigin'), (0, 9, 'RentalOfficeRentalAgreementOrigin'), (0, 10, 'RentalOfficeRentalAgreementOrigin'), (0, 11, 'RentalOfficeRentalAgreementOrigin'), (0, 8, 'RentalOfficeRentalAgreementDrop'), (0, 9, 'RentalOfficeRentalAgreementDrop'), (0, 10, 'RentalOfficeRentalAgreementDrop'), (0, 11, 'RentalOfficeRentalAgreementDrop'), (8, 1, 'RentalAgreementVehicle'), (9, 3, 'RentalAgreementVehicle'), (10, 2, 'RentalAgreementVehicle'), (11, 4, 'RentalAgreementVehicle'), (8, 5, 'RentalAgreementCustomer'), (9, 6, 'RentalAgreementCustomer'), (10, 7, 'RentalAgreementCustomer'), (11, 6, 'RentalAgreementCustomer')]

Adj-gen6/edge.soil: [[0, 1, 0, 0, 2, 2], [1, 0, 0, 0, 1, 1], [0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1], [2, 1, 1, 0, 0, 0], [2, 1, 0, 1, 0, 0]]

Labels-gen6/edge.soil: {0: 'RentalOffice', 1: 'Truck', 2: 'Individual', 3: 'Company', 4: 'RentalAgreement', 5: 'RentalAgreement'}

Edges-gen6/edge.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 4, 'RentalOfficeRentalAgreementOrigin'), (0, 5, 'RentalOfficeRentalAgreementOrigin'), (0, 4, 'RentalOfficeRentalAgreementDrop'), (0, 5, 'RentalOfficeRentalAgreementDrop'), (4, 1, 'RentalAgreementVehicle'), (5, 1, 'RentalAgreementVehicle'), (4, 2, 'RentalAgreementCustomer'), (5, 3, 'RentalAgreementCustomer')]

Adj-gen6/invalid.soil: [[0, 1, 0, 2], [1, 0, 0, 1], [0, 0, 0, 1], [2, 1, 1, 0]]

Labels-gen6/invalid.soil: {0: 'RentalOffice', 1: 'Vehicle', 2: 'Company', 3: 'RentalAgreement'}

Edges-gen6/invalid.soil: [(0, 1, 'RentalOfficeVehicle'), (0, 3, 'RentalOfficeRentalAgreementOrigin'), (0, 3, 'RentalOfficeRentalAgreementDrop'), (3, 1, 'RentalAgreementVehicle'), (3, 2, 'RentalAgreementCustomer')]

```

# GED Matrix

```json
[[0.0, 0.0, 8.0, 6.0, 2.0, 3.0, 1.0, 15.0, 8.0, 1.0, 2.0, 0.0, 15.0, 6.0, 1.0, 4.0, 1.0, 15.0, 6.0, 7.0, 2.0, 0.0, 23.0, 9.0, 0.0, 4.0, 1.0, 23.0, 6.0, 2.0], [0.0, 0.0, 8.0, 6.0, 2.0, 3.0, 1.0, 15.0, 8.0, 1.0, 2.0, 0.0, 15.0, 6.0, 1.0, 4.0, 1.0, 15.0, 6.0, 7.0, 2.0, 0.0, 23.0, 9.0, 0.0, 4.0, 1.0, 23.0, 6.0, 2.0], [8.0, 8.0, 0.0, 4.0, 8.0, 7.0, 9.0, 7.0, 0.0, 9.0, 6.0, 8.0, 7.0, 4.0, 9.0, 6.0, 9.0, 7.0, 4.0, 4.0, 6.0, 8.0, 15.0, 2.0, 8.0, 6.0, 9.0, 15.0, 4.0, 8.0], [6.0, 6.0, 4.0, 0.0, 6.0, 6.0, 6.0, 11.0, 4.0, 7.0, 6.0, 6.0, 11.0, 0.0, 6.0, 7.0, 6.0, 11.0, 0.0, 1.0, 6.0, 6.0, 19.0, 4.0, 6.0, 7.0, 6.0, 19.0, 0.0, 7.0], [2.0, 2.0, 8.0, 6.0, 0.0, 3.0, 2.0, 15.0, 8.0, 3.0, 3.0, 2.0, 15.0, 6.0, 2.0, 4.0, 2.0, 15.0, 6.0, 7.0, 3.0, 2.0, 23.0, 8.0, 2.0, 4.0, 2.0, 23.0, 6.0, 3.0], [3.0, 3.0, 7.0, 6.0, 3.0, 0.0, 2.0, 15.0, 7.0, 4.0, 1.0, 3.0, 13.0, 6.0, 2.0, 2.0, 2.0, 13.0, 6.0, 7.0, 1.0, 3.0, 21.0, 6.0, 3.0, 2.0, 2.0, 22.0, 6.0, 3.0], [1.0, 1.0, 9.0, 6.0, 2.0, 2.0, 0.0, 15.0, 9.0, 2.0, 3.0, 1.0, 15.0, 6.0, 0.0, 3.0, 0.0, 15.0, 6.0, 7.0, 3.0, 1.0, 24.0, 8.0, 1.0, 3.0, 0.0, 23.0, 6.0, 1.0], [15.0, 15.0, 7.0, 11.0, 15.0, 15.0, 15.0, 0.0, 7.0, 16.0, 13.0, 15.0, 0.0, 11.0, 15.0, 13.0, 15.0, 0.0, 11.0, 11.0, 13.0, 15.0, 8.0, 8.0, 15.0, 13.0, 15.0, 10.0, 11.0, 15.0], [8.0, 8.0, 0.0, 4.0, 8.0, 7.0, 9.0, 7.0, 0.0, 9.0, 6.0, 8.0, 7.0, 4.0, 9.0, 6.0, 9.0, 7.0, 4.0, 4.0, 6.0, 8.0, 15.0, 2.0, 8.0, 6.0, 9.0, 15.0, 4.0, 8.0], [1.0, 1.0, 9.0, 7.0, 3.0, 4.0, 2.0, 16.0, 9.0, 0.0, 3.0, 1.0, 16.0, 7.0, 2.0, 3.0, 2.0, 16.0, 7.0, 6.0, 3.0, 1.0, 24.0, 8.0, 1.0, 3.0, 2.0, 24.0, 7.0, 1.0], [2.0, 2.0, 6.0, 6.0, 3.0, 1.0, 3.0, 13.0, 6.0, 3.0, 0.0, 2.0, 13.0, 6.0, 3.0, 3.0, 3.0, 13.0, 6.0, 7.0, 0.0, 2.0, 21.0, 7.0, 2.0, 3.0, 3.0, 21.0, 6.0, 4.0], [0.0, 0.0, 8.0, 6.0, 2.0, 3.0, 1.0, 15.0, 8.0, 1.0, 2.0, 0.0, 15.0, 6.0, 1.0, 4.0, 1.0, 15.0, 6.0, 7.0, 2.0, 0.0, 23.0, 9.0, 0.0, 4.0, 1.0, 23.0, 6.0, 2.0], [15.0, 15.0, 7.0, 11.0, 15.0, 13.0, 15.0, 0.0, 7.0, 16.0, 13.0, 15.0, 0.0, 11.0, 15.0, 13.0, 15.0, 0.0, 11.0, 11.0, 13.0, 15.0, 8.0, 8.0, 15.0, 13.0, 15.0, 9.0, 11.0, 15.0], [6.0, 6.0, 4.0, 0.0, 6.0, 6.0, 6.0, 11.0, 4.0, 7.0, 6.0, 6.0, 11.0, 0.0, 6.0, 7.0, 6.0, 11.0, 0.0, 1.0, 6.0, 6.0, 19.0, 4.0, 6.0, 7.0, 6.0, 19.0, 0.0, 7.0], [1.0, 1.0, 9.0, 6.0, 2.0, 2.0, 0.0, 15.0, 9.0, 2.0, 3.0, 1.0, 15.0, 6.0, 0.0, 3.0, 0.0, 15.0, 6.0, 7.0, 3.0, 1.0, 24.0, 8.0, 1.0, 3.0, 0.0, 23.0, 6.0, 1.0], [4.0, 4.0, 6.0, 7.0, 4.0, 2.0, 3.0, 13.0, 6.0, 3.0, 3.0, 4.0, 13.0, 7.0, 3.0, 0.0, 3.0, 13.0, 7.0, 6.0, 3.0, 4.0, 21.0, 7.0, 4.0, 0.0, 3.0, 21.0, 7.0, 2.0], [1.0, 1.0, 9.0, 6.0, 2.0, 2.0, 0.0, 15.0, 9.0, 2.0, 3.0, 1.0, 15.0, 6.0, 0.0, 3.0, 0.0, 15.0, 6.0, 7.0, 3.0, 1.0, 24.0, 8.0, 1.0, 3.0, 0.0, 23.0, 6.0, 1.0], [15.0, 15.0, 7.0, 11.0, 15.0, 13.0, 15.0, 0.0, 7.0, 16.0, 13.0, 15.0, 0.0, 11.0, 15.0, 13.0, 15.0, 0.0, 11.0, 11.0, 13.0, 15.0, 8.0, 8.0, 15.0, 13.0, 15.0, 9.0, 11.0, 15.0], [6.0, 6.0, 4.0, 0.0, 6.0, 6.0, 6.0, 11.0, 4.0, 7.0, 6.0, 6.0, 11.0, 0.0, 6.0, 7.0, 6.0, 11.0, 0.0, 1.0, 6.0, 6.0, 19.0, 4.0, 6.0, 7.0, 6.0, 19.0, 0.0, 7.0], [7.0, 7.0, 4.0, 1.0, 7.0, 7.0, 7.0, 11.0, 4.0, 6.0, 7.0, 7.0, 11.0, 1.0, 7.0, 6.0, 7.0, 11.0, 1.0, 0.0, 7.0, 7.0, 19.0, 4.0, 7.0, 6.0, 7.0, 19.0, 1.0, 6.0], [2.0, 2.0, 6.0, 6.0, 3.0, 1.0, 3.0, 13.0, 6.0, 3.0, 0.0, 2.0, 13.0, 6.0, 3.0, 3.0, 3.0, 13.0, 6.0, 7.0, 0.0, 2.0, 21.0, 7.0, 2.0, 3.0, 3.0, 21.0, 6.0, 4.0], [0.0, 0.0, 8.0, 6.0, 2.0, 3.0, 1.0, 15.0, 8.0, 1.0, 2.0, 0.0, 15.0, 6.0, 1.0, 4.0, 1.0, 15.0, 6.0, 7.0, 2.0, 0.0, 23.0, 9.0, 0.0, 4.0, 1.0, 23.0, 6.0, 2.0], [23.0, 23.0, 15.0, 19.0, 23.0, 21.0, 24.0, 8.0, 15.0, 24.0, 21.0, 23.0, 8.0, 19.0, 24.0, 21.0, 24.0, 8.0, 19.0, 19.0, 21.0, 23.0, 0.0, 16.0, 23.0, 21.0, 24.0, 2.0, 19.0, 23.0], [9.0, 9.0, 2.0, 4.0, 8.0, 6.0, 8.0, 8.0, 2.0, 8.0, 7.0, 9.0, 8.0, 4.0, 8.0, 7.0, 8.0, 8.0, 4.0, 4.0, 7.0, 9.0, 16.0, 0.0, 9.0, 7.0, 8.0, 16.0, 4.0, 9.0], [0.0, 0.0, 8.0, 6.0, 2.0, 3.0, 1.0, 15.0, 8.0, 1.0, 2.0, 0.0, 15.0, 6.0, 1.0, 4.0, 1.0, 15.0, 6.0, 7.0, 2.0, 0.0, 23.0, 9.0, 0.0, 4.0, 1.0, 23.0, 6.0, 2.0], [4.0, 4.0, 6.0, 7.0, 4.0, 2.0, 3.0, 13.0, 6.0, 3.0, 3.0, 4.0, 13.0, 7.0, 3.0, 0.0, 3.0, 13.0, 7.0, 6.0, 3.0, 4.0, 21.0, 7.0, 4.0, 0.0, 3.0, 21.0, 7.0, 2.0], [1.0, 1.0, 9.0, 6.0, 2.0, 2.0, 0.0, 15.0, 9.0, 2.0, 3.0, 1.0, 15.0, 6.0, 0.0, 3.0, 0.0, 15.0, 6.0, 7.0, 3.0, 1.0, 24.0, 8.0, 1.0, 3.0, 0.0, 23.0, 6.0, 1.0], [23.0, 23.0, 15.0, 19.0, 23.0, 22.0, 23.0, 10.0, 15.0, 24.0, 21.0, 23.0, 9.0, 19.0, 23.0, 21.0, 23.0, 9.0, 19.0, 19.0, 21.0, 23.0, 2.0, 16.0, 23.0, 21.0, 23.0, 0.0, 19.0, 23.0], [6.0, 6.0, 4.0, 0.0, 6.0, 6.0, 6.0, 11.0, 4.0, 7.0, 6.0, 6.0, 11.0, 0.0, 6.0, 7.0, 6.0, 11.0, 0.0, 1.0, 6.0, 6.0, 19.0, 4.0, 6.0, 7.0, 6.0, 19.0, 0.0, 7.0], [2.0, 2.0, 8.0, 7.0, 3.0, 3.0, 1.0, 15.0, 8.0, 1.0, 4.0, 2.0, 15.0, 7.0, 1.0, 2.0, 1.0, 15.0, 7.0, 6.0, 4.0, 2.0, 23.0, 9.0, 2.0, 2.0, 1.0, 23.0, 7.0, 0.0]]
```

Each cell is the cost of a concrete edit path found by the bipartite assignment (BP), IPFP, and REFINE local search, so it is an upper bound on the exact GED. The interval table pairs it with the BRANCH lower bound. A cell is `exact` when both bounds coincide.

# GED value table (upper bound)

|       | gen1/baseline | gen1/boundary | gen1/complex | gen1/edge | gen1/invalid | gen2/baseline | gen2/boundary | gen2/complex | gen2/edge | gen2/invalid | gen3/baseline | gen3/boundary | gen3/complex | gen3/edge | gen3/invalid | gen4/baseline | gen4/boundary | gen4/complex | gen4/edge | gen4/invalid | gen5/baseline | gen5/boundary | gen5/complex | gen5/edge | gen5/invalid | gen6/baseline | gen6/boundary | gen6/complex | gen6/edge | gen6/invalid |
|-------|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **gen1/baseline** | 0.000000 | 0.000000 | 8.000000 | 6.000000 | 2.000000 | 3.000000 | 1.000000 | 15.000000 | 8.000000 | 1.000000 | 2.000000 | 0.000000 | 15.000000 | 6.000000 | 1.000000 | 4.000000 | 1.000000 | 15.000000 | 6.000000 | 7.000000 | 2.000000 | 0.000000 | 23.000000 | 9.000000 | 0.000000 | 4.000000 | 1.000000 | 23.000000 | 6.000000 | 2.000000 |
| **gen1/boundary** |  | 0.000000 | 8.000000 | 6.000000 | 2.000000 | 3.000000 | 1.000000 | 15.000000 | 8.000000 | 1.000000 | 2.000000 | 0.000000 | 15.000000 | 6.000000 | 1.000000 | 4.000000 | 1.000000 | 15.000000 | 6.000000 | 7.000000 | 2.000000 | 0.000000 | 23.000000 | 9.000000 | 0.000000 | 4.000000 | 1.000000 | 23.000000 | 6.000000 | 2.000000 |
| **gen1/complex** |  |  | 0.000000 | 4.000000 | 8.000000 | 7.000000 | 9.000000 | 7.000000 | 0.000000 | 9.000000 | 6.000000 | 8.000000 | 7.000000 | 4.000000 | 9.000000 | 6.000000 | 9.000000 | 7.000000 | 4.000000 | 4.000000 | 6.000000 | 8.000000 | 15.000000 | 2.000000 | 8.000000 | 6.000000 | 9.000000 | 15.000000 | 4.000000 | 8.000000 |
| **gen1/edge** |  |  |  | 0.000000 | 6.000000 | 6.000000 | 6.000000 | 11.000000 | 4.000000 | 7.000000 | 6.000000 | 6.000000 | 11.000000 | 0.000000 | 6.000000 | 7.000000 | 6.000000 | 11.000000 | 0.000000 | 1.000000 | 6.000000 | 6.000000 | 19.000000 | 4.000000 | 6.000000 | 7.000000 | 6.000000 | 19.000000 | 0.000000 | 7.000000 |
| **gen1/invalid** |  |  |  |  | 0.000000 | 3.000000 | 2.000000 | 15.000000 | 8.000000 | 3.000000 | 3.000000 | 2.000000 | 15.000000 | 6.000000 | 2.000000 | 4.000000 | 2.000000 | 15.000000 | 6.000000 | 7.000000 | 3.000000 | 2.000000 | 23.000000 | 8.000000 | 2.000000 | 4.000000 | 2.000000 | 23.000000 | 6.000000 | 3.000000 |
| **gen2/baseline** |  |  |  |  |  | 0.000000 | 2.000000 | 15.000000 | 7.000000 | 4.000000 | 1.000000 | 3.000000 | 13.000000 | 6.000000 | 2.000000 | 2.000000 | 2.000000 | 13.000000 | 6.000000 | 7.000000 | 1.000000 | 3.000000 | 21.000000 | 6.000000 | 3.000000 | 2.000000 | 2.000000 | 22.000000 | 6.000000 | 3.000000 |
| **gen2/boundary** |  |  |  |  |  |  | 0.000000 | 15.000000 | 9.000000 | 2.000000 | 3.000000 | 1.000000 | 15.000000 | 6.000000 | 0.000000 | 3.000000 | 0.000000 | 15.000000 | 6.000000 | 7.000000 | 3.000000 | 1.000000 | 24.000000 | 8.000000 | 1.000000 | 3.000000 | 0.000000 | 23.000000 | 6.000000 | 1.000000 |
| **gen2/complex** |  |  |  |  |  |  |  | 0.000000 | 7.000000 | 16.000000 | 13.000000 | 15.000000 | 0.000000 | 11.000000 | 15.000000 | 13.000000 | 15.000000 | 0.000000 | 11.000000 | 11.000000 | 13.000000 | 15.000000 | 8.000000 | 8.000000 | 15.000000 | 13.000000 | 15.000000 | 10.000000 | 11.000000 | 15.000000 |
| **gen2/edge** |  |  |  |  |  |  |  |  | 0.000000 | 9.000000 | 6.000000 | 8.000000 | 7.000000 | 4.000000 | 9.000000 | 6.000000 | 9.000000 | 7.000000 | 4.000000 | 4.000000 | 6.000000 | 8.000000 | 15.000000 | 2.000000 | 8.000000 | 6.000000 | 9.000000 | 15.000000 | 4.000000 | 8.000000 |
| **gen2/invalid** |  |  |  |  |  |  |  |  |  | 0.000000 | 3.000000 | 1.000000 | 16.000000 | 7.000000 | 2.000000 | 3.000000 | 2.000000 | 16.000000 | 7.000000 | 6.000000 | 3.000000 | 1.000000 | 24.000000 | 8.000000 | 1.000000 | 3.000000 | 2.000000 | 24.000000 | 7.000000 | 1.000000 |
| **gen3/baseline** |  |  |  |  |  |  |  |  |  |  | 0.000000 | 2.000000 | 13.000000 | 6.000000 | 3.000000 | 3.000000 | 3.000000 | 13.000000 | 6.000000 | 7.000000 | 0.000000 | 2.000000 | 21.000000 | 7.000000 | 2.000000 | 3.000000 | 3.000000 | 21.000000 | 6.000000 | 4.000000 |
| **gen3/boundary** |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 15.000000 | 6.000000 | 1.000000 | 4.000000 | 1.000000 | 15.000000 | 6.000000 | 7.000000 | 2.000000 | 0.000000 | 23.000000 | 9.000000 | 0.000000 | 4.000000 | 1.000000 | 23.000000 | 6.000000 | 2.000000 |
| **gen3/complex** |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 11.000000 | 15.000000 | 13.000000 | 15.000000 | 0.000000 | 11.000000 | 11.000000 | 13.000000 | 15.000000 | 8.000000 | 8.000000 | 15.000000 | 13.000000 | 15.000000 | 9.000000 | 11.000000 | 15.000000 |
| **gen3/edge** |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 6.000000 | 7.000000 | 6.000000 | 11.000000 | 0.000000 | 1.000000 | 6.000000 | 6.000000 | 19.000000 | 4.000000 | 6.000000 | 7.000000 | 6.000000 | 19.000000 | 0.000000 | 7.000000 |
| **gen3/invalid** |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 3.000000 | 0.000000 | 15.000000 | 6.000000 | 7.000000 | 3.000000 | 1.000000 | 24.000000 | 8.000000 | 1.000000 | 3.000000 | 0.000000 | 23.000000 | 6.000000 | 1.000000 |
| **gen4/baseline** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 3.000000 | 13.000000 | 7.000000 | 6.000000 | 3.000000 | 4.000000 | 21.000000 | 7.000000 | 4.000000 | 0.000000 | 3.000000 | 21.000000 | 7.000000 | 2.000000 |
| **gen4/boundary** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 15.000000 | 6.000000 | 7.000000 | 3.000000 | 1.000000 | 24.000000 | 8.000000 | 1.000000 | 3.000000 | 0.000000 | 23.000000 | 6.000000 | 1.000000 |
| **gen4/complex** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 11.000000 | 11.000000 | 13.000000 | 15.000000 | 8.000000 | 8.000000 | 15.000000 | 13.000000 | 15.000000 | 9.000000 | 11.000000 | 15.000000 |
| **gen4/edge** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 1.000000 | 6.000000 | 6.000000 | 19.000000 | 4.000000 | 6.000000 | 7.000000 | 6.000000 | 19.000000 | 0.000000 | 7.000000 |
| **gen4/invalid** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 7.000000 | 7.000000 | 19.000000 | 4.000000 | 7.000000 | 6.000000 | 7.000000 | 19.000000 | 1.000000 | 6.000000 |
| **gen5/baseline** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 2.000000 | 21.000000 | 7.000000 | 2.000000 | 3.000000 | 3.000000 | 21.000000 | 6.000000 | 4.000000 |
| **gen5/boundary** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 23.000000 | 9.000000 | 0.000000 | 4.000000 | 1.000000 | 23.000000 | 6.000000 | 2.000000 |
| **gen5/complex** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 16.000000 | 23.000000 | 21.000000 | 24.000000 | 2.000000 | 19.000000 | 23.000000 |
| **gen5/edge** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 9.000000 | 7.000000 | 8.000000 | 16.000000 | 4.000000 | 9.000000 |
| **gen5/invalid** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 4.000000 | 1.000000 | 23.000000 | 6.000000 | 2.000000 |
| **gen6/baseline** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 3.000000 | 21.000000 | 7.000000 | 2.000000 |
| **gen6/boundary** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 23.000000 | 6.000000 | 1.000000 |
| **gen6/complex** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 19.000000 | 23.000000 |
| **gen6/edge** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 7.000000 |
| **gen6/invalid** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 |

# GED bound interval table

A single value is exact; `[lower, upper]` is the certified interval.

|       | gen1/baseline | gen1/boundary | gen1/complex | gen1/edge | gen1/invalid | gen2/baseline | gen2/boundary | gen2/complex | gen2/edge | gen2/invalid | gen3/baseline | gen3/boundary | gen3/complex | gen3/edge | gen3/invalid | gen4/baseline | gen4/boundary | gen4/complex | gen4/edge | gen4/invalid | gen5/baseline | gen5/boundary | gen5/complex | gen5/edge | gen5/invalid | gen6/baseline | gen6/boundary | gen6/complex | gen6/edge | gen6/invalid |
|-------|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **gen1/baseline** | 0.000000 | 0.000000 | 8.000000 | 6.000000 | 2.000000 | 3.000000 | 1.000000 | 15.000000 | 8.000000 | 1.000000 | 2.000000 | 0.000000 | 15.000000 | 6.000000 | 1.000000 | 4.000000 | 1.000000 | 15.000000 | 6.000000 | 7.000000 | 2.000000 | 0.000000 | 23.000000 | [8.000000, 9.000000] | 0.000000 | 4.000000 | 1.000000 | 23.000000 | 6.000000 | 2.000000 |
| **gen1/boundary** |  | 0.000000 | 8.000000 | 6.000000 | 2.000000 | 3.000000 | 1.000000 | 15.000000 | 8.000000 | 1.000000 | 2.000000 | 0.000000 | 15.000000 | 6.000000 | 1.000000 | 4.000000 | 1.000000 | 15.000000 | 6.000000 | 7.000000 | 2.000000 | 0.000000 | 23.000000 | [8.000000, 9.000000] | 0.000000 | 4.000000 | 1.000000 | 23.000000 | 6.000000 | 2.000000 |
| **gen1/complex** |  |  | 0.000000 | [3.000000, 4.000000] | [7.000000, 8.000000] | [6.000000, 7.000000] | [8.000000, 9.000000] | 7.000000 | 0.000000 | [8.000000, 9.000000] | 6.000000 | 8.000000 | 7.000000 | [3.000000, 4.000000] | [8.000000, 9.000000] | 6.000000 | [8.000000, 9.000000] | 7.000000 | [3.000000, 4.000000] | [3.000000, 4.000000] | 6.000000 | 8.000000 | 15.000000 | [0.000000, 2.000000] | 8.000000 | 6.000000 | [8.000000, 9.000000] | 15.000000 | [3.000000, 4.000000] | 8.000000 |
| **gen1/edge** |  |  |  | 0.000000 | [5.000000, 6.000000] | 6.000000 | 6.000000 | [10.000000, 11.000000] | [3.000000, 4.000000] | 7.000000 | 6.000000 | 6.000000 | [10.000000, 11.000000] | 0.000000 | 6.000000 | [6.000000, 7.000000] | 6.000000 | [10.000000, 11.000000] | 0.000000 | 1.000000 | 6.000000 | 6.000000 | [18.000000, 19.000000] | [3.000000, 4.000000] | 6.000000 | [6.000000, 7.000000] | 6.000000 | [18.000000, 19.000000] | 0.000000 | 7.000000 |
| **gen1/invalid** |  |  |  |  | 0.000000 | [2.500000, 3.000000] | 2.000000 | [14.000000, 15.000000] | [7.000000, 8.000000] | 3.000000 | [2.500000, 3.000000] | 2.000000 | [14.000000, 15.000000] | [5.000000, 6.000000] | 2.000000 | [3.500000, 4.000000] | 2.000000 | [14.000000, 15.000000] | [5.000000, 6.000000] | [6.000000, 7.000000] | [2.500000, 3.000000] | 2.000000 | [22.000000, 23.000000] | [7.000000, 8.000000] | 2.000000 | [3.500000, 4.000000] | 2.000000 | [22.000000, 23.000000] | [5.000000, 6.000000] | 3.000000 |
| **gen2/baseline** |  |  |  |  |  | 0.000000 | 2.000000 | [13.000000, 15.000000] | [6.000000, 7.000000] | 4.000000 | 1.000000 | 3.000000 | 13.000000 | 6.000000 | 2.000000 | [1.000000, 2.000000] | 2.000000 | 13.000000 | 6.000000 | [6.000000, 7.000000] | 1.000000 | 3.000000 | 21.000000 | 6.000000 | 3.000000 | [1.000000, 2.000000] | 2.000000 | [21.000000, 22.000000] | 6.000000 | 3.000000 |
| **gen2/boundary** |  |  |  |  |  |  | 0.000000 | 15.000000 | [8.000000, 9.000000] | 2.000000 | 3.000000 | 1.000000 | 15.000000 | 6.000000 | 0.000000 | 3.000000 | 0.000000 | 15.000000 | 6.000000 | 7.000000 | 3.000000 | 1.000000 | [23.000000, 24.000000] | 8.000000 | 1.000000 | 3.000000 | 0.000000 | 23.000000 | 6.000000 | 1.000000 |
| **gen2/complex** |  |  |  |  |  |  |  | 0.000000 | 7.000000 | [15.000000, 16.000000] | 13.000000 | 15.000000 | 0.000000 | [10.000000, 11.000000] | 15.000000 | 13.000000 | 15.000000 | 0.000000 | [10.000000, 11.000000] | [10.000000, 11.000000] | 13.000000 | 15.000000 | 8.000000 | [7.000000, 8.000000] | 15.000000 | 13.000000 | 15.000000 | [8.000000, 10.000000] | [10.000000, 11.000000] | 15.000000 |
| **gen2/edge** |  |  |  |  |  |  |  |  | 0.000000 | [8.000000, 9.000000] | 6.000000 | 8.000000 | 7.000000 | [3.000000, 4.000000] | [8.000000, 9.000000] | 6.000000 | [8.000000, 9.000000] | 7.000000 | [3.000000, 4.000000] | [3.000000, 4.000000] | 6.000000 | 8.000000 | 15.000000 | [0.000000, 2.000000] | 8.000000 | 6.000000 | [8.000000, 9.000000] | 15.000000 | [3.000000, 4.000000] | 8.000000 |
| **gen2/invalid** |  |  |  |  |  |  |  |  |  | 0.000000 | 3.000000 | 1.000000 | [15.000000, 16.000000] | 7.000000 | 2.000000 | 3.000000 | 2.000000 | [15.000000, 16.000000] | 7.000000 | 6.000000 | 3.000000 | 1.000000 | [23.000000, 24.000000] | 8.000000 | 1.000000 | 3.000000 | 2.000000 | [23.000000, 24.000000] | 7.000000 | 1.000000 |
| **gen3/baseline** |  |  |  |  |  |  |  |  |  |  | 0.000000 | 2.000000 | 13.000000 | 6.000000 | 3.000000 | [2.000000, 3.000000] | 3.000000 | 13.000000 | 6.000000 | [6.000000, 7.000000] | 0.000000 | 2.000000 | 21.000000 | [6.000000, 7.000000] | 2.000000 | [2.000000, 3.000000] | 3.000000 | 21.000000 | 6.000000 | 4.000000 |
| **gen3/boundary** |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 15.000000 | 6.000000 | 1.000000 | 4.000000 | 1.000000 | 15.000000 | 6.000000 | 7.000000 | 2.000000 | 0.000000 | 23.000000 | [8.000000, 9.000000] | 0.000000 | 4.000000 | 1.000000 | 23.000000 | 6.000000 | 2.000000 |
| **gen3/complex** |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | [10.000000, 11.000000] | 15.000000 | 13.000000 | 15.000000 | 0.000000 | [10.000000, 11.000000] | [10.000000, 11.000000] | 13.000000 | 15.000000 | 8.000000 | [7.000000, 8.000000] | 15.000000 | 13.000000 | 15.000000 | [8.000000, 9.000000] | [10.000000, 11.000000] | 15.000000 |
| **gen3/edge** |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 6.000000 | [6.000000, 7.000000] | 6.000000 | [10.000000, 11.000000] | 0.000000 | 1.000000 | 6.000000 | 6.000000 | [18.000000, 19.000000] | [3.000000, 4.000000] | 6.000000 | [6.000000, 7.000000] | 6.000000 | [18.000000, 19.000000] | 0.000000 | 7.000000 |
| **gen3/invalid** |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 3.000000 | 0.000000 | 15.000000 | 6.000000 | 7.000000 | 3.000000 | 1.000000 | [23.000000, 24.000000] | 8.000000 | 1.000000 | 3.000000 | 0.000000 | 23.000000 | 6.000000 | 1.000000 |
| **gen4/baseline** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 3.000000 | 13.000000 | [6.000000, 7.000000] | 6.000000 | [2.000000, 3.000000] | 4.000000 | 21.000000 | [6.000000, 7.000000] | 4.000000 | 0.000000 | 3.000000 | 21.000000 | [6.000000, 7.000000] | 2.000000 |
| **gen4/boundary** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 15.000000 | 6.000000 | 7.000000 | 3.000000 | 1.000000 | [23.000000, 24.000000] | 8.000000 | 1.000000 | 3.000000 | 0.000000 | 23.000000 | 6.000000 | 1.000000 |
| **gen4/complex** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | [10.000000, 11.000000] | [10.000000, 11.000000] | 13.000000 | 15.000000 | 8.000000 | [7.000000, 8.000000] | 15.000000 | 13.000000 | 15.000000 | [8.000000, 9.000000] | [10.000000, 11.000000] | 15.000000 |
| **gen4/edge** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 1.000000 | 6.000000 | 6.000000 | [18.000000, 19.000000] | [3.000000, 4.000000] | 6.000000 | [6.000000, 7.000000] | 6.000000 | [18.000000, 19.000000] | 0.000000 | 7.000000 |
| **gen4/invalid** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | [6.000000, 7.000000] | 7.000000 | [18.000000, 19.000000] | [3.000000, 4.000000] | 7.000000 | 6.000000 | 7.000000 | [18.000000, 19.000000] | 1.000000 | 6.000000 |
| **gen5/baseline** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 2.000000 | 21.000000 | [6.000000, 7.000000] | 2.000000 | [2.000000, 3.000000] | 3.000000 | 21.000000 | 6.000000 | 4.000000 |
| **gen5/boundary** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 23.000000 | [8.000000, 9.000000] | 0.000000 | 4.000000 | 1.000000 | 23.000000 | 6.000000 | 2.000000 |
| **gen5/complex** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | [15.000000, 16.000000] | 23.000000 | 21.000000 | [23.000000, 24.000000] | [0.000000, 2.000000] | [18.000000, 19.000000] | 23.000000 |
| **gen5/edge** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | [8.000000, 9.000000] | [6.000000, 7.000000] | 8.000000 | [15.000000, 16.000000] | [3.000000, 4.000000] | [8.000000, 9.000000] |
| **gen5/invalid** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 4.000000 | 1.000000 | 23.000000 | 6.000000 | 2.000000 |
| **gen6/baseline** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 3.000000 | 21.000000 | [6.000000, 7.000000] | 2.000000 |
| **gen6/boundary** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 23.000000 | 6.000000 | 1.000000 |
| **gen6/complex** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | [18.000000, 19.000000] | 23.000000 |
| **gen6/edge** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 7.000000 |
| **gen6/invalid** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 |

# Normalized GED diversity table

Diversity(A, B) = GED(A, B) / (GED(A, empty) + GED(B, empty)); the both-empty case is 0. Zero denotes identical labeled graphs, and higher values denote greater structural diversity.

|       | gen1/baseline | gen1/boundary | gen1/complex | gen1/edge | gen1/invalid | gen2/baseline | gen2/boundary | gen2/complex | gen2/edge | gen2/invalid | gen3/baseline | gen3/boundary | gen3/complex | gen3/edge | gen3/invalid | gen4/baseline | gen4/boundary | gen4/complex | gen4/edge | gen4/invalid | gen5/baseline | gen5/boundary | gen5/complex | gen5/edge | gen5/invalid | gen6/baseline | gen6/boundary | gen6/complex | gen6/edge | gen6/invalid |
|-------|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **gen1/baseline** | 0.000000 | 0.000000 | 0.307692 | 0.250000 | 0.100000 | 0.150000 | 0.055556 | 0.454545 | 0.307692 | 0.055556 | 0.100000 | 0.000000 | 0.454545 | 0.250000 | 0.055556 | 0.200000 | 0.055556 | 0.454545 | 0.250000 | 0.291667 | 0.100000 | 0.000000 | 0.560976 | 0.346154 | 0.000000 | 0.200000 | 0.055556 | 0.560976 | 0.250000 | 0.111111 |
| **gen1/boundary** |  | 0.000000 | 0.307692 | 0.250000 | 0.100000 | 0.150000 | 0.055556 | 0.454545 | 0.307692 | 0.055556 | 0.100000 | 0.000000 | 0.454545 | 0.250000 | 0.055556 | 0.200000 | 0.055556 | 0.454545 | 0.250000 | 0.291667 | 0.100000 | 0.000000 | 0.560976 | 0.346154 | 0.000000 | 0.200000 | 0.055556 | 0.560976 | 0.250000 | 0.111111 |
| **gen1/complex** |  |  | 0.000000 | 0.125000 | 0.285714 | 0.250000 | 0.346154 | 0.170732 | 0.000000 | 0.346154 | 0.214286 | 0.307692 | 0.170732 | 0.125000 | 0.346154 | 0.214286 | 0.346154 | 0.170732 | 0.125000 | 0.125000 | 0.214286 | 0.307692 | 0.306122 | 0.058824 | 0.307692 | 0.214286 | 0.346154 | 0.306122 | 0.125000 | 0.307692 |
| **gen1/edge** |  |  |  | 0.000000 | 0.230769 | 0.230769 | 0.250000 | 0.282051 | 0.125000 | 0.291667 | 0.230769 | 0.250000 | 0.282051 | 0.000000 | 0.250000 | 0.269231 | 0.250000 | 0.282051 | 0.000000 | 0.033333 | 0.230769 | 0.250000 | 0.404255 | 0.125000 | 0.250000 | 0.269231 | 0.250000 | 0.404255 | 0.000000 | 0.291667 |
| **gen1/invalid** |  |  |  |  | 0.000000 | 0.136364 | 0.100000 | 0.428571 | 0.285714 | 0.150000 | 0.136364 | 0.100000 | 0.428571 | 0.230769 | 0.100000 | 0.181818 | 0.100000 | 0.428571 | 0.230769 | 0.269231 | 0.136364 | 0.100000 | 0.534884 | 0.285714 | 0.100000 | 0.181818 | 0.100000 | 0.534884 | 0.230769 | 0.150000 |
| **gen2/baseline** |  |  |  |  |  | 0.000000 | 0.100000 | 0.428571 | 0.250000 | 0.200000 | 0.045455 | 0.150000 | 0.371429 | 0.230769 | 0.100000 | 0.090909 | 0.100000 | 0.371429 | 0.230769 | 0.269231 | 0.045455 | 0.150000 | 0.488372 | 0.214286 | 0.150000 | 0.090909 | 0.100000 | 0.511628 | 0.230769 | 0.150000 |
| **gen2/boundary** |  |  |  |  |  |  | 0.000000 | 0.454545 | 0.346154 | 0.111111 | 0.150000 | 0.055556 | 0.454545 | 0.250000 | 0.000000 | 0.150000 | 0.000000 | 0.454545 | 0.250000 | 0.291667 | 0.150000 | 0.055556 | 0.585366 | 0.307692 | 0.055556 | 0.150000 | 0.000000 | 0.560976 | 0.250000 | 0.055556 |
| **gen2/complex** |  |  |  |  |  |  |  | 0.000000 | 0.170732 | 0.484848 | 0.371429 | 0.454545 | 0.000000 | 0.282051 | 0.454545 | 0.371429 | 0.454545 | 0.000000 | 0.282051 | 0.282051 | 0.371429 | 0.454545 | 0.142857 | 0.195122 | 0.454545 | 0.371429 | 0.454545 | 0.178571 | 0.282051 | 0.454545 |
| **gen2/edge** |  |  |  |  |  |  |  |  | 0.000000 | 0.346154 | 0.214286 | 0.307692 | 0.170732 | 0.125000 | 0.346154 | 0.214286 | 0.346154 | 0.170732 | 0.125000 | 0.125000 | 0.214286 | 0.307692 | 0.306122 | 0.058824 | 0.307692 | 0.214286 | 0.346154 | 0.306122 | 0.125000 | 0.307692 |
| **gen2/invalid** |  |  |  |  |  |  |  |  |  | 0.000000 | 0.150000 | 0.055556 | 0.484848 | 0.291667 | 0.111111 | 0.150000 | 0.111111 | 0.484848 | 0.291667 | 0.250000 | 0.150000 | 0.055556 | 0.585366 | 0.307692 | 0.055556 | 0.150000 | 0.111111 | 0.585366 | 0.291667 | 0.055556 |
| **gen3/baseline** |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.100000 | 0.371429 | 0.230769 | 0.150000 | 0.136364 | 0.150000 | 0.371429 | 0.230769 | 0.269231 | 0.000000 | 0.100000 | 0.488372 | 0.250000 | 0.100000 | 0.136364 | 0.150000 | 0.488372 | 0.230769 | 0.200000 |
| **gen3/boundary** |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.454545 | 0.250000 | 0.055556 | 0.200000 | 0.055556 | 0.454545 | 0.250000 | 0.291667 | 0.100000 | 0.000000 | 0.560976 | 0.346154 | 0.000000 | 0.200000 | 0.055556 | 0.560976 | 0.250000 | 0.111111 |
| **gen3/complex** |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.282051 | 0.454545 | 0.371429 | 0.454545 | 0.000000 | 0.282051 | 0.282051 | 0.371429 | 0.454545 | 0.142857 | 0.195122 | 0.454545 | 0.371429 | 0.454545 | 0.160714 | 0.282051 | 0.454545 |
| **gen3/edge** |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.250000 | 0.269231 | 0.250000 | 0.282051 | 0.000000 | 0.033333 | 0.230769 | 0.250000 | 0.404255 | 0.125000 | 0.250000 | 0.269231 | 0.250000 | 0.404255 | 0.000000 | 0.291667 |
| **gen3/invalid** |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.150000 | 0.000000 | 0.454545 | 0.250000 | 0.291667 | 0.150000 | 0.055556 | 0.585366 | 0.307692 | 0.055556 | 0.150000 | 0.000000 | 0.560976 | 0.250000 | 0.055556 |
| **gen4/baseline** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.150000 | 0.371429 | 0.269231 | 0.230769 | 0.136364 | 0.200000 | 0.488372 | 0.250000 | 0.200000 | 0.000000 | 0.150000 | 0.488372 | 0.269231 | 0.100000 |
| **gen4/boundary** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.454545 | 0.250000 | 0.291667 | 0.150000 | 0.055556 | 0.585366 | 0.307692 | 0.055556 | 0.150000 | 0.000000 | 0.560976 | 0.250000 | 0.055556 |
| **gen4/complex** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.282051 | 0.282051 | 0.371429 | 0.454545 | 0.142857 | 0.195122 | 0.454545 | 0.371429 | 0.454545 | 0.160714 | 0.282051 | 0.454545 |
| **gen4/edge** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.033333 | 0.230769 | 0.250000 | 0.404255 | 0.125000 | 0.250000 | 0.269231 | 0.250000 | 0.404255 | 0.000000 | 0.291667 |
| **gen4/invalid** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.269231 | 0.291667 | 0.404255 | 0.125000 | 0.291667 | 0.230769 | 0.291667 | 0.404255 | 0.033333 | 0.250000 |
| **gen5/baseline** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.100000 | 0.488372 | 0.250000 | 0.100000 | 0.136364 | 0.150000 | 0.488372 | 0.230769 | 0.200000 |
| **gen5/boundary** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.560976 | 0.346154 | 0.000000 | 0.200000 | 0.055556 | 0.560976 | 0.250000 | 0.111111 |
| **gen5/complex** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.326531 | 0.560976 | 0.488372 | 0.585366 | 0.031250 | 0.404255 | 0.560976 |
| **gen5/edge** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.346154 | 0.250000 | 0.307692 | 0.326531 | 0.125000 | 0.346154 |
| **gen5/invalid** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.200000 | 0.055556 | 0.560976 | 0.250000 | 0.111111 |
| **gen6/baseline** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.150000 | 0.488372 | 0.269231 | 0.100000 |
| **gen6/boundary** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.560976 | 0.250000 | 0.055556 |
| **gen6/complex** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.404255 | 0.560976 |
| **gen6/edge** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.291667 |
| **gen6/invalid** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 |

# Result status table

|       | gen1/baseline | gen1/boundary | gen1/complex | gen1/edge | gen1/invalid | gen2/baseline | gen2/boundary | gen2/complex | gen2/edge | gen2/invalid | gen3/baseline | gen3/boundary | gen3/complex | gen3/edge | gen3/invalid | gen4/baseline | gen4/boundary | gen4/complex | gen4/edge | gen4/invalid | gen5/baseline | gen5/boundary | gen5/complex | gen5/edge | gen5/invalid | gen6/baseline | gen6/boundary | gen6/complex | gen6/edge | gen6/invalid |
|-------|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **gen1/baseline** | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | bounded | exact | exact | exact | exact | exact | exact |
| **gen1/boundary** |  | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | bounded | exact | exact | exact | exact | exact | exact |
| **gen1/complex** |  |  | exact | bounded | bounded | bounded | bounded | exact | exact | bounded | exact | exact | exact | bounded | bounded | exact | bounded | exact | bounded | bounded | exact | exact | exact | bounded | exact | exact | bounded | exact | bounded | exact |
| **gen1/edge** |  |  |  | exact | bounded | exact | exact | bounded | bounded | exact | exact | exact | bounded | exact | exact | bounded | exact | bounded | exact | exact | exact | exact | bounded | bounded | exact | bounded | exact | bounded | exact | exact |
| **gen1/invalid** |  |  |  |  | exact | bounded | exact | bounded | bounded | exact | bounded | exact | bounded | bounded | exact | bounded | exact | bounded | bounded | bounded | bounded | exact | bounded | bounded | exact | bounded | exact | bounded | bounded | exact |
| **gen2/baseline** |  |  |  |  |  | exact | exact | bounded | bounded | exact | exact | exact | exact | exact | exact | bounded | exact | exact | exact | bounded | exact | exact | exact | exact | exact | bounded | exact | bounded | exact | exact |
| **gen2/boundary** |  |  |  |  |  |  | exact | exact | bounded | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | bounded | exact | exact | exact | exact | exact | exact | exact |
| **gen2/complex** |  |  |  |  |  |  |  | exact | exact | bounded | exact | exact | exact | bounded | exact | exact | exact | exact | bounded | bounded | exact | exact | exact | bounded | exact | exact | exact | bounded | bounded | exact |
| **gen2/edge** |  |  |  |  |  |  |  |  | exact | bounded | exact | exact | exact | bounded | bounded | exact | bounded | exact | bounded | bounded | exact | exact | exact | bounded | exact | exact | bounded | exact | bounded | exact |
| **gen2/invalid** |  |  |  |  |  |  |  |  |  | exact | exact | exact | bounded | exact | exact | exact | exact | bounded | exact | exact | exact | exact | bounded | exact | exact | exact | exact | bounded | exact | exact |
| **gen3/baseline** |  |  |  |  |  |  |  |  |  |  | exact | exact | exact | exact | exact | bounded | exact | exact | exact | bounded | exact | exact | exact | bounded | exact | bounded | exact | exact | exact | exact |
| **gen3/boundary** |  |  |  |  |  |  |  |  |  |  |  | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | bounded | exact | exact | exact | exact | exact | exact |
| **gen3/complex** |  |  |  |  |  |  |  |  |  |  |  |  | exact | bounded | exact | exact | exact | exact | bounded | bounded | exact | exact | exact | bounded | exact | exact | exact | bounded | bounded | exact |
| **gen3/edge** |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | bounded | exact | bounded | exact | exact | exact | exact | bounded | bounded | exact | bounded | exact | bounded | exact | exact |
| **gen3/invalid** |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | exact | exact | exact | exact | exact | exact | bounded | exact | exact | exact | exact | exact | exact | exact |
| **gen4/baseline** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | exact | bounded | exact | bounded | exact | exact | bounded | exact | exact | exact | exact | bounded | exact |
| **gen4/boundary** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | exact | exact | exact | exact | bounded | exact | exact | exact | exact | exact | exact | exact |
| **gen4/complex** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | bounded | bounded | exact | exact | exact | bounded | exact | exact | exact | bounded | bounded | exact |
| **gen4/edge** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | exact | exact | bounded | bounded | exact | bounded | exact | bounded | exact | exact |
| **gen4/invalid** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | bounded | exact | bounded | bounded | exact | exact | exact | bounded | exact | exact |
| **gen5/baseline** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | exact | bounded | exact | bounded | exact | exact | exact | exact |
| **gen5/boundary** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | bounded | exact | exact | exact | exact | exact | exact |
| **gen5/complex** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | bounded | exact | exact | bounded | bounded | bounded | exact |
| **gen5/edge** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | bounded | bounded | exact | bounded | bounded | bounded |
| **gen5/invalid** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | exact | exact | exact | exact |
| **gen6/baseline** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | exact | bounded | exact |
| **gen6/boundary** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact | exact | exact |
| **gen6/complex** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | bounded | exact |
| **gen6/edge** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact | exact |
| **gen6/invalid** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | exact |

Pairs: 435; exact pairs: 316; bounded pairs: 119; mean relative gap: 4.35%; max relative gap: 100.00%; invalid files: 0.
