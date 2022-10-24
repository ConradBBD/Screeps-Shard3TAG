var roleReserver = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if(creep.memory.reserving && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.reserving = false;
            creep.say('🔄 harvest');
	    }
	    if(!creep.memory.reserving && creep.store.getFreeCapacity() == 0) {
	        creep.memory.reserving = true;
	        creep.say('⚡ upgrade');
	    }

        if (creep.room.name == 'E36N52') {
            const targetPos = new RoomPosition(38, 33, 'E37N52');
            creep.moveTo(targetPos, {visualizePathStyle: {stroke: '#ffffff'}});
        }
        else if (creep.room.name == 'E37N52') {
            if(creep.memory.reserving) {
                if(creep.reserveController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                    const targetPos = new RoomPosition(38, 33, 'E37N52');
                    creep.moveTo(targetPos, {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
            else {
                var sources = creep.room.find(FIND_SOURCES);
                if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
                }
            }
        }
	}
};

module.exports = roleReserver;