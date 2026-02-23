# Generation 1
## Category baseline
```
!new StateMachine('sm_metroTicketKioskFlow')
!sm_metroTicketKioskFlow.name := 'metroTicketKioskFlow'

!new State('st_idle')
!st_idle.name := 'idle'

!new State('st_selectingTicket')
!st_selectingTicket.name := 'selectingTicket'

!new State('st_paying')
!st_paying.name := 'paying'

!new State('st_printingReceipt')
!st_printingReceipt.name := 'printingReceipt'

!insert (sm_metroTicketKioskFlow, st_idle) into StateMachineContainsStates
!insert (sm_metroTicketKioskFlow, st_selectingTicket) into StateMachineContainsStates
!insert (sm_metroTicketKioskFlow, st_paying) into StateMachineContainsStates
!insert (sm_metroTicketKioskFlow, st_printingReceipt) into StateMachineContainsStates

!insert (sm_metroTicketKioskFlow, st_idle) into StateMachineStartsStates

!new Transition('tr_beginSelection')
!tr_beginSelection.name := 'beginSelection'

!new Transition('tr_promptPayment')
!tr_promptPayment.name := 'promptPayment'

!new Transition('tr_issueTicket')
!tr_issueTicket.name := 'issueTicket'

!new Transition('tr_resetAfterPrint')
!tr_resetAfterPrint.name := 'resetAfterPrint'

!insert (sm_metroTicketKioskFlow, tr_beginSelection) into StateMachineContainsTransitions
!insert (sm_metroTicketKioskFlow, tr_promptPayment) into StateMachineContainsTransitions
!insert (sm_metroTicketKioskFlow, tr_issueTicket) into StateMachineContainsTransitions
!insert (sm_metroTicketKioskFlow, tr_resetAfterPrint) into StateMachineContainsTransitions

!insert (st_idle, tr_beginSelection) into StateTransition
!insert (tr_beginSelection, st_selectingTicket) into TransitionState

!insert (st_selectingTicket, tr_promptPayment) into StateTransition
!insert (tr_promptPayment, st_paying) into TransitionState

!insert (st_paying, tr_issueTicket) into StateTransition
!insert (tr_issueTicket, st_printingReceipt) into TransitionState

!insert (st_printingReceipt, tr_resetAfterPrint) into StateTransition
!insert (tr_resetAfterPrint, st_idle) into TransitionState

!new TimeEvent('te_t_beginSelection')
!te_t_beginSelection.time := 5
!insert (tr_beginSelection, te_t_beginSelection) into TransitionContainsEvents

!new TimeEvent('te_t_promptPayment')
!te_t_promptPayment.time := 30
!insert (tr_promptPayment, te_t_promptPayment) into TransitionContainsEvents

!new TimeEvent('te_t_issueTicket')
!te_t_issueTicket.time := 2
!insert (tr_issueTicket, te_t_issueTicket) into TransitionContainsEvents

!new TimeEvent('te_t_resetAfterPrint')
!te_t_resetAfterPrint.time := 10
!insert (tr_resetAfterPrint, te_t_resetAfterPrint) into TransitionContainsEvents
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 47 | 0.00% |
| Multiplicities Errors | 0 | 21 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

## Category boundary
```
!new StateMachine('sm_parisMetroTimer')
!sm_parisMetroTimer.name := 'parisMetroTimer'

!new State('st_depart')
!st_depart.name := 'départ'

!insert (sm_parisMetroTimer, st_depart) into StateMachineContainsStates
!insert (sm_parisMetroTimer, st_depart) into StateMachineStartsStates

!new Transition('tr_boucleAttente')
!tr_boucleAttente.name := 'boucleAttente'

!insert (sm_parisMetroTimer, tr_boucleAttente) into StateMachineContainsTransitions

!insert (st_depart, tr_boucleAttente) into StateTransition
!insert (tr_boucleAttente, st_depart) into TransitionState

!new TimeEvent('te_t1')
!te_t1.time := 1
!insert (tr_boucleAttente, te_t1) into TransitionContainsEvents
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 14 | 0.00% |
| Multiplicities Errors | 0 | 6 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

## Category complex
```
!new StateMachine('sm_tokyoMetroEscalatorSafetySM')
!sm_tokyoMetroEscalatorSafetySM.name := 'tokyoMetroEscalatorSafetySM'

!new State('st_tokyo_idle')
!st_tokyo_idle.name := 'idle'
!new State('st_tokyo_sensingLoad')
!st_tokyo_sensingLoad.name := 'sensingLoad'
!new State('st_tokyo_acceleratingUp')
!st_tokyo_acceleratingUp.name := 'acceleratingUp'
!new State('st_tokyo_acceleratingDown')
!st_tokyo_acceleratingDown.name := 'acceleratingDown'
!new State('st_tokyo_steadyUp')
!st_tokyo_steadyUp.name := 'steadyUp'
!new State('st_tokyo_steadyDown')
!st_tokyo_steadyDown.name := 'steadyDown'
!new State('st_tokyo_cooling')
!st_tokyo_cooling.name := 'cooling'
!new State('st_tokyo_emergencyStop')
!st_tokyo_emergencyStop.name := 'emergencyStop'
!new State('st_tokyo_maintenance')
!st_tokyo_maintenance.name := 'maintenance'

!insert (sm_tokyoMetroEscalatorSafetySM, st_tokyo_idle) into StateMachineContainsStates
!insert (sm_tokyoMetroEscalatorSafetySM, st_tokyo_sensingLoad) into StateMachineContainsStates
!insert (sm_tokyoMetroEscalatorSafetySM, st_tokyo_acceleratingUp) into StateMachineContainsStates
!insert (sm_tokyoMetroEscalatorSafetySM, st_tokyo_acceleratingDown) into StateMachineContainsStates
!insert (sm_tokyoMetroEscalatorSafetySM, st_tokyo_steadyUp) into StateMachineContainsStates
!insert (sm_tokyoMetroEscalatorSafetySM, st_tokyo_steadyDown) into StateMachineContainsStates
!insert (sm_tokyoMetroEscalatorSafetySM, st_tokyo_cooling) into StateMachineContainsStates
!insert (sm_tokyoMetroEscalatorSafetySM, st_tokyo_emergencyStop) into StateMachineContainsStates
!insert (sm_tokyoMetroEscalatorSafetySM, st_tokyo_maintenance) into StateMachineContainsStates

!insert (sm_tokyoMetroEscalatorSafetySM, st_tokyo_idle) into StateMachineStartsStates

!new Transition('tr_tokyo_pollSensors')
!tr_tokyo_pollSensors.name := 'pollSensors'
!new Transition('tr_tokyo_decideUpDirection')
!tr_tokyo_decideUpDirection.name := 'decideUpDirection'
!new Transition('tr_tokyo_decideDownDirection')
!tr_tokyo_decideDownDirection.name := 'decideDownDirection'
!new Transition('tr_tokyo_reachCruiseUp')
!tr_tokyo_reachCruiseUp.name := 'reachCruiseUp'
!new Transition('tr_tokyo_reachCruiseDown')
!tr_tokyo_reachCruiseDown.name := 'reachCruiseDown'
!new Transition('tr_tokyo_runUpThenCool')
!tr_tokyo_runUpThenCool.name := 'runUpThenCool'
!new Transition('tr_tokyo_runDownThenCool')
!tr_tokyo_runDownThenCool.name := 'runDownThenCool'
!new Transition('tr_tokyo_cooldownComplete')
!tr_tokyo_cooldownComplete.name := 'cooldownComplete'
!new Transition('tr_tokyo_triggerEmergencyFromSensing')
!tr_tokyo_triggerEmergencyFromSensing.name := 'triggerEmergencyFromSensing'
!new Transition('tr_tokyo_triggerEmergencyFromAccelUp')
!tr_tokyo_triggerEmergencyFromAccelUp.name := 'triggerEmergencyFromAccelUp'
!new Transition('tr_tokyo_triggerEmergencyFromAccelDown')
!tr_tokyo_triggerEmergencyFromAccelDown.name := 'triggerEmergencyFromAccelDown'
!new Transition('tr_tokyo_triggerEmergencyFromSteadyUp')
!tr_tokyo_triggerEmergencyFromSteadyUp.name := 'triggerEmergencyFromSteadyUp'
!new Transition('tr_tokyo_triggerEmergencyFromSteadyDown')
!tr_tokyo_triggerEmergencyFromSteadyDown.name := 'triggerEmergencyFromSteadyDown'
!new Transition('tr_tokyo_lockoutForInspection')
!tr_tokyo_lockoutForInspection.name := 'lockoutForInspection'
!new Transition('tr_tokyo_finishMaintenanceReset')
!tr_tokyo_finishMaintenanceReset.name := 'finishMaintenanceReset'

!insert (sm_tokyoMetroEscalatorSafetySM, tr_tokyo_pollSensors) into StateMachineContainsTransitions
!insert (sm_tokyoMetroEscalatorSafetySM, tr_tokyo_decideUpDirection) into StateMachineContainsTransitions
!insert (sm_tokyoMetroEscalatorSafetySM, tr_tokyo_decideDownDirection) into StateMachineContainsTransitions
!insert (sm_tokyoMetroEscalatorSafetySM, tr_tokyo_reachCruiseUp) into StateMachineContainsTransitions
!insert (sm_tokyoMetroEscalatorSafetySM, tr_tokyo_reachCruiseDown) into StateMachineContainsTransitions
!insert (sm_tokyoMetroEscalatorSafetySM, tr_tokyo_runUpThenCool) into StateMachineContainsTransitions
!insert (sm_tokyoMetroEscalatorSafetySM, tr_tokyo_runDownThenCool) into StateMachineContainsTransitions
!insert (sm_tokyoMetroEscalatorSafetySM, tr_tokyo_cooldownComplete) into StateMachineContainsTransitions
!insert (sm_tokyoMetroEscalatorSafetySM, tr_tokyo_triggerEmergencyFromSensing) into StateMachineContainsTransitions
!insert (sm_tokyoMetroEscalatorSafetySM, tr_tokyo_triggerEmergencyFromAccelUp) into StateMachineContainsTransitions
!insert (sm_tokyoMetroEscalatorSafetySM, tr_tokyo_triggerEmergencyFromAccelDown) into StateMachineContainsTransitions
!insert (sm_tokyoMetroEscalatorSafetySM, tr_tokyo_triggerEmergencyFromSteadyUp) into StateMachineContainsTransitions
!insert (sm_tokyoMetroEscalatorSafetySM, tr_tokyo_triggerEmergencyFromSteadyDown) into StateMachineContainsTransitions
!insert (sm_tokyoMetroEscalatorSafetySM, tr_tokyo_lockoutForInspection) into StateMachineContainsTransitions
!insert (sm_tokyoMetroEscalatorSafetySM, tr_tokyo_finishMaintenanceReset) into StateMachineContainsTransitions

!insert (st_tokyo_idle, tr_tokyo_pollSensors) into StateTransition
!insert (tr_tokyo_pollSensors, st_tokyo_sensingLoad) into TransitionState

!insert (st_tokyo_sensingLoad, tr_tokyo_decideUpDirection) into StateTransition
!insert (tr_tokyo_decideUpDirection, st_tokyo_acceleratingUp) into TransitionState

!insert (st_tokyo_sensingLoad, tr_tokyo_decideDownDirection) into StateTransition
!insert (tr_tokyo_decideDownDirection, st_tokyo_acceleratingDown) into TransitionState

!insert (st_tokyo_acceleratingUp, tr_tokyo_reachCruiseUp) into StateTransition
!insert (tr_tokyo_reachCruiseUp, st_tokyo_steadyUp) into TransitionState

!insert (st_tokyo_acceleratingDown, tr_tokyo_reachCruiseDown) into StateTransition
!insert (tr_tokyo_reachCruiseDown, st_tokyo_steadyDown) into TransitionState

!insert (st_tokyo_steadyUp, tr_tokyo_runUpThenCool) into StateTransition
!insert (tr_tokyo_runUpThenCool, st_tokyo_cooling) into TransitionState

!insert (st_tokyo_steadyDown, tr_tokyo_runDownThenCool) into StateTransition
!insert (tr_tokyo_runDownThenCool, st_tokyo_cooling) into TransitionState

!insert (st_tokyo_cooling, tr_tokyo_cooldownComplete) into StateTransition
!insert (tr_tokyo_cooldownComplete, st_tokyo_idle) into TransitionState

!insert (st_tokyo_sensingLoad, tr_tokyo_triggerEmergencyFromSensing) into StateTransition
!insert (tr_tokyo_triggerEmergencyFromSensing, st_tokyo_emergencyStop) into TransitionState

!insert (st_tokyo_acceleratingUp, tr_tokyo_triggerEmergencyFromAccelUp) into StateTransition
!insert (tr_tokyo_triggerEmergencyFromAccelUp, st_tokyo_emergencyStop) into TransitionState

!insert (st_tokyo_acceleratingDown, tr_tokyo_triggerEmergencyFromAccelDown) into StateTransition
!insert (tr_tokyo_triggerEmergencyFromAccelDown, st_tokyo_emergencyStop) into TransitionState

!insert (st_tokyo_steadyUp, tr_tokyo_triggerEmergencyFromSteadyUp) into StateTransition
!insert (tr_tokyo_triggerEmergencyFromSteadyUp, st_tokyo_emergencyStop) into TransitionState

!insert (st_tokyo_steadyDown, tr_tokyo_triggerEmergencyFromSteadyDown) into StateTransition
!insert (tr_tokyo_triggerEmergencyFromSteadyDown, st_tokyo_emergencyStop) into TransitionState

!insert (st_tokyo_emergencyStop, tr_tokyo_lockoutForInspection) into StateTransition
!insert (tr_tokyo_lockoutForInspection, st_tokyo_maintenance) into TransitionState

!insert (st_tokyo_maintenance, tr_tokyo_finishMaintenanceReset) into StateTransition
!insert (tr_tokyo_finishMaintenanceReset, st_tokyo_idle) into TransitionState

!new TimeEvent('te_tokyo_TE1')
!te_tokyo_TE1.time := 2
!insert (tr_tokyo_pollSensors, te_tokyo_TE1) into TransitionContainsEvents

!new TimeEvent('te_tokyo_TE2')
!te_tokyo_TE2.time := 1
!insert (tr_tokyo_decideUpDirection, te_tokyo_TE2) into TransitionContainsEvents

!new TimeEvent('te_tokyo_TE3')
!te_tokyo_TE3.time := 1
!insert (tr_tokyo_decideDownDirection, te_tokyo_TE3) into TransitionContainsEvents

!new TimeEvent('te_tokyo_TE4')
!te_tokyo_TE4.time := 5
!insert (tr_tokyo_reachCruiseUp, te_tokyo_TE4) into TransitionContainsEvents

!new TimeEvent('te_tokyo_TE5')
!te_tokyo_TE5.time := 5
!insert (tr_tokyo_reachCruiseDown, te_tokyo_TE5) into TransitionContainsEvents

!new TimeEvent('te_tokyo_TE6')
!te_tokyo_TE6.time := 180
!insert (tr_tokyo_runUpThenCool, te_tokyo_TE6) into TransitionContainsEvents

!new TimeEvent('te_tokyo_TE7')
!te_tokyo_TE7.time := 180
!insert (tr_tokyo_runDownThenCool, te_tokyo_TE7) into TransitionContainsEvents

!new TimeEvent('te_tokyo_TE8')
!te_tokyo_TE8.time := 30
!insert (tr_tokyo_cooldownComplete, te_tokyo_TE8) into TransitionContainsEvents

!new TimeEvent('te_tokyo_TE9')
!te_tokyo_TE9.time := 1
!insert (tr_tokyo_triggerEmergencyFromSensing, te_tokyo_TE9) into TransitionContainsEvents

!new TimeEvent('te_tokyo_TE10')
!te_tokyo_TE10.time := 1
!insert (tr_tokyo_triggerEmergencyFromAccelUp, te_tokyo_TE10) into TransitionContainsEvents

!new TimeEvent('te_tokyo_TE11')
!te_tokyo_TE11.time := 1
!insert (tr_tokyo_triggerEmergencyFromAccelDown, te_tokyo_TE11) into TransitionContainsEvents

!new TimeEvent('te_tokyo_TE12')
!te_tokyo_TE12.time := 1
!insert (tr_tokyo_triggerEmergencyFromSteadyUp, te_tokyo_TE12) into TransitionContainsEvents

!new TimeEvent('te_tokyo_TE13')
!te_tokyo_TE13.time := 1
!insert (tr_tokyo_triggerEmergencyFromSteadyDown, te_tokyo_TE13) into TransitionContainsEvents

!new TimeEvent('te_tokyo_TE14')
!te_tokyo_TE14.time := 600
!insert (tr_tokyo_lockoutForInspection, te_tokyo_TE14) into TransitionContainsEvents

!new TimeEvent('te_tokyo_TE15')
!te_tokyo_TE15.time := 10
!insert (tr_tokyo_finishMaintenanceReset, te_tokyo_TE15) into TransitionContainsEvents
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 150 | 0.00% |
| Multiplicities Errors | 0 | 70 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

## Category edge
```
!new StateMachine('sm_edgeTimerMachine')
!sm_edgeTimerMachine.name := 'edgeTimerMachine'

!new State('st_unico')
!st_unico.name := 'único'

!insert (sm_edgeTimerMachine, st_unico) into StateMachineContainsStates
!insert (sm_edgeTimerMachine, st_unico) into StateMachineStartsStates

!new Transition('tr_tickFast')
!tr_tickFast.name := 'tickFast'

!new Transition('tr_tickForever')
!tr_tickForever.name := 'tickForever'

!insert (sm_edgeTimerMachine, tr_tickFast) into StateMachineContainsTransitions
!insert (sm_edgeTimerMachine, tr_tickForever) into StateMachineContainsTransitions

!insert (st_unico, tr_tickFast) into StateTransition
!insert (tr_tickFast, st_unico) into TransitionState

!insert (st_unico, tr_tickForever) into StateTransition
!insert (tr_tickForever, st_unico) into TransitionState

!new TimeEvent('te_t_min')
!te_t_min.time := 1
!insert (tr_tickFast, te_t_min) into TransitionContainsEvents

!new TimeEvent('te_t_huge')
!te_t_huge.time := 2147483647
!insert (tr_tickForever, te_t_huge) into TransitionContainsEvents
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 22 | 0.00% |
| Multiplicities Errors | 0 | 10 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

## Category invalid
```
!new StateMachine('sm_metroGateController')
!sm_metroGateController.name := 'metroGateController'

!new State('st_mgc_Idle')
!st_mgc_Idle.name := 'Idle'
!new State('st_mgc_TicketValide')
!st_mgc_TicketValide.name := 'TicketValidé'
!new State('st_mgc_Open')
!st_mgc_Open.name := 'Open'
!new State('st_mgc_Alarm')
!st_mgc_Alarm.name := 'Alarm'

!insert (sm_metroGateController, st_mgc_Idle) into StateMachineContainsStates
!insert (sm_metroGateController, st_mgc_TicketValide) into StateMachineContainsStates
!insert (sm_metroGateController, st_mgc_Open) into StateMachineContainsStates
!insert (sm_metroGateController, st_mgc_Alarm) into StateMachineContainsStates

!insert (sm_metroGateController, st_mgc_Idle) into StateMachineStartsStates
!insert (sm_metroGateController, st_mgc_Alarm) into StateMachineStartsStates

!new Transition('tr_mgc_tSelfTestToIdle')
!tr_mgc_tSelfTestToIdle.name := 'tSelfTestToIdle'
!new Transition('tr_mgc_tBootToAlarm')
!tr_mgc_tBootToAlarm.name := 'tBootToAlarm'
!new Transition('tr_mgc_tIdleToValidated')
!tr_mgc_tIdleToValidated.name := 'tIdleToValidated'
!new Transition('tr_mgc_tValidatedToOpen')
!tr_mgc_tValidatedToOpen.name := 'tValidatedToOpen'
!new Transition('tr_mgc_tOpenToIdle')
!tr_mgc_tOpenToIdle.name := 'tOpenToIdle'
!new Transition('tr_mgc_tAlarmToIdle')
!tr_mgc_tAlarmToIdle.name := 'tAlarmToIdle'

!insert (sm_metroGateController, tr_mgc_tSelfTestToIdle) into StateMachineContainsTransitions
!insert (sm_metroGateController, tr_mgc_tBootToAlarm) into StateMachineContainsTransitions
!insert (sm_metroGateController, tr_mgc_tIdleToValidated) into StateMachineContainsTransitions
!insert (sm_metroGateController, tr_mgc_tValidatedToOpen) into StateMachineContainsTransitions
!insert (sm_metroGateController, tr_mgc_tOpenToIdle) into StateMachineContainsTransitions
!insert (sm_metroGateController, tr_mgc_tAlarmToIdle) into StateMachineContainsTransitions

!insert (st_mgc_Open, tr_mgc_tSelfTestToIdle) into StateTransition
!insert (tr_mgc_tSelfTestToIdle, st_mgc_Idle) into TransitionState

!insert (st_mgc_Open, tr_mgc_tBootToAlarm) into StateTransition
!insert (tr_mgc_tBootToAlarm, st_mgc_Alarm) into TransitionState

!insert (st_mgc_Idle, tr_mgc_tIdleToValidated) into StateTransition
!insert (tr_mgc_tIdleToValidated, st_mgc_TicketValide) into TransitionState

!insert (st_mgc_TicketValide, tr_mgc_tValidatedToOpen) into StateTransition
!insert (tr_mgc_tValidatedToOpen, st_mgc_Open) into TransitionState

!insert (st_mgc_Open, tr_mgc_tOpenToIdle) into StateTransition
!insert (tr_mgc_tOpenToIdle, st_mgc_Idle) into TransitionState

!insert (st_mgc_Alarm, tr_mgc_tAlarmToIdle) into StateTransition
!insert (tr_mgc_tAlarmToIdle, st_mgc_Idle) into TransitionState

!new TimeEvent('te_mgc_tSelfTestToIdle')
!te_mgc_tSelfTestToIdle.time := 4
!insert (tr_mgc_tSelfTestToIdle, te_mgc_tSelfTestToIdle) into TransitionContainsEvents

!new TimeEvent('te_mgc_tBootToAlarm')
!te_mgc_tBootToAlarm.time := 4
!insert (tr_mgc_tBootToAlarm, te_mgc_tBootToAlarm) into TransitionContainsEvents

!new TimeEvent('te_mgc_tIdleToValidated')
!te_mgc_tIdleToValidated.time := 1
!insert (tr_mgc_tIdleToValidated, te_mgc_tIdleToValidated) into TransitionContainsEvents

!new TimeEvent('te_mgc_tValidatedToOpen')
!te_mgc_tValidatedToOpen.time := 2
!insert (tr_mgc_tValidatedToOpen, te_mgc_tValidatedToOpen) into TransitionContainsEvents

!new TimeEvent('te_mgc_tOpenToIdle')
!te_mgc_tOpenToIdle.time := 6
!insert (tr_mgc_tOpenToIdle, te_mgc_tOpenToIdle) into TransitionContainsEvents

!new TimeEvent('te_mgc_tAlarmToIdle')
!te_mgc_tAlarmToIdle.time := 30
!insert (tr_mgc_tAlarmToIdle, te_mgc_tAlarmToIdle) into TransitionContainsEvents
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 30 | 3.33% |
| Invariants Errors (Not included on General) | 1 | 2 | 50.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `StateMachineStartsStates':
  Object `sm_metroGateController' of class `StateMachine' is connected to 2 objects of class `State'
  at association end `start' but the multiplicity is specified as `1'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (1) `StateMachine::FirstCharLowerCase': FAILED.
```

| No specific metrics for this system | 
 |---|

## Generation 1 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 297 | 0.00% |
| Multiplicities Errors | 0 | 107 | 0.00% |
| Invariants Errors | 0 | 8 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 30 | 3.33% |
| Invariants Errors (Not included on General) | 1 | 2 | 50.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `StateMachineStartsStates':
  Object `sm_metroGateController' of class `StateMachine' is connected to 2 objects of class `State'
  at association end `start' but the multiplicity is specified as `1'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (1) `StateMachine::FirstCharLowerCase': FAILED.
```

| No specific metrics for this system | 
 |---|

# Generation 2
## Category baseline
```
!new StateMachine('sm_solarMicrogridController')
!sm_solarMicrogridController.name := 'solarMicrogridController'

!new State('st_solar_monitoring')
!st_solar_monitoring.name := 'monitoring'
!new State('st_solar_warningIssued')
!st_solar_warningIssued.name := 'warningIssued'
!new State('st_solar_sheddingLoads')
!st_solar_sheddingLoads.name := 'sheddingLoads'
!new State('st_solar_runningOnBattery')
!st_solar_runningOnBattery.name := 'runningOnBattery'
!new State('st_solar_restoringGrid')
!st_solar_restoringGrid.name := 'restoringGrid'
!new State('st_solar_maintenanceMode')
!st_solar_maintenanceMode.name := 'maintenanceMode'

!insert (sm_solarMicrogridController, st_solar_monitoring) into StateMachineContainsStates
!insert (sm_solarMicrogridController, st_solar_warningIssued) into StateMachineContainsStates
!insert (sm_solarMicrogridController, st_solar_sheddingLoads) into StateMachineContainsStates
!insert (sm_solarMicrogridController, st_solar_runningOnBattery) into StateMachineContainsStates
!insert (sm_solarMicrogridController, st_solar_restoringGrid) into StateMachineContainsStates
!insert (sm_solarMicrogridController, st_solar_maintenanceMode) into StateMachineContainsStates

!insert (sm_solarMicrogridController, st_solar_monitoring) into StateMachineStartsStates

!new Transition('tr_solar_routineSample')
!tr_solar_routineSample.name := 'routineSample'
!new Transition('tr_solar_raiseWarning')
!tr_solar_raiseWarning.name := 'raiseWarning'
!new Transition('tr_solar_startShedding')
!tr_solar_startShedding.name := 'startShedding'
!new Transition('tr_solar_switchToBattery')
!tr_solar_switchToBattery.name := 'switchToBattery'
!new Transition('tr_solar_beginRestore')
!tr_solar_beginRestore.name := 'beginRestore'
!new Transition('tr_solar_attemptRestoreFromShedding')
!tr_solar_attemptRestoreFromShedding.name := 'attemptRestoreFromShedding'
!new Transition('tr_solar_completeRestore')
!tr_solar_completeRestore.name := 'completeRestore'
!new Transition('tr_solar_enterMaintenance')
!tr_solar_enterMaintenance.name := 'enterMaintenance'
!new Transition('tr_solar_enterMaintenanceFromWarning')
!tr_solar_enterMaintenanceFromWarning.name := 'enterMaintenanceFromWarning'
!new Transition('tr_solar_exitMaintenance')
!tr_solar_exitMaintenance.name := 'exitMaintenance'

!insert (sm_solarMicrogridController, tr_solar_routineSample) into StateMachineContainsTransitions
!insert (sm_solarMicrogridController, tr_solar_raiseWarning) into StateMachineContainsTransitions
!insert (sm_solarMicrogridController, tr_solar_startShedding) into StateMachineContainsTransitions
!insert (sm_solarMicrogridController, tr_solar_switchToBattery) into StateMachineContainsTransitions
!insert (sm_solarMicrogridController, tr_solar_beginRestore) into StateMachineContainsTransitions
!insert (sm_solarMicrogridController, tr_solar_attemptRestoreFromShedding) into StateMachineContainsTransitions
!insert (sm_solarMicrogridController, tr_solar_completeRestore) into StateMachineContainsTransitions
!insert (sm_solarMicrogridController, tr_solar_enterMaintenance) into StateMachineContainsTransitions
!insert (sm_solarMicrogridController, tr_solar_enterMaintenanceFromWarning) into StateMachineContainsTransitions
!insert (sm_solarMicrogridController, tr_solar_exitMaintenance) into StateMachineContainsTransitions

!insert (st_solar_monitoring, tr_solar_routineSample) into StateTransition
!insert (tr_solar_routineSample, st_solar_monitoring) into TransitionState

!insert (st_solar_monitoring, tr_solar_raiseWarning) into StateTransition
!insert (tr_solar_raiseWarning, st_solar_warningIssued) into TransitionState

!insert (st_solar_warningIssued, tr_solar_startShedding) into StateTransition
!insert (tr_solar_startShedding, st_solar_sheddingLoads) into TransitionState

!insert (st_solar_sheddingLoads, tr_solar_switchToBattery) into StateTransition
!insert (tr_solar_switchToBattery, st_solar_runningOnBattery) into TransitionState

!insert (st_solar_runningOnBattery, tr_solar_beginRestore) into StateTransition
!insert (tr_solar_beginRestore, st_solar_restoringGrid) into TransitionState

!insert (st_solar_sheddingLoads, tr_solar_attemptRestoreFromShedding) into StateTransition
!insert (tr_solar_attemptRestoreFromShedding, st_solar_restoringGrid) into TransitionState

!insert (st_solar_restoringGrid, tr_solar_completeRestore) into StateTransition
!insert (tr_solar_completeRestore, st_solar_monitoring) into TransitionState

!insert (st_solar_monitoring, tr_solar_enterMaintenance) into StateTransition
!insert (tr_solar_enterMaintenance, st_solar_maintenanceMode) into TransitionState

!insert (st_solar_warningIssued, tr_solar_enterMaintenanceFromWarning) into StateTransition
!insert (tr_solar_enterMaintenanceFromWarning, st_solar_maintenanceMode) into TransitionState

!insert (st_solar_maintenanceMode, tr_solar_exitMaintenance) into StateTransition
!insert (tr_solar_exitMaintenance, st_solar_monitoring) into TransitionState

!new TimeEvent('te_solar_t_routineSample')
!te_solar_t_routineSample.time := 60
!insert (tr_solar_routineSample, te_solar_t_routineSample) into TransitionContainsEvents

!new TimeEvent('te_solar_t_raiseWarning')
!te_solar_t_raiseWarning.time := 15
!insert (tr_solar_raiseWarning, te_solar_t_raiseWarning) into TransitionContainsEvents

!new TimeEvent('te_solar_t_startShedding')
!te_solar_t_startShedding.time := 20
!insert (tr_solar_startShedding, te_solar_t_startShedding) into TransitionContainsEvents

!new TimeEvent('te_solar_t_switchToBattery')
!te_solar_t_switchToBattery.time := 5
!insert (tr_solar_switchToBattery, te_solar_t_switchToBattery) into TransitionContainsEvents

!new TimeEvent('te_solar_t_beginRestore')
!te_solar_t_beginRestore.time := 120
!insert (tr_solar_beginRestore, te_solar_t_beginRestore) into TransitionContainsEvents

!new TimeEvent('te_solar_t_attemptRestoreFromShedding')
!te_solar_t_attemptRestoreFromShedding.time := 90
!insert (tr_solar_attemptRestoreFromShedding, te_solar_t_attemptRestoreFromShedding) into TransitionContainsEvents

!new TimeEvent('te_solar_t_completeRestore')
!te_solar_t_completeRestore.time := 10
!insert (tr_solar_completeRestore, te_solar_t_completeRestore) into TransitionContainsEvents

!new TimeEvent('te_solar_t_enterMaintenance')
!te_solar_t_enterMaintenance.time := 3
!insert (tr_solar_enterMaintenance, te_solar_t_enterMaintenance) into TransitionContainsEvents

!new TimeEvent('te_solar_t_enterMaintenanceFromWarning')
!te_solar_t_enterMaintenanceFromWarning.time := 3
!insert (tr_solar_enterMaintenanceFromWarning, te_solar_t_enterMaintenanceFromWarning) into TransitionContainsEvents

!new TimeEvent('te_solar_t_exitMaintenance')
!te_solar_t_exitMaintenance.time := 5
!insert (tr_solar_exitMaintenance, te_solar_t_exitMaintenance) into TransitionContainsEvents
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 101 | 0.00% |
| Multiplicities Errors | 0 | 47 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

## Category boundary
```
!new StateMachine('sm_kyotoTeaCeremony')
!sm_kyotoTeaCeremony.name := 'kyotoTeaCeremony'

!new State('st_preparing')
!st_preparing.name := 'preparing'

!insert (sm_kyotoTeaCeremony, st_preparing) into StateMachineContainsStates
!insert (sm_kyotoTeaCeremony, st_preparing) into StateMachineStartsStates
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 6 | 0.00% |
| Multiplicities Errors | 0 | 2 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

## Category complex
```
!new StateMachine('sm_saoPauloFloodgateControllerSM')
!sm_saoPauloFloodgateControllerSM.name := 'saoPauloFloodgateControllerSM'

!new State('st_sp_standby')
!st_sp_standby.name := 'standby'
!new State('st_sp_sampling')
!st_sp_sampling.name := 'sampling'
!new State('st_sp_forecastSync')
!st_sp_forecastSync.name := 'forecastSync'
!new State('st_sp_openingGates')
!st_sp_openingGates.name := 'openingGates'
!new State('st_sp_holdingOpen')
!st_sp_holdingOpen.name := 'holdingOpen'
!new State('st_sp_closingGates')
!st_sp_closingGates.name := 'closingGates'
!new State('st_sp_alarm')
!st_sp_alarm.name := 'alarm'
!new State('st_sp_manualOverride')
!st_sp_manualOverride.name := 'manualOverride'

!insert (sm_saoPauloFloodgateControllerSM, st_sp_standby) into StateMachineContainsStates
!insert (sm_saoPauloFloodgateControllerSM, st_sp_sampling) into StateMachineContainsStates
!insert (sm_saoPauloFloodgateControllerSM, st_sp_forecastSync) into StateMachineContainsStates
!insert (sm_saoPauloFloodgateControllerSM, st_sp_openingGates) into StateMachineContainsStates
!insert (sm_saoPauloFloodgateControllerSM, st_sp_holdingOpen) into StateMachineContainsStates
!insert (sm_saoPauloFloodgateControllerSM, st_sp_closingGates) into StateMachineContainsStates
!insert (sm_saoPauloFloodgateControllerSM, st_sp_alarm) into StateMachineContainsStates
!insert (sm_saoPauloFloodgateControllerSM, st_sp_manualOverride) into StateMachineContainsStates

!insert (sm_saoPauloFloodgateControllerSM, st_sp_standby) into StateMachineStartsStates

!new Transition('tr_sp_wakeForSampling')
!tr_sp_wakeForSampling.name := 'wakeForSampling'
!new Transition('tr_sp_syncForecast')
!tr_sp_syncForecast.name := 'syncForecast'
!new Transition('tr_sp_evaluateAndReturn')
!tr_sp_evaluateAndReturn.name := 'evaluateAndReturn'
!new Transition('tr_sp_initiateOpening')
!tr_sp_initiateOpening.name := 'initiateOpening'
!new Transition('tr_sp_completeOpening')
!tr_sp_completeOpening.name := 'completeOpening'
!new Transition('tr_sp_holdCyclePulse')
!tr_sp_holdCyclePulse.name := 'holdCyclePulse'
!new Transition('tr_sp_startClosing')
!tr_sp_startClosing.name := 'startClosing'
!new Transition('tr_sp_completeClosing')
!tr_sp_completeClosing.name := 'completeClosing'
!new Transition('tr_sp_sensorFaultToAlarm')
!tr_sp_sensorFaultToAlarm.name := 'sensorFaultToAlarm'
!new Transition('tr_sp_motorFaultToAlarm')
!tr_sp_motorFaultToAlarm.name := 'motorFaultToAlarm'
!new Transition('tr_sp_stuckGateToAlarm')
!tr_sp_stuckGateToAlarm.name := 'stuckGateToAlarm'
!new Transition('tr_sp_escalateToManual')
!tr_sp_escalateToManual.name := 'escalateToManual'
!new Transition('tr_sp_manualResetToStandby')
!tr_sp_manualResetToStandby.name := 'manualResetToStandby'

!insert (sm_saoPauloFloodgateControllerSM, tr_sp_wakeForSampling) into StateMachineContainsTransitions
!insert (sm_saoPauloFloodgateControllerSM, tr_sp_syncForecast) into StateMachineContainsTransitions
!insert (sm_saoPauloFloodgateControllerSM, tr_sp_evaluateAndReturn) into StateMachineContainsTransitions
!insert (sm_saoPauloFloodgateControllerSM, tr_sp_initiateOpening) into StateMachineContainsTransitions
!insert (sm_saoPauloFloodgateControllerSM, tr_sp_completeOpening) into StateMachineContainsTransitions
!insert (sm_saoPauloFloodgateControllerSM, tr_sp_holdCyclePulse) into StateMachineContainsTransitions
!insert (sm_saoPauloFloodgateControllerSM, tr_sp_startClosing) into StateMachineContainsTransitions
!insert (sm_saoPauloFloodgateControllerSM, tr_sp_completeClosing) into StateMachineContainsTransitions
!insert (sm_saoPauloFloodgateControllerSM, tr_sp_sensorFaultToAlarm) into StateMachineContainsTransitions
!insert (sm_saoPauloFloodgateControllerSM, tr_sp_motorFaultToAlarm) into StateMachineContainsTransitions
!insert (sm_saoPauloFloodgateControllerSM, tr_sp_stuckGateToAlarm) into StateMachineContainsTransitions
!insert (sm_saoPauloFloodgateControllerSM, tr_sp_escalateToManual) into StateMachineContainsTransitions
!insert (sm_saoPauloFloodgateControllerSM, tr_sp_manualResetToStandby) into StateMachineContainsTransitions

!insert (st_sp_standby, tr_sp_wakeForSampling) into StateTransition
!insert (tr_sp_wakeForSampling, st_sp_sampling) into TransitionState

!insert (st_sp_sampling, tr_sp_syncForecast) into StateTransition
!insert (tr_sp_syncForecast, st_sp_forecastSync) into TransitionState

!insert (st_sp_forecastSync, tr_sp_evaluateAndReturn) into StateTransition
!insert (tr_sp_evaluateAndReturn, st_sp_standby) into TransitionState

!insert (st_sp_forecastSync, tr_sp_initiateOpening) into StateTransition
!insert (tr_sp_initiateOpening, st_sp_openingGates) into TransitionState

!insert (st_sp_openingGates, tr_sp_completeOpening) into StateTransition
!insert (tr_sp_completeOpening, st_sp_holdingOpen) into TransitionState

!insert (st_sp_holdingOpen, tr_sp_holdCyclePulse) into StateTransition
!insert (tr_sp_holdCyclePulse, st_sp_holdingOpen) into TransitionState

!insert (st_sp_holdingOpen, tr_sp_startClosing) into StateTransition
!insert (tr_sp_startClosing, st_sp_closingGates) into TransitionState

!insert (st_sp_closingGates, tr_sp_completeClosing) into StateTransition
!insert (tr_sp_completeClosing, st_sp_standby) into TransitionState

!insert (st_sp_sampling, tr_sp_sensorFaultToAlarm) into StateTransition
!insert (tr_sp_sensorFaultToAlarm, st_sp_alarm) into TransitionState

!insert (st_sp_openingGates, tr_sp_motorFaultToAlarm) into StateTransition
!insert (tr_sp_motorFaultToAlarm, st_sp_alarm) into TransitionState

!insert (st_sp_closingGates, tr_sp_stuckGateToAlarm) into StateTransition
!insert (tr_sp_stuckGateToAlarm, st_sp_alarm) into TransitionState

!insert (st_sp_alarm, tr_sp_escalateToManual) into StateTransition
!insert (tr_sp_escalateToManual, st_sp_manualOverride) into TransitionState

!insert (st_sp_manualOverride, tr_sp_manualResetToStandby) into StateTransition
!insert (tr_sp_manualResetToStandby, st_sp_standby) into TransitionState

!new TimeEvent('te_sp_FTE1')
!te_sp_FTE1.time := 15
!insert (tr_sp_wakeForSampling, te_sp_FTE1) into TransitionContainsEvents

!new TimeEvent('te_sp_FTE2')
!te_sp_FTE2.time := 3
!insert (tr_sp_syncForecast, te_sp_FTE2) into TransitionContainsEvents

!new TimeEvent('te_sp_FTE3')
!te_sp_FTE3.time := 2
!insert (tr_sp_evaluateAndReturn, te_sp_FTE3) into TransitionContainsEvents

!new TimeEvent('te_sp_FTE4')
!te_sp_FTE4.time := 1
!insert (tr_sp_initiateOpening, te_sp_FTE4) into TransitionContainsEvents

!new TimeEvent('te_sp_FTE5')
!te_sp_FTE5.time := 20
!insert (tr_sp_completeOpening, te_sp_FTE5) into TransitionContainsEvents

!new TimeEvent('te_sp_FTE6')
!te_sp_FTE6.time := 10
!insert (tr_sp_holdCyclePulse, te_sp_FTE6) into TransitionContainsEvents

!new TimeEvent('te_sp_FTE7')
!te_sp_FTE7.time := 60
!insert (tr_sp_startClosing, te_sp_FTE7) into TransitionContainsEvents

!new TimeEvent('te_sp_FTE8')
!te_sp_FTE8.time := 25
!insert (tr_sp_completeClosing, te_sp_FTE8) into TransitionContainsEvents

!new TimeEvent('te_sp_FTE9')
!te_sp_FTE9.time := 1
!insert (tr_sp_sensorFaultToAlarm, te_sp_FTE9) into TransitionContainsEvents

!new TimeEvent('te_sp_FTE10')
!te_sp_FTE10.time := 1
!insert (tr_sp_motorFaultToAlarm, te_sp_FTE10) into TransitionContainsEvents

!new TimeEvent('te_sp_FTE11')
!te_sp_FTE11.time := 1
!insert (tr_sp_stuckGateToAlarm, te_sp_FTE11) into TransitionContainsEvents

!new TimeEvent('te_sp_FTE12')
!te_sp_FTE12.time := 120
!insert (tr_sp_escalateToManual, te_sp_FTE12) into TransitionContainsEvents

!new TimeEvent('te_sp_FTE13')
!te_sp_FTE13.time := 30
!insert (tr_sp_manualResetToStandby, te_sp_FTE13) into TransitionContainsEvents
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 131 | 0.00% |
| Multiplicities Errors | 0 | 61 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

## Category edge
```
!new StateMachine('sm_disconnectedArchive')
!sm_disconnectedArchive.name := 'disconnectedArchive'

!new State('st_da_alpha')
!st_da_alpha.name := 'alpha'
!new State('st_da_betaGreek')
!st_da_betaGreek.name := 'βeta'
!new State('st_da_cafe')
!st_da_cafe.name := 'café'
!new State('st_da_dormant')
!st_da_dormant.name := 'dormant'
!new State('st_da_estadoN')
!st_da_estadoN.name := 'estadoÑ'
!new State('st_da_arabicMarhala')
!st_da_arabicMarhala.name := 'مرحلة'
!new State('st_da_hiraganaAida')
!st_da_hiraganaAida.name := 'あいだ'

!insert (sm_disconnectedArchive, st_da_alpha) into StateMachineContainsStates
!insert (sm_disconnectedArchive, st_da_betaGreek) into StateMachineContainsStates
!insert (sm_disconnectedArchive, st_da_cafe) into StateMachineContainsStates
!insert (sm_disconnectedArchive, st_da_dormant) into StateMachineContainsStates
!insert (sm_disconnectedArchive, st_da_estadoN) into StateMachineContainsStates
!insert (sm_disconnectedArchive, st_da_arabicMarhala) into StateMachineContainsStates
!insert (sm_disconnectedArchive, st_da_hiraganaAida) into StateMachineContainsStates

!insert (sm_disconnectedArchive, st_da_dormant) into StateMachineStartsStates
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 24 | 0.00% |
| Multiplicities Errors | 0 | 8 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

## Category invalid
```
!new State('st_shared_welcome_fix')
!st_shared_welcome_fix.name := 'welcome'

!new StateMachine('sm_intakeWorkflowTZ_fix')
!sm_intakeWorkflowTZ_fix.name := 'intakeWorkflowTZ'

!new State('st_intake_chooseLanguage_fix')
!st_intake_chooseLanguage_fix.name := 'chooseLanguage'
!new State('st_intake_collectSymptoms_fix')
!st_intake_collectSymptoms_fix.name := 'collectSymptoms'
!new State('st_intake_intakeComplete_fix')
!st_intake_intakeComplete_fix.name := 'intakeComplete'

!insert (sm_intakeWorkflowTZ_fix, st_shared_welcome_fix) into StateMachineContainsStates
!insert (sm_intakeWorkflowTZ_fix, st_intake_chooseLanguage_fix) into StateMachineContainsStates
!insert (sm_intakeWorkflowTZ_fix, st_intake_collectSymptoms_fix) into StateMachineContainsStates
!insert (sm_intakeWorkflowTZ_fix, st_intake_intakeComplete_fix) into StateMachineContainsStates

!insert (sm_intakeWorkflowTZ_fix, st_shared_welcome_fix) into StateMachineStartsStates

!new Transition('tr_intake_tWelcomeToLanguage_fix')
!tr_intake_tWelcomeToLanguage_fix.name := 'tWelcomeToLanguage'
!new Transition('tr_intake_tLanguageToSymptoms_fix')
!tr_intake_tLanguageToSymptoms_fix.name := 'tLanguageToSymptoms'
!new Transition('tr_intake_tSymptomsToComplete_fix')
!tr_intake_tSymptomsToComplete_fix.name := 'tSymptomsToComplete'

!insert (sm_intakeWorkflowTZ_fix, tr_intake_tWelcomeToLanguage_fix) into StateMachineContainsTransitions
!insert (sm_intakeWorkflowTZ_fix, tr_intake_tLanguageToSymptoms_fix) into StateMachineContainsTransitions
!insert (sm_intakeWorkflowTZ_fix, tr_intake_tSymptomsToComplete_fix) into StateMachineContainsTransitions

!insert (st_shared_welcome_fix, tr_intake_tWelcomeToLanguage_fix) into StateTransition
!insert (tr_intake_tWelcomeToLanguage_fix, st_intake_chooseLanguage_fix) into TransitionState

!insert (st_intake_chooseLanguage_fix, tr_intake_tLanguageToSymptoms_fix) into StateTransition
!insert (tr_intake_tLanguageToSymptoms_fix, st_intake_collectSymptoms_fix) into TransitionState

!insert (st_intake_collectSymptoms_fix, tr_intake_tSymptomsToComplete_fix) into StateTransition
!insert (tr_intake_tSymptomsToComplete_fix, st_intake_intakeComplete_fix) into TransitionState

!new TimeEvent('te_intake_tWelcomeToLanguage_fix')
!te_intake_tWelcomeToLanguage_fix.time := 1
!insert (tr_intake_tWelcomeToLanguage_fix, te_intake_tWelcomeToLanguage_fix) into TransitionContainsEvents

!new TimeEvent('te_intake_tLanguageToSymptoms_fix')
!te_intake_tLanguageToSymptoms_fix.time := 8
!insert (tr_intake_tLanguageToSymptoms_fix, te_intake_tLanguageToSymptoms_fix) into TransitionContainsEvents

!new TimeEvent('te_intake_tSymptomsToComplete_fix')
!te_intake_tSymptomsToComplete_fix.time := 3
!insert (tr_intake_tSymptomsToComplete_fix, te_intake_tSymptomsToComplete_fix) into TransitionContainsEvents

!new StateMachine('sm_consentWorkflowTZ_fix')
!sm_consentWorkflowTZ_fix.name := 'consentWorkflowTZ'

!new State('st_consent_showConsent_fix')
!st_consent_showConsent_fix.name := 'showConsent'
!new State('st_consent_captureSignature_fix')
!st_consent_captureSignature_fix.name := 'captureSignature'
!new State('st_consent_consentComplete_fix')
!st_consent_consentComplete_fix.name := 'consentComplete'

!insert (sm_consentWorkflowTZ_fix, st_consent_showConsent_fix) into StateMachineContainsStates
!insert (sm_consentWorkflowTZ_fix, st_consent_captureSignature_fix) into StateMachineContainsStates
!insert (sm_consentWorkflowTZ_fix, st_consent_consentComplete_fix) into StateMachineContainsStates

!insert (sm_consentWorkflowTZ_fix, st_shared_welcome_fix) into StateMachineStartsStates

!new Transition('tr_consent_tWelcomeToConsent_fix')
!tr_consent_tWelcomeToConsent_fix.name := 'tWelcomeToConsent'
!new Transition('tr_consent_tConsentToSignature_fix')
!tr_consent_tConsentToSignature_fix.name := 'tConsentToSignature'
!new Transition('tr_consent_tSignatureToComplete_fix')
!tr_consent_tSignatureToComplete_fix.name := 'tSignatureToComplete'

!insert (sm_consentWorkflowTZ_fix, tr_consent_tWelcomeToConsent_fix) into StateMachineContainsTransitions
!insert (sm_consentWorkflowTZ_fix, tr_consent_tConsentToSignature_fix) into StateMachineContainsTransitions
!insert (sm_consentWorkflowTZ_fix, tr_consent_tSignatureToComplete_fix) into StateMachineContainsTransitions

!insert (st_shared_welcome_fix, tr_consent_tWelcomeToConsent_fix) into StateTransition
!insert (tr_consent_tWelcomeToConsent_fix, st_consent_showConsent_fix) into TransitionState

!insert (st_consent_showConsent_fix, tr_consent_tConsentToSignature_fix) into StateTransition
!insert (tr_consent_tConsentToSignature_fix, st_consent_captureSignature_fix) into TransitionState

!insert (st_consent_captureSignature_fix, tr_consent_tSignatureToComplete_fix) into StateTransition
!insert (tr_consent_tSignatureToComplete_fix, st_consent_consentComplete_fix) into TransitionState

!new TimeEvent('te_consent_tWelcomeToConsent_fix')
!te_consent_tWelcomeToConsent_fix.time := 1
!insert (tr_consent_tWelcomeToConsent_fix, te_consent_tWelcomeToConsent_fix) into TransitionContainsEvents

!new TimeEvent('te_consent_tConsentToSignature_fix')
!te_consent_tConsentToSignature_fix.time := 20
!insert (tr_consent_tConsentToSignature_fix, te_consent_tConsentToSignature_fix) into TransitionContainsEvents

!new TimeEvent('te_consent_tSignatureToComplete_fix')
!te_consent_tSignatureToComplete_fix.time := 2
!insert (tr_consent_tSignatureToComplete_fix, te_consent_tSignatureToComplete_fix) into TransitionContainsEvents
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 33 | 3.03% |
| Invariants Errors (Not included on General) | 0 | 2 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `StateMachineStartsStates':
  Object `st_shared_welcome_fix' of class `State' is connected to 2 objects of class `StateMachine'
  at association end `isStartStateOf' but the multiplicity is specified as `0..1'.
```

| No specific metrics for this system | 
 |---|

## Generation 2 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 337 | 0.00% |
| Multiplicities Errors | 0 | 118 | 0.00% |
| Invariants Errors | 0 | 8 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 33 | 3.03% |
| Invariants Errors (Not included on General) | 0 | 2 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `StateMachineStartsStates':
  Object `st_shared_welcome_fix' of class `State' is connected to 2 objects of class `StateMachine'
  at association end `isStartStateOf' but the multiplicity is specified as `0..1'.
```

| No specific metrics for this system | 
 |---|

# Generation 3
## Category baseline
```
!new StateMachine('sm_turnoClinicaAndina')
!sm_turnoClinicaAndina.name := 'turnoClinicaAndina'

!new State('st_andes_esperando')
!st_andes_esperando.name := 'esperando'
!new State('st_andes_registrandoDatos')
!st_andes_registrandoDatos.name := 'registrandoDatos'
!new State('st_andes_verificandoSeguro')
!st_andes_verificandoSeguro.name := 'verificandoSeguro'
!new State('st_andes_enConsulta')
!st_andes_enConsulta.name := 'enConsulta'
!new State('st_andes_facturando')
!st_andes_facturando.name := 'facturando'
!new State('st_andes_finalizado')
!st_andes_finalizado.name := 'finalizado'

!insert (sm_turnoClinicaAndina, st_andes_esperando) into StateMachineContainsStates
!insert (sm_turnoClinicaAndina, st_andes_registrandoDatos) into StateMachineContainsStates
!insert (sm_turnoClinicaAndina, st_andes_verificandoSeguro) into StateMachineContainsStates
!insert (sm_turnoClinicaAndina, st_andes_enConsulta) into StateMachineContainsStates
!insert (sm_turnoClinicaAndina, st_andes_facturando) into StateMachineContainsStates
!insert (sm_turnoClinicaAndina, st_andes_finalizado) into StateMachineContainsStates

!insert (sm_turnoClinicaAndina, st_andes_esperando) into StateMachineStartsStates

!new Transition('tr_andes_llamarPaciente')
!tr_andes_llamarPaciente.name := 'llamarPaciente'
!new Transition('tr_andes_cancelarPorInactividad')
!tr_andes_cancelarPorInactividad.name := 'cancelarPorInactividad'
!new Transition('tr_andes_datosListos')
!tr_andes_datosListos.name := 'datosListos'
!new Transition('tr_andes_omitirSeguro')
!tr_andes_omitirSeguro.name := 'omitirSeguro'
!new Transition('tr_andes_seguroAprobado')
!tr_andes_seguroAprobado.name := 'seguroAprobado'
!new Transition('tr_andes_cerrarConsulta')
!tr_andes_cerrarConsulta.name := 'cerrarConsulta'
!new Transition('tr_andes_emitirFactura')
!tr_andes_emitirFactura.name := 'emitirFactura'

!insert (sm_turnoClinicaAndina, tr_andes_llamarPaciente) into StateMachineContainsTransitions
!insert (sm_turnoClinicaAndina, tr_andes_cancelarPorInactividad) into StateMachineContainsTransitions
!insert (sm_turnoClinicaAndina, tr_andes_datosListos) into StateMachineContainsTransitions
!insert (sm_turnoClinicaAndina, tr_andes_omitirSeguro) into StateMachineContainsTransitions
!insert (sm_turnoClinicaAndina, tr_andes_seguroAprobado) into StateMachineContainsTransitions
!insert (sm_turnoClinicaAndina, tr_andes_cerrarConsulta) into StateMachineContainsTransitions
!insert (sm_turnoClinicaAndina, tr_andes_emitirFactura) into StateMachineContainsTransitions

!insert (st_andes_esperando, tr_andes_llamarPaciente) into StateTransition
!insert (tr_andes_llamarPaciente, st_andes_registrandoDatos) into TransitionState

!insert (st_andes_esperando, tr_andes_cancelarPorInactividad) into StateTransition
!insert (tr_andes_cancelarPorInactividad, st_andes_finalizado) into TransitionState

!insert (st_andes_registrandoDatos, tr_andes_datosListos) into StateTransition
!insert (tr_andes_datosListos, st_andes_verificandoSeguro) into TransitionState

!insert (st_andes_registrandoDatos, tr_andes_omitirSeguro) into StateTransition
!insert (tr_andes_omitirSeguro, st_andes_enConsulta) into TransitionState

!insert (st_andes_verificandoSeguro, tr_andes_seguroAprobado) into StateTransition
!insert (tr_andes_seguroAprobado, st_andes_enConsulta) into TransitionState

!insert (st_andes_enConsulta, tr_andes_cerrarConsulta) into StateTransition
!insert (tr_andes_cerrarConsulta, st_andes_facturando) into TransitionState

!insert (st_andes_facturando, tr_andes_emitirFactura) into StateTransition
!insert (tr_andes_emitirFactura, st_andes_finalizado) into TransitionState

!new TimeEvent('te_andes_t_llamarPaciente')
!te_andes_t_llamarPaciente.time := 10
!insert (tr_andes_llamarPaciente, te_andes_t_llamarPaciente) into TransitionContainsEvents

!new TimeEvent('te_andes_t_cancelarPorInactividad')
!te_andes_t_cancelarPorInactividad.time := 1800
!insert (tr_andes_cancelarPorInactividad, te_andes_t_cancelarPorInactividad) into TransitionContainsEvents

!new TimeEvent('te_andes_t_datosListos')
!te_andes_t_datosListos.time := 50
!insert (tr_andes_datosListos, te_andes_t_datosListos) into TransitionContainsEvents

!new TimeEvent('te_andes_t_omitirSeguro')
!te_andes_t_omitirSeguro.time := 20
!insert (tr_andes_omitirSeguro, te_andes_t_omitirSeguro) into TransitionContainsEvents

!new TimeEvent('te_andes_t_seguroAprobado')
!te_andes_t_seguroAprobado.time := 90
!insert (tr_andes_seguroAprobado, te_andes_t_seguroAprobado) into TransitionContainsEvents

!new TimeEvent('te_andes_t_cerrarConsulta')
!te_andes_t_cerrarConsulta.time := 1200
!insert (tr_andes_cerrarConsulta, te_andes_t_cerrarConsulta) into TransitionContainsEvents

!new TimeEvent('te_andes_t_emitirFactura')
!te_andes_t_emitirFactura.time := 75
!insert (tr_andes_emitirFactura, te_andes_t_emitirFactura) into TransitionContainsEvents
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 77 | 0.00% |
| Multiplicities Errors | 0 | 35 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

## Category boundary
```
!new StateMachine('sm_atacamaWaterWorks')
!sm_atacamaWaterWorks.name := 'atacamaWaterWorks'

!new State('st_ata_idle')
!st_ata_idle.name := 'idle'
!new State('st_ata_intake')
!st_ata_intake.name := 'intake'
!new State('st_ata_prefilter')
!st_ata_prefilter.name := 'prefilter'
!new State('st_ata_osmosis')
!st_ata_osmosis.name := 'osmosis'
!new State('st_ata_remineralize')
!st_ata_remineralize.name := 'remineralize'
!new State('st_ata_storage')
!st_ata_storage.name := 'storage'
!new State('st_ata_distribute')
!st_ata_distribute.name := 'distribute'
!new State('st_ata_maintenance')
!st_ata_maintenance.name := 'maintenance'

!insert (sm_atacamaWaterWorks, st_ata_idle) into StateMachineContainsStates
!insert (sm_atacamaWaterWorks, st_ata_intake) into StateMachineContainsStates
!insert (sm_atacamaWaterWorks, st_ata_prefilter) into StateMachineContainsStates
!insert (sm_atacamaWaterWorks, st_ata_osmosis) into StateMachineContainsStates
!insert (sm_atacamaWaterWorks, st_ata_remineralize) into StateMachineContainsStates
!insert (sm_atacamaWaterWorks, st_ata_storage) into StateMachineContainsStates
!insert (sm_atacamaWaterWorks, st_ata_distribute) into StateMachineContainsStates
!insert (sm_atacamaWaterWorks, st_ata_maintenance) into StateMachineContainsStates

!insert (sm_atacamaWaterWorks, st_ata_idle) into StateMachineStartsStates

!new Transition('tr_ata_startIntake')
!tr_ata_startIntake.name := 'startIntake'
!new Transition('tr_ata_toPrefilter')
!tr_ata_toPrefilter.name := 'toPrefilter'
!new Transition('tr_ata_toOsmosis')
!tr_ata_toOsmosis.name := 'toOsmosis'
!new Transition('tr_ata_toRemin')
!tr_ata_toRemin.name := 'toRemin'
!new Transition('tr_ata_toStorage')
!tr_ata_toStorage.name := 'toStorage'
!new Transition('tr_ata_toDistribute')
!tr_ata_toDistribute.name := 'toDistribute'
!new Transition('tr_ata_backToIdle')
!tr_ata_backToIdle.name := 'backToIdle'
!new Transition('tr_ata_emergencyMaintenance')
!tr_ata_emergencyMaintenance.name := 'emergencyMaintenance'
!new Transition('tr_ata_maintenanceDone')
!tr_ata_maintenanceDone.name := 'maintenanceDone'
!new Transition('tr_ata_storageFlush')
!tr_ata_storageFlush.name := 'storageFlush'
!new Transition('tr_ata_intakeStall')
!tr_ata_intakeStall.name := 'intakeStall'

!insert (sm_atacamaWaterWorks, tr_ata_startIntake) into StateMachineContainsTransitions
!insert (sm_atacamaWaterWorks, tr_ata_toPrefilter) into StateMachineContainsTransitions
!insert (sm_atacamaWaterWorks, tr_ata_toOsmosis) into StateMachineContainsTransitions
!insert (sm_atacamaWaterWorks, tr_ata_toRemin) into StateMachineContainsTransitions
!insert (sm_atacamaWaterWorks, tr_ata_toStorage) into StateMachineContainsTransitions
!insert (sm_atacamaWaterWorks, tr_ata_toDistribute) into StateMachineContainsTransitions
!insert (sm_atacamaWaterWorks, tr_ata_backToIdle) into StateMachineContainsTransitions
!insert (sm_atacamaWaterWorks, tr_ata_emergencyMaintenance) into StateMachineContainsTransitions
!insert (sm_atacamaWaterWorks, tr_ata_maintenanceDone) into StateMachineContainsTransitions
!insert (sm_atacamaWaterWorks, tr_ata_storageFlush) into StateMachineContainsTransitions
!insert (sm_atacamaWaterWorks, tr_ata_intakeStall) into StateMachineContainsTransitions

!insert (st_ata_idle, tr_ata_startIntake) into StateTransition
!insert (tr_ata_startIntake, st_ata_intake) into TransitionState

!insert (st_ata_intake, tr_ata_toPrefilter) into StateTransition
!insert (tr_ata_toPrefilter, st_ata_prefilter) into TransitionState

!insert (st_ata_prefilter, tr_ata_toOsmosis) into StateTransition
!insert (tr_ata_toOsmosis, st_ata_osmosis) into TransitionState

!insert (st_ata_osmosis, tr_ata_toRemin) into StateTransition
!insert (tr_ata_toRemin, st_ata_remineralize) into TransitionState

!insert (st_ata_remineralize, tr_ata_toStorage) into StateTransition
!insert (tr_ata_toStorage, st_ata_storage) into TransitionState

!insert (st_ata_storage, tr_ata_toDistribute) into StateTransition
!insert (tr_ata_toDistribute, st_ata_distribute) into TransitionState

!insert (st_ata_distribute, tr_ata_backToIdle) into StateTransition
!insert (tr_ata_backToIdle, st_ata_idle) into TransitionState

!insert (st_ata_osmosis, tr_ata_emergencyMaintenance) into StateTransition
!insert (tr_ata_emergencyMaintenance, st_ata_maintenance) into TransitionState

!insert (st_ata_maintenance, tr_ata_maintenanceDone) into StateTransition
!insert (tr_ata_maintenanceDone, st_ata_idle) into TransitionState

!insert (st_ata_storage, tr_ata_storageFlush) into StateTransition
!insert (tr_ata_storageFlush, st_ata_prefilter) into TransitionState

!insert (st_ata_intake, tr_ata_intakeStall) into StateTransition
!insert (tr_ata_intakeStall, st_ata_idle) into TransitionState

!new TimeEvent('te_ata_t_startIntake')
!te_ata_t_startIntake.time := 5
!insert (tr_ata_startIntake, te_ata_t_startIntake) into TransitionContainsEvents

!new TimeEvent('te_ata_t_toPrefilter')
!te_ata_t_toPrefilter.time := 30
!insert (tr_ata_toPrefilter, te_ata_t_toPrefilter) into TransitionContainsEvents

!new TimeEvent('te_ata_t_toOsmosis')
!te_ata_t_toOsmosis.time := 120
!insert (tr_ata_toOsmosis, te_ata_t_toOsmosis) into TransitionContainsEvents

!new TimeEvent('te_ata_t_toRemin')
!te_ata_t_toRemin.time := 300
!insert (tr_ata_toRemin, te_ata_t_toRemin) into TransitionContainsEvents

!new TimeEvent('te_ata_t_toStorage')
!te_ata_t_toStorage.time := 60
!insert (tr_ata_toStorage, te_ata_t_toStorage) into TransitionContainsEvents

!new TimeEvent('te_ata_t_toDistribute')
!te_ata_t_toDistribute.time := 10
!insert (tr_ata_toDistribute, te_ata_t_toDistribute) into TransitionContainsEvents

!new TimeEvent('te_ata_t_backToIdle')
!te_ata_t_backToIdle.time := 15
!insert (tr_ata_backToIdle, te_ata_t_backToIdle) into TransitionContainsEvents

!new TimeEvent('te_ata_t_emergencyMaintenance')
!te_ata_t_emergencyMaintenance.time := 2
!insert (tr_ata_emergencyMaintenance, te_ata_t_emergencyMaintenance) into TransitionContainsEvents

!new TimeEvent('te_ata_t_maintenanceDone')
!te_ata_t_maintenanceDone.time := 2147483647
!insert (tr_ata_maintenanceDone, te_ata_t_maintenanceDone) into TransitionContainsEvents

!new TimeEvent('te_ata_t_storageFlush')
!te_ata_t_storageFlush.time := 86400
!insert (tr_ata_storageFlush, te_ata_t_storageFlush) into TransitionContainsEvents

!new TimeEvent('te_ata_t_intakeStall')
!te_ata_t_intakeStall.time := 999999999
!insert (tr_ata_intakeStall, te_ata_t_intakeStall) into TransitionContainsEvents
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 115 | 0.00% |
| Multiplicities Errors | 0 | 53 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

## Category complex
```
!new StateMachine('sm_munichBreweryFermentationSM')
!sm_munichBreweryFermentationSM.name := 'munichBreweryFermentationSM'

!new State('st_mbf_sanitize')
!st_mbf_sanitize.name := 'sanitize'
!new State('st_mbf_mashIn')
!st_mbf_mashIn.name := 'mashIn'
!new State('st_mbf_mashRest')
!st_mbf_mashRest.name := 'mashRest'
!new State('st_mbf_lautering')
!st_mbf_lautering.name := 'lautering'
!new State('st_mbf_boil')
!st_mbf_boil.name := 'boil'
!new State('st_mbf_hopStand')
!st_mbf_hopStand.name := 'hopStand'
!new State('st_mbf_whirlpool')
!st_mbf_whirlpool.name := 'whirlpool'
!new State('st_mbf_coolWort')
!st_mbf_coolWort.name := 'coolWort'
!new State('st_mbf_pitchYeast')
!st_mbf_pitchYeast.name := 'pitchYeast'
!new State('st_mbf_primaryFermentation')
!st_mbf_primaryFermentation.name := 'primaryFermentation'
!new State('st_mbf_diacetylRest')
!st_mbf_diacetylRest.name := 'diacetylRest'
!new State('st_mbf_coldCrash')
!st_mbf_coldCrash.name := 'coldCrash'
!new State('st_mbf_qualityHold')
!st_mbf_qualityHold.name := 'qualityHold'
!new State('st_mbf_packaging')
!st_mbf_packaging.name := 'packaging'
!new State('st_mbf_cleanInPlace')
!st_mbf_cleanInPlace.name := 'cleanInPlace'

!insert (sm_munichBreweryFermentationSM, st_mbf_sanitize) into StateMachineContainsStates
!insert (sm_munichBreweryFermentationSM, st_mbf_mashIn) into StateMachineContainsStates
!insert (sm_munichBreweryFermentationSM, st_mbf_mashRest) into StateMachineContainsStates
!insert (sm_munichBreweryFermentationSM, st_mbf_lautering) into StateMachineContainsStates
!insert (sm_munichBreweryFermentationSM, st_mbf_boil) into StateMachineContainsStates
!insert (sm_munichBreweryFermentationSM, st_mbf_hopStand) into StateMachineContainsStates
!insert (sm_munichBreweryFermentationSM, st_mbf_whirlpool) into StateMachineContainsStates
!insert (sm_munichBreweryFermentationSM, st_mbf_coolWort) into StateMachineContainsStates
!insert (sm_munichBreweryFermentationSM, st_mbf_pitchYeast) into StateMachineContainsStates
!insert (sm_munichBreweryFermentationSM, st_mbf_primaryFermentation) into StateMachineContainsStates
!insert (sm_munichBreweryFermentationSM, st_mbf_diacetylRest) into StateMachineContainsStates
!insert (sm_munichBreweryFermentationSM, st_mbf_coldCrash) into StateMachineContainsStates
!insert (sm_munichBreweryFermentationSM, st_mbf_qualityHold) into StateMachineContainsStates
!insert (sm_munichBreweryFermentationSM, st_mbf_packaging) into StateMachineContainsStates
!insert (sm_munichBreweryFermentationSM, st_mbf_cleanInPlace) into StateMachineContainsStates

!insert (sm_munichBreweryFermentationSM, st_mbf_sanitize) into StateMachineStartsStates

!new Transition('tr_mbf_startMashIn')
!tr_mbf_startMashIn.name := 'startMashIn'
!new Transition('tr_mbf_stabilizeMash')
!tr_mbf_stabilizeMash.name := 'stabilizeMash'
!new Transition('tr_mbf_completeMashRest')
!tr_mbf_completeMashRest.name := 'completeMashRest'
!new Transition('tr_mbf_finishLauter')
!tr_mbf_finishLauter.name := 'finishLauter'
!new Transition('tr_mbf_endBoil')
!tr_mbf_endBoil.name := 'endBoil'
!new Transition('tr_mbf_finishHopStand')
!tr_mbf_finishHopStand.name := 'finishHopStand'
!new Transition('tr_mbf_settleTrub')
!tr_mbf_settleTrub.name := 'settleTrub'
!new Transition('tr_mbf_reachPitchTemp')
!tr_mbf_reachPitchTemp.name := 'reachPitchTemp'
!new Transition('tr_mbf_yeastPitched')
!tr_mbf_yeastPitched.name := 'yeastPitched'
!new Transition('tr_mbf_fermentationMonitorPulse')
!tr_mbf_fermentationMonitorPulse.name := 'fermentationMonitorPulse'
!new Transition('tr_mbf_moveToDiacetylRest')
!tr_mbf_moveToDiacetylRest.name := 'moveToDiacetylRest'
!new Transition('tr_mbf_finishDiacetylRest')
!tr_mbf_finishDiacetylRest.name := 'finishDiacetylRest'
!new Transition('tr_mbf_completeColdCrash')
!tr_mbf_completeColdCrash.name := 'completeColdCrash'
!new Transition('tr_mbf_releaseToPackaging')
!tr_mbf_releaseToPackaging.name := 'releaseToPackaging'
!new Transition('tr_mbf_packageComplete')
!tr_mbf_packageComplete.name := 'packageComplete'
!new Transition('tr_mbf_cipComplete')
!tr_mbf_cipComplete.name := 'cipComplete'
!new Transition('tr_mbf_contaminationDetected')
!tr_mbf_contaminationDetected.name := 'contaminationDetected'
!new Transition('tr_mbf_equipmentFault')
!tr_mbf_equipmentFault.name := 'equipmentFault'

!insert (sm_munichBreweryFermentationSM, tr_mbf_startMashIn) into StateMachineContainsTransitions
!insert (sm_munichBreweryFermentationSM, tr_mbf_stabilizeMash) into StateMachineContainsTransitions
!insert (sm_munichBreweryFermentationSM, tr_mbf_completeMashRest) into StateMachineContainsTransitions
!insert (sm_munichBreweryFermentationSM, tr_mbf_finishLauter) into StateMachineContainsTransitions
!insert (sm_munichBreweryFermentationSM, tr_mbf_endBoil) into StateMachineContainsTransitions
!insert (sm_munichBreweryFermentationSM, tr_mbf_finishHopStand) into StateMachineContainsTransitions
!insert (sm_munichBreweryFermentationSM, tr_mbf_settleTrub) into StateMachineContainsTransitions
!insert (sm_munichBreweryFermentationSM, tr_mbf_reachPitchTemp) into StateMachineContainsTransitions
!insert (sm_munichBreweryFermentationSM, tr_mbf_yeastPitched) into StateMachineContainsTransitions
!insert (sm_munichBreweryFermentationSM, tr_mbf_fermentationMonitorPulse) into StateMachineContainsTransitions
!insert (sm_munichBreweryFermentationSM, tr_mbf_moveToDiacetylRest) into StateMachineContainsTransitions
!insert (sm_munichBreweryFermentationSM, tr_mbf_finishDiacetylRest) into StateMachineContainsTransitions
!insert (sm_munichBreweryFermentationSM, tr_mbf_completeColdCrash) into StateMachineContainsTransitions
!insert (sm_munichBreweryFermentationSM, tr_mbf_releaseToPackaging) into StateMachineContainsTransitions
!insert (sm_munichBreweryFermentationSM, tr_mbf_packageComplete) into StateMachineContainsTransitions
!insert (sm_munichBreweryFermentationSM, tr_mbf_cipComplete) into StateMachineContainsTransitions
!insert (sm_munichBreweryFermentationSM, tr_mbf_contaminationDetected) into StateMachineContainsTransitions
!insert (sm_munichBreweryFermentationSM, tr_mbf_equipmentFault) into StateMachineContainsTransitions

!insert (st_mbf_sanitize, tr_mbf_startMashIn) into StateTransition
!insert (tr_mbf_startMashIn, st_mbf_mashIn) into TransitionState

!insert (st_mbf_mashIn, tr_mbf_stabilizeMash) into StateTransition
!insert (tr_mbf_stabilizeMash, st_mbf_mashRest) into TransitionState

!insert (st_mbf_mashRest, tr_mbf_completeMashRest) into StateTransition
!insert (tr_mbf_completeMashRest, st_mbf_lautering) into TransitionState

!insert (st_mbf_lautering, tr_mbf_finishLauter) into StateTransition
!insert (tr_mbf_finishLauter, st_mbf_boil) into TransitionState

!insert (st_mbf_boil, tr_mbf_endBoil) into StateTransition
!insert (tr_mbf_endBoil, st_mbf_hopStand) into TransitionState

!insert (st_mbf_hopStand, tr_mbf_finishHopStand) into StateTransition
!insert (tr_mbf_finishHopStand, st_mbf_whirlpool) into TransitionState

!insert (st_mbf_whirlpool, tr_mbf_settleTrub) into StateTransition
!insert (tr_mbf_settleTrub, st_mbf_coolWort) into TransitionState

!insert (st_mbf_coolWort, tr_mbf_reachPitchTemp) into StateTransition
!insert (tr_mbf_reachPitchTemp, st_mbf_pitchYeast) into TransitionState

!insert (st_mbf_pitchYeast, tr_mbf_yeastPitched) into StateTransition
!insert (tr_mbf_yeastPitched, st_mbf_primaryFermentation) into TransitionState

!insert (st_mbf_primaryFermentation, tr_mbf_fermentationMonitorPulse) into StateTransition
!insert (tr_mbf_fermentationMonitorPulse, st_mbf_primaryFermentation) into TransitionState

!insert (st_mbf_primaryFermentation, tr_mbf_moveToDiacetylRest) into StateTransition
!insert (tr_mbf_moveToDiacetylRest, st_mbf_diacetylRest) into TransitionState

!insert (st_mbf_diacetylRest, tr_mbf_finishDiacetylRest) into StateTransition
!insert (tr_mbf_finishDiacetylRest, st_mbf_coldCrash) into TransitionState

!insert (st_mbf_coldCrash, tr_mbf_completeColdCrash) into StateTransition
!insert (tr_mbf_completeColdCrash, st_mbf_qualityHold) into TransitionState

!insert (st_mbf_qualityHold, tr_mbf_releaseToPackaging) into StateTransition
!insert (tr_mbf_releaseToPackaging, st_mbf_packaging) into TransitionState

!insert (st_mbf_packaging, tr_mbf_packageComplete) into StateTransition
!insert (tr_mbf_packageComplete, st_mbf_cleanInPlace) into TransitionState

!insert (st_mbf_cleanInPlace, tr_mbf_cipComplete) into StateTransition
!insert (tr_mbf_cipComplete, st_mbf_sanitize) into TransitionState

!insert (st_mbf_primaryFermentation, tr_mbf_contaminationDetected) into StateTransition
!insert (tr_mbf_contaminationDetected, st_mbf_cleanInPlace) into TransitionState

!insert (st_mbf_mashRest, tr_mbf_equipmentFault) into StateTransition
!insert (tr_mbf_equipmentFault, st_mbf_cleanInPlace) into TransitionState

!new TimeEvent('te_mbf_BTE1')
!te_mbf_BTE1.time := 30
!insert (tr_mbf_startMashIn, te_mbf_BTE1) into TransitionContainsEvents

!new TimeEvent('te_mbf_BTE2')
!te_mbf_BTE2.time := 10
!insert (tr_mbf_stabilizeMash, te_mbf_BTE2) into TransitionContainsEvents

!new TimeEvent('te_mbf_BTE3')
!te_mbf_BTE3.time := 60
!insert (tr_mbf_completeMashRest, te_mbf_BTE3) into TransitionContainsEvents

!new TimeEvent('te_mbf_BTE4')
!te_mbf_BTE4.time := 45
!insert (tr_mbf_finishLauter, te_mbf_BTE4) into TransitionContainsEvents

!new TimeEvent('te_mbf_BTE5')
!te_mbf_BTE5.time := 75
!insert (tr_mbf_endBoil, te_mbf_BTE5) into TransitionContainsEvents

!new TimeEvent('te_mbf_BTE6')
!te_mbf_BTE6.time := 20
!insert (tr_mbf_finishHopStand, te_mbf_BTE6) into TransitionContainsEvents

!new TimeEvent('te_mbf_BTE7')
!te_mbf_BTE7.time := 15
!insert (tr_mbf_settleTrub, te_mbf_BTE7) into TransitionContainsEvents

!new TimeEvent('te_mbf_BTE8')
!te_mbf_BTE8.time := 25
!insert (tr_mbf_reachPitchTemp, te_mbf_BTE8) into TransitionContainsEvents

!new TimeEvent('te_mbf_BTE9')
!te_mbf_BTE9.time := 5
!insert (tr_mbf_yeastPitched, te_mbf_BTE9) into TransitionContainsEvents

!new TimeEvent('te_mbf_BTE10')
!te_mbf_BTE10.time := 720
!insert (tr_mbf_fermentationMonitorPulse, te_mbf_BTE10) into TransitionContainsEvents

!new TimeEvent('te_mbf_BTE11')
!te_mbf_BTE11.time := 4320
!insert (tr_mbf_moveToDiacetylRest, te_mbf_BTE11) into TransitionContainsEvents

!new TimeEvent('te_mbf_BTE12')
!te_mbf_BTE12.time := 1440
!insert (tr_mbf_finishDiacetylRest, te_mbf_BTE12) into TransitionContainsEvents

!new TimeEvent('te_mbf_BTE13')
!te_mbf_BTE13.time := 2880
!insert (tr_mbf_completeColdCrash, te_mbf_BTE13) into TransitionContainsEvents

!new TimeEvent('te_mbf_BTE14')
!te_mbf_BTE14.time := 60
!insert (tr_mbf_releaseToPackaging, te_mbf_BTE14) into TransitionContainsEvents

!new TimeEvent('te_mbf_BTE15')
!te_mbf_BTE15.time := 180
!insert (tr_mbf_packageComplete, te_mbf_BTE15) into TransitionContainsEvents

!new TimeEvent('te_mbf_BTE16')
!te_mbf_BTE16.time := 240
!insert (tr_mbf_cipComplete, te_mbf_BTE16) into TransitionContainsEvents

!new TimeEvent('te_mbf_BTE17')
!te_mbf_BTE17.time := 1
!insert (tr_mbf_contaminationDetected, te_mbf_BTE17) into TransitionContainsEvents

!new TimeEvent('te_mbf_BTE18')
!te_mbf_BTE18.time := 1
!insert (tr_mbf_equipmentFault, te_mbf_BTE18) into TransitionContainsEvents
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 192 | 0.00% |
| Multiplicities Errors | 0 | 88 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

## Category edge
```
!new StateMachine('sm_stuckStartBusyElsewhere')
!sm_stuckStartBusyElsewhere.name := 'stuckStartBusyElsewhere'

!new State('st_ssbe_inicio')
!st_ssbe_inicio.name := 'inicio'
!new State('st_ssbe_rabota')
!st_ssbe_rabota.name := 'работа'
!new State('st_ssbe_hakuna')
!st_ssbe_hakuna.name := 'hakuna'
!new State('st_ssbe_defaillance')
!st_ssbe_defaillance.name := 'défaillance'

!insert (sm_stuckStartBusyElsewhere, st_ssbe_inicio) into StateMachineContainsStates
!insert (sm_stuckStartBusyElsewhere, st_ssbe_rabota) into StateMachineContainsStates
!insert (sm_stuckStartBusyElsewhere, st_ssbe_hakuna) into StateMachineContainsStates
!insert (sm_stuckStartBusyElsewhere, st_ssbe_defaillance) into StateMachineContainsStates

!insert (sm_stuckStartBusyElsewhere, st_ssbe_inicio) into StateMachineStartsStates

!new Transition('tr_ssbe_pulseA')
!tr_ssbe_pulseA.name := 'pulseA'
!new Transition('tr_ssbe_pulseB')
!tr_ssbe_pulseB.name := 'pulseB'
!new Transition('tr_ssbe_retry')
!tr_ssbe_retry.name := 'retry'
!new Transition('tr_ssbe_coolDown')
!tr_ssbe_coolDown.name := 'coolDown'
!new Transition('tr_ssbe_resume')
!tr_ssbe_resume.name := 'resume'
!new Transition('tr_ssbe_returnToStart')
!tr_ssbe_returnToStart.name := 'returnToStart'
!new Transition('tr_ssbe_linger')
!tr_ssbe_linger.name := 'linger'

!insert (sm_stuckStartBusyElsewhere, tr_ssbe_pulseA) into StateMachineContainsTransitions
!insert (sm_stuckStartBusyElsewhere, tr_ssbe_pulseB) into StateMachineContainsTransitions
!insert (sm_stuckStartBusyElsewhere, tr_ssbe_retry) into StateMachineContainsTransitions
!insert (sm_stuckStartBusyElsewhere, tr_ssbe_coolDown) into StateMachineContainsTransitions
!insert (sm_stuckStartBusyElsewhere, tr_ssbe_resume) into StateMachineContainsTransitions
!insert (sm_stuckStartBusyElsewhere, tr_ssbe_returnToStart) into StateMachineContainsTransitions
!insert (sm_stuckStartBusyElsewhere, tr_ssbe_linger) into StateMachineContainsTransitions

!insert (st_ssbe_rabota, tr_ssbe_pulseA) into StateTransition
!insert (tr_ssbe_pulseA, st_ssbe_defaillance) into TransitionState

!insert (st_ssbe_rabota, tr_ssbe_pulseB) into StateTransition
!insert (tr_ssbe_pulseB, st_ssbe_defaillance) into TransitionState

!insert (st_ssbe_defaillance, tr_ssbe_retry) into StateTransition
!insert (tr_ssbe_retry, st_ssbe_rabota) into TransitionState

!insert (st_ssbe_defaillance, tr_ssbe_coolDown) into StateTransition
!insert (tr_ssbe_coolDown, st_ssbe_hakuna) into TransitionState

!insert (st_ssbe_hakuna, tr_ssbe_resume) into StateTransition
!insert (tr_ssbe_resume, st_ssbe_rabota) into TransitionState

!insert (st_ssbe_hakuna, tr_ssbe_returnToStart) into StateTransition
!insert (tr_ssbe_returnToStart, st_ssbe_inicio) into TransitionState

!insert (st_ssbe_defaillance, tr_ssbe_linger) into StateTransition
!insert (tr_ssbe_linger, st_ssbe_defaillance) into TransitionState

!new TimeEvent('te_ssbe_pulseA')
!te_ssbe_pulseA.time := 2
!insert (tr_ssbe_pulseA, te_ssbe_pulseA) into TransitionContainsEvents

!new TimeEvent('te_ssbe_pulseB')
!te_ssbe_pulseB.time := 3
!insert (tr_ssbe_pulseB, te_ssbe_pulseB) into TransitionContainsEvents

!new TimeEvent('te_ssbe_retry')
!te_ssbe_retry.time := 60
!insert (tr_ssbe_retry, te_ssbe_retry) into TransitionContainsEvents

!new TimeEvent('te_ssbe_coolDown')
!te_ssbe_coolDown.time := 1
!insert (tr_ssbe_coolDown, te_ssbe_coolDown) into TransitionContainsEvents

!new TimeEvent('te_ssbe_resume')
!te_ssbe_resume.time := 15
!insert (tr_ssbe_resume, te_ssbe_resume) into TransitionContainsEvents

!new TimeEvent('te_ssbe_returnToStart')
!te_ssbe_returnToStart.time := 999999
!insert (tr_ssbe_returnToStart, te_ssbe_returnToStart) into TransitionContainsEvents

!new TimeEvent('te_ssbe_linger')
!te_ssbe_linger.time := 5
!insert (tr_ssbe_linger, te_ssbe_linger) into TransitionContainsEvents
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 71 | 0.00% |
| Multiplicities Errors | 0 | 33 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

## Category invalid
```
!new StateMachine('sm_museumAudioGuide')
!sm_museumAudioGuide.name := 'museumAudioGuide'

!new State('st_mag_boot')
!st_mag_boot.name := 'boot'
!new State('st_mag_languageSelect')
!st_mag_languageSelect.name := 'languageSelect'
!new State('st_mag_ready')
!st_mag_ready.name := 'ready'
!new State('st_mag_playing')
!st_mag_playing.name := 'playing'
!new State('st_mag_sleep')
!st_mag_sleep.name := 'sleep'

!insert (sm_museumAudioGuide, st_mag_boot) into StateMachineContainsStates
!insert (sm_museumAudioGuide, st_mag_languageSelect) into StateMachineContainsStates
!insert (sm_museumAudioGuide, st_mag_ready) into StateMachineContainsStates
!insert (sm_museumAudioGuide, st_mag_playing) into StateMachineContainsStates
!insert (sm_museumAudioGuide, st_mag_sleep) into StateMachineContainsStates

!insert (sm_museumAudioGuide, st_mag_boot) into StateMachineStartsStates

!new Transition('tr_mag_tBootToLanguage')
!tr_mag_tBootToLanguage.name := 'tBootToLanguage'
!new Transition('tr_mag_tLanguageToReady')
!tr_mag_tLanguageToReady.name := 'tLanguageToReady'
!new Transition('tr_mag_tReadyToPlaying')
!tr_mag_tReadyToPlaying.name := 'tReadyToPlaying'
!new Transition('tr_mag_tPlayingToSleep')
!tr_mag_tPlayingToSleep.name := 'tPlayingToSleep'
!new Transition('tr_mag_tSleepToReady')
!tr_mag_tSleepToReady.name := 'tSleepToReady'

!insert (sm_museumAudioGuide, tr_mag_tBootToLanguage) into StateMachineContainsTransitions
!insert (sm_museumAudioGuide, tr_mag_tLanguageToReady) into StateMachineContainsTransitions
!insert (sm_museumAudioGuide, tr_mag_tReadyToPlaying) into StateMachineContainsTransitions
!insert (sm_museumAudioGuide, tr_mag_tPlayingToSleep) into StateMachineContainsTransitions
!insert (sm_museumAudioGuide, tr_mag_tSleepToReady) into StateMachineContainsTransitions

!insert (st_mag_boot, tr_mag_tBootToLanguage) into StateTransition
!insert (tr_mag_tBootToLanguage, st_mag_languageSelect) into TransitionState

!insert (st_mag_languageSelect, tr_mag_tLanguageToReady) into StateTransition
!insert (tr_mag_tLanguageToReady, st_mag_ready) into TransitionState

!insert (st_mag_ready, tr_mag_tReadyToPlaying) into StateTransition
!insert (tr_mag_tReadyToPlaying, st_mag_playing) into TransitionState

!insert (st_mag_playing, tr_mag_tPlayingToSleep) into StateTransition
!insert (tr_mag_tPlayingToSleep, st_mag_sleep) into TransitionState

!insert (st_mag_sleep, tr_mag_tSleepToReady) into StateTransition
!insert (tr_mag_tSleepToReady, st_mag_ready) into TransitionState

!new TimeEvent('te_mag_tBootToLanguage')
!te_mag_tBootToLanguage.time := 0
!insert (tr_mag_tBootToLanguage, te_mag_tBootToLanguage) into TransitionContainsEvents

!new TimeEvent('te_mag_tLanguageToReady')
!te_mag_tLanguageToReady.time := 0
!insert (tr_mag_tLanguageToReady, te_mag_tLanguageToReady) into TransitionContainsEvents

!new TimeEvent('te_mag_tReadyToPlaying')
!te_mag_tReadyToPlaying.time := 1
!insert (tr_mag_tReadyToPlaying, te_mag_tReadyToPlaying) into TransitionContainsEvents

!new TimeEvent('te_mag_tPlayingToSleep')
!te_mag_tPlayingToSleep.time := 600
!insert (tr_mag_tPlayingToSleep, te_mag_tPlayingToSleep) into TransitionContainsEvents

!new TimeEvent('te_mag_tSleepToReady')
!te_mag_tSleepToReady.time := 0
!insert (tr_mag_tSleepToReady, te_mag_tSleepToReady) into TransitionContainsEvents
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 26 | 0.00% |
| Invariants Errors (Not included on General) | 1 | 2 | 50.00% |

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (2) `TimeEvent::TimeIsPositive': FAILED.
```

| No specific metrics for this system | 
 |---|

## Generation 3 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 513 | 0.00% |
| Multiplicities Errors | 0 | 209 | 0.00% |
| Invariants Errors | 0 | 8 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 26 | 0.00% |
| Invariants Errors (Not included on General) | 1 | 2 | 50.00% |

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (2) `TimeEvent::TimeIsPositive': FAILED.
```

| No specific metrics for this system | 
 |---|

# Generation 4
## Category baseline
```
!new StateMachine('sm_globalWebinarSession')
!sm_globalWebinarSession.name := 'globalWebinarSession'

!new State('st_web_lobby')
!st_web_lobby.name := 'lobby'
!new State('st_web_preflightChecks')
!st_web_preflightChecks.name := 'preflightChecks'
!new State('st_web_broadcasting')
!st_web_broadcasting.name := 'broadcasting'
!new State('st_web_audienceQnA')
!st_web_audienceQnA.name := 'audienceQnA'
!new State('st_web_intermission')
!st_web_intermission.name := 'intermission'
!new State('st_web_wrappingUp')
!st_web_wrappingUp.name := 'wrappingUp'
!new State('st_web_archived')
!st_web_archived.name := 'archived'

!insert (sm_globalWebinarSession, st_web_lobby) into StateMachineContainsStates
!insert (sm_globalWebinarSession, st_web_preflightChecks) into StateMachineContainsStates
!insert (sm_globalWebinarSession, st_web_broadcasting) into StateMachineContainsStates
!insert (sm_globalWebinarSession, st_web_audienceQnA) into StateMachineContainsStates
!insert (sm_globalWebinarSession, st_web_intermission) into StateMachineContainsStates
!insert (sm_globalWebinarSession, st_web_wrappingUp) into StateMachineContainsStates
!insert (sm_globalWebinarSession, st_web_archived) into StateMachineContainsStates

!insert (sm_globalWebinarSession, st_web_lobby) into StateMachineStartsStates

!new Transition('tr_web_autoPreflight')
!tr_web_autoPreflight.name := 'autoPreflight'
!new Transition('tr_web_abortNoHost')
!tr_web_abortNoHost.name := 'abortNoHost'
!new Transition('tr_web_startBroadcast')
!tr_web_startBroadcast.name := 'startBroadcast'
!new Transition('tr_web_periodicHeartbeat')
!tr_web_periodicHeartbeat.name := 'periodicHeartbeat'
!new Transition('tr_web_openQnA')
!tr_web_openQnA.name := 'openQnA'
!new Transition('tr_web_closeQnA')
!tr_web_closeQnA.name := 'closeQnA'
!new Transition('tr_web_startIntermission')
!tr_web_startIntermission.name := 'startIntermission'
!new Transition('tr_web_resumeAfterBreak')
!tr_web_resumeAfterBreak.name := 'resumeAfterBreak'
!new Transition('tr_web_endSession')
!tr_web_endSession.name := 'endSession'
!new Transition('tr_web_finalizeArchive')
!tr_web_finalizeArchive.name := 'finalizeArchive'

!insert (sm_globalWebinarSession, tr_web_autoPreflight) into StateMachineContainsTransitions
!insert (sm_globalWebinarSession, tr_web_abortNoHost) into StateMachineContainsTransitions
!insert (sm_globalWebinarSession, tr_web_startBroadcast) into StateMachineContainsTransitions
!insert (sm_globalWebinarSession, tr_web_periodicHeartbeat) into StateMachineContainsTransitions
!insert (sm_globalWebinarSession, tr_web_openQnA) into StateMachineContainsTransitions
!insert (sm_globalWebinarSession, tr_web_closeQnA) into StateMachineContainsTransitions
!insert (sm_globalWebinarSession, tr_web_startIntermission) into StateMachineContainsTransitions
!insert (sm_globalWebinarSession, tr_web_resumeAfterBreak) into StateMachineContainsTransitions
!insert (sm_globalWebinarSession, tr_web_endSession) into StateMachineContainsTransitions
!insert (sm_globalWebinarSession, tr_web_finalizeArchive) into StateMachineContainsTransitions

!insert (st_web_lobby, tr_web_autoPreflight) into StateTransition
!insert (tr_web_autoPreflight, st_web_preflightChecks) into TransitionState

!insert (st_web_lobby, tr_web_abortNoHost) into StateTransition
!insert (tr_web_abortNoHost, st_web_archived) into TransitionState

!insert (st_web_preflightChecks, tr_web_startBroadcast) into StateTransition
!insert (tr_web_startBroadcast, st_web_broadcasting) into TransitionState

!insert (st_web_broadcasting, tr_web_periodicHeartbeat) into StateTransition
!insert (tr_web_periodicHeartbeat, st_web_broadcasting) into TransitionState

!insert (st_web_broadcasting, tr_web_openQnA) into StateTransition
!insert (tr_web_openQnA, st_web_audienceQnA) into TransitionState

!insert (st_web_audienceQnA, tr_web_closeQnA) into StateTransition
!insert (tr_web_closeQnA, st_web_broadcasting) into TransitionState

!insert (st_web_broadcasting, tr_web_startIntermission) into StateTransition
!insert (tr_web_startIntermission, st_web_intermission) into TransitionState

!insert (st_web_intermission, tr_web_resumeAfterBreak) into StateTransition
!insert (tr_web_resumeAfterBreak, st_web_broadcasting) into TransitionState

!insert (st_web_broadcasting, tr_web_endSession) into StateTransition
!insert (tr_web_endSession, st_web_wrappingUp) into TransitionState

!insert (st_web_wrappingUp, tr_web_finalizeArchive) into StateTransition
!insert (tr_web_finalizeArchive, st_web_archived) into TransitionState

!new TimeEvent('te_web_t_autoPreflight')
!te_web_t_autoPreflight.time := 300
!insert (tr_web_autoPreflight, te_web_t_autoPreflight) into TransitionContainsEvents

!new TimeEvent('te_web_t_abortNoHost')
!te_web_t_abortNoHost.time := 1800
!insert (tr_web_abortNoHost, te_web_t_abortNoHost) into TransitionContainsEvents

!new TimeEvent('te_web_t_startBroadcast')
!te_web_t_startBroadcast.time := 120
!insert (tr_web_startBroadcast, te_web_t_startBroadcast) into TransitionContainsEvents

!new TimeEvent('te_web_t_periodicHeartbeat')
!te_web_t_periodicHeartbeat.time := 60
!insert (tr_web_periodicHeartbeat, te_web_t_periodicHeartbeat) into TransitionContainsEvents

!new TimeEvent('te_web_t_openQnA')
!te_web_t_openQnA.time := 900
!insert (tr_web_openQnA, te_web_t_openQnA) into TransitionContainsEvents

!new TimeEvent('te_web_t_closeQnA')
!te_web_t_closeQnA.time := 600
!insert (tr_web_closeQnA, te_web_t_closeQnA) into TransitionContainsEvents

!new TimeEvent('te_web_t_startIntermission')
!te_web_t_startIntermission.time := 2700
!insert (tr_web_startIntermission, te_web_t_startIntermission) into TransitionContainsEvents

!new TimeEvent('te_web_t_resumeAfterBreak')
!te_web_t_resumeAfterBreak.time := 600
!insert (tr_web_resumeAfterBreak, te_web_t_resumeAfterBreak) into TransitionContainsEvents

!new TimeEvent('te_web_t_endSession')
!te_web_t_endSession.time := 3600
!insert (tr_web_endSession, te_web_t_endSession) into TransitionContainsEvents

!new TimeEvent('te_web_t_finalizeArchive')
!te_web_t_finalizeArchive.time := 180
!insert (tr_web_finalizeArchive, te_web_t_finalizeArchive) into TransitionContainsEvents
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 104 | 0.00% |
| Multiplicities Errors | 0 | 48 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

## Category boundary
```
!new StateMachine('sm_saoPauloCarnaval')
!sm_saoPauloCarnaval.name := 'sãoPauloCarnaval'

!new State('st_carn_concentracao')
!st_carn_concentracao.name := 'concentração'
!new State('st_carn_setorA')
!st_carn_setorA.name := 'setorA'
!new State('st_carn_setorB')
!st_carn_setorB.name := 'setorB'
!new State('st_carn_setorC')
!st_carn_setorC.name := 'setorC'
!new State('st_carn_apuracao')
!st_carn_apuracao.name := 'apuração'
!new State('st_carn_vipLounge')
!st_carn_vipLounge.name := 'vipLounge'

!insert (sm_saoPauloCarnaval, st_carn_concentracao) into StateMachineContainsStates
!insert (sm_saoPauloCarnaval, st_carn_setorA) into StateMachineContainsStates
!insert (sm_saoPauloCarnaval, st_carn_setorB) into StateMachineContainsStates
!insert (sm_saoPauloCarnaval, st_carn_setorC) into StateMachineContainsStates
!insert (sm_saoPauloCarnaval, st_carn_apuracao) into StateMachineContainsStates
!insert (sm_saoPauloCarnaval, st_carn_vipLounge) into StateMachineContainsStates

!insert (sm_saoPauloCarnaval, st_carn_concentracao) into StateMachineStartsStates

!new Transition('tr_carn_abrirPortoesA')
!tr_carn_abrirPortoesA.name := 'abrirPortoesA'
!new Transition('tr_carn_abrirPortoesAextra')
!tr_carn_abrirPortoesAextra.name := 'abrirPortoesAextra'
!new Transition('tr_carn_abrirPortoesB')
!tr_carn_abrirPortoesB.name := 'abrirPortoesB'
!new Transition('tr_carn_abrirPortoesC')
!tr_carn_abrirPortoesC.name := 'abrirPortoesC'
!new Transition('tr_carn_encerrarEIrApuracao')
!tr_carn_encerrarEIrApuracao.name := 'encerrarEIrApuração'
!new Transition('tr_carn_desfileAConcluido')
!tr_carn_desfileAConcluido.name := 'desfileAConcluido'
!new Transition('tr_carn_desfileBConcluido')
!tr_carn_desfileBConcluido.name := 'desfileBConcluido'
!new Transition('tr_carn_desfileCConcluido')
!tr_carn_desfileCConcluido.name := 'desfileCConcluido'

!insert (sm_saoPauloCarnaval, tr_carn_abrirPortoesA) into StateMachineContainsTransitions
!insert (sm_saoPauloCarnaval, tr_carn_abrirPortoesAextra) into StateMachineContainsTransitions
!insert (sm_saoPauloCarnaval, tr_carn_abrirPortoesB) into StateMachineContainsTransitions
!insert (sm_saoPauloCarnaval, tr_carn_abrirPortoesC) into StateMachineContainsTransitions
!insert (sm_saoPauloCarnaval, tr_carn_encerrarEIrApuracao) into StateMachineContainsTransitions
!insert (sm_saoPauloCarnaval, tr_carn_desfileAConcluido) into StateMachineContainsTransitions
!insert (sm_saoPauloCarnaval, tr_carn_desfileBConcluido) into StateMachineContainsTransitions
!insert (sm_saoPauloCarnaval, tr_carn_desfileCConcluido) into StateMachineContainsTransitions

!insert (st_carn_concentracao, tr_carn_abrirPortoesA) into StateTransition
!insert (tr_carn_abrirPortoesA, st_carn_setorA) into TransitionState

!insert (st_carn_concentracao, tr_carn_abrirPortoesAextra) into StateTransition
!insert (tr_carn_abrirPortoesAextra, st_carn_setorA) into TransitionState

!insert (st_carn_concentracao, tr_carn_abrirPortoesB) into StateTransition
!insert (tr_carn_abrirPortoesB, st_carn_setorB) into TransitionState

!insert (st_carn_concentracao, tr_carn_abrirPortoesC) into StateTransition
!insert (tr_carn_abrirPortoesC, st_carn_setorC) into TransitionState

!insert (st_carn_concentracao, tr_carn_encerrarEIrApuracao) into StateTransition
!insert (tr_carn_encerrarEIrApuracao, st_carn_apuracao) into TransitionState

!insert (st_carn_setorA, tr_carn_desfileAConcluido) into StateTransition
!insert (tr_carn_desfileAConcluido, st_carn_apuracao) into TransitionState

!insert (st_carn_setorB, tr_carn_desfileBConcluido) into StateTransition
!insert (tr_carn_desfileBConcluido, st_carn_apuracao) into TransitionState

!insert (st_carn_setorC, tr_carn_desfileCConcluido) into StateTransition
!insert (tr_carn_desfileCConcluido, st_carn_apuracao) into TransitionState

!new TimeEvent('te_carn_t_abrirPortoesA')
!te_carn_t_abrirPortoesA.time := 1
!insert (tr_carn_abrirPortoesA, te_carn_t_abrirPortoesA) into TransitionContainsEvents

!new TimeEvent('te_carn_t_abrirPortoesAextra')
!te_carn_t_abrirPortoesAextra.time := 1
!insert (tr_carn_abrirPortoesAextra, te_carn_t_abrirPortoesAextra) into TransitionContainsEvents

!new TimeEvent('te_carn_t_abrirPortoesB')
!te_carn_t_abrirPortoesB.time := 1
!insert (tr_carn_abrirPortoesB, te_carn_t_abrirPortoesB) into TransitionContainsEvents

!new TimeEvent('te_carn_t_abrirPortoesC')
!te_carn_t_abrirPortoesC.time := 1
!insert (tr_carn_abrirPortoesC, te_carn_t_abrirPortoesC) into TransitionContainsEvents

!new TimeEvent('te_carn_t_encerrarEIrApuracao')
!te_carn_t_encerrarEIrApuracao.time := 1
!insert (tr_carn_encerrarEIrApuracao, te_carn_t_encerrarEIrApuracao) into TransitionContainsEvents

!new TimeEvent('te_carn_t_desfileAConcluido')
!te_carn_t_desfileAConcluido.time := 1
!insert (tr_carn_desfileAConcluido, te_carn_t_desfileAConcluido) into TransitionContainsEvents

!new TimeEvent('te_carn_t_desfileBConcluido')
!te_carn_t_desfileBConcluido.time := 1
!insert (tr_carn_desfileBConcluido, te_carn_t_desfileBConcluido) into TransitionContainsEvents

!new TimeEvent('te_carn_t_desfileCConcluido')
!te_carn_t_desfileCConcluido.time := 1
!insert (tr_carn_desfileCConcluido, te_carn_t_desfileCConcluido) into TransitionContainsEvents
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 85 | 0.00% |
| Multiplicities Errors | 0 | 39 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

## Category complex
```
!new StateMachine('sm_tromsoArcticDroneMissionSM')
!sm_tromsoArcticDroneMissionSM.name := 'tromsoArcticDroneMissionSM'

!new State('st_tromso_hangarIdle')
!st_tromso_hangarIdle.name := 'hangarIdle'
!new State('st_tromso_preflightCheck')
!st_tromso_preflightCheck.name := 'preflightCheck'
!new State('st_tromso_deice')
!st_tromso_deice.name := 'deice'
!new State('st_tromso_sensorCalibrate')
!st_tromso_sensorCalibrate.name := 'sensorCalibrate'
!new State('st_tromso_motorWarmup')
!st_tromso_motorWarmup.name := 'motorWarmup'
!new State('st_tromso_takeoff')
!st_tromso_takeoff.name := 'takeoff'
!new State('st_tromso_climb')
!st_tromso_climb.name := 'climb'
!new State('st_tromso_surveyRun')
!st_tromso_surveyRun.name := 'surveyRun'
!new State('st_tromso_returnLeg')
!st_tromso_returnLeg.name := 'returnLeg'
!new State('st_tromso_landing')
!st_tromso_landing.name := 'landing'
!new State('st_tromso_dataOffload')
!st_tromso_dataOffload.name := 'dataOffload'
!new State('st_tromso_batteryCharge')
!st_tromso_batteryCharge.name := 'batteryCharge'
!new State('st_tromso_fault')
!st_tromso_fault.name := 'fault'
!new State('st_tromso_recovery')
!st_tromso_recovery.name := 'recovery'

!insert (sm_tromsoArcticDroneMissionSM, st_tromso_hangarIdle) into StateMachineContainsStates
!insert (sm_tromsoArcticDroneMissionSM, st_tromso_preflightCheck) into StateMachineContainsStates
!insert (sm_tromsoArcticDroneMissionSM, st_tromso_deice) into StateMachineContainsStates
!insert (sm_tromsoArcticDroneMissionSM, st_tromso_sensorCalibrate) into StateMachineContainsStates
!insert (sm_tromsoArcticDroneMissionSM, st_tromso_motorWarmup) into StateMachineContainsStates
!insert (sm_tromsoArcticDroneMissionSM, st_tromso_takeoff) into StateMachineContainsStates
!insert (sm_tromsoArcticDroneMissionSM, st_tromso_climb) into StateMachineContainsStates
!insert (sm_tromsoArcticDroneMissionSM, st_tromso_surveyRun) into StateMachineContainsStates
!insert (sm_tromsoArcticDroneMissionSM, st_tromso_returnLeg) into StateMachineContainsStates
!insert (sm_tromsoArcticDroneMissionSM, st_tromso_landing) into StateMachineContainsStates
!insert (sm_tromsoArcticDroneMissionSM, st_tromso_dataOffload) into StateMachineContainsStates
!insert (sm_tromsoArcticDroneMissionSM, st_tromso_batteryCharge) into StateMachineContainsStates
!insert (sm_tromsoArcticDroneMissionSM, st_tromso_fault) into StateMachineContainsStates
!insert (sm_tromsoArcticDroneMissionSM, st_tromso_recovery) into StateMachineContainsStates

!insert (sm_tromsoArcticDroneMissionSM, st_tromso_hangarIdle) into StateMachineStartsStates

!new Transition('tr_tromso_scheduledLaunchWindow')
!tr_tromso_scheduledLaunchWindow.name := 'scheduledLaunchWindow'
!new Transition('tr_tromso_preflightPassed')
!tr_tromso_preflightPassed.name := 'preflightPassed'
!new Transition('tr_tromso_extremeColdDeiceRequest')
!tr_tromso_extremeColdDeiceRequest.name := 'extremeColdDeiceRequest'
!new Transition('tr_tromso_deiceComplete')
!tr_tromso_deiceComplete.name := 'deiceComplete'
!new Transition('tr_tromso_calibrationComplete')
!tr_tromso_calibrationComplete.name := 'calibrationComplete'
!new Transition('tr_tromso_warmupComplete')
!tr_tromso_warmupComplete.name := 'warmupComplete'
!new Transition('tr_tromso_motorFaultAbort')
!tr_tromso_motorFaultAbort.name := 'motorFaultAbort'
!new Transition('tr_tromso_liftoffConfirmed')
!tr_tromso_liftoffConfirmed.name := 'liftoffConfirmed'
!new Transition('tr_tromso_takeoffInstabilityAbort')
!tr_tromso_takeoffInstabilityAbort.name := 'takeoffInstabilityAbort'
!new Transition('tr_tromso_reachSurveyAltitude')
!tr_tromso_reachSurveyAltitude.name := 'reachSurveyAltitude'
!new Transition('tr_tromso_gpsFaultAbort')
!tr_tromso_gpsFaultAbort.name := 'gpsFaultAbort'
!new Transition('tr_tromso_surveyWaypointPulse')
!tr_tromso_surveyWaypointPulse.name := 'surveyWaypointPulse'
!new Transition('tr_tromso_batteryLowReturn')
!tr_tromso_batteryLowReturn.name := 'batteryLowReturn'
!new Transition('tr_tromso_linkLostAbort')
!tr_tromso_linkLostAbort.name := 'linkLostAbort'
!new Transition('tr_tromso_returnArriveAtHomePoint')
!tr_tromso_returnArriveAtHomePoint.name := 'returnArriveAtHomePoint'
!new Transition('tr_tromso_touchdownAndDisarm')
!tr_tromso_touchdownAndDisarm.name := 'touchdownAndDisarm'
!new Transition('tr_tromso_offloadFinished')
!tr_tromso_offloadFinished.name := 'offloadFinished'
!new Transition('tr_tromso_chargeComplete')
!tr_tromso_chargeComplete.name := 'chargeComplete'
!new Transition('tr_tromso_faultHandledEnterRecovery')
!tr_tromso_faultHandledEnterRecovery.name := 'faultHandledEnterRecovery'
!new Transition('tr_tromso_recoveryResetToIdle')
!tr_tromso_recoveryResetToIdle.name := 'recoveryResetToIdle'

!insert (sm_tromsoArcticDroneMissionSM, tr_tromso_scheduledLaunchWindow) into StateMachineContainsTransitions
!insert (sm_tromsoArcticDroneMissionSM, tr_tromso_preflightPassed) into StateMachineContainsTransitions
!insert (sm_tromsoArcticDroneMissionSM, tr_tromso_extremeColdDeiceRequest) into StateMachineContainsTransitions
!insert (sm_tromsoArcticDroneMissionSM, tr_tromso_deiceComplete) into StateMachineContainsTransitions
!insert (sm_tromsoArcticDroneMissionSM, tr_tromso_calibrationComplete) into StateMachineContainsTransitions
!insert (sm_tromsoArcticDroneMissionSM, tr_tromso_warmupComplete) into StateMachineContainsTransitions
!insert (sm_tromsoArcticDroneMissionSM, tr_tromso_motorFaultAbort) into StateMachineContainsTransitions
!insert (sm_tromsoArcticDroneMissionSM, tr_tromso_liftoffConfirmed) into StateMachineContainsTransitions
!insert (sm_tromsoArcticDroneMissionSM, tr_tromso_takeoffInstabilityAbort) into StateMachineContainsTransitions
!insert (sm_tromsoArcticDroneMissionSM, tr_tromso_reachSurveyAltitude) into StateMachineContainsTransitions
!insert (sm_tromsoArcticDroneMissionSM, tr_tromso_gpsFaultAbort) into StateMachineContainsTransitions
!insert (sm_tromsoArcticDroneMissionSM, tr_tromso_surveyWaypointPulse) into StateMachineContainsTransitions
!insert (sm_tromsoArcticDroneMissionSM, tr_tromso_batteryLowReturn) into StateMachineContainsTransitions
!insert (sm_tromsoArcticDroneMissionSM, tr_tromso_linkLostAbort) into StateMachineContainsTransitions
!insert (sm_tromsoArcticDroneMissionSM, tr_tromso_returnArriveAtHomePoint) into StateMachineContainsTransitions
!insert (sm_tromsoArcticDroneMissionSM, tr_tromso_touchdownAndDisarm) into StateMachineContainsTransitions
!insert (sm_tromsoArcticDroneMissionSM, tr_tromso_offloadFinished) into StateMachineContainsTransitions
!insert (sm_tromsoArcticDroneMissionSM, tr_tromso_chargeComplete) into StateMachineContainsTransitions
!insert (sm_tromsoArcticDroneMissionSM, tr_tromso_faultHandledEnterRecovery) into StateMachineContainsTransitions
!insert (sm_tromsoArcticDroneMissionSM, tr_tromso_recoveryResetToIdle) into StateMachineContainsTransitions

!insert (st_tromso_hangarIdle, tr_tromso_scheduledLaunchWindow) into StateTransition
!insert (tr_tromso_scheduledLaunchWindow, st_tromso_preflightCheck) into TransitionState

!insert (st_tromso_preflightCheck, tr_tromso_preflightPassed) into StateTransition
!insert (tr_tromso_preflightPassed, st_tromso_sensorCalibrate) into TransitionState

!insert (st_tromso_preflightCheck, tr_tromso_extremeColdDeiceRequest) into StateTransition
!insert (tr_tromso_extremeColdDeiceRequest, st_tromso_deice) into TransitionState

!insert (st_tromso_deice, tr_tromso_deiceComplete) into StateTransition
!insert (tr_tromso_deiceComplete, st_tromso_sensorCalibrate) into TransitionState

!insert (st_tromso_sensorCalibrate, tr_tromso_calibrationComplete) into StateTransition
!insert (tr_tromso_calibrationComplete, st_tromso_motorWarmup) into TransitionState

!insert (st_tromso_motorWarmup, tr_tromso_warmupComplete) into StateTransition
!insert (tr_tromso_warmupComplete, st_tromso_takeoff) into TransitionState

!insert (st_tromso_motorWarmup, tr_tromso_motorFaultAbort) into StateTransition
!insert (tr_tromso_motorFaultAbort, st_tromso_fault) into TransitionState

!insert (st_tromso_takeoff, tr_tromso_liftoffConfirmed) into StateTransition
!insert (tr_tromso_liftoffConfirmed, st_tromso_climb) into TransitionState

!insert (st_tromso_takeoff, tr_tromso_takeoffInstabilityAbort) into StateTransition
!insert (tr_tromso_takeoffInstabilityAbort, st_tromso_fault) into TransitionState

!insert (st_tromso_climb, tr_tromso_reachSurveyAltitude) into StateTransition
!insert (tr_tromso_reachSurveyAltitude, st_tromso_surveyRun) into TransitionState

!insert (st_tromso_climb, tr_tromso_gpsFaultAbort) into StateTransition
!insert (tr_tromso_gpsFaultAbort, st_tromso_fault) into TransitionState

!insert (st_tromso_surveyRun, tr_tromso_surveyWaypointPulse) into StateTransition
!insert (tr_tromso_surveyWaypointPulse, st_tromso_surveyRun) into TransitionState

!insert (st_tromso_surveyRun, tr_tromso_batteryLowReturn) into StateTransition
!insert (tr_tromso_batteryLowReturn, st_tromso_returnLeg) into TransitionState

!insert (st_tromso_surveyRun, tr_tromso_linkLostAbort) into StateTransition
!insert (tr_tromso_linkLostAbort, st_tromso_fault) into TransitionState

!insert (st_tromso_returnLeg, tr_tromso_returnArriveAtHomePoint) into StateTransition
!insert (tr_tromso_returnArriveAtHomePoint, st_tromso_landing) into TransitionState

!insert (st_tromso_landing, tr_tromso_touchdownAndDisarm) into StateTransition
!insert (tr_tromso_touchdownAndDisarm, st_tromso_dataOffload) into TransitionState

!insert (st_tromso_dataOffload, tr_tromso_offloadFinished) into StateTransition
!insert (tr_tromso_offloadFinished, st_tromso_batteryCharge) into TransitionState

!insert (st_tromso_batteryCharge, tr_tromso_chargeComplete) into StateTransition
!insert (tr_tromso_chargeComplete, st_tromso_hangarIdle) into TransitionState

!insert (st_tromso_fault, tr_tromso_faultHandledEnterRecovery) into StateTransition
!insert (tr_tromso_faultHandledEnterRecovery, st_tromso_recovery) into TransitionState

!insert (st_tromso_recovery, tr_tromso_recoveryResetToIdle) into StateTransition
!insert (tr_tromso_recoveryResetToIdle, st_tromso_hangarIdle) into TransitionState

!new TimeEvent('te_tromso_DTE1')
!te_tromso_DTE1.time := 300
!insert (tr_tromso_scheduledLaunchWindow, te_tromso_DTE1) into TransitionContainsEvents

!new TimeEvent('te_tromso_DTE2')
!te_tromso_DTE2.time := 120
!insert (tr_tromso_preflightPassed, te_tromso_DTE2) into TransitionContainsEvents

!new TimeEvent('te_tromso_DTE3')
!te_tromso_DTE3.time := 1
!insert (tr_tromso_extremeColdDeiceRequest, te_tromso_DTE3) into TransitionContainsEvents

!new TimeEvent('te_tromso_DTE4')
!te_tromso_DTE4.time := 240
!insert (tr_tromso_deiceComplete, te_tromso_DTE4) into TransitionContainsEvents

!new TimeEvent('te_tromso_DTE5')
!te_tromso_DTE5.time := 90
!insert (tr_tromso_calibrationComplete, te_tromso_DTE5) into TransitionContainsEvents

!new TimeEvent('te_tromso_DTE6')
!te_tromso_DTE6.time := 60
!insert (tr_tromso_warmupComplete, te_tromso_DTE6) into TransitionContainsEvents

!new TimeEvent('te_tromso_DTE7')
!te_tromso_DTE7.time := 1
!insert (tr_tromso_motorFaultAbort, te_tromso_DTE7) into TransitionContainsEvents

!new TimeEvent('te_tromso_DTE8')
!te_tromso_DTE8.time := 15
!insert (tr_tromso_liftoffConfirmed, te_tromso_DTE8) into TransitionContainsEvents

!new TimeEvent('te_tromso_DTE9')
!te_tromso_DTE9.time := 1
!insert (tr_tromso_takeoffInstabilityAbort, te_tromso_DTE9) into TransitionContainsEvents

!new TimeEvent('te_tromso_DTE10')
!te_tromso_DTE10.time := 180
!insert (tr_tromso_reachSurveyAltitude, te_tromso_DTE10) into TransitionContainsEvents

!new TimeEvent('te_tromso_DTE11')
!te_tromso_DTE11.time := 1
!insert (tr_tromso_gpsFaultAbort, te_tromso_DTE11) into TransitionContainsEvents

!new TimeEvent('te_tromso_DTE12')
!te_tromso_DTE12.time := 600
!insert (tr_tromso_surveyWaypointPulse, te_tromso_DTE12) into TransitionContainsEvents

!new TimeEvent('te_tromso_DTE13')
!te_tromso_DTE13.time := 1
!insert (tr_tromso_batteryLowReturn, te_tromso_DTE13) into TransitionContainsEvents

!new TimeEvent('te_tromso_DTE14')
!te_tromso_DTE14.time := 1
!insert (tr_tromso_linkLostAbort, te_tromso_DTE14) into TransitionContainsEvents

!new TimeEvent('te_tromso_DTE15')
!te_tromso_DTE15.time := 240
!insert (tr_tromso_returnArriveAtHomePoint, te_tromso_DTE15) into TransitionContainsEvents

!new TimeEvent('te_tromso_DTE16')
!te_tromso_DTE16.time := 30
!insert (tr_tromso_touchdownAndDisarm, te_tromso_DTE16) into TransitionContainsEvents

!new TimeEvent('te_tromso_DTE17')
!te_tromso_DTE17.time := 900
!insert (tr_tromso_offloadFinished, te_tromso_DTE17) into TransitionContainsEvents

!new TimeEvent('te_tromso_DTE18')
!te_tromso_DTE18.time := 5400
!insert (tr_tromso_chargeComplete, te_tromso_DTE18) into TransitionContainsEvents

!new TimeEvent('te_tromso_DTE19')
!te_tromso_DTE19.time := 600
!insert (tr_tromso_faultHandledEnterRecovery, te_tromso_DTE19) into TransitionContainsEvents

!new TimeEvent('te_tromso_DTE20')
!te_tromso_DTE20.time := 60
!insert (tr_tromso_recoveryResetToIdle, te_tromso_DTE20) into TransitionContainsEvents
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 205 | 0.00% |
| Multiplicities Errors | 0 | 95 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

## Category edge
```
!new StateMachine('sm_funnelToSilence')
!sm_funnelToSilence.name := 'funnelToSilence'

!new State('st_funnel_basla')
!st_funnel_basla.name := 'başla'
!new State('st_funnel_arbol')
!st_funnel_arbol.name := 'árbol'
!new State('st_funnel_uber')
!st_funnel_uber.name := 'über'
!new State('st_funnel_mod')
!st_funnel_mod.name := 'mōd'
!new State('st_funnel_tokyoKanji')
!st_funnel_tokyoKanji.name := '東京'
!new State('st_funnel_silence')
!st_funnel_silence.name := 'silence'

!insert (sm_funnelToSilence, st_funnel_basla) into StateMachineContainsStates
!insert (sm_funnelToSilence, st_funnel_arbol) into StateMachineContainsStates
!insert (sm_funnelToSilence, st_funnel_uber) into StateMachineContainsStates
!insert (sm_funnelToSilence, st_funnel_mod) into StateMachineContainsStates
!insert (sm_funnelToSilence, st_funnel_tokyoKanji) into StateMachineContainsStates
!insert (sm_funnelToSilence, st_funnel_silence) into StateMachineContainsStates

!insert (sm_funnelToSilence, st_funnel_basla) into StateMachineStartsStates

!new Transition('tr_funnel_fromBaslaToSilence')
!tr_funnel_fromBaslaToSilence.name := 'fromBaslaToSilence'
!new Transition('tr_funnel_fromArbolToSilence')
!tr_funnel_fromArbolToSilence.name := 'fromArbolToSilence'
!new Transition('tr_funnel_fromUberToSilence')
!tr_funnel_fromUberToSilence.name := 'fromUberToSilence'
!new Transition('tr_funnel_fromModToSilence')
!tr_funnel_fromModToSilence.name := 'fromModToSilence'
!new Transition('tr_funnel_fromTokyoToSilence')
!tr_funnel_fromTokyoToSilence.name := 'fromTokyoToSilence'

!insert (sm_funnelToSilence, tr_funnel_fromBaslaToSilence) into StateMachineContainsTransitions
!insert (sm_funnelToSilence, tr_funnel_fromArbolToSilence) into StateMachineContainsTransitions
!insert (sm_funnelToSilence, tr_funnel_fromUberToSilence) into StateMachineContainsTransitions
!insert (sm_funnelToSilence, tr_funnel_fromModToSilence) into StateMachineContainsTransitions
!insert (sm_funnelToSilence, tr_funnel_fromTokyoToSilence) into StateMachineContainsTransitions

!insert (st_funnel_basla, tr_funnel_fromBaslaToSilence) into StateTransition
!insert (tr_funnel_fromBaslaToSilence, st_funnel_silence) into TransitionState

!insert (st_funnel_arbol, tr_funnel_fromArbolToSilence) into StateTransition
!insert (tr_funnel_fromArbolToSilence, st_funnel_silence) into TransitionState

!insert (st_funnel_uber, tr_funnel_fromUberToSilence) into StateTransition
!insert (tr_funnel_fromUberToSilence, st_funnel_silence) into TransitionState

!insert (st_funnel_mod, tr_funnel_fromModToSilence) into StateTransition
!insert (tr_funnel_fromModToSilence, st_funnel_silence) into TransitionState

!insert (st_funnel_tokyoKanji, tr_funnel_fromTokyoToSilence) into StateTransition
!insert (tr_funnel_fromTokyoToSilence, st_funnel_silence) into TransitionState

!new TimeEvent('te_funnel_te_1')
!te_funnel_te_1.time := 7
!insert (tr_funnel_fromBaslaToSilence, te_funnel_te_1) into TransitionContainsEvents

!new TimeEvent('te_funnel_te_2')
!te_funnel_te_2.time := 11
!insert (tr_funnel_fromArbolToSilence, te_funnel_te_2) into TransitionContainsEvents

!new TimeEvent('te_funnel_te_3')
!te_funnel_te_3.time := 13
!insert (tr_funnel_fromUberToSilence, te_funnel_te_3) into TransitionContainsEvents

!new TimeEvent('te_funnel_te_4')
!te_funnel_te_4.time := 17
!insert (tr_funnel_fromModToSilence, te_funnel_te_4) into TransitionContainsEvents

!new TimeEvent('te_funnel_te_5')
!te_funnel_te_5.time := 19
!insert (tr_funnel_fromTokyoToSilence, te_funnel_te_5) into TransitionContainsEvents
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 61 | 0.00% |
| Multiplicities Errors | 0 | 27 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

## Category invalid
```
!new StateMachine('sm_greenhouseIrrigationZA')
!sm_greenhouseIrrigationZA.name := 'greenhouseIrrigationZA'

!new State('st_gh_idle')
!st_gh_idle.name := 'idle'
!new State('st_gh_watering')
!st_gh_watering.name := 'watering'
!new State('st_gh_draining')
!st_gh_draining.name := 'draining'
!new State('st_gh_rainHold')
!st_gh_rainHold.name := 'rainHold'

!insert (sm_greenhouseIrrigationZA, st_gh_idle) into StateMachineContainsStates
!insert (sm_greenhouseIrrigationZA, st_gh_watering) into StateMachineContainsStates
!insert (sm_greenhouseIrrigationZA, st_gh_draining) into StateMachineContainsStates
!insert (sm_greenhouseIrrigationZA, st_gh_rainHold) into StateMachineContainsStates

!insert (sm_greenhouseIrrigationZA, st_gh_idle) into StateMachineStartsStates

!new Transition('tr_gh_tStartWatering')
!tr_gh_tStartWatering.name := 'tStartWatering'
!new Transition('tr_gh_tWateringToDraining')
!tr_gh_tWateringToDraining.name := 'tWateringToDraining'
!new Transition('tr_gh_tDrainingToIdle')
!tr_gh_tDrainingToIdle.name := 'tDrainingToIdle'
!new Transition('tr_gh_tIdleToRainHold')
!tr_gh_tIdleToRainHold.name := 'tIdleToRainHold'
!new Transition('tr_gh_tRainHoldToIdle')
!tr_gh_tRainHoldToIdle.name := 'tRainHoldToIdle'

!insert (sm_greenhouseIrrigationZA, tr_gh_tStartWatering) into StateMachineContainsTransitions
!insert (sm_greenhouseIrrigationZA, tr_gh_tWateringToDraining) into StateMachineContainsTransitions
!insert (sm_greenhouseIrrigationZA, tr_gh_tDrainingToIdle) into StateMachineContainsTransitions
!insert (sm_greenhouseIrrigationZA, tr_gh_tIdleToRainHold) into StateMachineContainsTransitions
!insert (sm_greenhouseIrrigationZA, tr_gh_tRainHoldToIdle) into StateMachineContainsTransitions

!insert (st_gh_idle, tr_gh_tStartWatering) into StateTransition
!insert (tr_gh_tStartWatering, st_gh_watering) into TransitionState

!insert (st_gh_watering, tr_gh_tWateringToDraining) into StateTransition
!insert (tr_gh_tWateringToDraining, st_gh_draining) into TransitionState

!insert (st_gh_draining, tr_gh_tDrainingToIdle) into StateTransition
!insert (tr_gh_tDrainingToIdle, st_gh_idle) into TransitionState

!insert (st_gh_idle, tr_gh_tIdleToRainHold) into StateTransition
!insert (tr_gh_tIdleToRainHold, st_gh_rainHold) into TransitionState

!insert (st_gh_rainHold, tr_gh_tRainHoldToIdle) into StateTransition
!insert (tr_gh_tRainHoldToIdle, st_gh_idle) into TransitionState

!new TimeEvent('te_gh_startWatering_morning')
!te_gh_startWatering_morning.time := 360
!insert (tr_gh_tStartWatering, te_gh_startWatering_morning) into TransitionContainsEvents

!new TimeEvent('te_gh_startWatering_evening')
!te_gh_startWatering_evening.time := 1080
!insert (tr_gh_tStartWatering, te_gh_startWatering_evening) into TransitionContainsEvents

!new TimeEvent('te_gh_tWateringToDraining')
!te_gh_tWateringToDraining.time := 15
!insert (tr_gh_tWateringToDraining, te_gh_tWateringToDraining) into TransitionContainsEvents

!new TimeEvent('te_gh_tDrainingToIdle')
!te_gh_tDrainingToIdle.time := 3
!insert (tr_gh_tDrainingToIdle, te_gh_tDrainingToIdle) into TransitionContainsEvents

!new TimeEvent('te_gh_tIdleToRainHold')
!te_gh_tIdleToRainHold.time := 5
!insert (tr_gh_tIdleToRainHold, te_gh_tIdleToRainHold) into TransitionContainsEvents

!new TimeEvent('te_gh_tRainHoldToIdle')
!te_gh_tRainHoldToIdle.time := 60
!insert (tr_gh_tRainHoldToIdle, te_gh_tRainHoldToIdle) into TransitionContainsEvents
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 26 | 3.85% |
| Invariants Errors (Not included on General) | 0 | 2 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `TransitionContainsEvents':
  Object `tr_gh_tStartWatering' of class `Transition' is connected to 2 objects of class `TimeEvent'
  at association end `timer' but the multiplicity is specified as `1'.
```

| No specific metrics for this system | 
 |---|

## Generation 4 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 513 | 0.00% |
| Multiplicities Errors | 0 | 209 | 0.00% |
| Invariants Errors | 0 | 8 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 26 | 3.85% |
| Invariants Errors (Not included on General) | 0 | 2 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `TransitionContainsEvents':
  Object `tr_gh_tStartWatering' of class `Transition' is connected to 2 objects of class `TimeEvent'
  at association end `timer' but the multiplicity is specified as `1'.
```

| No specific metrics for this system | 
 |---|

# Generation 5
## Category baseline
```
!new StateMachine('sm_subakIrrigationController')
!sm_subakIrrigationController.name := 'subakIrrigationController'

!new State('st_subak_sensing')
!st_subak_sensing.name := 'sensing'
!new State('st_subak_calculatingAllocation')
!st_subak_calculatingAllocation.name := 'calculatingAllocation'
!new State('st_subak_openingGates')
!st_subak_openingGates.name := 'openingGates'
!new State('st_subak_irrigating')
!st_subak_irrigating.name := 'irrigating'
!new State('st_subak_flushingCanals')
!st_subak_flushingCanals.name := 'flushingCanals'
!new State('st_subak_faultLockout')
!st_subak_faultLockout.name := 'faultLockout'

!insert (sm_subakIrrigationController, st_subak_sensing) into StateMachineContainsStates
!insert (sm_subakIrrigationController, st_subak_calculatingAllocation) into StateMachineContainsStates
!insert (sm_subakIrrigationController, st_subak_openingGates) into StateMachineContainsStates
!insert (sm_subakIrrigationController, st_subak_irrigating) into StateMachineContainsStates
!insert (sm_subakIrrigationController, st_subak_flushingCanals) into StateMachineContainsStates
!insert (sm_subakIrrigationController, st_subak_faultLockout) into StateMachineContainsStates

!insert (sm_subakIrrigationController, st_subak_sensing) into StateMachineStartsStates

!new Transition('tr_subak_periodicSample')
!tr_subak_periodicSample.name := 'periodicSample'
!new Transition('tr_subak_computeShare')
!tr_subak_computeShare.name := 'computeShare'
!new Transition('tr_subak_actuateGates')
!tr_subak_actuateGates.name := 'actuateGates'
!new Transition('tr_subak_beginIrrigation')
!tr_subak_beginIrrigation.name := 'beginIrrigation'
!new Transition('tr_subak_scheduledFlush')
!tr_subak_scheduledFlush.name := 'scheduledFlush'
!new Transition('tr_subak_finishFlush')
!tr_subak_finishFlush.name := 'finishFlush'
!new Transition('tr_subak_detectFault')
!tr_subak_detectFault.name := 'detectFault'
!new Transition('tr_subak_autoRecover')
!tr_subak_autoRecover.name := 'autoRecover'

!insert (sm_subakIrrigationController, tr_subak_periodicSample) into StateMachineContainsTransitions
!insert (sm_subakIrrigationController, tr_subak_computeShare) into StateMachineContainsTransitions
!insert (sm_subakIrrigationController, tr_subak_actuateGates) into StateMachineContainsTransitions
!insert (sm_subakIrrigationController, tr_subak_beginIrrigation) into StateMachineContainsTransitions
!insert (sm_subakIrrigationController, tr_subak_scheduledFlush) into StateMachineContainsTransitions
!insert (sm_subakIrrigationController, tr_subak_finishFlush) into StateMachineContainsTransitions
!insert (sm_subakIrrigationController, tr_subak_detectFault) into StateMachineContainsTransitions
!insert (sm_subakIrrigationController, tr_subak_autoRecover) into StateMachineContainsTransitions

!insert (st_subak_sensing, tr_subak_periodicSample) into StateTransition
!insert (tr_subak_periodicSample, st_subak_sensing) into TransitionState

!insert (st_subak_sensing, tr_subak_computeShare) into StateTransition
!insert (tr_subak_computeShare, st_subak_calculatingAllocation) into TransitionState

!insert (st_subak_calculatingAllocation, tr_subak_actuateGates) into StateTransition
!insert (tr_subak_actuateGates, st_subak_openingGates) into TransitionState

!insert (st_subak_openingGates, tr_subak_beginIrrigation) into StateTransition
!insert (tr_subak_beginIrrigation, st_subak_irrigating) into TransitionState

!insert (st_subak_irrigating, tr_subak_scheduledFlush) into StateTransition
!insert (tr_subak_scheduledFlush, st_subak_flushingCanals) into TransitionState

!insert (st_subak_flushingCanals, tr_subak_finishFlush) into StateTransition
!insert (tr_subak_finishFlush, st_subak_sensing) into TransitionState

!insert (st_subak_irrigating, tr_subak_detectFault) into StateTransition
!insert (tr_subak_detectFault, st_subak_faultLockout) into TransitionState

!insert (st_subak_faultLockout, tr_subak_autoRecover) into StateTransition
!insert (tr_subak_autoRecover, st_subak_sensing) into TransitionState

!new TimeEvent('te_subak_t_periodicSample')
!te_subak_t_periodicSample.time := 120
!insert (tr_subak_periodicSample, te_subak_t_periodicSample) into TransitionContainsEvents

!new TimeEvent('te_subak_t_computeShare')
!te_subak_t_computeShare.time := 30
!insert (tr_subak_computeShare, te_subak_t_computeShare) into TransitionContainsEvents

!new TimeEvent('te_subak_t_actuateGates')
!te_subak_t_actuateGates.time := 15
!insert (tr_subak_actuateGates, te_subak_t_actuateGates) into TransitionContainsEvents

!new TimeEvent('te_subak_t_beginIrrigation')
!te_subak_t_beginIrrigation.time := 10
!insert (tr_subak_beginIrrigation, te_subak_t_beginIrrigation) into TransitionContainsEvents

!new TimeEvent('te_subak_t_scheduledFlush')
!te_subak_t_scheduledFlush.time := 3600
!insert (tr_subak_scheduledFlush, te_subak_t_scheduledFlush) into TransitionContainsEvents

!new TimeEvent('te_subak_t_finishFlush')
!te_subak_t_finishFlush.time := 180
!insert (tr_subak_finishFlush, te_subak_t_finishFlush) into TransitionContainsEvents

!new TimeEvent('te_subak_t_detectFault')
!te_subak_t_detectFault.time := 5
!insert (tr_subak_detectFault, te_subak_t_detectFault) into TransitionContainsEvents

!new TimeEvent('te_subak_t_autoRecover')
!te_subak_t_autoRecover.time := 600
!insert (tr_subak_autoRecover, te_subak_t_autoRecover) into TransitionContainsEvents
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 85 | 0.00% |
| Multiplicities Errors | 0 | 39 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

## Category boundary
```
!new StateMachine('sm_lagosFerryBoarding')
!sm_lagosFerryBoarding.name := 'lagosFerryBoarding'

!new State('st_lagos_fila')
!st_lagos_fila.name := 'fila'
!new State('st_lagos_bilheteria')
!st_lagos_bilheteria.name := 'bilheteria'
!new State('st_lagos_embarque')
!st_lagos_embarque.name := 'embarque'
!new State('st_lagos_travessia')
!st_lagos_travessia.name := 'travessia'
!new State('st_lagos_chegada')
!st_lagos_chegada.name := 'chegada'

!insert (sm_lagosFerryBoarding, st_lagos_fila) into StateMachineContainsStates
!insert (sm_lagosFerryBoarding, st_lagos_bilheteria) into StateMachineContainsStates
!insert (sm_lagosFerryBoarding, st_lagos_embarque) into StateMachineContainsStates
!insert (sm_lagosFerryBoarding, st_lagos_travessia) into StateMachineContainsStates
!insert (sm_lagosFerryBoarding, st_lagos_chegada) into StateMachineContainsStates

!insert (sm_lagosFerryBoarding, st_lagos_fila) into StateMachineStartsStates

!new StateMachine('sm_icelandVolcanoAlert')
!sm_icelandVolcanoAlert.name := 'icelandVolcanoAlert'

!new State('st_iva_calm')
!st_iva_calm.name := 'calm'
!new State('st_iva_alert')
!st_iva_alert.name := 'alert'

!insert (sm_icelandVolcanoAlert, st_iva_calm) into StateMachineContainsStates
!insert (sm_icelandVolcanoAlert, st_iva_alert) into StateMachineContainsStates

!insert (sm_icelandVolcanoAlert, st_iva_calm) into StateMachineStartsStates

!new Transition('tr_iva_advisoryToAlert')
!tr_iva_advisoryToAlert.name := 'advisoryToAlert'
!new Transition('tr_iva_sensorSpikeToAlert')
!tr_iva_sensorSpikeToAlert.name := 'sensorSpikeToAlert'
!new Transition('tr_iva_manualSwitchToAlert')
!tr_iva_manualSwitchToAlert.name := 'manualSwitchToAlert'
!new Transition('tr_iva_falseAlarmToCalm')
!tr_iva_falseAlarmToCalm.name := 'falseAlarmToCalm'
!new Transition('tr_iva_allClearToCalm')
!tr_iva_allClearToCalm.name := 'allClearToCalm'
!new Transition('tr_iva_timeoutToCalm')
!tr_iva_timeoutToCalm.name := 'timeoutToCalm'
!new Transition('tr_iva_repeatSiren')
!tr_iva_repeatSiren.name := 'repeatSiren'

!insert (sm_icelandVolcanoAlert, tr_iva_advisoryToAlert) into StateMachineContainsTransitions
!insert (sm_icelandVolcanoAlert, tr_iva_sensorSpikeToAlert) into StateMachineContainsTransitions
!insert (sm_icelandVolcanoAlert, tr_iva_manualSwitchToAlert) into StateMachineContainsTransitions
!insert (sm_icelandVolcanoAlert, tr_iva_falseAlarmToCalm) into StateMachineContainsTransitions
!insert (sm_icelandVolcanoAlert, tr_iva_allClearToCalm) into StateMachineContainsTransitions
!insert (sm_icelandVolcanoAlert, tr_iva_timeoutToCalm) into StateMachineContainsTransitions
!insert (sm_icelandVolcanoAlert, tr_iva_repeatSiren) into StateMachineContainsTransitions

!insert (st_iva_calm, tr_iva_advisoryToAlert) into StateTransition
!insert (tr_iva_advisoryToAlert, st_iva_alert) into TransitionState

!insert (st_iva_calm, tr_iva_sensorSpikeToAlert) into StateTransition
!insert (tr_iva_sensorSpikeToAlert, st_iva_alert) into TransitionState

!insert (st_iva_calm, tr_iva_manualSwitchToAlert) into StateTransition
!insert (tr_iva_manualSwitchToAlert, st_iva_alert) into TransitionState

!insert (st_iva_alert, tr_iva_falseAlarmToCalm) into StateTransition
!insert (tr_iva_falseAlarmToCalm, st_iva_calm) into TransitionState

!insert (st_iva_alert, tr_iva_allClearToCalm) into StateTransition
!insert (tr_iva_allClearToCalm, st_iva_calm) into TransitionState

!insert (st_iva_alert, tr_iva_timeoutToCalm) into StateTransition
!insert (tr_iva_timeoutToCalm, st_iva_calm) into TransitionState

!insert (st_iva_alert, tr_iva_repeatSiren) into StateTransition
!insert (tr_iva_repeatSiren, st_iva_alert) into TransitionState

!new TimeEvent('te_iva_t_advisoryToAlert')
!te_iva_t_advisoryToAlert.time := 60
!insert (tr_iva_advisoryToAlert, te_iva_t_advisoryToAlert) into TransitionContainsEvents

!new TimeEvent('te_iva_t_sensorSpikeToAlert')
!te_iva_t_sensorSpikeToAlert.time := 1
!insert (tr_iva_sensorSpikeToAlert, te_iva_t_sensorSpikeToAlert) into TransitionContainsEvents

!new TimeEvent('te_iva_t_manualSwitchToAlert')
!te_iva_t_manualSwitchToAlert.time := 2147483646
!insert (tr_iva_manualSwitchToAlert, te_iva_t_manualSwitchToAlert) into TransitionContainsEvents

!new TimeEvent('te_iva_t_falseAlarmToCalm')
!te_iva_t_falseAlarmToCalm.time := 5
!insert (tr_iva_falseAlarmToCalm, te_iva_t_falseAlarmToCalm) into TransitionContainsEvents

!new TimeEvent('te_iva_t_allClearToCalm')
!te_iva_t_allClearToCalm.time := 1800
!insert (tr_iva_allClearToCalm, te_iva_t_allClearToCalm) into TransitionContainsEvents

!new TimeEvent('te_iva_t_timeoutToCalm')
!te_iva_t_timeoutToCalm.time := 120
!insert (tr_iva_timeoutToCalm, te_iva_t_timeoutToCalm) into TransitionContainsEvents

!new TimeEvent('te_iva_t_repeatSiren')
!te_iva_t_repeatSiren.time := 2
!insert (tr_iva_repeatSiren, te_iva_t_repeatSiren) into TransitionContainsEvents
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 83 | 0.00% |
| Multiplicities Errors | 0 | 37 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

## Category complex
```
!new StateMachine('sm_zurichHospitalMriWorkflowSM')
!sm_zurichHospitalMriWorkflowSM.name := 'zurichHospitalMriWorkflowSM'

!new State('st_zhm_register')
!st_zhm_register.name := 'register'
!new State('st_zhm_safetyScreening')
!st_zhm_safetyScreening.name := 'safetyScreening'
!new State('st_zhm_changeRoom')
!st_zhm_changeRoom.name := 'changeRoom'
!new State('st_zhm_ivPlacement')
!st_zhm_ivPlacement.name := 'ivPlacement'
!new State('st_zhm_preScanQueue')
!st_zhm_preScanQueue.name := 'preScanQueue'
!new State('st_zhm_positioning')
!st_zhm_positioning.name := 'positioning'
!new State('st_zhm_scanLocalizer')
!st_zhm_scanLocalizer.name := 'scanLocalizer'
!new State('st_zhm_scanT1')
!st_zhm_scanT1.name := 'scanT1'
!new State('st_zhm_scanT2')
!st_zhm_scanT2.name := 'scanT2'
!new State('st_zhm_contrastInjection')
!st_zhm_contrastInjection.name := 'contrastInjection'
!new State('st_zhm_postContrastScan')
!st_zhm_postContrastScan.name := 'postContrastScan'
!new State('st_zhm_imageCheck')
!st_zhm_imageCheck.name := 'imageCheck'
!new State('st_zhm_patientDischarge')
!st_zhm_patientDischarge.name := 'patientDischarge'
!new State('st_zhm_roomDisinfection')
!st_zhm_roomDisinfection.name := 'roomDisinfection'
!new State('st_zhm_incidentHold')
!st_zhm_incidentHold.name := 'incidentHold'

!insert (sm_zurichHospitalMriWorkflowSM, st_zhm_register) into StateMachineContainsStates
!insert (sm_zurichHospitalMriWorkflowSM, st_zhm_safetyScreening) into StateMachineContainsStates
!insert (sm_zurichHospitalMriWorkflowSM, st_zhm_changeRoom) into StateMachineContainsStates
!insert (sm_zurichHospitalMriWorkflowSM, st_zhm_ivPlacement) into StateMachineContainsStates
!insert (sm_zurichHospitalMriWorkflowSM, st_zhm_preScanQueue) into StateMachineContainsStates
!insert (sm_zurichHospitalMriWorkflowSM, st_zhm_positioning) into StateMachineContainsStates
!insert (sm_zurichHospitalMriWorkflowSM, st_zhm_scanLocalizer) into StateMachineContainsStates
!insert (sm_zurichHospitalMriWorkflowSM, st_zhm_scanT1) into StateMachineContainsStates
!insert (sm_zurichHospitalMriWorkflowSM, st_zhm_scanT2) into StateMachineContainsStates
!insert (sm_zurichHospitalMriWorkflowSM, st_zhm_contrastInjection) into StateMachineContainsStates
!insert (sm_zurichHospitalMriWorkflowSM, st_zhm_postContrastScan) into StateMachineContainsStates
!insert (sm_zurichHospitalMriWorkflowSM, st_zhm_imageCheck) into StateMachineContainsStates
!insert (sm_zurichHospitalMriWorkflowSM, st_zhm_patientDischarge) into StateMachineContainsStates
!insert (sm_zurichHospitalMriWorkflowSM, st_zhm_roomDisinfection) into StateMachineContainsStates
!insert (sm_zurichHospitalMriWorkflowSM, st_zhm_incidentHold) into StateMachineContainsStates

!insert (sm_zurichHospitalMriWorkflowSM, st_zhm_register) into StateMachineStartsStates

!new Transition('tr_zhm_startScreening')
!tr_zhm_startScreening.name := 'startScreening'
!new Transition('tr_zhm_screeningPassToChange')
!tr_zhm_screeningPassToChange.name := 'screeningPassToChange'
!new Transition('tr_zhm_metalOrImplantIssue')
!tr_zhm_metalOrImplantIssue.name := 'metalOrImplantIssue'
!new Transition('tr_zhm_changeCompleteToIv')
!tr_zhm_changeCompleteToIv.name := 'changeCompleteToIv'
!new Transition('tr_zhm_ivDoneToQueue')
!tr_zhm_ivDoneToQueue.name := 'ivDoneToQueue'
!new Transition('tr_zhm_queueTick')
!tr_zhm_queueTick.name := 'queueTick'
!new Transition('tr_zhm_callPatientIn')
!tr_zhm_callPatientIn.name := 'callPatientIn'
!new Transition('tr_zhm_positionedStartLocalizer')
!tr_zhm_positionedStartLocalizer.name := 'positionedStartLocalizer'
!new Transition('tr_zhm_localizerComplete')
!tr_zhm_localizerComplete.name := 'localizerComplete'
!new Transition('tr_zhm_t1Complete')
!tr_zhm_t1Complete.name := 't1Complete'
!new Transition('tr_zhm_t2CompleteDecideContrast')
!tr_zhm_t2CompleteDecideContrast.name := 't2CompleteDecideContrast'
!new Transition('tr_zhm_injectThenWait')
!tr_zhm_injectThenWait.name := 'injectThenWait'
!new Transition('tr_zhm_postContrastComplete')
!tr_zhm_postContrastComplete.name := 'postContrastComplete'
!new Transition('tr_zhm_qualityOkProceed')
!tr_zhm_qualityOkProceed.name := 'qualityOkProceed'
!new Transition('tr_zhm_motionArtifactRepeatT2')
!tr_zhm_motionArtifactRepeatT2.name := 'motionArtifactRepeatT2'
!new Transition('tr_zhm_allergyOrPanicEvent')
!tr_zhm_allergyOrPanicEvent.name := 'allergyOrPanicEvent'
!new Transition('tr_zhm_resolveIncidentToDischarge')
!tr_zhm_resolveIncidentToDischarge.name := 'resolveIncidentToDischarge'
!new Transition('tr_zhm_dischargeToCleaning')
!tr_zhm_dischargeToCleaning.name := 'dischargeToCleaning'
!new Transition('tr_zhm_cleaningCompleteBackToRegister')
!tr_zhm_cleaningCompleteBackToRegister.name := 'cleaningCompleteBackToRegister'

!insert (sm_zurichHospitalMriWorkflowSM, tr_zhm_startScreening) into StateMachineContainsTransitions
!insert (sm_zurichHospitalMriWorkflowSM, tr_zhm_screeningPassToChange) into StateMachineContainsTransitions
!insert (sm_zurichHospitalMriWorkflowSM, tr_zhm_metalOrImplantIssue) into StateMachineContainsTransitions
!insert (sm_zurichHospitalMriWorkflowSM, tr_zhm_changeCompleteToIv) into StateMachineContainsTransitions
!insert (sm_zurichHospitalMriWorkflowSM, tr_zhm_ivDoneToQueue) into StateMachineContainsTransitions
!insert (sm_zurichHospitalMriWorkflowSM, tr_zhm_queueTick) into StateMachineContainsTransitions
!insert (sm_zurichHospitalMriWorkflowSM, tr_zhm_callPatientIn) into StateMachineContainsTransitions
!insert (sm_zurichHospitalMriWorkflowSM, tr_zhm_positionedStartLocalizer) into StateMachineContainsTransitions
!insert (sm_zurichHospitalMriWorkflowSM, tr_zhm_localizerComplete) into StateMachineContainsTransitions
!insert (sm_zurichHospitalMriWorkflowSM, tr_zhm_t1Complete) into StateMachineContainsTransitions
!insert (sm_zurichHospitalMriWorkflowSM, tr_zhm_t2CompleteDecideContrast) into StateMachineContainsTransitions
!insert (sm_zurichHospitalMriWorkflowSM, tr_zhm_injectThenWait) into StateMachineContainsTransitions
!insert (sm_zurichHospitalMriWorkflowSM, tr_zhm_postContrastComplete) into StateMachineContainsTransitions
!insert (sm_zurichHospitalMriWorkflowSM, tr_zhm_qualityOkProceed) into StateMachineContainsTransitions
!insert (sm_zurichHospitalMriWorkflowSM, tr_zhm_motionArtifactRepeatT2) into StateMachineContainsTransitions
!insert (sm_zurichHospitalMriWorkflowSM, tr_zhm_allergyOrPanicEvent) into StateMachineContainsTransitions
!insert (sm_zurichHospitalMriWorkflowSM, tr_zhm_resolveIncidentToDischarge) into StateMachineContainsTransitions
!insert (sm_zurichHospitalMriWorkflowSM, tr_zhm_dischargeToCleaning) into StateMachineContainsTransitions
!insert (sm_zurichHospitalMriWorkflowSM, tr_zhm_cleaningCompleteBackToRegister) into StateMachineContainsTransitions

!insert (st_zhm_register, tr_zhm_startScreening) into StateTransition
!insert (tr_zhm_startScreening, st_zhm_safetyScreening) into TransitionState

!insert (st_zhm_safetyScreening, tr_zhm_screeningPassToChange) into StateTransition
!insert (tr_zhm_screeningPassToChange, st_zhm_changeRoom) into TransitionState

!insert (st_zhm_safetyScreening, tr_zhm_metalOrImplantIssue) into StateTransition
!insert (tr_zhm_metalOrImplantIssue, st_zhm_incidentHold) into TransitionState

!insert (st_zhm_changeRoom, tr_zhm_changeCompleteToIv) into StateTransition
!insert (tr_zhm_changeCompleteToIv, st_zhm_ivPlacement) into TransitionState

!insert (st_zhm_ivPlacement, tr_zhm_ivDoneToQueue) into StateTransition
!insert (tr_zhm_ivDoneToQueue, st_zhm_preScanQueue) into TransitionState

!insert (st_zhm_preScanQueue, tr_zhm_queueTick) into StateTransition
!insert (tr_zhm_queueTick, st_zhm_preScanQueue) into TransitionState

!insert (st_zhm_preScanQueue, tr_zhm_callPatientIn) into StateTransition
!insert (tr_zhm_callPatientIn, st_zhm_positioning) into TransitionState

!insert (st_zhm_positioning, tr_zhm_positionedStartLocalizer) into StateTransition
!insert (tr_zhm_positionedStartLocalizer, st_zhm_scanLocalizer) into TransitionState

!insert (st_zhm_scanLocalizer, tr_zhm_localizerComplete) into StateTransition
!insert (tr_zhm_localizerComplete, st_zhm_scanT1) into TransitionState

!insert (st_zhm_scanT1, tr_zhm_t1Complete) into StateTransition
!insert (tr_zhm_t1Complete, st_zhm_scanT2) into TransitionState

!insert (st_zhm_scanT2, tr_zhm_t2CompleteDecideContrast) into StateTransition
!insert (tr_zhm_t2CompleteDecideContrast, st_zhm_contrastInjection) into TransitionState

!insert (st_zhm_contrastInjection, tr_zhm_injectThenWait) into StateTransition
!insert (tr_zhm_injectThenWait, st_zhm_postContrastScan) into TransitionState

!insert (st_zhm_postContrastScan, tr_zhm_postContrastComplete) into StateTransition
!insert (tr_zhm_postContrastComplete, st_zhm_imageCheck) into TransitionState

!insert (st_zhm_imageCheck, tr_zhm_qualityOkProceed) into StateTransition
!insert (tr_zhm_qualityOkProceed, st_zhm_patientDischarge) into TransitionState

!insert (st_zhm_imageCheck, tr_zhm_motionArtifactRepeatT2) into StateTransition
!insert (tr_zhm_motionArtifactRepeatT2, st_zhm_scanT2) into TransitionState

!insert (st_zhm_postContrastScan, tr_zhm_allergyOrPanicEvent) into StateTransition
!insert (tr_zhm_allergyOrPanicEvent, st_zhm_incidentHold) into TransitionState

!insert (st_zhm_incidentHold, tr_zhm_resolveIncidentToDischarge) into StateTransition
!insert (tr_zhm_resolveIncidentToDischarge, st_zhm_patientDischarge) into TransitionState

!insert (st_zhm_patientDischarge, tr_zhm_dischargeToCleaning) into StateTransition
!insert (tr_zhm_dischargeToCleaning, st_zhm_roomDisinfection) into TransitionState

!insert (st_zhm_roomDisinfection, tr_zhm_cleaningCompleteBackToRegister) into StateTransition
!insert (tr_zhm_cleaningCompleteBackToRegister, st_zhm_register) into TransitionState

!new TimeEvent('te_zhm_MTE1')
!te_zhm_MTE1.time := 5
!insert (tr_zhm_startScreening, te_zhm_MTE1) into TransitionContainsEvents

!new TimeEvent('te_zhm_MTE2')
!te_zhm_MTE2.time := 6
!insert (tr_zhm_screeningPassToChange, te_zhm_MTE2) into TransitionContainsEvents

!new TimeEvent('te_zhm_MTE3')
!te_zhm_MTE3.time := 1
!insert (tr_zhm_metalOrImplantIssue, te_zhm_MTE3) into TransitionContainsEvents

!new TimeEvent('te_zhm_MTE4')
!te_zhm_MTE4.time := 7
!insert (tr_zhm_changeCompleteToIv, te_zhm_MTE4) into TransitionContainsEvents

!new TimeEvent('te_zhm_MTE5')
!te_zhm_MTE5.time := 3
!insert (tr_zhm_ivDoneToQueue, te_zhm_MTE5) into TransitionContainsEvents

!new TimeEvent('te_zhm_MTE6')
!te_zhm_MTE6.time := 10
!insert (tr_zhm_queueTick, te_zhm_MTE6) into TransitionContainsEvents

!new TimeEvent('te_zhm_MTE7')
!te_zhm_MTE7.time := 1
!insert (tr_zhm_callPatientIn, te_zhm_MTE7) into TransitionContainsEvents

!new TimeEvent('te_zhm_MTE8')
!te_zhm_MTE8.time := 4
!insert (tr_zhm_positionedStartLocalizer, te_zhm_MTE8) into TransitionContainsEvents

!new TimeEvent('te_zhm_MTE9')
!te_zhm_MTE9.time := 2
!insert (tr_zhm_localizerComplete, te_zhm_MTE9) into TransitionContainsEvents

!new TimeEvent('te_zhm_MTE10')
!te_zhm_MTE10.time := 9
!insert (tr_zhm_t1Complete, te_zhm_MTE10) into TransitionContainsEvents

!new TimeEvent('te_zhm_MTE11')
!te_zhm_MTE11.time := 11
!insert (tr_zhm_t2CompleteDecideContrast, te_zhm_MTE11) into TransitionContainsEvents

!new TimeEvent('te_zhm_MTE12')
!te_zhm_MTE12.time := 2
!insert (tr_zhm_injectThenWait, te_zhm_MTE12) into TransitionContainsEvents

!new TimeEvent('te_zhm_MTE13')
!te_zhm_MTE13.time := 12
!insert (tr_zhm_postContrastComplete, te_zhm_MTE13) into TransitionContainsEvents

!new TimeEvent('te_zhm_MTE14')
!te_zhm_MTE14.time := 3
!insert (tr_zhm_qualityOkProceed, te_zhm_MTE14) into TransitionContainsEvents

!new TimeEvent('te_zhm_MTE15')
!te_zhm_MTE15.time := 1
!insert (tr_zhm_motionArtifactRepeatT2, te_zhm_MTE15) into TransitionContainsEvents

!new TimeEvent('te_zhm_MTE16')
!te_zhm_MTE16.time := 1
!insert (tr_zhm_allergyOrPanicEvent, te_zhm_MTE16) into TransitionContainsEvents

!new TimeEvent('te_zhm_MTE17')
!te_zhm_MTE17.time := 20
!insert (tr_zhm_resolveIncidentToDischarge, te_zhm_MTE17) into TransitionContainsEvents

!new TimeEvent('te_zhm_MTE18')
!te_zhm_MTE18.time := 2
!insert (tr_zhm_dischargeToCleaning, te_zhm_MTE18) into TransitionContainsEvents

!new TimeEvent('te_zhm_MTE19')
!te_zhm_MTE19.time := 15
!insert (tr_zhm_cleaningCompleteBackToRegister, te_zhm_MTE19) into TransitionContainsEvents
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 200 | 0.00% |
| Multiplicities Errors | 0 | 92 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

## Category edge
```
!new StateMachine('sm_isolatedStartSingleLink')
!sm_isolatedStartSingleLink.name := 'isolatedStartSingleLink'

!new State('st_issl_startpunkt')
!st_issl_startpunkt.name := 'startpunkt'
!new State('st_issl_reseau')
!st_issl_reseau.name := 'réseau'
!new State('st_issl_koncowka')
!st_issl_koncowka.name := 'końcówka'
!new State('st_issl_koritsu')
!st_issl_koritsu.name := '孤立'

!insert (sm_isolatedStartSingleLink, st_issl_startpunkt) into StateMachineContainsStates
!insert (sm_isolatedStartSingleLink, st_issl_reseau) into StateMachineContainsStates
!insert (sm_isolatedStartSingleLink, st_issl_koncowka) into StateMachineContainsStates
!insert (sm_isolatedStartSingleLink, st_issl_koritsu) into StateMachineContainsStates

!insert (sm_isolatedStartSingleLink, st_issl_startpunkt) into StateMachineStartsStates

!new Transition('tr_issl_handover')
!tr_issl_handover.name := 'handover'

!insert (sm_isolatedStartSingleLink, tr_issl_handover) into StateMachineContainsTransitions

!insert (st_issl_reseau, tr_issl_handover) into StateTransition
!insert (tr_issl_handover, st_issl_koncowka) into TransitionState

!new TimeEvent('te_issl_handover')
!te_issl_handover.time := 1
!insert (tr_issl_handover, te_issl_handover) into TransitionContainsEvents
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 23 | 0.00% |
| Multiplicities Errors | 0 | 9 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

## Category invalid
```
!new StateMachine('sm_baggageCarouselControl_fix')
!sm_baggageCarouselControl_fix.name := 'baggageCarouselControl'

!new State('st_bccf_stopped')
!st_bccf_stopped.name := 'stopped'
!new State('st_bccf_starting')
!st_bccf_starting.name := 'starting'
!new State('st_bccf_running')
!st_bccf_running.name := 'running'
!new State('st_bccf_stopping')
!st_bccf_stopping.name := 'stopping'
!new State('st_bccf_jammed')
!st_bccf_jammed.name := 'jammed'

!insert (sm_baggageCarouselControl_fix, st_bccf_stopped) into StateMachineContainsStates
!insert (sm_baggageCarouselControl_fix, st_bccf_starting) into StateMachineContainsStates
!insert (sm_baggageCarouselControl_fix, st_bccf_running) into StateMachineContainsStates
!insert (sm_baggageCarouselControl_fix, st_bccf_stopping) into StateMachineContainsStates
!insert (sm_baggageCarouselControl_fix, st_bccf_jammed) into StateMachineContainsStates

!insert (sm_baggageCarouselControl_fix, st_bccf_stopped) into StateMachineStartsStates

!new Transition('tr_bccf_tStartMotor')
!tr_bccf_tStartMotor.name := 'tStartMotor'
!new Transition('tr_bccf_tStartupToRunning')
!tr_bccf_tStartupToRunning.name := 'tStartupToRunning'
!new Transition('tr_bccf_tRequestStop')
!tr_bccf_tRequestStop.name := 'tRequestStop'
!new Transition('tr_bccf_tStoppingToStopped')
!tr_bccf_tStoppingToStopped.name := 'tStoppingToStopped'
!new Transition('tr_bccf_tDetectJam')
!tr_bccf_tDetectJam.name := 'tDetectJam'
!new Transition('tr_bccf_tResetFromJam')
!tr_bccf_tResetFromJam.name := 'tResetFromJam'

!insert (sm_baggageCarouselControl_fix, tr_bccf_tStartMotor) into StateMachineContainsTransitions
!insert (sm_baggageCarouselControl_fix, tr_bccf_tStartupToRunning) into StateMachineContainsTransitions
!insert (sm_baggageCarouselControl_fix, tr_bccf_tRequestStop) into StateMachineContainsTransitions
!insert (sm_baggageCarouselControl_fix, tr_bccf_tStoppingToStopped) into StateMachineContainsTransitions
!insert (sm_baggageCarouselControl_fix, tr_bccf_tDetectJam) into StateMachineContainsTransitions
!insert (sm_baggageCarouselControl_fix, tr_bccf_tResetFromJam) into StateMachineContainsTransitions

!insert (st_bccf_stopped, tr_bccf_tStartMotor) into StateTransition
!insert (tr_bccf_tStartMotor, st_bccf_starting) into TransitionState

!insert (st_bccf_starting, tr_bccf_tStartupToRunning) into StateTransition
!insert (tr_bccf_tStartupToRunning, st_bccf_running) into TransitionState

!insert (st_bccf_running, tr_bccf_tRequestStop) into StateTransition
!insert (tr_bccf_tRequestStop, st_bccf_stopping) into TransitionState

!insert (st_bccf_stopping, tr_bccf_tStoppingToStopped) into StateTransition
!insert (tr_bccf_tStoppingToStopped, st_bccf_stopped) into TransitionState

!insert (st_bccf_running, tr_bccf_tDetectJam) into StateTransition
!insert (tr_bccf_tDetectJam, st_bccf_jammed) into TransitionState

!insert (st_bccf_jammed, tr_bccf_tResetFromJam) into StateTransition
!insert (tr_bccf_tResetFromJam, st_bccf_running) into TransitionState

!new TimeEvent('te_bccf_tStartMotor')
!te_bccf_tStartMotor.time := 1
!insert (tr_bccf_tStartMotor, te_bccf_tStartMotor) into TransitionContainsEvents

!new TimeEvent('te_bccf_heartbeat5s_startup')
!te_bccf_heartbeat5s_startup.time := 5
!insert (tr_bccf_tStartupToRunning, te_bccf_heartbeat5s_startup) into TransitionContainsEvents

!new TimeEvent('te_bccf_tRequestStop')
!te_bccf_tRequestStop.time := 2
!insert (tr_bccf_tRequestStop, te_bccf_tRequestStop) into TransitionContainsEvents

!new TimeEvent('te_bccf_heartbeat5s_stopping')
!te_bccf_heartbeat5s_stopping.time := 5
!insert (tr_bccf_tStoppingToStopped, te_bccf_heartbeat5s_stopping) into TransitionContainsEvents

!new TimeEvent('te_bccf_tDetectJam')
!te_bccf_tDetectJam.time := 3
!insert (tr_bccf_tDetectJam, te_bccf_tDetectJam) into TransitionContainsEvents

!new TimeEvent('te_bccf_tResetFromJam')
!te_bccf_tResetFromJam.time := 10
!insert (tr_bccf_tResetFromJam, te_bccf_tResetFromJam) into TransitionContainsEvents
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 30 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

## Generation 5 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 457 | 0.00% |
| Multiplicities Errors | 0 | 177 | 0.00% |
| Invariants Errors | 0 | 8 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 30 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

# Generation 6
## Category baseline
```
!new StateMachine('sm_autonomousDroneDelivery')
!sm_autonomousDroneDelivery.name := 'autonomousDroneDelivery'

!new State('st_add_standby')
!st_add_standby.name := 'standby'
!new State('st_add_preflight')
!st_add_preflight.name := 'preflight'
!new State('st_add_enroute')
!st_add_enroute.name := 'enroute'
!new State('st_add_delivering')
!st_add_delivering.name := 'delivering'
!new State('st_add_returning')
!st_add_returning.name := 'returning'
!new State('st_add_charging')
!st_add_charging.name := 'charging'
!new State('st_add_emergencyLanding')
!st_add_emergencyLanding.name := 'emergencyLanding'

!insert (sm_autonomousDroneDelivery, st_add_standby) into StateMachineContainsStates
!insert (sm_autonomousDroneDelivery, st_add_preflight) into StateMachineContainsStates
!insert (sm_autonomousDroneDelivery, st_add_enroute) into StateMachineContainsStates
!insert (sm_autonomousDroneDelivery, st_add_delivering) into StateMachineContainsStates
!insert (sm_autonomousDroneDelivery, st_add_returning) into StateMachineContainsStates
!insert (sm_autonomousDroneDelivery, st_add_charging) into StateMachineContainsStates
!insert (sm_autonomousDroneDelivery, st_add_emergencyLanding) into StateMachineContainsStates

!insert (sm_autonomousDroneDelivery, st_add_standby) into StateMachineStartsStates

!new Transition('tr_add_scheduleLaunch')
!tr_add_scheduleLaunch.name := 'scheduleLaunch'
!new Transition('tr_add_abortIfNoGpsFix')
!tr_add_abortIfNoGpsFix.name := 'abortIfNoGpsFix'
!new Transition('tr_add_takeoff')
!tr_add_takeoff.name := 'takeoff'
!new Transition('tr_add_periodicNavPing')
!tr_add_periodicNavPing.name := 'periodicNavPing'
!new Transition('tr_add_arriveAtDropZone')
!tr_add_arriveAtDropZone.name := 'arriveAtDropZone'
!new Transition('tr_add_confirmDropComplete')
!tr_add_confirmDropComplete.name := 'confirmDropComplete'
!new Transition('tr_add_retryDrop')
!tr_add_retryDrop.name := 'retryDrop'
!new Transition('tr_add_lowBatteryDivert')
!tr_add_lowBatteryDivert.name := 'lowBatteryDivert'
!new Transition('tr_add_criticalFaultLanding')
!tr_add_criticalFaultLanding.name := 'criticalFaultLanding'
!new Transition('tr_add_landAndReport')
!tr_add_landAndReport.name := 'landAndReport'
!new Transition('tr_add_dockAndCharge')
!tr_add_dockAndCharge.name := 'dockAndCharge'
!new Transition('tr_add_chargeComplete')
!tr_add_chargeComplete.name := 'chargeComplete'

!insert (sm_autonomousDroneDelivery, tr_add_scheduleLaunch) into StateMachineContainsTransitions
!insert (sm_autonomousDroneDelivery, tr_add_abortIfNoGpsFix) into StateMachineContainsTransitions
!insert (sm_autonomousDroneDelivery, tr_add_takeoff) into StateMachineContainsTransitions
!insert (sm_autonomousDroneDelivery, tr_add_periodicNavPing) into StateMachineContainsTransitions
!insert (sm_autonomousDroneDelivery, tr_add_arriveAtDropZone) into StateMachineContainsTransitions
!insert (sm_autonomousDroneDelivery, tr_add_confirmDropComplete) into StateMachineContainsTransitions
!insert (sm_autonomousDroneDelivery, tr_add_retryDrop) into StateMachineContainsTransitions
!insert (sm_autonomousDroneDelivery, tr_add_lowBatteryDivert) into StateMachineContainsTransitions
!insert (sm_autonomousDroneDelivery, tr_add_criticalFaultLanding) into StateMachineContainsTransitions
!insert (sm_autonomousDroneDelivery, tr_add_landAndReport) into StateMachineContainsTransitions
!insert (sm_autonomousDroneDelivery, tr_add_dockAndCharge) into StateMachineContainsTransitions
!insert (sm_autonomousDroneDelivery, tr_add_chargeComplete) into StateMachineContainsTransitions

!insert (st_add_standby, tr_add_scheduleLaunch) into StateTransition
!insert (tr_add_scheduleLaunch, st_add_preflight) into TransitionState

!insert (st_add_preflight, tr_add_abortIfNoGpsFix) into StateTransition
!insert (tr_add_abortIfNoGpsFix, st_add_standby) into TransitionState

!insert (st_add_preflight, tr_add_takeoff) into StateTransition
!insert (tr_add_takeoff, st_add_enroute) into TransitionState

!insert (st_add_enroute, tr_add_periodicNavPing) into StateTransition
!insert (tr_add_periodicNavPing, st_add_enroute) into TransitionState

!insert (st_add_enroute, tr_add_arriveAtDropZone) into StateTransition
!insert (tr_add_arriveAtDropZone, st_add_delivering) into TransitionState

!insert (st_add_delivering, tr_add_retryDrop) into StateTransition
!insert (tr_add_retryDrop, st_add_delivering) into TransitionState

!insert (st_add_delivering, tr_add_confirmDropComplete) into StateTransition
!insert (tr_add_confirmDropComplete, st_add_returning) into TransitionState

!insert (st_add_enroute, tr_add_lowBatteryDivert) into StateTransition
!insert (tr_add_lowBatteryDivert, st_add_returning) into TransitionState

!insert (st_add_enroute, tr_add_criticalFaultLanding) into StateTransition
!insert (tr_add_criticalFaultLanding, st_add_emergencyLanding) into TransitionState

!insert (st_add_emergencyLanding, tr_add_landAndReport) into StateTransition
!insert (tr_add_landAndReport, st_add_charging) into TransitionState

!insert (st_add_returning, tr_add_dockAndCharge) into StateTransition
!insert (tr_add_dockAndCharge, st_add_charging) into TransitionState

!insert (st_add_charging, tr_add_chargeComplete) into StateTransition
!insert (tr_add_chargeComplete, st_add_standby) into TransitionState

!new TimeEvent('te_add_t_scheduleLaunch')
!te_add_t_scheduleLaunch.time := 300
!insert (tr_add_scheduleLaunch, te_add_t_scheduleLaunch) into TransitionContainsEvents

!new TimeEvent('te_add_t_abortIfNoGpsFix')
!te_add_t_abortIfNoGpsFix.time := 45
!insert (tr_add_abortIfNoGpsFix, te_add_t_abortIfNoGpsFix) into TransitionContainsEvents

!new TimeEvent('te_add_t_takeoff')
!te_add_t_takeoff.time := 60
!insert (tr_add_takeoff, te_add_t_takeoff) into TransitionContainsEvents

!new TimeEvent('te_add_t_periodicNavPing')
!te_add_t_periodicNavPing.time := 30
!insert (tr_add_periodicNavPing, te_add_t_periodicNavPing) into TransitionContainsEvents

!new TimeEvent('te_add_t_arriveAtDropZone')
!te_add_t_arriveAtDropZone.time := 900
!insert (tr_add_arriveAtDropZone, te_add_t_arriveAtDropZone) into TransitionContainsEvents

!new TimeEvent('te_add_t_retryDrop')
!te_add_t_retryDrop.time := 20
!insert (tr_add_retryDrop, te_add_t_retryDrop) into TransitionContainsEvents

!new TimeEvent('te_add_t_confirmDropComplete')
!te_add_t_confirmDropComplete.time := 120
!insert (tr_add_confirmDropComplete, te_add_t_confirmDropComplete) into TransitionContainsEvents

!new TimeEvent('te_add_t_lowBatteryDivert')
!te_add_t_lowBatteryDivert.time := 10
!insert (tr_add_lowBatteryDivert, te_add_t_lowBatteryDivert) into TransitionContainsEvents

!new TimeEvent('te_add_t_criticalFaultLanding')
!te_add_t_criticalFaultLanding.time := 5
!insert (tr_add_criticalFaultLanding, te_add_t_criticalFaultLanding) into TransitionContainsEvents

!new TimeEvent('te_add_t_landAndReport')
!te_add_t_landAndReport.time := 180
!insert (tr_add_landAndReport, te_add_t_landAndReport) into TransitionContainsEvents

!new TimeEvent('te_add_t_dockAndCharge')
!te_add_t_dockAndCharge.time := 240
!insert (tr_add_dockAndCharge, te_add_t_dockAndCharge) into TransitionContainsEvents

!new TimeEvent('te_add_t_chargeComplete')
!te_add_t_chargeComplete.time := 1800
!insert (tr_add_chargeComplete, te_add_t_chargeComplete) into TransitionContainsEvents
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 120 | 0.00% |
| Multiplicities Errors | 0 | 56 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

## Category boundary
```
!new StateMachine('sm_hanoiPhoStallSchedule')
!sm_hanoiPhoStallSchedule.name := 'hanoiPhoStallSchedule'

!new State('st_hps_closed')
!st_hps_closed.name := 'closed'
!new State('st_hps_waiting')
!st_hps_waiting.name := 'waiting'
!new State('st_hps_ordering')
!st_hps_ordering.name := 'ordering'
!new State('st_hps_eating')
!st_hps_eating.name := 'eating'
!new State('st_hps_paying')
!st_hps_paying.name := 'paying'
!new State('st_hps_cleanup')
!st_hps_cleanup.name := 'cleanup'
!new State('st_hps_restocking')
!st_hps_restocking.name := 'restocking'
!new State('st_hps_rainDelay')
!st_hps_rainDelay.name := 'rainDelay'
!new State('st_hps_takeaway')
!st_hps_takeaway.name := 'takeaway'
!new State('st_hps_tourGroup')
!st_hps_tourGroup.name := 'tourGroup'
!new State('st_hps_spicyChallenge')
!st_hps_spicyChallenge.name := 'spicyChallenge'
!new State('st_hps_vip')
!st_hps_vip.name := 'vip'

!insert (sm_hanoiPhoStallSchedule, st_hps_closed) into StateMachineContainsStates
!insert (sm_hanoiPhoStallSchedule, st_hps_waiting) into StateMachineContainsStates
!insert (sm_hanoiPhoStallSchedule, st_hps_ordering) into StateMachineContainsStates
!insert (sm_hanoiPhoStallSchedule, st_hps_eating) into StateMachineContainsStates
!insert (sm_hanoiPhoStallSchedule, st_hps_paying) into StateMachineContainsStates
!insert (sm_hanoiPhoStallSchedule, st_hps_cleanup) into StateMachineContainsStates
!insert (sm_hanoiPhoStallSchedule, st_hps_restocking) into StateMachineContainsStates
!insert (sm_hanoiPhoStallSchedule, st_hps_rainDelay) into StateMachineContainsStates
!insert (sm_hanoiPhoStallSchedule, st_hps_takeaway) into StateMachineContainsStates
!insert (sm_hanoiPhoStallSchedule, st_hps_tourGroup) into StateMachineContainsStates
!insert (sm_hanoiPhoStallSchedule, st_hps_spicyChallenge) into StateMachineContainsStates
!insert (sm_hanoiPhoStallSchedule, st_hps_vip) into StateMachineContainsStates

!insert (sm_hanoiPhoStallSchedule, st_hps_closed) into StateMachineStartsStates

!new Transition('tr_hps_openStall')
!tr_hps_openStall.name := 'openStall'

!insert (sm_hanoiPhoStallSchedule, tr_hps_openStall) into StateMachineContainsTransitions

!insert (st_hps_closed, tr_hps_openStall) into StateTransition
!insert (tr_hps_openStall, st_hps_waiting) into TransitionState

!new TimeEvent('te_hps_t_openStall')
!te_hps_t_openStall.time := 1
!insert (tr_hps_openStall, te_hps_t_openStall) into TransitionContainsEvents
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 47 | 0.00% |
| Multiplicities Errors | 0 | 17 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

## Category complex
```
!new StateMachine('sm_lagosJunctionTrafficSignalSM')
!sm_lagosJunctionTrafficSignalSM.name := 'lagosJunctionTrafficSignalSM'

!new State('st_ljt_boot')
!st_ljt_boot.name := 'boot'
!new State('st_ljt_selfTest')
!st_ljt_selfTest.name := 'selfTest'
!new State('st_ljt_allRedStart')
!st_ljt_allRedStart.name := 'allRedStart'
!new State('st_ljt_nsGreen')
!st_ljt_nsGreen.name := 'nsGreen'
!new State('st_ljt_nsYellow')
!st_ljt_nsYellow.name := 'nsYellow'
!new State('st_ljt_pedWalkNs')
!st_ljt_pedWalkNs.name := 'pedWalkNs'
!new State('st_ljt_pedClearNs')
!st_ljt_pedClearNs.name := 'pedClearNs'
!new State('st_ljt_allRedNsToEw')
!st_ljt_allRedNsToEw.name := 'allRedNsToEw'
!new State('st_ljt_ewGreen')
!st_ljt_ewGreen.name := 'ewGreen'
!new State('st_ljt_ewYellow')
!st_ljt_ewYellow.name := 'ewYellow'
!new State('st_ljt_pedWalkEw')
!st_ljt_pedWalkEw.name := 'pedWalkEw'
!new State('st_ljt_pedClearEw')
!st_ljt_pedClearEw.name := 'pedClearEw'
!new State('st_ljt_allRedEwToNs')
!st_ljt_allRedEwToNs.name := 'allRedEwToNs'
!new State('st_ljt_emergencyPreempt')
!st_ljt_emergencyPreempt.name := 'emergencyPreempt'
!new State('st_ljt_nightFlash')
!st_ljt_nightFlash.name := 'nightFlash'
!new State('st_ljt_maintenanceLock')
!st_ljt_maintenanceLock.name := 'maintenanceLock'

!insert (sm_lagosJunctionTrafficSignalSM, st_ljt_boot) into StateMachineContainsStates
!insert (sm_lagosJunctionTrafficSignalSM, st_ljt_selfTest) into StateMachineContainsStates
!insert (sm_lagosJunctionTrafficSignalSM, st_ljt_allRedStart) into StateMachineContainsStates
!insert (sm_lagosJunctionTrafficSignalSM, st_ljt_nsGreen) into StateMachineContainsStates
!insert (sm_lagosJunctionTrafficSignalSM, st_ljt_nsYellow) into StateMachineContainsStates
!insert (sm_lagosJunctionTrafficSignalSM, st_ljt_pedWalkNs) into StateMachineContainsStates
!insert (sm_lagosJunctionTrafficSignalSM, st_ljt_pedClearNs) into StateMachineContainsStates
!insert (sm_lagosJunctionTrafficSignalSM, st_ljt_allRedNsToEw) into StateMachineContainsStates
!insert (sm_lagosJunctionTrafficSignalSM, st_ljt_ewGreen) into StateMachineContainsStates
!insert (sm_lagosJunctionTrafficSignalSM, st_ljt_ewYellow) into StateMachineContainsStates
!insert (sm_lagosJunctionTrafficSignalSM, st_ljt_pedWalkEw) into StateMachineContainsStates
!insert (sm_lagosJunctionTrafficSignalSM, st_ljt_pedClearEw) into StateMachineContainsStates
!insert (sm_lagosJunctionTrafficSignalSM, st_ljt_allRedEwToNs) into StateMachineContainsStates
!insert (sm_lagosJunctionTrafficSignalSM, st_ljt_emergencyPreempt) into StateMachineContainsStates
!insert (sm_lagosJunctionTrafficSignalSM, st_ljt_nightFlash) into StateMachineContainsStates
!insert (sm_lagosJunctionTrafficSignalSM, st_ljt_maintenanceLock) into StateMachineContainsStates

!insert (sm_lagosJunctionTrafficSignalSM, st_ljt_boot) into StateMachineStartsStates

!new Transition('tr_ljt_powerOnToSelfTest')
!tr_ljt_powerOnToSelfTest.name := 'powerOnToSelfTest'
!new Transition('tr_ljt_selfTestToAllRed')
!tr_ljt_selfTestToAllRed.name := 'selfTestToAllRed'
!new Transition('tr_ljt_enterMaintenanceLock')
!tr_ljt_enterMaintenanceLock.name := 'enterMaintenanceLock'
!new Transition('tr_ljt_maintenanceCompleteToAllRed')
!tr_ljt_maintenanceCompleteToAllRed.name := 'maintenanceCompleteToAllRed'
!new Transition('tr_ljt_allRedToNsGreen')
!tr_ljt_allRedToNsGreen.name := 'allRedToNsGreen'
!new Transition('tr_ljt_nsGreenToNsYellow')
!tr_ljt_nsGreenToNsYellow.name := 'nsGreenToNsYellow'
!new Transition('tr_ljt_nsYellowToPedWalkNs')
!tr_ljt_nsYellowToPedWalkNs.name := 'nsYellowToPedWalkNs'
!new Transition('tr_ljt_pedWalkNsToPedClearNs')
!tr_ljt_pedWalkNsToPedClearNs.name := 'pedWalkNsToPedClearNs'
!new Transition('tr_ljt_pedClearNsToAllRedNsToEw')
!tr_ljt_pedClearNsToAllRedNsToEw.name := 'pedClearNsToAllRedNsToEw'
!new Transition('tr_ljt_allRedNsToEwToEwGreen')
!tr_ljt_allRedNsToEwToEwGreen.name := 'allRedNsToEwToEwGreen'
!new Transition('tr_ljt_ewGreenToEwYellow')
!tr_ljt_ewGreenToEwYellow.name := 'ewGreenToEwYellow'
!new Transition('tr_ljt_ewYellowToPedWalkEw')
!tr_ljt_ewYellowToPedWalkEw.name := 'ewYellowToPedWalkEw'
!new Transition('tr_ljt_pedWalkEwToPedClearEw')
!tr_ljt_pedWalkEwToPedClearEw.name := 'pedWalkEwToPedClearEw'
!new Transition('tr_ljt_pedClearEwToAllRedEwToNs')
!tr_ljt_pedClearEwToAllRedEwToNs.name := 'pedClearEwToAllRedEwToNs'
!new Transition('tr_ljt_allRedEwToNsToNsGreen')
!tr_ljt_allRedEwToNsToNsGreen.name := 'allRedEwToNsToNsGreen'
!new Transition('tr_ljt_preemptFromNsGreen')
!tr_ljt_preemptFromNsGreen.name := 'preemptFromNsGreen'
!new Transition('tr_ljt_preemptFromEwGreen')
!tr_ljt_preemptFromEwGreen.name := 'preemptFromEwGreen'
!new Transition('tr_ljt_preemptFromNsYellow')
!tr_ljt_preemptFromNsYellow.name := 'preemptFromNsYellow'
!new Transition('tr_ljt_preemptFromEwYellow')
!tr_ljt_preemptFromEwYellow.name := 'preemptFromEwYellow'
!new Transition('tr_ljt_preemptFromPedWalkNs')
!tr_ljt_preemptFromPedWalkNs.name := 'preemptFromPedWalkNs'
!new Transition('tr_ljt_preemptFromPedWalkEw')
!tr_ljt_preemptFromPedWalkEw.name := 'preemptFromPedWalkEw'
!new Transition('tr_ljt_endPreemptToAllRed')
!tr_ljt_endPreemptToAllRed.name := 'endPreemptToAllRed'
!new Transition('tr_ljt_switchToNightFlash')
!tr_ljt_switchToNightFlash.name := 'switchToNightFlash'
!new Transition('tr_ljt_nightFlashBlinkPulse')
!tr_ljt_nightFlashBlinkPulse.name := 'nightFlashBlinkPulse'
!new Transition('tr_ljt_exitNightFlashToAllRed')
!tr_ljt_exitNightFlashToAllRed.name := 'exitNightFlashToAllRed'

!insert (sm_lagosJunctionTrafficSignalSM, tr_ljt_powerOnToSelfTest) into StateMachineContainsTransitions
!insert (sm_lagosJunctionTrafficSignalSM, tr_ljt_selfTestToAllRed) into StateMachineContainsTransitions
!insert (sm_lagosJunctionTrafficSignalSM, tr_ljt_enterMaintenanceLock) into StateMachineContainsTransitions
!insert (sm_lagosJunctionTrafficSignalSM, tr_ljt_maintenanceCompleteToAllRed) into StateMachineContainsTransitions
!insert (sm_lagosJunctionTrafficSignalSM, tr_ljt_allRedToNsGreen) into StateMachineContainsTransitions
!insert (sm_lagosJunctionTrafficSignalSM, tr_ljt_nsGreenToNsYellow) into StateMachineContainsTransitions
!insert (sm_lagosJunctionTrafficSignalSM, tr_ljt_nsYellowToPedWalkNs) into StateMachineContainsTransitions
!insert (sm_lagosJunctionTrafficSignalSM, tr_ljt_pedWalkNsToPedClearNs) into StateMachineContainsTransitions
!insert (sm_lagosJunctionTrafficSignalSM, tr_ljt_pedClearNsToAllRedNsToEw) into StateMachineContainsTransitions
!insert (sm_lagosJunctionTrafficSignalSM, tr_ljt_allRedNsToEwToEwGreen) into StateMachineContainsTransitions
!insert (sm_lagosJunctionTrafficSignalSM, tr_ljt_ewGreenToEwYellow) into StateMachineContainsTransitions
!insert (sm_lagosJunctionTrafficSignalSM, tr_ljt_ewYellowToPedWalkEw) into StateMachineContainsTransitions
!insert (sm_lagosJunctionTrafficSignalSM, tr_ljt_pedWalkEwToPedClearEw) into StateMachineContainsTransitions
!insert (sm_lagosJunctionTrafficSignalSM, tr_ljt_pedClearEwToAllRedEwToNs) into StateMachineContainsTransitions
!insert (sm_lagosJunctionTrafficSignalSM, tr_ljt_allRedEwToNsToNsGreen) into StateMachineContainsTransitions
!insert (sm_lagosJunctionTrafficSignalSM, tr_ljt_preemptFromNsGreen) into StateMachineContainsTransitions
!insert (sm_lagosJunctionTrafficSignalSM, tr_ljt_preemptFromEwGreen) into StateMachineContainsTransitions
!insert (sm_lagosJunctionTrafficSignalSM, tr_ljt_preemptFromNsYellow) into StateMachineContainsTransitions
!insert (sm_lagosJunctionTrafficSignalSM, tr_ljt_preemptFromEwYellow) into StateMachineContainsTransitions
!insert (sm_lagosJunctionTrafficSignalSM, tr_ljt_preemptFromPedWalkNs) into StateMachineContainsTransitions
!insert (sm_lagosJunctionTrafficSignalSM, tr_ljt_preemptFromPedWalkEw) into StateMachineContainsTransitions
!insert (sm_lagosJunctionTrafficSignalSM, tr_ljt_endPreemptToAllRed) into StateMachineContainsTransitions
!insert (sm_lagosJunctionTrafficSignalSM, tr_ljt_switchToNightFlash) into StateMachineContainsTransitions
!insert (sm_lagosJunctionTrafficSignalSM, tr_ljt_nightFlashBlinkPulse) into StateMachineContainsTransitions
!insert (sm_lagosJunctionTrafficSignalSM, tr_ljt_exitNightFlashToAllRed) into StateMachineContainsTransitions

!insert (st_ljt_boot, tr_ljt_powerOnToSelfTest) into StateTransition
!insert (tr_ljt_powerOnToSelfTest, st_ljt_selfTest) into TransitionState

!insert (st_ljt_selfTest, tr_ljt_selfTestToAllRed) into StateTransition
!insert (tr_ljt_selfTestToAllRed, st_ljt_allRedStart) into TransitionState

!insert (st_ljt_selfTest, tr_ljt_enterMaintenanceLock) into StateTransition
!insert (tr_ljt_enterMaintenanceLock, st_ljt_maintenanceLock) into TransitionState

!insert (st_ljt_maintenanceLock, tr_ljt_maintenanceCompleteToAllRed) into StateTransition
!insert (tr_ljt_maintenanceCompleteToAllRed, st_ljt_allRedStart) into TransitionState

!insert (st_ljt_allRedStart, tr_ljt_allRedToNsGreen) into StateTransition
!insert (tr_ljt_allRedToNsGreen, st_ljt_nsGreen) into TransitionState

!insert (st_ljt_nsGreen, tr_ljt_nsGreenToNsYellow) into StateTransition
!insert (tr_ljt_nsGreenToNsYellow, st_ljt_nsYellow) into TransitionState

!insert (st_ljt_nsYellow, tr_ljt_nsYellowToPedWalkNs) into StateTransition
!insert (tr_ljt_nsYellowToPedWalkNs, st_ljt_pedWalkNs) into TransitionState

!insert (st_ljt_pedWalkNs, tr_ljt_pedWalkNsToPedClearNs) into StateTransition
!insert (tr_ljt_pedWalkNsToPedClearNs, st_ljt_pedClearNs) into TransitionState

!insert (st_ljt_pedClearNs, tr_ljt_pedClearNsToAllRedNsToEw) into StateTransition
!insert (tr_ljt_pedClearNsToAllRedNsToEw, st_ljt_allRedNsToEw) into TransitionState

!insert (st_ljt_allRedNsToEw, tr_ljt_allRedNsToEwToEwGreen) into StateTransition
!insert (tr_ljt_allRedNsToEwToEwGreen, st_ljt_ewGreen) into TransitionState

!insert (st_ljt_ewGreen, tr_ljt_ewGreenToEwYellow) into StateTransition
!insert (tr_ljt_ewGreenToEwYellow, st_ljt_ewYellow) into TransitionState

!insert (st_ljt_ewYellow, tr_ljt_ewYellowToPedWalkEw) into StateTransition
!insert (tr_ljt_ewYellowToPedWalkEw, st_ljt_pedWalkEw) into TransitionState

!insert (st_ljt_pedWalkEw, tr_ljt_pedWalkEwToPedClearEw) into StateTransition
!insert (tr_ljt_pedWalkEwToPedClearEw, st_ljt_pedClearEw) into TransitionState

!insert (st_ljt_pedClearEw, tr_ljt_pedClearEwToAllRedEwToNs) into StateTransition
!insert (tr_ljt_pedClearEwToAllRedEwToNs, st_ljt_allRedEwToNs) into TransitionState

!insert (st_ljt_allRedEwToNs, tr_ljt_allRedEwToNsToNsGreen) into StateTransition
!insert (tr_ljt_allRedEwToNsToNsGreen, st_ljt_nsGreen) into TransitionState

!insert (st_ljt_nsGreen, tr_ljt_preemptFromNsGreen) into StateTransition
!insert (tr_ljt_preemptFromNsGreen, st_ljt_emergencyPreempt) into TransitionState

!insert (st_ljt_ewGreen, tr_ljt_preemptFromEwGreen) into StateTransition
!insert (tr_ljt_preemptFromEwGreen, st_ljt_emergencyPreempt) into TransitionState

!insert (st_ljt_nsYellow, tr_ljt_preemptFromNsYellow) into StateTransition
!insert (tr_ljt_preemptFromNsYellow, st_ljt_emergencyPreempt) into TransitionState

!insert (st_ljt_ewYellow, tr_ljt_preemptFromEwYellow) into StateTransition
!insert (tr_ljt_preemptFromEwYellow, st_ljt_emergencyPreempt) into TransitionState

!insert (st_ljt_pedWalkNs, tr_ljt_preemptFromPedWalkNs) into StateTransition
!insert (tr_ljt_preemptFromPedWalkNs, st_ljt_emergencyPreempt) into TransitionState

!insert (st_ljt_pedWalkEw, tr_ljt_preemptFromPedWalkEw) into StateTransition
!insert (tr_ljt_preemptFromPedWalkEw, st_ljt_emergencyPreempt) into TransitionState

!insert (st_ljt_emergencyPreempt, tr_ljt_endPreemptToAllRed) into StateTransition
!insert (tr_ljt_endPreemptToAllRed, st_ljt_allRedStart) into TransitionState

!insert (st_ljt_allRedStart, tr_ljt_switchToNightFlash) into StateTransition
!insert (tr_ljt_switchToNightFlash, st_ljt_nightFlash) into TransitionState

!insert (st_ljt_nightFlash, tr_ljt_nightFlashBlinkPulse) into StateTransition
!insert (tr_ljt_nightFlashBlinkPulse, st_ljt_nightFlash) into TransitionState

!insert (st_ljt_nightFlash, tr_ljt_exitNightFlashToAllRed) into StateTransition
!insert (tr_ljt_exitNightFlashToAllRed, st_ljt_allRedStart) into TransitionState

!new TimeEvent('te_ljt_TTE1')
!te_ljt_TTE1.time := 2
!insert (tr_ljt_powerOnToSelfTest, te_ljt_TTE1) into TransitionContainsEvents

!new TimeEvent('te_ljt_TTE2')
!te_ljt_TTE2.time := 5
!insert (tr_ljt_selfTestToAllRed, te_ljt_TTE2) into TransitionContainsEvents

!new TimeEvent('te_ljt_TTE3')
!te_ljt_TTE3.time := 1
!insert (tr_ljt_enterMaintenanceLock, te_ljt_TTE3) into TransitionContainsEvents

!new TimeEvent('te_ljt_TTE4')
!te_ljt_TTE4.time := 600
!insert (tr_ljt_maintenanceCompleteToAllRed, te_ljt_TTE4) into TransitionContainsEvents

!new TimeEvent('te_ljt_TTE5')
!te_ljt_TTE5.time := 2
!insert (tr_ljt_allRedToNsGreen, te_ljt_TTE5) into TransitionContainsEvents

!new TimeEvent('te_ljt_TTE6')
!te_ljt_TTE6.time := 45
!insert (tr_ljt_nsGreenToNsYellow, te_ljt_TTE6) into TransitionContainsEvents

!new TimeEvent('te_ljt_TTE7')
!te_ljt_TTE7.time := 3
!insert (tr_ljt_nsYellowToPedWalkNs, te_ljt_TTE7) into TransitionContainsEvents

!new TimeEvent('te_ljt_TTE8')
!te_ljt_TTE8.time := 10
!insert (tr_ljt_pedWalkNsToPedClearNs, te_ljt_TTE8) into TransitionContainsEvents

!new TimeEvent('te_ljt_TTE9')
!te_ljt_TTE9.time := 3
!insert (tr_ljt_pedClearNsToAllRedNsToEw, te_ljt_TTE9) into TransitionContainsEvents

!new TimeEvent('te_ljt_TTE10')
!te_ljt_TTE10.time := 2
!insert (tr_ljt_allRedNsToEwToEwGreen, te_ljt_TTE10) into TransitionContainsEvents

!new TimeEvent('te_ljt_TTE11')
!te_ljt_TTE11.time := 40
!insert (tr_ljt_ewGreenToEwYellow, te_ljt_TTE11) into TransitionContainsEvents

!new TimeEvent('te_ljt_TTE12')
!te_ljt_TTE12.time := 3
!insert (tr_ljt_ewYellowToPedWalkEw, te_ljt_TTE12) into TransitionContainsEvents

!new TimeEvent('te_ljt_TTE13')
!te_ljt_TTE13.time := 10
!insert (tr_ljt_pedWalkEwToPedClearEw, te_ljt_TTE13) into TransitionContainsEvents

!new TimeEvent('te_ljt_TTE14')
!te_ljt_TTE14.time := 3
!insert (tr_ljt_pedClearEwToAllRedEwToNs, te_ljt_TTE14) into TransitionContainsEvents

!new TimeEvent('te_ljt_TTE15')
!te_ljt_TTE15.time := 2
!insert (tr_ljt_allRedEwToNsToNsGreen, te_ljt_TTE15) into TransitionContainsEvents

!new TimeEvent('te_ljt_TTE16')
!te_ljt_TTE16.time := 1
!insert (tr_ljt_preemptFromNsGreen, te_ljt_TTE16) into TransitionContainsEvents

!new TimeEvent('te_ljt_TTE17')
!te_ljt_TTE17.time := 1
!insert (tr_ljt_preemptFromEwGreen, te_ljt_TTE17) into TransitionContainsEvents

!new TimeEvent('te_ljt_TTE18')
!te_ljt_TTE18.time := 1
!insert (tr_ljt_preemptFromNsYellow, te_ljt_TTE18) into TransitionContainsEvents

!new TimeEvent('te_ljt_TTE19')
!te_ljt_TTE19.time := 1
!insert (tr_ljt_preemptFromEwYellow, te_ljt_TTE19) into TransitionContainsEvents

!new TimeEvent('te_ljt_TTE20')
!te_ljt_TTE20.time := 1
!insert (tr_ljt_preemptFromPedWalkNs, te_ljt_TTE20) into TransitionContainsEvents

!new TimeEvent('te_ljt_TTE21')
!te_ljt_TTE21.time := 1
!insert (tr_ljt_preemptFromPedWalkEw, te_ljt_TTE21) into TransitionContainsEvents

!new TimeEvent('te_ljt_TTE22')
!te_ljt_TTE22.time := 20
!insert (tr_ljt_endPreemptToAllRed, te_ljt_TTE22) into TransitionContainsEvents

!new TimeEvent('te_ljt_TTE23')
!te_ljt_TTE23.time := 1
!insert (tr_ljt_switchToNightFlash, te_ljt_TTE23) into TransitionContainsEvents

!new TimeEvent('te_ljt_TTE24')
!te_ljt_TTE24.time := 2
!insert (tr_ljt_nightFlashBlinkPulse, te_ljt_TTE24) into TransitionContainsEvents

!new TimeEvent('te_ljt_TTE25')
!te_ljt_TTE25.time := 1
!insert (tr_ljt_exitNightFlashToAllRed, te_ljt_TTE25) into TransitionContainsEvents
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 251 | 0.00% |
| Multiplicities Errors | 0 | 117 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

## Category edge
```
!new StateMachine('sm_returnHubOddReachability')
!sm_returnHubOddReachability.name := 'returnHubOddReachability'

!new State('st_rhor_home')
!st_rhor_home.name := 'home'
!new State('st_rhor_zona')
!st_rhor_zona.name := 'zona'
!new State('st_rhor_exito')
!st_rhor_exito.name := 'éxito'
!new State('st_rhor_kentro')
!st_rhor_kentro.name := 'κέντρο'
!new State('st_rhor_razvorot')
!st_rhor_razvorot.name := 'разворот'
!new State('st_rhor_marhaba')
!st_rhor_marhaba.name := 'مرحبا'

!insert (sm_returnHubOddReachability, st_rhor_home) into StateMachineContainsStates
!insert (sm_returnHubOddReachability, st_rhor_zona) into StateMachineContainsStates
!insert (sm_returnHubOddReachability, st_rhor_exito) into StateMachineContainsStates
!insert (sm_returnHubOddReachability, st_rhor_kentro) into StateMachineContainsStates
!insert (sm_returnHubOddReachability, st_rhor_razvorot) into StateMachineContainsStates
!insert (sm_returnHubOddReachability, st_rhor_marhaba) into StateMachineContainsStates

!insert (sm_returnHubOddReachability, st_rhor_home) into StateMachineStartsStates

!new Transition('tr_rhor_dispatch')
!tr_rhor_dispatch.name := 'dispatch'
!new Transition('tr_rhor_returnQuick')
!tr_rhor_returnQuick.name := 'returnQuick'
!new Transition('tr_rhor_returnSlow')
!tr_rhor_returnSlow.name := 'returnSlow'
!new Transition('tr_rhor_reportSuccess')
!tr_rhor_reportSuccess.name := 'reportSuccess'
!new Transition('tr_rhor_spin')
!tr_rhor_spin.name := 'spin'
!new Transition('tr_rhor_backToHome')
!tr_rhor_backToHome.name := 'backToHome'
!new Transition('tr_rhor_uTurn')
!tr_rhor_uTurn.name := 'uTurn'
!new Transition('tr_rhor_greetAndReturn')
!tr_rhor_greetAndReturn.name := 'greetAndReturn'

!insert (sm_returnHubOddReachability, tr_rhor_dispatch) into StateMachineContainsTransitions
!insert (sm_returnHubOddReachability, tr_rhor_returnQuick) into StateMachineContainsTransitions
!insert (sm_returnHubOddReachability, tr_rhor_returnSlow) into StateMachineContainsTransitions
!insert (sm_returnHubOddReachability, tr_rhor_reportSuccess) into StateMachineContainsTransitions
!insert (sm_returnHubOddReachability, tr_rhor_spin) into StateMachineContainsTransitions
!insert (sm_returnHubOddReachability, tr_rhor_backToHome) into StateMachineContainsTransitions
!insert (sm_returnHubOddReachability, tr_rhor_uTurn) into StateMachineContainsTransitions
!insert (sm_returnHubOddReachability, tr_rhor_greetAndReturn) into StateMachineContainsTransitions

!insert (st_rhor_home, tr_rhor_dispatch) into StateTransition
!insert (tr_rhor_dispatch, st_rhor_zona) into TransitionState

!insert (st_rhor_zona, tr_rhor_returnQuick) into StateTransition
!insert (tr_rhor_returnQuick, st_rhor_home) into TransitionState

!insert (st_rhor_zona, tr_rhor_returnSlow) into StateTransition
!insert (tr_rhor_returnSlow, st_rhor_home) into TransitionState

!insert (st_rhor_exito, tr_rhor_reportSuccess) into StateTransition
!insert (tr_rhor_reportSuccess, st_rhor_home) into TransitionState

!insert (st_rhor_kentro, tr_rhor_spin) into StateTransition
!insert (tr_rhor_spin, st_rhor_kentro) into TransitionState

!insert (st_rhor_kentro, tr_rhor_backToHome) into StateTransition
!insert (tr_rhor_backToHome, st_rhor_home) into TransitionState

!insert (st_rhor_razvorot, tr_rhor_uTurn) into StateTransition
!insert (tr_rhor_uTurn, st_rhor_home) into TransitionState

!insert (st_rhor_marhaba, tr_rhor_greetAndReturn) into StateTransition
!insert (tr_rhor_greetAndReturn, st_rhor_home) into TransitionState

!new TimeEvent('te_rhor_dispatch')
!te_rhor_dispatch.time := 1
!insert (tr_rhor_dispatch, te_rhor_dispatch) into TransitionContainsEvents

!new TimeEvent('te_rhor_returnQuick')
!te_rhor_returnQuick.time := 1
!insert (tr_rhor_returnQuick, te_rhor_returnQuick) into TransitionContainsEvents

!new TimeEvent('te_rhor_returnSlow')
!te_rhor_returnSlow.time := 120
!insert (tr_rhor_returnSlow, te_rhor_returnSlow) into TransitionContainsEvents

!new TimeEvent('te_rhor_reportSuccess')
!te_rhor_reportSuccess.time := 7
!insert (tr_rhor_reportSuccess, te_rhor_reportSuccess) into TransitionContainsEvents

!new TimeEvent('te_rhor_spin')
!te_rhor_spin.time := 9
!insert (tr_rhor_spin, te_rhor_spin) into TransitionContainsEvents

!new TimeEvent('te_rhor_backToHome')
!te_rhor_backToHome.time := 10
!insert (tr_rhor_backToHome, te_rhor_backToHome) into TransitionContainsEvents

!new TimeEvent('te_rhor_uTurn')
!te_rhor_uTurn.time := 2
!insert (tr_rhor_uTurn, te_rhor_uTurn) into TransitionContainsEvents

!new TimeEvent('te_rhor_greetAndReturn')
!te_rhor_greetAndReturn.time := 3
!insert (tr_rhor_greetAndReturn, te_rhor_greetAndReturn) into TransitionContainsEvents
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 85 | 0.00% |
| Multiplicities Errors | 0 | 39 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

## Category invalid
```
!new StateMachine('sm_thermostatResumeController')
!sm_thermostatResumeController.name := 'thermostatResumeController'

!new State('st_th_standby')
!st_th_standby.name := 'standby'
!new State('st_th_heating')
!st_th_heating.name := 'heating'
!new State('st_th_cooling')
!st_th_cooling.name := 'cooling'
!new State('st_th_off')
!st_th_off.name := 'off'
!new State('st_th_fault')
!st_th_fault.name := 'fault'

!insert (sm_thermostatResumeController, st_th_standby) into StateMachineContainsStates
!insert (sm_thermostatResumeController, st_th_heating) into StateMachineContainsStates
!insert (sm_thermostatResumeController, st_th_cooling) into StateMachineContainsStates
!insert (sm_thermostatResumeController, st_th_off) into StateMachineContainsStates
!insert (sm_thermostatResumeController, st_th_fault) into StateMachineContainsStates

!new Transition('tr_th_tStandbyToHeating')
!tr_th_tStandbyToHeating.name := 'tStandbyToHeating'
!new Transition('tr_th_tHeatingToStandby')
!tr_th_tHeatingToStandby.name := 'tHeatingToStandby'
!new Transition('tr_th_tStandbyToCooling')
!tr_th_tStandbyToCooling.name := 'tStandbyToCooling'
!new Transition('tr_th_tCoolingToStandby')
!tr_th_tCoolingToStandby.name := 'tCoolingToStandby'
!new Transition('tr_th_tStandbyToOff')
!tr_th_tStandbyToOff.name := 'tStandbyToOff'
!new Transition('tr_th_tOffToStandby')
!tr_th_tOffToStandby.name := 'tOffToStandby'
!new Transition('tr_th_tFaultToStandby')
!tr_th_tFaultToStandby.name := 'tFaultToStandby'

!insert (sm_thermostatResumeController, tr_th_tStandbyToHeating) into StateMachineContainsTransitions
!insert (sm_thermostatResumeController, tr_th_tHeatingToStandby) into StateMachineContainsTransitions
!insert (sm_thermostatResumeController, tr_th_tStandbyToCooling) into StateMachineContainsTransitions
!insert (sm_thermostatResumeController, tr_th_tCoolingToStandby) into StateMachineContainsTransitions
!insert (sm_thermostatResumeController, tr_th_tStandbyToOff) into StateMachineContainsTransitions
!insert (sm_thermostatResumeController, tr_th_tOffToStandby) into StateMachineContainsTransitions
!insert (sm_thermostatResumeController, tr_th_tFaultToStandby) into StateMachineContainsTransitions

!insert (st_th_standby, tr_th_tStandbyToHeating) into StateTransition
!insert (tr_th_tStandbyToHeating, st_th_heating) into TransitionState

!insert (st_th_heating, tr_th_tHeatingToStandby) into StateTransition
!insert (tr_th_tHeatingToStandby, st_th_standby) into TransitionState

!insert (st_th_standby, tr_th_tStandbyToCooling) into StateTransition
!insert (tr_th_tStandbyToCooling, st_th_cooling) into TransitionState

!insert (st_th_cooling, tr_th_tCoolingToStandby) into StateTransition
!insert (tr_th_tCoolingToStandby, st_th_standby) into TransitionState

!insert (st_th_standby, tr_th_tStandbyToOff) into StateTransition
!insert (tr_th_tStandbyToOff, st_th_off) into TransitionState

!insert (st_th_off, tr_th_tOffToStandby) into StateTransition
!insert (tr_th_tOffToStandby, st_th_standby) into TransitionState

!insert (st_th_fault, tr_th_tFaultToStandby) into StateTransition
!insert (tr_th_tFaultToStandby, st_th_standby) into TransitionState

!new TimeEvent('te_th_tStandbyToHeating')
!te_th_tStandbyToHeating.time := 30
!insert (tr_th_tStandbyToHeating, te_th_tStandbyToHeating) into TransitionContainsEvents

!new TimeEvent('te_th_tHeatingToStandby')
!te_th_tHeatingToStandby.time := 180
!insert (tr_th_tHeatingToStandby, te_th_tHeatingToStandby) into TransitionContainsEvents

!new TimeEvent('te_th_tStandbyToCooling')
!te_th_tStandbyToCooling.time := 30
!insert (tr_th_tStandbyToCooling, te_th_tStandbyToCooling) into TransitionContainsEvents

!new TimeEvent('te_th_tCoolingToStandby')
!te_th_tCoolingToStandby.time := 180
!insert (tr_th_tCoolingToStandby, te_th_tCoolingToStandby) into TransitionContainsEvents

!new TimeEvent('te_th_tStandbyToOff')
!te_th_tStandbyToOff.time := 10
!insert (tr_th_tStandbyToOff, te_th_tStandbyToOff) into TransitionContainsEvents

!new TimeEvent('te_th_tOffToStandby')
!te_th_tOffToStandby.time := 5
!insert (tr_th_tOffToStandby, te_th_tOffToStandby) into TransitionContainsEvents

!new TimeEvent('te_th_tFaultToStandby')
!te_th_tFaultToStandby.time := 60
!insert (tr_th_tFaultToStandby, te_th_tFaultToStandby) into TransitionContainsEvents
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 33 | 3.03% |
| Invariants Errors (Not included on General) | 0 | 2 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `StateMachineStartsStates':
  Object `sm_thermostatResumeController' of class `StateMachine' is connected to 0 objects of class `State'
  at association end `start' but the multiplicity is specified as `1'.
```

| No specific metrics for this system | 
 |---|

## Generation 6 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 576 | 0.00% |
| Multiplicities Errors | 0 | 229 | 0.00% |
| Invariants Errors | 0 | 8 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 33 | 3.03% |
| Invariants Errors (Not included on General) | 0 | 2 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `StateMachineStartsStates':
  Object `sm_thermostatResumeController' of class `StateMachine' is connected to 0 objects of class `State'
  at association end `start' but the multiplicity is specified as `1'.
```

| No specific metrics for this system | 
 |---|

# Summary for all generations
| Summary | Value | 
|---|---| 
| Model | GPT_5_2 | 
| Type | CoT | 
| System | statemachine | 
| Number of generations | 6 | 

| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 2693 | 0.00% |
| Multiplicities Errors | 0 | 1049 | 0.00% |
| Invariants Errors | 0 | 48 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 4 | 178 | 2.25% |
| Invariants Errors (Not included on General) | 2 | 12 | 16.67% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `StateMachineStartsStates':
  Object `sm_metroGateController' of class `StateMachine' is connected to 2 objects of class `State'
  at association end `start' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `StateMachineStartsStates':
  Object `st_shared_welcome_fix' of class `State' is connected to 2 objects of class `StateMachine'
  at association end `isStartStateOf' but the multiplicity is specified as `0..1'.
```
```
Multiplicity constraint violation in association `TransitionContainsEvents':
  Object `tr_gh_tStartWatering' of class `Transition' is connected to 2 objects of class `TimeEvent'
  at association end `timer' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `StateMachineStartsStates':
  Object `sm_thermostatResumeController' of class `StateMachine' is connected to 0 objects of class `State'
  at association end `start' but the multiplicity is specified as `1'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (1) `StateMachine::FirstCharLowerCase': FAILED.
```
```
checking invariant (2) `TimeEvent::TimeIsPositive': FAILED.
```

| No specific metrics for this system | 
 |---|

