# Generation 1
## Category baseline
```
!new Client('clientC1')
!clientC1.clientId := 101
!clientC1.isSuspended := false

!new Client('clientC2')
!clientC2.clientId := 202
!clientC2.isSuspended := true

!new Rental('rentalR1')
!rentalR1.date := Date('2026-02-10')

!new Rental('rentalR2')
!rentalR2.date := Date('2026-02-18')

!new Movie('movieM1')
!movieM1.title := 'Metro Pursuit'
!movieM1.availableCopies := 3
!movieM1.genre := #Action

!new Series('seriesS1')
!seriesS1.title := 'Café Detectives'
!seriesS1.availableCopies := 0
!seriesS1.episode := 5

!new Actor('actorA1')
!actorA1.name := 'Amina El-Sayed'

!new Actor('actorA2')
!actorA2.name := 'Kenji Tanaka'

!new Actor('actorA3')
!actorA3.name := 'Lucía Herrera'

!insert (clientC1, rentalR1) into ClientRental
!insert (clientC1, rentalR2) into ClientRental

!insert (rentalR1, movieM1) into RentalCassette
!insert (rentalR1, seriesS1) into RentalCassette
!insert (rentalR2, movieM1) into RentalCassette

!insert (movieM1, actorA1) into CassetteActor
!insert (movieM1, actorA2) into CassetteActor
!insert (seriesS1, actorA3) into CassetteActor
!insert (seriesS1, actorA2) into CassetteActor
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 33 | 0.00% |
| Multiplicities Errors | 0 | 9 | 0.00% |
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
Metro Pursuit
```
```
Café Detectives
```

## Category boundary
```
!new Client('clientB1')
!clientB1.clientId := 1
!clientB1.isSuspended := false

!new Client('clientB2')
!clientB2.clientId := 2
!clientB2.isSuspended := true

!new Rental('rentalB1')
!rentalB1.date := Date('1970-01-01')

!new Rental('rentalB2')
!rentalB2.date := Date('1970-01-02')

!new Movie('movieB1')
!movieB1.title := 'El Último Chiste'
!movieB1.availableCopies := 0
!movieB1.genre := #Comedy

!new Series('seriesB1')
!seriesB1.title := '北風の町'
!seriesB1.availableCopies := 0
!seriesB1.episode := 1

!new Actor('actorB1')
!actorB1.name := 'María-José Lira'

!new Actor('actorB2')
!actorB2.name := 'Kenji Sato'

!new Actor('actorB3')
!actorB3.name := 'Nils Ødegård'

!insert (clientB1, rentalB1) into ClientRental
!insert (clientB1, rentalB2) into ClientRental

!insert (rentalB1, movieB1) into RentalCassette
!insert (rentalB2, movieB1) into RentalCassette

!insert (movieB1, actorB1) into CassetteActor
!insert (seriesB1, actorB2) into CassetteActor
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 30 | 0.00% |
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
北風の町
```
```
El Último Chiste
```

## Category complex
```
!new Client('clientX1')
!clientX1.clientId := 101
!clientX1.isSuspended := false

!new Client('clientX2')
!clientX2.clientId := 202
!clientX2.isSuspended := true

!new Client('clientX3')
!clientX3.clientId := 303
!clientX3.isSuspended := false

!new Movie('movieX1')
!movieX1.title := 'Metro Chase'
!movieX1.availableCopies := 2
!movieX1.genre := #Action

!new Movie('movieX2')
!movieX2.title := 'Laughing in Lagos'
!movieX2.availableCopies := 0
!movieX2.genre := #Comedy

!new Movie('movieX3')
!movieX3.title := 'Samurai Weekend'
!movieX3.availableCopies := 1
!movieX3.genre := #Comedy

!new Series('seriesX1')
!seriesX1.title := 'Nordic Noir — Season 1'
!seriesX1.availableCopies := 1
!seriesX1.episode := 3

!new Series('seriesX2')
!seriesX2.title := 'Hearts of Seoul — Season 2'
!seriesX2.availableCopies := 4
!seriesX2.episode := 12

!new Series('seriesX3')
!seriesX3.title := 'Río de Pasiones — Temporada 1'
!seriesX3.availableCopies := 3
!seriesX3.episode := 1

!new Actor('actorX1')
!actorX1.name := 'Amina Okafor'

!new Actor('actorX2')
!actorX2.name := 'Kenji Tanaka'

!new Actor('actorX3')
!actorX3.name := 'Ingrid Svendsen'

!new Actor('actorX4')
!actorX4.name := 'Sofía Martínez'

!new Actor('actorX5')
!actorX5.name := 'Min-ji Park'

!new Actor('actorX6')
!actorX6.name := 'Idris El-Masri'

!new Actor('actorX7')
!actorX7.name := 'João Silva'

!new Actor('actorX8')
!actorX8.name := 'Maya Chen'

!new Rental('rentalX1')
!rentalX1.date := Date('2026-01-05')

!new Rental('rentalX2')
!rentalX2.date := Date('2026-01-06')

!new Rental('rentalX3')
!rentalX3.date := Date('2026-01-10')

!new Rental('rentalX4')
!rentalX4.date := Date('2026-02-01')

!new Rental('rentalX5')
!rentalX5.date := Date('2026-02-15')

!insert (clientX1, rentalX1) into ClientRental
!insert (clientX1, rentalX2) into ClientRental
!insert (clientX2, rentalX3) into ClientRental
!insert (clientX3, rentalX4) into ClientRental
!insert (clientX2, rentalX5) into ClientRental

!insert (rentalX1, movieX1) into RentalCassette
!insert (rentalX1, seriesX1) into RentalCassette

!insert (rentalX2, movieX2) into RentalCassette

!insert (rentalX3, movieX1) into RentalCassette
!insert (rentalX3, seriesX2) into RentalCassette
!insert (rentalX3, seriesX3) into RentalCassette

!insert (rentalX4, seriesX1) into RentalCassette
!insert (rentalX4, movieX3) into RentalCassette

!insert (rentalX5, movieX3) into RentalCassette

!insert (movieX1, actorX2) into CassetteActor
!insert (movieX1, actorX6) into CassetteActor

!insert (movieX2, actorX1) into CassetteActor
!insert (movieX2, actorX7) into CassetteActor

!insert (movieX3, actorX2) into CassetteActor
!insert (movieX3, actorX3) into CassetteActor

!insert (seriesX1, actorX3) into CassetteActor
!insert (seriesX1, actorX6) into CassetteActor

!insert (seriesX2, actorX5) into CassetteActor
!insert (seriesX2, actorX2) into CassetteActor

!insert (seriesX3, actorX4) into CassetteActor
!insert (seriesX3, actorX7) into CassetteActor
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 85 | 0.00% |
| Multiplicities Errors | 0 | 26 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 5 | 6 | 83.33% |
| Types (out of valid Titles) | 0 | 1 | 0.00% |
| Genres (out of valid Titles) | 1 | 1 | 100.00% |
| Actors (out of valid Titles) | 2 | 2 | 100.00% |
| Release year > Rental year (out of valid Titles) | 0 | 1 | 0.00% |

| Failed Titles | 
|---| 
```
Samurai Weekend
```
```
Laughing in Lagos
```
```
Nordic Noir — Season 1
```
```
Hearts of Seoul — Season 2
```
```
Río de Pasiones — Temporada 1
```

| Failed Genres | 
|---| 
```
Parsed genre: Action != API genre: [Comedy, Family, Adventure]
```

| Failed Actors | 
|---| 
```
Kenji Tanaka for movie: Metro Chase
```
```
Idris El-Masri for movie: Metro Chase
```

## Category edge
```
!new Client('clientEC1')
!clientEC1.clientId := 1
!clientEC1.isSuspended := true

!new Client('clientEC2')
!clientEC2.clientId := 2147483647
!clientEC2.isSuspended := false

!new Rental('rentalE1')
!rentalE1.date := Date('0001-01-01')

!new Rental('rentalE2')
!rentalE2.date := Date('2999-12-31')

!new Movie('movieE1')
!movieE1.title := 'El Último Tren (Director’s Cut)'
!movieE1.availableCopies := 0
!movieE1.genre := #Action

!new Movie('movieE2')
!movieE2.title := 'Käsekuchen Chaos'
!movieE2.availableCopies := 9999
!movieE2.genre := #Comedy

!new Series('seriesE1')
!seriesE1.title := 'Nairobi Nights — Episode File'
!seriesE1.availableCopies := 0
!seriesE1.episode := 1

!new Series('seriesE2')
!seriesE2.title := 'Arctic Signal — Special Transmission'
!seriesE2.availableCopies := 1
!seriesE2.episode := 2147483647

!new Actor('actorE1')
!actorE1.name := 'María-José K. Tanaka'

!new Actor('actorE2')
!actorE2.name := 'Ousmane Diop'

!new Actor('actorE3')
!actorE3.name := 'Sven Østergård'

!new Actor('actorE4')
!actorE4.name := 'Priya Nair'

!new Actor('actorE5')
!actorE5.name := 'Zhang Wei (张伟)'

!new Actor('actorE6')
!actorE6.name := 'Uncredited Voice Performer'

!insert (clientEC1, rentalE1) into ClientRental
!insert (clientEC1, rentalE2) into ClientRental

!insert (rentalE1, movieE1) into RentalCassette
!insert (rentalE1, seriesE1) into RentalCassette
!insert (rentalE1, seriesE2) into RentalCassette
!insert (rentalE2, movieE1) into RentalCassette
!insert (rentalE2, movieE2) into RentalCassette
!insert (rentalE2, seriesE1) into RentalCassette
!insert (rentalE2, seriesE2) into RentalCassette

!insert (movieE1, actorE1) into CassetteActor
!insert (movieE1, actorE2) into CassetteActor
!insert (movieE1, actorE5) into CassetteActor
!insert (movieE2, actorE3) into CassetteActor
!insert (seriesE1, actorE2) into CassetteActor
!insert (seriesE1, actorE4) into CassetteActor
!insert (seriesE2, actorE1) into CassetteActor
!insert (seriesE2, actorE3) into CassetteActor
!insert (seriesE2, actorE4) into CassetteActor
!insert (seriesE2, actorE5) into CassetteActor
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 57 | 0.00% |
| Multiplicities Errors | 0 | 19 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 4 | 4 | 100.00% |
| Types (out of valid Titles) | 0 | 0 | 0.00% |
| Genres (out of valid Titles) | 0 | 0 | 0.00% |
| Actors (out of valid Titles) | 0 | 0 | 0.00% |
| Release year > Rental year (out of valid Titles) | 0 | 0 | 0.00% |

| Failed Titles | 
|---| 
```
Arctic Signal — Special Transmission
```
```
Käsekuchen Chaos
```
```
El Último Tren (Director’s Cut)
```
```
Nairobi Nights — Episode File
```

## Category invalid
```
!new Client('clientD1')
!clientD1.clientId := 101
!clientD1.isSuspended := false

!new Client('clientD2')
!clientD2.clientId := 202
!clientD2.isSuspended := true

!new Rental('rentalD1')
!rentalD1.date := Date('2026-01-10')

!new Rental('rentalD2')
!rentalD2.date := Date('2026-02-01')

!new Rental('rentalD3')
!rentalD3.date := Date('2025-12-22')

!new Movie('movieD1')
!movieD1.title := 'Mumbai Midnight Chase'
!movieD1.availableCopies := 2
!movieD1.genre := #Action

!new Movie('movieD2')
!movieD2.title := 'La Comedia del Barrio'
!movieD2.availableCopies := 0
!movieD2.genre := #Comedy

!new Series('seriesD1')
!seriesD1.title := 'Sakura Galaxy'
!seriesD1.availableCopies := 5
!seriesD1.episode := 0

!new Series('seriesD2')
!seriesD2.title := 'Nordic Noir: Season 1'
!seriesD2.availableCopies := 1
!seriesD2.episode := 3

!new Cassette('cassetteD1')
!cassetteD1.title := 'Himalayan Crafts — Instructional Tape (No Cast Listed)'
!cassetteD1.availableCopies := 3

!new Actor('actorD1')
!actorD1.name := 'Riya Kapur'

!new Actor('actorD2')
!actorD2.name := 'Arjun Mehta'

!new Actor('actorD3')
!actorD3.name := 'Carmen López'

!new Actor('actorD4')
!actorD4.name := 'Haruka Saitō'

!new Actor('actorD5')
!actorD5.name := 'Kenji Watanabe'

!new Actor('actorD6')
!actorD6.name := 'Signe Nørgaard'

!insert (clientD1, rentalD1) into ClientRental
!insert (clientD1, rentalD2) into ClientRental
!insert (clientD2, rentalD3) into ClientRental

!insert (rentalD1, movieD1) into RentalCassette
!insert (rentalD1, seriesD1) into RentalCassette
!insert (rentalD1, cassetteD1) into RentalCassette

!insert (rentalD3, movieD2) into RentalCassette
!insert (rentalD3, seriesD2) into RentalCassette

!insert (movieD1, actorD1) into CassetteActor
!insert (movieD1, actorD2) into CassetteActor

!insert (movieD2, actorD3) into CassetteActor

!insert (seriesD1, actorD4) into CassetteActor
!insert (seriesD1, actorD5) into CassetteActor

!insert (seriesD2, actorD6) into CassetteActor
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 2 | 14 | 14.29% |
| Invariants Errors (Not included on General) | 1 | 3 | 33.33% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `RentalCassette':
  Object `rentalD2' of class `Rental' is connected to 0 objects of class `Cassette'
  at association end `borrows' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `CassetteActor':
  Object `cassetteD1' of class `Cassette' is connected to 0 objects of class `Actor'
  at association end `has' but the multiplicity is specified as `1..*'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (3) `Series::positiveEpisode': FAILED.
```

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 4 | 4 | 100.00% |
| Types (out of valid Titles) | 0 | 0 | 0.00% |
| Genres (out of valid Titles) | 0 | 0 | 0.00% |
| Actors (out of valid Titles) | 0 | 0 | 0.00% |
| Release year > Rental year (out of valid Titles) | 0 | 0 | 0.00% |

| Failed Titles | 
|---| 
```
Sakura Galaxy
```
```
Nordic Noir: Season 1
```
```
Mumbai Midnight Chase
```
```
La Comedia del Barrio
```

## Generation 1 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 262 | 0.00% |
| Multiplicities Errors | 0 | 60 | 0.00% |
| Invariants Errors | 0 | 12 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 2 | 14 | 14.29% |
| Invariants Errors (Not included on General) | 1 | 3 | 33.33% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `RentalCassette':
  Object `rentalD2' of class `Rental' is connected to 0 objects of class `Cassette'
  at association end `borrows' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `CassetteActor':
  Object `cassetteD1' of class `Cassette' is connected to 0 objects of class `Actor'
  at association end `has' but the multiplicity is specified as `1..*'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (3) `Series::positiveEpisode': FAILED.
```

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 17 | 18 | 94.44% |
| Types (out of valid Titles) | 0 | 1 | 0.00% |
| Genres (out of valid Titles) | 1 | 1 | 100.00% |
| Actors (out of valid Titles) | 2 | 2 | 100.00% |
| Release year > Rental year (out of valid Titles) | 0 | 1 | 0.00% |

| Failed Titles | 
|---| 
```
Metro Pursuit
```
```
Café Detectives
```
```
北風の町
```
```
El Último Chiste
```
```
Samurai Weekend
```
```
Laughing in Lagos
```
```
Nordic Noir — Season 1
```
```
Hearts of Seoul — Season 2
```
```
Río de Pasiones — Temporada 1
```
```
Arctic Signal — Special Transmission
```
```
Käsekuchen Chaos
```
```
El Último Tren (Director’s Cut)
```
```
Nairobi Nights — Episode File
```
```
Sakura Galaxy
```
```
Nordic Noir: Season 1
```
```
Mumbai Midnight Chase
```
```
La Comedia del Barrio
```

| Failed Genres | 
|---| 
```
Parsed genre: Action != API genre: [Comedy, Family, Adventure]
```

| Failed Actors | 
|---| 
```
Kenji Tanaka for movie: Metro Chase
```
```
Idris El-Masri for movie: Metro Chase
```

# Generation 2
## Category baseline
```
!new Client('clientC10')
!clientC10.clientId := 17
!clientC10.isSuspended := false

!new Client('clientC11')
!clientC11.clientId := 305
!clientC11.isSuspended := false

!new Client('clientC12')
!clientC12.clientId := 88
!clientC12.isSuspended := true

!new Rental('rentalR10')
!rentalR10.date := Date('2025-11-03')

!new Rental('rentalR11')
!rentalR11.date := Date('2025-12-21')

!new Movie('movieM10')
!movieM10.title := 'Lisbon Laugh Track'
!movieM10.availableCopies := 1
!movieM10.genre := #Comedy

!new Movie('movieM11')
!movieM11.title := 'Desert Run'
!movieM11.availableCopies := 7
!movieM11.genre := #Action

!new Series('seriesS10')
!seriesS10.title := 'Northern Lights: The Series'
!seriesS10.availableCopies := 2
!seriesS10.episode := 1

!new Series('seriesS11')
!seriesS11.title := 'Northern Lights: The Series'
!seriesS11.availableCopies := 2
!seriesS11.episode := 12

!new Actor('actorA10')
!actorA10.name := 'Rajiv Menon'

!new Actor('actorA11')
!actorA11.name := 'Sofía Martínez'

!new Actor('actorA12')
!actorA12.name := 'Noura Al-Hassan'

!new Actor('actorA13')
!actorA13.name := 'Ethan O\'Connor'

!new Actor('actorA14')
!actorA14.name := 'Haruto Sato'

!insert (clientC10, rentalR10) into ClientRental
!insert (clientC11, rentalR11) into ClientRental

!insert (rentalR10, seriesS10) into RentalCassette
!insert (rentalR10, movieM10) into RentalCassette
!insert (rentalR10, seriesS11) into RentalCassette
!insert (rentalR11, movieM11) into RentalCassette
!insert (rentalR11, movieM10) into RentalCassette

!insert (movieM10, actorA11) into CassetteActor
!insert (movieM10, actorA13) into CassetteActor
!insert (movieM11, actorA12) into CassetteActor
!insert (movieM11, actorA14) into CassetteActor
!insert (seriesS10, actorA10) into CassetteActor
!insert (seriesS10, actorA14) into CassetteActor
!insert (seriesS11, actorA10) into CassetteActor
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 53 | 0.00% |
| Multiplicities Errors | 0 | 14 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 4 | 4 | 100.00% |
| Types (out of valid Titles) | 0 | 0 | 0.00% |
| Genres (out of valid Titles) | 0 | 0 | 0.00% |
| Actors (out of valid Titles) | 0 | 0 | 0.00% |
| Release year > Rental year (out of valid Titles) | 0 | 0 | 0.00% |

| Failed Titles | 
|---| 
```
Northern Lights: The Series
```
```
Northern Lights: The Series
```
```
Lisbon Laugh Track
```
```
Desert Run
```

## Category boundary
```
!new Client('clientVL10')
!clientVL10.clientId := 2147483647
!clientVL10.isSuspended := true

!new Client('clientVL11')
!clientVL11.clientId := 99999999
!clientVL11.isSuspended := false

!new Rental('rentalVL10')
!rentalVL10.date := Date('9999-12-31')

!new Rental('rentalVL11')
!rentalVL11.date := Date('2100-01-01')

!new Rental('rentalVL12')
!rentalVL12.date := Date('2038-01-19')

!new Rental('rentalVL13')
!rentalVL13.date := Date('2000-02-29')

!new Movie('movieVL10')
!movieVL10.title := 'Nairobi Nights'
!movieVL10.availableCopies := 1000000000
!movieVL10.genre := #Action

!new Movie('movieVL11')
!movieVL11.title := 'La Risa Infinita'
!movieVL11.availableCopies := 750000000
!movieVL11.genre := #Comedy

!new Movie('movieVL12')
!movieVL12.title := 'Код Буря'
!movieVL12.availableCopies := 2147483647
!movieVL12.genre := #Action

!new Movie('movieVL13')
!movieVL13.title := 'Mumbai Mix-Up'
!movieVL13.availableCopies := 500000000
!movieVL13.genre := #Comedy

!new Movie('movieVL14')
!movieVL14.title := 'Viento Rojo'
!movieVL14.availableCopies := 999999999
!movieVL14.genre := #Action

!new Series('seriesVL10')
!seriesVL10.title := 'Sakura Protocol'
!seriesVL10.availableCopies := 800000000
!seriesVL10.episode := 999999

!new Series('seriesVL11')
!seriesVL11.title := 'مسلسلات الغد'
!seriesVL11.availableCopies := 600000000
!seriesVL11.episode := 2147483647

!new Series('seriesVL12')
!seriesVL12.title := 'Nordlys Arkiv'
!seriesVL12.availableCopies := 900000000
!seriesVL12.episode := 5000000

!new Actor('actorVL10')
!actorVL10.name := 'Zahra El-Fassi'

!new Actor('actorVL11')
!actorVL11.name := 'Diego Fernández-Lobo'

!new Actor('actorVL12')
!actorVL12.name := 'Ananya Iyer'

!new Actor('actorVL13')
!actorVL13.name := 'Oleg Petrov'

!new Actor('actorVL14')
!actorVL14.name := 'Hiro Tanaka'

!new Actor('actorVL15')
!actorVL15.name := 'Signe Nørgaard'

!new Actor('actorVL16')
!actorVL16.name := 'Chinedu Okafor'

!new Actor('actorVL17')
!actorVL17.name := 'Lucía Paredes'

!new Actor('actorVL18')
!actorVL18.name := 'Youssef Benali'

!new Actor('actorVL19')
!actorVL19.name := 'Priya Menon'

!insert (clientVL10, rentalVL10) into ClientRental
!insert (clientVL10, rentalVL11) into ClientRental
!insert (clientVL10, rentalVL12) into ClientRental
!insert (clientVL11, rentalVL13) into ClientRental

!insert (rentalVL10, movieVL10) into RentalCassette
!insert (rentalVL10, movieVL11) into RentalCassette
!insert (rentalVL10, movieVL12) into RentalCassette
!insert (rentalVL10, movieVL13) into RentalCassette
!insert (rentalVL10, movieVL14) into RentalCassette
!insert (rentalVL10, seriesVL10) into RentalCassette
!insert (rentalVL10, seriesVL11) into RentalCassette
!insert (rentalVL10, seriesVL12) into RentalCassette

!insert (rentalVL11, movieVL12) into RentalCassette
!insert (rentalVL11, seriesVL11) into RentalCassette

!insert (rentalVL12, movieVL10) into RentalCassette
!insert (rentalVL12, movieVL12) into RentalCassette
!insert (rentalVL12, seriesVL10) into RentalCassette

!insert (rentalVL13, movieVL11) into RentalCassette

!insert (movieVL10, actorVL10) into CassetteActor
!insert (movieVL10, actorVL16) into CassetteActor
!insert (movieVL10, actorVL11) into CassetteActor

!insert (movieVL11, actorVL17) into CassetteActor
!insert (movieVL11, actorVL11) into CassetteActor
!insert (movieVL11, actorVL12) into CassetteActor
!insert (movieVL11, actorVL19) into CassetteActor

!insert (movieVL12, actorVL13) into CassetteActor
!insert (movieVL12, actorVL14) into CassetteActor
!insert (movieVL12, actorVL10) into CassetteActor
!insert (movieVL12, actorVL16) into CassetteActor
!insert (movieVL12, actorVL18) into CassetteActor

!insert (movieVL13, actorVL12) into CassetteActor
!insert (movieVL13, actorVL19) into CassetteActor

!insert (movieVL14, actorVL15) into CassetteActor
!insert (movieVL14, actorVL11) into CassetteActor
!insert (movieVL14, actorVL18) into CassetteActor

!insert (seriesVL10, actorVL14) into CassetteActor
!insert (seriesVL10, actorVL15) into CassetteActor
!insert (seriesVL10, actorVL19) into CassetteActor

!insert (seriesVL11, actorVL10) into CassetteActor
!insert (seriesVL11, actorVL18) into CassetteActor
!insert (seriesVL11, actorVL11) into CassetteActor
!insert (seriesVL11, actorVL13) into CassetteActor

!insert (seriesVL12, actorVL15) into CassetteActor
!insert (seriesVL12, actorVL16) into CassetteActor
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 110 | 0.00% |
| Multiplicities Errors | 0 | 44 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 7 | 8 | 87.50% |
| Types (out of valid Titles) | 0 | 1 | 0.00% |
| Genres (out of valid Titles) | 1 | 1 | 100.00% |
| Actors (out of valid Titles) | 3 | 3 | 100.00% |
| Release year > Rental year (out of valid Titles) | 0 | 1 | 0.00% |

| Failed Titles | 
|---| 
```
Mumbai Mix-Up
```
```
Sakura Protocol
```
```
مسلسلات الغد
```
```
Nordlys Arkiv
```
```
Nairobi Nights
```
```
Код Буря
```
```
La Risa Infinita
```

| Failed Genres | 
|---| 
```
Parsed genre: Action != API genre: [Short, Crime]
```

| Failed Actors | 
|---| 
```
Signe Nørgaard for movie: Viento Rojo
```
```
Diego Fernández-Lobo for movie: Viento Rojo
```
```
Youssef Benali for movie: Viento Rojo
```

## Category complex
```
!new Client('clientCompC10')
!clientCompC10.clientId := 11
!clientCompC10.isSuspended := false

!new Client('clientCompC11')
!clientCompC11.clientId := 57
!clientCompC11.isSuspended := true

!new Client('clientCompC12')
!clientCompC12.clientId := 88
!clientCompC12.isSuspended := false

!new Client('clientCompC13')
!clientCompC13.clientId := 144
!clientCompC13.isSuspended := false

!new Movie('movieCompM10')
!movieCompM10.title := 'Desert Drift'
!movieCompM10.availableCopies := 5
!movieCompM10.genre := #Action

!new Movie('movieCompM11')
!movieCompM11.title := 'Paris Pranks'
!movieCompM11.availableCopies := 1
!movieCompM11.genre := #Comedy

!new Movie('movieCompM12')
!movieCompM12.title := 'Mumbai Mayhem'
!movieCompM12.availableCopies := 0
!movieCompM12.genre := #Action

!new Movie('movieCompM13')
!movieCompM13.title := 'The Quiet Glacier'
!movieCompM13.availableCopies := 2
!movieCompM13.genre := #Action

!new Movie('movieCompM14')
!movieCompM14.title := 'Café Carousel'
!movieCompM14.availableCopies := 3
!movieCompM14.genre := #Comedy

!new Movie('movieCompM15')
!movieCompM15.title := 'Kyoto Kicks'
!movieCompM15.availableCopies := 2
!movieCompM15.genre := #Action

!new Series('seriesCompS10')
!seriesCompS10.title := 'Galactic Archivists — Volume 1'
!seriesCompS10.availableCopies := 2
!seriesCompS10.episode := 7

!new Series('seriesCompS11')
!seriesCompS11.title := 'Tales of the Silk Road — Season 3'
!seriesCompS11.availableCopies := 0
!seriesCompS11.episode := 2

!new Series('seriesCompS12')
!seriesCompS12.title := 'Cape Town Beat — Season 1'
!seriesCompS12.availableCopies := 1
!seriesCompS12.episode := 9

!new Actor('actorCompA10')
!actorCompA10.name := 'Leïla Benali'

!new Actor('actorCompA11')
!actorCompA11.name := 'Arjun Mehta'

!new Actor('actorCompA12')
!actorCompA12.name := 'Chloé Dubois'

!new Actor('actorCompA13')
!actorCompA13.name := 'Hiroshi Sato'

!new Actor('actorCompA14')
!actorCompA14.name := 'Naledi Khumalo'

!new Actor('actorCompA15')
!actorCompA15.name := 'Diego Fernández'

!new Actor('actorCompA16')
!actorCompA16.name := 'Sven Larsson'

!new Actor('actorCompA17')
!actorCompA17.name := 'Yara Haddad'

!new Actor('actorCompA18')
!actorCompA18.name := 'Omar Aziz'

!new Actor('actorCompA19')
!actorCompA19.name := 'Evelyn King'

!new Rental('rentalCompR10')
!rentalCompR10.date := Date('2025-11-20')

!new Rental('rentalCompR11')
!rentalCompR11.date := Date('2025-12-02')

!new Rental('rentalCompR12')
!rentalCompR12.date := Date('2026-01-18')

!new Rental('rentalCompR13')
!rentalCompR13.date := Date('2026-01-25')

!new Rental('rentalCompR14')
!rentalCompR14.date := Date('2026-02-05')

!new Rental('rentalCompR15')
!rentalCompR15.date := Date('2026-02-20')

!insert (clientCompC10, rentalCompR10) into ClientRental
!insert (clientCompC10, rentalCompR11) into ClientRental
!insert (clientCompC10, rentalCompR12) into ClientRental
!insert (clientCompC11, rentalCompR13) into ClientRental
!insert (clientCompC12, rentalCompR14) into ClientRental
!insert (clientCompC12, rentalCompR15) into ClientRental

!insert (rentalCompR10, movieCompM10) into RentalCassette
!insert (rentalCompR10, movieCompM11) into RentalCassette
!insert (rentalCompR10, seriesCompS10) into RentalCassette
!insert (rentalCompR10, movieCompM14) into RentalCassette

!insert (rentalCompR11, seriesCompS11) into RentalCassette

!insert (rentalCompR12, movieCompM13) into RentalCassette
!insert (rentalCompR12, seriesCompS12) into RentalCassette

!insert (rentalCompR13, movieCompM12) into RentalCassette
!insert (rentalCompR13, movieCompM10) into RentalCassette

!insert (rentalCompR14, movieCompM11) into RentalCassette
!insert (rentalCompR14, seriesCompS10) into RentalCassette
!insert (rentalCompR14, seriesCompS12) into RentalCassette

!insert (rentalCompR15, movieCompM14) into RentalCassette

!insert (movieCompM10, actorCompA10) into CassetteActor
!insert (movieCompM10, actorCompA11) into CassetteActor
!insert (movieCompM10, actorCompA18) into CassetteActor

!insert (movieCompM11, actorCompA12) into CassetteActor
!insert (movieCompM11, actorCompA15) into CassetteActor

!insert (movieCompM12, actorCompA11) into CassetteActor
!insert (movieCompM12, actorCompA17) into CassetteActor

!insert (movieCompM13, actorCompA14) into CassetteActor
!insert (movieCompM13, actorCompA16) into CassetteActor
!insert (movieCompM13, actorCompA10) into CassetteActor

!insert (movieCompM14, actorCompA12) into CassetteActor
!insert (movieCompM14, actorCompA14) into CassetteActor

!insert (movieCompM15, actorCompA13) into CassetteActor
!insert (movieCompM15, actorCompA16) into CassetteActor

!insert (seriesCompS10, actorCompA15) into CassetteActor
!insert (seriesCompS10, actorCompA18) into CassetteActor

!insert (seriesCompS11, actorCompA10) into CassetteActor
!insert (seriesCompS11, actorCompA11) into CassetteActor
!insert (seriesCompS11, actorCompA17) into CassetteActor

!insert (seriesCompS12, actorCompA14) into CassetteActor
!insert (seriesCompS12, actorCompA18) into CassetteActor
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 120 | 0.00% |
| Multiplicities Errors | 0 | 40 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 9 | 9 | 100.00% |
| Types (out of valid Titles) | 0 | 0 | 0.00% |
| Genres (out of valid Titles) | 0 | 0 | 0.00% |
| Actors (out of valid Titles) | 0 | 0 | 0.00% |
| Release year > Rental year (out of valid Titles) | 0 | 0 | 0.00% |

| Failed Titles | 
|---| 
```
Paris Pranks
```
```
Mumbai Mayhem
```
```
Desert Drift
```
```
Kyoto Kicks
```
```
The Quiet Glacier
```
```
Café Carousel
```
```
Cape Town Beat — Season 1
```
```
Tales of the Silk Road — Season 3
```
```
Galactic Archivists — Volume 1
```

## Category edge
```
!new Client('clientEdge2C10')
!clientEdge2C10.clientId := 2
!clientEdge2C10.isSuspended := false

!new Client('clientEdge2C11')
!clientEdge2C11.clientId := 3
!clientEdge2C11.isSuspended := true

!new Rental('rentalEdge2R10')
!rentalEdge2R10.date := Date('1970-01-01')

!new Rental('rentalEdge2R11')
!rentalEdge2R11.date := Date('1970-01-01')

!new Rental('rentalEdge2R12')
!rentalEdge2R12.date := Date('1970-01-01')

!new Rental('rentalEdge2R13')
!rentalEdge2R13.date := Date('1970-01-01')

!new Rental('rentalEdge2R14')
!rentalEdge2R14.date := Date('31/12/1999')

!new Series('seriesEdge2S10')
!seriesEdge2S10.title := ''
!seriesEdge2S10.availableCopies := 0
!seriesEdge2S10.episode := 1

!new Series('seriesEdge2S11')
!seriesEdge2S11.title := 'المدينة بعد منتصف الليل'
!seriesEdge2S11.availableCopies := 0
!seriesEdge2S11.episode := 2

!new Movie('movieEdge2M10')
!movieEdge2M10.title := 'हँसी का तूफ़ान'
!movieEdge2M10.availableCopies := 0
!movieEdge2M10.genre := #Comedy

!new Actor('actorEdge2A10')
!actorEdge2A10.name := 'Anaïs N’Doye'

!new Actor('actorEdge2A11')
!actorEdge2A11.name := 'Kenji Watanabe'

!new Actor('actorEdge2A12')
!actorEdge2A12.name := 'Luca Fernández'

!insert (clientEdge2C10, rentalEdge2R10) into ClientRental
!insert (clientEdge2C10, rentalEdge2R11) into ClientRental
!insert (clientEdge2C10, rentalEdge2R12) into ClientRental
!insert (clientEdge2C10, rentalEdge2R13) into ClientRental
!insert (clientEdge2C10, rentalEdge2R14) into ClientRental

!insert (rentalEdge2R10, seriesEdge2S10) into RentalCassette
!insert (rentalEdge2R11, seriesEdge2S10) into RentalCassette
!insert (rentalEdge2R12, seriesEdge2S10) into RentalCassette
!insert (rentalEdge2R13, seriesEdge2S10) into RentalCassette
!insert (rentalEdge2R14, seriesEdge2S11) into RentalCassette

!insert (seriesEdge2S10, actorEdge2A10) into CassetteActor
!insert (seriesEdge2S11, actorEdge2A10) into CassetteActor
!insert (seriesEdge2S11, actorEdge2A11) into CassetteActor
!insert (movieEdge2M10, actorEdge2A10) into CassetteActor
!insert (movieEdge2M10, actorEdge2A12) into CassetteActor
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 49 | 0.00% |
| Multiplicities Errors | 0 | 15 | 0.00% |
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
हँसी का तूफ़ान
```
```

```
```
المدينة بعد منتصف الليل
```

## Category invalid
```
!new Client('clientCoopC10')
!clientCoopC10.clientId := 11
!clientCoopC10.isSuspended := false

!new Client('clientCoopC11')
!clientCoopC11.clientId := 12
!clientCoopC11.isSuspended := false

!new Client('clientCoopC12')
!clientCoopC12.clientId := 305
!clientCoopC12.isSuspended := true

!new Rental('rentalCoopR10')
!rentalCoopR10.date := Date('2026-02-14')

!new Rental('rentalCoopR11')
!rentalCoopR11.date := Date('2026-01-05')

!new Movie('movieCoopM10')
!movieCoopM10.title := 'The Silent Steppe (Тихая степь)'
!movieCoopM10.availableCopies := 1

!new Series('seriesCoopS10')
!seriesCoopS10.title := 'Islands of Smoke'
!seriesCoopS10.availableCopies := 4
!seriesCoopS10.episode := 1

!new Movie('movieCoopM11')
!movieCoopM11.title := 'Café Laugh Riot'
!movieCoopM11.availableCopies := 2
!movieCoopM11.genre := #Comedy

!new Actor('actorCoopA10')
!actorCoopA10.name := 'Anu Saar'

!new Actor('actorCoopA11')
!actorCoopA11.name := 'Yaroslav Petrenko'

!new Actor('actorCoopA12')
!actorCoopA12.name := 'Mina Haddad'

!insert (clientCoopC10, rentalCoopR10) into ClientRental
!insert (clientCoopC11, rentalCoopR10) into ClientRental
!insert (clientCoopC12, rentalCoopR11) into ClientRental

!insert (rentalCoopR10, movieCoopM10) into RentalCassette
!insert (rentalCoopR10, seriesCoopS10) into RentalCassette
!insert (rentalCoopR11, movieCoopM11) into RentalCassette

!insert (seriesCoopS10, actorCoopA10) into CassetteActor
!insert (seriesCoopS10, actorCoopA12) into CassetteActor
!insert (movieCoopM11, actorCoopA12) into CassetteActor
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 2 | 9 | 22.22% |
| Invariants Errors (Not included on General) | 0 | 3 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `ClientRental':
  Object `rentalCoopR10' of class `Rental' is connected to 2 objects of class `Client'
  at association end `assigned' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `CassetteActor':
  Object `movieCoopM10' of class `Movie' is connected to 0 objects of class `Actor'
  at association end `has' but the multiplicity is specified as `1..*'.
```

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
The Silent Steppe (Тихая степь)
```
```
Islands of Smoke
```
```
Café Laugh Riot
```

## Generation 2 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 371 | 0.00% |
| Multiplicities Errors | 0 | 113 | 0.00% |
| Invariants Errors | 0 | 12 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 2 | 9 | 22.22% |
| Invariants Errors (Not included on General) | 0 | 3 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `ClientRental':
  Object `rentalCoopR10' of class `Rental' is connected to 2 objects of class `Client'
  at association end `assigned' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `CassetteActor':
  Object `movieCoopM10' of class `Movie' is connected to 0 objects of class `Actor'
  at association end `has' but the multiplicity is specified as `1..*'.
```

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 26 | 27 | 96.30% |
| Types (out of valid Titles) | 0 | 1 | 0.00% |
| Genres (out of valid Titles) | 1 | 1 | 100.00% |
| Actors (out of valid Titles) | 3 | 3 | 100.00% |
| Release year > Rental year (out of valid Titles) | 0 | 1 | 0.00% |

| Failed Titles | 
|---| 
```
Northern Lights: The Series
```
```
Northern Lights: The Series
```
```
Lisbon Laugh Track
```
```
Desert Run
```
```
Mumbai Mix-Up
```
```
Sakura Protocol
```
```
مسلسلات الغد
```
```
Nordlys Arkiv
```
```
Nairobi Nights
```
```
Код Буря
```
```
La Risa Infinita
```
```
Paris Pranks
```
```
Mumbai Mayhem
```
```
Desert Drift
```
```
Kyoto Kicks
```
```
The Quiet Glacier
```
```
Café Carousel
```
```
Cape Town Beat — Season 1
```
```
Tales of the Silk Road — Season 3
```
```
Galactic Archivists — Volume 1
```
```
हँसी का तूफ़ान
```
```

```
```
المدينة بعد منتصف الليل
```
```
The Silent Steppe (Тихая степь)
```
```
Islands of Smoke
```
```
Café Laugh Riot
```

| Failed Genres | 
|---| 
```
Parsed genre: Action != API genre: [Short, Crime]
```

| Failed Actors | 
|---| 
```
Signe Nørgaard for movie: Viento Rojo
```
```
Diego Fernández-Lobo for movie: Viento Rojo
```
```
Youssef Benali for movie: Viento Rojo
```

# Generation 3
## Category baseline
```
!new Client('clientC20')
!clientC20.clientId := 412
!clientC20.isSuspended := false

!new Client('clientC21')
!clientC21.clientId := 73
!clientC21.isSuspended := false

!new Client('clientC22')
!clientC22.clientId := 999
!clientC22.isSuspended := true

!new Rental('rentalR20')
!rentalR20.date := Date('2024-06-14')

!new Rental('rentalR21')
!rentalR21.date := Date('2024-07-01')

!new Rental('rentalR22')
!rentalR22.date := Date('2024-09-09')

!new Movie('movieM20')
!movieM20.title := 'Midnight Tuk-Tuk'
!movieM20.availableCopies := 0
!movieM20.genre := #Comedy

!new Movie('movieM21')
!movieM21.title := 'Baltic Strike'
!movieM21.availableCopies := 4
!movieM21.genre := #Action

!new Movie('movieM22')
!movieM22.title := 'Paper Lanterns'
!movieM22.availableCopies := 2
!movieM22.genre := #Comedy

!new Series('seriesS20')
!seriesS20.title := 'Coastline Dispatch'
!seriesS20.availableCopies := 1
!seriesS20.episode := 3

!new Series('seriesS21')
!seriesS21.title := 'Coastline Dispatch'
!seriesS21.availableCopies := 1
!seriesS21.episode := 24

!new Actor('actorA20')
!actorA20.name := 'Chinwe Okafor'

!new Actor('actorA21')
!actorA21.name := 'Ilya Petrov'

!new Actor('actorA22')
!actorA22.name := 'Mina Park'

!new Actor('actorA23')
!actorA23.name := 'Tomás Ribeiro'

!new Actor('actorA24')
!actorA24.name := 'Salma Benali'

!new Actor('actorA25')
!actorA25.name := 'Noah Williams'

!new Actor('actorA26')
!actorA26.name := 'Linh Trần'

!insert (clientC20, rentalR20) into ClientRental
!insert (clientC20, rentalR21) into ClientRental
!insert (clientC22, rentalR22) into ClientRental

!insert (rentalR20, movieM20) into RentalCassette

!insert (rentalR21, seriesS20) into RentalCassette
!insert (rentalR21, seriesS21) into RentalCassette
!insert (rentalR21, movieM21) into RentalCassette

!insert (rentalR22, movieM21) into RentalCassette

!insert (movieM20, actorA20) into CassetteActor
!insert (movieM20, actorA23) into CassetteActor

!insert (movieM21, actorA21) into CassetteActor
!insert (movieM21, actorA24) into CassetteActor
!insert (movieM21, actorA25) into CassetteActor

!insert (movieM22, actorA22) into CassetteActor

!insert (seriesS20, actorA24) into CassetteActor
!insert (seriesS20, actorA22) into CassetteActor

!insert (seriesS21, actorA20) into CassetteActor
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 66 | 0.00% |
| Multiplicities Errors | 0 | 17 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 4 | 5 | 80.00% |
| Types (out of valid Titles) | 0 | 1 | 0.00% |
| Genres (out of valid Titles) | 1 | 1 | 100.00% |
| Actors (out of valid Titles) | 1 | 1 | 100.00% |
| Release year > Rental year (out of valid Titles) | 0 | 0 | 0.00% |

| Failed Titles | 
|---| 
```
Coastline Dispatch
```
```
Coastline Dispatch
```
```
Baltic Strike
```
```
Midnight Tuk-Tuk
```

| Failed Genres | 
|---| 
```
Parsed genre: Comedy != API genre: [Documentary]
```

| Failed Actors | 
|---| 
```
Mina Park for movie: Paper Lanterns
```

## Category boundary
```
!new Client('clientReuseC20')
!clientReuseC20.clientId := 3
!clientReuseC20.isSuspended := false

!new Client('clientReuseC21')
!clientReuseC21.clientId := 4
!clientReuseC21.isSuspended := false

!new Client('clientReuseC22')
!clientReuseC22.clientId := 5
!clientReuseC22.isSuspended := true

!new Rental('rentalReuseR20')
!rentalReuseR20.date := Date('2026-01-01')

!new Rental('rentalReuseR21')
!rentalReuseR21.date := Date('2026-01-02')

!new Rental('rentalReuseR22')
!rentalReuseR22.date := Date('2026-01-03')

!new Rental('rentalReuseR23')
!rentalReuseR23.date := Date('2026-01-04')

!new Rental('rentalReuseR24')
!rentalReuseR24.date := Date('2026-01-05')

!new Rental('rentalReuseR25')
!rentalReuseR25.date := Date('2026-01-06')

!new Movie('movieReuseM20')
!movieReuseM20.title := 'Oceans at Dawn'
!movieReuseM20.availableCopies := 0
!movieReuseM20.genre := #Action

!new Series('seriesReuseS20')
!seriesReuseS20.title := 'Les Chroniques du Métro'
!seriesReuseS20.availableCopies := 0
!seriesReuseS20.episode := 1

!new Actor('actorReuseA20')
!actorReuseA20.name := 'Amélie Rousseau'

!new Actor('actorReuseA21')
!actorReuseA21.name := 'Tariq Al-Karim'

!new Actor('actorReuseA22')
!actorReuseA22.name := 'Mei-Ling Chen'

!new Actor('actorReuseA23')
!actorReuseA23.name := 'João da Silva'

!new Actor('actorReuseA24')
!actorReuseA24.name := 'Irina Volkov'

!new Actor('actorReuseA25')
!actorReuseA25.name := 'Noah Williams'

!insert (clientReuseC20, rentalReuseR20) into ClientRental
!insert (clientReuseC20, rentalReuseR21) into ClientRental
!insert (clientReuseC21, rentalReuseR22) into ClientRental
!insert (clientReuseC21, rentalReuseR23) into ClientRental
!insert (clientReuseC22, rentalReuseR24) into ClientRental
!insert (clientReuseC22, rentalReuseR25) into ClientRental

!insert (rentalReuseR20, movieReuseM20) into RentalCassette
!insert (rentalReuseR21, movieReuseM20) into RentalCassette
!insert (rentalReuseR22, movieReuseM20) into RentalCassette
!insert (rentalReuseR23, movieReuseM20) into RentalCassette
!insert (rentalReuseR24, seriesReuseS20) into RentalCassette
!insert (rentalReuseR25, movieReuseM20) into RentalCassette

!insert (movieReuseM20, actorReuseA20) into CassetteActor
!insert (movieReuseM20, actorReuseA21) into CassetteActor
!insert (movieReuseM20, actorReuseA22) into CassetteActor
!insert (movieReuseM20, actorReuseA23) into CassetteActor
!insert (movieReuseM20, actorReuseA24) into CassetteActor
!insert (movieReuseM20, actorReuseA25) into CassetteActor

!insert (seriesReuseS20, actorReuseA22) into CassetteActor
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 60 | 0.00% |
| Multiplicities Errors | 0 | 19 | 0.00% |
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
Les Chroniques du Métro
```
```
Oceans at Dawn
```

## Category complex
```
!new Client('clientTC20')
!clientTC20.clientId := 7
!clientTC20.isSuspended := false

!new Client('clientTC21')
!clientTC21.clientId := 19
!clientTC21.isSuspended := false

!new Client('clientTC22')
!clientTC22.clientId := 26
!clientTC22.isSuspended := true

!new Client('clientTC23')
!clientTC23.clientId := 41
!clientTC23.isSuspended := false

!new Client('clientTC24')
!clientTC24.clientId := 95
!clientTC24.isSuspended := false

!new Movie('movieTC20')
!movieTC20.title := 'Streets of Saint Petersburg'
!movieTC20.availableCopies := 0
!movieTC20.genre := #Action

!new Movie('movieTC21')
!movieTC21.title := 'Bossa Nova Mishaps'
!movieTC21.availableCopies := 2
!movieTC21.genre := #Comedy

!new Movie('movieTC22')
!movieTC22.title := 'Sahara Protocol'
!movieTC22.availableCopies := 1
!movieTC22.genre := #Action

!new Movie('movieTC23')
!movieTC23.title := 'Dhaba Days'
!movieTC23.availableCopies := 4
!movieTC23.genre := #Comedy

!new Movie('movieTC24')
!movieTC24.title := 'Nairobi Night Run'
!movieTC24.availableCopies := 1
!movieTC24.genre := #Action

!new Movie('movieTC25')
!movieTC25.title := 'The Reykjavík Riddle'
!movieTC25.availableCopies := 3
!movieTC25.genre := #Comedy

!new Series('seriesTC20')
!seriesTC20.title := 'Harbor Signals — Season 1'
!seriesTC20.availableCopies := 2
!seriesTC20.episode := 5

!new Series('seriesTC21')
!seriesTC21.title := 'Casbah Chronicles — Season 4'
!seriesTC21.availableCopies := 0
!seriesTC21.episode := 18

!new Series('seriesTC22')
!seriesTC22.title := 'Amazonas Investigates — Season 2'
!seriesTC22.availableCopies := 1
!seriesTC22.episode := 2

!new Series('seriesTC23')
!seriesTC23.title := 'Midnight Matatu — Season 1'
!seriesTC23.availableCopies := 2
!seriesTC23.episode := 11

!new Actor('actorTC20')
!actorTC20.name := 'Irina Volkova'

!new Actor('actorTC21')
!actorTC21.name := 'Ahmed Al-Farsi'

!new Actor('actorTC22')
!actorTC22.name := 'Ravi Iyer'

!new Actor('actorTC23')
!actorTC23.name := 'Lúcia Carvalho'

!new Actor('actorTC24')
!actorTC24.name := 'Siti Nur Aisyah'

!new Actor('actorTC25')
!actorTC25.name := 'Jonas Einarsson'

!new Actor('actorTC26')
!actorTC26.name := 'Wanjiku Njoroge'

!new Actor('actorTC27')
!actorTC27.name := 'Mateo Rojas'

!new Actor('actorTC28')
!actorTC28.name := 'Salma Haddad'

!new Rental('rentalTC20')
!rentalTC20.date := Date('2026-03-01')

!new Rental('rentalTC21')
!rentalTC21.date := Date('2026-03-03')

!new Rental('rentalTC22')
!rentalTC22.date := Date('2026-03-04')

!new Rental('rentalTC23')
!rentalTC23.date := Date('2026-03-10')

!new Rental('rentalTC24')
!rentalTC24.date := Date('2026-03-11')

!new Rental('rentalTC25')
!rentalTC25.date := Date('2026-03-12')

!new Rental('rentalTC26')
!rentalTC26.date := Date('2026-03-15')

!insert (clientTC20, rentalTC20) into ClientRental
!insert (clientTC20, rentalTC21) into ClientRental
!insert (clientTC21, rentalTC22) into ClientRental
!insert (clientTC22, rentalTC23) into ClientRental
!insert (clientTC23, rentalTC24) into ClientRental
!insert (clientTC24, rentalTC25) into ClientRental
!insert (clientTC22, rentalTC26) into ClientRental

!insert (rentalTC20, movieTC20) into RentalCassette
!insert (rentalTC20, seriesTC20) into RentalCassette

!insert (rentalTC21, movieTC23) into RentalCassette

!insert (rentalTC22, movieTC20) into RentalCassette
!insert (rentalTC22, movieTC21) into RentalCassette
!insert (rentalTC22, seriesTC21) into RentalCassette
!insert (rentalTC22, seriesTC23) into RentalCassette
!insert (rentalTC22, movieTC24) into RentalCassette

!insert (rentalTC23, movieTC22) into RentalCassette
!insert (rentalTC23, seriesTC21) into RentalCassette
!insert (rentalTC23, movieTC20) into RentalCassette

!insert (rentalTC24, seriesTC22) into RentalCassette
!insert (rentalTC24, movieTC21) into RentalCassette

!insert (rentalTC25, movieTC25) into RentalCassette
!insert (rentalTC25, seriesTC23) into RentalCassette

!insert (rentalTC26, movieTC20) into RentalCassette
!insert (rentalTC26, seriesTC22) into RentalCassette
!insert (rentalTC26, movieTC24) into RentalCassette

!insert (movieTC20, actorTC20) into CassetteActor
!insert (movieTC20, actorTC21) into CassetteActor

!insert (movieTC21, actorTC23) into CassetteActor
!insert (movieTC21, actorTC27) into CassetteActor

!insert (movieTC22, actorTC21) into CassetteActor
!insert (movieTC22, actorTC28) into CassetteActor
!insert (movieTC22, actorTC24) into CassetteActor

!insert (movieTC23, actorTC22) into CassetteActor

!insert (movieTC24, actorTC26) into CassetteActor
!insert (movieTC24, actorTC28) into CassetteActor

!insert (movieTC25, actorTC25) into CassetteActor
!insert (movieTC25, actorTC20) into CassetteActor

!insert (seriesTC20, actorTC24) into CassetteActor
!insert (seriesTC20, actorTC27) into CassetteActor

!insert (seriesTC21, actorTC21) into CassetteActor
!insert (seriesTC21, actorTC28) into CassetteActor

!insert (seriesTC22, actorTC27) into CassetteActor
!insert (seriesTC22, actorTC23) into CassetteActor

!insert (seriesTC23, actorTC26) into CassetteActor
!insert (seriesTC23, actorTC22) into CassetteActor
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 132 | 0.00% |
| Multiplicities Errors | 0 | 45 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 10 | 10 | 100.00% |
| Types (out of valid Titles) | 0 | 0 | 0.00% |
| Genres (out of valid Titles) | 0 | 0 | 0.00% |
| Actors (out of valid Titles) | 0 | 0 | 0.00% |
| Release year > Rental year (out of valid Titles) | 0 | 0 | 0.00% |

| Failed Titles | 
|---| 
```
Streets of Saint Petersburg
```
```
Bossa Nova Mishaps
```
```
Sahara Protocol
```
```
Midnight Matatu — Season 1
```
```
Amazonas Investigates — Season 2
```
```
Casbah Chronicles — Season 4
```
```
Harbor Signals — Season 1
```
```
Dhaba Days
```
```
Nairobi Night Run
```
```
The Reykjavík Riddle
```

## Category edge
```
!new Client('clientEdge3C20')
!clientEdge3C20.clientId := 4
!clientEdge3C20.isSuspended := false

!new Client('clientEdge3C21')
!clientEdge3C21.clientId := 5
!clientEdge3C21.isSuspended := false

!new Rental('rentalEdge3R20')
!rentalEdge3R20.date := Date('2024-02-30')

!new Rental('rentalEdge3R21')
!rentalEdge3R21.date := Date('Fri, 13th Month 2025')

!new Movie('movieEdge3M20')
!movieEdge3M20.title := '   '
!movieEdge3M20.availableCopies := 0
!movieEdge3M20.genre := #Action

!new Movie('movieEdge3M21')
!movieEdge3M21.title := 'The 400-Character Title Experiment: Part I — A Very Long Name Intended To Stress Display Fields In Older Point‑Of‑Sale Systems'
!movieEdge3M21.availableCopies := 1
!movieEdge3M21.genre := #Comedy

!new Movie('movieEdge3M22')
!movieEdge3M22.title := 'O Amor & o Caos'
!movieEdge3M22.availableCopies := 2
!movieEdge3M22.genre := #Comedy

!new Movie('movieEdge3M23')
!movieEdge3M23.title := 'Быстрый Переулок'
!movieEdge3M23.availableCopies := 0
!movieEdge3M23.genre := #Action

!new Movie('movieEdge3M24')
!movieEdge3M24.title := 'Kintsugi Heist'
!movieEdge3M24.availableCopies := 1
!movieEdge3M24.genre := #Action

!new Movie('movieEdge3M25')
!movieEdge3M25.title := 'La Última Broma'
!movieEdge3M25.availableCopies := 0
!movieEdge3M25.genre := #Comedy

!new Series('seriesEdge3S20')
!seriesEdge3S20.title := 'Signal Lantern'
!seriesEdge3S20.availableCopies := 1
!seriesEdge3S20.episode := 1

!new Series('seriesEdge3S21')
!seriesEdge3S21.title := 'Signal Lantern'
!seriesEdge3S21.availableCopies := 1
!seriesEdge3S21.episode := 2

!new Series('seriesEdge3S22')
!seriesEdge3S22.title := '都市の影 (City Shadows)'
!seriesEdge3S22.availableCopies := 0
!seriesEdge3S22.episode := 999999

!new Series('seriesEdge3S23')
!seriesEdge3S23.title := 'Café da Esquina'
!seriesEdge3S23.availableCopies := 3
!seriesEdge3S23.episode := 3

!new Series('seriesEdge3S24')
!seriesEdge3S24.title := 'Nordlys Journal'
!seriesEdge3S24.availableCopies := 0
!seriesEdge3S24.episode := 2147483647

!new Series('seriesEdge3S25')
!seriesEdge3S25.title := 'Desert Frequency'
!seriesEdge3S25.availableCopies := 1
!seriesEdge3S25.episode := 4

!new Actor('actorEdge3A20')
!actorEdge3A20.name := 'João Pereira'

!new Actor('actorEdge3A21')
!actorEdge3A21.name := 'Zahra Al‑Khalil'

!new Actor('actorEdge3A22')
!actorEdge3A22.name := 'Mina Cho (조민아)'

!new Actor('actorEdge3A23')
!actorEdge3A23.name := 'Étienne Morel'

!new Actor('actorEdge3A24')
!actorEdge3A24.name := 'Daria Nowak'

!new Actor('actorEdge3A25')
!actorEdge3A25.name := 'Adeola Ogun'

!new Actor('actorEdge3A26')
!actorEdge3A26.name := 'Nikolai Petrov'

!new Actor('actorEdge3A27')
!actorEdge3A27.name := 'Lucía Ríos'

!new Actor('actorEdge3A28')
!actorEdge3A28.name := 'Satoshi Kuroda'

!new Actor('actorEdge3A29')
!actorEdge3A29.name := 'Ingrid Haug'

!new Actor('actorEdge3A30')
!actorEdge3A30.name := 'Samir Haddad'

!insert (clientEdge3C20, rentalEdge3R20) into ClientRental
!insert (clientEdge3C21, rentalEdge3R21) into ClientRental

!insert (rentalEdge3R20, movieEdge3M20) into RentalCassette
!insert (rentalEdge3R20, movieEdge3M21) into RentalCassette
!insert (rentalEdge3R20, movieEdge3M22) into RentalCassette
!insert (rentalEdge3R20, movieEdge3M23) into RentalCassette
!insert (rentalEdge3R20, movieEdge3M24) into RentalCassette
!insert (rentalEdge3R20, movieEdge3M25) into RentalCassette
!insert (rentalEdge3R20, seriesEdge3S20) into RentalCassette
!insert (rentalEdge3R20, seriesEdge3S21) into RentalCassette
!insert (rentalEdge3R20, seriesEdge3S22) into RentalCassette
!insert (rentalEdge3R20, seriesEdge3S23) into RentalCassette
!insert (rentalEdge3R20, seriesEdge3S24) into RentalCassette
!insert (rentalEdge3R20, seriesEdge3S25) into RentalCassette

!insert (rentalEdge3R21, movieEdge3M24) into RentalCassette

!insert (movieEdge3M20, actorEdge3A26) into CassetteActor
!insert (movieEdge3M21, actorEdge3A23) into CassetteActor
!insert (movieEdge3M22, actorEdge3A20) into CassetteActor
!insert (movieEdge3M22, actorEdge3A27) into CassetteActor
!insert (movieEdge3M23, actorEdge3A26) into CassetteActor
!insert (movieEdge3M23, actorEdge3A24) into CassetteActor
!insert (movieEdge3M24, actorEdge3A28) into CassetteActor
!insert (movieEdge3M25, actorEdge3A27) into CassetteActor

!insert (seriesEdge3S20, actorEdge3A21) into CassetteActor
!insert (seriesEdge3S21, actorEdge3A21) into CassetteActor
!insert (seriesEdge3S21, actorEdge3A30) into CassetteActor
!insert (seriesEdge3S22, actorEdge3A22) into CassetteActor
!insert (seriesEdge3S23, actorEdge3A25) into CassetteActor
!insert (seriesEdge3S24, actorEdge3A29) into CassetteActor
!insert (seriesEdge3S25, actorEdge3A20) into CassetteActor
!insert (seriesEdge3S25, actorEdge3A21) into CassetteActor
!insert (seriesEdge3S25, actorEdge3A22) into CassetteActor
!insert (seriesEdge3S25, actorEdge3A23) into CassetteActor
!insert (seriesEdge3S25, actorEdge3A24) into CassetteActor
!insert (seriesEdge3S25, actorEdge3A25) into CassetteActor
!insert (seriesEdge3S25, actorEdge3A30) into CassetteActor
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 116 | 0.00% |
| Multiplicities Errors | 0 | 36 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 11 | 12 | 91.67% |
| Types (out of valid Titles) | 0 | 1 | 0.00% |
| Genres (out of valid Titles) | 0 | 0 | 0.00% |
| Actors (out of valid Titles) | 1 | 1 | 100.00% |
| Release year > Rental year (out of valid Titles) | 0 | 1 | 0.00% |

| Failed Titles | 
|---| 
```
   
```
```
O Amor & o Caos
```
```
The 400-Character Title Experiment: Part I — A Very Long Name Intended To Stress Display Fields In Older Point‑Of‑Sale Systems
```
```
Nordlys Journal
```
```
Desert Frequency
```
```
都市の影 (City Shadows)
```
```
Kintsugi Heist
```
```
Signal Lantern
```
```
Быстрый Переулок
```
```
Signal Lantern
```
```
La Última Broma
```

| Failed Actors | 
|---| 
```
Adeola Ogun for movie: Café da Esquina
```

## Category invalid
```
!new Client('clientKioskC20')
!clientKioskC20.clientId := 0
!clientKioskC20.isSuspended := false

!new Client('clientKioskC21')
!clientKioskC21.clientId := 77
!clientKioskC21.isSuspended := false

!new Rental('rentalKioskR20')
!rentalKioskR20.date := Date('2026-02-20')

!new Rental('rentalKioskR21')
!rentalKioskR21.date := Date('2026-02-18')

!new Movie('movieKioskM20')
!movieKioskM20.title := 'Kōwhai Run'
!movieKioskM20.availableCopies := -1
!movieKioskM20.genre := #Action

!new Series('seriesKioskS20')
!seriesKioskS20.title := 'Radio Sahra (Desert Broadcast)'
!seriesKioskS20.availableCopies := 2
!seriesKioskS20.episode := 2

!new Movie('movieKioskM21')
!movieKioskM21.title := 'Laughter on the Fjord'
!movieKioskM21.availableCopies := 1
!movieKioskM21.genre := #Comedy

!new Actor('actorKioskA20')
!actorKioskA20.name := 'Aroha Te Rangi'

!new Actor('actorKioskA21')
!actorKioskA21.name := 'Hassan Al‑Masri'

!new Actor('actorKioskA22')
!actorKioskA22.name := 'Ingrid Solheim'

!insert (clientKioskC20, rentalKioskR20) into ClientRental
!insert (clientKioskC21, rentalKioskR21) into ClientRental

!insert (rentalKioskR20, seriesKioskS20) into RentalCassette
!insert (rentalKioskR21, movieKioskM20) into RentalCassette
!insert (rentalKioskR21, movieKioskM21) into RentalCassette

!insert (seriesKioskS20, actorKioskA21) into CassetteActor
!insert (movieKioskM20, actorKioskA20) into CassetteActor
!insert (movieKioskM20, actorKioskA21) into CassetteActor
!insert (movieKioskM21, actorKioskA22) into CassetteActor
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 9 | 0.00% |
| Invariants Errors (Not included on General) | 2 | 3 | 66.67% |

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (1) `Cassette::postiveAvailableCopies': FAILED.
```
```
checking invariant (2) `Client::positiveClientId': FAILED.
```

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
Kōwhai Run
```
```
Laughter on the Fjord
```
```
Radio Sahra (Desert Broadcast)
```

## Generation 3 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 411 | 0.00% |
| Multiplicities Errors | 0 | 117 | 0.00% |
| Invariants Errors | 0 | 12 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 9 | 0.00% |
| Invariants Errors (Not included on General) | 2 | 3 | 66.67% |

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (1) `Cassette::postiveAvailableCopies': FAILED.
```
```
checking invariant (2) `Client::positiveClientId': FAILED.
```

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 30 | 32 | 93.75% |
| Types (out of valid Titles) | 0 | 2 | 0.00% |
| Genres (out of valid Titles) | 1 | 1 | 100.00% |
| Actors (out of valid Titles) | 2 | 2 | 100.00% |
| Release year > Rental year (out of valid Titles) | 0 | 1 | 0.00% |

| Failed Titles | 
|---| 
```
Coastline Dispatch
```
```
Coastline Dispatch
```
```
Baltic Strike
```
```
Midnight Tuk-Tuk
```
```
Les Chroniques du Métro
```
```
Oceans at Dawn
```
```
Streets of Saint Petersburg
```
```
Bossa Nova Mishaps
```
```
Sahara Protocol
```
```
Midnight Matatu — Season 1
```
```
Amazonas Investigates — Season 2
```
```
Casbah Chronicles — Season 4
```
```
Harbor Signals — Season 1
```
```
Dhaba Days
```
```
Nairobi Night Run
```
```
The Reykjavík Riddle
```
```
   
```
```
O Amor & o Caos
```
```
The 400-Character Title Experiment: Part I — A Very Long Name Intended To Stress Display Fields In Older Point‑Of‑Sale Systems
```
```
Nordlys Journal
```
```
Desert Frequency
```
```
都市の影 (City Shadows)
```
```
Kintsugi Heist
```
```
Signal Lantern
```
```
Быстрый Переулок
```
```
Signal Lantern
```
```
La Última Broma
```
```
Kōwhai Run
```
```
Laughter on the Fjord
```
```
Radio Sahra (Desert Broadcast)
```

| Failed Genres | 
|---| 
```
Parsed genre: Comedy != API genre: [Documentary]
```

| Failed Actors | 
|---| 
```
Mina Park for movie: Paper Lanterns
```
```
Adeola Ogun for movie: Café da Esquina
```

# Generation 4
## Category baseline
```
!new Client('clientC30')
!clientC30.clientId := 6
!clientC30.isSuspended := false

!new Client('clientC31')
!clientC31.clientId := 540
!clientC31.isSuspended := false

!new Rental('rentalR30')
!rentalR30.date := Date('2025-01-14')

!new Rental('rentalR31')
!rentalR31.date := Date('2025-01-16')

!new Rental('rentalR32')
!rentalR32.date := Date('2025-02-02')

!new Rental('rentalR33')
!rentalR33.date := Date('2025-03-10')

!new Movie('movieM30')
!movieM30.title := 'Rainy Season Heist'
!movieM30.availableCopies := 5
!movieM30.genre := #Action

!new Movie('movieM31')
!movieM31.title := 'The Bakery Next Door'
!movieM31.availableCopies := 2
!movieM31.genre := #Comedy

!new Movie('movieM32')
!movieM32.title := 'Kite-Festival Mix-Up'
!movieM32.availableCopies := 1
!movieM32.genre := #Comedy

!new Series('seriesS30')
!seriesS30.title := 'Harbor Radio'
!seriesS30.availableCopies := 3
!seriesS30.episode := 8

!new Series('seriesS31')
!seriesS31.title := 'Harbor Radio'
!seriesS31.availableCopies := 3
!seriesS31.episode := 9

!new Actor('actorA30')
!actorA30.name := 'Anaïs Dubois'

!new Actor('actorA31')
!actorA31.name := 'Bashir Al-Khatib'

!new Actor('actorA32')
!actorA32.name := 'Keiko Nakamura'

!new Actor('actorA33')
!actorA33.name := 'Mateo García'

!new Actor('actorA34')
!actorA34.name := 'Zola Ndlovu'

!new Actor('actorA35')
!actorA35.name := 'Sven Larsson'

!new Actor('actorA36')
!actorA36.name := 'Priya Iyer'

!new Actor('actorA37')
!actorA37.name := 'Hassan Reza'

!insert (clientC30, rentalR30) into ClientRental
!insert (clientC30, rentalR31) into ClientRental
!insert (clientC30, rentalR32) into ClientRental
!insert (clientC31, rentalR33) into ClientRental

!insert (rentalR30, movieM31) into RentalCassette
!insert (rentalR30, seriesS30) into RentalCassette
!insert (rentalR30, movieM30) into RentalCassette

!insert (rentalR31, seriesS31) into RentalCassette

!insert (rentalR32, movieM30) into RentalCassette
!insert (rentalR32, movieM32) into RentalCassette
!insert (rentalR32, seriesS30) into RentalCassette
!insert (rentalR32, seriesS31) into RentalCassette

!insert (rentalR33, movieM31) into RentalCassette
!insert (rentalR33, movieM32) into RentalCassette

!insert (movieM30, actorA31) into CassetteActor
!insert (movieM30, actorA35) into CassetteActor
!insert (movieM30, actorA37) into CassetteActor

!insert (movieM31, actorA30) into CassetteActor
!insert (movieM31, actorA33) into CassetteActor

!insert (movieM32, actorA36) into CassetteActor
!insert (movieM32, actorA34) into CassetteActor
!insert (movieM32, actorA33) into CassetteActor

!insert (seriesS30, actorA32) into CassetteActor
!insert (seriesS30, actorA37) into CassetteActor

!insert (seriesS31, actorA32) into CassetteActor
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 75 | 0.00% |
| Multiplicities Errors | 0 | 25 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 5 | 5 | 100.00% |
| Types (out of valid Titles) | 0 | 0 | 0.00% |
| Genres (out of valid Titles) | 0 | 0 | 0.00% |
| Actors (out of valid Titles) | 0 | 0 | 0.00% |
| Release year > Rental year (out of valid Titles) | 0 | 0 | 0.00% |

| Failed Titles | 
|---| 
```
Harbor Radio
```
```
Harbor Radio
```
```
Kite-Festival Mix-Up
```
```
Rainy Season Heist
```
```
The Bakery Next Door
```

## Category boundary
```
!new Client('clientHubC30')
!clientHubC30.clientId := 6
!clientHubC30.isSuspended := true

!new Rental('rentalHubR30')
!rentalHubR30.date := Date('0001-01-01')

!new Movie('movieHubM30')
!movieHubM30.title := 'Ulaanbaatar Run'
!movieHubM30.availableCopies := 0
!movieHubM30.genre := #Action

!new Movie('movieHubM31')
!movieHubM31.title := 'Comédia do Silêncio'
!movieHubM31.availableCopies := 0
!movieHubM31.genre := #Comedy

!new Movie('movieHubM32')
!movieHubM32.title := 'The Last Tram in Praha'
!movieHubM32.availableCopies := 0
!movieHubM32.genre := #Action

!new Movie('movieHubM33')
!movieHubM33.title := 'Kisah Lucu Jakarta'
!movieHubM33.availableCopies := 0
!movieHubM33.genre := #Comedy

!new Movie('movieHubM34')
!movieHubM34.title := 'Δρόμος της Σκιάς'
!movieHubM34.availableCopies := 0
!movieHubM34.genre := #Action

!new Series('seriesHubS30')
!seriesHubS30.title := 'Noite de Episódio'
!seriesHubS30.availableCopies := 0
!seriesHubS30.episode := 1

!new Series('seriesHubS31')
!seriesHubS31.title := 'Şehir Günlükleri'
!seriesHubS31.availableCopies := 0
!seriesHubS31.episode := 1

!new Series('seriesHubS32')
!seriesHubS32.title := 'Kraków Files'
!seriesHubS32.availableCopies := 0
!seriesHubS32.episode := 1

!new Movie('movieHubM35')
!movieHubM35.title := 'Cairo Punchline'
!movieHubM35.availableCopies := 0
!movieHubM35.genre := #Comedy

!new Series('seriesHubS33')
!seriesHubS33.title := 'Helsinki Signal'
!seriesHubS33.availableCopies := 0
!seriesHubS33.episode := 1

!new Actor('actorHubA30')
!actorHubA30.name := 'Samira Kovač'

!insert (clientHubC30, rentalHubR30) into ClientRental

!insert (rentalHubR30, movieHubM30) into RentalCassette
!insert (rentalHubR30, movieHubM31) into RentalCassette
!insert (rentalHubR30, movieHubM32) into RentalCassette
!insert (rentalHubR30, movieHubM33) into RentalCassette
!insert (rentalHubR30, movieHubM34) into RentalCassette
!insert (rentalHubR30, seriesHubS30) into RentalCassette
!insert (rentalHubR30, seriesHubS31) into RentalCassette
!insert (rentalHubR30, seriesHubS32) into RentalCassette

!insert (movieHubM30, actorHubA30) into CassetteActor
!insert (movieHubM31, actorHubA30) into CassetteActor
!insert (movieHubM32, actorHubA30) into CassetteActor
!insert (movieHubM33, actorHubA30) into CassetteActor
!insert (movieHubM34, actorHubA30) into CassetteActor
!insert (seriesHubS30, actorHubA30) into CassetteActor
!insert (seriesHubS31, actorHubA30) into CassetteActor
!insert (seriesHubS32, actorHubA30) into CassetteActor
!insert (movieHubM35, actorHubA30) into CassetteActor
!insert (seriesHubS33, actorHubA30) into CassetteActor
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 66 | 0.00% |
| Multiplicities Errors | 0 | 19 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 10 | 10 | 100.00% |
| Types (out of valid Titles) | 0 | 0 | 0.00% |
| Genres (out of valid Titles) | 0 | 0 | 0.00% |
| Actors (out of valid Titles) | 0 | 0 | 0.00% |
| Release year > Rental year (out of valid Titles) | 0 | 0 | 0.00% |

| Failed Titles | 
|---| 
```
Cairo Punchline
```
```
Δρόμος της Σκιάς
```
```
Kisah Lucu Jakarta
```
```
The Last Tram in Praha
```
```
Kraków Files
```
```
Comédia do Silêncio
```
```
Helsinki Signal
```
```
Ulaanbaatar Run
```
```
Noite de Episódio
```
```
Şehir Günlükleri
```

## Category complex
```
!new Client('clientComplex4C30')
!clientComplex4C30.clientId := 501
!clientComplex4C30.isSuspended := false

!new Client('clientComplex4C31')
!clientComplex4C31.clientId := 502
!clientComplex4C31.isSuspended := false

!new Client('clientComplex4C32')
!clientComplex4C32.clientId := 503
!clientComplex4C32.isSuspended := true

!new Client('clientComplex4C33')
!clientComplex4C33.clientId := 504
!clientComplex4C33.isSuspended := false

!new Client('clientComplex4C34')
!clientComplex4C34.clientId := 505
!clientComplex4C34.isSuspended := false

!new Client('clientComplex4C35')
!clientComplex4C35.clientId := 506
!clientComplex4C35.isSuspended := true

!new Movie('movieComplex4M30')
!movieComplex4M30.title := 'Typhoon Over Taipei'
!movieComplex4M30.availableCopies := 1
!movieComplex4M30.genre := #Action

!new Movie('movieComplex4M31')
!movieComplex4M31.title := 'Nonna’s New Recipe'
!movieComplex4M31.availableCopies := 3
!movieComplex4M31.genre := #Comedy

!new Movie('movieComplex4M32')
!movieComplex4M32.title := 'Baltic Heist'
!movieComplex4M32.availableCopies := 0
!movieComplex4M32.genre := #Action

!new Series('seriesComplex4S30')
!seriesComplex4S30.title := 'Kraków Detectives — Season 1'
!seriesComplex4S30.availableCopies := 2
!seriesComplex4S30.episode := 1

!new Series('seriesComplex4S31')
!seriesComplex4S31.title := 'Kraków Detectives — Season 1'
!seriesComplex4S31.availableCopies := 2
!seriesComplex4S31.episode := 2

!new Series('seriesComplex4S32')
!seriesComplex4S32.title := 'Kraków Detectives — Season 1'
!seriesComplex4S32.availableCopies := 1
!seriesComplex4S32.episode := 3

!new Series('seriesComplex4S33')
!seriesComplex4S33.title := 'Kraków Detectives — Season 1'
!seriesComplex4S33.availableCopies := 1
!seriesComplex4S33.episode := 4

!new Series('seriesComplex4S34')
!seriesComplex4S34.title := 'Andes Airlift — Season 2'
!seriesComplex4S34.availableCopies := 0
!seriesComplex4S34.episode := 6

!new Series('seriesComplex4S35')
!seriesComplex4S35.title := 'Mombasa Studio Sessions — Season 1'
!seriesComplex4S35.availableCopies := 4
!seriesComplex4S35.episode := 8

!new Actor('actorComplex4A30')
!actorComplex4A30.name := 'Priya Deshpande'

!new Actor('actorComplex4A31')
!actorComplex4A31.name := 'Zofia Kowalczyk'

!new Actor('actorComplex4A32')
!actorComplex4A32.name := 'Kemal Yıldırım'

!new Actor('actorComplex4A33')
!actorComplex4A33.name := 'Litia Vaʻani'

!new Actor('actorComplex4A34')
!actorComplex4A34.name := 'Tesfaye Bekele'

!new Actor('actorComplex4A35')
!actorComplex4A35.name := 'Émile Tremblay'

!new Actor('actorComplex4A36')
!actorComplex4A36.name := 'Marisol Quispe'

!new Actor('actorComplex4A37')
!actorComplex4A37.name := 'Nari Kim'

!new Actor('actorComplex4A38')
!actorComplex4A38.name := 'Hana Suzuki'

!new Actor('actorComplex4A39')
!actorComplex4A39.name := 'Oskar Nowak'

!new Actor('actorComplex4A40')
!actorComplex4A40.name := 'Asha Mwangi'

!new Rental('rentalComplex4R30')
!rentalComplex4R30.date := Date('2025-10-03')

!new Rental('rentalComplex4R31')
!rentalComplex4R31.date := Date('2025-10-10')

!new Rental('rentalComplex4R32')
!rentalComplex4R32.date := Date('2025-11-01')

!new Rental('rentalComplex4R33')
!rentalComplex4R33.date := Date('2025-11-02')

!new Rental('rentalComplex4R34')
!rentalComplex4R34.date := Date('2025-11-15')

!new Rental('rentalComplex4R35')
!rentalComplex4R35.date := Date('2025-12-05')

!new Rental('rentalComplex4R36')
!rentalComplex4R36.date := Date('2025-12-20')

!new Rental('rentalComplex4R37')
!rentalComplex4R37.date := Date('2026-01-08')

!insert (clientComplex4C30, rentalComplex4R30) into ClientRental
!insert (clientComplex4C30, rentalComplex4R31) into ClientRental
!insert (clientComplex4C31, rentalComplex4R32) into ClientRental
!insert (clientComplex4C32, rentalComplex4R33) into ClientRental
!insert (clientComplex4C33, rentalComplex4R34) into ClientRental
!insert (clientComplex4C30, rentalComplex4R35) into ClientRental
!insert (clientComplex4C32, rentalComplex4R36) into ClientRental
!insert (clientComplex4C33, rentalComplex4R37) into ClientRental

!insert (rentalComplex4R30, seriesComplex4S30) into RentalCassette
!insert (rentalComplex4R30, seriesComplex4S31) into RentalCassette
!insert (rentalComplex4R30, seriesComplex4S32) into RentalCassette

!insert (rentalComplex4R31, seriesComplex4S33) into RentalCassette

!insert (rentalComplex4R32, movieComplex4M31) into RentalCassette

!insert (rentalComplex4R33, movieComplex4M32) into RentalCassette
!insert (rentalComplex4R33, seriesComplex4S34) into RentalCassette

!insert (rentalComplex4R34, movieComplex4M30) into RentalCassette
!insert (rentalComplex4R34, seriesComplex4S35) into RentalCassette

!insert (rentalComplex4R35, movieComplex4M30) into RentalCassette
!insert (rentalComplex4R35, movieComplex4M31) into RentalCassette
!insert (rentalComplex4R35, movieComplex4M32) into RentalCassette
!insert (rentalComplex4R35, seriesComplex4S30) into RentalCassette
!insert (rentalComplex4R35, seriesComplex4S34) into RentalCassette
!insert (rentalComplex4R35, seriesComplex4S35) into RentalCassette

!insert (rentalComplex4R36, seriesComplex4S35) into RentalCassette

!insert (rentalComplex4R37, seriesComplex4S31) into RentalCassette
!insert (rentalComplex4R37, movieComplex4M31) into RentalCassette

!insert (movieComplex4M30, actorComplex4A30) into CassetteActor
!insert (movieComplex4M30, actorComplex4A37) into CassetteActor
!insert (movieComplex4M30, actorComplex4A38) into CassetteActor

!insert (movieComplex4M31, actorComplex4A30) into CassetteActor
!insert (movieComplex4M31, actorComplex4A35) into CassetteActor
!insert (movieComplex4M31, actorComplex4A33) into CassetteActor

!insert (movieComplex4M32, actorComplex4A30) into CassetteActor
!insert (movieComplex4M32, actorComplex4A31) into CassetteActor
!insert (movieComplex4M32, actorComplex4A39) into CassetteActor
!insert (movieComplex4M32, actorComplex4A32) into CassetteActor

!insert (seriesComplex4S30, actorComplex4A30) into CassetteActor
!insert (seriesComplex4S30, actorComplex4A31) into CassetteActor
!insert (seriesComplex4S30, actorComplex4A39) into CassetteActor

!insert (seriesComplex4S31, actorComplex4A30) into CassetteActor
!insert (seriesComplex4S31, actorComplex4A31) into CassetteActor
!insert (seriesComplex4S31, actorComplex4A34) into CassetteActor

!insert (seriesComplex4S32, actorComplex4A30) into CassetteActor
!insert (seriesComplex4S32, actorComplex4A39) into CassetteActor
!insert (seriesComplex4S32, actorComplex4A32) into CassetteActor

!insert (seriesComplex4S33, actorComplex4A30) into CassetteActor
!insert (seriesComplex4S33, actorComplex4A31) into CassetteActor
!insert (seriesComplex4S33, actorComplex4A35) into CassetteActor

!insert (seriesComplex4S34, actorComplex4A30) into CassetteActor
!insert (seriesComplex4S34, actorComplex4A36) into CassetteActor

!insert (seriesComplex4S35, actorComplex4A30) into CassetteActor
!insert (seriesComplex4S35, actorComplex4A40) into CassetteActor
!insert (seriesComplex4S35, actorComplex4A34) into CassetteActor
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 145 | 0.00% |
| Multiplicities Errors | 0 | 53 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 9 | 9 | 100.00% |
| Types (out of valid Titles) | 0 | 0 | 0.00% |
| Genres (out of valid Titles) | 0 | 0 | 0.00% |
| Actors (out of valid Titles) | 0 | 0 | 0.00% |
| Release year > Rental year (out of valid Titles) | 0 | 0 | 0.00% |

| Failed Titles | 
|---| 
```
Nonna’s New Recipe
```
```
Typhoon Over Taipei
```
```
Baltic Heist
```
```
Mombasa Studio Sessions — Season 1
```
```
Andes Airlift — Season 2
```
```
Kraków Detectives — Season 1
```
```
Kraków Detectives — Season 1
```
```
Kraków Detectives — Season 1
```
```
Kraków Detectives — Season 1
```

## Category edge
```
!new Client('clientEdge4C30')
!clientEdge4C30.clientId := 6
!clientEdge4C30.isSuspended := false

!new Client('clientEdge4C31')
!clientEdge4C31.clientId := 7
!clientEdge4C31.isSuspended := false

!new Client('clientEdge4C32')
!clientEdge4C32.clientId := 8
!clientEdge4C32.isSuspended := true

!new Rental('rentalEdge4R30')
!rentalEdge4R30.date := Date('')

!new Rental('rentalEdge4R31')
!rentalEdge4R31.date := Date('1900-01-01')

!new Rental('rentalEdge4R32')
!rentalEdge4R32.date := Date('1900-01-01')

!new Rental('rentalEdge4R33')
!rentalEdge4R33.date := Date('31-04-2020')

!new Rental('rentalEdge4R34')
!rentalEdge4R34.date := Date('2020-W53-7')

!new Rental('rentalEdge4R35')
!rentalEdge4R35.date := Date('9999-12-31')

!new Movie('movieEdge4M30')
!movieEdge4M30.title := '∅ (Zero Feature)'
!movieEdge4M30.availableCopies := 0
!movieEdge4M30.genre := #Action

!new Movie('movieEdge4M31')
!movieEdge4M31.title := 'The Infinite Shelf Experiment'
!movieEdge4M31.availableCopies := 2147483647
!movieEdge4M31.genre := #Comedy

!new Series('seriesEdge4S30')
!seriesEdge4S30.title := 'Saudade Radio Play'
!seriesEdge4S30.availableCopies := 0
!seriesEdge4S30.episode := 1

!new Series('seriesEdge4S31')
!seriesEdge4S31.title := 'Te Marama Files'
!seriesEdge4S31.availableCopies := 0
!seriesEdge4S31.episode := 2

!new Actor('actorEdge4A40')
!actorEdge4A40.name := 'Noor Qamar'

!new Actor('actorEdge4A41')
!actorEdge4A41.name := 'Giulia Bianchi'

!new Actor('actorEdge4A42')
!actorEdge4A42.name := 'Hiroto Sakamoto'

!new Actor('actorEdge4A43')
!actorEdge4A43.name := 'Sipho Dlamini'

!new Actor('actorEdge4A44')
!actorEdge4A44.name := 'Aoife Ní Bhraonáin'

!insert (clientEdge4C30, rentalEdge4R30) into ClientRental
!insert (clientEdge4C30, rentalEdge4R31) into ClientRental
!insert (clientEdge4C30, rentalEdge4R32) into ClientRental
!insert (clientEdge4C30, rentalEdge4R33) into ClientRental
!insert (clientEdge4C30, rentalEdge4R34) into ClientRental
!insert (clientEdge4C31, rentalEdge4R35) into ClientRental

!insert (rentalEdge4R30, movieEdge4M30) into RentalCassette

!insert (rentalEdge4R31, movieEdge4M30) into RentalCassette
!insert (rentalEdge4R31, seriesEdge4S30) into RentalCassette

!insert (rentalEdge4R32, movieEdge4M30) into RentalCassette
!insert (rentalEdge4R32, movieEdge4M31) into RentalCassette

!insert (rentalEdge4R33, movieEdge4M30) into RentalCassette
!insert (rentalEdge4R33, seriesEdge4S31) into RentalCassette

!insert (rentalEdge4R34, movieEdge4M30) into RentalCassette
!insert (rentalEdge4R34, seriesEdge4S30) into RentalCassette
!insert (rentalEdge4R34, seriesEdge4S31) into RentalCassette

!insert (rentalEdge4R35, movieEdge4M30) into RentalCassette
!insert (rentalEdge4R35, movieEdge4M31) into RentalCassette

!insert (movieEdge4M30, actorEdge4A40) into CassetteActor

!insert (movieEdge4M31, actorEdge4A40) into CassetteActor
!insert (movieEdge4M31, actorEdge4A41) into CassetteActor

!insert (seriesEdge4S30, actorEdge4A40) into CassetteActor
!insert (seriesEdge4S30, actorEdge4A42) into CassetteActor
!insert (seriesEdge4S30, actorEdge4A43) into CassetteActor

!insert (seriesEdge4S31, actorEdge4A40) into CassetteActor
!insert (seriesEdge4S31, actorEdge4A44) into CassetteActor
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 73 | 0.00% |
| Multiplicities Errors | 0 | 26 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 4 | 4 | 100.00% |
| Types (out of valid Titles) | 0 | 0 | 0.00% |
| Genres (out of valid Titles) | 0 | 0 | 0.00% |
| Actors (out of valid Titles) | 0 | 0 | 0.00% |
| Release year > Rental year (out of valid Titles) | 0 | 0 | 0.00% |

| Failed Titles | 
|---| 
```
The Infinite Shelf Experiment
```
```
∅ (Zero Feature)
```
```
Te Marama Files
```
```
Saudade Radio Play
```

## Category invalid
```
!new Client('clientFestC30')
!clientFestC30.clientId := 501
!clientFestC30.isSuspended := false

!new Client('clientFestC31')
!clientFestC31.clientId := 502
!clientFestC31.isSuspended := false

!new Rental('rentalFestR30')
!rentalFestR30.date := Date('2026-02-21')

!new Rental('rentalFestR31')
!rentalFestR31.date := Date('2026-02-21')

!new Rental('rentalFestR32')
!rentalFestR32.date := Date('2026-02-22')

!new Movie('movieFestM30')
!movieFestM30.title := 'Desert Courier'
!movieFestM30.availableCopies := 6
!movieFestM30.genre := #Action

!new Movie('movieFestM31')
!movieFestM31.title := 'Les rires du marché'
!movieFestM31.availableCopies := 1
!movieFestM31.genre := #Comedy

!new Series('seriesFestS30')
!seriesFestS30.title := 'Coastline Detectives'
!seriesFestS30.availableCopies := 2
!seriesFestS30.episode := 5

!new Series('seriesFestS31')
!seriesFestS31.title := 'Festival Diaries'
!seriesFestS31.availableCopies := 0
!seriesFestS31.episode := 1

!new Actor('actorFestA30')
!actorFestA30.name := 'Noura Benali'

!new Actor('actorFestA31')
!actorFestA31.name := 'Jean-Paul Mercier'

!new Actor('actorFestA32')
!actorFestA32.name := 'Mateo Rojas'

!new Actor('actorFestA33')
!actorFestA33.name := 'Ece Yıldırım'

!new Actor('actorFestA34')
!actorFestA34.name := 'Satoshi Mori'

!insert (clientFestC30, rentalFestR31) into ClientRental
!insert (clientFestC31, rentalFestR32) into ClientRental

!insert (rentalFestR30, movieFestM31) into RentalCassette
!insert (rentalFestR30, seriesFestS31) into RentalCassette
!insert (rentalFestR31, movieFestM30) into RentalCassette
!insert (rentalFestR32, seriesFestS30) into RentalCassette
!insert (rentalFestR32, movieFestM30) into RentalCassette

!insert (movieFestM30, actorFestA30) into CassetteActor
!insert (movieFestM30, actorFestA32) into CassetteActor
!insert (movieFestM31, actorFestA31) into CassetteActor
!insert (seriesFestS30, actorFestA33) into CassetteActor
!insert (seriesFestS30, actorFestA34) into CassetteActor
!insert (seriesFestS31, actorFestA32) into CassetteActor
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 13 | 7.69% |
| Invariants Errors (Not included on General) | 0 | 3 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `ClientRental':
  Object `rentalFestR30' of class `Rental' is connected to 0 objects of class `Client'
  at association end `assigned' but the multiplicity is specified as `1'.
```

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 4 | 4 | 100.00% |
| Types (out of valid Titles) | 0 | 0 | 0.00% |
| Genres (out of valid Titles) | 0 | 0 | 0.00% |
| Actors (out of valid Titles) | 0 | 0 | 0.00% |
| Release year > Rental year (out of valid Titles) | 0 | 0 | 0.00% |

| Failed Titles | 
|---| 
```
Coastline Detectives
```
```
Festival Diaries
```
```
Les rires du marché
```
```
Desert Courier
```

## Generation 4 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 410 | 0.00% |
| Multiplicities Errors | 0 | 123 | 0.00% |
| Invariants Errors | 0 | 12 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 13 | 7.69% |
| Invariants Errors (Not included on General) | 0 | 3 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `ClientRental':
  Object `rentalFestR30' of class `Rental' is connected to 0 objects of class `Client'
  at association end `assigned' but the multiplicity is specified as `1'.
```

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 32 | 32 | 100.00% |
| Types (out of valid Titles) | 0 | 0 | 0.00% |
| Genres (out of valid Titles) | 0 | 0 | 0.00% |
| Actors (out of valid Titles) | 0 | 0 | 0.00% |
| Release year > Rental year (out of valid Titles) | 0 | 0 | 0.00% |

| Failed Titles | 
|---| 
```
Harbor Radio
```
```
Harbor Radio
```
```
Kite-Festival Mix-Up
```
```
Rainy Season Heist
```
```
The Bakery Next Door
```
```
Cairo Punchline
```
```
Δρόμος της Σκιάς
```
```
Kisah Lucu Jakarta
```
```
The Last Tram in Praha
```
```
Kraków Files
```
```
Comédia do Silêncio
```
```
Helsinki Signal
```
```
Ulaanbaatar Run
```
```
Noite de Episódio
```
```
Şehir Günlükleri
```
```
Nonna’s New Recipe
```
```
Typhoon Over Taipei
```
```
Baltic Heist
```
```
Mombasa Studio Sessions — Season 1
```
```
Andes Airlift — Season 2
```
```
Kraków Detectives — Season 1
```
```
Kraków Detectives — Season 1
```
```
Kraków Detectives — Season 1
```
```
Kraków Detectives — Season 1
```
```
The Infinite Shelf Experiment
```
```
∅ (Zero Feature)
```
```
Te Marama Files
```
```
Saudade Radio Play
```
```
Coastline Detectives
```
```
Festival Diaries
```
```
Les rires du marché
```
```
Desert Courier
```

# Generation 5
## Category baseline
```
!new Client('clientC40')
!clientC40.clientId := 44
!clientC40.isSuspended := false

!new Client('clientC41')
!clientC41.clientId := 1201
!clientC41.isSuspended := true

!new Client('clientC42')
!clientC42.clientId := 318
!clientC42.isSuspended := false

!new Client('clientC43')
!clientC43.clientId := 9
!clientC43.isSuspended := false

!new Rental('rentalR40')
!rentalR40.date := Date('2023-08-14')

!new Rental('rentalR41')
!rentalR41.date := Date('2023-08-20')

!new Rental('rentalR42')
!rentalR42.date := Date('2023-09-02')

!new Movie('movieM40')
!movieM40.title := 'Whānau Warriors'
!movieM40.availableCopies := 2
!movieM40.genre := #Action

!new Movie('movieM41')
!movieM41.title := 'Sauna Sitcom'
!movieM41.availableCopies := 0
!movieM41.genre := #Comedy

!new Movie('movieM42')
!movieM42.title := 'Steppe Chase'
!movieM42.availableCopies := 6
!movieM42.genre := #Action

!new Series('seriesS40')
!seriesS40.title := 'Orbital Classroom'
!seriesS40.availableCopies := 1
!seriesS40.episode := 2

!new Series('seriesS41')
!seriesS41.title := 'Orbital Classroom'
!seriesS41.availableCopies := 1
!seriesS41.episode := 7

!new Series('seriesS42')
!seriesS42.title := 'Orbital Classroom'
!seriesS42.availableCopies := 3
!seriesS42.episode := 1

!new Actor('actorA40')
!actorA40.name := 'Hine Te Rangi'

!new Actor('actorA41')
!actorA41.name := 'Joon-ho Park'

!new Actor('actorA42')
!actorA42.name := 'Aino Kallio'

!new Actor('actorA43')
!actorA43.name := 'Batbayar Enkh'

!new Actor('actorA44')
!actorA44.name := 'Lara Nascimento'

!new Actor('actorA45')
!actorA45.name := 'Samir Qureshi'

!new Actor('actorA46')
!actorA46.name := 'Eleni Papadakis'

!insert (clientC40, rentalR40) into ClientRental
!insert (clientC40, rentalR41) into ClientRental
!insert (clientC43, rentalR42) into ClientRental

!insert (rentalR40, movieM40) into RentalCassette
!insert (rentalR40, movieM41) into RentalCassette
!insert (rentalR40, seriesS40) into RentalCassette
!insert (rentalR40, seriesS41) into RentalCassette
!insert (rentalR40, seriesS42) into RentalCassette

!insert (rentalR41, movieM40) into RentalCassette

!insert (rentalR42, seriesS41) into RentalCassette

!insert (movieM40, actorA40) into CassetteActor
!insert (movieM40, actorA41) into CassetteActor

!insert (movieM41, actorA42) into CassetteActor

!insert (movieM42, actorA43) into CassetteActor
!insert (movieM42, actorA44) into CassetteActor
!insert (movieM42, actorA40) into CassetteActor

!insert (seriesS40, actorA45) into CassetteActor

!insert (seriesS41, actorA41) into CassetteActor
!insert (seriesS41, actorA46) into CassetteActor

!insert (seriesS42, actorA40) into CassetteActor
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 76 | 0.00% |
| Multiplicities Errors | 0 | 20 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 6 | 6 | 100.00% |
| Types (out of valid Titles) | 0 | 0 | 0.00% |
| Genres (out of valid Titles) | 0 | 0 | 0.00% |
| Actors (out of valid Titles) | 0 | 0 | 0.00% |
| Release year > Rental year (out of valid Titles) | 0 | 0 | 0.00% |

| Failed Titles | 
|---| 
```
Orbital Classroom
```
```
Orbital Classroom
```
```
Orbital Classroom
```
```
Sauna Sitcom
```
```
Steppe Chase
```
```
Whānau Warriors
```

## Category boundary
```
!new Client('clientMinC40')
!clientMinC40.clientId := 7
!clientMinC40.isSuspended := true

!new Rental('rentalMinR40')
!rentalMinR40.date := Date('1582-10-15')

!new Series('seriesMinS40')
!seriesMinS40.title := 'Ngā Wāhanga Tuatahi'
!seriesMinS40.availableCopies := 0
!seriesMinS40.episode := 1

!new Actor('actorMinA40')
!actorMinA40.name := 'Þórður Jónsson'

!insert (clientMinC40, rentalMinR40) into ClientRental
!insert (rentalMinR40, seriesMinS40) into RentalCassette
!insert (seriesMinS40, actorMinA40) into CassetteActor
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 14 | 0.00% |
| Multiplicities Errors | 0 | 3 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 1 | 1 | 100.00% |
| Types (out of valid Titles) | 0 | 0 | 0.00% |
| Genres (out of valid Titles) | 0 | 0 | 0.00% |
| Actors (out of valid Titles) | 0 | 0 | 0.00% |
| Release year > Rental year (out of valid Titles) | 0 | 0 | 0.00% |

| Failed Titles | 
|---| 
```
Ngā Wāhanga Tuatahi
```

## Category complex
```
!new Client('clientComplex5C40')
!clientComplex5C40.clientId := 901
!clientComplex5C40.isSuspended := false

!new Client('clientComplex5C41')
!clientComplex5C41.clientId := 902
!clientComplex5C41.isSuspended := false

!new Client('clientComplex5C42')
!clientComplex5C42.clientId := 903
!clientComplex5C42.isSuspended := false

!new Client('clientComplex5C43')
!clientComplex5C43.clientId := 904
!clientComplex5C43.isSuspended := true

!new Client('clientComplex5C44')
!clientComplex5C44.clientId := 905
!clientComplex5C44.isSuspended := false

!new Movie('movieComplex5M40')
!movieComplex5M40.title := 'Koru Coast Pursuit'
!movieComplex5M40.availableCopies := 1
!movieComplex5M40.genre := #Action

!new Movie('movieComplex5M41')
!movieComplex5M41.title := 'Bangkok Banana Split'
!movieComplex5M41.availableCopies := 0
!movieComplex5M41.genre := #Comedy

!new Movie('movieComplex5M42')
!movieComplex5M42.title := 'Aurora Freight Run'
!movieComplex5M42.availableCopies := 3
!movieComplex5M42.genre := #Action

!new Movie('movieComplex5M43')
!movieComplex5M43.title := 'Carnaval Confidential'
!movieComplex5M43.availableCopies := 2
!movieComplex5M43.genre := #Comedy

!new Movie('movieComplex5M44')
!movieComplex5M44.title := 'Red Dunes Extraction'
!movieComplex5M44.availableCopies := 0
!movieComplex5M44.genre := #Action

!new Series('seriesComplex5S40')
!seriesComplex5S40.title := 'Atlas Station — Season 1'
!seriesComplex5S40.availableCopies := 2
!seriesComplex5S40.episode := 1

!new Series('seriesComplex5S41')
!seriesComplex5S41.title := 'Atlas Station — Season 1'
!seriesComplex5S41.availableCopies := 1
!seriesComplex5S41.episode := 2

!new Series('seriesComplex5S42')
!seriesComplex5S42.title := 'Atlas Station — Season 1'
!seriesComplex5S42.availableCopies := 0
!seriesComplex5S42.episode := 3

!new Series('seriesComplex5S43')
!seriesComplex5S43.title := 'Atlas Station — Season 1'
!seriesComplex5S43.availableCopies := 1
!seriesComplex5S43.episode := 4

!new Series('seriesComplex5S44')
!seriesComplex5S44.title := 'Tuk Tuk Tales — Season 2'
!seriesComplex5S44.availableCopies := 4
!seriesComplex5S44.episode := 9

!new Series('seriesComplex5S45')
!seriesComplex5S45.title := 'Tuk Tuk Tales — Season 2'
!seriesComplex5S45.availableCopies := 0
!seriesComplex5S45.episode := 10

!new Series('seriesComplex5S46')
!seriesComplex5S46.title := 'Tuk Tuk Tales — Season 2'
!seriesComplex5S46.availableCopies := 2
!seriesComplex5S46.episode := 11

!new Actor('actorComplex5A40')
!actorComplex5A40.name := 'Tāne Mahuta'

!new Actor('actorComplex5A41')
!actorComplex5A41.name := 'Lucía Álvarez'

!new Actor('actorComplex5A42')
!actorComplex5A42.name := 'Somchai Kittipong'

!new Actor('actorComplex5A43')
!actorComplex5A43.name := 'Anika Singh'

!new Actor('actorComplex5A44')
!actorComplex5A44.name := 'Noah Qamaniq'

!new Actor('actorComplex5A45')
!actorComplex5A45.name := 'Élodie Martin'

!new Actor('actorComplex5A46')
!actorComplex5A46.name := 'Rashid Al-Khalil'

!new Actor('actorComplex5A47')
!actorComplex5A47.name := 'Camila Rojas'

!new Actor('actorComplex5A48')
!actorComplex5A48.name := 'Sakura Ito'

!new Actor('actorComplex5A49')
!actorComplex5A49.name := 'Oksana Petrenko'

!new Rental('rentalComplex5R40')
!rentalComplex5R40.date := Date('2025-08-29')

!new Rental('rentalComplex5R41')
!rentalComplex5R41.date := Date('2025-09-05')

!new Rental('rentalComplex5R42')
!rentalComplex5R42.date := Date('2025-09-06')

!new Rental('rentalComplex5R43')
!rentalComplex5R43.date := Date('2025-09-10')

!new Rental('rentalComplex5R44')
!rentalComplex5R44.date := Date('2025-10-01')

!new Rental('rentalComplex5R45')
!rentalComplex5R45.date := Date('2025-10-03')

!new Rental('rentalComplex5R46')
!rentalComplex5R46.date := Date('2025-11-15')

!new Rental('rentalComplex5R47')
!rentalComplex5R47.date := Date('2026-01-12')

!new Rental('rentalComplex5R48')
!rentalComplex5R48.date := Date('2026-02-02')

!insert (clientComplex5C40, rentalComplex5R40) into ClientRental
!insert (clientComplex5C40, rentalComplex5R41) into ClientRental
!insert (clientComplex5C41, rentalComplex5R42) into ClientRental
!insert (clientComplex5C42, rentalComplex5R43) into ClientRental
!insert (clientComplex5C43, rentalComplex5R44) into ClientRental
!insert (clientComplex5C44, rentalComplex5R45) into ClientRental
!insert (clientComplex5C41, rentalComplex5R46) into ClientRental
!insert (clientComplex5C42, rentalComplex5R47) into ClientRental
!insert (clientComplex5C40, rentalComplex5R48) into ClientRental

!insert (rentalComplex5R40, seriesComplex5S40) into RentalCassette
!insert (rentalComplex5R40, seriesComplex5S41) into RentalCassette
!insert (rentalComplex5R40, seriesComplex5S42) into RentalCassette
!insert (rentalComplex5R40, seriesComplex5S43) into RentalCassette

!insert (rentalComplex5R41, movieComplex5M40) into RentalCassette
!insert (rentalComplex5R41, movieComplex5M41) into RentalCassette

!insert (rentalComplex5R42, movieComplex5M41) into RentalCassette
!insert (rentalComplex5R42, seriesComplex5S44) into RentalCassette

!insert (rentalComplex5R43, movieComplex5M42) into RentalCassette

!insert (rentalComplex5R44, seriesComplex5S45) into RentalCassette
!insert (rentalComplex5R44, seriesComplex5S46) into RentalCassette
!insert (rentalComplex5R44, movieComplex5M43) into RentalCassette

!insert (rentalComplex5R45, movieComplex5M44) into RentalCassette
!insert (rentalComplex5R45, seriesComplex5S44) into RentalCassette
!insert (rentalComplex5R45, seriesComplex5S45) into RentalCassette

!insert (rentalComplex5R46, seriesComplex5S40) into RentalCassette
!insert (rentalComplex5R46, movieComplex5M42) into RentalCassette
!insert (rentalComplex5R46, movieComplex5M43) into RentalCassette
!insert (rentalComplex5R46, movieComplex5M44) into RentalCassette

!insert (rentalComplex5R47, seriesComplex5S46) into RentalCassette

!insert (rentalComplex5R48, movieComplex5M40) into RentalCassette
!insert (rentalComplex5R48, seriesComplex5S44) into RentalCassette
!insert (rentalComplex5R48, movieComplex5M44) into RentalCassette
!insert (rentalComplex5R48, seriesComplex5S41) into RentalCassette
!insert (rentalComplex5R48, movieComplex5M42) into RentalCassette

!insert (movieComplex5M40, actorComplex5A40) into CassetteActor
!insert (movieComplex5M40, actorComplex5A41) into CassetteActor

!insert (movieComplex5M41, actorComplex5A41) into CassetteActor
!insert (movieComplex5M41, actorComplex5A42) into CassetteActor

!insert (movieComplex5M42, actorComplex5A43) into CassetteActor
!insert (movieComplex5M42, actorComplex5A44) into CassetteActor
!insert (movieComplex5M42, actorComplex5A40) into CassetteActor

!insert (movieComplex5M43, actorComplex5A45) into CassetteActor
!insert (movieComplex5M43, actorComplex5A46) into CassetteActor

!insert (movieComplex5M44, actorComplex5A47) into CassetteActor
!insert (movieComplex5M44, actorComplex5A42) into CassetteActor
!insert (movieComplex5M44, actorComplex5A46) into CassetteActor

!insert (seriesComplex5S40, actorComplex5A45) into CassetteActor
!insert (seriesComplex5S40, actorComplex5A48) into CassetteActor

!insert (seriesComplex5S41, actorComplex5A45) into CassetteActor
!insert (seriesComplex5S41, actorComplex5A48) into CassetteActor
!insert (seriesComplex5S41, actorComplex5A49) into CassetteActor

!insert (seriesComplex5S42, actorComplex5A45) into CassetteActor
!insert (seriesComplex5S42, actorComplex5A49) into CassetteActor

!insert (seriesComplex5S43, actorComplex5A45) into CassetteActor
!insert (seriesComplex5S43, actorComplex5A48) into CassetteActor

!insert (seriesComplex5S44, actorComplex5A42) into CassetteActor
!insert (seriesComplex5S44, actorComplex5A47) into CassetteActor

!insert (seriesComplex5S45, actorComplex5A42) into CassetteActor
!insert (seriesComplex5S45, actorComplex5A43) into CassetteActor
!insert (seriesComplex5S45, actorComplex5A47) into CassetteActor

!insert (seriesComplex5S46, actorComplex5A47) into CassetteActor
!insert (seriesComplex5S46, actorComplex5A44) into CassetteActor
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 163 | 0.00% |
| Multiplicities Errors | 0 | 62 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 12 | 12 | 100.00% |
| Types (out of valid Titles) | 0 | 0 | 0.00% |
| Genres (out of valid Titles) | 0 | 0 | 0.00% |
| Actors (out of valid Titles) | 0 | 0 | 0.00% |
| Release year > Rental year (out of valid Titles) | 0 | 0 | 0.00% |

| Failed Titles | 
|---| 
```
Bangkok Banana Split
```
```
Koru Coast Pursuit
```
```
Carnaval Confidential
```
```
Aurora Freight Run
```
```
Red Dunes Extraction
```
```
Tuk Tuk Tales — Season 2
```
```
Tuk Tuk Tales — Season 2
```
```
Tuk Tuk Tales — Season 2
```
```
Atlas Station — Season 1
```
```
Atlas Station — Season 1
```
```
Atlas Station — Season 1
```
```
Atlas Station — Season 1
```

## Category edge
```
!new Client('clientLoopC40')
!clientLoopC40.clientId := 9
!clientLoopC40.isSuspended := true

!new Client('clientLoopC41')
!clientLoopC41.clientId := 10
!clientLoopC41.isSuspended := false

!new Client('clientLoopC42')
!clientLoopC42.clientId := 11
!clientLoopC42.isSuspended := false

!new Client('clientLoopC43')
!clientLoopC43.clientId := 12
!clientLoopC43.isSuspended := false

!new Rental('rentalLoopR40')
!rentalLoopR40.date := Date('today')

!new Rental('rentalLoopR41')
!rentalLoopR41.date := Date('2026年02月22日')

!new Rental('rentalLoopR42')
!rentalLoopR42.date := Date('22-02-2026')

!new Rental('rentalLoopR43')
!rentalLoopR43.date := Date('٢٠٢٦-٠٢-٢٢')

!new Rental('rentalLoopR44')
!rentalLoopR44.date := Date('Sun Feb 30 2025')

!new Rental('rentalLoopR45')
!rentalLoopR45.date := Date('2026/02/22 25:61')

!new Rental('rentalLoopR46')
!rentalLoopR46.date := Date('∞')

!new Movie('movieLoopM40')
!movieLoopM40.title := 'Two Lines\nOne Tape'
!movieLoopM40.availableCopies := 0
!movieLoopM40.genre := #Action

!new Movie('movieLoopM41')
!movieLoopM41.title := 'Короткий Смех'
!movieLoopM41.availableCopies := 0
!movieLoopM41.genre := #Comedy

!new Movie('movieLoopM42')
!movieLoopM42.title := 'สายลับเงียบ'
!movieLoopM42.availableCopies := 0
!movieLoopM42.genre := #Action

!new Movie('movieLoopM43')
!movieLoopM43.title := 'The Very, Very, Very Long Screening Title Used Only to Stress Old Inventory Printers and Receipts'
!movieLoopM43.availableCopies := 1
!movieLoopM43.genre := #Comedy

!new Movie('movieLoopM44')
!movieLoopM44.title := '   The Punctuation Trial: (A) [B] {C} — D!   '
!movieLoopM44.availableCopies := 0
!movieLoopM44.genre := #Action

!new Movie('movieLoopM45')
!movieLoopM45.title := 'Noche de Vidrio'
!movieLoopM45.availableCopies := 2
!movieLoopM45.genre := #Comedy

!new Movie('movieLoopM46')
!movieLoopM46.title := 'Heimsendir'
!movieLoopM46.availableCopies := 0
!movieLoopM46.genre := #Action

!new Actor('actorLoopA50')
!actorLoopA50.name := 'Fátima Al‑Sayeed'

!new Actor('actorLoopA51')
!actorLoopA51.name := 'Tāne Raukura'

!new Actor('actorLoopA52')
!actorLoopA52.name := 'Ewa Kowalska'

!new Actor('actorLoopA53')
!actorLoopA53.name := 'Somchai Prasert'

!new Actor('actorLoopA54')
!actorLoopA54.name := 'Inuk Qamaniq'

!new Actor('actorLoopA55')
!actorLoopA55.name := 'Noura Benali'

!new Actor('actorLoopA56')
!actorLoopA56.name := 'Miguel Ángel Soto'

!new Actor('actorLoopA57')
!actorLoopA57.name := 'Hanae Nakamura'

!new Actor('actorLoopA58')
!actorLoopA58.name := 'Sigríður Jónsdóttir'

!insert (clientLoopC41, rentalLoopR40) into ClientRental
!insert (clientLoopC42, rentalLoopR41) into ClientRental
!insert (clientLoopC41, rentalLoopR42) into ClientRental
!insert (clientLoopC42, rentalLoopR43) into ClientRental
!insert (clientLoopC41, rentalLoopR44) into ClientRental
!insert (clientLoopC42, rentalLoopR45) into ClientRental
!insert (clientLoopC41, rentalLoopR46) into ClientRental

!insert (rentalLoopR40, movieLoopM40) into RentalCassette
!insert (rentalLoopR40, movieLoopM41) into RentalCassette

!insert (rentalLoopR41, movieLoopM41) into RentalCassette
!insert (rentalLoopR41, movieLoopM42) into RentalCassette

!insert (rentalLoopR42, movieLoopM42) into RentalCassette
!insert (rentalLoopR42, movieLoopM43) into RentalCassette

!insert (rentalLoopR43, movieLoopM43) into RentalCassette
!insert (rentalLoopR43, movieLoopM44) into RentalCassette

!insert (rentalLoopR44, movieLoopM44) into RentalCassette
!insert (rentalLoopR44, movieLoopM45) into RentalCassette

!insert (rentalLoopR45, movieLoopM45) into RentalCassette
!insert (rentalLoopR45, movieLoopM46) into RentalCassette

!insert (rentalLoopR46, movieLoopM46) into RentalCassette
!insert (rentalLoopR46, movieLoopM40) into RentalCassette

!insert (movieLoopM40, actorLoopA50) into CassetteActor
!insert (movieLoopM40, actorLoopA54) into CassetteActor

!insert (movieLoopM41, actorLoopA50) into CassetteActor
!insert (movieLoopM41, actorLoopA52) into CassetteActor

!insert (movieLoopM42, actorLoopA50) into CassetteActor
!insert (movieLoopM42, actorLoopA53) into CassetteActor

!insert (movieLoopM43, actorLoopA50) into CassetteActor
!insert (movieLoopM43, actorLoopA51) into CassetteActor
!insert (movieLoopM43, actorLoopA55) into CassetteActor
!insert (movieLoopM43, actorLoopA56) into CassetteActor
!insert (movieLoopM43, actorLoopA57) into CassetteActor

!insert (movieLoopM44, actorLoopA50) into CassetteActor
!insert (movieLoopM44, actorLoopA58) into CassetteActor

!insert (movieLoopM45, actorLoopA50) into CassetteActor
!insert (movieLoopM45, actorLoopA56) into CassetteActor

!insert (movieLoopM46, actorLoopA50) into CassetteActor
!insert (movieLoopM46, actorLoopA57) into CassetteActor
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 110 | 0.00% |
| Multiplicities Errors | 0 | 38 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 7 | 7 | 100.00% |
| Types (out of valid Titles) | 0 | 0 | 0.00% |
| Genres (out of valid Titles) | 0 | 0 | 0.00% |
| Actors (out of valid Titles) | 0 | 0 | 0.00% |
| Release year > Rental year (out of valid Titles) | 0 | 0 | 0.00% |

| Failed Titles | 
|---| 
```
สายลับเงียบ
```
```
Короткий Смех
```
```
Two Lines\nOne Tape
```
```
Heimsendir
```
```
Noche de Vidrio
```
```
   The Punctuation Trial: (A) [B] {C} — D!   
```
```
The Very, Very, Very Long Screening Title Used Only to Stress Old Inventory Printers and Receipts
```

## Category invalid
```
!new Client('clientRioC40')
!clientRioC40.clientId := 901
!clientRioC40.isSuspended := false

!new Client('clientRioC41')
!clientRioC41.clientId := 902
!clientRioC41.isSuspended := false

!new Client('clientRioC42')
!clientRioC42.clientId := 1203
!clientRioC42.isSuspended := false

!new Rental('rentalRioR40')
!rentalRioR40.date := Date('2026-02-08')

!new Rental('rentalRioR41')
!rentalRioR41.date := Date('2026-02-09')

!new Movie('movieRioM40')
!movieRioM40.title := 'Barrio Getaway'
!movieRioM40.availableCopies := 3
!movieRioM40.genre := #Action

!new Movie('movieRioM41')
!movieRioM41.title := 'Tango for Two'
!movieRioM41.availableCopies := 1
!movieRioM41.genre := #Comedy

!new Series('seriesRioS40')
!seriesRioS40.title := 'Harbor Signals'
!seriesRioS40.availableCopies := 2
!seriesRioS40.episode := 4

!new Series('seriesRioS41')
!seriesRioS41.title := 'Midnight Repairs'
!seriesRioS41.availableCopies := 0
!seriesRioS41.episode := 2

!new Actor('actorRioA40')
!actorRioA40.name := 'Valentina Rossi'

!new Actor('actorRioA41')
!actorRioA41.name := 'Diego Fernández'

!new Actor('actorRioA42')
!actorRioA42.name := 'Lucía Pereira'

!new Actor('actorRioA43')
!actorRioA43.name := 'Kenji Nakamura'

!insert (clientRioC40, rentalRioR40) into ClientRental
!insert (clientRioC41, rentalRioR40) into ClientRental
!insert (clientRioC42, rentalRioR41) into ClientRental

!insert (rentalRioR40, movieRioM40) into RentalCassette
!insert (rentalRioR40, seriesRioS40) into RentalCassette

!insert (rentalRioR41, movieRioM41) into RentalCassette
!insert (rentalRioR41, seriesRioS41) into RentalCassette
!insert (rentalRioR41, movieRioM40) into RentalCassette

!insert (movieRioM40, actorRioA40) into CassetteActor
!insert (movieRioM40, actorRioA41) into CassetteActor

!insert (movieRioM41, actorRioA42) into CassetteActor

!insert (seriesRioS40, actorRioA41) into CassetteActor
!insert (seriesRioS40, actorRioA43) into CassetteActor

!insert (seriesRioS41, actorRioA40) into CassetteActor
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 14 | 7.14% |
| Invariants Errors (Not included on General) | 0 | 3 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `ClientRental':
  Object `rentalRioR40' of class `Rental' is connected to 2 objects of class `Client'
  at association end `assigned' but the multiplicity is specified as `1'.
```

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 4 | 4 | 100.00% |
| Types (out of valid Titles) | 0 | 0 | 0.00% |
| Genres (out of valid Titles) | 0 | 0 | 0.00% |
| Actors (out of valid Titles) | 0 | 0 | 0.00% |
| Release year > Rental year (out of valid Titles) | 0 | 0 | 0.00% |

| Failed Titles | 
|---| 
```
Midnight Repairs
```
```
Harbor Signals
```
```
Barrio Getaway
```
```
Tango for Two
```

## Generation 5 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 414 | 0.00% |
| Multiplicities Errors | 0 | 123 | 0.00% |
| Invariants Errors | 0 | 12 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 14 | 7.14% |
| Invariants Errors (Not included on General) | 0 | 3 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `ClientRental':
  Object `rentalRioR40' of class `Rental' is connected to 2 objects of class `Client'
  at association end `assigned' but the multiplicity is specified as `1'.
```

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 30 | 30 | 100.00% |
| Types (out of valid Titles) | 0 | 0 | 0.00% |
| Genres (out of valid Titles) | 0 | 0 | 0.00% |
| Actors (out of valid Titles) | 0 | 0 | 0.00% |
| Release year > Rental year (out of valid Titles) | 0 | 0 | 0.00% |

| Failed Titles | 
|---| 
```
Orbital Classroom
```
```
Orbital Classroom
```
```
Orbital Classroom
```
```
Sauna Sitcom
```
```
Steppe Chase
```
```
Whānau Warriors
```
```
Ngā Wāhanga Tuatahi
```
```
Bangkok Banana Split
```
```
Koru Coast Pursuit
```
```
Carnaval Confidential
```
```
Aurora Freight Run
```
```
Red Dunes Extraction
```
```
Tuk Tuk Tales — Season 2
```
```
Tuk Tuk Tales — Season 2
```
```
Tuk Tuk Tales — Season 2
```
```
Atlas Station — Season 1
```
```
Atlas Station — Season 1
```
```
Atlas Station — Season 1
```
```
Atlas Station — Season 1
```
```
สายลับเงียบ
```
```
Короткий Смех
```
```
Two Lines\nOne Tape
```
```
Heimsendir
```
```
Noche de Vidrio
```
```
   The Punctuation Trial: (A) [B] {C} — D!   
```
```
The Very, Very, Very Long Screening Title Used Only to Stress Old Inventory Printers and Receipts
```
```
Midnight Repairs
```
```
Harbor Signals
```
```
Barrio Getaway
```
```
Tango for Two
```

# Generation 6
## Category baseline
```
!new Client('clientBaseD50')
!clientBaseD50.clientId := 501
!clientBaseD50.isSuspended := false

!new Client('clientBaseD51')
!clientBaseD51.clientId := 112
!clientBaseD51.isSuspended := false

!new Client('clientBaseD52')
!clientBaseD52.clientId := 77
!clientBaseD52.isSuspended := true

!new Client('clientBaseD53')
!clientBaseD53.clientId := 908
!clientBaseD53.isSuspended := false

!new Client('clientBaseD54')
!clientBaseD54.clientId := 33
!clientBaseD54.isSuspended := false

!new Rental('rentalBaseD50')
!rentalBaseD50.date := Date('2022-10-05')

!new Rental('rentalBaseD51')
!rentalBaseD51.date := Date('2022-10-19')

!new Rental('rentalBaseD52')
!rentalBaseD52.date := Date('2022-11-02')

!new Rental('rentalBaseD53')
!rentalBaseD53.date := Date('2022-12-28')

!new Rental('rentalBaseD54')
!rentalBaseD54.date := Date('2023-01-03')

!new Movie('movieBaseD50')
!movieBaseD50.title := 'Monsoon Break-In'
!movieBaseD50.availableCopies := 0
!movieBaseD50.genre := #Action

!new Movie('movieBaseD51')
!movieBaseD51.title := 'Cousins at the Market'
!movieBaseD51.availableCopies := 8
!movieBaseD51.genre := #Comedy

!new Movie('movieBaseD52')
!movieBaseD52.title := 'Andes Afternoon'
!movieBaseD52.availableCopies := 3
!movieBaseD52.genre := #Comedy

!new Series('seriesBaseD50')
!seriesBaseD50.title := 'Night Bus Chronicles'
!seriesBaseD50.availableCopies := 1
!seriesBaseD50.episode := 4

!new Series('seriesBaseD51')
!seriesBaseD51.title := 'Night Bus Chronicles'
!seriesBaseD51.availableCopies := 1
!seriesBaseD51.episode := 5

!new Series('seriesBaseD52')
!seriesBaseD52.title := 'Kitchen Alibis'
!seriesBaseD52.availableCopies := 2
!seriesBaseD52.episode := 16

!new Series('seriesBaseD53')
!seriesBaseD53.title := 'Kitchen Alibis'
!seriesBaseD53.availableCopies := 2
!seriesBaseD53.episode := 17

!new Actor('actorBaseD50')
!actorBaseD50.name := 'Siti Nur Aisyah'

!new Actor('actorBaseD51')
!actorBaseD51.name := 'Óscar Muñoz'

!new Actor('actorBaseD52')
!actorBaseD52.name := 'Kofi Mensah'

!new Actor('actorBaseD53')
!actorBaseD53.name := 'Inês Carvalho'

!new Actor('actorBaseD54')
!actorBaseD54.name := 'Yara Haddad'

!new Actor('actorBaseD55')
!actorBaseD55.name := 'Nikolai Varga'

!new Actor('actorBaseD56')
!actorBaseD56.name := 'Mai Phương'

!new Actor('actorBaseD57')
!actorBaseD57.name := 'Jacob Levi'

!new Actor('actorBaseD58')
!actorBaseD58.name := 'Tala Rami'

!new Actor('actorBaseD59')
!actorBaseD59.name := 'Sergio Bianchi'

!insert (clientBaseD50, rentalBaseD50) into ClientRental
!insert (clientBaseD50, rentalBaseD51) into ClientRental
!insert (clientBaseD52, rentalBaseD52) into ClientRental
!insert (clientBaseD53, rentalBaseD53) into ClientRental
!insert (clientBaseD53, rentalBaseD54) into ClientRental

!insert (rentalBaseD50, movieBaseD50) into RentalCassette
!insert (rentalBaseD50, seriesBaseD50) into RentalCassette

!insert (rentalBaseD51, seriesBaseD51) into RentalCassette

!insert (rentalBaseD52, movieBaseD50) into RentalCassette
!insert (rentalBaseD52, movieBaseD51) into RentalCassette
!insert (rentalBaseD52, seriesBaseD52) into RentalCassette

!insert (rentalBaseD53, seriesBaseD50) into RentalCassette
!insert (rentalBaseD53, seriesBaseD52) into RentalCassette
!insert (rentalBaseD53, seriesBaseD53) into RentalCassette
!insert (rentalBaseD53, movieBaseD51) into RentalCassette

!insert (rentalBaseD54, movieBaseD50) into RentalCassette

!insert (movieBaseD50, actorBaseD50) into CassetteActor
!insert (movieBaseD50, actorBaseD51) into CassetteActor
!insert (movieBaseD50, actorBaseD52) into CassetteActor

!insert (movieBaseD51, actorBaseD53) into CassetteActor

!insert (movieBaseD52, actorBaseD54) into CassetteActor
!insert (movieBaseD52, actorBaseD55) into CassetteActor

!insert (seriesBaseD50, actorBaseD51) into CassetteActor
!insert (seriesBaseD50, actorBaseD56) into CassetteActor

!insert (seriesBaseD51, actorBaseD57) into CassetteActor

!insert (seriesBaseD52, actorBaseD52) into CassetteActor
!insert (seriesBaseD52, actorBaseD53) into CassetteActor
!insert (seriesBaseD52, actorBaseD56) into CassetteActor

!insert (seriesBaseD53, actorBaseD58) into CassetteActor
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 102 | 0.00% |
| Multiplicities Errors | 0 | 29 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 7 | 7 | 100.00% |
| Types (out of valid Titles) | 0 | 0 | 0.00% |
| Genres (out of valid Titles) | 0 | 0 | 0.00% |
| Actors (out of valid Titles) | 0 | 0 | 0.00% |
| Release year > Rental year (out of valid Titles) | 0 | 0 | 0.00% |

| Failed Titles | 
|---| 
```
Night Bus Chronicles
```
```
Monsoon Break-In
```
```
Cousins at the Market
```
```
Night Bus Chronicles
```
```
Kitchen Alibis
```
```
Kitchen Alibis
```
```
Andes Afternoon
```

## Category boundary
```
!new Client('clientMany0C50')
!clientMany0C50.clientId := 8
!clientMany0C50.isSuspended := false

!new Client('clientMany0C51')
!clientMany0C51.clientId := 9
!clientMany0C51.isSuspended := true

!new Client('clientMany0C52')
!clientMany0C52.clientId := 10
!clientMany0C52.isSuspended := false

!new Client('clientMany0C53')
!clientMany0C53.clientId := 11
!clientMany0C53.isSuspended := false

!new Rental('rentalMany0R50')
!rentalMany0R50.date := Date('1999-12-31')

!new Movie('movieMany0M50')
!movieMany0M50.title := 'Jua Kali Chase'
!movieMany0M50.availableCopies := 0
!movieMany0M50.genre := #Action

!new Movie('movieMany0M51')
!movieMany0M51.title := '웃음의 법칙'
!movieMany0M51.availableCopies := 0
!movieMany0M51.genre := #Comedy

!new Movie('movieMany0M52')
!movieMany0M52.title := 'Río de Sombras'
!movieMany0M52.availableCopies := 0
!movieMany0M52.genre := #Action

!new Movie('movieMany0M53')
!movieMany0M53.title := 'Dhaka Punchlines'
!movieMany0M53.availableCopies := 0
!movieMany0M53.genre := #Comedy

!new Movie('movieMany0M54')
!movieMany0M54.title := 'Baltic Breakout'
!movieMany0M54.availableCopies := 0
!movieMany0M54.genre := #Action

!new Actor('actorMany0A50')
!actorMany0A50.name := 'Asha Mwangi'

!new Actor('actorMany0A51')
!actorMany0A51.name := 'Park Ji-hoon'

!new Actor('actorMany0A52')
!actorMany0A52.name := 'Sofía Núñez'

!new Actor('actorMany0A53')
!actorMany0A53.name := 'Rahim Uddin'

!new Actor('actorMany0A54')
!actorMany0A54.name := 'Katrīna Ozola'

!new Actor('actorMany0A55')
!actorMany0A55.name := 'Eleni Papadaki'

!new Actor('actorMany0A56')
!actorMany0A56.name := 'Tomás O\'Rourke'

!insert (clientMany0C53, rentalMany0R50) into ClientRental

!insert (rentalMany0R50, movieMany0M50) into RentalCassette
!insert (rentalMany0R50, movieMany0M51) into RentalCassette
!insert (rentalMany0R50, movieMany0M52) into RentalCassette
!insert (rentalMany0R50, movieMany0M53) into RentalCassette
!insert (rentalMany0R50, movieMany0M54) into RentalCassette

!insert (movieMany0M50, actorMany0A50) into CassetteActor
!insert (movieMany0M51, actorMany0A51) into CassetteActor
!insert (movieMany0M52, actorMany0A52) into CassetteActor
!insert (movieMany0M53, actorMany0A53) into CassetteActor
!insert (movieMany0M54, actorMany0A54) into CassetteActor
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 59 | 0.00% |
| Multiplicities Errors | 0 | 11 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 5 | 5 | 100.00% |
| Types (out of valid Titles) | 0 | 0 | 0.00% |
| Genres (out of valid Titles) | 0 | 0 | 0.00% |
| Actors (out of valid Titles) | 0 | 0 | 0.00% |
| Release year > Rental year (out of valid Titles) | 0 | 0 | 0.00% |

| Failed Titles | 
|---| 
```
Jua Kali Chase
```
```
Dhaka Punchlines
```
```
Baltic Breakout
```
```
웃음의 법칙
```
```
Río de Sombras
```

## Category complex
```
!new Client('clientComplex6C60')
!clientComplex6C60.clientId := 1001
!clientComplex6C60.isSuspended := false

!new Client('clientComplex6C61')
!clientComplex6C61.clientId := 1002
!clientComplex6C61.isSuspended := true

!new Client('clientComplex6C62')
!clientComplex6C62.clientId := 1003
!clientComplex6C62.isSuspended := false

!new Client('clientComplex6C63')
!clientComplex6C63.clientId := 1004
!clientComplex6C63.isSuspended := false

!new Movie('movieComplex6M60')
!movieComplex6M60.title := 'The Galway Mix‑Up'
!movieComplex6M60.availableCopies := 2
!movieComplex6M60.genre := #Comedy

!new Movie('movieComplex6M61')
!movieComplex6M61.title := 'Firewall on the Steppe'
!movieComplex6M61.availableCopies := 0
!movieComplex6M61.genre := #Action

!new Movie('movieComplex6M62')
!movieComplex6M62.title := 'Secondhand Suitcases'
!movieComplex6M62.availableCopies := 6
!movieComplex6M62.genre := #Comedy

!new Series('seriesComplex6S60')
!seriesComplex6S60.title := 'Orbital Kitchen — Season 1'
!seriesComplex6S60.availableCopies := 1
!seriesComplex6S60.episode := 1

!new Series('seriesComplex6S61')
!seriesComplex6S61.title := 'Orbital Kitchen — Season 1'
!seriesComplex6S61.availableCopies := 1
!seriesComplex6S61.episode := 2

!new Series('seriesComplex6S62')
!seriesComplex6S62.title := 'Prairie Radio Drama — Season 3'
!seriesComplex6S62.availableCopies := 3
!seriesComplex6S62.episode := 10

!new Series('seriesComplex6S63')
!seriesComplex6S63.title := 'حكايات المدينة — الموسم 1'
!seriesComplex6S63.availableCopies := 0
!seriesComplex6S63.episode := 4

!new Series('seriesComplex6S64')
!seriesComplex6S64.title := '茶馆风云 — 第一季'
!seriesComplex6S64.availableCopies := 2
!seriesComplex6S64.episode := 6

!new Actor('actorComplex6A60')
!actorComplex6A60.name := 'Niamh O’Connor'

!new Actor('actorComplex6A61')
!actorComplex6A61.name := 'Bat-Erdene Ganbold'

!new Actor('actorComplex6A62')
!actorComplex6A62.name := 'Rania Al-Sayed'

!new Actor('actorComplex6A63')
!actorComplex6A63.name := 'Wei Lín'

!new Actor('actorComplex6A64')
!actorComplex6A64.name := 'Mateusz Zieliński'

!new Actor('actorComplex6A65')
!actorComplex6A65.name := 'Clara Nyström'

!new Actor('actorComplex6A66')
!actorComplex6A66.name := 'Jorge Almeida'

!new Actor('actorComplex6A67')
!actorComplex6A67.name := 'Hyeon-woo Kim'

!new Actor('actorComplex6A68')
!actorComplex6A68.name := 'Asha Patel'

!new Actor('actorComplex6A69')
!actorComplex6A69.name := 'Ethan Brooks'

!new Rental('rentalComplex6R60')
!rentalComplex6R60.date := Date('2024-12-28')

!new Rental('rentalComplex6R61')
!rentalComplex6R61.date := Date('2025-01-03')

!new Rental('rentalComplex6R62')
!rentalComplex6R62.date := Date('2025-01-07')

!new Rental('rentalComplex6R63')
!rentalComplex6R63.date := Date('2025-01-09')

!new Rental('rentalComplex6R64')
!rentalComplex6R64.date := Date('2025-01-12')

!new Rental('rentalComplex6R65')
!rentalComplex6R65.date := Date('2025-01-13')

!new Rental('rentalComplex6R66')
!rentalComplex6R66.date := Date('2025-01-20')

!new Rental('rentalComplex6R67')
!rentalComplex6R67.date := Date('2025-02-01')

!new Rental('rentalComplex6R68')
!rentalComplex6R68.date := Date('2025-02-14')

!insert (clientComplex6C60, rentalComplex6R60) into ClientRental
!insert (clientComplex6C60, rentalComplex6R61) into ClientRental
!insert (clientComplex6C61, rentalComplex6R62) into ClientRental
!insert (clientComplex6C62, rentalComplex6R63) into ClientRental
!insert (clientComplex6C60, rentalComplex6R64) into ClientRental
!insert (clientComplex6C63, rentalComplex6R65) into ClientRental
!insert (clientComplex6C61, rentalComplex6R66) into ClientRental
!insert (clientComplex6C62, rentalComplex6R67) into ClientRental
!insert (clientComplex6C60, rentalComplex6R68) into ClientRental

!insert (rentalComplex6R60, seriesComplex6S60) into RentalCassette
!insert (rentalComplex6R60, seriesComplex6S61) into RentalCassette

!insert (rentalComplex6R61, movieComplex6M60) into RentalCassette

!insert (rentalComplex6R62, movieComplex6M61) into RentalCassette
!insert (rentalComplex6R62, seriesComplex6S63) into RentalCassette

!insert (rentalComplex6R63, seriesComplex6S64) into RentalCassette

!insert (rentalComplex6R64, movieComplex6M61) into RentalCassette
!insert (rentalComplex6R64, movieComplex6M62) into RentalCassette
!insert (rentalComplex6R64, seriesComplex6S62) into RentalCassette

!insert (rentalComplex6R65, movieComplex6M62) into RentalCassette
!insert (rentalComplex6R65, seriesComplex6S60) into RentalCassette

!insert (rentalComplex6R66, movieComplex6M60) into RentalCassette
!insert (rentalComplex6R66, seriesComplex6S62) into RentalCassette
!insert (rentalComplex6R66, seriesComplex6S63) into RentalCassette

!insert (rentalComplex6R67, movieComplex6M61) into RentalCassette
!insert (rentalComplex6R67, seriesComplex6S61) into RentalCassette
!insert (rentalComplex6R67, seriesComplex6S64) into RentalCassette

!insert (rentalComplex6R68, movieComplex6M60) into RentalCassette
!insert (rentalComplex6R68, movieComplex6M61) into RentalCassette
!insert (rentalComplex6R68, movieComplex6M62) into RentalCassette
!insert (rentalComplex6R68, seriesComplex6S62) into RentalCassette
!insert (rentalComplex6R68, seriesComplex6S64) into RentalCassette

!insert (movieComplex6M60, actorComplex6A60) into CassetteActor
!insert (movieComplex6M60, actorComplex6A66) into CassetteActor
!insert (movieComplex6M60, actorComplex6A65) into CassetteActor

!insert (movieComplex6M61, actorComplex6A61) into CassetteActor
!insert (movieComplex6M61, actorComplex6A64) into CassetteActor
!insert (movieComplex6M61, actorComplex6A67) into CassetteActor
!insert (movieComplex6M61, actorComplex6A68) into CassetteActor
!insert (movieComplex6M61, actorComplex6A65) into CassetteActor

!insert (movieComplex6M62, actorComplex6A66) into CassetteActor
!insert (movieComplex6M62, actorComplex6A60) into CassetteActor

!insert (seriesComplex6S60, actorComplex6A67) into CassetteActor
!insert (seriesComplex6S60, actorComplex6A68) into CassetteActor
!insert (seriesComplex6S60, actorComplex6A65) into CassetteActor

!insert (seriesComplex6S61, actorComplex6A67) into CassetteActor
!insert (seriesComplex6S61, actorComplex6A63) into CassetteActor

!insert (seriesComplex6S62, actorComplex6A64) into CassetteActor
!insert (seriesComplex6S62, actorComplex6A66) into CassetteActor

!insert (seriesComplex6S63, actorComplex6A62) into CassetteActor
!insert (seriesComplex6S63, actorComplex6A68) into CassetteActor

!insert (seriesComplex6S64, actorComplex6A63) into CassetteActor
!insert (seriesComplex6S64, actorComplex6A65) into CassetteActor
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 134 | 0.00% |
| Multiplicities Errors | 0 | 52 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 7 | 8 | 87.50% |
| Types (out of valid Titles) | 1 | 1 | 100.00% |
| Genres (out of valid Titles) | 0 | 0 | 0.00% |
| Actors (out of valid Titles) | 2 | 2 | 100.00% |
| Release year > Rental year (out of valid Titles) | 0 | 1 | 0.00% |

| Failed Titles | 
|---| 
```
Orbital Kitchen — Season 1
```
```
Orbital Kitchen — Season 1
```
```
Prairie Radio Drama — Season 3
```
```
茶馆风云 — 第一季
```
```
Firewall on the Steppe
```
```
Secondhand Suitcases
```
```
The Galway Mix‑Up
```

| Failed Types | 
|---| 
```
Parsed type: series != API type: movie
```

| Failed Actors | 
|---| 
```
Rania Al-Sayed for movie: حكايات المدينة — الموسم 1
```
```
Asha Patel for movie: حكايات المدينة — الموسم 1
```

## Category edge
```
!new Client('clientSeriesOnly2C50')
!clientSeriesOnly2C50.clientId := 13
!clientSeriesOnly2C50.isSuspended := true

!new Client('clientSeriesOnly2C51')
!clientSeriesOnly2C51.clientId := 14
!clientSeriesOnly2C51.isSuspended := true

!new Client('clientSeriesOnly2C52')
!clientSeriesOnly2C52.clientId := 15
!clientSeriesOnly2C52.isSuspended := false

!new Client('clientSeriesOnly2C53')
!clientSeriesOnly2C53.clientId := 16
!clientSeriesOnly2C53.isSuspended := false

!new Rental('rentalSeriesOnly2R50')
!rentalSeriesOnly2R50.date := Date('0000-00-00')

!new Rental('rentalSeriesOnly2R51')
!rentalSeriesOnly2R51.date := Date('13/13/2013')

!new Rental('rentalSeriesOnly2R52')
!rentalSeriesOnly2R52.date := Date('2001-09-09T09:09:09Z')

!new Rental('rentalSeriesOnly2R53')
!rentalSeriesOnly2R53.date := Date('   ')

!new Series('seriesSeriesOnly2S40')
!seriesSeriesOnly2S40.title := 'La Serie Sin Nombre'
!seriesSeriesOnly2S40.availableCopies := 0
!seriesSeriesOnly2S40.episode := 1

!new Series('seriesSeriesOnly2S41')
!seriesSeriesOnly2S41.title := 'ドラマ『空の階段』'
!seriesSeriesOnly2S41.availableCopies := 1
!seriesSeriesOnly2S41.episode := 2

!new Series('seriesSeriesOnly2S42')
!seriesSeriesOnly2S42.title := 'Северный архив'
!seriesSeriesOnly2S42.availableCopies := 0
!seriesSeriesOnly2S42.episode := 999999999

!new Series('seriesSeriesOnly2S43')
!seriesSeriesOnly2S43.title := 'قصص الميناء'
!seriesSeriesOnly2S43.availableCopies := 2
!seriesSeriesOnly2S43.episode := 3

!new Series('seriesSeriesOnly2S44')
!seriesSeriesOnly2S44.title := 'Επεισόδιο'
!seriesSeriesOnly2S44.availableCopies := 0
!seriesSeriesOnly2S44.episode := 4

!new Series('seriesSeriesOnly2S45')
!seriesSeriesOnly2S45.title := 'The Lost Pilot'
!seriesSeriesOnly2S45.availableCopies := 0
!seriesSeriesOnly2S45.episode := 5

!new Actor('actorSeriesOnly2A60')
!actorSeriesOnly2A60.name := 'Linh Trần'

!new Actor('actorSeriesOnly2A61')
!actorSeriesOnly2A61.name := 'Ömer Yılmaz'

!new Actor('actorSeriesOnly2A62')
!actorSeriesOnly2A62.name := 'Chinwe Okafor'

!new Actor('actorSeriesOnly2A63')
!actorSeriesOnly2A63.name := 'Ilya Kuznetsov'

!new Actor('actorSeriesOnly2A64')
!actorSeriesOnly2A64.name := 'Sofía García Márquez'

!new Actor('actorSeriesOnly2A65')
!actorSeriesOnly2A65.name := 'Aroha Te Kāhu'

!new Actor('actorSeriesOnly2A66')
!actorSeriesOnly2A66.name := 'Niamh O\'Rourke'

!new Actor('actorSeriesOnly2A67')
!actorSeriesOnly2A67.name := 'Ravi Singh'

!new Actor('actorSeriesOnly2A68')
!actorSeriesOnly2A68.name := 'Helena Papadopoulos'

!new Actor('actorSeriesOnly2A69')
!actorSeriesOnly2A69.name := 'Samira Haddou'

!new Actor('actorSeriesOnly2A70')
!actorSeriesOnly2A70.name := 'Stage Name: NULL'

!insert (clientSeriesOnly2C50, rentalSeriesOnly2R50) into ClientRental
!insert (clientSeriesOnly2C50, rentalSeriesOnly2R52) into ClientRental
!insert (clientSeriesOnly2C51, rentalSeriesOnly2R51) into ClientRental
!insert (clientSeriesOnly2C52, rentalSeriesOnly2R53) into ClientRental

!insert (rentalSeriesOnly2R50, seriesSeriesOnly2S40) into RentalCassette
!insert (rentalSeriesOnly2R50, seriesSeriesOnly2S41) into RentalCassette
!insert (rentalSeriesOnly2R50, seriesSeriesOnly2S42) into RentalCassette
!insert (rentalSeriesOnly2R50, seriesSeriesOnly2S43) into RentalCassette
!insert (rentalSeriesOnly2R50, seriesSeriesOnly2S44) into RentalCassette

!insert (rentalSeriesOnly2R51, seriesSeriesOnly2S42) into RentalCassette

!insert (rentalSeriesOnly2R52, seriesSeriesOnly2S40) into RentalCassette
!insert (rentalSeriesOnly2R52, seriesSeriesOnly2S43) into RentalCassette

!insert (rentalSeriesOnly2R53, seriesSeriesOnly2S44) into RentalCassette

!insert (seriesSeriesOnly2S40, actorSeriesOnly2A60) into CassetteActor

!insert (seriesSeriesOnly2S41, actorSeriesOnly2A61) into CassetteActor
!insert (seriesSeriesOnly2S41, actorSeriesOnly2A65) into CassetteActor

!insert (seriesSeriesOnly2S42, actorSeriesOnly2A63) into CassetteActor
!insert (seriesSeriesOnly2S42, actorSeriesOnly2A62) into CassetteActor
!insert (seriesSeriesOnly2S42, actorSeriesOnly2A64) into CassetteActor
!insert (seriesSeriesOnly2S42, actorSeriesOnly2A67) into CassetteActor
!insert (seriesSeriesOnly2S42, actorSeriesOnly2A69) into CassetteActor

!insert (seriesSeriesOnly2S43, actorSeriesOnly2A62) into CassetteActor
!insert (seriesSeriesOnly2S43, actorSeriesOnly2A66) into CassetteActor

!insert (seriesSeriesOnly2S44, actorSeriesOnly2A68) into CassetteActor

!insert (seriesSeriesOnly2S45, actorSeriesOnly2A64) into CassetteActor
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 91 | 0.00% |
| Multiplicities Errors | 0 | 25 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 5 | 6 | 83.33% |
| Types (out of valid Titles) | 1 | 1 | 100.00% |
| Genres (out of valid Titles) | 0 | 0 | 0.00% |
| Actors (out of valid Titles) | 1 | 1 | 100.00% |
| Release year > Rental year (out of valid Titles) | 0 | 0 | 0.00% |

| Failed Titles | 
|---| 
```
Северный архив
```
```
ドラマ『空の階段』
```
```
Επεισόδιο
```
```
قصص الميناء
```
```
La Serie Sin Nombre
```

| Failed Types | 
|---| 
```
Parsed type: series != API type: movie
```

| Failed Actors | 
|---| 
```
Sofía García Márquez for movie: The Lost Pilot
```

## Category invalid
```
!new Client('clientMont2C50')
!clientMont2C50.clientId := 650
!clientMont2C50.isSuspended := false

!new Client('clientMont2C51')
!clientMont2C51.clientId := 651
!clientMont2C51.isSuspended := false

!new Rental('rentalMont2R50')
!rentalMont2R50.date := Date('2026-02-16')

!new Rental('rentalMont2R51')
!rentalMont2R51.date := Date('2026-02-17')

!new Movie('movieMont2M50')
!movieMont2M50.title := 'Kung-Fu Quiproquo'
!movieMont2M50.availableCopies := 2
!movieMont2M50.genre := #Action

!new Movie('movieMont2M51')
!movieMont2M51.title := 'Polar Heist'
!movieMont2M51.availableCopies := 1
!movieMont2M51.genre := #Action

!new Series('seriesMont2S50')
!seriesMont2S50.title := 'Les Contes du Métro'
!seriesMont2S50.availableCopies := 3
!seriesMont2S50.episode := 7

!new Actor('actorMont2A50')
!actorMont2A50.name := 'Nadia Benomar'

!new Actor('actorMont2A51')
!actorMont2A51.name := 'Étienne Gagnon'

!new Actor('actorMont2A52')
!actorMont2A52.name := 'Wei Chen'

!new Actor('actorMont2A53')
!actorMont2A53.name := 'Samira El-Khoury'

!insert (clientMont2C50, rentalMont2R50) into ClientRental
!insert (clientMont2C51, rentalMont2R51) into ClientRental

!insert (rentalMont2R50, movieMont2M50) into RentalCassette
!insert (rentalMont2R50, seriesMont2S50) into RentalCassette
!insert (rentalMont2R51, movieMont2M50) into RentalCassette
!insert (rentalMont2R51, movieMont2M51) into RentalCassette

!insert (movieMont2M50, actorMont2A51) into CassetteActor
!insert (movieMont2M50, actorMont2A52) into CassetteActor
!insert (movieMont2M51, actorMont2A50) into CassetteActor
!insert (seriesMont2S50, actorMont2A51) into CassetteActor
!insert (seriesMont2S50, actorMont2A53) into CassetteActor
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 11 | 0.00% |
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
Polar Heist
```
```
Kung-Fu Quiproquo
```
```
Les Contes du Métro
```

## Generation 6 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 427 | 0.00% |
| Multiplicities Errors | 0 | 117 | 0.00% |
| Invariants Errors | 0 | 12 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 11 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 27 | 29 | 93.10% |
| Types (out of valid Titles) | 2 | 2 | 100.00% |
| Genres (out of valid Titles) | 0 | 0 | 0.00% |
| Actors (out of valid Titles) | 3 | 3 | 100.00% |
| Release year > Rental year (out of valid Titles) | 0 | 1 | 0.00% |

| Failed Titles | 
|---| 
```
Night Bus Chronicles
```
```
Monsoon Break-In
```
```
Cousins at the Market
```
```
Night Bus Chronicles
```
```
Kitchen Alibis
```
```
Kitchen Alibis
```
```
Andes Afternoon
```
```
Jua Kali Chase
```
```
Dhaka Punchlines
```
```
Baltic Breakout
```
```
웃음의 법칙
```
```
Río de Sombras
```
```
Orbital Kitchen — Season 1
```
```
Orbital Kitchen — Season 1
```
```
Prairie Radio Drama — Season 3
```
```
茶馆风云 — 第一季
```
```
Firewall on the Steppe
```
```
Secondhand Suitcases
```
```
The Galway Mix‑Up
```
```
Северный архив
```
```
ドラマ『空の階段』
```
```
Επεισόδιο
```
```
قصص الميناء
```
```
La Serie Sin Nombre
```
```
Polar Heist
```
```
Kung-Fu Quiproquo
```
```
Les Contes du Métro
```

| Failed Types | 
|---| 
```
Parsed type: series != API type: movie
```
```
Parsed type: series != API type: movie
```

| Failed Actors | 
|---| 
```
Rania Al-Sayed for movie: حكايات المدينة — الموسم 1
```
```
Asha Patel for movie: حكايات المدينة — الموسم 1
```
```
Sofía García Márquez for movie: The Lost Pilot
```

# Summary for all generations
| Summary | Value | 
|---|---| 
| Model | GPT_5_2 | 
| Type | CoT | 
| System | videoclub | 
| Number of generations | 6 | 

| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 2295 | 0.00% |
| Multiplicities Errors | 0 | 653 | 0.00% |
| Invariants Errors | 0 | 72 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 6 | 70 | 8.57% |
| Invariants Errors (Not included on General) | 3 | 18 | 16.67% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `RentalCassette':
  Object `rentalD2' of class `Rental' is connected to 0 objects of class `Cassette'
  at association end `borrows' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `CassetteActor':
  Object `cassetteD1' of class `Cassette' is connected to 0 objects of class `Actor'
  at association end `has' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `ClientRental':
  Object `rentalCoopR10' of class `Rental' is connected to 2 objects of class `Client'
  at association end `assigned' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `CassetteActor':
  Object `movieCoopM10' of class `Movie' is connected to 0 objects of class `Actor'
  at association end `has' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `ClientRental':
  Object `rentalFestR30' of class `Rental' is connected to 0 objects of class `Client'
  at association end `assigned' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `ClientRental':
  Object `rentalRioR40' of class `Rental' is connected to 2 objects of class `Client'
  at association end `assigned' but the multiplicity is specified as `1'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (3) `Series::positiveEpisode': FAILED.
```
```
checking invariant (1) `Cassette::postiveAvailableCopies': FAILED.
```
```
checking invariant (2) `Client::positiveClientId': FAILED.
```

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 162 | 168 | 96.43% |
| Types (out of valid Titles) | 2 | 6 | 33.33% |
| Genres (out of valid Titles) | 3 | 3 | 100.00% |
| Actors (out of valid Titles) | 10 | 10 | 100.00% |
| Release year > Rental year (out of valid Titles) | 0 | 4 | 0.00% |

| Failed Titles | 
|---| 
```
Metro Pursuit
```
```
Café Detectives
```
```
北風の町
```
```
El Último Chiste
```
```
Samurai Weekend
```
```
Laughing in Lagos
```
```
Nordic Noir — Season 1
```
```
Hearts of Seoul — Season 2
```
```
Río de Pasiones — Temporada 1
```
```
Arctic Signal — Special Transmission
```
```
Käsekuchen Chaos
```
```
El Último Tren (Director’s Cut)
```
```
Nairobi Nights — Episode File
```
```
Sakura Galaxy
```
```
Nordic Noir: Season 1
```
```
Mumbai Midnight Chase
```
```
La Comedia del Barrio
```
```
Northern Lights: The Series
```
```
Northern Lights: The Series
```
```
Lisbon Laugh Track
```
```
Desert Run
```
```
Mumbai Mix-Up
```
```
Sakura Protocol
```
```
مسلسلات الغد
```
```
Nordlys Arkiv
```
```
Nairobi Nights
```
```
Код Буря
```
```
La Risa Infinita
```
```
Paris Pranks
```
```
Mumbai Mayhem
```
```
Desert Drift
```
```
Kyoto Kicks
```
```
The Quiet Glacier
```
```
Café Carousel
```
```
Cape Town Beat — Season 1
```
```
Tales of the Silk Road — Season 3
```
```
Galactic Archivists — Volume 1
```
```
हँसी का तूफ़ान
```
```

```
```
المدينة بعد منتصف الليل
```
```
The Silent Steppe (Тихая степь)
```
```
Islands of Smoke
```
```
Café Laugh Riot
```
```
Coastline Dispatch
```
```
Coastline Dispatch
```
```
Baltic Strike
```
```
Midnight Tuk-Tuk
```
```
Les Chroniques du Métro
```
```
Oceans at Dawn
```
```
Streets of Saint Petersburg
```
```
Bossa Nova Mishaps
```
```
Sahara Protocol
```
```
Midnight Matatu — Season 1
```
```
Amazonas Investigates — Season 2
```
```
Casbah Chronicles — Season 4
```
```
Harbor Signals — Season 1
```
```
Dhaba Days
```
```
Nairobi Night Run
```
```
The Reykjavík Riddle
```
```
   
```
```
O Amor & o Caos
```
```
The 400-Character Title Experiment: Part I — A Very Long Name Intended To Stress Display Fields In Older Point‑Of‑Sale Systems
```
```
Nordlys Journal
```
```
Desert Frequency
```
```
都市の影 (City Shadows)
```
```
Kintsugi Heist
```
```
Signal Lantern
```
```
Быстрый Переулок
```
```
Signal Lantern
```
```
La Última Broma
```
```
Kōwhai Run
```
```
Laughter on the Fjord
```
```
Radio Sahra (Desert Broadcast)
```
```
Harbor Radio
```
```
Harbor Radio
```
```
Kite-Festival Mix-Up
```
```
Rainy Season Heist
```
```
The Bakery Next Door
```
```
Cairo Punchline
```
```
Δρόμος της Σκιάς
```
```
Kisah Lucu Jakarta
```
```
The Last Tram in Praha
```
```
Kraków Files
```
```
Comédia do Silêncio
```
```
Helsinki Signal
```
```
Ulaanbaatar Run
```
```
Noite de Episódio
```
```
Şehir Günlükleri
```
```
Nonna’s New Recipe
```
```
Typhoon Over Taipei
```
```
Baltic Heist
```
```
Mombasa Studio Sessions — Season 1
```
```
Andes Airlift — Season 2
```
```
Kraków Detectives — Season 1
```
```
Kraków Detectives — Season 1
```
```
Kraków Detectives — Season 1
```
```
Kraków Detectives — Season 1
```
```
The Infinite Shelf Experiment
```
```
∅ (Zero Feature)
```
```
Te Marama Files
```
```
Saudade Radio Play
```
```
Coastline Detectives
```
```
Festival Diaries
```
```
Les rires du marché
```
```
Desert Courier
```
```
Orbital Classroom
```
```
Orbital Classroom
```
```
Orbital Classroom
```
```
Sauna Sitcom
```
```
Steppe Chase
```
```
Whānau Warriors
```
```
Ngā Wāhanga Tuatahi
```
```
Bangkok Banana Split
```
```
Koru Coast Pursuit
```
```
Carnaval Confidential
```
```
Aurora Freight Run
```
```
Red Dunes Extraction
```
```
Tuk Tuk Tales — Season 2
```
```
Tuk Tuk Tales — Season 2
```
```
Tuk Tuk Tales — Season 2
```
```
Atlas Station — Season 1
```
```
Atlas Station — Season 1
```
```
Atlas Station — Season 1
```
```
Atlas Station — Season 1
```
```
สายลับเงียบ
```
```
Короткий Смех
```
```
Two Lines\nOne Tape
```
```
Heimsendir
```
```
Noche de Vidrio
```
```
   The Punctuation Trial: (A) [B] {C} — D!   
```
```
The Very, Very, Very Long Screening Title Used Only to Stress Old Inventory Printers and Receipts
```
```
Midnight Repairs
```
```
Harbor Signals
```
```
Barrio Getaway
```
```
Tango for Two
```
```
Night Bus Chronicles
```
```
Monsoon Break-In
```
```
Cousins at the Market
```
```
Night Bus Chronicles
```
```
Kitchen Alibis
```
```
Kitchen Alibis
```
```
Andes Afternoon
```
```
Jua Kali Chase
```
```
Dhaka Punchlines
```
```
Baltic Breakout
```
```
웃음의 법칙
```
```
Río de Sombras
```
```
Orbital Kitchen — Season 1
```
```
Orbital Kitchen — Season 1
```
```
Prairie Radio Drama — Season 3
```
```
茶馆风云 — 第一季
```
```
Firewall on the Steppe
```
```
Secondhand Suitcases
```
```
The Galway Mix‑Up
```
```
Северный архив
```
```
ドラマ『空の階段』
```
```
Επεισόδιο
```
```
قصص الميناء
```
```
La Serie Sin Nombre
```
```
Polar Heist
```
```
Kung-Fu Quiproquo
```
```
Les Contes du Métro
```

| Failed Types | 
|---| 
```
Parsed type: series != API type: movie
```
```
Parsed type: series != API type: movie
```

| Failed Genres | 
|---| 
```
Parsed genre: Action != API genre: [Comedy, Family, Adventure]
```
```
Parsed genre: Action != API genre: [Short, Crime]
```
```
Parsed genre: Comedy != API genre: [Documentary]
```

| Failed Actors | 
|---| 
```
Kenji Tanaka for movie: Metro Chase
```
```
Idris El-Masri for movie: Metro Chase
```
```
Signe Nørgaard for movie: Viento Rojo
```
```
Diego Fernández-Lobo for movie: Viento Rojo
```
```
Youssef Benali for movie: Viento Rojo
```
```
Mina Park for movie: Paper Lanterns
```
```
Adeola Ogun for movie: Café da Esquina
```
```
Rania Al-Sayed for movie: حكايات المدينة — الموسم 1
```
```
Asha Patel for movie: حكايات المدينة — الموسم 1
```
```
Sofía García Márquez for movie: The Lost Pilot
```

