// Create an EventEmitter instance, Register an event "greet" and print a message when triggered. Fire that event manually using .emit()
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('greet', () => {
    console.log("Hello, welcome to the event emitter example!");
});

emitter.emit('greet');

setInterval(() => {
    emitter.emit('tick');
}, 2000);
emmitter.on('tick', () => {
    console.log("Tick event triggered!"); //on->use to listen to the event, emit->use to trigger the event
});