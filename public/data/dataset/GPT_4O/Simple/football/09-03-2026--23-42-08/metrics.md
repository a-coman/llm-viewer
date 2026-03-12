# Generation 1
```
!new Club('club1')
!club1.name := 'City Warriors'
!club1.homeGround := 'Victory Stadium'
!club1.chairman := 'John Doe'

!new Club('club2')
!club2.name := 'River Hawks'
!club2.homeGround := 'Sky Arena'
!club2.chairman := 'Jane Smith'

!new Team('team1')
!team1.name := 'Warrior Aces'
!insert (club1, team1) into ClubTeam

!new Team('team2')
!team2.name := 'Hawk Invincibles'
!insert (club2, team2) into ClubTeam

!new Competition('championship')
!championship.name := 'National League'
!championship.type := 'League'

!new Match('match1')
!match1.date := '2023-10-21'
!match1.homeAway := true
!insert (championship, match1) into CompetitionMatch
!insert (team1, match1) into LocalMatch
!insert (team2, match1) into VisitorMatch

!new MatchReport('report1')
!report1.duration := 90
!report1.scoreVisitor := 2
!report1.scoreLocal := 1
!insert (match1, report1) into MatchMatchReport

!new Player('player1')
!player1.name := 'Alex Turner'
!player1.age := 25
!player1.bestFoot := #RIGHT
!player1.phoneNumber := '1234567890'
!insert (team1, player1) into TeamPlayer

!new Player('player2')
!player2.name := 'Brian O\'Connor'
!player2.age := 29
!player2.bestFoot := #LEFT
!player2.phoneNumber := '0987654321'
!insert (team2, player2) into TeamPlayer

!new Position('position1')
!position1.positionName := #FORWARD
!insert (player1, position1) into PlayerPositions

!new Position('position2')
!position2.positionName := #DEFENDER
!insert (player2, position2) into PlayerPositions

!new MatchPlayer('matchPlayer1')
!matchPlayer1.booked := false
!matchPlayer1.goals := 1
!matchPlayer1.rating := 8
!insert (player1, matchPlayer1) into PlayerMatch
!insert (match1, matchPlayer1) into MatchMatchPlayer

!new MatchPlayer('matchPlayer2')
!matchPlayer2.booked := true
!matchPlayer2.goals := 0
!matchPlayer2.rating := 6
!insert (player2, matchPlayer2) into PlayerMatch
!insert (match1, matchPlayer2) into MatchMatchPlayer

!new MatchPlayerPosition('matchPlayerPosition1')
!matchPlayerPosition1.positionName := #FORWARD
!matchPlayerPosition1.number := 9
!insert (matchPlayer1, matchPlayerPosition1) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('matchPlayerPosition2')
!matchPlayerPosition2.positionName := #DEFENDER
!matchPlayerPosition2.number := 4
!insert (matchPlayer2, matchPlayerPosition2) into MatchPlayerMatchPlayerPosition

!new MatchEvent('event1')
!event1.eventType := #GOAL
!event1.time := 30
!insert (match1, event1) into MatchMatchEvent

!new MatchEvent('event2')
!event2.eventType := #GOAL
!event2.time := 45
!insert (match1, event2) into MatchMatchEvent

!new MatchEvent('event3')
!event3.eventType := #GOAL
!event3.time := 75
!insert (match1, event3) into MatchMatchEvent

!new TrainingSession('training1')
!training1.date := '2023-10-18'
!training1.location := 'Main Field'
!training1.purpose := 'Tactical Analysis'
!insert (team1, training1) into TeamTraining

!new TrainingSession('training2')
!training2.date := '2023-11-01'
!training2.location := 'Secondary Field'
!training2.purpose := 'Stamina Building'
!insert (team2, training2) into TeamTraining

!new TrainingNotes('trainingNote1')
!trainingNote1.note := 'Improved on set pieces'
!trainingNote1.date := '2023-10-18'
!insert (training1, trainingNote1) into TrainingTrainingNotes

!new TrainingNotes('trainingNote2')
!trainingNote2.note := 'Focus on endurance'
!trainingNote2.date := '2023-11-01'
!insert (training2, trainingNote2) into TrainingTrainingNotes

!new TrainingObjective('objective1')
!objective1.areaToImprove := 'Defense'
!objective1.startDate := '2023-09-01'
!objective1.endDate := '2023-12-01'
!objective1.success := false
!insert (objective1, player1) into TrainingObjectivePlayer

!new TrainingObjective('objective2')
!objective2.areaToImprove := 'Shooting Accuracy'
!objective2.startDate := '2023-09-10'
!objective2.endDate := '2023-11-10'
!objective2.success := true
!insert (objective2, player2) into TrainingObjectivePlayer
```
## Generation 1 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 108 | 0.00% |
| Multiplicities Errors | 0 | 25 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 9 | 0.00% |

# Generation 2
```
!new Club('club3')
!club3.name := 'Mountain Eagles'
!club3.homeGround := 'Eagle Nest Stadium'
!club3.chairman := 'Michael Green'

!new Club('club4')
!club4.name := 'Valley Tigers'
!club4.homeGround := 'Tiger Den Arena'
!club4.chairman := 'Laura White'

!new Team('team3')
!team3.name := 'Eagle Flyers'
!insert (club3, team3) into ClubTeam

!new Team('team4')
!team4.name := 'Tiger Strikers'
!insert (club4, team4) into ClubTeam

!new Competition('friendlyCup')
!friendlyCup.name := 'Friendly Cup'
!friendlyCup.type := 'Exhibition'

!new Match('match2')
!match2.date := '2023-11-25'
!match2.homeAway := false
!insert (friendlyCup, match2) into CompetitionMatch
!insert (team3, match2) into LocalMatch
!insert (team4, match2) into VisitorMatch

!new MatchReport('report2')
!report2.duration := 90
!report2.scoreVisitor := 3
!report2.scoreLocal := 2
!insert (match2, report2) into MatchMatchReport

!new Player('player3')
!player3.name := 'Charlie Hudson'
!player3.age := 22
!player3.bestFoot := #BOTH
!player3.phoneNumber := '2345678901'
!insert (team3, player3) into TeamPlayer

!new Player('player4')
!player4.name := 'Dylan Brown'
!player4.age := 27
!player4.bestFoot := #RIGHT
!player4.phoneNumber := '3456789012'
!insert (team4, player4) into TeamPlayer

!new Position('position3')
!position3.positionName := #MIDFIELDER
!insert (player3, position3) into PlayerPositions

!new Position('position4')
!position4.positionName := #GOALKEEPER
!insert (player4, position4) into PlayerPositions

!new MatchPlayer('matchPlayer3')
!matchPlayer3.booked := true
!matchPlayer3.goals := 2
!matchPlayer3.rating := 9
!insert (player3, matchPlayer3) into PlayerMatch
!insert (match2, matchPlayer3) into MatchMatchPlayer

!new MatchPlayer('matchPlayer4')
!matchPlayer4.booked := false
!matchPlayer4.goals := 1
!matchPlayer4.rating := 7
!insert (player4, matchPlayer4) into PlayerMatch
!insert (match2, matchPlayer4) into MatchMatchPlayer

!new MatchPlayerPosition('matchPlayerPosition3')
!matchPlayerPosition3.positionName := #MIDFIELDER
!matchPlayerPosition3.number := 8
!insert (matchPlayer3, matchPlayerPosition3) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('matchPlayerPosition4')
!matchPlayerPosition4.positionName := #GOALKEEPER
!matchPlayerPosition4.number := 1
!insert (matchPlayer4, matchPlayerPosition4) into MatchPlayerMatchPlayerPosition

!new MatchEvent('event4')
!event4.eventType := #GOAL
!event4.time := 15
!insert (match2, event4) into MatchMatchEvent

!new MatchEvent('event5')
!event5.eventType := #GOAL
!event5.time := 42
!insert (match2, event5) into MatchMatchEvent

!new MatchEvent('event6')
!event6.eventType := #GOAL
!event6.time := 67
!insert (match2, event6) into MatchMatchEvent

!new MatchEvent('event7')
!event7.eventType := #GOAL
!event7.time := 70
!insert (match2, event7) into MatchMatchEvent

!new MatchEvent('event8')
!event8.eventType := #GOAL
!event8.time := 85
!insert (match2, event8) into MatchMatchEvent

!new TrainingSession('training3')
!training3.date := '2023-10-05'
!training3.location := 'Eagle Park'
!training3.purpose := 'Formation Drills'
!insert (team3, training3) into TeamTraining

!new TrainingSession('training4')
!training4.date := '2023-10-20'
!training4.location := 'Tiger Camp'
!training4.purpose := 'Goalkeeping Practice'
!insert (team4, training4) into TeamTraining

!new TrainingNotes('trainingNote3')
!trainingNote3.note := 'Midfield agility exercises'
!trainingNote3.date := '2023-10-05'
!insert (training3, trainingNote3) into TrainingTrainingNotes

!new TrainingNotes('trainingNote4')
!trainingNote4.note := 'Improvement in response time'
!trainingNote4.date := '2023-10-20'
!insert (training4, trainingNote4) into TrainingTrainingNotes

!new TrainingObjective('objective3')
!objective3.areaToImprove := 'Ball Control'
!objective3.startDate := '2023-09-01'
!objective3.endDate := '2023-12-01'
!objective3.success := false
!insert (objective3, player3) into TrainingObjectivePlayer

!new TrainingObjective('objective4')
!objective4.areaToImprove := 'Shot Blocking'
!objective4.startDate := '2023-09-15'
!objective4.endDate := '2023-11-15'
!objective4.success := true
!insert (objective4, player4) into TrainingObjectivePlayer
```
## Generation 2 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 116 | 0.00% |
| Multiplicities Errors | 0 | 27 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 9 | 0.00% |

# Generation 3
```
!new Club('club5')
!club5.name := 'Forest Wolves'
!club5.homeGround := 'Forest Grounds'
!club5.chairman := 'Oliver Stone'

!new Club('club6')
!club6.name := 'Desert Foxes'
!club6.homeGround := 'Desert Arena'
!club6.chairman := 'Emma Carter'

!new Team('team5')
!team5.name := 'Wolf Pack'
!insert (club5, team5) into ClubTeam

!new Team('team6')
!team6.name := 'Fox Squad'
!insert (club6, team6) into ClubTeam

!new Competition('cupChampionship')
!cupChampionship.name := 'Cup Championship'
!cupChampionship.type := 'Knockout'

!new Match('match3')
!match3.date := '2023-12-05'
!match3.homeAway := true
!insert (cupChampionship, match3) into CompetitionMatch
!insert (team5, match3) into LocalMatch
!insert (team6, match3) into VisitorMatch

!new MatchReport('report3')
!report3.duration := 120
!report3.scoreVisitor := 2
!report3.scoreLocal := 4
!insert (match3, report3) into MatchMatchReport

!new Player('player5')
!player5.name := 'Lucas Hunt'
!player5.age := 24
!player5.bestFoot := #LEFT
!player5.phoneNumber := '4567890123'
!insert (team5, player5) into TeamPlayer

!new Player('player6')
!player6.name := 'Sophie Turner'
!player6.age := 21
!player6.bestFoot := #RIGHT
!player6.phoneNumber := '5678901234'
!insert (team6, player6) into TeamPlayer

!new Position('position5')
!position5.positionName := #FORWARD
!insert (player5, position5) into PlayerPositions

!new Position('position6')
!position6.positionName := #DEFENDER
!insert (player6, position6) into PlayerPositions

!new MatchPlayer('matchPlayer5')
!matchPlayer5.booked := false
!matchPlayer5.goals := 2
!matchPlayer5.rating := 9
!insert (player5, matchPlayer5) into PlayerMatch
!insert (match3, matchPlayer5) into MatchMatchPlayer

!new MatchPlayer('matchPlayer6')
!matchPlayer6.booked := true
!matchPlayer6.goals := 1
!matchPlayer6.rating := 7
!insert (player6, matchPlayer6) into PlayerMatch
!insert (match3, matchPlayer6) into MatchMatchPlayer

!new MatchPlayerPosition('matchPlayerPosition5')
!matchPlayerPosition5.positionName := #FORWARD
!matchPlayerPosition5.number := 11
!insert (matchPlayer5, matchPlayerPosition5) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('matchPlayerPosition6')
!matchPlayerPosition6.positionName := #DEFENDER
!matchPlayerPosition6.number := 3
!insert (matchPlayer6, matchPlayerPosition6) into MatchPlayerMatchPlayerPosition

!new MatchEvent('event9')
!event9.eventType := #GOAL
!event9.time := 18
!insert (match3, event9) into MatchMatchEvent

!new MatchEvent('event10')
!event10.eventType := #GOAL
!event10.time := 36
!insert (match3, event10) into MatchMatchEvent

!new MatchEvent('event11')
!event11.eventType := #GOAL
!event11.time := 58
!insert (match3, event11) into MatchMatchEvent

!new MatchEvent('event12')
!event12.eventType := #GOAL
!event12.time := 77
!insert (match3, event12) into MatchMatchEvent

!new MatchEvent('event13')
!event13.eventType := #GOAL
!event13.time := 101
!insert (match3, event13) into MatchMatchEvent

!new MatchEvent('event14')
!event14.eventType := #GOAL
!event14.time := 115
!insert (match3, event14) into MatchMatchEvent

!new TrainingSession('training5')
!training5.date := '2023-11-15'
!training5.location := 'Wolf Camp'
!training5.purpose := 'Endurance Training'
!insert (team5, training5) into TeamTraining

!new TrainingSession('training6')
!training6.date := '2023-11-20'
!training6.location := 'Fox Ground'
!training6.purpose := 'Speed Drills'
!insert (team6, training6) into TeamTraining

!new TrainingNotes('trainingNote5')
!trainingNote5.note := 'Improved stamina levels'
!trainingNote5.date := '2023-11-15'
!insert (training5, trainingNote5) into TrainingTrainingNotes

!new TrainingNotes('trainingNote6')
!trainingNote6.note := 'Increased agility on the pitch'
!trainingNote6.date := '2023-11-20'
!insert (training6, trainingNote6) into TrainingTrainingNotes

!new TrainingObjective('objective5')
!objective5.areaToImprove := 'Team Coordination'
!objective5.startDate := '2023-10-01'
!objective5.endDate := '2023-12-15'
!objective5.success := true
!insert (objective5, player5) into TrainingObjectivePlayer

!new TrainingObjective('objective6')
!objective6.areaToImprove := 'Agility Improvement'
!objective6.startDate := '2023-10-10'
!objective6.endDate := '2023-12-20'
!objective6.success := false
!insert (objective6, player6) into TrainingObjectivePlayer
```
## Generation 3 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 120 | 0.00% |
| Multiplicities Errors | 0 | 28 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 9 | 0.00% |

# Generation 4
```
!new Club('club7')
!club7.name := 'Ocean Sharks'
!club7.homeGround := 'Shark Reef Stadium'
!club7.chairman := 'Alice Waters'

!new Club('club8')
!club8.name := 'Mountain Lions'
!club8.homeGround := 'Lions Den'
!club8.chairman := 'Ethan Ridge'

!new Team('team7')
!team7.name := 'Shark Attack'
!insert (club7, team7) into ClubTeam

!new Team('team8')
!team8.name := 'Lion Roar'
!insert (club8, team8) into ClubTeam

!new Competition('winterGames')
!winterGames.name := 'Winter Games'
!winterGames.type := 'Tournament'

!new Match('match4')
!match4.date := '2023-12-22'
!match4.homeAway := true
!insert (winterGames, match4) into CompetitionMatch
!insert (team7, match4) into LocalMatch
!insert (team8, match4) into VisitorMatch

!new MatchReport('report4')
!report4.duration := 90
!report4.scoreVisitor := 1
!report4.scoreLocal := 2
!insert (match4, report4) into MatchMatchReport

!new Player('player7')
!player7.name := 'Nina Ocean'
!player7.age := 23
!player7.bestFoot := #BOTH
!player7.phoneNumber := '6789012345'
!insert (team7, player7) into TeamPlayer

!new Player('player8')
!player8.name := 'Oscar Ridge'
!player8.age := 28
!player8.bestFoot := #LEFT
!player8.phoneNumber := '7890123456'
!insert (team8, player8) into TeamPlayer

!new Position('position7')
!position7.positionName := #MIDFIELDER
!insert (player7, position7) into PlayerPositions

!new Position('position8')
!position8.positionName := #FORWARD
!insert (player8, position8) into PlayerPositions

!new MatchPlayer('matchPlayer7')
!matchPlayer7.booked := false
!matchPlayer7.goals := 1
!matchPlayer7.rating := 8
!insert (player7, matchPlayer7) into PlayerMatch
!insert (match4, matchPlayer7) into MatchMatchPlayer

!new MatchPlayer('matchPlayer8')
!matchPlayer8.booked := true
!matchPlayer8.goals := 1
!matchPlayer8.rating := 7
!insert (player8, matchPlayer8) into PlayerMatch
!insert (match4, matchPlayer8) into MatchMatchPlayer

!new MatchPlayerPosition('matchPlayerPosition7')
!matchPlayerPosition7.positionName := #MIDFIELDER
!matchPlayerPosition7.number := 10
!insert (matchPlayer7, matchPlayerPosition7) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('matchPlayerPosition8')
!matchPlayerPosition8.positionName := #FORWARD
!matchPlayerPosition8.number := 7
!insert (matchPlayer8, matchPlayerPosition8) into MatchPlayerMatchPlayerPosition

!new MatchEvent('event15')
!event15.eventType := #GOAL
!event15.time := 20
!insert (match4, event15) into MatchMatchEvent

!new MatchEvent('event16')
!event16.eventType := #GOAL
!event16.time := 50
!insert (match4, event16) into MatchMatchEvent

!new MatchEvent('event17')
!event17.eventType := #GOAL
!event17.time := 75
!insert (match4, event17) into MatchMatchEvent

!new TrainingSession('training7')
!training7.date := '2023-11-30'
!training7.location := 'Shark Tank Arena'
!training7.purpose := 'Defense Coordination'
!insert (team7, training7) into TeamTraining

!new TrainingSession('training8')
!training8.date := '2023-12-10'
!training8.location := 'Lion Camp'
!training8.purpose := 'Offensive Strategies'
!insert (team8, training8) into TeamTraining

!new TrainingNotes('trainingNote7')
!trainingNote7.note := 'Strong defensive drills practiced'
!trainingNote7.date := '2023-11-30'
!insert (training7, trainingNote7) into TrainingTrainingNotes

!new TrainingNotes('trainingNote8')
!trainingNote8.note := 'Developed quick attacking plays'
!trainingNote8.date := '2023-12-10'
!insert (training8, trainingNote8) into TrainingTrainingNotes

!new TrainingObjective('objective7')
!objective7.areaToImprove := 'Team Defense'
!objective7.startDate := '2023-09-10'
!objective7.endDate := '2023-12-25'
!objective7.success := true
!insert (objective7, player7) into TrainingObjectivePlayer

!new TrainingObjective('objective8')
!objective8.areaToImprove := 'Finishing Skills'
!objective8.startDate := '2023-10-15'
!objective8.endDate := '2023-12-20'
!objective8.success := false
!insert (objective8, player8) into TrainingObjectivePlayer
```
## Generation 4 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 108 | 0.00% |
| Multiplicities Errors | 0 | 25 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 9 | 0.00% |

# Generation 5
```
!new Club('club9')
!club9.name := 'Sky Falcons'
!club9.homeGround := 'Falcon Field'
!club9.chairman := 'Sophia Carter'

!new Club('club10')
!club10.name := 'Sun Dragons'
!club10.homeGround := 'Dragon Arena'
!club10.chairman := 'Liam Edwards'

!new Team('team9')
!team9.name := 'Falcon Flyers'
!insert (club9, team9) into ClubTeam

!new Team('team10')
!team10.name := 'Dragon Warriors'
!insert (club10, team10) into ClubTeam

!new Competition('springCup')
!springCup.name := 'Spring Cup'
!springCup.type := 'Knockout'

!new Match('match5')
!match5.date := '2024-03-15'
!match5.homeAway := false
!insert (springCup, match5) into CompetitionMatch
!insert (team9, match5) into LocalMatch
!insert (team10, match5) into VisitorMatch

!new MatchReport('report5')
!report5.duration := 90
!report5.scoreVisitor := 0
!report5.scoreLocal := 1
!insert (match5, report5) into MatchMatchReport

!new Player('player9')
!player9.name := 'Elliot Sky'
!player9.age := 26
!player9.bestFoot := #RIGHT
!player9.phoneNumber := '8901234567'
!insert (team9, player9) into TeamPlayer

!new Player('player10')
!player10.name := 'Isabella Dawn'
!player10.age := 22
!player10.bestFoot := #LEFT
!player10.phoneNumber := '9012345678'
!insert (team10, player10) into TeamPlayer

!new Position('position9')
!position9.positionName := #GOALKEEPER
!insert (player9, position9) into PlayerPositions

!new Position('position10')
!position10.positionName := #MIDFIELDER
!insert (player10, position10) into PlayerPositions

!new MatchPlayer('matchPlayer9')
!matchPlayer9.booked := false
!matchPlayer9.goals := 0
!matchPlayer9.rating := 8
!insert (player9, matchPlayer9) into PlayerMatch
!insert (match5, matchPlayer9) into MatchMatchPlayer

!new MatchPlayer('matchPlayer10')
!matchPlayer10.booked := true
!matchPlayer10.goals := 0
!matchPlayer10.rating := 6
!insert (player10, matchPlayer10) into PlayerMatch
!insert (match5, matchPlayer10) into MatchMatchPlayer

!new MatchPlayerPosition('matchPlayerPosition9')
!matchPlayerPosition9.positionName := #GOALKEEPER
!matchPlayerPosition9.number := 1
!insert (matchPlayer9, matchPlayerPosition9) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('matchPlayerPosition10')
!matchPlayerPosition10.positionName := #MIDFIELDER
!matchPlayerPosition10.number := 8
!insert (matchPlayer10, matchPlayerPosition10) into MatchPlayerMatchPlayerPosition

!new MatchEvent('event18')
!event18.eventType := #GOAL
!event18.time := 60
!insert (match5, event18) into MatchMatchEvent

!new TrainingSession('training9')
!training9.date := '2024-02-05'
!training9.location := 'Falcon Nest'
!training9.purpose := 'Tactical Training'
!insert (team9, training9) into TeamTraining

!new TrainingSession('training10')
!training10.date := '2024-02-15'
!training10.location := 'Dragon Lair'
!training10.purpose := 'Team Building'
!insert (team10, training10) into TeamTraining

!new TrainingNotes('trainingNote9')
!trainingNote9.note := 'Enhanced ball control skills'
!trainingNote9.date := '2024-02-05'
!insert (training9, trainingNote9) into TrainingTrainingNotes

!new TrainingNotes('trainingNote10')
!trainingNote10.note := 'Improved team communication'
!trainingNote10.date := '2024-02-15'
!insert (training10, trainingNote10) into TrainingTrainingNotes

!new TrainingObjective('objective9')
!objective9.areaToImprove := 'Passing Accuracy'
!objective9.startDate := '2023-12-01'
!objective9.endDate := '2024-03-01'
!objective9.success := true
!insert (objective9, player9) into TrainingObjectivePlayer

!new TrainingObjective('objective10')
!objective10.areaToImprove := 'Stamina'
!objective10.startDate := '2023-12-10'
!objective10.endDate := '2024-03-10'
!objective10.success := true
!insert (objective10, player10) into TrainingObjectivePlayer
```
## Generation 5 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 100 | 0.00% |
| Multiplicities Errors | 0 | 23 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 9 | 0.00% |

# Generation 6
```
!new Club('club11')
!club11.name := 'River Dolphins'
!club11.homeGround := 'Dolphin Cove'
!club11.chairman := 'Jacob Waters'

!new Club('club12')
!club12.name := 'Hill Panthers'
!club12.homeGround := 'Panther Hill'
!club12.chairman := 'Mia Hill'

!new Team('team11')
!team11.name := 'Dolphin Divers'
!insert (club11, team11) into ClubTeam

!new Team('team12')
!team12.name := 'Panther Prowlers'
!insert (club12, team12) into ClubTeam

!new Competition('autumnLeague')
!autumnLeague.name := 'Autumn League'
!autumnLeague.type := 'League'

!new Match('match6')
!match6.date := '2024-09-20'
!match6.homeAway := true
!insert (autumnLeague, match6) into CompetitionMatch
!insert (team11, match6) into LocalMatch
!insert (team12, match6) into VisitorMatch

!new MatchReport('report6')
!report6.duration := 90
!report6.scoreVisitor := 3
!report6.scoreLocal := 2
!insert (match6, report6) into MatchMatchReport

!new Player('player11')
!player11.name := 'James River'
!player11.age := 24
!player11.bestFoot := #LEFT
!player11.phoneNumber := '9123456780'
!insert (team11, player11) into TeamPlayer

!new Player('player12')
!player12.name := 'Olivia Panther'
!player12.age := 25
!player12.bestFoot := #RIGHT
!player12.phoneNumber := '8234567891'
!insert (team12, player12) into TeamPlayer

!new Position('position11')
!position11.positionName := #DEFENDER
!insert (player11, position11) into PlayerPositions

!new Position('position12')
!position12.positionName := #FORWARD
!insert (player12, position12) into PlayerPositions

!new MatchPlayer('matchPlayer11')
!matchPlayer11.booked := true
!matchPlayer11.goals := 1
!matchPlayer11.rating := 6
!insert (player11, matchPlayer11) into PlayerMatch
!insert (match6, matchPlayer11) into MatchMatchPlayer

!new MatchPlayer('matchPlayer12')
!matchPlayer12.booked := false
!matchPlayer12.goals := 2
!matchPlayer12.rating := 9
!insert (player12, matchPlayer12) into PlayerMatch
!insert (match6, matchPlayer12) into MatchMatchPlayer

!new MatchPlayerPosition('matchPlayerPosition11')
!matchPlayerPosition11.positionName := #DEFENDER
!matchPlayerPosition11.number := 5
!insert (matchPlayer11, matchPlayerPosition11) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('matchPlayerPosition12')
!matchPlayerPosition12.positionName := #FORWARD
!matchPlayerPosition12.number := 9
!insert (matchPlayer12, matchPlayerPosition12) into MatchPlayerMatchPlayerPosition

!new MatchEvent('event19')
!event19.eventType := #GOAL
!event19.time := 33
!insert (match6, event19) into MatchMatchEvent

!new MatchEvent('event20')
!event20.eventType := #GOAL
!event20.time := 47
!insert (match6, event20) into MatchMatchEvent

!new MatchEvent('event21')
!event21.eventType := #GOAL
!event21.time := 60
!insert (match6, event21) into MatchMatchEvent

!new MatchEvent('event22')
!event22.eventType := #GOAL
!event22.time := 75
!insert (match6, event22) into MatchMatchEvent

!new MatchEvent('event23')
!event23.eventType := #GOAL
!event23.time := 82
!insert (match6, event23) into MatchMatchEvent

!new TrainingSession('training11')
!training11.date := '2024-08-10'
!training11.location := 'Dolphin Pond'
!training11.purpose := 'Rescue Drills'
!insert (team11, training11) into TeamTraining

!new TrainingSession('training12')
!training12.date := '2024-08-15'
!training12.location := 'Panther Peak'
!training12.purpose := 'Agility Training'
!insert (team12, training12) into TeamTraining

!new TrainingNotes('trainingNote11')
!trainingNote11.note := 'Practice defensive formation'
!trainingNote11.date := '2024-08-10'
!insert (training11, trainingNote11) into TrainingTrainingNotes

!new TrainingNotes('trainingNote12')
!trainingNote12.note := 'Sprint and flexibility exercises'
!trainingNote12.date := '2024-08-15'
!insert (training12, trainingNote12) into TrainingTrainingNotes

!new TrainingObjective('objective11')
!objective11.areaToImprove := 'Tackling'
!objective11.startDate := '2024-06-01'
!objective11.endDate := '2024-09-01'
!objective11.success := false
!insert (objective11, player11) into TrainingObjectivePlayer

!new TrainingObjective('objective12')
!objective12.areaToImprove := 'Finishing'
!objective12.startDate := '2024-06-05'
!objective12.endDate := '2024-09-05'
!objective12.success := true
!insert (objective12, player12) into TrainingObjectivePlayer
```
## Generation 6 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 116 | 0.00% |
| Multiplicities Errors | 0 | 27 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 9 | 0.00% |

# Generation 7
```
!new Club('club13')
!club13.name := 'Desert Hawks'
!club13.homeGround := 'Hawk Nest'
!club13.chairman := 'George Blake'

!new Club('club14')
!club14.name := 'Glacier Bears'
!club14.homeGround := 'Bear Den'
!club14.chairman := 'Hannah Frost'

!new Team('team13')
!team13.name := 'Hawk Talons'
!insert (club13, team13) into ClubTeam

!new Team('team14')
!team14.name := 'Bear Claws'
!insert (club14, team14) into ClubTeam

!new Competition('summerTournament')
!summerTournament.name := 'Summer Tournament'
!summerTournament.type := 'Round Robin'

!new Match('match7')
!match7.date := '2024-07-30'
!match7.homeAway := true
!insert (summerTournament, match7) into CompetitionMatch
!insert (team13, match7) into LocalMatch
!insert (team14, match7) into VisitorMatch

!new MatchReport('report7')
!report7.duration := 90
!report7.scoreVisitor := 1
!report7.scoreLocal := 3
!insert (match7, report7) into MatchMatchReport

!new Player('player13')
!player13.name := 'Sam Desert'
!player13.age := 28
!player13.bestFoot := #RIGHT
!player13.phoneNumber := '7345678901'
!insert (team13, player13) into TeamPlayer

!new Player('player14')
!player14.name := 'Lara Glacier'
!player14.age := 30
!player14.bestFoot := #LEFT
!player14.phoneNumber := '8456789012'
!insert (team14, player14) into TeamPlayer

!new Position('position13')
!position13.positionName := #FORWARD
!insert (player13, position13) into PlayerPositions

!new Position('position14')
!position14.positionName := #GOALKEEPER
!insert (player14, position14) into PlayerPositions

!new MatchPlayer('matchPlayer13')
!matchPlayer13.booked := false
!matchPlayer13.goals := 2
!matchPlayer13.rating := 8
!insert (player13, matchPlayer13) into PlayerMatch
!insert (match7, matchPlayer13) into MatchMatchPlayer

!new MatchPlayer('matchPlayer14')
!matchPlayer14.booked := true
!matchPlayer14.goals := 0
!matchPlayer14.rating := 6
!insert (player14, matchPlayer14) into PlayerMatch
!insert (match7, matchPlayer14) into MatchMatchPlayer

!new MatchPlayerPosition('matchPlayerPosition13')
!matchPlayerPosition13.positionName := #FORWARD
!matchPlayerPosition13.number := 11
!insert (matchPlayer13, matchPlayerPosition13) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('matchPlayerPosition14')
!matchPlayerPosition14.positionName := #GOALKEEPER
!matchPlayerPosition14.number := 1
!insert (matchPlayer14, matchPlayerPosition14) into MatchPlayerMatchPlayerPosition

!new MatchEvent('event24')
!event24.eventType := #GOAL
!event24.time := 10
!insert (match7, event24) into MatchMatchEvent

!new MatchEvent('event25')
!event25.eventType := #GOAL
!event25.time := 40
!insert (match7, event25) into MatchMatchEvent

!new MatchEvent('event26')
!event26.eventType := #GOAL
!event26.time := 70
!insert (match7, event26) into MatchMatchEvent

!new MatchEvent('event27')
!event27.eventType := #GOAL
!event27.time := 80
!insert (match7, event27) into MatchMatchEvent

!new TrainingSession('training13')
!training13.date := '2024-06-15'
!training13.location := 'Desert Outpost'
!training13.purpose := 'Offensive Tactics'
!insert (team13, training13) into TeamTraining

!new TrainingSession('training14')
!training14.date := '2024-06-25'
!training14.location := 'Glacier Rink'
!training14.purpose := 'Defensive Strategies'
!insert (team14, training14) into TeamTraining

!new TrainingNotes('trainingNote13')
!trainingNote13.note := 'Worked on quick transitions'
!trainingNote13.date := '2024-06-15'
!insert (training13, trainingNote13) into TrainingTrainingNotes

!new TrainingNotes('trainingNote14')
!trainingNote14.note := 'Focused on blocking and positioning'
!trainingNote14.date := '2024-06-25'
!insert (training14, trainingNote14) into TrainingTrainingNotes

!new TrainingObjective('objective13')
!objective13.areaToImprove := 'Attack Coordination'
!objective13.startDate := '2024-04-01'
!objective13.endDate := '2024-07-01'
!objective13.success := true
!insert (objective13, player13) into TrainingObjectivePlayer

!new TrainingObjective('objective14')
!objective14.areaToImprove := 'Goalkeeping Reflexes'
!objective14.startDate := '2024-04-10'
!objective14.endDate := '2024-07-10'
!objective14.success := false
!insert (objective14, player14) into TrainingObjectivePlayer
```
## Generation 7 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 112 | 0.00% |
| Multiplicities Errors | 0 | 26 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 9 | 0.00% |

# Generation 8
```
!new Club('club15')
!club15.name := 'Thunder Eagles'
!club15.homeGround := 'Eagle Mountain'
!club15.chairman := 'Eric Thunder'

!new Club('club16')
!club16.name := 'Wind Tigers'
!club16.homeGround := 'Tiger Forest'
!club16.chairman := 'Natalie Breeze'

!new Team('team15')
!team15.name := 'Eagle Storm'
!insert (club15, team15) into ClubTeam

!new Team('team16')
!team16.name := 'Tiger Claws'
!insert (club16, team16) into ClubTeam

!new Competition('autumnSeries')
!autumnSeries.name := 'Autumn Series'
!autumnSeries.type := 'League'

!new Match('match8')
!match8.date := '2024-10-10'
!match8.homeAway := false
!insert (autumnSeries, match8) into CompetitionMatch
!insert (team15, match8) into LocalMatch
!insert (team16, match8) into VisitorMatch

!new MatchReport('report8')
!report8.duration := 90
!report8.scoreVisitor := 1
!report8.scoreLocal := 2
!insert (match8, report8) into MatchMatchReport

!new Player('player15')
!player15.name := 'Oliver Sky'
!player15.age := 23
!player15.bestFoot := #BOTH
!player15.phoneNumber := '6543210987'
!insert (team15, player15) into TeamPlayer

!new Player('player16')
!player16.name := 'Ava Wind'
!player16.age := 27
!player16.bestFoot := #LEFT
!player16.phoneNumber := '7654321098'
!insert (team16, player16) into TeamPlayer

!new Position('position15')
!position15.positionName := #MIDFIELDER
!insert (player15, position15) into PlayerPositions

!new Position('position16')
!position16.positionName := #DEFENDER
!insert (player16, position16) into PlayerPositions

!new MatchPlayer('matchPlayer15')
!matchPlayer15.booked := true
!matchPlayer15.goals := 1
!matchPlayer15.rating := 8
!insert (player15, matchPlayer15) into PlayerMatch
!insert (match8, matchPlayer15) into MatchMatchPlayer

!new MatchPlayer('matchPlayer16')
!matchPlayer16.booked := false
!matchPlayer16.goals := 0
!matchPlayer16.rating := 7
!insert (player16, matchPlayer16) into PlayerMatch
!insert (match8, matchPlayer16) into MatchMatchPlayer

!new MatchPlayerPosition('matchPlayerPosition15')
!matchPlayerPosition15.positionName := #MIDFIELDER
!matchPlayerPosition15.number := 8
!insert (matchPlayer15, matchPlayerPosition15) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('matchPlayerPosition16')
!matchPlayerPosition16.positionName := #DEFENDER
!matchPlayerPosition16.number := 4
!insert (matchPlayer16, matchPlayerPosition16) into MatchPlayerMatchPlayerPosition

!new MatchEvent('event28')
!event28.eventType := #GOAL
!event28.time := 20
!insert (match8, event28) into MatchMatchEvent

!new MatchEvent('event29')
!event29.eventType := #GOAL
!event29.time := 55
!insert (match8, event29) into MatchMatchEvent

!new MatchEvent('event30')
!event30.eventType := #GOAL
!event30.time := 75
!insert (match8, event30) into MatchMatchEvent

!new TrainingSession('training15')
!training15.date := '2024-09-01'
!training15.location := 'Eagle Arena'
!training15.purpose := 'Tactical Drills'
!insert (team15, training15) into TeamTraining

!new TrainingSession('training16')
!training16.date := '2024-09-10'
!training16.location := 'Tiger Field'
!training16.purpose := 'Strength Building'
!insert (team16, training16) into TeamTraining

!new TrainingNotes('trainingNote15')
!trainingNote15.note := 'Improved strategic movements'
!trainingNote15.date := '2024-09-01'
!insert (training15, trainingNote15) into TrainingTrainingNotes

!new TrainingNotes('trainingNote16')
!trainingNote16.note := 'Focused on endurance enhancement'
!trainingNote16.date := '2024-09-10'
!insert (training16, trainingNote16) into TrainingTrainingNotes

!new TrainingObjective('objective15')
!objective15.areaToImprove := 'Passing Skill'
!objective15.startDate := '2024-07-01'
!objective15.endDate := '2024-10-01'
!objective15.success := true
!insert (objective15, player15) into TrainingObjectivePlayer

!new TrainingObjective('objective16')
!objective16.areaToImprove := 'Physical Strength'
!objective16.startDate := '2024-07-05'
!objective16.endDate := '2024-10-05'
!objective16.success := false
!insert (objective16, player16) into TrainingObjectivePlayer
```
## Generation 8 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 108 | 0.00% |
| Multiplicities Errors | 0 | 25 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 9 | 0.00% |

# Generation 9
```
!new Club('club17')
!club17.name := 'Coastal Whales'
!club17.homeGround := 'Whale Bay Stadium'
!club17.chairman := 'Tom Coastal'

!new Club('club18')
!club18.name := 'Forest Owls'
!club18.homeGround := 'Owl Wood Arena'
!club18.chairman := 'Sophie Green'

!new Team('team17')
!team17.name := 'Whale Riders'
!insert (club17, team17) into ClubTeam

!new Team('team18')
!team18.name := 'Owl Wings'
!insert (club18, team18) into ClubTeam

!new Competition('winterClassic')
!winterClassic.name := 'Winter Classic'
!winterClassic.type := 'Tournament'

!new Match('match9')
!match9.date := '2025-01-12'
!match9.homeAway := true
!insert (winterClassic, match9) into CompetitionMatch
!insert (team17, match9) into LocalMatch
!insert (team18, match9) into VisitorMatch

!new MatchReport('report9')
!report9.duration := 90
!report9.scoreVisitor := 2
!report9.scoreLocal := 2
!insert (match9, report9) into MatchMatchReport

!new Player('player17')
!player17.name := 'Martin Wave'
!player17.age := 26
!player17.bestFoot := #RIGHT
!player17.phoneNumber := '9876543210'
!insert (team17, player17) into TeamPlayer

!new Player('player18')
!player18.name := 'Emily Branch'
!player18.age := 24
!player18.bestFoot := #BOTH
!player18.phoneNumber := '8765432109'
!insert (team18, player18) into TeamPlayer

!new Position('position17')
!position17.positionName := #FORWARD
!insert (player17, position17) into PlayerPositions

!new Position('position18')
!position18.positionName := #MIDFIELDER
!insert (player18, position18) into PlayerPositions

!new MatchPlayer('matchPlayer17')
!matchPlayer17.booked := false
!matchPlayer17.goals := 1
!matchPlayer17.rating := 7
!insert (player17, matchPlayer17) into PlayerMatch
!insert (match9, matchPlayer17) into MatchMatchPlayer

!new MatchPlayer('matchPlayer18')
!matchPlayer18.booked := false
!matchPlayer18.goals := 1
!matchPlayer18.rating := 8
!insert (player18, matchPlayer18) into PlayerMatch
!insert (match9, matchPlayer18) into MatchMatchPlayer

!new MatchPlayerPosition('matchPlayerPosition17')
!matchPlayerPosition17.positionName := #FORWARD
!matchPlayerPosition17.number := 9
!insert (matchPlayer17, matchPlayerPosition17) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('matchPlayerPosition18')
!matchPlayerPosition18.positionName := #MIDFIELDER
!matchPlayerPosition18.number := 6
!insert (matchPlayer18, matchPlayerPosition18) into MatchPlayerMatchPlayerPosition

!new MatchEvent('event31')
!event31.eventType := #GOAL
!event31.time := 15
!insert (match9, event31) into MatchMatchEvent

!new MatchEvent('event32')
!event32.eventType := #GOAL
!event32.time := 45
!insert (match9, event32) into MatchMatchEvent

!new MatchEvent('event33')
!event33.eventType := #GOAL
!event33.time := 60
!insert (match9, event33) into MatchMatchEvent

!new MatchEvent('event34')
!event34.eventType := #GOAL
!event34.time := 85
!insert (match9, event34) into MatchMatchEvent

!new TrainingSession('training17')
!training17.date := '2024-12-20'
!training17.location := 'Whale Cove'
!training17.purpose := 'Ball Control Techniques'
!insert (team17, training17) into TeamTraining

!new TrainingSession('training18')
!training18.date := '2024-12-22'
!training18.location := 'Owl Perch'
!training18.purpose := 'Stamina Boosters'
!insert (team18, training18) into TeamTraining

!new TrainingNotes('trainingNote17')
!trainingNote17.note := 'Practiced dribbling and close control'
!trainingNote17.date := '2024-12-20'
!insert (training17, trainingNote17) into TrainingTrainingNotes

!new TrainingNotes('trainingNote18')
!trainingNote18.note := 'Endurance training focused on long runs'
!trainingNote18.date := '2024-12-22'
!insert (training18, trainingNote18) into TrainingTrainingNotes

!new TrainingObjective('objective17')
!objective17.areaToImprove := 'Precision Passing'
!objective17.startDate := '2024-10-01'
!objective17.endDate := '2024-12-31'
!objective17.success := true
!insert (objective17, player17) into TrainingObjectivePlayer

!new TrainingObjective('objective18')
!objective18.areaToImprove := 'Speed and Agility'
!objective18.startDate := '2024-10-10'
!objective18.endDate := '2025-01-10'
!objective18.success := false
!insert (objective18, player18) into TrainingObjectivePlayer
```
## Generation 9 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 112 | 0.00% |
| Multiplicities Errors | 0 | 26 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 9 | 0.00% |

# Generation 10
```
!new Club('club19')
!club19.name := 'Lightning Strikers'
!club19.homeGround := 'Thunder Field'
!club19.chairman := 'Alice Storm'

!new Club('club20')
!club20.name := 'Volcano Vipers'
!club20.homeGround := 'Lava Heights'
!club20.chairman := 'Henry Blaze'

!new Team('team19')
!team19.name := 'Striker Zephyrs'
!insert (club19, team19) into ClubTeam

!new Team('team20')
!team20.name := 'Viper Flames'
!insert (club20, team20) into ClubTeam

!new Competition('springFestival')
!springFestival.name := 'Spring Festival'
!springFestival.type := 'Cup'

!new Match('match10')
!match10.date := '2025-04-05'
!match10.homeAway := false
!insert (springFestival, match10) into CompetitionMatch
!insert (team19, match10) into LocalMatch
!insert (team20, match10) into VisitorMatch

!new MatchReport('report10')
!report10.duration := 120
!report10.scoreVisitor := 1
!report10.scoreLocal := 1
!insert (match10, report10) into MatchMatchReport

!new Player('player19')
!player19.name := 'Liam Thunder'
!player19.age := 29
!player19.bestFoot := #RIGHT
!player19.phoneNumber := '7654321980'
!insert (team19, player19) into TeamPlayer

!new Player('player20')
!player20.name := 'Sophia Heat'
!player20.age := 31
!player20.bestFoot := #BOTH
!player20.phoneNumber := '6543219801'
!insert (team20, player20) into TeamPlayer

!new Position('position19')
!position19.positionName := #DEFENDER
!insert (player19, position19) into PlayerPositions

!new Position('position20')
!position20.positionName := #FORWARD
!insert (player20, position20) into PlayerPositions

!new MatchPlayer('matchPlayer19')
!matchPlayer19.booked := true
!matchPlayer19.goals := 0
!matchPlayer19.rating := 7
!insert (player19, matchPlayer19) into PlayerMatch
!insert (match10, matchPlayer19) into MatchMatchPlayer

!new MatchPlayer('matchPlayer20')
!matchPlayer20.booked := false
!matchPlayer20.goals := 1
!matchPlayer20.rating := 9
!insert (player20, matchPlayer20) into PlayerMatch
!insert (match10, matchPlayer20) into MatchMatchPlayer

!new MatchPlayerPosition('matchPlayerPosition19')
!matchPlayerPosition19.positionName := #DEFENDER
!matchPlayerPosition19.number := 5
!insert (matchPlayer19, matchPlayerPosition19) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('matchPlayerPosition20')
!matchPlayerPosition20.positionName := #FORWARD
!matchPlayerPosition20.number := 10
!insert (matchPlayer20, matchPlayerPosition20) into MatchPlayerMatchPlayerPosition

!new MatchEvent('event35')
!event35.eventType := #GOAL
!event35.time := 45
!insert (match10, event35) into MatchMatchEvent

!new MatchEvent('event36')
!event36.eventType := #GOAL
!event36.time := 95
!insert (match10, event36) into MatchMatchEvent

!new TrainingSession('training19')
!training19.date := '2025-03-01'
!training19.location := 'Lightning Dome'
!training19.purpose := 'Defensive Drills'
!insert (team19, training19) into TeamTraining

!new TrainingSession('training20')
!training20.date := '2025-03-15'
!training20.location := 'Lava Grounds'
!training20.purpose := 'Offensive Strategies'
!insert (team20, training20) into TeamTraining

!new TrainingNotes('trainingNote19')
!trainingNote19.note := 'Worked on defensive positioning and marking'
!trainingNote19.date := '2025-03-01'
!insert (training19, trainingNote19) into TrainingTrainingNotes

!new TrainingNotes('trainingNote20')
!trainingNote20.note := 'Focused on creating goal-scoring opportunities'
!trainingNote20.date := '2025-03-15'
!insert (training20, trainingNote20) into TrainingTrainingNotes

!new TrainingObjective('objective19')
!objective19.areaToImprove := 'Defensive Cohesion'
!objective19.startDate := '2025-01-01'
!objective19.endDate := '2025-04-01'
!objective19.success := false
!insert (objective19, player19) into TrainingObjectivePlayer

!new TrainingObjective('objective20')
!objective20.areaToImprove := 'Scoring Consistency'
!objective20.startDate := '2025-01-10'
!objective20.endDate := '2025-04-10'
!objective20.success := true
!insert (objective20, player20) into TrainingObjectivePlayer
```
## Generation 10 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 104 | 0.00% |
| Multiplicities Errors | 0 | 24 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 9 | 0.00% |

# Generation 11
```
!new Club('club21')
!club21.name := 'Oceanic Sharks'
!club21.homeGround := 'Shark Arena'
!club21.chairman := 'Linda Blue'

!new Club('club22')
!club22.name := 'Mountain Wolves'
!club22.homeGround := 'Wolf Peak Stadium'
!club22.chairman := 'John Snow'

!new Team('team21')
!team21.name := 'Shark Surge'
!insert (club21, team21) into ClubTeam

!new Team('team22')
!team22.name := 'Wolf Howl'
!insert (club22, team22) into ClubTeam

!new Competition('fallChampionship')
!fallChampionship.name := 'Fall Championship'
!fallChampionship.type := 'League'

!new Match('match11')
!match11.date := '2025-11-15'
!match11.homeAway := true
!insert (fallChampionship, match11) into CompetitionMatch
!insert (team21, match11) into LocalMatch
!insert (team22, match11) into VisitorMatch

!new MatchReport('report11')
!report11.duration := 90
!report11.scoreVisitor := 0
!report11.scoreLocal := 3
!insert (match11, report11) into MatchMatchReport

!new Player('player21')
!player21.name := 'Cora Sea'
!player21.age := 28
!player21.bestFoot := #LEFT
!player21.phoneNumber := '5678901234'
!insert (team21, player21) into TeamPlayer

!new Player('player22')
!player22.name := 'Ethan Mountain'
!player22.age := 30
!player22.bestFoot := #RIGHT
!player22.phoneNumber := '6789012345'
!insert (team22, player22) into TeamPlayer

!new Position('position21')
!position21.positionName := #GOALKEEPER
!insert (player21, position21) into PlayerPositions

!new Position('position22')
!position22.positionName := #MIDFIELDER
!insert (player22, position22) into PlayerPositions

!new MatchPlayer('matchPlayer21')
!matchPlayer21.booked := false
!matchPlayer21.goals := 0
!matchPlayer21.rating := 8
!insert (player21, matchPlayer21) into PlayerMatch
!insert (match11, matchPlayer21) into MatchMatchPlayer

!new MatchPlayer('matchPlayer22')
!matchPlayer22.booked := true
!matchPlayer22.goals := 0
!matchPlayer22.rating := 7
!insert (player22, matchPlayer22) into PlayerMatch
!insert (match11, matchPlayer22) into MatchMatchPlayer

!new MatchPlayerPosition('matchPlayerPosition21')
!matchPlayerPosition21.positionName := #GOALKEEPER
!matchPlayerPosition21.number := 1
!insert (matchPlayer21, matchPlayerPosition21) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('matchPlayerPosition22')
!matchPlayerPosition22.positionName := #MIDFIELDER
!matchPlayerPosition22.number := 8
!insert (matchPlayer22, matchPlayerPosition22) into MatchPlayerMatchPlayerPosition

!new MatchEvent('event37')
!event37.eventType := #GOAL
!event37.time := 22
!insert (match11, event37) into MatchMatchEvent

!new MatchEvent('event38')
!event38.eventType := #GOAL
!event38.time := 48
!insert (match11, event38) into MatchMatchEvent

!new MatchEvent('event39')
!event39.eventType := #GOAL
!event39.time := 70
!insert (match11, event39) into MatchMatchEvent

!new TrainingSession('training21')
!training21.date := '2025-10-05'
!training21.location := 'Shark Training Complex'
!training21.purpose := 'Set Pieces'
!insert (team21, training21) into TeamTraining

!new TrainingSession('training22')
!training22.date := '2025-10-10'
!training22.location := 'Wolf Training Ground'
!training22.purpose := 'Endurance Training'
!insert (team22, training22) into TeamTraining

!new TrainingNotes('trainingNote21')
!trainingNote21.note := 'Worked on corner kicks and free kicks'
!trainingNote21.date := '2025-10-05'
!insert (training21, trainingNote21) into TrainingTrainingNotes

!new TrainingNotes('trainingNote22')
!trainingNote22.note := 'Improved stamina through long distance runs'
!trainingNote22.date := '2025-10-10'
!insert (training22, trainingNote22) into TrainingTrainingNotes

!new TrainingObjective('objective21')
!objective21.areaToImprove := 'Aerial Duels'
!objective21.startDate := '2025-08-01'
!objective21.endDate := '2025-11-01'
!objective21.success := true
!insert (objective21, player21) into TrainingObjectivePlayer

!new TrainingObjective('objective22')
!objective22.areaToImprove := 'Ball Distribution'
!objective22.startDate := '2025-08-15'
!objective22.endDate := '2025-11-15'
!objective22.success := false
!insert (objective22, player22) into TrainingObjectivePlayer
```
## Generation 11 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 108 | 0.00% |
| Multiplicities Errors | 0 | 25 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 9 | 0.00% |

# Generation 12
```
!new Club('club23')
!club23.name := 'Polar Bears'
!club23.homeGround := 'Iceberg Arena'
!club23.chairman := 'Clara Frost'

!new Club('club24')
!club24.name := 'Desert Lions'
!club24.homeGround := 'Desert Mirage Ground'
!club24.chairman := 'Leo Sands'

!new Team('team23')
!team23.name := 'Bear Claws United'
!insert (club23, team23) into ClubTeam

!new Team('team24')
!team24.name := 'Lion Roar Squad'
!insert (club24, team24) into ClubTeam

!new Competition('stormCup')
!stormCup.name := 'Storm Cup'
!stormCup.type := 'Knockout Stage'

!new Match('match12')
!match12.date := '2025-06-18'
!match12.homeAway := true
!insert (stormCup, match12) into CompetitionMatch
!insert (team23, match12) into LocalMatch
!insert (team24, match12) into VisitorMatch

!new MatchReport('report12')
!report12.duration := 120
!report12.scoreVisitor := 2
!report12.scoreLocal := 3
!insert (match12, report12) into MatchMatchReport

!new Player('player23')
!player23.name := 'Fiona Snow'
!player23.age := 27
!player23.bestFoot := #LEFT
!player23.phoneNumber := '5678123456'
!insert (team23, player23) into TeamPlayer

!new Player('player24')
!player24.name := 'Carlos Heat'
!player24.age := 29
!player24.bestFoot := #RIGHT
!player24.phoneNumber := '6789234567'
!insert (team24, player24) into TeamPlayer

!new Position('position23')
!position23.positionName := #DEFENDER
!insert (player23, position23) into PlayerPositions

!new Position('position24')
!position24.positionName := #FORWARD
!insert (player24, position24) into PlayerPositions

!new MatchPlayer('matchPlayer23')
!matchPlayer23.booked := true
!matchPlayer23.goals := 0
!matchPlayer23.rating := 7
!insert (player23, matchPlayer23) into PlayerMatch
!insert (match12, matchPlayer23) into MatchMatchPlayer

!new MatchPlayer('matchPlayer24')
!matchPlayer24.booked := false
!matchPlayer24.goals := 1
!matchPlayer24.rating := 8
!insert (player24, matchPlayer24) into PlayerMatch
!insert (match12, matchPlayer24) into MatchMatchPlayer

!new MatchPlayerPosition('matchPlayerPosition23')
!matchPlayerPosition23.positionName := #DEFENDER
!matchPlayerPosition23.number := 3
!insert (matchPlayer23, matchPlayerPosition23) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('matchPlayerPosition24')
!matchPlayerPosition24.positionName := #FORWARD
!matchPlayerPosition24.number := 11
!insert (matchPlayer24, matchPlayerPosition24) into MatchPlayerMatchPlayerPosition

!new MatchEvent('event40')
!event40.eventType := #GOAL
!event40.time := 30
!insert (match12, event40) into MatchMatchEvent

!new MatchEvent('event41')
!event41.eventType := #GOAL
!event41.time := 60
!insert (match12, event41) into MatchMatchEvent

!new MatchEvent('event42')
!event42.eventType := #GOAL
!event42.time := 100
!insert (match12, event42) into MatchMatchEvent

!new MatchEvent('event43')
!event43.eventType := #GOAL
!event43.time := 110
!insert (match12, event43) into MatchMatchEvent

!new MatchEvent('event44')
!event44.eventType := #GOAL
!event44.time := 119
!insert (match12, event44) into MatchMatchEvent

!new TrainingSession('training23')
!training23.date := '2025-05-15'
!training23.location := 'Iceberg Dome'
!training23.purpose := 'Cold Weather Adaptation'
!insert (team23, training23) into TeamTraining

!new TrainingSession('training24')
!training24.date := '2025-05-20'
!training24.location := 'Desert Oasis'
!training24.purpose := 'Heat Stamina Drills'
!insert (team24, training24) into TeamTraining

!new TrainingNotes('trainingNote23')
!trainingNote23.note := 'Focused on endurance in low temperatures'
!trainingNote23.date := '2025-05-15'
!insert (training23, trainingNote23) into TrainingTrainingNotes

!new TrainingNotes('trainingNote24')
!trainingNote24.note := 'Improved heat tolerance and stamina'
!trainingNote24.date := '2025-05-20'
!insert (training24, trainingNote24) into TrainingTrainingNotes

!new TrainingObjective('objective23')
!objective23.areaToImprove := 'Ice Control'
!objective23.startDate := '2025-02-01'
!objective23.endDate := '2025-06-01'
!objective23.success := true
!insert (objective23, player23) into TrainingObjectivePlayer

!new TrainingObjective('objective24')
!objective24.areaToImprove := 'Sand Agility'
!objective24.startDate := '2025-02-15'
!objective24.endDate := '2025-06-15'
!objective24.success := false
!insert (objective24, player24) into TrainingObjectivePlayer
```
## Generation 12 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 116 | 0.00% |
| Multiplicities Errors | 0 | 27 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 9 | 0.00% |

# Generation 13
```
!new Club('club25')
!club25.name := 'Fire Phoenix'
!club25.homeGround := 'Phoenix Nest'
!club25.chairman := 'Raven Ash'

!new Club('club26')
!club26.name := 'Crystal Swans'
!club26.homeGround := 'Swan Lake Stadium'
!club26.chairman := 'Lily Pond'

!new Team('team25')
!team25.name := 'Phoenix Blaze'
!insert (club25, team25) into ClubTeam

!new Team('team26')
!team26.name := 'Swan Harmony'
!insert (club26, team26) into ClubTeam

!new Competition('gloryCup')
!gloryCup.name := 'Glory Cup'
!gloryCup.type := 'Single Elimination'

!new Match('match13')
!match13.date := '2025-08-22'
!match13.homeAway := false
!insert (gloryCup, match13) into CompetitionMatch
!insert (team25, match13) into LocalMatch
!insert (team26, match13) into VisitorMatch

!new MatchReport('report13')
!report13.duration := 90
!report13.scoreVisitor := 4
!report13.scoreLocal := 1
!insert (match13, report13) into MatchMatchReport

!new Player('player25')
!player25.name := 'Blaze Ember'
!player25.age := 21
!player25.bestFoot := #RIGHT
!player25.phoneNumber := '7896541230'
!insert (team25, player25) into TeamPlayer

!new Player('player26')
!player26.name := 'Crystal Dew'
!player26.age := 24
!player26.bestFoot := #LEFT
!player26.phoneNumber := '8907654321'
!insert (team26, player26) into TeamPlayer

!new Position('position25')
!position25.positionName := #MIDFIELDER
!insert (player25, position25) into PlayerPositions

!new Position('position26')
!position26.positionName := #GOALKEEPER
!insert (player26, position26) into PlayerPositions

!new MatchPlayer('matchPlayer25')
!matchPlayer25.booked := false
!matchPlayer25.goals := 1
!matchPlayer25.rating := 7
!insert (player25, matchPlayer25) into PlayerMatch
!insert (match13, matchPlayer25) into MatchMatchPlayer

!new MatchPlayer('matchPlayer26')
!matchPlayer26.booked := true
!matchPlayer26.goals := 0
!matchPlayer26.rating := 9
!insert (player26, matchPlayer26) into PlayerMatch
!insert (match13, matchPlayer26) into MatchMatchPlayer

!new MatchPlayerPosition('matchPlayerPosition25')
!matchPlayerPosition25.positionName := #MIDFIELDER
!matchPlayerPosition25.number := 6
!insert (matchPlayer25, matchPlayerPosition25) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('matchPlayerPosition26')
!matchPlayerPosition26.positionName := #GOALKEEPER
!matchPlayerPosition26.number := 1
!insert (matchPlayer26, matchPlayerPosition26) into MatchPlayerMatchPlayerPosition

!new MatchEvent('event45')
!event45.eventType := #GOAL
!event45.time := 5
!insert (match13, event45) into MatchMatchEvent

!new MatchEvent('event46')
!event46.eventType := #GOAL
!event46.time := 22
!insert (match13, event46) into MatchMatchEvent

!new MatchEvent('event47')
!event47.eventType := #GOAL
!event47.time := 33
!insert (match13, event47) into MatchMatchEvent

!new MatchEvent('event48')
!event48.eventType := #GOAL
!event48.time := 65
!insert (match13, event48) into MatchMatchEvent

!new MatchEvent('event49')
!event49.eventType := #GOAL
!event49.time := 80
!insert (match13, event49) into MatchMatchEvent

!new TrainingSession('training25')
!training25.date := '2025-07-10'
!training25.location := 'Phoenix Firehouse'
!training25.purpose := 'Attack Formation Building'
!insert (team25, training25) into TeamTraining

!new TrainingSession('training26')
!training26.date := '2025-07-15'
!training26.location := 'Swan Sanctuary'
!training26.purpose := 'Defensive Stable Stance'
!insert (team26, training26) into TeamTraining

!new TrainingNotes('trainingNote25')
!trainingNote25.note := 'Enhanced offensive coordination'
!trainingNote25.date := '2025-07-10'
!insert (training25, trainingNote25) into TrainingTrainingNotes

!new TrainingNotes('trainingNote26')
!trainingNote26.note := 'Prevented breaches in defensive lines'
!trainingNote26.date := '2025-07-15'
!insert (training26, trainingNote26) into TrainingTrainingNotes

!new TrainingObjective('objective25')
!objective25.areaToImprove := 'Agility in Transition Play'
!objective25.startDate := '2025-05-01'
!objective25.endDate := '2025-08-01'
!objective25.success := true
!insert (objective25, player25) into TrainingObjectivePlayer

!new TrainingObjective('objective26')
!objective26.areaToImprove := 'Defensive Reflexes'
!objective26.startDate := '2025-05-15'
!objective26.endDate := '2025-08-15'
!objective26.success := false
!insert (objective26, player26) into TrainingObjectivePlayer
```
## Generation 13 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 116 | 0.00% |
| Multiplicities Errors | 0 | 27 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 9 | 0.00% |

# Generation 14
```
!new Club('club27')
!club27.name := 'Moon Wolves'
!club27.homeGround := 'Lunar Arena'
!club27.chairman := 'Selena Crescent'

!new Club('club28')
!club28.name := 'Sun Warriors'
!club28.homeGround := 'Solar Stadium'
!club28.chairman := 'Ra Helios'

!new Team('team27')
!team27.name := 'Lunar Howls'
!insert (club27, team27) into ClubTeam

!new Team('team28')
!team28.name := 'Solar Flare'
!insert (club28, team28) into ClubTeam

!new Competition('galacticLeague')
!galacticLeague.name := 'Galactic League'
!galacticLeague.type := 'Round Robin'

!new Match('match14')
!match14.date := '2026-03-18'
!match14.homeAway := true
!insert (galacticLeague, match14) into CompetitionMatch
!insert (team27, match14) into LocalMatch
!insert (team28, match14) into VisitorMatch

!new MatchReport('report14')
!report14.duration := 90
!report14.scoreVisitor := 3
!report14.scoreLocal := 1
!insert (match14, report14) into MatchMatchReport

!new Player('player27')
!player27.name := 'Lyra Night'
!player27.age := 22
!player27.bestFoot := #LEFT
!player27.phoneNumber := '9432156780'
!insert (team27, player27) into TeamPlayer

!new Player('player28')
!player28.name := 'Apollo Blaze'
!player28.age := 30
!player28.bestFoot := #BOTH
!player28.phoneNumber := '8523697410'
!insert (team28, player28) into TeamPlayer

!new Position('position27')
!position27.positionName := #DEFENDER
!insert (player27, position27) into PlayerPositions

!new Position('position28')
!position28.positionName := #FORWARD
!insert (player28, position28) into PlayerPositions

!new MatchPlayer('matchPlayer27')
!matchPlayer27.booked := true
!matchPlayer27.goals := 0
!matchPlayer27.rating := 6
!insert (player27, matchPlayer27) into PlayerMatch
!insert (match14, matchPlayer27) into MatchMatchPlayer

!new MatchPlayer('matchPlayer28')
!matchPlayer28.booked := false
!matchPlayer28.goals := 2
!matchPlayer28.rating := 9
!insert (player28, matchPlayer28) into PlayerMatch
!insert (match14, matchPlayer28) into MatchMatchPlayer

!new MatchPlayerPosition('matchPlayerPosition27')
!matchPlayerPosition27.positionName := #DEFENDER
!matchPlayerPosition27.number := 4
!insert (matchPlayer27, matchPlayerPosition27) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('matchPlayerPosition28')
!matchPlayerPosition28.positionName := #FORWARD
!matchPlayerPosition28.number := 9
!insert (matchPlayer28, matchPlayerPosition28) into MatchPlayerMatchPlayerPosition

!new MatchEvent('event50')
!event50.eventType := #GOAL
!event50.time := 18
!insert (match14, event50) into MatchMatchEvent

!new MatchEvent('event51')
!event51.eventType := #GOAL
!event51.time := 47
!insert (match14, event51) into MatchMatchEvent

!new MatchEvent('event52')
!event52.eventType := #GOAL
!event52.time := 70
!insert (match14, event52) into MatchMatchEvent

!new MatchEvent('event53')
!event53.eventType := #GOAL
!event53.time := 82
!insert (match14, event53) into MatchMatchEvent

!new TrainingSession('training27')
!training27.date := '2026-02-10'
!training27.location := 'Moon Crater Field'
!training27.purpose := 'Defensive Coordination'
!insert (team27, training27) into TeamTraining

!new TrainingSession('training28')
!training28.date := '2026-02-15'
!training28.location := 'Sunrise Pitch'
!training28.purpose := 'Offensive Drills'
!insert (team28, training28) into TeamTraining

!new TrainingNotes('trainingNote27')
!trainingNote27.note := 'Improvement in defensive walls'
!trainingNote27.date := '2026-02-10'
!insert (training27, trainingNote27) into TrainingTrainingNotes

!new TrainingNotes('trainingNote28')
!trainingNote28.note := 'Efficiency in breakaway scoring'
!trainingNote28.date := '2026-02-15'
!insert (training28, trainingNote28) into TrainingTrainingNotes

!new TrainingObjective('objective27')
!objective27.areaToImprove := 'Team Synchronization'
!objective27.startDate := '2026-01-01'
!objective27.endDate := '2026-03-01'
!objective27.success := false
!insert (objective27, player27) into TrainingObjectivePlayer

!new TrainingObjective('objective28')
!objective28.areaToImprove := 'Goal Scoring'
!objective28.startDate := '2026-01-15'
!objective28.endDate := '2026-03-15'
!objective28.success := true
!insert (objective28, player28) into TrainingObjectivePlayer
```
## Generation 14 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 112 | 0.00% |
| Multiplicities Errors | 0 | 26 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 9 | 0.00% |

# Generation 15
```
!new Club('club29')
!club29.name := 'Emerald Eagles'
!club29.homeGround := 'Emerald Hills'
!club29.chairman := 'Jade Forest'

!new Club('club30')
!club30.name := 'Silver Foxes'
!club30.homeGround := 'Silver Den'
!club30.chairman := 'Sterling Hunt'

!new Team('team29')
!team29.name := 'Eagle Wings'
!insert (club29, team29) into ClubTeam

!new Team('team30')
!team30.name := 'Fox Flames'
!insert (club30, team30) into ClubTeam

!new Competition('diamondCup')
!diamondCup.name := 'Diamond Cup'
!diamondCup.type := 'Knockout'

!new Match('match15')
!match15.date := '2026-05-25'
!match15.homeAway := true
!insert (diamondCup, match15) into CompetitionMatch
!insert (team29, match15) into LocalMatch
!insert (team30, match15) into VisitorMatch

!new MatchReport('report15')
!report15.duration := 120
!report15.scoreVisitor := 2
!report15.scoreLocal := 2
!insert (match15, report15) into MatchMatchReport

!new Player('player29')
!player29.name := 'Ava Feather'
!player29.age := 26
!player29.bestFoot := #RIGHT
!player29.phoneNumber := '8745632109'
!insert (team29, player29) into TeamPlayer

!new Player('player30')
!player30.name := 'Leo Quick'
!player30.age := 28
!player30.bestFoot := #LEFT
!player30.phoneNumber := '9654321870'
!insert (team30, player30) into TeamPlayer

!new Position('position29')
!position29.positionName := #MIDFIELDER
!insert (player29, position29) into PlayerPositions

!new Position('position30')
!position30.positionName := #FORWARD
!insert (player30, position30) into PlayerPositions

!new MatchPlayer('matchPlayer29')
!matchPlayer29.booked := true
!matchPlayer29.goals := 1
!matchPlayer29.rating := 8
!insert (player29, matchPlayer29) into PlayerMatch
!insert (match15, matchPlayer29) into MatchMatchPlayer

!new MatchPlayer('matchPlayer30')
!matchPlayer30.booked := false
!matchPlayer30.goals := 1
!matchPlayer30.rating := 9
!insert (player30, matchPlayer30) into PlayerMatch
!insert (match15, matchPlayer30) into MatchMatchPlayer

!new MatchPlayerPosition('matchPlayerPosition29')
!matchPlayerPosition29.positionName := #MIDFIELDER
!matchPlayerPosition29.number := 7
!insert (matchPlayer29, matchPlayerPosition29) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('matchPlayerPosition30')
!matchPlayerPosition30.positionName := #FORWARD
!matchPlayerPosition30.number := 10
!insert (matchPlayer30, matchPlayerPosition30) into MatchPlayerMatchPlayerPosition

!new MatchEvent('event54')
!event54.eventType := #GOAL
!event54.time := 30
!insert (match15, event54) into MatchMatchEvent

!new MatchEvent('event55')
!event55.eventType := #GOAL
!event55.time := 52
!insert (match15, event55) into MatchMatchEvent

!new MatchEvent('event56')
!event56.eventType := #GOAL
!event56.time := 85
!insert (match15, event56) into MatchMatchEvent

!new MatchEvent('event57')
!event57.eventType := #GOAL
!event57.time := 110
!insert (match15, event57) into MatchMatchEvent

!new TrainingSession('training29')
!training29.date := '2026-04-20'
!training29.location := 'Eagle Summit'
!training29.purpose := 'Speed and Agility Training'
!insert (team29, training29) into TeamTraining

!new TrainingSession('training30')
!training30.date := '2026-04-18'
!training30.location := 'Fox Woodlands'
!training30.purpose := 'Precision Passing Drills'
!insert (team30, training30) into TeamTraining

!new TrainingNotes('trainingNote29')
!trainingNote29.note := 'Improved pace in tight spaces'
!trainingNote29.date := '2026-04-20'
!insert (training29, trainingNote29) into TrainingTrainingNotes

!new TrainingNotes('trainingNote30')
!trainingNote30.note := 'Enhanced accuracy and control in passes'
!trainingNote30.date := '2026-04-18'
!insert (training30, trainingNote30) into TrainingTrainingNotes

!new TrainingObjective('objective29')
!objective29.areaToImprove := 'Ball Control'
!objective29.startDate := '2026-02-01'
!objective29.endDate := '2026-05-01'
!objective29.success := true
!insert (objective29, player29) into TrainingObjectivePlayer

!new TrainingObjective('objective30')
!objective30.areaToImprove := 'Finishing Touch'
!objective30.startDate := '2026-02-15'
!objective30.endDate := '2026-05-15'
!objective30.success := false
!insert (objective30, player30) into TrainingObjectivePlayer
```
## Generation 15 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 112 | 0.00% |
| Multiplicities Errors | 0 | 26 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 9 | 0.00% |

# Generation 16
```
!new Club('club31')
!club31.name := 'River Dolphins'
!club31.homeGround := 'Aqua Arena'
!club31.chairman := 'Liam Waters'

!new Club('club32')
!club32.name := 'Shadow Panthers'
!club32.homeGround := 'Panther Cave'
!club32.chairman := 'Eva Night'

!new Team('team31')
!team31.name := 'Dolphin Glide'
!insert (club31, team31) into ClubTeam

!new Team('team32')
!team32.name := 'Panther Prowl'
!insert (club32, team32) into ClubTeam

!new Competition('aquaChallenge')
!aquaChallenge.name := 'Aqua Challenge'
!aquaChallenge.type := 'Tournament'

!new Match('match16')
!match16.date := '2026-09-12'
!match16.homeAway := false
!insert (aquaChallenge, match16) into CompetitionMatch
!insert (team31, match16) into LocalMatch
!insert (team32, match16) into VisitorMatch

!new MatchReport('report16')
!report16.duration := 90
!report16.scoreVisitor := 3
!report16.scoreLocal := 0
!insert (match16, report16) into MatchMatchReport

!new Player('player31')
!player31.name := 'Kai Ocean'
!player31.age := 24
!player31.bestFoot := #LEFT
!player31.phoneNumber := '7894321650'
!insert (team31, player31) into TeamPlayer

!new Player('player32')
!player32.name := 'Zara Stealth'
!player32.age := 27
!player32.bestFoot := #RIGHT
!player32.phoneNumber := '8905432160'
!insert (team32, player32) into TeamPlayer

!new Position('position31')
!position31.positionName := #DEFENDER
!insert (player31, position31) into PlayerPositions

!new Position('position32')
!position32.positionName := #MIDFIELDER
!insert (player32, position32) into PlayerPositions

!new MatchPlayer('matchPlayer31')
!matchPlayer31.booked := false
!matchPlayer31.goals := 0
!matchPlayer31.rating := 6
!insert (player31, matchPlayer31) into PlayerMatch
!insert (match16, matchPlayer31) into MatchMatchPlayer

!new MatchPlayer('matchPlayer32')
!matchPlayer32.booked := true
!matchPlayer32.goals := 2
!matchPlayer32.rating := 9
!insert (player32, matchPlayer32) into PlayerMatch
!insert (match16, matchPlayer32) into MatchMatchPlayer

!new MatchPlayerPosition('matchPlayerPosition31')
!matchPlayerPosition31.positionName := #DEFENDER
!matchPlayerPosition31.number := 5
!insert (matchPlayer31, matchPlayerPosition31) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('matchPlayerPosition32')
!matchPlayerPosition32.positionName := #MIDFIELDER
!matchPlayerPosition32.number := 8
!insert (matchPlayer32, matchPlayerPosition32) into MatchPlayerMatchPlayerPosition

!new MatchEvent('event58')
!event58.eventType := #GOAL
!event58.time := 35
!insert (match16, event58) into MatchMatchEvent

!new MatchEvent('event59')
!event59.eventType := #GOAL
!event59.time := 60
!insert (match16, event59) into MatchMatchEvent

!new MatchEvent('event60')
!event60.eventType := #GOAL
!event60.time := 80
!insert (match16, event60) into MatchMatchEvent

!new TrainingSession('training31')
!training31.date := '2026-08-01'
!training31.location := 'Dolphin Cove'
!training31.purpose := 'Defensive Strategies'
!insert (team31, training31) into TeamTraining

!new TrainingSession('training32')
!training32.date := '2026-08-10'
!training32.location := 'Panther Den'
!training32.purpose := 'Counterattack Techniques'
!insert (team32, training32) into TeamTraining

!new TrainingNotes('trainingNote31')
!trainingNote31.note := 'Improved defensive team play'
!trainingNote31.date := '2026-08-01'
!insert (training31, trainingNote31) into TrainingTrainingNotes

!new TrainingNotes('trainingNote32')
!trainingNote32.note := 'Enhanced speed and precision'
!trainingNote32.date := '2026-08-10'
!insert (training32, trainingNote32) into TrainingTrainingNotes

!new TrainingObjective('objective31')
!objective31.areaToImprove := 'Endurance in Defense'
!objective31.startDate := '2026-06-01'
!objective31.endDate := '2026-09-01'
!objective31.success := false
!insert (objective31, player31) into TrainingObjectivePlayer

!new TrainingObjective('objective32')
!objective32.areaToImprove := 'Quick Attacks'
!objective32.startDate := '2026-06-15'
!objective32.endDate := '2026-09-15'
!objective32.success := true
!insert (objective32, player32) into TrainingObjectivePlayer
```
## Generation 16 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 108 | 0.00% |
| Multiplicities Errors | 0 | 25 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 9 | 0.00% |

# Generation 17
```
!new Club('club33')
!club33.name := 'Blizzard Bears'
!club33.homeGround := 'Ice Palace'
!club33.chairman := 'Nora Glacier'

!new Club('club34')
!club34.name := 'Savanna Lions'
!club34.homeGround := 'Golden Plains'
!club34.chairman := 'Leo Pride'

!new Team('team33')
!team33.name := 'Polar Paws'
!insert (club33, team33) into ClubTeam

!new Team('team34')
!team34.name := 'Lion Hearts'
!insert (club34, team34) into ClubTeam

!new Competition('frostbiteSeries')
!frostbiteSeries.name := 'Frostbite Series'
!frostbiteSeries.type := 'Round Robin'

!new Match('match17')
!match17.date := '2027-01-14'
!match17.homeAway := true
!insert (frostbiteSeries, match17) into CompetitionMatch
!insert (team33, match17) into LocalMatch
!insert (team34, match17) into VisitorMatch

!new MatchReport('report17')
!report17.duration := 90
!report17.scoreVisitor := 1
!report17.scoreLocal := 2
!insert (match17, report17) into MatchMatchReport

!new Player('player33')
!player33.name := 'Elsa Chill'
!player33.age := 25
!player33.bestFoot := #LEFT
!player33.phoneNumber := '9654312870'
!insert (team33, player33) into TeamPlayer

!new Player('player34')
!player34.name := 'Kian Roar'
!player34.age := 29
!player34.bestFoot := #RIGHT
!player34.phoneNumber := '8765423190'
!insert (team34, player34) into TeamPlayer

!new Position('position33')
!position33.positionName := #GOALKEEPER
!insert (player33, position33) into PlayerPositions

!new Position('position34')
!position34.positionName := #FORWARD
!insert (player34, position34) into PlayerPositions

!new MatchPlayer('matchPlayer33')
!matchPlayer33.booked := true
!matchPlayer33.goals := 0
!matchPlayer33.rating := 7
!insert (player33, matchPlayer33) into PlayerMatch
!insert (match17, matchPlayer33) into MatchMatchPlayer

!new MatchPlayer('matchPlayer34')
!matchPlayer34.booked := false
!matchPlayer34.goals := 1
!matchPlayer34.rating := 9
!insert (player34, matchPlayer34) into PlayerMatch
!insert (match17, matchPlayer34) into MatchMatchPlayer

!new MatchPlayerPosition('matchPlayerPosition33')
!matchPlayerPosition33.positionName := #GOALKEEPER
!matchPlayerPosition33.number := 1
!insert (matchPlayer33, matchPlayerPosition33) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('matchPlayerPosition34')
!matchPlayerPosition34.positionName := #FORWARD
!matchPlayerPosition34.number := 11
!insert (matchPlayer34, matchPlayerPosition34) into MatchPlayerMatchPlayerPosition

!new MatchEvent('event61')
!event61.eventType := #GOAL
!event61.time := 15
!insert (match17, event61) into MatchMatchEvent

!new MatchEvent('event62')
!event62.eventType := #GOAL
!event62.time := 45
!insert (match17, event62) into MatchMatchEvent

!new MatchEvent('event63')
!event63.eventType := #GOAL
!event63.time := 60
!insert (match17, event63) into MatchMatchEvent

!new TrainingSession('training33')
!training33.date := '2026-12-10'
!training33.location := 'Arctic Dome'
!training33.purpose := 'Goalkeeping Techniques'
!insert (team33, training33) into TeamTraining

!new TrainingSession('training34')
!training34.date := '2026-12-15'
!training34.location := 'Savanna Fields'
!training34.purpose := 'Offensive Drills'
!insert (team34, training34) into TeamTraining

!new TrainingNotes('trainingNote33')
!trainingNote33.note := 'Enhanced reflexes and catches'
!trainingNote33.date := '2026-12-10'
!insert (training33, trainingNote33) into TrainingTrainingNotes

!new TrainingNotes('trainingNote34')
!trainingNote34.note := 'Developed attacking plays'
!trainingNote34.date := '2026-12-15'
!insert (training34, trainingNote34) into TrainingTrainingNotes

!new TrainingObjective('objective33')
!objective33.areaToImprove := 'Defense Against Shots'
!objective33.startDate := '2026-10-01'
!objective33.endDate := '2027-01-01'
!objective33.success := true
!insert (objective33, player33) into TrainingObjectivePlayer

!new TrainingObjective('objective34')
!objective34.areaToImprove := 'Scoring Opportunities'
!objective34.startDate := '2026-10-15'
!objective34.endDate := '2027-01-15'
!objective34.success := false
!insert (objective34, player34) into TrainingObjectivePlayer
```
## Generation 17 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 108 | 0.00% |
| Multiplicities Errors | 0 | 25 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 9 | 0.00% |

# Generation 18
```
!new Club('club35')
!club35.name := 'Thunder Falcons'
!club35.homeGround := 'Stormy Sky Dome'
!club35.chairman := 'Sara Thunder'

!new Club('club36')
!club36.name := 'Mystic Owls'
!club36.homeGround := 'Mystic Hollow'
!club36.chairman := 'Ellen Shadow'

!new Team('team35')
!team35.name := 'Falcon Flight'
!insert (club35, team35) into ClubTeam

!new Team('team36')
!team36.name := 'Owl Watchers'
!insert (club36, team36) into ClubTeam

!new Competition('windChallenge')
!windChallenge.name := 'Wind Challenge'
!windChallenge.type := 'League'

!new Match('match18')
!match18.date := '2027-07-21'
!match18.homeAway := true
!insert (windChallenge, match18) into CompetitionMatch
!insert (team35, match18) into LocalMatch
!insert (team36, match18) into VisitorMatch

!new MatchReport('report18')
!report18.duration := 90
!report18.scoreVisitor := 2
!report18.scoreLocal := 1
!insert (match18, report18) into MatchMatchReport

!new Player('player35')
!player35.name := 'Zephyr Storm'
!player35.age := 23
!player35.bestFoot := #RIGHT
!player35.phoneNumber := '9345678123'
!insert (team35, player35) into TeamPlayer

!new Player('player36')
!player36.name := 'Serena Moon'
!player36.age := 28
!player36.bestFoot := #LEFT
!player36.phoneNumber := '9123456784'
!insert (team36, player36) into TeamPlayer

!new Position('position35')
!position35.positionName := #MIDFIELDER
!insert (player35, position35) into PlayerPositions

!new Position('position36')
!position36.positionName := #DEFENDER
!insert (player36, position36) into PlayerPositions

!new MatchPlayer('matchPlayer35')
!matchPlayer35.booked := true
!matchPlayer35.goals := 1
!matchPlayer35.rating := 8
!insert (player35, matchPlayer35) into PlayerMatch
!insert (match18, matchPlayer35) into MatchMatchPlayer

!new MatchPlayer('matchPlayer36')
!matchPlayer36.booked := false
!matchPlayer36.goals := 0
!matchPlayer36.rating := 7
!insert (player36, matchPlayer36) into PlayerMatch
!insert (match18, matchPlayer36) into MatchMatchPlayer

!new MatchPlayerPosition('matchPlayerPosition35')
!matchPlayerPosition35.positionName := #MIDFIELDER
!matchPlayerPosition35.number := 6
!insert (matchPlayer35, matchPlayerPosition35) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('matchPlayerPosition36')
!matchPlayerPosition36.positionName := #DEFENDER
!matchPlayerPosition36.number := 5
!insert (matchPlayer36, matchPlayerPosition36) into MatchPlayerMatchPlayerPosition

!new MatchEvent('event64')
!event64.eventType := #GOAL
!event64.time := 22
!insert (match18, event64) into MatchMatchEvent

!new MatchEvent('event65')
!event65.eventType := #GOAL
!event65.time := 50
!insert (match18, event65) into MatchMatchEvent

!new MatchEvent('event66')
!event66.eventType := #GOAL
!event66.time := 80
!insert (match18, event66) into MatchMatchEvent

!new TrainingSession('training35')
!training35.date := '2027-06-10'
!training35.location := 'Falcon Nest Training Ground'
!training35.purpose := 'Tactical Maneuvers'
!insert (team35, training35) into TeamTraining

!new TrainingSession('training36')
!training36.date := '2027-06-15'
!training36.location := 'Owl Perch Center'
!training36.purpose := 'Defensive Techniques'
!insert (team36, training36) into TeamTraining

!new TrainingNotes('trainingNote35')
!trainingNote35.note := 'Enhanced tactical plays in windy conditions'
!trainingNote35.date := '2027-06-10'
!insert (training35, trainingNote35) into TrainingTrainingNotes

!new TrainingNotes('trainingNote36')
!trainingNote36.note := 'Improved defensive positioning against fast plays'
!trainingNote36.date := '2027-06-15'
!insert (training36, trainingNote36) into TrainingTrainingNotes

!new TrainingObjective('objective35')
!objective35.areaToImprove := 'Ball Retention'
!objective35.startDate := '2027-04-01'
!objective35.endDate := '2027-07-01'
!objective35.success := true
!insert (objective35, player35) into TrainingObjectivePlayer

!new TrainingObjective('objective36')
!objective36.areaToImprove := 'Interception Skills'
!objective36.startDate := '2027-04-15'
!objective36.endDate := '2027-07-15'
!objective36.success := false
!insert (objective36, player36) into TrainingObjectivePlayer
```
## Generation 18 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 108 | 0.00% |
| Multiplicities Errors | 0 | 25 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 9 | 0.00% |

# Generation 19
```
!new Club('club37')
!club37.name := 'Forest Eagles'
!club37.homeGround := 'Greenwood Stadium'
!club37.chairman := 'Oliver Bark'

!new Club('club38')
!club38.name := 'Sand Vipers'
!club38.homeGround := 'Dune Field'
!club38.chairman := 'Vera Sands'

!new Team('team37')
!team37.name := 'Eagle Gliders'
!insert (club37, team37) into ClubTeam

!new Team('team38')
!team38.name := 'Viper Strike'
!insert (club38, team38) into ClubTeam

!new Competition('desertDuel')
!desertDuel.name := 'Desert Duel'
!desertDuel.type := 'Cup'

!new Match('match19')
!match19.date := '2027-11-22'
!match19.homeAway := true
!insert (desertDuel, match19) into CompetitionMatch
!insert (team37, match19) into LocalMatch
!insert (team38, match19) into VisitorMatch

!new MatchReport('report19')
!report19.duration := 120
!report19.scoreVisitor := 2
!report19.scoreLocal := 4
!insert (match19, report19) into MatchMatchReport

!new Player('player37')
!player37.name := 'Riley Leaf'
!player37.age := 26
!player37.bestFoot := #RIGHT
!player37.phoneNumber := '9876543281'
!insert (team37, player37) into TeamPlayer

!new Player('player38')
!player38.name := 'Alex Sandstorm'
!player38.age := 30
!player38.bestFoot := #LEFT
!player38.phoneNumber := '8765432190'
!insert (team38, player38) into TeamPlayer

!new Position('position37')
!position37.positionName := #FORWARD
!insert (player37, position37) into PlayerPositions

!new Position('position38')
!position38.positionName := #MIDFIELDER
!insert (player38, position38) into PlayerPositions

!new MatchPlayer('matchPlayer37')
!matchPlayer37.booked := false
!matchPlayer37.goals := 2
!matchPlayer37.rating := 9
!insert (player37, matchPlayer37) into PlayerMatch
!insert (match19, matchPlayer37) into MatchMatchPlayer

!new MatchPlayer('matchPlayer38')
!matchPlayer38.booked := true
!matchPlayer38.goals := 1
!matchPlayer38.rating := 8
!insert (player38, matchPlayer38) into PlayerMatch
!insert (match19, matchPlayer38) into MatchMatchPlayer

!new MatchPlayerPosition('matchPlayerPosition37')
!matchPlayerPosition37.positionName := #FORWARD
!matchPlayerPosition37.number := 9
!insert (matchPlayer37, matchPlayerPosition37) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('matchPlayerPosition38')
!matchPlayerPosition38.positionName := #MIDFIELDER
!matchPlayerPosition38.number := 8
!insert (matchPlayer38, matchPlayerPosition38) into MatchPlayerMatchPlayerPosition

!new MatchEvent('event67')
!event67.eventType := #GOAL
!event67.time := 15
!insert (match19, event67) into MatchMatchEvent

!new MatchEvent('event68')
!event68.eventType := #GOAL
!event68.time := 40
!insert (match19, event68) into MatchMatchEvent

!new MatchEvent('event69')
!event69.eventType := #GOAL
!event69.time := 70
!insert (match19, event69) into MatchMatchEvent

!new MatchEvent('event70')
!event70.eventType := #GOAL
!event70.time := 85
!insert (match19, event70) into MatchMatchEvent

!new MatchEvent('event71')
!event71.eventType := #GOAL
!event71.time := 110
!insert (match19, event71) into MatchMatchEvent

!new MatchEvent('event72')
!event72.eventType := #GOAL
!event72.time := 115
!insert (match19, event72) into MatchMatchEvent

!new TrainingSession('training37')
!training37.date := '2027-10-01'
!training37.location := 'Eagle Training Park'
!training37.purpose := 'Offensive Strategies'
!insert (team37, training37) into TeamTraining

!new TrainingSession('training38')
!training38.date := '2027-10-12'
!training38.location := 'Desert Training Facility'
!training38.purpose := 'Midfield Control'
!insert (team38, training38) into TeamTraining

!new TrainingNotes('trainingNote37')
!trainingNote37.note := 'Focused on quick breakaway attacks'
!trainingNote37.date := '2027-10-01'
!insert (training37, trainingNote37) into TrainingTrainingNotes

!new TrainingNotes('trainingNote38')
!trainingNote38.note := 'Improved possession and passing accuracy'
!trainingNote38.date := '2027-10-12'
!insert (training38, trainingNote38) into TrainingTrainingNotes

!new TrainingObjective('objective37')
!objective37.areaToImprove := 'Finishing in the Box'
!objective37.startDate := '2027-08-01'
!objective37.endDate := '2027-11-01'
!objective37.success := true
!insert (objective37, player37) into TrainingObjectivePlayer

!new TrainingObjective('objective38')
!objective38.areaToImprove := 'Press and Cover Tactics'
!objective38.startDate := '2027-08-15'
!objective38.endDate := '2027-11-15'
!objective38.success := false
!insert (objective38, player38) into TrainingObjectivePlayer
```
## Generation 19 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 120 | 0.00% |
| Multiplicities Errors | 0 | 28 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 9 | 0.00% |

# Generation 20
```
!new Club('club39')
!club39.name := 'Star Penguins'
!club39.homeGround := 'Frozen Rink'
!club39.chairman := 'Gemma Frost'

!new Club('club40')
!club40.name := 'Blaze Dragons'
!club40.homeGround := 'Inferno Field'
!club40.chairman := 'Flame Drakkar'

!new Team('team39')
!team39.name := 'Penguin Icicles'
!insert (club39, team39) into ClubTeam

!new Team('team40')
!team40.name := 'Dragon Fire'
!insert (club40, team40) into ClubTeam

!new Competition('fireAndIceCup')
!fireAndIceCup.name := 'Fire and Ice Cup'
!fireAndIceCup.type := 'Single Elimination'

!new Match('match20')
!match20.date := '2028-02-18'
!match20.homeAway := true
!insert (fireAndIceCup, match20) into CompetitionMatch
!insert (team39, match20) into LocalMatch
!insert (team40, match20) into VisitorMatch

!new MatchReport('report20')
!report20.duration := 90
!report20.scoreVisitor := 1
!report20.scoreLocal := 3
!insert (match20, report20) into MatchMatchReport

!new Player('player39')
!player39.name := 'Aurora Glacier'
!player39.age := 24
!player39.bestFoot := #BOTH
!player39.phoneNumber := '7981236540'
!insert (team39, player39) into TeamPlayer

!new Player('player40')
!player40.name := 'Ignis Blaze'
!player40.age := 27
!player40.bestFoot := #RIGHT
!player40.phoneNumber := '6874123059'
!insert (team40, player40) into TeamPlayer

!new Position('position39')
!position39.positionName := #DEFENDER
!insert (player39, position39) into PlayerPositions

!new Position('position40')
!position40.positionName := #FORWARD
!insert (player40, position40) into PlayerPositions

!new MatchPlayer('matchPlayer39')
!matchPlayer39.booked := false
!matchPlayer39.goals := 0
!matchPlayer39.rating := 8
!insert (player39, matchPlayer39) into PlayerMatch
!insert (match20, matchPlayer39) into MatchMatchPlayer

!new MatchPlayer('matchPlayer40')
!matchPlayer40.booked := true
!matchPlayer40.goals := 1
!matchPlayer40.rating := 7
!insert (player40, matchPlayer40) into PlayerMatch
!insert (match20, matchPlayer40) into MatchMatchPlayer

!new MatchPlayerPosition('matchPlayerPosition39')
!matchPlayerPosition39.positionName := #DEFENDER
!matchPlayerPosition39.number := 3
!insert (matchPlayer39, matchPlayerPosition39) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('matchPlayerPosition40')
!matchPlayerPosition40.positionName := #FORWARD
!matchPlayerPosition40.number := 11
!insert (matchPlayer40, matchPlayerPosition40) into MatchPlayerMatchPlayerPosition

!new MatchEvent('event73')
!event73.eventType := #GOAL
!event73.time := 10
!insert (match20, event73) into MatchMatchEvent

!new MatchEvent('event74')
!event74.eventType := #GOAL
!event74.time := 22
!insert (match20, event74) into MatchMatchEvent

!new MatchEvent('event75')
!event75.eventType := #GOAL
!event75.time := 55
!insert (match20, event75) into MatchMatchEvent

!new MatchEvent('event76')
!event76.eventType := #GOAL
!event76.time := 68
!insert (match20, event76) into MatchMatchEvent

!new TrainingSession('training39')
!training39.date := '2028-01-05'
!training39.location := 'Arctic Pavilion'
!training39.purpose := 'Defense Fortress Drills'
!insert (team39, training39) into TeamTraining

!new TrainingSession('training40')
!training40.date := '2028-01-12'
!training40.location := 'Volcano Base'
!training40.purpose := 'Scoring Maximization'
!insert (team40, training40) into TeamTraining

!new TrainingNotes('trainingNote39')
!trainingNote39.note := 'Trained for tempo adjustment in cold conditions'
!trainingNote39.date := '2028-01-05'
!insert (training39, trainingNote39) into TrainingTrainingNotes

!new TrainingNotes('trainingNote40')
!trainingNote40.note := 'Focused on effective shot conversion under pressure'
!trainingNote40.date := '2028-01-12'
!insert (training40, trainingNote40) into TrainingTrainingNotes

!new TrainingObjective('objective39')
!objective39.areaToImprove := 'Defensive Wall Formation'
!objective39.startDate := '2027-11-01'
!objective39.endDate := '2028-02-01'
!objective39.success := true
!insert (objective39, player39) into TrainingObjectivePlayer

!new TrainingObjective('objective40')
!objective40.areaToImprove := 'Goal Scoring Prowess'
!objective40.startDate := '2027-11-15'
!objective40.endDate := '2028-02-15'
!objective40.success := false
!insert (objective40, player40) into TrainingObjectivePlayer
```
## Generation 20 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 112 | 0.00% |
| Multiplicities Errors | 0 | 26 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 9 | 0.00% |

# Generation 21
```
!new Club('club41')
!club41.name := 'Coral Sharks'
!club41.homeGround := 'Reef Stadium'
!club41.chairman := 'Owen Coral'

!new Club('club42')
!club42.name := 'Ivory Elephants'
!club42.homeGround := 'Savannah Grounds'
!club42.chairman := 'Tara Ivory'

!new Team('team41')
!team41.name := 'Shark Sweepers'
!insert (club41, team41) into ClubTeam

!new Team('team42')
!team42.name := 'Elephant Stompers'
!insert (club42, team42) into ClubTeam

!new Competition('oceanicTournament')
!oceanicTournament.name := 'Oceanic Tournament'
!oceanicTournament.type := 'Round Robin'

!new Match('match21')
!match21.date := '2028-06-30'
!match21.homeAway := false
!insert (oceanicTournament, match21) into CompetitionMatch
!insert (team41, match21) into LocalMatch
!insert (team42, match21) into VisitorMatch

!new MatchReport('report21')
!report21.duration := 90
!report21.scoreVisitor := 3
!report21.scoreLocal := 1
!insert (match21, report21) into MatchMatchReport

!new Player('player41')
!player41.name := 'Marina Wave'
!player41.age := 25
!player41.bestFoot := #RIGHT
!player41.phoneNumber := '8976542310'
!insert (team41, player41) into TeamPlayer

!new Player('player42')
!player42.name := 'Kai Jumbo'
!player42.age := 28
!player42.bestFoot := #LEFT
!player42.phoneNumber := '7654321980'
!insert (team42, player42) into TeamPlayer

!new Position('position41')
!position41.positionName := #MIDFIELDER
!insert (player41, position41) into PlayerPositions

!new Position('position42')
!position42.positionName := #DEFENDER
!insert (player42, position42) into PlayerPositions

!new MatchPlayer('matchPlayer41')
!matchPlayer41.booked := false
!matchPlayer41.goals := 0
!matchPlayer41.rating := 7
!insert (player41, matchPlayer41) into PlayerMatch
!insert (match21, matchPlayer41) into MatchMatchPlayer

!new MatchPlayer('matchPlayer42')
!matchPlayer42.booked := true
!matchPlayer42.goals := 1
!matchPlayer42.rating := 8
!insert (player42, matchPlayer42) into PlayerMatch
!insert (match21, matchPlayer42) into MatchMatchPlayer

!new MatchPlayerPosition('matchPlayerPosition41')
!matchPlayerPosition41.positionName := #MIDFIELDER
!matchPlayerPosition41.number := 7
!insert (matchPlayer41, matchPlayerPosition41) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('matchPlayerPosition42')
!matchPlayerPosition42.positionName := #DEFENDER
!matchPlayerPosition42.number := 4
!insert (matchPlayer42, matchPlayerPosition42) into MatchPlayerMatchPlayerPosition

!new MatchEvent('event77')
!event77.eventType := #GOAL
!event77.time := 20
!insert (match21, event77) into MatchMatchEvent

!new MatchEvent('event78')
!event78.eventType := #GOAL
!event78.time := 40
!insert (match21, event78) into MatchMatchEvent

!new MatchEvent('event79')
!event79.eventType := #GOAL
!event79.time := 65
!insert (match21, event79) into MatchMatchEvent

!new MatchEvent('event80')
!event80.eventType := #GOAL
!event80.time := 80
!insert (match21, event80) into MatchMatchEvent

!new TrainingSession('training41')
!training41.date := '2028-05-10'
!training41.location := 'Coral Arena'
!training41.purpose := 'Midfield Coordination'
!insert (team41, training41) into TeamTraining

!new TrainingSession('training42')
!training42.date := '2028-05-20'
!training42.location := 'Elephant Grounds'
!training42.purpose := 'Defensive Stability'
!insert (team42, training42) into TeamTraining

!new TrainingNotes('trainingNote41')
!trainingNote41.note := 'Focused on passing under pressure'
!trainingNote41.date := '2028-05-10'
!insert (training41, trainingNote41) into TrainingTrainingNotes

!new TrainingNotes('trainingNote42')
!trainingNote42.note := 'Improved defensive organization'
!trainingNote42.date := '2028-05-20'
!insert (training42, trainingNote42) into TrainingTrainingNotes

!new TrainingObjective('objective41')
!objective41.areaToImprove := 'Midfield Vision'
!objective41.startDate := '2028-03-01'
!objective41.endDate := '2028-06-01'
!objective41.success := false
!insert (objective41, player41) into TrainingObjectivePlayer

!new TrainingObjective('objective42')
!objective42.areaToImprove := 'Tackling Precision'
!objective42.startDate := '2028-03-15'
!objective42.endDate := '2028-06-15'
!objective42.success := true
!insert (objective42, player42) into TrainingObjectivePlayer
```
## Generation 21 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 112 | 0.00% |
| Multiplicities Errors | 0 | 26 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 9 | 0.00% |

# Generation 22
```
!new Club('club43')
!club43.name := 'Glacial Eagles'
!club43.homeGround := 'Icecap Arena'
!club43.chairman := 'Freya Chill'

!new Club('club44')
!club44.name := 'Canyon Lynxes'
!club44.homeGround := 'Rocky Hollow'
!club44.chairman := 'Felix Stone'

!new Team('team43')
!team43.name := 'Eagle Soar'
!insert (club43, team43) into ClubTeam

!new Team('team44')
!team44.name := 'Lynx Leap'
!insert (club44, team44) into ClubTeam

!new Competition('summitSeries')
!summitSeries.name := 'Summit Series'
!summitSeries.type := 'League'

!new Match('match22')
!match22.date := '2029-07-18'
!match22.homeAway := true
!insert (summitSeries, match22) into CompetitionMatch
!insert (team43, match22) into LocalMatch
!insert (team44, match22) into VisitorMatch

!new MatchReport('report22')
!report22.duration := 90
!report22.scoreVisitor := 2
!report22.scoreLocal := 2
!insert (match22, report22) into MatchMatchReport

!new Player('player43')
!player43.name := 'Aiden Frost'
!player43.age := 27
!player43.bestFoot := #RIGHT
!player43.phoneNumber := '9182736450'
!insert (team43, player43) into TeamPlayer

!new Player('player44')
!player44.name := 'Lila Canyon'
!player44.age := 26
!player44.bestFoot := #LEFT
!player44.phoneNumber := '9827345610'
!insert (team44, player44) into TeamPlayer

!new Position('position43')
!position43.positionName := #GOALKEEPER
!insert (player43, position43) into PlayerPositions

!new Position('position44')
!position44.positionName := #MIDFIELDER
!insert (player44, position44) into PlayerPositions

!new MatchPlayer('matchPlayer43')
!matchPlayer43.booked := false
!matchPlayer43.goals := 0
!matchPlayer43.rating := 8
!insert (player43, matchPlayer43) into PlayerMatch
!insert (match22, matchPlayer43) into MatchMatchPlayer

!new MatchPlayer('matchPlayer44')
!matchPlayer44.booked := true
!matchPlayer44.goals := 1
!matchPlayer44.rating := 9
!insert (player44, matchPlayer44) into PlayerMatch
!insert (match22, matchPlayer44) into MatchMatchPlayer

!new MatchPlayerPosition('matchPlayerPosition43')
!matchPlayerPosition43.positionName := #GOALKEEPER
!matchPlayerPosition43.number := 1
!insert (matchPlayer43, matchPlayerPosition43) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('matchPlayerPosition44')
!matchPlayerPosition44.positionName := #MIDFIELDER
!matchPlayerPosition44.number := 8
!insert (matchPlayer44, matchPlayerPosition44) into MatchPlayerMatchPlayerPosition

!new MatchEvent('event81')
!event81.eventType := #GOAL
!event81.time := 30
!insert (match22, event81) into MatchMatchEvent

!new MatchEvent('event82')
!event82.eventType := #GOAL
!event82.time := 48
!insert (match22, event82) into MatchMatchEvent

!new MatchEvent('event83')
!event83.eventType := #GOAL
!event83.time := 75
!insert (match22, event83) into MatchMatchEvent

!new MatchEvent('event84')
!event84.eventType := #GOAL
!event84.time := 88
!insert (match22, event84) into MatchMatchEvent

!new TrainingSession('training43')
!training43.date := '2029-06-10'
!training43.location := 'Eagle Peak Zone'
!training43.purpose := 'Goalkeeping Focus'
!insert (team43, training43) into TeamTraining

!new TrainingSession('training44')
!training44.date := '2029-06-20'
!training44.location := 'Lynx Ledge'
!training44.purpose := 'Midfield Mastery'
!insert (team44, training44) into TeamTraining

!new TrainingNotes('trainingNote43')
!trainingNote43.note := 'Enhanced reflex training under pressure'
!trainingNote43.date := '2029-06-10'
!insert (training43, trainingNote43) into TrainingTrainingNotes

!new TrainingNotes('trainingNote44')
!trainingNote44.note := 'Focused on strategic positioning and passing lanes'
!trainingNote44.date := '2029-06-20'
!insert (training44, trainingNote44) into TrainingTrainingNotes

!new TrainingObjective('objective43')
!objective43.areaToImprove := 'Shot Stopping'
!objective43.startDate := '2029-04-01'
!objective43.endDate := '2029-07-01'
!objective43.success := true
!insert (objective43, player43) into TrainingObjectivePlayer

!new TrainingObjective('objective44')
!objective44.areaToImprove := 'Playmaking Skills'
!objective44.startDate := '2029-04-15'
!objective44.endDate := '2029-07-15'
!objective44.success := false
!insert (objective44, player44) into TrainingObjectivePlayer
```
## Generation 22 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 112 | 0.00% |
| Multiplicities Errors | 0 | 26 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 9 | 0.00% |

# Generation 23
```
!new Club('club45')
!club45.name := 'Sunlit Tigers'
!club45.homeGround := 'Radiant Field'
!club45.chairman := 'Aria Solar'

!new Club('club46')
!club46.name := 'Lunar Bears'
!club46.homeGround := 'Moonlit Park'
!club46.chairman := 'Caden Moon'

!new Team('team45')
!team45.name := 'Tiger Roar'
!insert (club45, team45) into ClubTeam

!new Team('team46')
!team46.name := 'Bear Claws'
!insert (club46, team46) into ClubTeam

!new Competition('celestialCup')
!celestialCup.name := 'Celestial Cup'
!celestialCup.type := 'Cup'

!new Match('match23')
!match23.date := '2030-05-14'
!match23.homeAway := false
!insert (celestialCup, match23) into CompetitionMatch
!insert (team45, match23) into LocalMatch
!insert (team46, match23) into VisitorMatch

!new MatchReport('report23')
!report23.duration := 120
!report23.scoreVisitor := 2
!report23.scoreLocal := 3
!insert (match23, report23) into MatchMatchReport

!new Player('player45')
!player45.name := 'Leo Sun'
!player45.age := 29
!player45.bestFoot := #RIGHT
!player45.phoneNumber := '9120485763'
!insert (team45, player45) into TeamPlayer

!new Player('player46')
!player46.name := 'Luna Shadow'
!player46.age := 31
!player46.bestFoot := #BOTH
!player46.phoneNumber := '8796325140'
!insert (team46, player46) into TeamPlayer

!new Position('position45')
!position45.positionName := #FORWARD
!insert (player45, position45) into PlayerPositions

!new Position('position46')
!position46.positionName := #DEFENDER
!insert (player46, position46) into PlayerPositions

!new MatchPlayer('matchPlayer45')
!matchPlayer45.booked := false
!matchPlayer45.goals := 2
!matchPlayer45.rating := 9
!insert (player45, matchPlayer45) into PlayerMatch
!insert (match23, matchPlayer45) into MatchMatchPlayer

!new MatchPlayer('matchPlayer46')
!matchPlayer46.booked := true
!matchPlayer46.goals := 0
!matchPlayer46.rating := 7
!insert (player46, matchPlayer46) into PlayerMatch
!insert (match23, matchPlayer46) into MatchMatchPlayer

!new MatchPlayerPosition('matchPlayerPosition45')
!matchPlayerPosition45.positionName := #FORWARD
!matchPlayerPosition45.number := 10
!insert (matchPlayer45, matchPlayerPosition45) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('matchPlayerPosition46')
!matchPlayerPosition46.positionName := #DEFENDER
!matchPlayerPosition46.number := 3
!insert (matchPlayer46, matchPlayerPosition46) into MatchPlayerMatchPlayerPosition

!new MatchEvent('event85')
!event85.eventType := #GOAL
!event85.time := 20
!insert (match23, event85) into MatchMatchEvent

!new MatchEvent('event86')
!event86.eventType := #GOAL
!event86.time := 45
!insert (match23, event86) into MatchMatchEvent

!new MatchEvent('event87')
!event87.eventType := #GOAL
!event87.time := 70
!insert (match23, event87) into MatchMatchEvent

!new MatchEvent('event88')
!event88.eventType := #GOAL
!event88.time := 100
!insert (match23, event88) into MatchMatchEvent

!new MatchEvent('event89')
!event89.eventType := #GOAL
!event89.time := 115
!insert (match23, event89) into MatchMatchEvent

!new TrainingSession('training45')
!training45.date := '2030-04-10'
!training45.location := 'Solar Training Field'
!training45.purpose := 'Offensive Tactics'
!insert (team45, training45) into TeamTraining

!new TrainingSession('training46')
!training46.date := '2030-04-20'
!training46.location := 'Lunar Training Grounds'
!training46.purpose := 'Defensive Formations'
!insert (team46, training46) into TeamTraining

!new TrainingNotes('trainingNote45')
!trainingNote45.note := 'Improved on quick counterattacks'
!trainingNote45.date := '2030-04-10'
!insert (training45, trainingNote45) into TrainingTrainingNotes

!new TrainingNotes('trainingNote46')
!trainingNote46.note := 'Strengthened defensive resilience'
!trainingNote46.date := '2030-04-20'
!insert (training46, trainingNote46) into TrainingTrainingNotes

!new TrainingObjective('objective45')
!objective45.areaToImprove := 'Accuracy in Shooting'
!objective45.startDate := '2030-02-01'
!objective45.endDate := '2030-05-01'
!objective45.success := true
!insert (objective45, player45) into TrainingObjectivePlayer

!new TrainingObjective('objective46')
!objective46.areaToImprove := 'Defensive Organization'
!objective46.startDate := '2030-02-15'
!objective46.endDate := '2030-05-15'
!objective46.success := false
!insert (objective46, player46) into TrainingObjectivePlayer
```
## Generation 23 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 116 | 0.00% |
| Multiplicities Errors | 0 | 27 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 9 | 0.00% |

# Generation 24
```
!new Club('club47')
!club47.name := 'Mist Raptors'
!club47.homeGround := 'Fog Valley Stadium'
!club47.chairman := 'Gale Mist'

!new Club('club48')
!club48.name := 'Crimson Hawks'
!club48.homeGround := 'Bloodmoon Arena'
!club48.chairman := 'Scarlet Talon'

!new Team('team47')
!team47.name := 'Raptor Soar'
!insert (club47, team47) into ClubTeam

!new Team('team48')
!team48.name := 'Hawk Strike'
!insert (club48, team48) into ClubTeam

!new Competition('stormLeague')
!stormLeague.name := 'Storm League'
!stormLeague.type := 'Round Robin'

!new Match('match24')
!match24.date := '2031-08-22'
!match24.homeAway := true
!insert (stormLeague, match24) into CompetitionMatch
!insert (team47, match24) into LocalMatch
!insert (team48, match24) into VisitorMatch

!new MatchReport('report24')
!report24.duration := 90
!report24.scoreVisitor := 1
!report24.scoreLocal := 2
!insert (match24, report24) into MatchMatchReport

!new Player('player47')
!player47.name := 'Stormy Cloud'
!player47.age := 24
!player47.bestFoot := #RIGHT
!player47.phoneNumber := '8901234567'
!insert (team47, player47) into TeamPlayer

!new Player('player48')
!player48.name := 'Ash Blaze'
!player48.age := 26
!player48.bestFoot := #LEFT
!player48.phoneNumber := '9801234567'
!insert (team48, player48) into TeamPlayer

!new Position('position47')
!position47.positionName := #MIDFIELDER
!insert (player47, position47) into PlayerPositions

!new Position('position48')
!position48.positionName := #FORWARD
!insert (player48, position48) into PlayerPositions

!new MatchPlayer('matchPlayer47')
!matchPlayer47.booked := false
!matchPlayer47.goals := 1
!matchPlayer47.rating := 8
!insert (player47, matchPlayer47) into PlayerMatch
!insert (match24, matchPlayer47) into MatchMatchPlayer

!new MatchPlayer('matchPlayer48')
!matchPlayer48.booked := true
!matchPlayer48.goals := 1
!matchPlayer48.rating := 7
!insert (player48, matchPlayer48) into PlayerMatch
!insert (match24, matchPlayer48) into MatchMatchPlayer

!new MatchPlayerPosition('matchPlayerPosition47')
!matchPlayerPosition47.positionName := #MIDFIELDER
!matchPlayerPosition47.number := 8
!insert (matchPlayer47, matchPlayerPosition47) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('matchPlayerPosition48')
!matchPlayerPosition48.positionName := #FORWARD
!matchPlayerPosition48.number := 9
!insert (matchPlayer48, matchPlayerPosition48) into MatchPlayerMatchPlayerPosition

!new MatchEvent('event90')
!event90.eventType := #GOAL
!event90.time := 25
!insert (match24, event90) into MatchMatchEvent

!new MatchEvent('event91')
!event91.eventType := #GOAL
!event91.time := 55
!insert (match24, event91) into MatchMatchEvent

!new MatchEvent('event92')
!event92.eventType := #GOAL
!event92.time := 75
!insert (match24, event92) into MatchMatchEvent

!new TrainingSession('training47')
!training47.date := '2031-07-18'
!training47.location := 'Raptor Nest'
!training47.purpose := 'Agility Drills'
!insert (team47, training47) into TeamTraining

!new TrainingSession('training48')
!training48.date := '2031-07-25'
!training48.location := 'Hawk Perch'
!training48.purpose := 'Finishing Techniques'
!insert (team48, training48) into TeamTraining

!new TrainingNotes('trainingNote47')
!trainingNote47.note := 'Improved quick transitions and recovery'
!trainingNote47.date := '2031-07-18'
!insert (training47, trainingNote47) into TrainingTrainingNotes

!new TrainingNotes('trainingNote48')
!trainingNote48.note := 'Focused on precise shooting under pressure'
!trainingNote48.date := '2031-07-25'
!insert (training48, trainingNote48) into TrainingTrainingNotes

!new TrainingObjective('objective47')
!objective47.areaToImprove := 'Ball Control'
!objective47.startDate := '2031-06-01'
!objective47.endDate := '2031-08-01'
!objective47.success := true
!insert (objective47, player47) into TrainingObjectivePlayer

!new TrainingObjective('objective48')
!objective48.areaToImprove := 'Shot Accuracy'
!objective48.startDate := '2031-06-05'
!objective48.endDate := '2031-08-05'
!objective48.success := false
!insert (objective48, player48) into TrainingObjectivePlayer
```
## Generation 24 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 108 | 0.00% |
| Multiplicities Errors | 0 | 25 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 9 | 0.00% |

# Generation 25
```
!new Club('club49')
!club49.name := 'Frost Falcons'
!club49.homeGround := 'Ice Wing Stadium'
!club49.chairman := 'Nina Frost'

!new Club('club50')
!club50.name := 'Blaze Lions'
!club50.homeGround := 'Sunfire Field'
!club50.chairman := 'Leo Blaze'

!new Team('team49')
!team49.name := 'Falcon Frostbite'
!insert (club49, team49) into ClubTeam

!new Team('team50')
!team50.name := 'Lion Heatwave'
!insert (club50, team50) into ClubTeam

!new Competition('winterChampionship')
!winterChampionship.name := 'Winter Championship'
!winterChampionship.type := 'League'

!new Match('match25')
!match25.date := '2032-02-10'
!match25.homeAway := false
!insert (winterChampionship, match25) into CompetitionMatch
!insert (team49, match25) into LocalMatch
!insert (team50, match25) into VisitorMatch

!new MatchReport('report25')
!report25.duration := 90
!report25.scoreVisitor := 3
!report25.scoreLocal := 3
!insert (match25, report25) into MatchMatchReport

!new Player('player49')
!player49.name := 'Ivy Glacier'
!player49.age := 30
!player49.bestFoot := #LEFT
!player49.phoneNumber := '8765012349'
!insert (team49, player49) into TeamPlayer

!new Player('player50')
!player50.name := 'Rex Solar'
!player50.age := 28
!player50.bestFoot := #BOTH
!player50.phoneNumber := '9123456890'
!insert (team50, player50) into TeamPlayer

!new Position('position49')
!position49.positionName := #DEFENDER
!insert (player49, position49) into PlayerPositions

!new Position('position50')
!position50.positionName := #FORWARD
!insert (player50, position50) into PlayerPositions

!new MatchPlayer('matchPlayer49')
!matchPlayer49.booked := false
!matchPlayer49.goals := 0
!matchPlayer49.rating := 7
!insert (player49, matchPlayer49) into PlayerMatch
!insert (match25, matchPlayer49) into MatchMatchPlayer

!new MatchPlayer('matchPlayer50')
!matchPlayer50.booked := true
!matchPlayer50.goals := 2
!matchPlayer50.rating := 9
!insert (player50, matchPlayer50) into PlayerMatch
!insert (match25, matchPlayer50) into MatchMatchPlayer

!new MatchPlayerPosition('matchPlayerPosition49')
!matchPlayerPosition49.positionName := #DEFENDER
!matchPlayerPosition49.number := 4
!insert (matchPlayer49, matchPlayerPosition49) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('matchPlayerPosition50')
!matchPlayerPosition50.positionName := #FORWARD
!matchPlayerPosition50.number := 11
!insert (matchPlayer50, matchPlayerPosition50) into MatchPlayerMatchPlayerPosition

!new MatchEvent('event93')
!event93.eventType := #GOAL
!event93.time := 15
!insert (match25, event93) into MatchMatchEvent

!new MatchEvent('event94')
!event94.eventType := #GOAL
!event94.time := 35
!insert (match25, event94) into MatchMatchEvent

!new MatchEvent('event95')
!event95.eventType := #GOAL
!event95.time := 50
!insert (match25, event95) into MatchMatchEvent

!new MatchEvent('event96')
!event96.eventType := #GOAL
!event96.time := 70
!insert (match25, event96) into MatchMatchEvent

!new MatchEvent('event97')
!event97.eventType := #GOAL
!event97.time := 80
!insert (match25, event97) into MatchMatchEvent

!new MatchEvent('event98')
!event98.eventType := #GOAL
!event98.time := 88
!insert (match25, event98) into MatchMatchEvent

!new TrainingSession('training49')
!training49.date := '2032-01-15'
!training49.location := 'Snowbound Arena'
!training49.purpose := 'Defensive Drills in Snow'
!insert (team49, training49) into TeamTraining

!new TrainingSession('training50')
!training50.date := '2032-01-20'
!training50.location := 'Heated Pitch'
!training50.purpose := 'Attack Precision'
!insert (team50, training50) into TeamTraining

!new TrainingNotes('trainingNote49')
!trainingNote49.note := 'Enhanced blocking and perimeter control'
!trainingNote49.date := '2032-01-15'
!insert (training49, trainingNote49) into TrainingTrainingNotes

!new TrainingNotes('trainingNote50')
!trainingNote50.note := 'Focused on fast-paced finishing drills'
!trainingNote50.date := '2032-01-20'
!insert (training50, trainingNote50) into TrainingTrainingNotes

!new TrainingObjective('objective49')
!objective49.areaToImprove := 'Snowfield Adaptation'
!objective49.startDate := '2031-11-01'
!objective49.endDate := '2032-02-01'
!objective49.success := false
!insert (objective49, player49) into TrainingObjectivePlayer

!new TrainingObjective('objective50')
!objective50.areaToImprove := 'Goal Scoring Efficiency'
!objective50.startDate := '2031-11-15'
!objective50.endDate := '2032-02-15'
!objective50.success := true
!insert (objective50, player50) into TrainingObjectivePlayer
```
## Generation 25 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 120 | 0.00% |
| Multiplicities Errors | 0 | 28 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 9 | 0.00% |

# Generation 26
```
!new Club('club51')
!club51.name := 'Midnight Owls'
!club51.homeGround := 'Nightfall Stadium'
!club51.chairman := 'Omar Night'

!new Club('club52')
!club52.name := 'Savanna Rhinos'
!club52.homeGround := 'Rhino Den Park'
!club52.chairman := 'Rita Horn'

!new Team('team51')
!team51.name := 'Owl Watch'
!insert (club51, team51) into ClubTeam

!new Team('team52')
!team52.name := 'Rhino Charge'
!insert (club52, team52) into ClubTeam

!new Competition('duskCup')
!duskCup.name := 'Dusk Cup'
!duskCup.type := 'Single Elimination'

!new Match('match26')
!match26.date := '2032-11-02'
!match26.homeAway := true
!insert (duskCup, match26) into CompetitionMatch
!insert (team51, match26) into LocalMatch
!insert (team52, match26) into VisitorMatch

!new MatchReport('report26')
!report26.duration := 120
!report26.scoreVisitor := 1
!report26.scoreLocal := 4
!insert (match26, report26) into MatchMatchReport

!new Player('player51')
!player51.name := 'Luna Beam'
!player51.age := 25
!player51.bestFoot := #LEFT
!player51.phoneNumber := '8123456098'
!insert (team51, player51) into TeamPlayer

!new Player('player52')
!player52.name := 'Max Tusk'
!player52.age := 30
!player52.bestFoot := #RIGHT
!player52.phoneNumber := '9876543210'
!insert (team52, player52) into TeamPlayer

!new Position('position51')
!position51.positionName := #MIDFIELDER
!insert (player51, position51) into PlayerPositions

!new Position('position52')
!position52.positionName := #DEFENDER
!insert (player52, position52) into PlayerPositions

!new MatchPlayer('matchPlayer51')
!matchPlayer51.booked := false
!matchPlayer51.goals := 2
!matchPlayer51.rating := 9
!insert (player51, matchPlayer51) into PlayerMatch
!insert (match26, matchPlayer51) into MatchMatchPlayer

!new MatchPlayer('matchPlayer52')
!matchPlayer52.booked := true
!matchPlayer52.goals := 0
!matchPlayer52.rating := 6
!insert (player52, matchPlayer52) into PlayerMatch
!insert (match26, matchPlayer52) into MatchMatchPlayer

!new MatchPlayerPosition('matchPlayerPosition51')
!matchPlayerPosition51.positionName := #MIDFIELDER
!matchPlayerPosition51.number := 10
!insert (matchPlayer51, matchPlayerPosition51) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('matchPlayerPosition52')
!matchPlayerPosition52.positionName := #DEFENDER
!matchPlayerPosition52.number := 5
!insert (matchPlayer52, matchPlayerPosition52) into MatchPlayerMatchPlayerPosition

!new MatchEvent('event99')
!event99.eventType := #GOAL
!event99.time := 15
!insert (match26, event99) into MatchMatchEvent

!new MatchEvent('event100')
!event100.eventType := #GOAL
!event100.time := 45
!insert (match26, event100) into MatchMatchEvent

!new MatchEvent('event101')
!event101.eventType := #GOAL
!event101.time := 75
!insert (match26, event101) into MatchMatchEvent

!new MatchEvent('event102')
!event102.eventType := #GOAL
!event102.time := 105
!insert (match26, event102) into MatchMatchEvent

!new MatchEvent('event103')
!event103.eventType := #GOAL
!event103.time := 115
!insert (match26, event103) into MatchMatchEvent

!new TrainingSession('training51')
!training51.date := '2032-10-01'
!training51.location := 'Owl Roost Arena'
!training51.purpose := 'Night Vision and Strategy'
!insert (team51, training51) into TeamTraining

!new TrainingSession('training52')
!training52.date := '2032-10-15'
!training52.location := 'Savanna Stretch'
!training52.purpose := 'Physical Conditioning'
!insert (team52, training52) into TeamTraining

!new TrainingNotes('trainingNote51')
!trainingNote51.note := 'Enhanced awareness for night matches'
!trainingNote51.date := '2032-10-01'
!insert (training51, trainingNote51) into TrainingTrainingNotes

!new TrainingNotes('trainingNote52')
!trainingNote52.note := 'Focused on stamina and strength training'
!trainingNote52.date := '2032-10-15'
!insert (training52, trainingNote52) into TrainingTrainingNotes

!new TrainingObjective('objective51')
!objective51.areaToImprove := 'Precision Passing Under Pressure'
!objective51.startDate := '2032-08-01'
!objective51.endDate := '2032-11-01'
!objective51.success := true
!insert (objective51, player51) into TrainingObjectivePlayer

!new TrainingObjective('objective52')
!objective52.areaToImprove := 'Defensive Resilience'
!objective52.startDate := '2032-08-20'
!objective52.endDate := '2032-11-20'
!objective52.success := false
!insert (objective52, player52) into TrainingObjectivePlayer
```
## Generation 26 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 116 | 0.00% |
| Multiplicities Errors | 0 | 27 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 9 | 0.00% |

# Generation 27
```
!new Club('club53')
!club53.name := 'Gale Falcons'
!club53.homeGround := 'Windy Heights Stadium'
!club53.chairman := 'Finn Breeze'

!new Club('club54')
!club54.name := 'Amber Wolves'
!club54.homeGround := 'Wolfs Den'
!club54.chairman := 'Amber Fang'

!new Team('team53')
!team53.name := 'Falcon Flare'
!insert (club53, team53) into ClubTeam

!new Team('team54')
!team54.name := 'Wolf Howlers'
!insert (club54, team54) into ClubTeam

!new Competition('autumnCup')
!autumnCup.name := 'Autumn Cup'
!autumnCup.type := 'Knockout'

!new Match('match27')
!match27.date := '2033-09-18'
!match27.homeAway := true
!insert (autumnCup, match27) into CompetitionMatch
!insert (team53, match27) into LocalMatch
!insert (team54, match27) into VisitorMatch

!new MatchReport('report27')
!report27.duration := 90
!report27.scoreVisitor := 1
!report27.scoreLocal := 4
!insert (match27, report27) into MatchMatchReport

!new Player('player53')
!player53.name := 'Zara Wind'
!player53.age := 26
!player53.bestFoot := #LEFT
!player53.phoneNumber := '9234567801'
!insert (team53, player53) into TeamPlayer

!new Player('player54')
!player54.name := 'Ethan Ember'
!player54.age := 29
!player54.bestFoot := #RIGHT
!player54.phoneNumber := '8123456790'
!insert (team54, player54) into TeamPlayer

!new Position('position53')
!position53.positionName := #MIDFIELDER
!insert (player53, position53) into PlayerPositions

!new Position('position54')
!position54.positionName := #FORWARD
!insert (player54, position54) into PlayerPositions

!new MatchPlayer('matchPlayer53')
!matchPlayer53.booked := false
!matchPlayer53.goals := 2
!matchPlayer53.rating := 9
!insert (player53, matchPlayer53) into PlayerMatch
!insert (match27, matchPlayer53) into MatchMatchPlayer

!new MatchPlayer('matchPlayer54')
!matchPlayer54.booked := true
!matchPlayer54.goals := 0
!matchPlayer54.rating := 7
!insert (player54, matchPlayer54) into PlayerMatch
!insert (match27, matchPlayer54) into MatchMatchPlayer

!new MatchPlayerPosition('matchPlayerPosition53')
!matchPlayerPosition53.positionName := #MIDFIELDER
!matchPlayerPosition53.number := 10
!insert (matchPlayer53, matchPlayerPosition53) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('matchPlayerPosition54')
!matchPlayerPosition54.positionName := #FORWARD
!matchPlayerPosition54.number := 9
!insert (matchPlayer54, matchPlayerPosition54) into MatchPlayerMatchPlayerPosition

!new MatchEvent('event104')
!event104.eventType := #GOAL
!event104.time := 25
!insert (match27, event104) into MatchMatchEvent

!new MatchEvent('event105')
!event105.eventType := #GOAL
!event105.time := 55
!insert (match27, event105) into MatchMatchEvent

!new MatchEvent('event106')
!event106.eventType := #GOAL
!event106.time := 70
!insert (match27, event106) into MatchMatchEvent

!new MatchEvent('event107')
!event107.eventType := #GOAL
!event107.time := 80
!insert (match27, event107) into MatchMatchEvent

!new MatchEvent('event108')
!event108.eventType := #GOAL
!event108.time := 89
!insert (match27, event108) into MatchMatchEvent

!new TrainingSession('training53')
!training53.date := '2033-08-05'
!training53.location := 'Falcon Training Grounds'
!training53.purpose := 'Wind Resistance Drills'
!insert (team53, training53) into TeamTraining

!new TrainingSession('training54')
!training54.date := '2033-08-15'
!training54.location := 'Amber Lair'
!training54.purpose := 'Precision Shooting'
!insert (team54, training54) into TeamTraining

!new TrainingNotes('trainingNote53')
!trainingNote53.note := 'Improved ball control against strong winds'
!trainingNote53.date := '2033-08-05'
!insert (training53, trainingNote53) into TrainingTrainingNotes

!new TrainingNotes('trainingNote54')
!trainingNote54.note := 'Focused on scoring from tight angles'
!trainingNote54.date := '2033-08-15'
!insert (training54, trainingNote54) into TrainingTrainingNotes

!new TrainingObjective('objective53')
!objective53.areaToImprove := 'Stamina in Adverse Conditions'
!objective53.startDate := '2033-06-01'
!objective53.endDate := '2033-09-01'
!objective53.success := true
!insert (objective53, player53) into TrainingObjectivePlayer

!new TrainingObjective('objective54')
!objective54.areaToImprove := 'Accuracy from Distance'
!objective54.startDate := '2033-06-15'
!objective54.endDate := '2033-09-15'
!objective54.success := false
!insert (objective54, player54) into TrainingObjectivePlayer
```
## Generation 27 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 116 | 0.00% |
| Multiplicities Errors | 0 | 27 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 9 | 0.00% |

# Generation 28
```
!new Club('club55')
!club55.name := 'Crystal Ravens'
!club55.homeGround := 'Obsidian Arena'
!club55.chairman := 'Raven Noir'

!new Club('club56')
!club56.name := 'Desert Falcons'
!club56.homeGround := 'Sahara Nest'
!club56.chairman := 'Falcon Blaze'

!new Team('team55')
!team55.name := 'Raven Shadows'
!insert (club55, team55) into ClubTeam

!new Team('team56')
!team56.name := 'Falcon Fury'
!insert (club56, team56) into ClubTeam

!new Competition('sunsetSeries')
!sunsetSeries.name := 'Sunset Series'
!sunsetSeries.type := 'Round Robin'

!new Match('match28')
!match28.date := '2034-03-10'
!match28.homeAway := false
!insert (sunsetSeries, match28) into CompetitionMatch
!insert (team55, match28) into LocalMatch
!insert (team56, match28) into VisitorMatch

!new MatchReport('report28')
!report28.duration := 120
!report28.scoreVisitor := 3
!report28.scoreLocal := 1
!insert (match28, report28) into MatchMatchReport

!new Player('player55')
!player55.name := 'Diana Eclipse'
!player55.age := 31
!player55.bestFoot := #RIGHT
!player55.phoneNumber := '9123456789'
!insert (team55, player55) into TeamPlayer

!new Player('player56')
!player56.name := 'Ray Blaze'
!player56.age := 30
!player56.bestFoot := #LEFT
!player56.phoneNumber := '8765432190'
!insert (team56, player56) into TeamPlayer

!new Position('position55')
!position55.positionName := #GOALKEEPER
!insert (player55, position55) into PlayerPositions

!new Position('position56')
!position56.positionName := #FORWARD
!insert (player56, position56) into PlayerPositions

!new MatchPlayer('matchPlayer55')
!matchPlayer55.booked := true
!matchPlayer55.goals := 0
!matchPlayer55.rating := 6
!insert (player55, matchPlayer55) into PlayerMatch
!insert (match28, matchPlayer55) into MatchMatchPlayer

!new MatchPlayer('matchPlayer56')
!matchPlayer56.booked := false
!matchPlayer56.goals := 2
!matchPlayer56.rating := 9
!insert (player56, matchPlayer56) into PlayerMatch
!insert (match28, matchPlayer56) into MatchMatchPlayer

!new MatchPlayerPosition('matchPlayerPosition55')
!matchPlayerPosition55.positionName := #GOALKEEPER
!matchPlayerPosition55.number := 1
!insert (matchPlayer55, matchPlayerPosition55) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('matchPlayerPosition56')
!matchPlayerPosition56.positionName := #FORWARD
!matchPlayerPosition56.number := 11
!insert (matchPlayer56, matchPlayerPosition56) into MatchPlayerMatchPlayerPosition

!new MatchEvent('event109')
!event109.eventType := #GOAL
!event109.time := 30
!insert (match28, event109) into MatchMatchEvent

!new MatchEvent('event110')
!event110.eventType := #GOAL
!event110.time := 50
!insert (match28, event110) into MatchMatchEvent

!new MatchEvent('event111')
!event111.eventType := #GOAL
!event111.time := 75
!insert (match28, event111) into MatchMatchEvent

!new MatchEvent('event112')
!event112.eventType := #GOAL
!event112.time := 105
!insert (match28, event112) into MatchMatchEvent

!new TrainingSession('training55')
!training55.date := '2034-02-10'
!training55.location := 'Shaded Haven'
!training55.purpose := 'Defensive Wall Practice'
!insert (team55, training55) into TeamTraining

!new TrainingSession('training56')
!training56.date := '2034-02-18'
!training56.location := 'Falcon Perch'
!training56.purpose := 'Goal Scoring Drills'
!insert (team56, training56) into TeamTraining

!new TrainingNotes('trainingNote55')
!trainingNote55.note := 'Focused on quick reflex save techniques'
!trainingNote55.date := '2034-02-10'
!insert (training55, trainingNote55) into TrainingTrainingNotes

!new TrainingNotes('trainingNote56')
!trainingNote56.note := 'Enhanced targeting and power in shots'
!trainingNote56.date := '2034-02-18'
!insert (training56, trainingNote56) into TrainingTrainingNotes

!new TrainingObjective('objective55')
!objective55.areaToImprove := 'Penalty Defense'
!objective55.startDate := '2033-11-01'
!objective55.endDate := '2034-03-01'
!objective55.success := false
!insert (objective55, player55) into TrainingObjectivePlayer

!new TrainingObjective('objective56')
!objective56.areaToImprove := 'Attacking Aggression'
!objective56.startDate := '2033-11-15'
!objective56.endDate := '2034-03-15'
!objective56.success := true
!insert (objective56, player56) into TrainingObjectivePlayer
```
## Generation 28 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 112 | 0.00% |
| Multiplicities Errors | 0 | 26 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 9 | 0.00% |

# Generation 29
```
!new Club('club57')
!club57.name := 'Azure Dolphins'
!club57.homeGround := 'Bluewave Bay'
!club57.chairman := 'Dylan Ocean'

!new Club('club58')
!club58.name := 'Granite Rhinos'
!club58.homeGround := 'Rock Fortress'
!club58.chairman := 'Rina Stone'

!new Team('team57')
!team57.name := 'Dolphin Splash'
!insert (club57, team57) into ClubTeam

!new Team('team58')
!team58.name := 'Rhino Rampage'
!insert (club58, team58) into ClubTeam

!new Competition('tidalChallenge')
!tidalChallenge.name := 'Tidal Challenge'
!tidalChallenge.type := 'Cup'

!new Match('match29')
!match29.date := '2034-10-12'
!match29.homeAway := false
!insert (tidalChallenge, match29) into CompetitionMatch
!insert (team57, match29) into LocalMatch
!insert (team58, match29) into VisitorMatch

!new MatchReport('report29')
!report29.duration := 90
!report29.scoreVisitor := 2
!report29.scoreLocal := 5
!insert (match29, report29) into MatchMatchReport

!new Player('player57')
!player57.name := 'Finn Tide'
!player57.age := 23
!player57.bestFoot := #LEFT
!player57.phoneNumber := '9345678120'
!insert (team57, player57) into TeamPlayer

!new Player('player58')
!player58.name := 'Granite Boulder'
!player58.age := 29
!player58.bestFoot := #RIGHT
!player58.phoneNumber := '8123456790'
!insert (team58, player58) into TeamPlayer

!new Position('position57')
!position57.positionName := #GOALKEEPER
!insert (player57, position57) into PlayerPositions

!new Position('position58')
!position58.positionName := #DEFENDER
!insert (player58, position58) into PlayerPositions

!new MatchPlayer('matchPlayer57')
!matchPlayer57.booked := false
!matchPlayer57.goals := 0
!matchPlayer57.rating := 8
!insert (player57, matchPlayer57) into PlayerMatch
!insert (match29, matchPlayer57) into MatchMatchPlayer

!new MatchPlayer('matchPlayer58')
!matchPlayer58.booked := true
!matchPlayer58.goals := 1
!matchPlayer58.rating := 7
!insert (player58, matchPlayer58) into PlayerMatch
!insert (match29, matchPlayer58) into MatchMatchPlayer

!new MatchPlayerPosition('matchPlayerPosition57')
!matchPlayerPosition57.positionName := #GOALKEEPER
!matchPlayerPosition57.number := 1
!insert (matchPlayer57, matchPlayerPosition57) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('matchPlayerPosition58')
!matchPlayerPosition58.positionName := #DEFENDER
!matchPlayerPosition58.number := 6
!insert (matchPlayer58, matchPlayerPosition58) into MatchPlayerMatchPlayerPosition

!new MatchEvent('event113')
!event113.eventType := #GOAL
!event113.time := 12
!insert (match29, event113) into MatchMatchEvent

!new MatchEvent('event114')
!event114.eventType := #GOAL
!event114.time := 29
!insert (match29, event114) into MatchMatchEvent

!new MatchEvent('event115')
!event115.eventType := #GOAL
!event115.time := 42
!insert (match29, event115) into MatchMatchEvent

!new MatchEvent('event116')
!event116.eventType := #GOAL
!event116.time := 67
!insert (match29, event116) into MatchMatchEvent

!new MatchEvent('event117')
!event117.eventType := #GOAL
!event117.time := 75
!insert (match29, event117) into MatchMatchEvent

!new MatchEvent('event118')
!event118.eventType := #GOAL
!event118.time := 85
!insert (match29, event118) into MatchMatchEvent

!new MatchEvent('event119')
!event119.eventType := #GOAL
!event119.time := 89
!insert (match29, event119) into MatchMatchEvent

!new TrainingSession('training57')
!training57.date := '2034-09-01'
!training57.location := 'Ocean Pavilion'
!training57.purpose := 'Goalkeeper Reflexes'
!insert (team57, training57) into TeamTraining

!new TrainingSession('training58')
!training58.date := '2034-09-10'
!training58.location := 'Rocky Training Field'
!training58.purpose := 'Defensive Block Techniques'
!insert (team58, training58) into TeamTraining

!new TrainingNotes('trainingNote57')
!trainingNote57.note := 'Improved reaction time and agility'
!trainingNote57.date := '2034-09-01'
!insert (training57, trainingNote57) into TrainingTrainingNotes

!new TrainingNotes('trainingNote58')
!trainingNote58.note := 'Focused on structural wall defenses'
!trainingNote58.date := '2034-09-10'
!insert (training58, trainingNote58) into TrainingTrainingNotes

!new TrainingObjective('objective57')
!objective57.areaToImprove := 'Aerial Saves'
!objective57.startDate := '2034-07-01'
!objective57.endDate := '2034-10-01'
!objective57.success := true
!insert (objective57, player57) into TrainingObjectivePlayer

!new TrainingObjective('objective58')
!objective58.areaToImprove := 'Tackle Timing'
!objective58.startDate := '2034-07-15'
!objective58.endDate := '2034-10-15'
!objective58.success := false
!insert (objective58, player58) into TrainingObjectivePlayer
```
## Generation 29 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 124 | 0.00% |
| Multiplicities Errors | 0 | 29 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 9 | 0.00% |

# Generation 30
```
!new Club('club59')
!club59.name := 'Golden Griffins'
!club59.homeGround := 'Griffin Lair'
!club59.chairman := 'Gordon Gold'

!new Club('club60')
!club60.name := 'Sapphire Serpents'
!club60.homeGround := 'Hydra Dome'
!club60.chairman := 'Serena Blue'

!new Team('team59')
!team59.name := 'Griffin Gliders'
!insert (club59, team59) into ClubTeam

!new Team('team60')
!team60.name := 'Serpent Slayers'
!insert (club60, team60) into ClubTeam

!new Competition('mythicBattle')
!mythicBattle.name := 'Mythic Battle'
!mythicBattle.type := 'League'

!new Match('match30')
!match30.date := '2035-04-15'
!match30.homeAway := true
!insert (mythicBattle, match30) into CompetitionMatch
!insert (team59, match30) into LocalMatch
!insert (team60, match30) into VisitorMatch

!new MatchReport('report30')
!report30.duration := 90
!report30.scoreVisitor := 2
!report30.scoreLocal := 3
!insert (match30, report30) into MatchMatchReport

!new Player('player59')
!player59.name := 'Aria Gold'
!player59.age := 28
!player59.bestFoot := #RIGHT
!player59.phoneNumber := '8675432109'
!insert (team59, player59) into TeamPlayer

!new Player('player60')
!player60.name := 'Navin Blue'
!player60.age := 27
!player60.bestFoot := #LEFT
!player60.phoneNumber := '9765432108'
!insert (team60, player60) into TeamPlayer

!new Position('position59')
!position59.positionName := #FORWARD
!insert (player59, position59) into PlayerPositions

!new Position('position60')
!position60.positionName := #MIDFIELDER
!insert (player60, position60) into PlayerPositions

!new MatchPlayer('matchPlayer59')
!matchPlayer59.booked := false
!matchPlayer59.goals := 2
!matchPlayer59.rating := 9
!insert (player59, matchPlayer59) into PlayerMatch
!insert (match30, matchPlayer59) into MatchMatchPlayer

!new MatchPlayer('matchPlayer60')
!matchPlayer60.booked := true
!matchPlayer60.goals := 1
!matchPlayer60.rating := 8
!insert (player60, matchPlayer60) into PlayerMatch
!insert (match30, matchPlayer60) into MatchMatchPlayer

!new MatchPlayerPosition('matchPlayerPosition59')
!matchPlayerPosition59.positionName := #FORWARD
!matchPlayerPosition59.number := 10
!insert (matchPlayer59, matchPlayerPosition59) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('matchPlayerPosition60')
!matchPlayerPosition60.positionName := #MIDFIELDER
!matchPlayerPosition60.number := 6
!insert (matchPlayer60, matchPlayerPosition60) into MatchPlayerMatchPlayerPosition

!new MatchEvent('event120')
!event120.eventType := #GOAL
!event120.time := 16
!insert (match30, event120) into MatchMatchEvent

!new MatchEvent('event121')
!event121.eventType := #GOAL
!event121.time := 40
!insert (match30, event121) into MatchMatchEvent

!new MatchEvent('event122')
!event122.eventType := #GOAL
!event122.time := 67
!insert (match30, event122) into MatchMatchEvent

!new MatchEvent('event123')
!event123.eventType := #GOAL
!event123.time := 74
!insert (match30, event123) into MatchMatchEvent

!new MatchEvent('event124')
!event124.eventType := #GOAL
!event124.time := 89
!insert (match30, event124) into MatchMatchEvent

!new TrainingSession('training59')
!training59.date := '2035-03-01'
!training59.location := 'Golden Grounds'
!training59.purpose := 'Offensive Strategies'
!insert (team59, training59) into TeamTraining

!new TrainingSession('training60')
!training60.date := '2035-03-10'
!training60.location := 'Serpent Nest'
!training60.purpose := 'Defensive Coordination'
!insert (team60, training60) into TeamTraining

!new TrainingNotes('trainingNote59')
!trainingNote59.note := 'Focused on high-pressure attack formations'
!trainingNote59.date := '2035-03-01'
!insert (training59, trainingNote59) into TrainingTrainingNotes

!new TrainingNotes('trainingNote60')
!trainingNote60.note := 'Strengthened defensive partnerships and transitions'
!trainingNote60.date := '2035-03-10'
!insert (training60, trainingNote60) into TrainingTrainingNotes

!new TrainingObjective('objective59')
!objective59.areaToImprove := 'High Tempo Control'
!objective59.startDate := '2035-01-01'
!objective59.endDate := '2035-04-01'
!objective59.success := true
!insert (objective59, player59) into TrainingObjectivePlayer

!new TrainingObjective('objective60')
!objective60.areaToImprove := 'Ball Interception'
!objective60.startDate := '2035-01-15'
!objective60.endDate := '2035-04-15'
!objective60.success := false
!insert (objective60, player60) into TrainingObjectivePlayer
```
## Generation 30 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 116 | 0.00% |
| Multiplicities Errors | 0 | 27 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 9 | 0.00% |

# Summary for all generations
| Summary | Value | 
|---|---| 
| Model | GPT_4O | 
| Type | Simple | 
| System | football | 
| Number of generations | 30 | 

| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 3376 | 0.00% |
| Multiplicities Errors | 0 | 784 | 0.00% |
| Invariants Errors | 0 | 120 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 270 | 0.00% |

