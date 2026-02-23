# Generation 1
## Category baseline
```
!new Club('C9')
!C9.name := 'Harbour City FC'
!C9.homeGround := 'Docklands Sports Centre'
!C9.chairman := 'Eileen Gallagher'

!new Team('T9')
!T9.name := 'Harbour City Seniors'
!insert (C9, T9) into ClubTeam

!new Club('C10')
!C10.name := 'Atlético Sierra Club'
!C10.homeGround := 'Estadio La Cumbre'
!C10.chairman := 'Rafael Domínguez'

!new Team('T10')
!T10.name := 'Sierra Rovers'
!insert (C10, T10) into ClubTeam

!new Player('P14')
!P14.name := 'Aisling Byrne'
!P14.age := 24
!P14.bestFoot := #RIGHT
!P14.phoneNumber := '+353 87 555 0123'
!insert (T9, P14) into TeamPlayer

!new Position('POS20')
!POS20.positionName := #GOALKEEPER
!insert (P14, POS20) into PlayerPositions

!new Position('POS21')
!POS21.positionName := #DEFENDER
!insert (P14, POS21) into PlayerPositions

!new TrainingObjective('TO15')
!TO15.areaToImprove := 'Quicker distribution under press'
!TO15.startDate := '2026-01-15'
!TO15.endDate := '2026-02-15'
!TO15.success := true
!insert (TO15, P14) into TrainingObjectivePlayer

!new PlayerNotes('PN10')
!PN10.note := 'Strong communication; keep scanning before receiving back-pass.'
!PN10.date := '2026-02-01'
!insert (P14, PN10) into PlayerPlayerNotes

!new Player('P15')
!P15.name := 'Niall O’Connor'
!P15.age := 27
!P15.bestFoot := #LEFT
!P15.phoneNumber := '+353 86 410 7788'
!insert (T9, P15) into TeamPlayer

!new Position('POS22')
!POS22.positionName := #DEFENDER
!insert (P15, POS22) into PlayerPositions

!new Position('POS23')
!POS23.positionName := #MIDFIELDER
!insert (P15, POS23) into PlayerPositions

!new TrainingObjective('TO16')
!TO16.areaToImprove := 'Body shape when defending 1v1'
!TO16.startDate := '2026-01-20'
!TO16.endDate := '2026-02-20'
!TO16.success := false
!insert (TO16, P15) into TrainingObjectivePlayer

!new Player('P16')
!P16.name := 'Kofi Mensah'
!P16.age := 22
!P16.bestFoot := #BOTH
!P16.phoneNumber := '+353 89 230 4456'
!insert (T9, P16) into TeamPlayer

!new Position('POS24')
!POS24.positionName := #MIDFIELDER
!insert (P16, POS24) into PlayerPositions

!new Position('POS25')
!POS25.positionName := #FORWARD
!insert (P16, POS25) into PlayerPositions

!new Position('POS26')
!POS26.positionName := #DEFENDER
!insert (P16, POS26) into PlayerPositions

!new TrainingObjective('TO17')
!TO17.areaToImprove := 'First touch into space'
!TO17.startDate := '2026-01-10'
!TO17.endDate := '2026-02-10'
!TO17.success := true
!insert (TO17, P16) into TrainingObjectivePlayer

!new PlayerNotes('PN11')
!PN11.note := 'Excellent stamina; encourage earlier shots on counter.'
!PN11.date := '2026-02-03'
!insert (P16, PN11) into PlayerPlayerNotes

!new Player('P17')
!P17.name := 'Luka Petrović'
!P17.age := 25
!P17.bestFoot := #RIGHT
!P17.phoneNumber := '+353 85 991 2044'
!insert (T9, P17) into TeamPlayer

!new Position('POS27')
!POS27.positionName := #FORWARD
!insert (P17, POS27) into PlayerPositions

!new Position('POS28')
!POS28.positionName := #MIDFIELDER
!insert (P17, POS28) into PlayerPositions

!new TrainingObjective('TO18')
!TO18.areaToImprove := 'Finishing with weaker foot'
!TO18.startDate := '2026-01-18'
!TO18.endDate := '2026-02-18'
!TO18.success := false
!insert (TO18, P17) into TrainingObjectivePlayer

!new Player('P18')
!P18.name := 'Seán Murphy'
!P18.age := 30
!P18.bestFoot := #RIGHT
!P18.phoneNumber := '+353 87 700 9981'
!insert (T9, P18) into TeamPlayer

!new Position('POS29')
!POS29.positionName := #DEFENDER
!insert (P18, POS29) into PlayerPositions

!new TrainingObjective('TO19')
!TO19.areaToImprove := 'Timing of tackles (avoid fouls)'
!TO19.startDate := '2026-01-12'
!TO19.endDate := '2026-02-12'
!TO19.success := true
!insert (TO19, P18) into TrainingObjectivePlayer

!new Player('P19')
!P19.name := 'Mariana López'
!P19.age := 23
!P19.bestFoot := #LEFT
!P19.phoneNumber := '+52 55 3011 7782'
!insert (T10, P19) into TeamPlayer

!new Position('POS30')
!POS30.positionName := #GOALKEEPER
!insert (P19, POS30) into PlayerPositions

!new Position('POS31')
!POS31.positionName := #DEFENDER
!insert (P19, POS31) into PlayerPositions

!new TrainingObjective('TO20')
!TO20.areaToImprove := 'Handling low shots'
!TO20.startDate := '2026-01-16'
!TO20.endDate := '2026-02-16'
!TO20.success := true
!insert (TO20, P19) into TrainingObjectivePlayer

!new Player('P20')
!P20.name := 'Diego Hernández'
!P20.age := 26
!P20.bestFoot := #RIGHT
!P20.phoneNumber := '+52 55 7770 1144'
!insert (T10, P20) into TeamPlayer

!new Position('POS32')
!POS32.positionName := #FORWARD
!insert (P20, POS32) into PlayerPositions

!new Position('POS33')
!POS33.positionName := #MIDFIELDER
!insert (P20, POS33) into PlayerPositions

!new TrainingObjective('TO21')
!TO21.areaToImprove := 'Shot selection under pressure'
!TO21.startDate := '2026-01-14'
!TO21.endDate := '2026-02-14'
!TO21.success := true
!insert (TO21, P20) into TrainingObjectivePlayer

!new Player('P21')
!P21.name := 'Tomás Álvarez'
!P21.age := 21
!P21.bestFoot := #BOTH
!P21.phoneNumber := '+52 81 2200 6671'
!insert (T10, P21) into TeamPlayer

!new Position('POS34')
!POS34.positionName := #MIDFIELDER
!insert (P21, POS34) into PlayerPositions

!new Position('POS35')
!POS35.positionName := #DEFENDER
!insert (P21, POS35) into PlayerPositions

!new TrainingObjective('TO22')
!TO22.areaToImprove := 'Pressing triggers and recovery runs'
!TO22.startDate := '2026-01-19'
!TO22.endDate := '2026-02-19'
!TO22.success := false
!insert (TO22, P21) into TrainingObjectivePlayer

!new Player('P22')
!P22.name := 'Kenji Sato'
!P22.age := 28
!P22.bestFoot := #RIGHT
!P22.phoneNumber := '+52 55 9090 3321'
!insert (T10, P22) into TeamPlayer

!new Position('POS36')
!POS36.positionName := #DEFENDER
!insert (P22, POS36) into PlayerPositions

!new TrainingObjective('TO23')
!TO23.areaToImprove := 'Passing lanes when building from the back'
!TO23.startDate := '2026-01-13'
!TO23.endDate := '2026-02-13'
!TO23.success := true
!insert (TO23, P22) into TrainingObjectivePlayer

!new Player('P23')
!P23.name := 'Farid El-Khoury'
!P23.age := 29
!P23.bestFoot := #LEFT
!P23.phoneNumber := '+52 55 4411 9080'
!insert (T10, P23) into TeamPlayer

!new Position('POS37')
!POS37.positionName := #FORWARD
!insert (P23, POS37) into PlayerPositions

!new Position('POS38')
!POS38.positionName := #MIDFIELDER
!insert (P23, POS38) into PlayerPositions

!new TrainingObjective('TO24')
!TO24.areaToImprove := 'Defensive tracking after losing possession'
!TO24.startDate := '2026-01-11'
!TO24.endDate := '2026-02-11'
!TO24.success := true
!insert (TO24, P23) into TrainingObjectivePlayer

!new TrainingSession('TS9')
!TS9.date := '2026-02-05 18:30'
!TS9.location := 'Docklands Sports Centre – Pitch 2'
!TS9.purpose := 'Compact defending and quick transitions (5-a-side)'
!insert (T9, TS9) into TeamTraining

!new TrainingNotes('TN13')
!TN13.note := 'Back line stayed compact; spacing improved after first drill.'
!TN13.date := '2026-02-05'
!insert (TS9, TN13) into TrainingTrainingNotes

!new TrainingNotes('TN14')
!TN14.note := 'Finishing drill: emphasize shots across keeper.'
!TN14.date := '2026-02-05'
!insert (TS9, TN14) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA4')
!FA4.reason := 'Late work shift; could not leave on time.'
!insert (TS9, FA4) into TrainingFailded
!insert (FA4, P15) into FailedPlayer

!new TrainingSession('TS10')
!TS10.date := '2026-02-06 20:00'
!TS10.location := 'Estadio La Cumbre – Court A'
!TS10.purpose := 'High press patterns and set-piece routines (5-a-side)'
!insert (T10, TS10) into TeamTraining

!new TrainingNotes('TN15')
!TN15.note := 'Pressing cues were clear; front player forced play wide effectively.'
!TN15.date := '2026-02-06'
!insert (TS10, TN15) into TrainingTrainingNotes

!new TrainingNotes('TN16')
!TN16.note := 'Corners: near-post run created two clean chances.'
!TN16.date := '2026-02-06'
!insert (TS10, TN16) into TrainingTrainingNotes

!new Competition('COMP4')
!COMP4.name := 'Riverport Community 5-a-side League'
!COMP4.type := 'Amateur small-sided league'

!new Match('M6')
!M6.date := '2026-02-10 19:30'
!M6.homeAway := true
!insert (COMP4, M6) into CompetitionMatch
!insert (T9, M6) into LocalMatch
!insert (T10, M6) into VisitorMatch

!new MatchReport('MR6')
!MR6.duration := 40
!MR6.scoreVisitor := 1
!MR6.scoreLocal := 2
!insert (M6, MR6) into MatchMatchReport

!new MatchNote('MN6')
!MN6.note := 'Slightly wet surface; ball ran fast along boards.'
!MN6.date := '2026-02-10'
!insert (M6, MN6) into MatchMatchNote

!new MatchNote('MN7')
!MN7.note := 'Local team switched to a deeper block after taking the lead.'
!MN7.date := '2026-02-10'
!insert (M6, MN7) into MatchMatchNote

!new MatchEvent('ME14')
!ME14.eventType := #GOAL
!ME14.time := 8
!insert (M6, ME14) into MatchMatchEvent

!new MatchEvent('ME15')
!ME15.eventType := #FOUL
!ME15.time := 15
!insert (M6, ME15) into MatchMatchEvent

!new MatchEvent('ME16')
!ME16.eventType := #GOAL
!ME16.time := 22
!insert (M6, ME16) into MatchMatchEvent

!new MatchEvent('ME17')
!ME17.eventType := #CORNER
!ME17.time := 29
!insert (M6, ME17) into MatchMatchEvent

!new MatchEvent('ME18')
!ME18.eventType := #PENALTY
!ME18.time := 33
!insert (M6, ME18) into MatchMatchEvent

!new MatchEvent('ME19')
!ME19.eventType := #GOAL
!ME19.time := 36
!insert (M6, ME19) into MatchMatchEvent

!new MatchEvent('ME20')
!ME20.eventType := #OFFSIDE
!ME20.time := 39
!insert (M6, ME20) into MatchMatchEvent

!new MatchPlayer('MP17')
!MP17.booked := false
!MP17.goals := 0
!MP17.rating := 7
!insert (P14, MP17) into PlayerMatch
!insert (M6, MP17) into MatchMatchPlayer

!new MatchPlayerPosition('MPP17')
!MPP17.positionName := #GOALKEEPER
!MPP17.number := 1
!insert (MP17, MPP17) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP18')
!MP18.booked := true
!MP18.goals := 0
!MP18.rating := 6
!insert (P15, MP18) into PlayerMatch
!insert (M6, MP18) into MatchMatchPlayer

!new MatchPlayerPosition('MPP18')
!MPP18.positionName := #DEFENDER
!MPP18.number := 4
!insert (MP18, MPP18) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP19')
!MP19.booked := false
!MP19.goals := 1
!MP19.rating := 8
!insert (P16, MP19) into PlayerMatch
!insert (M6, MP19) into MatchMatchPlayer

!new MatchPlayerPosition('MPP19')
!MPP19.positionName := #MIDFIELDER
!MPP19.number := 8
!insert (MP19, MPP19) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP20')
!MP20.booked := false
!MP20.goals := 1
!MP20.rating := 8
!insert (P17, MP20) into PlayerMatch
!insert (M6, MP20) into MatchMatchPlayer

!new MatchPlayerPosition('MPP20')
!MPP20.positionName := #FORWARD
!MPP20.number := 9
!insert (MP20, MPP20) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP21')
!MP21.booked := false
!MP21.goals := 0
!MP21.rating := 7
!insert (P18, MP21) into PlayerMatch
!insert (M6, MP21) into MatchMatchPlayer

!new MatchPlayerPosition('MPP21')
!MPP21.positionName := #DEFENDER
!MPP21.number := 5
!insert (MP21, MPP21) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP22')
!MP22.booked := false
!MP22.goals := 0
!MP22.rating := 7
!insert (P19, MP22) into PlayerMatch
!insert (M6, MP22) into MatchMatchPlayer

!new MatchPlayerPosition('MPP22')
!MPP22.positionName := #GOALKEEPER
!MPP22.number := 1
!insert (MP22, MPP22) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP23')
!MP23.booked := false
!MP23.goals := 1
!MP23.rating := 7
!insert (P20, MP23) into PlayerMatch
!insert (M6, MP23) into MatchMatchPlayer

!new MatchPlayerPosition('MPP23')
!MPP23.positionName := #FORWARD
!MPP23.number := 10
!insert (MP23, MPP23) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP24')
!MP24.booked := true
!MP24.goals := 0
!MP24.rating := 6
!insert (P21, MP24) into PlayerMatch
!insert (M6, MP24) into MatchMatchPlayer

!new MatchPlayerPosition('MPP24')
!MPP24.positionName := #MIDFIELDER
!MPP24.number := 6
!insert (MP24, MPP24) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP25')
!MP25.booked := false
!MP25.goals := 0
!MP25.rating := 6
!insert (P22, MP25) into PlayerMatch
!insert (M6, MP25) into MatchMatchPlayer

!new MatchPlayerPosition('MPP25')
!MPP25.positionName := #DEFENDER
!MPP25.number := 3
!insert (MP25, MPP25) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP26')
!MP26.booked := false
!MP26.goals := 0
!MP26.rating := 6
!insert (P23, MP26) into PlayerMatch
!insert (M6, MP26) into MatchMatchPlayer

!new MatchPlayerPosition('MPP26')
!MPP26.positionName := #MIDFIELDER
!MPP26.number := 7
!insert (MP26, MPP26) into MatchPlayerMatchPlayerPosition
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 379 | 0.00% |
| Multiplicities Errors | 0 | 94 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 3 | 31 | 9.68% |

| Failed dates | 
|---| 
```
2026-02-05 18:30
```
```
2026-02-06 20:00
```
```
2026-02-10 19:30
```

## Category boundary
```
!new Club('C1')
!C1.name := 'Kawasaki Seaside FC'
!C1.homeGround := 'Todoroki Riverside Park Stadium'
!C1.chairman := 'Hiroshi Tanaka'

!new Team('T1')
!T1.name := 'Seaside First XI'
!insert (C1, T1) into ClubTeam

!new Club('C2')
!C2.name := 'Casablanca Atlas Athletic'
!C2.homeGround := 'Stade Al Atlas (Casablanca)'
!C2.chairman := 'Amina El Fassi'

!new Team('T2')
!T2.name := 'Atlas Seniors'
!insert (C2, T2) into ClubTeam

!new Player('P1')
!P1.name := 'Ren Sato'
!P1.age := 18
!P1.bestFoot := #BOTH
!P1.phoneNumber := '+81-70-1234-5678'
!insert (T1, P1) into TeamPlayer

!new Position('POS1')
!POS1.positionName := #GOALKEEPER
!insert (P1, POS1) into PlayerPositions

!new Position('POS2')
!POS2.positionName := #DEFENDER
!insert (P1, POS2) into PlayerPositions

!new Position('POS3')
!POS3.positionName := #MIDFIELDER
!insert (P1, POS3) into PlayerPositions

!new TrainingObjective('TO1')
!TO1.areaToImprove := 'High-ball handling under pressure'
!TO1.startDate := '2026-02-01'
!TO1.endDate := '2026-02-28'
!TO1.success := false
!insert (TO1, P1) into TrainingObjectivePlayer

!new Player('P2')
!P2.name := 'Youssef Benali'
!P2.age := 38
!P2.bestFoot := #RIGHT
!P2.phoneNumber := '+212-6-12-34-56-78'
!insert (T2, P2) into TeamPlayer

!new Position('POS4')
!POS4.positionName := #FORWARD
!insert (P2, POS4) into PlayerPositions

!new TrainingObjective('TO2')
!TO2.areaToImprove := 'First-touch control in tight spaces'
!TO2.startDate := '2026-02-10'
!TO2.endDate := '2026-03-10'
!TO2.success := true
!insert (TO2, P2) into TrainingObjectivePlayer

!new PlayerNotes('PN1')
!PN1.note := 'Arrived early and stayed after to practice finishing.'
!PN1.date := '2026-02-12'
!insert (P2, PN1) into PlayerPlayerNotes

!new PlayerNotes('PN2')
!PN2.note := 'Requested instructions in French; responded well to bilingual cues.'
!PN2.date := '2026-02-15'
!insert (P2, PN2) into PlayerPlayerNotes

!new TrainingSession('TS1')
!TS1.date := '2026-02-18'
!TS1.location := 'Kawasaki Waterfront Training Pitch'
!TS1.purpose := 'Low-intensity recovery and goalkeeper footwork'
!insert (T1, TS1) into TeamTraining

!new TrainingNotes('TN1')
!TN1.note := 'Kept the session short; focused on technique and mobility.'
!TN1.date := '2026-02-18'
!insert (TS1, TN1) into TrainingTrainingNotes

!new TrainingSession('TS2')
!TS2.date := '2026-02-18'
!TS2.location := 'Casablanca Corniche Sports Complex'
!TS2.purpose := 'Attacking patterns and crossing drills'
!insert (T2, TS2) into TeamTraining

!new TrainingNotes('TN2')
!TN2.note := 'Emphasis on near-post runs; timing improved by the end.'
!TN2.date := '2026-02-18'
!insert (TS2, TN2) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA1')
!FA1.reason := 'Delayed by intercity rail disruption; arrived after session ended.'
!insert (TS2, FA1) into TrainingFailded
!insert (FA1, P2) into FailedPlayer

!new Competition('COMP1')
!COMP1.name := 'Intercontinental Friendly Cup'
!COMP1.type := 'Friendly'

!new Match('M1')
!M1.date := '2026-02-21'
!M1.homeAway := true
!insert (COMP1, M1) into CompetitionMatch
!insert (T1, M1) into LocalMatch
!insert (T2, M1) into VisitorMatch

!new MatchReport('MR1')
!MR1.duration := 90
!MR1.scoreVisitor := 0
!MR1.scoreLocal := 0
!insert (M1, MR1) into MatchMatchReport

!new MatchPlayer('MP1')
!MP1.booked := false
!MP1.goals := 0
!MP1.rating := 0
!insert (P1, MP1) into PlayerMatch
!insert (M1, MP1) into MatchMatchPlayer

!new MatchPlayerPosition('MPP1')
!MPP1.positionName := #GOALKEEPER
!MPP1.number := 1
!insert (MP1, MPP1) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP2')
!MP2.booked := false
!MP2.goals := 0
!MP2.rating := 1
!insert (P2, MP2) into PlayerMatch
!insert (M1, MP2) into MatchMatchPlayer

!new MatchPlayerPosition('MPP2')
!MPP2.positionName := #FORWARD
!MPP2.number := 9
!insert (MP2, MPP2) into MatchPlayerMatchPlayerPosition
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 114 | 0.00% |
| Multiplicities Errors | 0 | 28 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 11 | 0.00% |

## Category complex
```
!new Club('C15')
!C15.name := 'Atlético Valparaíso Club'
!C15.homeGround := 'Estadio Playa Ancha'
!C15.chairman := 'María Fernanda Rojas'

!new Team('T17')
!T17.name := 'Atlético Valparaíso Seniors'
!insert (C15, T17) into ClubTeam

!new Team('T18')
!T18.name := 'Atlético Valparaíso U21'
!insert (C15, T18) into ClubTeam

!new Club('C16')
!C16.name := 'Kyoto Minami FC'
!C16.homeGround := 'Minami Sports Park'
!C16.chairman := 'Takashi Nakamura'

!new Team('T19')
!T19.name := 'Kyoto Minami First Team'
!insert (C16, T19) into ClubTeam

!new Club('C17')
!C17.name := 'Örebro Northern Stars'
!C17.homeGround := 'Norrängen IP'
!C17.chairman := 'Karin Sjöberg'

!new Team('T20')
!T20.name := 'Örebro Stars'
!insert (C17, T20) into ClubTeam

!new Player('P42')
!P42.name := 'Diego Araya'
!P42.age := 28
!P42.bestFoot := #RIGHT
!P42.phoneNumber := '+56 9 8123 4455'
!insert (T17, P42) into TeamPlayer

!new Position('POS66')
!POS66.positionName := #FORWARD
!insert (P42, POS66) into PlayerPositions

!new Position('POS67')
!POS67.positionName := #MIDFIELDER
!insert (P42, POS67) into PlayerPositions

!new TrainingObjective('TO43')
!TO43.areaToImprove := 'Finishing under pressure'
!TO43.startDate := '2026-01-05'
!TO43.endDate := '2026-02-05'
!TO43.success := false
!insert (TO43, P42) into TrainingObjectivePlayer

!new TrainingObjective('TO44')
!TO44.areaToImprove := 'Counter-pressing triggers'
!TO44.startDate := '2026-01-05'
!TO44.endDate := '2026-01-31'
!TO44.success := true
!insert (TO44, P42) into TrainingObjectivePlayer

!new PlayerNotes('PN19')
!PN19.note := 'Nutrition plan updated; reduce late-night caffeine.'
!PN19.date := '2026-01-08'
!insert (P42, PN19) into PlayerPlayerNotes

!new Player('P43')
!P43.name := 'Sebastián Muñoz'
!P43.age := 31
!P43.bestFoot := #BOTH
!P43.phoneNumber := '+56 9 7661 9020'
!insert (T17, P43) into TeamPlayer

!new Position('POS68')
!POS68.positionName := #DEFENDER
!insert (P43, POS68) into PlayerPositions

!new Position('POS69')
!POS69.positionName := #MIDFIELDER
!insert (P43, POS69) into PlayerPositions

!new TrainingObjective('TO45')
!TO45.areaToImprove := 'Aerial duels timing'
!TO45.startDate := '2026-01-06'
!TO45.endDate := '2026-02-10'
!TO45.success := false
!insert (TO45, P43) into TrainingObjectivePlayer

!new Player('P44')
!P44.name := 'Tomás Lira'
!P44.age := 24
!P44.bestFoot := #LEFT
!P44.phoneNumber := '+56 9 7002 1188'
!insert (T17, P44) into TeamPlayer

!new Position('POS70')
!POS70.positionName := #MIDFIELDER
!insert (P44, POS70) into PlayerPositions

!new TrainingObjective('TO46')
!TO46.areaToImprove := 'First-touch when receiving on half-turn'
!TO46.startDate := '2026-01-06'
!TO46.endDate := '2026-01-27'
!TO46.success := true
!insert (TO46, P44) into TrainingObjectivePlayer

!new PlayerNotes('PN20')
!PN20.note := 'Balancing shift work with recovery; monitor sleep.'
!PN20.date := '2026-01-12'
!insert (P44, PN20) into PlayerPlayerNotes

!new Player('P45')
!P45.name := 'Álvaro Paredes'
!P45.age := 26
!P45.bestFoot := #RIGHT
!P45.phoneNumber := '+56 9 6550 3377'
!insert (T17, P45) into TeamPlayer

!new Position('POS71')
!POS71.positionName := #GOALKEEPER
!insert (P45, POS71) into PlayerPositions

!new TrainingObjective('TO47')
!TO47.areaToImprove := 'Distribution with weaker-side throws'
!TO47.startDate := '2026-01-07'
!TO47.endDate := '2026-02-07'
!TO47.success := false
!insert (TO47, P45) into TrainingObjectivePlayer

!new Player('P46')
!P46.name := 'Nicolás Pérez'
!P46.age := 22
!P46.bestFoot := #RIGHT
!P46.phoneNumber := '+56 9 6114 0901'
!insert (T17, P46) into TeamPlayer

!new Position('POS72')
!POS72.positionName := #DEFENDER
!insert (P46, POS72) into PlayerPositions

!new TrainingObjective('TO48')
!TO48.areaToImprove := '1v1 defending body orientation'
!TO48.startDate := '2026-01-07'
!TO48.endDate := '2026-02-14'
!TO48.success := false
!insert (TO48, P46) into TrainingObjectivePlayer

!new Player('P47')
!P47.name := 'Camila Soto'
!P47.age := 19
!P47.bestFoot := #RIGHT
!P47.phoneNumber := '+56 9 7333 2201'
!insert (T18, P47) into TeamPlayer

!new Position('POS73')
!POS73.positionName := #MIDFIELDER
!insert (P47, POS73) into PlayerPositions

!new Position('POS74')
!POS74.positionName := #FORWARD
!insert (P47, POS74) into PlayerPositions

!new TrainingObjective('TO49')
!TO49.areaToImprove := 'Decision-making in final third'
!TO49.startDate := '2026-01-08'
!TO49.endDate := '2026-02-08'
!TO49.success := false
!insert (TO49, P47) into TrainingObjectivePlayer

!new PlayerNotes('PN21')
!PN21.note := 'Shows confidence taking set pieces; keep rotating responsibilities.'
!PN21.date := '2026-01-11'
!insert (P47, PN21) into PlayerPlayerNotes

!new Player('P48')
!P48.name := 'Martín Cárdenas'
!P48.age := 20
!P48.bestFoot := #LEFT
!P48.phoneNumber := '+56 9 7444 8810'
!insert (T18, P48) into TeamPlayer

!new Position('POS75')
!POS75.positionName := #DEFENDER
!insert (P48, POS75) into PlayerPositions

!new TrainingObjective('TO50')
!TO50.areaToImprove := 'Defensive scanning before receiving'
!TO50.startDate := '2026-01-08'
!TO50.endDate := '2026-02-01'
!TO50.success := true
!insert (TO50, P48) into TrainingObjectivePlayer

!new Player('P49')
!P49.name := 'Joaquín Rivas'
!P49.age := 18
!P49.bestFoot := #RIGHT
!P49.phoneNumber := '+56 9 7555 1189'
!insert (T18, P49) into TeamPlayer

!new Position('POS76')
!POS76.positionName := #FORWARD
!insert (P49, POS76) into PlayerPositions

!new TrainingObjective('TO51')
!TO51.areaToImprove := 'Timing runs across the near post'
!TO51.startDate := '2026-01-08'
!TO51.endDate := '2026-02-20'
!TO51.success := false
!insert (TO51, P49) into TrainingObjectivePlayer

!new Player('P50')
!P50.name := 'Valentina Orellana'
!P50.age := 21
!P50.bestFoot := #BOTH
!P50.phoneNumber := '+56 9 7888 0310'
!insert (T18, P50) into TeamPlayer

!new Position('POS77')
!POS77.positionName := #GOALKEEPER
!insert (P50, POS77) into PlayerPositions

!new TrainingObjective('TO52')
!TO52.areaToImprove := 'Commanding box on corners'
!TO52.startDate := '2026-01-09'
!TO52.endDate := '2026-02-28'
!TO52.success := false
!insert (TO52, P50) into TrainingObjectivePlayer

!new Player('P51')
!P51.name := 'Haruto Tanaka'
!P51.age := 27
!P51.bestFoot := #RIGHT
!P51.phoneNumber := '+81 90-1234-5588'
!insert (T19, P51) into TeamPlayer

!new Position('POS78')
!POS78.positionName := #FORWARD
!insert (P51, POS78) into PlayerPositions

!new TrainingObjective('TO53')
!TO53.areaToImprove := 'Finishing with first-time shots'
!TO53.startDate := '2026-01-04'
!TO53.endDate := '2026-02-04'
!TO53.success := false
!insert (TO53, P51) into TrainingObjectivePlayer

!new Player('P52')
!P52.name := 'Kenji Sato'
!P52.age := 25
!P52.bestFoot := #LEFT
!P52.phoneNumber := '+81 80-4455-6677'
!insert (T19, P52) into TeamPlayer

!new Position('POS79')
!POS79.positionName := #MIDFIELDER
!insert (P52, POS79) into PlayerPositions

!new TrainingObjective('TO54')
!TO54.areaToImprove := 'Switching play under pressure'
!TO54.startDate := '2026-01-04'
!TO54.endDate := '2026-02-18'
!TO54.success := false
!insert (TO54, P52) into TrainingObjectivePlayer

!new PlayerNotes('PN22')
!PN22.note := 'Mild hamstring tightness after sprint block; reduce max-speed volume for 3 days.'
!PN22.date := '2026-01-10'
!insert (P52, PN22) into PlayerPlayerNotes

!new Player('P53')
!P53.name := 'Ryōichi Fujimoto'
!P53.age := 29
!P53.bestFoot := #BOTH
!P53.phoneNumber := '+81 70-9090-1212'
!insert (T19, P53) into TeamPlayer

!new Position('POS80')
!POS80.positionName := #DEFENDER
!insert (P53, POS80) into PlayerPositions

!new Position('POS81')
!POS81.positionName := #MIDFIELDER
!insert (P53, POS81) into PlayerPositions

!new TrainingObjective('TO55')
!TO55.areaToImprove := 'Line stepping coordination'
!TO55.startDate := '2026-01-04'
!TO55.endDate := '2026-01-30'
!TO55.success := true
!insert (TO55, P53) into TrainingObjectivePlayer

!new Player('P54')
!P54.name := 'Daichi Morita'
!P54.age := 23
!P54.bestFoot := #RIGHT
!P54.phoneNumber := '+81 90-7777-0101'
!insert (T19, P54) into TeamPlayer

!new Position('POS82')
!POS82.positionName := #GOALKEEPER
!insert (P54, POS82) into PlayerPositions

!new TrainingObjective('TO56')
!TO56.areaToImprove := 'Low saves reaction time'
!TO56.startDate := '2026-01-05'
!TO56.endDate := '2026-02-05'
!TO56.success := false
!insert (TO56, P54) into TrainingObjectivePlayer

!new Player('P55')
!P55.name := 'Yuki Arai'
!P55.age := 21
!P55.bestFoot := #RIGHT
!P55.phoneNumber := '+81 90-2222-3333'
!insert (T19, P55) into TeamPlayer

!new Position('POS83')
!POS83.positionName := #DEFENDER
!insert (P55, POS83) into PlayerPositions

!new Position('POS84')
!POS84.positionName := #MIDFIELDER
!insert (P55, POS84) into PlayerPositions

!new TrainingObjective('TO57')
!TO57.areaToImprove := 'Overlapping runs and recovery speed'
!TO57.startDate := '2026-01-05'
!TO57.endDate := '2026-02-12'
!TO57.success := false
!insert (TO57, P55) into TrainingObjectivePlayer

!new Player('P56')
!P56.name := 'Elias Berg'
!P56.age := 30
!P56.bestFoot := #RIGHT
!P56.phoneNumber := '+46 70 123 45 67'
!insert (T20, P56) into TeamPlayer

!new Position('POS85')
!POS85.positionName := #FORWARD
!insert (P56, POS85) into PlayerPositions

!new TrainingObjective('TO58')
!TO58.areaToImprove := 'Composure in penalty situations'
!TO58.startDate := '2026-01-06'
!TO58.endDate := '2026-02-06'
!TO58.success := false
!insert (TO58, P56) into TrainingObjectivePlayer

!new Player('P57')
!P57.name := 'Oskar Lind'
!P57.age := 26
!P57.bestFoot := #LEFT
!P57.phoneNumber := '+46 72 555 10 10'
!insert (T20, P57) into TeamPlayer

!new Position('POS86')
!POS86.positionName := #MIDFIELDER
!insert (P57, POS86) into PlayerPositions

!new TrainingObjective('TO59')
!TO59.areaToImprove := 'Crossing accuracy from half-space'
!TO59.startDate := '2026-01-06'
!TO59.endDate := '2026-02-20'
!TO59.success := false
!insert (TO59, P57) into TrainingObjectivePlayer

!new Player('P58')
!P58.name := 'Viktor Nyström'
!P58.age := 28
!P58.bestFoot := #BOTH
!P58.phoneNumber := '+46 73 900 88 21'
!insert (T20, P58) into TeamPlayer

!new Position('POS87')
!POS87.positionName := #DEFENDER
!insert (P58, POS87) into PlayerPositions

!new TrainingObjective('TO60')
!TO60.areaToImprove := 'Clearance distance under pressure'
!TO60.startDate := '2026-01-06'
!TO60.endDate := '2026-01-31'
!TO60.success := true
!insert (TO60, P58) into TrainingObjectivePlayer

!new Player('P59')
!P59.name := 'Ahmed El-Sayed'
!P59.age := 24
!P59.bestFoot := #RIGHT
!P59.phoneNumber := '+46 76 111 22 33'
!insert (T20, P59) into TeamPlayer

!new Position('POS88')
!POS88.positionName := #DEFENDER
!insert (P59, POS88) into PlayerPositions

!new TrainingObjective('TO61')
!TO61.areaToImprove := 'Tracking runners at back post'
!TO61.startDate := '2026-01-07'
!TO61.endDate := '2026-02-07'
!TO61.success := false
!insert (TO61, P59) into TrainingObjectivePlayer

!new Player('P60')
!P60.name := 'Linnea Karlsson'
!P60.age := 22
!P60.bestFoot := #BOTH
!P60.phoneNumber := '+46 70 808 09 10'
!insert (T20, P60) into TeamPlayer

!new Position('POS89')
!POS89.positionName := #GOALKEEPER
!insert (P60, POS89) into PlayerPositions

!new TrainingObjective('TO62')
!TO62.areaToImprove := 'Communication and organizing set-piece wall'
!TO62.startDate := '2026-01-07'
!TO62.endDate := '2026-02-28'
!TO62.success := false
!insert (TO62, P60) into TrainingObjectivePlayer

!new PlayerNotes('PN23')
!PN23.note := 'Took leadership in defensive meetings; encourage continued vocal presence.'
!PN23.date := '2026-01-13'
!insert (P60, PN23) into PlayerPlayerNotes

!new TrainingSession('TS21')
!TS21.date := '2026-01-10'
!TS21.location := 'Playa Ancha Auxiliary Pitch'
!TS21.purpose := 'Transition play: 5-second counter-press'
!insert (T17, TS21) into TeamTraining

!new TrainingNotes('TN33')
!TN33.note := 'Wide players must sprint inside immediately after loss.'
!TN33.date := '2026-01-10'
!insert (TS21, TN33) into TrainingTrainingNotes

!new TrainingNotes('TN34')
!TN34.note := 'Goalkeepers encouraged to play quick throws to fullbacks.'
!TN34.date := '2026-01-10'
!insert (TS21, TN34) into TrainingTrainingNotes

!new TrainingSession('TS22')
!TS22.date := '2026-01-13'
!TS22.location := 'Estadio Playa Ancha Gym'
!TS22.purpose := 'Strength + injury-prevention circuit'
!insert (T17, TS22) into TeamTraining

!new TrainingNotes('TN35')
!TN35.note := 'Nordic hamstring progression: add 1 set next week if no soreness.'
!TN35.date := '2026-01-13'
!insert (TS22, TN35) into TrainingTrainingNotes

!new TrainingNotes('TN36')
!TN36.note := 'Single-leg stability work highlighted for defenders.'
!TN36.date := '2026-01-13'
!insert (TS22, TN36) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA10')
!FA10.reason := 'Family emergency (travel to Vina del Mar)'
!insert (TS22, FA10) into TrainingFailded
!insert (FA10, P44) into FailedPlayer

!new TrainingSession('TS23')
!TS23.date := '2026-01-11'
!TS23.location := 'Complejo Deportivo Quilpué'
!TS23.purpose := 'Set pieces: corners and near-post runs'
!insert (T18, TS23) into TeamTraining

!new TrainingNotes('TN37')
!TN37.note := 'Corner routine "Screen-2" executed well; timing still inconsistent.'
!TN37.date := '2026-01-11'
!insert (TS23, TN37) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA11')
!FA11.reason := 'Flu symptoms; sent home after morning check'
!insert (TS23, FA11) into TrainingFailded
!insert (FA11, P49) into FailedPlayer

!new TrainingSession('TS24')
!TS24.date := '2026-01-09'
!TS24.location := 'Minami Sports Park Field 2'
!TS24.purpose := 'High press triggers and rest-defense'
!insert (T19, TS24) into TeamTraining

!new TrainingNotes('TN38')
!TN38.note := 'Press cue: back-pass to fullback; striker angles run to block central lane.'
!TN38.date := '2026-01-09'
!insert (TS24, TN38) into TrainingTrainingNotes

!new TrainingNotes('TN39')
!TN39.note := 'Rest-defense kept 2+1 shape; fewer counterattacks conceded.'
!TN39.date := '2026-01-09'
!insert (TS24, TN39) into TrainingTrainingNotes

!new TrainingSession('TS25')
!TS25.date := '2026-01-12'
!TS25.location := 'Norrängen IP Indoor Hall'
!TS25.purpose := 'Defensive shape in low block'
!insert (T20, TS25) into TeamTraining

!new TrainingNotes('TN40')
!TN40.note := 'Back line spacing improved; fullbacks must communicate earlier.'
!TN40.date := '2026-01-12'
!insert (TS25, TN40) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA12')
!FA12.reason := 'Work shift changed at short notice (warehouse late shift)'
!insert (TS25, FA12) into TrainingFailded
!insert (FA12, P59) into FailedPlayer

!new Competition('COMP7')
!COMP7.name := 'Pacific-Rim Invitational Cup 2026'
!COMP7.type := 'Pre-season friendly tournament'

!new Match('M10')
!M10.date := '2026-01-15'
!M10.homeAway := true
!insert (COMP7, M10) into CompetitionMatch
!insert (T17, M10) into LocalMatch
!insert (T19, M10) into VisitorMatch

!new MatchReport('MR10')
!MR10.duration := 90
!MR10.scoreLocal := 2
!MR10.scoreVisitor := 1
!insert (M10, MR10) into MatchMatchReport

!new MatchEvent('ME49')
!ME49.eventType := #GOAL
!ME49.time := 12
!insert (M10, ME49) into MatchMatchEvent

!new MatchEvent('ME50')
!ME50.eventType := #FOUL
!ME50.time := 30
!insert (M10, ME50) into MatchMatchEvent

!new MatchEvent('ME51')
!ME51.eventType := #GOAL
!ME51.time := 55
!insert (M10, ME51) into MatchMatchEvent

!new MatchEvent('ME52')
!ME52.eventType := #CORNER
!ME52.time := 60
!insert (M10, ME52) into MatchMatchEvent

!new MatchEvent('ME53')
!ME53.eventType := #GOAL
!ME53.time := 78
!insert (M10, ME53) into MatchMatchEvent

!new MatchNote('MN13')
!MN13.note := 'Local side adjusted to a narrower midfield diamond after halftime.'
!MN13.date := '2026-01-15'
!insert (M10, MN13) into MatchMatchNote

!new MatchPlayer('MP39')
!MP39.booked := false
!MP39.goals := 1
!MP39.rating := 8
!insert (P42, MP39) into PlayerMatch
!insert (M10, MP39) into MatchMatchPlayer

!new MatchPlayerPosition('MPP39')
!MPP39.positionName := #FORWARD
!MPP39.number := 9
!insert (MP39, MPP39) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP40')
!MP40.booked := false
!MP40.goals := 1
!MP40.rating := 7
!insert (P43, MP40) into PlayerMatch
!insert (M10, MP40) into MatchMatchPlayer

!new MatchPlayerPosition('MPP40')
!MPP40.positionName := #DEFENDER
!MPP40.number := 4
!insert (MP40, MPP40) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP41')
!MP41.booked := false
!MP41.goals := 0
!MP41.rating := 6
!insert (P44, MP41) into PlayerMatch
!insert (M10, MP41) into MatchMatchPlayer

!new MatchPlayerPosition('MPP41')
!MPP41.positionName := #MIDFIELDER
!MPP41.number := 8
!insert (MP41, MPP41) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP42')
!MP42.booked := false
!MP42.goals := 0
!MP42.rating := 7
!insert (P45, MP42) into PlayerMatch
!insert (M10, MP42) into MatchMatchPlayer

!new MatchPlayerPosition('MPP42')
!MPP42.positionName := #GOALKEEPER
!MPP42.number := 1
!insert (MP42, MPP42) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP43')
!MP43.booked := true
!MP43.goals := 0
!MP43.rating := 6
!insert (P46, MP43) into PlayerMatch
!insert (M10, MP43) into MatchMatchPlayer

!new MatchPlayerPosition('MPP43')
!MPP43.positionName := #DEFENDER
!MPP43.number := 2
!insert (MP43, MPP43) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP44')
!MP44.booked := false
!MP44.goals := 1
!MP44.rating := 7
!insert (P51, MP44) into PlayerMatch
!insert (M10, MP44) into MatchMatchPlayer

!new MatchPlayerPosition('MPP44')
!MPP44.positionName := #FORWARD
!MPP44.number := 11
!insert (MP44, MPP44) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP45')
!MP45.booked := false
!MP45.goals := 0
!MP45.rating := 6
!insert (P52, MP45) into PlayerMatch
!insert (M10, MP45) into MatchMatchPlayer

!new MatchPlayerPosition('MPP45')
!MPP45.positionName := #MIDFIELDER
!MPP45.number := 7
!insert (MP45, MPP45) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP46')
!MP46.booked := false
!MP46.goals := 0
!MP46.rating := 6
!insert (P53, MP46) into PlayerMatch
!insert (M10, MP46) into MatchMatchPlayer

!new MatchPlayerPosition('MPP46')
!MPP46.positionName := #DEFENDER
!MPP46.number := 5
!insert (MP46, MPP46) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP47')
!MP47.booked := false
!MP47.goals := 0
!MP47.rating := 6
!insert (P54, MP47) into PlayerMatch
!insert (M10, MP47) into MatchMatchPlayer

!new MatchPlayerPosition('MPP47')
!MPP47.positionName := #GOALKEEPER
!MPP47.number := 1
!insert (MP47, MPP47) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP48')
!MP48.booked := false
!MP48.goals := 0
!MP48.rating := 6
!insert (P55, MP48) into PlayerMatch
!insert (M10, MP48) into MatchMatchPlayer

!new MatchPlayerPosition('MPP48')
!MPP48.positionName := #DEFENDER
!MPP48.number := 6
!insert (MP48, MPP48) into MatchPlayerMatchPlayerPosition

!new Match('M11')
!M11.date := '2026-01-18'
!M11.homeAway := true
!insert (COMP7, M11) into CompetitionMatch
!insert (T20, M11) into LocalMatch
!insert (T18, M11) into VisitorMatch

!new MatchReport('MR11')
!MR11.duration := 90
!MR11.scoreLocal := 0
!MR11.scoreVisitor := 0
!insert (M11, MR11) into MatchMatchReport

!new MatchEvent('ME54')
!ME54.eventType := #FOUL
!ME54.time := 22
!insert (M11, ME54) into MatchMatchEvent

!new MatchEvent('ME55')
!ME55.eventType := #OFFSIDE
!ME55.time := 47
!insert (M11, ME55) into MatchMatchEvent

!new MatchEvent('ME56')
!ME56.eventType := #CORNER
!ME56.time := 66
!insert (M11, ME56) into MatchMatchEvent

!new MatchEvent('ME57')
!ME57.eventType := #PENALTY
!ME57.time := 83
!insert (M11, ME57) into MatchMatchEvent

!new MatchNote('MN14')
!MN14.note := 'Penalty at 83 was saved; match remained scoreless.'
!MN14.date := '2026-01-18'
!insert (M11, MN14) into MatchMatchNote

!new MatchPlayer('MP49')
!MP49.booked := false
!MP49.goals := 0
!MP49.rating := 6
!insert (P56, MP49) into PlayerMatch
!insert (M11, MP49) into MatchMatchPlayer

!new MatchPlayerPosition('MPP49')
!MPP49.positionName := #FORWARD
!MPP49.number := 9
!insert (MP49, MPP49) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP50')
!MP50.booked := false
!MP50.goals := 0
!MP50.rating := 7
!insert (P57, MP50) into PlayerMatch
!insert (M11, MP50) into MatchMatchPlayer

!new MatchPlayerPosition('MPP50')
!MPP50.positionName := #MIDFIELDER
!MPP50.number := 10
!insert (MP50, MPP50) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP51')
!MP51.booked := true
!MP51.goals := 0
!MP51.rating := 6
!insert (P58, MP51) into PlayerMatch
!insert (M11, MP51) into MatchMatchPlayer

!new MatchPlayerPosition('MPP51')
!MPP51.positionName := #DEFENDER
!MPP51.number := 4
!insert (MP51, MPP51) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP52')
!MP52.booked := false
!MP52.goals := 0
!MP52.rating := 6
!insert (P59, MP52) into PlayerMatch
!insert (M11, MP52) into MatchMatchPlayer

!new MatchPlayerPosition('MPP52')
!MPP52.positionName := #DEFENDER
!MPP52.number := 2
!insert (MP52, MPP52) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP53')
!MP53.booked := false
!MP53.goals := 0
!MP53.rating := 8
!insert (P60, MP53) into PlayerMatch
!insert (M11, MP53) into MatchMatchPlayer

!new MatchPlayerPosition('MPP53')
!MPP53.positionName := #GOALKEEPER
!MPP53.number := 1
!insert (MP53, MPP53) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP54')
!MP54.booked := false
!MP54.goals := 0
!MP54.rating := 6
!insert (P47, MP54) into PlayerMatch
!insert (M11, MP54) into MatchMatchPlayer

!new MatchPlayerPosition('MPP54')
!MPP54.positionName := #MIDFIELDER
!MPP54.number := 11
!insert (MP54, MPP54) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP55')
!MP55.booked := true
!MP55.goals := 0
!MP55.rating := 6
!insert (P48, MP55) into PlayerMatch
!insert (M11, MP55) into MatchMatchPlayer

!new MatchPlayerPosition('MPP55')
!MPP55.positionName := #DEFENDER
!MPP55.number := 3
!insert (MP55, MPP55) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP56')
!MP56.booked := false
!MP56.goals := 0
!MP56.rating := 5
!insert (P49, MP56) into PlayerMatch
!insert (M11, MP56) into MatchMatchPlayer

!new MatchPlayerPosition('MPP56')
!MPP56.positionName := #FORWARD
!MPP56.number := 19
!insert (MP56, MPP56) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP57')
!MP57.booked := false
!MP57.goals := 0
!MP57.rating := 7
!insert (P50, MP57) into PlayerMatch
!insert (M11, MP57) into MatchMatchPlayer

!new MatchPlayerPosition('MPP57')
!MPP57.positionName := #GOALKEEPER
!MPP57.number := 1
!insert (MP57, MPP57) into MatchPlayerMatchPlayerPosition

!new Match('M12')
!M12.date := '2026-01-21'
!M12.homeAway := true
!insert (COMP7, M12) into CompetitionMatch
!insert (T19, M12) into LocalMatch
!insert (T20, M12) into VisitorMatch

!new MatchReport('MR12')
!MR12.duration := 90
!MR12.scoreLocal := 3
!MR12.scoreVisitor := 2
!insert (M12, MR12) into MatchMatchReport

!new MatchEvent('ME58')
!ME58.eventType := #GOAL
!ME58.time := 9
!insert (M12, ME58) into MatchMatchEvent

!new MatchEvent('ME59')
!ME59.eventType := #GOAL
!ME59.time := 26
!insert (M12, ME59) into MatchMatchEvent

!new MatchEvent('ME60')
!ME60.eventType := #FOUL
!ME60.time := 40
!insert (M12, ME60) into MatchMatchEvent

!new MatchEvent('ME61')
!ME61.eventType := #GOAL
!ME61.time := 44
!insert (M12, ME61) into MatchMatchEvent

!new MatchEvent('ME62')
!ME62.eventType := #CORNER
!ME62.time := 57
!insert (M12, ME62) into MatchMatchEvent

!new MatchEvent('ME63')
!ME63.eventType := #GOAL
!ME63.time := 63
!insert (M12, ME63) into MatchMatchEvent

!new MatchEvent('ME64')
!ME64.eventType := #GOAL
!ME64.time := 88
!insert (M12, ME64) into MatchMatchEvent

!new MatchNote('MN15')
!MN15.note := 'Visitor equalized twice but conceded late on an overlapping run.'
!MN15.date := '2026-01-21'
!insert (M12, MN15) into MatchMatchNote

!new MatchPlayer('MP58')
!MP58.booked := false
!MP58.goals := 1
!MP58.rating := 7
!insert (P51, MP58) into PlayerMatch
!insert (M12, MP58) into MatchMatchPlayer

!new MatchPlayerPosition('MPP58')
!MPP58.positionName := #FORWARD
!MPP58.number := 11
!insert (MP58, MPP58) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP59')
!MP59.booked := false
!MP59.goals := 1
!MP59.rating := 8
!insert (P52, MP59) into PlayerMatch
!insert (M12, MP59) into MatchMatchPlayer

!new MatchPlayerPosition('MPP59')
!MPP59.positionName := #MIDFIELDER
!MPP59.number := 7
!insert (MP59, MPP59) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP60')
!MP60.booked := true
!MP60.goals := 0
!MP60.rating := 6
!insert (P53, MP60) into PlayerMatch
!insert (M12, MP60) into MatchMatchPlayer

!new MatchPlayerPosition('MPP60')
!MPP60.positionName := #DEFENDER
!MPP60.number := 5
!insert (MP60, MPP60) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP61')
!MP61.booked := false
!MP61.goals := 0
!MP61.rating := 6
!insert (P54, MP61) into PlayerMatch
!insert (M12, MP61) into MatchMatchPlayer

!new MatchPlayerPosition('MPP61')
!MPP61.positionName := #GOALKEEPER
!MPP61.number := 1
!insert (MP61, MPP61) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP62')
!MP62.booked := false
!MP62.goals := 1
!MP62.rating := 7
!insert (P55, MP62) into PlayerMatch
!insert (M12, MP62) into MatchMatchPlayer

!new MatchPlayerPosition('MPP62')
!MPP62.positionName := #DEFENDER
!MPP62.number := 6
!insert (MP62, MPP62) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP63')
!MP63.booked := false
!MP63.goals := 1
!MP63.rating := 7
!insert (P56, MP63) into PlayerMatch
!insert (M12, MP63) into MatchMatchPlayer

!new MatchPlayerPosition('MPP63')
!MPP63.positionName := #FORWARD
!MPP63.number := 9
!insert (MP63, MPP63) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP64')
!MP64.booked := false
!MP64.goals := 1
!MP64.rating := 7
!insert (P57, MP64) into PlayerMatch
!insert (M12, MP64) into MatchMatchPlayer

!new MatchPlayerPosition('MPP64')
!MPP64.positionName := #MIDFIELDER
!MPP64.number := 10
!insert (MP64, MPP64) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP65')
!MP65.booked := false
!MP65.goals := 0
!MP65.rating := 6
!insert (P58, MP65) into PlayerMatch
!insert (M12, MP65) into MatchMatchPlayer

!new MatchPlayerPosition('MPP65')
!MPP65.positionName := #DEFENDER
!MPP65.number := 4
!insert (MP65, MPP65) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP66')
!MP66.booked := true
!MP66.goals := 0
!MP66.rating := 5
!insert (P59, MP66) into PlayerMatch
!insert (M12, MP66) into MatchMatchPlayer

!new MatchPlayerPosition('MPP66')
!MPP66.positionName := #DEFENDER
!MPP66.number := 2
!insert (MP66, MPP66) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP67')
!MP67.booked := false
!MP67.goals := 0
!MP67.rating := 6
!insert (P60, MP67) into PlayerMatch
!insert (M12, MP67) into MatchMatchPlayer

!new MatchPlayerPosition('MPP67')
!MPP67.positionName := #GOALKEEPER
!MPP67.number := 1
!insert (MP67, MPP67) into MatchPlayerMatchPlayerPosition
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 821 | 0.00% |
| Multiplicities Errors | 0 | 209 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 64 | 0.00% |

## Category edge
```
!new Club('C3')
!C3.name := 'Knattspyrnufélag Tindur'
!C3.homeGround := 'Hólar Frostpitch'
!C3.chairman := 'Sigríður Ásbjörnsdóttir'

!new Team('T3')
!T3.name := 'Tindur Seniors'
!insert (C3, T3) into ClubTeam

!new Club('C4')
!C4.name := 'Sakura United FC'
!C4.homeGround := 'Kōen Stadium'
!C4.chairman := 'Hiro Tanaka'

!new Team('T4')
!T4.name := 'さくらユナイテッドU-18 (playing up)'
!insert (C4, T4) into ClubTeam

!new Player('P3')
!P3.name := 'Einar Már Jónsson'
!P3.age := 44
!P3.bestFoot := #RIGHT
!P3.phoneNumber := '+354 777 0444'
!insert (T3, P3) into TeamPlayer

!new Position('POS5')
!POS5.positionName := #GOALKEEPER
!insert (P3, POS5) into PlayerPositions

!new TrainingObjective('TO3')
!TO3.areaToImprove := 'Low diving saves on icy surface'
!TO3.startDate := '2026-01-02'
!TO3.endDate := '2026-02-02'
!TO3.success := false
!insert (TO3, P3) into TrainingObjectivePlayer

!new Player('P4')
!P4.name := 'Aoi Nakamura'
!P4.age := 15
!P4.bestFoot := #BOTH
!P4.phoneNumber := '+81-90-1234-5678'
!insert (T4, P4) into TeamPlayer

!new Position('POS6')
!POS6.positionName := #DEFENDER
!insert (P4, POS6) into PlayerPositions

!new Position('POS7')
!POS7.positionName := #MIDFIELDER
!insert (P4, POS7) into PlayerPositions

!new Position('POS8')
!POS8.positionName := #FORWARD
!insert (P4, POS8) into PlayerPositions

!new PlayerNotes('PN3')
!PN3.note := 'School schedule conflict risk during away travel.'
!PN3.date := '2026-01-03'
!insert (P4, PN3) into PlayerPlayerNotes

!new PlayerNotes('PN4')
!PN4.note := 'Excellent ambidextrous first touch; needs strength work.'
!PN4.date := '2026-01-04'
!insert (P4, PN4) into PlayerPlayerNotes

!new TrainingObjective('TO4')
!TO4.areaToImprove := 'Upper-body strength for senior matches'
!TO4.startDate := '2026-01-01'
!TO4.endDate := '2026-03-01'
!TO4.success := false
!insert (TO4, P4) into TrainingObjectivePlayer

!new TrainingObjective('TO5')
!TO5.areaToImprove := 'Aerial duels timing'
!TO5.startDate := '2026-01-10'
!TO5.endDate := '2026-02-10'
!TO5.success := true
!insert (TO5, P4) into TrainingObjectivePlayer

!new TrainingSession('TS3')
!TS3.date := '2026-01-05'
!TS3.location := 'Hólar Frostpitch (half cleared of snow)'
!TS3.purpose := 'Goalkeeper handling drills in extreme cold'
!insert (T3, TS3) into TeamTraining

!new TrainingNotes('TN3')
!TN3.note := 'Ball hardness increased; switched to lower-pressure training balls.'
!TN3.date := '2026-01-05'
!insert (TS3, TN3) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA2')
!FA2.reason := 'Road closed due to sudden blizzard; unable to reach ground.'
!insert (TS3, FA2) into TrainingFailded
!insert (FA2, P3) into FailedPlayer

!new TrainingSession('TS4')
!TS4.date := '2026-01-05'
!TS4.location := 'Kōen Stadium Annex'
!TS4.purpose := 'Compact one-player technical session (solo wall passes + sprint starts)'
!insert (T4, TS4) into TeamTraining

!new TrainingNotes('TN4')
!TN4.note := 'Solo session logged; used rebound board to simulate pressure.'
!TN4.date := '2026-01-05'
!insert (TS4, TN4) into TrainingTrainingNotes

!new Competition('COMP2')
!COMP2.name := 'Transcontinental Friendly Cup'
!COMP2.type := 'Friendly'

!new Match('M2')
!M2.date := '2026-01-06'
!M2.homeAway := true
!insert (COMP2, M2) into CompetitionMatch
!insert (T3, M2) into LocalMatch
!insert (T4, M2) into VisitorMatch

!new MatchReport('MR2')
!MR2.duration := 120
!MR2.scoreVisitor := 0
!MR2.scoreLocal := 0
!insert (M2, MR2) into MatchMatchReport

!new MatchNote('MN1')
!MN1.note := 'Played behind closed doors due to weather; only two registered players participated.'
!MN1.date := '2026-01-06'
!insert (M2, MN1) into MatchMatchNote

!new MatchNote('MN2')
!MN2.note := 'Referee ended match after extended time; no shots on target recorded.'
!MN2.date := '2026-01-06'
!insert (M2, MN2) into MatchMatchNote

!new MatchPlayer('MP3')
!MP3.booked := false
!MP3.goals := 0
!MP3.rating := 0
!insert (P3, MP3) into PlayerMatch
!insert (M2, MP3) into MatchMatchPlayer

!new MatchPlayerPosition('MPP3')
!MPP3.positionName := #GOALKEEPER
!MPP3.number := 1
!insert (MP3, MPP3) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP4')
!MP4.booked := true
!MP4.goals := 0
!MP4.rating := 10
!insert (P4, MP4) into PlayerMatch
!insert (M2, MP4) into MatchMatchPlayer

!new MatchPlayerPosition('MPP4')
!MPP4.positionName := #FORWARD
!MPP4.number := 99
!insert (MP4, MPP4) into MatchPlayerMatchPlayerPosition
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 128 | 0.00% |
| Multiplicities Errors | 0 | 31 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 15 | 0.00% |

## Category invalid
```
!new Club('C5')
!C5.name := 'FC København'
!C5.homeGround := 'Parken Stadium (Copenhagen)'
!C5.chairman := 'Claus Thomsen'

!new Team('T5')
!T5.name := 'FCK First Team'
!insert (C5, T5) into ClubTeam

!new Club('C6')
!C6.name := 'Malmö FF'
!C6.homeGround := 'Eleda Stadion (Malmö)'
!C6.chairman := 'Katrin Nilsson'

!new Team('T6')
!T6.name := 'MFF Senior Men'
!insert (C6, T6) into ClubTeam

!new Club('C7')
!C7.name := 'IFK Göteborg'
!C7.homeGround := 'Gamla Ullevi (Gothenburg)'
!C7.chairman := 'Lars-Åke Berg'

!new Team('T7')
!T7.name := 'IFK Göteborg A-team'
!insert (C7, T7) into ClubTeam

!new Club('C8')
!C8.name := 'HJK Helsinki'
!C8.homeGround := 'Bolt Arena (Helsinki)'
!C8.chairman := 'Sari Lehtinen'

!new Team('T8')
!T8.name := 'HJK Edustus'
!insert (C8, T8) into ClubTeam

!new Player('P5')
!P5.name := 'Emil Hartmann'
!P5.age := 24
!P5.bestFoot := #RIGHT
!P5.phoneNumber := '+45 20 11 34 90'
!insert (T5, P5) into TeamPlayer

!new Position('POS9')
!POS9.positionName := #GOALKEEPER
!insert (P5, POS9) into PlayerPositions

!new TrainingObjective('TO6')
!TO6.areaToImprove := 'Quicker distribution under press'
!TO6.startDate := '2026-01-05'
!TO6.endDate := '2026-02-05'
!TO6.success := true
!insert (TO6, P5) into TrainingObjectivePlayer

!new PlayerNotes('PN5')
!PN5.note := 'Strong communication in defensive set pieces'
!PN5.date := '2026-01-12'
!insert (P5, PN5) into PlayerPlayerNotes

!new Player('P6')
!P6.name := 'Youssef El-Sayed'
!P6.age := 21
!P6.bestFoot := #BOTH
!P6.phoneNumber := '+45 31 77 04 18'
!insert (T5, P6) into TeamPlayer

!new Position('POS10')
!POS10.positionName := #MIDFIELDER
!insert (P6, POS10) into PlayerPositions

!new Position('POS11')
!POS11.positionName := #FORWARD
!insert (P6, POS11) into PlayerPositions

!new TrainingObjective('TO7')
!TO7.areaToImprove := 'Improve first-touch receiving on the half-turn'
!TO7.startDate := '2026-01-03'
!TO7.endDate := '2026-02-10'
!TO7.success := false
!insert (TO7, P6) into TrainingObjectivePlayer

!new PlayerNotes('PN6')
!PN6.note := 'Needs to scan earlier before receiving'
!PN6.date := '2026-01-10'
!insert (P6, PN6) into PlayerPlayerNotes

!new Player('P7')
!P7.name := 'Kenji Nakamura'
!P7.age := 27
!P7.bestFoot := #LEFT
!P7.phoneNumber := '+45 52 08 66 21'
!insert (T5, P7) into TeamPlayer

!new Position('POS12')
!POS12.positionName := #DEFENDER
!insert (P7, POS12) into PlayerPositions

!new Position('POS13')
!POS13.positionName := #MIDFIELDER
!insert (P7, POS13) into PlayerPositions

!new TrainingObjective('TO8')
!TO8.areaToImprove := 'Timing of overlaps and recovery runs'
!TO8.startDate := '2026-01-04'
!TO8.endDate := '2026-02-20'
!TO8.success := true
!insert (TO8, P7) into TrainingObjectivePlayer

!new TrainingSession('TS5')
!TS5.date := '2026-01-11'
!TS5.location := 'FCK Training Centre, Copenhagen'
!TS5.purpose := 'Pre-season pressing triggers + set-piece routines'
!insert (T5, TS5) into TeamTraining

!new TrainingNotes('TN5')
!TN5.note := 'Pressing line was too deep in first 20 minutes; corrected with shorter distances.'
!TN5.date := '2026-01-11'
!insert (TS5, TN5) into TrainingTrainingNotes

!new TrainingNotes('TN6')
!TN6.note := 'Attacking corner routine "Near-post screen" executed well.'
!TN6.date := '2026-01-11'
!insert (TS5, TN6) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA3')
!FA3.reason := 'Flu symptoms; sent home by medical staff.'
!insert (TS5, FA3) into TrainingFailded
!insert (FA3, P6) into FailedPlayer

!new Player('P8')
!P8.name := 'Oskar Lind'
!P8.age := 26
!P8.bestFoot := #RIGHT
!P8.phoneNumber := '+46 70 418 22 19'
!insert (T6, P8) into TeamPlayer

!new Position('POS14')
!POS14.positionName := #DEFENDER
!insert (P8, POS14) into PlayerPositions

!new TrainingObjective('TO9')
!TO9.areaToImprove := 'Improve 1v1 defending in wide areas'
!TO9.startDate := '2026-01-02'
!TO9.endDate := '2026-02-15'
!TO9.success := false
!insert (TO9, P8) into TrainingObjectivePlayer

!new PlayerNotes('PN7')
!PN7.note := 'Over-commits when winger feints inside'
!PN7.date := '2026-01-09'
!insert (P8, PN7) into PlayerPlayerNotes

!new Player('P9')
!P9.name := 'Mateo Kovačević'
!P9.age := 23
!P9.bestFoot := #LEFT
!P9.phoneNumber := '+46 73 990 14 02'
!insert (T6, P9) into TeamPlayer

!new Position('POS15')
!POS15.positionName := #FORWARD
!insert (P9, POS15) into PlayerPositions

!new TrainingObjective('TO10')
!TO10.areaToImprove := 'Finishing with weaker foot in the box'
!TO10.startDate := '2026-01-06'
!TO10.endDate := '2026-02-28'
!TO10.success := true
!insert (TO10, P9) into TrainingObjectivePlayer

!new TrainingSession('TS6')
!TS6.date := '2026-01-10'
!TS6.location := 'Malmö Stadion Training Pitch'
!TS6.purpose := 'Transitions after losing possession'
!insert (T6, TS6) into TeamTraining

!new TrainingNotes('TN7')
!TN7.note := 'Better counter-press shape; distances still inconsistent late.'
!TN7.date := '2026-01-10'
!insert (TS6, TN7) into TrainingTrainingNotes

!new TrainingNotes('TN8')
!TN8.note := 'Forward pressing cues improved after video clip review.'
!TN8.date := '2026-01-10'
!insert (TS6, TN8) into TrainingTrainingNotes

!new Player('P10')
!P10.name := 'Ahmed Al-Khatib'
!P10.age := 28
!P10.bestFoot := #RIGHT
!P10.phoneNumber := '+46 72 118 40 55'
!insert (T7, P10) into TeamPlayer

!new Position('POS16')
!POS16.positionName := #MIDFIELDER
!insert (P10, POS16) into PlayerPositions

!new TrainingObjective('TO11')
!TO11.areaToImprove := 'Reduce risky passes in own third'
!TO11.startDate := '2026-01-04'
!TO11.endDate := '2026-02-04'
!TO11.success := true
!insert (TO11, P10) into TrainingObjectivePlayer

!new PlayerNotes('PN8')
!PN8.note := 'Excellent tempo control when leading'
!PN8.date := '2026-01-13'
!insert (P10, PN8) into PlayerPlayerNotes

!new Player('P11')
!P11.name := 'Viktor Sjöberg'
!P11.age := 20
!P11.bestFoot := #BOTH
!P11.phoneNumber := '+46 76 331 09 70'
!insert (T7, P11) into TeamPlayer

!new Position('POS17')
!POS17.positionName := #GOALKEEPER
!insert (P11, POS17) into PlayerPositions

!new TrainingObjective('TO12')
!TO12.areaToImprove := 'Improve high-claiming on crosses'
!TO12.startDate := '2026-01-07'
!TO12.endDate := '2026-02-21'
!TO12.success := false
!insert (TO12, P11) into TrainingObjectivePlayer

!new TrainingSession('TS7')
!TS7.date := '2026-01-09'
!TS7.location := 'Kamratgården'
!TS7.purpose := 'Defensive block organization'
!insert (T7, TS7) into TeamTraining

!new TrainingNotes('TN9')
!TN9.note := 'Back line stepped together well; midfield line was late twice.'
!TN9.date := '2026-01-09'
!insert (TS7, TN9) into TrainingTrainingNotes

!new TrainingNotes('TN10')
!TN10.note := 'Goalkeeper communication drills repeated after confusion on second balls.'
!TN10.date := '2026-01-09'
!insert (TS7, TN10) into TrainingTrainingNotes

!new Player('P12')
!P12.name := 'Aino Laaksonen'
!P12.age := 22
!P12.bestFoot := #LEFT
!P12.phoneNumber := '+358 40 221 7788'
!insert (T8, P12) into TeamPlayer

!new Position('POS18')
!POS18.positionName := #MIDFIELDER
!insert (P12, POS18) into PlayerPositions

!new TrainingObjective('TO13')
!TO13.areaToImprove := 'Improve long passing accuracy to switch play'
!TO13.startDate := '2026-01-05'
!TO13.endDate := '2026-02-25'
!TO13.success := true
!insert (TO13, P12) into TrainingObjectivePlayer

!new PlayerNotes('PN9')
!PN9.note := 'Very good awareness between lines'
!PN9.date := '2026-01-14'
!insert (P12, PN9) into PlayerPlayerNotes

!new Player('P13')
!P13.name := 'Petteri Vuorinen'
!P13.age := 25
!P13.bestFoot := #RIGHT
!P13.phoneNumber := '+358 50 901 4412'
!insert (T8, P13) into TeamPlayer

!new Position('POS19')
!POS19.positionName := #FORWARD
!insert (P13, POS19) into PlayerPositions

!new TrainingObjective('TO14')
!TO14.areaToImprove := 'Better near-post runs on cutbacks'
!TO14.startDate := '2026-01-08'
!TO14.endDate := '2026-02-18'
!TO14.success := false
!insert (TO14, P13) into TrainingObjectivePlayer

!new TrainingSession('TS8')
!TS8.date := '2026-01-12'
!TS8.location := 'Bolt Arena Indoor'
!TS8.purpose := 'Finishing patterns + quick combinations'
!insert (T8, TS8) into TeamTraining

!new TrainingNotes('TN11')
!TN11.note := 'Shot volume high; needs calmer final touch under pressure.'
!TN11.date := '2026-01-12'
!insert (TS8, TN11) into TrainingTrainingNotes

!new TrainingNotes('TN12')
!TN12.note := 'Combination play improved when third-man runs were emphasized.'
!TN12.date := '2026-01-12'
!insert (TS8, TN12) into TrainingTrainingNotes

!new Competition('COMP3')
!COMP3.name := 'Nordic Invitational Cup 2026'
!COMP3.type := 'Pre-season tournament'

!new Match('M3')
!M3.date := '2026-01-14'
!M3.homeAway := true
!insert (COMP3, M3) into CompetitionMatch
!insert (T5, M3) into LocalMatch
!insert (T6, M3) into VisitorMatch

!new MatchReport('MR3')
!MR3.duration := 90
!MR3.scoreLocal := 2
!MR3.scoreVisitor := 1
!insert (M3, MR3) into MatchMatchReport

!new MatchEvent('ME1')
!ME1.eventType := #GOAL
!ME1.time := 17
!insert (M3, ME1) into MatchMatchEvent

!new MatchEvent('ME2')
!ME2.eventType := #FOUL
!ME2.time := 33
!insert (M3, ME2) into MatchMatchEvent

!new MatchEvent('ME3')
!ME3.eventType := #GOAL
!ME3.time := 51
!insert (M3, ME3) into MatchMatchEvent

!new MatchEvent('ME4')
!ME4.eventType := #CORNER
!ME4.time := 68
!insert (M3, ME4) into MatchMatchEvent

!new MatchEvent('ME5')
!ME5.eventType := #GOAL
!ME5.time := 84
!insert (M3, ME5) into MatchMatchEvent

!new MatchNote('MN3')
!MN3.note := 'FCK controlled central areas; Malmö dangerous on quick counters.'
!MN3.date := '2026-01-14'
!insert (M3, MN3) into MatchMatchNote

!new MatchPlayer('MP5')
!MP5.booked := false
!MP5.goals := 0
!MP5.rating := 7
!insert (P5, MP5) into PlayerMatch
!insert (M3, MP5) into MatchMatchPlayer

!new MatchPlayerPosition('MPP5')
!MPP5.positionName := #GOALKEEPER
!MPP5.number := 1
!insert (MP5, MPP5) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP6')
!MP6.booked := true
!MP6.goals := 0
!MP6.rating := 7
!insert (P7, MP6) into PlayerMatch
!insert (M3, MP6) into MatchMatchPlayer

!new MatchPlayerPosition('MPP6')
!MPP6.positionName := #DEFENDER
!MPP6.number := 3
!insert (MP6, MPP6) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP7')
!MP7.booked := false
!MP7.goals := 0
!MP7.rating := 6
!insert (P8, MP7) into PlayerMatch
!insert (M3, MP7) into MatchMatchPlayer

!new MatchPlayerPosition('MPP7')
!MPP7.positionName := #DEFENDER
!MPP7.number := 4
!insert (MP7, MPP7) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP8')
!MP8.booked := false
!MP8.goals := 1
!MP8.rating := 7
!insert (P9, MP8) into PlayerMatch
!insert (M3, MP8) into MatchMatchPlayer

!new MatchPlayerPosition('MPP8')
!MPP8.positionName := #FORWARD
!MPP8.number := 9
!insert (MP8, MPP8) into MatchPlayerMatchPlayerPosition

!new Match('M4')
!M4.date := '2026-01-17'
!M4.homeAway := true
!insert (COMP3, M4) into CompetitionMatch
!insert (T7, M4) into LocalMatch
!insert (T5, M4) into VisitorMatch

!new MatchReport('MR4')
!MR4.duration := 90
!MR4.scoreLocal := 0
!MR4.scoreVisitor := 0
!insert (M4, MR4) into MatchMatchReport

!new MatchEvent('ME6')
!ME6.eventType := #OFFSIDE
!ME6.time := 12
!insert (M4, ME6) into MatchMatchEvent

!new MatchEvent('ME7')
!ME7.eventType := #FOUL
!ME7.time := 57
!insert (M4, ME7) into MatchMatchEvent

!new MatchNote('MN4')
!MN4.note := 'Very compact game; both sides prioritized fitness and structure.'
!MN4.date := '2026-01-17'
!insert (M4, MN4) into MatchMatchNote

!new MatchPlayer('MP9')
!MP9.booked := false
!MP9.goals := 0
!MP9.rating := 6
!insert (P6, MP9) into PlayerMatch
!insert (M4, MP9) into MatchMatchPlayer

!new MatchPlayerPosition('MPP9')
!MPP9.positionName := #MIDFIELDER
!MPP9.number := 11
!insert (MP9, MPP9) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP10')
!MP10.booked := false
!MP10.goals := 0
!MP10.rating := 7
!insert (P7, MP10) into PlayerMatch
!insert (M4, MP10) into MatchMatchPlayer

!new MatchPlayerPosition('MPP10')
!MPP10.positionName := #DEFENDER
!MPP10.number := 3
!insert (MP10, MPP10) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP11')
!MP11.booked := true
!MP11.goals := 0
!MP11.rating := 7
!insert (P10, MP11) into PlayerMatch
!insert (M4, MP11) into MatchMatchPlayer

!new MatchPlayerPosition('MPP11')
!MPP11.positionName := #MIDFIELDER
!MPP11.number := 8
!insert (MP11, MPP11) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP12')
!MP12.booked := false
!MP12.goals := 0
!MP12.rating := 7
!insert (P11, MP12) into PlayerMatch
!insert (M4, MP12) into MatchMatchPlayer

!new MatchPlayerPosition('MPP12')
!MPP12.positionName := #GOALKEEPER
!MPP12.number := 1
!insert (MP12, MPP12) into MatchPlayerMatchPlayerPosition

!new Match('M5')
!M5.date := '2026-01-20'
!M5.homeAway := true
!insert (COMP3, M5) into CompetitionMatch
!insert (T5, M5) into LocalMatch
!insert (T8, M5) into VisitorMatch

!new MatchReport('MR5')
!MR5.duration := 90
!MR5.scoreLocal := 1
!MR5.scoreVisitor := 3
!insert (M5, MR5) into MatchMatchReport

!new MatchEvent('ME8')
!ME8.eventType := #GOAL
!ME8.time := 9
!insert (M5, ME8) into MatchMatchEvent

!new MatchEvent('ME9')
!ME9.eventType := #GOAL
!ME9.time := 23
!insert (M5, ME9) into MatchMatchEvent

!new MatchEvent('ME10')
!ME10.eventType := #PENALTY
!ME10.time := 24
!insert (M5, ME10) into MatchMatchEvent

!new MatchEvent('ME11')
!ME11.eventType := #GOAL
!ME11.time := 25
!insert (M5, ME11) into MatchMatchEvent

!new MatchEvent('ME12')
!ME12.eventType := #CORNER
!ME12.time := 41
!insert (M5, ME12) into MatchMatchEvent

!new MatchEvent('ME13')
!ME13.eventType := #GOAL
!ME13.time := 77
!insert (M5, ME13) into MatchMatchEvent

!new MatchNote('MN5')
!MN5.note := 'HJKs midfield rotations created overloads; FCK struggled after the penalty sequence.'
!MN5.date := '2026-01-20'
!insert (M5, MN5) into MatchMatchNote

!new MatchPlayer('MP13')
!MP13.booked := false
!MP13.goals := 0
!MP13.rating := 6
!insert (P5, MP13) into PlayerMatch
!insert (M5, MP13) into MatchMatchPlayer

!new MatchPlayerPosition('MPP13')
!MPP13.positionName := #GOALKEEPER
!MPP13.number := 1
!insert (MP13, MPP13) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP14')
!MP14.booked := false
!MP14.goals := 1
!MP14.rating := 7
!insert (P6, MP14) into PlayerMatch
!insert (M5, MP14) into MatchMatchPlayer

!new MatchPlayerPosition('MPP14')
!MPP14.positionName := #FORWARD
!MPP14.number := 11
!insert (MP14, MPP14) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP15')
!MP15.booked := false
!MP15.goals := 0
!MP15.rating := 8
!insert (P12, MP15) into PlayerMatch
!insert (M5, MP15) into MatchMatchPlayer

!new MatchPlayerPosition('MPP15')
!MPP15.positionName := #MIDFIELDER
!MPP15.number := 10
!insert (MP15, MPP15) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP16')
!MP16.booked := false
!MP16.goals := 2
!MP16.rating := 8
!insert (P13, MP16) into PlayerMatch
!insert (M5, MP16) into MatchMatchPlayer

!new MatchPlayerPosition('MPP16')
!MPP16.positionName := #FORWARD
!MPP16.number := 9
!insert (MP16, MPP16) into MatchPlayerMatchPlayerPosition
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 116 | 0.86% |
| Invariants Errors (Not included on General) | 0 | 4 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `LocalMatch':
  Object `T5' of class `Team' is connected to 2 objects of class `Match'
  at association end `localMatch' but the multiplicity is specified as `0..1'.
```

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 41 | 0.00% |

## Generation 1 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 1907 | 0.00% |
| Multiplicities Errors | 0 | 362 | 0.00% |
| Invariants Errors | 0 | 16 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 116 | 0.86% |
| Invariants Errors (Not included on General) | 0 | 4 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `LocalMatch':
  Object `T5' of class `Team' is connected to 2 objects of class `Match'
  at association end `localMatch' but the multiplicity is specified as `0..1'.
```

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 3 | 162 | 1.85% |

| Failed dates | 
|---| 
```
2026-02-05 18:30
```
```
2026-02-06 20:00
```
```
2026-02-10 19:30
```

# Generation 2
## Category baseline
```
!new Club('C20')
!C20.name := 'Kyoto Riverside SC'
!C20.homeGround := 'Kamo River Athletic Park'
!C20.chairman := 'Mika Takahashi'

!new Team('T25')
!T25.name := 'Riverside U21'
!insert (C20, T25) into ClubTeam

!new Club('C21')
!C21.name := 'Casablanca Atlas FC'
!C21.homeGround := 'Stade Al Atlas'
!C21.chairman := 'Youssef El Idrissi'

!new Team('T26')
!T26.name := 'Atlas City XI'
!insert (C21, T26) into ClubTeam

!new Player('P71')
!P71.name := 'Haruto Nakamura'
!P71.age := 20
!P71.bestFoot := #RIGHT
!P71.phoneNumber := '+81 90-1122-3344'
!insert (T25, P71) into TeamPlayer

!new Position('POS111')
!POS111.positionName := #GOALKEEPER
!insert (P71, POS111) into PlayerPositions

!new TrainingObjective('TO78')
!TO78.areaToImprove := 'Claiming crosses under contact'
!TO78.startDate := '2026-03-01'
!TO78.endDate := '2026-04-01'
!TO78.success := true
!insert (TO78, P71) into TrainingObjectivePlayer

!new PlayerNotes('PN31')
!PN31.note := 'Good shot-stopping; work on calling "keeper" earlier.'
!PN31.date := '2026-03-10'
!insert (P71, PN31) into PlayerPlayerNotes

!new Player('P72')
!P72.name := 'Ren Saitō'
!P72.age := 19
!P72.bestFoot := #BOTH
!P72.phoneNumber := '+81 80-4455-6677'
!insert (T25, P72) into TeamPlayer

!new Position('POS112')
!POS112.positionName := #DEFENDER
!insert (P72, POS112) into PlayerPositions

!new Position('POS113')
!POS113.positionName := #MIDFIELDER
!insert (P72, POS113) into PlayerPositions

!new TrainingObjective('TO79')
!TO79.areaToImprove := 'Switching play with first-time passes'
!TO79.startDate := '2026-03-05'
!TO79.endDate := '2026-04-05'
!TO79.success := false
!insert (TO79, P72) into TrainingObjectivePlayer

!new TrainingObjective('TO80')
!TO80.areaToImprove := 'Defensive scanning before receiving'
!TO80.startDate := '2026-03-05'
!TO80.endDate := '2026-03-25'
!TO80.success := true
!insert (TO80, P72) into TrainingObjectivePlayer

!new Player('P73')
!P73.name := 'Yuna Kobayashi'
!P73.age := 21
!P73.bestFoot := #LEFT
!P73.phoneNumber := '+81 70-9090-1212'
!insert (T25, P73) into TeamPlayer

!new Position('POS114')
!POS114.positionName := #MIDFIELDER
!insert (P73, POS114) into PlayerPositions

!new TrainingObjective('TO81')
!TO81.areaToImprove := 'Turning out of pressure on left foot'
!TO81.startDate := '2026-03-02'
!TO81.endDate := '2026-04-02'
!TO81.success := true
!insert (TO81, P73) into TrainingObjectivePlayer

!new PlayerNotes('PN32')
!PN32.note := 'Excellent tempo control; encourage more through balls.'
!PN32.date := '2026-03-12'
!insert (P73, PN32) into PlayerPlayerNotes

!new Player('P74')
!P74.name := 'Daichi Watanabe'
!P74.age := 20
!P74.bestFoot := #RIGHT
!P74.phoneNumber := '+81 90-7788-9900'
!insert (T25, P74) into TeamPlayer

!new Position('POS115')
!POS115.positionName := #FORWARD
!insert (P74, POS115) into PlayerPositions

!new Position('POS116')
!POS116.positionName := #MIDFIELDER
!insert (P74, POS116) into PlayerPositions

!new Position('POS117')
!POS117.positionName := #DEFENDER
!insert (P74, POS117) into PlayerPositions

!new TrainingObjective('TO82')
!TO82.areaToImprove := 'Pressing angle to force play outside'
!TO82.startDate := '2026-03-03'
!TO82.endDate := '2026-04-03'
!TO82.success := false
!insert (TO82, P74) into TrainingObjectivePlayer

!new Player('P75')
!P75.name := 'Tsubasa Mori'
!P75.age := 18
!P75.bestFoot := #RIGHT
!P75.phoneNumber := '+81 80-2323-4545'
!insert (T25, P75) into TeamPlayer

!new Position('POS118')
!POS118.positionName := #DEFENDER
!insert (P75, POS118) into PlayerPositions

!new TrainingObjective('TO83')
!TO83.areaToImprove := 'Timing interceptions (step vs drop)'
!TO83.startDate := '2026-03-04'
!TO83.endDate := '2026-04-04'
!TO83.success := true
!insert (TO83, P75) into TrainingObjectivePlayer

!new Player('P76')
!P76.name := 'Akira Fujimoto'
!P76.age := 21
!P76.bestFoot := #LEFT
!P76.phoneNumber := '+81 70-5656-7878'
!insert (T25, P76) into TeamPlayer

!new Position('POS119')
!POS119.positionName := #FORWARD
!insert (P76, POS119) into PlayerPositions

!new TrainingObjective('TO84')
!TO84.areaToImprove := 'Composure in 1v1 finishing'
!TO84.startDate := '2026-03-01'
!TO84.endDate := '2026-04-01'
!TO84.success := false
!insert (TO84, P76) into TrainingObjectivePlayer

!new Player('P77')
!P77.name := 'Salma Aït Benali'
!P77.age := 24
!P77.bestFoot := #RIGHT
!P77.phoneNumber := '+212 6 61 22 33 44'
!insert (T26, P77) into TeamPlayer

!new Position('POS120')
!POS120.positionName := #GOALKEEPER
!insert (P77, POS120) into PlayerPositions

!new Position('POS121')
!POS121.positionName := #DEFENDER
!insert (P77, POS121) into PlayerPositions

!new TrainingObjective('TO85')
!TO85.areaToImprove := 'Long throws to start counters'
!TO85.startDate := '2026-03-06'
!TO85.endDate := '2026-04-06'
!TO85.success := true
!insert (TO85, P77) into TrainingObjectivePlayer

!new Player('P78')
!P78.name := 'Omar El Mansouri'
!P78.age := 27
!P78.bestFoot := #BOTH
!P78.phoneNumber := '+212 6 20 90 11 22'
!insert (T26, P78) into TeamPlayer

!new Position('POS122')
!POS122.positionName := #DEFENDER
!insert (P78, POS122) into PlayerPositions

!new TrainingObjective('TO86')
!TO86.areaToImprove := 'Avoiding unnecessary fouls in wide areas'
!TO86.startDate := '2026-03-02'
!TO86.endDate := '2026-04-02'
!TO86.success := false
!insert (TO86, P78) into TrainingObjectivePlayer

!new Player('P79')
!P79.name := 'Imane Zohra'
!P79.age := 22
!P79.bestFoot := #LEFT
!P79.phoneNumber := '+212 6 77 55 44 33'
!insert (T26, P79) into TeamPlayer

!new Position('POS123')
!POS123.positionName := #MIDFIELDER
!insert (P79, POS123) into PlayerPositions

!new Position('POS124')
!POS124.positionName := #FORWARD
!insert (P79, POS124) into PlayerPositions

!new TrainingObjective('TO87')
!TO87.areaToImprove := 'Receiving between lines and quick release'
!TO87.startDate := '2026-03-01'
!TO87.endDate := '2026-04-01'
!TO87.success := true
!insert (TO87, P79) into TrainingObjectivePlayer

!new Player('P80')
!P80.name := 'Nabil Cherkaoui'
!P80.age := 25
!P80.bestFoot := #RIGHT
!P80.phoneNumber := '+212 6 88 10 20 30'
!insert (T26, P80) into TeamPlayer

!new Position('POS125')
!POS125.positionName := #MIDFIELDER
!insert (P80, POS125) into PlayerPositions

!new TrainingObjective('TO88')
!TO88.areaToImprove := 'Cover shadow positioning in midfield press'
!TO88.startDate := '2026-03-03'
!TO88.endDate := '2026-04-03'
!TO88.success := true
!insert (TO88, P80) into TrainingObjectivePlayer

!new Player('P81')
!P81.name := 'Hiba El Amrani'
!P81.age := 23
!P81.bestFoot := #RIGHT
!P81.phoneNumber := '+212 6 99 33 22 11'
!insert (T26, P81) into TeamPlayer

!new Position('POS126')
!POS126.positionName := #DEFENDER
!insert (P81, POS126) into PlayerPositions

!new Position('POS127')
!POS127.positionName := #MIDFIELDER
!insert (P81, POS127) into PlayerPositions

!new TrainingObjective('TO89')
!TO89.areaToImprove := 'First touch away from pressure'
!TO89.startDate := '2026-03-04'
!TO89.endDate := '2026-04-04'
!TO89.success := false
!insert (TO89, P81) into TrainingObjectivePlayer

!new Player('P82')
!P82.name := 'Rachid Bounouar'
!P82.age := 28
!P82.bestFoot := #LEFT
!P82.phoneNumber := '+212 6 55 66 77 88'
!insert (T26, P82) into TeamPlayer

!new Position('POS128')
!POS128.positionName := #FORWARD
!insert (P82, POS128) into PlayerPositions

!new TrainingObjective('TO90')
!TO90.areaToImprove := 'Attacking near post on corners'
!TO90.startDate := '2026-03-05'
!TO90.endDate := '2026-04-05'
!TO90.success := true
!insert (TO90, P82) into TrainingObjectivePlayer

!new TrainingSession('TS33')
!TS33.date := '2026-03-11 17:45'
!TS33.location := 'Kamo River Athletic Park – Field B'
!TS33.purpose := 'Build-up under press + finishing transitions'
!insert (T25, TS33) into TeamTraining

!new TrainingNotes('TN52')
!TN52.note := 'Back line improved spacing; pivot offered better passing lanes.'
!TN52.date := '2026-03-11'
!insert (TS33, TN52) into TrainingTrainingNotes

!new TrainingNotes('TN53')
!TN53.note := 'Finishing drill: slow down before strike, aim far post.'
!TN53.date := '2026-03-11'
!insert (TS33, TN53) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA17')
!FA17.reason := 'University exam timetable conflict.'
!insert (TS33, FA17) into TrainingFailded
!insert (FA17, P75) into FailedPlayer

!new TrainingFailedToAttend('FA18')
!FA18.reason := 'Missed train; arrived after session ended.'
!insert (TS33, FA18) into TrainingFailded
!insert (FA18, P72) into FailedPlayer

!new TrainingSession('TS34')
!TS34.date := '2026-03-14 09:30'
!TS34.location := 'Kyoto Sports Hall – Indoor Court 1'
!TS34.purpose := 'Set pieces + compact 4v4 defending'
!insert (T25, TS34) into TeamTraining

!new TrainingNotes('TN54')
!TN54.note := 'Corners: designated blocker created space at far post.'
!TN54.date := '2026-03-14'
!insert (TS34, TN54) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA19')
!FA19.reason := 'Minor ankle soreness; rested per physio advice.'
!insert (TS34, FA19) into TrainingFailded
!insert (FA19, P76) into FailedPlayer

!new TrainingSession('TS35')
!TS35.date := '2026-03-12 21:00'
!TS35.location := 'Stade Al Atlas – Annex Pitch'
!TS35.purpose := 'Mid-block pressing triggers + penalty practice'
!insert (T26, TS35) into TeamTraining

!new TrainingNotes('TN55')
!TN55.note := 'Press timing improved; midfield line moved as a unit.'
!TN55.date := '2026-03-12'
!insert (TS35, TN55) into TrainingTrainingNotes

!new Competition('COMP9')
!COMP9.name := 'Sakura-Atlas Invitational'
!COMP9.type := 'Pre-season international friendly'

!new Match('M15')
!M15.date := '2026-03-18 19:00'
!M15.homeAway := false
!insert (COMP9, M15) into CompetitionMatch
!insert (T25, M15) into LocalMatch
!insert (T26, M15) into VisitorMatch

!new MatchReport('MR15')
!MR15.duration := 90
!MR15.scoreVisitor := 0
!MR15.scoreLocal := 0
!insert (M15, MR15) into MatchMatchReport

!new MatchNote('MN18')
!MN18.note := 'Windy conditions; teams kept passes on the floor to reduce turnovers.'
!MN18.date := '2026-03-18'
!insert (M15, MN18) into MatchMatchNote

!new MatchEvent('ME83')
!ME83.eventType := #FOUL
!ME83.time := 12
!insert (M15, ME83) into MatchMatchEvent

!new MatchEvent('ME84')
!ME84.eventType := #CORNER
!ME84.time := 27
!insert (M15, ME84) into MatchMatchEvent

!new MatchEvent('ME85')
!ME85.eventType := #OFFSIDE
!ME85.time := 44
!insert (M15, ME85) into MatchMatchEvent

!new MatchEvent('ME86')
!ME86.eventType := #PENALTY
!ME86.time := 61
!insert (M15, ME86) into MatchMatchEvent

!new MatchEvent('ME87')
!ME87.eventType := #FOUL
!ME87.time := 78
!insert (M15, ME87) into MatchMatchEvent

!new MatchPlayer('MP78')
!MP78.booked := false
!MP78.goals := 0
!MP78.rating := 7
!insert (P71, MP78) into PlayerMatch
!insert (M15, MP78) into MatchMatchPlayer

!new MatchPlayerPosition('MPP78')
!MPP78.positionName := #GOALKEEPER
!MPP78.number := 1
!insert (MP78, MPP78) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP79')
!MP79.booked := false
!MP79.goals := 0
!MP79.rating := 6
!insert (P72, MP79) into PlayerMatch
!insert (M15, MP79) into MatchMatchPlayer

!new MatchPlayerPosition('MPP79')
!MPP79.positionName := #DEFENDER
!MPP79.number := 4
!insert (MP79, MPP79) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP80')
!MP80.booked := false
!MP80.goals := 0
!MP80.rating := 7
!insert (P73, MP80) into PlayerMatch
!insert (M15, MP80) into MatchMatchPlayer

!new MatchPlayerPosition('MPP80')
!MPP80.positionName := #MIDFIELDER
!MPP80.number := 8
!insert (MP80, MPP80) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP81')
!MP81.booked := true
!MP81.goals := 0
!MP81.rating := 6
!insert (P74, MP81) into PlayerMatch
!insert (M15, MP81) into MatchMatchPlayer

!new MatchPlayerPosition('MPP81')
!MPP81.positionName := #FORWARD
!MPP81.number := 11
!insert (MP81, MPP81) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP82')
!MP82.booked := false
!MP82.goals := 0
!MP82.rating := 6
!insert (P75, MP82) into PlayerMatch
!insert (M15, MP82) into MatchMatchPlayer

!new MatchPlayerPosition('MPP82')
!MPP82.positionName := #DEFENDER
!MPP82.number := 5
!insert (MP82, MPP82) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP83')
!MP83.booked := false
!MP83.goals := 0
!MP83.rating := 6
!insert (P76, MP83) into PlayerMatch
!insert (M15, MP83) into MatchMatchPlayer

!new MatchPlayerPosition('MPP83')
!MPP83.positionName := #FORWARD
!MPP83.number := 9
!insert (MP83, MPP83) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP84')
!MP84.booked := false
!MP84.goals := 0
!MP84.rating := 8
!insert (P77, MP84) into PlayerMatch
!insert (M15, MP84) into MatchMatchPlayer

!new MatchPlayerPosition('MPP84')
!MPP84.positionName := #GOALKEEPER
!MPP84.number := 1
!insert (MP84, MPP84) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP85')
!MP85.booked := true
!MP85.goals := 0
!MP85.rating := 5
!insert (P78, MP85) into PlayerMatch
!insert (M15, MP85) into MatchMatchPlayer

!new MatchPlayerPosition('MPP85')
!MPP85.positionName := #DEFENDER
!MPP85.number := 3
!insert (MP85, MPP85) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP86')
!MP86.booked := false
!MP86.goals := 0
!MP86.rating := 7
!insert (P79, MP86) into PlayerMatch
!insert (M15, MP86) into MatchMatchPlayer

!new MatchPlayerPosition('MPP86')
!MPP86.positionName := #MIDFIELDER
!MPP86.number := 10
!insert (MP86, MPP86) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP87')
!MP87.booked := false
!MP87.goals := 0
!MP87.rating := 6
!insert (P80, MP87) into PlayerMatch
!insert (M15, MP87) into MatchMatchPlayer

!new MatchPlayerPosition('MPP87')
!MPP87.positionName := #MIDFIELDER
!MPP87.number := 6
!insert (MP87, MPP87) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP88')
!MP88.booked := false
!MP88.goals := 0
!MP88.rating := 6
!insert (P81, MP88) into PlayerMatch
!insert (M15, MP88) into MatchMatchPlayer

!new MatchPlayerPosition('MPP88')
!MPP88.positionName := #DEFENDER
!MPP88.number := 2
!insert (MP88, MPP88) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP89')
!MP89.booked := false
!MP89.goals := 0
!MP89.rating := 6
!insert (P82, MP89) into PlayerMatch
!insert (M15, MP89) into MatchMatchPlayer

!new MatchPlayerPosition('MPP89')
!MPP89.positionName := #FORWARD
!MPP89.number := 7
!insert (MP89, MPP89) into MatchPlayerMatchPlayerPosition
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 427 | 0.00% |
| Multiplicities Errors | 0 | 106 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 4 | 37 | 10.81% |

| Failed dates | 
|---| 
```
2026-03-11 17:45
```
```
2026-03-14 09:30
```
```
2026-03-12 21:00
```
```
2026-03-18 19:00
```

## Category boundary
```
!new Club('C18')
!C18.name := 'Club Atlético Valparaíso'
!C18.homeGround := 'Estadio Playa Ancha'
!C18.chairman := 'Camila Rojas'

!new Team('T21')
!T21.name := 'Valparaíso Reserves'
!insert (C18, T21) into ClubTeam

!new Team('T22')
!T22.name := 'Valparaíso Coastal XI'
!insert (C18, T22) into ClubTeam

!new Club('C19')
!C19.name := 'Göteborg Aurora IF'
!C19.homeGround := 'Aurora Park (Göteborg)'
!C19.chairman := 'Lars Nystrom'

!new Team('T23')
!T23.name := 'Aurora U21'
!insert (C19, T23) into ClubTeam

!new Team('T24')
!T24.name := 'Aurora First Team'
!insert (C19, T24) into ClubTeam

!new Player('P61')
!P61.name := 'Martin Tincho Araya'
!P61.age := 19
!P61.bestFoot := #RIGHT
!P61.phoneNumber := '+56-9-7210-1188'
!insert (T21, P61) into TeamPlayer

!new Position('POS90')
!POS90.positionName := #MIDFIELDER
!insert (P61, POS90) into PlayerPositions

!new Position('POS91')
!POS91.positionName := #FORWARD
!insert (P61, POS91) into PlayerPositions

!new Position('POS92')
!POS92.positionName := #DEFENDER
!insert (P61, POS92) into PlayerPositions

!new TrainingObjective('TO63')
!TO63.areaToImprove := 'Switch of play under pressure'
!TO63.startDate := '2026-02-20'
!TO63.endDate := '2026-03-20'
!TO63.success := false
!insert (TO63, P61) into TrainingObjectivePlayer

!new TrainingObjective('TO64')
!TO64.areaToImprove := 'Stamina for extra time'
!TO64.startDate := '2026-02-25'
!TO64.endDate := '2026-03-25'
!TO64.success := false
!insert (TO64, P61) into TrainingObjectivePlayer

!new PlayerNotes('PN24')
!PN24.note := 'Needs clearer communication when dropping between lines.'
!PN24.date := '2026-02-22'
!insert (P61, PN24) into PlayerPlayerNotes

!new Player('P62')
!P62.name := 'Sofia Contreras'
!P62.age := 20
!P62.bestFoot := #LEFT
!P62.phoneNumber := '+56-9-6033-4412'
!insert (T21, P62) into TeamPlayer

!new Position('POS93')
!POS93.positionName := #DEFENDER
!insert (P62, POS93) into PlayerPositions

!new TrainingObjective('TO65')
!TO65.areaToImprove := 'Timing of tackles to avoid bookings'
!TO65.startDate := '2026-02-18'
!TO65.endDate := '2026-03-18'
!TO65.success := true
!insert (TO65, P62) into TrainingObjectivePlayer

!new Player('P63')
!P63.name := 'Diego Munoz'
!P63.age := 18
!P63.bestFoot := #BOTH
!P63.phoneNumber := '+56-9-5551-0021'
!insert (T21, P63) into TeamPlayer

!new Position('POS94')
!POS94.positionName := #FORWARD
!insert (P63, POS94) into PlayerPositions

!new Position('POS95')
!POS95.positionName := #MIDFIELDER
!insert (P63, POS95) into PlayerPositions

!new TrainingObjective('TO66')
!TO66.areaToImprove := 'Finishing with weaker foot'
!TO66.startDate := '2026-02-19'
!TO66.endDate := '2026-03-19'
!TO66.success := false
!insert (TO66, P63) into TrainingObjectivePlayer

!new PlayerNotes('PN25')
!PN25.note := 'Excellent pressing effort; faded after 70 minutes.'
!PN25.date := '2026-02-26'
!insert (P63, PN25) into PlayerPlayerNotes

!new PlayerNotes('PN26')
!PN26.note := 'Practiced volleys after training.'
!PN26.date := '2026-02-28'
!insert (P63, PN26) into PlayerPlayerNotes

!new Player('P64')
!P64.name := 'Daniela Paredes'
!P64.age := 34
!P64.bestFoot := #RIGHT
!P64.phoneNumber := '+56-9-8800-0404'
!insert (T22, P64) into TeamPlayer

!new Position('POS96')
!POS96.positionName := #GOALKEEPER
!insert (P64, POS96) into PlayerPositions

!new Position('POS97')
!POS97.positionName := #DEFENDER
!insert (P64, POS97) into PlayerPositions

!new Position('POS98')
!POS98.positionName := #MIDFIELDER
!insert (P64, POS98) into PlayerPositions

!new TrainingObjective('TO67')
!TO67.areaToImprove := 'Distribution accuracy (short passing)'
!TO67.startDate := '2026-02-10'
!TO67.endDate := '2026-03-10'
!TO67.success := true
!insert (TO67, P64) into TrainingObjectivePlayer

!new TrainingObjective('TO68')
!TO68.areaToImprove := 'Reaction saves from close range'
!TO68.startDate := '2026-02-12'
!TO68.endDate := '2026-03-12'
!TO68.success := false
!insert (TO68, P64) into TrainingObjectivePlayer

!new TrainingObjective('TO69')
!TO69.areaToImprove := 'Leadership: organizing the back line'
!TO69.startDate := '2026-02-15'
!TO69.endDate := '2026-04-01'
!TO69.success := false
!insert (TO69, P64) into TrainingObjectivePlayer

!new Player('P65')
!P65.name := 'Erik Lund'
!P65.age := 21
!P65.bestFoot := #RIGHT
!P65.phoneNumber := '+46-70-111-22-33'
!insert (T23, P65) into TeamPlayer

!new Position('POS99')
!POS99.positionName := #FORWARD
!insert (P65, POS99) into PlayerPositions

!new Position('POS100')
!POS100.positionName := #MIDFIELDER
!insert (P65, POS100) into PlayerPositions

!new TrainingObjective('TO70')
!TO70.areaToImprove := 'Pressing triggers and angles'
!TO70.startDate := '2026-02-23'
!TO70.endDate := '2026-03-23'
!TO70.success := true
!insert (TO70, P65) into TrainingObjectivePlayer

!new PlayerNotes('PN27')
!PN27.note := 'Very effective in transition; keep runs timed.'
!PN27.date := '2026-02-24'
!insert (P65, PN27) into PlayerPlayerNotes

!new Player('P66')
!P66.name := 'Hawa Abdi'
!P66.age := 20
!P66.bestFoot := #LEFT
!P66.phoneNumber := '+46-70-444-55-66'
!insert (T23, P66) into TeamPlayer

!new Position('POS101')
!POS101.positionName := #MIDFIELDER
!insert (P66, POS101) into PlayerPositions

!new Position('POS102')
!POS102.positionName := #DEFENDER
!insert (P66, POS102) into PlayerPositions

!new Position('POS103')
!POS103.positionName := #FORWARD
!insert (P66, POS103) into PlayerPositions

!new TrainingObjective('TO71')
!TO71.areaToImprove := 'Long passing (diagonals)'
!TO71.startDate := '2026-02-21'
!TO71.endDate := '2026-03-21'
!TO71.success := false
!insert (TO71, P66) into TrainingObjectivePlayer

!new TrainingObjective('TO72')
!TO72.areaToImprove := 'Avoiding offside timing when pushing up'
!TO72.startDate := '2026-02-21'
!TO72.endDate := '2026-03-05'
!TO72.success := true
!insert (TO72, P66) into TrainingObjectivePlayer

!new Player('P67')
!P67.name := 'Bjorn Karlsson'
!P67.age := 29
!P67.bestFoot := #BOTH
!P67.phoneNumber := '+46-73-900-10-10'
!insert (T24, P67) into TeamPlayer

!new Position('POS104')
!POS104.positionName := #GOALKEEPER
!insert (P67, POS104) into PlayerPositions

!new TrainingObjective('TO73')
!TO73.areaToImprove := 'Handling crosses in wet conditions'
!TO73.startDate := '2026-02-20'
!TO73.endDate := '2026-03-20'
!TO73.success := false
!insert (TO73, P67) into TrainingObjectivePlayer

!new PlayerNotes('PN28')
!PN28.note := 'Good command of area; work on quick throws.'
!PN28.date := '2026-02-27'
!insert (P67, PN28) into PlayerPlayerNotes

!new Player('P68')
!P68.name := 'Noura Al-Hassan'
!P68.age := 26
!P68.bestFoot := #RIGHT
!P68.phoneNumber := '+46-72-333-44-55'
!insert (T24, P68) into TeamPlayer

!new Position('POS105')
!POS105.positionName := #DEFENDER
!insert (P68, POS105) into PlayerPositions

!new Position('POS106')
!POS106.positionName := #MIDFIELDER
!insert (P68, POS106) into PlayerPositions

!new TrainingObjective('TO74')
!TO74.areaToImprove := 'Clean tackling technique'
!TO74.startDate := '2026-02-22'
!TO74.endDate := '2026-03-22'
!TO74.success := true
!insert (TO74, P68) into TrainingObjectivePlayer

!new Player('P69')
!P69.name := 'Mateo Fernandez'
!P69.age := 23
!P69.bestFoot := #LEFT
!P69.phoneNumber := '+46-76-101-20-30'
!insert (T24, P69) into TeamPlayer

!new Position('POS107')
!POS107.positionName := #MIDFIELDER
!insert (P69, POS107) into PlayerPositions

!new Position('POS108')
!POS108.positionName := #FORWARD
!insert (P69, POS108) into PlayerPositions

!new Position('POS109')
!POS109.positionName := #DEFENDER
!insert (P69, POS109) into PlayerPositions

!new TrainingObjective('TO75')
!TO75.areaToImprove := 'Set-piece delivery consistency'
!TO75.startDate := '2026-02-25'
!TO75.endDate := '2026-03-25'
!TO75.success := false
!insert (TO75, P69) into TrainingObjectivePlayer

!new TrainingObjective('TO76')
!TO76.areaToImprove := 'Decision-making in final third'
!TO76.startDate := '2026-02-25'
!TO76.endDate := '2026-04-05'
!TO76.success := false
!insert (TO76, P69) into TrainingObjectivePlayer

!new PlayerNotes('PN29')
!PN29.note := 'Must scan earlier before receiving under pressure.'
!PN29.date := '2026-02-26'
!insert (P69, PN29) into PlayerPlayerNotes

!new PlayerNotes('PN30')
!PN30.note := 'Excellent left-foot service from wide areas.'
!PN30.date := '2026-03-01'
!insert (P69, PN30) into PlayerPlayerNotes

!new Player('P70')
!P70.name := 'Aino Virtanen'
!P70.age := 19
!P70.bestFoot := #RIGHT
!P70.phoneNumber := '+46-70-808-70-70'
!insert (T24, P70) into TeamPlayer

!new Position('POS110')
!POS110.positionName := #FORWARD
!insert (P70, POS110) into PlayerPositions

!new TrainingObjective('TO77')
!TO77.areaToImprove := 'Composure in one-on-ones'
!TO77.startDate := '2026-02-24'
!TO77.endDate := '2026-03-24'
!TO77.success := false
!insert (TO77, P70) into TrainingObjectivePlayer

!new TrainingSession('TS26')
!TS26.date := '2026-02-27'
!TS26.location := 'Playa Ancha Auxiliary Field'
!TS26.purpose := 'High-intensity transitions; late-game scenarios'
!insert (T21, TS26) into TeamTraining

!new TrainingNotes('TN41')
!TN41.note := 'Repeated sprint drills; monitor fatigue signs.'
!TN41.date := '2026-02-27'
!insert (TS26, TN41) into TrainingTrainingNotes

!new TrainingNotes('TN42')
!TN42.note := 'Focused on counter-press immediately after loss.'
!TN42.date := '2026-02-27'
!insert (TS26, TN42) into TrainingTrainingNotes

!new TrainingNotes('TN43')
!TN43.note := 'Finished with penalties under noise distraction.'
!TN43.date := '2026-02-27'
!insert (TS26, TN43) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA13')
!FA13.reason := 'University exam overlap'
!insert (TS26, FA13) into TrainingFailded
!insert (FA13, P61) into FailedPlayer

!new TrainingFailedToAttend('FA14')
!FA14.reason := 'Family commitment; informed staff in advance'
!insert (TS26, FA14) into TrainingFailded
!insert (FA14, P62) into FailedPlayer

!new TrainingSession('TS27')
!TS27.date := '2026-02-25'
!TS27.location := 'Cerro Baron Community Pitch'
!TS27.purpose := 'Goalkeeper distribution and defensive shape'
!insert (T22, TS27) into TeamTraining

!new TrainingNotes('TN44')
!TN44.note := 'Worked on short build-up; quick decision on back-pass.'
!TN44.date := '2026-02-25'
!insert (TS27, TN44) into TrainingTrainingNotes

!new TrainingSession('TS28')
!TS28.date := '2026-03-03'
!TS28.location := 'Estadio Playa Ancha (inner pitch)'
!TS28.purpose := 'Low-load recovery after travel'
!insert (T22, TS28) into TeamTraining

!new TrainingNotes('TN45')
!TN45.note := 'Mobility and light handling; no heavy impact drills.'
!TN45.date := '2026-03-03'
!insert (TS28, TN45) into TrainingTrainingNotes

!new TrainingNotes('TN46')
!TN46.note := 'Short video review: positioning on cutbacks.'
!TN46.date := '2026-03-03'
!insert (TS28, TN46) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA15')
!FA15.reason := 'Migraine'
!insert (TS28, FA15) into TrainingFailded
!insert (FA15, P64) into FailedPlayer

!new TrainingSession('TS29')
!TS29.date := '2026-02-26'
!TS29.location := 'Slottsskogen Training Ground'
!TS29.purpose := 'Compact defending and quick outlets'
!insert (T23, TS29) into TeamTraining

!new TrainingNotes('TN47')
!TN47.note := 'Offside line coordination improved after walkthrough.'
!TN47.date := '2026-02-26'
!insert (TS29, TN47) into TrainingTrainingNotes

!new TrainingSession('TS30')
!TS30.date := '2026-02-24'
!TS30.location := 'Aurora Park Indoor Hall'
!TS30.purpose := 'Set pieces: corners and free kicks'
!insert (T24, TS30) into TeamTraining

!new TrainingNotes('TN48')
!TN48.note := 'Near-post corner routines created space consistently.'
!TN48.date := '2026-02-24'
!insert (TS30, TN48) into TrainingTrainingNotes

!new TrainingNotes('TN49')
!TN49.note := 'Goalkeepers practiced claiming in crowded box.'
!TN49.date := '2026-02-24'
!insert (TS30, TN49) into TrainingTrainingNotes

!new TrainingSession('TS31')
!TS31.date := '2026-02-28'
!TS31.location := 'Aurora Park Main Pitch'
!TS31.purpose := 'Match tempo + finishing under pressure'
!insert (T24, TS31) into TeamTraining

!new TrainingNotes('TN50')
!TN50.note := 'Finishing drills: improved first-time shots from cutbacks.'
!TN50.date := '2026-02-28'
!insert (TS31, TN50) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA16')
!FA16.reason := 'Minor ankle swelling; medical staff advised rest'
!insert (TS31, FA16) into TrainingFailded
!insert (FA16, P70) into FailedPlayer

!new TrainingSession('TS32')
!TS32.date := '2026-03-02'
!TS32.location := 'Aurora Park (training strip)'
!TS32.purpose := 'Tactical rehearsal for hosting match'
!insert (T24, TS32) into TeamTraining

!new TrainingNotes('TN51')
!TN51.note := 'Rehearsed press triggers; midfield line stayed connected.'
!TN51.date := '2026-03-02'
!insert (TS32, TN51) into TrainingTrainingNotes

!new Competition('COMP8')
!COMP8.name := 'North-South Invitational Series'
!COMP8.type := 'Invitational Friendly'

!new Match('M13')
!M13.date := '2026-03-02'
!M13.homeAway := true
!insert (COMP8, M13) into CompetitionMatch
!insert (T21, M13) into LocalMatch
!insert (T23, M13) into VisitorMatch

!new MatchReport('MR13')
!MR13.duration := 120
!MR13.scoreLocal := 4
!MR13.scoreVisitor := 5
!insert (M13, MR13) into MatchMatchReport

!new MatchEvent('ME65')
!ME65.eventType := #GOAL
!ME65.time := 1
!insert (M13, ME65) into MatchMatchEvent

!new MatchEvent('ME66')
!ME66.eventType := #FOUL
!ME66.time := 7
!insert (M13, ME66) into MatchMatchEvent

!new MatchEvent('ME67')
!ME67.eventType := #GOAL
!ME67.time := 12
!insert (M13, ME67) into MatchMatchEvent

!new MatchEvent('ME68')
!ME68.eventType := #OFFSIDE
!ME68.time := 23
!insert (M13, ME68) into MatchMatchEvent

!new MatchEvent('ME69')
!ME69.eventType := #GOAL
!ME69.time := 31
!insert (M13, ME69) into MatchMatchEvent

!new MatchEvent('ME70')
!ME70.eventType := #CORNER
!ME70.time := 38
!insert (M13, ME70) into MatchMatchEvent

!new MatchEvent('ME71')
!ME71.eventType := #GOAL
!ME71.time := 44
!insert (M13, ME71) into MatchMatchEvent

!new MatchEvent('ME72')
!ME72.eventType := #PENALTY
!ME72.time := 45
!insert (M13, ME72) into MatchMatchEvent

!new MatchEvent('ME73')
!ME73.eventType := #GOAL
!ME73.time := 46
!insert (M13, ME73) into MatchMatchEvent

!new MatchEvent('ME74')
!ME74.eventType := #GOAL
!ME74.time := 63
!insert (M13, ME74) into MatchMatchEvent

!new MatchEvent('ME75')
!ME75.eventType := #FOUL
!ME75.time := 71
!insert (M13, ME75) into MatchMatchEvent

!new MatchEvent('ME76')
!ME76.eventType := #GOAL
!ME76.time := 88
!insert (M13, ME76) into MatchMatchEvent

!new MatchEvent('ME77')
!ME77.eventType := #GOAL
!ME77.time := 105
!insert (M13, ME77) into MatchMatchEvent

!new MatchEvent('ME78')
!ME78.eventType := #GOAL
!ME78.time := 120
!insert (M13, ME78) into MatchMatchEvent

!new MatchNote('MN16')
!MN16.note := 'High-tempo match went to extra time; both sides scored late.'
!MN16.date := '2026-03-02'
!insert (M13, MN16) into MatchMatchNote

!new MatchNote('MN17')
!MN17.note := 'Set-piece defending was inconsistent; conceded after second balls.'
!MN17.date := '2026-03-02'
!insert (M13, MN17) into MatchMatchNote

!new MatchPlayer('MP68')
!MP68.booked := false
!MP68.goals := 1
!MP68.rating := 7
!insert (P61, MP68) into PlayerMatch
!insert (M13, MP68) into MatchMatchPlayer

!new MatchPlayerPosition('MPP68')
!MPP68.positionName := #MIDFIELDER
!MPP68.number := 8
!insert (MP68, MPP68) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP69')
!MP69.booked := true
!MP69.goals := 0
!MP69.rating := 5
!insert (P62, MP69) into PlayerMatch
!insert (M13, MP69) into MatchMatchPlayer

!new MatchPlayerPosition('MPP69')
!MPP69.positionName := #DEFENDER
!MPP69.number := 4
!insert (MP69, MPP69) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP70')
!MP70.booked := false
!MP70.goals := 3
!MP70.rating := 9
!insert (P63, MP70) into PlayerMatch
!insert (M13, MP70) into MatchMatchPlayer

!new MatchPlayerPosition('MPP70')
!MPP70.positionName := #FORWARD
!MPP70.number := 11
!insert (MP70, MPP70) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP71')
!MP71.booked := false
!MP71.goals := 3
!MP71.rating := 8
!insert (P65, MP71) into PlayerMatch
!insert (M13, MP71) into MatchMatchPlayer

!new MatchPlayerPosition('MPP71')
!MPP71.positionName := #FORWARD
!MPP71.number := 9
!insert (MP71, MPP71) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP72')
!MP72.booked := false
!MP72.goals := 2
!MP72.rating := 8
!insert (P66, MP72) into PlayerMatch
!insert (M13, MP72) into MatchMatchPlayer

!new MatchPlayerPosition('MPP72')
!MPP72.positionName := #MIDFIELDER
!MPP72.number := 6
!insert (MP72, MPP72) into MatchPlayerMatchPlayerPosition

!new Match('M14')
!M14.date := '2026-03-05'
!M14.homeAway := false
!insert (COMP8, M14) into CompetitionMatch
!insert (T24, M14) into LocalMatch
!insert (T22, M14) into VisitorMatch

!new MatchReport('MR14')
!MR14.duration := 90
!MR14.scoreLocal := 1
!MR14.scoreVisitor := 0
!insert (M14, MR14) into MatchMatchReport

!new MatchEvent('ME79')
!ME79.eventType := #CORNER
!ME79.time := 14
!insert (M14, ME79) into MatchMatchEvent

!new MatchEvent('ME80')
!ME80.eventType := #FOUL
!ME80.time := 52
!insert (M14, ME80) into MatchMatchEvent

!new MatchEvent('ME81')
!ME81.eventType := #PENALTY
!ME81.time := 77
!insert (M14, ME81) into MatchMatchEvent

!new MatchEvent('ME82')
!ME82.eventType := #GOAL
!ME82.time := 88
!insert (M14, ME82) into MatchMatchEvent

!new MatchPlayer('MP73')
!MP73.booked := false
!MP73.goals := 0
!MP73.rating := 6
!insert (P67, MP73) into PlayerMatch
!insert (M14, MP73) into MatchMatchPlayer

!new MatchPlayerPosition('MPP73')
!MPP73.positionName := #GOALKEEPER
!MPP73.number := 1
!insert (MP73, MPP73) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP74')
!MP74.booked := true
!MP74.goals := 0
!MP74.rating := 6
!insert (P68, MP74) into PlayerMatch
!insert (M14, MP74) into MatchMatchPlayer

!new MatchPlayerPosition('MPP74')
!MPP74.positionName := #DEFENDER
!MPP74.number := 5
!insert (MP74, MPP74) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP75')
!MP75.booked := false
!MP75.goals := 1
!MP75.rating := 8
!insert (P69, MP75) into PlayerMatch
!insert (M14, MP75) into MatchMatchPlayer

!new MatchPlayerPosition('MPP75')
!MPP75.positionName := #MIDFIELDER
!MPP75.number := 10
!insert (MP75, MPP75) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP76')
!MP76.booked := false
!MP76.goals := 0
!MP76.rating := 5
!insert (P70, MP76) into PlayerMatch
!insert (M14, MP76) into MatchMatchPlayer

!new MatchPlayerPosition('MPP76')
!MPP76.positionName := #FORWARD
!MPP76.number := 7
!insert (MP76, MPP76) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP77')
!MP77.booked := false
!MP77.goals := 0
!MP77.rating := 7
!insert (P64, MP77) into PlayerMatch
!insert (M14, MP77) into MatchMatchPlayer

!new MatchPlayerPosition('MPP77')
!MPP77.positionName := #GOALKEEPER
!MPP77.number := 13
!insert (MP77, MPP77) into MatchPlayerMatchPlayerPosition
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 561 | 0.00% |
| Multiplicities Errors | 0 | 141 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 59 | 0.00% |

## Category complex
```
!new Club('C28')
!C28.name := 'Raja Casablanca Community Club'
!C28.homeGround := 'Stade Pere Jego (Annexe)'
!C28.chairman := 'Hicham El Amrani'

!new Team('T35')
!T35.name := 'Raja Casablanca Reserves'
!insert (C28, T35) into ClubTeam

!new Team('T36')
!T36.name := 'Raja Casablanca Women'
!insert (C28, T36) into ClubTeam

!new Club('C29')
!C29.name := 'Helsinki Aurora SC'
!C29.homeGround := 'Aurora Training Center, Toolo'
!C29.chairman := 'Sari Lehtinen'

!new Team('T37')
!T37.name := 'Helsinki Aurora First Team'
!insert (C29, T37) into ClubTeam

!new Club('C30')
!C30.name := 'Kerala Seagulls FC'
!C30.homeGround := 'Kozhikode Beachside Ground'
!C30.chairman := 'Anand Menon'

!new Team('T38')
!T38.name := 'Kerala Seagulls Senior Team'
!insert (C30, T38) into ClubTeam

!new Player('P108')
!P108.name := 'Youssef Bennis'
!P108.age := 20
!P108.bestFoot := #RIGHT
!P108.phoneNumber := '+212 6 12 34 56 78'
!insert (T35, P108) into TeamPlayer

!new Position('POS167')
!POS167.positionName := #FORWARD
!insert (P108, POS167) into PlayerPositions

!new Position('POS168')
!POS168.positionName := #MIDFIELDER
!insert (P108, POS168) into PlayerPositions

!new TrainingObjective('TO120')
!TO120.areaToImprove := 'Shots across goal from right channel'
!TO120.startDate := '2026-02-10'
!TO120.endDate := '2026-03-10'
!TO120.success := false
!insert (TO120, P108) into TrainingObjectivePlayer

!new PlayerNotes('PN45')
!PN45.note := 'Needs earlier scan before receiving between lines.'
!PN45.date := '2026-02-18'
!insert (P108, PN45) into PlayerPlayerNotes

!new Player('P109')
!P109.name := 'Ilyas Chafik'
!P109.age := 21
!P109.bestFoot := #LEFT
!P109.phoneNumber := '+212 6 98 76 54 32'
!insert (T35, P109) into TeamPlayer

!new Position('POS169')
!POS169.positionName := #MIDFIELDER
!insert (P109, POS169) into PlayerPositions

!new TrainingObjective('TO121')
!TO121.areaToImprove := 'Long passing accuracy under press'
!TO121.startDate := '2026-02-10'
!TO121.endDate := '2026-03-05'
!TO121.success := true
!insert (TO121, P109) into TrainingObjectivePlayer

!new Player('P110')
!P110.name := 'Hamza Rami'
!P110.age := 19
!P110.bestFoot := #BOTH
!P110.phoneNumber := '+212 6 55 00 11 22'
!insert (T35, P110) into TeamPlayer

!new Position('POS170')
!POS170.positionName := #DEFENDER
!insert (P110, POS170) into PlayerPositions

!new Position('POS171')
!POS171.positionName := #MIDFIELDER
!insert (P110, POS171) into PlayerPositions

!new TrainingObjective('TO122')
!TO122.areaToImprove := 'Defensive transitions: recover central lane'
!TO122.startDate := '2026-02-11'
!TO122.endDate := '2026-03-12'
!TO122.success := false
!insert (TO122, P110) into TrainingObjectivePlayer

!new Player('P111')
!P111.name := 'Nabil Zerouali'
!P111.age := 22
!P111.bestFoot := #RIGHT
!P111.phoneNumber := '+212 6 44 33 22 11'
!insert (T35, P111) into TeamPlayer

!new Position('POS172')
!POS172.positionName := #GOALKEEPER
!insert (P111, POS172) into PlayerPositions

!new TrainingObjective('TO123')
!TO123.areaToImprove := 'Handling low crosses at near post'
!TO123.startDate := '2026-02-11'
!TO123.endDate := '2026-03-20'
!TO123.success := false
!insert (TO123, P111) into TrainingObjectivePlayer

!new Player('P112')
!P112.name := 'Salma Idrissi'
!P112.age := 23
!P112.bestFoot := #RIGHT
!P112.phoneNumber := '+212 6 20 21 22 23'
!insert (T36, P112) into TeamPlayer

!new Position('POS173')
!POS173.positionName := #FORWARD
!insert (P112, POS173) into PlayerPositions

!new TrainingObjective('TO124')
!TO124.areaToImprove := 'Finishing after cut-back'
!TO124.startDate := '2026-02-12'
!TO124.endDate := '2026-03-15'
!TO124.success := false
!insert (TO124, P112) into TrainingObjectivePlayer

!new Player('P113')
!P113.name := 'Nour El Khatib'
!P113.age := 24
!P113.bestFoot := #BOTH
!P113.phoneNumber := '+212 6 30 31 32 33'
!insert (T36, P113) into TeamPlayer

!new Position('POS174')
!POS174.positionName := #MIDFIELDER
!insert (P113, POS174) into PlayerPositions

!new Position('POS175')
!POS175.positionName := #DEFENDER
!insert (P113, POS175) into PlayerPositions

!new TrainingObjective('TO125')
!TO125.areaToImprove := 'Tempo control and foul avoidance'
!TO125.startDate := '2026-02-12'
!TO125.endDate := '2026-03-10'
!TO125.success := false
!insert (TO125, P113) into TrainingObjectivePlayer

!new PlayerNotes('PN46')
!PN46.note := 'Leadership improving; keep her as on-field organizer.'
!PN46.date := '2026-02-20'
!insert (P113, PN46) into PlayerPlayerNotes

!new Player('P114')
!P114.name := 'Hanae Bouzid'
!P114.age := 22
!P114.bestFoot := #LEFT
!P114.phoneNumber := '+212 6 40 41 42 43'
!insert (T36, P114) into TeamPlayer

!new Position('POS176')
!POS176.positionName := #DEFENDER
!insert (P114, POS176) into PlayerPositions

!new TrainingObjective('TO126')
!TO126.areaToImprove := 'Back-post marking on corners'
!TO126.startDate := '2026-02-13'
!TO126.endDate := '2026-03-25'
!TO126.success := false
!insert (TO126, P114) into TrainingObjectivePlayer

!new Player('P115')
!P115.name := 'Meryem Saadi'
!P115.age := 25
!P115.bestFoot := #RIGHT
!P115.phoneNumber := '+212 6 50 51 52 53'
!insert (T36, P115) into TeamPlayer

!new Position('POS177')
!POS177.positionName := #GOALKEEPER
!insert (P115, POS177) into PlayerPositions

!new TrainingObjective('TO127')
!TO127.areaToImprove := 'Punching vs catching in traffic'
!TO127.startDate := '2026-02-13'
!TO127.endDate := '2026-03-18'
!TO127.success := false
!insert (TO127, P115) into TrainingObjectivePlayer

!new Player('P116')
!P116.name := 'Aino Makinen'
!P116.age := 26
!P116.bestFoot := #LEFT
!P116.phoneNumber := '+358 40 123 4567'
!insert (T37, P116) into TeamPlayer

!new Position('POS178')
!POS178.positionName := #MIDFIELDER
!insert (P116, POS178) into PlayerPositions

!new TrainingObjective('TO128')
!TO128.areaToImprove := 'Third-man combinations in half-space'
!TO128.startDate := '2026-02-08'
!TO128.endDate := '2026-03-08'
!TO128.success := true
!insert (TO128, P116) into TrainingObjectivePlayer

!new Player('P117')
!P117.name := 'Jere Virtanen'
!P117.age := 27
!P117.bestFoot := #RIGHT
!P117.phoneNumber := '+358 50 765 4321'
!insert (T37, P117) into TeamPlayer

!new Position('POS179')
!POS179.positionName := #DEFENDER
!insert (P117, POS179) into PlayerPositions

!new TrainingObjective('TO129')
!TO129.areaToImprove := 'Defending diagonal balls behind fullback'
!TO129.startDate := '2026-02-09'
!TO129.endDate := '2026-03-22'
!TO129.success := false
!insert (TO129, P117) into TrainingObjectivePlayer

!new Player('P118')
!P118.name := 'Mikko Laine'
!P118.age := 24
!P118.bestFoot := #BOTH
!P118.phoneNumber := '+358 45 010 2020'
!insert (T37, P118) into TeamPlayer

!new Position('POS180')
!POS180.positionName := #FORWARD
!insert (P118, POS180) into PlayerPositions

!new Position('POS181')
!POS181.positionName := #MIDFIELDER
!insert (P118, POS181) into PlayerPositions

!new TrainingObjective('TO130')
!TO130.areaToImprove := 'Pressing angle to force play wide'
!TO130.startDate := '2026-02-09'
!TO130.endDate := '2026-03-01'
!TO130.success := true
!insert (TO130, P118) into TrainingObjectivePlayer

!new Player('P119')
!P119.name := 'Saara Niemi'
!P119.age := 28
!P119.bestFoot := #RIGHT
!P119.phoneNumber := '+358 44 333 2211'
!insert (T37, P119) into TeamPlayer

!new Position('POS182')
!POS182.positionName := #GOALKEEPER
!insert (P119, POS182) into PlayerPositions

!new TrainingObjective('TO131')
!TO131.areaToImprove := 'Quick restarts: throw distribution'
!TO131.startDate := '2026-02-10'
!TO131.endDate := '2026-03-12'
!TO131.success := false
!insert (TO131, P119) into TrainingObjectivePlayer

!new PlayerNotes('PN47')
!PN47.note := 'Great communication with back line; keep set-piece calling consistent.'
!PN47.date := '2026-02-19'
!insert (P119, PN47) into PlayerPlayerNotes

!new Player('P120')
!P120.name := 'Arjun Nair'
!P120.age := 23
!P120.bestFoot := #RIGHT
!P120.phoneNumber := '+91 98470 11223'
!insert (T38, P120) into TeamPlayer

!new Position('POS183')
!POS183.positionName := #FORWARD
!insert (P120, POS183) into PlayerPositions

!new TrainingObjective('TO132')
!TO132.areaToImprove := 'Timing runs vs offside line'
!TO132.startDate := '2026-02-14'
!TO132.endDate := '2026-03-14'
!TO132.success := false
!insert (TO132, P120) into TrainingObjectivePlayer

!new Player('P121')
!P121.name := 'Fathima Rahman'
!P121.age := 21
!P121.bestFoot := #LEFT
!P121.phoneNumber := '+91 97455 77889'
!insert (T38, P121) into TeamPlayer

!new Position('POS184')
!POS184.positionName := #MIDFIELDER
!insert (P121, POS184) into PlayerPositions

!new TrainingObjective('TO133')
!TO133.areaToImprove := 'Switching play with weaker foot'
!TO133.startDate := '2026-02-14'
!TO133.endDate := '2026-03-20'
!TO133.success := false
!insert (TO133, P121) into TrainingObjectivePlayer

!new Player('P122')
!P122.name := 'Vishnu Kumar'
!P122.age := 25
!P122.bestFoot := #BOTH
!P122.phoneNumber := '+91 98950 33445'
!insert (T38, P122) into TeamPlayer

!new Position('POS185')
!POS185.positionName := #DEFENDER
!insert (P122, POS185) into PlayerPositions

!new Position('POS186')
!POS186.positionName := #MIDFIELDER
!insert (P122, POS186) into PlayerPositions

!new TrainingObjective('TO134')
!TO134.areaToImprove := 'Clearances under pressure (distance + direction)'
!TO134.startDate := '2026-02-15'
!TO134.endDate := '2026-03-10'
!TO134.success := true
!insert (TO134, P122) into TrainingObjectivePlayer

!new Player('P123')
!P123.name := 'George Mathew'
!P123.age := 29
!P123.bestFoot := #RIGHT
!P123.phoneNumber := '+91 99610 55667'
!insert (T38, P123) into TeamPlayer

!new Position('POS187')
!POS187.positionName := #GOALKEEPER
!insert (P123, POS187) into PlayerPositions

!new TrainingObjective('TO135')
!TO135.areaToImprove := 'Handling wet-ball shots'
!TO135.startDate := '2026-02-15'
!TO135.endDate := '2026-03-25'
!TO135.success := false
!insert (TO135, P123) into TrainingObjectivePlayer

!new PlayerNotes('PN48')
!PN48.note := 'Prefers to stay on line; coach encouraging earlier claims on crosses.'
!PN48.date := '2026-02-21'
!insert (P123, PN48) into PlayerPlayerNotes

!new TrainingSession('TS46')
!TS46.date := '2026-02-16'
!TS46.location := 'Stade Pere Jego - Pitch B'
!TS46.purpose := 'Build-up under high press (6v4)'
!insert (T35, TS46) into TeamTraining

!new TrainingNotes('TN79')
!TN79.note := 'Midfielder must offer behind first press line, not alongside CB.'
!TN79.date := '2026-02-16'
!insert (TS46, TN79) into TrainingTrainingNotes

!new TrainingNotes('TN80')
!TN80.note := 'GK distribution: vary to fullback vs direct to 9.'
!TN80.date := '2026-02-16'
!insert (TS46, TN80) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA34')
!FA34.reason := 'University exam overlap'
!insert (TS46, FA34) into TrainingFailded
!insert (FA34, P109) into FailedPlayer

!new TrainingFailedToAttend('FA35')
!FA35.reason := 'Minor ankle swelling; physio advised rest'
!insert (TS46, FA35) into TrainingFailded
!insert (FA35, P110) into FailedPlayer

!new TrainingSession('TS47')
!TS47.date := '2026-02-23'
!TS47.location := 'Stade Pere Jego - Gym'
!TS47.purpose := 'Strength: posterior chain + sprint mechanics'
!insert (T35, TS47) into TeamTraining

!new TrainingNotes('TN81')
!TN81.note := 'Sprint drill: focus on shin angle and arm drive.'
!TN81.date := '2026-02-23'
!insert (TS47, TN81) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA36')
!FA36.reason := 'Family obligation (out of town)'
!insert (TS47, FA36) into TrainingFailded
!insert (FA36, P109) into FailedPlayer

!new TrainingSession('TS48')
!TS48.date := '2026-02-17'
!TS48.location := 'Complexe Sportif Oasis'
!TS48.purpose := 'Attacking patterns: overlaps and cut-backs'
!insert (T36, TS48) into TeamTraining

!new TrainingNotes('TN82')
!TN82.note := 'Winger must delay run to arrive at cut-back zone.'
!TN82.date := '2026-02-17'
!insert (TS48, TN82) into TrainingTrainingNotes

!new TrainingSession('TS49')
!TS49.date := '2026-02-24'
!TS49.location := 'Complexe Sportif Oasis'
!TS49.purpose := 'Set pieces: defending corners + zonal triggers'
!insert (T36, TS49) into TeamTraining

!new TrainingNotes('TN83')
!TN83.note := 'Back-post responsibility clarified; communicate early.'
!TN83.date := '2026-02-24'
!insert (TS49, TN83) into TrainingTrainingNotes

!new TrainingNotes('TN84')
!TN84.note := 'GK positioning: start 1 step higher to attack second balls.'
!TN84.date := '2026-02-24'
!insert (TS49, TN84) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA37')
!FA37.reason := 'Migraine episode'
!insert (TS49, FA37) into TrainingFailded
!insert (FA37, P112) into FailedPlayer

!new TrainingSession('TS50')
!TS50.date := '2026-02-15'
!TS50.location := 'Aurora Training Center - Field 1'
!TS50.purpose := 'Cold-weather ball circulation + pressing traps'
!insert (T37, TS50) into TeamTraining

!new TrainingNotes('TN85')
!TN85.note := 'Press trap: invite pass to RB then jump with 8 + winger.'
!TN85.date := '2026-02-15'
!insert (TS50, TN85) into TrainingTrainingNotes

!new TrainingNotes('TN86')
!TN86.note := 'Keep touches to 2 max in build-up phase.'
!TN86.date := '2026-02-15'
!insert (TS50, TN86) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA38')
!FA38.reason := 'Public transport delay; arrived after session ended'
!insert (TS50, FA38) into TrainingFailded
!insert (FA38, P117) into FailedPlayer

!new TrainingSession('TS51')
!TS51.date := '2026-02-18'
!TS51.location := 'Kozhikode Beachside Ground'
!TS51.purpose := 'Defensive organization + transitions in humidity'
!insert (T38, TS51) into TeamTraining

!new TrainingNotes('TN87')
!TN87.note := 'Compactness improved; hold line at top of box then step together.'
!TN87.date := '2026-02-18'
!insert (TS51, TN87) into TrainingTrainingNotes

!new TrainingSession('TS52')
!TS52.date := '2026-02-25'
!TS52.location := 'Kozhikode Beachside Ground'
!TS52.purpose := 'Finishing + penalty rehearsal on wet sand-side turf'
!insert (T38, TS52) into TeamTraining

!new TrainingNotes('TN88')
!TN88.note := 'Penalties: pick corner early; keep head steady on strike.'
!TN88.date := '2026-02-25'
!insert (TS52, TN88) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA39')
!FA39.reason := 'Food poisoning symptoms'
!insert (TS52, FA39) into TrainingFailded
!insert (FA39, P120) into FailedPlayer

!new Competition('COMP13')
!COMP13.name := 'Coastal and Nordic Development Shield 2026'
!COMP13.type := 'International development friendlies'

!new Match('M20')
!M20.date := '2026-03-02'
!M20.homeAway := true
!insert (COMP13, M20) into CompetitionMatch
!insert (T37, M20) into LocalMatch
!insert (T35, M20) into VisitorMatch

!new MatchReport('MR20')
!MR20.duration := 90
!MR20.scoreLocal := 1
!MR20.scoreVisitor := 2
!insert (M20, MR20) into MatchMatchReport

!new MatchEvent('ME112')
!ME112.eventType := #GOAL
!ME112.time := 14
!insert (M20, ME112) into MatchMatchEvent

!new MatchEvent('ME113')
!ME113.eventType := #FOUL
!ME113.time := 33
!insert (M20, ME113) into MatchMatchEvent

!new MatchEvent('ME114')
!ME114.eventType := #GOAL
!ME114.time := 58
!insert (M20, ME114) into MatchMatchEvent

!new MatchEvent('ME115')
!ME115.eventType := #OFFSIDE
!ME115.time := 67
!insert (M20, ME115) into MatchMatchEvent

!new MatchEvent('ME116')
!ME116.eventType := #GOAL
!ME116.time := 81
!insert (M20, ME116) into MatchMatchEvent

!new MatchNote('MN26')
!MN26.note := 'Visitor adjusted by dropping the 9 into midfield; created late overloads.'
!MN26.date := '2026-03-02'
!insert (M20, MN26) into MatchMatchNote

!new MatchNote('MN27')
!MN27.note := 'Local keepers quick throws started two counterattacks.'
!MN27.date := '2026-03-02'
!insert (M20, MN27) into MatchMatchNote

!new MatchPlayer('MP105')
!MP105.booked := false
!MP105.goals := 0
!MP105.rating := 7
!insert (P119, MP105) into PlayerMatch
!insert (M20, MP105) into MatchMatchPlayer

!new MatchPlayerPosition('MPP105')
!MPP105.positionName := #GOALKEEPER
!MPP105.number := 1
!insert (MP105, MPP105) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP106')
!MP106.booked := true
!MP106.goals := 0
!MP106.rating := 6
!insert (P117, MP106) into PlayerMatch
!insert (M20, MP106) into MatchMatchPlayer

!new MatchPlayerPosition('MPP106')
!MPP106.positionName := #DEFENDER
!MPP106.number := 3
!insert (MP106, MPP106) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP107')
!MP107.booked := false
!MP107.goals := 0
!MP107.rating := 7
!insert (P116, MP107) into PlayerMatch
!insert (M20, MP107) into MatchMatchPlayer

!new MatchPlayerPosition('MPP107')
!MPP107.positionName := #MIDFIELDER
!MPP107.number := 8
!insert (MP107, MPP107) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP108')
!MP108.booked := false
!MP108.goals := 1
!MP108.rating := 8
!insert (P118, MP108) into PlayerMatch
!insert (M20, MP108) into MatchMatchPlayer

!new MatchPlayerPosition('MPP108')
!MPP108.positionName := #FORWARD
!MPP108.number := 9
!insert (MP108, MPP108) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP109')
!MP109.booked := false
!MP109.goals := 0
!MP109.rating := 6
!insert (P111, MP109) into PlayerMatch
!insert (M20, MP109) into MatchMatchPlayer

!new MatchPlayerPosition('MPP109')
!MPP109.positionName := #GOALKEEPER
!MPP109.number := 1
!insert (MP109, MPP109) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP110')
!MP110.booked := false
!MP110.goals := 0
!MP110.rating := 6
!insert (P110, MP110) into PlayerMatch
!insert (M20, MP110) into MatchMatchPlayer

!new MatchPlayerPosition('MPP110')
!MPP110.positionName := #DEFENDER
!MPP110.number := 5
!insert (MP110, MPP110) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP111')
!MP111.booked := false
!MP111.goals := 1
!MP111.rating := 7
!insert (P109, MP111) into PlayerMatch
!insert (M20, MP111) into MatchMatchPlayer

!new MatchPlayerPosition('MPP111')
!MPP111.positionName := #MIDFIELDER
!MPP111.number := 6
!insert (MP111, MPP111) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP112')
!MP112.booked := false
!MP112.goals := 1
!MP112.rating := 7
!insert (P108, MP112) into PlayerMatch
!insert (M20, MP112) into MatchMatchPlayer

!new MatchPlayerPosition('MPP112')
!MPP112.positionName := #FORWARD
!MPP112.number := 11
!insert (MP112, MPP112) into MatchPlayerMatchPlayerPosition

!new Match('M21')
!M21.date := '2026-03-05'
!M21.homeAway := false
!insert (COMP13, M21) into CompetitionMatch
!insert (T36, M21) into LocalMatch
!insert (T38, M21) into VisitorMatch

!new MatchReport('MR21')
!MR21.duration := 93
!MR21.scoreLocal := 0
!MR21.scoreVisitor := 0
!insert (M21, MR21) into MatchMatchReport

!new MatchEvent('ME117')
!ME117.eventType := #FOUL
!ME117.time := 12
!insert (M21, ME117) into MatchMatchEvent

!new MatchEvent('ME118')
!ME118.eventType := #CORNER
!ME118.time := 39
!insert (M21, ME118) into MatchMatchEvent

!new MatchEvent('ME119')
!ME119.eventType := #PENALTY
!ME119.time := 74
!insert (M21, ME119) into MatchMatchEvent

!new MatchEvent('ME120')
!ME120.eventType := #OFFSIDE
!ME120.time := 86
!insert (M21, ME120) into MatchMatchEvent

!new MatchNote('MN28')
!MN28.note := 'Penalty at 74 minutes was struck low to the left and saved.'
!MN28.date := '2026-03-05'
!insert (M21, MN28) into MatchMatchNote

!new MatchNote('MN29')
!MN29.note := 'Both teams struggled with wind; crosses held up in the air.'
!MN29.date := '2026-03-05'
!insert (M21, MN29) into MatchMatchNote

!new MatchPlayer('MP113')
!MP113.booked := false
!MP113.goals := 0
!MP113.rating := 8
!insert (P115, MP113) into PlayerMatch
!insert (M21, MP113) into MatchMatchPlayer

!new MatchPlayerPosition('MPP113')
!MPP113.positionName := #GOALKEEPER
!MPP113.number := 1
!insert (MP113, MPP113) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP114')
!MP114.booked := false
!MP114.goals := 0
!MP114.rating := 6
!insert (P114, MP114) into PlayerMatch
!insert (M21, MP114) into MatchMatchPlayer

!new MatchPlayerPosition('MPP114')
!MPP114.positionName := #DEFENDER
!MPP114.number := 4
!insert (MP114, MPP114) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP115')
!MP115.booked := true
!MP115.goals := 0
!MP115.rating := 7
!insert (P113, MP115) into PlayerMatch
!insert (M21, MP115) into MatchMatchPlayer

!new MatchPlayerPosition('MPP115')
!MPP115.positionName := #MIDFIELDER
!MPP115.number := 6
!insert (MP115, MPP115) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP116')
!MP116.booked := false
!MP116.goals := 0
!MP116.rating := 6
!insert (P112, MP116) into PlayerMatch
!insert (M21, MP116) into MatchMatchPlayer

!new MatchPlayerPosition('MPP116')
!MPP116.positionName := #FORWARD
!MPP116.number := 10
!insert (MP116, MPP116) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP117')
!MP117.booked := false
!MP117.goals := 0
!MP117.rating := 7
!insert (P123, MP117) into PlayerMatch
!insert (M21, MP117) into MatchMatchPlayer

!new MatchPlayerPosition('MPP117')
!MPP117.positionName := #GOALKEEPER
!MPP117.number := 1
!insert (MP117, MPP117) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP118')
!MP118.booked := false
!MP118.goals := 0
!MP118.rating := 6
!insert (P122, MP118) into PlayerMatch
!insert (M21, MP118) into MatchMatchPlayer

!new MatchPlayerPosition('MPP118')
!MPP118.positionName := #DEFENDER
!MPP118.number := 5
!insert (MP118, MPP118) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP119')
!MP119.booked := false
!MP119.goals := 0
!MP119.rating := 6
!insert (P121, MP119) into PlayerMatch
!insert (M21, MP119) into MatchMatchPlayer

!new MatchPlayerPosition('MPP119')
!MPP119.positionName := #MIDFIELDER
!MPP119.number := 8
!insert (MP119, MPP119) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP120')
!MP120.booked := false
!MP120.goals := 0
!MP120.rating := 5
!insert (P120, MP120) into PlayerMatch
!insert (M21, MP120) into MatchMatchPlayer

!new MatchPlayerPosition('MPP120')
!MPP120.positionName := #FORWARD
!MPP120.number := 9
!insert (MP120, MPP120) into MatchPlayerMatchPlayerPosition
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 631 | 0.00% |
| Multiplicities Errors | 0 | 159 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 59 | 0.00% |

## Category edge
```
!new Club('C11')
!C11.name := 'Recife Aurora Clube'
!C11.homeGround := 'Estádio da Maré'
!C11.chairman := 'Carolina Bezerra'

!new Team('T11')
!T11.name := 'Aurora Feminino'
!insert (C11, T11) into ClubTeam

!new Team('T12')
!T12.name := 'Aurora U23'
!insert (C11, T12) into ClubTeam

!new Club('C12')
!C12.name := 'Lagos Harbor Rangers'
!C12.homeGround := 'Harborline Field'
!C12.chairman := 'Chinedu Okafor'

!new Team('T13')
!T13.name := 'Harbor Rangers First XI'
!insert (C12, T13) into ClubTeam

!new Club('C13')
!C13.name := 'SV Kleinstadt 1910'
!C13.homeGround := 'Waldparkstadion'
!C13.chairman := 'Anke Vogel'

!new Team('T14')
!T14.name := 'Kleinstadt Reserven'
!insert (C13, T14) into ClubTeam

!new Player('P24')
!P24.name := 'Mariana Souza'
!P24.age := 28
!P24.bestFoot := #RIGHT
!P24.phoneNumber := '+55 81 98888-1201'
!insert (T11, P24) into TeamPlayer

!new Position('POS39')
!POS39.positionName := #MIDFIELDER
!insert (P24, POS39) into PlayerPositions

!new Position('POS40')
!POS40.positionName := #FORWARD
!insert (P24, POS40) into PlayerPositions

!new TrainingObjective('TO25')
!TO25.areaToImprove := 'Late runs into the box'
!TO25.startDate := '2026-02-01'
!TO25.endDate := '2026-03-01'
!TO25.success := false
!insert (TO25, P24) into TrainingObjectivePlayer

!new PlayerNotes('PN12')
!PN12.note := 'Returning from maternity leave; minutes managed.'
!PN12.date := '2026-02-02'
!insert (P24, PN12) into PlayerPlayerNotes

!new Player('P25')
!P25.name := 'Bruna Carvalho'
!P25.age := 19
!P25.bestFoot := #LEFT
!P25.phoneNumber := '+55 81 97777-3322'
!insert (T11, P25) into TeamPlayer

!new Position('POS41')
!POS41.positionName := #DEFENDER
!insert (P25, POS41) into PlayerPositions

!new TrainingObjective('TO26')
!TO26.areaToImprove := '1v1 defending body shape'
!TO26.startDate := '2026-01-20'
!TO26.endDate := '2026-02-20'
!TO26.success := true
!insert (TO26, P25) into TrainingObjectivePlayer

!new Player('P26')
!P26.name := 'Joana Ribeiro'
!P26.age := 33
!P26.bestFoot := #BOTH
!P26.phoneNumber := '+55 81 96666-7788'
!insert (T11, P26) into TeamPlayer

!new Position('POS42')
!POS42.positionName := #GOALKEEPER
!insert (P26, POS42) into PlayerPositions

!new TrainingObjective('TO27')
!TO27.areaToImprove := 'Distribution under press'
!TO27.startDate := '2026-02-03'
!TO27.endDate := '2026-03-05'
!TO27.success := false
!insert (TO27, P26) into TrainingObjectivePlayer

!new Player('P27')
!P27.name := 'Camila Nascimento'
!P27.age := 22
!P27.bestFoot := #RIGHT
!P27.phoneNumber := '+55 81 95555-9090'
!insert (T11, P27) into TeamPlayer

!new Position('POS43')
!POS43.positionName := #MIDFIELDER
!insert (P27, POS43) into PlayerPositions

!new Position('POS44')
!POS44.positionName := #DEFENDER
!insert (P27, POS44) into PlayerPositions

!new Position('POS45')
!POS45.positionName := #FORWARD
!insert (P27, POS45) into PlayerPositions

!new TrainingObjective('TO28')
!TO28.areaToImprove := 'Switching play with weak-foot passes'
!TO28.startDate := '2026-02-01'
!TO28.endDate := '2026-02-28'
!TO28.success := false
!insert (TO28, P27) into TrainingObjectivePlayer

!new Player('P28')
!P28.name := 'Talita Lima'
!P28.age := 17
!P28.bestFoot := #LEFT
!P28.phoneNumber := '+55 81 94444-0101'
!insert (T11, P28) into TeamPlayer

!new Position('POS46')
!POS46.positionName := #FORWARD
!insert (P28, POS46) into PlayerPositions

!new TrainingObjective('TO29')
!TO29.areaToImprove := 'Finishing first-time volleys'
!TO29.startDate := '2026-02-05'
!TO29.endDate := '2026-03-10'
!TO29.success := false
!insert (TO29, P28) into TrainingObjectivePlayer

!new Player('P29')
!P29.name := 'Diego Araújo'
!P29.age := 20
!P29.bestFoot := #RIGHT
!P29.phoneNumber := '+55 81 93333-2222'
!insert (T12, P29) into TeamPlayer

!new Position('POS47')
!POS47.positionName := #MIDFIELDER
!insert (P29, POS47) into PlayerPositions

!new TrainingObjective('TO30')
!TO30.areaToImprove := 'Match fitness after ankle sprain'
!TO30.startDate := '2026-02-01'
!TO30.endDate := '2026-02-21'
!TO30.success := true
!insert (TO30, P29) into TrainingObjectivePlayer

!new PlayerNotes('PN13')
!PN13.note := 'Cleared for limited minutes only.'
!PN13.date := '2026-02-06'
!insert (P29, PN13) into PlayerPlayerNotes

!new Player('P30')
!P30.name := 'Tunde Adebayo'
!P30.age := 26
!P30.bestFoot := #BOTH
!P30.phoneNumber := '+234 803 555 0199'
!insert (T13, P30) into TeamPlayer

!new Position('POS48')
!POS48.positionName := #FORWARD
!insert (P30, POS48) into PlayerPositions

!new Position('POS49')
!POS49.positionName := #MIDFIELDER
!insert (P30, POS49) into PlayerPositions

!new TrainingObjective('TO31')
!TO31.areaToImprove := 'Composure in penalty situations'
!TO31.startDate := '2026-02-01'
!TO31.endDate := '2026-02-15'
!TO31.success := false
!insert (TO31, P30) into TrainingObjectivePlayer

!new Player('P31')
!P31.name := 'Sade Balogun'
!P31.age := 24
!P31.bestFoot := #RIGHT
!P31.phoneNumber := '+234 809 120 4400'
!insert (T13, P31) into TeamPlayer

!new Position('POS50')
!POS50.positionName := #DEFENDER
!insert (P31, POS50) into PlayerPositions

!new TrainingObjective('TO32')
!TO32.areaToImprove := 'Reduce late tackles'
!TO32.startDate := '2026-02-01'
!TO32.endDate := '2026-03-01'
!TO32.success := false
!insert (TO32, P31) into TrainingObjectivePlayer

!new PlayerNotes('PN14')
!PN14.note := 'Card risk flagged by analysts.'
!PN14.date := '2026-02-03'
!insert (P31, PN14) into PlayerPlayerNotes

!new Player('P32')
!P32.name := 'Lukas Schmitt'
!P32.age := 31
!P32.bestFoot := #RIGHT
!P32.phoneNumber := '+49 171 5550123'
!insert (T14, P32) into TeamPlayer

!new Position('POS51')
!POS51.positionName := #GOALKEEPER
!insert (P32, POS51) into PlayerPositions

!new TrainingObjective('TO33')
!TO33.areaToImprove := 'Handling crosses in wet weather'
!TO33.startDate := '2026-02-02'
!TO33.endDate := '2026-03-02'
!TO33.success := false
!insert (TO33, P32) into TrainingObjectivePlayer

!new Player('P33')
!P33.name := 'Emre Yılmaz'
!P33.age := 18
!P33.bestFoot := #LEFT
!P33.phoneNumber := '+49 176 4449988'
!insert (T14, P33) into TeamPlayer

!new Position('POS52')
!POS52.positionName := #MIDFIELDER
!insert (P33, POS52) into PlayerPositions

!new Position('POS53')
!POS53.positionName := #FORWARD
!insert (P33, POS53) into PlayerPositions

!new TrainingObjective('TO34')
!TO34.areaToImprove := 'Pressing triggers recognition'
!TO34.startDate := '2026-02-02'
!TO34.endDate := '2026-02-25'
!TO34.success := true
!insert (TO34, P33) into TrainingObjectivePlayer

!new Player('P34')
!P34.name := 'Hannah Becker'
!P34.age := 27
!P34.bestFoot := #BOTH
!P34.phoneNumber := '+49 160 2223344'
!insert (T14, P34) into TeamPlayer

!new Position('POS54')
!POS54.positionName := #DEFENDER
!insert (P34, POS54) into PlayerPositions

!new Position('POS55')
!POS55.positionName := #MIDFIELDER
!insert (P34, POS55) into PlayerPositions

!new Position('POS56')
!POS56.positionName := #GOALKEEPER
!insert (P34, POS56) into PlayerPositions

!new TrainingObjective('TO35')
!TO35.areaToImprove := 'Emergency goalkeeper basics'
!TO35.startDate := '2026-02-01'
!TO35.endDate := '2026-02-10'
!TO35.success := true
!insert (TO35, P34) into TrainingObjectivePlayer

!new Player('P35')
!P35.name := 'Pavel Novák'
!P35.age := 36
!P35.bestFoot := #RIGHT
!P35.phoneNumber := '+49 151 7776611'
!insert (T14, P35) into TeamPlayer

!new Position('POS57')
!POS57.positionName := #DEFENDER
!insert (P35, POS57) into PlayerPositions

!new TrainingObjective('TO36')
!TO36.areaToImprove := 'Sprint recovery runs'
!TO36.startDate := '2026-02-01'
!TO36.endDate := '2026-03-15'
!TO36.success := false
!insert (TO36, P35) into TrainingObjectivePlayer

!new TrainingSession('TS11')
!TS11.date := '2026-02-02'
!TS11.location := 'Estádio da Maré (annex pitch)'
!TS11.purpose := 'Set pieces rehearsal'
!insert (T11, TS11) into TeamTraining

!new TrainingNotes('TN17')
!TN17.note := 'Corner routines tested: near-post screen worked twice.'
!TN17.date := '2026-02-02'
!insert (TS11, TN17) into TrainingTrainingNotes

!new TrainingNotes('TN18')
!TN18.note := 'Free-kick taker rotated; left-foot option preferred.'
!TN18.date := '2026-02-02'
!insert (TS11, TN18) into TrainingTrainingNotes

!new TrainingNotes('TN19')
!TN19.note := 'Goalkeeper distribution drills extended by 15 minutes.'
!TN19.date := '2026-02-02'
!insert (TS11, TN19) into TrainingTrainingNotes

!new TrainingSession('TS12')
!TS12.date := '2026-02-04'
!TS12.location := 'Estádio da Maré (main pitch)'
!TS12.purpose := 'High-intensity intervals'
!insert (T11, TS12) into TeamTraining

!new TrainingNotes('TN20')
!TN20.note := 'Heat protocol used; session split into micro-blocks.'
!TN20.date := '2026-02-04'
!insert (TS12, TN20) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA5')
!FA5.reason := 'Medical appointment (physio)'
!insert (TS12, FA5) into TrainingFailded
!insert (FA5, P28) into FailedPlayer

!new TrainingSession('TS13')
!TS13.date := '2026-02-05'
!TS13.location := 'Estádio da Maré (gym)'
!TS13.purpose := 'Solo rehab + ball work'
!insert (T12, TS13) into TeamTraining

!new TrainingNotes('TN21')
!TN21.note := 'Ankle stability circuit completed; no pain reported.'
!TN21.date := '2026-02-05'
!insert (TS13, TN21) into TrainingTrainingNotes

!new TrainingSession('TS14')
!TS14.date := '2026-02-02'
!TS14.location := 'Harborline Field'
!TS14.purpose := 'Travel-day tactical walkthrough'
!insert (T13, TS14) into TeamTraining

!new TrainingNotes('TN22')
!TN22.note := 'Session converted to video review due to no on-pitch attendance.'
!TN22.date := '2026-02-02'
!insert (TS14, TN22) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA6')
!FA6.reason := 'Airport security delay; missed team bus'
!insert (TS14, FA6) into TrainingFailded
!insert (FA6, P30) into FailedPlayer

!new TrainingFailedToAttend('FA7')
!FA7.reason := 'Visa office appointment overran'
!insert (TS14, FA7) into TrainingFailded
!insert (FA7, P31) into FailedPlayer

!new TrainingSession('TS15')
!TS15.date := '2026-02-01'
!TS15.location := 'Waldparkstadion'
!TS15.purpose := 'Defensive shape'
!insert (T14, TS15) into TeamTraining

!new TrainingNotes('TN23')
!TN23.note := 'Back line held higher; offside trap rehearsed.'
!TN23.date := '2026-02-01'
!insert (TS15, TN23) into TrainingTrainingNotes

!new TrainingSession('TS16')
!TS16.date := '2026-02-03'
!TS16.location := 'Waldparkstadion (indoor hall)'
!TS16.purpose := 'Futsal-style tight-space drills'
!insert (T14, TS16) into TeamTraining

!new TrainingNotes('TN24')
!TN24.note := 'One-touch limit enforced; improved scanning.'
!TN24.date := '2026-02-03'
!insert (TS16, TN24) into TrainingTrainingNotes

!new TrainingNotes('TN25')
!TN25.note := 'Goalkeeper played as extra outfield player.'
!TN25.date := '2026-02-03'
!insert (TS16, TN25) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA8')
!FA8.reason := 'Work shift conflict'
!insert (TS16, FA8) into TrainingFailded
!insert (FA8, P35) into FailedPlayer

!new TrainingSession('TS17')
!TS17.date := '2026-02-05'
!TS17.location := 'Waldparkstadion'
!TS17.purpose := 'Match prep (short-sided)'
!insert (T14, TS17) into TeamTraining

!new TrainingNotes('TN26')
!TN26.note := 'Captaincy rotated; communication improved.'
!TN26.date := '2026-02-05'
!insert (TS17, TN26) into TrainingTrainingNotes

!new Competition('COMP5')
!COMP5.name := 'International Charity Night Tournament'
!COMP5.type := 'Charity / Exhibition'

!new Match('M7')
!M7.date := '2026-02-06'
!M7.homeAway := true
!insert (COMP5, M7) into CompetitionMatch
!insert (T11, M7) into LocalMatch
!insert (T13, M7) into VisitorMatch

!new MatchReport('MR7')
!MR7.duration := 90
!MR7.scoreLocal := 7
!MR7.scoreVisitor := 6
!insert (M7, MR7) into MatchMatchReport

!new MatchEvent('ME21')
!ME21.eventType := #GOAL
!ME21.time := 2
!insert (M7, ME21) into MatchMatchEvent

!new MatchEvent('ME22')
!ME22.eventType := #GOAL
!ME22.time := 5
!insert (M7, ME22) into MatchMatchEvent

!new MatchEvent('ME23')
!ME23.eventType := #GOAL
!ME23.time := 11
!insert (M7, ME23) into MatchMatchEvent

!new MatchEvent('ME24')
!ME24.eventType := #GOAL
!ME24.time := 18
!insert (M7, ME24) into MatchMatchEvent

!new MatchEvent('ME25')
!ME25.eventType := #GOAL
!ME25.time := 23
!insert (M7, ME25) into MatchMatchEvent

!new MatchEvent('ME26')
!ME26.eventType := #GOAL
!ME26.time := 29
!insert (M7, ME26) into MatchMatchEvent

!new MatchEvent('ME27')
!ME27.eventType := #GOAL
!ME27.time := 35
!insert (M7, ME27) into MatchMatchEvent

!new MatchEvent('ME28')
!ME28.eventType := #GOAL
!ME28.time := 44
!insert (M7, ME28) into MatchMatchEvent

!new MatchEvent('ME29')
!ME29.eventType := #GOAL
!ME29.time := 52
!insert (M7, ME29) into MatchMatchEvent

!new MatchEvent('ME30')
!ME30.eventType := #GOAL
!ME30.time := 60
!insert (M7, ME30) into MatchMatchEvent

!new MatchEvent('ME31')
!ME31.eventType := #GOAL
!ME31.time := 71
!insert (M7, ME31) into MatchMatchEvent

!new MatchEvent('ME32')
!ME32.eventType := #GOAL
!ME32.time := 83
!insert (M7, ME32) into MatchMatchEvent

!new MatchEvent('ME33')
!ME33.eventType := #GOAL
!ME33.time := 90
!insert (M7, ME33) into MatchMatchEvent

!new MatchEvent('ME34')
!ME34.eventType := #PENALTY
!ME34.time := 60
!insert (M7, ME34) into MatchMatchEvent

!new MatchEvent('ME35')
!ME35.eventType := #FOUL
!ME35.time := 61
!insert (M7, ME35) into MatchMatchEvent

!new MatchEvent('ME36')
!ME36.eventType := #OFFSIDE
!ME36.time := 72
!insert (M7, ME36) into MatchMatchEvent

!new MatchEvent('ME37')
!ME37.eventType := #CORNER
!ME37.time := 88
!insert (M7, ME37) into MatchMatchEvent

!new MatchNote('MN8')
!MN8.note := 'Scoreboard operator struggled; goal horn sounded late twice.'
!MN8.date := '2026-02-06'
!insert (M7, MN8) into MatchMatchNote

!new MatchPlayer('MP27')
!MP27.booked := false
!MP27.goals := 0
!MP27.rating := 999
!insert (P24, MP27) into PlayerMatch
!insert (M7, MP27) into MatchMatchPlayer

!new MatchPlayerPosition('MPP27')
!MPP27.positionName := #MIDFIELDER
!MPP27.number := 8
!insert (MP27, MPP27) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP28')
!MP28.booked := false
!MP28.goals := 0
!MP28.rating := -1
!insert (P26, MP28) into PlayerMatch
!insert (M7, MP28) into MatchMatchPlayer

!new MatchPlayerPosition('MPP28')
!MPP28.positionName := #GOALKEEPER
!MPP28.number := 1
!insert (MP28, MPP28) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP29')
!MP29.booked := false
!MP29.goals := 6
!MP29.rating := 10
!insert (P30, MP29) into PlayerMatch
!insert (M7, MP29) into MatchMatchPlayer

!new MatchPlayerPosition('MPP29')
!MPP29.positionName := #FORWARD
!MPP29.number := 9
!insert (MP29, MPP29) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP30')
!MP30.booked := true
!MP30.goals := 0
!MP30.rating := 2
!insert (P31, MP30) into PlayerMatch
!insert (M7, MP30) into MatchMatchPlayer

!new MatchPlayerPosition('MPP30')
!MPP30.positionName := #DEFENDER
!MPP30.number := 4
!insert (MP30, MPP30) into MatchPlayerMatchPlayerPosition

!new Match('M8')
!M8.date := '2026-02-07'
!M8.homeAway := false
!insert (COMP5, M8) into CompetitionMatch
!insert (T14, M8) into LocalMatch
!insert (T12, M8) into VisitorMatch

!new MatchReport('MR8')
!MR8.duration := 30
!MR8.scoreLocal := 1
!MR8.scoreVisitor := 0
!insert (M8, MR8) into MatchMatchReport

!new MatchEvent('ME38')
!ME38.eventType := #GOAL
!ME38.time := 1
!insert (M8, ME38) into MatchMatchEvent

!new MatchEvent('ME39')
!ME39.eventType := #FOUL
!ME39.time := 2
!insert (M8, ME39) into MatchMatchEvent

!new MatchEvent('ME40')
!ME40.eventType := #CORNER
!ME40.time := 3
!insert (M8, ME40) into MatchMatchEvent

!new MatchEvent('ME41')
!ME41.eventType := #OFFSIDE
!ME41.time := 4
!insert (M8, ME41) into MatchMatchEvent

!new MatchNote('MN9')
!MN9.note := 'Match stopped due to floodlight failure; result recorded as-is.'
!MN9.date := '2026-02-07'
!insert (M8, MN9) into MatchMatchNote

!new MatchNote('MN10')
!MN10.note := 'Only one registered Aurora U23 player available; match proceeded for charity purposes.'
!MN10.date := '2026-02-07'
!insert (M8, MN10) into MatchMatchNote

!new MatchPlayer('MP31')
!MP31.booked := false
!MP31.goals := 1
!MP31.rating := 7
!insert (P34, MP31) into PlayerMatch
!insert (M8, MP31) into MatchMatchPlayer

!new MatchPlayerPosition('MPP31')
!MPP31.positionName := #DEFENDER
!MPP31.number := 12
!insert (MP31, MPP31) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP32')
!MP32.booked := false
!MP32.goals := 0
!MP32.rating := 1
!insert (P29, MP32) into PlayerMatch
!insert (M8, MP32) into MatchMatchPlayer

!new MatchPlayerPosition('MPP32')
!MPP32.positionName := #MIDFIELDER
!MPP32.number := 23
!insert (MP32, MPP32) into MatchPlayerMatchPlayerPosition
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 509 | 0.00% |
| Multiplicities Errors | 0 | 125 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 49 | 0.00% |

## Category invalid
```
!new Club('C14')
!C14.name := 'Club Deportivo Guadalajara'
!C14.homeGround := 'Estadio Akron (Zapopan, Jalisco)'
!C14.chairman := 'Amaury Vergara'

!new Team('T15')
!T15.name := 'Chivas Primera'
!insert (C14, T15) into ClubTeam

!new Team('T16')
!T16.name := 'Chivas Sub-23'
!insert (C14, T16) into ClubTeam

!new Player('P36')
!P36.name := 'Jose Ramirez'
!P36.age := 29
!P36.bestFoot := #RIGHT
!P36.phoneNumber := '+52 33 1450 7781'
!insert (T15, P36) into TeamPlayer

!new Position('POS58')
!POS58.positionName := #GOALKEEPER
!insert (P36, POS58) into PlayerPositions

!new TrainingObjective('TO37')
!TO37.areaToImprove := 'Better decision-making on short build-up vs high press'
!TO37.startDate := '2026-06-15'
!TO37.endDate := '2026-07-20'
!TO37.success := false
!insert (TO37, P36) into TrainingObjectivePlayer

!new PlayerNotes('PN15')
!PN15.note := 'Commands the box well but rushes throws after saves.'
!PN15.date := '2026-06-28'
!insert (P36, PN15) into PlayerPlayerNotes

!new Player('P37')
!P37.name := 'Diego Castaneda'
!P37.age := 24
!P37.bestFoot := #LEFT
!P37.phoneNumber := '+52 33 2099 1140'
!insert (T15, P37) into TeamPlayer

!new Position('POS59')
!POS59.positionName := #DEFENDER
!insert (P37, POS59) into PlayerPositions

!new Position('POS60')
!POS60.positionName := #MIDFIELDER
!insert (P37, POS60) into PlayerPositions

!new TrainingObjective('TO38')
!TO38.areaToImprove := 'Timing of stepping into midfield to intercept'
!TO38.startDate := '2026-06-10'
!TO38.endDate := '2026-07-10'
!TO38.success := true
!insert (TO38, P37) into TrainingObjectivePlayer

!new PlayerNotes('PN16')
!PN16.note := 'Excellent at breaking lines with carries when space opens.'
!PN16.date := '2026-06-22'
!insert (P37, PN16) into PlayerPlayerNotes

!new Player('P38')
!P38.name := 'Thiago Souza'
!P38.age := 21
!P38.bestFoot := #BOTH
!P38.phoneNumber := '+52 33 8765 0032'
!insert (T15, P38) into TeamPlayer

!new Position('POS61')
!POS61.positionName := #FORWARD
!insert (P38, POS61) into PlayerPositions

!new TrainingObjective('TO39')
!TO39.areaToImprove := 'First-touch finishing under pressure'
!TO39.startDate := '2026-06-12'
!TO39.endDate := '2026-07-18'
!TO39.success := false
!insert (TO39, P38) into TrainingObjectivePlayer

!new TrainingSession('TS18')
!TS18.date := '2026-06-27'
!TS18.location := 'Verde Valle Training Complex (Guadalajara)'
!TS18.purpose := 'High press coordination + rest-defense after attacks'
!insert (T15, TS18) into TeamTraining

!new TrainingNotes('TN27')
!TN27.note := 'Press triggers improved when the #9 curved runs to block the pivot.'
!TN27.date := '2026-06-27'
!insert (TS18, TN27) into TrainingTrainingNotes

!new TrainingNotes('TN28')
!TN28.note := 'Rest-defense spacing still too wide; corrected with 6-second rule after loss.'
!TN28.date := '2026-06-27'
!insert (TS18, TN28) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA9')
!FA9.reason := 'Dental appointment (club-approved).'
!insert (TS18, FA9) into TrainingFailded
!insert (FA9, P38) into FailedPlayer

!new TrainingSession('TS19')
!TS19.date := '2026-07-02'
!TS19.location := 'Estadio Akron auxiliary pitch'
!TS19.purpose := 'Set pieces and match plan rehearsal for internal scrimmage'
!insert (T15, TS19) into TeamTraining

!new TrainingNotes('TN29')
!TN29.note := 'Corner delivery targets clarified; near-post flick practiced 15 reps.'
!TN29.date := '2026-07-02'
!insert (TS19, TN29) into TrainingTrainingNotes

!new TrainingNotes('TN30')
!TN30.note := 'Defensive free-kick line held well; keeper communication improved.'
!TN30.date := '2026-07-02'
!insert (TS19, TN30) into TrainingTrainingNotes

!new Player('P39')
!P39.name := 'Emiliano Torres'
!P39.age := 19
!P39.bestFoot := #RIGHT
!P39.phoneNumber := '+52 33 4401 6650'
!insert (T16, P39) into TeamPlayer

!new Position('POS62')
!POS62.positionName := #GOALKEEPER
!insert (P39, POS62) into PlayerPositions

!new TrainingObjective('TO40')
!TO40.areaToImprove := 'Handling crosses in traffic'
!TO40.startDate := '2026-06-14'
!TO40.endDate := '2026-07-30'
!TO40.success := false
!insert (TO40, P39) into TrainingObjectivePlayer

!new PlayerNotes('PN17')
!PN17.note := 'Brave but tends to punch when catching is possible.'
!PN17.date := '2026-06-25'
!insert (P39, PN17) into PlayerPlayerNotes

!new Player('P40')
!P40.name := 'Rodrigo Ibarra'
!P40.age := 20
!P40.bestFoot := #LEFT
!P40.phoneNumber := '+52 33 5100 9921'
!insert (T16, P40) into TeamPlayer

!new Position('POS63')
!POS63.positionName := #DEFENDER
!insert (P40, POS63) into PlayerPositions

!new TrainingObjective('TO41')
!TO41.areaToImprove := 'Body orientation when receiving under pressure'
!TO41.startDate := '2026-06-18'
!TO41.endDate := '2026-07-25'
!TO41.success := true
!insert (TO41, P40) into TrainingObjectivePlayer

!new Player('P41')
!P41.name := 'Mateo Jimenez'
!P41.age := 18
!P41.bestFoot := #BOTH
!P41.phoneNumber := '+52 33 7012 0889'
!insert (T16, P41) into TeamPlayer

!new Position('POS64')
!POS64.positionName := #MIDFIELDER
!insert (P41, POS64) into PlayerPositions

!new Position('POS65')
!POS65.positionName := #FORWARD
!insert (P41, POS65) into PlayerPositions

!new TrainingObjective('TO42')
!TO42.areaToImprove := 'Arriving in the box from midfield (late runs)'
!TO42.startDate := '2026-06-16'
!TO42.endDate := '2026-07-22'
!TO42.success := false
!insert (TO42, P41) into TrainingObjectivePlayer

!new PlayerNotes('PN18')
!PN18.note := 'Good acceleration over 5-10m; needs calmer final pass.'
!PN18.date := '2026-06-29'
!insert (P41, PN18) into PlayerPlayerNotes

!new TrainingSession('TS20')
!TS20.date := '2026-06-26'
!TS20.location := 'Verde Valle Training Complex (Field 2)'
!TS20.purpose := 'Playing out from the back vs man-marking; fast switches'
!insert (T16, TS20) into TeamTraining

!new TrainingNotes('TN31')
!TN31.note := 'Center-backs found the third-man more often after adjusting spacing.'
!TN31.date := '2026-06-26'
!insert (TS20, TN31) into TrainingTrainingNotes

!new TrainingNotes('TN32')
!TN32.note := 'Final third decisions still rushed; added constraint of two-touch in zone 14.'
!TN32.date := '2026-06-26'
!insert (TS20, TN32) into TrainingTrainingNotes

!new Competition('COMP6')
!COMP6.name := 'Pretemporada Rojiblanca 2026'
!COMP6.type := 'Internal pre-season friendlies (closed doors)'

!new Match('M9')
!M9.date := '2026-07-05'
!M9.homeAway := true
!insert (COMP6, M9) into CompetitionMatch
!insert (T15, M9) into LocalMatch
!insert (T16, M9) into VisitorMatch

!new MatchReport('MR9')
!MR9.duration := 90
!MR9.scoreLocal := 3
!MR9.scoreVisitor := 2
!insert (M9, MR9) into MatchMatchReport

!new MatchEvent('ME42')
!ME42.eventType := #GOAL
!ME42.time := 11
!insert (M9, ME42) into MatchMatchEvent

!new MatchEvent('ME43')
!ME43.eventType := #GOAL
!ME43.time := 27
!insert (M9, ME43) into MatchMatchEvent

!new MatchEvent('ME44')
!ME44.eventType := #FOUL
!ME44.time := 39
!insert (M9, ME44) into MatchMatchEvent

!new MatchEvent('ME45')
!ME45.eventType := #GOAL
!ME45.time := 55
!insert (M9, ME45) into MatchMatchEvent

!new MatchEvent('ME46')
!ME46.eventType := #OFFSIDE
!ME46.time := 63
!insert (M9, ME46) into MatchMatchEvent

!new MatchEvent('ME47')
!ME47.eventType := #GOAL
!ME47.time := 71
!insert (M9, ME47) into MatchMatchEvent

!new MatchEvent('ME48')
!ME48.eventType := #GOAL
!ME48.time := 88
!insert (M9, ME48) into MatchMatchEvent

!new MatchNote('MN11')
!MN11.note := 'Scrimmage used to test pressing structure; Sub-23 exploited space behind the fullbacks twice.'
!MN11.date := '2026-07-05'
!insert (M9, MN11) into MatchMatchNote

!new MatchNote('MN12')
!MN12.note := 'First team improved after halftime by compressing distances between lines.'
!MN12.date := '2026-07-05'
!insert (M9, MN12) into MatchMatchNote

!new MatchPlayer('MP33')
!MP33.booked := false
!MP33.goals := 0
!MP33.rating := 6
!insert (P36, MP33) into PlayerMatch
!insert (M9, MP33) into MatchMatchPlayer

!new MatchPlayerPosition('MPP33')
!MPP33.positionName := #GOALKEEPER
!MPP33.number := 1
!insert (MP33, MPP33) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP34')
!MP34.booked := true
!MP34.goals := 0
!MP34.rating := 7
!insert (P37, MP34) into PlayerMatch
!insert (M9, MP34) into MatchMatchPlayer

!new MatchPlayerPosition('MPP34')
!MPP34.positionName := #DEFENDER
!MPP34.number := 4
!insert (MP34, MPP34) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP35')
!MP35.booked := false
!MP35.goals := 2
!MP35.rating := 8
!insert (P38, MP35) into PlayerMatch
!insert (M9, MP35) into MatchMatchPlayer

!new MatchPlayerPosition('MPP35')
!MPP35.positionName := #FORWARD
!MPP35.number := 9
!insert (MP35, MPP35) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP36')
!MP36.booked := false
!MP36.goals := 0
!MP36.rating := 6
!insert (P39, MP36) into PlayerMatch
!insert (M9, MP36) into MatchMatchPlayer

!new MatchPlayerPosition('MPP36')
!MPP36.positionName := #GOALKEEPER
!MPP36.number := 12
!insert (MP36, MPP36) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP37')
!MP37.booked := false
!MP37.goals := 0
!MP37.rating := 6
!insert (P40, MP37) into PlayerMatch
!insert (M9, MP37) into MatchMatchPlayer

!new MatchPlayerPosition('MPP37')
!MPP37.positionName := #DEFENDER
!MPP37.number := 3
!insert (MP37, MPP37) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP38')
!MP38.booked := false
!MP38.goals := 2
!MP38.rating := 7
!insert (P41, MP38) into PlayerMatch
!insert (M9, MP38) into MatchMatchPlayer

!new MatchPlayerPosition('MPP38')
!MPP38.positionName := #MIDFIELDER
!MPP38.number := 8
!insert (MP38, MPP38) into MatchPlayerMatchPlayerPosition
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 68 | 0.00% |
| Invariants Errors (Not included on General) | 1 | 4 | 25.00% |

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (2) `Match::TeamsFromDifferentClubs': FAILED.
```

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 28 | 0.00% |

## Generation 2 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 2403 | 0.00% |
| Multiplicities Errors | 0 | 531 | 0.00% |
| Invariants Errors | 0 | 16 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 68 | 0.00% |
| Invariants Errors (Not included on General) | 1 | 4 | 25.00% |

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (2) `Match::TeamsFromDifferentClubs': FAILED.
```

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 4 | 232 | 1.72% |

| Failed dates | 
|---| 
```
2026-03-11 17:45
```
```
2026-03-14 09:30
```
```
2026-03-12 21:00
```
```
2026-03-18 19:00
```

# Generation 3
## Category baseline
```
!new Club('C31')
!C31.name := 'Oslo Fjord FK'
!C31.homeGround := 'Fjordparken Arena'
!C31.chairman := 'Ingrid Lokken'

!new Team('T39')
!T39.name := 'Oslo Fjord Reserves'
!insert (C31, T39) into ClubTeam

!new Team('T40')
!T40.name := 'Oslo Fjord Women'
!insert (C31, T40) into ClubTeam

!new Club('C32')
!C32.name := 'Lagos Unity FC'
!C32.homeGround := 'Unity Sports Complex'
!C32.chairman := 'Chinedu Okafor'

!new Team('T41')
!T41.name := 'Unity Lions'
!insert (C32, T41) into ClubTeam

!new Club('C33')
!C33.name := 'Kerala Mariners FC'
!C33.homeGround := 'Kochi Seaside Ground'
!C33.chairman := 'Anjali Menon'

!new Team('T42')
!T42.name := 'Mariners First Team'
!insert (C33, T42) into ClubTeam

!new Player('P124')
!P124.name := 'Sindre Holte'
!P124.age := 23
!P124.bestFoot := #RIGHT
!P124.phoneNumber := '+47 412 33 901'
!insert (T39, P124) into TeamPlayer

!new Position('POS188')
!POS188.positionName := #GOALKEEPER
!insert (P124, POS188) into PlayerPositions

!new TrainingObjective('TO136')
!TO136.areaToImprove := 'Faster release to wings'
!TO136.startDate := '2026-04-01'
!TO136.endDate := '2026-04-30'
!TO136.success := true
!insert (TO136, P124) into TrainingObjectivePlayer

!new PlayerNotes('PN49')
!PN49.note := 'Reads 1v1 well; keep working on punches under traffic.'
!PN49.date := '2026-04-12'
!insert (P124, PN49) into PlayerPlayerNotes

!new Player('P125')
!P125.name := 'Aliya Hassan'
!P125.age := 22
!P125.bestFoot := #LEFT
!P125.phoneNumber := '+47 986 11 204'
!insert (T39, P125) into TeamPlayer

!new Position('POS189')
!POS189.positionName := #DEFENDER
!insert (P125, POS189) into PlayerPositions

!new Position('POS190')
!POS190.positionName := #MIDFIELDER
!insert (P125, POS190) into PlayerPositions

!new TrainingObjective('TO137')
!TO137.areaToImprove := 'Diagonal passing under press'
!TO137.startDate := '2026-04-05'
!TO137.endDate := '2026-05-05'
!TO137.success := false
!insert (TO137, P125) into TrainingObjectivePlayer

!new Player('P126')
!P126.name := 'Magnus Berg'
!P126.age := 24
!P126.bestFoot := #BOTH
!P126.phoneNumber := '+47 901 77 550'
!insert (T39, P126) into TeamPlayer

!new Position('POS191')
!POS191.positionName := #MIDFIELDER
!insert (P126, POS191) into PlayerPositions

!new TrainingObjective('TO138')
!TO138.areaToImprove := 'Arriving late into the box'
!TO138.startDate := '2026-04-02'
!TO138.endDate := '2026-05-02'
!TO138.success := true
!insert (TO138, P126) into TrainingObjectivePlayer

!new Player('P127')
!P127.name := 'Jonas Nygard'
!P127.age := 21
!P127.bestFoot := #RIGHT
!P127.phoneNumber := '+47 455 29 118'
!insert (T39, P127) into TeamPlayer

!new Position('POS192')
!POS192.positionName := #FORWARD
!insert (P127, POS192) into PlayerPositions

!new Position('POS193')
!POS193.positionName := #MIDFIELDER
!insert (P127, POS193) into PlayerPositions

!new Position('POS194')
!POS194.positionName := #DEFENDER
!insert (P127, POS194) into PlayerPositions

!new TrainingObjective('TO139')
!TO139.areaToImprove := 'Pressing angle to force play outside'
!TO139.startDate := '2026-04-03'
!TO139.endDate := '2026-05-03'
!TO139.success := false
!insert (TO139, P127) into TrainingObjectivePlayer

!new Player('P128')
!P128.name := 'Noah Andersen'
!P128.age := 20
!P128.bestFoot := #RIGHT
!P128.phoneNumber := '+47 934 02 777'
!insert (T39, P128) into TeamPlayer

!new Position('POS195')
!POS195.positionName := #DEFENDER
!insert (P128, POS195) into PlayerPositions

!new TrainingObjective('TO140')
!TO140.areaToImprove := 'Tackling timing (avoid clipping heels)'
!TO140.startDate := '2026-04-04'
!TO140.endDate := '2026-05-04'
!TO140.success := true
!insert (TO140, P128) into TrainingObjectivePlayer

!new Player('P129')
!P129.name := 'Kari Solheim'
!P129.age := 26
!P129.bestFoot := #RIGHT
!P129.phoneNumber := '+47 480 19 002'
!insert (T40, P129) into TeamPlayer

!new Position('POS196')
!POS196.positionName := #GOALKEEPER
!insert (P129, POS196) into PlayerPositions

!new Position('POS197')
!POS197.positionName := #DEFENDER
!insert (P129, POS197) into PlayerPositions

!new TrainingObjective('TO141')
!TO141.areaToImprove := 'Claiming high balls at corners'
!TO141.startDate := '2026-04-06'
!TO141.endDate := '2026-05-06'
!TO141.success := true
!insert (TO141, P129) into TrainingObjectivePlayer

!new Player('P130')
!P130.name := 'Maja Lind'
!P130.age := 25
!P130.bestFoot := #LEFT
!P130.phoneNumber := '+47 920 44 615'
!insert (T40, P130) into TeamPlayer

!new Position('POS198')
!POS198.positionName := #DEFENDER
!insert (P130, POS198) into PlayerPositions

!new TrainingObjective('TO142')
!TO142.areaToImprove := '1v1 defending stance'
!TO142.startDate := '2026-04-06'
!TO142.endDate := '2026-05-06'
!TO142.success := false
!insert (TO142, P130) into TrainingObjectivePlayer

!new Player('P131')
!P131.name := 'Elin Strand'
!P131.age := 24
!P131.bestFoot := #BOTH
!P131.phoneNumber := '+47 971 33 140'
!insert (T40, P131) into TeamPlayer

!new Position('POS199')
!POS199.positionName := #MIDFIELDER
!insert (P131, POS199) into PlayerPositions

!new Position('POS200')
!POS200.positionName := #FORWARD
!insert (P131, POS200) into PlayerPositions

!new TrainingObjective('TO143')
!TO143.areaToImprove := 'Quick turns between lines'
!TO143.startDate := '2026-04-07'
!TO143.endDate := '2026-05-07'
!TO143.success := true
!insert (TO143, P131) into TrainingObjectivePlayer

!new PlayerNotes('PN50')
!PN50.note := 'Great vision; ask for the ball earlier in build-up.'
!PN50.date := '2026-04-15'
!insert (P131, PN50) into PlayerPlayerNotes

!new Player('P132')
!P132.name := 'Sofia Vik'
!P132.age := 23
!P132.bestFoot := #RIGHT
!P132.phoneNumber := '+47 463 88 903'
!insert (T40, P132) into TeamPlayer

!new Position('POS201')
!POS201.positionName := #FORWARD
!insert (P132, POS201) into PlayerPositions

!new TrainingObjective('TO144')
!TO144.areaToImprove := 'Near-post runs on crosses'
!TO144.startDate := '2026-04-08'
!TO144.endDate := '2026-05-08'
!TO144.success := true
!insert (TO144, P132) into TrainingObjectivePlayer

!new Player('P133')
!P133.name := 'Ifeanyi Nwosu'
!P133.age := 27
!P133.bestFoot := #RIGHT
!P133.phoneNumber := '+234 803 111 2200'
!insert (T41, P133) into TeamPlayer

!new Position('POS202')
!POS202.positionName := #GOALKEEPER
!insert (P133, POS202) into PlayerPositions

!new TrainingObjective('TO145')
!TO145.areaToImprove := 'Footwork on low shots'
!TO145.startDate := '2026-04-01'
!TO145.endDate := '2026-04-30'
!TO145.success := true
!insert (TO145, P133) into TrainingObjectivePlayer

!new Player('P134')
!P134.name := 'Amina Bello'
!P134.age := 24
!P134.bestFoot := #LEFT
!P134.phoneNumber := '+234 806 555 9901'
!insert (T41, P134) into TeamPlayer

!new Position('POS203')
!POS203.positionName := #DEFENDER
!insert (P134, POS203) into PlayerPositions

!new Position('POS204')
!POS204.positionName := #MIDFIELDER
!insert (P134, POS204) into PlayerPositions

!new TrainingObjective('TO146')
!TO146.areaToImprove := 'Switching play with first touch'
!TO146.startDate := '2026-04-02'
!TO146.endDate := '2026-05-02'
!TO146.success := false
!insert (TO146, P134) into TrainingObjectivePlayer

!new Player('P135')
!P135.name := 'Tunde Adeyemi'
!P135.age := 22
!P135.bestFoot := #BOTH
!P135.phoneNumber := '+234 810 222 7744'
!insert (T41, P135) into TeamPlayer

!new Position('POS205')
!POS205.positionName := #MIDFIELDER
!insert (P135, POS205) into PlayerPositions

!new TrainingObjective('TO147')
!TO147.areaToImprove := 'Tracking runners after turnover'
!TO147.startDate := '2026-04-03'
!TO147.endDate := '2026-05-03'
!TO147.success := true
!insert (TO147, P135) into TrainingObjectivePlayer

!new Player('P136')
!P136.name := 'Chiamaka Okoye'
!P136.age := 23
!P136.bestFoot := #RIGHT
!P136.phoneNumber := '+234 809 700 3131'
!insert (T41, P136) into TeamPlayer

!new Position('POS206')
!POS206.positionName := #FORWARD
!insert (P136, POS206) into PlayerPositions

!new Position('POS207')
!POS207.positionName := #MIDFIELDER
!insert (P136, POS207) into PlayerPositions

!new TrainingObjective('TO148')
!TO148.areaToImprove := 'Shot selection under pressure'
!TO148.startDate := '2026-04-04'
!TO148.endDate := '2026-05-04'
!TO148.success := true
!insert (TO148, P136) into TrainingObjectivePlayer

!new Player('P137')
!P137.name := 'Sodiq Lawal'
!P137.age := 26
!P137.bestFoot := #RIGHT
!P137.phoneNumber := '+234 802 909 5511'
!insert (T41, P137) into TeamPlayer

!new Position('POS208')
!POS208.positionName := #DEFENDER
!insert (P137, POS208) into PlayerPositions

!new TrainingObjective('TO149')
!TO149.areaToImprove := 'Avoiding late tackles in wide zones'
!TO149.startDate := '2026-04-05'
!TO149.endDate := '2026-05-05'
!TO149.success := false
!insert (TO149, P137) into TrainingObjectivePlayer

!new Player('P138')
!P138.name := 'Arjun Nair'
!P138.age := 28
!P138.bestFoot := #RIGHT
!P138.phoneNumber := '+91 98 4701 2201'
!insert (T42, P138) into TeamPlayer

!new Position('POS209')
!POS209.positionName := #GOALKEEPER
!insert (P138, POS209) into PlayerPositions

!new Position('POS210')
!POS210.positionName := #DEFENDER
!insert (P138, POS210) into PlayerPositions

!new TrainingObjective('TO150')
!TO150.areaToImprove := 'Organizing the line on set pieces'
!TO150.startDate := '2026-04-01'
!TO150.endDate := '2026-04-30'
!TO150.success := true
!insert (TO150, P138) into TrainingObjectivePlayer

!new Player('P139')
!P139.name := 'Vikram Pillai'
!P139.age := 26
!P139.bestFoot := #LEFT
!P139.phoneNumber := '+91 90 4833 7711'
!insert (T42, P139) into TeamPlayer

!new Position('POS211')
!POS211.positionName := #DEFENDER
!insert (P139, POS211) into PlayerPositions

!new TrainingObjective('TO151')
!TO151.areaToImprove := 'Passing out from the back with left foot'
!TO151.startDate := '2026-04-02'
!TO151.endDate := '2026-05-02'
!TO151.success := true
!insert (TO151, P139) into TrainingObjectivePlayer

!new Player('P140')
!P140.name := 'Farah Rahman'
!P140.age := 24
!P140.bestFoot := #BOTH
!P140.phoneNumber := '+91 97 4455 8899'
!insert (T42, P140) into TeamPlayer

!new Position('POS212')
!POS212.positionName := #MIDFIELDER
!insert (P140, POS212) into PlayerPositions

!new Position('POS213')
!POS213.positionName := #FORWARD
!insert (P140, POS213) into PlayerPositions

!new TrainingObjective('TO152')
!TO152.areaToImprove := 'Receiving on the half-turn'
!TO152.startDate := '2026-04-03'
!TO152.endDate := '2026-05-03'
!TO152.success := false
!insert (TO152, P140) into TrainingObjectivePlayer

!new Player('P141')
!P141.name := 'Joseph Varghese'
!P141.age := 25
!P141.bestFoot := #RIGHT
!P141.phoneNumber := '+91 99 6100 4321'
!insert (T42, P141) into TeamPlayer

!new Position('POS214')
!POS214.positionName := #FORWARD
!insert (P141, POS214) into PlayerPositions

!new TrainingObjective('TO153')
!TO153.areaToImprove := 'Finishing first time in the box'
!TO153.startDate := '2026-04-04'
!TO153.endDate := '2026-05-04'
!TO153.success := true
!insert (TO153, P141) into TrainingObjectivePlayer

!new TrainingSession('TS54')
!TS54.date := '2026-04-10 18:00'
!TS54.location := 'Fjordparken Arena - Training Pitch'
!TS54.purpose := 'Transition defense + goalkeeper distribution'
!insert (T39, TS54) into TeamTraining

!new TrainingNotes('TN90')
!TN90.note := 'Midfield recovered quickly after losing possession; keep distances short.'
!TN90.date := '2026-04-10'
!insert (TS54, TN90) into TrainingTrainingNotes

!new TrainingNotes('TN91')
!TN91.note := 'GK distribution improved when fullback stayed wider.'
!TN91.date := '2026-04-10'
!insert (TS54, TN91) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA40')
!FA40.reason := 'Family commitment (wedding travel).'
!insert (TS54, FA40) into TrainingFailded
!insert (FA40, P126) into FailedPlayer

!new TrainingSession('TS55')
!TS55.date := '2026-04-11 19:30'
!TS55.location := 'Fjordparken Arena - Court 1'
!TS55.purpose := 'Set pieces + finishing patterns'
!insert (T40, TS55) into TeamTraining

!new TrainingNotes('TN92')
!TN92.note := 'Corners: near-post decoy opened space at penalty spot.'
!TN92.date := '2026-04-11'
!insert (TS55, TN92) into TrainingTrainingNotes

!new TrainingSession('TS56')
!TS56.date := '2026-04-09 17:00'
!TS56.location := 'Unity Sports Complex - Pitch A'
!TS56.purpose := 'High press triggers + counter-attacks'
!insert (T41, TS56) into TeamTraining

!new TrainingNotes('TN93')
!TN93.note := 'Front three pressed well; need clearer shout for trap on sideline.'
!TN93.date := '2026-04-09'
!insert (TS56, TN93) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA41')
!FA41.reason := 'Illness (fever), stayed home.'
!insert (TS56, FA41) into TrainingFailded
!insert (FA41, P137) into FailedPlayer

!new TrainingSession('TS57')
!TS57.date := '2026-04-12 06:30'
!TS57.location := 'Kochi Seaside Ground - Main Field'
!TS57.purpose := 'Early-morning endurance + finishing under fatigue'
!insert (T42, TS57) into TeamTraining

!new TrainingNotes('TN94')
!TN94.note := 'Finishing accuracy dropped late; focus on body over ball.'
!TN94.date := '2026-04-12'
!insert (TS57, TN94) into TrainingTrainingNotes

!new TrainingNotes('TN95')
!TN95.note := 'Back line communication improved on offside line.'
!TN95.date := '2026-04-12'
!insert (TS57, TN95) into TrainingTrainingNotes

!new Competition('COMP14')
!COMP14.name := 'Nordic-Global Charity Cup'
!COMP14.type := 'Two-match charity mini-tournament'

!new Match('M22')
!M22.date := '2026-04-18 16:00'
!M22.homeAway := true
!insert (COMP14, M22) into CompetitionMatch
!insert (T39, M22) into LocalMatch
!insert (T41, M22) into VisitorMatch

!new MatchReport('MR22')
!MR22.duration := 70
!MR22.scoreLocal := 3
!MR22.scoreVisitor := 2
!insert (M22, MR22) into MatchMatchReport

!new MatchNote('MN30')
!MN30.note := 'Cold conditions; local side kept play simple and direct.'
!MN30.date := '2026-04-18'
!insert (M22, MN30) into MatchMatchNote

!new MatchEvent('ME121')
!ME121.eventType := #GOAL
!ME121.time := 9
!insert (M22, ME121) into MatchMatchEvent

!new MatchEvent('ME122')
!ME122.eventType := #GOAL
!ME122.time := 21
!insert (M22, ME122) into MatchMatchEvent

!new MatchEvent('ME123')
!ME123.eventType := #FOUL
!ME123.time := 26
!insert (M22, ME123) into MatchMatchEvent

!new MatchEvent('ME124')
!ME124.eventType := #GOAL
!ME124.time := 33
!insert (M22, ME124) into MatchMatchEvent

!new MatchEvent('ME125')
!ME125.eventType := #CORNER
!ME125.time := 40
!insert (M22, ME125) into MatchMatchEvent

!new MatchEvent('ME126')
!ME126.eventType := #PENALTY
!ME126.time := 47
!insert (M22, ME126) into MatchMatchEvent

!new MatchEvent('ME127')
!ME127.eventType := #OFFSIDE
!ME127.time := 55
!insert (M22, ME127) into MatchMatchEvent

!new MatchEvent('ME128')
!ME128.eventType := #GOAL
!ME128.time := 61
!insert (M22, ME128) into MatchMatchEvent

!new MatchEvent('ME129')
!ME129.eventType := #GOAL
!ME129.time := 66
!insert (M22, ME129) into MatchMatchEvent

!new MatchPlayer('MP121')
!MP121.booked := false
!MP121.goals := 0
!MP121.rating := 7
!insert (P124, MP121) into PlayerMatch
!insert (M22, MP121) into MatchMatchPlayer

!new MatchPlayerPosition('MPP121')
!MPP121.positionName := #GOALKEEPER
!MPP121.number := 1
!insert (MP121, MPP121) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP122')
!MP122.booked := true
!MP122.goals := 0
!MP122.rating := 6
!insert (P125, MP122) into PlayerMatch
!insert (M22, MP122) into MatchMatchPlayer

!new MatchPlayerPosition('MPP122')
!MPP122.positionName := #DEFENDER
!MPP122.number := 3
!insert (MP122, MPP122) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP123')
!MP123.booked := false
!MP123.goals := 1
!MP123.rating := 7
!insert (P126, MP123) into PlayerMatch
!insert (M22, MP123) into MatchMatchPlayer

!new MatchPlayerPosition('MPP123')
!MPP123.positionName := #MIDFIELDER
!MPP123.number := 8
!insert (MP123, MPP123) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP124')
!MP124.booked := false
!MP124.goals := 1
!MP124.rating := 8
!insert (P127, MP124) into PlayerMatch
!insert (M22, MP124) into MatchMatchPlayer

!new MatchPlayerPosition('MPP124')
!MPP124.positionName := #FORWARD
!MPP124.number := 9
!insert (MP124, MPP124) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP125')
!MP125.booked := false
!MP125.goals := 1
!MP125.rating := 7
!insert (P128, MP125) into PlayerMatch
!insert (M22, MP125) into MatchMatchPlayer

!new MatchPlayerPosition('MPP125')
!MPP125.positionName := #DEFENDER
!MPP125.number := 5
!insert (MP125, MPP125) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP126')
!MP126.booked := false
!MP126.goals := 0
!MP126.rating := 6
!insert (P133, MP126) into PlayerMatch
!insert (M22, MP126) into MatchMatchPlayer

!new MatchPlayerPosition('MPP126')
!MPP126.positionName := #GOALKEEPER
!MPP126.number := 1
!insert (MP126, MPP126) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP127')
!MP127.booked := false
!MP127.goals := 1
!MP127.rating := 7
!insert (P134, MP127) into PlayerMatch
!insert (M22, MP127) into MatchMatchPlayer

!new MatchPlayerPosition('MPP127')
!MPP127.positionName := #MIDFIELDER
!MPP127.number := 6
!insert (MP127, MPP127) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP128')
!MP128.booked := false
!MP128.goals := 0
!MP128.rating := 6
!insert (P135, MP128) into PlayerMatch
!insert (M22, MP128) into MatchMatchPlayer

!new MatchPlayerPosition('MPP128')
!MPP128.positionName := #MIDFIELDER
!MPP128.number := 8
!insert (MP128, MPP128) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP129')
!MP129.booked := false
!MP129.goals := 1
!MP129.rating := 7
!insert (P136, MP129) into PlayerMatch
!insert (M22, MP129) into MatchMatchPlayer

!new MatchPlayerPosition('MPP129')
!MPP129.positionName := #FORWARD
!MPP129.number := 10
!insert (MP129, MPP129) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP130')
!MP130.booked := true
!MP130.goals := 0
!MP130.rating := 5
!insert (P137, MP130) into PlayerMatch
!insert (M22, MP130) into MatchMatchPlayer

!new MatchPlayerPosition('MPP130')
!MPP130.positionName := #DEFENDER
!MPP130.number := 4
!insert (MP130, MPP130) into MatchPlayerMatchPlayerPosition

!new Match('M23')
!M23.date := '2026-04-20 19:15'
!M23.homeAway := true
!insert (COMP14, M23) into CompetitionMatch
!insert (T42, M23) into LocalMatch
!insert (T40, M23) into VisitorMatch

!new MatchReport('MR23')
!MR23.duration := 90
!MR23.scoreLocal := 1
!MR23.scoreVisitor := 0
!insert (M23, MR23) into MatchMatchReport

!new MatchNote('MN31')
!MN31.note := 'Humid evening; hydration breaks were used.'
!MN31.date := '2026-04-20'
!insert (M23, MN31) into MatchMatchNote

!new MatchEvent('ME130')
!ME130.eventType := #FOUL
!ME130.time := 14
!insert (M23, ME130) into MatchMatchEvent

!new MatchEvent('ME131')
!ME131.eventType := #CORNER
!ME131.time := 23
!insert (M23, ME131) into MatchMatchEvent

!new MatchEvent('ME132')
!ME132.eventType := #GOAL
!ME132.time := 52
!insert (M23, ME132) into MatchMatchEvent

!new MatchEvent('ME133')
!ME133.eventType := #OFFSIDE
!ME133.time := 80
!insert (M23, ME133) into MatchMatchEvent

!new MatchPlayer('MP131')
!MP131.booked := false
!MP131.goals := 0
!MP131.rating := 7
!insert (P138, MP131) into PlayerMatch
!insert (M23, MP131) into MatchMatchPlayer

!new MatchPlayerPosition('MPP131')
!MPP131.positionName := #GOALKEEPER
!MPP131.number := 1
!insert (MP131, MPP131) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP132')
!MP132.booked := false
!MP132.goals := 0
!MP132.rating := 7
!insert (P139, MP132) into PlayerMatch
!insert (M23, MP132) into MatchMatchPlayer

!new MatchPlayerPosition('MPP132')
!MPP132.positionName := #DEFENDER
!MPP132.number := 2
!insert (MP132, MPP132) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP133')
!MP133.booked := false
!MP133.goals := 0
!MP133.rating := 7
!insert (P140, MP133) into PlayerMatch
!insert (M23, MP133) into MatchMatchPlayer

!new MatchPlayerPosition('MPP133')
!MPP133.positionName := #MIDFIELDER
!MPP133.number := 8
!insert (MP133, MPP133) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP134')
!MP134.booked := false
!MP134.goals := 1
!MP134.rating := 8
!insert (P141, MP134) into PlayerMatch
!insert (M23, MP134) into MatchMatchPlayer

!new MatchPlayerPosition('MPP134')
!MPP134.positionName := #FORWARD
!MPP134.number := 9
!insert (MP134, MPP134) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP135')
!MP135.booked := false
!MP135.goals := 0
!MP135.rating := 7
!insert (P129, MP135) into PlayerMatch
!insert (M23, MP135) into MatchMatchPlayer

!new MatchPlayerPosition('MPP135')
!MPP135.positionName := #GOALKEEPER
!MPP135.number := 1
!insert (MP135, MPP135) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP136')
!MP136.booked := true
!MP136.goals := 0
!MP136.rating := 6
!insert (P130, MP136) into PlayerMatch
!insert (M23, MP136) into MatchMatchPlayer

!new MatchPlayerPosition('MPP136')
!MPP136.positionName := #DEFENDER
!MPP136.number := 4
!insert (MP136, MPP136) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP137')
!MP137.booked := false
!MP137.goals := 0
!MP137.rating := 6
!insert (P131, MP137) into PlayerMatch
!insert (M23, MP137) into MatchMatchPlayer

!new MatchPlayerPosition('MPP137')
!MPP137.positionName := #MIDFIELDER
!MPP137.number := 10
!insert (MP137, MPP137) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP138')
!MP138.booked := false
!MP138.goals := 0
!MP138.rating := 6
!insert (P132, MP138) into PlayerMatch
!insert (M23, MP138) into MatchMatchPlayer

!new MatchPlayerPosition('MPP138')
!MPP138.positionName := #FORWARD
!MPP138.number := 11
!insert (MP138, MPP138) into MatchPlayerMatchPlayerPosition
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 646 | 0.00% |
| Multiplicities Errors | 0 | 160 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 6 | 52 | 11.54% |

| Failed dates | 
|---| 
```
2026-04-10 18:00
```
```
2026-04-11 19:30
```
```
2026-04-09 17:00
```
```
2026-04-12 06:30
```
```
2026-04-18 16:00
```
```
2026-04-20 19:15
```

## Category boundary
```
!new Club('C26')
!C26.name := 'Reykjavík Fjord FC'
!C26.homeGround := 'Fjordvellir Stadium'
!C26.chairman := 'Sigríður Jónsdóttir'

!new Team('T33')
!T33.name := 'Fjord Seniors'
!insert (C26, T33) into ClubTeam

!new Club('C27')
!C27.name := 'Kathmandu Gurkhas SC'
!C27.homeGround := 'Dasharath Practice Annex (Kathmandu)'
!C27.chairman := 'Prakash Shrestha'

!new Team('T34')
!T34.name := 'Gurkhas XI'
!insert (C27, T34) into ClubTeam

!new Player('P101')
!P101.name := 'Jón Einarsson'
!P101.age := 45
!P101.bestFoot := #RIGHT
!P101.phoneNumber := '+354-699-0101'
!insert (T33, P101) into TeamPlayer

!new Position('POS154')
!POS154.positionName := #GOALKEEPER
!insert (P101, POS154) into PlayerPositions

!new TrainingObjective('TO111')
!TO111.areaToImprove := 'Faster distribution under press'
!TO111.startDate := '2026-03-25'
!TO111.endDate := '2026-04-25'
!TO111.success := false
!insert (TO111, P101) into TrainingObjectivePlayer

!new Player('P102')
!P102.name := 'Katrín Björk'
!P102.age := 16
!P102.bestFoot := #LEFT
!P102.phoneNumber := '+354-770-1616'
!insert (T33, P102) into TeamPlayer

!new Position('POS155')
!POS155.positionName := #DEFENDER
!insert (P102, POS155) into PlayerPositions

!new Position('POS156')
!POS156.positionName := #MIDFIELDER
!insert (P102, POS156) into PlayerPositions

!new Position('POS157')
!POS157.positionName := #FORWARD
!insert (P102, POS157) into PlayerPositions

!new TrainingObjective('TO112')
!TO112.areaToImprove := 'Body positioning in 1v1 defending'
!TO112.startDate := '2026-03-20'
!TO112.endDate := '2026-04-20'
!TO112.success := true
!insert (TO112, P102) into TrainingObjectivePlayer

!new TrainingObjective('TO113')
!TO113.areaToImprove := 'Crossing accuracy with left foot'
!TO113.startDate := '2026-03-20'
!TO113.endDate := '2026-05-01'
!TO113.success := false
!insert (TO113, P102) into TrainingObjectivePlayer

!new PlayerNotes('PN39')
!PN39.note := 'Promoted from youth setup; adapting well to physical play.'
!PN39.date := '2026-03-28'
!insert (P102, PN39) into PlayerPlayerNotes

!new Player('P103')
!P103.name := 'Arnar Magnússon'
!P103.age := 28
!P103.bestFoot := #BOTH
!P103.phoneNumber := '+354-611-2828'
!insert (T33, P103) into TeamPlayer

!new Position('POS158')
!POS158.positionName := #MIDFIELDER
!insert (P103, POS158) into PlayerPositions

!new Position('POS159')
!POS159.positionName := #DEFENDER
!insert (P103, POS159) into PlayerPositions

!new TrainingObjective('TO114')
!TO114.areaToImprove := 'Reduce fouls when pressing late'
!TO114.startDate := '2026-03-22'
!TO114.endDate := '2026-04-22'
!TO114.success := false
!insert (TO114, P103) into TrainingObjectivePlayer

!new PlayerNotes('PN40')
!PN40.note := 'Excellent work rate; needs calmer decision-making near box.'
!PN40.date := '2026-04-02'
!insert (P103, PN40) into PlayerPlayerNotes

!new PlayerNotes('PN41')
!PN41.note := 'Responded well to tactical instructions in English.'
!PN41.date := '2026-04-06'
!insert (P103, PN41) into PlayerPlayerNotes

!new Player('P104')
!P104.name := 'Suman Rai'
!P104.age := 24
!P104.bestFoot := #RIGHT
!P104.phoneNumber := '+977-980-1111111'
!insert (T34, P104) into TeamPlayer

!new Position('POS160')
!POS160.positionName := #FORWARD
!insert (P104, POS160) into PlayerPositions

!new TrainingObjective('TO115')
!TO115.areaToImprove := 'Hold-up play with back to goal'
!TO115.startDate := '2026-03-21'
!TO115.endDate := '2026-04-21'
!TO115.success := false
!insert (TO115, P104) into TrainingObjectivePlayer

!new Player('P105')
!P105.name := 'Anisha Thapa'
!P105.age := 30
!P105.bestFoot := #LEFT
!P105.phoneNumber := '+977-981-2222222'
!insert (T34, P105) into TeamPlayer

!new Position('POS161')
!POS161.positionName := #MIDFIELDER
!insert (P105, POS161) into PlayerPositions

!new Position('POS162')
!POS162.positionName := #DEFENDER
!insert (P105, POS162) into PlayerPositions

!new Position('POS163')
!POS163.positionName := #FORWARD
!insert (P105, POS163) into PlayerPositions

!new TrainingObjective('TO116')
!TO116.areaToImprove := 'Long-range passing to wings'
!TO116.startDate := '2026-03-19'
!TO116.endDate := '2026-04-19'
!TO116.success := true
!insert (TO116, P105) into TrainingObjectivePlayer

!new TrainingObjective('TO117')
!TO117.areaToImprove := 'Avoiding offsides when arriving late'
!TO117.startDate := '2026-03-19'
!TO117.endDate := '2026-04-05'
!TO117.success := true
!insert (TO117, P105) into TrainingObjectivePlayer

!new PlayerNotes('PN42')
!PN42.note := 'Strong organizer; switches play effectively.'
!PN42.date := '2026-03-30'
!insert (P105, PN42) into PlayerPlayerNotes

!new Player('P106')
!P106.name := 'Pema Sherpa'
!P106.age := 21
!P106.bestFoot := #BOTH
!P106.phoneNumber := '+977-982-3333333'
!insert (T34, P106) into TeamPlayer

!new Position('POS164')
!POS164.positionName := #DEFENDER
!insert (P106, POS164) into PlayerPositions

!new Position('POS165')
!POS165.positionName := #GOALKEEPER
!insert (P106, POS165) into PlayerPositions

!new TrainingObjective('TO118')
!TO118.areaToImprove := 'Defensive heading under pressure'
!TO118.startDate := '2026-03-23'
!TO118.endDate := '2026-04-23'
!TO118.success := false
!insert (TO118, P106) into TrainingObjectivePlayer

!new Player('P107')
!P107.name := 'Ritesh Karki'
!P107.age := 33
!P107.bestFoot := #RIGHT
!P107.phoneNumber := '+977-984-4444444'
!insert (T34, P107) into TeamPlayer

!new Position('POS166')
!POS166.positionName := #GOALKEEPER
!insert (P107, POS166) into PlayerPositions

!new TrainingObjective('TO119')
!TO119.areaToImprove := 'Command of area on corners'
!TO119.startDate := '2026-03-24'
!TO119.endDate := '2026-04-24'
!TO119.success := false
!insert (TO119, P107) into TrainingObjectivePlayer

!new PlayerNotes('PN43')
!PN43.note := 'Needs louder calls on set pieces.'
!PN43.date := '2026-03-27'
!insert (P107, PN43) into PlayerPlayerNotes

!new PlayerNotes('PN44')
!PN44.note := 'Improved catching technique in wet sessions.'
!PN44.date := '2026-04-08'
!insert (P107, PN44) into PlayerPlayerNotes

!new TrainingSession('TS42')
!TS42.date := '2026-03-29'
!TS42.location := 'Fjordvellir Training Hall (indoor)'
!TS42.purpose := 'Low-temperature ball control and short passing'
!insert (T33, TS42) into TeamTraining

!new TrainingNotes('TN72')
!TN72.note := 'Indoor session focused on first touch; limited sprint work.'
!TN72.date := '2026-03-29'
!insert (TS42, TN72) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA30')
!FA30.reason := 'School exam ran late'
!insert (TS42, FA30) into TrainingFailded
!insert (FA30, P102) into FailedPlayer

!new TrainingSession('TS43')
!TS43.date := '2026-04-06'
!TS43.location := 'Fjordvellir Stadium (main pitch)'
!TS43.purpose := 'Set-piece defending rehearsal'
!insert (T33, TS43) into TeamTraining

!new TrainingNotes('TN73')
!TN73.note := 'Marked zones adjusted; better coverage at near post.'
!TN73.date := '2026-04-06'
!insert (TS43, TN73) into TrainingTrainingNotes

!new TrainingNotes('TN74')
!TN74.note := 'Goalkeeper distribution drills added at end.'
!TN74.date := '2026-04-06'
!insert (TS43, TN74) into TrainingTrainingNotes

!new TrainingSession('TS44')
!TS44.date := '2026-03-28'
!TS44.location := 'Dasharath Annex Pitch A'
!TS44.purpose := 'Finishing and counter-attack timing'
!insert (T34, TS44) into TeamTraining

!new TrainingNotes('TN75')
!TN75.note := 'Worked on through-balls; strikers practiced near-post runs.'
!TN75.date := '2026-03-28'
!insert (TS44, TN75) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA31')
!FA31.reason := 'Family ceremony (wedding attendance)'
!insert (TS44, FA31) into TrainingFailded
!insert (FA31, P104) into FailedPlayer

!new TrainingFailedToAttend('FA32')
!FA32.reason := 'Public transport strike delay'
!insert (TS44, FA32) into TrainingFailded
!insert (FA32, P107) into FailedPlayer

!new TrainingSession('TS45')
!TS45.date := '2026-04-04'
!TS45.location := 'Dasharath Annex Pitch B'
!TS45.purpose := 'Defensive compactness and offside line'
!insert (T34, TS45) into TeamTraining

!new TrainingNotes('TN76')
!TN76.note := 'Back line stepped together; fewer gaps between CB and FB.'
!TN76.date := '2026-04-04'
!insert (TS45, TN76) into TrainingTrainingNotes

!new TrainingNotes('TN77')
!TN77.note := 'Offside traps rehearsed; timing still inconsistent.'
!TN77.date := '2026-04-04'
!insert (TS45, TN77) into TrainingTrainingNotes

!new TrainingNotes('TN78')
!TN78.note := 'Corners defended with mixed zonal/man marking.'
!TN78.date := '2026-04-04'
!insert (TS45, TN78) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA33')
!FA33.reason := 'Flu symptoms'
!insert (TS45, FA33) into TrainingFailded
!insert (FA33, P104) into FailedPlayer

!new Competition('COMP12')
!COMP12.name := 'Two-Leg Friendship Trophy'
!COMP12.type := 'Friendly (Two Legs)'

!new Match('M18')
!M18.date := '2026-04-10'
!M18.homeAway := true
!insert (COMP12, M18) into CompetitionMatch
!insert (T33, M18) into LocalMatch
!insert (T34, M18) into VisitorMatch

!new MatchReport('MR18')
!MR18.duration := 90
!MR18.scoreLocal := 2
!MR18.scoreVisitor := 0
!insert (M18, MR18) into MatchMatchReport

!new MatchEvent('ME99')
!ME99.eventType := #GOAL
!ME99.time := 9
!insert (M18, ME99) into MatchMatchEvent

!new MatchEvent('ME100')
!ME100.eventType := #FOUL
!ME100.time := 22
!insert (M18, ME100) into MatchMatchEvent

!new MatchEvent('ME101')
!ME101.eventType := #OFFSIDE
!ME101.time := 37
!insert (M18, ME101) into MatchMatchEvent

!new MatchEvent('ME102')
!ME102.eventType := #CORNER
!ME102.time := 61
!insert (M18, ME102) into MatchMatchEvent

!new MatchEvent('ME103')
!ME103.eventType := #GOAL
!ME103.time := 84
!insert (M18, ME103) into MatchMatchEvent

!new MatchNote('MN23')
!MN23.note := 'Wind affected long balls; locals played shorter passes.'
!MN23.date := '2026-04-10'
!insert (M18, MN23) into MatchMatchNote

!new MatchNote('MN24')
!MN24.note := 'Visitor struggled with offside timing in first half.'
!MN24.date := '2026-04-10'
!insert (M18, MN24) into MatchMatchNote

!new MatchNote('MN25')
!MN25.note := 'Late goal came from sustained pressure after corners.'
!MN25.date := '2026-04-10'
!insert (M18, MN25) into MatchMatchNote

!new MatchPlayer('MP97')
!MP97.booked := false
!MP97.goals := 0
!MP97.rating := 10
!insert (P101, MP97) into PlayerMatch
!insert (M18, MP97) into MatchMatchPlayer

!new MatchPlayerPosition('MPP97')
!MPP97.positionName := #GOALKEEPER
!MPP97.number := 1
!insert (MP97, MPP97) into MatchPlayerMatchPlayerPosition

!new Match('M19')
!M19.date := '2026-04-17'
!M19.homeAway := true
!insert (COMP12, M19) into CompetitionMatch
!insert (T34, M19) into LocalMatch
!insert (T33, M19) into VisitorMatch

!new MatchReport('MR19')
!MR19.duration := 90
!MR19.scoreLocal := 3
!MR19.scoreVisitor := 1
!insert (M19, MR19) into MatchMatchReport

!new MatchEvent('ME104')
!ME104.eventType := #GOAL
!ME104.time := 3
!insert (M19, ME104) into MatchMatchEvent

!new MatchEvent('ME105')
!ME105.eventType := #GOAL
!ME105.time := 18
!insert (M19, ME105) into MatchMatchEvent

!new MatchEvent('ME106')
!ME106.eventType := #FOUL
!ME106.time := 33
!insert (M19, ME106) into MatchMatchEvent

!new MatchEvent('ME107')
!ME107.eventType := #PENALTY
!ME107.time := 45
!insert (M19, ME107) into MatchMatchEvent

!new MatchEvent('ME108')
!ME108.eventType := #GOAL
!ME108.time := 46
!insert (M19, ME108) into MatchMatchEvent

!new MatchEvent('ME109')
!ME109.eventType := #CORNER
!ME109.time := 58
!insert (M19, ME109) into MatchMatchEvent

!new MatchEvent('ME110')
!ME110.eventType := #OFFSIDE
!ME110.time := 67
!insert (M19, ME110) into MatchMatchEvent

!new MatchEvent('ME111')
!ME111.eventType := #GOAL
!ME111.time := 79
!insert (M19, ME111) into MatchMatchEvent

!new MatchPlayer('MP98')
!MP98.booked := false
!MP98.goals := 2
!MP98.rating := 8
!insert (P104, MP98) into PlayerMatch
!insert (M19, MP98) into MatchMatchPlayer

!new MatchPlayerPosition('MPP98')
!MPP98.positionName := #FORWARD
!MPP98.number := 10
!insert (MP98, MPP98) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP99')
!MP99.booked := false
!MP99.goals := 1
!MP99.rating := 8
!insert (P105, MP99) into PlayerMatch
!insert (M19, MP99) into MatchMatchPlayer

!new MatchPlayerPosition('MPP99')
!MPP99.positionName := #MIDFIELDER
!MPP99.number := 6
!insert (MP99, MPP99) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP100')
!MP100.booked := true
!MP100.goals := 0
!MP100.rating := 4
!insert (P106, MP100) into PlayerMatch
!insert (M19, MP100) into MatchMatchPlayer

!new MatchPlayerPosition('MPP100')
!MPP100.positionName := #DEFENDER
!MPP100.number := 5
!insert (MP100, MPP100) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP101')
!MP101.booked := false
!MP101.goals := 0
!MP101.rating := 6
!insert (P107, MP101) into PlayerMatch
!insert (M19, MP101) into MatchMatchPlayer

!new MatchPlayerPosition('MPP101')
!MPP101.positionName := #GOALKEEPER
!MPP101.number := 1
!insert (MP101, MPP101) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP102')
!MP102.booked := false
!MP102.goals := 0
!MP102.rating := 7
!insert (P101, MP102) into PlayerMatch
!insert (M19, MP102) into MatchMatchPlayer

!new MatchPlayerPosition('MPP102')
!MPP102.positionName := #GOALKEEPER
!MPP102.number := 1
!insert (MP102, MPP102) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP103')
!MP103.booked := false
!MP103.goals := 0
!MP103.rating := 0
!insert (P102, MP103) into PlayerMatch
!insert (M19, MP103) into MatchMatchPlayer

!new MatchPlayerPosition('MPP103')
!MPP103.positionName := #DEFENDER
!MPP103.number := 14
!insert (MP103, MPP103) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP104')
!MP104.booked := false
!MP104.goals := 1
!MP104.rating := 7
!insert (P103, MP104) into PlayerMatch
!insert (M19, MP104) into MatchMatchPlayer

!new MatchPlayerPosition('MPP104')
!MPP104.positionName := #MIDFIELDER
!MPP104.number := 8
!insert (MP104, MPP104) into MatchPlayerMatchPlayerPosition
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 406 | 0.00% |
| Multiplicities Errors | 0 | 104 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 40 | 0.00% |

## Category complex
```
!new Club('C49')
!C49.name := 'Busan Harbor United'
!C49.homeGround := 'Harbor Dome Training Ground'
!C49.chairman := 'Kwon Ji-eun'

!new Team('T59')
!T59.name := 'Busan Harbor United First'
!insert (C49, T59) into ClubTeam

!new Team('T60')
!T60.name := 'Busan Harbor United U19'
!insert (C49, T60) into ClubTeam

!new Team('T61')
!T61.name := 'Busan Harbor United B'
!insert (C49, T61) into ClubTeam

!new Club('C50')
!C50.name := 'Club Deportivo Santa Lucia'
!C50.homeGround := 'Estadio Municipal Santa Lucia'
!C50.chairman := 'Rosa Martinez'

!new Team('T62')
!T62.name := 'CD Santa Lucia'
!insert (C50, T62) into ClubTeam

!new Club('C51')
!C51.name := 'Lagos Mainland Rangers'
!C51.homeGround := 'Mainland Sports Complex'
!C51.chairman := 'Ifeanyi Ugochukwu'

!new Team('T63')
!T63.name := 'Mainland Rangers First Team'
!insert (C51, T63) into ClubTeam

!new Club('C52')
!C52.name := 'Vancouver Cascadia FC'
!C52.homeGround := 'Cascadia Waterfront Park'
!C52.chairman := 'Rachel Thompson'

!new Team('T64')
!T64.name := 'Vancouver Cascadia'
!insert (C52, T64) into ClubTeam

!new Player('P197')
!P197.name := 'Kim Min-jun'
!P197.age := 27
!P197.bestFoot := #BOTH
!P197.phoneNumber := '+82-10-2345-7788'
!insert (T59, P197) into TeamPlayer

!new Position('POS304')
!POS304.positionName := #FORWARD
!insert (P197, POS304) into PlayerPositions

!new Position('POS305')
!POS305.positionName := #MIDFIELDER
!insert (P197, POS305) into PlayerPositions

!new Position('POS306')
!POS306.positionName := #DEFENDER
!insert (P197, POS306) into PlayerPositions

!new TrainingObjective('TO214')
!TO214.areaToImprove := 'First-line pressing intensity for 90 minutes'
!TO214.startDate := '2026-03-20'
!TO214.endDate := '2026-04-20'
!TO214.success := false
!insert (TO214, P197) into TrainingObjectivePlayer

!new Player('P198')
!P198.name := 'Lee Seo-yeon'
!P198.age := 23
!P198.bestFoot := #LEFT
!P198.phoneNumber := '+82-10-9901-4412'
!insert (T59, P198) into TeamPlayer

!new Position('POS307')
!POS307.positionName := #MIDFIELDER
!insert (P198, POS307) into PlayerPositions

!new TrainingObjective('TO215')
!TO215.areaToImprove := 'Vertical passes between lines (weak foot control)'
!TO215.startDate := '2026-03-20'
!TO215.endDate := '2026-04-10'
!TO215.success := true
!insert (TO215, P198) into TrainingObjectivePlayer

!new PlayerNotes('PN71')
!PN71.note := 'Excellent engine; remind to slow tempo when leading.'
!PN71.date := '2026-04-02'
!insert (P198, PN71) into PlayerPlayerNotes

!new Player('P199')
!P199.name := 'Park Ji-ho'
!P199.age := 29
!P199.bestFoot := #RIGHT
!P199.phoneNumber := '+82-10-5566-9090'
!insert (T59, P199) into TeamPlayer

!new Position('POS308')
!POS308.positionName := #GOALKEEPER
!insert (P199, POS308) into PlayerPositions

!new TrainingObjective('TO216')
!TO216.areaToImprove := 'Short build-up: passes to pivot under pressure'
!TO216.startDate := '2026-03-21'
!TO216.endDate := '2026-04-21'
!TO216.success := false
!insert (TO216, P199) into TrainingObjectivePlayer

!new Player('P200')
!P200.name := 'Choi Da-eun'
!P200.age := 18
!P200.bestFoot := #RIGHT
!P200.phoneNumber := '+82-10-1111-2222'
!insert (T60, P200) into TeamPlayer

!new Position('POS309')
!POS309.positionName := #FORWARD
!insert (P200, POS309) into PlayerPositions

!new Position('POS310')
!POS310.positionName := #MIDFIELDER
!insert (P200, POS310) into PlayerPositions

!new TrainingObjective('TO217')
!TO217.areaToImprove := 'Finishing after sprint (breathing control)'
!TO217.startDate := '2026-03-22'
!TO217.endDate := '2026-04-30'
!TO217.success := false
!insert (TO217, P200) into TrainingObjectivePlayer

!new Player('P201')
!P201.name := 'Jung Hyeon-woo'
!P201.age := 17
!P201.bestFoot := #LEFT
!P201.phoneNumber := '+82-10-3333-4444'
!insert (T60, P201) into TeamPlayer

!new Position('POS311')
!POS311.positionName := #DEFENDER
!insert (P201, POS311) into PlayerPositions

!new TrainingObjective('TO218')
!TO218.areaToImprove := 'Body shape when defending 1v1 wide'
!TO218.startDate := '2026-03-22'
!TO218.endDate := '2026-04-25'
!TO218.success := false
!insert (TO218, P201) into TrainingObjectivePlayer

!new PlayerNotes('PN72')
!PN72.note := 'Needs confidence to step in and intercept earlier.'
!PN72.date := '2026-04-05'
!insert (P201, PN72) into PlayerPlayerNotes

!new Player('P202')
!P202.name := 'Song Ara'
!P202.age := 18
!P202.bestFoot := #BOTH
!P202.phoneNumber := '+82-10-7777-1212'
!insert (T60, P202) into TeamPlayer

!new Position('POS312')
!POS312.positionName := #GOALKEEPER
!insert (P202, POS312) into PlayerPositions

!new TrainingObjective('TO219')
!TO219.areaToImprove := 'Claiming crosses in traffic'
!TO219.startDate := '2026-03-23'
!TO219.endDate := '2026-04-23'
!TO219.success := true
!insert (TO219, P202) into TrainingObjectivePlayer

!new Player('P203')
!P203.name := 'Han Tae-sung'
!P203.age := 21
!P203.bestFoot := #RIGHT
!P203.phoneNumber := '+82-10-8080-3030'
!insert (T61, P203) into TeamPlayer

!new Position('POS313')
!POS313.positionName := #DEFENDER
!insert (P203, POS313) into PlayerPositions

!new Position('POS314')
!POS314.positionName := #MIDFIELDER
!insert (P203, POS314) into PlayerPositions

!new TrainingObjective('TO220')
!TO220.areaToImprove := 'Defensive line coordination (step/drop timing)'
!TO220.startDate := '2026-03-24'
!TO220.endDate := '2026-04-24'
!TO220.success := false
!insert (TO220, P203) into TrainingObjectivePlayer

!new Player('P204')
!P204.name := 'Kang Yu-na'
!P204.age := 20
!P204.bestFoot := #BOTH
!P204.phoneNumber := '+82-10-9090-4040'
!insert (T61, P204) into TeamPlayer

!new Position('POS315')
!POS315.positionName := #MIDFIELDER
!insert (P204, POS315) into PlayerPositions

!new TrainingObjective('TO221')
!TO221.areaToImprove := 'Receiving on the half-turn under contact'
!TO221.startDate := '2026-03-24'
!TO221.endDate := '2026-04-15'
!TO221.success := true
!insert (TO221, P204) into TrainingObjectivePlayer

!new Player('P205')
!P205.name := 'Lim Seung-ho'
!P205.age := 22
!P205.bestFoot := #RIGHT
!P205.phoneNumber := '+82-10-6060-5050'
!insert (T61, P205) into TeamPlayer

!new Position('POS316')
!POS316.positionName := #FORWARD
!insert (P205, POS316) into PlayerPositions

!new TrainingObjective('TO222')
!TO222.areaToImprove := 'Near-post runs and finishing with one touch'
!TO222.startDate := '2026-03-25'
!TO222.endDate := '2026-04-25'
!TO222.success := false
!insert (TO222, P205) into TrainingObjectivePlayer

!new Player('P206')
!P206.name := 'Alex Gutierrez'
!P206.age := 26
!P206.bestFoot := #RIGHT
!P206.phoneNumber := '+34 612 345 900'
!insert (T62, P206) into TeamPlayer

!new Position('POS317')
!POS317.positionName := #FORWARD
!insert (P206, POS317) into PlayerPositions

!new TrainingObjective('TO223')
!TO223.areaToImprove := 'Finishing from cut-backs (first-time strikes)'
!TO223.startDate := '2026-03-18'
!TO223.endDate := '2026-04-18'
!TO223.success := false
!insert (TO223, P206) into TrainingObjectivePlayer

!new Player('P207')
!P207.name := 'Lucia Navarro'
!P207.age := 24
!P207.bestFoot := #LEFT
!P207.phoneNumber := '+34 699 880 112'
!insert (T62, P207) into TeamPlayer

!new Position('POS318')
!POS318.positionName := #MIDFIELDER
!insert (P207, POS318) into PlayerPositions

!new Position('POS319')
!POS319.positionName := #FORWARD
!insert (P207, POS319) into PlayerPositions

!new TrainingObjective('TO224')
!TO224.areaToImprove := 'Crossing accuracy from left half-space'
!TO224.startDate := '2026-03-18'
!TO224.endDate := '2026-04-08'
!TO224.success := true
!insert (TO224, P207) into TrainingObjectivePlayer

!new PlayerNotes('PN73')
!PN73.note := 'Very good delivery on corners; keep as primary taker.'
!PN73.date := '2026-04-01'
!insert (P207, PN73) into PlayerPlayerNotes

!new Player('P208')
!P208.name := 'Iker Arostegui'
!P208.age := 30
!P208.bestFoot := #RIGHT
!P208.phoneNumber := '+34 677 101 202'
!insert (T62, P208) into TeamPlayer

!new Position('POS320')
!POS320.positionName := #GOALKEEPER
!insert (P208, POS320) into PlayerPositions

!new TrainingObjective('TO225')
!TO225.areaToImprove := 'Quick distribution to start counters'
!TO225.startDate := '2026-03-19'
!TO225.endDate := '2026-04-19'
!TO225.success := false
!insert (TO225, P208) into TrainingObjectivePlayer

!new Player('P209')
!P209.name := 'Chinedu Okafor'
!P209.age := 25
!P209.bestFoot := #BOTH
!P209.phoneNumber := '+234 803 555 0101'
!insert (T63, P209) into TeamPlayer

!new Position('POS321')
!POS321.positionName := #FORWARD
!insert (P209, POS321) into PlayerPositions

!new TrainingObjective('TO226')
!TO226.areaToImprove := 'Staying onside vs high line'
!TO226.startDate := '2026-03-26'
!TO226.endDate := '2026-04-26'
!TO226.success := false
!insert (TO226, P209) into TrainingObjectivePlayer

!new Player('P210')
!P210.name := 'Tosin Adeyemi'
!P210.age := 28
!P210.bestFoot := #RIGHT
!P210.phoneNumber := '+234 802 111 2200'
!insert (T63, P210) into TeamPlayer

!new Position('POS322')
!POS322.positionName := #DEFENDER
!insert (P210, POS322) into PlayerPositions

!new TrainingObjective('TO227')
!TO227.areaToImprove := 'Tackling timing (avoid late contact)'
!TO227.startDate := '2026-03-26'
!TO227.endDate := '2026-04-12'
!TO227.success := true
!insert (TO227, P210) into TrainingObjectivePlayer

!new Player('P211')
!P211.name := 'Bola Akinwale'
!P211.age := 24
!P211.bestFoot := #LEFT
!P211.phoneNumber := '+234 809 222 3399'
!insert (T63, P211) into TeamPlayer

!new Position('POS323')
!POS323.positionName := #GOALKEEPER
!insert (P211, POS323) into PlayerPositions

!new TrainingObjective('TO228')
!TO228.areaToImprove := 'Footwork on low shots'
!TO228.startDate := '2026-03-27'
!TO228.endDate := '2026-04-27'
!TO228.success := false
!insert (TO228, P211) into TrainingObjectivePlayer

!new Player('P212')
!P212.name := 'Noah Campbell'
!P212.age := 27
!P212.bestFoot := #RIGHT
!P212.phoneNumber := '+1 (604) 555-0199'
!insert (T64, P212) into TeamPlayer

!new Position('POS324')
!POS324.positionName := #DEFENDER
!insert (P212, POS324) into PlayerPositions

!new Position('POS325')
!POS325.positionName := #MIDFIELDER
!insert (P212, POS325) into PlayerPositions

!new TrainingObjective('TO229')
!TO229.areaToImprove := 'Recovery runs after overlaps'
!TO229.startDate := '2026-03-17'
!TO229.endDate := '2026-04-17'
!TO229.success := false
!insert (TO229, P212) into TrainingObjectivePlayer

!new Player('P213')
!P213.name := 'Sofia Chen'
!P213.age := 22
!P213.bestFoot := #BOTH
!P213.phoneNumber := '+1 (604) 555-0110'
!insert (T64, P213) into TeamPlayer

!new Position('POS326')
!POS326.positionName := #MIDFIELDER
!insert (P213, POS326) into PlayerPositions

!new TrainingObjective('TO230')
!TO230.areaToImprove := 'Scanning before receiving under pressure'
!TO230.startDate := '2026-03-17'
!TO230.endDate := '2026-04-05'
!TO230.success := true
!insert (TO230, P213) into TrainingObjectivePlayer

!new PlayerNotes('PN74')
!PN74.note := 'Reads pressing cues well; should call triggers louder.'
!PN74.date := '2026-03-30'
!insert (P213, PN74) into PlayerPlayerNotes

!new Player('P214')
!P214.name := 'Mateo Silva'
!P214.age := 24
!P214.bestFoot := #LEFT
!P214.phoneNumber := '+1 (604) 555-0144'
!insert (T64, P214) into TeamPlayer

!new Position('POS327')
!POS327.positionName := #FORWARD
!insert (P214, POS327) into PlayerPositions

!new TrainingObjective('TO231')
!TO231.areaToImprove := 'Finishing with weaker foot (right)'
!TO231.startDate := '2026-03-18'
!TO231.endDate := '2026-04-18'
!TO231.success := false
!insert (TO231, P214) into TrainingObjectivePlayer

!new TrainingSession('TS77')
!TS77.date := '2026-03-31'
!TS77.location := 'Harbor Dome - Pitch 1'
!TS77.purpose := 'Pressing shape + immediate counter-press'
!insert (T59, TS77) into TeamTraining

!new TrainingNotes('TN123')
!TN123.note := '9 must curve run to block pivot; do not chase CB blindly.'
!TN123.date := '2026-03-31'
!insert (TS77, TN123) into TrainingTrainingNotes

!new TrainingNotes('TN124')
!TN124.note := 'When press is beaten, drop into 4-4-2 quickly.'
!TN124.date := '2026-03-31'
!insert (TS77, TN124) into TrainingTrainingNotes

!new TrainingSession('TS78')
!TS78.date := '2026-04-06'
!TS78.location := 'Harbor Dome - Gym'
!TS78.purpose := 'Strength + acceleration mechanics'
!insert (T59, TS78) into TeamTraining

!new TrainingNotes('TN125')
!TN125.note := 'Acceleration: 10m focus, aggressive forward lean.'
!TN125.date := '2026-04-06'
!insert (TS78, TN125) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA54')
!FA54.reason := 'Passport/visa appointment (consulate)'
!insert (TS78, FA54) into TrainingFailded
!insert (FA54, P198) into FailedPlayer

!new TrainingSession('TS79')
!TS79.date := '2026-04-02'
!TS79.location := 'Harbor Dome - Pitch 3'
!TS79.purpose := 'U19: defending wide areas 1v1 + covering'
!insert (T60, TS79) into TeamTraining

!new TrainingNotes('TN126')
!TN126.note := 'Fullback: show outside; winger must track runner early.'
!TN126.date := '2026-04-02'
!insert (TS79, TN126) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA55')
!FA55.reason := 'School tournament travel'
!insert (TS79, FA55) into TrainingFailded
!insert (FA55, P201) into FailedPlayer

!new TrainingSession('TS80')
!TS80.date := '2026-04-03'
!TS80.location := 'Harbor Dome - Pitch 2'
!TS80.purpose := 'B team: build-up patterns vs mid-block'
!insert (T61, TS80) into TeamTraining

!new TrainingNotes('TN127')
!TN127.note := '6 must drop into back line only when pressed; otherwise stay higher.'
!TN127.date := '2026-04-03'
!insert (TS80, TN127) into TrainingTrainingNotes

!new TrainingNotes('TN128')
!TN128.note := 'Striker pin CB; do not drift too early.'
!TN128.date := '2026-04-03'
!insert (TS80, TN128) into TrainingTrainingNotes

!new TrainingSession('TS81')
!TS81.date := '2026-03-29'
!TS81.location := 'Estadio Municipal Santa Lucia - Annex'
!TS81.purpose := 'Set pieces: attacking corners + second balls'
!insert (T62, TS81) into TeamTraining

!new TrainingNotes('TN129')
!TN129.note := 'Near-post flick routine improved; timing still late for runner.'
!TN129.date := '2026-03-29'
!insert (TS81, TN129) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA56')
!FA56.reason := 'Gastrointestinal illness'
!insert (TS81, FA56) into TrainingFailded
!insert (FA56, P206) into FailedPlayer

!new TrainingSession('TS82')
!TS82.date := '2026-04-01'
!TS82.location := 'Mainland Sports Complex - Field A'
!TS82.purpose := 'High line + offside trap communication'
!insert (T63, TS82) into TeamTraining

!new TrainingNotes('TN130')
!TN130.note := 'CBs must step together on the cue; keeper calls UP clearly.'
!TN130.date := '2026-04-01'
!insert (TS82, TN130) into TrainingTrainingNotes

!new TrainingSession('TS83')
!TS83.date := '2026-03-28'
!TS83.location := 'Cascadia Waterfront Park - Turf 1'
!TS83.purpose := 'Attacking transitions and finishing in rain'
!insert (T64, TS83) into TeamTraining

!new TrainingNotes('TN131')
!TN131.note := 'First pass forward after regain; then support underneath.'
!TN131.date := '2026-03-28'
!insert (TS83, TN131) into TrainingTrainingNotes

!new TrainingNotes('TN132')
!TN132.note := 'Shoot early on slick surface; rebounds likely.'
!TN132.date := '2026-03-28'
!insert (TS83, TN132) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA57')
!FA57.reason := 'Work shift overran (film set)'
!insert (TS83, FA57) into TrainingFailded
!insert (FA57, P212) into FailedPlayer

!new Competition('COMP22')
!COMP22.name := 'Intercontinental Spring Four'
!COMP22.type := 'Invitation mini-league'

!new Match('M32')
!M32.date := '2026-04-10'
!M32.homeAway := true
!insert (COMP22, M32) into CompetitionMatch
!insert (T59, M32) into LocalMatch
!insert (T62, M32) into VisitorMatch

!new MatchReport('MR31')
!MR31.duration := 90
!MR31.scoreLocal := 1
!MR31.scoreVisitor := 0
!insert (M32, MR31) into MatchMatchReport

!new MatchEvent('ME181')
!ME181.eventType := #GOAL
!ME181.time := 52
!insert (M32, ME181) into MatchMatchEvent

!new MatchEvent('ME182')
!ME182.eventType := #FOUL
!ME182.time := 64
!insert (M32, ME182) into MatchMatchEvent

!new MatchEvent('ME183')
!ME183.eventType := #OFFSIDE
!ME183.time := 71
!insert (M32, ME183) into MatchMatchEvent

!new MatchNote('MN42')
!MN42.note := 'Local side switched to a compact mid-block after scoring.'
!MN42.date := '2026-04-10'
!insert (M32, MN42) into MatchMatchNote

!new MatchPlayer('MP184')
!MP184.booked := false
!MP184.goals := 0
!MP184.rating := 7
!insert (P199, MP184) into PlayerMatch
!insert (M32, MP184) into MatchMatchPlayer

!new MatchPlayerPosition('MPP184')
!MPP184.positionName := #GOALKEEPER
!MPP184.number := 1
!insert (MP184, MPP184) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP185')
!MP185.booked := false
!MP185.goals := 0
!MP185.rating := 7
!insert (P198, MP185) into PlayerMatch
!insert (M32, MP185) into MatchMatchPlayer

!new MatchPlayerPosition('MPP185')
!MPP185.positionName := #MIDFIELDER
!MPP185.number := 8
!insert (MP185, MPP185) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP186')
!MP186.booked := false
!MP186.goals := 1
!MP186.rating := 8
!insert (P197, MP186) into PlayerMatch
!insert (M32, MP186) into MatchMatchPlayer

!new MatchPlayerPosition('MPP186')
!MPP186.positionName := #FORWARD
!MPP186.number := 9
!insert (MP186, MPP186) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP187')
!MP187.booked := false
!MP187.goals := 0
!MP187.rating := 6
!insert (P208, MP187) into PlayerMatch
!insert (M32, MP187) into MatchMatchPlayer

!new MatchPlayerPosition('MPP187')
!MPP187.positionName := #GOALKEEPER
!MPP187.number := 1
!insert (MP187, MPP187) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP188')
!MP188.booked := false
!MP188.goals := 0
!MP188.rating := 7
!insert (P207, MP188) into PlayerMatch
!insert (M32, MP188) into MatchMatchPlayer

!new MatchPlayerPosition('MPP188')
!MPP188.positionName := #MIDFIELDER
!MPP188.number := 10
!insert (MP188, MPP188) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP189')
!MP189.booked := true
!MP189.goals := 0
!MP189.rating := 6
!insert (P206, MP189) into PlayerMatch
!insert (M32, MP189) into MatchMatchPlayer

!new MatchPlayerPosition('MPP189')
!MPP189.positionName := #FORWARD
!MPP189.number := 9
!insert (MP189, MPP189) into MatchPlayerMatchPlayerPosition

!new Match('M33')
!M33.date := '2026-04-12'
!M33.homeAway := false
!insert (COMP22, M33) into CompetitionMatch
!insert (T63, M33) into LocalMatch
!insert (T64, M33) into VisitorMatch

!new MatchReport('MR32')
!MR32.duration := 94
!MR32.scoreLocal := 2
!MR32.scoreVisitor := 2
!insert (M33, MR32) into MatchMatchReport

!new MatchEvent('ME184')
!ME184.eventType := #GOAL
!ME184.time := 11
!insert (M33, ME184) into MatchMatchEvent

!new MatchEvent('ME185')
!ME185.eventType := #PENALTY
!ME185.time := 33
!insert (M33, ME185) into MatchMatchEvent

!new MatchEvent('ME186')
!ME186.eventType := #GOAL
!ME186.time := 34
!insert (M33, ME186) into MatchMatchEvent

!new MatchEvent('ME187')
!ME187.eventType := #GOAL
!ME187.time := 59
!insert (M33, ME187) into MatchMatchEvent

!new MatchEvent('ME188')
!ME188.eventType := #FOUL
!ME188.time := 62
!insert (M33, ME188) into MatchMatchEvent

!new MatchEvent('ME189')
!ME189.eventType := #GOAL
!ME189.time := 88
!insert (M33, ME189) into MatchMatchEvent

!new MatchNote('MN43')
!MN43.note := 'Heavy rain increased mistakes; both goals at 88 minutes came from second balls.'
!MN43.date := '2026-04-12'
!insert (M33, MN43) into MatchMatchNote

!new MatchPlayer('MP190')
!MP190.booked := false
!MP190.goals := 0
!MP190.rating := 6
!insert (P211, MP190) into PlayerMatch
!insert (M33, MP190) into MatchMatchPlayer

!new MatchPlayerPosition('MPP190')
!MPP190.positionName := #GOALKEEPER
!MPP190.number := 1
!insert (MP190, MPP190) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP191')
!MP191.booked := true
!MP191.goals := 0
!MP191.rating := 6
!insert (P210, MP191) into PlayerMatch
!insert (M33, MP191) into MatchMatchPlayer

!new MatchPlayerPosition('MPP191')
!MPP191.positionName := #DEFENDER
!MPP191.number := 5
!insert (MP191, MPP191) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP192')
!MP192.booked := false
!MP192.goals := 2
!MP192.rating := 8
!insert (P209, MP192) into PlayerMatch
!insert (M33, MP192) into MatchMatchPlayer

!new MatchPlayerPosition('MPP192')
!MPP192.positionName := #FORWARD
!MPP192.number := 9
!insert (MP192, MPP192) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP193')
!MP193.booked := false
!MP193.goals := 0
!MP193.rating := 6
!insert (P212, MP193) into PlayerMatch
!insert (M33, MP193) into MatchMatchPlayer

!new MatchPlayerPosition('MPP193')
!MPP193.positionName := #DEFENDER
!MPP193.number := 4
!insert (MP193, MPP193) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP194')
!MP194.booked := false
!MP194.goals := 1
!MP194.rating := 7
!insert (P213, MP194) into PlayerMatch
!insert (M33, MP194) into MatchMatchPlayer

!new MatchPlayerPosition('MPP194')
!MPP194.positionName := #MIDFIELDER
!MPP194.number := 8
!insert (MP194, MPP194) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP195')
!MP195.booked := false
!MP195.goals := 1
!MP195.rating := 7
!insert (P214, MP195) into PlayerMatch
!insert (M33, MP195) into MatchMatchPlayer

!new MatchPlayerPosition('MPP195')
!MPP195.positionName := #FORWARD
!MPP195.number := 11
!insert (MP195, MPP195) into MatchPlayerMatchPlayerPosition

!new Match('M34')
!M34.date := '2026-04-15'
!M34.homeAway := true
!insert (COMP22, M34) into CompetitionMatch
!insert (T62, M34) into LocalMatch
!insert (T63, M34) into VisitorMatch

!new MatchReport('MR33')
!MR33.duration := 90
!MR33.scoreLocal := 0
!MR33.scoreVisitor := 0
!insert (M34, MR33) into MatchMatchReport

!new MatchEvent('ME190')
!ME190.eventType := #FOUL
!ME190.time := 17
!insert (M34, ME190) into MatchMatchEvent

!new MatchEvent('ME191')
!ME191.eventType := #CORNER
!ME191.time := 41
!insert (M34, ME191) into MatchMatchEvent

!new MatchEvent('ME192')
!ME192.eventType := #OFFSIDE
!ME192.time := 69
!insert (M34, ME192) into MatchMatchEvent

!new MatchEvent('ME193')
!ME193.eventType := #PENALTY
!ME193.time := 77
!insert (M34, ME193) into MatchMatchEvent

!new MatchNote('MN44')
!MN44.note := 'Local team dominated corners but failed to attack the second phase.'
!MN44.date := '2026-04-15'
!insert (M34, MN44) into MatchMatchNote

!new MatchNote('MN45')
!MN45.note := 'Penalty at 77 minutes was saved; shooter hesitated on run-up.'
!MN45.date := '2026-04-15'
!insert (M34, MN45) into MatchMatchNote

!new MatchNote('MN46')
!MN46.note := 'Visitors back line held a consistent high line; offside trap worked repeatedly.'
!MN46.date := '2026-04-15'
!insert (M34, MN46) into MatchMatchNote

!new MatchPlayer('MP196')
!MP196.booked := false
!MP196.goals := 0
!MP196.rating := 8
!insert (P208, MP196) into PlayerMatch
!insert (M34, MP196) into MatchMatchPlayer

!new MatchPlayerPosition('MPP196')
!MPP196.positionName := #GOALKEEPER
!MPP196.number := 1
!insert (MP196, MPP196) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP197')
!MP197.booked := false
!MP197.goals := 0
!MP197.rating := 7
!insert (P207, MP197) into PlayerMatch
!insert (M34, MP197) into MatchMatchPlayer

!new MatchPlayerPosition('MPP197')
!MPP197.positionName := #FORWARD
!MPP197.number := 7
!insert (MP197, MPP197) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP198')
!MP198.booked := false
!MP198.goals := 0
!MP198.rating := 6
!insert (P206, MP198) into PlayerMatch
!insert (M34, MP198) into MatchMatchPlayer

!new MatchPlayerPosition('MPP198')
!MPP198.positionName := #FORWARD
!MPP198.number := 9
!insert (MP198, MPP198) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP199')
!MP199.booked := false
!MP199.goals := 0
!MP199.rating := 7
!insert (P211, MP199) into PlayerMatch
!insert (M34, MP199) into MatchMatchPlayer

!new MatchPlayerPosition('MPP199')
!MPP199.positionName := #GOALKEEPER
!MPP199.number := 1
!insert (MP199, MPP199) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP200')
!MP200.booked := false
!MP200.goals := 0
!MP200.rating := 6
!insert (P210, MP200) into PlayerMatch
!insert (M34, MP200) into MatchMatchPlayer

!new MatchPlayerPosition('MPP200')
!MPP200.positionName := #DEFENDER
!MPP200.number := 5
!insert (MP200, MPP200) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP201')
!MP201.booked := false
!MP201.goals := 0
!MP201.rating := 6
!insert (P209, MP201) into PlayerMatch
!insert (M34, MP201) into MatchMatchPlayer

!new MatchPlayerPosition('MPP201')
!MPP201.positionName := #FORWARD
!MPP201.number := 9
!insert (MP201, MPP201) into MatchPlayerMatchPlayerPosition

!new Match('M35')
!M35.date := '2026-04-18'
!M35.homeAway := false
!insert (COMP22, M35) into CompetitionMatch
!insert (T64, M35) into LocalMatch
!insert (T59, M35) into VisitorMatch

!new MatchReport('MR34')
!MR34.duration := 92
!MR34.scoreLocal := 3
!MR34.scoreVisitor := 1
!insert (M35, MR34) into MatchMatchReport

!new MatchEvent('ME194')
!ME194.eventType := #GOAL
!ME194.time := 6
!insert (M35, ME194) into MatchMatchEvent

!new MatchEvent('ME195')
!ME195.eventType := #GOAL
!ME195.time := 28
!insert (M35, ME195) into MatchMatchEvent

!new MatchEvent('ME196')
!ME196.eventType := #FOUL
!ME196.time := 53
!insert (M35, ME196) into MatchMatchEvent

!new MatchEvent('ME197')
!ME197.eventType := #GOAL
!ME197.time := 61
!insert (M35, ME197) into MatchMatchEvent

!new MatchEvent('ME198')
!ME198.eventType := #CORNER
!ME198.time := 73
!insert (M35, ME198) into MatchMatchEvent

!new MatchEvent('ME199')
!ME199.eventType := #GOAL
!ME199.time := 90
!insert (M35, ME199) into MatchMatchEvent

!new MatchNote('MN47')
!MN47.note := 'Local teams midfield pressed in waves; forced turnovers in zone 14.'
!MN47.date := '2026-04-18'
!insert (M35, MN47) into MatchMatchNote

!new MatchPlayer('MP202')
!MP202.booked := true
!MP202.goals := 0
!MP202.rating := 6
!insert (P212, MP202) into PlayerMatch
!insert (M35, MP202) into MatchMatchPlayer

!new MatchPlayerPosition('MPP202')
!MPP202.positionName := #DEFENDER
!MPP202.number := 4
!insert (MP202, MPP202) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP203')
!MP203.booked := false
!MP203.goals := 1
!MP203.rating := 8
!insert (P213, MP203) into PlayerMatch
!insert (M35, MP203) into MatchMatchPlayer

!new MatchPlayerPosition('MPP203')
!MPP203.positionName := #MIDFIELDER
!MPP203.number := 8
!insert (MP203, MPP203) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP204')
!MP204.booked := false
!MP204.goals := 2
!MP204.rating := 8
!insert (P214, MP204) into PlayerMatch
!insert (M35, MP204) into MatchMatchPlayer

!new MatchPlayerPosition('MPP204')
!MPP204.positionName := #FORWARD
!MPP204.number := 11
!insert (MP204, MPP204) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP205')
!MP205.booked := false
!MP205.goals := 0
!MP205.rating := 6
!insert (P199, MP205) into PlayerMatch
!insert (M35, MP205) into MatchMatchPlayer

!new MatchPlayerPosition('MPP205')
!MPP205.positionName := #GOALKEEPER
!MPP205.number := 1
!insert (MP205, MPP205) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP206')
!MP206.booked := false
!MP206.goals := 1
!MP206.rating := 7
!insert (P198, MP206) into PlayerMatch
!insert (M35, MP206) into MatchMatchPlayer

!new MatchPlayerPosition('MPP206')
!MPP206.positionName := #MIDFIELDER
!MPP206.number := 8
!insert (MP206, MPP206) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP207')
!MP207.booked := true
!MP207.goals := 0
!MP207.rating := 6
!insert (P197, MP207) into PlayerMatch
!insert (M35, MP207) into MatchMatchPlayer

!new MatchPlayerPosition('MPP207')
!MPP207.positionName := #FORWARD
!MPP207.number := 9
!insert (MP207, MPP207) into MatchPlayerMatchPlayerPosition
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 816 | 0.00% |
| Multiplicities Errors | 0 | 208 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 67 | 0.00% |

## Category edge
```
!new Club('C24')
!C24.name := 'Te Awa Rovers'
!C24.homeGround := 'Riverside Marae Ground'
!C24.chairman := 'Wiremu Ngata'

!new Team('T30')
!T30.name := 'Te Awa Masters'
!insert (C24, T30) into ClubTeam

!new Team('T31')
!T31.name := 'Te Awa Development'
!insert (C24, T31) into ClubTeam

!new Club('C25')
!C25.name := 'Atlas Souss Club'
!C25.homeGround := 'Stade Al-Bahr'
!C25.chairman := 'Fatima El Idrissi'

!new Team('T32')
!T32.name := 'Atlas Souss Seniors'
!insert (C25, T32) into ClubTeam

!new Player('P89')
!P89.name := 'Hemi Te Rangi'
!P89.age := 61
!P89.bestFoot := #LEFT
!P89.phoneNumber := '+64 21 555 061'
!insert (T30, P89) into TeamPlayer

!new Position('POS137')
!POS137.positionName := #GOALKEEPER
!insert (P89, POS137) into PlayerPositions

!new TrainingObjective('TO98')
!TO98.areaToImprove := 'Safe landing technique on hard ground'
!TO98.startDate := '2026-02-01'
!TO98.endDate := '2026-02-28'
!TO98.success := true
!insert (TO98, P89) into TrainingObjectivePlayer

!new TrainingObjective('TO99')
!TO99.areaToImprove := 'Communication cues (short commands)'
!TO99.startDate := '2026-02-10'
!TO99.endDate := '2026-03-10'
!TO99.success := false
!insert (TO99, P89) into TrainingObjectivePlayer

!new Player('P90')
!P90.name := 'Aroha Kauri'
!P90.age := 16
!P90.bestFoot := #BOTH
!P90.phoneNumber := '+64 27 402 1616'
!insert (T31, P90) into TeamPlayer

!new Position('POS138')
!POS138.positionName := #DEFENDER
!insert (P90, POS138) into PlayerPositions

!new Position('POS139')
!POS139.positionName := #MIDFIELDER
!insert (P90, POS139) into PlayerPositions

!new Position('POS140')
!POS140.positionName := #FORWARD
!insert (P90, POS140) into PlayerPositions

!new TrainingObjective('TO100')
!TO100.areaToImprove := 'First-touch under pressure'
!TO100.startDate := '2026-02-01'
!TO100.endDate := '2026-03-01'
!TO100.success := false
!insert (TO100, P90) into TrainingObjectivePlayer

!new PlayerNotes('PN37')
!PN37.note := 'Dual-sport (netball) schedule impacts availability.'
!PN37.date := '2026-02-03'
!insert (P90, PN37) into PlayerPlayerNotes

!new Player('P91')
!P91.name := 'Noah Williams'
!P91.age := 17
!P91.bestFoot := #RIGHT
!P91.phoneNumber := '+64 22 808 7171'
!insert (T31, P91) into TeamPlayer

!new Position('POS141')
!POS141.positionName := #MIDFIELDER
!insert (P91, POS141) into PlayerPositions

!new TrainingObjective('TO101')
!TO101.areaToImprove := 'Scanning before receiving'
!TO101.startDate := '2026-02-05'
!TO101.endDate := '2026-03-05'
!TO101.success := true
!insert (TO101, P91) into TrainingObjectivePlayer

!new Player('P92')
!P92.name := 'Tama Raukura'
!P92.age := 15
!P92.bestFoot := #LEFT
!P92.phoneNumber := '+64 20 700 1515'
!insert (T31, P92) into TeamPlayer

!new Position('POS142')
!POS142.positionName := #FORWARD
!insert (P92, POS142) into PlayerPositions

!new Position('POS143')
!POS143.positionName := #MIDFIELDER
!insert (P92, POS143) into PlayerPositions

!new TrainingObjective('TO102')
!TO102.areaToImprove := 'Shot selection (low vs high)'
!TO102.startDate := '2026-02-07'
!TO102.endDate := '2026-03-20'
!TO102.success := false
!insert (TO102, P92) into TrainingObjectivePlayer

!new Player('P93')
!P93.name := 'Youssef Amrani'
!P93.age := 29
!P93.bestFoot := #RIGHT
!P93.phoneNumber := '+212 6 12 34 56 78'
!insert (T32, P93) into TeamPlayer

!new Position('POS144')
!POS144.positionName := #FORWARD
!insert (P93, POS144) into PlayerPositions

!new TrainingObjective('TO103')
!TO103.areaToImprove := 'Finishing with first-time strikes'
!TO103.startDate := '2026-02-01'
!TO103.endDate := '2026-02-25'
!TO103.success := false
!insert (TO103, P93) into TrainingObjectivePlayer

!new PlayerNotes('PN38')
!PN38.note := 'Prefers playing in extreme heat; dislikes cold travel.'
!PN38.date := '2026-02-02'
!insert (P93, PN38) into PlayerPlayerNotes

!new Player('P94')
!P94.name := 'Rachid Bensaid'
!P94.age := 21
!P94.bestFoot := #LEFT
!P94.phoneNumber := '+212 6 98 00 11 22'
!insert (T32, P94) into TeamPlayer

!new Position('POS145')
!POS145.positionName := #MIDFIELDER
!insert (P94, POS145) into PlayerPositions

!new TrainingObjective('TO104')
!TO104.areaToImprove := 'Stamina'
!TO104.startDate := '2026-02-01'
!TO104.endDate := '2026-03-01'
!TO104.success := false
!insert (TO104, P94) into TrainingObjectivePlayer

!new Player('P95')
!P95.name := 'Omar El Khattabi'
!P95.age := 24
!P95.bestFoot := #BOTH
!P95.phoneNumber := '+212 6 77 10 20 30'
!insert (T32, P95) into TeamPlayer

!new Position('POS146')
!POS146.positionName := #DEFENDER
!insert (P95, POS146) into PlayerPositions

!new Position('POS147')
!POS147.positionName := #MIDFIELDER
!insert (P95, POS147) into PlayerPositions

!new TrainingObjective('TO105')
!TO105.areaToImprove := 'Tackling timing'
!TO105.startDate := '2026-02-03'
!TO105.endDate := '2026-03-03'
!TO105.success := true
!insert (TO105, P95) into TrainingObjectivePlayer

!new Player('P96')
!P96.name := 'Hamza Radi'
!P96.age := 33
!P96.bestFoot := #RIGHT
!P96.phoneNumber := '+212 6 55 66 77 88'
!insert (T32, P96) into TeamPlayer

!new Position('POS148')
!POS148.positionName := #GOALKEEPER
!insert (P96, POS148) into PlayerPositions

!new TrainingObjective('TO106')
!TO106.areaToImprove := 'Handling crosses'
!TO106.startDate := '2026-02-01'
!TO106.endDate := '2026-02-28'
!TO106.success := false
!insert (TO106, P96) into TrainingObjectivePlayer

!new Player('P97')
!P97.name := 'Sami Ait Lahcen'
!P97.age := 19
!P97.bestFoot := #LEFT
!P97.phoneNumber := '+212 6 44 33 22 11'
!insert (T32, P97) into TeamPlayer

!new Position('POS149')
!POS149.positionName := #DEFENDER
!insert (P97, POS149) into PlayerPositions

!new TrainingObjective('TO107')
!TO107.areaToImprove := 'Positioning'
!TO107.startDate := '2026-02-05'
!TO107.endDate := '2026-03-05'
!TO107.success := false
!insert (TO107, P97) into TrainingObjectivePlayer

!new Player('P98')
!P98.name := 'Khalid Zaroual'
!P98.age := 27
!P98.bestFoot := #RIGHT
!P98.phoneNumber := '+212 6 01 02 03 04'
!insert (T32, P98) into TeamPlayer

!new Position('POS150')
!POS150.positionName := #MIDFIELDER
!insert (P98, POS150) into PlayerPositions

!new Position('POS151')
!POS151.positionName := #FORWARD
!insert (P98, POS151) into PlayerPositions

!new TrainingObjective('TO108')
!TO108.areaToImprove := 'Decision making in transition'
!TO108.startDate := '2026-02-02'
!TO108.endDate := '2026-03-10'
!TO108.success := false
!insert (TO108, P98) into TrainingObjectivePlayer

!new Player('P99')
!P99.name := 'Nabil Oufkir'
!P99.age := 22
!P99.bestFoot := #BOTH
!P99.phoneNumber := '+212 6 10 11 12 13'
!insert (T32, P99) into TeamPlayer

!new Position('POS152')
!POS152.positionName := #DEFENDER
!insert (P99, POS152) into PlayerPositions

!new TrainingObjective('TO109')
!TO109.areaToImprove := 'Aerial duels'
!TO109.startDate := '2026-02-04'
!TO109.endDate := '2026-03-04'
!TO109.success := true
!insert (TO109, P99) into TrainingObjectivePlayer

!new Player('P100')
!P100.name := 'Adil Chafai'
!P100.age := 30
!P100.bestFoot := #RIGHT
!P100.phoneNumber := '+212 6 20 30 40 50'
!insert (T32, P100) into TeamPlayer

!new Position('POS153')
!POS153.positionName := #MIDFIELDER
!insert (P100, POS153) into PlayerPositions

!new TrainingObjective('TO110')
!TO110.areaToImprove := 'Set-piece delivery'
!TO110.startDate := '2026-02-01'
!TO110.endDate := '2026-02-21'
!TO110.success := true
!insert (TO110, P100) into TrainingObjectivePlayer

!new TrainingSession('TS39')
!TS39.date := '2026-02-12'
!TS39.location := 'Riverside Marae Ground (carpark marked as pitch)'
!TS39.purpose := 'Solo goalkeeping + mobility (no squad available)'
!insert (T30, TS39) into TeamTraining

!new TrainingNotes('TN60')
!TN60.note := 'Cones used as goalposts; dimensions improvised.'
!TN60.date := '2026-02-12'
!insert (TS39, TN60) into TrainingTrainingNotes

!new TrainingNotes('TN61')
!TN61.note := 'Wind affected high balls; focused on low handling.'
!TN61.date := '2026-02-12'
!insert (TS39, TN61) into TrainingTrainingNotes

!new TrainingNotes('TN62')
!TN62.note := 'Warm-up extended due to stiffness.'
!TN62.date := '2026-02-12'
!insert (TS39, TN62) into TrainingTrainingNotes

!new TrainingNotes('TN63')
!TN63.note := 'Short passing against wall logged as distribution.'
!TN63.date := '2026-02-12'
!insert (TS39, TN63) into TrainingTrainingNotes

!new TrainingNotes('TN64')
!TN64.note := 'Ice pack applied after session.'
!TN64.date := '2026-02-12'
!insert (TS39, TN64) into TrainingTrainingNotes

!new TrainingNotes('TN65')
!TN65.note := 'No outfield players present; drills adjusted.'
!TN65.date := '2026-02-12'
!insert (TS39, TN65) into TrainingTrainingNotes

!new TrainingNotes('TN66')
!TN66.note := 'Footwork ladder replaced with chalk squares.'
!TN66.date := '2026-02-12'
!insert (TS39, TN66) into TrainingTrainingNotes

!new TrainingNotes('TN67')
!TN67.note := 'Communication practice done with recorded crowd noise.'
!TN67.date := '2026-02-12'
!insert (TS39, TN67) into TrainingTrainingNotes

!new TrainingNotes('TN68')
!TN68.note := 'Session ended early due to rain squall.'
!TN68.date := '2026-02-12'
!insert (TS39, TN68) into TrainingTrainingNotes

!new TrainingNotes('TN69')
!TN69.note := 'Next session planned if volunteer striker found.'
!TN69.date := '2026-02-12'
!insert (TS39, TN69) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA21')
!FA21.reason := 'Arrived late; recorded as missed by admin system.'
!insert (TS39, FA21) into TrainingFailded
!insert (FA21, P89) into FailedPlayer

!new TrainingFailedToAttend('FA22')
!FA22.reason := 'Left early for medical check; counted as non-attendance.'
!insert (TS39, FA22) into TrainingFailded
!insert (FA22, P89) into FailedPlayer

!new TrainingSession('TS40')
!TS40.date := '2026-02-11'
!TS40.location := 'Riverside Marae Ground'
!TS40.purpose := 'Small-sided games + first touch'
!insert (T31, TS40) into TeamTraining

!new TrainingNotes('TN70')
!TN70.note := 'Players rotated positions to satisfy multi-role development.'
!TN70.date := '2026-02-11'
!insert (TS40, TN70) into TrainingTrainingNotes

!new TrainingSession('TS41')
!TS41.date := '2026-02-12'
!TS41.location := 'Stade Al-Bahr (auxiliary pitch)'
!TS41.purpose := 'Travel prep and set pieces'
!insert (T32, TS41) into TeamTraining

!new TrainingNotes('TN71')
!TN71.note := 'Session reduced; attendance unexpectedly low.'
!TN71.date := '2026-02-12'
!insert (TS41, TN71) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA23')
!FA23.reason := 'Family obligation'
!insert (TS41, FA23) into TrainingFailded
!insert (FA23, P94) into FailedPlayer

!new TrainingFailedToAttend('FA24')
!FA24.reason := 'Traffic delay'
!insert (TS41, FA24) into TrainingFailded
!insert (FA24, P95) into FailedPlayer

!new TrainingFailedToAttend('FA25')
!FA25.reason := 'Equipment issue (gloves lost)'
!insert (TS41, FA25) into TrainingFailded
!insert (FA25, P96) into FailedPlayer

!new TrainingFailedToAttend('FA26')
!FA26.reason := 'University exam'
!insert (TS41, FA26) into TrainingFailded
!insert (FA26, P97) into FailedPlayer

!new TrainingFailedToAttend('FA27')
!FA27.reason := 'Work shift'
!insert (TS41, FA27) into TrainingFailded
!insert (FA27, P98) into FailedPlayer

!new TrainingFailedToAttend('FA28')
!FA28.reason := 'Illness'
!insert (TS41, FA28) into TrainingFailded
!insert (FA28, P99) into FailedPlayer

!new TrainingFailedToAttend('FA29')
!FA29.reason := 'Miscommunication of kickoff time'
!insert (TS41, FA29) into TrainingFailded
!insert (FA29, P100) into FailedPlayer

!new Competition('COMP11')
!COMP11.name := 'Experimental Rules Showcase'
!COMP11.type := 'Exhibition'

!new Match('M17')
!M17.date := '2026-02-13'
!M17.homeAway := true
!insert (COMP11, M17) into CompetitionMatch
!insert (T30, M17) into LocalMatch
!insert (T32, M17) into VisitorMatch

!new MatchReport('MR17')
!MR17.duration := 1
!MR17.scoreLocal := 0
!MR17.scoreVisitor := 1
!insert (M17, MR17) into MatchMatchReport

!new MatchEvent('ME94')
!ME94.eventType := #OFFSIDE
!ME94.time := -1
!insert (M17, ME94) into MatchMatchEvent

!new MatchEvent('ME95')
!ME95.eventType := #FOUL
!ME95.time := 0
!insert (M17, ME95) into MatchMatchEvent

!new MatchEvent('ME96')
!ME96.eventType := #CORNER
!ME96.time := 1
!insert (M17, ME96) into MatchMatchEvent

!new MatchEvent('ME97')
!ME97.eventType := #PENALTY
!ME97.time := 2
!insert (M17, ME97) into MatchMatchEvent

!new MatchEvent('ME98')
!ME98.eventType := #GOAL
!ME98.time := 121
!insert (M17, ME98) into MatchMatchEvent

!new MatchNote('MN20')
!MN20.note := 'Match used experimental clock; official duration recorded as 1 minute.'
!MN20.date := '2026-02-13'
!insert (M17, MN20) into MatchMatchNote

!new MatchNote('MN21')
!MN21.note := 'Kua mutu wawe te kemu (ended very early) due to scheduling.'
!MN21.date := '2026-02-13'
!insert (M17, MN21) into MatchMatchNote

!new MatchNote('MN22')
!MN22.note := 'Le but a ete valide apres verification administrative.'
!MN22.date := '2026-02-13'
!insert (M17, MN22) into MatchMatchNote

!new MatchPlayer('MP95')
!MP95.booked := true
!MP95.goals := 0
!MP95.rating := 2147483647
!insert (P89, MP95) into PlayerMatch
!insert (M17, MP95) into MatchMatchPlayer

!new MatchPlayerPosition('MPP95')
!MPP95.positionName := #GOALKEEPER
!MPP95.number := 255
!insert (MP95, MPP95) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP96')
!MP96.booked := false
!MP96.goals := 1
!MP96.rating := 0
!insert (P93, MP96) into PlayerMatch
!insert (M17, MP96) into MatchMatchPlayer

!new MatchPlayerPosition('MPP96')
!MPP96.positionName := #FORWARD
!MPP96.number := 0
!insert (MP96, MPP96) into MatchPlayerMatchPlayerPosition
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 391 | 0.00% |
| Multiplicities Errors | 0 | 98 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 47 | 0.00% |

## Category invalid
```
!new Club('C22')
!C22.name := 'Auckland City FC'
!C22.homeGround := 'Kiwitea Street (Auckland)'
!C22.chairman := 'Kieran ONeill'

!new Team('T27')
!T27.name := 'Auckland City - First Team'
!insert (C22, T27) into ClubTeam

!new Team('T28')
!T28.name := 'Auckland City - Reserves'
!insert (C22, T28) into ClubTeam

!new Club('C23')
!C23.name := 'Waitakere United'
!C23.homeGround := 'Trusts Arena (Auckland)'
!C23.chairman := 'Moana Tauroa'

!new Team('T29')
!T29.name := 'Waitakere United - First Team'
!insert (C23, T29) into ClubTeam

!new Player('P83')
!P83.name := 'Luka Petrovic'
!P83.age := 31
!P83.bestFoot := #RIGHT
!P83.phoneNumber := '+64 21 445 901'
!insert (T27, P83) into TeamPlayer

!new Position('POS129')
!POS129.positionName := #GOALKEEPER
!insert (P83, POS129) into PlayerPositions

!new TrainingObjective('TO91')
!TO91.areaToImprove := 'Quicker restart decisions (throw vs short pass)'
!TO91.startDate := '2026-02-01'
!TO91.endDate := '2026-03-01'
!TO91.success := true
!insert (TO91, P83) into TrainingObjectivePlayer

!new PlayerNotes('PN33')
!PN33.note := 'Excellent leadership; organizes back line well on corners.'
!PN33.date := '2026-02-18'
!insert (P83, PN33) into PlayerPlayerNotes

!new Player('P84')
!P84.name := 'Tama Rangi'
!P84.age := 17
!P84.bestFoot := #BOTH
!P84.phoneNumber := '+64 22 780 1134'
!insert (T27, P84) into TeamPlayer

!new Position('POS130')
!POS130.positionName := #MIDFIELDER
!insert (P84, POS130) into PlayerPositions

!new Position('POS131')
!POS131.positionName := #FORWARD
!insert (P84, POS131) into PlayerPositions

!new TrainingObjective('TO92')
!TO92.areaToImprove := 'Strength for hold-up play vs senior defenders'
!TO92.startDate := '2026-02-03'
!TO92.endDate := '2026-04-15'
!TO92.success := false
!insert (TO92, P84) into TrainingObjectivePlayer

!new PlayerNotes('PN34')
!PN34.note := 'Technically ready; needs to manage energy across 90 minutes.'
!PN34.date := '2026-02-20'
!insert (P84, PN34) into PlayerPlayerNotes

!new Player('P85')
!P85.name := 'Haruto Sato'
!P85.age := 26
!P85.bestFoot := #LEFT
!P85.phoneNumber := '+64 21 990 276'
!insert (T27, P85) into TeamPlayer

!new Position('POS132')
!POS132.positionName := #DEFENDER
!insert (P85, POS132) into PlayerPositions

!new TrainingObjective('TO93')
!TO93.areaToImprove := 'Defending back-post crosses'
!TO93.startDate := '2026-02-05'
!TO93.endDate := '2026-03-20'
!TO93.success := true
!insert (TO93, P85) into TrainingObjectivePlayer

!new TrainingSession('TS36')
!TS36.date := '2026-02-19'
!TS36.location := 'Kiwitea Street Training Pitch'
!TS36.purpose := 'Match prep: compact mid-block + fast counters'
!insert (T27, TS36) into TeamTraining

!new TrainingNotes('TN56')
!TN56.note := 'Mid-block spacing improved; wingers tracked runners more consistently.'
!TN56.date := '2026-02-19'
!insert (TS36, TN56) into TrainingTrainingNotes

!new TrainingNotes('TN57')
!TN57.note := 'Counter patterns worked best when #10 receives on the half-turn.'
!TN57.date := '2026-02-19'
!insert (TS36, TN57) into TrainingTrainingNotes

!new Player('P86')
!P86.name := 'Noah Te Kiri'
!P86.age := 19
!P86.bestFoot := #RIGHT
!P86.phoneNumber := '+64 27 310 6672'
!insert (T28, P86) into TeamPlayer

!new Position('POS133')
!POS133.positionName := #MIDFIELDER
!insert (P86, POS133) into PlayerPositions

!new TrainingObjective('TO94')
!TO94.areaToImprove := 'Awareness before receiving (shoulder checks)'
!TO94.startDate := '2026-02-02'
!TO94.endDate := '2026-03-30'
!TO94.success := false
!insert (TO94, P86) into TrainingObjectivePlayer

!insert (T28, P84) into TeamPlayer

!new TrainingObjective('TO95')
!TO95.areaToImprove := 'Decision speed in final third (one-touch options)'
!TO95.startDate := '2026-02-06'
!TO95.endDate := '2026-04-01'
!TO95.success := false
!insert (TO95, P84) into TrainingObjectivePlayer

!new PlayerNotes('PN35')
!PN35.note := 'Plays Reserves on Saturday, First Team bench midweek-workload carefully monitored.'
!PN35.date := '2026-02-21'
!insert (P84, PN35) into PlayerPlayerNotes

!new TrainingSession('TS37')
!TS37.date := '2026-02-21'
!TS37.location := 'Western Springs Training Ground'
!TS37.purpose := 'U23-style development: high pressing + combination play'
!insert (T28, TS37) into TeamTraining

!new TrainingNotes('TN58')
!TN58.note := 'Press was intense but lines disconnected at times; corrected with shorter distances.'
!TN58.date := '2026-02-21'
!insert (TS37, TN58) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA20')
!FA20.reason := 'Part-time work shift clash (approved).'
!insert (TS37, FA20) into TrainingFailded
!insert (FA20, P86) into FailedPlayer

!new Player('P87')
!P87.name := 'Sione Fetu'
!P87.age := 27
!P87.bestFoot := #RIGHT
!P87.phoneNumber := '+64 21 774 188'
!insert (T29, P87) into TeamPlayer

!new Position('POS134')
!POS134.positionName := #FORWARD
!insert (P87, POS134) into PlayerPositions

!new TrainingObjective('TO96')
!TO96.areaToImprove := 'Finishing on early crosses'
!TO96.startDate := '2026-02-01'
!TO96.endDate := '2026-03-15'
!TO96.success := true
!insert (TO96, P87) into TrainingObjectivePlayer

!new Player('P88')
!P88.name := 'Gabriel Mendes'
!P88.age := 23
!P88.bestFoot := #LEFT
!P88.phoneNumber := '+64 22 600 9010'
!insert (T29, P88) into TeamPlayer

!new Position('POS135')
!POS135.positionName := #MIDFIELDER
!insert (P88, POS135) into PlayerPositions

!new Position('POS136')
!POS136.positionName := #DEFENDER
!insert (P88, POS136) into PlayerPositions

!new TrainingObjective('TO97')
!TO97.areaToImprove := 'Discipline in tactical fouls (avoid bookings)'
!TO97.startDate := '2026-02-04'
!TO97.endDate := '2026-03-25'
!TO97.success := false
!insert (TO97, P88) into TrainingObjectivePlayer

!new PlayerNotes('PN36')
!PN36.note := 'Very aggressive stepping out; needs better timing.'
!PN36.date := '2026-02-16'
!insert (P88, PN36) into PlayerPlayerNotes

!new TrainingSession('TS38')
!TS38.date := '2026-02-18'
!TS38.location := 'Trusts Arena Training Field'
!TS38.purpose := 'Defending transitions + set-piece marking'
!insert (T29, TS38) into TeamTraining

!new TrainingNotes('TN59')
!TN59.note := 'Set-piece marking assignments clarified; fewer free headers conceded.'
!TN59.date := '2026-02-18'
!insert (TS38, TN59) into TrainingTrainingNotes

!new Competition('COMP10')
!COMP10.name := 'NRFL Charity Shield 2026'
!COMP10.type := 'One-off pre-season trophy match'

!new Match('M16')
!M16.date := '2026-02-23'
!M16.homeAway := true
!insert (COMP10, M16) into CompetitionMatch
!insert (T27, M16) into LocalMatch
!insert (T29, M16) into VisitorMatch

!new MatchReport('MR16')
!MR16.duration := 90
!MR16.scoreLocal := 2
!MR16.scoreVisitor := 2
!insert (M16, MR16) into MatchMatchReport

!new MatchEvent('ME88')
!ME88.eventType := #GOAL
!ME88.time := 14
!insert (M16, ME88) into MatchMatchEvent

!new MatchEvent('ME89')
!ME89.eventType := #GOAL
!ME89.time := 33
!insert (M16, ME89) into MatchMatchEvent

!new MatchEvent('ME90')
!ME90.eventType := #FOUL
!ME90.time := 44
!insert (M16, ME90) into MatchMatchEvent

!new MatchEvent('ME91')
!ME91.eventType := #GOAL
!ME91.time := 61
!insert (M16, ME91) into MatchMatchEvent

!new MatchEvent('ME92')
!ME92.eventType := #CORNER
!ME92.time := 74
!insert (M16, ME92) into MatchMatchEvent

!new MatchEvent('ME93')
!ME93.eventType := #GOAL
!ME93.time := 86
!insert (M16, ME93) into MatchMatchEvent

!new MatchNote('MN19')
!MN19.note := 'High-tempo derby atmosphere; both sides used the match for fitness and squad testing.'
!MN19.date := '2026-02-23'
!insert (M16, MN19) into MatchMatchNote

!new MatchPlayer('MP90')
!MP90.booked := false
!MP90.goals := 0
!MP90.rating := 7
!insert (P83, MP90) into PlayerMatch
!insert (M16, MP90) into MatchMatchPlayer

!new MatchPlayerPosition('MPP90')
!MPP90.positionName := #GOALKEEPER
!MPP90.number := 1
!insert (MP90, MPP90) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP91')
!MP91.booked := false
!MP91.goals := 0
!MP91.rating := 6
!insert (P85, MP91) into PlayerMatch
!insert (M16, MP91) into MatchMatchPlayer

!new MatchPlayerPosition('MPP91')
!MPP91.positionName := #DEFENDER
!MPP91.number := 5
!insert (MP91, MPP91) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP92')
!MP92.booked := false
!MP92.goals := 1
!MP92.rating := 7
!insert (P84, MP92) into PlayerMatch
!insert (M16, MP92) into MatchMatchPlayer

!new MatchPlayerPosition('MPP92')
!MPP92.positionName := #FORWARD
!MPP92.number := 19
!insert (MP92, MPP92) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP93')
!MP93.booked := false
!MP93.goals := 1
!MP93.rating := 7
!insert (P87, MP93) into PlayerMatch
!insert (M16, MP93) into MatchMatchPlayer

!new MatchPlayerPosition('MPP93')
!MPP93.positionName := #FORWARD
!MPP93.number := 9
!insert (MP93, MPP93) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP94')
!MP94.booked := true
!MP94.goals := 0
!MP94.rating := 6
!insert (P88, MP94) into PlayerMatch
!insert (M16, MP94) into MatchMatchPlayer

!new MatchPlayerPosition('MPP94')
!MPP94.positionName := #MIDFIELDER
!MPP94.number := 6
!insert (MP94, MPP94) into MatchPlayerMatchPlayerPosition
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 64 | 1.56% |
| Invariants Errors (Not included on General) | 0 | 4 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `TeamPlayer':
  Object `P84' of class `Player' is connected to 2 objects of class `Team'
  at association end `team' but the multiplicity is specified as `1'.
```

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 27 | 0.00% |

## Generation 3 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 2522 | 0.00% |
| Multiplicities Errors | 0 | 570 | 0.00% |
| Invariants Errors | 0 | 16 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 64 | 1.56% |
| Invariants Errors (Not included on General) | 0 | 4 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `TeamPlayer':
  Object `P84' of class `Player' is connected to 2 objects of class `Team'
  at association end `team' but the multiplicity is specified as `1'.
```

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 6 | 233 | 2.58% |

| Failed dates | 
|---| 
```
2026-04-10 18:00
```
```
2026-04-11 19:30
```
```
2026-04-09 17:00
```
```
2026-04-12 06:30
```
```
2026-04-18 16:00
```
```
2026-04-20 19:15
```

# Generation 4
## Category baseline
```
!new Club('C45')
!C45.name := 'Cape Town Stars FC'
!C45.homeGround := 'Athlone Stadium'
!C45.chairman := 'Lindiwe Maseko'

!new Team('T54')
!T54.name := 'Cape Town Stars First Team'
!insert (C45, T54) into ClubTeam

!new Team('T55')
!T55.name := 'Cape Town Stars U19'
!insert (C45, T55) into ClubTeam

!new Club('C46')
!C46.name := 'Istanbul Crescent Spor Kulubu'
!C46.homeGround := 'Safak Arena'
!C46.chairman := 'Mehmet Yilmaz'

!new Team('T56')
!T56.name := 'Crescent U19'
!insert (C46, T56) into ClubTeam

!new Player('P171')
!P171.name := 'Thabo Dlamini'
!P171.age := 18
!P171.bestFoot := #RIGHT
!P171.phoneNumber := '+27 72 555 0147'
!insert (T55, P171) into TeamPlayer

!new Position('POS260')
!POS260.positionName := #GOALKEEPER
!insert (P171, POS260) into PlayerPositions

!new TrainingObjective('TO188')
!TO188.areaToImprove := 'Reaction saves from close range'
!TO188.startDate := '2026-05-01'
!TO188.endDate := '2026-05-31'
!TO188.success := true
!insert (TO188, P171) into TrainingObjectivePlayer

!new Player('P172')
!P172.name := 'Ayanda Khumalo'
!P172.age := 19
!P172.bestFoot := #LEFT
!P172.phoneNumber := '+27 82 119 3300'
!insert (T55, P172) into TeamPlayer

!new Position('POS261')
!POS261.positionName := #MIDFIELDER
!insert (P172, POS261) into PlayerPositions

!new Position('POS262')
!POS262.positionName := #FORWARD
!insert (P172, POS262) into PlayerPositions

!new TrainingObjective('TO189')
!TO189.areaToImprove := 'Final pass in transition'
!TO189.startDate := '2026-05-03'
!TO189.endDate := '2026-06-03'
!TO189.success := false
!insert (TO189, P172) into TrainingObjectivePlayer

!new PlayerNotes('PN66')
!PN66.note := 'When receiving between lines, open body to play forward earlier.'
!PN66.date := '2026-05-12'
!insert (P172, PN66) into PlayerPlayerNotes

!new Player('P173')
!P173.name := 'Sipho Mthembu'
!P173.age := 18
!P173.bestFoot := #BOTH
!P173.phoneNumber := '+27 79 880 7712'
!insert (T55, P173) into TeamPlayer

!new Position('POS263')
!POS263.positionName := #DEFENDER
!insert (P173, POS263) into PlayerPositions

!new TrainingObjective('TO190')
!TO190.areaToImprove := 'Defending the back post on crosses'
!TO190.startDate := '2026-05-02'
!TO190.endDate := '2026-05-30'
!TO190.success := true
!insert (TO190, P173) into TrainingObjectivePlayer

!new Player('P174')
!P174.name := 'Keagan Jacobs'
!P174.age := 18
!P174.bestFoot := #RIGHT
!P174.phoneNumber := '+27 83 404 9021'
!insert (T55, P174) into TeamPlayer

!new Position('POS264')
!POS264.positionName := #DEFENDER
!insert (P174, POS264) into PlayerPositions

!new Position('POS265')
!POS265.positionName := #MIDFIELDER
!insert (P174, POS265) into PlayerPositions

!new Position('POS266')
!POS266.positionName := #FORWARD
!insert (P174, POS266) into PlayerPositions

!new TrainingObjective('TO191')
!TO191.areaToImprove := 'Pressing angle to force play wide'
!TO191.startDate := '2026-05-05'
!TO191.endDate := '2026-06-05'
!TO191.success := false
!insert (TO191, P174) into TrainingObjectivePlayer

!new Player('P175')
!P175.name := 'Mosa Nkosi'
!P175.age := 17
!P175.bestFoot := #RIGHT
!P175.phoneNumber := '+27 81 700 6602'
!insert (T55, P175) into TeamPlayer

!new Position('POS267')
!POS267.positionName := #MIDFIELDER
!insert (P175, POS267) into PlayerPositions

!new TrainingObjective('TO192')
!TO192.areaToImprove := 'Shielding the ball under contact'
!TO192.startDate := '2026-05-04'
!TO192.endDate := '2026-06-04'
!TO192.success := true
!insert (TO192, P175) into TrainingObjectivePlayer

!new Player('P176')
!P176.name := 'Jade van Wyk'
!P176.age := 19
!P176.bestFoot := #LEFT
!P176.phoneNumber := '+27 84 222 1119'
!insert (T55, P176) into TeamPlayer

!new Position('POS268')
!POS268.positionName := #DEFENDER
!insert (P176, POS268) into PlayerPositions

!new Position('POS269')
!POS269.positionName := #MIDFIELDER
!insert (P176, POS269) into PlayerPositions

!new TrainingObjective('TO193')
!TO193.areaToImprove := 'Switching play with one touch'
!TO193.startDate := '2026-05-01'
!TO193.endDate := '2026-05-29'
!TO193.success := true
!insert (TO193, P176) into TrainingObjectivePlayer

!new Player('P177')
!P177.name := 'Liam Petersen'
!P177.age := 18
!P177.bestFoot := #RIGHT
!P177.phoneNumber := '+27 76 333 7788'
!insert (T55, P177) into TeamPlayer

!new Position('POS270')
!POS270.positionName := #FORWARD
!insert (P177, POS270) into PlayerPositions

!new TrainingObjective('TO194')
!TO194.areaToImprove := 'Near-post finishing runs'
!TO194.startDate := '2026-05-06'
!TO194.endDate := '2026-06-06'
!TO194.success := false
!insert (TO194, P177) into TrainingObjectivePlayer

!new Player('P178')
!P178.name := 'Emir Kaya'
!P178.age := 19
!P178.bestFoot := #RIGHT
!P178.phoneNumber := '+90 532 111 22 33'
!insert (T56, P178) into TeamPlayer

!new Position('POS271')
!POS271.positionName := #GOALKEEPER
!insert (P178, POS271) into PlayerPositions

!new TrainingObjective('TO195')
!TO195.areaToImprove := 'Playing out from the back under press'
!TO195.startDate := '2026-05-02'
!TO195.endDate := '2026-06-02'
!TO195.success := true
!insert (TO195, P178) into TrainingObjectivePlayer

!new Player('P179')
!P179.name := 'Deniz Aydin'
!P179.age := 18
!P179.bestFoot := #LEFT
!P179.phoneNumber := '+90 505 909 10 10'
!insert (T56, P179) into TeamPlayer

!new Position('POS272')
!POS272.positionName := #FORWARD
!insert (P179, POS272) into PlayerPositions

!new Position('POS273')
!POS273.positionName := #MIDFIELDER
!insert (P179, POS273) into PlayerPositions

!new TrainingObjective('TO196')
!TO196.areaToImprove := 'First-time shots from cut-backs'
!TO196.startDate := '2026-05-03'
!TO196.endDate := '2026-06-03'
!TO196.success := true
!insert (TO196, P179) into TrainingObjectivePlayer

!new Player('P180')
!P180.name := 'Zeynep Demir'
!P180.age := 18
!P180.bestFoot := #BOTH
!P180.phoneNumber := '+90 541 777 44 55'
!insert (T56, P180) into TeamPlayer

!new Position('POS274')
!POS274.positionName := #DEFENDER
!insert (P180, POS274) into PlayerPositions

!new TrainingObjective('TO197')
!TO197.areaToImprove := 'Avoiding fouls when isolated 1v1'
!TO197.startDate := '2026-05-01'
!TO197.endDate := '2026-05-31'
!TO197.success := false
!insert (TO197, P180) into TrainingObjectivePlayer

!new Player('P181')
!P181.name := 'Yusuf Celik'
!P181.age := 19
!P181.bestFoot := #RIGHT
!P181.phoneNumber := '+90 553 333 00 77'
!insert (T56, P181) into TeamPlayer

!new Position('POS275')
!POS275.positionName := #MIDFIELDER
!insert (P181, POS275) into PlayerPositions

!new TrainingObjective('TO198')
!TO198.areaToImprove := 'Late runs into the box'
!TO198.startDate := '2026-05-04'
!TO198.endDate := '2026-06-04'
!TO198.success := true
!insert (TO198, P181) into TrainingObjectivePlayer

!new PlayerNotes('PN67')
!PN67.note := 'Excellent engine; keep head up before carrying the ball.'
!PN67.date := '2026-05-15'
!insert (P181, PN67) into PlayerPlayerNotes

!new Player('P182')
!P182.name := 'Kerem Sahin'
!P182.age := 17
!P182.bestFoot := #LEFT
!P182.phoneNumber := '+90 546 120 45 67'
!insert (T56, P182) into TeamPlayer

!new Position('POS276')
!POS276.positionName := #DEFENDER
!insert (P182, POS276) into PlayerPositions

!new Position('POS277')
!POS277.positionName := #MIDFIELDER
!insert (P182, POS277) into PlayerPositions

!new TrainingObjective('TO199')
!TO199.areaToImprove := 'Receiving under pressure on weaker side'
!TO199.startDate := '2026-05-05'
!TO199.endDate := '2026-06-05'
!TO199.success := false
!insert (TO199, P182) into TrainingObjectivePlayer

!new Player('P183')
!P183.name := 'Elif Yildiz'
!P183.age := 18
!P183.bestFoot := #RIGHT
!P183.phoneNumber := '+90 538 808 19 19'
!insert (T56, P183) into TeamPlayer

!new Position('POS278')
!POS278.positionName := #FORWARD
!insert (P183, POS278) into PlayerPositions

!new TrainingObjective('TO200')
!TO200.areaToImprove := 'Timing runs behind the line'
!TO200.startDate := '2026-05-06'
!TO200.endDate := '2026-06-06'
!TO200.success := true
!insert (TO200, P183) into TrainingObjectivePlayer

!new Player('P184')
!P184.name := 'Mert Arslan'
!P184.age := 19
!P184.bestFoot := #RIGHT
!P184.phoneNumber := '+90 530 600 70 80'
!insert (T56, P184) into TeamPlayer

!new Position('POS279')
!POS279.positionName := #DEFENDER
!insert (P184, POS279) into PlayerPositions

!new Position('POS280')
!POS280.positionName := #FORWARD
!insert (P184, POS280) into PlayerPositions

!new Position('POS281')
!POS281.positionName := #MIDFIELDER
!insert (P184, POS281) into PlayerPositions

!new TrainingObjective('TO201')
!TO201.areaToImprove := 'Decision-making in counter-attacks'
!TO201.startDate := '2026-05-02'
!TO201.endDate := '2026-06-02'
!TO201.success := false
!insert (TO201, P184) into TrainingObjectivePlayer

!new Player('P185')
!P185.name := 'Hassan Adams'
!P185.age := 27
!P185.bestFoot := #RIGHT
!P185.phoneNumber := '+27 71 900 2121'
!insert (T54, P185) into TeamPlayer

!new Position('POS282')
!POS282.positionName := #GOALKEEPER
!insert (P185, POS282) into PlayerPositions

!new Position('POS283')
!POS283.positionName := #DEFENDER
!insert (P185, POS283) into PlayerPositions

!new TrainingObjective('TO202')
!TO202.areaToImprove := 'Commanding the box on set pieces'
!TO202.startDate := '2026-05-01'
!TO202.endDate := '2026-05-28'
!TO202.success := true
!insert (TO202, P185) into TrainingObjectivePlayer

!new Player('P186')
!P186.name := 'Brent Daniels'
!P186.age := 29
!P186.bestFoot := #LEFT
!P186.phoneNumber := '+27 73 456 9087'
!insert (T54, P186) into TeamPlayer

!new Position('POS284')
!POS284.positionName := #DEFENDER
!insert (P186, POS284) into PlayerPositions

!new TrainingObjective('TO203')
!TO203.areaToImprove := 'Short passing under pressure'
!TO203.startDate := '2026-05-02'
!TO203.endDate := '2026-05-29'
!TO203.success := true
!insert (TO203, P186) into TrainingObjectivePlayer

!new Player('P187')
!P187.name := 'Sibusiso Mahlangu'
!P187.age := 26
!P187.bestFoot := #BOTH
!P187.phoneNumber := '+27 78 111 0220'
!insert (T54, P187) into TeamPlayer

!new Position('POS285')
!POS285.positionName := #MIDFIELDER
!insert (P187, POS285) into PlayerPositions

!new TrainingObjective('TO204')
!TO204.areaToImprove := 'Cover shadow in defensive transitions'
!TO204.startDate := '2026-05-03'
!TO204.endDate := '2026-06-03'
!TO204.success := false
!insert (TO204, P187) into TrainingObjectivePlayer

!new Player('P188')
!P188.name := 'Ethan Smith'
!P188.age := 25
!P188.bestFoot := #RIGHT
!P188.phoneNumber := '+27 82 333 1919'
!insert (T54, P188) into TeamPlayer

!new Position('POS286')
!POS286.positionName := #FORWARD
!insert (P188, POS286) into PlayerPositions

!new Position('POS287')
!POS287.positionName := #MIDFIELDER
!insert (P188, POS287) into PlayerPositions

!new TrainingObjective('TO205')
!TO205.areaToImprove := 'Finishing across the keeper'
!TO205.startDate := '2026-05-04'
!TO205.endDate := '2026-06-04'
!TO205.success := true
!insert (TO205, P188) into TrainingObjectivePlayer

!new Player('P189')
!P189.name := 'Patrick Mokoena'
!P189.age := 30
!P189.bestFoot := #RIGHT
!P189.phoneNumber := '+27 84 909 3030'
!insert (T54, P189) into TeamPlayer

!new Position('POS288')
!POS288.positionName := #DEFENDER
!insert (P189, POS288) into PlayerPositions

!new Position('POS289')
!POS289.positionName := #MIDFIELDER
!insert (P189, POS289) into PlayerPositions

!new TrainingObjective('TO206')
!TO206.areaToImprove := 'Avoiding tactical fouls near the box'
!TO206.startDate := '2026-05-01'
!TO206.endDate := '2026-05-31'
!TO206.success := true
!insert (TO206, P189) into TrainingObjectivePlayer

!new Player('P190')
!P190.name := 'Neo Ndlovu'
!P190.age := 24
!P190.bestFoot := #LEFT
!P190.phoneNumber := '+27 76 505 8080'
!insert (T54, P190) into TeamPlayer

!new Position('POS290')
!POS290.positionName := #MIDFIELDER
!insert (P190, POS290) into PlayerPositions

!new Position('POS291')
!POS291.positionName := #FORWARD
!insert (P190, POS291) into PlayerPositions

!new Position('POS292')
!POS292.positionName := #DEFENDER
!insert (P190, POS292) into PlayerPositions

!new TrainingObjective('TO207')
!TO207.areaToImprove := 'Consistency in first touch'
!TO207.startDate := '2026-05-06'
!TO207.endDate := '2026-06-06'
!TO207.success := false
!insert (TO207, P190) into TrainingObjectivePlayer

!new TrainingSession('TS71')
!TS71.date := '2026-05-14 16:30'
!TS71.location := 'Athlone Stadium - Training Pitch'
!TS71.purpose := 'Possession under pressure + counter-press'
!insert (T55, TS71) into TeamTraining

!new TrainingNotes('TN114')
!TN114.note := 'Counter-press improved when nearest three reacted immediately.'
!TN114.date := '2026-05-14'
!insert (TS71, TN114) into TrainingTrainingNotes

!new TrainingNotes('TN115')
!TN115.note := 'Need quicker support angles for the ball carrier.'
!TN115.date := '2026-05-14'
!insert (TS71, TN115) into TrainingTrainingNotes

!new TrainingSession('TS72')
!TS72.date := '2026-05-19 17:00'
!TS72.location := 'Cape Town Stars Academy - Court 2'
!TS72.purpose := 'Set pieces + finishing patterns'
!insert (T55, TS72) into TeamTraining

!new TrainingNotes('TN116')
!TN116.note := 'Corners: far-post runner arrived on time; delivery must be flatter.'
!TN116.date := '2026-05-19'
!insert (TS72, TN116) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA50')
!FA50.reason := 'Home Affairs appointment (ID renewal).'
!insert (TS72, FA50) into TrainingFailded
!insert (FA50, P175) into FailedPlayer

!new TrainingFailedToAttend('FA51')
!FA51.reason := 'Taxi strike disrupted transport.'
!insert (TS72, FA51) into TrainingFailded
!insert (FA51, P176) into FailedPlayer

!new TrainingSession('TS73')
!TS73.date := '2026-05-16 20:30'
!TS73.location := 'Safak Arena - Auxiliary Pitch'
!TS73.purpose := 'Mid-block organization + penalty routine practice'
!insert (T56, TS73) into TeamTraining

!new TrainingNotes('TN117')
!TN117.note := 'Midfield line kept better distances; fullbacks tucked in earlier.'
!TN117.date := '2026-05-16'
!insert (TS73, TN117) into TrainingTrainingNotes

!new TrainingNotes('TN118')
!TN118.note := 'Penalty practice: focus on same run-up and head still at contact.'
!TN118.date := '2026-05-16'
!insert (TS73, TN118) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA52')
!FA52.reason := 'School trip returned late; arrived after warm-up only.'
!insert (TS73, FA52) into TrainingFailded
!insert (FA52, P180) into FailedPlayer

!new TrainingSession('TS74')
!TS74.date := '2026-05-18 09:00'
!TS74.location := 'Athlone Stadium - Main Pitch'
!TS74.purpose := 'Recovery + tactical walkthrough (senior squad)'
!insert (T54, TS74) into TeamTraining

!new TrainingNotes('TN119')
!TN119.note := 'Walkthrough clarified roles in 4-2-3-1 build-up.'
!TN119.date := '2026-05-18'
!insert (TS74, TN119) into TrainingTrainingNotes

!new Competition('COMP20')
!COMP20.name := 'Ubuntu-Bosphorus U19 Showcase'
!COMP20.type := 'International youth showcase'

!new Match('M30')
!M30.date := '2026-05-22 15:00'
!M30.homeAway := true
!insert (COMP20, M30) into CompetitionMatch
!insert (T55, M30) into LocalMatch
!insert (T56, M30) into VisitorMatch

!new MatchReport('MR29')
!MR29.duration := 80
!MR29.scoreLocal := 4
!MR29.scoreVisitor := 3
!insert (M30, MR29) into MatchMatchReport

!new MatchNote('MN39')
!MN39.note := 'Strong coastal wind; both teams favored low driven passes.'
!MN39.date := '2026-05-22'
!insert (M30, MN39) into MatchMatchNote

!new MatchNote('MN40')
!MN40.note := 'After 60 minutes, local side switched to a compact block and played on counters.'
!MN40.date := '2026-05-22'
!insert (M30, MN40) into MatchMatchNote

!new MatchEvent('ME165')
!ME165.eventType := #GOAL
!ME165.time := 5
!insert (M30, ME165) into MatchMatchEvent

!new MatchEvent('ME166')
!ME166.eventType := #GOAL
!ME166.time := 17
!insert (M30, ME166) into MatchMatchEvent

!new MatchEvent('ME167')
!ME167.eventType := #GOAL
!ME167.time := 23
!insert (M30, ME167) into MatchMatchEvent

!new MatchEvent('ME168')
!ME168.eventType := #GOAL
!ME168.time := 38
!insert (M30, ME168) into MatchMatchEvent

!new MatchEvent('ME169')
!ME169.eventType := #GOAL
!ME169.time := 54
!insert (M30, ME169) into MatchMatchEvent

!new MatchEvent('ME170')
!ME170.eventType := #GOAL
!ME170.time := 63
!insert (M30, ME170) into MatchMatchEvent

!new MatchEvent('ME171')
!ME171.eventType := #GOAL
!ME171.time := 77
!insert (M30, ME171) into MatchMatchEvent

!new MatchEvent('ME172')
!ME172.eventType := #FOUL
!ME172.time := 12
!insert (M30, ME172) into MatchMatchEvent

!new MatchEvent('ME173')
!ME173.eventType := #CORNER
!ME173.time := 31
!insert (M30, ME173) into MatchMatchEvent

!new MatchEvent('ME174')
!ME174.eventType := #OFFSIDE
!ME174.time := 58
!insert (M30, ME174) into MatchMatchEvent

!new MatchEvent('ME175')
!ME175.eventType := #PENALTY
!ME175.time := 70
!insert (M30, ME175) into MatchMatchEvent

!new MatchPlayer('MP166')
!MP166.booked := false
!MP166.goals := 0
!MP166.rating := 7
!insert (P171, MP166) into PlayerMatch
!insert (M30, MP166) into MatchMatchPlayer

!new MatchPlayerPosition('MPP166')
!MPP166.positionName := #GOALKEEPER
!MPP166.number := 1
!insert (MP166, MPP166) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP167')
!MP167.booked := false
!MP167.goals := 2
!MP167.rating := 8
!insert (P172, MP167) into PlayerMatch
!insert (M30, MP167) into MatchMatchPlayer

!new MatchPlayerPosition('MPP167')
!MPP167.positionName := #MIDFIELDER
!MPP167.number := 10
!insert (MP167, MPP167) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP168')
!MP168.booked := true
!MP168.goals := 0
!MP168.rating := 6
!insert (P173, MP168) into PlayerMatch
!insert (M30, MP168) into MatchMatchPlayer

!new MatchPlayerPosition('MPP168')
!MPP168.positionName := #DEFENDER
!MPP168.number := 4
!insert (MP168, MPP168) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP169')
!MP169.booked := false
!MP169.goals := 1
!MP169.rating := 7
!insert (P174, MP169) into PlayerMatch
!insert (M30, MP169) into MatchMatchPlayer

!new MatchPlayerPosition('MPP169')
!MPP169.positionName := #FORWARD
!MPP169.number := 9
!insert (MP169, MPP169) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP170')
!MP170.booked := false
!MP170.goals := 0
!MP170.rating := 6
!insert (P176, MP170) into PlayerMatch
!insert (M30, MP170) into MatchMatchPlayer

!new MatchPlayerPosition('MPP170')
!MPP170.positionName := #DEFENDER
!MPP170.number := 3
!insert (MP170, MPP170) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP171')
!MP171.booked := false
!MP171.goals := 1
!MP171.rating := 7
!insert (P177, MP171) into PlayerMatch
!insert (M30, MP171) into MatchMatchPlayer

!new MatchPlayerPosition('MPP171')
!MPP171.positionName := #FORWARD
!MPP171.number := 11
!insert (MP171, MPP171) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP172')
!MP172.booked := false
!MP172.goals := 0
!MP172.rating := 6
!insert (P178, MP172) into PlayerMatch
!insert (M30, MP172) into MatchMatchPlayer

!new MatchPlayerPosition('MPP172')
!MPP172.positionName := #GOALKEEPER
!MPP172.number := 1
!insert (MP172, MPP172) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP173')
!MP173.booked := false
!MP173.goals := 1
!MP173.rating := 7
!insert (P179, MP173) into PlayerMatch
!insert (M30, MP173) into MatchMatchPlayer

!new MatchPlayerPosition('MPP173')
!MPP173.positionName := #FORWARD
!MPP173.number := 7
!insert (MP173, MPP173) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP174')
!MP174.booked := true
!MP174.goals := 0
!MP174.rating := 5
!insert (P180, MP174) into PlayerMatch
!insert (M30, MP174) into MatchMatchPlayer

!new MatchPlayerPosition('MPP174')
!MPP174.positionName := #DEFENDER
!MPP174.number := 5
!insert (MP174, MPP174) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP175')
!MP175.booked := false
!MP175.goals := 2
!MP175.rating := 8
!insert (P181, MP175) into PlayerMatch
!insert (M30, MP175) into MatchMatchPlayer

!new MatchPlayerPosition('MPP175')
!MPP175.positionName := #MIDFIELDER
!MPP175.number := 8
!insert (MP175, MPP175) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP176')
!MP176.booked := false
!MP176.goals := 0
!MP176.rating := 6
!insert (P182, MP176) into PlayerMatch
!insert (M30, MP176) into MatchMatchPlayer

!new MatchPlayerPosition('MPP176')
!MPP176.positionName := #DEFENDER
!MPP176.number := 2
!insert (MP176, MPP176) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP177')
!MP177.booked := false
!MP177.goals := 0
!MP177.rating := 6
!insert (P183, MP177) into PlayerMatch
!insert (M30, MP177) into MatchMatchPlayer

!new MatchPlayerPosition('MPP177')
!MPP177.positionName := #FORWARD
!MPP177.number := 11
!insert (MP177, MPP177) into MatchPlayerMatchPlayerPosition
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 606 | 0.00% |
| Multiplicities Errors | 0 | 147 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 5 | 55 | 9.09% |

| Failed dates | 
|---| 
```
2026-05-14 16:30
```
```
2026-05-19 17:00
```
```
2026-05-16 20:30
```
```
2026-05-18 09:00
```
```
2026-05-22 15:00
```

## Category boundary
```
!new Club('C38')
!C38.name := 'Toronto Franco-Ontarian SC'
!C38.homeGround := 'Parc du Lac Shoreline Field (Toronto)'
!C38.chairman := 'Chloe Bouchard'

!new Team('T47')
!T47.name := 'TFO Senior Squad'
!insert (C38, T47) into ClubTeam

!new Club('C39')
!C39.name := 'Punjab Rangers FC'
!C39.homeGround := 'Guru Nanak Sports Complex (Ludhiana)'
!C39.chairman := 'Harpreet Singh'

!new Team('T48')
!T48.name := 'Rangers A'
!insert (C39, T48) into ClubTeam

!new Player('P152')
!P152.name := 'Etienne Morin'
!P152.age := 27
!P152.bestFoot := #LEFT
!P152.phoneNumber := '+1-416-555-0198'
!insert (T47, P152) into TeamPlayer

!new Position('POS230')
!POS230.positionName := #MIDFIELDER
!insert (P152, POS230) into PlayerPositions

!new TrainingObjective('TO166')
!TO166.areaToImprove := 'Quicker release under pressure'
!TO166.startDate := '2026-05-01'
!TO166.endDate := '2026-05-31'
!TO166.success := false
!insert (TO166, P152) into TrainingObjectivePlayer

!new Player('P153')
!P153.name := 'Nadine Khelifi'
!P153.age := 22
!P153.bestFoot := #BOTH
!P153.phoneNumber := '+1-647-555-0133'
!insert (T47, P153) into TeamPlayer

!new Position('POS231')
!POS231.positionName := #DEFENDER
!insert (P153, POS231) into PlayerPositions

!new Position('POS232')
!POS232.positionName := #MIDFIELDER
!insert (P153, POS232) into PlayerPositions

!new Position('POS233')
!POS233.positionName := #FORWARD
!insert (P153, POS233) into PlayerPositions

!new TrainingObjective('TO167')
!TO167.areaToImprove := 'Improve aerial duels'
!TO167.startDate := '2026-05-01'
!TO167.endDate := '2026-06-01'
!TO167.success := false
!insert (TO167, P153) into TrainingObjectivePlayer

!new TrainingObjective('TO168')
!TO168.areaToImprove := 'Reduce reckless challenges'
!TO168.startDate := '2026-05-01'
!TO168.endDate := '2026-05-20'
!TO168.success := true
!insert (TO168, P153) into TrainingObjectivePlayer

!new PlayerNotes('PN56')
!PN56.note := 'Switches roles fluidly; needs clearer communication in French/English mix.'
!PN56.date := '2026-05-03'
!insert (P153, PN56) into PlayerPlayerNotes

!new Player('P154')
!P154.name := 'Arjunpreet Gill'
!P154.age := 19
!P154.bestFoot := #RIGHT
!P154.phoneNumber := '+91-98765-12001'
!insert (T48, P154) into TeamPlayer

!new Position('POS234')
!POS234.positionName := #FORWARD
!insert (P154, POS234) into PlayerPositions

!new Position('POS235')
!POS235.positionName := #MIDFIELDER
!insert (P154, POS235) into PlayerPositions

!new TrainingObjective('TO169')
!TO169.areaToImprove := 'First touch when receiving long balls'
!TO169.startDate := '2026-04-25'
!TO169.endDate := '2026-05-25'
!TO169.success := false
!insert (TO169, P154) into TrainingObjectivePlayer

!new PlayerNotes('PN57')
!PN57.note := 'Good pace; must stay onside during early runs.'
!PN57.date := '2026-04-28'
!insert (P154, PN57) into PlayerPlayerNotes

!new PlayerNotes('PN58')
!PN58.note := 'Asked for video examples; learns quickly from clips.'
!PN58.date := '2026-05-02'
!insert (P154, PN58) into PlayerPlayerNotes

!new Player('P155')
!P155.name := 'Simran Kaur'
!P155.age := 31
!P155.bestFoot := #LEFT
!P155.phoneNumber := '+91-98765-12009'
!insert (T48, P155) into TeamPlayer

!new Position('POS236')
!POS236.positionName := #GOALKEEPER
!insert (P155, POS236) into PlayerPositions

!new TrainingObjective('TO170')
!TO170.areaToImprove := 'Handling wet-ball shots'
!TO170.startDate := '2026-04-20'
!TO170.endDate := '2026-05-20'
!TO170.success := true
!insert (TO170, P155) into TrainingObjectivePlayer

!new TrainingObjective('TO171')
!TO171.areaToImprove := 'Commanding the six-yard box on corners'
!TO171.startDate := '2026-04-20'
!TO171.endDate := '2026-06-01'
!TO171.success := false
!insert (TO171, P155) into TrainingObjectivePlayer

!new TrainingObjective('TO172')
!TO172.areaToImprove := 'Faster ground distribution'
!TO172.startDate := '2026-05-01'
!TO172.endDate := '2026-05-30'
!TO172.success := false
!insert (TO172, P155) into TrainingObjectivePlayer

!new TrainingSession('TS63')
!TS63.date := '2026-05-04'
!TS63.location := 'Toronto Lakeside Dome (indoor)'
!TS63.purpose := 'Small-sided play + defensive transitions'
!insert (T47, TS63) into TeamTraining

!new TrainingNotes('TN103')
!TN103.note := 'Defensive shape improved; midfielders tracked runners better.'
!TN103.date := '2026-05-04'
!insert (TS63, TN103) into TrainingTrainingNotes

!new TrainingNotes('TN104')
!TN104.note := 'Work on avoiding soft fouls in tight areas.'
!TN104.date := '2026-05-04'
!insert (TS63, TN104) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA43')
!FA43.reason := 'Work shift overran; notified coach late'
!insert (TS63, FA43) into TrainingFailded
!insert (FA43, P152) into FailedPlayer

!new TrainingFailedToAttend('FA44')
!FA44.reason := 'Public transit delay due to service interruption'
!insert (TS63, FA44) into TrainingFailded
!insert (FA44, P153) into FailedPlayer

!new TrainingSession('TS64')
!TS64.date := '2026-05-05'
!TS64.location := 'Guru Nanak Complex - Pitch 2'
!TS64.purpose := 'Set-piece routines and offside discipline'
!insert (T48, TS64) into TeamTraining

!new TrainingNotes('TN105')
!TN105.note := 'Rehearsed offside line; emphasized delayed runs for striker.'
!TN105.date := '2026-05-05'
!insert (TS64, TN105) into TrainingTrainingNotes

!new Competition('COMP17')
!COMP17.name := 'Monsoon Relief Charity Match'
!COMP17.type := 'Charity Friendly'

!new Match('M26')
!M26.date := '2026-05-06'
!M26.homeAway := false
!insert (COMP17, M26) into CompetitionMatch
!insert (T47, M26) into LocalMatch
!insert (T48, M26) into VisitorMatch

!new MatchReport('MR26')
!MR26.duration := 0
!MR26.scoreLocal := 0
!MR26.scoreVisitor := 0
!insert (M26, MR26) into MatchMatchReport

!new MatchEvent('ME141')
!ME141.eventType := #FOUL
!ME141.time := 0
!insert (M26, ME141) into MatchMatchEvent

!new MatchEvent('ME142')
!ME142.eventType := #OFFSIDE
!ME142.time := 0
!insert (M26, ME142) into MatchMatchEvent

!new MatchEvent('ME143')
!ME143.eventType := #CORNER
!ME143.time := 0
!insert (M26, ME143) into MatchMatchEvent

!new MatchEvent('ME144')
!ME144.eventType := #PENALTY
!ME144.time := 0
!insert (M26, ME144) into MatchMatchEvent

!new MatchEvent('ME145')
!ME145.eventType := #FOUL
!ME145.time := 0
!insert (M26, ME145) into MatchMatchEvent

!new MatchEvent('ME146')
!ME146.eventType := #OFFSIDE
!ME146.time := 0
!insert (M26, ME146) into MatchMatchEvent

!new MatchEvent('ME147')
!ME147.eventType := #CORNER
!ME147.time := 0
!insert (M26, ME147) into MatchMatchEvent

!new MatchNote('MN33')
!MN33.note := 'Match abandoned at kickoff due to lightning warning; safety protocol followed.'
!MN33.date := '2026-05-06'
!insert (M26, MN33) into MatchMatchNote

!new MatchNote('MN34')
!MN34.note := 'Penalty was awarded during warmup scrimmage phase; not converted; not counted as a goal event.'
!MN34.date := '2026-05-06'
!insert (M26, MN34) into MatchMatchNote

!new MatchNote('MN35')
!MN35.note := 'Officials recorded administrative events only; no play time recorded.'
!MN35.date := '2026-05-06'
!insert (M26, MN35) into MatchMatchNote

!new MatchNote('MN36')
!MN36.note := 'Charity program continued indoors; match reschedule discussed.'
!MN36.date := '2026-05-06'
!insert (M26, MN36) into MatchMatchNote

!new MatchPlayer('MP150')
!MP150.booked := false
!MP150.goals := 0
!MP150.rating := 0
!insert (P152, MP150) into PlayerMatch
!insert (M26, MP150) into MatchMatchPlayer

!new MatchPlayerPosition('MPP150')
!MPP150.positionName := #MIDFIELDER
!MPP150.number := 6
!insert (MP150, MPP150) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP151')
!MP151.booked := false
!MP151.goals := 0
!MP151.rating := 0
!insert (P154, MP151) into PlayerMatch
!insert (M26, MP151) into MatchMatchPlayer

!new MatchPlayerPosition('MPP151')
!MPP151.positionName := #FORWARD
!MPP151.number := 11
!insert (MP151, MPP151) into MatchPlayerMatchPlayerPosition
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 221 | 0.00% |
| Multiplicities Errors | 0 | 53 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 27 | 0.00% |

## Category complex
```
!new Club('C61')
!C61.name := 'Al Qamar Sports Club'
!C61.homeGround := 'Al Qamar Training Complex (Doha)'
!C61.chairman := 'Faisal Al-Kuwari'

!new Team('T74')
!T74.name := 'Al Qamar SC Seniors'
!insert (C61, T74) into ClubTeam

!new Team('T75')
!T75.name := 'Al Qamar SC Academy'
!insert (C61, T75) into ClubTeam

!new Club('C62')
!C62.name := 'Dunedin Kotare FC'
!C62.homeGround := 'Logan Park, Dunedin'
!C62.chairman := 'Moana Rangi'

!new Team('T76')
!T76.name := 'Dunedin Kotare First XI'
!insert (C62, T76) into ClubTeam

!new Club('C63')
!C63.name := 'Krakow Zubrze'
!C63.homeGround := 'Stadion Zubrow (Krakow)'
!C63.chairman := 'Piotr Nowak'

!new Team('T77')
!T77.name := 'Krakow Zubrze First Team'
!insert (C63, T77) into ClubTeam

!new Player('P250')
!P250.name := 'Omar Al-Sayed'
!P250.age := 30
!P250.bestFoot := #RIGHT
!P250.phoneNumber := '+974 5512 0099'
!insert (T74, P250) into TeamPlayer

!new Position('POS385')
!POS385.positionName := #FORWARD
!insert (P250, POS385) into PlayerPositions

!new Position('POS386')
!POS386.positionName := #MIDFIELDER
!insert (P250, POS386) into PlayerPositions

!new TrainingObjective('TO274')
!TO274.areaToImprove := 'Finishing with first touch inside the box'
!TO274.startDate := '2026-04-01'
!TO274.endDate := '2026-05-01'
!TO274.success := false
!insert (TO274, P250) into TrainingObjectivePlayer

!new PlayerNotes('PN87')
!PN87.note := 'Arrives late to some sessions; set punctuality target.'
!PN87.date := '2026-04-08'
!insert (P250, PN87) into PlayerPlayerNotes

!new Player('P251')
!P251.name := 'Hassan Al-Mansouri'
!P251.age := 27
!P251.bestFoot := #LEFT
!P251.phoneNumber := '+974 6633 1188'
!insert (T74, P251) into TeamPlayer

!new Position('POS387')
!POS387.positionName := #MIDFIELDER
!insert (P251, POS387) into PlayerPositions

!new Position('POS388')
!POS388.positionName := #DEFENDER
!insert (P251, POS388) into PlayerPositions

!new Position('POS389')
!POS389.positionName := #FORWARD
!insert (P251, POS389) into PlayerPositions

!new TrainingObjective('TO275')
!TO275.areaToImprove := 'Switching play under pressure (two-touch max)'
!TO275.startDate := '2026-04-01'
!TO275.endDate := '2026-04-25'
!TO275.success := true
!insert (TO275, P251) into TrainingObjectivePlayer

!new TrainingObjective('TO276')
!TO276.areaToImprove := 'Avoiding tactical fouls when isolated'
!TO276.startDate := '2026-04-10'
!TO276.endDate := '2026-05-05'
!TO276.success := false
!insert (TO276, P251) into TrainingObjectivePlayer

!new Player('P252')
!P252.name := 'Rami Nasser'
!P252.age := 24
!P252.bestFoot := #BOTH
!P252.phoneNumber := '+974 5010 7766'
!insert (T74, P252) into TeamPlayer

!new Position('POS390')
!POS390.positionName := #DEFENDER
!insert (P252, POS390) into PlayerPositions

!new TrainingObjective('TO277')
!TO277.areaToImprove := 'Back-post marking on corners'
!TO277.startDate := '2026-04-02'
!TO277.endDate := '2026-05-02'
!TO277.success := false
!insert (TO277, P252) into TrainingObjectivePlayer

!new Player('P253')
!P253.name := 'Yasir Mahmoud'
!P253.age := 25
!P253.bestFoot := #RIGHT
!P253.phoneNumber := '+974 5566 4422'
!insert (T74, P253) into TeamPlayer

!new Position('POS391')
!POS391.positionName := #MIDFIELDER
!insert (P253, POS391) into PlayerPositions

!new TrainingObjective('TO278')
!TO278.areaToImprove := 'Receiving on half-turn and accelerating'
!TO278.startDate := '2026-04-02'
!TO278.endDate := '2026-04-28'
!TO278.success := true
!insert (TO278, P253) into TrainingObjectivePlayer

!new PlayerNotes('PN88')
!PN88.note := 'Good progress; keep load management after minor calf tightness.'
!PN88.date := '2026-04-16'
!insert (P253, PN88) into PlayerPlayerNotes

!new Player('P254')
!P254.name := 'Bilal Farooq'
!P254.age := 29
!P254.bestFoot := #RIGHT
!P254.phoneNumber := '+974 5599 0011'
!insert (T74, P254) into TeamPlayer

!new Position('POS392')
!POS392.positionName := #GOALKEEPER
!insert (P254, POS392) into PlayerPositions

!new TrainingObjective('TO279')
!TO279.areaToImprove := 'Dealing with low driven crosses'
!TO279.startDate := '2026-04-03'
!TO279.endDate := '2026-05-03'
!TO279.success := false
!insert (TO279, P254) into TrainingObjectivePlayer

!new Player('P255')
!P255.name := 'Sami Al-Harthi'
!P255.age := 21
!P255.bestFoot := #LEFT
!P255.phoneNumber := '+974 5522 3344'
!insert (T74, P255) into TeamPlayer

!new Position('POS393')
!POS393.positionName := #FORWARD
!insert (P255, POS393) into PlayerPositions

!new TrainingObjective('TO280')
!TO280.areaToImprove := 'Timing runs vs offside line'
!TO280.startDate := '2026-04-03'
!TO280.endDate := '2026-05-10'
!TO280.success := false
!insert (TO280, P255) into TrainingObjectivePlayer

!new PlayerNotes('PN89')
!PN89.note := 'High potential; needs calmer decision-making in 1v1.'
!PN89.date := '2026-04-12'
!insert (P255, PN89) into PlayerPlayerNotes

!new Player('P256')
!P256.name := 'Maha Al-Nuaimi'
!P256.age := 17
!P256.bestFoot := #RIGHT
!P256.phoneNumber := '+974 7001 2200'
!insert (T75, P256) into TeamPlayer

!new Position('POS394')
!POS394.positionName := #MIDFIELDER
!insert (P256, POS394) into PlayerPositions

!new TrainingObjective('TO281')
!TO281.areaToImprove := 'Shielding the ball and turning out of pressure'
!TO281.startDate := '2026-04-04'
!TO281.endDate := '2026-05-04'
!TO281.success := false
!insert (TO281, P256) into TrainingObjectivePlayer

!new Player('P257')
!P257.name := 'Khalid Jaber'
!P257.age := 16
!P257.bestFoot := #LEFT
!P257.phoneNumber := '+974 7002 3311'
!insert (T75, P257) into TeamPlayer

!new Position('POS395')
!POS395.positionName := #DEFENDER
!insert (P257, POS395) into PlayerPositions

!new Position('POS396')
!POS396.positionName := #MIDFIELDER
!insert (P257, POS396) into PlayerPositions

!new TrainingObjective('TO282')
!TO282.areaToImprove := 'Passing lanes recognition (play through, not around)'
!TO282.startDate := '2026-04-04'
!TO282.endDate := '2026-04-30'
!TO282.success := true
!insert (TO282, P257) into TrainingObjectivePlayer

!new PlayerNotes('PN90')
!PN90.note := 'Improving composure; keep him on build-up duties.'
!PN90.date := '2026-04-20'
!insert (P257, PN90) into PlayerPlayerNotes

!new Player('P258')
!P258.name := 'Aisha Al-Khater'
!P258.age := 17
!P258.bestFoot := #BOTH
!P258.phoneNumber := '+974 7003 4422'
!insert (T75, P258) into TeamPlayer

!new Position('POS397')
!POS397.positionName := #GOALKEEPER
!insert (P258, POS397) into PlayerPositions

!new TrainingObjective('TO283')
!TO283.areaToImprove := 'Footwork on shots from distance'
!TO283.startDate := '2026-04-05'
!TO283.endDate := '2026-05-05'
!TO283.success := false
!insert (TO283, P258) into TrainingObjectivePlayer

!new Player('P259')
!P259.name := 'Wiremu Te Rangi'
!P259.age := 28
!P259.bestFoot := #BOTH
!P259.phoneNumber := '+64 21 555 014'
!insert (T76, P259) into TeamPlayer

!new Position('POS398')
!POS398.positionName := #MIDFIELDER
!insert (P259, POS398) into PlayerPositions

!new TrainingObjective('TO284')
!TO284.areaToImprove := 'Second-ball reactions after long clearances'
!TO284.startDate := '2026-03-30'
!TO284.endDate := '2026-04-27'
!TO284.success := false
!insert (TO284, P259) into TrainingObjectivePlayer

!new PlayerNotes('PN91')
!PN91.note := 'Keeps standards high; use him as tempo-setter.'
!PN91.date := '2026-04-07'
!insert (P259, PN91) into PlayerPlayerNotes

!new Player('P260')
!P260.name := 'Oliver McKenzie'
!P260.age := 26
!P260.bestFoot := #RIGHT
!P260.phoneNumber := '+64 27 111 909'
!insert (T76, P260) into TeamPlayer

!new Position('POS399')
!POS399.positionName := #DEFENDER
!insert (P260, POS399) into PlayerPositions

!new TrainingObjective('TO285')
!TO285.areaToImprove := 'Defending cut-backs (stop, do not overrun)'
!TO285.startDate := '2026-03-31'
!TO285.endDate := '2026-04-30'
!TO285.success := true
!insert (TO285, P260) into TrainingObjectivePlayer

!new Player('P261')
!P261.name := 'Leilani Faasuamaleaui'
!P261.age := 24
!P261.bestFoot := #LEFT
!P261.phoneNumber := '+64 22 808 221'
!insert (T76, P261) into TeamPlayer

!new Position('POS400')
!POS400.positionName := #FORWARD
!insert (P261, POS400) into PlayerPositions

!new Position('POS401')
!POS401.positionName := #MIDFIELDER
!insert (P261, POS401) into PlayerPositions

!new TrainingObjective('TO286')
!TO286.areaToImprove := 'Finishing on wet grass (low contact)'
!TO286.startDate := '2026-03-31'
!TO286.endDate := '2026-05-01'
!TO286.success := false
!insert (TO286, P261) into TrainingObjectivePlayer

!new Player('P262')
!P262.name := 'Callum Fraser'
!P262.age := 31
!P262.bestFoot := #RIGHT
!P262.phoneNumber := '+64 21 900 333'
!insert (T76, P262) into TeamPlayer

!new Position('POS402')
!POS402.positionName := #GOALKEEPER
!insert (P262, POS402) into PlayerPositions

!new TrainingObjective('TO287')
!TO287.areaToImprove := 'Communication on set-piece organization'
!TO287.startDate := '2026-04-01'
!TO287.endDate := '2026-05-01'
!TO287.success := false
!insert (TO287, P262) into TrainingObjectivePlayer

!new Player('P263')
!P263.name := 'Jakub Zielinski'
!P263.age := 27
!P263.bestFoot := #RIGHT
!P263.phoneNumber := '+48 500 111 222'
!insert (T77, P263) into TeamPlayer

!new Position('POS403')
!POS403.positionName := #FORWARD
!insert (P263, POS403) into PlayerPositions

!new TrainingObjective('TO288')
!TO288.areaToImprove := 'Penalty technique consistency'
!TO288.startDate := '2026-04-02'
!TO288.endDate := '2026-05-02'
!TO288.success := false
!insert (TO288, P263) into TrainingObjectivePlayer

!new Player('P264')
!P264.name := 'Maja Kowalczyk'
!P264.age := 23
!P264.bestFoot := #LEFT
!P264.phoneNumber := '+48 510 333 444'
!insert (T77, P264) into TeamPlayer

!new Position('POS404')
!POS404.positionName := #MIDFIELDER
!insert (P264, POS404) into PlayerPositions

!new TrainingObjective('TO289')
!TO289.areaToImprove := 'Progressive carries through midfield line'
!TO289.startDate := '2026-04-02'
!TO289.endDate := '2026-04-26'
!TO289.success := true
!insert (TO289, P264) into TrainingObjectivePlayer

!new PlayerNotes('PN92')
!PN92.note := 'Very calm under press; encourage more shots from edge.'
!PN92.date := '2026-04-18'
!insert (P264, PN92) into PlayerPlayerNotes

!new Player('P265')
!P265.name := 'Oleh Koval'
!P265.age := 29
!P265.bestFoot := #BOTH
!P265.phoneNumber := '+48 520 888 999'
!insert (T77, P265) into TeamPlayer

!new Position('POS405')
!POS405.positionName := #DEFENDER
!insert (P265, POS405) into PlayerPositions

!new Position('POS406')
!POS406.positionName := #MIDFIELDER
!insert (P265, POS406) into PlayerPositions

!new TrainingObjective('TO290')
!TO290.areaToImprove := 'Aerial clearances distance + direction'
!TO290.startDate := '2026-04-03'
!TO290.endDate := '2026-05-03'
!TO290.success := false
!insert (TO290, P265) into TrainingObjectivePlayer

!new Player('P266')
!P266.name := 'Tomasz Wojcik'
!P266.age := 22
!P266.bestFoot := #RIGHT
!P266.phoneNumber := '+48 530 123 456'
!insert (T77, P266) into TeamPlayer

!new Position('POS407')
!POS407.positionName := #DEFENDER
!insert (P266, POS407) into PlayerPositions

!new TrainingObjective('TO291')
!TO291.areaToImprove := 'Avoiding cheap fouls near box'
!TO291.startDate := '2026-04-03'
!TO291.endDate := '2026-04-24'
!TO291.success := true
!insert (TO291, P266) into TrainingObjectivePlayer

!new Player('P267')
!P267.name := 'Karolina Nowak'
!P267.age := 26
!P267.bestFoot := #RIGHT
!P267.phoneNumber := '+48 540 222 333'
!insert (T77, P267) into TeamPlayer

!new Position('POS408')
!POS408.positionName := #GOALKEEPER
!insert (P267, POS408) into PlayerPositions

!new TrainingObjective('TO292')
!TO292.areaToImprove := 'Quick restarts: throws to wide players'
!TO292.startDate := '2026-04-04'
!TO292.endDate := '2026-05-04'
!TO292.success := false
!insert (TO292, P267) into TrainingObjectivePlayer

!new TrainingSession('TS95')
!TS95.date := '2026-04-07'
!TS95.location := 'Al Qamar Complex - Pitch A'
!TS95.purpose := 'Attacking automatisms: third-man runs'
!insert (T74, TS95) into TeamTraining

!new TrainingNotes('TN148')
!TN148.note := 'Midfield triangle must create a free man; avoid flat line.'
!TN148.date := '2026-04-07'
!insert (TS95, TN148) into TrainingTrainingNotes

!new TrainingNotes('TN149')
!TN149.note := 'Striker checks short only after winger pins fullback.'
!TN149.date := '2026-04-07'
!insert (TS95, TN149) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA70')
!FA70.reason := 'Traffic accident on Salwa Road (delayed; did not attend)'
!insert (TS95, FA70) into TrainingFailded
!insert (FA70, P250) into FailedPlayer

!new TrainingFailedToAttend('FA71')
!FA71.reason := 'Fever and advised rest'
!insert (TS95, FA71) into TrainingFailded
!insert (FA71, P255) into FailedPlayer

!new TrainingSession('TS96')
!TS96.date := '2026-04-14'
!TS96.location := 'Al Qamar Complex - Pitch A'
!TS96.purpose := 'Defensive organization: mid-block and tracking runners'
!insert (T74, TS96) into TeamTraining

!new TrainingNotes('TN150')
!TN150.note := 'Back line: hold 8-10m spacing; step together on cue.'
!TN150.date := '2026-04-14'
!insert (TS96, TN150) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA72')
!FA72.reason := 'Work travel (same-day flight)'
!insert (TS96, FA72) into TrainingFailded
!insert (FA72, P252) into FailedPlayer

!new TrainingSession('TS97')
!TS97.date := '2026-04-21'
!TS97.location := 'Al Qamar Complex - Gym'
!TS97.purpose := 'Strength + injury prevention (groin/hamstring)'
!insert (T74, TS97) into TeamTraining

!new TrainingNotes('TN151')
!TN151.note := 'Copenhagen adductor: start with 2x6; monitor soreness.'
!TN151.date := '2026-04-21'
!insert (TS97, TN151) into TrainingTrainingNotes

!new TrainingNotes('TN152')
!TN152.note := 'Goalkeeper core stability emphasized for landing mechanics.'
!TN152.date := '2026-04-21'
!insert (TS97, TN152) into TrainingTrainingNotes

!new TrainingSession('TS98')
!TS98.date := '2026-04-09'
!TS98.location := 'Al Qamar Academy - Pitch C'
!TS98.purpose := 'First touch + playing out from the back'
!insert (T75, TS98) into TeamTraining

!new TrainingNotes('TN153')
!TN153.note := 'GK must create angle; CBs split earlier.'
!TN153.date := '2026-04-09'
!insert (TS98, TN153) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA73')
!FA73.reason := 'School exam'
!insert (TS98, FA73) into TrainingFailded
!insert (FA73, P256) into FailedPlayer

!new TrainingSession('TS99')
!TS99.date := '2026-04-05'
!TS99.location := 'Logan Park - Field 2'
!TS99.purpose := 'Wet-weather finishing + second balls'
!insert (T76, TS99) into TeamTraining

!new TrainingNotes('TN154')
!TN154.note := 'Shoot low and early; follow rebounds aggressively.'
!TN154.date := '2026-04-05'
!insert (TS99, TN154) into TrainingTrainingNotes

!new TrainingNotes('TN155')
!TN155.note := 'Wide players: arrive late at cut-back zone.'
!TN155.date := '2026-04-05'
!insert (TS99, TN155) into TrainingTrainingNotes

!new TrainingSession('TS100')
!TS100.date := '2026-04-19'
!TS100.location := 'Logan Park - Indoor Hall'
!TS100.purpose := 'Set-piece defending + communication'
!insert (T76, TS100) into TeamTraining

!new TrainingNotes('TN156')
!TN156.note := 'Assign clear zones; GK calls KEEP or AWAY early.'
!TN156.date := '2026-04-19'
!insert (TS100, TN156) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA74')
!FA74.reason := 'Childcare emergency'
!insert (TS100, FA74) into TrainingFailded
!insert (FA74, P262) into FailedPlayer

!new TrainingSession('TS101')
!TS101.date := '2026-04-08'
!TS101.location := 'Stadion Zubrow - Training Pitch'
!TS101.purpose := 'Transitions: counter-press vs tactical foul decisions'
!insert (T77, TS101) into TeamTraining

!new TrainingNotes('TN157')
!TN157.note := 'If counter-press fails, drop immediately; no reckless fouls.'
!TN157.date := '2026-04-08'
!insert (TS101, TN157) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA75')
!FA75.reason := 'Arrived after warm-up due to tram disruption; marked absent'
!insert (TS101, FA75) into TrainingFailded
!insert (FA75, P266) into FailedPlayer

!new TrainingSession('TS102')
!TS102.date := '2026-04-22'
!TS102.location := 'Stadion Zubrow - Gym'
!TS102.purpose := 'Explosiveness + plyometrics (controlled volume)'
!insert (T77, TS102) into TeamTraining

!new TrainingNotes('TN158')
!TN158.note := 'Limit jumps; prioritize quality landings.'
!TN158.date := '2026-04-22'
!insert (TS102, TN158) into TrainingTrainingNotes

!new TrainingNotes('TN159')
!TN159.note := 'Striker sprint repeats: stop at first sign of hamstring tightness.'
!TN159.date := '2026-04-22'
!insert (TS102, TN159) into TrainingTrainingNotes

!new Competition('COMP26')
!COMP26.name := 'Desert-Baltic Challenge Cup'
!COMP26.type := 'Short international showcase'

!new Match('M43')
!M43.date := '2026-04-24'
!M43.homeAway := true
!insert (COMP26, M43) into CompetitionMatch
!insert (T74, M43) into LocalMatch
!insert (T76, M43) into VisitorMatch

!new MatchReport('MR42')
!MR42.duration := 90
!MR42.scoreLocal := 4
!MR42.scoreVisitor := 2
!insert (M43, MR42) into MatchMatchReport

!new MatchEvent('ME246')
!ME246.eventType := #GOAL
!ME246.time := 9
!insert (M43, ME246) into MatchMatchEvent

!new MatchEvent('ME247')
!ME247.eventType := #FOUL
!ME247.time := 17
!insert (M43, ME247) into MatchMatchEvent

!new MatchEvent('ME248')
!ME248.eventType := #PENALTY
!ME248.time := 18
!insert (M43, ME248) into MatchMatchEvent

!new MatchEvent('ME249')
!ME249.eventType := #GOAL
!ME249.time := 19
!insert (M43, ME249) into MatchMatchEvent

!new MatchEvent('ME250')
!ME250.eventType := #GOAL
!ME250.time := 33
!insert (M43, ME250) into MatchMatchEvent

!new MatchEvent('ME251')
!ME251.eventType := #OFFSIDE
!ME251.time := 44
!insert (M43, ME251) into MatchMatchEvent

!new MatchEvent('ME252')
!ME252.eventType := #GOAL
!ME252.time := 58
!insert (M43, ME252) into MatchMatchEvent

!new MatchEvent('ME253')
!ME253.eventType := #CORNER
!ME253.time := 62
!insert (M43, ME253) into MatchMatchEvent

!new MatchEvent('ME254')
!ME254.eventType := #GOAL
!ME254.time := 74
!insert (M43, ME254) into MatchMatchEvent

!new MatchEvent('ME255')
!ME255.eventType := #GOAL
!ME255.time := 88
!insert (M43, ME255) into MatchMatchEvent

!new MatchNote('MN53')
!MN53.note := 'Heat impacted tempo; hydration breaks were critical for pressing intensity.'
!MN53.date := '2026-04-24'
!insert (M43, MN53) into MatchMatchNote

!new MatchNote('MN54')
!MN54.note := 'Visitor threatened mostly on second balls after corners.'
!MN54.date := '2026-04-24'
!insert (M43, MN54) into MatchMatchNote

!new MatchPlayer('MP246')
!MP246.booked := false
!MP246.goals := 0
!MP246.rating := 6
!insert (P254, MP246) into PlayerMatch
!insert (M43, MP246) into MatchMatchPlayer

!new MatchPlayerPosition('MPP246')
!MPP246.positionName := #GOALKEEPER
!MPP246.number := 1
!insert (MP246, MPP246) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP247')
!MP247.booked := true
!MP247.goals := 0
!MP247.rating := 6
!insert (P252, MP247) into PlayerMatch
!insert (M43, MP247) into MatchMatchPlayer

!new MatchPlayerPosition('MPP247')
!MPP247.positionName := #DEFENDER
!MPP247.number := 5
!insert (MP247, MPP247) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP248')
!MP248.booked := false
!MP248.goals := 1
!MP248.rating := 7
!insert (P251, MP248) into PlayerMatch
!insert (M43, MP248) into MatchMatchPlayer

!new MatchPlayerPosition('MPP248')
!MPP248.positionName := #MIDFIELDER
!MPP248.number := 8
!insert (MP248, MPP248) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP249')
!MP249.booked := false
!MP249.goals := 1
!MP249.rating := 7
!insert (P253, MP249) into PlayerMatch
!insert (M43, MP249) into MatchMatchPlayer

!new MatchPlayerPosition('MPP249')
!MPP249.positionName := #MIDFIELDER
!MPP249.number := 10
!insert (MP249, MPP249) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP250')
!MP250.booked := false
!MP250.goals := 2
!MP250.rating := 8
!insert (P250, MP250) into PlayerMatch
!insert (M43, MP250) into MatchMatchPlayer

!new MatchPlayerPosition('MPP250')
!MPP250.positionName := #FORWARD
!MPP250.number := 9
!insert (MP250, MPP250) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP251')
!MP251.booked := false
!MP251.goals := 0
!MP251.rating := 6
!insert (P262, MP251) into PlayerMatch
!insert (M43, MP251) into MatchMatchPlayer

!new MatchPlayerPosition('MPP251')
!MPP251.positionName := #GOALKEEPER
!MPP251.number := 1
!insert (MP251, MPP251) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP252')
!MP252.booked := true
!MP252.goals := 0
!MP252.rating := 6
!insert (P260, MP252) into PlayerMatch
!insert (M43, MP252) into MatchMatchPlayer

!new MatchPlayerPosition('MPP252')
!MPP252.positionName := #DEFENDER
!MPP252.number := 4
!insert (MP252, MPP252) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP253')
!MP253.booked := false
!MP253.goals := 0
!MP253.rating := 7
!insert (P259, MP253) into PlayerMatch
!insert (M43, MP253) into MatchMatchPlayer

!new MatchPlayerPosition('MPP253')
!MPP253.positionName := #MIDFIELDER
!MPP253.number := 8
!insert (MP253, MPP253) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP254')
!MP254.booked := false
!MP254.goals := 2
!MP254.rating := 7
!insert (P261, MP254) into PlayerMatch
!insert (M43, MP254) into MatchMatchPlayer

!new MatchPlayerPosition('MPP254')
!MPP254.positionName := #FORWARD
!MPP254.number := 11
!insert (MP254, MPP254) into MatchPlayerMatchPlayerPosition

!new Match('M44')
!M44.date := '2026-04-27'
!M44.homeAway := false
!insert (COMP26, M44) into CompetitionMatch
!insert (T77, M44) into LocalMatch
!insert (T74, M44) into VisitorMatch

!new MatchReport('MR43')
!MR43.duration := 92
!MR43.scoreLocal := 0
!MR43.scoreVisitor := 1
!insert (M44, MR43) into MatchMatchReport

!new MatchEvent('ME256')
!ME256.eventType := #FOUL
!ME256.time := 26
!insert (M44, ME256) into MatchMatchEvent

!new MatchEvent('ME257')
!ME257.eventType := #CORNER
!ME257.time := 49
!insert (M44, ME257) into MatchMatchEvent

!new MatchEvent('ME258')
!ME258.eventType := #OFFSIDE
!ME258.time := 66
!insert (M44, ME258) into MatchMatchEvent

!new MatchEvent('ME259')
!ME259.eventType := #GOAL
!ME259.time := 91
!insert (M44, ME259) into MatchMatchEvent

!new MatchNote('MN55')
!MN55.note := 'Local side controlled possession; visitor scored on a late transition.'
!MN55.date := '2026-04-27'
!insert (M44, MN55) into MatchMatchNote

!new MatchPlayer('MP255')
!MP255.booked := false
!MP255.goals := 0
!MP255.rating := 6
!insert (P267, MP255) into PlayerMatch
!insert (M44, MP255) into MatchMatchPlayer

!new MatchPlayerPosition('MPP255')
!MPP255.positionName := #GOALKEEPER
!MPP255.number := 1
!insert (MP255, MPP255) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP256')
!MP256.booked := false
!MP256.goals := 0
!MP256.rating := 6
!insert (P265, MP256) into PlayerMatch
!insert (M44, MP256) into MatchMatchPlayer

!new MatchPlayerPosition('MPP256')
!MPP256.positionName := #DEFENDER
!MPP256.number := 6
!insert (MP256, MPP256) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP257')
!MP257.booked := false
!MP257.goals := 0
!MP257.rating := 7
!insert (P264, MP257) into PlayerMatch
!insert (M44, MP257) into MatchMatchPlayer

!new MatchPlayerPosition('MPP257')
!MPP257.positionName := #MIDFIELDER
!MPP257.number := 8
!insert (MP257, MPP257) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP258')
!MP258.booked := false
!MP258.goals := 0
!MP258.rating := 5
!insert (P263, MP258) into PlayerMatch
!insert (M44, MP258) into MatchMatchPlayer

!new MatchPlayerPosition('MPP258')
!MPP258.positionName := #FORWARD
!MPP258.number := 9
!insert (MP258, MPP258) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP259')
!MP259.booked := false
!MP259.goals := 0
!MP259.rating := 7
!insert (P254, MP259) into PlayerMatch
!insert (M44, MP259) into MatchMatchPlayer

!new MatchPlayerPosition('MPP259')
!MPP259.positionName := #GOALKEEPER
!MPP259.number := 1
!insert (MP259, MPP259) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP260')
!MP260.booked := false
!MP260.goals := 0
!MP260.rating := 7
!insert (P252, MP260) into PlayerMatch
!insert (M44, MP260) into MatchMatchPlayer

!new MatchPlayerPosition('MPP260')
!MPP260.positionName := #DEFENDER
!MPP260.number := 5
!insert (MP260, MPP260) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP261')
!MP261.booked := true
!MP261.goals := 0
!MP261.rating := 6
!insert (P251, MP261) into PlayerMatch
!insert (M44, MP261) into MatchMatchPlayer

!new MatchPlayerPosition('MPP261')
!MPP261.positionName := #MIDFIELDER
!MPP261.number := 8
!insert (MP261, MPP261) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP262')
!MP262.booked := false
!MP262.goals := 1
!MP262.rating := 7
!insert (P255, MP262) into PlayerMatch
!insert (M44, MP262) into MatchMatchPlayer

!new MatchPlayerPosition('MPP262')
!MPP262.positionName := #FORWARD
!MPP262.number := 11
!insert (MP262, MPP262) into MatchPlayerMatchPlayerPosition
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 717 | 0.00% |
| Multiplicities Errors | 0 | 179 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 69 | 0.00% |

## Category edge
```
!new Club('C36')
!C36.name := 'Desert Mirage FC'
!C36.homeGround := 'Al Shams Sand Stadium'
!C36.chairman := 'Maha Al-Zahiri'

!new Team('T45')
!T45.name := 'Mirage Nomads'
!insert (C36, T45) into ClubTeam

!new Club('C37')
!C37.name := 'Arctic Circle Sporting'
!C37.homeGround := 'Polar Dome Rovaniemi'
!C37.chairman := 'Juhani Lehtonen'

!new Team('T46')
!T46.name := 'Aurora Rangers'
!insert (C37, T46) into ClubTeam

!new Player('P148')
!P148.name := 'Salim Al Mansouri'
!P148.age := 38
!P148.bestFoot := #BOTH
!P148.phoneNumber := '+971 50 111 2233'
!insert (T45, P148) into TeamPlayer

!new Position('POS223')
!POS223.positionName := #MIDFIELDER
!insert (P148, POS223) into PlayerPositions

!new Position('POS224')
!POS224.positionName := #FORWARD
!insert (P148, POS224) into PlayerPositions

!new Position('POS225')
!POS225.positionName := #DEFENDER
!insert (P148, POS225) into PlayerPositions

!new TrainingObjective('TO160')
!TO160.areaToImprove := 'Heat management and hydration pacing'
!TO160.startDate := '2026-02-01'
!TO160.endDate := '2026-02-14'
!TO160.success := true
!insert (TO160, P148) into TrainingObjectivePlayer

!new TrainingObjective('TO161')
!TO161.areaToImprove := 'Short passing accuracy in loose sand'
!TO161.startDate := '2026-02-05'
!TO161.endDate := '2026-02-20'
!TO161.success := false
!insert (TO161, P148) into TrainingObjectivePlayer

!new PlayerNotes('PN54')
!PN54.note := 'Can cover multiple roles; registered as outfield but occasionally fills in goal.'
!PN54.date := '2026-02-06'
!insert (P148, PN54) into PlayerPlayerNotes

!new Player('P149')
!P149.name := 'Rania Al Qasimi'
!P149.age := 27
!P149.bestFoot := #LEFT
!P149.phoneNumber := '+971 52 444 8899'
!insert (T45, P149) into TeamPlayer

!new Position('POS226')
!POS226.positionName := #GOALKEEPER
!insert (P149, POS226) into PlayerPositions

!new TrainingObjective('TO162')
!TO162.areaToImprove := 'Handling high balls in crosswind'
!TO162.startDate := '2026-02-03'
!TO162.endDate := '2026-02-28'
!TO162.success := false
!insert (TO162, P149) into TrainingObjectivePlayer

!new Player('P150')
!P150.name := 'Veera Kallio'
!P150.age := 30
!P150.bestFoot := #RIGHT
!P150.phoneNumber := '+358 40 555 0101'
!insert (T46, P150) into TeamPlayer

!new Position('POS227')
!POS227.positionName := #DEFENDER
!insert (P150, POS227) into PlayerPositions

!new Position('POS228')
!POS228.positionName := #MIDFIELDER
!insert (P150, POS228) into PlayerPositions

!new TrainingObjective('TO163')
!TO163.areaToImprove := 'Sliding tackles on indoor turf (avoid fouls)'
!TO163.startDate := '2026-02-01'
!TO163.endDate := '2026-02-21'
!TO163.success := true
!insert (TO163, P150) into TrainingObjectivePlayer

!new PlayerNotes('PN55')
!PN55.note := 'Prefers controlled surfaces; outdoor snow sessions limited.'
!PN55.date := '2026-02-04'
!insert (P150, PN55) into PlayerPlayerNotes

!new Player('P151')
!P151.name := 'Nikolai Petrov'
!P151.age := 19
!P151.bestFoot := #RIGHT
!P151.phoneNumber := '+358 45 777 2323'
!insert (T46, P151) into TeamPlayer

!new Position('POS229')
!POS229.positionName := #FORWARD
!insert (P151, POS229) into PlayerPositions

!new TrainingObjective('TO164')
!TO164.areaToImprove := 'First-step acceleration on artificial pitch'
!TO164.startDate := '2026-02-02'
!TO164.endDate := '2026-02-16'
!TO164.success := false
!insert (TO164, P151) into TrainingObjectivePlayer

!new TrainingObjective('TO165')
!TO165.areaToImprove := 'Finishing from tight angles'
!TO165.startDate := '2026-02-05'
!TO165.endDate := '2026-03-05'
!TO165.success := false
!insert (TO165, P151) into TrainingObjectivePlayer

!new TrainingSession('TS60')
!TS60.date := '2026-02-06'
!TS60.location := 'Al Shams Sand Stadium (training grid)'
!TS60.purpose := 'Short passing and ball control in sand'
!insert (T45, TS60) into TeamTraining

!new TrainingNotes('TN99')
!TN99.note := 'Used heavier ball to reduce unpredictable bounce.'
!TN99.date := '2026-02-06'
!insert (TS60, TN99) into TrainingTrainingNotes

!new TrainingNotes('TN100')
!TN100.note := 'Drills shortened to manage heat exposure.'
!TN100.date := '2026-02-06'
!insert (TS60, TN100) into TrainingTrainingNotes

!new TrainingSession('TS61')
!TS61.date := '2026-02-04'
!TS61.location := 'Polar Dome Rovaniemi (indoor)'
!TS61.purpose := 'Pressing shape and transitions'
!insert (T46, TS61) into TeamTraining

!new TrainingNotes('TN101')
!TN101.note := 'Press triggers simplified due to small group.'
!TN101.date := '2026-02-04'
!insert (TS61, TN101) into TrainingTrainingNotes

!new TrainingSession('TS62')
!TS62.date := '2026-02-07'
!TS62.location := 'Polar Dome Rovaniemi (indoor)'
!TS62.purpose := 'Finishing patterns and quick restarts'
!insert (T46, TS62) into TeamTraining

!new TrainingNotes('TN102')
!TN102.note := 'Restart routines practiced repeatedly; stopwatch used.'
!TN102.date := '2026-02-07'
!insert (TS62, TN102) into TrainingTrainingNotes

!new Competition('COMP16')
!COMP16.name := 'Clock-Glitch Demonstration Friendly'
!COMP16.type := 'Exhibition'

!new Match('M25')
!M25.date := '2026-02-08'
!M25.homeAway := true
!insert (COMP16, M25) into CompetitionMatch
!insert (T45, M25) into LocalMatch
!insert (T46, M25) into VisitorMatch

!new MatchReport('MR25')
!MR25.duration := 0
!MR25.scoreLocal := 1
!MR25.scoreVisitor := 0
!insert (M25, MR25) into MatchMatchReport

!new MatchEvent('ME140')
!ME140.eventType := #GOAL
!ME140.time := 0
!insert (M25, ME140) into MatchMatchEvent

!new MatchPlayer('MP145')
!MP145.booked := false
!MP145.goals := 0
!MP145.rating := 6
!insert (P148, MP145) into PlayerMatch
!insert (M25, MP145) into MatchMatchPlayer

!new MatchPlayerPosition('MPP145')
!MPP145.positionName := #MIDFIELDER
!MPP145.number := 10
!insert (MP145, MPP145) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP146')
!MP146.booked := true
!MP146.goals := 12
!MP146.rating := 1
!insert (P148, MP146) into PlayerMatch
!insert (M25, MP146) into MatchMatchPlayer

!new MatchPlayerPosition('MPP146')
!MPP146.positionName := #GOALKEEPER
!MPP146.number := 1
!insert (MP146, MPP146) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP147')
!MP147.booked := false
!MP147.goals := 0
!MP147.rating := 10
!insert (P149, MP147) into PlayerMatch
!insert (M25, MP147) into MatchMatchPlayer

!new MatchPlayerPosition('MPP147')
!MPP147.positionName := #GOALKEEPER
!MPP147.number := 99
!insert (MP147, MPP147) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP148')
!MP148.booked := false
!MP148.goals := 0
!MP148.rating := 0
!insert (P150, MP148) into PlayerMatch
!insert (M25, MP148) into MatchMatchPlayer

!new MatchPlayerPosition('MPP148')
!MPP148.positionName := #DEFENDER
!MPP148.number := 5
!insert (MP148, MPP148) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP149')
!MP149.booked := false
!MP149.goals := 0
!MP149.rating := -50
!insert (P151, MP149) into PlayerMatch
!insert (M25, MP149) into MatchMatchPlayer

!new MatchPlayerPosition('MPP149')
!MPP149.positionName := #FORWARD
!MPP149.number := 7
!insert (MP149, MPP149) into MatchPlayerMatchPlayerPosition
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 202 | 0.00% |
| Multiplicities Errors | 0 | 48 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 22 | 0.00% |

## Category invalid
```
!new Club('C34')
!C34.name := 'Raja Club Athletic'
!C34.homeGround := 'Stade Mohammed V (Casablanca)'
!C34.chairman := 'Mohamed Boudrika'

!new Team('T43')
!T43.name := 'Raja CA First Team'
!insert (C34, T43) into ClubTeam

!new Club('C35')
!C35.name := 'Wydad Athletic Club'
!C35.homeGround := 'Stade Mohammed V (Casablanca)'
!C35.chairman := 'Said Naciri'

!new Team('T44')
!T44.name := 'Wydad AC First Team'
!insert (C35, T44) into ClubTeam

!new Player('P142')
!P142.name := 'Anas El Idrissi'
!P142.age := 28
!P142.bestFoot := #RIGHT
!P142.phoneNumber := '+212 6 61 22 90 14'
!insert (T43, P142) into TeamPlayer

!new Position('POS215')
!POS215.positionName := #GOALKEEPER
!insert (P142, POS215) into PlayerPositions

!new TrainingObjective('TO154')
!TO154.areaToImprove := 'Penalty-reading and first step timing'
!TO154.startDate := '2026-04-01'
!TO154.endDate := '2026-05-20'
!TO154.success := true
!insert (TO154, P142) into TrainingObjectivePlayer

!new PlayerNotes('PN51')
!PN51.note := 'Stayed calm during shootout; excellent positioning on low shots.'
!PN51.date := '2026-05-18'
!insert (P142, PN51) into PlayerPlayerNotes

!new Player('P143')
!P143.name := 'Hamza Berrada'
!P143.age := 24
!P143.bestFoot := #LEFT
!P143.phoneNumber := '+212 6 20 55 18 02'
!insert (T43, P143) into TeamPlayer

!new Position('POS216')
!POS216.positionName := #DEFENDER
!insert (P143, POS216) into PlayerPositions

!new Position('POS217')
!POS217.positionName := #MIDFIELDER
!insert (P143, POS217) into PlayerPositions

!new TrainingObjective('TO155')
!TO155.areaToImprove := 'Aerial timing on defensive set pieces'
!TO155.startDate := '2026-04-05'
!TO155.endDate := '2026-05-15'
!TO155.success := false
!insert (TO155, P143) into TrainingObjectivePlayer

!new Player('P144')
!P144.name := 'Yassine Ouali'
!P144.age := 22
!P144.bestFoot := #BOTH
!P144.phoneNumber := '+212 6 75 03 44 09'
!insert (T43, P144) into TeamPlayer

!new Position('POS218')
!POS218.positionName := #MIDFIELDER
!insert (P144, POS218) into PlayerPositions

!new TrainingObjective('TO156')
!TO156.areaToImprove := 'Play faster under pressure (one- and two-touch)'
!TO156.startDate := '2026-04-03'
!TO156.endDate := '2026-05-25'
!TO156.success := true
!insert (TO156, P144) into TrainingObjectivePlayer

!new PlayerNotes('PN52')
!PN52.note := 'Improved scanning; finds the far-side winger earlier now.'
!PN52.date := '2026-05-10'
!insert (P144, PN52) into PlayerPlayerNotes

!new TrainingSession('TS58')
!TS58.date := '2026-05-16'
!TS58.location := 'Raja Training Centre, Casablanca'
!TS58.purpose := 'Cup final preparation: set pieces + penalty practice'
!insert (T43, TS58) into TeamTraining

!new TrainingNotes('TN96')
!TN96.note := 'Penalty routine clarified; each taker committed to one corner.'
!TN96.date := '2026-05-16'
!insert (TS58, TN96) into TrainingTrainingNotes

!new TrainingNotes('TN97')
!TN97.note := 'Defensive corners: stronger near-post protection, fewer free runs.'
!TN97.date := '2026-05-16'
!insert (TS58, TN97) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA42')
!FA42.reason := 'Minor hamstring tightness; precautionary rest.'
!insert (TS58, FA42) into TrainingFailded
!insert (FA42, P143) into FailedPlayer

!new Player('P145')
!P145.name := 'Ayoub Messaoudi'
!P145.age := 30
!P145.bestFoot := #RIGHT
!P145.phoneNumber := '+212 6 88 19 70 33'
!insert (T44, P145) into TeamPlayer

!new Position('POS219')
!POS219.positionName := #GOALKEEPER
!insert (P145, POS219) into PlayerPositions

!new TrainingObjective('TO157')
!TO157.areaToImprove := 'Distribution accuracy to fullbacks under press'
!TO157.startDate := '2026-04-02'
!TO157.endDate := '2026-05-22'
!TO157.success := true
!insert (TO157, P145) into TrainingObjectivePlayer

!new Player('P146')
!P146.name := 'Bilal Ziani'
!P146.age := 26
!P146.bestFoot := #LEFT
!P146.phoneNumber := '+212 6 47 90 11 65'
!insert (T44, P146) into TeamPlayer

!new Position('POS220')
!POS220.positionName := #DEFENDER
!insert (P146, POS220) into PlayerPositions

!new TrainingObjective('TO158')
!TO158.areaToImprove := 'Avoid late tackles in wide areas (reduce cards)'
!TO158.startDate := '2026-04-07'
!TO158.endDate := '2026-05-18'
!TO158.success := false
!insert (TO158, P146) into TrainingObjectivePlayer

!new PlayerNotes('PN53')
!PN53.note := 'Aggressive defender; must stay on feet when isolated 1v1.'
!PN53.date := '2026-05-08'
!insert (P146, PN53) into PlayerPlayerNotes

!new Player('P147')
!P147.name := 'Soufiane Benomar'
!P147.age := 21
!P147.bestFoot := #BOTH
!P147.phoneNumber := '+212 6 53 28 40 91'
!insert (T44, P147) into TeamPlayer

!new Position('POS221')
!POS221.positionName := #FORWARD
!insert (P147, POS221) into PlayerPositions

!new Position('POS222')
!POS222.positionName := #MIDFIELDER
!insert (P147, POS222) into PlayerPositions

!new TrainingObjective('TO159')
!TO159.areaToImprove := 'Decision-making on counterattacks (pass vs shot)'
!TO159.startDate := '2026-04-04'
!TO159.endDate := '2026-05-26'
!TO159.success := true
!insert (TO159, P147) into TrainingObjectivePlayer

!new TrainingSession('TS59')
!TS59.date := '2026-05-15'
!TS59.location := 'Wydad Academy Pitch, Casablanca'
!TS59.purpose := 'Final build-up: compact block + transition finishing'
!insert (T44, TS59) into TeamTraining

!new TrainingNotes('TN98')
!TN98.note := 'Transition finishing sharp; counters created from central regain.'
!TN98.date := '2026-05-15'
!insert (TS59, TN98) into TrainingTrainingNotes

!new Competition('COMP15')
!COMP15.name := 'Coupe du Trone Final 2026'
!COMP15.type := 'Knockout cup final'

!new Match('M24')
!M24.date := '2026-05-18'
!M24.homeAway := true
!insert (COMP15, M24) into CompetitionMatch
!insert (T43, M24) into LocalMatch
!insert (T44, M24) into VisitorMatch

!new MatchReport('MR24')
!MR24.duration := 120
!MR24.scoreLocal := 5
!MR24.scoreVisitor := 4
!insert (M24, MR24) into MatchMatchReport

!new MatchEvent('ME134')
!ME134.eventType := #GOAL
!ME134.time := 38
!insert (M24, ME134) into MatchMatchEvent

!new MatchEvent('ME135')
!ME135.eventType := #FOUL
!ME135.time := 52
!insert (M24, ME135) into MatchMatchEvent

!new MatchEvent('ME136')
!ME136.eventType := #CORNER
!ME136.time := 64
!insert (M24, ME136) into MatchMatchEvent

!new MatchEvent('ME137')
!ME137.eventType := #OFFSIDE
!ME137.time := 79
!insert (M24, ME137) into MatchMatchEvent

!new MatchEvent('ME138')
!ME138.eventType := #GOAL
!ME138.time := 103
!insert (M24, ME138) into MatchMatchEvent

!new MatchEvent('ME139')
!ME139.eventType := #PENALTY
!ME139.time := 118
!insert (M24, ME139) into MatchMatchEvent

!new MatchNote('MN32')
!MN32.note := 'Casablanca derby final decided on penalties; tense, tactical, few clear chances.'
!MN32.date := '2026-05-18'
!insert (M24, MN32) into MatchMatchNote

!new MatchPlayer('MP139')
!MP139.booked := false
!MP139.goals := 0
!MP139.rating := 8
!insert (P142, MP139) into PlayerMatch
!insert (M24, MP139) into MatchMatchPlayer

!new MatchPlayerPosition('MPP139')
!MPP139.positionName := #GOALKEEPER
!MPP139.number := 1
!insert (MP139, MPP139) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP140')
!MP140.booked := false
!MP140.goals := 0
!MP140.rating := 6
!insert (P143, MP140) into PlayerMatch
!insert (M24, MP140) into MatchMatchPlayer

!new MatchPlayerPosition('MPP140')
!MPP140.positionName := #DEFENDER
!MPP140.number := 5
!insert (MP140, MPP140) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP141')
!MP141.booked := true
!MP141.goals := 1
!MP141.rating := 7
!insert (P144, MP141) into PlayerMatch
!insert (M24, MP141) into MatchMatchPlayer

!new MatchPlayerPosition('MPP141')
!MPP141.positionName := #MIDFIELDER
!MPP141.number := 8
!insert (MP141, MPP141) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP142')
!MP142.booked := false
!MP142.goals := 0
!MP142.rating := 7
!insert (P145, MP142) into PlayerMatch
!insert (M24, MP142) into MatchMatchPlayer

!new MatchPlayerPosition('MPP142')
!MPP142.positionName := #GOALKEEPER
!MPP142.number := 1
!insert (MP142, MPP142) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP143')
!MP143.booked := true
!MP143.goals := 0
!MP143.rating := 6
!insert (P146, MP143) into PlayerMatch
!insert (M24, MP143) into MatchMatchPlayer

!new MatchPlayerPosition('MPP143')
!MPP143.positionName := #DEFENDER
!MPP143.number := 4
!insert (MP143, MPP143) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP144')
!MP144.booked := false
!MP144.goals := 1
!MP144.rating := 7
!insert (P147, MP144) into PlayerMatch
!insert (M24, MP144) into MatchMatchPlayer

!new MatchPlayerPosition('MPP144')
!MPP144.positionName := #FORWARD
!MPP144.number := 11
!insert (MP144, MPP144) into MatchPlayerMatchPlayerPosition
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 61 | 0.00% |
| Invariants Errors (Not included on General) | 1 | 4 | 25.00% |

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (4) `MatchReport::SumOfScoresEqualsGoals': FAILED.
```

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 22 | 0.00% |

## Generation 4 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 1996 | 0.00% |
| Multiplicities Errors | 0 | 427 | 0.00% |
| Invariants Errors | 0 | 16 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 61 | 0.00% |
| Invariants Errors (Not included on General) | 1 | 4 | 25.00% |

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (4) `MatchReport::SumOfScoresEqualsGoals': FAILED.
```

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 5 | 195 | 2.56% |

| Failed dates | 
|---| 
```
2026-05-14 16:30
```
```
2026-05-19 17:00
```
```
2026-05-16 20:30
```
```
2026-05-18 09:00
```
```
2026-05-22 15:00
```

# Generation 5
## Category baseline
```
!new Club('C59')
!C59.name := 'Sao Bento Futsal Clube'
!C59.homeGround := 'Ginasio Municipal do Ipiranga'
!C59.chairman := 'Renata Almeida'

!new Team('T71')
!T71.name := 'Sao Bento Women'
!insert (C59, T71) into ClubTeam

!new Team('T72')
!T72.name := 'Sao Bento U17'
!insert (C59, T72) into ClubTeam

!new Club('C60')
!C60.name := 'Krakow Vistula Futsal'
!C60.homeGround := 'Hala Wisla'
!C60.chairman := 'Piotr Nowak'

!new Team('T73')
!T73.name := 'Vistula Seniors'
!insert (C60, T73) into ClubTeam

!new Player('P235')
!P235.name := 'Camila Rocha'
!P235.age := 26
!P235.bestFoot := #RIGHT
!P235.phoneNumber := '+55 11 98888-1201'
!insert (T71, P235) into TeamPlayer

!new Position('POS361')
!POS361.positionName := #GOALKEEPER
!insert (P235, POS361) into PlayerPositions

!new TrainingObjective('TO259')
!TO259.areaToImprove := 'Quick throws to start counterattacks'
!TO259.startDate := '2026-06-01'
!TO259.endDate := '2026-06-30'
!TO259.success := true
!insert (TO259, P235) into TrainingObjectivePlayer

!new PlayerNotes('PN85')
!PN85.note := 'Excellent reflexes; improve communication on second-post coverage.'
!PN85.date := '2026-06-10'
!insert (P235, PN85) into PlayerPlayerNotes

!new Player('P236')
!P236.name := 'Bruna Nascimento'
!P236.age := 24
!P236.bestFoot := #LEFT
!P236.phoneNumber := '+55 11 97777-3434'
!insert (T71, P236) into TeamPlayer

!new Position('POS362')
!POS362.positionName := #DEFENDER
!insert (P236, POS362) into PlayerPositions

!new Position('POS363')
!POS363.positionName := #MIDFIELDER
!insert (P236, POS363) into PlayerPositions

!new TrainingObjective('TO260')
!TO260.areaToImprove := 'Passing under pressure along the sideline'
!TO260.startDate := '2026-06-03'
!TO260.endDate := '2026-07-03'
!TO260.success := false
!insert (TO260, P236) into TrainingObjectivePlayer

!new Player('P237')
!P237.name := 'Leticia Santos'
!P237.age := 23
!P237.bestFoot := #BOTH
!P237.phoneNumber := '+55 11 96666-5566'
!insert (T71, P237) into TeamPlayer

!new Position('POS364')
!POS364.positionName := #MIDFIELDER
!insert (P237, POS364) into PlayerPositions

!new TrainingObjective('TO261')
!TO261.areaToImprove := 'Receiving on the half-turn'
!TO261.startDate := '2026-06-02'
!TO261.endDate := '2026-06-25'
!TO261.success := true
!insert (TO261, P237) into TrainingObjectivePlayer

!new Player('P238')
!P238.name := 'Yasmin Oliveira'
!P238.age := 22
!P238.bestFoot := #RIGHT
!P238.phoneNumber := '+55 11 95555-7788'
!insert (T71, P238) into TeamPlayer

!new Position('POS365')
!POS365.positionName := #FORWARD
!insert (P238, POS365) into PlayerPositions

!new Position('POS366')
!POS366.positionName := #MIDFIELDER
!insert (P238, POS366) into PlayerPositions

!new TrainingObjective('TO262')
!TO262.areaToImprove := 'First-time finishing from cut-backs'
!TO262.startDate := '2026-06-04'
!TO262.endDate := '2026-07-04'
!TO262.success := true
!insert (TO262, P238) into TrainingObjectivePlayer

!new Player('P239')
!P239.name := 'Rafaela Costa'
!P239.age := 27
!P239.bestFoot := #RIGHT
!P239.phoneNumber := '+55 11 94444-9900'
!insert (T71, P239) into TeamPlayer

!new Position('POS367')
!POS367.positionName := #DEFENDER
!insert (P239, POS367) into PlayerPositions

!new TrainingObjective('TO263')
!TO263.areaToImprove := 'Avoiding tactical fouls when beaten'
!TO263.startDate := '2026-06-01'
!TO263.endDate := '2026-06-30'
!TO263.success := true
!insert (TO263, P239) into TrainingObjectivePlayer

!new Player('P240')
!P240.name := 'Debora Lima'
!P240.age := 21
!P240.bestFoot := #LEFT
!P240.phoneNumber := '+55 11 93333-1122'
!insert (T71, P240) into TeamPlayer

!new Position('POS368')
!POS368.positionName := #FORWARD
!insert (P240, POS368) into PlayerPositions

!new Position('POS369')
!POS369.positionName := #DEFENDER
!insert (P240, POS369) into PlayerPositions

!new Position('POS370')
!POS370.positionName := #MIDFIELDER
!insert (P240, POS370) into PlayerPositions

!new TrainingObjective('TO264')
!TO264.areaToImprove := 'Decision-making on 2v1 breaks'
!TO264.startDate := '2026-06-05'
!TO264.endDate := '2026-07-05'
!TO264.success := false
!insert (TO264, P240) into TrainingObjectivePlayer

!new Player('P241')
!P241.name := 'Zofia Kowalska'
!P241.age := 25
!P241.bestFoot := #RIGHT
!P241.phoneNumber := '+48 512 440 101'
!insert (T73, P241) into TeamPlayer

!new Position('POS371')
!POS371.positionName := #GOALKEEPER
!insert (P241, POS371) into PlayerPositions

!new Position('POS372')
!POS372.positionName := #DEFENDER
!insert (P241, POS372) into PlayerPositions

!new TrainingObjective('TO265')
!TO265.areaToImprove := 'Playing out with feet under high press'
!TO265.startDate := '2026-06-01'
!TO265.endDate := '2026-06-28'
!TO265.success := true
!insert (TO265, P241) into TrainingObjectivePlayer

!new Player('P242')
!P242.name := 'Maja Zielinska'
!P242.age := 24
!P242.bestFoot := #LEFT
!P242.phoneNumber := '+48 607 220 909'
!insert (T73, P242) into TeamPlayer

!new Position('POS373')
!POS373.positionName := #DEFENDER
!insert (P242, POS373) into PlayerPositions

!new TrainingObjective('TO266')
!TO266.areaToImprove := '1v1 defending without diving in'
!TO266.startDate := '2026-06-02'
!TO266.endDate := '2026-06-29'
!TO266.success := false
!insert (TO266, P242) into TrainingObjectivePlayer

!new Player('P243')
!P243.name := 'Katarzyna Nowicka'
!P243.age := 26
!P243.bestFoot := #BOTH
!P243.phoneNumber := '+48 695 818 777'
!insert (T73, P243) into TeamPlayer

!new Position('POS374')
!POS374.positionName := #MIDFIELDER
!insert (P243, POS374) into PlayerPositions

!new Position('POS375')
!POS375.positionName := #FORWARD
!insert (P243, POS375) into PlayerPositions

!new TrainingObjective('TO267')
!TO267.areaToImprove := 'Late runs to the second post'
!TO267.startDate := '2026-06-03'
!TO267.endDate := '2026-07-03'
!TO267.success := true
!insert (TO267, P243) into TrainingObjectivePlayer

!new Player('P244')
!P244.name := 'Oliwia Wisniewska'
!P244.age := 23
!P244.bestFoot := #RIGHT
!P244.phoneNumber := '+48 730 111 505'
!insert (T73, P244) into TeamPlayer

!new Position('POS376')
!POS376.positionName := #MIDFIELDER
!insert (P244, POS376) into PlayerPositions

!new TrainingObjective('TO268')
!TO268.areaToImprove := 'Cover shadow positioning in mid-block'
!TO268.startDate := '2026-06-04'
!TO268.endDate := '2026-07-04'
!TO268.success := true
!insert (TO268, P244) into TrainingObjectivePlayer

!new PlayerNotes('PN86')
!PN86.note := 'Good tempo control; shoot earlier when the lane opens.'
!PN86.date := '2026-06-12'
!insert (P244, PN86) into PlayerPlayerNotes

!new Player('P245')
!P245.name := 'Natalia Dabrowska'
!P245.age := 22
!P245.bestFoot := #RIGHT
!P245.phoneNumber := '+48 501 909 808'
!insert (T73, P245) into TeamPlayer

!new Position('POS377')
!POS377.positionName := #FORWARD
!insert (P245, POS377) into PlayerPositions

!new TrainingObjective('TO269')
!TO269.areaToImprove := 'Composure in 1v1 with the keeper'
!TO269.startDate := '2026-06-05'
!TO269.endDate := '2026-07-05'
!TO269.success := false
!insert (TO269, P245) into TrainingObjectivePlayer

!new Player('P246')
!P246.name := 'Agnieszka Lewandowska'
!P246.age := 27
!P246.bestFoot := #LEFT
!P246.phoneNumber := '+48 668 330 221'
!insert (T73, P246) into TeamPlayer

!new Position('POS378')
!POS378.positionName := #DEFENDER
!insert (P246, POS378) into PlayerPositions

!new Position('POS379')
!POS379.positionName := #MIDFIELDER
!insert (P246, POS379) into PlayerPositions

!new Position('POS380')
!POS380.positionName := #FORWARD
!insert (P246, POS380) into PlayerPositions

!new TrainingObjective('TO270')
!TO270.areaToImprove := 'Fast switches from right to left'
!TO270.startDate := '2026-06-01'
!TO270.endDate := '2026-06-30'
!TO270.success := true
!insert (TO270, P246) into TrainingObjectivePlayer

!new Player('P247')
!P247.name := 'Joao Pedro Silva'
!P247.age := 16
!P247.bestFoot := #RIGHT
!P247.phoneNumber := '+55 11 92222-0101'
!insert (T72, P247) into TeamPlayer

!new Position('POS381')
!POS381.positionName := #MIDFIELDER
!insert (P247, POS381) into PlayerPositions

!new TrainingObjective('TO271')
!TO271.areaToImprove := 'Scanning before receiving'
!TO271.startDate := '2026-06-01'
!TO271.endDate := '2026-06-21'
!TO271.success := true
!insert (TO271, P247) into TrainingObjectivePlayer

!new Player('P248')
!P248.name := 'Mateus Ferreira'
!P248.age := 17
!P248.bestFoot := #LEFT
!P248.phoneNumber := '+55 11 91111-0202'
!insert (T72, P248) into TeamPlayer

!new Position('POS382')
!POS382.positionName := #DEFENDER
!insert (P248, POS382) into PlayerPositions

!new Position('POS383')
!POS383.positionName := #MIDFIELDER
!insert (P248, POS383) into PlayerPositions

!new TrainingObjective('TO272')
!TO272.areaToImprove := 'First touch away from pressure'
!TO272.startDate := '2026-06-02'
!TO272.endDate := '2026-06-30'
!TO272.success := false
!insert (TO272, P248) into TrainingObjectivePlayer

!new Player('P249')
!P249.name := 'Luana Ribeiro'
!P249.age := 16
!P249.bestFoot := #BOTH
!P249.phoneNumber := '+55 11 90000-0303'
!insert (T72, P249) into TeamPlayer

!new Position('POS384')
!POS384.positionName := #FORWARD
!insert (P249, POS384) into PlayerPositions

!new TrainingObjective('TO273')
!TO273.areaToImprove := 'Timing runs behind the last defender'
!TO273.startDate := '2026-06-03'
!TO273.endDate := '2026-07-03'
!TO273.success := true
!insert (TO273, P249) into TrainingObjectivePlayer

!new TrainingSession('TS92')
!TS92.date := '2026-06-08 19:00'
!TS92.location := 'Ginasio Municipal do Ipiranga - Court A'
!TS92.purpose := 'Press resistance + set plays (futsal)'
!insert (T71, TS92) into TeamTraining

!new TrainingNotes('TN143')
!TN143.note := 'Better spacing in build-up; pivot showed well between lines.'
!TN143.date := '2026-06-08'
!insert (TS92, TN143) into TrainingTrainingNotes

!new TrainingNotes('TN144')
!TN144.note := 'Set play: screen at second post created a clean finish.'
!TN144.date := '2026-06-08'
!insert (TS92, TN144) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA68')
!FA68.reason := 'Public transport delay due to city parade.'
!insert (TS92, FA68) into TrainingFailded
!insert (FA68, P236) into FailedPlayer

!new TrainingSession('TS93')
!TS93.date := '2026-06-09 20:15'
!TS93.location := 'Hala Wisla - Court 2'
!TS93.purpose := 'Mid-block organization + penalties'
!insert (T73, TS93) into TeamTraining

!new TrainingNotes('TN145')
!TN145.note := 'Mid-block held shape; close the passing lane into the pivot sooner.'
!TN145.date := '2026-06-09'
!insert (TS93, TN145) into TrainingTrainingNotes

!new TrainingNotes('TN146')
!TN146.note := 'Penalty routine: fixed run-up and pick a side early.'
!TN146.date := '2026-06-09'
!insert (TS93, TN146) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA69')
!FA69.reason := 'Work shift overran; arrived after session.'
!insert (TS93, FA69) into TrainingFailded
!insert (FA69, P245) into FailedPlayer

!new TrainingSession('TS94')
!TS94.date := '2026-06-07 16:30'
!TS94.location := 'Sao Bento Academy - Court B'
!TS94.purpose := 'Technical rondos + quick finishing'
!insert (T72, TS94) into TeamTraining

!new TrainingNotes('TN147')
!TN147.note := 'Rondos: encourage quicker third-man support angles.'
!TN147.date := '2026-06-07'
!insert (TS94, TN147) into TrainingTrainingNotes

!new Competition('COMP25')
!COMP25.name := 'Vistula-Sao Bento Two-Leg Series'
!COMP25.type := 'International futsal friendly (home and away)'

!new Match('M41')
!M41.date := '2026-06-15 20:00'
!M41.homeAway := true
!insert (COMP25, M41) into CompetitionMatch
!insert (T71, M41) into LocalMatch
!insert (T73, M41) into VisitorMatch

!new MatchReport('MR40')
!MR40.duration := 40
!MR40.scoreLocal := 2
!MR40.scoreVisitor := 2
!insert (M41, MR40) into MatchMatchReport

!new MatchNote('MN51')
!MN51.note := 'Fast court; both teams used quick one-touch combinations.'
!MN51.date := '2026-06-15'
!insert (M41, MN51) into MatchMatchNote

!new MatchEvent('ME230')
!ME230.eventType := #GOAL
!ME230.time := 6
!insert (M41, ME230) into MatchMatchEvent

!new MatchEvent('ME231')
!ME231.eventType := #FOUL
!ME231.time := 10
!insert (M41, ME231) into MatchMatchEvent

!new MatchEvent('ME232')
!ME232.eventType := #GOAL
!ME232.time := 14
!insert (M41, ME232) into MatchMatchEvent

!new MatchEvent('ME233')
!ME233.eventType := #CORNER
!ME233.time := 19
!insert (M41, ME233) into MatchMatchEvent

!new MatchEvent('ME234')
!ME234.eventType := #OFFSIDE
!ME234.time := 23
!insert (M41, ME234) into MatchMatchEvent

!new MatchEvent('ME235')
!ME235.eventType := #PENALTY
!ME235.time := 28
!insert (M41, ME235) into MatchMatchEvent

!new MatchEvent('ME236')
!ME236.eventType := #GOAL
!ME236.time := 31
!insert (M41, ME236) into MatchMatchEvent

!new MatchEvent('ME237')
!ME237.eventType := #GOAL
!ME237.time := 38
!insert (M41, ME237) into MatchMatchEvent

!new MatchPlayer('MP224')
!MP224.booked := false
!MP224.goals := 0
!MP224.rating := 7
!insert (P235, MP224) into PlayerMatch
!insert (M41, MP224) into MatchMatchPlayer

!new MatchPlayerPosition('MPP224')
!MPP224.positionName := #GOALKEEPER
!MPP224.number := 1
!insert (MP224, MPP224) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP225')
!MP225.booked := true
!MP225.goals := 0
!MP225.rating := 6
!insert (P236, MP225) into PlayerMatch
!insert (M41, MP225) into MatchMatchPlayer

!new MatchPlayerPosition('MPP225')
!MPP225.positionName := #DEFENDER
!MPP225.number := 4
!insert (MP225, MPP225) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP226')
!MP226.booked := false
!MP226.goals := 1
!MP226.rating := 7
!insert (P237, MP226) into PlayerMatch
!insert (M41, MP226) into MatchMatchPlayer

!new MatchPlayerPosition('MPP226')
!MPP226.positionName := #MIDFIELDER
!MPP226.number := 8
!insert (MP226, MPP226) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP227')
!MP227.booked := false
!MP227.goals := 1
!MP227.rating := 8
!insert (P238, MP227) into PlayerMatch
!insert (M41, MP227) into MatchMatchPlayer

!new MatchPlayerPosition('MPP227')
!MPP227.positionName := #FORWARD
!MPP227.number := 9
!insert (MP227, MPP227) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP228')
!MP228.booked := false
!MP228.goals := 0
!MP228.rating := 6
!insert (P239, MP228) into PlayerMatch
!insert (M41, MP228) into MatchMatchPlayer

!new MatchPlayerPosition('MPP228')
!MPP228.positionName := #DEFENDER
!MPP228.number := 5
!insert (MP228, MPP228) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP229')
!MP229.booked := false
!MP229.goals := 0
!MP229.rating := 7
!insert (P241, MP229) into PlayerMatch
!insert (M41, MP229) into MatchMatchPlayer

!new MatchPlayerPosition('MPP229')
!MPP229.positionName := #GOALKEEPER
!MPP229.number := 1
!insert (MP229, MPP229) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP230')
!MP230.booked := false
!MP230.goals := 1
!MP230.rating := 7
!insert (P243, MP230) into PlayerMatch
!insert (M41, MP230) into MatchMatchPlayer

!new MatchPlayerPosition('MPP230')
!MPP230.positionName := #FORWARD
!MPP230.number := 10
!insert (MP230, MPP230) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP231')
!MP231.booked := false
!MP231.goals := 0
!MP231.rating := 6
!insert (P244, MP231) into PlayerMatch
!insert (M41, MP231) into MatchMatchPlayer

!new MatchPlayerPosition('MPP231')
!MPP231.positionName := #MIDFIELDER
!MPP231.number := 6
!insert (MP231, MPP231) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP232')
!MP232.booked := false
!MP232.goals := 1
!MP232.rating := 7
!insert (P245, MP232) into PlayerMatch
!insert (M41, MP232) into MatchMatchPlayer

!new MatchPlayerPosition('MPP232')
!MPP232.positionName := #FORWARD
!MPP232.number := 9
!insert (MP232, MPP232) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP233')
!MP233.booked := true
!MP233.goals := 0
!MP233.rating := 6
!insert (P242, MP233) into PlayerMatch
!insert (M41, MP233) into MatchMatchPlayer

!new MatchPlayerPosition('MPP233')
!MPP233.positionName := #DEFENDER
!MPP233.number := 3
!insert (MP233, MPP233) into MatchPlayerMatchPlayerPosition

!new Match('M42')
!M42.date := '2026-06-22 19:30'
!M42.homeAway := true
!insert (COMP25, M42) into CompetitionMatch
!insert (T73, M42) into LocalMatch
!insert (T71, M42) into VisitorMatch

!new MatchReport('MR41')
!MR41.duration := 40
!MR41.scoreLocal := 3
!MR41.scoreVisitor := 1
!insert (M42, MR41) into MatchMatchReport

!new MatchNote('MN52')
!MN52.note := 'Tighter defending in the second half; local side managed the clock well.'
!MN52.date := '2026-06-22'
!insert (M42, MN52) into MatchMatchNote

!new MatchEvent('ME238')
!ME238.eventType := #GOAL
!ME238.time := 4
!insert (M42, ME238) into MatchMatchEvent

!new MatchEvent('ME239')
!ME239.eventType := #GOAL
!ME239.time := 11
!insert (M42, ME239) into MatchMatchEvent

!new MatchEvent('ME240')
!ME240.eventType := #FOUL
!ME240.time := 16
!insert (M42, ME240) into MatchMatchEvent

!new MatchEvent('ME241')
!ME241.eventType := #CORNER
!ME241.time := 20
!insert (M42, ME241) into MatchMatchEvent

!new MatchEvent('ME242')
!ME242.eventType := #GOAL
!ME242.time := 26
!insert (M42, ME242) into MatchMatchEvent

!new MatchEvent('ME243')
!ME243.eventType := #OFFSIDE
!ME243.time := 29
!insert (M42, ME243) into MatchMatchEvent

!new MatchEvent('ME244')
!ME244.eventType := #PENALTY
!ME244.time := 34
!insert (M42, ME244) into MatchMatchEvent

!new MatchEvent('ME245')
!ME245.eventType := #GOAL
!ME245.time := 37
!insert (M42, ME245) into MatchMatchEvent

!new MatchPlayer('MP234')
!MP234.booked := false
!MP234.goals := 0
!MP234.rating := 8
!insert (P241, MP234) into PlayerMatch
!insert (M42, MP234) into MatchMatchPlayer

!new MatchPlayerPosition('MPP234')
!MPP234.positionName := #GOALKEEPER
!MPP234.number := 1
!insert (MP234, MPP234) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP235')
!MP235.booked := false
!MP235.goals := 0
!MP235.rating := 6
!insert (P242, MP235) into PlayerMatch
!insert (M42, MP235) into MatchMatchPlayer

!new MatchPlayerPosition('MPP235')
!MPP235.positionName := #DEFENDER
!MPP235.number := 3
!insert (MP235, MPP235) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP236')
!MP236.booked := false
!MP236.goals := 1
!MP236.rating := 7
!insert (P243, MP236) into PlayerMatch
!insert (M42, MP236) into MatchMatchPlayer

!new MatchPlayerPosition('MPP236')
!MPP236.positionName := #FORWARD
!MPP236.number := 10
!insert (MP236, MPP236) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP237')
!MP237.booked := false
!MP237.goals := 1
!MP237.rating := 8
!insert (P244, MP237) into PlayerMatch
!insert (M42, MP237) into MatchMatchPlayer

!new MatchPlayerPosition('MPP237')
!MPP237.positionName := #MIDFIELDER
!MPP237.number := 6
!insert (MP237, MPP237) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP238')
!MP238.booked := true
!MP238.goals := 1
!MP238.rating := 7
!insert (P246, MP238) into PlayerMatch
!insert (M42, MP238) into MatchMatchPlayer

!new MatchPlayerPosition('MPP238')
!MPP238.positionName := #MIDFIELDER
!MPP238.number := 7
!insert (MP238, MPP238) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP239')
!MP239.booked := false
!MP239.goals := 0
!MP239.rating := 6
!insert (P245, MP239) into PlayerMatch
!insert (M42, MP239) into MatchMatchPlayer

!new MatchPlayerPosition('MPP239')
!MPP239.positionName := #FORWARD
!MPP239.number := 9
!insert (MP239, MPP239) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP240')
!MP240.booked := false
!MP240.goals := 0
!MP240.rating := 7
!insert (P235, MP240) into PlayerMatch
!insert (M42, MP240) into MatchMatchPlayer

!new MatchPlayerPosition('MPP240')
!MPP240.positionName := #GOALKEEPER
!MPP240.number := 1
!insert (MP240, MPP240) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP241')
!MP241.booked := false
!MP241.goals := 0
!MP241.rating := 6
!insert (P236, MP241) into PlayerMatch
!insert (M42, MP241) into MatchMatchPlayer

!new MatchPlayerPosition('MPP241')
!MPP241.positionName := #DEFENDER
!MPP241.number := 4
!insert (MP241, MPP241) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP242')
!MP242.booked := false
!MP242.goals := 0
!MP242.rating := 6
!insert (P237, MP242) into PlayerMatch
!insert (M42, MP242) into MatchMatchPlayer

!new MatchPlayerPosition('MPP242')
!MPP242.positionName := #MIDFIELDER
!MPP242.number := 8
!insert (MP242, MPP242) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP243')
!MP243.booked := false
!MP243.goals := 1
!MP243.rating := 7
!insert (P238, MP243) into PlayerMatch
!insert (M42, MP243) into MatchMatchPlayer

!new MatchPlayerPosition('MPP243')
!MPP243.positionName := #FORWARD
!MPP243.number := 9
!insert (MP243, MPP243) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP244')
!MP244.booked := true
!MP244.goals := 0
!MP244.rating := 6
!insert (P240, MP244) into PlayerMatch
!insert (M42, MP244) into MatchMatchPlayer

!new MatchPlayerPosition('MPP244')
!MPP244.positionName := #FORWARD
!MPP244.number := 11
!insert (MP244, MPP244) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP245')
!MP245.booked := false
!MP245.goals := 0
!MP245.rating := 6
!insert (P239, MP245) into PlayerMatch
!insert (M42, MP245) into MatchMatchPlayer

!new MatchPlayerPosition('MPP245')
!MPP245.positionName := #DEFENDER
!MPP245.number := 5
!insert (MP245, MPP245) into MatchPlayerMatchPlayerPosition
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 637 | 0.00% |
| Multiplicities Errors | 0 | 163 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 5 | 44 | 11.36% |

| Failed dates | 
|---| 
```
2026-06-08 19:00
```
```
2026-06-09 20:15
```
```
2026-06-07 16:30
```
```
2026-06-15 20:00
```
```
2026-06-22 19:30
```

## Category boundary
```
!new Club('C53')
!C53.name := 'Lagos Islanders FC'
!C53.homeGround := 'Tafawa Balewa Training Bowl (Lagos)'
!C53.chairman := 'Ifeanyi Okoye'

!new Team('T65')
!T65.name := 'Islanders Women'
!insert (C53, T65) into ClubTeam

!new Club('C54')
!C54.name := 'Jeju Halla United'
!C54.homeGround := 'Halla Seogwipo Field (Jeju)'
!C54.chairman := 'Kim Min-seo'

!new Team('T66')
!T66.name := 'Halla City'
!insert (C54, T66) into ClubTeam

!new Player('P215')
!P215.name := 'Zainab Adeyemi'
!P215.age := 17
!P215.bestFoot := #RIGHT
!P215.phoneNumber := '+234-803-111-2200'
!insert (T65, P215) into TeamPlayer

!new Position('POS328')
!POS328.positionName := #FORWARD
!insert (P215, POS328) into PlayerPositions

!new TrainingObjective('TO232')
!TO232.areaToImprove := 'Timing runs to stay onside'
!TO232.startDate := '2026-05-20'
!TO232.endDate := '2026-06-20'
!TO232.success := false
!insert (TO232, P215) into TrainingObjectivePlayer

!new Player('P216')
!P216.name := 'Chidinma Nwosu'
!P216.age := 29
!P216.bestFoot := #LEFT
!P216.phoneNumber := '+234-806-222-3300'
!insert (T65, P216) into TeamPlayer

!new Position('POS329')
!POS329.positionName := #DEFENDER
!insert (P216, POS329) into PlayerPositions

!new Position('POS330')
!POS330.positionName := #MIDFIELDER
!insert (P216, POS330) into PlayerPositions

!new Position('POS331')
!POS331.positionName := #FORWARD
!insert (P216, POS331) into PlayerPositions

!new TrainingObjective('TO233')
!TO233.areaToImprove := 'Cleaner tackling technique'
!TO233.startDate := '2026-05-18'
!TO233.endDate := '2026-06-18'
!TO233.success := true
!insert (TO233, P216) into TrainingObjectivePlayer

!new TrainingObjective('TO234')
!TO234.areaToImprove := 'Improve weak-side scanning'
!TO234.startDate := '2026-05-18'
!TO234.endDate := '2026-06-30'
!TO234.success := false
!insert (TO234, P216) into TrainingObjectivePlayer

!new PlayerNotes('PN75')
!PN75.note := 'Leadership strong; needs to avoid unnecessary fouls near the box.'
!PN75.date := '2026-05-25'
!insert (P216, PN75) into PlayerPlayerNotes

!new Player('P217')
!P217.name := 'Halima Sule'
!P217.age := 41
!P217.bestFoot := #BOTH
!P217.phoneNumber := '+234-809-333-4400'
!insert (T65, P217) into TeamPlayer

!new Position('POS332')
!POS332.positionName := #MIDFIELDER
!insert (P217, POS332) into PlayerPositions

!new Position('POS333')
!POS333.positionName := #DEFENDER
!insert (P217, POS333) into PlayerPositions

!new TrainingObjective('TO235')
!TO235.areaToImprove := 'Manage tempo and conserve energy late game'
!TO235.startDate := '2026-05-15'
!TO235.endDate := '2026-06-15'
!TO235.success := false
!insert (TO235, P217) into TrainingObjectivePlayer

!new PlayerNotes('PN76')
!PN76.note := 'Excellent game management in training scrimmages.'
!PN76.date := '2026-05-22'
!insert (P217, PN76) into PlayerPlayerNotes

!new PlayerNotes('PN77')
!PN77.note := 'Requested lighter load due to minor knee soreness.'
!PN77.date := '2026-05-29'
!insert (P217, PN77) into PlayerPlayerNotes

!new Player('P218')
!P218.name := 'Amaka Eze'
!P218.age := 22
!P218.bestFoot := #RIGHT
!P218.phoneNumber := '+234-807-444-5500'
!insert (T65, P218) into TeamPlayer

!new Position('POS334')
!POS334.positionName := #GOALKEEPER
!insert (P218, POS334) into PlayerPositions

!new TrainingObjective('TO236')
!TO236.areaToImprove := 'Claiming corners under contact'
!TO236.startDate := '2026-05-10'
!TO236.endDate := '2026-06-10'
!TO236.success := false
!insert (TO236, P218) into TrainingObjectivePlayer

!new TrainingObjective('TO237')
!TO237.areaToImprove := 'Quicker throws to start counters'
!TO237.startDate := '2026-05-10'
!TO237.endDate := '2026-06-05'
!TO237.success := true
!insert (TO237, P218) into TrainingObjectivePlayer

!new TrainingObjective('TO238')
!TO238.areaToImprove := 'Footwork on near-post shots'
!TO238.startDate := '2026-05-10'
!TO238.endDate := '2026-06-20'
!TO238.success := false
!insert (TO238, P218) into TrainingObjectivePlayer

!new Player('P219')
!P219.name := 'Folake Ogunleye'
!P219.age := 19
!P219.bestFoot := #LEFT
!P219.phoneNumber := '+234-810-555-6600'
!insert (T65, P219) into TeamPlayer

!new Position('POS335')
!POS335.positionName := #DEFENDER
!insert (P219, POS335) into PlayerPositions

!new Position('POS336')
!POS336.positionName := #MIDFIELDER
!insert (P219, POS336) into PlayerPositions

!new TrainingObjective('TO239')
!TO239.areaToImprove := 'First-touch when receiving under press'
!TO239.startDate := '2026-05-21'
!TO239.endDate := '2026-06-21'
!TO239.success := false
!insert (TO239, P219) into TrainingObjectivePlayer

!new PlayerNotes('PN78')
!PN78.note := 'Consistent in duels; improve passing range.'
!PN78.date := '2026-05-27'
!insert (P219, PN78) into PlayerPlayerNotes

!new Player('P220')
!P220.name := 'Park Ji-won'
!P220.age := 20
!P220.bestFoot := #RIGHT
!P220.phoneNumber := '+82-10-1200-3400'
!insert (T66, P220) into TeamPlayer

!new Position('POS337')
!POS337.positionName := #MIDFIELDER
!insert (P220, POS337) into PlayerPositions

!new TrainingObjective('TO240')
!TO240.areaToImprove := 'Press resistance in central areas'
!TO240.startDate := '2026-05-12'
!TO240.endDate := '2026-06-12'
!TO240.success := false
!insert (TO240, P220) into TrainingObjectivePlayer

!new Player('P221')
!P221.name := 'Lee Seo-yeon'
!P221.age := 27
!P221.bestFoot := #BOTH
!P221.phoneNumber := '+82-10-2200-4500'
!insert (T66, P221) into TeamPlayer

!new Position('POS338')
!POS338.positionName := #DEFENDER
!insert (P221, POS338) into PlayerPositions

!new Position('POS339')
!POS339.positionName := #MIDFIELDER
!insert (P221, POS339) into PlayerPositions

!new Position('POS340')
!POS340.positionName := #FORWARD
!insert (P221, POS340) into PlayerPositions

!new TrainingObjective('TO241')
!TO241.areaToImprove := 'Avoiding offsides on diagonal runs'
!TO241.startDate := '2026-05-12'
!TO241.endDate := '2026-05-30'
!TO241.success := true
!insert (TO241, P221) into TrainingObjectivePlayer

!new TrainingObjective('TO242')
!TO242.areaToImprove := 'Cleaner defensive clearances under pressure'
!TO242.startDate := '2026-05-12'
!TO242.endDate := '2026-06-20'
!TO242.success := false
!insert (TO242, P221) into TrainingObjectivePlayer

!new PlayerNotes('PN79')
!PN79.note := 'Versatile role-switching; keep instructions simple during transitions.'
!PN79.date := '2026-05-26'
!insert (P221, PN79) into PlayerPlayerNotes

!new Player('P222')
!P222.name := 'Choi Min-jun'
!P222.age := 15
!P222.bestFoot := #LEFT
!P222.phoneNumber := '+82-10-3300-5600'
!insert (T66, P222) into TeamPlayer

!new Position('POS341')
!POS341.positionName := #FORWARD
!insert (P222, POS341) into PlayerPositions

!new Position('POS342')
!POS342.positionName := #MIDFIELDER
!insert (P222, POS342) into PlayerPositions

!new TrainingObjective('TO243')
!TO243.areaToImprove := 'Finishing composure in 1v1'
!TO243.startDate := '2026-05-14'
!TO243.endDate := '2026-06-14'
!TO243.success := false
!insert (TO243, P222) into TrainingObjectivePlayer

!new Player('P223')
!P223.name := 'Kang Hye-jin'
!P223.age := 33
!P223.bestFoot := #RIGHT
!P223.phoneNumber := '+82-10-4400-6700'
!insert (T66, P223) into TeamPlayer

!new Position('POS343')
!POS343.positionName := #GOALKEEPER
!insert (P223, POS343) into PlayerPositions

!new TrainingObjective('TO244')
!TO244.areaToImprove := 'Handling low driven shots'
!TO244.startDate := '2026-05-01'
!TO244.endDate := '2026-06-01'
!TO244.success := true
!insert (TO244, P223) into TrainingObjectivePlayer

!new TrainingObjective('TO245')
!TO245.areaToImprove := 'Commanding box on corners'
!TO245.startDate := '2026-05-01'
!TO245.endDate := '2026-06-20'
!TO245.success := false
!insert (TO245, P223) into TrainingObjectivePlayer

!new TrainingObjective('TO246')
!TO246.areaToImprove := 'Distribution to fullbacks'
!TO246.startDate := '2026-05-01'
!TO246.endDate := '2026-05-25'
!TO246.success := true
!insert (TO246, P223) into TrainingObjectivePlayer

!new TrainingObjective('TO247')
!TO247.areaToImprove := 'Communication under crowd noise'
!TO247.startDate := '2026-05-15'
!TO247.endDate := '2026-06-30'
!TO247.success := false
!insert (TO247, P223) into TrainingObjectivePlayer

!new PlayerNotes('PN80')
!PN80.note := 'Strong shot-stopping; must call earlier on crosses.'
!PN80.date := '2026-05-18'
!insert (P223, PN80) into PlayerPlayerNotes

!new PlayerNotes('PN81')
!PN81.note := 'Improved throws; still rushed under pressure.'
!PN81.date := '2026-05-31'
!insert (P223, PN81) into PlayerPlayerNotes

!new Player('P224')
!P224.name := 'Jeong Da-eun'
!P224.age := 24
!P224.bestFoot := #LEFT
!P224.phoneNumber := '+82-10-5500-7800'
!insert (T66, P224) into TeamPlayer

!new Position('POS344')
!POS344.positionName := #DEFENDER
!insert (P224, POS344) into PlayerPositions

!new Position('POS345')
!POS345.positionName := #MIDFIELDER
!insert (P224, POS345) into PlayerPositions

!new TrainingObjective('TO248')
!TO248.areaToImprove := 'Reduce fouls when late to challenges'
!TO248.startDate := '2026-05-16'
!TO248.endDate := '2026-06-16'
!TO248.success := false
!insert (TO248, P224) into TrainingObjectivePlayer

!new TrainingSession('TS84')
!TS84.date := '2026-05-30'
!TS84.location := 'Tafawa Balewa Community Pitch (Lagos)'
!TS84.purpose := 'Compact defending and quick counters'
!insert (T65, TS84) into TeamTraining

!new TrainingNotes('TN133')
!TN133.note := 'Focused on defensive spacing; limited finishing work.'
!TN133.date := '2026-05-30'
!insert (TS84, TN133) into TrainingTrainingNotes

!new TrainingSession('TS85')
!TS85.date := '2026-05-27'
!TS85.location := 'Halla Seogwipo Field - Pitch A'
!TS85.purpose := 'Set-piece routines and marking assignments'
!insert (T66, TS85) into TeamTraining

!new TrainingNotes('TN134')
!TN134.note := 'Corner routines practiced; emphasis on second-ball reactions.'
!TN134.date := '2026-05-27'
!insert (TS85, TN134) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA58')
!FA58.reason := 'Ferry delay due to fog'
!insert (TS85, FA58) into TrainingFailded
!insert (FA58, P220) into FailedPlayer

!new TrainingFailedToAttend('FA59')
!FA59.reason := 'Work overtime shift'
!insert (TS85, FA59) into TrainingFailded
!insert (FA59, P224) into FailedPlayer

!new TrainingSession('TS86')
!TS86.date := '2026-05-29'
!TS86.location := 'Halla Seogwipo Field - Pitch B'
!TS86.purpose := 'High press triggers and offside line'
!insert (T66, TS86) into TeamTraining

!new TrainingNotes('TN135')
!TN135.note := 'Press timing improved; midfield stepped together.'
!TN135.date := '2026-05-29'
!insert (TS86, TN135) into TrainingTrainingNotes

!new TrainingNotes('TN136')
!TN136.note := 'Offside line drifted late; corrected in walkthrough.'
!TN136.date := '2026-05-29'
!insert (TS86, TN136) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA60')
!FA60.reason := 'Minor hamstring tightness (precautionary rest)'
!insert (TS86, FA60) into TrainingFailded
!insert (FA60, P222) into FailedPlayer

!new TrainingSession('TS87')
!TS87.date := '2026-05-31'
!TS87.location := 'Halla Seogwipo Field - Main'
!TS87.purpose := 'Match rehearsal and finishing patterns'
!insert (T66, TS87) into TeamTraining

!new TrainingNotes('TN137')
!TN137.note := 'Finishing patterns rehearsed; keep shots low in windy conditions.'
!TN137.date := '2026-05-31'
!insert (TS87, TN137) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA61')
!FA61.reason := 'Family obligation'
!insert (TS87, FA61) into TrainingFailded
!insert (FA61, P221) into FailedPlayer

!new TrainingFailedToAttend('FA62')
!FA62.reason := 'Late arrival due to traffic; counted as non-attendance'
!insert (TS87, FA62) into TrainingFailded
!insert (FA62, P220) into FailedPlayer

!new Competition('COMP23')
!COMP23.name := 'Coastal Cities Exchange Friendly'
!COMP23.type := 'International Friendly'

!new Match('M36')
!M36.date := '2026-06-01'
!M36.homeAway := true
!insert (COMP23, M36) into CompetitionMatch
!insert (T65, M36) into LocalMatch
!insert (T66, M36) into VisitorMatch

!new MatchReport('MR35')
!MR35.duration := 96
!MR35.scoreLocal := 1
!MR35.scoreVisitor := 0
!insert (M36, MR35) into MatchMatchReport

!new MatchEvent('ME200')
!ME200.eventType := #FOUL
!ME200.time := 5
!insert (M36, ME200) into MatchMatchEvent

!new MatchEvent('ME201')
!ME201.eventType := #OFFSIDE
!ME201.time := 11
!insert (M36, ME201) into MatchMatchEvent

!new MatchEvent('ME202')
!ME202.eventType := #CORNER
!ME202.time := 19
!insert (M36, ME202) into MatchMatchEvent

!new MatchEvent('ME203')
!ME203.eventType := #FOUL
!ME203.time := 44
!insert (M36, ME203) into MatchMatchEvent

!new MatchEvent('ME204')
!ME204.eventType := #PENALTY
!ME204.time := 57
!insert (M36, ME204) into MatchMatchEvent

!new MatchEvent('ME205')
!ME205.eventType := #CORNER
!ME205.time := 63
!insert (M36, ME205) into MatchMatchEvent

!new MatchEvent('ME206')
!ME206.eventType := #OFFSIDE
!ME206.time := 75
!insert (M36, ME206) into MatchMatchEvent

!new MatchEvent('ME207')
!ME207.eventType := #GOAL
!ME207.time := 93
!insert (M36, ME207) into MatchMatchEvent

!new MatchNote('MN48')
!MN48.note := 'Tight match decided by a late goal; many stoppages and set pieces.'
!MN48.date := '2026-06-01'
!insert (M36, MN48) into MatchMatchNote

!new MatchPlayer('MP208')
!MP208.booked := false
!MP208.goals := 1
!MP208.rating := 9
!insert (P215, MP208) into PlayerMatch
!insert (M36, MP208) into MatchMatchPlayer

!new MatchPlayerPosition('MPP208')
!MPP208.positionName := #FORWARD
!MPP208.number := 9
!insert (MP208, MPP208) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP209')
!MP209.booked := true
!MP209.goals := 0
!MP209.rating := 6
!insert (P217, MP209) into PlayerMatch
!insert (M36, MP209) into MatchMatchPlayer

!new MatchPlayerPosition('MPP209')
!MPP209.positionName := #MIDFIELDER
!MPP209.number := 8
!insert (MP209, MPP209) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP210')
!MP210.booked := false
!MP210.goals := 0
!MP210.rating := 7
!insert (P220, MP210) into PlayerMatch
!insert (M36, MP210) into MatchMatchPlayer

!new MatchPlayerPosition('MPP210')
!MPP210.positionName := #MIDFIELDER
!MPP210.number := 6
!insert (MP210, MPP210) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP211')
!MP211.booked := false
!MP211.goals := 0
!MP211.rating := 6
!insert (P224, MP211) into PlayerMatch
!insert (M36, MP211) into MatchMatchPlayer

!new MatchPlayerPosition('MPP211')
!MPP211.positionName := #DEFENDER
!MPP211.number := 4
!insert (MP211, MPP211) into MatchPlayerMatchPlayerPosition
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 408 | 0.00% |
| Multiplicities Errors | 0 | 98 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 52 | 0.00% |

## Category complex
```
!new Club('C67')
!C67.name := 'Sao Bento Atlantico'
!C67.homeGround := 'Estadio da Enseada'
!C67.chairman := 'Renata Almeida'

!new Team('T81')
!T81.name := 'Sao Bento Atlantico Senior'
!insert (C67, T81) into ClubTeam

!new Team('T82')
!T82.name := 'Sao Bento Atlantico U23'
!insert (C67, T82) into ClubTeam

!new Club('C68')
!C68.name := 'Hamburg Hafen SV'
!C68.homeGround := 'HafenSportplatz'
!C68.chairman := 'Claus Richter'

!new Team('T83')
!T83.name := 'Hamburg Hafen SV Erste'
!insert (C68, T83) into ClubTeam

!new Team('T84')
!T84.name := 'Hamburg Hafen SV II'
!insert (C68, T84) into ClubTeam

!new Club('C69')
!C69.name := 'Accra Horizon FC'
!C69.homeGround := 'Teshie Community Park'
!C69.chairman := 'Ama Boateng'

!new Team('T85')
!T85.name := 'Accra Horizon Development'
!insert (C69, T85) into ClubTeam

!new Player('P283')
!P283.name := 'Lucas Nogueira'
!P283.age := 28
!P283.bestFoot := #RIGHT
!P283.phoneNumber := '+55 21 98888-1101'
!insert (T81, P283) into TeamPlayer

!new Position('POS435')
!POS435.positionName := #GOALKEEPER
!insert (P283, POS435) into PlayerPositions

!new TrainingObjective('TO310')
!TO310.areaToImprove := 'Quicker short distribution under press'
!TO310.startDate := '2026-04-20'
!TO310.endDate := '2026-05-20'
!TO310.success := false
!insert (TO310, P283) into TrainingObjectivePlayer

!new PlayerNotes('PN96')
!PN96.note := 'Communication improved; keep calling set-piece assignments early.'
!PN96.date := '2026-05-02'
!insert (P283, PN96) into PlayerPlayerNotes

!new Player('P284')
!P284.name := 'Rafael Costa'
!P284.age := 26
!P284.bestFoot := #BOTH
!P284.phoneNumber := '+55 21 97777-2202'
!insert (T81, P284) into TeamPlayer

!new Position('POS436')
!POS436.positionName := #DEFENDER
!insert (P284, POS436) into PlayerPositions

!new Position('POS437')
!POS437.positionName := #MIDFIELDER
!insert (P284, POS437) into PlayerPositions

!new TrainingObjective('TO311')
!TO311.areaToImprove := 'Body orientation when defending cut-backs'
!TO311.startDate := '2026-04-21'
!TO311.endDate := '2026-05-18'
!TO311.success := true
!insert (TO311, P284) into TrainingObjectivePlayer

!new Player('P285')
!P285.name := 'Icaro Santana'
!P285.age := 24
!P285.bestFoot := #LEFT
!P285.phoneNumber := '+55 21 96666-3303'
!insert (T81, P285) into TeamPlayer

!new Position('POS438')
!POS438.positionName := #DEFENDER
!insert (P285, POS438) into PlayerPositions

!new TrainingObjective('TO312')
!TO312.areaToImprove := 'Aerial duels timing'
!TO312.startDate := '2026-04-21'
!TO312.endDate := '2026-05-25'
!TO312.success := false
!insert (TO312, P285) into TrainingObjectivePlayer

!new Player('P286')
!P286.name := 'Bruno Lemos'
!P286.age := 27
!P286.bestFoot := #RIGHT
!P286.phoneNumber := '+55 21 95555-4404'
!insert (T81, P286) into TeamPlayer

!new Position('POS439')
!POS439.positionName := #MIDFIELDER
!insert (P286, POS439) into PlayerPositions

!new TrainingObjective('TO313')
!TO313.areaToImprove := 'Receiving on the half-turn under contact'
!TO313.startDate := '2026-04-22'
!TO313.endDate := '2026-05-22'
!TO313.success := false
!insert (TO313, P286) into TrainingObjectivePlayer

!new Player('P287')
!P287.name := 'Caio Ribeiro'
!P287.age := 22
!P287.bestFoot := #RIGHT
!P287.phoneNumber := '+55 21 94444-5505'
!insert (T81, P287) into TeamPlayer

!new Position('POS440')
!POS440.positionName := #MIDFIELDER
!insert (P287, POS440) into PlayerPositions

!new Position('POS441')
!POS441.positionName := #FORWARD
!insert (P287, POS441) into PlayerPositions

!new TrainingObjective('TO314')
!TO314.areaToImprove := 'Final-third decision making (shoot vs pass)'
!TO314.startDate := '2026-04-22'
!TO314.endDate := '2026-05-19'
!TO314.success := false
!insert (TO314, P287) into TrainingObjectivePlayer

!new TrainingObjective('TO315')
!TO315.areaToImprove := 'Pressing triggers as the 10'
!TO315.startDate := '2026-04-28'
!TO315.endDate := '2026-05-28'
!TO315.success := true
!insert (TO315, P287) into TrainingObjectivePlayer

!new Player('P288')
!P288.name := 'Joao Pedro Moura'
!P288.age := 29
!P288.bestFoot := #RIGHT
!P288.phoneNumber := '+55 21 93333-6606'
!insert (T81, P288) into TeamPlayer

!new Position('POS442')
!POS442.positionName := #FORWARD
!insert (P288, POS442) into PlayerPositions

!new TrainingObjective('TO316')
!TO316.areaToImprove := 'Finishing first time from cut-backs'
!TO316.startDate := '2026-04-23'
!TO316.endDate := '2026-05-23'
!TO316.success := false
!insert (TO316, P288) into TrainingObjectivePlayer

!new Player('P289')
!P289.name := 'Matheus Viana'
!P289.age := 21
!P289.bestFoot := #LEFT
!P289.phoneNumber := '+55 21 92222-7707'
!insert (T81, P289) into TeamPlayer

!new Position('POS443')
!POS443.positionName := #FORWARD
!insert (P289, POS443) into PlayerPositions

!new Position('POS444')
!POS444.positionName := #MIDFIELDER
!insert (P289, POS444) into PlayerPositions

!new Position('POS445')
!POS445.positionName := #DEFENDER
!insert (P289, POS445) into PlayerPositions

!new TrainingObjective('TO317')
!TO317.areaToImprove := 'Defensive tracking on the weak side'
!TO317.startDate := '2026-04-23'
!TO317.endDate := '2026-05-30'
!TO317.success := false
!insert (TO317, P289) into TrainingObjectivePlayer

!new PlayerNotes('PN97')
!PN97.note := 'Versatile; clarify role before match to reduce drifting.'
!PN97.date := '2026-05-05'
!insert (P289, PN97) into PlayerPlayerNotes

!new Player('P290')
!P290.name := 'Gustavo Pires'
!P290.age := 25
!P290.bestFoot := #BOTH
!P290.phoneNumber := '+55 21 91111-8808'
!insert (T81, P290) into TeamPlayer

!new Position('POS446')
!POS446.positionName := #DEFENDER
!insert (P290, POS446) into PlayerPositions

!new TrainingObjective('TO318')
!TO318.areaToImprove := 'Line stepping coordination'
!TO318.startDate := '2026-04-24'
!TO318.endDate := '2026-05-24'
!TO318.success := true
!insert (TO318, P290) into TrainingObjectivePlayer

!new Player('P291')
!P291.name := 'Renan Carvalho'
!P291.age := 23
!P291.bestFoot := #RIGHT
!P291.phoneNumber := '+55 21 90000-9909'
!insert (T81, P291) into TeamPlayer

!new Position('POS447')
!POS447.positionName := #MIDFIELDER
!insert (P291, POS447) into PlayerPositions

!new TrainingObjective('TO319')
!TO319.areaToImprove := 'Long passing accuracy to switch play'
!TO319.startDate := '2026-04-24'
!TO319.endDate := '2026-05-24'
!TO319.success := false
!insert (TO319, P291) into TrainingObjectivePlayer

!new Player('P292')
!P292.name := 'Felipe Azevedo'
!P292.age := 20
!P292.bestFoot := #LEFT
!P292.phoneNumber := '+55 21 98888-1010'
!insert (T81, P292) into TeamPlayer

!new Position('POS448')
!POS448.positionName := #DEFENDER
!insert (P292, POS448) into PlayerPositions

!new Position('POS449')
!POS449.positionName := #MIDFIELDER
!insert (P292, POS449) into PlayerPositions

!new TrainingObjective('TO320')
!TO320.areaToImprove := 'Tackling timing (avoid late contact)'
!TO320.startDate := '2026-04-25'
!TO320.endDate := '2026-05-15'
!TO320.success := true
!insert (TO320, P292) into TrainingObjectivePlayer

!new Player('P293')
!P293.name := 'Thiago Barbosa'
!P293.age := 19
!P293.bestFoot := #RIGHT
!P293.phoneNumber := '+55 21 97777-1111'
!insert (T82, P293) into TeamPlayer

!new Position('POS450')
!POS450.positionName := #FORWARD
!insert (P293, POS450) into PlayerPositions

!new TrainingObjective('TO321')
!TO321.areaToImprove := 'Near-post run timing'
!TO321.startDate := '2026-04-26'
!TO321.endDate := '2026-05-26'
!TO321.success := false
!insert (TO321, P293) into TrainingObjectivePlayer

!new Player('P294')
!P294.name := 'Enzo Martins'
!P294.age := 18
!P294.bestFoot := #BOTH
!P294.phoneNumber := '+55 21 96666-2222'
!insert (T82, P294) into TeamPlayer

!new Position('POS451')
!POS451.positionName := #MIDFIELDER
!insert (P294, POS451) into PlayerPositions

!new TrainingObjective('TO322')
!TO322.areaToImprove := 'Ball retention under pressure'
!TO322.startDate := '2026-04-26'
!TO322.endDate := '2026-05-20'
!TO322.success := true
!insert (TO322, P294) into TrainingObjectivePlayer

!new Player('P295')
!P295.name := 'Arthur Lima'
!P295.age := 19
!P295.bestFoot := #LEFT
!P295.phoneNumber := '+55 21 95555-3333'
!insert (T82, P295) into TeamPlayer

!new Position('POS452')
!POS452.positionName := #GOALKEEPER
!insert (P295, POS452) into PlayerPositions

!new TrainingObjective('TO323')
!TO323.areaToImprove := 'Footwork on low shots'
!TO323.startDate := '2026-04-27'
!TO323.endDate := '2026-05-27'
!TO323.success := false
!insert (TO323, P295) into TrainingObjectivePlayer

!new Player('P296')
!P296.name := 'Jonas Keller'
!P296.age := 31
!P296.bestFoot := #RIGHT
!P296.phoneNumber := '+49 170 5550001'
!insert (T83, P296) into TeamPlayer

!new Position('POS453')
!POS453.positionName := #GOALKEEPER
!insert (P296, POS453) into PlayerPositions

!new TrainingObjective('TO324')
!TO324.areaToImprove := 'Claiming crosses in traffic'
!TO324.startDate := '2026-04-18'
!TO324.endDate := '2026-05-18'
!TO324.success := false
!insert (TO324, P296) into TrainingObjectivePlayer

!new Player('P297')
!P297.name := 'Emre Yilmaz'
!P297.age := 26
!P297.bestFoot := #BOTH
!P297.phoneNumber := '+49 176 5550002'
!insert (T83, P297) into TeamPlayer

!new Position('POS454')
!POS454.positionName := #DEFENDER
!insert (P297, POS454) into PlayerPositions

!new Position('POS455')
!POS455.positionName := #MIDFIELDER
!insert (P297, POS455) into PlayerPositions

!new TrainingObjective('TO325')
!TO325.areaToImprove := 'Playing out under man-marking'
!TO325.startDate := '2026-04-19'
!TO325.endDate := '2026-05-19'
!TO325.success := true
!insert (TO325, P297) into TrainingObjectivePlayer

!new Player('P298')
!P298.name := 'Lukas Brandt'
!P298.age := 24
!P298.bestFoot := #LEFT
!P298.phoneNumber := '+49 151 5550003'
!insert (T83, P298) into TeamPlayer

!new Position('POS456')
!POS456.positionName := #DEFENDER
!insert (P298, POS456) into PlayerPositions

!new TrainingObjective('TO326')
!TO326.areaToImprove := 'Back-post awareness on diagonals'
!TO326.startDate := '2026-04-19'
!TO326.endDate := '2026-05-26'
!TO326.success := false
!insert (TO326, P298) into TrainingObjectivePlayer

!new PlayerNotes('PN98')
!PN98.note := 'Tends to ball-watch; assign scanning cue words.'
!PN98.date := '2026-05-01'
!insert (P298, PN98) into PlayerPlayerNotes

!new Player('P299')
!P299.name := 'Finn Petersen'
!P299.age := 27
!P299.bestFoot := #RIGHT
!P299.phoneNumber := '+49 160 5550004'
!insert (T83, P299) into TeamPlayer

!new Position('POS457')
!POS457.positionName := #MIDFIELDER
!insert (P299, POS457) into PlayerPositions

!new TrainingObjective('TO327')
!TO327.areaToImprove := 'Tempo control when leading'
!TO327.startDate := '2026-04-20'
!TO327.endDate := '2026-05-10'
!TO327.success := true
!insert (TO327, P299) into TrainingObjectivePlayer

!new Player('P300')
!P300.name := 'Marek Nowicki'
!P300.age := 25
!P300.bestFoot := #BOTH
!P300.phoneNumber := '+49 171 5550005'
!insert (T83, P300) into TeamPlayer

!new Position('POS458')
!POS458.positionName := #MIDFIELDER
!insert (P300, POS458) into PlayerPositions

!new Position('POS459')
!POS459.positionName := #DEFENDER
!insert (P300, POS459) into PlayerPositions

!new TrainingObjective('TO328')
!TO328.areaToImprove := 'Counter-press recovery runs'
!TO328.startDate := '2026-04-20'
!TO328.endDate := '2026-05-20'
!TO328.success := false
!insert (TO328, P300) into TrainingObjectivePlayer

!new Player('P301')
!P301.name := 'Sven Albrecht'
!P301.age := 23
!P301.bestFoot := #RIGHT
!P301.phoneNumber := '+49 152 5550006'
!insert (T83, P301) into TeamPlayer

!new Position('POS460')
!POS460.positionName := #FORWARD
!insert (P301, POS460) into PlayerPositions

!new TrainingObjective('TO329')
!TO329.areaToImprove := 'Pressing angle to force wide'
!TO329.startDate := '2026-04-21'
!TO329.endDate := '2026-05-21'
!TO329.success := true
!insert (TO329, P301) into TrainingObjectivePlayer

!new Player('P302')
!P302.name := 'Hauke Schroder'
!P302.age := 22
!P302.bestFoot := #LEFT
!P302.phoneNumber := '+49 157 5550007'
!insert (T83, P302) into TeamPlayer

!new Position('POS461')
!POS461.positionName := #FORWARD
!insert (P302, POS461) into PlayerPositions

!new Position('POS462')
!POS462.positionName := #MIDFIELDER
!insert (P302, POS462) into PlayerPositions

!new TrainingObjective('TO330')
!TO330.areaToImprove := 'Finishing under pressure (one-touch)'
!TO330.startDate := '2026-04-21'
!TO330.endDate := '2026-05-28'
!TO330.success := false
!insert (TO330, P302) into TrainingObjectivePlayer

!new Player('P303')
!P303.name := 'Daniel Okoye'
!P303.age := 28
!P303.bestFoot := #RIGHT
!P303.phoneNumber := '+49 175 5550008'
!insert (T83, P303) into TeamPlayer

!new Position('POS463')
!POS463.positionName := #DEFENDER
!insert (P303, POS463) into PlayerPositions

!new TrainingObjective('TO331')
!TO331.areaToImprove := 'Discipline in challenges near box'
!TO331.startDate := '2026-04-22'
!TO331.endDate := '2026-05-12'
!TO331.success := true
!insert (TO331, P303) into TrainingObjectivePlayer

!new Player('P304')
!P304.name := 'Nico Hartmann'
!P304.age := 21
!P304.bestFoot := #BOTH
!P304.phoneNumber := '+49 159 5550009'
!insert (T83, P304) into TeamPlayer

!new Position('POS464')
!POS464.positionName := #MIDFIELDER
!insert (P304, POS464) into PlayerPositions

!new TrainingObjective('TO332')
!TO332.areaToImprove := 'Receiving between lines and turning'
!TO332.startDate := '2026-04-22'
!TO332.endDate := '2026-05-22'
!TO332.success := false
!insert (TO332, P304) into TrainingObjectivePlayer

!new Player('P305')
!P305.name := 'Timo Vogel'
!P305.age := 20
!P305.bestFoot := #RIGHT
!P305.phoneNumber := '+49 163 5550010'
!insert (T83, P305) into TeamPlayer

!new Position('POS465')
!POS465.positionName := #DEFENDER
!insert (P305, POS465) into PlayerPositions

!new TrainingObjective('TO333')
!TO333.areaToImprove := '1v1 defending (do not dive in)'
!TO333.startDate := '2026-04-23'
!TO333.endDate := '2026-05-23'
!TO333.success := false
!insert (TO333, P305) into TrainingObjectivePlayer

!new Player('P306')
!P306.name := 'Kevin Schulz'
!P306.age := 19
!P306.bestFoot := #RIGHT
!P306.phoneNumber := '+49 178 5550101'
!insert (T84, P306) into TeamPlayer

!new Position('POS466')
!POS466.positionName := #MIDFIELDER
!insert (P306, POS466) into PlayerPositions

!new TrainingObjective('TO334')
!TO334.areaToImprove := 'Short passing speed'
!TO334.startDate := '2026-04-24'
!TO334.endDate := '2026-05-14'
!TO334.success := true
!insert (TO334, P306) into TrainingObjectivePlayer

!new Player('P307')
!P307.name := 'Okan Demir'
!P307.age := 20
!P307.bestFoot := #LEFT
!P307.phoneNumber := '+49 179 5550102'
!insert (T84, P307) into TeamPlayer

!new Position('POS467')
!POS467.positionName := #FORWARD
!insert (P307, POS467) into PlayerPositions

!new TrainingObjective('TO335')
!TO335.areaToImprove := 'Finishing with weaker foot'
!TO335.startDate := '2026-04-24'
!TO335.endDate := '2026-05-24'
!TO335.success := false
!insert (TO335, P307) into TrainingObjectivePlayer

!new Player('P308')
!P308.name := 'Paul Gruber'
!P308.age := 19
!P308.bestFoot := #BOTH
!P308.phoneNumber := '+49 172 5550103'
!insert (T84, P308) into TeamPlayer

!new Position('POS468')
!POS468.positionName := #GOALKEEPER
!insert (P308, POS468) into PlayerPositions

!new TrainingObjective('TO336')
!TO336.areaToImprove := 'Throws to start counters'
!TO336.startDate := '2026-04-25'
!TO336.endDate := '2026-05-25'
!TO336.success := false
!insert (TO336, P308) into TrainingObjectivePlayer

!new Player('P309')
!P309.name := 'Kojo Mensah'
!P309.age := 18
!P309.bestFoot := #RIGHT
!P309.phoneNumber := '+233 24 555 0101'
!insert (T85, P309) into TeamPlayer

!new Position('POS469')
!POS469.positionName := #FORWARD
!insert (P309, POS469) into PlayerPositions

!new TrainingObjective('TO337')
!TO337.areaToImprove := 'Staying onside and curved runs'
!TO337.startDate := '2026-04-20'
!TO337.endDate := '2026-05-20'
!TO337.success := false
!insert (TO337, P309) into TrainingObjectivePlayer

!new Player('P310')
!P310.name := 'Esi Owusu'
!P310.age := 19
!P310.bestFoot := #BOTH
!P310.phoneNumber := '+233 20 555 0202'
!insert (T85, P310) into TeamPlayer

!new Position('POS470')
!POS470.positionName := #MIDFIELDER
!insert (P310, POS470) into PlayerPositions

!new Position('POS471')
!POS471.positionName := #DEFENDER
!insert (P310, POS471) into PlayerPositions

!new TrainingObjective('TO338')
!TO338.areaToImprove := 'Shielding ball and turning away from pressure'
!TO338.startDate := '2026-04-21'
!TO338.endDate := '2026-05-21'
!TO338.success := true
!insert (TO338, P310) into TrainingObjectivePlayer

!new PlayerNotes('PN99')
!PN99.note := 'Very coachable; keep giving leadership tasks in drills.'
!PN99.date := '2026-05-03'
!insert (P310, PN99) into PlayerPlayerNotes

!new Player('P311')
!P311.name := 'Yaw Asante'
!P311.age := 18
!P311.bestFoot := #LEFT
!P311.phoneNumber := '+233 26 555 0303'
!insert (T85, P311) into TeamPlayer

!new Position('POS472')
!POS472.positionName := #GOALKEEPER
!insert (P311, POS472) into PlayerPositions

!new TrainingObjective('TO339')
!TO339.areaToImprove := 'Handling shots through crowd'
!TO339.startDate := '2026-04-21'
!TO339.endDate := '2026-05-28'
!TO339.success := false
!insert (TO339, P311) into TrainingObjectivePlayer

!new TrainingSession('TS106')
!TS106.date := '2026-05-03'
!TS106.location := 'Estadio da Enseada - Pitch 2'
!TS106.purpose := 'Compact mid-block + fast breakouts'
!insert (T81, TS106) into TeamTraining

!new TrainingNotes('TN165')
!TN165.note := 'When winger presses, 8 slides to cover half-space immediately.'
!TN165.date := '2026-05-03'
!insert (TS106, TN165) into TrainingTrainingNotes

!new TrainingNotes('TN166')
!TN166.note := 'Breakout rule: first pass forward, second pass wide.'
!TN166.date := '2026-05-03'
!insert (TS106, TN166) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA78')
!FA78.reason := 'Late shift at port; could not leave in time'
!insert (TS106, FA78) into TrainingFailded
!insert (FA78, P291) into FailedPlayer

!new TrainingFailedToAttend('FA79')
!FA79.reason := 'Physio rest day (groin soreness)'
!insert (TS106, FA79) into TrainingFailded
!insert (FA79, P285) into FailedPlayer

!new TrainingSession('TS107')
!TS107.date := '2026-05-09'
!TS107.location := 'Estadio da Enseada - Gym'
!TS107.purpose := 'Strength + sprint mechanics'
!insert (T81, TS107) into TeamTraining

!new TrainingNotes('TN167')
!TN167.note := 'Acceleration: 3x5m + 3x10m; focus on posture.'
!TN167.date := '2026-05-09'
!insert (TS107, TN167) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA80')
!FA80.reason := 'Family commitment (wedding travel)'
!insert (TS107, FA80) into TrainingFailded
!insert (FA80, P284) into FailedPlayer

!new TrainingFailedToAttend('FA81')
!FA81.reason := 'Flu-like symptoms; stayed home'
!insert (TS107, FA81) into TrainingFailded
!insert (FA81, P288) into FailedPlayer

!new TrainingSession('TS108')
!TS108.date := '2026-05-06'
!TS108.location := 'Centro de Formacao - Campo A'
!TS108.purpose := 'First touch + scanning in midfield'
!insert (T82, TS108) into TeamTraining

!new TrainingNotes('TN168')
!TN168.note := 'Scan before receiving; open body to play forward.'
!TN168.date := '2026-05-06'
!insert (TS108, TN168) into TrainingTrainingNotes

!new TrainingSession('TS109')
!TS109.date := '2026-05-02'
!TS109.location := 'HafenSportplatz - Platz 1'
!TS109.purpose := 'Attacking patterns vs low block'
!insert (T83, TS109) into TeamTraining

!new TrainingNotes('TN169')
!TN169.note := '10 must arrive late at edge of box; do not stand on same line as 9.'
!TN169.date := '2026-05-02'
!insert (TS109, TN169) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA82')
!FA82.reason := 'Train cancellation and missed connection; did not arrive'
!insert (TS109, FA82) into TrainingFailded
!insert (FA82, P302) into FailedPlayer

!new TrainingSession('TS110')
!TS110.date := '2026-05-08'
!TS110.location := 'HafenSportplatz - Platz 2'
!TS110.purpose := 'Set pieces: defending corners + counter-launch'
!insert (T83, TS110) into TeamTraining

!new TrainingNotes('TN170')
!TN170.note := 'Assign one player to front-post clearance; second ball must be attacked.'
!TN170.date := '2026-05-08'
!insert (TS110, TN170) into TrainingTrainingNotes

!new TrainingNotes('TN171')
!TN171.note := 'On regain, look immediately for 9s channel run.'
!TN171.date := '2026-05-08'
!insert (TS110, TN171) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA83')
!FA83.reason := 'Minor hamstring tightness; precautionary rest'
!insert (TS110, FA83) into TrainingFailded
!insert (FA83, P302) into FailedPlayer

!new TrainingSession('TS111')
!TS111.date := '2026-05-07'
!TS111.location := 'HafenSportplatz - Platz 3'
!TS111.purpose := 'Young players: defensive 1v1 + recovery runs'
!insert (T84, TS111) into TeamTraining

!new TrainingNotes('TN172')
!TN172.note := 'Delay first, then tackle; do not commit too early.'
!TN172.date := '2026-05-07'
!insert (TS111, TN172) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA84')
!FA84.reason := 'University lab session ran overtime'
!insert (TS111, FA84) into TrainingFailded
!insert (FA84, P306) into FailedPlayer

!new TrainingSession('TS112')
!TS112.date := '2026-05-04'
!TS112.location := 'Teshie Community Park - Main Field'
!TS112.purpose := 'Finishing + pressing cues'
!insert (T85, TS112) into TeamTraining

!new TrainingNotes('TN173')
!TN173.note := 'Press cue: bad first touch-nearest player jumps, others lock passing lanes.'
!TN173.date := '2026-05-04'
!insert (TS112, TN173) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA85')
!FA85.reason := 'Transport money issue; could not travel'
!insert (TS112, FA85) into TrainingFailded
!insert (FA85, P309) into FailedPlayer

!new Competition('COMP28')
!COMP28.name := 'Atlantic Bridge Showcase 2026'
!COMP28.type := 'Single-match international showcase'

!new Match('M48')
!M48.date := '2026-05-12'
!M48.homeAway := true
!insert (COMP28, M48) into CompetitionMatch
!insert (T81, M48) into LocalMatch
!insert (T83, M48) into VisitorMatch

!new MatchReport('MR47')
!MR47.duration := 90
!MR47.scoreLocal := 3
!MR47.scoreVisitor := 3
!insert (M48, MR47) into MatchMatchReport

!new MatchEvent('ME278')
!ME278.eventType := #GOAL
!ME278.time := 7
!insert (M48, ME278) into MatchMatchEvent

!new MatchEvent('ME279')
!ME279.eventType := #FOUL
!ME279.time := 20
!insert (M48, ME279) into MatchMatchEvent

!new MatchEvent('ME280')
!ME280.eventType := #PENALTY
!ME280.time := 21
!insert (M48, ME280) into MatchMatchEvent

!new MatchEvent('ME281')
!ME281.eventType := #GOAL
!ME281.time := 22
!insert (M48, ME281) into MatchMatchEvent

!new MatchEvent('ME282')
!ME282.eventType := #OFFSIDE
!ME282.time := 31
!insert (M48, ME282) into MatchMatchEvent

!new MatchEvent('ME283')
!ME283.eventType := #GOAL
!ME283.time := 39
!insert (M48, ME283) into MatchMatchEvent

!new MatchEvent('ME284')
!ME284.eventType := #CORNER
!ME284.time := 44
!insert (M48, ME284) into MatchMatchEvent

!new MatchEvent('ME285')
!ME285.eventType := #GOAL
!ME285.time := 50
!insert (M48, ME285) into MatchMatchEvent

!new MatchEvent('ME286')
!ME286.eventType := #GOAL
!ME286.time := 68
!insert (M48, ME286) into MatchMatchEvent

!new MatchEvent('ME287')
!ME287.eventType := #FOUL
!ME287.time := 77
!insert (M48, ME287) into MatchMatchEvent

!new MatchEvent('ME288')
!ME288.eventType := #GOAL
!ME288.time := 84
!insert (M48, ME288) into MatchMatchEvent

!new MatchNote('MN59')
!MN59.note := 'Visitor pressed aggressively for 25 minutes, then switched to a mid-block.'
!MN59.date := '2026-05-12'
!insert (M48, MN59) into MatchMatchNote

!new MatchNote('MN60')
!MN60.note := 'Local equalizer came from a second ball after a corner.'
!MN60.date := '2026-05-12'
!insert (M48, MN60) into MatchMatchNote

!new MatchNote('MN61')
!MN61.note := 'Penalty decision was contentious; referee noted a hand on the shoulder during a run.'
!MN61.date := '2026-05-12'
!insert (M48, MN61) into MatchMatchNote

!new MatchPlayer('MP287')
!MP287.booked := false
!MP287.goals := 0
!MP287.rating := 6
!insert (P283, MP287) into PlayerMatch
!insert (M48, MP287) into MatchMatchPlayer

!new MatchPlayerPosition('MPP287')
!MPP287.positionName := #GOALKEEPER
!MPP287.number := 1
!insert (MP287, MPP287) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP288')
!MP288.booked := false
!MP288.goals := 0
!MP288.rating := 6
!insert (P284, MP288) into PlayerMatch
!insert (M48, MP288) into MatchMatchPlayer

!new MatchPlayerPosition('MPP288')
!MPP288.positionName := #DEFENDER
!MPP288.number := 4
!insert (MP288, MPP288) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP289')
!MP289.booked := true
!MP289.goals := 0
!MP289.rating := 5
!insert (P290, MP289) into PlayerMatch
!insert (M48, MP289) into MatchMatchPlayer

!new MatchPlayerPosition('MPP289')
!MPP289.positionName := #DEFENDER
!MPP289.number := 3
!insert (MP289, MPP289) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP290')
!MP290.booked := false
!MP290.goals := 0
!MP290.rating := 6
!insert (P285, MP290) into PlayerMatch
!insert (M48, MP290) into MatchMatchPlayer

!new MatchPlayerPosition('MPP290')
!MPP290.positionName := #DEFENDER
!MPP290.number := 2
!insert (MP290, MPP290) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP291')
!MP291.booked := false
!MP291.goals := 0
!MP291.rating := 6
!insert (P291, MP291) into PlayerMatch
!insert (M48, MP291) into MatchMatchPlayer

!new MatchPlayerPosition('MPP291')
!MPP291.positionName := #MIDFIELDER
!MPP291.number := 6
!insert (MP291, MPP291) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP292')
!MP292.booked := false
!MP292.goals := 1
!MP292.rating := 7
!insert (P286, MP292) into PlayerMatch
!insert (M48, MP292) into MatchMatchPlayer

!new MatchPlayerPosition('MPP292')
!MPP292.positionName := #MIDFIELDER
!MPP292.number := 8
!insert (MP292, MPP292) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP293')
!MP293.booked := false
!MP293.goals := 1
!MP293.rating := 7
!insert (P287, MP293) into PlayerMatch
!insert (M48, MP293) into MatchMatchPlayer

!new MatchPlayerPosition('MPP293')
!MPP293.positionName := #MIDFIELDER
!MPP293.number := 10
!insert (MP293, MPP293) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP294')
!MP294.booked := false
!MP294.goals := 1
!MP294.rating := 7
!insert (P288, MP294) into PlayerMatch
!insert (M48, MP294) into MatchMatchPlayer

!new MatchPlayerPosition('MPP294')
!MPP294.positionName := #FORWARD
!MPP294.number := 9
!insert (MP294, MPP294) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP295')
!MP295.booked := true
!MP295.goals := 0
!MP295.rating := 6
!insert (P289, MP295) into PlayerMatch
!insert (M48, MP295) into MatchMatchPlayer

!new MatchPlayerPosition('MPP295')
!MPP295.positionName := #FORWARD
!MPP295.number := 11
!insert (MP295, MPP295) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP296')
!MP296.booked := false
!MP296.goals := 0
!MP296.rating := 6
!insert (P296, MP296) into PlayerMatch
!insert (M48, MP296) into MatchMatchPlayer

!new MatchPlayerPosition('MPP296')
!MPP296.positionName := #GOALKEEPER
!MPP296.number := 1
!insert (MP296, MPP296) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP297')
!MP297.booked := false
!MP297.goals := 0
!MP297.rating := 6
!insert (P297, MP297) into PlayerMatch
!insert (M48, MP297) into MatchMatchPlayer

!new MatchPlayerPosition('MPP297')
!MPP297.positionName := #DEFENDER
!MPP297.number := 5
!insert (MP297, MPP297) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP298')
!MP298.booked := true
!MP298.goals := 0
!MP298.rating := 5
!insert (P303, MP298) into PlayerMatch
!insert (M48, MP298) into MatchMatchPlayer

!new MatchPlayerPosition('MPP298')
!MPP298.positionName := #DEFENDER
!MPP298.number := 4
!insert (MP298, MPP298) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP299')
!MP299.booked := false
!MP299.goals := 0
!MP299.rating := 6
!insert (P298, MP299) into PlayerMatch
!insert (M48, MP299) into MatchMatchPlayer

!new MatchPlayerPosition('MPP299')
!MPP299.positionName := #DEFENDER
!MPP299.number := 3
!insert (MP299, MPP299) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP300')
!MP300.booked := false
!MP300.goals := 0
!MP300.rating := 6
!insert (P300, MP300) into PlayerMatch
!insert (M48, MP300) into MatchMatchPlayer

!new MatchPlayerPosition('MPP300')
!MPP300.positionName := #MIDFIELDER
!MPP300.number := 6
!insert (MP300, MPP300) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP301')
!MP301.booked := false
!MP301.goals := 1
!MP301.rating := 7
!insert (P299, MP301) into PlayerMatch
!insert (M48, MP301) into MatchMatchPlayer

!new MatchPlayerPosition('MPP301')
!MPP301.positionName := #MIDFIELDER
!MPP301.number := 8
!insert (MP301, MPP301) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP302')
!MP302.booked := false
!MP302.goals := 1
!MP302.rating := 7
!insert (P302, MP302) into PlayerMatch
!insert (M48, MP302) into MatchMatchPlayer

!new MatchPlayerPosition('MPP302')
!MPP302.positionName := #FORWARD
!MPP302.number := 11
!insert (MP302, MPP302) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP303')
!MP303.booked := false
!MP303.goals := 1
!MP303.rating := 7
!insert (P301, MP303) into PlayerMatch
!insert (M48, MP303) into MatchMatchPlayer

!new MatchPlayerPosition('MPP303')
!MPP303.positionName := #FORWARD
!MPP303.number := 9
!insert (MP303, MPP303) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP304')
!MP304.booked := false
!MP304.goals := 0
!MP304.rating := 6
!insert (P304, MP304) into PlayerMatch
!insert (M48, MP304) into MatchMatchPlayer

!new MatchPlayerPosition('MPP304')
!MPP304.positionName := #MIDFIELDER
!MPP304.number := 10
!insert (MP304, MPP304) into MatchPlayerMatchPlayerPosition
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 864 | 0.00% |
| Multiplicities Errors | 0 | 210 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 84 | 0.00% |

## Category edge
```
!new Club('C42')
!C42.name := 'Club Atletico San Telmo del Sur'
!C42.homeGround := 'Estadio La Ribera Chica'
!C42.chairman := 'Maria Soledad Fernandez'

!new Team('T51')
!T51.name := 'San Telmo XI'
!insert (C42, T51) into ClubTeam

!new Club('C43')
!C43.name := 'Kalaallit Nuuk FC'
!C43.homeGround := 'Nuuk All-Weather Dome'
!C43.chairman := 'Aputsiaq Jensen'

!new Team('T52')
!T52.name := 'Nuuk Icebreakers'
!insert (C43, T52) into ClubTeam

!new Club('C44')
!C44.name := 'Seoul Night Owls'
!C44.homeGround := 'Jamsil Midnight Park'
!C44.chairman := 'Park Min-seo'

!new Team('T53')
!T53.name := 'Night Owls Pro'
!insert (C44, T53) into ClubTeam

!new Player('P162')
!P162.name := 'Mateo Quiroga'
!P162.age := 52
!P162.bestFoot := #BOTH
!P162.phoneNumber := '+54 11 4000-5252'
!insert (T51, P162) into TeamPlayer

!new Position('POS245')
!POS245.positionName := #GOALKEEPER
!insert (P162, POS245) into PlayerPositions

!new Position('POS246')
!POS246.positionName := #GOALKEEPER
!insert (P162, POS246) into PlayerPositions

!new Position('POS247')
!POS247.positionName := #GOALKEEPER
!insert (P162, POS247) into PlayerPositions

!new TrainingObjective('TO179')
!TO179.areaToImprove := 'Reaction saves'
!TO179.startDate := '2026-03-10'
!TO179.endDate := '2026-03-01'
!TO179.success := false
!insert (TO179, P162) into TrainingObjectivePlayer

!new PlayerNotes('PN63')
!PN63.note := 'Registered as sole squad member for administrative test scenario.'
!PN63.date := '2026-03-01'
!insert (P162, PN63) into PlayerPlayerNotes

!new Player('P163')
!P163.name := 'Ivalu Kristiansen'
!P163.age := 23
!P163.bestFoot := #LEFT
!P163.phoneNumber := '+299 55 01 23'
!insert (T52, P163) into TeamPlayer

!new Position('POS248')
!POS248.positionName := #DEFENDER
!insert (P163, POS248) into PlayerPositions

!new TrainingObjective('TO180')
!TO180.areaToImprove := 'Clearances under pressure'
!TO180.startDate := '2026-03-01'
!TO180.endDate := '2026-03-20'
!TO180.success := true
!insert (TO180, P163) into TrainingObjectivePlayer

!new Player('P164')
!P164.name := 'Malik Petersen'
!P164.age := 34
!P164.bestFoot := #RIGHT
!P164.phoneNumber := '+299 55 04 34'
!insert (T52, P164) into TeamPlayer

!new Position('POS249')
!POS249.positionName := #GOALKEEPER
!insert (P164, POS249) into PlayerPositions

!new Position('POS250')
!POS250.positionName := #DEFENDER
!insert (P164, POS250) into PlayerPositions

!new TrainingObjective('TO181')
!TO181.areaToImprove := 'Handling low shots on turf'
!TO181.startDate := '2026-03-02'
!TO181.endDate := '2026-03-25'
!TO181.success := false
!insert (TO181, P164) into TrainingObjectivePlayer

!new PlayerNotes('PN64')
!PN64.note := 'Plays in goal only when main keeper is absent.'
!PN64.date := '2026-03-02'
!insert (P164, PN64) into PlayerPlayerNotes

!new Player('P165')
!P165.name := 'Kuno Holm'
!P165.age := 19
!P165.bestFoot := #BOTH
!P165.phoneNumber := '+299 55 09 19'
!insert (T52, P165) into TeamPlayer

!new Position('POS251')
!POS251.positionName := #MIDFIELDER
!insert (P165, POS251) into PlayerPositions

!new TrainingObjective('TO182')
!TO182.areaToImprove := 'Long passing accuracy'
!TO182.startDate := '2026-03-01'
!TO182.endDate := '2026-03-31'
!TO182.success := false
!insert (TO182, P165) into TrainingObjectivePlayer

!new Player('P166')
!P166.name := 'Pipaluk Sorensen'
!P166.age := 28
!P166.bestFoot := #RIGHT
!P166.phoneNumber := '+299 55 08 28'
!insert (T52, P166) into TeamPlayer

!new Position('POS252')
!POS252.positionName := #FORWARD
!insert (P166, POS252) into PlayerPositions

!new Position('POS253')
!POS253.positionName := #MIDFIELDER
!insert (P166, POS253) into PlayerPositions

!new Position('POS254')
!POS254.positionName := #DEFENDER
!insert (P166, POS254) into PlayerPositions

!new TrainingObjective('TO183')
!TO183.areaToImprove := 'Pressing discipline'
!TO183.startDate := '2026-03-03'
!TO183.endDate := '2026-03-18'
!TO183.success := true
!insert (TO183, P166) into TrainingObjectivePlayer

!new Player('P167')
!P167.name := 'Arnaq Lund'
!P167.age := 41
!P167.bestFoot := #LEFT
!P167.phoneNumber := '+299 55 41 00'
!insert (T52, P167) into TeamPlayer

!new Position('POS255')
!POS255.positionName := #DEFENDER
!insert (P167, POS255) into PlayerPositions

!new TrainingObjective('TO184')
!TO184.areaToImprove := 'Avoid tactical fouls'
!TO184.startDate := '2026-03-01'
!TO184.endDate := '2026-03-15'
!TO184.success := false
!insert (TO184, P167) into TrainingObjectivePlayer

!new Player('P168')
!P168.name := 'Siku Moller'
!P168.age := 17
!P168.bestFoot := #RIGHT
!P168.phoneNumber := '+299 55 17 17'
!insert (T52, P168) into TeamPlayer

!new Position('POS256')
!POS256.positionName := #FORWARD
!insert (P168, POS256) into PlayerPositions

!new TrainingObjective('TO185')
!TO185.areaToImprove := 'First touch in tight spaces'
!TO185.startDate := '2026-03-05'
!TO185.endDate := '2026-04-05'
!TO185.success := false
!insert (TO185, P168) into TrainingObjectivePlayer

!new Player('P169')
!P169.name := 'Kim Ji-ho'
!P169.age := 26
!P169.bestFoot := #RIGHT
!P169.phoneNumber := '+82-10-2222-3333'
!insert (T53, P169) into TeamPlayer

!new Position('POS257')
!POS257.positionName := #MIDFIELDER
!insert (P169, POS257) into PlayerPositions

!new Position('POS258')
!POS258.positionName := #FORWARD
!insert (P169, POS258) into PlayerPositions

!new TrainingObjective('TO186')
!TO186.areaToImprove := 'Late-game concentration'
!TO186.startDate := '2026-03-01'
!TO186.endDate := '2026-03-07'
!TO186.success := true
!insert (TO186, P169) into TrainingObjectivePlayer

!new PlayerNotes('PN65')
!PN65.note := 'Available only for late kickoffs.'
!PN65.date := '2026-03-01'
!insert (P169, PN65) into PlayerPlayerNotes

!new Player('P170')
!P170.name := 'Lee Hyeon-woo'
!P170.age := 20
!P170.bestFoot := #LEFT
!P170.phoneNumber := '+82-10-5555-6666'
!insert (T53, P170) into TeamPlayer

!new Position('POS259')
!POS259.positionName := #DEFENDER
!insert (P170, POS259) into PlayerPositions

!new TrainingObjective('TO187')
!TO187.areaToImprove := 'Reduce offsides trap errors'
!TO187.startDate := '2026-03-02'
!TO187.endDate := '2026-03-22'
!TO187.success := false
!insert (TO187, P170) into TrainingObjectivePlayer

!new TrainingSession('TS67')
!TS67.date := '2026-03-02'
!TS67.location := 'Estadio La Ribera Chica (service corridor)'
!TS67.purpose := 'Paperwork-only session logged for compliance'
!insert (T51, TS67) into TeamTraining

!new TrainingNotes('TN109')
!TN109.note := 'No ball work; session created to satisfy scheduling audit.'
!TN109.date := '2026-03-02'
!insert (TS67, TN109) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA46')
!FA46.reason := 'Player present but not checked in by staff device'
!insert (TS67, FA46) into TrainingFailded
!insert (FA46, P162) into FailedPlayer

!new TrainingSession('TS68')
!TS68.date := '2026-03-04'
!TS68.location := 'Estadio La Ribera Chica (roofed entrance)'
!TS68.purpose := 'Solo handling drills (minimal equipment)'
!insert (T51, TS68) into TeamTraining

!new TrainingNotes('TN110')
!TN110.note := 'Used taped tennis balls due to missing footballs.'
!TN110.date := '2026-03-04'
!insert (TS68, TN110) into TrainingTrainingNotes

!new TrainingNotes('TN111')
!TN111.note := 'Session ended after 8 minutes; logged as complete.'
!TN111.date := '2026-03-04'
!insert (TS68, TN111) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA47')
!FA47.reason := 'Arrived after the scheduled start time'
!insert (TS68, FA47) into TrainingFailded
!insert (FA47, P162) into FailedPlayer

!new TrainingFailedToAttend('FA48')
!FA48.reason := 'Left early for second job shift'
!insert (TS68, FA48) into TrainingFailded
!insert (FA48, P162) into FailedPlayer

!new TrainingSession('TS69')
!TS69.date := '2026-03-03'
!TS69.location := 'Nuuk All-Weather Dome'
!TS69.purpose := '5-a-side style transitions'
!insert (T52, TS69) into TeamTraining

!new TrainingNotes('TN112')
!TN112.note := 'Ball kept low to reduce dome echo distraction.'
!TN112.date := '2026-03-03'
!insert (TS69, TN112) into TrainingTrainingNotes

!new TrainingSession('TS70')
!TS70.date := '2026-03-03'
!TS70.location := 'Jamsil Midnight Park (floodlit half pitch)'
!TS70.purpose := 'Quick restarts and set patterns'
!insert (T53, TS70) into TeamTraining

!new TrainingNotes('TN113')
!TN113.note := 'Restarts timed; target was 6 seconds.'
!TN113.date := '2026-03-03'
!insert (TS70, TN113) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA49')
!FA49.reason := 'University lab ran overtime'
!insert (TS70, FA49) into TrainingFailded
!insert (FA49, P170) into FailedPlayer

!new Competition('COMP19')
!COMP19.name := 'Tri-Club Constraint Trial'
!COMP19.type := 'Round-robin test'

!new Match('M28')
!M28.date := '2026-03-05'
!M28.homeAway := true
!insert (COMP19, M28) into CompetitionMatch
!insert (T51, M28) into LocalMatch
!insert (T52, M28) into VisitorMatch

!new MatchReport('MR27')
!MR27.duration := 90
!MR27.scoreLocal := 0
!MR27.scoreVisitor := 5
!insert (M28, MR27) into MatchMatchReport

!new MatchEvent('ME152')
!ME152.eventType := #GOAL
!ME152.time := 3
!insert (M28, ME152) into MatchMatchEvent

!new MatchEvent('ME153')
!ME153.eventType := #GOAL
!ME153.time := 17
!insert (M28, ME153) into MatchMatchEvent

!new MatchEvent('ME154')
!ME154.eventType := #GOAL
!ME154.time := 44
!insert (M28, ME154) into MatchMatchEvent

!new MatchEvent('ME155')
!ME155.eventType := #GOAL
!ME155.time := 61
!insert (M28, ME155) into MatchMatchEvent

!new MatchEvent('ME156')
!ME156.eventType := #GOAL
!ME156.time := 89
!insert (M28, ME156) into MatchMatchEvent

!new MatchEvent('ME157')
!ME157.eventType := #CORNER
!ME157.time := 12
!insert (M28, ME157) into MatchMatchEvent

!new MatchEvent('ME158')
!ME158.eventType := #OFFSIDE
!ME158.time := 30
!insert (M28, ME158) into MatchMatchEvent

!new MatchEvent('ME159')
!ME159.eventType := #FOUL
!ME159.time := 45
!insert (M28, ME159) into MatchMatchEvent

!new MatchEvent('ME160')
!ME160.eventType := #PENALTY
!ME160.time := 62
!insert (M28, ME160) into MatchMatchEvent

!new MatchPlayer('MP158')
!MP158.booked := false
!MP158.goals := 0
!MP158.rating := 4
!insert (P162, MP158) into PlayerMatch
!insert (M28, MP158) into MatchMatchPlayer

!new MatchPlayerPosition('MPP158')
!MPP158.positionName := #GOALKEEPER
!MPP158.number := 1
!insert (MP158, MPP158) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP159')
!MP159.booked := false
!MP159.goals := 2
!MP159.rating := 8
!insert (P166, MP159) into PlayerMatch
!insert (M28, MP159) into MatchMatchPlayer

!new MatchPlayerPosition('MPP159')
!MPP159.positionName := #FORWARD
!MPP159.number := 11
!insert (MP159, MPP159) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP160')
!MP160.booked := false
!MP160.goals := 3
!MP160.rating := 9
!insert (P168, MP160) into PlayerMatch
!insert (M28, MP160) into MatchMatchPlayer

!new MatchPlayerPosition('MPP160')
!MPP160.positionName := #FORWARD
!MPP160.number := 77
!insert (MP160, MPP160) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP161')
!MP161.booked := true
!MP161.goals := 0
!MP161.rating := 6
!insert (P163, MP161) into PlayerMatch
!insert (M28, MP161) into MatchMatchPlayer

!new MatchPlayerPosition('MPP161')
!MPP161.positionName := #DEFENDER
!MPP161.number := 3
!insert (MP161, MPP161) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP162')
!MP162.booked := false
!MP162.goals := 0
!MP162.rating := 5
!insert (P165, MP162) into PlayerMatch
!insert (M28, MP162) into MatchMatchPlayer

!new MatchPlayerPosition('MPP162')
!MPP162.positionName := #MIDFIELDER
!MPP162.number := 6
!insert (MP162, MPP162) into MatchPlayerMatchPlayerPosition

!new Match('M29')
!M29.date := '2026-03-06'
!M29.homeAway := false
!insert (COMP19, M29) into CompetitionMatch
!insert (T53, M29) into LocalMatch
!insert (T51, M29) into VisitorMatch

!new MatchReport('MR28')
!MR28.duration := 10
!MR28.scoreLocal := 1
!MR28.scoreVisitor := 0
!insert (M29, MR28) into MatchMatchReport

!new MatchEvent('ME161')
!ME161.eventType := #GOAL
!ME161.time := 10
!insert (M29, ME161) into MatchMatchEvent

!new MatchEvent('ME162')
!ME162.eventType := #OFFSIDE
!ME162.time := 1
!insert (M29, ME162) into MatchMatchEvent

!new MatchEvent('ME163')
!ME163.eventType := #CORNER
!ME163.time := 2
!insert (M29, ME163) into MatchMatchEvent

!new MatchEvent('ME164')
!ME164.eventType := #FOUL
!ME164.time := 3
!insert (M29, ME164) into MatchMatchEvent

!new MatchNote('MN38')
!MN38.note := 'Match ended early due to transport curfew; score stands.'
!MN38.date := '2026-03-06'
!insert (M29, MN38) into MatchMatchNote

!new MatchPlayer('MP163')
!MP163.booked := false
!MP163.goals := 1
!MP163.rating := 7
!insert (P169, MP163) into PlayerMatch
!insert (M29, MP163) into MatchMatchPlayer

!new MatchPlayerPosition('MPP163')
!MPP163.positionName := #FORWARD
!MPP163.number := 9
!insert (MP163, MPP163) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP164')
!MP164.booked := false
!MP164.goals := 0
!MP164.rating := 6
!insert (P170, MP164) into PlayerMatch
!insert (M29, MP164) into MatchMatchPlayer

!new MatchPlayerPosition('MPP164')
!MPP164.positionName := #DEFENDER
!MPP164.number := 2
!insert (MP164, MPP164) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP165')
!MP165.booked := true
!MP165.goals := 9
!MP165.rating := 0
!insert (P162, MP165) into PlayerMatch
!insert (M29, MP165) into MatchMatchPlayer

!new MatchPlayerPosition('MPP165')
!MPP165.positionName := #GOALKEEPER
!MPP165.number := 1
!insert (MP165, MPP165) into MatchPlayerMatchPlayerPosition
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 403 | 0.00% |
| Multiplicities Errors | 0 | 102 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 33 | 0.00% |

## Category invalid
```
!new Club('C40')
!C40.name := 'Cairns Crocs FC'
!C40.homeGround := 'Barlow Park (Cairns)'
!C40.chairman := 'Leanne McKay'

!new Team('T49')
!T49.name := 'Cairns Crocs Seniors'
!insert (C40, T49) into ClubTeam

!new Club('C41')
!C41.name := 'Townsville Mariners FC'
!C41.homeGround := 'Queensland Country Bank Stadium (Townsville)'
!C41.chairman := 'Michael Tuala'

!new Team('T50')
!T50.name := 'Townsville Mariners Seniors'
!insert (C41, T50) into ClubTeam

!new Player('P156')
!P156.name := 'Kiri Naufahu'
!P156.age := 30
!P156.bestFoot := #RIGHT
!P156.phoneNumber := '+61 4 1188 2301'
!insert (T49, P156) into TeamPlayer

!new Position('POS237')
!POS237.positionName := #GOALKEEPER
!insert (P156, POS237) into PlayerPositions

!new TrainingObjective('TO173')
!TO173.areaToImprove := 'Quicker decision on crosses (claim vs punch)'
!TO173.startDate := '2026-03-01'
!TO173.endDate := '2026-04-01'
!TO173.success := true
!insert (TO173, P156) into TrainingObjectivePlayer

!new PlayerNotes('PN59')
!PN59.note := 'Good shot-stopping; communication improved with back line.'
!PN59.date := '2026-03-18'
!insert (P156, PN59) into PlayerPlayerNotes

!new Player('P157')
!P157.name := 'Jai Singh'
!P157.age := 22
!P157.bestFoot := #BOTH
!P157.phoneNumber := '+61 4 2055 7719'
!insert (T49, P157) into TeamPlayer

!new Position('POS238')
!POS238.positionName := #DEFENDER
!insert (P157, POS238) into PlayerPositions

!new Position('POS239')
!POS239.positionName := #MIDFIELDER
!insert (P157, POS239) into PlayerPositions

!new TrainingObjective('TO174')
!TO174.areaToImprove := 'Body shape when receiving under pressure'
!TO174.startDate := '2026-03-05'
!TO174.endDate := '2026-04-20'
!TO174.success := false
!insert (TO174, P157) into TrainingObjectivePlayer

!new Player('P158')
!P158.name := 'Marco Alvarez'
!P158.age := 25
!P158.bestFoot := #LEFT
!P158.phoneNumber := '+61 4 3990 1022'
!insert (T49, P158) into TeamPlayer

!new Position('POS240')
!POS240.positionName := #MIDFIELDER
!insert (P158, POS240) into PlayerPositions

!new TrainingObjective('TO175')
!TO175.areaToImprove := 'Earlier switches of play to weak side'
!TO175.startDate := '2026-03-02'
!TO175.endDate := '2026-04-15'
!TO175.success := true
!insert (TO175, P158) into TrainingObjectivePlayer

!new PlayerNotes('PN60')
!PN60.note := 'Sees forward passes well; must track runners more consistently.'
!PN60.date := '2026-03-22'
!insert (P158, PN60) into PlayerPlayerNotes

!new TrainingSession('TS65')
!TS65.date := '2026-03-20'
!TS65.location := 'Barlow Park Training Field'
!TS65.purpose := 'Wet-weather ball control + defensive shape'
!insert (T49, TS65) into TeamTraining

!new TrainingNotes('TN106')
!TN106.note := 'First-touch drills adapted to slippery surface; fewer loose touches by end.'
!TN106.date := '2026-03-20'
!insert (TS65, TN106) into TrainingTrainingNotes

!new TrainingNotes('TN107')
!TN107.note := 'Defensive line held better when fullbacks stayed connected to CBs.'
!TN107.date := '2026-03-20'
!insert (TS65, TN107) into TrainingTrainingNotes

!new Player('P159')
!P159.name := 'Callum Fraser'
!P159.age := 27
!P159.bestFoot := #RIGHT
!P159.phoneNumber := '+61 4 2666 4109'
!insert (T50, P159) into TeamPlayer

!new Position('POS241')
!POS241.positionName := #GOALKEEPER
!insert (P159, POS241) into PlayerPositions

!new TrainingObjective('TO176')
!TO176.areaToImprove := 'Long distribution accuracy to wide channels'
!TO176.startDate := '2026-03-03'
!TO176.endDate := '2026-04-05'
!TO176.success := false
!insert (TO176, P159) into TrainingObjectivePlayer

!new PlayerNotes('PN61')
!PN61.note := 'Good reactions; distribution inconsistent under pressure.'
!PN61.date := '2026-03-16'
!insert (P159, PN61) into PlayerPlayerNotes

!new Player('P160')
!P160.name := 'Tane Whaanga'
!P160.age := 20
!P160.bestFoot := #LEFT
!P160.phoneNumber := '+61 4 1444 9033'
!insert (T50, P160) into TeamPlayer

!new Position('POS242')
!POS242.positionName := #DEFENDER
!insert (P160, POS242) into PlayerPositions

!new TrainingObjective('TO177')
!TO177.areaToImprove := 'Avoid diving in during 1v1 defending'
!TO177.startDate := '2026-03-06'
!TO177.endDate := '2026-04-25'
!TO177.success := true
!insert (TO177, P160) into TrainingObjectivePlayer

!new Player('P161')
!P161.name := 'Benji OConnor'
!P161.age := 23
!P161.bestFoot := #BOTH
!P161.phoneNumber := '+61 4 3222 7780'
!insert (T50, P161) into TeamPlayer

!new Position('POS243')
!POS243.positionName := #FORWARD
!insert (P161, POS243) into PlayerPositions

!new Position('POS244')
!POS244.positionName := #MIDFIELDER
!insert (P161, POS244) into PlayerPositions

!new TrainingObjective('TO178')
!TO178.areaToImprove := 'More disciplined pressing angles (force wide)'
!TO178.startDate := '2026-03-01'
!TO178.endDate := '2026-04-10'
!TO178.success := false
!insert (TO178, P161) into TrainingObjectivePlayer

!new PlayerNotes('PN62')
!PN62.note := 'Creates chances but presses straight; needs curved runs.'
!PN62.date := '2026-03-19'
!insert (P161, PN62) into PlayerPlayerNotes

!new TrainingSession('TS66')
!TS66.date := '2026-03-19'
!TS66.location := 'Townsville Sports Reserve'
!TS66.purpose := 'Set-piece defending + second-ball reactions'
!insert (T50, TS66) into TeamTraining

!new TrainingNotes('TN108')
!TN108.note := 'Improved marking assignments; still vulnerable at far post.'
!TN108.date := '2026-03-19'
!insert (TS66, TN108) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA45')
!FA45.reason := 'Flight delay returning from work trip.'
!insert (TS66, FA45) into TrainingFailded
!insert (FA45, P161) into FailedPlayer

!new Competition('COMP18')
!COMP18.name := 'Far North Queensland Storm Cup 2026'
!COMP18.type := 'Regional knock-out (single elimination)'

!new Match('M27')
!M27.date := '2026-03-23'
!M27.homeAway := true
!insert (COMP18, M27) into CompetitionMatch
!insert (T49, M27) into LocalMatch
!insert (T50, M27) into VisitorMatch

!new MatchEvent('ME148')
!ME148.eventType := #FOUL
!ME148.time := 12
!insert (M27, ME148) into MatchMatchEvent

!new MatchEvent('ME149')
!ME149.eventType := #OFFSIDE
!ME149.time := 19
!insert (M27, ME149) into MatchMatchEvent

!new MatchEvent('ME150')
!ME150.eventType := #CORNER
!ME150.time := 26
!insert (M27, ME150) into MatchMatchEvent

!new MatchEvent('ME151')
!ME151.eventType := #PENALTY
!ME151.time := 29
!insert (M27, ME151) into MatchMatchEvent

!new MatchNote('MN37')
!MN37.note := 'Match abandoned at 29 minutes due to nearby lightning and heavy rain; to be replayed pending federation decision.'
!MN37.date := '2026-03-23'
!insert (M27, MN37) into MatchMatchNote

!new MatchPlayer('MP152')
!MP152.booked := false
!MP152.goals := 0
!MP152.rating := 0
!insert (P156, MP152) into PlayerMatch
!insert (M27, MP152) into MatchMatchPlayer

!new MatchPlayerPosition('MPP152')
!MPP152.positionName := #GOALKEEPER
!MPP152.number := 1
!insert (MP152, MPP152) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP153')
!MP153.booked := false
!MP153.goals := 0
!MP153.rating := 0
!insert (P157, MP153) into PlayerMatch
!insert (M27, MP153) into MatchMatchPlayer

!new MatchPlayerPosition('MPP153')
!MPP153.positionName := #DEFENDER
!MPP153.number := 4
!insert (MP153, MPP153) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP154')
!MP154.booked := false
!MP154.goals := 0
!MP154.rating := 0
!insert (P158, MP154) into PlayerMatch
!insert (M27, MP154) into MatchMatchPlayer

!new MatchPlayerPosition('MPP154')
!MPP154.positionName := #MIDFIELDER
!MPP154.number := 8
!insert (MP154, MPP154) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP155')
!MP155.booked := false
!MP155.goals := 0
!MP155.rating := 0
!insert (P159, MP155) into PlayerMatch
!insert (M27, MP155) into MatchMatchPlayer

!new MatchPlayerPosition('MPP155')
!MPP155.positionName := #GOALKEEPER
!MPP155.number := 1
!insert (MP155, MPP155) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP156')
!MP156.booked := false
!MP156.goals := 0
!MP156.rating := 0
!insert (P160, MP156) into PlayerMatch
!insert (M27, MP156) into MatchMatchPlayer

!new MatchPlayerPosition('MPP156')
!MPP156.positionName := #DEFENDER
!MPP156.number := 5
!insert (MP156, MPP156) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP157')
!MP157.booked := false
!MP157.goals := 0
!MP157.rating := 0
!insert (P161, MP157) into PlayerMatch
!insert (M27, MP157) into MatchMatchPlayer

!new MatchPlayerPosition('MPP157')
!MPP157.positionName := #FORWARD
!MPP157.number := 11
!insert (MP157, MPP157) into MatchPlayerMatchPlayerPosition
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 59 | 1.69% |
| Invariants Errors (Not included on General) | 0 | 4 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `MatchMatchReport':
  Object `M27' of class `Match' is connected to 0 objects of class `MatchReport'
  at association end `matchReport' but the multiplicity is specified as `1'.
```

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 23 | 0.00% |

## Generation 5 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 2553 | 0.00% |
| Multiplicities Errors | 0 | 573 | 0.00% |
| Invariants Errors | 0 | 16 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 59 | 1.69% |
| Invariants Errors (Not included on General) | 0 | 4 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `MatchMatchReport':
  Object `M27' of class `Match' is connected to 0 objects of class `MatchReport'
  at association end `matchReport' but the multiplicity is specified as `1'.
```

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 5 | 236 | 2.12% |

| Failed dates | 
|---| 
```
2026-06-08 19:00
```
```
2026-06-09 20:15
```
```
2026-06-07 16:30
```
```
2026-06-15 20:00
```
```
2026-06-22 19:30
```

# Generation 6
## Category baseline
```
!new Club('C64')
!C64.name := 'Toronto Aurora FC'
!C64.homeGround := 'Lakefront Sports Dome'
!C64.chairman := 'Sonia Patel'

!new Team('T78')
!T78.name := 'Aurora City'
!insert (C64, T78) into ClubTeam

!new Club('C65')
!C65.name := 'Busan Haeundae FC'
!C65.homeGround := 'Haeundae Indoor Arena'
!C65.chairman := 'Kim Seon-woo'

!new Team('T79')
!T79.name := 'Haeundae Mariners'
!insert (C65, T79) into ClubTeam

!new Club('C66')
!C66.name := 'Alexandria Pharos SC'
!C66.homeGround := 'Pharos Community Stadium'
!C66.chairman := 'Noura El-Sayed'

!new Team('T80')
!T80.name := 'Pharos United'
!insert (C66, T80) into ClubTeam

!new Player('P268')
!P268.name := 'Mateo Gutierrez'
!P268.age := 25
!P268.bestFoot := #RIGHT
!P268.phoneNumber := '+1 647-555-0101'
!insert (T78, P268) into TeamPlayer

!new Position('POS409')
!POS409.positionName := #GOALKEEPER
!insert (P268, POS409) into PlayerPositions

!new TrainingObjective('TO293')
!TO293.areaToImprove := 'Quicker low distribution to pivot'
!TO293.startDate := '2026-07-01'
!TO293.endDate := '2026-07-31'
!TO293.success := true
!insert (TO293, P268) into TrainingObjectivePlayer

!new PlayerNotes('PN93')
!PN93.note := 'Good reflexes; keep setting feet before shot.'
!PN93.date := '2026-07-03'
!insert (P268, PN93) into PlayerPlayerNotes

!new Player('P269')
!P269.name := 'Avery Chen'
!P269.age := 22
!P269.bestFoot := #LEFT
!P269.phoneNumber := '+1 416-555-0149'
!insert (T78, P269) into TeamPlayer

!new Position('POS410')
!POS410.positionName := #DEFENDER
!insert (P269, POS410) into PlayerPositions

!new Position('POS411')
!POS411.positionName := #MIDFIELDER
!insert (P269, POS411) into PlayerPositions

!new TrainingObjective('TO294')
!TO294.areaToImprove := 'Defending 1v1 without fouling'
!TO294.startDate := '2026-07-02'
!TO294.endDate := '2026-07-20'
!TO294.success := false
!insert (TO294, P269) into TrainingObjectivePlayer

!new Player('P270')
!P270.name := 'Liam ONeill'
!P270.age := 24
!P270.bestFoot := #BOTH
!P270.phoneNumber := '+1 905-555-0198'
!insert (T78, P270) into TeamPlayer

!new Position('POS412')
!POS412.positionName := #MIDFIELDER
!insert (P270, POS412) into PlayerPositions

!new TrainingObjective('TO295')
!TO295.areaToImprove := 'Scanning before receiving under pressure'
!TO295.startDate := '2026-07-01'
!TO295.endDate := '2026-07-15'
!TO295.success := true
!insert (TO295, P270) into TrainingObjectivePlayer

!new TrainingObjective('TO296')
!TO296.areaToImprove := 'Switching play with one-touch passes'
!TO296.startDate := '2026-07-16'
!TO296.endDate := '2026-07-31'
!TO296.success := false
!insert (TO296, P270) into TrainingObjectivePlayer

!new Player('P271')
!P271.name := 'Chloe Martin'
!P271.age := 23
!P271.bestFoot := #RIGHT
!P271.phoneNumber := '+1 437-555-0113'
!insert (T78, P271) into TeamPlayer

!new Position('POS413')
!POS413.positionName := #FORWARD
!insert (P271, POS413) into PlayerPositions

!new Position('POS414')
!POS414.positionName := #MIDFIELDER
!insert (P271, POS414) into PlayerPositions

!new TrainingObjective('TO297')
!TO297.areaToImprove := 'First-time finishing from cut-backs'
!TO297.startDate := '2026-07-01'
!TO297.endDate := '2026-07-31'
!TO297.success := true
!insert (TO297, P271) into TrainingObjectivePlayer

!new Player('P272')
!P272.name := 'Hassan El Amin'
!P272.age := 26
!P272.bestFoot := #RIGHT
!P272.phoneNumber := '+1 647-555-0177'
!insert (T78, P272) into TeamPlayer

!new Position('POS415')
!POS415.positionName := #DEFENDER
!insert (P272, POS415) into PlayerPositions

!new Position('POS416')
!POS416.positionName := #FORWARD
!insert (P272, POS416) into PlayerPositions

!new Position('POS417')
!POS417.positionName := #MIDFIELDER
!insert (P272, POS417) into PlayerPositions

!new TrainingObjective('TO298')
!TO298.areaToImprove := 'Recovery runs after losing the ball'
!TO298.startDate := '2026-07-03'
!TO298.endDate := '2026-07-30'
!TO298.success := true
!insert (TO298, P272) into TrainingObjectivePlayer

!new Player('P273')
!P273.name := 'Park Ji-ho'
!P273.age := 27
!P273.bestFoot := #RIGHT
!P273.phoneNumber := '+82 10-2345-6789'
!insert (T79, P273) into TeamPlayer

!new Position('POS418')
!POS418.positionName := #GOALKEEPER
!insert (P273, POS418) into PlayerPositions

!new Position('POS419')
!POS419.positionName := #DEFENDER
!insert (P273, POS419) into PlayerPositions

!new TrainingObjective('TO299')
!TO299.areaToImprove := 'Playing out with feet under press'
!TO299.startDate := '2026-07-01'
!TO299.endDate := '2026-07-25'
!TO299.success := true
!insert (TO299, P273) into TrainingObjectivePlayer

!new Player('P274')
!P274.name := 'Lee Min-seo'
!P274.age := 21
!P274.bestFoot := #LEFT
!P274.phoneNumber := '+82 10-7788-9900'
!insert (T79, P274) into TeamPlayer

!new Position('POS420')
!POS420.positionName := #DEFENDER
!insert (P274, POS420) into PlayerPositions

!new TrainingObjective('TO300')
!TO300.areaToImprove := 'Timing interceptions in wide channels'
!TO300.startDate := '2026-07-02'
!TO300.endDate := '2026-07-28'
!TO300.success := false
!insert (TO300, P274) into TrainingObjectivePlayer

!new Player('P275')
!P275.name := 'Choi Ye-jun'
!P275.age := 23
!P275.bestFoot := #BOTH
!P275.phoneNumber := '+82 10-5566-1122'
!insert (T79, P275) into TeamPlayer

!new Position('POS421')
!POS421.positionName := #MIDFIELDER
!insert (P275, POS421) into PlayerPositions

!new Position('POS422')
!POS422.positionName := #FORWARD
!insert (P275, POS422) into PlayerPositions

!new TrainingObjective('TO301')
!TO301.areaToImprove := 'Decision-making on counter-attacks'
!TO301.startDate := '2026-07-01'
!TO301.endDate := '2026-07-31'
!TO301.success := true
!insert (TO301, P275) into TrainingObjectivePlayer

!new PlayerNotes('PN94')
!PN94.note := 'Great tempo; look for earlier through-ball when pivot checks.'
!PN94.date := '2026-07-04'
!insert (P275, PN94) into PlayerPlayerNotes

!new Player('P276')
!P276.name := 'Han Soo-jin'
!P276.age := 24
!P276.bestFoot := #RIGHT
!P276.phoneNumber := '+82 10-3333-4455'
!insert (T79, P276) into TeamPlayer

!new Position('POS423')
!POS423.positionName := #FORWARD
!insert (P276, POS423) into PlayerPositions

!new TrainingObjective('TO302')
!TO302.areaToImprove := 'Near-post runs on corners'
!TO302.startDate := '2026-07-03'
!TO302.endDate := '2026-07-31'
!TO302.success := true
!insert (TO302, P276) into TrainingObjectivePlayer

!new Player('P277')
!P277.name := 'Kang Dae-hyun'
!P277.age := 26
!P277.bestFoot := #RIGHT
!P277.phoneNumber := '+82 10-9090-1212'
!insert (T79, P277) into TeamPlayer

!new Position('POS424')
!POS424.positionName := #DEFENDER
!insert (P277, POS424) into PlayerPositions

!new Position('POS425')
!POS425.positionName := #MIDFIELDER
!insert (P277, POS425) into PlayerPositions

!new TrainingObjective('TO303')
!TO303.areaToImprove := 'Avoiding tactical fouls when beaten'
!TO303.startDate := '2026-07-02'
!TO303.endDate := '2026-07-22'
!TO303.success := false
!insert (TO303, P277) into TrainingObjectivePlayer

!new Player('P278')
!P278.name := 'Mariam Fathy'
!P278.age := 24
!P278.bestFoot := #LEFT
!P278.phoneNumber := '+20 10 1234 5678'
!insert (T80, P278) into TeamPlayer

!new Position('POS426')
!POS426.positionName := #GOALKEEPER
!insert (P278, POS426) into PlayerPositions

!new TrainingObjective('TO304')
!TO304.areaToImprove := 'Handling low shots through traffic'
!TO304.startDate := '2026-07-01'
!TO304.endDate := '2026-07-31'
!TO304.success := true
!insert (TO304, P278) into TrainingObjectivePlayer

!new Player('P279')
!P279.name := 'Youssef Hassan'
!P279.age := 25
!P279.bestFoot := #RIGHT
!P279.phoneNumber := '+20 12 2222 3333'
!insert (T80, P279) into TeamPlayer

!new Position('POS427')
!POS427.positionName := #DEFENDER
!insert (P279, POS427) into PlayerPositions

!new Position('POS428')
!POS428.positionName := #MIDFIELDER
!insert (P279, POS428) into PlayerPositions

!new TrainingObjective('TO305')
!TO305.areaToImprove := 'Passing lanes when building from back'
!TO305.startDate := '2026-07-02'
!TO305.endDate := '2026-07-27'
!TO305.success := true
!insert (TO305, P279) into TrainingObjectivePlayer

!new Player('P280')
!P280.name := 'Salma Abdallah'
!P280.age := 22
!P280.bestFoot := #BOTH
!P280.phoneNumber := '+20 11 9090 8080'
!insert (T80, P280) into TeamPlayer

!new Position('POS429')
!POS429.positionName := #MIDFIELDER
!insert (P280, POS429) into PlayerPositions

!new TrainingObjective('TO306')
!TO306.areaToImprove := 'Shooting earlier from top of area'
!TO306.startDate := '2026-07-01'
!TO306.endDate := '2026-07-20'
!TO306.success := false
!insert (TO306, P280) into TrainingObjectivePlayer

!new TrainingObjective('TO307')
!TO307.areaToImprove := 'Arriving late into the box'
!TO307.startDate := '2026-07-21'
!TO307.endDate := '2026-07-31'
!TO307.success := true
!insert (TO307, P280) into TrainingObjectivePlayer

!new PlayerNotes('PN95')
!PN95.note := 'Very composed; keep checking shoulder before receiving.'
!PN95.date := '2026-07-06'
!insert (P280, PN95) into PlayerPlayerNotes

!new Player('P281')
!P281.name := 'Omar El Sherif'
!P281.age := 26
!P281.bestFoot := #RIGHT
!P281.phoneNumber := '+20 10 5555 1111'
!insert (T80, P281) into TeamPlayer

!new Position('POS430')
!POS430.positionName := #FORWARD
!insert (P281, POS430) into PlayerPositions

!new Position('POS431')
!POS431.positionName := #MIDFIELDER
!insert (P281, POS431) into PlayerPositions

!new TrainingObjective('TO308')
!TO308.areaToImprove := 'Finishing with weaker foot'
!TO308.startDate := '2026-07-03'
!TO308.endDate := '2026-07-30'
!TO308.success := false
!insert (TO308, P281) into TrainingObjectivePlayer

!new Player('P282')
!P282.name := 'Nadine Riad'
!P282.age := 23
!P282.bestFoot := #LEFT
!P282.phoneNumber := '+20 12 7777 4444'
!insert (T80, P282) into TeamPlayer

!new Position('POS432')
!POS432.positionName := #FORWARD
!insert (P282, POS432) into PlayerPositions

!new Position('POS433')
!POS433.positionName := #DEFENDER
!insert (P282, POS433) into PlayerPositions

!new Position('POS434')
!POS434.positionName := #MIDFIELDER
!insert (P282, POS434) into PlayerPositions

!new TrainingObjective('TO309')
!TO309.areaToImprove := 'Pressing angle to force play outside'
!TO309.startDate := '2026-07-02'
!TO309.endDate := '2026-07-31'
!TO309.success := true
!insert (TO309, P282) into TrainingObjectivePlayer

!new TrainingSession('TS103')
!TS103.date := '2026-07-03 19:15'
!TS103.location := 'Lakefront Sports Dome - Court 1'
!TS103.purpose := 'Indoor patterns: rotation + quick finishing'
!insert (T78, TS103) into TeamTraining

!new TrainingNotes('TN160')
!TN160.note := 'Rotations worked best when the defender stepped into midfield early.'
!TN160.date := '2026-07-03'
!insert (TS103, TN160) into TrainingTrainingNotes

!new TrainingNotes('TN161')
!TN161.note := 'Finishing: keep shots low on the slick surface.'
!TN161.date := '2026-07-03'
!insert (TS103, TN161) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA76')
!FA76.reason := 'Shift work ran late; missed warm-up and was held out.'
!insert (TS103, FA76) into TrainingFailded
!insert (FA76, P272) into FailedPlayer

!new TrainingSession('TS104')
!TS104.date := '2026-07-04 20:30'
!TS104.location := 'Haeundae Indoor Arena - Court B'
!TS104.purpose := 'Mid-block organization + set plays'
!insert (T79, TS104) into TeamTraining

!new TrainingNotes('TN162')
!TN162.note := 'Mid-block stayed compact; pivot needs clearer trigger to press.'
!TN162.date := '2026-07-04'
!insert (TS104, TN162) into TrainingTrainingNotes

!new TrainingSession('TS105')
!TS105.date := '2026-07-05 18:45'
!TS105.location := 'Pharos Community Stadium - Indoor Hall'
!TS105.purpose := 'Counter-pressing + penalties practice'
!insert (T80, TS105) into TeamTraining

!new TrainingNotes('TN163')
!TN163.note := 'Counter-press improved; nearest two reacted quickly after turnovers.'
!TN163.date := '2026-07-05'
!insert (TS105, TN163) into TrainingTrainingNotes

!new TrainingNotes('TN164')
!TN164.note := 'Penalties: consistent run-up reduced miskicks.'
!TN164.date := '2026-07-05'
!insert (TS105, TN164) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA77')
!FA77.reason := 'Family commitment; notified coach beforehand.'
!insert (TS105, FA77) into TrainingFailded
!insert (FA77, P281) into FailedPlayer

!new Competition('COMP27')
!COMP27.name := 'Lakeside Tri-Nation Indoor Cup'
!COMP27.type := 'Round-robin invitational (indoor)'

!new Match('M45')
!M45.date := '2026-07-05 20:00'
!M45.homeAway := true
!insert (COMP27, M45) into CompetitionMatch
!insert (T78, M45) into LocalMatch
!insert (T79, M45) into VisitorMatch

!new MatchReport('MR44')
!MR44.duration := 60
!MR44.scoreLocal := 1
!MR44.scoreVisitor := 1
!insert (M45, MR44) into MatchMatchReport

!new MatchNote('MN56')
!MN56.note := 'Very fast court; both teams used quick wall passes.'
!MN56.date := '2026-07-05'
!insert (M45, MN56) into MatchMatchNote

!new MatchEvent('ME260')
!ME260.eventType := #GOAL
!ME260.time := 12
!insert (M45, ME260) into MatchMatchEvent

!new MatchEvent('ME261')
!ME261.eventType := #FOUL
!ME261.time := 19
!insert (M45, ME261) into MatchMatchEvent

!new MatchEvent('ME262')
!ME262.eventType := #CORNER
!ME262.time := 27
!insert (M45, ME262) into MatchMatchEvent

!new MatchEvent('ME263')
!ME263.eventType := #PENALTY
!ME263.time := 34
!insert (M45, ME263) into MatchMatchEvent

!new MatchEvent('ME264')
!ME264.eventType := #OFFSIDE
!ME264.time := 41
!insert (M45, ME264) into MatchMatchEvent

!new MatchEvent('ME265')
!ME265.eventType := #GOAL
!ME265.time := 48
!insert (M45, ME265) into MatchMatchEvent

!new MatchPlayer('MP263')
!MP263.booked := false
!MP263.goals := 0
!MP263.rating := 7
!insert (P268, MP263) into PlayerMatch
!insert (M45, MP263) into MatchMatchPlayer

!new MatchPlayerPosition('MPP263')
!MPP263.positionName := #GOALKEEPER
!MPP263.number := 1
!insert (MP263, MPP263) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP264')
!MP264.booked := true
!MP264.goals := 0
!MP264.rating := 6
!insert (P269, MP264) into PlayerMatch
!insert (M45, MP264) into MatchMatchPlayer

!new MatchPlayerPosition('MPP264')
!MPP264.positionName := #DEFENDER
!MPP264.number := 4
!insert (MP264, MPP264) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP265')
!MP265.booked := false
!MP265.goals := 0
!MP265.rating := 7
!insert (P270, MP265) into PlayerMatch
!insert (M45, MP265) into MatchMatchPlayer

!new MatchPlayerPosition('MPP265')
!MPP265.positionName := #MIDFIELDER
!MPP265.number := 8
!insert (MP265, MPP265) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP266')
!MP266.booked := false
!MP266.goals := 1
!MP266.rating := 8
!insert (P271, MP266) into PlayerMatch
!insert (M45, MP266) into MatchMatchPlayer

!new MatchPlayerPosition('MPP266')
!MPP266.positionName := #FORWARD
!MPP266.number := 9
!insert (MP266, MPP266) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP267')
!MP267.booked := false
!MP267.goals := 0
!MP267.rating := 7
!insert (P273, MP267) into PlayerMatch
!insert (M45, MP267) into MatchMatchPlayer

!new MatchPlayerPosition('MPP267')
!MPP267.positionName := #GOALKEEPER
!MPP267.number := 1
!insert (MP267, MPP267) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP268')
!MP268.booked := false
!MP268.goals := 0
!MP268.rating := 6
!insert (P274, MP268) into PlayerMatch
!insert (M45, MP268) into MatchMatchPlayer

!new MatchPlayerPosition('MPP268')
!MPP268.positionName := #DEFENDER
!MPP268.number := 3
!insert (MP268, MPP268) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP269')
!MP269.booked := false
!MP269.goals := 0
!MP269.rating := 7
!insert (P275, MP269) into PlayerMatch
!insert (M45, MP269) into MatchMatchPlayer

!new MatchPlayerPosition('MPP269')
!MPP269.positionName := #MIDFIELDER
!MPP269.number := 6
!insert (MP269, MPP269) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP270')
!MP270.booked := false
!MP270.goals := 1
!MP270.rating := 7
!insert (P276, MP270) into PlayerMatch
!insert (M45, MP270) into MatchMatchPlayer

!new MatchPlayerPosition('MPP270')
!MPP270.positionName := #FORWARD
!MPP270.number := 10
!insert (MP270, MPP270) into MatchPlayerMatchPlayerPosition

!new Match('M46')
!M46.date := '2026-07-07 19:30'
!M46.homeAway := true
!insert (COMP27, M46) into CompetitionMatch
!insert (T79, M46) into LocalMatch
!insert (T80, M46) into VisitorMatch

!new MatchReport('MR45')
!MR45.duration := 60
!MR45.scoreLocal := 0
!MR45.scoreVisitor := 2
!insert (M46, MR45) into MatchMatchReport

!new MatchNote('MN57')
!MN57.note := 'Visitor side pressed high after halftime and forced turnovers.'
!MN57.date := '2026-07-07'
!insert (M46, MN57) into MatchMatchNote

!new MatchEvent('ME266')
!ME266.eventType := #FOUL
!ME266.time := 8
!insert (M46, ME266) into MatchMatchEvent

!new MatchEvent('ME267')
!ME267.eventType := #CORNER
!ME267.time := 16
!insert (M46, ME267) into MatchMatchEvent

!new MatchEvent('ME268')
!ME268.eventType := #GOAL
!ME268.time := 30
!insert (M46, ME268) into MatchMatchEvent

!new MatchEvent('ME269')
!ME269.eventType := #OFFSIDE
!ME269.time := 46
!insert (M46, ME269) into MatchMatchEvent

!new MatchEvent('ME270')
!ME270.eventType := #GOAL
!ME270.time := 55
!insert (M46, ME270) into MatchMatchEvent

!new MatchPlayer('MP271')
!MP271.booked := false
!MP271.goals := 0
!MP271.rating := 6
!insert (P273, MP271) into PlayerMatch
!insert (M46, MP271) into MatchMatchPlayer

!new MatchPlayerPosition('MPP271')
!MPP271.positionName := #GOALKEEPER
!MPP271.number := 1
!insert (MP271, MPP271) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP272')
!MP272.booked := false
!MP272.goals := 0
!MP272.rating := 6
!insert (P275, MP272) into PlayerMatch
!insert (M46, MP272) into MatchMatchPlayer

!new MatchPlayerPosition('MPP272')
!MPP272.positionName := #MIDFIELDER
!MPP272.number := 6
!insert (MP272, MPP272) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP273')
!MP273.booked := false
!MP273.goals := 0
!MP273.rating := 6
!insert (P276, MP273) into PlayerMatch
!insert (M46, MP273) into MatchMatchPlayer

!new MatchPlayerPosition('MPP273')
!MPP273.positionName := #FORWARD
!MPP273.number := 10
!insert (MP273, MPP273) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP274')
!MP274.booked := true
!MP274.goals := 0
!MP274.rating := 5
!insert (P277, MP274) into PlayerMatch
!insert (M46, MP274) into MatchMatchPlayer

!new MatchPlayerPosition('MPP274')
!MPP274.positionName := #DEFENDER
!MPP274.number := 5
!insert (MP274, MPP274) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP275')
!MP275.booked := false
!MP275.goals := 0
!MP275.rating := 8
!insert (P278, MP275) into PlayerMatch
!insert (M46, MP275) into MatchMatchPlayer

!new MatchPlayerPosition('MPP275')
!MPP275.positionName := #GOALKEEPER
!MPP275.number := 1
!insert (MP275, MPP275) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP276')
!MP276.booked := false
!MP276.goals := 0
!MP276.rating := 7
!insert (P279, MP276) into PlayerMatch
!insert (M46, MP276) into MatchMatchPlayer

!new MatchPlayerPosition('MPP276')
!MPP276.positionName := #DEFENDER
!MPP276.number := 4
!insert (MP276, MPP276) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP277')
!MP277.booked := false
!MP277.goals := 1
!MP277.rating := 8
!insert (P280, MP277) into PlayerMatch
!insert (M46, MP277) into MatchMatchPlayer

!new MatchPlayerPosition('MPP277')
!MPP277.positionName := #MIDFIELDER
!MPP277.number := 8
!insert (MP277, MPP277) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP278')
!MP278.booked := false
!MP278.goals := 1
!MP278.rating := 7
!insert (P281, MP278) into PlayerMatch
!insert (M46, MP278) into MatchMatchPlayer

!new MatchPlayerPosition('MPP278')
!MPP278.positionName := #FORWARD
!MPP278.number := 9
!insert (MP278, MPP278) into MatchPlayerMatchPlayerPosition

!new Match('M47')
!M47.date := '2026-07-09 20:30'
!M47.homeAway := true
!insert (COMP27, M47) into CompetitionMatch
!insert (T80, M47) into LocalMatch
!insert (T78, M47) into VisitorMatch

!new MatchReport('MR46')
!MR46.duration := 60
!MR46.scoreLocal := 3
!MR46.scoreVisitor := 0
!insert (M47, MR46) into MatchMatchReport

!new MatchNote('MN58')
!MN58.note := 'Local side dominated transitions; visitor struggled to reset defensively.'
!MN58.date := '2026-07-09'
!insert (M47, MN58) into MatchMatchNote

!new MatchEvent('ME271')
!ME271.eventType := #GOAL
!ME271.time := 5
!insert (M47, ME271) into MatchMatchEvent

!new MatchEvent('ME272')
!ME272.eventType := #FOUL
!ME272.time := 13
!insert (M47, ME272) into MatchMatchEvent

!new MatchEvent('ME273')
!ME273.eventType := #GOAL
!ME273.time := 22
!insert (M47, ME273) into MatchMatchEvent

!new MatchEvent('ME274')
!ME274.eventType := #PENALTY
!ME274.time := 36
!insert (M47, ME274) into MatchMatchEvent

!new MatchEvent('ME275')
!ME275.eventType := #OFFSIDE
!ME275.time := 49
!insert (M47, ME275) into MatchMatchEvent

!new MatchEvent('ME276')
!ME276.eventType := #CORNER
!ME276.time := 57
!insert (M47, ME276) into MatchMatchEvent

!new MatchEvent('ME277')
!ME277.eventType := #GOAL
!ME277.time := 59
!insert (M47, ME277) into MatchMatchEvent

!new MatchPlayer('MP279')
!MP279.booked := false
!MP279.goals := 0
!MP279.rating := 7
!insert (P278, MP279) into PlayerMatch
!insert (M47, MP279) into MatchMatchPlayer

!new MatchPlayerPosition('MPP279')
!MPP279.positionName := #GOALKEEPER
!MPP279.number := 1
!insert (MP279, MPP279) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP280')
!MP280.booked := false
!MP280.goals := 0
!MP280.rating := 7
!insert (P279, MP280) into PlayerMatch
!insert (M47, MP280) into MatchMatchPlayer

!new MatchPlayerPosition('MPP280')
!MPP280.positionName := #DEFENDER
!MPP280.number := 4
!insert (MP280, MPP280) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP281')
!MP281.booked := false
!MP281.goals := 1
!MP281.rating := 8
!insert (P280, MP281) into PlayerMatch
!insert (M47, MP281) into MatchMatchPlayer

!new MatchPlayerPosition('MPP281')
!MPP281.positionName := #MIDFIELDER
!MPP281.number := 8
!insert (MP281, MPP281) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP282')
!MP282.booked := false
!MP282.goals := 2
!MP282.rating := 9
!insert (P282, MP282) into PlayerMatch
!insert (M47, MP282) into MatchMatchPlayer

!new MatchPlayerPosition('MPP282')
!MPP282.positionName := #FORWARD
!MPP282.number := 11
!insert (MP282, MPP282) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP283')
!MP283.booked := false
!MP283.goals := 0
!MP283.rating := 6
!insert (P268, MP283) into PlayerMatch
!insert (M47, MP283) into MatchMatchPlayer

!new MatchPlayerPosition('MPP283')
!MPP283.positionName := #GOALKEEPER
!MPP283.number := 1
!insert (MP283, MPP283) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP284')
!MP284.booked := false
!MP284.goals := 0
!MP284.rating := 6
!insert (P270, MP284) into PlayerMatch
!insert (M47, MP284) into MatchMatchPlayer

!new MatchPlayerPosition('MPP284')
!MPP284.positionName := #MIDFIELDER
!MPP284.number := 8
!insert (MP284, MPP284) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP285')
!MP285.booked := false
!MP285.goals := 0
!MP285.rating := 6
!insert (P271, MP285) into PlayerMatch
!insert (M47, MP285) into MatchMatchPlayer

!new MatchPlayerPosition('MPP285')
!MPP285.positionName := #FORWARD
!MPP285.number := 9
!insert (MP285, MPP285) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP286')
!MP286.booked := true
!MP286.goals := 0
!MP286.rating := 5
!insert (P272, MP286) into PlayerMatch
!insert (M47, MP286) into MatchMatchPlayer

!new MatchPlayerPosition('MPP286')
!MPP286.positionName := #DEFENDER
!MPP286.number := 5
!insert (MP286, MPP286) into MatchPlayerMatchPlayerPosition
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 706 | 0.00% |
| Multiplicities Errors | 0 | 181 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 6 | 51 | 11.76% |

| Failed dates | 
|---| 
```
2026-07-03 19:15
```
```
2026-07-04 20:30
```
```
2026-07-05 18:45
```
```
2026-07-05 20:00
```
```
2026-07-07 19:30
```
```
2026-07-09 20:30
```

## Category boundary
```
!new Club('C11')
!C11.name := 'Buenos Aires Barrio FC'
!C11.homeGround := 'Estadio del Pasaje (Buenos Aires)'
!C11.chairman := 'Lucia Fernandez'

!new Team('T13')
!T13.name := 'Barrio Seniors'
!insert (C11, T13) into ClubTeam

!new Club('C12')
!C12.name := 'Nairobi Umoja United'
!C12.homeGround := 'Umoja Community Stadium (Nairobi)'
!C12.chairman := 'Peter Mwangi'

!new Team('T14')
!T14.name := 'Umoja First Team'
!insert (C12, T14) into ClubTeam

!new Club('C13')
!C13.name := 'Praha Vltava SK'
!C13.homeGround := 'Hriste U Vltavy (Prague)'
!C13.chairman := 'Jan Novak'

!new Team('T15')
!T15.name := 'Vltava XI'
!insert (C13, T15) into ClubTeam

!new Player('P34')
!P34.name := 'Tomas Ibarra'
!P34.age := 32
!P34.bestFoot := #BOTH
!P34.phoneNumber := '+54-9-11-5555-0101'
!insert (T13, P34) into TeamPlayer

!new Position('POS64')
!POS64.positionName := #MIDFIELDER
!insert (P34, POS64) into PlayerPositions

!new TrainingObjective('TO51')
!TO51.areaToImprove := 'Maintain intensity through stoppage time'
!TO51.startDate := '2026-06-01'
!TO51.endDate := '2026-06-30'
!TO51.success := false
!insert (TO51, P34) into TrainingObjectivePlayer

!new PlayerNotes('PN26')
!PN26.note := 'Acts as player-coach; good organizing voice.'
!PN26.date := '2026-06-02'
!insert (P34, PN26) into PlayerPlayerNotes

!new PlayerNotes('PN27')
!PN27.note := 'Needs earlier release when pressed.'
!PN27.date := '2026-06-07'
!insert (P34, PN27) into PlayerPlayerNotes

!new PlayerNotes('PN28')
!PN28.note := 'Excellent two-footed passing range.'
!PN28.date := '2026-06-12'
!insert (P34, PN28) into PlayerPlayerNotes

!new Player('P35')
!P35.name := 'Achieng Otieno'
!P35.age := 24
!P35.bestFoot := #RIGHT
!P35.phoneNumber := '+254-711-010101'
!insert (T14, P35) into TeamPlayer

!new Position('POS65')
!POS65.positionName := #DEFENDER
!insert (P35, POS65) into PlayerPositions

!new Position('POS66')
!POS66.positionName := #MIDFIELDER
!insert (P35, POS66) into PlayerPositions

!new TrainingObjective('TO52')
!TO52.areaToImprove := 'Reduce fouls in defensive third'
!TO52.startDate := '2026-05-25'
!TO52.endDate := '2026-06-25'
!TO52.success := true
!insert (TO52, P35) into TrainingObjectivePlayer

!new Player('P36')
!P36.name := 'Hassan Abdalla'
!P36.age := 18
!P36.bestFoot := #LEFT
!P36.phoneNumber := '+254-722-020202'
!insert (T14, P36) into TeamPlayer

!new Position('POS67')
!POS67.positionName := #FORWARD
!insert (P36, POS67) into PlayerPositions

!new Position('POS68')
!POS68.positionName := #MIDFIELDER
!insert (P36, POS68) into PlayerPositions

!new Position('POS69')
!POS69.positionName := #DEFENDER
!insert (P36, POS69) into PlayerPositions

!new TrainingObjective('TO53')
!TO53.areaToImprove := 'Stay onside on diagonal runs'
!TO53.startDate := '2026-05-28'
!TO53.endDate := '2026-06-10'
!TO53.success := false
!insert (TO53, P36) into TrainingObjectivePlayer

!new TrainingObjective('TO54')
!TO54.areaToImprove := 'Finishing with weaker foot (right)'
!TO54.startDate := '2026-05-28'
!TO54.endDate := '2026-06-28'
!TO54.success := false
!insert (TO54, P36) into TrainingObjectivePlayer

!new PlayerNotes('PN29')
!PN29.note := 'Very quick; decision-making still developing.'
!PN29.date := '2026-06-03'
!insert (P36, PN29) into PlayerPlayerNotes

!new Player('P37')
!P37.name := 'Jakub Dvorak'
!P37.age := 27
!P37.bestFoot := #RIGHT
!P37.phoneNumber := '+420-601-010-010'
!insert (T15, P37) into TeamPlayer

!new Position('POS70')
!POS70.positionName := #GOALKEEPER
!insert (P37, POS70) into PlayerPositions

!new TrainingObjective('TO55')
!TO55.areaToImprove := 'Command box on corners'
!TO55.startDate := '2026-05-20'
!TO55.endDate := '2026-06-20'
!TO55.success := false
!insert (TO55, P37) into TrainingObjectivePlayer

!new PlayerNotes('PN30')
!PN30.note := 'Good shot-stopping; needs louder calls on set pieces.'
!PN30.date := '2026-06-05'
!insert (P37, PN30) into PlayerPlayerNotes

!new Player('P38')
!P38.name := 'Petra Svobodova'
!P38.age := 21
!P38.bestFoot := #BOTH
!P38.phoneNumber := '+420-602-020-020'
!insert (T15, P38) into TeamPlayer

!new Position('POS71')
!POS71.positionName := #MIDFIELDER
!insert (P38, POS71) into PlayerPositions

!new Position('POS72')
!POS72.positionName := #FORWARD
!insert (P38, POS72) into PlayerPositions

!new TrainingObjective('TO56')
!TO56.areaToImprove := 'First touch under pressure'
!TO56.startDate := '2026-05-22'
!TO56.endDate := '2026-06-22'
!TO56.success := true
!insert (TO56, P38) into TrainingObjectivePlayer

!new TrainingObjective('TO57')
!TO57.areaToImprove := 'Increase shot volume from edge of box'
!TO57.startDate := '2026-06-01'
!TO57.endDate := '2026-06-30'
!TO57.success := false
!insert (TO57, P38) into TrainingObjectivePlayer

!new Player('P39')
!P39.name := 'Marek Kral'
!P39.age := 36
!P39.bestFoot := #LEFT
!P39.phoneNumber := '+420-603-030-030'
!insert (T15, P39) into TeamPlayer

!new Position('POS73')
!POS73.positionName := #DEFENDER
!insert (P39, POS73) into PlayerPositions

!new Position('POS74')
!POS74.positionName := #MIDFIELDER
!insert (P39, POS74) into PlayerPositions

!new Position('POS75')
!POS75.positionName := #FORWARD
!insert (P39, POS75) into PlayerPositions

!new TrainingObjective('TO58')
!TO58.areaToImprove := 'Avoid bookings when tired'
!TO58.startDate := '2026-05-26'
!TO58.endDate := '2026-06-26'
!TO58.success := false
!insert (TO58, P39) into TrainingObjectivePlayer

!new PlayerNotes('PN31')
!PN31.note := 'Smart positioning; pace is declining.'
!PN31.date := '2026-06-04'
!insert (P39, PN31) into PlayerPlayerNotes

!new PlayerNotes('PN32')
!PN32.note := 'Very effective left-foot delivery on corners.'
!PN32.date := '2026-06-11'
!insert (P39, PN32) into PlayerPlayerNotes

!new TrainingSession('TS20')
!TS20.date := '2026-06-08'
!TS20.location := 'Pasaje Municipal Pitch (Buenos Aires)'
!TS20.purpose := 'Compact midfield + late-game management'
!insert (T13, TS20) into TeamTraining

!new TrainingNotes('TN29')
!TN29.note := 'Focused on conserving energy and tactical fouls avoidance.'
!TN29.date := '2026-06-08'
!insert (TS20, TN29) into TrainingTrainingNotes

!new TrainingSession('TS21')
!TS21.date := '2026-06-06'
!TS21.location := 'Umoja Community Training Ground'
!TS21.purpose := 'High press + offside discipline'
!insert (T14, TS21) into TeamTraining

!new TrainingNotes('TN30')
!TN30.note := 'Pressing triggers improved; line stepped up together.'
!TN30.date := '2026-06-06'
!insert (TS21, TN30) into TrainingTrainingNotes

!new TrainingNotes('TN31')
!TN31.note := 'Repeated offside-run timing drills for forwards.'
!TN31.date := '2026-06-06'
!insert (TS21, TN31) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA17')
!FA17.reason := 'Family errand; arrived after cooldown'
!insert (TS21, FA17) into TrainingFailded
!insert (FA17, P35) into FailedPlayer

!new TrainingFailedToAttend('FA18')
!FA18.reason := 'Minor ankle knock; physio advised rest'
!insert (TS21, FA18) into TrainingFailded
!insert (FA18, P36) into FailedPlayer

!new TrainingSession('TS22')
!TS22.date := '2026-06-05'
!TS22.location := 'Hriste U Vltavy (Pitch B)'
!TS22.purpose := 'Set pieces: corners + free kicks'
!insert (T15, TS22) into TeamTraining

!new TrainingNotes('TN32')
!TN32.note := 'Corner routines worked; keeper communication still inconsistent.'
!TN32.date := '2026-06-05'
!insert (TS22, TN32) into TrainingTrainingNotes

!new TrainingSession('TS23')
!TS23.date := '2026-06-12'
!TS23.location := 'Hriste U Vltavy (Main)'
!TS23.purpose := 'Finishing under pressure + transition defense'
!insert (T15, TS23) into TeamTraining

!new TrainingNotes('TN33')
!TN33.note := 'Finishing drills: emphasized low shots across keeper.'
!TN33.date := '2026-06-12'
!insert (TS23, TN33) into TrainingTrainingNotes

!new TrainingNotes('TN34')
!TN34.note := 'Transition defense improved after 20-minute block.'
!TN34.date := '2026-06-12'
!insert (TS23, TN34) into TrainingTrainingNotes

!new TrainingNotes('TN35')
!TN35.note := 'Added stoppage-time scenario game (90+).'
!TN35.date := '2026-06-12'
!insert (TS23, TN35) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA19')
!FA19.reason := 'Work travel; missed full session'
!insert (TS23, FA19) into TrainingFailded
!insert (FA19, P39) into FailedPlayer

!new Competition('COMP6')
!COMP6.name := 'Tri-Continent Round-Robin Cup'
!COMP6.type := 'Friendly Round Robin'

!new Match('M8')
!M8.date := '2026-06-15'
!M8.homeAway := true
!insert (COMP6, M8) into CompetitionMatch
!insert (T13, M8) into LocalMatch
!insert (T14, M8) into VisitorMatch

!new MatchReport('MR8')
!MR8.duration := 92
!MR8.scoreLocal := 0
!MR8.scoreVisitor := 1
!insert (M8, MR8) into MatchMatchReport

!new MatchEvent('ME47')
!ME47.eventType := #FOUL
!ME47.time := 14
!insert (M8, ME47) into MatchMatchEvent

!new MatchEvent('ME48')
!ME48.eventType := #OFFSIDE
!ME48.time := 33
!insert (M8, ME48) into MatchMatchEvent

!new MatchEvent('ME49')
!ME49.eventType := #CORNER
!ME49.time := 56
!insert (M8, ME49) into MatchMatchEvent

!new MatchEvent('ME50')
!ME50.eventType := #PENALTY
!ME50.time := 70
!insert (M8, ME50) into MatchMatchEvent

!new MatchEvent('ME51')
!ME51.eventType := #GOAL
!ME51.time := 71
!insert (M8, ME51) into MatchMatchEvent

!new MatchPlayer('MP27')
!MP27.booked := false
!MP27.goals := 0
!MP27.rating := 6
!insert (P34, MP27) into PlayerMatch
!insert (M8, MP27) into MatchMatchPlayer

!new MatchPlayerPosition('MPP27')
!MPP27.positionName := #MIDFIELDER
!MPP27.number := 10
!insert (MP27, MPP27) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP28')
!MP28.booked := true
!MP28.goals := 0
!MP28.rating := 5
!insert (P35, MP28) into PlayerMatch
!insert (M8, MP28) into MatchMatchPlayer

!new MatchPlayerPosition('MPP28')
!MPP28.positionName := #DEFENDER
!MPP28.number := 4
!insert (MP28, MPP28) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP29')
!MP29.booked := false
!MP29.goals := 1
!MP29.rating := 8
!insert (P36, MP29) into PlayerMatch
!insert (M8, MP29) into MatchMatchPlayer

!new MatchPlayerPosition('MPP29')
!MPP29.positionName := #FORWARD
!MPP29.number := 9
!insert (MP29, MPP29) into MatchPlayerMatchPlayerPosition

!new Match('M9')
!M9.date := '2026-06-18'
!M9.homeAway := false
!insert (COMP6, M9) into CompetitionMatch
!insert (T14, M9) into LocalMatch
!insert (T15, M9) into VisitorMatch

!new MatchReport('MR9')
!MR9.duration := 95
!MR9.scoreLocal := 3
!MR9.scoreVisitor := 3
!insert (M9, MR9) into MatchMatchReport

!new MatchEvent('ME52')
!ME52.eventType := #GOAL
!ME52.time := 5
!insert (M9, ME52) into MatchMatchEvent

!new MatchEvent('ME53')
!ME53.eventType := #GOAL
!ME53.time := 17
!insert (M9, ME53) into MatchMatchEvent

!new MatchEvent('ME54')
!ME54.eventType := #CORNER
!ME54.time := 26
!insert (M9, ME54) into MatchMatchEvent

!new MatchEvent('ME55')
!ME55.eventType := #GOAL
!ME55.time := 41
!insert (M9, ME55) into MatchMatchEvent

!new MatchEvent('ME56')
!ME56.eventType := #FOUL
!ME56.time := 52
!insert (M9, ME56) into MatchMatchEvent

!new MatchEvent('ME57')
!ME57.eventType := #GOAL
!ME57.time := 60
!insert (M9, ME57) into MatchMatchEvent

!new MatchEvent('ME58')
!ME58.eventType := #OFFSIDE
!ME58.time := 66
!insert (M9, ME58) into MatchMatchEvent

!new MatchEvent('ME59')
!ME59.eventType := #GOAL
!ME59.time := 73
!insert (M9, ME59) into MatchMatchEvent

!new MatchEvent('ME60')
!ME60.eventType := #PENALTY
!ME60.time := 89
!insert (M9, ME60) into MatchMatchEvent

!new MatchEvent('ME61')
!ME61.eventType := #GOAL
!ME61.time := 94
!insert (M9, ME61) into MatchMatchEvent

!new MatchNote('MN11')
!MN11.note := 'End-to-end game; late equalizer in stoppage time.'
!MN11.date := '2026-06-18'
!insert (M9, MN11) into MatchMatchNote

!new MatchNote('MN12')
!MN12.note := 'Penalty was awarded late; goal recorded as separate GOAL event.'
!MN12.date := '2026-06-18'
!insert (M9, MN12) into MatchMatchNote

!new MatchPlayer('MP31')
!MP31.booked := false
!MP31.goals := 0
!MP31.rating := 6
!insert (P35, MP31) into PlayerMatch
!insert (M9, MP31) into MatchMatchPlayer

!new MatchPlayerPosition('MPP31')
!MPP31.positionName := #MIDFIELDER
!MPP31.number := 6
!insert (MP31, MPP31) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP32')
!MP32.booked := false
!MP32.goals := 2
!MP32.rating := 8
!insert (P36, MP32) into PlayerMatch
!insert (M9, MP32) into MatchMatchPlayer

!new MatchPlayerPosition('MPP32')
!MPP32.positionName := #FORWARD
!MPP32.number := 9
!insert (MP32, MPP32) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP33')
!MP33.booked := false
!MP33.goals := 0
!MP33.rating := 7
!insert (P37, MP33) into PlayerMatch
!insert (M9, MP33) into MatchMatchPlayer

!new MatchPlayerPosition('MPP33')
!MPP33.positionName := #GOALKEEPER
!MPP33.number := 1
!insert (MP33, MPP33) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP34')
!MP34.booked := false
!MP34.goals := 1
!MP34.rating := 7
!insert (P38, MP34) into PlayerMatch
!insert (M9, MP34) into MatchMatchPlayer

!new MatchPlayerPosition('MPP34')
!MPP34.positionName := #FORWARD
!MPP34.number := 11
!insert (MP34, MPP34) into MatchPlayerMatchPlayerPosition

!new Match('M10')
!M10.date := '2026-06-21'
!M10.homeAway := true
!insert (COMP6, M10) into CompetitionMatch
!insert (T15, M10) into LocalMatch
!insert (T13, M10) into VisitorMatch

!new MatchReport('MR10')
!MR10.duration := 90
!MR10.scoreLocal := 2
!MR10.scoreVisitor := 0
!insert (M10, MR10) into MatchMatchReport

!new MatchEvent('ME62')
!ME62.eventType := #FOUL
!ME62.time := 9
!insert (M10, ME62) into MatchMatchEvent

!new MatchEvent('ME63')
!ME63.eventType := #GOAL
!ME63.time := 22
!insert (M10, ME63) into MatchMatchEvent

!new MatchEvent('ME64')
!ME64.eventType := #CORNER
!ME64.time := 48
!insert (M10, ME64) into MatchMatchEvent

!new MatchEvent('ME65')
!ME65.eventType := #OFFSIDE
!ME65.time := 64
!insert (M10, ME65) into MatchMatchEvent

!new MatchEvent('ME66')
!ME66.eventType := #GOAL
!ME66.time := 77
!insert (M10, ME66) into MatchMatchEvent

!new MatchNote('MN13')
!MN13.note := 'Visitor had limited substitutions; fatigue showed after halftime.'
!MN13.date := '2026-06-21'
!insert (M10, MN13) into MatchMatchNote

!new MatchPlayer('MP37')
!MP37.booked := false
!MP37.goals := 0
!MP37.rating := 7
!insert (P37, MP37) into PlayerMatch
!insert (M10, MP37) into MatchMatchPlayer

!new MatchPlayerPosition('MPP37')
!MPP37.positionName := #GOALKEEPER
!MPP37.number := 1
!insert (MP37, MPP37) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP36')
!MP36.booked := false
!MP36.goals := 0
!MP36.rating := 6
!insert (P34, MP36) into PlayerMatch
!insert (M10, MP36) into MatchMatchPlayer

!new MatchPlayerPosition('MPP36')
!MPP36.positionName := #MIDFIELDER
!MPP36.number := 10
!insert (MP36, MPP36) into MatchPlayerMatchPlayerPosition
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 447 | 0.00% |
| Multiplicities Errors | 0 | 115 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 40 | 0.00% |

## Category complex
```
!new Club('C70')
!C70.name := 'Reykjavik Fjordur FC'
!C70.homeGround := 'Fjordur Vollur'
!C70.chairman := 'Helga Kristjansdottir'

!new Team('T86')
!T86.name := 'Reykjavik Fjordur First Team'
!insert (C70, T86) into ClubTeam

!new Club('C71')
!C71.name := 'Club Deportivo Oaxaca Sur'
!C71.homeGround := 'Estadio Benito Juarez (Anexo)'
!C71.chairman := 'Cecilia Hernandez'

!new Team('T87')
!T87.name := 'Oaxaca Sur'
!insert (C71, T87) into ClubTeam

!new Club('C72')
!C72.name := 'Nairobi Umoja SC'
!C72.homeGround := 'Umoja Community Grounds'
!C72.chairman := 'David Kariuki'

!new Team('T88')
!T88.name := 'Nairobi Umoja First XI'
!insert (C72, T88) into ClubTeam

!new Club('C73')
!C73.name := 'Alexandria Lighthouse Club'
!C73.homeGround := 'Borg El Arab Training Annex'
!C73.chairman := 'Mona El-Sherif'

!new Team('T89')
!T89.name := 'Alexandria Lighthouse Seniors'
!insert (C73, T89) into ClubTeam

!new Team('T90')
!T90.name := 'Alexandria Lighthouse U18'
!insert (C73, T90) into ClubTeam

!new Player('P312')
!P312.name := 'Einar Gudmundsson'
!P312.age := 32
!P312.bestFoot := #RIGHT
!P312.phoneNumber := '+354 611 2201'
!insert (T86, P312) into TeamPlayer

!new Position('POS473')
!POS473.positionName := #GOALKEEPER
!insert (P312, POS473) into PlayerPositions

!new TrainingObjective('TO340')
!TO340.areaToImprove := 'Quicker short passing to fullbacks under press'
!TO340.startDate := '2026-05-20'
!TO340.endDate := '2026-06-20'
!TO340.success := false
!insert (TO340, P312) into TrainingObjectivePlayer

!new PlayerNotes('PN100')
!PN100.note := 'Commanding voice improved; keep organizing on corners.'
!PN100.date := '2026-05-31'
!insert (P312, PN100) into PlayerPlayerNotes

!new Player('P313')
!P313.name := 'Sigridur Jonsdottir'
!P313.age := 25
!P313.bestFoot := #LEFT
!P313.phoneNumber := '+354 699 4102'
!insert (T86, P313) into TeamPlayer

!new Position('POS474')
!POS474.positionName := #DEFENDER
!insert (P313, POS474) into PlayerPositions

!new Position('POS475')
!POS475.positionName := #MIDFIELDER
!insert (P313, POS475) into PlayerPositions

!new TrainingObjective('TO341')
!TO341.areaToImprove := 'Back-post tracking on diagonals'
!TO341.startDate := '2026-05-21'
!TO341.endDate := '2026-06-10'
!TO341.success := true
!insert (TO341, P313) into TrainingObjectivePlayer

!new Player('P314')
!P314.name := 'Bjork Hauksdottir'
!P314.age := 23
!P314.bestFoot := #BOTH
!P314.phoneNumber := '+354 782 9930'
!insert (T86, P314) into TeamPlayer

!new Position('POS476')
!POS476.positionName := #MIDFIELDER
!insert (P314, POS476) into PlayerPositions

!new TrainingObjective('TO342')
!TO342.areaToImprove := 'Receiving on half-turn in tight spaces'
!TO342.startDate := '2026-05-21'
!TO342.endDate := '2026-06-21'
!TO342.success := false
!insert (TO342, P314) into TrainingObjectivePlayer

!new PlayerNotes('PN101')
!PN101.note := 'Very consistent in training; encourage more risk-taking passes.'
!PN101.date := '2026-05-28'
!insert (P314, PN101) into PlayerPlayerNotes

!new Player('P315')
!P315.name := 'Kari Sigurdsson'
!P315.age := 27
!P315.bestFoot := #RIGHT
!P315.phoneNumber := '+354 888 7410'
!insert (T86, P315) into TeamPlayer

!new Position('POS477')
!POS477.positionName := #FORWARD
!insert (P315, POS477) into PlayerPositions

!new Position('POS478')
!POS478.positionName := #MIDFIELDER
!insert (P315, POS478) into PlayerPositions

!new TrainingObjective('TO343')
!TO343.areaToImprove := 'First-time finishing from cut-backs'
!TO343.startDate := '2026-05-22'
!TO343.endDate := '2026-06-22'
!TO343.success := false
!insert (TO343, P315) into TrainingObjectivePlayer

!new Player('P316')
!P316.name := 'Hrafn Thordarson'
!P316.age := 21
!P316.bestFoot := #BOTH
!P316.phoneNumber := '+354 777 1155'
!insert (T86, P316) into TeamPlayer

!new Position('POS479')
!POS479.positionName := #DEFENDER
!insert (P316, POS479) into PlayerPositions

!new Position('POS480')
!POS480.positionName := #MIDFIELDER
!insert (P316, POS480) into PlayerPositions

!new Position('POS481')
!POS481.positionName := #FORWARD
!insert (P316, POS481) into PlayerPositions

!new TrainingObjective('TO344')
!TO344.areaToImprove := 'Decision-making: when to foul vs recover'
!TO344.startDate := '2026-05-22'
!TO344.endDate := '2026-06-05'
!TO344.success := true
!insert (TO344, P316) into TrainingObjectivePlayer

!new Player('P317')
!P317.name := 'Luis Angel Chavez'
!P317.age := 29
!P317.bestFoot := #RIGHT
!P317.phoneNumber := '+52 951 210 3344'
!insert (T87, P317) into TeamPlayer

!new Position('POS482')
!POS482.positionName := #GOALKEEPER
!insert (P317, POS482) into PlayerPositions

!new TrainingObjective('TO345')
!TO345.areaToImprove := 'Punch vs catch decision on wet crosses'
!TO345.startDate := '2026-05-18'
!TO345.endDate := '2026-06-18'
!TO345.success := false
!insert (TO345, P317) into TrainingObjectivePlayer

!new Player('P318')
!P318.name := 'Mariana Cruz'
!P318.age := 24
!P318.bestFoot := #RIGHT
!P318.phoneNumber := '+52 951 888 1901'
!insert (T87, P318) into TeamPlayer

!new Position('POS483')
!POS483.positionName := #DEFENDER
!insert (P318, POS483) into PlayerPositions

!new TrainingObjective('TO346')
!TO346.areaToImprove := '1v1 defending body shape (show outside)'
!TO346.startDate := '2026-05-19'
!TO346.endDate := '2026-06-12'
!TO346.success := true
!insert (TO346, P318) into TrainingObjectivePlayer

!new PlayerNotes('PN102')
!PN102.note := 'Very good discipline; rarely dives in.'
!PN102.date := '2026-05-30'
!insert (P318, PN102) into PlayerPlayerNotes

!new Player('P319')
!P319.name := 'Jose Itzel Ramirez'
!P319.age := 22
!P319.bestFoot := #LEFT
!P319.phoneNumber := '+52 951 300 7788'
!insert (T87, P319) into TeamPlayer

!new Position('POS484')
!POS484.positionName := #MIDFIELDER
!insert (P319, POS484) into PlayerPositions

!new Position('POS485')
!POS485.positionName := #FORWARD
!insert (P319, POS485) into PlayerPositions

!new TrainingObjective('TO347')
!TO347.areaToImprove := 'Final pass selection around box'
!TO347.startDate := '2026-05-19'
!TO347.endDate := '2026-06-19'
!TO347.success := false
!insert (TO347, P319) into TrainingObjectivePlayer

!new Player('P320')
!P320.name := 'Renata Santiago'
!P320.age := 26
!P320.bestFoot := #BOTH
!P320.phoneNumber := '+52 951 444 0202'
!insert (T87, P320) into TeamPlayer

!new Position('POS486')
!POS486.positionName := #FORWARD
!insert (P320, POS486) into PlayerPositions

!new TrainingObjective('TO348')
!TO348.areaToImprove := 'Timing runs vs offside line'
!TO348.startDate := '2026-05-20'
!TO348.endDate := '2026-06-20'
!TO348.success := false
!insert (TO348, P320) into TrainingObjectivePlayer

!new Player('P321')
!P321.name := 'Diego Hernandez'
!P321.age := 28
!P321.bestFoot := #RIGHT
!P321.phoneNumber := '+52 951 555 3434'
!insert (T87, P321) into TeamPlayer

!new Position('POS487')
!POS487.positionName := #MIDFIELDER
!insert (P321, POS487) into PlayerPositions

!new TrainingObjective('TO349')
!TO349.areaToImprove := 'Switching play under pressure (two-touch)'
!TO349.startDate := '2026-05-20'
!TO349.endDate := '2026-06-10'
!TO349.success := true
!insert (TO349, P321) into TrainingObjectivePlayer

!new Player('P322')
!P322.name := 'Peter Otieno'
!P322.age := 30
!P322.bestFoot := #RIGHT
!P322.phoneNumber := '+254 712 345678'
!insert (T88, P322) into TeamPlayer

!new Position('POS488')
!POS488.positionName := #GOALKEEPER
!insert (P322, POS488) into PlayerPositions

!new TrainingObjective('TO350')
!TO350.areaToImprove := 'Quicker throws to start counters'
!TO350.startDate := '2026-05-23'
!TO350.endDate := '2026-06-23'
!TO350.success := false
!insert (TO350, P322) into TrainingObjectivePlayer

!new Player('P323')
!P323.name := 'Achieng Auma'
!P323.age := 25
!P323.bestFoot := #LEFT
!P323.phoneNumber := '+254 701 998877'
!insert (T88, P323) into TeamPlayer

!new Position('POS489')
!POS489.positionName := #DEFENDER
!insert (P323, POS489) into PlayerPositions

!new Position('POS490')
!POS490.positionName := #MIDFIELDER
!insert (P323, POS490) into PlayerPositions

!new TrainingObjective('TO351')
!TO351.areaToImprove := 'Back-post marking on corners'
!TO351.startDate := '2026-05-23'
!TO351.endDate := '2026-06-15'
!TO351.success := true
!insert (TO351, P323) into TrainingObjectivePlayer

!new Player('P324')
!P324.name := 'Brian Mwangi'
!P324.age := 23
!P324.bestFoot := #BOTH
!P324.phoneNumber := '+254 799 120120'
!insert (T88, P324) into TeamPlayer

!new Position('POS491')
!POS491.positionName := #MIDFIELDER
!insert (P324, POS491) into PlayerPositions

!new TrainingObjective('TO352')
!TO352.areaToImprove := 'Scanning before receiving under pressure'
!TO352.startDate := '2026-05-24'
!TO352.endDate := '2026-06-07'
!TO352.success := false
!insert (TO352, P324) into TrainingObjectivePlayer

!new PlayerNotes('PN103')
!PN103.note := 'Good progress; keep reminding to check shoulder twice.'
!PN103.date := '2026-06-02'
!insert (P324, PN103) into PlayerPlayerNotes

!new Player('P325')
!P325.name := 'Sammy Kiptoo'
!P325.age := 27
!P325.bestFoot := #RIGHT
!P325.phoneNumber := '+254 710 555666'
!insert (T88, P325) into TeamPlayer

!new Position('POS492')
!POS492.positionName := #FORWARD
!insert (P325, POS492) into PlayerPositions

!new TrainingObjective('TO353')
!TO353.areaToImprove := 'Finishing from tight angles'
!TO353.startDate := '2026-05-24'
!TO353.endDate := '2026-06-24'
!TO353.success := false
!insert (TO353, P325) into TrainingObjectivePlayer

!new Player('P326')
!P326.name := 'Wanjiru Njeri'
!P326.age := 21
!P326.bestFoot := #BOTH
!P326.phoneNumber := '+254 733 222111'
!insert (T88, P326) into TeamPlayer

!new Position('POS493')
!POS493.positionName := #MIDFIELDER
!insert (P326, POS493) into PlayerPositions

!new Position('POS494')
!POS494.positionName := #DEFENDER
!insert (P326, POS494) into PlayerPositions

!new Position('POS495')
!POS495.positionName := #FORWARD
!insert (P326, POS495) into PlayerPositions

!new TrainingObjective('TO354')
!TO354.areaToImprove := 'Defensive transition sprint back (first 5 seconds)'
!TO354.startDate := '2026-05-25'
!TO354.endDate := '2026-06-25'
!TO354.success := false
!insert (TO354, P326) into TrainingObjectivePlayer

!new Player('P327')
!P327.name := 'Karim El Masry'
!P327.age := 31
!P327.bestFoot := #RIGHT
!P327.phoneNumber := '+20 10 1234 5678'
!insert (T89, P327) into TeamPlayer

!new Position('POS496')
!POS496.positionName := #GOALKEEPER
!insert (P327, POS496) into PlayerPositions

!new TrainingObjective('TO355')
!TO355.areaToImprove := 'Set-piece communication and wall setup'
!TO355.startDate := '2026-05-19'
!TO355.endDate := '2026-06-19'
!TO355.success := false
!insert (TO355, P327) into TrainingObjectivePlayer

!new Player('P328')
!P328.name := 'Yara Hassan'
!P328.age := 22
!P328.bestFoot := #BOTH
!P328.phoneNumber := '+20 12 2222 1111'
!insert (T89, P328) into TeamPlayer

!new Position('POS497')
!POS497.positionName := #DEFENDER
!insert (P328, POS497) into PlayerPositions

!new Position('POS498')
!POS498.positionName := #MIDFIELDER
!insert (P328, POS498) into PlayerPositions

!new TrainingObjective('TO356')
!TO356.areaToImprove := 'Tackling timing (avoid late contact)'
!TO356.startDate := '2026-05-19'
!TO356.endDate := '2026-06-05'
!TO356.success := true
!insert (TO356, P328) into TrainingObjectivePlayer

!new Player('P329')
!P329.name := 'Mostafa Abdelrahman'
!P329.age := 26
!P329.bestFoot := #LEFT
!P329.phoneNumber := '+20 11 9090 3030'
!insert (T89, P329) into TeamPlayer

!new Position('POS499')
!POS499.positionName := #MIDFIELDER
!insert (P329, POS499) into PlayerPositions

!new TrainingObjective('TO357')
!TO357.areaToImprove := 'Switching play quickly (one less touch)'
!TO357.startDate := '2026-05-20'
!TO357.endDate := '2026-06-20'
!TO357.success := false
!insert (TO357, P329) into TrainingObjectivePlayer

!new PlayerNotes('PN104')
!PN104.note := 'Often arrives fatigued from work; adjust recovery plan.'
!PN104.date := '2026-05-27'
!insert (P329, PN104) into PlayerPlayerNotes

!new Player('P330')
!P330.name := 'Omar Fathy'
!P330.age := 24
!P330.bestFoot := #RIGHT
!P330.phoneNumber := '+20 10 5555 8888'
!insert (T89, P330) into TeamPlayer

!new Position('POS500')
!POS500.positionName := #FORWARD
!insert (P330, POS500) into PlayerPositions

!new TrainingObjective('TO358')
!TO358.areaToImprove := 'Composure in 1v1 with goalkeeper'
!TO358.startDate := '2026-05-20'
!TO358.endDate := '2026-06-10'
!TO358.success := false
!insert (TO358, P330) into TrainingObjectivePlayer

!new Player('P331')
!P331.name := 'Nour El Din'
!P331.age := 17
!P331.bestFoot := #RIGHT
!P331.phoneNumber := '+20 15 1111 2222'
!insert (T90, P331) into TeamPlayer

!new Position('POS501')
!POS501.positionName := #GOALKEEPER
!insert (P331, POS501) into PlayerPositions

!new TrainingObjective('TO359')
!TO359.areaToImprove := 'Footwork for low saves'
!TO359.startDate := '2026-05-21'
!TO359.endDate := '2026-06-21'
!TO359.success := false
!insert (TO359, P331) into TrainingObjectivePlayer

!new Player('P332')
!P332.name := 'Hana Salah'
!P332.age := 16
!P332.bestFoot := #LEFT
!P332.phoneNumber := '+20 15 3333 4444'
!insert (T90, P332) into TeamPlayer

!new Position('POS502')
!POS502.positionName := #DEFENDER
!insert (P332, POS502) into PlayerPositions

!new TrainingObjective('TO360')
!TO360.areaToImprove := 'Defensive scanning before receiving'
!TO360.startDate := '2026-05-21'
!TO360.endDate := '2026-06-08'
!TO360.success := true
!insert (TO360, P332) into TrainingObjectivePlayer

!new Player('P333')
!P333.name := 'Ziad Saleh'
!P333.age := 17
!P333.bestFoot := #BOTH
!P333.phoneNumber := '+20 15 6666 7777'
!insert (T90, P333) into TeamPlayer

!new Position('POS503')
!POS503.positionName := #FORWARD
!insert (P333, POS503) into PlayerPositions

!new Position('POS504')
!POS504.positionName := #MIDFIELDER
!insert (P333, POS504) into PlayerPositions

!new TrainingObjective('TO361')
!TO361.areaToImprove := 'Near-post runs and first-time finishes'
!TO361.startDate := '2026-05-22'
!TO361.endDate := '2026-06-22'
!TO361.success := false
!insert (TO361, P333) into TrainingObjectivePlayer

!new TrainingSession('TS113')
!TS113.date := '2026-05-26'
!TS113.location := 'Fjordur Vollur - Indoor Hall'
!TS113.purpose := 'Cold-weather ball circulation + pressing cues'
!insert (T86, TS113) into TeamTraining

!new TrainingNotes('TN174')
!TN174.note := 'Press trigger: backwards pass to fullback; winger jumps, 8 covers inside.'
!TN174.date := '2026-05-26'
!insert (TS113, TN174) into TrainingTrainingNotes

!new TrainingNotes('TN175')
!TN175.note := 'Keep build-up triangles; avoid straight-line passing.'
!TN175.date := '2026-05-26'
!insert (TS113, TN175) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA86')
!FA86.reason := 'Fishing shift extended; could not arrive'
!insert (TS113, FA86) into TrainingFailded
!insert (FA86, P315) into FailedPlayer

!new TrainingSession('TS114')
!TS114.date := '2026-05-30'
!TS114.location := 'Fjordur Vollur - Pitch A'
!TS114.purpose := 'Set pieces: attacking corners and second balls'
!insert (T86, TS114) into TeamTraining

!new TrainingNotes('TN176')
!TN176.note := 'Near-post run must block keepers line; far-post arrives late.'
!TN176.date := '2026-05-30'
!insert (TS114, TN176) into TrainingTrainingNotes

!new TrainingSession('TS115')
!TS115.date := '2026-05-27'
!TS115.location := 'Estadio Benito Juarez (Anexo) - Field 1'
!TS115.purpose := 'High-altitude conditioning + finishing'
!insert (T87, TS115) into TeamTraining

!new TrainingNotes('TN177')
!TN177.note := 'Finish low on tired legs; prioritize placement over power.'
!TN177.date := '2026-05-27'
!insert (TS115, TN177) into TrainingTrainingNotes

!new TrainingNotes('TN178')
!TN178.note := 'Midfield must offer third-man option after layoff.'
!TN178.date := '2026-05-27'
!insert (TS115, TN178) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA87')
!FA87.reason := 'Stomach upset; sent home'
!insert (TS115, FA87) into TrainingFailded
!insert (FA87, P319) into FailedPlayer

!new TrainingSession('TS116')
!TS116.date := '2026-05-28'
!TS116.location := 'Umoja Community Grounds - Main Pitch'
!TS116.purpose := 'Low-block defending and counters'
!insert (T88, TS116) into TeamTraining

!new TrainingNotes('TN179')
!TN179.note := 'Back line stays compact; first pass of counter must be forward.'
!TN179.date := '2026-05-28'
!insert (TS116, TN179) into TrainingTrainingNotes

!new TrainingSession('TS117')
!TS117.date := '2026-06-03'
!TS117.location := 'Umoja Community Grounds - Field 2'
!TS117.purpose := 'Penalty practice + set-piece defending'
!insert (T88, TS117) into TeamTraining

!new TrainingNotes('TN180')
!TN180.note := 'Penalties: pick corner early; no stutter step.'
!TN180.date := '2026-06-03'
!insert (TS117, TN180) into TrainingTrainingNotes

!new TrainingNotes('TN181')
!TN181.note := 'On corners, assign one blocker and one runner to clear second ball.'
!TN181.date := '2026-06-03'
!insert (TS117, TN181) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA88')
!FA88.reason := 'University exam rescheduled to evening slot'
!insert (TS117, FA88) into TrainingFailded
!insert (FA88, P326) into FailedPlayer

!new TrainingSession('TS118')
!TS118.date := '2026-05-25'
!TS118.location := 'Borg El Arab Annex - Pitch 2'
!TS118.purpose := 'Midfield circulation + switching play'
!insert (T89, TS118) into TeamTraining

!new TrainingNotes('TN182')
!TN182.note := 'Switch play in two passes; do not carry too long.'
!TN182.date := '2026-05-25'
!insert (TS118, TN182) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA89')
!FA89.reason := 'Shift ended late at warehouse'
!insert (TS118, FA89) into TrainingFailded
!insert (FA89, P329) into FailedPlayer

!new TrainingSession('TS119')
!TS119.date := '2026-05-29'
!TS119.location := 'Borg El Arab Annex - Gym'
!TS119.purpose := 'Strength + injury prevention (adductors/hamstrings)'
!insert (T89, TS119) into TeamTraining

!new TrainingNotes('TN183')
!TN183.note := 'Adductor progression: add volume only if no soreness next day.'
!TN183.date := '2026-05-29'
!insert (TS119, TN183) into TrainingTrainingNotes

!new TrainingNotes('TN184')
!TN184.note := 'Forwards: eccentric hamstring work emphasized.'
!TN184.date := '2026-05-29'
!insert (TS119, TN184) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA90')
!FA90.reason := 'Back pain flare-up; physio advised rest'
!insert (TS119, FA90) into TrainingFailded
!insert (FA90, P329) into FailedPlayer

!new TrainingFailedToAttend('FA91')
!FA91.reason := 'Family event (out of Alexandria)'
!insert (TS119, FA91) into TrainingFailded
!insert (FA91, P330) into FailedPlayer

!new TrainingSession('TS120')
!TS120.date := '2026-05-26'
!TS120.location := 'Borg El Arab Annex - Youth Pitch'
!TS120.purpose := 'First touch + defensive scanning'
!insert (T90, TS120) into TeamTraining

!new TrainingNotes('TN185')
!TN185.note := 'Scan twice before receiving; open body to play forward.'
!TN185.date := '2026-05-26'
!insert (TS120, TN185) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA92')
!FA92.reason := 'School detention; not released in time'
!insert (TS120, FA92) into TrainingFailded
!insert (FA92, P332) into FailedPlayer

!new Competition('COMP29')
!COMP29.name := 'Arctic-Sierra Charity Cup'
!COMP29.type := 'One-off charity friendly'

!new Competition('COMP30')
!COMP30.name := 'East Africa Invitational Friendly'
!COMP30.type := 'One-off international friendly'

!new Match('M49')
!M49.date := '2026-06-01'
!M49.homeAway := true
!insert (COMP29, M49) into CompetitionMatch
!insert (T86, M49) into LocalMatch
!insert (T87, M49) into VisitorMatch

!new MatchReport('MR48')
!MR48.duration := 90
!MR48.scoreLocal := 1
!MR48.scoreVisitor := 0
!insert (M49, MR48) into MatchMatchReport

!new MatchEvent('ME289')
!ME289.eventType := #FOUL
!ME289.time := 18
!insert (M49, ME289) into MatchMatchEvent

!new MatchEvent('ME290')
!ME290.eventType := #CORNER
!ME290.time := 44
!insert (M49, ME290) into MatchMatchEvent

!new MatchEvent('ME291')
!ME291.eventType := #GOAL
!ME291.time := 61
!insert (M49, ME291) into MatchMatchEvent

!new MatchEvent('ME292')
!ME292.eventType := #OFFSIDE
!ME292.time := 70
!insert (M49, ME292) into MatchMatchEvent

!new MatchNote('MN62')
!MN62.note := 'Windy conditions; long balls held up and favored the defending side.'
!MN62.date := '2026-06-01'
!insert (M49, MN62) into MatchMatchNote

!new MatchPlayer('MP305')
!MP305.booked := false
!MP305.goals := 0
!MP305.rating := 7
!insert (P312, MP305) into PlayerMatch
!insert (M49, MP305) into MatchMatchPlayer

!new MatchPlayerPosition('MPP305')
!MPP305.positionName := #GOALKEEPER
!MPP305.number := 1
!insert (MP305, MPP305) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP306')
!MP306.booked := false
!MP306.goals := 0
!MP306.rating := 7
!insert (P313, MP306) into PlayerMatch
!insert (M49, MP306) into MatchMatchPlayer

!new MatchPlayerPosition('MPP306')
!MPP306.positionName := #DEFENDER
!MPP306.number := 4
!insert (MP306, MPP306) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP307')
!MP307.booked := false
!MP307.goals := 0
!MP307.rating := 6
!insert (P314, MP307) into PlayerMatch
!insert (M49, MP307) into MatchMatchPlayer

!new MatchPlayerPosition('MPP307')
!MPP307.positionName := #MIDFIELDER
!MPP307.number := 8
!insert (MP307, MPP307) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP308')
!MP308.booked := false
!MP308.goals := 1
!MP308.rating := 8
!insert (P315, MP308) into PlayerMatch
!insert (M49, MP308) into MatchMatchPlayer

!new MatchPlayerPosition('MPP308')
!MPP308.positionName := #FORWARD
!MPP308.number := 9
!insert (MP308, MPP308) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP309')
!MP309.booked := false
!MP309.goals := 0
!MP309.rating := 6
!insert (P317, MP309) into PlayerMatch
!insert (M49, MP309) into MatchMatchPlayer

!new MatchPlayerPosition('MPP309')
!MPP309.positionName := #GOALKEEPER
!MPP309.number := 1
!insert (MP309, MPP309) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP310')
!MP310.booked := true
!MP310.goals := 0
!MP310.rating := 6
!insert (P318, MP310) into PlayerMatch
!insert (M49, MP310) into MatchMatchPlayer

!new MatchPlayerPosition('MPP310')
!MPP310.positionName := #DEFENDER
!MPP310.number := 3
!insert (MP310, MPP310) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP311')
!MP311.booked := false
!MP311.goals := 0
!MP311.rating := 6
!insert (P321, MP311) into PlayerMatch
!insert (M49, MP311) into MatchMatchPlayer

!new MatchPlayerPosition('MPP311')
!MPP311.positionName := #MIDFIELDER
!MPP311.number := 6
!insert (MP311, MPP311) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP312')
!MP312.booked := false
!MP312.goals := 0
!MP312.rating := 6
!insert (P320, MP312) into PlayerMatch
!insert (M49, MP312) into MatchMatchPlayer

!new MatchPlayerPosition('MPP312')
!MPP312.positionName := #FORWARD
!MPP312.number := 11
!insert (MP312, MPP312) into MatchPlayerMatchPlayerPosition

!new Match('M50')
!M50.date := '2026-06-05'
!M50.homeAway := false
!insert (COMP30, M50) into CompetitionMatch
!insert (T88, M50) into LocalMatch
!insert (T86, M50) into VisitorMatch

!new MatchReport('MR49')
!MR49.duration := 93
!MR49.scoreLocal := 0
!MR49.scoreVisitor := 0
!insert (M50, MR49) into MatchMatchReport

!new MatchEvent('ME293')
!ME293.eventType := #FOUL
!ME293.time := 12
!insert (M50, ME293) into MatchMatchEvent

!new MatchEvent('ME294')
!ME294.eventType := #CORNER
!ME294.time := 37
!insert (M50, ME294) into MatchMatchEvent

!new MatchEvent('ME295')
!ME295.eventType := #OFFSIDE
!ME295.time := 49
!insert (M50, ME295) into MatchMatchEvent

!new MatchEvent('ME296')
!ME296.eventType := #PENALTY
!ME296.time := 75
!insert (M50, ME296) into MatchMatchEvent

!new MatchEvent('ME297')
!ME297.eventType := #FOUL
!ME297.time := 89
!insert (M50, ME297) into MatchMatchEvent

!new MatchNote('MN63')
!MN63.note := 'Penalty at 75 minutes was saved; keeper guessed correctly and held the rebound.'
!MN63.date := '2026-06-05'
!insert (M50, MN63) into MatchMatchNote

!new MatchNote('MN64')
!MN64.note := 'Visitor struggled to connect passes on the bumpy surface; simplified build-up late.'
!MN64.date := '2026-06-05'
!insert (M50, MN64) into MatchMatchNote

!new MatchNote('MN65')
!MN65.note := 'Local sides counters were dangerous but final pass lacked accuracy.'
!MN65.date := '2026-06-05'
!insert (M50, MN65) into MatchMatchNote

!new MatchPlayer('MP313')
!MP313.booked := false
!MP313.goals := 0
!MP313.rating := 8
!insert (P322, MP313) into PlayerMatch
!insert (M50, MP313) into MatchMatchPlayer

!new MatchPlayerPosition('MPP313')
!MPP313.positionName := #GOALKEEPER
!MPP313.number := 1
!insert (MP313, MPP313) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP314')
!MP314.booked := true
!MP314.goals := 0
!MP314.rating := 6
!insert (P323, MP314) into PlayerMatch
!insert (M50, MP314) into MatchMatchPlayer

!new MatchPlayerPosition('MPP314')
!MPP314.positionName := #DEFENDER
!MPP314.number := 5
!insert (MP314, MPP314) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP315')
!MP315.booked := false
!MP315.goals := 0
!MP315.rating := 7
!insert (P324, MP315) into PlayerMatch
!insert (M50, MP315) into MatchMatchPlayer

!new MatchPlayerPosition('MPP315')
!MPP315.positionName := #MIDFIELDER
!MPP315.number := 8
!insert (MP315, MPP315) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP316')
!MP316.booked := false
!MP316.goals := 0
!MP316.rating := 6
!insert (P325, MP316) into PlayerMatch
!insert (M50, MP316) into MatchMatchPlayer

!new MatchPlayerPosition('MPP316')
!MPP316.positionName := #FORWARD
!MPP316.number := 9
!insert (MP316, MPP316) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP317')
!MP317.booked := false
!MP317.goals := 0
!MP317.rating := 6
!insert (P326, MP317) into PlayerMatch
!insert (M50, MP317) into MatchMatchPlayer

!new MatchPlayerPosition('MPP317')
!MPP317.positionName := #MIDFIELDER
!MPP317.number := 11
!insert (MP317, MPP317) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP318')
!MP318.booked := false
!MP318.goals := 0
!MP318.rating := 7
!insert (P312, MP318) into PlayerMatch
!insert (M50, MP318) into MatchMatchPlayer

!new MatchPlayerPosition('MPP318')
!MPP318.positionName := #GOALKEEPER
!MPP318.number := 1
!insert (MP318, MPP318) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP319')
!MP319.booked := false
!MP319.goals := 0
!MP319.rating := 7
!insert (P313, MP319) into PlayerMatch
!insert (M50, MP319) into MatchMatchPlayer

!new MatchPlayerPosition('MPP319')
!MPP319.positionName := #DEFENDER
!MPP319.number := 4
!insert (MP319, MPP319) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP320')
!MP320.booked := false
!MP320.goals := 0
!MP320.rating := 6
!insert (P314, MP320) into PlayerMatch
!insert (M50, MP320) into MatchMatchPlayer

!new MatchPlayerPosition('MPP320')
!MPP320.positionName := #MIDFIELDER
!MPP320.number := 8
!insert (MP320, MPP320) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP321')
!MP321.booked := false
!MP321.goals := 0
!MP321.rating := 5
!insert (P315, MP321) into PlayerMatch
!insert (M50, MP321) into MatchMatchPlayer

!new MatchPlayerPosition('MPP321')
!MPP321.positionName := #FORWARD
!MPP321.number := 9
!insert (MP321, MPP321) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP322')
!MP322.booked := true
!MP322.goals := 0
!MP322.rating := 6
!insert (P316, MP322) into PlayerMatch
!insert (M50, MP322) into MatchMatchPlayer

!new MatchPlayerPosition('MPP322')
!MPP322.positionName := #DEFENDER
!MPP322.number := 2
!insert (MP322, MPP322) into MatchPlayerMatchPlayerPosition
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 787 | 0.00% |
| Multiplicities Errors | 0 | 195 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 75 | 0.00% |

## Category edge
```
!new Club('C55')
!C55.name := 'Kolkata Mariners Club'
!C55.homeGround := 'Salt Lake Practice Bowl'
!C55.chairman := 'Ananya Chatterjee'

!new Team('T67')
!T67.name := 'Mariners Firsts'
!insert (C55, T67) into ClubTeam

!new Club('C56')
!C56.name := 'Montreal Etoiles'
!C56.homeGround := 'Parc du Canal'
!C56.chairman := 'Etienne Gagnon'

!new Team('T68')
!T68.name := 'Etoiles XI'
!insert (C56, T68) into ClubTeam

!new Club('C57')
!C57.name := 'Girona del Mar FC'
!C57.homeGround := 'Camp de la Brisa'
!C57.chairman := 'Laia Puig'

!new Team('T69')
!T69.name := 'Brisa Seniors'
!insert (C57, T69) into ClubTeam

!new Club('C58')
!C58.name := 'Nairobi Savanna Sporting'
!C58.homeGround := 'Uhuru Community Pitch'
!C58.chairman := 'Wanjiku Mwangi'

!new Team('T70')
!T70.name := 'Savanna Lions'
!insert (C58, T70) into ClubTeam

!new Player('P225')
!P225.name := 'Arjun Sen'
!P225.age := 32
!P225.bestFoot := #RIGHT
!P225.phoneNumber := '+91 98300 11223'
!insert (T67, P225) into TeamPlayer

!new Position('POS346')
!POS346.positionName := #MIDFIELDER
!insert (P225, POS346) into PlayerPositions

!new Position('POS347')
!POS347.positionName := #FORWARD
!insert (P225, POS347) into PlayerPositions

!new TrainingObjective('TO249')
!TO249.areaToImprove := 'First touch on wet grass'
!TO249.startDate := '2026-04-01'
!TO249.endDate := '2026-04-30'
!TO249.success := false
!insert (TO249, P225) into TrainingObjectivePlayer

!new PlayerNotes('PN82')
!PN82.note := 'Often travels for work; availability unpredictable.'
!PN82.date := '2026-04-02'
!insert (P225, PN82) into PlayerPlayerNotes

!new Player('P226')
!P226.name := 'Debashis Roy'
!P226.age := 41
!P226.bestFoot := #LEFT
!P226.phoneNumber := '+91 99033 44556'
!insert (T67, P226) into TeamPlayer

!new Position('POS348')
!POS348.positionName := #GOALKEEPER
!insert (P226, POS348) into PlayerPositions

!new TrainingObjective('TO250')
!TO250.areaToImprove := 'Footwork on uneven surface'
!TO250.startDate := '2026-04-01'
!TO250.endDate := '2026-04-21'
!TO250.success := true
!insert (TO250, P226) into TrainingObjectivePlayer

!new Player('P227')
!P227.name := 'Chloe Bouchard'
!P227.age := 24
!P227.bestFoot := #BOTH
!P227.phoneNumber := '+1 514-555-0191'
!insert (T68, P227) into TeamPlayer

!new Position('POS349')
!POS349.positionName := #DEFENDER
!insert (P227, POS349) into PlayerPositions

!new Position('POS350')
!POS350.positionName := #MIDFIELDER
!insert (P227, POS350) into PlayerPositions

!new Position('POS351')
!POS351.positionName := #FORWARD
!insert (P227, POS351) into PlayerPositions

!new TrainingObjective('TO251')
!TO251.areaToImprove := 'Reduce needless fouls in transition'
!TO251.startDate := '2026-04-01'
!TO251.endDate := '2026-04-14'
!TO251.success := false
!insert (TO251, P227) into TrainingObjectivePlayer

!new Player('P228')
!P228.name := 'Jean-Paul Nadeau'
!P228.age := 29
!P228.bestFoot := #RIGHT
!P228.phoneNumber := '+1 514-555-0144'
!insert (T68, P228) into TeamPlayer

!new Position('POS352')
!POS352.positionName := #GOALKEEPER
!insert (P228, POS352) into PlayerPositions

!new TrainingObjective('TO252')
!TO252.areaToImprove := 'Punch vs catch decision making'
!TO252.startDate := '2026-04-02'
!TO252.endDate := '2026-04-28'
!TO252.success := false
!insert (TO252, P228) into TrainingObjectivePlayer

!new PlayerNotes('PN83')
!PN83.note := 'Prefers playing with floodlights; glare sensitivity noted.'
!PN83.date := '2026-04-03'
!insert (P228, PN83) into PlayerPlayerNotes

!new Player('P229')
!P229.name := 'Salma El-Haddad'
!P229.age := 18
!P229.bestFoot := #LEFT
!P229.phoneNumber := '+1 514-555-0770'
!insert (T68, P229) into TeamPlayer

!new Position('POS353')
!POS353.positionName := #MIDFIELDER
!insert (P229, POS353) into PlayerPositions

!new TrainingObjective('TO253')
!TO253.areaToImprove := 'Scanning before receiving'
!TO253.startDate := '2026-04-01'
!TO253.endDate := '2026-05-01'
!TO253.success := true
!insert (TO253, P229) into TrainingObjectivePlayer

!new Player('P230')
!P230.name := 'Pol Ferrer'
!P230.age := 36
!P230.bestFoot := #RIGHT
!P230.phoneNumber := '+34 600 123 321'
!insert (T69, P230) into TeamPlayer

!new Position('POS354')
!POS354.positionName := #DEFENDER
!insert (P230, POS354) into PlayerPositions

!new Position('POS355')
!POS355.positionName := #GOALKEEPER
!insert (P230, POS355) into PlayerPositions

!new TrainingObjective('TO254')
!TO254.areaToImprove := 'Clearances under pressure'
!TO254.startDate := '2026-04-01'
!TO254.endDate := '2026-04-10'
!TO254.success := true
!insert (TO254, P230) into TrainingObjectivePlayer

!new Player('P231')
!P231.name := 'Amina Otieno'
!P231.age := 27
!P231.bestFoot := #RIGHT
!P231.phoneNumber := '+254 712 345678'
!insert (T70, P231) into TeamPlayer

!new Position('POS356')
!POS356.positionName := #FORWARD
!insert (P231, POS356) into PlayerPositions

!new TrainingObjective('TO255')
!TO255.areaToImprove := 'Finishing from cut-backs'
!TO255.startDate := '2026-04-01'
!TO255.endDate := '2026-04-20'
!TO255.success := false
!insert (TO255, P231) into TrainingObjectivePlayer

!new Player('P232')
!P232.name := 'Peter Kamau'
!P232.age := 22
!P232.bestFoot := #BOTH
!P232.phoneNumber := '+254 700 111222'
!insert (T70, P232) into TeamPlayer

!new Position('POS357')
!POS357.positionName := #MIDFIELDER
!insert (P232, POS357) into PlayerPositions

!new Position('POS358')
!POS358.positionName := #DEFENDER
!insert (P232, POS358) into PlayerPositions

!new TrainingObjective('TO256')
!TO256.areaToImprove := 'Long-range passing consistency'
!TO256.startDate := '2026-04-02'
!TO256.endDate := '2026-04-30'
!TO256.success := false
!insert (TO256, P232) into TrainingObjectivePlayer

!new Player('P233')
!P233.name := 'Grace Wekesa'
!P233.age := 31
!P233.bestFoot := #LEFT
!P233.phoneNumber := '+254 733 909090'
!insert (T70, P233) into TeamPlayer

!new Position('POS359')
!POS359.positionName := #GOALKEEPER
!insert (P233, POS359) into PlayerPositions

!new TrainingObjective('TO257')
!TO257.areaToImprove := 'One-on-one positioning'
!TO257.startDate := '2026-04-01'
!TO257.endDate := '2026-04-25'
!TO257.success := true
!insert (TO257, P233) into TrainingObjectivePlayer

!new Player('P234')
!P234.name := 'Yusuf Abdullahi'
!P234.age := 20
!P234.bestFoot := #RIGHT
!P234.phoneNumber := '+254 711 808080'
!insert (T70, P234) into TeamPlayer

!new Position('POS360')
!POS360.positionName := #DEFENDER
!insert (P234, POS360) into PlayerPositions

!new TrainingObjective('TO258')
!TO258.areaToImprove := 'Avoid offsides trap mistakes when stepping up'
!TO258.startDate := '2026-04-03'
!TO258.endDate := '2026-05-03'
!TO258.success := false
!insert (TO258, P234) into TrainingObjectivePlayer

!new PlayerNotes('PN84')
!PN84.note := 'New to organized football; needs rules refresher.'
!PN84.date := '2026-04-03'
!insert (P234, PN84) into PlayerPlayerNotes

!new TrainingSession('TS88')
!TS88.date := '2026-04-02'
!TS88.location := 'Salt Lake Practice Bowl'
!TS88.purpose := 'Corner routines and goalkeeper distribution'
!insert (T67, TS88) into TeamTraining

!new TrainingNotes('TN138')
!TN138.note := 'Used cones to mark near-post screens; timing improved.'
!TN138.date := '2026-04-02'
!insert (TS88, TN138) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA63')
!FA63.reason := 'Work shift overran'
!insert (TS88, FA63) into TrainingFailded
!insert (FA63, P225) into FailedPlayer

!new TrainingFailedToAttend('FA64')
!FA64.reason := 'Wrong venue shared in group chat; arrived elsewhere'
!insert (TS88, FA64) into TrainingFailded
!insert (FA64, P232) into FailedPlayer

!new TrainingSession('TS89')
!TS89.date := '2026-04-02'
!TS89.location := 'Parc du Canal'
!TS89.purpose := 'Defensive line coordination'
!insert (T68, TS89) into TeamTraining

!new TrainingNotes('TN139')
!TN139.note := 'Practiced stepping up; offside cues standardized.'
!TN139.date := '2026-04-02'
!insert (TS89, TN139) into TrainingTrainingNotes

!new TrainingNotes('TN140')
!TN140.note := 'Goalkeeper communication volume emphasized.'
!TN140.date := '2026-04-02'
!insert (TS89, TN140) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA65')
!FA65.reason := 'Travel fatigue; stayed at hotel'
!insert (TS89, FA65) into TrainingFailded
!insert (FA65, P230) into FailedPlayer

!new TrainingSession('TS90')
!TS90.date := '2026-04-01'
!TS90.location := 'Camp de la Brisa'
!TS90.purpose := 'Solo defensive footwork + keeper basics'
!insert (T69, TS90) into TeamTraining

!new TrainingNotes('TN141')
!TN141.note := 'Single-player session logged; rebound wall used.'
!TN141.date := '2026-04-01'
!insert (TS90, TN141) into TrainingTrainingNotes

!new TrainingSession('TS91')
!TS91.date := '2026-04-02'
!TS91.location := 'Uhuru Community Pitch'
!TS91.purpose := 'Finishing and quick transitions'
!insert (T70, TS91) into TeamTraining

!new TrainingNotes('TN142')
!TN142.note := 'Cut-back finishing drilled; right-foot bias noted.'
!TN142.date := '2026-04-02'
!insert (TS91, TN142) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA66')
!FA66.reason := 'Minor ankle issue; rest day'
!insert (TS91, FA66) into TrainingFailded
!insert (FA66, P231) into FailedPlayer

!new TrainingFailedToAttend('FA67')
!FA67.reason := 'Passport appointment'
!insert (TS91, FA67) into TrainingFailded
!insert (FA67, P228) into FailedPlayer

!new Competition('COMP24')
!COMP24.name := 'Four-Corner Constraint Cup'
!COMP24.type := 'Scheduling experiment'

!new Match('M37')
!M37.date := '2026-04-05'
!M37.homeAway := true
!insert (COMP24, M37) into CompetitionMatch
!insert (T67, M37) into LocalMatch
!insert (T68, M37) into VisitorMatch

!new MatchReport('MR36')
!MR36.duration := 90
!MR36.scoreLocal := 0
!MR36.scoreVisitor := 0
!insert (M37, MR36) into MatchMatchReport

!new MatchNote('MN49')
!MN49.note := 'Match played in heavy humidity; tempo low.'
!MN49.date := '2026-04-05'
!insert (M37, MN49) into MatchMatchNote

!new MatchPlayer('MP212')
!MP212.booked := false
!MP212.goals := 0
!MP212.rating := 7
!insert (P226, MP212) into PlayerMatch
!insert (M37, MP212) into MatchMatchPlayer

!new MatchPlayerPosition('MPP212')
!MPP212.positionName := #GOALKEEPER
!MPP212.number := 1
!insert (MP212, MPP212) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP213')
!MP213.booked := false
!MP213.goals := 0
!MP213.rating := 6
!insert (P227, MP213) into PlayerMatch
!insert (M37, MP213) into MatchMatchPlayer

!new MatchPlayerPosition('MPP213')
!MPP213.positionName := #MIDFIELDER
!MPP213.number := 8
!insert (MP213, MPP213) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP214')
!MP214.booked := false
!MP214.goals := 0
!MP214.rating := 5
!insert (P230, MP214) into PlayerMatch
!insert (M37, MP214) into MatchMatchPlayer

!new MatchPlayerPosition('MPP214')
!MPP214.positionName := #DEFENDER
!MPP214.number := 99
!insert (MP214, MPP214) into MatchPlayerMatchPlayerPosition

!new Match('M38')
!M38.date := '2026-04-06'
!M38.homeAway := true
!insert (COMP24, M38) into CompetitionMatch
!insert (T68, M38) into LocalMatch
!insert (T69, M38) into VisitorMatch

!new MatchReport('MR37')
!MR37.duration := 90
!MR37.scoreLocal := 1
!MR37.scoreVisitor := 3
!insert (M38, MR37) into MatchMatchReport

!new MatchEvent('ME208')
!ME208.eventType := #GOAL
!ME208.time := 10
!insert (M38, ME208) into MatchMatchEvent

!new MatchEvent('ME209')
!ME209.eventType := #GOAL
!ME209.time := 22
!insert (M38, ME209) into MatchMatchEvent

!new MatchEvent('ME210')
!ME210.eventType := #GOAL
!ME210.time := 55
!insert (M38, ME210) into MatchMatchEvent

!new MatchEvent('ME211')
!ME211.eventType := #GOAL
!ME211.time := 88
!insert (M38, ME211) into MatchMatchEvent

!new MatchEvent('ME212')
!ME212.eventType := #OFFSIDE
!ME212.time := 14
!insert (M38, ME212) into MatchMatchEvent

!new MatchEvent('ME213')
!ME213.eventType := #CORNER
!ME213.time := 70
!insert (M38, ME213) into MatchMatchEvent

!new MatchEvent('ME214')
!ME214.eventType := #FOUL
!ME214.time := 71
!insert (M38, ME214) into MatchMatchEvent

!new MatchPlayer('MP215')
!MP215.booked := false
!MP215.goals := 0
!MP215.rating := 4
!insert (P229, MP215) into PlayerMatch
!insert (M38, MP215) into MatchMatchPlayer

!new MatchPlayerPosition('MPP215')
!MPP215.positionName := #MIDFIELDER
!MPP215.number := 16
!insert (MP215, MPP215) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP216')
!MP216.booked := false
!MP216.goals := 0
!MP216.rating := 3
!insert (P228, MP216) into PlayerMatch
!insert (M38, MP216) into MatchMatchPlayer

!new MatchPlayerPosition('MPP216')
!MPP216.positionName := #GOALKEEPER
!MPP216.number := 1
!insert (MP216, MPP216) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP217')
!MP217.booked := true
!MP217.goals := 3
!MP217.rating := 10
!insert (P230, MP217) into PlayerMatch
!insert (M38, MP217) into MatchMatchPlayer

!new MatchPlayerPosition('MPP217')
!MPP217.positionName := #DEFENDER
!MPP217.number := 5
!insert (MP217, MPP217) into MatchPlayerMatchPlayerPosition

!new Match('M39')
!M39.date := '2026-04-07'
!M39.homeAway := false
!insert (COMP24, M39) into CompetitionMatch
!insert (T69, M39) into LocalMatch
!insert (T70, M39) into VisitorMatch

!new MatchReport('MR38')
!MR38.duration := 90
!MR38.scoreLocal := 2
!MR38.scoreVisitor := 2
!insert (M39, MR38) into MatchMatchReport

!new MatchEvent('ME215')
!ME215.eventType := #GOAL
!ME215.time := 4
!insert (M39, ME215) into MatchMatchEvent

!new MatchEvent('ME216')
!ME216.eventType := #GOAL
!ME216.time := 39
!insert (M39, ME216) into MatchMatchEvent

!new MatchEvent('ME217')
!ME217.eventType := #GOAL
!ME217.time := 67
!insert (M39, ME217) into MatchMatchEvent

!new MatchEvent('ME218')
!ME218.eventType := #GOAL
!ME218.time := 90
!insert (M39, ME218) into MatchMatchEvent

!new MatchEvent('ME219')
!ME219.eventType := #PENALTY
!ME219.time := 67
!insert (M39, ME219) into MatchMatchEvent

!new MatchEvent('ME220')
!ME220.eventType := #FOUL
!ME220.time := 12
!insert (M39, ME220) into MatchMatchEvent

!new MatchEvent('ME221')
!ME221.eventType := #CORNER
!ME221.time := 58
!insert (M39, ME221) into MatchMatchEvent

!new MatchNote('MN50')
!MN50.note := 'Local team had only one registered player; match still counted.'
!MN50.date := '2026-04-07'
!insert (M39, MN50) into MatchMatchNote

!new MatchPlayer('MP218')
!MP218.booked := false
!MP218.goals := 2
!MP218.rating := 8
!insert (P230, MP218) into PlayerMatch
!insert (M39, MP218) into MatchMatchPlayer

!new MatchPlayerPosition('MPP218')
!MPP218.positionName := #GOALKEEPER
!MPP218.number := 1
!insert (MP218, MPP218) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP219')
!MP219.booked := false
!MP219.goals := 2
!MP219.rating := 9
!insert (P231, MP219) into PlayerMatch
!insert (M39, MP219) into MatchMatchPlayer

!new MatchPlayerPosition('MPP219')
!MPP219.positionName := #FORWARD
!MPP219.number := 9
!insert (MP219, MPP219) into MatchPlayerMatchPlayerPosition

!new Match('M40')
!M40.date := '2026-04-08'
!M40.homeAway := true
!insert (COMP24, M40) into CompetitionMatch
!insert (T70, M40) into LocalMatch
!insert (T67, M40) into VisitorMatch

!new MatchReport('MR39')
!MR39.duration := 90
!MR39.scoreLocal := 5
!MR39.scoreVisitor := 0
!insert (M40, MR39) into MatchMatchReport

!new MatchEvent('ME222')
!ME222.eventType := #GOAL
!ME222.time := 2
!insert (M40, ME222) into MatchMatchEvent

!new MatchEvent('ME223')
!ME223.eventType := #GOAL
!ME223.time := 19
!insert (M40, ME223) into MatchMatchEvent

!new MatchEvent('ME224')
!ME224.eventType := #GOAL
!ME224.time := 45
!insert (M40, ME224) into MatchMatchEvent

!new MatchEvent('ME225')
!ME225.eventType := #GOAL
!ME225.time := 74
!insert (M40, ME225) into MatchMatchEvent

!new MatchEvent('ME226')
!ME226.eventType := #GOAL
!ME226.time := 81
!insert (M40, ME226) into MatchMatchEvent

!new MatchEvent('ME227')
!ME227.eventType := #OFFSIDE
!ME227.time := 33
!insert (M40, ME227) into MatchMatchEvent

!new MatchEvent('ME228')
!ME228.eventType := #CORNER
!ME228.time := 60
!insert (M40, ME228) into MatchMatchEvent

!new MatchEvent('ME229')
!ME229.eventType := #FOUL
!ME229.time := 61
!insert (M40, ME229) into MatchMatchEvent

!new MatchPlayer('MP220')
!MP220.booked := false
!MP220.goals := 0
!MP220.rating := 8
!insert (P233, MP220) into PlayerMatch
!insert (M40, MP220) into MatchMatchPlayer

!new MatchPlayerPosition('MPP220')
!MPP220.positionName := #GOALKEEPER
!MPP220.number := 1
!insert (MP220, MPP220) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP221')
!MP221.booked := true
!MP221.goals := 0
!MP221.rating := 2
!insert (P232, MP221) into PlayerMatch
!insert (M40, MP221) into MatchMatchPlayer

!new MatchPlayerPosition('MPP221')
!MPP221.positionName := #MIDFIELDER
!MPP221.number := 6
!insert (MP221, MPP221) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP222')
!MP222.booked := false
!MP222.goals := 0
!MP222.rating := 1
!insert (P225, MP222) into PlayerMatch
!insert (M40, MP222) into MatchMatchPlayer

!new MatchPlayerPosition('MPP222')
!MPP222.positionName := #FORWARD
!MPP222.number := 11
!insert (MP222, MPP222) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP223')
!MP223.booked := false
!MP223.goals := 0
!MP223.rating := 5
!insert (P226, MP223) into PlayerMatch
!insert (M40, MP223) into MatchMatchPlayer

!new MatchPlayerPosition('MPP223')
!MPP223.positionName := #GOALKEEPER
!MPP223.number := 1
!insert (MP223, MPP223) into MatchPlayerMatchPlayerPosition
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 528 | 0.00% |
| Multiplicities Errors | 0 | 137 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 38 | 0.00% |

## Category invalid
```
!new Club('C47')
!C47.name := 'Kashima Harbor FC'
!C47.homeGround := 'Minato Seaside Stadium (Ibaraki)'
!C47.chairman := 'Keiko Tanaka'

!new Team('T57')
!T57.name := 'Kashima Harbor - Seniors'
!insert (C47, T57) into ClubTeam

!new Club('C48')
!C48.name := 'Urawa Tech SC'
!C48.homeGround := 'Saitama Engineering Park Field'
!C48.chairman := 'Hiroshi Watanabe'

!new Team('T58')
!T58.name := 'Urawa Tech - First XI'
!insert (C48, T58) into ClubTeam

!new Player('P191')
!P191.name := 'Shun Arai'
!P191.age := 27
!P191.bestFoot := #RIGHT
!P191.phoneNumber := '+81 80-3124-9077'
!insert (T57, P191) into TeamPlayer

!new Position('POS293')
!POS293.positionName := #GOALKEEPER
!insert (P191, POS293) into PlayerPositions

!new TrainingObjective('TO208')
!TO208.areaToImprove := 'Faster set position before shots'
!TO208.startDate := '2026-08-01'
!TO208.endDate := '2026-09-01'
!TO208.success := true
!insert (TO208, P191) into TrainingObjectivePlayer

!new PlayerNotes('PN68')
!PN68.note := 'Good handling in wet conditions; keep improving distribution under press.'
!PN68.date := '2026-08-18'
!insert (P191, PN68) into PlayerPlayerNotes

!new Player('P192')
!P192.name := 'Daichi Sakamoto'
!P192.age := 23
!P192.bestFoot := #LEFT
!P192.phoneNumber := '+81 90-5512-2308'
!insert (T57, P192) into TeamPlayer

!new Position('POS294')
!POS294.positionName := #DEFENDER
!insert (P192, POS294) into PlayerPositions

!new Position('POS295')
!POS295.positionName := #MIDFIELDER
!insert (P192, POS295) into PlayerPositions

!new TrainingObjective('TO209')
!TO209.areaToImprove := 'Defensive scanning when stepping into midfield'
!TO209.startDate := '2026-08-03'
!TO209.endDate := '2026-09-10'
!TO209.success := false
!insert (TO209, P192) into TrainingObjectivePlayer

!new Player('P193')
!P193.name := 'Ren Ito'
!P193.age := 20
!P193.bestFoot := #BOTH
!P193.phoneNumber := '+81 70-8801-4419'
!insert (T57, P193) into TeamPlayer

!new Position('POS296')
!POS296.positionName := #DEFENDER
!insert (P193, POS296) into PlayerPositions

!new Position('POS297')
!POS297.positionName := #MIDFIELDER
!insert (P193, POS297) into PlayerPositions

!new Position('POS298')
!POS298.positionName := #FORWARD
!insert (P193, POS298) into PlayerPositions

!new Position('POS299')
!POS299.positionName := #GOALKEEPER
!insert (P193, POS299) into PlayerPositions

!new TrainingObjective('TO210')
!TO210.areaToImprove := 'Role clarity: transitions when switching positions'
!TO210.startDate := '2026-08-05'
!TO210.endDate := '2026-09-20'
!TO210.success := false
!insert (TO210, P193) into TrainingObjectivePlayer

!new PlayerNotes('PN69')
!PN69.note := 'Covers multiple roles due to small squad; workload must be managed.'
!PN69.date := '2026-08-22'
!insert (P193, PN69) into PlayerPlayerNotes

!new TrainingSession('TS75')
!TS75.date := '2026-08-21'
!TS75.location := 'Minato Seaside Stadium - Training Pitch'
!TS75.purpose := 'Match preparation: compact defending + quick outlets'
!insert (T57, TS75) into TeamTraining

!new TrainingNotes('TN120')
!TN120.note := 'Back line stayed connected; midfield outlets improved when the #8 checked diagonally.'
!TN120.date := '2026-08-21'
!insert (TS75, TN120) into TrainingTrainingNotes

!new TrainingNotes('TN121')
!TN121.note := 'Set-piece rehearsal: near-post runs created clear second-ball chances.'
!TN121.date := '2026-08-21'
!insert (TS75, TN121) into TrainingTrainingNotes

!new TrainingFailedToAttend('FA53')
!FA53.reason := 'University exam timetable conflict.'
!insert (TS75, FA53) into TrainingFailded
!insert (FA53, P193) into FailedPlayer

!new Player('P194')
!P194.name := 'Kenta Miyazaki'
!P194.age := 29
!P194.bestFoot := #RIGHT
!P194.phoneNumber := '+81 80-6640-1188'
!insert (T58, P194) into TeamPlayer

!new Position('POS300')
!POS300.positionName := #GOALKEEPER
!insert (P194, POS300) into PlayerPositions

!new TrainingObjective('TO211')
!TO211.areaToImprove := 'Quicker throws to start counters'
!TO211.startDate := '2026-08-02'
!TO211.endDate := '2026-09-05'
!TO211.success := true
!insert (TO211, P194) into TrainingObjectivePlayer

!new Player('P195')
!P195.name := 'Yuina Nakamoto'
!P195.age := 24
!P195.bestFoot := #LEFT
!P195.phoneNumber := '+81 90-1020-7784'
!insert (T58, P195) into TeamPlayer

!new Position('POS301')
!POS301.positionName := #MIDFIELDER
!insert (P195, POS301) into PlayerPositions

!new TrainingObjective('TO212')
!TO212.areaToImprove := 'Receiving on the half-turn under pressure'
!TO212.startDate := '2026-08-04'
!TO212.endDate := '2026-09-15'
!TO212.success := false
!insert (TO212, P195) into TrainingObjectivePlayer

!new PlayerNotes('PN70')
!PN70.note := 'Excellent pressing intensity; needs calmer final pass in transition.'
!PN70.date := '2026-08-19'
!insert (P195, PN70) into PlayerPlayerNotes

!new Player('P196')
!P196.name := 'Tsubasa Okoye'
!P196.age := 22
!P196.bestFoot := #BOTH
!P196.phoneNumber := '+81 70-3312-9006'
!insert (T58, P196) into TeamPlayer

!new Position('POS302')
!POS302.positionName := #FORWARD
!insert (P196, POS302) into PlayerPositions

!new Position('POS303')
!POS303.positionName := #MIDFIELDER
!insert (P196, POS303) into PlayerPositions

!new TrainingObjective('TO213')
!TO213.areaToImprove := 'Timing runs between center-back and fullback'
!TO213.startDate := '2026-08-01'
!TO213.endDate := '2026-09-12'
!TO213.success := true
!insert (TO213, P196) into TrainingObjectivePlayer

!new TrainingSession('TS76')
!TS76.date := '2026-08-20'
!TS76.location := 'Saitama Engineering Park Field'
!TS76.purpose := 'Pressing cues + finishing from cutbacks'
!insert (T58, TS76) into TeamTraining

!new TrainingNotes('TN122')
!TN122.note := 'Pressing improved when striker curved runs to block the pivot; cutback finishing still inconsistent.'
!TN122.date := '2026-08-20'
!insert (TS76, TN122) into TrainingTrainingNotes

!new Competition('COMP21')
!COMP21.name := 'Kanto Coastal League Cup 2026'
!COMP21.type := 'Regional weekend cup'

!new Match('M31')
!M31.date := '2026-08-23'
!M31.homeAway := true
!insert (COMP21, M31) into CompetitionMatch
!insert (T57, M31) into LocalMatch
!insert (T58, M31) into VisitorMatch

!new MatchReport('MR30')
!MR30.duration := 90
!MR30.scoreLocal := 1
!MR30.scoreVisitor := 2
!insert (M31, MR30) into MatchMatchReport

!new MatchEvent('ME176')
!ME176.eventType := #GOAL
!ME176.time := 9
!insert (M31, ME176) into MatchMatchEvent

!new MatchEvent('ME177')
!ME177.eventType := #FOUL
!ME177.time := 34
!insert (M31, ME177) into MatchMatchEvent

!new MatchEvent('ME178')
!ME178.eventType := #GOAL
!ME178.time := 58
!insert (M31, ME178) into MatchMatchEvent

!new MatchEvent('ME179')
!ME179.eventType := #OFFSIDE
!ME179.time := 72
!insert (M31, ME179) into MatchMatchEvent

!new MatchEvent('ME180')
!ME180.eventType := #GOAL
!ME180.time := 81
!insert (M31, ME180) into MatchMatchEvent

!new MatchNote('MN41')
!MN41.note := 'Local side started fast; visitors adjusted by pressing the pivot and won the match late.'
!MN41.date := '2026-08-23'
!insert (M31, MN41) into MatchMatchNote

!new MatchPlayer('MP178')
!MP178.booked := false
!MP178.goals := 0
!MP178.rating := 6
!insert (P191, MP178) into PlayerMatch
!insert (M31, MP178) into MatchMatchPlayer

!new MatchPlayerPosition('MPP178')
!MPP178.positionName := #GOALKEEPER
!MPP178.number := 1
!insert (MP178, MPP178) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP179')
!MP179.booked := true
!MP179.goals := 0
!MP179.rating := 6
!insert (P192, MP179) into PlayerMatch
!insert (M31, MP179) into MatchMatchPlayer

!new MatchPlayerPosition('MPP179')
!MPP179.positionName := #DEFENDER
!MPP179.number := 4
!insert (MP179, MPP179) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP180')
!MP180.booked := false
!MP180.goals := 1
!MP180.rating := 7
!insert (P193, MP180) into PlayerMatch
!insert (M31, MP180) into MatchMatchPlayer

!new MatchPlayerPosition('MPP180')
!MPP180.positionName := #MIDFIELDER
!MPP180.number := 8
!insert (MP180, MPP180) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP181')
!MP181.booked := false
!MP181.goals := 0
!MP181.rating := 7
!insert (P194, MP181) into PlayerMatch
!insert (M31, MP181) into MatchMatchPlayer

!new MatchPlayerPosition('MPP181')
!MPP181.positionName := #GOALKEEPER
!MPP181.number := 1
!insert (MP181, MPP181) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP182')
!MP182.booked := false
!MP182.goals := 1
!MP182.rating := 7
!insert (P195, MP182) into PlayerMatch
!insert (M31, MP182) into MatchMatchPlayer

!new MatchPlayerPosition('MPP182')
!MPP182.positionName := #MIDFIELDER
!MPP182.number := 10
!insert (MP182, MPP182) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('MP183')
!MP183.booked := false
!MP183.goals := 1
!MP183.rating := 8
!insert (P196, MP183) into PlayerMatch
!insert (M31, MP183) into MatchMatchPlayer

!new MatchPlayerPosition('MPP183')
!MPP183.positionName := #FORWARD
!MPP183.number := 11
!insert (MP183, MPP183) into MatchPlayerMatchPlayerPosition
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 63 | 1.59% |
| Invariants Errors (Not included on General) | 0 | 4 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `PlayerPositions':
  Object `P193' of class `Player' is connected to 4 objects of class `Position'
  at association end `position' but the multiplicity is specified as `1..3'.
```

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 22 | 0.00% |

## Generation 6 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 2723 | 0.00% |
| Multiplicities Errors | 0 | 628 | 0.00% |
| Invariants Errors | 0 | 16 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 63 | 1.59% |
| Invariants Errors (Not included on General) | 0 | 4 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `PlayerPositions':
  Object `P193' of class `Player' is connected to 4 objects of class `Position'
  at association end `position' but the multiplicity is specified as `1..3'.
```

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 6 | 226 | 2.65% |

| Failed dates | 
|---| 
```
2026-07-03 19:15
```
```
2026-07-04 20:30
```
```
2026-07-05 18:45
```
```
2026-07-05 20:00
```
```
2026-07-07 19:30
```
```
2026-07-09 20:30
```

# Summary for all generations
| Summary | Value | 
|---|---| 
| Model | GPT_5_2 | 
| Type | CoT | 
| System | football | 
| Number of generations | 6 | 

| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 14104 | 0.00% |
| Multiplicities Errors | 0 | 3091 | 0.00% |
| Invariants Errors | 0 | 96 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 4 | 431 | 0.93% |
| Invariants Errors (Not included on General) | 2 | 24 | 8.33% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `LocalMatch':
  Object `T5' of class `Team' is connected to 2 objects of class `Match'
  at association end `localMatch' but the multiplicity is specified as `0..1'.
```
```
Multiplicity constraint violation in association `TeamPlayer':
  Object `P84' of class `Player' is connected to 2 objects of class `Team'
  at association end `team' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `MatchMatchReport':
  Object `M27' of class `Match' is connected to 0 objects of class `MatchReport'
  at association end `matchReport' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `PlayerPositions':
  Object `P193' of class `Player' is connected to 4 objects of class `Position'
  at association end `position' but the multiplicity is specified as `1..3'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (2) `Match::TeamsFromDifferentClubs': FAILED.
```
```
checking invariant (4) `MatchReport::SumOfScoresEqualsGoals': FAILED.
```

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 29 | 1284 | 2.26% |

| Failed dates | 
|---| 
```
2026-02-05 18:30
```
```
2026-02-06 20:00
```
```
2026-02-10 19:30
```
```
2026-03-11 17:45
```
```
2026-03-14 09:30
```
```
2026-03-12 21:00
```
```
2026-03-18 19:00
```
```
2026-04-10 18:00
```
```
2026-04-11 19:30
```
```
2026-04-09 17:00
```
```
2026-04-12 06:30
```
```
2026-04-18 16:00
```
```
2026-04-20 19:15
```
```
2026-05-14 16:30
```
```
2026-05-19 17:00
```
```
2026-05-16 20:30
```
```
2026-05-18 09:00
```
```
2026-05-22 15:00
```
```
2026-06-08 19:00
```
```
2026-06-09 20:15
```
```
2026-06-07 16:30
```
```
2026-06-15 20:00
```
```
2026-06-22 19:30
```
```
2026-07-03 19:15
```
```
2026-07-04 20:30
```
```
2026-07-05 18:45
```
```
2026-07-05 20:00
```
```
2026-07-07 19:30
```
```
2026-07-09 20:30
```

