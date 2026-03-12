# Generation 1
## Category baseline
```
!new StateMachine('trafficControlSystem')
!trafficControlSystem.name := 'trafficControlSystem'

!new State('greenLight')
!greenLight.name := 'greenLight'

!new State('yellowLight')
!yellowLight.name := 'yellowLight'

!new State('redLight')
!redLight.name := 'redLight'

!new State('allRed')
!allRed.name := 'allRed'

!new Transition('greenToYellow')
!greenToYellow.name := 'greenToYellow'

!new Transition('yellowToRed')
!yellowToRed.name := 'yellowToRed'

!new Transition('redToAllRed')
!redToAllRed.name := 'redToAllRed'

!new Transition('allRedToGreen')
!allRedToGreen.name := 'allRedToGreen'

!new TimeEvent('timeEvent60')
!timeEvent60.time := 60

!new TimeEvent('timeEvent5')
!timeEvent5.time := 5

!new TimeEvent('timeEvent55')
!timeEvent55.time := 55

!new TimeEvent('timeEvent2')
!timeEvent2.time := 2

!insert (trafficControlSystem, greenLight) into StateMachineContainsStates
!insert (trafficControlSystem, yellowLight) into StateMachineContainsStates
!insert (trafficControlSystem, redLight) into StateMachineContainsStates
!insert (trafficControlSystem, allRed) into StateMachineContainsStates

!insert (trafficControlSystem, greenToYellow) into StateMachineContainsTransitions
!insert (trafficControlSystem, yellowToRed) into StateMachineContainsTransitions
!insert (trafficControlSystem, redToAllRed) into StateMachineContainsTransitions
!insert (trafficControlSystem, allRedToGreen) into StateMachineContainsTransitions

!insert (greenToYellow, timeEvent60) into TransitionContainsEvents
!insert (yellowToRed, timeEvent5) into TransitionContainsEvents
!insert (redToAllRed, timeEvent55) into TransitionContainsEvents
!insert (allRedToGreen, timeEvent2) into TransitionContainsEvents

!insert (greenLight, greenToYellow) into StateTransition
!insert (greenToYellow, yellowLight) into TransitionState

!insert (yellowLight, yellowToRed) into StateTransition
!insert (yellowToRed, redLight) into TransitionState

!insert (redLight, redToAllRed) into StateTransition
!insert (redToAllRed, allRed) into TransitionState

!insert (allRed, allRedToGreen) into StateTransition
!insert (allRedToGreen, greenLight) into TransitionState

!insert (trafficControlSystem, greenLight) into StateMachineStartsStates
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
!new StateMachine('minimalMachine')
!minimalMachine.name := 'minimalMachine'

!new State('state1')
!state1.name := 'state1'

!new Transition('transition')
!transition.name := 'transition'

!new TimeEvent('timeEvent1')
!timeEvent1.time := 1

!insert (minimalMachine, state1) into StateMachineContainsStates

!insert (minimalMachine, transition) into StateMachineContainsTransitions

!insert (transition, timeEvent1) into TransitionContainsEvents

!insert (state1, transition) into StateTransition
!insert (transition, state1) into TransitionState

!insert (minimalMachine, state1) into StateMachineStartsStates
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
!new StateMachine('trainControlSystem')
!trainControlSystem.name := 'trainControlSystem'

!new State('idle')
!idle.name := 'idle'

!new State('prepareForDeparture')
!prepareForDeparture.name := 'prepareForDeparture'

!new State('inMotion')
!inMotion.name := 'inMotion'

!new State('awaitingSignal')
!awaitingSignal.name := 'awaitingSignal'

!new State('atStation')
!atStation.name := 'atStation'

!new State('shutdown')
!shutdown.name := 'shutdown'

!new Transition('idleToPrepare')
!idleToPrepare.name := 'idleToPrepare'

!new Transition('prepareToInMotion')
!prepareToInMotion.name := 'prepareToInMotion'

!new Transition('inMotionToAwait')
!inMotionToAwait.name := 'inMotionToAwait'

!new Transition('awaitToInMotion')
!awaitToInMotion.name := 'awaitToInMotion'

!new Transition('inMotionToAtStation')
!inMotionToAtStation.name := 'inMotionToAtStation'

!new Transition('atStationToInMotion')
!atStationToInMotion.name := 'atStationToInMotion'

!new Transition('atStationToShutdown')
!atStationToShutdown.name := 'atStationToShutdown'

!new TimeEvent('timeEvent1')
!timeEvent1.time := 5

!new TimeEvent('timeEvent2')
!timeEvent2.time := 10

!new TimeEvent('timeEvent3')
!timeEvent3.time := 3

!new TimeEvent('timeEvent4')
!timeEvent4.time := 15

!new TimeEvent('defaultTimeEvent1')
!defaultTimeEvent1.time := 1

!new TimeEvent('defaultTimeEvent2')
!defaultTimeEvent2.time := 1

!new TimeEvent('defaultTimeEvent3')
!defaultTimeEvent3.time := 1

!insert (trainControlSystem, idle) into StateMachineContainsStates
!insert (trainControlSystem, prepareForDeparture) into StateMachineContainsStates
!insert (trainControlSystem, inMotion) into StateMachineContainsStates
!insert (trainControlSystem, awaitingSignal) into StateMachineContainsStates
!insert (trainControlSystem, atStation) into StateMachineContainsStates
!insert (trainControlSystem, shutdown) into StateMachineContainsStates

!insert (trainControlSystem, idleToPrepare) into StateMachineContainsTransitions
!insert (trainControlSystem, prepareToInMotion) into StateMachineContainsTransitions
!insert (trainControlSystem, inMotionToAwait) into StateMachineContainsTransitions
!insert (trainControlSystem, awaitToInMotion) into StateMachineContainsTransitions
!insert (trainControlSystem, inMotionToAtStation) into StateMachineContainsTransitions
!insert (trainControlSystem, atStationToInMotion) into StateMachineContainsTransitions
!insert (trainControlSystem, atStationToShutdown) into StateMachineContainsTransitions

!insert (idleToPrepare, timeEvent1) into TransitionContainsEvents
!insert (prepareToInMotion, timeEvent2) into TransitionContainsEvents
!insert (inMotionToAwait, defaultTimeEvent1) into TransitionContainsEvents
!insert (awaitToInMotion, defaultTimeEvent2) into TransitionContainsEvents
!insert (inMotionToAtStation, timeEvent3) into TransitionContainsEvents
!insert (atStationToInMotion, defaultTimeEvent3) into TransitionContainsEvents
!insert (atStationToShutdown, timeEvent4) into TransitionContainsEvents

!insert (idle, idleToPrepare) into StateTransition
!insert (idleToPrepare, prepareForDeparture) into TransitionState

!insert (prepareForDeparture, prepareToInMotion) into StateTransition
!insert (prepareToInMotion, inMotion) into TransitionState

!insert (inMotion, inMotionToAwait) into StateTransition
!insert (inMotionToAwait, awaitingSignal) into TransitionState

!insert (awaitingSignal, awaitToInMotion) into StateTransition
!insert (awaitToInMotion, inMotion) into TransitionState

!insert (inMotion, inMotionToAtStation) into StateTransition
!insert (inMotionToAtStation, atStation) into TransitionState

!insert (atStation, atStationToInMotion) into StateTransition
!insert (atStationToInMotion, inMotion) into TransitionState

!insert (atStation, atStationToShutdown) into StateTransition
!insert (atStationToShutdown, shutdown) into TransitionState

!insert (trainControlSystem, idle) into StateMachineStartsStates
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 77 | 0.00% |
| Multiplicities Errors | 0 | 35 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

## Category edge
```
!new StateMachine('quietMachine')
!quietMachine.name := 'quietMachine'

!new State('startState')
!startState.name := 'startState'

!new State('intermediate')
!intermediate.name := 'intermediate'

!new State('lonely')
!lonely.name := 'lonely'

!new Transition('transitionOne')
!transitionOne.name := 'transitionOne'

!new Transition('loopBack')
!loopBack.name := 'loopBack'

!new TimeEvent('timeEvent1')
!timeEvent1.time := 1

!new TimeEvent('timeEvent2')
!timeEvent2.time := 2

!insert (quietMachine, startState) into StateMachineContainsStates
!insert (quietMachine, intermediate) into StateMachineContainsStates
!insert (quietMachine, lonely) into StateMachineContainsStates

!insert (quietMachine, transitionOne) into StateMachineContainsTransitions
!insert (quietMachine, loopBack) into StateMachineContainsTransitions

!insert (transitionOne, timeEvent1) into TransitionContainsEvents
!insert (loopBack, timeEvent2) into TransitionContainsEvents

!insert (startState, transitionOne) into StateTransition
!insert (transitionOne, lonely) into TransitionState

!insert (lonely, loopBack) into StateTransition
!insert (loopBack, lonely) into TransitionState

!insert (quietMachine, lonely) into StateMachineStartsStates
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 28 | 0.00% |
| Multiplicities Errors | 0 | 12 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

## Category invalid
```
!new StateMachine('CafeOrderProcessing')
!CafeOrderProcessing.name := 'CafeOrderProcessing'

!new State('received')
!received.name := 'received'

!new State('prepared')
!prepared.name := 'prepared'

!new State('served')
!served.name := 'served'

!new State('paid')
!paid.name := 'paid'

!new Transition('ReceiveToPrepare')
!ReceiveToPrepare.name := 'Receive to Prepare'

!new Transition('PrepareToServe')
!PrepareToServe.name := 'Prepare to Serve'

!new Transition('ServeToPay')
!ServeToPay.name := 'Serve to Pay'

!new TimeEvent('ReceiveTimeout')
!ReceiveTimeout.time := 5

!new TimeEvent('PrepareTimeout')
!PrepareTimeout.time := 10

!new TimeEvent('ServeTimeout')
!ServeTimeout.time := 15

!insert (CafeOrderProcessing, received) into StateMachineContainsStates
!insert (CafeOrderProcessing, prepared) into StateMachineContainsStates
!insert (CafeOrderProcessing, served) into StateMachineContainsStates
!insert (CafeOrderProcessing, paid) into StateMachineContainsStates

!insert (CafeOrderProcessing, ReceiveToPrepare) into StateMachineContainsTransitions
!insert (CafeOrderProcessing, PrepareToServe) into StateMachineContainsTransitions
!insert (CafeOrderProcessing, ServeToPay) into StateMachineContainsTransitions

!insert (ReceiveToPrepare, ReceiveTimeout) into TransitionContainsEvents
!insert (PrepareToServe, PrepareTimeout) into TransitionContainsEvents
!insert (ServeToPay, ServeTimeout) into TransitionContainsEvents

!insert (received, ReceiveToPrepare) into StateTransition
!insert (ReceiveToPrepare, prepared) into TransitionState

!insert (prepared, PrepareToServe) into StateTransition
!insert (PrepareToServe, served) into TransitionState

!insert (served, ServeToPay) into StateTransition
!insert (ServeToPay, paid) into TransitionState

!insert (CafeOrderProcessing, received) into StateMachineStartsStates
!insert (CafeOrderProcessing, prepared) into StateMachineStartsStates
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 18 | 5.56% |
| Invariants Errors (Not included on General) | 0 | 2 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `StateMachineStartsStates':
  Object `CafeOrderProcessing' of class `StateMachine' is connected to 2 objects of class `State'
  at association end `start' but the multiplicity is specified as `1'.
```

| No specific metrics for this system | 
 |---|

## Generation 1 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 206 | 0.00% |
| Multiplicities Errors | 0 | 74 | 0.00% |
| Invariants Errors | 0 | 8 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 18 | 5.56% |
| Invariants Errors (Not included on General) | 0 | 2 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `StateMachineStartsStates':
  Object `CafeOrderProcessing' of class `StateMachine' is connected to 2 objects of class `State'
  at association end `start' but the multiplicity is specified as `1'.
```

| No specific metrics for this system | 
 |---|

# Generation 2
## Category baseline
```
!new StateMachine('homeHeatingSystem')
!homeHeatingSystem.name := 'homeHeatingSystem'

!new State('comfyMode')
!comfyMode.name := 'comfyMode'

!new State('economyMode')
!economyMode.name := 'economyMode'

!new State('offMode')
!offMode.name := 'offMode'

!new Transition('comfyToEconomy')
!comfyToEconomy.name := 'comfyToEconomy'

!new Transition('economyToComfy')
!economyToComfy.name := 'economyToComfy'

!new Transition('comfyToOff')
!comfyToOff.name := 'comfyToOff'

!new Transition('offToComfy')
!offToComfy.name := 'offToComfy'

!new TimeEvent('timeEvent30')
!timeEvent30.time := 30

!new TimeEvent('timeEvent5')
!timeEvent5.time := 5

!new TimeEvent('timeEvent120')
!timeEvent120.time := 120

!new TimeEvent('timeEvent10')
!timeEvent10.time := 10

!insert (homeHeatingSystem, comfyMode) into StateMachineContainsStates
!insert (homeHeatingSystem, economyMode) into StateMachineContainsStates
!insert (homeHeatingSystem, offMode) into StateMachineContainsStates

!insert (homeHeatingSystem, comfyToEconomy) into StateMachineContainsTransitions
!insert (homeHeatingSystem, economyToComfy) into StateMachineContainsTransitions
!insert (homeHeatingSystem, comfyToOff) into StateMachineContainsTransitions
!insert (homeHeatingSystem, offToComfy) into StateMachineContainsTransitions

!insert (comfyToEconomy, timeEvent30) into TransitionContainsEvents
!insert (economyToComfy, timeEvent5) into TransitionContainsEvents
!insert (comfyToOff, timeEvent120) into TransitionContainsEvents
!insert (offToComfy, timeEvent10) into TransitionContainsEvents

!insert (comfyMode, comfyToEconomy) into StateTransition
!insert (comfyToEconomy, economyMode) into TransitionState

!insert (economyMode, economyToComfy) into StateTransition
!insert (economyToComfy, comfyMode) into TransitionState

!insert (comfyMode, comfyToOff) into StateTransition
!insert (comfyToOff, offMode) into TransitionState

!insert (offMode, offToComfy) into StateTransition
!insert (offToComfy, comfyMode) into TransitionState

!insert (homeHeatingSystem, comfyMode) into StateMachineStartsStates
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 44 | 0.00% |
| Multiplicities Errors | 0 | 20 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

## Category boundary
```
!new StateMachine('complexFlow')
!complexFlow.name := 'complexFlow'

!new State('startState')
!startState.name := 'startState'

!new State('processingState')
!processingState.name := 'processingState'

!new State('finalState')
!finalState.name := 'finalState'

!new Transition('initiateTransition')
!initiateTransition.name := 'initiateTransition'

!new Transition('processingTransition')
!processingTransition.name := 'processingTransition'

!new Transition('completionTransition')
!completionTransition.name := 'completionTransition'

!new TimeEvent('timeEvent5')
!timeEvent5.time := 5

!new TimeEvent('timeEvent10')
!timeEvent10.time := 10

!new TimeEvent('timeEvent15')
!timeEvent15.time := 15

!insert (complexFlow, startState) into StateMachineContainsStates
!insert (complexFlow, processingState) into StateMachineContainsStates
!insert (complexFlow, finalState) into StateMachineContainsStates

!insert (complexFlow, initiateTransition) into StateMachineContainsTransitions
!insert (complexFlow, processingTransition) into StateMachineContainsTransitions
!insert (complexFlow, completionTransition) into StateMachineContainsTransitions

!insert (initiateTransition, timeEvent5) into TransitionContainsEvents
!insert (processingTransition, timeEvent10) into TransitionContainsEvents
!insert (completionTransition, timeEvent15) into TransitionContainsEvents

!insert (startState, initiateTransition) into StateTransition
!insert (initiateTransition, processingState) into TransitionState

!insert (processingState, processingTransition) into StateTransition
!insert (processingTransition, finalState) into TransitionState

!insert (finalState, completionTransition) into StateTransition
!insert (completionTransition, finalState) into TransitionState

!insert (complexFlow, startState) into StateMachineStartsStates
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 36 | 0.00% |
| Multiplicities Errors | 0 | 16 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

## Category complex
```
!new StateMachine('robotWorkflow')
!robotWorkflow.name := 'robotWorkflow'

!new State('standby')
!standby.name := 'standby'

!new State('operational')
!operational.name := 'operational'

!new State('maintenanceCheck')
!maintenanceCheck.name := 'maintenanceCheck'

!new State('errorMode')
!errorMode.name := 'errorMode'

!new State('shutdownProcedure')
!shutdownProcedure.name := 'shutdownProcedure'

!new State('calibration')
!calibration.name := 'calibration'

!new Transition('standbyToOperational')
!standbyToOperational.name := 'standbyToOperational'

!new Transition('operationalToMaintenance')
!operationalToMaintenance.name := 'operationalToMaintenance'

!new Transition('maintenanceToOperational')
!maintenanceToOperational.name := 'maintenanceToOperational'

!new Transition('operationalToError')
!operationalToError.name := 'operationalToError'

!new Transition('errorToShutdown')
!errorToShutdown.name := 'errorToShutdown'

!new Transition('errorToCalibration')
!errorToCalibration.name := 'errorToCalibration'

!new Transition('calibrationToOperational')
!calibrationToOperational.name := 'calibrationToOperational'

!new TimeEvent('timeEvent1')
!timeEvent1.time := 1

!new TimeEvent('timeEvent30')
!timeEvent30.time := 30

!new TimeEvent('timeEvent15')
!timeEvent15.time := 15

!new TimeEvent('timeEvent5')
!timeEvent5.time := 5

!new TimeEvent('timeEventDefault1')
!timeEventDefault1.time := 1

!new TimeEvent('timeEventDefault2')
!timeEventDefault2.time := 1

!new TimeEvent('timeEventDefault3')
!timeEventDefault3.time := 1

!insert (robotWorkflow, standby) into StateMachineContainsStates
!insert (robotWorkflow, operational) into StateMachineContainsStates
!insert (robotWorkflow, maintenanceCheck) into StateMachineContainsStates
!insert (robotWorkflow, errorMode) into StateMachineContainsStates
!insert (robotWorkflow, shutdownProcedure) into StateMachineContainsStates
!insert (robotWorkflow, calibration) into StateMachineContainsStates

!insert (robotWorkflow, standbyToOperational) into StateMachineContainsTransitions
!insert (robotWorkflow, operationalToMaintenance) into StateMachineContainsTransitions
!insert (robotWorkflow, maintenanceToOperational) into StateMachineContainsTransitions
!insert (robotWorkflow, operationalToError) into StateMachineContainsTransitions
!insert (robotWorkflow, errorToShutdown) into StateMachineContainsTransitions
!insert (robotWorkflow, errorToCalibration) into StateMachineContainsTransitions
!insert (robotWorkflow, calibrationToOperational) into StateMachineContainsTransitions

!insert (standbyToOperational, timeEvent1) into TransitionContainsEvents
!insert (operationalToMaintenance, timeEvent30) into TransitionContainsEvents
!insert (maintenanceToOperational, timeEventDefault1) into TransitionContainsEvents
!insert (operationalToError, timeEventDefault2) into TransitionContainsEvents
!insert (errorToShutdown, timeEvent15) into TransitionContainsEvents
!insert (errorToCalibration, timeEventDefault3) into TransitionContainsEvents
!insert (calibrationToOperational, timeEvent5) into TransitionContainsEvents

!insert (standby, standbyToOperational) into StateTransition
!insert (standbyToOperational, operational) into TransitionState

!insert (operational, operationalToMaintenance) into StateTransition
!insert (operationalToMaintenance, maintenanceCheck) into TransitionState

!insert (maintenanceCheck, maintenanceToOperational) into StateTransition
!insert (maintenanceToOperational, operational) into TransitionState

!insert (operational, operationalToError) into StateTransition
!insert (operationalToError, errorMode) into TransitionState

!insert (errorMode, errorToShutdown) into StateTransition
!insert (errorToShutdown, shutdownProcedure) into TransitionState

!insert (errorMode, errorToCalibration) into StateTransition
!insert (errorToCalibration, calibration) into TransitionState

!insert (calibration, calibrationToOperational) into StateTransition
!insert (calibrationToOperational, operational) into TransitionState

!insert (robotWorkflow, standby) into StateMachineStartsStates
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 77 | 0.00% |
| Multiplicities Errors | 0 | 35 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

## Category edge
```
!new StateMachine('complexPath')
!complexPath.name := 'complexPath'

!new State('aInitial')
!aInitial.name := 'aInitial'

!new State('bFork')
!bFork.name := 'bFork'

!new State('endState')
!endState.name := 'endState'

!new State('cLone')
!cLone.name := 'cLone'

!new Transition('startToFork')
!startToFork.name := 'startToFork'

!new Transition('forkToEnd')
!forkToEnd.name := 'forkToEnd'

!new Transition('forkToLone')
!forkToLone.name := 'forkToLone'

!new TimeEvent('timeEvent3')
!timeEvent3.time := 3

!new TimeEvent('timeEvent5')
!timeEvent5.time := 5

!new TimeEvent('timeEvent1')
!timeEvent1.time := 1

!insert (complexPath, aInitial) into StateMachineContainsStates
!insert (complexPath, bFork) into StateMachineContainsStates
!insert (complexPath, endState) into StateMachineContainsStates
!insert (complexPath, cLone) into StateMachineContainsStates

!insert (complexPath, startToFork) into StateMachineContainsTransitions
!insert (complexPath, forkToEnd) into StateMachineContainsTransitions
!insert (complexPath, forkToLone) into StateMachineContainsTransitions

!insert (startToFork, timeEvent3) into TransitionContainsEvents
!insert (forkToEnd, timeEvent5) into TransitionContainsEvents
!insert (forkToLone, timeEvent1) into TransitionContainsEvents

!insert (aInitial, startToFork) into StateTransition
!insert (startToFork, bFork) into TransitionState

!insert (bFork, forkToEnd) into StateTransition
!insert (forkToEnd, endState) into TransitionState

!insert (bFork, forkToLone) into StateTransition
!insert (forkToLone, cLone) into TransitionState

!insert (complexPath, aInitial) into StateMachineStartsStates
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 39 | 0.00% |
| Multiplicities Errors | 0 | 17 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

## Category invalid
```
!new StateMachine('EmergencyResponse')
!EmergencyResponse.name := 'EmergencyResponse'

!new State('idle')
!idle.name := 'idle'

!new State('alerted')
!alerted.name := 'alerted'

!new State('responding')
!responding.name := 'responding'

!new State('resolved')
!resolved.name := 'resolved'

!new Transition('IdleToAlert')
!IdleToAlert.name := 'Idle to Alert'

!new Transition('AlertToRespond')
!AlertToRespond.name := 'Alert to Respond'

!new Transition('RespondToResolved')
!RespondToResolved.name := 'Respond to Resolved'

!new TimeEvent('IdleTimeout')
!IdleTimeout.time := 0

!new TimeEvent('AlertTimeout')
!AlertTimeout.time := 60

!new TimeEvent('RespondTimeout')
!RespondTimeout.time := 120

!insert (EmergencyResponse, idle) into StateMachineContainsStates
!insert (EmergencyResponse, alerted) into StateMachineContainsStates
!insert (EmergencyResponse, responding) into StateMachineContainsStates
!insert (EmergencyResponse, resolved) into StateMachineContainsStates

!insert (EmergencyResponse, IdleToAlert) into StateMachineContainsTransitions
!insert (EmergencyResponse, AlertToRespond) into StateMachineContainsTransitions
!insert (EmergencyResponse, RespondToResolved) into StateMachineContainsTransitions

!insert (IdleToAlert, IdleTimeout) into TransitionContainsEvents
!insert (AlertToRespond, AlertTimeout) into TransitionContainsEvents
!insert (RespondToResolved, RespondTimeout) into TransitionContainsEvents

!insert (idle, IdleToAlert) into StateTransition
!insert (IdleToAlert, alerted) into TransitionState

!insert (alerted, AlertToRespond) into StateTransition
!insert (AlertToRespond, responding) into TransitionState

!insert (responding, RespondToResolved) into StateTransition
!insert (RespondToResolved, resolved) into TransitionState

!insert (EmergencyResponse, idle) into StateMachineStartsStates
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 17 | 0.00% |
| Invariants Errors (Not included on General) | 1 | 2 | 50.00% |

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (2) `TimeEvent::TimeIsPositive': FAILED.
```

| No specific metrics for this system | 
 |---|

## Generation 2 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 235 | 0.00% |
| Multiplicities Errors | 0 | 88 | 0.00% |
| Invariants Errors | 0 | 8 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 17 | 0.00% |
| Invariants Errors (Not included on General) | 1 | 2 | 50.00% |

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (2) `TimeEvent::TimeIsPositive': FAILED.
```

| No specific metrics for this system | 
 |---|

# Generation 3
## Category baseline
```
!new StateMachine('elevatorSystem')
!elevatorSystem.name := 'elevatorSystem'

!new State('stationary')
!stationary.name := 'stationary'

!new State('movingUp')
!movingUp.name := 'movingUp'

!new State('movingDown')
!movingDown.name := 'movingDown'

!new State('maintenance')
!maintenance.name := 'maintenance'

!new Transition('stationaryToMovingUp')
!stationaryToMovingUp.name := 'stationaryToMovingUp'

!new Transition('movingUpToStationary')
!movingUpToStationary.name := 'movingUpToStationary'

!new Transition('stationaryToMovingDown')
!stationaryToMovingDown.name := 'stationaryToMovingDown'

!new Transition('movingDownToStationary')
!movingDownToStationary.name := 'movingDownToStationary'

!new Transition('stationaryToMaintenance')
!stationaryToMaintenance.name := 'stationaryToMaintenance'

!new Transition('maintenanceToStationary')
!maintenanceToStationary.name := 'maintenanceToStationary'

!new TimeEvent('timeEvent5_1')
!timeEvent5_1.time := 5

!new TimeEvent('timeEvent30_1')
!timeEvent30_1.time := 30

!new TimeEvent('timeEvent5_2')
!timeEvent5_2.time := 5

!new TimeEvent('timeEvent30_2')
!timeEvent30_2.time := 30

!new TimeEvent('timeEvent60')
!timeEvent60.time := 60

!new TimeEvent('timeEvent120')
!timeEvent120.time := 120

!insert (elevatorSystem, stationary) into StateMachineContainsStates
!insert (elevatorSystem, movingUp) into StateMachineContainsStates
!insert (elevatorSystem, movingDown) into StateMachineContainsStates
!insert (elevatorSystem, maintenance) into StateMachineContainsStates

!insert (elevatorSystem, stationaryToMovingUp) into StateMachineContainsTransitions
!insert (elevatorSystem, movingUpToStationary) into StateMachineContainsTransitions
!insert (elevatorSystem, stationaryToMovingDown) into StateMachineContainsTransitions
!insert (elevatorSystem, movingDownToStationary) into StateMachineContainsTransitions
!insert (elevatorSystem, stationaryToMaintenance) into StateMachineContainsTransitions
!insert (elevatorSystem, maintenanceToStationary) into StateMachineContainsTransitions

!insert (stationaryToMovingUp, timeEvent5_1) into TransitionContainsEvents
!insert (movingUpToStationary, timeEvent30_1) into TransitionContainsEvents
!insert (stationaryToMovingDown, timeEvent5_2) into TransitionContainsEvents
!insert (movingDownToStationary, timeEvent30_2) into TransitionContainsEvents
!insert (stationaryToMaintenance, timeEvent60) into TransitionContainsEvents
!insert (maintenanceToStationary, timeEvent120) into TransitionContainsEvents

!insert (stationary, stationaryToMovingUp) into StateTransition
!insert (stationaryToMovingUp, movingUp) into TransitionState

!insert (movingUp, movingUpToStationary) into StateTransition
!insert (movingUpToStationary, stationary) into TransitionState

!insert (stationary, stationaryToMovingDown) into StateTransition
!insert (stationaryToMovingDown, movingDown) into TransitionState

!insert (movingDown, movingDownToStationary) into StateTransition
!insert (movingDownToStationary, stationary) into TransitionState

!insert (stationary, stationaryToMaintenance) into StateTransition
!insert (stationaryToMaintenance, maintenance) into TransitionState

!insert (maintenance, maintenanceToStationary) into StateTransition
!insert (maintenanceToStationary, stationary) into TransitionState

!insert (elevatorSystem, stationary) into StateMachineStartsStates
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 63 | 0.00% |
| Multiplicities Errors | 0 | 29 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

## Category boundary
```
!new StateMachine('isolatedMachine')
!isolatedMachine.name := 'isolatedMachine'

!new State('entryState')
!entryState.name := 'entryState'

!new State('connectedState')
!connectedState.name := 'connectedState'

!new State('disconnectedState')
!disconnectedState.name := 'disconnectedState'

!new Transition('connectTransition')
!connectTransition.name := 'connectTransition'

!new Transition('loopTransition')
!loopTransition.name := 'loopTransition'

!new TimeEvent('timeEvent3')
!timeEvent3.time := 3

!new TimeEvent('timeEvent7')
!timeEvent7.time := 7

!insert (isolatedMachine, entryState) into StateMachineContainsStates
!insert (isolatedMachine, connectedState) into StateMachineContainsStates
!insert (isolatedMachine, disconnectedState) into StateMachineContainsStates

!insert (isolatedMachine, connectTransition) into StateMachineContainsTransitions
!insert (isolatedMachine, loopTransition) into StateMachineContainsTransitions

!insert (connectTransition, timeEvent3) into TransitionContainsEvents
!insert (loopTransition, timeEvent7) into TransitionContainsEvents

!insert (entryState, connectTransition) into StateTransition
!insert (connectTransition, connectedState) into TransitionState

!insert (connectedState, loopTransition) into StateTransition
!insert (loopTransition, connectedState) into TransitionState

!insert (isolatedMachine, entryState) into StateMachineStartsStates
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 28 | 0.00% |
| Multiplicities Errors | 0 | 12 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

## Category complex
```
!new StateMachine('parkingSystemManager')
!parkingSystemManager.name := 'parkingSystemManager'

!new State('entry')
!entry.name := 'entry'

!new State('vehicleIdentification')
!vehicleIdentification.name := 'vehicleIdentification'

!new State('awaitingParkingSlot')
!awaitingParkingSlot.name := 'awaitingParkingSlot'

!new State('parking')
!parking.name := 'parking'

!new State('parked')
!parked.name := 'parked'

!new State('exitPreparation')
!exitPreparation.name := 'exitPreparation'

!new Transition('entryToVehicleIdentification')
!entryToVehicleIdentification.name := 'entryToVehicleIdentification'

!new Transition('identificationToAwaitingSlot')
!identificationToAwaitingSlot.name := 'identificationToAwaitingSlot'

!new Transition('awaitingSlotToParking')
!awaitingSlotToParking.name := 'awaitingSlotToParking'

!new Transition('parkingToParked')
!parkingToParked.name := 'parkingToParked'

!new Transition('parkedToExitPreparation')
!parkedToExitPreparation.name := 'parkedToExitPreparation'

!new Transition('exitPreparationToEntry')
!exitPreparationToEntry.name := 'exitPreparationToEntry'

!new TimeEvent('timeEvent2')
!timeEvent2.time := 2

!new TimeEvent('timeEvent1')
!timeEvent1.time := 1

!new TimeEvent('timeEvent3')
!timeEvent3.time := 3

!new TimeEvent('timeEvent15')
!timeEvent15.time := 15

!new TimeEvent('timeEvent10')
!timeEvent10.time := 10

!new TimeEvent('timeEvent5')
!timeEvent5.time := 5

!insert (parkingSystemManager, entry) into StateMachineContainsStates
!insert (parkingSystemManager, vehicleIdentification) into StateMachineContainsStates
!insert (parkingSystemManager, awaitingParkingSlot) into StateMachineContainsStates
!insert (parkingSystemManager, parking) into StateMachineContainsStates
!insert (parkingSystemManager, parked) into StateMachineContainsStates
!insert (parkingSystemManager, exitPreparation) into StateMachineContainsStates

!insert (parkingSystemManager, entryToVehicleIdentification) into StateMachineContainsTransitions
!insert (parkingSystemManager, identificationToAwaitingSlot) into StateMachineContainsTransitions
!insert (parkingSystemManager, awaitingSlotToParking) into StateMachineContainsTransitions
!insert (parkingSystemManager, parkingToParked) into StateMachineContainsTransitions
!insert (parkingSystemManager, parkedToExitPreparation) into StateMachineContainsTransitions
!insert (parkingSystemManager, exitPreparationToEntry) into StateMachineContainsTransitions

!insert (entryToVehicleIdentification, timeEvent2) into TransitionContainsEvents
!insert (identificationToAwaitingSlot, timeEvent1) into TransitionContainsEvents
!insert (parkedToExitPreparation, timeEvent3) into TransitionContainsEvents

!insert (awaitingSlotToParking, timeEvent5) into TransitionContainsEvents
!insert (parkingToParked, timeEvent10) into TransitionContainsEvents
!insert (exitPreparationToEntry, timeEvent15) into TransitionContainsEvents

!insert (entry, entryToVehicleIdentification) into StateTransition
!insert (entryToVehicleIdentification, vehicleIdentification) into TransitionState

!insert (vehicleIdentification, identificationToAwaitingSlot) into StateTransition
!insert (identificationToAwaitingSlot, awaitingParkingSlot) into TransitionState

!insert (awaitingParkingSlot, awaitingSlotToParking) into StateTransition
!insert (awaitingSlotToParking, parking) into TransitionState

!insert (parking, parkingToParked) into StateTransition
!insert (parkingToParked, parked) into TransitionState

!insert (parked, parkedToExitPreparation) into StateTransition
!insert (parkedToExitPreparation, exitPreparation) into TransitionState

!insert (exitPreparation, exitPreparationToEntry) into StateTransition
!insert (exitPreparationToEntry, entry) into TransitionState

!insert (parkingSystemManager, entry) into StateMachineStartsStates
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 69 | 0.00% |
| Multiplicities Errors | 0 | 31 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

## Category edge
```
!new StateMachine('cycleMachine')
!cycleMachine.name := 'cycleMachine'

!new State('entryState')
!entryState.name := 'entryState'

!new State('loopA')
!loopA.name := 'loopA'

!new State('loopB')
!loopB.name := 'loopB'

!new State('endNode')
!endNode.name := 'endNode'

!new Transition('initToA')
!initToA.name := 'initToA'

!new Transition('aToB')
!aToB.name := 'aToB'

!new Transition('bToA')
!bToA.name := 'bToA'

!new Transition('enterEnd')
!enterEnd.name := 'enterEnd'

!new TimeEvent('timeEvent2')
!timeEvent2.time := 2

!new TimeEvent('timeEvent1')
!timeEvent1.time := 1

!new TimeEvent('timeEvent3')
!timeEvent3.time := 3

!new TimeEvent('timeEvent4')
!timeEvent4.time := 4

!insert (cycleMachine, entryState) into StateMachineContainsStates
!insert (cycleMachine, loopA) into StateMachineContainsStates
!insert (cycleMachine, loopB) into StateMachineContainsStates
!insert (cycleMachine, endNode) into StateMachineContainsStates

!insert (cycleMachine, initToA) into StateMachineContainsTransitions
!insert (cycleMachine, aToB) into StateMachineContainsTransitions
!insert (cycleMachine, bToA) into StateMachineContainsTransitions
!insert (cycleMachine, enterEnd) into StateMachineContainsTransitions

!insert (initToA, timeEvent2) into TransitionContainsEvents
!insert (aToB, timeEvent1) into TransitionContainsEvents
!insert (bToA, timeEvent3) into TransitionContainsEvents
!insert (enterEnd, timeEvent4) into TransitionContainsEvents

!insert (entryState, initToA) into StateTransition
!insert (initToA, loopA) into TransitionState

!insert (loopA, aToB) into StateTransition
!insert (aToB, loopB) into TransitionState

!insert (loopB, bToA) into StateTransition
!insert (bToA, loopA) into TransitionState

!insert (entryState, enterEnd) into StateTransition
!insert (enterEnd, endNode) into TransitionState

!insert (cycleMachine, entryState) into StateMachineStartsStates
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 47 | 0.00% |
| Multiplicities Errors | 0 | 21 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

## Category invalid
```
!new StateMachine('ManufacturingProcess')
!ManufacturingProcess.name := 'ManufacturingProcess'

!new State('rawMaterial')
!rawMaterial.name := 'rawMaterial'

!new State('inProduction')
!inProduction.name := 'inProduction'

!new State('qualityCheck')
!qualityCheck.name := 'qualityCheck'

!new State('packaged')
!packaged.name := 'packaged'

!new State('discarded')
!discarded.name := 'discarded'

!new Transition('MaterialToProduction')
!MaterialToProduction.name := 'Material to Production'

!new Transition('ProductionToQuality')
!ProductionToQuality.name := 'Production to Quality'

!new Transition('QualityToPackaging')
!QualityToPackaging.name := 'Quality to Packaging'

!new Transition('QualityToDiscard')
!QualityToDiscard.name := 'Quality to Discard'

!new TimeEvent('MaterialTimeout')
!MaterialTimeout.time := 5

!new TimeEvent('ProductionTimeout')
!ProductionTimeout.time := 15

!new TimeEvent('QualityTimeout')
!QualityTimeout.time := 10

!new TimeEvent('DiscardTimeout')
!DiscardTimeout.time := 3

!insert (ManufacturingProcess, rawMaterial) into StateMachineContainsStates
!insert (ManufacturingProcess, inProduction) into StateMachineContainsStates
!insert (ManufacturingProcess, qualityCheck) into StateMachineContainsStates
!insert (ManufacturingProcess, packaged) into StateMachineContainsStates
!insert (ManufacturingProcess, discarded) into StateMachineContainsStates

!insert (ManufacturingProcess, MaterialToProduction) into StateMachineContainsTransitions
!insert (ManufacturingProcess, ProductionToQuality) into StateMachineContainsTransitions
!insert (ManufacturingProcess, QualityToPackaging) into StateMachineContainsTransitions
!insert (ManufacturingProcess, QualityToDiscard) into StateMachineContainsTransitions

!insert (MaterialToProduction, MaterialTimeout) into TransitionContainsEvents
!insert (ProductionToQuality, ProductionTimeout) into TransitionContainsEvents
!insert (QualityToPackaging, QualityTimeout) into TransitionContainsEvents
!insert (QualityToDiscard, DiscardTimeout) into TransitionContainsEvents

!insert (rawMaterial, MaterialToProduction) into StateTransition
!insert (MaterialToProduction, inProduction) into TransitionState

!insert (inProduction, ProductionToQuality) into StateTransition
!insert (ProductionToQuality, qualityCheck) into TransitionState

!insert (qualityCheck, QualityToPackaging) into StateTransition
!insert (QualityToPackaging, packaged) into TransitionState

!insert (qualityCheck, QualityToDiscard) into StateTransition
!insert (QualityToDiscard, discarded) into TransitionState

!insert (ManufacturingProcess, rawMaterial) into StateMachineStartsStates
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 22 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

## Generation 3 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 257 | 0.00% |
| Multiplicities Errors | 0 | 93 | 0.00% |
| Invariants Errors | 0 | 8 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 22 | 0.00% |
| Invariants Errors (Not included on General) | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

# Generation 4
## Category baseline
```
!new StateMachine('conveyorBeltSystem')
!conveyorBeltSystem.name := 'conveyorBeltSystem'

!new State('idle')
!idle.name := 'idle'

!new State('loading')
!loading.name := 'loading'

!new State('moving')
!moving.name := 'moving'

!new State('unloading')
!unloading.name := 'unloading'

!new Transition('idleToLoading')
!idleToLoading.name := 'idleToLoading'

!new Transition('loadingToMoving')
!loadingToMoving.name := 'loadingToMoving'

!new Transition('movingToUnloading')
!movingToUnloading.name := 'movingToUnloading'

!new Transition('unloadingToIdle')
!unloadingToIdle.name := 'unloadingToIdle'

!new Transition('movingToLoading')
!movingToLoading.name := 'movingToLoading'

!new TimeEvent('timeEvent10_1')
!timeEvent10_1.time := 10

!new TimeEvent('timeEvent15')
!timeEvent15.time := 15

!new TimeEvent('timeEvent20')
!timeEvent20.time := 20

!new TimeEvent('timeEvent5')
!timeEvent5.time := 5

!new TimeEvent('timeEvent10_2')
!timeEvent10_2.time := 10

!insert (conveyorBeltSystem, idle) into StateMachineContainsStates
!insert (conveyorBeltSystem, loading) into StateMachineContainsStates
!insert (conveyorBeltSystem, moving) into StateMachineContainsStates
!insert (conveyorBeltSystem, unloading) into StateMachineContainsStates

!insert (conveyorBeltSystem, idleToLoading) into StateMachineContainsTransitions
!insert (conveyorBeltSystem, loadingToMoving) into StateMachineContainsTransitions
!insert (conveyorBeltSystem, movingToUnloading) into StateMachineContainsTransitions
!insert (conveyorBeltSystem, unloadingToIdle) into StateMachineContainsTransitions
!insert (conveyorBeltSystem, movingToLoading) into StateMachineContainsTransitions

!insert (idleToLoading, timeEvent10_1) into TransitionContainsEvents
!insert (loadingToMoving, timeEvent15) into TransitionContainsEvents
!insert (movingToUnloading, timeEvent20) into TransitionContainsEvents
!insert (unloadingToIdle, timeEvent5) into TransitionContainsEvents
!insert (movingToLoading, timeEvent10_2) into TransitionContainsEvents

!insert (idle, idleToLoading) into StateTransition
!insert (idleToLoading, loading) into TransitionState

!insert (loading, loadingToMoving) into StateTransition
!insert (loadingToMoving, moving) into TransitionState

!insert (moving, movingToUnloading) into StateTransition
!insert (movingToUnloading, unloading) into TransitionState

!insert (unloading, unloadingToIdle) into StateTransition
!insert (unloadingToIdle, idle) into TransitionState

!insert (moving, movingToLoading) into StateTransition
!insert (movingToLoading, loading) into TransitionState

!insert (conveyorBeltSystem, idle) into StateMachineStartsStates
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 55 | 0.00% |
| Multiplicities Errors | 0 | 25 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

## Category boundary
```
!new StateMachine('dynamicCircuit')
!dynamicCircuit.name := 'dynamicCircuit'

!new State('nodeA')
!nodeA.name := 'nodeA'

!new State('nodeB')
!nodeB.name := 'nodeB'

!new State('nodeC')
!nodeC.name := 'nodeC'

!new Transition('path1Transition')
!path1Transition.name := 'path1Transition'

!new Transition('path2Transition')
!path2Transition.name := 'path2Transition'

!new Transition('backTransition')
!backTransition.name := 'backTransition'

!new TimeEvent('timeEvent6')
!timeEvent6.time := 6

!new TimeEvent('timeEvent4')
!timeEvent4.time := 4

!new TimeEvent('timeEvent5')
!timeEvent5.time := 5

!insert (dynamicCircuit, nodeA) into StateMachineContainsStates
!insert (dynamicCircuit, nodeB) into StateMachineContainsStates
!insert (dynamicCircuit, nodeC) into StateMachineContainsStates

!insert (dynamicCircuit, path1Transition) into StateMachineContainsTransitions
!insert (dynamicCircuit, path2Transition) into StateMachineContainsTransitions
!insert (dynamicCircuit, backTransition) into StateMachineContainsTransitions

!insert (path1Transition, timeEvent6) into TransitionContainsEvents
!insert (path2Transition, timeEvent4) into TransitionContainsEvents
!insert (backTransition, timeEvent5) into TransitionContainsEvents

!insert (nodeA, path1Transition) into StateTransition
!insert (path1Transition, nodeB) into TransitionState

!insert (nodeA, path2Transition) into StateTransition
!insert (path2Transition, nodeC) into TransitionState

!insert (nodeC, backTransition) into StateTransition
!insert (backTransition, nodeA) into TransitionState

!insert (dynamicCircuit, nodeA) into StateMachineStartsStates
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 36 | 0.00% |
| Multiplicities Errors | 0 | 16 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

## Category complex
```
!new StateMachine('energyManagementSystem')
!energyManagementSystem.name := 'energyManagementSystem'

!new State('energyIdle')
!energyIdle.name := 'energyIdle'

!new State('normalOperation')
!normalOperation.name := 'normalOperation'

!new State('powerSavingMode')
!powerSavingMode.name := 'powerSavingMode'

!new State('emergencyOperation')
!emergencyOperation.name := 'emergencyOperation'

!new State('renewableIntegration')
!renewableIntegration.name := 'renewableIntegration'

!new State('systemShutdown')
!systemShutdown.name := 'systemShutdown'

!new Transition('idleToNormal')
!idleToNormal.name := 'idleToNormal'

!new Transition('normalToPowerSaving')
!normalToPowerSaving.name := 'normalToPowerSaving'

!new Transition('powerSavingToEmergency')
!powerSavingToEmergency.name := 'powerSavingToEmergency'

!new Transition('emergencyToRenewable')
!emergencyToRenewable.name := 'emergencyToRenewable'

!new Transition('renewableToNormal')
!renewableToNormal.name := 'renewableToNormal'

!new Transition('emergencyToShutdown')
!emergencyToShutdown.name := 'emergencyToShutdown'

!new Transition('shutdownToIdle')
!shutdownToIdle.name := 'shutdownToIdle'

!new TimeEvent('timeEvent5')
!timeEvent5.time := 5

!new TimeEvent('timeEvent10')
!timeEvent10.time := 10

!new TimeEvent('timeEvent2')
!timeEvent2.time := 2

!new TimeEvent('timeEvent15')
!timeEvent15.time := 15

!new TimeEvent('defaultTimeEvent1')
!defaultTimeEvent1.time := 1

!new TimeEvent('defaultTimeEvent2')
!defaultTimeEvent2.time := 1

!new TimeEvent('defaultTimeEvent3')
!defaultTimeEvent3.time := 1

!insert (energyManagementSystem, energyIdle) into StateMachineContainsStates
!insert (energyManagementSystem, normalOperation) into StateMachineContainsStates
!insert (energyManagementSystem, powerSavingMode) into StateMachineContainsStates
!insert (energyManagementSystem, emergencyOperation) into StateMachineContainsStates
!insert (energyManagementSystem, renewableIntegration) into StateMachineContainsStates
!insert (energyManagementSystem, systemShutdown) into StateMachineContainsStates

!insert (energyManagementSystem, idleToNormal) into StateMachineContainsTransitions
!insert (energyManagementSystem, normalToPowerSaving) into StateMachineContainsTransitions
!insert (energyManagementSystem, powerSavingToEmergency) into StateMachineContainsTransitions
!insert (energyManagementSystem, emergencyToRenewable) into StateMachineContainsTransitions
!insert (energyManagementSystem, renewableToNormal) into StateMachineContainsTransitions
!insert (energyManagementSystem, emergencyToShutdown) into StateMachineContainsTransitions
!insert (energyManagementSystem, shutdownToIdle) into StateMachineContainsTransitions

!insert (idleToNormal, timeEvent5) into TransitionContainsEvents
!insert (normalToPowerSaving, timeEvent10) into TransitionContainsEvents
!insert (powerSavingToEmergency, defaultTimeEvent1) into TransitionContainsEvents
!insert (emergencyToRenewable, timeEvent2) into TransitionContainsEvents
!insert (renewableToNormal, defaultTimeEvent2) into TransitionContainsEvents
!insert (emergencyToShutdown, timeEvent15) into TransitionContainsEvents
!insert (shutdownToIdle, defaultTimeEvent3) into TransitionContainsEvents

!insert (energyIdle, idleToNormal) into StateTransition
!insert (idleToNormal, normalOperation) into TransitionState

!insert (normalOperation, normalToPowerSaving) into StateTransition
!insert (normalToPowerSaving, powerSavingMode) into TransitionState

!insert (powerSavingMode, powerSavingToEmergency) into StateTransition
!insert (powerSavingToEmergency, emergencyOperation) into TransitionState

!insert (emergencyOperation, emergencyToRenewable) into StateTransition
!insert (emergencyToRenewable, renewableIntegration) into TransitionState

!insert (renewableIntegration, renewableToNormal) into StateTransition
!insert (renewableToNormal, normalOperation) into TransitionState

!insert (emergencyOperation, emergencyToShutdown) into StateTransition
!insert (emergencyToShutdown, systemShutdown) into TransitionState

!insert (systemShutdown, shutdownToIdle) into StateTransition
!insert (shutdownToIdle, energyIdle) into TransitionState

!insert (energyManagementSystem, energyIdle) into StateMachineStartsStates
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 77 | 0.00% |
| Multiplicities Errors | 0 | 35 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

## Category edge
```
!new StateMachine('interruptMachine')
!interruptMachine.name := 'interruptMachine'

!new State('openState')
!openState.name := 'openState'

!new State('busyLoop')
!busyLoop.name := 'busyLoop'

!new State('breakFree')
!breakFree.name := 'breakFree'

!new State('finalState')
!finalState.name := 'finalState'

!new Transition('startProcess')
!startProcess.name := 'startProcess'

!new Transition('loopInterruption')
!loopInterruption.name := 'loopInterruption'

!new Transition('backToLoop')
!backToLoop.name := 'backToLoop'

!new Transition('completeTask')
!completeTask.name := 'completeTask'

!new TimeEvent('timeEvent2')
!timeEvent2.time := 2

!new TimeEvent('timeEvent4')
!timeEvent4.time := 4

!new TimeEvent('timeEvent3')
!timeEvent3.time := 3

!new TimeEvent('timeEvent1')
!timeEvent1.time := 1

!insert (interruptMachine, openState) into StateMachineContainsStates
!insert (interruptMachine, busyLoop) into StateMachineContainsStates
!insert (interruptMachine, breakFree) into StateMachineContainsStates
!insert (interruptMachine, finalState) into StateMachineContainsStates

!insert (interruptMachine, startProcess) into StateMachineContainsTransitions
!insert (interruptMachine, loopInterruption) into StateMachineContainsTransitions
!insert (interruptMachine, backToLoop) into StateMachineContainsTransitions
!insert (interruptMachine, completeTask) into StateMachineContainsTransitions

!insert (startProcess, timeEvent2) into TransitionContainsEvents
!insert (loopInterruption, timeEvent4) into TransitionContainsEvents
!insert (backToLoop, timeEvent3) into TransitionContainsEvents
!insert (completeTask, timeEvent1) into TransitionContainsEvents

!insert (openState, startProcess) into StateTransition
!insert (startProcess, busyLoop) into TransitionState

!insert (busyLoop, loopInterruption) into StateTransition
!insert (loopInterruption, breakFree) into TransitionState

!insert (breakFree, backToLoop) into StateTransition
!insert (backToLoop, busyLoop) into TransitionState

!insert (breakFree, completeTask) into StateTransition
!insert (completeTask, finalState) into TransitionState

!insert (interruptMachine, openState) into StateMachineStartsStates
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 47 | 0.00% |
| Multiplicities Errors | 0 | 21 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

## Category invalid
```
!new StateMachine('AirportOperations')
!AirportOperations.name := 'AirportOperations'

!new State('Landed')
!Landed.name := 'Landed'

!new State('docked')
!docked.name := 'docked'

!new State('boarding')
!boarding.name := 'boarding'

!new State('ReadyForTakeoff')
!ReadyForTakeoff.name := 'ReadyForTakeoff'

!new State('inFlight')
!inFlight.name := 'inFlight'

!new Transition('LandingToDocking')
!LandingToDocking.name := 'Landing to Docking'

!new Transition('DockingToBoarding')
!DockingToBoarding.name := 'Docking to Boarding'

!new Transition('BoardingToTakeoff')
!BoardingToTakeoff.name := 'Boarding to ReadyForTakeoff'

!new Transition('TakeoffToFlight')
!TakeoffToFlight.name := 'ReadyForTakeoff to InFlight'

!new TimeEvent('LandingTimeout')
!LandingTimeout.time := 10

!new TimeEvent('DockingTimeout')
!DockingTimeout.time := 5

!new TimeEvent('BoardingTimeout')
!BoardingTimeout.time := 20

!new TimeEvent('TakeoffTimeout')
!TakeoffTimeout.time := 2

!insert (AirportOperations, Landed) into StateMachineContainsStates
!insert (AirportOperations, docked) into StateMachineContainsStates
!insert (AirportOperations, boarding) into StateMachineContainsStates
!insert (AirportOperations, ReadyForTakeoff) into StateMachineContainsStates
!insert (AirportOperations, inFlight) into StateMachineContainsStates

!insert (AirportOperations, LandingToDocking) into StateMachineContainsTransitions
!insert (AirportOperations, DockingToBoarding) into StateMachineContainsTransitions
!insert (AirportOperations, BoardingToTakeoff) into StateMachineContainsTransitions
!insert (AirportOperations, TakeoffToFlight) into StateMachineContainsTransitions

!insert (LandingToDocking, LandingTimeout) into TransitionContainsEvents
!insert (DockingToBoarding, DockingTimeout) into TransitionContainsEvents
!insert (BoardingToTakeoff, BoardingTimeout) into TransitionContainsEvents
!insert (TakeoffToFlight, TakeoffTimeout) into TransitionContainsEvents

!insert (Landed, LandingToDocking) into StateTransition
!insert (LandingToDocking, docked) into TransitionState

!insert (docked, DockingToBoarding) into StateTransition
!insert (DockingToBoarding, boarding) into TransitionState

!insert (boarding, BoardingToTakeoff) into StateTransition
!insert (BoardingToTakeoff, ReadyForTakeoff) into TransitionState

!insert (ReadyForTakeoff, TakeoffToFlight) into StateTransition
!insert (TakeoffToFlight, inFlight) into TransitionState

!insert (AirportOperations, Landed) into StateMachineStartsStates
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 22 | 0.00% |
| Invariants Errors (Not included on General) | 1 | 2 | 50.00% |

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (1) `StateMachine::FirstCharLowerCase': FAILED.
```

| No specific metrics for this system | 
 |---|

## Generation 4 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 265 | 0.00% |
| Multiplicities Errors | 0 | 97 | 0.00% |
| Invariants Errors | 0 | 8 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 22 | 0.00% |
| Invariants Errors (Not included on General) | 1 | 2 | 50.00% |

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (1) `StateMachine::FirstCharLowerCase': FAILED.
```

| No specific metrics for this system | 
 |---|

# Generation 5
## Category baseline
```
!new StateMachine('gardenWateringSystem')
!gardenWateringSystem.name := 'gardenWateringSystem'

!new State('waiting')
!waiting.name := 'waiting'

!new State('watering')
!watering.name := 'watering'

!new State('evaluating')
!evaluating.name := 'evaluating'

!new State('error')
!error.name := 'error'

!new State('finished')
!finished.name := 'finished'

!new Transition('waitingToWatering')
!waitingToWatering.name := 'waitingToWatering'

!new Transition('wateringToEvaluating')
!wateringToEvaluating.name := 'wateringToEvaluating'

!new Transition('evaluatingToWaiting')
!evaluatingToWaiting.name := 'evaluatingToWaiting'

!new Transition('evaluatingToWatering')
!evaluatingToWatering.name := 'evaluatingToWatering'

!new Transition('wateringToError')
!wateringToError.name := 'wateringToError'

!new Transition('errorToWaiting')
!errorToWaiting.name := 'errorToWaiting'

!new Transition('wateringToFinished')
!wateringToFinished.name := 'wateringToFinished'

!new Transition('finishedToWaiting')
!finishedToWaiting.name := 'finishedToWaiting'

!new TimeEvent('timeEvent720')
!timeEvent720.time := 720

!new TimeEvent('timeEvent30')
!timeEvent30.time := 30

!new TimeEvent('timeEvent10')
!timeEvent10.time := 10

!new TimeEvent('timeEvent5')
!timeEvent5.time := 5

!new TimeEvent('timeEvent1')
!timeEvent1.time := 1

!new TimeEvent('timeEvent60')
!timeEvent60.time := 60

!new TimeEvent('timeEvent45')
!timeEvent45.time := 45

!new TimeEvent('timeEvent1440')
!timeEvent1440.time := 1440

!insert (gardenWateringSystem, waiting) into StateMachineContainsStates
!insert (gardenWateringSystem, watering) into StateMachineContainsStates
!insert (gardenWateringSystem, evaluating) into StateMachineContainsStates
!insert (gardenWateringSystem, error) into StateMachineContainsStates
!insert (gardenWateringSystem, finished) into StateMachineContainsStates

!insert (gardenWateringSystem, waitingToWatering) into StateMachineContainsTransitions
!insert (gardenWateringSystem, wateringToEvaluating) into StateMachineContainsTransitions
!insert (gardenWateringSystem, evaluatingToWaiting) into StateMachineContainsTransitions
!insert (gardenWateringSystem, evaluatingToWatering) into StateMachineContainsTransitions
!insert (gardenWateringSystem, wateringToError) into StateMachineContainsTransitions
!insert (gardenWateringSystem, errorToWaiting) into StateMachineContainsTransitions
!insert (gardenWateringSystem, wateringToFinished) into StateMachineContainsTransitions
!insert (gardenWateringSystem, finishedToWaiting) into StateMachineContainsTransitions

!insert (waitingToWatering, timeEvent720) into TransitionContainsEvents
!insert (wateringToEvaluating, timeEvent30) into TransitionContainsEvents
!insert (evaluatingToWaiting, timeEvent10) into TransitionContainsEvents
!insert (evaluatingToWatering, timeEvent5) into TransitionContainsEvents
!insert (wateringToError, timeEvent1) into TransitionContainsEvents
!insert (errorToWaiting, timeEvent60) into TransitionContainsEvents
!insert (wateringToFinished, timeEvent45) into TransitionContainsEvents
!insert (finishedToWaiting, timeEvent1440) into TransitionContainsEvents

!insert (waiting, waitingToWatering) into StateTransition
!insert (waitingToWatering, watering) into TransitionState

!insert (watering, wateringToEvaluating) into StateTransition
!insert (wateringToEvaluating, evaluating) into TransitionState

!insert (evaluating, evaluatingToWaiting) into StateTransition
!insert (evaluatingToWaiting, waiting) into TransitionState

!insert (evaluating, evaluatingToWatering) into StateTransition
!insert (evaluatingToWatering, watering) into TransitionState

!insert (watering, wateringToError) into StateTransition
!insert (wateringToError, error) into TransitionState

!insert (error, errorToWaiting) into StateTransition
!insert (errorToWaiting, waiting) into TransitionState

!insert (watering, wateringToFinished) into StateTransition
!insert (wateringToFinished, finished) into TransitionState

!insert (finished, finishedToWaiting) into StateTransition
!insert (finishedToWaiting, waiting) into TransitionState

!insert (gardenWateringSystem, waiting) into StateMachineStartsStates
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 82 | 0.00% |
| Multiplicities Errors | 0 | 38 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

## Category boundary
```
!new StateMachine('interlinkedStates')
!interlinkedStates.name := 'interlinkedStates'

!new State('alpha')
!alpha.name := 'alpha'

!new State('beta')
!beta.name := 'beta'

!new State('gamma')
!gamma.name := 'gamma'

!new Transition('sharedTransition')
!sharedTransition.name := 'sharedTransition'

!new TimeEvent('timeEvent8')
!timeEvent8.time := 8

!insert (interlinkedStates, alpha) into StateMachineContainsStates
!insert (interlinkedStates, beta) into StateMachineContainsStates
!insert (interlinkedStates, gamma) into StateMachineContainsStates

!insert (interlinkedStates, sharedTransition) into StateMachineContainsTransitions

!insert (sharedTransition, timeEvent8) into TransitionContainsEvents

!insert (alpha, sharedTransition) into StateTransition
!insert (sharedTransition, beta) into TransitionState

!insert (interlinkedStates, alpha) into StateMachineStartsStates
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 20 | 0.00% |
| Multiplicities Errors | 0 | 8 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

## Category complex
```
!new StateMachine('trafficLightController')
!trafficLightController.name := 'trafficLightController'

!new State('red')
!red.name := 'red'

!new State('green')
!green.name := 'green'

!new State('yellow')
!yellow.name := 'yellow'

!new State('pedestrianCross')
!pedestrianCross.name := 'pedestrianCross'

!new State('nightMode')
!nightMode.name := 'nightMode'

!new State('emergencyOverride')
!emergencyOverride.name := 'emergencyOverride'

!new Transition('redToGreen')
!redToGreen.name := 'redToGreen'

!new Transition('greenToYellow')
!greenToYellow.name := 'greenToYellow'

!new Transition('yellowToRed')
!yellowToRed.name := 'yellowToRed'

!new Transition('redToPedestrian')
!redToPedestrian.name := 'redToPedestrian'

!new Transition('pedestrianToRed')
!pedestrianToRed.name := 'pedestrianToRed'

!new Transition('normalToNight')
!normalToNight.name := 'normalToNight'

!new Transition('emergencyToRed')
!emergencyToRed.name := 'emergencyToRed'

!new Transition('anyToEmergency')
!anyToEmergency.name := 'anyToEmergency'

!new TimeEvent('timeEvent60')
!timeEvent60.time := 60

!new TimeEvent('timeEvent10')
!timeEvent10.time := 10

!new TimeEvent('timeEvent420')
!timeEvent420.time := 420

!new TimeEvent('timeEvent30')
!timeEvent30.time := 30

!new TimeEvent('defaultTimeEvent1')
!defaultTimeEvent1.time := 1

!new TimeEvent('defaultTimeEvent2')
!defaultTimeEvent2.time := 1

!new TimeEvent('defaultTimeEvent3')
!defaultTimeEvent3.time := 1

!new TimeEvent('defaultTimeEvent4')
!defaultTimeEvent4.time := 1

!insert (trafficLightController, red) into StateMachineContainsStates
!insert (trafficLightController, green) into StateMachineContainsStates
!insert (trafficLightController, yellow) into StateMachineContainsStates
!insert (trafficLightController, pedestrianCross) into StateMachineContainsStates
!insert (trafficLightController, nightMode) into StateMachineContainsStates
!insert (trafficLightController, emergencyOverride) into StateMachineContainsStates

!insert (trafficLightController, redToGreen) into StateMachineContainsTransitions
!insert (trafficLightController, greenToYellow) into StateMachineContainsTransitions
!insert (trafficLightController, yellowToRed) into StateMachineContainsTransitions
!insert (trafficLightController, redToPedestrian) into StateMachineContainsTransitions
!insert (trafficLightController, pedestrianToRed) into StateMachineContainsTransitions
!insert (trafficLightController, normalToNight) into StateMachineContainsTransitions
!insert (trafficLightController, emergencyToRed) into StateMachineContainsTransitions
!insert (trafficLightController, anyToEmergency) into StateMachineContainsTransitions

!insert (redToGreen, timeEvent60) into TransitionContainsEvents
!insert (greenToYellow, timeEvent10) into TransitionContainsEvents
!insert (yellowToRed, defaultTimeEvent1) into TransitionContainsEvents
!insert (redToPedestrian, defaultTimeEvent2) into TransitionContainsEvents
!insert (pedestrianToRed, timeEvent30) into TransitionContainsEvents
!insert (normalToNight, timeEvent420) into TransitionContainsEvents
!insert (emergencyToRed, defaultTimeEvent3) into TransitionContainsEvents
!insert (anyToEmergency, defaultTimeEvent4) into TransitionContainsEvents

!insert (red, redToGreen) into StateTransition
!insert (redToGreen, green) into TransitionState

!insert (green, greenToYellow) into StateTransition
!insert (greenToYellow, yellow) into TransitionState

!insert (yellow, yellowToRed) into StateTransition
!insert (yellowToRed, red) into TransitionState

!insert (red, redToPedestrian) into StateTransition
!insert (redToPedestrian, pedestrianCross) into TransitionState

!insert (pedestrianCross, pedestrianToRed) into StateTransition
!insert (pedestrianToRed, red) into TransitionState

!insert (red, normalToNight) into StateTransition
!insert (normalToNight, nightMode) into TransitionState

!insert (emergencyOverride, emergencyToRed) into StateTransition
!insert (emergencyToRed, red) into TransitionState

!insert (red, anyToEmergency) into StateTransition
!insert (anyToEmergency, emergencyOverride) into TransitionState

!insert (trafficLightController, red) into StateMachineStartsStates
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 85 | 0.00% |
| Multiplicities Errors | 0 | 39 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

## Category edge
```
!new StateMachine('bifurcatedMachine')
!bifurcatedMachine.name := 'bifurcatedMachine'

!new State('entryNode')
!entryNode.name := 'entryNode'

!new State('altPath')
!altPath.name := 'altPath'

!new State('mainPath')
!mainPath.name := 'mainPath'

!new State('convergence')
!convergence.name := 'convergence'

!new State('resolution')
!resolution.name := 'resolution'

!new Transition('initToMain')
!initToMain.name := 'initToMain'

!new Transition('initToAlt')
!initToAlt.name := 'initToAlt'

!new Transition('altToConverge')
!altToConverge.name := 'altToConverge'

!new Transition('mainToConverge')
!mainToConverge.name := 'mainToConverge'

!new Transition('finishConverge')
!finishConverge.name := 'finishConverge'

!new TimeEvent('timeEvent2')
!timeEvent2.time := 2

!new TimeEvent('timeEvent3')
!timeEvent3.time := 3

!new TimeEvent('timeEvent4')
!timeEvent4.time := 4

!new TimeEvent('timeEvent1_1')
!timeEvent1_1.time := 1

!new TimeEvent('timeEvent1_2')
!timeEvent1_2.time := 1

!insert (bifurcatedMachine, entryNode) into StateMachineContainsStates
!insert (bifurcatedMachine, altPath) into StateMachineContainsStates
!insert (bifurcatedMachine, mainPath) into StateMachineContainsStates
!insert (bifurcatedMachine, convergence) into StateMachineContainsStates
!insert (bifurcatedMachine, resolution) into StateMachineContainsStates

!insert (bifurcatedMachine, initToMain) into StateMachineContainsTransitions
!insert (bifurcatedMachine, initToAlt) into StateMachineContainsTransitions
!insert (bifurcatedMachine, altToConverge) into StateMachineContainsTransitions
!insert (bifurcatedMachine, mainToConverge) into StateMachineContainsTransitions
!insert (bifurcatedMachine, finishConverge) into StateMachineContainsTransitions

!insert (initToMain, timeEvent2) into TransitionContainsEvents
!insert (initToAlt, timeEvent3) into TransitionContainsEvents
!insert (altToConverge, timeEvent4) into TransitionContainsEvents
!insert (mainToConverge, timeEvent1_1) into TransitionContainsEvents
!insert (finishConverge, timeEvent1_2) into TransitionContainsEvents

!insert (entryNode, initToMain) into StateTransition
!insert (initToMain, mainPath) into TransitionState

!insert (entryNode, initToAlt) into StateTransition
!insert (initToAlt, altPath) into TransitionState

!insert (altPath, altToConverge) into StateTransition
!insert (altToConverge, convergence) into TransitionState

!insert (mainPath, mainToConverge) into StateTransition
!insert (mainToConverge, convergence) into TransitionState

!insert (convergence, finishConverge) into StateTransition
!insert (finishConverge, resolution) into TransitionState

!insert (bifurcatedMachine, entryNode) into StateMachineStartsStates
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 58 | 0.00% |
| Multiplicities Errors | 0 | 26 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

## Category invalid
```
!new StateMachine('OnlineShoppingCart')
!OnlineShoppingCart.name := 'OnlineShoppingCart'

!new State('empty')
!empty.name := 'empty'

!new State('itemsAdded')
!itemsAdded.name := 'itemsAdded'

!new State('proceedToCheckout')
!proceedToCheckout.name := 'proceedToCheckout'

!new State('paymentSuccessful')
!paymentSuccessful.name := 'paymentSuccessful'

!new Transition('AddToCart')
!AddToCart.name := 'Add to Cart'

!new Transition('CartToCheckout')
!CartToCheckout.name := 'Proceed to Checkout'

!new Transition('CheckoutToPayment')
!CheckoutToPayment.name := 'Checkout to Payment Success'

!new TimeEvent('CartTimeout')
!CartTimeout.time := 0

!new TimeEvent('CheckoutTimeout')
!CheckoutTimeout.time := 0

!new TimeEvent('PaymentTimeout')
!PaymentTimeout.time := 0

!insert (OnlineShoppingCart, empty) into StateMachineContainsStates
!insert (OnlineShoppingCart, itemsAdded) into StateMachineContainsStates
!insert (OnlineShoppingCart, proceedToCheckout) into StateMachineContainsStates
!insert (OnlineShoppingCart, paymentSuccessful) into StateMachineContainsStates

!insert (OnlineShoppingCart, AddToCart) into StateMachineContainsTransitions
!insert (OnlineShoppingCart, CartToCheckout) into StateMachineContainsTransitions
!insert (OnlineShoppingCart, CheckoutToPayment) into StateMachineContainsTransitions

!insert (AddToCart, CartTimeout) into TransitionContainsEvents
!insert (CartToCheckout, CheckoutTimeout) into TransitionContainsEvents
!insert (CheckoutToPayment, PaymentTimeout) into TransitionContainsEvents

!insert (empty, AddToCart) into StateTransition
!insert (AddToCart, itemsAdded) into TransitionState

!insert (itemsAdded, CartToCheckout) into StateTransition
!insert (CartToCheckout, proceedToCheckout) into TransitionState

!insert (proceedToCheckout, CheckoutToPayment) into StateTransition
!insert (CheckoutToPayment, paymentSuccessful) into TransitionState

!insert (OnlineShoppingCart, empty) into StateMachineStartsStates
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 17 | 0.00% |
| Invariants Errors (Not included on General) | 1 | 2 | 50.00% |

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (2) `TimeEvent::TimeIsPositive': FAILED.
```

| No specific metrics for this system | 
 |---|

## Generation 5 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 284 | 0.00% |
| Multiplicities Errors | 0 | 111 | 0.00% |
| Invariants Errors | 0 | 8 | 0.00% |

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 0 | 17 | 0.00% |
| Invariants Errors (Not included on General) | 1 | 2 | 50.00% |

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (2) `TimeEvent::TimeIsPositive': FAILED.
```

| No specific metrics for this system | 
 |---|

# Generation 6
## Category baseline
```
!new StateMachine('documentWorkflowSystem')
!documentWorkflowSystem.name := 'documentWorkflowSystem'

!new State('draft')
!draft.name := 'draft'

!new State('review')
!review.name := 'review'

!new State('approved')
!approved.name := 'approved'

!new State('rejected')
!rejected.name := 'rejected'

!new State('archived')
!archived.name := 'archived'

!new Transition('draftToReview')
!draftToReview.name := 'draftToReview'

!new Transition('reviewToApproved')
!reviewToApproved.name := 'reviewToApproved'

!new Transition('reviewToRejected')
!reviewToRejected.name := 'reviewToRejected'

!new Transition('rejectedToDraft')
!rejectedToDraft.name := 'rejectedToDraft'

!new Transition('approvedToArchived')
!approvedToArchived.name := 'approvedToArchived'

!new Transition('draftToArchived')
!draftToArchived.name := 'draftToArchived'

!new Transition('reviewToDraft')
!reviewToDraft.name := 'reviewToDraft'

!new TimeEvent('timeEvent1')
!timeEvent1.time := 1

!new TimeEvent('timeEvent48_1')
!timeEvent48_1.time := 48

!new TimeEvent('timeEvent48_2')
!timeEvent48_2.time := 48

!new TimeEvent('timeEvent24_1')
!timeEvent24_1.time := 24

!new TimeEvent('timeEvent12')
!timeEvent12.time := 12

!new TimeEvent('timeEvent72')
!timeEvent72.time := 72

!new TimeEvent('timeEvent24_2')
!timeEvent24_2.time := 24

!insert (documentWorkflowSystem, draft) into StateMachineContainsStates
!insert (documentWorkflowSystem, review) into StateMachineContainsStates
!insert (documentWorkflowSystem, approved) into StateMachineContainsStates
!insert (documentWorkflowSystem, rejected) into StateMachineContainsStates
!insert (documentWorkflowSystem, archived) into StateMachineContainsStates

!insert (documentWorkflowSystem, draftToReview) into StateMachineContainsTransitions
!insert (documentWorkflowSystem, reviewToApproved) into StateMachineContainsTransitions
!insert (documentWorkflowSystem, reviewToRejected) into StateMachineContainsTransitions
!insert (documentWorkflowSystem, rejectedToDraft) into StateMachineContainsTransitions
!insert (documentWorkflowSystem, approvedToArchived) into StateMachineContainsTransitions
!insert (documentWorkflowSystem, draftToArchived) into StateMachineContainsTransitions
!insert (documentWorkflowSystem, reviewToDraft) into StateMachineContainsTransitions

!insert (draftToReview, timeEvent1) into TransitionContainsEvents
!insert (reviewToApproved, timeEvent48_1) into TransitionContainsEvents
!insert (reviewToRejected, timeEvent48_2) into TransitionContainsEvents
!insert (rejectedToDraft, timeEvent24_1) into TransitionContainsEvents
!insert (approvedToArchived, timeEvent12) into TransitionContainsEvents
!insert (draftToArchived, timeEvent72) into TransitionContainsEvents
!insert (reviewToDraft, timeEvent24_2) into TransitionContainsEvents

!insert (draft, draftToReview) into StateTransition
!insert (draftToReview, review) into TransitionState

!insert (review, reviewToApproved) into StateTransition
!insert (reviewToApproved, approved) into TransitionState

!insert (review, reviewToRejected) into StateTransition
!insert (reviewToRejected, rejected) into TransitionState

!insert (rejected, rejectedToDraft) into StateTransition
!insert (rejectedToDraft, draft) into TransitionState

!insert (approved, approvedToArchived) into StateTransition
!insert (approvedToArchived, archived) into TransitionState

!insert (draft, draftToArchived) into StateTransition
!insert (draftToArchived, archived) into TransitionState

!insert (review, reviewToDraft) into StateTransition
!insert (reviewToDraft, draft) into TransitionState

!insert (documentWorkflowSystem, draft) into StateMachineStartsStates
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 74 | 0.00% |
| Multiplicities Errors | 0 | 34 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

## Category boundary
```
!new StateMachine('redundantPaths')
!redundantPaths.name := 'redundantPaths'

!new State('main')
!main.name := 'main'

!new State('secondary')
!secondary.name := 'secondary'

!new State('tertiary')
!tertiary.name := 'tertiary'

!new Transition('mainToSecondary')
!mainToSecondary.name := 'mainToSecondary'

!new Transition('secondaryToTertiary')
!secondaryToTertiary.name := 'secondaryToTertiary'

!new Transition('tertiaryToMain')
!tertiaryToMain.name := 'tertiaryToMain'

!new Transition('redundantLoop')
!redundantLoop.name := 'redundantLoop'

!new TimeEvent('timeEvent12')
!timeEvent12.time := 12

!new TimeEvent('timeEvent18')
!timeEvent18.time := 18

!new TimeEvent('timeEvent25')
!timeEvent25.time := 25

!new TimeEvent('timeEvent5')
!timeEvent5.time := 5

!insert (redundantPaths, main) into StateMachineContainsStates
!insert (redundantPaths, secondary) into StateMachineContainsStates
!insert (redundantPaths, tertiary) into StateMachineContainsStates

!insert (redundantPaths, mainToSecondary) into StateMachineContainsTransitions
!insert (redundantPaths, secondaryToTertiary) into StateMachineContainsTransitions
!insert (redundantPaths, tertiaryToMain) into StateMachineContainsTransitions
!insert (redundantPaths, redundantLoop) into StateMachineContainsTransitions

!insert (mainToSecondary, timeEvent12) into TransitionContainsEvents
!insert (secondaryToTertiary, timeEvent18) into TransitionContainsEvents
!insert (tertiaryToMain, timeEvent25) into TransitionContainsEvents
!insert (redundantLoop, timeEvent5) into TransitionContainsEvents

!insert (main, mainToSecondary) into StateTransition
!insert (mainToSecondary, secondary) into TransitionState

!insert (secondary, secondaryToTertiary) into StateTransition
!insert (secondaryToTertiary, tertiary) into TransitionState

!insert (tertiary, tertiaryToMain) into StateTransition
!insert (tertiaryToMain, main) into TransitionState

!insert (secondary, redundantLoop) into StateTransition
!insert (redundantLoop, main) into TransitionState

!insert (redundantPaths, main) into StateMachineStartsStates
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 44 | 0.00% |
| Multiplicities Errors | 0 | 20 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

## Category complex
```
!new StateMachine('greenhouseEnvironmentManager')
!greenhouseEnvironmentManager.name := 'greenhouseEnvironmentManager'

!new State('monitoring')
!monitoring.name := 'monitoring'

!new State('heatingActive')
!heatingActive.name := 'heatingActive'

!new State('coolingActive')
!coolingActive.name := 'coolingActive'

!new State('humidifying')
!humidifying.name := 'humidifying'

!new State('lightAdjustment')
!lightAdjustment.name := 'lightAdjustment'

!new State('systemMaintenance')
!systemMaintenance.name := 'systemMaintenance'

!new Transition('monitorToHeating')
!monitorToHeating.name := 'monitorToHeating'

!new Transition('monitorToCooling')
!monitorToCooling.name := 'monitorToCooling'

!new Transition('monitorToHumidifying')
!monitorToHumidifying.name := 'monitorToHumidifying'

!new Transition('monitorToLighting')
!monitorToLighting.name := 'monitorToLighting'

!new Transition('heatingToMonitoring')
!heatingToMonitoring.name := 'heatingToMonitoring'

!new Transition('coolingToMonitoring')
!coolingToMonitoring.name := 'coolingToMonitoring'

!new Transition('humidifyingToMonitoring')
!humidifyingToMonitoring.name := 'humidifyingToMonitoring'

!new Transition('lightingToMonitoring')
!lightingToMonitoring.name := 'lightingToMonitoring'

!new Transition('monitorToMaintenance')
!monitorToMaintenance.name := 'monitorToMaintenance'

!new Transition('maintenanceToMonitoring')
!maintenanceToMonitoring.name := 'maintenanceToMonitoring'

!new TimeEvent('timeEvent3')
!timeEvent3.time := 3

!new TimeEvent('timeEvent4')
!timeEvent4.time := 4

!new TimeEvent('timeEvent720')
!timeEvent720.time := 720

!new TimeEvent('timeEvent5')
!timeEvent5.time := 5

!new TimeEvent('defaultTimeEventA')
!defaultTimeEventA.time := 1

!new TimeEvent('defaultTimeEventB')
!defaultTimeEventB.time := 1

!new TimeEvent('defaultTimeEventC')
!defaultTimeEventC.time := 1

!new TimeEvent('defaultTimeEventD')
!defaultTimeEventD.time := 1

!insert (greenhouseEnvironmentManager, monitoring) into StateMachineContainsStates
!insert (greenhouseEnvironmentManager, heatingActive) into StateMachineContainsStates
!insert (greenhouseEnvironmentManager, coolingActive) into StateMachineContainsStates
!insert (greenhouseEnvironmentManager, humidifying) into StateMachineContainsStates
!insert (greenhouseEnvironmentManager, lightAdjustment) into StateMachineContainsStates
!insert (greenhouseEnvironmentManager, systemMaintenance) into StateMachineContainsStates

!insert (greenhouseEnvironmentManager, monitorToHeating) into StateMachineContainsTransitions
!insert (greenhouseEnvironmentManager, monitorToCooling) into StateMachineContainsTransitions
!insert (greenhouseEnvironmentManager, monitorToHumidifying) into StateMachineContainsTransitions
!insert (greenhouseEnvironmentManager, monitorToLighting) into StateMachineContainsTransitions
!insert (greenhouseEnvironmentManager, heatingToMonitoring) into StateMachineContainsTransitions
!insert (greenhouseEnvironmentManager, coolingToMonitoring) into StateMachineContainsTransitions
!insert (greenhouseEnvironmentManager, humidifyingToMonitoring) into StateMachineContainsTransitions
!insert (greenhouseEnvironmentManager, lightingToMonitoring) into StateMachineContainsTransitions
!insert (greenhouseEnvironmentManager, monitorToMaintenance) into StateMachineContainsTransitions
!insert (greenhouseEnvironmentManager, maintenanceToMonitoring) into StateMachineContainsTransitions

!insert (monitorToHeating, timeEvent3) into TransitionContainsEvents
!insert (monitorToCooling, timeEvent4) into TransitionContainsEvents
!insert (monitorToHumidifying, defaultTimeEventA) into TransitionContainsEvents
!insert (monitorToLighting, defaultTimeEventB) into TransitionContainsEvents
!insert (heatingToMonitoring, defaultTimeEventC) into TransitionContainsEvents
!insert (coolingToMonitoring, defaultTimeEventD) into TransitionContainsEvents
!insert (humidifyingToMonitoring, timeEvent5) into TransitionContainsEvents
!insert (lightingToMonitoring, defaultTimeEventA) into TransitionContainsEvents
!insert (monitorToMaintenance, timeEvent720) into TransitionContainsEvents
!insert (maintenanceToMonitoring, defaultTimeEventB) into TransitionContainsEvents

!insert (monitoring, monitorToHeating) into StateTransition
!insert (monitorToHeating, heatingActive) into TransitionState

!insert (monitoring, monitorToCooling) into StateTransition
!insert (monitorToCooling, coolingActive) into TransitionState

!insert (monitoring, monitorToHumidifying) into StateTransition
!insert (monitorToHumidifying, humidifying) into TransitionState

!insert (monitoring, monitorToLighting) into StateTransition
!insert (monitorToLighting, lightAdjustment) into TransitionState

!insert (heatingActive, heatingToMonitoring) into StateTransition
!insert (heatingToMonitoring, monitoring) into TransitionState

!insert (coolingActive, coolingToMonitoring) into StateTransition
!insert (coolingToMonitoring, monitoring) into TransitionState

!insert (humidifying, humidifyingToMonitoring) into StateTransition
!insert (humidifyingToMonitoring, monitoring) into TransitionState

!insert (lightAdjustment, lightingToMonitoring) into StateTransition
!insert (lightingToMonitoring, monitoring) into TransitionState

!insert (monitoring, monitorToMaintenance) into StateTransition
!insert (monitorToMaintenance, systemMaintenance) into TransitionState

!insert (systemMaintenance, maintenanceToMonitoring) into StateTransition
!insert (maintenanceToMonitoring, monitoring) into TransitionState

!insert (greenhouseEnvironmentManager, monitoring) into StateMachineStartsStates
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 1 | 97 | 1.03% |
| Multiplicities Errors | 2 | 47 | 4.26% |
| Invariants Errors | 0 | 2 | 0.00% |

| Syntax Errors | 
|---| 
```
Warning: Insert has resulted in two aggregates for object `defaultTimeEventA'. Object `defaultTimeEventA' is already component of another object.
```

| Multiplicities Errors | 
|---| 
```
Multiplicity constraint violation in association `TransitionContainsEvents':
  Object `defaultTimeEventB' of class `TimeEvent' is connected to 2 objects of class `Transition'
  at association end `transition' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `TransitionContainsEvents':
  Object `defaultTimeEventA' of class `TimeEvent' is connected to 2 objects of class `Transition'
  at association end `transition' but the multiplicity is specified as `1'.
```

| No specific metrics for this system | 
 |---|

## Category edge
```
!new StateMachine('transientMachine')
!transientMachine.name := 'transientMachine'

!new State('entryPoint')
!entryPoint.name := 'entryPoint'

!new State('transientA')
!transientA.name := 'transientA'

!new State('transientB')
!transientB.name := 'transientB'

!new State('stableEnd')
!stableEnd.name := 'stableEnd'

!new Transition('entryToA')
!entryToA.name := 'entryToA'

!new Transition('aToB')
!aToB.name := 'aToB'

!new Transition('bToEnd')
!bToEnd.name := 'bToEnd'

!new TimeEvent('timeEvent1_1')
!timeEvent1_1.time := 1

!new TimeEvent('timeEvent1_2')
!timeEvent1_2.time := 1

!new TimeEvent('timeEvent2')
!timeEvent2.time := 2

!insert (transientMachine, entryPoint) into StateMachineContainsStates
!insert (transientMachine, transientA) into StateMachineContainsStates
!insert (transientMachine, transientB) into StateMachineContainsStates
!insert (transientMachine, stableEnd) into StateMachineContainsStates

!insert (transientMachine, entryToA) into StateMachineContainsTransitions
!insert (transientMachine, aToB) into StateMachineContainsTransitions
!insert (transientMachine, bToEnd) into StateMachineContainsTransitions

!insert (entryToA, timeEvent1_1) into TransitionContainsEvents
!insert (aToB, timeEvent1_2) into TransitionContainsEvents
!insert (bToEnd, timeEvent2) into TransitionContainsEvents

!insert (entryPoint, entryToA) into StateTransition
!insert (entryToA, transientA) into TransitionState

!insert (transientA, aToB) into StateTransition
!insert (aToB, transientB) into TransitionState

!insert (transientB, bToEnd) into StateTransition
!insert (bToEnd, stableEnd) into TransitionState

!insert (transientMachine, entryPoint) into StateMachineStartsStates
```
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 39 | 0.00% |
| Multiplicities Errors | 0 | 17 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

## Category invalid
```
!new StateMachine('UniversityEnrollment')
!UniversityEnrollment.name := 'UniversityEnrollment'

!new State('applicationSubmitted')
!applicationSubmitted.name := 'applicationSubmitted'

!new State('documentsVerified')
!documentsVerified.name := 'documentsVerified'

!new State('admitted')
!admitted.name := 'admitted'

!new State('enrolled')
!enrolled.name := 'enrolled'

!new Transition('SubmitToVerify')
!SubmitToVerify.name := 'Submit to Verify'

!new Transition('VerifyToAdmit')
!VerifyToAdmit.name := 'Verify to Admit'

!new Transition('AdmitToEnroll')
!AdmitToEnroll.name := 'Admit to Enroll'

!new TimeEvent('SubmissionTimeout')
!SubmissionTimeout.time := 7

!new TimeEvent('VerificationTimeout')
!VerificationTimeout.time := 14

!new TimeEvent('AdmissionTimeout')
!AdmissionTimeout.time := 3

!insert (UniversityEnrollment, applicationSubmitted) into StateMachineContainsStates
!insert (UniversityEnrollment, documentsVerified) into StateMachineContainsStates
!insert (UniversityEnrollment, admitted) into StateMachineContainsStates
!insert (UniversityEnrollment, enrolled) into StateMachineContainsStates

!insert (UniversityEnrollment, SubmitToVerify) into StateMachineContainsTransitions
!insert (UniversityEnrollment, VerifyToAdmit) into StateMachineContainsTransitions
!insert (UniversityEnrollment, AdmitToEnroll) into StateMachineContainsTransitions

!insert (SubmitToVerify, SubmissionTimeout) into TransitionContainsEvents
!insert (VerifyToAdmit, VerificationTimeout) into TransitionContainsEvents
!insert (AdmitToEnroll, AdmissionTimeout) into TransitionContainsEvents

!insert (applicationSubmitted, SubmitToVerify) into StateTransition
!insert (SubmitToVerify, documentsVerified) into TransitionState

!insert (documentsVerified, VerifyToAdmit) into StateTransition
!insert (VerifyToAdmit, admitted) into TransitionState

!insert (admitted, AdmitToEnroll) into StateTransition
!insert (AdmitToEnroll, enrolled) into TransitionState

!insert (UniversityEnrollment, applicationSubmitted) into StateMachineStartsStates
!insert (UniversityEnrollment, documentsVerified) into StateMachineStartsStates
```
| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 18 | 5.56% |
| Invariants Errors (Not included on General) | 0 | 2 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `StateMachineStartsStates':
  Object `UniversityEnrollment' of class `StateMachine' is connected to 2 objects of class `State'
  at association end `start' but the multiplicity is specified as `1'.
```

| No specific metrics for this system | 
 |---|

## Generation 6 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 1 | 294 | 0.34% |
| Multiplicities Errors | 2 | 118 | 1.69% |
| Invariants Errors | 0 | 8 | 0.00% |

| Syntax Errors | 
|---| 
```
Warning: Insert has resulted in two aggregates for object `defaultTimeEventA'. Object `defaultTimeEventA' is already component of another object.
```

| Multiplicities Errors | 
|---| 
```
Multiplicity constraint violation in association `TransitionContainsEvents':
  Object `defaultTimeEventB' of class `TimeEvent' is connected to 2 objects of class `Transition'
  at association end `transition' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `TransitionContainsEvents':
  Object `defaultTimeEventA' of class `TimeEvent' is connected to 2 objects of class `Transition'
  at association end `transition' but the multiplicity is specified as `1'.
```

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 1 | 18 | 5.56% |
| Invariants Errors (Not included on General) | 0 | 2 | 0.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `StateMachineStartsStates':
  Object `UniversityEnrollment' of class `StateMachine' is connected to 2 objects of class `State'
  at association end `start' but the multiplicity is specified as `1'.
```

| No specific metrics for this system | 
 |---|

# Summary for all generations
| Summary | Value | 
|---|---| 
| Model | GPT_4O | 
| Type | CoT | 
| System | statemachine | 
| Number of generations | 6 | 

| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 1 | 1541 | 0.06% |
| Multiplicities Errors | 2 | 581 | 0.34% |
| Invariants Errors | 0 | 48 | 0.00% |

| Syntax Errors | 
|---| 
```
Warning: Insert has resulted in two aggregates for object `defaultTimeEventA'. Object `defaultTimeEventA' is already component of another object.
```

| Multiplicities Errors | 
|---| 
```
Multiplicity constraint violation in association `TransitionContainsEvents':
  Object `defaultTimeEventB' of class `TimeEvent' is connected to 2 objects of class `Transition'
  at association end `transition' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `TransitionContainsEvents':
  Object `defaultTimeEventA' of class `TimeEvent' is connected to 2 objects of class `Transition'
  at association end `transition' but the multiplicity is specified as `1'.
```

| [Overconstraints Detection] | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Multiplicities Errors (Not included on General) | 2 | 114 | 1.75% |
| Invariants Errors (Not included on General) | 3 | 12 | 25.00% |

| [Overconstraints Detection] Multiplicities Errors (Not included on General) | 
|---| 
```
Multiplicity constraint violation in association `StateMachineStartsStates':
  Object `CafeOrderProcessing' of class `StateMachine' is connected to 2 objects of class `State'
  at association end `start' but the multiplicity is specified as `1'.
```
```
Multiplicity constraint violation in association `StateMachineStartsStates':
  Object `UniversityEnrollment' of class `StateMachine' is connected to 2 objects of class `State'
  at association end `start' but the multiplicity is specified as `1'.
```

| [Overconstraints Detection] Invariants Errors (Not included on General) | 
|---| 
```
checking invariant (2) `TimeEvent::TimeIsPositive': FAILED.
```
```
checking invariant (1) `StateMachine::FirstCharLowerCase': FAILED.
```
```
checking invariant (2) `TimeEvent::TimeIsPositive': FAILED.
```

| No specific metrics for this system | 
 |---|

