const EventEmitter = require('events');

const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', () => {
    console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', (arg1, arg2) => {
    console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', (...args) => {
    const parameters = args.join(', ');
    console.log(`event with parameters ${parameters} in third listener`);
});
// Forth listener
myEmitter.on('foo', () => {});
myEmitter.on('bar', () => {});

console.log(myEmitter.listeners('event'));
myEmitter.emit('event', 1, 2, 3, 4, 5);

// console.log(myEmitter.removeAllListeners());
console.log(myEmitter.eventNames());
console.log(myEmitter.getMaxListeners());
console.log(myEmitter.listenerCount('event'));
console.log(myEmitter.listenerCount('foo'));
console.log(myEmitter.listeners('foo'));
