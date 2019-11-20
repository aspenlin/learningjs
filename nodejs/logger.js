const EventEmitter = require('events');
const uuid = require('uuid');

// console.log(uuid.v4());
class Logger extends EventEmitter {
    log(msg){
        this.emit('message', { id:uuid.v4(), msg:msg });
    }
}

const logger = new Logger();

logger.on('message', (data) => console.log('Called Message:', data));

logger.log('Hello World');
logger.log('How are you?');
logger.log('Are you OK?');