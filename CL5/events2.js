const SchoolEvents = require('./eventsSchool');

const schoolEvents = new SchoolEvents();

//  register a listener for bellRing event
schoolEvents.on('bellRing', (period) => {
    console.log(`We need to run! because ${period}`);
});

schoolEvents.startPeriod();
