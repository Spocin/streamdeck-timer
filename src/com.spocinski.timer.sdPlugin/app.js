/// <reference path="libs/js/action.js" />
/// <reference path="libs/js/stream-deck.js" />

const myAction = new Action('com.spocinski.timer.action');

/**
 * The first event fired when Stream Deck starts
 */
$SD.onConnected(({ actionInfo, appInfo, connection, messageType, port, uuid }) => {
	console.log('Stream Deck connected!');
});

let intervalId;

myAction.onKeyUp(({ action, context, device, event, payload }) => {
	if (!intervalId) {
		console.log('Timer started');
		intervalId = setInterval(() => {
			console.log(new Date());
		}, 1000);
	} else {
		console.log('Timer stopped');
		window.clearInterval(intervalId);
		intervalId = null;
	}
});

myAction.onDialRotate(({ action, context, device, event, payload }) => {
	console.log('Your dial code goes here!');
});