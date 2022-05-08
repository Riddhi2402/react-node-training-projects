const EventEmmiter = require('events');

//Init Object
const myEmmiter = new EventEmmiter();

//listen event
myEmmiter.on('event',() => {console.log('Event Fired for event!')});
myEmmiter.on('save',(arg) => {console.log(`id = ${arg.id}, name = ${arg.name}`)});

//Init event
myEmmiter.emit('event');
myEmmiter.emit('save',{id: 101, name: "Riddhi"});

//remove the event listener
myEmmiter.off('save');
