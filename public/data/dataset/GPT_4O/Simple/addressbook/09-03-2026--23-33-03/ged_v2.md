# Adjacency, edges, and labels

```text
Adj-gen1/output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 0, 1, 0, 1, 0], [1, 0, 0, 0, 0, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 1, 0, 1, 0, 1], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0]]

Labels-gen1/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Note', 6: 'Address', 7: 'Address', 8: 'Relationship', 9: 'Relationship'}

Edges-gen1/output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (1, 4, 'ContactContainsNote'), (3, 5, 'ContactContainsNote'), (1, 8, 'ContactToRelationship'), (8, 2, 'RelationshipToContact'), (2, 9, 'ContactToRelationship'), (9, 3, 'RelationshipToContact'), (1, 6, 'ContactContainsAddress'), (3, 7, 'ContactContainsAddress')]

Adj-gen2/output.soil: [[0, 1, 1, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 1, 1], [1, 0, 0, 1, 1, 0, 1, 1], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0]]

Labels-gen2/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Note', 4: 'Note', 5: 'Address', 6: 'Relationship', 7: 'Relationship'}

Edges-gen2/output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (2, 3, 'ContactContainsNote'), (2, 4, 'ContactContainsNote'), (1, 6, 'ContactToRelationship'), (6, 2, 'RelationshipToContact'), (2, 7, 'ContactToRelationship'), (7, 1, 'RelationshipToContact'), (1, 5, 'ContactContainsAddress')]

Adj-gen3/output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 1, 0, 1, 1, 0], [1, 0, 0, 0, 0, 0, 0, 1, 1], [0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0], [0, 1, 0, 1, 0, 0, 0, 0, 0]]

Labels-gen3/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Address', 6: 'Address', 7: 'Relationship', 8: 'Relationship'}

Edges-gen3/output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (2, 4, 'ContactContainsNote'), (1, 8, 'ContactToRelationship'), (8, 3, 'RelationshipToContact'), (3, 7, 'ContactToRelationship'), (7, 2, 'RelationshipToContact'), (1, 5, 'ContactContainsAddress'), (2, 6, 'ContactContainsAddress')]

Adj-gen4/output.soil: [[0, 1, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 1], [1, 0, 0, 1, 1, 0, 1], [0, 0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0]]

Labels-gen4/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Note', 4: 'Note', 5: 'Address', 6: 'Relationship'}

Edges-gen4/output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (2, 3, 'ContactContainsNote'), (2, 4, 'ContactContainsNote'), (1, 6, 'ContactToRelationship'), (6, 2, 'RelationshipToContact'), (1, 5, 'ContactContainsAddress')]

Adj-gen5/output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1, 1], [1, 0, 0, 0, 1, 0, 1, 1, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0]]

Labels-gen5/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Address', 6: 'Address', 7: 'Relationship', 8: 'Relationship'}

Edges-gen5/output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (3, 4, 'ContactContainsNote'), (2, 7, 'ContactToRelationship'), (7, 3, 'RelationshipToContact'), (1, 8, 'ContactToRelationship'), (8, 2, 'RelationshipToContact'), (1, 5, 'ContactContainsAddress'), (3, 6, 'ContactContainsAddress')]

Adj-gen6/output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 1, 0], [1, 0, 0, 0, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 1, 0, 1, 0, 1], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0]]

Labels-gen6/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Note', 6: 'Address', 7: 'Address', 8: 'Relationship', 9: 'Relationship'}

Edges-gen6/output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (2, 4, 'ContactContainsNote'), (3, 5, 'ContactContainsNote'), (1, 8, 'ContactToRelationship'), (8, 2, 'RelationshipToContact'), (2, 9, 'ContactToRelationship'), (9, 3, 'RelationshipToContact'), (1, 6, 'ContactContainsAddress'), (3, 7, 'ContactContainsAddress')]

Adj-gen7/output.soil: [[0, 1, 1, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 0, 1, 1], [1, 0, 0, 1, 0, 1, 1, 1], [0, 0, 1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0]]

Labels-gen7/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Note', 4: 'Address', 5: 'Address', 6: 'Relationship', 7: 'Relationship'}

Edges-gen7/output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (2, 3, 'ContactContainsNote'), (1, 7, 'ContactToRelationship'), (7, 2, 'RelationshipToContact'), (2, 6, 'ContactToRelationship'), (6, 1, 'RelationshipToContact'), (1, 4, 'ContactContainsAddress'), (2, 5, 'ContactContainsAddress')]

Adj-gen8/output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 1, 0, 1, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen8/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Note', 6: 'Address', 7: 'Address', 8: 'Relationship', 9: 'Relationship'}

Edges-gen8/output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (2, 4, 'ContactContainsNote'), (3, 5, 'ContactContainsNote'), (1, 9, 'ContactToRelationship'), (9, 2, 'RelationshipToContact'), (2, 8, 'ContactToRelationship'), (8, 3, 'RelationshipToContact'), (1, 6, 'ContactContainsAddress'), (3, 7, 'ContactContainsAddress')]

Adj-gen9/output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 1, 0, 1, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen9/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Note', 6: 'Address', 7: 'Address', 8: 'Relationship', 9: 'Relationship'}

Edges-gen9/output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (2, 4, 'ContactContainsNote'), (3, 5, 'ContactContainsNote'), (1, 9, 'ContactToRelationship'), (9, 2, 'RelationshipToContact'), (3, 8, 'ContactToRelationship'), (8, 2, 'RelationshipToContact'), (1, 6, 'ContactContainsAddress'), (3, 7, 'ContactContainsAddress')]

Adj-gen10/output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 1, 0], [1, 0, 0, 0, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 1, 0, 1, 0, 1], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0]]

Labels-gen10/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Note', 6: 'Address', 7: 'Address', 8: 'Relationship', 9: 'Relationship'}

Edges-gen10/output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (2, 4, 'ContactContainsNote'), (3, 5, 'ContactContainsNote'), (1, 8, 'ContactToRelationship'), (8, 2, 'RelationshipToContact'), (2, 9, 'ContactToRelationship'), (9, 3, 'RelationshipToContact'), (1, 6, 'ContactContainsAddress'), (3, 7, 'ContactContainsAddress')]

Adj-gen11/output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 1, 0], [1, 0, 0, 0, 0, 1, 0, 0, 1, 1], [1, 0, 0, 0, 1, 0, 0, 1, 0, 1], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0]]

Labels-gen11/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Note', 6: 'Address', 7: 'Address', 8: 'Relationship', 9: 'Relationship'}

Edges-gen11/output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (3, 4, 'ContactContainsNote'), (2, 5, 'ContactContainsNote'), (1, 8, 'ContactToRelationship'), (8, 2, 'RelationshipToContact'), (2, 9, 'ContactToRelationship'), (9, 3, 'RelationshipToContact'), (1, 6, 'ContactContainsAddress'), (3, 7, 'ContactContainsAddress')]

Adj-gen12/output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 1, 0, 1, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen12/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Note', 6: 'Address', 7: 'Address', 8: 'Relationship', 9: 'Relationship'}

Edges-gen12/output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (2, 4, 'ContactContainsNote'), (3, 5, 'ContactContainsNote'), (1, 9, 'ContactToRelationship'), (9, 2, 'RelationshipToContact'), (2, 8, 'ContactToRelationship'), (8, 3, 'RelationshipToContact'), (1, 6, 'ContactContainsAddress'), (3, 7, 'ContactContainsAddress')]

Adj-gen13/output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 1, 0, 1, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen13/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Note', 6: 'Address', 7: 'Address', 8: 'Relationship', 9: 'Relationship'}

Edges-gen13/output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (2, 4, 'ContactContainsNote'), (3, 5, 'ContactContainsNote'), (1, 9, 'ContactToRelationship'), (9, 2, 'RelationshipToContact'), (2, 8, 'ContactToRelationship'), (8, 3, 'RelationshipToContact'), (1, 6, 'ContactContainsAddress'), (3, 7, 'ContactContainsAddress')]

Adj-gen14/output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 1, 0, 1, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen14/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Note', 6: 'Address', 7: 'Address', 8: 'Relationship', 9: 'Relationship'}

Edges-gen14/output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (2, 4, 'ContactContainsNote'), (3, 5, 'ContactContainsNote'), (1, 9, 'ContactToRelationship'), (9, 2, 'RelationshipToContact'), (2, 8, 'ContactToRelationship'), (8, 3, 'RelationshipToContact'), (1, 6, 'ContactContainsAddress'), (3, 7, 'ContactContainsAddress')]

Adj-gen15/output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 1, 0], [1, 0, 0, 0, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 1, 0, 1, 0, 1], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0]]

Labels-gen15/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Note', 6: 'Address', 7: 'Address', 8: 'Relationship', 9: 'Relationship'}

Edges-gen15/output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (2, 4, 'ContactContainsNote'), (3, 5, 'ContactContainsNote'), (1, 8, 'ContactToRelationship'), (8, 2, 'RelationshipToContact'), (2, 9, 'ContactToRelationship'), (9, 3, 'RelationshipToContact'), (1, 6, 'ContactContainsAddress'), (3, 7, 'ContactContainsAddress')]

Adj-gen16/output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 1, 0, 1, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen16/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Note', 6: 'Address', 7: 'Address', 8: 'Relationship', 9: 'Relationship'}

Edges-gen16/output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (2, 4, 'ContactContainsNote'), (3, 5, 'ContactContainsNote'), (1, 9, 'ContactToRelationship'), (9, 2, 'RelationshipToContact'), (2, 8, 'ContactToRelationship'), (8, 3, 'RelationshipToContact'), (1, 6, 'ContactContainsAddress'), (3, 7, 'ContactContainsAddress')]

Adj-gen17/output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 1, 0, 1, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen17/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Note', 6: 'Address', 7: 'Address', 8: 'Relationship', 9: 'Relationship'}

Edges-gen17/output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (2, 4, 'ContactContainsNote'), (3, 5, 'ContactContainsNote'), (1, 9, 'ContactToRelationship'), (9, 2, 'RelationshipToContact'), (2, 8, 'ContactToRelationship'), (8, 3, 'RelationshipToContact'), (1, 6, 'ContactContainsAddress'), (3, 7, 'ContactContainsAddress')]

Adj-gen18/output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 1, 0], [1, 0, 0, 0, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 1, 0, 1, 0, 1], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0]]

Labels-gen18/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Note', 6: 'Address', 7: 'Address', 8: 'Relationship', 9: 'Relationship'}

Edges-gen18/output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (2, 4, 'ContactContainsNote'), (3, 5, 'ContactContainsNote'), (1, 8, 'ContactToRelationship'), (8, 2, 'RelationshipToContact'), (2, 9, 'ContactToRelationship'), (9, 3, 'RelationshipToContact'), (1, 6, 'ContactContainsAddress'), (3, 7, 'ContactContainsAddress')]

Adj-gen19/output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 1, 0, 1, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen19/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Note', 6: 'Address', 7: 'Address', 8: 'Relationship', 9: 'Relationship'}

Edges-gen19/output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (2, 4, 'ContactContainsNote'), (3, 5, 'ContactContainsNote'), (1, 9, 'ContactToRelationship'), (9, 2, 'RelationshipToContact'), (2, 8, 'ContactToRelationship'), (8, 3, 'RelationshipToContact'), (1, 6, 'ContactContainsAddress'), (3, 7, 'ContactContainsAddress')]

Adj-gen20/output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 1, 0], [1, 0, 0, 0, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 1, 0, 1, 0, 1], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0]]

Labels-gen20/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Note', 6: 'Address', 7: 'Address', 8: 'Relationship', 9: 'Relationship'}

Edges-gen20/output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (2, 4, 'ContactContainsNote'), (3, 5, 'ContactContainsNote'), (1, 8, 'ContactToRelationship'), (8, 2, 'RelationshipToContact'), (2, 9, 'ContactToRelationship'), (9, 3, 'RelationshipToContact'), (1, 6, 'ContactContainsAddress'), (3, 7, 'ContactContainsAddress')]

Adj-gen21/output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 1, 0, 1, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen21/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Note', 6: 'Address', 7: 'Address', 8: 'Relationship', 9: 'Relationship'}

Edges-gen21/output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (2, 4, 'ContactContainsNote'), (3, 5, 'ContactContainsNote'), (1, 9, 'ContactToRelationship'), (9, 2, 'RelationshipToContact'), (2, 8, 'ContactToRelationship'), (8, 3, 'RelationshipToContact'), (1, 6, 'ContactContainsAddress'), (3, 7, 'ContactContainsAddress')]

Adj-gen22/output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 1, 0], [1, 0, 0, 0, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 1, 0, 1, 0, 1], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0]]

Labels-gen22/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Note', 6: 'Address', 7: 'Address', 8: 'Relationship', 9: 'Relationship'}

Edges-gen22/output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (2, 4, 'ContactContainsNote'), (3, 5, 'ContactContainsNote'), (1, 8, 'ContactToRelationship'), (8, 2, 'RelationshipToContact'), (2, 9, 'ContactToRelationship'), (9, 3, 'RelationshipToContact'), (1, 6, 'ContactContainsAddress'), (3, 7, 'ContactContainsAddress')]

Adj-gen23/output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 1, 0, 1, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen23/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Note', 6: 'Address', 7: 'Address', 8: 'Relationship', 9: 'Relationship'}

Edges-gen23/output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (2, 4, 'ContactContainsNote'), (3, 5, 'ContactContainsNote'), (1, 9, 'ContactToRelationship'), (9, 2, 'RelationshipToContact'), (2, 8, 'ContactToRelationship'), (8, 3, 'RelationshipToContact'), (1, 6, 'ContactContainsAddress'), (3, 7, 'ContactContainsAddress')]

Adj-gen24/output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 1, 0, 1, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen24/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Note', 6: 'Address', 7: 'Address', 8: 'Relationship', 9: 'Relationship'}

Edges-gen24/output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (2, 4, 'ContactContainsNote'), (3, 5, 'ContactContainsNote'), (1, 9, 'ContactToRelationship'), (9, 2, 'RelationshipToContact'), (2, 8, 'ContactToRelationship'), (8, 3, 'RelationshipToContact'), (1, 6, 'ContactContainsAddress'), (3, 7, 'ContactContainsAddress')]

Adj-gen25/output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 1, 0], [1, 0, 0, 0, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 1, 0, 1, 0, 1], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0]]

Labels-gen25/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Note', 6: 'Address', 7: 'Address', 8: 'Relationship', 9: 'Relationship'}

Edges-gen25/output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (2, 4, 'ContactContainsNote'), (3, 5, 'ContactContainsNote'), (1, 8, 'ContactToRelationship'), (8, 2, 'RelationshipToContact'), (2, 9, 'ContactToRelationship'), (9, 3, 'RelationshipToContact'), (1, 6, 'ContactContainsAddress'), (3, 7, 'ContactContainsAddress')]

Adj-gen26/output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 1, 0, 1, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen26/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Note', 6: 'Address', 7: 'Address', 8: 'Relationship', 9: 'Relationship'}

Edges-gen26/output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (2, 4, 'ContactContainsNote'), (3, 5, 'ContactContainsNote'), (1, 9, 'ContactToRelationship'), (9, 2, 'RelationshipToContact'), (2, 8, 'ContactToRelationship'), (8, 3, 'RelationshipToContact'), (1, 6, 'ContactContainsAddress'), (3, 7, 'ContactContainsAddress')]

Adj-gen27/output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 1, 0], [1, 0, 0, 0, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 1, 0, 1, 0, 1], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0]]

Labels-gen27/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Note', 6: 'Address', 7: 'Address', 8: 'Relationship', 9: 'Relationship'}

Edges-gen27/output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (2, 4, 'ContactContainsNote'), (3, 5, 'ContactContainsNote'), (1, 8, 'ContactToRelationship'), (8, 2, 'RelationshipToContact'), (2, 9, 'ContactToRelationship'), (9, 3, 'RelationshipToContact'), (1, 6, 'ContactContainsAddress'), (3, 7, 'ContactContainsAddress')]

Adj-gen28/output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 1, 0], [1, 0, 0, 0, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 1, 0, 1, 0, 1], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0]]

Labels-gen28/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Note', 6: 'Address', 7: 'Address', 8: 'Relationship', 9: 'Relationship'}

Edges-gen28/output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (2, 4, 'ContactContainsNote'), (3, 5, 'ContactContainsNote'), (1, 8, 'ContactToRelationship'), (8, 2, 'RelationshipToContact'), (2, 9, 'ContactToRelationship'), (9, 3, 'RelationshipToContact'), (1, 6, 'ContactContainsAddress'), (3, 7, 'ContactContainsAddress')]

Adj-gen29/output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 1, 0, 1, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen29/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Note', 6: 'Address', 7: 'Address', 8: 'Relationship', 9: 'Relationship'}

Edges-gen29/output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (2, 4, 'ContactContainsNote'), (3, 5, 'ContactContainsNote'), (1, 9, 'ContactToRelationship'), (9, 2, 'RelationshipToContact'), (2, 8, 'ContactToRelationship'), (8, 3, 'RelationshipToContact'), (1, 6, 'ContactContainsAddress'), (3, 7, 'ContactContainsAddress')]

Adj-gen30/output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 1, 0], [1, 0, 0, 0, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 1, 0, 1, 0, 1], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0]]

Labels-gen30/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Note', 6: 'Address', 7: 'Address', 8: 'Relationship', 9: 'Relationship'}

Edges-gen30/output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (2, 4, 'ContactContainsNote'), (3, 5, 'ContactContainsNote'), (1, 8, 'ContactToRelationship'), (8, 2, 'RelationshipToContact'), (2, 9, 'ContactToRelationship'), (9, 3, 'RelationshipToContact'), (1, 6, 'ContactContainsAddress'), (3, 7, 'ContactContainsAddress')]

```

# GED Matrix

```json
[[0.0, 10.0, 2.0, 11.0, 2.0, 2.0, 9.0, 2.0, 4.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0], [10.0, 0.0, 9.0, 3.0, 9.0, 8.0, 2.0, 8.0, 9.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0], [2.0, 9.0, 0.0, 9.0, 0.0, 2.0, 7.0, 2.0, 6.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0], [11.0, 3.0, 9.0, 0.0, 9.0, 9.0, 5.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0], [2.0, 9.0, 0.0, 9.0, 0.0, 2.0, 7.0, 2.0, 4.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0], [2.0, 8.0, 2.0, 9.0, 2.0, 0.0, 8.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [9.0, 2.0, 7.0, 5.0, 7.0, 8.0, 0.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0], [2.0, 8.0, 2.0, 9.0, 2.0, 0.0, 8.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [4.0, 9.0, 6.0, 9.0, 4.0, 2.0, 8.0, 2.0, 0.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0], [2.0, 8.0, 2.0, 9.0, 2.0, 0.0, 8.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [2.0, 8.0, 2.0, 9.0, 2.0, 0.0, 8.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [2.0, 8.0, 2.0, 9.0, 2.0, 0.0, 8.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [2.0, 8.0, 2.0, 9.0, 2.0, 0.0, 8.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [2.0, 8.0, 2.0, 9.0, 2.0, 0.0, 8.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [2.0, 8.0, 2.0, 9.0, 2.0, 0.0, 8.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [2.0, 8.0, 2.0, 9.0, 2.0, 0.0, 8.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [2.0, 8.0, 2.0, 9.0, 2.0, 0.0, 8.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [2.0, 8.0, 2.0, 9.0, 2.0, 0.0, 8.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [2.0, 8.0, 2.0, 9.0, 2.0, 0.0, 8.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [2.0, 8.0, 2.0, 9.0, 2.0, 0.0, 8.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [2.0, 8.0, 2.0, 9.0, 2.0, 0.0, 8.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [2.0, 8.0, 2.0, 9.0, 2.0, 0.0, 8.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [2.0, 8.0, 2.0, 9.0, 2.0, 0.0, 8.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [2.0, 8.0, 2.0, 9.0, 2.0, 0.0, 8.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [2.0, 8.0, 2.0, 9.0, 2.0, 0.0, 8.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [2.0, 8.0, 2.0, 9.0, 2.0, 0.0, 8.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [2.0, 8.0, 2.0, 9.0, 2.0, 0.0, 8.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [2.0, 8.0, 2.0, 9.0, 2.0, 0.0, 8.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [2.0, 8.0, 2.0, 9.0, 2.0, 0.0, 8.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [2.0, 8.0, 2.0, 9.0, 2.0, 0.0, 8.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]]
```

Each cell is the cost of a concrete edit path found by the bipartite assignment (BP), IPFP, and REFINE local search, so it is an upper bound on the exact GED. The interval table pairs it with the BRANCH lower bound. A cell is `exact` when both bounds coincide.

# GED value table (upper bound)

|       | gen1/output | gen2/output | gen3/output | gen4/output | gen5/output | gen6/output | gen7/output | gen8/output | gen9/output | gen10/output | gen11/output | gen12/output | gen13/output | gen14/output | gen15/output | gen16/output | gen17/output | gen18/output | gen19/output | gen20/output | gen21/output | gen22/output | gen23/output | gen24/output | gen25/output | gen26/output | gen27/output | gen28/output | gen29/output | gen30/output |
|-------|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **gen1/output** | 0.000000 | 10.000000 | 2.000000 | 11.000000 | 2.000000 | 2.000000 | 9.000000 | 2.000000 | 4.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 |
| **gen2/output** |  | 0.000000 | 9.000000 | 3.000000 | 9.000000 | 8.000000 | 2.000000 | 8.000000 | 9.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 |
| **gen3/output** |  |  | 0.000000 | 9.000000 | 0.000000 | 2.000000 | 7.000000 | 2.000000 | 6.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 |
| **gen4/output** |  |  |  | 0.000000 | 9.000000 | 9.000000 | 5.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 |
| **gen5/output** |  |  |  |  | 0.000000 | 2.000000 | 7.000000 | 2.000000 | 4.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 |
| **gen6/output** |  |  |  |  |  | 0.000000 | 8.000000 | 0.000000 | 2.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen7/output** |  |  |  |  |  |  | 0.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 |
| **gen8/output** |  |  |  |  |  |  |  | 0.000000 | 2.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen9/output** |  |  |  |  |  |  |  |  | 0.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 |
| **gen10/output** |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen11/output** |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen12/output** |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen13/output** |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen14/output** |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen15/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen16/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen17/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen18/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen19/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
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
| **gen1/output** | 0.000000 | [6.000000, 10.000000] | 2.000000 | [7.500000, 11.000000] | 2.000000 | [1.000000, 2.000000] | [5.500000, 9.000000] | [1.000000, 2.000000] | [2.000000, 4.000000] | [1.000000, 2.000000] | [1.000000, 2.000000] | [1.000000, 2.000000] | [1.000000, 2.000000] | [1.000000, 2.000000] | [1.000000, 2.000000] | [1.000000, 2.000000] | [1.000000, 2.000000] | [1.000000, 2.000000] | [1.000000, 2.000000] | [1.000000, 2.000000] | [1.000000, 2.000000] | [1.000000, 2.000000] | [1.000000, 2.000000] | [1.000000, 2.000000] | [1.000000, 2.000000] | [1.000000, 2.000000] | [1.000000, 2.000000] | [1.000000, 2.000000] | [1.000000, 2.000000] | [1.000000, 2.000000] |
| **gen2/output** |  | 0.000000 | [6.000000, 9.000000] | 3.000000 | [6.000000, 9.000000] | [6.000000, 8.000000] | 2.000000 | [6.000000, 8.000000] | [6.500000, 9.000000] | [6.000000, 8.000000] | [6.000000, 8.000000] | [6.000000, 8.000000] | [6.000000, 8.000000] | [6.000000, 8.000000] | [6.000000, 8.000000] | [6.000000, 8.000000] | [6.000000, 8.000000] | [6.000000, 8.000000] | [6.000000, 8.000000] | [6.000000, 8.000000] | [6.000000, 8.000000] | [6.000000, 8.000000] | [6.000000, 8.000000] | [6.000000, 8.000000] | [6.000000, 8.000000] | [6.000000, 8.000000] | [6.000000, 8.000000] | [6.000000, 8.000000] | [6.000000, 8.000000] | [6.000000, 8.000000] |
| **gen3/output** |  |  | 0.000000 | [7.000000, 9.000000] | 0.000000 | 2.000000 | [4.000000, 7.000000] | 2.000000 | [3.000000, 6.000000] | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 |
| **gen4/output** |  |  |  | 0.000000 | [7.000000, 9.000000] | [7.500000, 9.000000] | 5.000000 | [7.500000, 9.000000] | [7.500000, 9.000000] | [7.500000, 9.000000] | [7.500000, 9.000000] | [7.500000, 9.000000] | [7.500000, 9.000000] | [7.500000, 9.000000] | [7.500000, 9.000000] | [7.500000, 9.000000] | [7.500000, 9.000000] | [7.500000, 9.000000] | [7.500000, 9.000000] | [7.500000, 9.000000] | [7.500000, 9.000000] | [7.500000, 9.000000] | [7.500000, 9.000000] | [7.500000, 9.000000] | [7.500000, 9.000000] | [7.500000, 9.000000] | [7.500000, 9.000000] | [7.500000, 9.000000] | [7.500000, 9.000000] | [7.500000, 9.000000] |
| **gen5/output** |  |  |  |  | 0.000000 | 2.000000 | [4.000000, 7.000000] | 2.000000 | [3.000000, 4.000000] | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 |
| **gen6/output** |  |  |  |  |  | 0.000000 | [6.000000, 8.000000] | 0.000000 | [1.000000, 2.000000] | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen7/output** |  |  |  |  |  |  | 0.000000 | [6.000000, 8.000000] | [6.000000, 8.000000] | [6.000000, 8.000000] | [6.000000, 8.000000] | [6.000000, 8.000000] | [6.000000, 8.000000] | [6.000000, 8.000000] | [6.000000, 8.000000] | [6.000000, 8.000000] | [6.000000, 8.000000] | [6.000000, 8.000000] | [6.000000, 8.000000] | [6.000000, 8.000000] | [6.000000, 8.000000] | [6.000000, 8.000000] | [6.000000, 8.000000] | [6.000000, 8.000000] | [6.000000, 8.000000] | [6.000000, 8.000000] | [6.000000, 8.000000] | [6.000000, 8.000000] | [6.000000, 8.000000] | [6.000000, 8.000000] |
| **gen8/output** |  |  |  |  |  |  |  | 0.000000 | [1.000000, 2.000000] | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen9/output** |  |  |  |  |  |  |  |  | 0.000000 | [1.000000, 2.000000] | [1.000000, 2.000000] | [1.000000, 2.000000] | [1.000000, 2.000000] | [1.000000, 2.000000] | [1.000000, 2.000000] | [1.000000, 2.000000] | [1.000000, 2.000000] | [1.000000, 2.000000] | [1.000000, 2.000000] | [1.000000, 2.000000] | [1.000000, 2.000000] | [1.000000, 2.000000] | [1.000000, 2.000000] | [1.000000, 2.000000] | [1.000000, 2.000000] | [1.000000, 2.000000] | [1.000000, 2.000000] | [1.000000, 2.000000] | [1.000000, 2.000000] | [1.000000, 2.000000] |
| **gen10/output** |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen11/output** |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen12/output** |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen13/output** |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen14/output** |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen15/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen16/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen17/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen18/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen19/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
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
| **gen1/output** | 0.000000 | 0.263158 | 0.050000 | 0.314286 | 0.050000 | 0.047619 | 0.236842 | 0.047619 | 0.095238 | 0.047619 | 0.047619 | 0.047619 | 0.047619 | 0.047619 | 0.047619 | 0.047619 | 0.047619 | 0.047619 | 0.047619 | 0.047619 | 0.047619 | 0.047619 | 0.047619 | 0.047619 | 0.047619 | 0.047619 | 0.047619 | 0.047619 | 0.047619 | 0.047619 |
| **gen2/output** |  | 0.000000 | 0.250000 | 0.096774 | 0.250000 | 0.210526 | 0.058824 | 0.210526 | 0.236842 | 0.210526 | 0.210526 | 0.210526 | 0.210526 | 0.210526 | 0.210526 | 0.210526 | 0.210526 | 0.210526 | 0.210526 | 0.210526 | 0.210526 | 0.210526 | 0.210526 | 0.210526 | 0.210526 | 0.210526 | 0.210526 | 0.210526 | 0.210526 | 0.210526 |
| **gen3/output** |  |  | 0.000000 | 0.272727 | 0.000000 | 0.050000 | 0.194444 | 0.050000 | 0.150000 | 0.050000 | 0.050000 | 0.050000 | 0.050000 | 0.050000 | 0.050000 | 0.050000 | 0.050000 | 0.050000 | 0.050000 | 0.050000 | 0.050000 | 0.050000 | 0.050000 | 0.050000 | 0.050000 | 0.050000 | 0.050000 | 0.050000 | 0.050000 | 0.050000 |
| **gen4/output** |  |  |  | 0.000000 | 0.272727 | 0.257143 | 0.161290 | 0.257143 | 0.257143 | 0.257143 | 0.257143 | 0.257143 | 0.257143 | 0.257143 | 0.257143 | 0.257143 | 0.257143 | 0.257143 | 0.257143 | 0.257143 | 0.257143 | 0.257143 | 0.257143 | 0.257143 | 0.257143 | 0.257143 | 0.257143 | 0.257143 | 0.257143 | 0.257143 |
| **gen5/output** |  |  |  |  | 0.000000 | 0.050000 | 0.194444 | 0.050000 | 0.100000 | 0.050000 | 0.050000 | 0.050000 | 0.050000 | 0.050000 | 0.050000 | 0.050000 | 0.050000 | 0.050000 | 0.050000 | 0.050000 | 0.050000 | 0.050000 | 0.050000 | 0.050000 | 0.050000 | 0.050000 | 0.050000 | 0.050000 | 0.050000 | 0.050000 |
| **gen6/output** |  |  |  |  |  | 0.000000 | 0.210526 | 0.000000 | 0.047619 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen7/output** |  |  |  |  |  |  | 0.000000 | 0.210526 | 0.210526 | 0.210526 | 0.210526 | 0.210526 | 0.210526 | 0.210526 | 0.210526 | 0.210526 | 0.210526 | 0.210526 | 0.210526 | 0.210526 | 0.210526 | 0.210526 | 0.210526 | 0.210526 | 0.210526 | 0.210526 | 0.210526 | 0.210526 | 0.210526 | 0.210526 |
| **gen8/output** |  |  |  |  |  |  |  | 0.000000 | 0.047619 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen9/output** |  |  |  |  |  |  |  |  | 0.000000 | 0.047619 | 0.047619 | 0.047619 | 0.047619 | 0.047619 | 0.047619 | 0.047619 | 0.047619 | 0.047619 | 0.047619 | 0.047619 | 0.047619 | 0.047619 | 0.047619 | 0.047619 | 0.047619 | 0.047619 | 0.047619 | 0.047619 | 0.047619 | 0.047619 |
| **gen10/output** |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen11/output** |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen12/output** |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen13/output** |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen14/output** |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen15/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen16/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen17/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen18/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen19/output** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
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
| **gen1/output** | exact | bounded | exact | bounded | exact | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded |
| **gen2/output** |  | exact | bounded | exact | bounded | bounded | exact | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded |
| **gen3/output** |  |  | exact | bounded | exact | exact | bounded | exact | bounded | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact |
| **gen4/output** |  |  |  | exact | bounded | bounded | exact | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded |
| **gen5/output** |  |  |  |  | exact | exact | bounded | exact | bounded | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact |
| **gen6/output** |  |  |  |  |  | exact | bounded | exact | bounded | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact |
| **gen7/output** |  |  |  |  |  |  | exact | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded |
| **gen8/output** |  |  |  |  |  |  |  | exact | bounded | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact | exact |
| **gen9/output** |  |  |  |  |  |  |  |  | exact | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded |
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

Pairs: 435; exact pairs: 305; bounded pairs: 130; mean relative gap: 9.97%; max relative gap: 50.00%; invalid files: 0.
