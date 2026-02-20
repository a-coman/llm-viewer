# Generation 1
```
!new StateMachine('smTraffic')
!smTraffic.name := 'trafficLightController'

!new StateMachine('smGreenStart')
!smGreenStart.name := 'greenStartHelper'

!new StateMachine('smYellowStart')
!smYellowStart.name := 'yellowStartHelper'

!new StateMachine('smDoor')
!smDoor.name := 'automaticDoor'

!new StateMachine('smOpenStart')
!smOpenStart.name := 'openStartHelper'

!new StateMachine('smMaintenance')
!smMaintenance.name := 'maintenanceMode'


!new State('sRed')
!sRed.name := 'red'
!new State('sGreen')
!sGreen.name := 'green'
!new State('sYellow')
!sYellow.name := 'yellow'

!new State('sClosed')
!sClosed.name := 'closed'
!new State('sOpen')
!sOpen.name := 'open'

!new State('sMaintIdle')
!sMaintIdle.name := 'idle'


!insert (smTraffic, sRed) into StateMachineContainsStates
!insert (smTraffic, sGreen) into StateMachineContainsStates
!insert (smTraffic, sYellow) into StateMachineContainsStates

!insert (smDoor, sClosed) into StateMachineContainsStates
!insert (smDoor, sOpen) into StateMachineContainsStates

!insert (smMaintenance, sMaintIdle) into StateMachineContainsStates


!insert (smTraffic, sRed) into StateMachineStartsStates
!insert (smGreenStart, sGreen) into StateMachineStartsStates
!insert (smYellowStart, sYellow) into StateMachineStartsStates
!insert (smDoor, sClosed) into StateMachineStartsStates
!insert (smOpenStart, sOpen) into StateMachineStartsStates
!insert (smMaintenance, sMaintIdle) into StateMachineStartsStates


!new Transition('tRedToGreen')
!tRedToGreen.name := 'toGreen'
!new TimeEvent('teRedToGreen')
!teRedToGreen.time := 30

!new Transition('tGreenToYellow')
!tGreenToYellow.name := 'toYellow'
!new TimeEvent('teGreenToYellow')
!teGreenToYellow.time := 5

!new Transition('tYellowToRed')
!tYellowToRed.name := 'toRed'
!new TimeEvent('teYellowToRed')
!teYellowToRed.time := 4

!new Transition('tBlinkRed')
!tBlinkRed.name := 'blinkRed'
!new TimeEvent('teBlinkRed')
!teBlinkRed.time := 1


!insert (smTraffic, tRedToGreen) into StateMachineContainsTransitions
!insert (smTraffic, tGreenToYellow) into StateMachineContainsTransitions
!insert (smTraffic, tYellowToRed) into StateMachineContainsTransitions
!insert (smTraffic, tBlinkRed) into StateMachineContainsTransitions

!insert (tRedToGreen, teRedToGreen) into TransitionContainsEvents
!insert (tGreenToYellow, teGreenToYellow) into TransitionContainsEvents
!insert (tYellowToRed, teYellowToRed) into TransitionContainsEvents
!insert (tBlinkRed, teBlinkRed) into TransitionContainsEvents


!insert (sRed, tRedToGreen) into StateTransition
!insert (tRedToGreen, sGreen) into TransitionState

!insert (sGreen, tGreenToYellow) into StateTransition
!insert (tGreenToYellow, sYellow) into TransitionState

!insert (sYellow, tYellowToRed) into StateTransition
!insert (tYellowToRed, sRed) into TransitionState

!insert (sRed, tBlinkRed) into StateTransition
!insert (tBlinkRed, sRed) into TransitionState


!new Transition('tClosedToOpen')
!tClosedToOpen.name := 'openDoor'
!new TimeEvent('teClosedToOpen')
!teClosedToOpen.time := 2

!new Transition('tOpenToClosed')
!tOpenToClosed.name := 'closeDoor'
!new TimeEvent('teOpenToClosed')
!teOpenToClosed.time := 7

!new Transition('tHoldOpen')
!tHoldOpen.name := 'holdOpen'
!new TimeEvent('teHoldOpen')
!teHoldOpen.time := 10


!insert (smDoor, tClosedToOpen) into StateMachineContainsTransitions
!insert (smDoor, tOpenToClosed) into StateMachineContainsTransitions
!insert (smDoor, tHoldOpen) into StateMachineContainsTransitions

!insert (tClosedToOpen, teClosedToOpen) into TransitionContainsEvents
!insert (tOpenToClosed, teOpenToClosed) into TransitionContainsEvents
!insert (tHoldOpen, teHoldOpen) into TransitionContainsEvents


!insert (sClosed, tClosedToOpen) into StateTransition
!insert (tClosedToOpen, sOpen) into TransitionState

!insert (sOpen, tOpenToClosed) into StateTransition
!insert (tOpenToClosed, sClosed) into TransitionState

!insert (sOpen, tHoldOpen) into StateTransition
!insert (tHoldOpen, sOpen) into TransitionState
```
## Generation 1 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 92 | 0.00% |
| Multiplicities Errors | 0 | 40 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

# Generation 2
```
!new StateMachine('smElevator')
!smElevator.name := 'elevatorControl'

!new StateMachine('smPayment')
!smPayment.name := 'paymentSession'


!new State('stIdle')
!stIdle.name := 'idle'
!new State('stDoorOpen')
!stDoorOpen.name := 'doorOpen'
!new State('stMovingUp')
!stMovingUp.name := 'movingUp'
!new State('stMovingDown')
!stMovingDown.name := 'movingDown'

!insert (smElevator, stIdle) into StateMachineContainsStates
!insert (smElevator, stDoorOpen) into StateMachineContainsStates
!insert (smElevator, stMovingUp) into StateMachineContainsStates
!insert (smElevator, stMovingDown) into StateMachineContainsStates

!insert (smElevator, stIdle) into StateMachineStartsStates


!new Transition('trCallOpensDoor')
!trCallOpensDoor.name := 'callOpensDoor'
!new TimeEvent('evCallOpensDoor')
!evCallOpensDoor.time := 1
!insert (smElevator, trCallOpensDoor) into StateMachineContainsTransitions
!insert (trCallOpensDoor, evCallOpensDoor) into TransitionContainsEvents
!insert (stIdle, trCallOpensDoor) into StateTransition
!insert (trCallOpensDoor, stDoorOpen) into TransitionState

!new Transition('trCloseDoor')
!trCloseDoor.name := 'closeDoor'
!new TimeEvent('evCloseDoor')
!evCloseDoor.time := 3
!insert (smElevator, trCloseDoor) into StateMachineContainsTransitions
!insert (trCloseDoor, evCloseDoor) into TransitionContainsEvents
!insert (stDoorOpen, trCloseDoor) into StateTransition
!insert (trCloseDoor, stIdle) into TransitionState

!new Transition('trSelectUp')
!trSelectUp.name := 'selectUp'
!new TimeEvent('evSelectUp')
!evSelectUp.time := 1
!insert (smElevator, trSelectUp) into StateMachineContainsTransitions
!insert (trSelectUp, evSelectUp) into TransitionContainsEvents
!insert (stIdle, trSelectUp) into StateTransition
!insert (trSelectUp, stMovingUp) into TransitionState

!new Transition('trSelectDown')
!trSelectDown.name := 'selectDown'
!new TimeEvent('evSelectDown')
!evSelectDown.time := 1
!insert (smElevator, trSelectDown) into StateMachineContainsTransitions
!insert (trSelectDown, evSelectDown) into TransitionContainsEvents
!insert (stIdle, trSelectDown) into StateTransition
!insert (trSelectDown, stMovingDown) into TransitionState

!new Transition('trArriveFromUp')
!trArriveFromUp.name := 'arriveFromUp'
!new TimeEvent('evArriveFromUp')
!evArriveFromUp.time := 6
!insert (smElevator, trArriveFromUp) into StateMachineContainsTransitions
!insert (trArriveFromUp, evArriveFromUp) into TransitionContainsEvents
!insert (stMovingUp, trArriveFromUp) into StateTransition
!insert (trArriveFromUp, stIdle) into TransitionState

!new Transition('trArriveFromDown')
!trArriveFromDown.name := 'arriveFromDown'
!new TimeEvent('evArriveFromDown')
!evArriveFromDown.time := 5
!insert (smElevator, trArriveFromDown) into StateMachineContainsTransitions
!insert (trArriveFromDown, evArriveFromDown) into TransitionContainsEvents
!insert (stMovingDown, trArriveFromDown) into StateTransition
!insert (trArriveFromDown, stIdle) into TransitionState

!new Transition('trHoldDoorOpen')
!trHoldDoorOpen.name := 'holdDoorOpen'
!new TimeEvent('evHoldDoorOpen')
!evHoldDoorOpen.time := 2
!insert (smElevator, trHoldDoorOpen) into StateMachineContainsTransitions
!insert (trHoldDoorOpen, evHoldDoorOpen) into TransitionContainsEvents
!insert (stDoorOpen, trHoldDoorOpen) into StateTransition
!insert (trHoldDoorOpen, stDoorOpen) into TransitionState


!new State('stUnauth')
!stUnauth.name := 'unauthenticated'
!new State('stAuthing')
!stAuthing.name := 'authenticating'
!new State('stAuth')
!stAuth.name := 'authenticated'
!new State('stLocked')
!stLocked.name := 'locked'

!insert (smPayment, stUnauth) into StateMachineContainsStates
!insert (smPayment, stAuthing) into StateMachineContainsStates
!insert (smPayment, stAuth) into StateMachineContainsStates
!insert (smPayment, stLocked) into StateMachineContainsStates

!insert (smPayment, stUnauth) into StateMachineStartsStates


!new Transition('trStartLogin')
!trStartLogin.name := 'startLogin'
!new TimeEvent('evStartLogin')
!evStartLogin.time := 1
!insert (smPayment, trStartLogin) into StateMachineContainsTransitions
!insert (trStartLogin, evStartLogin) into TransitionContainsEvents
!insert (stUnauth, trStartLogin) into StateTransition
!insert (trStartLogin, stAuthing) into TransitionState

!new Transition('trLoginOk')
!trLoginOk.name := 'loginOk'
!new TimeEvent('evLoginOk')
!evLoginOk.time := 2
!insert (smPayment, trLoginOk) into StateMachineContainsTransitions
!insert (trLoginOk, evLoginOk) into TransitionContainsEvents
!insert (stAuthing, trLoginOk) into StateTransition
!insert (trLoginOk, stAuth) into TransitionState

!new Transition('trLoginFailLock')
!trLoginFailLock.name := 'loginFailLock'
!new TimeEvent('evLoginFailLock')
!evLoginFailLock.time := 3
!insert (smPayment, trLoginFailLock) into StateMachineContainsTransitions
!insert (trLoginFailLock, evLoginFailLock) into TransitionContainsEvents
!insert (stAuthing, trLoginFailLock) into StateTransition
!insert (trLoginFailLock, stLocked) into TransitionState

!new Transition('trUnlockTimeout')
!trUnlockTimeout.name := 'unlockTimeout'
!new TimeEvent('evUnlockTimeout')
!evUnlockTimeout.time := 30
!insert (smPayment, trUnlockTimeout) into StateMachineContainsTransitions
!insert (trUnlockTimeout, evUnlockTimeout) into TransitionContainsEvents
!insert (stLocked, trUnlockTimeout) into StateTransition
!insert (trUnlockTimeout, stUnauth) into TransitionState

!new Transition('trLogout')
!trLogout.name := 'logout'
!new TimeEvent('evLogout')
!evLogout.time := 10
!insert (smPayment, trLogout) into StateMachineContainsTransitions
!insert (trLogout, evLogout) into TransitionContainsEvents
!insert (stAuth, trLogout) into StateTransition
!insert (trLogout, stUnauth) into TransitionState

!new Transition('trRefreshSession')
!trRefreshSession.name := 'refreshSession'
!new TimeEvent('evRefreshSession')
!evRefreshSession.time := 15
!insert (smPayment, trRefreshSession) into StateMachineContainsTransitions
!insert (trRefreshSession, evRefreshSession) into TransitionContainsEvents
!insert (stAuth, trRefreshSession) into StateTransition
!insert (trRefreshSession, stAuth) into TransitionState
```
## Generation 2 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 134 | 0.00% |
| Multiplicities Errors | 0 | 62 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

# Generation 3
```
!new StateMachine('smCoffee')
!smCoffee.name := 'coffeeMachine'

!new State('stOff')
!stOff.name := 'off'
!new State('stHeating')
!stHeating.name := 'heating'
!new State('stReady')
!stReady.name := 'ready'
!new State('stBrewing')
!stBrewing.name := 'brewing'
!new State('stCleaning')
!stCleaning.name := 'cleaning'

!insert (smCoffee, stOff) into StateMachineContainsStates
!insert (smCoffee, stHeating) into StateMachineContainsStates
!insert (smCoffee, stReady) into StateMachineContainsStates
!insert (smCoffee, stBrewing) into StateMachineContainsStates
!insert (smCoffee, stCleaning) into StateMachineContainsStates

!insert (smCoffee, stOff) into StateMachineStartsStates


!new Transition('trPowerOn')
!trPowerOn.name := 'powerOn'
!new TimeEvent('evPowerOn')
!evPowerOn.time := 1
!insert (smCoffee, trPowerOn) into StateMachineContainsTransitions
!insert (trPowerOn, evPowerOn) into TransitionContainsEvents
!insert (stOff, trPowerOn) into StateTransition
!insert (trPowerOn, stHeating) into TransitionState

!new Transition('trWarmUpDone')
!trWarmUpDone.name := 'warmUpDone'
!new TimeEvent('evWarmUpDone')
!evWarmUpDone.time := 40
!insert (smCoffee, trWarmUpDone) into StateMachineContainsTransitions
!insert (trWarmUpDone, evWarmUpDone) into TransitionContainsEvents
!insert (stHeating, trWarmUpDone) into StateTransition
!insert (trWarmUpDone, stReady) into TransitionState

!new Transition('trStartBrew')
!trStartBrew.name := 'startBrew'
!new TimeEvent('evStartBrew')
!evStartBrew.time := 1
!insert (smCoffee, trStartBrew) into StateMachineContainsTransitions
!insert (trStartBrew, evStartBrew) into TransitionContainsEvents
!insert (stReady, trStartBrew) into StateTransition
!insert (trStartBrew, stBrewing) into TransitionState

!new Transition('trBrewComplete')
!trBrewComplete.name := 'brewComplete'
!new TimeEvent('evBrewComplete')
!evBrewComplete.time := 25
!insert (smCoffee, trBrewComplete) into StateMachineContainsTransitions
!insert (trBrewComplete, evBrewComplete) into TransitionContainsEvents
!insert (stBrewing, trBrewComplete) into StateTransition
!insert (trBrewComplete, stReady) into TransitionState

!new Transition('trRunCleaning')
!trRunCleaning.name := 'runCleaning'
!new TimeEvent('evRunCleaning')
!evRunCleaning.time := 2
!insert (smCoffee, trRunCleaning) into StateMachineContainsTransitions
!insert (trRunCleaning, evRunCleaning) into TransitionContainsEvents
!insert (stReady, trRunCleaning) into StateTransition
!insert (trRunCleaning, stCleaning) into TransitionState

!new Transition('trCleaningDone')
!trCleaningDone.name := 'cleaningDone'
!new TimeEvent('evCleaningDone')
!evCleaningDone.time := 90
!insert (smCoffee, trCleaningDone) into StateMachineContainsTransitions
!insert (trCleaningDone, evCleaningDone) into TransitionContainsEvents
!insert (stCleaning, trCleaningDone) into StateTransition
!insert (trCleaningDone, stReady) into TransitionState

!new Transition('trPowerOff')
!trPowerOff.name := 'powerOff'
!new TimeEvent('evPowerOff')
!evPowerOff.time := 1
!insert (smCoffee, trPowerOff) into StateMachineContainsTransitions
!insert (trPowerOff, evPowerOff) into TransitionContainsEvents
!insert (stReady, trPowerOff) into StateTransition
!insert (trPowerOff, stOff) into TransitionState

!new Transition('trEmergencyStop')
!trEmergencyStop.name := 'emergencyStop'
!new TimeEvent('evEmergencyStop')
!evEmergencyStop.time := 1
!insert (smCoffee, trEmergencyStop) into StateMachineContainsTransitions
!insert (trEmergencyStop, evEmergencyStop) into TransitionContainsEvents
!insert (stBrewing, trEmergencyStop) into StateTransition
!insert (trEmergencyStop, stOff) into TransitionState


!new StateMachine('smNetwork')
!smNetwork.name := 'networkConnection'

!new State('stDisconnected')
!stDisconnected.name := 'disconnected'
!new State('stConnecting')
!stConnecting.name := 'connecting'
!new State('stConnected')
!stConnected.name := 'connected'
!new State('stError')
!stError.name := 'error'

!insert (smNetwork, stDisconnected) into StateMachineContainsStates
!insert (smNetwork, stConnecting) into StateMachineContainsStates
!insert (smNetwork, stConnected) into StateMachineContainsStates
!insert (smNetwork, stError) into StateMachineContainsStates

!insert (smNetwork, stDisconnected) into StateMachineStartsStates


!new Transition('trBeginConnect')
!trBeginConnect.name := 'beginConnect'
!new TimeEvent('evBeginConnect')
!evBeginConnect.time := 1
!insert (smNetwork, trBeginConnect) into StateMachineContainsTransitions
!insert (trBeginConnect, evBeginConnect) into TransitionContainsEvents
!insert (stDisconnected, trBeginConnect) into StateTransition
!insert (trBeginConnect, stConnecting) into TransitionState

!new Transition('trConnectOk')
!trConnectOk.name := 'connectOk'
!new TimeEvent('evConnectOk')
!evConnectOk.time := 4
!insert (smNetwork, trConnectOk) into StateMachineContainsTransitions
!insert (trConnectOk, evConnectOk) into TransitionContainsEvents
!insert (stConnecting, trConnectOk) into StateTransition
!insert (trConnectOk, stConnected) into TransitionState

!new Transition('trConnectFail')
!trConnectFail.name := 'connectFail'
!new TimeEvent('evConnectFail')
!evConnectFail.time := 6
!insert (smNetwork, trConnectFail) into StateMachineContainsTransitions
!insert (trConnectFail, evConnectFail) into TransitionContainsEvents
!insert (stConnecting, trConnectFail) into StateTransition
!insert (trConnectFail, stError) into TransitionState

!new Transition('trRetryConnect')
!trRetryConnect.name := 'retryConnect'
!new TimeEvent('evRetryConnect')
!evRetryConnect.time := 10
!insert (smNetwork, trRetryConnect) into StateMachineContainsTransitions
!insert (trRetryConnect, evRetryConnect) into TransitionContainsEvents
!insert (stError, trRetryConnect) into StateTransition
!insert (trRetryConnect, stConnecting) into TransitionState

!new Transition('trDropLink')
!trDropLink.name := 'dropLink'
!new TimeEvent('evDropLink')
!evDropLink.time := 1
!insert (smNetwork, trDropLink) into StateMachineContainsTransitions
!insert (trDropLink, evDropLink) into TransitionContainsEvents
!insert (stConnected, trDropLink) into StateTransition
!insert (trDropLink, stDisconnected) into TransitionState

!new Transition('trHeartbeat')
!trHeartbeat.name := 'heartbeat'
!new TimeEvent('evHeartbeat')
!evHeartbeat.time := 15
!insert (smNetwork, trHeartbeat) into StateMachineContainsTransitions
!insert (trHeartbeat, evHeartbeat) into TransitionContainsEvents
!insert (stConnected, trHeartbeat) into StateTransition
!insert (trHeartbeat, stConnected) into TransitionState
```
## Generation 3 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 145 | 0.00% |
| Multiplicities Errors | 0 | 67 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

# Generation 4
```
!new StateMachine('smOrder')
!smOrder.name := 'onlineOrderFlow'

!new State('stBrowsing')
!stBrowsing.name := 'browsing'
!new State('stCheckout')
!stCheckout.name := 'checkout'
!new State('stPaymentPending')
!stPaymentPending.name := 'paymentPending'
!new State('stFulfilled')
!stFulfilled.name := 'fulfilled'
!new State('stCancelled')
!stCancelled.name := 'cancelled'
!new State('stReturned')
!stReturned.name := 'returned'
!new State('stSupport')
!stSupport.name := 'support'

!insert (smOrder, stBrowsing) into StateMachineContainsStates
!insert (smOrder, stCheckout) into StateMachineContainsStates
!insert (smOrder, stPaymentPending) into StateMachineContainsStates
!insert (smOrder, stFulfilled) into StateMachineContainsStates
!insert (smOrder, stCancelled) into StateMachineContainsStates
!insert (smOrder, stReturned) into StateMachineContainsStates
!insert (smOrder, stSupport) into StateMachineContainsStates

!insert (smOrder, stBrowsing) into StateMachineStartsStates


!new Transition('trBrowseToCheckout')
!trBrowseToCheckout.name := 'proceedToCheckout'
!new TimeEvent('evBrowseToCheckout')
!evBrowseToCheckout.time := 1
!insert (smOrder, trBrowseToCheckout) into StateMachineContainsTransitions
!insert (trBrowseToCheckout, evBrowseToCheckout) into TransitionContainsEvents
!insert (stBrowsing, trBrowseToCheckout) into StateTransition
!insert (trBrowseToCheckout, stCheckout) into TransitionState

!new Transition('trCheckoutToPayment')
!trCheckoutToPayment.name := 'confirmOrder'
!new TimeEvent('evCheckoutToPayment')
!evCheckoutToPayment.time := 1
!insert (smOrder, trCheckoutToPayment) into StateMachineContainsTransitions
!insert (trCheckoutToPayment, evCheckoutToPayment) into TransitionContainsEvents
!insert (stCheckout, trCheckoutToPayment) into StateTransition
!insert (trCheckoutToPayment, stPaymentPending) into TransitionState

!new Transition('trPaymentToFulfilled')
!trPaymentToFulfilled.name := 'paymentAccepted'
!new TimeEvent('evPaymentToFulfilled')
!evPaymentToFulfilled.time := 2
!insert (smOrder, trPaymentToFulfilled) into StateMachineContainsTransitions
!insert (trPaymentToFulfilled, evPaymentToFulfilled) into TransitionContainsEvents
!insert (stPaymentPending, trPaymentToFulfilled) into StateTransition
!insert (trPaymentToFulfilled, stFulfilled) into TransitionState

!new Transition('trPaymentTimeoutToCancelled')
!trPaymentTimeoutToCancelled.name := 'paymentTimeout'
!new TimeEvent('evPaymentTimeoutToCancelled')
!evPaymentTimeoutToCancelled.time := 15
!insert (smOrder, trPaymentTimeoutToCancelled) into StateMachineContainsTransitions
!insert (trPaymentTimeoutToCancelled, evPaymentTimeoutToCancelled) into TransitionContainsEvents
!insert (stPaymentPending, trPaymentTimeoutToCancelled) into StateTransition
!insert (trPaymentTimeoutToCancelled, stCancelled) into TransitionState

!new Transition('trCheckoutCancel')
!trCheckoutCancel.name := 'userCancels'
!new TimeEvent('evCheckoutCancel')
!evCheckoutCancel.time := 1
!insert (smOrder, trCheckoutCancel) into StateMachineContainsTransitions
!insert (trCheckoutCancel, evCheckoutCancel) into TransitionContainsEvents
!insert (stCheckout, trCheckoutCancel) into StateTransition
!insert (trCheckoutCancel, stCancelled) into TransitionState

!new Transition('trFulfilledToReturned')
!trFulfilledToReturned.name := 'returnRequested'
!new TimeEvent('evFulfilledToReturned')
!evFulfilledToReturned.time := 43200
!insert (smOrder, trFulfilledToReturned) into StateMachineContainsTransitions
!insert (trFulfilledToReturned, evFulfilledToReturned) into TransitionContainsEvents
!insert (stFulfilled, trFulfilledToReturned) into StateTransition
!insert (trFulfilledToReturned, stReturned) into TransitionState

!new Transition('trCancelledToSupport')
!trCancelledToSupport.name := 'contactSupport'
!new TimeEvent('evCancelledToSupport')
!evCancelledToSupport.time := 5
!insert (smOrder, trCancelledToSupport) into StateMachineContainsTransitions
!insert (trCancelledToSupport, evCancelledToSupport) into TransitionContainsEvents
!insert (stCancelled, trCancelledToSupport) into StateTransition
!insert (trCancelledToSupport, stSupport) into TransitionState

!new Transition('trReturnedToSupport')
!trReturnedToSupport.name := 'returnIssue'
!new TimeEvent('evReturnedToSupport')
!evReturnedToSupport.time := 5
!insert (smOrder, trReturnedToSupport) into StateMachineContainsTransitions
!insert (trReturnedToSupport, evReturnedToSupport) into TransitionContainsEvents
!insert (stReturned, trReturnedToSupport) into StateTransition
!insert (trReturnedToSupport, stSupport) into TransitionState


!new StateMachine('smArchive')
!smArchive.name := 'dataArchiveLifecycle'

!new State('stArchived')
!stArchived.name := 'archived'

!insert (smArchive, stArchived) into StateMachineContainsStates
!insert (smArchive, stArchived) into StateMachineStartsStates
```
## Generation 4 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 94 | 0.00% |
| Multiplicities Errors | 0 | 42 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

# Generation 5
```
!new StateMachine('smDrone')
!smDrone.name := 'deliveryDrone'

!new State('stGrounded')
!stGrounded.name := 'grounded'
!new State('stTakeoff')
!stTakeoff.name := 'takeoff'
!new State('stCruising')
!stCruising.name := 'cruising'
!new State('stDelivering')
!stDelivering.name := 'delivering'
!new State('stReturning')
!stReturning.name := 'returning'
!new State('stCharging')
!stCharging.name := 'charging'
!new State('stError')
!stError.name := 'error'

!insert (smDrone, stGrounded) into StateMachineContainsStates
!insert (smDrone, stTakeoff) into StateMachineContainsStates
!insert (smDrone, stCruising) into StateMachineContainsStates
!insert (smDrone, stDelivering) into StateMachineContainsStates
!insert (smDrone, stReturning) into StateMachineContainsStates
!insert (smDrone, stCharging) into StateMachineContainsStates
!insert (smDrone, stError) into StateMachineContainsStates

!insert (smDrone, stGrounded) into StateMachineStartsStates


!new Transition('trStartMotors')
!trStartMotors.name := 'startMotors'
!new TimeEvent('evStartMotors')
!evStartMotors.time := 2
!insert (smDrone, trStartMotors) into StateMachineContainsTransitions
!insert (trStartMotors, evStartMotors) into TransitionContainsEvents
!insert (stGrounded, trStartMotors) into StateTransition
!insert (trStartMotors, stTakeoff) into TransitionState

!new Transition('trReachAltitude')
!trReachAltitude.name := 'reachAltitude'
!new TimeEvent('evReachAltitude')
!evReachAltitude.time := 15
!insert (smDrone, trReachAltitude) into StateMachineContainsTransitions
!insert (trReachAltitude, evReachAltitude) into TransitionContainsEvents
!insert (stTakeoff, trReachAltitude) into StateTransition
!insert (trReachAltitude, stCruising) into TransitionState

!new Transition('trArriveDestination')
!trArriveDestination.name := 'arriveDestination'
!new TimeEvent('evArriveDestination')
!evArriveDestination.time := 300
!insert (smDrone, trArriveDestination) into StateMachineContainsTransitions
!insert (trArriveDestination, evArriveDestination) into TransitionContainsEvents
!insert (stCruising, trArriveDestination) into StateTransition
!insert (trArriveDestination, stDelivering) into TransitionState

!new Transition('trDropPackage')
!trDropPackage.name := 'dropPackage'
!new TimeEvent('evDropPackage')
!evDropPackage.time := 20
!insert (smDrone, trDropPackage) into StateMachineContainsTransitions
!insert (trDropPackage, evDropPackage) into TransitionContainsEvents
!insert (stDelivering, trDropPackage) into StateTransition
!insert (trDropPackage, stReturning) into TransitionState

!new Transition('trReachBase')
!trReachBase.name := 'reachBase'
!new TimeEvent('evReachBase')
!evReachBase.time := 240
!insert (smDrone, trReachBase) into StateMachineContainsTransitions
!insert (trReachBase, evReachBase) into TransitionContainsEvents
!insert (stReturning, trReachBase) into StateTransition
!insert (trReachBase, stCharging) into TransitionState

!new Transition('trChargeComplete')
!trChargeComplete.name := 'chargeComplete'
!new TimeEvent('evChargeComplete')
!evChargeComplete.time := 3600
!insert (smDrone, trChargeComplete) into StateMachineContainsTransitions
!insert (trChargeComplete, evChargeComplete) into TransitionContainsEvents
!insert (stCharging, trChargeComplete) into StateTransition
!insert (trChargeComplete, stGrounded) into TransitionState

!new Transition('trHoverStabilize')
!trHoverStabilize.name := 'hoverStabilize'
!new TimeEvent('evHoverStabilize')
!evHoverStabilize.time := 5
!insert (smDrone, trHoverStabilize) into StateMachineContainsTransitions
!insert (trHoverStabilize, evHoverStabilize) into TransitionContainsEvents
!insert (stCruising, trHoverStabilize) into StateTransition
!insert (trHoverStabilize, stCruising) into TransitionState

!new Transition('trFaultInCruise')
!trFaultInCruise.name := 'faultInCruise'
!new TimeEvent('evFaultInCruise')
!evFaultInCruise.time := 1
!insert (smDrone, trFaultInCruise) into StateMachineContainsTransitions
!insert (trFaultInCruise, evFaultInCruise) into TransitionContainsEvents
!insert (stCruising, trFaultInCruise) into StateTransition
!insert (trFaultInCruise, stError) into TransitionState

!new Transition('trFaultDuringDelivery')
!trFaultDuringDelivery.name := 'faultDuringDelivery'
!new TimeEvent('evFaultDuringDelivery')
!evFaultDuringDelivery.time := 1
!insert (smDrone, trFaultDuringDelivery) into StateMachineContainsTransitions
!insert (trFaultDuringDelivery, evFaultDuringDelivery) into TransitionContainsEvents
!insert (stDelivering, trFaultDuringDelivery) into StateTransition
!insert (trFaultDuringDelivery, stError) into TransitionState

!new Transition('trFaultOnReturn')
!trFaultOnReturn.name := 'faultOnReturn'
!new TimeEvent('evFaultOnReturn')
!evFaultOnReturn.time := 1
!insert (smDrone, trFaultOnReturn) into StateMachineContainsTransitions
!insert (trFaultOnReturn, evFaultOnReturn) into TransitionContainsEvents
!insert (stReturning, trFaultOnReturn) into StateTransition
!insert (trFaultOnReturn, stError) into TransitionState

!new Transition('trResetAfterError')
!trResetAfterError.name := 'resetAfterError'
!new TimeEvent('evResetAfterError')
!evResetAfterError.time := 60
!insert (smDrone, trResetAfterError) into StateMachineContainsTransitions
!insert (trResetAfterError, evResetAfterError) into TransitionContainsEvents
!insert (stError, trResetAfterError) into StateTransition
!insert (trResetAfterError, stGrounded) into TransitionState


!new StateMachine('smBackup')
!smBackup.name := 'backupJob'

!new State('stWaiting')
!stWaiting.name := 'waiting'
!new State('stRunning')
!stRunning.name := 'running'
!new State('stVerifying')
!stVerifying.name := 'verifying'
!new State('stDone')
!stDone.name := 'done'
!new State('stFailed')
!stFailed.name := 'failed'

!insert (smBackup, stWaiting) into StateMachineContainsStates
!insert (smBackup, stRunning) into StateMachineContainsStates
!insert (smBackup, stVerifying) into StateMachineContainsStates
!insert (smBackup, stDone) into StateMachineContainsStates
!insert (smBackup, stFailed) into StateMachineContainsStates

!insert (smBackup, stWaiting) into StateMachineStartsStates


!new Transition('trStartBackup')
!trStartBackup.name := 'startBackup'
!new TimeEvent('evStartBackup')
!evStartBackup.time := 1
!insert (smBackup, trStartBackup) into StateMachineContainsTransitions
!insert (trStartBackup, evStartBackup) into TransitionContainsEvents
!insert (stWaiting, trStartBackup) into StateTransition
!insert (trStartBackup, stRunning) into TransitionState

!new Transition('trBackupFinished')
!trBackupFinished.name := 'backupFinished'
!new TimeEvent('evBackupFinished')
!evBackupFinished.time := 1200
!insert (smBackup, trBackupFinished) into StateMachineContainsTransitions
!insert (trBackupFinished, evBackupFinished) into TransitionContainsEvents
!insert (stRunning, trBackupFinished) into StateTransition
!insert (trBackupFinished, stVerifying) into TransitionState

!new Transition('trVerifyOk')
!trVerifyOk.name := 'verifyOk'
!new TimeEvent('evVerifyOk')
!evVerifyOk.time := 45
!insert (smBackup, trVerifyOk) into StateMachineContainsTransitions
!insert (trVerifyOk, evVerifyOk) into TransitionContainsEvents
!insert (stVerifying, trVerifyOk) into StateTransition
!insert (trVerifyOk, stDone) into TransitionState

!new Transition('trVerifyFail')
!trVerifyFail.name := 'verifyFail'
!new TimeEvent('evVerifyFail')
!evVerifyFail.time := 45
!insert (smBackup, trVerifyFail) into StateMachineContainsTransitions
!insert (trVerifyFail, evVerifyFail) into TransitionContainsEvents
!insert (stVerifying, trVerifyFail) into StateTransition
!insert (trVerifyFail, stFailed) into TransitionState

!new Transition('trRetryBackup')
!trRetryBackup.name := 'retryBackup'
!new TimeEvent('evRetryBackup')
!evRetryBackup.time := 300
!insert (smBackup, trRetryBackup) into StateMachineContainsTransitions
!insert (trRetryBackup, evRetryBackup) into TransitionContainsEvents
!insert (stFailed, trRetryBackup) into StateTransition
!insert (trRetryBackup, stRunning) into TransitionState
```
## Generation 5 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 170 | 0.00% |
| Multiplicities Errors | 0 | 78 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

# Generation 6
```
!new StateMachine('smThermostat')
!smThermostat.name := 'homeThermostat'

!new State('stT_off')
!stT_off.name := 'off'
!new State('stT_idle')
!stT_idle.name := 'idle'
!new State('stT_heating')
!stT_heating.name := 'heating'
!new State('stT_cooling')
!stT_cooling.name := 'cooling'
!new State('stT_error')
!stT_error.name := 'error'

!insert (smThermostat, stT_off) into StateMachineContainsStates
!insert (smThermostat, stT_idle) into StateMachineContainsStates
!insert (smThermostat, stT_heating) into StateMachineContainsStates
!insert (smThermostat, stT_cooling) into StateMachineContainsStates
!insert (smThermostat, stT_error) into StateMachineContainsStates

!insert (smThermostat, stT_off) into StateMachineStartsStates

!new Transition('trT_powerOn')
!trT_powerOn.name := 'powerOn'
!new TimeEvent('evT_powerOn')
!evT_powerOn.time := 1
!insert (smThermostat, trT_powerOn) into StateMachineContainsTransitions
!insert (trT_powerOn, evT_powerOn) into TransitionContainsEvents
!insert (stT_off, trT_powerOn) into StateTransition
!insert (trT_powerOn, stT_idle) into TransitionState

!new Transition('trT_powerOff')
!trT_powerOff.name := 'powerOff'
!new TimeEvent('evT_powerOff')
!evT_powerOff.time := 1
!insert (smThermostat, trT_powerOff) into StateMachineContainsTransitions
!insert (trT_powerOff, evT_powerOff) into TransitionContainsEvents
!insert (stT_idle, trT_powerOff) into StateTransition
!insert (trT_powerOff, stT_off) into TransitionState

!new Transition('trT_tempLow')
!trT_tempLow.name := 'tempLow'
!new TimeEvent('evT_tempLow')
!evT_tempLow.time := 2
!insert (smThermostat, trT_tempLow) into StateMachineContainsTransitions
!insert (trT_tempLow, evT_tempLow) into TransitionContainsEvents
!insert (stT_idle, trT_tempLow) into StateTransition
!insert (trT_tempLow, stT_heating) into TransitionState

!new Transition('trT_tempOkFromHeat')
!trT_tempOkFromHeat.name := 'tempOkFromHeat'
!new TimeEvent('evT_tempOkFromHeat')
!evT_tempOkFromHeat.time := 5
!insert (smThermostat, trT_tempOkFromHeat) into StateMachineContainsTransitions
!insert (trT_tempOkFromHeat, evT_tempOkFromHeat) into TransitionContainsEvents
!insert (stT_heating, trT_tempOkFromHeat) into StateTransition
!insert (trT_tempOkFromHeat, stT_idle) into TransitionState

!new Transition('trT_tempHigh')
!trT_tempHigh.name := 'tempHigh'
!new TimeEvent('evT_tempHigh')
!evT_tempHigh.time := 2
!insert (smThermostat, trT_tempHigh) into StateMachineContainsTransitions
!insert (trT_tempHigh, evT_tempHigh) into TransitionContainsEvents
!insert (stT_idle, trT_tempHigh) into StateTransition
!insert (trT_tempHigh, stT_cooling) into TransitionState

!new Transition('trT_tempOkFromCool')
!trT_tempOkFromCool.name := 'tempOkFromCool'
!new TimeEvent('evT_tempOkFromCool')
!evT_tempOkFromCool.time := 5
!insert (smThermostat, trT_tempOkFromCool) into StateMachineContainsTransitions
!insert (trT_tempOkFromCool, evT_tempOkFromCool) into TransitionContainsEvents
!insert (stT_cooling, trT_tempOkFromCool) into StateTransition
!insert (trT_tempOkFromCool, stT_idle) into TransitionState

!new Transition('trT_sensorFault')
!trT_sensorFault.name := 'sensorFault'
!new TimeEvent('evT_sensorFault')
!evT_sensorFault.time := 1
!insert (smThermostat, trT_sensorFault) into StateMachineContainsTransitions
!insert (trT_sensorFault, evT_sensorFault) into TransitionContainsEvents
!insert (stT_idle, trT_sensorFault) into StateTransition
!insert (trT_sensorFault, stT_error) into TransitionState

!new Transition('trT_reset')
!trT_reset.name := 'reset'
!new TimeEvent('evT_reset')
!evT_reset.time := 10
!insert (smThermostat, trT_reset) into StateMachineContainsTransitions
!insert (trT_reset, evT_reset) into TransitionContainsEvents
!insert (stT_error, trT_reset) into StateTransition
!insert (trT_reset, stT_off) into TransitionState

!new Transition('trT_keepAlive')
!trT_keepAlive.name := 'keepAlive'
!new TimeEvent('evT_keepAlive')
!evT_keepAlive.time := 60
!insert (smThermostat, trT_keepAlive) into StateMachineContainsTransitions
!insert (trT_keepAlive, evT_keepAlive) into TransitionContainsEvents
!insert (stT_idle, trT_keepAlive) into StateTransition
!insert (trT_keepAlive, stT_idle) into TransitionState


!new StateMachine('smWasher')
!smWasher.name := 'washingProgram'

!new State('stW_idle')
!stW_idle.name := 'idle'
!new State('stW_filling')
!stW_filling.name := 'filling'
!new State('stW_washing')
!stW_washing.name := 'washing'
!new State('stW_draining')
!stW_draining.name := 'draining'
!new State('stW_spinning')
!stW_spinning.name := 'spinning'
!new State('stW_paused')
!stW_paused.name := 'paused'
!new State('stW_done')
!stW_done.name := 'done'

!insert (smWasher, stW_idle) into StateMachineContainsStates
!insert (smWasher, stW_filling) into StateMachineContainsStates
!insert (smWasher, stW_washing) into StateMachineContainsStates
!insert (smWasher, stW_draining) into StateMachineContainsStates
!insert (smWasher, stW_spinning) into StateMachineContainsStates
!insert (smWasher, stW_paused) into StateMachineContainsStates
!insert (smWasher, stW_done) into StateMachineContainsStates

!insert (smWasher, stW_idle) into StateMachineStartsStates

!new Transition('trW_startFill')
!trW_startFill.name := 'startFill'
!new TimeEvent('evW_startFill')
!evW_startFill.time := 1
!insert (smWasher, trW_startFill) into StateMachineContainsTransitions
!insert (trW_startFill, evW_startFill) into TransitionContainsEvents
!insert (stW_idle, trW_startFill) into StateTransition
!insert (trW_startFill, stW_filling) into TransitionState

!new Transition('trW_fillComplete')
!trW_fillComplete.name := 'fillComplete'
!new TimeEvent('evW_fillComplete')
!evW_fillComplete.time := 180
!insert (smWasher, trW_fillComplete) into StateMachineContainsTransitions
!insert (trW_fillComplete, evW_fillComplete) into TransitionContainsEvents
!insert (stW_filling, trW_fillComplete) into StateTransition
!insert (trW_fillComplete, stW_washing) into TransitionState

!new Transition('trW_washComplete')
!trW_washComplete.name := 'washComplete'
!new TimeEvent('evW_washComplete')
!evW_washComplete.time := 900
!insert (smWasher, trW_washComplete) into StateMachineContainsTransitions
!insert (trW_washComplete, evW_washComplete) into TransitionContainsEvents
!insert (stW_washing, trW_washComplete) into StateTransition
!insert (trW_washComplete, stW_draining) into TransitionState

!new Transition('trW_drainComplete')
!trW_drainComplete.name := 'drainComplete'
!new TimeEvent('evW_drainComplete')
!evW_drainComplete.time := 120
!insert (smWasher, trW_drainComplete) into StateMachineContainsTransitions
!insert (trW_drainComplete, evW_drainComplete) into TransitionContainsEvents
!insert (stW_draining, trW_drainComplete) into StateTransition
!insert (trW_drainComplete, stW_spinning) into TransitionState

!new Transition('trW_spinComplete')
!trW_spinComplete.name := 'spinComplete'
!new TimeEvent('evW_spinComplete')
!evW_spinComplete.time := 300
!insert (smWasher, trW_spinComplete) into StateMachineContainsTransitions
!insert (trW_spinComplete, evW_spinComplete) into TransitionContainsEvents
!insert (stW_spinning, trW_spinComplete) into StateTransition
!insert (trW_spinComplete, stW_done) into TransitionState

!new Transition('trW_pauseFromFilling')
!trW_pauseFromFilling.name := 'pause'
!new TimeEvent('evW_pauseFromFilling')
!evW_pauseFromFilling.time := 1
!insert (smWasher, trW_pauseFromFilling) into StateMachineContainsTransitions
!insert (trW_pauseFromFilling, evW_pauseFromFilling) into TransitionContainsEvents
!insert (stW_filling, trW_pauseFromFilling) into StateTransition
!insert (trW_pauseFromFilling, stW_paused) into TransitionState

!new Transition('trW_pauseFromWashing')
!trW_pauseFromWashing.name := 'pause'
!new TimeEvent('evW_pauseFromWashing')
!evW_pauseFromWashing.time := 1
!insert (smWasher, trW_pauseFromWashing) into StateMachineContainsTransitions
!insert (trW_pauseFromWashing, evW_pauseFromWashing) into TransitionContainsEvents
!insert (stW_washing, trW_pauseFromWashing) into StateTransition
!insert (trW_pauseFromWashing, stW_paused) into TransitionState

!new Transition('trW_resumeToWashing')
!trW_resumeToWashing.name := 'resume'
!new TimeEvent('evW_resumeToWashing')
!evW_resumeToWashing.time := 1
!insert (smWasher, trW_resumeToWashing) into StateMachineContainsTransitions
!insert (trW_resumeToWashing, evW_resumeToWashing) into TransitionContainsEvents
!insert (stW_paused, trW_resumeToWashing) into StateTransition
!insert (trW_resumeToWashing, stW_washing) into TransitionState

!new Transition('trW_cancelToIdle')
!trW_cancelToIdle.name := 'cancel'
!new TimeEvent('evW_cancelToIdle')
!evW_cancelToIdle.time := 2
!insert (smWasher, trW_cancelToIdle) into StateMachineContainsTransitions
!insert (trW_cancelToIdle, evW_cancelToIdle) into TransitionContainsEvents
!insert (stW_paused, trW_cancelToIdle) into StateTransition
!insert (trW_cancelToIdle, stW_idle) into TransitionState

!new Transition('trW_autoSleep')
!trW_autoSleep.name := 'autoSleep'
!new TimeEvent('evW_autoSleep')
!evW_autoSleep.time := 600
!insert (smWasher, trW_autoSleep) into StateMachineContainsTransitions
!insert (trW_autoSleep, evW_autoSleep) into TransitionContainsEvents
!insert (stW_done, trW_autoSleep) into StateTransition
!insert (trW_autoSleep, stW_idle) into TransitionState
```
## Generation 6 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 194 | 0.00% |
| Multiplicities Errors | 0 | 90 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

# Generation 7
```
!new StateMachine('smClinic')
!smClinic.name := 'clinicAppointmentFlow'

!new State('stRequested')
!stRequested.name := 'requested'
!new State('stScheduled')
!stScheduled.name := 'scheduled'
!new State('stCheckedIn')
!stCheckedIn.name := 'checkedIn'
!new State('stInConsult')
!stInConsult.name := 'inConsultation'
!new State('stCompleted')
!stCompleted.name := 'completed'
!new State('stNoShow')
!stNoShow.name := 'noShow'
!new State('stCancelled')
!stCancelled.name := 'cancelled'

!insert (smClinic, stRequested) into StateMachineContainsStates
!insert (smClinic, stScheduled) into StateMachineContainsStates
!insert (smClinic, stCheckedIn) into StateMachineContainsStates
!insert (smClinic, stInConsult) into StateMachineContainsStates
!insert (smClinic, stCompleted) into StateMachineContainsStates
!insert (smClinic, stNoShow) into StateMachineContainsStates
!insert (smClinic, stCancelled) into StateMachineContainsStates

!insert (smClinic, stRequested) into StateMachineStartsStates


!new Transition('trReqToSched')
!trReqToSched.name := 'requestAccepted'
!new TimeEvent('evReqToSched')
!evReqToSched.time := 10
!insert (smClinic, trReqToSched) into StateMachineContainsTransitions
!insert (trReqToSched, evReqToSched) into TransitionContainsEvents
!insert (stRequested, trReqToSched) into StateTransition
!insert (trReqToSched, stScheduled) into TransitionState

!new Transition('trSchedToCheckin')
!trSchedToCheckin.name := 'patientArrives'
!new TimeEvent('evSchedToCheckin')
!evSchedToCheckin.time := 1440
!insert (smClinic, trSchedToCheckin) into StateMachineContainsTransitions
!insert (trSchedToCheckin, evSchedToCheckin) into TransitionContainsEvents
!insert (stScheduled, trSchedToCheckin) into StateTransition
!insert (trSchedToCheckin, stCheckedIn) into TransitionState

!new Transition('trCheckinToConsult')
!trCheckinToConsult.name := 'callIn'
!new TimeEvent('evCheckinToConsult')
!evCheckinToConsult.time := 15
!insert (smClinic, trCheckinToConsult) into StateMachineContainsTransitions
!insert (trCheckinToConsult, evCheckinToConsult) into TransitionContainsEvents
!insert (stCheckedIn, trCheckinToConsult) into StateTransition
!insert (trCheckinToConsult, stInConsult) into TransitionState

!new Transition('trConsultToComplete')
!trConsultToComplete.name := 'finishConsultation'
!new TimeEvent('evConsultToComplete')
!evConsultToComplete.time := 30
!insert (smClinic, trConsultToComplete) into StateMachineContainsTransitions
!insert (trConsultToComplete, evConsultToComplete) into TransitionContainsEvents
!insert (stInConsult, trConsultToComplete) into StateTransition
!insert (trConsultToComplete, stCompleted) into TransitionState

!new Transition('trSchedToCancelled')
!trSchedToCancelled.name := 'cancelAppointment'
!new TimeEvent('evSchedToCancelled')
!evSchedToCancelled.time := 60
!insert (smClinic, trSchedToCancelled) into StateMachineContainsTransitions
!insert (trSchedToCancelled, evSchedToCancelled) into TransitionContainsEvents
!insert (stScheduled, trSchedToCancelled) into StateTransition
!insert (trSchedToCancelled, stCancelled) into TransitionState

!new Transition('trSchedToNoShow')
!trSchedToNoShow.name := 'markNoShow'
!new TimeEvent('evSchedToNoShow')
!evSchedToNoShow.time := 30
!insert (smClinic, trSchedToNoShow) into StateMachineContainsTransitions
!insert (trSchedToNoShow, evSchedToNoShow) into TransitionContainsEvents
!insert (stScheduled, trSchedToNoShow) into StateTransition
!insert (trSchedToNoShow, stNoShow) into TransitionState

!new Transition('trCancelledToRequested')
!trCancelledToRequested.name := 'rebookAfterCancel'
!new TimeEvent('evCancelledToRequested')
!evCancelledToRequested.time := 5
!insert (smClinic, trCancelledToRequested) into StateMachineContainsTransitions
!insert (trCancelledToRequested, evCancelledToRequested) into TransitionContainsEvents
!insert (stCancelled, trCancelledToRequested) into StateTransition
!insert (trCancelledToRequested, stRequested) into TransitionState

!new Transition('trNoShowToRequested')
!trNoShowToRequested.name := 'rebookAfterNoShow'
!new TimeEvent('evNoShowToRequested')
!evNoShowToRequested.time := 10080
!insert (smClinic, trNoShowToRequested) into StateMachineContainsTransitions
!insert (trNoShowToRequested, evNoShowToRequested) into TransitionContainsEvents
!insert (stNoShow, trNoShowToRequested) into StateTransition
!insert (trNoShowToRequested, stRequested) into TransitionState



!new StateMachine('smCi')
!smCi.name := 'ciPipeline'

!new State('stQueued')
!stQueued.name := 'queued'
!new State('stRunning')
!stRunning.name := 'running'
!new State('stTesting')
!stTesting.name := 'testing'
!new State('stDeploying')
!stDeploying.name := 'deploying'
!new State('stSucceeded')
!stSucceeded.name := 'succeeded'
!new State('stFailed')
!stFailed.name := 'failed'

!insert (smCi, stQueued) into StateMachineContainsStates
!insert (smCi, stRunning) into StateMachineContainsStates
!insert (smCi, stTesting) into StateMachineContainsStates
!insert (smCi, stDeploying) into StateMachineContainsStates
!insert (smCi, stSucceeded) into StateMachineContainsStates
!insert (smCi, stFailed) into StateMachineContainsStates

!insert (smCi, stQueued) into StateMachineStartsStates


!new Transition('trQueueToRun')
!trQueueToRun.name := 'startRunner'
!new TimeEvent('evQueueToRun')
!evQueueToRun.time := 1
!insert (smCi, trQueueToRun) into StateMachineContainsTransitions
!insert (trQueueToRun, evQueueToRun) into TransitionContainsEvents
!insert (stQueued, trQueueToRun) into StateTransition
!insert (trQueueToRun, stRunning) into TransitionState

!new Transition('trRunToTest')
!trRunToTest.name := 'buildComplete'
!new TimeEvent('evRunToTest')
!evRunToTest.time := 8
!insert (smCi, trRunToTest) into StateMachineContainsTransitions
!insert (trRunToTest, evRunToTest) into TransitionContainsEvents
!insert (stRunning, trRunToTest) into StateTransition
!insert (trRunToTest, stTesting) into TransitionState

!new Transition('trTestToDeploy')
!trTestToDeploy.name := 'testsPassed'
!new TimeEvent('evTestToDeploy')
!evTestToDeploy.time := 6
!insert (smCi, trTestToDeploy) into StateMachineContainsTransitions
!insert (trTestToDeploy, evTestToDeploy) into TransitionContainsEvents
!insert (stTesting, trTestToDeploy) into StateTransition
!insert (trTestToDeploy, stDeploying) into TransitionState

!new Transition('trDeployToSuccess')
!trDeployToSuccess.name := 'deployOk'
!new TimeEvent('evDeployToSuccess')
!evDeployToSuccess.time := 3
!insert (smCi, trDeployToSuccess) into StateMachineContainsTransitions
!insert (trDeployToSuccess, evDeployToSuccess) into TransitionContainsEvents
!insert (stDeploying, trDeployToSuccess) into StateTransition
!insert (trDeployToSuccess, stSucceeded) into TransitionState

!new Transition('trTestToFail')
!trTestToFail.name := 'testsFailed'
!new TimeEvent('evTestToFail')
!evTestToFail.time := 1
!insert (smCi, trTestToFail) into StateMachineContainsTransitions
!insert (trTestToFail, evTestToFail) into TransitionContainsEvents
!insert (stTesting, trTestToFail) into StateTransition
!insert (trTestToFail, stFailed) into TransitionState

!new Transition('trRunToFail')
!trRunToFail.name := 'buildCrashed'
!new TimeEvent('evRunToFail')
!evRunToFail.time := 1
!insert (smCi, trRunToFail) into StateMachineContainsTransitions
!insert (trRunToFail, evRunToFail) into TransitionContainsEvents
!insert (stRunning, trRunToFail) into StateTransition
!insert (trRunToFail, stFailed) into TransitionState

!new Transition('trFailToQueued')
!trFailToQueued.name := 'retry'
!new TimeEvent('evFailToQueued')
!evFailToQueued.time := 5
!insert (smCi, trFailToQueued) into StateMachineContainsTransitions
!insert (trFailToQueued, evFailToQueued) into TransitionContainsEvents
!insert (stFailed, trFailToQueued) into StateTransition
!insert (trFailToQueued, stQueued) into TransitionState

!new Transition('trSuccessToQueued')
!trSuccessToQueued.name := 'nightlyRebuild'
!new TimeEvent('evSuccessToQueued')
!evSuccessToQueued.time := 60
!insert (smCi, trSuccessToQueued) into StateMachineContainsTransitions
!insert (trSuccessToQueued, evSuccessToQueued) into TransitionContainsEvents
!insert (stSucceeded, trSuccessToQueued) into StateTransition
!insert (trSuccessToQueued, stQueued) into TransitionState
```
## Generation 7 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 173 | 0.00% |
| Multiplicities Errors | 0 | 79 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

# Generation 8
```
!new StateMachine('smVending')
!smVending.name := 'vendingMachineController'

!new StateMachine('smSelHelper')
!smSelHelper.name := 'selectingStartHelper'
!new StateMachine('smPayHelper')
!smPayHelper.name := 'awaitingPaymentStartHelper'
!new StateMachine('smDispHelper')
!smDispHelper.name := 'dispensingStartHelper'
!new StateMachine('smOosHelper')
!smOosHelper.name := 'outOfServiceStartHelper'
!new StateMachine('smRefundHelper')
!smRefundHelper.name := 'refundingStartHelper'


!new State('stV_idle')
!stV_idle.name := 'idle'
!new State('stV_selecting')
!stV_selecting.name := 'selecting'
!new State('stV_awaitPay')
!stV_awaitPay.name := 'awaitingPayment'
!new State('stV_dispensing')
!stV_dispensing.name := 'dispensing'
!new State('stV_outOfService')
!stV_outOfService.name := 'outOfService'
!new State('stV_refunding')
!stV_refunding.name := 'refunding'

!insert (smVending, stV_idle) into StateMachineContainsStates
!insert (smVending, stV_selecting) into StateMachineContainsStates
!insert (smVending, stV_awaitPay) into StateMachineContainsStates
!insert (smVending, stV_dispensing) into StateMachineContainsStates
!insert (smVending, stV_outOfService) into StateMachineContainsStates
!insert (smVending, stV_refunding) into StateMachineContainsStates

!insert (smVending, stV_idle) into StateMachineStartsStates
!insert (smSelHelper, stV_selecting) into StateMachineStartsStates
!insert (smPayHelper, stV_awaitPay) into StateMachineStartsStates
!insert (smDispHelper, stV_dispensing) into StateMachineStartsStates
!insert (smOosHelper, stV_outOfService) into StateMachineStartsStates
!insert (smRefundHelper, stV_refunding) into StateMachineStartsStates


!new Transition('trV_beginSelection')
!trV_beginSelection.name := 'beginSelection'
!new TimeEvent('evV_beginSelection')
!evV_beginSelection.time := 1
!insert (smVending, trV_beginSelection) into StateMachineContainsTransitions
!insert (trV_beginSelection, evV_beginSelection) into TransitionContainsEvents
!insert (stV_idle, trV_beginSelection) into StateTransition
!insert (trV_beginSelection, stV_selecting) into TransitionState

!new Transition('trV_selectionTimeout')
!trV_selectionTimeout.name := 'selectionTimeout'
!new TimeEvent('evV_selectionTimeout')
!evV_selectionTimeout.time := 20
!insert (smVending, trV_selectionTimeout) into StateMachineContainsTransitions
!insert (trV_selectionTimeout, evV_selectionTimeout) into TransitionContainsEvents
!insert (stV_selecting, trV_selectionTimeout) into StateTransition
!insert (trV_selectionTimeout, stV_idle) into TransitionState

!new Transition('trV_confirmSelection')
!trV_confirmSelection.name := 'confirmSelection'
!new TimeEvent('evV_confirmSelection')
!evV_confirmSelection.time := 2
!insert (smVending, trV_confirmSelection) into StateMachineContainsTransitions
!insert (trV_confirmSelection, evV_confirmSelection) into TransitionContainsEvents
!insert (stV_selecting, trV_confirmSelection) into StateTransition
!insert (trV_confirmSelection, stV_awaitPay) into TransitionState

!new Transition('trV_paymentAccepted')
!trV_paymentAccepted.name := 'paymentAccepted'
!new TimeEvent('evV_paymentAccepted')
!evV_paymentAccepted.time := 3
!insert (smVending, trV_paymentAccepted) into StateMachineContainsTransitions
!insert (trV_paymentAccepted, evV_paymentAccepted) into TransitionContainsEvents
!insert (stV_awaitPay, trV_paymentAccepted) into StateTransition
!insert (trV_paymentAccepted, stV_dispensing) into TransitionState

!new Transition('trV_paymentTimeoutRefund')
!trV_paymentTimeoutRefund.name := 'paymentTimeoutRefund'
!new TimeEvent('evV_paymentTimeoutRefund')
!evV_paymentTimeoutRefund.time := 45
!insert (smVending, trV_paymentTimeoutRefund) into StateMachineContainsTransitions
!insert (trV_paymentTimeoutRefund, evV_paymentTimeoutRefund) into TransitionContainsEvents
!insert (stV_awaitPay, trV_paymentTimeoutRefund) into StateTransition
!insert (trV_paymentTimeoutRefund, stV_refunding) into TransitionState

!new Transition('trV_refundComplete')
!trV_refundComplete.name := 'refundComplete'
!new TimeEvent('evV_refundComplete')
!evV_refundComplete.time := 6
!insert (smVending, trV_refundComplete) into StateMachineContainsTransitions
!insert (trV_refundComplete, evV_refundComplete) into TransitionContainsEvents
!insert (stV_refunding, trV_refundComplete) into StateTransition
!insert (trV_refundComplete, stV_idle) into TransitionState

!new Transition('trV_dispenseComplete')
!trV_dispenseComplete.name := 'dispenseComplete'
!new TimeEvent('evV_dispenseComplete')
!evV_dispenseComplete.time := 8
!insert (smVending, trV_dispenseComplete) into StateMachineContainsTransitions
!insert (trV_dispenseComplete, evV_dispenseComplete) into TransitionContainsEvents
!insert (stV_dispensing, trV_dispenseComplete) into StateTransition
!insert (trV_dispenseComplete, stV_idle) into TransitionState

!new Transition('trV_faultToOos')
!trV_faultToOos.name := 'hardwareFault'
!new TimeEvent('evV_faultToOos')
!evV_faultToOos.time := 1
!insert (smVending, trV_faultToOos) into StateMachineContainsTransitions
!insert (trV_faultToOos, evV_faultToOos) into TransitionContainsEvents
!insert (stV_idle, trV_faultToOos) into StateTransition
!insert (trV_faultToOos, stV_outOfService) into TransitionState

!new Transition('trV_faultSelectingToOos')
!trV_faultSelectingToOos.name := 'faultDuringSelection'
!new TimeEvent('evV_faultSelectingToOos')
!evV_faultSelectingToOos.time := 1
!insert (smVending, trV_faultSelectingToOos) into StateMachineContainsTransitions
!insert (trV_faultSelectingToOos, evV_faultSelectingToOos) into TransitionContainsEvents
!insert (stV_selecting, trV_faultSelectingToOos) into StateTransition
!insert (trV_faultSelectingToOos, stV_outOfService) into TransitionState

!new Transition('trV_serviceReset')
!trV_serviceReset.name := 'serviceReset'
!new TimeEvent('evV_serviceReset')
!evV_serviceReset.time := 120
!insert (smVending, trV_serviceReset) into StateMachineContainsTransitions
!insert (trV_serviceReset, evV_serviceReset) into TransitionContainsEvents
!insert (stV_outOfService, trV_serviceReset) into StateTransition
!insert (trV_serviceReset, stV_idle) into TransitionState



!new StateMachine('smAqs')
!smAqs.name := 'airQualitySensor'

!new StateMachine('smAqsMeasureHelper')
!smAqsMeasureHelper.name := 'measuringStartHelper'
!new StateMachine('smAqsSleepHelper')
!smAqsSleepHelper.name := 'sleepingStartHelper'

!new State('stA_booting')
!stA_booting.name := 'booting'
!new State('stA_measuring')
!stA_measuring.name := 'measuring'
!new State('stA_sleeping')
!stA_sleeping.name := 'sleeping'

!insert (smAqs, stA_booting) into StateMachineContainsStates
!insert (smAqs, stA_measuring) into StateMachineContainsStates
!insert (smAqs, stA_sleeping) into StateMachineContainsStates

!insert (smAqs, stA_booting) into StateMachineStartsStates
!insert (smAqsMeasureHelper, stA_measuring) into StateMachineStartsStates
!insert (smAqsSleepHelper, stA_sleeping) into StateMachineStartsStates


!new Transition('trA_bootComplete')
!trA_bootComplete.name := 'bootComplete'
!new TimeEvent('evA_bootComplete')
!evA_bootComplete.time := 12
!insert (smAqs, trA_bootComplete) into StateMachineContainsTransitions
!insert (trA_bootComplete, evA_bootComplete) into TransitionContainsEvents
!insert (stA_booting, trA_bootComplete) into StateTransition
!insert (trA_bootComplete, stA_measuring) into TransitionState

!new Transition('trA_sampleCycle')
!trA_sampleCycle.name := 'sampleCycle'
!new TimeEvent('evA_sampleCycle')
!evA_sampleCycle.time := 60
!insert (smAqs, trA_sampleCycle) into StateMachineContainsTransitions
!insert (trA_sampleCycle, evA_sampleCycle) into TransitionContainsEvents
!insert (stA_measuring, trA_sampleCycle) into StateTransition
!insert (trA_sampleCycle, stA_measuring) into TransitionState

!new Transition('trA_sleepAfterReport')
!trA_sleepAfterReport.name := 'sleepAfterReport'
!new TimeEvent('evA_sleepAfterReport')
!evA_sleepAfterReport.time := 5
!insert (smAqs, trA_sleepAfterReport) into StateMachineContainsTransitions
!insert (trA_sleepAfterReport, evA_sleepAfterReport) into TransitionContainsEvents
!insert (stA_measuring, trA_sleepAfterReport) into StateTransition
!insert (trA_sleepAfterReport, stA_sleeping) into TransitionState

!new Transition('trA_wakeUp')
!trA_wakeUp.name := 'wakeUp'
!new TimeEvent('evA_wakeUp')
!evA_wakeUp.time := 900
!insert (smAqs, trA_wakeUp) into StateMachineContainsTransitions
!insert (trA_wakeUp, evA_wakeUp) into TransitionContainsEvents
!insert (stA_sleeping, trA_wakeUp) into StateTransition
!insert (trA_wakeUp, stA_measuring) into TransitionState
```
## Generation 8 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 166 | 0.00% |
| Multiplicities Errors | 0 | 74 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

# Generation 9
```
!new StateMachine('smSpaceProbe')
!smSpaceProbe.name := 'spaceProbeOperations'

!new State('spDormant')
!spDormant.name := 'dormant'
!new State('spBooting')
!spBooting.name := 'booting'
!new State('spCalibrating')
!spCalibrating.name := 'calibrating'
!new State('spCollecting')
!spCollecting.name := 'collectingData'
!new State('spTransmitting')
!spTransmitting.name := 'transmitting'
!new State('spSafeMode')
!spSafeMode.name := 'safeMode'

!insert (smSpaceProbe, spDormant) into StateMachineContainsStates
!insert (smSpaceProbe, spBooting) into StateMachineContainsStates
!insert (smSpaceProbe, spCalibrating) into StateMachineContainsStates
!insert (smSpaceProbe, spCollecting) into StateMachineContainsStates
!insert (smSpaceProbe, spTransmitting) into StateMachineContainsStates
!insert (smSpaceProbe, spSafeMode) into StateMachineContainsStates

!insert (smSpaceProbe, spDormant) into StateMachineStartsStates


!new Transition('trWake')
!trWake.name := 'wakeUp'
!new TimeEvent('evWake')
!evWake.time := 1
!insert (smSpaceProbe, trWake) into StateMachineContainsTransitions
!insert (trWake, evWake) into TransitionContainsEvents
!insert (spDormant, trWake) into StateTransition
!insert (trWake, spBooting) into TransitionState

!new Transition('trBootOk')
!trBootOk.name := 'bootOk'
!new TimeEvent('evBootOk')
!evBootOk.time := 20
!insert (smSpaceProbe, trBootOk) into StateMachineContainsTransitions
!insert (trBootOk, evBootOk) into TransitionContainsEvents
!insert (spBooting, trBootOk) into StateTransition
!insert (trBootOk, spCalibrating) into TransitionState

!new Transition('trCalibrateOk')
!trCalibrateOk.name := 'calibrateOk'
!new TimeEvent('evCalibrateOk')
!evCalibrateOk.time := 45
!insert (smSpaceProbe, trCalibrateOk) into StateMachineContainsTransitions
!insert (trCalibrateOk, evCalibrateOk) into TransitionContainsEvents
!insert (spCalibrating, trCalibrateOk) into StateTransition
!insert (trCalibrateOk, spCollecting) into TransitionState

!new Transition('trSampleTick')
!trSampleTick.name := 'sampleTick'
!new TimeEvent('evSampleTick')
!evSampleTick.time := 60
!insert (smSpaceProbe, trSampleTick) into StateMachineContainsTransitions
!insert (trSampleTick, evSampleTick) into TransitionContainsEvents
!insert (spCollecting, trSampleTick) into StateTransition
!insert (trSampleTick, spCollecting) into TransitionState

!new Transition('trDataFull')
!trDataFull.name := 'dataBufferFull'
!new TimeEvent('evDataFull')
!evDataFull.time := 600
!insert (smSpaceProbe, trDataFull) into StateMachineContainsTransitions
!insert (trDataFull, evDataFull) into TransitionContainsEvents
!insert (spCollecting, trDataFull) into StateTransition
!insert (trDataFull, spTransmitting) into TransitionState

!new Transition('trTxDone')
!trTxDone.name := 'txComplete'
!new TimeEvent('evTxDone')
!evTxDone.time := 180
!insert (smSpaceProbe, trTxDone) into StateMachineContainsTransitions
!insert (trTxDone, evTxDone) into TransitionContainsEvents
!insert (spTransmitting, trTxDone) into StateTransition
!insert (trTxDone, spCollecting) into TransitionState

!new Transition('trAnomalyCollect')
!trAnomalyCollect.name := 'anomalyDetected'
!new TimeEvent('evAnomalyCollect')
!evAnomalyCollect.time := 1
!insert (smSpaceProbe, trAnomalyCollect) into StateMachineContainsTransitions
!insert (trAnomalyCollect, evAnomalyCollect) into TransitionContainsEvents
!insert (spCollecting, trAnomalyCollect) into StateTransition
!insert (trAnomalyCollect, spSafeMode) into TransitionState

!new Transition('trAnomalyTx')
!trAnomalyTx.name := 'anomalyDuringTx'
!new TimeEvent('evAnomalyTx')
!evAnomalyTx.time := 1
!insert (smSpaceProbe, trAnomalyTx) into StateMachineContainsTransitions
!insert (trAnomalyTx, evAnomalyTx) into TransitionContainsEvents
!insert (spTransmitting, trAnomalyTx) into StateTransition
!insert (trAnomalyTx, spSafeMode) into TransitionState

!new Transition('trRecover')
!trRecover.name := 'recoverToDormant'
!new TimeEvent('evRecover')
!evRecover.time := 300
!insert (smSpaceProbe, trRecover) into StateMachineContainsTransitions
!insert (trRecover, evRecover) into TransitionContainsEvents
!insert (spSafeMode, trRecover) into StateTransition
!insert (trRecover, spDormant) into TransitionState



!new StateMachine('smBattery')
!smBattery.name := 'batteryProtection'

!new State('btNormal')
!btNormal.name := 'normal'
!new State('btLow')
!btLow.name := 'low'
!new State('btCritical')
!btCritical.name := 'critical'
!new State('btCharging')
!btCharging.name := 'charging'
!new State('btShutDown')
!btShutDown.name := 'shutdown'

!insert (smBattery, btNormal) into StateMachineContainsStates
!insert (smBattery, btLow) into StateMachineContainsStates
!insert (smBattery, btCritical) into StateMachineContainsStates
!insert (smBattery, btCharging) into StateMachineContainsStates
!insert (smBattery, btShutDown) into StateMachineContainsStates

!insert (smBattery, btNormal) into StateMachineStartsStates


!new Transition('trDropToLow')
!trDropToLow.name := 'voltageDrops'
!new TimeEvent('evDropToLow')
!evDropToLow.time := 120
!insert (smBattery, trDropToLow) into StateMachineContainsTransitions
!insert (trDropToLow, evDropToLow) into TransitionContainsEvents
!insert (btNormal, trDropToLow) into StateTransition
!insert (trDropToLow, btLow) into TransitionState

!new Transition('trDropToCritical')
!trDropToCritical.name := 'voltageCritical'
!new TimeEvent('evDropToCritical')
!evDropToCritical.time := 60
!insert (smBattery, trDropToCritical) into StateMachineContainsTransitions
!insert (trDropToCritical, evDropToCritical) into TransitionContainsEvents
!insert (btLow, trDropToCritical) into StateTransition
!insert (trDropToCritical, btCritical) into TransitionState

!new Transition('trPlugInCharge')
!trPlugInCharge.name := 'plugIn'
!new TimeEvent('evPlugInCharge')
!evPlugInCharge.time := 1
!insert (smBattery, trPlugInCharge) into StateMachineContainsTransitions
!insert (trPlugInCharge, evPlugInCharge) into TransitionContainsEvents
!insert (btLow, trPlugInCharge) into StateTransition
!insert (trPlugInCharge, btCharging) into TransitionState

!new Transition('trChargeFromCritical')
!trChargeFromCritical.name := 'plugInEmergency'
!new TimeEvent('evChargeFromCritical')
!evChargeFromCritical.time := 1
!insert (smBattery, trChargeFromCritical) into StateMachineContainsTransitions
!insert (trChargeFromCritical, evChargeFromCritical) into TransitionContainsEvents
!insert (btCritical, trChargeFromCritical) into StateTransition
!insert (trChargeFromCritical, btCharging) into TransitionState

!new Transition('trChargeComplete')
!trChargeComplete.name := 'chargeComplete'
!new TimeEvent('evChargeComplete2')
!evChargeComplete2.time := 5400
!insert (smBattery, trChargeComplete) into StateMachineContainsTransitions
!insert (trChargeComplete, evChargeComplete2) into TransitionContainsEvents
!insert (btCharging, trChargeComplete) into StateTransition
!insert (trChargeComplete, btNormal) into TransitionState

!new Transition('trCriticalShutdown')
!trCriticalShutdown.name := 'autoShutdown'
!new TimeEvent('evCriticalShutdown')
!evCriticalShutdown.time := 10
!insert (smBattery, trCriticalShutdown) into StateMachineContainsTransitions
!insert (trCriticalShutdown, evCriticalShutdown) into TransitionContainsEvents
!insert (btCritical, trCriticalShutdown) into StateTransition
!insert (trCriticalShutdown, btShutDown) into TransitionState

!new Transition('trShutdownRecovery')
!trShutdownRecovery.name := 'restartAfterCharge'
!new TimeEvent('evShutdownRecovery')
!evShutdownRecovery.time := 30
!insert (smBattery, trShutdownRecovery) into StateMachineContainsTransitions
!insert (trShutdownRecovery, evShutdownRecovery) into TransitionContainsEvents
!insert (btShutDown, trShutdownRecovery) into StateTransition
!insert (trShutdownRecovery, btCharging) into TransitionState
```
## Generation 9 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 167 | 0.00% |
| Multiplicities Errors | 0 | 77 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

# Generation 10
```
!new StateMachine('smRail')
!smRail.name := 'railCrossingController'

!new State('rcIdle')
!rcIdle.name := 'idle'
!new State('rcWarning')
!rcWarning.name := 'warning'
!new State('rcLowering')
!rcLowering.name := 'barrierLowering'
!new State('rcDown')
!rcDown.name := 'barrierDown'
!new State('rcRaising')
!rcRaising.name := 'barrierRaising'
!new State('rcFault')
!rcFault.name := 'fault'

!insert (smRail, rcIdle) into StateMachineContainsStates
!insert (smRail, rcWarning) into StateMachineContainsStates
!insert (smRail, rcLowering) into StateMachineContainsStates
!insert (smRail, rcDown) into StateMachineContainsStates
!insert (smRail, rcRaising) into StateMachineContainsStates
!insert (smRail, rcFault) into StateMachineContainsStates

!insert (smRail, rcIdle) into StateMachineStartsStates


!new Transition('trTrainApproach')
!trTrainApproach.name := 'trainApproach'
!new TimeEvent('evTrainApproach')
!evTrainApproach.time := 1
!insert (smRail, trTrainApproach) into StateMachineContainsTransitions
!insert (trTrainApproach, evTrainApproach) into TransitionContainsEvents
!insert (rcIdle, trTrainApproach) into StateTransition
!insert (trTrainApproach, rcWarning) into TransitionState

!new Transition('trStartLowering')
!trStartLowering.name := 'startLowering'
!new TimeEvent('evStartLowering')
!evStartLowering.time := 3
!insert (smRail, trStartLowering) into StateMachineContainsTransitions
!insert (trStartLowering, evStartLowering) into TransitionContainsEvents
!insert (rcWarning, trStartLowering) into StateTransition
!insert (trStartLowering, rcLowering) into TransitionState

!new Transition('trLowered')
!trLowered.name := 'barrierLowered'
!new TimeEvent('evLowered')
!evLowered.time := 8
!insert (smRail, trLowered) into StateMachineContainsTransitions
!insert (trLowered, evLowered) into TransitionContainsEvents
!insert (rcLowering, trLowered) into StateTransition
!insert (trLowered, rcDown) into TransitionState

!new Transition('trTrainClear')
!trTrainClear.name := 'trainClear'
!new TimeEvent('evTrainClear')
!evTrainClear.time := 45
!insert (smRail, trTrainClear) into StateMachineContainsTransitions
!insert (trTrainClear, evTrainClear) into TransitionContainsEvents
!insert (rcDown, trTrainClear) into StateTransition
!insert (trTrainClear, rcRaising) into TransitionState

!new Transition('trRaised')
!trRaised.name := 'barrierRaised'
!new TimeEvent('evRaised')
!evRaised.time := 7
!insert (smRail, trRaised) into StateMachineContainsTransitions
!insert (trRaised, evRaised) into TransitionContainsEvents
!insert (rcRaising, trRaised) into StateTransition
!insert (trRaised, rcIdle) into TransitionState

!new Transition('trSelfTestTick')
!trSelfTestTick.name := 'selfTestTick'
!new TimeEvent('evSelfTestTick')
!evSelfTestTick.time := 300
!insert (smRail, trSelfTestTick) into StateMachineContainsTransitions
!insert (trSelfTestTick, evSelfTestTick) into TransitionContainsEvents
!insert (rcIdle, trSelfTestTick) into StateTransition
!insert (trSelfTestTick, rcIdle) into TransitionState

!new Transition('trFaultDetected')
!trFaultDetected.name := 'faultDetected'
!new TimeEvent('evFaultDetected')
!evFaultDetected.time := 1
!insert (smRail, trFaultDetected) into StateMachineContainsTransitions
!insert (trFaultDetected, evFaultDetected) into TransitionContainsEvents
!insert (rcWarning, trFaultDetected) into StateTransition
!insert (trFaultDetected, rcFault) into TransitionState

!new Transition('trFaultDuringLowering')
!trFaultDuringLowering.name := 'faultDuringLowering'
!new TimeEvent('evFaultDuringLowering')
!evFaultDuringLowering.time := 1
!insert (smRail, trFaultDuringLowering) into StateMachineContainsTransitions
!insert (trFaultDuringLowering, evFaultDuringLowering) into TransitionContainsEvents
!insert (rcLowering, trFaultDuringLowering) into StateTransition
!insert (trFaultDuringLowering, rcFault) into TransitionState

!new Transition('trResetAfterRepair')
!trResetAfterRepair.name := 'resetAfterRepair'
!new TimeEvent('evResetAfterRepair')
!evResetAfterRepair.time := 120
!insert (smRail, trResetAfterRepair) into StateMachineContainsTransitions
!insert (trResetAfterRepair, evResetAfterRepair) into TransitionContainsEvents
!insert (rcFault, trResetAfterRepair) into StateTransition
!insert (trResetAfterRepair, rcIdle) into TransitionState



!new StateMachine('smSync')
!smSync.name := 'recipeSyncService'

!new State('syStopped')
!syStopped.name := 'stopped'
!new State('syStarting')
!syStarting.name := 'starting'
!new State('sySyncing')
!sySyncing.name := 'syncing'
!new State('syOnline')
!syOnline.name := 'online'
!new State('syBackoff')
!syBackoff.name := 'backoff'
!new State('syDisabled')
!syDisabled.name := 'disabled'

!insert (smSync, syStopped) into StateMachineContainsStates
!insert (smSync, syStarting) into StateMachineContainsStates
!insert (smSync, sySyncing) into StateMachineContainsStates
!insert (smSync, syOnline) into StateMachineContainsStates
!insert (smSync, syBackoff) into StateMachineContainsStates
!insert (smSync, syDisabled) into StateMachineContainsStates

!insert (smSync, syStopped) into StateMachineStartsStates


!new Transition('trStartService')
!trStartService.name := 'startService'
!new TimeEvent('evStartService')
!evStartService.time := 1
!insert (smSync, trStartService) into StateMachineContainsTransitions
!insert (trStartService, evStartService) into TransitionContainsEvents
!insert (syStopped, trStartService) into StateTransition
!insert (trStartService, syStarting) into TransitionState

!new Transition('trInitComplete')
!trInitComplete.name := 'initComplete'
!new TimeEvent('evInitComplete')
!evInitComplete.time := 4
!insert (smSync, trInitComplete) into StateMachineContainsTransitions
!insert (trInitComplete, evInitComplete) into TransitionContainsEvents
!insert (syStarting, trInitComplete) into StateTransition
!insert (trInitComplete, syOnline) into TransitionState

!new Transition('trBeginSync')
!trBeginSync.name := 'beginSync'
!new TimeEvent('evBeginSync')
!evBeginSync.time := 10
!insert (smSync, trBeginSync) into StateMachineContainsTransitions
!insert (trBeginSync, evBeginSync) into TransitionContainsEvents
!insert (syOnline, trBeginSync) into StateTransition
!insert (trBeginSync, sySyncing) into TransitionState

!new Transition('trSyncOk')
!trSyncOk.name := 'syncOk'
!new TimeEvent('evSyncOk')
!evSyncOk.time := 12
!insert (smSync, trSyncOk) into StateMachineContainsTransitions
!insert (trSyncOk, evSyncOk) into TransitionContainsEvents
!insert (sySyncing, trSyncOk) into StateTransition
!insert (trSyncOk, syOnline) into TransitionState

!new Transition('trSyncFail')
!trSyncFail.name := 'syncFail'
!new TimeEvent('evSyncFail')
!evSyncFail.time := 15
!insert (smSync, trSyncFail) into StateMachineContainsTransitions
!insert (trSyncFail, evSyncFail) into TransitionContainsEvents
!insert (sySyncing, trSyncFail) into StateTransition
!insert (trSyncFail, syBackoff) into TransitionState

!new Transition('trRetryAfterBackoff')
!trRetryAfterBackoff.name := 'retryAfterBackoff'
!new TimeEvent('evRetryAfterBackoff')
!evRetryAfterBackoff.time := 60
!insert (smSync, trRetryAfterBackoff) into StateMachineContainsTransitions
!insert (trRetryAfterBackoff, evRetryAfterBackoff) into TransitionContainsEvents
!insert (syBackoff, trRetryAfterBackoff) into StateTransition
!insert (trRetryAfterBackoff, syOnline) into TransitionState

!new Transition('trDisableService')
!trDisableService.name := 'disableService'
!new TimeEvent('evDisableService')
!evDisableService.time := 2
!insert (smSync, trDisableService) into StateMachineContainsTransitions
!insert (trDisableService, evDisableService) into TransitionContainsEvents
!insert (syOnline, trDisableService) into StateTransition
!insert (trDisableService, syDisabled) into TransitionState

!new Transition('trEnableService')
!trEnableService.name := 'enableService'
!new TimeEvent('evEnableService')
!evEnableService.time := 2
!insert (smSync, trEnableService) into StateMachineContainsTransitions
!insert (trEnableService, evEnableService) into TransitionContainsEvents
!insert (syDisabled, trEnableService) into StateTransition
!insert (trEnableService, syStopped) into TransitionState

!new Transition('trAutoSyncTick')
!trAutoSyncTick.name := 'autoSyncTick'
!new TimeEvent('evAutoSyncTick')
!evAutoSyncTick.time := 1800
!insert (smSync, trAutoSyncTick) into StateMachineContainsTransitions
!insert (trAutoSyncTick, evAutoSyncTick) into TransitionContainsEvents
!insert (syOnline, trAutoSyncTick) into StateTransition
!insert (trAutoSyncTick, syOnline) into TransitionState
```
## Generation 10 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 186 | 0.00% |
| Multiplicities Errors | 0 | 86 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

# Generation 11
```
!new StateMachine('smOven')
!smOven.name := 'ovenController'

!new State('ovStandby')
!ovStandby.name := 'standby'
!new State('ovPreheating')
!ovPreheating.name := 'preheating'
!new State('ovBaking')
!ovBaking.name := 'baking'
!new State('ovBroiling')
!ovBroiling.name := 'broiling'
!new State('ovCooling')
!ovCooling.name := 'cooling'
!new State('ovAlarm')
!ovAlarm.name := 'alarm'

!insert (smOven, ovStandby) into StateMachineContainsStates
!insert (smOven, ovPreheating) into StateMachineContainsStates
!insert (smOven, ovBaking) into StateMachineContainsStates
!insert (smOven, ovBroiling) into StateMachineContainsStates
!insert (smOven, ovCooling) into StateMachineContainsStates
!insert (smOven, ovAlarm) into StateMachineContainsStates

!insert (smOven, ovStandby) into StateMachineStartsStates


!new Transition('trOvStartPreheat')
!trOvStartPreheat.name := 'startPreheat'
!new TimeEvent('evOvStartPreheat')
!evOvStartPreheat.time := 1
!insert (smOven, trOvStartPreheat) into StateMachineContainsTransitions
!insert (trOvStartPreheat, evOvStartPreheat) into TransitionContainsEvents
!insert (ovStandby, trOvStartPreheat) into StateTransition
!insert (trOvStartPreheat, ovPreheating) into TransitionState

!new Transition('trOvReachTemp')
!trOvReachTemp.name := 'reachTargetTemp'
!new TimeEvent('evOvReachTemp')
!evOvReachTemp.time := 600
!insert (smOven, trOvReachTemp) into StateMachineContainsTransitions
!insert (trOvReachTemp, evOvReachTemp) into TransitionContainsEvents
!insert (ovPreheating, trOvReachTemp) into StateTransition
!insert (trOvReachTemp, ovBaking) into TransitionState

!new Transition('trOvSwitchToBroil')
!trOvSwitchToBroil.name := 'switchToBroil'
!new TimeEvent('evOvSwitchToBroil')
!evOvSwitchToBroil.time := 2
!insert (smOven, trOvSwitchToBroil) into StateMachineContainsTransitions
!insert (trOvSwitchToBroil, evOvSwitchToBroil) into TransitionContainsEvents
!insert (ovBaking, trOvSwitchToBroil) into StateTransition
!insert (trOvSwitchToBroil, ovBroiling) into TransitionState

!new Transition('trOvSwitchToBake')
!trOvSwitchToBake.name := 'switchToBake'
!new TimeEvent('evOvSwitchToBake')
!evOvSwitchToBake.time := 2
!insert (smOven, trOvSwitchToBake) into StateMachineContainsTransitions
!insert (trOvSwitchToBake, evOvSwitchToBake) into TransitionContainsEvents
!insert (ovBroiling, trOvSwitchToBake) into StateTransition
!insert (trOvSwitchToBake, ovBaking) into TransitionState

!new Transition('trOvTimerExpired')
!trOvTimerExpired.name := 'timerExpired'
!new TimeEvent('evOvTimerExpired')
!evOvTimerExpired.time := 2700
!insert (smOven, trOvTimerExpired) into StateMachineContainsTransitions
!insert (trOvTimerExpired, evOvTimerExpired) into TransitionContainsEvents
!insert (ovBaking, trOvTimerExpired) into StateTransition
!insert (trOvTimerExpired, ovCooling) into TransitionState

!new Transition('trOvBroilTimeout')
!trOvBroilTimeout.name := 'broilTimeout'
!new TimeEvent('evOvBroilTimeout')
!evOvBroilTimeout.time := 900
!insert (smOven, trOvBroilTimeout) into StateMachineContainsTransitions
!insert (trOvBroilTimeout, evOvBroilTimeout) into TransitionContainsEvents
!insert (ovBroiling, trOvBroilTimeout) into StateTransition
!insert (trOvBroilTimeout, ovCooling) into TransitionState

!new Transition('trOvCoolDone')
!trOvCoolDone.name := 'coolDone'
!new TimeEvent('evOvCoolDone')
!evOvCoolDone.time := 300
!insert (smOven, trOvCoolDone) into StateMachineContainsTransitions
!insert (trOvCoolDone, evOvCoolDone) into TransitionContainsEvents
!insert (ovCooling, trOvCoolDone) into StateTransition
!insert (trOvCoolDone, ovStandby) into TransitionState

!new Transition('trOvOverheatAlarm')
!trOvOverheatAlarm.name := 'overheatAlarm'
!new TimeEvent('evOvOverheatAlarm')
!evOvOverheatAlarm.time := 1
!insert (smOven, trOvOverheatAlarm) into StateMachineContainsTransitions
!insert (trOvOverheatAlarm, evOvOverheatAlarm) into TransitionContainsEvents
!insert (ovPreheating, trOvOverheatAlarm) into StateTransition
!insert (trOvOverheatAlarm, ovAlarm) into TransitionState

!new Transition('trOvAlarmReset')
!trOvAlarmReset.name := 'alarmReset'
!new TimeEvent('evOvAlarmReset')
!evOvAlarmReset.time := 30
!insert (smOven, trOvAlarmReset) into StateMachineContainsTransitions
!insert (trOvAlarmReset, evOvAlarmReset) into TransitionContainsEvents
!insert (ovAlarm, trOvAlarmReset) into StateTransition
!insert (trOvAlarmReset, ovStandby) into TransitionState



!new StateMachine('smPodcast')
!smPodcast.name := 'podcastDownloader'

!new State('pdIdle')
!pdIdle.name := 'idle'
!new State('pdResolving')
!pdResolving.name := 'resolving'
!new State('pdDownloading')
!pdDownloading.name := 'downloading'
!new State('pdVerifying')
!pdVerifying.name := 'verifying'
!new State('pdCompleted')
!pdCompleted.name := 'completed'
!new State('pdPaused')
!pdPaused.name := 'paused'
!new State('pdFailed')
!pdFailed.name := 'failed'

!insert (smPodcast, pdIdle) into StateMachineContainsStates
!insert (smPodcast, pdResolving) into StateMachineContainsStates
!insert (smPodcast, pdDownloading) into StateMachineContainsStates
!insert (smPodcast, pdVerifying) into StateMachineContainsStates
!insert (smPodcast, pdCompleted) into StateMachineContainsStates
!insert (smPodcast, pdPaused) into StateMachineContainsStates
!insert (smPodcast, pdFailed) into StateMachineContainsStates

!insert (smPodcast, pdIdle) into StateMachineStartsStates


!new Transition('trPdQueue')
!trPdQueue.name := 'queueEpisode'
!new TimeEvent('evPdQueue')
!evPdQueue.time := 1
!insert (smPodcast, trPdQueue) into StateMachineContainsTransitions
!insert (trPdQueue, evPdQueue) into TransitionContainsEvents
!insert (pdIdle, trPdQueue) into StateTransition
!insert (trPdQueue, pdResolving) into TransitionState

!new Transition('trPdResolveOk')
!trPdResolveOk.name := 'resolveOk'
!new TimeEvent('evPdResolveOk')
!evPdResolveOk.time := 2
!insert (smPodcast, trPdResolveOk) into StateMachineContainsTransitions
!insert (trPdResolveOk, evPdResolveOk) into TransitionContainsEvents
!insert (pdResolving, trPdResolveOk) into StateTransition
!insert (trPdResolveOk, pdDownloading) into TransitionState

!new Transition('trPdResolveFail')
!trPdResolveFail.name := 'resolveFail'
!new TimeEvent('evPdResolveFail')
!evPdResolveFail.time := 5
!insert (smPodcast, trPdResolveFail) into StateMachineContainsTransitions
!insert (trPdResolveFail, evPdResolveFail) into TransitionContainsEvents
!insert (pdResolving, trPdResolveFail) into StateTransition
!insert (trPdResolveFail, pdFailed) into TransitionState

!new Transition('trPdPause')
!trPdPause.name := 'pauseDownload'
!new TimeEvent('evPdPause')
!evPdPause.time := 1
!insert (smPodcast, trPdPause) into StateMachineContainsTransitions
!insert (trPdPause, evPdPause) into TransitionContainsEvents
!insert (pdDownloading, trPdPause) into StateTransition
!insert (trPdPause, pdPaused) into TransitionState

!new Transition('trPdResume')
!trPdResume.name := 'resumeDownload'
!new TimeEvent('evPdResume')
!evPdResume.time := 1
!insert (smPodcast, trPdResume) into StateMachineContainsTransitions
!insert (trPdResume, evPdResume) into TransitionContainsEvents
!insert (pdPaused, trPdResume) into StateTransition
!insert (trPdResume, pdDownloading) into TransitionState

!new Transition('trPdDownloadComplete')
!trPdDownloadComplete.name := 'downloadComplete'
!new TimeEvent('evPdDownloadComplete')
!evPdDownloadComplete.time := 420
!insert (smPodcast, trPdDownloadComplete) into StateMachineContainsTransitions
!insert (trPdDownloadComplete, evPdDownloadComplete) into TransitionContainsEvents
!insert (pdDownloading, trPdDownloadComplete) into StateTransition
!insert (trPdDownloadComplete, pdVerifying) into TransitionState

!new Transition('trPdVerifyOk')
!trPdVerifyOk.name := 'verifyOk'
!new TimeEvent('evPdVerifyOk')
!evPdVerifyOk.time := 8
!insert (smPodcast, trPdVerifyOk) into StateMachineContainsTransitions
!insert (trPdVerifyOk, evPdVerifyOk) into TransitionContainsEvents
!insert (pdVerifying, trPdVerifyOk) into StateTransition
!insert (trPdVerifyOk, pdCompleted) into TransitionState

!new Transition('trPdVerifyFail')
!trPdVerifyFail.name := 'verifyFail'
!new TimeEvent('evPdVerifyFail')
!evPdVerifyFail.time := 8
!insert (smPodcast, trPdVerifyFail) into StateMachineContainsTransitions
!insert (trPdVerifyFail, evPdVerifyFail) into TransitionContainsEvents
!insert (pdVerifying, trPdVerifyFail) into StateTransition
!insert (trPdVerifyFail, pdFailed) into TransitionState

!new Transition('trPdRetryLater')
!trPdRetryLater.name := 'retryLater'
!new TimeEvent('evPdRetryLater')
!evPdRetryLater.time := 120
!insert (smPodcast, trPdRetryLater) into StateMachineContainsTransitions
!insert (trPdRetryLater, evPdRetryLater) into TransitionContainsEvents
!insert (pdFailed, trPdRetryLater) into StateTransition
!insert (trPdRetryLater, pdResolving) into TransitionState

!new Transition('trPdCleanup')
!trPdCleanup.name := 'cleanup'
!new TimeEvent('evPdCleanup')
!evPdCleanup.time := 3
!insert (smPodcast, trPdCleanup) into StateMachineContainsTransitions
!insert (trPdCleanup, evPdCleanup) into TransitionContainsEvents
!insert (pdCompleted, trPdCleanup) into StateTransition
!insert (trPdCleanup, pdIdle) into TransitionState
```
## Generation 11 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 197 | 0.00% |
| Multiplicities Errors | 0 | 91 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

# Generation 12
```
!new StateMachine('smAtm')
!smAtm.name := 'bankAtm'

!new State('sAtmIdle')
!sAtmIdle.name := 'idle'
!new State('sAtmCardInserted')
!sAtmCardInserted.name := 'cardInserted'
!new State('sAtmPinEntry')
!sAtmPinEntry.name := 'pinEntry'
!new State('sAtmAuthenticated')
!sAtmAuthenticated.name := 'authenticated'
!new State('sAtmMenu')
!sAtmMenu.name := 'menu'
!new State('sAtmDispensingCash')
!sAtmDispensingCash.name := 'dispensingCash'
!new State('sAtmPrintingReceipt')
!sAtmPrintingReceipt.name := 'printingReceipt'
!new State('sAtmEjectingCard')
!sAtmEjectingCard.name := 'ejectingCard'
!new State('sAtmLocked')
!sAtmLocked.name := 'locked'

!insert (smAtm, sAtmIdle) into StateMachineContainsStates
!insert (smAtm, sAtmCardInserted) into StateMachineContainsStates
!insert (smAtm, sAtmPinEntry) into StateMachineContainsStates
!insert (smAtm, sAtmAuthenticated) into StateMachineContainsStates
!insert (smAtm, sAtmMenu) into StateMachineContainsStates
!insert (smAtm, sAtmDispensingCash) into StateMachineContainsStates
!insert (smAtm, sAtmPrintingReceipt) into StateMachineContainsStates
!insert (smAtm, sAtmEjectingCard) into StateMachineContainsStates
!insert (smAtm, sAtmLocked) into StateMachineContainsStates

!insert (smAtm, sAtmIdle) into StateMachineStartsStates

!new StateMachine('smAtmStartCardInserted')
!smAtmStartCardInserted.name := 'cardInsertedStart'
!insert (smAtmStartCardInserted, sAtmCardInserted) into StateMachineStartsStates

!new StateMachine('smAtmStartPinEntry')
!smAtmStartPinEntry.name := 'pinEntryStart'
!insert (smAtmStartPinEntry, sAtmPinEntry) into StateMachineStartsStates

!new StateMachine('smAtmStartAuthenticated')
!smAtmStartAuthenticated.name := 'authenticatedStart'
!insert (smAtmStartAuthenticated, sAtmAuthenticated) into StateMachineStartsStates

!new StateMachine('smAtmStartMenu')
!smAtmStartMenu.name := 'menuStart'
!insert (smAtmStartMenu, sAtmMenu) into StateMachineStartsStates

!new StateMachine('smAtmStartDispensing')
!smAtmStartDispensing.name := 'dispensingStart'
!insert (smAtmStartDispensing, sAtmDispensingCash) into StateMachineStartsStates

!new StateMachine('smAtmStartReceipt')
!smAtmStartReceipt.name := 'receiptStart'
!insert (smAtmStartReceipt, sAtmPrintingReceipt) into StateMachineStartsStates

!new StateMachine('smAtmStartEjecting')
!smAtmStartEjecting.name := 'ejectingStart'
!insert (smAtmStartEjecting, sAtmEjectingCard) into StateMachineStartsStates

!new StateMachine('smAtmStartLocked')
!smAtmStartLocked.name := 'lockedStart'
!insert (smAtmStartLocked, sAtmLocked) into StateMachineStartsStates


!new Transition('tAtmHeartbeat')
!tAtmHeartbeat.name := 'heartbeat'
!new TimeEvent('eAtmHeartbeat')
!eAtmHeartbeat.time := 120

!new Transition('tAtmInsertCard')
!tAtmInsertCard.name := 'insertCard'
!new TimeEvent('eAtmInsertCard')
!eAtmInsertCard.time := 1

!new Transition('tAtmCardReadOk')
!tAtmCardReadOk.name := 'cardReadOk'
!new TimeEvent('eAtmCardReadOk')
!eAtmCardReadOk.time := 2

!new Transition('tAtmPinOk')
!tAtmPinOk.name := 'pinOk'
!new TimeEvent('eAtmPinOk')
!eAtmPinOk.time := 10

!new Transition('tAtmPinFail')
!tAtmPinFail.name := 'pinFail'
!new TimeEvent('eAtmPinFail')
!eAtmPinFail.time := 15

!new Transition('tAtmTooManyFails')
!tAtmTooManyFails.name := 'tooManyFails'
!new TimeEvent('eAtmTooManyFails')
!eAtmTooManyFails.time := 45

!new Transition('tAtmAuthToMenu')
!tAtmAuthToMenu.name := 'showMenu'
!new TimeEvent('eAtmAuthToMenu')
!eAtmAuthToMenu.time := 1

!new Transition('tAtmSelectWithdraw')
!tAtmSelectWithdraw.name := 'selectWithdraw'
!new TimeEvent('eAtmSelectWithdraw')
!eAtmSelectWithdraw.time := 1

!new Transition('tAtmDispenseDone')
!tAtmDispenseDone.name := 'dispenseDone'
!new TimeEvent('eAtmDispenseDone')
!eAtmDispenseDone.time := 20

!new Transition('tAtmReceiptPrinted')
!tAtmReceiptPrinted.name := 'receiptPrinted'
!new TimeEvent('eAtmReceiptPrinted')
!eAtmReceiptPrinted.time := 5

!new Transition('tAtmEjectDone')
!tAtmEjectDone.name := 'ejectDone'
!new TimeEvent('eAtmEjectDone')
!eAtmEjectDone.time := 3

!new Transition('tAtmCancel')
!tAtmCancel.name := 'cancelSession'
!new TimeEvent('eAtmCancel')
!eAtmCancel.time := 1

!new Transition('tAtmSessionTimeout')
!tAtmSessionTimeout.name := 'sessionTimeout'
!new TimeEvent('eAtmSessionTimeout')
!eAtmSessionTimeout.time := 60

!new Transition('tAtmLockTimeout')
!tAtmLockTimeout.name := 'lockTimeout'
!new TimeEvent('eAtmLockTimeout')
!eAtmLockTimeout.time := 300


!insert (smAtm, tAtmHeartbeat) into StateMachineContainsTransitions
!insert (smAtm, tAtmInsertCard) into StateMachineContainsTransitions
!insert (smAtm, tAtmCardReadOk) into StateMachineContainsTransitions
!insert (smAtm, tAtmPinOk) into StateMachineContainsTransitions
!insert (smAtm, tAtmPinFail) into StateMachineContainsTransitions
!insert (smAtm, tAtmTooManyFails) into StateMachineContainsTransitions
!insert (smAtm, tAtmAuthToMenu) into StateMachineContainsTransitions
!insert (smAtm, tAtmSelectWithdraw) into StateMachineContainsTransitions
!insert (smAtm, tAtmDispenseDone) into StateMachineContainsTransitions
!insert (smAtm, tAtmReceiptPrinted) into StateMachineContainsTransitions
!insert (smAtm, tAtmEjectDone) into StateMachineContainsTransitions
!insert (smAtm, tAtmCancel) into StateMachineContainsTransitions
!insert (smAtm, tAtmSessionTimeout) into StateMachineContainsTransitions
!insert (smAtm, tAtmLockTimeout) into StateMachineContainsTransitions

!insert (tAtmHeartbeat, eAtmHeartbeat) into TransitionContainsEvents
!insert (tAtmInsertCard, eAtmInsertCard) into TransitionContainsEvents
!insert (tAtmCardReadOk, eAtmCardReadOk) into TransitionContainsEvents
!insert (tAtmPinOk, eAtmPinOk) into TransitionContainsEvents
!insert (tAtmPinFail, eAtmPinFail) into TransitionContainsEvents
!insert (tAtmTooManyFails, eAtmTooManyFails) into TransitionContainsEvents
!insert (tAtmAuthToMenu, eAtmAuthToMenu) into TransitionContainsEvents
!insert (tAtmSelectWithdraw, eAtmSelectWithdraw) into TransitionContainsEvents
!insert (tAtmDispenseDone, eAtmDispenseDone) into TransitionContainsEvents
!insert (tAtmReceiptPrinted, eAtmReceiptPrinted) into TransitionContainsEvents
!insert (tAtmEjectDone, eAtmEjectDone) into TransitionContainsEvents
!insert (tAtmCancel, eAtmCancel) into TransitionContainsEvents
!insert (tAtmSessionTimeout, eAtmSessionTimeout) into TransitionContainsEvents
!insert (tAtmLockTimeout, eAtmLockTimeout) into TransitionContainsEvents


!insert (sAtmIdle, tAtmHeartbeat) into StateTransition
!insert (tAtmHeartbeat, sAtmIdle) into TransitionState

!insert (sAtmIdle, tAtmInsertCard) into StateTransition
!insert (tAtmInsertCard, sAtmCardInserted) into TransitionState

!insert (sAtmCardInserted, tAtmCardReadOk) into StateTransition
!insert (tAtmCardReadOk, sAtmPinEntry) into TransitionState

!insert (sAtmPinEntry, tAtmPinOk) into StateTransition
!insert (tAtmPinOk, sAtmAuthenticated) into TransitionState

!insert (sAtmPinEntry, tAtmPinFail) into StateTransition
!insert (tAtmPinFail, sAtmPinEntry) into TransitionState

!insert (sAtmPinEntry, tAtmTooManyFails) into StateTransition
!insert (tAtmTooManyFails, sAtmLocked) into TransitionState

!insert (sAtmAuthenticated, tAtmAuthToMenu) into StateTransition
!insert (tAtmAuthToMenu, sAtmMenu) into TransitionState

!insert (sAtmMenu, tAtmSelectWithdraw) into StateTransition
!insert (tAtmSelectWithdraw, sAtmDispensingCash) into TransitionState

!insert (sAtmDispensingCash, tAtmDispenseDone) into StateTransition
!insert (tAtmDispenseDone, sAtmPrintingReceipt) into TransitionState

!insert (sAtmPrintingReceipt, tAtmReceiptPrinted) into StateTransition
!insert (tAtmReceiptPrinted, sAtmEjectingCard) into TransitionState

!insert (sAtmEjectingCard, tAtmEjectDone) into StateTransition
!insert (tAtmEjectDone, sAtmIdle) into TransitionState

!insert (sAtmMenu, tAtmCancel) into StateTransition
!insert (tAtmCancel, sAtmEjectingCard) into TransitionState

!insert (sAtmMenu, tAtmSessionTimeout) into StateTransition
!insert (tAtmSessionTimeout, sAtmEjectingCard) into TransitionState

!insert (sAtmLocked, tAtmLockTimeout) into StateTransition
!insert (tAtmLockTimeout, sAtmIdle) into TransitionState



!new StateMachine('smSprinkler')
!smSprinkler.name := 'gardenSprinkler'

!new State('spOff')
!spOff.name := 'off'
!new State('spScheduled')
!spScheduled.name := 'scheduled'
!new State('spWatering')
!spWatering.name := 'watering'
!new State('spRainDelay')
!spRainDelay.name := 'rainDelay'
!new State('spManual')
!spManual.name := 'manualOverride'
!new State('spError')
!spError.name := 'error'

!insert (smSprinkler, spOff) into StateMachineContainsStates
!insert (smSprinkler, spScheduled) into StateMachineContainsStates
!insert (smSprinkler, spWatering) into StateMachineContainsStates
!insert (smSprinkler, spRainDelay) into StateMachineContainsStates
!insert (smSprinkler, spManual) into StateMachineContainsStates
!insert (smSprinkler, spError) into StateMachineContainsStates

!insert (smSprinkler, spOff) into StateMachineStartsStates

!new StateMachine('smSprinklerStartScheduled')
!smSprinklerStartScheduled.name := 'scheduledStart'
!insert (smSprinklerStartScheduled, spScheduled) into StateMachineStartsStates

!new StateMachine('smSprinklerStartWatering')
!smSprinklerStartWatering.name := 'wateringStart'
!insert (smSprinklerStartWatering, spWatering) into StateMachineStartsStates

!new StateMachine('smSprinklerStartRainDelay')
!smSprinklerStartRainDelay.name := 'rainDelayStart'
!insert (smSprinklerStartRainDelay, spRainDelay) into StateMachineStartsStates

!new StateMachine('smSprinklerStartManual')
!smSprinklerStartManual.name := 'manualStart'
!insert (smSprinklerStartManual, spManual) into StateMachineStartsStates

!new StateMachine('smSprinklerStartError')
!smSprinklerStartError.name := 'errorStart'
!insert (smSprinklerStartError, spError) into StateMachineStartsStates


!new Transition('tSpSetSchedule')
!tSpSetSchedule.name := 'setSchedule'
!new TimeEvent('eSpSetSchedule')
!eSpSetSchedule.time := 5

!new Transition('tSpStartScheduled')
!tSpStartScheduled.name := 'startScheduled'
!new TimeEvent('eSpStartScheduled')
!eSpStartScheduled.time := 1

!new Transition('tSpStopAfterDuration')
!tSpStopAfterDuration.name := 'stopAfterDuration'
!new TimeEvent('eSpStopAfterDuration')
!eSpStopAfterDuration.time := 1800

!new Transition('tSpRainDetected')
!tSpRainDetected.name := 'rainDetected'
!new TimeEvent('eSpRainDetected')
!eSpRainDetected.time := 1

!new Transition('tSpDelayExpired')
!tSpDelayExpired.name := 'delayExpired'
!new TimeEvent('eSpDelayExpired')
!eSpDelayExpired.time := 3600

!new Transition('tSpManualStart')
!tSpManualStart.name := 'manualStart'
!new TimeEvent('eSpManualStart')
!eSpManualStart.time := 1

!new Transition('tSpManualStop')
!tSpManualStop.name := 'manualStop'
!new TimeEvent('eSpManualStop')
!eSpManualStop.time := 600

!new Transition('tSpTurnOff')
!tSpTurnOff.name := 'turnOff'
!new TimeEvent('eSpTurnOff')
!eSpTurnOff.time := 1

!new Transition('tSpEmergencyStop')
!tSpEmergencyStop.name := 'emergencyStop'
!new TimeEvent('eSpEmergencyStop')
!eSpEmergencyStop.time := 1

!new Transition('tSpSensorFault')
!tSpSensorFault.name := 'sensorFault'
!new TimeEvent('eSpSensorFault')
!eSpSensorFault.time := 1

!new Transition('tSpReset')
!tSpReset.name := 'reset'
!new TimeEvent('eSpReset')
!eSpReset.time := 30


!insert (smSprinkler, tSpSetSchedule) into StateMachineContainsTransitions
!insert (smSprinkler, tSpStartScheduled) into StateMachineContainsTransitions
!insert (smSprinkler, tSpStopAfterDuration) into StateMachineContainsTransitions
!insert (smSprinkler, tSpRainDetected) into StateMachineContainsTransitions
!insert (smSprinkler, tSpDelayExpired) into StateMachineContainsTransitions
!insert (smSprinkler, tSpManualStart) into StateMachineContainsTransitions
!insert (smSprinkler, tSpManualStop) into StateMachineContainsTransitions
!insert (smSprinkler, tSpTurnOff) into StateMachineContainsTransitions
!insert (smSprinkler, tSpEmergencyStop) into StateMachineContainsTransitions
!insert (smSprinkler, tSpSensorFault) into StateMachineContainsTransitions
!insert (smSprinkler, tSpReset) into StateMachineContainsTransitions

!insert (tSpSetSchedule, eSpSetSchedule) into TransitionContainsEvents
!insert (tSpStartScheduled, eSpStartScheduled) into TransitionContainsEvents
!insert (tSpStopAfterDuration, eSpStopAfterDuration) into TransitionContainsEvents
!insert (tSpRainDetected, eSpRainDetected) into TransitionContainsEvents
!insert (tSpDelayExpired, eSpDelayExpired) into TransitionContainsEvents
!insert (tSpManualStart, eSpManualStart) into TransitionContainsEvents
!insert (tSpManualStop, eSpManualStop) into TransitionContainsEvents
!insert (tSpTurnOff, eSpTurnOff) into TransitionContainsEvents
!insert (tSpEmergencyStop, eSpEmergencyStop) into TransitionContainsEvents
!insert (tSpSensorFault, eSpSensorFault) into TransitionContainsEvents
!insert (tSpReset, eSpReset) into TransitionContainsEvents


!insert (spOff, tSpSetSchedule) into StateTransition
!insert (tSpSetSchedule, spScheduled) into TransitionState

!insert (spScheduled, tSpStartScheduled) into StateTransition
!insert (tSpStartScheduled, spWatering) into TransitionState

!insert (spWatering, tSpStopAfterDuration) into StateTransition
!insert (tSpStopAfterDuration, spScheduled) into TransitionState

!insert (spWatering, tSpRainDetected) into StateTransition
!insert (tSpRainDetected, spRainDelay) into TransitionState

!insert (spRainDelay, tSpDelayExpired) into StateTransition
!insert (tSpDelayExpired, spScheduled) into TransitionState

!insert (spScheduled, tSpManualStart) into StateTransition
!insert (tSpManualStart, spManual) into TransitionState

!insert (spManual, tSpManualStop) into StateTransition
!insert (tSpManualStop, spScheduled) into TransitionState

!insert (spScheduled, tSpTurnOff) into StateTransition
!insert (tSpTurnOff, spOff) into TransitionState

!insert (spWatering, tSpEmergencyStop) into StateTransition
!insert (tSpEmergencyStop, spOff) into TransitionState

!insert (spWatering, tSpSensorFault) into StateTransition
!insert (tSpSensorFault, spError) into TransitionState

!insert (spError, tSpReset) into StateTransition
!insert (tSpReset, spOff) into TransitionState
```
## Generation 12 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 290 | 0.00% |
| Multiplicities Errors | 0 | 130 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

# Generation 13
```
!new StateMachine('smSecurity')
!smSecurity.name := 'smartHomeSecurity'

!new State('secDisarmed')
!secDisarmed.name := 'disarmed'
!new State('secArming')
!secArming.name := 'arming'
!new State('secArmedHome')
!secArmedHome.name := 'armedHome'
!new State('secArmedAway')
!secArmedAway.name := 'armedAway'
!new State('secEntryDelay')
!secEntryDelay.name := 'entryDelay'
!new State('secAlarm')
!secAlarm.name := 'alarm'
!new State('secSnooze')
!secSnooze.name := 'snooze'
!new State('secMaintenance')
!secMaintenance.name := 'maintenance'

!insert (smSecurity, secDisarmed) into StateMachineContainsStates
!insert (smSecurity, secArming) into StateMachineContainsStates
!insert (smSecurity, secArmedHome) into StateMachineContainsStates
!insert (smSecurity, secArmedAway) into StateMachineContainsStates
!insert (smSecurity, secEntryDelay) into StateMachineContainsStates
!insert (smSecurity, secAlarm) into StateMachineContainsStates
!insert (smSecurity, secSnooze) into StateMachineContainsStates
!insert (smSecurity, secMaintenance) into StateMachineContainsStates

!insert (smSecurity, secDisarmed) into StateMachineStartsStates


!new Transition('secT_startArming')
!secT_startArming.name := 'startArming'
!new TimeEvent('secE_startArming')
!secE_startArming.time := 1
!insert (smSecurity, secT_startArming) into StateMachineContainsTransitions
!insert (secT_startArming, secE_startArming) into TransitionContainsEvents
!insert (secDisarmed, secT_startArming) into StateTransition
!insert (secT_startArming, secArming) into TransitionState

!new Transition('secT_armHome')
!secT_armHome.name := 'armHome'
!new TimeEvent('secE_armHome')
!secE_armHome.time := 30
!insert (smSecurity, secT_armHome) into StateMachineContainsTransitions
!insert (secT_armHome, secE_armHome) into TransitionContainsEvents
!insert (secArming, secT_armHome) into StateTransition
!insert (secT_armHome, secArmedHome) into TransitionState

!new Transition('secT_armAway')
!secT_armAway.name := 'armAway'
!new TimeEvent('secE_armAway')
!secE_armAway.time := 30
!insert (smSecurity, secT_armAway) into StateMachineContainsTransitions
!insert (secT_armAway, secE_armAway) into TransitionContainsEvents
!insert (secArming, secT_armAway) into StateTransition
!insert (secT_armAway, secArmedAway) into TransitionState

!new Transition('secT_cancelArming')
!secT_cancelArming.name := 'cancelArming'
!new TimeEvent('secE_cancelArming')
!secE_cancelArming.time := 5
!insert (smSecurity, secT_cancelArming) into StateMachineContainsTransitions
!insert (secT_cancelArming, secE_cancelArming) into TransitionContainsEvents
!insert (secArming, secT_cancelArming) into StateTransition
!insert (secT_cancelArming, secDisarmed) into TransitionState

!new Transition('secT_doorOpenedHome')
!secT_doorOpenedHome.name := 'doorOpened'
!new TimeEvent('secE_doorOpenedHome')
!secE_doorOpenedHome.time := 1
!insert (smSecurity, secT_doorOpenedHome) into StateMachineContainsTransitions
!insert (secT_doorOpenedHome, secE_doorOpenedHome) into TransitionContainsEvents
!insert (secArmedHome, secT_doorOpenedHome) into StateTransition
!insert (secT_doorOpenedHome, secEntryDelay) into TransitionState

!new Transition('secT_doorOpenedAway')
!secT_doorOpenedAway.name := 'doorOpened'
!new TimeEvent('secE_doorOpenedAway')
!secE_doorOpenedAway.time := 1
!insert (smSecurity, secT_doorOpenedAway) into StateMachineContainsTransitions
!insert (secT_doorOpenedAway, secE_doorOpenedAway) into TransitionContainsEvents
!insert (secArmedAway, secT_doorOpenedAway) into StateTransition
!insert (secT_doorOpenedAway, secEntryDelay) into TransitionState

!new Transition('secT_disarmDuringEntry')
!secT_disarmDuringEntry.name := 'disarm'
!new TimeEvent('secE_disarmDuringEntry')
!secE_disarmDuringEntry.time := 10
!insert (smSecurity, secT_disarmDuringEntry) into StateMachineContainsTransitions
!insert (secT_disarmDuringEntry, secE_disarmDuringEntry) into TransitionContainsEvents
!insert (secEntryDelay, secT_disarmDuringEntry) into StateTransition
!insert (secT_disarmDuringEntry, secDisarmed) into TransitionState

!new Transition('secT_entryTimeout')
!secT_entryTimeout.name := 'entryTimeout'
!new TimeEvent('secE_entryTimeout')
!secE_entryTimeout.time := 20
!insert (smSecurity, secT_entryTimeout) into StateMachineContainsTransitions
!insert (secT_entryTimeout, secE_entryTimeout) into TransitionContainsEvents
!insert (secEntryDelay, secT_entryTimeout) into StateTransition
!insert (secT_entryTimeout, secAlarm) into TransitionState

!new Transition('secT_snoozeAlarm')
!secT_snoozeAlarm.name := 'snoozeAlarm'
!new TimeEvent('secE_snoozeAlarm')
!secE_snoozeAlarm.time := 2
!insert (smSecurity, secT_snoozeAlarm) into StateMachineContainsTransitions
!insert (secT_snoozeAlarm, secE_snoozeAlarm) into TransitionContainsEvents
!insert (secAlarm, secT_snoozeAlarm) into StateTransition
!insert (secT_snoozeAlarm, secSnooze) into TransitionState

!new Transition('secT_snoozeEnds')
!secT_snoozeEnds.name := 'snoozeEnds'
!new TimeEvent('secE_snoozeEnds')
!secE_snoozeEnds.time := 60
!insert (smSecurity, secT_snoozeEnds) into StateMachineContainsTransitions
!insert (secT_snoozeEnds, secE_snoozeEnds) into TransitionContainsEvents
!insert (secSnooze, secT_snoozeEnds) into StateTransition
!insert (secT_snoozeEnds, secAlarm) into TransitionState

!new Transition('secT_disarmFromAlarm')
!secT_disarmFromAlarm.name := 'disarm'
!new TimeEvent('secE_disarmFromAlarm')
!secE_disarmFromAlarm.time := 5
!insert (smSecurity, secT_disarmFromAlarm) into StateMachineContainsTransitions
!insert (secT_disarmFromAlarm, secE_disarmFromAlarm) into TransitionContainsEvents
!insert (secAlarm, secT_disarmFromAlarm) into StateTransition
!insert (secT_disarmFromAlarm, secDisarmed) into TransitionState

!new Transition('secT_enterMaintenance')
!secT_enterMaintenance.name := 'enterMaintenance'
!new TimeEvent('secE_enterMaintenance')
!secE_enterMaintenance.time := 1
!insert (smSecurity, secT_enterMaintenance) into StateMachineContainsTransitions
!insert (secT_enterMaintenance, secE_enterMaintenance) into TransitionContainsEvents
!insert (secDisarmed, secT_enterMaintenance) into StateTransition
!insert (secT_enterMaintenance, secMaintenance) into TransitionState

!new Transition('secT_exitMaintenance')
!secT_exitMaintenance.name := 'exitMaintenance'
!new TimeEvent('secE_exitMaintenance')
!secE_exitMaintenance.time := 120
!insert (smSecurity, secT_exitMaintenance) into StateMachineContainsTransitions
!insert (secT_exitMaintenance, secE_exitMaintenance) into TransitionContainsEvents
!insert (secMaintenance, secT_exitMaintenance) into StateTransition
!insert (secT_exitMaintenance, secDisarmed) into TransitionState



!new StateMachine('smMedication')
!smMedication.name := 'medicationReminder'

!new State('mrIdle')
!mrIdle.name := 'idle'
!new State('mrReminding')
!mrReminding.name := 'reminding'
!new State('mrAcknowledged')
!mrAcknowledged.name := 'acknowledged'

!insert (smMedication, mrIdle) into StateMachineContainsStates
!insert (smMedication, mrReminding) into StateMachineContainsStates
!insert (smMedication, mrAcknowledged) into StateMachineContainsStates

!insert (smMedication, mrIdle) into StateMachineStartsStates


!new Transition('mrT_dailyReminder')
!mrT_dailyReminder.name := 'dailyReminder'
!new TimeEvent('mrE_dailyReminder')
!mrE_dailyReminder.time := 480
!insert (smMedication, mrT_dailyReminder) into StateMachineContainsTransitions
!insert (mrT_dailyReminder, mrE_dailyReminder) into TransitionContainsEvents
!insert (mrIdle, mrT_dailyReminder) into StateTransition
!insert (mrT_dailyReminder, mrReminding) into TransitionState

!new Transition('mrT_ackNow')
!mrT_ackNow.name := 'acknowledge'
!new TimeEvent('mrE_ackNow')
!mrE_ackNow.time := 1
!insert (smMedication, mrT_ackNow) into StateMachineContainsTransitions
!insert (mrT_ackNow, mrE_ackNow) into TransitionContainsEvents
!insert (mrReminding, mrT_ackNow) into StateTransition
!insert (mrT_ackNow, mrAcknowledged) into TransitionState

!new Transition('mrT_ackToIdle')
!mrT_ackToIdle.name := 'returnToIdle'
!new TimeEvent('mrE_ackToIdle')
!mrE_ackToIdle.time := 5
!insert (smMedication, mrT_ackToIdle) into StateMachineContainsTransitions
!insert (mrT_ackToIdle, mrE_ackToIdle) into TransitionContainsEvents
!insert (mrAcknowledged, mrT_ackToIdle) into StateTransition
!insert (mrT_ackToIdle, mrIdle) into TransitionState

!new Transition('mrT_missedDose')
!mrT_missedDose.name := 'missedDose'
!new TimeEvent('mrE_missedDose')
!mrE_missedDose.time := 15
!insert (smMedication, mrT_missedDose) into StateMachineContainsTransitions
!insert (mrT_missedDose, mrE_missedDose) into TransitionContainsEvents
!insert (mrReminding, mrT_missedDose) into StateTransition
!insert (mrT_missedDose, mrIdle) into TransitionState
```
## Generation 13 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 175 | 0.00% |
| Multiplicities Errors | 0 | 81 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

# Generation 14
```
!new StateMachine('smConference')
!smConference.name := 'conferenceSubmission'

!new State('cfProposed')
!cfProposed.name := 'proposed'
!new State('cfScheduled')
!cfScheduled.name := 'scheduled'
!new State('cfOngoing')
!cfOngoing.name := 'ongoing'
!new State('cfPaused')
!cfPaused.name := 'paused'
!new State('cfFinished')
!cfFinished.name := 'finished'
!new State('cfCancelled')
!cfCancelled.name := 'cancelled'

!insert (smConference, cfProposed) into StateMachineContainsStates
!insert (smConference, cfScheduled) into StateMachineContainsStates
!insert (smConference, cfOngoing) into StateMachineContainsStates
!insert (smConference, cfPaused) into StateMachineContainsStates
!insert (smConference, cfFinished) into StateMachineContainsStates
!insert (smConference, cfCancelled) into StateMachineContainsStates

!insert (smConference, cfProposed) into StateMachineStartsStates


!new Transition('trApprove')
!trApprove.name := 'approveProposal'
!new TimeEvent('evApprove')
!evApprove.time := 1440
!insert (smConference, trApprove) into StateMachineContainsTransitions
!insert (trApprove, evApprove) into TransitionContainsEvents
!insert (cfProposed, trApprove) into StateTransition
!insert (trApprove, cfScheduled) into TransitionState

!new Transition('trCancelBeforeSchedule')
!trCancelBeforeSchedule.name := 'cancelBeforeSchedule'
!new TimeEvent('evCancelBeforeSchedule')
!evCancelBeforeSchedule.time := 60
!insert (smConference, trCancelBeforeSchedule) into StateMachineContainsTransitions
!insert (trCancelBeforeSchedule, evCancelBeforeSchedule) into TransitionContainsEvents
!insert (cfProposed, trCancelBeforeSchedule) into StateTransition
!insert (trCancelBeforeSchedule, cfCancelled) into TransitionState

!new Transition('trCancelScheduled')
!trCancelScheduled.name := 'cancelScheduled'
!new TimeEvent('evCancelScheduled')
!evCancelScheduled.time := 30
!insert (smConference, trCancelScheduled) into StateMachineContainsTransitions
!insert (trCancelScheduled, evCancelScheduled) into TransitionContainsEvents
!insert (cfScheduled, trCancelScheduled) into StateTransition
!insert (trCancelScheduled, cfCancelled) into TransitionState

!new Transition('trStartSession')
!trStartSession.name := 'startSession'
!new TimeEvent('evStartSession')
!evStartSession.time := 1
!insert (smConference, trStartSession) into StateMachineContainsTransitions
!insert (trStartSession, evStartSession) into TransitionContainsEvents
!insert (cfScheduled, trStartSession) into StateTransition
!insert (trStartSession, cfOngoing) into TransitionState

!new Transition('trPauseSession')
!trPauseSession.name := 'pauseSession'
!new TimeEvent('evPauseSession')
!evPauseSession.time := 90
!insert (smConference, trPauseSession) into StateMachineContainsTransitions
!insert (trPauseSession, evPauseSession) into TransitionContainsEvents
!insert (cfOngoing, trPauseSession) into StateTransition
!insert (trPauseSession, cfPaused) into TransitionState

!new Transition('trResumeSession')
!trResumeSession.name := 'resumeSession'
!new TimeEvent('evResumeSession')
!evResumeSession.time := 10
!insert (smConference, trResumeSession) into StateMachineContainsTransitions
!insert (trResumeSession, evResumeSession) into TransitionContainsEvents
!insert (cfPaused, trResumeSession) into StateTransition
!insert (trResumeSession, cfOngoing) into TransitionState

!new Transition('trEndSession')
!trEndSession.name := 'endSession'
!new TimeEvent('evEndSession')
!evEndSession.time := 5400
!insert (smConference, trEndSession) into StateMachineContainsTransitions
!insert (trEndSession, evEndSession) into TransitionContainsEvents
!insert (cfOngoing, trEndSession) into StateTransition
!insert (trEndSession, cfFinished) into TransitionState

!new Transition('trAbortOngoing')
!trAbortOngoing.name := 'abortOngoing'
!new TimeEvent('evAbortOngoing')
!evAbortOngoing.time := 1
!insert (smConference, trAbortOngoing) into StateMachineContainsTransitions
!insert (trAbortOngoing, evAbortOngoing) into TransitionContainsEvents
!insert (cfOngoing, trAbortOngoing) into StateTransition
!insert (trAbortOngoing, cfCancelled) into TransitionState

!new Transition('trStatusPing')
!trStatusPing.name := 'statusPing'
!new TimeEvent('evStatusPing')
!evStatusPing.time := 300
!insert (smConference, trStatusPing) into StateMachineContainsTransitions
!insert (trStatusPing, evStatusPing) into TransitionContainsEvents
!insert (cfOngoing, trStatusPing) into StateTransition
!insert (trStatusPing, cfOngoing) into TransitionState

!new Transition('trPauseTimeoutCancel')
!trPauseTimeoutCancel.name := 'pauseTimeoutCancel'
!new TimeEvent('evPauseTimeoutCancel')
!evPauseTimeoutCancel.time := 1800
!insert (smConference, trPauseTimeoutCancel) into StateMachineContainsTransitions
!insert (trPauseTimeoutCancel, evPauseTimeoutCancel) into TransitionContainsEvents
!insert (cfPaused, trPauseTimeoutCancel) into StateTransition
!insert (trPauseTimeoutCancel, cfCancelled) into TransitionState



!new StateMachine('smDocArchive')
!smDocArchive.name := 'documentArchive'

!new State('daArchived')
!daArchived.name := 'archived'

!insert (smDocArchive, daArchived) into StateMachineContainsStates
!insert (smDocArchive, daArchived) into StateMachineStartsStates
```
## Generation 14 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 107 | 0.00% |
| Multiplicities Errors | 0 | 49 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

# Generation 15
```
!new StateMachine('smLibrary')
!smLibrary.name := 'libraryLoanLifecycle'

!new State('lbAvailable')
!lbAvailable.name := 'available'
!new State('lbReserved')
!lbReserved.name := 'reserved'
!new State('lbCheckedOut')
!lbCheckedOut.name := 'checkedOut'
!new State('lbOverdue')
!lbOverdue.name := 'overdue'
!new State('lbLost')
!lbLost.name := 'lost'

!insert (smLibrary, lbAvailable) into StateMachineContainsStates
!insert (smLibrary, lbReserved) into StateMachineContainsStates
!insert (smLibrary, lbCheckedOut) into StateMachineContainsStates
!insert (smLibrary, lbOverdue) into StateMachineContainsStates
!insert (smLibrary, lbLost) into StateMachineContainsStates

!insert (smLibrary, lbAvailable) into StateMachineStartsStates


!new Transition('lbReserve')
!lbReserve.name := 'reserveItem'
!new TimeEvent('evLbReserve')
!evLbReserve.time := 2

!new Transition('lbCancelReservation')
!lbCancelReservation.name := 'cancelReservation'
!new TimeEvent('evLbCancelReservation')
!evLbCancelReservation.time := 5

!new Transition('lbCheckoutFromAvailable')
!lbCheckoutFromAvailable.name := 'checkoutDirect'
!new TimeEvent('evLbCheckoutFromAvailable')
!evLbCheckoutFromAvailable.time := 3

!new Transition('lbCheckoutFromReserved')
!lbCheckoutFromReserved.name := 'checkoutReserved'
!new TimeEvent('evLbCheckoutFromReserved')
!evLbCheckoutFromReserved.time := 3

!new Transition('lbReturnOnTime')
!lbReturnOnTime.name := 'returnOnTime'
!new TimeEvent('evLbReturnOnTime')
!evLbReturnOnTime.time := 20160

!new Transition('lbBecomeOverdue')
!lbBecomeOverdue.name := 'becomeOverdue'
!new TimeEvent('evLbBecomeOverdue')
!evLbBecomeOverdue.time := 20160

!new Transition('lbReturnLate')
!lbReturnLate.name := 'returnLate'
!new TimeEvent('evLbReturnLate')
!evLbReturnLate.time := 4320

!new Transition('lbReportLost')
!lbReportLost.name := 'reportLost'
!new TimeEvent('evLbReportLost')
!evLbReportLost.time := 1

!new Transition('lbFoundAfterLost')
!lbFoundAfterLost.name := 'foundAfterLost'
!new TimeEvent('evLbFoundAfterLost')
!evLbFoundAfterLost.time := 1440


!insert (smLibrary, lbReserve) into StateMachineContainsTransitions
!insert (smLibrary, lbCancelReservation) into StateMachineContainsTransitions
!insert (smLibrary, lbCheckoutFromAvailable) into StateMachineContainsTransitions
!insert (smLibrary, lbCheckoutFromReserved) into StateMachineContainsTransitions
!insert (smLibrary, lbReturnOnTime) into StateMachineContainsTransitions
!insert (smLibrary, lbBecomeOverdue) into StateMachineContainsTransitions
!insert (smLibrary, lbReturnLate) into StateMachineContainsTransitions
!insert (smLibrary, lbReportLost) into StateMachineContainsTransitions
!insert (smLibrary, lbFoundAfterLost) into StateMachineContainsTransitions

!insert (lbReserve, evLbReserve) into TransitionContainsEvents
!insert (lbCancelReservation, evLbCancelReservation) into TransitionContainsEvents
!insert (lbCheckoutFromAvailable, evLbCheckoutFromAvailable) into TransitionContainsEvents
!insert (lbCheckoutFromReserved, evLbCheckoutFromReserved) into TransitionContainsEvents
!insert (lbReturnOnTime, evLbReturnOnTime) into TransitionContainsEvents
!insert (lbBecomeOverdue, evLbBecomeOverdue) into TransitionContainsEvents
!insert (lbReturnLate, evLbReturnLate) into TransitionContainsEvents
!insert (lbReportLost, evLbReportLost) into TransitionContainsEvents
!insert (lbFoundAfterLost, evLbFoundAfterLost) into TransitionContainsEvents


!insert (lbAvailable, lbReserve) into StateTransition
!insert (lbReserve, lbReserved) into TransitionState

!insert (lbReserved, lbCancelReservation) into StateTransition
!insert (lbCancelReservation, lbAvailable) into TransitionState

!insert (lbAvailable, lbCheckoutFromAvailable) into StateTransition
!insert (lbCheckoutFromAvailable, lbCheckedOut) into TransitionState

!insert (lbReserved, lbCheckoutFromReserved) into StateTransition
!insert (lbCheckoutFromReserved, lbCheckedOut) into TransitionState

!insert (lbCheckedOut, lbReturnOnTime) into StateTransition
!insert (lbReturnOnTime, lbAvailable) into TransitionState

!insert (lbCheckedOut, lbBecomeOverdue) into StateTransition
!insert (lbBecomeOverdue, lbOverdue) into TransitionState

!insert (lbOverdue, lbReturnLate) into StateTransition
!insert (lbReturnLate, lbAvailable) into TransitionState

!insert (lbCheckedOut, lbReportLost) into StateTransition
!insert (lbReportLost, lbLost) into TransitionState

!insert (lbLost, lbFoundAfterLost) into StateTransition
!insert (lbFoundAfterLost, lbAvailable) into TransitionState



!new StateMachine('smRestaurant')
!smRestaurant.name := 'restaurantTableTurnover'

!new State('rtEmpty')
!rtEmpty.name := 'empty'
!new State('rtSeated')
!rtSeated.name := 'seated'
!new State('rtOrdering')
!rtOrdering.name := 'ordering'
!new State('rtEating')
!rtEating.name := 'eating'
!new State('rtPaying')
!rtPaying.name := 'paying'
!new State('rtCleaning')
!rtCleaning.name := 'cleaning'

!insert (smRestaurant, rtEmpty) into StateMachineContainsStates
!insert (smRestaurant, rtSeated) into StateMachineContainsStates
!insert (smRestaurant, rtOrdering) into StateMachineContainsStates
!insert (smRestaurant, rtEating) into StateMachineContainsStates
!insert (smRestaurant, rtPaying) into StateMachineContainsStates
!insert (smRestaurant, rtCleaning) into StateMachineContainsStates

!insert (smRestaurant, rtEmpty) into StateMachineStartsStates


!new Transition('rtSeatGuests')
!rtSeatGuests.name := 'seatGuests'
!new TimeEvent('evRtSeatGuests')
!evRtSeatGuests.time := 1

!new Transition('rtTakeOrder')
!rtTakeOrder.name := 'takeOrder'
!new TimeEvent('evRtTakeOrder')
!evRtTakeOrder.time := 6

!new Transition('rtServeFood')
!rtServeFood.name := 'serveFood'
!new TimeEvent('evRtServeFood')
!evRtServeFood.time := 18

!new Transition('rtRequestBill')
!rtRequestBill.name := 'requestBill'
!new TimeEvent('evRtRequestBill')
!evRtRequestBill.time := 30

!new Transition('rtPaymentDone')
!rtPaymentDone.name := 'paymentDone'
!new TimeEvent('evRtPaymentDone')
!evRtPaymentDone.time := 4

!new Transition('rtCleanTable')
!rtCleanTable.name := 'cleanTable'
!new TimeEvent('evRtCleanTable')
!evRtCleanTable.time := 7

!new Transition('rtQuickReset')
!rtQuickReset.name := 'quickReset'
!new TimeEvent('evRtQuickReset')
!evRtQuickReset.time := 1


!insert (smRestaurant, rtSeatGuests) into StateMachineContainsTransitions
!insert (smRestaurant, rtTakeOrder) into StateMachineContainsTransitions
!insert (smRestaurant, rtServeFood) into StateMachineContainsTransitions
!insert (smRestaurant, rtRequestBill) into StateMachineContainsTransitions
!insert (smRestaurant, rtPaymentDone) into StateMachineContainsTransitions
!insert (smRestaurant, rtCleanTable) into StateMachineContainsTransitions
!insert (smRestaurant, rtQuickReset) into StateMachineContainsTransitions

!insert (rtSeatGuests, evRtSeatGuests) into TransitionContainsEvents
!insert (rtTakeOrder, evRtTakeOrder) into TransitionContainsEvents
!insert (rtServeFood, evRtServeFood) into TransitionContainsEvents
!insert (rtRequestBill, evRtRequestBill) into TransitionContainsEvents
!insert (rtPaymentDone, evRtPaymentDone) into TransitionContainsEvents
!insert (rtCleanTable, evRtCleanTable) into TransitionContainsEvents
!insert (rtQuickReset, evRtQuickReset) into TransitionContainsEvents


!insert (rtEmpty, rtSeatGuests) into StateTransition
!insert (rtSeatGuests, rtSeated) into TransitionState

!insert (rtSeated, rtTakeOrder) into StateTransition
!insert (rtTakeOrder, rtOrdering) into TransitionState

!insert (rtOrdering, rtServeFood) into StateTransition
!insert (rtServeFood, rtEating) into TransitionState

!insert (rtEating, rtRequestBill) into StateTransition
!insert (rtRequestBill, rtPaying) into TransitionState

!insert (rtPaying, rtPaymentDone) into StateTransition
!insert (rtPaymentDone, rtCleaning) into TransitionState

!insert (rtCleaning, rtCleanTable) into StateTransition
!insert (rtCleanTable, rtEmpty) into TransitionState

!insert (rtSeated, rtQuickReset) into StateTransition
!insert (rtQuickReset, rtEmpty) into TransitionState
```
## Generation 15 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 167 | 0.00% |
| Multiplicities Errors | 0 | 77 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

# Generation 16
```
!new StateMachine('smRobot')
!smRobot.name := 'factoryRobotController'

!new State('rbBoot')
!rbBoot.name := 'booting'
!new State('rbIdle')
!rbIdle.name := 'idle'
!new State('rbActive')
!rbActive.name := 'active'
!new State('rbPaused')
!rbPaused.name := 'paused'
!new State('rbEStop')
!rbEStop.name := 'emergencyStop'
!new State('rbService')
!rbService.name := 'service'

!insert (smRobot, rbBoot) into StateMachineContainsStates
!insert (smRobot, rbIdle) into StateMachineContainsStates
!insert (smRobot, rbActive) into StateMachineContainsStates
!insert (smRobot, rbPaused) into StateMachineContainsStates
!insert (smRobot, rbEStop) into StateMachineContainsStates
!insert (smRobot, rbService) into StateMachineContainsStates

!insert (smRobot, rbBoot) into StateMachineStartsStates

!new StateMachine('smRobotStartIdle')
!smRobotStartIdle.name := 'idleStartHelper'
!insert (smRobotStartIdle, rbIdle) into StateMachineStartsStates

!new StateMachine('smRobotStartActive')
!smRobotStartActive.name := 'activeStartHelper'
!insert (smRobotStartActive, rbActive) into StateMachineStartsStates

!new StateMachine('smRobotStartPaused')
!smRobotStartPaused.name := 'pausedStartHelper'
!insert (smRobotStartPaused, rbPaused) into StateMachineStartsStates

!new StateMachine('smRobotStartEStop')
!smRobotStartEStop.name := 'estopStartHelper'
!insert (smRobotStartEStop, rbEStop) into StateMachineStartsStates

!new StateMachine('smRobotStartService')
!smRobotStartService.name := 'serviceStartHelper'
!insert (smRobotStartService, rbService) into StateMachineStartsStates


!new Transition('trRbBootComplete')
!trRbBootComplete.name := 'bootComplete'
!new TimeEvent('evRbBootComplete')
!evRbBootComplete.time := 12

!new Transition('trRbStartJob')
!trRbStartJob.name := 'startJob'
!new TimeEvent('evRbStartJob')
!evRbStartJob.time := 2

!new Transition('trRbPauseJob')
!trRbPauseJob.name := 'pauseJob'
!new TimeEvent('evRbPauseJob')
!evRbPauseJob.time := 1

!new Transition('trRbResumeJob')
!trRbResumeJob.name := 'resumeJob'
!new TimeEvent('evRbResumeJob')
!evRbResumeJob.time := 1

!new Transition('trRbEmergencyTrip')
!trRbEmergencyTrip.name := 'emergencyTrip'
!new TimeEvent('evRbEmergencyTrip')
!evRbEmergencyTrip.time := 1

!new Transition('trRbEnterService')
!trRbEnterService.name := 'enterService'
!new TimeEvent('evRbEnterService')
!evRbEnterService.time := 30

!new Transition('trRbServiceComplete')
!trRbServiceComplete.name := 'serviceComplete'
!new TimeEvent('evRbServiceComplete')
!evRbServiceComplete.time := 900

!new Transition('trRbAutoHealthCheck')
!trRbAutoHealthCheck.name := 'autoHealthCheck'
!new TimeEvent('evRbAutoHealthCheck')
!evRbAutoHealthCheck.time := 300


!insert (smRobot, trRbBootComplete) into StateMachineContainsTransitions
!insert (smRobot, trRbStartJob) into StateMachineContainsTransitions
!insert (smRobot, trRbPauseJob) into StateMachineContainsTransitions
!insert (smRobot, trRbResumeJob) into StateMachineContainsTransitions
!insert (smRobot, trRbEmergencyTrip) into StateMachineContainsTransitions
!insert (smRobot, trRbEnterService) into StateMachineContainsTransitions
!insert (smRobot, trRbServiceComplete) into StateMachineContainsTransitions
!insert (smRobot, trRbAutoHealthCheck) into StateMachineContainsTransitions

!insert (trRbBootComplete, evRbBootComplete) into TransitionContainsEvents
!insert (trRbStartJob, evRbStartJob) into TransitionContainsEvents
!insert (trRbPauseJob, evRbPauseJob) into TransitionContainsEvents
!insert (trRbResumeJob, evRbResumeJob) into TransitionContainsEvents
!insert (trRbEmergencyTrip, evRbEmergencyTrip) into TransitionContainsEvents
!insert (trRbEnterService, evRbEnterService) into TransitionContainsEvents
!insert (trRbServiceComplete, evRbServiceComplete) into TransitionContainsEvents
!insert (trRbAutoHealthCheck, evRbAutoHealthCheck) into TransitionContainsEvents


!insert (rbBoot, trRbBootComplete) into StateTransition
!insert (trRbBootComplete, rbIdle) into TransitionState

!insert (rbIdle, trRbStartJob) into StateTransition
!insert (trRbStartJob, rbActive) into TransitionState

!insert (rbActive, trRbPauseJob) into StateTransition
!insert (trRbPauseJob, rbPaused) into TransitionState

!insert (rbPaused, trRbResumeJob) into StateTransition
!insert (trRbResumeJob, rbActive) into TransitionState

!insert (rbActive, trRbEmergencyTrip) into StateTransition
!insert (trRbEmergencyTrip, rbEStop) into TransitionState

!insert (rbEStop, trRbEnterService) into StateTransition
!insert (trRbEnterService, rbService) into TransitionState

!insert (rbService, trRbServiceComplete) into StateTransition
!insert (trRbServiceComplete, rbIdle) into TransitionState

!insert (rbIdle, trRbAutoHealthCheck) into StateTransition
!insert (trRbAutoHealthCheck, rbIdle) into TransitionState



!new StateMachine('smTicketGate')
!smTicketGate.name := 'metroTicketGate'

!new State('tgLocked')
!tgLocked.name := 'locked'
!new State('tgReading')
!tgReading.name := 'readingTicket'
!new State('tgUnlocked')
!tgUnlocked.name := 'unlocked'
!new State('tgAlarm')
!tgAlarm.name := 'alarm'

!insert (smTicketGate, tgLocked) into StateMachineContainsStates
!insert (smTicketGate, tgReading) into StateMachineContainsStates
!insert (smTicketGate, tgUnlocked) into StateMachineContainsStates
!insert (smTicketGate, tgAlarm) into StateMachineContainsStates

!insert (smTicketGate, tgLocked) into StateMachineStartsStates

!new StateMachine('smTicketGateStartReading')
!smTicketGateStartReading.name := 'readingStartHelper'
!insert (smTicketGateStartReading, tgReading) into StateMachineStartsStates

!new StateMachine('smTicketGateStartUnlocked')
!smTicketGateStartUnlocked.name := 'unlockedStartHelper'
!insert (smTicketGateStartUnlocked, tgUnlocked) into StateMachineStartsStates

!new StateMachine('smTicketGateStartAlarm')
!smTicketGateStartAlarm.name := 'alarmStartHelper'
!insert (smTicketGateStartAlarm, tgAlarm) into StateMachineStartsStates


!new Transition('trTgPresentCard')
!trTgPresentCard.name := 'presentCard'
!new TimeEvent('evTgPresentCard')
!evTgPresentCard.time := 1

!new Transition('trTgValidateOk')
!trTgValidateOk.name := 'validateOk'
!new TimeEvent('evTgValidateOk')
!evTgValidateOk.time := 1

!new Transition('trTgValidateFail')
!trTgValidateFail.name := 'validateFail'
!new TimeEvent('evTgValidateFail')
!evTgValidateFail.time := 1

!new Transition('trTgPassThrough')
!trTgPassThrough.name := 'passThrough'
!new TimeEvent('evTgPassThrough')
!evTgPassThrough.time := 4

!new Transition('trTgUnlockTimeout')
!trTgUnlockTimeout.name := 'unlockTimeout'
!new TimeEvent('evTgUnlockTimeout')
!evTgUnlockTimeout.time := 6

!new Transition('trTgAlarmReset')
!trTgAlarmReset.name := 'alarmReset'
!new TimeEvent('evTgAlarmReset')
!evTgAlarmReset.time := 20


!insert (smTicketGate, trTgPresentCard) into StateMachineContainsTransitions
!insert (smTicketGate, trTgValidateOk) into StateMachineContainsTransitions
!insert (smTicketGate, trTgValidateFail) into StateMachineContainsTransitions
!insert (smTicketGate, trTgPassThrough) into StateMachineContainsTransitions
!insert (smTicketGate, trTgUnlockTimeout) into StateMachineContainsTransitions
!insert (smTicketGate, trTgAlarmReset) into StateMachineContainsTransitions

!insert (trTgPresentCard, evTgPresentCard) into TransitionContainsEvents
!insert (trTgValidateOk, evTgValidateOk) into TransitionContainsEvents
!insert (trTgValidateFail, evTgValidateFail) into TransitionContainsEvents
!insert (trTgPassThrough, evTgPassThrough) into TransitionContainsEvents
!insert (trTgUnlockTimeout, evTgUnlockTimeout) into TransitionContainsEvents
!insert (trTgAlarmReset, evTgAlarmReset) into TransitionContainsEvents


!insert (tgLocked, trTgPresentCard) into StateTransition
!insert (trTgPresentCard, tgReading) into TransitionState

!insert (tgReading, trTgValidateOk) into StateTransition
!insert (trTgValidateOk, tgUnlocked) into TransitionState

!insert (tgReading, trTgValidateFail) into StateTransition
!insert (trTgValidateFail, tgAlarm) into TransitionState

!insert (tgUnlocked, trTgPassThrough) into StateTransition
!insert (trTgPassThrough, tgLocked) into TransitionState

!insert (tgUnlocked, trTgUnlockTimeout) into StateTransition
!insert (trTgUnlockTimeout, tgLocked) into TransitionState

!insert (tgAlarm, trTgAlarmReset) into StateTransition
!insert (trTgAlarmReset, tgLocked) into TransitionState
```
## Generation 16 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 172 | 0.00% |
| Multiplicities Errors | 0 | 76 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

# Generation 17
```
!new StateMachine('smMusic')
!smMusic.name := 'musicPlayer'

!new State('mpStopped')
!mpStopped.name := 'stopped'
!new State('mpLoading')
!mpLoading.name := 'loading'
!new State('mpReady')
!mpReady.name := 'ready'
!new State('mpPlaying')
!mpPlaying.name := 'playing'
!new State('mpPaused')
!mpPaused.name := 'paused'
!new State('mpBuffering')
!mpBuffering.name := 'buffering'
!new State('mpError')
!mpError.name := 'error'

!insert (smMusic, mpStopped) into StateMachineContainsStates
!insert (smMusic, mpLoading) into StateMachineContainsStates
!insert (smMusic, mpReady) into StateMachineContainsStates
!insert (smMusic, mpPlaying) into StateMachineContainsStates
!insert (smMusic, mpPaused) into StateMachineContainsStates
!insert (smMusic, mpBuffering) into StateMachineContainsStates
!insert (smMusic, mpError) into StateMachineContainsStates

!insert (smMusic, mpStopped) into StateMachineStartsStates


!new Transition('tMpLoadTrack')
!tMpLoadTrack.name := 'loadTrack'
!new TimeEvent('evMpLoadTrack')
!evMpLoadTrack.time := 1

!new Transition('tMpLoadOk')
!tMpLoadOk.name := 'loadOk'
!new TimeEvent('evMpLoadOk')
!evMpLoadOk.time := 2

!new Transition('tMpLoadFail')
!tMpLoadFail.name := 'loadFail'
!new TimeEvent('evMpLoadFail')
!evMpLoadFail.time := 3

!new Transition('tMpPlay')
!tMpPlay.name := 'play'
!new TimeEvent('evMpPlay')
!evMpPlay.time := 1

!new Transition('tMpPause')
!tMpPause.name := 'pause'
!new TimeEvent('evMpPause')
!evMpPause.time := 1

!new Transition('tMpResume')
!tMpResume.name := 'resume'
!new TimeEvent('evMpResume')
!evMpResume.time := 1

!new Transition('tMpBufferStart')
!tMpBufferStart.name := 'bufferStart'
!new TimeEvent('evMpBufferStart')
!evMpBufferStart.time := 1

!new Transition('tMpBufferEnd')
!tMpBufferEnd.name := 'bufferEnd'
!new TimeEvent('evMpBufferEnd')
!evMpBufferEnd.time := 4

!new Transition('tMpStopFromPlaying')
!tMpStopFromPlaying.name := 'stop'
!new TimeEvent('evMpStopFromPlaying')
!evMpStopFromPlaying.time := 1

!new Transition('tMpStopFromPaused')
!tMpStopFromPaused.name := 'stop'
!new TimeEvent('evMpStopFromPaused')
!evMpStopFromPaused.time := 1

!new Transition('tMpRetryLoad')
!tMpRetryLoad.name := 'retryLoad'
!new TimeEvent('evMpRetryLoad')
!evMpRetryLoad.time := 5

!new Transition('tMpAutoShutdownTick')
!tMpAutoShutdownTick.name := 'autoShutdownTick'
!new TimeEvent('evMpAutoShutdownTick')
!evMpAutoShutdownTick.time := 600


!insert (smMusic, tMpLoadTrack) into StateMachineContainsTransitions
!insert (smMusic, tMpLoadOk) into StateMachineContainsTransitions
!insert (smMusic, tMpLoadFail) into StateMachineContainsTransitions
!insert (smMusic, tMpPlay) into StateMachineContainsTransitions
!insert (smMusic, tMpPause) into StateMachineContainsTransitions
!insert (smMusic, tMpResume) into StateMachineContainsTransitions
!insert (smMusic, tMpBufferStart) into StateMachineContainsTransitions
!insert (smMusic, tMpBufferEnd) into StateMachineContainsTransitions
!insert (smMusic, tMpStopFromPlaying) into StateMachineContainsTransitions
!insert (smMusic, tMpStopFromPaused) into StateMachineContainsTransitions
!insert (smMusic, tMpRetryLoad) into StateMachineContainsTransitions
!insert (smMusic, tMpAutoShutdownTick) into StateMachineContainsTransitions

!insert (tMpLoadTrack, evMpLoadTrack) into TransitionContainsEvents
!insert (tMpLoadOk, evMpLoadOk) into TransitionContainsEvents
!insert (tMpLoadFail, evMpLoadFail) into TransitionContainsEvents
!insert (tMpPlay, evMpPlay) into TransitionContainsEvents
!insert (tMpPause, evMpPause) into TransitionContainsEvents
!insert (tMpResume, evMpResume) into TransitionContainsEvents
!insert (tMpBufferStart, evMpBufferStart) into TransitionContainsEvents
!insert (tMpBufferEnd, evMpBufferEnd) into TransitionContainsEvents
!insert (tMpStopFromPlaying, evMpStopFromPlaying) into TransitionContainsEvents
!insert (tMpStopFromPaused, evMpStopFromPaused) into TransitionContainsEvents
!insert (tMpRetryLoad, evMpRetryLoad) into TransitionContainsEvents
!insert (tMpAutoShutdownTick, evMpAutoShutdownTick) into TransitionContainsEvents


!insert (mpStopped, tMpLoadTrack) into StateTransition
!insert (tMpLoadTrack, mpLoading) into TransitionState

!insert (mpLoading, tMpLoadOk) into StateTransition
!insert (tMpLoadOk, mpReady) into TransitionState

!insert (mpLoading, tMpLoadFail) into StateTransition
!insert (tMpLoadFail, mpError) into TransitionState

!insert (mpReady, tMpPlay) into StateTransition
!insert (tMpPlay, mpPlaying) into TransitionState

!insert (mpPlaying, tMpPause) into StateTransition
!insert (tMpPause, mpPaused) into TransitionState

!insert (mpPaused, tMpResume) into StateTransition
!insert (tMpResume, mpPlaying) into TransitionState

!insert (mpPlaying, tMpBufferStart) into StateTransition
!insert (tMpBufferStart, mpBuffering) into TransitionState

!insert (mpBuffering, tMpBufferEnd) into StateTransition
!insert (tMpBufferEnd, mpPlaying) into TransitionState

!insert (mpPlaying, tMpStopFromPlaying) into StateTransition
!insert (tMpStopFromPlaying, mpStopped) into TransitionState

!insert (mpPaused, tMpStopFromPaused) into StateTransition
!insert (tMpStopFromPaused, mpStopped) into TransitionState

!insert (mpError, tMpRetryLoad) into StateTransition
!insert (tMpRetryLoad, mpLoading) into TransitionState

!insert (mpStopped, tMpAutoShutdownTick) into StateTransition
!insert (tMpAutoShutdownTick, mpStopped) into TransitionState



!new StateMachine('smGreenhouse')
!smGreenhouse.name := 'greenhouseVentilation'

!new State('ghClosed')
!ghClosed.name := 'closed'
!new State('ghOpening')
!ghOpening.name := 'opening'
!new State('ghOpen')
!ghOpen.name := 'open'
!new State('ghClosing')
!ghClosing.name := 'closing'
!new State('ghJam')
!ghJam.name := 'jammed'

!insert (smGreenhouse, ghClosed) into StateMachineContainsStates
!insert (smGreenhouse, ghOpening) into StateMachineContainsStates
!insert (smGreenhouse, ghOpen) into StateMachineContainsStates
!insert (smGreenhouse, ghClosing) into StateMachineContainsStates
!insert (smGreenhouse, ghJam) into StateMachineContainsStates

!insert (smGreenhouse, ghClosed) into StateMachineStartsStates


!new Transition('tGhOpenCommand')
!tGhOpenCommand.name := 'openCommand'
!new TimeEvent('evGhOpenCommand')
!evGhOpenCommand.time := 1

!new Transition('tGhOpened')
!tGhOpened.name := 'opened'
!new TimeEvent('evGhOpened')
!evGhOpened.time := 12

!new Transition('tGhCloseCommand')
!tGhCloseCommand.name := 'closeCommand'
!new TimeEvent('evGhCloseCommand')
!evGhCloseCommand.time := 1

!new Transition('tGhClosed')
!tGhClosed.name := 'closed'
!new TimeEvent('evGhClosed')
!evGhClosed.time := 10

!new Transition('tGhJamOnOpen')
!tGhJamOnOpen.name := 'jamDetected'
!new TimeEvent('evGhJamOnOpen')
!evGhJamOnOpen.time := 2

!new Transition('tGhJamOnClose')
!tGhJamOnClose.name := 'jamDetected'
!new TimeEvent('evGhJamOnClose')
!evGhJamOnClose.time := 2

!new Transition('tGhReset')
!tGhReset.name := 'reset'
!new TimeEvent('evGhReset')
!evGhReset.time := 30


!insert (smGreenhouse, tGhOpenCommand) into StateMachineContainsTransitions
!insert (smGreenhouse, tGhOpened) into StateMachineContainsTransitions
!insert (smGreenhouse, tGhCloseCommand) into StateMachineContainsTransitions
!insert (smGreenhouse, tGhClosed) into StateMachineContainsTransitions
!insert (smGreenhouse, tGhJamOnOpen) into StateMachineContainsTransitions
!insert (smGreenhouse, tGhJamOnClose) into StateMachineContainsTransitions
!insert (smGreenhouse, tGhReset) into StateMachineContainsTransitions

!insert (tGhOpenCommand, evGhOpenCommand) into TransitionContainsEvents
!insert (tGhOpened, evGhOpened) into TransitionContainsEvents
!insert (tGhCloseCommand, evGhCloseCommand) into TransitionContainsEvents
!insert (tGhClosed, evGhClosed) into TransitionContainsEvents
!insert (tGhJamOnOpen, evGhJamOnOpen) into TransitionContainsEvents
!insert (tGhJamOnClose, evGhJamOnClose) into TransitionContainsEvents
!insert (tGhReset, evGhReset) into TransitionContainsEvents


!insert (ghClosed, tGhOpenCommand) into StateTransition
!insert (tGhOpenCommand, ghOpening) into TransitionState

!insert (ghOpening, tGhOpened) into StateTransition
!insert (tGhOpened, ghOpen) into TransitionState

!insert (ghOpen, tGhCloseCommand) into StateTransition
!insert (tGhCloseCommand, ghClosing) into TransitionState

!insert (ghClosing, tGhClosed) into StateTransition
!insert (tGhClosed, ghClosed) into TransitionState

!insert (ghOpening, tGhJamOnOpen) into StateTransition
!insert (tGhJamOnOpen, ghJam) into TransitionState

!insert (ghClosing, tGhJamOnClose) into StateTransition
!insert (tGhJamOnClose, ghJam) into TransitionState

!insert (ghJam, tGhReset) into StateTransition
!insert (tGhReset, ghClosed) into TransitionState
```
## Generation 17 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 194 | 0.00% |
| Multiplicities Errors | 0 | 90 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

# Generation 18
```
!new StateMachine('smBaggage')
!smBaggage.name := 'baggageHandlingSystem'

!new State('bgWaiting')
!bgWaiting.name := 'waiting'
!new State('bgScanning')
!bgScanning.name := 'scanning'
!new State('bgRouting')
!bgRouting.name := 'routing'
!new State('bgLoading')
!bgLoading.name := 'loading'
!new State('bgInTransit')
!bgInTransit.name := 'inTransit'
!new State('bgDelivered')
!bgDelivered.name := 'delivered'
!new State('bgMisrouted')
!bgMisrouted.name := 'misrouted'
!new State('bgException')
!bgException.name := 'exception'

!insert (smBaggage, bgWaiting) into StateMachineContainsStates
!insert (smBaggage, bgScanning) into StateMachineContainsStates
!insert (smBaggage, bgRouting) into StateMachineContainsStates
!insert (smBaggage, bgLoading) into StateMachineContainsStates
!insert (smBaggage, bgInTransit) into StateMachineContainsStates
!insert (smBaggage, bgDelivered) into StateMachineContainsStates
!insert (smBaggage, bgMisrouted) into StateMachineContainsStates
!insert (smBaggage, bgException) into StateMachineContainsStates

!insert (smBaggage, bgWaiting) into StateMachineStartsStates


!new Transition('trBagCheckIn')
!trBagCheckIn.name := 'checkInAccepted'
!new TimeEvent('evBagCheckIn')
!evBagCheckIn.time := 1

!new Transition('trBagScanOk')
!trBagScanOk.name := 'scanOk'
!new TimeEvent('evBagScanOk')
!evBagScanOk.time := 2

!new Transition('trBagScanFail')
!trBagScanFail.name := 'scanFail'
!new TimeEvent('evBagScanFail')
!evBagScanFail.time := 3

!new Transition('trBagRouteAssigned')
!trBagRouteAssigned.name := 'routeAssigned'
!new TimeEvent('evBagRouteAssigned')
!evBagRouteAssigned.time := 5

!new Transition('trBagLoadCart')
!trBagLoadCart.name := 'loadToCart'
!new TimeEvent('evBagLoadCart')
!evBagLoadCart.time := 4

!new Transition('trBagDepartTerminal')
!trBagDepartTerminal.name := 'departTerminal'
!new TimeEvent('evBagDepartTerminal')
!evBagDepartTerminal.time := 12

!new Transition('trBagArriveClaim')
!trBagArriveClaim.name := 'arriveClaimBelt'
!new TimeEvent('evBagArriveClaim')
!evBagArriveClaim.time := 20

!new Transition('trBagClaimed')
!trBagClaimed.name := 'claimedByPassenger'
!new TimeEvent('evBagClaimed')
!evBagClaimed.time := 30

!new Transition('trBagMisrouteDetected')
!trBagMisrouteDetected.name := 'misrouteDetected'
!new TimeEvent('evBagMisrouteDetected')
!evBagMisrouteDetected.time := 1

!new Transition('trBagReRoute')
!trBagReRoute.name := 'reroute'
!new TimeEvent('evBagReRoute')
!evBagReRoute.time := 10

!new Transition('trBagManualException')
!trBagManualException.name := 'manualException'
!new TimeEvent('evBagManualException')
!evBagManualException.time := 1

!new Transition('trBagResolveException')
!trBagResolveException.name := 'resolveException'
!new TimeEvent('evBagResolveException')
!evBagResolveException.time := 25


!insert (smBaggage, trBagCheckIn) into StateMachineContainsTransitions
!insert (smBaggage, trBagScanOk) into StateMachineContainsTransitions
!insert (smBaggage, trBagScanFail) into StateMachineContainsTransitions
!insert (smBaggage, trBagRouteAssigned) into StateMachineContainsTransitions
!insert (smBaggage, trBagLoadCart) into StateMachineContainsTransitions
!insert (smBaggage, trBagDepartTerminal) into StateMachineContainsTransitions
!insert (smBaggage, trBagArriveClaim) into StateMachineContainsTransitions
!insert (smBaggage, trBagClaimed) into StateMachineContainsTransitions
!insert (smBaggage, trBagMisrouteDetected) into StateMachineContainsTransitions
!insert (smBaggage, trBagReRoute) into StateMachineContainsTransitions
!insert (smBaggage, trBagManualException) into StateMachineContainsTransitions
!insert (smBaggage, trBagResolveException) into StateMachineContainsTransitions

!insert (trBagCheckIn, evBagCheckIn) into TransitionContainsEvents
!insert (trBagScanOk, evBagScanOk) into TransitionContainsEvents
!insert (trBagScanFail, evBagScanFail) into TransitionContainsEvents
!insert (trBagRouteAssigned, evBagRouteAssigned) into TransitionContainsEvents
!insert (trBagLoadCart, evBagLoadCart) into TransitionContainsEvents
!insert (trBagDepartTerminal, evBagDepartTerminal) into TransitionContainsEvents
!insert (trBagArriveClaim, evBagArriveClaim) into TransitionContainsEvents
!insert (trBagClaimed, evBagClaimed) into TransitionContainsEvents
!insert (trBagMisrouteDetected, evBagMisrouteDetected) into TransitionContainsEvents
!insert (trBagReRoute, evBagReRoute) into TransitionContainsEvents
!insert (trBagManualException, evBagManualException) into TransitionContainsEvents
!insert (trBagResolveException, evBagResolveException) into TransitionContainsEvents


!insert (bgWaiting, trBagCheckIn) into StateTransition
!insert (trBagCheckIn, bgScanning) into TransitionState

!insert (bgScanning, trBagScanOk) into StateTransition
!insert (trBagScanOk, bgRouting) into TransitionState

!insert (bgScanning, trBagScanFail) into StateTransition
!insert (trBagScanFail, bgException) into TransitionState

!insert (bgRouting, trBagRouteAssigned) into StateTransition
!insert (trBagRouteAssigned, bgLoading) into TransitionState

!insert (bgLoading, trBagLoadCart) into StateTransition
!insert (trBagLoadCart, bgInTransit) into TransitionState

!insert (bgInTransit, trBagDepartTerminal) into StateTransition
!insert (trBagDepartTerminal, bgInTransit) into TransitionState

!insert (bgInTransit, trBagArriveClaim) into StateTransition
!insert (trBagArriveClaim, bgDelivered) into TransitionState

!insert (bgDelivered, trBagClaimed) into StateTransition
!insert (trBagClaimed, bgWaiting) into TransitionState

!insert (bgRouting, trBagMisrouteDetected) into StateTransition
!insert (trBagMisrouteDetected, bgMisrouted) into TransitionState

!insert (bgMisrouted, trBagReRoute) into StateTransition
!insert (trBagReRoute, bgRouting) into TransitionState

!insert (bgLoading, trBagManualException) into StateTransition
!insert (trBagManualException, bgException) into TransitionState

!insert (bgException, trBagResolveException) into StateTransition
!insert (trBagResolveException, bgScanning) into TransitionState



!new StateMachine('smNewsletter')
!smNewsletter.name := 'newsletterSignup'

!new State('nsDraft')
!nsDraft.name := 'draft'
!new State('nsPending')
!nsPending.name := 'pendingConfirmation'
!new State('nsConfirmed')
!nsConfirmed.name := 'confirmed'
!new State('nsExpired')
!nsExpired.name := 'expired'

!insert (smNewsletter, nsDraft) into StateMachineContainsStates
!insert (smNewsletter, nsPending) into StateMachineContainsStates
!insert (smNewsletter, nsConfirmed) into StateMachineContainsStates
!insert (smNewsletter, nsExpired) into StateMachineContainsStates

!insert (smNewsletter, nsDraft) into StateMachineStartsStates


!new Transition('trNsSubmitEmail')
!trNsSubmitEmail.name := 'submitEmail'
!new TimeEvent('evNsSubmitEmail')
!evNsSubmitEmail.time := 1

!new Transition('trNsConfirmLink')
!trNsConfirmLink.name := 'confirmLink'
!new TimeEvent('evNsConfirmLink')
!evNsConfirmLink.time := 3

!new Transition('trNsConfirmTimeout')
!trNsConfirmTimeout.name := 'confirmTimeout'
!new TimeEvent('evNsConfirmTimeout')
!evNsConfirmTimeout.time := 1440

!new Transition('trNsResubscribe')
!trNsResubscribe.name := 'resubscribe'
!new TimeEvent('evNsResubscribe')
!evNsResubscribe.time := 2


!insert (smNewsletter, trNsSubmitEmail) into StateMachineContainsTransitions
!insert (smNewsletter, trNsConfirmLink) into StateMachineContainsTransitions
!insert (smNewsletter, trNsConfirmTimeout) into StateMachineContainsTransitions
!insert (smNewsletter, trNsResubscribe) into StateMachineContainsTransitions

!insert (trNsSubmitEmail, evNsSubmitEmail) into TransitionContainsEvents
!insert (trNsConfirmLink, evNsConfirmLink) into TransitionContainsEvents
!insert (trNsConfirmTimeout, evNsConfirmTimeout) into TransitionContainsEvents
!insert (trNsResubscribe, evNsResubscribe) into TransitionContainsEvents


!insert (nsDraft, trNsSubmitEmail) into StateTransition
!insert (trNsSubmitEmail, nsPending) into TransitionState

!insert (nsPending, trNsConfirmLink) into StateTransition
!insert (trNsConfirmLink, nsConfirmed) into TransitionState

!insert (nsPending, trNsConfirmTimeout) into StateTransition
!insert (trNsConfirmTimeout, nsExpired) into TransitionState

!insert (nsExpired, trNsResubscribe) into StateTransition
!insert (trNsResubscribe, nsPending) into TransitionState
```
## Generation 18 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 170 | 0.00% |
| Multiplicities Errors | 0 | 78 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

# Generation 19
```
!new StateMachine('smRover')
!smRover.name := 'marsRoverMission'

!new State('rvAsleep')
!rvAsleep.name := 'asleep'
!new State('rvBooting')
!rvBooting.name := 'booting'
!new State('rvSelfCheck')
!rvSelfCheck.name := 'selfCheck'
!new State('rvWaiting')
!rvWaiting.name := 'waitingCommand'
!new State('rvDriving')
!rvDriving.name := 'driving'
!new State('rvSampling')
!rvSampling.name := 'sampling'
!new State('rvUploading')
!rvUploading.name := 'uploading'
!new State('rvSafeMode')
!rvSafeMode.name := 'safeMode'

!insert (smRover, rvAsleep) into StateMachineContainsStates
!insert (smRover, rvBooting) into StateMachineContainsStates
!insert (smRover, rvSelfCheck) into StateMachineContainsStates
!insert (smRover, rvWaiting) into StateMachineContainsStates
!insert (smRover, rvDriving) into StateMachineContainsStates
!insert (smRover, rvSampling) into StateMachineContainsStates
!insert (smRover, rvUploading) into StateMachineContainsStates
!insert (smRover, rvSafeMode) into StateMachineContainsStates

!insert (smRover, rvAsleep) into StateMachineStartsStates


!new Transition('tRvWake')
!tRvWake.name := 'wakeUp'
!new TimeEvent('eRvWake')
!eRvWake.time := 1

!new Transition('tRvBootDone')
!tRvBootDone.name := 'bootDone'
!new TimeEvent('eRvBootDone')
!eRvBootDone.time := 15

!new Transition('tRvCheckOk')
!tRvCheckOk.name := 'checkOk'
!new TimeEvent('eRvCheckOk')
!eRvCheckOk.time := 30

!new Transition('tRvDriveCmd')
!tRvDriveCmd.name := 'receiveDriveCommand'
!new TimeEvent('eRvDriveCmd')
!eRvDriveCmd.time := 2

!new Transition('tRvReachWaypoint')
!tRvReachWaypoint.name := 'reachWaypoint'
!new TimeEvent('eRvReachWaypoint')
!eRvReachWaypoint.time := 600

!new Transition('tRvStartSampling')
!tRvStartSampling.name := 'startSampling'
!new TimeEvent('eRvStartSampling')
!eRvStartSampling.time := 1

!new Transition('tRvSampleDone')
!tRvSampleDone.name := 'sampleDone'
!new TimeEvent('eRvSampleDone')
!eRvSampleDone.time := 180

!new Transition('tRvStartUpload')
!tRvStartUpload.name := 'startUpload'
!new TimeEvent('eRvStartUpload')
!eRvStartUpload.time := 1

!new Transition('tRvUploadDone')
!tRvUploadDone.name := 'uploadDone'
!new TimeEvent('eRvUploadDone')
!eRvUploadDone.time := 120

!new Transition('tRvAnomaly')
!tRvAnomaly.name := 'anomalyDetected'
!new TimeEvent('eRvAnomaly')
!eRvAnomaly.time := 1

!new Transition('tRvRecover')
!tRvRecover.name := 'recover'
!new TimeEvent('eRvRecover')
!eRvRecover.time := 300

!new Transition('tRvSleep')
!tRvSleep.name := 'enterSleep'
!new TimeEvent('eRvSleep')
!eRvSleep.time := 3600


!insert (smRover, tRvWake) into StateMachineContainsTransitions
!insert (smRover, tRvBootDone) into StateMachineContainsTransitions
!insert (smRover, tRvCheckOk) into StateMachineContainsTransitions
!insert (smRover, tRvDriveCmd) into StateMachineContainsTransitions
!insert (smRover, tRvReachWaypoint) into StateMachineContainsTransitions
!insert (smRover, tRvStartSampling) into StateMachineContainsTransitions
!insert (smRover, tRvSampleDone) into StateMachineContainsTransitions
!insert (smRover, tRvStartUpload) into StateMachineContainsTransitions
!insert (smRover, tRvUploadDone) into StateMachineContainsTransitions
!insert (smRover, tRvAnomaly) into StateMachineContainsTransitions
!insert (smRover, tRvRecover) into StateMachineContainsTransitions
!insert (smRover, tRvSleep) into StateMachineContainsTransitions

!insert (tRvWake, eRvWake) into TransitionContainsEvents
!insert (tRvBootDone, eRvBootDone) into TransitionContainsEvents
!insert (tRvCheckOk, eRvCheckOk) into TransitionContainsEvents
!insert (tRvDriveCmd, eRvDriveCmd) into TransitionContainsEvents
!insert (tRvReachWaypoint, eRvReachWaypoint) into TransitionContainsEvents
!insert (tRvStartSampling, eRvStartSampling) into TransitionContainsEvents
!insert (tRvSampleDone, eRvSampleDone) into TransitionContainsEvents
!insert (tRvStartUpload, eRvStartUpload) into TransitionContainsEvents
!insert (tRvUploadDone, eRvUploadDone) into TransitionContainsEvents
!insert (tRvAnomaly, eRvAnomaly) into TransitionContainsEvents
!insert (tRvRecover, eRvRecover) into TransitionContainsEvents
!insert (tRvSleep, eRvSleep) into TransitionContainsEvents


!insert (rvAsleep, tRvWake) into StateTransition
!insert (tRvWake, rvBooting) into TransitionState

!insert (rvBooting, tRvBootDone) into StateTransition
!insert (tRvBootDone, rvSelfCheck) into TransitionState

!insert (rvSelfCheck, tRvCheckOk) into StateTransition
!insert (tRvCheckOk, rvWaiting) into TransitionState

!insert (rvWaiting, tRvDriveCmd) into StateTransition
!insert (tRvDriveCmd, rvDriving) into TransitionState

!insert (rvDriving, tRvReachWaypoint) into StateTransition
!insert (tRvReachWaypoint, rvWaiting) into TransitionState

!insert (rvWaiting, tRvStartSampling) into StateTransition
!insert (tRvStartSampling, rvSampling) into TransitionState

!insert (rvSampling, tRvSampleDone) into StateTransition
!insert (tRvSampleDone, rvWaiting) into TransitionState

!insert (rvWaiting, tRvStartUpload) into StateTransition
!insert (tRvStartUpload, rvUploading) into TransitionState

!insert (rvUploading, tRvUploadDone) into StateTransition
!insert (tRvUploadDone, rvWaiting) into TransitionState

!insert (rvDriving, tRvAnomaly) into StateTransition
!insert (tRvAnomaly, rvSafeMode) into TransitionState

!insert (rvSafeMode, tRvRecover) into StateTransition
!insert (tRvRecover, rvWaiting) into TransitionState

!insert (rvWaiting, tRvSleep) into StateTransition
!insert (tRvSleep, rvAsleep) into TransitionState



!new StateMachine('smHotelRoom')
!smHotelRoom.name := 'hotelRoomKeycard'

!new State('htVacant')
!htVacant.name := 'vacant'
!new State('htOccupied')
!htOccupied.name := 'occupied'
!new State('htDnd')
!htDnd.name := 'doNotDisturb'
!new State('htCleaning')
!htCleaning.name := 'cleaning'
!new State('htMaintenance')
!htMaintenance.name := 'maintenance'

!insert (smHotelRoom, htVacant) into StateMachineContainsStates
!insert (smHotelRoom, htOccupied) into StateMachineContainsStates
!insert (smHotelRoom, htDnd) into StateMachineContainsStates
!insert (smHotelRoom, htCleaning) into StateMachineContainsStates
!insert (smHotelRoom, htMaintenance) into StateMachineContainsStates

!insert (smHotelRoom, htVacant) into StateMachineStartsStates


!new Transition('tHtCheckIn')
!tHtCheckIn.name := 'checkIn'
!new TimeEvent('eHtCheckIn')
!eHtCheckIn.time := 1

!new Transition('tHtEnableDnd')
!tHtEnableDnd.name := 'enableDnd'
!new TimeEvent('eHtEnableDnd')
!eHtEnableDnd.time := 1

!new Transition('tHtDisableDnd')
!tHtDisableDnd.name := 'disableDnd'
!new TimeEvent('eHtDisableDnd')
!eHtDisableDnd.time := 1

!new Transition('tHtCheckOut')
!tHtCheckOut.name := 'checkOut'
!new TimeEvent('eHtCheckOut')
!eHtCheckOut.time := 1

!new Transition('tHtFinishClean')
!tHtFinishClean.name := 'finishCleaning'
!new TimeEvent('eHtFinishClean')
!eHtFinishClean.time := 45

!new Transition('tHtReportIssue')
!tHtReportIssue.name := 'reportIssue'
!new TimeEvent('eHtReportIssue')
!eHtReportIssue.time := 2

!new Transition('tHtFixRoom')
!tHtFixRoom.name := 'fixRoom'
!new TimeEvent('eHtFixRoom')
!eHtFixRoom.time := 240

!new Transition('tHtAutoInspect')
!tHtAutoInspect.name := 'autoInspect'
!new TimeEvent('eHtAutoInspect')
!eHtAutoInspect.time := 1440


!insert (smHotelRoom, tHtCheckIn) into StateMachineContainsTransitions
!insert (smHotelRoom, tHtEnableDnd) into StateMachineContainsTransitions
!insert (smHotelRoom, tHtDisableDnd) into StateMachineContainsTransitions
!insert (smHotelRoom, tHtCheckOut) into StateMachineContainsTransitions
!insert (smHotelRoom, tHtFinishClean) into StateMachineContainsTransitions
!insert (smHotelRoom, tHtReportIssue) into StateMachineContainsTransitions
!insert (smHotelRoom, tHtFixRoom) into StateMachineContainsTransitions
!insert (smHotelRoom, tHtAutoInspect) into StateMachineContainsTransitions

!insert (tHtCheckIn, eHtCheckIn) into TransitionContainsEvents
!insert (tHtEnableDnd, eHtEnableDnd) into TransitionContainsEvents
!insert (tHtDisableDnd, eHtDisableDnd) into TransitionContainsEvents
!insert (tHtCheckOut, eHtCheckOut) into TransitionContainsEvents
!insert (tHtFinishClean, eHtFinishClean) into TransitionContainsEvents
!insert (tHtReportIssue, eHtReportIssue) into TransitionContainsEvents
!insert (tHtFixRoom, eHtFixRoom) into TransitionContainsEvents
!insert (tHtAutoInspect, eHtAutoInspect) into TransitionContainsEvents


!insert (htVacant, tHtCheckIn) into StateTransition
!insert (tHtCheckIn, htOccupied) into TransitionState

!insert (htOccupied, tHtEnableDnd) into StateTransition
!insert (tHtEnableDnd, htDnd) into TransitionState

!insert (htDnd, tHtDisableDnd) into StateTransition
!insert (tHtDisableDnd, htOccupied) into TransitionState

!insert (htOccupied, tHtCheckOut) into StateTransition
!insert (tHtCheckOut, htCleaning) into TransitionState

!insert (htCleaning, tHtFinishClean) into StateTransition
!insert (tHtFinishClean, htVacant) into TransitionState

!insert (htCleaning, tHtReportIssue) into StateTransition
!insert (tHtReportIssue, htMaintenance) into TransitionState

!insert (htMaintenance, tHtFixRoom) into StateTransition
!insert (tHtFixRoom, htVacant) into TransitionState

!insert (htVacant, tHtAutoInspect) into StateTransition
!insert (tHtAutoInspect, htVacant) into TransitionState
```
## Generation 19 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 205 | 0.00% |
| Multiplicities Errors | 0 | 95 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

# Generation 20
```
!new StateMachine('smPassport')
!smPassport.name := 'passportEGate'

!new State('ppIdle')
!ppIdle.name := 'idle'
!new State('ppDocPresented')
!ppDocPresented.name := 'documentPresented'
!new State('ppScanning')
!ppScanning.name := 'scanning'
!new State('ppBiometric')
!ppBiometric.name := 'biometricCheck'
!new State('ppApproved')
!ppApproved.name := 'approved'
!new State('ppRejected')
!ppRejected.name := 'rejected'
!new State('ppManual')
!ppManual.name := 'manualInspection'

!insert (smPassport, ppIdle) into StateMachineContainsStates
!insert (smPassport, ppDocPresented) into StateMachineContainsStates
!insert (smPassport, ppScanning) into StateMachineContainsStates
!insert (smPassport, ppBiometric) into StateMachineContainsStates
!insert (smPassport, ppApproved) into StateMachineContainsStates
!insert (smPassport, ppRejected) into StateMachineContainsStates
!insert (smPassport, ppManual) into StateMachineContainsStates

!insert (smPassport, ppIdle) into StateMachineStartsStates
!new StateMachine('smPassportStartDocPresented')
!smPassportStartDocPresented.name := 'docPresentedStart'
!insert (smPassportStartDocPresented, ppDocPresented) into StateMachineStartsStates
!new StateMachine('smPassportStartScanning')
!smPassportStartScanning.name := 'scanningStart'
!insert (smPassportStartScanning, ppScanning) into StateMachineStartsStates
!new StateMachine('smPassportStartBiometric')
!smPassportStartBiometric.name := 'biometricStart'
!insert (smPassportStartBiometric, ppBiometric) into StateMachineStartsStates
!new StateMachine('smPassportStartApproved')
!smPassportStartApproved.name := 'approvedStart'
!insert (smPassportStartApproved, ppApproved) into StateMachineStartsStates
!new StateMachine('smPassportStartRejected')
!smPassportStartRejected.name := 'rejectedStart'
!insert (smPassportStartRejected, ppRejected) into StateMachineStartsStates
!new StateMachine('smPassportStartManual')
!smPassportStartManual.name := 'manualStart'
!insert (smPassportStartManual, ppManual) into StateMachineStartsStates


!new Transition('trPpPresentDoc')
!trPpPresentDoc.name := 'presentDocument'
!new TimeEvent('evPpPresentDoc')
!evPpPresentDoc.time := 1

!new Transition('trPpBeginScan')
!trPpBeginScan.name := 'beginScan'
!new TimeEvent('evPpBeginScan')
!evPpBeginScan.time := 2

!new Transition('trPpScanOk')
!trPpScanOk.name := 'scanOk'
!new TimeEvent('evPpScanOk')
!evPpScanOk.time := 4

!new Transition('trPpScanFail')
!trPpScanFail.name := 'scanFail'
!new TimeEvent('evPpScanFail')
!evPpScanFail.time := 6

!new Transition('trPpBioOk')
!trPpBioOk.name := 'biometricOk'
!new TimeEvent('evPpBioOk')
!evPpBioOk.time := 5

!new Transition('trPpBioMismatch')
!trPpBioMismatch.name := 'biometricMismatch'
!new TimeEvent('evPpBioMismatch')
!evPpBioMismatch.time := 5

!new Transition('trPpApprovedExit')
!trPpApprovedExit.name := 'openGate'
!new TimeEvent('evPpApprovedExit')
!evPpApprovedExit.time := 3

!new Transition('trPpRejectedToManual')
!trPpRejectedToManual.name := 'sendToManual'
!new TimeEvent('evPpRejectedToManual')
!evPpRejectedToManual.time := 1

!new Transition('trPpManualCleared')
!trPpManualCleared.name := 'manualCleared'
!new TimeEvent('evPpManualCleared')
!evPpManualCleared.time := 900

!new Transition('trPpManualDenied')
!trPpManualDenied.name := 'manualDenied'
!new TimeEvent('evPpManualDenied')
!evPpManualDenied.time := 900

!new Transition('trPpSessionTimeout')
!trPpSessionTimeout.name := 'sessionTimeout'
!new TimeEvent('evPpSessionTimeout')
!evPpSessionTimeout.time := 45


!insert (smPassport, trPpPresentDoc) into StateMachineContainsTransitions
!insert (smPassport, trPpBeginScan) into StateMachineContainsTransitions
!insert (smPassport, trPpScanOk) into StateMachineContainsTransitions
!insert (smPassport, trPpScanFail) into StateMachineContainsTransitions
!insert (smPassport, trPpBioOk) into StateMachineContainsTransitions
!insert (smPassport, trPpBioMismatch) into StateMachineContainsTransitions
!insert (smPassport, trPpApprovedExit) into StateMachineContainsTransitions
!insert (smPassport, trPpRejectedToManual) into StateMachineContainsTransitions
!insert (smPassport, trPpManualCleared) into StateMachineContainsTransitions
!insert (smPassport, trPpManualDenied) into StateMachineContainsTransitions
!insert (smPassport, trPpSessionTimeout) into StateMachineContainsTransitions

!insert (trPpPresentDoc, evPpPresentDoc) into TransitionContainsEvents
!insert (trPpBeginScan, evPpBeginScan) into TransitionContainsEvents
!insert (trPpScanOk, evPpScanOk) into TransitionContainsEvents
!insert (trPpScanFail, evPpScanFail) into TransitionContainsEvents
!insert (trPpBioOk, evPpBioOk) into TransitionContainsEvents
!insert (trPpBioMismatch, evPpBioMismatch) into TransitionContainsEvents
!insert (trPpApprovedExit, evPpApprovedExit) into TransitionContainsEvents
!insert (trPpRejectedToManual, evPpRejectedToManual) into TransitionContainsEvents
!insert (trPpManualCleared, evPpManualCleared) into TransitionContainsEvents
!insert (trPpManualDenied, evPpManualDenied) into TransitionContainsEvents
!insert (trPpSessionTimeout, evPpSessionTimeout) into TransitionContainsEvents


!insert (ppIdle, trPpPresentDoc) into StateTransition
!insert (trPpPresentDoc, ppDocPresented) into TransitionState

!insert (ppDocPresented, trPpBeginScan) into StateTransition
!insert (trPpBeginScan, ppScanning) into TransitionState

!insert (ppScanning, trPpScanOk) into StateTransition
!insert (trPpScanOk, ppBiometric) into TransitionState

!insert (ppScanning, trPpScanFail) into StateTransition
!insert (trPpScanFail, ppRejected) into TransitionState

!insert (ppBiometric, trPpBioOk) into StateTransition
!insert (trPpBioOk, ppApproved) into TransitionState

!insert (ppBiometric, trPpBioMismatch) into StateTransition
!insert (trPpBioMismatch, ppRejected) into TransitionState

!insert (ppApproved, trPpApprovedExit) into StateTransition
!insert (trPpApprovedExit, ppIdle) into TransitionState

!insert (ppRejected, trPpRejectedToManual) into StateTransition
!insert (trPpRejectedToManual, ppManual) into TransitionState

!insert (ppManual, trPpManualCleared) into StateTransition
!insert (trPpManualCleared, ppApproved) into TransitionState

!insert (ppManual, trPpManualDenied) into StateTransition
!insert (trPpManualDenied, ppRejected) into TransitionState

!insert (ppDocPresented, trPpSessionTimeout) into StateTransition
!insert (trPpSessionTimeout, ppIdle) into TransitionState



!new StateMachine('smInverter')
!smInverter.name := 'solarInverterControl'

!new State('invOffline')
!invOffline.name := 'offline'
!new State('invStarting')
!invStarting.name := 'starting'
!new State('invSyncing')
!invSyncing.name := 'syncingToGrid'
!new State('invProducing')
!invProducing.name := 'producing'
!new State('invDerating')
!invDerating.name := 'derating'
!new State('invFault')
!invFault.name := 'fault'
!new State('invShutdown')
!invShutdown.name := 'shutdown'

!insert (smInverter, invOffline) into StateMachineContainsStates
!insert (smInverter, invStarting) into StateMachineContainsStates
!insert (smInverter, invSyncing) into StateMachineContainsStates
!insert (smInverter, invProducing) into StateMachineContainsStates
!insert (smInverter, invDerating) into StateMachineContainsStates
!insert (smInverter, invFault) into StateMachineContainsStates
!insert (smInverter, invShutdown) into StateMachineContainsStates

!insert (smInverter, invOffline) into StateMachineStartsStates
!new StateMachine('smInverterStartStarting')
!smInverterStartStarting.name := 'startingStart'
!insert (smInverterStartStarting, invStarting) into StateMachineStartsStates
!new StateMachine('smInverterStartSyncing')
!smInverterStartSyncing.name := 'syncingStart'
!insert (smInverterStartSyncing, invSyncing) into StateMachineStartsStates
!new StateMachine('smInverterStartProducing')
!smInverterStartProducing.name := 'producingStart'
!insert (smInverterStartProducing, invProducing) into StateMachineStartsStates
!new StateMachine('smInverterStartDerating')
!smInverterStartDerating.name := 'deratingStart'
!insert (smInverterStartDerating, invDerating) into StateMachineStartsStates
!new StateMachine('smInverterStartFault')
!smInverterStartFault.name := 'faultStart'
!insert (smInverterStartFault, invFault) into StateMachineStartsStates
!new StateMachine('smInverterStartShutdown')
!smInverterStartShutdown.name := 'shutdownStart'
!insert (smInverterStartShutdown, invShutdown) into StateMachineStartsStates


!new Transition('trInvPowerOn')
!trInvPowerOn.name := 'powerOn'
!new TimeEvent('evInvPowerOn')
!evInvPowerOn.time := 1

!new Transition('trInvInitComplete')
!trInvInitComplete.name := 'initComplete'
!new TimeEvent('evInvInitComplete')
!evInvInitComplete.time := 8

!new Transition('trInvGridSyncOk')
!trInvGridSyncOk.name := 'gridSyncOk'
!new TimeEvent('evInvGridSyncOk')
!evInvGridSyncOk.time := 12

!new Transition('trInvOverTemp')
!trInvOverTemp.name := 'overTemperature'
!new TimeEvent('evInvOverTemp')
!evInvOverTemp.time := 3

!new Transition('trInvTempNormal')
!trInvTempNormal.name := 'temperatureNormal'
!new TimeEvent('evInvTempNormal')
!evInvTempNormal.time := 120

!new Transition('trInvFaultTripStart')
!trInvFaultTripStart.name := 'faultTrip'
!new TimeEvent('evInvFaultTripStart')
!evInvFaultTripStart.time := 1

!new Transition('trInvFaultTripRun')
!trInvFaultTripRun.name := 'faultTrip'
!new TimeEvent('evInvFaultTripRun')
!evInvFaultTripRun.time := 1

!new Transition('trInvResetFault')
!trInvResetFault.name := 'resetFault'
!new TimeEvent('evInvResetFault')
!evInvResetFault.time := 60

!new Transition('trInvShutdownCmd')
!trInvShutdownCmd.name := 'shutdownCommand'
!new TimeEvent('evInvShutdownCmd')
!evInvShutdownCmd.time := 2

!new Transition('trInvShutdownComplete')
!trInvShutdownComplete.name := 'shutdownComplete'
!new TimeEvent('evInvShutdownComplete')
!evInvShutdownComplete.time := 10

!new Transition('trInvHeartbeat')
!trInvHeartbeat.name := 'heartbeat'
!new TimeEvent('evInvHeartbeat')
!evInvHeartbeat.time := 300


!insert (smInverter, trInvPowerOn) into StateMachineContainsTransitions
!insert (smInverter, trInvInitComplete) into StateMachineContainsTransitions
!insert (smInverter, trInvGridSyncOk) into StateMachineContainsTransitions
!insert (smInverter, trInvOverTemp) into StateMachineContainsTransitions
!insert (smInverter, trInvTempNormal) into StateMachineContainsTransitions
!insert (smInverter, trInvFaultTripStart) into StateMachineContainsTransitions
!insert (smInverter, trInvFaultTripRun) into StateMachineContainsTransitions
!insert (smInverter, trInvResetFault) into StateMachineContainsTransitions
!insert (smInverter, trInvShutdownCmd) into StateMachineContainsTransitions
!insert (smInverter, trInvShutdownComplete) into StateMachineContainsTransitions
!insert (smInverter, trInvHeartbeat) into StateMachineContainsTransitions

!insert (trInvPowerOn, evInvPowerOn) into TransitionContainsEvents
!insert (trInvInitComplete, evInvInitComplete) into TransitionContainsEvents
!insert (trInvGridSyncOk, evInvGridSyncOk) into TransitionContainsEvents
!insert (trInvOverTemp, evInvOverTemp) into TransitionContainsEvents
!insert (trInvTempNormal, evInvTempNormal) into TransitionContainsEvents
!insert (trInvFaultTripStart, evInvFaultTripStart) into TransitionContainsEvents
!insert (trInvFaultTripRun, evInvFaultTripRun) into TransitionContainsEvents
!insert (trInvResetFault, evInvResetFault) into TransitionContainsEvents
!insert (trInvShutdownCmd, evInvShutdownCmd) into TransitionContainsEvents
!insert (trInvShutdownComplete, evInvShutdownComplete) into TransitionContainsEvents
!insert (trInvHeartbeat, evInvHeartbeat) into TransitionContainsEvents


!insert (invOffline, trInvPowerOn) into StateTransition
!insert (trInvPowerOn, invStarting) into TransitionState

!insert (invStarting, trInvInitComplete) into StateTransition
!insert (trInvInitComplete, invSyncing) into TransitionState

!insert (invSyncing, trInvGridSyncOk) into StateTransition
!insert (trInvGridSyncOk, invProducing) into TransitionState

!insert (invProducing, trInvOverTemp) into StateTransition
!insert (trInvOverTemp, invDerating) into TransitionState

!insert (invDerating, trInvTempNormal) into StateTransition
!insert (trInvTempNormal, invProducing) into TransitionState

!insert (invStarting, trInvFaultTripStart) into StateTransition
!insert (trInvFaultTripStart, invFault) into TransitionState

!insert (invProducing, trInvFaultTripRun) into StateTransition
!insert (trInvFaultTripRun, invFault) into TransitionState

!insert (invFault, trInvResetFault) into StateTransition
!insert (trInvResetFault, invStarting) into TransitionState

!insert (invProducing, trInvShutdownCmd) into StateTransition
!insert (trInvShutdownCmd, invShutdown) into TransitionState

!insert (invShutdown, trInvShutdownComplete) into StateTransition
!insert (trInvShutdownComplete, invOffline) into TransitionState

!insert (invProducing, trInvHeartbeat) into StateTransition
!insert (trInvHeartbeat, invProducing) into TransitionState
```
## Generation 20 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 260 | 0.00% |
| Multiplicities Errors | 0 | 116 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

# Generation 21
```
!new StateMachine('smSmartGrid')
!smSmartGrid.name := 'smartGridTrading'

!new State('sgStandby')
!sgStandby.name := 'standby'
!new State('sgForecasting')
!sgForecasting.name := 'forecasting'
!new State('sgBidding')
!sgBidding.name := 'bidding'
!new State('sgDispatching')
!sgDispatching.name := 'dispatching'
!new State('sgSettling')
!sgSettling.name := 'settling'
!new State('sgSuspended')
!sgSuspended.name := 'suspended'

!insert (smSmartGrid, sgStandby) into StateMachineContainsStates
!insert (smSmartGrid, sgForecasting) into StateMachineContainsStates
!insert (smSmartGrid, sgBidding) into StateMachineContainsStates
!insert (smSmartGrid, sgDispatching) into StateMachineContainsStates
!insert (smSmartGrid, sgSettling) into StateMachineContainsStates
!insert (smSmartGrid, sgSuspended) into StateMachineContainsStates

!insert (smSmartGrid, sgStandby) into StateMachineStartsStates


!new Transition('trSgStartForecast')
!trSgStartForecast.name := 'startForecast'
!new TimeEvent('evSgStartForecast')
!evSgStartForecast.time := 5

!new Transition('trSgForecastComplete')
!trSgForecastComplete.name := 'forecastComplete'
!new TimeEvent('evSgForecastComplete')
!evSgForecastComplete.time := 60

!new Transition('trSgPlaceBids')
!trSgPlaceBids.name := 'placeBids'
!new TimeEvent('evSgPlaceBids')
!evSgPlaceBids.time := 15

!new Transition('trSgBidWindowClose')
!trSgBidWindowClose.name := 'bidWindowClose'
!new TimeEvent('evSgBidWindowClose')
!evSgBidWindowClose.time := 30

!new Transition('trSgDispatchStart')
!trSgDispatchStart.name := 'dispatchStart'
!new TimeEvent('evSgDispatchStart')
!evSgDispatchStart.time := 10

!new Transition('trSgDispatchTick')
!trSgDispatchTick.name := 'dispatchTick'
!new TimeEvent('evSgDispatchTick')
!evSgDispatchTick.time := 1

!new Transition('trSgSettleCycle')
!trSgSettleCycle.name := 'settleCycle'
!new TimeEvent('evSgSettleCycle')
!evSgSettleCycle.time := 120

!new Transition('trSgSettleDone')
!trSgSettleDone.name := 'settleDone'
!new TimeEvent('evSgSettleDone')
!evSgSettleDone.time := 20

!new Transition('trSgRegulationSuspend')
!trSgRegulationSuspend.name := 'regulationSuspend'
!new TimeEvent('evSgRegulationSuspend')
!evSgRegulationSuspend.time := 2

!new Transition('trSgResumeAfterReview')
!trSgResumeAfterReview.name := 'resumeAfterReview'
!new TimeEvent('evSgResumeAfterReview')
!evSgResumeAfterReview.time := 300

!new Transition('trSgStandbyHealthPing')
!trSgStandbyHealthPing.name := 'healthPing'
!new TimeEvent('evSgStandbyHealthPing')
!evSgStandbyHealthPing.time := 900


!insert (smSmartGrid, trSgStartForecast) into StateMachineContainsTransitions
!insert (smSmartGrid, trSgForecastComplete) into StateMachineContainsTransitions
!insert (smSmartGrid, trSgPlaceBids) into StateMachineContainsTransitions
!insert (smSmartGrid, trSgBidWindowClose) into StateMachineContainsTransitions
!insert (smSmartGrid, trSgDispatchStart) into StateMachineContainsTransitions
!insert (smSmartGrid, trSgDispatchTick) into StateMachineContainsTransitions
!insert (smSmartGrid, trSgSettleCycle) into StateMachineContainsTransitions
!insert (smSmartGrid, trSgSettleDone) into StateMachineContainsTransitions
!insert (smSmartGrid, trSgRegulationSuspend) into StateMachineContainsTransitions
!insert (smSmartGrid, trSgResumeAfterReview) into StateMachineContainsTransitions
!insert (smSmartGrid, trSgStandbyHealthPing) into StateMachineContainsTransitions

!insert (trSgStartForecast, evSgStartForecast) into TransitionContainsEvents
!insert (trSgForecastComplete, evSgForecastComplete) into TransitionContainsEvents
!insert (trSgPlaceBids, evSgPlaceBids) into TransitionContainsEvents
!insert (trSgBidWindowClose, evSgBidWindowClose) into TransitionContainsEvents
!insert (trSgDispatchStart, evSgDispatchStart) into TransitionContainsEvents
!insert (trSgDispatchTick, evSgDispatchTick) into TransitionContainsEvents
!insert (trSgSettleCycle, evSgSettleCycle) into TransitionContainsEvents
!insert (trSgSettleDone, evSgSettleDone) into TransitionContainsEvents
!insert (trSgRegulationSuspend, evSgRegulationSuspend) into TransitionContainsEvents
!insert (trSgResumeAfterReview, evSgResumeAfterReview) into TransitionContainsEvents
!insert (trSgStandbyHealthPing, evSgStandbyHealthPing) into TransitionContainsEvents


!insert (sgStandby, trSgStartForecast) into StateTransition
!insert (trSgStartForecast, sgForecasting) into TransitionState

!insert (sgForecasting, trSgForecastComplete) into StateTransition
!insert (trSgForecastComplete, sgBidding) into TransitionState

!insert (sgBidding, trSgPlaceBids) into StateTransition
!insert (trSgPlaceBids, sgBidding) into TransitionState

!insert (sgBidding, trSgBidWindowClose) into StateTransition
!insert (trSgBidWindowClose, sgDispatching) into TransitionState

!insert (sgDispatching, trSgDispatchStart) into StateTransition
!insert (trSgDispatchStart, sgDispatching) into TransitionState

!insert (sgDispatching, trSgDispatchTick) into StateTransition
!insert (trSgDispatchTick, sgSettling) into TransitionState

!insert (sgSettling, trSgSettleCycle) into StateTransition
!insert (trSgSettleCycle, sgSettling) into TransitionState

!insert (sgSettling, trSgSettleDone) into StateTransition
!insert (trSgSettleDone, sgStandby) into TransitionState

!insert (sgDispatching, trSgRegulationSuspend) into StateTransition
!insert (trSgRegulationSuspend, sgSuspended) into TransitionState

!insert (sgSuspended, trSgResumeAfterReview) into StateTransition
!insert (trSgResumeAfterReview, sgStandby) into TransitionState

!insert (sgStandby, trSgStandbyHealthPing) into StateTransition
!insert (trSgStandbyHealthPing, sgStandby) into TransitionState



!new StateMachine('smChatOps')
!smChatOps.name := 'customerChatOperations'

!new State('chNew')
!chNew.name := 'new'
!new State('chQueued')
!chQueued.name := 'queued'
!new State('chAssigned')
!chAssigned.name := 'assigned'
!new State('chActive')
!chActive.name := 'active'
!new State('chWaitingCustomer')
!chWaitingCustomer.name := 'waitingCustomer'
!new State('chResolved')
!chResolved.name := 'resolved'
!new State('chEscalated')
!chEscalated.name := 'escalated'

!insert (smChatOps, chNew) into StateMachineContainsStates
!insert (smChatOps, chQueued) into StateMachineContainsStates
!insert (smChatOps, chAssigned) into StateMachineContainsStates
!insert (smChatOps, chActive) into StateMachineContainsStates
!insert (smChatOps, chWaitingCustomer) into StateMachineContainsStates
!insert (smChatOps, chResolved) into StateMachineContainsStates
!insert (smChatOps, chEscalated) into StateMachineContainsStates

!insert (smChatOps, chNew) into StateMachineStartsStates


!new Transition('trChAutoQueue')
!trChAutoQueue.name := 'autoQueue'
!new TimeEvent('evChAutoQueue')
!evChAutoQueue.time := 1

!new Transition('trChAssignAgent')
!trChAssignAgent.name := 'assignAgent'
!new TimeEvent('evChAssignAgent')
!evChAssignAgent.time := 2

!new Transition('trChAcceptChat')
!trChAcceptChat.name := 'acceptChat'
!new TimeEvent('evChAcceptChat')
!evChAcceptChat.time := 1

!new Transition('trChCustomerSilent')
!trChCustomerSilent.name := 'customerSilent'
!new TimeEvent('evChCustomerSilent')
!evChCustomerSilent.time := 180

!new Transition('trChCustomerReplies')
!trChCustomerReplies.name := 'customerReplies'
!new TimeEvent('evChCustomerReplies')
!evChCustomerReplies.time := 15

!new Transition('trChResolve')
!trChResolve.name := 'resolve'
!new TimeEvent('evChResolve')
!evChResolve.time := 5

!new Transition('trChEscalate')
!trChEscalate.name := 'escalate'
!new TimeEvent('evChEscalate')
!evChEscalate.time := 10

!new Transition('trChReopenFromResolved')
!trChReopenFromResolved.name := 'reopen'
!new TimeEvent('evChReopenFromResolved')
!evChReopenFromResolved.time := 30

!new Transition('trChEscalationComplete')
!trChEscalationComplete.name := 'escalationComplete'
!new TimeEvent('evChEscalationComplete')
!evChEscalationComplete.time := 240


!insert (smChatOps, trChAutoQueue) into StateMachineContainsTransitions
!insert (smChatOps, trChAssignAgent) into StateMachineContainsTransitions
!insert (smChatOps, trChAcceptChat) into StateMachineContainsTransitions
!insert (smChatOps, trChCustomerSilent) into StateMachineContainsTransitions
!insert (smChatOps, trChCustomerReplies) into StateMachineContainsTransitions
!insert (smChatOps, trChResolve) into StateMachineContainsTransitions
!insert (smChatOps, trChEscalate) into StateMachineContainsTransitions
!insert (smChatOps, trChReopenFromResolved) into StateMachineContainsTransitions
!insert (smChatOps, trChEscalationComplete) into StateMachineContainsTransitions

!insert (trChAutoQueue, evChAutoQueue) into TransitionContainsEvents
!insert (trChAssignAgent, evChAssignAgent) into TransitionContainsEvents
!insert (trChAcceptChat, evChAcceptChat) into TransitionContainsEvents
!insert (trChCustomerSilent, evChCustomerSilent) into TransitionContainsEvents
!insert (trChCustomerReplies, evChCustomerReplies) into TransitionContainsEvents
!insert (trChResolve, evChResolve) into TransitionContainsEvents
!insert (trChEscalate, evChEscalate) into TransitionContainsEvents
!insert (trChReopenFromResolved, evChReopenFromResolved) into TransitionContainsEvents
!insert (trChEscalationComplete, evChEscalationComplete) into TransitionContainsEvents


!insert (chNew, trChAutoQueue) into StateTransition
!insert (trChAutoQueue, chQueued) into TransitionState

!insert (chQueued, trChAssignAgent) into StateTransition
!insert (trChAssignAgent, chAssigned) into TransitionState

!insert (chAssigned, trChAcceptChat) into StateTransition
!insert (trChAcceptChat, chActive) into TransitionState

!insert (chActive, trChCustomerSilent) into StateTransition
!insert (trChCustomerSilent, chWaitingCustomer) into TransitionState

!insert (chWaitingCustomer, trChCustomerReplies) into StateTransition
!insert (trChCustomerReplies, chActive) into TransitionState

!insert (chActive, trChResolve) into StateTransition
!insert (trChResolve, chResolved) into TransitionState

!insert (chActive, trChEscalate) into StateTransition
!insert (trChEscalate, chEscalated) into TransitionState

!insert (chResolved, trChReopenFromResolved) into StateTransition
!insert (trChReopenFromResolved, chQueued) into TransitionState

!insert (chEscalated, trChEscalationComplete) into StateTransition
!insert (trChEscalationComplete, chResolved) into TransitionState
```
## Generation 21 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 205 | 0.00% |
| Multiplicities Errors | 0 | 95 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

# Generation 22
```
!new StateMachine('smStateNew')
!smStateNew.name := 'orderStateNew'
!new State('stNew')
!stNew.name := 'new'
!insert (smStateNew, stNew) into StateMachineContainsStates
!insert (smStateNew, stNew) into StateMachineStartsStates

!new StateMachine('smStatePacked')
!smStatePacked.name := 'orderStatePacked'
!new State('stPacked')
!stPacked.name := 'packed'
!insert (smStatePacked, stPacked) into StateMachineContainsStates
!insert (smStatePacked, stPacked) into StateMachineStartsStates

!new StateMachine('smStateShipped')
!smStateShipped.name := 'orderStateShipped'
!new State('stShipped')
!stShipped.name := 'shipped'
!insert (smStateShipped, stShipped) into StateMachineContainsStates
!insert (smStateShipped, stShipped) into StateMachineStartsStates

!new StateMachine('smStateDelivered')
!smStateDelivered.name := 'orderStateDelivered'
!new State('stDelivered')
!stDelivered.name := 'delivered'
!insert (smStateDelivered, stDelivered) into StateMachineContainsStates
!insert (smStateDelivered, stDelivered) into StateMachineStartsStates

!new StateMachine('smStateReturned')
!smStateReturned.name := 'orderStateReturned'
!new State('stReturned')
!stReturned.name := 'returned'
!insert (smStateReturned, stReturned) into StateMachineContainsStates
!insert (smStateReturned, stReturned) into StateMachineStartsStates

!new StateMachine('smStateCancelled')
!smStateCancelled.name := 'orderStateCancelled'
!new State('stCancelled')
!stCancelled.name := 'cancelled'
!insert (smStateCancelled, stCancelled) into StateMachineContainsStates
!insert (smStateCancelled, stCancelled) into StateMachineStartsStates


!new StateMachine('smLogisticsProcess')
!smLogisticsProcess.name := 'logisticsOrchestrator'

!new State('lpNew')
!lpNew.name := 'new'
!new State('lpPacked')
!lpPacked.name := 'packed'
!new State('lpShipped')
!lpShipped.name := 'shipped'
!new State('lpDelivered')
!lpDelivered.name := 'delivered'
!new State('lpReturned')
!lpReturned.name := 'returned'
!new State('lpCancelled')
!lpCancelled.name := 'cancelled'

!insert (smLogisticsProcess, lpNew) into StateMachineContainsStates
!insert (smLogisticsProcess, lpPacked) into StateMachineContainsStates
!insert (smLogisticsProcess, lpShipped) into StateMachineContainsStates
!insert (smLogisticsProcess, lpDelivered) into StateMachineContainsStates
!insert (smLogisticsProcess, lpReturned) into StateMachineContainsStates
!insert (smLogisticsProcess, lpCancelled) into StateMachineContainsStates

!insert (smLogisticsProcess, lpNew) into StateMachineStartsStates


!new Transition('trPackOrder')
!trPackOrder.name := 'packOrder'
!new TimeEvent('evPackOrder')
!evPackOrder.time := 45

!new Transition('trShipOrder')
!trShipOrder.name := 'handoverToCarrier'
!new TimeEvent('evShipOrder')
!evShipOrder.time := 180

!new Transition('trDeliverOrder')
!trDeliverOrder.name := 'deliverToCustomer'
!new TimeEvent('evDeliverOrder')
!evDeliverOrder.time := 2880

!new Transition('trCustomerReturn')
!trCustomerReturn.name := 'customerReturn'
!new TimeEvent('evCustomerReturn')
!evCustomerReturn.time := 10080

!new Transition('trReturnWindowCloses')
!trReturnWindowCloses.name := 'returnWindowCloses'
!new TimeEvent('evReturnWindowCloses')
!evReturnWindowCloses.time := 20160

!new Transition('trCancelBeforePacking')
!trCancelBeforePacking.name := 'cancelBeforePacking'
!new TimeEvent('evCancelBeforePacking')
!evCancelBeforePacking.time := 10

!new Transition('trReshipAfterReturn')
!trReshipAfterReturn.name := 'reshipReplacement'
!new TimeEvent('evReshipAfterReturn')
!evReshipAfterReturn.time := 7200


!insert (smLogisticsProcess, trPackOrder) into StateMachineContainsTransitions
!insert (smLogisticsProcess, trShipOrder) into StateMachineContainsTransitions
!insert (smLogisticsProcess, trDeliverOrder) into StateMachineContainsTransitions
!insert (smLogisticsProcess, trCustomerReturn) into StateMachineContainsTransitions
!insert (smLogisticsProcess, trReturnWindowCloses) into StateMachineContainsTransitions
!insert (smLogisticsProcess, trCancelBeforePacking) into StateMachineContainsTransitions
!insert (smLogisticsProcess, trReshipAfterReturn) into StateMachineContainsTransitions

!insert (trPackOrder, evPackOrder) into TransitionContainsEvents
!insert (trShipOrder, evShipOrder) into TransitionContainsEvents
!insert (trDeliverOrder, evDeliverOrder) into TransitionContainsEvents
!insert (trCustomerReturn, evCustomerReturn) into TransitionContainsEvents
!insert (trReturnWindowCloses, evReturnWindowCloses) into TransitionContainsEvents
!insert (trCancelBeforePacking, evCancelBeforePacking) into TransitionContainsEvents
!insert (trReshipAfterReturn, evReshipAfterReturn) into TransitionContainsEvents


!insert (lpNew, trPackOrder) into StateTransition
!insert (trPackOrder, lpPacked) into TransitionState

!insert (lpPacked, trShipOrder) into StateTransition
!insert (trShipOrder, lpShipped) into TransitionState

!insert (lpShipped, trDeliverOrder) into StateTransition
!insert (trDeliverOrder, lpDelivered) into TransitionState

!insert (lpDelivered, trCustomerReturn) into StateTransition
!insert (trCustomerReturn, lpReturned) into TransitionState

!insert (lpDelivered, trReturnWindowCloses) into StateTransition
!insert (trReturnWindowCloses, lpDelivered) into TransitionState

!insert (lpNew, trCancelBeforePacking) into StateTransition
!insert (trCancelBeforePacking, lpCancelled) into TransitionState

!insert (lpReturned, trReshipAfterReturn) into StateTransition
!insert (trReshipAfterReturn, lpShipped) into TransitionState



!new StateMachine('smWaterFilter')
!smWaterFilter.name := 'waterFilterController'

!new State('wfOperational')
!wfOperational.name := 'operational'
!insert (smWaterFilter, wfOperational) into StateMachineContainsStates
!insert (smWaterFilter, wfOperational) into StateMachineStartsStates

!new Transition('trWfFlushCycle')
!trWfFlushCycle.name := 'flushCycle'
!new TimeEvent('evWfFlushCycle')
!evWfFlushCycle.time := 30

!insert (smWaterFilter, trWfFlushCycle) into StateMachineContainsTransitions
!insert (trWfFlushCycle, evWfFlushCycle) into TransitionContainsEvents
!insert (wfOperational, trWfFlushCycle) into StateTransition
!insert (trWfFlushCycle, wfOperational) into TransitionState
```
## Generation 22 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 127 | 0.00% |
| Multiplicities Errors | 0 | 53 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

# Generation 23
```
!new StateMachine('smTriage')
!smTriage.name := 'erTriageWorkflow'

!new State('stArriving')
!stArriving.name := 'arriving'
!new State('stTriage')
!stTriage.name := 'triage'
!new State('stWaiting')
!stWaiting.name := 'waiting'
!new State('stTreatment')
!stTreatment.name := 'treatment'
!new State('stObservation')
!stObservation.name := 'observation'
!new State('stDischarged')
!stDischarged.name := 'discharged'
!new State('stAdmitted')
!stAdmitted.name := 'admitted'
!new State('stLeft')
!stLeft.name := 'leftWithoutBeingSeen'

!insert (smTriage, stArriving) into StateMachineContainsStates
!insert (smTriage, stTriage) into StateMachineContainsStates
!insert (smTriage, stWaiting) into StateMachineContainsStates
!insert (smTriage, stTreatment) into StateMachineContainsStates
!insert (smTriage, stObservation) into StateMachineContainsStates
!insert (smTriage, stDischarged) into StateMachineContainsStates
!insert (smTriage, stAdmitted) into StateMachineContainsStates
!insert (smTriage, stLeft) into StateMachineContainsStates

!insert (smTriage, stArriving) into StateMachineStartsStates


!new Transition('trRegister')
!trRegister.name := 'registerPatient'
!new TimeEvent('teRegister')
!teRegister.time := 2

!new Transition('trMinorDischarge')
!trMinorDischarge.name := 'minorIssueDischarge'
!new TimeEvent('teMinorDischarge')
!teMinorDischarge.time := 15

!new Transition('trAssignQueue')
!trAssignQueue.name := 'assignToQueue'
!new TimeEvent('teAssignQueue')
!teAssignQueue.time := 3

!new Transition('trLeaveWaiting')
!trLeaveWaiting.name := 'leaveDueToWait'
!new TimeEvent('teLeaveWaiting')
!teLeaveWaiting.time := 120

!new Transition('trCallIn')
!trCallIn.name := 'callInForTreatment'
!new TimeEvent('teCallIn')
!teCallIn.time := 45

!new Transition('trTreatToObs')
!trTreatToObs.name := 'moveToObservation'
!new TimeEvent('teTreatToObs')
!teTreatToObs.time := 60

!new Transition('trTreatAdmit')
!trTreatAdmit.name := 'admitFromTreatment'
!new TimeEvent('teTreatAdmit')
!teTreatAdmit.time := 30

!new Transition('trObsDischarge')
!trObsDischarge.name := 'dischargeAfterObservation'
!new TimeEvent('teObsDischarge')
!teObsDischarge.time := 240

!new Transition('trObsAdmit')
!trObsAdmit.name := 'admitAfterObservation'
!new TimeEvent('teObsAdmit')
!teObsAdmit.time := 180

!new Transition('trHospitalStayEnds')
!trHospitalStayEnds.name := 'hospitalStayEnds'
!new TimeEvent('teHospitalStayEnds')
!teHospitalStayEnds.time := 4320

!new Transition('trReturnLater')
!trReturnLater.name := 'returnLater'
!new TimeEvent('teReturnLater')
!teReturnLater.time := 1440

!new Transition('trNewVisit')
!trNewVisit.name := 'newVisit'
!new TimeEvent('teNewVisit')
!teNewVisit.time := 10080


!insert (smTriage, trRegister) into StateMachineContainsTransitions
!insert (smTriage, trMinorDischarge) into StateMachineContainsTransitions
!insert (smTriage, trAssignQueue) into StateMachineContainsTransitions
!insert (smTriage, trLeaveWaiting) into StateMachineContainsTransitions
!insert (smTriage, trCallIn) into StateMachineContainsTransitions
!insert (smTriage, trTreatToObs) into StateMachineContainsTransitions
!insert (smTriage, trTreatAdmit) into StateMachineContainsTransitions
!insert (smTriage, trObsDischarge) into StateMachineContainsTransitions
!insert (smTriage, trObsAdmit) into StateMachineContainsTransitions
!insert (smTriage, trHospitalStayEnds) into StateMachineContainsTransitions
!insert (smTriage, trReturnLater) into StateMachineContainsTransitions
!insert (smTriage, trNewVisit) into StateMachineContainsTransitions

!insert (trRegister, teRegister) into TransitionContainsEvents
!insert (trMinorDischarge, teMinorDischarge) into TransitionContainsEvents
!insert (trAssignQueue, teAssignQueue) into TransitionContainsEvents
!insert (trLeaveWaiting, teLeaveWaiting) into TransitionContainsEvents
!insert (trCallIn, teCallIn) into TransitionContainsEvents
!insert (trTreatToObs, teTreatToObs) into TransitionContainsEvents
!insert (trTreatAdmit, teTreatAdmit) into TransitionContainsEvents
!insert (trObsDischarge, teObsDischarge) into TransitionContainsEvents
!insert (trObsAdmit, teObsAdmit) into TransitionContainsEvents
!insert (trHospitalStayEnds, teHospitalStayEnds) into TransitionContainsEvents
!insert (trReturnLater, teReturnLater) into TransitionContainsEvents
!insert (trNewVisit, teNewVisit) into TransitionContainsEvents


!insert (stArriving, trRegister) into StateTransition
!insert (trRegister, stTriage) into TransitionState

!insert (stTriage, trMinorDischarge) into StateTransition
!insert (trMinorDischarge, stDischarged) into TransitionState

!insert (stTriage, trAssignQueue) into StateTransition
!insert (trAssignQueue, stWaiting) into TransitionState

!insert (stWaiting, trLeaveWaiting) into StateTransition
!insert (trLeaveWaiting, stLeft) into TransitionState

!insert (stWaiting, trCallIn) into StateTransition
!insert (trCallIn, stTreatment) into TransitionState

!insert (stTreatment, trTreatToObs) into StateTransition
!insert (trTreatToObs, stObservation) into TransitionState

!insert (stTreatment, trTreatAdmit) into StateTransition
!insert (trTreatAdmit, stAdmitted) into TransitionState

!insert (stObservation, trObsDischarge) into StateTransition
!insert (trObsDischarge, stDischarged) into TransitionState

!insert (stObservation, trObsAdmit) into StateTransition
!insert (trObsAdmit, stAdmitted) into TransitionState

!insert (stAdmitted, trHospitalStayEnds) into StateTransition
!insert (trHospitalStayEnds, stDischarged) into TransitionState

!insert (stLeft, trReturnLater) into StateTransition
!insert (trReturnLater, stArriving) into TransitionState

!insert (stDischarged, trNewVisit) into StateTransition
!insert (trNewVisit, stArriving) into TransitionState



!new StateMachine('smMigration')
!smMigration.name := 'dataMigrationJob'

!new State('mjPlanned')
!mjPlanned.name := 'planned'
!new State('mjRunning')
!mjRunning.name := 'running'
!new State('mjValidating')
!mjValidating.name := 'validating'
!new State('mjRolledBack')
!mjRolledBack.name := 'rolledBack'
!new State('mjCompleted')
!mjCompleted.name := 'completed'

!insert (smMigration, mjPlanned) into StateMachineContainsStates
!insert (smMigration, mjRunning) into StateMachineContainsStates
!insert (smMigration, mjValidating) into StateMachineContainsStates
!insert (smMigration, mjRolledBack) into StateMachineContainsStates
!insert (smMigration, mjCompleted) into StateMachineContainsStates

!insert (smMigration, mjPlanned) into StateMachineStartsStates


!new Transition('trMjStart')
!trMjStart.name := 'startJob'
!new TimeEvent('teMjStart')
!teMjStart.time := 1

!new Transition('trMjRunDone')
!trMjRunDone.name := 'runDone'
!new TimeEvent('teMjRunDone')
!teMjRunDone.time := 600

!new Transition('trMjValidateOk')
!trMjValidateOk.name := 'validateOk'
!new TimeEvent('teMjValidateOk')
!teMjValidateOk.time := 30

!new Transition('trMjValidateFail')
!trMjValidateFail.name := 'validateFail'
!new TimeEvent('teMjValidateFail')
!teMjValidateFail.time := 20

!new Transition('trMjRollbackDone')
!trMjRollbackDone.name := 'rollbackDone'
!new TimeEvent('teMjRollbackDone')
!teMjRollbackDone.time := 120


!insert (smMigration, trMjStart) into StateMachineContainsTransitions
!insert (smMigration, trMjRunDone) into StateMachineContainsTransitions
!insert (smMigration, trMjValidateOk) into StateMachineContainsTransitions
!insert (smMigration, trMjValidateFail) into StateMachineContainsTransitions
!insert (smMigration, trMjRollbackDone) into StateMachineContainsTransitions

!insert (trMjStart, teMjStart) into TransitionContainsEvents
!insert (trMjRunDone, teMjRunDone) into TransitionContainsEvents
!insert (trMjValidateOk, teMjValidateOk) into TransitionContainsEvents
!insert (trMjValidateFail, teMjValidateFail) into TransitionContainsEvents
!insert (trMjRollbackDone, teMjRollbackDone) into TransitionContainsEvents


!insert (mjPlanned, trMjStart) into StateTransition
!insert (trMjStart, mjRunning) into TransitionState

!insert (mjRunning, trMjRunDone) into StateTransition
!insert (trMjRunDone, mjValidating) into TransitionState

!insert (mjValidating, trMjValidateOk) into StateTransition
!insert (trMjValidateOk, mjCompleted) into TransitionState

!insert (mjValidating, trMjValidateFail) into StateTransition
!insert (trMjValidateFail, mjRolledBack) into TransitionState

!insert (mjRolledBack, trMjRollbackDone) into StateTransition
!insert (trMjRollbackDone, mjPlanned) into TransitionState
```
## Generation 23 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 181 | 0.00% |
| Multiplicities Errors | 0 | 83 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

# Generation 24
```
!new StateMachine('smFirePanel')
!smFirePanel.name := 'buildingFireAlarmPanel'

!new State('fpNormal')
!fpNormal.name := 'normal'
!new State('fpPreAlarm')
!fpPreAlarm.name := 'preAlarm'
!new State('fpAlarm')
!fpAlarm.name := 'alarm'
!new State('fpSilenced')
!fpSilenced.name := 'silenced'
!new State('fpResetting')
!fpResetting.name := 'resetting'
!new State('fpFault')
!fpFault.name := 'fault'

!insert (smFirePanel, fpNormal) into StateMachineContainsStates
!insert (smFirePanel, fpPreAlarm) into StateMachineContainsStates
!insert (smFirePanel, fpAlarm) into StateMachineContainsStates
!insert (smFirePanel, fpSilenced) into StateMachineContainsStates
!insert (smFirePanel, fpResetting) into StateMachineContainsStates
!insert (smFirePanel, fpFault) into StateMachineContainsStates

!insert (smFirePanel, fpNormal) into StateMachineStartsStates


!new Transition('trFpSmokeDetected')
!trFpSmokeDetected.name := 'smokeDetected'
!new TimeEvent('evFpSmokeDetected')
!evFpSmokeDetected.time := 1

!new Transition('trFpConfirmAlarm')
!trFpConfirmAlarm.name := 'confirmAlarm'
!new TimeEvent('evFpConfirmAlarm')
!evFpConfirmAlarm.time := 20

!new Transition('trFpFalseAlarmClear')
!trFpFalseAlarmClear.name := 'falseAlarmClear'
!new TimeEvent('evFpFalseAlarmClear')
!evFpFalseAlarmClear.time := 15

!new Transition('trFpManualAlarm')
!trFpManualAlarm.name := 'manualPullStation'
!new TimeEvent('evFpManualAlarm')
!evFpManualAlarm.time := 1

!new Transition('trFpSilenceAlarm')
!trFpSilenceAlarm.name := 'silenceAlarm'
!new TimeEvent('evFpSilenceAlarm')
!evFpSilenceAlarm.time := 2

!new Transition('trFpResetRequest')
!trFpResetRequest.name := 'resetRequest'
!new TimeEvent('evFpResetRequest')
!evFpResetRequest.time := 5

!new Transition('trFpResetComplete')
!trFpResetComplete.name := 'resetComplete'
!new TimeEvent('evFpResetComplete')
!evFpResetComplete.time := 30

!new Transition('trFpSupervisionFaultNormal')
!trFpSupervisionFaultNormal.name := 'supervisionFault'
!new TimeEvent('evFpSupervisionFaultNormal')
!evFpSupervisionFaultNormal.time := 3

!new Transition('trFpSupervisionFaultAlarm')
!trFpSupervisionFaultAlarm.name := 'supervisionFault'
!new TimeEvent('evFpSupervisionFaultAlarm')
!evFpSupervisionFaultAlarm.time := 3

!new Transition('trFpFaultCleared')
!trFpFaultCleared.name := 'faultCleared'
!new TimeEvent('evFpFaultCleared')
!evFpFaultCleared.time := 60

!new Transition('trFpStatusPoll')
!trFpStatusPoll.name := 'statusPoll'
!new TimeEvent('evFpStatusPoll')
!evFpStatusPoll.time := 300


!insert (smFirePanel, trFpSmokeDetected) into StateMachineContainsTransitions
!insert (smFirePanel, trFpConfirmAlarm) into StateMachineContainsTransitions
!insert (smFirePanel, trFpFalseAlarmClear) into StateMachineContainsTransitions
!insert (smFirePanel, trFpManualAlarm) into StateMachineContainsTransitions
!insert (smFirePanel, trFpSilenceAlarm) into StateMachineContainsTransitions
!insert (smFirePanel, trFpResetRequest) into StateMachineContainsTransitions
!insert (smFirePanel, trFpResetComplete) into StateMachineContainsTransitions
!insert (smFirePanel, trFpSupervisionFaultNormal) into StateMachineContainsTransitions
!insert (smFirePanel, trFpSupervisionFaultAlarm) into StateMachineContainsTransitions
!insert (smFirePanel, trFpFaultCleared) into StateMachineContainsTransitions
!insert (smFirePanel, trFpStatusPoll) into StateMachineContainsTransitions

!insert (trFpSmokeDetected, evFpSmokeDetected) into TransitionContainsEvents
!insert (trFpConfirmAlarm, evFpConfirmAlarm) into TransitionContainsEvents
!insert (trFpFalseAlarmClear, evFpFalseAlarmClear) into TransitionContainsEvents
!insert (trFpManualAlarm, evFpManualAlarm) into TransitionContainsEvents
!insert (trFpSilenceAlarm, evFpSilenceAlarm) into TransitionContainsEvents
!insert (trFpResetRequest, evFpResetRequest) into TransitionContainsEvents
!insert (trFpResetComplete, evFpResetComplete) into TransitionContainsEvents
!insert (trFpSupervisionFaultNormal, evFpSupervisionFaultNormal) into TransitionContainsEvents
!insert (trFpSupervisionFaultAlarm, evFpSupervisionFaultAlarm) into TransitionContainsEvents
!insert (trFpFaultCleared, evFpFaultCleared) into TransitionContainsEvents
!insert (trFpStatusPoll, evFpStatusPoll) into TransitionContainsEvents


!insert (fpNormal, trFpSmokeDetected) into StateTransition
!insert (trFpSmokeDetected, fpPreAlarm) into TransitionState

!insert (fpPreAlarm, trFpConfirmAlarm) into StateTransition
!insert (trFpConfirmAlarm, fpAlarm) into TransitionState

!insert (fpPreAlarm, trFpFalseAlarmClear) into StateTransition
!insert (trFpFalseAlarmClear, fpNormal) into TransitionState

!insert (fpNormal, trFpManualAlarm) into StateTransition
!insert (trFpManualAlarm, fpAlarm) into TransitionState

!insert (fpAlarm, trFpSilenceAlarm) into StateTransition
!insert (trFpSilenceAlarm, fpSilenced) into TransitionState

!insert (fpSilenced, trFpResetRequest) into StateTransition
!insert (trFpResetRequest, fpResetting) into TransitionState

!insert (fpResetting, trFpResetComplete) into StateTransition
!insert (trFpResetComplete, fpNormal) into TransitionState

!insert (fpNormal, trFpSupervisionFaultNormal) into StateTransition
!insert (trFpSupervisionFaultNormal, fpFault) into TransitionState

!insert (fpAlarm, trFpSupervisionFaultAlarm) into StateTransition
!insert (trFpSupervisionFaultAlarm, fpFault) into TransitionState

!insert (fpFault, trFpFaultCleared) into StateTransition
!insert (trFpFaultCleared, fpNormal) into TransitionState

!insert (fpNormal, trFpStatusPoll) into StateTransition
!insert (trFpStatusPoll, fpNormal) into TransitionState



!new StateMachine('smInvoice')
!smInvoice.name := 'invoiceBillingLifecycle'

!new State('ivDraft')
!ivDraft.name := 'draft'
!new State('ivIssued')
!ivIssued.name := 'issued'
!new State('ivDue')
!ivDue.name := 'due'
!new State('ivPaid')
!ivPaid.name := 'paid'
!new State('ivOverdue')
!ivOverdue.name := 'overdue'
!new State('ivWrittenOff')
!ivWrittenOff.name := 'writtenOff'

!insert (smInvoice, ivDraft) into StateMachineContainsStates
!insert (smInvoice, ivIssued) into StateMachineContainsStates
!insert (smInvoice, ivDue) into StateMachineContainsStates
!insert (smInvoice, ivPaid) into StateMachineContainsStates
!insert (smInvoice, ivOverdue) into StateMachineContainsStates
!insert (smInvoice, ivWrittenOff) into StateMachineContainsStates

!insert (smInvoice, ivDraft) into StateMachineStartsStates


!new Transition('trIvIssue')
!trIvIssue.name := 'issueInvoice'
!new TimeEvent('evIvIssue')
!evIvIssue.time := 1

!new Transition('trIvDueDateReached')
!trIvDueDateReached.name := 'dueDateReached'
!new TimeEvent('evIvDueDateReached')
!evIvDueDateReached.time := 43200

!new Transition('trIvPayOnTime')
!trIvPayOnTime.name := 'payOnTime'
!new TimeEvent('evIvPayOnTime')
!evIvPayOnTime.time := 10

!new Transition('trIvOverdueTick')
!trIvOverdueTick.name := 'overdueTick'
!new TimeEvent('evIvOverdueTick')
!evIvOverdueTick.time := 1440

!new Transition('trIvPayLate')
!trIvPayLate.name := 'payLate'
!new TimeEvent('evIvPayLate')
!evIvPayLate.time := 20

!new Transition('trIvWriteOff')
!trIvWriteOff.name := 'writeOff'
!new TimeEvent('evIvWriteOff')
!evIvWriteOff.time := 43200

!new Transition('trIvReminder')
!trIvReminder.name := 'sendReminder'
!new TimeEvent('evIvReminder')
!evIvReminder.time := 720

!new Transition('trIvReopenForCorrection')
!trIvReopenForCorrection.name := 'reopenForCorrection'
!new TimeEvent('evIvReopenForCorrection')
!evIvReopenForCorrection.time := 60


!insert (smInvoice, trIvIssue) into StateMachineContainsTransitions
!insert (smInvoice, trIvDueDateReached) into StateMachineContainsTransitions
!insert (smInvoice, trIvPayOnTime) into StateMachineContainsTransitions
!insert (smInvoice, trIvOverdueTick) into StateMachineContainsTransitions
!insert (smInvoice, trIvPayLate) into StateMachineContainsTransitions
!insert (smInvoice, trIvWriteOff) into StateMachineContainsTransitions
!insert (smInvoice, trIvReminder) into StateMachineContainsTransitions
!insert (smInvoice, trIvReopenForCorrection) into StateMachineContainsTransitions

!insert (trIvIssue, evIvIssue) into TransitionContainsEvents
!insert (trIvDueDateReached, evIvDueDateReached) into TransitionContainsEvents
!insert (trIvPayOnTime, evIvPayOnTime) into TransitionContainsEvents
!insert (trIvOverdueTick, evIvOverdueTick) into TransitionContainsEvents
!insert (trIvPayLate, evIvPayLate) into TransitionContainsEvents
!insert (trIvWriteOff, evIvWriteOff) into TransitionContainsEvents
!insert (trIvReminder, evIvReminder) into TransitionContainsEvents
!insert (trIvReopenForCorrection, evIvReopenForCorrection) into TransitionContainsEvents


!insert (ivDraft, trIvIssue) into StateTransition
!insert (trIvIssue, ivIssued) into TransitionState

!insert (ivIssued, trIvDueDateReached) into StateTransition
!insert (trIvDueDateReached, ivDue) into TransitionState

!insert (ivDue, trIvPayOnTime) into StateTransition
!insert (trIvPayOnTime, ivPaid) into TransitionState

!insert (ivDue, trIvOverdueTick) into StateTransition
!insert (trIvOverdueTick, ivOverdue) into TransitionState

!insert (ivOverdue, trIvPayLate) into StateTransition
!insert (trIvPayLate, ivPaid) into TransitionState

!insert (ivOverdue, trIvWriteOff) into StateTransition
!insert (trIvWriteOff, ivWrittenOff) into TransitionState

!insert (ivOverdue, trIvReminder) into StateTransition
!insert (trIvReminder, ivOverdue) into TransitionState

!insert (ivIssued, trIvReopenForCorrection) into StateTransition
!insert (trIvReopenForCorrection, ivDraft) into TransitionState
```
## Generation 24 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 194 | 0.00% |
| Multiplicities Errors | 0 | 90 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

# Generation 25
```
!new StateMachine('smCheckin')
!smCheckin.name := 'airlineCheckinProcess'

!new State('ciNotCheckedIn')
!ciNotCheckedIn.name := 'notCheckedIn'
!new State('ciIdentityVerified')
!ciIdentityVerified.name := 'identityVerified'
!new State('ciSeatSelected')
!ciSeatSelected.name := 'seatSelected'
!new State('ciBagsDropped')
!ciBagsDropped.name := 'bagsDropped'
!new State('ciPassIssued')
!ciPassIssued.name := 'boardingPassIssued'
!new State('ciSecurityCleared')
!ciSecurityCleared.name := 'securityCleared'
!new State('ciBoarded')
!ciBoarded.name := 'boarded'
!new State('ciMissedFlight')
!ciMissedFlight.name := 'missedFlight'

!insert (smCheckin, ciNotCheckedIn) into StateMachineContainsStates
!insert (smCheckin, ciIdentityVerified) into StateMachineContainsStates
!insert (smCheckin, ciSeatSelected) into StateMachineContainsStates
!insert (smCheckin, ciBagsDropped) into StateMachineContainsStates
!insert (smCheckin, ciPassIssued) into StateMachineContainsStates
!insert (smCheckin, ciSecurityCleared) into StateMachineContainsStates
!insert (smCheckin, ciBoarded) into StateMachineContainsStates
!insert (smCheckin, ciMissedFlight) into StateMachineContainsStates

!insert (smCheckin, ciNotCheckedIn) into StateMachineStartsStates


!new Transition('trCiVerifyIdentity')
!trCiVerifyIdentity.name := 'verifyIdentity'
!new TimeEvent('teCiVerifyIdentity')
!teCiVerifyIdentity.time := 2

!new Transition('trCiSelectSeat')
!trCiSelectSeat.name := 'selectSeat'
!new TimeEvent('teCiSelectSeat')
!teCiSelectSeat.time := 3

!new Transition('trCiDropBags')
!trCiDropBags.name := 'dropBags'
!new TimeEvent('teCiDropBags')
!teCiDropBags.time := 8

!new Transition('trCiIssuePass')
!trCiIssuePass.name := 'issueBoardingPass'
!new TimeEvent('teCiIssuePass')
!teCiIssuePass.time := 1

!new Transition('trCiReprintPass')
!trCiReprintPass.name := 'reprintPass'
!new TimeEvent('teCiReprintPass')
!teCiReprintPass.time := 1

!new Transition('trCiClearSecurity')
!trCiClearSecurity.name := 'clearSecurity'
!new TimeEvent('teCiClearSecurity')
!teCiClearSecurity.time := 25

!new Transition('trCiBoardPlane')
!trCiBoardPlane.name := 'boardPlane'
!new TimeEvent('teCiBoardPlane')
!teCiBoardPlane.time := 15

!new Transition('trCiNoShowFromNotCheckedIn')
!trCiNoShowFromNotCheckedIn.name := 'checkinClosed'
!new TimeEvent('teCiNoShowFromNotCheckedIn')
!teCiNoShowFromNotCheckedIn.time := 120

!new Transition('trCiNoShowFromPassIssued')
!trCiNoShowFromPassIssued.name := 'gateClosed'
!new TimeEvent('teCiNoShowFromPassIssued')
!teCiNoShowFromPassIssued.time := 75

!new Transition('trCiNoShowFromSecurityCleared')
!trCiNoShowFromSecurityCleared.name := 'boardingEnded'
!new TimeEvent('teCiNoShowFromSecurityCleared')
!teCiNoShowFromSecurityCleared.time := 20


!insert (smCheckin, trCiVerifyIdentity) into StateMachineContainsTransitions
!insert (smCheckin, trCiSelectSeat) into StateMachineContainsTransitions
!insert (smCheckin, trCiDropBags) into StateMachineContainsTransitions
!insert (smCheckin, trCiIssuePass) into StateMachineContainsTransitions
!insert (smCheckin, trCiReprintPass) into StateMachineContainsTransitions
!insert (smCheckin, trCiClearSecurity) into StateMachineContainsTransitions
!insert (smCheckin, trCiBoardPlane) into StateMachineContainsTransitions
!insert (smCheckin, trCiNoShowFromNotCheckedIn) into StateMachineContainsTransitions
!insert (smCheckin, trCiNoShowFromPassIssued) into StateMachineContainsTransitions
!insert (smCheckin, trCiNoShowFromSecurityCleared) into StateMachineContainsTransitions

!insert (trCiVerifyIdentity, teCiVerifyIdentity) into TransitionContainsEvents
!insert (trCiSelectSeat, teCiSelectSeat) into TransitionContainsEvents
!insert (trCiDropBags, teCiDropBags) into TransitionContainsEvents
!insert (trCiIssuePass, teCiIssuePass) into TransitionContainsEvents
!insert (trCiReprintPass, teCiReprintPass) into TransitionContainsEvents
!insert (trCiClearSecurity, teCiClearSecurity) into TransitionContainsEvents
!insert (trCiBoardPlane, teCiBoardPlane) into TransitionContainsEvents
!insert (trCiNoShowFromNotCheckedIn, teCiNoShowFromNotCheckedIn) into TransitionContainsEvents
!insert (trCiNoShowFromPassIssued, teCiNoShowFromPassIssued) into TransitionContainsEvents
!insert (trCiNoShowFromSecurityCleared, teCiNoShowFromSecurityCleared) into TransitionContainsEvents


!insert (ciNotCheckedIn, trCiVerifyIdentity) into StateTransition
!insert (trCiVerifyIdentity, ciIdentityVerified) into TransitionState

!insert (ciIdentityVerified, trCiSelectSeat) into StateTransition
!insert (trCiSelectSeat, ciSeatSelected) into TransitionState

!insert (ciSeatSelected, trCiDropBags) into StateTransition
!insert (trCiDropBags, ciBagsDropped) into TransitionState

!insert (ciBagsDropped, trCiIssuePass) into StateTransition
!insert (trCiIssuePass, ciPassIssued) into TransitionState

!insert (ciPassIssued, trCiReprintPass) into StateTransition
!insert (trCiReprintPass, ciPassIssued) into TransitionState

!insert (ciPassIssued, trCiClearSecurity) into StateTransition
!insert (trCiClearSecurity, ciSecurityCleared) into TransitionState

!insert (ciSecurityCleared, trCiBoardPlane) into StateTransition
!insert (trCiBoardPlane, ciBoarded) into TransitionState

!insert (ciNotCheckedIn, trCiNoShowFromNotCheckedIn) into StateTransition
!insert (trCiNoShowFromNotCheckedIn, ciMissedFlight) into TransitionState

!insert (ciPassIssued, trCiNoShowFromPassIssued) into StateTransition
!insert (trCiNoShowFromPassIssued, ciMissedFlight) into TransitionState

!insert (ciSecurityCleared, trCiNoShowFromSecurityCleared) into StateTransition
!insert (trCiNoShowFromSecurityCleared, ciMissedFlight) into TransitionState



!new StateMachine('smManuscript')
!smManuscript.name := 'manuscriptReview'

!new State('msDraft')
!msDraft.name := 'draft'
!new State('msSubmitted')
!msSubmitted.name := 'submitted'
!new State('msUnderReview')
!msUnderReview.name := 'underReview'
!new State('msAccepted')
!msAccepted.name := 'accepted'
!new State('msRejected')
!msRejected.name := 'rejected'

!insert (smManuscript, msDraft) into StateMachineContainsStates
!insert (smManuscript, msSubmitted) into StateMachineContainsStates
!insert (smManuscript, msUnderReview) into StateMachineContainsStates
!insert (smManuscript, msAccepted) into StateMachineContainsStates
!insert (smManuscript, msRejected) into StateMachineContainsStates

!insert (smManuscript, msDraft) into StateMachineStartsStates


!new Transition('trMsSubmit')
!trMsSubmit.name := 'submit'
!new TimeEvent('teMsSubmit')
!teMsSubmit.time := 1

!new Transition('trMsAssignReviewers')
!trMsAssignReviewers.name := 'assignReviewers'
!new TimeEvent('teMsAssignReviewers')
!teMsAssignReviewers.time := 1440

!new Transition('trMsAccept')
!trMsAccept.name := 'accept'
!new TimeEvent('teMsAccept')
!teMsAccept.time := 10080

!new Transition('trMsReject')
!trMsReject.name := 'reject'
!new TimeEvent('teMsReject')
!teMsReject.time := 10080

!new Transition('trMsReviseAfterReject')
!trMsReviseAfterReject.name := 'reviseAfterReject'
!new TimeEvent('teMsReviseAfterReject')
!teMsReviseAfterReject.time := 43200

!new Transition('trMsResubmit')
!trMsResubmit.name := 'resubmit'
!new TimeEvent('teMsResubmit')
!teMsResubmit.time := 5


!insert (smManuscript, trMsSubmit) into StateMachineContainsTransitions
!insert (smManuscript, trMsAssignReviewers) into StateMachineContainsTransitions
!insert (smManuscript, trMsAccept) into StateMachineContainsTransitions
!insert (smManuscript, trMsReject) into StateMachineContainsTransitions
!insert (smManuscript, trMsReviseAfterReject) into StateMachineContainsTransitions
!insert (smManuscript, trMsResubmit) into StateMachineContainsTransitions

!insert (trMsSubmit, teMsSubmit) into TransitionContainsEvents
!insert (trMsAssignReviewers, teMsAssignReviewers) into TransitionContainsEvents
!insert (trMsAccept, teMsAccept) into TransitionContainsEvents
!insert (trMsReject, teMsReject) into TransitionContainsEvents
!insert (trMsReviseAfterReject, teMsReviseAfterReject) into TransitionContainsEvents
!insert (trMsResubmit, teMsResubmit) into TransitionContainsEvents


!insert (msDraft, trMsSubmit) into StateTransition
!insert (trMsSubmit, msSubmitted) into TransitionState

!insert (msSubmitted, trMsAssignReviewers) into StateTransition
!insert (trMsAssignReviewers, msUnderReview) into TransitionState

!insert (msUnderReview, trMsAccept) into StateTransition
!insert (trMsAccept, msAccepted) into TransitionState

!insert (msUnderReview, trMsReject) into StateTransition
!insert (trMsReject, msRejected) into TransitionState

!insert (msRejected, trMsReviseAfterReject) into StateTransition
!insert (trMsReviseAfterReject, msDraft) into TransitionState

!insert (msDraft, trMsResubmit) into StateTransition
!insert (trMsResubmit, msSubmitted) into TransitionState
```
## Generation 25 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 173 | 0.00% |
| Multiplicities Errors | 0 | 79 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

# Generation 26
```
!new StateMachine('smBankTransfer')
!smBankTransfer.name := 'bankTransferWorkflow'

!new State('btInitiated')
!btInitiated.name := 'initiated'
!new State('btKycCheck')
!btKycCheck.name := 'kycCheck'
!new State('btAwaitingApproval')
!btAwaitingApproval.name := 'awaitingApproval'
!new State('btExecuting')
!btExecuting.name := 'executing'
!new State('btCompleted')
!btCompleted.name := 'completed'
!new State('btFailed')
!btFailed.name := 'failed'
!new State('btReversed')
!btReversed.name := 'reversed'

!insert (smBankTransfer, btInitiated) into StateMachineContainsStates
!insert (smBankTransfer, btKycCheck) into StateMachineContainsStates
!insert (smBankTransfer, btAwaitingApproval) into StateMachineContainsStates
!insert (smBankTransfer, btExecuting) into StateMachineContainsStates
!insert (smBankTransfer, btCompleted) into StateMachineContainsStates
!insert (smBankTransfer, btFailed) into StateMachineContainsStates
!insert (smBankTransfer, btReversed) into StateMachineContainsStates

!insert (smBankTransfer, btInitiated) into StateMachineStartsStates


!new Transition('trBtSubmitKyc')
!trBtSubmitKyc.name := 'submitKyc'
!new TimeEvent('evBtSubmitKyc')
!evBtSubmitKyc.time := 2

!new Transition('trBtKycPassed')
!trBtKycPassed.name := 'kycPassed'
!new TimeEvent('evBtKycPassed')
!evBtKycPassed.time := 30

!new Transition('trBtKycFailed')
!trBtKycFailed.name := 'kycFailed'
!new TimeEvent('evBtKycFailed')
!evBtKycFailed.time := 25

!new Transition('trBtApprovalGranted')
!trBtApprovalGranted.name := 'approvalGranted'
!new TimeEvent('evBtApprovalGranted')
!evBtApprovalGranted.time := 60

!new Transition('trBtApprovalTimeout')
!trBtApprovalTimeout.name := 'approvalTimeout'
!new TimeEvent('evBtApprovalTimeout')
!evBtApprovalTimeout.time := 120

!new Transition('trBtExecuteOk')
!trBtExecuteOk.name := 'executeOk'
!new TimeEvent('evBtExecuteOk')
!evBtExecuteOk.time := 5

!new Transition('trBtExecuteFail')
!trBtExecuteFail.name := 'executeFail'
!new TimeEvent('evBtExecuteFail')
!evBtExecuteFail.time := 5

!new Transition('trBtRetryExecution')
!trBtRetryExecution.name := 'retryExecution'
!new TimeEvent('evBtRetryExecution')
!evBtRetryExecution.time := 10

!new Transition('trBtCancelBeforeKyc')
!trBtCancelBeforeKyc.name := 'cancel'
!new TimeEvent('evBtCancelBeforeKyc')
!evBtCancelBeforeKyc.time := 1

!new Transition('trBtRequestReversal')
!trBtRequestReversal.name := 'requestReversal'
!new TimeEvent('evBtRequestReversal')
!evBtRequestReversal.time := 1440

!new Transition('trBtApprovalHeartbeat')
!trBtApprovalHeartbeat.name := 'approvalHeartbeat'
!new TimeEvent('evBtApprovalHeartbeat')
!evBtApprovalHeartbeat.time := 15


!insert (smBankTransfer, trBtSubmitKyc) into StateMachineContainsTransitions
!insert (smBankTransfer, trBtKycPassed) into StateMachineContainsTransitions
!insert (smBankTransfer, trBtKycFailed) into StateMachineContainsTransitions
!insert (smBankTransfer, trBtApprovalGranted) into StateMachineContainsTransitions
!insert (smBankTransfer, trBtApprovalTimeout) into StateMachineContainsTransitions
!insert (smBankTransfer, trBtExecuteOk) into StateMachineContainsTransitions
!insert (smBankTransfer, trBtExecuteFail) into StateMachineContainsTransitions
!insert (smBankTransfer, trBtRetryExecution) into StateMachineContainsTransitions
!insert (smBankTransfer, trBtCancelBeforeKyc) into StateMachineContainsTransitions
!insert (smBankTransfer, trBtRequestReversal) into StateMachineContainsTransitions
!insert (smBankTransfer, trBtApprovalHeartbeat) into StateMachineContainsTransitions

!insert (trBtSubmitKyc, evBtSubmitKyc) into TransitionContainsEvents
!insert (trBtKycPassed, evBtKycPassed) into TransitionContainsEvents
!insert (trBtKycFailed, evBtKycFailed) into TransitionContainsEvents
!insert (trBtApprovalGranted, evBtApprovalGranted) into TransitionContainsEvents
!insert (trBtApprovalTimeout, evBtApprovalTimeout) into TransitionContainsEvents
!insert (trBtExecuteOk, evBtExecuteOk) into TransitionContainsEvents
!insert (trBtExecuteFail, evBtExecuteFail) into TransitionContainsEvents
!insert (trBtRetryExecution, evBtRetryExecution) into TransitionContainsEvents
!insert (trBtCancelBeforeKyc, evBtCancelBeforeKyc) into TransitionContainsEvents
!insert (trBtRequestReversal, evBtRequestReversal) into TransitionContainsEvents
!insert (trBtApprovalHeartbeat, evBtApprovalHeartbeat) into TransitionContainsEvents


!insert (btInitiated, trBtSubmitKyc) into StateTransition
!insert (trBtSubmitKyc, btKycCheck) into TransitionState

!insert (btKycCheck, trBtKycPassed) into StateTransition
!insert (trBtKycPassed, btAwaitingApproval) into TransitionState

!insert (btKycCheck, trBtKycFailed) into StateTransition
!insert (trBtKycFailed, btFailed) into TransitionState

!insert (btAwaitingApproval, trBtApprovalGranted) into StateTransition
!insert (trBtApprovalGranted, btExecuting) into TransitionState

!insert (btAwaitingApproval, trBtApprovalTimeout) into StateTransition
!insert (trBtApprovalTimeout, btFailed) into TransitionState

!insert (btExecuting, trBtExecuteOk) into StateTransition
!insert (trBtExecuteOk, btCompleted) into TransitionState

!insert (btExecuting, trBtExecuteFail) into StateTransition
!insert (trBtExecuteFail, btFailed) into TransitionState

!insert (btFailed, trBtRetryExecution) into StateTransition
!insert (trBtRetryExecution, btExecuting) into TransitionState

!insert (btInitiated, trBtCancelBeforeKyc) into StateTransition
!insert (trBtCancelBeforeKyc, btFailed) into TransitionState

!insert (btCompleted, trBtRequestReversal) into StateTransition
!insert (trBtRequestReversal, btReversed) into TransitionState

!insert (btAwaitingApproval, trBtApprovalHeartbeat) into StateTransition
!insert (trBtApprovalHeartbeat, btAwaitingApproval) into TransitionState



!new StateMachine('smMatchmaking')
!smMatchmaking.name := 'gameMatchmaking'

!new State('mmIdle')
!mmIdle.name := 'idle'
!new State('mmSearching')
!mmSearching.name := 'searching'
!new State('mmMatchFound')
!mmMatchFound.name := 'matchFound'
!new State('mmLoading')
!mmLoading.name := 'loadingGame'
!new State('mmInGame')
!mmInGame.name := 'inGame'
!new State('mmPostGame')
!mmPostGame.name := 'postGame'
!new State('mmDisconnected')
!mmDisconnected.name := 'disconnected'

!insert (smMatchmaking, mmIdle) into StateMachineContainsStates
!insert (smMatchmaking, mmSearching) into StateMachineContainsStates
!insert (smMatchmaking, mmMatchFound) into StateMachineContainsStates
!insert (smMatchmaking, mmLoading) into StateMachineContainsStates
!insert (smMatchmaking, mmInGame) into StateMachineContainsStates
!insert (smMatchmaking, mmPostGame) into StateMachineContainsStates
!insert (smMatchmaking, mmDisconnected) into StateMachineContainsStates

!insert (smMatchmaking, mmIdle) into StateMachineStartsStates


!new Transition('trMmStartSearch')
!trMmStartSearch.name := 'startSearch'
!new TimeEvent('evMmStartSearch')
!evMmStartSearch.time := 1

!new Transition('trMmSearchTimeout')
!trMmSearchTimeout.name := 'searchTimeout'
!new TimeEvent('evMmSearchTimeout')
!evMmSearchTimeout.time := 90

!new Transition('trMmCancelSearch')
!trMmCancelSearch.name := 'cancelSearch'
!new TimeEvent('evMmCancelSearch')
!evMmCancelSearch.time := 2

!new Transition('trMmFoundMatch')
!trMmFoundMatch.name := 'foundMatch'
!new TimeEvent('evMmFoundMatch')
!evMmFoundMatch.time := 20

!new Transition('trMmAcceptMatch')
!trMmAcceptMatch.name := 'acceptMatch'
!new TimeEvent('evMmAcceptMatch')
!evMmAcceptMatch.time := 10

!new Transition('trMmLoadDone')
!trMmLoadDone.name := 'loadDone'
!new TimeEvent('evMmLoadDone')
!evMmLoadDone.time := 15

!new Transition('trMmGameEnds')
!trMmGameEnds.name := 'gameEnds'
!new TimeEvent('evMmGameEnds')
!evMmGameEnds.time := 1800

!new Transition('trMmReturnLobby')
!trMmReturnLobby.name := 'returnToLobby'
!new TimeEvent('evMmReturnLobby')
!evMmReturnLobby.time := 5

!new Transition('trMmDisconnect')
!trMmDisconnect.name := 'disconnect'
!new TimeEvent('evMmDisconnect')
!evMmDisconnect.time := 1

!new Transition('trMmReconnect')
!trMmReconnect.name := 'reconnect'
!new TimeEvent('evMmReconnect')
!evMmReconnect.time := 20


!insert (smMatchmaking, trMmStartSearch) into StateMachineContainsTransitions
!insert (smMatchmaking, trMmSearchTimeout) into StateMachineContainsTransitions
!insert (smMatchmaking, trMmCancelSearch) into StateMachineContainsTransitions
!insert (smMatchmaking, trMmFoundMatch) into StateMachineContainsTransitions
!insert (smMatchmaking, trMmAcceptMatch) into StateMachineContainsTransitions
!insert (smMatchmaking, trMmLoadDone) into StateMachineContainsTransitions
!insert (smMatchmaking, trMmGameEnds) into StateMachineContainsTransitions
!insert (smMatchmaking, trMmReturnLobby) into StateMachineContainsTransitions
!insert (smMatchmaking, trMmDisconnect) into StateMachineContainsTransitions
!insert (smMatchmaking, trMmReconnect) into StateMachineContainsTransitions

!insert (trMmStartSearch, evMmStartSearch) into TransitionContainsEvents
!insert (trMmSearchTimeout, evMmSearchTimeout) into TransitionContainsEvents
!insert (trMmCancelSearch, evMmCancelSearch) into TransitionContainsEvents
!insert (trMmFoundMatch, evMmFoundMatch) into TransitionContainsEvents
!insert (trMmAcceptMatch, evMmAcceptMatch) into TransitionContainsEvents
!insert (trMmLoadDone, evMmLoadDone) into TransitionContainsEvents
!insert (trMmGameEnds, evMmGameEnds) into TransitionContainsEvents
!insert (trMmReturnLobby, evMmReturnLobby) into TransitionContainsEvents
!insert (trMmDisconnect, evMmDisconnect) into TransitionContainsEvents
!insert (trMmReconnect, evMmReconnect) into TransitionContainsEvents


!insert (mmIdle, trMmStartSearch) into StateTransition
!insert (trMmStartSearch, mmSearching) into TransitionState

!insert (mmSearching, trMmSearchTimeout) into StateTransition
!insert (trMmSearchTimeout, mmIdle) into TransitionState

!insert (mmSearching, trMmCancelSearch) into StateTransition
!insert (trMmCancelSearch, mmIdle) into TransitionState

!insert (mmSearching, trMmFoundMatch) into StateTransition
!insert (trMmFoundMatch, mmMatchFound) into TransitionState

!insert (mmMatchFound, trMmAcceptMatch) into StateTransition
!insert (trMmAcceptMatch, mmLoading) into TransitionState

!insert (mmLoading, trMmLoadDone) into StateTransition
!insert (trMmLoadDone, mmInGame) into TransitionState

!insert (mmInGame, trMmGameEnds) into StateTransition
!insert (trMmGameEnds, mmPostGame) into TransitionState

!insert (mmPostGame, trMmReturnLobby) into StateTransition
!insert (trMmReturnLobby, mmIdle) into TransitionState

!insert (mmInGame, trMmDisconnect) into StateTransition
!insert (trMmDisconnect, mmDisconnected) into TransitionState

!insert (mmDisconnected, trMmReconnect) into StateTransition
!insert (trMmReconnect, mmInGame) into TransitionState
```
## Generation 26 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 216 | 0.00% |
| Multiplicities Errors | 0 | 100 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

# Generation 27
```
!new StateMachine('smVacuum')
!smVacuum.name := 'robotVacuum'

!new State('vcDocked')
!vcDocked.name := 'docked'
!new State('vcCleaning')
!vcCleaning.name := 'cleaning'
!new State('vcReturning')
!vcReturning.name := 'returning'
!new State('vcCharging')
!vcCharging.name := 'charging'
!new State('vcStuck')
!vcStuck.name := 'stuck'
!new State('vcSleeping')
!vcSleeping.name := 'sleeping'

!insert (smVacuum, vcDocked) into StateMachineContainsStates
!insert (smVacuum, vcCleaning) into StateMachineContainsStates
!insert (smVacuum, vcReturning) into StateMachineContainsStates
!insert (smVacuum, vcCharging) into StateMachineContainsStates
!insert (smVacuum, vcStuck) into StateMachineContainsStates
!insert (smVacuum, vcSleeping) into StateMachineContainsStates

!insert (smVacuum, vcDocked) into StateMachineStartsStates


!new Transition('trVcStartCleaning')
!trVcStartCleaning.name := 'startCleaning'
!new TimeEvent('evVcStartCleaning')
!evVcStartCleaning.time := 1

!new Transition('trVcLowBattery')
!trVcLowBattery.name := 'lowBattery'
!new TimeEvent('evVcLowBattery')
!evVcLowBattery.time := 30

!new Transition('trVcReachedDock')
!trVcReachedDock.name := 'reachedDock'
!new TimeEvent('evVcReachedDock')
!evVcReachedDock.time := 10

!new Transition('trVcChargeComplete')
!trVcChargeComplete.name := 'chargeComplete'
!new TimeEvent('evVcChargeComplete')
!evVcChargeComplete.time := 120

!new Transition('trVcStuckDetected')
!trVcStuckDetected.name := 'stuckDetected'
!new TimeEvent('evVcStuckDetected')
!evVcStuckDetected.time := 2

!new Transition('trVcUserUnstuck')
!trVcUserUnstuck.name := 'userUnstuck'
!new TimeEvent('evVcUserUnstuck')
!evVcUserUnstuck.time := 5

!new Transition('trVcSleepSchedule')
!trVcSleepSchedule.name := 'sleepSchedule'
!new TimeEvent('evVcSleepSchedule')
!evVcSleepSchedule.time := 60

!new Transition('trVcWakeUp')
!trVcWakeUp.name := 'wakeUp'
!new TimeEvent('evVcWakeUp')
!evVcWakeUp.time := 480

!new Transition('trVcCleaningPulse')
!trVcCleaningPulse.name := 'cleaningPulse'
!new TimeEvent('evVcCleaningPulse')
!evVcCleaningPulse.time := 15


!insert (smVacuum, trVcStartCleaning) into StateMachineContainsTransitions
!insert (smVacuum, trVcLowBattery) into StateMachineContainsTransitions
!insert (smVacuum, trVcReachedDock) into StateMachineContainsTransitions
!insert (smVacuum, trVcChargeComplete) into StateMachineContainsTransitions
!insert (smVacuum, trVcStuckDetected) into StateMachineContainsTransitions
!insert (smVacuum, trVcUserUnstuck) into StateMachineContainsTransitions
!insert (smVacuum, trVcSleepSchedule) into StateMachineContainsTransitions
!insert (smVacuum, trVcWakeUp) into StateMachineContainsTransitions
!insert (smVacuum, trVcCleaningPulse) into StateMachineContainsTransitions

!insert (trVcStartCleaning, evVcStartCleaning) into TransitionContainsEvents
!insert (trVcLowBattery, evVcLowBattery) into TransitionContainsEvents
!insert (trVcReachedDock, evVcReachedDock) into TransitionContainsEvents
!insert (trVcChargeComplete, evVcChargeComplete) into TransitionContainsEvents
!insert (trVcStuckDetected, evVcStuckDetected) into TransitionContainsEvents
!insert (trVcUserUnstuck, evVcUserUnstuck) into TransitionContainsEvents
!insert (trVcSleepSchedule, evVcSleepSchedule) into TransitionContainsEvents
!insert (trVcWakeUp, evVcWakeUp) into TransitionContainsEvents
!insert (trVcCleaningPulse, evVcCleaningPulse) into TransitionContainsEvents


!insert (vcDocked, trVcStartCleaning) into StateTransition
!insert (trVcStartCleaning, vcCleaning) into TransitionState

!insert (vcCleaning, trVcLowBattery) into StateTransition
!insert (trVcLowBattery, vcReturning) into TransitionState

!insert (vcReturning, trVcReachedDock) into StateTransition
!insert (trVcReachedDock, vcCharging) into TransitionState

!insert (vcCharging, trVcChargeComplete) into StateTransition
!insert (trVcChargeComplete, vcDocked) into TransitionState

!insert (vcCleaning, trVcStuckDetected) into StateTransition
!insert (trVcStuckDetected, vcStuck) into TransitionState

!insert (vcStuck, trVcUserUnstuck) into StateTransition
!insert (trVcUserUnstuck, vcReturning) into TransitionState

!insert (vcDocked, trVcSleepSchedule) into StateTransition
!insert (trVcSleepSchedule, vcSleeping) into TransitionState

!insert (vcSleeping, trVcWakeUp) into StateTransition
!insert (trVcWakeUp, vcDocked) into TransitionState

!insert (vcCleaning, trVcCleaningPulse) into StateTransition
!insert (trVcCleaningPulse, vcCleaning) into TransitionState



!new StateMachine('smKitchenTimer')
!smKitchenTimer.name := 'kitchenTimerApp'

!new State('ktIdle')
!ktIdle.name := 'idle'
!new State('ktSetting')
!ktSetting.name := 'setting'
!new State('ktCounting')
!ktCounting.name := 'counting'
!new State('ktRinging')
!ktRinging.name := 'ringing'
!new State('ktDismissed')
!ktDismissed.name := 'dismissed'

!insert (smKitchenTimer, ktIdle) into StateMachineContainsStates
!insert (smKitchenTimer, ktSetting) into StateMachineContainsStates
!insert (smKitchenTimer, ktCounting) into StateMachineContainsStates
!insert (smKitchenTimer, ktRinging) into StateMachineContainsStates
!insert (smKitchenTimer, ktDismissed) into StateMachineContainsStates

!insert (smKitchenTimer, ktIdle) into StateMachineStartsStates


!new Transition('trKtOpenSetting')
!trKtOpenSetting.name := 'openSetting'
!new TimeEvent('evKtOpenSetting')
!evKtOpenSetting.time := 1

!new Transition('trKtConfirmDuration')
!trKtConfirmDuration.name := 'confirmDuration'
!new TimeEvent('evKtConfirmDuration')
!evKtConfirmDuration.time := 2

!new Transition('trKtCancelSetting')
!trKtCancelSetting.name := 'cancelSetting'
!new TimeEvent('evKtCancelSetting')
!evKtCancelSetting.time := 1

!new Transition('trKtTick')
!trKtTick.name := 'tick'
!new TimeEvent('evKtTick')
!evKtTick.time := 60

!new Transition('trKtTimeUp')
!trKtTimeUp.name := 'timeUp'
!new TimeEvent('evKtTimeUp')
!evKtTimeUp.time := 1

!new Transition('trKtDismiss')
!trKtDismiss.name := 'dismiss'
!new TimeEvent('evKtDismiss')
!evKtDismiss.time := 1

!new Transition('trKtReset')
!trKtReset.name := 'reset'
!new TimeEvent('evKtReset')
!evKtReset.time := 1


!insert (smKitchenTimer, trKtOpenSetting) into StateMachineContainsTransitions
!insert (smKitchenTimer, trKtConfirmDuration) into StateMachineContainsTransitions
!insert (smKitchenTimer, trKtCancelSetting) into StateMachineContainsTransitions
!insert (smKitchenTimer, trKtTick) into StateMachineContainsTransitions
!insert (smKitchenTimer, trKtTimeUp) into StateMachineContainsTransitions
!insert (smKitchenTimer, trKtDismiss) into StateMachineContainsTransitions
!insert (smKitchenTimer, trKtReset) into StateMachineContainsTransitions

!insert (trKtOpenSetting, evKtOpenSetting) into TransitionContainsEvents
!insert (trKtConfirmDuration, evKtConfirmDuration) into TransitionContainsEvents
!insert (trKtCancelSetting, evKtCancelSetting) into TransitionContainsEvents
!insert (trKtTick, evKtTick) into TransitionContainsEvents
!insert (trKtTimeUp, evKtTimeUp) into TransitionContainsEvents
!insert (trKtDismiss, evKtDismiss) into TransitionContainsEvents
!insert (trKtReset, evKtReset) into TransitionContainsEvents


!insert (ktIdle, trKtOpenSetting) into StateTransition
!insert (trKtOpenSetting, ktSetting) into TransitionState

!insert (ktSetting, trKtConfirmDuration) into StateTransition
!insert (trKtConfirmDuration, ktCounting) into TransitionState

!insert (ktSetting, trKtCancelSetting) into StateTransition
!insert (trKtCancelSetting, ktIdle) into TransitionState

!insert (ktCounting, trKtTick) into StateTransition
!insert (trKtTick, ktCounting) into TransitionState

!insert (ktCounting, trKtTimeUp) into StateTransition
!insert (trKtTimeUp, ktRinging) into TransitionState

!insert (ktRinging, trKtDismiss) into StateTransition
!insert (trKtDismiss, ktDismissed) into TransitionState

!insert (ktDismissed, trKtReset) into StateTransition
!insert (trKtReset, ktIdle) into TransitionState
```
## Generation 27 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 167 | 0.00% |
| Multiplicities Errors | 0 | 77 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

# Generation 28
```
!new StateMachine('smAirlock')
!smAirlock.name := 'spaceStationAirlock'

!new State('alSealed')
!alSealed.name := 'sealed'
!new State('alInnerOpen')
!alInnerOpen.name := 'innerDoorOpen'
!new State('alOuterOpen')
!alOuterOpen.name := 'outerDoorOpen'
!new State('alPressurizing')
!alPressurizing.name := 'pressurizing'
!new State('alDepressurizing')
!alDepressurizing.name := 'depressurizing'
!new State('alFault')
!alFault.name := 'fault'

!insert (smAirlock, alSealed) into StateMachineContainsStates
!insert (smAirlock, alInnerOpen) into StateMachineContainsStates
!insert (smAirlock, alOuterOpen) into StateMachineContainsStates
!insert (smAirlock, alPressurizing) into StateMachineContainsStates
!insert (smAirlock, alDepressurizing) into StateMachineContainsStates
!insert (smAirlock, alFault) into StateMachineContainsStates

!insert (smAirlock, alSealed) into StateMachineStartsStates


!new Transition('trAlOpenInner')
!trAlOpenInner.name := 'openInnerDoor'
!new TimeEvent('evAlOpenInner')
!evAlOpenInner.time := 3

!new Transition('trAlCloseInner')
!trAlCloseInner.name := 'closeInnerDoor'
!new TimeEvent('evAlCloseInner')
!evAlCloseInner.time := 3

!new Transition('trAlOpenOuter')
!trAlOpenOuter.name := 'openOuterDoor'
!new TimeEvent('evAlOpenOuter')
!evAlOpenOuter.time := 4

!new Transition('trAlCloseOuter')
!trAlCloseOuter.name := 'closeOuterDoor'
!new TimeEvent('evAlCloseOuter')
!evAlCloseOuter.time := 4

!new Transition('trAlStartDepress')
!trAlStartDepress.name := 'startDepressurize'
!new TimeEvent('evAlStartDepress')
!evAlStartDepress.time := 1

!new Transition('trAlDepressDone')
!trAlDepressDone.name := 'depressurizeDone'
!new TimeEvent('evAlDepressDone')
!evAlDepressDone.time := 90

!new Transition('trAlStartPress')
!trAlStartPress.name := 'startPressurize'
!new TimeEvent('evAlStartPress')
!evAlStartPress.time := 1

!new Transition('trAlPressDone')
!trAlPressDone.name := 'pressurizeDone'
!new TimeEvent('evAlPressDone')
!evAlPressDone.time := 120

!new Transition('trAlLeakDetectedDepress')
!trAlLeakDetectedDepress.name := 'leakDetected'
!new TimeEvent('evAlLeakDetectedDepress')
!evAlLeakDetectedDepress.time := 1

!new Transition('trAlLeakDetectedPress')
!trAlLeakDetectedPress.name := 'leakDetected'
!new TimeEvent('evAlLeakDetectedPress')
!evAlLeakDetectedPress.time := 1

!new Transition('trAlResetFromFault')
!trAlResetFromFault.name := 'resetAfterInspection'
!new TimeEvent('evAlResetFromFault')
!evAlResetFromFault.time := 300


!insert (smAirlock, trAlOpenInner) into StateMachineContainsTransitions
!insert (smAirlock, trAlCloseInner) into StateMachineContainsTransitions
!insert (smAirlock, trAlOpenOuter) into StateMachineContainsTransitions
!insert (smAirlock, trAlCloseOuter) into StateMachineContainsTransitions
!insert (smAirlock, trAlStartDepress) into StateMachineContainsTransitions
!insert (smAirlock, trAlDepressDone) into StateMachineContainsTransitions
!insert (smAirlock, trAlStartPress) into StateMachineContainsTransitions
!insert (smAirlock, trAlPressDone) into StateMachineContainsTransitions
!insert (smAirlock, trAlLeakDetectedDepress) into StateMachineContainsTransitions
!insert (smAirlock, trAlLeakDetectedPress) into StateMachineContainsTransitions
!insert (smAirlock, trAlResetFromFault) into StateMachineContainsTransitions

!insert (trAlOpenInner, evAlOpenInner) into TransitionContainsEvents
!insert (trAlCloseInner, evAlCloseInner) into TransitionContainsEvents
!insert (trAlOpenOuter, evAlOpenOuter) into TransitionContainsEvents
!insert (trAlCloseOuter, evAlCloseOuter) into TransitionContainsEvents
!insert (trAlStartDepress, evAlStartDepress) into TransitionContainsEvents
!insert (trAlDepressDone, evAlDepressDone) into TransitionContainsEvents
!insert (trAlStartPress, evAlStartPress) into TransitionContainsEvents
!insert (trAlPressDone, evAlPressDone) into TransitionContainsEvents
!insert (trAlLeakDetectedDepress, evAlLeakDetectedDepress) into TransitionContainsEvents
!insert (trAlLeakDetectedPress, evAlLeakDetectedPress) into TransitionContainsEvents
!insert (trAlResetFromFault, evAlResetFromFault) into TransitionContainsEvents


!insert (alSealed, trAlOpenInner) into StateTransition
!insert (trAlOpenInner, alInnerOpen) into TransitionState

!insert (alInnerOpen, trAlCloseInner) into StateTransition
!insert (trAlCloseInner, alSealed) into TransitionState

!insert (alSealed, trAlStartDepress) into StateTransition
!insert (trAlStartDepress, alDepressurizing) into TransitionState

!insert (alDepressurizing, trAlDepressDone) into StateTransition
!insert (trAlDepressDone, alSealed) into TransitionState

!insert (alSealed, trAlOpenOuter) into StateTransition
!insert (trAlOpenOuter, alOuterOpen) into TransitionState

!insert (alOuterOpen, trAlCloseOuter) into StateTransition
!insert (trAlCloseOuter, alSealed) into TransitionState

!insert (alSealed, trAlStartPress) into StateTransition
!insert (trAlStartPress, alPressurizing) into TransitionState

!insert (alPressurizing, trAlPressDone) into StateTransition
!insert (trAlPressDone, alSealed) into TransitionState

!insert (alDepressurizing, trAlLeakDetectedDepress) into StateTransition
!insert (trAlLeakDetectedDepress, alFault) into TransitionState

!insert (alPressurizing, trAlLeakDetectedPress) into StateTransition
!insert (trAlLeakDetectedPress, alFault) into TransitionState

!insert (alFault, trAlResetFromFault) into StateTransition
!insert (trAlResetFromFault, alSealed) into TransitionState



!new StateMachine('smRateLimit')
!smRateLimit.name := 'apiRateLimiting'

!new State('rlNormal')
!rlNormal.name := 'normal'
!new State('rlThrottled')
!rlThrottled.name := 'throttled'
!new State('rlBlocked')
!rlBlocked.name := 'blocked'

!insert (smRateLimit, rlNormal) into StateMachineContainsStates
!insert (smRateLimit, rlThrottled) into StateMachineContainsStates
!insert (smRateLimit, rlBlocked) into StateMachineContainsStates

!insert (smRateLimit, rlNormal) into StateMachineStartsStates


!new Transition('trRlSpikeDetected')
!trRlSpikeDetected.name := 'spikeDetected'
!new TimeEvent('evRlSpikeDetected')
!evRlSpikeDetected.time := 1

!new Transition('trRlAutoRecover')
!trRlAutoRecover.name := 'autoRecover'
!new TimeEvent('evRlAutoRecover')
!evRlAutoRecover.time := 60

!new Transition('trRlAbuseDetected')
!trRlAbuseDetected.name := 'abuseDetected'
!new TimeEvent('evRlAbuseDetected')
!evRlAbuseDetected.time := 5

!new Transition('trRlBlockExpires')
!trRlBlockExpires.name := 'blockExpires'
!new TimeEvent('evRlBlockExpires')
!evRlBlockExpires.time := 900

!new Transition('trRlPeriodicAudit')
!trRlPeriodicAudit.name := 'periodicAudit'
!new TimeEvent('evRlPeriodicAudit')
!evRlPeriodicAudit.time := 300


!insert (smRateLimit, trRlSpikeDetected) into StateMachineContainsTransitions
!insert (smRateLimit, trRlAutoRecover) into StateMachineContainsTransitions
!insert (smRateLimit, trRlAbuseDetected) into StateMachineContainsTransitions
!insert (smRateLimit, trRlBlockExpires) into StateMachineContainsTransitions
!insert (smRateLimit, trRlPeriodicAudit) into StateMachineContainsTransitions

!insert (trRlSpikeDetected, evRlSpikeDetected) into TransitionContainsEvents
!insert (trRlAutoRecover, evRlAutoRecover) into TransitionContainsEvents
!insert (trRlAbuseDetected, evRlAbuseDetected) into TransitionContainsEvents
!insert (trRlBlockExpires, evRlBlockExpires) into TransitionContainsEvents
!insert (trRlPeriodicAudit, evRlPeriodicAudit) into TransitionContainsEvents


!insert (rlNormal, trRlSpikeDetected) into StateTransition
!insert (trRlSpikeDetected, rlThrottled) into TransitionState

!insert (rlThrottled, trRlAutoRecover) into StateTransition
!insert (trRlAutoRecover, rlNormal) into TransitionState

!insert (rlThrottled, trRlAbuseDetected) into StateTransition
!insert (trRlAbuseDetected, rlBlocked) into TransitionState

!insert (rlBlocked, trRlBlockExpires) into StateTransition
!insert (trRlBlockExpires, rlThrottled) into TransitionState

!insert (rlNormal, trRlPeriodicAudit) into StateTransition
!insert (trRlPeriodicAudit, rlNormal) into TransitionState
```
## Generation 28 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 161 | 0.00% |
| Multiplicities Errors | 0 | 75 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

# Generation 29
```
!new StateMachine('smSatelliteComm')
!smSatelliteComm.name := 'satelliteLinkController'

!new State('scOff')
!scOff.name := 'off'
!new State('scInitializing')
!scInitializing.name := 'initializing'
!new State('scAcquiring')
!scAcquiring.name := 'acquiringSignal'
!new State('scConnected')
!scConnected.name := 'connected'
!new State('scTransferring')
!scTransferring.name := 'transferring'
!new State('scStandby')
!scStandby.name := 'standby'
!new State('scFault')
!scFault.name := 'fault'

!insert (smSatelliteComm, scOff) into StateMachineContainsStates
!insert (smSatelliteComm, scInitializing) into StateMachineContainsStates
!insert (smSatelliteComm, scAcquiring) into StateMachineContainsStates
!insert (smSatelliteComm, scConnected) into StateMachineContainsStates
!insert (smSatelliteComm, scTransferring) into StateMachineContainsStates
!insert (smSatelliteComm, scStandby) into StateMachineContainsStates
!insert (smSatelliteComm, scFault) into StateMachineContainsStates

!insert (smSatelliteComm, scOff) into StateMachineStartsStates


!new Transition('trScPowerOn')
!trScPowerOn.name := 'powerOn'
!new TimeEvent('evScPowerOn')
!evScPowerOn.time := 1

!new Transition('trScInitDone')
!trScInitDone.name := 'initDone'
!new TimeEvent('evScInitDone')
!evScInitDone.time := 8

!new Transition('trScAcquireOk')
!trScAcquireOk.name := 'acquireOk'
!new TimeEvent('evScAcquireOk')
!evScAcquireOk.time := 25

!new Transition('trScAcquireFail')
!trScAcquireFail.name := 'acquireFail'
!new TimeEvent('evScAcquireFail')
!evScAcquireFail.time := 40

!new Transition('trScStartTransfer')
!trScStartTransfer.name := 'startTransfer'
!new TimeEvent('evScStartTransfer')
!evScStartTransfer.time := 2

!new Transition('trScTransferDone')
!trScTransferDone.name := 'transferDone'
!new TimeEvent('evScTransferDone')
!evScTransferDone.time := 90

!new Transition('trScIdleTimeout')
!trScIdleTimeout.name := 'idleTimeout'
!new TimeEvent('evScIdleTimeout')
!evScIdleTimeout.time := 300

!new Transition('trScWakeForTelemetry')
!trScWakeForTelemetry.name := 'wakeForTelemetry'
!new TimeEvent('evScWakeForTelemetry')
!evScWakeForTelemetry.time := 60

!new Transition('trScSignalLost')
!trScSignalLost.name := 'signalLost'
!new TimeEvent('evScSignalLost')
!evScSignalLost.time := 1

!new Transition('trScResetFromFault')
!trScResetFromFault.name := 'resetFromFault'
!new TimeEvent('evScResetFromFault')
!evScResetFromFault.time := 120


!insert (smSatelliteComm, trScPowerOn) into StateMachineContainsTransitions
!insert (smSatelliteComm, trScInitDone) into StateMachineContainsTransitions
!insert (smSatelliteComm, trScAcquireOk) into StateMachineContainsTransitions
!insert (smSatelliteComm, trScAcquireFail) into StateMachineContainsTransitions
!insert (smSatelliteComm, trScStartTransfer) into StateMachineContainsTransitions
!insert (smSatelliteComm, trScTransferDone) into StateMachineContainsTransitions
!insert (smSatelliteComm, trScIdleTimeout) into StateMachineContainsTransitions
!insert (smSatelliteComm, trScWakeForTelemetry) into StateMachineContainsTransitions
!insert (smSatelliteComm, trScSignalLost) into StateMachineContainsTransitions
!insert (smSatelliteComm, trScResetFromFault) into StateMachineContainsTransitions

!insert (trScPowerOn, evScPowerOn) into TransitionContainsEvents
!insert (trScInitDone, evScInitDone) into TransitionContainsEvents
!insert (trScAcquireOk, evScAcquireOk) into TransitionContainsEvents
!insert (trScAcquireFail, evScAcquireFail) into TransitionContainsEvents
!insert (trScStartTransfer, evScStartTransfer) into TransitionContainsEvents
!insert (trScTransferDone, evScTransferDone) into TransitionContainsEvents
!insert (trScIdleTimeout, evScIdleTimeout) into TransitionContainsEvents
!insert (trScWakeForTelemetry, evScWakeForTelemetry) into TransitionContainsEvents
!insert (trScSignalLost, evScSignalLost) into TransitionContainsEvents
!insert (trScResetFromFault, evScResetFromFault) into TransitionContainsEvents


!insert (scOff, trScPowerOn) into StateTransition
!insert (trScPowerOn, scInitializing) into TransitionState

!insert (scInitializing, trScInitDone) into StateTransition
!insert (trScInitDone, scAcquiring) into TransitionState

!insert (scAcquiring, trScAcquireOk) into StateTransition
!insert (trScAcquireOk, scConnected) into TransitionState

!insert (scAcquiring, trScAcquireFail) into StateTransition
!insert (trScAcquireFail, scFault) into TransitionState

!insert (scConnected, trScStartTransfer) into StateTransition
!insert (trScStartTransfer, scTransferring) into TransitionState

!insert (scTransferring, trScTransferDone) into StateTransition
!insert (trScTransferDone, scConnected) into TransitionState

!insert (scConnected, trScIdleTimeout) into StateTransition
!insert (trScIdleTimeout, scStandby) into TransitionState

!insert (scStandby, trScWakeForTelemetry) into StateTransition
!insert (trScWakeForTelemetry, scConnected) into TransitionState

!insert (scTransferring, trScSignalLost) into StateTransition
!insert (trScSignalLost, scAcquiring) into TransitionState

!insert (scFault, trScResetFromFault) into StateTransition
!insert (trScResetFromFault, scOff) into TransitionState



!new StateMachine('smOrchardIrrigation')
!smOrchardIrrigation.name := 'orchardIrrigation'

!new State('irIdle')
!irIdle.name := 'idle'
!new State('irCheckingWeather')
!irCheckingWeather.name := 'checkingWeather'
!new State('irWatering')
!irWatering.name := 'watering'
!new State('irSoaking')
!irSoaking.name := 'soaking'
!new State('irPaused')
!irPaused.name := 'paused'
!new State('irError')
!irError.name := 'error'

!insert (smOrchardIrrigation, irIdle) into StateMachineContainsStates
!insert (smOrchardIrrigation, irCheckingWeather) into StateMachineContainsStates
!insert (smOrchardIrrigation, irWatering) into StateMachineContainsStates
!insert (smOrchardIrrigation, irSoaking) into StateMachineContainsStates
!insert (smOrchardIrrigation, irPaused) into StateMachineContainsStates
!insert (smOrchardIrrigation, irError) into StateMachineContainsStates

!insert (smOrchardIrrigation, irIdle) into StateMachineStartsStates


!new Transition('trIrScheduleTick')
!trIrScheduleTick.name := 'scheduleTick'
!new TimeEvent('evIrScheduleTick')
!evIrScheduleTick.time := 360

!new Transition('trIrWeatherOk')
!trIrWeatherOk.name := 'weatherOk'
!new TimeEvent('evIrWeatherOk')
!evIrWeatherOk.time := 6

!new Transition('trIrWeatherRain')
!trIrWeatherRain.name := 'weatherRain'
!new TimeEvent('evIrWeatherRain')
!evIrWeatherRain.time := 6

!new Transition('trIrWateringComplete')
!trIrWateringComplete.name := 'wateringComplete'
!new TimeEvent('evIrWateringComplete')
!evIrWateringComplete.time := 45

!new Transition('trIrSoakComplete')
!trIrSoakComplete.name := 'soakComplete'
!new TimeEvent('evIrSoakComplete')
!evIrSoakComplete.time := 30

!new Transition('trIrUserPause')
!trIrUserPause.name := 'userPause'
!new TimeEvent('evIrUserPause')
!evIrUserPause.time := 1

!new Transition('trIrResume')
!trIrResume.name := 'resume'
!new TimeEvent('evIrResume')
!evIrResume.time := 1

!new Transition('trIrLeakDetected')
!trIrLeakDetected.name := 'leakDetected'
!new TimeEvent('evIrLeakDetected')
!evIrLeakDetected.time := 1

!new Transition('trIrResetSystem')
!trIrResetSystem.name := 'resetSystem'
!new TimeEvent('evIrResetSystem')
!evIrResetSystem.time := 20

!new Transition('trIrHealthPing')
!trIrHealthPing.name := 'healthPing'
!new TimeEvent('evIrHealthPing')
!evIrHealthPing.time := 600


!insert (smOrchardIrrigation, trIrScheduleTick) into StateMachineContainsTransitions
!insert (smOrchardIrrigation, trIrWeatherOk) into StateMachineContainsTransitions
!insert (smOrchardIrrigation, trIrWeatherRain) into StateMachineContainsTransitions
!insert (smOrchardIrrigation, trIrWateringComplete) into StateMachineContainsTransitions
!insert (smOrchardIrrigation, trIrSoakComplete) into StateMachineContainsTransitions
!insert (smOrchardIrrigation, trIrUserPause) into StateMachineContainsTransitions
!insert (smOrchardIrrigation, trIrResume) into StateMachineContainsTransitions
!insert (smOrchardIrrigation, trIrLeakDetected) into StateMachineContainsTransitions
!insert (smOrchardIrrigation, trIrResetSystem) into StateMachineContainsTransitions
!insert (smOrchardIrrigation, trIrHealthPing) into StateMachineContainsTransitions

!insert (trIrScheduleTick, evIrScheduleTick) into TransitionContainsEvents
!insert (trIrWeatherOk, evIrWeatherOk) into TransitionContainsEvents
!insert (trIrWeatherRain, evIrWeatherRain) into TransitionContainsEvents
!insert (trIrWateringComplete, evIrWateringComplete) into TransitionContainsEvents
!insert (trIrSoakComplete, evIrSoakComplete) into TransitionContainsEvents
!insert (trIrUserPause, evIrUserPause) into TransitionContainsEvents
!insert (trIrResume, evIrResume) into TransitionContainsEvents
!insert (trIrLeakDetected, evIrLeakDetected) into TransitionContainsEvents
!insert (trIrResetSystem, evIrResetSystem) into TransitionContainsEvents
!insert (trIrHealthPing, evIrHealthPing) into TransitionContainsEvents


!insert (irIdle, trIrScheduleTick) into StateTransition
!insert (trIrScheduleTick, irCheckingWeather) into TransitionState

!insert (irCheckingWeather, trIrWeatherOk) into StateTransition
!insert (trIrWeatherOk, irWatering) into TransitionState

!insert (irCheckingWeather, trIrWeatherRain) into StateTransition
!insert (trIrWeatherRain, irIdle) into TransitionState

!insert (irWatering, trIrWateringComplete) into StateTransition
!insert (trIrWateringComplete, irSoaking) into TransitionState

!insert (irSoaking, trIrSoakComplete) into StateTransition
!insert (trIrSoakComplete, irIdle) into TransitionState

!insert (irWatering, trIrUserPause) into StateTransition
!insert (trIrUserPause, irPaused) into TransitionState

!insert (irPaused, trIrResume) into StateTransition
!insert (trIrResume, irWatering) into TransitionState

!insert (irWatering, trIrLeakDetected) into StateTransition
!insert (trIrLeakDetected, irError) into TransitionState

!insert (irError, trIrResetSystem) into StateTransition
!insert (trIrResetSystem, irIdle) into TransitionState

!insert (irIdle, trIrHealthPing) into StateTransition
!insert (trIrHealthPing, irIdle) into TransitionState
```
## Generation 29 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 205 | 0.00% |
| Multiplicities Errors | 0 | 95 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

# Generation 30
```
!new StateMachine('smHabitat')
!smHabitat.name := 'marsHabitatLifeSupport'

!new State('hsNormal')
!hsNormal.name := 'normal'
!new State('hsCo2Scrubbing')
!hsCo2Scrubbing.name := 'co2Scrubbing'
!new State('hsOxygenBoost')
!hsOxygenBoost.name := 'oxygenBoost'
!new State('hsEmergencyVent')
!hsEmergencyVent.name := 'emergencyVent'
!new State('hsMaintenance')
!hsMaintenance.name := 'maintenance'
!new State('hsOffline')
!hsOffline.name := 'offline'

!insert (smHabitat, hsNormal) into StateMachineContainsStates
!insert (smHabitat, hsCo2Scrubbing) into StateMachineContainsStates
!insert (smHabitat, hsOxygenBoost) into StateMachineContainsStates
!insert (smHabitat, hsEmergencyVent) into StateMachineContainsStates
!insert (smHabitat, hsMaintenance) into StateMachineContainsStates
!insert (smHabitat, hsOffline) into StateMachineContainsStates

!insert (smHabitat, hsNormal) into StateMachineStartsStates


!new Transition('trHsDailyCheck')
!trHsDailyCheck.name := 'dailyCheck'
!new TimeEvent('evHsDailyCheck')
!evHsDailyCheck.time := 1440

!new Transition('trHsCo2High')
!trHsCo2High.name := 'co2High'
!new TimeEvent('evHsCo2High')
!evHsCo2High.time := 2

!new Transition('trHsScrubComplete')
!trHsScrubComplete.name := 'scrubComplete'
!new TimeEvent('evHsScrubComplete')
!evHsScrubComplete.time := 15

!new Transition('trHsO2Low')
!trHsO2Low.name := 'o2Low'
!new TimeEvent('evHsO2Low')
!evHsO2Low.time := 2

!new Transition('trHsBoostComplete')
!trHsBoostComplete.name := 'boostComplete'
!new TimeEvent('evHsBoostComplete')
!evHsBoostComplete.time := 10

!new Transition('trHsLeakDetected')
!trHsLeakDetected.name := 'leakDetected'
!new TimeEvent('evHsLeakDetected')
!evHsLeakDetected.time := 1

!new Transition('trHsVentCycle')
!trHsVentCycle.name := 'ventCycle'
!new TimeEvent('evHsVentCycle')
!evHsVentCycle.time := 5

!new Transition('trHsMaintenanceRequest')
!trHsMaintenanceRequest.name := 'maintenanceRequest'
!new TimeEvent('evHsMaintenanceRequest')
!evHsMaintenanceRequest.time := 1

!new Transition('trHsMaintenanceDone')
!trHsMaintenanceDone.name := 'maintenanceDone'
!new TimeEvent('evHsMaintenanceDone')
!evHsMaintenanceDone.time := 60

!new Transition('trHsRestartSystems')
!trHsRestartSystems.name := 'restartSystems'
!new TimeEvent('evHsRestartSystems')
!evHsRestartSystems.time := 30


!insert (smHabitat, trHsDailyCheck) into StateMachineContainsTransitions
!insert (smHabitat, trHsCo2High) into StateMachineContainsTransitions
!insert (smHabitat, trHsScrubComplete) into StateMachineContainsTransitions
!insert (smHabitat, trHsO2Low) into StateMachineContainsTransitions
!insert (smHabitat, trHsBoostComplete) into StateMachineContainsTransitions
!insert (smHabitat, trHsLeakDetected) into StateMachineContainsTransitions
!insert (smHabitat, trHsVentCycle) into StateMachineContainsTransitions
!insert (smHabitat, trHsMaintenanceRequest) into StateMachineContainsTransitions
!insert (smHabitat, trHsMaintenanceDone) into StateMachineContainsTransitions
!insert (smHabitat, trHsRestartSystems) into StateMachineContainsTransitions

!insert (trHsDailyCheck, evHsDailyCheck) into TransitionContainsEvents
!insert (trHsCo2High, evHsCo2High) into TransitionContainsEvents
!insert (trHsScrubComplete, evHsScrubComplete) into TransitionContainsEvents
!insert (trHsO2Low, evHsO2Low) into TransitionContainsEvents
!insert (trHsBoostComplete, evHsBoostComplete) into TransitionContainsEvents
!insert (trHsLeakDetected, evHsLeakDetected) into TransitionContainsEvents
!insert (trHsVentCycle, evHsVentCycle) into TransitionContainsEvents
!insert (trHsMaintenanceRequest, evHsMaintenanceRequest) into TransitionContainsEvents
!insert (trHsMaintenanceDone, evHsMaintenanceDone) into TransitionContainsEvents
!insert (trHsRestartSystems, evHsRestartSystems) into TransitionContainsEvents


!insert (hsNormal, trHsDailyCheck) into StateTransition
!insert (trHsDailyCheck, hsNormal) into TransitionState

!insert (hsNormal, trHsCo2High) into StateTransition
!insert (trHsCo2High, hsCo2Scrubbing) into TransitionState

!insert (hsCo2Scrubbing, trHsScrubComplete) into StateTransition
!insert (trHsScrubComplete, hsNormal) into TransitionState

!insert (hsNormal, trHsO2Low) into StateTransition
!insert (trHsO2Low, hsOxygenBoost) into TransitionState

!insert (hsOxygenBoost, trHsBoostComplete) into StateTransition
!insert (trHsBoostComplete, hsNormal) into TransitionState

!insert (hsNormal, trHsLeakDetected) into StateTransition
!insert (trHsLeakDetected, hsEmergencyVent) into TransitionState

!insert (hsEmergencyVent, trHsVentCycle) into StateTransition
!insert (trHsVentCycle, hsOffline) into TransitionState

!insert (hsNormal, trHsMaintenanceRequest) into StateTransition
!insert (trHsMaintenanceRequest, hsMaintenance) into TransitionState

!insert (hsMaintenance, trHsMaintenanceDone) into StateTransition
!insert (trHsMaintenanceDone, hsNormal) into TransitionState

!insert (hsOffline, trHsRestartSystems) into StateTransition
!insert (trHsRestartSystems, hsNormal) into TransitionState



!new StateMachine('smWallet')
!smWallet.name := 'cryptoWallet'

!new State('wlLocked')
!wlLocked.name := 'locked'
!new State('wlAuthenticating')
!wlAuthenticating.name := 'authenticating'
!new State('wlUnlocked')
!wlUnlocked.name := 'unlocked'
!new State('wlSigning')
!wlSigning.name := 'signing'
!new State('wlBroadcasting')
!wlBroadcasting.name := 'broadcasting'
!new State('wlFailed')
!wlFailed.name := 'failed'

!insert (smWallet, wlLocked) into StateMachineContainsStates
!insert (smWallet, wlAuthenticating) into StateMachineContainsStates
!insert (smWallet, wlUnlocked) into StateMachineContainsStates
!insert (smWallet, wlSigning) into StateMachineContainsStates
!insert (smWallet, wlBroadcasting) into StateMachineContainsStates
!insert (smWallet, wlFailed) into StateMachineContainsStates

!insert (smWallet, wlLocked) into StateMachineStartsStates


!new Transition('trWlUnlockRequest')
!trWlUnlockRequest.name := 'unlockRequest'
!new TimeEvent('evWlUnlockRequest')
!evWlUnlockRequest.time := 1

!new Transition('trWlAuthOk')
!trWlAuthOk.name := 'authOk'
!new TimeEvent('evWlAuthOk')
!evWlAuthOk.time := 3

!new Transition('trWlAuthFail')
!trWlAuthFail.name := 'authFail'
!new TimeEvent('evWlAuthFail')
!evWlAuthFail.time := 3

!new Transition('trWlResetFail')
!trWlResetFail.name := 'resetFail'
!new TimeEvent('evWlResetFail')
!evWlResetFail.time := 30

!new Transition('trWlLockTimeout')
!trWlLockTimeout.name := 'lockTimeout'
!new TimeEvent('evWlLockTimeout')
!evWlLockTimeout.time := 600

!new Transition('trWlSignTx')
!trWlSignTx.name := 'signTx'
!new TimeEvent('evWlSignTx')
!evWlSignTx.time := 1

!new Transition('trWlCancelSign')
!trWlCancelSign.name := 'cancelSign'
!new TimeEvent('evWlCancelSign')
!evWlCancelSign.time := 1

!new Transition('trWlSigned')
!trWlSigned.name := 'signed'
!new TimeEvent('evWlSigned')
!evWlSigned.time := 2

!new Transition('trWlBroadcastOk')
!trWlBroadcastOk.name := 'broadcastOk'
!new TimeEvent('evWlBroadcastOk')
!evWlBroadcastOk.time := 4

!new Transition('trWlBroadcastFail')
!trWlBroadcastFail.name := 'broadcastFail'
!new TimeEvent('evWlBroadcastFail')
!evWlBroadcastFail.time := 4


!insert (smWallet, trWlUnlockRequest) into StateMachineContainsTransitions
!insert (smWallet, trWlAuthOk) into StateMachineContainsTransitions
!insert (smWallet, trWlAuthFail) into StateMachineContainsTransitions
!insert (smWallet, trWlResetFail) into StateMachineContainsTransitions
!insert (smWallet, trWlLockTimeout) into StateMachineContainsTransitions
!insert (smWallet, trWlSignTx) into StateMachineContainsTransitions
!insert (smWallet, trWlCancelSign) into StateMachineContainsTransitions
!insert (smWallet, trWlSigned) into StateMachineContainsTransitions
!insert (smWallet, trWlBroadcastOk) into StateMachineContainsTransitions
!insert (smWallet, trWlBroadcastFail) into StateMachineContainsTransitions

!insert (trWlUnlockRequest, evWlUnlockRequest) into TransitionContainsEvents
!insert (trWlAuthOk, evWlAuthOk) into TransitionContainsEvents
!insert (trWlAuthFail, evWlAuthFail) into TransitionContainsEvents
!insert (trWlResetFail, evWlResetFail) into TransitionContainsEvents
!insert (trWlLockTimeout, evWlLockTimeout) into TransitionContainsEvents
!insert (trWlSignTx, evWlSignTx) into TransitionContainsEvents
!insert (trWlCancelSign, evWlCancelSign) into TransitionContainsEvents
!insert (trWlSigned, evWlSigned) into TransitionContainsEvents
!insert (trWlBroadcastOk, evWlBroadcastOk) into TransitionContainsEvents
!insert (trWlBroadcastFail, evWlBroadcastFail) into TransitionContainsEvents


!insert (wlLocked, trWlUnlockRequest) into StateTransition
!insert (trWlUnlockRequest, wlAuthenticating) into TransitionState

!insert (wlAuthenticating, trWlAuthOk) into StateTransition
!insert (trWlAuthOk, wlUnlocked) into TransitionState

!insert (wlAuthenticating, trWlAuthFail) into StateTransition
!insert (trWlAuthFail, wlFailed) into TransitionState

!insert (wlFailed, trWlResetFail) into StateTransition
!insert (trWlResetFail, wlLocked) into TransitionState

!insert (wlUnlocked, trWlLockTimeout) into StateTransition
!insert (trWlLockTimeout, wlLocked) into TransitionState

!insert (wlUnlocked, trWlSignTx) into StateTransition
!insert (trWlSignTx, wlSigning) into TransitionState

!insert (wlSigning, trWlCancelSign) into StateTransition
!insert (trWlCancelSign, wlUnlocked) into TransitionState

!insert (wlSigning, trWlSigned) into StateTransition
!insert (trWlSigned, wlBroadcasting) into TransitionState

!insert (wlBroadcasting, trWlBroadcastOk) into StateTransition
!insert (trWlBroadcastOk, wlUnlocked) into TransitionState

!insert (wlBroadcasting, trWlBroadcastFail) into StateTransition
!insert (trWlBroadcastFail, wlFailed) into TransitionState



!new StateMachine('smPurgeJob')
!smPurgeJob.name := 'logPurgeJob'

!new State('pjIdle')
!pjIdle.name := 'idle'
!new State('pjScanning')
!pjScanning.name := 'scanning'
!new State('pjDeleting')
!pjDeleting.name := 'deleting'
!new State('pjDone')
!pjDone.name := 'done'

!insert (smPurgeJob, pjIdle) into StateMachineContainsStates
!insert (smPurgeJob, pjScanning) into StateMachineContainsStates
!insert (smPurgeJob, pjDeleting) into StateMachineContainsStates
!insert (smPurgeJob, pjDone) into StateMachineContainsStates

!insert (smPurgeJob, pjIdle) into StateMachineStartsStates


!new Transition('trPjScheduleTick')
!trPjScheduleTick.name := 'scheduleTick'
!new TimeEvent('evPjScheduleTick')
!evPjScheduleTick.time := 1440

!new Transition('trPjStartPurge')
!trPjStartPurge.name := 'startPurge'
!new TimeEvent('evPjStartPurge')
!evPjStartPurge.time := 1

!new Transition('trPjScanComplete')
!trPjScanComplete.name := 'scanComplete'
!new TimeEvent('evPjScanComplete')
!evPjScanComplete.time := 15

!new Transition('trPjDeleteComplete')
!trPjDeleteComplete.name := 'deleteComplete'
!new TimeEvent('evPjDeleteComplete')
!evPjDeleteComplete.time := 30

!new Transition('trPjReset')
!trPjReset.name := 'reset'
!new TimeEvent('evPjReset')
!evPjReset.time := 5


!insert (smPurgeJob, trPjScheduleTick) into StateMachineContainsTransitions
!insert (smPurgeJob, trPjStartPurge) into StateMachineContainsTransitions
!insert (smPurgeJob, trPjScanComplete) into StateMachineContainsTransitions
!insert (smPurgeJob, trPjDeleteComplete) into StateMachineContainsTransitions
!insert (smPurgeJob, trPjReset) into StateMachineContainsTransitions

!insert (trPjScheduleTick, evPjScheduleTick) into TransitionContainsEvents
!insert (trPjStartPurge, evPjStartPurge) into TransitionContainsEvents
!insert (trPjScanComplete, evPjScanComplete) into TransitionContainsEvents
!insert (trPjDeleteComplete, evPjDeleteComplete) into TransitionContainsEvents
!insert (trPjReset, evPjReset) into TransitionContainsEvents


!insert (pjIdle, trPjScheduleTick) into StateTransition
!insert (trPjScheduleTick, pjIdle) into TransitionState

!insert (pjIdle, trPjStartPurge) into StateTransition
!insert (trPjStartPurge, pjScanning) into TransitionState

!insert (pjScanning, trPjScanComplete) into StateTransition
!insert (trPjScanComplete, pjDeleting) into TransitionState

!insert (pjDeleting, trPjDeleteComplete) into StateTransition
!insert (trPjDeleteComplete, pjDone) into TransitionState

!insert (pjDone, trPjReset) into StateTransition
!insert (trPjReset, pjIdle) into TransitionState
```
## Generation 30 summary
| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 257 | 0.00% |
| Multiplicities Errors | 0 | 119 | 0.00% |
| Invariants Errors | 0 | 2 | 0.00% |

| No specific metrics for this system | 
 |---|

# Summary for all generations
| Summary | Value | 
|---|---| 
| Model | GPT_5_2 | 
| Type | Simple | 
| System | statemachine | 
| Number of generations | 30 | 

| General | Errors | Total | Failure (%) | 
|---|---|---|---| 
| Syntax Errors | 0 | 5344 | 0.00% |
| Multiplicities Errors | 0 | 2444 | 0.00% |
| Invariants Errors | 0 | 60 | 0.00% |

| No specific metrics for this system | 
 |---|

