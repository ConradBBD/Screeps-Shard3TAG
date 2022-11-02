var roleReserver2 = {

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

        if (creep.room.name == 'E36N52' || creep.room.name == 'E37N52') {
            const targetPos = new RoomPosition(18, 1, 'E37N51');
            creep.moveTo(targetPos, {visualizePathStyle: {stroke: '#ffffff'}});
        }
        else if (creep.room.name == 'E37N51') {
            if(creep.memory.reserving) {
                if(creep.reserveController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
            else {
                var source = creep.pos.findClosestByPath(FIND_SOURCES);
                if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(source, {visualizePathStyle: {stroke: '#ffaa00'}});
                }
            }
        }
	}
};

module.exports = roleReserver2;