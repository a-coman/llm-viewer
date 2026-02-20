# Generation 1
```
!new Club('clubNB')
!clubNB.name := 'Northbridge FC'
!clubNB.homeGround := 'Northbridge Park'
!clubNB.chairman := 'Eleanor Hughes'

!new Club('clubRA')
!clubRA.name := 'Riverside Athletic'
!clubRA.homeGround := 'Riverside Stadium'
!clubRA.chairman := 'Martin Cole'

!new Team('teamNB1')
!teamNB1.name := 'Northbridge First Team'

!new Team('teamNB2')
!teamNB2.name := 'Northbridge Reserves'

!new Team('teamRA1')
!teamRA1.name := 'Riverside First Team'

!new Team('teamRA2')
!teamRA2.name := 'Riverside U23'

!insert (clubNB, teamNB1) into ClubTeam
!insert (clubNB, teamNB2) into ClubTeam
!insert (clubRA, teamRA1) into ClubTeam
!insert (clubRA, teamRA2) into ClubTeam

!new Competition('compCup')
!compCup.name := 'National Cup'
!compCup.type := 'Knockout'

!new Competition('compLeague')
!compLeague.name := 'Regional League One'
!compLeague.type := 'League'

!new TrainingSession('tsNB1')
!tsNB1.date := '2026-01-08'
!tsNB1.location := 'Northbridge Training Ground'
!tsNB1.purpose := 'Finishing and attacking patterns'

!new TrainingSession('tsNB2')
!tsNB2.date := '2026-01-09'
!tsNB2.location := 'Northbridge Training Ground'
!tsNB2.purpose := 'Defensive shape and set pieces'

!new TrainingSession('tsRA1')
!tsRA1.date := '2026-01-08'
!tsRA1.location := 'Riverside Training Centre'
!tsRA1.purpose := 'High press and transitions'

!new TrainingSession('tsRA2')
!tsRA2.date := '2026-01-10'
!tsRA2.location := 'Riverside Training Centre'
!tsRA2.purpose := 'Possession drills and build-up'

!insert (teamNB1, tsNB1) into TeamTraining
!insert (teamNB2, tsNB2) into TeamTraining
!insert (teamRA1, tsRA1) into TeamTraining
!insert (teamRA2, tsRA2) into TeamTraining

!new TrainingNotes('tnNB1a')
!tnNB1a.note := 'Good intensity; striker movement improved in final third.'
!tnNB1a.date := '2026-01-08'

!new TrainingNotes('tnNB2a')
!tnNB2a.note := 'Back line kept compact; needs quicker reaction to second balls.'
!tnNB2a.date := '2026-01-09'

!new TrainingNotes('tnRA1a')
!tnRA1a.note := 'Press triggers understood; midfield coordination better.'
!tnRA1a.date := '2026-01-08'

!new TrainingNotes('tnRA2a')
!tnRA2a.note := 'Build-up improved; fullbacks should offer wider passing lanes.'
!tnRA2a.date := '2026-01-10'

!insert (tsNB1, tnNB1a) into TrainingTrainingNotes
!insert (tsNB2, tnNB2a) into TrainingTrainingNotes
!insert (tsRA1, tnRA1a) into TrainingTrainingNotes
!insert (tsRA2, tnRA2a) into TrainingTrainingNotes

!new Player('pNB_GK')
!pNB_GK.name := 'Daniel Price'
!pNB_GK.age := 27
!pNB_GK.bestFoot := #RIGHT
!pNB_GK.phoneNumber := '+44 7700 100101'

!new Player('pNB_FW')
!pNB_FW.name := 'Owen Carter'
!pNB_FW.age := 22
!pNB_FW.bestFoot := #BOTH
!pNB_FW.phoneNumber := '+44 7700 100102'

!new Player('pNBRes_MID')
!pNBRes_MID.name := 'Lewis Grant'
!pNBRes_MID.age := 19
!pNBRes_MID.bestFoot := #LEFT
!pNBRes_MID.phoneNumber := '+44 7700 100201'

!new Player('pNBRes_DEF')
!pNBRes_DEF.name := 'Samir Khan'
!pNBRes_DEF.age := 20
!pNBRes_DEF.bestFoot := #RIGHT
!pNBRes_DEF.phoneNumber := '+44 7700 100202'

!new Player('pRA_GK')
!pRA_GK.name := 'Tomás Silva'
!pRA_GK.age := 29
!pRA_GK.bestFoot := #LEFT
!pRA_GK.phoneNumber := '+44 7700 200101'

!new Player('pRA_FW')
!pRA_FW.name := 'Max ONeill'
!pRA_FW.age := 24
!pRA_FW.bestFoot := #RIGHT
!pRA_FW.phoneNumber := '+44 7700 200102'

!new Player('pRAU23_MID')
!pRAU23_MID.name := 'Ethan Brooks'
!pRAU23_MID.age := 18
!pRAU23_MID.bestFoot := #RIGHT
!pRAU23_MID.phoneNumber := '+44 7700 200201'

!new Player('pRAU23_DEF')
!pRAU23_DEF.name := 'Noah Bennett'
!pRAU23_DEF.age := 19
!pRAU23_DEF.bestFoot := #BOTH
!pRAU23_DEF.phoneNumber := '+44 7700 200202'

!insert (teamNB1, pNB_GK) into TeamPlayer
!insert (teamNB1, pNB_FW) into TeamPlayer
!insert (teamNB2, pNBRes_MID) into TeamPlayer
!insert (teamNB2, pNBRes_DEF) into TeamPlayer
!insert (teamRA1, pRA_GK) into TeamPlayer
!insert (teamRA1, pRA_FW) into TeamPlayer
!insert (teamRA2, pRAU23_MID) into TeamPlayer
!insert (teamRA2, pRAU23_DEF) into TeamPlayer

!new Position('pos_pNB_GK_1')
!pos_pNB_GK_1.positionName := #GOALKEEPER
!insert (pNB_GK, pos_pNB_GK_1) into PlayerPositions

!new Position('pos_pNB_FW_1')
!pos_pNB_FW_1.positionName := #FORWARD
!insert (pNB_FW, pos_pNB_FW_1) into PlayerPositions

!new Position('pos_pNBRes_MID_1')
!pos_pNBRes_MID_1.positionName := #MIDFIELDER
!insert (pNBRes_MID, pos_pNBRes_MID_1) into PlayerPositions

!new Position('pos_pNBRes_DEF_1')
!pos_pNBRes_DEF_1.positionName := #DEFENDER
!insert (pNBRes_DEF, pos_pNBRes_DEF_1) into PlayerPositions

!new Position('pos_pRA_GK_1')
!pos_pRA_GK_1.positionName := #GOALKEEPER
!insert (pRA_GK, pos_pRA_GK_1) into PlayerPositions

!new Position('pos_pRA_FW_1')
!pos_pRA_FW_1.positionName := #FORWARD
!insert (pRA_FW, pos_pRA_FW_1) into PlayerPositions

!new Position('pos_pRAU23_MID_1')
!pos_pRAU23_MID_1.positionName := #MIDFIELDER
!insert (pRAU23_MID, pos_pRAU23_MID_1) into PlayerPositions

!new Position('pos_pRAU23_DEF_1')
!pos_pRAU23_DEF_1.positionName := #DEFENDER
!insert (pRAU23_DEF, pos_pRAU23_DEF_1) into PlayerPositions

!new TrainingObjective('obj_pNB_GK_1')
!obj_pNB_GK_1.areaToImprove := 'Distribution under pressure'
!obj_pNB_GK_1.startDate := '2026-01-01'
!obj_pNB_GK_1.endDate := '2026-02-01'
!obj_pNB_GK_1.success := false
!insert (obj_pNB_GK_1, pNB_GK) into TrainingObjectivePlayer

!new TrainingObjective('obj_pNB_FW_1')
!obj_pNB_FW_1.areaToImprove := 'Finishing with weaker foot'
!obj_pNB_FW_1.startDate := '2026-01-01'
!obj_pNB_FW_1.endDate := '2026-02-01'
!obj_pNB_FW_1.success := true
!insert (obj_pNB_FW_1, pNB_FW) into TrainingObjectivePlayer

!new TrainingObjective('obj_pNBRes_MID_1')
!obj_pNBRes_MID_1.areaToImprove := 'Scanning before receiving'
!obj_pNBRes_MID_1.startDate := '2026-01-05'
!obj_pNBRes_MID_1.endDate := '2026-02-05'
!obj_pNBRes_MID_1.success := false
!insert (obj_pNBRes_MID_1, pNBRes_MID) into TrainingObjectivePlayer

!new TrainingObjective('obj_pNBRes_DEF_1')
!obj_pNBRes_DEF_1.areaToImprove := 'Aerial duels'
!obj_pNBRes_DEF_1.startDate := '2026-01-05'
!obj_pNBRes_DEF_1.endDate := '2026-02-05'
!obj_pNBRes_DEF_1.success := true
!insert (obj_pNBRes_DEF_1, pNBRes_DEF) into TrainingObjectivePlayer

!new TrainingObjective('obj_pRA_GK_1')
!obj_pRA_GK_1.areaToImprove := 'Claiming crosses'
!obj_pRA_GK_1.startDate := '2026-01-02'
!obj_pRA_GK_1.endDate := '2026-02-02'
!obj_pRA_GK_1.success := false
!insert (obj_pRA_GK_1, pRA_GK) into TrainingObjectivePlayer

!new TrainingObjective('obj_pRA_FW_1')
!obj_pRA_FW_1.areaToImprove := 'Timing runs behind the line'
!obj_pRA_FW_1.startDate := '2026-01-02'
!obj_pRA_FW_1.endDate := '2026-02-02'
!obj_pRA_FW_1.success := true
!insert (obj_pRA_FW_1, pRA_FW) into TrainingObjectivePlayer

!new TrainingObjective('obj_pRAU23_MID_1')
!obj_pRAU23_MID_1.areaToImprove := 'Final pass selection'
!obj_pRAU23_MID_1.startDate := '2026-01-06'
!obj_pRAU23_MID_1.endDate := '2026-02-06'
!obj_pRAU23_MID_1.success := false
!insert (obj_pRAU23_MID_1, pRAU23_MID) into TrainingObjectivePlayer

!new TrainingObjective('obj_pRAU23_DEF_1')
!obj_pRAU23_DEF_1.areaToImprove := '1v1 defending stance'
!obj_pRAU23_DEF_1.startDate := '2026-01-06'
!obj_pRAU23_DEF_1.endDate := '2026-02-06'
!obj_pRAU23_DEF_1.success := true
!insert (obj_pRAU23_DEF_1, pRAU23_DEF) into TrainingObjectivePlayer

!new PlayerNotes('pnote1')
!pnote1.note := 'Responds well to video feedback; confident communicator.'
!pnote1.date := '2026-01-07'
!insert (pNB_GK, pnote1) into PlayerPlayerNotes

!new PlayerNotes('pnote2')
!pnote2.note := 'Needs to improve body orientation when receiving under pressure.'
!pnote2.date := '2026-01-11'
!insert (pNBRes_MID, pnote2) into PlayerPlayerNotes

!new TrainingFailedToAttend('fail1')
!fail1.reason := 'Illness'
!insert (tsNB1, fail1) into TrainingFailded
!insert (fail1, pNB_FW) into FailedPlayer

!new TrainingFailedToAttend('fail2')
!fail2.reason := 'University exam'
!insert (tsRA2, fail2) into TrainingFailded
!insert (fail2, pRAU23_MID) into FailedPlayer

!new Match('mCup1')
!mCup1.date := '2026-01-12'
!mCup1.homeAway := true

!new Match('mLeague1')
!mLeague1.date := '2026-01-19'
!mLeague1.homeAway := true

!insert (compCup, mCup1) into CompetitionMatch
!insert (compLeague, mLeague1) into CompetitionMatch

!insert (teamNB1, mCup1) into LocalMatch
!insert (teamRA1, mCup1) into VisitorMatch

!insert (teamNB2, mLeague1) into LocalMatch
!insert (teamRA2, mLeague1) into VisitorMatch

!new MatchReport('mrCup1')
!mrCup1.duration := 90
!mrCup1.scoreVisitor := 1
!mrCup1.scoreLocal := 2
!insert (mCup1, mrCup1) into MatchMatchReport

!new MatchReport('mrLeague1')
!mrLeague1.duration := 90
!mrLeague1.scoreVisitor := 0
!mrLeague1.scoreLocal := 0
!insert (mLeague1, mrLeague1) into MatchMatchReport

!new MatchEvent('evCup1_goal1')
!evCup1_goal1.eventType := #GOAL
!evCup1_goal1.time := 14
!insert (mCup1, evCup1_goal1) into MatchMatchEvent

!new MatchEvent('evCup1_goal2')
!evCup1_goal2.eventType := #GOAL
!evCup1_goal2.time := 51
!insert (mCup1, evCup1_goal2) into MatchMatchEvent

!new MatchEvent('evCup1_goal3')
!evCup1_goal3.eventType := #GOAL
!evCup1_goal3.time := 77
!insert (mCup1, evCup1_goal3) into MatchMatchEvent

!new MatchEvent('evCup1_foul1')
!evCup1_foul1.eventType := #FOUL
!evCup1_foul1.time := 33
!insert (mCup1, evCup1_foul1) into MatchMatchEvent

!new MatchEvent('evCup1_corner1')
!evCup1_corner1.eventType := #CORNER
!evCup1_corner1.time := 68
!insert (mCup1, evCup1_corner1) into MatchMatchEvent

!new MatchEvent('evLeague1_foul1')
!evLeague1_foul1.eventType := #FOUL
!evLeague1_foul1.time := 24
!insert (mLeague1, evLeague1_foul1) into MatchMatchEvent

!new MatchEvent('evLeague1_off1')
!evLeague1_off1.eventType := #OFFSIDE
!evLeague1_off1.time := 62
!insert (mLeague1, evLeague1_off1) into MatchMatchEvent

!new MatchNote('mnCup1_1')
!mnCup1_1.note := 'Cup tie decided by clinical finishing; tempo dropped after 60 minutes.'
!mnCup1_1.date := '2026-01-12'
!insert (mCup1, mnCup1_1) into MatchMatchNote

!new MatchNote('mnLeague1_1')
!mnLeague1_1.note := 'Tight match with few chances; both defences managed transitions well.'
!mnLeague1_1.date := '2026-01-19'
!insert (mLeague1, mnLeague1_1) into MatchMatchNote

!new MatchPlayer('mpCup_NB_GK')
!mpCup_NB_GK.booked := false
!mpCup_NB_GK.goals := 0
!mpCup_NB_GK.rating := 7

!new MatchPlayer('mpCup_NB_FW')
!mpCup_NB_FW.booked := true
!mpCup_NB_FW.goals := 2
!mpCup_NB_FW.rating := 8

!new MatchPlayer('mpCup_RA_GK')
!mpCup_RA_GK.booked := false
!mpCup_RA_GK.goals := 0
!mpCup_RA_GK.rating := 6

!new MatchPlayer('mpCup_RA_FW')
!mpCup_RA_FW.booked := false
!mpCup_RA_FW.goals := 1
!mpCup_RA_FW.rating := 7

!insert (mCup1, mpCup_NB_GK) into MatchMatchPlayer
!insert (mCup1, mpCup_NB_FW) into MatchMatchPlayer
!insert (mCup1, mpCup_RA_GK) into MatchMatchPlayer
!insert (mCup1, mpCup_RA_FW) into MatchMatchPlayer

!insert (pNB_GK, mpCup_NB_GK) into PlayerMatch
!insert (pNB_FW, mpCup_NB_FW) into PlayerMatch
!insert (pRA_GK, mpCup_RA_GK) into PlayerMatch
!insert (pRA_FW, mpCup_RA_FW) into PlayerMatch

!new MatchPlayerPosition('mppCup_NB_GK')
!mppCup_NB_GK.positionName := #GOALKEEPER
!mppCup_NB_GK.number := 1
!insert (mpCup_NB_GK, mppCup_NB_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppCup_NB_FW')
!mppCup_NB_FW.positionName := #FORWARD
!mppCup_NB_FW.number := 9
!insert (mpCup_NB_FW, mppCup_NB_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppCup_RA_GK')
!mppCup_RA_GK.positionName := #GOALKEEPER
!mppCup_RA_GK.number := 1
!insert (mpCup_RA_GK, mppCup_RA_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppCup_RA_FW')
!mppCup_RA_FW.positionName := #FORWARD
!mppCup_RA_FW.number := 11
!insert (mpCup_RA_FW, mppCup_RA_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('mpLeague_NB_MID')
!mpLeague_NB_MID.booked := false
!mpLeague_NB_MID.goals := 0
!mpLeague_NB_MID.rating := 6

!new MatchPlayer('mpLeague_NB_DEF')
!mpLeague_NB_DEF.booked := true
!mpLeague_NB_DEF.goals := 0
!mpLeague_NB_DEF.rating := 7

!new MatchPlayer('mpLeague_RA_MID')
!mpLeague_RA_MID.booked := false
!mpLeague_RA_MID.goals := 0
!mpLeague_RA_MID.rating := 6

!new MatchPlayer('mpLeague_RA_DEF')
!mpLeague_RA_DEF.booked := false
!mpLeague_RA_DEF.goals := 0
!mpLeague_RA_DEF.rating := 7

!insert (mLeague1, mpLeague_NB_MID) into MatchMatchPlayer
!insert (mLeague1, mpLeague_NB_DEF) into MatchMatchPlayer
!insert (mLeague1, mpLeague_RA_MID) into MatchMatchPlayer
!insert (mLeague1, mpLeague_RA_DEF) into MatchMatchPlayer

!insert (pNBRes_MID, mpLeague_NB_MID) into PlayerMatch
!insert (pNBRes_DEF, mpLeague_NB_DEF) into PlayerMatch
!insert (pRAU23_MID, mpLeague_RA_MID) into PlayerMatch
!insert (pRAU23_DEF, mpLeague_RA_DEF) into PlayerMatch

!new MatchPlayerPosition('mppLeague_NB_MID')
!mppLeague_NB_MID.positionName := #MIDFIELDER
!mppLeague_NB_MID.number := 8
!insert (mpLeague_NB_MID, mppLeague_NB_MID) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppLeague_NB_DEF')
!mppLeague_NB_DEF.positionName := #DEFENDER
!mppLeague_NB_DEF.number := 5
!insert (mpLeague_NB_DEF, mppLeague_NB_DEF) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppLeague_RA_MID')
!mppLeague_RA_MID.positionName := #MIDFIELDER
!mppLeague_RA_MID.number := 6
!insert (mpLeague_RA_MID, mppLeague_RA_MID) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppLeague_RA_DEF')
!mppLeague_RA_DEF.positionName := #DEFENDER
!mppLeague_RA_DEF.number := 4
!insert (mpLeague_RA_DEF, mppLeague_RA_DEF) into MatchPlayerMatchPlayerPosition
```
## Generation 1 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 336 | 0.00% |
| Multiplicities Errors | 0 | 83 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 30 | 0.00% |

# Generation 2
```
!new Club('clubSE')
!clubSE.name := 'Seaview United'
!clubSE.homeGround := 'Harbour Lane Ground'
!clubSE.chairman := 'Grace Whitman'

!new Club('clubMH')
!clubMH.name := 'Meadowhill Rovers'
!clubMH.homeGround := 'Meadowhill Arena'
!clubMH.chairman := 'Philip Dyer'

!new Club('clubCT')
!clubCT.name := 'City Town FC'
!clubCT.homeGround := 'Old Market Stadium'
!clubCT.chairman := 'Nadia Al-Sayed'

!new Club('clubGL')
!clubGL.name := 'Greenlane Sporting'
!clubGL.homeGround := 'Greenlane Park'
!clubGL.chairman := 'Robert Lin'

!new Team('teamSE')
!teamSE.name := 'Seaview United Seniors'

!new Team('teamMH')
!teamMH.name := 'Meadowhill Rovers Seniors'

!new Team('teamCT')
!teamCT.name := 'City Town First Team'

!new Team('teamGL')
!teamGL.name := 'Greenlane Sporting First Team'

!insert (clubSE, teamSE) into ClubTeam
!insert (clubMH, teamMH) into ClubTeam
!insert (clubCT, teamCT) into ClubTeam
!insert (clubGL, teamGL) into ClubTeam

!new Competition('compFriendlySeries')
!compFriendlySeries.name := 'Pre-Season Friendly Series'
!compFriendlySeries.type := 'Friendly'

!new TrainingSession('tsSE1')
!tsSE1.date := '2026-01-26'
!tsSE1.location := 'Harbour Lane Ground - Pitch 2'
!tsSE1.purpose := 'Pattern play and crossing'

!new TrainingSession('tsSE2')
!tsSE2.date := '2026-01-29'
!tsSE2.location := 'Harbour Lane Ground - Gym'
!tsSE2.purpose := 'Strength and conditioning'

!new TrainingSession('tsMH1')
!tsMH1.date := '2026-01-27'
!tsMH1.location := 'Meadowhill Arena - Training Pitch'
!tsMH1.purpose := 'Defensive line coordination'

!new TrainingSession('tsCT1')
!tsCT1.date := '2026-01-28'
!tsCT1.location := 'Old Market Stadium - Annex'
!tsCT1.purpose := 'Possession under pressure'

!new TrainingSession('tsGL1')
!tsGL1.date := '2026-01-28'
!tsGL1.location := 'Greenlane Park - Main Pitch'
!tsGL1.purpose := 'Set pieces (attacking/defending)'

!insert (teamSE, tsSE1) into TeamTraining
!insert (teamSE, tsSE2) into TeamTraining
!insert (teamMH, tsMH1) into TeamTraining
!insert (teamCT, tsCT1) into TeamTraining
!insert (teamGL, tsGL1) into TeamTraining

!new TrainingNotes('tnSE1a')
!tnSE1a.note := 'Wide players delivered early; timing in the box improving.'
!tnSE1a.date := '2026-01-26'
!insert (tsSE1, tnSE1a) into TrainingTrainingNotes

!new TrainingNotes('tnSE2a')
!tnSE2a.note := 'Good work rate in gym; monitor hamstring tightness for two players.'
!tnSE2a.date := '2026-01-29'
!insert (tsSE2, tnSE2a) into TrainingTrainingNotes

!new TrainingNotes('tnMH1a')
!tnMH1a.note := 'Back four kept line well; communication between CB and RB needs work.'
!tnMH1a.date := '2026-01-27'
!insert (tsMH1, tnMH1a) into TrainingTrainingNotes

!new TrainingNotes('tnCT1a')
!tnCT1a.note := 'Midfield showed good angles; first touch under pressure inconsistent.'
!tnCT1a.date := '2026-01-28'
!insert (tsCT1, tnCT1a) into TrainingTrainingNotes

!new TrainingNotes('tnGL1a')
!tnGL1a.note := 'Corners: delivery improved; defending second phase still slow.'
!tnGL1a.date := '2026-01-28'
!insert (tsGL1, tnGL1a) into TrainingTrainingNotes

!new Player('pSE_GK')
!pSE_GK.name := 'Hugo Meyer'
!pSE_GK.age := 31
!pSE_GK.bestFoot := #BOTH
!pSE_GK.phoneNumber := '+44 7700 310001'

!new Player('pSE_ST')
!pSE_ST.name := 'Callum Reed'
!pSE_ST.age := 23
!pSE_ST.bestFoot := #RIGHT
!pSE_ST.phoneNumber := '+44 7700 310002'

!new Player('pMH_CB')
!pMH_CB.name := 'Ibrahim Diallo'
!pMH_CB.age := 28
!pMH_CB.bestFoot := #RIGHT
!pMH_CB.phoneNumber := '+44 7700 320001'

!new Player('pMH_ST')
!pMH_ST.name := 'Jasper Holt'
!pMH_ST.age := 26
!pMH_ST.bestFoot := #LEFT
!pMH_ST.phoneNumber := '+44 7700 320002'

!new Player('pCT_MID')
!pCT_MID.name := 'Marco Vella'
!pCT_MID.age := 21
!pCT_MID.bestFoot := #RIGHT
!pCT_MID.phoneNumber := '+44 7700 330001'

!new Player('pCT_DEF')
!pCT_DEF.name := 'Benji Morris'
!pCT_DEF.age := 25
!pCT_DEF.bestFoot := #BOTH
!pCT_DEF.phoneNumber := '+44 7700 330002'

!new Player('pGL_GK')
!pGL_GK.name := 'Kieran Shaw'
!pGL_GK.age := 30
!pGL_GK.bestFoot := #LEFT
!pGL_GK.phoneNumber := '+44 7700 340001'

!new Player('pGL_FW')
!pGL_FW.name := 'Rui Fernandes'
!pGL_FW.age := 24
!pGL_FW.bestFoot := #RIGHT
!pGL_FW.phoneNumber := '+44 7700 340002'

!insert (teamSE, pSE_GK) into TeamPlayer
!insert (teamSE, pSE_ST) into TeamPlayer
!insert (teamMH, pMH_CB) into TeamPlayer
!insert (teamMH, pMH_ST) into TeamPlayer
!insert (teamCT, pCT_MID) into TeamPlayer
!insert (teamCT, pCT_DEF) into TeamPlayer
!insert (teamGL, pGL_GK) into TeamPlayer
!insert (teamGL, pGL_FW) into TeamPlayer

!new Position('posSE_GK_1')
!posSE_GK_1.positionName := #GOALKEEPER
!insert (pSE_GK, posSE_GK_1) into PlayerPositions

!new Position('posSE_ST_1')
!posSE_ST_1.positionName := #FORWARD
!insert (pSE_ST, posSE_ST_1) into PlayerPositions

!new Position('posSE_ST_2')
!posSE_ST_2.positionName := #MIDFIELDER
!insert (pSE_ST, posSE_ST_2) into PlayerPositions

!new Position('posMH_CB_1')
!posMH_CB_1.positionName := #DEFENDER
!insert (pMH_CB, posMH_CB_1) into PlayerPositions

!new Position('posMH_ST_1')
!posMH_ST_1.positionName := #FORWARD
!insert (pMH_ST, posMH_ST_1) into PlayerPositions

!new Position('posCT_MID_1')
!posCT_MID_1.positionName := #MIDFIELDER
!insert (pCT_MID, posCT_MID_1) into PlayerPositions

!new Position('posCT_MID_2')
!posCT_MID_2.positionName := #FORWARD
!insert (pCT_MID, posCT_MID_2) into PlayerPositions

!new Position('posCT_DEF_1')
!posCT_DEF_1.positionName := #DEFENDER
!insert (pCT_DEF, posCT_DEF_1) into PlayerPositions

!new Position('posGL_GK_1')
!posGL_GK_1.positionName := #GOALKEEPER
!insert (pGL_GK, posGL_GK_1) into PlayerPositions

!new Position('posGL_FW_1')
!posGL_FW_1.positionName := #FORWARD
!insert (pGL_FW, posGL_FW_1) into PlayerPositions

!new Position('posGL_FW_2')
!posGL_FW_2.positionName := #MIDFIELDER
!insert (pGL_FW, posGL_FW_2) into PlayerPositions

!new TrainingObjective('objSE_GK_1')
!objSE_GK_1.areaToImprove := 'Starting position on through balls'
!objSE_GK_1.startDate := '2026-01-20'
!objSE_GK_1.endDate := '2026-02-20'
!objSE_GK_1.success := false
!insert (objSE_GK_1, pSE_GK) into TrainingObjectivePlayer

!new TrainingObjective('objSE_ST_1')
!objSE_ST_1.areaToImprove := 'Near-post runs and finishing'
!objSE_ST_1.startDate := '2026-01-20'
!objSE_ST_1.endDate := '2026-02-20'
!objSE_ST_1.success := true
!insert (objSE_ST_1, pSE_ST) into TrainingObjectivePlayer

!new TrainingObjective('objMH_CB_1')
!objMH_CB_1.areaToImprove := 'Body shape when defending wide areas'
!objMH_CB_1.startDate := '2026-01-21'
!objMH_CB_1.endDate := '2026-02-21'
!objMH_CB_1.success := false
!insert (objMH_CB_1, pMH_CB) into TrainingObjectivePlayer

!new TrainingObjective('objMH_ST_1')
!objMH_ST_1.areaToImprove := 'Pressing angle to force play outside'
!objMH_ST_1.startDate := '2026-01-21'
!objMH_ST_1.endDate := '2026-02-21'
!objMH_ST_1.success := true
!insert (objMH_ST_1, pMH_ST) into TrainingObjectivePlayer

!new TrainingObjective('objCT_MID_1')
!objCT_MID_1.areaToImprove := 'Playing forward quickly after turnover'
!objCT_MID_1.startDate := '2026-01-22'
!objCT_MID_1.endDate := '2026-02-22'
!objCT_MID_1.success := false
!insert (objCT_MID_1, pCT_MID) into TrainingObjectivePlayer

!new TrainingObjective('objCT_DEF_1')
!objCT_DEF_1.areaToImprove := 'Defending cut-backs in the box'
!objCT_DEF_1.startDate := '2026-01-22'
!objCT_DEF_1.endDate := '2026-02-22'
!objCT_DEF_1.success := true
!insert (objCT_DEF_1, pCT_DEF) into TrainingObjectivePlayer

!new TrainingObjective('objGL_GK_1')
!objGL_GK_1.areaToImprove := 'Handling shots at chest height'
!objGL_GK_1.startDate := '2026-01-22'
!objGL_GK_1.endDate := '2026-02-22'
!objGL_GK_1.success := true
!insert (objGL_GK_1, pGL_GK) into TrainingObjectivePlayer

!new TrainingObjective('objGL_FW_1')
!objGL_FW_1.areaToImprove := 'Decision-making in final third'
!objGL_FW_1.startDate := '2026-01-22'
!objGL_FW_1.endDate := '2026-02-22'
!objGL_FW_1.success := false
!insert (objGL_FW_1, pGL_FW) into TrainingObjectivePlayer

!new PlayerNotes('pnSE1')
!pnSE1.note := 'Strong leader in the dressing room; sets standards in warm-up.'
!pnSE1.date := '2026-01-25'
!insert (pSE_GK, pnSE1) into PlayerPlayerNotes

!new PlayerNotes('pnGL1')
!pnGL1.note := 'Very quick over first five metres; can improve back-post awareness.'
!pnGL1.date := '2026-01-30'
!insert (pGL_FW, pnGL1) into PlayerPlayerNotes

!new TrainingFailedToAttend('tfaSE1')
!tfaSE1.reason := 'Delayed travel due to weather'
!insert (tsSE1, tfaSE1) into TrainingFailded
!insert (tfaSE1, pSE_ST) into FailedPlayer

!new Match('mF1')
!mF1.date := '2026-02-02'
!mF1.homeAway := false

!new Match('mF2')
!mF2.date := '2026-02-03'
!mF2.homeAway := true

!insert (compFriendlySeries, mF1) into CompetitionMatch
!insert (compFriendlySeries, mF2) into CompetitionMatch

!insert (teamSE, mF1) into LocalMatch
!insert (teamMH, mF1) into VisitorMatch

!insert (teamCT, mF2) into LocalMatch
!insert (teamGL, mF2) into VisitorMatch

!new MatchReport('mrF1')
!mrF1.duration := 90
!mrF1.scoreVisitor := 2
!mrF1.scoreLocal := 3
!insert (mF1, mrF1) into MatchMatchReport

!new MatchReport('mrF2')
!mrF2.duration := 90
!mrF2.scoreVisitor := 0
!mrF2.scoreLocal := 0
!insert (mF2, mrF2) into MatchMatchReport

!new MatchEvent('mF1_g1')
!mF1_g1.eventType := #GOAL
!mF1_g1.time := 7
!insert (mF1, mF1_g1) into MatchMatchEvent

!new MatchEvent('mF1_g2')
!mF1_g2.eventType := #GOAL
!mF1_g2.time := 19
!insert (mF1, mF1_g2) into MatchMatchEvent

!new MatchEvent('mF1_g3')
!mF1_g3.eventType := #GOAL
!mF1_g3.time := 41
!insert (mF1, mF1_g3) into MatchMatchEvent

!new MatchEvent('mF1_g4')
!mF1_g4.eventType := #GOAL
!mF1_g4.time := 72
!insert (mF1, mF1_g4) into MatchMatchEvent

!new MatchEvent('mF1_g5')
!mF1_g5.eventType := #GOAL
!mF1_g5.time := 85
!insert (mF1, mF1_g5) into MatchMatchEvent

!new MatchEvent('mF1_pen')
!mF1_pen.eventType := #PENALTY
!mF1_pen.time := 60
!insert (mF1, mF1_pen) into MatchMatchEvent

!new MatchEvent('mF1_foul')
!mF1_foul.eventType := #FOUL
!mF1_foul.time := 54
!insert (mF1, mF1_foul) into MatchMatchEvent

!new MatchEvent('mF2_off')
!mF2_off.eventType := #OFFSIDE
!mF2_off.time := 12
!insert (mF2, mF2_off) into MatchMatchEvent

!new MatchEvent('mF2_cor')
!mF2_cor.eventType := #CORNER
!mF2_cor.time := 49
!insert (mF2, mF2_cor) into MatchMatchEvent

!new MatchEvent('mF2_pen')
!mF2_pen.eventType := #PENALTY
!mF2_pen.time := 78
!insert (mF2, mF2_pen) into MatchMatchEvent

!new MatchNote('mnF1a')
!mnF1a.note := 'Open game with quick transitions; both teams created chances from wide areas.'
!mnF1a.date := '2026-02-02'
!insert (mF1, mnF1a) into MatchMatchNote

!new MatchNote('mnF1b')
!mnF1b.note := 'Penalty awarded after handball; goalkeeper saved low to his right.'
!mnF1b.date := '2026-02-02'
!insert (mF1, mnF1b) into MatchMatchNote

!new MatchNote('mnF2a')
!mnF2a.note := 'Scoreless but competitive; penalty missed late and both keepers were solid.'
!mnF2a.date := '2026-02-03'
!insert (mF2, mnF2a) into MatchMatchNote

!new MatchPlayer('mpF1_SE_GK')
!mpF1_SE_GK.booked := false
!mpF1_SE_GK.goals := 0
!mpF1_SE_GK.rating := 8

!new MatchPlayer('mpF1_SE_ST')
!mpF1_SE_ST.booked := false
!mpF1_SE_ST.goals := 2
!mpF1_SE_ST.rating := 8

!new MatchPlayer('mpF1_MH_CB')
!mpF1_MH_CB.booked := true
!mpF1_MH_CB.goals := 0
!mpF1_MH_CB.rating := 6

!new MatchPlayer('mpF1_MH_ST')
!mpF1_MH_ST.booked := false
!mpF1_MH_ST.goals := 2
!mpF1_MH_ST.rating := 7

!insert (mF1, mpF1_SE_GK) into MatchMatchPlayer
!insert (mF1, mpF1_SE_ST) into MatchMatchPlayer
!insert (mF1, mpF1_MH_CB) into MatchMatchPlayer
!insert (mF1, mpF1_MH_ST) into MatchMatchPlayer

!insert (pSE_GK, mpF1_SE_GK) into PlayerMatch
!insert (pSE_ST, mpF1_SE_ST) into PlayerMatch
!insert (pMH_CB, mpF1_MH_CB) into PlayerMatch
!insert (pMH_ST, mpF1_MH_ST) into PlayerMatch

!new MatchPlayerPosition('mppF1_SE_GK')
!mppF1_SE_GK.positionName := #GOALKEEPER
!mppF1_SE_GK.number := 1
!insert (mpF1_SE_GK, mppF1_SE_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppF1_SE_ST')
!mppF1_SE_ST.positionName := #FORWARD
!mppF1_SE_ST.number := 9
!insert (mpF1_SE_ST, mppF1_SE_ST) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppF1_MH_CB')
!mppF1_MH_CB.positionName := #DEFENDER
!mppF1_MH_CB.number := 4
!insert (mpF1_MH_CB, mppF1_MH_CB) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppF1_MH_ST')
!mppF1_MH_ST.positionName := #FORWARD
!mppF1_MH_ST.number := 10
!insert (mpF1_MH_ST, mppF1_MH_ST) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('mpF2_CT_MID')
!mpF2_CT_MID.booked := false
!mpF2_CT_MID.goals := 0
!mpF2_CT_MID.rating := 7

!new MatchPlayer('mpF2_CT_DEF')
!mpF2_CT_DEF.booked := true
!mpF2_CT_DEF.goals := 0
!mpF2_CT_DEF.rating := 7

!new MatchPlayer('mpF2_GL_GK')
!mpF2_GL_GK.booked := false
!mpF2_GL_GK.goals := 0
!mpF2_GL_GK.rating := 8

!new MatchPlayer('mpF2_GL_FW')
!mpF2_GL_FW.booked := false
!mpF2_GL_FW.goals := 0
!mpF2_GL_FW.rating := 6

!insert (mF2, mpF2_CT_MID) into MatchMatchPlayer
!insert (mF2, mpF2_CT_DEF) into MatchMatchPlayer
!insert (mF2, mpF2_GL_GK) into MatchMatchPlayer
!insert (mF2, mpF2_GL_FW) into MatchMatchPlayer

!insert (pCT_MID, mpF2_CT_MID) into PlayerMatch
!insert (pCT_DEF, mpF2_CT_DEF) into PlayerMatch
!insert (pGL_GK, mpF2_GL_GK) into PlayerMatch
!insert (pGL_FW, mpF2_GL_FW) into PlayerMatch

!new MatchPlayerPosition('mppF2_CT_MID')
!mppF2_CT_MID.positionName := #MIDFIELDER
!mppF2_CT_MID.number := 8
!insert (mpF2_CT_MID, mppF2_CT_MID) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppF2_CT_DEF')
!mppF2_CT_DEF.positionName := #DEFENDER
!mppF2_CT_DEF.number := 5
!insert (mpF2_CT_DEF, mppF2_CT_DEF) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppF2_GL_GK')
!mppF2_GL_GK.positionName := #GOALKEEPER
!mppF2_GL_GK.number := 1
!insert (mpF2_GL_GK, mppF2_GL_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppF2_GL_FW')
!mppF2_GL_FW.positionName := #FORWARD
!mppF2_GL_FW.number := 7
!insert (mpF2_GL_FW, mppF2_GL_FW) into MatchPlayerMatchPlayerPosition
```
## Generation 2 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 371 | 0.00% |
| Multiplicities Errors | 0 | 90 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 33 | 0.00% |

# Generation 3
```
!new Club('clubWP')
!clubWP.name := 'Westport FC'
!clubWP.homeGround := 'Dockside Field'
!clubWP.chairman := 'Helen Rourke'

!new Club('clubHF')
!clubHF.name := 'Highfield Rangers'
!clubHF.homeGround := 'Highfield Lane'
!clubHF.chairman := 'Gareth Webb'

!new Club('clubSK')
!clubSK.name := 'Southkirk United'
!clubSK.homeGround := 'Kirk Meadow'
!clubSK.chairman := 'Aisha Farrow'

!new Club('clubBR')
!clubBR.name := 'Briarwood Town'
!clubBR.homeGround := 'Briarwood Stadium'
!clubBR.chairman := 'Stephen Ivers'

!new Team('teamWP1')
!teamWP1.name := 'Westport First XI'
!new Team('teamHF1')
!teamHF1.name := 'Highfield First XI'
!new Team('teamSK1')
!teamSK1.name := 'Southkirk Seniors'
!new Team('teamBR1')
!teamBR1.name := 'Briarwood Seniors'

!insert (clubWP, teamWP1) into ClubTeam
!insert (clubHF, teamHF1) into ClubTeam
!insert (clubSK, teamSK1) into ClubTeam
!insert (clubBR, teamBR1) into ClubTeam

!new Competition('compPlayoff')
!compPlayoff.name := 'County Playoff'
!compPlayoff.type := 'Playoff'

!new Competition('compShield')
!compShield.name := 'Charity Shield'
!compShield.type := 'Exhibition'

!new TrainingSession('tsWP_A')
!tsWP_A.date := '2026-02-06'
!tsWP_A.location := 'Dockside Field - Floodlit Pitch'
!tsWP_A.purpose := 'Late-game scenarios and game management'

!new TrainingSession('tsHF_A')
!tsHF_A.date := '2026-02-06'
!tsHF_A.location := 'Highfield Lane - Pitch 1'
!tsHF_A.purpose := 'Defending crosses and second balls'

!new TrainingSession('tsSK_A')
!tsSK_A.date := '2026-02-07'
!tsSK_A.location := 'Kirk Meadow - Training Area'
!tsSK_A.purpose := 'Midfield rotations and counter-press'

!new TrainingSession('tsBR_A')
!tsBR_A.date := '2026-02-07'
!tsBR_A.location := 'Briarwood Stadium - Indoor Dome'
!tsBR_A.purpose := 'Finishing under fatigue'

!insert (teamWP1, tsWP_A) into TeamTraining
!insert (teamHF1, tsHF_A) into TeamTraining
!insert (teamSK1, tsSK_A) into TeamTraining
!insert (teamBR1, tsBR_A) into TeamTraining

!new TrainingNotes('tnWP_A1')
!tnWP_A1.note := 'Worked on protecting a one-goal lead; clear decision-making improved.'
!tnWP_A1.date := '2026-02-06'
!insert (tsWP_A, tnWP_A1) into TrainingTrainingNotes

!new TrainingNotes('tnHF_A1')
!tnHF_A1.note := 'Defensive unit struggled at far post; extra work assigned to fullbacks.'
!tnHF_A1.date := '2026-02-06'
!insert (tsHF_A, tnHF_A1) into TrainingTrainingNotes

!new TrainingNotes('tnSK_A1')
!tnSK_A1.note := 'Counter-press triggers good; must reduce fouls after losing possession.'
!tnSK_A1.date := '2026-02-07'
!insert (tsSK_A, tnSK_A1) into TrainingTrainingNotes

!new TrainingNotes('tnBR_A1')
!tnBR_A1.note := 'Finishing accuracy dipped late; conditioning block planned.'
!tnBR_A1.date := '2026-02-07'
!insert (tsBR_A, tnBR_A1) into TrainingTrainingNotes

!new Player('pWP_1')
!pWP_1.name := 'Mason Clarke'
!pWP_1.age := 30
!pWP_1.bestFoot := #RIGHT
!pWP_1.phoneNumber := '+44 7700 410001'

!new Player('pWP_2')
!pWP_2.name := 'Aron Petrescu'
!pWP_2.age := 20
!pWP_2.bestFoot := #LEFT
!pWP_2.phoneNumber := '+44 7700 410002'

!new Player('pWP_3')
!pWP_3.name := 'Jonah Ellis'
!pWP_3.age := 25
!pWP_3.bestFoot := #BOTH
!pWP_3.phoneNumber := '+44 7700 410003'

!new Player('pHF_1')
!pHF_1.name := 'Rory Bennett'
!pHF_1.age := 27
!pHF_1.bestFoot := #RIGHT
!pHF_1.phoneNumber := '+44 7700 420001'

!new Player('pHF_2')
!pHF_2.name := 'Luka Marin'
!pHF_2.age := 23
!pHF_2.bestFoot := #BOTH
!pHF_2.phoneNumber := '+44 7700 420002'

!new Player('pHF_3')
!pHF_3.name := 'Theo Walsh'
!pHF_3.age := 21
!pHF_3.bestFoot := #LEFT
!pHF_3.phoneNumber := '+44 7700 420003'

!new Player('pSK_1')
!pSK_1.name := 'Nikolai Jansen'
!pSK_1.age := 29
!pSK_1.bestFoot := #RIGHT
!pSK_1.phoneNumber := '+44 7700 430001'

!new Player('pSK_2')
!pSK_2.name := 'Harvey Okoro'
!pSK_2.age := 22
!pSK_2.bestFoot := #RIGHT
!pSK_2.phoneNumber := '+44 7700 430002'

!new Player('pBR_1')
!pBR_1.name := 'Santiago Ruiz'
!pBR_1.age := 26
!pBR_1.bestFoot := #LEFT
!pBR_1.phoneNumber := '+44 7700 440001'

!new Player('pBR_2')
!pBR_2.name := 'Miles Turner'
!pBR_2.age := 24
!pBR_2.bestFoot := #BOTH
!pBR_2.phoneNumber := '+44 7700 440002'

!insert (teamWP1, pWP_1) into TeamPlayer
!insert (teamWP1, pWP_2) into TeamPlayer
!insert (teamWP1, pWP_3) into TeamPlayer
!insert (teamHF1, pHF_1) into TeamPlayer
!insert (teamHF1, pHF_2) into TeamPlayer
!insert (teamHF1, pHF_3) into TeamPlayer
!insert (teamSK1, pSK_1) into TeamPlayer
!insert (teamSK1, pSK_2) into TeamPlayer
!insert (teamBR1, pBR_1) into TeamPlayer
!insert (teamBR1, pBR_2) into TeamPlayer

!new Position('pos_pWP_1_gk')
!pos_pWP_1_gk.positionName := #GOALKEEPER
!insert (pWP_1, pos_pWP_1_gk) into PlayerPositions

!new Position('pos_pWP_2_fw')
!pos_pWP_2_fw.positionName := #FORWARD
!insert (pWP_2, pos_pWP_2_fw) into PlayerPositions

!new Position('pos_pWP_2_mid')
!pos_pWP_2_mid.positionName := #MIDFIELDER
!insert (pWP_2, pos_pWP_2_mid) into PlayerPositions

!new Position('pos_pWP_3_def')
!pos_pWP_3_def.positionName := #DEFENDER
!insert (pWP_3, pos_pWP_3_def) into PlayerPositions

!new Position('pos_pWP_3_mid')
!pos_pWP_3_mid.positionName := #MIDFIELDER
!insert (pWP_3, pos_pWP_3_mid) into PlayerPositions

!new Position('pos_pHF_1_gk')
!pos_pHF_1_gk.positionName := #GOALKEEPER
!insert (pHF_1, pos_pHF_1_gk) into PlayerPositions

!new Position('pos_pHF_2_def')
!pos_pHF_2_def.positionName := #DEFENDER
!insert (pHF_2, pos_pHF_2_def) into PlayerPositions

!new Position('pos_pHF_2_mid')
!pos_pHF_2_mid.positionName := #MIDFIELDER
!insert (pHF_2, pos_pHF_2_mid) into PlayerPositions

!new Position('pos_pHF_3_fw')
!pos_pHF_3_fw.positionName := #FORWARD
!insert (pHF_3, pos_pHF_3_fw) into PlayerPositions

!new Position('pos_pSK_1_mid')
!pos_pSK_1_mid.positionName := #MIDFIELDER
!insert (pSK_1, pos_pSK_1_mid) into PlayerPositions

!new Position('pos_pSK_1_def')
!pos_pSK_1_def.positionName := #DEFENDER
!insert (pSK_1, pos_pSK_1_def) into PlayerPositions

!new Position('pos_pSK_2_fw')
!pos_pSK_2_fw.positionName := #FORWARD
!insert (pSK_2, pos_pSK_2_fw) into PlayerPositions

!new Position('pos_pBR_1_fw')
!pos_pBR_1_fw.positionName := #FORWARD
!insert (pBR_1, pos_pBR_1_fw) into PlayerPositions

!new Position('pos_pBR_2_gk')
!pos_pBR_2_gk.positionName := #GOALKEEPER
!insert (pBR_2, pos_pBR_2_gk) into PlayerPositions

!new Position('pos_pBR_2_def')
!pos_pBR_2_def.positionName := #DEFENDER
!insert (pBR_2, pos_pBR_2_def) into PlayerPositions

!new TrainingObjective('obj_pWP_1')
!obj_pWP_1.areaToImprove := 'Commanding the penalty area'
!obj_pWP_1.startDate := '2026-02-01'
!obj_pWP_1.endDate := '2026-03-01'
!obj_pWP_1.success := false
!insert (obj_pWP_1, pWP_1) into TrainingObjectivePlayer

!new TrainingObjective('obj_pWP_2')
!obj_pWP_2.areaToImprove := 'First-time finishing'
!obj_pWP_2.startDate := '2026-02-01'
!obj_pWP_2.endDate := '2026-03-01'
!obj_pWP_2.success := true
!insert (obj_pWP_2, pWP_2) into TrainingObjectivePlayer

!new TrainingObjective('obj_pWP_3')
!obj_pWP_3.areaToImprove := 'Switching play under pressure'
!obj_pWP_3.startDate := '2026-02-01'
!obj_pWP_3.endDate := '2026-03-01'
!obj_pWP_3.success := false
!insert (obj_pWP_3, pWP_3) into TrainingObjectivePlayer

!new TrainingObjective('obj_pHF_1')
!obj_pHF_1.areaToImprove := 'Distribution accuracy to fullbacks'
!obj_pHF_1.startDate := '2026-02-01'
!obj_pHF_1.endDate := '2026-03-01'
!obj_pHF_1.success := true
!insert (obj_pHF_1, pHF_1) into TrainingObjectivePlayer

!new TrainingObjective('obj_pHF_2')
!obj_pHF_2.areaToImprove := 'Marking at far post on crosses'
!obj_pHF_2.startDate := '2026-02-01'
!obj_pHF_2.endDate := '2026-03-01'
!obj_pHF_2.success := false
!insert (obj_pHF_2, pHF_2) into TrainingObjectivePlayer

!new TrainingObjective('obj_pHF_3')
!obj_pHF_3.areaToImprove := 'Hold-up play with back to goal'
!obj_pHF_3.startDate := '2026-02-01'
!obj_pHF_3.endDate := '2026-03-01'
!obj_pHF_3.success := false
!insert (obj_pHF_3, pHF_3) into TrainingObjectivePlayer

!new TrainingObjective('obj_pSK_1')
!obj_pSK_1.areaToImprove := 'Tempo control in midfield'
!obj_pSK_1.startDate := '2026-02-01'
!obj_pSK_1.endDate := '2026-03-01'
!obj_pSK_1.success := true
!insert (obj_pSK_1, pSK_1) into TrainingObjectivePlayer

!new TrainingObjective('obj_pSK_2')
!obj_pSK_2.areaToImprove := 'Curved runs to stay onside'
!obj_pSK_2.startDate := '2026-02-01'
!obj_pSK_2.endDate := '2026-03-01'
!obj_pSK_2.success := false
!insert (obj_pSK_2, pSK_2) into TrainingObjectivePlayer

!new TrainingObjective('obj_pBR_1')
!obj_pBR_1.areaToImprove := 'Finishing across the goalkeeper'
!obj_pBR_1.startDate := '2026-02-01'
!obj_pBR_1.endDate := '2026-03-01'
!obj_pBR_1.success := true
!insert (obj_pBR_1, pBR_1) into TrainingObjectivePlayer

!new TrainingObjective('obj_pBR_2')
!obj_pBR_2.areaToImprove := 'Positioning on defensive set pieces'
!obj_pBR_2.startDate := '2026-02-01'
!obj_pBR_2.endDate := '2026-03-01'
!obj_pBR_2.success := false
!insert (obj_pBR_2, pBR_2) into TrainingObjectivePlayer

!new PlayerNotes('pln_wp2')
!pln_wp2.note := 'Very sharp in small-sided games; can improve tracking back after turnovers.'
!pln_wp2.date := '2026-02-06'
!insert (pWP_2, pln_wp2) into PlayerPlayerNotes

!new PlayerNotes('pln_hf2')
!pln_hf2.note := 'Strong in duels but loses runner at far post when ball is wide.'
!pln_hf2.date := '2026-02-06'
!insert (pHF_2, pln_hf2) into PlayerPlayerNotes

!new TrainingFailedToAttend('tfa_wpA1')
!tfa_wpA1.reason := 'Minor ankle knock'
!insert (tsWP_A, tfa_wpA1) into TrainingFailded
!insert (tfa_wpA1, pWP_3) into FailedPlayer

!new TrainingFailedToAttend('tfa_hfA1')
!tfa_hfA1.reason := 'Work commitment'
!insert (tsHF_A, tfa_hfA1) into TrainingFailded
!insert (tfa_hfA1, pHF_3) into FailedPlayer

!new TrainingFailedToAttend('tfa_brA1')
!tfa_brA1.reason := 'Late arrival (traffic)'
!insert (tsBR_A, tfa_brA1) into TrainingFailded
!insert (tfa_brA1, pBR_1) into FailedPlayer

!new Match('matchPO1')
!matchPO1.date := '2026-02-10'
!matchPO1.homeAway := true

!new Match('matchSH1')
!matchSH1.date := '2026-02-11'
!matchSH1.homeAway := false

!insert (compPlayoff, matchPO1) into CompetitionMatch
!insert (compShield, matchSH1) into CompetitionMatch

!insert (teamWP1, matchPO1) into LocalMatch
!insert (teamHF1, matchPO1) into VisitorMatch

!insert (teamSK1, matchSH1) into LocalMatch
!insert (teamBR1, matchSH1) into VisitorMatch

!new MatchReport('mr_matchPO1')
!mr_matchPO1.duration := 90
!mr_matchPO1.scoreVisitor := 0
!mr_matchPO1.scoreLocal := 1
!insert (matchPO1, mr_matchPO1) into MatchMatchReport

!new MatchReport('mr_matchSH1')
!mr_matchSH1.duration := 90
!mr_matchSH1.scoreVisitor := 2
!mr_matchSH1.scoreLocal := 2
!insert (matchSH1, mr_matchSH1) into MatchMatchReport

!new MatchEvent('evPO1_off1')
!evPO1_off1.eventType := #OFFSIDE
!evPO1_off1.time := 22
!insert (matchPO1, evPO1_off1) into MatchMatchEvent

!new MatchEvent('evPO1_pen1')
!evPO1_pen1.eventType := #PENALTY
!evPO1_pen1.time := 57
!insert (matchPO1, evPO1_pen1) into MatchMatchEvent

!new MatchEvent('evPO1_foul1')
!evPO1_foul1.eventType := #FOUL
!evPO1_foul1.time := 74
!insert (matchPO1, evPO1_foul1) into MatchMatchEvent

!new MatchEvent('evPO1_goal1')
!evPO1_goal1.eventType := #GOAL
!evPO1_goal1.time := 88
!insert (matchPO1, evPO1_goal1) into MatchMatchEvent

!new MatchNote('mnPO1_1')
!mnPO1_1.note := 'Tactical, low-scoring playoff; winning goal came from a late break.'
!mnPO1_1.date := '2026-02-10'
!insert (matchPO1, mnPO1_1) into MatchMatchNote

!new MatchEvent('evSH1_goal1')
!evSH1_goal1.eventType := #GOAL
!evSH1_goal1.time := 9
!insert (matchSH1, evSH1_goal1) into MatchMatchEvent

!new MatchEvent('evSH1_goal2')
!evSH1_goal2.eventType := #GOAL
!evSH1_goal2.time := 35
!insert (matchSH1, evSH1_goal2) into MatchMatchEvent

!new MatchEvent('evSH1_goal3')
!evSH1_goal3.eventType := #GOAL
!evSH1_goal3.time := 63
!insert (matchSH1, evSH1_goal3) into MatchMatchEvent

!new MatchEvent('evSH1_goal4')
!evSH1_goal4.eventType := #GOAL
!evSH1_goal4.time := 79
!insert (matchSH1, evSH1_goal4) into MatchMatchEvent

!new MatchEvent('evSH1_corner1')
!evSH1_corner1.eventType := #CORNER
!evSH1_corner1.time := 16
!insert (matchSH1, evSH1_corner1) into MatchMatchEvent

!new MatchEvent('evSH1_foul1')
!evSH1_foul1.eventType := #FOUL
!evSH1_foul1.time := 52
!insert (matchSH1, evSH1_foul1) into MatchMatchEvent

!new MatchNote('mnSH1_1')
!mnSH1_1.note := 'Entertaining exhibition with momentum swings; both teams scored from open play.'
!mnSH1_1.date := '2026-02-11'
!insert (matchSH1, mnSH1_1) into MatchMatchNote

!new MatchPlayer('mpPO1_WP_gk')
!mpPO1_WP_gk.booked := false
!mpPO1_WP_gk.goals := 0
!mpPO1_WP_gk.rating := 7

!new MatchPlayer('mpPO1_WP_fw')
!mpPO1_WP_fw.booked := false
!mpPO1_WP_fw.goals := 1
!mpPO1_WP_fw.rating := 8

!new MatchPlayer('mpPO1_HF_gk')
!mpPO1_HF_gk.booked := false
!mpPO1_HF_gk.goals := 0
!mpPO1_HF_gk.rating := 7

!new MatchPlayer('mpPO1_HF_fw')
!mpPO1_HF_fw.booked := true
!mpPO1_HF_fw.goals := 0
!mpPO1_HF_fw.rating := 6

!insert (matchPO1, mpPO1_WP_gk) into MatchMatchPlayer
!insert (matchPO1, mpPO1_WP_fw) into MatchMatchPlayer
!insert (matchPO1, mpPO1_HF_gk) into MatchMatchPlayer
!insert (matchPO1, mpPO1_HF_fw) into MatchMatchPlayer

!insert (pWP_1, mpPO1_WP_gk) into PlayerMatch
!insert (pWP_2, mpPO1_WP_fw) into PlayerMatch
!insert (pHF_1, mpPO1_HF_gk) into PlayerMatch
!insert (pHF_3, mpPO1_HF_fw) into PlayerMatch

!new MatchPlayerPosition('mppPO1_WP_gk')
!mppPO1_WP_gk.positionName := #GOALKEEPER
!mppPO1_WP_gk.number := 1
!insert (mpPO1_WP_gk, mppPO1_WP_gk) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppPO1_WP_fw')
!mppPO1_WP_fw.positionName := #FORWARD
!mppPO1_WP_fw.number := 11
!insert (mpPO1_WP_fw, mppPO1_WP_fw) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppPO1_HF_gk')
!mppPO1_HF_gk.positionName := #GOALKEEPER
!mppPO1_HF_gk.number := 1
!insert (mpPO1_HF_gk, mppPO1_HF_gk) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppPO1_HF_fw')
!mppPO1_HF_fw.positionName := #FORWARD
!mppPO1_HF_fw.number := 9
!insert (mpPO1_HF_fw, mppPO1_HF_fw) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('mpSH1_SK_mid')
!mpSH1_SK_mid.booked := false
!mpSH1_SK_mid.goals := 1
!mpSH1_SK_mid.rating := 7

!new MatchPlayer('mpSH1_SK_fw')
!mpSH1_SK_fw.booked := false
!mpSH1_SK_fw.goals := 1
!mpSH1_SK_fw.rating := 7

!new MatchPlayer('mpSH1_BR_fw')
!mpSH1_BR_fw.booked := false
!mpSH1_BR_fw.goals := 2
!mpSH1_BR_fw.rating := 8

!new MatchPlayer('mpSH1_BR_gk')
!mpSH1_BR_gk.booked := false
!mpSH1_BR_gk.goals := 0
!mpSH1_BR_gk.rating := 6

!insert (matchSH1, mpSH1_SK_mid) into MatchMatchPlayer
!insert (matchSH1, mpSH1_SK_fw) into MatchMatchPlayer
!insert (matchSH1, mpSH1_BR_fw) into MatchMatchPlayer
!insert (matchSH1, mpSH1_BR_gk) into MatchMatchPlayer

!insert (pSK_1, mpSH1_SK_mid) into PlayerMatch
!insert (pSK_2, mpSH1_SK_fw) into PlayerMatch
!insert (pBR_1, mpSH1_BR_fw) into PlayerMatch
!insert (pBR_2, mpSH1_BR_gk) into PlayerMatch

!new MatchPlayerPosition('mppSH1_SK_mid')
!mppSH1_SK_mid.positionName := #MIDFIELDER
!mppSH1_SK_mid.number := 8
!insert (mpSH1_SK_mid, mppSH1_SK_mid) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppSH1_SK_fw')
!mppSH1_SK_fw.positionName := #FORWARD
!mppSH1_SK_fw.number := 10
!insert (mpSH1_SK_fw, mppSH1_SK_fw) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppSH1_BR_fw')
!mppSH1_BR_fw.positionName := #FORWARD
!mppSH1_BR_fw.number := 9
!insert (mpSH1_BR_fw, mppSH1_BR_fw) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppSH1_BR_gk')
!mppSH1_BR_gk.positionName := #GOALKEEPER
!mppSH1_BR_gk.number := 1
!insert (mpSH1_BR_gk, mppSH1_BR_gk) into MatchPlayerMatchPlayerPosition
```
## Generation 3 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 405 | 0.00% |
| Multiplicities Errors | 0 | 99 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 34 | 0.00% |

# Generation 4
```
!new Club('clubLS')
!clubLS.name := 'Lakeside FC'
!clubLS.homeGround := 'Lakeside Community Stadium'
!clubLS.chairman := 'Caroline Ng'

!new Club('clubMC')
!clubMC.name := 'Mountain City FC'
!clubMC.homeGround := 'Summit Park'
!clubMC.chairman := 'Dmitri Volkov'

!new Team('teamLS_A')
!teamLS_A.name := 'Lakeside First Team'
!new Team('teamLS_B')
!teamLS_B.name := 'Lakeside Development Squad'

!new Team('teamMC_A')
!teamMC_A.name := 'Mountain City First Team'
!new Team('teamMC_B')
!teamMC_B.name := 'Mountain City Reserves'

!insert (clubLS, teamLS_A) into ClubTeam
!insert (clubLS, teamLS_B) into ClubTeam
!insert (clubMC, teamMC_A) into ClubTeam
!insert (clubMC, teamMC_B) into ClubTeam

!new Competition('compWI')
!compWI.name := 'Winter Invitational'
!compWI.type := 'Tournament'

!new TrainingSession('tsLSA_1')
!tsLSA_1.date := '2026-02-14'
!tsLSA_1.location := 'Lakeside Community Stadium - Pitch A'
!tsLSA_1.purpose := 'Pressing patterns and counter-press'

!new TrainingSession('tsLSA_2')
!tsLSA_2.date := '2026-02-16'
!tsLSA_2.location := 'Lakeside Community Stadium - Gym'
!tsLSA_2.purpose := 'Strength maintenance and injury prevention'

!new TrainingSession('tsLSB_1')
!tsLSB_1.date := '2026-02-15'
!tsLSB_1.location := 'Lakeside Community Stadium - Pitch B'
!tsLSB_1.purpose := 'Ball retention under pressure'

!new TrainingSession('tsMCA_1')
!tsMCA_1.date := '2026-02-14'
!tsMCA_1.location := 'Summit Park - Training Pitch'
!tsMCA_1.purpose := 'Defending transitions and recovery runs'

!new TrainingSession('tsMCB_1')
!tsMCB_1.date := '2026-02-15'
!tsMCB_1.location := 'Summit Park - Indoor Hall'
!tsMCB_1.purpose := 'Set pieces and restarts'

!insert (teamLS_A, tsLSA_1) into TeamTraining
!insert (teamLS_A, tsLSA_2) into TeamTraining
!insert (teamLS_B, tsLSB_1) into TeamTraining
!insert (teamMC_A, tsMCA_1) into TeamTraining
!insert (teamMC_B, tsMCB_1) into TeamTraining

!new TrainingNotes('tnLSA_1a')
!tnLSA_1a.note := 'Pressing triggers clear; front three worked well to lock play on one side.'
!tnLSA_1a.date := '2026-02-14'
!insert (tsLSA_1, tnLSA_1a) into TrainingTrainingNotes

!new TrainingNotes('tnLSA_2a')
!tnLSA_2a.note := 'Gym session completed; focus on posterior chain and core stability.'
!tnLSA_2a.date := '2026-02-16'
!insert (tsLSA_2, tnLSA_2a) into TrainingTrainingNotes

!new TrainingNotes('tnLSB_1a')
!tnLSB_1a.note := 'Good possession structure; needs quicker switching when overloaded.'
!tnLSB_1a.date := '2026-02-15'
!insert (tsLSB_1, tnLSB_1a) into TrainingTrainingNotes

!new TrainingNotes('tnMCA_1a')
!tnMCA_1a.note := 'Recovery runs improved; reduce rash challenges when outnumbered.'
!tnMCA_1a.date := '2026-02-14'
!insert (tsMCA_1, tnMCA_1a) into TrainingTrainingNotes

!new TrainingNotes('tnMCB_1a')
!tnMCB_1a.note := 'Set-piece routines executed well; marking at near post needs clarity.'
!tnMCB_1a.date := '2026-02-15'
!insert (tsMCB_1, tnMCB_1a) into TrainingTrainingNotes

!new Player('pLSA_GK')
!pLSA_GK.name := 'Peter Holm'
!pLSA_GK.age := 33
!pLSA_GK.bestFoot := #RIGHT
!pLSA_GK.phoneNumber := '+44 7700 510001'

!new Player('pLSA_MID')
!pLSA_MID.name := 'Aiden Pritchard'
!pLSA_MID.age := 24
!pLSA_MID.bestFoot := #BOTH
!pLSA_MID.phoneNumber := '+44 7700 510002'

!new Player('pLSA_FW')
!pLSA_FW.name := 'Kofi Mensah'
!pLSA_FW.age := 21
!pLSA_FW.bestFoot := #LEFT
!pLSA_FW.phoneNumber := '+44 7700 510003'

!new Player('pLSB_DEF')
!pLSB_DEF.name := 'Reece Palmer'
!pLSB_DEF.age := 19
!pLSB_DEF.bestFoot := #RIGHT
!pLSB_DEF.phoneNumber := '+44 7700 511001'

!new Player('pLSB_MID')
!pLSB_MID.name := 'Jun Seo'
!pLSB_MID.age := 18
!pLSB_MID.bestFoot := #RIGHT
!pLSB_MID.phoneNumber := '+44 7700 511002'

!new Player('pLSB_FW')
!pLSB_FW.name := 'Milan Jovic'
!pLSB_FW.age := 20
!pLSB_FW.bestFoot := #BOTH
!pLSB_FW.phoneNumber := '+44 7700 511003'

!new Player('pMCA_GK')
!pMCA_GK.name := 'Alessandro Riva'
!pMCA_GK.age := 28
!pMCA_GK.bestFoot := #LEFT
!pMCA_GK.phoneNumber := '+44 7700 520001'

!new Player('pMCA_DEF')
!pMCA_DEF.name := 'Grant Wallace'
!pMCA_DEF.age := 26
!pMCA_DEF.bestFoot := #RIGHT
!pMCA_DEF.phoneNumber := '+44 7700 520002'

!new Player('pMCA_FW')
!pMCA_FW.name := 'Yusuf Haddad'
!pMCA_FW.age := 23
!pMCA_FW.bestFoot := #RIGHT
!pMCA_FW.phoneNumber := '+44 7700 520003'

!new Player('pMCB_GK')
!pMCB_GK.name := 'Oskar Lind'
!pMCB_GK.age := 22
!pMCB_GK.bestFoot := #BOTH
!pMCB_GK.phoneNumber := '+44 7700 521001'

!new Player('pMCB_MID')
!pMCB_MID.name := 'Tariq Aziz'
!pMCB_MID.age := 20
!pMCB_MID.bestFoot := #LEFT
!pMCB_MID.phoneNumber := '+44 7700 521002'

!new Player('pMCB_DEF')
!pMCB_DEF.name := 'Felix Roth'
!pMCB_DEF.age := 21
!pMCB_DEF.bestFoot := #RIGHT
!pMCB_DEF.phoneNumber := '+44 7700 521003'

!insert (teamLS_A, pLSA_GK) into TeamPlayer
!insert (teamLS_A, pLSA_MID) into TeamPlayer
!insert (teamLS_A, pLSA_FW) into TeamPlayer

!insert (teamLS_B, pLSB_DEF) into TeamPlayer
!insert (teamLS_B, pLSB_MID) into TeamPlayer
!insert (teamLS_B, pLSB_FW) into TeamPlayer

!insert (teamMC_A, pMCA_GK) into TeamPlayer
!insert (teamMC_A, pMCA_DEF) into TeamPlayer
!insert (teamMC_A, pMCA_FW) into TeamPlayer

!insert (teamMC_B, pMCB_GK) into TeamPlayer
!insert (teamMC_B, pMCB_MID) into TeamPlayer
!insert (teamMC_B, pMCB_DEF) into TeamPlayer

!new Position('pos_pLSA_GK_1')
!pos_pLSA_GK_1.positionName := #GOALKEEPER
!insert (pLSA_GK, pos_pLSA_GK_1) into PlayerPositions

!new Position('pos_pLSA_MID_1')
!pos_pLSA_MID_1.positionName := #MIDFIELDER
!insert (pLSA_MID, pos_pLSA_MID_1) into PlayerPositions

!new Position('pos_pLSA_MID_2')
!pos_pLSA_MID_2.positionName := #DEFENDER
!insert (pLSA_MID, pos_pLSA_MID_2) into PlayerPositions

!new Position('pos_pLSA_FW_1')
!pos_pLSA_FW_1.positionName := #FORWARD
!insert (pLSA_FW, pos_pLSA_FW_1) into PlayerPositions

!new Position('pos_pLSB_DEF_1')
!pos_pLSB_DEF_1.positionName := #DEFENDER
!insert (pLSB_DEF, pos_pLSB_DEF_1) into PlayerPositions

!new Position('pos_pLSB_MID_1')
!pos_pLSB_MID_1.positionName := #MIDFIELDER
!insert (pLSB_MID, pos_pLSB_MID_1) into PlayerPositions

!new Position('pos_pLSB_FW_1')
!pos_pLSB_FW_1.positionName := #FORWARD
!insert (pLSB_FW, pos_pLSB_FW_1) into PlayerPositions

!new Position('pos_pLSB_FW_2')
!pos_pLSB_FW_2.positionName := #MIDFIELDER
!insert (pLSB_FW, pos_pLSB_FW_2) into PlayerPositions

!new Position('pos_pMCA_GK_1')
!pos_pMCA_GK_1.positionName := #GOALKEEPER
!insert (pMCA_GK, pos_pMCA_GK_1) into PlayerPositions

!new Position('pos_pMCA_DEF_1')
!pos_pMCA_DEF_1.positionName := #DEFENDER
!insert (pMCA_DEF, pos_pMCA_DEF_1) into PlayerPositions

!new Position('pos_pMCA_DEF_2')
!pos_pMCA_DEF_2.positionName := #MIDFIELDER
!insert (pMCA_DEF, pos_pMCA_DEF_2) into PlayerPositions

!new Position('pos_pMCA_FW_1')
!pos_pMCA_FW_1.positionName := #FORWARD
!insert (pMCA_FW, pos_pMCA_FW_1) into PlayerPositions

!new Position('pos_pMCB_GK_1')
!pos_pMCB_GK_1.positionName := #GOALKEEPER
!insert (pMCB_GK, pos_pMCB_GK_1) into PlayerPositions

!new Position('pos_pMCB_MID_1')
!pos_pMCB_MID_1.positionName := #MIDFIELDER
!insert (pMCB_MID, pos_pMCB_MID_1) into PlayerPositions

!new Position('pos_pMCB_DEF_1')
!pos_pMCB_DEF_1.positionName := #DEFENDER
!insert (pMCB_DEF, pos_pMCB_DEF_1) into PlayerPositions

!new TrainingObjective('obj_pLSA_GK_1')
!obj_pLSA_GK_1.areaToImprove := 'Quicker release to start counterattacks'
!obj_pLSA_GK_1.startDate := '2026-02-10'
!obj_pLSA_GK_1.endDate := '2026-03-10'
!obj_pLSA_GK_1.success := true
!insert (obj_pLSA_GK_1, pLSA_GK) into TrainingObjectivePlayer

!new TrainingObjective('obj_pLSA_MID_1')
!obj_pLSA_MID_1.areaToImprove := 'Receiving on the half-turn'
!obj_pLSA_MID_1.startDate := '2026-02-10'
!obj_pLSA_MID_1.endDate := '2026-03-10'
!obj_pLSA_MID_1.success := false
!insert (obj_pLSA_MID_1, pLSA_MID) into TrainingObjectivePlayer

!new TrainingObjective('obj_pLSA_FW_1')
!obj_pLSA_FW_1.areaToImprove := 'Finishing first time from cut-backs'
!obj_pLSA_FW_1.startDate := '2026-02-10'
!obj_pLSA_FW_1.endDate := '2026-03-10'
!obj_pLSA_FW_1.success := false
!insert (obj_pLSA_FW_1, pLSA_FW) into TrainingObjectivePlayer

!new TrainingObjective('obj_pLSB_DEF_1')
!obj_pLSB_DEF_1.areaToImprove := 'Defending 1v1 in wide areas'
!obj_pLSB_DEF_1.startDate := '2026-02-11'
!obj_pLSB_DEF_1.endDate := '2026-03-11'
!obj_pLSB_DEF_1.success := true
!insert (obj_pLSB_DEF_1, pLSB_DEF) into TrainingObjectivePlayer

!new TrainingObjective('obj_pLSB_MID_1')
!obj_pLSB_MID_1.areaToImprove := 'Passing accuracy under pressure'
!obj_pLSB_MID_1.startDate := '2026-02-11'
!obj_pLSB_MID_1.endDate := '2026-03-11'
!obj_pLSB_MID_1.success := false
!insert (obj_pLSB_MID_1, pLSB_MID) into TrainingObjectivePlayer

!new TrainingObjective('obj_pLSB_FW_1')
!obj_pLSB_FW_1.areaToImprove := 'Pressing intensity and recovery'
!obj_pLSB_FW_1.startDate := '2026-02-11'
!obj_pLSB_FW_1.endDate := '2026-03-11'
!obj_pLSB_FW_1.success := true
!insert (obj_pLSB_FW_1, pLSB_FW) into TrainingObjectivePlayer

!new TrainingObjective('obj_pMCA_GK_1')
!obj_pMCA_GK_1.areaToImprove := 'Cross collection in traffic'
!obj_pMCA_GK_1.startDate := '2026-02-10'
!obj_pMCA_GK_1.endDate := '2026-03-10'
!obj_pMCA_GK_1.success := false
!insert (obj_pMCA_GK_1, pMCA_GK) into TrainingObjectivePlayer

!new TrainingObjective('obj_pMCA_DEF_1')
!obj_pMCA_DEF_1.areaToImprove := 'Tracking runners at the back post'
!obj_pMCA_DEF_1.startDate := '2026-02-10'
!obj_pMCA_DEF_1.endDate := '2026-03-10'
!obj_pMCA_DEF_1.success := false
!insert (obj_pMCA_DEF_1, pMCA_DEF) into TrainingObjectivePlayer

!new TrainingObjective('obj_pMCA_FW_1')
!obj_pMCA_FW_1.areaToImprove := 'Avoiding offsides with curved runs'
!obj_pMCA_FW_1.startDate := '2026-02-10'
!obj_pMCA_FW_1.endDate := '2026-03-10'
!obj_pMCA_FW_1.success := true
!insert (obj_pMCA_FW_1, pMCA_FW) into TrainingObjectivePlayer

!new TrainingObjective('obj_pMCB_GK_1')
!obj_pMCB_GK_1.areaToImprove := 'Footwork for low shots'
!obj_pMCB_GK_1.startDate := '2026-02-11'
!obj_pMCB_GK_1.endDate := '2026-03-11'
!obj_pMCB_GK_1.success := true
!insert (obj_pMCB_GK_1, pMCB_GK) into TrainingObjectivePlayer

!new TrainingObjective('obj_pMCB_MID_1')
!obj_pMCB_MID_1.areaToImprove := 'Switching play to weak side'
!obj_pMCB_MID_1.startDate := '2026-02-11'
!obj_pMCB_MID_1.endDate := '2026-03-11'
!obj_pMCB_MID_1.success := false
!insert (obj_pMCB_MID_1, pMCB_MID) into TrainingObjectivePlayer

!new TrainingObjective('obj_pMCB_DEF_1')
!obj_pMCB_DEF_1.areaToImprove := 'Set-piece marking responsibilities'
!obj_pMCB_DEF_1.startDate := '2026-02-11'
!obj_pMCB_DEF_1.endDate := '2026-03-11'
!obj_pMCB_DEF_1.success := false
!insert (obj_pMCB_DEF_1, pMCB_DEF) into TrainingObjectivePlayer

!new PlayerNotes('pln_LSA_1')
!pln_LSA_1.note := 'Very composed; organizes the back line well.'
!pln_LSA_1.date := '2026-02-13'
!insert (pLSA_GK, pln_LSA_1) into PlayerPlayerNotes

!new PlayerNotes('pln_MCA_1')
!pln_MCA_1.note := 'Explosive runner; needs to vary movement to stay onside.'
!pln_MCA_1.date := '2026-02-13'
!insert (pMCA_FW, pln_MCA_1) into PlayerPlayerNotes

!new TrainingFailedToAttend('tfa_LSA_1')
!tfa_LSA_1.reason := 'Family emergency'
!insert (tsLSA_1, tfa_LSA_1) into TrainingFailded
!insert (tfa_LSA_1, pLSA_FW) into FailedPlayer

!new TrainingFailedToAttend('tfa_MCB_1')
!tfa_MCB_1.reason := 'Minor groin tightness'
!insert (tsMCB_1, tfa_MCB_1) into TrainingFailded
!insert (tfa_MCB_1, pMCB_MID) into FailedPlayer

!new Match('matchWI_1')
!matchWI_1.date := '2026-02-20'
!matchWI_1.homeAway := true

!new Match('matchWI_2')
!matchWI_2.date := '2026-02-21'
!matchWI_2.homeAway := false

!insert (compWI, matchWI_1) into CompetitionMatch
!insert (compWI, matchWI_2) into CompetitionMatch

!insert (teamLS_A, matchWI_1) into LocalMatch
!insert (teamMC_A, matchWI_1) into VisitorMatch

!insert (teamMC_B, matchWI_2) into LocalMatch
!insert (teamLS_B, matchWI_2) into VisitorMatch

!new MatchReport('mrWI_1')
!mrWI_1.duration := 90
!mrWI_1.scoreVisitor := 0
!mrWI_1.scoreLocal := 4
!insert (matchWI_1, mrWI_1) into MatchMatchReport

!new MatchReport('mrWI_2')
!mrWI_2.duration := 90
!mrWI_2.scoreVisitor := 0
!mrWI_2.scoreLocal := 0
!insert (matchWI_2, mrWI_2) into MatchMatchReport

!new MatchEvent('evWI1_goal1')
!evWI1_goal1.eventType := #GOAL
!evWI1_goal1.time := 6
!insert (matchWI_1, evWI1_goal1) into MatchMatchEvent

!new MatchEvent('evWI1_goal2')
!evWI1_goal2.eventType := #GOAL
!evWI1_goal2.time := 28
!insert (matchWI_1, evWI1_goal2) into MatchMatchEvent

!new MatchEvent('evWI1_goal3')
!evWI1_goal3.eventType := #GOAL
!evWI1_goal3.time := 61
!insert (matchWI_1, evWI1_goal3) into MatchMatchEvent

!new MatchEvent('evWI1_goal4')
!evWI1_goal4.eventType := #GOAL
!evWI1_goal4.time := 84
!insert (matchWI_1, evWI1_goal4) into MatchMatchEvent

!new MatchEvent('evWI1_corner1')
!evWI1_corner1.eventType := #CORNER
!evWI1_corner1.time := 12
!insert (matchWI_1, evWI1_corner1) into MatchMatchEvent

!new MatchEvent('evWI1_off1')
!evWI1_off1.eventType := #OFFSIDE
!evWI1_off1.time := 45
!insert (matchWI_1, evWI1_off1) into MatchMatchEvent

!new MatchEvent('evWI1_foul1')
!evWI1_foul1.eventType := #FOUL
!evWI1_foul1.time := 70
!insert (matchWI_1, evWI1_foul1) into MatchMatchEvent

!new MatchEvent('evWI2_foul1')
!evWI2_foul1.eventType := #FOUL
!evWI2_foul1.time := 18
!insert (matchWI_2, evWI2_foul1) into MatchMatchEvent

!new MatchEvent('evWI2_corner1')
!evWI2_corner1.eventType := #CORNER
!evWI2_corner1.time := 56
!insert (matchWI_2, evWI2_corner1) into MatchMatchEvent

!new MatchEvent('evWI2_off1')
!evWI2_off1.eventType := #OFFSIDE
!evWI2_off1.time := 79
!insert (matchWI_2, evWI2_off1) into MatchMatchEvent

!new MatchNote('mnWI1_1')
!mnWI1_1.note := 'Dominant home performance with aggressive pressing; four goals from open play.'
!mnWI1_1.date := '2026-02-20'
!insert (matchWI_1, mnWI1_1) into MatchMatchNote

!new MatchNote('mnWI2_1')
!mnWI2_1.note := 'Goalless match; few clear chances and strong defending on set pieces.'
!mnWI2_1.date := '2026-02-21'
!insert (matchWI_2, mnWI2_1) into MatchMatchNote

!new MatchPlayer('mpWI1_LSA_GK')
!mpWI1_LSA_GK.booked := false
!mpWI1_LSA_GK.goals := 0
!mpWI1_LSA_GK.rating := 7

!new MatchPlayer('mpWI1_LSA_MID')
!mpWI1_LSA_MID.booked := false
!mpWI1_LSA_MID.goals := 1
!mpWI1_LSA_MID.rating := 8

!new MatchPlayer('mpWI1_LSA_FW')
!mpWI1_LSA_FW.booked := false
!mpWI1_LSA_FW.goals := 3
!mpWI1_LSA_FW.rating := 9

!new MatchPlayer('mpWI1_MCA_GK')
!mpWI1_MCA_GK.booked := false
!mpWI1_MCA_GK.goals := 0
!mpWI1_MCA_GK.rating := 5

!new MatchPlayer('mpWI1_MCA_DEF')
!mpWI1_MCA_DEF.booked := true
!mpWI1_MCA_DEF.goals := 0
!mpWI1_MCA_DEF.rating := 5

!new MatchPlayer('mpWI1_MCA_FW')
!mpWI1_MCA_FW.booked := false
!mpWI1_MCA_FW.goals := 0
!mpWI1_MCA_FW.rating := 6

!insert (matchWI_1, mpWI1_LSA_GK) into MatchMatchPlayer
!insert (matchWI_1, mpWI1_LSA_MID) into MatchMatchPlayer
!insert (matchWI_1, mpWI1_LSA_FW) into MatchMatchPlayer
!insert (matchWI_1, mpWI1_MCA_GK) into MatchMatchPlayer
!insert (matchWI_1, mpWI1_MCA_DEF) into MatchMatchPlayer
!insert (matchWI_1, mpWI1_MCA_FW) into MatchMatchPlayer

!insert (pLSA_GK, mpWI1_LSA_GK) into PlayerMatch
!insert (pLSA_MID, mpWI1_LSA_MID) into PlayerMatch
!insert (pLSA_FW, mpWI1_LSA_FW) into PlayerMatch
!insert (pMCA_GK, mpWI1_MCA_GK) into PlayerMatch
!insert (pMCA_DEF, mpWI1_MCA_DEF) into PlayerMatch
!insert (pMCA_FW, mpWI1_MCA_FW) into PlayerMatch

!new MatchPlayerPosition('mppWI1_LSA_GK')
!mppWI1_LSA_GK.positionName := #GOALKEEPER
!mppWI1_LSA_GK.number := 1
!insert (mpWI1_LSA_GK, mppWI1_LSA_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppWI1_LSA_MID')
!mppWI1_LSA_MID.positionName := #MIDFIELDER
!mppWI1_LSA_MID.number := 8
!insert (mpWI1_LSA_MID, mppWI1_LSA_MID) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppWI1_LSA_FW')
!mppWI1_LSA_FW.positionName := #FORWARD
!mppWI1_LSA_FW.number := 9
!insert (mpWI1_LSA_FW, mppWI1_LSA_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppWI1_MCA_GK')
!mppWI1_MCA_GK.positionName := #GOALKEEPER
!mppWI1_MCA_GK.number := 1
!insert (mpWI1_MCA_GK, mppWI1_MCA_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppWI1_MCA_DEF')
!mppWI1_MCA_DEF.positionName := #DEFENDER
!mppWI1_MCA_DEF.number := 5
!insert (mpWI1_MCA_DEF, mppWI1_MCA_DEF) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppWI1_MCA_FW')
!mppWI1_MCA_FW.positionName := #FORWARD
!mppWI1_MCA_FW.number := 11
!insert (mpWI1_MCA_FW, mppWI1_MCA_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('mpWI2_MCB_GK')
!mpWI2_MCB_GK.booked := false
!mpWI2_MCB_GK.goals := 0
!mpWI2_MCB_GK.rating := 7

!new MatchPlayer('mpWI2_MCB_DEF')
!mpWI2_MCB_DEF.booked := true
!mpWI2_MCB_DEF.goals := 0
!mpWI2_MCB_DEF.rating := 7

!new MatchPlayer('mpWI2_LSB_DEF')
!mpWI2_LSB_DEF.booked := false
!mpWI2_LSB_DEF.goals := 0
!mpWI2_LSB_DEF.rating := 7

!new MatchPlayer('mpWI2_LSB_FW')
!mpWI2_LSB_FW.booked := false
!mpWI2_LSB_FW.goals := 0
!mpWI2_LSB_FW.rating := 6

!insert (matchWI_2, mpWI2_MCB_GK) into MatchMatchPlayer
!insert (matchWI_2, mpWI2_MCB_DEF) into MatchMatchPlayer
!insert (matchWI_2, mpWI2_LSB_DEF) into MatchMatchPlayer
!insert (matchWI_2, mpWI2_LSB_FW) into MatchMatchPlayer

!insert (pMCB_GK, mpWI2_MCB_GK) into PlayerMatch
!insert (pMCB_DEF, mpWI2_MCB_DEF) into PlayerMatch
!insert (pLSB_DEF, mpWI2_LSB_DEF) into PlayerMatch
!insert (pLSB_FW, mpWI2_LSB_FW) into PlayerMatch

!new MatchPlayerPosition('mppWI2_MCB_GK')
!mppWI2_MCB_GK.positionName := #GOALKEEPER
!mppWI2_MCB_GK.number := 1
!insert (mpWI2_MCB_GK, mppWI2_MCB_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppWI2_MCB_DEF')
!mppWI2_MCB_DEF.positionName := #DEFENDER
!mppWI2_MCB_DEF.number := 4
!insert (mpWI2_MCB_DEF, mppWI2_MCB_DEF) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppWI2_LSB_DEF')
!mppWI2_LSB_DEF.positionName := #DEFENDER
!mppWI2_LSB_DEF.number := 3
!insert (mpWI2_LSB_DEF, mppWI2_LSB_DEF) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppWI2_LSB_FW')
!mppWI2_LSB_FW.positionName := #FORWARD
!mppWI2_LSB_FW.number := 10
!insert (mpWI2_LSB_FW, mppWI2_LSB_FW) into MatchPlayerMatchPlayerPosition
```
## Generation 4 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 443 | 0.00% |
| Multiplicities Errors | 0 | 109 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 40 | 0.00% |

# Generation 5
```
!new Club('clubEA')
!clubEA.name := 'Eastvale Athletic'
!clubEA.homeGround := 'Eastvale Sports Complex'
!clubEA.chairman := 'Priya Deshmukh'

!new Club('clubSF')
!clubSF.name := 'Stoneford FC'
!clubSF.homeGround := 'Stoneford Recreation Ground'
!clubSF.chairman := 'Colin Mercer'

!new Club('clubKM')
!clubKM.name := 'Kingsmoor FC'
!clubKM.homeGround := 'Kingsmoor Oval'
!clubKM.chairman := 'Helena Strauss'

!new Team('teamEA1')
!teamEA1.name := 'Eastvale Athletic Men'

!new Team('teamEA_W')
!teamEA_W.name := 'Eastvale Athletic Women'

!new Team('teamSF1')
!teamSF1.name := 'Stoneford First Team'

!new Team('teamKM1')
!teamKM1.name := 'Kingsmoor First Team'

!insert (clubEA, teamEA1) into ClubTeam
!insert (clubEA, teamEA_W) into ClubTeam
!insert (clubSF, teamSF1) into ClubTeam
!insert (clubKM, teamKM1) into ClubTeam

!new Competition('compSDC')
!compSDC.name := 'Spring Derby Cup'
!compSDC.type := 'Cup'

!new TrainingSession('tsEA_W_1')
!tsEA_W_1.date := '2026-03-03'
!tsEA_W_1.location := 'Eastvale Sports Complex - Pitch 3'
!tsEA_W_1.purpose := 'Build-up play and breaking lines'

!new TrainingSession('tsEA_W_2')
!tsEA_W_2.date := '2026-03-05'
!tsEA_W_2.location := 'Eastvale Sports Complex - Gym'
!tsEA_W_2.purpose := 'Strength session (lower body)'

!new TrainingSession('tsEA1_1')
!tsEA1_1.date := '2026-03-04'
!tsEA1_1.location := 'Eastvale Sports Complex - Pitch 1'
!tsEA1_1.purpose := 'Defensive set pieces and second balls'

!new TrainingSession('tsSF1_1')
!tsSF1_1.date := '2026-03-03'
!tsSF1_1.location := 'Stoneford Recreation Ground - Main Pitch'
!tsSF1_1.purpose := 'Compact mid-block and counters'

!new TrainingSession('tsKM1_1')
!tsKM1_1.date := '2026-03-04'
!tsKM1_1.location := 'Kingsmoor Oval - Training Pitch'
!tsKM1_1.purpose := 'Press resistance and third-man runs'

!new TrainingSession('tsKM1_2')
!tsKM1_2.date := '2026-03-06'
!tsKM1_2.location := 'Kingsmoor Oval - Main Pitch'
!tsKM1_2.purpose := 'Attacking set pieces and finishing'

!insert (teamEA_W, tsEA_W_1) into TeamTraining
!insert (teamEA_W, tsEA_W_2) into TeamTraining
!insert (teamEA1, tsEA1_1) into TeamTraining
!insert (teamSF1, tsSF1_1) into TeamTraining
!insert (teamKM1, tsKM1_1) into TeamTraining
!insert (teamKM1, tsKM1_2) into TeamTraining

!new TrainingNotes('tnEA_W_1a')
!tnEA_W_1a.note := 'Centre mids found pockets; need quicker support runs from fullbacks.'
!tnEA_W_1a.date := '2026-03-03'
!insert (tsEA_W_1, tnEA_W_1a) into TrainingTrainingNotes

!new TrainingNotes('tnEA_W_2a')
!tnEA_W_2a.note := 'Good gym focus; monitor soreness and keep sprint load moderate next day.'
!tnEA_W_2a.date := '2026-03-05'
!insert (tsEA_W_2, tnEA_W_2a) into TrainingTrainingNotes

!new TrainingNotes('tnEA1_1a')
!tnEA1_1a.note := 'Set-piece organisation improved; goalkeeper communication still inconsistent.'
!tnEA1_1a.date := '2026-03-04'
!insert (tsEA1_1, tnEA1_1a) into TrainingTrainingNotes

!new TrainingNotes('tnSF1_1a')
!tnSF1_1a.note := 'Counters were sharp; reduce needless fouls in wide areas.'
!tnSF1_1a.date := '2026-03-03'
!insert (tsSF1_1, tnSF1_1a) into TrainingTrainingNotes

!new TrainingNotes('tnKM1_1a')
!tnKM1_1a.note := 'Third-man concept understood; tempo dropped after 30 minutes.'
!tnKM1_1a.date := '2026-03-04'
!insert (tsKM1_1, tnKM1_1a) into TrainingTrainingNotes

!new TrainingNotes('tnKM1_2a')
!tnKM1_2a.note := 'Good delivery on corners; attacking the near post produced chances.'
!tnKM1_2a.date := '2026-03-06'
!insert (tsKM1_2, tnKM1_2a) into TrainingTrainingNotes

!new Player('pEA_W_GK')
!pEA_W_GK.name := 'Sofia Lindgren'
!pEA_W_GK.age := 28
!pEA_W_GK.bestFoot := #RIGHT
!pEA_W_GK.phoneNumber := '+44 7700 610101'

!new Player('pEA_W_DEF')
!pEA_W_DEF.name := 'Maya Connors'
!pEA_W_DEF.age := 22
!pEA_W_DEF.bestFoot := #LEFT
!pEA_W_DEF.phoneNumber := '+44 7700 610102'

!new Player('pEA_W_MID')
!pEA_W_MID.name := 'Hannah Doyle'
!pEA_W_MID.age := 24
!pEA_W_MID.bestFoot := #BOTH
!pEA_W_MID.phoneNumber := '+44 7700 610103'

!new Player('pEA_W_FW')
!pEA_W_FW.name := 'Leila Ahmed'
!pEA_W_FW.age := 21
!pEA_W_FW.bestFoot := #RIGHT
!pEA_W_FW.phoneNumber := '+44 7700 610104'

!new Player('pEA1_GK')
!pEA1_GK.name := 'Chris Walton'
!pEA1_GK.age := 32
!pEA1_GK.bestFoot := #LEFT
!pEA1_GK.phoneNumber := '+44 7700 611201'

!new Player('pEA1_DEF')
!pEA1_DEF.name := 'Adam Kowalski'
!pEA1_DEF.age := 27
!pEA1_DEF.bestFoot := #RIGHT
!pEA1_DEF.phoneNumber := '+44 7700 611202'

!new Player('pEA1_MID')
!pEA1_MID.name := 'Elliot Fraser'
!pEA1_MID.age := 25
!pEA1_MID.bestFoot := #BOTH
!pEA1_MID.phoneNumber := '+44 7700 611203'

!new Player('pEA1_FW')
!pEA1_FW.name := 'Luis Ortega'
!pEA1_FW.age := 23
!pEA1_FW.bestFoot := #RIGHT
!pEA1_FW.phoneNumber := '+44 7700 611204'

!new Player('pSF_GK')
!pSF_GK.name := 'Nathan Briggs'
!pSF_GK.age := 30
!pSF_GK.bestFoot := #RIGHT
!pSF_GK.phoneNumber := '+44 7700 620101'

!new Player('pSF_DEF')
!pSF_DEF.name := 'Connor Mills'
!pSF_DEF.age := 26
!pSF_DEF.bestFoot := #BOTH
!pSF_DEF.phoneNumber := '+44 7700 620102'

!new Player('pSF_FW')
!pSF_FW.name := 'Dylan Price'
!pSF_FW.age := 24
!pSF_FW.bestFoot := #LEFT
!pSF_FW.phoneNumber := '+44 7700 620103'

!new Player('pKM_GK')
!pKM_GK.name := 'Viktor Sokolov'
!pKM_GK.age := 29
!pKM_GK.bestFoot := #LEFT
!pKM_GK.phoneNumber := '+44 7700 630101'

!new Player('pKM_DEF')
!pKM_DEF.name := 'Jamie Oakes'
!pKM_DEF.age := 27
!pKM_DEF.bestFoot := #RIGHT
!pKM_DEF.phoneNumber := '+44 7700 630102'

!new Player('pKM_MID1')
!pKM_MID1.name := 'Rayan Cheung'
!pKM_MID1.age := 22
!pKM_MID1.bestFoot := #RIGHT
!pKM_MID1.phoneNumber := '+44 7700 630103'

!new Player('pKM_MID2')
!pKM_MID2.name := 'Oliver Nash'
!pKM_MID2.age := 24
!pKM_MID2.bestFoot := #BOTH
!pKM_MID2.phoneNumber := '+44 7700 630104'

!new Player('pKM_FW')
!pKM_FW.name := 'Evan Kearney'
!pKM_FW.age := 23
!pKM_FW.bestFoot := #RIGHT
!pKM_FW.phoneNumber := '+44 7700 630105'

!insert (teamEA_W, pEA_W_GK) into TeamPlayer
!insert (teamEA_W, pEA_W_DEF) into TeamPlayer
!insert (teamEA_W, pEA_W_MID) into TeamPlayer
!insert (teamEA_W, pEA_W_FW) into TeamPlayer

!insert (teamEA1, pEA1_GK) into TeamPlayer
!insert (teamEA1, pEA1_DEF) into TeamPlayer
!insert (teamEA1, pEA1_MID) into TeamPlayer
!insert (teamEA1, pEA1_FW) into TeamPlayer

!insert (teamSF1, pSF_GK) into TeamPlayer
!insert (teamSF1, pSF_DEF) into TeamPlayer
!insert (teamSF1, pSF_FW) into TeamPlayer

!insert (teamKM1, pKM_GK) into TeamPlayer
!insert (teamKM1, pKM_DEF) into TeamPlayer
!insert (teamKM1, pKM_MID1) into TeamPlayer
!insert (teamKM1, pKM_MID2) into TeamPlayer
!insert (teamKM1, pKM_FW) into TeamPlayer

!new Position('posEA_W_GK_1')
!posEA_W_GK_1.positionName := #GOALKEEPER
!insert (pEA_W_GK, posEA_W_GK_1) into PlayerPositions

!new Position('posEA_W_DEF_1')
!posEA_W_DEF_1.positionName := #DEFENDER
!insert (pEA_W_DEF, posEA_W_DEF_1) into PlayerPositions

!new Position('posEA_W_DEF_2')
!posEA_W_DEF_2.positionName := #MIDFIELDER
!insert (pEA_W_DEF, posEA_W_DEF_2) into PlayerPositions

!new Position('posEA_W_MID_1')
!posEA_W_MID_1.positionName := #MIDFIELDER
!insert (pEA_W_MID, posEA_W_MID_1) into PlayerPositions

!new Position('posEA_W_MID_2')
!posEA_W_MID_2.positionName := #FORWARD
!insert (pEA_W_MID, posEA_W_MID_2) into PlayerPositions

!new Position('posEA_W_MID_3')
!posEA_W_MID_3.positionName := #DEFENDER
!insert (pEA_W_MID, posEA_W_MID_3) into PlayerPositions

!new Position('posEA_W_FW_1')
!posEA_W_FW_1.positionName := #FORWARD
!insert (pEA_W_FW, posEA_W_FW_1) into PlayerPositions

!new Position('posEA1_GK_1')
!posEA1_GK_1.positionName := #GOALKEEPER
!insert (pEA1_GK, posEA1_GK_1) into PlayerPositions

!new Position('posEA1_DEF_1')
!posEA1_DEF_1.positionName := #DEFENDER
!insert (pEA1_DEF, posEA1_DEF_1) into PlayerPositions

!new Position('posEA1_MID_1')
!posEA1_MID_1.positionName := #MIDFIELDER
!insert (pEA1_MID, posEA1_MID_1) into PlayerPositions

!new Position('posEA1_FW_1')
!posEA1_FW_1.positionName := #FORWARD
!insert (pEA1_FW, posEA1_FW_1) into PlayerPositions

!new Position('posSF_GK_1')
!posSF_GK_1.positionName := #GOALKEEPER
!insert (pSF_GK, posSF_GK_1) into PlayerPositions

!new Position('posSF_DEF_1')
!posSF_DEF_1.positionName := #DEFENDER
!insert (pSF_DEF, posSF_DEF_1) into PlayerPositions

!new Position('posSF_FW_1')
!posSF_FW_1.positionName := #FORWARD
!insert (pSF_FW, posSF_FW_1) into PlayerPositions

!new Position('posSF_FW_2')
!posSF_FW_2.positionName := #MIDFIELDER
!insert (pSF_FW, posSF_FW_2) into PlayerPositions

!new Position('posKM_GK_1')
!posKM_GK_1.positionName := #GOALKEEPER
!insert (pKM_GK, posKM_GK_1) into PlayerPositions

!new Position('posKM_DEF_1')
!posKM_DEF_1.positionName := #DEFENDER
!insert (pKM_DEF, posKM_DEF_1) into PlayerPositions

!new Position('posKM_MID1_1')
!posKM_MID1_1.positionName := #MIDFIELDER
!insert (pKM_MID1, posKM_MID1_1) into PlayerPositions

!new Position('posKM_MID2_1')
!posKM_MID2_1.positionName := #MIDFIELDER
!insert (pKM_MID2, posKM_MID2_1) into PlayerPositions

!new Position('posKM_MID2_2')
!posKM_MID2_2.positionName := #DEFENDER
!insert (pKM_MID2, posKM_MID2_2) into PlayerPositions

!new Position('posKM_FW_1')
!posKM_FW_1.positionName := #FORWARD
!insert (pKM_FW, posKM_FW_1) into PlayerPositions

!new TrainingObjective('objEA_W_GK_1')
!objEA_W_GK_1.areaToImprove := 'Dealing with high crosses under pressure'
!objEA_W_GK_1.startDate := '2026-03-01'
!objEA_W_GK_1.endDate := '2026-04-01'
!objEA_W_GK_1.success := false
!insert (objEA_W_GK_1, pEA_W_GK) into TrainingObjectivePlayer

!new TrainingObjective('objEA_W_DEF_1')
!objEA_W_DEF_1.areaToImprove := 'First touch when receiving on the sideline'
!objEA_W_DEF_1.startDate := '2026-03-01'
!objEA_W_DEF_1.endDate := '2026-04-01'
!objEA_W_DEF_1.success := true
!insert (objEA_W_DEF_1, pEA_W_DEF) into TrainingObjectivePlayer

!new TrainingObjective('objEA_W_MID_1')
!objEA_W_MID_1.areaToImprove := 'Playing forward earlier in transitions'
!objEA_W_MID_1.startDate := '2026-03-01'
!objEA_W_MID_1.endDate := '2026-04-01'
!objEA_W_MID_1.success := false
!insert (objEA_W_MID_1, pEA_W_MID) into TrainingObjectivePlayer

!new TrainingObjective('objEA_W_FW_1')
!objEA_W_FW_1.areaToImprove := 'Finishing from tight angles'
!objEA_W_FW_1.startDate := '2026-03-01'
!objEA_W_FW_1.endDate := '2026-04-01'
!objEA_W_FW_1.success := false
!insert (objEA_W_FW_1, pEA_W_FW) into TrainingObjectivePlayer

!new TrainingObjective('objEA1_GK_1')
!objEA1_GK_1.areaToImprove := 'Communication on defensive set pieces'
!objEA1_GK_1.startDate := '2026-03-01'
!objEA1_GK_1.endDate := '2026-04-01'
!objEA1_GK_1.success := true
!insert (objEA1_GK_1, pEA1_GK) into TrainingObjectivePlayer

!new TrainingObjective('objEA1_DEF_1')
!objEA1_DEF_1.areaToImprove := 'Clearing second balls after corners'
!objEA1_DEF_1.startDate := '2026-03-01'
!objEA1_DEF_1.endDate := '2026-04-01'
!objEA1_DEF_1.success := false
!insert (objEA1_DEF_1, pEA1_DEF) into TrainingObjectivePlayer

!new TrainingObjective('objEA1_MID_1')
!objEA1_MID_1.areaToImprove := 'Scanning before receiving in midfield'
!objEA1_MID_1.startDate := '2026-03-01'
!objEA1_MID_1.endDate := '2026-04-01'
!objEA1_MID_1.success := false
!insert (objEA1_MID_1, pEA1_MID) into TrainingObjectivePlayer

!new TrainingObjective('objEA1_FW_1')
!objEA1_FW_1.areaToImprove := 'Attacking the near post on low crosses'
!objEA1_FW_1.startDate := '2026-03-01'
!objEA1_FW_1.endDate := '2026-04-01'
!objEA1_FW_1.success := true
!insert (objEA1_FW_1, pEA1_FW) into TrainingObjectivePlayer

!new TrainingObjective('objSF_GK_1')
!objSF_GK_1.areaToImprove := 'Long passing accuracy to start counters'
!objSF_GK_1.startDate := '2026-03-01'
!objSF_GK_1.endDate := '2026-04-01'
!objSF_GK_1.success := false
!insert (objSF_GK_1, pSF_GK) into TrainingObjectivePlayer

!new TrainingObjective('objSF_DEF_1')
!objSF_DEF_1.areaToImprove := 'Avoiding fouls when isolated 1v1'
!objSF_DEF_1.startDate := '2026-03-01'
!objSF_DEF_1.endDate := '2026-04-01'
!objSF_DEF_1.success := false
!insert (objSF_DEF_1, pSF_DEF) into TrainingObjectivePlayer

!new TrainingObjective('objSF_FW_1')
!objSF_FW_1.areaToImprove := 'Finishing with right foot'
!objSF_FW_1.startDate := '2026-03-01'
!objSF_FW_1.endDate := '2026-04-01'
!objSF_FW_1.success := true
!insert (objSF_FW_1, pSF_FW) into TrainingObjectivePlayer

!new TrainingObjective('objKM_GK_1')
!objKM_GK_1.areaToImprove := 'Handling low shots through traffic'
!objKM_GK_1.startDate := '2026-03-01'
!objKM_GK_1.endDate := '2026-04-01'
!objKM_GK_1.success := true
!insert (objKM_GK_1, pKM_GK) into TrainingObjectivePlayer

!new TrainingObjective('objKM_DEF_1')
!objKM_DEF_1.areaToImprove := 'Covering space behind the fullback'
!objKM_DEF_1.startDate := '2026-03-01'
!objKM_DEF_1.endDate := '2026-04-01'
!objKM_DEF_1.success := false
!insert (objKM_DEF_1, pKM_DEF) into TrainingObjectivePlayer

!new TrainingObjective('objKM_MID1_1')
!objKM_MID1_1.areaToImprove := 'Breaking lines with progressive passes'
!objKM_MID1_1.startDate := '2026-03-01'
!objKM_MID1_1.endDate := '2026-04-01'
!objKM_MID1_1.success := false
!insert (objKM_MID1_1, pKM_MID1) into TrainingObjectivePlayer

!new TrainingObjective('objKM_MID2_1')
!objKM_MID2_1.areaToImprove := 'Switching play under pressure'
!objKM_MID2_1.startDate := '2026-03-01'
!objKM_MID2_1.endDate := '2026-04-01'
!objKM_MID2_1.success := true
!insert (objKM_MID2_1, pKM_MID2) into TrainingObjectivePlayer

!new TrainingObjective('objKM_FW_1')
!objKM_FW_1.areaToImprove := 'Timing runs to stay onside'
!objKM_FW_1.startDate := '2026-03-01'
!objKM_FW_1.endDate := '2026-04-01'
!objKM_FW_1.success := false
!insert (objKM_FW_1, pKM_FW) into TrainingObjectivePlayer

!new PlayerNotes('pnEA_W_1')
!pnEA_W_1.note := 'Excellent work rate; sets pressing intensity in the front line.'
!pnEA_W_1.date := '2026-03-02'
!insert (pEA_W_FW, pnEA_W_1) into PlayerPlayerNotes

!new PlayerNotes('pnSF_1')
!pnSF_1.note := 'Reliable in duels; must stay disciplined around the box.'
!pnSF_1.date := '2026-03-02'
!insert (pSF_DEF, pnSF_1) into PlayerPlayerNotes

!new PlayerNotes('pnKM_1')
!pnKM_1.note := 'Good vision; can simplify decision-making when pressed.'
!pnKM_1.date := '2026-03-02'
!insert (pKM_MID2, pnKM_1) into PlayerPlayerNotes

!new TrainingFailedToAttend('tfaEA_W_1')
!tfaEA_W_1.reason := 'Physio appointment'
!insert (tsEA_W_2, tfaEA_W_1) into TrainingFailded
!insert (tfaEA_W_1, pEA_W_DEF) into FailedPlayer

!new TrainingFailedToAttend('tfaSF_1')
!tfaSF_1.reason := 'Car trouble'
!insert (tsSF1_1, tfaSF_1) into TrainingFailded
!insert (tfaSF_1, pSF_GK) into FailedPlayer

!new TrainingFailedToAttend('tfaKM_1')
!tfaKM_1.reason := 'Illness'
!insert (tsKM1_2, tfaKM_1) into TrainingFailded
!insert (tfaKM_1, pKM_FW) into FailedPlayer

!new Match('matchSDC_1')
!matchSDC_1.date := '2026-03-10'
!matchSDC_1.homeAway := true

!new Match('matchSDC_2')
!matchSDC_2.date := '2026-03-11'
!matchSDC_2.homeAway := false

!insert (compSDC, matchSDC_1) into CompetitionMatch
!insert (compSDC, matchSDC_2) into CompetitionMatch

!insert (teamEA_W, matchSDC_1) into LocalMatch
!insert (teamSF1, matchSDC_1) into VisitorMatch

!insert (teamKM1, matchSDC_2) into LocalMatch
!insert (teamEA1, matchSDC_2) into VisitorMatch

!new MatchReport('mrSDC_1')
!mrSDC_1.duration := 90
!mrSDC_1.scoreVisitor := 1
!mrSDC_1.scoreLocal := 0
!insert (matchSDC_1, mrSDC_1) into MatchMatchReport

!new MatchReport('mrSDC_2')
!mrSDC_2.duration := 90
!mrSDC_2.scoreVisitor := 2
!mrSDC_2.scoreLocal := 2
!insert (matchSDC_2, mrSDC_2) into MatchMatchReport

!new MatchEvent('evSDC1_goal')
!evSDC1_goal.eventType := #GOAL
!evSDC1_goal.time := 73
!insert (matchSDC_1, evSDC1_goal) into MatchMatchEvent

!new MatchEvent('evSDC1_foul')
!evSDC1_foul.eventType := #FOUL
!evSDC1_foul.time := 38
!insert (matchSDC_1, evSDC1_foul) into MatchMatchEvent

!new MatchEvent('evSDC1_corner')
!evSDC1_corner.eventType := #CORNER
!evSDC1_corner.time := 59
!insert (matchSDC_1, evSDC1_corner) into MatchMatchEvent

!new MatchEvent('evSDC1_pen')
!evSDC1_pen.eventType := #PENALTY
!evSDC1_pen.time := 12
!insert (matchSDC_1, evSDC1_pen) into MatchMatchEvent

!new MatchNote('mnSDC1_1')
!mnSDC1_1.note := 'Visitors scored late after sustained pressure; home side defended well but lacked final pass.'
!mnSDC1_1.date := '2026-03-10'
!insert (matchSDC_1, mnSDC1_1) into MatchMatchNote

!new MatchEvent('evSDC2_goal1')
!evSDC2_goal1.eventType := #GOAL
!evSDC2_goal1.time := 8
!insert (matchSDC_2, evSDC2_goal1) into MatchMatchEvent

!new MatchEvent('evSDC2_goal2')
!evSDC2_goal2.eventType := #GOAL
!evSDC2_goal2.time := 27
!insert (matchSDC_2, evSDC2_goal2) into MatchMatchEvent

!new MatchEvent('evSDC2_goal3')
!evSDC2_goal3.eventType := #GOAL
!evSDC2_goal3.time := 66
!insert (matchSDC_2, evSDC2_goal3) into MatchMatchEvent

!new MatchEvent('evSDC2_goal4')
!evSDC2_goal4.eventType := #GOAL
!evSDC2_goal4.time := 90
!insert (matchSDC_2, evSDC2_goal4) into MatchMatchEvent

!new MatchEvent('evSDC2_off')
!evSDC2_off.eventType := #OFFSIDE
!evSDC2_off.time := 52
!insert (matchSDC_2, evSDC2_off) into MatchMatchEvent

!new MatchEvent('evSDC2_foul')
!evSDC2_foul.eventType := #FOUL
!evSDC2_foul.time := 71
!insert (matchSDC_2, evSDC2_foul) into MatchMatchEvent

!new MatchNote('mnSDC2_1')
!mnSDC2_1.note := 'High tempo draw; late equaliser after corner pressure.'
!mnSDC2_1.date := '2026-03-11'
!insert (matchSDC_2, mnSDC2_1) into MatchMatchNote

!new MatchPlayer('mpSDC1_EA_W_GK')
!mpSDC1_EA_W_GK.booked := false
!mpSDC1_EA_W_GK.goals := 0
!mpSDC1_EA_W_GK.rating := 7

!new MatchPlayer('mpSDC1_EA_W_FW')
!mpSDC1_EA_W_FW.booked := false
!mpSDC1_EA_W_FW.goals := 0
!mpSDC1_EA_W_FW.rating := 6

!new MatchPlayer('mpSDC1_SF_DEF')
!mpSDC1_SF_DEF.booked := true
!mpSDC1_SF_DEF.goals := 0
!mpSDC1_SF_DEF.rating := 7

!new MatchPlayer('mpSDC1_SF_FW')
!mpSDC1_SF_FW.booked := false
!mpSDC1_SF_FW.goals := 1
!mpSDC1_SF_FW.rating := 8

!insert (matchSDC_1, mpSDC1_EA_W_GK) into MatchMatchPlayer
!insert (matchSDC_1, mpSDC1_EA_W_FW) into MatchMatchPlayer
!insert (matchSDC_1, mpSDC1_SF_DEF) into MatchMatchPlayer
!insert (matchSDC_1, mpSDC1_SF_FW) into MatchMatchPlayer

!insert (pEA_W_GK, mpSDC1_EA_W_GK) into PlayerMatch
!insert (pEA_W_FW, mpSDC1_EA_W_FW) into PlayerMatch
!insert (pSF_DEF, mpSDC1_SF_DEF) into PlayerMatch
!insert (pSF_FW, mpSDC1_SF_FW) into PlayerMatch

!new MatchPlayerPosition('mppSDC1_EA_W_GK')
!mppSDC1_EA_W_GK.positionName := #GOALKEEPER
!mppSDC1_EA_W_GK.number := 1
!insert (mpSDC1_EA_W_GK, mppSDC1_EA_W_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppSDC1_EA_W_FW')
!mppSDC1_EA_W_FW.positionName := #FORWARD
!mppSDC1_EA_W_FW.number := 11
!insert (mpSDC1_EA_W_FW, mppSDC1_EA_W_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppSDC1_SF_DEF')
!mppSDC1_SF_DEF.positionName := #DEFENDER
!mppSDC1_SF_DEF.number := 5
!insert (mpSDC1_SF_DEF, mppSDC1_SF_DEF) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppSDC1_SF_FW')
!mppSDC1_SF_FW.positionName := #FORWARD
!mppSDC1_SF_FW.number := 9
!insert (mpSDC1_SF_FW, mppSDC1_SF_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('mpSDC2_KM_GK')
!mpSDC2_KM_GK.booked := false
!mpSDC2_KM_GK.goals := 0
!mpSDC2_KM_GK.rating := 7

!new MatchPlayer('mpSDC2_KM_MID2')
!mpSDC2_KM_MID2.booked := false
!mpSDC2_KM_MID2.goals := 1
!mpSDC2_KM_MID2.rating := 8

!new MatchPlayer('mpSDC2_KM_FW')
!mpSDC2_KM_FW.booked := true
!mpSDC2_KM_FW.goals := 1
!mpSDC2_KM_FW.rating := 7

!new MatchPlayer('mpSDC2_EA1_MID')
!mpSDC2_EA1_MID.booked := false
!mpSDC2_EA1_MID.goals := 1
!mpSDC2_EA1_MID.rating := 7

!new MatchPlayer('mpSDC2_EA1_FW')
!mpSDC2_EA1_FW.booked := false
!mpSDC2_EA1_FW.goals := 1
!mpSDC2_EA1_FW.rating := 8

!new MatchPlayer('mpSDC2_EA1_DEF')
!mpSDC2_EA1_DEF.booked := true
!mpSDC2_EA1_DEF.goals := 0
!mpSDC2_EA1_DEF.rating := 6

!insert (matchSDC_2, mpSDC2_KM_GK) into MatchMatchPlayer
!insert (matchSDC_2, mpSDC2_KM_MID2) into MatchMatchPlayer
!insert (matchSDC_2, mpSDC2_KM_FW) into MatchMatchPlayer
!insert (matchSDC_2, mpSDC2_EA1_MID) into MatchMatchPlayer
!insert (matchSDC_2, mpSDC2_EA1_FW) into MatchMatchPlayer
!insert (matchSDC_2, mpSDC2_EA1_DEF) into MatchMatchPlayer

!insert (pKM_GK, mpSDC2_KM_GK) into PlayerMatch
!insert (pKM_MID2, mpSDC2_KM_MID2) into PlayerMatch
!insert (pKM_FW, mpSDC2_KM_FW) into PlayerMatch
!insert (pEA1_MID, mpSDC2_EA1_MID) into PlayerMatch
!insert (pEA1_FW, mpSDC2_EA1_FW) into PlayerMatch
!insert (pEA1_DEF, mpSDC2_EA1_DEF) into PlayerMatch

!new MatchPlayerPosition('mppSDC2_KM_GK')
!mppSDC2_KM_GK.positionName := #GOALKEEPER
!mppSDC2_KM_GK.number := 1
!insert (mpSDC2_KM_GK, mppSDC2_KM_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppSDC2_KM_MID2')
!mppSDC2_KM_MID2.positionName := #MIDFIELDER
!mppSDC2_KM_MID2.number := 10
!insert (mpSDC2_KM_MID2, mppSDC2_KM_MID2) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppSDC2_KM_FW')
!mppSDC2_KM_FW.positionName := #FORWARD
!mppSDC2_KM_FW.number := 9
!insert (mpSDC2_KM_FW, mppSDC2_KM_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppSDC2_EA1_MID')
!mppSDC2_EA1_MID.positionName := #MIDFIELDER
!mppSDC2_EA1_MID.number := 8
!insert (mpSDC2_EA1_MID, mppSDC2_EA1_MID) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppSDC2_EA1_FW')
!mppSDC2_EA1_FW.positionName := #FORWARD
!mppSDC2_EA1_FW.number := 11
!insert (mpSDC2_EA1_FW, mppSDC2_EA1_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppSDC2_EA1_DEF')
!mppSDC2_EA1_DEF.positionName := #DEFENDER
!mppSDC2_EA1_DEF.number := 4
!insert (mpSDC2_EA1_DEF, mppSDC2_EA1_DEF) into MatchPlayerMatchPlayerPosition
```
## Generation 5 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 530 | 0.00% |
| Multiplicities Errors | 0 | 128 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 51 | 0.00% |

# Generation 6
```
!new Club('clubHP')
!clubHP.name := 'Harborport FC'
!clubHP.homeGround := 'Harborport Marina Stadium'
!clubHP.chairman := 'Jonathan Pierce'

!new Club('clubRD')
!clubRD.name := 'Redmont United'
!clubRD.homeGround := 'Redmont Field'
!clubRD.chairman := 'Sonia Patel'

!new Club('clubIV')
!clubIV.name := 'Ironvale City'
!clubIV.homeGround := 'Ironvale Works Park'
!clubIV.chairman := 'Kenji Watanabe'

!new Club('clubQS')
!clubQS.name := 'Queensborough AFC'
!clubQS.homeGround := 'Queensborough Common'
!clubQS.chairman := 'Marianne Leclerc'

!new Team('teamHP_S')
!teamHP_S.name := 'Harborport Senior Squad'

!new Team('teamRD_S')
!teamRD_S.name := 'Redmont Senior Squad'

!new Team('teamIV_S')
!teamIV_S.name := 'Ironvale City First Team'

!new Team('teamQS_S')
!teamQS_S.name := 'Queensborough First Team'

!insert (clubHP, teamHP_S) into ClubTeam
!insert (clubRD, teamRD_S) into ClubTeam
!insert (clubIV, teamIV_S) into ClubTeam
!insert (clubQS, teamQS_S) into ClubTeam

!new Competition('compMetro')
!compMetro.name := 'Metro Senior League'
!compMetro.type := 'League'

!new TrainingSession('tsHP_1')
!tsHP_1.date := '2026-03-14'
!tsHP_1.location := 'Harborport Marina Stadium - Training Pitch'
!tsHP_1.purpose := 'Low-block defending and quick outlets'

!new TrainingSession('tsRD_1')
!tsRD_1.date := '2026-03-14'
!tsRD_1.location := 'Redmont Field - Pitch 2'
!tsRD_1.purpose := 'Ball circulation and switching play'

!new TrainingSession('tsIV_1')
!tsIV_1.date := '2026-03-15'
!tsIV_1.location := 'Ironvale Works Park - Main Pitch'
!tsIV_1.purpose := 'Final-third combinations and finishing'

!new TrainingSession('tsQS_1')
!tsQS_1.date := '2026-03-15'
!tsQS_1.location := 'Queensborough Common - Grass Pitch'
!tsQS_1.purpose := 'Counterattacks and set-piece defending'

!insert (teamHP_S, tsHP_1) into TeamTraining
!insert (teamRD_S, tsRD_1) into TeamTraining
!insert (teamIV_S, tsIV_1) into TeamTraining
!insert (teamQS_S, tsQS_1) into TeamTraining

!new TrainingNotes('tnHP_1a')
!tnHP_1a.note := 'Defensive distances good; outlets too slow when winning the ball.'
!tnHP_1a.date := '2026-03-14'
!insert (tsHP_1, tnHP_1a) into TrainingTrainingNotes

!new TrainingNotes('tnRD_1a')
!tnRD_1a.note := 'Switching improved; must increase tempo after first touch.'
!tnRD_1a.date := '2026-03-14'
!insert (tsRD_1, tnRD_1a) into TrainingTrainingNotes

!new TrainingNotes('tnIV_1a')
!tnIV_1a.note := 'Good combination play; finishing better when attacks ended with cut-backs.'
!tnIV_1a.date := '2026-03-15'
!insert (tsIV_1, tnIV_1a) into TrainingTrainingNotes

!new TrainingNotes('tnQS_1a')
!tnQS_1a.note := 'Counterattacks sharp; set-piece marking assignments need clarity.'
!tnQS_1a.date := '2026-03-15'
!insert (tsQS_1, tnQS_1a) into TrainingTrainingNotes

!new Player('pHP_GK')
!pHP_GK.name := 'Elliot Marsh'
!pHP_GK.age := 34
!pHP_GK.bestFoot := #RIGHT
!pHP_GK.phoneNumber := '+44 7700 710001'

!new Player('pHP_DEF')
!pHP_DEF.name := 'Vince Harper'
!pHP_DEF.age := 29
!pHP_DEF.bestFoot := #BOTH
!pHP_DEF.phoneNumber := '+44 7700 710002'

!new Player('pHP_FW')
!pHP_FW.name := 'Rafael Costa'
!pHP_FW.age := 22
!pHP_FW.bestFoot := #LEFT
!pHP_FW.phoneNumber := '+44 7700 710003'

!new Player('pRD_GK')
!pRD_GK.name := 'Simon Keane'
!pRD_GK.age := 27
!pRD_GK.bestFoot := #LEFT
!pRD_GK.phoneNumber := '+44 7700 720001'

!new Player('pRD_MID')
!pRD_MID.name := 'Bilal Hassan'
!pRD_MID.age := 25
!pRD_MID.bestFoot := #RIGHT
!pRD_MID.phoneNumber := '+44 7700 720002'

!new Player('pRD_FW')
!pRD_FW.name := 'Finn OConnell'
!pRD_FW.age := 21
!pRD_FW.bestFoot := #RIGHT
!pRD_FW.phoneNumber := '+44 7700 720003'

!new Player('pIV_GK')
!pIV_GK.name := 'Marek Novak'
!pIV_GK.age := 30
!pIV_GK.bestFoot := #BOTH
!pIV_GK.phoneNumber := '+44 7700 730001'

!new Player('pIV_MID')
!pIV_MID.name := 'Tomasz Zielinski'
!pIV_MID.age := 24
!pIV_MID.bestFoot := #RIGHT
!pIV_MID.phoneNumber := '+44 7700 730002'

!new Player('pIV_FW')
!pIV_FW.name := 'Aaron Kim'
!pIV_FW.age := 23
!pIV_FW.bestFoot := #LEFT
!pIV_FW.phoneNumber := '+44 7700 730003'

!new Player('pQS_GK')
!pQS_GK.name := 'George Haines'
!pQS_GK.age := 31
!pQS_GK.bestFoot := #RIGHT
!pQS_GK.phoneNumber := '+44 7700 740001'

!new Player('pQS_DEF')
!pQS_DEF.name := 'Ismael Benali'
!pQS_DEF.age := 26
!pQS_DEF.bestFoot := #BOTH
!pQS_DEF.phoneNumber := '+44 7700 740002'

!new Player('pQS_FW')
!pQS_FW.name := 'Kai Thompson'
!pQS_FW.age := 20
!pQS_FW.bestFoot := #RIGHT
!pQS_FW.phoneNumber := '+44 7700 740003'

!insert (teamHP_S, pHP_GK) into TeamPlayer
!insert (teamHP_S, pHP_DEF) into TeamPlayer
!insert (teamHP_S, pHP_FW) into TeamPlayer

!insert (teamRD_S, pRD_GK) into TeamPlayer
!insert (teamRD_S, pRD_MID) into TeamPlayer
!insert (teamRD_S, pRD_FW) into TeamPlayer

!insert (teamIV_S, pIV_GK) into TeamPlayer
!insert (teamIV_S, pIV_MID) into TeamPlayer
!insert (teamIV_S, pIV_FW) into TeamPlayer

!insert (teamQS_S, pQS_GK) into TeamPlayer
!insert (teamQS_S, pQS_DEF) into TeamPlayer
!insert (teamQS_S, pQS_FW) into TeamPlayer

!new Position('posHP_GK')
!posHP_GK.positionName := #GOALKEEPER
!insert (pHP_GK, posHP_GK) into PlayerPositions

!new Position('posHP_DEF1')
!posHP_DEF1.positionName := #DEFENDER
!insert (pHP_DEF, posHP_DEF1) into PlayerPositions

!new Position('posHP_DEF2')
!posHP_DEF2.positionName := #MIDFIELDER
!insert (pHP_DEF, posHP_DEF2) into PlayerPositions

!new Position('posHP_FW')
!posHP_FW.positionName := #FORWARD
!insert (pHP_FW, posHP_FW) into PlayerPositions

!new Position('posRD_GK')
!posRD_GK.positionName := #GOALKEEPER
!insert (pRD_GK, posRD_GK) into PlayerPositions

!new Position('posRD_MID')
!posRD_MID.positionName := #MIDFIELDER
!insert (pRD_MID, posRD_MID) into PlayerPositions

!new Position('posRD_FW1')
!posRD_FW1.positionName := #FORWARD
!insert (pRD_FW, posRD_FW1) into PlayerPositions

!new Position('posRD_FW2')
!posRD_FW2.positionName := #MIDFIELDER
!insert (pRD_FW, posRD_FW2) into PlayerPositions

!new Position('posIV_GK')
!posIV_GK.positionName := #GOALKEEPER
!insert (pIV_GK, posIV_GK) into PlayerPositions

!new Position('posIV_MID1')
!posIV_MID1.positionName := #MIDFIELDER
!insert (pIV_MID, posIV_MID1) into PlayerPositions

!new Position('posIV_MID2')
!posIV_MID2.positionName := #DEFENDER
!insert (pIV_MID, posIV_MID2) into PlayerPositions

!new Position('posIV_FW')
!posIV_FW.positionName := #FORWARD
!insert (pIV_FW, posIV_FW) into PlayerPositions

!new Position('posQS_GK')
!posQS_GK.positionName := #GOALKEEPER
!insert (pQS_GK, posQS_GK) into PlayerPositions

!new Position('posQS_DEF')
!posQS_DEF.positionName := #DEFENDER
!insert (pQS_DEF, posQS_DEF) into PlayerPositions

!new Position('posQS_FW1')
!posQS_FW1.positionName := #FORWARD
!insert (pQS_FW, posQS_FW1) into PlayerPositions

!new Position('posQS_FW2')
!posQS_FW2.positionName := #MIDFIELDER
!insert (pQS_FW, posQS_FW2) into PlayerPositions

!new Position('posQS_FW3')
!posQS_FW3.positionName := #DEFENDER
!insert (pQS_FW, posQS_FW3) into PlayerPositions

!new TrainingObjective('objHP_GK_1')
!objHP_GK_1.areaToImprove := 'Punching decisions on crowded corners'
!objHP_GK_1.startDate := '2026-03-10'
!objHP_GK_1.endDate := '2026-04-10'
!objHP_GK_1.success := false
!insert (objHP_GK_1, pHP_GK) into TrainingObjectivePlayer

!new TrainingObjective('objHP_DEF_1')
!objHP_DEF_1.areaToImprove := 'Passing out from the back under press'
!objHP_DEF_1.startDate := '2026-03-10'
!objHP_DEF_1.endDate := '2026-04-10'
!objHP_DEF_1.success := true
!insert (objHP_DEF_1, pHP_DEF) into TrainingObjectivePlayer

!new TrainingObjective('objHP_FW_1')
!objHP_FW_1.areaToImprove := 'Finishing with left foot from central areas'
!objHP_FW_1.startDate := '2026-03-10'
!objHP_FW_1.endDate := '2026-04-10'
!objHP_FW_1.success := false
!insert (objHP_FW_1, pHP_FW) into TrainingObjectivePlayer

!new TrainingObjective('objRD_GK_1')
!objRD_GK_1.areaToImprove := 'Distribution speed to start counters'
!objRD_GK_1.startDate := '2026-03-10'
!objRD_GK_1.endDate := '2026-04-10'
!objRD_GK_1.success := true
!insert (objRD_GK_1, pRD_GK) into TrainingObjectivePlayer

!new TrainingObjective('objRD_MID_1')
!objRD_MID_1.areaToImprove := 'Receiving on the half-turn'
!objRD_MID_1.startDate := '2026-03-10'
!objRD_MID_1.endDate := '2026-04-10'
!objRD_MID_1.success := false
!insert (objRD_MID_1, pRD_MID) into TrainingObjectivePlayer

!new TrainingObjective('objRD_FW_1')
!objRD_FW_1.areaToImprove := 'Making curved runs to avoid offside'
!objRD_FW_1.startDate := '2026-03-10'
!objRD_FW_1.endDate := '2026-04-10'
!objRD_FW_1.success := false
!insert (objRD_FW_1, pRD_FW) into TrainingObjectivePlayer

!new TrainingObjective('objIV_GK_1')
!objIV_GK_1.areaToImprove := 'Footwork for low saves'
!objIV_GK_1.startDate := '2026-03-11'
!objIV_GK_1.endDate := '2026-04-11'
!objIV_GK_1.success := true
!insert (objIV_GK_1, pIV_GK) into TrainingObjectivePlayer

!new TrainingObjective('objIV_MID_1')
!objIV_MID_1.areaToImprove := 'Playing forward quickly after regain'
!objIV_MID_1.startDate := '2026-03-11'
!objIV_MID_1.endDate := '2026-04-11'
!objIV_MID_1.success := true
!insert (objIV_MID_1, pIV_MID) into TrainingObjectivePlayer

!new TrainingObjective('objIV_FW_1')
!objIV_FW_1.areaToImprove := 'Composure in 1v1 situations'
!objIV_FW_1.startDate := '2026-03-11'
!objIV_FW_1.endDate := '2026-04-11'
!objIV_FW_1.success := false
!insert (objIV_FW_1, pIV_FW) into TrainingObjectivePlayer

!new TrainingObjective('objQS_GK_1')
!objQS_GK_1.areaToImprove := 'Claiming crosses at the back post'
!objQS_GK_1.startDate := '2026-03-11'
!objQS_GK_1.endDate := '2026-04-11'
!objQS_GK_1.success := false
!insert (objQS_GK_1, pQS_GK) into TrainingObjectivePlayer

!new TrainingObjective('objQS_DEF_1')
!objQS_DEF_1.areaToImprove := 'Defending cut-backs in the box'
!objQS_DEF_1.startDate := '2026-03-11'
!objQS_DEF_1.endDate := '2026-04-11'
!objQS_DEF_1.success := true
!insert (objQS_DEF_1, pQS_DEF) into TrainingObjectivePlayer

!new TrainingObjective('objQS_FW_1')
!objQS_FW_1.areaToImprove := 'Tracking back after losing possession'
!objQS_FW_1.startDate := '2026-03-11'
!objQS_FW_1.endDate := '2026-04-11'
!objQS_FW_1.success := false
!insert (objQS_FW_1, pQS_FW) into TrainingObjectivePlayer

!new PlayerNotes('pnoteHP1')
!pnoteHP1.note := 'Calm presence; needs to command box louder on set pieces.'
!pnoteHP1.date := '2026-03-13'
!insert (pHP_GK, pnoteHP1) into PlayerPlayerNotes

!new PlayerNotes('pnoteIV1')
!pnoteIV1.note := 'Creates chances consistently; must reduce speculative shots from distance.'
!pnoteIV1.date := '2026-03-16'
!insert (pIV_MID, pnoteIV1) into PlayerPlayerNotes

!new TrainingFailedToAttend('tfaRD1')
!tfaRD1.reason := 'Late train cancellation'
!insert (tsRD_1, tfaRD1) into TrainingFailded
!insert (tfaRD1, pRD_FW) into FailedPlayer

!new TrainingFailedToAttend('tfaQS1')
!tfaQS1.reason := 'Sickness'
!insert (tsQS_1, tfaQS1) into TrainingFailded
!insert (tfaQS1, pQS_DEF) into FailedPlayer

!new Match('matchMetro_1')
!matchMetro_1.date := '2026-03-20'
!matchMetro_1.homeAway := true

!new Match('matchMetro_2')
!matchMetro_2.date := '2026-03-21'
!matchMetro_2.homeAway := false

!insert (compMetro, matchMetro_1) into CompetitionMatch
!insert (compMetro, matchMetro_2) into CompetitionMatch

!insert (teamHP_S, matchMetro_1) into LocalMatch
!insert (teamRD_S, matchMetro_1) into VisitorMatch

!insert (teamIV_S, matchMetro_2) into LocalMatch
!insert (teamQS_S, matchMetro_2) into VisitorMatch

!new MatchReport('mrMetro_1')
!mrMetro_1.duration := 90
!mrMetro_1.scoreVisitor := 0
!mrMetro_1.scoreLocal := 0
!insert (matchMetro_1, mrMetro_1) into MatchMatchReport

!new MatchReport('mrMetro_2')
!mrMetro_2.duration := 90
!mrMetro_2.scoreVisitor := 2
!mrMetro_2.scoreLocal := 4
!insert (matchMetro_2, mrMetro_2) into MatchMatchReport

!new MatchEvent('evM1_foul1')
!evM1_foul1.eventType := #FOUL
!evM1_foul1.time := 11
!insert (matchMetro_1, evM1_foul1) into MatchMatchEvent

!new MatchEvent('evM1_corner1')
!evM1_corner1.eventType := #CORNER
!evM1_corner1.time := 29
!insert (matchMetro_1, evM1_corner1) into MatchMatchEvent

!new MatchEvent('evM1_off1')
!evM1_off1.eventType := #OFFSIDE
!evM1_off1.time := 55
!insert (matchMetro_1, evM1_off1) into MatchMatchEvent

!new MatchEvent('evM1_pen1')
!evM1_pen1.eventType := #PENALTY
!evM1_pen1.time := 79
!insert (matchMetro_1, evM1_pen1) into MatchMatchEvent

!new MatchNote('mnM1_1')
!mnM1_1.note := 'Goalless match; late penalty shout but no breakthrough. Both keepers solid.'
!mnM1_1.date := '2026-03-20'
!insert (matchMetro_1, mnM1_1) into MatchMatchNote

!new MatchEvent('evM2_goal1')
!evM2_goal1.eventType := #GOAL
!evM2_goal1.time := 4
!insert (matchMetro_2, evM2_goal1) into MatchMatchEvent

!new MatchEvent('evM2_goal2')
!evM2_goal2.eventType := #GOAL
!evM2_goal2.time := 17
!insert (matchMetro_2, evM2_goal2) into MatchMatchEvent

!new MatchEvent('evM2_goal3')
!evM2_goal3.eventType := #GOAL
!evM2_goal3.time := 33
!insert (matchMetro_2, evM2_goal3) into MatchMatchEvent

!new MatchEvent('evM2_goal4')
!evM2_goal4.eventType := #GOAL
!evM2_goal4.time := 48
!insert (matchMetro_2, evM2_goal4) into MatchMatchEvent

!new MatchEvent('evM2_goal5')
!evM2_goal5.eventType := #GOAL
!evM2_goal5.time := 70
!insert (matchMetro_2, evM2_goal5) into MatchMatchEvent

!new MatchEvent('evM2_goal6')
!evM2_goal6.eventType := #GOAL
!evM2_goal6.time := 87
!insert (matchMetro_2, evM2_goal6) into MatchMatchEvent

!new MatchEvent('evM2_foul1')
!evM2_foul1.eventType := #FOUL
!evM2_foul1.time := 22
!insert (matchMetro_2, evM2_foul1) into MatchMatchEvent

!new MatchEvent('evM2_corner1')
!evM2_corner1.eventType := #CORNER
!evM2_corner1.time := 61
!insert (matchMetro_2, evM2_corner1) into MatchMatchEvent

!new MatchNote('mnM2_1')
!mnM2_1.note := 'Six-goal thriller with fast starts and late swings; both sides vulnerable in transition.'
!mnM2_1.date := '2026-03-21'
!insert (matchMetro_2, mnM2_1) into MatchMatchNote

!new MatchPlayer('mpM1_HP_GK')
!mpM1_HP_GK.booked := false
!mpM1_HP_GK.goals := 0
!mpM1_HP_GK.rating := 8

!new MatchPlayer('mpM1_RD_GK')
!mpM1_RD_GK.booked := false
!mpM1_RD_GK.goals := 0
!mpM1_RD_GK.rating := 8

!insert (matchMetro_1, mpM1_HP_GK) into MatchMatchPlayer
!insert (matchMetro_1, mpM1_RD_GK) into MatchMatchPlayer

!insert (pHP_GK, mpM1_HP_GK) into PlayerMatch
!insert (pRD_GK, mpM1_RD_GK) into PlayerMatch

!new MatchPlayerPosition('mppM1_HP_GK')
!mppM1_HP_GK.positionName := #GOALKEEPER
!mppM1_HP_GK.number := 1
!insert (mpM1_HP_GK, mppM1_HP_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppM1_RD_GK')
!mppM1_RD_GK.positionName := #GOALKEEPER
!mppM1_RD_GK.number := 1
!insert (mpM1_RD_GK, mppM1_RD_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('mpM2_IV_FW')
!mpM2_IV_FW.booked := false
!mpM2_IV_FW.goals := 3
!mpM2_IV_FW.rating := 9

!new MatchPlayer('mpM2_IV_MID')
!mpM2_IV_MID.booked := true
!mpM2_IV_MID.goals := 1
!mpM2_IV_MID.rating := 8

!new MatchPlayer('mpM2_QS_FW')
!mpM2_QS_FW.booked := false
!mpM2_QS_FW.goals := 2
!mpM2_QS_FW.rating := 8

!new MatchPlayer('mpM2_QS_GK')
!mpM2_QS_GK.booked := false
!mpM2_QS_GK.goals := 0
!mpM2_QS_GK.rating := 6

!insert (matchMetro_2, mpM2_IV_FW) into MatchMatchPlayer
!insert (matchMetro_2, mpM2_IV_MID) into MatchMatchPlayer
!insert (matchMetro_2, mpM2_QS_FW) into MatchMatchPlayer
!insert (matchMetro_2, mpM2_QS_GK) into MatchMatchPlayer

!insert (pIV_FW, mpM2_IV_FW) into PlayerMatch
!insert (pIV_MID, mpM2_IV_MID) into PlayerMatch
!insert (pQS_FW, mpM2_QS_FW) into PlayerMatch
!insert (pQS_GK, mpM2_QS_GK) into PlayerMatch

!new MatchPlayerPosition('mppM2_IV_FW')
!mppM2_IV_FW.positionName := #FORWARD
!mppM2_IV_FW.number := 9
!insert (mpM2_IV_FW, mppM2_IV_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppM2_IV_MID')
!mppM2_IV_MID.positionName := #MIDFIELDER
!mppM2_IV_MID.number := 8
!insert (mpM2_IV_MID, mppM2_IV_MID) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppM2_QS_FW')
!mppM2_QS_FW.positionName := #FORWARD
!mppM2_QS_FW.number := 11
!insert (mpM2_QS_FW, mppM2_QS_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppM2_QS_GK')
!mppM2_QS_GK.positionName := #GOALKEEPER
!mppM2_QS_GK.number := 1
!insert (mpM2_QS_GK, mppM2_QS_GK) into MatchPlayerMatchPlayerPosition
```
## Generation 6 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 416 | 0.00% |
| Multiplicities Errors | 0 | 99 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 38 | 0.00% |

# Generation 7
```
!new Club('clubNW')
!clubNW.name := 'Northwind FC'
!clubNW.homeGround := 'Northwind Arena'
!clubNW.chairman := 'Harriet Molina'

!new Club('clubOS')
!clubOS.name := 'Oakshire Wanderers'
!clubOS.homeGround := 'Oakshire Green'
!clubOS.chairman := 'Declan Murphy'

!new Team('teamNW')
!teamNW.name := 'Northwind XI'

!new Team('teamOS')
!teamOS.name := 'Oakshire XI'

!insert (clubNW, teamNW) into ClubTeam
!insert (clubOS, teamOS) into ClubTeam

!new Competition('compNightLeague')
!compNightLeague.name := 'Tuesday Night League'
!compNightLeague.type := 'League'

!new TrainingSession('tsNW_evening')
!tsNW_evening.date := '2026-04-07'
!tsNW_evening.location := 'Northwind Arena - 3G Pitch'
!tsNW_evening.purpose := 'Defensive transitions and recovery runs'

!new TrainingSession('tsOS_evening')
!tsOS_evening.date := '2026-04-07'
!tsOS_evening.location := 'Oakshire Green - Training Area'
!tsOS_evening.purpose := 'Compactness and playing out under pressure'

!insert (teamNW, tsNW_evening) into TeamTraining
!insert (teamOS, tsOS_evening) into TeamTraining

!new TrainingNotes('tnNW1')
!tnNW1.note := 'Improved sprint recovery; midfield needs clearer communication when pressing.'
!tnNW1.date := '2026-04-07'
!insert (tsNW_evening, tnNW1) into TrainingTrainingNotes

!new TrainingNotes('tnOS1')
!tnOS1.note := 'Build-up better after adding third-man option; reduce forced passes into congestion.'
!tnOS1.date := '2026-04-07'
!insert (tsOS_evening, tnOS1) into TrainingTrainingNotes

!new Player('pNW_MID')
!pNW_MID.name := 'Elijah Stone'
!pNW_MID.age := 26
!pNW_MID.bestFoot := #BOTH
!pNW_MID.phoneNumber := '+44 7700 810001'

!new Player('pOS_DEF')
!pOS_DEF.name := 'Mateo Alvarez'
!pOS_DEF.age := 28
!pOS_DEF.bestFoot := #RIGHT
!pOS_DEF.phoneNumber := '+44 7700 820001'

!insert (teamNW, pNW_MID) into TeamPlayer
!insert (teamOS, pOS_DEF) into TeamPlayer

!new Position('posNW_mid')
!posNW_mid.positionName := #MIDFIELDER
!insert (pNW_MID, posNW_mid) into PlayerPositions

!new Position('posNW_fw')
!posNW_fw.positionName := #FORWARD
!insert (pNW_MID, posNW_fw) into PlayerPositions

!new Position('posOS_def')
!posOS_def.positionName := #DEFENDER
!insert (pOS_DEF, posOS_def) into PlayerPositions

!new TrainingObjective('objNW_1')
!objNW_1.areaToImprove := 'Pressing timing in the middle third'
!objNW_1.startDate := '2026-04-01'
!objNW_1.endDate := '2026-05-01'
!objNW_1.success := false
!insert (objNW_1, pNW_MID) into TrainingObjectivePlayer

!new TrainingObjective('objNW_2')
!objNW_2.areaToImprove := 'Switching play with first-time passes'
!objNW_2.startDate := '2026-04-01'
!objNW_2.endDate := '2026-05-01'
!objNW_2.success := true
!insert (objNW_2, pNW_MID) into TrainingObjectivePlayer

!new TrainingObjective('objOS_1')
!objOS_1.areaToImprove := 'Defending runners at the back post'
!objOS_1.startDate := '2026-04-01'
!objOS_1.endDate := '2026-05-01'
!objOS_1.success := false
!insert (objOS_1, pOS_DEF) into TrainingObjectivePlayer

!new TrainingFailedToAttend('tfaNW1')
!tfaNW1.reason := 'Overtime at work'
!insert (tsNW_evening, tfaNW1) into TrainingFailded
!insert (tfaNW1, pNW_MID) into FailedPlayer

!new PlayerNotes('pnNW1')
!pnNW1.note := 'Leads well during drills; can simplify decisions when tired.'
!pnNW1.date := '2026-04-08'
!insert (pNW_MID, pnNW1) into PlayerPlayerNotes

!new Match('matchNight1')
!matchNight1.date := '2026-04-14'
!matchNight1.homeAway := true

!insert (compNightLeague, matchNight1) into CompetitionMatch

!insert (teamNW, matchNight1) into LocalMatch
!insert (teamOS, matchNight1) into VisitorMatch

!new MatchReport('mrNight1')
!mrNight1.duration := 90
!mrNight1.scoreVisitor := 0
!mrNight1.scoreLocal := 0
!insert (matchNight1, mrNight1) into MatchMatchReport

!new MatchEvent('evNight1_foul')
!evNight1_foul.eventType := #FOUL
!evNight1_foul.time := 44
!insert (matchNight1, evNight1_foul) into MatchMatchEvent

!new MatchEvent('evNight1_offside')
!evNight1_offside.eventType := #OFFSIDE
!evNight1_offside.time := 81
!insert (matchNight1, evNight1_offside) into MatchMatchEvent

!new MatchNote('mnNight1')
!mnNight1.note := 'Even match with few chances; both sides defended well and kept shape.'
!mnNight1.date := '2026-04-14'
!insert (matchNight1, mnNight1) into MatchMatchNote

!new MatchPlayer('mpNight1_NW')
!mpNight1_NW.booked := false
!mpNight1_NW.goals := 0
!mpNight1_NW.rating := 7

!new MatchPlayer('mpNight1_OS')
!mpNight1_OS.booked := true
!mpNight1_OS.goals := 0
!mpNight1_OS.rating := 7

!insert (matchNight1, mpNight1_NW) into MatchMatchPlayer
!insert (matchNight1, mpNight1_OS) into MatchMatchPlayer

!insert (pNW_MID, mpNight1_NW) into PlayerMatch
!insert (pOS_DEF, mpNight1_OS) into PlayerMatch

!new MatchPlayerPosition('mppNight1_NW')
!mppNight1_NW.positionName := #MIDFIELDER
!mppNight1_NW.number := 8
!insert (mpNight1_NW, mppNight1_NW) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppNight1_OS')
!mppNight1_OS.positionName := #DEFENDER
!mppNight1_OS.number := 5
!insert (mpNight1_OS, mppNight1_OS) into MatchPlayerMatchPlayerPosition
```
## Generation 7 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 125 | 0.00% |
| Multiplicities Errors | 0 | 30 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 13 | 0.00% |

# Generation 8
```
!new Club('clubOC')
!clubOC.name := 'Oldcastle FC'
!clubOC.homeGround := 'Castle Park'
!clubOC.chairman := 'Terence Shaw'

!new Club('clubSA')
!clubSA.name := 'Sunrise Albion'
!clubSA.homeGround := 'Sunrise Community Ground'
!clubSA.chairman := 'Mei Tan'

!new Club('clubHH')
!clubHH.name := 'Harbor Heights'
!clubHH.homeGround := 'Heights Waterfront Stadium'
!clubHH.chairman := 'Omar Reyes'

!new Team('teamOC_1')
!teamOC_1.name := 'Oldcastle First Team'

!new Team('teamOC_U21')
!teamOC_U21.name := 'Oldcastle U21'

!new Team('teamSA_1')
!teamSA_1.name := 'Sunrise Albion First Team'

!new Team('teamHH_1')
!teamHH_1.name := 'Harbor Heights First Team'

!insert (clubOC, teamOC_1) into ClubTeam
!insert (clubOC, teamOC_U21) into ClubTeam
!insert (clubSA, teamSA_1) into ClubTeam
!insert (clubHH, teamHH_1) into ClubTeam

!new Competition('compCC')
!compCC.name := 'Coastal Challenge Cup'
!compCC.type := 'Cup'

!new TrainingSession('tsOC1_1')
!tsOC1_1.date := '2026-04-18'
!tsOC1_1.location := 'Castle Park - Pitch 1'
!tsOC1_1.purpose := 'Defensive set pieces and restarts'

!new TrainingSession('tsOCU21_1')
!tsOCU21_1.date := '2026-04-18'
!tsOCU21_1.location := 'Castle Park - Pitch 3'
!tsOCU21_1.purpose := 'Ball retention and playing through midfield'

!new TrainingSession('tsSA1_1')
!tsSA1_1.date := '2026-04-19'
!tsSA1_1.location := 'Sunrise Community Ground - Main Pitch'
!tsSA1_1.purpose := 'High press and counter-press'

!new TrainingSession('tsHH1_1')
!tsHH1_1.date := '2026-04-19'
!tsHH1_1.location := 'Heights Waterfront Stadium - Training Pitch'
!tsHH1_1.purpose := 'Attacking patterns and finishing'

!insert (teamOC_1, tsOC1_1) into TeamTraining
!insert (teamOC_U21, tsOCU21_1) into TeamTraining
!insert (teamSA_1, tsSA1_1) into TeamTraining
!insert (teamHH_1, tsHH1_1) into TeamTraining

!new TrainingNotes('tnOC1_1a')
!tnOC1_1a.note := 'Set-piece roles clear; needs stronger blocking discipline at the near post.'
!tnOC1_1a.date := '2026-04-18'
!insert (tsOC1_1, tnOC1_1a) into TrainingTrainingNotes

!new TrainingNotes('tnOC1_1b')
!tnOC1_1b.note := 'Goalkeeper communication improved during corners.'
!tnOC1_1b.date := '2026-04-18'
!insert (tsOC1_1, tnOC1_1b) into TrainingTrainingNotes

!new TrainingNotes('tnOCU21_1a')
!tnOCU21_1a.note := 'Good structure in possession; fullbacks should offer wider angles earlier.'
!tnOCU21_1a.date := '2026-04-18'
!insert (tsOCU21_1, tnOCU21_1a) into TrainingTrainingNotes

!new TrainingNotes('tnSA1_1a')
!tnSA1_1a.note := 'Pressing intensity excellent; avoid silly fouls after losing the ball.'
!tnSA1_1a.date := '2026-04-19'
!insert (tsSA1_1, tnSA1_1a) into TrainingTrainingNotes

!new TrainingNotes('tnHH1_1a')
!tnHH1_1a.note := 'Created chances from cut-backs; finishing under pressure still inconsistent.'
!tnHH1_1a.date := '2026-04-19'
!insert (tsHH1_1, tnHH1_1a) into TrainingTrainingNotes

!new TrainingNotes('tnHH1_1b')
!tnHH1_1b.note := 'Good combinations on the right side; striker needs quicker near-post runs.'
!tnHH1_1b.date := '2026-04-19'
!insert (tsHH1_1, tnHH1_1b) into TrainingTrainingNotes

!new Player('pOC_GK')
!pOC_GK.name := 'Marcus Fielding'
!pOC_GK.age := 32
!pOC_GK.bestFoot := #RIGHT
!pOC_GK.phoneNumber := '+44 7700 910001'

!new Player('pOC_CB')
!pOC_CB.name := 'Callan Byrne'
!pOC_CB.age := 28
!pOC_CB.bestFoot := #BOTH
!pOC_CB.phoneNumber := '+44 7700 910002'

!new Player('pOC_MID')
!pOC_MID.name := 'Nate Calder'
!pOC_MID.age := 24
!pOC_MID.bestFoot := #LEFT
!pOC_MID.phoneNumber := '+44 7700 910003'

!new Player('pOC_FW')
!pOC_FW.name := 'Joel Santoro'
!pOC_FW.age := 23
!pOC_FW.bestFoot := #RIGHT
!pOC_FW.phoneNumber := '+44 7700 910004'

!new Player('pOC_W')
!pOC_W.name := 'Euan McLeod'
!pOC_W.age := 26
!pOC_W.bestFoot := #RIGHT
!pOC_W.phoneNumber := '+44 7700 910005'

!insert (teamOC_1, pOC_GK) into TeamPlayer
!insert (teamOC_1, pOC_CB) into TeamPlayer
!insert (teamOC_1, pOC_MID) into TeamPlayer
!insert (teamOC_1, pOC_FW) into TeamPlayer
!insert (teamOC_1, pOC_W) into TeamPlayer

!new Player('pOCU21_GK')
!pOCU21_GK.name := 'Toby Nguyen'
!pOCU21_GK.age := 19
!pOCU21_GK.bestFoot := #BOTH
!pOCU21_GK.phoneNumber := '+44 7700 911001'

!new Player('pOCU21_DEF')
!pOCU21_DEF.name := 'Ronan Dale'
!pOCU21_DEF.age := 18
!pOCU21_DEF.bestFoot := #RIGHT
!pOCU21_DEF.phoneNumber := '+44 7700 911002'

!new Player('pOCU21_MID')
!pOCU21_MID.name := 'Ilias Kouri'
!pOCU21_MID.age := 19
!pOCU21_MID.bestFoot := #LEFT
!pOCU21_MID.phoneNumber := '+44 7700 911003'

!insert (teamOC_U21, pOCU21_GK) into TeamPlayer
!insert (teamOC_U21, pOCU21_DEF) into TeamPlayer
!insert (teamOC_U21, pOCU21_MID) into TeamPlayer

!new Player('pSA_GK')
!pSA_GK.name := 'Brandon Yu'
!pSA_GK.age := 27
!pSA_GK.bestFoot := #LEFT
!pSA_GK.phoneNumber := '+44 7700 920001'

!new Player('pSA_DEF')
!pSA_DEF.name := 'Hector Jimenez'
!pSA_DEF.age := 25
!pSA_DEF.bestFoot := #RIGHT
!pSA_DEF.phoneNumber := '+44 7700 920002'

!new Player('pSA_MID')
!pSA_MID.name := 'Samira Nasser'
!pSA_MID.age := 22
!pSA_MID.bestFoot := #BOTH
!pSA_MID.phoneNumber := '+44 7700 920003'

!new Player('pSA_FW')
!pSA_FW.name := 'Liam Porter'
!pSA_FW.age := 24
!pSA_FW.bestFoot := #RIGHT
!pSA_FW.phoneNumber := '+44 7700 920004'

!insert (teamSA_1, pSA_GK) into TeamPlayer
!insert (teamSA_1, pSA_DEF) into TeamPlayer
!insert (teamSA_1, pSA_MID) into TeamPlayer
!insert (teamSA_1, pSA_FW) into TeamPlayer

!new Player('pHH_GK')
!pHH_GK.name := 'Ruben Ibarra'
!pHH_GK.age := 29
!pHH_GK.bestFoot := #RIGHT
!pHH_GK.phoneNumber := '+44 7700 930001'

!new Player('pHH_DEF')
!pHH_DEF.name := 'Soren Dahl'
!pHH_DEF.age := 27
!pHH_DEF.bestFoot := #BOTH
!pHH_DEF.phoneNumber := '+44 7700 930002'

!new Player('pHH_MID')
!pHH_MID.name := 'Kareem Said'
!pHH_MID.age := 23
!pHH_MID.bestFoot := #LEFT
!pHH_MID.phoneNumber := '+44 7700 930003'

!new Player('pHH_FW')
!pHH_FW.name := 'Tyrese Hall'
!pHH_FW.age := 21
!pHH_FW.bestFoot := #RIGHT
!pHH_FW.phoneNumber := '+44 7700 930004'

!insert (teamHH_1, pHH_GK) into TeamPlayer
!insert (teamHH_1, pHH_DEF) into TeamPlayer
!insert (teamHH_1, pHH_MID) into TeamPlayer
!insert (teamHH_1, pHH_FW) into TeamPlayer

!new Position('posOC_GK')
!posOC_GK.positionName := #GOALKEEPER
!insert (pOC_GK, posOC_GK) into PlayerPositions

!new Position('posOC_CB1')
!posOC_CB1.positionName := #DEFENDER
!insert (pOC_CB, posOC_CB1) into PlayerPositions

!new Position('posOC_CB2')
!posOC_CB2.positionName := #MIDFIELDER
!insert (pOC_CB, posOC_CB2) into PlayerPositions

!new Position('posOC_MID')
!posOC_MID.positionName := #MIDFIELDER
!insert (pOC_MID, posOC_MID) into PlayerPositions

!new Position('posOC_FW')
!posOC_FW.positionName := #FORWARD
!insert (pOC_FW, posOC_FW) into PlayerPositions

!new Position('posOC_W1')
!posOC_W1.positionName := #MIDFIELDER
!insert (pOC_W, posOC_W1) into PlayerPositions

!new Position('posOC_W2')
!posOC_W2.positionName := #FORWARD
!insert (pOC_W, posOC_W2) into PlayerPositions

!new Position('posOCU21_GK')
!posOCU21_GK.positionName := #GOALKEEPER
!insert (pOCU21_GK, posOCU21_GK) into PlayerPositions

!new Position('posOCU21_DEF')
!posOCU21_DEF.positionName := #DEFENDER
!insert (pOCU21_DEF, posOCU21_DEF) into PlayerPositions

!new Position('posOCU21_MID1')
!posOCU21_MID1.positionName := #MIDFIELDER
!insert (pOCU21_MID, posOCU21_MID1) into PlayerPositions

!new Position('posOCU21_MID2')
!posOCU21_MID2.positionName := #FORWARD
!insert (pOCU21_MID, posOCU21_MID2) into PlayerPositions

!new Position('posSA_GK')
!posSA_GK.positionName := #GOALKEEPER
!insert (pSA_GK, posSA_GK) into PlayerPositions

!new Position('posSA_DEF')
!posSA_DEF.positionName := #DEFENDER
!insert (pSA_DEF, posSA_DEF) into PlayerPositions

!new Position('posSA_MID1')
!posSA_MID1.positionName := #MIDFIELDER
!insert (pSA_MID, posSA_MID1) into PlayerPositions

!new Position('posSA_MID2')
!posSA_MID2.positionName := #DEFENDER
!insert (pSA_MID, posSA_MID2) into PlayerPositions

!new Position('posSA_FW')
!posSA_FW.positionName := #FORWARD
!insert (pSA_FW, posSA_FW) into PlayerPositions

!new Position('posHH_GK')
!posHH_GK.positionName := #GOALKEEPER
!insert (pHH_GK, posHH_GK) into PlayerPositions

!new Position('posHH_DEF')
!posHH_DEF.positionName := #DEFENDER
!insert (pHH_DEF, posHH_DEF) into PlayerPositions

!new Position('posHH_MID')
!posHH_MID.positionName := #MIDFIELDER
!insert (pHH_MID, posHH_MID) into PlayerPositions

!new Position('posHH_FW1')
!posHH_FW1.positionName := #FORWARD
!insert (pHH_FW, posHH_FW1) into PlayerPositions

!new Position('posHH_FW2')
!posHH_FW2.positionName := #MIDFIELDER
!insert (pHH_FW, posHH_FW2) into PlayerPositions

!new TrainingObjective('objOC_GK_1')
!objOC_GK_1.areaToImprove := 'Claiming crosses with traffic in the six-yard box'
!objOC_GK_1.startDate := '2026-04-10'
!objOC_GK_1.endDate := '2026-05-10'
!objOC_GK_1.success := false
!insert (objOC_GK_1, pOC_GK) into TrainingObjectivePlayer

!new TrainingObjective('objOC_CB_1')
!objOC_CB_1.areaToImprove := 'Defending the back post on wide deliveries'
!objOC_CB_1.startDate := '2026-04-10'
!objOC_CB_1.endDate := '2026-05-10'
!objOC_CB_1.success := true
!insert (objOC_CB_1, pOC_CB) into TrainingObjectivePlayer

!new TrainingObjective('objOC_MID_1')
!objOC_MID_1.areaToImprove := 'Scanning before receiving between the lines'
!objOC_MID_1.startDate := '2026-04-10'
!objOC_MID_1.endDate := '2026-05-10'
!objOC_MID_1.success := false
!insert (objOC_MID_1, pOC_MID) into TrainingObjectivePlayer

!new TrainingObjective('objOC_MID_2')
!objOC_MID_2.areaToImprove := 'Progressive passing with left foot'
!objOC_MID_2.startDate := '2026-04-10'
!objOC_MID_2.endDate := '2026-05-10'
!objOC_MID_2.success := true
!insert (objOC_MID_2, pOC_MID) into TrainingObjectivePlayer

!new TrainingObjective('objOC_FW_1')
!objOC_FW_1.areaToImprove := 'Finishing first time from cut-backs'
!objOC_FW_1.startDate := '2026-04-10'
!objOC_FW_1.endDate := '2026-05-10'
!objOC_FW_1.success := false
!insert (objOC_FW_1, pOC_FW) into TrainingObjectivePlayer

!new TrainingObjective('objOC_W_1')
!objOC_W_1.areaToImprove := 'Delivery consistency from wide areas'
!objOC_W_1.startDate := '2026-04-10'
!objOC_W_1.endDate := '2026-05-10'
!objOC_W_1.success := true
!insert (objOC_W_1, pOC_W) into TrainingObjectivePlayer

!new TrainingObjective('objOCU21_GK_1')
!objOCU21_GK_1.areaToImprove := 'Footwork and set position for low shots'
!objOCU21_GK_1.startDate := '2026-04-12'
!objOCU21_GK_1.endDate := '2026-05-12'
!objOCU21_GK_1.success := true
!insert (objOCU21_GK_1, pOCU21_GK) into TrainingObjectivePlayer

!new TrainingObjective('objOCU21_DEF_1')
!objOCU21_DEF_1.areaToImprove := '1v1 defending body position'
!objOCU21_DEF_1.startDate := '2026-04-12'
!objOCU21_DEF_1.endDate := '2026-05-12'
!objOCU21_DEF_1.success := false
!insert (objOCU21_DEF_1, pOCU21_DEF) into TrainingObjectivePlayer

!new TrainingObjective('objOCU21_MID_1')
!objOCU21_MID_1.areaToImprove := 'Decision-making in final third'
!objOCU21_MID_1.startDate := '2026-04-12'
!objOCU21_MID_1.endDate := '2026-05-12'
!objOCU21_MID_1.success := false
!insert (objOCU21_MID_1, pOCU21_MID) into TrainingObjectivePlayer

!new TrainingObjective('objSA_GK_1')
!objSA_GK_1.areaToImprove := 'Quick distribution after saves'
!objSA_GK_1.startDate := '2026-04-11'
!objSA_GK_1.endDate := '2026-05-11'
!objSA_GK_1.success := true
!insert (objSA_GK_1, pSA_GK) into TrainingObjectivePlayer

!new TrainingObjective('objSA_DEF_1')
!objSA_DEF_1.areaToImprove := 'Aggressive stepping out to intercept'
!objSA_DEF_1.startDate := '2026-04-11'
!objSA_DEF_1.endDate := '2026-05-11'
!objSA_DEF_1.success := false
!insert (objSA_DEF_1, pSA_DEF) into TrainingObjectivePlayer

!new TrainingObjective('objSA_MID_1')
!objSA_MID_1.areaToImprove := 'Avoiding fouls in counter-press moments'
!objSA_MID_1.startDate := '2026-04-11'
!objSA_MID_1.endDate := '2026-05-11'
!objSA_MID_1.success := true
!insert (objSA_MID_1, pSA_MID) into TrainingObjectivePlayer

!new TrainingObjective('objSA_FW_1')
!objSA_FW_1.areaToImprove := 'Curved runs to stay onside'
!objSA_FW_1.startDate := '2026-04-11'
!objSA_FW_1.endDate := '2026-05-11'
!objSA_FW_1.success := false
!insert (objSA_FW_1, pSA_FW) into TrainingObjectivePlayer

!new TrainingObjective('objSA_FW_2')
!objSA_FW_2.areaToImprove := 'Pressing angle to force play wide'
!objSA_FW_2.startDate := '2026-04-11'
!objSA_FW_2.endDate := '2026-05-11'
!objSA_FW_2.success := true
!insert (objSA_FW_2, pSA_FW) into TrainingObjectivePlayer

!new TrainingObjective('objHH_GK_1')
!objHH_GK_1.areaToImprove := 'Handling shots through bodies'
!objHH_GK_1.startDate := '2026-04-12'
!objHH_GK_1.endDate := '2026-05-12'
!objHH_GK_1.success := false
!insert (objHH_GK_1, pHH_GK) into TrainingObjectivePlayer

!new TrainingObjective('objHH_DEF_1')
!objHH_DEF_1.areaToImprove := 'Marking discipline on set pieces'
!objHH_DEF_1.startDate := '2026-04-12'
!objHH_DEF_1.endDate := '2026-05-12'
!objHH_DEF_1.success := true
!insert (objHH_DEF_1, pHH_DEF) into TrainingObjectivePlayer

!new TrainingObjective('objHH_MID_1')
!objHH_MID_1.areaToImprove := 'Switching play to weak side'
!objHH_MID_1.startDate := '2026-04-12'
!objHH_MID_1.endDate := '2026-05-12'
!objHH_MID_1.success := false
!insert (objHH_MID_1, pHH_MID) into TrainingObjectivePlayer

!new TrainingObjective('objHH_FW_1')
!objHH_FW_1.areaToImprove := 'Near-post movement and first-time finishing'
!objHH_FW_1.startDate := '2026-04-12'
!objHH_FW_1.endDate := '2026-05-12'
!objHH_FW_1.success := false
!insert (objHH_FW_1, pHH_FW) into TrainingObjectivePlayer

!new PlayerNotes('pnOC_1')
!pnOC_1.note := 'Strong organiser; keeps the defensive unit calm under pressure.'
!pnOC_1.date := '2026-04-17'
!insert (pOC_GK, pnOC_1) into PlayerPlayerNotes

!new PlayerNotes('pnSA_1')
!pnSA_1.note := 'Excellent engine; sometimes over-commits in counter-press moments.'
!pnSA_1.date := '2026-04-20'
!insert (pSA_MID, pnSA_1) into PlayerPlayerNotes

!new PlayerNotes('pnHH_1')
!pnHH_1.note := 'Very direct runner; can improve decision-making when isolated 1v1.'
!pnHH_1.date := '2026-04-20'
!insert (pHH_FW, pnHH_1) into PlayerPlayerNotes

!new TrainingFailedToAttend('tfaOC1_1')
!tfaOC1_1.reason := 'Soreness (knee)'
!insert (tsOC1_1, tfaOC1_1) into TrainingFailded
!insert (tfaOC1_1, pOC_CB) into FailedPlayer

!new TrainingFailedToAttend('tfaSA1_1')
!tfaSA1_1.reason := 'Late arrival (traffic)'
!insert (tsSA1_1, tfaSA1_1) into TrainingFailded
!insert (tfaSA1_1, pSA_DEF) into FailedPlayer

!new TrainingFailedToAttend('tfaHH1_1')
!tfaHH1_1.reason := 'Illness'
!insert (tsHH1_1, tfaHH1_1) into TrainingFailded
!insert (tfaHH1_1, pHH_MID) into FailedPlayer

!new TrainingFailedToAttend('tfaHH1_2')
!tfaHH1_2.reason := 'Work commitment'
!insert (tsHH1_1, tfaHH1_2) into TrainingFailded
!insert (tfaHH1_2, pHH_DEF) into FailedPlayer

!new Match('matchCC_QF1')
!matchCC_QF1.date := '2026-04-23'
!matchCC_QF1.homeAway := true

!new Match('matchCC_SF1')
!matchCC_SF1.date := '2026-04-27'
!matchCC_SF1.homeAway := false

!insert (compCC, matchCC_QF1) into CompetitionMatch
!insert (compCC, matchCC_SF1) into CompetitionMatch

!insert (teamOC_1, matchCC_QF1) into LocalMatch
!insert (teamSA_1, matchCC_QF1) into VisitorMatch

!insert (teamHH_1, matchCC_SF1) into LocalMatch
!insert (teamOC_1, matchCC_SF1) into VisitorMatch

!new MatchReport('mrCC_QF1')
!mrCC_QF1.duration := 90
!mrCC_QF1.scoreVisitor := 0
!mrCC_QF1.scoreLocal := 1
!insert (matchCC_QF1, mrCC_QF1) into MatchMatchReport

!new MatchReport('mrCC_SF1')
!mrCC_SF1.duration := 90
!mrCC_SF1.scoreVisitor := 2
!mrCC_SF1.scoreLocal := 3
!insert (matchCC_SF1, mrCC_SF1) into MatchMatchReport

!new MatchEvent('evQF1_goal1')
!evQF1_goal1.eventType := #GOAL
!evQF1_goal1.time := 64
!insert (matchCC_QF1, evQF1_goal1) into MatchMatchEvent

!new MatchEvent('evQF1_foul1')
!evQF1_foul1.eventType := #FOUL
!evQF1_foul1.time := 17
!insert (matchCC_QF1, evQF1_foul1) into MatchMatchEvent

!new MatchEvent('evQF1_corner1')
!evQF1_corner1.eventType := #CORNER
!evQF1_corner1.time := 41
!insert (matchCC_QF1, evQF1_corner1) into MatchMatchEvent

!new MatchEvent('evQF1_off1')
!evQF1_off1.eventType := #OFFSIDE
!evQF1_off1.time := 78
!insert (matchCC_QF1, evQF1_off1) into MatchMatchEvent

!new MatchEvent('evQF1_pen1')
!evQF1_pen1.eventType := #PENALTY
!evQF1_pen1.time := 83
!insert (matchCC_QF1, evQF1_pen1) into MatchMatchEvent

!new MatchNote('mnQF1_1')
!mnQF1_1.note := 'Tight cup match; decisive goal after sustained pressure and a missed late penalty appeal.'
!mnQF1_1.date := '2026-04-23'
!insert (matchCC_QF1, mnQF1_1) into MatchMatchNote

!new MatchEvent('evSF1_goal1')
!evSF1_goal1.eventType := #GOAL
!evSF1_goal1.time := 5
!insert (matchCC_SF1, evSF1_goal1) into MatchMatchEvent

!new MatchEvent('evSF1_goal2')
!evSF1_goal2.eventType := #GOAL
!evSF1_goal2.time := 22
!insert (matchCC_SF1, evSF1_goal2) into MatchMatchEvent

!new MatchEvent('evSF1_goal3')
!evSF1_goal3.eventType := #GOAL
!evSF1_goal3.time := 39
!insert (matchCC_SF1, evSF1_goal3) into MatchMatchEvent

!new MatchEvent('evSF1_goal4')
!evSF1_goal4.eventType := #GOAL
!evSF1_goal4.time := 58
!insert (matchCC_SF1, evSF1_goal4) into MatchMatchEvent

!new MatchEvent('evSF1_goal5')
!evSF1_goal5.eventType := #GOAL
!evSF1_goal5.time := 86
!insert (matchCC_SF1, evSF1_goal5) into MatchMatchEvent

!new MatchEvent('evSF1_foul1')
!evSF1_foul1.eventType := #FOUL
!evSF1_foul1.time := 31
!insert (matchCC_SF1, evSF1_foul1) into MatchMatchEvent

!new MatchEvent('evSF1_corner1')
!evSF1_corner1.eventType := #CORNER
!evSF1_corner1.time := 75
!insert (matchCC_SF1, evSF1_corner1) into MatchMatchEvent

!new MatchNote('mnSF1_1')
!mnSF1_1.note := 'End-to-end semi-final; five goals with a late winner after a series of transitions.'
!mnSF1_1.date := '2026-04-27'
!insert (matchCC_SF1, mnSF1_1) into MatchMatchNote

!new MatchPlayer('mpQF1_OC_GK')
!mpQF1_OC_GK.booked := false
!mpQF1_OC_GK.goals := 0
!mpQF1_OC_GK.rating := 7

!new MatchPlayer('mpQF1_OC_FW')
!mpQF1_OC_FW.booked := false
!mpQF1_OC_FW.goals := 1
!mpQF1_OC_FW.rating := 8

!new MatchPlayer('mpQF1_SA_GK')
!mpQF1_SA_GK.booked := false
!mpQF1_SA_GK.goals := 0
!mpQF1_SA_GK.rating := 7

!new MatchPlayer('mpQF1_SA_MID')
!mpQF1_SA_MID.booked := true
!mpQF1_SA_MID.goals := 0
!mpQF1_SA_MID.rating := 6

!insert (matchCC_QF1, mpQF1_OC_GK) into MatchMatchPlayer
!insert (matchCC_QF1, mpQF1_OC_FW) into MatchMatchPlayer
!insert (matchCC_QF1, mpQF1_SA_GK) into MatchMatchPlayer
!insert (matchCC_QF1, mpQF1_SA_MID) into MatchMatchPlayer

!insert (pOC_GK, mpQF1_OC_GK) into PlayerMatch
!insert (pOC_FW, mpQF1_OC_FW) into PlayerMatch
!insert (pSA_GK, mpQF1_SA_GK) into PlayerMatch
!insert (pSA_MID, mpQF1_SA_MID) into PlayerMatch

!new MatchPlayerPosition('mppQF1_OC_GK')
!mppQF1_OC_GK.positionName := #GOALKEEPER
!mppQF1_OC_GK.number := 1
!insert (mpQF1_OC_GK, mppQF1_OC_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppQF1_OC_FW')
!mppQF1_OC_FW.positionName := #FORWARD
!mppQF1_OC_FW.number := 9
!insert (mpQF1_OC_FW, mppQF1_OC_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppQF1_SA_GK')
!mppQF1_SA_GK.positionName := #GOALKEEPER
!mppQF1_SA_GK.number := 1
!insert (mpQF1_SA_GK, mppQF1_SA_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppQF1_SA_MID')
!mppQF1_SA_MID.positionName := #MIDFIELDER
!mppQF1_SA_MID.number := 8
!insert (mpQF1_SA_MID, mppQF1_SA_MID) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('mpSF1_HH_FW')
!mpSF1_HH_FW.booked := false
!mpSF1_HH_FW.goals := 2
!mpSF1_HH_FW.rating := 8

!new MatchPlayer('mpSF1_HH_MID')
!mpSF1_HH_MID.booked := true
!mpSF1_HH_MID.goals := 1
!mpSF1_HH_MID.rating := 7

!new MatchPlayer('mpSF1_OC_W')
!mpSF1_OC_W.booked := false
!mpSF1_OC_W.goals := 1
!mpSF1_OC_W.rating := 7

!new MatchPlayer('mpSF1_OC_MID')
!mpSF1_OC_MID.booked := true
!mpSF1_OC_MID.goals := 1
!mpSF1_OC_MID.rating := 7

!insert (matchCC_SF1, mpSF1_HH_FW) into MatchMatchPlayer
!insert (matchCC_SF1, mpSF1_HH_MID) into MatchMatchPlayer
!insert (matchCC_SF1, mpSF1_OC_W) into MatchMatchPlayer
!insert (matchCC_SF1, mpSF1_OC_MID) into MatchMatchPlayer

!insert (pHH_FW, mpSF1_HH_FW) into PlayerMatch
!insert (pHH_MID, mpSF1_HH_MID) into PlayerMatch
!insert (pOC_W, mpSF1_OC_W) into PlayerMatch
!insert (pOC_MID, mpSF1_OC_MID) into PlayerMatch

!new MatchPlayerPosition('mppSF1_HH_FW')
!mppSF1_HH_FW.positionName := #FORWARD
!mppSF1_HH_FW.number := 10
!insert (mpSF1_HH_FW, mppSF1_HH_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppSF1_HH_MID')
!mppSF1_HH_MID.positionName := #MIDFIELDER
!mppSF1_HH_MID.number := 8
!insert (mpSF1_HH_MID, mppSF1_HH_MID) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppSF1_OC_W')
!mppSF1_OC_W.positionName := #MIDFIELDER
!mppSF1_OC_W.number := 7
!insert (mpSF1_OC_W, mppSF1_OC_W) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppSF1_OC_MID')
!mppSF1_OC_MID.positionName := #MIDFIELDER
!mppSF1_OC_MID.number := 6
!insert (mpSF1_OC_MID, mppSF1_OC_MID) into MatchPlayerMatchPlayerPosition
```
## Generation 8 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 524 | 0.00% |
| Multiplicities Errors | 0 | 126 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 53 | 0.00% |

# Generation 9
```
!new Club('clubRG')
!clubRG.name := 'Rivergate FC'
!clubRG.homeGround := 'Rivergate Stadium'
!clubRG.chairman := 'Monica Reyes'

!new Club('clubCP')
!clubCP.name := 'Copperfield Town'
!clubCP.homeGround := 'Copperfield Park'
!clubCP.chairman := 'Ian Fletcher'

!new Club('clubWW')
!clubWW.name := 'Woodwick Athletic'
!clubWW.homeGround := 'Woodwick Meadow'
!clubWW.chairman := 'Salma Qureshi'

!new Team('teamRG')
!teamRG.name := 'Rivergate Senior Team'

!new Team('teamCP')
!teamCP.name := 'Copperfield First XI'

!new Team('teamWW')
!teamWW.name := 'Woodwick First Team'

!insert (clubRG, teamRG) into ClubTeam
!insert (clubCP, teamCP) into ClubTeam
!insert (clubWW, teamWW) into ClubTeam

!new Competition('compTriInv')
!compTriInv.name := 'Tri-Club Invitational'
!compTriInv.type := 'Mini Tournament'

!new TrainingSession('tsRG_1')
!tsRG_1.date := '2026-05-02'
!tsRG_1.location := 'Rivergate Stadium - Pitch 2'
!tsRG_1.purpose := 'Playing out from the back and build-up structure'

!new TrainingSession('tsRG_2')
!tsRG_2.date := '2026-05-04'
!tsRG_2.location := 'Rivergate Stadium - Gym'
!tsRG_2.purpose := 'Strength maintenance and injury prevention'

!new TrainingSession('tsCP_1')
!tsCP_1.date := '2026-05-02'
!tsCP_1.location := 'Copperfield Park - Main Pitch'
!tsCP_1.purpose := 'Compact defending and counterattacks'

!new TrainingSession('tsCP_2')
!tsCP_2.date := '2026-05-05'
!tsCP_2.location := 'Copperfield Park - Pitch 1'
!tsCP_2.purpose := 'Crossing and finishing'

!new TrainingSession('tsWW_1')
!tsWW_1.date := '2026-05-03'
!tsWW_1.location := 'Woodwick Meadow - Grass Pitch'
!tsWW_1.purpose := 'Press resistance and midfield triangles'

!new TrainingSession('tsWW_2')
!tsWW_2.date := '2026-05-06'
!tsWW_2.location := 'Woodwick Meadow - Training Pitch'
!tsWW_2.purpose := 'Defending set pieces and transitions'

!insert (teamRG, tsRG_1) into TeamTraining
!insert (teamRG, tsRG_2) into TeamTraining
!insert (teamCP, tsCP_1) into TeamTraining
!insert (teamCP, tsCP_2) into TeamTraining
!insert (teamWW, tsWW_1) into TeamTraining
!insert (teamWW, tsWW_2) into TeamTraining

!new TrainingNotes('tnRG_1a')
!tnRG_1a.note := 'Build-up was clean when pivot dropped; fullbacks must stay wider for outlets.'
!tnRG_1a.date := '2026-05-02'
!insert (tsRG_1, tnRG_1a) into TrainingTrainingNotes

!new TrainingNotes('tnRG_2a')
!tnRG_2a.note := 'Gym session completed; adjust load for two players returning from soreness.'
!tnRG_2a.date := '2026-05-04'
!insert (tsRG_2, tnRG_2a) into TrainingTrainingNotes

!new TrainingNotes('tnCP_1a')
!tnCP_1a.note := 'Mid-block compact; counters effective but first pass after regain needs speed.'
!tnCP_1a.date := '2026-05-02'
!insert (tsCP_1, tnCP_1a) into TrainingTrainingNotes

!new TrainingNotes('tnCP_2a')
!tnCP_2a.note := 'Crossing improved; attackers must attack near post more consistently.'
!tnCP_2a.date := '2026-05-05'
!insert (tsCP_2, tnCP_2a) into TrainingTrainingNotes

!new TrainingNotes('tnWW_1a')
!tnWW_1a.note := 'Good triangles in midfield; reduce touches when under pressure.'
!tnWW_1a.date := '2026-05-03'
!insert (tsWW_1, tnWW_1a) into TrainingTrainingNotes

!new TrainingNotes('tnWW_2a')
!tnWW_2a.note := 'Set-piece marking clearer; still slow reacting to second balls.'
!tnWW_2a.date := '2026-05-06'
!insert (tsWW_2, tnWW_2a) into TrainingTrainingNotes

!new Player('pRG_GK')
!pRG_GK.name := 'Noah Gallagher'
!pRG_GK.age := 35
!pRG_GK.bestFoot := #RIGHT
!pRG_GK.phoneNumber := '+44 7700 101001'

!new Player('pRG_UT')
!pRG_UT.name := 'Darius Mbeki'
!pRG_UT.age := 24
!pRG_UT.bestFoot := #BOTH
!pRG_UT.phoneNumber := '+44 7700 101002'

!new Player('pCP_FW')
!pCP_FW.name := 'Elliot Park'
!pCP_FW.age := 22
!pCP_FW.bestFoot := #LEFT
!pCP_FW.phoneNumber := '+44 7700 102001'

!new Player('pCP_MID')
!pCP_MID.name := 'Ravi Singh'
!pCP_MID.age := 28
!pCP_MID.bestFoot := #RIGHT
!pCP_MID.phoneNumber := '+44 7700 102002'

!new Player('pWW_GK')
!pWW_GK.name := 'Jakub Nowak'
!pWW_GK.age := 29
!pWW_GK.bestFoot := #BOTH
!pWW_GK.phoneNumber := '+44 7700 103001'

!new Player('pWW_FW')
!pWW_FW.name := 'Leonard Hayes'
!pWW_FW.age := 20
!pWW_FW.bestFoot := #RIGHT
!pWW_FW.phoneNumber := '+44 7700 103002'

!new Player('pWW_DEF')
!pWW_DEF.name := 'Haruto Sato'
!pWW_DEF.age := 26
!pWW_DEF.bestFoot := #RIGHT
!pWW_DEF.phoneNumber := '+44 7700 103003'

!insert (teamRG, pRG_GK) into TeamPlayer
!insert (teamRG, pRG_UT) into TeamPlayer
!insert (teamCP, pCP_FW) into TeamPlayer
!insert (teamCP, pCP_MID) into TeamPlayer
!insert (teamWW, pWW_GK) into TeamPlayer
!insert (teamWW, pWW_FW) into TeamPlayer
!insert (teamWW, pWW_DEF) into TeamPlayer

!new Position('posRG_GK_1')
!posRG_GK_1.positionName := #GOALKEEPER
!insert (pRG_GK, posRG_GK_1) into PlayerPositions

!new Position('posRG_UT_1')
!posRG_UT_1.positionName := #MIDFIELDER
!insert (pRG_UT, posRG_UT_1) into PlayerPositions

!new Position('posRG_UT_2')
!posRG_UT_2.positionName := #DEFENDER
!insert (pRG_UT, posRG_UT_2) into PlayerPositions

!new Position('posRG_UT_3')
!posRG_UT_3.positionName := #FORWARD
!insert (pRG_UT, posRG_UT_3) into PlayerPositions

!new Position('posCP_FW_1')
!posCP_FW_1.positionName := #FORWARD
!insert (pCP_FW, posCP_FW_1) into PlayerPositions

!new Position('posCP_FW_2')
!posCP_FW_2.positionName := #MIDFIELDER
!insert (pCP_FW, posCP_FW_2) into PlayerPositions

!new Position('posCP_MID_1')
!posCP_MID_1.positionName := #MIDFIELDER
!insert (pCP_MID, posCP_MID_1) into PlayerPositions

!new Position('posWW_GK_1')
!posWW_GK_1.positionName := #GOALKEEPER
!insert (pWW_GK, posWW_GK_1) into PlayerPositions

!new Position('posWW_FW_1')
!posWW_FW_1.positionName := #FORWARD
!insert (pWW_FW, posWW_FW_1) into PlayerPositions

!new Position('posWW_DEF_1')
!posWW_DEF_1.positionName := #DEFENDER
!insert (pWW_DEF, posWW_DEF_1) into PlayerPositions

!new Position('posWW_DEF_2')
!posWW_DEF_2.positionName := #MIDFIELDER
!insert (pWW_DEF, posWW_DEF_2) into PlayerPositions

!new TrainingObjective('objRG_GK_1')
!objRG_GK_1.areaToImprove := 'Starting position behind the defensive line'
!objRG_GK_1.startDate := '2026-05-01'
!objRG_GK_1.endDate := '2026-06-01'
!objRG_GK_1.success := false
!insert (objRG_GK_1, pRG_GK) into TrainingObjectivePlayer

!new TrainingObjective('objRG_UT_1')
!objRG_UT_1.areaToImprove := 'Faster decision-making after regains'
!objRG_UT_1.startDate := '2026-05-01'
!objRG_UT_1.endDate := '2026-06-01'
!objRG_UT_1.success := true
!insert (objRG_UT_1, pRG_UT) into TrainingObjectivePlayer

!new TrainingObjective('objCP_FW_1')
!objCP_FW_1.areaToImprove := 'Finishing from central areas with weaker foot'
!objCP_FW_1.startDate := '2026-05-01'
!objCP_FW_1.endDate := '2026-06-01'
!objCP_FW_1.success := false
!insert (objCP_FW_1, pCP_FW) into TrainingObjectivePlayer

!new TrainingObjective('objCP_MID_1')
!objCP_MID_1.areaToImprove := 'Switching play under pressure'
!objCP_MID_1.startDate := '2026-05-01'
!objCP_MID_1.endDate := '2026-06-01'
!objCP_MID_1.success := true
!insert (objCP_MID_1, pCP_MID) into TrainingObjectivePlayer

!new TrainingObjective('objWW_GK_1')
!objWW_GK_1.areaToImprove := 'Handling shots through traffic'
!objWW_GK_1.startDate := '2026-05-01'
!objWW_GK_1.endDate := '2026-06-01'
!objWW_GK_1.success := true
!insert (objWW_GK_1, pWW_GK) into TrainingObjectivePlayer

!new TrainingObjective('objWW_FW_1')
!objWW_FW_1.areaToImprove := 'Hold-up play with back to goal'
!objWW_FW_1.startDate := '2026-05-01'
!objWW_FW_1.endDate := '2026-06-01'
!objWW_FW_1.success := false
!insert (objWW_FW_1, pWW_FW) into TrainingObjectivePlayer

!new TrainingObjective('objWW_DEF_1')
!objWW_DEF_1.areaToImprove := 'Defending cut-backs in the box'
!objWW_DEF_1.startDate := '2026-05-01'
!objWW_DEF_1.endDate := '2026-06-01'
!objWW_DEF_1.success := false
!insert (objWW_DEF_1, pWW_DEF) into TrainingObjectivePlayer

!new PlayerNotes('pnRG_1')
!pnRG_1.note := 'Very reliable; needs to be more vocal organising set pieces.'
!pnRG_1.date := '2026-05-04'
!insert (pRG_GK, pnRG_1) into PlayerPlayerNotes

!new PlayerNotes('pnCP_1')
!pnCP_1.note := 'Sharp movement in the box; sometimes drifts offside when fatigued.'
!pnCP_1.date := '2026-05-06'
!insert (pCP_FW, pnCP_1) into PlayerPlayerNotes

!new PlayerNotes('pnWW_1')
!pnWW_1.note := 'Excellent reading of danger; can improve passing choice when pressed.'
!pnWW_1.date := '2026-05-06'
!insert (pWW_DEF, pnWW_1) into PlayerPlayerNotes

!new TrainingFailedToAttend('tfaRG_1')
!tfaRG_1.reason := 'Physio appointment'
!insert (tsRG_2, tfaRG_1) into TrainingFailded
!insert (tfaRG_1, pRG_UT) into FailedPlayer

!new TrainingFailedToAttend('tfaCP_1')
!tfaCP_1.reason := 'Late arrival (traffic)'
!insert (tsCP_2, tfaCP_1) into TrainingFailded
!insert (tfaCP_1, pCP_MID) into FailedPlayer

!new TrainingFailedToAttend('tfaWW_1')
!tfaWW_1.reason := 'Illness'
!insert (tsWW_2, tfaWW_1) into TrainingFailded
!insert (tfaWW_1, pWW_FW) into FailedPlayer

!new Match('matchTri_1')
!matchTri_1.date := '2026-05-09'
!matchTri_1.homeAway := true

!new Match('matchTri_2')
!matchTri_2.date := '2026-05-12'
!matchTri_2.homeAway := false

!insert (compTriInv, matchTri_1) into CompetitionMatch
!insert (compTriInv, matchTri_2) into CompetitionMatch

!insert (teamRG, matchTri_1) into LocalMatch
!insert (teamCP, matchTri_1) into VisitorMatch

!insert (teamWW, matchTri_2) into LocalMatch
!insert (teamRG, matchTri_2) into VisitorMatch

!new MatchReport('mrTri_1')
!mrTri_1.duration := 90
!mrTri_1.scoreVisitor := 1
!mrTri_1.scoreLocal := 0
!insert (matchTri_1, mrTri_1) into MatchMatchReport

!new MatchReport('mrTri_2')
!mrTri_2.duration := 90
!mrTri_2.scoreVisitor := 2
!mrTri_2.scoreLocal := 2
!insert (matchTri_2, mrTri_2) into MatchMatchReport

!new MatchEvent('evTri1_goal1')
!evTri1_goal1.eventType := #GOAL
!evTri1_goal1.time := 34
!insert (matchTri_1, evTri1_goal1) into MatchMatchEvent

!new MatchEvent('evTri1_foul1')
!evTri1_foul1.eventType := #FOUL
!evTri1_foul1.time := 10
!insert (matchTri_1, evTri1_foul1) into MatchMatchEvent

!new MatchEvent('evTri1_off1')
!evTri1_off1.eventType := #OFFSIDE
!evTri1_off1.time := 57
!insert (matchTri_1, evTri1_off1) into MatchMatchEvent

!new MatchEvent('evTri1_cor1')
!evTri1_cor1.eventType := #CORNER
!evTri1_cor1.time := 88
!insert (matchTri_1, evTri1_cor1) into MatchMatchEvent

!new MatchNote('mnTri1_1')
!mnTri1_1.note := 'Visitors scored on the break; home side controlled possession but lacked penetration.'
!mnTri1_1.date := '2026-05-09'
!insert (matchTri_1, mnTri1_1) into MatchMatchNote

!new MatchEvent('evTri2_goal1')
!evTri2_goal1.eventType := #GOAL
!evTri2_goal1.time := 12
!insert (matchTri_2, evTri2_goal1) into MatchMatchEvent

!new MatchEvent('evTri2_goal2')
!evTri2_goal2.eventType := #GOAL
!evTri2_goal2.time := 44
!insert (matchTri_2, evTri2_goal2) into MatchMatchEvent

!new MatchEvent('evTri2_goal3')
!evTri2_goal3.eventType := #GOAL
!evTri2_goal3.time := 63
!insert (matchTri_2, evTri2_goal3) into MatchMatchEvent

!new MatchEvent('evTri2_goal4')
!evTri2_goal4.eventType := #GOAL
!evTri2_goal4.time := 90
!insert (matchTri_2, evTri2_goal4) into MatchMatchEvent

!new MatchEvent('evTri2_pen1')
!evTri2_pen1.eventType := #PENALTY
!evTri2_pen1.time := 80
!insert (matchTri_2, evTri2_pen1) into MatchMatchEvent

!new MatchEvent('evTri2_cor1')
!evTri2_cor1.eventType := #CORNER
!evTri2_cor1.time := 71
!insert (matchTri_2, evTri2_cor1) into MatchMatchEvent

!new MatchNote('mnTri2_1')
!mnTri2_1.note := 'Open match with late drama; missed penalty kept it level before a stoppage-time equaliser.'
!mnTri2_1.date := '2026-05-12'
!insert (matchTri_2, mnTri2_1) into MatchMatchNote

!new MatchPlayer('mpTri1_RG_GK')
!mpTri1_RG_GK.booked := false
!mpTri1_RG_GK.goals := 0
!mpTri1_RG_GK.rating := 7

!new MatchPlayer('mpTri1_RG_UT')
!mpTri1_RG_UT.booked := true
!mpTri1_RG_UT.goals := 0
!mpTri1_RG_UT.rating := 6

!new MatchPlayer('mpTri1_CP_MID')
!mpTri1_CP_MID.booked := false
!mpTri1_CP_MID.goals := 0
!mpTri1_CP_MID.rating := 7

!new MatchPlayer('mpTri1_CP_FW')
!mpTri1_CP_FW.booked := false
!mpTri1_CP_FW.goals := 1
!mpTri1_CP_FW.rating := 8

!insert (matchTri_1, mpTri1_RG_GK) into MatchMatchPlayer
!insert (matchTri_1, mpTri1_RG_UT) into MatchMatchPlayer
!insert (matchTri_1, mpTri1_CP_MID) into MatchMatchPlayer
!insert (matchTri_1, mpTri1_CP_FW) into MatchMatchPlayer

!insert (pRG_GK, mpTri1_RG_GK) into PlayerMatch
!insert (pRG_UT, mpTri1_RG_UT) into PlayerMatch
!insert (pCP_MID, mpTri1_CP_MID) into PlayerMatch
!insert (pCP_FW, mpTri1_CP_FW) into PlayerMatch

!new MatchPlayerPosition('mppTri1_RG_GK')
!mppTri1_RG_GK.positionName := #GOALKEEPER
!mppTri1_RG_GK.number := 1
!insert (mpTri1_RG_GK, mppTri1_RG_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppTri1_RG_UT')
!mppTri1_RG_UT.positionName := #MIDFIELDER
!mppTri1_RG_UT.number := 6
!insert (mpTri1_RG_UT, mppTri1_RG_UT) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppTri1_CP_MID')
!mppTri1_CP_MID.positionName := #MIDFIELDER
!mppTri1_CP_MID.number := 8
!insert (mpTri1_CP_MID, mppTri1_CP_MID) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppTri1_CP_FW')
!mppTri1_CP_FW.positionName := #FORWARD
!mppTri1_CP_FW.number := 9
!insert (mpTri1_CP_FW, mppTri1_CP_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('mpTri2_WW_GK')
!mpTri2_WW_GK.booked := false
!mpTri2_WW_GK.goals := 0
!mpTri2_WW_GK.rating := 7

!new MatchPlayer('mpTri2_WW_FW')
!mpTri2_WW_FW.booked := false
!mpTri2_WW_FW.goals := 2
!mpTri2_WW_FW.rating := 8

!new MatchPlayer('mpTri2_WW_DEF')
!mpTri2_WW_DEF.booked := true
!mpTri2_WW_DEF.goals := 0
!mpTri2_WW_DEF.rating := 6

!new MatchPlayer('mpTri2_RG_GK')
!mpTri2_RG_GK.booked := false
!mpTri2_RG_GK.goals := 0
!mpTri2_RG_GK.rating := 6

!new MatchPlayer('mpTri2_RG_UT')
!mpTri2_RG_UT.booked := false
!mpTri2_RG_UT.goals := 2
!mpTri2_RG_UT.rating := 8

!insert (matchTri_2, mpTri2_WW_GK) into MatchMatchPlayer
!insert (matchTri_2, mpTri2_WW_FW) into MatchMatchPlayer
!insert (matchTri_2, mpTri2_WW_DEF) into MatchMatchPlayer
!insert (matchTri_2, mpTri2_RG_GK) into MatchMatchPlayer
!insert (matchTri_2, mpTri2_RG_UT) into MatchMatchPlayer

!insert (pWW_GK, mpTri2_WW_GK) into PlayerMatch
!insert (pWW_FW, mpTri2_WW_FW) into PlayerMatch
!insert (pWW_DEF, mpTri2_WW_DEF) into PlayerMatch
!insert (pRG_GK, mpTri2_RG_GK) into PlayerMatch
!insert (pRG_UT, mpTri2_RG_UT) into PlayerMatch

!new MatchPlayerPosition('mppTri2_WW_GK')
!mppTri2_WW_GK.positionName := #GOALKEEPER
!mppTri2_WW_GK.number := 1
!insert (mpTri2_WW_GK, mppTri2_WW_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppTri2_WW_FW')
!mppTri2_WW_FW.positionName := #FORWARD
!mppTri2_WW_FW.number := 10
!insert (mpTri2_WW_FW, mppTri2_WW_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppTri2_WW_DEF')
!mppTri2_WW_DEF.positionName := #DEFENDER
!mppTri2_WW_DEF.number := 4
!insert (mpTri2_WW_DEF, mppTri2_WW_DEF) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppTri2_RG_GK')
!mppTri2_RG_GK.positionName := #GOALKEEPER
!mppTri2_RG_GK.number := 1
!insert (mpTri2_RG_GK, mppTri2_RG_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppTri2_RG_UT')
!mppTri2_RG_UT.positionName := #MIDFIELDER
!mppTri2_RG_UT.number := 6
!insert (mpTri2_RG_UT, mppTri2_RG_UT) into MatchPlayerMatchPlayerPosition
```
## Generation 9 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 379 | 0.00% |
| Multiplicities Errors | 0 | 96 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 33 | 0.00% |

# Generation 10
```
!new Club('clubAC')
!clubAC.name := 'Ashford Academy FC'
!clubAC.homeGround := 'Ashford Training Campus'
!clubAC.chairman := 'Dr. Stephen Lowe'

!new Club('clubBV')
!clubBV.name := 'Bluevale Borough'
!clubBV.homeGround := 'Bluevale Recreation Ground'
!clubBV.chairman := 'Fiona McCarthy'

!new Team('teamAC_U19')
!teamAC_U19.name := 'Ashford Academy U19'

!new Team('teamBV_Sat')
!teamBV_Sat.name := 'Bluevale Saturday Team'

!insert (clubAC, teamAC_U19) into ClubTeam
!insert (clubBV, teamBV_Sat) into ClubTeam

!new Competition('compDevShield')
!compDevShield.name := 'Development Shield'
!compDevShield.type := 'Youth & Amateur Cup'

!new TrainingSession('tsAC_U19_1')
!tsAC_U19_1.date := '2026-05-18'
!tsAC_U19_1.location := 'Ashford Training Campus - Pitch 4'
!tsAC_U19_1.purpose := 'Playing through pressure and midfield support angles'

!new TrainingSession('tsBV_Sat_1')
!tsBV_Sat_1.date := '2026-05-18'
!tsBV_Sat_1.location := 'Bluevale Recreation Ground - Pitch B'
!tsBV_Sat_1.purpose := 'Defensive organisation and set-piece routines'

!insert (teamAC_U19, tsAC_U19_1) into TeamTraining
!insert (teamBV_Sat, tsBV_Sat_1) into TeamTraining

!new TrainingNotes('tnAC_1')
!tnAC_1.note := 'Good use of the pivot; must speed up support runs after the first pass.'
!tnAC_1.date := '2026-05-18'
!insert (tsAC_U19_1, tnAC_1) into TrainingTrainingNotes

!new TrainingNotes('tnAC_2')
!tnAC_2.note := 'Improved composure under press; still forcing passes into crowded central areas.'
!tnAC_2.date := '2026-05-18'
!insert (tsAC_U19_1, tnAC_2) into TrainingTrainingNotes

!new TrainingNotes('tnBV_1')
!tnBV_1.note := 'Set-piece marking clearer; need quicker reactions to second balls.'
!tnBV_1.date := '2026-05-18'
!insert (tsBV_Sat_1, tnBV_1) into TrainingTrainingNotes

!new Player('pAC_GK1')
!pAC_GK1.name := 'Riley Chen'
!pAC_GK1.age := 18
!pAC_GK1.bestFoot := #BOTH
!pAC_GK1.phoneNumber := '+44 7700 201101'

!new Player('pAC_DEF1')
!pAC_DEF1.name := 'Connor Hayes'
!pAC_DEF1.age := 19
!pAC_DEF1.bestFoot := #RIGHT
!pAC_DEF1.phoneNumber := '+44 7700 201102'

!new Player('pAC_MID1')
!pAC_MID1.name := 'Yanis Dupont'
!pAC_MID1.age := 18
!pAC_MID1.bestFoot := #LEFT
!pAC_MID1.phoneNumber := '+44 7700 201103'

!new Player('pAC_FW1')
!pAC_FW1.name := 'Mikael Sorensen'
!pAC_FW1.age := 19
!pAC_FW1.bestFoot := #RIGHT
!pAC_FW1.phoneNumber := '+44 7700 201104'

!new Player('pAC_UT1')
!pAC_UT1.name := 'Harper Jones'
!pAC_UT1.age := 18
!pAC_UT1.bestFoot := #BOTH
!pAC_UT1.phoneNumber := '+44 7700 201105'

!new Player('pBV_GK1')
!pBV_GK1.name := 'Sean Gallagher'
!pBV_GK1.age := 31
!pBV_GK1.bestFoot := #LEFT
!pBV_GK1.phoneNumber := '+44 7700 202201'

!new Player('pBV_FW1')
!pBV_FW1.name := 'Jayden Okafor'
!pBV_FW1.age := 27
!pBV_FW1.bestFoot := #RIGHT
!pBV_FW1.phoneNumber := '+44 7700 202202'

!insert (teamAC_U19, pAC_GK1) into TeamPlayer
!insert (teamAC_U19, pAC_DEF1) into TeamPlayer
!insert (teamAC_U19, pAC_MID1) into TeamPlayer
!insert (teamAC_U19, pAC_FW1) into TeamPlayer
!insert (teamAC_U19, pAC_UT1) into TeamPlayer
!insert (teamBV_Sat, pBV_GK1) into TeamPlayer
!insert (teamBV_Sat, pBV_FW1) into TeamPlayer

!new Position('posAC_GK')
!posAC_GK.positionName := #GOALKEEPER
!insert (pAC_GK1, posAC_GK) into PlayerPositions

!new Position('posAC_DEF')
!posAC_DEF.positionName := #DEFENDER
!insert (pAC_DEF1, posAC_DEF) into PlayerPositions

!new Position('posAC_DEF_alt')
!posAC_DEF_alt.positionName := #MIDFIELDER
!insert (pAC_DEF1, posAC_DEF_alt) into PlayerPositions

!new Position('posAC_MID')
!posAC_MID.positionName := #MIDFIELDER
!insert (pAC_MID1, posAC_MID) into PlayerPositions

!new Position('posAC_MID_alt')
!posAC_MID_alt.positionName := #FORWARD
!insert (pAC_MID1, posAC_MID_alt) into PlayerPositions

!new Position('posAC_FW')
!posAC_FW.positionName := #FORWARD
!insert (pAC_FW1, posAC_FW) into PlayerPositions

!new Position('posAC_UT_def')
!posAC_UT_def.positionName := #DEFENDER
!insert (pAC_UT1, posAC_UT_def) into PlayerPositions

!new Position('posAC_UT_mid')
!posAC_UT_mid.positionName := #MIDFIELDER
!insert (pAC_UT1, posAC_UT_mid) into PlayerPositions

!new Position('posAC_UT_fw')
!posAC_UT_fw.positionName := #FORWARD
!insert (pAC_UT1, posAC_UT_fw) into PlayerPositions

!new Position('posBV_GK')
!posBV_GK.positionName := #GOALKEEPER
!insert (pBV_GK1, posBV_GK) into PlayerPositions

!new Position('posBV_FW')
!posBV_FW.positionName := #FORWARD
!insert (pBV_FW1, posBV_FW) into PlayerPositions

!new TrainingObjective('objAC_GK1_1')
!objAC_GK1_1.areaToImprove := 'Quicker decisions on through balls'
!objAC_GK1_1.startDate := '2026-05-15'
!objAC_GK1_1.endDate := '2026-06-15'
!objAC_GK1_1.success := false
!insert (objAC_GK1_1, pAC_GK1) into TrainingObjectivePlayer

!new TrainingObjective('objAC_DEF1_1')
!objAC_DEF1_1.areaToImprove := 'Body shape when receiving under pressure'
!objAC_DEF1_1.startDate := '2026-05-15'
!objAC_DEF1_1.endDate := '2026-06-15'
!objAC_DEF1_1.success := true
!insert (objAC_DEF1_1, pAC_DEF1) into TrainingObjectivePlayer

!new TrainingObjective('objAC_MID1_1')
!objAC_MID1_1.areaToImprove := 'Scanning before receiving between the lines'
!objAC_MID1_1.startDate := '2026-05-15'
!objAC_MID1_1.endDate := '2026-06-15'
!objAC_MID1_1.success := false
!insert (objAC_MID1_1, pAC_MID1) into TrainingObjectivePlayer

!new TrainingObjective('objAC_FW1_1')
!objAC_FW1_1.areaToImprove := 'First-time finishing from cut-backs'
!objAC_FW1_1.startDate := '2026-05-15'
!objAC_FW1_1.endDate := '2026-06-15'
!objAC_FW1_1.success := false
!insert (objAC_FW1_1, pAC_FW1) into TrainingObjectivePlayer

!new TrainingObjective('objAC_UT1_1')
!objAC_UT1_1.areaToImprove := 'Switching play with fewer touches'
!objAC_UT1_1.startDate := '2026-05-15'
!objAC_UT1_1.endDate := '2026-06-15'
!objAC_UT1_1.success := true
!insert (objAC_UT1_1, pAC_UT1) into TrainingObjectivePlayer

!new TrainingObjective('objBV_GK1_1')
!objBV_GK1_1.areaToImprove := 'Distribution to start counterattacks'
!objBV_GK1_1.startDate := '2026-05-15'
!objBV_GK1_1.endDate := '2026-06-15'
!objBV_GK1_1.success := true
!insert (objBV_GK1_1, pBV_GK1) into TrainingObjectivePlayer

!new TrainingObjective('objBV_FW1_1')
!objBV_FW1_1.areaToImprove := 'Hold-up play and bringing midfield into attacks'
!objBV_FW1_1.startDate := '2026-05-15'
!objBV_FW1_1.endDate := '2026-06-15'
!objBV_FW1_1.success := false
!insert (objBV_FW1_1, pBV_FW1) into TrainingObjectivePlayer

!new PlayerNotes('pnAC_1')
!pnAC_1.note := 'High coachability; responds well to short video clips and clear cues.'
!pnAC_1.date := '2026-05-19'
!insert (pAC_MID1, pnAC_1) into PlayerPlayerNotes

!new PlayerNotes('pnBV_1')
!pnBV_1.note := 'Strong aerially; needs to avoid soft fouls in wide areas.'
!pnBV_1.date := '2026-05-19'
!insert (pBV_FW1, pnBV_1) into PlayerPlayerNotes

!new TrainingFailedToAttend('tfaBV_1')
!tfaBV_1.reason := 'Childcare issue'
!insert (tsBV_Sat_1, tfaBV_1) into TrainingFailded
!insert (tfaBV_1, pBV_FW1) into FailedPlayer

!new Match('mDevShield_R1')
!mDevShield_R1.date := '2026-05-22'
!mDevShield_R1.homeAway := true

!insert (compDevShield, mDevShield_R1) into CompetitionMatch
!insert (teamAC_U19, mDevShield_R1) into LocalMatch
!insert (teamBV_Sat, mDevShield_R1) into VisitorMatch

!new MatchReport('mrDevShield_R1')
!mrDevShield_R1.duration := 90
!mrDevShield_R1.scoreVisitor := 0
!mrDevShield_R1.scoreLocal := 0
!insert (mDevShield_R1, mrDevShield_R1) into MatchMatchReport

!new MatchEvent('evDSR1_foul1')
!evDSR1_foul1.eventType := #FOUL
!evDSR1_foul1.time := 9
!insert (mDevShield_R1, evDSR1_foul1) into MatchMatchEvent

!new MatchEvent('evDSR1_corner1')
!evDSR1_corner1.eventType := #CORNER
!evDSR1_corner1.time := 26
!insert (mDevShield_R1, evDSR1_corner1) into MatchMatchEvent

!new MatchEvent('evDSR1_off1')
!evDSR1_off1.eventType := #OFFSIDE
!evDSR1_off1.time := 53
!insert (mDevShield_R1, evDSR1_off1) into MatchMatchEvent

!new MatchEvent('evDSR1_pen1')
!evDSR1_pen1.eventType := #PENALTY
!evDSR1_pen1.time := 74
!insert (mDevShield_R1, evDSR1_pen1) into MatchMatchEvent

!new MatchNote('mnDSR1_1')
!mnDSR1_1.note := 'Scoreless draw; both keepers handled crosses well and chances were limited.'
!mnDSR1_1.date := '2026-05-22'
!insert (mDevShield_R1, mnDSR1_1) into MatchMatchNote

!new MatchPlayer('mpDSR1_AC_GK')
!mpDSR1_AC_GK.booked := false
!mpDSR1_AC_GK.goals := 0
!mpDSR1_AC_GK.rating := 7

!new MatchPlayer('mpDSR1_AC_UT')
!mpDSR1_AC_UT.booked := true
!mpDSR1_AC_UT.goals := 0
!mpDSR1_AC_UT.rating := 6

!new MatchPlayer('mpDSR1_BV_GK')
!mpDSR1_BV_GK.booked := false
!mpDSR1_BV_GK.goals := 0
!mpDSR1_BV_GK.rating := 8

!new MatchPlayer('mpDSR1_BV_FW')
!mpDSR1_BV_FW.booked := false
!mpDSR1_BV_FW.goals := 0
!mpDSR1_BV_FW.rating := 6

!insert (mDevShield_R1, mpDSR1_AC_GK) into MatchMatchPlayer
!insert (mDevShield_R1, mpDSR1_AC_UT) into MatchMatchPlayer
!insert (mDevShield_R1, mpDSR1_BV_GK) into MatchMatchPlayer
!insert (mDevShield_R1, mpDSR1_BV_FW) into MatchMatchPlayer

!insert (pAC_GK1, mpDSR1_AC_GK) into PlayerMatch
!insert (pAC_UT1, mpDSR1_AC_UT) into PlayerMatch
!insert (pBV_GK1, mpDSR1_BV_GK) into PlayerMatch
!insert (pBV_FW1, mpDSR1_BV_FW) into PlayerMatch

!new MatchPlayerPosition('mppDSR1_AC_GK')
!mppDSR1_AC_GK.positionName := #GOALKEEPER
!mppDSR1_AC_GK.number := 1
!insert (mpDSR1_AC_GK, mppDSR1_AC_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppDSR1_AC_UT')
!mppDSR1_AC_UT.positionName := #MIDFIELDER
!mppDSR1_AC_UT.number := 14
!insert (mpDSR1_AC_UT, mppDSR1_AC_UT) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppDSR1_BV_GK')
!mppDSR1_BV_GK.positionName := #GOALKEEPER
!mppDSR1_BV_GK.number := 1
!insert (mpDSR1_BV_GK, mppDSR1_BV_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppDSR1_BV_FW')
!mppDSR1_BV_FW.positionName := #FORWARD
!mppDSR1_BV_FW.number := 9
!insert (mpDSR1_BV_FW, mppDSR1_BV_FW) into MatchPlayerMatchPlayerPosition
```
## Generation 10 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 239 | 0.00% |
| Multiplicities Errors | 0 | 57 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 23 | 0.00% |

# Generation 11
```
!new Club('clubHPK')
!clubHPK.name := 'Hillspark FC'
!clubHPK.homeGround := 'Hillspark Sports Ground'
!clubHPK.chairman := 'Veronica Lane'

!new Club('clubDR')
!clubDR.name := 'Dunridge Town'
!clubDR.homeGround := 'Dunridge Memorial Park'
!clubDR.chairman := 'Caleb Morgan'

!new Club('clubEL')
!clubEL.name := 'Eastlake FC'
!clubEL.homeGround := 'Eastlake Riverside Stadium'
!clubEL.chairman := 'Anita Kowalczyk'

!new Team('teamHPK_1')
!teamHPK_1.name := 'Hillspark First Team'

!new Team('teamDR_1')
!teamDR_1.name := 'Dunridge First Team'

!new Team('teamEL_1')
!teamEL_1.name := 'Eastlake First Team'

!insert (clubHPK, teamHPK_1) into ClubTeam
!insert (clubDR, teamDR_1) into ClubTeam
!insert (clubEL, teamEL_1) into ClubTeam

!new Competition('compCityCup')
!compCityCup.name := 'City Challenge Cup'
!compCityCup.type := 'Cup'

!new TrainingSession('tsHPK_1')
!tsHPK_1.date := '2026-06-03'
!tsHPK_1.location := 'Hillspark Sports Ground - Pitch 1'
!tsHPK_1.purpose := 'Pressing cues and compactness'

!new TrainingSession('tsHPK_2')
!tsHPK_2.date := '2026-06-05'
!tsHPK_2.location := 'Hillspark Sports Ground - Pitch 2'
!tsHPK_2.purpose := 'Attacking set pieces and second phase'

!new TrainingSession('tsDR_1')
!tsDR_1.date := '2026-06-04'
!tsDR_1.location := 'Dunridge Memorial Park - Main Pitch'
!tsDR_1.purpose := 'Low block and counterattacks'

!new TrainingSession('tsEL_1')
!tsEL_1.date := '2026-06-04'
!tsEL_1.location := 'Eastlake Riverside Stadium - Training Pitch'
!tsEL_1.purpose := 'Build-up under pressure'

!insert (teamHPK_1, tsHPK_1) into TeamTraining
!insert (teamHPK_1, tsHPK_2) into TeamTraining
!insert (teamDR_1, tsDR_1) into TeamTraining
!insert (teamEL_1, tsEL_1) into TeamTraining

!new TrainingNotes('tnHPK_1a')
!tnHPK_1a.note := 'Press improved after clear triggers; back line held well when press was broken.'
!tnHPK_1a.date := '2026-06-03'
!insert (tsHPK_1, tnHPK_1a) into TrainingTrainingNotes

!new TrainingNotes('tnHPK_2a')
!tnHPK_2a.note := 'Corners: good near-post movement; must attack second balls with more aggression.'
!tnHPK_2a.date := '2026-06-05'
!insert (tsHPK_2, tnHPK_2a) into TrainingTrainingNotes

!new TrainingNotes('tnDR_1a')
!tnDR_1a.note := 'Counter patterns clear; need better first pass accuracy after regains.'
!tnDR_1a.date := '2026-06-04'
!insert (tsDR_1, tnDR_1a) into TrainingTrainingNotes

!new TrainingNotes('tnEL_1a')
!tnEL_1a.note := 'Build-up good with pivot support; reduce risky central passes when pressed.'
!tnEL_1a.date := '2026-06-04'
!insert (tsEL_1, tnEL_1a) into TrainingTrainingNotes

!new Player('pHPK_GK')
!pHPK_GK.name := 'Anthony Kerr'
!pHPK_GK.age := 30
!pHPK_GK.bestFoot := #RIGHT
!pHPK_GK.phoneNumber := '+44 7700 301001'

!new Player('pHPK_UT')
!pHPK_UT.name := 'Isla Barrett'
!pHPK_UT.age := 22
!pHPK_UT.bestFoot := #BOTH
!pHPK_UT.phoneNumber := '+44 7700 301002'

!new Player('pHPK_FW')
!pHPK_FW.name := 'Dion McCarthy'
!pHPK_FW.age := 24
!pHPK_FW.bestFoot := #LEFT
!pHPK_FW.phoneNumber := '+44 7700 301003'

!new Player('pDR_GK')
!pDR_GK.name := 'Hassan Nouri'
!pDR_GK.age := 28
!pDR_GK.bestFoot := #LEFT
!pDR_GK.phoneNumber := '+44 7700 302001'

!new Player('pDR_DEF')
!pDR_DEF.name := 'Oskar Petrovic'
!pDR_DEF.age := 27
!pDR_DEF.bestFoot := #RIGHT
!pDR_DEF.phoneNumber := '+44 7700 302002'

!new Player('pDR_FW')
!pDR_FW.name := 'Charlie Wicks'
!pDR_FW.age := 23
!pDR_FW.bestFoot := #RIGHT
!pDR_FW.phoneNumber := '+44 7700 302003'

!new Player('pEL_GK')
!pEL_GK.name := 'Mateusz Krol'
!pEL_GK.age := 31
!pEL_GK.bestFoot := #BOTH
!pEL_GK.phoneNumber := '+44 7700 303001'

!new Player('pEL_MID')
!pEL_MID.name := 'Nina Petrova'
!pEL_MID.age := 21
!pEL_MID.bestFoot := #RIGHT
!pEL_MID.phoneNumber := '+44 7700 303002'

!new Player('pEL_FW')
!pEL_FW.name := 'Jonas Richter'
!pEL_FW.age := 25
!pEL_FW.bestFoot := #LEFT
!pEL_FW.phoneNumber := '+44 7700 303003'

!insert (teamHPK_1, pHPK_GK) into TeamPlayer
!insert (teamHPK_1, pHPK_UT) into TeamPlayer
!insert (teamHPK_1, pHPK_FW) into TeamPlayer

!insert (teamDR_1, pDR_GK) into TeamPlayer
!insert (teamDR_1, pDR_DEF) into TeamPlayer
!insert (teamDR_1, pDR_FW) into TeamPlayer

!insert (teamEL_1, pEL_GK) into TeamPlayer
!insert (teamEL_1, pEL_MID) into TeamPlayer
!insert (teamEL_1, pEL_FW) into TeamPlayer

!new Position('posHPK_GK_1')
!posHPK_GK_1.positionName := #GOALKEEPER
!insert (pHPK_GK, posHPK_GK_1) into PlayerPositions

!new Position('posHPK_UT_1')
!posHPK_UT_1.positionName := #DEFENDER
!insert (pHPK_UT, posHPK_UT_1) into PlayerPositions

!new Position('posHPK_UT_2')
!posHPK_UT_2.positionName := #MIDFIELDER
!insert (pHPK_UT, posHPK_UT_2) into PlayerPositions

!new Position('posHPK_UT_3')
!posHPK_UT_3.positionName := #FORWARD
!insert (pHPK_UT, posHPK_UT_3) into PlayerPositions

!new Position('posHPK_FW_1')
!posHPK_FW_1.positionName := #FORWARD
!insert (pHPK_FW, posHPK_FW_1) into PlayerPositions

!new Position('posDR_GK_1')
!posDR_GK_1.positionName := #GOALKEEPER
!insert (pDR_GK, posDR_GK_1) into PlayerPositions

!new Position('posDR_DEF_1')
!posDR_DEF_1.positionName := #DEFENDER
!insert (pDR_DEF, posDR_DEF_1) into PlayerPositions

!new Position('posDR_FW_1')
!posDR_FW_1.positionName := #FORWARD
!insert (pDR_FW, posDR_FW_1) into PlayerPositions

!new Position('posEL_GK_1')
!posEL_GK_1.positionName := #GOALKEEPER
!insert (pEL_GK, posEL_GK_1) into PlayerPositions

!new Position('posEL_MID_1')
!posEL_MID_1.positionName := #MIDFIELDER
!insert (pEL_MID, posEL_MID_1) into PlayerPositions

!new Position('posEL_MID_2')
!posEL_MID_2.positionName := #DEFENDER
!insert (pEL_MID, posEL_MID_2) into PlayerPositions

!new Position('posEL_FW_1')
!posEL_FW_1.positionName := #FORWARD
!insert (pEL_FW, posEL_FW_1) into PlayerPositions

!new TrainingObjective('objHPK_GK_1')
!objHPK_GK_1.areaToImprove := 'Commanding the six-yard box on corners'
!objHPK_GK_1.startDate := '2026-06-01'
!objHPK_GK_1.endDate := '2026-06-30'
!objHPK_GK_1.success := false
!insert (objHPK_GK_1, pHPK_GK) into TrainingObjectivePlayer

!new TrainingObjective('objHPK_UT_A')
!objHPK_UT_A.areaToImprove := 'Speed of play on first touch'
!objHPK_UT_A.startDate := '2026-06-01'
!objHPK_UT_A.endDate := '2026-06-30'
!objHPK_UT_A.success := false
!insert (objHPK_UT_A, pHPK_UT) into TrainingObjectivePlayer

!new TrainingObjective('objHPK_UT_B')
!objHPK_UT_B.areaToImprove := 'Defensive positioning when covering wide areas'
!objHPK_UT_B.startDate := '2026-06-01'
!objHPK_UT_B.endDate := '2026-06-30'
!objHPK_UT_B.success := true
!insert (objHPK_UT_B, pHPK_UT) into TrainingObjectivePlayer

!new TrainingObjective('objHPK_FW_1')
!objHPK_FW_1.areaToImprove := 'Finishing across the goalkeeper from left side'
!objHPK_FW_1.startDate := '2026-06-01'
!objHPK_FW_1.endDate := '2026-06-30'
!objHPK_FW_1.success := false
!insert (objHPK_FW_1, pHPK_FW) into TrainingObjectivePlayer

!new TrainingObjective('objDR_GK_1')
!objDR_GK_1.areaToImprove := 'Quicker distribution after collecting crosses'
!objDR_GK_1.startDate := '2026-06-01'
!objDR_GK_1.endDate := '2026-06-30'
!objDR_GK_1.success := true
!insert (objDR_GK_1, pDR_GK) into TrainingObjectivePlayer

!new TrainingObjective('objDR_DEF_A')
!objDR_DEF_A.areaToImprove := 'Timing of stepping out to intercept'
!objDR_DEF_A.startDate := '2026-06-01'
!objDR_DEF_A.endDate := '2026-06-30'
!objDR_DEF_A.success := false
!insert (objDR_DEF_A, pDR_DEF) into TrainingObjectivePlayer

!new TrainingObjective('objDR_FW_1')
!objDR_FW_1.areaToImprove := 'Hold-up play and linking counters'
!objDR_FW_1.startDate := '2026-06-01'
!objDR_FW_1.endDate := '2026-06-30'
!objDR_FW_1.success := false
!insert (objDR_FW_1, pDR_FW) into TrainingObjectivePlayer

!new TrainingObjective('objEL_GK_1')
!objEL_GK_1.areaToImprove := 'Footwork and set position on low shots'
!objEL_GK_1.startDate := '2026-06-01'
!objEL_GK_1.endDate := '2026-06-30'
!objEL_GK_1.success := true
!insert (objEL_GK_1, pEL_GK) into TrainingObjectivePlayer

!new TrainingObjective('objEL_MID_A')
!objEL_MID_A.areaToImprove := 'Receiving on the half-turn under pressure'
!objEL_MID_A.startDate := '2026-06-01'
!objEL_MID_A.endDate := '2026-06-30'
!objEL_MID_A.success := false
!insert (objEL_MID_A, pEL_MID) into TrainingObjectivePlayer

!new TrainingObjective('objEL_FW_1')
!objEL_FW_1.areaToImprove := 'Curved runs to stay onside'
!objEL_FW_1.startDate := '2026-06-01'
!objEL_FW_1.endDate := '2026-06-30'
!objEL_FW_1.success := false
!insert (objEL_FW_1, pEL_FW) into TrainingObjectivePlayer

!new PlayerNotes('pnHPK_1')
!pnHPK_1.note := 'Versatile and tactically aware; can play multiple roles without losing intensity.'
!pnHPK_1.date := '2026-06-06'
!insert (pHPK_UT, pnHPK_1) into PlayerPlayerNotes

!new PlayerNotes('pnEL_1')
!pnEL_1.note := 'Good composure in build-up; must improve decision speed when pressed aggressively.'
!pnEL_1.date := '2026-06-06'
!insert (pEL_MID, pnEL_1) into PlayerPlayerNotes

!new TrainingFailedToAttend('tfaHPK_1')
!tfaHPK_1.reason := 'Exam at college'
!insert (tsHPK_1, tfaHPK_1) into TrainingFailded
!insert (tfaHPK_1, pHPK_FW) into FailedPlayer

!new TrainingFailedToAttend('tfaHPK_2')
!tfaHPK_2.reason := 'Minor hamstring tightness'
!insert (tsHPK_2, tfaHPK_2) into TrainingFailded
!insert (tfaHPK_2, pHPK_UT) into FailedPlayer

!new TrainingFailedToAttend('tfaHPK_3')
!tfaHPK_3.reason := 'Work shift overran'
!insert (tsHPK_2, tfaHPK_3) into TrainingFailded
!insert (tfaHPK_3, pHPK_GK) into FailedPlayer

!new Match('matchCC_SF_A')
!matchCC_SF_A.date := '2026-06-12'
!matchCC_SF_A.homeAway := true

!new Match('matchCC_SF_B')
!matchCC_SF_B.date := '2026-06-13'
!matchCC_SF_B.homeAway := false

!insert (compCityCup, matchCC_SF_A) into CompetitionMatch
!insert (compCityCup, matchCC_SF_B) into CompetitionMatch

!insert (teamHPK_1, matchCC_SF_A) into LocalMatch
!insert (teamDR_1, matchCC_SF_A) into VisitorMatch

!insert (teamEL_1, matchCC_SF_B) into LocalMatch
!insert (teamHPK_1, matchCC_SF_B) into VisitorMatch

!new MatchReport('mrCC_SF_A')
!mrCC_SF_A.duration := 90
!mrCC_SF_A.scoreVisitor := 1
!mrCC_SF_A.scoreLocal := 1
!insert (matchCC_SF_A, mrCC_SF_A) into MatchMatchReport

!new MatchReport('mrCC_SF_B')
!mrCC_SF_B.duration := 90
!mrCC_SF_B.scoreVisitor := 2
!mrCC_SF_B.scoreLocal := 0
!insert (matchCC_SF_B, mrCC_SF_B) into MatchMatchReport

!new MatchEvent('evSF_A_goal1')
!evSF_A_goal1.eventType := #GOAL
!evSF_A_goal1.time := 23
!insert (matchCC_SF_A, evSF_A_goal1) into MatchMatchEvent

!new MatchEvent('evSF_A_goal2')
!evSF_A_goal2.eventType := #GOAL
!evSF_A_goal2.time := 67
!insert (matchCC_SF_A, evSF_A_goal2) into MatchMatchEvent

!new MatchEvent('evSF_A_foul1')
!evSF_A_foul1.eventType := #FOUL
!evSF_A_foul1.time := 41
!insert (matchCC_SF_A, evSF_A_foul1) into MatchMatchEvent

!new MatchEvent('evSF_A_corner1')
!evSF_A_corner1.eventType := #CORNER
!evSF_A_corner1.time := 52
!insert (matchCC_SF_A, evSF_A_corner1) into MatchMatchEvent

!new MatchEvent('evSF_A_off1')
!evSF_A_off1.eventType := #OFFSIDE
!evSF_A_off1.time := 74
!insert (matchCC_SF_A, evSF_A_off1) into MatchMatchEvent

!new MatchNote('mnSF_A_1')
!mnSF_A_1.note := 'Balanced semi-final; both teams scored once and chances were limited after half-time.'
!mnSF_A_1.date := '2026-06-12'
!insert (matchCC_SF_A, mnSF_A_1) into MatchMatchNote

!new MatchEvent('evSF_B_goal1')
!evSF_B_goal1.eventType := #GOAL
!evSF_B_goal1.time := 15
!insert (matchCC_SF_B, evSF_B_goal1) into MatchMatchEvent

!new MatchEvent('evSF_B_goal2')
!evSF_B_goal2.eventType := #GOAL
!evSF_B_goal2.time := 58
!insert (matchCC_SF_B, evSF_B_goal2) into MatchMatchEvent

!new MatchEvent('evSF_B_foul1')
!evSF_B_foul1.eventType := #FOUL
!evSF_B_foul1.time := 33
!insert (matchCC_SF_B, evSF_B_foul1) into MatchMatchEvent

!new MatchEvent('evSF_B_pen1')
!evSF_B_pen1.eventType := #PENALTY
!evSF_B_pen1.time := 82
!insert (matchCC_SF_B, evSF_B_pen1) into MatchMatchEvent

!new MatchNote('mnSF_B_1')
!mnSF_B_1.note := 'Visitors were clinical; home side struggled to break the press and conceded two.'
!mnSF_B_1.date := '2026-06-13'
!insert (matchCC_SF_B, mnSF_B_1) into MatchMatchNote

!new MatchPlayer('mpSF_A_HPK_GK')
!mpSF_A_HPK_GK.booked := false
!mpSF_A_HPK_GK.goals := 0
!mpSF_A_HPK_GK.rating := 7

!new MatchPlayer('mpSF_A_HPK_UT')
!mpSF_A_HPK_UT.booked := true
!mpSF_A_HPK_UT.goals := 0
!mpSF_A_HPK_UT.rating := 6

!new MatchPlayer('mpSF_A_HPK_FW')
!mpSF_A_HPK_FW.booked := false
!mpSF_A_HPK_FW.goals := 1
!mpSF_A_HPK_FW.rating := 7

!new MatchPlayer('mpSF_A_DR_GK')
!mpSF_A_DR_GK.booked := false
!mpSF_A_DR_GK.goals := 0
!mpSF_A_DR_GK.rating := 7

!new MatchPlayer('mpSF_A_DR_DEF')
!mpSF_A_DR_DEF.booked := true
!mpSF_A_DR_DEF.goals := 0
!mpSF_A_DR_DEF.rating := 6

!new MatchPlayer('mpSF_A_DR_FW')
!mpSF_A_DR_FW.booked := false
!mpSF_A_DR_FW.goals := 1
!mpSF_A_DR_FW.rating := 7

!insert (matchCC_SF_A, mpSF_A_HPK_GK) into MatchMatchPlayer
!insert (matchCC_SF_A, mpSF_A_HPK_UT) into MatchMatchPlayer
!insert (matchCC_SF_A, mpSF_A_HPK_FW) into MatchMatchPlayer
!insert (matchCC_SF_A, mpSF_A_DR_GK) into MatchMatchPlayer
!insert (matchCC_SF_A, mpSF_A_DR_DEF) into MatchMatchPlayer
!insert (matchCC_SF_A, mpSF_A_DR_FW) into MatchMatchPlayer

!insert (pHPK_GK, mpSF_A_HPK_GK) into PlayerMatch
!insert (pHPK_UT, mpSF_A_HPK_UT) into PlayerMatch
!insert (pHPK_FW, mpSF_A_HPK_FW) into PlayerMatch
!insert (pDR_GK, mpSF_A_DR_GK) into PlayerMatch
!insert (pDR_DEF, mpSF_A_DR_DEF) into PlayerMatch
!insert (pDR_FW, mpSF_A_DR_FW) into PlayerMatch

!new MatchPlayerPosition('mppSF_A_HPK_GK')
!mppSF_A_HPK_GK.positionName := #GOALKEEPER
!mppSF_A_HPK_GK.number := 1
!insert (mpSF_A_HPK_GK, mppSF_A_HPK_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppSF_A_HPK_UT')
!mppSF_A_HPK_UT.positionName := #MIDFIELDER
!mppSF_A_HPK_UT.number := 14
!insert (mpSF_A_HPK_UT, mppSF_A_HPK_UT) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppSF_A_HPK_FW')
!mppSF_A_HPK_FW.positionName := #FORWARD
!mppSF_A_HPK_FW.number := 9
!insert (mpSF_A_HPK_FW, mppSF_A_HPK_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppSF_A_DR_GK')
!mppSF_A_DR_GK.positionName := #GOALKEEPER
!mppSF_A_DR_GK.number := 1
!insert (mpSF_A_DR_GK, mppSF_A_DR_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppSF_A_DR_DEF')
!mppSF_A_DR_DEF.positionName := #DEFENDER
!mppSF_A_DR_DEF.number := 5
!insert (mpSF_A_DR_DEF, mppSF_A_DR_DEF) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppSF_A_DR_FW')
!mppSF_A_DR_FW.positionName := #FORWARD
!mppSF_A_DR_FW.number := 11
!insert (mpSF_A_DR_FW, mppSF_A_DR_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('mpSF_B_EL_GK')
!mpSF_B_EL_GK.booked := false
!mpSF_B_EL_GK.goals := 0
!mpSF_B_EL_GK.rating := 6

!new MatchPlayer('mpSF_B_EL_MID')
!mpSF_B_EL_MID.booked := true
!mpSF_B_EL_MID.goals := 0
!mpSF_B_EL_MID.rating := 6

!new MatchPlayer('mpSF_B_EL_FW')
!mpSF_B_EL_FW.booked := false
!mpSF_B_EL_FW.goals := 0
!mpSF_B_EL_FW.rating := 6

!new MatchPlayer('mpSF_B_HPK_GK')
!mpSF_B_HPK_GK.booked := false
!mpSF_B_HPK_GK.goals := 0
!mpSF_B_HPK_GK.rating := 7

!new MatchPlayer('mpSF_B_HPK_UT')
!mpSF_B_HPK_UT.booked := false
!mpSF_B_HPK_UT.goals := 1
!mpSF_B_HPK_UT.rating := 8

!new MatchPlayer('mpSF_B_HPK_FW')
!mpSF_B_HPK_FW.booked := false
!mpSF_B_HPK_FW.goals := 1
!mpSF_B_HPK_FW.rating := 8

!insert (matchCC_SF_B, mpSF_B_EL_GK) into MatchMatchPlayer
!insert (matchCC_SF_B, mpSF_B_EL_MID) into MatchMatchPlayer
!insert (matchCC_SF_B, mpSF_B_EL_FW) into MatchMatchPlayer
!insert (matchCC_SF_B, mpSF_B_HPK_GK) into MatchMatchPlayer
!insert (matchCC_SF_B, mpSF_B_HPK_UT) into MatchMatchPlayer
!insert (matchCC_SF_B, mpSF_B_HPK_FW) into MatchMatchPlayer

!insert (pEL_GK, mpSF_B_EL_GK) into PlayerMatch
!insert (pEL_MID, mpSF_B_EL_MID) into PlayerMatch
!insert (pEL_FW, mpSF_B_EL_FW) into PlayerMatch
!insert (pHPK_GK, mpSF_B_HPK_GK) into PlayerMatch
!insert (pHPK_UT, mpSF_B_HPK_UT) into PlayerMatch
!insert (pHPK_FW, mpSF_B_HPK_FW) into PlayerMatch

!new MatchPlayerPosition('mppSF_B_EL_GK')
!mppSF_B_EL_GK.positionName := #GOALKEEPER
!mppSF_B_EL_GK.number := 1
!insert (mpSF_B_EL_GK, mppSF_B_EL_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppSF_B_EL_MID')
!mppSF_B_EL_MID.positionName := #MIDFIELDER
!mppSF_B_EL_MID.number := 8
!insert (mpSF_B_EL_MID, mppSF_B_EL_MID) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppSF_B_EL_FW')
!mppSF_B_EL_FW.positionName := #FORWARD
!mppSF_B_EL_FW.number := 9
!insert (mpSF_B_EL_FW, mppSF_B_EL_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppSF_B_HPK_GK')
!mppSF_B_HPK_GK.positionName := #GOALKEEPER
!mppSF_B_HPK_GK.number := 1
!insert (mpSF_B_HPK_GK, mppSF_B_HPK_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppSF_B_HPK_UT')
!mppSF_B_HPK_UT.positionName := #MIDFIELDER
!mppSF_B_HPK_UT.number := 14
!insert (mpSF_B_HPK_UT, mppSF_B_HPK_UT) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppSF_B_HPK_FW')
!mppSF_B_HPK_FW.positionName := #FORWARD
!mppSF_B_HPK_FW.number := 9
!insert (mpSF_B_HPK_FW, mppSF_B_HPK_FW) into MatchPlayerMatchPlayerPosition
```
## Generation 11 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 416 | 0.00% |
| Multiplicities Errors | 0 | 105 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 34 | 0.00% |

# Generation 12
```
!new Club('clubHFN')
!clubHFN.name := 'Hawkstone FC'
!clubHFN.homeGround := 'Hawkstone Road Stadium'
!clubHFN.chairman := 'Lydia Cameron'

!new Club('clubCTW')
!clubCTW.name := 'Cedar Town'
!clubCTW.homeGround := 'Cedar Lane Ground'
!clubCTW.chairman := 'Rakesh Iyer'

!new Club('clubPBK')
!clubPBK.name := 'Parkbridge Kings'
!clubPBK.homeGround := 'Kings Meadow'
!clubPBK.chairman := 'Sven Larsson'

!new Team('teamHFN_A')
!teamHFN_A.name := 'Hawkstone Senior Team'

!new Team('teamHFN_B')
!teamHFN_B.name := 'Hawkstone U21'

!new Team('teamCTW_1')
!teamCTW_1.name := 'Cedar Town First XI'

!new Team('teamPBK_1')
!teamPBK_1.name := 'Parkbridge Kings First XI'

!insert (clubHFN, teamHFN_A) into ClubTeam
!insert (clubHFN, teamHFN_B) into ClubTeam
!insert (clubCTW, teamCTW_1) into ClubTeam
!insert (clubPBK, teamPBK_1) into ClubTeam

!new Competition('compSummerCup')
!compSummerCup.name := 'Summer Cup'
!compSummerCup.type := 'Cup'

!new Competition('compCityLeague')
!compCityLeague.name := 'City League'
!compCityLeague.type := 'League'

!new TrainingSession('tsHFN_A_1')
!tsHFN_A_1.date := '2026-07-02'
!tsHFN_A_1.location := 'Hawkstone Road Stadium - Pitch 2'
!tsHFN_A_1.purpose := 'High press structure and rest defence'

!new TrainingSession('tsHFN_A_2')
!tsHFN_A_2.date := '2026-07-04'
!tsHFN_A_2.location := 'Hawkstone Road Stadium - Gym'
!tsHFN_A_2.purpose := 'Strength and injury prevention'

!new TrainingSession('tsHFN_B_1')
!tsHFN_B_1.date := '2026-07-03'
!tsHFN_B_1.location := 'Hawkstone Academy Field'
!tsHFN_B_1.purpose := 'Playing through midfield and support angles'

!new TrainingSession('tsCTW_1')
!tsCTW_1.date := '2026-07-02'
!tsCTW_1.location := 'Cedar Lane Ground - Main Pitch'
!tsCTW_1.purpose := 'Low block organisation and counters'

!new TrainingSession('tsPBK_1')
!tsPBK_1.date := '2026-07-03'
!tsPBK_1.location := 'Kings Meadow - Training Pitch'
!tsPBK_1.purpose := 'Attacking set pieces and finishing'

!insert (teamHFN_A, tsHFN_A_1) into TeamTraining
!insert (teamHFN_A, tsHFN_A_2) into TeamTraining
!insert (teamHFN_B, tsHFN_B_1) into TeamTraining
!insert (teamCTW_1, tsCTW_1) into TeamTraining
!insert (teamPBK_1, tsPBK_1) into TeamTraining

!new TrainingNotes('tnHFN_A_1a')
!tnHFN_A_1a.note := 'Press triggers clearer; midfield must hold positions when fullback steps out.'
!tnHFN_A_1a.date := '2026-07-02'
!insert (tsHFN_A_1, tnHFN_A_1a) into TrainingTrainingNotes

!new TrainingNotes('tnHFN_A_2a')
!tnHFN_A_2a.note := 'Good gym session; keep sprint load light for two players with tight calves.'
!tnHFN_A_2a.date := '2026-07-04'
!insert (tsHFN_A_2, tnHFN_A_2a) into TrainingTrainingNotes

!new TrainingNotes('tnHFN_B_1a')
!tnHFN_B_1a.note := 'Better third-man runs; reduce turnovers when forcing central passes.'
!tnHFN_B_1a.date := '2026-07-03'
!insert (tsHFN_B_1, tnHFN_B_1a) into TrainingTrainingNotes

!new TrainingNotes('tnCTW_1a')
!tnCTW_1a.note := 'Compact block solid; first pass after regain still too slow.'
!tnCTW_1a.date := '2026-07-02'
!insert (tsCTW_1, tnCTW_1a) into TrainingTrainingNotes

!new TrainingNotes('tnPBK_1a')
!tnPBK_1a.note := 'Corner routines sharp; finishing improved when attacks ended with cut-backs.'
!tnPBK_1a.date := '2026-07-03'
!insert (tsPBK_1, tnPBK_1a) into TrainingTrainingNotes

!new Player('pHFN_GK')
!pHFN_GK.name := 'Gareth Hsu'
!pHFN_GK.age := 29
!pHFN_GK.bestFoot := #RIGHT
!pHFN_GK.phoneNumber := '+44 7700 401001'

!new Player('pHFN_DEF')
!pHFN_DEF.name := 'Tomas Rivera'
!pHFN_DEF.age := 26
!pHFN_DEF.bestFoot := #BOTH
!pHFN_DEF.phoneNumber := '+44 7700 401002'

!new Player('pHFN_MID')
!pHFN_MID.name := 'Caleb Foster'
!pHFN_MID.age := 24
!pHFN_MID.bestFoot := #LEFT
!pHFN_MID.phoneNumber := '+44 7700 401003'

!new Player('pHFN_FW')
!pHFN_FW.name := 'Ilyas Rahman'
!pHFN_FW.age := 23
!pHFN_FW.bestFoot := #RIGHT
!pHFN_FW.phoneNumber := '+44 7700 401004'

!new Player('pHFN_U21_GK')
!pHFN_U21_GK.name := 'Evan Patel'
!pHFN_U21_GK.age := 19
!pHFN_U21_GK.bestFoot := #BOTH
!pHFN_U21_GK.phoneNumber := '+44 7700 402001'

!new Player('pHFN_U21_MID')
!pHFN_U21_MID.name := 'Sacha Morel'
!pHFN_U21_MID.age := 18
!pHFN_U21_MID.bestFoot := #RIGHT
!pHFN_U21_MID.phoneNumber := '+44 7700 402002'

!new Player('pHFN_U21_FW')
!pHFN_U21_FW.name := 'Noel Araya'
!pHFN_U21_FW.age := 20
!pHFN_U21_FW.bestFoot := #LEFT
!pHFN_U21_FW.phoneNumber := '+44 7700 402003'

!new Player('pCTW_GK')
!pCTW_GK.name := 'Milan Krstic'
!pCTW_GK.age := 31
!pCTW_GK.bestFoot := #LEFT
!pCTW_GK.phoneNumber := '+44 7700 403001'

!new Player('pCTW_DEF')
!pCTW_DEF.name := 'Ben Okoye'
!pCTW_DEF.age := 27
!pCTW_DEF.bestFoot := #RIGHT
!pCTW_DEF.phoneNumber := '+44 7700 403002'

!new Player('pCTW_FW')
!pCTW_FW.name := 'Drew McIntyre'
!pCTW_FW.age := 22
!pCTW_FW.bestFoot := #RIGHT
!pCTW_FW.phoneNumber := '+44 7700 403003'

!new Player('pPBK_GK')
!pPBK_GK.name := 'Lukas Engel'
!pPBK_GK.age := 28
!pPBK_GK.bestFoot := #BOTH
!pPBK_GK.phoneNumber := '+44 7700 404001'

!new Player('pPBK_MID')
!pPBK_MID.name := 'Yuto Tanaka'
!pPBK_MID.age := 25
!pPBK_MID.bestFoot := #RIGHT
!pPBK_MID.phoneNumber := '+44 7700 404002'

!new Player('pPBK_FW')
!pPBK_FW.name := 'Ruben Costa'
!pPBK_FW.age := 24
!pPBK_FW.bestFoot := #LEFT
!pPBK_FW.phoneNumber := '+44 7700 404003'

!insert (teamHFN_A, pHFN_GK) into TeamPlayer
!insert (teamHFN_A, pHFN_DEF) into TeamPlayer
!insert (teamHFN_A, pHFN_MID) into TeamPlayer
!insert (teamHFN_A, pHFN_FW) into TeamPlayer

!insert (teamHFN_B, pHFN_U21_GK) into TeamPlayer
!insert (teamHFN_B, pHFN_U21_MID) into TeamPlayer
!insert (teamHFN_B, pHFN_U21_FW) into TeamPlayer

!insert (teamCTW_1, pCTW_GK) into TeamPlayer
!insert (teamCTW_1, pCTW_DEF) into TeamPlayer
!insert (teamCTW_1, pCTW_FW) into TeamPlayer

!insert (teamPBK_1, pPBK_GK) into TeamPlayer
!insert (teamPBK_1, pPBK_MID) into TeamPlayer
!insert (teamPBK_1, pPBK_FW) into TeamPlayer

!new Position('posHFN_GK_1')
!posHFN_GK_1.positionName := #GOALKEEPER
!insert (pHFN_GK, posHFN_GK_1) into PlayerPositions

!new Position('posHFN_DEF_1')
!posHFN_DEF_1.positionName := #DEFENDER
!insert (pHFN_DEF, posHFN_DEF_1) into PlayerPositions

!new Position('posHFN_DEF_2')
!posHFN_DEF_2.positionName := #MIDFIELDER
!insert (pHFN_DEF, posHFN_DEF_2) into PlayerPositions

!new Position('posHFN_MID_1')
!posHFN_MID_1.positionName := #MIDFIELDER
!insert (pHFN_MID, posHFN_MID_1) into PlayerPositions

!new Position('posHFN_FW_1')
!posHFN_FW_1.positionName := #FORWARD
!insert (pHFN_FW, posHFN_FW_1) into PlayerPositions

!new Position('posHFN_U21_GK_1')
!posHFN_U21_GK_1.positionName := #GOALKEEPER
!insert (pHFN_U21_GK, posHFN_U21_GK_1) into PlayerPositions

!new Position('posHFN_U21_MID_1')
!posHFN_U21_MID_1.positionName := #MIDFIELDER
!insert (pHFN_U21_MID, posHFN_U21_MID_1) into PlayerPositions

!new Position('posHFN_U21_MID_2')
!posHFN_U21_MID_2.positionName := #FORWARD
!insert (pHFN_U21_MID, posHFN_U21_MID_2) into PlayerPositions

!new Position('posHFN_U21_FW_1')
!posHFN_U21_FW_1.positionName := #FORWARD
!insert (pHFN_U21_FW, posHFN_U21_FW_1) into PlayerPositions

!new Position('posCTW_GK_1')
!posCTW_GK_1.positionName := #GOALKEEPER
!insert (pCTW_GK, posCTW_GK_1) into PlayerPositions

!new Position('posCTW_DEF_1')
!posCTW_DEF_1.positionName := #DEFENDER
!insert (pCTW_DEF, posCTW_DEF_1) into PlayerPositions

!new Position('posCTW_FW_1')
!posCTW_FW_1.positionName := #FORWARD
!insert (pCTW_FW, posCTW_FW_1) into PlayerPositions

!new Position('posCTW_FW_2')
!posCTW_FW_2.positionName := #MIDFIELDER
!insert (pCTW_FW, posCTW_FW_2) into PlayerPositions

!new Position('posPBK_GK_1')
!posPBK_GK_1.positionName := #GOALKEEPER
!insert (pPBK_GK, posPBK_GK_1) into PlayerPositions

!new Position('posPBK_MID_1')
!posPBK_MID_1.positionName := #MIDFIELDER
!insert (pPBK_MID, posPBK_MID_1) into PlayerPositions

!new Position('posPBK_FW_1')
!posPBK_FW_1.positionName := #FORWARD
!insert (pPBK_FW, posPBK_FW_1) into PlayerPositions

!new Position('posPBK_FW_2')
!posPBK_FW_2.positionName := #MIDFIELDER
!insert (pPBK_FW, posPBK_FW_2) into PlayerPositions

!new TrainingObjective('objHFN_GK_1')
!objHFN_GK_1.areaToImprove := 'Starting position when defending through balls'
!objHFN_GK_1.startDate := '2026-07-01'
!objHFN_GK_1.endDate := '2026-08-01'
!objHFN_GK_1.success := false
!insert (objHFN_GK_1, pHFN_GK) into TrainingObjectivePlayer

!new TrainingObjective('objHFN_DEF_1')
!objHFN_DEF_1.areaToImprove := 'Body orientation when receiving under press'
!objHFN_DEF_1.startDate := '2026-07-01'
!objHFN_DEF_1.endDate := '2026-08-01'
!objHFN_DEF_1.success := true
!insert (objHFN_DEF_1, pHFN_DEF) into TrainingObjectivePlayer

!new TrainingObjective('objHFN_MID_1')
!objHFN_MID_1.areaToImprove := 'Scanning before receiving between the lines'
!objHFN_MID_1.startDate := '2026-07-01'
!objHFN_MID_1.endDate := '2026-08-01'
!objHFN_MID_1.success := false
!insert (objHFN_MID_1, pHFN_MID) into TrainingObjectivePlayer

!new TrainingObjective('objHFN_FW_1')
!objHFN_FW_1.areaToImprove := 'Near-post runs on low crosses'
!objHFN_FW_1.startDate := '2026-07-01'
!objHFN_FW_1.endDate := '2026-08-01'
!objHFN_FW_1.success := true
!insert (objHFN_FW_1, pHFN_FW) into TrainingObjectivePlayer

!new TrainingObjective('objHFN_U21_GK_1')
!objHFN_U21_GK_1.areaToImprove := 'Footwork for low saves'
!objHFN_U21_GK_1.startDate := '2026-07-01'
!objHFN_U21_GK_1.endDate := '2026-08-01'
!objHFN_U21_GK_1.success := true
!insert (objHFN_U21_GK_1, pHFN_U21_GK) into TrainingObjectivePlayer

!new TrainingObjective('objHFN_U21_MID_1')
!objHFN_U21_MID_1.areaToImprove := 'Speed of play in tight spaces'
!objHFN_U21_MID_1.startDate := '2026-07-01'
!objHFN_U21_MID_1.endDate := '2026-08-01'
!objHFN_U21_MID_1.success := false
!insert (objHFN_U21_MID_1, pHFN_U21_MID) into TrainingObjectivePlayer

!new TrainingObjective('objHFN_U21_FW_1')
!objHFN_U21_FW_1.areaToImprove := 'First-time finishing from cut-backs'
!objHFN_U21_FW_1.startDate := '2026-07-01'
!objHFN_U21_FW_1.endDate := '2026-08-01'
!objHFN_U21_FW_1.success := false
!insert (objHFN_U21_FW_1, pHFN_U21_FW) into TrainingObjectivePlayer

!new TrainingObjective('objCTW_GK_1')
!objCTW_GK_1.areaToImprove := 'Quicker distribution after saves'
!objCTW_GK_1.startDate := '2026-07-01'
!objCTW_GK_1.endDate := '2026-08-01'
!objCTW_GK_1.success := true
!insert (objCTW_GK_1, pCTW_GK) into TrainingObjectivePlayer

!new TrainingObjective('objCTW_DEF_1')
!objCTW_DEF_1.areaToImprove := 'Marking discipline at back post'
!objCTW_DEF_1.startDate := '2026-07-01'
!objCTW_DEF_1.endDate := '2026-08-01'
!objCTW_DEF_1.success := false
!insert (objCTW_DEF_1, pCTW_DEF) into TrainingObjectivePlayer

!new TrainingObjective('objCTW_FW_1')
!objCTW_FW_1.areaToImprove := 'Curved runs to stay onside'
!objCTW_FW_1.startDate := '2026-07-01'
!objCTW_FW_1.endDate := '2026-08-01'
!objCTW_FW_1.success := false
!insert (objCTW_FW_1, pCTW_FW) into TrainingObjectivePlayer

!new TrainingObjective('objPBK_GK_1')
!objPBK_GK_1.areaToImprove := 'Claiming crosses under pressure'
!objPBK_GK_1.startDate := '2026-07-01'
!objPBK_GK_1.endDate := '2026-08-01'
!objPBK_GK_1.success := false
!insert (objPBK_GK_1, pPBK_GK) into TrainingObjectivePlayer

!new TrainingObjective('objPBK_MID_1')
!objPBK_MID_1.areaToImprove := 'Switching play to the weak side'
!objPBK_MID_1.startDate := '2026-07-01'
!objPBK_MID_1.endDate := '2026-08-01'
!objPBK_MID_1.success := true
!insert (objPBK_MID_1, pPBK_MID) into TrainingObjectivePlayer

!new TrainingObjective('objPBK_FW_1')
!objPBK_FW_1.areaToImprove := 'Hold-up play with back to goal'
!objPBK_FW_1.startDate := '2026-07-01'
!objPBK_FW_1.endDate := '2026-08-01'
!objPBK_FW_1.success := false
!insert (objPBK_FW_1, pPBK_FW) into TrainingObjectivePlayer

!new PlayerNotes('pnHFN_1')
!pnHFN_1.note := 'Reads play early; must be more decisive when under a high press.'
!pnHFN_1.date := '2026-07-05'
!insert (pHFN_MID, pnHFN_1) into PlayerPlayerNotes

!new PlayerNotes('pnCTW_1')
!pnCTW_1.note := 'Fast runner in behind; sometimes drifts offside when fatigued.'
!pnCTW_1.date := '2026-07-05'
!insert (pCTW_FW, pnCTW_1) into PlayerPlayerNotes

!new TrainingFailedToAttend('tfaHFN_1')
!tfaHFN_1.reason := 'University exam'
!insert (tsHFN_B_1, tfaHFN_1) into TrainingFailded
!insert (tfaHFN_1, pHFN_U21_MID) into FailedPlayer

!new Match('matchCup_SF1')
!matchCup_SF1.date := '2026-07-10'
!matchCup_SF1.homeAway := true

!new Match('matchLeague_1')
!matchLeague_1.date := '2026-07-12'
!matchLeague_1.homeAway := false

!insert (compSummerCup, matchCup_SF1) into CompetitionMatch
!insert (compCityLeague, matchLeague_1) into CompetitionMatch

!insert (teamHFN_A, matchCup_SF1) into LocalMatch
!insert (teamCTW_1, matchCup_SF1) into VisitorMatch

!insert (teamHFN_B, matchLeague_1) into LocalMatch
!insert (teamPBK_1, matchLeague_1) into VisitorMatch

!new MatchReport('mrCup_SF1')
!mrCup_SF1.duration := 90
!mrCup_SF1.scoreVisitor := 3
!mrCup_SF1.scoreLocal := 0
!insert (matchCup_SF1, mrCup_SF1) into MatchMatchReport

!new MatchReport('mrLeague_1')
!mrLeague_1.duration := 90
!mrLeague_1.scoreVisitor := 2
!mrLeague_1.scoreLocal := 2
!insert (matchLeague_1, mrLeague_1) into MatchMatchReport

!new MatchEvent('evCup1_goal1')
!evCup1_goal1.eventType := #GOAL
!evCup1_goal1.time := 12
!insert (matchCup_SF1, evCup1_goal1) into MatchMatchEvent

!new MatchEvent('evCup1_goal2')
!evCup1_goal2.eventType := #GOAL
!evCup1_goal2.time := 47
!insert (matchCup_SF1, evCup1_goal2) into MatchMatchEvent

!new MatchEvent('evCup1_goal3')
!evCup1_goal3.eventType := #GOAL
!evCup1_goal3.time := 76
!insert (matchCup_SF1, evCup1_goal3) into MatchMatchEvent

!new MatchEvent('evCup1_foul1')
!evCup1_foul1.eventType := #FOUL
!evCup1_foul1.time := 33
!insert (matchCup_SF1, evCup1_foul1) into MatchMatchEvent

!new MatchEvent('evCup1_off1')
!evCup1_off1.eventType := #OFFSIDE
!evCup1_off1.time := 58
!insert (matchCup_SF1, evCup1_off1) into MatchMatchEvent

!new MatchEvent('evCup1_corner1')
!evCup1_corner1.eventType := #CORNER
!evCup1_corner1.time := 81
!insert (matchCup_SF1, evCup1_corner1) into MatchMatchEvent

!new MatchNote('mnCup1_1')
!mnCup1_1.note := 'Visitors punished mistakes and scored three; home side struggled to create clear chances.'
!mnCup1_1.date := '2026-07-10'
!insert (matchCup_SF1, mnCup1_1) into MatchMatchNote

!new MatchEvent('evL1_goal1')
!evL1_goal1.eventType := #GOAL
!evL1_goal1.time := 9
!insert (matchLeague_1, evL1_goal1) into MatchMatchEvent

!new MatchEvent('evL1_goal2')
!evL1_goal2.eventType := #GOAL
!evL1_goal2.time := 28
!insert (matchLeague_1, evL1_goal2) into MatchMatchEvent

!new MatchEvent('evL1_goal3')
!evL1_goal3.eventType := #GOAL
!evL1_goal3.time := 61
!insert (matchLeague_1, evL1_goal3) into MatchMatchEvent

!new MatchEvent('evL1_goal4')
!evL1_goal4.eventType := #GOAL
!evL1_goal4.time := 88
!insert (matchLeague_1, evL1_goal4) into MatchMatchEvent

!new MatchEvent('evL1_pen1')
!evL1_pen1.eventType := #PENALTY
!evL1_pen1.time := 66
!insert (matchLeague_1, evL1_pen1) into MatchMatchEvent

!new MatchEvent('evL1_foul1')
!evL1_foul1.eventType := #FOUL
!evL1_foul1.time := 52
!insert (matchLeague_1, evL1_foul1) into MatchMatchEvent

!new MatchNote('mnL1_1')
!mnL1_1.note := 'High-tempo draw; both teams traded goals and a late equaliser decided it.'
!mnL1_1.date := '2026-07-12'
!insert (matchLeague_1, mnL1_1) into MatchMatchNote

!new MatchPlayer('mpCup1_HFN_GK')
!mpCup1_HFN_GK.booked := false
!mpCup1_HFN_GK.goals := 0
!mpCup1_HFN_GK.rating := 6

!new MatchPlayer('mpCup1_HFN_FW')
!mpCup1_HFN_FW.booked := true
!mpCup1_HFN_FW.goals := 0
!mpCup1_HFN_FW.rating := 6

!new MatchPlayer('mpCup1_CTW_FW')
!mpCup1_CTW_FW.booked := false
!mpCup1_CTW_FW.goals := 2
!mpCup1_CTW_FW.rating := 8

!new MatchPlayer('mpCup1_CTW_DEF')
!mpCup1_CTW_DEF.booked := false
!mpCup1_CTW_DEF.goals := 0
!mpCup1_CTW_DEF.rating := 7

!insert (matchCup_SF1, mpCup1_HFN_GK) into MatchMatchPlayer
!insert (matchCup_SF1, mpCup1_HFN_FW) into MatchMatchPlayer
!insert (matchCup_SF1, mpCup1_CTW_FW) into MatchMatchPlayer
!insert (matchCup_SF1, mpCup1_CTW_DEF) into MatchMatchPlayer

!insert (pHFN_GK, mpCup1_HFN_GK) into PlayerMatch
!insert (pHFN_FW, mpCup1_HFN_FW) into PlayerMatch
!insert (pCTW_FW, mpCup1_CTW_FW) into PlayerMatch
!insert (pCTW_DEF, mpCup1_CTW_DEF) into PlayerMatch

!new MatchPlayerPosition('mppCup1_HFN_GK')
!mppCup1_HFN_GK.positionName := #GOALKEEPER
!mppCup1_HFN_GK.number := 1
!insert (mpCup1_HFN_GK, mppCup1_HFN_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppCup1_HFN_FW')
!mppCup1_HFN_FW.positionName := #FORWARD
!mppCup1_HFN_FW.number := 9
!insert (mpCup1_HFN_FW, mppCup1_HFN_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppCup1_CTW_FW')
!mppCup1_CTW_FW.positionName := #FORWARD
!mppCup1_CTW_FW.number := 11
!insert (mpCup1_CTW_FW, mppCup1_CTW_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppCup1_CTW_DEF')
!mppCup1_CTW_DEF.positionName := #DEFENDER
!mppCup1_CTW_DEF.number := 5
!insert (mpCup1_CTW_DEF, mppCup1_CTW_DEF) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('mpL1_HFN_U21_MID')
!mpL1_HFN_U21_MID.booked := false
!mpL1_HFN_U21_MID.goals := 1
!mpL1_HFN_U21_MID.rating := 7

!new MatchPlayer('mpL1_HFN_U21_FW')
!mpL1_HFN_U21_FW.booked := true
!mpL1_HFN_U21_FW.goals := 1
!mpL1_HFN_U21_FW.rating := 7

!new MatchPlayer('mpL1_PBK_MID')
!mpL1_PBK_MID.booked := false
!mpL1_PBK_MID.goals := 1
!mpL1_PBK_MID.rating := 7

!new MatchPlayer('mpL1_PBK_FW')
!mpL1_PBK_FW.booked := false
!mpL1_PBK_FW.goals := 1
!mpL1_PBK_FW.rating := 8

!insert (matchLeague_1, mpL1_HFN_U21_MID) into MatchMatchPlayer
!insert (matchLeague_1, mpL1_HFN_U21_FW) into MatchMatchPlayer
!insert (matchLeague_1, mpL1_PBK_MID) into MatchMatchPlayer
!insert (matchLeague_1, mpL1_PBK_FW) into MatchMatchPlayer

!insert (pHFN_U21_MID, mpL1_HFN_U21_MID) into PlayerMatch
!insert (pHFN_U21_FW, mpL1_HFN_U21_FW) into PlayerMatch
!insert (pPBK_MID, mpL1_PBK_MID) into PlayerMatch
!insert (pPBK_FW, mpL1_PBK_FW) into PlayerMatch

!new MatchPlayerPosition('mppL1_HFN_U21_MID')
!mppL1_HFN_U21_MID.positionName := #MIDFIELDER
!mppL1_HFN_U21_MID.number := 8
!insert (mpL1_HFN_U21_MID, mppL1_HFN_U21_MID) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppL1_HFN_U21_FW')
!mppL1_HFN_U21_FW.positionName := #FORWARD
!mppL1_HFN_U21_FW.number := 10
!insert (mpL1_HFN_U21_FW, mppL1_HFN_U21_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppL1_PBK_MID')
!mppL1_PBK_MID.positionName := #MIDFIELDER
!mppL1_PBK_MID.number := 6
!insert (mpL1_PBK_MID, mppL1_PBK_MID) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppL1_PBK_FW')
!mppL1_PBK_FW.positionName := #FORWARD
!mppL1_PBK_FW.number := 9
!insert (mpL1_PBK_FW, mppL1_PBK_FW) into MatchPlayerMatchPlayerPosition
```
## Generation 12 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 452 | 0.00% |
| Multiplicities Errors | 0 | 107 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 42 | 0.00% |

# Generation 13
```
!new Club('clubSC9')
!clubSC9.name := 'Sunset City FC'
!clubSC9.homeGround := 'Sunset Arena'
!clubSC9.chairman := 'Marceline Dupuy'

!new Club('clubBRK9')
!clubBRK9.name := 'Brookfield Rovers'
!clubBRK9.homeGround := 'Brookfield Sports Park'
!clubBRK9.chairman := 'Darren Holm'

!new Team('teamSC9_S')
!teamSC9_S.name := 'Sunset City Seniors'

!new Team('teamSC9_Y')
!teamSC9_Y.name := 'Sunset City Youth'

!new Team('teamBRK9_S')
!teamBRK9_S.name := 'Brookfield Seniors'

!new Team('teamBRK9_Y')
!teamBRK9_Y.name := 'Brookfield Youth'

!insert (clubSC9, teamSC9_S) into ClubTeam
!insert (clubSC9, teamSC9_Y) into ClubTeam
!insert (clubBRK9, teamBRK9_S) into ClubTeam
!insert (clubBRK9, teamBRK9_Y) into ClubTeam

!new Competition('compIndoor9')
!compIndoor9.name := 'Indoor Winter Series'
!compIndoor9.type := 'Indoor League'

!new TrainingSession('tsSC9_S_1')
!tsSC9_S_1.date := '2026-08-04'
!tsSC9_S_1.location := 'Sunset Arena - Indoor Hall'
!tsSC9_S_1.purpose := 'Quick passing in tight spaces'

!new TrainingSession('tsSC9_Y_1')
!tsSC9_Y_1.date := '2026-08-05'
!tsSC9_Y_1.location := 'Sunset Arena - Secondary Hall'
!tsSC9_Y_1.purpose := 'First touch and turning'

!new TrainingSession('tsBRK9_S_1')
!tsBRK9_S_1.date := '2026-08-04'
!tsBRK9_S_1.location := 'Brookfield Sports Park - Indoor Court'
!tsBRK9_S_1.purpose := 'Defending transitions and recovery'

!new TrainingSession('tsBRK9_Y_1')
!tsBRK9_Y_1.date := '2026-08-06'
!tsBRK9_Y_1.location := 'Brookfield Sports Park - Training Zone'
!tsBRK9_Y_1.purpose := 'Finishing basics and composure'

!insert (teamSC9_S, tsSC9_S_1) into TeamTraining
!insert (teamSC9_Y, tsSC9_Y_1) into TeamTraining
!insert (teamBRK9_S, tsBRK9_S_1) into TeamTraining
!insert (teamBRK9_Y, tsBRK9_Y_1) into TeamTraining

!new TrainingNotes('tnSC9_S_1a')
!tnSC9_S_1a.note := 'Good tempo; players found diagonal lanes quickly.'
!tnSC9_S_1a.date := '2026-08-04'
!insert (tsSC9_S_1, tnSC9_S_1a) into TrainingTrainingNotes

!new TrainingNotes('tnSC9_Y_1a')
!tnSC9_Y_1a.note := 'Turning under pressure improved; encourage more scanning before receiving.'
!tnSC9_Y_1a.date := '2026-08-05'
!insert (tsSC9_Y_1, tnSC9_Y_1a) into TrainingTrainingNotes

!new TrainingNotes('tnBRK9_S_1a')
!tnBRK9_S_1a.note := 'Recovery runs were sharp; reduce late challenges in counters.'
!tnBRK9_S_1a.date := '2026-08-04'
!insert (tsBRK9_S_1, tnBRK9_S_1a) into TrainingTrainingNotes

!new TrainingNotes('tnBRK9_Y_1a')
!tnBRK9_Y_1a.note := 'Finishing technique solid; needs calmer final action when rushed.'
!tnBRK9_Y_1a.date := '2026-08-06'
!insert (tsBRK9_Y_1, tnBRK9_Y_1a) into TrainingTrainingNotes

!new Player('pSC9_GK')
!pSC9_GK.name := 'Victor Hwang'
!pSC9_GK.age := 30
!pSC9_GK.bestFoot := #BOTH
!pSC9_GK.phoneNumber := '+44 7700 901001'

!new Player('pSC9_MID')
!pSC9_MID.name := 'Elias Romano'
!pSC9_MID.age := 27
!pSC9_MID.bestFoot := #RIGHT
!pSC9_MID.phoneNumber := '+44 7700 901002'

!new Player('pSC9_Y_FW')
!pSC9_Y_FW.name := 'Theo March'
!pSC9_Y_FW.age := 17
!pSC9_Y_FW.bestFoot := #LEFT
!pSC9_Y_FW.phoneNumber := '+44 7700 901101'

!new Player('pBRK9_DEF')
!pBRK9_DEF.name := 'Ibrahim Sissoko'
!pBRK9_DEF.age := 28
!pBRK9_DEF.bestFoot := #RIGHT
!pBRK9_DEF.phoneNumber := '+44 7700 902001'

!new Player('pBRK9_FW')
!pBRK9_FW.name := 'Oliver Keats'
!pBRK9_FW.age := 24
!pBRK9_FW.bestFoot := #BOTH
!pBRK9_FW.phoneNumber := '+44 7700 902002'

!new Player('pBRK9_Y_MID')
!pBRK9_Y_MID.name := 'Jai Kulkarni'
!pBRK9_Y_MID.age := 18
!pBRK9_Y_MID.bestFoot := #RIGHT
!pBRK9_Y_MID.phoneNumber := '+44 7700 902101'

!insert (teamSC9_S, pSC9_GK) into TeamPlayer
!insert (teamSC9_S, pSC9_MID) into TeamPlayer
!insert (teamSC9_Y, pSC9_Y_FW) into TeamPlayer
!insert (teamBRK9_S, pBRK9_DEF) into TeamPlayer
!insert (teamBRK9_S, pBRK9_FW) into TeamPlayer
!insert (teamBRK9_Y, pBRK9_Y_MID) into TeamPlayer

!new Position('posSC9_GK_1')
!posSC9_GK_1.positionName := #GOALKEEPER
!insert (pSC9_GK, posSC9_GK_1) into PlayerPositions

!new Position('posSC9_MID_1')
!posSC9_MID_1.positionName := #MIDFIELDER
!insert (pSC9_MID, posSC9_MID_1) into PlayerPositions

!new Position('posSC9_MID_2')
!posSC9_MID_2.positionName := #DEFENDER
!insert (pSC9_MID, posSC9_MID_2) into PlayerPositions

!new Position('posSC9Y_FW_1')
!posSC9Y_FW_1.positionName := #FORWARD
!insert (pSC9_Y_FW, posSC9Y_FW_1) into PlayerPositions

!new Position('posBRK9_DEF_1')
!posBRK9_DEF_1.positionName := #DEFENDER
!insert (pBRK9_DEF, posBRK9_DEF_1) into PlayerPositions

!new Position('posBRK9_FW_1')
!posBRK9_FW_1.positionName := #FORWARD
!insert (pBRK9_FW, posBRK9_FW_1) into PlayerPositions

!new Position('posBRK9_FW_2')
!posBRK9_FW_2.positionName := #MIDFIELDER
!insert (pBRK9_FW, posBRK9_FW_2) into PlayerPositions

!new Position('posBRK9Y_MID_1')
!posBRK9Y_MID_1.positionName := #MIDFIELDER
!insert (pBRK9_Y_MID, posBRK9Y_MID_1) into PlayerPositions

!new TrainingObjective('objSC9_GK_1')
!objSC9_GK_1.areaToImprove := 'Quick throws to start counters'
!objSC9_GK_1.startDate := '2026-08-01'
!objSC9_GK_1.endDate := '2026-09-01'
!objSC9_GK_1.success := true
!insert (objSC9_GK_1, pSC9_GK) into TrainingObjectivePlayer

!new TrainingObjective('objSC9_MID_1')
!objSC9_MID_1.areaToImprove := 'One-touch play when pressed'
!objSC9_MID_1.startDate := '2026-08-01'
!objSC9_MID_1.endDate := '2026-09-01'
!objSC9_MID_1.success := false
!insert (objSC9_MID_1, pSC9_MID) into TrainingObjectivePlayer

!new TrainingObjective('objSC9Y_FW_1')
!objSC9Y_FW_1.areaToImprove := 'Composure in front of goal'
!objSC9Y_FW_1.startDate := '2026-08-01'
!objSC9Y_FW_1.endDate := '2026-09-01'
!objSC9Y_FW_1.success := false
!insert (objSC9Y_FW_1, pSC9_Y_FW) into TrainingObjectivePlayer

!new TrainingObjective('objBRK9_DEF_1')
!objBRK9_DEF_1.areaToImprove := 'Tracking runners in transition'
!objBRK9_DEF_1.startDate := '2026-08-01'
!objBRK9_DEF_1.endDate := '2026-09-01'
!objBRK9_DEF_1.success := true
!insert (objBRK9_DEF_1, pBRK9_DEF) into TrainingObjectivePlayer

!new TrainingObjective('objBRK9_FW_1')
!objBRK9_FW_1.areaToImprove := 'Hold-up play under contact'
!objBRK9_FW_1.startDate := '2026-08-01'
!objBRK9_FW_1.endDate := '2026-09-01'
!objBRK9_FW_1.success := false
!insert (objBRK9_FW_1, pBRK9_FW) into TrainingObjectivePlayer

!new TrainingObjective('objBRK9Y_MID_1')
!objBRK9Y_MID_1.areaToImprove := 'Scanning before receiving'
!objBRK9Y_MID_1.startDate := '2026-08-01'
!objBRK9Y_MID_1.endDate := '2026-09-01'
!objBRK9Y_MID_1.success := false
!insert (objBRK9Y_MID_1, pBRK9_Y_MID) into TrainingObjectivePlayer

!new PlayerNotes('pnSC9_1')
!pnSC9_1.note := 'Very consistent in training; helps organise small-sided games.'
!pnSC9_1.date := '2026-08-06'
!insert (pSC9_GK, pnSC9_1) into PlayerPlayerNotes

!new PlayerNotes('pnBRK9_1')
!pnBRK9_1.note := 'Strong duel winner; needs to avoid stepping out too early.'
!pnBRK9_1.date := '2026-08-06'
!insert (pBRK9_DEF, pnBRK9_1) into PlayerPlayerNotes

!new TrainingFailedToAttend('tfaSC9_1')
!tfaSC9_1.reason := 'Work travel'
!insert (tsSC9_S_1, tfaSC9_1) into TrainingFailded
!insert (tfaSC9_1, pSC9_MID) into FailedPlayer

!new TrainingFailedToAttend('tfaBRK9_1')
!tfaBRK9_1.reason := 'Illness'
!insert (tsBRK9_S_1, tfaBRK9_1) into TrainingFailded
!insert (tfaBRK9_1, pBRK9_FW) into FailedPlayer

!new Match('matchIndoor9_1')
!matchIndoor9_1.date := '2026-08-11'
!matchIndoor9_1.homeAway := false

!insert (compIndoor9, matchIndoor9_1) into CompetitionMatch

!insert (teamSC9_S, matchIndoor9_1) into LocalMatch
!insert (teamBRK9_S, matchIndoor9_1) into VisitorMatch

!new MatchReport('mrIndoor9_1')
!mrIndoor9_1.duration := 90
!mrIndoor9_1.scoreVisitor := 0
!mrIndoor9_1.scoreLocal := 0
!insert (matchIndoor9_1, mrIndoor9_1) into MatchMatchReport

!new MatchEvent('evIndoor9_1_foul')
!evIndoor9_1_foul.eventType := #FOUL
!evIndoor9_1_foul.time := 16
!insert (matchIndoor9_1, evIndoor9_1_foul) into MatchMatchEvent

!new MatchEvent('evIndoor9_1_corner')
!evIndoor9_1_corner.eventType := #CORNER
!evIndoor9_1_corner.time := 49
!insert (matchIndoor9_1, evIndoor9_1_corner) into MatchMatchEvent

!new MatchEvent('evIndoor9_1_off')
!evIndoor9_1_off.eventType := #OFFSIDE
!evIndoor9_1_off.time := 71
!insert (matchIndoor9_1, evIndoor9_1_off) into MatchMatchEvent

!new MatchNote('mnIndoor9_1a')
!mnIndoor9_1a.note := 'Tactical indoor match; both teams defended compactly and limited clear chances.'
!mnIndoor9_1a.date := '2026-08-11'
!insert (matchIndoor9_1, mnIndoor9_1a) into MatchMatchNote

!new MatchPlayer('mpIndoor9_SC_GK')
!mpIndoor9_SC_GK.booked := false
!mpIndoor9_SC_GK.goals := 0
!mpIndoor9_SC_GK.rating := 8

!new MatchPlayer('mpIndoor9_SC_MID')
!mpIndoor9_SC_MID.booked := true
!mpIndoor9_SC_MID.goals := 0
!mpIndoor9_SC_MID.rating := 6

!new MatchPlayer('mpIndoor9_BRK_DEF')
!mpIndoor9_BRK_DEF.booked := false
!mpIndoor9_BRK_DEF.goals := 0
!mpIndoor9_BRK_DEF.rating := 7

!new MatchPlayer('mpIndoor9_BRK_FW')
!mpIndoor9_BRK_FW.booked := false
!mpIndoor9_BRK_FW.goals := 0
!mpIndoor9_BRK_FW.rating := 6

!insert (matchIndoor9_1, mpIndoor9_SC_GK) into MatchMatchPlayer
!insert (matchIndoor9_1, mpIndoor9_SC_MID) into MatchMatchPlayer
!insert (matchIndoor9_1, mpIndoor9_BRK_DEF) into MatchMatchPlayer
!insert (matchIndoor9_1, mpIndoor9_BRK_FW) into MatchMatchPlayer

!insert (pSC9_GK, mpIndoor9_SC_GK) into PlayerMatch
!insert (pSC9_MID, mpIndoor9_SC_MID) into PlayerMatch
!insert (pBRK9_DEF, mpIndoor9_BRK_DEF) into PlayerMatch
!insert (pBRK9_FW, mpIndoor9_BRK_FW) into PlayerMatch

!new MatchPlayerPosition('mppIndoor9_SC_GK')
!mppIndoor9_SC_GK.positionName := #GOALKEEPER
!mppIndoor9_SC_GK.number := 1
!insert (mpIndoor9_SC_GK, mppIndoor9_SC_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppIndoor9_SC_MID')
!mppIndoor9_SC_MID.positionName := #MIDFIELDER
!mppIndoor9_SC_MID.number := 6
!insert (mpIndoor9_SC_MID, mppIndoor9_SC_MID) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppIndoor9_BRK_DEF')
!mppIndoor9_BRK_DEF.positionName := #DEFENDER
!mppIndoor9_BRK_DEF.number := 4
!insert (mpIndoor9_BRK_DEF, mppIndoor9_BRK_DEF) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppIndoor9_BRK_FW')
!mppIndoor9_BRK_FW.positionName := #FORWARD
!mppIndoor9_BRK_FW.number := 9
!insert (mpIndoor9_BRK_FW, mppIndoor9_BRK_FW) into MatchPlayerMatchPlayerPosition
```
## Generation 13 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 238 | 0.00% |
| Multiplicities Errors | 0 | 58 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 24 | 0.00% |

# Generation 14
```
!new Club('clubALP2')
!clubALP2.name := 'Alpine FC'
!clubALP2.homeGround := 'Glacier Field'
!clubALP2.chairman := 'Soren Bjorn'

!new Club('clubDST2')
!clubDST2.name := 'Desert Stars'
!clubDST2.homeGround := 'Oasis Stadium'
!clubDST2.chairman := 'Fatima Al-Hassan'

!new Club('clubBAY2')
!clubBAY2.name := 'Baychester United'
!clubBAY2.homeGround := 'Bayfront Ground'
!clubBAY2.chairman := 'Gavin Price'

!new Club('clubRND2')
!clubRND2.name := 'Rivendell Athletic'
!clubRND2.homeGround := 'Rivendell Park'
!clubRND2.chairman := 'Helena Varga'

!new Team('teamALP2')
!teamALP2.name := 'Alpine First Team'

!new Team('teamDST2')
!teamDST2.name := 'Desert Stars First Team'

!new Team('teamBAY2')
!teamBAY2.name := 'Baychester Seniors'

!new Team('teamRND2')
!teamRND2.name := 'Rivendell Seniors'

!insert (clubALP2, teamALP2) into ClubTeam
!insert (clubDST2, teamDST2) into ClubTeam
!insert (clubBAY2, teamBAY2) into ClubTeam
!insert (clubRND2, teamRND2) into ClubTeam

!new Competition('compAutumnCup2')
!compAutumnCup2.name := 'Autumn Cup'
!compAutumnCup2.type := 'Cup'

!new TrainingSession('tsALP2_1')
!tsALP2_1.date := '2026-09-01'
!tsALP2_1.location := 'Glacier Field - Training Pitch'
!tsALP2_1.purpose := 'Build-up play and switching sides'

!new TrainingSession('tsDST2_1')
!tsDST2_1.date := '2026-09-01'
!tsDST2_1.location := 'Oasis Stadium - Pitch 2'
!tsDST2_1.purpose := 'Counterattacks and final pass'

!new TrainingSession('tsBAY2_1')
!tsBAY2_1.date := '2026-09-02'
!tsBAY2_1.location := 'Bayfront Ground - Gym'
!tsBAY2_1.purpose := 'Strength and conditioning'

!new TrainingSession('tsBAY2_2')
!tsBAY2_2.date := '2026-09-04'
!tsBAY2_2.location := 'Bayfront Ground - Main Pitch'
!tsBAY2_2.purpose := 'Defending set pieces and transitions'

!new TrainingSession('tsRND2_1')
!tsRND2_1.date := '2026-09-03'
!tsRND2_1.location := 'Rivendell Park - Pitch A'
!tsRND2_1.purpose := 'Press resistance and midfield support'

!insert (teamALP2, tsALP2_1) into TeamTraining
!insert (teamDST2, tsDST2_1) into TeamTraining
!insert (teamBAY2, tsBAY2_1) into TeamTraining
!insert (teamBAY2, tsBAY2_2) into TeamTraining
!insert (teamRND2, tsRND2_1) into TeamTraining

!new TrainingNotes('tnALP2_1a')
!tnALP2_1a.note := 'Back line found midfield quickly; fullbacks need wider starting positions.'
!tnALP2_1a.date := '2026-09-01'
!insert (tsALP2_1, tnALP2_1a) into TrainingTrainingNotes

!new TrainingNotes('tnDST2_1a')
!tnDST2_1a.note := 'Counter patterns worked; improve timing of the final run behind the line.'
!tnDST2_1a.date := '2026-09-01'
!insert (tsDST2_1, tnDST2_1a) into TrainingTrainingNotes

!new TrainingNotes('tnBAY2_1a')
!tnBAY2_1a.note := 'Good effort in gym; monitor calf tightness during next field session.'
!tnBAY2_1a.date := '2026-09-02'
!insert (tsBAY2_1, tnBAY2_1a) into TrainingTrainingNotes

!new TrainingNotes('tnBAY2_2a')
!tnBAY2_2a.note := 'Set-piece roles clearer; still slow to react to second balls.'
!tnBAY2_2a.date := '2026-09-04'
!insert (tsBAY2_2, tnBAY2_2a) into TrainingTrainingNotes

!new TrainingNotes('tnBAY2_2b')
!tnBAY2_2b.note := 'Transition defending improved after compactness cue; avoid chasing the ball.'
!tnBAY2_2b.date := '2026-09-04'
!insert (tsBAY2_2, tnBAY2_2b) into TrainingTrainingNotes

!new TrainingNotes('tnRND2_1a')
!tnRND2_1a.note := 'Midfield support angles good; reduce touches when pressed from behind.'
!tnRND2_1a.date := '2026-09-03'
!insert (tsRND2_1, tnRND2_1a) into TrainingTrainingNotes

!new Player('pALP2_GK')
!pALP2_GK.name := 'Jonas Weber'
!pALP2_GK.age := 31
!pALP2_GK.bestFoot := #RIGHT
!pALP2_GK.phoneNumber := '+44 7700 551001'

!new Player('pALP2_MID')
!pALP2_MID.name := 'Luca Steiner'
!pALP2_MID.age := 25
!pALP2_MID.bestFoot := #BOTH
!pALP2_MID.phoneNumber := '+44 7700 551002'

!new Player('pALP2_FW')
!pALP2_FW.name := 'Marek Dvorak'
!pALP2_FW.age := 23
!pALP2_FW.bestFoot := #LEFT
!pALP2_FW.phoneNumber := '+44 7700 551003'

!new Player('pDST2_GK')
!pDST2_GK.name := 'Karim Mansour'
!pDST2_GK.age := 29
!pDST2_GK.bestFoot := #LEFT
!pDST2_GK.phoneNumber := '+44 7700 552001'

!new Player('pDST2_DEF')
!pDST2_DEF.name := 'Nabil Farouk'
!pDST2_DEF.age := 27
!pDST2_DEF.bestFoot := #RIGHT
!pDST2_DEF.phoneNumber := '+44 7700 552002'

!new Player('pDST2_FW')
!pDST2_FW.name := 'Omar Haddad'
!pDST2_FW.age := 24
!pDST2_FW.bestFoot := #RIGHT
!pDST2_FW.phoneNumber := '+44 7700 552003'

!new Player('pBAY2_GK')
!pBAY2_GK.name := 'Ethan Cole'
!pBAY2_GK.age := 33
!pBAY2_GK.bestFoot := #BOTH
!pBAY2_GK.phoneNumber := '+44 7700 553001'

!new Player('pBAY2_DEF')
!pBAY2_DEF.name := 'Marco Silva'
!pBAY2_DEF.age := 26
!pBAY2_DEF.bestFoot := #RIGHT
!pBAY2_DEF.phoneNumber := '+44 7700 553002'

!new Player('pBAY2_FW')
!pBAY2_FW.name := 'Kian Murphy'
!pBAY2_FW.age := 22
!pBAY2_FW.bestFoot := #LEFT
!pBAY2_FW.phoneNumber := '+44 7700 553003'

!new Player('pRND2_MID')
!pRND2_MID.name := 'Dario Conti'
!pRND2_MID.age := 28
!pRND2_MID.bestFoot := #RIGHT
!pRND2_MID.phoneNumber := '+44 7700 554001'

!new Player('pRND2_DEF')
!pRND2_DEF.name := 'Kamil Novak'
!pRND2_DEF.age := 24
!pRND2_DEF.bestFoot := #BOTH
!pRND2_DEF.phoneNumber := '+44 7700 554002'

!insert (teamALP2, pALP2_GK) into TeamPlayer
!insert (teamALP2, pALP2_MID) into TeamPlayer
!insert (teamALP2, pALP2_FW) into TeamPlayer

!insert (teamDST2, pDST2_GK) into TeamPlayer
!insert (teamDST2, pDST2_DEF) into TeamPlayer
!insert (teamDST2, pDST2_FW) into TeamPlayer

!insert (teamBAY2, pBAY2_GK) into TeamPlayer
!insert (teamBAY2, pBAY2_DEF) into TeamPlayer
!insert (teamBAY2, pBAY2_FW) into TeamPlayer

!insert (teamRND2, pRND2_MID) into TeamPlayer
!insert (teamRND2, pRND2_DEF) into TeamPlayer

!new Position('posALP2_GK_1')
!posALP2_GK_1.positionName := #GOALKEEPER
!insert (pALP2_GK, posALP2_GK_1) into PlayerPositions

!new Position('posALP2_MID_1')
!posALP2_MID_1.positionName := #MIDFIELDER
!insert (pALP2_MID, posALP2_MID_1) into PlayerPositions

!new Position('posALP2_MID_2')
!posALP2_MID_2.positionName := #DEFENDER
!insert (pALP2_MID, posALP2_MID_2) into PlayerPositions

!new Position('posALP2_FW_1')
!posALP2_FW_1.positionName := #FORWARD
!insert (pALP2_FW, posALP2_FW_1) into PlayerPositions

!new Position('posDST2_GK_1')
!posDST2_GK_1.positionName := #GOALKEEPER
!insert (pDST2_GK, posDST2_GK_1) into PlayerPositions

!new Position('posDST2_DEF_1')
!posDST2_DEF_1.positionName := #DEFENDER
!insert (pDST2_DEF, posDST2_DEF_1) into PlayerPositions

!new Position('posDST2_DEF_2')
!posDST2_DEF_2.positionName := #MIDFIELDER
!insert (pDST2_DEF, posDST2_DEF_2) into PlayerPositions

!new Position('posDST2_FW_1')
!posDST2_FW_1.positionName := #FORWARD
!insert (pDST2_FW, posDST2_FW_1) into PlayerPositions

!new Position('posBAY2_GK_1')
!posBAY2_GK_1.positionName := #GOALKEEPER
!insert (pBAY2_GK, posBAY2_GK_1) into PlayerPositions

!new Position('posBAY2_DEF_1')
!posBAY2_DEF_1.positionName := #DEFENDER
!insert (pBAY2_DEF, posBAY2_DEF_1) into PlayerPositions

!new Position('posBAY2_FW_1')
!posBAY2_FW_1.positionName := #FORWARD
!insert (pBAY2_FW, posBAY2_FW_1) into PlayerPositions

!new Position('posBAY2_FW_2')
!posBAY2_FW_2.positionName := #MIDFIELDER
!insert (pBAY2_FW, posBAY2_FW_2) into PlayerPositions

!new Position('posRND2_MID_1')
!posRND2_MID_1.positionName := #MIDFIELDER
!insert (pRND2_MID, posRND2_MID_1) into PlayerPositions

!new Position('posRND2_DEF_1')
!posRND2_DEF_1.positionName := #DEFENDER
!insert (pRND2_DEF, posRND2_DEF_1) into PlayerPositions

!new Position('posRND2_DEF_2')
!posRND2_DEF_2.positionName := #MIDFIELDER
!insert (pRND2_DEF, posRND2_DEF_2) into PlayerPositions

!new TrainingObjective('objALP2_GK_1')
!objALP2_GK_1.areaToImprove := 'Starting position on through balls'
!objALP2_GK_1.startDate := '2026-09-01'
!objALP2_GK_1.endDate := '2026-10-01'
!objALP2_GK_1.success := false
!insert (objALP2_GK_1, pALP2_GK) into TrainingObjectivePlayer

!new TrainingObjective('objALP2_MID_1')
!objALP2_MID_1.areaToImprove := 'One-touch play under pressure'
!objALP2_MID_1.startDate := '2026-09-01'
!objALP2_MID_1.endDate := '2026-10-01'
!objALP2_MID_1.success := true
!insert (objALP2_MID_1, pALP2_MID) into TrainingObjectivePlayer

!new TrainingObjective('objALP2_FW_1')
!objALP2_FW_1.areaToImprove := 'Finishing first time from cut-backs'
!objALP2_FW_1.startDate := '2026-09-01'
!objALP2_FW_1.endDate := '2026-10-01'
!objALP2_FW_1.success := false
!insert (objALP2_FW_1, pALP2_FW) into TrainingObjectivePlayer

!new TrainingObjective('objDST2_GK_1')
!objDST2_GK_1.areaToImprove := 'Distribution speed after saves'
!objDST2_GK_1.startDate := '2026-09-01'
!objDST2_GK_1.endDate := '2026-10-01'
!objDST2_GK_1.success := true
!insert (objDST2_GK_1, pDST2_GK) into TrainingObjectivePlayer

!new TrainingObjective('objDST2_DEF_1')
!objDST2_DEF_1.areaToImprove := 'Back-post marking on crosses'
!objDST2_DEF_1.startDate := '2026-09-01'
!objDST2_DEF_1.endDate := '2026-10-01'
!objDST2_DEF_1.success := false
!insert (objDST2_DEF_1, pDST2_DEF) into TrainingObjectivePlayer

!new TrainingObjective('objDST2_FW_1')
!objDST2_FW_1.areaToImprove := 'Timing runs to stay onside'
!objDST2_FW_1.startDate := '2026-09-01'
!objDST2_FW_1.endDate := '2026-10-01'
!objDST2_FW_1.success := false
!insert (objDST2_FW_1, pDST2_FW) into TrainingObjectivePlayer

!new TrainingObjective('objBAY2_GK_1')
!objBAY2_GK_1.areaToImprove := 'Handling shots through traffic'
!objBAY2_GK_1.startDate := '2026-09-01'
!objBAY2_GK_1.endDate := '2026-10-01'
!objBAY2_GK_1.success := true
!insert (objBAY2_GK_1, pBAY2_GK) into TrainingObjectivePlayer

!new TrainingObjective('objBAY2_DEF_1')
!objBAY2_DEF_1.areaToImprove := 'Clearing second balls after corners'
!objBAY2_DEF_1.startDate := '2026-09-01'
!objBAY2_DEF_1.endDate := '2026-10-01'
!objBAY2_DEF_1.success := false
!insert (objBAY2_DEF_1, pBAY2_DEF) into TrainingObjectivePlayer

!new TrainingObjective('objBAY2_FW_1')
!objBAY2_FW_1.areaToImprove := 'Pressing from the front and recovery runs'
!objBAY2_FW_1.startDate := '2026-09-01'
!objBAY2_FW_1.endDate := '2026-10-01'
!objBAY2_FW_1.success := true
!insert (objBAY2_FW_1, pBAY2_FW) into TrainingObjectivePlayer

!new TrainingObjective('objRND2_MID_1')
!objRND2_MID_1.areaToImprove := 'Playing forward earlier after regain'
!objRND2_MID_1.startDate := '2026-09-01'
!objRND2_MID_1.endDate := '2026-10-01'
!objRND2_MID_1.success := false
!insert (objRND2_MID_1, pRND2_MID) into TrainingObjectivePlayer

!new TrainingObjective('objRND2_DEF_1')
!objRND2_DEF_1.areaToImprove := '1v1 defending body position'
!objRND2_DEF_1.startDate := '2026-09-01'
!objRND2_DEF_1.endDate := '2026-10-01'
!objRND2_DEF_1.success := true
!insert (objRND2_DEF_1, pRND2_DEF) into TrainingObjectivePlayer

!new PlayerNotes('pnALP2_1')
!pnALP2_1.note := 'Excellent organiser; keeps defenders calm during pressure phases.'
!pnALP2_1.date := '2026-09-02'
!insert (pALP2_GK, pnALP2_1) into PlayerPlayerNotes

!new PlayerNotes('pnBAY2_1')
!pnBAY2_1.note := 'Strong in duels; must improve passing choice when pressed.'
!pnBAY2_1.date := '2026-09-05'
!insert (pBAY2_DEF, pnBAY2_1) into PlayerPlayerNotes

!new TrainingFailedToAttend('tfaDST2_1')
!tfaDST2_1.reason := 'Family commitment'
!insert (tsDST2_1, tfaDST2_1) into TrainingFailded
!insert (tfaDST2_1, pDST2_DEF) into FailedPlayer

!new TrainingFailedToAttend('tfaBAY2_1')
!tfaBAY2_1.reason := 'Minor ankle knock'
!insert (tsBAY2_2, tfaBAY2_1) into TrainingFailded
!insert (tfaBAY2_1, pBAY2_FW) into FailedPlayer

!new Match('matchAC2_1')
!matchAC2_1.date := '2026-09-10'
!matchAC2_1.homeAway := true

!new Match('matchAC2_2')
!matchAC2_2.date := '2026-09-11'
!matchAC2_2.homeAway := false

!insert (compAutumnCup2, matchAC2_1) into CompetitionMatch
!insert (compAutumnCup2, matchAC2_2) into CompetitionMatch

!insert (teamALP2, matchAC2_1) into LocalMatch
!insert (teamDST2, matchAC2_1) into VisitorMatch

!insert (teamBAY2, matchAC2_2) into LocalMatch
!insert (teamRND2, matchAC2_2) into VisitorMatch

!new MatchReport('mrAC2_1')
!mrAC2_1.duration := 90
!mrAC2_1.scoreVisitor := 2
!mrAC2_1.scoreLocal := 1
!insert (matchAC2_1, mrAC2_1) into MatchMatchReport

!new MatchReport('mrAC2_2')
!mrAC2_2.duration := 90
!mrAC2_2.scoreVisitor := 0
!mrAC2_2.scoreLocal := 0
!insert (matchAC2_2, mrAC2_2) into MatchMatchReport

!new MatchEvent('evAC2_1_goal1')
!evAC2_1_goal1.eventType := #GOAL
!evAC2_1_goal1.time := 18
!insert (matchAC2_1, evAC2_1_goal1) into MatchMatchEvent

!new MatchEvent('evAC2_1_goal2')
!evAC2_1_goal2.eventType := #GOAL
!evAC2_1_goal2.time := 54
!insert (matchAC2_1, evAC2_1_goal2) into MatchMatchEvent

!new MatchEvent('evAC2_1_goal3')
!evAC2_1_goal3.eventType := #GOAL
!evAC2_1_goal3.time := 79
!insert (matchAC2_1, evAC2_1_goal3) into MatchMatchEvent

!new MatchEvent('evAC2_1_foul1')
!evAC2_1_foul1.eventType := #FOUL
!evAC2_1_foul1.time := 33
!insert (matchAC2_1, evAC2_1_foul1) into MatchMatchEvent

!new MatchEvent('evAC2_1_corner1')
!evAC2_1_corner1.eventType := #CORNER
!evAC2_1_corner1.time := 62
!insert (matchAC2_1, evAC2_1_corner1) into MatchMatchEvent

!new MatchEvent('evAC2_2_off1')
!evAC2_2_off1.eventType := #OFFSIDE
!evAC2_2_off1.time := 27
!insert (matchAC2_2, evAC2_2_off1) into MatchMatchEvent

!new MatchEvent('evAC2_2_foul1')
!evAC2_2_foul1.eventType := #FOUL
!evAC2_2_foul1.time := 44
!insert (matchAC2_2, evAC2_2_foul1) into MatchMatchEvent

!new MatchEvent('evAC2_2_corner1')
!evAC2_2_corner1.eventType := #CORNER
!evAC2_2_corner1.time := 73
!insert (matchAC2_2, evAC2_2_corner1) into MatchMatchEvent

!new MatchEvent('evAC2_2_pen1')
!evAC2_2_pen1.eventType := #PENALTY
!evAC2_2_pen1.time := 88
!insert (matchAC2_2, evAC2_2_pen1) into MatchMatchEvent

!new MatchNote('mnAC2_1a')
!mnAC2_1a.note := 'Visitors were clinical on transitions; home side created chances but conceded twice late.'
!mnAC2_1a.date := '2026-09-10'
!insert (matchAC2_1, mnAC2_1a) into MatchMatchNote

!new MatchNote('mnAC2_2a')
!mnAC2_2a.note := 'Goalless match; missed penalty kept it level and both defences held firm.'
!mnAC2_2a.date := '2026-09-11'
!insert (matchAC2_2, mnAC2_2a) into MatchMatchNote

!new MatchPlayer('mpAC2_1_ALP_GK')
!mpAC2_1_ALP_GK.booked := false
!mpAC2_1_ALP_GK.goals := 0
!mpAC2_1_ALP_GK.rating := 7

!new MatchPlayer('mpAC2_1_ALP_MID')
!mpAC2_1_ALP_MID.booked := true
!mpAC2_1_ALP_MID.goals := 0
!mpAC2_1_ALP_MID.rating := 6

!new MatchPlayer('mpAC2_1_ALP_FW')
!mpAC2_1_ALP_FW.booked := false
!mpAC2_1_ALP_FW.goals := 1
!mpAC2_1_ALP_FW.rating := 7

!new MatchPlayer('mpAC2_1_DST_GK')
!mpAC2_1_DST_GK.booked := false
!mpAC2_1_DST_GK.goals := 0
!mpAC2_1_DST_GK.rating := 7

!new MatchPlayer('mpAC2_1_DST_DEF')
!mpAC2_1_DST_DEF.booked := true
!mpAC2_1_DST_DEF.goals := 0
!mpAC2_1_DST_DEF.rating := 6

!new MatchPlayer('mpAC2_1_DST_FW')
!mpAC2_1_DST_FW.booked := false
!mpAC2_1_DST_FW.goals := 2
!mpAC2_1_DST_FW.rating := 8

!insert (matchAC2_1, mpAC2_1_ALP_GK) into MatchMatchPlayer
!insert (matchAC2_1, mpAC2_1_ALP_MID) into MatchMatchPlayer
!insert (matchAC2_1, mpAC2_1_ALP_FW) into MatchMatchPlayer
!insert (matchAC2_1, mpAC2_1_DST_GK) into MatchMatchPlayer
!insert (matchAC2_1, mpAC2_1_DST_DEF) into MatchMatchPlayer
!insert (matchAC2_1, mpAC2_1_DST_FW) into MatchMatchPlayer

!insert (pALP2_GK, mpAC2_1_ALP_GK) into PlayerMatch
!insert (pALP2_MID, mpAC2_1_ALP_MID) into PlayerMatch
!insert (pALP2_FW, mpAC2_1_ALP_FW) into PlayerMatch
!insert (pDST2_GK, mpAC2_1_DST_GK) into PlayerMatch
!insert (pDST2_DEF, mpAC2_1_DST_DEF) into PlayerMatch
!insert (pDST2_FW, mpAC2_1_DST_FW) into PlayerMatch

!new MatchPlayerPosition('mppAC2_1_ALP_GK')
!mppAC2_1_ALP_GK.positionName := #GOALKEEPER
!mppAC2_1_ALP_GK.number := 1
!insert (mpAC2_1_ALP_GK, mppAC2_1_ALP_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppAC2_1_ALP_MID')
!mppAC2_1_ALP_MID.positionName := #MIDFIELDER
!mppAC2_1_ALP_MID.number := 6
!insert (mpAC2_1_ALP_MID, mppAC2_1_ALP_MID) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppAC2_1_ALP_FW')
!mppAC2_1_ALP_FW.positionName := #FORWARD
!mppAC2_1_ALP_FW.number := 9
!insert (mpAC2_1_ALP_FW, mppAC2_1_ALP_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppAC2_1_DST_GK')
!mppAC2_1_DST_GK.positionName := #GOALKEEPER
!mppAC2_1_DST_GK.number := 1
!insert (mpAC2_1_DST_GK, mppAC2_1_DST_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppAC2_1_DST_DEF')
!mppAC2_1_DST_DEF.positionName := #DEFENDER
!mppAC2_1_DST_DEF.number := 5
!insert (mpAC2_1_DST_DEF, mppAC2_1_DST_DEF) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppAC2_1_DST_FW')
!mppAC2_1_DST_FW.positionName := #FORWARD
!mppAC2_1_DST_FW.number := 11
!insert (mpAC2_1_DST_FW, mppAC2_1_DST_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('mpAC2_2_BAY_GK')
!mpAC2_2_BAY_GK.booked := false
!mpAC2_2_BAY_GK.goals := 0
!mpAC2_2_BAY_GK.rating := 7

!new MatchPlayer('mpAC2_2_BAY_FW')
!mpAC2_2_BAY_FW.booked := false
!mpAC2_2_BAY_FW.goals := 0
!mpAC2_2_BAY_FW.rating := 6

!new MatchPlayer('mpAC2_2_RND_MID')
!mpAC2_2_RND_MID.booked := true
!mpAC2_2_RND_MID.goals := 0
!mpAC2_2_RND_MID.rating := 7

!new MatchPlayer('mpAC2_2_RND_DEF')
!mpAC2_2_RND_DEF.booked := false
!mpAC2_2_RND_DEF.goals := 0
!mpAC2_2_RND_DEF.rating := 7

!insert (matchAC2_2, mpAC2_2_BAY_GK) into MatchMatchPlayer
!insert (matchAC2_2, mpAC2_2_BAY_FW) into MatchMatchPlayer
!insert (matchAC2_2, mpAC2_2_RND_MID) into MatchMatchPlayer
!insert (matchAC2_2, mpAC2_2_RND_DEF) into MatchMatchPlayer

!insert (pBAY2_GK, mpAC2_2_BAY_GK) into PlayerMatch
!insert (pBAY2_FW, mpAC2_2_BAY_FW) into PlayerMatch
!insert (pRND2_MID, mpAC2_2_RND_MID) into PlayerMatch
!insert (pRND2_DEF, mpAC2_2_RND_DEF) into PlayerMatch

!new MatchPlayerPosition('mppAC2_2_BAY_GK')
!mppAC2_2_BAY_GK.positionName := #GOALKEEPER
!mppAC2_2_BAY_GK.number := 1
!insert (mpAC2_2_BAY_GK, mppAC2_2_BAY_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppAC2_2_BAY_FW')
!mppAC2_2_BAY_FW.positionName := #FORWARD
!mppAC2_2_BAY_FW.number := 10
!insert (mpAC2_2_BAY_FW, mppAC2_2_BAY_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppAC2_2_RND_MID')
!mppAC2_2_RND_MID.positionName := #MIDFIELDER
!mppAC2_2_RND_MID.number := 8
!insert (mpAC2_2_RND_MID, mppAC2_2_RND_MID) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppAC2_2_RND_DEF')
!mppAC2_2_RND_DEF.positionName := #DEFENDER
!mppAC2_2_RND_DEF.number := 4
!insert (mpAC2_2_RND_DEF, mppAC2_2_RND_DEF) into MatchPlayerMatchPlayerPosition
```
## Generation 14 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 439 | 0.00% |
| Multiplicities Errors | 0 | 107 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 39 | 0.00% |

# Generation 15
```
!new Club('clubGLN')
!clubGLN.name := 'Glenford FC'
!clubGLN.homeGround := 'Glenford Riverside Ground'
!clubGLN.chairman := 'Patrick Osei'

!new Club('clubEFCX')
!clubEFCX.name := 'Elmchester FC'
!clubEFCX.homeGround := 'Elmchester Lane'
!clubEFCX.chairman := 'Ruth Hargreaves'

!new Club('clubPNT')
!clubPNT.name := 'Pinehurst Town'
!clubPNT.homeGround := 'Pinehurst Stadium'
!clubPNT.chairman := 'Leonard Muir'

!new Team('teamGLN1')
!teamGLN1.name := 'Glenford First Team'

!new Team('teamEFC1')
!teamEFC1.name := 'Elmchester First Team'

!new Team('teamPNT1')
!teamPNT1.name := 'Pinehurst First Team'

!insert (clubGLN, teamGLN1) into ClubTeam
!insert (clubEFCX, teamEFC1) into ClubTeam
!insert (clubPNT, teamPNT1) into ClubTeam

!new Competition('compShieldX')
!compShieldX.name := 'Community Shield Weekend'
!compShieldX.type := 'Cup'

!new TrainingSession('tsGLN_1')
!tsGLN_1.date := '2026-09-15'
!tsGLN_1.location := 'Glenford Riverside Ground - Pitch 1'
!tsGLN_1.purpose := 'Defensive transitions and compactness'

!new TrainingSession('tsEFC_1')
!tsEFC_1.date := '2026-09-15'
!tsEFC_1.location := 'Elmchester Lane - Main Pitch'
!tsEFC_1.purpose := 'Final third movement and finishing'

!new TrainingSession('tsPNT_1')
!tsPNT_1.date := '2026-09-16'
!tsPNT_1.location := 'Pinehurst Stadium - Training Pitch'
!tsPNT_1.purpose := 'Playing out under pressure and press resistance'

!insert (teamGLN1, tsGLN_1) into TeamTraining
!insert (teamEFC1, tsEFC_1) into TeamTraining
!insert (teamPNT1, tsPNT_1) into TeamTraining

!new TrainingNotes('tnGLN_1a')
!tnGLN_1a.note := 'Back line stayed compact; improve speed of first pass after regain.'
!tnGLN_1a.date := '2026-09-15'
!insert (tsGLN_1, tnGLN_1a) into TrainingTrainingNotes

!new TrainingNotes('tnEFC_1a')
!tnEFC_1a.note := 'Good chance creation from wide areas; composure in the box needs work.'
!tnEFC_1a.date := '2026-09-15'
!insert (tsEFC_1, tnEFC_1a) into TrainingTrainingNotes

!new TrainingNotes('tnPNT_1a')
!tnPNT_1a.note := 'Played through pressure well; reduce risky central passes when pressed aggressively.'
!tnPNT_1a.date := '2026-09-16'
!insert (tsPNT_1, tnPNT_1a) into TrainingTrainingNotes

!new Player('pGLN_GK')
!pGLN_GK.name := 'Henry Lawson'
!pGLN_GK.age := 32
!pGLN_GK.bestFoot := #RIGHT
!pGLN_GK.phoneNumber := '+44 7700 661001'

!new Player('pGLN_FW')
!pGLN_FW.name := 'Ayo Mensah'
!pGLN_FW.age := 23
!pGLN_FW.bestFoot := #BOTH
!pGLN_FW.phoneNumber := '+44 7700 661002'

!new Player('pEFC_DEF')
!pEFC_DEF.name := 'Callum Reid'
!pEFC_DEF.age := 28
!pEFC_DEF.bestFoot := #RIGHT
!pEFC_DEF.phoneNumber := '+44 7700 662001'

!new Player('pEFC_FW')
!pEFC_FW.name := 'Matteo Greco'
!pEFC_FW.age := 25
!pEFC_FW.bestFoot := #LEFT
!pEFC_FW.phoneNumber := '+44 7700 662002'

!new Player('pPNT_MID')
!pPNT_MID.name := 'Hiro Yamamoto'
!pPNT_MID.age := 24
!pPNT_MID.bestFoot := #RIGHT
!pPNT_MID.phoneNumber := '+44 7700 663001'

!new Player('pPNT_FW')
!pPNT_FW.name := 'Sandro Almeida'
!pPNT_FW.age := 26
!pPNT_FW.bestFoot := #BOTH
!pPNT_FW.phoneNumber := '+44 7700 663002'

!insert (teamGLN1, pGLN_GK) into TeamPlayer
!insert (teamGLN1, pGLN_FW) into TeamPlayer
!insert (teamEFC1, pEFC_DEF) into TeamPlayer
!insert (teamEFC1, pEFC_FW) into TeamPlayer
!insert (teamPNT1, pPNT_MID) into TeamPlayer
!insert (teamPNT1, pPNT_FW) into TeamPlayer

!new Position('posGLN_GK_1')
!posGLN_GK_1.positionName := #GOALKEEPER
!insert (pGLN_GK, posGLN_GK_1) into PlayerPositions

!new Position('posGLN_FW_1')
!posGLN_FW_1.positionName := #FORWARD
!insert (pGLN_FW, posGLN_FW_1) into PlayerPositions

!new Position('posGLN_FW_2')
!posGLN_FW_2.positionName := #MIDFIELDER
!insert (pGLN_FW, posGLN_FW_2) into PlayerPositions

!new Position('posEFC_DEF_1')
!posEFC_DEF_1.positionName := #DEFENDER
!insert (pEFC_DEF, posEFC_DEF_1) into PlayerPositions

!new Position('posEFC_FW_1')
!posEFC_FW_1.positionName := #FORWARD
!insert (pEFC_FW, posEFC_FW_1) into PlayerPositions

!new Position('posPNT_MID_1')
!posPNT_MID_1.positionName := #MIDFIELDER
!insert (pPNT_MID, posPNT_MID_1) into PlayerPositions

!new Position('posPNT_MID_2')
!posPNT_MID_2.positionName := #DEFENDER
!insert (pPNT_MID, posPNT_MID_2) into PlayerPositions

!new Position('posPNT_FW_1')
!posPNT_FW_1.positionName := #FORWARD
!insert (pPNT_FW, posPNT_FW_1) into PlayerPositions

!new Position('posPNT_FW_2')
!posPNT_FW_2.positionName := #MIDFIELDER
!insert (pPNT_FW, posPNT_FW_2) into PlayerPositions

!new TrainingObjective('objGLN_GK_1')
!objGLN_GK_1.areaToImprove := 'Communication on defensive set pieces'
!objGLN_GK_1.startDate := '2026-09-10'
!objGLN_GK_1.endDate := '2026-10-10'
!objGLN_GK_1.success := false
!insert (objGLN_GK_1, pGLN_GK) into TrainingObjectivePlayer

!new TrainingObjective('objGLN_FW_1')
!objGLN_FW_1.areaToImprove := 'First-time finishing from cut-backs'
!objGLN_FW_1.startDate := '2026-09-10'
!objGLN_FW_1.endDate := '2026-10-10'
!objGLN_FW_1.success := false
!insert (objGLN_FW_1, pGLN_FW) into TrainingObjectivePlayer

!new TrainingObjective('objGLN_FW_2')
!objGLN_FW_2.areaToImprove := 'Pressing angle to force play wide'
!objGLN_FW_2.startDate := '2026-09-10'
!objGLN_FW_2.endDate := '2026-10-10'
!objGLN_FW_2.success := true
!insert (objGLN_FW_2, pGLN_FW) into TrainingObjectivePlayer

!new TrainingObjective('objEFC_DEF_1')
!objEFC_DEF_1.areaToImprove := 'Back-post marking on crosses'
!objEFC_DEF_1.startDate := '2026-09-10'
!objEFC_DEF_1.endDate := '2026-10-10'
!objEFC_DEF_1.success := true
!insert (objEFC_DEF_1, pEFC_DEF) into TrainingObjectivePlayer

!new TrainingObjective('objEFC_FW_1')
!objEFC_FW_1.areaToImprove := 'Composure when finishing under pressure'
!objEFC_FW_1.startDate := '2026-09-10'
!objEFC_FW_1.endDate := '2026-10-10'
!objEFC_FW_1.success := false
!insert (objEFC_FW_1, pEFC_FW) into TrainingObjectivePlayer

!new TrainingObjective('objPNT_MID_1')
!objPNT_MID_1.areaToImprove := 'Receiving on the half-turn under pressure'
!objPNT_MID_1.startDate := '2026-09-10'
!objPNT_MID_1.endDate := '2026-10-10'
!objPNT_MID_1.success := false
!insert (objPNT_MID_1, pPNT_MID) into TrainingObjectivePlayer

!new TrainingObjective('objPNT_FW_1')
!objPNT_FW_1.areaToImprove := 'Hold-up play with back to goal'
!objPNT_FW_1.startDate := '2026-09-10'
!objPNT_FW_1.endDate := '2026-10-10'
!objPNT_FW_1.success := true
!insert (objPNT_FW_1, pPNT_FW) into TrainingObjectivePlayer

!new PlayerNotes('pnGLN_1')
!pnGLN_1.note := 'Works hard off the ball; can simplify decision-making when tired.'
!pnGLN_1.date := '2026-09-16'
!insert (pGLN_FW, pnGLN_1) into PlayerPlayerNotes

!new PlayerNotes('pnEFC_1')
!pnEFC_1.note := 'Very strong 1v1 defender; avoid unnecessary fouls when isolated.'
!pnEFC_1.date := '2026-09-16'
!insert (pEFC_DEF, pnEFC_1) into PlayerPlayerNotes

!new TrainingFailedToAttend('tfaGLN_1')
!tfaGLN_1.reason := 'Minor hip tightness'
!insert (tsGLN_1, tfaGLN_1) into TrainingFailded
!insert (tfaGLN_1, pGLN_FW) into FailedPlayer

!new TrainingFailedToAttend('tfaPNT_1')
!tfaPNT_1.reason := 'Late arrival (traffic)'
!insert (tsPNT_1, tfaPNT_1) into TrainingFailded
!insert (tfaPNT_1, pPNT_MID) into FailedPlayer

!new Match('mShieldX_1')
!mShieldX_1.date := '2026-09-20'
!mShieldX_1.homeAway := true

!new Match('mShieldX_2')
!mShieldX_2.date := '2026-09-27'
!mShieldX_2.homeAway := false

!insert (compShieldX, mShieldX_1) into CompetitionMatch
!insert (compShieldX, mShieldX_2) into CompetitionMatch

!insert (teamGLN1, mShieldX_1) into LocalMatch
!insert (teamEFC1, mShieldX_1) into VisitorMatch

!insert (teamPNT1, mShieldX_2) into LocalMatch
!insert (teamGLN1, mShieldX_2) into VisitorMatch

!new MatchReport('mrShieldX_1')
!mrShieldX_1.duration := 90
!mrShieldX_1.scoreVisitor := 1
!mrShieldX_1.scoreLocal := 0
!insert (mShieldX_1, mrShieldX_1) into MatchMatchReport

!new MatchReport('mrShieldX_2')
!mrShieldX_2.duration := 90
!mrShieldX_2.scoreVisitor := 2
!mrShieldX_2.scoreLocal := 2
!insert (mShieldX_2, mrShieldX_2) into MatchMatchReport

!new MatchEvent('evSX1_goal')
!evSX1_goal.eventType := #GOAL
!evSX1_goal.time := 55
!insert (mShieldX_1, evSX1_goal) into MatchMatchEvent

!new MatchEvent('evSX1_foul')
!evSX1_foul.eventType := #FOUL
!evSX1_foul.time := 18
!insert (mShieldX_1, evSX1_foul) into MatchMatchEvent

!new MatchEvent('evSX1_off')
!evSX1_off.eventType := #OFFSIDE
!evSX1_off.time := 33
!insert (mShieldX_1, evSX1_off) into MatchMatchEvent

!new MatchEvent('evSX1_cor')
!evSX1_cor.eventType := #CORNER
!evSX1_cor.time := 76
!insert (mShieldX_1, evSX1_cor) into MatchMatchEvent

!new MatchEvent('evSX2_goal1')
!evSX2_goal1.eventType := #GOAL
!evSX2_goal1.time := 9
!insert (mShieldX_2, evSX2_goal1) into MatchMatchEvent

!new MatchEvent('evSX2_goal2')
!evSX2_goal2.eventType := #GOAL
!evSX2_goal2.time := 44
!insert (mShieldX_2, evSX2_goal2) into MatchMatchEvent

!new MatchEvent('evSX2_goal3')
!evSX2_goal3.eventType := #GOAL
!evSX2_goal3.time := 61
!insert (mShieldX_2, evSX2_goal3) into MatchMatchEvent

!new MatchEvent('evSX2_goal4')
!evSX2_goal4.eventType := #GOAL
!evSX2_goal4.time := 85
!insert (mShieldX_2, evSX2_goal4) into MatchMatchEvent

!new MatchEvent('evSX2_foul')
!evSX2_foul.eventType := #FOUL
!evSX2_foul.time := 20
!insert (mShieldX_2, evSX2_foul) into MatchMatchEvent

!new MatchEvent('evSX2_cor')
!evSX2_cor.eventType := #CORNER
!evSX2_cor.time := 70
!insert (mShieldX_2, evSX2_cor) into MatchMatchEvent

!new MatchEvent('evSX2_off')
!evSX2_off.eventType := #OFFSIDE
!evSX2_off.time := 88
!insert (mShieldX_2, evSX2_off) into MatchMatchEvent

!new MatchNote('mnSX1_1')
!mnSX1_1.note := 'Elmchester scored on a quick break; Glenford controlled spells but lacked a final touch.'
!mnSX1_1.date := '2026-09-20'
!insert (mShieldX_1, mnSX1_1) into MatchMatchNote

!new MatchNote('mnSX2_1')
!mnSX2_1.note := 'Four goals in an open match; both teams vulnerable during transitions.'
!mnSX2_1.date := '2026-09-27'
!insert (mShieldX_2, mnSX2_1) into MatchMatchNote

!new MatchPlayer('mpSX1_GLN_GK')
!mpSX1_GLN_GK.booked := false
!mpSX1_GLN_GK.goals := 0
!mpSX1_GLN_GK.rating := 7

!new MatchPlayer('mpSX1_GLN_FW')
!mpSX1_GLN_FW.booked := true
!mpSX1_GLN_FW.goals := 0
!mpSX1_GLN_FW.rating := 6

!new MatchPlayer('mpSX1_EFC_DEF')
!mpSX1_EFC_DEF.booked := true
!mpSX1_EFC_DEF.goals := 0
!mpSX1_EFC_DEF.rating := 7

!new MatchPlayer('mpSX1_EFC_FW')
!mpSX1_EFC_FW.booked := false
!mpSX1_EFC_FW.goals := 1
!mpSX1_EFC_FW.rating := 8

!insert (mShieldX_1, mpSX1_GLN_GK) into MatchMatchPlayer
!insert (mShieldX_1, mpSX1_GLN_FW) into MatchMatchPlayer
!insert (mShieldX_1, mpSX1_EFC_DEF) into MatchMatchPlayer
!insert (mShieldX_1, mpSX1_EFC_FW) into MatchMatchPlayer

!insert (pGLN_GK, mpSX1_GLN_GK) into PlayerMatch
!insert (pGLN_FW, mpSX1_GLN_FW) into PlayerMatch
!insert (pEFC_DEF, mpSX1_EFC_DEF) into PlayerMatch
!insert (pEFC_FW, mpSX1_EFC_FW) into PlayerMatch

!new MatchPlayerPosition('mppSX1_GLN_GK')
!mppSX1_GLN_GK.positionName := #GOALKEEPER
!mppSX1_GLN_GK.number := 1
!insert (mpSX1_GLN_GK, mppSX1_GLN_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppSX1_GLN_FW')
!mppSX1_GLN_FW.positionName := #FORWARD
!mppSX1_GLN_FW.number := 9
!insert (mpSX1_GLN_FW, mppSX1_GLN_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppSX1_EFC_DEF')
!mppSX1_EFC_DEF.positionName := #DEFENDER
!mppSX1_EFC_DEF.number := 5
!insert (mpSX1_EFC_DEF, mppSX1_EFC_DEF) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppSX1_EFC_FW')
!mppSX1_EFC_FW.positionName := #FORWARD
!mppSX1_EFC_FW.number := 11
!insert (mpSX1_EFC_FW, mppSX1_EFC_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('mpSX2_PNT_MID')
!mpSX2_PNT_MID.booked := false
!mpSX2_PNT_MID.goals := 0
!mpSX2_PNT_MID.rating := 7

!new MatchPlayer('mpSX2_PNT_FW')
!mpSX2_PNT_FW.booked := false
!mpSX2_PNT_FW.goals := 2
!mpSX2_PNT_FW.rating := 8

!new MatchPlayer('mpSX2_GLN_GK')
!mpSX2_GLN_GK.booked := false
!mpSX2_GLN_GK.goals := 0
!mpSX2_GLN_GK.rating := 6

!new MatchPlayer('mpSX2_GLN_FW')
!mpSX2_GLN_FW.booked := true
!mpSX2_GLN_FW.goals := 2
!mpSX2_GLN_FW.rating := 8

!insert (mShieldX_2, mpSX2_PNT_MID) into MatchMatchPlayer
!insert (mShieldX_2, mpSX2_PNT_FW) into MatchMatchPlayer
!insert (mShieldX_2, mpSX2_GLN_GK) into MatchMatchPlayer
!insert (mShieldX_2, mpSX2_GLN_FW) into MatchMatchPlayer

!insert (pPNT_MID, mpSX2_PNT_MID) into PlayerMatch
!insert (pPNT_FW, mpSX2_PNT_FW) into PlayerMatch
!insert (pGLN_GK, mpSX2_GLN_GK) into PlayerMatch
!insert (pGLN_FW, mpSX2_GLN_FW) into PlayerMatch

!new MatchPlayerPosition('mppSX2_PNT_MID')
!mppSX2_PNT_MID.positionName := #MIDFIELDER
!mppSX2_PNT_MID.number := 8
!insert (mpSX2_PNT_MID, mppSX2_PNT_MID) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppSX2_PNT_FW')
!mppSX2_PNT_FW.positionName := #FORWARD
!mppSX2_PNT_FW.number := 10
!insert (mpSX2_PNT_FW, mppSX2_PNT_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppSX2_GLN_GK')
!mppSX2_GLN_GK.positionName := #GOALKEEPER
!mppSX2_GLN_GK.number := 1
!insert (mpSX2_GLN_GK, mppSX2_GLN_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('mppSX2_GLN_FW')
!mppSX2_GLN_FW.positionName := #FORWARD
!mppSX2_GLN_FW.number := 9
!insert (mpSX2_GLN_FW, mppSX2_GLN_FW) into MatchPlayerMatchPlayerPosition
```
## Generation 15 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 326 | 0.00% |
| Multiplicities Errors | 0 | 82 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 26 | 0.00% |

# Generation 16
```
!new Club('i7_clubMP')
!i7_clubMP.name := 'Mapleport FC'
!i7_clubMP.homeGround := 'Mapleport Stadium'
!i7_clubMP.chairman := 'Clare Bennett'

!new Club('i7_clubSV')
!i7_clubSV.name := 'Summerville United'
!i7_clubSV.homeGround := 'Summerville Park'
!i7_clubSV.chairman := 'Jonah Whitaker'

!new Club('i7_clubNWK')
!i7_clubNWK.name := 'Newkirk Athletic'
!i7_clubNWK.homeGround := 'Newkirk Oval'
!i7_clubNWK.chairman := 'Imran Sadiq'

!new Club('i7_clubGLR')
!i7_clubGLR.name := 'Glenridge Rovers'
!i7_clubGLR.homeGround := 'Glenridge Grounds'
!i7_clubGLR.chairman := 'Sofia Marquez'

!new Team('i7_teamMP')
!i7_teamMP.name := 'Mapleport First XI'

!new Team('i7_teamSV')
!i7_teamSV.name := 'Summerville First XI'

!new Team('i7_teamNWK')
!i7_teamNWK.name := 'Newkirk First XI'

!new Team('i7_teamGLR')
!i7_teamGLR.name := 'Glenridge First XI'

!insert (i7_clubMP, i7_teamMP) into ClubTeam
!insert (i7_clubSV, i7_teamSV) into ClubTeam
!insert (i7_clubNWK, i7_teamNWK) into ClubTeam
!insert (i7_clubGLR, i7_teamGLR) into ClubTeam

!new Competition('i7_compLeague')
!i7_compLeague.name := 'Premier Division'
!i7_compLeague.type := 'League'

!new Competition('i7_compCup')
!i7_compCup.name := 'Founders Cup'
!i7_compCup.type := 'Knockout'

!new TrainingSession('i7_tsMP_1')
!i7_tsMP_1.date := '2026-10-03'
!i7_tsMP_1.location := 'Mapleport Stadium - Pitch 2'
!i7_tsMP_1.purpose := 'Fast build-up and third-man combinations'

!new TrainingSession('i7_tsMP_2')
!i7_tsMP_2.date := '2026-10-05'
!i7_tsMP_2.location := 'Mapleport Stadium - Gym'
!i7_tsMP_2.purpose := 'Strength maintenance and hamstring prevention'

!new TrainingSession('i7_tsSV_1')
!i7_tsSV_1.date := '2026-10-03'
!i7_tsSV_1.location := 'Summerville Park - Main Pitch'
!i7_tsSV_1.purpose := 'Mid-block organisation and quick counters'

!new TrainingSession('i7_tsNWK_1')
!i7_tsNWK_1.date := '2026-10-04'
!i7_tsNWK_1.location := 'Newkirk Oval - Training Pitch'
!i7_tsNWK_1.purpose := 'Defending set pieces and second balls'

!new TrainingSession('i7_tsGLR_1')
!i7_tsGLR_1.date := '2026-10-04'
!i7_tsGLR_1.location := 'Glenridge Grounds - Pitch A'
!i7_tsGLR_1.purpose := 'Press resistance and playing through midfield'

!insert (i7_teamMP, i7_tsMP_1) into TeamTraining
!insert (i7_teamMP, i7_tsMP_2) into TeamTraining
!insert (i7_teamSV, i7_tsSV_1) into TeamTraining
!insert (i7_teamNWK, i7_tsNWK_1) into TeamTraining
!insert (i7_teamGLR, i7_tsGLR_1) into TeamTraining

!new TrainingNotes('i7_tnMP_1a')
!i7_tnMP_1a.note := 'Third-man runs created overloads; wingers must stay wider to stretch the block.'
!i7_tnMP_1a.date := '2026-10-03'
!insert (i7_tsMP_1, i7_tnMP_1a) into TrainingTrainingNotes

!new TrainingNotes('i7_tnMP_2a')
!i7_tnMP_2a.note := 'Gym session completed; two players on reduced load due to tight calves.'
!i7_tnMP_2a.date := '2026-10-05'
!insert (i7_tsMP_2, i7_tnMP_2a) into TrainingTrainingNotes

!new TrainingNotes('i7_tnSV_1a')
!i7_tnSV_1a.note := 'Mid-block compact; first pass after regain needs to be quicker and more accurate.'
!i7_tnSV_1a.date := '2026-10-03'
!insert (i7_tsSV_1, i7_tnSV_1a) into TrainingTrainingNotes

!new TrainingNotes('i7_tnNWK_1a')
!i7_tnNWK_1a.note := 'Set-piece roles clearer; improve reaction to the second phase after clearances.'
!i7_tnNWK_1a.date := '2026-10-04'
!insert (i7_tsNWK_1, i7_tnNWK_1a) into TrainingTrainingNotes

!new TrainingNotes('i7_tnGLR_1a')
!i7_tnGLR_1a.note := 'Played through pressure well; reduce risky central passes when underloaded.'
!i7_tnGLR_1a.date := '2026-10-04'
!insert (i7_tsGLR_1, i7_tnGLR_1a) into TrainingTrainingNotes

!new TrainingNotes('i7_tnGLR_1b')
!i7_tnGLR_1b.note := 'Midfield rotations improved; need better timing of forward runs to avoid offsides.'
!i7_tnGLR_1b.date := '2026-10-04'
!insert (i7_tsGLR_1, i7_tnGLR_1b) into TrainingTrainingNotes

!new Player('i7_pMP_GK')
!i7_pMP_GK.name := 'Stuart Keel'
!i7_pMP_GK.age := 34
!i7_pMP_GK.bestFoot := #RIGHT
!i7_pMP_GK.phoneNumber := '+44 7700 771001'

!new Player('i7_pMP_MID')
!i7_pMP_MID.name := 'Ryo Takeda'
!i7_pMP_MID.age := 25
!i7_pMP_MID.bestFoot := #BOTH
!i7_pMP_MID.phoneNumber := '+44 7700 771002'

!new Player('i7_pMP_FW')
!i7_pMP_FW.name := 'Lewis Hart'
!i7_pMP_FW.age := 22
!i7_pMP_FW.bestFoot := #LEFT
!i7_pMP_FW.phoneNumber := '+44 7700 771003'

!new Player('i7_pSV_GK')
!i7_pSV_GK.name := 'Marek Duda'
!i7_pSV_GK.age := 29
!i7_pSV_GK.bestFoot := #LEFT
!i7_pSV_GK.phoneNumber := '+44 7700 772001'

!new Player('i7_pSV_DEF')
!i7_pSV_DEF.name := 'Anton Ribeiro'
!i7_pSV_DEF.age := 27
!i7_pSV_DEF.bestFoot := #RIGHT
!i7_pSV_DEF.phoneNumber := '+44 7700 772002'

!new Player('i7_pSV_FW')
!i7_pSV_FW.name := 'Kofi Adebayo'
!i7_pSV_FW.age := 24
!i7_pSV_FW.bestFoot := #BOTH
!i7_pSV_FW.phoneNumber := '+44 7700 772003'

!new Player('i7_pNWK_GK')
!i7_pNWK_GK.name := 'Dawid Zielka'
!i7_pNWK_GK.age := 31
!i7_pNWK_GK.bestFoot := #BOTH
!i7_pNWK_GK.phoneNumber := '+44 7700 773001'

!new Player('i7_pNWK_MID')
!i7_pNWK_MID.name := 'Hassan Elmi'
!i7_pNWK_MID.age := 23
!i7_pNWK_MID.bestFoot := #RIGHT
!i7_pNWK_MID.phoneNumber := '+44 7700 773002'

!new Player('i7_pGLR_DEF')
!i7_pGLR_DEF.name := 'Enzo Bianchi'
!i7_pGLR_DEF.age := 26
!i7_pGLR_DEF.bestFoot := #RIGHT
!i7_pGLR_DEF.phoneNumber := '+44 7700 774001'

!new Player('i7_pGLR_FW')
!i7_pGLR_FW.name := 'Callan Sykes'
!i7_pGLR_FW.age := 21
!i7_pGLR_FW.bestFoot := #LEFT
!i7_pGLR_FW.phoneNumber := '+44 7700 774002'

!insert (i7_teamMP, i7_pMP_GK) into TeamPlayer
!insert (i7_teamMP, i7_pMP_MID) into TeamPlayer
!insert (i7_teamMP, i7_pMP_FW) into TeamPlayer

!insert (i7_teamSV, i7_pSV_GK) into TeamPlayer
!insert (i7_teamSV, i7_pSV_DEF) into TeamPlayer
!insert (i7_teamSV, i7_pSV_FW) into TeamPlayer

!insert (i7_teamNWK, i7_pNWK_GK) into TeamPlayer
!insert (i7_teamNWK, i7_pNWK_MID) into TeamPlayer

!insert (i7_teamGLR, i7_pGLR_DEF) into TeamPlayer
!insert (i7_teamGLR, i7_pGLR_FW) into TeamPlayer

!new Position('i7_posMP_GK')
!i7_posMP_GK.positionName := #GOALKEEPER
!insert (i7_pMP_GK, i7_posMP_GK) into PlayerPositions

!new Position('i7_posMP_MID')
!i7_posMP_MID.positionName := #MIDFIELDER
!insert (i7_pMP_MID, i7_posMP_MID) into PlayerPositions

!new Position('i7_posMP_MID_alt')
!i7_posMP_MID_alt.positionName := #DEFENDER
!insert (i7_pMP_MID, i7_posMP_MID_alt) into PlayerPositions

!new Position('i7_posMP_FW')
!i7_posMP_FW.positionName := #FORWARD
!insert (i7_pMP_FW, i7_posMP_FW) into PlayerPositions

!new Position('i7_posSV_GK')
!i7_posSV_GK.positionName := #GOALKEEPER
!insert (i7_pSV_GK, i7_posSV_GK) into PlayerPositions

!new Position('i7_posSV_DEF')
!i7_posSV_DEF.positionName := #DEFENDER
!insert (i7_pSV_DEF, i7_posSV_DEF) into PlayerPositions

!new Position('i7_posSV_DEF_alt')
!i7_posSV_DEF_alt.positionName := #MIDFIELDER
!insert (i7_pSV_DEF, i7_posSV_DEF_alt) into PlayerPositions

!new Position('i7_posSV_FW')
!i7_posSV_FW.positionName := #FORWARD
!insert (i7_pSV_FW, i7_posSV_FW) into PlayerPositions

!new Position('i7_posNWK_GK')
!i7_posNWK_GK.positionName := #GOALKEEPER
!insert (i7_pNWK_GK, i7_posNWK_GK) into PlayerPositions

!new Position('i7_posNWK_MID')
!i7_posNWK_MID.positionName := #MIDFIELDER
!insert (i7_pNWK_MID, i7_posNWK_MID) into PlayerPositions

!new Position('i7_posNWK_MID_alt')
!i7_posNWK_MID_alt.positionName := #FORWARD
!insert (i7_pNWK_MID, i7_posNWK_MID_alt) into PlayerPositions

!new Position('i7_posGLR_DEF')
!i7_posGLR_DEF.positionName := #DEFENDER
!insert (i7_pGLR_DEF, i7_posGLR_DEF) into PlayerPositions

!new Position('i7_posGLR_FW')
!i7_posGLR_FW.positionName := #FORWARD
!insert (i7_pGLR_FW, i7_posGLR_FW) into PlayerPositions

!new Position('i7_posGLR_FW_alt')
!i7_posGLR_FW_alt.positionName := #MIDFIELDER
!insert (i7_pGLR_FW, i7_posGLR_FW_alt) into PlayerPositions

!new TrainingObjective('i7_objMP_GK_1')
!i7_objMP_GK_1.areaToImprove := 'Claiming crosses under contact'
!i7_objMP_GK_1.startDate := '2026-10-01'
!i7_objMP_GK_1.endDate := '2026-11-01'
!i7_objMP_GK_1.success := false
!insert (i7_objMP_GK_1, i7_pMP_GK) into TrainingObjectivePlayer

!new TrainingObjective('i7_objMP_MID_1')
!i7_objMP_MID_1.areaToImprove := 'One-touch play to break pressure'
!i7_objMP_MID_1.startDate := '2026-10-01'
!i7_objMP_MID_1.endDate := '2026-11-01'
!i7_objMP_MID_1.success := true
!insert (i7_objMP_MID_1, i7_pMP_MID) into TrainingObjectivePlayer

!new TrainingObjective('i7_objMP_FW_1')
!i7_objMP_FW_1.areaToImprove := 'Finishing with right foot from central areas'
!i7_objMP_FW_1.startDate := '2026-10-01'
!i7_objMP_FW_1.endDate := '2026-11-01'
!i7_objMP_FW_1.success := false
!insert (i7_objMP_FW_1, i7_pMP_FW) into TrainingObjectivePlayer

!new TrainingObjective('i7_objSV_GK_1')
!i7_objSV_GK_1.areaToImprove := 'Distribution speed after saves'
!i7_objSV_GK_1.startDate := '2026-10-01'
!i7_objSV_GK_1.endDate := '2026-11-01'
!i7_objSV_GK_1.success := true
!insert (i7_objSV_GK_1, i7_pSV_GK) into TrainingObjectivePlayer

!new TrainingObjective('i7_objSV_DEF_1')
!i7_objSV_DEF_1.areaToImprove := 'Back-post marking on crosses'
!i7_objSV_DEF_1.startDate := '2026-10-01'
!i7_objSV_DEF_1.endDate := '2026-11-01'
!i7_objSV_DEF_1.success := false
!insert (i7_objSV_DEF_1, i7_pSV_DEF) into TrainingObjectivePlayer

!new TrainingObjective('i7_objSV_FW_1')
!i7_objSV_FW_1.areaToImprove := 'Timing curved runs to stay onside'
!i7_objSV_FW_1.startDate := '2026-10-01'
!i7_objSV_FW_1.endDate := '2026-11-01'
!i7_objSV_FW_1.success := false
!insert (i7_objSV_FW_1, i7_pSV_FW) into TrainingObjectivePlayer

!new TrainingObjective('i7_objNWK_GK_1')
!i7_objNWK_GK_1.areaToImprove := 'Communication during set-piece defending'
!i7_objNWK_GK_1.startDate := '2026-10-01'
!i7_objNWK_GK_1.endDate := '2026-11-01'
!i7_objNWK_GK_1.success := false
!insert (i7_objNWK_GK_1, i7_pNWK_GK) into TrainingObjectivePlayer

!new TrainingObjective('i7_objNWK_MID_1')
!i7_objNWK_MID_1.areaToImprove := 'Protecting the ball under pressure'
!i7_objNWK_MID_1.startDate := '2026-10-01'
!i7_objNWK_MID_1.endDate := '2026-11-01'
!i7_objNWK_MID_1.success := true
!insert (i7_objNWK_MID_1, i7_pNWK_MID) into TrainingObjectivePlayer

!new TrainingObjective('i7_objGLR_DEF_1')
!i7_objGLR_DEF_1.areaToImprove := 'Dealing with cut-backs in the box'
!i7_objGLR_DEF_1.startDate := '2026-10-01'
!i7_objGLR_DEF_1.endDate := '2026-11-01'
!i7_objGLR_DEF_1.success := true
!insert (i7_objGLR_DEF_1, i7_pGLR_DEF) into TrainingObjectivePlayer

!new TrainingObjective('i7_objGLR_FW_1')
!i7_objGLR_FW_1.areaToImprove := 'Composure in 1v1 finishing'
!i7_objGLR_FW_1.startDate := '2026-10-01'
!i7_objGLR_FW_1.endDate := '2026-11-01'
!i7_objGLR_FW_1.success := false
!insert (i7_objGLR_FW_1, i7_pGLR_FW) into TrainingObjectivePlayer

!new PlayerNotes('i7_pn1')
!i7_pn1.note := 'Excellent organiser; keeps defenders calm under sustained pressure.'
!i7_pn1.date := '2026-10-06'
!insert (i7_pMP_GK, i7_pn1) into PlayerPlayerNotes

!new PlayerNotes('i7_pn2')
!i7_pn2.note := 'Very energetic presser; needs to choose moments to conserve energy late in games.'
!i7_pn2.date := '2026-10-06'
!insert (i7_pSV_FW, i7_pn2) into PlayerPlayerNotes

!new TrainingFailedToAttend('i7_fail1')
!i7_fail1.reason := 'Minor ankle knock'
!insert (i7_tsMP_1, i7_fail1) into TrainingFailded
!insert (i7_fail1, i7_pMP_FW) into FailedPlayer

!new TrainingFailedToAttend('i7_fail2')
!i7_fail2.reason := 'Work shift overran'
!insert (i7_tsSV_1, i7_fail2) into TrainingFailded
!insert (i7_fail2, i7_pSV_DEF) into FailedPlayer

!new TrainingFailedToAttend('i7_fail3')
!i7_fail3.reason := 'Public transport disruption'
!insert (i7_tsGLR_1, i7_fail3) into TrainingFailded
!insert (i7_fail3, i7_pGLR_FW) into FailedPlayer

!new Match('i7_matchL1')
!i7_matchL1.date := '2026-10-10'
!i7_matchL1.homeAway := true

!new Match('i7_matchC1')
!i7_matchC1.date := '2026-10-11'
!i7_matchC1.homeAway := false

!insert (i7_compLeague, i7_matchL1) into CompetitionMatch
!insert (i7_compCup, i7_matchC1) into CompetitionMatch

!insert (i7_teamMP, i7_matchL1) into LocalMatch
!insert (i7_teamSV, i7_matchL1) into VisitorMatch

!insert (i7_teamNWK, i7_matchC1) into LocalMatch
!insert (i7_teamGLR, i7_matchC1) into VisitorMatch

!new MatchReport('i7_mrL1')
!i7_mrL1.duration := 90
!i7_mrL1.scoreVisitor := 3
!i7_mrL1.scoreLocal := 4
!insert (i7_matchL1, i7_mrL1) into MatchMatchReport

!new MatchReport('i7_mrC1')
!i7_mrC1.duration := 90
!i7_mrC1.scoreVisitor := 2
!i7_mrC1.scoreLocal := 0
!insert (i7_matchC1, i7_mrC1) into MatchMatchReport

!new MatchEvent('i7_evL1_g1')
!i7_evL1_g1.eventType := #GOAL
!i7_evL1_g1.time := 6
!insert (i7_matchL1, i7_evL1_g1) into MatchMatchEvent

!new MatchEvent('i7_evL1_g2')
!i7_evL1_g2.eventType := #GOAL
!i7_evL1_g2.time := 14
!insert (i7_matchL1, i7_evL1_g2) into MatchMatchEvent

!new MatchEvent('i7_evL1_g3')
!i7_evL1_g3.eventType := #GOAL
!i7_evL1_g3.time := 29
!insert (i7_matchL1, i7_evL1_g3) into MatchMatchEvent

!new MatchEvent('i7_evL1_g4')
!i7_evL1_g4.eventType := #GOAL
!i7_evL1_g4.time := 43
!insert (i7_matchL1, i7_evL1_g4) into MatchMatchEvent

!new MatchEvent('i7_evL1_g5')
!i7_evL1_g5.eventType := #GOAL
!i7_evL1_g5.time := 58
!insert (i7_matchL1, i7_evL1_g5) into MatchMatchEvent

!new MatchEvent('i7_evL1_g6')
!i7_evL1_g6.eventType := #GOAL
!i7_evL1_g6.time := 74
!insert (i7_matchL1, i7_evL1_g6) into MatchMatchEvent

!new MatchEvent('i7_evL1_g7')
!i7_evL1_g7.eventType := #GOAL
!i7_evL1_g7.time := 89
!insert (i7_matchL1, i7_evL1_g7) into MatchMatchEvent

!new MatchEvent('i7_evL1_f1')
!i7_evL1_f1.eventType := #FOUL
!i7_evL1_f1.time := 22
!insert (i7_matchL1, i7_evL1_f1) into MatchMatchEvent

!new MatchEvent('i7_evL1_o1')
!i7_evL1_o1.eventType := #OFFSIDE
!i7_evL1_o1.time := 51
!insert (i7_matchL1, i7_evL1_o1) into MatchMatchEvent

!new MatchEvent('i7_evL1_c1')
!i7_evL1_c1.eventType := #CORNER
!i7_evL1_c1.time := 63
!insert (i7_matchL1, i7_evL1_c1) into MatchMatchEvent

!new MatchEvent('i7_evL1_p1')
!i7_evL1_p1.eventType := #PENALTY
!i7_evL1_p1.time := 73
!insert (i7_matchL1, i7_evL1_p1) into MatchMatchEvent

!new MatchNote('i7_mnL1_1')
!i7_mnL1_1.note := 'Seven-goal match with big momentum swings; late winner came after sustained pressure.'
!i7_mnL1_1.date := '2026-10-10'
!insert (i7_matchL1, i7_mnL1_1) into MatchMatchNote

!new MatchEvent('i7_evC1_g1')
!i7_evC1_g1.eventType := #GOAL
!i7_evC1_g1.time := 36
!insert (i7_matchC1, i7_evC1_g1) into MatchMatchEvent

!new MatchEvent('i7_evC1_g2')
!i7_evC1_g2.eventType := #GOAL
!i7_evC1_g2.time := 82
!insert (i7_matchC1, i7_evC1_g2) into MatchMatchEvent

!new MatchEvent('i7_evC1_f1')
!i7_evC1_f1.eventType := #FOUL
!i7_evC1_f1.time := 19
!insert (i7_matchC1, i7_evC1_f1) into MatchMatchEvent

!new MatchEvent('i7_evC1_c1')
!i7_evC1_c1.eventType := #CORNER
!i7_evC1_c1.time := 67
!insert (i7_matchC1, i7_evC1_c1) into MatchMatchEvent

!new MatchNote('i7_mnC1_1')
!i7_mnC1_1.note := 'Cup tie decided by two clinical finishes; home side struggled to create clear chances.'
!i7_mnC1_1.date := '2026-10-11'
!insert (i7_matchC1, i7_mnC1_1) into MatchMatchNote

!new MatchPlayer('i7_mpL1_MP_GK')
!i7_mpL1_MP_GK.booked := false
!i7_mpL1_MP_GK.goals := 0
!i7_mpL1_MP_GK.rating := 6

!new MatchPlayer('i7_mpL1_MP_MID')
!i7_mpL1_MP_MID.booked := true
!i7_mpL1_MP_MID.goals := 1
!i7_mpL1_MP_MID.rating := 7

!new MatchPlayer('i7_mpL1_MP_FW')
!i7_mpL1_MP_FW.booked := false
!i7_mpL1_MP_FW.goals := 3
!i7_mpL1_MP_FW.rating := 8

!new MatchPlayer('i7_mpL1_SV_GK')
!i7_mpL1_SV_GK.booked := false
!i7_mpL1_SV_GK.goals := 0
!i7_mpL1_SV_GK.rating := 6

!new MatchPlayer('i7_mpL1_SV_DEF')
!i7_mpL1_SV_DEF.booked := true
!i7_mpL1_SV_DEF.goals := 0
!i7_mpL1_SV_DEF.rating := 6

!new MatchPlayer('i7_mpL1_SV_FW')
!i7_mpL1_SV_FW.booked := false
!i7_mpL1_SV_FW.goals := 3
!i7_mpL1_SV_FW.rating := 8

!insert (i7_matchL1, i7_mpL1_MP_GK) into MatchMatchPlayer
!insert (i7_matchL1, i7_mpL1_MP_MID) into MatchMatchPlayer
!insert (i7_matchL1, i7_mpL1_MP_FW) into MatchMatchPlayer
!insert (i7_matchL1, i7_mpL1_SV_GK) into MatchMatchPlayer
!insert (i7_matchL1, i7_mpL1_SV_DEF) into MatchMatchPlayer
!insert (i7_matchL1, i7_mpL1_SV_FW) into MatchMatchPlayer

!insert (i7_pMP_GK, i7_mpL1_MP_GK) into PlayerMatch
!insert (i7_pMP_MID, i7_mpL1_MP_MID) into PlayerMatch
!insert (i7_pMP_FW, i7_mpL1_MP_FW) into PlayerMatch
!insert (i7_pSV_GK, i7_mpL1_SV_GK) into PlayerMatch
!insert (i7_pSV_DEF, i7_mpL1_SV_DEF) into PlayerMatch
!insert (i7_pSV_FW, i7_mpL1_SV_FW) into PlayerMatch

!new MatchPlayerPosition('i7_mppL1_MP_GK')
!i7_mppL1_MP_GK.positionName := #GOALKEEPER
!i7_mppL1_MP_GK.number := 1
!insert (i7_mpL1_MP_GK, i7_mppL1_MP_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i7_mppL1_MP_MID')
!i7_mppL1_MP_MID.positionName := #MIDFIELDER
!i7_mppL1_MP_MID.number := 8
!insert (i7_mpL1_MP_MID, i7_mppL1_MP_MID) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i7_mppL1_MP_FW')
!i7_mppL1_MP_FW.positionName := #FORWARD
!i7_mppL1_MP_FW.number := 9
!insert (i7_mpL1_MP_FW, i7_mppL1_MP_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i7_mppL1_SV_GK')
!i7_mppL1_SV_GK.positionName := #GOALKEEPER
!i7_mppL1_SV_GK.number := 1
!insert (i7_mpL1_SV_GK, i7_mppL1_SV_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i7_mppL1_SV_DEF')
!i7_mppL1_SV_DEF.positionName := #DEFENDER
!i7_mppL1_SV_DEF.number := 5
!insert (i7_mpL1_SV_DEF, i7_mppL1_SV_DEF) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i7_mppL1_SV_FW')
!i7_mppL1_SV_FW.positionName := #FORWARD
!i7_mppL1_SV_FW.number := 11
!insert (i7_mpL1_SV_FW, i7_mppL1_SV_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('i7_mpC1_NWK_GK')
!i7_mpC1_NWK_GK.booked := false
!i7_mpC1_NWK_GK.goals := 0
!i7_mpC1_NWK_GK.rating := 6

!new MatchPlayer('i7_mpC1_NWK_MID')
!i7_mpC1_NWK_MID.booked := true
!i7_mpC1_NWK_MID.goals := 0
!i7_mpC1_NWK_MID.rating := 6

!new MatchPlayer('i7_mpC1_GLR_DEF')
!i7_mpC1_GLR_DEF.booked := false
!i7_mpC1_GLR_DEF.goals := 0
!i7_mpC1_GLR_DEF.rating := 7

!new MatchPlayer('i7_mpC1_GLR_FW')
!i7_mpC1_GLR_FW.booked := false
!i7_mpC1_GLR_FW.goals := 2
!i7_mpC1_GLR_FW.rating := 8

!insert (i7_matchC1, i7_mpC1_NWK_GK) into MatchMatchPlayer
!insert (i7_matchC1, i7_mpC1_NWK_MID) into MatchMatchPlayer
!insert (i7_matchC1, i7_mpC1_GLR_DEF) into MatchMatchPlayer
!insert (i7_matchC1, i7_mpC1_GLR_FW) into MatchMatchPlayer

!insert (i7_pNWK_GK, i7_mpC1_NWK_GK) into PlayerMatch
!insert (i7_pNWK_MID, i7_mpC1_NWK_MID) into PlayerMatch
!insert (i7_pGLR_DEF, i7_mpC1_GLR_DEF) into PlayerMatch
!insert (i7_pGLR_FW, i7_mpC1_GLR_FW) into PlayerMatch

!new MatchPlayerPosition('i7_mppC1_NWK_GK')
!i7_mppC1_NWK_GK.positionName := #GOALKEEPER
!i7_mppC1_NWK_GK.number := 1
!insert (i7_mpC1_NWK_GK, i7_mppC1_NWK_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i7_mppC1_NWK_MID')
!i7_mppC1_NWK_MID.positionName := #MIDFIELDER
!i7_mppC1_NWK_MID.number := 6
!insert (i7_mpC1_NWK_MID, i7_mppC1_NWK_MID) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i7_mppC1_GLR_DEF')
!i7_mppC1_GLR_DEF.positionName := #DEFENDER
!i7_mppC1_GLR_DEF.number := 4
!insert (i7_mpC1_GLR_DEF, i7_mppC1_GLR_DEF) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i7_mppC1_GLR_FW')
!i7_mppC1_GLR_FW.positionName := #FORWARD
!i7_mppC1_GLR_FW.number := 9
!insert (i7_mpC1_GLR_FW, i7_mppC1_GLR_FW) into MatchPlayerMatchPlayerPosition
```
## Generation 16 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 455 | 0.00% |
| Multiplicities Errors | 0 | 112 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 37 | 0.00% |

# Generation 17
```
!new Club('i8_clubAR')
!i8_clubAR.name := 'Aurora FC'
!i8_clubAR.homeGround := 'Aurora Dome'
!i8_clubAR.chairman := 'Nikolai Petrenko'

!new Club('i8_clubKB')
!i8_clubKB.name := 'Kingsbridge FC'
!i8_clubKB.homeGround := 'Bridge Lane'
!i8_clubKB.chairman := 'Tara Collins'

!new Club('i8_clubLM')
!i8_clubLM.name := 'Limewood Athletic'
!i8_clubLM.homeGround := 'Limewood Park'
!i8_clubLM.chairman := 'Hassan Malik'

!new Club('i8_clubST')
!i8_clubST.name := 'Stonebridge United'
!i8_clubST.homeGround := 'Quarry Road Ground'
!i8_clubST.chairman := 'Elise Fournier'

!new Team('i8_teamAR_A')
!i8_teamAR_A.name := 'Aurora First Team'

!new Team('i8_teamKB_A')
!i8_teamKB_A.name := 'Kingsbridge First Team'

!new Team('i8_teamLM_A')
!i8_teamLM_A.name := 'Limewood First Team'

!new Team('i8_teamST_A')
!i8_teamST_A.name := 'Stonebridge First Team'

!insert (i8_clubAR, i8_teamAR_A) into ClubTeam
!insert (i8_clubKB, i8_teamKB_A) into ClubTeam
!insert (i8_clubLM, i8_teamLM_A) into ClubTeam
!insert (i8_clubST, i8_teamST_A) into ClubTeam

!new Competition('i8_compFriendly')
!i8_compFriendly.name := 'Pre-Season Friendly Night'
!i8_compFriendly.type := 'Friendly'

!new Competition('i8_compPlayoff')
!i8_compPlayoff.name := 'District Playoff'
!i8_compPlayoff.type := 'Playoff'

!new TrainingSession('i8_tsAR_1')
!i8_tsAR_1.date := '2026-11-02'
!i8_tsAR_1.location := 'Aurora Dome - Indoor Pitch'
!i8_tsAR_1.purpose := 'Build-up under pressure and exit patterns'

!new TrainingSession('i8_tsAR_2')
!i8_tsAR_2.date := '2026-11-04'
!i8_tsAR_2.location := 'Aurora Dome - Gym'
!i8_tsAR_2.purpose := 'Strength (lower body) and prehab'

!new TrainingSession('i8_tsKB_1')
!i8_tsKB_1.date := '2026-11-03'
!i8_tsKB_1.location := 'Bridge Lane - Main Pitch'
!i8_tsKB_1.purpose := 'Mid-block organisation and counters'

!new TrainingSession('i8_tsLM_1')
!i8_tsLM_1.date := '2026-11-03'
!i8_tsLM_1.location := 'Limewood Park - Pitch 1'
!i8_tsLM_1.purpose := 'Attacking set pieces and second phase'

!new TrainingSession('i8_tsST_1')
!i8_tsST_1.date := '2026-11-04'
!i8_tsST_1.location := 'Quarry Road Ground - Training Pitch'
!i8_tsST_1.purpose := 'Defending transitions and recovery runs'

!insert (i8_teamAR_A, i8_tsAR_1) into TeamTraining
!insert (i8_teamAR_A, i8_tsAR_2) into TeamTraining
!insert (i8_teamKB_A, i8_tsKB_1) into TeamTraining
!insert (i8_teamLM_A, i8_tsLM_1) into TeamTraining
!insert (i8_teamST_A, i8_tsST_1) into TeamTraining

!new TrainingNotes('i8_tnAR_1a')
!i8_tnAR_1a.note := 'Good exit patterns; centre backs must open body to play forward earlier.'
!i8_tnAR_1a.date := '2026-11-02'
!insert (i8_tsAR_1, i8_tnAR_1a) into TrainingTrainingNotes

!new TrainingNotes('i8_tnAR_2a')
!i8_tnAR_2a.note := 'Gym completed; monitor soreness and keep sprint volume light next day.'
!i8_tnAR_2a.date := '2026-11-04'
!insert (i8_tsAR_2, i8_tnAR_2a) into TrainingTrainingNotes

!new TrainingNotes('i8_tnKB_1a')
!i8_tnKB_1a.note := 'Block compact; first pass after regain still too slow.'
!i8_tnKB_1a.date := '2026-11-03'
!insert (i8_tsKB_1, i8_tnKB_1a) into TrainingTrainingNotes

!new TrainingNotes('i8_tnLM_1a')
!i8_tnLM_1a.note := 'Corners: deliveries consistent; attack the near post with more aggression.'
!i8_tnLM_1a.date := '2026-11-03'
!insert (i8_tsLM_1, i8_tnLM_1a) into TrainingTrainingNotes

!new TrainingNotes('i8_tnST_1a')
!i8_tnST_1a.note := 'Recovery runs improved; reduce fouls when chasing back.'
!i8_tnST_1a.date := '2026-11-04'
!insert (i8_tsST_1, i8_tnST_1a) into TrainingTrainingNotes

!new Player('i8_pAR_GK')
!i8_pAR_GK.name := 'Ethan Sato'
!i8_pAR_GK.age := 30
!i8_pAR_GK.bestFoot := #RIGHT
!i8_pAR_GK.phoneNumber := '+44 7700 881001'

!new Player('i8_pAR_DEF')
!i8_pAR_DEF.name := 'Milan Peric'
!i8_pAR_DEF.age := 27
!i8_pAR_DEF.bestFoot := #BOTH
!i8_pAR_DEF.phoneNumber := '+44 7700 881002'

!new Player('i8_pAR_MID')
!i8_pAR_MID.name := 'Ruben Varga'
!i8_pAR_MID.age := 24
!i8_pAR_MID.bestFoot := #LEFT
!i8_pAR_MID.phoneNumber := '+44 7700 881003'

!new Player('i8_pAR_FW')
!i8_pAR_FW.name := 'Nico Jensen'
!i8_pAR_FW.age := 22
!i8_pAR_FW.bestFoot := #RIGHT
!i8_pAR_FW.phoneNumber := '+44 7700 881004'

!new Player('i8_pKB_GK')
!i8_pKB_GK.name := 'Adam Pierce'
!i8_pKB_GK.age := 31
!i8_pKB_GK.bestFoot := #LEFT
!i8_pKB_GK.phoneNumber := '+44 7700 882001'

!new Player('i8_pKB_FW')
!i8_pKB_FW.name := 'Khalid Noor'
!i8_pKB_FW.age := 23
!i8_pKB_FW.bestFoot := #BOTH
!i8_pKB_FW.phoneNumber := '+44 7700 882002'

!new Player('i8_pLM_GK')
!i8_pLM_GK.name := 'Jonas Eklund'
!i8_pLM_GK.age := 28
!i8_pLM_GK.bestFoot := #BOTH
!i8_pLM_GK.phoneNumber := '+44 7700 883001'

!new Player('i8_pLM_MID')
!i8_pLM_MID.name := 'Tariq Saleh'
!i8_pLM_MID.age := 25
!i8_pLM_MID.bestFoot := #RIGHT
!i8_pLM_MID.phoneNumber := '+44 7700 883002'

!new Player('i8_pLM_FW')
!i8_pLM_FW.name := 'Leon Costa'
!i8_pLM_FW.age := 21
!i8_pLM_FW.bestFoot := #LEFT
!i8_pLM_FW.phoneNumber := '+44 7700 883003'

!new Player('i8_pST_DEF')
!i8_pST_DEF.name := 'Owen Mercer'
!i8_pST_DEF.age := 26
!i8_pST_DEF.bestFoot := #RIGHT
!i8_pST_DEF.phoneNumber := '+44 7700 884001'

!new Player('i8_pST_FW')
!i8_pST_FW.name := 'Mateo Rojas'
!i8_pST_FW.age := 24
!i8_pST_FW.bestFoot := #BOTH
!i8_pST_FW.phoneNumber := '+44 7700 884002'

!insert (i8_teamAR_A, i8_pAR_GK) into TeamPlayer
!insert (i8_teamAR_A, i8_pAR_DEF) into TeamPlayer
!insert (i8_teamAR_A, i8_pAR_MID) into TeamPlayer
!insert (i8_teamAR_A, i8_pAR_FW) into TeamPlayer

!insert (i8_teamKB_A, i8_pKB_GK) into TeamPlayer
!insert (i8_teamKB_A, i8_pKB_FW) into TeamPlayer

!insert (i8_teamLM_A, i8_pLM_GK) into TeamPlayer
!insert (i8_teamLM_A, i8_pLM_MID) into TeamPlayer
!insert (i8_teamLM_A, i8_pLM_FW) into TeamPlayer

!insert (i8_teamST_A, i8_pST_DEF) into TeamPlayer
!insert (i8_teamST_A, i8_pST_FW) into TeamPlayer

!new Position('i8_posAR_GK')
!i8_posAR_GK.positionName := #GOALKEEPER
!insert (i8_pAR_GK, i8_posAR_GK) into PlayerPositions

!new Position('i8_posAR_DEF')
!i8_posAR_DEF.positionName := #DEFENDER
!insert (i8_pAR_DEF, i8_posAR_DEF) into PlayerPositions

!new Position('i8_posAR_DEF_alt')
!i8_posAR_DEF_alt.positionName := #MIDFIELDER
!insert (i8_pAR_DEF, i8_posAR_DEF_alt) into PlayerPositions

!new Position('i8_posAR_MID')
!i8_posAR_MID.positionName := #MIDFIELDER
!insert (i8_pAR_MID, i8_posAR_MID) into PlayerPositions

!new Position('i8_posAR_FW')
!i8_posAR_FW.positionName := #FORWARD
!insert (i8_pAR_FW, i8_posAR_FW) into PlayerPositions

!new Position('i8_posKB_GK')
!i8_posKB_GK.positionName := #GOALKEEPER
!insert (i8_pKB_GK, i8_posKB_GK) into PlayerPositions

!new Position('i8_posKB_FW_1')
!i8_posKB_FW_1.positionName := #FORWARD
!insert (i8_pKB_FW, i8_posKB_FW_1) into PlayerPositions

!new Position('i8_posKB_FW_2')
!i8_posKB_FW_2.positionName := #MIDFIELDER
!insert (i8_pKB_FW, i8_posKB_FW_2) into PlayerPositions

!new Position('i8_posLM_GK')
!i8_posLM_GK.positionName := #GOALKEEPER
!insert (i8_pLM_GK, i8_posLM_GK) into PlayerPositions

!new Position('i8_posLM_MID')
!i8_posLM_MID.positionName := #MIDFIELDER
!insert (i8_pLM_MID, i8_posLM_MID) into PlayerPositions

!new Position('i8_posLM_FW')
!i8_posLM_FW.positionName := #FORWARD
!insert (i8_pLM_FW, i8_posLM_FW) into PlayerPositions

!new Position('i8_posLM_FW_alt')
!i8_posLM_FW_alt.positionName := #MIDFIELDER
!insert (i8_pLM_FW, i8_posLM_FW_alt) into PlayerPositions

!new Position('i8_posST_DEF')
!i8_posST_DEF.positionName := #DEFENDER
!insert (i8_pST_DEF, i8_posST_DEF) into PlayerPositions

!new Position('i8_posST_FW')
!i8_posST_FW.positionName := #FORWARD
!insert (i8_pST_FW, i8_posST_FW) into PlayerPositions

!new Position('i8_posST_FW_alt')
!i8_posST_FW_alt.positionName := #MIDFIELDER
!insert (i8_pST_FW, i8_posST_FW_alt) into PlayerPositions

!new TrainingObjective('i8_objAR_GK_1')
!i8_objAR_GK_1.areaToImprove := 'Communication on defensive set pieces'
!i8_objAR_GK_1.startDate := '2026-11-01'
!i8_objAR_GK_1.endDate := '2026-12-01'
!i8_objAR_GK_1.success := false
!insert (i8_objAR_GK_1, i8_pAR_GK) into TrainingObjectivePlayer

!new TrainingObjective('i8_objAR_DEF_1')
!i8_objAR_DEF_1.areaToImprove := 'Passing out under press'
!i8_objAR_DEF_1.startDate := '2026-11-01'
!i8_objAR_DEF_1.endDate := '2026-12-01'
!i8_objAR_DEF_1.success := true
!insert (i8_objAR_DEF_1, i8_pAR_DEF) into TrainingObjectivePlayer

!new TrainingObjective('i8_objAR_MID_1')
!i8_objAR_MID_1.areaToImprove := 'Receiving on the half-turn'
!i8_objAR_MID_1.startDate := '2026-11-01'
!i8_objAR_MID_1.endDate := '2026-12-01'
!i8_objAR_MID_1.success := false
!insert (i8_objAR_MID_1, i8_pAR_MID) into TrainingObjectivePlayer

!new TrainingObjective('i8_objAR_FW_1')
!i8_objAR_FW_1.areaToImprove := 'Finishing with weaker foot'
!i8_objAR_FW_1.startDate := '2026-11-01'
!i8_objAR_FW_1.endDate := '2026-12-01'
!i8_objAR_FW_1.success := false
!insert (i8_objAR_FW_1, i8_pAR_FW) into TrainingObjectivePlayer

!new TrainingObjective('i8_objKB_GK_1')
!i8_objKB_GK_1.areaToImprove := 'Distribution speed after saves'
!i8_objKB_GK_1.startDate := '2026-11-01'
!i8_objKB_GK_1.endDate := '2026-12-01'
!i8_objKB_GK_1.success := true
!insert (i8_objKB_GK_1, i8_pKB_GK) into TrainingObjectivePlayer

!new TrainingObjective('i8_objKB_FW_1')
!i8_objKB_FW_1.areaToImprove := 'Curved runs to stay onside'
!i8_objKB_FW_1.startDate := '2026-11-01'
!i8_objKB_FW_1.endDate := '2026-12-01'
!i8_objKB_FW_1.success := false
!insert (i8_objKB_FW_1, i8_pKB_FW) into TrainingObjectivePlayer

!new TrainingObjective('i8_objLM_GK_1')
!i8_objLM_GK_1.areaToImprove := 'Claiming crosses in traffic'
!i8_objLM_GK_1.startDate := '2026-11-01'
!i8_objLM_GK_1.endDate := '2026-12-01'
!i8_objLM_GK_1.success := false
!insert (i8_objLM_GK_1, i8_pLM_GK) into TrainingObjectivePlayer

!new TrainingObjective('i8_objLM_MID_1')
!i8_objLM_MID_1.areaToImprove := 'Switching play under pressure'
!i8_objLM_MID_1.startDate := '2026-11-01'
!i8_objLM_MID_1.endDate := '2026-12-01'
!i8_objLM_MID_1.success := true
!insert (i8_objLM_MID_1, i8_pLM_MID) into TrainingObjectivePlayer

!new TrainingObjective('i8_objLM_FW_1')
!i8_objLM_FW_1.areaToImprove := 'Pressing intensity and recovery'
!i8_objLM_FW_1.startDate := '2026-11-01'
!i8_objLM_FW_1.endDate := '2026-12-01'
!i8_objLM_FW_1.success := true
!insert (i8_objLM_FW_1, i8_pLM_FW) into TrainingObjectivePlayer

!new TrainingObjective('i8_objST_DEF_1')
!i8_objST_DEF_1.areaToImprove := 'Defending cut-backs in the box'
!i8_objST_DEF_1.startDate := '2026-11-01'
!i8_objST_DEF_1.endDate := '2026-12-01'
!i8_objST_DEF_1.success := false
!insert (i8_objST_DEF_1, i8_pST_DEF) into TrainingObjectivePlayer

!new TrainingObjective('i8_objST_FW_1')
!i8_objST_FW_1.areaToImprove := 'Hold-up play with back to goal'
!i8_objST_FW_1.startDate := '2026-11-01'
!i8_objST_FW_1.endDate := '2026-12-01'
!i8_objST_FW_1.success := false
!insert (i8_objST_FW_1, i8_pST_FW) into TrainingObjectivePlayer

!new PlayerNotes('i8_pnAR_1')
!i8_pnAR_1.note := 'Calm presence; needs to be more vocal on corners.'
!i8_pnAR_1.date := '2026-11-05'
!insert (i8_pAR_GK, i8_pnAR_1) into PlayerPlayerNotes

!new PlayerNotes('i8_pnLM_1')
!i8_pnLM_1.note := 'Strong engine; can simplify decisions when fatigued.'
!i8_pnLM_1.date := '2026-11-06'
!insert (i8_pLM_MID, i8_pnLM_1) into PlayerPlayerNotes

!new TrainingFailedToAttend('i8_failAR_1')
!i8_failAR_1.reason := 'Physio appointment'
!insert (i8_tsAR_2, i8_failAR_1) into TrainingFailded
!insert (i8_failAR_1, i8_pAR_MID) into FailedPlayer

!new TrainingFailedToAttend('i8_failST_1')
!i8_failST_1.reason := 'Work commitment'
!insert (i8_tsST_1, i8_failST_1) into TrainingFailded
!insert (i8_failST_1, i8_pST_DEF) into FailedPlayer

!new Match('i8_matchF1')
!i8_matchF1.date := '2026-11-08'
!i8_matchF1.homeAway := true

!new Match('i8_matchP1')
!i8_matchP1.date := '2026-11-09'
!i8_matchP1.homeAway := false

!insert (i8_compFriendly, i8_matchF1) into CompetitionMatch
!insert (i8_compPlayoff, i8_matchP1) into CompetitionMatch

!insert (i8_teamAR_A, i8_matchF1) into LocalMatch
!insert (i8_teamKB_A, i8_matchF1) into VisitorMatch

!insert (i8_teamLM_A, i8_matchP1) into LocalMatch
!insert (i8_teamST_A, i8_matchP1) into VisitorMatch

!new MatchReport('i8_mrF1')
!i8_mrF1.duration := 90
!i8_mrF1.scoreVisitor := 0
!i8_mrF1.scoreLocal := 0
!insert (i8_matchF1, i8_mrF1) into MatchMatchReport

!new MatchReport('i8_mrP1')
!i8_mrP1.duration := 90
!i8_mrP1.scoreVisitor := 1
!i8_mrP1.scoreLocal := 3
!insert (i8_matchP1, i8_mrP1) into MatchMatchReport

!new MatchEvent('i8_evF1_foul')
!i8_evF1_foul.eventType := #FOUL
!i8_evF1_foul.time := 12
!insert (i8_matchF1, i8_evF1_foul) into MatchMatchEvent

!new MatchEvent('i8_evF1_corner')
!i8_evF1_corner.eventType := #CORNER
!i8_evF1_corner.time := 38
!insert (i8_matchF1, i8_evF1_corner) into MatchMatchEvent

!new MatchEvent('i8_evF1_off')
!i8_evF1_off.eventType := #OFFSIDE
!i8_evF1_off.time := 64
!insert (i8_matchF1, i8_evF1_off) into MatchMatchEvent

!new MatchEvent('i8_evF1_pen')
!i8_evF1_pen.eventType := #PENALTY
!i8_evF1_pen.time := 79
!insert (i8_matchF1, i8_evF1_pen) into MatchMatchEvent

!new MatchNote('i8_mnF1_1')
!i8_mnF1_1.note := 'Scoreless friendly; few clear chances and both goalkeepers handled crosses well.'
!i8_mnF1_1.date := '2026-11-08'
!insert (i8_matchF1, i8_mnF1_1) into MatchMatchNote

!new MatchEvent('i8_evP1_g1')
!i8_evP1_g1.eventType := #GOAL
!i8_evP1_g1.time := 7
!insert (i8_matchP1, i8_evP1_g1) into MatchMatchEvent

!new MatchEvent('i8_evP1_g2')
!i8_evP1_g2.eventType := #GOAL
!i8_evP1_g2.time := 33
!insert (i8_matchP1, i8_evP1_g2) into MatchMatchEvent

!new MatchEvent('i8_evP1_g3')
!i8_evP1_g3.eventType := #GOAL
!i8_evP1_g3.time := 52
!insert (i8_matchP1, i8_evP1_g3) into MatchMatchEvent

!new MatchEvent('i8_evP1_g4')
!i8_evP1_g4.eventType := #GOAL
!i8_evP1_g4.time := 87
!insert (i8_matchP1, i8_evP1_g4) into MatchMatchEvent

!new MatchEvent('i8_evP1_foul')
!i8_evP1_foul.eventType := #FOUL
!i8_evP1_foul.time := 21
!insert (i8_matchP1, i8_evP1_foul) into MatchMatchEvent

!new MatchEvent('i8_evP1_corner')
!i8_evP1_corner.eventType := #CORNER
!i8_evP1_corner.time := 69
!insert (i8_matchP1, i8_evP1_corner) into MatchMatchEvent

!new MatchNote('i8_mnP1_1')
!i8_mnP1_1.note := 'Playoff match with four goals; Limewood controlled set pieces and finished late to seal it.'
!i8_mnP1_1.date := '2026-11-09'
!insert (i8_matchP1, i8_mnP1_1) into MatchMatchNote

!new MatchPlayer('i8_mpF1_AR_GK')
!i8_mpF1_AR_GK.booked := false
!i8_mpF1_AR_GK.goals := 0
!i8_mpF1_AR_GK.rating := 8

!new MatchPlayer('i8_mpF1_AR_FW')
!i8_mpF1_AR_FW.booked := true
!i8_mpF1_AR_FW.goals := 0
!i8_mpF1_AR_FW.rating := 6

!new MatchPlayer('i8_mpF1_KB_GK')
!i8_mpF1_KB_GK.booked := false
!i8_mpF1_KB_GK.goals := 0
!i8_mpF1_KB_GK.rating := 8

!new MatchPlayer('i8_mpF1_KB_FW')
!i8_mpF1_KB_FW.booked := false
!i8_mpF1_KB_FW.goals := 0
!i8_mpF1_KB_FW.rating := 6

!insert (i8_matchF1, i8_mpF1_AR_GK) into MatchMatchPlayer
!insert (i8_matchF1, i8_mpF1_AR_FW) into MatchMatchPlayer
!insert (i8_matchF1, i8_mpF1_KB_GK) into MatchMatchPlayer
!insert (i8_matchF1, i8_mpF1_KB_FW) into MatchMatchPlayer

!insert (i8_pAR_GK, i8_mpF1_AR_GK) into PlayerMatch
!insert (i8_pAR_FW, i8_mpF1_AR_FW) into PlayerMatch
!insert (i8_pKB_GK, i8_mpF1_KB_GK) into PlayerMatch
!insert (i8_pKB_FW, i8_mpF1_KB_FW) into PlayerMatch

!new MatchPlayerPosition('i8_mppF1_AR_GK')
!i8_mppF1_AR_GK.positionName := #GOALKEEPER
!i8_mppF1_AR_GK.number := 1
!insert (i8_mpF1_AR_GK, i8_mppF1_AR_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i8_mppF1_AR_FW')
!i8_mppF1_AR_FW.positionName := #FORWARD
!i8_mppF1_AR_FW.number := 9
!insert (i8_mpF1_AR_FW, i8_mppF1_AR_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i8_mppF1_KB_GK')
!i8_mppF1_KB_GK.positionName := #GOALKEEPER
!i8_mppF1_KB_GK.number := 1
!insert (i8_mpF1_KB_GK, i8_mppF1_KB_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i8_mppF1_KB_FW')
!i8_mppF1_KB_FW.positionName := #FORWARD
!i8_mppF1_KB_FW.number := 11
!insert (i8_mpF1_KB_FW, i8_mppF1_KB_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('i8_mpP1_LM_GK')
!i8_mpP1_LM_GK.booked := false
!i8_mpP1_LM_GK.goals := 0
!i8_mpP1_LM_GK.rating := 7

!new MatchPlayer('i8_mpP1_LM_MID')
!i8_mpP1_LM_MID.booked := false
!i8_mpP1_LM_MID.goals := 1
!i8_mpP1_LM_MID.rating := 8

!new MatchPlayer('i8_mpP1_LM_FW')
!i8_mpP1_LM_FW.booked := false
!i8_mpP1_LM_FW.goals := 2
!i8_mpP1_LM_FW.rating := 9

!new MatchPlayer('i8_mpP1_ST_DEF')
!i8_mpP1_ST_DEF.booked := true
!i8_mpP1_ST_DEF.goals := 0
!i8_mpP1_ST_DEF.rating := 6

!new MatchPlayer('i8_mpP1_ST_FW')
!i8_mpP1_ST_FW.booked := false
!i8_mpP1_ST_FW.goals := 1
!i8_mpP1_ST_FW.rating := 7

!insert (i8_matchP1, i8_mpP1_LM_GK) into MatchMatchPlayer
!insert (i8_matchP1, i8_mpP1_LM_MID) into MatchMatchPlayer
!insert (i8_matchP1, i8_mpP1_LM_FW) into MatchMatchPlayer
!insert (i8_matchP1, i8_mpP1_ST_DEF) into MatchMatchPlayer
!insert (i8_matchP1, i8_mpP1_ST_FW) into MatchMatchPlayer

!insert (i8_pLM_GK, i8_mpP1_LM_GK) into PlayerMatch
!insert (i8_pLM_MID, i8_mpP1_LM_MID) into PlayerMatch
!insert (i8_pLM_FW, i8_mpP1_LM_FW) into PlayerMatch
!insert (i8_pST_DEF, i8_mpP1_ST_DEF) into PlayerMatch
!insert (i8_pST_FW, i8_mpP1_ST_FW) into PlayerMatch

!new MatchPlayerPosition('i8_mppP1_LM_GK')
!i8_mppP1_LM_GK.positionName := #GOALKEEPER
!i8_mppP1_LM_GK.number := 1
!insert (i8_mpP1_LM_GK, i8_mppP1_LM_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i8_mppP1_LM_MID')
!i8_mppP1_LM_MID.positionName := #MIDFIELDER
!i8_mppP1_LM_MID.number := 8
!insert (i8_mpP1_LM_MID, i8_mppP1_LM_MID) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i8_mppP1_LM_FW')
!i8_mppP1_LM_FW.positionName := #FORWARD
!i8_mppP1_LM_FW.number := 9
!insert (i8_mpP1_LM_FW, i8_mppP1_LM_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i8_mppP1_ST_DEF')
!i8_mppP1_ST_DEF.positionName := #DEFENDER
!i8_mppP1_ST_DEF.number := 4
!insert (i8_mpP1_ST_DEF, i8_mppP1_ST_DEF) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i8_mppP1_ST_FW')
!i8_mppP1_ST_FW.positionName := #FORWARD
!i8_mppP1_ST_FW.number := 10
!insert (i8_mpP1_ST_FW, i8_mppP1_ST_FW) into MatchPlayerMatchPlayerPosition
```
## Generation 17 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 432 | 0.00% |
| Multiplicities Errors | 0 | 104 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 38 | 0.00% |

# Generation 18
```
!new Club('i9_clubHC')
!i9_clubHC.name := 'Hillcrest FC'
!i9_clubHC.homeGround := 'Hillcrest Community Stadium'
!i9_clubHC.chairman := 'Rowan Sinclair'

!new Club('i9_clubDV')
!i9_clubDV.name := 'Daleside FC'
!i9_clubDV.homeGround := 'Daleside Park'
!i9_clubDV.chairman := 'Mina Qadir'

!new Club('i9_clubMR')
!i9_clubMR.name := 'Mariner FC'
!i9_clubMR.homeGround := 'Harbour View Ground'
!i9_clubMR.chairman := 'Peter Lang'

!new Team('i9_teamHC_A')
!i9_teamHC_A.name := 'Hillcrest First Team'

!new Team('i9_teamHC_B')
!i9_teamHC_B.name := 'Hillcrest U21'

!new Team('i9_teamDV_A')
!i9_teamDV_A.name := 'Daleside First Team'

!new Team('i9_teamMR_A')
!i9_teamMR_A.name := 'Mariner First Team'

!insert (i9_clubHC, i9_teamHC_A) into ClubTeam
!insert (i9_clubHC, i9_teamHC_B) into ClubTeam
!insert (i9_clubDV, i9_teamDV_A) into ClubTeam
!insert (i9_clubMR, i9_teamMR_A) into ClubTeam

!new Competition('i9_compCup')
!i9_compCup.name := 'Harbour Counties Cup'
!i9_compCup.type := 'Cup'

!new TrainingSession('i9_tsHC_A_1')
!i9_tsHC_A_1.date := '2026-11-28'
!i9_tsHC_A_1.location := 'Hillcrest Training Ground - Pitch 1'
!i9_tsHC_A_1.purpose := 'Defensive transitions and rest defence'

!new TrainingSession('i9_tsHC_A_2')
!i9_tsHC_A_2.date := '2026-12-01'
!i9_tsHC_A_2.location := 'Hillcrest Training Ground - Pitch 2'
!i9_tsHC_A_2.purpose := 'Finishing and attacking patterns'

!new TrainingSession('i9_tsHC_B_1')
!i9_tsHC_B_1.date := '2026-11-29'
!i9_tsHC_B_1.location := 'Hillcrest Academy Field'
!i9_tsHC_B_1.purpose := 'Ball retention under pressure'

!new TrainingSession('i9_tsDV_A_1')
!i9_tsDV_A_1.date := '2026-11-29'
!i9_tsDV_A_1.location := 'Daleside Park - Main Pitch'
!i9_tsDV_A_1.purpose := 'Mid-block organisation and counterattacks'

!new TrainingSession('i9_tsMR_A_1')
!i9_tsMR_A_1.date := '2026-11-30'
!i9_tsMR_A_1.location := 'Harbour View Ground - Training Pitch'
!i9_tsMR_A_1.purpose := 'Attacking set pieces and second phase'

!insert (i9_teamHC_A, i9_tsHC_A_1) into TeamTraining
!insert (i9_teamHC_A, i9_tsHC_A_2) into TeamTraining
!insert (i9_teamHC_B, i9_tsHC_B_1) into TeamTraining
!insert (i9_teamDV_A, i9_tsDV_A_1) into TeamTraining
!insert (i9_teamMR_A, i9_tsMR_A_1) into TeamTraining

!new TrainingNotes('i9_tnHC_A_1a')
!i9_tnHC_A_1a.note := 'Back four stayed compact; improve speed of first pass after regains.'
!i9_tnHC_A_1a.date := '2026-11-28'
!insert (i9_tsHC_A_1, i9_tnHC_A_1a) into TrainingTrainingNotes

!new TrainingNotes('i9_tnHC_A_2a')
!i9_tnHC_A_2a.note := 'Good movement in the box; finishing improved on low cut-backs.'
!i9_tnHC_A_2a.date := '2026-12-01'
!insert (i9_tsHC_A_2, i9_tnHC_A_2a) into TrainingTrainingNotes

!new TrainingNotes('i9_tnHC_B_1a')
!i9_tnHC_B_1a.note := 'Kept the ball well; must scan earlier before receiving under pressure.'
!i9_tnHC_B_1a.date := '2026-11-29'
!insert (i9_tsHC_B_1, i9_tnHC_B_1a) into TrainingTrainingNotes

!new TrainingNotes('i9_tnDV_A_1a')
!i9_tnDV_A_1a.note := 'Counter patterns were sharp; final pass needs more composure.'
!i9_tnDV_A_1a.date := '2026-11-29'
!insert (i9_tsDV_A_1, i9_tnDV_A_1a) into TrainingTrainingNotes

!new TrainingNotes('i9_tnMR_A_1a')
!i9_tnMR_A_1a.note := 'Set-piece delivery consistent; improve reactions to second balls.'
!i9_tnMR_A_1a.date := '2026-11-30'
!insert (i9_tsMR_A_1, i9_tnMR_A_1a) into TrainingTrainingNotes

!new Player('i9_pHC_GK')
!i9_pHC_GK.name := 'Liam Crowley'
!i9_pHC_GK.age := 33
!i9_pHC_GK.bestFoot := #RIGHT
!i9_pHC_GK.phoneNumber := '+44 7700 931001'

!new Player('i9_pHC_DEF')
!i9_pHC_DEF.name := 'Marek Stojan'
!i9_pHC_DEF.age := 27
!i9_pHC_DEF.bestFoot := #BOTH
!i9_pHC_DEF.phoneNumber := '+44 7700 931002'

!new Player('i9_pHC_MID')
!i9_pHC_MID.name := 'Amin Jalil'
!i9_pHC_MID.age := 24
!i9_pHC_MID.bestFoot := #LEFT
!i9_pHC_MID.phoneNumber := '+44 7700 931003'

!new Player('i9_pHC_FW')
!i9_pHC_FW.name := 'Tyler Bishop'
!i9_pHC_FW.age := 22
!i9_pHC_FW.bestFoot := #RIGHT
!i9_pHC_FW.phoneNumber := '+44 7700 931004'

!new Player('i9_pHC21_GK')
!i9_pHC21_GK.name := 'Evan Russo'
!i9_pHC21_GK.age := 19
!i9_pHC21_GK.bestFoot := #BOTH
!i9_pHC21_GK.phoneNumber := '+44 7700 932001'

!new Player('i9_pHC21_FW')
!i9_pHC21_FW.name := 'Nate Okoro'
!i9_pHC21_FW.age := 20
!i9_pHC21_FW.bestFoot := #LEFT
!i9_pHC21_FW.phoneNumber := '+44 7700 932002'

!new Player('i9_pDV_GK')
!i9_pDV_GK.name := 'Sandro Vitale'
!i9_pDV_GK.age := 30
!i9_pDV_GK.bestFoot := #LEFT
!i9_pDV_GK.phoneNumber := '+44 7700 933001'

!new Player('i9_pDV_MID')
!i9_pDV_MID.name := 'Ravi Kapoor'
!i9_pDV_MID.age := 26
!i9_pDV_MID.bestFoot := #RIGHT
!i9_pDV_MID.phoneNumber := '+44 7700 933002'

!new Player('i9_pDV_FW')
!i9_pDV_FW.name := 'Jonas Albrecht'
!i9_pDV_FW.age := 23
!i9_pDV_FW.bestFoot := #BOTH
!i9_pDV_FW.phoneNumber := '+44 7700 933003'

!new Player('i9_pMR_GK')
!i9_pMR_GK.name := 'Kieran Doyle'
!i9_pMR_GK.age := 28
!i9_pMR_GK.bestFoot := #RIGHT
!i9_pMR_GK.phoneNumber := '+44 7700 934001'

!new Player('i9_pMR_MID')
!i9_pMR_MID.name := 'Yuto Nishimura'
!i9_pMR_MID.age := 25
!i9_pMR_MID.bestFoot := #BOTH
!i9_pMR_MID.phoneNumber := '+44 7700 934002'

!new Player('i9_pMR_FW')
!i9_pMR_FW.name := 'Diego Serrano'
!i9_pMR_FW.age := 24
!i9_pMR_FW.bestFoot := #LEFT
!i9_pMR_FW.phoneNumber := '+44 7700 934003'

!insert (i9_teamHC_A, i9_pHC_GK) into TeamPlayer
!insert (i9_teamHC_A, i9_pHC_DEF) into TeamPlayer
!insert (i9_teamHC_A, i9_pHC_MID) into TeamPlayer
!insert (i9_teamHC_A, i9_pHC_FW) into TeamPlayer

!insert (i9_teamHC_B, i9_pHC21_GK) into TeamPlayer
!insert (i9_teamHC_B, i9_pHC21_FW) into TeamPlayer

!insert (i9_teamDV_A, i9_pDV_GK) into TeamPlayer
!insert (i9_teamDV_A, i9_pDV_MID) into TeamPlayer
!insert (i9_teamDV_A, i9_pDV_FW) into TeamPlayer

!insert (i9_teamMR_A, i9_pMR_GK) into TeamPlayer
!insert (i9_teamMR_A, i9_pMR_MID) into TeamPlayer
!insert (i9_teamMR_A, i9_pMR_FW) into TeamPlayer

!new Position('i9_posHC_GK')
!i9_posHC_GK.positionName := #GOALKEEPER
!insert (i9_pHC_GK, i9_posHC_GK) into PlayerPositions

!new Position('i9_posHC_DEF_1')
!i9_posHC_DEF_1.positionName := #DEFENDER
!insert (i9_pHC_DEF, i9_posHC_DEF_1) into PlayerPositions

!new Position('i9_posHC_DEF_2')
!i9_posHC_DEF_2.positionName := #MIDFIELDER
!insert (i9_pHC_DEF, i9_posHC_DEF_2) into PlayerPositions

!new Position('i9_posHC_MID')
!i9_posHC_MID.positionName := #MIDFIELDER
!insert (i9_pHC_MID, i9_posHC_MID) into PlayerPositions

!new Position('i9_posHC_FW')
!i9_posHC_FW.positionName := #FORWARD
!insert (i9_pHC_FW, i9_posHC_FW) into PlayerPositions

!new Position('i9_posHC21_GK')
!i9_posHC21_GK.positionName := #GOALKEEPER
!insert (i9_pHC21_GK, i9_posHC21_GK) into PlayerPositions

!new Position('i9_posHC21_FW_1')
!i9_posHC21_FW_1.positionName := #FORWARD
!insert (i9_pHC21_FW, i9_posHC21_FW_1) into PlayerPositions

!new Position('i9_posHC21_FW_2')
!i9_posHC21_FW_2.positionName := #MIDFIELDER
!insert (i9_pHC21_FW, i9_posHC21_FW_2) into PlayerPositions

!new Position('i9_posDV_GK')
!i9_posDV_GK.positionName := #GOALKEEPER
!insert (i9_pDV_GK, i9_posDV_GK) into PlayerPositions

!new Position('i9_posDV_MID')
!i9_posDV_MID.positionName := #MIDFIELDER
!insert (i9_pDV_MID, i9_posDV_MID) into PlayerPositions

!new Position('i9_posDV_FW')
!i9_posDV_FW.positionName := #FORWARD
!insert (i9_pDV_FW, i9_posDV_FW) into PlayerPositions

!new Position('i9_posMR_GK')
!i9_posMR_GK.positionName := #GOALKEEPER
!insert (i9_pMR_GK, i9_posMR_GK) into PlayerPositions

!new Position('i9_posMR_MID_1')
!i9_posMR_MID_1.positionName := #MIDFIELDER
!insert (i9_pMR_MID, i9_posMR_MID_1) into PlayerPositions

!new Position('i9_posMR_MID_2')
!i9_posMR_MID_2.positionName := #DEFENDER
!insert (i9_pMR_MID, i9_posMR_MID_2) into PlayerPositions

!new Position('i9_posMR_FW')
!i9_posMR_FW.positionName := #FORWARD
!insert (i9_pMR_FW, i9_posMR_FW) into PlayerPositions

!new TrainingObjective('i9_objHC_GK_1')
!i9_objHC_GK_1.areaToImprove := 'Communication on defensive set pieces'
!i9_objHC_GK_1.startDate := '2026-11-25'
!i9_objHC_GK_1.endDate := '2026-12-25'
!i9_objHC_GK_1.success := false
!insert (i9_objHC_GK_1, i9_pHC_GK) into TrainingObjectivePlayer

!new TrainingObjective('i9_objHC_DEF_1')
!i9_objHC_DEF_1.areaToImprove := 'Passing out under pressure'
!i9_objHC_DEF_1.startDate := '2026-11-25'
!i9_objHC_DEF_1.endDate := '2026-12-25'
!i9_objHC_DEF_1.success := true
!insert (i9_objHC_DEF_1, i9_pHC_DEF) into TrainingObjectivePlayer

!new TrainingObjective('i9_objHC_MID_1')
!i9_objHC_MID_1.areaToImprove := 'Receiving on the half-turn'
!i9_objHC_MID_1.startDate := '2026-11-25'
!i9_objHC_MID_1.endDate := '2026-12-25'
!i9_objHC_MID_1.success := false
!insert (i9_objHC_MID_1, i9_pHC_MID) into TrainingObjectivePlayer

!new TrainingObjective('i9_objHC_FW_1')
!i9_objHC_FW_1.areaToImprove := 'First-time finishing from cut-backs'
!i9_objHC_FW_1.startDate := '2026-11-25'
!i9_objHC_FW_1.endDate := '2026-12-25'
!i9_objHC_FW_1.success := false
!insert (i9_objHC_FW_1, i9_pHC_FW) into TrainingObjectivePlayer

!new TrainingObjective('i9_objHC21_GK_1')
!i9_objHC21_GK_1.areaToImprove := 'Footwork for low saves'
!i9_objHC21_GK_1.startDate := '2026-11-25'
!i9_objHC21_GK_1.endDate := '2026-12-25'
!i9_objHC21_GK_1.success := true
!insert (i9_objHC21_GK_1, i9_pHC21_GK) into TrainingObjectivePlayer

!new TrainingObjective('i9_objHC21_FW_1')
!i9_objHC21_FW_1.areaToImprove := 'Composure when finishing under pressure'
!i9_objHC21_FW_1.startDate := '2026-11-25'
!i9_objHC21_FW_1.endDate := '2026-12-25'
!i9_objHC21_FW_1.success := false
!insert (i9_objHC21_FW_1, i9_pHC21_FW) into TrainingObjectivePlayer

!new TrainingObjective('i9_objDV_GK_1')
!i9_objDV_GK_1.areaToImprove := 'Distribution speed after saves'
!i9_objDV_GK_1.startDate := '2026-11-25'
!i9_objDV_GK_1.endDate := '2026-12-25'
!i9_objDV_GK_1.success := true
!insert (i9_objDV_GK_1, i9_pDV_GK) into TrainingObjectivePlayer

!new TrainingObjective('i9_objDV_MID_1')
!i9_objDV_MID_1.areaToImprove := 'Switching play under pressure'
!i9_objDV_MID_1.startDate := '2026-11-25'
!i9_objDV_MID_1.endDate := '2026-12-25'
!i9_objDV_MID_1.success := false
!insert (i9_objDV_MID_1, i9_pDV_MID) into TrainingObjectivePlayer

!new TrainingObjective('i9_objDV_FW_1')
!i9_objDV_FW_1.areaToImprove := 'Timing curved runs to stay onside'
!i9_objDV_FW_1.startDate := '2026-11-25'
!i9_objDV_FW_1.endDate := '2026-12-25'
!i9_objDV_FW_1.success := true
!insert (i9_objDV_FW_1, i9_pDV_FW) into TrainingObjectivePlayer

!new TrainingObjective('i9_objMR_GK_1')
!i9_objMR_GK_1.areaToImprove := 'Claiming crosses in traffic'
!i9_objMR_GK_1.startDate := '2026-11-25'
!i9_objMR_GK_1.endDate := '2026-12-25'
!i9_objMR_GK_1.success := false
!insert (i9_objMR_GK_1, i9_pMR_GK) into TrainingObjectivePlayer

!new TrainingObjective('i9_objMR_MID_1')
!i9_objMR_MID_1.areaToImprove := 'One-touch play to break pressure'
!i9_objMR_MID_1.startDate := '2026-11-25'
!i9_objMR_MID_1.endDate := '2026-12-25'
!i9_objMR_MID_1.success := true
!insert (i9_objMR_MID_1, i9_pMR_MID) into TrainingObjectivePlayer

!new TrainingObjective('i9_objMR_FW_1')
!i9_objMR_FW_1.areaToImprove := 'Finishing across the goalkeeper'
!i9_objMR_FW_1.startDate := '2026-11-25'
!i9_objMR_FW_1.endDate := '2026-12-25'
!i9_objMR_FW_1.success := false
!insert (i9_objMR_FW_1, i9_pMR_FW) into TrainingObjectivePlayer

!new TrainingFailedToAttend('i9_failHC_1')
!i9_failHC_1.reason := 'Migraine'
!insert (i9_tsHC_A_2, i9_failHC_1) into TrainingFailded
!insert (i9_failHC_1, i9_pHC_MID) into FailedPlayer

!new PlayerNotes('i9_pn1')
!i9_pn1.note := 'Strong in transitions; needs to reduce rushed passes when pressed from behind.'
!i9_pn1.date := '2026-12-02'
!insert (i9_pHC_MID, i9_pn1) into PlayerPlayerNotes

!new PlayerNotes('i9_pn2')
!i9_pn2.note := 'Good movement on counters; sometimes starts runs too early and drifts offside.'
!i9_pn2.date := '2026-12-02'
!insert (i9_pDV_FW, i9_pn2) into PlayerPlayerNotes

!new Match('i9_mCup_1')
!i9_mCup_1.date := '2026-12-05'
!i9_mCup_1.homeAway := true

!new Match('i9_mCup_2')
!i9_mCup_2.date := '2026-12-06'
!i9_mCup_2.homeAway := true

!insert (i9_compCup, i9_mCup_1) into CompetitionMatch
!insert (i9_compCup, i9_mCup_2) into CompetitionMatch

!insert (i9_teamHC_A, i9_mCup_1) into LocalMatch
!insert (i9_teamDV_A, i9_mCup_1) into VisitorMatch

!insert (i9_teamMR_A, i9_mCup_2) into LocalMatch
!insert (i9_teamHC_B, i9_mCup_2) into VisitorMatch

!new MatchReport('i9_mrCup_1')
!i9_mrCup_1.duration := 90
!i9_mrCup_1.scoreVisitor := 2
!i9_mrCup_1.scoreLocal := 0
!insert (i9_mCup_1, i9_mrCup_1) into MatchMatchReport

!new MatchReport('i9_mrCup_2')
!i9_mrCup_2.duration := 90
!i9_mrCup_2.scoreVisitor := 3
!i9_mrCup_2.scoreLocal := 3
!insert (i9_mCup_2, i9_mrCup_2) into MatchMatchReport

!new MatchEvent('i9_evCup1_goal1')
!i9_evCup1_goal1.eventType := #GOAL
!i9_evCup1_goal1.time := 31
!insert (i9_mCup_1, i9_evCup1_goal1) into MatchMatchEvent

!new MatchEvent('i9_evCup1_goal2')
!i9_evCup1_goal2.eventType := #GOAL
!i9_evCup1_goal2.time := 68
!insert (i9_mCup_1, i9_evCup1_goal2) into MatchMatchEvent

!new MatchEvent('i9_evCup1_foul1')
!i9_evCup1_foul1.eventType := #FOUL
!i9_evCup1_foul1.time := 44
!insert (i9_mCup_1, i9_evCup1_foul1) into MatchMatchEvent

!new MatchEvent('i9_evCup1_corner1')
!i9_evCup1_corner1.eventType := #CORNER
!i9_evCup1_corner1.time := 80
!insert (i9_mCup_1, i9_evCup1_corner1) into MatchMatchEvent

!new MatchEvent('i9_evCup2_goal1')
!i9_evCup2_goal1.eventType := #GOAL
!i9_evCup2_goal1.time := 5
!insert (i9_mCup_2, i9_evCup2_goal1) into MatchMatchEvent

!new MatchEvent('i9_evCup2_goal2')
!i9_evCup2_goal2.eventType := #GOAL
!i9_evCup2_goal2.time := 17
!insert (i9_mCup_2, i9_evCup2_goal2) into MatchMatchEvent

!new MatchEvent('i9_evCup2_goal3')
!i9_evCup2_goal3.eventType := #GOAL
!i9_evCup2_goal3.time := 39
!insert (i9_mCup_2, i9_evCup2_goal3) into MatchMatchEvent

!new MatchEvent('i9_evCup2_goal4')
!i9_evCup2_goal4.eventType := #GOAL
!i9_evCup2_goal4.time := 57
!insert (i9_mCup_2, i9_evCup2_goal4) into MatchMatchEvent

!new MatchEvent('i9_evCup2_goal5')
!i9_evCup2_goal5.eventType := #GOAL
!i9_evCup2_goal5.time := 73
!insert (i9_mCup_2, i9_evCup2_goal5) into MatchMatchEvent

!new MatchEvent('i9_evCup2_goal6')
!i9_evCup2_goal6.eventType := #GOAL
!i9_evCup2_goal6.time := 90
!insert (i9_mCup_2, i9_evCup2_goal6) into MatchMatchEvent

!new MatchEvent('i9_evCup2_off1')
!i9_evCup2_off1.eventType := #OFFSIDE
!i9_evCup2_off1.time := 62
!insert (i9_mCup_2, i9_evCup2_off1) into MatchMatchEvent

!new MatchEvent('i9_evCup2_pen1')
!i9_evCup2_pen1.eventType := #PENALTY
!i9_evCup2_pen1.time := 76
!insert (i9_mCup_2, i9_evCup2_pen1) into MatchMatchEvent

!new MatchNote('i9_mnCup1_1')
!i9_mnCup1_1.note := 'Daleside scored twice on counters; Hillcrest dominated spells but lacked cutting edge.'
!i9_mnCup1_1.date := '2026-12-05'
!insert (i9_mCup_1, i9_mnCup1_1) into MatchMatchNote

!new MatchNote('i9_mnCup2_1')
!i9_mnCup2_1.note := 'Six-goal thriller; both sides traded leads and a stoppage-time goal rescued a draw.'
!i9_mnCup2_1.date := '2026-12-06'
!insert (i9_mCup_2, i9_mnCup2_1) into MatchMatchNote

!new MatchPlayer('i9_mpCup1_HC_GK')
!i9_mpCup1_HC_GK.booked := false
!i9_mpCup1_HC_GK.goals := 0
!i9_mpCup1_HC_GK.rating := 6

!new MatchPlayer('i9_mpCup1_HC_FW')
!i9_mpCup1_HC_FW.booked := true
!i9_mpCup1_HC_FW.goals := 0
!i9_mpCup1_HC_FW.rating := 6

!new MatchPlayer('i9_mpCup1_DV_FW')
!i9_mpCup1_DV_FW.booked := false
!i9_mpCup1_DV_FW.goals := 2
!i9_mpCup1_DV_FW.rating := 8

!new MatchPlayer('i9_mpCup1_DV_MID')
!i9_mpCup1_DV_MID.booked := false
!i9_mpCup1_DV_MID.goals := 0
!i9_mpCup1_DV_MID.rating := 7

!insert (i9_mCup_1, i9_mpCup1_HC_GK) into MatchMatchPlayer
!insert (i9_mCup_1, i9_mpCup1_HC_FW) into MatchMatchPlayer
!insert (i9_mCup_1, i9_mpCup1_DV_FW) into MatchMatchPlayer
!insert (i9_mCup_1, i9_mpCup1_DV_MID) into MatchMatchPlayer

!insert (i9_pHC_GK, i9_mpCup1_HC_GK) into PlayerMatch
!insert (i9_pHC_FW, i9_mpCup1_HC_FW) into PlayerMatch
!insert (i9_pDV_FW, i9_mpCup1_DV_FW) into PlayerMatch
!insert (i9_pDV_MID, i9_mpCup1_DV_MID) into PlayerMatch

!new MatchPlayerPosition('i9_mppCup1_HC_GK')
!i9_mppCup1_HC_GK.positionName := #GOALKEEPER
!i9_mppCup1_HC_GK.number := 1
!insert (i9_mpCup1_HC_GK, i9_mppCup1_HC_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i9_mppCup1_HC_FW')
!i9_mppCup1_HC_FW.positionName := #FORWARD
!i9_mppCup1_HC_FW.number := 9
!insert (i9_mpCup1_HC_FW, i9_mppCup1_HC_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i9_mppCup1_DV_FW')
!i9_mppCup1_DV_FW.positionName := #FORWARD
!i9_mppCup1_DV_FW.number := 11
!insert (i9_mpCup1_DV_FW, i9_mppCup1_DV_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i9_mppCup1_DV_MID')
!i9_mppCup1_DV_MID.positionName := #MIDFIELDER
!i9_mppCup1_DV_MID.number := 8
!insert (i9_mpCup1_DV_MID, i9_mppCup1_DV_MID) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('i9_mpCup2_MR_GK')
!i9_mpCup2_MR_GK.booked := false
!i9_mpCup2_MR_GK.goals := 0
!i9_mpCup2_MR_GK.rating := 6

!new MatchPlayer('i9_mpCup2_MR_MID')
!i9_mpCup2_MR_MID.booked := true
!i9_mpCup2_MR_MID.goals := 1
!i9_mpCup2_MR_MID.rating := 7

!new MatchPlayer('i9_mpCup2_MR_FW')
!i9_mpCup2_MR_FW.booked := false
!i9_mpCup2_MR_FW.goals := 2
!i9_mpCup2_MR_FW.rating := 8

!new MatchPlayer('i9_mpCup2_HC21_GK')
!i9_mpCup2_HC21_GK.booked := false
!i9_mpCup2_HC21_GK.goals := 0
!i9_mpCup2_HC21_GK.rating := 6

!new MatchPlayer('i9_mpCup2_HC21_FW')
!i9_mpCup2_HC21_FW.booked := true
!i9_mpCup2_HC21_FW.goals := 3
!i9_mpCup2_HC21_FW.rating := 8

!insert (i9_mCup_2, i9_mpCup2_MR_GK) into MatchMatchPlayer
!insert (i9_mCup_2, i9_mpCup2_MR_MID) into MatchMatchPlayer
!insert (i9_mCup_2, i9_mpCup2_MR_FW) into MatchMatchPlayer
!insert (i9_mCup_2, i9_mpCup2_HC21_GK) into MatchMatchPlayer
!insert (i9_mCup_2, i9_mpCup2_HC21_FW) into MatchMatchPlayer

!insert (i9_pMR_GK, i9_mpCup2_MR_GK) into PlayerMatch
!insert (i9_pMR_MID, i9_mpCup2_MR_MID) into PlayerMatch
!insert (i9_pMR_FW, i9_mpCup2_MR_FW) into PlayerMatch
!insert (i9_pHC21_GK, i9_mpCup2_HC21_GK) into PlayerMatch
!insert (i9_pHC21_FW, i9_mpCup2_HC21_FW) into PlayerMatch

!new MatchPlayerPosition('i9_mppCup2_MR_GK')
!i9_mppCup2_MR_GK.positionName := #GOALKEEPER
!i9_mppCup2_MR_GK.number := 1
!insert (i9_mpCup2_MR_GK, i9_mppCup2_MR_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i9_mppCup2_MR_MID')
!i9_mppCup2_MR_MID.positionName := #MIDFIELDER
!i8_mppCup2_MR_MID := i9_mppCup2_MR_MID
!i9_mppCup2_MR_MID.number := 8
!insert (i9_mpCup2_MR_MID, i9_mppCup2_MR_MID) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i9_mppCup2_MR_FW')
!i9_mppCup2_MR_FW.positionName := #FORWARD
!i9_mppCup2_MR_FW.number := 9
!insert (i9_mpCup2_MR_FW, i9_mppCup2_MR_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i9_mppCup2_HC21_GK')
!i9_mppCup2_HC21_GK.positionName := #GOALKEEPER
!i9_mppCup2_HC21_GK.number := 1
!insert (i9_mpCup2_HC21_GK, i9_mppCup2_HC21_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i9_mppCup2_HC21_FW')
!i9_mppCup2_HC21_FW.positionName := #FORWARD
!i9_mppCup2_HC21_FW.number := 10
!insert (i9_mpCup2_HC21_FW, i9_mppCup2_HC21_FW) into MatchPlayerMatchPlayerPosition
```
## Generation 18 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 442 | 0.00% |
| Multiplicities Errors | 0 | 106 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 40 | 0.00% |

# Generation 19
```
!new Club('i10_clubFH')
!i10_clubFH.name := 'Fairhaven FC'
!i10_clubFH.homeGround := 'Harbourgate Stadium'
!i10_clubFH.chairman := 'Elaine Porter'

!new Club('i10_clubCB')
!i10_clubCB.name := 'Crestbrook Athletic'
!i10_clubCB.homeGround := 'Crestbrook Field'
!i10_clubCB.chairman := 'Darius Coleman'

!new Team('i10_teamFH_A')
!i10_teamFH_A.name := 'Fairhaven First Team'

!new Team('i10_teamFH_B')
!i10_teamFH_B.name := 'Fairhaven Second Team'

!new Team('i10_teamCB_A')
!i10_teamCB_A.name := 'Crestbrook First Team'

!new Team('i10_teamCB_B')
!i10_teamCB_B.name := 'Crestbrook Development Team'

!insert (i10_clubFH, i10_teamFH_A) into ClubTeam
!insert (i10_clubFH, i10_teamFH_B) into ClubTeam
!insert (i10_clubCB, i10_teamCB_A) into ClubTeam
!insert (i10_clubCB, i10_teamCB_B) into ClubTeam

!new Competition('i10_compLeague')
!i10_compLeague.name := 'Coastal League'
!i10_compLeague.type := 'League'

!new Competition('i10_compCup')
!i10_compCup.name := 'Midweek Cup'
!i10_compCup.type := 'Knockout'

!new TrainingSession('i10_tsFH_A_1')
!i10_tsFH_A_1.date := '2026-12-10'
!i10_tsFH_A_1.location := 'Harbourgate Stadium - Pitch 2'
!i10_tsFH_A_1.purpose := 'Build-up under pressure and exit routes'

!new TrainingSession('i10_tsFH_B_1')
!i10_tsFH_B_1.date := '2026-12-11'
!i10_tsFH_B_1.location := 'Harbourgate Stadium - Pitch 3'
!i10_tsFH_B_1.purpose := 'Finishing and attacking transitions'

!new TrainingSession('i10_tsCB_A_1')
!i10_tsCB_A_1.date := '2026-12-10'
!i10_tsCB_A_1.location := 'Crestbrook Field - Main Pitch'
!i10_tsCB_A_1.purpose := 'Mid-block organisation and counterattacks'

!new TrainingSession('i10_tsCB_B_1')
!i10_tsCB_B_1.date := '2026-12-12'
!i10_tsCB_B_1.location := 'Crestbrook Field - Training Pitch'
!i10_tsCB_B_1.purpose := 'Defending set pieces and second balls'

!insert (i10_teamFH_A, i10_tsFH_A_1) into TeamTraining
!insert (i10_teamFH_B, i10_tsFH_B_1) into TeamTraining
!insert (i10_teamCB_A, i10_tsCB_A_1) into TeamTraining
!insert (i10_teamCB_B, i10_tsCB_B_1) into TeamTraining

!new TrainingNotes('i10_tnFH_A_1a')
!i10_tnFH_A_1a.note := 'Exit routes improved; pivot must offer earlier support to centre backs.'
!i10_tnFH_A_1a.date := '2026-12-10'
!insert (i10_tsFH_A_1, i10_tnFH_A_1a) into TrainingTrainingNotes

!new TrainingNotes('i10_tnFH_B_1a')
!i10_tnFH_B_1a.note := 'Good transition speed; finishing needs calmer final action.'
!i10_tnFH_B_1a.date := '2026-12-11'
!insert (i10_tsFH_B_1, i10_tnFH_B_1a) into TrainingTrainingNotes

!new TrainingNotes('i10_tnCB_A_1a')
!i10_tnCB_A_1a.note := 'Block compact; first pass after regain was inconsistent.'
!i10_tnCB_A_1a.date := '2026-12-10'
!insert (i10_tsCB_A_1, i10_tnCB_A_1a) into TrainingTrainingNotes

!new TrainingNotes('i10_tnCB_B_1a')
!i10_tnCB_B_1a.note := 'Set-piece assignments clear; react faster to the second phase after clearances.'
!i10_tnCB_B_1a.date := '2026-12-12'
!insert (i10_tsCB_B_1, i10_tnCB_B_1a) into TrainingTrainingNotes

!new Player('i10_pFH_A_GK')
!i10_pFH_A_GK.name := 'Oliver Grant'
!i10_pFH_A_GK.age := 31
!i10_pFH_A_GK.bestFoot := #RIGHT
!i10_pFH_A_GK.phoneNumber := '+44 7700 811001'

!new Player('i10_pFH_A_MID')
!i10_pFH_A_MID.name := 'Ibrahim Saleh'
!i10_pFH_A_MID.age := 24
!i10_pFH_A_MID.bestFoot := #BOTH
!i10_pFH_A_MID.phoneNumber := '+44 7700 811002'

!new Player('i10_pFH_B_DEF')
!i10_pFH_B_DEF.name := 'Mason Reed'
!i10_pFH_B_DEF.age := 22
!i10_pFH_B_DEF.bestFoot := #LEFT
!i10_pFH_B_DEF.phoneNumber := '+44 7700 812001'

!new Player('i10_pFH_B_FW')
!i10_pFH_B_FW.name := 'Rui Santos'
!i10_pFH_B_FW.age := 20
!i10_pFH_B_FW.bestFoot := #RIGHT
!i10_pFH_B_FW.phoneNumber := '+44 7700 812002'

!new Player('i10_pCB_A_GK')
!i10_pCB_A_GK.name := 'Nathan Ivers'
!i10_pCB_A_GK.age := 29
!i10_pCB_A_GK.bestFoot := #LEFT
!i10_pCB_A_GK.phoneNumber := '+44 7700 821001'

!new Player('i10_pCB_A_FW')
!i10_pCB_A_FW.name := 'Hugo Moretti'
!i10_pCB_A_FW.age := 25
!i10_pCB_A_FW.bestFoot := #BOTH
!i10_pCB_A_FW.phoneNumber := '+44 7700 821002'

!new Player('i10_pCB_B_MID')
!i10_pCB_B_MID.name := 'Kaito Watanabe'
!i10_pCB_B_MID.age := 19
!i10_pCB_B_MID.bestFoot := #RIGHT
!i10_pCB_B_MID.phoneNumber := '+44 7700 822001'

!new Player('i10_pCB_B_DEF')
!i10_pCB_B_DEF.name := 'Jonas Keller'
!i10_pCB_B_DEF.age := 21
!i10_pCB_B_DEF.bestFoot := #RIGHT
!i10_pCB_B_DEF.phoneNumber := '+44 7700 822002'

!insert (i10_teamFH_A, i10_pFH_A_GK) into TeamPlayer
!insert (i10_teamFH_A, i10_pFH_A_MID) into TeamPlayer
!insert (i10_teamFH_B, i10_pFH_B_DEF) into TeamPlayer
!insert (i10_teamFH_B, i10_pFH_B_FW) into TeamPlayer
!insert (i10_teamCB_A, i10_pCB_A_GK) into TeamPlayer
!insert (i10_teamCB_A, i10_pCB_A_FW) into TeamPlayer
!insert (i10_teamCB_B, i10_pCB_B_MID) into TeamPlayer
!insert (i10_teamCB_B, i10_pCB_B_DEF) into TeamPlayer

!new Position('i10_posFH_A_GK')
!i10_posFH_A_GK.positionName := #GOALKEEPER
!insert (i10_pFH_A_GK, i10_posFH_A_GK) into PlayerPositions

!new Position('i10_posFH_A_MID_1')
!i10_posFH_A_MID_1.positionName := #MIDFIELDER
!insert (i10_pFH_A_MID, i10_posFH_A_MID_1) into PlayerPositions

!new Position('i10_posFH_A_MID_2')
!i10_posFH_A_MID_2.positionName := #FORWARD
!insert (i10_pFH_A_MID, i10_posFH_A_MID_2) into PlayerPositions

!new Position('i10_posFH_B_DEF_1')
!i10_posFH_B_DEF_1.positionName := #DEFENDER
!insert (i10_pFH_B_DEF, i10_posFH_B_DEF_1) into PlayerPositions

!new Position('i10_posFH_B_DEF_2')
!i10_posFH_B_DEF_2.positionName := #MIDFIELDER
!insert (i10_pFH_B_DEF, i10_posFH_B_DEF_2) into PlayerPositions

!new Position('i10_posFH_B_FW')
!i10_posFH_B_FW.positionName := #FORWARD
!insert (i10_pFH_B_FW, i10_posFH_B_FW) into PlayerPositions

!new Position('i10_posCB_A_GK')
!i10_posCB_A_GK.positionName := #GOALKEEPER
!insert (i10_pCB_A_GK, i10_posCB_A_GK) into PlayerPositions

!new Position('i10_posCB_A_FW_1')
!i10_posCB_A_FW_1.positionName := #FORWARD
!insert (i10_pCB_A_FW, i10_posCB_A_FW_1) into PlayerPositions

!new Position('i10_posCB_A_FW_2')
!i10_posCB_A_FW_2.positionName := #MIDFIELDER
!insert (i10_pCB_A_FW, i10_posCB_A_FW_2) into PlayerPositions

!new Position('i10_posCB_B_MID')
!i10_posCB_B_MID.positionName := #MIDFIELDER
!insert (i10_pCB_B_MID, i10_posCB_B_MID) into PlayerPositions

!new Position('i10_posCB_B_DEF')
!i10_posCB_B_DEF.positionName := #DEFENDER
!insert (i10_pCB_B_DEF, i10_posCB_B_DEF) into PlayerPositions

!new TrainingObjective('i10_objFH_A_GK_1')
!i10_objFH_A_GK_1.areaToImprove := 'Claiming crosses under pressure'
!i10_objFH_A_GK_1.startDate := '2026-12-01'
!i10_objFH_A_GK_1.endDate := '2027-01-01'
!i10_objFH_A_GK_1.success := false
!insert (i10_objFH_A_GK_1, i10_pFH_A_GK) into TrainingObjectivePlayer

!new TrainingObjective('i10_objFH_A_MID_1')
!i10_objFH_A_MID_1.areaToImprove := 'Playing forward quickly after regain'
!i10_objFH_A_MID_1.startDate := '2026-12-01'
!i10_objFH_A_MID_1.endDate := '2027-01-01'
!i10_objFH_A_MID_1.success := true
!insert (i10_objFH_A_MID_1, i10_pFH_A_MID) into TrainingObjectivePlayer

!new TrainingObjective('i10_objFH_B_DEF_1')
!i10_objFH_B_DEF_1.areaToImprove := 'Back-post marking on crosses'
!i10_objFH_B_DEF_1.startDate := '2026-12-01'
!i10_objFH_B_DEF_1.endDate := '2027-01-01'
!i10_objFH_B_DEF_1.success := false
!insert (i10_objFH_B_DEF_1, i10_pFH_B_DEF) into TrainingObjectivePlayer

!new TrainingObjective('i10_objFH_B_FW_1')
!i10_objFH_B_FW_1.areaToImprove := 'Composure finishing from cut-backs'
!i10_objFH_B_FW_1.startDate := '2026-12-01'
!i10_objFH_B_FW_1.endDate := '2027-01-01'
!i10_objFH_B_FW_1.success := false
!insert (i10_objFH_B_FW_1, i10_pFH_B_FW) into TrainingObjectivePlayer

!new TrainingObjective('i10_objCB_A_GK_1')
!i10_objCB_A_GK_1.areaToImprove := 'Distribution speed after saves'
!i10_objCB_A_GK_1.startDate := '2026-12-01'
!i10_objCB_A_GK_1.endDate := '2027-01-01'
!i10_objCB_A_GK_1.success := true
!insert (i10_objCB_A_GK_1, i10_pCB_A_GK) into TrainingObjectivePlayer

!new TrainingObjective('i10_objCB_A_FW_1')
!i10_objCB_A_FW_1.areaToImprove := 'Curved runs to stay onside'
!i10_objCB_A_FW_1.startDate := '2026-12-01'
!i10_objCB_A_FW_1.endDate := '2027-01-01'
!i10_objCB_A_FW_1.success := true
!insert (i10_objCB_A_FW_1, i10_pCB_A_FW) into TrainingObjectivePlayer

!new TrainingObjective('i10_objCB_B_MID_1')
!i10_objCB_B_MID_1.areaToImprove := 'Scanning before receiving'
!i10_objCB_B_MID_1.startDate := '2026-12-01'
!i10_objCB_B_MID_1.endDate := '2027-01-01'
!i10_objCB_B_MID_1.success := false
!insert (i10_objCB_B_MID_1, i10_pCB_B_MID) into TrainingObjectivePlayer

!new TrainingObjective('i10_objCB_B_DEF_1')
!i10_objCB_B_DEF_1.areaToImprove := 'Defending second balls after set pieces'
!i10_objCB_B_DEF_1.startDate := '2026-12-01'
!i10_objCB_B_DEF_1.endDate := '2027-01-01'
!i10_objCB_B_DEF_1.success := true
!insert (i10_objCB_B_DEF_1, i10_pCB_B_DEF) into TrainingObjectivePlayer

!new PlayerNotes('i10_pn1')
!i10_pn1.note := 'Reliable in games; needs to be louder organising defenders.'
!i10_pn1.date := '2026-12-12'
!insert (i10_pFH_A_GK, i10_pn1) into PlayerPlayerNotes

!new PlayerNotes('i10_pn2')
!i10_pn2.note := 'Very direct runner; can improve decision-making when isolated.'
!i10_pn2.date := '2026-12-12'
!insert (i10_pCB_A_FW, i10_pn2) into PlayerPlayerNotes

!new TrainingFailedToAttend('i10_fail1')
!i10_fail1.reason := 'Work commitment'
!insert (i10_tsCB_B_1, i10_fail1) into TrainingFailded
!insert (i10_fail1, i10_pCB_B_DEF) into FailedPlayer

!new TrainingFailedToAttend('i10_fail2')
!i10_fail2.reason := 'Illness'
!insert (i10_tsFH_B_1, i10_fail2) into TrainingFailded
!insert (i10_fail2, i10_pFH_B_FW) into FailedPlayer

!new Match('i10_matchL1')
!i10_matchL1.date := '2026-12-18'
!i10_matchL1.homeAway := true

!new Match('i10_matchC1')
!i10_matchC1.date := '2026-12-19'
!i10_matchC1.homeAway := false

!insert (i10_compLeague, i10_matchL1) into CompetitionMatch
!insert (i10_compCup, i10_matchC1) into CompetitionMatch

!insert (i10_teamFH_A, i10_matchL1) into LocalMatch
!insert (i10_teamCB_A, i10_matchL1) into VisitorMatch

!insert (i10_teamCB_B, i10_matchC1) into LocalMatch
!insert (i10_teamFH_B, i10_matchC1) into VisitorMatch

!new MatchReport('i10_mrL1')
!i10_mrL1.duration := 90
!i10_mrL1.scoreVisitor := 0
!i10_mrL1.scoreLocal := 1
!insert (i10_matchL1, i10_mrL1) into MatchMatchReport

!new MatchReport('i10_mrC1')
!i10_mrC1.duration := 90
!i10_mrC1.scoreVisitor := 2
!i10_mrC1.scoreLocal := 2
!insert (i10_matchC1, i10_mrC1) into MatchMatchReport

!new MatchEvent('i10_evL1_goal1')
!i10_evL1_goal1.eventType := #GOAL
!i10_evL1_goal1.time := 71
!insert (i10_matchL1, i10_evL1_goal1) into MatchMatchEvent

!new MatchEvent('i10_evL1_foul')
!i10_evL1_foul.eventType := #FOUL
!i10_evL1_foul.time := 33
!insert (i10_matchL1, i10_evL1_foul) into MatchMatchEvent

!new MatchEvent('i10_evL1_corner')
!i10_evL1_corner.eventType := #CORNER
!i10_evL1_corner.time := 58
!insert (i10_matchL1, i10_evL1_corner) into MatchMatchEvent

!new MatchEvent('i10_evC1_goal1')
!i10_evC1_goal1.eventType := #GOAL
!i10_evC1_goal1.time := 9
!insert (i10_matchC1, i10_evC1_goal1) into MatchMatchEvent

!new MatchEvent('i10_evC1_goal2')
!i10_evC1_goal2.eventType := #GOAL
!i10_evC1_goal2.time := 31
!insert (i10_matchC1, i10_evC1_goal2) into MatchMatchEvent

!new MatchEvent('i10_evC1_goal3')
!i10_evC1_goal3.eventType := #GOAL
!i10_evC1_goal3.time := 64
!insert (i10_matchC1, i10_evC1_goal3) into MatchMatchEvent

!new MatchEvent('i10_evC1_goal4')
!i10_evC1_goal4.eventType := #GOAL
!i10_evC1_goal4.time := 86
!insert (i10_matchC1, i10_evC1_goal4) into MatchMatchEvent

!new MatchEvent('i10_evC1_off')
!i10_evC1_off.eventType := #OFFSIDE
!i10_evC1_off.time := 48
!insert (i10_matchC1, i10_evC1_off) into MatchMatchEvent

!new MatchEvent('i10_evC1_pen')
!i10_evC1_pen.eventType := #PENALTY
!i10_evC1_pen.time := 79
!insert (i10_matchC1, i10_evC1_pen) into MatchMatchEvent

!new MatchNote('i10_mnL1')
!i10_mnL1.note := 'Tight league match decided by a late finish; visitors created few clear chances.'
!i10_mnL1.date := '2026-12-18'
!insert (i10_matchL1, i10_mnL1) into MatchMatchNote

!new MatchNote('i10_mnC1')
!i10_mnC1.note := 'Open cup tie with four goals; end-to-end second half and a missed penalty chance late on.'
!i10_mnC1.date := '2026-12-19'
!insert (i10_matchC1, i10_mnC1) into MatchMatchNote

!new MatchPlayer('i10_mpL1_FH_GK')
!i10_mpL1_FH_GK.booked := false
!i10_mpL1_FH_GK.goals := 0
!i10_mpL1_FH_GK.rating := 7

!new MatchPlayer('i10_mpL1_FH_MID')
!i10_mpL1_FH_MID.booked := false
!i10_mpL1_FH_MID.goals := 0
!i10_mpL1_FH_MID.rating := 7

!new MatchPlayer('i10_mpL1_CB_GK')
!i10_mpL1_CB_GK.booked := false
!i10_mpL1_CB_GK.goals := 0
!i10_mpL1_CB_GK.rating := 6

!new MatchPlayer('i10_mpL1_CB_FW')
!i10_mpL1_CB_FW.booked := true
!i10_mpL1_CB_FW.goals := 0
!i10_mpL1_CB_FW.rating := 6

!insert (i10_matchL1, i10_mpL1_FH_GK) into MatchMatchPlayer
!insert (i10_matchL1, i10_mpL1_FH_MID) into MatchMatchPlayer
!insert (i10_matchL1, i10_mpL1_CB_GK) into MatchMatchPlayer
!insert (i10_matchL1, i10_mpL1_CB_FW) into MatchMatchPlayer

!insert (i10_pFH_A_GK, i10_mpL1_FH_GK) into PlayerMatch
!insert (i10_pFH_A_MID, i10_mpL1_FH_MID) into PlayerMatch
!insert (i10_pCB_A_GK, i10_mpL1_CB_GK) into PlayerMatch
!insert (i10_pCB_A_FW, i10_mpL1_CB_FW) into PlayerMatch

!new MatchPlayerPosition('i10_mppL1_FH_GK')
!i10_mppL1_FH_GK.positionName := #GOALKEEPER
!i10_mppL1_FH_GK.number := 1
!insert (i10_mpL1_FH_GK, i10_mppL1_FH_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i10_mppL1_FH_MID')
!i10_mppL1_FH_MID.positionName := #MIDFIELDER
!i10_mppL1_FH_MID.number := 8
!insert (i10_mpL1_FH_MID, i10_mppL1_FH_MID) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i10_mppL1_CB_GK')
!i10_mppL1_CB_GK.positionName := #GOALKEEPER
!i10_mppL1_CB_GK.number := 1
!insert (i10_mpL1_CB_GK, i10_mppL1_CB_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i10_mppL1_CB_FW')
!i10_mppL1_CB_FW.positionName := #FORWARD
!i10_mppL1_CB_FW.number := 9
!insert (i10_mpL1_CB_FW, i10_mppL1_CB_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('i10_mpC1_CB_MID')
!i10_mpC1_CB_MID.booked := true
!i10_mpC1_CB_MID.goals := 1
!i10_mpC1_CB_MID.rating := 7

!new MatchPlayer('i10_mpC1_CB_DEF')
!i10_mpC1_CB_DEF.booked := false
!i10_mpC1_CB_DEF.goals := 1
!i10_mpC1_CB_DEF.rating := 7

!new MatchPlayer('i10_mpC1_FH_DEF')
!i10_mpC1_FH_DEF.booked := true
!i10_mpC1_FH_DEF.goals := 0
!i10_mpC1_FH_DEF.rating := 6

!new MatchPlayer('i10_mpC1_FH_FW')
!i10_mpC1_FH_FW.booked := false
!i10_mpC1_FH_FW.goals := 2
!i10_mpC1_FH_FW.rating := 8

!insert (i10_matchC1, i10_mpC1_CB_MID) into MatchMatchPlayer
!insert (i10_matchC1, i10_mpC1_CB_DEF) into MatchMatchPlayer
!insert (i10_matchC1, i10_mpC1_FH_DEF) into MatchMatchPlayer
!insert (i10_matchC1, i10_mpC1_FH_FW) into MatchMatchPlayer

!insert (i10_pCB_B_MID, i10_mpC1_CB_MID) into PlayerMatch
!insert (i10_pCB_B_DEF, i10_mpC1_CB_DEF) into PlayerMatch
!insert (i10_pFH_B_DEF, i10_mpC1_FH_DEF) into PlayerMatch
!insert (i10_pFH_B_FW, i10_mpC1_FH_FW) into PlayerMatch

!new MatchPlayerPosition('i10_mppC1_CB_MID')
!i10_mppC1_CB_MID.positionName := #MIDFIELDER
!i10_mppC1_CB_MID.number := 8
!insert (i10_mpC1_CB_MID, i10_mppC1_CB_MID) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i10_mppC1_CB_DEF')
!i10_mppC1_CB_DEF.positionName := #DEFENDER
!i10_mppC1_CB_DEF.number := 4
!insert (i10_mpC1_CB_DEF, i10_mppC1_CB_DEF) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i10_mppC1_FH_DEF')
!i10_mppC1_FH_DEF.positionName := #DEFENDER
!i10_mppC1_FH_DEF.number := 5
!insert (i10_mpC1_FH_DEF, i10_mppC1_FH_DEF) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i10_mppC1_FH_FW')
!i10_mppC1_FH_FW.positionName := #FORWARD
!i10_mppC1_FH_FW.number := 11
!insert (i10_mpC1_FH_FW, i10_mppC1_FH_FW) into MatchPlayerMatchPlayerPosition
```
## Generation 19 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 353 | 0.00% |
| Multiplicities Errors | 0 | 88 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 30 | 0.00% |

# Generation 20
```
!new Club('i11_clubEM')
!i11_clubEM.name := 'Eastmoor FC'
!i11_clubEM.homeGround := 'Eastmoor Lane'
!i11_clubEM.chairman := 'Helen Crawford'

!new Club('i11_clubLF')
!i11_clubLF.name := 'Lindenfield Athletic'
!i11_clubLF.homeGround := 'Lindenfield Recreation Ground'
!i11_clubLF.chairman := 'Sameer Iqbal'

!new Team('i11_teamEM1')
!i11_teamEM1.name := 'Eastmoor First XI'

!new Team('i11_teamLF1')
!i11_teamLF1.name := 'Lindenfield First XI'

!insert (i11_clubEM, i11_teamEM1) into ClubTeam
!insert (i11_clubLF, i11_teamLF1) into ClubTeam

!new Competition('i11_compFloodlit')
!i11_compFloodlit.name := 'Floodlit Winter League'
!i11_compFloodlit.type := 'League'

!new TrainingSession('i11_tsEM_1')
!i11_tsEM_1.date := '2027-01-06'
!i11_tsEM_1.location := 'Eastmoor Lane - Pitch 2'
!i11_tsEM_1.purpose := 'Defensive shape and compact mid-block'

!new TrainingSession('i11_tsLF_1')
!i11_tsLF_1.date := '2027-01-06'
!i11_tsLF_1.location := 'Lindenfield Recreation Ground - Main Pitch'
!i11_tsLF_1.purpose := 'Build-up play under pressure'

!insert (i11_teamEM1, i11_tsEM_1) into TeamTraining
!insert (i11_teamLF1, i11_tsLF_1) into TeamTraining

!new TrainingNotes('i11_tnEM_1a')
!i11_tnEM_1a.note := 'Distances between lines were good; need quicker outlet after regain.'
!i11_tnEM_1a.date := '2027-01-06'
!insert (i11_tsEM_1, i11_tnEM_1a) into TrainingTrainingNotes

!new TrainingNotes('i11_tnLF_1a')
!i11_tnLF_1a.note := 'Better rotations in midfield; avoid forcing passes into central congestion.'
!i11_tnLF_1a.date := '2027-01-06'
!insert (i11_tsLF_1, i11_tnLF_1a) into TrainingTrainingNotes

!new Player('i11_pEM_GK')
!i11_pEM_GK.name := 'Ben Harrington'
!i11_pEM_GK.age := 30
!i11_pEM_GK.bestFoot := #RIGHT
!i11_pEM_GK.phoneNumber := '+44 7700 141001'

!new Player('i11_pEM_DEF')
!i11_pEM_DEF.name := 'Kieran Doyle'
!i11_pEM_DEF.age := 25
!i11_pEM_DEF.bestFoot := #BOTH
!i11_pEM_DEF.phoneNumber := '+44 7700 141002'

!new Player('i11_pEM_MID')
!i11_pEM_MID.name := 'Tomas Kral'
!i11_pEM_MID.age := 23
!i11_pEM_MID.bestFoot := #LEFT
!i11_pEM_MID.phoneNumber := '+44 7700 141003'

!new Player('i11_pLF_GK')
!i11_pLF_GK.name := 'Arman Velez'
!i11_pLF_GK.age := 28
!i11_pLF_GK.bestFoot := #LEFT
!i11_pLF_GK.phoneNumber := '+44 7700 142001'

!new Player('i11_pLF_MID')
!i11_pLF_MID.name := 'Yusuf Khan'
!i11_pLF_MID.age := 24
!i11_pLF_MID.bestFoot := #RIGHT
!i11_pLF_MID.phoneNumber := '+44 7700 142002'

!new Player('i11_pLF_FW')
!i11_pLF_FW.name := 'Luca Moretti'
!i11_pLF_FW.age := 22
!i11_pLF_FW.bestFoot := #BOTH
!i11_pLF_FW.phoneNumber := '+44 7700 142003'

!insert (i11_teamEM1, i11_pEM_GK) into TeamPlayer
!insert (i11_teamEM1, i11_pEM_DEF) into TeamPlayer
!insert (i11_teamEM1, i11_pEM_MID) into TeamPlayer
!insert (i11_teamLF1, i11_pLF_GK) into TeamPlayer
!insert (i11_teamLF1, i11_pLF_MID) into TeamPlayer
!insert (i11_teamLF1, i11_pLF_FW) into TeamPlayer

!new Position('i11_posEM_GK')
!i11_posEM_GK.positionName := #GOALKEEPER
!insert (i11_pEM_GK, i11_posEM_GK) into PlayerPositions

!new Position('i11_posEM_DEF_1')
!i11_posEM_DEF_1.positionName := #DEFENDER
!insert (i11_pEM_DEF, i11_posEM_DEF_1) into PlayerPositions

!new Position('i11_posEM_DEF_2')
!i11_posEM_DEF_2.positionName := #MIDFIELDER
!insert (i11_pEM_DEF, i11_posEM_DEF_2) into PlayerPositions

!new Position('i11_posEM_MID')
!i11_posEM_MID.positionName := #MIDFIELDER
!insert (i11_pEM_MID, i11_posEM_MID) into PlayerPositions

!new Position('i11_posLF_GK')
!i11_posLF_GK.positionName := #GOALKEEPER
!insert (i11_pLF_GK, i11_posLF_GK) into PlayerPositions

!new Position('i11_posLF_MID')
!i11_posLF_MID.positionName := #MIDFIELDER
!insert (i11_pLF_MID, i11_posLF_MID) into PlayerPositions

!new Position('i11_posLF_MID_alt')
!i11_posLF_MID_alt.positionName := #DEFENDER
!insert (i11_pLF_MID, i11_posLF_MID_alt) into PlayerPositions

!new Position('i11_posLF_FW')
!i11_posLF_FW.positionName := #FORWARD
!insert (i11_pLF_FW, i11_posLF_FW) into PlayerPositions

!new Position('i11_posLF_FW_alt')
!i11_posLF_FW_alt.positionName := #MIDFIELDER
!insert (i11_pLF_FW, i11_posLF_FW_alt) into PlayerPositions

!new TrainingObjective('i11_objEM_GK_1')
!i11_objEM_GK_1.areaToImprove := 'Communication and claiming crosses'
!i11_objEM_GK_1.startDate := '2027-01-01'
!i11_objEM_GK_1.endDate := '2027-02-01'
!i11_objEM_GK_1.success := false
!insert (i11_objEM_GK_1, i11_pEM_GK) into TrainingObjectivePlayer

!new TrainingObjective('i11_objEM_DEF_1')
!i11_objEM_DEF_1.areaToImprove := 'Passing out under pressure'
!i11_objEM_DEF_1.startDate := '2027-01-01'
!i11_objEM_DEF_1.endDate := '2027-02-01'
!i11_objEM_DEF_1.success := true
!insert (i11_objEM_DEF_1, i11_pEM_DEF) into TrainingObjectivePlayer

!new TrainingObjective('i11_objEM_MID_1')
!i11_objEM_MID_1.areaToImprove := 'Scanning before receiving'
!i11_objEM_MID_1.startDate := '2027-01-01'
!i11_objEM_MID_1.endDate := '2027-02-01'
!i11_objEM_MID_1.success := false
!insert (i11_objEM_MID_1, i11_pEM_MID) into TrainingObjectivePlayer

!new TrainingObjective('i11_objLF_GK_1')
!i11_objLF_GK_1.areaToImprove := 'Distribution speed to start counters'
!i11_objLF_GK_1.startDate := '2027-01-01'
!i11_objLF_GK_1.endDate := '2027-02-01'
!i11_objLF_GK_1.success := true
!insert (i11_objLF_GK_1, i11_pLF_GK) into TrainingObjectivePlayer

!new TrainingObjective('i11_objLF_MID_1')
!i11_objLF_MID_1.areaToImprove := 'Receiving on the half-turn under pressure'
!i11_objLF_MID_1.startDate := '2027-01-01'
!i11_objLF_MID_1.endDate := '2027-02-01'
!i11_objLF_MID_1.success := false
!insert (i11_objLF_MID_1, i11_pLF_MID) into TrainingObjectivePlayer

!new TrainingObjective('i11_objLF_FW_1')
!i11_objLF_FW_1.areaToImprove := 'Hold-up play and linking midfield'
!i11_objLF_FW_1.startDate := '2027-01-01'
!i11_objLF_FW_1.endDate := '2027-02-01'
!i11_objLF_FW_1.success := false
!insert (i11_objLF_FW_1, i11_pLF_FW) into TrainingObjectivePlayer

!new PlayerNotes('i11_pnEM1')
!i11_pnEM1.note := 'Consistent shot-stopper; needs to command the box louder on set pieces.'
!i11_pnEM1.date := '2027-01-07'
!insert (i11_pEM_GK, i11_pnEM1) into PlayerPlayerNotes

!new PlayerNotes('i11_pnLF1')
!i11_pnLF1.note := 'Good link-up play; must time runs better to avoid offsides.'
!i11_pnLF1.date := '2027-01-07'
!insert (i11_pLF_FW, i11_pnLF1) into PlayerPlayerNotes

!new TrainingFailedToAttend('i11_tfaLF1')
!i11_tfaLF1.reason := 'Minor groin tightness'
!insert (i11_tsLF_1, i11_tfaLF1) into TrainingFailded
!insert (i11_tfaLF1, i11_pLF_MID) into FailedPlayer

!new Match('i11_match1')
!i11_match1.date := '2027-01-10'
!i11_match1.homeAway := true

!insert (i11_compFloodlit, i11_match1) into CompetitionMatch
!insert (i11_teamEM1, i11_match1) into LocalMatch
!insert (i11_teamLF1, i11_match1) into VisitorMatch

!new MatchReport('i11_mr1')
!i11_mr1.duration := 90
!i11_mr1.scoreVisitor := 0
!i11_mr1.scoreLocal := 0
!insert (i11_match1, i11_mr1) into MatchMatchReport

!new MatchEvent('i11_mev1_foul')
!i11_mev1_foul.eventType := #FOUL
!i11_mev1_foul.time := 26
!insert (i11_match1, i11_mev1_foul) into MatchMatchEvent

!new MatchEvent('i11_mev1_pen')
!i11_mev1_pen.eventType := #PENALTY
!i11_mev1_pen.time := 61
!insert (i11_match1, i11_mev1_pen) into MatchMatchEvent

!new MatchEvent('i11_mev1_off')
!i11_mev1_off.eventType := #OFFSIDE
!i11_mev1_off.time := 73
!insert (i11_match1, i11_mev1_off) into MatchMatchEvent

!new MatchEvent('i11_mev1_cor')
!i11_mev1_cor.eventType := #CORNER
!i11_mev1_cor.time := 88
!insert (i11_match1, i11_mev1_cor) into MatchMatchEvent

!new MatchNote('i11_mn1')
!i11_mn1.note := 'Tense match with few chances; penalty incident did not change the scoreline.'
!i11_mn1.date := '2027-01-10'
!insert (i11_match1, i11_mn1) into MatchMatchNote

!new MatchPlayer('i11_mp1_EM_GK')
!i11_mp1_EM_GK.booked := false
!i11_mp1_EM_GK.goals := 0
!i11_mp1_EM_GK.rating := 8

!new MatchPlayer('i11_mp1_EM_DEF')
!i11_mp1_EM_DEF.booked := true
!i11_mp1_EM_DEF.goals := 0
!i11_mp1_EM_DEF.rating := 7

!new MatchPlayer('i11_mp1_LF_GK')
!i11_mp1_LF_GK.booked := false
!i11_mp1_LF_GK.goals := 0
!i11_mp1_LF_GK.rating := 8

!new MatchPlayer('i11_mp1_LF_FW')
!i11_mp1_LF_FW.booked := false
!i11_mp1_LF_FW.goals := 0
!i11_mp1_LF_FW.rating := 6

!insert (i11_match1, i11_mp1_EM_GK) into MatchMatchPlayer
!insert (i11_match1, i11_mp1_EM_DEF) into MatchMatchPlayer
!insert (i11_match1, i11_mp1_LF_GK) into MatchMatchPlayer
!insert (i11_match1, i11_mp1_LF_FW) into MatchMatchPlayer

!insert (i11_pEM_GK, i11_mp1_EM_GK) into PlayerMatch
!insert (i11_pEM_DEF, i11_mp1_EM_DEF) into PlayerMatch
!insert (i11_pLF_GK, i11_mp1_LF_GK) into PlayerMatch
!insert (i11_pLF_FW, i11_mp1_LF_FW) into PlayerMatch

!new MatchPlayerPosition('i11_mpp1_EM_GK')
!i11_mpp1_EM_GK.positionName := #GOALKEEPER
!i11_mpp1_EM_GK.number := 1
!insert (i11_mp1_EM_GK, i11_mpp1_EM_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i11_mpp1_EM_DEF')
!i11_mpp1_EM_DEF.positionName := #DEFENDER
!i11_mpp1_EM_DEF.number := 4
!insert (i11_mp1_EM_DEF, i11_mpp1_EM_DEF) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i11_mpp1_LF_GK')
!i11_mpp1_LF_GK.positionName := #GOALKEEPER
!i11_mpp1_LF_GK.number := 1
!insert (i11_mp1_LF_GK, i11_mpp1_LF_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i11_mpp1_LF_FW')
!i11_mpp1_LF_FW.positionName := #FORWARD
!i11_mpp1_LF_FW.number := 9
!insert (i11_mp1_LF_FW, i11_mpp1_LF_FW) into MatchPlayerMatchPlayerPosition
```
## Generation 20 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 217 | 0.00% |
| Multiplicities Errors | 0 | 52 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 20 | 0.00% |

# Generation 21
```
!new Club('i12_clubRN')
!i12_clubRN.name := 'Ravenna FC'
!i12_clubRN.homeGround := 'Ravenna Stadium'
!i12_clubRN.chairman := 'Gianni Russo'

!new Club('i12_clubBL')
!i12_clubBL.name := 'Belltown AFC'
!i12_clubBL.homeGround := 'Belltown Sports Ground'
!i12_clubBL.chairman := 'Katherine Miles'

!new Club('i12_clubSM')
!i12_clubSM.name := 'Southmoor Rovers'
!i12_clubSM.homeGround := 'Southmoor Park'
!i12_clubSM.chairman := 'Omar Nadeem'

!new Team('i12_teamRN1')
!i12_teamRN1.name := 'Ravenna First XI'

!new Team('i12_teamBL1')
!i12_teamBL1.name := 'Belltown First XI'

!new Team('i12_teamSM1')
!i12_teamSM1.name := 'Southmoor First XI'

!insert (i12_clubRN, i12_teamRN1) into ClubTeam
!insert (i12_clubBL, i12_teamBL1) into ClubTeam
!insert (i12_clubSM, i12_teamSM1) into ClubTeam

!new Competition('i12_compWinterCup')
!i12_compWinterCup.name := 'Winter Cup'
!i12_compWinterCup.type := 'Knockout'

!new TrainingSession('i12_tsRN_1')
!i12_tsRN_1.date := '2027-02-03'
!i12_tsRN_1.location := 'Ravenna Stadium - Pitch 2'
!i12_tsRN_1.purpose := 'Playing out under pressure'

!new TrainingSession('i12_tsRN_2')
!i12_tsRN_2.date := '2027-02-05'
!i12_tsRN_2.location := 'Ravenna Stadium - Gym'
!i12_tsRN_2.purpose := 'Strength maintenance and injury prevention'

!new TrainingSession('i12_tsBL_1')
!i12_tsBL_1.date := '2027-02-04'
!i12_tsBL_1.location := 'Belltown Sports Ground - Main Pitch'
!i12_tsBL_1.purpose := 'Mid-block organisation and counters'

!new TrainingSession('i12_tsSM_1')
!i12_tsSM_1.date := '2027-02-04'
!i12_tsSM_1.location := 'Southmoor Park - Training Pitch'
!i12_tsSM_1.purpose := 'Attacking patterns and finishing'

!insert (i12_teamRN1, i12_tsRN_1) into TeamTraining
!insert (i12_teamRN1, i12_tsRN_2) into TeamTraining
!insert (i12_teamBL1, i12_tsBL_1) into TeamTraining
!insert (i12_teamSM1, i12_tsSM_1) into TeamTraining

!new TrainingNotes('i12_tnRN_1a')
!i12_tnRN_1a.note := 'Good central support; avoid forcing passes into the pivot when marked.'
!i12_tnRN_1a.date := '2027-02-03'
!insert (i12_tsRN_1, i12_tnRN_1a) into TrainingTrainingNotes

!new TrainingNotes('i12_tnRN_2a')
!i12_tnRN_2a.note := 'Gym completed; two players on reduced load due to tight calves.'
!i12_tnRN_2a.date := '2027-02-05'
!insert (i12_tsRN_2, i12_tnRN_2a) into TrainingTrainingNotes

!new TrainingNotes('i12_tnBL_1a')
!i12_tnBL_1a.note := 'Compact block effective; first pass after regain needs to be earlier.'
!i12_tnBL_1a.date := '2027-02-04'
!insert (i12_tsBL_1, i12_tnBL_1a) into TrainingTrainingNotes

!new TrainingNotes('i12_tnSM_1a')
!i12_tnSM_1a.note := 'Created chances with cut-backs; striker timing improved.'
!i12_tnSM_1a.date := '2027-02-04'
!insert (i12_tsSM_1, i12_tnSM_1a) into TrainingTrainingNotes

!new Player('i12_pRN_GK')
!i12_pRN_GK.name := 'Mason OReilly'
!i12_pRN_GK.age := 32
!i12_pRN_GK.bestFoot := #RIGHT
!i12_pRN_GK.phoneNumber := '+44 7700 251001'

!new Player('i12_pRN_MID')
!i12_pRN_MID.name := 'Paolo Conti'
!i12_pRN_MID.age := 26
!i12_pRN_MID.bestFoot := #BOTH
!i12_pRN_MID.phoneNumber := '+44 7700 251002'

!new Player('i12_pRN_FW')
!i12_pRN_FW.name := 'Dani Alvar'
!i12_pRN_FW.age := 23
!i12_pRN_FW.bestFoot := #LEFT
!i12_pRN_FW.phoneNumber := '+44 7700 251003'

!new Player('i12_pBL_DEF')
!i12_pBL_DEF.name := 'Connor Shea'
!i12_pBL_DEF.age := 28
!i12_pBL_DEF.bestFoot := #RIGHT
!i12_pBL_DEF.phoneNumber := '+44 7700 252001'

!new Player('i12_pBL_FW')
!i12_pBL_FW.name := 'Idris Coleman'
!i12_pBL_FW.age := 24
!i12_pBL_FW.bestFoot := #BOTH
!i12_pBL_FW.phoneNumber := '+44 7700 252002'

!new Player('i12_pSM_GK')
!i12_pSM_GK.name := 'Tomasz Nowicki'
!i12_pSM_GK.age := 29
!i12_pSM_GK.bestFoot := #LEFT
!i12_pSM_GK.phoneNumber := '+44 7700 253001'

!new Player('i12_pSM_MID')
!i12_pSM_MID.name := 'Hassan Jafari'
!i12_pSM_MID.age := 25
!i12_pSM_MID.bestFoot := #RIGHT
!i12_pSM_MID.phoneNumber := '+44 7700 253002'

!insert (i12_teamRN1, i12_pRN_GK) into TeamPlayer
!insert (i12_teamRN1, i12_pRN_MID) into TeamPlayer
!insert (i12_teamRN1, i12_pRN_FW) into TeamPlayer
!insert (i12_teamBL1, i12_pBL_DEF) into TeamPlayer
!insert (i12_teamBL1, i12_pBL_FW) into TeamPlayer
!insert (i12_teamSM1, i12_pSM_GK) into TeamPlayer
!insert (i12_teamSM1, i12_pSM_MID) into TeamPlayer

!new Position('i12_posRN_GK')
!i12_posRN_GK.positionName := #GOALKEEPER
!insert (i12_pRN_GK, i12_posRN_GK) into PlayerPositions

!new Position('i12_posRN_MID_1')
!i12_posRN_MID_1.positionName := #MIDFIELDER
!insert (i12_pRN_MID, i12_posRN_MID_1) into PlayerPositions

!new Position('i12_posRN_MID_2')
!i12_posRN_MID_2.positionName := #DEFENDER
!insert (i12_pRN_MID, i12_posRN_MID_2) into PlayerPositions

!new Position('i12_posRN_MID_3')
!i12_posRN_MID_3.positionName := #FORWARD
!insert (i12_pRN_MID, i12_posRN_MID_3) into PlayerPositions

!new Position('i12_posRN_FW')
!i12_posRN_FW.positionName := #FORWARD
!insert (i12_pRN_FW, i12_posRN_FW) into PlayerPositions

!new Position('i12_posBL_DEF')
!i12_posBL_DEF.positionName := #DEFENDER
!insert (i12_pBL_DEF, i12_posBL_DEF) into PlayerPositions

!new Position('i12_posBL_FW')
!i12_posBL_FW.positionName := #FORWARD
!insert (i12_pBL_FW, i12_posBL_FW) into PlayerPositions

!new Position('i12_posBL_FW_alt')
!i12_posBL_FW_alt.positionName := #MIDFIELDER
!insert (i12_pBL_FW, i12_posBL_FW_alt) into PlayerPositions

!new Position('i12_posSM_GK')
!i12_posSM_GK.positionName := #GOALKEEPER
!insert (i12_pSM_GK, i12_posSM_GK) into PlayerPositions

!new Position('i12_posSM_MID')
!i12_posSM_MID.positionName := #MIDFIELDER
!insert (i12_pSM_MID, i12_posSM_MID) into PlayerPositions

!new TrainingObjective('i12_objRN_GK_1')
!i12_objRN_GK_1.areaToImprove := 'Dealing with crosses under pressure'
!i12_objRN_GK_1.startDate := '2027-02-01'
!i12_objRN_GK_1.endDate := '2027-03-01'
!i12_objRN_GK_1.success := false
!insert (i12_objRN_GK_1, i12_pRN_GK) into TrainingObjectivePlayer

!new TrainingObjective('i12_objRN_MID_1')
!i12_objRN_MID_1.areaToImprove := 'One-touch play to escape pressure'
!i12_objRN_MID_1.startDate := '2027-02-01'
!i12_objRN_MID_1.endDate := '2027-03-01'
!i12_objRN_MID_1.success := true
!insert (i12_objRN_MID_1, i12_pRN_MID) into TrainingObjectivePlayer

!new TrainingObjective('i12_objRN_MID_2')
!i12_objRN_MID_2.areaToImprove := 'Tracking runners in defensive transition'
!i12_objRN_MID_2.startDate := '2027-02-01'
!i12_objRN_MID_2.endDate := '2027-03-01'
!i12_objRN_MID_2.success := false
!insert (i12_objRN_MID_2, i12_pRN_MID) into TrainingObjectivePlayer

!new TrainingObjective('i12_objRN_FW_1')
!i12_objRN_FW_1.areaToImprove := 'Finishing with right foot from central areas'
!i12_objRN_FW_1.startDate := '2027-02-01'
!i12_objRN_FW_1.endDate := '2027-03-01'
!i12_objRN_FW_1.success := false
!insert (i12_objRN_FW_1, i12_pRN_FW) into TrainingObjectivePlayer

!new TrainingObjective('i12_objBL_DEF_1')
!i12_objBL_DEF_1.areaToImprove := 'Back-post marking on crosses'
!i12_objBL_DEF_1.startDate := '2027-02-01'
!i12_objBL_DEF_1.endDate := '2027-03-01'
!i12_objBL_DEF_1.success := true
!insert (i12_objBL_DEF_1, i12_pBL_DEF) into TrainingObjectivePlayer

!new TrainingObjective('i12_objBL_FW_1')
!i12_objBL_FW_1.areaToImprove := 'Hold-up play under contact'
!i12_objBL_FW_1.startDate := '2027-02-01'
!i12_objBL_FW_1.endDate := '2027-03-01'
!i12_objBL_FW_1.success := false
!insert (i12_objBL_FW_1, i12_pBL_FW) into TrainingObjectivePlayer

!new TrainingObjective('i12_objSM_GK_1')
!i12_objSM_GK_1.areaToImprove := 'Distribution speed after saves'
!i12_objSM_GK_1.startDate := '2027-02-01'
!i12_objSM_GK_1.endDate := '2027-03-01'
!i12_objSM_GK_1.success := true
!insert (i12_objSM_GK_1, i12_pSM_GK) into TrainingObjectivePlayer

!new TrainingObjective('i12_objSM_MID_1')
!i12_objSM_MID_1.areaToImprove := 'Receiving on the half-turn under pressure'
!i12_objSM_MID_1.startDate := '2027-02-01'
!i12_objSM_MID_1.endDate := '2027-03-01'
!i12_objSM_MID_1.success := false
!insert (i12_objSM_MID_1, i12_pSM_MID) into TrainingObjectivePlayer

!new PlayerNotes('i12_pnRN_1')
!i12_pnRN_1.note := 'Leads well in training; must be louder organising defenders on corners.'
!i12_pnRN_1.date := '2027-02-06'
!insert (i12_pRN_GK, i12_pnRN_1) into PlayerPlayerNotes

!new PlayerNotes('i12_pnBL_1')
!i12_pnBL_1.note := 'Very direct runner; can improve decision-making when isolated.'
!i12_pnBL_1.date := '2027-02-06'
!insert (i12_pBL_FW, i12_pnBL_1) into PlayerPlayerNotes

!new TrainingFailedToAttend('i12_tfa1')
!i12_tfa1.reason := 'Work travel'
!insert (i12_tsRN_1, i12_tfa1) into TrainingFailded
!insert (i12_tfa1, i12_pRN_FW) into FailedPlayer

!new Match('i12_match1')
!i12_match1.date := '2027-02-10'
!i12_match1.homeAway := true

!new Match('i12_match2')
!i12_match2.date := '2027-02-14'
!i12_match2.homeAway := false

!insert (i12_compWinterCup, i12_match1) into CompetitionMatch
!insert (i12_compWinterCup, i12_match2) into CompetitionMatch

!insert (i12_teamRN1, i12_match1) into LocalMatch
!insert (i12_teamBL1, i12_match1) into VisitorMatch

!insert (i12_teamSM1, i12_match2) into LocalMatch
!insert (i12_teamRN1, i12_match2) into VisitorMatch

!new MatchReport('i12_mr1')
!i12_mr1.duration := 90
!i12_mr1.scoreVisitor := 2
!i12_mr1.scoreLocal := 2
!insert (i12_match1, i12_mr1) into MatchMatchReport

!new MatchReport('i12_mr2')
!i12_mr2.duration := 90
!i12_mr2.scoreVisitor := 0
!i12_mr2.scoreLocal := 1
!insert (i12_match2, i12_mr2) into MatchMatchReport

!new MatchEvent('i12_m1_goal1')
!i12_m1_goal1.eventType := #GOAL
!i12_m1_goal1.time := 11
!insert (i12_match1, i12_m1_goal1) into MatchMatchEvent

!new MatchEvent('i12_m1_goal2')
!i12_m1_goal2.eventType := #GOAL
!i12_m1_goal2.time := 27
!insert (i12_match1, i12_m1_goal2) into MatchMatchEvent

!new MatchEvent('i12_m1_goal3')
!i12_m1_goal3.eventType := #GOAL
!i12_m1_goal3.time := 59
!insert (i12_match1, i12_m1_goal3) into MatchMatchEvent

!new MatchEvent('i12_m1_goal4')
!i12_m1_goal4.eventType := #GOAL
!i12_m1_goal4.time := 83
!insert (i12_match1, i12_m1_goal4) into MatchMatchEvent

!new MatchEvent('i12_m1_foul1')
!i12_m1_foul1.eventType := #FOUL
!i12_m1_foul1.time := 35
!insert (i12_match1, i12_m1_foul1) into MatchMatchEvent

!new MatchEvent('i12_m1_off1')
!i12_m1_off1.eventType := #OFFSIDE
!i12_m1_off1.time := 66
!insert (i12_match1, i12_m1_off1) into MatchMatchEvent

!new MatchEvent('i12_m1_cor1')
!i12_m1_cor1.eventType := #CORNER
!i12_m1_cor1.time := 72
!insert (i12_match1, i12_m1_cor1) into MatchMatchEvent

!new MatchEvent('i12_m1_pen1')
!i12_m1_pen1.eventType := #PENALTY
!i12_m1_pen1.time := 82
!insert (i12_match1, i12_m1_pen1) into MatchMatchEvent

!new MatchEvent('i12_m2_goal1')
!i12_m2_goal1.eventType := #GOAL
!i12_m2_goal1.time := 44
!insert (i12_match2, i12_m2_goal1) into MatchMatchEvent

!new MatchEvent('i12_m2_foul1')
!i12_m2_foul1.eventType := #FOUL
!i12_m2_foul1.time := 21
!insert (i12_match2, i12_m2_foul1) into MatchMatchEvent

!new MatchEvent('i12_m2_cor1')
!i12_m2_cor1.eventType := #CORNER
!i12_m2_cor1.time := 68
!insert (i12_match2, i12_m2_cor1) into MatchMatchEvent

!new MatchNote('i12_mn1')
!i12_mn1.note := 'Four-goal draw; both teams traded momentum and scored on quick transitions.'
!i12_mn1.date := '2027-02-10'
!insert (i12_match1, i12_mn1) into MatchMatchNote

!new MatchNote('i12_mn2')
!i12_mn2.note := 'Tight match decided by a single midfield strike before half-time.'
!i12_mn2.date := '2027-02-14'
!insert (i12_match2, i12_mn2) into MatchMatchNote

!new MatchPlayer('i12_mp_m1_RN_GK')
!i12_mp_m1_RN_GK.booked := false
!i12_mp_m1_RN_GK.goals := 0
!i12_mp_m1_RN_GK.rating := 7

!new MatchPlayer('i12_mp_m1_RN_FW')
!i12_mp_m1_RN_FW.booked := false
!i12_mp_m1_RN_FW.goals := 2
!i12_mp_m1_RN_FW.rating := 8

!new MatchPlayer('i12_mp_m1_BL_DEF')
!i12_mp_m1_BL_DEF.booked := true
!i12_mp_m1_BL_DEF.goals := 0
!i12_mp_m1_BL_DEF.rating := 6

!new MatchPlayer('i12_mp_m1_BL_FW')
!i12_mp_m1_BL_FW.booked := false
!i12_mp_m1_BL_FW.goals := 2
!i12_mp_m1_BL_FW.rating := 8

!insert (i12_match1, i12_mp_m1_RN_GK) into MatchMatchPlayer
!insert (i12_match1, i12_mp_m1_RN_FW) into MatchMatchPlayer
!insert (i12_match1, i12_mp_m1_BL_DEF) into MatchMatchPlayer
!insert (i12_match1, i12_mp_m1_BL_FW) into MatchMatchPlayer

!insert (i12_pRN_GK, i12_mp_m1_RN_GK) into PlayerMatch
!insert (i12_pRN_FW, i12_mp_m1_RN_FW) into PlayerMatch
!insert (i12_pBL_DEF, i12_mp_m1_BL_DEF) into PlayerMatch
!insert (i12_pBL_FW, i12_mp_m1_BL_FW) into PlayerMatch

!new MatchPlayerPosition('i12_mpp_m1_RN_GK')
!i12_mpp_m1_RN_GK.positionName := #GOALKEEPER
!i12_mpp_m1_RN_GK.number := 1
!insert (i12_mp_m1_RN_GK, i12_mpp_m1_RN_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i12_mpp_m1_RN_FW')
!i12_mpp_m1_RN_FW.positionName := #FORWARD
!i12_mpp_m1_RN_FW.number := 9
!insert (i12_mp_m1_RN_FW, i12_mpp_m1_RN_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i12_mpp_m1_BL_DEF')
!i12_mpp_m1_BL_DEF.positionName := #DEFENDER
!i12_mpp_m1_BL_DEF.number := 5
!insert (i12_mp_m1_BL_DEF, i12_mpp_m1_BL_DEF) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i12_mpp_m1_BL_FW')
!i12_mpp_m1_BL_FW.positionName := #FORWARD
!i12_mpp_m1_BL_FW.number := 11
!insert (i12_mp_m1_BL_FW, i12_mpp_m1_BL_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('i12_mp_m2_SM_GK')
!i12_mp_m2_SM_GK.booked := false
!i12_mp_m2_SM_GK.goals := 0
!i12_mp_m2_SM_GK.rating := 7

!new MatchPlayer('i12_mp_m2_SM_MID')
!i12_mp_m2_SM_MID.booked := false
!i12_mp_m2_SM_MID.goals := 1
!i12_mp_m2_SM_MID.rating := 8

!new MatchPlayer('i12_mp_m2_RN_MID')
!i12_mp_m2_RN_MID.booked := true
!i12_mp_m2_RN_MID.goals := 0
!i12_mp_m2_RN_MID.rating := 6

!new MatchPlayer('i12_mp_m2_RN_FW')
!i12_mp_m2_RN_FW.booked := false
!i12_mp_m2_RN_FW.goals := 0
!i12_mp_m2_RN_FW.rating := 6

!insert (i12_match2, i12_mp_m2_SM_GK) into MatchMatchPlayer
!insert (i12_match2, i12_mp_m2_SM_MID) into MatchMatchPlayer
!insert (i12_match2, i12_mp_m2_RN_MID) into MatchMatchPlayer
!insert (i12_match2, i12_mp_m2_RN_FW) into MatchMatchPlayer

!insert (i12_pSM_GK, i12_mp_m2_SM_GK) into PlayerMatch
!insert (i12_pSM_MID, i12_mp_m2_SM_MID) into PlayerMatch
!insert (i12_pRN_MID, i12_mp_m2_RN_MID) into PlayerMatch
!insert (i12_pRN_FW, i12_mp_m2_RN_FW) into PlayerMatch

!new MatchPlayerPosition('i12_mpp_m2_SM_GK')
!i12_mpp_m2_SM_GK.positionName := #GOALKEEPER
!i12_mpp_m2_SM_GK.number := 1
!insert (i12_mp_m2_SM_GK, i12_mpp_m2_SM_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i12_mpp_m2_SM_MID')
!i12_mpp_m2_SM_MID.positionName := #MIDFIELDER
!i12_mpp_m2_SM_MID.number := 8
!insert (i12_mp_m2_SM_MID, i12_mpp_m2_SM_MID) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i12_mpp_m2_RN_MID')
!i12_mpp_m2_RN_MID.positionName := #MIDFIELDER
!i12_mpp_m2_RN_MID.number := 6
!insert (i12_mp_m2_RN_MID, i12_mpp_m2_RN_MID) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i12_mpp_m2_RN_FW')
!i12_mpp_m2_RN_FW.positionName := #FORWARD
!i12_mpp_m2_RN_FW.number := 9
!insert (i12_mp_m2_RN_FW, i12_mpp_m2_RN_FW) into MatchPlayerMatchPlayerPosition
```
## Generation 21 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 346 | 0.00% |
| Multiplicities Errors | 0 | 85 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 30 | 0.00% |

# Generation 22
```
!new Club('i13_clubHB')
!i13_clubHB.name := 'Harborfield FC'
!i13_clubHB.homeGround := 'Harborfield Ground'
!i13_clubHB.chairman := 'Naomi Fletcher'

!new Club('i13_clubNV')
!i13_clubNV.name := 'Northvale FC'
!i13_clubNV.homeGround := 'Northvale Stadium'
!i13_clubNV.chairman := 'Ethan Brooks'

!new Club('i13_clubSH')
!i13_clubSH.name := 'Stonehaven FC'
!i13_clubSH.homeGround := 'Stonehaven Park'
!i13_clubSH.chairman := 'Lina Kovac'

!new Team('i13_teamHB_S')
!i13_teamHB_S.name := 'Harborfield Seniors'

!new Team('i13_teamHB_U18')
!i13_teamHB_U18.name := 'Harborfield U18'

!new Team('i13_teamNV_S')
!i13_teamNV_S.name := 'Northvale Seniors'

!new Team('i13_teamSH_S')
!i13_teamSH_S.name := 'Stonehaven Seniors'

!new Team('i13_teamSH_U18')
!i13_teamSH_U18.name := 'Stonehaven U18'

!insert (i13_clubHB, i13_teamHB_S) into ClubTeam
!insert (i13_clubHB, i13_teamHB_U18) into ClubTeam
!insert (i13_clubNV, i13_teamNV_S) into ClubTeam
!insert (i13_clubSH, i13_teamSH_S) into ClubTeam
!insert (i13_clubSH, i13_teamSH_U18) into ClubTeam

!new Competition('i13_compRLeague')
!i13_compRLeague.name := 'Regional League'
!i13_compRLeague.type := 'League'

!new Competition('i13_compYouthCup')
!i13_compYouthCup.name := 'U18 County Cup'
!i13_compYouthCup.type := 'Cup'

!new TrainingSession('i13_tsHB_S_1')
!i13_tsHB_S_1.date := '2027-03-02'
!i13_tsHB_S_1.location := 'Harborfield Ground - Pitch 1'
!i13_tsHB_S_1.purpose := 'Defending transitions and rest defence'

!new TrainingSession('i13_tsHB_S_2')
!i13_tsHB_S_2.date := '2027-03-04'
!i13_tsHB_S_2.location := 'Harborfield Ground - Gym'
!i13_tsHB_S_2.purpose := 'Strength maintenance and injury prevention'

!new TrainingSession('i13_tsHB_U18_1')
!i13_tsHB_U18_1.date := '2027-03-03'
!i13_tsHB_U18_1.location := 'Harborfield Ground - Pitch 3'
!i13_tsHB_U18_1.purpose := 'First touch, turning and quick combinations'

!new TrainingSession('i13_tsNV_S_1')
!i13_tsNV_S_1.date := '2027-03-02'
!i13_tsNV_S_1.location := 'Northvale Stadium - Training Pitch'
!i13_tsNV_S_1.purpose := 'Mid-block organisation and counters'

!new TrainingSession('i13_tsSH_S_1')
!i13_tsSH_S_1.date := '2027-03-03'
!i13_tsSH_S_1.location := 'Stonehaven Park - Main Pitch'
!i13_tsSH_S_1.purpose := 'Attacking set pieces and finishing'

!new TrainingSession('i13_tsSH_U18_1')
!i13_tsSH_U18_1.date := '2027-03-04'
!i13_tsSH_U18_1.location := 'Stonehaven Park - Training Pitch'
!i13_tsSH_U18_1.purpose := 'Playing out under pressure'

!insert (i13_teamHB_S, i13_tsHB_S_1) into TeamTraining
!insert (i13_teamHB_S, i13_tsHB_S_2) into TeamTraining
!insert (i13_teamHB_U18, i13_tsHB_U18_1) into TeamTraining
!insert (i13_teamNV_S, i13_tsNV_S_1) into TeamTraining
!insert (i13_teamSH_S, i13_tsSH_S_1) into TeamTraining
!insert (i13_teamSH_U18, i13_tsSH_U18_1) into TeamTraining

!new TrainingNotes('i13_tnHB_S_1a')
!i13_tnHB_S_1a.note := 'Team shape good; avoid diving in when counter-press is beaten.'
!i13_tnHB_S_1a.date := '2027-03-02'
!insert (i13_tsHB_S_1, i13_tnHB_S_1a) into TrainingTrainingNotes

!new TrainingNotes('i13_tnHB_S_2a')
!i13_tnHB_S_2a.note := 'Gym load adjusted; focus on posterior chain and core stability.'
!i13_tnHB_S_2a.date := '2027-03-04'
!insert (i13_tsHB_S_2, i13_tnHB_S_2a) into TrainingTrainingNotes

!new TrainingNotes('i13_tnHB_U18_1a')
!i13_tnHB_U18_1a.note := 'Good tempo in small-sided games; encourage earlier scanning before receiving.'
!i13_tnHB_U18_1a.date := '2027-03-03'
!insert (i13_tsHB_U18_1, i13_tnHB_U18_1a) into TrainingTrainingNotes

!new TrainingNotes('i13_tnNV_S_1a')
!i13_tnNV_S_1a.note := 'Mid-block compact; the first counter pass must be more accurate.'
!i13_tnNV_S_1a.date := '2027-03-02'
!insert (i13_tsNV_S_1, i13_tnNV_S_1a) into TrainingTrainingNotes

!new TrainingNotes('i13_tnSH_S_1a')
!i13_tnSH_S_1a.note := 'Set-piece routines created chances; finishing still inconsistent under pressure.'
!i13_tnSH_S_1a.date := '2027-03-03'
!insert (i13_tsSH_S_1, i13_tnSH_S_1a) into TrainingTrainingNotes

!new TrainingNotes('i13_tnSH_U18_1a')
!i13_tnSH_U18_1a.note := 'Played out well through the pivot; avoid risky square passes near the box.'
!i13_tnSH_U18_1a.date := '2027-03-04'
!insert (i13_tsSH_U18_1, i13_tnSH_U18_1a) into TrainingTrainingNotes

!new Player('i13_pHB_S_GK')
!i13_pHB_S_GK.name := 'Patrick Keane'
!i13_pHB_S_GK.age := 33
!i13_pHB_S_GK.bestFoot := #RIGHT
!i13_pHB_S_GK.phoneNumber := '+44 7700 311001'

!new Player('i13_pHB_S_DEF')
!i13_pHB_S_DEF.name := 'Rafael Nunes'
!i13_pHB_S_DEF.age := 27
!i13_pHB_S_DEF.bestFoot := #BOTH
!i13_pHB_S_DEF.phoneNumber := '+44 7700 311002'

!new Player('i13_pHB_S_MID')
!i13_pHB_S_MID.name := 'Callum Finch'
!i13_pHB_S_MID.age := 25
!i13_pHB_S_MID.bestFoot := #LEFT
!i13_pHB_S_MID.phoneNumber := '+44 7700 311003'

!new Player('i13_pHB_S_FW')
!i13_pHB_S_FW.name := 'Diego Moreno'
!i13_pHB_S_FW.age := 24
!i13_pHB_S_FW.bestFoot := #RIGHT
!i13_pHB_S_FW.phoneNumber := '+44 7700 311004'

!new Player('i13_pHB_U18_GK')
!i13_pHB_U18_GK.name := 'Noah Yates'
!i13_pHB_U18_GK.age := 17
!i13_pHB_U18_GK.bestFoot := #BOTH
!i13_pHB_U18_GK.phoneNumber := '+44 7700 312001'

!new Player('i13_pHB_U18_MID')
!i13_pHB_U18_MID.name := 'Ilias Benomar'
!i13_pHB_U18_MID.age := 17
!i13_pHB_U18_MID.bestFoot := #RIGHT
!i13_pHB_U18_MID.phoneNumber := '+44 7700 312002'

!new Player('i13_pHB_U18_FW')
!i13_pHB_U18_FW.name := 'Freddie Shaw'
!i13_pHB_U18_FW.age := 18
!i13_pHB_U18_FW.bestFoot := #LEFT
!i13_pHB_U18_FW.phoneNumber := '+44 7700 312003'

!new Player('i13_pNV_S_GK')
!i13_pNV_S_GK.name := 'Viktor Lund'
!i13_pNV_S_GK.age := 29
!i13_pNV_S_GK.bestFoot := #LEFT
!i13_pNV_S_GK.phoneNumber := '+44 7700 321001'

!new Player('i13_pNV_S_MID')
!i13_pNV_S_MID.name := 'Samir Qureshi'
!i13_pNV_S_MID.age := 26
!i13_pNV_S_MID.bestFoot := #RIGHT
!i13_pNV_S_MID.phoneNumber := '+44 7700 321002'

!new Player('i13_pNV_S_FW')
!i13_pNV_S_FW.name := 'Jordan Pike'
!i13_pNV_S_FW.age := 23
!i13_pNV_S_FW.bestFoot := #BOTH
!i13_pNV_S_FW.phoneNumber := '+44 7700 321003'

!new Player('i13_pSH_S_GK')
!i13_pSH_S_GK.name := 'Szymon Krupa'
!i13_pSH_S_GK.age := 30
!i13_pSH_S_GK.bestFoot := #BOTH
!i13_pSH_S_GK.phoneNumber := '+44 7700 331001'

!new Player('i13_pSH_S_DEF')
!i13_pSH_S_DEF.name := 'Tariq Aziz'
!i13_pSH_S_DEF.age := 28
!i13_pSH_S_DEF.bestFoot := #RIGHT
!i13_pSH_S_DEF.phoneNumber := '+44 7700 331002'

!new Player('i13_pSH_S_FW')
!i13_pSH_S_FW.name := 'Marco Rizzi'
!i13_pSH_S_FW.age := 24
!i13_pSH_S_FW.bestFoot := #LEFT
!i13_pSH_S_FW.phoneNumber := '+44 7700 331003'

!new Player('i13_pSH_U18_DEF')
!i13_pSH_U18_DEF.name := 'Evan Gallagher'
!i13_pSH_U18_DEF.age := 18
!i13_pSH_U18_DEF.bestFoot := #RIGHT
!i13_pSH_U18_DEF.phoneNumber := '+44 7700 332001'

!new Player('i13_pSH_U18_MID')
!i13_pSH_U18_MID.name := 'Leon Kim'
!i13_pSH_U18_MID.age := 17
!i13_pSH_U18_MID.bestFoot := #BOTH
!i13_pSH_U18_MID.phoneNumber := '+44 7700 332002'

!new Player('i13_pSH_U18_FW')
!i13_pSH_U18_FW.name := 'Rayan Idrissi'
!i13_pSH_U18_FW.age := 18
!i13_pSH_U18_FW.bestFoot := #LEFT
!i13_pSH_U18_FW.phoneNumber := '+44 7700 332003'

!insert (i13_teamHB_S, i13_pHB_S_GK) into TeamPlayer
!insert (i13_teamHB_S, i13_pHB_S_DEF) into TeamPlayer
!insert (i13_teamHB_S, i13_pHB_S_MID) into TeamPlayer
!insert (i13_teamHB_S, i13_pHB_S_FW) into TeamPlayer

!insert (i13_teamHB_U18, i13_pHB_U18_GK) into TeamPlayer
!insert (i13_teamHB_U18, i13_pHB_U18_MID) into TeamPlayer
!insert (i13_teamHB_U18, i13_pHB_U18_FW) into TeamPlayer

!insert (i13_teamNV_S, i13_pNV_S_GK) into TeamPlayer
!insert (i13_teamNV_S, i13_pNV_S_MID) into TeamPlayer
!insert (i13_teamNV_S, i13_pNV_S_FW) into TeamPlayer

!insert (i13_teamSH_S, i13_pSH_S_GK) into TeamPlayer
!insert (i13_teamSH_S, i13_pSH_S_DEF) into TeamPlayer
!insert (i13_teamSH_S, i13_pSH_S_FW) into TeamPlayer

!insert (i13_teamSH_U18, i13_pSH_U18_DEF) into TeamPlayer
!insert (i13_teamSH_U18, i13_pSH_U18_MID) into TeamPlayer
!insert (i13_teamSH_U18, i13_pSH_U18_FW) into TeamPlayer

!new Position('i13_posHB_S_GK')
!i13_posHB_S_GK.positionName := #GOALKEEPER
!insert (i13_pHB_S_GK, i13_posHB_S_GK) into PlayerPositions

!new Position('i13_posHB_S_DEF1')
!i13_posHB_S_DEF1.positionName := #DEFENDER
!insert (i13_pHB_S_DEF, i13_posHB_S_DEF1) into PlayerPositions

!new Position('i13_posHB_S_DEF2')
!i13_posHB_S_DEF2.positionName := #MIDFIELDER
!insert (i13_pHB_S_DEF, i13_posHB_S_DEF2) into PlayerPositions

!new Position('i13_posHB_S_MID')
!i13_posHB_S_MID.positionName := #MIDFIELDER
!insert (i13_pHB_S_MID, i13_posHB_S_MID) into PlayerPositions

!new Position('i13_posHB_S_FW')
!i13_posHB_S_FW.positionName := #FORWARD
!insert (i13_pHB_S_FW, i13_posHB_S_FW) into PlayerPositions

!new Position('i13_posHB_U18_GK')
!i13_posHB_U18_GK.positionName := #GOALKEEPER
!insert (i13_pHB_U18_GK, i13_posHB_U18_GK) into PlayerPositions

!new Position('i13_posHB_U18_MID1')
!i13_posHB_U18_MID1.positionName := #MIDFIELDER
!insert (i13_pHB_U18_MID, i13_posHB_U18_MID1) into PlayerPositions

!new Position('i13_posHB_U18_MID2')
!i13_posHB_U18_MID2.positionName := #DEFENDER
!insert (i13_pHB_U18_MID, i13_posHB_U18_MID2) into PlayerPositions

!new Position('i13_posHB_U18_FW')
!i13_posHB_U18_FW.positionName := #FORWARD
!insert (i13_pHB_U18_FW, i13_posHB_U18_FW) into PlayerPositions

!new Position('i13_posNV_S_GK')
!i13_posNV_S_GK.positionName := #GOALKEEPER
!insert (i13_pNV_S_GK, i13_posNV_S_GK) into PlayerPositions

!new Position('i13_posNV_S_MID')
!i13_posNV_S_MID.positionName := #MIDFIELDER
!insert (i13_pNV_S_MID, i13_posNV_S_MID) into PlayerPositions

!new Position('i13_posNV_S_FW1')
!i13_posNV_S_FW1.positionName := #FORWARD
!insert (i13_pNV_S_FW, i13_posNV_S_FW1) into PlayerPositions

!new Position('i13_posNV_S_FW2')
!i13_posNV_S_FW2.positionName := #MIDFIELDER
!insert (i13_pNV_S_FW, i13_posNV_S_FW2) into PlayerPositions

!new Position('i13_posSH_S_GK')
!i13_posSH_S_GK.positionName := #GOALKEEPER
!insert (i13_pSH_S_GK, i13_posSH_S_GK) into PlayerPositions

!new Position('i13_posSH_S_DEF')
!i13_posSH_S_DEF.positionName := #DEFENDER
!insert (i13_pSH_S_DEF, i13_posSH_S_DEF) into PlayerPositions

!new Position('i13_posSH_S_FW')
!i13_posSH_S_FW.positionName := #FORWARD
!insert (i13_pSH_S_FW, i13_posSH_S_FW) into PlayerPositions

!new Position('i13_posSH_U18_DEF')
!i13_posSH_U18_DEF.positionName := #DEFENDER
!insert (i13_pSH_U18_DEF, i13_posSH_U18_DEF) into PlayerPositions

!new Position('i13_posSH_U18_MID')
!i13_posSH_U18_MID.positionName := #MIDFIELDER
!insert (i13_pSH_U18_MID, i13_posSH_U18_MID) into PlayerPositions

!new Position('i13_posSH_U18_MID_alt')
!i13_posSH_U18_MID_alt.positionName := #FORWARD
!insert (i13_pSH_U18_MID, i13_posSH_U18_MID_alt) into PlayerPositions

!new Position('i13_posSH_U18_FW')
!i13_posSH_U18_FW.positionName := #FORWARD
!insert (i13_pSH_U18_FW, i13_posSH_U18_FW) into PlayerPositions

!new TrainingObjective('i13_objHB_S_GK_1')
!i13_objHB_S_GK_1.areaToImprove := 'Claiming crosses under contact'
!i13_objHB_S_GK_1.startDate := '2027-03-01'
!i13_objHB_S_GK_1.endDate := '2027-04-01'
!i13_objHB_S_GK_1.success := false
!insert (i13_objHB_S_GK_1, i13_pHB_S_GK) into TrainingObjectivePlayer

!new TrainingObjective('i13_objHB_S_DEF_1')
!i13_objHB_S_DEF_1.areaToImprove := 'Defending the back post on wide deliveries'
!i13_objHB_S_DEF_1.startDate := '2027-03-01'
!i13_objHB_S_DEF_1.endDate := '2027-04-01'
!i13_objHB_S_DEF_1.success := true
!insert (i13_objHB_S_DEF_1, i13_pHB_S_DEF) into TrainingObjectivePlayer

!new TrainingObjective('i13_objHB_S_MID_1')
!i13_objHB_S_MID_1.areaToImprove := 'Scanning before receiving between the lines'
!i13_objHB_S_MID_1.startDate := '2027-03-01'
!i13_objHB_S_MID_1.endDate := '2027-04-01'
!i13_objHB_S_MID_1.success := false
!insert (i13_objHB_S_MID_1, i13_pHB_S_MID) into TrainingObjectivePlayer

!new TrainingObjective('i13_objHB_S_FW_1')
!i13_objHB_S_FW_1.areaToImprove := 'First-time finishing from cut-backs'
!i13_objHB_S_FW_1.startDate := '2027-03-01'
!i13_objHB_S_FW_1.endDate := '2027-04-01'
!i13_objHB_S_FW_1.success := false
!insert (i13_objHB_S_FW_1, i13_pHB_S_FW) into TrainingObjectivePlayer

!new TrainingObjective('i13_objHB_U18_GK_1')
!i13_objHB_U18_GK_1.areaToImprove := 'Footwork and set position on low shots'
!i13_objHB_U18_GK_1.startDate := '2027-03-01'
!i13_objHB_U18_GK_1.endDate := '2027-04-01'
!i13_objHB_U18_GK_1.success := true
!insert (i13_objHB_U18_GK_1, i13_pHB_U18_GK) into TrainingObjectivePlayer

!new TrainingObjective('i13_objHB_U18_MID_1')
!i13_objHB_U18_MID_1.areaToImprove := 'Speed of play in tight areas'
!i13_objHB_U18_MID_1.startDate := '2027-03-01'
!i13_objHB_U18_MID_1.endDate := '2027-04-01'
!i13_objHB_U18_MID_1.success := false
!insert (i13_objHB_U18_MID_1, i13_pHB_U18_MID) into TrainingObjectivePlayer

!new TrainingObjective('i13_objHB_U18_FW_1')
!i13_objHB_U18_FW_1.areaToImprove := 'Composure when finishing under pressure'
!i13_objHB_U18_FW_1.startDate := '2027-03-01'
!i13_objHB_U18_FW_1.endDate := '2027-04-01'
!i13_objHB_U18_FW_1.success := false
!insert (i13_objHB_U18_FW_1, i13_pHB_U18_FW) into TrainingObjectivePlayer

!new TrainingObjective('i13_objNV_S_GK_1')
!i13_objNV_S_GK_1.areaToImprove := 'Distribution speed after saves'
!i13_objNV_S_GK_1.startDate := '2027-03-01'
!i13_objNV_S_GK_1.endDate := '2027-04-01'
!i13_objNV_S_GK_1.success := true
!insert (i13_objNV_S_GK_1, i13_pNV_S_GK) into TrainingObjectivePlayer

!new TrainingObjective('i13_objNV_S_MID_1')
!i13_objNV_S_MID_1.areaToImprove := 'Switching play under pressure'
!i13_objNV_S_MID_1.startDate := '2027-03-01'
!i13_objNV_S_MID_1.endDate := '2027-04-01'
!i13_objNV_S_MID_1.success := false
!insert (i13_objNV_S_MID_1, i13_pNV_S_MID) into TrainingObjectivePlayer

!new TrainingObjective('i13_objNV_S_FW_1')
!i13_objNV_S_FW_1.areaToImprove := 'Timing curved runs to stay onside'
!i13_objNV_S_FW_1.startDate := '2027-03-01'
!i13_objNV_S_FW_1.endDate := '2027-04-01'
!i13_objNV_S_FW_1.success := true
!insert (i13_objNV_S_FW_1, i13_pNV_S_FW) into TrainingObjectivePlayer

!new TrainingObjective('i13_objSH_S_GK_1')
!i13_objSH_S_GK_1.areaToImprove := 'Handling shots through traffic'
!i13_objSH_S_GK_1.startDate := '2027-03-01'
!i13_objSH_S_GK_1.endDate := '2027-04-01'
!i13_objSH_S_GK_1.success := false
!insert (i13_objSH_S_GK_1, i13_pSH_S_GK) into TrainingObjectivePlayer

!new TrainingObjective('i13_objSH_S_DEF_1')
!i13_objSH_S_DEF_1.areaToImprove := 'Defending cut-backs in the box'
!i13_objSH_S_DEF_1.startDate := '2027-03-01'
!i13_objSH_S_DEF_1.endDate := '2027-04-01'
!i13_objSH_S_DEF_1.success := true
!insert (i13_objSH_S_DEF_1, i13_pSH_S_DEF) into TrainingObjectivePlayer

!new TrainingObjective('i13_objSH_S_FW_1')
!i13_objSH_S_FW_1.areaToImprove := 'Finishing across the goalkeeper'
!i13_objSH_S_FW_1.startDate := '2027-03-01'
!i13_objSH_S_FW_1.endDate := '2027-04-01'
!i13_objSH_S_FW_1.success := false
!insert (i13_objSH_S_FW_1, i13_pSH_S_FW) into TrainingObjectivePlayer

!new TrainingObjective('i13_objSH_U18_DEF_1')
!i13_objSH_U18_DEF_1.areaToImprove := '1v1 defending body position'
!i13_objSH_U18_DEF_1.startDate := '2027-03-01'
!i13_objSH_U18_DEF_1.endDate := '2027-04-01'
!i13_objSH_U18_DEF_1.success := false
!insert (i13_objSH_U18_DEF_1, i13_pSH_U18_DEF) into TrainingObjectivePlayer

!new TrainingObjective('i13_objSH_U18_MID_1')
!i13_objSH_U18_MID_1.areaToImprove := 'Receiving on the half-turn under pressure'
!i13_objSH_U18_MID_1.startDate := '2027-03-01'
!i13_objSH_U18_MID_1.endDate := '2027-04-01'
!i13_objSH_U18_MID_1.success := true
!insert (i13_objSH_U18_MID_1, i13_pSH_U18_MID) into TrainingObjectivePlayer

!new TrainingObjective('i13_objSH_U18_FW_1')
!i13_objSH_U18_FW_1.areaToImprove := 'Pressing intensity and recovery runs'
!i13_objSH_U18_FW_1.startDate := '2027-03-01'
!i13_objSH_U18_FW_1.endDate := '2027-04-01'
!i13_objSH_U18_FW_1.success := false
!insert (i13_objSH_U18_FW_1, i13_pSH_U18_FW) into TrainingObjectivePlayer

!new PlayerNotes('i13_pnHB_1')
!i13_pnHB_1.note := 'Strong leader; communicates well but can be calmer after conceding chances.'
!i13_pnHB_1.date := '2027-03-05'
!insert (i13_pHB_S_GK, i13_pnHB_1) into PlayerPlayerNotes

!new PlayerNotes('i13_pnNV_1')
!i13_pnNV_1.note := 'Excellent engine; must reduce needless fouls when counter-pressing.'
!i13_pnNV_1.date := '2027-03-05'
!insert (i13_pNV_S_MID, i13_pnNV_1) into PlayerPlayerNotes

!new TrainingFailedToAttend('i13_tfaHB_1')
!i13_tfaHB_1.reason := 'Late arrival (public transport)'
!insert (i13_tsHB_U18_1, i13_tfaHB_1) into TrainingFailded
!insert (i13_tfaHB_1, i13_pHB_U18_MID) into FailedPlayer

!new Match('i13_matchL1')
!i13_matchL1.date := '2027-03-10'
!i13_matchL1.homeAway := true

!new Match('i13_matchL2')
!i13_matchL2.date := '2027-03-12'
!i13_matchL2.homeAway := true

!new Match('i13_matchCupU18')
!i13_matchCupU18.date := '2027-03-13'
!i13_matchCupU18.homeAway := false

!insert (i13_compRLeague, i13_matchL1) into CompetitionMatch
!insert (i13_compRLeague, i13_matchL2) into CompetitionMatch
!insert (i13_compYouthCup, i13_matchCupU18) into CompetitionMatch

!insert (i13_teamNV_S, i13_matchL1) into LocalMatch
!insert (i13_teamSH_S, i13_matchL1) into VisitorMatch

!insert (i13_teamHB_S, i13_matchL2) into LocalMatch
!insert (i13_teamNV_S, i13_matchL2) into VisitorMatch

!insert (i13_teamHB_U18, i13_matchCupU18) into LocalMatch
!insert (i13_teamSH_U18, i13_matchCupU18) into VisitorMatch

!new MatchReport('i13_mrL1')
!i13_mrL1.duration := 90
!i13_mrL1.scoreVisitor := 1
!i13_mrL1.scoreLocal := 2
!insert (i13_matchL1, i13_mrL1) into MatchMatchReport

!new MatchReport('i13_mrL2')
!i13_mrL2.duration := 90
!i13_mrL2.scoreVisitor := 0
!i13_mrL2.scoreLocal := 0
!insert (i13_matchL2, i13_mrL2) into MatchMatchReport

!new MatchReport('i13_mrCupU18')
!i13_mrCupU18.duration := 90
!i13_mrCupU18.scoreVisitor := 3
!i13_mrCupU18.scoreLocal := 1
!insert (i13_matchCupU18, i13_mrCupU18) into MatchMatchReport

!new MatchEvent('i13_evL1_goal1')
!i13_evL1_goal1.eventType := #GOAL
!i13_evL1_goal1.time := 14
!insert (i13_matchL1, i13_evL1_goal1) into MatchMatchEvent

!new MatchEvent('i13_evL1_goal2')
!i13_evL1_goal2.eventType := #GOAL
!i13_evL1_goal2.time := 49
!insert (i13_matchL1, i13_evL1_goal2) into MatchMatchEvent

!new MatchEvent('i13_evL1_goal3')
!i13_evL1_goal3.eventType := #GOAL
!i13_evL1_goal3.time := 77
!insert (i13_matchL1, i13_evL1_goal3) into MatchMatchEvent

!new MatchEvent('i13_evL1_foul')
!i13_evL1_foul.eventType := #FOUL
!i13_evL1_foul.time := 33
!insert (i13_matchL1, i13_evL1_foul) into MatchMatchEvent

!new MatchEvent('i13_evL2_pen')
!i13_evL2_pen.eventType := #PENALTY
!i13_evL2_pen.time := 68
!insert (i13_matchL2, i13_evL2_pen) into MatchMatchEvent

!new MatchEvent('i13_evL2_off')
!i13_evL2_off.eventType := #OFFSIDE
!i13_evL2_off.time := 72
!insert (i13_matchL2, i13_evL2_off) into MatchMatchEvent

!new MatchEvent('i13_evCup_goal1')
!i13_evCup_goal1.eventType := #GOAL
!i13_evCup_goal1.time := 9
!insert (i13_matchCupU18, i13_evCup_goal1) into MatchMatchEvent

!new MatchEvent('i13_evCup_goal2')
!i13_evCup_goal2.eventType := #GOAL
!i13_evCup_goal2.time := 22
!insert (i13_matchCupU18, i13_evCup_goal2) into MatchMatchEvent

!new MatchEvent('i13_evCup_goal3')
!i13_evCup_goal3.eventType := #GOAL
!i13_evCup_goal3.time := 54
!insert (i13_matchCupU18, i13_evCup_goal3) into MatchMatchEvent

!new MatchEvent('i13_evCup_goal4')
!i13_evCup_goal4.eventType := #GOAL
!i13_evCup_goal4.time := 83
!insert (i13_matchCupU18, i13_evCup_goal4) into MatchMatchEvent

!new MatchEvent('i13_evCup_corner')
!i13_evCup_corner.eventType := #CORNER
!i13_evCup_corner.time := 61
!insert (i13_matchCupU18, i13_evCup_corner) into MatchMatchEvent

!new MatchNote('i13_mnL1')
!i13_mnL1.note := 'Northvale edged it at home; Stonehaven threatened on set pieces but conceded in transition.'
!i13_mnL1.date := '2027-03-10'
!insert (i13_matchL1, i13_mnL1) into MatchMatchNote

!new MatchNote('i13_mnL2')
!i13_mnL2.note := 'Goalless draw; both sides defended well and a late penalty was not converted.'
!i13_mnL2.date := '2027-03-12'
!insert (i13_matchL2, i13_mnL2) into MatchMatchNote

!new MatchNote('i13_mnCup')
!i13_mnCup.note := 'U18 cup tie with fast tempo; Stonehaven were clinical and managed the game well after scoring.'
!i13_mnCup.date := '2027-03-13'
!insert (i13_matchCupU18, i13_mnCup) into MatchMatchNote

!new MatchPlayer('i13_mpL1_NV_GK')
!i13_mpL1_NV_GK.booked := false
!i13_mpL1_NV_GK.goals := 0
!i13_mpL1_NV_GK.rating := 7

!new MatchPlayer('i13_mpL1_NV_FW')
!i13_mpL1_NV_FW.booked := false
!i13_mpL1_NV_FW.goals := 1
!i13_mpL1_NV_FW.rating := 8

!new MatchPlayer('i13_mpL1_SH_GK')
!i13_mpL1_SH_GK.booked := false
!i13_mpL1_SH_GK.goals := 0
!i13_mpL1_SH_GK.rating := 6

!new MatchPlayer('i13_mpL1_SH_FW')
!i13_mpL1_SH_FW.booked := true
!i13_mpL1_SH_FW.goals := 1
!i13_mpL1_SH_FW.rating := 7

!insert (i13_matchL1, i13_mpL1_NV_GK) into MatchMatchPlayer
!insert (i13_matchL1, i13_mpL1_NV_FW) into MatchMatchPlayer
!insert (i13_matchL1, i13_mpL1_SH_GK) into MatchMatchPlayer
!insert (i13_matchL1, i13_mpL1_SH_FW) into MatchMatchPlayer

!insert (i13_pNV_S_GK, i13_mpL1_NV_GK) into PlayerMatch
!insert (i13_pNV_S_FW, i13_mpL1_NV_FW) into PlayerMatch
!insert (i13_pSH_S_GK, i13_mpL1_SH_GK) into PlayerMatch
!insert (i13_pSH_S_FW, i13_mpL1_SH_FW) into PlayerMatch

!new MatchPlayerPosition('i13_mppL1_NV_GK')
!i13_mppL1_NV_GK.positionName := #GOALKEEPER
!i13_mppL1_NV_GK.number := 1
!insert (i13_mpL1_NV_GK, i13_mppL1_NV_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i13_mppL1_NV_FW')
!i13_mppL1_NV_FW.positionName := #FORWARD
!i13_mppL1_NV_FW.number := 9
!insert (i13_mpL1_NV_FW, i13_mppL1_NV_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i13_mppL1_SH_GK')
!i13_mppL1_SH_GK.positionName := #GOALKEEPER
!i13_mppL1_SH_GK.number := 1
!insert (i13_mpL1_SH_GK, i13_mppL1_SH_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i13_mppL1_SH_FW')
!i13_mppL1_SH_FW.positionName := #FORWARD
!i13_mppL1_SH_FW.number := 11
!insert (i13_mpL1_SH_FW, i13_mppL1_SH_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('i13_mpL2_HB_GK')
!i13_mpL2_HB_GK.booked := false
!i13_mpL2_HB_GK.goals := 0
!i13_mpL2_HB_GK.rating := 8

!new MatchPlayer('i13_mpL2_HB_DEF')
!i13_mpL2_HB_DEF.booked := true
!i13_mpL2_HB_DEF.goals := 0
!i13_mpL2_HB_DEF.rating := 7

!new MatchPlayer('i13_mpL2_NV_MID')
!i13_mpL2_NV_MID.booked := false
!i13_mpL2_NV_MID.goals := 0
!i13_mpL2_NV_MID.rating := 7

!new MatchPlayer('i13_mpL2_NV_GK')
!i13_mpL2_NV_GK.booked := false
!i13_mpL2_NV_GK.goals := 0
!i13_mpL2_NV_GK.rating := 7

!insert (i13_matchL2, i13_mpL2_HB_GK) into MatchMatchPlayer
!insert (i13_matchL2, i13_mpL2_HB_DEF) into MatchMatchPlayer
!insert (i13_matchL2, i13_mpL2_NV_MID) into MatchMatchPlayer
!insert (i13_matchL2, i13_mpL2_NV_GK) into MatchMatchPlayer

!insert (i13_pHB_S_GK, i13_mpL2_HB_GK) into PlayerMatch
!insert (i13_pHB_S_DEF, i13_mpL2_HB_DEF) into PlayerMatch
!insert (i13_pNV_S_MID, i13_mpL2_NV_MID) into PlayerMatch
!insert (i13_pNV_S_GK, i13_mpL2_NV_GK) into PlayerMatch

!new MatchPlayerPosition('i13_mppL2_HB_GK')
!i13_mppL2_HB_GK.positionName := #GOALKEEPER
!i13_mppL2_HB_GK.number := 1
!insert (i13_mpL2_HB_GK, i13_mppL2_HB_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i13_mppL2_HB_DEF')
!i13_mppL2_HB_DEF.positionName := #DEFENDER
!i13_mppL2_HB_DEF.number := 5
!insert (i13_mpL2_HB_DEF, i13_mppL2_HB_DEF) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i13_mppL2_NV_MID')
!i13_mppL2_NV_MID.positionName := #MIDFIELDER
!i13_mppL2_NV_MID.number := 8
!insert (i13_mpL2_NV_MID, i13_mppL2_NV_MID) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i13_mppL2_NV_GK')
!i13_mppL2_NV_GK.positionName := #GOALKEEPER
!i13_mppL2_NV_GK.number := 1
!insert (i13_mpL2_NV_GK, i13_mppL2_NV_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('i13_mpCup_HB_GK')
!i13_mpCup_HB_GK.booked := false
!i13_mpCup_HB_GK.goals := 0
!i13_mpCup_HB_GK.rating := 6

!new MatchPlayer('i13_mpCup_HB_FW')
!i13_mpCup_HB_FW.booked := true
!i13_mpCup_HB_FW.goals := 1
!i13_mpCup_HB_FW.rating := 7

!new MatchPlayer('i13_mpCup_SH_MID')
!i13_mpCup_SH_MID.booked := false
!i13_mpCup_SH_MID.goals := 1
!i13_mpCup_SH_MID.rating := 8

!new MatchPlayer('i13_mpCup_SH_FW')
!i13_mpCup_SH_FW.booked := false
!i13_mpCup_SH_FW.goals := 2
!i13_mpCup_SH_FW.rating := 9

!insert (i13_matchCupU18, i13_mpCup_HB_GK) into MatchMatchPlayer
!insert (i13_matchCupU18, i13_mpCup_HB_FW) into MatchMatchPlayer
!insert (i13_matchCupU18, i13_mpCup_SH_MID) into MatchMatchPlayer
!insert (i13_matchCupU18, i13_mpCup_SH_FW) into MatchMatchPlayer

!insert (i13_pHB_U18_GK, i13_mpCup_HB_GK) into PlayerMatch
!insert (i13_pHB_U18_FW, i13_mpCup_HB_FW) into PlayerMatch
!insert (i13_pSH_U18_MID, i13_mpCup_SH_MID) into PlayerMatch
!insert (i13_pSH_U18_FW, i13_mpCup_SH_FW) into PlayerMatch

!new MatchPlayerPosition('i13_mppCup_HB_GK')
!i13_mppCup_HB_GK.positionName := #GOALKEEPER
!i13_mppCup_HB_GK.number := 1
!insert (i13_mpCup_HB_GK, i13_mppCup_HB_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i13_mppCup_HB_FW')
!i13_mppCup_HB_FW.positionName := #FORWARD
!i13_mppCup_HB_FW.number := 9
!insert (i13_mpCup_HB_FW, i13_mppCup_HB_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i13_mppCup_SH_MID')
!i13_mppCup_SH_MID.positionName := #MIDFIELDER
!i13_mppCup_SH_MID.number := 8
!insert (i13_mpCup_SH_MID, i13_mppCup_SH_MID) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i13_mppCup_SH_FW')
!i13_mppCup_SH_FW.positionName := #FORWARD
!i13_mppCup_SH_FW.number := 11
!insert (i13_mpCup_SH_FW, i13_mppCup_SH_FW) into MatchPlayerMatchPlayerPosition
```
## Generation 22 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 560 | 0.00% |
| Multiplicities Errors | 0 | 135 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 52 | 0.00% |

# Generation 23
```
!new Club('i14_clubWC')
!i14_clubWC.name := 'Westcliff FC'
!i14_clubWC.homeGround := 'Westcliff Arena'
!i14_clubWC.chairman := 'Mara Johansson'

!new Club('i14_clubTG')
!i14_clubTG.name := 'Thornbridge FC'
!i14_clubTG.homeGround := 'Thornbridge Heath'
!i14_clubTG.chairman := 'Gareth Nolan'

!new Club('i14_clubBR')
!i14_clubBR.name := 'Briarwood United'
!i14_clubBR.homeGround := 'Briarwood Community Ground'
!i14_clubBR.chairman := 'Sana Rahimi'

!new Team('i14_teamWC_1')
!i14_teamWC_1.name := 'Westcliff First XI'

!new Team('i14_teamTG_1')
!i14_teamTG_1.name := 'Thornbridge First XI'

!new Team('i14_teamBR_1')
!i14_teamBR_1.name := 'Briarwood First XI'

!insert (i14_clubWC, i14_teamWC_1) into ClubTeam
!insert (i14_clubTG, i14_teamTG_1) into ClubTeam
!insert (i14_clubBR, i14_teamBR_1) into ClubTeam

!new Competition('i14_compSpringLeague')
!i14_compSpringLeague.name := 'Spring Saturday League'
!i14_compSpringLeague.type := 'League'

!new TrainingSession('i14_tsWC_1')
!i14_tsWC_1.date := '2027-04-06'
!i14_tsWC_1.location := 'Westcliff Arena - Pitch 2'
!i14_tsWC_1.purpose := 'Pressing triggers and rest defence'

!new TrainingSession('i14_tsWC_2')
!i14_tsWC_2.date := '2027-04-08'
!i14_tsWC_2.location := 'Westcliff Arena - Gym'
!i14_tsWC_2.purpose := 'Strength maintenance and mobility'

!new TrainingSession('i14_tsTG_1')
!i14_tsTG_1.date := '2027-04-06'
!i14_tsTG_1.location := 'Thornbridge Heath - Main Pitch'
!i14_tsTG_1.purpose := 'Low-block organisation and counterattacks'

!new TrainingSession('i14_tsBR_1')
!i14_tsBR_1.date := '2027-04-07'
!i14_tsBR_1.location := 'Briarwood Community Ground - Pitch A'
!i14_tsBR_1.purpose := 'Build-up under pressure and midfield support'

!new TrainingSession('i14_tsBR_2')
!i14_tsBR_2.date := '2027-04-09'
!i14_tsBR_2.location := 'Briarwood Community Ground - Pitch B'
!i14_tsBR_2.purpose := 'Attacking set pieces and second phase'

!insert (i14_teamWC_1, i14_tsWC_1) into TeamTraining
!insert (i14_teamWC_1, i14_tsWC_2) into TeamTraining
!insert (i14_teamTG_1, i14_tsTG_1) into TeamTraining
!insert (i14_teamBR_1, i14_tsBR_1) into TeamTraining
!insert (i14_teamBR_1, i14_tsBR_2) into TeamTraining

!new TrainingNotes('i14_tnWC_1a')
!i14_tnWC_1a.note := 'Pressing shape better; midfield must cover inside lanes when the winger jumps.'
!i14_tnWC_1a.date := '2027-04-06'
!insert (i14_tsWC_1, i14_tnWC_1a) into TrainingTrainingNotes

!new TrainingNotes('i14_tnWC_2a')
!i14_tnWC_2a.note := 'Gym session completed; keep hamstring work controlled and avoid overload.'
!i14_tnWC_2a.date := '2027-04-08'
!insert (i14_tsWC_2, i14_tnWC_2a) into TrainingTrainingNotes

!new TrainingNotes('i14_tnTG_1a')
!i14_tnTG_1a.note := 'Block compact; counter passing accuracy needs improvement.'
!i14_tnTG_1a.date := '2027-04-06'
!insert (i14_tsTG_1, i14_tnTG_1a) into TrainingTrainingNotes

!new TrainingNotes('i14_tnBR_1a')
!i14_tnBR_1a.note := 'Good support angles from midfield; reduce risky square passes near own box.'
!i14_tnBR_1a.date := '2027-04-07'
!insert (i14_tsBR_1, i14_tnBR_1a) into TrainingTrainingNotes

!new TrainingNotes('i14_tnBR_2a')
!i14_tnBR_2a.note := 'Set-piece deliveries consistent; improve reactions to second balls.'
!i14_tnBR_2a.date := '2027-04-09'
!insert (i14_tsBR_2, i14_tnBR_2a) into TrainingTrainingNotes

!new Player('i14_pWC_GK')
!i14_pWC_GK.name := 'Daniel Kerr'
!i14_pWC_GK.age := 32
!i14_pWC_GK.bestFoot := #RIGHT
!i14_pWC_GK.phoneNumber := '+44 7700 501001'

!new Player('i14_pWC_MID')
!i14_pWC_MID.name := 'Amir Habib'
!i14_pWC_MID.age := 24
!i14_pWC_MID.bestFoot := #BOTH
!i14_pWC_MID.phoneNumber := '+44 7700 501002'

!new Player('i14_pWC_FW')
!i14_pWC_FW.name := 'Ethan Vale'
!i14_pWC_FW.age := 23
!i14_pWC_FW.bestFoot := #LEFT
!i14_pWC_FW.phoneNumber := '+44 7700 501003'

!new Player('i14_pTG_GK')
!i14_pTG_GK.name := 'Kacper Nowak'
!i14_pTG_GK.age := 29
!i14_pTG_GK.bestFoot := #LEFT
!i14_pTG_GK.phoneNumber := '+44 7700 502001'

!new Player('i14_pTG_DEF')
!i14_pTG_DEF.name := 'Noel Byrne'
!i14_pTG_DEF.age := 27
!i14_pTG_DEF.bestFoot := #RIGHT
!i14_pTG_DEF.phoneNumber := '+44 7700 502002'

!new Player('i14_pTG_FW')
!i14_pTG_FW.name := 'Haris Koval'
!i14_pTG_FW.age := 22
!i14_pTG_FW.bestFoot := #BOTH
!i14_pTG_FW.phoneNumber := '+44 7700 502003'

!new Player('i14_pBR_GK')
!i14_pBR_GK.name := 'Marco Esposito'
!i14_pBR_GK.age := 30
!i14_pBR_GK.bestFoot := #BOTH
!i14_pBR_GK.phoneNumber := '+44 7700 503001'

!new Player('i14_pBR_MID')
!i14_pBR_MID.name := 'Joon Park'
!i14_pBR_MID.age := 26
!i14_pBR_MID.bestFoot := #RIGHT
!i14_pBR_MID.phoneNumber := '+44 7700 503002'

!new Player('i14_pBR_FW')
!i14_pBR_FW.name := 'Luis Benitez'
!i14_pBR_FW.age := 25
!i14_pBR_FW.bestFoot := #LEFT
!i14_pBR_FW.phoneNumber := '+44 7700 503003'

!insert (i14_teamWC_1, i14_pWC_GK) into TeamPlayer
!insert (i14_teamWC_1, i14_pWC_MID) into TeamPlayer
!insert (i14_teamWC_1, i14_pWC_FW) into TeamPlayer

!insert (i14_teamTG_1, i14_pTG_GK) into TeamPlayer
!insert (i14_teamTG_1, i14_pTG_DEF) into TeamPlayer
!insert (i14_teamTG_1, i14_pTG_FW) into TeamPlayer

!insert (i14_teamBR_1, i14_pBR_GK) into TeamPlayer
!insert (i14_teamBR_1, i14_pBR_MID) into TeamPlayer
!insert (i14_teamBR_1, i14_pBR_FW) into TeamPlayer

!new Position('i14_posWC_GK')
!i14_posWC_GK.positionName := #GOALKEEPER
!insert (i14_pWC_GK, i14_posWC_GK) into PlayerPositions

!new Position('i14_posWC_MID1')
!i14_posWC_MID1.positionName := #MIDFIELDER
!insert (i14_pWC_MID, i14_posWC_MID1) into PlayerPositions

!new Position('i14_posWC_MID2')
!i14_posWC_MID2.positionName := #DEFENDER
!insert (i14_pWC_MID, i14_posWC_MID2) into PlayerPositions

!new Position('i14_posWC_FW')
!i14_posWC_FW.positionName := #FORWARD
!insert (i14_pWC_FW, i14_posWC_FW) into PlayerPositions

!new Position('i14_posTG_GK')
!i14_posTG_GK.positionName := #GOALKEEPER
!insert (i14_pTG_GK, i14_posTG_GK) into PlayerPositions

!new Position('i14_posTG_DEF')
!i14_posTG_DEF.positionName := #DEFENDER
!insert (i14_pTG_DEF, i14_posTG_DEF) into PlayerPositions

!new Position('i14_posTG_DEF_alt')
!i14_posTG_DEF_alt.positionName := #MIDFIELDER
!insert (i14_pTG_DEF, i14_posTG_DEF_alt) into PlayerPositions

!new Position('i14_posTG_FW1')
!i14_posTG_FW1.positionName := #FORWARD
!insert (i14_pTG_FW, i14_posTG_FW1) into PlayerPositions

!new Position('i14_posTG_FW2')
!i14_posTG_FW2.positionName := #MIDFIELDER
!insert (i14_pTG_FW, i14_posTG_FW2) into PlayerPositions

!new Position('i14_posBR_GK')
!i14_posBR_GK.positionName := #GOALKEEPER
!insert (i14_pBR_GK, i14_posBR_GK) into PlayerPositions

!new Position('i14_posBR_MID')
!i14_posBR_MID.positionName := #MIDFIELDER
!insert (i14_pBR_MID, i14_posBR_MID) into PlayerPositions

!new Position('i14_posBR_FW1')
!i14_posBR_FW1.positionName := #FORWARD
!insert (i14_pBR_FW, i14_posBR_FW1) into PlayerPositions

!new Position('i14_posBR_FW2')
!i14_posBR_FW2.positionName := #MIDFIELDER
!insert (i14_pBR_FW, i14_posBR_FW2) into PlayerPositions

!new TrainingObjective('i14_objWC_GK_1')
!i14_objWC_GK_1.areaToImprove := 'Commanding the six-yard box on corners'
!i14_objWC_GK_1.startDate := '2027-04-01'
!i14_objWC_GK_1.endDate := '2027-05-01'
!i14_objWC_GK_1.success := false
!insert (i14_objWC_GK_1, i14_pWC_GK) into TrainingObjectivePlayer

!new TrainingObjective('i14_objWC_MID_1')
!i14_objWC_MID_1.areaToImprove := 'Playing forward earlier after regain'
!i14_objWC_MID_1.startDate := '2027-04-01'
!i14_objWC_MID_1.endDate := '2027-05-01'
!i14_objWC_MID_1.success := true
!insert (i14_objWC_MID_1, i14_pWC_MID) into TrainingObjectivePlayer

!new TrainingObjective('i14_objWC_FW_1')
!i14_objWC_FW_1.areaToImprove := 'First-time finishing from cut-backs'
!i14_objWC_FW_1.startDate := '2027-04-01'
!i14_objWC_FW_1.endDate := '2027-05-01'
!i14_objWC_FW_1.success := false
!insert (i14_objWC_FW_1, i14_pWC_FW) into TrainingObjectivePlayer

!new TrainingObjective('i14_objTG_GK_1')
!i14_objTG_GK_1.areaToImprove := 'Distribution speed after saves'
!i14_objTG_GK_1.startDate := '2027-04-01'
!i14_objTG_GK_1.endDate := '2027-05-01'
!i14_objTG_GK_1.success := true
!insert (i14_objTG_GK_1, i14_pTG_GK) into TrainingObjectivePlayer

!new TrainingObjective('i14_objTG_DEF_1')
!i14_objTG_DEF_1.areaToImprove := 'Back-post marking on crosses'
!i14_objTG_DEF_1.startDate := '2027-04-01'
!i14_objTG_DEF_1.endDate := '2027-05-01'
!i14_objTG_DEF_1.success := false
!insert (i14_objTG_DEF_1, i14_pTG_DEF) into TrainingObjectivePlayer

!new TrainingObjective('i14_objTG_FW_1')
!i14_objTG_FW_1.areaToImprove := 'Timing curved runs to stay onside'
!i14_objTG_FW_1.startDate := '2027-04-01'
!i14_objTG_FW_1.endDate := '2027-05-01'
!i14_objTG_FW_1.success := false
!insert (i14_objTG_FW_1, i14_pTG_FW) into TrainingObjectivePlayer

!new TrainingObjective('i14_objBR_GK_1')
!i14_objBR_GK_1.areaToImprove := 'Handling shots through traffic'
!i14_objBR_GK_1.startDate := '2027-04-01'
!i14_objBR_GK_1.endDate := '2027-05-01'
!i14_objBR_GK_1.success := true
!insert (i14_objBR_GK_1, i14_pBR_GK) into TrainingObjectivePlayer

!new TrainingObjective('i14_objBR_MID_1')
!i14_objBR_MID_1.areaToImprove := 'Receiving on the half-turn under pressure'
!i14_objBR_MID_1.startDate := '2027-04-01'
!i14_objBR_MID_1.endDate := '2027-05-01'
!i14_objBR_MID_1.success := false
!insert (i14_objBR_MID_1, i14_pBR_MID) into TrainingObjectivePlayer

!new TrainingObjective('i14_objBR_FW_1')
!i14_objBR_FW_1.areaToImprove := 'Hold-up play with back to goal'
!i14_objBR_FW_1.startDate := '2027-04-01'
!i14_objBR_FW_1.endDate := '2027-05-01'
!i14_objBR_FW_1.success := false
!insert (i14_objBR_FW_1, i14_pBR_FW) into TrainingObjectivePlayer

!new PlayerNotes('i14_pnWC_1')
!i14_pnWC_1.note := 'Excellent organiser; needs to be louder on defensive corners.'
!i14_pnWC_1.date := '2027-04-09'
!insert (i14_pWC_GK, i14_pnWC_1) into PlayerPlayerNotes

!new PlayerNotes('i14_pnBR_1')
!i14_pnBR_1.note := 'Very composed on the ball; can speed up decisions when pressed aggressively.'
!i14_pnBR_1.date := '2027-04-10'
!insert (i14_pBR_MID, i14_pnBR_1) into PlayerPlayerNotes

!new TrainingFailedToAttend('i14_tfa1')
!i14_tfa1.reason := 'Family commitment'
!insert (i14_tsWC_2, i14_tfa1) into TrainingFailded
!insert (i14_tfa1, i14_pWC_FW) into FailedPlayer

!new TrainingFailedToAttend('i14_tfa2')
!i14_tfa2.reason := 'Work shift overran'
!insert (i14_tsBR_2, i14_tfa2) into TrainingFailded
!insert (i14_tfa2, i14_pBR_FW) into FailedPlayer

!new Match('i14_matchL1')
!i14_matchL1.date := '2027-04-12'
!i14_matchL1.homeAway := true

!new Match('i14_matchL2')
!i14_matchL2.date := '2027-04-18'
!i14_matchL2.homeAway := false

!insert (i14_compSpringLeague, i14_matchL1) into CompetitionMatch
!insert (i14_compSpringLeague, i14_matchL2) into CompetitionMatch

!insert (i14_teamWC_1, i14_matchL1) into LocalMatch
!insert (i14_teamTG_1, i14_matchL1) into VisitorMatch

!insert (i14_teamBR_1, i14_matchL2) into LocalMatch
!insert (i14_teamWC_1, i14_matchL2) into VisitorMatch

!new MatchReport('i14_mrL1')
!i14_mrL1.duration := 90
!i14_mrL1.scoreVisitor := 1
!i14_mrL1.scoreLocal := 3
!insert (i14_matchL1, i14_mrL1) into MatchMatchReport

!new MatchReport('i14_mrL2')
!i14_mrL2.duration := 90
!i14_mrL2.scoreVisitor := 2
!i14_mrL2.scoreLocal := 2
!insert (i14_matchL2, i14_mrL2) into MatchMatchReport

!new MatchEvent('i14_evL1_goal1')
!i14_evL1_goal1.eventType := #GOAL
!i14_evL1_goal1.time := 8
!insert (i14_matchL1, i14_evL1_goal1) into MatchMatchEvent

!new MatchEvent('i14_evL1_goal2')
!i14_evL1_goal2.eventType := #GOAL
!i14_evL1_goal2.time := 21
!insert (i14_matchL1, i14_evL1_goal2) into MatchMatchEvent

!new MatchEvent('i14_evL1_goal3')
!i14_evL1_goal3.eventType := #GOAL
!i14_evL1_goal3.time := 62
!insert (i14_matchL1, i14_evL1_goal3) into MatchMatchEvent

!new MatchEvent('i14_evL1_goal4')
!i14_evL1_goal4.eventType := #GOAL
!i14_evL1_goal4.time := 79
!insert (i14_matchL1, i14_evL1_goal4) into MatchMatchEvent

!new MatchEvent('i14_evL1_corner1')
!i14_evL1_corner1.eventType := #CORNER
!i14_evL1_corner1.time := 34
!insert (i14_matchL1, i14_evL1_corner1) into MatchMatchEvent

!new MatchEvent('i14_evL1_foul1')
!i14_evL1_foul1.eventType := #FOUL
!i14_evL1_foul1.time := 48
!insert (i14_matchL1, i14_evL1_foul1) into MatchMatchEvent

!new MatchEvent('i14_evL1_off1')
!i14_evL1_off1.eventType := #OFFSIDE
!i14_evL1_off1.time := 71
!insert (i14_matchL1, i14_evL1_off1) into MatchMatchEvent

!new MatchNote('i14_mnL1')
!i14_mnL1.note := 'Westcliff pressed well and created chances from turnovers; Thornbridge scored once on a break.'
!i14_mnL1.date := '2027-04-12'
!insert (i14_matchL1, i14_mnL1) into MatchMatchNote

!new MatchEvent('i14_evL2_goal1')
!i14_evL2_goal1.eventType := #GOAL
!i14_evL2_goal1.time := 12
!insert (i14_matchL2, i14_evL2_goal1) into MatchMatchEvent

!new MatchEvent('i14_evL2_goal2')
!i14_evL2_goal2.eventType := #GOAL
!i14_evL2_goal2.time := 38
!insert (i14_matchL2, i14_evL2_goal2) into MatchMatchEvent

!new MatchEvent('i14_evL2_goal3')
!i14_evL2_goal3.eventType := #GOAL
!i14_evL2_goal3.time := 57
!insert (i14_matchL2, i14_evL2_goal3) into MatchMatchEvent

!new MatchEvent('i14_evL2_goal4')
!i14_evL2_goal4.eventType := #GOAL
!i14_evL2_goal4.time := 84
!insert (i14_matchL2, i14_evL2_goal4) into MatchMatchEvent

!new MatchEvent('i14_evL2_pen1')
!i14_evL2_pen1.eventType := #PENALTY
!i14_evL2_pen1.time := 83
!insert (i14_matchL2, i14_evL2_pen1) into MatchMatchEvent

!new MatchEvent('i14_evL2_foul1')
!i14_evL2_foul1.eventType := #FOUL
!i14_evL2_foul1.time := 29
!insert (i14_matchL2, i14_evL2_foul1) into MatchMatchEvent

!new MatchNote('i14_mnL2')
!i14_mnL2.note := 'Entertaining draw; late penalty levelled the match after Briarwood built a second-half lead.'
!i14_mnL2.date := '2027-04-18'
!insert (i14_matchL2, i14_mnL2) into MatchMatchNote

!new MatchPlayer('i14_mpL1_WC_GK')
!i14_mpL1_WC_GK.booked := false
!i14_mpL1_WC_GK.goals := 0
!i14_mpL1_WC_GK.rating := 7

!new MatchPlayer('i14_mpL1_WC_MID')
!i14_mpL1_WC_MID.booked := true
!i14_mpL1_WC_MID.goals := 1
!i14_mpL1_WC_MID.rating := 8

!new MatchPlayer('i14_mpL1_WC_FW')
!i14_mpL1_WC_FW.booked := false
!i14_mpL1_WC_FW.goals := 2
!i14_mpL1_WC_FW.rating := 9

!new MatchPlayer('i14_mpL1_TG_GK')
!i14_mpL1_TG_GK.booked := false
!i14_mpL1_TG_GK.goals := 0
!i14_mpL1_TG_GK.rating := 6

!new MatchPlayer('i14_mpL1_TG_DEF')
!i14_mpL1_TG_DEF.booked := true
!i14_mpL1_TG_DEF.goals := 0
!i14_mpL1_TG_DEF.rating := 6

!new MatchPlayer('i14_mpL1_TG_FW')
!i14_mpL1_TG_FW.booked := false
!i14_mpL1_TG_FW.goals := 1
!i14_mpL1_TG_FW.rating := 7

!insert (i14_matchL1, i14_mpL1_WC_GK) into MatchMatchPlayer
!insert (i14_matchL1, i14_mpL1_WC_MID) into MatchMatchPlayer
!insert (i14_matchL1, i14_mpL1_WC_FW) into MatchMatchPlayer
!insert (i14_matchL1, i14_mpL1_TG_GK) into MatchMatchPlayer
!insert (i14_matchL1, i14_mpL1_TG_DEF) into MatchMatchPlayer
!insert (i14_matchL1, i14_mpL1_TG_FW) into MatchMatchPlayer

!insert (i14_pWC_GK, i14_mpL1_WC_GK) into PlayerMatch
!insert (i14_pWC_MID, i14_mpL1_WC_MID) into PlayerMatch
!insert (i14_pWC_FW, i14_mpL1_WC_FW) into PlayerMatch
!insert (i14_pTG_GK, i14_mpL1_TG_GK) into PlayerMatch
!insert (i14_pTG_DEF, i14_mpL1_TG_DEF) into PlayerMatch
!insert (i14_pTG_FW, i14_mpL1_TG_FW) into PlayerMatch

!new MatchPlayerPosition('i14_mppL1_WC_GK')
!i14_mppL1_WC_GK.positionName := #GOALKEEPER
!i14_mppL1_WC_GK.number := 1
!insert (i14_mpL1_WC_GK, i14_mppL1_WC_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i14_mppL1_WC_MID')
!i14_mppL1_WC_MID.positionName := #MIDFIELDER
!i14_mppL1_WC_MID.number := 8
!insert (i14_mpL1_WC_MID, i14_mppL1_WC_MID) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i14_mppL1_WC_FW')
!i14_mppL1_WC_FW.positionName := #FORWARD
!i14_mppL1_WC_FW.number := 9
!insert (i14_mpL1_WC_FW, i14_mppL1_WC_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i14_mppL1_TG_GK')
!i14_mppL1_TG_GK.positionName := #GOALKEEPER
!i14_mppL1_TG_GK.number := 1
!insert (i14_mpL1_TG_GK, i14_mppL1_TG_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i14_mppL1_TG_DEF')
!i14_mppL1_TG_DEF.positionName := #DEFENDER
!i14_mppL1_TG_DEF.number := 5
!insert (i14_mpL1_TG_DEF, i14_mppL1_TG_DEF) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i14_mppL1_TG_FW')
!i14_mppL1_TG_FW.positionName := #FORWARD
!i14_mppL1_TG_FW.number := 11
!insert (i14_mpL1_TG_FW, i14_mppL1_TG_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('i14_mpL2_BR_GK')
!i14_mpL2_BR_GK.booked := false
!i14_mpL2_BR_GK.goals := 0
!i14_mpL2_BR_GK.rating := 7

!new MatchPlayer('i14_mpL2_BR_MID')
!i14_mpL2_BR_MID.booked := true
!i14_mpL2_BR_MID.goals := 1
!i14_mpL2_BR_MID.rating := 7

!new MatchPlayer('i14_mpL2_BR_FW')
!i14_mpL2_BR_FW.booked := false
!i14_mpL2_BR_FW.goals := 1
!i14_mpL2_BR_FW.rating := 8

!new MatchPlayer('i14_mpL2_WC_GK')
!i14_mpL2_WC_GK.booked := false
!i14_mpL2_WC_GK.goals := 0
!i14_mpL2_WC_GK.rating := 6

!new MatchPlayer('i14_mpL2_WC_MID')
!i14_mpL2_WC_MID.booked := false
!i14_mpL2_WC_MID.goals := 1
!i14_mpL2_WC_MID.rating := 7

!new MatchPlayer('i14_mpL2_WC_FW')
!i14_mpL2_WC_FW.booked := false
!i14_mpL2_WC_FW.goals := 1
!i14_mpL2_WC_FW.rating := 7

!insert (i14_matchL2, i14_mpL2_BR_GK) into MatchMatchPlayer
!insert (i14_matchL2, i14_mpL2_BR_MID) into MatchMatchPlayer
!insert (i14_matchL2, i14_mpL2_BR_FW) into MatchMatchPlayer
!insert (i14_matchL2, i14_mpL2_WC_GK) into MatchMatchPlayer
!insert (i14_matchL2, i14_mpL2_WC_MID) into MatchMatchPlayer
!insert (i14_matchL2, i14_mpL2_WC_FW) into MatchMatchPlayer

!insert (i14_pBR_GK, i14_mpL2_BR_GK) into PlayerMatch
!insert (i14_pBR_MID, i14_mpL2_BR_MID) into PlayerMatch
!insert (i14_pBR_FW, i14_mpL2_BR_FW) into PlayerMatch
!insert (i14_pWC_GK, i14_mpL2_WC_GK) into PlayerMatch
!insert (i14_pWC_MID, i14_mpL2_WC_MID) into PlayerMatch
!insert (i14_pWC_FW, i14_mpL2_WC_FW) into PlayerMatch

!new MatchPlayerPosition('i14_mppL2_BR_GK')
!i14_mppL2_BR_GK.positionName := #GOALKEEPER
!i14_mppL2_BR_GK.number := 1
!insert (i14_mpL2_BR_GK, i14_mppL2_BR_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i14_mppL2_BR_MID')
!i14_mppL2_BR_MID.positionName := #MIDFIELDER
!i14_mppL2_BR_MID.number := 8
!insert (i14_mpL2_BR_MID, i14_mppL2_BR_MID) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i14_mppL2_BR_FW')
!i14_mppL2_BR_FW.positionName := #FORWARD
!i14_mppL2_BR_FW.number := 9
!insert (i14_mpL2_BR_FW, i14_mppL2_BR_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i14_mppL2_WC_GK')
!i14_mppL2_WC_GK.positionName := #GOALKEEPER
!i14_mppL2_WC_GK.number := 1
!insert (i14_mpL2_WC_GK, i14_mppL2_WC_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i14_mppL2_WC_MID')
!i14_mppL2_WC_MID.positionName := #MIDFIELDER
!i14_mppL2_WC_MID.number := 6
!insert (i14_mpL2_WC_MID, i14_mppL2_WC_MID) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i14_mppL2_WC_FW')
!i14_mppL2_WC_FW.positionName := #FORWARD
!i14_mppL2_WC_FW.number := 11
!insert (i14_mpL2_WC_FW, i14_mppL2_WC_FW) into MatchPlayerMatchPlayerPosition
```
## Generation 23 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 434 | 0.00% |
| Multiplicities Errors | 0 | 109 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 34 | 0.00% |

# Generation 24
```
!new Club('i15_clubSBY')
!i15_clubSBY.name := 'Seabury FC'
!i15_clubSBY.homeGround := 'Seabury Pier Stadium'
!i15_clubSBY.chairman := 'Lena Whitfield'

!new Club('i15_clubAWR')
!i15_clubAWR.name := 'Ashwell Rangers'
!i15_clubAWR.homeGround := 'Ashwell Common'
!i15_clubAWR.chairman := 'Graham ONeill'

!new Team('i15_teamSBY_V')
!i15_teamSBY_V.name := 'Seabury Veterans'

!new Team('i15_teamSBY_R')
!i15_teamSBY_R.name := 'Seabury Reserves'

!new Team('i15_teamAWR_1')
!i15_teamAWR_1.name := 'Ashwell Rangers First XI'

!insert (i15_clubSBY, i15_teamSBY_V) into ClubTeam
!insert (i15_clubSBY, i15_teamSBY_R) into ClubTeam
!insert (i15_clubAWR, i15_teamAWR_1) into ClubTeam

!new Competition('i15_compCharity')
!i15_compCharity.name := 'Harbour Hospice Charity Match Day'
!i15_compCharity.type := 'Friendly'

!new Competition('i15_compResLeague')
!i15_compResLeague.name := 'Reserve Midweek League'
!i15_compResLeague.type := 'League'

!new TrainingSession('i15_tsSBY_V_1')
!i15_tsSBY_V_1.date := '2027-05-08'
!i15_tsSBY_V_1.location := 'Seabury Pier Stadium - Pitch 3'
!i15_tsSBY_V_1.purpose := 'Light technical session and mobility'

!new TrainingSession('i15_tsSBY_R_1')
!i15_tsSBY_R_1.date := '2027-05-09'
!i15_tsSBY_R_1.location := 'Seabury Pier Stadium - Gym'
!i15_tsSBY_R_1.purpose := 'Strength and aerobic conditioning'

!new TrainingSession('i15_tsAWR_1')
!i15_tsAWR_1.date := '2027-05-09'
!i15_tsAWR_1.location := 'Ashwell Common - Main Pitch'
!i15_tsAWR_1.purpose := 'Defensive set pieces and counterattacks'

!insert (i15_teamSBY_V, i15_tsSBY_V_1) into TeamTraining
!insert (i15_teamSBY_R, i15_tsSBY_R_1) into TeamTraining
!insert (i15_teamAWR_1, i15_tsAWR_1) into TeamTraining

!new TrainingNotes('i15_tnSBY_V_1a')
!i15_tnSBY_V_1a.note := 'Good tempo for a veteran session; keep intensity moderate and focus on clean touches.'
!i15_tnSBY_V_1a.date := '2027-05-08'
!insert (i15_tsSBY_V_1, i15_tnSBY_V_1a) into TrainingTrainingNotes

!new TrainingNotes('i15_tnSBY_R_1a')
!i15_tnSBY_R_1a.note := 'Fitness levels improving; ensure proper recovery and hydration after gym work.'
!i15_tnSBY_R_1a.date := '2027-05-09'
!insert (i15_tsSBY_R_1, i15_tnSBY_R_1a) into TrainingTrainingNotes

!new TrainingNotes('i15_tnAWR_1a')
!i15_tnAWR_1a.note := 'Set-piece roles clear; transitions good but final pass must be calmer.'
!i15_tnAWR_1a.date := '2027-05-09'
!insert (i15_tsAWR_1, i15_tnAWR_1a) into TrainingTrainingNotes

!new Player('i15_pSBYV_GK')
!i15_pSBYV_GK.name := 'Martin Keogh'
!i15_pSBYV_GK.age := 41
!i15_pSBYV_GK.bestFoot := #RIGHT
!i15_pSBYV_GK.phoneNumber := '+44 7700 611901'

!new Player('i15_pSBYV_DEF')
!i15_pSBYV_DEF.name := 'Owen Barrett'
!i15_pSBYV_DEF.age := 39
!i15_pSBYV_DEF.bestFoot := #BOTH
!i15_pSBYV_DEF.phoneNumber := '+44 7700 611902'

!new Player('i15_pSBYV_MID')
!i15_pSBYV_MID.name := 'Adrian Wells'
!i15_pSBYV_MID.age := 37
!i15_pSBYV_MID.bestFoot := #LEFT
!i15_pSBYV_MID.phoneNumber := '+44 7700 611903'

!new Player('i15_pSBYR_GK')
!i15_pSBYR_GK.name := 'Toby Grant'
!i15_pSBYR_GK.age := 20
!i15_pSBYR_GK.bestFoot := #BOTH
!i15_pSBYR_GK.phoneNumber := '+44 7700 612901'

!new Player('i15_pSBYR_FW')
!i15_pSBYR_FW.name := 'Kareem Doss'
!i15_pSBYR_FW.age := 19
!i15_pSBYR_FW.bestFoot := #RIGHT
!i15_pSBYR_FW.phoneNumber := '+44 7700 612902'

!new Player('i15_pAWR_GK')
!i15_pAWR_GK.name := 'Jonah Kline'
!i15_pAWR_GK.age := 30
!i15_pAWR_GK.bestFoot := #LEFT
!i15_pAWR_GK.phoneNumber := '+44 7700 621901'

!new Player('i15_pAWR_DEF')
!i15_pAWR_DEF.name := 'Felix Morton'
!i15_pAWR_DEF.age := 27
!i15_pAWR_DEF.bestFoot := #RIGHT
!i15_pAWR_DEF.phoneNumber := '+44 7700 621902'

!new Player('i15_pAWR_FW')
!i15_pAWR_FW.name := 'Rami Khoury'
!i15_pAWR_FW.age := 24
!i15_pAWR_FW.bestFoot := #BOTH
!i15_pAWR_FW.phoneNumber := '+44 7700 621903'

!insert (i15_teamSBY_V, i15_pSBYV_GK) into TeamPlayer
!insert (i15_teamSBY_V, i15_pSBYV_DEF) into TeamPlayer
!insert (i15_teamSBY_V, i15_pSBYV_MID) into TeamPlayer

!insert (i15_teamSBY_R, i15_pSBYR_GK) into TeamPlayer
!insert (i15_teamSBY_R, i15_pSBYR_FW) into TeamPlayer

!insert (i15_teamAWR_1, i15_pAWR_GK) into TeamPlayer
!insert (i15_teamAWR_1, i15_pAWR_DEF) into TeamPlayer
!insert (i15_teamAWR_1, i15_pAWR_FW) into TeamPlayer

!new Position('i15_posSBYV_GK')
!i15_posSBYV_GK.positionName := #GOALKEEPER
!insert (i15_pSBYV_GK, i15_posSBYV_GK) into PlayerPositions

!new Position('i15_posSBYV_DEF')
!i15_posSBYV_DEF.positionName := #DEFENDER
!insert (i15_pSBYV_DEF, i15_posSBYV_DEF) into PlayerPositions

!new Position('i15_posSBYV_DEF_alt')
!i15_posSBYV_DEF_alt.positionName := #MIDFIELDER
!insert (i15_pSBYV_DEF, i15_posSBYV_DEF_alt) into PlayerPositions

!new Position('i15_posSBYV_MID')
!i15_posSBYV_MID.positionName := #MIDFIELDER
!insert (i15_pSBYV_MID, i15_posSBYV_MID) into PlayerPositions

!new Position('i15_posSBYR_GK')
!i15_posSBYR_GK.positionName := #GOALKEEPER
!insert (i15_pSBYR_GK, i15_posSBYR_GK) into PlayerPositions

!new Position('i15_posSBYR_FW')
!i15_posSBYR_FW.positionName := #FORWARD
!insert (i15_pSBYR_FW, i15_posSBYR_FW) into PlayerPositions

!new Position('i15_posSBYR_FW_alt')
!i15_posSBYR_FW_alt.positionName := #MIDFIELDER
!insert (i15_pSBYR_FW, i15_posSBYR_FW_alt) into PlayerPositions

!new Position('i15_posAWR_GK')
!i15_posAWR_GK.positionName := #GOALKEEPER
!insert (i15_pAWR_GK, i15_posAWR_GK) into PlayerPositions

!new Position('i15_posAWR_DEF')
!i15_posAWR_DEF.positionName := #DEFENDER
!insert (i15_pAWR_DEF, i15_posAWR_DEF) into PlayerPositions

!new Position('i15_posAWR_FW')
!i15_posAWR_FW.positionName := #FORWARD
!insert (i15_pAWR_FW, i15_posAWR_FW) into PlayerPositions

!new Position('i15_posAWR_FW_alt')
!i15_posAWR_FW_alt.positionName := #MIDFIELDER
!insert (i15_pAWR_FW, i15_posAWR_FW_alt) into PlayerPositions

!new TrainingObjective('i15_objSBYV_GK_1')
!i15_objSBYV_GK_1.areaToImprove := 'Better starting position when defending long balls'
!i15_objSBYV_GK_1.startDate := '2027-05-01'
!i15_objSBYV_GK_1.endDate := '2027-06-01'
!i15_objSBYV_GK_1.success := false
!insert (i15_objSBYV_GK_1, i15_pSBYV_GK) into TrainingObjectivePlayer

!new TrainingObjective('i15_objSBYV_DEF_1')
!i15_objSBYV_DEF_1.areaToImprove := 'Timing of stepping out to intercept'
!i15_objSBYV_DEF_1.startDate := '2027-05-01'
!i15_objSBYV_DEF_1.endDate := '2027-06-01'
!i15_objSBYV_DEF_1.success := true
!insert (i15_objSBYV_DEF_1, i15_pSBYV_DEF) into TrainingObjectivePlayer

!new TrainingObjective('i15_objSBYV_MID_1')
!i15_objSBYV_MID_1.areaToImprove := 'Switching play with fewer touches'
!i15_objSBYV_MID_1.startDate := '2027-05-01'
!i15_objSBYV_MID_1.endDate := '2027-06-01'
!i15_objSBYV_MID_1.success := false
!insert (i15_objSBYV_MID_1, i15_pSBYV_MID) into TrainingObjectivePlayer

!new TrainingObjective('i15_objSBYR_GK_1')
!i15_objSBYR_GK_1.areaToImprove := 'Handling shots through bodies'
!i15_objSBYR_GK_1.startDate := '2027-05-01'
!i15_objSBYR_GK_1.endDate := '2027-06-01'
!i15_objSBYR_GK_1.success := true
!insert (i15_objSBYR_GK_1, i15_pSBYR_GK) into TrainingObjectivePlayer

!new TrainingObjective('i15_objSBYR_FW_1')
!i15_objSBYR_FW_1.areaToImprove := 'Curved runs to stay onside'
!i15_objSBYR_FW_1.startDate := '2027-05-01'
!i15_objSBYR_FW_1.endDate := '2027-06-01'
!i15_objSBYR_FW_1.success := false
!insert (i15_objSBYR_FW_1, i15_pSBYR_FW) into TrainingObjectivePlayer

!new TrainingObjective('i15_objAWR_GK_1')
!i15_objAWR_GK_1.areaToImprove := 'Distribution speed after catches'
!i15_objAWR_GK_1.startDate := '2027-05-01'
!i15_objAWR_GK_1.endDate := '2027-06-01'
!i15_objAWR_GK_1.success := true
!insert (i15_objAWR_GK_1, i15_pAWR_GK) into TrainingObjectivePlayer

!new TrainingObjective('i15_objAWR_DEF_1')
!i15_objAWR_DEF_1.areaToImprove := 'Back-post marking on crosses'
!i15_objAWR_DEF_1.startDate := '2027-05-01'
!i15_objAWR_DEF_1.endDate := '2027-06-01'
!i15_objAWR_DEF_1.success := false
!insert (i15_objAWR_DEF_1, i15_pAWR_DEF) into TrainingObjectivePlayer

!new TrainingObjective('i15_objAWR_FW_1')
!i15_objAWR_FW_1.areaToImprove := 'Finishing first time from cut-backs'
!i15_objAWR_FW_1.startDate := '2027-05-01'
!i15_objAWR_FW_1.endDate := '2027-06-01'
!i15_objAWR_FW_1.success := false
!insert (i15_objAWR_FW_1, i15_pAWR_FW) into TrainingObjectivePlayer

!new PlayerNotes('i15_pnV1')
!i15_pnV1.note := 'Excellent attitude; manage workload carefully and prioritise recovery.'
!i15_pnV1.date := '2027-05-09'
!insert (i15_pSBYV_MID, i15_pnV1) into PlayerPlayerNotes

!new PlayerNotes('i15_pnR1')
!i15_pnR1.note := 'Quick learner; needs to improve composure when finishing under pressure.'
!i15_pnR1.date := '2027-05-10'
!insert (i15_pSBYR_FW, i15_pnR1) into PlayerPlayerNotes

!new TrainingFailedToAttend('i15_tfa1')
!i15_tfa1.reason := 'Physio appointment'
!insert (i15_tsSBY_R_1, i15_tfa1) into TrainingFailded
!insert (i15_tfa1, i15_pSBYR_GK) into FailedPlayer

!new TrainingFailedToAttend('i15_tfa2')
!i15_tfa2.reason := 'Work commitment'
!insert (i15_tsAWR_1, i15_tfa2) into TrainingFailded
!insert (i15_tfa2, i15_pAWR_DEF) into FailedPlayer

!new Match('i15_matchCharity')
!i15_matchCharity.date := '2027-05-15'
!i15_matchCharity.homeAway := true

!new Match('i15_matchResL1')
!i15_matchResL1.date := '2027-05-16'
!i15_matchResL1.homeAway := false

!insert (i15_compCharity, i15_matchCharity) into CompetitionMatch
!insert (i15_compResLeague, i15_matchResL1) into CompetitionMatch

!insert (i15_teamSBY_V, i15_matchCharity) into LocalMatch
!insert (i15_teamAWR_1, i15_matchCharity) into VisitorMatch

!insert (i15_teamAWR_1, i15_matchResL1) into LocalMatch
!insert (i15_teamSBY_R, i15_matchResL1) into VisitorMatch

!new MatchReport('i15_mrCharity')
!i15_mrCharity.duration := 90
!i15_mrCharity.scoreVisitor := 2
!i15_mrCharity.scoreLocal := 2
!insert (i15_matchCharity, i15_mrCharity) into MatchMatchReport

!new MatchReport('i15_mrResL1')
!i15_mrResL1.duration := 90
!i15_mrResL1.scoreVisitor := 1
!i15_mrResL1.scoreLocal := 0
!insert (i15_matchResL1, i15_mrResL1) into MatchMatchReport

!new MatchEvent('i15_evC_goal1')
!i15_evC_goal1.eventType := #GOAL
!i15_evC_goal1.time := 12
!insert (i15_matchCharity, i15_evC_goal1) into MatchMatchEvent

!new MatchEvent('i15_evC_goal2')
!i15_evC_goal2.eventType := #GOAL
!i15_evC_goal2.time := 41
!insert (i15_matchCharity, i15_evC_goal2) into MatchMatchEvent

!new MatchEvent('i15_evC_goal3')
!i15_evC_goal3.eventType := #GOAL
!i15_evC_goal3.time := 63
!insert (i15_matchCharity, i15_evC_goal3) into MatchMatchEvent

!new MatchEvent('i15_evC_goal4')
!i15_evC_goal4.eventType := #GOAL
!i15_evC_goal4.time := 86
!insert (i15_matchCharity, i15_evC_goal4) into MatchMatchEvent

!new MatchEvent('i15_evC_corner1')
!i15_evC_corner1.eventType := #CORNER
!i15_evC_corner1.time := 55
!insert (i15_matchCharity, i15_evC_corner1) into MatchMatchEvent

!new MatchEvent('i15_evC_foul1')
!i15_evC_foul1.eventType := #FOUL
!i15_evC_foul1.time := 70
!insert (i15_matchCharity, i15_evC_foul1) into MatchMatchEvent

!new MatchNote('i15_mnCharity')
!i15_mnCharity.note := 'Charity match played in good spirit; veterans scored late to draw after Ashwell led twice.'
!i15_mnCharity.date := '2027-05-15'
!insert (i15_matchCharity, i15_mnCharity) into MatchMatchNote

!new MatchEvent('i15_evR_goal1')
!i15_evR_goal1.eventType := #GOAL
!i15_evR_goal1.time := 74
!insert (i15_matchResL1, i15_evR_goal1) into MatchMatchEvent

!new MatchEvent('i15_evR_off1')
!i15_evR_off1.eventType := #OFFSIDE
!i15_evR_off1.time := 51
!insert (i15_matchResL1, i15_evR_off1) into MatchMatchEvent

!new MatchEvent('i15_evR_pen1')
!i15_evR_pen1.eventType := #PENALTY
!i15_evR_pen1.time := 22
!insert (i15_matchResL1, i15_evR_pen1) into MatchMatchEvent

!new MatchNote('i15_mnResL1')
!i15_mnResL1.note := 'Reserve league match decided by a late breakaway; visitors defended well for long periods.'
!i15_mnResL1.date := '2027-05-16'
!insert (i15_matchResL1, i15_mnResL1) into MatchMatchNote

!new MatchPlayer('i15_mpC_SBYV_GK')
!i15_mpC_SBYV_GK.booked := false
!i15_mpC_SBYV_GK.goals := 0
!i15_mpC_SBYV_GK.rating := 7

!new MatchPlayer('i15_mpC_SBYV_MID')
!i15_mpC_SBYV_MID.booked := false
!i15_mpC_SBYV_MID.goals := 1
!i15_mpC_SBYV_MID.rating := 8

!new MatchPlayer('i15_mpC_AWR_FW')
!i15_mpC_AWR_FW.booked := true
!i15_mpC_AWR_FW.goals := 2
!i15_mpC_AWR_FW.rating := 8

!insert (i15_matchCharity, i15_mpC_SBYV_GK) into MatchMatchPlayer
!insert (i15_matchCharity, i15_mpC_SBYV_MID) into MatchMatchPlayer
!insert (i15_matchCharity, i15_mpC_AWR_FW) into MatchMatchPlayer

!insert (i15_pSBYV_GK, i15_mpC_SBYV_GK) into PlayerMatch
!insert (i15_pSBYV_MID, i15_mpC_SBYV_MID) into PlayerMatch
!insert (i15_pAWR_FW, i15_mpC_AWR_FW) into PlayerMatch

!new MatchPlayerPosition('i15_mppC_SBYV_GK')
!i15_mppC_SBYV_GK.positionName := #GOALKEEPER
!i15_mppC_SBYV_GK.number := 1
!insert (i15_mpC_SBYV_GK, i15_mppC_SBYV_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i15_mppC_SBYV_MID')
!i15_mppC_SBYV_MID.positionName := #MIDFIELDER
!i15_mppC_SBYV_MID.number := 8
!insert (i15_mpC_SBYV_MID, i15_mppC_SBYV_MID) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i15_mppC_AWR_FW')
!i15_mppC_AWR_FW.positionName := #FORWARD
!i15_mppC_AWR_FW.number := 11
!insert (i15_mpC_AWR_FW, i15_mppC_AWR_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('i15_mpR_AWR_GK')
!i15_mpR_AWR_GK.booked := false
!i15_mpR_AWR_GK.goals := 0
!i15_mpR_AWR_GK.rating := 7

!new MatchPlayer('i15_mpR_AWR_DEF')
!i15_mpR_AWR_DEF.booked := false
!i15_mpR_AWR_DEF.goals := 0
!i15_mpR_AWR_DEF.rating := 7

!new MatchPlayer('i15_mpR_SBYR_FW')
!i15_mpR_SBYR_FW.booked := true
!i15_mpR_SBYR_FW.goals := 1
!i15_mpR_SBYR_FW.rating := 7

!insert (i15_matchResL1, i15_mpR_AWR_GK) into MatchMatchPlayer
!insert (i15_matchResL1, i15_mpR_AWR_DEF) into MatchMatchPlayer
!insert (i15_matchResL1, i15_mpR_SBYR_FW) into MatchMatchPlayer

!insert (i15_pAWR_GK, i15_mpR_AWR_GK) into PlayerMatch
!insert (i15_pAWR_DEF, i15_mpR_AWR_DEF) into PlayerMatch
!insert (i15_pSBYR_FW, i15_mpR_SBYR_FW) into PlayerMatch

!new MatchPlayerPosition('i15_mppR_AWR_GK')
!i15_mppR_AWR_GK.positionName := #GOALKEEPER
!i15_mppR_AWR_GK.number := 1
!insert (i15_mpR_AWR_GK, i15_mppR_AWR_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i15_mppR_AWR_DEF')
!i15_mppR_AWR_DEF.positionName := #DEFENDER
!i15_mppR_AWR_DEF.number := 5
!insert (i15_mpR_AWR_DEF, i15_mppR_AWR_DEF) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i15_mppR_SBYR_FW')
!i15_mppR_SBYR_FW.positionName := #FORWARD
!i15_mppR_SBYR_FW.number := 9
!insert (i15_mpR_SBYR_FW, i15_mppR_SBYR_FW) into MatchPlayerMatchPlayerPosition
```
## Generation 24 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 321 | 0.00% |
| Multiplicities Errors | 0 | 79 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 28 | 0.00% |

# Generation 25
```
!new Club('i16_clubRV')
!i16_clubRV.name := 'Ridgeview FC'
!i16_clubRV.homeGround := 'Ridgeview Sports Complex'
!i16_clubRV.chairman := 'Carmen Holt'

!new Club('i16_clubLS')
!i16_clubLS.name := 'Lakeshore Sporting'
!i16_clubLS.homeGround := 'Lakeshore Memorial Field'
!i16_clubLS.chairman := 'Dev Patel'

!new Team('i16_teamRV_1')
!i16_teamRV_1.name := 'Ridgeview First XI'

!new Team('i16_teamRV_U23')
!i16_teamRV_U23.name := 'Ridgeview U23'

!new Team('i16_teamLS_1')
!i16_teamLS_1.name := 'Lakeshore First XI'

!insert (i16_clubRV, i16_teamRV_1) into ClubTeam
!insert (i16_clubRV, i16_teamRV_U23) into ClubTeam
!insert (i16_clubLS, i16_teamLS_1) into ClubTeam

!new Competition('i16_compRiverCup')
!i16_compRiverCup.name := 'Riverbank Cup'
!i16_compRiverCup.type := 'Cup'

!new TrainingSession('i16_tsRV_GKClinic')
!i16_tsRV_GKClinic.date := '2027-06-02'
!i16_tsRV_GKClinic.location := 'Ridgeview Sports Complex - Goalkeeper Area'
!i16_tsRV_GKClinic.purpose := 'Handling, footwork and distribution'

!new TrainingSession('i16_tsRV_U23')
!i16_tsRV_U23.date := '2027-06-03'
!i16_tsRV_U23.location := 'Ridgeview Sports Complex - Pitch 4'
!i16_tsRV_U23.purpose := 'Press resistance and third-man combinations'

!new TrainingSession('i16_tsLS_SetPieces')
!i16_tsLS_SetPieces.date := '2027-06-03'
!i16_tsLS_SetPieces.location := 'Lakeshore Memorial Field - Main Pitch'
!i16_tsLS_SetPieces.purpose := 'Defending corners and attacking free kicks'

!insert (i16_teamRV_1, i16_tsRV_GKClinic) into TeamTraining
!insert (i16_teamRV_U23, i16_tsRV_U23) into TeamTraining
!insert (i16_teamLS_1, i16_tsLS_SetPieces) into TeamTraining

!new TrainingNotes('i16_tnGK1')
!i16_tnGK1.note := 'Good footwork progression; distribution speed improved after adding two-touch limit.'
!i16_tnGK1.date := '2027-06-02'
!insert (i16_tsRV_GKClinic, i16_tnGK1) into TrainingTrainingNotes

!new TrainingNotes('i16_tnGK2')
!i16_tnGK2.note := 'Handling secure; work on taking a higher starting position to sweep behind the line.'
!i16_tnGK2.date := '2027-06-02'
!insert (i16_tsRV_GKClinic, i16_tnGK2) into TrainingTrainingNotes

!new TrainingNotes('i16_tnU23_1')
!i16_tnU23_1.note := 'Support angles were good; reduce risky square passes when pressed from behind.'
!i16_tnU23_1.date := '2027-06-03'
!insert (i16_tsRV_U23, i16_tnU23_1) into TrainingTrainingNotes

!new TrainingNotes('i16_tnLS_1')
!i16_tnLS_1.note := 'Set-piece assignments clear; must attack second balls with more urgency.'
!i16_tnLS_1.date := '2027-06-03'
!insert (i16_tsLS_SetPieces, i16_tnLS_1) into TrainingTrainingNotes

!new Player('i16_pRV_GK')
!i16_pRV_GK.name := 'Alex Monroe'
!i16_pRV_GK.age := 32
!i16_pRV_GK.bestFoot := #RIGHT
!i16_pRV_GK.phoneNumber := '+44 7700 710901'

!new Player('i16_pRV_DEF')
!i16_pRV_DEF.name := 'Ismael Duarte'
!i16_pRV_DEF.age := 27
!i16_pRV_DEF.bestFoot := #BOTH
!i16_pRV_DEF.phoneNumber := '+44 7700 710902'

!new Player('i16_pRV_MID')
!i16_pRV_MID.name := 'Elliot Barnes'
!i16_pRV_MID.age := 25
!i16_pRV_MID.bestFoot := #LEFT
!i16_pRV_MID.phoneNumber := '+44 7700 710903'

!new Player('i16_pRV_FW')
!i16_pRV_FW.name := 'Mateo Silva'
!i16_pRV_FW.age := 23
!i16_pRV_FW.bestFoot := #RIGHT
!i16_pRV_FW.phoneNumber := '+44 7700 710904'

!new Player('i16_pRV23_GK')
!i16_pRV23_GK.name := 'Jude Foster'
!i16_pRV23_GK.age := 20
!i16_pRV23_GK.bestFoot := #BOTH
!i16_pRV23_GK.phoneNumber := '+44 7700 711901'

!new Player('i16_pRV23_MID')
!i16_pRV23_MID.name := 'Hadi Nasser'
!i16_pRV23_MID.age := 21
!i16_pRV23_MID.bestFoot := #RIGHT
!i16_pRV23_MID.phoneNumber := '+44 7700 711902'

!new Player('i16_pRV23_FW')
!i16_pRV23_FW.name := 'Samir Elwood'
!i16_pRV23_FW.age := 19
!i16_pRV23_FW.bestFoot := #LEFT
!i16_pRV23_FW.phoneNumber := '+44 7700 711903'

!new Player('i16_pLS_GK')
!i16_pLS_GK.name := 'Bruno Araujo'
!i16_pLS_GK.age := 29
!i16_pLS_GK.bestFoot := #LEFT
!i16_pLS_GK.phoneNumber := '+44 7700 720901'

!new Player('i16_pLS_DEF')
!i16_pLS_DEF.name := 'Connor Page'
!i16_pLS_DEF.age := 28
!i16_pLS_DEF.bestFoot := #RIGHT
!i16_pLS_DEF.phoneNumber := '+44 7700 720902'

!new Player('i16_pLS_MID')
!i16_pLS_MID.name := 'Yuto Akiyama'
!i16_pLS_MID.age := 24
!i16_pLS_MID.bestFoot := #BOTH
!i16_pLS_MID.phoneNumber := '+44 7700 720903'

!new Player('i16_pLS_FW')
!i16_pLS_FW.name := 'Noah Prince'
!i16_pLS_FW.age := 22
!i16_pLS_FW.bestFoot := #RIGHT
!i16_pLS_FW.phoneNumber := '+44 7700 720904'

!insert (i16_teamRV_1, i16_pRV_GK) into TeamPlayer
!insert (i16_teamRV_1, i16_pRV_DEF) into TeamPlayer
!insert (i16_teamRV_1, i16_pRV_MID) into TeamPlayer
!insert (i16_teamRV_1, i16_pRV_FW) into TeamPlayer

!insert (i16_teamRV_U23, i16_pRV23_GK) into TeamPlayer
!insert (i16_teamRV_U23, i16_pRV23_MID) into TeamPlayer
!insert (i16_teamRV_U23, i16_pRV23_FW) into TeamPlayer

!insert (i16_teamLS_1, i16_pLS_GK) into TeamPlayer
!insert (i16_teamLS_1, i16_pLS_DEF) into TeamPlayer
!insert (i16_teamLS_1, i16_pLS_MID) into TeamPlayer
!insert (i16_teamLS_1, i16_pLS_FW) into TeamPlayer

!new Position('i16_posRV_GK')
!i16_posRV_GK.positionName := #GOALKEEPER
!insert (i16_pRV_GK, i16_posRV_GK) into PlayerPositions

!new Position('i16_posRV_DEF')
!i16_posRV_DEF.positionName := #DEFENDER
!insert (i16_pRV_DEF, i16_posRV_DEF) into PlayerPositions

!new Position('i16_posRV_DEF_alt')
!i16_posRV_DEF_alt.positionName := #MIDFIELDER
!insert (i16_pRV_DEF, i16_posRV_DEF_alt) into PlayerPositions

!new Position('i16_posRV_MID')
!i16_posRV_MID.positionName := #MIDFIELDER
!insert (i16_pRV_MID, i16_posRV_MID) into PlayerPositions

!new Position('i16_posRV_FW')
!i16_posRV_FW.positionName := #FORWARD
!insert (i16_pRV_FW, i16_posRV_FW) into PlayerPositions

!new Position('i16_posRV23_GK')
!i16_posRV23_GK.positionName := #GOALKEEPER
!insert (i16_pRV23_GK, i16_posRV23_GK) into PlayerPositions

!new Position('i16_posRV23_MID')
!i16_posRV23_MID.positionName := #MIDFIELDER
!insert (i16_pRV23_MID, i16_posRV23_MID) into PlayerPositions

!new Position('i16_posRV23_MID_alt')
!i16_posRV23_MID_alt.positionName := #DEFENDER
!insert (i16_pRV23_MID, i16_posRV23_MID_alt) into PlayerPositions

!new Position('i16_posRV23_FW')
!i16_posRV23_FW.positionName := #FORWARD
!insert (i16_pRV23_FW, i16_posRV23_FW) into PlayerPositions

!new Position('i16_posLS_GK')
!i16_posLS_GK.positionName := #GOALKEEPER
!insert (i16_pLS_GK, i16_posLS_GK) into PlayerPositions

!new Position('i16_posLS_DEF')
!i16_posLS_DEF.positionName := #DEFENDER
!insert (i16_pLS_DEF, i16_posLS_DEF) into PlayerPositions

!new Position('i16_posLS_MID')
!i16_posLS_MID.positionName := #MIDFIELDER
!insert (i16_pLS_MID, i16_posLS_MID) into PlayerPositions

!new Position('i16_posLS_FW1')
!i16_posLS_FW1.positionName := #FORWARD
!insert (i16_pLS_FW, i16_posLS_FW1) into PlayerPositions

!new Position('i16_posLS_FW2')
!i16_posLS_FW2.positionName := #MIDFIELDER
!insert (i16_pLS_FW, i16_posLS_FW2) into PlayerPositions

!new TrainingObjective('i16_objRV_GK_1')
!i16_objRV_GK_1.areaToImprove := 'Sweeper-keeper starting positions'
!i16_objRV_GK_1.startDate := '2027-06-01'
!i16_objRV_GK_1.endDate := '2027-07-01'
!i16_objRV_GK_1.success := false
!insert (i16_objRV_GK_1, i16_pRV_GK) into TrainingObjectivePlayer

!new TrainingObjective('i16_objRV_DEF_1')
!i16_objRV_DEF_1.areaToImprove := 'Back-post defending on crosses'
!i16_objRV_DEF_1.startDate := '2027-06-01'
!i16_objRV_DEF_1.endDate := '2027-07-01'
!i16_objRV_DEF_1.success := true
!insert (i16_objRV_DEF_1, i16_pRV_DEF) into TrainingObjectivePlayer

!new TrainingObjective('i16_objRV_MID_1')
!i16_objRV_MID_1.areaToImprove := 'Playing forward earlier after regain'
!i16_objRV_MID_1.startDate := '2027-06-01'
!i16_objRV_MID_1.endDate := '2027-07-01'
!i16_objRV_MID_1.success := false
!insert (i16_objRV_MID_1, i16_pRV_MID) into TrainingObjectivePlayer

!new TrainingObjective('i16_objRV_MID_2')
!i16_objRV_MID_2.areaToImprove := 'One-touch play under pressure'
!i16_objRV_MID_2.startDate := '2027-06-01'
!i16_objRV_MID_2.endDate := '2027-07-01'
!i16_objRV_MID_2.success := true
!insert (i16_objRV_MID_2, i16_pRV_MID) into TrainingObjectivePlayer

!new TrainingObjective('i16_objRV_FW_1')
!i16_objRV_FW_1.areaToImprove := 'First-time finishing from cut-backs'
!i16_objRV_FW_1.startDate := '2027-06-01'
!i16_objRV_FW_1.endDate := '2027-07-01'
!i16_objRV_FW_1.success := false
!insert (i16_objRV_FW_1, i16_pRV_FW) into TrainingObjectivePlayer

!new TrainingObjective('i16_objRV23_GK_1')
!i16_objRV23_GK_1.areaToImprove := 'Handling shots through bodies'
!i16_objRV23_GK_1.startDate := '2027-06-01'
!i16_objRV23_GK_1.endDate := '2027-07-01'
!i16_objRV23_GK_1.success := true
!insert (i16_objRV23_GK_1, i16_pRV23_GK) into TrainingObjectivePlayer

!new TrainingObjective('i16_objRV23_MID_1')
!i16_objRV23_MID_1.areaToImprove := 'Receiving on the half-turn under pressure'
!i16_objRV23_MID_1.startDate := '2027-06-01'
!i16_objRV23_MID_1.endDate := '2027-07-01'
!i16_objRV23_MID_1.success := false
!insert (i16_objRV23_MID_1, i16_pRV23_MID) into TrainingObjectivePlayer

!new TrainingObjective('i16_objRV23_FW_1')
!i16_objRV23_FW_1.areaToImprove := 'Timing runs to stay onside'
!i16_objRV23_FW_1.startDate := '2027-06-01'
!i16_objRV23_FW_1.endDate := '2027-07-01'
!i16_objRV23_FW_1.success := false
!insert (i16_objRV23_FW_1, i16_pRV23_FW) into TrainingObjectivePlayer

!new TrainingObjective('i16_objLS_GK_1')
!i16_objLS_GK_1.areaToImprove := 'Distribution speed after catches'
!i16_objLS_GK_1.startDate := '2027-06-01'
!i16_objLS_GK_1.endDate := '2027-07-01'
!i16_objLS_GK_1.success := true
!insert (i16_objLS_GK_1, i16_pLS_GK) into TrainingObjectivePlayer

!new TrainingObjective('i16_objLS_DEF_1')
!i16_objLS_DEF_1.areaToImprove := 'Defending second balls after corners'
!i16_objLS_DEF_1.startDate := '2027-06-01'
!i16_objLS_DEF_1.endDate := '2027-07-01'
!i16_objLS_DEF_1.success := false
!insert (i16_objLS_DEF_1, i16_pLS_DEF) into TrainingObjectivePlayer

!new TrainingObjective('i16_objLS_MID_1')
!i16_objLS_MID_1.areaToImprove := 'Switching play under pressure'
!i16_objLS_MID_1.startDate := '2027-06-01'
!i16_objLS_MID_1.endDate := '2027-07-01'
!i16_objLS_MID_1.success := true
!insert (i16_objLS_MID_1, i16_pLS_MID) into TrainingObjectivePlayer

!new TrainingObjective('i16_objLS_FW_1')
!i16_objLS_FW_1.areaToImprove := 'Hold-up play with back to goal'
!i16_objLS_FW_1.startDate := '2027-06-01'
!i16_objLS_FW_1.endDate := '2027-07-01'
!i16_objLS_FW_1.success := false
!insert (i16_objLS_FW_1, i16_pLS_FW) into TrainingObjectivePlayer

!new PlayerNotes('i16_pnRV_1')
!i16_pnRV_1.note := 'Good communicator; must stay composed after conceding chances.'
!i16_pnRV_1.date := '2027-06-04'
!insert (i16_pRV_GK, i16_pnRV_1) into PlayerPlayerNotes

!new PlayerNotes('i16_pnLS_1')
!i16_pnLS_1.note := 'Strong link-up play; can improve timing of pressing triggers.'
!i16_pnLS_1.date := '2027-06-04'
!insert (i16_pLS_FW, i16_pnLS_1) into PlayerPlayerNotes

!new TrainingFailedToAttend('i16_tfaLS_1')
!i16_tfaLS_1.reason := 'Late arrival (traffic)'
!insert (i16_tsLS_SetPieces, i16_tfaLS_1) into TrainingFailded
!insert (i16_tfaLS_1, i16_pLS_MID) into FailedPlayer

!new TrainingFailedToAttend('i16_tfaRV_1')
!i16_tfaRV_1.reason := 'Illness'
!insert (i16_tsRV_U23, i16_tfaRV_1) into TrainingFailded
!insert (i16_tfaRV_1, i16_pRV23_FW) into FailedPlayer

!new Match('i16_matchSF')
!i16_matchSF.date := '2027-06-10'
!i16_matchSF.homeAway := true

!new Match('i16_matchFinal')
!i16_matchFinal.date := '2027-06-17'
!i16_matchFinal.homeAway := false

!insert (i16_compRiverCup, i16_matchSF) into CompetitionMatch
!insert (i16_compRiverCup, i16_matchFinal) into CompetitionMatch

!insert (i16_teamRV_1, i16_matchSF) into LocalMatch
!insert (i16_teamLS_1, i16_matchSF) into VisitorMatch

!insert (i16_teamLS_1, i16_matchFinal) into LocalMatch
!insert (i16_teamRV_U23, i16_matchFinal) into VisitorMatch

!new MatchReport('i16_mrSF')
!i16_mrSF.duration := 90
!i16_mrSF.scoreVisitor := 1
!i16_mrSF.scoreLocal := 2
!insert (i16_matchSF, i16_mrSF) into MatchMatchReport

!new MatchReport('i16_mrFinal')
!i16_mrFinal.duration := 90
!i16_mrFinal.scoreVisitor := 0
!i16_mrFinal.scoreLocal := 3
!insert (i16_matchFinal, i16_mrFinal) into MatchMatchReport

!new MatchEvent('i16_evSF_goal1')
!i16_evSF_goal1.eventType := #GOAL
!i16_evSF_goal1.time := 19
!insert (i16_matchSF, i16_evSF_goal1) into MatchMatchEvent

!new MatchEvent('i16_evSF_goal2')
!i16_evSF_goal2.eventType := #GOAL
!i16_evSF_goal2.time := 52
!insert (i16_matchSF, i16_evSF_goal2) into MatchMatchEvent

!new MatchEvent('i16_evSF_goal3')
!i16_evSF_goal3.eventType := #GOAL
!i16_evSF_goal3.time := 81
!insert (i16_matchSF, i16_evSF_goal3) into MatchMatchEvent

!new MatchEvent('i16_evSF_corner1')
!i16_evSF_corner1.eventType := #CORNER
!i16_evSF_corner1.time := 33
!insert (i16_matchSF, i16_evSF_corner1) into MatchMatchEvent

!new MatchEvent('i16_evSF_foul1')
!i16_evSF_foul1.eventType := #FOUL
!i16_evSF_foul1.time := 44
!insert (i16_matchSF, i16_evSF_foul1) into MatchMatchEvent

!new MatchEvent('i16_evSF_off1')
!i16_evSF_off1.eventType := #OFFSIDE
!i16_evSF_off1.time := 67
!insert (i16_matchSF, i16_evSF_off1) into MatchMatchEvent

!new MatchNote('i16_mnSF')
!i16_mnSF.note := 'Cup semi-final decided by a late counter; Ridgeview managed the game well after taking the lead.'
!i16_mnSF.date := '2027-06-10'
!insert (i16_matchSF, i16_mnSF) into MatchMatchNote

!new MatchEvent('i16_evF_goal1')
!i16_evF_goal1.eventType := #GOAL
!i16_evF_goal1.time := 7
!insert (i16_matchFinal, i16_evF_goal1) into MatchMatchEvent

!new MatchEvent('i16_evF_goal2')
!i16_evF_goal2.eventType := #GOAL
!i16_evF_goal2.time := 48
!insert (i16_matchFinal, i16_evF_goal2) into MatchMatchEvent

!new MatchEvent('i16_evF_goal3')
!i16_evF_goal3.eventType := #GOAL
!i16_evF_goal3.time := 90
!insert (i16_matchFinal, i16_evF_goal3) into MatchMatchEvent

!new MatchEvent('i16_evF_pen1')
!i16_evF_pen1.eventType := #PENALTY
!i16_evF_pen1.time := 46
!insert (i16_matchFinal, i16_evF_pen1) into MatchMatchEvent

!new MatchEvent('i16_evF_corner1')
!i16_evF_corner1.eventType := #CORNER
!i16_evF_corner1.time := 59
!insert (i16_matchFinal, i16_evF_corner1) into MatchMatchEvent

!new MatchNote('i16_mnFinal')
!i16_mnFinal.note := 'Final won convincingly; Lakeshore controlled set pieces and scored early in both halves.'
!i16_mnFinal.date := '2027-06-17'
!insert (i16_matchFinal, i16_mnFinal) into MatchMatchNote

!new MatchPlayer('i16_mpSF_RV_GK')
!i16_mpSF_RV_GK.booked := false
!i16_mpSF_RV_GK.goals := 0
!i16_mpSF_RV_GK.rating := 7

!new MatchPlayer('i16_mpSF_RV_MID')
!i16_mpSF_RV_MID.booked := true
!i16_mpSF_RV_MID.goals := 1
!i16_mpSF_RV_MID.rating := 8

!new MatchPlayer('i16_mpSF_RV_FW')
!i16_mpSF_RV_FW.booked := false
!i16_mpSF_RV_FW.goals := 1
!i16_mpSF_RV_FW.rating := 7

!new MatchPlayer('i16_mpSF_LS_FW')
!i16_mpSF_LS_FW.booked := false
!i16_mpSF_LS_FW.goals := 1
!i16_mpSF_LS_FW.rating := 7

!insert (i16_matchSF, i16_mpSF_RV_GK) into MatchMatchPlayer
!insert (i16_matchSF, i16_mpSF_RV_MID) into MatchMatchPlayer
!insert (i16_matchSF, i16_mpSF_RV_FW) into MatchMatchPlayer
!insert (i16_matchSF, i16_mpSF_LS_FW) into MatchMatchPlayer

!insert (i16_pRV_GK, i16_mpSF_RV_GK) into PlayerMatch
!insert (i16_pRV_MID, i16_mpSF_RV_MID) into PlayerMatch
!insert (i16_pRV_FW, i16_mpSF_RV_FW) into PlayerMatch
!insert (i16_pLS_FW, i16_mpSF_LS_FW) into PlayerMatch

!new MatchPlayerPosition('i16_mppSF_RV_GK')
!i16_mppSF_RV_GK.positionName := #GOALKEEPER
!i16_mppSF_RV_GK.number := 1
!insert (i16_mpSF_RV_GK, i16_mppSF_RV_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i16_mppSF_RV_MID')
!i16_mppSF_RV_MID.positionName := #MIDFIELDER
!i16_mppSF_RV_MID.number := 8
!insert (i16_mpSF_RV_MID, i16_mppSF_RV_MID) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i16_mppSF_RV_FW')
!i16_mppSF_RV_FW.positionName := #FORWARD
!i16_mppSF_RV_FW.number := 9
!insert (i16_mpSF_RV_FW, i16_mppSF_RV_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i16_mppSF_LS_FW')
!i16_mppSF_LS_FW.positionName := #FORWARD
!i16_mppSF_LS_FW.number := 11
!insert (i16_mpSF_LS_FW, i16_mppSF_LS_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('i16_mpF_LS_GK')
!i16_mpF_LS_GK.booked := false
!i16_mpF_LS_GK.goals := 0
!i16_mpF_LS_GK.rating := 8

!new MatchPlayer('i16_mpF_LS_MID')
!i16_mpF_LS_MID.booked := false
!i16_mpF_LS_MID.goals := 1
!i16_mpF_LS_MID.rating := 8

!new MatchPlayer('i16_mpF_LS_FW')
!i16_mpF_LS_FW.booked := false
!i16_mpF_LS_FW.goals := 2
!i16_mpF_LS_FW.rating := 9

!new MatchPlayer('i16_mpF_RV23_GK')
!i16_mpF_RV23_GK.booked := false
!i16_mpF_RV23_GK.goals := 0
!i16_mpF_RV23_GK.rating := 6

!new MatchPlayer('i16_mpF_RV23_MID')
!i16_mpF_RV23_MID.booked := true
!i16_mpF_RV23_MID.goals := 0
!i16_mpF_RV23_MID.rating := 6

!insert (i16_matchFinal, i16_mpF_LS_GK) into MatchMatchPlayer
!insert (i16_matchFinal, i16_mpF_LS_MID) into MatchMatchPlayer
!insert (i16_matchFinal, i16_mpF_LS_FW) into MatchMatchPlayer
!insert (i16_matchFinal, i16_mpF_RV23_GK) into MatchMatchPlayer
!insert (i16_matchFinal, i16_mpF_RV23_MID) into MatchMatchPlayer

!insert (i16_pLS_GK, i16_mpF_LS_GK) into PlayerMatch
!insert (i16_pLS_MID, i16_mpF_LS_MID) into PlayerMatch
!insert (i16_pLS_FW, i16_mpF_LS_FW) into PlayerMatch
!insert (i16_pRV23_GK, i16_mpF_RV23_GK) into PlayerMatch
!insert (i16_pRV23_MID, i16_mpF_RV23_MID) into PlayerMatch

!new MatchPlayerPosition('i16_mppF_LS_GK')
!i16_mppF_LS_GK.positionName := #GOALKEEPER
!i16_mppF_LS_GK.number := 1
!insert (i16_mpF_LS_GK, i16_mppF_LS_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i16_mppF_LS_MID')
!i16_mppF_LS_MID.positionName := #MIDFIELDER
!i16_mppF_LS_MID.number := 8
!insert (i16_mpF_LS_MID, i16_mppF_LS_MID) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i16_mppF_LS_FW')
!i16_mppF_LS_FW.positionName := #FORWARD
!i16_mppF_LS_FW.number := 9
!insert (i16_mpF_LS_FW, i16_mppF_LS_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i16_mppF_RV23_GK')
!i16_mppF_RV23_GK.positionName := #GOALKEEPER
!i16_mppF_RV23_GK.number := 1
!insert (i16_mpF_RV23_GK, i16_mppF_RV23_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i16_mppF_RV23_MID')
!i16_mppF_RV23_MID.positionName := #MIDFIELDER
!i16_mppF_RV23_MID.number := 6
!insert (i16_mpF_RV23_MID, i16_mppF_RV23_MID) into MatchPlayerMatchPlayerPosition
```
## Generation 25 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 411 | 0.00% |
| Multiplicities Errors | 0 | 101 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 37 | 0.00% |

# Generation 26
```
!new Club('i17_clubHCY')
!i17_clubHCY.name := 'Highland City'
!i17_clubHCY.homeGround := 'Highland City Stadium'
!i17_clubHCY.chairman := 'Arjun Mehta'

!new Club('i17_clubRVA')
!i17_clubRVA.name := 'Riverside Albion'
!i17_clubRVA.homeGround := 'Riverside Community Ground'
!i17_clubRVA.chairman := 'Sabrina Cole'

!new Team('i17_teamHCY_1')
!i17_teamHCY_1.name := 'Highland City First XI'

!new Team('i17_teamHCY_U19')
!i17_teamHCY_U19.name := 'Highland City U19'

!new Team('i17_teamRVA_1')
!i17_teamRVA_1.name := 'Riverside Albion First XI'

!new Team('i17_teamRVA_U19')
!i17_teamRVA_U19.name := 'Riverside Albion U19'

!insert (i17_clubHCY, i17_teamHCY_1) into ClubTeam
!insert (i17_clubHCY, i17_teamHCY_U19) into ClubTeam
!insert (i17_clubRVA, i17_teamRVA_1) into ClubTeam
!insert (i17_clubRVA, i17_teamRVA_U19) into ClubTeam

!new Competition('i17_compMetroLeague')
!i17_compMetroLeague.name := 'Metro Sunday League'
!i17_compMetroLeague.type := 'League'

!new Competition('i17_compYouthShield')
!i17_compYouthShield.name := 'Youth Shield'
!i17_compYouthShield.type := 'Cup'

!new TrainingSession('i17_tsHCY1_build')
!i17_tsHCY1_build.date := '2027-07-05'
!i17_tsHCY1_build.location := 'Highland City Stadium - Pitch 2'
!i17_tsHCY1_build.purpose := 'Build-up patterns and third-man runs'

!new TrainingSession('i17_tsHCY1_set')
!i17_tsHCY1_set.date := '2027-07-07'
!i17_tsHCY1_set.location := 'Highland City Stadium - Pitch 1'
!i17_tsHCY1_set.purpose := 'Defending corners and second balls'

!new TrainingSession('i17_tsHCYU19_tech')
!i17_tsHCYU19_tech.date := '2027-07-06'
!i17_tsHCYU19_tech.location := 'Highland Academy Field'
!i17_tsHCYU19_tech.purpose := 'First touch, turning and combination play'

!new TrainingSession('i17_tsRVA1_midblock')
!i17_tsRVA1_midblock.date := '2027-07-05'
!i17_tsRVA1_midblock.location := 'Riverside Community Ground - Main Pitch'
!i17_tsRVA1_midblock.purpose := 'Mid-block organisation and counters'

!new TrainingSession('i17_tsRVAU19_press')
!i17_tsRVAU19_press.date := '2027-07-06'
!i17_tsRVAU19_press.location := 'Riverside Community Ground - Training Pitch'
!i17_tsRVAU19_press.purpose := 'Pressing triggers and rest defence'

!insert (i17_teamHCY_1, i17_tsHCY1_build) into TeamTraining
!insert (i17_teamHCY_1, i17_tsHCY1_set) into TeamTraining
!insert (i17_teamHCY_U19, i17_tsHCYU19_tech) into TeamTraining
!insert (i17_teamRVA_1, i17_tsRVA1_midblock) into TeamTraining
!insert (i17_teamRVA_U19, i17_tsRVAU19_press) into TeamTraining

!new TrainingNotes('i17_tnHCY1_1')
!i17_tnHCY1_1.note := 'Good progression through midfield; fullbacks need to hold width earlier.'
!i17_tnHCY1_1.date := '2027-07-05'
!insert (i17_tsHCY1_build, i17_tnHCY1_1) into TrainingTrainingNotes

!new TrainingNotes('i17_tnHCY1_2')
!i17_tnHCY1_2.note := 'Corner defending improved; still slow to react to the second phase after clearances.'
!i17_tnHCY1_2.date := '2027-07-07'
!insert (i17_tsHCY1_set, i17_tnHCY1_2) into TrainingTrainingNotes

!new TrainingNotes('i17_tnHCYU19_1')
!i17_tnHCYU19_1.note := 'Good tempo in tight areas; encourage earlier scanning before receiving.'
!i17_tnHCYU19_1.date := '2027-07-06'
!insert (i17_tsHCYU19_tech, i17_tnHCYU19_1) into TrainingTrainingNotes

!new TrainingNotes('i17_tnRVA1_1')
!i17_tnRVA1_1.note := 'Counter patterns clear; first pass after regain needs to be quicker.'
!i17_tnRVA1_1.date := '2027-07-05'
!insert (i17_tsRVA1_midblock, i17_tnRVA1_1) into TrainingTrainingNotes

!new TrainingNotes('i17_tnRVAU19_1')
!i17_tnRVAU19_1.note := 'Press triggers understood; avoid over-committing and leaving central lanes open.'
!i17_tnRVAU19_1.date := '2027-07-06'
!insert (i17_tsRVAU19_press, i17_tnRVAU19_1) into TrainingTrainingNotes

!new Player('i17_pHCY_GK')
!i17_pHCY_GK.name := 'Chris Mullen'
!i17_pHCY_GK.age := 31
!i17_pHCY_GK.bestFoot := #RIGHT
!i17_pHCY_GK.phoneNumber := '+44 7700 820101'

!new Player('i17_pHCY_DEF')
!i17_pHCY_DEF.name := 'Lorenzo Pires'
!i17_pHCY_DEF.age := 27
!i17_pHCY_DEF.bestFoot := #BOTH
!i17_pHCY_DEF.phoneNumber := '+44 7700 820102'

!new Player('i17_pHCY_MID')
!i17_pHCY_MID.name := 'Nabil Rahimi'
!i17_pHCY_MID.age := 24
!i17_pHCY_MID.bestFoot := #LEFT
!i17_pHCY_MID.phoneNumber := '+44 7700 820103'

!new Player('i17_pHCY_FW')
!i17_pHCY_FW.name := 'Jamie Knox'
!i17_pHCY_FW.age := 23
!i17_pHCY_FW.bestFoot := #RIGHT
!i17_pHCY_FW.phoneNumber := '+44 7700 820104'

!new Player('i17_pHCYU19_MID')
!i17_pHCYU19_MID.name := 'Omar Salim'
!i17_pHCYU19_MID.age := 18
!i17_pHCYU19_MID.bestFoot := #RIGHT
!i17_pHCYU19_MID.phoneNumber := '+44 7700 820201'

!new Player('i17_pHCYU19_FW')
!i17_pHCYU19_FW.name := 'Theo Grant'
!i17_pHCYU19_FW.age := 17
!i17_pHCYU19_FW.bestFoot := #LEFT
!i17_pHCYU19_FW.phoneNumber := '+44 7700 820202'

!new Player('i17_pRVA_GK')
!i17_pRVA_GK.name := 'Milan Horvat'
!i17_pRVA_GK.age := 29
!i17_pRVA_GK.bestFoot := #LEFT
!i17_pRVA_GK.phoneNumber := '+44 7700 830101'

!new Player('i17_pRVA_DEF')
!i17_pRVA_DEF.name := 'Benji Clarke'
!i17_pRVA_DEF.age := 28
!i17_pRVA_DEF.bestFoot := #RIGHT
!i17_pRVA_DEF.phoneNumber := '+44 7700 830102'

!new Player('i17_pRVA_MID')
!i17_pRVA_MID.name := 'Hiro Tanabe'
!i17_pRVA_MID.age := 25
!i17_pRVA_MID.bestFoot := #BOTH
!i17_pRVA_MID.phoneNumber := '+44 7700 830103'

!new Player('i17_pRVA_FW')
!i17_pRVA_FW.name := 'Rafael Costa'
!i17_pRVA_FW.age := 24
!i17_pRVA_FW.bestFoot := #RIGHT
!i17_pRVA_FW.phoneNumber := '+44 7700 830104'

!new Player('i17_pRVAU19_DEF')
!i17_pRVAU19_DEF.name := 'Evan Park'
!i17_pRVAU19_DEF.age := 18
!i17_pRVAU19_DEF.bestFoot := #RIGHT
!i17_pRVAU19_DEF.phoneNumber := '+44 7700 830201'

!new Player('i17_pRVAU19_FW')
!i17_pRVAU19_FW.name := 'Yassin Kader'
!i17_pRVAU19_FW.age := 17
!i17_pRVAU19_FW.bestFoot := #BOTH
!i17_pRVAU19_FW.phoneNumber := '+44 7700 830202'

!insert (i17_teamHCY_1, i17_pHCY_GK) into TeamPlayer
!insert (i17_teamHCY_1, i17_pHCY_DEF) into TeamPlayer
!insert (i17_teamHCY_1, i17_pHCY_MID) into TeamPlayer
!insert (i17_teamHCY_1, i17_pHCY_FW) into TeamPlayer

!insert (i17_teamHCY_U19, i17_pHCYU19_MID) into TeamPlayer
!insert (i17_teamHCY_U19, i17_pHCYU19_FW) into TeamPlayer

!insert (i17_teamRVA_1, i17_pRVA_GK) into TeamPlayer
!insert (i17_teamRVA_1, i17_pRVA_DEF) into TeamPlayer
!insert (i17_teamRVA_1, i17_pRVA_MID) into TeamPlayer
!insert (i17_teamRVA_1, i17_pRVA_FW) into TeamPlayer

!insert (i17_teamRVA_U19, i17_pRVAU19_DEF) into TeamPlayer
!insert (i17_teamRVA_U19, i17_pRVAU19_FW) into TeamPlayer

!new Position('i17_posHCY_GK')
!i17_posHCY_GK.positionName := #GOALKEEPER
!insert (i17_pHCY_GK, i17_posHCY_GK) into PlayerPositions

!new Position('i17_posHCY_DEF')
!i17_posHCY_DEF.positionName := #DEFENDER
!insert (i17_pHCY_DEF, i17_posHCY_DEF) into PlayerPositions

!new Position('i17_posHCY_DEF_alt')
!i17_posHCY_DEF_alt.positionName := #MIDFIELDER
!insert (i17_pHCY_DEF, i17_posHCY_DEF_alt) into PlayerPositions

!new Position('i17_posHCY_MID')
!i17_posHCY_MID.positionName := #MIDFIELDER
!insert (i17_pHCY_MID, i17_posHCY_MID) into PlayerPositions

!new Position('i17_posHCY_FW')
!i17_posHCY_FW.positionName := #FORWARD
!insert (i17_pHCY_FW, i17_posHCY_FW) into PlayerPositions

!new Position('i17_posHCYU19_MID')
!i17_posHCYU19_MID.positionName := #MIDFIELDER
!insert (i17_pHCYU19_MID, i17_posHCYU19_MID) into PlayerPositions

!new Position('i17_posHCYU19_MID_alt')
!i17_posHCYU19_MID_alt.positionName := #DEFENDER
!insert (i17_pHCYU19_MID, i17_posHCYU19_MID_alt) into PlayerPositions

!new Position('i17_posHCYU19_FW')
!i17_posHCYU19_FW.positionName := #FORWARD
!insert (i17_pHCYU19_FW, i17_posHCYU19_FW) into PlayerPositions

!new Position('i17_posRVA_GK')
!i17_posRVA_GK.positionName := #GOALKEEPER
!insert (i17_pRVA_GK, i17_posRVA_GK) into PlayerPositions

!new Position('i17_posRVA_DEF')
!i17_posRVA_DEF.positionName := #DEFENDER
!insert (i17_pRVA_DEF, i17_posRVA_DEF) into PlayerPositions

!new Position('i17_posRVA_MID')
!i17_posRVA_MID.positionName := #MIDFIELDER
!insert (i17_pRVA_MID, i17_posRVA_MID) into PlayerPositions

!new Position('i17_posRVA_MID_alt')
!i17_posRVA_MID_alt.positionName := #DEFENDER
!insert (i17_pRVA_MID, i17_posRVA_MID_alt) into PlayerPositions

!new Position('i17_posRVA_FW')
!i17_posRVA_FW.positionName := #FORWARD
!insert (i17_pRVA_FW, i17_posRVA_FW) into PlayerPositions

!new Position('i17_posRVAU19_DEF')
!i17_posRVAU19_DEF.positionName := #DEFENDER
!insert (i17_pRVAU19_DEF, i17_posRVAU19_DEF) into PlayerPositions

!new Position('i17_posRVAU19_FW1')
!i17_posRVAU19_FW1.positionName := #FORWARD
!insert (i17_pRVAU19_FW, i17_posRVAU19_FW1) into PlayerPositions

!new Position('i17_posRVAU19_FW2')
!i17_posRVAU19_FW2.positionName := #MIDFIELDER
!insert (i17_pRVAU19_FW, i17_posRVAU19_FW2) into PlayerPositions

!new TrainingObjective('i17_objHCY_GK_1')
!i17_objHCY_GK_1.areaToImprove := 'Quicker decisions on crosses into the six-yard box'
!i17_objHCY_GK_1.startDate := '2027-07-01'
!i17_objHCY_GK_1.endDate := '2027-08-01'
!i17_objHCY_GK_1.success := false
!insert (i17_objHCY_GK_1, i17_pHCY_GK) into TrainingObjectivePlayer

!new TrainingObjective('i17_objHCY_DEF_1')
!i17_objHCY_DEF_1.areaToImprove := 'Defending back post on wide deliveries'
!i17_objHCY_DEF_1.startDate := '2027-07-01'
!i17_objHCY_DEF_1.endDate := '2027-08-01'
!i17_objHCY_DEF_1.success := true
!insert (i17_objHCY_DEF_1, i17_pHCY_DEF) into TrainingObjectivePlayer

!new TrainingObjective('i17_objHCY_MID_1')
!i17_objHCY_MID_1.areaToImprove := 'Scanning before receiving between the lines'
!i17_objHCY_MID_1.startDate := '2027-07-01'
!i17_objHCY_MID_1.endDate := '2027-08-01'
!i17_objHCY_MID_1.success := false
!insert (i17_objHCY_MID_1, i17_pHCY_MID) into TrainingObjectivePlayer

!new TrainingObjective('i17_objHCY_MID_2')
!i17_objHCY_MID_2.areaToImprove := 'One-touch play to escape pressure'
!i17_objHCY_MID_2.startDate := '2027-07-01'
!i17_objHCY_MID_2.endDate := '2027-08-01'
!i17_objHCY_MID_2.success := true
!insert (i17_objHCY_MID_2, i17_pHCY_MID) into TrainingObjectivePlayer

!new TrainingObjective('i17_objHCY_FW_1')
!i17_objHCY_FW_1.areaToImprove := 'Finishing first time from cut-backs'
!i17_objHCY_FW_1.startDate := '2027-07-01'
!i17_objHCY_FW_1.endDate := '2027-08-01'
!i17_objHCY_FW_1.success := false
!insert (i17_objHCY_FW_1, i17_pHCY_FW) into TrainingObjectivePlayer

!new TrainingObjective('i17_objHCYU19_MID_1')
!i17_objHCYU19_MID_1.areaToImprove := 'Speed of play in tight spaces'
!i17_objHCYU19_MID_1.startDate := '2027-07-01'
!i17_objHCYU19_MID_1.endDate := '2027-08-01'
!i17_objHCYU19_MID_1.success := false
!insert (i17_objHCYU19_MID_1, i17_pHCYU19_MID) into TrainingObjectivePlayer

!new TrainingObjective('i17_objHCYU19_FW_1')
!i17_objHCYU19_FW_1.areaToImprove := 'Composure in 1v1 finishing'
!i17_objHCYU19_FW_1.startDate := '2027-07-01'
!i17_objHCYU19_FW_1.endDate := '2027-08-01'
!i17_objHCYU19_FW_1.success := false
!insert (i17_objHCYU19_FW_1, i17_pHCYU19_FW) into TrainingObjectivePlayer

!new TrainingObjective('i17_objRVA_GK_1')
!i17_objRVA_GK_1.areaToImprove := 'Distribution speed after saves'
!i17_objRVA_GK_1.startDate := '2027-07-01'
!i17_objRVA_GK_1.endDate := '2027-08-01'
!i17_objRVA_GK_1.success := true
!insert (i17_objRVA_GK_1, i17_pRVA_GK) into TrainingObjectivePlayer

!new TrainingObjective('i17_objRVA_DEF_1')
!i17_objRVA_DEF_1.areaToImprove := 'Avoiding cheap fouls in wide areas'
!i17_objRVA_DEF_1.startDate := '2027-07-01'
!i17_objRVA_DEF_1.endDate := '2027-08-01'
!i17_objRVA_DEF_1.success := false
!insert (i17_objRVA_DEF_1, i17_pRVA_DEF) into TrainingObjectivePlayer

!new TrainingObjective('i17_objRVA_MID_1')
!i17_objRVA_MID_1.areaToImprove := 'Switching play to the weak side'
!i17_objRVA_MID_1.startDate := '2027-07-01'
!i17_objRVA_MID_1.endDate := '2027-08-01'
!i17_objRVA_MID_1.success := true
!insert (i17_objRVA_MID_1, i17_pRVA_MID) into TrainingObjectivePlayer

!new TrainingObjective('i17_objRVA_FW_1')
!i17_objRVA_FW_1.areaToImprove := 'Hold-up play under contact'
!i17_objRVA_FW_1.startDate := '2027-07-01'
!i17_objRVA_FW_1.endDate := '2027-08-01'
!i17_objRVA_FW_1.success := false
!insert (i17_objRVA_FW_1, i17_pRVA_FW) into TrainingObjectivePlayer

!new TrainingObjective('i17_objRVAU19_DEF_1')
!i17_objRVAU19_DEF_1.areaToImprove := '1v1 defending body position'
!i17_objRVAU19_DEF_1.startDate := '2027-07-01'
!i17_objRVAU19_DEF_1.endDate := '2027-08-01'
!i17_objRVAU19_DEF_1.success := true
!insert (i17_objRVAU19_DEF_1, i17_pRVAU19_DEF) into TrainingObjectivePlayer

!new TrainingObjective('i17_objRVAU19_FW_1')
!i17_objRVAU19_FW_1.areaToImprove := 'Timing curved runs to stay onside'
!i17_objRVAU19_FW_1.startDate := '2027-07-01'
!i17_objRVAU19_FW_1.endDate := '2027-08-01'
!i17_objRVAU19_FW_1.success := false
!insert (i17_objRVAU19_FW_1, i17_pRVAU19_FW) into TrainingObjectivePlayer

!new PlayerNotes('i17_pn1')
!i17_pn1.note := 'Organises well; must keep calmer body language after mistakes.'
!i17_pn1.date := '2027-07-07'
!insert (i17_pHCY_GK, i17_pn1) into PlayerPlayerNotes

!new PlayerNotes('i17_pn2')
!i17_pn2.note := 'Very direct runner; can improve decision-making when isolated in wide areas.'
!i17_pn2.date := '2027-07-08'
!insert (i17_pRVA_FW, i17_pn2) into PlayerPlayerNotes

!new PlayerNotes('i17_pn3')
!i17_pn3.note := 'Strong learner; encourage more scanning before receiving to speed up play.'
!i17_pn3.date := '2027-07-08'
!insert (i17_pHCYU19_MID, i17_pn3) into PlayerPlayerNotes

!new TrainingFailedToAttend('i17_tfa1')
!i17_tfa1.reason := 'Work shift overran'
!insert (i17_tsRVA1_midblock, i17_tfa1) into TrainingFailded
!insert (i17_tfa1, i17_pRVA_DEF) into FailedPlayer

!new TrainingFailedToAttend('i17_tfa2')
!i17_tfa2.reason := 'Illness'
!insert (i17_tsHCYU19_tech, i17_tfa2) into TrainingFailded
!insert (i17_tfa2, i17_pHCYU19_FW) into FailedPlayer

!new Match('i17_matchLeague1')
!i17_matchLeague1.date := '2027-07-11'
!i17_matchLeague1.homeAway := true

!insert (i17_compMetroLeague, i17_matchLeague1) into CompetitionMatch
!insert (i17_teamHCY_1, i17_matchLeague1) into LocalMatch
!insert (i17_teamRVA_1, i17_matchLeague1) into VisitorMatch

!new MatchReport('i17_mrLeague1')
!i17_mrLeague1.duration := 90
!i17_mrLeague1.scoreVisitor := 1
!i17_mrLeague1.scoreLocal := 2
!insert (i17_matchLeague1, i17_mrLeague1) into MatchMatchReport

!new MatchEvent('i17_evL1_goal1')
!i17_evL1_goal1.eventType := #GOAL
!i17_evL1_goal1.time := 16
!insert (i17_matchLeague1, i17_evL1_goal1) into MatchMatchEvent

!new MatchEvent('i17_evL1_goal2')
!i17_evL1_goal2.eventType := #GOAL
!i17_evL1_goal2.time := 54
!insert (i17_matchLeague1, i17_evL1_goal2) into MatchMatchEvent

!new MatchEvent('i17_evL1_goal3')
!i17_evL1_goal3.eventType := #GOAL
!i17_evL1_goal3.time := 78
!insert (i17_matchLeague1, i17_evL1_goal3) into MatchMatchEvent

!new MatchEvent('i17_evL1_foul1')
!i17_evL1_foul1.eventType := #FOUL
!i17_evL1_foul1.time := 33
!insert (i17_matchLeague1, i17_evL1_foul1) into MatchMatchEvent

!new MatchEvent('i17_evL1_corner1')
!i17_evL1_corner1.eventType := #CORNER
!i17_evL1_corner1.time := 61
!insert (i17_matchLeague1, i17_evL1_corner1) into MatchMatchEvent

!new MatchEvent('i17_evL1_off1')
!i17_evL1_off1.eventType := #OFFSIDE
!i17_evL1_off1.time := 72
!insert (i17_matchLeague1, i17_evL1_off1) into MatchMatchEvent

!new MatchNote('i17_mnLeague1')
!i17_mnLeague1.note := 'Highland City edged it with a late goal; Riverside threatened on counters but lacked control in midfield.'
!i17_mnLeague1.date := '2027-07-11'
!insert (i17_matchLeague1, i17_mnLeague1) into MatchMatchNote

!new MatchPlayer('i17_mpL1_HCY_GK')
!i17_mpL1_HCY_GK.booked := false
!i17_mpL1_HCY_GK.goals := 0
!i17_mpL1_HCY_GK.rating := 7

!new MatchPlayer('i17_mpL1_HCY_MID')
!i17_mpL1_HCY_MID.booked := true
!i17_mpL1_HCY_MID.goals := 1
!i17_mpL1_HCY_MID.rating := 8

!new MatchPlayer('i17_mpL1_HCY_FW')
!i17_mpL1_HCY_FW.booked := false
!i17_mpL1_HCY_FW.goals := 1
!i17_mpL1_HCY_FW.rating := 7

!new MatchPlayer('i17_mpL1_RVA_GK')
!i17_mpL1_RVA_GK.booked := false
!i17_mpL1_RVA_GK.goals := 0
!i17_mpL1_RVA_GK.rating := 6

!new MatchPlayer('i17_mpL1_RVA_MID')
!i17_mpL1_RVA_MID.booked := false
!i17_mpL1_RVA_MID.goals := 0
!i17_mpL1_RVA_MID.rating := 7

!new MatchPlayer('i17_mpL1_RVA_FW')
!i17_mpL1_RVA_FW.booked := false
!i17_mpL1_RVA_FW.goals := 1
!i17_mpL1_RVA_FW.rating := 7

!insert (i17_matchLeague1, i17_mpL1_HCY_GK) into MatchMatchPlayer
!insert (i17_matchLeague1, i17_mpL1_HCY_MID) into MatchMatchPlayer
!insert (i17_matchLeague1, i17_mpL1_HCY_FW) into MatchMatchPlayer
!insert (i17_matchLeague1, i17_mpL1_RVA_GK) into MatchMatchPlayer
!insert (i17_matchLeague1, i17_mpL1_RVA_MID) into MatchMatchPlayer
!insert (i17_matchLeague1, i17_mpL1_RVA_FW) into MatchMatchPlayer

!insert (i17_pHCY_GK, i17_mpL1_HCY_GK) into PlayerMatch
!insert (i17_pHCY_MID, i17_mpL1_HCY_MID) into PlayerMatch
!insert (i17_pHCY_FW, i17_mpL1_HCY_FW) into PlayerMatch
!insert (i17_pRVA_GK, i17_mpL1_RVA_GK) into PlayerMatch
!insert (i17_pRVA_MID, i17_mpL1_RVA_MID) into PlayerMatch
!insert (i17_pRVA_FW, i17_mpL1_RVA_FW) into PlayerMatch

!new MatchPlayerPosition('i17_mppL1_HCY_GK')
!i17_mppL1_HCY_GK.positionName := #GOALKEEPER
!i17_mppL1_HCY_GK.number := 1
!insert (i17_mpL1_HCY_GK, i17_mppL1_HCY_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i17_mppL1_HCY_MID')
!i17_mppL1_HCY_MID.positionName := #MIDFIELDER
!i17_mppL1_HCY_MID.number := 8
!insert (i17_mpL1_HCY_MID, i17_mppL1_HCY_MID) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i17_mppL1_HCY_FW')
!i17_mppL1_HCY_FW.positionName := #FORWARD
!i17_mppL1_HCY_FW.number := 9
!insert (i17_mpL1_HCY_FW, i17_mppL1_HCY_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i17_mppL1_RVA_GK')
!i17_mppL1_RVA_GK.positionName := #GOALKEEPER
!i17_mppL1_RVA_GK.number := 1
!insert (i17_mpL1_RVA_GK, i17_mppL1_RVA_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i17_mppL1_RVA_MID')
!i17_mppL1_RVA_MID.positionName := #MIDFIELDER
!i17_mppL1_RVA_MID.number := 6
!insert (i17_mpL1_RVA_MID, i17_mppL1_RVA_MID) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i17_mppL1_RVA_FW')
!i17_mppL1_RVA_FW.positionName := #FORWARD
!i17_mppL1_RVA_FW.number := 11
!insert (i17_mpL1_RVA_FW, i17_mppL1_RVA_FW) into MatchPlayerMatchPlayerPosition

!new Match('i17_matchYouthQF')
!i17_matchYouthQF.date := '2027-07-13'
!i17_matchYouthQF.homeAway := false

!insert (i17_compYouthShield, i17_matchYouthQF) into CompetitionMatch
!insert (i17_teamHCY_U19, i17_matchYouthQF) into LocalMatch
!insert (i17_teamRVA_U19, i17_matchYouthQF) into VisitorMatch

!new MatchReport('i17_mrYouthQF')
!i17_mrYouthQF.duration := 90
!i17_mrYouthQF.scoreVisitor := 2
!i17_mrYouthQF.scoreLocal := 1
!insert (i17_matchYouthQF, i17_mrYouthQF) into MatchMatchReport

!new MatchEvent('i17_evY_goal1')
!i17_evY_goal1.eventType := #GOAL
!i17_evY_goal1.time := 10
!insert (i17_matchYouthQF, i17_evY_goal1) into MatchMatchEvent

!new MatchEvent('i17_evY_goal2')
!i17_evY_goal2.eventType := #GOAL
!i17_evY_goal2.time := 40
!insert (i17_matchYouthQF, i17_evY_goal2) into MatchMatchEvent

!new MatchEvent('i17_evY_goal3')
!i17_evY_goal3.eventType := #GOAL
!i17_evY_goal3.time := 69
!insert (i17_matchYouthQF, i17_evY_goal3) into MatchMatchEvent

!new MatchEvent('i17_evY_foul1')
!i17_evY_foul1.eventType := #FOUL
!i17_evY_foul1.time := 55
!insert (i17_matchYouthQF, i17_evY_foul1) into MatchMatchEvent

!new MatchEvent('i17_evY_corner1')
!i17_evY_corner1.eventType := #CORNER
!i17_evY_corner1.time := 77
!insert (i17_matchYouthQF, i17_evY_corner1) into MatchMatchEvent

!new MatchNote('i17_mnYouthQF')
!i17_mnYouthQF.note := 'Youth cup tie decided late; Riverside were sharper in transitions and managed the final minutes well.'
!i17_mnYouthQF.date := '2027-07-13'
!insert (i17_matchYouthQF, i17_mnYouthQF) into MatchMatchNote

!new MatchPlayer('i17_mpY_HCY_MID')
!i17_mpY_HCY_MID.booked := true
!i17_mpY_HCY_MID.goals := 0
!i17_mpY_HCY_MID.rating := 6

!new MatchPlayer('i17_mpY_HCY_FW')
!i17_mpY_HCY_FW.booked := false
!i17_mpY_HCY_FW.goals := 1
!i17_mpY_HCY_FW.rating := 7

!new MatchPlayer('i17_mpY_RVA_DEF')
!i17_mpY_RVA_DEF.booked := false
!i17_mpY_RVA_DEF.goals := 0
!i17_mpY_RVA_DEF.rating := 7

!new MatchPlayer('i17_mpY_RVA_FW')
!i17_mpY_RVA_FW.booked := false
!i17_mpY_RVA_FW.goals := 2
!i17_mpY_RVA_FW.rating := 8

!insert (i17_matchYouthQF, i17_mpY_HCY_MID) into MatchMatchPlayer
!insert (i17_matchYouthQF, i17_mpY_HCY_FW) into MatchMatchPlayer
!insert (i17_matchYouthQF, i17_mpY_RVA_DEF) into MatchMatchPlayer
!insert (i17_matchYouthQF, i17_mpY_RVA_FW) into MatchMatchPlayer

!insert (i17_pHCYU19_MID, i17_mpY_HCY_MID) into PlayerMatch
!insert (i17_pHCYU19_FW, i17_mpY_HCY_FW) into PlayerMatch
!insert (i17_pRVAU19_DEF, i17_mpY_RVA_DEF) into PlayerMatch
!insert (i17_pRVAU19_FW, i17_mpY_RVA_FW) into PlayerMatch

!new MatchPlayerPosition('i17_mppY_HCY_MID')
!i17_mppY_HCY_MID.positionName := #MIDFIELDER
!i17_mppY_HCY_MID.number := 8
!insert (i17_mpY_HCY_MID, i17_mppY_HCY_MID) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i17_mppY_HCY_FW')
!i17_mppY_HCY_FW.positionName := #FORWARD
!i17_mppY_HCY_FW.number := 9
!insert (i17_mpY_HCY_FW, i17_mppY_HCY_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i17_mppY_RVA_DEF')
!i17_mppY_RVA_DEF.positionName := #DEFENDER
!i17_mppY_RVA_DEF.number := 5
!insert (i17_mpY_RVA_DEF, i17_mppY_RVA_DEF) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i17_mppY_RVA_FW')
!i17_mppY_RVA_FW.positionName := #FORWARD
!i17_mppY_RVA_FW.number := 11
!insert (i17_mpY_RVA_FW, i17_mppY_RVA_FW) into MatchPlayerMatchPlayerPosition
```
## Generation 26 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 463 | 0.00% |
| Multiplicities Errors | 0 | 113 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 43 | 0.00% |

# Generation 27
```
!new Club('i18_clubMBK')
!i18_clubMBK.name := 'Meadowbrook FC'
!i18_clubMBK.homeGround := 'Meadowbrook Community Stadium'
!i18_clubMBK.chairman := 'Evelyn Hart'

!new Club('i18_clubIRH')
!i18_clubIRH.name := 'Ironhaven FC'
!i18_clubIRH.homeGround := 'Ironhaven Docklands Ground'
!i18_clubIRH.chairman := 'Marcus Doyle'

!new Team('i18_teamMBK_W')
!i18_teamMBK_W.name := 'Meadowbrook Women'

!new Team('i18_teamMBK_U16')
!i18_teamMBK_U16.name := 'Meadowbrook U16'

!new Team('i18_teamIRH_1')
!i18_teamIRH_1.name := 'Ironhaven First XI'

!new Team('i18_teamIRH_U16')
!i18_teamIRH_U16.name := 'Ironhaven U16'

!insert (i18_clubMBK, i18_teamMBK_W) into ClubTeam
!insert (i18_clubMBK, i18_teamMBK_U16) into ClubTeam
!insert (i18_clubIRH, i18_teamIRH_1) into ClubTeam
!insert (i18_clubIRH, i18_teamIRH_U16) into ClubTeam

!new Competition('i18_compInvit')
!i18_compInvit.name := 'Coastal Invitational'
!i18_compInvit.type := 'Tournament'

!new TrainingSession('i18_tsMBK_W_1')
!i18_tsMBK_W_1.date := '2027-08-18'
!i18_tsMBK_W_1.location := 'Meadowbrook Community Stadium - Pitch 2'
!i18_tsMBK_W_1.purpose := 'High press triggers and counter-pressing'

!new TrainingSession('i18_tsMBK_W_2')
!i18_tsMBK_W_2.date := '2027-08-20'
!i18_tsMBK_W_2.location := 'Meadowbrook Community Stadium - Gym'
!i18_tsMBK_W_2.purpose := 'Strength maintenance and sprint mechanics'

!new TrainingSession('i18_tsMBK_U16_1')
!i18_tsMBK_U16_1.date := '2027-08-19'
!i18_tsMBK_U16_1.location := 'Meadowbrook Academy Pitch'
!i18_tsMBK_U16_1.purpose := 'First touch, scanning and playing forward'

!new TrainingSession('i18_tsIRH_1')
!i18_tsIRH_1.date := '2027-08-19'
!i18_tsIRH_1.location := 'Ironhaven Docklands Ground - Main Pitch'
!i18_tsIRH_1.purpose := 'Mid-block organisation and fast counters'

!new TrainingSession('i18_tsIRH_U16_1')
!i18_tsIRH_U16_1.date := '2027-08-20'
!i18_tsIRH_U16_1.location := 'Ironhaven Docklands Ground - Training Pitch'
!i18_tsIRH_U16_1.purpose := 'Defending transitions and decision-making in possession'

!insert (i18_teamMBK_W, i18_tsMBK_W_1) into TeamTraining
!insert (i18_teamMBK_W, i18_tsMBK_W_2) into TeamTraining
!insert (i18_teamMBK_U16, i18_tsMBK_U16_1) into TeamTraining
!insert (i18_teamIRH_1, i18_tsIRH_1) into TeamTraining
!insert (i18_teamIRH_U16, i18_tsIRH_U16_1) into TeamTraining

!new TrainingNotes('i18_tnMBK_W_1a')
!i18_tnMBK_W_1a.note := 'Press was coordinated; the midfield line must cover inside passes when the winger jumps.'
!i18_tnMBK_W_1a.date := '2027-08-18'
!insert (i18_tsMBK_W_1, i18_tnMBK_W_1a) into TrainingTrainingNotes

!new TrainingNotes('i18_tnMBK_W_2a')
!i18_tnMBK_W_2a.note := 'Gym session completed; keep hamstring volume controlled for two players returning from soreness.'
!i18_tnMBK_W_2a.date := '2027-08-20'
!insert (i18_tsMBK_W_2, i18_tnMBK_W_2a) into TrainingTrainingNotes

!new TrainingNotes('i18_tnMBK_U16_1a')
!i18_tnMBK_U16_1a.note := 'Good scanning habits improving; reduce risky square passes near own box.'
!i18_tnMBK_U16_1a.date := '2027-08-19'
!insert (i18_tsMBK_U16_1, i18_tnMBK_U16_1a) into TrainingTrainingNotes

!new TrainingNotes('i18_tnIRH_1a')
!i18_tnIRH_1a.note := 'Counter patterns clear; first pass after regain must be played earlier and with better weight.'
!i18_tnIRH_1a.date := '2027-08-19'
!insert (i18_tsIRH_1, i18_tnIRH_1a) into TrainingTrainingNotes

!new TrainingNotes('i18_tnIRH_U16_1a')
!i18_tnIRH_U16_1a.note := 'Transitions improved; need calmer first touch when receiving under pressure.'
!i18_tnIRH_U16_1a.date := '2027-08-20'
!insert (i18_tsIRH_U16_1, i18_tnIRH_U16_1a) into TrainingTrainingNotes

!new Player('i18_pMBK_W_GK')
!i18_pMBK_W_GK.name := 'Sienna Blake'
!i18_pMBK_W_GK.age := 29
!i18_pMBK_W_GK.bestFoot := #RIGHT
!i18_pMBK_W_GK.phoneNumber := '+44 7700 880101'

!new Player('i18_pMBK_W_DEF')
!i18_pMBK_W_DEF.name := 'Maya Costello'
!i18_pMBK_W_DEF.age := 25
!i18_pMBK_W_DEF.bestFoot := #BOTH
!i18_pMBK_W_DEF.phoneNumber := '+44 7700 880102'

!new Player('i18_pMBK_W_MID')
!i18_pMBK_W_MID.name := 'Hana Adebayo'
!i18_pMBK_W_MID.age := 23
!i18_pMBK_W_MID.bestFoot := #LEFT
!i18_pMBK_W_MID.phoneNumber := '+44 7700 880103'

!new Player('i18_pMBK_W_FW')
!i18_pMBK_W_FW.name := 'Elena Petrova'
!i18_pMBK_W_FW.age := 24
!i18_pMBK_W_FW.bestFoot := #RIGHT
!i18_pMBK_W_FW.phoneNumber := '+44 7700 880104'

!new Player('i18_pMBK_U16_GK')
!i18_pMBK_U16_GK.name := 'Reece Nolan'
!i18_pMBK_U16_GK.age := 15
!i18_pMBK_U16_GK.bestFoot := #BOTH
!i18_pMBK_U16_GK.phoneNumber := '+44 7700 880201'

!new Player('i18_pMBK_U16_MID')
!i18_pMBK_U16_MID.name := 'Isaac Kim'
!i18_pMBK_U16_MID.age := 16
!i18_pMBK_U16_MID.bestFoot := #RIGHT
!i18_pMBK_U16_MID.phoneNumber := '+44 7700 880202'

!new Player('i18_pMBK_U16_FW')
!i18_pMBK_U16_FW.name := 'Noel Duarte'
!i18_pMBK_U16_FW.age := 16
!i18_pMBK_U16_FW.bestFoot := #LEFT
!i18_pMBK_U16_FW.phoneNumber := '+44 7700 880203'

!new Player('i18_pIRH_GK')
!i18_pIRH_GK.name := 'Dawid Kowalski'
!i18_pIRH_GK.age := 31
!i18_pIRH_GK.bestFoot := #LEFT
!i18_pIRH_GK.phoneNumber := '+44 7700 881101'

!new Player('i18_pIRH_DEF')
!i18_pIRH_DEF.name := 'Connor Briggs'
!i18_pIRH_DEF.age := 28
!i18_pIRH_DEF.bestFoot := #RIGHT
!i18_pIRH_DEF.phoneNumber := '+44 7700 881102'

!new Player('i18_pIRH_MID')
!i18_pIRH_MID.name := 'Yuto Mori'
!i18_pIRH_MID.age := 26
!i18_pIRH_MID.bestFoot := #BOTH
!i18_pIRH_MID.phoneNumber := '+44 7700 881103'

!new Player('i18_pIRH_FW')
!i18_pIRH_FW.name := 'Rafael Mendes'
!i18_pIRH_FW.age := 25
!i18_pIRH_FW.bestFoot := #RIGHT
!i18_pIRH_FW.phoneNumber := '+44 7700 881104'

!new Player('i18_pIRH_U16_GK')
!i18_pIRH_U16_GK.name := 'Calum Rees'
!i18_pIRH_U16_GK.age := 16
!i18_pIRH_U16_GK.bestFoot := #RIGHT
!i18_pIRH_U16_GK.phoneNumber := '+44 7700 881201'

!new Player('i18_pIRH_U16_DEF')
!i18_pIRH_U16_DEF.name := 'Rory Medina'
!i18_pIRH_U16_DEF.age := 15
!i18_pIRH_U16_DEF.bestFoot := #BOTH
!i18_pIRH_U16_DEF.phoneNumber := '+44 7700 881202'

!new Player('i18_pIRH_U16_FW')
!i18_pIRH_U16_FW.name := 'Ibrahim Saeed'
!i18_pIRH_U16_FW.age := 16
!i18_pIRH_U16_FW.bestFoot := #LEFT
!i18_pIRH_U16_FW.phoneNumber := '+44 7700 881203'

!insert (i18_teamMBK_W, i18_pMBK_W_GK) into TeamPlayer
!insert (i18_teamMBK_W, i18_pMBK_W_DEF) into TeamPlayer
!insert (i18_teamMBK_W, i18_pMBK_W_MID) into TeamPlayer
!insert (i18_teamMBK_W, i18_pMBK_W_FW) into TeamPlayer

!insert (i18_teamMBK_U16, i18_pMBK_U16_GK) into TeamPlayer
!insert (i18_teamMBK_U16, i18_pMBK_U16_MID) into TeamPlayer
!insert (i18_teamMBK_U16, i18_pMBK_U16_FW) into TeamPlayer

!insert (i18_teamIRH_1, i18_pIRH_GK) into TeamPlayer
!insert (i18_teamIRH_1, i18_pIRH_DEF) into TeamPlayer
!insert (i18_teamIRH_1, i18_pIRH_MID) into TeamPlayer
!insert (i18_teamIRH_1, i18_pIRH_FW) into TeamPlayer

!insert (i18_teamIRH_U16, i18_pIRH_U16_GK) into TeamPlayer
!insert (i18_teamIRH_U16, i18_pIRH_U16_DEF) into TeamPlayer
!insert (i18_teamIRH_U16, i18_pIRH_U16_FW) into TeamPlayer

!new Position('i18_posMBK_W_GK')
!i18_posMBK_W_GK.positionName := #GOALKEEPER
!insert (i18_pMBK_W_GK, i18_posMBK_W_GK) into PlayerPositions

!new Position('i18_posMBK_W_DEF')
!i18_posMBK_W_DEF.positionName := #DEFENDER
!insert (i18_pMBK_W_DEF, i18_posMBK_W_DEF) into PlayerPositions

!new Position('i18_posMBK_W_DEF_alt')
!i18_posMBK_W_DEF_alt.positionName := #MIDFIELDER
!insert (i18_pMBK_W_DEF, i18_posMBK_W_DEF_alt) into PlayerPositions

!new Position('i18_posMBK_W_MID')
!i18_posMBK_W_MID.positionName := #MIDFIELDER
!insert (i18_pMBK_W_MID, i18_posMBK_W_MID) into PlayerPositions

!new Position('i18_posMBK_W_FW')
!i18_posMBK_W_FW.positionName := #FORWARD
!insert (i18_pMBK_W_FW, i18_posMBK_W_FW) into PlayerPositions

!new Position('i18_posMBK_U16_GK')
!i18_posMBK_U16_GK.positionName := #GOALKEEPER
!insert (i18_pMBK_U16_GK, i18_posMBK_U16_GK) into PlayerPositions

!new Position('i18_posMBK_U16_MID')
!i18_posMBK_U16_MID.positionName := #MIDFIELDER
!insert (i18_pMBK_U16_MID, i18_posMBK_U16_MID) into PlayerPositions

!new Position('i18_posMBK_U16_FW')
!i18_posMBK_U16_FW.positionName := #FORWARD
!insert (i18_pMBK_U16_FW, i18_posMBK_U16_FW) into PlayerPositions

!new Position('i18_posIRH_GK')
!i18_posIRH_GK.positionName := #GOALKEEPER
!insert (i18_pIRH_GK, i18_posIRH_GK) into PlayerPositions

!new Position('i18_posIRH_DEF')
!i18_posIRH_DEF.positionName := #DEFENDER
!insert (i18_pIRH_DEF, i18_posIRH_DEF) into PlayerPositions

!new Position('i18_posIRH_MID')
!i18_posIRH_MID.positionName := #MIDFIELDER
!insert (i18_pIRH_MID, i18_posIRH_MID) into PlayerPositions

!new Position('i18_posIRH_MID_alt')
!i18_posIRH_MID_alt.positionName := #DEFENDER
!insert (i18_pIRH_MID, i18_posIRH_MID_alt) into PlayerPositions

!new Position('i18_posIRH_FW')
!i18_posIRH_FW.positionName := #FORWARD
!insert (i18_pIRH_FW, i18_posIRH_FW) into PlayerPositions

!new Position('i18_posIRH_U16_GK')
!i18_posIRH_U16_GK.positionName := #GOALKEEPER
!insert (i18_pIRH_U16_GK, i18_posIRH_U16_GK) into PlayerPositions

!new Position('i18_posIRH_U16_DEF')
!i18_posIRH_U16_DEF.positionName := #DEFENDER
!insert (i18_pIRH_U16_DEF, i18_posIRH_U16_DEF) into PlayerPositions

!new Position('i18_posIRH_U16_DEF_alt')
!i18_posIRH_U16_DEF_alt.positionName := #MIDFIELDER
!insert (i18_pIRH_U16_DEF, i18_posIRH_U16_DEF_alt) into PlayerPositions

!new Position('i18_posIRH_U16_FW')
!i18_posIRH_U16_FW.positionName := #FORWARD
!insert (i18_pIRH_U16_FW, i18_posIRH_U16_FW) into PlayerPositions

!new TrainingObjective('i18_objMBK_W_GK_1')
!i18_objMBK_W_GK_1.areaToImprove := 'Higher starting position to sweep behind the line'
!i18_objMBK_W_GK_1.startDate := '2027-08-15'
!i18_objMBK_W_GK_1.endDate := '2027-09-15'
!i18_objMBK_W_GK_1.success := false
!insert (i18_objMBK_W_GK_1, i18_pMBK_W_GK) into TrainingObjectivePlayer

!new TrainingObjective('i18_objMBK_W_DEF_1')
!i18_objMBK_W_DEF_1.areaToImprove := 'Back-post defending on wide deliveries'
!i18_objMBK_W_DEF_1.startDate := '2027-08-15'
!i18_objMBK_W_DEF_1.endDate := '2027-09-15'
!i18_objMBK_W_DEF_1.success := true
!insert (i18_objMBK_W_DEF_1, i18_pMBK_W_DEF) into TrainingObjectivePlayer

!new TrainingObjective('i18_objMBK_W_MID_1')
!i18_objMBK_W_MID_1.areaToImprove := 'One-touch play to escape pressure'
!i18_objMBK_W_MID_1.startDate := '2027-08-15'
!i18_objMBK_W_MID_1.endDate := '2027-09-15'
!i18_objMBK_W_MID_1.success := false
!insert (i18_objMBK_W_MID_1, i18_pMBK_W_MID) into TrainingObjectivePlayer

!new TrainingObjective('i18_objMBK_W_MID_2')
!i18_objMBK_W_MID_2.areaToImprove := 'Tracking runners after losing the ball'
!i18_objMBK_W_MID_2.startDate := '2027-08-15'
!i18_objMBK_W_MID_2.endDate := '2027-09-15'
!i18_objMBK_W_MID_2.success := true
!insert (i18_objMBK_W_MID_2, i18_pMBK_W_MID) into TrainingObjectivePlayer

!new TrainingObjective('i18_objMBK_W_FW_1')
!i18_objMBK_W_FW_1.areaToImprove := 'First-time finishing from cut-backs'
!i18_objMBK_W_FW_1.startDate := '2027-08-15'
!i18_objMBK_W_FW_1.endDate := '2027-09-15'
!i18_objMBK_W_FW_1.success := false
!insert (i18_objMBK_W_FW_1, i18_pMBK_W_FW) into TrainingObjectivePlayer

!new TrainingObjective('i18_objMBK_U16_GK_1')
!i18_objMBK_U16_GK_1.areaToImprove := 'Footwork for low saves and set position'
!i18_objMBK_U16_GK_1.startDate := '2027-08-15'
!i18_objMBK_U16_GK_1.endDate := '2027-09-15'
!i18_objMBK_U16_GK_1.success := true
!insert (i18_objMBK_U16_GK_1, i18_pMBK_U16_GK) into TrainingObjectivePlayer

!new TrainingObjective('i18_objMBK_U16_MID_1')
!i18_objMBK_U16_MID_1.areaToImprove := 'Scanning before receiving'
!i18_objMBK_U16_MID_1.startDate := '2027-08-15'
!i18_objMBK_U16_MID_1.endDate := '2027-09-15'
!i18_objMBK_U16_MID_1.success := false
!insert (i18_objMBK_U16_MID_1, i18_pMBK_U16_MID) into TrainingObjectivePlayer

!new TrainingObjective('i18_objMBK_U16_FW_1')
!i18_objMBK_U16_FW_1.areaToImprove := 'Curved runs to stay onside'
!i18_objMBK_U16_FW_1.startDate := '2027-08-15'
!i18_objMBK_U16_FW_1.endDate := '2027-09-15'
!i18_objMBK_U16_FW_1.success := false
!insert (i18_objMBK_U16_FW_1, i18_pMBK_U16_FW) into TrainingObjectivePlayer

!new TrainingObjective('i18_objIRH_GK_1')
!i18_objIRH_GK_1.areaToImprove := 'Distribution speed after catches'
!i18_objIRH_GK_1.startDate := '2027-08-15'
!i18_objIRH_GK_1.endDate := '2027-09-15'
!i18_objIRH_GK_1.success := true
!insert (i18_objIRH_GK_1, i18_pIRH_GK) into TrainingObjectivePlayer

!new TrainingObjective('i18_objIRH_DEF_1')
!i18_objIRH_DEF_1.areaToImprove := 'Avoiding cheap fouls in wide areas'
!i18_objIRH_DEF_1.startDate := '2027-08-15'
!i18_objIRH_DEF_1.endDate := '2027-09-15'
!i18_objIRH_DEF_1.success := false
!insert (i18_objIRH_DEF_1, i18_pIRH_DEF) into TrainingObjectivePlayer

!new TrainingObjective('i18_objIRH_MID_1')
!i18_objIRH_MID_1.areaToImprove := 'Switching play to the weak side'
!i18_objIRH_MID_1.startDate := '2027-08-15'
!i18_objIRH_MID_1.endDate := '2027-09-15'
!i18_objIRH_MID_1.success := true
!insert (i18_objIRH_MID_1, i18_pIRH_MID) into TrainingObjectivePlayer

!new TrainingObjective('i18_objIRH_FW_1')
!i18_objIRH_FW_1.areaToImprove := 'Hold-up play under contact'
!i18_objIRH_FW_1.startDate := '2027-08-15'
!i18_objIRH_FW_1.endDate := '2027-09-15'
!i18_objIRH_FW_1.success := false
!insert (i18_objIRH_FW_1, i18_pIRH_FW) into TrainingObjectivePlayer

!new TrainingObjective('i18_objIRH_U16_GK_1')
!i18_objIRH_U16_GK_1.areaToImprove := 'Catching technique under pressure'
!i18_objIRH_U16_GK_1.startDate := '2027-08-15'
!i18_objIRH_U16_GK_1.endDate := '2027-09-15'
!i18_objIRH_U16_GK_1.success := true
!insert (i18_objIRH_U16_GK_1, i18_pIRH_U16_GK) into TrainingObjectivePlayer

!new TrainingObjective('i18_objIRH_U16_DEF_1')
!i18_objIRH_U16_DEF_1.areaToImprove := 'Body position in 1v1 defending'
!i18_objIRH_U16_DEF_1.startDate := '2027-08-15'
!i18_objIRH_U16_DEF_1.endDate := '2027-09-15'
!i18_objIRH_U16_DEF_1.success := false
!insert (i18_objIRH_U16_DEF_1, i18_pIRH_U16_DEF) into TrainingObjectivePlayer

!new TrainingObjective('i18_objIRH_U16_FW_1')
!i18_objIRH_U16_FW_1.areaToImprove := 'Finishing across the goalkeeper'
!i18_objIRH_U16_FW_1.startDate := '2027-08-15'
!i18_objIRH_U16_FW_1.endDate := '2027-09-15'
!i18_objIRH_U16_FW_1.success := false
!insert (i18_objIRH_U16_FW_1, i18_pIRH_U16_FW) into TrainingObjectivePlayer

!new PlayerNotes('i18_pn1')
!i18_pn1.note := 'Calm presence; needs to be more vocal organising defensive corners.'
!i18_pn1.date := '2027-08-20'
!insert (i18_pMBK_W_GK, i18_pn1) into PlayerPlayerNotes

!new PlayerNotes('i18_pn2')
!i18_pn2.note := 'Very tidy on the ball; can speed up decisions when pressed from behind.'
!i18_pn2.date := '2027-08-21'
!insert (i18_pIRH_MID, i18_pn2) into PlayerPlayerNotes

!new PlayerNotes('i18_pn3')
!i18_pn3.note := 'Good movement in behind; sometimes starts runs too early and drifts offside.'
!i18_pn3.date := '2027-08-21'
!insert (i18_pMBK_U16_FW, i18_pn3) into PlayerPlayerNotes

!new TrainingFailedToAttend('i18_tfa1')
!i18_tfa1.reason := 'Family commitment'
!insert (i18_tsMBK_W_2, i18_tfa1) into TrainingFailded
!insert (i18_tfa1, i18_pMBK_W_DEF) into FailedPlayer

!new TrainingFailedToAttend('i18_tfa2')
!i18_tfa2.reason := 'Public transport disruption'
!insert (i18_tsMBK_U16_1, i18_tfa2) into TrainingFailded
!insert (i18_tfa2, i18_pMBK_U16_MID) into FailedPlayer

!new TrainingFailedToAttend('i18_tfa3')
!i18_tfa3.reason := 'Minor ankle knock'
!insert (i18_tsIRH_1, i18_tfa3) into TrainingFailded
!insert (i18_tfa3, i18_pIRH_DEF) into FailedPlayer

!new Match('i18_matchA')
!i18_matchA.date := '2027-08-24'
!i18_matchA.homeAway := true

!new Match('i18_matchB')
!i18_matchB.date := '2027-08-25'
!i18_matchB.homeAway := false

!insert (i18_compInvit, i18_matchA) into CompetitionMatch
!insert (i18_compInvit, i18_matchB) into CompetitionMatch

!insert (i18_teamMBK_W, i18_matchA) into LocalMatch
!insert (i18_teamIRH_1, i18_matchA) into VisitorMatch

!insert (i18_teamMBK_U16, i18_matchB) into LocalMatch
!insert (i18_teamIRH_U16, i18_matchB) into VisitorMatch

!new MatchReport('i18_mrA')
!i18_mrA.duration := 90
!i18_mrA.scoreVisitor := 2
!i18_mrA.scoreLocal := 1
!insert (i18_matchA, i18_mrA) into MatchMatchReport

!new MatchReport('i18_mrB')
!i18_mrB.duration := 90
!i18_mrB.scoreVisitor := 0
!i18_mrB.scoreLocal := 3
!insert (i18_matchB, i18_mrB) into MatchMatchReport

!new MatchEvent('i18_evA_goal1')
!i18_evA_goal1.eventType := #GOAL
!i18_evA_goal1.time := 22
!insert (i18_matchA, i18_evA_goal1) into MatchMatchEvent

!new MatchEvent('i18_evA_goal2')
!i18_evA_goal2.eventType := #GOAL
!i18_evA_goal2.time := 51
!insert (i18_matchA, i18_evA_goal2) into MatchMatchEvent

!new MatchEvent('i18_evA_goal3')
!i18_evA_goal3.eventType := #GOAL
!i18_evA_goal3.time := 84
!insert (i18_matchA, i18_evA_goal3) into MatchMatchEvent

!new MatchEvent('i18_evA_foul1')
!i18_evA_foul1.eventType := #FOUL
!i18_evA_foul1.time := 36
!insert (i18_matchA, i18_evA_foul1) into MatchMatchEvent

!new MatchEvent('i18_evA_corner1')
!i18_evA_corner1.eventType := #CORNER
!i18_evA_corner1.time := 73
!insert (i18_matchA, i18_evA_corner1) into MatchMatchEvent

!new MatchNote('i18_mnA')
!i18_mnA.note := 'Ironhaven scored late after a spell of pressure; Meadowbrook pressed well but conceded on transitions.'
!i18_mnA.date := '2027-08-24'
!insert (i18_matchA, i18_mnA) into MatchMatchNote

!new MatchEvent('i18_evB_goal1')
!i18_evB_goal1.eventType := #GOAL
!i18_evB_goal1.time := 12
!insert (i18_matchB, i18_evB_goal1) into MatchMatchEvent

!new MatchEvent('i18_evB_goal2')
!i18_evB_goal2.eventType := #GOAL
!i18_evB_goal2.time := 47
!insert (i18_matchB, i18_evB_goal2) into MatchMatchEvent

!new MatchEvent('i18_evB_goal3')
!i18_evB_goal3.eventType := #GOAL
!i18_evB_goal3.time := 88
!insert (i18_matchB, i18_evB_goal3) into MatchMatchEvent

!new MatchEvent('i18_evB_off1')
!i18_evB_off1.eventType := #OFFSIDE
!i18_evB_off1.time := 65
!insert (i18_matchB, i18_evB_off1) into MatchMatchEvent

!new MatchEvent('i18_evB_pen1')
!i18_evB_pen1.eventType := #PENALTY
!i18_evB_pen1.time := 79
!insert (i18_matchB, i18_evB_pen1) into MatchMatchEvent

!new MatchNote('i18_mnB')
!i18_mnB.note := 'Meadowbrook U16 were clinical and defended compactly; Ironhaven U16 failed to convert a late penalty.'
!i18_mnB.date := '2027-08-25'
!insert (i18_matchB, i18_mnB) into MatchMatchNote

!new MatchPlayer('i18_mpA_MBK_GK')
!i18_mpA_MBK_GK.booked := false
!i18_mpA_MBK_GK.goals := 0
!i18_mpA_MBK_GK.rating := 7

!new MatchPlayer('i18_mpA_MBK_FW')
!i18_mpA_MBK_FW.booked := false
!i18_mpA_MBK_FW.goals := 1
!i18_mpA_MBK_FW.rating := 7

!new MatchPlayer('i18_mpA_IRH_MID')
!i18_mpA_IRH_MID.booked := true
!i18_mpA_IRH_MID.goals := 0
!i18_mpA_IRH_MID.rating := 7

!new MatchPlayer('i18_mpA_IRH_FW')
!i18_mpA_IRH_FW.booked := false
!i18_mpA_IRH_FW.goals := 2
!i18_mpA_IRH_FW.rating := 8

!insert (i18_matchA, i18_mpA_MBK_GK) into MatchMatchPlayer
!insert (i18_matchA, i18_mpA_MBK_FW) into MatchMatchPlayer
!insert (i18_matchA, i18_mpA_IRH_MID) into MatchMatchPlayer
!insert (i18_matchA, i18_mpA_IRH_FW) into MatchMatchPlayer

!insert (i18_pMBK_W_GK, i18_mpA_MBK_GK) into PlayerMatch
!insert (i18_pMBK_W_FW, i18_mpA_MBK_FW) into PlayerMatch
!insert (i18_pIRH_MID, i18_mpA_IRH_MID) into PlayerMatch
!insert (i18_pIRH_FW, i18_mpA_IRH_FW) into PlayerMatch

!new MatchPlayerPosition('i18_mppA_MBK_GK')
!i18_mppA_MBK_GK.positionName := #GOALKEEPER
!i18_mppA_MBK_GK.number := 1
!insert (i18_mpA_MBK_GK, i18_mppA_MBK_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i18_mppA_MBK_FW')
!i18_mppA_MBK_FW.positionName := #FORWARD
!i18_mppA_MBK_FW.number := 9
!insert (i18_mpA_MBK_FW, i18_mppA_MBK_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i18_mppA_IRH_MID')
!i18_mppA_IRH_MID.positionName := #MIDFIELDER
!i18_mppA_IRH_MID.number := 8
!insert (i18_mpA_IRH_MID, i18_mppA_IRH_MID) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i18_mppA_IRH_FW')
!i18_mppA_IRH_FW.positionName := #FORWARD
!i18_mppA_IRH_FW.number := 11
!insert (i18_mpA_IRH_FW, i18_mppA_IRH_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('i18_mpB_MBK16_GK')
!i18_mpB_MBK16_GK.booked := false
!i18_mpB_MBK16_GK.goals := 0
!i18_mpB_MBK16_GK.rating := 8

!new MatchPlayer('i18_mpB_MBK16_MID')
!i18_mpB_MBK16_MID.booked := true
!i18_mpB_MBK16_MID.goals := 1
!i18_mpB_MBK16_MID.rating := 8

!new MatchPlayer('i18_mpB_MBK16_FW')
!i18_mpB_MBK16_FW.booked := false
!i18_mpB_MBK16_FW.goals := 2
!i18_mpB_MBK16_FW.rating := 9

!new MatchPlayer('i18_mpB_IRH16_GK')
!i18_mpB_IRH16_GK.booked := false
!i18_mpB_IRH16_GK.goals := 0
!i18_mpB_IRH16_GK.rating := 7

!new MatchPlayer('i18_mpB_IRH16_FW')
!i18_mpB_IRH16_FW.booked := false
!i18_mpB_IRH16_FW.goals := 0
!i18_mpB_IRH16_FW.rating := 6

!insert (i18_matchB, i18_mpB_MBK16_GK) into MatchMatchPlayer
!insert (i18_matchB, i18_mpB_MBK16_MID) into MatchMatchPlayer
!insert (i18_matchB, i18_mpB_MBK16_FW) into MatchMatchPlayer
!insert (i18_matchB, i18_mpB_IRH16_GK) into MatchMatchPlayer
!insert (i18_matchB, i18_mpB_IRH16_FW) into MatchMatchPlayer

!insert (i18_pMBK_U16_GK, i18_mpB_MBK16_GK) into PlayerMatch
!insert (i18_pMBK_U16_MID, i18_mpB_MBK16_MID) into PlayerMatch
!insert (i18_pMBK_U16_FW, i18_mpB_MBK16_FW) into PlayerMatch
!insert (i18_pIRH_U16_GK, i18_mpB_IRH16_GK) into PlayerMatch
!insert (i18_pIRH_U16_FW, i18_mpB_IRH16_FW) into PlayerMatch

!new MatchPlayerPosition('i18_mppB_MBK16_GK')
!i18_mppB_MBK16_GK.positionName := #GOALKEEPER
!i18_mppB_MBK16_GK.number := 1
!insert (i18_mpB_MBK16_GK, i18_mppB_MBK16_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i18_mppB_MBK16_MID')
!i18_mppB_MBK16_MID.positionName := #MIDFIELDER
!i18_mppB_MBK16_MID.number := 8
!insert (i18_mpB_MBK16_MID, i18_mppB_MBK16_MID) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i18_mppB_MBK16_FW')
!i18_mppB_MBK16_FW.positionName := #FORWARD
!i18_mppB_MBK16_FW.number := 9
!insert (i18_mpB_MBK16_FW, i18_mppB_MBK16_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i18_mppB_IRH16_GK')
!i18_mppB_IRH16_GK.positionName := #GOALKEEPER
!i18_mppB_IRH16_GK.number := 1
!insert (i18_mpB_IRH16_GK, i18_mppB_IRH16_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i18_mppB_IRH16_FW')
!i18_mppB_IRH16_FW.positionName := #FORWARD
!i18_mppB_IRH16_FW.number := 11
!insert (i18_mpB_IRH16_FW, i18_mppB_IRH16_FW) into MatchPlayerMatchPlayerPosition
```
## Generation 27 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 477 | 0.00% |
| Multiplicities Errors | 0 | 116 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 47 | 0.00% |

# Generation 28
```
!new Club('i19_clubRDS')
!i19_clubRDS.name := 'Redstone FC'
!i19_clubRDS.homeGround := 'Redstone Park'
!i19_clubRDS.chairman := 'Monica Gallagher'

!new Club('i19_clubOKR')
!i19_clubOKR.name := 'Oakridge FC'
!i19_clubOKR.homeGround := 'Oakridge Recreation Ground'
!i19_clubOKR.chairman := 'Neil Anders'

!new Club('i19_clubSVG')
!i19_clubSVG.name := 'Silvergate Athletic'
!i19_clubSVG.homeGround := 'Silvergate Stadium'
!i19_clubSVG.chairman := 'Priya Narang'

!new Club('i19_clubKPT')
!i19_clubKPT.name := 'Kingsport Town'
!i19_clubKPT.homeGround := 'Kingsport Common'
!i19_clubKPT.chairman := 'Howard Price'

!new Team('i19_teamRDS_1')
!i19_teamRDS_1.name := 'Redstone First XI'

!new Team('i19_teamOKR_1')
!i19_teamOKR_1.name := 'Oakridge First XI'

!new Team('i19_teamSVG_1')
!i19_teamSVG_1.name := 'Silvergate First XI'

!new Team('i19_teamKPT_1')
!i19_teamKPT_1.name := 'Kingsport First XI'

!insert (i19_clubRDS, i19_teamRDS_1) into ClubTeam
!insert (i19_clubOKR, i19_teamOKR_1) into ClubTeam
!insert (i19_clubSVG, i19_teamSVG_1) into ClubTeam
!insert (i19_clubKPT, i19_teamKPT_1) into ClubTeam

!new Competition('i19_compPreSeason')
!i19_compPreSeason.name := 'Pre-Season Showcase'
!i19_compPreSeason.type := 'Friendly'

!new Competition('i19_compPlate')
!i19_compPlate.name := 'Summer Plate'
!i19_compPlate.type := 'Cup'

!new TrainingSession('i19_tsRDS_1')
!i19_tsRDS_1.date := '2027-09-02'
!i19_tsRDS_1.location := 'Redstone Park - Pitch 1'
!i19_tsRDS_1.purpose := 'Build-up under pressure and switching play'

!new TrainingSession('i19_tsRDS_2')
!i19_tsRDS_2.date := '2027-09-04'
!i19_tsRDS_2.location := 'Redstone Park - Pitch 2'
!i19_tsRDS_2.purpose := 'Defending transitions and counter-pressing'

!new TrainingSession('i19_tsOKR_1')
!i19_tsOKR_1.date := '2027-09-03'
!i19_tsOKR_1.location := 'Oakridge Recreation Ground - Main Pitch'
!i19_tsOKR_1.purpose := 'Final third movement and finishing'

!new TrainingSession('i19_tsSVG_1')
!i19_tsSVG_1.date := '2027-09-03'
!i19_tsSVG_1.location := 'Silvergate Stadium - Training Pitch'
!i19_tsSVG_1.purpose := 'Set pieces: attacking corners and defensive organisation'

!new TrainingSession('i19_tsKPT_1')
!i19_tsKPT_1.date := '2027-09-04'
!i19_tsKPT_1.location := 'Kingsport Common - Pitch A'
!i19_tsKPT_1.purpose := 'Mid-block organisation and counters'

!insert (i19_teamRDS_1, i19_tsRDS_1) into TeamTraining
!insert (i19_teamRDS_1, i19_tsRDS_2) into TeamTraining
!insert (i19_teamOKR_1, i19_tsOKR_1) into TeamTraining
!insert (i19_teamSVG_1, i19_tsSVG_1) into TeamTraining
!insert (i19_teamKPT_1, i19_tsKPT_1) into TeamTraining

!new TrainingNotes('i19_tnRDS_1a')
!i19_tnRDS_1a.note := 'Good rotations in midfield; avoid forcing central passes when the pivot is marked.'
!i19_tnRDS_1a.date := '2027-09-02'
!insert (i19_tsRDS_1, i19_tnRDS_1a) into TrainingTrainingNotes

!new TrainingNotes('i19_tnRDS_1b')
!i19_tnRDS_1b.note := 'Switches to the weak side were effective; improve timing of fullback overlaps.'
!i19_tnRDS_1b.date := '2027-09-02'
!insert (i19_tsRDS_1, i19_tnRDS_1b) into TrainingTrainingNotes

!new TrainingNotes('i19_tnRDS_2a')
!i19_tnRDS_2a.note := 'Counter-press better after triggers; still vulnerable when both fullbacks are high.'
!i19_tnRDS_2a.date := '2027-09-04'
!insert (i19_tsRDS_2, i19_tnRDS_2a) into TrainingTrainingNotes

!new TrainingNotes('i19_tnOKR_1a')
!i19_tnOKR_1a.note := 'Created chances from cut-backs; finishing under pressure needs more composure.'
!i19_tnOKR_1a.date := '2027-09-03'
!insert (i19_tsOKR_1, i19_tnOKR_1a) into TrainingTrainingNotes

!new TrainingNotes('i19_tnSVG_1a')
!i19_tnSVG_1a.note := 'Corner roles clear; must attack second balls more aggressively after clearances.'
!i19_tnSVG_1a.date := '2027-09-03'
!insert (i19_tsSVG_1, i19_tnSVG_1a) into TrainingTrainingNotes

!new TrainingNotes('i19_tnKPT_1a')
!i19_tnKPT_1a.note := 'Mid-block compact; first pass after regain must be quicker to exploit space.'
!i19_tnKPT_1a.date := '2027-09-04'
!insert (i19_tsKPT_1, i19_tnKPT_1a) into TrainingTrainingNotes

!new Player('i19_pRDS_GK')
!i19_pRDS_GK.name := 'Peter Shaw'
!i19_pRDS_GK.age := 34
!i19_pRDS_GK.bestFoot := #RIGHT
!i19_pRDS_GK.phoneNumber := '+44 7700 960101'

!new Player('i19_pRDS_DEF')
!i19_pRDS_DEF.name := 'Kofi Mensah'
!i19_pRDS_DEF.age := 27
!i19_pRDS_DEF.bestFoot := #BOTH
!i19_pRDS_DEF.phoneNumber := '+44 7700 960102'

!new Player('i19_pRDS_MID')
!i19_pRDS_MID.name := 'Riku Sakamoto'
!i19_pRDS_MID.age := 24
!i19_pRDS_MID.bestFoot := #LEFT
!i19_pRDS_MID.phoneNumber := '+44 7700 960103'

!new Player('i19_pRDS_FW')
!i19_pRDS_FW.name := 'Elliot Cross'
!i19_pRDS_FW.age := 23
!i19_pRDS_FW.bestFoot := #RIGHT
!i19_pRDS_FW.phoneNumber := '+44 7700 960104'

!new Player('i19_pOKR_GK')
!i19_pOKR_GK.name := 'Maksim Orlov'
!i19_pOKR_GK.age := 30
!i19_pOKR_GK.bestFoot := #LEFT
!i19_pOKR_GK.phoneNumber := '+44 7700 961101'

!new Player('i19_pOKR_MID')
!i19_pOKR_MID.name := 'Daniela Voss'
!i19_pOKR_MID.age := 22
!i19_pOKR_MID.bestFoot := #RIGHT
!i19_pOKR_MID.phoneNumber := '+44 7700 961102'

!new Player('i19_pOKR_FW')
!i19_pOKR_FW.name := 'Ronan Hughes'
!i19_pOKR_FW.age := 25
!i19_pOKR_FW.bestFoot := #BOTH
!i19_pOKR_FW.phoneNumber := '+44 7700 961103'

!new Player('i19_pSVG_GK')
!i19_pSVG_GK.name := 'Jonas Nyman'
!i19_pSVG_GK.age := 28
!i19_pSVG_GK.bestFoot := #BOTH
!i19_pSVG_GK.phoneNumber := '+44 7700 962101'

!new Player('i19_pSVG_DEF')
!i19_pSVG_DEF.name := 'Mauro Silva'
!i19_pSVG_DEF.age := 26
!i19_pSVG_DEF.bestFoot := #RIGHT
!i19_pSVG_DEF.phoneNumber := '+44 7700 962102'

!new Player('i19_pSVG_FW')
!i19_pSVG_FW.name := 'Ilias Cherif'
!i19_pSVG_FW.age := 24
!i19_pSVG_FW.bestFoot := #LEFT
!i19_pSVG_FW.phoneNumber := '+44 7700 962103'

!new Player('i19_pKPT_GK')
!i19_pKPT_GK.name := 'Aaron Mills'
!i19_pKPT_GK.age := 31
!i19_pKPT_GK.bestFoot := #RIGHT
!i19_pKPT_GK.phoneNumber := '+44 7700 963101'

!new Player('i19_pKPT_DEF')
!i19_pKPT_DEF.name := 'Sergio Lima'
!i19_pKPT_DEF.age := 28
!i19_pKPT_DEF.bestFoot := #BOTH
!i19_pKPT_DEF.phoneNumber := '+44 7700 963102'

!new Player('i19_pKPT_MID')
!i19_pKPT_MID.name := 'Owen Price'
!i19_pKPT_MID.age := 26
!i19_pKPT_MID.bestFoot := #RIGHT
!i19_pKPT_MID.phoneNumber := '+44 7700 963103'

!new Player('i19_pKPT_FW')
!i19_pKPT_FW.name := 'Mateo Alvarez'
!i19_pKPT_FW.age := 22
!i19_pKPT_FW.bestFoot := #LEFT
!i19_pKPT_FW.phoneNumber := '+44 7700 963104'

!insert (i19_teamRDS_1, i19_pRDS_GK) into TeamPlayer
!insert (i19_teamRDS_1, i19_pRDS_DEF) into TeamPlayer
!insert (i19_teamRDS_1, i19_pRDS_MID) into TeamPlayer
!insert (i19_teamRDS_1, i19_pRDS_FW) into TeamPlayer

!insert (i19_teamOKR_1, i19_pOKR_GK) into TeamPlayer
!insert (i19_teamOKR_1, i19_pOKR_MID) into TeamPlayer
!insert (i19_teamOKR_1, i19_pOKR_FW) into TeamPlayer

!insert (i19_teamSVG_1, i19_pSVG_GK) into TeamPlayer
!insert (i19_teamSVG_1, i19_pSVG_DEF) into TeamPlayer
!insert (i19_teamSVG_1, i19_pSVG_FW) into TeamPlayer

!insert (i19_teamKPT_1, i19_pKPT_GK) into TeamPlayer
!insert (i19_teamKPT_1, i19_pKPT_DEF) into TeamPlayer
!insert (i19_teamKPT_1, i19_pKPT_MID) into TeamPlayer
!insert (i19_teamKPT_1, i19_pKPT_FW) into TeamPlayer

!new Position('i19_posRDS_GK')
!i19_posRDS_GK.positionName := #GOALKEEPER
!insert (i19_pRDS_GK, i19_posRDS_GK) into PlayerPositions

!new Position('i19_posRDS_DEF_1')
!i19_posRDS_DEF_1.positionName := #DEFENDER
!insert (i19_pRDS_DEF, i19_posRDS_DEF_1) into PlayerPositions

!new Position('i19_posRDS_DEF_2')
!i19_posRDS_DEF_2.positionName := #MIDFIELDER
!insert (i19_pRDS_DEF, i19_posRDS_DEF_2) into PlayerPositions

!new Position('i19_posRDS_MID')
!i19_posRDS_MID.positionName := #MIDFIELDER
!insert (i19_pRDS_MID, i19_posRDS_MID) into PlayerPositions

!new Position('i19_posRDS_FW')
!i19_posRDS_FW.positionName := #FORWARD
!insert (i19_pRDS_FW, i19_posRDS_FW) into PlayerPositions

!new Position('i19_posOKR_GK')
!i19_posOKR_GK.positionName := #GOALKEEPER
!insert (i19_pOKR_GK, i19_posOKR_GK) into PlayerPositions

!new Position('i19_posOKR_MID')
!i19_posOKR_MID.positionName := #MIDFIELDER
!insert (i19_pOKR_MID, i19_posOKR_MID) into PlayerPositions

!new Position('i19_posOKR_MID_alt')
!i19_posOKR_MID_alt.positionName := #DEFENDER
!insert (i19_pOKR_MID, i19_posOKR_MID_alt) into PlayerPositions

!new Position('i19_posOKR_FW')
!i19_posOKR_FW.positionName := #FORWARD
!insert (i19_pOKR_FW, i19_posOKR_FW) into PlayerPositions

!new Position('i19_posOKR_FW_alt')
!i19_posOKR_FW_alt.positionName := #MIDFIELDER
!insert (i19_pOKR_FW, i19_posOKR_FW_alt) into PlayerPositions

!new Position('i19_posSVG_GK')
!i19_posSVG_GK.positionName := #GOALKEEPER
!insert (i19_pSVG_GK, i19_posSVG_GK) into PlayerPositions

!new Position('i19_posSVG_DEF')
!i19_posSVG_DEF.positionName := #DEFENDER
!insert (i19_pSVG_DEF, i19_posSVG_DEF) into PlayerPositions

!new Position('i19_posSVG_FW')
!i19_posSVG_FW.positionName := #FORWARD
!insert (i19_pSVG_FW, i19_posSVG_FW) into PlayerPositions

!new Position('i19_posKPT_GK')
!i19_posKPT_GK.positionName := #GOALKEEPER
!insert (i19_pKPT_GK, i19_posKPT_GK) into PlayerPositions

!new Position('i19_posKPT_DEF')
!i19_posKPT_DEF.positionName := #DEFENDER
!insert (i19_pKPT_DEF, i19_posKPT_DEF) into PlayerPositions

!new Position('i19_posKPT_DEF_alt')
!i19_posKPT_DEF_alt.positionName := #MIDFIELDER
!insert (i19_pKPT_DEF, i19_posKPT_DEF_alt) into PlayerPositions

!new Position('i19_posKPT_MID')
!i19_posKPT_MID.positionName := #MIDFIELDER
!insert (i19_pKPT_MID, i19_posKPT_MID) into PlayerPositions

!new Position('i19_posKPT_FW')
!i19_posKPT_FW.positionName := #FORWARD
!insert (i19_pKPT_FW, i19_posKPT_FW) into PlayerPositions

!new TrainingObjective('i19_objRDS_GK_1')
!i19_objRDS_GK_1.areaToImprove := 'Commanding the six-yard box on corners'
!i19_objRDS_GK_1.startDate := '2027-09-01'
!i19_objRDS_GK_1.endDate := '2027-10-01'
!i19_objRDS_GK_1.success := false
!insert (i19_objRDS_GK_1, i19_pRDS_GK) into TrainingObjectivePlayer

!new TrainingObjective('i19_objRDS_DEF_1')
!i19_objRDS_DEF_1.areaToImprove := 'Defending cut-backs in the box'
!i19_objRDS_DEF_1.startDate := '2027-09-01'
!i19_objRDS_DEF_1.endDate := '2027-10-01'
!i19_objRDS_DEF_1.success := true
!insert (i19_objRDS_DEF_1, i19_pRDS_DEF) into TrainingObjectivePlayer

!new TrainingObjective('i19_objRDS_MID_1')
!i19_objRDS_MID_1.areaToImprove := 'Scanning before receiving under pressure'
!i19_objRDS_MID_1.startDate := '2027-09-01'
!i19_objRDS_MID_1.endDate := '2027-10-01'
!i19_objRDS_MID_1.success := false
!insert (i19_objRDS_MID_1, i19_pRDS_MID) into TrainingObjectivePlayer

!new TrainingObjective('i19_objRDS_FW_1')
!i19_objRDS_FW_1.areaToImprove := 'Finishing across the goalkeeper from central areas'
!i19_objRDS_FW_1.startDate := '2027-09-01'
!i19_objRDS_FW_1.endDate := '2027-10-01'
!i19_objRDS_FW_1.success := false
!insert (i19_objRDS_FW_1, i19_pRDS_FW) into TrainingObjectivePlayer

!new TrainingObjective('i19_objOKR_GK_1')
!i19_objOKR_GK_1.areaToImprove := 'Distribution speed after saves'
!i19_objOKR_GK_1.startDate := '2027-09-01'
!i19_objOKR_GK_1.endDate := '2027-10-01'
!i19_objOKR_GK_1.success := true
!insert (i19_objOKR_GK_1, i19_pOKR_GK) into TrainingObjectivePlayer

!new TrainingObjective('i19_objOKR_MID_1')
!i19_objOKR_MID_1.areaToImprove := 'Receiving on the half-turn under pressure'
!i19_objOKR_MID_1.startDate := '2027-09-01'
!i19_objOKR_MID_1.endDate := '2027-10-01'
!i19_objOKR_MID_1.success := false
!insert (i19_objOKR_MID_1, i19_pOKR_MID) into TrainingObjectivePlayer

!new TrainingObjective('i19_objOKR_FW_1')
!i19_objOKR_FW_1.areaToImprove := 'Hold-up play and linking midfield runners'
!i19_objOKR_FW_1.startDate := '2027-09-01'
!i19_objOKR_FW_1.endDate := '2027-10-01'
!i19_objOKR_FW_1.success := false
!insert (i19_objOKR_FW_1, i19_pOKR_FW) into TrainingObjectivePlayer

!new TrainingObjective('i19_objSVG_GK_1')
!i19_objSVG_GK_1.areaToImprove := 'Footwork and set position on low shots'
!i19_objSVG_GK_1.startDate := '2027-09-01'
!i19_objSVG_GK_1.endDate := '2027-10-01'
!i19_objSVG_GK_1.success := true
!insert (i19_objSVG_GK_1, i19_pSVG_GK) into TrainingObjectivePlayer

!new TrainingObjective('i19_objSVG_DEF_1')
!i19_objSVG_DEF_1.areaToImprove := 'Back-post marking on crosses'
!i19_objSVG_DEF_1.startDate := '2027-09-01'
!i19_objSVG_DEF_1.endDate := '2027-10-01'
!i19_objSVG_DEF_1.success := false
!insert (i19_objSVG_DEF_1, i19_pSVG_DEF) into TrainingObjectivePlayer

!new TrainingObjective('i19_objSVG_FW_1')
!i19_objSVG_FW_1.areaToImprove := 'Curved runs to stay onside'
!i19_objSVG_FW_1.startDate := '2027-09-01'
!i19_objSVG_FW_1.endDate := '2027-10-01'
!i19_objSVG_FW_1.success := false
!insert (i19_objSVG_FW_1, i19_pSVG_FW) into TrainingObjectivePlayer

!new TrainingObjective('i19_objKPT_GK_1')
!i19_objKPT_GK_1.areaToImprove := 'Claiming crosses under contact'
!i19_objKPT_GK_1.startDate := '2027-09-01'
!i19_objKPT_GK_1.endDate := '2027-10-01'
!i19_objKPT_GK_1.success := false
!insert (i19_objKPT_GK_1, i19_pKPT_GK) into TrainingObjectivePlayer

!new TrainingObjective('i19_objKPT_DEF_1')
!i19_objKPT_DEF_1.areaToImprove := 'Avoiding cheap fouls in wide areas'
!i19_objKPT_DEF_1.startDate := '2027-09-01'
!i19_objKPT_DEF_1.endDate := '2027-10-01'
!i19_objKPT_DEF_1.success := true
!insert (i19_objKPT_DEF_1, i19_pKPT_DEF) into TrainingObjectivePlayer

!new TrainingObjective('i19_objKPT_MID_1')
!i19_objKPT_MID_1.areaToImprove := 'Switching play to the weak side'
!i19_objKPT_MID_1.startDate := '2027-09-01'
!i19_objKPT_MID_1.endDate := '2027-10-01'
!i19_objKPT_MID_1.success := true
!insert (i19_objKPT_MID_1, i19_pKPT_MID) into TrainingObjectivePlayer

!new TrainingObjective('i19_objKPT_FW_1')
!i19_objKPT_FW_1.areaToImprove := 'First-time finishing from cut-backs'
!i19_objKPT_FW_1.startDate := '2027-09-01'
!i19_objKPT_FW_1.endDate := '2027-10-01'
!i19_objKPT_FW_1.success := false
!insert (i19_objKPT_FW_1, i19_pKPT_FW) into TrainingObjectivePlayer

!new PlayerNotes('i19_pnRDS_1')
!i19_pnRDS_1.note := 'Reliable in possession; can speed up decisions when pressed from behind.'
!i19_pnRDS_1.date := '2027-09-04'
!insert (i19_pRDS_MID, i19_pnRDS_1) into PlayerPlayerNotes

!new TrainingFailedToAttend('i19_tfaRDS_1')
!i19_tfaRDS_1.reason := 'Work travel'
!insert (i19_tsRDS_2, i19_tfaRDS_1) into TrainingFailded
!insert (i19_tfaRDS_1, i19_pRDS_DEF) into FailedPlayer

!new TrainingFailedToAttend('i19_tfaOKR_1')
!i19_tfaOKR_1.reason := 'Illness'
!insert (i19_tsOKR_1, i19_tfaOKR_1) into TrainingFailded
!insert (i19_tfaOKR_1, i19_pOKR_FW) into FailedPlayer

!new Match('i19_matchPre1')
!i19_matchPre1.date := '2027-09-07'
!i19_matchPre1.homeAway := true

!new Match('i19_matchPlateQF')
!i19_matchPlateQF.date := '2027-09-08'
!i19_matchPlateQF.homeAway := false

!insert (i19_compPreSeason, i19_matchPre1) into CompetitionMatch
!insert (i19_compPlate, i19_matchPlateQF) into CompetitionMatch

!insert (i19_teamRDS_1, i19_matchPre1) into LocalMatch
!insert (i19_teamOKR_1, i19_matchPre1) into VisitorMatch

!insert (i19_teamSVG_1, i19_matchPlateQF) into LocalMatch
!insert (i19_teamKPT_1, i19_matchPlateQF) into VisitorMatch

!new MatchReport('i19_mrPre1')
!i19_mrPre1.duration := 90
!i19_mrPre1.scoreVisitor := 2
!i19_mrPre1.scoreLocal := 2
!insert (i19_matchPre1, i19_mrPre1) into MatchMatchReport

!new MatchReport('i19_mrPlateQF')
!i19_mrPlateQF.duration := 90
!i19_mrPlateQF.scoreVisitor := 0
!i19_mrPlateQF.scoreLocal := 1
!insert (i19_matchPlateQF, i19_mrPlateQF) into MatchMatchReport

!new MatchEvent('i19_evPre1_goal1')
!i19_evPre1_goal1.eventType := #GOAL
!i19_evPre1_goal1.time := 9
!insert (i19_matchPre1, i19_evPre1_goal1) into MatchMatchEvent

!new MatchEvent('i19_evPre1_goal2')
!i19_evPre1_goal2.eventType := #GOAL
!i19_evPre1_goal2.time := 26
!insert (i19_matchPre1, i19_evPre1_goal2) into MatchMatchEvent

!new MatchEvent('i19_evPre1_goal3')
!i19_evPre1_goal3.eventType := #GOAL
!i19_evPre1_goal3.time := 61
!insert (i19_matchPre1, i19_evPre1_goal3) into MatchMatchEvent

!new MatchEvent('i19_evPre1_goal4')
!i19_evPre1_goal4.eventType := #GOAL
!i19_evPre1_goal4.time := 87
!insert (i19_matchPre1, i19_evPre1_goal4) into MatchMatchEvent

!new MatchEvent('i19_evPre1_foul1')
!i19_evPre1_foul1.eventType := #FOUL
!i19_evPre1_foul1.time := 34
!insert (i19_matchPre1, i19_evPre1_foul1) into MatchMatchEvent

!new MatchEvent('i19_evPre1_off1')
!i19_evPre1_off1.eventType := #OFFSIDE
!i19_evPre1_off1.time := 72
!insert (i19_matchPre1, i19_evPre1_off1) into MatchMatchEvent

!new MatchEvent('i19_evPre1_corner1')
!i19_evPre1_corner1.eventType := #CORNER
!i19_evPre1_corner1.time := 78
!insert (i19_matchPre1, i19_evPre1_corner1) into MatchMatchEvent

!new MatchNote('i19_mnPre1')
!i19_mnPre1.note := 'Open friendly with four goals; both sides looked sharp in attack but exposed in transition.'
!i19_mnPre1.date := '2027-09-07'
!insert (i19_matchPre1, i19_mnPre1) into MatchMatchNote

!new MatchEvent('i19_evQF_goal1')
!i19_evQF_goal1.eventType := #GOAL
!i19_evQF_goal1.time := 58
!insert (i19_matchPlateQF, i19_evQF_goal1) into MatchMatchEvent

!new MatchEvent('i19_evQF_pen1')
!i19_evQF_pen1.eventType := #PENALTY
!i19_evQF_pen1.time := 60
!insert (i19_matchPlateQF, i19_evQF_pen1) into MatchMatchEvent

!new MatchEvent('i19_evQF_corner1')
!i19_evQF_corner1.eventType := #CORNER
!i19_evQF_corner1.time := 81
!insert (i19_matchPlateQF, i19_evQF_corner1) into MatchMatchEvent

!new MatchEvent('i19_evQF_foul1')
!i19_evQF_foul1.eventType := #FOUL
!i19_evQF_foul1.time := 44
!insert (i19_matchPlateQF, i19_evQF_foul1) into MatchMatchEvent

!new MatchNote('i19_mnQF')
!i19_mnQF.note := 'Tight cup game decided by a second-half set piece; Kingsport missed a penalty shortly after conceding.'
!i19_mnQF.date := '2027-09-08'
!insert (i19_matchPlateQF, i19_mnQF) into MatchMatchNote

!new MatchPlayer('i19_mpPre_RDS_GK')
!i19_mpPre_RDS_GK.booked := false
!i19_mpPre_RDS_GK.goals := 0
!i19_mpPre_RDS_GK.rating := 6

!new MatchPlayer('i19_mpPre_RDS_MID')
!i19_mpPre_RDS_MID.booked := true
!i19_mpPre_RDS_MID.goals := 1
!i19_mpPre_RDS_MID.rating := 7

!new MatchPlayer('i19_mpPre_RDS_FW')
!i19_mpPre_RDS_FW.booked := false
!i19_mpPre_RDS_FW.goals := 1
!i19_mpPre_RDS_FW.rating := 7

!new MatchPlayer('i19_mpPre_OKR_GK')
!i19_mpPre_OKR_GK.booked := false
!i19_mpPre_OKR_GK.goals := 0
!i19_mpPre_OKR_GK.rating := 6

!new MatchPlayer('i19_mpPre_OKR_MID')
!i19_mpPre_OKR_MID.booked := false
!i19_mpPre_OKR_MID.goals := 0
!i19_mpPre_OKR_MID.rating := 7

!new MatchPlayer('i19_mpPre_OKR_FW')
!i19_mpPre_OKR_FW.booked := false
!i19_mpPre_OKR_FW.goals := 2
!i19_mpPre_OKR_FW.rating := 8

!insert (i19_matchPre1, i19_mpPre_RDS_GK) into MatchMatchPlayer
!insert (i19_matchPre1, i19_mpPre_RDS_MID) into MatchMatchPlayer
!insert (i19_matchPre1, i19_mpPre_RDS_FW) into MatchMatchPlayer
!insert (i19_matchPre1, i19_mpPre_OKR_GK) into MatchMatchPlayer
!insert (i19_matchPre1, i19_mpPre_OKR_MID) into MatchMatchPlayer
!insert (i19_matchPre1, i19_mpPre_OKR_FW) into MatchMatchPlayer

!insert (i19_pRDS_GK, i19_mpPre_RDS_GK) into PlayerMatch
!insert (i19_pRDS_MID, i19_mpPre_RDS_MID) into PlayerMatch
!insert (i19_pRDS_FW, i19_mpPre_RDS_FW) into PlayerMatch
!insert (i19_pOKR_GK, i19_mpPre_OKR_GK) into PlayerMatch
!insert (i19_pOKR_MID, i19_mpPre_OKR_MID) into PlayerMatch
!insert (i19_pOKR_FW, i19_mpPre_OKR_FW) into PlayerMatch

!new MatchPlayerPosition('i19_mppPre_RDS_GK')
!i19_mppPre_RDS_GK.positionName := #GOALKEEPER
!i19_mppPre_RDS_GK.number := 1
!insert (i19_mpPre_RDS_GK, i19_mppPre_RDS_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i19_mppPre_RDS_MID')
!i19_mppPre_RDS_MID.positionName := #MIDFIELDER
!i19_mppPre_RDS_MID.number := 8
!insert (i19_mpPre_RDS_MID, i19_mppPre_RDS_MID) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i19_mppPre_RDS_FW')
!i19_mppPre_RDS_FW.positionName := #FORWARD
!i19_mppPre_RDS_FW.number := 9
!insert (i19_mpPre_RDS_FW, i19_mppPre_RDS_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i19_mppPre_OKR_GK')
!i19_mppPre_OKR_GK.positionName := #GOALKEEPER
!i19_mppPre_OKR_GK.number := 1
!insert (i19_mpPre_OKR_GK, i19_mppPre_OKR_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i19_mppPre_OKR_MID')
!i19_mppPre_OKR_MID.positionName := #MIDFIELDER
!i19_mppPre_OKR_MID.number := 6
!insert (i19_mpPre_OKR_MID, i19_mppPre_OKR_MID) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i19_mppPre_OKR_FW')
!i19_mppPre_OKR_FW.positionName := #FORWARD
!i19_mppPre_OKR_FW.number := 11
!insert (i19_mpPre_OKR_FW, i19_mppPre_OKR_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('i19_mpQF_SVG_GK')
!i19_mpQF_SVG_GK.booked := false
!i19_mpQF_SVG_GK.goals := 0
!i19_mpQF_SVG_GK.rating := 8

!new MatchPlayer('i19_mpQF_SVG_DEF')
!i19_mpQF_SVG_DEF.booked := true
!i19_mpQF_SVG_DEF.goals := 0
!i19_mpQF_SVG_DEF.rating := 7

!new MatchPlayer('i19_mpQF_SVG_FW')
!i19_mpQF_SVG_FW.booked := false
!i19_mpQF_SVG_FW.goals := 1
!i19_mpQF_SVG_FW.rating := 8

!new MatchPlayer('i19_mpQF_KPT_GK')
!i19_mpQF_KPT_GK.booked := false
!i19_mpQF_KPT_GK.goals := 0
!i19_mpQF_KPT_GK.rating := 7

!new MatchPlayer('i19_mpQF_KPT_MID')
!i19_mpQF_KPT_MID.booked := true
!i19_mpQF_KPT_MID.goals := 0
!i19_mpQF_KPT_MID.rating := 6

!new MatchPlayer('i19_mpQF_KPT_FW')
!i19_mpQF_KPT_FW.booked := false
!i19_mpQF_KPT_FW.goals := 0
!i19_mpQF_KPT_FW.rating := 6

!insert (i19_matchPlateQF, i19_mpQF_SVG_GK) into MatchMatchPlayer
!insert (i19_matchPlateQF, i19_mpQF_SVG_DEF) into MatchMatchPlayer
!insert (i19_matchPlateQF, i19_mpQF_SVG_FW) into MatchMatchPlayer
!insert (i19_matchPlateQF, i19_mpQF_KPT_GK) into MatchMatchPlayer
!insert (i19_matchPlateQF, i19_mpQF_KPT_MID) into MatchMatchPlayer
!insert (i19_matchPlateQF, i19_mpQF_KPT_FW) into MatchMatchPlayer

!insert (i19_pSVG_GK, i19_mpQF_SVG_GK) into PlayerMatch
!insert (i19_pSVG_DEF, i19_mpQF_SVG_DEF) into PlayerMatch
!insert (i19_pSVG_FW, i19_mpQF_SVG_FW) into PlayerMatch
!insert (i19_pKPT_GK, i19_mpQF_KPT_GK) into PlayerMatch
!insert (i19_pKPT_MID, i19_mpQF_KPT_MID) into PlayerMatch
!insert (i19_pKPT_FW, i19_mpQF_KPT_FW) into PlayerMatch

!new MatchPlayerPosition('i19_mppQF_SVG_GK')
!i19_mppQF_SVG_GK.positionName := #GOALKEEPER
!i19_mppQF_SVG_GK.number := 1
!insert (i19_mpQF_SVG_GK, i19_mppQF_SVG_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i19_mppQF_SVG_DEF')
!i19_mppQF_SVG_DEF.positionName := #DEFENDER
!i19_mppQF_SVG_DEF.number := 5
!insert (i19_mpQF_SVG_DEF, i19_mppQF_SVG_DEF) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i19_mppQF_SVG_FW')
!i19_mppQF_SVG_FW.positionName := #FORWARD
!i19_mppQF_SVG_FW.number := 9
!insert (i19_mpQF_SVG_FW, i19_mppQF_SVG_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i19_mppQF_KPT_GK')
!i19_mppQF_KPT_GK.positionName := #GOALKEEPER
!i19_mppQF_KPT_GK.number := 1
!insert (i19_mpQF_KPT_GK, i19_mppQF_KPT_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i19_mppQF_KPT_MID')
!i19_mppQF_KPT_MID.positionName := #MIDFIELDER
!i19_mppQF_KPT_MID.number := 8
!insert (i19_mpQF_KPT_MID, i19_mppQF_KPT_MID) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i19_mppQF_KPT_FW')
!i19_mppQF_KPT_FW.positionName := #FORWARD
!i19_mppQF_KPT_FW.number := 11
!insert (i19_mpQF_KPT_FW, i19_mppQF_KPT_FW) into MatchPlayerMatchPlayerPosition
```
## Generation 28 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 511 | 0.00% |
| Multiplicities Errors | 0 | 123 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 44 | 0.00% |

# Generation 29
```
!new Club('i20_clubMNT')
!i20_clubMNT.name := 'Montclair FC'
!i20_clubMNT.homeGround := 'Montclair Athletic Centre'
!i20_clubMNT.chairman := 'Sophie Langford'

!new Club('i20_clubFRP')
!i20_clubFRP.name := 'Ferrypoint United'
!i20_clubFRP.homeGround := 'Ferrypoint Riverside Ground'
!i20_clubFRP.chairman := 'Hector Salazar'

!new Club('i20_clubWLD')
!i20_clubWLD.name := 'Woodlane AFC'
!i20_clubWLD.homeGround := 'Woodlane Common'
!i20_clubWLD.chairman := 'Aisha Karim'

!new Team('i20_teamMNT_1')
!i20_teamMNT_1.name := 'Montclair First XI'

!new Team('i20_teamFRP_1')
!i20_teamFRP_1.name := 'Ferrypoint First XI'

!new Team('i20_teamWLD_1')
!i20_teamWLD_1.name := 'Woodlane First XI'

!insert (i20_clubMNT, i20_teamMNT_1) into ClubTeam
!insert (i20_clubFRP, i20_teamFRP_1) into ClubTeam
!insert (i20_clubWLD, i20_teamWLD_1) into ClubTeam

!new Competition('i20_compCupFinal')
!i20_compCupFinal.name := 'Civic Cup Final'
!i20_compCupFinal.type := 'Cup'

!new TrainingSession('i20_tsMNT_rehab')
!i20_tsMNT_rehab.date := '2027-10-06'
!i20_tsMNT_rehab.location := 'Montclair Athletic Centre - Physio Suite'
!i20_tsMNT_rehab.purpose := 'Rehab: return-to-running and mobility'

!new TrainingSession('i20_tsMNT_tactical')
!i20_tsMNT_tactical.date := '2027-10-07'
!i20_tsMNT_tactical.location := 'Montclair Athletic Centre - Pitch 1'
!i20_tsMNT_tactical.purpose := 'Defensive line coordination and offside trap'

!new TrainingSession('i20_tsFRP_finishing')
!i20_tsFRP_finishing.date := '2027-10-07'
!i20_tsFRP_finishing.location := 'Ferrypoint Riverside Ground - Main Pitch'
!i20_tsFRP_finishing.purpose := 'Final third patterns and finishing under pressure'

!new TrainingSession('i20_tsWLD_setpieces')
!i20_tsWLD_setpieces.date := '2027-10-08'
!i20_tsWLD_setpieces.location := 'Woodlane Common - Pitch A'
!i20_tsWLD_setpieces.purpose := 'Set pieces: defending corners and attacking free kicks'

!insert (i20_teamMNT_1, i20_tsMNT_rehab) into TeamTraining
!insert (i20_teamMNT_1, i20_tsMNT_tactical) into TeamTraining
!insert (i20_teamFRP_1, i20_tsFRP_finishing) into TeamTraining
!insert (i20_teamWLD_1, i20_tsWLD_setpieces) into TeamTraining

!new TrainingNotes('i20_tnMNT_rehab_1')
!i20_tnMNT_rehab_1.note := 'Good compliance; keep intensity moderate and monitor knee response 24h after session.'
!i20_tnMNT_rehab_1.date := '2027-10-06'
!insert (i20_tsMNT_rehab, i20_tnMNT_rehab_1) into TrainingTrainingNotes

!new TrainingNotes('i20_tnMNT_tac_1')
!i20_tnMNT_tac_1.note := 'Line moved well as a unit; centre backs must communicate earlier when stepping up.'
!i20_tnMNT_tac_1.date := '2027-10-07'
!insert (i20_tsMNT_tactical, i20_tnMNT_tac_1) into TrainingTrainingNotes

!new TrainingNotes('i20_tnMNT_tac_2')
!i20_tnMNT_tac_2.note := 'Offside trap improved; avoid stepping when ball carrier has time and no pressure.'
!i20_tnMNT_tac_2.date := '2027-10-07'
!insert (i20_tsMNT_tactical, i20_tnMNT_tac_2) into TrainingTrainingNotes

!new TrainingNotes('i20_tnFRP_fin_1')
!i20_tnFRP_fin_1.note := 'Created multiple cut-back chances; finishing with weaker foot needs work.'
!i20_tnFRP_fin_1.date := '2027-10-07'
!insert (i20_tsFRP_finishing, i20_tnFRP_fin_1) into TrainingTrainingNotes

!new TrainingNotes('i20_tnWLD_sp_1')
!i20_tnWLD_sp_1.note := 'Set-piece roles clear; second balls still not attacked aggressively enough.'
!i20_tnWLD_sp_1.date := '2027-10-08'
!insert (i20_tsWLD_setpieces, i20_tnWLD_sp_1) into TrainingTrainingNotes

!new Player('i20_pMNT_GK')
!i20_pMNT_GK.name := 'Harvey Quinn'
!i20_pMNT_GK.age := 35
!i20_pMNT_GK.bestFoot := #RIGHT
!i20_pMNT_GK.phoneNumber := '+44 7700 410101'

!new Player('i20_pMNT_CB')
!i20_pMNT_CB.name := 'Nicolas Arendt'
!i20_pMNT_CB.age := 28
!i20_pMNT_CB.bestFoot := #BOTH
!i20_pMNT_CB.phoneNumber := '+44 7700 410102'

!new Player('i20_pMNT_MID')
!i20_pMNT_MID.name := 'Bilal Hamdi'
!i20_pMNT_MID.age := 26
!i20_pMNT_MID.bestFoot := #LEFT
!i20_pMNT_MID.phoneNumber := '+44 7700 410103'

!new Player('i20_pMNT_FW')
!i20_pMNT_FW.name := 'Kieran Webb'
!i20_pMNT_FW.age := 24
!i20_pMNT_FW.bestFoot := #RIGHT
!i20_pMNT_FW.phoneNumber := '+44 7700 410104'

!new Player('i20_pFRP_GK')
!i20_pFRP_GK.name := 'Mateusz Lewand'
!i20_pFRP_GK.age := 30
!i20_pFRP_GK.bestFoot := #LEFT
!i20_pFRP_GK.phoneNumber := '+44 7700 420101'

!new Player('i20_pFRP_DEF')
!i20_pFRP_DEF.name := 'Rory Chapman'
!i20_pFRP_DEF.age := 27
!i20_pFRP_DEF.bestFoot := #RIGHT
!i20_pFRP_DEF.phoneNumber := '+44 7700 420102'

!new Player('i20_pFRP_MID')
!i20_pFRP_MID.name := 'Yassin Bouazza'
!i20_pFRP_MID.age := 25
!i20_pFRP_MID.bestFoot := #BOTH
!i20_pFRP_MID.phoneNumber := '+44 7700 420103'

!new Player('i20_pFRP_FW')
!i20_pFRP_FW.name := 'Sergio Valdes'
!i20_pFRP_FW.age := 23
!i20_pFRP_FW.bestFoot := #RIGHT
!i20_pFRP_FW.phoneNumber := '+44 7700 420104'

!new Player('i20_pWLD_MID')
!i20_pWLD_MID.name := 'Levi Stanton'
!i20_pWLD_MID.age := 29
!i20_pWLD_MID.bestFoot := #RIGHT
!i20_pWLD_MID.phoneNumber := '+44 7700 430101'

!new Player('i20_pWLD_FW')
!i20_pWLD_FW.name := 'Anwar Idris'
!i20_pWLD_FW.age := 21
!i20_pWLD_FW.bestFoot := #LEFT
!i20_pWLD_FW.phoneNumber := '+44 7700 430102'

!insert (i20_teamMNT_1, i20_pMNT_GK) into TeamPlayer
!insert (i20_teamMNT_1, i20_pMNT_CB) into TeamPlayer
!insert (i20_teamMNT_1, i20_pMNT_MID) into TeamPlayer
!insert (i20_teamMNT_1, i20_pMNT_FW) into TeamPlayer

!insert (i20_teamFRP_1, i20_pFRP_GK) into TeamPlayer
!insert (i20_teamFRP_1, i20_pFRP_DEF) into TeamPlayer
!insert (i20_teamFRP_1, i20_pFRP_MID) into TeamPlayer
!insert (i20_teamFRP_1, i20_pFRP_FW) into TeamPlayer

!insert (i20_teamWLD_1, i20_pWLD_MID) into TeamPlayer
!insert (i20_teamWLD_1, i20_pWLD_FW) into TeamPlayer

!new Position('i20_posMNT_GK')
!i20_posMNT_GK.positionName := #GOALKEEPER
!insert (i20_pMNT_GK, i20_posMNT_GK) into PlayerPositions

!new Position('i20_posMNT_CB1')
!i20_posMNT_CB1.positionName := #DEFENDER
!insert (i20_pMNT_CB, i20_posMNT_CB1) into PlayerPositions

!new Position('i20_posMNT_CB2')
!i20_posMNT_CB2.positionName := #MIDFIELDER
!insert (i20_pMNT_CB, i20_posMNT_CB2) into PlayerPositions

!new Position('i20_posMNT_MID')
!i20_posMNT_MID.positionName := #MIDFIELDER
!insert (i20_pMNT_MID, i20_posMNT_MID) into PlayerPositions

!new Position('i20_posMNT_FW')
!i20_posMNT_FW.positionName := #FORWARD
!insert (i20_pMNT_FW, i20_posMNT_FW) into PlayerPositions

!new Position('i20_posFRP_GK')
!i20_posFRP_GK.positionName := #GOALKEEPER
!insert (i20_pFRP_GK, i20_posFRP_GK) into PlayerPositions

!new Position('i20_posFRP_DEF')
!i20_posFRP_DEF.positionName := #DEFENDER
!insert (i20_pFRP_DEF, i20_posFRP_DEF) into PlayerPositions

!new Position('i20_posFRP_MID')
!i20_posFRP_MID.positionName := #MIDFIELDER
!insert (i20_pFRP_MID, i20_posFRP_MID) into PlayerPositions

!new Position('i20_posFRP_FW')
!i20_posFRP_FW.positionName := #FORWARD
!insert (i20_pFRP_FW, i20_posFRP_FW) into PlayerPositions

!new Position('i20_posWLD_MID')
!i20_posWLD_MID.positionName := #MIDFIELDER
!insert (i20_pWLD_MID, i20_posWLD_MID) into PlayerPositions

!new Position('i20_posWLD_FW1')
!i20_posWLD_FW1.positionName := #FORWARD
!insert (i20_pWLD_FW, i20_posWLD_FW1) into PlayerPositions

!new Position('i20_posWLD_FW2')
!i20_posWLD_FW2.positionName := #MIDFIELDER
!insert (i20_pWLD_FW, i20_posWLD_FW2) into PlayerPositions

!new TrainingObjective('i20_objMNT_GK_1')
!i20_objMNT_GK_1.areaToImprove := 'Commanding the six-yard box under pressure'
!i20_objMNT_GK_1.startDate := '2027-10-01'
!i20_objMNT_GK_1.endDate := '2027-11-01'
!i20_objMNT_GK_1.success := false
!insert (i20_objMNT_GK_1, i20_pMNT_GK) into TrainingObjectivePlayer

!new TrainingObjective('i20_objMNT_CB_1')
!i20_objMNT_CB_1.areaToImprove := 'Earlier communication when stepping up as a line'
!i20_objMNT_CB_1.startDate := '2027-10-01'
!i20_objMNT_CB_1.endDate := '2027-11-01'
!i20_objMNT_CB_1.success := false
!insert (i20_objMNT_CB_1, i20_pMNT_CB) into TrainingObjectivePlayer

!new TrainingObjective('i20_objMNT_MID_1')
!i20_objMNT_MID_1.areaToImprove := 'Receiving on the half-turn under pressure'
!i20_objMNT_MID_1.startDate := '2027-10-01'
!i20_objMNT_MID_1.endDate := '2027-11-01'
!i20_objMNT_MID_1.success := true
!insert (i20_objMNT_MID_1, i20_pMNT_MID) into TrainingObjectivePlayer

!new TrainingObjective('i20_objMNT_FW_1')
!i20_objMNT_FW_1.areaToImprove := 'First-time finishing from cut-backs'
!i20_objMNT_FW_1.startDate := '2027-10-01'
!i20_objMNT_FW_1.endDate := '2027-11-01'
!i20_objMNT_FW_1.success := false
!insert (i20_objMNT_FW_1, i20_pMNT_FW) into TrainingObjectivePlayer

!new TrainingObjective('i20_objFRP_GK_1')
!i20_objFRP_GK_1.areaToImprove := 'Distribution speed after saves'
!i20_objFRP_GK_1.startDate := '2027-10-01'
!i20_objFRP_GK_1.endDate := '2027-11-01'
!i20_objFRP_GK_1.success := true
!insert (i20_objFRP_GK_1, i20_pFRP_GK) into TrainingObjectivePlayer

!new TrainingObjective('i20_objFRP_DEF_1')
!i20_objFRP_DEF_1.areaToImprove := 'Back-post marking on crosses'
!i20_objFRP_DEF_1.startDate := '2027-10-01'
!i20_objFRP_DEF_1.endDate := '2027-11-01'
!i20_objFRP_DEF_1.success := false
!insert (i20_objFRP_DEF_1, i20_pFRP_DEF) into TrainingObjectivePlayer

!new TrainingObjective('i20_objFRP_MID_1')
!i20_objFRP_MID_1.areaToImprove := 'One-touch play to escape pressure'
!i20_objFRP_MID_1.startDate := '2027-10-01'
!i20_objFRP_MID_1.endDate := '2027-11-01'
!i20_objFRP_MID_1.success := true
!insert (i20_objFRP_MID_1, i20_pFRP_MID) into TrainingObjectivePlayer

!new TrainingObjective('i20_objFRP_FW_1')
!i20_objFRP_FW_1.areaToImprove := 'Finishing with weaker foot from central areas'
!i20_objFRP_FW_1.startDate := '2027-10-01'
!i20_objFRP_FW_1.endDate := '2027-11-01'
!i20_objFRP_FW_1.success := false
!insert (i20_objFRP_FW_1, i20_pFRP_FW) into TrainingObjectivePlayer

!new TrainingObjective('i20_objWLD_MID_1')
!i20_objWLD_MID_1.areaToImprove := 'Defending second balls after set pieces'
!i20_objWLD_MID_1.startDate := '2027-10-01'
!i20_objWLD_MID_1.endDate := '2027-11-01'
!i20_objWLD_MID_1.success := false
!insert (i20_objWLD_MID_1, i20_pWLD_MID) into TrainingObjectivePlayer

!new TrainingObjective('i20_objWLD_FW_1')
!i20_objWLD_FW_1.areaToImprove := 'Timing curved runs to stay onside'
!i20_objWLD_FW_1.startDate := '2027-10-01'
!i20_objWLD_FW_1.endDate := '2027-11-01'
!i20_objWLD_FW_1.success := false
!insert (i20_objWLD_FW_1, i20_pWLD_FW) into TrainingObjectivePlayer

!new PlayerNotes('i20_pnMNT1')
!i20_pnMNT1.note := 'Very composed; needs to command the box louder during defensive corners.'
!i20_pnMNT1.date := '2027-10-07'
!insert (i20_pMNT_GK, i20_pnMNT1) into PlayerPlayerNotes

!new PlayerNotes('i20_pnFRP1')
!i20_pnFRP1.note := 'Good engine and presses well; improve decision-making when isolated.'
!i20_pnFRP1.date := '2027-10-07'
!insert (i20_pFRP_MID, i20_pnFRP1) into PlayerPlayerNotes

!new TrainingFailedToAttend('i20_tfa1')
!i20_tfa1.reason := 'Work commitment'
!insert (i20_tsWLD_setpieces, i20_tfa1) into TrainingFailded
!insert (i20_tfa1, i20_pWLD_MID) into FailedPlayer

!new TrainingFailedToAttend('i20_tfa2')
!i20_tfa2.reason := 'Minor hamstring tightness'
!insert (i20_tsMNT_tactical, i20_tfa2) into TrainingFailded
!insert (i20_tfa2, i20_pMNT_FW) into FailedPlayer

!new Match('i20_matchFinal')
!i20_matchFinal.date := '2027-10-12'
!i20_matchFinal.homeAway := true

!insert (i20_compCupFinal, i20_matchFinal) into CompetitionMatch
!insert (i20_teamMNT_1, i20_matchFinal) into LocalMatch
!insert (i20_teamFRP_1, i20_matchFinal) into VisitorMatch

!new MatchReport('i20_mrFinal')
!i20_mrFinal.duration := 120
!i20_mrFinal.scoreVisitor := 1
!i20_mrFinal.scoreLocal := 2
!insert (i20_matchFinal, i20_mrFinal) into MatchMatchReport

!new MatchEvent('i20_evFinal_goal1')
!i20_evFinal_goal1.eventType := #GOAL
!i20_evFinal_goal1.time := 24
!insert (i20_matchFinal, i20_evFinal_goal1) into MatchMatchEvent

!new MatchEvent('i20_evFinal_goal2')
!i20_evFinal_goal2.eventType := #GOAL
!i20_evFinal_goal2.time := 67
!insert (i20_matchFinal, i20_evFinal_goal2) into MatchMatchEvent

!new MatchEvent('i20_evFinal_pen')
!i20_evFinal_pen.eventType := #PENALTY
!i20_evFinal_pen.time := 92
!insert (i20_matchFinal, i20_evFinal_pen) into MatchMatchEvent

!new MatchEvent('i20_evFinal_goal3')
!i20_evFinal_goal3.eventType := #GOAL
!i20_evFinal_goal3.time := 108
!insert (i20_matchFinal, i20_evFinal_goal3) into MatchMatchEvent

!new MatchEvent('i20_evFinal_foul1')
!i20_evFinal_foul1.eventType := #FOUL
!i20_evFinal_foul1.time := 53
!insert (i20_matchFinal, i20_evFinal_foul1) into MatchMatchEvent

!new MatchEvent('i20_evFinal_corner1')
!i20_evFinal_corner1.eventType := #CORNER
!i20_evFinal_corner1.time := 79
!insert (i20_matchFinal, i20_evFinal_corner1) into MatchMatchEvent

!new MatchEvent('i20_evFinal_off1')
!i20_evFinal_off1.eventType := #OFFSIDE
!i20_evFinal_off1.time := 115
!insert (i20_matchFinal, i20_evFinal_off1) into MatchMatchEvent

!new MatchNote('i20_mnFinal')
!i20_mnFinal.note := 'Final went to extra time; Montclair won with a late break after a missed penalty early in extra time.'
!i20_mnFinal.date := '2027-10-12'
!insert (i20_matchFinal, i20_mnFinal) into MatchMatchNote

!new MatchPlayer('i20_mpF_MNT_GK')
!i20_mpF_MNT_GK.booked := false
!i20_mpF_MNT_GK.goals := 0
!i20_mpF_MNT_GK.rating := 8

!new MatchPlayer('i20_mpF_MNT_CB')
!i20_mpF_MNT_CB.booked := true
!i20_mpF_MNT_CB.goals := 0
!i20_mpF_MNT_CB.rating := 7

!new MatchPlayer('i20_mpF_MNT_MID')
!i20_mpF_MNT_MID.booked := false
!i20_mpF_MNT_MID.goals := 1
!i20_mpF_MNT_MID.rating := 8

!new MatchPlayer('i20_mpF_MNT_FW')
!i20_mpF_MNT_FW.booked := false
!i20_mpF_MNT_FW.goals := 1
!i20_mpF_MNT_FW.rating := 7

!new MatchPlayer('i20_mpF_FRP_GK')
!i20_mpF_FRP_GK.booked := false
!i20_mpF_FRP_GK.goals := 0
!i20_mpF_FRP_GK.rating := 7

!new MatchPlayer('i20_mpF_FRP_DEF')
!i20_mpF_FRP_DEF.booked := true
!i20_mpF_FRP_DEF.goals := 0
!i20_mpF_FRP_DEF.rating := 6

!new MatchPlayer('i20_mpF_FRP_MID')
!i20_mpF_FRP_MID.booked := false
!i20_mpF_FRP_MID.goals := 0
!i20_mpF_FRP_MID.rating := 7

!new MatchPlayer('i20_mpF_FRP_FW')
!i20_mpF_FRP_FW.booked := false
!i20_mpF_FRP_FW.goals := 1
!i20_mpF_FRP_FW.rating := 7

!insert (i20_matchFinal, i20_mpF_MNT_GK) into MatchMatchPlayer
!insert (i20_matchFinal, i20_mpF_MNT_CB) into MatchMatchPlayer
!insert (i20_matchFinal, i20_mpF_MNT_MID) into MatchMatchPlayer
!insert (i20_matchFinal, i20_mpF_MNT_FW) into MatchMatchPlayer
!insert (i20_matchFinal, i20_mpF_FRP_GK) into MatchMatchPlayer
!insert (i20_matchFinal, i20_mpF_FRP_DEF) into MatchMatchPlayer
!insert (i20_matchFinal, i20_mpF_FRP_MID) into MatchMatchPlayer
!insert (i20_matchFinal, i20_mpF_FRP_FW) into MatchMatchPlayer

!insert (i20_pMNT_GK, i20_mpF_MNT_GK) into PlayerMatch
!insert (i20_pMNT_CB, i20_mpF_MNT_CB) into PlayerMatch
!insert (i20_pMNT_MID, i20_mpF_MNT_MID) into PlayerMatch
!insert (i20_pMNT_FW, i20_mpF_MNT_FW) into PlayerMatch
!insert (i20_pFRP_GK, i20_mpF_FRP_GK) into PlayerMatch
!insert (i20_pFRP_DEF, i20_mpF_FRP_DEF) into PlayerMatch
!insert (i20_pFRP_MID, i20_mpF_FRP_MID) into PlayerMatch
!insert (i20_pFRP_FW, i20_mpF_FRP_FW) into PlayerMatch

!new MatchPlayerPosition('i20_mppF_MNT_GK')
!i20_mppF_MNT_GK.positionName := #GOALKEEPER
!i20_mppF_MNT_GK.number := 1
!insert (i20_mpF_MNT_GK, i20_mppF_MNT_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i20_mppF_MNT_CB')
!i20_mppF_MNT_CB.positionName := #DEFENDER
!i20_mppF_MNT_CB.number := 5
!insert (i20_mpF_MNT_CB, i20_mppF_MNT_CB) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i20_mppF_MNT_MID')
!i20_mppF_MNT_MID.positionName := #MIDFIELDER
!i20_mppF_MNT_MID.number := 8
!insert (i20_mpF_MNT_MID, i20_mppF_MNT_MID) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i20_mppF_MNT_FW')
!i20_mppF_MNT_FW.positionName := #FORWARD
!i20_mppF_MNT_FW.number := 9
!insert (i20_mpF_MNT_FW, i20_mppF_MNT_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i20_mppF_FRP_GK')
!i20_mppF_FRP_GK.positionName := #GOALKEEPER
!i20_mppF_FRP_GK.number := 1
!insert (i20_mpF_FRP_GK, i20_mppF_FRP_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i20_mppF_FRP_DEF')
!i20_mppF_FRP_DEF.positionName := #DEFENDER
!i20_mppF_FRP_DEF.number := 4
!insert (i20_mpF_FRP_DEF, i20_mppF_FRP_DEF) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i20_mppF_FRP_MID')
!i20_mppF_FRP_MID.positionName := #MIDFIELDER
!i20_mppF_FRP_MID.number := 6
!insert (i20_mpF_FRP_MID, i20_mppF_FRP_MID) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i20_mppF_FRP_FW')
!i20_mppF_FRP_FW.positionName := #FORWARD
!i20_mppF_FRP_FW.number := 11
!insert (i20_mpF_FRP_FW, i20_mppF_FRP_FW) into MatchPlayerMatchPlayerPosition
```
## Generation 29 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 359 | 0.00% |
| Multiplicities Errors | 0 | 86 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 33 | 0.00% |

# Generation 30
```
!new Club('i21_clubNBR')
!i21_clubNBR.name := 'Northbridge FC'
!i21_clubNBR.homeGround := 'Northbridge Athletic Ground'
!i21_clubNBR.chairman := 'Clive Thornton'

!new Club('i21_clubEGC')
!i21_clubEGC.name := 'Eastgate City'
!i21_clubEGC.homeGround := 'Eastgate Stadium'
!i21_clubEGC.chairman := 'Mei Collins'

!new Club('i21_clubCLF')
!i21_clubCLF.name := 'Cliffside Rovers'
!i21_clubCLF.homeGround := 'Cliffside Park'
!i21_clubCLF.chairman := 'Rafael Ortega'

!new Club('i21_clubPWL')
!i21_clubPWL.name := 'Pewley Athletic'
!i21_clubPWL.homeGround := 'Pewley Recreation Ground'
!i21_clubPWL.chairman := 'Hannah Sissons'

!new Team('i21_teamNBR_1')
!i21_teamNBR_1.name := 'Northbridge First XI'

!new Team('i21_teamEGC_1')
!i21_teamEGC_1.name := 'Eastgate City First XI'

!new Team('i21_teamCLF_1')
!i21_teamCLF_1.name := 'Cliffside First XI'

!new Team('i21_teamPWL_1')
!i21_teamPWL_1.name := 'Pewley First XI'

!insert (i21_clubNBR, i21_teamNBR_1) into ClubTeam
!insert (i21_clubEGC, i21_teamEGC_1) into ClubTeam
!insert (i21_clubCLF, i21_teamCLF_1) into ClubTeam
!insert (i21_clubPWL, i21_teamPWL_1) into ClubTeam

!new Competition('i21_compAutumnLeague')
!i21_compAutumnLeague.name := 'Autumn District League'
!i21_compAutumnLeague.type := 'League'

!new TrainingSession('i21_tsNBR_1')
!i21_tsNBR_1.date := '2027-11-03'
!i21_tsNBR_1.location := 'Northbridge Athletic Ground - Pitch 1'
!i21_tsNBR_1.purpose := 'Build-up under pressure and switching play'

!new TrainingSession('i21_tsNBR_2')
!i21_tsNBR_2.date := '2027-11-05'
!i21_tsNBR_2.location := 'Northbridge Athletic Ground - Gym'
!i21_tsNBR_2.purpose := 'Strength maintenance and injury prevention'

!new TrainingSession('i21_tsEGC_1')
!i21_tsEGC_1.date := '2027-11-04'
!i21_tsEGC_1.location := 'Eastgate Stadium - Training Pitch'
!i21_tsEGC_1.purpose := 'Mid-block organisation and counterattacks'

!new TrainingSession('i21_tsCLF_1')
!i21_tsCLF_1.date := '2027-11-04'
!i21_tsCLF_1.location := 'Cliffside Park - Pitch A'
!i21_tsCLF_1.purpose := 'Attacking set pieces and second phase'

!new TrainingSession('i21_tsPWL_1')
!i21_tsPWL_1.date := '2027-11-05'
!i21_tsPWL_1.location := 'Pewley Recreation Ground - Main Pitch'
!i21_tsPWL_1.purpose := 'Defending transitions and recovery runs'

!insert (i21_teamNBR_1, i21_tsNBR_1) into TeamTraining
!insert (i21_teamNBR_1, i21_tsNBR_2) into TeamTraining
!insert (i21_teamEGC_1, i21_tsEGC_1) into TeamTraining
!insert (i21_teamCLF_1, i21_tsCLF_1) into TeamTraining
!insert (i21_teamPWL_1, i21_tsPWL_1) into TeamTraining

!new TrainingNotes('i21_tnNBR_1a')
!i21_tnNBR_1a.note := 'Switches to the weak side were effective; improve timing of fullback overlaps.'
!i21_tnNBR_1a.date := '2027-11-03'
!insert (i21_tsNBR_1, i21_tnNBR_1a) into TrainingTrainingNotes

!new TrainingNotes('i21_tnNBR_2a')
!i21_tnNBR_2a.note := 'Gym session completed; keep sprint volume light following day.'
!i21_tnNBR_2a.date := '2027-11-05'
!insert (i21_tsNBR_2, i21_tnNBR_2a) into TrainingTrainingNotes

!new TrainingNotes('i21_tnEGC_1a')
!i21_tnEGC_1a.note := 'Block stayed compact; first pass after regain still too slow.'
!i21_tnEGC_1a.date := '2027-11-04'
!insert (i21_tsEGC_1, i21_tnEGC_1a) into TrainingTrainingNotes

!new TrainingNotes('i21_tnCLF_1a')
!i21_tnCLF_1a.note := 'Set-piece roles clear; improve reactions to second balls after clearances.'
!i21_tnCLF_1a.date := '2027-11-04'
!insert (i21_tsCLF_1, i21_tnCLF_1a) into TrainingTrainingNotes

!new TrainingNotes('i21_tnPWL_1a')
!i21_tnPWL_1a.note := 'Recovery runs improved; avoid needless fouls when chasing back.'
!i21_tnPWL_1a.date := '2027-11-05'
!insert (i21_tsPWL_1, i21_tnPWL_1a) into TrainingTrainingNotes

!new Player('i21_pNBR_GK')
!i21_pNBR_GK.name := 'Sean McKay'
!i21_pNBR_GK.age := 33
!i21_pNBR_GK.bestFoot := #RIGHT
!i21_pNBR_GK.phoneNumber := '+44 7700 910101'

!new Player('i21_pNBR_MID')
!i21_pNBR_MID.name := 'Tomasz Wilk'
!i21_pNBR_MID.age := 25
!i21_pNBR_MID.bestFoot := #BOTH
!i21_pNBR_MID.phoneNumber := '+44 7700 910102'

!new Player('i21_pNBR_FW')
!i21_pNBR_FW.name := 'Eli Grant'
!i21_pNBR_FW.age := 22
!i21_pNBR_FW.bestFoot := #LEFT
!i21_pNBR_FW.phoneNumber := '+44 7700 910103'

!new Player('i21_pEGC_GK')
!i21_pEGC_GK.name := 'Marek Urban'
!i21_pEGC_GK.age := 29
!i21_pEGC_GK.bestFoot := #LEFT
!i21_pEGC_GK.phoneNumber := '+44 7700 920101'

!new Player('i21_pEGC_DEF')
!i21_pEGC_DEF.name := 'Lewis Carter'
!i21_pEGC_DEF.age := 28
!i21_pEGC_DEF.bestFoot := #RIGHT
!i21_pEGC_DEF.phoneNumber := '+44 7700 920102'

!new Player('i21_pEGC_FW')
!i21_pEGC_FW.name := 'Adil Saidi'
!i21_pEGC_FW.age := 24
!i21_pEGC_FW.bestFoot := #BOTH
!i21_pEGC_FW.phoneNumber := '+44 7700 920103'

!new Player('i21_pCLF_MID')
!i21_pCLF_MID.name := 'Giulio Riva'
!i21_pCLF_MID.age := 26
!i21_pCLF_MID.bestFoot := #RIGHT
!i21_pCLF_MID.phoneNumber := '+44 7700 930101'

!new Player('i21_pCLF_FW')
!i21_pCLF_FW.name := 'Noah Bennett'
!i21_pCLF_FW.age := 23
!i21_pCLF_FW.bestFoot := #LEFT
!i21_pCLF_FW.phoneNumber := '+44 7700 930102'

!new Player('i21_pPWL_DEF')
!i21_pPWL_DEF.name := 'Sandro Costa'
!i21_pPWL_DEF.age := 27
!i21_pPWL_DEF.bestFoot := #BOTH
!i21_pPWL_DEF.phoneNumber := '+44 7700 940101'

!new Player('i21_pPWL_GK')
!i21_pPWL_GK.name := 'Aaron Dempsey'
!i21_pPWL_GK.age := 31
!i21_pPWL_GK.bestFoot := #RIGHT
!i21_pPWL_GK.phoneNumber := '+44 7700 940102'

!new Player('i21_pPWL_FW')
!i21_pPWL_FW.name := 'Kenji Watan'
!i21_pPWL_FW.age := 21
!i21_pPWL_FW.bestFoot := #LEFT
!i21_pPWL_FW.phoneNumber := '+44 7700 940103'

!insert (i21_teamNBR_1, i21_pNBR_GK) into TeamPlayer
!insert (i21_teamNBR_1, i21_pNBR_MID) into TeamPlayer
!insert (i21_teamNBR_1, i21_pNBR_FW) into TeamPlayer

!insert (i21_teamEGC_1, i21_pEGC_GK) into TeamPlayer
!insert (i21_teamEGC_1, i21_pEGC_DEF) into TeamPlayer
!insert (i21_teamEGC_1, i21_pEGC_FW) into TeamPlayer

!insert (i21_teamCLF_1, i21_pCLF_MID) into TeamPlayer
!insert (i21_teamCLF_1, i21_pCLF_FW) into TeamPlayer

!insert (i21_teamPWL_1, i21_pPWL_DEF) into TeamPlayer
!insert (i21_teamPWL_1, i21_pPWL_GK) into TeamPlayer
!insert (i21_teamPWL_1, i21_pPWL_FW) into TeamPlayer

!new Position('i21_posNBR_GK')
!i21_posNBR_GK.positionName := #GOALKEEPER
!insert (i21_pNBR_GK, i21_posNBR_GK) into PlayerPositions

!new Position('i21_posNBR_MID')
!i21_posNBR_MID.positionName := #MIDFIELDER
!insert (i21_pNBR_MID, i21_posNBR_MID) into PlayerPositions

!new Position('i21_posNBR_MID_alt')
!i21_posNBR_MID_alt.positionName := #DEFENDER
!insert (i21_pNBR_MID, i21_posNBR_MID_alt) into PlayerPositions

!new Position('i21_posNBR_FW')
!i21_posNBR_FW.positionName := #FORWARD
!insert (i21_pNBR_FW, i21_posNBR_FW) into PlayerPositions

!new Position('i21_posEGC_GK')
!i21_posEGC_GK.positionName := #GOALKEEPER
!insert (i21_pEGC_GK, i21_posEGC_GK) into PlayerPositions

!new Position('i21_posEGC_DEF')
!i21_posEGC_DEF.positionName := #DEFENDER
!insert (i21_pEGC_DEF, i21_posEGC_DEF) into PlayerPositions

!new Position('i21_posEGC_FW')
!i21_posEGC_FW.positionName := #FORWARD
!insert (i21_pEGC_FW, i21_posEGC_FW) into PlayerPositions

!new Position('i21_posEGC_FW_alt')
!i21_posEGC_FW_alt.positionName := #MIDFIELDER
!insert (i21_pEGC_FW, i21_posEGC_FW_alt) into PlayerPositions

!new Position('i21_posCLF_MID')
!i21_posCLF_MID.positionName := #MIDFIELDER
!insert (i21_pCLF_MID, i21_posCLF_MID) into PlayerPositions

!new Position('i21_posCLF_FW')
!i21_posCLF_FW.positionName := #FORWARD
!insert (i21_pCLF_FW, i21_posCLF_FW) into PlayerPositions

!new Position('i21_posPWL_DEF')
!i21_posPWL_DEF.positionName := #DEFENDER
!insert (i21_pPWL_DEF, i21_posPWL_DEF) into PlayerPositions

!new Position('i21_posPWL_DEF_alt')
!i21_posPWL_DEF_alt.positionName := #MIDFIELDER
!insert (i21_pPWL_DEF, i21_posPWL_DEF_alt) into PlayerPositions

!new Position('i21_posPWL_GK')
!i21_posPWL_GK.positionName := #GOALKEEPER
!insert (i21_pPWL_GK, i21_posPWL_GK) into PlayerPositions

!new Position('i21_posPWL_FW')
!i21_posPWL_FW.positionName := #FORWARD
!insert (i21_pPWL_FW, i21_posPWL_FW) into PlayerPositions

!new TrainingObjective('i21_objNBR_GK_1')
!i21_objNBR_GK_1.areaToImprove := 'Starting position on through balls'
!i21_objNBR_GK_1.startDate := '2027-11-01'
!i21_objNBR_GK_1.endDate := '2027-12-01'
!i21_objNBR_GK_1.success := false
!insert (i21_objNBR_GK_1, i21_pNBR_GK) into TrainingObjectivePlayer

!new TrainingObjective('i21_objNBR_MID_1')
!i21_objNBR_MID_1.areaToImprove := 'Switching play with fewer touches'
!i21_objNBR_MID_1.startDate := '2027-11-01'
!i21_objNBR_MID_1.endDate := '2027-12-01'
!i21_objNBR_MID_1.success := true
!insert (i21_objNBR_MID_1, i21_pNBR_MID) into TrainingObjectivePlayer

!new TrainingObjective('i21_objNBR_FW_1')
!i21_objNBR_FW_1.areaToImprove := 'First-time finishing from cut-backs'
!i21_objNBR_FW_1.startDate := '2027-11-01'
!i21_objNBR_FW_1.endDate := '2027-12-01'
!i21_objNBR_FW_1.success := false
!insert (i21_objNBR_FW_1, i21_pNBR_FW) into TrainingObjectivePlayer

!new TrainingObjective('i21_objEGC_GK_1')
!i21_objEGC_GK_1.areaToImprove := 'Distribution speed after saves'
!i21_objEGC_GK_1.startDate := '2027-11-01'
!i21_objEGC_GK_1.endDate := '2027-12-01'
!i21_objEGC_GK_1.success := true
!insert (i21_objEGC_GK_1, i21_pEGC_GK) into TrainingObjectivePlayer

!new TrainingObjective('i21_objEGC_DEF_1')
!i21_objEGC_DEF_1.areaToImprove := 'Back-post marking on crosses'
!i21_objEGC_DEF_1.startDate := '2027-11-01'
!i21_objEGC_DEF_1.endDate := '2027-12-01'
!i21_objEGC_DEF_1.success := false
!insert (i21_objEGC_DEF_1, i21_pEGC_DEF) into TrainingObjectivePlayer

!new TrainingObjective('i21_objEGC_FW_1')
!i21_objEGC_FW_1.areaToImprove := 'Timing curved runs to stay onside'
!i21_objEGC_FW_1.startDate := '2027-11-01'
!i21_objEGC_FW_1.endDate := '2027-12-01'
!i21_objEGC_FW_1.success := false
!insert (i21_objEGC_FW_1, i21_pEGC_FW) into TrainingObjectivePlayer

!new TrainingObjective('i21_objCLF_MID_1')
!i21_objCLF_MID_1.areaToImprove := 'Attacking second balls after set pieces'
!i21_objCLF_MID_1.startDate := '2027-11-01'
!i21_objCLF_MID_1.endDate := '2027-12-01'
!i21_objCLF_MID_1.success := true
!insert (i21_objCLF_MID_1, i21_pCLF_MID) into TrainingObjectivePlayer

!new TrainingObjective('i21_objCLF_FW_1')
!i21_objCLF_FW_1.areaToImprove := 'Finishing across the goalkeeper'
!i21_objCLF_FW_1.startDate := '2027-11-01'
!i21_objCLF_FW_1.endDate := '2027-12-01'
!i21_objCLF_FW_1.success := false
!insert (i21_objCLF_FW_1, i21_pCLF_FW) into TrainingObjectivePlayer

!new TrainingObjective('i21_objPWL_DEF_1')
!i21_objPWL_DEF_1.areaToImprove := 'Avoiding cheap fouls when recovering'
!i21_objPWL_DEF_1.startDate := '2027-11-01'
!i21_objPWL_DEF_1.endDate := '2027-12-01'
!i21_objPWL_DEF_1.success := true
!insert (i21_objPWL_DEF_1, i21_pPWL_DEF) into TrainingObjectivePlayer

!new TrainingObjective('i21_objPWL_GK_1')
!i21_objPWL_GK_1.areaToImprove := 'Handling shots through traffic'
!i21_objPWL_GK_1.startDate := '2027-11-01'
!i21_objPWL_GK_1.endDate := '2027-12-01'
!i21_objPWL_GK_1.success := false
!insert (i21_objPWL_GK_1, i21_pPWL_GK) into TrainingObjectivePlayer

!new TrainingObjective('i21_objPWL_FW_1')
!i21_objPWL_FW_1.areaToImprove := 'Hold-up play under contact'
!i21_objPWL_FW_1.startDate := '2027-11-01'
!i21_objPWL_FW_1.endDate := '2027-12-01'
!i21_objPWL_FW_1.success := false
!insert (i21_objPWL_FW_1, i21_pPWL_FW) into TrainingObjectivePlayer

!new PlayerNotes('i21_pnNBR_1')
!i21_pnNBR_1.note := 'Strong organiser; keep communication constant when defending set pieces.'
!i21_pnNBR_1.date := '2027-11-06'
!insert (i21_pNBR_GK, i21_pnNBR_1) into PlayerPlayerNotes

!new TrainingFailedToAttend('i21_tfa1')
!i21_tfa1.reason := 'Work shift overran'
!insert (i21_tsEGC_1, i21_tfa1) into TrainingFailded
!insert (i21_tfa1, i21_pEGC_DEF) into FailedPlayer

!new Match('i21_match1')
!i21_match1.date := '2027-11-10'
!i21_match1.homeAway := true

!new Match('i21_match2')
!i21_match2.date := '2027-11-11'
!i21_match2.homeAway := true

!insert (i21_compAutumnLeague, i21_match1) into CompetitionMatch
!insert (i21_compAutumnLeague, i21_match2) into CompetitionMatch

!insert (i21_teamNBR_1, i21_match1) into LocalMatch
!insert (i21_teamEGC_1, i21_match1) into VisitorMatch

!insert (i21_teamCLF_1, i21_match2) into LocalMatch
!insert (i21_teamPWL_1, i21_match2) into VisitorMatch

!new MatchReport('i21_mr1')
!i21_mr1.duration := 90
!i21_mr1.scoreVisitor := 0
!i21_mr1.scoreLocal := 2
!insert (i21_match1, i21_mr1) into MatchMatchReport

!new MatchReport('i21_mr2')
!i21_mr2.duration := 90
!i21_mr2.scoreVisitor := 1
!i21_mr2.scoreLocal := 1
!insert (i21_match2, i21_mr2) into MatchMatchReport

!new MatchEvent('i21_ev1_goal1')
!i21_ev1_goal1.eventType := #GOAL
!i21_ev1_goal1.time := 38
!insert (i21_match1, i21_ev1_goal1) into MatchMatchEvent

!new MatchEvent('i21_ev1_goal2')
!i21_ev1_goal2.eventType := #GOAL
!i21_ev1_goal2.time := 81
!insert (i21_match1, i21_ev1_goal2) into MatchMatchEvent

!new MatchEvent('i21_ev1_foul')
!i21_ev1_foul.eventType := #FOUL
!i21_ev1_foul.time := 27
!insert (i21_match1, i21_ev1_foul) into MatchMatchEvent

!new MatchEvent('i21_ev1_corner')
!i21_ev1_corner.eventType := #CORNER
!i21_ev1_corner.time := 66
!insert (i21_match1, i21_ev1_corner) into MatchMatchEvent

!new MatchNote('i21_mn1')
!i21_mn1.note := 'Northbridge controlled territory and scored late to seal the win; visitors struggled to progress the ball.'
!i21_mn1.date := '2027-11-10'
!insert (i21_match1, i21_mn1) into MatchMatchNote

!new MatchEvent('i21_ev2_goal1')
!i21_ev2_goal1.eventType := #GOAL
!i21_ev2_goal1.time := 14
!insert (i21_match2, i21_ev2_goal1) into MatchMatchEvent

!new MatchEvent('i21_ev2_goal2')
!i21_ev2_goal2.eventType := #GOAL
!i21_ev2_goal2.time := 71
!insert (i21_match2, i21_ev2_goal2) into MatchMatchEvent

!new MatchEvent('i21_ev2_off')
!i21_ev2_off.eventType := #OFFSIDE
!i21_ev2_off.time := 58
!insert (i21_match2, i21_ev2_off) into MatchMatchEvent

!new MatchEvent('i21_ev2_pen')
!i21_ev2_pen.eventType := #PENALTY
!i21_ev2_pen.time := 70
!insert (i21_match2, i21_ev2_pen) into MatchMatchEvent

!new MatchNote('i21_mn2')
!i21_mn2.note := 'Even match; Pewley equalised from the spot after sustained pressure in the second half.'
!i21_mn2.date := '2027-11-11'
!insert (i21_match2, i21_mn2) into MatchMatchNote

!new MatchPlayer('i21_mp1_NBR_GK')
!i21_mp1_NBR_GK.booked := false
!i21_mp1_NBR_GK.goals := 0
!i21_mp1_NBR_GK.rating := 7

!new MatchPlayer('i21_mp1_NBR_FW')
!i21_mp1_NBR_FW.booked := false
!i21_mp1_NBR_FW.goals := 1
!i21_mp1_NBR_FW.rating := 7

!new MatchPlayer('i21_mp1_EGC_GK')
!i21_mp1_EGC_GK.booked := false
!i21_mp1_EGC_GK.goals := 0
!i21_mp1_EGC_GK.rating := 6

!new MatchPlayer('i21_mp1_EGC_FW')
!i21_mp1_EGC_FW.booked := true
!i21_mp1_EGC_FW.goals := 0
!i21_mp1_EGC_FW.rating := 6

!insert (i21_match1, i21_mp1_NBR_GK) into MatchMatchPlayer
!insert (i21_match1, i21_mp1_NBR_FW) into MatchMatchPlayer
!insert (i21_match1, i21_mp1_EGC_GK) into MatchMatchPlayer
!insert (i21_match1, i21_mp1_EGC_FW) into MatchMatchPlayer

!insert (i21_pNBR_GK, i21_mp1_NBR_GK) into PlayerMatch
!insert (i21_pNBR_FW, i21_mp1_NBR_FW) into PlayerMatch
!insert (i21_pEGC_GK, i21_mp1_EGC_GK) into PlayerMatch
!insert (i21_pEGC_FW, i21_mp1_EGC_FW) into PlayerMatch

!new MatchPlayerPosition('i21_mpp1_NBR_GK')
!i21_mpp1_NBR_GK.positionName := #GOALKEEPER
!i21_mpp1_NBR_GK.number := 1
!insert (i21_mp1_NBR_GK, i21_mpp1_NBR_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i21_mpp1_NBR_FW')
!i21_mpp1_NBR_FW.positionName := #FORWARD
!i21_mpp1_NBR_FW.number := 9
!insert (i21_mp1_NBR_FW, i21_mpp1_NBR_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i21_mpp1_EGC_GK')
!i21_mpp1_EGC_GK.positionName := #GOALKEEPER
!i21_mpp1_EGC_GK.number := 1
!insert (i21_mp1_EGC_GK, i21_mpp1_EGC_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i21_mpp1_EGC_FW')
!i21_mpp1_EGC_FW.positionName := #FORWARD
!i21_mpp1_EGC_FW.number := 11
!insert (i21_mp1_EGC_FW, i21_mpp1_EGC_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayer('i21_mp2_CLF_MID')
!i21_mp2_CLF_MID.booked := false
!i21_mp2_CLF_MID.goals := 1
!i21_mp2_CLF_MID.rating := 8

!new MatchPlayer('i21_mp2_CLF_FW')
!i21_mp2_CLF_FW.booked := false
!i21_mp2_CLF_FW.goals := 0
!i21_mp2_CLF_FW.rating := 6

!new MatchPlayer('i21_mp2_PWL_GK')
!i21_mp2_PWL_GK.booked := false
!i21_mp2_PWL_GK.goals := 0
!i21_mp2_PWL_GK.rating := 7

!new MatchPlayer('i21_mp2_PWL_FW')
!i21_mp2_PWL_FW.booked := true
!i21_mp2_PWL_FW.goals := 1
!i21_mp2_PWL_FW.rating := 7

!insert (i21_match2, i21_mp2_CLF_MID) into MatchMatchPlayer
!insert (i21_match2, i21_mp2_CLF_FW) into MatchMatchPlayer
!insert (i21_match2, i21_mp2_PWL_GK) into MatchMatchPlayer
!insert (i21_match2, i21_mp2_PWL_FW) into MatchMatchPlayer

!insert (i21_pCLF_MID, i21_mp2_CLF_MID) into PlayerMatch
!insert (i21_pCLF_FW, i21_mp2_CLF_FW) into PlayerMatch
!insert (i21_pPWL_GK, i21_mp2_PWL_GK) into PlayerMatch
!insert (i21_pPWL_FW, i21_mp2_PWL_FW) into PlayerMatch

!new MatchPlayerPosition('i21_mpp2_CLF_MID')
!i21_mpp2_CLF_MID.positionName := #MIDFIELDER
!i21_mpp2_CLF_MID.number := 8
!insert (i21_mp2_CLF_MID, i21_mpp2_CLF_MID) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i21_mpp2_CLF_FW')
!i21_mpp2_CLF_FW.positionName := #FORWARD
!i21_mpp2_CLF_FW.number := 9
!insert (i21_mp2_CLF_FW, i21_mpp2_CLF_FW) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i21_mpp2_PWL_GK')
!i21_mpp2_PWL_GK.positionName := #GOALKEEPER
!i21_mpp2_PWL_GK.number := 1
!insert (i21_mp2_PWL_GK, i21_mpp2_PWL_GK) into MatchPlayerMatchPlayerPosition

!new MatchPlayerPosition('i21_mpp2_PWL_FW')
!i21_mpp2_PWL_FW.positionName := #FORWARD
!i21_mpp2_PWL_FW.number := 11
!insert (i21_mp2_PWL_FW, i21_mpp2_PWL_FW) into MatchPlayerMatchPlayerPosition
```
## Generation 30 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 400 | 0.00% |
| Multiplicities Errors | 0 | 95 | 0.00% |
| Invariants Errors | 0 | 4 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 37 | 0.00% |

# Summary for all generations
| Summary | Value | 
|---|---| 
| Model | GPT_5_2 | 
| Type | Simple | 
| System | football | 
| Number of generations | 30 | 

| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 11820 | 0.00% |
| Multiplicities Errors | 0 | 2880 | 0.00% |
| Invariants Errors | 0 | 120 | 0.00% |

| Football | Invalid | Total | Failure (%) | 
|---|---|---|---| 
| Dates | 0 | 1063 | 0.00% |

