# Generation 1
## Category baseline
```
!new Club('clubE')
!clubE.name := 'Bavaria Lions'
!clubE.homeGround := 'Munich Stadium'
!clubE.chairman := 'Hans Mueller'

!new Club('clubF')
!clubF.name := 'Paris Stallions'
!clubF.homeGround := 'Stade de Paris'
!clubF.chairman := 'Luc Leclerc'

!new Team('teamE')
!teamE.name := 'Bavaria Lions First Team'

!new Team('teamF')
!teamF.name := 'Paris Stallions Elite'

!insert (clubE, teamE) into ClubTeam
!insert (clubF, teamF) into ClubTeam

!new Competition('competition2')
!competition2.name := 'Champions League'
!competition2.type := 'Tournament'

!new TrainingSession('trainingSession3')
!trainingSession3.date := '2023-09-15'
!trainingSession3.location := 'Bavaria Training Ground'
!trainingSession3.purpose := 'Improve Defensive Tactics'

!new TrainingSession('trainingSession4')
!trainingSession4.date := '2023-09-16'
!trainingSession4.location := 'Stallions Training Field'
!trainingSession4.purpose := 'Enhance Attacking Strategies'

!insert (teamE, trainingSession3) into TeamTraining
!insert (teamF, trainingSession4) into TeamTraining

!new TrainingNotes('trainingNote3')
!trainingNote3.note := 'Focused on pressing and man-marking drills.'
!trainingNote3.date := '2023-09-15'

!new TrainingNotes('trainingNote4')
!trainingNote4.note := 'Worked on quick transition plays and finishing.'
!trainingNote4.date := '2023-09-16'

!insert (trainingSession3, trainingNote3) into TrainingTrainingNotes
!insert (trainingSession4, trainingNote4) into TrainingTrainingNotes

!new TrainingFailedToAttend('trainingFail2')
!trainingFail2.reason := 'Injury'

!new Player('player5')
!player5.name := 'Franz Dietrich'
!player5.age := 28
!player5.bestFoot := #RIGHT
!player5.phoneNumber := '+49-170-1234567'

!new Player('player6')
!player6.name := 'Pierre Dubois'
!player6.age := 23
!player6.bestFoot := #LEFT
!player6.phoneNumber := '+33-1-78904567'

!insert (teamE, player5) into TeamPlayer
!insert (teamF, player6) into TeamPlayer

!insert (trainingSession3, trainingFail2) into TrainingFailded
!insert (trainingFail2, player5) into FailedPlayer

!new Match('match3')
!match3.date := '2023-10-01'
!match3.homeAway := true

!insert (teamE, match3) into LocalMatch
!insert (teamF, match3) into VisitorMatch
!insert (competition2, match3) into CompetitionMatch

!new MatchReport('matchReport3')
!matchReport3.duration := 90
!matchReport3.scoreVisitor := 1
!matchReport3.scoreLocal := 1

!insert (match3, matchReport3) into MatchMatchReport

!new MatchEvent('matchEvent8')
!matchEvent8.eventType := #GOAL
!matchEvent8.time := 34

!new MatchEvent('matchEvent9')
!matchEvent9.eventType := #GOAL
!matchEvent9.time := 77

!new MatchEvent('matchEvent10')
!matchEvent10.eventType := #FOUL
!matchEvent10.time := 65

!insert (match3, matchEvent8) into MatchMatchEvent
!insert (match3, matchEvent9) into MatchMatchEvent
!insert (match3, matchEvent10) into MatchMatchEvent

!new MatchNote('matchNote2')
!matchNote2.note := 'Intense match with tactical brilliance from both sides.'
!matchNote2.date := '2023-10-01'

!insert (match3, matchNote2) into MatchMatchNote

!new PlayerNotes('playerNote3')
!playerNote3.note := 'Shows exceptional leadership on the field.'
!playerNote3.date := '2023-08-10'

!insert (player5, playerNote3) into PlayerPlayerNotes

!new TrainingObjective('trainingObjective3')
!trainingObjective3.areaToImprove := 'Ball Control'
!trainingObjective3.startDate := '2023-09-01'
!trainingObjective3.endDate := '2023-10-01'
!trainingObjective3.success := false

!new TrainingObjective('trainingObjective4')
!trainingObjective4.areaToImprove := 'Tactical Awareness'
!trainingObjective4.startDate := '2023-09-05'
!trainingObjective4.endDate := '2023-10-05'
!trainingObjective4.success := true

!insert (trainingObjective3, player5) into TrainingObjectivePlayer
!insert (trainingObjective4, player6) into TrainingObjectivePlayer

!new MatchPlayer('matchPlayer5')
!matchPlayer5.booked := false
!matchPlayer5.goals := 1
!matchPlayer5.rating := 8

!new MatchPlayer('matchPlayer6')
!matchPlayer6.booked := true
!matchPlayer6.goals := 0
!matchPlayer6.rating := 7

!insert (player5, matchPlayer5) into PlayerMatch
!insert (player6, matchPlayer6) into PlayerMatch

!insert (match3, matchPlayer5) into MatchMatchPlayer
!insert (match3, matchPlayer6) into MatchMatchPlayer

!new MatchPlayerPosition('position12')
!position12.positionName := #FORWARD
!position12.number := 9

!new MatchPlayerPosition('position13')
!position13.positionName := #MIDFIELDER
!position13.number := 8

!insert (matchPlayer5, position12) into MatchPlayerMatchPlayerPosition
!insert (matchPlayer6, position13) into MatchPlayerMatchPlayerPosition

!new Position('position14')
!position14.positionName := #FORWARD

!new Position('position15')
!position15.positionName := #MIDFIELDER

!insert (player5, position14) into PlayerPositions
!insert (player6, position15) into PlayerPositions
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 120 | 0.00% |
| Multiplicities Errors | 0 | 29 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 11 | 0.00% |

## Category boundary
```
!new Club('clubI')
!clubI.name := 'FC Polar Bears'
!clubI.homeGround := 'Arctic Stadium'
!clubI.chairman := 'Sven Nordstrom'

!new Club('clubJ')
!clubJ.name := 'Desert Wanderers'
!clubJ.homeGround := 'Sahara Dunes Arena'
!clubJ.chairman := 'Ahmed Al-Sadr'

!new Team('teamI')
!teamI.name := 'Arctic Avengers'

!new Team('teamJ')
!teamJ.name := 'Desert Nomads'

!insert (clubI, teamI) into ClubTeam
!insert (clubJ, teamJ) into ClubTeam

!new Player('player9')
!player9.name := 'Lars Coldfoot'
!player9.age := 30
!player9.bestFoot := #LEFT
!player9.phoneNumber := '+46123456789'

!new Player('player10')
!player10.name := 'Tariq Sandstride'
!player10.age := 25
!player10.bestFoot := #RIGHT
!player10.phoneNumber := '+20123567890'

!insert (teamI, player9) into TeamPlayer
!insert (teamJ, player10) into TeamPlayer

!new Position('position21')
!position21.positionName := #GOALKEEPER

!new Position('position22')
!position22.positionName := #DEFENDER

!insert (player9, position21) into PlayerPositions
!insert (player9, position22) into PlayerPositions

!new Position('position23')
!position23.positionName := #FORWARD

!new Position('position24')
!position24.positionName := #MIDFIELDER

!new Position('position29')
!position29.positionName := #RIGHT_WING

!insert (player10, position23) into PlayerPositions
!insert (player10, position24) into PlayerPositions
!insert (player10, position29) into PlayerPositions

!new TrainingSession('trainingSession7')
!trainingSession7.date := '2023-12-01'
!trainingSession7.location := 'Arctic Ice Rink'
!trainingSession7.purpose := 'Endurance on Ice'

!insert (teamI, trainingSession7) into TeamTraining

!new TrainingNotes('trainingNote7')
!trainingNote7.note := 'Focus on cold-weather stamina.'
!trainingNote7.date := '2023-12-01'

!insert (trainingSession7, trainingNote7) into TrainingTrainingNotes

!new TrainingFailedToAttend('trainingFail4')
!trainingFail4.reason := 'Illness'

!insert (trainingFail4, player9) into FailedPlayer
!insert (trainingSession7, trainingFail4) into TrainingFailded

!new Competition('competition4')
!competition4.name := 'International Climatic League'
!competition4.type := 'League'

!new Match('match5')
!match5.date := '2023-12-05'
!match5.homeAway := true

!insert (teamJ, match5) into LocalMatch
!insert (teamI, match5) into VisitorMatch
!insert (competition4, match5) into CompetitionMatch

!new MatchEvent('matchEvent16')
!matchEvent16.eventType := #FOUL
!matchEvent16.time := 44

!insert (match5, matchEvent16) into MatchMatchEvent

!new MatchReport('matchReport5')
!matchReport5.duration := 90
!matchReport5.scoreVisitor := 0
!matchReport5.scoreLocal := 0

!insert (match5, matchReport5) into MatchMatchReport

!new MatchNote('matchNote4')
!matchNote4.note := 'High wind made accurate passing difficult.'
!matchNote4.date := '2023-12-05'

!insert (match5, matchNote4) into MatchMatchNote

!new MatchPlayer('matchPlayer9')
!matchPlayer9.booked := false
!matchPlayer9.goals := 0
!matchPlayer9.rating := 4

!insert (player10, matchPlayer9) into PlayerMatch

!insert (match5, matchPlayer9) into MatchMatchPlayer

!new MatchPlayerPosition('position28')
!position28.positionName := #FORWARD
!position28.number := 9

!insert (matchPlayer9, position28) into MatchPlayerMatchPlayerPosition

!new TrainingObjective('trainingObjective7')
!trainingObjective7.areaToImprove := 'Upper Body Strength'
!trainingObjective7.startDate := '2023-11-01'
!trainingObjective7.endDate := '2023-12-01'
!trainingObjective7.success := false

!insert (trainingObjective7, player10) into TrainingObjectivePlayer
!new TrainingObjective('trainingObjective8')
!trainingObjective8.areaToImprove := 'Defensive Skills'
!trainingObjective8.startDate := '2023-11-01'
!trainingObjective8.endDate := '2023-12-01'
!trainingObjective8.success := false

!insert (trainingObjective8, player9) into TrainingObjectivePlayer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 1 | 98 | 1.02% |
| Multiplicities Errors | 1 | 24 | 4.17% |
| Invariants Errors | 0 | 4 | 0.00% |

| Syntax Errors | 
|---| 
```
<input>:1:0: generation of expression `#RIGHT_WING' failed, with following error:
```

| Multiplicities Errors | 
|---| 
```
Multiplicity constraint violation in association `TeamTraining':
  Object `teamJ' of class `Team' is connected to 0 objects of class `TrainingSession'
  at association end `trainingSession' but the multiplicity is specified as `1..*'.
```

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 8 | 0.00% |

## Category complex
```
!new Club('clubG')
!clubG.name := 'Barcelona United'
!clubG.homeGround := 'Camp Barca'
!clubG.chairman := 'Maria Sanchez'

!new Club('clubH')
!clubH.name := 'Manchester Lions'
!clubH.homeGround := 'Lions Den Stadium'
!clubH.chairman := 'Edward Bowman'

!new Team('teamG')
!teamG.name := 'Barcelona United First Team'

!new Team('teamH')
!teamH.name := 'Manchester Lions First Team'

!insert (clubG, teamG) into ClubTeam
!insert (clubH, teamH) into ClubTeam

!new Player('player7')
!player7.name := 'Lionel Ruiz'
!player7.age := 28
!player7.bestFoot := #RIGHT
!player7.phoneNumber := '+34912345678'

!new Player('player8')
!player8.name := 'Gareth Nolan'
!player8.age := 31
!player8.bestFoot := #LEFT
!player8.phoneNumber := '+441234567890'

!insert (teamG, player7) into TeamPlayer
!insert (teamH, player8) into TeamPlayer

!new Position('position16')
!position16.positionName := #FORWARD

!new Position('position17')
!position17.positionName := #MIDFIELDER

!insert (player7, position16) into PlayerPositions
!insert (player8, position17) into PlayerPositions

!new Competition('competition3')
!competition3.name := 'European Champions League'
!competition3.type := 'Tournament'

!new Match('match4')
!match4.date := '15-06-2023'
!match4.homeAway := true

!insert (teamG, match4) into LocalMatch
!insert (teamH, match4) into VisitorMatch
!insert (competition3, match4) into CompetitionMatch

!new MatchReport('matchReport4')
!matchReport4.duration := 90
!matchReport4.scoreVisitor := 2
!matchReport4.scoreLocal := 3

!insert (match4, matchReport4) into MatchMatchReport

!new MatchPlayer('matchPlayer7')
!matchPlayer7.booked := true
!matchPlayer7.goals := 2
!matchPlayer7.rating := 9

!new MatchPlayer('matchPlayer8')
!matchPlayer8.booked := false
!matchPlayer8.goals := 1
!matchPlayer8.rating := 8

!insert (player7, matchPlayer7) into PlayerMatch
!insert (player8, matchPlayer8) into PlayerMatch

!insert (match4, matchPlayer7) into MatchMatchPlayer
!insert (match4, matchPlayer8) into MatchMatchPlayer

!new MatchPlayerPosition('position19')
!position19.positionName := #FORWARD
!position19.number := 10

!new MatchPlayerPosition('position20')
!position20.positionName := #MIDFIELDER
!position20.number := 8

!insert (matchPlayer7, position19) into MatchPlayerMatchPlayerPosition
!insert (matchPlayer8, position20) into MatchPlayerMatchPlayerPosition

!new MatchEvent('matchEvent11')
!matchEvent11.eventType := #GOAL
!matchEvent11.time := 23

!new MatchEvent('matchEvent12')
!matchEvent12.eventType := #GOAL
!matchEvent12.time := 68

!new MatchEvent('matchEvent13')
!matchEvent13.eventType := #GOAL
!matchEvent13.time := 72

!new MatchEvent('matchEvent14')
!matchEvent14.eventType := #GOAL
!matchEvent14.time := 45

!insert (match4, matchEvent11) into MatchMatchEvent
!insert (match4, matchEvent12) into MatchMatchEvent
!insert (match4, matchEvent13) into MatchMatchEvent
!insert (match4, matchEvent14) into MatchMatchEvent

!new MatchEvent('matchEvent15')
!matchEvent15.eventType := #FOUL
!matchEvent15.time := 56

!insert (match4, matchEvent15) into MatchMatchEvent

!new MatchNote('matchNote3')
!matchNote3.note := 'Both teams showed excellent tactics with agile defensive maneuvers.'
!matchNote3.date := '15-06-2023'

!insert (match4, matchNote3) into MatchMatchNote

!new TrainingSession('trainingSession5')
!trainingSession5.date := '10-06-2023'
!trainingSession5.location := 'Camp Barca'
!trainingSession5.purpose := 'Strategic passing practices for the final match.'

!insert (teamG, trainingSession5) into TeamTraining

!new TrainingSession('trainingSession6')
!trainingSession6.date := '09-06-2023'
!trainingSession6.location := 'Lions Den Training Ground'
!trainingSession6.purpose := 'Defensive drills for the final match.'

!insert (teamH, trainingSession6) into TeamTraining

!new TrainingNotes('trainingNote5')
!trainingNote5.note := 'Players showcased remarkable improvements in passing under pressure.'
!trainingNote5.date := '10-06-2023'

!insert (trainingSession5, trainingNote5) into TrainingTrainingNotes

!new TrainingNotes('trainingNote6')
!trainingNote6.note := 'Focused on strengthening defensive formations.'
!trainingNote6.date := '09-06-2023'

!insert (trainingSession6, trainingNote6) into TrainingTrainingNotes

!new TrainingFailedToAttend('trainingFail3')
!trainingFail3.reason := 'Family emergency'

!insert (trainingSession5, trainingFail3) into TrainingFailded
!insert (trainingFail3, player7) into FailedPlayer

!new TrainingObjective('trainingObjective5')
!trainingObjective5.areaToImprove := 'Finishing Accuracy'
!trainingObjective5.startDate := '01-06-2023'
!trainingObjective5.endDate := '15-06-2023'
!trainingObjective5.success := true

!new TrainingObjective('trainingObjective6')
!trainingObjective6.areaToImprove := 'Defensive Positioning'
!trainingObjective6.startDate := '01-06-2023'
!trainingObjective6.endDate := '15-06-2023'
!trainingObjective6.success := true

!insert (trainingObjective5, player7) into TrainingObjectivePlayer
!insert (trainingObjective6, player8) into TrainingObjectivePlayer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 124 | 0.00% |
| Multiplicities Errors | 0 | 30 | 0.00% |
| Invariants Errors | 1 | 4 | 25.00% |

| Invariants Errors | 
|---| 
```
checking invariant (4) `MatchReport::SumOfScoresEqualsGoals': FAILED.
```

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 10 | 0.00% |

## Category edge
```
!new Club('clubC')
!clubC.name := 'Abyssal FC'
!clubC.homeGround := 'Underwater Stadium Prix'
!clubC.chairman := 'Captain Nemo'

!new Club('clubD')
!clubD.name := 'Submarine United'
!clubD.homeGround := 'Nautilus Arena'
!clubD.chairman := 'Commander Jacques Cousteau'

!new Team('teamC')
!teamC.name := 'Abyssal Rovers'

!new Team('teamD')
!teamD.name := 'Submersible Strikers'

!insert (clubC, teamC) into ClubTeam
!insert (clubD, teamD) into ClubTeam

!new Competition('competition1')
!competition1.name := 'Underwater World League'
!competition1.type := 'Tournament'

!new Match('match2')
!match2.date := '20/07/2023'
!match2.homeAway := true

!insert (teamC, match2) into LocalMatch
!insert (teamD, match2) into VisitorMatch
!insert (competition1, match2) into CompetitionMatch

!new MatchReport('matchReport2')
!matchReport2.duration := 90
!matchReport2.scoreVisitor := 2
!matchReport2.scoreLocal := 2

!insert (match2, matchReport2) into MatchMatchReport

!new MatchEvent('matchEvent4')
!matchEvent4.eventType := #GOAL
!matchEvent4.time := 10

!new MatchEvent('matchEvent5')
!matchEvent5.eventType := #GOAL
!matchEvent5.time := 25

!new MatchEvent('matchEvent6')
!matchEvent6.eventType := #GOAL
!matchEvent6.time := 60

!new MatchEvent('matchEvent7')
!matchEvent7.eventType := #GOAL
!matchEvent7.time := 85

!insert (match2, matchEvent4) into MatchMatchEvent
!insert (match2, matchEvent5) into MatchMatchEvent
!insert (match2, matchEvent6) into MatchMatchEvent
!insert (match2, matchEvent7) into MatchMatchEvent

!new Player('player3')
!player3.name := 'Poseidon Deep'
!player3.age := 28
!player3.bestFoot := #LEFT
!player3.phoneNumber := '+1234567890'

!new Player('player4')
!player4.name := 'Coral Reef'
!player4.age := 24
!player4.bestFoot := #RIGHT
!player4.phoneNumber := '+1098765432'

!insert (teamC, player3) into TeamPlayer
!insert (teamD, player4) into TeamPlayer

!new Position('position6')
!position6.positionName := #FORWARD

!new Position('position8')
!position8.positionName := #DEFENDER

!new Position('position11')
!position11.positionName := #MIDFIELDER

!insert (player3, position6) into PlayerPositions
!insert (player3, position8) into PlayerPositions
!insert (player4, position11) into PlayerPositions

!new MatchPlayer('matchPlayer3')
!matchPlayer3.booked := true
!matchPlayer3.goals := 1
!matchPlayer3.rating := 8

!new MatchPlayer('matchPlayer4')
!matchPlayer4.booked := false
!matchPlayer4.goals := 1
!matchPlayer4.rating := 7

!insert (player3, matchPlayer3) into PlayerMatch
!insert (player4, matchPlayer4) into PlayerMatch

!insert (match2, matchPlayer3) into MatchMatchPlayer
!insert (match2, matchPlayer4) into MatchMatchPlayer

!new MatchPlayerPosition('position9')
!position9.positionName := #FORWARD
!position9.number := 9

!new MatchPlayerPosition('position10')
!position10.positionName := #MIDFIELDER
!position10.number := 10

!insert (matchPlayer3, position9) into MatchPlayerMatchPlayerPosition
!insert (matchPlayer4, position10) into MatchPlayerMatchPlayerPosition

!new TrainingSession('trainingSession2')
!trainingSession2.date := '18/07/2023'
!trainingSession2.location := 'Underwater Stadium Prix'
!trainingSession2.purpose := 'Breathing Technique Improvement'

!insert (teamC, trainingSession2) into TeamTraining

!new TrainingNotes('trainingNote2')
!trainingNote2.note := 'Successful adaptation to increased water pressure noted.'
!trainingNote2.date := '18/07/2023'

!insert (trainingSession2, trainingNote2) into TrainingTrainingNotes

!new TrainingFailedToAttend('trainingFail1')
!trainingFail1.reason := 'Had to maintain buoyancy levels'

!insert (trainingSession2, trainingFail1) into TrainingFailded
!insert (trainingFail1, player4) into FailedPlayer

!new TrainingObjective('trainingObjective1')
!trainingObjective1.areaToImprove := 'Positional Play Underwater'
!trainingObjective1.startDate := '15/07/2023'
!trainingObjective1.endDate := '19/07/2023'
!trainingObjective1.success := true

!insert (trainingObjective1, player3) into TrainingObjectivePlayer

!new TrainingObjective('trainingObjective2')
!trainingObjective2.areaToImprove := 'Positional Play Underwater'
!trainingObjective2.startDate := '15/07/2023'
!trainingObjective2.endDate := '19/07/2023'
!trainingObjective2.success := true

!insert (trainingObjective2, player4) into TrainingObjectivePlayer

!new PlayerNotes('playerNote1')
!playerNote1.note := 'Excels in rapid water movements.'
!playerNote1.date := '19/07/2023'

!insert (player3, playerNote1) into PlayerPlayerNotes

!new PlayerNotes('playerNote2')
!playerNote2.note := 'Needs improvement in maintaining balance during dribbles.'
!playerNote2.date := '18/07/2023'

!insert (player4, playerNote2) into PlayerPlayerNotes
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 118 | 0.00% |
| Multiplicities Errors | 1 | 29 | 3.45% |
| Invariants Errors | 0 | 4 | 0.00% |

| Multiplicities Errors | 
|---| 
```
Multiplicity constraint violation in association `TeamTraining':
  Object `teamD' of class `Team' is connected to 0 objects of class `TrainingSession'
  at association end `trainingSession' but the multiplicity is specified as `1..*'.
```

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 9 | 0.00% |

## Category invalid
```
!new Club('clubA')
!clubA.name := 'Global Stars FC'
!clubA.homeGround := 'Star Arena, Madrid'
!clubA.chairman := 'Luis Martinez'

!new Club('clubB')
!clubB.name := 'Oceanic Titans FC'
!clubB.homeGround := 'Titan Field, Lisbon'
!clubB.chairman := 'Andrea Almeida'

!new Team('teamA')
!teamA.name := 'Global Stars Elite'

!new Team('teamB')
!teamB.name := 'Titan Warriors'

!insert (clubA, teamA) into ClubTeam
!insert (clubB, teamB) into ClubTeam

!new Player('player1')
!player1.name := 'Pedro Rodriguez'
!player1.age := 28
!player1.bestFoot := #RIGHT
!player1.phoneNumber := '+34 600 123 456'

!new Player('player2')
!player2.name := 'Joana Sousa'
!player2.age := 24
!player2.bestFoot := #LEFT
!player2.phoneNumber := '+351 921 334 567'

!insert (teamA, player1) into TeamPlayer
!insert (teamB, player2) into TeamPlayer

!new Position('position1')
!position1.positionName := #FORWARD

!new Position('position2')
!position2.positionName := #MIDFIELDER

!insert (player1, position1) into PlayerPositions
!insert (player1, position2) into PlayerPositions

!new Position('position3')
!position3.positionName := #DEFENDER

!insert (player2, position3) into PlayerPositions

!new Match('match1')
!match1.date := '10th October 2023'
!match1.homeAway := true

!insert (teamA, match1) into LocalMatch
!insert (teamB, match1) into VisitorMatch

!new MatchReport('matchReport1')
!matchReport1.duration := 90
!matchReport1.scoreVisitor := 2
!matchReport1.scoreLocal := 2

!insert (match1, matchReport1) into MatchMatchReport

!new MatchPlayer('matchPlayer1')
!matchPlayer1.booked := true
!matchPlayer1.goals := 1
!matchPlayer1.rating := 8

!insert (player1, matchPlayer1) into PlayerMatch

!new MatchPlayer('matchPlayer2')
!matchPlayer2.booked := false
!matchPlayer2.goals := 1
!matchPlayer2.rating := 7

!insert (player2, matchPlayer2) into PlayerMatch

!insert (match1, matchPlayer1) into MatchMatchPlayer
!insert (match1, matchPlayer2) into MatchMatchPlayer

!new MatchPlayerPosition('position4')
!position4.positionName := #FORWARD
!position4.number := 10

!insert (matchPlayer1, position4) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('position5')
!position5.positionName := #DEFENDER
!position5.number := 4

!insert (matchPlayer2, position5) into MatchPlayerMatchPlayerPosition

!new MatchEvent('matchEvent1')
!matchEvent1.eventType := #GOAL
!matchEvent1.time := 23

!new MatchEvent('matchEvent2')
!matchEvent2.eventType := #FOUL
!matchEvent2.time := 45

!new MatchEvent('matchEvent3')
!matchEvent3.eventType := #GOAL
!matchEvent3.time := 75

!insert (match1, matchEvent1) into MatchMatchEvent
!insert (match1, matchEvent2) into MatchMatchEvent
!insert (match1, matchEvent3) into MatchMatchEvent

!new MatchNote('matchNote1')
!matchNote1.note := 'It was a highly competitive match despite the internal mix-up of roles. Lessons learned for handling system constraints.'
!matchNote1.date := '11th October 2023'

!insert (match1, matchNote1) into MatchMatchNote

!new TrainingSession('trainingSession1')
!trainingSession1.date := '12th October 2023'
!trainingSession1.location := 'Star Arena Training Complex'
!trainingSession1.purpose := 'Defensive drills and strategic planning'

!new TrainingNotes('trainingNote1')
!trainingNote1.note := 'No-shows reported due to mismatch in scheduling.'

!insert (trainingSession1, trainingNote1) into TrainingTrainingNotes
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 6 | 21 | 28.57% |
| Invariants Errors (Not included on General) | 1 | 4 | 25.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `player1' of class `Player' is connected to 0 objects of class `TrainingObjective'
  at association end `trainingObjective' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `player2' of class `Player' is connected to 0 objects of class `TrainingObjective'
  at association end `trainingObjective' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `TeamTraining':
  Object `teamA' of class `Team' is connected to 0 objects of class `TrainingSession'
  at association end `trainingSession' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `TeamTraining':
  Object `teamB' of class `Team' is connected to 0 objects of class `TrainingSession'
  at association end `trainingSession' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `TeamTraining':
  Object `trainingSession1' of class `TrainingSession' is connected to 0 objects of class `Team'
  at association end `team' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `CompetitionMatch':
  Object `match1' of class `Match' is connected to 0 objects of class `Competition'
  at association end `competition' but the multiplicity is specified as `1'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (4) `MatchReport::SumOfScoresEqualsGoals': FAILED.
```

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 3 | 3 | 100.00% |

| Failed dates | 
|---| 
```
10th October 2023
```
```
11th October 2023
```
```
12th October 2023
```

## Generation 1 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 1 | 548 | 0.18% |
| Multiplicities Errors | 2 | 112 | 1.79% |
| Invariants Errors | 1 | 16 | 6.25% |

| Syntax Errors | 
|---| 
```
<input>:1:0: generation of expression `#RIGHT_WING' failed, with following error:
```

| Multiplicities Errors | 
|---| 
```
Multiplicity constraint violation in association `TeamTraining':
  Object `teamJ' of class `Team' is connected to 0 objects of class `TrainingSession'
  at association end `trainingSession' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `TeamTraining':
  Object `teamD' of class `Team' is connected to 0 objects of class `TrainingSession'
  at association end `trainingSession' but the multiplicity is specified as `1..*'.
```

| Invariants Errors | 
|---| 
```
checking invariant (4) `MatchReport::SumOfScoresEqualsGoals': FAILED.
```

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 6 | 21 | 28.57% |
| Invariants Errors (Not included on General) | 1 | 4 | 25.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `player1' of class `Player' is connected to 0 objects of class `TrainingObjective'
  at association end `trainingObjective' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `player2' of class `Player' is connected to 0 objects of class `TrainingObjective'
  at association end `trainingObjective' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `TeamTraining':
  Object `teamA' of class `Team' is connected to 0 objects of class `TrainingSession'
  at association end `trainingSession' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `TeamTraining':
  Object `teamB' of class `Team' is connected to 0 objects of class `TrainingSession'
  at association end `trainingSession' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `TeamTraining':
  Object `trainingSession1' of class `TrainingSession' is connected to 0 objects of class `Team'
  at association end `team' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `CompetitionMatch':
  Object `match1' of class `Match' is connected to 0 objects of class `Competition'
  at association end `competition' but the multiplicity is specified as `1'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (4) `MatchReport::SumOfScoresEqualsGoals': FAILED.
```

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 3 | 41 | 7.32% |

| Failed dates | 
|---| 
```
10th October 2023
```
```
11th October 2023
```
```
12th October 2023
```

# Generation 2
## Category baseline
```
!new Club('clubM')
!clubM.name := 'London Rovers'
!clubM.homeGround := 'Wembley Stadium'
!clubM.chairman := 'James Parker'

!new Club('clubN')
!clubN.name := 'Barcelona Bulls'
!clubN.homeGround := 'Camp Nou'
!clubN.chairman := 'Alejandro Diaz'

!new Team('teamM')
!teamM.name := 'London Rovers A-Team'

!new Team('teamN')
!teamN.name := 'Barcelona Bulls Major'

!insert (clubM, teamM) into ClubTeam
!insert (clubN, teamN) into ClubTeam

!new Competition('competition6')
!competition6.name := 'World Football Cup'
!competition6.type := 'International League'

!new TrainingSession('trainingSession10')
!trainingSession10.date := '2023-09-20'
!trainingSession10.location := 'Rovers Training Center'
!trainingSession10.purpose := 'Increase Stamina'

!new TrainingSession('trainingSession11')
!trainingSession11.date := '2023-09-21'
!trainingSession11.location := 'Bulls Practice Ground'
!trainingSession11.purpose := 'Strengthen Defensive Skills'

!insert (teamM, trainingSession10) into TeamTraining
!insert (teamN, trainingSession11) into TeamTraining

!new TrainingNotes('trainingNote10')
!trainingNote10.note := 'Long-distance running and endurance drills.'
!trainingNote10.date := '2023-09-20'

!new TrainingNotes('trainingNote11')
!trainingNote11.note := 'Defensive formations and tackling practices.'
!trainingNote11.date := '2023-09-21'

!insert (trainingSession10, trainingNote10) into TrainingTrainingNotes
!insert (trainingSession11, trainingNote11) into TrainingTrainingNotes

!new TrainingFailedToAttend('trainingFail6')
!trainingFail6.reason := 'Family Emergency'

!new Player('player13')
!player13.name := 'Henry Thompson'
!player13.age := 27
!player13.bestFoot := #LEFT
!player13.phoneNumber := '+44-20-7654321'

!new Player('player14')
!player14.name := 'Carlos Martinez'
!player14.age := 25
!player14.bestFoot := #RIGHT
!player14.phoneNumber := '+34-93-5678901'

!insert (teamM, player13) into TeamPlayer
!insert (teamN, player14) into TeamPlayer

!insert (trainingSession10, trainingFail6) into TrainingFailded
!insert (trainingFail6, player13) into FailedPlayer

!new Match('match7')
!match7.date := '2023-10-05'
!match7.homeAway := false

!insert (teamN, match7) into LocalMatch
!insert (teamM, match7) into VisitorMatch
!insert (competition6, match7) into CompetitionMatch

!new MatchReport('matchReport7')
!matchReport7.duration := 90
!matchReport7.scoreVisitor := 2
!matchReport7.scoreLocal := 0

!insert (match7, matchReport7) into MatchMatchReport

!new MatchEvent('matchEvent23')
!matchEvent23.eventType := #GOAL
!matchEvent23.time := 15

!new MatchEvent('matchEvent24')
!matchEvent24.eventType := #GOAL
!matchEvent24.time := 80

!new MatchEvent('matchEvent25')
!matchEvent25.eventType := #FOUL
!matchEvent25.time := 42

!insert (match7, matchEvent23) into MatchMatchEvent
!insert (match7, matchEvent24) into MatchMatchEvent
!insert (match7, matchEvent25) into MatchMatchEvent

!new MatchNote('matchNote5')
!matchNote5.note := 'Barcelona Bulls dominated with superior ball possession.'
!matchNote5.date := '2023-10-05'

!insert (match7, matchNote5) into MatchMatchNote

!new PlayerNotes('playerNote6')
!playerNote6.note := 'Needs to work on his tackling mentality.'
!playerNote6.date := '2023-09-10'

!insert (player13, playerNote6) into PlayerPlayerNotes

!new TrainingObjective('trainingObjective11')
!trainingObjective11.areaToImprove := 'Passing Accuracy'
!trainingObjective11.startDate := '2023-09-15'
!trainingObjective11.endDate := '2023-10-15'
!trainingObjective11.success := false

!new TrainingObjective('trainingObjective12')
!trainingObjective12.areaToImprove := 'Shoot Precision'
!trainingObjective12.startDate := '2023-09-15'
!trainingObjective12.endDate := '2023-10-15'
!trainingObjective12.success := true

!insert (trainingObjective11, player13) into TrainingObjectivePlayer
!insert (trainingObjective12, player14) into TrainingObjectivePlayer

!new MatchPlayer('matchPlayer12')
!matchPlayer12.booked := false
!matchPlayer12.goals := 0
!matchPlayer12.rating := 6

!new MatchPlayer('matchPlayer13')
!matchPlayer13.booked := false
!matchPlayer13.goals := 1
!matchPlayer13.rating := 9

!insert (player13, matchPlayer12) into PlayerMatch
!insert (player14, matchPlayer13) into PlayerMatch

!insert (match7, matchPlayer12) into MatchMatchPlayer
!insert (match7, matchPlayer13) into MatchMatchPlayer

!new MatchPlayerPosition('position36')
!position36.positionName := #DEFENDER
!position36.number := 4

!new MatchPlayerPosition('position37')
!position37.positionName := #FORWARD
!position37.number := 11

!insert (matchPlayer12, position36) into MatchPlayerMatchPlayerPosition
!insert (matchPlayer13, position37) into MatchPlayerMatchPlayerPosition

!new Position('position38')
!position38.positionName := #DEFENDER

!new Position('position39')
!position39.positionName := #FORWARD

!insert (player13, position38) into PlayerPositions
!insert (player14, position39) into PlayerPositions
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 120 | 0.00% |
| Multiplicities Errors | 0 | 29 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 11 | 0.00% |

## Category boundary
```
!new Club('clubS')
!clubS.name := 'Northern Lights FC'
!clubS.homeGround := 'Aurora Borealis Field'
!clubS.chairman := 'Jorma Aalto'

!new Club('clubT')
!clubT.name := 'Coastal Hurricanes'
!clubT.homeGround := 'Pacific Breeze Stadium'
!clubT.chairman := 'Hana Nakamura'

!new Team('teamS')
!teamS.name := 'Aurora Stars'

!new Team('teamT')
!teamT.name := 'Ocean Waves'

!insert (clubS, teamS) into ClubTeam
!insert (clubT, teamT) into ClubTeam

!new Player('player21')
!player21.name := 'Helmi Korhonen'
!player21.age := 28
!player21.bestFoot := #RIGHT
!player21.phoneNumber := '+358456789012'

!new Player('player22')
!player22.name := 'Keiko Tanaka'
!player22.age := 24
!player22.bestFoot := #BOTH
!player22.phoneNumber := '+819012345678'

!insert (teamS, player21) into TeamPlayer
!insert (teamT, player22) into TeamPlayer

!new Position('position54')
!position54.positionName := #DEFENDER

!new Position('position47')
!position47.positionName := #FORWARD

!insert (player21, position54) into PlayerPositions
!insert (player22, position47) into PlayerPositions

!new TrainingSession('trainingSession15')
!trainingSession15.date := '2023-10-15'
!trainingSession15.location := 'Frozen Fjords Arena'
!trainingSession15.purpose := 'Adaptation to Arctic Conditions'

!insert (teamS, trainingSession15) into TeamTraining

!new TrainingSession('trainingSession16')
!trainingSession16.date := '2023-10-14'
!trainingSession16.location := 'Coastal Grounds'
!trainingSession16.purpose := 'Wind Resistance Training'

!insert (teamT, trainingSession16) into TeamTraining

!new TrainingNotes('trainingNote15')
!trainingNote15.note := 'Player agility in extreme cold needs improvement.'
!trainingNote15.date := '2023-10-15'

!insert (trainingSession15, trainingNote15) into TrainingTrainingNotes

!new TrainingNotes('trainingNote16')
!trainingNote16.note := 'Players adapted well to windy conditions.'
!trainingNote16.date := '2023-10-14'

!insert (trainingSession16, trainingNote16) into TrainingTrainingNotes

!new TrainingFailedToAttend('trainingFail7')
!trainingFail7.reason := 'Family emergency'

!insert (trainingFail7, player22) into FailedPlayer
!insert (trainingSession15, trainingFail7) into TrainingFailded

!new Competition('competition8')
!competition8.name := 'World Ends Meet Cup'
!competition8.type := 'Tournament'

!new Match('match10')
!match10.date := '2023-10-20'
!match10.homeAway := false

!insert (teamS, match10) into LocalMatch
!insert (teamT, match10) into VisitorMatch
!insert (competition8, match10) into CompetitionMatch

!new MatchReport('matchReport10')
!matchReport10.duration := 120
!matchReport10.scoreVisitor := 1
!matchReport10.scoreLocal := 1

!insert (match10, matchReport10) into MatchMatchReport

!new MatchEvent('matchEvent31')
!matchEvent31.eventType := #GOAL
!matchEvent31.time := 10

!new MatchEvent('matchEvent32')
!matchEvent32.eventType := #GOAL
!matchEvent32.time := 85

!insert (match10, matchEvent31) into MatchMatchEvent
!insert (match10, matchEvent32) into MatchMatchEvent

!new MatchNote('matchNote8')
!matchNote8.note := 'Match extended to extra time due to tied score.'
!matchNote8.date := '2023-10-20'

!insert (match10, matchNote8) into MatchMatchNote

!new MatchPlayer('matchPlayer17')
!matchPlayer17.booked := true
!matchPlayer17.goals := 0
!matchPlayer17.rating := 6

!new MatchPlayer('matchPlayer18')
!matchPlayer18.booked := true
!matchPlayer18.goals := 1
!matchPlayer18.rating := 7

!insert (player21, matchPlayer17) into PlayerMatch
!insert (player22, matchPlayer18) into PlayerMatch

!insert (match10, matchPlayer17) into MatchMatchPlayer
!insert (match10, matchPlayer18) into MatchMatchPlayer

!new MatchPlayerPosition('position55')
!position55.positionName := #DEFENDER
!position55.number := 3

!new MatchPlayerPosition('position56')
!position56.positionName := #FORWARD
!position56.number := 10

!insert (matchPlayer17, position55) into MatchPlayerMatchPlayerPosition
!insert (matchPlayer18, position56) into MatchPlayerMatchPlayerPosition

!new TrainingObjective('trainingObjective15')
!trainingObjective15.areaToImprove := 'Improve Endurance'
!trainingObjective15.startDate := '2023-09-01'
!trainingObjective15.endDate := '2023-10-01'
!trainingObjective15.success := true

!new TrainingObjective('trainingObjective16')
!trainingObjective16.areaToImprove := 'Defensive Skills'
!trainingObjective16.startDate := '2023-09-01'
!trainingObjective16.endDate := '2023-10-01'
!trainingObjective16.success := false

!insert (trainingObjective15, player21) into TrainingObjectivePlayer
!insert (trainingObjective16, player22) into TrainingObjectivePlayer

!new PlayerNotes('playerNote8')
!playerNote8.note := 'Requires attention to defensive skills.'
!playerNote8.date := '2023-09-01'

!insert (player22, playerNote8) into PlayerPlayerNotes
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 116 | 0.00% |
| Multiplicities Errors | 0 | 28 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 11 | 0.00% |

## Category complex
```
!new Club('clubQ')
!clubQ.name := 'Tokyo Hawks'
!clubQ.homeGround := 'Saitama Super Arena'
!clubQ.chairman := 'Akira Tanaka'

!new Club('clubR')
!clubR.name := 'Toronto Maple Leaf FC'
!clubR.homeGround := 'Leaf Stadium'
!clubR.chairman := 'Michael Johnston'

!new Team('teamQ')
!teamQ.name := 'Tokyo Hawks A-Team'

!new Team('teamR')
!teamR.name := 'Toronto Maple Leaf FC Main Squad'

!insert (clubQ, teamQ) into ClubTeam
!insert (clubR, teamR) into ClubTeam

!new Player('player18')
!player18.name := 'Hiroshi Yamamoto'
!player18.age := 23
!player18.bestFoot := #RIGHT
!player18.phoneNumber := '+818012345678'

!new Player('player19')
!player19.name := 'Ethan Park'
!player19.age := 26
!player19.bestFoot := #LEFT
!player19.phoneNumber := '+14379876543'

!new Player('player20')
!player20.name := 'Yukio Sato'
!player20.age := 29
!player20.bestFoot := #RIGHT
!player20.phoneNumber := '+819876543210'

!insert (teamQ, player18) into TeamPlayer
!insert (teamR, player19) into TeamPlayer
!insert (teamQ, player20) into TeamPlayer

!new Position('position46')
!position46.positionName := #DEFENDER

!new Position('position47')
!position47.positionName := #FORWARD

!new Position('position50')
!position50.positionName := #GOALKEEPER

!insert (player18, position46) into PlayerPositions
!insert (player19, position47) into PlayerPositions
!insert (player20, position50) into PlayerPositions

!new Competition('competition7')
!competition7.name := 'International Friendly Cup'
!competition7.type := 'Friendly Match'

!new Match('match9')
!match9.date := '22-07-2023'
!match9.homeAway := false

!insert (teamR, match9) into LocalMatch
!insert (teamQ, match9) into VisitorMatch
!insert (competition7, match9) into CompetitionMatch

!new MatchReport('matchReport9')
!matchReport9.duration := 90
!matchReport9.scoreVisitor := 1
!matchReport9.scoreLocal := 1

!insert (match9, matchReport9) into MatchMatchReport

!new MatchPlayer('matchPlayer14')
!matchPlayer14.booked := false
!matchPlayer14.goals := 0
!matchPlayer14.rating := 7

!new MatchPlayer('matchPlayer15')
!matchPlayer15.booked := true
!matchPlayer15.goals := 1
!matchPlayer15.rating := 8

!new MatchPlayer('matchPlayer16')
!matchPlayer16.booked := false
!matchPlayer16.goals := 1
!matchPlayer16.rating := 7

!insert (player18, matchPlayer14) into PlayerMatch
!insert (player19, matchPlayer15) into PlayerMatch
!insert (player20, matchPlayer16) into PlayerMatch

!insert (match9, matchPlayer14) into MatchMatchPlayer
!insert (match9, matchPlayer15) into MatchMatchPlayer
!insert (match9, matchPlayer16) into MatchMatchPlayer

!new MatchPlayerPosition('position51')
!position51.positionName := #DEFENDER
!position51.number := 5

!new MatchPlayerPosition('position52')
!position52.positionName := #FORWARD
!position52.number := 9

!new MatchPlayerPosition('position53')
!position53.positionName := #FORWARD
!position53.number := 11

!insert (matchPlayer14, position51) into MatchPlayerMatchPlayerPosition
!insert (matchPlayer15, position52) into MatchPlayerMatchPlayerPosition
!insert (matchPlayer16, position53) into MatchPlayerMatchPlayerPosition

!new MatchEvent('matchEvent29')
!matchEvent29.eventType := #GOAL
!matchEvent29.time := 34

!new MatchEvent('matchEvent30')
!matchEvent30.eventType := #GOAL
!matchEvent30.time := 77

!insert (match9, matchEvent29) into MatchMatchEvent
!insert (match9, matchEvent30) into MatchMatchEvent

!new MatchNote('matchNote7')
!matchNote7.note := 'The match was balanced with strong defense and rare scoring opportunities.'
!matchNote7.date := '22-07-2023'

!insert (match9, matchNote7) into MatchMatchNote

!new TrainingSession('trainingSession13')
!trainingSession13.date := '19-07-2023'
!trainingSession13.location := 'Saitama Super Arena Training Grounds'
!trainingSession13.purpose := 'Enhance the team’s defensive tactics in anticipation of high-pressure matches.'

!insert (teamQ, trainingSession13) into TeamTraining

!new TrainingSession('trainingSession14')
!trainingSession14.date := '20-07-2023'
!trainingSession14.location := 'Leaf Stadium Training Facilities'
!trainingSession14.purpose := 'Offensive strategy and precision practice.'

!insert (teamR, trainingSession14) into TeamTraining

!new TrainingNotes('trainingNote13')
!trainingNote13.note := 'Significant improvement in players’ spatial awareness and coordination.'
!trainingNote13.date := '19-07-2023'

!insert (trainingSession13, trainingNote13) into TrainingTrainingNotes

!new TrainingNotes('trainingNote14')
!trainingNote14.note := 'Offensive drills emphasized quick decision-making and shot accuracy.'
!trainingNote14.date := '20-07-2023'

!insert (trainingSession14, trainingNote14) into TrainingTrainingNotes

!new TrainingObjective('trainingObjective13')
!trainingObjective13.areaToImprove := 'Defense Coordination'
!trainingObjective13.startDate := '10-07-2023'
!trainingObjective13.endDate := '20-07-2023'
!trainingObjective13.success := true

!new TrainingObjective('trainingObjective14')
!trainingObjective14.areaToImprove := 'Offensive Strategy'
!trainingObjective14.startDate := '10-07-2023'
!trainingObjective14.endDate := '20-07-2023'
!trainingObjective14.success := true

!insert (trainingObjective13, player18) into TrainingObjectivePlayer
!insert (trainingObjective14, player19) into TrainingObjectivePlayer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 127 | 0.00% |
| Multiplicities Errors | 1 | 30 | 3.33% |
| Invariants Errors | 0 | 4 | 0.00% |

| Multiplicities Errors | 
|---| 
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `player20' of class `Player' is connected to 0 objects of class `TrainingObjective'
  at association end `trainingObjective' but the multiplicity is specified as `1..*'.
```

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 10 | 0.00% |

## Category edge
```
!new Club('clubK')
!clubK.name := 'Lunar Legends FC'
!clubK.homeGround := 'Lunar Surface Stadium'
!clubK.chairman := 'Dr. Neil Armstrong'

!new Club('clubL')
!clubL.name := 'Moonlight Warriors'
!clubL.homeGround := 'Crater Field Arena'
!clubL.chairman := 'Ms. Valentina Tereshkova'

!new Team('teamK')
!teamK.name := 'Lunar Pioneers'

!new Team('teamL')
!teamL.name := 'Moonbeam Raiders'

!insert (clubK, teamK) into ClubTeam
!insert (clubL, teamL) into ClubTeam

!new Player('player11')
!player11.name := 'Stardust Walker'
!player11.age := 26
!player11.bestFoot := #RIGHT
!player11.phoneNumber := '+19876543210'

!new Player('player12')
!player12.name := 'Gravity Glide'
!player12.age := 30
!player12.bestFoot := #LEFT
!player12.phoneNumber := '+1029384756'

!insert (teamK, player11) into TeamPlayer
!insert (teamL, player12) into TeamPlayer

!new Position('position30')
!position30.positionName := #FORWARD

!new Position('position31')
!position31.positionName := #GOALKEEPER

!insert (player11, position30) into PlayerPositions
!insert (player11, position31) into PlayerPositions

!new Position('position32')
!position32.positionName := #DEFENDER

!new Position('position33')
!position33.positionName := #MIDFIELDER

!insert (player12, position32) into PlayerPositions
!insert (player12, position33) into PlayerPositions

!new Competition('competition5')
!competition5.name := 'Intergalactic Tournament'
!competition5.type := 'League'

!new Match('match6')
!match6.date := '31/08/2023'
!match6.homeAway := false

!insert (teamL, match6) into LocalMatch
!insert (teamK, match6) into VisitorMatch
!insert (competition5, match6) into CompetitionMatch

!new MatchReport('matchReport6')
!matchReport6.duration := 120
!matchReport6.scoreVisitor := 3
!matchReport6.scoreLocal := 3

!insert (match6, matchReport6) into MatchMatchReport

!new MatchEvent('matchEvent17')
!matchEvent17.eventType := #GOAL
!matchEvent17.time := 15

!new MatchEvent('matchEvent18')
!matchEvent18.eventType := #GOAL
!matchEvent18.time := 45

!new MatchEvent('matchEvent19')
!matchEvent19.eventType := #GOAL
!matchEvent19.time := 70

!new MatchEvent('matchEvent20')
!matchEvent20.eventType := #GOAL
!matchEvent20.time := 85

!new MatchEvent('matchEvent21')
!matchEvent21.eventType := #GOAL
!matchEvent21.time := 105

!new MatchEvent('matchEvent22')
!matchEvent22.eventType := #GOAL
!matchEvent22.time := 110

!insert (match6, matchEvent17) into MatchMatchEvent
!insert (match6, matchEvent18) into MatchMatchEvent
!insert (match6, matchEvent19) into MatchMatchEvent
!insert (match6, matchEvent20) into MatchMatchEvent
!insert (match6, matchEvent21) into MatchMatchEvent
!insert (match6, matchEvent22) into MatchMatchEvent

!new MatchPlayer('matchPlayer10')
!matchPlayer10.booked := false
!matchPlayer10.goals := 2
!matchPlayer10.rating := 9

!new MatchPlayer('matchPlayer11')
!matchPlayer11.booked := true
!matchPlayer11.goals := 1
!matchPlayer11.rating := 6

!insert (player11, matchPlayer10) into PlayerMatch
!insert (player12, matchPlayer11) into PlayerMatch

!insert (match6, matchPlayer10) into MatchMatchPlayer
!insert (match6, matchPlayer11) into MatchMatchPlayer

!new MatchPlayerPosition('position34')
!position34.positionName := #FORWARD
!position34.number := 7

!new MatchPlayerPosition('position35')
!position35.positionName := #DEFENDER
!position35.number := 4

!insert (matchPlayer10, position34) into MatchPlayerMatchPlayerPosition
!insert (matchPlayer11, position35) into MatchPlayerMatchPlayerPosition

!new TrainingSession('trainingSession8')
!trainingSession8.date := '28/08/2023'
!trainingSession8.location := 'Crater Field Arena'
!trainingSession8.purpose := 'High-Gravity Adaptation'

!insert (teamL, trainingSession8) into TeamTraining

!new TrainingSession('trainingSession9')
!trainingSession9.date := '29/08/2023'
!trainingSession9.location := 'Lunar Surface Stadium'
!trainingSession9.purpose := 'Low Light Dribbling Practice'

!insert (teamK, trainingSession9) into TeamTraining

!new TrainingNotes('trainingNote8')
!trainingNote8.note := 'Players adjusted well to slower ball speed on lunar surface.'
!trainingNote8.date := '28/08/2023'

!insert (trainingSession8, trainingNote8) into TrainingTrainingNotes

!new TrainingNotes('trainingNote9')
!trainingNote9.note := 'Practiced dribbling under low light conditions.'
!trainingNote9.date := '29/08/2023'

!insert (trainingSession9, trainingNote9) into TrainingTrainingNotes

!new TrainingFailedToAttend('trainingFail5')
!trainingFail5.reason := 'Meteor shower delayed transportation'

!insert (trainingFail5, player12) into FailedPlayer
!insert (trainingSession8, trainingFail5) into TrainingFailded

!new TrainingObjective('trainingObjective9')
!trainingObjective9.areaToImprove := 'Ball Control under High Gravity'
!trainingObjective9.startDate := '25/08/2023'
!trainingObjective9.endDate := '30/08/2023'
!trainingObjective9.success := false

!insert (trainingObjective9, player11) into TrainingObjectivePlayer

!new TrainingObjective('trainingObjective10')
!trainingObjective10.areaToImprove := 'Low Light Awareness'
!trainingObjective10.startDate := '25/08/2023'
!trainingObjective10.endDate := '30/08/2023'
!trainingObjective10.success := true

!insert (trainingObjective10, player12) into TrainingObjectivePlayer

!new PlayerNotes('playerNote4')
!playerNote4.note := 'Excellent agility when moving through uneven terrain.'
!playerNote4.date := '29/08/2023'

!insert (player11, playerNote4) into PlayerPlayerNotes

!new PlayerNotes('playerNote5')
!playerNote5.note := 'Effective in blocking under low light conditions.'
!playerNote5.date := '30/08/2023'

!insert (player12, playerNote5) into PlayerPlayerNotes
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 138 | 0.00% |
| Multiplicities Errors | 0 | 34 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 11 | 0.00% |

## Category invalid
```
!new Club('clubO')
!clubO.name := 'Bangkok Warriors FC'
!clubO.homeGround := 'Warrior Stadium, Bangkok'
!clubO.chairman := 'Somchai Thanakorn'

!new Club('clubP')
!clubP.name := 'Kuala Lumpur Panthers FC'
!clubP.homeGround := 'Panther Den, Kuala Lumpur'
!clubP.chairman := 'Fatimah Razak'

!new Team('teamO')
!teamO.name := 'Bangkok Warriors Juniors'

!new Team('teamP')
!teamP.name := 'KL Panther Cubs'

!insert (clubO, teamO) into ClubTeam
!insert (clubP, teamP) into ClubTeam

!new Player('player15')
!player15.name := 'Aran Kanchana'
!player15.age := 19
!player15.bestFoot := #RIGHT
!player15.phoneNumber := '+66 812 345 678'

!new Position('position40')
!position40.positionName := #MIDFIELDER

!new Position('position41')
!position41.positionName := #FORWARD

!new Position('position42')
!position42.positionName := #GOALKEEPER

!insert (player15, position40) into PlayerPositions
!insert (player15, position41) into PlayerPositions
!insert (player15, position42) into PlayerPositions

!new Player('player16')
!player16.name := 'Hana Abdullah'
!player16.age := 22
!player16.bestFoot := #LEFT
!player16.phoneNumber := '+60 176 543 210'

!new Position('position43')
!position43.positionName := #MIDFIELDER

!insert (player16, position43) into PlayerPositions

!new Player('player17')
!player17.name := 'Wanchai Siripong'
!player17.age := 18
!player17.bestFoot := #BOTH
!player17.phoneNumber := '+66 911 223 334'

!new Position('position44')
!position44.positionName := #DEFENDER

!insert (player17, position40) into PlayerPositions
!insert (player17, position41) into PlayerPositions
!insert (player17, position44) into PlayerPositions

!insert (teamO, player15) into TeamPlayer
!insert (teamP, player16) into TeamPlayer
!insert (teamO, player17) into TeamPlayer

!new Match('match8')
!match8.date := '20th November 2023'
!match8.homeAway := true

!insert (teamO, match8) into LocalMatch
!insert (teamP, match8) into VisitorMatch

!new MatchReport('matchReport8')
!matchReport8.duration := 90
!matchReport8.scoreVisitor := 3
!matchReport8.scoreLocal := 3

!insert (match8, matchReport8) into MatchMatchReport

!new MatchEvent('matchEvent26')
!matchEvent26.eventType := #GOAL
!matchEvent26.time := 15

!new MatchEvent('matchEvent27')
!matchEvent27.eventType := #GOAL
!matchEvent27.time := 60

!new MatchEvent('matchEvent28')
!matchEvent28.eventType := #GOAL
!matchEvent28.time := 89

!insert (match8, matchEvent26) into MatchMatchEvent
!insert (match8, matchEvent27) into MatchMatchEvent
!insert (match8, matchEvent28) into MatchMatchEvent

!new MatchPlayer('matchPlayer14')
!matchPlayer14.booked := false
!matchPlayer14.goals := 0
!matchPlayer14.rating := 9

!new MatchPlayer('matchPlayer15')
!matchPlayer15.booked := true
!matchPlayer15.goals := 1
!matchPlayer15.rating := 7

!new MatchPlayer('matchPlayer16')
!matchPlayer16.booked := false
!matchPlayer16.goals := 2
!matchPlayer16.rating := 8

!insert (player15, matchPlayer14) into PlayerMatch
!insert (player16, matchPlayer15) into PlayerMatch
!insert (player17, matchPlayer16) into PlayerMatch

!insert (match8, matchPlayer14) into MatchMatchPlayer
!insert (match8, matchPlayer15) into MatchMatchPlayer
!insert (match8, matchPlayer16) into MatchMatchPlayer

!new MatchNote('matchNote6')
!matchNote6.note := 'The match was characterized by repeated defensive and offensive exchanges, each team giving their best under strategic constraints.'
!matchNote6.date := '21st November 2023'

!insert (match8, matchNote6) into MatchMatchNote

!new TrainingSession('trainingSession12')
!trainingSession12.date := '22nd November 2023'
!trainingSession12.location := 'Panther Den Practice Field'
!trainingSession12.purpose := 'Strategic alignment and team cohesion exercises'

!insert (teamP, trainingSession12) into TeamTraining

!new TrainingNotes('trainingNote12')
!trainingNote12.note := 'Discrepancies in player assignments due to fixture clashes resulted in training downtime.'
!trainingNote12.date := '22nd November 2023'

!insert (trainingSession12, trainingNote12) into TrainingTrainingNotes
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 10 | 27 | 37.04% |
| Invariants Errors (Not included on General) | 1 | 4 | 25.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `player17' of class `Player' is connected to 0 objects of class `TrainingObjective'
  at association end `trainingObjective' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `player16' of class `Player' is connected to 0 objects of class `TrainingObjective'
  at association end `trainingObjective' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `player15' of class `Player' is connected to 0 objects of class `TrainingObjective'
  at association end `trainingObjective' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `PlayerPositions':
  Object `position40' of class `Position' is connected to 2 objects of class `Player'
  at association end `player' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `PlayerPositions':
  Object `position41' of class `Position' is connected to 2 objects of class `Player'
  at association end `player' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `MatchPlayerMatchPlayerPosition':
  Object `matchPlayer14' of class `MatchPlayer' is connected to 0 objects of class `MatchPlayerPosition'
  at association end `matchPlayerPosition' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `MatchPlayerMatchPlayerPosition':
  Object `matchPlayer15' of class `MatchPlayer' is connected to 0 objects of class `MatchPlayerPosition'
  at association end `matchPlayerPosition' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `MatchPlayerMatchPlayerPosition':
  Object `matchPlayer16' of class `MatchPlayer' is connected to 0 objects of class `MatchPlayerPosition'
  at association end `matchPlayerPosition' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `TeamTraining':
  Object `teamO' of class `Team' is connected to 0 objects of class `TrainingSession'
  at association end `trainingSession' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `CompetitionMatch':
  Object `match8' of class `Match' is connected to 0 objects of class `Competition'
  at association end `competition' but the multiplicity is specified as `1'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (4) `MatchReport::SumOfScoresEqualsGoals': FAILED.
```

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 4 | 4 | 100.00% |

| Failed dates | 
|---| 
```
20th November 2023
```
```
21st November 2023
```
```
22nd November 2023
```
```
22nd November 2023
```

## Generation 2 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 603 | 0.00% |
| Multiplicities Errors | 1 | 121 | 0.83% |
| Invariants Errors | 0 | 16 | 0.00% |

| Multiplicities Errors | 
|---| 
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `player20' of class `Player' is connected to 0 objects of class `TrainingObjective'
  at association end `trainingObjective' but the multiplicity is specified as `1..*'.
```

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 10 | 27 | 37.04% |
| Invariants Errors (Not included on General) | 1 | 4 | 25.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `player17' of class `Player' is connected to 0 objects of class `TrainingObjective'
  at association end `trainingObjective' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `player16' of class `Player' is connected to 0 objects of class `TrainingObjective'
  at association end `trainingObjective' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `player15' of class `Player' is connected to 0 objects of class `TrainingObjective'
  at association end `trainingObjective' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `PlayerPositions':
  Object `position40' of class `Position' is connected to 2 objects of class `Player'
  at association end `player' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `PlayerPositions':
  Object `position41' of class `Position' is connected to 2 objects of class `Player'
  at association end `player' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `MatchPlayerMatchPlayerPosition':
  Object `matchPlayer14' of class `MatchPlayer' is connected to 0 objects of class `MatchPlayerPosition'
  at association end `matchPlayerPosition' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `MatchPlayerMatchPlayerPosition':
  Object `matchPlayer15' of class `MatchPlayer' is connected to 0 objects of class `MatchPlayerPosition'
  at association end `matchPlayerPosition' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `MatchPlayerMatchPlayerPosition':
  Object `matchPlayer16' of class `MatchPlayer' is connected to 0 objects of class `MatchPlayerPosition'
  at association end `matchPlayerPosition' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `TeamTraining':
  Object `teamO' of class `Team' is connected to 0 objects of class `TrainingSession'
  at association end `trainingSession' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `CompetitionMatch':
  Object `match8' of class `Match' is connected to 0 objects of class `Competition'
  at association end `competition' but the multiplicity is specified as `1'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (4) `MatchReport::SumOfScoresEqualsGoals': FAILED.
```

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 4 | 47 | 8.51% |

| Failed dates | 
|---| 
```
20th November 2023
```
```
21st November 2023
```
```
22nd November 2023
```
```
22nd November 2023
```

# Generation 3
## Category baseline
```
!new Club('clubW')
!clubW.name := 'Rome Gladiators'
!clubW.homeGround := 'Colosseum Arena'
!clubW.chairman := 'Giovanni Rossi'

!new Club('clubX')
!clubX.name := 'Tokyo Samurais'
!clubX.homeGround := 'Tokyo Dome'
!clubX.chairman := 'Aiko Okada'

!new Team('teamW')
!teamW.name := 'Rome Gladiators United'

!new Team('teamX')
!teamX.name := 'Tokyo Samurais FC'

!insert (clubW, teamW) into ClubTeam
!insert (clubX, teamX) into ClubTeam

!new Competition('competition10')
!competition10.name := 'Intercontinental Derby'
!competition10.type := 'Cup'

!new TrainingSession('trainingSession19')
!trainingSession19.date := '2023-09-30'
!trainingSession19.location := 'Rome Training Ground'
!trainingSession19.purpose := 'Polish Set-Piece Execution'

!new TrainingSession('trainingSession20')
!trainingSession20.date := '2023-09-28'
!trainingSession20.location := 'Samurai Training Facility'
!trainingSession20.purpose := 'Enhance Speed and Agility'

!insert (teamW, trainingSession19) into TeamTraining
!insert (teamX, trainingSession20) into TeamTraining

!new TrainingNotes('trainingNote19')
!trainingNote19.note := 'Practiced corner kicks and free-kick scenarios.'
!trainingNote19.date := '2023-09-30'

!new TrainingNotes('trainingNote20')
!trainingNote20.note := 'Timed sprints and reaction drills.'
!trainingNote20.date := '2023-09-28'

!insert (trainingSession19, trainingNote19) into TrainingTrainingNotes
!insert (trainingSession20, trainingNote20) into TrainingTrainingNotes

!new TrainingFailedToAttend('trainingFail8')
!trainingFail8.reason := 'Travel Delays'

!new Player('player25')
!player25.name := 'Marco Ventura'
!player25.age := 30
!player25.bestFoot := #LEFT
!player25.phoneNumber := '+39-06-0987654'

!new Player('player26')
!player26.name := 'Kenji Tanaka'
!player26.age := 24
!player26.bestFoot := #RIGHT
!player26.phoneNumber := '+81-3-23456789'

!insert (teamW, player25) into TeamPlayer
!insert (teamX, player26) into TeamPlayer

!insert (trainingSession20, trainingFail8) into TrainingFailded
!insert (trainingFail8, player26) into FailedPlayer

!new Match('match12')
!match12.date := '2023-10-10'
!match12.homeAway := true

!insert (teamW, match12) into LocalMatch
!insert (teamX, match12) into VisitorMatch
!insert (competition10, match12) into CompetitionMatch

!new MatchReport('matchReport12')
!matchReport12.duration := 90
!matchReport12.scoreVisitor := 1
!matchReport12.scoreLocal := 1

!insert (match12, matchReport12) into MatchMatchReport

!new MatchEvent('matchEvent34')
!matchEvent34.eventType := #GOAL
!matchEvent34.time := 12

!new MatchEvent('matchEvent35')
!matchEvent35.eventType := #GOAL
!matchEvent35.time := 64

!new MatchEvent('matchEvent36')
!matchEvent36.eventType := #FOUL
!matchEvent36.time := 55

!insert (match12, matchEvent34) into MatchMatchEvent
!insert (match12, matchEvent35) into MatchMatchEvent
!insert (match12, matchEvent36) into MatchMatchEvent

!new MatchNote('matchNote9')
!matchNote9.note := 'A thrilling showdown with equal dominance.'
!matchNote9.date := '2023-10-10'

!insert (match12, matchNote9) into MatchMatchNote

!new PlayerNotes('playerNote11')
!playerNote11.note := 'Shows promising potential in quick attacking transitions.'
!playerNote11.date := '2023-09-21'

!insert (player26, playerNote11) into PlayerPlayerNotes

!new TrainingObjective('trainingObjective19')
!trainingObjective19.areaToImprove := 'Positional Awareness'
!trainingObjective19.startDate := '2023-09-15'
!trainingObjective19.endDate := '2023-10-15'
!trainingObjective19.success := true

!new TrainingObjective('trainingObjective20')
!trainingObjective20.areaToImprove := 'Speed and Agility'
!trainingObjective20.startDate := '2023-09-15'
!trainingObjective20.endDate := '2023-10-15'
!trainingObjective20.success := false

!insert (trainingObjective19, player25) into TrainingObjectivePlayer
!insert (trainingObjective20, player26) into TrainingObjectivePlayer

!new MatchPlayer('matchPlayer21')
!matchPlayer21.booked := true
!matchPlayer21.goals := 0
!matchPlayer21.rating := 7

!new MatchPlayer('matchPlayer22')
!matchPlayer22.booked := false
!matchPlayer22.goals := 1
!matchPlayer22.rating := 10

!insert (player25, matchPlayer21) into PlayerMatch
!insert (player26, matchPlayer22) into PlayerMatch

!insert (match12, matchPlayer21) into MatchMatchPlayer
!insert (match12, matchPlayer22) into MatchMatchPlayer

!new MatchPlayerPosition('position62')
!position62.positionName := #MIDFIELDER
!position62.number := 8

!new MatchPlayerPosition('position63')
!position63.positionName := #FORWARD
!position63.number := 10

!insert (matchPlayer21, position62) into MatchPlayerMatchPlayerPosition
!insert (matchPlayer22, position63) into MatchPlayerMatchPlayerPosition

!new Position('position64')
!position64.positionName := #MIDFIELDER

!new Position('position65')
!position65.positionName := #FORWARD

!insert (player25, position64) into PlayerPositions
!insert (player26, position65) into PlayerPositions
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 120 | 0.00% |
| Multiplicities Errors | 0 | 29 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 11 | 0.00% |

## Category boundary
```
!new Club('clubAA')
!clubAA.name := 'Jungle Leopards FC'
!clubAA.homeGround := 'Equatorial Arena'
!clubAA.chairman := 'Paolo Mendes'

!new Club('clubAB')
!clubAB.name := 'Highland Warriors'
!clubAB.homeGround := 'Alpine Fortress'
!clubAB.chairman := 'Greta Brandt'

!new Team('teamAA')
!teamAA.name := 'Rainforest Pumas'

!new Team('teamAB')
!teamAB.name := 'Mountain Eagles'

!insert (clubAA, teamAA) into ClubTeam
!insert (clubAB, teamAB) into ClubTeam

!new Player('player30')
!player30.name := 'Carlos Mendes'
!player30.age := 32
!player30.bestFoot := #LEFT
!player30.phoneNumber := '+557199876543'

!new Player('player31')
!player31.name := 'Natalia Moreno'
!player31.age := 20
!player31.bestFoot := #RIGHT
!player31.phoneNumber := '+557598765432'

!new Player('player32')
!player32.name := 'Elias Novak'
!player32.age := 28
!player32.bestFoot := #LEFT
!player32.phoneNumber := '+558812345678'

!insert (teamAA, player30) into TeamPlayer
!insert (teamAA, player31) into TeamPlayer
!insert (teamAB, player32) into TeamPlayer

!new Position('position70')
!position70.positionName := #MIDFIELDER

!new Position('position74')
!position74.positionName := #FORWARD

!new Position('position76')
!position76.positionName := #DEFENDER

!insert (player30, position70) into PlayerPositions
!insert (player31, position74) into PlayerPositions
!insert (player32, position76) into PlayerPositions

!new TrainingSession('trainingSession22')
!trainingSession22.date := '2023-11-10'
!trainingSession22.location := 'Canopy Training Center'
!trainingSession22.purpose := 'Tree Canopy Agility Drills'

!insert (teamAA, trainingSession22) into TeamTraining

!new TrainingSession('trainingSession23')
!trainingSession23.date := '2023-11-09'
!trainingSession23.location := 'Alpine Fortress Training Ground'
!trainingSession23.purpose := 'Altitude Adaptation Drills'

!insert (teamAB, trainingSession23) into TeamTraining

!new TrainingNotes('trainingNote22')
!trainingNote22.note := 'Focus on quick turns and elevated jumps.'
!trainingNote22.date := '2023-11-10'

!insert (trainingSession22, trainingNote22) into TrainingTrainingNotes

!new TrainingNotes('trainingNote23')
!trainingNote23.note := 'Players focused on cardiovascular endurance in high altitude.'
!trainingNote23.date := '2023-11-09'

!insert (trainingSession23, trainingNote23) into TrainingTrainingNotes

!new TrainingFailedToAttend('trainingFail9')
!trainingFail9.reason := 'Travel delays'

!insert (trainingFail9, player31) into FailedPlayer
!insert (trainingSession22, trainingFail9) into TrainingFailded

!new Competition('competition12')
!competition12.name := 'Summit Clash Cup'
!competition12.type := 'Knockout'

!new Match('match14')
!match14.date := '2023-11-12'
!match14.homeAway := true

!insert (teamAB, match14) into LocalMatch
!insert (teamAA, match14) into VisitorMatch
!insert (competition12, match14) into CompetitionMatch

!new MatchReport('matchReport14')
!matchReport14.duration := 90
!matchReport14.scoreVisitor := 1
!matchReport14.scoreLocal := 0

!insert (match14, matchReport14) into MatchMatchReport

!new MatchEvent('matchEvent40')
!matchEvent40.eventType := #GOAL
!matchEvent40.time := 15

!new MatchEvent('matchEvent41')
!matchEvent41.eventType := #FOUL
!matchEvent41.time := 70

!insert (match14, matchEvent40) into MatchMatchEvent
!insert (match14, matchEvent41) into MatchMatchEvent

!new MatchNote('matchNote11')
!matchNote11.note := 'Rainforest Pumas dominated possession early on.'
!matchNote11.date := '2023-11-12'

!insert (match14, matchNote11) into MatchMatchNote

!new PlayerNotes('playerNote12')
!playerNote12.note := 'Needs to improve long passes.'
!playerNote12.date := '2023-08-15'

!insert (player30, playerNote12) into PlayerPlayerNotes

!new MatchPlayer('matchPlayer26')
!matchPlayer26.booked := false
!matchPlayer26.goals := 1
!matchPlayer26.rating := 8

!new MatchPlayer('matchPlayer27')
!matchPlayer27.booked := false
!matchPlayer27.goals := 0
!matchPlayer27.rating := 5

!insert (player30, matchPlayer26) into PlayerMatch
!insert (player31, matchPlayer27) into PlayerMatch

!insert (match14, matchPlayer26) into MatchMatchPlayer
!insert (match14, matchPlayer27) into MatchMatchPlayer

!new MatchPlayerPosition('position72')
!position72.positionName := #MIDFIELDER
!position72.number := 8

!new MatchPlayerPosition('position75')
!position75.positionName := #FORWARD
!position75.number := 11

!insert (matchPlayer26, position72) into MatchPlayerMatchPlayerPosition
!insert (matchPlayer27, position75) into MatchPlayerMatchPlayerPosition

!new TrainingObjective('trainingObjective21')
!trainingObjective21.areaToImprove := 'Enhance Vertical Leap'
!trainingObjective21.startDate := '2023-10-01'
!trainingObjective21.endDate := '2023-11-01'
!trainingObjective21.success := false

!new TrainingObjective('trainingObjective22')
!trainingObjective22.areaToImprove := 'Improve Passing Accuracy'
!trainingObjective22.startDate := '2023-10-01'
!trainingObjective22.endDate := '2023-11-01'
!trainingObjective22.success := true

!insert (trainingObjective21, player31) into TrainingObjectivePlayer
!insert (trainingObjective22, player30) into TrainingObjectivePlayer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 125 | 0.00% |
| Multiplicities Errors | 1 | 30 | 3.33% |
| Invariants Errors | 0 | 4 | 0.00% |

| Multiplicities Errors | 
|---| 
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `player32' of class `Player' is connected to 0 objects of class `TrainingObjective'
  at association end `trainingObjective' but the multiplicity is specified as `1..*'.
```

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 11 | 0.00% |

## Category complex
```
!new Club('clubAE')
!clubAE.name := 'Johannesburg Jaguars FC'
!clubAE.homeGround := 'Nelspruit Stadium'
!clubAE.chairman := 'Lindiwe Madiba'

!new Club('clubAF')
!clubAF.name := 'Buenos Aires Strikers'
!clubAF.homeGround := 'El Monumental'
!clubAF.chairman := 'Alejandro Gomez'

!new Club('clubAG')
!clubAG.name := 'Nairobi Warriors'
!clubAG.homeGround := 'Kasarani Stadium'
!clubAG.chairman := 'David Otieno'

!new Team('teamAE')
!teamAE.name := 'Johannesburg Jaguars Senior Team'

!new Team('teamAF')
!teamAF.name := 'Buenos Aires Strikers Elite Squad'

!new Team('teamAG')
!teamAG.name := 'Nairobi Warriors All-Stars'

!insert (clubAE, teamAE) into ClubTeam
!insert (clubAF, teamAF) into ClubTeam
!insert (clubAG, teamAG) into ClubTeam

!new Player('player35')
!player35.name := 'Thabo Mbeki'
!player35.age := 30
!player35.bestFoot := #RIGHT
!player35.phoneNumber := '+27123456789'

!new Player('player36')
!player36.name := 'Marco Veron'
!player36.age := 27
!player36.bestFoot := #LEFT
!player36.phoneNumber := '+5412345678'

!new Player('player37')
!player37.name := 'Kamau Wanjiku'
!player37.age := 32
!player37.bestFoot := #RIGHT
!player37.phoneNumber := '+254701234567'

!insert (teamAE, player35) into TeamPlayer
!insert (teamAF, player36) into TeamPlayer
!insert (teamAG, player37) into TeamPlayer

!new Position('position84')
!position84.positionName := #MIDFIELDER

!new Position('position83')
!position83.positionName := #FORWARD

!new Position('position76')
!position76.positionName := #DEFENDER

!insert (player35, position84) into PlayerPositions
!insert (player36, position83) into PlayerPositions
!insert (player37, position76) into PlayerPositions

!new Competition('competition14')
!competition14.name := 'Africa-South America Cup'
!competition14.type := 'International Tournament'

!new Match('match16')
!match16.date := '05-08-2023'
!match16.homeAway := false

!new Match('match17')
!match17.date := '11-08-2023'
!match17.homeAway := true

!insert (teamAE, match16) into LocalMatch
!insert (teamAG, match17) into LocalMatch

!insert (competition14, match16) into CompetitionMatch
!insert (competition14, match17) into CompetitionMatch

!new MatchReport('matchReport16')
!matchReport16.duration := 90
!matchReport16.scoreVisitor := 1
!matchReport16.scoreLocal := 1

!new MatchReport('matchReport17')
!matchReport17.duration := 90
!matchReport17.scoreVisitor := 1
!matchReport17.scoreLocal := 1

!insert (match16, matchReport16) into MatchMatchReport
!insert (match17, matchReport17) into MatchMatchReport

!new MatchPlayer('matchPlayer30')
!matchPlayer30.booked := true
!matchPlayer30.goals := 1
!matchPlayer30.rating := 8

!new MatchPlayer('matchPlayer31')
!matchPlayer31.booked := false
!matchPlayer31.goals := 0
!matchPlayer31.rating := 9

!new MatchPlayer('matchPlayer32')
!matchPlayer32.booked := false
!matchPlayer32.goals := 1
!matchPlayer32.rating := 7

!insert (player35, matchPlayer30) into PlayerMatch
!insert (player36, matchPlayer31) into PlayerMatch
!insert (player37, matchPlayer32) into PlayerMatch

!insert (match16, matchPlayer30) into MatchMatchPlayer
!insert (match17, matchPlayer31) into MatchMatchPlayer
!insert (match17, matchPlayer32) into MatchMatchPlayer

!new MatchPlayerPosition('position85')
!position85.positionName := #MIDFIELDER
!position85.number := 7

!new MatchPlayerPosition('position86')
!position86.positionName := #FORWARD
!position86.number := 9

!new MatchPlayerPosition('position87')
!position87.positionName := #DEFENDER
!position87.number := 4

!insert (matchPlayer30, position85) into MatchPlayerMatchPlayerPosition
!insert (matchPlayer31, position86) into MatchPlayerMatchPlayerPosition
!insert (matchPlayer32, position87) into MatchPlayerMatchPlayerPosition

!new MatchEvent('matchEvent45')
!matchEvent45.eventType := #GOAL
!matchEvent45.time := 12

!new MatchEvent('matchEvent46')
!matchEvent46.eventType := #FOUL
!matchEvent46.time := 53

!new MatchEvent('matchEvent47')
!matchEvent47.eventType := #GOAL
!matchEvent47.time := 67

!insert (match16, matchEvent45) into MatchMatchEvent
!insert (match17, matchEvent46) into MatchMatchEvent
!insert (match17, matchEvent47) into MatchMatchEvent

!new TrainingSession('trainingSession26')
!trainingSession26.date := '01-08-2023'
!trainingSession26.location := 'El Monumental Training Ground'
!trainingSession26.purpose := 'Enhance offensive capabilities in tight spaces.'

!new TrainingSession('trainingSession28')
!trainingSession28.date := '03-08-2023'
!trainingSession28.location := 'Johannesburg Jaguars Training Ground'
!trainingSession28.purpose := 'Defensive Strategies'

!insert (teamAF, trainingSession26) into TeamTraining
!insert (teamAE, trainingSession28) into TeamTraining

!new TrainingNotes('trainingNote26')
!trainingNote26.note := 'Team executed intricate passing drills effectively, showing robustness in attack.'
!trainingNote26.date := '01-08-2023'

!new TrainingNotes('trainingNote28')
!trainingNote28.note := 'Solidified defense with innovative positioning tactics.'
!trainingNote28.date := '03-08-2023'

!insert (trainingSession26, trainingNote26) into TrainingTrainingNotes
!insert (trainingSession28, trainingNote28) into TrainingTrainingNotes

!new TrainingObjective('trainingObjective25')
!trainingObjective25.areaToImprove := 'Offensive Plays'
!trainingObjective25.startDate := '20-07-2023'
!trainingObjective25.endDate := '03-08-2023'
!trainingObjective25.success := true

!new TrainingObjective('trainingObjective27')
!trainingObjective27.areaToImprove := 'Defensive Resilience'
!trainingObjective27.startDate := '20-07-2023'
!trainingObjective27.endDate := '03-08-2023'
!trainingObjective27.success := false

!insert (trainingObjective25, player36) into TrainingObjectivePlayer
!insert (trainingObjective27, player35) into TrainingObjectivePlayer
!insert (trainingObjective27, player37) into TrainingObjectivePlayer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 144 | 0.00% |
| Multiplicities Errors | 4 | 34 | 11.76% |
| Invariants Errors | 1 | 4 | 25.00% |

| Multiplicities Errors | 
|---| 
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `trainingObjective27' of class `TrainingObjective' is connected to 2 objects of class `Player'
  at association end `player' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `VisitorMatch':
  Object `match16' of class `Match' is connected to 0 objects of class `Team'
  at association end `visitor' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `VisitorMatch':
  Object `match17' of class `Match' is connected to 0 objects of class `Team'
  at association end `visitor' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `TeamTraining':
  Object `teamAG' of class `Team' is connected to 0 objects of class `TrainingSession'
  at association end `trainingSession' but the multiplicity is specified as `1..*'.
```

| Invariants Errors | 
|---| 
```
checking invariant (4) `MatchReport::SumOfScoresEqualsGoals': FAILED.
```

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 10 | 0.00% |

## Category edge
```
!new Club('clubU')
!clubU.name := 'Sahara Stars FC'
!clubU.homeGround := 'Sand Dunes Arena'
!clubU.chairman := 'Sheikh Ahmed Bin Tufan'

!new Club('clubV')
!clubV.name := 'Oasis Eagles'
!clubV.homeGround := 'Mirage Field'
!clubV.chairman := 'Lady Zara Al Hadi'

!new Team('teamU')
!teamU.name := 'Desert Flames'

!new Team('teamV')
!teamV.name := 'Oasis Falcons'

!insert (clubU, teamU) into ClubTeam
!insert (clubV, teamV) into ClubTeam

!new Player('player23')
!player23.name := 'Falcon Swift'
!player23.age := 22
!player23.bestFoot := #RIGHT
!player23.phoneNumber := '+3216549870'

!new Player('player24')
!player24.name := 'Mirage Keeper'
!player24.age := 28
!player24.bestFoot := #LEFT
!player24.phoneNumber := '+6655443322'

!insert (teamU, player23) into TeamPlayer
!insert (teamV, player24) into TeamPlayer

!new Position('position57')
!position57.positionName := #FORWARD

!new Position('position59')
!position59.positionName := #GOALKEEPER

!insert (player23, position57) into PlayerPositions
!insert (player24, position59) into PlayerPositions

!new Competition('competition9')
!competition9.name := 'Desert Showdown Series'
!competition9.type := 'Tournament'

!new Match('match11')
!match11.date := '15/10/2023'
!match11.homeAway := true

!insert (teamU, match11) into LocalMatch
!insert (teamV, match11) into VisitorMatch
!insert (competition9, match11) into CompetitionMatch

!new MatchReport('matchReport11')
!matchReport11.duration := 60
!matchReport11.scoreVisitor := 0
!matchReport11.scoreLocal := 1

!insert (match11, matchReport11) into MatchMatchReport

!new MatchEvent('matchEvent33')
!matchEvent33.eventType := #GOAL
!matchEvent33.time := 25

!insert (match11, matchEvent33) into MatchMatchEvent

!new MatchPlayer('matchPlayer19')
!matchPlayer19.booked := false
!matchPlayer19.goals := 1
!matchPlayer19.rating := 9

!new MatchPlayer('matchPlayer20')
!matchPlayer20.booked := true
!matchPlayer20.goals := 0
!matchPlayer20.rating := 8

!insert (player23, matchPlayer19) into PlayerMatch
!insert (player24, matchPlayer20) into PlayerMatch

!insert (match11, matchPlayer19) into MatchMatchPlayer
!insert (match11, matchPlayer20) into MatchMatchPlayer

!new MatchPlayerPosition('position60')
!position60.positionName := #FORWARD
!position60.number := 10

!new MatchPlayerPosition('position61')
!position61.positionName := #GOALKEEPER
!position61.number := 1

!insert (matchPlayer19, position60) into MatchPlayerMatchPlayerPosition
!insert (matchPlayer20, position61) into MatchPlayerMatchPlayerPosition

!new TrainingSession('trainingSession17')
!trainingSession17.date := '13/10/2023'
!trainingSession17.location := 'Mirage Field'
!trainingSession17.purpose := 'Endurance and Heat Adaptation'

!insert (teamU, trainingSession17) into TeamTraining

!new TrainingSession('trainingSession18')
!trainingSession18.date := '14/10/2023'
!trainingSession18.location := 'Sand Dunes Arena'
!trainingSession18.purpose := 'Goalkeeping Precision in Sand Conditions'

!insert (teamV, trainingSession18) into TeamTraining

!new TrainingNotes('trainingNote17')
!trainingNote17.note := 'Players showed improvement in stamina but struggled with hydration.'
!trainingNote17.date := '13/10/2023'

!insert (trainingSession17, trainingNote17) into TrainingTrainingNotes

!new TrainingNotes('trainingNote18')
!trainingNote18.note := 'Rapid adjustment to shifting sands enhanced goalkeeping techniques.'
!trainingNote18.date := '14/10/2023'

!insert (trainingSession18, trainingNote18) into TrainingTrainingNotes

!new TrainingObjective('trainingObjective17')
!trainingObjective17.areaToImprove := 'Stamina in High Temperatures'
!trainingObjective17.startDate := '10/10/2023'
!trainingObjective17.endDate := '14/10/2023'
!trainingObjective17.success := true

!new TrainingObjective('trainingObjective18')
!trainingObjective18.areaToImprove := 'Agility in Desert Sands'
!trainingObjective18.startDate := '10/10/2023'
!trainingObjective18.endDate := '14/10/2023'
!trainingObjective18.success := true

!insert (trainingObjective17, player23) into TrainingObjectivePlayer
!insert (trainingObjective18, player24) into TrainingObjectivePlayer

!new PlayerNotes('playerNote9')
!playerNote9.note := 'Class-leading speed during close heat conditions.'
!playerNote9.date := '14/10/2023'

!insert (player23, playerNote9) into PlayerPlayerNotes

!new PlayerNotes('playerNote10')
!playerNote10.note := 'Outstanding reflexes, especially at dusk.'
!playerNote10.date := '13/10/2023'

!insert (player24, playerNote10) into PlayerPlayerNotes
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 108 | 0.00% |
| Multiplicities Errors | 0 | 25 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 11 | 0.00% |

## Category invalid
```
!new Club('clubY')
!clubY.name := 'Andes Rangers FC'
!clubY.homeGround := 'Summit Park, Medellín'
!clubY.chairman := 'Camilo Lopez'

!new Club('clubZ')
!clubZ.name := 'Pampas Comets FC'
!clubZ.homeGround := 'Cosmic Field, Buenos Aires'
!clubZ.chairman := 'Lucia Mendoza'

!new Team('teamY')
!teamY.name := 'Andes Junior Rangers'

!new Team('teamZ')
!teamZ.name := 'Pampas Starlets'

!insert (clubY, teamY) into ClubTeam
!insert (clubZ, teamZ) into ClubTeam

!new Player('player27')
!player27.name := 'Roberto Gomez'
!player27.age := 20
!player27.bestFoot := #LEFT
!player27.phoneNumber := '+57 312 345 9876'

!new Position('position66')
!position66.positionName := #DEFENDER

!new Position('position67')
!position67.positionName := #FORWARD

!insert (player27, position66) into PlayerPositions
!insert (player27, position67) into PlayerPositions

!new Player('player28')
!player28.name := 'Ana Villanueva'
!player28.age := 23
!player28.bestFoot := #RIGHT
!player28.phoneNumber := '+54 123 456 7890'

!new Position('position68')
!position68.positionName := #GOALKEEPER

!insert (player28, position68) into PlayerPositions

!new Player('player29')
!player29.name := 'Isabel Marquez'
!player29.age := 18
!player29.bestFoot := #BOTH
!player29.phoneNumber := '+57 321 654 0987'

!new Position('position69')
!position69.positionName := #MIDFIELDER

!insert (player29, position69) into PlayerPositions

!insert (teamY, player27) into TeamPlayer
!insert (teamZ, player28) into TeamPlayer
!insert (teamY, player29) into TeamPlayer

!new Match('match13')
!match13.date := '5th December 2023'
!match13.homeAway := false

!insert (teamY, match13) into VisitorMatch
!insert (teamZ, match13) into LocalMatch

!new Competition('competition11')
!competition11.name := 'Annual Summit Tournament'
!competition11.type := 'Tournament'

!insert (competition11, match13) into CompetitionMatch

!new MatchReport('matchReport13')
!matchReport13.duration := 120
!matchReport13.scoreVisitor := 1
!matchReport13.scoreLocal := 2

!insert (match13, matchReport13) into MatchMatchReport

!new MatchEvent('matchEvent37')
!matchEvent37.eventType := #FOUL
!matchEvent37.time := 43

!new MatchEvent('matchEvent38')
!matchEvent38.eventType := #GOAL
!matchEvent38.time := 77

!new MatchEvent('matchEvent39')
!matchEvent39.eventType := #GOAL
!matchEvent39.time := 115

!insert (match13, matchEvent37) into MatchMatchEvent
!insert (match13, matchEvent38) into MatchMatchEvent
!insert (match13, matchEvent39) into MatchMatchEvent

!new MatchNote('matchNote10')
!matchNote10.note := 'A high-altitude showdown with logistical errors overshadowing young talent exhibition, reflecting the need for refined competition criteria.'
!matchNote10.date := '6th December 2023'

!insert (match13, matchNote10) into MatchMatchNote

!new TrainingSession('trainingSession21')
!trainingSession21.date := '7th December 2023'
!trainingSession21.location := 'Summit Park Training Ground'
!trainingSession21.purpose := 'Recovery session focused on stamina improvement after extended match exertion.'

!insert (teamY, trainingSession21) into TeamTraining

!new TrainingNotes('trainingNote21')
!trainingNote21.note := 'Notably fewer absences compared to usual, suggesting improved player management post-event.'
!trainingNote21.date := '7th December 2023'

!insert (trainingSession21, trainingNote21) into TrainingTrainingNotes

!new MatchPlayer('matchPlayer23')
!matchPlayer23.booked := true
!matchPlayer23.goals := 1
!matchPlayer23.rating := 7

!new MatchPlayer('matchPlayer24')
!matchPlayer24.booked := false
!matchPlayer24.goals := 0
!matchPlayer24.rating := 8

!new MatchPlayer('matchPlayer25')
!matchPlayer25.booked := false
!matchPlayer25.goals := 1
!matchPlayer25.rating := 9

!insert (player27, matchPlayer23) into PlayerMatch
!insert (player28, matchPlayer24) into PlayerMatch
!insert (player29, matchPlayer25) into PlayerMatch

!insert (match13, matchPlayer23) into MatchMatchPlayer
!insert (match13, matchPlayer24) into MatchMatchPlayer
!insert (match13, matchPlayer25) into MatchMatchPlayer
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 7 | 25 | 28.00% |
| Invariants Errors (Not included on General) | 1 | 4 | 25.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `player28' of class `Player' is connected to 0 objects of class `TrainingObjective'
  at association end `trainingObjective' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `player27' of class `Player' is connected to 0 objects of class `TrainingObjective'
  at association end `trainingObjective' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `player29' of class `Player' is connected to 0 objects of class `TrainingObjective'
  at association end `trainingObjective' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `MatchPlayerMatchPlayerPosition':
  Object `matchPlayer24' of class `MatchPlayer' is connected to 0 objects of class `MatchPlayerPosition'
  at association end `matchPlayerPosition' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `MatchPlayerMatchPlayerPosition':
  Object `matchPlayer25' of class `MatchPlayer' is connected to 0 objects of class `MatchPlayerPosition'
  at association end `matchPlayerPosition' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `MatchPlayerMatchPlayerPosition':
  Object `matchPlayer23' of class `MatchPlayer' is connected to 0 objects of class `MatchPlayerPosition'
  at association end `matchPlayerPosition' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `TeamTraining':
  Object `teamZ' of class `Team' is connected to 0 objects of class `TrainingSession'
  at association end `trainingSession' but the multiplicity is specified as `1..*'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (4) `MatchReport::SumOfScoresEqualsGoals': FAILED.
```

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 4 | 4 | 100.00% |

| Failed dates | 
|---| 
```
5th December 2023
```
```
6th December 2023
```
```
7th December 2023
```
```
7th December 2023
```

## Generation 3 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 598 | 0.00% |
| Multiplicities Errors | 5 | 118 | 4.24% |
| Invariants Errors | 1 | 16 | 6.25% |

| Multiplicities Errors | 
|---| 
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `player32' of class `Player' is connected to 0 objects of class `TrainingObjective'
  at association end `trainingObjective' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `trainingObjective27' of class `TrainingObjective' is connected to 2 objects of class `Player'
  at association end `player' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `VisitorMatch':
  Object `match16' of class `Match' is connected to 0 objects of class `Team'
  at association end `visitor' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `VisitorMatch':
  Object `match17' of class `Match' is connected to 0 objects of class `Team'
  at association end `visitor' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `TeamTraining':
  Object `teamAG' of class `Team' is connected to 0 objects of class `TrainingSession'
  at association end `trainingSession' but the multiplicity is specified as `1..*'.
```

| Invariants Errors | 
|---| 
```
checking invariant (4) `MatchReport::SumOfScoresEqualsGoals': FAILED.
```

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 7 | 25 | 28.00% |
| Invariants Errors (Not included on General) | 1 | 4 | 25.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `player28' of class `Player' is connected to 0 objects of class `TrainingObjective'
  at association end `trainingObjective' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `player27' of class `Player' is connected to 0 objects of class `TrainingObjective'
  at association end `trainingObjective' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `player29' of class `Player' is connected to 0 objects of class `TrainingObjective'
  at association end `trainingObjective' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `MatchPlayerMatchPlayerPosition':
  Object `matchPlayer24' of class `MatchPlayer' is connected to 0 objects of class `MatchPlayerPosition'
  at association end `matchPlayerPosition' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `MatchPlayerMatchPlayerPosition':
  Object `matchPlayer25' of class `MatchPlayer' is connected to 0 objects of class `MatchPlayerPosition'
  at association end `matchPlayerPosition' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `MatchPlayerMatchPlayerPosition':
  Object `matchPlayer23' of class `MatchPlayer' is connected to 0 objects of class `MatchPlayerPosition'
  at association end `matchPlayerPosition' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `TeamTraining':
  Object `teamZ' of class `Team' is connected to 0 objects of class `TrainingSession'
  at association end `trainingSession' but the multiplicity is specified as `1..*'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (4) `MatchReport::SumOfScoresEqualsGoals': FAILED.
```

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 4 | 47 | 8.51% |

| Failed dates | 
|---| 
```
5th December 2023
```
```
6th December 2023
```
```
7th December 2023
```
```
7th December 2023
```

# Generation 4
## Category baseline
```
!new Club('clubAH')
!clubAH.name := 'Sydney Sharks'
!clubAH.homeGround := "Sharks' Bay Stadium"
!clubAH.chairman := 'Bruce Miller'

!new Club('clubAI')
!clubAI.name := 'Cape Town Rangers'
!clubAI.homeGround := 'Rangers Arena'
!clubAI.chairman := 'Thabo Mbeki'

!new Team('teamAH')
!teamAH.name := 'Sydney Sharks Main Squad'

!new Team('teamAI')
!teamAI.name := 'Cape Town Rangers First XI'

!insert (clubAH, teamAH) into ClubTeam
!insert (clubAI, teamAI) into ClubTeam

!new Competition('competition15')
!competition15.name := 'Continental Challenge Cup'
!competition15.type := 'Regional League'

!new TrainingSession('trainingSession29')
!trainingSession29.date := '2023-10-05'
!trainingSession29.location := 'Sharks Training Field'
!trainingSession29.purpose := 'Tactical Awareness and Execution'

!new TrainingSession('trainingSession30')
!trainingSession30.date := '2023-10-07'
!trainingSession30.location := 'Rangers Practice Grounds'
!trainingSession30.purpose := 'Fitness and Conditioning'

!insert (teamAH, trainingSession29) into TeamTraining
!insert (teamAI, trainingSession30) into TeamTraining

!new TrainingNotes('trainingNote29')
!trainingNote29.note := 'Emphasized zonal marking and counter-attacks.'
!trainingNote29.date := '2023-10-05'

!new TrainingNotes('trainingNote30')
!trainingNote30.note := 'Focus on increasing players\' stamina via endurance runs.'
!trainingNote30.date := '2023-10-07'

!insert (trainingSession29, trainingNote29) into TrainingTrainingNotes
!insert (trainingSession30, trainingNote30) into TrainingTrainingNotes

!new TrainingFailedToAttend('trainingFail11')
!trainingFail11.reason := 'Medical Appointment'

!new Player('player38')
!player38.name := 'Liam Johnson'
!player38.age := 26
!player38.bestFoot := #RIGHT
!player38.phoneNumber := '+61-2-12345678'

!new Player('player39')
!player39.name := 'Nkosi Dlamini'
!player39.age := 22
!player39.bestFoot := #LEFT
!player39.phoneNumber := '+27-21-5678901'

!insert (teamAH, player38) into TeamPlayer
!insert (teamAI, player39) into TeamPlayer

!insert (trainingSession29, trainingFail11) into TrainingFailded
!insert (trainingFail11, player38) into FailedPlayer

!new Match('match18')
!match18.date := '2023-11-12'
!match18.homeAway := true

!insert (teamAH, match18) into LocalMatch
!insert (teamAI, match18) into VisitorMatch
!insert (competition15, match18) into CompetitionMatch

!new MatchReport('matchReport18')
!matchReport18.duration := 90
!matchReport18.scoreVisitor := 2
!matchReport18.scoreLocal := 1

!insert (match18, matchReport18) into MatchMatchReport

!new MatchEvent('matchEvent49')
!matchEvent49.eventType := #GOAL
!matchEvent49.time := 22

!new MatchEvent('matchEvent50')
!matchEvent50.eventType := #PENALTY
!matchEvent50.time := 58

!new MatchEvent('matchEvent51')
!matchEvent51.eventType := #GOAL
!matchEvent51.time := 67

!insert (match18, matchEvent49) into MatchMatchEvent
!insert (match18, matchEvent50) into MatchMatchEvent
!insert (match18, matchEvent51) into MatchMatchEvent

!new MatchNote('matchNote12')
!matchNote12.note := 'Cape Town Rangers showed resilience and composure under pressure.'
!matchNote12.date := '2023-11-12'

!insert (match18, matchNote12) into MatchMatchNote

!new PlayerNotes('playerNote15')
!playerNote15.note := 'Excellent at orchestrating attacks from midfield.'
!playerNote15.date := '2023-08-05'

!insert (player38, playerNote15) into PlayerPlayerNotes

!new TrainingObjective('trainingObjective28')
!trainingObjective28.areaToImprove := 'Speed and Agility'
!trainingObjective28.startDate := '2023-09-01'
!trainingObjective28.endDate := '2023-11-01'
!trainingObjective28.success := true

!new TrainingObjective('trainingObjective29')
!trainingObjective29.areaToImprove := 'Tactical Awareness'
!trainingObjective29.startDate := '2023-09-01'
!trainingObjective29.endDate := '2023-11-01'
!trainingObjective29.success := true

!insert (trainingObjective28, player39) into TrainingObjectivePlayer
!insert (trainingObjective29, player38) into TrainingObjectivePlayer

!new MatchPlayer('matchPlayer33')
!matchPlayer33.booked := false
!matchPlayer33.goals := 0
!matchPlayer33.rating := 7

!new MatchPlayer('matchPlayer34')
!matchPlayer34.booked := true
!matchPlayer34.goals := 1
!matchPlayer34.rating := 9

!insert (player38, matchPlayer33) into PlayerMatch
!insert (player39, matchPlayer34) into PlayerMatch

!insert (match18, matchPlayer33) into MatchMatchPlayer
!insert (match18, matchPlayer34) into MatchMatchPlayer

!new MatchPlayerPosition('position88')
!position88.positionName := #MIDFIELDER
!position88.number := 6

!new MatchPlayerPosition('position89')
!position89.positionName := #FORWARD
!position89.number := 7

!insert (matchPlayer33, position88) into MatchPlayerMatchPlayerPosition
!insert (matchPlayer34, position89) into MatchPlayerMatchPlayerPosition

!new Position('position90')
!position90.positionName := #MIDFIELDER

!new Position('position91')
!position91.positionName := #FORWARD

!insert (player38, position90) into PlayerPositions
!insert (player39, position91) into PlayerPositions
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 120 | 0.00% |
| Multiplicities Errors | 0 | 29 | 0.00% |
| Invariants Errors | 1 | 4 | 25.00% |

| Invariants Errors | 
|---| 
```
checking invariant (4) `MatchReport::SumOfScoresEqualsGoals': FAILED.
```

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 11 | 0.00% |

## Category boundary
```
!new Club('clubAL')
!clubAL.name := 'Urban Rhinos FC'
!clubAL.homeGround := 'Metropolitan Dome'
!clubAL.chairman := 'Clara Torres'

!new Club('clubAM')
!clubAM.name := 'Desert Falcons'
!clubAM.homeGround := 'Arid Plains Arena'
!clubAM.chairman := 'Zubair Rashid'

!new Team('teamAL')
!teamAL.name := 'City Slickers'

!new Team('teamAM')
!teamAM.name := 'Oasis Strikers'

!insert (clubAL, teamAL) into ClubTeam
!insert (clubAM, teamAM) into ClubTeam

!new Player('player42')
!player42.name := 'Julian Vargas'
!player42.age := 26
!player42.bestFoot := #BOTH
!player42.phoneNumber := '+441234567890'

!new Player('player43')
!player43.name := 'Aisha Nasir'
!player43.age := 21
!player43.bestFoot := #LEFT
!player43.phoneNumber := '+971567890123'

!insert (teamAL, player42) into TeamPlayer
!insert (teamAM, player43) into TeamPlayer

!new Position('position97')
!position97.positionName := #DEFENDER

!new Position('position94')
!position94.positionName := #GOALKEEPER

!insert (player42, position97) into PlayerPositions
!insert (player43, position94) into PlayerPositions

!new TrainingSession('trainingSession33')
!trainingSession33.date := '2023-09-20'
!trainingSession33.location := 'Downtown Sports Complex'
!trainingSession33.purpose := 'Strategy Planning and Analysis'

!new TrainingSession('trainingSession34')
!trainingSession34.date := '2023-09-21'
!trainingSession34.location := 'Arid Plains Arena'
!trainingSession34.purpose := 'Extreme Weather Adaptation'

!insert (teamAL, trainingSession33) into TeamTraining
!insert (teamAM, trainingSession34) into TeamTraining

!new TrainingNotes('trainingNote33')
!trainingNote33.note := 'Emphasis on defensive formations and counter-attacks.'
!trainingNote33.date := '2023-09-20'

!new TrainingNotes('trainingNote34')
!trainingNote34.note := 'Adaptation to high temperatures and tactical drills.'
!trainingNote34.date := '2023-09-21'

!insert (trainingSession33, trainingNote33) into TrainingTrainingNotes
!insert (trainingSession34, trainingNote34) into TrainingTrainingNotes

!new Competition('competition17')
!competition17.name := 'Global City Cup'
!competition17.type := 'League'

!new Match('match20')
!match20.date := '2023-09-25'
!match20.homeAway := false

!insert (teamAL, match20) into LocalMatch
!insert (teamAM, match20) into VisitorMatch
!insert (competition17, match20) into CompetitionMatch

!new MatchEvent('matchEvent55')
!matchEvent55.eventType := #GOAL
!matchEvent55.time := 23

!new MatchEvent('matchEvent56')
!matchEvent56.eventType := #GOAL
!matchEvent56.time := 45

!new MatchEvent('matchEvent57')
!matchEvent57.eventType := #GOAL
!matchEvent57.time := 67

!new MatchEvent('matchEvent58')
!matchEvent58.eventType := #FOUL
!matchEvent58.time := 58

!insert (match20, matchEvent55) into MatchMatchEvent
!insert (match20, matchEvent56) into MatchMatchEvent
!insert (match20, matchEvent57) into MatchMatchEvent
!insert (match20, matchEvent58) into MatchMatchEvent

!new MatchReport('matchReport20')
!matchReport20.duration := 90
!matchReport20.scoreVisitor := 0
!matchReport20.scoreLocal := 3

!insert (match20, matchReport20) into MatchMatchReport

!new MatchNote('matchNote13')
!matchNote13.note := 'City Slickers maintained strong midfield control throughout the game.'
!matchNote13.date := '2023-09-25'

!insert (match20, matchNote13) into MatchMatchNote

!new Match('match21')
!match21.date := '2023-10-15'
!match21.homeAway := true

!insert (teamAM, match21) into LocalMatch
!insert (teamAL, match21) into VisitorMatch
!insert (competition17, match21) into CompetitionMatch

!new MatchEvent('matchEvent59')
!matchEvent59.eventType := #GOAL
!matchEvent59.time := 77

!insert (match21, matchEvent59) into MatchMatchEvent

!new MatchReport('matchReport21')
!matchReport21.duration := 90
!matchReport21.scoreVisitor := 1
!matchReport21.scoreLocal := 0

!insert (match21, matchReport21) into MatchMatchReport

!new MatchNote('matchNote14')
!matchNote14.note := 'Oasis Strikers\' defense suffered due to unexpected heatwaves.'
!matchNote14.date := '2023-10-15'

!insert (match21, matchNote14) into MatchMatchNote

!new PlayerNotes('playerNote18')
!playerNote18.note := 'Needs to work on aerial duels.'
!playerNote18.date := '2023-07-01'

!insert (player42, playerNote18) into PlayerPlayerNotes

!new MatchPlayer('matchPlayer37')
!matchPlayer37.booked := true
!matchPlayer37.goals := 0
!matchPlayer37.rating := 7

!new MatchPlayer('matchPlayer38')
!matchPlayer38.booked := false
!matchPlayer38.goals := 0
!matchPlayer38.rating := 9

!insert (player42, matchPlayer37) into PlayerMatch
!insert (player43, matchPlayer38) into PlayerMatch

!insert (match20, matchPlayer37) into MatchMatchPlayer
!insert (match21, matchPlayer38) into MatchMatchPlayer

!new MatchPlayerPosition('position98')
!position98.positionName := #DEFENDER
!position98.number := 4

!new MatchPlayerPosition('position99')
!position99.positionName := #GOALKEEPER
!position99.number := 1

!insert (matchPlayer37, position98) into MatchPlayerMatchPlayerPosition
!insert (matchPlayer38, position99) into MatchPlayerMatchPlayerPosition

!new TrainingObjective('trainingObjective32')
!trainingObjective32.areaToImprove := 'Improve Defensive Coordination'
!trainingObjective32.startDate := '2023-08-01'
!trainingObjective32.endDate := '2023-09-01'
!trainingObjective32.success := true

!new TrainingObjective('trainingObjective33')
!trainingObjective33.areaToImprove := 'Enhance Goalkeeping Skills'
!trainingObjective33.startDate := '2023-08-01'
!trainingObjective33.endDate := '2023-09-01'
!trainingObjective33.success := true

!insert (trainingObjective32, player42) into TrainingObjectivePlayer
!insert (trainingObjective33, player43) into TrainingObjectivePlayer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 139 | 0.00% |
| Multiplicities Errors | 0 | 34 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 13 | 0.00% |

## Category complex
```
!new Club('clubAP')
!clubAP.name := 'Sydney Suns FC'
!clubAP.homeGround := 'Allianz Stadium'
!clubAP.chairman := 'Emma Wright'

!new Club('clubAQ')
!clubAQ.name := 'Berlin Bears'
!clubAQ.homeGround := 'Olympiastadion Berlin'
!clubAQ.chairman := 'Friedrich Müller'

!new Team('teamAP')
!teamAP.name := 'Sydney Suns Youth Team'

!new Team('teamAQ')
!teamAQ.name := 'Berlin Bears Junior Squad'

!insert (clubAP, teamAP) into ClubTeam
!insert (clubAQ, teamAQ) into ClubTeam

!new Player('player47')
!player47.name := 'Liam Thompson'
!player47.age := 19
!player47.bestFoot := #LEFT
!player47.phoneNumber := '+61400123456'

!new Player('player48')
!player48.name := 'Jonas Schneider'
!player48.age := 18
!player48.bestFoot := #RIGHT
!player48.phoneNumber := '+49301234567'

!new Player('player49')
!player49.name := 'Felix Müller'
!player49.age := 20
!player49.bestFoot := #RIGHT
!player49.phoneNumber := '+491512345678'

!insert (teamAP, player47) into TeamPlayer
!insert (teamAQ, player48) into TeamPlayer
!insert (teamAQ, player49) into TeamPlayer

!new Position('position101')
!position101.positionName := #MIDFIELDER

!new Position('position102')
!position102.positionName := #GOALKEEPER

!new Position('position103')
!position103.positionName := #FORWARD

!insert (player47, position103) into PlayerPositions
!insert (player48, position102) into PlayerPositions
!insert (player49, position101) into PlayerPositions

!new Competition('competition18')
!competition18.name := 'Youth Global Championship'
!competition18.type := 'Tournament'

!new Match('match23')
!match23.date := '12-09-2023'
!match23.homeAway := true

!new Match('match24')
!match24.date := '20-09-2023'
!match24.homeAway := false

!insert (teamAP, match23) into LocalMatch
!insert (teamAQ, match23) into VisitorMatch
!insert (competition18, match23) into CompetitionMatch

!insert (teamAQ, match24) into LocalMatch
!insert (teamAP, match24) into VisitorMatch
!insert (competition18, match24) into CompetitionMatch

!new MatchReport('matchReport23')
!matchReport23.duration := 90
!matchReport23.scoreVisitor := 0
!matchReport23.scoreLocal := 3

!new MatchReport('matchReport24')
!matchReport24.duration := 90
!matchReport24.scoreVisitor := 3
!matchReport24.scoreLocal := 2

!insert (match23, matchReport23) into MatchMatchReport
!insert (match24, matchReport24) into MatchMatchReport

!new MatchPlayer('matchPlayer42')
!matchPlayer42.booked := true
!matchPlayer42.goals := 1
!matchPlayer42.rating := 8

!new MatchPlayer('matchPlayer43')
!matchPlayer43.booked := false
!matchPlayer43.goals := 0
!matchPlayer43.rating := 6

!new MatchPlayer('matchPlayer44')
!matchPlayer44.booked := true
!matchPlayer44.goals := 1
!matchPlayer44.rating := 9

!insert (player47, matchPlayer42) into PlayerMatch
!insert (player48, matchPlayer43) into PlayerMatch
!insert (player49, matchPlayer44) into PlayerMatch

!insert (match23, matchPlayer42) into MatchMatchPlayer
!insert (match23, matchPlayer43) into MatchMatchPlayer
!insert (match24, matchPlayer44) into MatchMatchPlayer

!new MatchPlayerPosition('mpp42')
!mpp42.positionName := #FORWARD
!mpp42.number := 11

!new MatchPlayerPosition('mpp43')
!mpp43.positionName := #GOALKEEPER
!mpp43.number := 1

!new MatchPlayerPosition('mpp44')
!mpp44.positionName := #MIDFIELDER
!mpp44.number := 8

!insert (matchPlayer42, mpp42) into MatchPlayerMatchPlayerPosition
!insert (matchPlayer43, mpp43) into MatchPlayerMatchPlayerPosition
!insert (matchPlayer44, mpp44) into MatchPlayerMatchPlayerPosition

!new MatchEvent('matchEvent62')
!matchEvent62.eventType := #GOAL
!matchEvent62.time := 14

!new MatchEvent('matchEvent63')
!matchEvent63.eventType := #FOUL
!matchEvent63.time := 74

!new MatchEvent('matchEvent64')
!matchEvent64.eventType := #FOUL
!matchEvent64.time := 55

!new MatchEvent('matchEvent65')
!matchEvent65.eventType := #GOAL
!matchEvent65.time := 48

!new MatchEvent('matchEvent66')
!matchEvent66.eventType := #GOAL
!matchEvent66.time := 20

!new MatchEvent('matchEvent67')
!matchEvent67.eventType := #GOAL
!matchEvent67.time := 65

!insert (match23, matchEvent62) into MatchMatchEvent
!insert (match23, matchEvent66) into MatchMatchEvent
!insert (match23, matchEvent65) into MatchMatchEvent
!insert (match24, matchEvent63) into MatchMatchEvent
!insert (match24, matchEvent64) into MatchMatchEvent
!insert (match24, matchEvent67) into MatchMatchEvent

!new TrainingSession('trainingSession36')
!trainingSession36.date := '05-09-2023'
!trainingSession36.location := 'Allianz Stadium Practice Field'
!trainingSession36.purpose := 'Acclimatization drills to acclimate youth players to tournament settings.'

!new TrainingSession('trainingSession37')
!trainingSession37.date := '04-09-2023'
!trainingSession37.location := 'Olympiastadion Berlin Practice Grounds'
!trainingSession37.purpose := 'Enhanced goalkeeping reflexes under pressure.'

!insert (teamAP, trainingSession36) into TeamTraining
!insert (teamAQ, trainingSession37) into TeamTraining

!new TrainingNotes('trainingNote36')
!trainingNote36.note := 'Players adapted well to high-pressure situations showing enhanced focus.'
!trainingNote36.date := '05-09-2023'

!new TrainingNotes('trainingNote37')
!trainingNote37.note := 'Goalkeepers demonstrated improved reflexes during situational drills.'
!trainingNote37.date := '04-09-2023'

!insert (trainingSession36, trainingNote36) into TrainingTrainingNotes
!insert (trainingSession37, trainingNote37) into TrainingTrainingNotes

!new TrainingObjective('trainingObjective34')
!trainingObjective34.areaToImprove := 'Mental Resilience'
!trainingObjective34.startDate := '01-09-2023'
!trainingObjective34.endDate := '10-09-2023'
!trainingObjective34.success := true

!new TrainingObjective('trainingObjective35')
!trainingObjective35.areaToImprove := 'Goalkeeping Reflexes'
!trainingObjective35.startDate := '01-09-2023'
!trainingObjective35.endDate := '10-09-2023'
!trainingObjective35.success := true

!insert (trainingObjective34, player47) into TrainingObjectivePlayer
!insert (trainingObjective35, player48) into TrainingObjectivePlayer

!new TrainingObjective('trainingObjective36')
!trainingObjective36.areaToImprove := 'Attacking Strategies'
!trainingObjective36.startDate := '01-09-2023'
!trainingObjective36.endDate := '10-09-2023'
!trainingObjective36.success := true

!insert (trainingObjective36, player49) into TrainingObjectivePlayer

!new TrainingFailedToAttend('trainingFail14')
!trainingFail14.reason := 'Medical Check-up'

!insert (trainingFail14, player49) into FailedPlayer
!insert (trainingSession36, trainingFail14) into TrainingFailded
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 160 | 0.00% |
| Multiplicities Errors | 0 | 40 | 0.00% |
| Invariants Errors | 1 | 4 | 25.00% |

| Invariants Errors | 
|---| 
```
checking invariant (4) `MatchReport::SumOfScoresEqualsGoals': FAILED.
```

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 12 | 0.00% |

## Category edge
```
!new Club('clubAC')
!clubAC.name := 'Skyline Strikers FC'
!clubAC.homeGround := 'Skyline Roof Stadium'
!clubAC.chairman := 'Mr. Arjun Patel'

!new Club('clubAD')
!clubAD.name := 'Tower Titans'
!clubAD.homeGround := 'Heights Hub Arena'
!clubAD.chairman := 'Ms. Sophie Laurent'

!new Team('teamAC')
!teamAC.name := 'Sky High Flyers'

!new Team('teamAD')
!teamAD.name := 'Altitude Athletes'

!insert (clubAC, teamAC) into ClubTeam
!insert (clubAD, teamAD) into ClubTeam

!new Player('player33')
!player33.name := 'Gale Gust'
!player33.age := 25
!player33.bestFoot := #LEFT
!player33.phoneNumber := '+4876543210'

!new Player('player34')
!player34.name := 'Cloud Dodger'
!player34.age := 27
!player34.bestFoot := #RIGHT
!player34.phoneNumber := '+9876543210'

!insert (teamAC, player33) into TeamPlayer
!insert (teamAD, player34) into TeamPlayer

!new Position('position77')
!position77.positionName := #MIDFIELDER

!new Position('position78')
!position78.positionName := #DEFENDER

!new Position('position83')
!position83.positionName := #FORWARD

!insert (player33, position77) into PlayerPositions
!insert (player33, position78) into PlayerPositions
!insert (player34, position83) into PlayerPositions

!new Competition('competition13')
!competition13.name := 'Urban Sky Series'
!competition13.type := 'League'

!new Match('match15')
!match15.date := '05/11/2023'
!match15.homeAway := true

!insert (teamAC, match15) into LocalMatch
!insert (teamAD, match15) into VisitorMatch
!insert (competition13, match15) into CompetitionMatch

!new MatchReport('matchReport15')
!matchReport15.duration := 75
!matchReport15.scoreVisitor := 1
!matchReport15.scoreLocal := 2

!insert (match15, matchReport15) into MatchMatchReport

!new MatchEvent('matchEvent42')
!matchEvent42.eventType := #GOAL
!matchEvent42.time := 20

!new MatchEvent('matchEvent43')
!matchEvent43.eventType := #GOAL
!matchEvent43.time := 50

!new MatchEvent('matchEvent44')
!matchEvent44.eventType := #GOAL
!matchEvent44.time := 70

!insert (match15, matchEvent42) into MatchMatchEvent
!insert (match15, matchEvent43) into MatchMatchEvent
!insert (match15, matchEvent44) into MatchMatchEvent

!new MatchPlayer('matchPlayer28')
!matchPlayer28.booked := true
!matchPlayer28.goals := 1
!matchPlayer28.rating := 9

!new MatchPlayer('matchPlayer29')
!matchPlayer29.booked := false
!matchPlayer29.goals := 1
!matchPlayer29.rating := 7

!insert (player33, matchPlayer28) into PlayerMatch
!insert (player34, matchPlayer29) into PlayerMatch

!insert (match15, matchPlayer28) into MatchMatchPlayer
!insert (match15, matchPlayer29) into MatchMatchPlayer

!new MatchPlayerPosition('position81')
!position81.positionName := #MIDFIELDER
!position81.number := 8

!new MatchPlayerPosition('position82')
!position82.positionName := #FORWARD
!position82.number := 11

!insert (matchPlayer28, position81) into MatchPlayerMatchPlayerPosition
!insert (matchPlayer29, position82) into MatchPlayerMatchPlayerPosition

!new TrainingSession('trainingSession24')
!trainingSession24.date := '03/11/2023'
!trainingSession24.location := 'Heights Hub Arena'
!trainingSession24.purpose := 'Handling Limited Space and High Winds'

!insert (teamAD, trainingSession24) into TeamTraining

!new TrainingSession('trainingSession25')
!trainingSession25.date := '02/11/2023'
!trainingSession25.location := 'Skyline Roof Stadium'
!trainingSession25.purpose := 'Ball Control in Tight Spaces'

!insert (teamAC, trainingSession25) into TeamTraining

!new TrainingNotes('trainingNote24')
!trainingNote24.note := 'Players improved in handling ball control amidst cross winds.'
!trainingNote24.date := '03/11/2023'

!insert (trainingSession24, trainingNote24) into TrainingTrainingNotes

!new TrainingNotes('trainingNote25')
!trainingNote25.note := 'Effective drills for maintaining possession under pressure.'
!trainingNote25.date := '02/11/2023'

!insert (trainingSession25, trainingNote25) into TrainingTrainingNotes

!new TrainingFailedToAttend('trainingFail10')
!trainingFail10.reason := 'Family emergency'

!insert (trainingFail10, player33) into FailedPlayer
!insert (trainingSession24, trainingFail10) into TrainingFailded

!new TrainingObjective('trainingObjective23')
!trainingObjective23.areaToImprove := 'Tactical Passing in Squeezed Spaces'
!trainingObjective23.startDate := '01/11/2023'
!trainingObjective23.endDate := '04/11/2023'
!trainingObjective23.success := false

!new TrainingObjective('trainingObjective24')
!trainingObjective24.areaToImprove := 'Endurance in Urban Conditions'
!trainingObjective24.startDate := '01/11/2023'
!trainingObjective24.endDate := '04/11/2023'
!trainingObjective24.success := true

!insert (trainingObjective23, player34) into TrainingObjectivePlayer
!insert (trainingObjective24, player33) into TrainingObjectivePlayer

!new PlayerNotes('playerNote13')
!playerNote13.note := 'Strong awareness in spatially restricted games.'
!playerNote13.date := '04/11/2023'

!insert (player33, playerNote13) into PlayerPlayerNotes

!new PlayerNotes('playerNote14')
!playerNote14.note := 'Exceptional at leveraging open sky tactics.'
!playerNote14.date := '02/11/2023'

!insert (player34, playerNote14) into PlayerPlayerNotes
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 123 | 0.00% |
| Multiplicities Errors | 0 | 30 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 11 | 0.00% |

## Category invalid
```
!new Club('clubAN')
!clubAN.name := 'Alpine Eagles FC'
!clubAN.homeGround := "Eagle's Nest Stadium, Innsbruck"
!clubAN.chairman := 'Klaus Schneider'

!new Club('clubAO')
!clubAO.name := 'Danube Drifters FC'
!clubAO.homeGround := 'Drifters Arena, Vienna'
!clubAO.chairman := 'Petra Novak'

!new Team('teamAN')
!teamAN.name := 'Alpine Eagles Reserves'

!new Team('teamAO')
!teamAO.name := 'Danube Youth'

!insert (clubAN, teamAN) into ClubTeam
!insert (clubAO, teamAO) into ClubTeam

!new Player('player44')
!player44.name := 'Lukas Bauer'
!player44.age := 21
!player44.bestFoot := #LEFT
!player44.phoneNumber := '+43 650 123 4567'

!new Player('player45')
!player45.name := 'Viktoria Klein'
!player45.age := 22
!player45.bestFoot := #RIGHT
!player45.phoneNumber := '+43 660 876 5432'

!new Player('player46')
!player46.name := 'Martin Weber'
!player46.age := 19
!player46.bestFoot := #BOTH
!player46.phoneNumber := '+43 670 321 9876'

!insert (teamAN, player44) into TeamPlayer
!insert (teamAO, player45) into TeamPlayer
!insert (teamAN, player46) into TeamPlayer

!new Position('position100')
!position100.positionName := #MIDFIELDER

!new Position('position97')
!position97.positionName := #DEFENDER

!new Position('position94')
!position94.positionName := #GOALKEEPER

!new Position('position83')
!position83.positionName := #FORWARD

!insert (player44, position100) into PlayerPositions
!insert (player44, position97) into PlayerPositions
!insert (player45, position83) into PlayerPositions
!insert (player46, position97) into PlayerPositions
!insert (player46, position100) into PlayerPositions
!insert (player46, position94) into PlayerPositions

!new Match('match22')
!match22.date := '15th January 2024'
!match22.homeAway := true

!insert (teamAN, match22) into LocalMatch
!insert (teamAO, match22) into VisitorMatch

!new MatchReport('matchReport22')
!matchReport22.duration := 90
!matchReport22.scoreVisitor := 0
!matchReport22.scoreLocal := 1

!insert (match22, matchReport22) into MatchMatchReport

!new MatchEvent('matchEvent60')
!matchEvent60.eventType := #GOAL
!matchEvent60.time := 50

!new MatchEvent('matchEvent61')
!matchEvent61.eventType := #FOUL
!matchEvent61.time := 60

!insert (match22, matchEvent60) into MatchMatchEvent
!insert (match22, matchEvent61) into MatchMatchEvent

!new MatchPlayer('matchPlayer39')
!matchPlayer39.booked := false
!matchPlayer39.goals := 0
!matchPlayer39.rating := 7

!new MatchPlayer('matchPlayer40')
!matchPlayer40.booked := false
!matchPlayer40.goals := 0
!matchPlayer40.rating := 8

!new MatchPlayer('matchPlayer41')
!matchPlayer41.booked := true
!matchPlayer41.goals := 1
!matchPlayer41.rating := 9

!insert (player44, matchPlayer39) into PlayerMatch
!insert (player45, matchPlayer40) into PlayerMatch
!insert (player46, matchPlayer41) into PlayerMatch

!insert (match22, matchPlayer39) into MatchMatchPlayer
!insert (match22, matchPlayer40) into MatchMatchPlayer
!insert (match22, matchPlayer41) into MatchMatchPlayer

!new MatchPlayerPosition('position98')
!position98.positionName := #MIDFIELDER
!position98.number := 12

!new MatchPlayerPosition('position86')
!position86.positionName := #FORWARD
!position86.number := 9

!new MatchPlayerPosition('position99')
!position99.positionName := #DEFENDER
!position99.number := 2

!insert (matchPlayer39, position98) into MatchPlayerMatchPlayerPosition
!insert (matchPlayer40, position86) into MatchPlayerMatchPlayerPosition
!insert (matchPlayer41, position99) into MatchPlayerMatchPlayerPosition

!new MatchNote('matchNote15')
!matchNote15.note := 'Despite adverse weather conditions, strategic use of player versatility turned the tide in favor of the Eagles.'
!matchNote15.date := '16th January 2024'

!insert (match22, matchNote15) into MatchMatchNote

!new TrainingSession('trainingSession35')
!trainingSession35.date := '17th January 2024'
!trainingSession35.location := "Eagle's Nest Training Facility"
!trainingSession35.purpose := 'Tactical refinement focusing on adaptive strategies and positional fluidity.'

!insert (teamAN, trainingSession35) into TeamTraining

!new TrainingNotes('trainingNote35')
!trainingNote35.note := 'Training was disrupted due to Martin Weber\'s absence, with absence citing unexpected travel delays due to snow.'
!trainingNote35.date := '17th January 2024'

!insert (trainingSession35, trainingNote35) into TrainingTrainingNotes

!new TrainingFailedToAttend('trainingFail13')
!trainingFail13.reason := 'Weather-induced travel disruptions led to unexplained absenteeism.'

!insert (trainingFail13, player46) into FailedPlayer
!insert (trainingSession35, trainingFail13) into TrainingFailded

!new PlayerNotes('playerNote19')
!playerNote19.note := 'Admired for adaptability in varied positions during the match, improvement needed in managing over-committed schedules.'
!playerNote19.date := '18th January 2024'

!insert (player46, playerNote19) into PlayerPlayerNotes
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 7 | 31 | 22.58% |
| Invariants Errors (Not included on General) | 0 | 4 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `player46' of class `Player' is connected to 0 objects of class `TrainingObjective'
  at association end `trainingObjective' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `player45' of class `Player' is connected to 0 objects of class `TrainingObjective'
  at association end `trainingObjective' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `player44' of class `Player' is connected to 0 objects of class `TrainingObjective'
  at association end `trainingObjective' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `PlayerPositions':
  Object `position100' of class `Position' is connected to 2 objects of class `Player'
  at association end `player' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `PlayerPositions':
  Object `position97' of class `Position' is connected to 2 objects of class `Player'
  at association end `player' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `TeamTraining':
  Object `teamAO' of class `Team' is connected to 0 objects of class `TrainingSession'
  at association end `trainingSession' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `CompetitionMatch':
  Object `match22' of class `Match' is connected to 0 objects of class `Competition'
  at association end `competition' but the multiplicity is specified as `1'.
```

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 5 | 5 | 100.00% |

| Failed dates | 
|---| 
```
15th January 2024
```
```
16th January 2024
```
```
17th January 2024
```
```
17th January 2024
```
```
18th January 2024
```

## Generation 4 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 1 | 657 | 0.15% |
| Multiplicities Errors | 0 | 133 | 0.00% |
| Invariants Errors | 2 | 16 | 12.50% |

| Syntax Errors | 
|---| 
```
<input>:line 1:6 mismatched input '.' expecting :=
```

| Invariants Errors | 
|---| 
```
checking invariant (4) `MatchReport::SumOfScoresEqualsGoals': FAILED.
```
```
checking invariant (4) `MatchReport::SumOfScoresEqualsGoals': FAILED.
```

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 7 | 31 | 22.58% |
| Invariants Errors (Not included on General) | 0 | 4 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `player46' of class `Player' is connected to 0 objects of class `TrainingObjective'
  at association end `trainingObjective' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `player45' of class `Player' is connected to 0 objects of class `TrainingObjective'
  at association end `trainingObjective' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `player44' of class `Player' is connected to 0 objects of class `TrainingObjective'
  at association end `trainingObjective' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `PlayerPositions':
  Object `position100' of class `Position' is connected to 2 objects of class `Player'
  at association end `player' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `PlayerPositions':
  Object `position97' of class `Position' is connected to 2 objects of class `Player'
  at association end `player' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `TeamTraining':
  Object `teamAO' of class `Team' is connected to 0 objects of class `TrainingSession'
  at association end `trainingSession' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `CompetitionMatch':
  Object `match22' of class `Match' is connected to 0 objects of class `Competition'
  at association end `competition' but the multiplicity is specified as `1'.
```

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 5 | 52 | 9.62% |

| Failed dates | 
|---| 
```
15th January 2024
```
```
16th January 2024
```
```
17th January 2024
```
```
17th January 2024
```
```
18th January 2024
```

# Generation 5
## Category baseline
```
!new Club('clubAT')
!clubAT.name := 'Milan Masters'
!clubAT.homeGround := 'San Siro'
!clubAT.chairman := 'Antonio Bianchi'

!new Club('clubAU')
!clubAU.name := 'New York Knights'
!clubAU.homeGround := 'Liberty Stadium'
!clubAU.chairman := 'Jessica Carter'

!new Team('teamAT')
!teamAT.name := 'Milan Masters Legends'

!new Team('teamAU')
!teamAU.name := 'New York Knights Elite'

!insert (clubAT, teamAT) into ClubTeam
!insert (clubAU, teamAU) into ClubTeam

!new Player('player52')
!player52.name := 'Marco Bellini'
!player52.age := 29
!player52.bestFoot := #RIGHT
!player52.phoneNumber := '+39-347-1234567'

!new Player('player53')
!player53.name := 'Alex Baker'
!player53.age := 26
!player53.bestFoot := #LEFT
!player53.phoneNumber := '+1-212-3456789'

!insert (teamAT, player52) into TeamPlayer
!insert (teamAU, player53) into TeamPlayer

!new Position('position109')
!position109.positionName := #FORWARD

!new Position('position110')
!position110.positionName := #DEFENDER

!insert (player52, position109) into PlayerPositions
!insert (player53, position110) into PlayerPositions

!new Competition('competition20')
!competition20.name := 'Global Soccer Super Cup'
!competition20.type := 'International Tournament'

!new Match('match26')
!match26.date := '2023-10-20'
!match26.homeAway := false

!insert (teamAT, match26) into VisitorMatch
!insert (teamAU, match26) into LocalMatch
!insert (competition20, match26) into CompetitionMatch

!new MatchReport('matchReport26')
!matchReport26.duration := 90
!matchReport26.scoreVisitor := 1
!matchReport26.scoreLocal := 1

!insert (match26, matchReport26) into MatchMatchReport

!new MatchEvent('matchEvent72')
!matchEvent72.eventType := #GOAL
!matchEvent72.time := 47

!new MatchEvent('matchEvent73')
!matchEvent73.eventType := #FOUL
!matchEvent73.time := 30

!new MatchEvent('matchEvent74')
!matchEvent74.eventType := #GOAL
!matchEvent74.time := 90

!insert (match26, matchEvent72) into MatchMatchEvent
!insert (match26, matchEvent73) into MatchMatchEvent
!insert (match26, matchEvent74) into MatchMatchEvent

!new MatchNote('matchNote16')
!matchNote16.note := 'The game ended in a stalemate, with both teams showing strong defensive skills.'
!matchNote16.date := '2023-10-20'

!insert (match26, matchNote16) into MatchMatchNote

!new TrainingSession('trainingSession40')
!trainingSession40.date := '2023-11-02'
!trainingSession40.location := 'Milan Training Complex'
!trainingSession40.purpose := 'Improving Ball Retention'

!new TrainingSession('trainingSession41')
!trainingSession41.date := '2023-11-03'
!trainingSession41.location := 'Knights Training Facility'
!trainingSession41.purpose := 'Concentration on Defense Breakout'

!insert (teamAT, trainingSession40) into TeamTraining
!insert (teamAU, trainingSession41) into TeamTraining

!new TrainingNotes('trainingNote40')
!trainingNote40.note := 'Emphasis on short passing and maintaining possession under pressure.'
!trainingNote40.date := '2023-11-02'

!new TrainingNotes('trainingNote41')
!trainingNote41.note := 'Drills focused on defensive organization and quick transition to attack.'
!trainingNote41.date := '2023-11-03'

!insert (trainingSession40, trainingNote40) into TrainingTrainingNotes
!insert (trainingSession41, trainingNote41) into TrainingTrainingNotes

!new TrainingFailedToAttend('trainingFail16')
!trainingFail16.reason := 'Visa Issues'

!insert (trainingFail16, player53) into FailedPlayer
!insert (trainingSession41, trainingFail16) into TrainingFailded

!new TrainingObjective('trainingObjective39')
!trainingObjective39.areaToImprove := 'Crossing Accuracy'
!trainingObjective39.startDate := '2023-10-01'
!trainingObjective39.endDate := '2023-11-29'
!trainingObjective39.success := true

!new TrainingObjective('trainingObjective40')
!trainingObjective40.areaToImprove := 'Defensive Tactics'
!trainingObjective40.startDate := '2023-10-01'
!trainingObjective40.endDate := '2023-11-29'
!trainingObjective40.success := true

!insert (trainingObjective39, player52) into TrainingObjectivePlayer
!insert (trainingObjective40, player53) into TrainingObjectivePlayer

!new PlayerNotes('playerNote22')
!playerNote22.note := 'Consistently delivers pinpoint crosses.'
!playerNote22.date := '2023-09-15'

!insert (player52, playerNote22) into PlayerPlayerNotes

!new MatchPlayer('matchPlayer47')
!matchPlayer47.booked := false
!matchPlayer47.goals := 1
!matchPlayer47.rating := 8

!new MatchPlayer('matchPlayer48')
!matchPlayer48.booked := false
!matchPlayer48.goals := 0
!matchPlayer48.rating := 7

!insert (player52, matchPlayer47) into PlayerMatch
!insert (player53, matchPlayer48) into PlayerMatch

!insert (match26, matchPlayer47) into MatchMatchPlayer
!insert (match26, matchPlayer48) into MatchMatchPlayer

!new MatchPlayerPosition('mpp47')
!mpp47.positionName := #FORWARD
!mpp47.number := 11

!new MatchPlayerPosition('mpp48')
!mpp48.positionName := #DEFENDER
!mpp48.number := 3

!insert (matchPlayer47, mpp47) into MatchPlayerMatchPlayerPosition
!insert (matchPlayer48, mpp48) into MatchPlayerMatchPlayerPosition
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 120 | 0.00% |
| Multiplicities Errors | 0 | 29 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 11 | 0.00% |

## Category boundary
```
!new Club('clubAV')
!clubAV.name := 'Sunshine Sharks'
!clubAV.homeGround := 'Coral Reef Stadium'
!clubAV.chairman := 'Miguel Santiago'

!new Club('clubAW')
!clubAW.name := 'Thunder Wolves'
!clubAW.homeGround := 'Storm Valley Arena'
!clubAW.chairman := 'Ingrid Svensson'

!new Team('teamAV')
!teamAV.name := 'Coral Predators'

!new Team('teamAW')
!teamAW.name := 'Lightning Strikers'

!insert (clubAV, teamAV) into ClubTeam
!insert (clubAW, teamAW) into ClubTeam

!new Player('player54')
!player54.name := 'Liam Jackson'
!player54.age := 29
!player54.bestFoot := #RIGHT
!player54.phoneNumber := '+61400123456'

!new Player('player55')
!player55.name := 'Sofia Oliveira'
!player55.age := 24
!player55.bestFoot := #LEFT
!player55.phoneNumber := '+351912345678'

!insert (teamAV, player54) into TeamPlayer
!insert (teamAV, player55) into TeamPlayer

!new Position('position111')
!position111.positionName := #DEFENDER

!new Position('position114')
!position114.positionName := #MIDFIELDER

!new Position('position115')
!position115.positionName := #ATTACKING_MIDFIELDER

!insert (player54, position111) into PlayerPositions
!insert (player55, position114) into PlayerPositions
!insert (player55, position115) into PlayerPositions

!new TrainingSession('trainingSession42')
!trainingSession42.date := '2023-08-30'
!trainingSession42.location := 'Ocean Front Park'
!trainingSession42.purpose := 'Tactics for Wet Weather Play'

!new TrainingSession('trainingSession43')
!trainingSession43.date := '2023-08-31'
!trainingSession43.location := 'Storm Valley Arena'
!trainingSession43.purpose := 'Defensive Structuring under Pressure'

!insert (teamAV, trainingSession42) into TeamTraining
!insert (teamAW, trainingSession43) into TeamTraining

!new TrainingNotes('trainingNote42')
!trainingNote42.note := 'Practiced rapid ball movement on wet surfaces.'
!trainingNote42.date := '2023-08-30'

!new TrainingNotes('trainingNote43')
!trainingNote43.note := 'Drills on maintaining line integrity under fast opponent incursions.'
!trainingNote43.date := '2023-08-31'

!insert (trainingSession42, trainingNote42) into TrainingTrainingNotes
!insert (trainingSession43, trainingNote43) into TrainingTrainingNotes

!new TrainingFailedToAttend('trainingFail17')
!trainingFail17.reason := 'Injury recovery'

!insert (trainingFail17, player54) into FailedPlayer
!insert (trainingSession42, trainingFail17) into TrainingFailded

!new Competition('competition21')
!competition21.name := 'Pacific Championship Cup'
!competition21.type := 'Tournament'

!new Match('match27')
!match27.date := '2023-09-05'
!match27.homeAway := true

!insert (teamAW, match27) into LocalMatch
!insert (teamAV, match27) into VisitorMatch
!insert (competition21, match27) into CompetitionMatch

!new MatchEvent('matchEvent75')
!matchEvent75.eventType := #GOAL
!matchEvent75.time := 10

!new MatchEvent('matchEvent76')
!matchEvent76.eventType := #GOAL
!matchEvent76.time := 33

!new MatchEvent('matchEvent77')
!matchEvent77.eventType := #FOUL
!matchEvent77.time := 55

!insert (match27, matchEvent75) into MatchMatchEvent
!insert (match27, matchEvent76) into MatchMatchEvent
!insert (match27, matchEvent77) into MatchMatchEvent

!new MatchReport('matchReport27')
!matchReport27.duration := 90
!matchReport27.scoreVisitor := 1
!matchReport27.scoreLocal := 1

!insert (match27, matchReport27) into MatchMatchReport

!new MatchNote('matchNote17')
!matchNote17.note := 'A tightly contested match with strong defensive displays.'
!matchNote17.date := '2023-09-05'

!insert (match27, matchNote17) into MatchMatchNote

!new Match('match28')
!match28.date := '2023-09-12'
!match28.homeAway := false

!insert (teamAV, match28) into LocalMatch
!insert (teamAW, match28) into VisitorMatch
!insert (competition21, match28) into CompetitionMatch

!new MatchEvent('matchEvent78')
!matchEvent78.eventType := #GOAL
!matchEvent78.time := 48

!new MatchEvent('matchEvent79')
!matchEvent79.eventType := #FOUL
!matchEvent79.time := 60

!new MatchEvent('matchEvent80')
!matchEvent80.eventType := #GOAL
!matchEvent80.time := 77

!insert (match28, matchEvent78) into MatchMatchEvent
!insert (match28, matchEvent79) into MatchMatchEvent
!insert (match28, matchEvent80) into MatchMatchEvent

!new MatchReport('matchReport28')
!matchReport28.duration := 90
!matchReport28.scoreVisitor := 1
!matchReport28.scoreLocal := 2

!insert (match28, matchReport28) into MatchMatchReport

!new MatchNote('matchNote18')
!matchNote18.note := 'Coral Predators won their first championship title.'
!matchNote18.date := '2023-09-12'

!insert (match28, matchNote18) into MatchMatchNote

!new PlayerNotes('playerNote23')
!playerNote23.note := 'Key player in defensive line.'
!playerNote23.date := '2023-06-15'

!insert (player54, playerNote23) into PlayerPlayerNotes

!new PlayerNotes('playerNote24')
!playerNote24.note := 'Essential in midfield coordination.'
!playerNote24.date := '2023-08-01'

!insert (player55, playerNote24) into PlayerPlayerNotes

!new MatchPlayer('matchPlayer49')
!matchPlayer49.booked := true
!matchPlayer49.goals := 0
!matchPlayer49.rating := 8

!new MatchPlayer('matchPlayer50')
!matchPlayer50.booked := false
!matchPlayer50.goals := 1
!matchPlayer50.rating := 9

!insert (player54, matchPlayer49) into PlayerMatch
!insert (player55, matchPlayer50) into PlayerMatch

!insert (match27, matchPlayer49) into MatchMatchPlayer
!insert (match28, matchPlayer50) into MatchMatchPlayer

!new MatchPlayerPosition('mpp49')
!mpp49.positionName := #DEFENDER
!mpp49.number := 5

!new MatchPlayerPosition('mpp50')
!mpp50.positionName := #MIDFIELDER
!mpp50.number := 10

!insert (matchPlayer49, mpp49) into MatchPlayerMatchPlayerPosition
!insert (matchPlayer50, mpp50) into MatchPlayerMatchPlayerPosition

!new TrainingObjective('trainingObjective41')
!trainingObjective41.areaToImprove := 'Enhance Match Stamina'
!trainingObjective41.startDate := '2023-07-01'
!trainingObjective41.endDate := '2023-08-01'
!trainingObjective41.success := true

!insert (trainingObjective41, player55) into TrainingObjectivePlayer

!new TrainingObjective('trainingObjective42')
!trainingObjective42.areaToImprove := 'Defensive Coordination'
!trainingObjective42.startDate := '2023-07-01'
!trainingObjective42.endDate := '2023-08-01'
!trainingObjective42.success := true

!insert (trainingObjective42, player54) into TrainingObjectivePlayer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 1 | 154 | 0.65% |
| Multiplicities Errors | 1 | 39 | 2.56% |
| Invariants Errors | 1 | 4 | 25.00% |

| Syntax Errors | 
|---| 
```
<input>:1:0: generation of expression `#ATTACKING_MIDFIELDER' failed, with following error:
```

| Multiplicities Errors | 
|---| 
```
Multiplicity constraint violation in association `TeamPlayer':
  Object `teamAW' of class `Team' is connected to 0 objects of class `Player'
  at association end `player' but the multiplicity is specified as `1..*'.
```

| Invariants Errors | 
|---| 
```
checking invariant (4) `MatchReport::SumOfScoresEqualsGoals': FAILED.
```

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 14 | 0.00% |

## Category complex
```
!new Club('clubAZ')
!clubAZ.name := 'Rio de Janeiro Royals'
!clubAZ.homeGround := 'Maracanã Stadium'
!clubAZ.chairman := 'Ricardo Souza'

!new Club('clubBA')
!clubBA.name := 'Milan Knights'
!clubBA.homeGround := 'San Siro'
!clubBA.chairman := 'Giulia Rossi'

!new Team('teamAZ')
!teamAZ.name := 'Rio Royals Senior Squad'

!new Team('teamBA')
!teamBA.name := 'Milan Knights Legends Team'

!insert (clubAZ, teamAZ) into ClubTeam
!insert (clubBA, teamBA) into ClubTeam

!new Player('player58')
!player58.name := 'Diego Ferreira'
!player58.age := 35
!player58.bestFoot := #LEFT
!player58.phoneNumber := '+5521122334455'

!new Player('player59')
!player59.name := 'Alessandro Conti'
!player59.age := 36
!player59.bestFoot := #RIGHT
!player59.phoneNumber := '+390224567890'

!new Player('player60')
!player60.name := 'Felipe Silva'
!player60.age := 34
!player60.bestFoot := #RIGHT
!player60.phoneNumber := '+5521987654321'

!insert (teamAZ, player58) into TeamPlayer
!insert (teamBA, player59) into TeamPlayer
!insert (teamAZ, player60) into TeamPlayer

!new Position('position109')
!position109.positionName := #FORWARD

!new Position('position106')
!position106.positionName := #DEFENDER

!new Position('position100')
!position100.positionName := #MIDFIELDER

!insert (player58, position109) into PlayerPositions
!insert (player59, position100) into PlayerPositions
!insert (player60, position106) into PlayerPositions

!new Competition('competition23')
!competition23.name := 'World Classics Cup'
!competition23.type := 'Exhibition Tournament'

!new Match('match30')
!match30.date := '10-10-2023'
!match30.homeAway := true

!insert (teamAZ, match30) into LocalMatch
!insert (teamBA, match30) into VisitorMatch
!insert (competition23, match30) into CompetitionMatch

!new MatchReport('matchReport30')
!matchReport30.duration := 90
!matchReport30.scoreVisitor := 2
!matchReport30.scoreLocal := 2

!insert (match30, matchReport30) into MatchMatchReport

!new MatchPlayer('matchPlayer53')
!matchPlayer53.booked := false
!matchPlayer53.goals := 2
!matchPlayer53.rating := 9

!new MatchPlayer('matchPlayer54')
!matchPlayer54.booked := true
!matchPlayer54.goals := 1
!matchPlayer54.rating := 8

!new MatchPlayer('matchPlayer55')
!matchPlayer55.booked := false
!matchPlayer55.goals := 0
!matchPlayer55.rating := 7

!insert (player58, matchPlayer53) into PlayerMatch
!insert (player59, matchPlayer54) into PlayerMatch
!insert (player60, matchPlayer55) into PlayerMatch

!insert (match30, matchPlayer53) into MatchMatchPlayer
!insert (match30, matchPlayer54) into MatchMatchPlayer
!insert (match30, matchPlayer55) into MatchMatchPlayer

!new MatchPlayerPosition('mpp53')
!mpp53.positionName := #FORWARD
!mpp53.number := 10

!new MatchPlayerPosition('mpp54')
!mpp54.positionName := #MIDFIELDER
!mpp54.number := 8

!new MatchPlayerPosition('mpp55')
!mpp55.positionName := #DEFENDER
!mpp55.number := 5

!insert (matchPlayer53, mpp53) into MatchPlayerMatchPlayerPosition
!insert (matchPlayer54, mpp54) into MatchPlayerMatchPlayerPosition
!insert (matchPlayer55, mpp55) into MatchPlayerMatchPlayerPosition

!new MatchEvent('matchEvent85')
!matchEvent85.eventType := #GOAL
!matchEvent85.time := 19

!new MatchEvent('matchEvent86')
!matchEvent86.eventType := #GOAL
!matchEvent86.time := 85

!new MatchEvent('matchEvent87')
!matchEvent87.eventType := #GOAL
!matchEvent87.time := 42

!new MatchEvent('matchEvent88')
!matchEvent88.eventType := #FOUL
!matchEvent88.time := 67

!insert (match30, matchEvent85) into MatchMatchEvent
!insert (match30, matchEvent86) into MatchMatchEvent
!insert (match30, matchEvent87) into MatchMatchEvent
!insert (match30, matchEvent88) into MatchMatchEvent

!new TrainingSession('trainingSession45')
!trainingSession45.date := '05-10-2023'
!trainingSession45.location := 'Maracanã Practice Field'
!trainingSession45.purpose := 'Tactics and strategy for historic match scenarios.'

!new TrainingSession('trainingSession46')
!trainingSession46.date := '06-10-2023'
!trainingSession46.location := 'San Siro Training Grounds'
!trainingSession46.purpose := 'Defensive and Offensive Coordination'

!insert (teamAZ, trainingSession45) into TeamTraining
!insert (teamBA, trainingSession46) into TeamTraining

!new TrainingNotes('trainingNote45')
!trainingNote45.note := 'Players comprehended advanced formations used in historical rivalries.'
!trainingNote45.date := '05-10-2023'

!new TrainingNotes('trainingNote46')
!trainingNote46.note := 'Focused on synchronization between defense and attack.'
!trainingNote46.date := '06-10-2023'

!insert (trainingSession45, trainingNote45) into TrainingTrainingNotes
!insert (trainingSession46, trainingNote46) into TrainingTrainingNotes

!new TrainingObjective('trainingObjective43')
!trainingObjective43.areaToImprove := 'Tactical Intelligence'
!trainingObjective43.startDate := '01-10-2023'
!trainingObjective43.endDate := '08-10-2023'
!trainingObjective43.success := true

!new TrainingObjective('trainingObjective44')
!trainingObjective44.areaToImprove := 'Defensive Strategy'
!trainingObjective44.startDate := '01-10-2023'
!trainingObjective44.endDate := '08-10-2023'
!trainingObjective44.success := true

!new TrainingObjective('trainingObjective45')
!trainingObjective45.areaToImprove := 'Offensive Strategy'
!trainingObjective45.startDate := '01-10-2023'
!trainingObjective45.endDate := '08-10-2023'
!trainingObjective45.success := true

!insert (trainingObjective43, player58) into TrainingObjectivePlayer
!insert (trainingObjective44, player59) into TrainingObjectivePlayer
!insert (trainingObjective45, player60) into TrainingObjectivePlayer

!new TrainingFailedToAttend('trainingFail19')
!trainingFail19.reason := 'Personal Commitments'

!insert (trainingFail19, player60) into FailedPlayer
!insert (trainingSession45, trainingFail19) into TrainingFailded
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 141 | 0.00% |
| Multiplicities Errors | 0 | 34 | 0.00% |
| Invariants Errors | 1 | 4 | 25.00% |

| Invariants Errors | 
|---| 
```
checking invariant (4) `MatchReport::SumOfScoresEqualsGoals': FAILED.
```

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 11 | 0.00% |

## Category edge
```
!new Club('clubAJ')
!clubAJ.name := 'Polar Predators FC'
!clubAJ.homeGround := 'Iceberg Park Arena'
!clubAJ.chairman := 'Mr. Olaf Sigurdsson'

!new Club('clubAK')
!clubAK.name := 'Tundra Trekkers'
!clubAK.homeGround := 'Snowcap Grounds'
!clubAK.chairman := 'Ms. Annika Frost'

!new Team('teamAJ')
!teamAJ.name := 'Frostbite Fighters'

!new Team('teamAK')
!teamAK.name := 'Glacier Guardians'

!insert (clubAJ, teamAJ) into ClubTeam
!insert (clubAK, teamAK) into ClubTeam

!new Player('player40')
!player40.name := 'Blizzard Breeze'
!player40.age := 30
!player40.bestFoot := #RIGHT
!player40.phoneNumber := '+1123456789'

!new Player('player41')
!player41.name := 'Ice Shield'
!player41.age := 29
!player41.bestFoot := #LEFT
!player41.phoneNumber := '+9876541230'

!insert (teamAJ, player40) into TeamPlayer
!insert (teamAK, player41) into TeamPlayer

!new Position('position92')
!position92.positionName := #DEFENDER

!new Position('position93')
!position93.positionName := #MIDFIELDER

!new Position('position94')
!position94.positionName := #GOALKEEPER

!insert (player40, position92) into PlayerPositions
!insert (player40, position93) into PlayerPositions
!insert (player41, position94) into PlayerPositions

!new Competition('competition16')
!competition16.name := 'Arctic Cup Series'
!competition16.type := 'Tournament'

!new Match('match19')
!match19.date := '12/12/2023'
!match19.homeAway := false

!insert (teamAK, match19) into LocalMatch
!insert (teamAJ, match19) into VisitorMatch
!insert (competition16, match19) into CompetitionMatch

!new MatchReport('matchReport19')
!matchReport19.duration := 90
!matchReport19.scoreVisitor := 0
!matchReport19.scoreLocal := 0

!insert (match19, matchReport19) into MatchMatchReport

!new MatchEvent('matchEvent52')
!matchEvent52.eventType := #FOUL
!matchEvent52.time := 32

!new MatchEvent('matchEvent53')
!matchEvent53.eventType := #FOUL
!matchEvent53.time := 65

!new MatchEvent('matchEvent54')
!matchEvent54.eventType := #FOUL
!matchEvent54.time := 75

!insert (match19, matchEvent52) into MatchMatchEvent
!insert (match19, matchEvent53) into MatchMatchEvent
!insert (match19, matchEvent54) into MatchMatchEvent

!new MatchPlayer('matchPlayer35')
!matchPlayer35.booked := true
!matchPlayer35.goals := 0
!matchPlayer35.rating := 6

!new MatchPlayer('matchPlayer36')
!matchPlayer36.booked := false
!matchPlayer36.goals := 0
!matchPlayer36.rating := 8

!insert (player40, matchPlayer35) into PlayerMatch
!insert (player41, matchPlayer36) into PlayerMatch

!insert (match19, matchPlayer35) into MatchMatchPlayer
!insert (match19, matchPlayer36) into MatchMatchPlayer

!new MatchPlayerPosition('position95')
!position95.positionName := #DEFENDER
!position95.number := 5

!new MatchPlayerPosition('position96')
!position96.positionName := #GOALKEEPER
!position96.number := 1

!insert (matchPlayer35, position95) into MatchPlayerMatchPlayerPosition
!insert (matchPlayer36, position96) into MatchPlayerMatchPlayerPosition

!new TrainingSession('trainingSession31')
!trainingSession31.date := '10/12/2023'
!trainingSession31.location := 'Iceberg Park Arena'
!trainingSession31.purpose := 'Cold Weather Endurance and Team Coordination'

!insert (teamAJ, trainingSession31) into TeamTraining

!new TrainingSession('trainingSession32')
!trainingSession32.date := '09/12/2023'
!trainingSession32.location := 'Snowcap Grounds'
!trainingSession32.purpose := 'Goalkeeping Agility Improvement'

!insert (teamAK, trainingSession32) into TeamTraining

!new TrainingNotes('trainingNote31')
!trainingNote31.note := 'Improvement observed in players\' coordination while enduring freezing temperatures.'
!trainingNote31.date := '10/12/2023'

!new TrainingNotes('trainingNote32')
!trainingNote32.note := 'Enhanced agility and quick reflexes developed during the session.'
!trainingNote32.date := '09/12/2023'

!insert (trainingSession31, trainingNote31) into TrainingTrainingNotes
!insert (trainingSession32, trainingNote32) into TrainingTrainingNotes

!new TrainingFailedToAttend('trainingFail12')
!trainingFail12.reason := 'Frostbite recovery'

!insert (trainingFail12, player41) into FailedPlayer
!insert (trainingSession31, trainingFail12) into TrainingFailded

!new TrainingObjective('trainingObjective30')
!trainingObjective30.areaToImprove := 'Defensive Formations amid Cold Weather'
!trainingObjective30.startDate := '08/12/2023'
!trainingObjective30.endDate := '11/12/2023'
!trainingObjective30.success := true

!new TrainingObjective('trainingObjective31')
!trainingObjective31.areaToImprove := 'Goalkeeping in Cold Conditions'
!trainingObjective31.startDate := '08/12/2023'
!trainingObjective31.endDate := '11/12/2023'
!trainingObjective31.success := false

!insert (trainingObjective30, player40) into TrainingObjectivePlayer
!insert (trainingObjective31, player41) into TrainingObjectivePlayer

!new PlayerNotes('playerNote16')
!playerNote16.note := 'Challenges in maintaining focus under snow glare conditions.'
!playerNote16.date := '11/12/2023'

!insert (player40, playerNote16) into PlayerPlayerNotes

!new PlayerNotes('playerNote17')
!playerNote17.note := 'Exhibits exceptional reflexes against close-range shots.'
!playerNote17.date := '09/12/2023'

!insert (player41, playerNote17) into PlayerPlayerNotes
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 123 | 0.00% |
| Multiplicities Errors | 0 | 30 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 11 | 0.00% |

## Category invalid
```
!new Club('clubAX')
!clubAX.name := 'Desert Falcons FC'
!clubAX.homeGround := 'Falcon Arena, Riyadh'
!clubAX.chairman := 'Faisal Al-Harbi'

!new Club('clubAY')
!clubAY.name := 'Oasis Knights FC'
!clubAY.homeGround := "Knight's Coliseum, Dubai"
!clubAY.chairman := 'Ayesha Khalid'

!new Team('teamAX')
!teamAX.name := 'Falcons Rising'

!new Team('teamAY')
!teamAY.name := "Knight's Apprentices"

!insert (clubAX, teamAX) into ClubTeam
!insert (clubAY, teamAY) into ClubTeam

!new Player('player56')
!player56.name := 'Ahmad Jaber'
!player56.age := 26
!player56.bestFoot := #RIGHT
!player56.phoneNumber := '+966 505 123 456'

!new Player('player57')
!player57.name := 'Layla Safar'
!player57.age := 24
!player57.bestFoot := #LEFT
!player57.phoneNumber := '+971 555 678 910'

!insert (teamAX, player56) into TeamPlayer
!insert (teamAY, player57) into TeamPlayer

!new Position('position116')
!position116.positionName := #FORWARD

!new Position('position100')
!position100.positionName := #MIDFIELDER

!new Position('position106')
!position106.positionName := #DEFENDER

!insert (player56, position116) into PlayerPositions
!insert (player56, position100) into PlayerPositions
!insert (player57, position100) into PlayerPositions
!insert (player57, position106) into PlayerPositions

!new Competition('competition22')
!competition22.name := 'Golden Desert Youth Cup'
!competition22.type := 'Tournament'

!new Match('match29')
!match29.date := '30th March 2024'
!match29.homeAway := true

!insert (teamAX, match29) into LocalMatch
!insert (teamAY, match29) into VisitorMatch
!insert (competition22, match29) into CompetitionMatch

!new MatchReport('matchReport29')
!matchReport29.duration := 90
!matchReport29.scoreVisitor := 2
!matchReport29.scoreLocal := 2

!insert (match29, matchReport29) into MatchMatchReport

!new MatchEvent('matchEvent82')
!matchEvent82.eventType := #GOAL
!matchEvent82.time := 22

!new MatchEvent('matchEvent83')
!matchEvent83.eventType := #FOUL
!matchEvent83.time := 45

!new MatchEvent('matchEvent84')
!matchEvent84.eventType := #GOAL
!matchEvent84.time := 78

!insert (match29, matchEvent82) into MatchMatchEvent
!insert (match29, matchEvent83) into MatchMatchEvent
!insert (match29, matchEvent84) into MatchMatchEvent

!new MatchPlayer('matchPlayer51')
!matchPlayer51.booked := false
!matchPlayer51.goals := 1
!matchPlayer51.rating := 8

!new MatchPlayer('matchPlayer52')
!matchPlayer52.booked := true
!matchPlayer52.goals := 1
!matchPlayer52.rating := 7

!insert (player56, matchPlayer51) into PlayerMatch
!insert (player57, matchPlayer52) into PlayerMatch

!insert (match29, matchPlayer51) into MatchMatchPlayer
!insert (match29, matchPlayer52) into MatchMatchPlayer

!new MatchPlayerPosition('mpp51')
!mpp51.positionName := #FORWARD
!mpp51.number := 9

!new MatchPlayerPosition('mpp52')
!mpp52.positionName := #DEFENDER
!mpp52.number := 4

!insert (matchPlayer51, mpp51) into MatchPlayerMatchPlayerPosition
!insert (matchPlayer52, mpp52) into MatchPlayerMatchPlayerPosition

!new MatchNote('matchNote19')
!matchNote19.note := 'The match saw resilient performances despite errors in venue designation during the festive Neom Spring Festival.'
!matchNote19.date := '31st March 2024'

!insert (match29, matchNote19) into MatchMatchNote

!new TrainingSession('trainingSession44')
!trainingSession44.date := '1st April 2024'
!trainingSession44.location := 'Falcon Arena Training Grounds'
!trainingSession44.purpose := 'Drills focused on resilience and adaptation to unorthodox competition circumstances.'

!insert (teamAX, trainingSession44) into TeamTraining

!new TrainingFailedToAttend('trainingFail18')
!trainingFail18.reason := 'Celebratory festivities caused decreased attendance rates due to public holiday observances.'

!insert (trainingFail18, player57) into FailedPlayer
!insert (trainingSession44, trainingFail18) into TrainingFailded

!new TrainingNotes('trainingNote44')
!trainingNote44.note := 'Attendance impacted by festival commitments, causing a shift in planned session objectives to incorporate informal skill-building.'
!trainingNote44.date := '2nd April 2024'

!insert (trainingSession44, trainingNote44) into TrainingTrainingNotes
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 4 | 26 | 15.38% |
| Invariants Errors (Not included on General) | 1 | 4 | 25.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `player57' of class `Player' is connected to 0 objects of class `TrainingObjective'
  at association end `trainingObjective' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `player56' of class `Player' is connected to 0 objects of class `TrainingObjective'
  at association end `trainingObjective' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `PlayerPositions':
  Object `position100' of class `Position' is connected to 2 objects of class `Player'
  at association end `player' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `TeamTraining':
  Object `teamAY' of class `Team' is connected to 0 objects of class `TrainingSession'
  at association end `trainingSession' but the multiplicity is specified as `1..*'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (4) `MatchReport::SumOfScoresEqualsGoals': FAILED.
```

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 4 | 4 | 100.00% |

| Failed dates | 
|---| 
```
30th March 2024
```
```
31st March 2024
```
```
1st April 2024
```
```
2nd April 2024
```

## Generation 5 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 2 | 637 | 0.31% |
| Multiplicities Errors | 1 | 132 | 0.76% |
| Invariants Errors | 2 | 16 | 12.50% |

| Syntax Errors | 
|---| 
```
<input>:1:0: generation of expression `#ATTACKING_MIDFIELDER' failed, with following error:
```
```
<input>:line 1:6 mismatched input '.' expecting :=
```

| Multiplicities Errors | 
|---| 
```
Multiplicity constraint violation in association `TeamPlayer':
  Object `teamAW' of class `Team' is connected to 0 objects of class `Player'
  at association end `player' but the multiplicity is specified as `1..*'.
```

| Invariants Errors | 
|---| 
```
checking invariant (4) `MatchReport::SumOfScoresEqualsGoals': FAILED.
```
```
checking invariant (4) `MatchReport::SumOfScoresEqualsGoals': FAILED.
```

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 4 | 26 | 15.38% |
| Invariants Errors (Not included on General) | 1 | 4 | 25.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `player57' of class `Player' is connected to 0 objects of class `TrainingObjective'
  at association end `trainingObjective' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `player56' of class `Player' is connected to 0 objects of class `TrainingObjective'
  at association end `trainingObjective' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `PlayerPositions':
  Object `position100' of class `Position' is connected to 2 objects of class `Player'
  at association end `player' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `TeamTraining':
  Object `teamAY' of class `Team' is connected to 0 objects of class `TrainingSession'
  at association end `trainingSession' but the multiplicity is specified as `1..*'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (4) `MatchReport::SumOfScoresEqualsGoals': FAILED.
```

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 4 | 51 | 7.84% |

| Failed dates | 
|---| 
```
30th March 2024
```
```
31st March 2024
```
```
1st April 2024
```
```
2nd April 2024
```

# Generation 6
## Category baseline
```
!new Club('clubBB')
!clubBB.name := 'Buenos Aires Jaguars'
!clubBB.homeGround := "Jaguar's Den Stadium"
!clubBB.chairman := 'Fernando Gomez'

!new Club('clubBC')
!clubBC.name := 'Berlin Bears'
!clubBC.homeGround := "Bear's Berlin Arena"
!clubBC.chairman := 'Katrina Fischer'

!new Team('teamBB')
!teamBB.name := 'Buenos Aires Jaguars Pro'

!new Team('teamBC')
!teamBC.name := 'Berlin Bears Premier'

!insert (clubBB, teamBB) into ClubTeam
!insert (clubBC, teamBC) into ClubTeam

!new Player('player61')
!player61.name := 'Andrés Martinez'
!player61.age := 31
!player61.bestFoot := #LEFT
!player61.phoneNumber := '+54-11-8765432'

!new Player('player62')
!player62.name := 'Tobias Keller'
!player62.age := 23
!player62.bestFoot := #RIGHT
!player62.phoneNumber := '+49-30-54321987'

!insert (teamBB, player61) into TeamPlayer
!insert (teamBC, player62) into TeamPlayer

!new Position('position116')
!position116.positionName := #MIDFIELDER

!new Position('position109')
!position109.positionName := #FORWARD

!insert (player61, position116) into PlayerPositions
!insert (player62, position109) into PlayerPositions

!new Competition('competition24')
!competition24.name := 'Transatlantic League'
!competition24.type := 'Continental League'

!new Match('match31')
!match31.date := '2023-11-25'
!match31.homeAway := false

!insert (teamBB, match31) into VisitorMatch
!insert (teamBC, match31) into LocalMatch
!insert (competition24, match31) into CompetitionMatch

!new MatchReport('matchReport31')
!matchReport31.duration := 90
!matchReport31.scoreVisitor := 1
!matchReport31.scoreLocal := 1

!insert (match31, matchReport31) into MatchMatchReport

!new MatchEvent('matchEvent89')
!matchEvent89.eventType := #GOAL
!matchEvent89.time := 10

!new MatchEvent('matchEvent90')
!matchEvent90.eventType := #GOAL
!matchEvent90.time := 75

!new MatchEvent('matchEvent91')
!matchEvent91.eventType := #FOUL
!matchEvent91.time := 50

!insert (match31, matchEvent89) into MatchMatchEvent
!insert (match31, matchEvent90) into MatchMatchEvent
!insert (match31, matchEvent91) into MatchMatchEvent

!new MatchNote('matchNote20')
!matchNote20.note := 'A well-balanced game with impressive defensive setups.'
!matchNote20.date := '2023-11-25'

!insert (match31, matchNote20) into MatchMatchNote

!new TrainingSession('trainingSession47')
!trainingSession47.date := '2023-10-15'
!trainingSession47.location := 'Jaguars Training Grounds'
!trainingSession47.purpose := 'Developing Team Cohesion'

!new TrainingSession('trainingSession48')
!trainingSession48.date := '2023-10-17'
!trainingSession48.location := 'Bears Training Facility'
!trainingSession48.purpose := 'Improving Tactical Switching'

!insert (teamBB, trainingSession47) into TeamTraining
!insert (teamBC, trainingSession48) into TeamTraining

!new TrainingNotes('trainingNote47')
!trainingNote47.note := 'Conducted exercises on build-up play and positioning.'
!trainingNote47.date := '2023-10-15'

!new TrainingNotes('trainingNote48')
!trainingNote48.note := 'Focused on adaptive strategies for opponent pressure.'
!trainingNote48.date := '2023-10-17'

!insert (trainingSession47, trainingNote47) into TrainingTrainingNotes
!insert (trainingSession48, trainingNote48) into TrainingTrainingNotes

!new TrainingFailedToAttend('trainingFail20')
!trainingFail20.reason := 'Personal Leave'

!insert (trainingFail20, player62) into FailedPlayer
!insert (trainingSession48, trainingFail20) into TrainingFailded

!new TrainingObjective('trainingObjective46')
!trainingObjective46.areaToImprove := 'Strength and Conditioning'
!trainingObjective46.startDate := '2023-10-01'
!trainingObjective46.endDate := '2023-11-01'
!trainingObjective46.success := true

!new TrainingObjective('trainingObjective47')
!trainingObjective47.areaToImprove := 'Playmaking Strategy'
!trainingObjective47.startDate := '2023-10-01'
!trainingObjective47.endDate := '2023-11-01'
!trainingObjective47.success := true

!insert (trainingObjective46, player62) into TrainingObjectivePlayer
!insert (trainingObjective47, player61) into TrainingObjectivePlayer

!new PlayerNotes('playerNote25')
!playerNote25.note := 'Invaluable experience in orchestrating plays.'
!playerNote25.date := '2023-09-12'

!insert (player61, playerNote25) into PlayerPlayerNotes

!new MatchPlayer('matchPlayer56')
!matchPlayer56.booked := true
!matchPlayer56.goals := 0
!matchPlayer56.rating := 7

!new MatchPlayer('matchPlayer57')
!matchPlayer57.booked := false
!matchPlayer57.goals := 1
!matchPlayer57.rating := 8

!insert (player61, matchPlayer56) into PlayerMatch
!insert (player62, matchPlayer57) into PlayerMatch

!insert (match31, matchPlayer56) into MatchMatchPlayer
!insert (match31, matchPlayer57) into MatchMatchPlayer

!new MatchPlayerPosition('mpp56')
!mpp56.positionName := #MIDFIELDER
!mpp56.number := 5

!new MatchPlayerPosition('mpp57')
!mpp57.positionName := #FORWARD
!mpp57.number := 9

!insert (matchPlayer56, mpp56) into MatchPlayerMatchPlayerPosition
!insert (matchPlayer57, mpp57) into MatchPlayerMatchPlayerPosition
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 1 | 120 | 0.83% |
| Multiplicities Errors | 0 | 29 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Syntax Errors | 
|---| 
```
<input>:line 1:6 mismatched input '.' expecting :=
```

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 11 | 0.00% |

## Category boundary
```
!new Club('clubBF')
!clubBF.name := 'Savannah Lions'
!clubBF.homeGround := "Lions' Pride Stadium"
!clubBF.chairman := 'Kwame Mensah'

!new Club('clubBG')
!clubBG.name := 'Polar Owls'
!clubBG.homeGround := 'Icicle Arena'
!clubBG.chairman := 'Elena Ivanova'

!new Team('teamBF')
!teamBF.name := 'Grassland Warriors'

!new Team('teamBG')
!teamBG.name := 'Frosty Flyers'

!insert (clubBF, teamBF) into ClubTeam
!insert (clubBG, teamBG) into ClubTeam

!new Player('player65')
!player65.name := 'Abena Afolabi'
!player65.age := 23
!player65.bestFoot := #RIGHT
!player65.phoneNumber := '+233201234567'

!new Player('player66')
!player66.name := 'Viktor Bogdan'
!player66.age := 31
!player66.bestFoot := #BOTH
!player66.phoneNumber := '+74991234567'

!insert (teamBF, player65) into TeamPlayer
!insert (teamBG, player66) into TeamPlayer

!new Position('position117')
!position117.positionName := #MIDFIELDER

!new Position('position118')
!position118.positionName := #DEFENDER

!insert (player65, position117) into PlayerPositions
!insert (player66, position118) into PlayerPositions
!insert (player66, position117) into PlayerPositions

!new TrainingSession('trainingSession50')
!trainingSession50.date := '2023-08-01'
!trainingSession50.location := 'Pride Practice Grounds'
!trainingSession50.purpose := 'High-Temperature Conditioning'

!new TrainingSession('trainingSession51')
!trainingSession51.date := '2023-07-31'
!trainingSession51.location := 'Icicle Arena Practice Field'
!trainingSession51.purpose := 'Cold Weather Endurance'

!insert (teamBF, trainingSession50) into TeamTraining
!insert (teamBG, trainingSession51) into TeamTraining

!new TrainingNotes('trainingNote50')
!trainingNote50.note := 'Focus on hydration strategies and maintaining performance in extreme heat.'
!trainingNote50.date := '2023-08-01'

!new TrainingNotes('trainingNote51')
!trainingNote51.note := 'Exercises to maintain stamina in cold conditions.'
!trainingNote51.date := '2023-07-31'

!insert (trainingSession50, trainingNote50) into TrainingTrainingNotes
!insert (trainingSession51, trainingNote51) into TrainingTrainingNotes

!new Competition('competition26')
!competition26.name := 'Equator Cup'
!competition26.type := 'Invitational'

!new Match('match33')
!match33.date := '2023-08-10'
!match33.homeAway := false

!insert (teamBF, match33) into LocalMatch
!insert (teamBG, match33) into VisitorMatch
!insert (competition26, match33) into CompetitionMatch

!new MatchEvent('matchEvent94')
!matchEvent94.eventType := #GOAL
!matchEvent94.time := 22

!new MatchEvent('matchEvent95')
!matchEvent95.eventType := #FOUL
!matchEvent95.time := 45

!new MatchEvent('matchEvent96')
!matchEvent96.eventType := #GOAL
!matchEvent96.time := 78

!insert (match33, matchEvent94) into MatchMatchEvent
!insert (match33, matchEvent95) into MatchMatchEvent
!insert (match33, matchEvent96) into MatchMatchEvent

!new MatchReport('matchReport33')
!matchReport33.duration := 90
!matchReport33.scoreVisitor := 0
!matchReport33.scoreLocal := 2

!insert (match33, matchReport33) into MatchMatchReport

!new MatchNote('matchNote22')
!matchNote22.note := 'The Grassland Warriors executed successful heat adaptation strategies.'
!matchNote22.date := '2023-08-10'

!insert (match33, matchNote22) into MatchMatchNote

!new Match('match34')
!match34.date := '2023-08-20'
!match34.homeAway := true

!insert (teamBG, match34) into LocalMatch
!insert (teamBF, match34) into VisitorMatch
!insert (competition26, match34) into CompetitionMatch

!new MatchEvent('matchEvent97')
!matchEvent97.eventType := #GOAL
!matchEvent97.time := 60

!new MatchEvent('matchEvent98')
!matchEvent98.eventType := #FOUL
!matchEvent98.time := 80

!new MatchEvent('matchEvent99')
!matchEvent99.eventType := #GOAL
!matchEvent99.time := 85

!insert (match34, matchEvent97) into MatchMatchEvent
!insert (match34, matchEvent98) into MatchMatchEvent
!insert (match34, matchEvent99) into MatchMatchEvent

!new MatchReport('matchReport34')
!matchReport34.duration := 90
!matchReport34.scoreVisitor := 1
!matchReport34.scoreLocal := 1

!insert (match34, matchReport34) into MatchMatchReport

!new MatchNote('matchNote23')
!matchNote23.note := 'The game extended to penalties, highlighting defensive strengths.'
!matchNote23.date := '2023-08-20'

!insert (match34, matchNote23) into MatchMatchNote

!new PlayerNotes('playerNote26')
!playerNote26.note := 'Displays exemplary leadership in high-pressure situations.'
!playerNote26.date := '2023-07-15'

!insert (player65, playerNote26) into PlayerPlayerNotes

!new MatchPlayer('matchPlayer60')
!matchPlayer60.booked := false
!matchPlayer60.goals := 1
!matchPlayer60.rating := 9

!new MatchPlayer('matchPlayer61')
!matchPlayer61.booked := true
!matchPlayer61.goals := 0
!matchPlayer61.rating := 8

!insert (player65, matchPlayer60) into PlayerMatch
!insert (player66, matchPlayer61) into PlayerMatch

!insert (match33, matchPlayer60) into MatchMatchPlayer
!insert (match34, matchPlayer61) into MatchMatchPlayer

!new MatchPlayerPosition('mpp60')
!mpp60.positionName := #MIDFIELDER
!mpp60.number := 7

!new MatchPlayerPosition('mpp61')
!mpp61.positionName := #DEFENDER
!mpp61.number := 5

!insert (matchPlayer60, mpp60) into MatchPlayerMatchPlayerPosition
!insert (matchPlayer61, mpp61) into MatchPlayerMatchPlayerPosition

!new TrainingObjective('trainingObjective48')
!trainingObjective48.areaToImprove := 'Improve Ball Control Under Pressure'
!trainingObjective48.startDate := '2023-06-01'
!trainingObjective48.endDate := '2023-07-01'
!trainingObjective48.success := true

!new TrainingObjective('trainingObjective49')
!trainingObjective49.areaToImprove := 'Defensive Techniques'
!trainingObjective49.startDate := '2023-06-01'
!trainingObjective49.endDate := '2023-07-01'
!trainingObjective49.success := true

!insert (trainingObjective48, player66) into TrainingObjectivePlayer
!insert (trainingObjective49, player65) into TrainingObjectivePlayer
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 144 | 0.00% |
| Multiplicities Errors | 1 | 36 | 2.78% |
| Invariants Errors | 0 | 4 | 0.00% |

| Multiplicities Errors | 
|---| 
```
Multiplicity constraint violation in association `PlayerPositions':
  Object `position117' of class `Position' is connected to 2 objects of class `Player'
  at association end `player' but the multiplicity is specified as `1'.
```

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 13 | 0.00% |

## Category complex
```
!new Club('clubBH')
!clubBH.name := 'Mumbai Mariners FC'
!clubBH.homeGround := 'Navi Mumbai Arena'
!clubBH.chairman := 'Ananya Mehta'

!new Club('clubBI')
!clubBI.name := 'Cape Town ke Nako'
!clubBI.homeGround := 'Green Point Stadium'
!clubBI.chairman := 'Sipho Ndlovu'

!new Team('teamBH')
!teamBH.name := 'Mumbai Mariners Young Stars'

!new Team('teamBI')
!teamBI.name := 'Cape Town Future Champions'

!insert (clubBH, teamBH) into ClubTeam
!insert (clubBI, teamBI) into ClubTeam

!new Player('player67')
!player67.name := 'Arjun Patel'
!player67.age := 16
!player67.bestFoot := #RIGHT
!player67.phoneNumber := '+919876543210'

!new Player('player68')
!player68.name := 'Thandiwe Mbatha'
!player68.age := 17
!player68.bestFoot := #LEFT
!player68.phoneNumber := '+27721234567'

!new Player('player69')
!player69.name := 'Karishma Joshi'
!player69.age := 15
!player69.bestFoot := #RIGHT
!player69.phoneNumber := '+919123456789'

!insert (teamBH, player67) into TeamPlayer
!insert (teamBI, player68) into TeamPlayer
!insert (teamBH, player69) into TeamPlayer

!new Position('position120')
!position120.positionName := #GOALKEEPER

!new Position('position118')
!position118.positionName := #DEFENDER

!new Position('position117')
!position117.positionName := #MIDFIELDER

!insert (player67, position117) into PlayerPositions
!insert (player68, position118) into PlayerPositions
!insert (player69, position120) into PlayerPositions

!new Competition('competition27')
!competition27.name := 'Youth Integration League'
!competition27.type := 'Development Program'

!new Match('match35')
!match35.date := '22-11-2023'
!match35.homeAway := true

!insert (teamBH, match35) into LocalMatch
!insert (teamBI, match35) into VisitorMatch
!insert (competition27, match35) into CompetitionMatch

!new MatchReport('matchReport35')
!matchReport35.duration := 60
!matchReport35.scoreVisitor := 1
!matchReport35.scoreLocal := 1

!insert (match35, matchReport35) into MatchMatchReport

!new MatchPlayer('matchPlayer62')
!matchPlayer62.booked := false
!matchPlayer62.goals := 1
!matchPlayer62.rating := 8

!new MatchPlayer('matchPlayer63')
!matchPlayer63.booked := false
!matchPlayer63.goals := 1
!matchPlayer63.rating := 9

!new MatchPlayer('matchPlayer64')
!matchPlayer64.booked := false
!matchPlayer64.goals := 0
!matchPlayer64.rating := 7

!insert (player67, matchPlayer62) into PlayerMatch
!insert (player68, matchPlayer63) into PlayerMatch
!insert (player69, matchPlayer64) into PlayerMatch

!insert (match35, matchPlayer62) into MatchMatchPlayer
!insert (match35, matchPlayer63) into MatchMatchPlayer
!insert (match35, matchPlayer64) into MatchMatchPlayer

!new MatchPlayerPosition('mpp62')
!mpp62.positionName := #MIDFIELDER
!mpp62.number := 8

!new MatchPlayerPosition('mpp63')
!mpp63.positionName := #FORWARD
!mpp63.number := 11

!new MatchPlayerPosition('mpp64')
!mpp64.positionName := #GOALKEEPER
!mpp64.number := 1

!insert (matchPlayer62, mpp62) into MatchPlayerMatchPlayerPosition
!insert (matchPlayer63, mpp63) into MatchPlayerMatchPlayerPosition
!insert (matchPlayer64, mpp64) into MatchPlayerMatchPlayerPosition

!new MatchEvent('matchEvent100')
!matchEvent100.eventType := #GOAL
!matchEvent100.time := 30

!new MatchEvent('matchEvent101')
!matchEvent101.eventType := #GOAL
!matchEvent101.time := 48

!insert (match35, matchEvent100) into MatchMatchEvent
!insert (match35, matchEvent101) into MatchMatchEvent

!new TrainingSession('trainingSession52')
!trainingSession52.date := '18-11-2023'
!trainingSession52.location := 'Navi Mumbai Arena Training Grounds'
!trainingSession52.purpose := 'Enhance technical skills and foster community spirit.'

!new TrainingSession('trainingSession53')
!trainingSession53.date := '18-11-2023'
!trainingSession53.location := 'Green Point Stadium Practice Area'
!trainingSession53.purpose := 'Community-based skill enhancement and resilience building.'

!insert (teamBH, trainingSession52) into TeamTraining
!insert (teamBI, trainingSession53) into TeamTraining

!new TrainingNotes('trainingNote52')
!trainingNote52.note := 'Players showed improved communication and teamwork, creating a supportive community environment.'
!trainingNote52.date := '18-11-2023'

!new TrainingNotes('trainingNote53')
!trainingNote53.note := 'Enhanced local engagement and skill cooperation.'
!trainingNote53.date := '18-11-2023'

!insert (trainingSession52, trainingNote52) into TrainingTrainingNotes
!insert (trainingSession53, trainingNote53) into TrainingTrainingNotes

!new TrainingObjective('trainingObjective50')
!trainingObjective50.areaToImprove := 'Interpersonal Skills'
!trainingObjective50.startDate := '15-11-2023'
!trainingObjective50.endDate := '20-11-2023'
!trainingObjective50.success := true

!new TrainingObjective('trainingObjective51')
!trainingObjective51.areaToImprove := 'Technical Skills'
!trainingObjective51.startDate := '15-11-2023'
!trainingObjective51.endDate := '20-11-2023'
!trainingObjective51.success := true

!insert (trainingObjective50, player67) into TrainingObjectivePlayer
!insert (trainingObjective51, player68) into TrainingObjectivePlayer
!insert (trainingObjective51, player69) into TrainingObjectivePlayer

!new TrainingFailedToAttend('trainingFail22')
!trainingFail22.reason := 'Attending exams'

!insert (trainingFail22, player69) into FailedPlayer
!insert (trainingSession52, trainingFail22) into TrainingFailded
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 128 | 0.00% |
| Multiplicities Errors | 1 | 32 | 3.13% |
| Invariants Errors | 0 | 4 | 0.00% |

| Multiplicities Errors | 
|---| 
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `trainingObjective51' of class `TrainingObjective' is connected to 2 objects of class `Player'
  at association end `player' but the multiplicity is specified as `1'.
```

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 9 | 0.00% |

## Category edge
```
!new Club('clubAR')
!clubAR.name := 'Eruption FC'
!clubAR.homeGround := 'Lava Flow Stadium'
!clubAR.chairman := 'Mr. Ignatius Molten'

!new Club('clubAS')
!clubAS.name := 'Magma Mavericks'
!clubAS.homeGround := 'Volcanic Rim Arena'
!clubAS.chairman := 'Ms. Petra Basalt'

!new Team('teamAR')
!teamAR.name := 'Lava Leapers'

!new Team('teamAS')
!teamAS.name := 'Ashen Warriors'

!insert (clubAR, teamAR) into ClubTeam
!insert (clubAS, teamAS) into ClubTeam

!new Player('player50')
!player50.name := 'Molten Dash'
!player50.age := 23
!player50.bestFoot := #RIGHT
!player50.phoneNumber := '+5432167890'

!new Player('player51')
!player51.name := 'Obsidian Guard'
!player51.age := 31
!player51.bestFoot := #LEFT
!player51.phoneNumber := '+6789012345'

!insert (teamAR, player50) into TeamPlayer
!insert (teamAS, player51) into TeamPlayer

!new Position('position104')
!position104.positionName := #FORWARD

!new Position('position106')
!position106.positionName := #DEFENDER

!new Position('position100')
!position100.positionName := #MIDFIELDER

!insert (player50, position104) into PlayerPositions
!insert (player51, position106) into PlayerPositions
!insert (player51, position100) into PlayerPositions

!new Competition('competition19')
!competition19.name := 'Volcanic Shield Series'
!competition19.type := 'Tournament'

!new Match('match25')
!match25.date := '21/02/2023'
!match25.homeAway := false

!insert (teamAS, match25) into LocalMatch
!insert (teamAR, match25) into VisitorMatch
!insert (competition19, match25) into CompetitionMatch

!new MatchReport('matchReport25')
!matchReport25.duration := 45
!matchReport25.scoreVisitor := 1
!matchReport25.scoreLocal := 2

!insert (match25, matchReport25) into MatchMatchReport

!new MatchEvent('matchEvent68')
!matchEvent68.eventType := #GOAL
!matchEvent68.time := 10

!new MatchEvent('matchEvent69')
!matchEvent69.eventType := #GOAL
!matchEvent69.time := 24

!new MatchEvent('matchEvent70')
!matchEvent70.eventType := #GOAL
!matchEvent70.time := 38

!new MatchEvent('matchEvent71')
!matchEvent71.eventType := #FOUL
!matchEvent71.time := 40

!insert (match25, matchEvent68) into MatchMatchEvent
!insert (match25, matchEvent69) into MatchMatchEvent
!insert (match25, matchEvent70) into MatchMatchEvent
!insert (match25, matchEvent71) into MatchMatchEvent

!new MatchPlayer('matchPlayer45')
!matchPlayer45.booked := false
!matchPlayer45.goals := 1
!matchPlayer45.rating := 7

!new MatchPlayer('matchPlayer46')
!matchPlayer46.booked := false
!matchPlayer46.goals := 1
!matchPlayer46.rating := 8

!insert (player50, matchPlayer45) into PlayerMatch
!insert (player51, matchPlayer46) into PlayerMatch

!insert (match25, matchPlayer45) into MatchMatchPlayer
!insert (match25, matchPlayer46) into MatchMatchPlayer

!new MatchPlayerPosition('position107')
!position107.positionName := #FORWARD
!position107.number := 9

!new MatchPlayerPosition('position108')
!position108.positionName := #DEFENDER
!position108.number := 3

!insert (matchPlayer45, position107) into MatchPlayerMatchPlayerPosition
!insert (matchPlayer46, position108) into MatchPlayerMatchPlayerPosition

!new TrainingSession('trainingSession38')
!trainingSession38.date := '18/02/2023'
!trainingSession38.location := 'Lava Flow Stadium'
!trainingSession38.purpose := 'Adapting to Volcanic Ash Air Quality'

!insert (teamAR, trainingSession38) into TeamTraining

!new TrainingSession('trainingSession39')
!trainingSession39.date := '19/02/2023'
!trainingSession39.location := 'Volcanic Rim Arena'
!trainingSession39.purpose := 'Defensive Techniques in Low Visibility'

!insert (teamAS, trainingSession39) into TeamTraining

!new TrainingNotes('trainingNote38')
!trainingNote38.note := 'Enhanced respiratory techniques improved coping with reduced air quality.'
!trainingNote38.date := '18/02/2023'

!new TrainingNotes('trainingNote39')
!trainingNote39.note := 'Focus on handling unpredictable visibility and staying composed.'
!trainingNote39.date := '19/02/2023'

!insert (trainingSession38, trainingNote38) into TrainingTrainingNotes
!insert (trainingSession39, trainingNote39) into TrainingTrainingNotes

!new TrainingFailedToAttend('trainingFail15')
!trainingFail15.reason := 'Health precautions due to air conditions'

!insert (trainingFail15, player51) into FailedPlayer
!insert (trainingSession38, trainingFail15) into TrainingFailded

!new TrainingObjective('trainingObjective37')
!trainingObjective37.areaToImprove := 'Visibility and Handling Volcanic Particles'
!trainingObjective37.startDate := '16/02/2023'
!trainingObjective37.endDate := '20/02/2023'
!trainingObjective37.success := false

!new TrainingObjective('trainingObjective38')
!trainingObjective38.areaToImprove := 'Defensive Coverage in Harsh Conditions'
!trainingObjective38.startDate := '16/02/2023'
!trainingObjective38.endDate := '20/02/2023'
!trainingObjective38.success := true

!insert (trainingObjective37, player50) into TrainingObjectivePlayer
!insert (trainingObjective38, player51) into TrainingObjectivePlayer

!new PlayerNotes('playerNote20')
!playerNote20.note := 'Speed and agility reduced under ash fallout.'
!playerNote20.date := '19/02/2023'

!insert (player50, playerNote20) into PlayerPlayerNotes

!new PlayerNotes('playerNote21')
!playerNote21.note := 'Strong defensive skills even in low visibility.'
!playerNote21.date := '17/02/2023'

!insert (player51, playerNote21) into PlayerPlayerNotes
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 127 | 0.00% |
| Multiplicities Errors | 0 | 31 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 11 | 0.00% |

## Category invalid
```
!new Club('clubBD')
!clubBD.name := 'Savannah Lions FC'
!clubBD.homeGround := "Lion's Roar Stadium, Accra"
!clubBD.chairman := 'Kwame Mensah'

!new Club('clubBE')
!clubBE.name := 'Riverine Sharks FC'
!clubBE.homeGround := 'Shark Tank Arena, Lagos'
!clubBE.chairman := 'Funmi Adebayo'

!new Team('teamBD')
!teamBD.name := 'Lion Cubs'

!new Team('teamBE')
!teamBE.name := 'Sharklings'

!insert (clubBD, teamBD) into ClubTeam
!insert (clubBE, teamBE) into ClubTeam

!new Player('player63')
!player63.name := 'Kofi Aidoo'
!player63.age := 20
!player63.bestFoot := #LEFT
!player63.phoneNumber := '+233 201 123 456'

!new Player('player64')
!player64.name := 'Chika Okeke'
!player64.age := 23
!player64.bestFoot := #RIGHT
!player64.phoneNumber := '+234 701 678 910'

!insert (teamBD, player63) into TeamPlayer
!insert (teamBE, player64) into TeamPlayer

!new Position('position100')
!position100.positionName := #MIDFIELDER

!new Position('position109')
!position109.positionName := #FORWARD

!new Position('position106')
!position106.positionName := #DEFENDER

!insert (player63, position100) into PlayerPositions
!insert (player63, position109) into PlayerPositions
!insert (player64, position106) into PlayerPositions

!new Competition('competition25')
!competition25.name := 'West African Amateur League Cup'
!competition25.type := 'League'

!new Match('match32')
!match32.date := '12th February 2024'
!match32.homeAway := false

!insert (teamBD, match32) into VisitorMatch
!insert (teamBE, match32) into VisitorMatch
!insert (competition25, match32) into CompetitionMatch

!new MatchReport('matchReport32')
!matchReport32.duration := 90
!matchReport32.scoreVisitor := 1
!matchReport32.scoreLocal := 1

!insert (match32, matchReport32) into MatchMatchReport

!new MatchEvent('matchEvent92')
!matchEvent92.eventType := #GOAL
!matchEvent92.time := 30

!new MatchEvent('matchEvent93')
!matchEvent93.eventType := #FOUL
!matchEvent93.time := 60

!insert (match32, matchEvent92) into MatchMatchEvent
!insert (match32, matchEvent93) into MatchMatchEvent

!new MatchPlayer('matchPlayer58')
!matchPlayer58.booked := false
!matchPlayer58.goals := 1
!matchPlayer58.rating := 8

!new MatchPlayer('matchPlayer59')
!matchPlayer59.booked := true
!matchPlayer59.goals := 0
!matchPlayer59.rating := 6

!insert (player63, matchPlayer58) into PlayerMatch
!insert (player64, matchPlayer59) into PlayerMatch

!insert (match32, matchPlayer58) into MatchMatchPlayer
!insert (match32, matchPlayer59) into MatchMatchPlayer

!new MatchPlayerPosition('mpp58')
!mpp58.positionName := #FORWARD
!mpp58.number := 10

!new MatchPlayerPosition('mpp59')
!mpp59.positionName := #DEFENDER
!mpp59.number := 5

!insert (matchPlayer58, mpp58) into MatchPlayerMatchPlayerPosition
!insert (matchPlayer59, mpp59) into MatchPlayerMatchPlayerPosition

!new MatchNote('matchNote21')
!matchNote21.note := 'Heightened confusion ensued as both squads acted under the notion of away game protocols, impacting tactics.'
!matchNote21.date := '13th February 2024'

!insert (match32, matchNote21) into MatchMatchNote

!new TrainingSession('trainingSession49')
!trainingSession49.date := '16th February 2024'
!trainingSession49.location := "Lion's Roar Practice Field"
!trainingSession49.purpose := 'Re-alignment of team strategies and communication protocols post-confusion.'

!insert (teamBD, trainingSession49) into TeamTraining

!new TrainingFailedToAttend('trainingFail21')
!trainingFail21.reason := 'Inconsistent fixture postings and misinformation led to absenteeism among key players.'

!insert (trainingFail21, player64) into FailedPlayer
!insert (trainingSession49, trainingFail21) into TrainingFailded

!new TrainingNotes('trainingNote49')
!trainingNote49.note := 'Attendance mismatches led to adaptive training focused on improving team communication and scheduling acumen.'
!trainingNote49.date := '17th February 2024'

!insert (trainingSession49, trainingNote49) into TrainingTrainingNotes
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 5 | 24 | 20.83% |
| Invariants Errors (Not included on General) | 1 | 4 | 25.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `player64' of class `Player' is connected to 0 objects of class `TrainingObjective'
  at association end `trainingObjective' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `player63' of class `Player' is connected to 0 objects of class `TrainingObjective'
  at association end `trainingObjective' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `VisitorMatch':
  Object `match32' of class `Match' is connected to 2 objects of class `Team'
  at association end `visitor' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `TeamTraining':
  Object `teamBE' of class `Team' is connected to 0 objects of class `TrainingSession'
  at association end `trainingSession' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `LocalMatch':
  Object `match32' of class `Match' is connected to 0 objects of class `Team'
  at association end `local' but the multiplicity is specified as `1'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (4) `MatchReport::SumOfScoresEqualsGoals': FAILED.
```

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 4 | 4 | 100.00% |

| Failed dates | 
|---| 
```
12th February 2024
```
```
13th February 2024
```
```
16th February 2024
```
```
17th February 2024
```

## Generation 6 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 2 | 613 | 0.33% |
| Multiplicities Errors | 2 | 128 | 1.56% |
| Invariants Errors | 0 | 16 | 0.00% |

| Syntax Errors | 
|---| 
```
<input>:line 1:6 mismatched input '.' expecting :=
```
```
<input>:line 1:6 mismatched input '.' expecting :=
```

| Multiplicities Errors | 
|---| 
```
Multiplicity constraint violation in association `PlayerPositions':
  Object `position117' of class `Position' is connected to 2 objects of class `Player'
  at association end `player' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `trainingObjective51' of class `TrainingObjective' is connected to 2 objects of class `Player'
  at association end `player' but the multiplicity is specified as `1'.
```

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 5 | 24 | 20.83% |
| Invariants Errors (Not included on General) | 1 | 4 | 25.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `player64' of class `Player' is connected to 0 objects of class `TrainingObjective'
  at association end `trainingObjective' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `player63' of class `Player' is connected to 0 objects of class `TrainingObjective'
  at association end `trainingObjective' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `VisitorMatch':
  Object `match32' of class `Match' is connected to 2 objects of class `Team'
  at association end `visitor' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `TeamTraining':
  Object `teamBE' of class `Team' is connected to 0 objects of class `TrainingSession'
  at association end `trainingSession' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `LocalMatch':
  Object `match32' of class `Match' is connected to 0 objects of class `Team'
  at association end `local' but the multiplicity is specified as `1'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (4) `MatchReport::SumOfScoresEqualsGoals': FAILED.
```

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 4 | 48 | 8.33% |

| Failed dates | 
|---| 
```
12th February 2024
```
```
13th February 2024
```
```
16th February 2024
```
```
17th February 2024
```

# Summary for all generations
| Summary | Value | 
|---|---| 
| Model | GPT_4O | 
| Type | CoT | 
| System | football | 
| Number of generations | 6 | 

| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 6 | 3656 | 0.16% |
| Multiplicities Errors | 11 | 744 | 1.48% |
| Invariants Errors | 6 | 96 | 6.25% |

| Syntax Errors | 
|---| 
```
<input>:1:0: generation of expression `#RIGHT_WING' failed, with following error:
```
```
<input>:line 1:6 mismatched input '.' expecting :=
```
```
<input>:1:0: generation of expression `#ATTACKING_MIDFIELDER' failed, with following error:
```
```
<input>:line 1:6 mismatched input '.' expecting :=
```
```
<input>:line 1:6 mismatched input '.' expecting :=
```
```
<input>:line 1:6 mismatched input '.' expecting :=
```

| Multiplicities Errors | 
|---| 
```
Multiplicity constraint violation in association `TeamTraining':
  Object `teamJ' of class `Team' is connected to 0 objects of class `TrainingSession'
  at association end `trainingSession' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `TeamTraining':
  Object `teamD' of class `Team' is connected to 0 objects of class `TrainingSession'
  at association end `trainingSession' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `player20' of class `Player' is connected to 0 objects of class `TrainingObjective'
  at association end `trainingObjective' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `player32' of class `Player' is connected to 0 objects of class `TrainingObjective'
  at association end `trainingObjective' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `trainingObjective27' of class `TrainingObjective' is connected to 2 objects of class `Player'
  at association end `player' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `VisitorMatch':
  Object `match16' of class `Match' is connected to 0 objects of class `Team'
  at association end `visitor' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `VisitorMatch':
  Object `match17' of class `Match' is connected to 0 objects of class `Team'
  at association end `visitor' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `TeamTraining':
  Object `teamAG' of class `Team' is connected to 0 objects of class `TrainingSession'
  at association end `trainingSession' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `TeamPlayer':
  Object `teamAW' of class `Team' is connected to 0 objects of class `Player'
  at association end `player' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `PlayerPositions':
  Object `position117' of class `Position' is connected to 2 objects of class `Player'
  at association end `player' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `trainingObjective51' of class `TrainingObjective' is connected to 2 objects of class `Player'
  at association end `player' but the multiplicity is specified as `1'.
```

| Invariants Errors | 
|---| 
```
checking invariant (4) `MatchReport::SumOfScoresEqualsGoals': FAILED.
```
```
checking invariant (4) `MatchReport::SumOfScoresEqualsGoals': FAILED.
```
```
checking invariant (4) `MatchReport::SumOfScoresEqualsGoals': FAILED.
```
```
checking invariant (4) `MatchReport::SumOfScoresEqualsGoals': FAILED.
```
```
checking invariant (4) `MatchReport::SumOfScoresEqualsGoals': FAILED.
```
```
checking invariant (4) `MatchReport::SumOfScoresEqualsGoals': FAILED.
```

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 39 | 154 | 25.32% |
| Invariants Errors (Not included on General) | 5 | 24 | 20.83% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `player1' of class `Player' is connected to 0 objects of class `TrainingObjective'
  at association end `trainingObjective' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `player2' of class `Player' is connected to 0 objects of class `TrainingObjective'
  at association end `trainingObjective' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `TeamTraining':
  Object `teamA' of class `Team' is connected to 0 objects of class `TrainingSession'
  at association end `trainingSession' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `TeamTraining':
  Object `teamB' of class `Team' is connected to 0 objects of class `TrainingSession'
  at association end `trainingSession' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `TeamTraining':
  Object `trainingSession1' of class `TrainingSession' is connected to 0 objects of class `Team'
  at association end `team' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `CompetitionMatch':
  Object `match1' of class `Match' is connected to 0 objects of class `Competition'
  at association end `competition' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `player17' of class `Player' is connected to 0 objects of class `TrainingObjective'
  at association end `trainingObjective' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `player16' of class `Player' is connected to 0 objects of class `TrainingObjective'
  at association end `trainingObjective' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `player15' of class `Player' is connected to 0 objects of class `TrainingObjective'
  at association end `trainingObjective' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `PlayerPositions':
  Object `position40' of class `Position' is connected to 2 objects of class `Player'
  at association end `player' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `PlayerPositions':
  Object `position41' of class `Position' is connected to 2 objects of class `Player'
  at association end `player' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `MatchPlayerMatchPlayerPosition':
  Object `matchPlayer14' of class `MatchPlayer' is connected to 0 objects of class `MatchPlayerPosition'
  at association end `matchPlayerPosition' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `MatchPlayerMatchPlayerPosition':
  Object `matchPlayer15' of class `MatchPlayer' is connected to 0 objects of class `MatchPlayerPosition'
  at association end `matchPlayerPosition' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `MatchPlayerMatchPlayerPosition':
  Object `matchPlayer16' of class `MatchPlayer' is connected to 0 objects of class `MatchPlayerPosition'
  at association end `matchPlayerPosition' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `TeamTraining':
  Object `teamO' of class `Team' is connected to 0 objects of class `TrainingSession'
  at association end `trainingSession' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `CompetitionMatch':
  Object `match8' of class `Match' is connected to 0 objects of class `Competition'
  at association end `competition' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `player28' of class `Player' is connected to 0 objects of class `TrainingObjective'
  at association end `trainingObjective' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `player27' of class `Player' is connected to 0 objects of class `TrainingObjective'
  at association end `trainingObjective' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `player29' of class `Player' is connected to 0 objects of class `TrainingObjective'
  at association end `trainingObjective' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `MatchPlayerMatchPlayerPosition':
  Object `matchPlayer24' of class `MatchPlayer' is connected to 0 objects of class `MatchPlayerPosition'
  at association end `matchPlayerPosition' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `MatchPlayerMatchPlayerPosition':
  Object `matchPlayer25' of class `MatchPlayer' is connected to 0 objects of class `MatchPlayerPosition'
  at association end `matchPlayerPosition' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `MatchPlayerMatchPlayerPosition':
  Object `matchPlayer23' of class `MatchPlayer' is connected to 0 objects of class `MatchPlayerPosition'
  at association end `matchPlayerPosition' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `TeamTraining':
  Object `teamZ' of class `Team' is connected to 0 objects of class `TrainingSession'
  at association end `trainingSession' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `player46' of class `Player' is connected to 0 objects of class `TrainingObjective'
  at association end `trainingObjective' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `player45' of class `Player' is connected to 0 objects of class `TrainingObjective'
  at association end `trainingObjective' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `player44' of class `Player' is connected to 0 objects of class `TrainingObjective'
  at association end `trainingObjective' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `PlayerPositions':
  Object `position100' of class `Position' is connected to 2 objects of class `Player'
  at association end `player' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `PlayerPositions':
  Object `position97' of class `Position' is connected to 2 objects of class `Player'
  at association end `player' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `TeamTraining':
  Object `teamAO' of class `Team' is connected to 0 objects of class `TrainingSession'
  at association end `trainingSession' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `CompetitionMatch':
  Object `match22' of class `Match' is connected to 0 objects of class `Competition'
  at association end `competition' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `player57' of class `Player' is connected to 0 objects of class `TrainingObjective'
  at association end `trainingObjective' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `player56' of class `Player' is connected to 0 objects of class `TrainingObjective'
  at association end `trainingObjective' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `PlayerPositions':
  Object `position100' of class `Position' is connected to 2 objects of class `Player'
  at association end `player' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `TeamTraining':
  Object `teamAY' of class `Team' is connected to 0 objects of class `TrainingSession'
  at association end `trainingSession' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `player64' of class `Player' is connected to 0 objects of class `TrainingObjective'
  at association end `trainingObjective' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `TrainingObjectivePlayer':
  Object `player63' of class `Player' is connected to 0 objects of class `TrainingObjective'
  at association end `trainingObjective' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `VisitorMatch':
  Object `match32' of class `Match' is connected to 2 objects of class `Team'
  at association end `visitor' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `TeamTraining':
  Object `teamBE' of class `Team' is connected to 0 objects of class `TrainingSession'
  at association end `trainingSession' but the multiplicity is specified as `1..*'.
```
```
Multiplicity constraint violation in association `LocalMatch':
  Object `match32' of class `Match' is connected to 0 objects of class `Team'
  at association end `local' but the multiplicity is specified as `1'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (4) `MatchReport::SumOfScoresEqualsGoals': FAILED.
```
```
checking invariant (4) `MatchReport::SumOfScoresEqualsGoals': FAILED.
```
```
checking invariant (4) `MatchReport::SumOfScoresEqualsGoals': FAILED.
```
```
checking invariant (4) `MatchReport::SumOfScoresEqualsGoals': FAILED.
```
```
checking invariant (4) `MatchReport::SumOfScoresEqualsGoals': FAILED.
```

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 24 | 286 | 8.39% |

| Failed dates | 
|---| 
```
10th October 2023
```
```
11th October 2023
```
```
12th October 2023
```
```
20th November 2023
```
```
21st November 2023
```
```
22nd November 2023
```
```
22nd November 2023
```
```
5th December 2023
```
```
6th December 2023
```
```
7th December 2023
```
```
7th December 2023
```
```
15th January 2024
```
```
16th January 2024
```
```
17th January 2024
```
```
17th January 2024
```
```
18th January 2024
```
```
30th March 2024
```
```
31st March 2024
```
```
1st April 2024
```
```
2nd April 2024
```
```
12th February 2024
```
```
13th February 2024
```
```
16th February 2024
```
```
17th February 2024
```

