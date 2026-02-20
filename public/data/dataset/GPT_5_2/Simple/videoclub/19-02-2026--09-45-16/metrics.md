# Generation 1
```
!new Client('c1')
!c1.clientId := 1
!c1.isSuspended := false

!new Client('c2')
!c2.clientId := 2
!c2.isSuspended := true

!new Client('c3')
!c3.clientId := 3
!c3.isSuspended := false

!new Movie('m1')
!m1.title := 'Edge of Tomorrow'
!m1.availableCopies := 3
!m1.genre := #Action

!new Movie('m2')
!m2.title := 'City Laughs'
!m2.availableCopies := 1
!m2.genre := #Comedy

!new Movie('m3')
!m3.title := 'Last Stand'
!m3.availableCopies := 0
!m3.genre := #Action

!new Series('s1')
!s1.title := 'Detective Files'
!s1.availableCopies := 2
!s1.episode := 1

!new Series('s2')
!s2.title := 'Detective Files'
!s2.availableCopies := 2
!s2.episode := 2

!new Actor('a1')
!a1.name := 'Tom Hardy'

!new Actor('a2')
!a2.name := 'Emily Blunt'

!new Actor('a3')
!a3.name := 'Kevin Hart'

!new Actor('a4')
!a4.name := 'Emma Stone'

!new Actor('a5')
!a5.name := 'Idris Elba'

!new Actor('a6')
!a6.name := 'Sandra Oh'

!insert (m1, a2) into CassetteActor
!insert (m1, a5) into CassetteActor

!insert (m2, a3) into CassetteActor
!insert (m2, a4) into CassetteActor

!insert (m3, a1) into CassetteActor
!insert (m3, a5) into CassetteActor

!insert (s1, a6) into CassetteActor
!insert (s1, a4) into CassetteActor

!insert (s2, a6) into CassetteActor
!insert (s2, a4) into CassetteActor

!new Rental('r1')
!r1.date := Date('2026-01-05')
!insert (c1, r1) into ClientRental
!insert (r1, m1) into RentalCassette

!new Rental('r2')
!r2.date := Date('2026-01-08')
!insert (c1, r2) into ClientRental
!insert (r2, s1) into RentalCassette
!insert (r2, s2) into RentalCassette

!new Rental('r3')
!r3.date := Date('2026-01-10')
!insert (c2, r3) into ClientRental
!insert (r3, m2) into RentalCassette

!new Rental('r4')
!r4.date := Date('2026-02-02')
!insert (c3, r4) into ClientRental
!insert (r4, m3) into RentalCassette
!insert (r4, s2) into RentalCassette

!new Rental('r5')
!r5.date := Date('2026-02-15')
!insert (c3, r5) into ClientRental
!insert (r5, m1) into RentalCassette
!insert (r5, m2) into RentalCassette
```
## Generation 1 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 74 | 0.00% |
| Multiplicities Errors | 0 | 23 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 3 | 5 | 60.00% |
| Types (out of valid Titles) | 0 | 2 | 0.00% |
| Genres (out of valid Titles) | 0 | 2 | 0.00% |
| Actors (out of valid Titles) | 3 | 4 | 75.00% |
| Release year > Rental year (out of valid Titles) | 0 | 2 | 0.00% |

| Failed Titles | 
|---| 
```
City Laughs
```
```
Detective Files
```
```
Detective Files
```

| Failed Actors | 
|---| 
```
Idris Elba for movie: Edge of Tomorrow
```
```
Tom Hardy for movie: Last Stand
```
```
Idris Elba for movie: Last Stand
```

# Generation 2
```
!new Client('clA')
!clA.clientId := 10
!clA.isSuspended := true

!new Client('clB')
!clB.clientId := 11
!clB.isSuspended := false

!new Movie('movA')
!movA.title := 'Midnight Run'
!movA.availableCopies := 5
!movA.genre := #Comedy

!new Series('serA')
!serA.title := 'Frontier Worlds'
!serA.availableCopies := 1
!serA.episode := 7

!new Series('serB')
!serB.title := 'Frontier Worlds'
!serB.availableCopies := 1
!serB.episode := 8

!new Actor('actA')
!actA.name := 'Alicia Monroe'

!new Actor('actB')
!actB.name := 'Brandon Lee'

!new Actor('actC')
!actC.name := 'Carmen Diaz'

!new Actor('actD')
!actD.name := 'Daniel Wu'

!insert (movA, actA) into CassetteActor
!insert (movA, actD) into CassetteActor

!insert (serA, actB) into CassetteActor
!insert (serA, actC) into CassetteActor

!insert (serB, actB) into CassetteActor

!new Rental('rentA1')
!rentA1.date := Date('2025-12-20')
!insert (clA, rentA1) into ClientRental
!insert (rentA1, movA) into RentalCassette
!insert (rentA1, serA) into RentalCassette
!insert (rentA1, serB) into RentalCassette

!new Rental('rentA2')
!rentA2.date := Date('2026-01-03')
!insert (clA, rentA2) into ClientRental
!insert (rentA2, serB) into RentalCassette
```
## Generation 2 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 41 | 0.00% |
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
Frontier Worlds
```
```
Frontier Worlds
```

| Failed Actors | 
|---| 
```
Alicia Monroe for movie: Midnight Run
```
```
Daniel Wu for movie: Midnight Run
```

# Generation 3
```
!new Client('cx1')
!cx1.clientId := 21
!cx1.isSuspended := false

!new Client('cx2')
!cx2.clientId := 22
!cx2.isSuspended := false

!new Client('cx3')
!cx3.clientId := 23
!cx3.isSuspended := true

!new Client('cx4')
!cx4.clientId := 24
!cx4.isSuspended := false

!new Movie('mx1')
!mx1.title := 'Steel Horizon'
!mx1.availableCopies := 2
!mx1.genre := #Action

!new Movie('mx2')
!mx2.title := 'The Awkward Reunion'
!mx2.availableCopies := 0
!mx2.genre := #Comedy

!new Series('sx1')
!sx1.title := 'Harbor Nights'
!sx1.availableCopies := 4
!sx1.episode := 3

!new Series('sx2')
!sx2.title := 'Quantum Street'
!sx2.availableCopies := 1
!sx2.episode := 12

!new Series('sx3')
!sx3.title := 'Quantum Street'
!sx3.availableCopies := 0
!sx3.episode := 13

!new Actor('ax1')
!ax1.name := 'Mina Park'

!new Actor('ax2')
!ax2.name := 'Julian Cross'

!new Actor('ax3')
!ax3.name := 'Ravi Mehta'

!new Actor('ax4')
!ax4.name := 'Sofia Alvarez'

!new Actor('ax5')
!ax5.name := 'Helen Briggs'

!new Actor('ax6')
!ax6.name := 'Noah Bennett'

!insert (mx1, ax1) into CassetteActor
!insert (mx1, ax2) into CassetteActor
!insert (mx1, ax3) into CassetteActor

!insert (mx2, ax3) into CassetteActor
!insert (mx2, ax4) into CassetteActor

!insert (sx1, ax5) into CassetteActor

!insert (sx2, ax5) into CassetteActor
!insert (sx2, ax6) into CassetteActor

!insert (sx3, ax2) into CassetteActor
!insert (sx3, ax6) into CassetteActor

!new Rental('rx1')
!rx1.date := Date('2026-02-01')
!insert (cx1, rx1) into ClientRental
!insert (rx1, mx1) into RentalCassette
!insert (rx1, sx1) into RentalCassette

!new Rental('rx2')
!rx2.date := Date('2026-02-05')
!insert (cx1, rx2) into ClientRental
!insert (rx2, mx2) into RentalCassette

!new Rental('rx3')
!rx3.date := Date('2026-02-06')
!insert (cx2, rx3) into ClientRental
!insert (rx3, sx2) into RentalCassette
!insert (rx3, sx3) into RentalCassette

!new Rental('rx4')
!rx4.date := Date('2026-02-10')
!insert (cx3, rx4) into ClientRental
!insert (rx4, mx1) into RentalCassette
!insert (rx4, mx2) into RentalCassette
!insert (rx4, sx2) into RentalCassette

!new Rental('rx5')
!rx5.date := Date('2026-03-01')
!insert (cx2, rx5) into ClientRental
!insert (rx5, mx1) into RentalCassette
```
## Generation 3 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 78 | 0.00% |
| Multiplicities Errors | 0 | 24 | 0.00% |
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
The Awkward Reunion
```
```
Steel Horizon
```
```
Quantum Street
```
```
Harbor Nights
```
```
Quantum Street
```

# Generation 4
```
!new Client('cy1')
!cy1.clientId := 100
!cy1.isSuspended := false

!new Client('cy2')
!cy2.clientId := 101
!cy2.isSuspended := true

!new Movie('myA')
!myA.title := 'Rapid Pursuit'
!myA.availableCopies := 10
!myA.genre := #Action

!new Movie('myB')
!myB.title := 'Weekend Mix-Up'
!myB.availableCopies := 0
!myB.genre := #Comedy

!new Series('syA')
!syA.title := 'Signal Lost'
!syA.availableCopies := 3
!syA.episode := 1

!new Series('syB')
!syB.title := 'Signal Lost'
!syB.availableCopies := 3
!syB.episode := 2

!new Series('syC')
!syC.title := 'Chronicles of Orion'
!syC.availableCopies := 1
!syC.episode := 10

!new Actor('ay1')
!ay1.name := 'Nora King'

!new Actor('ay2')
!ay2.name := 'Victor Hale'

!new Actor('ay3')
!ay3.name := 'Priya Shah'

!new Actor('ay4')
!ay4.name := 'Gareth Miles'

!insert (myA, ay1) into CassetteActor
!insert (myA, ay2) into CassetteActor
!insert (myA, ay3) into CassetteActor

!insert (myB, ay2) into CassetteActor

!insert (syA, ay1) into CassetteActor

!insert (syB, ay1) into CassetteActor
!insert (syB, ay3) into CassetteActor

!insert (syC, ay2) into CassetteActor
!insert (syC, ay3) into CassetteActor

!new Rental('ry1')
!ry1.date := Date('2024-07-14')
!insert (cy1, ry1) into ClientRental
!insert (ry1, myA) into RentalCassette

!new Rental('ry2')
!ry2.date := Date('2024-07-15')
!insert (cy1, ry2) into ClientRental
!insert (ry2, syA) into RentalCassette
!insert (ry2, syB) into RentalCassette
!insert (ry2, syC) into RentalCassette

!new Rental('ry3')
!ry3.date := Date('2024-08-01')
!insert (cy1, ry3) into ClientRental
!insert (ry3, myA) into RentalCassette
!insert (ry3, myB) into RentalCassette
!insert (ry3, syC) into RentalCassette
```
## Generation 4 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 59 | 0.00% |
| Multiplicities Errors | 0 | 19 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 3 | 5 | 60.00% |
| Types (out of valid Titles) | 2 | 2 | 100.00% |
| Genres (out of valid Titles) | 0 | 0 | 0.00% |
| Actors (out of valid Titles) | 3 | 3 | 100.00% |
| Release year > Rental year (out of valid Titles) | 0 | 2 | 0.00% |

| Failed Titles | 
|---| 
```
Rapid Pursuit
```
```
Weekend Mix-Up
```
```
Chronicles of Orion
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
Nora King for movie: Signal Lost
```
```
Nora King for movie: Signal Lost
```
```
Priya Shah for movie: Signal Lost
```

# Generation 5
```
!new Client('cz1')
!cz1.clientId := 201
!cz1.isSuspended := false

!new Client('cz2')
!cz2.clientId := 202
!cz2.isSuspended := false

!new Client('cz3')
!cz3.clientId := 203
!cz3.isSuspended := true

!new Client('cz4')
!cz4.clientId := 204
!cz4.isSuspended := false

!new Client('cz5')
!cz5.clientId := 205
!cz5.isSuspended := true

!new Actor('az1')
!az1.name := 'Lena Moritz'

!new Actor('az2')
!az2.name := 'Omar Nasser'

!new Movie('mz1')
!mz1.title := 'Harbor Chase'
!mz1.availableCopies := 7
!mz1.genre := #Action

!new Series('sz1')
!sz1.title := 'Kitchen Stories'
!sz1.availableCopies := 0
!sz1.episode := 4

!new Series('sz2')
!sz2.title := 'Northern Lights'
!sz2.availableCopies := 2
!sz2.episode := 1

!new Series('sz3')
!sz3.title := 'Northern Lights'
!sz3.availableCopies := 2
!sz3.episode := 2

!insert (mz1, az1) into CassetteActor
!insert (mz1, az2) into CassetteActor

!insert (sz1, az1) into CassetteActor
!insert (sz2, az1) into CassetteActor
!insert (sz3, az1) into CassetteActor

!new Rental('rz1')
!rz1.date := Date('2023-11-30')
!insert (cz3, rz1) into ClientRental
!insert (rz1, mz1) into RentalCassette
!insert (rz1, sz1) into RentalCassette
!insert (rz1, sz2) into RentalCassette
!insert (rz1, sz3) into RentalCassette
```
## Generation 5 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 47 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 2 | 4 | 50.00% |
| Types (out of valid Titles) | 2 | 2 | 100.00% |
| Genres (out of valid Titles) | 0 | 0 | 0.00% |
| Actors (out of valid Titles) | 2 | 2 | 100.00% |
| Release year > Rental year (out of valid Titles) | 0 | 2 | 0.00% |

| Failed Titles | 
|---| 
```
Harbor Chase
```
```
Kitchen Stories
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
Lena Moritz for movie: Northern Lights
```
```
Lena Moritz for movie: Northern Lights
```

# Generation 6
```
!new Client('p1')
!p1.clientId := 301
!p1.isSuspended := false

!new Client('p2')
!p2.clientId := 302
!p2.isSuspended := false

!new Client('p3')
!p3.clientId := 303
!p3.isSuspended := true

!new Client('p4')
!p4.clientId := 304
!p4.isSuspended := false

!new Client('p5')
!p5.clientId := 305
!p5.isSuspended := false

!new Client('p6')
!p6.clientId := 306
!p6.isSuspended := true

!new Movie('film1')
!film1.title := 'Desert Signal'
!film1.availableCopies := 0
!film1.genre := #Action

!new Movie('film2')
!film2.title := 'Office Pranks'
!film2.availableCopies := 4
!film2.genre := #Comedy

!new Movie('film3')
!film3.title := 'Night Ferry'
!film3.availableCopies := 2
!film3.genre := #Action

!new Series('show1')
!show1.title := 'Mountain Clinic'
!show1.availableCopies := 1
!show1.episode := 5

!new Series('show2')
!show2.title := 'Mountain Clinic'
!show2.availableCopies := 1
!show2.episode := 6

!new Actor('star1')
!star1.name := 'Chloe Barrett'

!new Actor('star2')
!star2.name := 'Hassan Ridley'

!new Actor('star3')
!star3.name := 'Yuki Tanaka'

!insert (film1, star2) into CassetteActor
!insert (film1, star3) into CassetteActor

!insert (film2, star1) into CassetteActor

!insert (film3, star2) into CassetteActor

!insert (show1, star1) into CassetteActor
!insert (show1, star3) into CassetteActor

!insert (show2, star3) into CassetteActor

!new Rental('rent1')
!rent1.date := Date('2022-03-18')
!insert (p2, rent1) into ClientRental
!insert (rent1, film2) into RentalCassette

!new Rental('rent2')
!rent2.date := Date('2022-03-25')
!insert (p2, rent2) into ClientRental
!insert (rent2, show1) into RentalCassette
!insert (rent2, film3) into RentalCassette
```
## Generation 6 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 60 | 0.00% |
| Multiplicities Errors | 0 | 12 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 3 | 5 | 60.00% |
| Types (out of valid Titles) | 0 | 2 | 0.00% |
| Genres (out of valid Titles) | 1 | 2 | 50.00% |
| Actors (out of valid Titles) | 2 | 2 | 100.00% |
| Release year > Rental year (out of valid Titles) | 1 | 2 | 50.00% |

| Failed Titles | 
|---| 
```
Mountain Clinic
```
```
Mountain Clinic
```
```
Desert Signal
```

| Failed Genres | 
|---| 
```
Parsed genre: Action != API genre: [Short]
```

| Failed Actors | 
|---| 
```
Chloe Barrett for movie: Office Pranks
```
```
Hassan Ridley for movie: Night Ferry
```

| Failed Years | 
|---| 
```
Rental year: 2022 < Release year: 2024
```

# Generation 7
```
!new Client('u1')
!u1.clientId := 401
!u1.isSuspended := false

!new Client('u2')
!u2.clientId := 402
!u2.isSuspended := true

!new Movie('mv401')
!mv401.title := 'Crimson Velocity'
!mv401.availableCopies := 6
!mv401.genre := #Action

!new Movie('mv402')
!mv402.title := 'Cafe Confessions'
!mv402.availableCopies := 1
!mv402.genre := #Comedy

!new Series('sr401')
!sr401.title := 'Deep Space Audit'
!sr401.availableCopies := 0
!sr401.episode := 21

!new Series('sr402')
!sr402.title := 'River County'
!sr402.availableCopies := 3
!sr402.episode := 1

!new Actor('ac401')
!ac401.name := 'Isabelle Grant'

!new Actor('ac402')
!ac402.name := 'Marcus Vela'

!new Actor('ac403')
!ac403.name := 'Tariq Osman'

!new Actor('ac404')
!ac404.name := 'Selena Cho'

!new Actor('ac405')
!ac405.name := 'Peter Novak'

!insert (mv401, ac402) into CassetteActor
!insert (mv401, ac403) into CassetteActor

!insert (mv402, ac401) into CassetteActor
!insert (mv402, ac404) into CassetteActor

!insert (sr401, ac405) into CassetteActor

!insert (sr402, ac401) into CassetteActor
!insert (sr402, ac402) into CassetteActor
!insert (sr402, ac405) into CassetteActor

!new Rental('rr401')
!rr401.date := Date('2021-09-02')
!insert (u1, rr401) into ClientRental
!insert (rr401, mv401) into RentalCassette

!new Rental('rr402')
!rr402.date := Date('2021-09-10')
!insert (u1, rr402) into ClientRental
!insert (rr402, mv401) into RentalCassette
!insert (rr402, mv402) into RentalCassette
!insert (rr402, sr402) into RentalCassette

!new Rental('rr403')
!rr403.date := Date('2021-10-01')
!insert (u1, rr403) into ClientRental
!insert (rr403, sr401) into RentalCassette
```
## Generation 7 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 54 | 0.00% |
| Multiplicities Errors | 0 | 16 | 0.00% |
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
Crimson Velocity
```
```
Cafe Confessions
```
```
River County
```
```
Deep Space Audit
```

# Generation 8
```
!new Client('d1')
!d1.clientId := 501
!d1.isSuspended := false

!new Client('d2')
!d2.clientId := 502
!d2.isSuspended := false

!new Client('d3')
!d3.clientId := 503
!d3.isSuspended := true

!new Movie('movR')
!movR.title := 'Laughing Under Pressure'
!movR.availableCopies := 2
!movR.genre := #Comedy

!new Movie('movNR')
!movNR.title := 'Operation Black Tide'
!movNR.availableCopies := 8
!movNR.genre := #Action

!new Series('serX1')
!serX1.title := 'Garden Secrets'
!serX1.availableCopies := 0
!serX1.episode := 1

!new Series('serX2')
!serX2.title := 'Garden Secrets'
!serX2.availableCopies := 0
!serX2.episode := 2

!new Series('serX3')
!serX3.title := 'Garden Secrets'
!serX3.availableCopies := 0
!serX3.episode := 3

!new Series('serY1')
!serY1.title := 'Metro Patrol'
!serY1.availableCopies := 1
!serY1.episode := 9

!new Actor('b1')
!b1.name := 'Renee Coleman'

!new Actor('b2')
!b2.name := 'Diego Santana'

!new Actor('b3')
!b3.name := 'Farah Iqbal'

!new Actor('b4')
!b4.name := 'Jonas Keller'

!new Actor('b5')
!b5.name := 'Mei Watanabe'

!new Actor('unused1')
!unused1.name := 'Tomasz Zielinski'

!insert (movR, b1) into CassetteActor
!insert (movR, b2) into CassetteActor

!insert (movNR, b4) into CassetteActor
!insert (movNR, b5) into CassetteActor

!insert (serX1, b3) into CassetteActor
!insert (serX2, b3) into CassetteActor
!insert (serX3, b3) into CassetteActor

!insert (serY1, b2) into CassetteActor
!insert (serY1, b4) into CassetteActor

!new Rental('rd1_1')
!rd1_1.date := Date('2020-04-15')
!insert (d1, rd1_1) into ClientRental
!insert (rd1_1, serX1) into RentalCassette

!new Rental('rd1_2')
!rd1_2.date := Date('2020-04-18')
!insert (d1, rd1_2) into ClientRental
!insert (rd1_2, movR) into RentalCassette
!insert (rd1_2, serX1) into RentalCassette
!insert (rd1_2, serX2) into RentalCassette
!insert (rd1_2, serX3) into RentalCassette

!new Rental('rd2_1')
!rd2_1.date := Date('2020-05-02')
!insert (d2, rd2_1) into ClientRental
!insert (rd2_1, serY1) into RentalCassette

!new Rental('rd3_1')
!rd3_1.date := Date('2020-05-03')
!insert (d3, rd3_1) into ClientRental
!insert (rd3_1, movR) into RentalCassette
!insert (rd3_1, serY1) into RentalCassette
```
## Generation 8 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 74 | 0.00% |
| Multiplicities Errors | 0 | 21 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 3 | 6 | 50.00% |
| Types (out of valid Titles) | 0 | 3 | 0.00% |
| Genres (out of valid Titles) | 0 | 0 | 0.00% |
| Actors (out of valid Titles) | 3 | 3 | 100.00% |
| Release year > Rental year (out of valid Titles) | 0 | 3 | 0.00% |

| Failed Titles | 
|---| 
```
Operation Black Tide
```
```
Laughing Under Pressure
```
```
Metro Patrol
```

| Failed Actors | 
|---| 
```
Farah Iqbal for movie: Garden Secrets
```
```
Farah Iqbal for movie: Garden Secrets
```
```
Farah Iqbal for movie: Garden Secrets
```

# Generation 9
```
!new Client('k1')
!k1.clientId := 601
!k1.isSuspended := false

!new Client('k2')
!k2.clientId := 602
!k2.isSuspended := true

!new Client('k3')
!k3.clientId := 603
!k3.isSuspended := false

!new Actor('g1')
!g1.name := 'Samira Vaughn'

!new Actor('g2')
!g2.name := 'Elliot Crane'

!new Actor('g3')
!g3.name := 'Marcos Ibanez'

!new Actor('g4')
!g4.name := 'Hana Petrov'

!new Actor('g5')
!g5.name := 'Leila Norris'

!new Movie('km1')
!km1.title := 'Blueprint Escape'
!km1.availableCopies := 1
!km1.genre := #Action

!new Movie('km2')
!km2.title := 'The Neighborly Mistake'
!km2.availableCopies := 9
!km2.genre := #Comedy

!new Series('ks1')
!ks1.title := 'Paper Kingdom'
!ks1.availableCopies := 2
!ks1.episode := 14

!new Series('ks2')
!ks2.title := 'Paper Kingdom'
!ks2.availableCopies := 2
!ks2.episode := 15

!new Series('ks3')
!ks3.title := 'After the Storm'
!ks3.availableCopies := 0
!ks3.episode := 2

!insert (km1, g1) into CassetteActor
!insert (km1, g2) into CassetteActor
!insert (km1, g3) into CassetteActor

!insert (km2, g1) into CassetteActor
!insert (km2, g4) into CassetteActor

!insert (ks1, g1) into CassetteActor
!insert (ks1, g5) into CassetteActor

!insert (ks2, g1) into CassetteActor
!insert (ks2, g5) into CassetteActor
!insert (ks2, g2) into CassetteActor

!insert (ks3, g1) into CassetteActor
!insert (ks3, g3) into CassetteActor
!insert (ks3, g4) into CassetteActor

!new Rental('kr1')
!kr1.date := Date('2026-01-22')
!insert (k1, kr1) into ClientRental
!insert (kr1, km1) into RentalCassette
!insert (kr1, km2) into RentalCassette
!insert (kr1, ks1) into RentalCassette
!insert (kr1, ks2) into RentalCassette
!insert (kr1, ks3) into RentalCassette

!new Rental('kr2')
!kr2.date := Date('2026-01-23')
!insert (k2, kr2) into ClientRental
!insert (kr2, km1) into RentalCassette
```
## Generation 9 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 64 | 0.00% |
| Multiplicities Errors | 0 | 21 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 4 | 5 | 80.00% |
| Types (out of valid Titles) | 1 | 1 | 100.00% |
| Genres (out of valid Titles) | 0 | 0 | 0.00% |
| Actors (out of valid Titles) | 3 | 3 | 100.00% |
| Release year > Rental year (out of valid Titles) | 0 | 1 | 0.00% |

| Failed Titles | 
|---| 
```
The Neighborly Mistake
```
```
Paper Kingdom
```
```
Paper Kingdom
```
```
Blueprint Escape
```

| Failed Types | 
|---| 
```
Parsed type: series != API type: movie
```

| Failed Actors | 
|---| 
```
Samira Vaughn for movie: After the Storm
```
```
Marcos Ibanez for movie: After the Storm
```
```
Hana Petrov for movie: After the Storm
```

# Generation 10
```
!new Client('nc1')
!nc1.clientId := 701
!nc1.isSuspended := false

!new Client('nc2')
!nc2.clientId := 702
!nc2.isSuspended := true

!new Client('nc3')
!nc3.clientId := 703
!nc3.isSuspended := false

!new Actor('na1')
!na1.name := 'Marina Schultz'

!new Actor('na2')
!na2.name := 'Kenji Arai'

!new Actor('na3')
!na3.name := 'Olivia Mensah'

!new Actor('na4')
!na4.name := 'Paul Richter'

!new Actor('na5')
!na5.name := 'Santiago Cruz'

!new Movie('nm1')
!nm1.title := 'Vault Protocol'
!nm1.availableCopies := 12
!nm1.genre := #Action

!new Series('ns1')
!ns1.title := 'Campus Days'
!ns1.availableCopies := 5
!ns1.episode := 1

!new Series('ns2')
!ns2.title := 'Campus Days'
!ns2.availableCopies := 5
!ns2.episode := 2

!new Series('ns3')
!ns3.title := 'Campus Days'
!ns3.availableCopies := 5
!ns3.episode := 3

!new Series('ns4')
!ns4.title := 'The Long Winter'
!ns4.availableCopies := 0
!ns4.episode := 1

!new Series('ns5')
!ns5.title := 'The Long Winter'
!ns5.availableCopies := 0
!ns5.episode := 2

!insert (nm1, na2) into CassetteActor
!insert (nm1, na4) into CassetteActor
!insert (nm1, na5) into CassetteActor

!insert (ns1, na1) into CassetteActor
!insert (ns1, na3) into CassetteActor

!insert (ns2, na1) into CassetteActor

!insert (ns3, na1) into CassetteActor
!insert (ns3, na2) into CassetteActor
!insert (ns3, na3) into CassetteActor

!insert (ns4, na4) into CassetteActor

!insert (ns5, na4) into CassetteActor
!insert (ns5, na5) into CassetteActor

!new Rental('nr1')
!nr1.date := Date('2019-01-11')
!insert (nc2, nr1) into ClientRental
!insert (nr1, ns1) into RentalCassette

!new Rental('nr2')
!nr2.date := Date('2019-01-12')
!insert (nc2, nr2) into ClientRental
!insert (nr2, ns2) into RentalCassette
!insert (nr2, ns3) into RentalCassette

!new Rental('nr3')
!nr3.date := Date('2019-02-02')
!insert (nc2, nr3) into ClientRental
!insert (nr3, nm1) into RentalCassette
!insert (nr3, ns1) into RentalCassette
!insert (nr3, ns2) into RentalCassette
!insert (nr3, ns3) into RentalCassette
!insert (nr3, ns4) into RentalCassette
!insert (nr3, ns5) into RentalCassette

!new Rental('nr4')
!nr4.date := Date('2019-03-15')
!insert (nc2, nr4) into ClientRental
!insert (nr4, nm1) into RentalCassette
```
## Generation 10 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 77 | 0.00% |
| Multiplicities Errors | 0 | 26 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 4 | 6 | 66.67% |
| Types (out of valid Titles) | 2 | 2 | 100.00% |
| Genres (out of valid Titles) | 0 | 0 | 0.00% |
| Actors (out of valid Titles) | 3 | 3 | 100.00% |
| Release year > Rental year (out of valid Titles) | 0 | 2 | 0.00% |

| Failed Titles | 
|---| 
```
Campus Days
```
```
Campus Days
```
```
Campus Days
```
```
Vault Protocol
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
Paul Richter for movie: The Long Winter
```
```
Paul Richter for movie: The Long Winter
```
```
Santiago Cruz for movie: The Long Winter
```

# Generation 11
```
!new Client('q1')
!q1.clientId := 801
!q1.isSuspended := false

!new Client('q2')
!q2.clientId := 802
!q2.isSuspended := true

!new Client('q3')
!q3.clientId := 803
!q3.isSuspended := false

!new Actor('qa1')
!qa1.name := 'Elena Brody'

!new Actor('qa2')
!qa2.name := 'Mason Kline'

!new Actor('qa3')
!qa3.name := 'Ibrahim Saleh'

!new Actor('qa4')
!qa4.name := 'Claire Dubois'

!new Actor('qa5')
!qa5.name := 'Jae-min Choi'

!new Actor('qa6')
!qa6.name := 'Nadia Petrova'

!new Actor('qa7')
!qa7.name := 'Luis Aranda'

!new Movie('qm1')
!qm1.title := 'Silent Uprising'
!qm1.availableCopies := 0
!qm1.genre := #Action

!new Movie('qm2')
!qm2.title := 'Roommates Forever'
!qm2.availableCopies := 3
!qm2.genre := #Comedy

!new Movie('qm3')
!qm3.title := 'Festival of Jokes'
!qm3.availableCopies := 1
!qm3.genre := #Comedy

!new Series('qsA1')
!qsA1.title := 'Bake Lab'
!qsA1.availableCopies := 6
!qsA1.episode := 1

!new Series('qsA2')
!qsA2.title := 'Bake Lab'
!qsA2.availableCopies := 6
!qsA2.episode := 2

!new Series('qsB1')
!qsB1.title := 'Street Myths'
!qsB1.availableCopies := 1
!qsB1.episode := 1

!new Series('qsC1')
!qsC1.title := 'One Minute History'
!qsC1.availableCopies := 0
!qsC1.episode := 99

!insert (qm1, qa1) into CassetteActor
!insert (qm1, qa2) into CassetteActor
!insert (qm1, qa3) into CassetteActor
!insert (qm1, qa4) into CassetteActor

!insert (qm2, qa5) into CassetteActor

!insert (qm3, qa7) into CassetteActor

!insert (qsA1, qa6) into CassetteActor

!insert (qsA2, qa6) into CassetteActor
!insert (qsA2, qa7) into CassetteActor

!insert (qsB1, qa2) into CassetteActor

!insert (qsC1, qa3) into CassetteActor
!insert (qsC1, qa5) into CassetteActor

!new Rental('qr1')
!qr1.date := Date('2018-06-01')
!insert (q1, qr1) into ClientRental
!insert (qr1, qm2) into RentalCassette

!new Rental('qr2')
!qr2.date := Date('2018-06-03')
!insert (q1, qr2) into ClientRental
!insert (qr2, qsA1) into RentalCassette
!insert (qr2, qsA2) into RentalCassette

!new Rental('qr3')
!qr3.date := Date('2018-06-10')
!insert (q1, qr3) into ClientRental
!insert (qr3, qm1) into RentalCassette
!insert (qr3, qsB1) into RentalCassette
!insert (qr3, qsC1) into RentalCassette

!new Rental('qr4')
!qr4.date := Date('2018-07-04')
!insert (q2, qr4) into ClientRental
!insert (qr4, qm1) into RentalCassette

!new Rental('qr5')
!qr5.date := Date('2018-07-05')
!insert (q2, qr5) into ClientRental
!insert (qr5, qsB1) into RentalCassette
```
## Generation 11 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 86 | 0.00% |
| Multiplicities Errors | 0 | 25 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 6 | 7 | 85.71% |
| Types (out of valid Titles) | 0 | 1 | 0.00% |
| Genres (out of valid Titles) | 0 | 0 | 0.00% |
| Actors (out of valid Titles) | 2 | 2 | 100.00% |
| Release year > Rental year (out of valid Titles) | 0 | 1 | 0.00% |

| Failed Titles | 
|---| 
```
Street Myths
```
```
Bake Lab
```
```
Bake Lab
```
```
Silent Uprising
```
```
Festival of Jokes
```
```
Roommates Forever
```

| Failed Actors | 
|---| 
```
Ibrahim Saleh for movie: One Minute History
```
```
Jae-min Choi for movie: One Minute History
```

# Generation 12
```
!new Client('va')
!va.clientId := 901
!va.isSuspended := false

!new Client('vb')
!vb.clientId := 902
!vb.isSuspended := true

!new Client('vc')
!vc.clientId := 903
!vc.isSuspended := false

!new Actor('vxAct1')
!vxAct1.name := 'Patricia Yen'

!new Actor('vxAct2')
!vxAct2.name := 'George Mbeki'

!new Series('vxS1')
!vxS1.title := 'The Archivist'
!vxS1.availableCopies := 0
!vxS1.episode := 1

!new Series('vxS2')
!vxS2.title := 'The Archivist'
!vxS2.availableCopies := 0
!vxS2.episode := 2

!new Series('vxS3')
!vxS3.title := 'The Archivist'
!vxS3.availableCopies := 1
!vxS3.episode := 3

!new Movie('vxM1')
!vxM1.title := 'Slapstick Summer'
!vxM1.availableCopies := 2
!vxM1.genre := #Comedy

!new Movie('vxM2')
!vxM2.title := 'Iron Meridian'
!vxM2.availableCopies := 5
!vxM2.genre := #Action

!insert (vxS1, vxAct1) into CassetteActor
!insert (vxS1, vxAct2) into CassetteActor
!insert (vxS2, vxAct1) into CassetteActor
!insert (vxS3, vxAct1) into CassetteActor
!insert (vxM1, vxAct2) into CassetteActor
!insert (vxM2, vxAct1) into CassetteActor
!insert (vxM2, vxAct2) into CassetteActor

!new Rental('vxR1')
!vxR1.date := Date('2017-12-31')
!insert (vb, vxR1) into ClientRental
!insert (vxR1, vxS1) into RentalCassette
!insert (vxR1, vxS2) into RentalCassette
!insert (vxR1, vxS3) into RentalCassette

!new Rental('vxR2')
!vxR2.date := Date('2018-01-05')
!insert (va, vxR2) into ClientRental
!insert (vxR2, vxM2) into RentalCassette

!new Rental('vxR3')
!vxR3.date := Date('2018-02-14')
!insert (va, vxR3) into ClientRental
!insert (vxR3, vxM1) into RentalCassette
!insert (vxR3, vxS3) into RentalCassette
```
## Generation 12 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 55 | 0.00% |
| Multiplicities Errors | 0 | 16 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 2 | 5 | 40.00% |
| Types (out of valid Titles) | 3 | 3 | 100.00% |
| Genres (out of valid Titles) | 0 | 0 | 0.00% |
| Actors (out of valid Titles) | 4 | 4 | 100.00% |
| Release year > Rental year (out of valid Titles) | 0 | 3 | 0.00% |

| Failed Titles | 
|---| 
```
Iron Meridian
```
```
Slapstick Summer
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
Parsed type: series != API type: movie
```

| Failed Actors | 
|---| 
```
Patricia Yen for movie: The Archivist
```
```
Patricia Yen for movie: The Archivist
```
```
Patricia Yen for movie: The Archivist
```
```
George Mbeki for movie: The Archivist
```

# Generation 13
```
!new Client('wC1')
!wC1.clientId := 1001
!wC1.isSuspended := false

!new Client('wC2')
!wC2.clientId := 1002
!wC2.isSuspended := false

!new Client('wC3')
!wC3.clientId := 1003
!wC3.isSuspended := true

!new Client('wC4')
!wC4.clientId := 1004
!wC4.isSuspended := false

!new Client('wC5')
!wC5.clientId := 1005
!wC5.isSuspended := true

!new Movie('wM1')
!wM1.title := 'Bridge Over Ashes'
!wM1.availableCopies := 2
!wM1.genre := #Action

!new Movie('wM2')
!wM2.title := 'Holiday Misread'
!wM2.availableCopies := 0
!wM2.genre := #Comedy

!new Series('wS1')
!wS1.title := 'Ocean Chronicles'
!wS1.availableCopies := 4
!wS1.episode := 1

!new Series('wS2')
!wS2.title := 'Ocean Chronicles'
!wS2.availableCopies := 4
!wS2.episode := 2

!new Series('wS3')
!wS3.title := 'Tiny House Tales'
!wS3.availableCopies := 1
!wS3.episode := 8

!new Series('wS4')
!wS4.title := 'Algorithm Alley'
!wS4.availableCopies := 3
!wS4.episode := 42

!new Series('wS5')
!wS5.title := 'Algorithm Alley'
!wS5.availableCopies := 3
!wS5.episode := 43

!new Actor('wA1')
!wA1.name := 'Harper Quinn'

!new Actor('wA2')
!wA2.name := 'Dmitri Volkov'

!new Actor('wA3')
!wA3.name := 'Aisha Rahman'

!new Actor('wA4')
!wA4.name := 'Luca Bianchi'

!new Actor('wA5')
!wA5.name := 'Zoe Delgado'

!new Actor('wA6')
!wA6.name := 'Caleb Ng'

!new Actor('wA7')
!wA7.name := 'Ines Ferreira'

!new Actor('wA8')
!wA8.name := 'Rita Johansson'

!new Actor('wA9')
!wA9.name := 'Bartosz Nowak'

!insert (wM1, wA1) into CassetteActor
!insert (wM1, wA2) into CassetteActor
!insert (wM1, wA3) into CassetteActor
!insert (wM1, wA4) into CassetteActor
!insert (wM1, wA5) into CassetteActor

!insert (wM2, wA6) into CassetteActor

!insert (wS1, wA2) into CassetteActor
!insert (wS1, wA7) into CassetteActor

!insert (wS2, wA2) into CassetteActor
!insert (wS2, wA7) into CassetteActor

!insert (wS3, wA5) into CassetteActor
!insert (wS3, wA7) into CassetteActor

!insert (wS4, wA1) into CassetteActor

!insert (wS5, wA1) into CassetteActor
!insert (wS5, wA3) into CassetteActor

!new Rental('wR1')
!wR1.date := Date('2016-05-20')
!insert (wC3, wR1) into ClientRental
!insert (wR1, wM1) into RentalCassette
!insert (wR1, wS1) into RentalCassette
!insert (wR1, wS2) into RentalCassette
!insert (wR1, wS3) into RentalCassette

!new Rental('wR2')
!wR2.date := Date('2016-06-01')
!insert (wC3, wR2) into ClientRental
!insert (wR2, wS4) into RentalCassette
```
## Generation 13 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 87 | 0.00% |
| Multiplicities Errors | 0 | 22 | 0.00% |
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
Ocean Chronicles
```
```
Tiny House Tales
```
```
Ocean Chronicles
```
```
Algorithm Alley
```
```
Algorithm Alley
```
```
Bridge Over Ashes
```
```
Holiday Misread
```

# Generation 14
```
!new Client('zC1')
!zC1.clientId := 1101
!zC1.isSuspended := false

!new Client('zC2')
!zC2.clientId := 1102
!zC2.isSuspended := true

!new Movie('zMov1')
!zMov1.title := 'Quantum Heist'
!zMov1.availableCopies := 4
!zMov1.genre := #Action

!new Movie('zMov2')
!zMov2.title := 'Dinner for Strangers'
!zMov2.availableCopies := 1
!zMov2.genre := #Comedy

!new Series('zSer1')
!zSer1.title := 'Museum Shift'
!zSer1.availableCopies := 0
!zSer1.episode := 11

!new Series('zSer2')
!zSer2.title := 'Museum Shift'
!zSer2.availableCopies := 0
!zSer2.episode := 12

!new Series('zSer3')
!zSer3.title := 'Desert Radio'
!zSer3.availableCopies := 2
!zSer3.episode := 1

!new Actor('zA1')
!zA1.name := 'Sienna Patel'

!new Actor('zA2')
!zA2.name := 'Arthur Kim'

!new Actor('zA3')
!zA3.name := 'Bianca Rossi'

!new Actor('zA4')
!zA4.name := 'Mikhail Orlov'

!new Actor('zA5')
!zA5.name := 'Nolan Pierce'

!new Actor('zA6')
!zA6.name := 'Grace Okafor'

!new Actor('zA7')
!zA7.name := 'Evan Duarte'

!insert (zMov1, zA1) into CassetteActor
!insert (zMov1, zA2) into CassetteActor
!insert (zMov1, zA3) into CassetteActor
!insert (zMov1, zA4) into CassetteActor
!insert (zMov1, zA5) into CassetteActor
!insert (zMov1, zA6) into CassetteActor

!insert (zMov2, zA1) into CassetteActor

!insert (zSer1, zA7) into CassetteActor
!insert (zSer2, zA7) into CassetteActor
!insert (zSer3, zA2) into CassetteActor

!new Rental('zR1')
!zR1.date := Date('2015-09-17')
!insert (zC1, zR1) into ClientRental
!insert (zR1, zMov1) into RentalCassette
!insert (zR1, zMov2) into RentalCassette
!insert (zR1, zSer1) into RentalCassette
!insert (zR1, zSer2) into RentalCassette
!insert (zR1, zSer3) into RentalCassette

!new Rental('zR2')
!zR2.date := Date('2015-10-01')
!insert (zC2, zR2) into ClientRental
!insert (zR2, zMov1) into RentalCassette

!new Rental('zR3')
!zR3.date := Date('2015-10-12')
!insert (zC2, zR3) into ClientRental
!insert (zR3, zMov1) into RentalCassette
!insert (zR3, zSer3) into RentalCassette

!new Rental('zR4')
!zR4.date := Date('2015-11-03')
!insert (zC1, zR4) into ClientRental
!insert (zR4, zSer2) into RentalCassette
```
## Generation 14 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 71 | 0.00% |
| Multiplicities Errors | 0 | 23 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 4 | 5 | 80.00% |
| Types (out of valid Titles) | 0 | 1 | 0.00% |
| Genres (out of valid Titles) | 1 | 1 | 100.00% |
| Actors (out of valid Titles) | 6 | 6 | 100.00% |
| Release year > Rental year (out of valid Titles) | 1 | 1 | 100.00% |

| Failed Titles | 
|---| 
```
Dinner for Strangers
```
```
Museum Shift
```
```
Desert Radio
```
```
Museum Shift
```

| Failed Genres | 
|---| 
```
Parsed genre: Action != API genre: [Adventure]
```

| Failed Actors | 
|---| 
```
Sienna Patel for movie: Quantum Heist
```
```
Arthur Kim for movie: Quantum Heist
```
```
Bianca Rossi for movie: Quantum Heist
```
```
Mikhail Orlov for movie: Quantum Heist
```
```
Nolan Pierce for movie: Quantum Heist
```
```
Grace Okafor for movie: Quantum Heist
```

| Failed Years | 
|---| 
```
Rental year: 2015 < Release year: 2017
```

# Generation 15
```
!new Client('cA')
!cA.clientId := 1201
!cA.isSuspended := false

!new Client('cB')
!cB.clientId := 1202
!cB.isSuspended := false

!new Client('cC')
!cC.clientId := 1203
!cC.isSuspended := true

!new Client('cD')
!cD.clientId := 1204
!cD.isSuspended := false

!new Client('cE')
!cE.clientId := 1205
!cE.isSuspended := true

!new Client('cF')
!cF.clientId := 1206
!cF.isSuspended := false

!new Actor('actCore')
!actCore.name := 'Morgan Ellis'

!new Actor('actGuest1')
!actGuest1.name := 'Sora Nishimura'

!new Actor('actGuest2')
!actGuest2.name := 'Amir Haddad'

!new Actor('actGuest3')
!actGuest3.name := 'Valentina Rojas'

!new Movie('mvX')
!mvX.title := 'Neon Resolve'
!mvX.availableCopies := 0
!mvX.genre := #Action

!new Movie('mvY')
!mvY.title := 'The Spare Key'
!mvY.availableCopies := 6
!mvY.genre := #Comedy

!new Series('srX')
!srX.title := 'Clockwork Harbor'
!srX.availableCopies := 2
!srX.episode := 16

!new Series('srY')
!srY.title := 'Clockwork Harbor'
!srY.availableCopies := 2
!srY.episode := 17

!insert (mvX, actCore) into CassetteActor
!insert (mvX, actGuest1) into CassetteActor

!insert (mvY, actCore) into CassetteActor

!insert (srX, actCore) into CassetteActor
!insert (srX, actGuest2) into CassetteActor

!insert (srY, actCore) into CassetteActor
!insert (srY, actGuest3) into CassetteActor

!new Rental('rOnly1')
!rOnly1.date := Date('2014-02-28')
!insert (cD, rOnly1) into ClientRental
!insert (rOnly1, mvX) into RentalCassette
```
## Generation 15 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 53 | 0.00% |
| Multiplicities Errors | 0 | 9 | 0.00% |
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
The Spare Key
```
```
Clockwork Harbor
```
```
Clockwork Harbor
```
```
Neon Resolve
```

# Generation 16
```
!new Client('tc1')
!tc1.clientId := 1301
!tc1.isSuspended := false

!new Client('tc2')
!tc2.clientId := 1302
!tc2.isSuspended := false

!new Client('tc3')
!tc3.clientId := 1303
!tc3.isSuspended := true

!new Client('tc4')
!tc4.clientId := 1304
!tc4.isSuspended := false

!new Actor('ta1')
!ta1.name := 'Rohan Desai'

!new Actor('ta2')
!ta2.name := 'Elise Fournier'

!new Actor('ta3')
!ta3.name := 'Mateo Silva'

!new Actor('ta4')
!ta4.name := 'Greta Holm'

!new Actor('ta5')
!ta5.name := 'Jun Park'

!new Movie('tm1')
!tm1.title := 'Crosswind Directive'
!tm1.availableCopies := 3
!tm1.genre := #Action

!new Movie('tm2')
!tm2.title := 'Family Elevator'
!tm2.availableCopies := 0
!tm2.genre := #Comedy

!new Series('ts1')
!ts1.title := 'City Workshop'
!ts1.availableCopies := 2
!ts1.episode := 101

!new Series('ts2')
!ts2.title := 'City Workshop'
!ts2.availableCopies := 2
!ts2.episode := 102

!new Series('ts3')
!ts3.title := 'Hidden Recipes'
!ts3.availableCopies := 5
!ts3.episode := 1

!new Series('ts4')
!ts4.title := 'Hidden Recipes'
!ts4.availableCopies := 5
!ts4.episode := 2

!insert (tm1, ta1) into CassetteActor
!insert (tm1, ta2) into CassetteActor
!insert (tm1, ta5) into CassetteActor

!insert (tm2, ta1) into CassetteActor
!insert (tm2, ta3) into CassetteActor

!insert (ts1, ta1) into CassetteActor
!insert (ts1, ta4) into CassetteActor

!insert (ts2, ta1) into CassetteActor
!insert (ts2, ta4) into CassetteActor
!insert (ts2, ta5) into CassetteActor

!insert (ts3, ta1) into CassetteActor
!insert (ts3, ta2) into CassetteActor
!insert (ts3, ta3) into CassetteActor

!insert (ts4, ta1) into CassetteActor
!insert (ts4, ta2) into CassetteActor

!new Rental('tr1')
!tr1.date := Date('2012-10-06')
!insert (tc2, tr1) into ClientRental
!insert (tr1, tm1) into RentalCassette
!insert (tr1, ts1) into RentalCassette
!insert (tr1, ts3) into RentalCassette

!new Rental('tr2')
!tr2.date := Date('2012-10-20')
!insert (tc2, tr2) into ClientRental
!insert (tr2, tm2) into RentalCassette
```
## Generation 16 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 71 | 0.00% |
| Multiplicities Errors | 0 | 21 | 0.00% |
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
City Workshop
```
```
City Workshop
```
```
Hidden Recipes
```
```
Hidden Recipes
```
```
Family Elevator
```
```
Crosswind Directive
```

# Generation 17
```
!new Client('xClient1')
!xClient1.clientId := 1401
!xClient1.isSuspended := false

!new Client('xClient2')
!xClient2.clientId := 1402
!xClient2.isSuspended := true

!new Client('xClient3')
!xClient3.clientId := 1403
!xClient3.isSuspended := false

!new Client('xClient4')
!xClient4.clientId := 1404
!xClient4.isSuspended := false

!new Cassette('xTape1')
!xTape1.title := 'Nature Documentary: Rainforests'
!xTape1.availableCopies := 2

!new Cassette('xTape2')
!xTape2.title := 'Concert Recording: Live at Orion Hall'
!xTape2.availableCopies := 0

!new Movie('xMovie1')
!xMovie1.title := 'Checkpoint Zero'
!xMovie1.availableCopies := 1
!xMovie1.genre := #Action

!new Series('xSeries1')
!xSeries1.title := 'Weekend Bakers'
!xSeries1.availableCopies := 3
!xSeries1.episode := 4

!new Series('xSeries2')
!xSeries2.title := 'Weekend Bakers'
!xSeries2.availableCopies := 3
!xSeries2.episode := 5

!new Actor('xActor1')
!xActor1.name := 'Tessa Morgan'

!new Actor('xActor2')
!xActor2.name := 'Hiro Tan'

!new Actor('xActor3')
!xActor3.name := 'Gabriel Stone'

!new Actor('xActor4')
!xActor4.name := 'Nina Kovacs'

!new Actor('xActor5')
!xActor5.name := 'Ethan Lowell'

!new Actor('xActor6')
!xActor6.name := 'Salma Idris'

!new Actor('xActor7')
!xActor7.name := 'Jonah Pierce'

!new Actor('xActorUnused')
!xActorUnused.name := 'Marceline Dupont'

!insert (xTape1, xActor6) into CassetteActor
!insert (xTape2, xActor7) into CassetteActor

!insert (xMovie1, xActor1) into CassetteActor
!insert (xMovie1, xActor2) into CassetteActor
!insert (xMovie1, xActor3) into CassetteActor

!insert (xSeries1, xActor4) into CassetteActor
!insert (xSeries1, xActor5) into CassetteActor

!insert (xSeries2, xActor4) into CassetteActor

!new Rental('xRental1')
!xRental1.date := Date('2011-08-09')
!insert (xClient2, xRental1) into ClientRental
!insert (xRental1, xTape2) into RentalCassette

!new Rental('xRental2')
!xRental2.date := Date('2011-08-11')
!insert (xClient2, xRental2) into ClientRental
!insert (xRental2, xMovie1) into RentalCassette
```
## Generation 17 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 62 | 0.00% |
| Multiplicities Errors | 0 | 12 | 0.00% |
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
Weekend Bakers
```
```
Weekend Bakers
```
```
Checkpoint Zero
```

# Generation 18
```
!new Client('rC1')
!rC1.clientId := 1501
!rC1.isSuspended := false

!new Client('rC2')
!rC2.clientId := 1502
!rC2.isSuspended := false

!new Client('rC3')
!rC3.clientId := 1503
!rC3.isSuspended := true

!new Cassette('rTape1')
!rTape1.title := 'Yoga Basics: Beginner Session'
!rTape1.availableCopies := 15

!new Cassette('rTape2')
!rTape2.title := 'Cooking Masterclass: Sauces'
!rTape2.availableCopies := 0

!new Movie('rMov1')
!rMov1.title := 'Riot Highway'
!rMov1.availableCopies := 1
!rMov1.genre := #Action

!new Series('rSer1')
!rSer1.title := 'Mini Mysteries'
!rSer1.availableCopies := 2
!rSer1.episode := 25

!new Actor('rA1')
!rA1.name := 'Joanne Fields'

!new Actor('rA2')
!rA2.name := 'Khalid Mercer'

!new Actor('rA3')
!rA3.name := 'Irene Voss'

!insert (rTape1, rA1) into CassetteActor
!insert (rTape1, rA2) into CassetteActor

!insert (rTape2, rA3) into CassetteActor

!insert (rMov1, rA2) into CassetteActor
!insert (rMov1, rA3) into CassetteActor

!insert (rSer1, rA1) into CassetteActor
!insert (rSer1, rA3) into CassetteActor

!new Rental('rR1')
!rR1.date := Date('2009-04-03')
!insert (rC1, rR1) into ClientRental
!insert (rR1, rTape1) into RentalCassette

!new Rental('rR2')
!rR2.date := Date('2009-04-10')
!insert (rC1, rR2) into ClientRental
!insert (rR2, rTape1) into RentalCassette
!insert (rR2, rTape2) into RentalCassette

!new Rental('rR3')
!rR3.date := Date('2009-05-02')
!insert (rC1, rR3) into ClientRental
!insert (rR3, rMov1) into RentalCassette
!insert (rR3, rTape2) into RentalCassette

!new Rental('rR4')
!rR4.date := Date('2009-06-14')
!insert (rC2, rR4) into ClientRental
!insert (rR4, rSer1) into RentalCassette
!insert (rR4, rTape1) into RentalCassette

!new Rental('rR5')
!rR5.date := Date('2009-06-21')
!insert (rC3, rR5) into ClientRental
!insert (rR5, rTape1) into RentalCassette
!insert (rR5, rSer1) into RentalCassette

!new Rental('rR6')
!rR6.date := Date('2009-07-01')
!insert (rC3, rR6) into ClientRental
!insert (rR6, rTape1) into RentalCassette
```
## Generation 18 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 64 | 0.00% |
| Multiplicities Errors | 0 | 23 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 1 | 2 | 50.00% |
| Types (out of valid Titles) | 0 | 1 | 0.00% |
| Genres (out of valid Titles) | 0 | 0 | 0.00% |
| Actors (out of valid Titles) | 2 | 2 | 100.00% |
| Release year > Rental year (out of valid Titles) | 0 | 1 | 0.00% |

| Failed Titles | 
|---| 
```
Riot Highway
```

| Failed Actors | 
|---| 
```
Joanne Fields for movie: Mini Mysteries
```
```
Irene Voss for movie: Mini Mysteries
```

# Generation 19
```
!new Client('mC1')
!mC1.clientId := 1601
!mC1.isSuspended := true

!new Client('mC2')
!mC2.clientId := 1602
!mC2.isSuspended := false

!new Cassette('mTapeA')
!mTapeA.title := 'Home Repair: Plumbing Essentials'
!mTapeA.availableCopies := 3

!new Cassette('mTapeB')
!mTapeB.title := 'Language Course: Intro to Italian'
!mTapeB.availableCopies := 0

!new Movie('mMovieA')
!mMovieA.title := 'Steel Harbor Raid'
!mMovieA.availableCopies := 2
!mMovieA.genre := #Action

!new Series('mSeriesA1')
!mSeriesA1.title := 'Comedy Nights'
!mSeriesA1.availableCopies := 1
!mSeriesA1.episode := 1

!new Series('mSeriesA2')
!mSeriesA2.title := 'Comedy Nights'
!mSeriesA2.availableCopies := 1
!mSeriesA2.episode := 2

!new Series('mSeriesB1')
!mSeriesB1.title := 'Arctic Dispatch'
!mSeriesB1.availableCopies := 5
!mSeriesB1.episode := 10

!new Actor('mAct1')
!mAct1.name := 'Riley Chen'

!new Actor('mAct2')
!mAct2.name := 'Svetlana Morozova'

!new Actor('mAct3')
!mAct3.name := 'Diego Marin'

!new Actor('mAct4')
!mAct4.name := 'Hannah Okoye'

!new Actor('mActUnused')
!mActUnused.name := 'George Ivers'

!insert (mTapeA, mAct4) into CassetteActor
!insert (mTapeB, mAct1) into CassetteActor

!insert (mMovieA, mAct2) into CassetteActor
!insert (mMovieA, mAct3) into CassetteActor

!insert (mSeriesA1, mAct1) into CassetteActor
!insert (mSeriesA1, mAct3) into CassetteActor

!insert (mSeriesA2, mAct1) into CassetteActor

!insert (mSeriesB1, mAct2) into CassetteActor

!new Rental('mR1')
!mR1.date := Date('2004-01-17')
!insert (mC2, mR1) into ClientRental
!insert (mR1, mTapeA) into RentalCassette
!insert (mR1, mTapeB) into RentalCassette
!insert (mR1, mMovieA) into RentalCassette
!insert (mR1, mSeriesA1) into RentalCassette
!insert (mR1, mSeriesA2) into RentalCassette

!new Rental('mR2')
!mR2.date := Date('2004-02-03')
!insert (mC1, mR2) into ClientRental
!insert (mR2, mSeriesB1) into RentalCassette
```
## Generation 19 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 58 | 0.00% |
| Multiplicities Errors | 0 | 16 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 2 | 4 | 50.00% |
| Types (out of valid Titles) | 0 | 2 | 0.00% |
| Genres (out of valid Titles) | 0 | 0 | 0.00% |
| Actors (out of valid Titles) | 3 | 3 | 100.00% |
| Release year > Rental year (out of valid Titles) | 2 | 2 | 100.00% |

| Failed Titles | 
|---| 
```
Steel Harbor Raid
```
```
Arctic Dispatch
```

| Failed Actors | 
|---| 
```
Riley Chen for movie: Comedy Nights
```
```
Riley Chen for movie: Comedy Nights
```
```
Diego Marin for movie: Comedy Nights
```

| Failed Years | 
|---| 
```
Rental year: 2004 < Release year: 2022
```
```
Rental year: 2004 < Release year: 2022
```

# Generation 20
```
!new Client('hC1')
!hC1.clientId := 1701
!hC1.isSuspended := false

!new Client('hC2')
!hC2.clientId := 1702
!hC2.isSuspended := false

!new Client('hC3')
!hC3.clientId := 1703
!hC3.isSuspended := true

!new Client('hC4')
!hC4.clientId := 1704
!hC4.isSuspended := false

!new Client('hC5')
!hC5.clientId := 1705
!hC5.isSuspended := true

!new Actor('hA1')
!hA1.name := 'Camille Hart'

!new Actor('hA2')
!hA2.name := 'Noel Ramirez'

!new Actor('hA3')
!hA3.name := 'Sanjay Kapoor'

!new Actor('hA4')
!hA4.name := 'Marta Nowicka'

!new Actor('hA5')
!hA5.name := 'Evan Sinclair'

!new Cassette('hTape1')
!hTape1.title := 'Workout Mix: Cardio Classics'
!hTape1.availableCopies := 8

!new Cassette('hTape2')
!hTape2.title := 'Travel Guide: Islands of the North'
!hTape2.availableCopies := 0

!new Movie('hMov1')
!hMov1.title := 'Signal Breaker'
!hMov1.availableCopies := 2
!hMov1.genre := #Action

!new Series('hSer1')
!hSer1.title := 'The Short Detectives'
!hSer1.availableCopies := 1
!hSer1.episode := 55

!insert (hTape1, hA1) into CassetteActor
!insert (hTape1, hA2) into CassetteActor
!insert (hTape1, hA3) into CassetteActor

!insert (hTape2, hA2) into CassetteActor

!insert (hMov1, hA1) into CassetteActor
!insert (hMov1, hA2) into CassetteActor
!insert (hMov1, hA4) into CassetteActor
!insert (hMov1, hA5) into CassetteActor

!insert (hSer1, hA1) into CassetteActor
!insert (hSer1, hA3) into CassetteActor

!new Rental('hR1')
!hR1.date := Date('2001-12-24')
!insert (hC1, hR1) into ClientRental
!insert (hR1, hTape1) into RentalCassette
!insert (hR1, hTape2) into RentalCassette
!insert (hR1, hMov1) into RentalCassette
!insert (hR1, hSer1) into RentalCassette

!new Rental('hR2')
!hR2.date := Date('2002-01-02')
!insert (hC1, hR2) into ClientRental
!insert (hR2, hTape1) into RentalCassette
```
## Generation 20 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 60 | 0.00% |
| Multiplicities Errors | 0 | 17 | 0.00% |
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
The Short Detectives
```
```
Signal Breaker
```

# Generation 21
```
!new Client('v17_c1')
!v17_c1.clientId := 1801
!v17_c1.isSuspended := false

!new Client('v17_c2')
!v17_c2.clientId := 1802
!v17_c2.isSuspended := false

!new Client('v17_c3')
!v17_c3.clientId := 1803
!v17_c3.isSuspended := true

!new Client('v17_c4')
!v17_c4.clientId := 1804
!v17_c4.isSuspended := false

!new Actor('v17_a1')
!v17_a1.name := 'Dana Whitaker'

!new Actor('v17_a2')
!v17_a2.name := 'Ken Okamoto'

!new Actor('v17_a3')
!v17_a3.name := 'Laila Ben-Salem'

!new Cassette('v17_t1')
!v17_t1.title := 'Beginner Guitar: Chords and Rhythm'
!v17_t1.availableCopies := 6

!new Cassette('v17_t2')
!v17_t2.title := 'Classic Aerobics 1993'
!v17_t2.availableCopies := 0

!new Cassette('v17_t3')
!v17_t3.title := 'Wildlife Special: Desert Predators'
!v17_t3.availableCopies := 2

!new Cassette('v17_t4')
!v17_t4.title := 'Intro to Cooking: Knife Skills'
!v17_t4.availableCopies := 1

!new Cassette('v17_t5')
!v17_t5.title := 'Language Lab: Everyday Spanish'
!v17_t5.availableCopies := 4

!insert (v17_t1, v17_a1) into CassetteActor
!insert (v17_t1, v17_a2) into CassetteActor

!insert (v17_t2, v17_a3) into CassetteActor

!insert (v17_t3, v17_a1) into CassetteActor
!insert (v17_t3, v17_a3) into CassetteActor

!insert (v17_t4, v17_a2) into CassetteActor

!insert (v17_t5, v17_a1) into CassetteActor

!new Rental('v17_r1')
!v17_r1.date := Date('2007-03-02')
!insert (v17_c1, v17_r1) into ClientRental
!insert (v17_r1, v17_t1) into RentalCassette
!insert (v17_r1, v17_t3) into RentalCassette

!new Rental('v17_r2')
!v17_r2.date := Date('2007-03-09')
!insert (v17_c1, v17_r2) into ClientRental
!insert (v17_r2, v17_t4) into RentalCassette
!insert (v17_r2, v17_t5) into RentalCassette

!new Rental('v17_r3')
!v17_r3.date := Date('2007-03-16')
!insert (v17_c1, v17_r3) into ClientRental
!insert (v17_r3, v17_t1) into RentalCassette
!insert (v17_r3, v17_t4) into RentalCassette
!insert (v17_r3, v17_t5) into RentalCassette

!new Rental('v17_r4')
!v17_r4.date := Date('2007-04-01')
!insert (v17_c4, v17_r4) into ClientRental
!insert (v17_r4, v17_t2) into RentalCassette
```
## Generation 21 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 60 | 0.00% |
| Multiplicities Errors | 0 | 19 | 0.00% |
| Invariants Errors | 0 | 3 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 0 | 0 | 0.00% |
| Types (out of valid Titles) | 0 | 0 | 0.00% |
| Genres (out of valid Titles) | 0 | 0 | 0.00% |
| Actors (out of valid Titles) | 0 | 0 | 0.00% |
| Release year > Rental year (out of valid Titles) | 0 | 0 | 0.00% |

# Generation 22
```
!new Client('pC1')
!pC1.clientId := 1901
!pC1.isSuspended := false

!new Client('pC2')
!pC2.clientId := 1902
!pC2.isSuspended := true

!new Client('pC3')
!pC3.clientId := 1903
!pC3.isSuspended := false

!new Client('pC4')
!pC4.clientId := 1904
!pC4.isSuspended := false

!new Client('pC5')
!pC5.clientId := 1905
!pC5.isSuspended := true

!new Actor('pA1')
!pA1.name := 'Helena Ward'

!new Actor('pA2')
!pA2.name := 'Tomas Ibarra'

!new Actor('pA3')
!pA3.name := 'Maya Ritchie'

!new Actor('pA4')
!pA4.name := 'Oleg Sokolov'

!new Actor('pA5')
!pA5.name := 'Linnea Strand'

!new Cassette('pT1')
!pT1.title := 'Chess Tactics: Intermediate'
!pT1.availableCopies := 9

!new Cassette('pT2')
!pT2.title := 'Meditation Guide: Evening Wind-Down'
!pT2.availableCopies := 0

!new Cassette('pT3')
!pT3.title := 'Home Studio: Recording Basics'
!pT3.availableCopies := 2

!new Movie('pM1')
!pM1.title := 'Redline Junction'
!pM1.availableCopies := 1
!pM1.genre := #Action

!new Series('pS1')
!pS1.title := 'Courtroom Sketches'
!pS1.availableCopies := 4
!pS1.episode := 20

!new Series('pS2')
!pS2.title := 'Courtroom Sketches'
!pS2.availableCopies := 4
!pS2.episode := 21

!insert (pT1, pA5) into CassetteActor

!insert (pT2, pA1) into CassetteActor
!insert (pT2, pA3) into CassetteActor

!insert (pT3, pA2) into CassetteActor

!insert (pM1, pA2) into CassetteActor
!insert (pM1, pA4) into CassetteActor

!insert (pS1, pA1) into CassetteActor
!insert (pS1, pA4) into CassetteActor

!insert (pS2, pA1) into CassetteActor

!new Rental('pR1')
!pR1.date := Date('1998-11-07')
!insert (pC2, pR1) into ClientRental
!insert (pR1, pT2) into RentalCassette

!new Rental('pR2')
!pR2.date := Date('1998-11-21')
!insert (pC1, pR2) into ClientRental
!insert (pR2, pT1) into RentalCassette
!insert (pR2, pT3) into RentalCassette
!insert (pR2, pM1) into RentalCassette
!insert (pR2, pS2) into RentalCassette
```
## Generation 22 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 66 | 0.00% |
| Multiplicities Errors | 0 | 16 | 0.00% |
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
Redline Junction
```
```
Courtroom Sketches
```
```
Courtroom Sketches
```

# Generation 23
```
!new Client('n1')
!n1.clientId := 2001
!n1.isSuspended := false

!new Client('n2')
!n2.clientId := 2002
!n2.isSuspended := false

!new Client('n3')
!n3.clientId := 2003
!n3.isSuspended := true

!new Client('n4')
!n4.clientId := 2004
!n4.isSuspended := false

!new Client('n5')
!n5.clientId := 2005
!n5.isSuspended := true

!new Actor('na_common')
!na_common.name := 'Rowan Blake'

!new Actor('na1')
!na1.name := 'Keira Santos'

!new Actor('na2')
!na2.name := 'Benedict Hsu'

!new Actor('na3')
!na3.name := 'Zara Al-Karim'

!new Actor('na4')
!na4.name := 'Milan Petric'

!new Actor('na5')
!na5.name := 'Anais Leroux'

!new Actor('na_unused')
!na_unused.name := 'Pavel Dragan'

!new Cassette('cDoc1')
!cDoc1.title := 'Deep Sea Survey Vol. 1'
!cDoc1.availableCopies := 11

!new Cassette('cDoc2')
!cDoc2.title := 'Beginner Photography Workshop'
!cDoc2.availableCopies := 0

!new Cassette('cMusic1')
!cMusic1.title := 'Jazz Night: Studio Session'
!cMusic1.availableCopies := 2

!new Movie('nMov1')
!nMov1.title := 'Terminal Horizon'
!nMov1.availableCopies := 0
!nMov1.genre := #Action

!new Movie('nMov2')
!nMov2.title := 'The Misplaced Invitation'
!nMov2.availableCopies := 5
!nMov2.genre := #Comedy

!new Series('nSer1')
!nSer1.title := 'Marathon Medics'
!nSer1.availableCopies := 1
!nSer1.episode := 1000

!insert (cDoc1, na_common) into CassetteActor
!insert (cDoc1, na1) into CassetteActor

!insert (cDoc2, na_common) into CassetteActor

!insert (cMusic1, na_common) into CassetteActor
!insert (cMusic1, na2) into CassetteActor
!insert (cMusic1, na3) into CassetteActor

!insert (nMov1, na_common) into CassetteActor
!insert (nMov1, na4) into CassetteActor

!insert (nMov2, na_common) into CassetteActor
!insert (nMov2, na5) into CassetteActor

!insert (nSer1, na_common) into CassetteActor
!insert (nSer1, na3) into CassetteActor

!new Rental('nR1')
!nR1.date := Date('1995-01-12')
!insert (n2, nR1) into ClientRental
!insert (nR1, cDoc1) into RentalCassette

!new Rental('nR2')
!nR2.date := Date('1995-01-13')
!insert (n2, nR2) into ClientRental
!insert (nR2, nMov2) into RentalCassette

!new Rental('nR3')
!nR3.date := Date('1995-02-01')
!insert (n4, nR3) into ClientRental
!insert (nR3, nSer1) into RentalCassette

!new Rental('nR4')
!nR4.date := Date('1995-02-02')
!insert (n4, nR4) into ClientRental
!insert (nR4, cMusic1) into RentalCassette

!new Rental('nR5')
!nR5.date := Date('1995-02-03')
!insert (n4, nR5) into ClientRental
!insert (nR5, cDoc1) into RentalCassette
!insert (nR5, nMov1) into RentalCassette
```
## Generation 23 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 83 | 0.00% |
| Multiplicities Errors | 0 | 23 | 0.00% |
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
Marathon Medics
```
```
Terminal Horizon
```
```
The Misplaced Invitation
```

# Generation 24
```
!new Client('nrC1')
!nrC1.clientId := 2101
!nrC1.isSuspended := false

!new Client('nrC2')
!nrC2.clientId := 2102
!nrC2.isSuspended := true

!new Client('nrC3')
!nrC3.clientId := 2103
!nrC3.isSuspended := false

!new Cassette('nrT1')
!nrT1.title := 'Woodworking Basics: Hand Tools'
!nrT1.availableCopies := 4

!new Cassette('nrT2')
!nrT2.title := 'Documentary: Volcano Watch'
!nrT2.availableCopies := 0

!new Series('nrS1')
!nrS1.title := 'Library Mysteries'
!nrS1.availableCopies := 2
!nrS1.episode := 1

!new Series('nrS2')
!nrS2.title := 'Library Mysteries'
!nrS2.availableCopies := 2
!nrS2.episode := 2

!new Actor('nrA1')
!nrA1.name := 'Bianca Huang'

!new Actor('nrA2')
!nrA2.name := 'Owen Price'

!new Actor('nrA3')
!nrA3.name := 'Samir Qureshi'

!new Actor('nrA4')
!nrA4.name := 'Clara Nordin'

!new Actor('nrA5')
!nrA5.name := 'Felix Adeyemi'

!new Actor('nrA6')
!nrA6.name := 'Yara Haddad'

!insert (nrT1, nrA2) into CassetteActor
!insert (nrT1, nrA4) into CassetteActor

!insert (nrT2, nrA5) into CassetteActor

!insert (nrS1, nrA1) into CassetteActor
!insert (nrS1, nrA3) into CassetteActor
!insert (nrS1, nrA6) into CassetteActor

!insert (nrS2, nrA1) into CassetteActor
!insert (nrS2, nrA6) into CassetteActor
```
## Generation 24 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 43 | 0.00% |
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
Library Mysteries
```
```
Library Mysteries
```

# Generation 25
```
!new Client('zzClient1')
!zzClient1.clientId := 2201
!zzClient1.isSuspended := false

!new Client('zzClient2')
!zzClient2.clientId := 2202
!zzClient2.isSuspended := true

!new Client('zzClient3')
!zzClient3.clientId := 2203
!zzClient3.isSuspended := false

!new Actor('zzActor1')
!zzActor1.name := 'Nikolai Jensen'

!new Actor('zzActor2')
!zzActor2.name := 'Priyanka Mehra'

!new Actor('zzActor3')
!zzActor3.name := 'Cesar Dominguez'

!new Actor('zzActor4')
!zzActor4.name := 'Anya Volante'

!new Actor('zzActor5')
!zzActor5.name := 'Miriam Osei'

!new Actor('zzActor6')
!zzActor6.name := 'Cole Harrington'

!new Actor('zzActorUnused')
!zzActorUnused.name := 'Sven Larsson'

!new Cassette('zzTape1')
!zzTape1.title := 'First Aid Essentials (Training Tape)'
!zzTape1.availableCopies := 20

!new Movie('zzMovie1')
!zzMovie1.title := 'Shadow Corridor'
!zzMovie1.availableCopies := 1
!zzMovie1.genre := #Action

!new Series('zzSeries1')
!zzSeries1.title := 'Museum Curators'
!zzSeries1.availableCopies := 0
!zzSeries1.episode := 6

!new Series('zzSeries2')
!zzSeries2.title := 'Museum Curators'
!zzSeries2.availableCopies := 0
!zzSeries2.episode := 7

!insert (zzTape1, zzActor5) into CassetteActor

!insert (zzMovie1, zzActor1) into CassetteActor
!insert (zzMovie1, zzActor2) into CassetteActor
!insert (zzMovie1, zzActor3) into CassetteActor

!insert (zzSeries1, zzActor4) into CassetteActor
!insert (zzSeries1, zzActor5) into CassetteActor

!insert (zzSeries2, zzActor4) into CassetteActor
!insert (zzSeries2, zzActor6) into CassetteActor

!new Rental('zzRental1')
!zzRental1.date := Date('2010-12-01')
!insert (zzClient1, zzRental1) into ClientRental
!insert (zzRental1, zzTape1) into RentalCassette
!insert (zzRental1, zzSeries1) into RentalCassette
!insert (zzRental1, zzMovie1) into RentalCassette

!new Rental('zzRental2')
!zzRental2.date := Date('2010-12-15')
!insert (zzClient1, zzRental2) into ClientRental
!insert (zzRental2, zzSeries2) into RentalCassette

!new Rental('zzRental3')
!zzRental3.date := Date('2011-01-05')
!insert (zzClient2, zzRental3) into ClientRental
!insert (zzRental3, zzMovie1) into RentalCassette
!insert (zzRental3, zzSeries2) into RentalCassette
```
## Generation 25 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 61 | 0.00% |
| Multiplicities Errors | 0 | 17 | 0.00% |
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
Shadow Corridor
```
```
Museum Curators
```
```
Museum Curators
```

# Generation 26
```
!new Client('altC1')
!altC1.clientId := 2301
!altC1.isSuspended := false

!new Client('altC2')
!altC2.clientId := 2302
!altC2.isSuspended := false

!new Client('altC3')
!altC3.clientId := 2303
!altC3.isSuspended := true

!new Client('altC4')
!altC4.clientId := 2304
!altC4.isSuspended := false

!new Actor('altA1')
!altA1.name := 'Juno Carlisle'

!new Actor('altA2')
!altA2.name := 'Mateusz Krol'

!new Actor('altA3')
!altA3.name := 'Farida Nouri'

!new Actor('altA4')
!altA4.name := 'Elliot Barron'

!new Cassette('altTape1')
!altTape1.title := 'Public Speaking: Confident Delivery'
!altTape1.availableCopies := 0

!new Movie('altMov1')
!altMov1.title := 'Crater Line'
!altMov1.availableCopies := 3
!altMov1.genre := #Action

!new Movie('altMov2')
!altMov2.title := 'The Unplanned Picnic'
!altMov2.availableCopies := 2
!altMov2.genre := #Comedy

!new Series('altSer1')
!altSer1.title := 'Harbor Dispatch'
!altSer1.availableCopies := 1
!altSer1.episode := 1

!new Series('altSer2')
!altSer2.title := 'Harbor Dispatch'
!altSer2.availableCopies := 1
!altSer2.episode := 2

!insert (altTape1, altA1) into CassetteActor

!insert (altMov1, altA1) into CassetteActor
!insert (altMov1, altA2) into CassetteActor
!insert (altMov1, altA3) into CassetteActor

!insert (altMov2, altA1) into CassetteActor
!insert (altMov2, altA4) into CassetteActor

!insert (altSer1, altA2) into CassetteActor
!insert (altSer1, altA3) into CassetteActor

!insert (altSer2, altA2) into CassetteActor

!new Rental('altR1')
!altR1.date := Date('1987-09-04')
!insert (altC1, altR1) into ClientRental
!insert (altR1, altTape1) into RentalCassette

!new Rental('altR2')
!altR2.date := Date('1987-09-06')
!insert (altC2, altR2) into ClientRental
!insert (altR2, altMov1) into RentalCassette
!insert (altR2, altSer1) into RentalCassette

!new Rental('altR3')
!altR3.date := Date('1987-10-01')
!insert (altC4, altR3) into ClientRental
!insert (altR3, altMov2) into RentalCassette
!insert (altR3, altSer1) into RentalCassette
!insert (altR3, altSer2) into RentalCassette
```
## Generation 26 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 63 | 0.00% |
| Multiplicities Errors | 0 | 18 | 0.00% |
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
The Unplanned Picnic
```
```
Crater Line
```
```
Harbor Dispatch
```
```
Harbor Dispatch
```

# Generation 27
```
!new Client('gC1')
!gC1.clientId := 2401
!gC1.isSuspended := false

!new Client('gC2')
!gC2.clientId := 2402
!gC2.isSuspended := true

!new Client('gC3')
!gC3.clientId := 2403
!gC3.isSuspended := false

!new Actor('gA1')
!gA1.name := 'Inez Caldwell'

!new Actor('gA2')
!gA2.name := 'Boris Tanic'

!new Actor('gA3')
!gA3.name := 'Salim Kader'

!new Actor('gA4')
!gA4.name := 'Norah Beck'

!new Actor('gA5')
!gA5.name := 'Tobin Reyes'

!new Actor('gAUnused')
!gAUnused.name := 'Helmut Varga'

!new Cassette('gT1')
!gT1.title := 'Stand-Up Showcase: Volume 2'
!gT1.availableCopies := 0

!new Cassette('gT2')
!gT2.title := 'History Lecture: Ancient Cities'
!gT2.availableCopies := 6

!new Movie('gM1')
!gM1.title := 'Firewall Pursuit'
!gM1.availableCopies := 2
!gM1.genre := #Action

!new Series('gS1')
!gS1.title := 'Pocket Chefs'
!gS1.availableCopies := 1
!gS1.episode := 9

!new Series('gS2')
!gS2.title := 'Pocket Chefs'
!gS2.availableCopies := 1
!gS2.episode := 10

!insert (gT1, gA4) into CassetteActor
!insert (gT1, gA5) into CassetteActor

!insert (gT2, gA1) into CassetteActor

!insert (gM1, gA2) into CassetteActor
!insert (gM1, gA3) into CassetteActor
!insert (gM1, gA5) into CassetteActor

!insert (gS1, gA1) into CassetteActor
!insert (gS1, gA4) into CassetteActor

!insert (gS2, gA1) into CassetteActor

!new Rental('gR1')
!gR1.date := Date('1992-02-20')
!insert (gC1, gR1) into ClientRental
!insert (gR1, gT2) into RentalCassette

!new Rental('gR2')
!gR2.date := Date('1992-02-27')
!insert (gC1, gR2) into ClientRental
!insert (gR2, gM1) into RentalCassette
!insert (gR2, gS1) into RentalCassette

!new Rental('gR3')
!gR3.date := Date('1992-03-05')
!insert (gC1, gR3) into ClientRental
!insert (gR3, gT1) into RentalCassette
!insert (gR3, gT2) into RentalCassette
!insert (gR3, gM1) into RentalCassette
!insert (gR3, gS1) into RentalCassette
!insert (gR3, gS2) into RentalCassette
```
## Generation 27 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 65 | 0.00% |
| Multiplicities Errors | 0 | 20 | 0.00% |
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
Pocket Chefs
```
```
Pocket Chefs
```
```
Firewall Pursuit
```

# Generation 28
```
!new Client('instC1')
!instC1.clientId := 2501
!instC1.isSuspended := false

!new Client('instC2')
!instC2.clientId := 2502
!instC2.isSuspended := false

!new Client('instC3')
!instC3.clientId := 2503
!instC3.isSuspended := true

!new Client('instC4')
!instC4.clientId := 2504
!instC4.isSuspended := false

!new Cassette('instTape1')
!instTape1.title := 'Science Today: Solar Storms'
!instTape1.availableCopies := 0

!new Cassette('instTape2')
!instTape2.title := 'Kids Workshop: Simple Experiments'
!instTape2.availableCopies := 7

!new Movie('instMovie1')
!instMovie1.title := 'Nightwatch Protocol'
!instMovie1.availableCopies := 2
!instMovie1.genre := #Action

!new Movie('instMovie2')
!instMovie2.title := 'The Lost Umbrella'
!instMovie2.availableCopies := 1
!instMovie2.genre := #Comedy

!new Series('instSeries1')
!instSeries1.title := 'Coastal Rescue Unit'
!instSeries1.availableCopies := 3
!instSeries1.episode := 1

!new Series('instSeries2')
!instSeries2.title := 'Coastal Rescue Unit'
!instSeries2.availableCopies := 3
!instSeries2.episode := 2

!new Actor('instA1')
!instA1.name := 'Stella Grayson'

!new Actor('instA2')
!instA2.name := 'Naveen Pillai'

!new Actor('instA3')
!instA3.name := 'Carlo Venturi'

!new Actor('instA4')
!instA4.name := 'Mina Jorgensen'

!new Actor('instA5')
!instA5.name := 'Jasper Cole'

!insert (instTape1, instA2) into CassetteActor
!insert (instTape1, instA4) into CassetteActor

!insert (instTape2, instA1) into CassetteActor

!insert (instMovie1, instA3) into CassetteActor
!insert (instMovie1, instA5) into CassetteActor

!insert (instMovie2, instA1) into CassetteActor
!insert (instMovie2, instA3) into CassetteActor

!insert (instSeries1, instA2) into CassetteActor
!insert (instSeries1, instA3) into CassetteActor
!insert (instSeries1, instA4) into CassetteActor

!insert (instSeries2, instA2) into CassetteActor
!insert (instSeries2, instA4) into CassetteActor

!new Rental('instR1')
!instR1.date := Date('1999-06-12')
!insert (instC1, instR1) into ClientRental
!insert (instR1, instTape2) into RentalCassette

!new Rental('instR2')
!instR2.date := Date('1999-06-19')
!insert (instC1, instR2) into ClientRental
!insert (instR2, instMovie1) into RentalCassette
!insert (instR2, instSeries1) into RentalCassette
!insert (instR2, instSeries2) into RentalCassette
!insert (instR2, instTape1) into RentalCassette

!new Rental('instR3')
!instR3.date := Date('1999-07-02')
!insert (instC2, instR3) into ClientRental
!insert (instR3, instMovie2) into RentalCassette
!insert (instR3, instTape2) into RentalCassette

!new Rental('instR4')
!instR4.date := Date('1999-07-03')
!insert (instC3, instR4) into ClientRental
!insert (instR4, instTape1) into RentalCassette
```
## Generation 28 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 76 | 0.00% |
| Multiplicities Errors | 0 | 24 | 0.00% |
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
Coastal Rescue Unit
```
```
Coastal Rescue Unit
```
```
The Lost Umbrella
```
```
Nightwatch Protocol
```

# Generation 29
```
!new Client('yC1')
!yC1.clientId := 2601
!yC1.isSuspended := true

!new Client('yC2')
!yC2.clientId := 2602
!yC2.isSuspended := false

!new Movie('yMovie1')
!yMovie1.title := 'Glacier Strike'
!yMovie1.availableCopies := 3
!yMovie1.genre := #Action

!new Series('ySeries1')
!ySeries1.title := 'Metro Laughs'
!ySeries1.availableCopies := 0
!ySeries1.episode := 1

!new Series('ySeries2')
!ySeries2.title := 'Metro Laughs'
!ySeries2.availableCopies := 0
!ySeries2.episode := 2

!new Series('ySeries3')
!ySeries3.title := 'Signal Room'
!ySeries3.availableCopies := 2
!ySeries3.episode := 9

!new Cassette('yTape1')
!yTape1.title := 'Training Tape: Customer Service Basics'
!yTape1.availableCopies := 12

!new Actor('yA1')
!yA1.name := 'Sibel Arman'

!new Actor('yA2')
!yA2.name := 'Grant Holloway'

!new Actor('yA3')
!yA3.name := 'Alina Popescu'

!new Actor('yA4')
!yA4.name := 'Mateo Kruger'

!insert (yMovie1, yA2) into CassetteActor
!insert (yMovie1, yA3) into CassetteActor
!insert (yMovie1, yA4) into CassetteActor

!insert (ySeries1, yA1) into CassetteActor
!insert (ySeries1, yA3) into CassetteActor

!insert (ySeries2, yA1) into CassetteActor

!insert (ySeries3, yA2) into CassetteActor
!insert (ySeries3, yA4) into CassetteActor

!insert (yTape1, yA1) into CassetteActor
!insert (yTape1, yA2) into CassetteActor
!insert (yTape1, yA3) into CassetteActor
!insert (yTape1, yA4) into CassetteActor

!new Rental('yR1')
!yR1.date := Date('2006-08-17')
!insert (yC2, yR1) into ClientRental
!insert (yR1, yTape1) into RentalCassette

!new Rental('yR2')
!yR2.date := Date('2006-08-18')
!insert (yC2, yR2) into ClientRental
!insert (yR2, ySeries1) into RentalCassette
!insert (yR2, ySeries2) into RentalCassette
!insert (yR2, ySeries3) into RentalCassette

!new Rental('yR3')
!yR3.date := Date('2006-08-19')
!insert (yC1, yR3) into ClientRental
!insert (yR3, yMovie1) into RentalCassette
!insert (yR3, yTape1) into RentalCassette
```
## Generation 29 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 60 | 0.00% |
| Multiplicities Errors | 0 | 21 | 0.00% |
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
Glacier Strike
```
```
Metro Laughs
```
```
Metro Laughs
```
```
Signal Room
```

# Generation 30
```
!new Client('sc1')
!sc1.clientId := 3001
!sc1.isSuspended := false

!new Client('sc2')
!sc2.clientId := 3002
!sc2.isSuspended := true

!new Client('sc3')
!sc3.clientId := 3003
!sc3.isSuspended := false

!new Client('sc4')
!sc4.clientId := 3004
!sc4.isSuspended := false

!new Client('sc5')
!sc5.clientId := 3005
!sc5.isSuspended := true

!new Client('sc6')
!sc6.clientId := 3006
!sc6.isSuspended := false

!new Cassette('tA')
!tA.title := 'How to Draw: Perspective Basics'
!tA.availableCopies := 2

!new Cassette('tB')
!tB.title := 'Beginner Coding: Algorithms on VHS'
!tB.availableCopies := 0

!new Movie('mA')
!mA.title := 'Harborline Assault'
!mA.availableCopies := 4
!mA.genre := #Action

!new Movie('mB')
!mB.title := 'The Accidental Roommate'
!mB.availableCopies := 1
!mB.genre := #Comedy

!new Series('sA')
!sA.title := 'Civic Hospital'
!sA.availableCopies := 3
!sA.episode := 5

!new Series('sB')
!sB.title := 'Civic Hospital'
!sB.availableCopies := 3
!sB.episode := 6

!new Series('sC')
!sC.title := 'Midtown Mechanics'
!sC.availableCopies := 1
!sC.episode := 1

!new Actor('sa1')
!sa1.name := 'Erin Wallace'

!new Actor('sa2')
!sa2.name := 'Jonas Miura'

!new Actor('sa3')
!sa3.name := 'Kofi Mensah'

!new Actor('sa4')
!sa4.name := 'Lucia Benitez'

!new Actor('sa5')
!sa5.name := 'Theo Gardner'

!new Actor('sa6')
!sa6.name := 'Nadia Kwon'

!new Actor('sa7')
!sa7.name := 'Priit Saar'

!new Actor('sa8')
!sa8.name := 'Elif Demir'

!insert (tA, sa7) into CassetteActor

!insert (tB, sa8) into CassetteActor
!insert (tB, sa6) into CassetteActor

!insert (mA, sa2) into CassetteActor
!insert (mA, sa3) into CassetteActor
!insert (mA, sa5) into CassetteActor

!insert (mB, sa1) into CassetteActor
!insert (mB, sa4) into CassetteActor

!insert (sA, sa1) into CassetteActor
!insert (sA, sa6) into CassetteActor

!insert (sB, sa1) into CassetteActor
!insert (sB, sa6) into CassetteActor
!insert (sB, sa5) into CassetteActor

!insert (sC, sa2) into CassetteActor

!new Rental('sr1')
!sr1.date := Date('2003-03-12')
!insert (sc1, sr1) into ClientRental
!insert (sr1, tA) into RentalCassette
!insert (sr1, mA) into RentalCassette

!new Rental('sr2')
!sr2.date := Date('2003-03-19')
!insert (sc1, sr2) into ClientRental
!insert (sr2, sA) into RentalCassette
!insert (sr2, sB) into RentalCassette
!insert (sr2, sC) into RentalCassette
!insert (sr2, mB) into RentalCassette
!insert (sr2, tB) into RentalCassette
```
## Generation 30 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 87 | 0.00% |
| Multiplicities Errors | 0 | 23 | 0.00% |
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
Civic Hospital
```
```
Civic Hospital
```
```
Midtown Mechanics
```
```
Harborline Assault
```
```
The Accidental Roommate
```

# Summary for all generations
| Summary | Value | 
|---|---| 
| Model | GPT_5_2 | 
| Type | Simple | 
| System | videoclub | 
| Number of generations | 30 | 

| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 1959 | 0.00% |
| Multiplicities Errors | 0 | 556 | 0.00% |
| Invariants Errors | 0 | 90 | 0.00% |

| Videoclub | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Titles | 101 | 124 | 81.45% |
| Types (out of valid Titles) | 10 | 23 | 43.48% |
| Genres (out of valid Titles) | 2 | 6 | 33.33% |
| Actors (out of valid Titles) | 38 | 39 | 97.44% |
| Release year > Rental year (out of valid Titles) | 4 | 23 | 17.39% |

| Failed Titles | 
|---| 
```
City Laughs
```
```
Detective Files
```
```
Detective Files
```
```
Frontier Worlds
```
```
Frontier Worlds
```
```
The Awkward Reunion
```
```
Steel Horizon
```
```
Quantum Street
```
```
Harbor Nights
```
```
Quantum Street
```
```
Rapid Pursuit
```
```
Weekend Mix-Up
```
```
Chronicles of Orion
```
```
Harbor Chase
```
```
Kitchen Stories
```
```
Mountain Clinic
```
```
Mountain Clinic
```
```
Desert Signal
```
```
Crimson Velocity
```
```
Cafe Confessions
```
```
River County
```
```
Deep Space Audit
```
```
Operation Black Tide
```
```
Laughing Under Pressure
```
```
Metro Patrol
```
```
The Neighborly Mistake
```
```
Paper Kingdom
```
```
Paper Kingdom
```
```
Blueprint Escape
```
```
Campus Days
```
```
Campus Days
```
```
Campus Days
```
```
Vault Protocol
```
```
Street Myths
```
```
Bake Lab
```
```
Bake Lab
```
```
Silent Uprising
```
```
Festival of Jokes
```
```
Roommates Forever
```
```
Iron Meridian
```
```
Slapstick Summer
```
```
Ocean Chronicles
```
```
Tiny House Tales
```
```
Ocean Chronicles
```
```
Algorithm Alley
```
```
Algorithm Alley
```
```
Bridge Over Ashes
```
```
Holiday Misread
```
```
Dinner for Strangers
```
```
Museum Shift
```
```
Desert Radio
```
```
Museum Shift
```
```
The Spare Key
```
```
Clockwork Harbor
```
```
Clockwork Harbor
```
```
Neon Resolve
```
```
City Workshop
```
```
City Workshop
```
```
Hidden Recipes
```
```
Hidden Recipes
```
```
Family Elevator
```
```
Crosswind Directive
```
```
Weekend Bakers
```
```
Weekend Bakers
```
```
Checkpoint Zero
```
```
Riot Highway
```
```
Steel Harbor Raid
```
```
Arctic Dispatch
```
```
The Short Detectives
```
```
Signal Breaker
```
```
Redline Junction
```
```
Courtroom Sketches
```
```
Courtroom Sketches
```
```
Marathon Medics
```
```
Terminal Horizon
```
```
The Misplaced Invitation
```
```
Library Mysteries
```
```
Library Mysteries
```
```
Shadow Corridor
```
```
Museum Curators
```
```
Museum Curators
```
```
The Unplanned Picnic
```
```
Crater Line
```
```
Harbor Dispatch
```
```
Harbor Dispatch
```
```
Pocket Chefs
```
```
Pocket Chefs
```
```
Firewall Pursuit
```
```
Coastal Rescue Unit
```
```
Coastal Rescue Unit
```
```
The Lost Umbrella
```
```
Nightwatch Protocol
```
```
Glacier Strike
```
```
Metro Laughs
```
```
Metro Laughs
```
```
Signal Room
```
```
Civic Hospital
```
```
Civic Hospital
```
```
Midtown Mechanics
```
```
Harborline Assault
```
```
The Accidental Roommate
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
Parsed type: series != API type: movie
```
```
Parsed type: series != API type: movie
```
```
Parsed type: series != API type: movie
```
```
Parsed type: series != API type: movie
```
```
Parsed type: series != API type: movie
```
```
Parsed type: series != API type: movie
```
```
Parsed type: series != API type: movie
```
```
Parsed type: series != API type: movie
```

| Failed Genres | 
|---| 
```
Parsed genre: Action != API genre: [Short]
```
```
Parsed genre: Action != API genre: [Adventure]
```

| Failed Actors | 
|---| 
```
Idris Elba for movie: Edge of Tomorrow
```
```
Tom Hardy for movie: Last Stand
```
```
Idris Elba for movie: Last Stand
```
```
Alicia Monroe for movie: Midnight Run
```
```
Daniel Wu for movie: Midnight Run
```
```
Nora King for movie: Signal Lost
```
```
Nora King for movie: Signal Lost
```
```
Priya Shah for movie: Signal Lost
```
```
Lena Moritz for movie: Northern Lights
```
```
Lena Moritz for movie: Northern Lights
```
```
Chloe Barrett for movie: Office Pranks
```
```
Hassan Ridley for movie: Night Ferry
```
```
Farah Iqbal for movie: Garden Secrets
```
```
Farah Iqbal for movie: Garden Secrets
```
```
Farah Iqbal for movie: Garden Secrets
```
```
Samira Vaughn for movie: After the Storm
```
```
Marcos Ibanez for movie: After the Storm
```
```
Hana Petrov for movie: After the Storm
```
```
Paul Richter for movie: The Long Winter
```
```
Paul Richter for movie: The Long Winter
```
```
Santiago Cruz for movie: The Long Winter
```
```
Ibrahim Saleh for movie: One Minute History
```
```
Jae-min Choi for movie: One Minute History
```
```
Patricia Yen for movie: The Archivist
```
```
Patricia Yen for movie: The Archivist
```
```
Patricia Yen for movie: The Archivist
```
```
George Mbeki for movie: The Archivist
```
```
Sienna Patel for movie: Quantum Heist
```
```
Arthur Kim for movie: Quantum Heist
```
```
Bianca Rossi for movie: Quantum Heist
```
```
Mikhail Orlov for movie: Quantum Heist
```
```
Nolan Pierce for movie: Quantum Heist
```
```
Grace Okafor for movie: Quantum Heist
```
```
Joanne Fields for movie: Mini Mysteries
```
```
Irene Voss for movie: Mini Mysteries
```
```
Riley Chen for movie: Comedy Nights
```
```
Riley Chen for movie: Comedy Nights
```
```
Diego Marin for movie: Comedy Nights
```

| Failed Years | 
|---| 
```
Rental year: 2022 < Release year: 2024
```
```
Rental year: 2015 < Release year: 2017
```
```
Rental year: 2004 < Release year: 2022
```
```
Rental year: 2004 < Release year: 2022
```

