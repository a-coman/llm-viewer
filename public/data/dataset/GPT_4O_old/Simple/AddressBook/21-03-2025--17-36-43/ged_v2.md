# Adjacency, edges, and labels

```text
Adj-gen1/output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0], [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0]]

Labels-gen1/output.soil: {0: 'AddressBook', 1: 'Person', 2: 'Company', 3: 'Person', 4: 'Note', 5: 'Address', 6: 'Address', 7: 'Relationship', 8: 'Note', 9: 'Address', 10: 'Relationship', 11: 'Person', 12: 'Relationship'}

Edges-gen1/output.soil: [(7, 3, 'RelationshipToContact'), (1, 7, 'ContactToRelationship'), (1, 5, 'ContactContainsAddress'), (2, 6, 'ContactContainsAddress'), (3, 4, 'ContactContainsNote'), (0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (10, 1, 'RelationshipToContact'), (3, 10, 'ContactToRelationship'), (3, 9, 'ContactContainsAddress'), (3, 8, 'ContactContainsNote'), (12, 2, 'RelationshipToContact'), (11, 12, 'ContactToRelationship'), (0, 11, 'AddressBookMadeOfContact')]

Adj-gen2/output.soil: [[0, 1, 1, 0, 0, 0, 1, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 1, 1, 1, 0, 0, 0, 1], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1, 1, 1], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 1, 0, 0, 0, 1, 0, 0, 0]]

Labels-gen2/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Note', 4: 'Address', 5: 'Relationship', 6: 'Person', 7: 'Note', 8: 'Address', 9: 'Relationship'}

Edges-gen2/output.soil: [(5, 1, 'RelationshipToContact'), (2, 5, 'ContactToRelationship'), (2, 4, 'ContactContainsAddress'), (2, 3, 'ContactContainsNote'), (9, 2, 'RelationshipToContact'), (6, 9, 'ContactToRelationship'), (6, 8, 'ContactContainsAddress'), (6, 7, 'ContactContainsNote'), (0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 6, 'AddressBookMadeOfContact')]

Adj-gen3/output.soil: [[0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen3/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Note', 4: 'Address', 5: 'Relationship', 6: 'Person', 7: 'Note', 8: 'Address', 9: 'Relationship', 10: 'Address'}

Edges-gen3/output.soil: [(5, 1, 'RelationshipToContact'), (2, 5, 'ContactToRelationship'), (2, 4, 'ContactContainsAddress'), (2, 3, 'ContactContainsNote'), (9, 2, 'RelationshipToContact'), (6, 9, 'ContactToRelationship'), (6, 8, 'ContactContainsAddress'), (6, 7, 'ContactContainsNote'), (1, 10, 'ContactContainsAddress'), (0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 6, 'AddressBookMadeOfContact')]

Adj-gen4/output.soil: [[0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen4/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Note', 4: 'Address', 5: 'Relationship', 6: 'Person', 7: 'Note', 8: 'Address', 9: 'Relationship', 10: 'Address'}

Edges-gen4/output.soil: [(5, 1, 'RelationshipToContact'), (2, 5, 'ContactToRelationship'), (2, 4, 'ContactContainsAddress'), (2, 3, 'ContactContainsNote'), (9, 2, 'RelationshipToContact'), (6, 9, 'ContactToRelationship'), (6, 8, 'ContactContainsAddress'), (6, 7, 'ContactContainsNote'), (1, 10, 'ContactContainsAddress'), (0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 6, 'AddressBookMadeOfContact')]

Adj-gen5/output.soil: [[0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen5/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Note', 4: 'Address', 5: 'Relationship', 6: 'Person', 7: 'Note', 8: 'Address', 9: 'Relationship', 10: 'Address'}

Edges-gen5/output.soil: [(5, 1, 'RelationshipToContact'), (2, 5, 'ContactToRelationship'), (2, 4, 'ContactContainsAddress'), (2, 3, 'ContactContainsNote'), (9, 2, 'RelationshipToContact'), (6, 9, 'ContactToRelationship'), (6, 8, 'ContactContainsAddress'), (6, 7, 'ContactContainsNote'), (1, 10, 'ContactContainsAddress'), (0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 6, 'AddressBookMadeOfContact')]

Adj-gen6/output.soil: [[0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen6/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Note', 4: 'Address', 5: 'Relationship', 6: 'Person', 7: 'Note', 8: 'Address', 9: 'Relationship', 10: 'Address'}

Edges-gen6/output.soil: [(5, 1, 'RelationshipToContact'), (2, 5, 'ContactToRelationship'), (2, 4, 'ContactContainsAddress'), (2, 3, 'ContactContainsNote'), (9, 2, 'RelationshipToContact'), (6, 9, 'ContactToRelationship'), (6, 8, 'ContactContainsAddress'), (6, 7, 'ContactContainsNote'), (1, 10, 'ContactContainsAddress'), (0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 6, 'AddressBookMadeOfContact')]

Adj-gen7/output.soil: [[0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen7/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Note', 4: 'Address', 5: 'Relationship', 6: 'Person', 7: 'Note', 8: 'Address', 9: 'Relationship', 10: 'Address'}

Edges-gen7/output.soil: [(5, 1, 'RelationshipToContact'), (2, 5, 'ContactToRelationship'), (2, 4, 'ContactContainsAddress'), (2, 3, 'ContactContainsNote'), (9, 2, 'RelationshipToContact'), (6, 9, 'ContactToRelationship'), (6, 8, 'ContactContainsAddress'), (6, 7, 'ContactContainsNote'), (1, 10, 'ContactContainsAddress'), (0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 6, 'AddressBookMadeOfContact')]

Adj-gen8/output.soil: [[0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen8/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Note', 4: 'Address', 5: 'Relationship', 6: 'Person', 7: 'Note', 8: 'Address', 9: 'Relationship', 10: 'Address'}

Edges-gen8/output.soil: [(5, 1, 'RelationshipToContact'), (2, 5, 'ContactToRelationship'), (2, 4, 'ContactContainsAddress'), (2, 3, 'ContactContainsNote'), (9, 2, 'RelationshipToContact'), (6, 9, 'ContactToRelationship'), (6, 8, 'ContactContainsAddress'), (6, 7, 'ContactContainsNote'), (1, 10, 'ContactContainsAddress'), (0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 6, 'AddressBookMadeOfContact')]

Adj-gen9/output.soil: [[0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen9/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Note', 4: 'Address', 5: 'Relationship', 6: 'Person', 7: 'Note', 8: 'Address', 9: 'Relationship', 10: 'Address'}

Edges-gen9/output.soil: [(5, 1, 'RelationshipToContact'), (2, 5, 'ContactToRelationship'), (2, 4, 'ContactContainsAddress'), (2, 3, 'ContactContainsNote'), (9, 2, 'RelationshipToContact'), (6, 9, 'ContactToRelationship'), (6, 8, 'ContactContainsAddress'), (6, 7, 'ContactContainsNote'), (1, 10, 'ContactContainsAddress'), (0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 6, 'AddressBookMadeOfContact')]

Adj-gen10/output.soil: [[0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen10/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Note', 4: 'Address', 5: 'Relationship', 6: 'Person', 7: 'Note', 8: 'Address', 9: 'Relationship', 10: 'Address'}

Edges-gen10/output.soil: [(5, 1, 'RelationshipToContact'), (2, 5, 'ContactToRelationship'), (2, 4, 'ContactContainsAddress'), (2, 3, 'ContactContainsNote'), (9, 2, 'RelationshipToContact'), (6, 9, 'ContactToRelationship'), (6, 8, 'ContactContainsAddress'), (6, 7, 'ContactContainsNote'), (1, 10, 'ContactContainsAddress'), (0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 6, 'AddressBookMadeOfContact')]

Adj-gen11/output.soil: [[0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen11/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Note', 4: 'Address', 5: 'Relationship', 6: 'Person', 7: 'Note', 8: 'Address', 9: 'Relationship', 10: 'Address'}

Edges-gen11/output.soil: [(5, 1, 'RelationshipToContact'), (2, 5, 'ContactToRelationship'), (2, 4, 'ContactContainsAddress'), (2, 3, 'ContactContainsNote'), (9, 2, 'RelationshipToContact'), (6, 9, 'ContactToRelationship'), (6, 8, 'ContactContainsAddress'), (6, 7, 'ContactContainsNote'), (1, 10, 'ContactContainsAddress'), (0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 6, 'AddressBookMadeOfContact')]

Adj-gen12/output.soil: [[0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen12/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Note', 4: 'Address', 5: 'Relationship', 6: 'Person', 7: 'Note', 8: 'Address', 9: 'Relationship', 10: 'Address'}

Edges-gen12/output.soil: [(5, 1, 'RelationshipToContact'), (2, 5, 'ContactToRelationship'), (2, 4, 'ContactContainsAddress'), (2, 3, 'ContactContainsNote'), (9, 2, 'RelationshipToContact'), (6, 9, 'ContactToRelationship'), (6, 8, 'ContactContainsAddress'), (6, 7, 'ContactContainsNote'), (1, 10, 'ContactContainsAddress'), (0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 6, 'AddressBookMadeOfContact')]

Adj-gen13/output.soil: [[0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen13/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Note', 4: 'Address', 5: 'Relationship', 6: 'Person', 7: 'Note', 8: 'Address', 9: 'Relationship', 10: 'Address'}

Edges-gen13/output.soil: [(5, 1, 'RelationshipToContact'), (2, 5, 'ContactToRelationship'), (2, 4, 'ContactContainsAddress'), (2, 3, 'ContactContainsNote'), (9, 2, 'RelationshipToContact'), (6, 9, 'ContactToRelationship'), (6, 8, 'ContactContainsAddress'), (6, 7, 'ContactContainsNote'), (1, 10, 'ContactContainsAddress'), (0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 6, 'AddressBookMadeOfContact')]

Adj-gen14/output.soil: [[0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen14/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Note', 4: 'Address', 5: 'Relationship', 6: 'Person', 7: 'Note', 8: 'Address', 9: 'Relationship', 10: 'Address'}

Edges-gen14/output.soil: [(5, 1, 'RelationshipToContact'), (2, 5, 'ContactToRelationship'), (2, 4, 'ContactContainsAddress'), (2, 3, 'ContactContainsNote'), (9, 2, 'RelationshipToContact'), (6, 9, 'ContactToRelationship'), (6, 8, 'ContactContainsAddress'), (6, 7, 'ContactContainsNote'), (1, 10, 'ContactContainsAddress'), (0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 6, 'AddressBookMadeOfContact')]

Adj-gen15/output.soil: [[0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen15/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Note', 4: 'Address', 5: 'Relationship', 6: 'Person', 7: 'Note', 8: 'Address', 9: 'Relationship', 10: 'Address'}

Edges-gen15/output.soil: [(5, 1, 'RelationshipToContact'), (2, 5, 'ContactToRelationship'), (2, 4, 'ContactContainsAddress'), (2, 3, 'ContactContainsNote'), (9, 2, 'RelationshipToContact'), (6, 9, 'ContactToRelationship'), (6, 8, 'ContactContainsAddress'), (6, 7, 'ContactContainsNote'), (1, 10, 'ContactContainsAddress'), (0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 6, 'AddressBookMadeOfContact')]

Adj-gen16/output.soil: [[0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen16/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Note', 4: 'Address', 5: 'Relationship', 6: 'Person', 7: 'Note', 8: 'Address', 9: 'Relationship', 10: 'Address'}

Edges-gen16/output.soil: [(5, 1, 'RelationshipToContact'), (2, 5, 'ContactToRelationship'), (2, 4, 'ContactContainsAddress'), (2, 3, 'ContactContainsNote'), (9, 2, 'RelationshipToContact'), (6, 9, 'ContactToRelationship'), (6, 8, 'ContactContainsAddress'), (6, 7, 'ContactContainsNote'), (1, 10, 'ContactContainsAddress'), (0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 6, 'AddressBookMadeOfContact')]

Adj-gen17/output.soil: [[0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen17/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Note', 4: 'Address', 5: 'Relationship', 6: 'Person', 7: 'Note', 8: 'Address', 9: 'Relationship', 10: 'Address'}

Edges-gen17/output.soil: [(5, 1, 'RelationshipToContact'), (2, 5, 'ContactToRelationship'), (2, 4, 'ContactContainsAddress'), (2, 3, 'ContactContainsNote'), (9, 2, 'RelationshipToContact'), (6, 9, 'ContactToRelationship'), (6, 8, 'ContactContainsAddress'), (6, 7, 'ContactContainsNote'), (1, 10, 'ContactContainsAddress'), (0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 6, 'AddressBookMadeOfContact')]

Adj-gen18/output.soil: [[0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen18/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Note', 4: 'Address', 5: 'Relationship', 6: 'Person', 7: 'Note', 8: 'Address', 9: 'Relationship', 10: 'Address'}

Edges-gen18/output.soil: [(5, 1, 'RelationshipToContact'), (2, 5, 'ContactToRelationship'), (2, 4, 'ContactContainsAddress'), (2, 3, 'ContactContainsNote'), (9, 2, 'RelationshipToContact'), (6, 9, 'ContactToRelationship'), (6, 8, 'ContactContainsAddress'), (6, 7, 'ContactContainsNote'), (1, 10, 'ContactContainsAddress'), (0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 6, 'AddressBookMadeOfContact')]

Adj-gen19/output.soil: [[0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen19/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Note', 4: 'Address', 5: 'Relationship', 6: 'Person', 7: 'Note', 8: 'Address', 9: 'Relationship', 10: 'Address'}

Edges-gen19/output.soil: [(5, 1, 'RelationshipToContact'), (2, 5, 'ContactToRelationship'), (2, 4, 'ContactContainsAddress'), (2, 3, 'ContactContainsNote'), (9, 2, 'RelationshipToContact'), (6, 9, 'ContactToRelationship'), (6, 8, 'ContactContainsAddress'), (6, 7, 'ContactContainsNote'), (1, 10, 'ContactContainsAddress'), (0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 6, 'AddressBookMadeOfContact')]

Adj-gen20/output.soil: [[0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen20/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Note', 4: 'Address', 5: 'Relationship', 6: 'Person', 7: 'Note', 8: 'Address', 9: 'Relationship', 10: 'Address'}

Edges-gen20/output.soil: [(5, 1, 'RelationshipToContact'), (2, 5, 'ContactToRelationship'), (2, 4, 'ContactContainsAddress'), (2, 3, 'ContactContainsNote'), (9, 2, 'RelationshipToContact'), (6, 9, 'ContactToRelationship'), (6, 8, 'ContactContainsAddress'), (6, 7, 'ContactContainsNote'), (1, 10, 'ContactContainsAddress'), (0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 6, 'AddressBookMadeOfContact')]

Adj-gen21/output.soil: [[0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen21/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Note', 4: 'Address', 5: 'Relationship', 6: 'Person', 7: 'Note', 8: 'Address', 9: 'Relationship', 10: 'Address'}

Edges-gen21/output.soil: [(5, 1, 'RelationshipToContact'), (2, 5, 'ContactToRelationship'), (2, 4, 'ContactContainsAddress'), (2, 3, 'ContactContainsNote'), (9, 2, 'RelationshipToContact'), (6, 9, 'ContactToRelationship'), (6, 8, 'ContactContainsAddress'), (6, 7, 'ContactContainsNote'), (1, 10, 'ContactContainsAddress'), (0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 6, 'AddressBookMadeOfContact')]

Adj-gen22/output.soil: [[0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen22/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Note', 4: 'Address', 5: 'Relationship', 6: 'Person', 7: 'Note', 8: 'Address', 9: 'Relationship', 10: 'Address'}

Edges-gen22/output.soil: [(5, 1, 'RelationshipToContact'), (2, 5, 'ContactToRelationship'), (2, 4, 'ContactContainsAddress'), (2, 3, 'ContactContainsNote'), (9, 2, 'RelationshipToContact'), (6, 9, 'ContactToRelationship'), (6, 8, 'ContactContainsAddress'), (6, 7, 'ContactContainsNote'), (1, 10, 'ContactContainsAddress'), (0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 6, 'AddressBookMadeOfContact')]

Adj-gen23/output.soil: [[0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen23/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Note', 4: 'Address', 5: 'Relationship', 6: 'Person', 7: 'Note', 8: 'Address', 9: 'Relationship', 10: 'Address'}

Edges-gen23/output.soil: [(5, 1, 'RelationshipToContact'), (2, 5, 'ContactToRelationship'), (2, 4, 'ContactContainsAddress'), (2, 3, 'ContactContainsNote'), (9, 2, 'RelationshipToContact'), (6, 9, 'ContactToRelationship'), (6, 8, 'ContactContainsAddress'), (6, 7, 'ContactContainsNote'), (1, 10, 'ContactContainsAddress'), (0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 6, 'AddressBookMadeOfContact')]

Adj-gen24/output.soil: [[0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen24/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Note', 4: 'Address', 5: 'Relationship', 6: 'Person', 7: 'Note', 8: 'Address', 9: 'Relationship', 10: 'Address'}

Edges-gen24/output.soil: [(5, 1, 'RelationshipToContact'), (2, 5, 'ContactToRelationship'), (2, 4, 'ContactContainsAddress'), (2, 3, 'ContactContainsNote'), (9, 2, 'RelationshipToContact'), (6, 9, 'ContactToRelationship'), (6, 8, 'ContactContainsAddress'), (6, 7, 'ContactContainsNote'), (1, 10, 'ContactContainsAddress'), (0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 6, 'AddressBookMadeOfContact')]

Adj-gen25/output.soil: [[0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen25/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Note', 4: 'Address', 5: 'Relationship', 6: 'Person', 7: 'Note', 8: 'Address', 9: 'Relationship', 10: 'Address'}

Edges-gen25/output.soil: [(5, 1, 'RelationshipToContact'), (2, 5, 'ContactToRelationship'), (2, 4, 'ContactContainsAddress'), (2, 3, 'ContactContainsNote'), (9, 2, 'RelationshipToContact'), (6, 9, 'ContactToRelationship'), (6, 8, 'ContactContainsAddress'), (6, 7, 'ContactContainsNote'), (1, 10, 'ContactContainsAddress'), (0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 6, 'AddressBookMadeOfContact')]

Adj-gen26/output.soil: [[0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen26/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Note', 4: 'Address', 5: 'Relationship', 6: 'Person', 7: 'Note', 8: 'Address', 9: 'Relationship', 10: 'Address'}

Edges-gen26/output.soil: [(5, 1, 'RelationshipToContact'), (2, 5, 'ContactToRelationship'), (2, 4, 'ContactContainsAddress'), (2, 3, 'ContactContainsNote'), (9, 2, 'RelationshipToContact'), (6, 9, 'ContactToRelationship'), (6, 8, 'ContactContainsAddress'), (6, 7, 'ContactContainsNote'), (1, 10, 'ContactContainsAddress'), (0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 6, 'AddressBookMadeOfContact')]

Adj-gen27/output.soil: [[0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen27/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Note', 4: 'Address', 5: 'Relationship', 6: 'Person', 7: 'Note', 8: 'Address', 9: 'Relationship', 10: 'Address'}

Edges-gen27/output.soil: [(5, 1, 'RelationshipToContact'), (2, 5, 'ContactToRelationship'), (2, 4, 'ContactContainsAddress'), (2, 3, 'ContactContainsNote'), (9, 2, 'RelationshipToContact'), (6, 9, 'ContactToRelationship'), (6, 8, 'ContactContainsAddress'), (6, 7, 'ContactContainsNote'), (1, 10, 'ContactContainsAddress'), (0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 6, 'AddressBookMadeOfContact')]

Adj-gen28/output.soil: [[0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen28/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Note', 4: 'Address', 5: 'Relationship', 6: 'Person', 7: 'Note', 8: 'Address', 9: 'Relationship', 10: 'Address'}

Edges-gen28/output.soil: [(5, 1, 'RelationshipToContact'), (2, 5, 'ContactToRelationship'), (2, 4, 'ContactContainsAddress'), (2, 3, 'ContactContainsNote'), (9, 2, 'RelationshipToContact'), (6, 9, 'ContactToRelationship'), (6, 8, 'ContactContainsAddress'), (6, 7, 'ContactContainsNote'), (1, 10, 'ContactContainsAddress'), (0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 6, 'AddressBookMadeOfContact')]

Adj-gen29/output.soil: [[0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen29/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Note', 4: 'Address', 5: 'Relationship', 6: 'Person', 7: 'Note', 8: 'Address', 9: 'Relationship', 10: 'Address'}

Edges-gen29/output.soil: [(5, 1, 'RelationshipToContact'), (2, 5, 'ContactToRelationship'), (2, 4, 'ContactContainsAddress'), (2, 3, 'ContactContainsNote'), (9, 2, 'RelationshipToContact'), (6, 9, 'ContactToRelationship'), (6, 8, 'ContactContainsAddress'), (6, 7, 'ContactContainsNote'), (1, 10, 'ContactContainsAddress'), (0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 6, 'AddressBookMadeOfContact')]

Adj-gen30/output.soil: [[0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

Labels-gen30/output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Note', 4: 'Address', 5: 'Relationship', 6: 'Person', 7: 'Note', 8: 'Address', 9: 'Relationship', 10: 'Address'}

Edges-gen30/output.soil: [(5, 1, 'RelationshipToContact'), (2, 5, 'ContactToRelationship'), (2, 4, 'ContactContainsAddress'), (2, 3, 'ContactContainsNote'), (9, 2, 'RelationshipToContact'), (6, 9, 'ContactToRelationship'), (6, 8, 'ContactContainsAddress'), (6, 7, 'ContactContainsNote'), (1, 10, 'ContactContainsAddress'), (0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 6, 'AddressBookMadeOfContact')]

```

# GED Matrix

```json
[[0.0, 11.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0], [11.0, 0.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0], [9.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [9.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [9.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [9.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [9.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [9.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [9.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [9.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [9.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [9.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [9.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [9.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [9.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [9.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [9.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [9.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [9.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [9.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [9.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [9.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [9.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [9.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [9.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [9.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [9.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [9.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [9.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [9.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]]
```

Each cell is the cost of a concrete edit path found by the bipartite assignment (BP), IPFP, and REFINE local search, so it is an upper bound on the exact GED. The interval table pairs it with the BRANCH lower bound. A cell is `exact` when both bounds coincide.

# GED value table (upper bound)

|       | gen1/output | gen2/output | gen3/output | gen4/output | gen5/output | gen6/output | gen7/output | gen8/output | gen9/output | gen10/output | gen11/output | gen12/output | gen13/output | gen14/output | gen15/output | gen16/output | gen17/output | gen18/output | gen19/output | gen20/output | gen21/output | gen22/output | gen23/output | gen24/output | gen25/output | gen26/output | gen27/output | gen28/output | gen29/output | gen30/output |
|-------|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **gen1/output** | 0.000000 | 11.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 |
| **gen2/output** |  | 0.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 |
| **gen3/output** |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen4/output** |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen5/output** |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen6/output** |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen7/output** |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen8/output** |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen9/output** |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
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
| **gen1/output** | 0.000000 | [7.500000, 11.000000] | [5.500000, 9.000000] | [5.500000, 9.000000] | [5.500000, 9.000000] | [5.500000, 9.000000] | [5.500000, 9.000000] | [5.500000, 9.000000] | [5.500000, 9.000000] | [5.500000, 9.000000] | [5.500000, 9.000000] | [5.500000, 9.000000] | [5.500000, 9.000000] | [5.500000, 9.000000] | [5.500000, 9.000000] | [5.500000, 9.000000] | [5.500000, 9.000000] | [5.500000, 9.000000] | [5.500000, 9.000000] | [5.500000, 9.000000] | [5.500000, 9.000000] | [5.500000, 9.000000] | [5.500000, 9.000000] | [5.500000, 9.000000] | [5.500000, 9.000000] | [5.500000, 9.000000] | [5.500000, 9.000000] | [5.500000, 9.000000] | [5.500000, 9.000000] | [5.500000, 9.000000] |
| **gen2/output** |  | 0.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 |
| **gen3/output** |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen4/output** |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen5/output** |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen6/output** |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen7/output** |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen8/output** |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen9/output** |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
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
| **gen1/output** | 0.000000 | 0.224490 | 0.176471 | 0.176471 | 0.176471 | 0.176471 | 0.176471 | 0.176471 | 0.176471 | 0.176471 | 0.176471 | 0.176471 | 0.176471 | 0.176471 | 0.176471 | 0.176471 | 0.176471 | 0.176471 | 0.176471 | 0.176471 | 0.176471 | 0.176471 | 0.176471 | 0.176471 | 0.176471 | 0.176471 | 0.176471 | 0.176471 | 0.176471 | 0.176471 |
| **gen2/output** |  | 0.000000 | 0.045455 | 0.045455 | 0.045455 | 0.045455 | 0.045455 | 0.045455 | 0.045455 | 0.045455 | 0.045455 | 0.045455 | 0.045455 | 0.045455 | 0.045455 | 0.045455 | 0.045455 | 0.045455 | 0.045455 | 0.045455 | 0.045455 | 0.045455 | 0.045455 | 0.045455 | 0.045455 | 0.045455 | 0.045455 | 0.045455 | 0.045455 | 0.045455 |
| **gen3/output** |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen4/output** |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen5/output** |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen6/output** |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen7/output** |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen8/output** |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **gen9/output** |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
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
| **gen1/output** | exact | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded | bounded |
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

Pairs: 435; exact pairs: 406; bounded pairs: 29; mean relative gap: 2.58%; max relative gap: 38.89%; invalid files: 0.
