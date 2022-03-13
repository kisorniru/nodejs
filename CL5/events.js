const EventEmitter = require('events');

const emitter = new EventEmitter();

//  register a listener for bellRing event
emitter.on('bellRing', (period) => {
    console.log(`We need to run! because ${period}`);
});

//  raise an event
setTimeout(() => {
    emitter.emit('bellRing', 'second period ended.');
}, 2000);
emitter.emit('bellRing');

//  register a listener for bellRing event
emitter.on('bellRing2', ({ period, text }) => {
    console.log(`We need to run! because ${period} ${text}`);
});

//  raise an event
setTimeout(() => {
    emitter.emit('bellRing2', {
        period: 'second',
        text: 'period ended.',
    });
}, 2000);

// Order is important for event listener.
//  First have to register listener then rase event.
//  Best practise to pass one single one param not more then that
