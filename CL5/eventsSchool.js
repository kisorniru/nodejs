const EventEmitter = require('events');

class SchoolEvents extends EventEmitter {
    startPeriod() {
        console.log('Class has started!');

        // raise event when bell rings
        //  raise an event
        setTimeout(() => {
            this.emit('bellRing', 'second period ended.');
        }, 2000);
    }
}

module.exports = SchoolEvents;
