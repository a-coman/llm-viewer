# Generation 1
## Category baseline
```
!new Client('client1')
!client1.clientId := 1023
!client1.isSuspended := false

!new Rental('rental1')
!rental1.date := Date('2023-07-15')

!new Movie('movie1')
!movie1.title := 'The Adventurer\'s Quest'
!movie1.availableCopies := 5
!movie1.genre := #Action

!new Series('series1')
!series1.title := 'Comedy Nights Season 2'
!series1.availableCopies := 3
!series1.episode := 4

!new Actor('actor1')
!actor1.name := 'Liam O\'Sullivan'

!new Actor('actor2')
!actor2.name := 'Sophia Chen'

!insert (client1, rental1) into ClientRental
!insert (rental1, movie1) into RentalCassette
!insert (rental1, series1) into RentalCassette

!insert (movie1, actor1) into CassetteActor
!insert (movie1, actor2) into CassetteActor
!insert (series1, actor2) into CassetteActor
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 23 | 0.00% |
| Multiplicities Errors | 0 | 6 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 2 | 2 | 100.00% |
| Types (out of valid Titles) | 0 | 0 | 0.00% |
| Genres (out of valid Titles) | 0 | 0 | 0.00% |
| Actors (out of valid Titles) | 0 | 0 | 0.00% |
| Release year > Rental year (out of valid Titles) | 0 | 0 | 0.00% |

| Failed Titles | 
|---| 
```
The Adventurer\s Quest
```
```
Comedy Nights Season 2
```

## Category boundary
```
!new Client('client4')
!client4.clientId := 1
!client4.isSuspended := false

!new Rental('rental5')
!rental5.date := Date('2023-12-01')

!new Movie('movie4')
!movie4.title := 'Silent Action'
!movie4.availableCopies := 1
!movie4.genre := #Action

!new Series('series4')
!series4.title := 'Fun Times'
!series4.availableCopies := 0
!series4.episode := 1

!new Actor('actor7')
!actor7.name := 'John Doe'

!insert (client4, rental5) into ClientRental

!insert (rental5, movie4) into RentalCassette
!insert (rental5, series4) into RentalCassette

!insert (movie4, actor7) into CassetteActor
!insert (series4, actor7) into CassetteActor
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 20 | 0.00% |
| Multiplicities Errors | 0 | 5 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 0 | 2 | 0.00% |
| Types (out of valid Titles) | 1 | 2 | 50.00% |
| Genres (out of valid Titles) | 0 | 1 | 0.00% |
| Actors (out of valid Titles) | 2 | 2 | 100.00% |
| Release year > Rental year (out of valid Titles) | 0 | 2 | 0.00% |

| Failed Types | 
|---| 
```
Parsed type: series != API type: movie
```

| Failed Actors | 
|---| 
```
John Doe for movie: Fun Times
```
```
John Doe for movie: Silent Action
```

## Category complex
```
!new Client('client2')
!client2.clientId := 102
!client2.isSuspended := false

!new Client('client3')
!client3.clientId := 205
!client3.isSuspended := true

!new Rental('rental2')
!rental2.date := Date('2023-09-05')

!new Rental('rental3')
!rental3.date := Date('2023-10-15')

!new Rental('rental4')
!rental4.date := Date('2023-11-01')

!new Movie('movie2')
!movie2.title := 'The Great Escape'
!movie2.availableCopies := 5
!movie2.genre := #Action

!new Movie('movie3')
!movie3.title := 'Laugh Out Loud'
!movie3.availableCopies := 2
!movie3.genre := #Comedy

!new Series('series2')
!series2.title := 'Mystery of the East'
!series2.availableCopies := 4
!series2.episode := 3

!new Series('series3')
!series3.title := 'Urban Legends'
!series3.availableCopies := 6
!series3.episode := 7

!new Actor('actor3')
!actor3.name := 'Tom Hardy'

!new Actor('actor4')
!actor4.name := 'Maya Lopez'

!new Actor('actor5')
!actor5.name := 'John Smith'

!new Actor('actor6')
!actor6.name := 'Priya Patel'

!insert (client2, rental2) into ClientRental
!insert (client2, rental3) into ClientRental
!insert (client3, rental4) into ClientRental

!insert (rental2, movie2) into RentalCassette
!insert (rental2, series2) into RentalCassette
!insert (rental3, movie3) into RentalCassette
!insert (rental4, series3) into RentalCassette

!insert (movie2, actor3) into CassetteActor
!insert (movie2, actor4) into CassetteActor
!insert (movie3, actor4) into CassetteActor
!insert (movie3, actor5) into CassetteActor
!insert (series2, actor6) into CassetteActor
!insert (series2, actor5) into CassetteActor
!insert (series3, actor6) into CassetteActor
!insert (series3, actor3) into CassetteActor
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 51 | 0.00% |
| Multiplicities Errors | 0 | 15 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 1 | 4 | 25.00% |
| Types (out of valid Titles) | 0 | 3 | 0.00% |
| Genres (out of valid Titles) | 1 | 2 | 50.00% |
| Actors (out of valid Titles) | 6 | 6 | 100.00% |
| Release year > Rental year (out of valid Titles) | 0 | 3 | 0.00% |

| Failed Titles | 
|---| 
```
Mystery of the East
```

| Failed Genres | 
|---| 
```
Parsed genre: Action != API genre: [Adventure, Drama, Thriller]
```

| Failed Actors | 
|---| 
```
Maya Lopez for movie: Laugh Out Loud
```
```
John Smith for movie: Laugh Out Loud
```
```
Tom Hardy for movie: The Great Escape
```
```
Maya Lopez for movie: The Great Escape
```
```
Priya Patel for movie: Urban Legends
```
```
Tom Hardy for movie: Urban Legends
```

## Category edge
```
!new Client('client6')
!client6.clientId := 2147483647
!client6.isSuspended := false

!new Rental('rental7')
!rental7.date := Date('2023-10-15')

!new Movie('movie7')
!movie7.title := 'Zorros of the Sahara'
!movie7.availableCopies := 0
!movie7.genre := #Action

!new Movie('movie8')
!movie8.title := 'Laugh Like a Local'
!movie8.availableCopies := 999999999
!movie8.genre := #Comedy

!new Series('series6')
!series6.title := 'Tommy\'s Tournament'
!series6.availableCopies := 1
!series6.episode := 32768

!new Actor('actor11')
!actor11.name := 'Pedro Lopez'

!new Actor('actor12')
!actor12.name := 'Ayesha Rai'

!new Actor('actor13')
!actor13.name := 'Aiden O\'Connell'

!new Actor('actor14')
!actor14.name := 'Sasha Kimura'

!new Actor('actor15')
!actor15.name := 'Lee Min-ho'

!insert (client6, rental7) into ClientRental

!insert (rental7, movie7) into RentalCassette
!insert (rental7, movie8) into RentalCassette
!insert (rental7, series6) into RentalCassette

!insert (movie7, actor11) into CassetteActor
!insert (movie7, actor12) into CassetteActor

!insert (movie8, actor13) into CassetteActor

!insert (series6, actor14) into CassetteActor
!insert (series6, actor15) into CassetteActor
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 36 | 0.00% |
| Multiplicities Errors | 0 | 9 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 3 | 3 | 100.00% |
| Types (out of valid Titles) | 0 | 0 | 0.00% |
| Genres (out of valid Titles) | 0 | 0 | 0.00% |
| Actors (out of valid Titles) | 0 | 0 | 0.00% |
| Release year > Rental year (out of valid Titles) | 0 | 0 | 0.00% |

| Failed Titles | 
|---| 
```
Tommy\s Tournament
```
```
Zorros of the Sahara
```
```
Laugh Like a Local
```

## Category invalid
```
!new Client('client5')
!client5.clientId := 42
!client5.isSuspended := false

!new Rental('rental6')
!rental6.date := Date('2023-09-22')

!new Movie('movie5')
!movie5.title := 'The Balkans\' Beat'
!movie5.availableCopies := 5
!movie5.genre := #Action

!new Movie('movie6')
!movie6.title := 'Sarajevo Romance'
!movie6.availableCopies := 1
!movie6.genre := #Comedy

!new Series('series5')
!series5.title := 'Old Balkans Tales'
!series5.availableCopies := 10
!series5.episode := 3

!new Actor('actor8')
!actor8.name := 'Nikola Petrovic'

!new Actor('actor9')
!actor9.name := 'Ana Jovanović'

!new Actor('actor10')
!actor10.name := 'Ibrahim Sinanović'

!insert (client5, rental6) into ClientRental

!insert (rental6, movie5) into RentalCassette
!insert (rental6, movie6) into RentalCassette
!insert (rental6, series5) into RentalCassette

!insert (movie5, actor8) into CassetteActor
!insert (movie5, actor9) into CassetteActor
!insert (movie6, actor9) into CassetteActor
!insert (series5, actor10) into CassetteActor
!insert (series5, actor8) into CassetteActor
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 9 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 3 | 3 | 100.00% |
| Types (out of valid Titles) | 0 | 0 | 0.00% |
| Genres (out of valid Titles) | 0 | 0 | 0.00% |
| Actors (out of valid Titles) | 0 | 0 | 0.00% |
| Release year > Rental year (out of valid Titles) | 0 | 0 | 0.00% |

| Failed Titles | 
|---| 
```
Old Balkans Tales
```
```
Sarajevo Romance
```
```
The Balkans\ Beat
```

## Generation 1 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 162 | 0.00% |
| Multiplicities Errors | 0 | 35 | 0.00% |
| Invariants Errors | 0 | 12 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 9 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 9 | 14 | 64.29% |
| Types (out of valid Titles) | 1 | 5 | 20.00% |
| Genres (out of valid Titles) | 1 | 3 | 33.33% |
| Actors (out of valid Titles) | 8 | 8 | 100.00% |
| Release year > Rental year (out of valid Titles) | 0 | 5 | 0.00% |

| Failed Titles | 
|---| 
```
The Adventurer\s Quest
```
```
Comedy Nights Season 2
```
```
Mystery of the East
```
```
Tommy\s Tournament
```
```
Zorros of the Sahara
```
```
Laugh Like a Local
```
```
Old Balkans Tales
```
```
Sarajevo Romance
```
```
The Balkans\ Beat
```

| Failed Types | 
|---| 
```
Parsed type: series != API type: movie
```

| Failed Genres | 
|---| 
```
Parsed genre: Action != API genre: [Adventure, Drama, Thriller]
```

| Failed Actors | 
|---| 
```
John Doe for movie: Fun Times
```
```
John Doe for movie: Silent Action
```
```
Maya Lopez for movie: Laugh Out Loud
```
```
John Smith for movie: Laugh Out Loud
```
```
Tom Hardy for movie: The Great Escape
```
```
Maya Lopez for movie: The Great Escape
```
```
Priya Patel for movie: Urban Legends
```
```
Tom Hardy for movie: Urban Legends
```

# Generation 2
## Category baseline
```
!new Client('client7')
!client7.clientId := 2047
!client7.isSuspended := true

!new Rental('rental8')
!rental8.date := Date('2023-09-10')

!new Movie('movie9')
!movie9.title := 'Galactic Warriors'
!movie9.availableCopies := 7
!movie9.genre := #Action

!new Series('series7')
!series7.title := 'Detective Chronicles Season 1'
!series7.availableCopies := 2
!series7.episode := 1

!new Series('series8')
!series8.title := 'Detective Chronicles Season 1'
!series8.availableCopies := 2
!series8.episode := 2

!new Actor('actor16')
!actor16.name := 'Miguel Sanchez'

!new Actor('actor17')
!actor17.name := 'Yuki Nakamura'

!new Actor('actor18')
!actor18.name := 'Ethan Thompson'

!insert (client7, rental8) into ClientRental

!insert (rental8, movie9) into RentalCassette
!insert (rental8, series7) into RentalCassette
!insert (rental8, series8) into RentalCassette

!insert (movie9, actor16) into CassetteActor
!insert (movie9, actor17) into CassetteActor

!insert (series7, actor18) into CassetteActor
!insert (series7, actor17) into CassetteActor

!insert (series8, actor18) into CassetteActor
!insert (series8, actor17) into CassetteActor
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 33 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 3 | 3 | 100.00% |
| Types (out of valid Titles) | 0 | 0 | 0.00% |
| Genres (out of valid Titles) | 0 | 0 | 0.00% |
| Actors (out of valid Titles) | 0 | 0 | 0.00% |
| Release year > Rental year (out of valid Titles) | 0 | 0 | 0.00% |

| Failed Titles | 
|---| 
```
Galactic Warriors
```
```
Detective Chronicles Season 1
```
```
Detective Chronicles Season 1
```

## Category boundary
```
!new Client('client10')
!client10.clientId := 2147483647
!client10.isSuspended := true

!new Rental('rental13')
!rental13.date := Date('2024-01-15')

!new Rental('rental14')
!rental14.date := Date('2024-02-01')

!new Movie('movie12')
!movie12.title := 'Epic Laughs'
!movie12.availableCopies := 0
!movie12.genre := #Comedy

!new Series('series12')
!series12.title := 'Daring Escapades'
!series12.availableCopies := 5
!series12.episode := 50

!new Actor('actor23')
!actor23.name := 'Sofia Martín'

!new Actor('actor24')
!actor24.name := 'Luis Rivera'

!insert (client10, rental13) into ClientRental
!insert (client10, rental14) into ClientRental

!insert (rental13, movie12) into RentalCassette
!insert (rental13, series12) into RentalCassette

!insert (rental14, series12) into RentalCassette

!insert (movie12, actor23) into CassetteActor
!insert (movie12, actor24) into CassetteActor

!insert (series12, actor24) into CassetteActor
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 27 | 0.00% |
| Multiplicities Errors | 0 | 8 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 2 | 2 | 100.00% |
| Types (out of valid Titles) | 0 | 0 | 0.00% |
| Genres (out of valid Titles) | 0 | 0 | 0.00% |
| Actors (out of valid Titles) | 0 | 0 | 0.00% |
| Release year > Rental year (out of valid Titles) | 0 | 0 | 0.00% |

| Failed Titles | 
|---| 
```
Epic Laughs
```
```
Daring Escapades
```

## Category complex
```
!new Client('client8')
!client8.clientId := 301
!client8.isSuspended := false

!new Client('client9')
!client9.clientId := 402
!client9.isSuspended := false

!new Rental('rental9')
!rental9.date := Date('2023-08-20')

!new Rental('rental10')
!rental10.date := Date('2023-08-25')

!new Rental('rental11')
!rental11.date := Date('2023-09-12')

!new Rental('rental12')
!rental12.date := Date('2023-10-02')

!new Movie('movie10')
!movie10.title := 'Distant Thunder'
!movie10.availableCopies := 10
!movie10.genre := #Action

!new Movie('movie11')
!movie11.title := 'Joyful Jingles'
!movie11.availableCopies := 5
!movie11.genre := #Comedy

!new Series('series9')
!series9.title := 'Tales from the North'
!series9.availableCopies := 8
!series9.episode := 1

!new Series('series10')
!series10.title := 'Safari Adventure'
!series10.availableCopies := 3
!series10.episode := 5

!new Series('series11')
!series11.title := 'London Mysteries'
!series11.availableCopies := 6
!series11.episode := 2

!new Actor('actor19')
!actor19.name := 'Anna Kendrick'

!new Actor('actor20')
!actor20.name := 'Robert Liu'

!new Actor('actor21')
!actor21.name := 'Eliott Gomez'

!new Actor('actor22')
!actor22.name := 'Jasmine Khan'

!insert (client8, rental9) into ClientRental
!insert (client8, rental11) into ClientRental

!insert (client9, rental10) into ClientRental
!insert (client9, rental12) into ClientRental

!insert (rental9, movie10) into RentalCassette
!insert (rental10, movie11) into RentalCassette
!insert (rental10, series10) into RentalCassette
!insert (rental11, series9) into RentalCassette
!insert (rental11, series10) into RentalCassette
!insert (rental12, series11) into RentalCassette

!insert (movie10, actor19) into CassetteActor
!insert (movie10, actor20) into CassetteActor

!insert (movie11, actor22) into CassetteActor
!insert (movie11, actor21) into CassetteActor

!insert (series9, actor19) into CassetteActor
!insert (series9, actor22) into CassetteActor

!insert (series10, actor20) into CassetteActor
!insert (series10, actor21) into CassetteActor

!insert (series11, actor22) into CassetteActor
!insert (series11, actor19) into CassetteActor
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 62 | 0.00% |
| Multiplicities Errors | 0 | 20 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 3 | 5 | 60.00% |
| Types (out of valid Titles) | 1 | 2 | 50.00% |
| Genres (out of valid Titles) | 1 | 1 | 100.00% |
| Actors (out of valid Titles) | 4 | 4 | 100.00% |
| Release year > Rental year (out of valid Titles) | 0 | 2 | 0.00% |

| Failed Titles | 
|---| 
```
London Mysteries
```
```
Joyful Jingles
```
```
Tales from the North
```

| Failed Types | 
|---| 
```
Parsed type: series != API type: movie
```

| Failed Genres | 
|---| 
```
Parsed genre: Action != API genre: [History]
```

| Failed Actors | 
|---| 
```
Robert Liu for movie: Safari Adventure
```
```
Eliott Gomez for movie: Safari Adventure
```
```
Anna Kendrick for movie: Distant Thunder
```
```
Robert Liu for movie: Distant Thunder
```

## Category edge
```
!new Client('client13')
!client13.clientId := 1
!client13.isSuspended := true

!new Rental('rental18')
!rental18.date := Date('2023-10-20')

!new Movie('movie17')
!movie17.title := 'The Everlasting Gag'
!movie17.availableCopies := 10
!movie17.genre := #Comedy

!new Series('series15')
!series15.title := 'Epic Sword Chronicles'
!series15.availableCopies := 50
!series15.episode := 1

!new Series('series16')
!series16.title := 'Epic Sword Chronicles: The Saga Continues'
!series16.availableCopies := 2
!series16.episode := 65535

!new Actor('actor29')
!actor29.name := 'Farah El Bastawy'

!new Actor('actor30')
!actor30.name := 'John McEdge'

!new Actor('actor31')
!actor31.name := 'Mei Lin'

!new Actor('actor32')
!actor32.name := 'Rajiv Banerjee'

!insert (client13, rental18) into ClientRental

!insert (rental18, movie17) into RentalCassette
!insert (rental18, series15) into RentalCassette
!insert (rental18, series16) into RentalCassette

!insert (movie17, actor29) into CassetteActor
!insert (movie17, actor30) into CassetteActor

!insert (series15, actor31) into CassetteActor
!insert (series15, actor32) into CassetteActor

!insert (series16, actor31) into CassetteActor
!insert (series16, actor32) into CassetteActor
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 35 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 3 | 3 | 100.00% |
| Types (out of valid Titles) | 0 | 0 | 0.00% |
| Genres (out of valid Titles) | 0 | 0 | 0.00% |
| Actors (out of valid Titles) | 0 | 0 | 0.00% |
| Release year > Rental year (out of valid Titles) | 0 | 0 | 0.00% |

| Failed Titles | 
|---| 
```
Epic Sword Chronicles: The Saga Continues
```
```
The Everlasting Gag
```
```
Epic Sword Chronicles
```

## Category invalid
```
!new Client('client11')
!client11.clientId := 87
!client11.isSuspended := false

!new Rental('rental15')
!rental15.date := Date('2023-10-15')

!new Movie('movie13')
!movie13.title := 'Voices of the Outback'
!movie13.availableCopies := 0
!movie13.genre := #Action

!new Movie('movie14')
!movie14.title := 'Dreamtime Legends'
!movie14.availableCopies := 0
!movie14.genre := #Comedy

!new Series('series13')
!series13.title := 'Walkabout Chronicles'
!series13.availableCopies := 0
!series13.episode := 1

!new Actor('actor25')
!actor25.name := 'N/A'

!insert (client11, rental15) into ClientRental

!insert (rental15, movie13) into RentalCassette
!insert (rental15, movie14) into RentalCassette
!insert (rental15, series13) into RentalCassette

!insert (movie13, actor25) into CassetteActor
!insert (movie14, actor25) into CassetteActor
!insert (series13, actor25) into CassetteActor
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 7 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 3 | 3 | 100.00% |
| Types (out of valid Titles) | 0 | 0 | 0.00% |
| Genres (out of valid Titles) | 0 | 0 | 0.00% |
| Actors (out of valid Titles) | 0 | 0 | 0.00% |
| Release year > Rental year (out of valid Titles) | 0 | 0 | 0.00% |

| Failed Titles | 
|---| 
```
Dreamtime Legends
```
```
Voices of the Outback
```
```
Walkabout Chronicles
```

## Generation 2 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 183 | 0.00% |
| Multiplicities Errors | 0 | 48 | 0.00% |
| Invariants Errors | 0 | 12 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 7 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 14 | 16 | 87.50% |
| Types (out of valid Titles) | 1 | 2 | 50.00% |
| Genres (out of valid Titles) | 1 | 1 | 100.00% |
| Actors (out of valid Titles) | 4 | 4 | 100.00% |
| Release year > Rental year (out of valid Titles) | 0 | 2 | 0.00% |

| Failed Titles | 
|---| 
```
Galactic Warriors
```
```
Detective Chronicles Season 1
```
```
Detective Chronicles Season 1
```
```
Epic Laughs
```
```
Daring Escapades
```
```
London Mysteries
```
```
Joyful Jingles
```
```
Tales from the North
```
```
Epic Sword Chronicles: The Saga Continues
```
```
The Everlasting Gag
```
```
Epic Sword Chronicles
```
```
Dreamtime Legends
```
```
Voices of the Outback
```
```
Walkabout Chronicles
```

| Failed Types | 
|---| 
```
Parsed type: series != API type: movie
```

| Failed Genres | 
|---| 
```
Parsed genre: Action != API genre: [History]
```

| Failed Actors | 
|---| 
```
Robert Liu for movie: Safari Adventure
```
```
Eliott Gomez for movie: Safari Adventure
```
```
Anna Kendrick for movie: Distant Thunder
```
```
Robert Liu for movie: Distant Thunder
```

# Generation 3
## Category baseline
```
!new Client('client12')
!client12.clientId := 3051
!client12.isSuspended := false

!new Rental('rental16')
!rental16.date := Date('2023-06-20')

!new Rental('rental17')
!rental17.date := Date('2023-08-25')

!new Movie('movie15')
!movie15.title := 'Ocean Adventures'
!movie15.availableCopies := 10
!movie15.genre := #Comedy

!new Movie('movie16')
!movie16.title := 'Space Intruders'
!movie16.availableCopies := 0
!movie16.genre := #Action  -- Assuming Action as no genre provided

!new Series('series14')
!series14.title := 'The Great Expedition Season 3'
!series14.availableCopies := 4
!series14.episode := 5

!new Actor('actor26')
!actor26.name := 'Emma Rodriguez'

!new Actor('actor27')
!actor27.name := 'Raj Patel'

!new Actor('actor28')
!actor28.name := 'Clara N’Dour'

!insert (client12, rental16) into ClientRental
!insert (client12, rental17) into ClientRental

!insert (rental16, movie15) into RentalCassette
!insert (rental16, series14) into RentalCassette

!insert (rental17, movie16) into RentalCassette

!insert (movie15, actor26) into CassetteActor

!insert (movie16, actor27) into CassetteActor
!insert (movie16, actor28) into CassetteActor

!insert (series14, actor28) into CassetteActor
!insert (series14, actor26) into CassetteActor
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 35 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 1 | 3 | 33.33% |
| Types (out of valid Titles) | 1 | 2 | 50.00% |
| Genres (out of valid Titles) | 2 | 2 | 100.00% |
| Actors (out of valid Titles) | 3 | 3 | 100.00% |
| Release year > Rental year (out of valid Titles) | 0 | 2 | 0.00% |

| Failed Titles | 
|---| 
```
The Great Expedition Season 3
```

| Failed Types | 
|---| 
```
Parsed type: movie != API type: series
```

| Failed Genres | 
|---| 
```
Parsed genre: Action  -- Assuming Action as no genre provided != API genre: [Animation, Short, Comedy]
```
```
Parsed genre: Comedy != API genre: [Documentary]
```

| Failed Actors | 
|---| 
```
Raj Patel for movie: Space Intruders
```
```
Clara N’Dour for movie: Space Intruders
```
```
Emma Rodriguez for movie: Ocean Adventures
```

## Category boundary
```
!new Client('client17')
!client17.clientId := 10000
!client17.isSuspended := false

!new Rental('rental27')
!rental27.date := Date('2024-03-05')

!new Rental('rental28')
!rental28.date := Date('2024-03-10')

!new Movie('movie22')
!movie22.title := 'Adventures in the City'
!movie22.availableCopies := 10
!movie22.genre := #Action

!new Series('series21')
!series21.title := 'Life in Symphony'
!series21.availableCopies := 0
!series21.episode := 3

!new Actor('actor40')
!actor40.name := 'Ming Zhao'

!new Actor('actor41')
!actor41.name := 'Ana Oliveira'

!insert (client17, rental27) into ClientRental
!insert (client17, rental28) into ClientRental

!insert (rental27, movie22) into RentalCassette
!insert (rental28, series21) into RentalCassette

!insert (movie22, actor40) into CassetteActor

!insert (series21, actor41) into CassetteActor
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 25 | 0.00% |
| Multiplicities Errors | 0 | 6 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 1 | 2 | 50.00% |
| Types (out of valid Titles) | 0 | 1 | 0.00% |
| Genres (out of valid Titles) | 1 | 1 | 100.00% |
| Actors (out of valid Titles) | 1 | 1 | 100.00% |
| Release year > Rental year (out of valid Titles) | 0 | 1 | 0.00% |

| Failed Titles | 
|---| 
```
Life in Symphony
```

| Failed Genres | 
|---| 
```
Parsed genre: Action != API genre: [Short, Drama]
```

| Failed Actors | 
|---| 
```
Ming Zhao for movie: Adventures in the City
```

## Category complex
```
!new Client('client14')
!client14.clientId := 503
!client14.isSuspended := true

!new Client('client15')
!client15.clientId := 604
!client15.isSuspended := false

!new Rental('rental19')
!rental19.date := Date('2023-07-14')

!new Rental('rental20')
!rental20.date := Date('2023-08-03')

!new Rental('rental21')
!rental21.date := Date('2023-09-22')

!new Rental('rental22')
!rental22.date := Date('2023-10-18')

!new Rental('rental23')
!rental23.date := Date('2023-11-05')

!new Movie('movie18')
!movie18.title := 'Wild Horizon'
!movie18.availableCopies := 7
!movie18.genre := #Action

!new Movie('movie19')
!movie19.title := 'The Laughing Hearts'
!movie19.availableCopies := 1
!movie19.genre := #Comedy

!new Series('series17')
!series17.title := 'Desert Chronicles'
!series17.availableCopies := 3
!series17.episode := 4

!new Series('series18')
!series18.title := 'Metropolis Blues'
!series18.availableCopies := 2
!series18.episode := 6

!new Series('series19')
!series19.title := 'Castaway Stories'
!series19.availableCopies := 9
!series19.episode := 10

!new Actor('actor33')
!actor33.name := 'Liam O\'Neill'

!new Actor('actor34')
!actor34.name := 'Karla Torrez'

!new Actor('actor35')
!actor35.name := 'Mischa Von Heide'

!new Actor('actor36')
!actor36.name := 'Zara Hamid'

!insert (client14, rental20) into ClientRental

!insert (client15, rental19) into ClientRental
!insert (client15, rental21) into ClientRental
!insert (client15, rental22) into ClientRental
!insert (client15, rental23) into ClientRental

!insert (rental19, movie19) into RentalCassette
!insert (rental20, movie18) into RentalCassette
!insert (rental20, series18) into RentalCassette
!insert (rental21, series17) into RentalCassette
!insert (rental21, movie18) into RentalCassette
!insert (rental22, series19) into RentalCassette
!insert (rental23, series18) into RentalCassette

!insert (movie18, actor33) into CassetteActor
!insert (movie18, actor36) into CassetteActor

!insert (movie19, actor34) into CassetteActor
!insert (movie19, actor35) into CassetteActor

!insert (series17, actor35) into CassetteActor
!insert (series17, actor34) into CassetteActor

!insert (series18, actor33) into CassetteActor
!insert (series18, actor36) into CassetteActor

!insert (series19, actor36) into CassetteActor
!insert (series19, actor35) into CassetteActor
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 66 | 0.00% |
| Multiplicities Errors | 0 | 22 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 3 | 5 | 60.00% |
| Types (out of valid Titles) | 1 | 2 | 50.00% |
| Genres (out of valid Titles) | 1 | 1 | 100.00% |
| Actors (out of valid Titles) | 4 | 4 | 100.00% |
| Release year > Rental year (out of valid Titles) | 1 | 2 | 50.00% |

| Failed Titles | 
|---| 
```
Metropolis Blues
```
```
Castaway Stories
```
```
The Laughing Hearts
```

| Failed Types | 
|---| 
```
Parsed type: series != API type: movie
```

| Failed Genres | 
|---| 
```
Parsed genre: Action != API genre: [Documentary, Short]
```

| Failed Actors | 
|---| 
```
Mischa Von Heide for movie: Desert Chronicles
```
```
Karla Torrez for movie: Desert Chronicles
```
```
Liam O\Neill for movie: Wild Horizon
```
```
Zara Hamid for movie: Wild Horizon
```

| Failed Years | 
|---| 
```
Rental year: 2023 < Release year: 2025
```

## Category edge
```
!new Client('client19')
!client19.clientId := 8964
!client19.isSuspended := false

!new Rental('rental30')
!rental30.date := Date('2023-11-01')

!new Movie('movie25')
!movie25.title := 'Mystery of the Highlands'
!movie25.availableCopies := 3
!movie25.genre := #Action

!new Series('series23')
!series23.title := 'Festival of Fun: Season 10'
!series23.availableCopies := 0
!series23.episode := 20

!new Series('series24')
!series24.title := 'Festival of Fun: Season 50'
!series24.availableCopies := 1
!series24.episode := 1050

!new Actor('actor44')
!actor44.name := 'Clara Thompson'

!new Actor('actor45')
!actor45.name := 'Ibrahim Aziz'

!new Actor('actor46')
!actor46.name := 'Rosa Delgado'

!new Actor('actor47')
!actor47.name := 'Akira Fujimoto'

!insert (client19, rental30) into ClientRental

!insert (rental30, movie25) into RentalCassette
!insert (rental30, series23) into RentalCassette
!insert (rental30, series24) into RentalCassette

!insert (movie25, actor44) into CassetteActor
!insert (movie25, actor45) into CassetteActor

!insert (series23, actor46) into CassetteActor
!insert (series23, actor47) into CassetteActor

!insert (series24, actor46) into CassetteActor
!insert (series24, actor47) into CassetteActor
!insert (series24, actor44) into CassetteActor
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 36 | 0.00% |
| Multiplicities Errors | 0 | 11 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 3 | 3 | 100.00% |
| Types (out of valid Titles) | 0 | 0 | 0.00% |
| Genres (out of valid Titles) | 0 | 0 | 0.00% |
| Actors (out of valid Titles) | 0 | 0 | 0.00% |
| Release year > Rental year (out of valid Titles) | 0 | 0 | 0.00% |

| Failed Titles | 
|---| 
```
Mystery of the Highlands
```
```
Festival of Fun: Season 10
```
```
Festival of Fun: Season 50
```

## Category invalid
```
!new Client('client18')
!client18.clientId := 150
!client18.isSuspended := true

!new Rental('rental29')
!rental29.date := Date('2023-07-30')

!new Movie('movie23')
!movie23.title := 'Echoes of the Past'
!movie23.availableCopies := 0
!movie23.genre := #Action

!new Movie('movie24')
!movie24.title := 'Parisian Reflections'
!movie24.availableCopies := 1
!movie24.genre := #Comedy

!new Series('series22')
!series22.title := 'Historic Narratives'
!series22.availableCopies := 5
!series22.episode := 10

!new Actor('actor42')
!actor42.name := 'Jean Dupont'

!new Actor('actor43')
!actor43.name := 'Maria Loren'

!insert (client18, rental29) into ClientRental

!insert (rental29, movie23) into RentalCassette
!insert (rental29, movie24) into RentalCassette
!insert (rental29, series22) into RentalCassette

!insert (series22, actor42) into CassetteActor
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 2 | 5 | 40.00% |
| Invariants Errors (Not included on General) | 0 | 3 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `CassetteActor':
  Object `movie23' of class `Movie' is connected to 0 objects of class `Actor'
  at association end `has' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `CassetteActor':
  Object `movie24' of class `Movie' is connected to 0 objects of class `Actor'
  at association end `has' but the multiplicity is specified as `1..*'.
```

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 2 | 3 | 66.67% |
| Types (out of valid Titles) | 0 | 1 | 0.00% |
| Genres (out of valid Titles) | 1 | 1 | 100.00% |
| Actors (out of valid Titles) | 0 | 0 | 0.00% |
| Release year > Rental year (out of valid Titles) | 0 | 1 | 0.00% |

| Failed Titles | 
|---| 
```
Parisian Reflections
```
```
Historic Narratives
```

| Failed Genres | 
|---| 
```
Parsed genre: Action != API genre: [Drama]
```

## Generation 3 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 188 | 0.00% |
| Multiplicities Errors | 0 | 49 | 0.00% |
| Invariants Errors | 0 | 12 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 2 | 5 | 40.00% |
| Invariants Errors (Not included on General) | 0 | 3 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `CassetteActor':
  Object `movie23' of class `Movie' is connected to 0 objects of class `Actor'
  at association end `has' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `CassetteActor':
  Object `movie24' of class `Movie' is connected to 0 objects of class `Actor'
  at association end `has' but the multiplicity is specified as `1..*'.
```

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 10 | 16 | 62.50% |
| Types (out of valid Titles) | 2 | 6 | 33.33% |
| Genres (out of valid Titles) | 5 | 5 | 100.00% |
| Actors (out of valid Titles) | 8 | 8 | 100.00% |
| Release year > Rental year (out of valid Titles) | 1 | 6 | 16.67% |

| Failed Titles | 
|---| 
```
The Great Expedition Season 3
```
```
Life in Symphony
```
```
Metropolis Blues
```
```
Castaway Stories
```
```
The Laughing Hearts
```
```
Mystery of the Highlands
```
```
Festival of Fun: Season 10
```
```
Festival of Fun: Season 50
```
```
Parisian Reflections
```
```
Historic Narratives
```

| Failed Types | 
|---| 
```
Parsed type: movie != API type: series
```
```
Parsed type: series != API type: movie
```

| Failed Genres | 
|---| 
```
Parsed genre: Action  -- Assuming Action as no genre provided != API genre: [Animation, Short, Comedy]
```
```
Parsed genre: Comedy != API genre: [Documentary]
```
```
Parsed genre: Action != API genre: [Short, Drama]
```
```
Parsed genre: Action != API genre: [Documentary, Short]
```
```
Parsed genre: Action != API genre: [Drama]
```

| Failed Actors | 
|---| 
```
Raj Patel for movie: Space Intruders
```
```
Clara N’Dour for movie: Space Intruders
```
```
Emma Rodriguez for movie: Ocean Adventures
```
```
Ming Zhao for movie: Adventures in the City
```
```
Mischa Von Heide for movie: Desert Chronicles
```
```
Karla Torrez for movie: Desert Chronicles
```
```
Liam O\Neill for movie: Wild Horizon
```
```
Zara Hamid for movie: Wild Horizon
```

| Failed Years | 
|---| 
```
Rental year: 2023 < Release year: 2025
```

# Generation 4
## Category baseline
```
!new Client('client16')
!client16.clientId := 4589
!client16.isSuspended := true

!new Rental('rental24')
!rental24.date := Date('2023-03-05')

!new Rental('rental25')
!rental25.date := Date('2023-03-05')

!new Rental('rental26')
!rental26.date := Date('2023-10-01')

!new Movie('movie20')
!movie20.title := 'Historical Heist'
!movie20.availableCopies := 6
!movie20.genre := #Action

!new Movie('movie21')
!movie21.title := 'Laughing Stock'
!movie21.availableCopies := 4
!movie21.genre := #Comedy

!new Series('series20')
!series20.title := 'Mystery Unveiled Season 4'
!series20.availableCopies := 1
!series20.episode := 7

!new Actor('actor37')
!actor37.name := 'Isabella Nguyen'

!new Actor('actor38')
!actor38.name := 'Samuel Ling'

!new Actor('actor39')
!actor39.name := 'Fatima Al-Hassan'

!insert (client16, rental24) into ClientRental
!insert (client16, rental25) into ClientRental
!insert (client16, rental26) into ClientRental

!insert (rental24, movie20) into RentalCassette
!insert (rental25, movie21) into RentalCassette
!insert (rental26, series20) into RentalCassette

!insert (movie20, actor37) into CassetteActor
!insert (movie20, actor38) into CassetteActor

!insert (movie21, actor38) into CassetteActor
!insert (movie21, actor39) into CassetteActor

!insert (series20, actor39) into CassetteActor
!insert (series20, actor37) into CassetteActor
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 39 | 0.00% |
| Multiplicities Errors | 0 | 12 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 2 | 3 | 66.67% |
| Types (out of valid Titles) | 0 | 1 | 0.00% |
| Genres (out of valid Titles) | 0 | 1 | 0.00% |
| Actors (out of valid Titles) | 2 | 2 | 100.00% |
| Release year > Rental year (out of valid Titles) | 0 | 1 | 0.00% |

| Failed Titles | 
|---| 
```
Mystery Unveiled Season 4
```
```
Historical Heist
```

| Failed Actors | 
|---| 
```
Samuel Ling for movie: Laughing Stock
```
```
Fatima Al-Hassan for movie: Laughing Stock
```

## Category boundary
```
!new Client('client24')
!client24.clientId := 500
!client24.isSuspended := false

!new Rental('rental38')
!rental38.date := Date('2024-04-15')

!new Rental('rental39')
!rental39.date := Date('2024-04-25')

!new Movie('movie30')
!movie30.title := 'Desert Chronicles'
!movie30.availableCopies := 2
!movie30.genre := #Action

!new Movie('movie31')
!movie31.title := 'Comedy of Errors'
!movie31.availableCopies := 15
!movie31.genre := #Comedy

!new Series('series30')
!series30.title := 'Journey through Africa'
!series30.availableCopies := 0
!series30.episode := 10

!new Actor('actor59')
!actor59.name := 'Kofi Agyeman'

!new Actor('actor60')
!actor60.name := 'Fatima Hassan'

!insert (client24, rental38) into ClientRental
!insert (client24, rental39) into ClientRental

!insert (rental38, movie30) into RentalCassette
!insert (rental38, movie31) into RentalCassette

!insert (rental39, series30) into RentalCassette

!insert (movie30, actor59) into CassetteActor

!insert (movie31, actor60) into CassetteActor

!insert (series30, actor59) into CassetteActor
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 31 | 0.00% |
| Multiplicities Errors | 0 | 8 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 1 | 3 | 33.33% |
| Types (out of valid Titles) | 0 | 2 | 0.00% |
| Genres (out of valid Titles) | 1 | 2 | 50.00% |
| Actors (out of valid Titles) | 2 | 2 | 100.00% |
| Release year > Rental year (out of valid Titles) | 0 | 2 | 0.00% |

| Failed Titles | 
|---| 
```
Journey through Africa
```

| Failed Genres | 
|---| 
```
Parsed genre: Action != API genre: [Documentary, Western]
```

| Failed Actors | 
|---| 
```
Kofi Agyeman for movie: Desert Chronicles
```
```
Fatima Hassan for movie: Comedy of Errors
```

## Category complex
```
!new Client('client20')
!client20.clientId := 701
!client20.isSuspended := false

!new Client('client21')
!client21.clientId := 802
!client21.isSuspended := true

!new Rental('rental31')
!rental31.date := Date('2023-06-10')

!new Rental('rental32')
!rental32.date := Date('2023-07-08')

!new Rental('rental33')
!rental33.date := Date('2023-08-15')

!new Rental('rental34')
!rental34.date := Date('2023-09-30')

!new Movie('movie26')
!movie26.title := 'Raging Rapids'
!movie26.availableCopies := 4
!movie26.genre := #Action

!new Movie('movie27')
!movie27.title := 'Chuckle Island'
!movie27.availableCopies := 0
!movie27.genre := #Comedy

!new Series('series25')
!series25.title := 'Ancient Treasures'
!series25.availableCopies := 5
!series25.episode := 12

!new Series('series26')
!series26.title := 'Galactic Stories'
!series26.availableCopies := 2
!series26.episode := 7

!new Actor('actor48')
!actor48.name := 'Miguel Flores'

!new Actor('actor49')
!actor49.name := 'Sophie Dubois'

!new Actor('actor50')
!actor50.name := 'Chen Wei'

!new Actor('actor51')
!actor51.name := 'Fatima Al-Shamari'

!new Actor('actor52')
!actor52.name := 'Alexios Papadopoulos'

!insert (client20, rental31) into ClientRental

!insert (client21, rental32) into ClientRental
!insert (client21, rental33) into ClientRental
!insert (client21, rental34) into ClientRental

!insert (rental31, movie26) into RentalCassette
!insert (rental31, series25) into RentalCassette

!insert (rental32, movie27) into RentalCassette

!insert (rental33, series26) into RentalCassette

!insert (rental34, series25) into RentalCassette
!insert (rental34, movie26) into RentalCassette

!insert (movie26, actor48) into CassetteActor
!insert (movie26, actor51) into CassetteActor

!insert (movie27, actor49) into CassetteActor
!insert (movie27, actor52) into CassetteActor

!insert (series25, actor48) into CassetteActor
!insert (series25, actor50) into CassetteActor
!insert (series25, actor51) into CassetteActor

!insert (series26, actor49) into CassetteActor
!insert (series26, actor52) into CassetteActor
!insert (series26, actor50) into CassetteActor
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 60 | 0.00% |
| Multiplicities Errors | 0 | 20 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 3 | 4 | 75.00% |
| Types (out of valid Titles) | 0 | 1 | 0.00% |
| Genres (out of valid Titles) | 1 | 1 | 100.00% |
| Actors (out of valid Titles) | 2 | 2 | 100.00% |
| Release year > Rental year (out of valid Titles) | 0 | 1 | 0.00% |

| Failed Titles | 
|---| 
```
Ancient Treasures
```
```
Galactic Stories
```
```
Chuckle Island
```

| Failed Genres | 
|---| 
```
Parsed genre: Action != API genre: [N/A]
```

| Failed Actors | 
|---| 
```
Miguel Flores for movie: Raging Rapids
```
```
Fatima Al-Shamari for movie: Raging Rapids
```

## Category edge
```
!new Client('client25')
!client25.clientId := 999
!client25.isSuspended := false

!new Rental('rental40')
!rental40.date := Date('2023-12-05')

!new Movie('movie32')
!movie32.title := 'Echoes of the Ancients'
!movie32.availableCopies := 2
!movie32.genre := #Action

!new Movie('movie33')
!movie33.title := 'Last Laugh Chronicles'
!movie33.availableCopies := 10
!movie33.genre := #Comedy

!new Actor('actor61')
!actor61.name := 'Amir Khan'

!new Actor('actor62')
!actor62.name := 'Sofia Lopez'

!insert (client25, rental40) into ClientRental

!insert (rental40, movie32) into RentalCassette
!insert (rental40, movie33) into RentalCassette

!insert (movie32, actor61) into CassetteActor

!insert (movie33, actor61) into CassetteActor
!insert (movie33, actor62) into CassetteActor
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 23 | 0.00% |
| Multiplicities Errors | 0 | 6 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 1 | 2 | 50.00% |
| Types (out of valid Titles) | 0 | 1 | 0.00% |
| Genres (out of valid Titles) | 1 | 1 | 100.00% |
| Actors (out of valid Titles) | 1 | 1 | 100.00% |
| Release year > Rental year (out of valid Titles) | 1 | 1 | 100.00% |

| Failed Titles | 
|---| 
```
Last Laugh Chronicles
```

| Failed Genres | 
|---| 
```
Parsed genre: Action != API genre: [Documentary]
```

| Failed Actors | 
|---| 
```
Amir Khan for movie: Echoes of the Ancients
```

| Failed Years | 
|---| 
```
Rental year: 2023 < Release year: 2025
```

## Category invalid
```
!new Client('client23')
!client23.clientId := 300
!client23.isSuspended := false

!new Rental('rental37')
!rental37.date := Date('2023-08-10')

!new Movie('movie29')
!movie29.title := 'The Andes Echo'
!movie29.availableCopies := 0
!movie29.genre := #Action

!new Series('series29')
!series29.title := 'Savannah Chronicles'
!series29.availableCopies := 2
!series29.episode := 5

!new Actor('actor57')
!actor57.name := 'Luis Miranda'

!new Actor('actor58')
!actor58.name := 'Gabriela Sánchez'

!insert (client23, rental37) into ClientRental

!insert (rental37, movie29) into RentalCassette
!insert (rental37, series29) into RentalCassette

!insert (movie29, actor57) into CassetteActor
!insert (series29, actor57) into CassetteActor
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 5 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 2 | 2 | 100.00% |
| Types (out of valid Titles) | 0 | 0 | 0.00% |
| Genres (out of valid Titles) | 0 | 0 | 0.00% |
| Actors (out of valid Titles) | 0 | 0 | 0.00% |
| Release year > Rental year (out of valid Titles) | 0 | 0 | 0.00% |

| Failed Titles | 
|---| 
```
Savannah Chronicles
```
```
The Andes Echo
```

## Generation 4 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 175 | 0.00% |
| Multiplicities Errors | 0 | 46 | 0.00% |
| Invariants Errors | 0 | 12 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 5 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 9 | 14 | 64.29% |
| Types (out of valid Titles) | 0 | 5 | 0.00% |
| Genres (out of valid Titles) | 3 | 5 | 60.00% |
| Actors (out of valid Titles) | 7 | 7 | 100.00% |
| Release year > Rental year (out of valid Titles) | 1 | 5 | 20.00% |

| Failed Titles | 
|---| 
```
Mystery Unveiled Season 4
```
```
Historical Heist
```
```
Journey through Africa
```
```
Ancient Treasures
```
```
Galactic Stories
```
```
Chuckle Island
```
```
Last Laugh Chronicles
```
```
Savannah Chronicles
```
```
The Andes Echo
```

| Failed Genres | 
|---| 
```
Parsed genre: Action != API genre: [Documentary, Western]
```
```
Parsed genre: Action != API genre: [N/A]
```
```
Parsed genre: Action != API genre: [Documentary]
```

| Failed Actors | 
|---| 
```
Samuel Ling for movie: Laughing Stock
```
```
Fatima Al-Hassan for movie: Laughing Stock
```
```
Kofi Agyeman for movie: Desert Chronicles
```
```
Fatima Hassan for movie: Comedy of Errors
```
```
Miguel Flores for movie: Raging Rapids
```
```
Fatima Al-Shamari for movie: Raging Rapids
```
```
Amir Khan for movie: Echoes of the Ancients
```

| Failed Years | 
|---| 
```
Rental year: 2023 < Release year: 2025
```

# Generation 5
## Category baseline
```
!new Client('client22')
!client22.clientId := 5123
!client22.isSuspended := false

!new Rental('rental35')
!rental35.date := Date('2023-05-14')

!new Rental('rental36')
!rental36.date := Date('2023-12-01')

!new Movie('movie28')
!movie28.title := 'The Last Stand'
!movie28.availableCopies := 0
!movie28.genre := #Action

!new Series('series27')
!series27.title := 'Culinary Journeys Season 5'
!series27.availableCopies := 6
!series27.episode := 3

!new Series('series28')
!series28.title := 'Culinary Journeys Season 5'
!series28.availableCopies := 6
!series28.episode := 4

!new Actor('actor53')
!actor53.name := 'Aisha Khan'

!new Actor('actor54')
!actor54.name := 'Jean-Pierre Renault'

!new Actor('actor55')
!actor55.name := 'Zara Muhammad'

!new Actor('actor56')
!actor56.name := 'Luca Rossi'

!insert (client22, rental35) into ClientRental
!insert (client22, rental36) into ClientRental

!insert (rental35, movie28) into RentalCassette
!insert (rental35, series27) into RentalCassette

!insert (rental36, series28) into RentalCassette

!insert (movie28, actor53) into CassetteActor
!insert (movie28, actor54) into CassetteActor

!insert (series27, actor55) into CassetteActor
!insert (series27, actor56) into CassetteActor

!insert (series28, actor55) into CassetteActor
!insert (series28, actor53) into CassetteActor
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 38 | 0.00% |
| Multiplicities Errors | 0 | 11 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 2 | 3 | 66.67% |
| Types (out of valid Titles) | 0 | 1 | 0.00% |
| Genres (out of valid Titles) | 0 | 1 | 0.00% |
| Actors (out of valid Titles) | 2 | 2 | 100.00% |
| Release year > Rental year (out of valid Titles) | 0 | 1 | 0.00% |

| Failed Titles | 
|---| 
```
Culinary Journeys Season 5
```
```
Culinary Journeys Season 5
```

| Failed Actors | 
|---| 
```
Aisha Khan for movie: The Last Stand
```
```
Jean-Pierre Renault for movie: The Last Stand
```

## Category boundary
```
!new Client('client32')
!client32.clientId := 42
!client32.isSuspended := false

!new Rental('rental50')
!rental50.date := Date('2024-05-10')

!new Rental('rental51')
!rental51.date := Date('2024-06-02')

!new Movie('movie43')
!movie43.title := 'The Last Frontier'
!movie43.availableCopies := 3
!movie43.genre := #Action

!new Movie('movie44')
!movie44.title := 'Laughter Lane'
!movie44.availableCopies := 7
!movie44.genre := #Comedy

!new Series('series35')
!series35.title := 'Northern Tales'
!series35.availableCopies := 1
!series35.episode := 25

!new Actor('actor77')
!actor77.name := 'Elena Petrov'

!new Actor('actor78')
!actor78.name := 'David Ng'

!insert (client32, rental50) into ClientRental
!insert (client32, rental51) into ClientRental

!insert (rental50, movie43) into RentalCassette
!insert (rental50, movie44) into RentalCassette

!insert (rental51, series35) into RentalCassette

!insert (movie43, actor77) into CassetteActor

!insert (movie44, actor78) into CassetteActor

!insert (series35, actor77) into CassetteActor
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 31 | 0.00% |
| Multiplicities Errors | 0 | 8 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 2 | 3 | 66.67% |
| Types (out of valid Titles) | 1 | 1 | 100.00% |
| Genres (out of valid Titles) | 0 | 1 | 0.00% |
| Actors (out of valid Titles) | 1 | 1 | 100.00% |
| Release year > Rental year (out of valid Titles) | 1 | 1 | 100.00% |

| Failed Titles | 
|---| 
```
Laughter Lane
```
```
Northern Tales
```

| Failed Types | 
|---| 
```
Parsed type: movie != API type: series
```

| Failed Actors | 
|---| 
```
Elena Petrov for movie: The Last Frontier
```

| Failed Years | 
|---| 
```
Rental year: 2024 < Release year: 2025
```

## Category complex
```
!new Client('client27')
!client27.clientId := 901
!client27.isSuspended := false

!new Client('client28')
!client28.clientId := 1002
!client28.isSuspended := true

!new Client('client29')
!client29.clientId := 1103
!client29.isSuspended := false

!new Rental('rental43')
!rental43.date := Date('2023-05-17')

!new Rental('rental44')
!rental44.date := Date('2023-06-21')

!new Rental('rental45')
!rental45.date := Date('2023-07-14')

!new Rental('rental46')
!rental46.date := Date('2023-10-23')

!new Rental('rental47')
!rental47.date := Date('2023-11-07')

!new Movie('movie36')
!movie36.title := 'Mountain Warriors'
!movie36.availableCopies := 3
!movie36.genre := #Action

!new Movie('movie37')
!movie37.title := 'Parisian Laughter'
!movie37.availableCopies := 6
!movie37.genre := #Comedy

!new Series('series32')
!series32.title := 'Savannah Chronicles'
!series32.availableCopies := 8
!series32.episode := 14

!new Series('series33')
!series33.title := 'Cosmos Revelations'
!series33.availableCopies := 5
!series33.episode := 9

!new Movie('movie38')
!movie38.title := 'Venetian Riddles'
!movie38.availableCopies := 2
!movie38.genre := #Action

!new Actor('actor67')
!actor67.name := 'Hiroshi Tanaka'

!new Actor('actor68')
!actor68.name := 'Elena Rodriguez'

!new Actor('actor69')
!actor69.name := 'Isaac Warren'

!new Actor('actor70')
!actor70.name := 'Aisha Ndlovu'

!new Actor('actor71')
!actor71.name := 'Nina Petrov'

!insert (client27, rental43) into ClientRental
!insert (client28, rental45) into ClientRental
!insert (client29, rental44) into ClientRental
!insert (client29, rental46) into ClientRental
!insert (client29, rental47) into ClientRental

!insert (rental43, movie36) into RentalCassette
!insert (rental43, series32) into RentalCassette

!insert (rental45, movie37) into RentalCassette
!insert (rental45, series33) into RentalCassette

!insert (rental44, movie38) into RentalCassette

!insert (rental46, movie36) into RentalCassette
!insert (rental46, movie37) into RentalCassette

!insert (rental47, series32) into RentalCassette

!insert (movie36, actor67) into CassetteActor
!insert (movie36, actor70) into CassetteActor

!insert (movie37, actor68) into CassetteActor
!insert (movie37, actor71) into CassetteActor

!insert (series32, actor69) into CassetteActor
!insert (series32, actor67) into CassetteActor

!insert (series33, actor70) into CassetteActor
!insert (series33, actor68) into CassetteActor
!insert (series33, actor69) into CassetteActor

!insert (movie38, actor71) into CassetteActor
!insert (movie38, actor67) into CassetteActor
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 73 | 0.00% |
| Multiplicities Errors | 0 | 24 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 4 | 5 | 80.00% |
| Types (out of valid Titles) | 0 | 1 | 0.00% |
| Genres (out of valid Titles) | 0 | 1 | 0.00% |
| Actors (out of valid Titles) | 2 | 2 | 100.00% |
| Release year > Rental year (out of valid Titles) | 0 | 1 | 0.00% |

| Failed Titles | 
|---| 
```
Savannah Chronicles
```
```
Cosmos Revelations
```
```
Venetian Riddles
```
```
Parisian Laughter
```

| Failed Actors | 
|---| 
```
Hiroshi Tanaka for movie: Mountain Warriors
```
```
Aisha Ndlovu for movie: Mountain Warriors
```

## Category edge
```
!new Client('client31')
!client31.clientId := 350
!client31.isSuspended := true

!new Rental('rental49')
!rental49.date := Date('2023-12-15')

!new Movie('movie40')
!movie40.title := 'Warriors\' Dawn'
!movie40.availableCopies := 5
!movie40.genre := #Action

!new Movie('movie41')
!movie41.title := 'Warriors\' Awakening'
!movie41.availableCopies := 8
!movie41.genre := #Action

!new Movie('movie42')
!movie42.title := 'Warriors\' Resolve'
!movie42.availableCopies := 0
!movie42.genre := #Action

!new Actor('actor74')
!actor74.name := 'Nikolai Ivanov'

!new Actor('actor75')
!actor75.name := 'Fiona Gallagher'

!new Actor('actor76')
!actor76.name := 'Ahmed Khan'

!insert (client31, rental49) into ClientRental

!insert (rental49, movie40) into RentalCassette
!insert (rental49, movie41) into RentalCassette
!insert (rental49, movie42) into RentalCassette

!insert (movie40, actor74) into CassetteActor

!insert (movie41, actor74) into CassetteActor
!insert (movie41, actor75) into CassetteActor

!insert (movie42, actor74) into CassetteActor
!insert (movie42, actor75) into CassetteActor
!insert (movie42, actor76) into CassetteActor
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 33 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 2 | 3 | 66.67% |
| Types (out of valid Titles) | 0 | 1 | 0.00% |
| Genres (out of valid Titles) | 0 | 1 | 0.00% |
| Actors (out of valid Titles) | 1 | 1 | 100.00% |
| Release year > Rental year (out of valid Titles) | 0 | 1 | 0.00% |

| Failed Titles | 
|---| 
```
Warriors\ Awakening
```
```
Warriors\ Resolve
```

| Failed Actors | 
|---| 
```
Nikolai Ivanov for movie: Warriors\ Dawn
```

## Category invalid
```
!new Client('client30')
!client30.clientId := 755
!client30.isSuspended := false

!new Rental('rental48')
!rental48.date := Date('2023-07-01')

!new Movie('movie39')
!movie39.title := 'Vienna Strings'
!movie39.availableCopies := 0
!movie39.genre := #Comedy

!new Series('series34')
!series34.title := 'European Vignettes'
!series34.availableCopies := 0
!series34.episode := 8

!new Actor('actor72')
!actor72.name := 'Karl Meyer'

!new Actor('actor73')
!actor73.name := 'Elena Novak'

!insert (client30, rental48) into ClientRental

!insert (rental48, movie39) into RentalCassette
!insert (rental48, series34) into RentalCassette

!insert (movie39, actor72) into CassetteActor
!insert (series34, actor72) into CassetteActor
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 5 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 2 | 2 | 100.00% |
| Types (out of valid Titles) | 0 | 0 | 0.00% |
| Genres (out of valid Titles) | 0 | 0 | 0.00% |
| Actors (out of valid Titles) | 0 | 0 | 0.00% |
| Release year > Rental year (out of valid Titles) | 0 | 0 | 0.00% |

| Failed Titles | 
|---| 
```
European Vignettes
```
```
Vienna Strings
```

## Generation 5 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 197 | 0.00% |
| Multiplicities Errors | 0 | 53 | 0.00% |
| Invariants Errors | 0 | 12 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 5 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 12 | 16 | 75.00% |
| Types (out of valid Titles) | 1 | 4 | 25.00% |
| Genres (out of valid Titles) | 0 | 4 | 0.00% |
| Actors (out of valid Titles) | 6 | 6 | 100.00% |
| Release year > Rental year (out of valid Titles) | 1 | 4 | 25.00% |

| Failed Titles | 
|---| 
```
Culinary Journeys Season 5
```
```
Culinary Journeys Season 5
```
```
Laughter Lane
```
```
Northern Tales
```
```
Savannah Chronicles
```
```
Cosmos Revelations
```
```
Venetian Riddles
```
```
Parisian Laughter
```
```
Warriors\ Awakening
```
```
Warriors\ Resolve
```
```
European Vignettes
```
```
Vienna Strings
```

| Failed Types | 
|---| 
```
Parsed type: movie != API type: series
```

| Failed Actors | 
|---| 
```
Aisha Khan for movie: The Last Stand
```
```
Jean-Pierre Renault for movie: The Last Stand
```
```
Elena Petrov for movie: The Last Frontier
```
```
Hiroshi Tanaka for movie: Mountain Warriors
```
```
Aisha Ndlovu for movie: Mountain Warriors
```
```
Nikolai Ivanov for movie: Warriors\ Dawn
```

| Failed Years | 
|---| 
```
Rental year: 2024 < Release year: 2025
```

# Generation 6
## Category baseline
```
!new Client('client26')
!client26.clientId := 6278
!client26.isSuspended := false

!new Rental('rental41')
!rental41.date := Date('2023-02-28')

!new Rental('rental42')
!rental42.date := Date('2023-11-15')

!new Movie('movie34')
!movie34.title := 'Robots in the Wild'
!movie34.availableCopies := 8
!movie34.genre := #Comedy

!new Movie('movie35')
!movie35.title := 'Undercover Heroes'
!movie35.availableCopies := 0
!movie35.genre := #Action

!new Series('series31')
!series31.title := 'Beyond the Stars Season 2'
!series31.availableCopies := 3
!series31.episode := 2

!new Actor('actor63')
!actor63.name := 'Elena Petrova'

!new Actor('actor64')
!actor64.name := 'Carlos Diaz'

!new Actor('actor65')
!actor65.name := 'Yasmin Gutiérrez'

!new Actor('actor66')
!actor66.name := 'Hans Müller'

!insert (client26, rental41) into ClientRental
!insert (client26, rental42) into ClientRental

!insert (rental41, movie34) into RentalCassette

!insert (rental42, movie35) into RentalCassette
!insert (rental42, series31) into RentalCassette

!insert (movie34, actor63) into CassetteActor
!insert (movie34, actor66) into CassetteActor

!insert (movie35, actor64) into CassetteActor

!insert (series31, actor65) into CassetteActor
!insert (series31, actor64) into CassetteActor
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 37 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 2 | 3 | 66.67% |
| Types (out of valid Titles) | 0 | 1 | 0.00% |
| Genres (out of valid Titles) | 1 | 1 | 100.00% |
| Actors (out of valid Titles) | 1 | 1 | 100.00% |
| Release year > Rental year (out of valid Titles) | 0 | 1 | 0.00% |

| Failed Titles | 
|---| 
```
Robots in the Wild
```
```
Beyond the Stars Season 2
```

| Failed Genres | 
|---| 
```
Parsed genre: Action != API genre: [Documentary]
```

| Failed Actors | 
|---| 
```
Carlos Diaz for movie: Undercover Heroes
```

## Category boundary
```
!new Client('client38')
!client38.clientId := 999
!client38.isSuspended := true

!new Rental('rental60')
!rental60.date := Date('2024-07-01')

!new Movie('movie50')
!movie50.title := 'Zen Warriors'
!movie50.availableCopies := 0
!movie50.genre := #Action

!new Movie('movie51')
!movie51.title := 'Kansha: The Comedy'
!movie51.availableCopies := 8
!movie51.genre := #Comedy

!new Series('series41')
!series41.title := 'Legends of the Forest'
!series41.availableCopies := 0
!series41.episode := 40

!new Actor('actor90')
!actor90.name := 'Hiroshi Yamamoto'

!new Actor('actor91')
!actor91.name := 'Rina Kato'

!insert (client38, rental60) into ClientRental

!insert (rental60, movie50) into RentalCassette
!insert (rental60, movie51) into RentalCassette
!insert (rental60, series41) into RentalCassette

!insert (movie50, actor90) into CassetteActor

!insert (movie51, actor91) into CassetteActor

!insert (series41, actor90) into CassetteActor
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 28 | 0.00% |
| Multiplicities Errors | 0 | 7 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 3 | 3 | 100.00% |
| Types (out of valid Titles) | 0 | 0 | 0.00% |
| Genres (out of valid Titles) | 0 | 0 | 0.00% |
| Actors (out of valid Titles) | 0 | 0 | 0.00% |
| Release year > Rental year (out of valid Titles) | 0 | 0 | 0.00% |

| Failed Titles | 
|---| 
```
Legends of the Forest
```
```
Zen Warriors
```
```
Kansha: The Comedy
```

## Category complex
```
!new Client('client33')
!client33.clientId := 1201
!client33.isSuspended := false

!new Client('client34')
!client34.clientId := 1302
!client34.isSuspended := true

!new Client('client35')
!client35.clientId := 1403
!client35.isSuspended := false

!new Rental('rental52')
!rental52.date := Date('2023-04-10')

!new Rental('rental53')
!rental53.date := Date('2023-05-25')

!new Rental('rental54')
!rental54.date := Date('2023-06-30')

!new Rental('rental55')
!rental55.date := Date('2023-08-12')

!new Rental('rental56')
!rental56.date := Date('2023-09-19')

!new Rental('rental57')
!rental57.date := Date('2023-10-05')

!new Movie('movie45')
!movie45.title := 'Thunder Road'
!movie45.availableCopies := 3
!movie45.genre := #Action

!new Movie('movie46')
!movie46.title := 'Sunny Side Up'
!movie46.availableCopies := 7
!movie46.genre := #Comedy

!new Series('series36')
!series36.title := 'Harbor Mysteries'
!series36.availableCopies := 4
!series36.episode := 5

!new Series('series37')
!series37.title := 'Space Frontier'
!series37.availableCopies := 6
!series37.episode := 11

!new Series('series38')
!series38.title := 'Jungle Odyssey'
!series38.availableCopies := 2
!series38.episode := 3

!new Movie('movie47')
!movie47.title := 'Crystal Dreams'
!movie47.availableCopies := 1
!movie47.genre := #Comedy

!new Actor('actor79')
!actor79.name := 'Aiden Carter'

!new Actor('actor80')
!actor80.name := 'Lara Kim'

!new Actor('actor81')
!actor81.name := 'Santiago Moreno'

!new Actor('actor82')
!actor82.name := 'Emma Wang'

!new Actor('actor83')
!actor83.name := 'Fatima Noor'

!new Actor('actor84')
!actor84.name := 'Viktor Ivanov'

!insert (client33, rental52) into ClientRental
!insert (client34, rental53) into ClientRental
!insert (client35, rental54) into ClientRental
!insert (client35, rental55) into ClientRental
!insert (client33, rental56) into ClientRental
!insert (client34, rental57) into ClientRental

!insert (rental52, movie45) into RentalCassette
!insert (rental52, series36) into RentalCassette

!insert (rental53, movie46) into RentalCassette
!insert (rental53, series38) into RentalCassette

!insert (rental54, series37) into RentalCassette
!insert (rental54, movie47) into RentalCassette

!insert (rental55, movie45) into RentalCassette

!insert (rental56, series38) into RentalCassette

!insert (rental57, series36) into RentalCassette

!insert (movie45, actor79) into CassetteActor
!insert (movie45, actor83) into CassetteActor

!insert (movie46, actor80) into CassetteActor
!insert (movie46, actor81) into CassetteActor

!insert (series36, actor82) into CassetteActor
!insert (series36, actor84) into CassetteActor

!insert (series37, actor81) into CassetteActor
!insert (series37, actor80) into CassetteActor

!insert (series38, actor79) into CassetteActor
!insert (series38, actor82) into CassetteActor

!insert (movie47, actor84) into CassetteActor
!insert (movie47, actor83) into CassetteActor
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 84 | 0.00% |
| Multiplicities Errors | 0 | 27 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 2 | 6 | 33.33% |
| Types (out of valid Titles) | 1 | 4 | 25.00% |
| Genres (out of valid Titles) | 2 | 3 | 66.67% |
| Actors (out of valid Titles) | 8 | 8 | 100.00% |
| Release year > Rental year (out of valid Titles) | 0 | 4 | 0.00% |

| Failed Titles | 
|---| 
```
Jungle Odyssey
```
```
Harbor Mysteries
```

| Failed Types | 
|---| 
```
Parsed type: series != API type: movie
```

| Failed Genres | 
|---| 
```
Parsed genre: Action != API genre: [Comedy, Drama]
```
```
Parsed genre: Comedy != API genre: [Adult]
```

| Failed Actors | 
|---| 
```
Santiago Moreno for movie: Space Frontier
```
```
Lara Kim for movie: Space Frontier
```
```
Aiden Carter for movie: Thunder Road
```
```
Fatima Noor for movie: Thunder Road
```
```
Viktor Ivanov for movie: Crystal Dreams
```
```
Fatima Noor for movie: Crystal Dreams
```
```
Lara Kim for movie: Sunny Side Up
```
```
Santiago Moreno for movie: Sunny Side Up
```

## Category edge
```
!new Client('client37')
!client37.clientId := 1234
!client37.isSuspended := false

!new Rental('rental59')
!rental59.date := Date('2023-12-30')

!new Movie('movie49')
!movie49.title := 'Galactic Laughter'
!movie49.availableCopies := 7
!movie49.genre := #Comedy

!new Series('series40')
!series40.title := 'Cosmic Warriors Return'
!series40.availableCopies := 3
!series40.episode := 999

!new Actor('actor87')
!actor87.name := 'Hiro Tanaka'

!new Actor('actor88')
!actor88.name := 'Lucia Varela'

!new Actor('actor89')
!actor89.name := 'Marco Silva'

!insert (client37, rental59) into ClientRental

!insert (rental59, movie49) into RentalCassette
!insert (rental59, series40) into RentalCassette

!insert (movie49, actor87) into CassetteActor
!insert (movie49, actor88) into CassetteActor

!insert (series40, actor87) into CassetteActor
!insert (series40, actor88) into CassetteActor
!insert (series40, actor89) into CassetteActor
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 27 | 0.00% |
| Multiplicities Errors | 0 | 8 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 2 | 2 | 100.00% |
| Types (out of valid Titles) | 0 | 0 | 0.00% |
| Genres (out of valid Titles) | 0 | 0 | 0.00% |
| Actors (out of valid Titles) | 0 | 0 | 0.00% |
| Release year > Rental year (out of valid Titles) | 0 | 0 | 0.00% |

| Failed Titles | 
|---| 
```
Galactic Laughter
```
```
Cosmic Warriors Return
```

## Category invalid
```
!new Client('client36')
!client36.clientId := 922
!client36.isSuspended := false

!new Rental('rental58')
!rental58.date := Date('2023-06-15')

!new Movie('movie48')
!movie48.title := 'Silk Road Journeys'
!movie48.availableCopies := 0
!movie48.genre := #Action

!new Series('series39')
!series39.title := 'Desert Tales'
!series39.availableCopies := 0
!series39.episode := 12

!new Actor('actor85')
!actor85.name := 'Akira Tanaka'

!new Actor('actor86')
!actor86.name := 'Ntombi Zulu'

!insert (client36, rental58) into ClientRental

!insert (rental58, movie48) into RentalCassette
!insert (rental58, series39) into RentalCassette

!insert (movie48, actor85) into CassetteActor
!insert (series39, actor86) into CassetteActor
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 5 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 2 | 2 | 100.00% |
| Types (out of valid Titles) | 0 | 0 | 0.00% |
| Genres (out of valid Titles) | 0 | 0 | 0.00% |
| Actors (out of valid Titles) | 0 | 0 | 0.00% |
| Release year > Rental year (out of valid Titles) | 0 | 0 | 0.00% |

| Failed Titles | 
|---| 
```
Desert Tales
```
```
Silk Road Journeys
```

## Generation 6 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 198 | 0.00% |
| Multiplicities Errors | 0 | 52 | 0.00% |
| Invariants Errors | 0 | 12 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 5 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 11 | 16 | 68.75% |
| Types (out of valid Titles) | 1 | 5 | 20.00% |
| Genres (out of valid Titles) | 3 | 4 | 75.00% |
| Actors (out of valid Titles) | 9 | 9 | 100.00% |
| Release year > Rental year (out of valid Titles) | 0 | 5 | 0.00% |

| Failed Titles | 
|---| 
```
Robots in the Wild
```
```
Beyond the Stars Season 2
```
```
Legends of the Forest
```
```
Zen Warriors
```
```
Kansha: The Comedy
```
```
Jungle Odyssey
```
```
Harbor Mysteries
```
```
Galactic Laughter
```
```
Cosmic Warriors Return
```
```
Desert Tales
```
```
Silk Road Journeys
```

| Failed Types | 
|---| 
```
Parsed type: series != API type: movie
```

| Failed Genres | 
|---| 
```
Parsed genre: Action != API genre: [Documentary]
```
```
Parsed genre: Action != API genre: [Comedy, Drama]
```
```
Parsed genre: Comedy != API genre: [Adult]
```

| Failed Actors | 
|---| 
```
Carlos Diaz for movie: Undercover Heroes
```
```
Santiago Moreno for movie: Space Frontier
```
```
Lara Kim for movie: Space Frontier
```
```
Aiden Carter for movie: Thunder Road
```
```
Fatima Noor for movie: Thunder Road
```
```
Viktor Ivanov for movie: Crystal Dreams
```
```
Fatima Noor for movie: Crystal Dreams
```
```
Lara Kim for movie: Sunny Side Up
```
```
Santiago Moreno for movie: Sunny Side Up
```

# Summary for all generations
| Summary | Value | 
|---|---| 
| Model | GPT_4O | 
| Type | CoT | 
| System | videoclub | 
| Number of generations | 6 | 

| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 1103 | 0.00% |
| Multiplicities Errors | 0 | 283 | 0.00% |
| Invariants Errors | 0 | 72 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 2 | 36 | 5.56% |
| Invariants Errors (Not included on General) | 0 | 18 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `CassetteActor':
  Object `movie23' of class `Movie' is connected to 0 objects of class `Actor'
  at association end `has' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `CassetteActor':
  Object `movie24' of class `Movie' is connected to 0 objects of class `Actor'
  at association end `has' but the multiplicity is specified as `1..*'.
```

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 65 | 92 | 70.65% |
| Types (out of valid Titles) | 6 | 27 | 22.22% |
| Genres (out of valid Titles) | 13 | 22 | 59.09% |
| Actors (out of valid Titles) | 42 | 42 | 100.00% |
| Release year > Rental year (out of valid Titles) | 3 | 27 | 11.11% |

| Failed Titles | 
|---| 
```
The Adventurer\s Quest
```
```
Comedy Nights Season 2
```
```
Mystery of the East
```
```
Tommy\s Tournament
```
```
Zorros of the Sahara
```
```
Laugh Like a Local
```
```
Old Balkans Tales
```
```
Sarajevo Romance
```
```
The Balkans\ Beat
```
```
Galactic Warriors
```
```
Detective Chronicles Season 1
```
```
Detective Chronicles Season 1
```
```
Epic Laughs
```
```
Daring Escapades
```
```
London Mysteries
```
```
Joyful Jingles
```
```
Tales from the North
```
```
Epic Sword Chronicles: The Saga Continues
```
```
The Everlasting Gag
```
```
Epic Sword Chronicles
```
```
Dreamtime Legends
```
```
Voices of the Outback
```
```
Walkabout Chronicles
```
```
The Great Expedition Season 3
```
```
Life in Symphony
```
```
Metropolis Blues
```
```
Castaway Stories
```
```
The Laughing Hearts
```
```
Mystery of the Highlands
```
```
Festival of Fun: Season 10
```
```
Festival of Fun: Season 50
```
```
Parisian Reflections
```
```
Historic Narratives
```
```
Mystery Unveiled Season 4
```
```
Historical Heist
```
```
Journey through Africa
```
```
Ancient Treasures
```
```
Galactic Stories
```
```
Chuckle Island
```
```
Last Laugh Chronicles
```
```
Savannah Chronicles
```
```
The Andes Echo
```
```
Culinary Journeys Season 5
```
```
Culinary Journeys Season 5
```
```
Laughter Lane
```
```
Northern Tales
```
```
Savannah Chronicles
```
```
Cosmos Revelations
```
```
Venetian Riddles
```
```
Parisian Laughter
```
```
Warriors\ Awakening
```
```
Warriors\ Resolve
```
```
European Vignettes
```
```
Vienna Strings
```
```
Robots in the Wild
```
```
Beyond the Stars Season 2
```
```
Legends of the Forest
```
```
Zen Warriors
```
```
Kansha: The Comedy
```
```
Jungle Odyssey
```
```
Harbor Mysteries
```
```
Galactic Laughter
```
```
Cosmic Warriors Return
```
```
Desert Tales
```
```
Silk Road Journeys
```

| Failed Types | 
|---| 
```
Parsed type: series != API type: movie
```
```
Parsed type: series != API type: movie
```
```
Parsed type: movie != API type: series
```
```
Parsed type: series != API type: movie
```
```
Parsed type: movie != API type: series
```
```
Parsed type: series != API type: movie
```

| Failed Genres | 
|---| 
```
Parsed genre: Action != API genre: [Adventure, Drama, Thriller]
```
```
Parsed genre: Action != API genre: [History]
```
```
Parsed genre: Action  -- Assuming Action as no genre provided != API genre: [Animation, Short, Comedy]
```
```
Parsed genre: Comedy != API genre: [Documentary]
```
```
Parsed genre: Action != API genre: [Short, Drama]
```
```
Parsed genre: Action != API genre: [Documentary, Short]
```
```
Parsed genre: Action != API genre: [Drama]
```
```
Parsed genre: Action != API genre: [Documentary, Western]
```
```
Parsed genre: Action != API genre: [N/A]
```
```
Parsed genre: Action != API genre: [Documentary]
```
```
Parsed genre: Action != API genre: [Documentary]
```
```
Parsed genre: Action != API genre: [Comedy, Drama]
```
```
Parsed genre: Comedy != API genre: [Adult]
```

| Failed Actors | 
|---| 
```
John Doe for movie: Fun Times
```
```
John Doe for movie: Silent Action
```
```
Maya Lopez for movie: Laugh Out Loud
```
```
John Smith for movie: Laugh Out Loud
```
```
Tom Hardy for movie: The Great Escape
```
```
Maya Lopez for movie: The Great Escape
```
```
Priya Patel for movie: Urban Legends
```
```
Tom Hardy for movie: Urban Legends
```
```
Robert Liu for movie: Safari Adventure
```
```
Eliott Gomez for movie: Safari Adventure
```
```
Anna Kendrick for movie: Distant Thunder
```
```
Robert Liu for movie: Distant Thunder
```
```
Raj Patel for movie: Space Intruders
```
```
Clara N’Dour for movie: Space Intruders
```
```
Emma Rodriguez for movie: Ocean Adventures
```
```
Ming Zhao for movie: Adventures in the City
```
```
Mischa Von Heide for movie: Desert Chronicles
```
```
Karla Torrez for movie: Desert Chronicles
```
```
Liam O\Neill for movie: Wild Horizon
```
```
Zara Hamid for movie: Wild Horizon
```
```
Samuel Ling for movie: Laughing Stock
```
```
Fatima Al-Hassan for movie: Laughing Stock
```
```
Kofi Agyeman for movie: Desert Chronicles
```
```
Fatima Hassan for movie: Comedy of Errors
```
```
Miguel Flores for movie: Raging Rapids
```
```
Fatima Al-Shamari for movie: Raging Rapids
```
```
Amir Khan for movie: Echoes of the Ancients
```
```
Aisha Khan for movie: The Last Stand
```
```
Jean-Pierre Renault for movie: The Last Stand
```
```
Elena Petrov for movie: The Last Frontier
```
```
Hiroshi Tanaka for movie: Mountain Warriors
```
```
Aisha Ndlovu for movie: Mountain Warriors
```
```
Nikolai Ivanov for movie: Warriors\ Dawn
```
```
Carlos Diaz for movie: Undercover Heroes
```
```
Santiago Moreno for movie: Space Frontier
```
```
Lara Kim for movie: Space Frontier
```
```
Aiden Carter for movie: Thunder Road
```
```
Fatima Noor for movie: Thunder Road
```
```
Viktor Ivanov for movie: Crystal Dreams
```
```
Fatima Noor for movie: Crystal Dreams
```
```
Lara Kim for movie: Sunny Side Up
```
```
Santiago Moreno for movie: Sunny Side Up
```

| Failed Years | 
|---| 
```
Rental year: 2023 < Release year: 2025
```
```
Rental year: 2023 < Release year: 2025
```
```
Rental year: 2024 < Release year: 2025
```

