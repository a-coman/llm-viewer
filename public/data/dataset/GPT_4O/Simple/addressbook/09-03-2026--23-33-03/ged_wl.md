# Adj, edge, label 
```
Adj1-output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 0, 1, 0, 1, 0], [1, 0, 0, 0, 0, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 1, 0, 1, 0, 1], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0]]

Labels1-output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Note', 6: 'Address', 7: 'Address', 8: 'Relationship', 9: 'Relationship'}

Edges1-output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (1, 4, 'ContactContainsNote'), (3, 5, 'ContactContainsNote'), (1, 8, 'ContactToRelationship'), (8, 2, 'RelationshipToContact'), (2, 9, 'ContactToRelationship'), (9, 3, 'RelationshipToContact'), (1, 6, 'ContactContainsAddress'), (3, 7, 'ContactContainsAddress')]

Adj2-output.soil: [[0, 1, 1, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 1, 1], [1, 0, 0, 1, 1, 0, 1, 1], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0]]

Labels2-output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Note', 4: 'Note', 5: 'Address', 6: 'Relationship', 7: 'Relationship'}

Edges2-output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (2, 3, 'ContactContainsNote'), (2, 4, 'ContactContainsNote'), (1, 6, 'ContactToRelationship'), (6, 2, 'RelationshipToContact'), (2, 7, 'ContactToRelationship'), (7, 1, 'RelationshipToContact'), (1, 5, 'ContactContainsAddress')]

Adj3-output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 1, 0, 1, 1, 0], [1, 0, 0, 0, 0, 0, 0, 1, 1], [0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0], [0, 1, 0, 1, 0, 0, 0, 0, 0]]

Labels3-output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Address', 6: 'Address', 7: 'Relationship', 8: 'Relationship'}

Edges3-output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (2, 4, 'ContactContainsNote'), (1, 8, 'ContactToRelationship'), (8, 3, 'RelationshipToContact'), (3, 7, 'ContactToRelationship'), (7, 2, 'RelationshipToContact'), (1, 5, 'ContactContainsAddress'), (2, 6, 'ContactContainsAddress')]

Adj4-output.soil: [[0, 1, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 1], [1, 0, 0, 1, 1, 0, 1], [0, 0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0]]

Labels4-output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Note', 4: 'Note', 5: 'Address', 6: 'Relationship'}

Edges4-output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (2, 3, 'ContactContainsNote'), (2, 4, 'ContactContainsNote'), (1, 6, 'ContactToRelationship'), (6, 2, 'RelationshipToContact'), (1, 5, 'ContactContainsAddress')]

Adj5-output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1, 1], [1, 0, 0, 0, 1, 0, 1, 1, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0]]

Labels5-output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Address', 6: 'Address', 7: 'Relationship', 8: 'Relationship'}

Edges5-output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (3, 4, 'ContactContainsNote'), (2, 7, 'ContactToRelationship'), (7, 3, 'RelationshipToContact'), (1, 8, 'ContactToRelationship'), (8, 2, 'RelationshipToContact'), (1, 5, 'ContactContainsAddress'), (3, 6, 'ContactContainsAddress')]

Adj6-output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 1, 0], [1, 0, 0, 0, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 1, 0, 1, 0, 1], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0]]

Labels6-output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Note', 6: 'Address', 7: 'Address', 8: 'Relationship', 9: 'Relationship'}

Edges6-output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (2, 4, 'ContactContainsNote'), (3, 5, 'ContactContainsNote'), (1, 8, 'ContactToRelationship'), (8, 2, 'RelationshipToContact'), (2, 9, 'ContactToRelationship'), (9, 3, 'RelationshipToContact'), (1, 6, 'ContactContainsAddress'), (3, 7, 'ContactContainsAddress')]

Adj7-output.soil: [[0, 1, 1, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 0, 1, 1], [1, 0, 0, 1, 0, 1, 1, 1], [0, 0, 1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0]]

Labels7-output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Note', 4: 'Address', 5: 'Address', 6: 'Relationship', 7: 'Relationship'}

Edges7-output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (2, 3, 'ContactContainsNote'), (1, 7, 'ContactToRelationship'), (7, 2, 'RelationshipToContact'), (2, 6, 'ContactToRelationship'), (6, 1, 'RelationshipToContact'), (1, 4, 'ContactContainsAddress'), (2, 5, 'ContactContainsAddress')]

Adj8-output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 1, 0, 1, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0]]

Labels8-output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Note', 6: 'Address', 7: 'Address', 8: 'Relationship', 9: 'Relationship'}

Edges8-output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (2, 4, 'ContactContainsNote'), (3, 5, 'ContactContainsNote'), (1, 9, 'ContactToRelationship'), (9, 2, 'RelationshipToContact'), (2, 8, 'ContactToRelationship'), (8, 3, 'RelationshipToContact'), (1, 6, 'ContactContainsAddress'), (3, 7, 'ContactContainsAddress')]

Adj9-output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 1, 0, 1, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0]]

Labels9-output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Note', 6: 'Address', 7: 'Address', 8: 'Relationship', 9: 'Relationship'}

Edges9-output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (2, 4, 'ContactContainsNote'), (3, 5, 'ContactContainsNote'), (1, 9, 'ContactToRelationship'), (9, 2, 'RelationshipToContact'), (3, 8, 'ContactToRelationship'), (8, 2, 'RelationshipToContact'), (1, 6, 'ContactContainsAddress'), (3, 7, 'ContactContainsAddress')]

Adj10-output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 1, 0], [1, 0, 0, 0, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 1, 0, 1, 0, 1], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0]]

Labels10-output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Note', 6: 'Address', 7: 'Address', 8: 'Relationship', 9: 'Relationship'}

Edges10-output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (2, 4, 'ContactContainsNote'), (3, 5, 'ContactContainsNote'), (1, 8, 'ContactToRelationship'), (8, 2, 'RelationshipToContact'), (2, 9, 'ContactToRelationship'), (9, 3, 'RelationshipToContact'), (1, 6, 'ContactContainsAddress'), (3, 7, 'ContactContainsAddress')]

Adj11-output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 1, 0], [1, 0, 0, 0, 0, 1, 0, 0, 1, 1], [1, 0, 0, 0, 1, 0, 0, 1, 0, 1], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0]]

Labels11-output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Note', 6: 'Address', 7: 'Address', 8: 'Relationship', 9: 'Relationship'}

Edges11-output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (3, 4, 'ContactContainsNote'), (2, 5, 'ContactContainsNote'), (1, 8, 'ContactToRelationship'), (8, 2, 'RelationshipToContact'), (2, 9, 'ContactToRelationship'), (9, 3, 'RelationshipToContact'), (1, 6, 'ContactContainsAddress'), (3, 7, 'ContactContainsAddress')]

Adj12-output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 1, 0, 1, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0]]

Labels12-output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Note', 6: 'Address', 7: 'Address', 8: 'Relationship', 9: 'Relationship'}

Edges12-output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (2, 4, 'ContactContainsNote'), (3, 5, 'ContactContainsNote'), (1, 9, 'ContactToRelationship'), (9, 2, 'RelationshipToContact'), (2, 8, 'ContactToRelationship'), (8, 3, 'RelationshipToContact'), (1, 6, 'ContactContainsAddress'), (3, 7, 'ContactContainsAddress')]

Adj13-output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 1, 0, 1, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0]]

Labels13-output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Note', 6: 'Address', 7: 'Address', 8: 'Relationship', 9: 'Relationship'}

Edges13-output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (2, 4, 'ContactContainsNote'), (3, 5, 'ContactContainsNote'), (1, 9, 'ContactToRelationship'), (9, 2, 'RelationshipToContact'), (2, 8, 'ContactToRelationship'), (8, 3, 'RelationshipToContact'), (1, 6, 'ContactContainsAddress'), (3, 7, 'ContactContainsAddress')]

Adj14-output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 1, 0, 1, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0]]

Labels14-output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Note', 6: 'Address', 7: 'Address', 8: 'Relationship', 9: 'Relationship'}

Edges14-output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (2, 4, 'ContactContainsNote'), (3, 5, 'ContactContainsNote'), (1, 9, 'ContactToRelationship'), (9, 2, 'RelationshipToContact'), (2, 8, 'ContactToRelationship'), (8, 3, 'RelationshipToContact'), (1, 6, 'ContactContainsAddress'), (3, 7, 'ContactContainsAddress')]

Adj15-output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 1, 0], [1, 0, 0, 0, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 1, 0, 1, 0, 1], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0]]

Labels15-output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Note', 6: 'Address', 7: 'Address', 8: 'Relationship', 9: 'Relationship'}

Edges15-output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (2, 4, 'ContactContainsNote'), (3, 5, 'ContactContainsNote'), (1, 8, 'ContactToRelationship'), (8, 2, 'RelationshipToContact'), (2, 9, 'ContactToRelationship'), (9, 3, 'RelationshipToContact'), (1, 6, 'ContactContainsAddress'), (3, 7, 'ContactContainsAddress')]

Adj16-output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 1, 0, 1, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0]]

Labels16-output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Note', 6: 'Address', 7: 'Address', 8: 'Relationship', 9: 'Relationship'}

Edges16-output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (2, 4, 'ContactContainsNote'), (3, 5, 'ContactContainsNote'), (1, 9, 'ContactToRelationship'), (9, 2, 'RelationshipToContact'), (2, 8, 'ContactToRelationship'), (8, 3, 'RelationshipToContact'), (1, 6, 'ContactContainsAddress'), (3, 7, 'ContactContainsAddress')]

Adj17-output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 1, 0, 1, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0]]

Labels17-output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Note', 6: 'Address', 7: 'Address', 8: 'Relationship', 9: 'Relationship'}

Edges17-output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (2, 4, 'ContactContainsNote'), (3, 5, 'ContactContainsNote'), (1, 9, 'ContactToRelationship'), (9, 2, 'RelationshipToContact'), (2, 8, 'ContactToRelationship'), (8, 3, 'RelationshipToContact'), (1, 6, 'ContactContainsAddress'), (3, 7, 'ContactContainsAddress')]

Adj18-output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 1, 0], [1, 0, 0, 0, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 1, 0, 1, 0, 1], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0]]

Labels18-output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Note', 6: 'Address', 7: 'Address', 8: 'Relationship', 9: 'Relationship'}

Edges18-output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (2, 4, 'ContactContainsNote'), (3, 5, 'ContactContainsNote'), (1, 8, 'ContactToRelationship'), (8, 2, 'RelationshipToContact'), (2, 9, 'ContactToRelationship'), (9, 3, 'RelationshipToContact'), (1, 6, 'ContactContainsAddress'), (3, 7, 'ContactContainsAddress')]

Adj19-output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 1, 0, 1, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0]]

Labels19-output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Note', 6: 'Address', 7: 'Address', 8: 'Relationship', 9: 'Relationship'}

Edges19-output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (2, 4, 'ContactContainsNote'), (3, 5, 'ContactContainsNote'), (1, 9, 'ContactToRelationship'), (9, 2, 'RelationshipToContact'), (2, 8, 'ContactToRelationship'), (8, 3, 'RelationshipToContact'), (1, 6, 'ContactContainsAddress'), (3, 7, 'ContactContainsAddress')]

Adj20-output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 1, 0], [1, 0, 0, 0, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 1, 0, 1, 0, 1], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0]]

Labels20-output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Note', 6: 'Address', 7: 'Address', 8: 'Relationship', 9: 'Relationship'}

Edges20-output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (2, 4, 'ContactContainsNote'), (3, 5, 'ContactContainsNote'), (1, 8, 'ContactToRelationship'), (8, 2, 'RelationshipToContact'), (2, 9, 'ContactToRelationship'), (9, 3, 'RelationshipToContact'), (1, 6, 'ContactContainsAddress'), (3, 7, 'ContactContainsAddress')]

Adj21-output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 1, 0, 1, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0]]

Labels21-output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Note', 6: 'Address', 7: 'Address', 8: 'Relationship', 9: 'Relationship'}

Edges21-output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (2, 4, 'ContactContainsNote'), (3, 5, 'ContactContainsNote'), (1, 9, 'ContactToRelationship'), (9, 2, 'RelationshipToContact'), (2, 8, 'ContactToRelationship'), (8, 3, 'RelationshipToContact'), (1, 6, 'ContactContainsAddress'), (3, 7, 'ContactContainsAddress')]

Adj22-output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 1, 0], [1, 0, 0, 0, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 1, 0, 1, 0, 1], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0]]

Labels22-output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Note', 6: 'Address', 7: 'Address', 8: 'Relationship', 9: 'Relationship'}

Edges22-output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (2, 4, 'ContactContainsNote'), (3, 5, 'ContactContainsNote'), (1, 8, 'ContactToRelationship'), (8, 2, 'RelationshipToContact'), (2, 9, 'ContactToRelationship'), (9, 3, 'RelationshipToContact'), (1, 6, 'ContactContainsAddress'), (3, 7, 'ContactContainsAddress')]

Adj23-output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 1, 0, 1, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0]]

Labels23-output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Note', 6: 'Address', 7: 'Address', 8: 'Relationship', 9: 'Relationship'}

Edges23-output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (2, 4, 'ContactContainsNote'), (3, 5, 'ContactContainsNote'), (1, 9, 'ContactToRelationship'), (9, 2, 'RelationshipToContact'), (2, 8, 'ContactToRelationship'), (8, 3, 'RelationshipToContact'), (1, 6, 'ContactContainsAddress'), (3, 7, 'ContactContainsAddress')]

Adj24-output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 1, 0, 1, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0]]

Labels24-output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Note', 6: 'Address', 7: 'Address', 8: 'Relationship', 9: 'Relationship'}

Edges24-output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (2, 4, 'ContactContainsNote'), (3, 5, 'ContactContainsNote'), (1, 9, 'ContactToRelationship'), (9, 2, 'RelationshipToContact'), (2, 8, 'ContactToRelationship'), (8, 3, 'RelationshipToContact'), (1, 6, 'ContactContainsAddress'), (3, 7, 'ContactContainsAddress')]

Adj25-output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 1, 0], [1, 0, 0, 0, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 1, 0, 1, 0, 1], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0]]

Labels25-output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Note', 6: 'Address', 7: 'Address', 8: 'Relationship', 9: 'Relationship'}

Edges25-output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (2, 4, 'ContactContainsNote'), (3, 5, 'ContactContainsNote'), (1, 8, 'ContactToRelationship'), (8, 2, 'RelationshipToContact'), (2, 9, 'ContactToRelationship'), (9, 3, 'RelationshipToContact'), (1, 6, 'ContactContainsAddress'), (3, 7, 'ContactContainsAddress')]

Adj26-output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 1, 0, 1, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0]]

Labels26-output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Note', 6: 'Address', 7: 'Address', 8: 'Relationship', 9: 'Relationship'}

Edges26-output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (2, 4, 'ContactContainsNote'), (3, 5, 'ContactContainsNote'), (1, 9, 'ContactToRelationship'), (9, 2, 'RelationshipToContact'), (2, 8, 'ContactToRelationship'), (8, 3, 'RelationshipToContact'), (1, 6, 'ContactContainsAddress'), (3, 7, 'ContactContainsAddress')]

Adj27-output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 1, 0], [1, 0, 0, 0, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 1, 0, 1, 0, 1], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0]]

Labels27-output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Note', 6: 'Address', 7: 'Address', 8: 'Relationship', 9: 'Relationship'}

Edges27-output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (2, 4, 'ContactContainsNote'), (3, 5, 'ContactContainsNote'), (1, 8, 'ContactToRelationship'), (8, 2, 'RelationshipToContact'), (2, 9, 'ContactToRelationship'), (9, 3, 'RelationshipToContact'), (1, 6, 'ContactContainsAddress'), (3, 7, 'ContactContainsAddress')]

Adj28-output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 1, 0], [1, 0, 0, 0, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 1, 0, 1, 0, 1], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0]]

Labels28-output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Note', 6: 'Address', 7: 'Address', 8: 'Relationship', 9: 'Relationship'}

Edges28-output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (2, 4, 'ContactContainsNote'), (3, 5, 'ContactContainsNote'), (1, 8, 'ContactToRelationship'), (8, 2, 'RelationshipToContact'), (2, 9, 'ContactToRelationship'), (9, 3, 'RelationshipToContact'), (1, 6, 'ContactContainsAddress'), (3, 7, 'ContactContainsAddress')]

Adj29-output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 1, 0, 1, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0]]

Labels29-output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Note', 6: 'Address', 7: 'Address', 8: 'Relationship', 9: 'Relationship'}

Edges29-output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (2, 4, 'ContactContainsNote'), (3, 5, 'ContactContainsNote'), (1, 9, 'ContactToRelationship'), (9, 2, 'RelationshipToContact'), (2, 8, 'ContactToRelationship'), (8, 3, 'RelationshipToContact'), (1, 6, 'ContactContainsAddress'), (3, 7, 'ContactContainsAddress')]

Adj30-output.soil: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 1, 0], [1, 0, 0, 0, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 1, 0, 1, 0, 1], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0]]

Labels30-output.soil: {0: 'AddressBook', 1: 'Company', 2: 'Person', 3: 'Person', 4: 'Note', 5: 'Note', 6: 'Address', 7: 'Address', 8: 'Relationship', 9: 'Relationship'}

Edges30-output.soil: [(0, 1, 'AddressBookMadeOfContact'), (0, 2, 'AddressBookMadeOfContact'), (0, 3, 'AddressBookMadeOfContact'), (2, 4, 'ContactContainsNote'), (3, 5, 'ContactContainsNote'), (1, 8, 'ContactToRelationship'), (8, 2, 'RelationshipToContact'), (2, 9, 'ContactToRelationship'), (9, 3, 'RelationshipToContact'), (1, 6, 'ContactContainsAddress'), (3, 7, 'ContactContainsAddress')]

```
# GED Matrix: 
```
[[0.0, 4.0, 2.0, 11.0, 2.0, 2.0, 4.0, 2.0, 4.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0], [4.0, 0.0, 2.0, 3.0, 2.0, 8.0, 2.0, 8.0, 4.0, 8.0, 4.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0], [2.0, 2.0, 0.0, 9.0, 0.0, 2.0, 7.0, 2.0, 4.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0], [11.0, 3.0, 9.0, 0.0, 9.0, 9.0, 5.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0], [2.0, 2.0, 0.0, 9.0, 0.0, 2.0, 7.0, 2.0, 4.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0], [2.0, 8.0, 2.0, 9.0, 2.0, 0.0, 8.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [4.0, 2.0, 7.0, 5.0, 7.0, 8.0, 0.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0], [2.0, 8.0, 2.0, 9.0, 2.0, 0.0, 4.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [4.0, 4.0, 4.0, 9.0, 4.0, 2.0, 4.0, 2.0, 0.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0], [2.0, 8.0, 2.0, 9.0, 2.0, 0.0, 4.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [2.0, 4.0, 2.0, 9.0, 2.0, 0.0, 4.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [2.0, 8.0, 2.0, 9.0, 2.0, 0.0, 4.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [2.0, 8.0, 2.0, 9.0, 2.0, 0.0, 4.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [2.0, 8.0, 2.0, 9.0, 2.0, 0.0, 4.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [2.0, 8.0, 2.0, 9.0, 2.0, 0.0, 4.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [2.0, 8.0, 2.0, 9.0, 2.0, 0.0, 4.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [2.0, 8.0, 2.0, 9.0, 2.0, 0.0, 4.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [2.0, 8.0, 2.0, 9.0, 2.0, 0.0, 4.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [2.0, 8.0, 2.0, 9.0, 2.0, 0.0, 4.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [2.0, 8.0, 2.0, 9.0, 2.0, 0.0, 4.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [2.0, 8.0, 2.0, 9.0, 2.0, 0.0, 4.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [2.0, 8.0, 2.0, 9.0, 2.0, 0.0, 4.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [2.0, 8.0, 2.0, 9.0, 2.0, 0.0, 4.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [2.0, 8.0, 2.0, 9.0, 2.0, 0.0, 4.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [2.0, 8.0, 2.0, 9.0, 2.0, 0.0, 4.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [2.0, 8.0, 2.0, 9.0, 2.0, 0.0, 4.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [2.0, 8.0, 2.0, 9.0, 2.0, 0.0, 4.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [2.0, 8.0, 2.0, 9.0, 2.0, 0.0, 4.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [2.0, 8.0, 2.0, 9.0, 2.0, 0.0, 4.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [2.0, 8.0, 2.0, 9.0, 2.0, 0.0, 4.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]]
```
# GED 2D table: 
|       | output1 | output2 | output3 | output4 | output5 | output6 | output7 | output8 | output9 | output10 | output11 | output12 | output13 | output14 | output15 | output16 | output17 | output18 | output19 | output20 | output21 | output22 | output23 | output24 | output25 | output26 | output27 | output28 | output29 | output30 |
|-------|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **output1** | 0.000000 | 4.000000 | 2.000000 | 11.000000 | 2.000000 | 2.000000 | 4.000000 | 2.000000 | 4.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 |
| **output2** |  | 0.000000 | 2.000000 | 3.000000 | 2.000000 | 8.000000 | 2.000000 | 8.000000 | 4.000000 | 8.000000 | 4.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 | 8.000000 |
| **output3** |  |  | 0.000000 | 9.000000 | 0.000000 | 2.000000 | 7.000000 | 2.000000 | 4.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 |
| **output4** |  |  |  | 0.000000 | 9.000000 | 9.000000 | 5.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 | 9.000000 |
| **output5** |  |  |  |  | 0.000000 | 2.000000 | 7.000000 | 2.000000 | 4.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 |
| **output6** |  |  |  |  |  | 0.000000 | 8.000000 | 0.000000 | 2.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **output7** |  |  |  |  |  |  | 0.000000 | 4.000000 | 4.000000 | 4.000000 | 4.000000 | 4.000000 | 4.000000 | 4.000000 | 4.000000 | 4.000000 | 4.000000 | 4.000000 | 4.000000 | 4.000000 | 4.000000 | 4.000000 | 4.000000 | 4.000000 | 4.000000 | 4.000000 | 4.000000 | 4.000000 | 4.000000 | 4.000000 |
| **output8** |  |  |  |  |  |  |  | 0.000000 | 2.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **output9** |  |  |  |  |  |  |  |  | 0.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 | 2.000000 |
| **output10** |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **output11** |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **output12** |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **output13** |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **output14** |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **output15** |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **output16** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **output17** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **output18** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
| **output19** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 |
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
| **output1** | 1.000000 | 0.789474 | 0.900000 | 0.371429 | 0.900000 | 0.904762 | 0.789474 | 0.904762 | 0.809524 | 0.904762 | 0.904762 | 0.904762 | 0.904762 | 0.904762 | 0.904762 | 0.904762 | 0.904762 | 0.904762 | 0.904762 | 0.904762 | 0.904762 | 0.904762 | 0.904762 | 0.904762 | 0.904762 | 0.904762 | 0.904762 | 0.904762 | 0.904762 | 0.904762 |
| **output2** |  | 1.000000 | 0.888889 | 0.806452 | 0.888889 | 0.578947 | 0.882353 | 0.578947 | 0.789474 | 0.578947 | 0.789474 | 0.578947 | 0.578947 | 0.578947 | 0.578947 | 0.578947 | 0.578947 | 0.578947 | 0.578947 | 0.578947 | 0.578947 | 0.578947 | 0.578947 | 0.578947 | 0.578947 | 0.578947 | 0.578947 | 0.578947 | 0.578947 | 0.578947 |
| **output3** |  |  | 1.000000 | 0.454545 | 1.000000 | 0.900000 | 0.611111 | 0.900000 | 0.800000 | 0.900000 | 0.900000 | 0.900000 | 0.900000 | 0.900000 | 0.900000 | 0.900000 | 0.900000 | 0.900000 | 0.900000 | 0.900000 | 0.900000 | 0.900000 | 0.900000 | 0.900000 | 0.900000 | 0.900000 | 0.900000 | 0.900000 | 0.900000 | 0.900000 |
| **output4** |  |  |  | 1.000000 | 0.454545 | 0.485714 | 0.677419 | 0.485714 | 0.485714 | 0.485714 | 0.485714 | 0.485714 | 0.485714 | 0.485714 | 0.485714 | 0.485714 | 0.485714 | 0.485714 | 0.485714 | 0.485714 | 0.485714 | 0.485714 | 0.485714 | 0.485714 | 0.485714 | 0.485714 | 0.485714 | 0.485714 | 0.485714 | 0.485714 |
| **output5** |  |  |  |  | 1.000000 | 0.900000 | 0.611111 | 0.900000 | 0.800000 | 0.900000 | 0.900000 | 0.900000 | 0.900000 | 0.900000 | 0.900000 | 0.900000 | 0.900000 | 0.900000 | 0.900000 | 0.900000 | 0.900000 | 0.900000 | 0.900000 | 0.900000 | 0.900000 | 0.900000 | 0.900000 | 0.900000 | 0.900000 | 0.900000 |
| **output6** |  |  |  |  |  | 1.000000 | 0.578947 | 1.000000 | 0.904762 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 |
| **output7** |  |  |  |  |  |  | 1.000000 | 0.789474 | 0.789474 | 0.789474 | 0.789474 | 0.789474 | 0.789474 | 0.789474 | 0.789474 | 0.789474 | 0.789474 | 0.789474 | 0.789474 | 0.789474 | 0.789474 | 0.789474 | 0.789474 | 0.789474 | 0.789474 | 0.789474 | 0.789474 | 0.789474 | 0.789474 | 0.789474 |
| **output8** |  |  |  |  |  |  |  | 1.000000 | 0.904762 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 |
| **output9** |  |  |  |  |  |  |  |  | 1.000000 | 0.904762 | 0.904762 | 0.904762 | 0.904762 | 0.904762 | 0.904762 | 0.904762 | 0.904762 | 0.904762 | 0.904762 | 0.904762 | 0.904762 | 0.904762 | 0.904762 | 0.904762 | 0.904762 | 0.904762 | 0.904762 | 0.904762 | 0.904762 | 0.904762 |
| **output10** |  |  |  |  |  |  |  |  |  | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 |
| **output11** |  |  |  |  |  |  |  |  |  |  | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 |
| **output12** |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 |
| **output13** |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 |
| **output14** |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 |
| **output15** |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 |
| **output16** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 |
| **output17** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 |
| **output18** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 |
| **output19** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 | 1.000000 |
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