var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {

	    if(creep.memory.building && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.building = false;
            creep.say('🔄 harvest');
	    }
	    if(!creep.memory.building && creep.store.getFreeCapacity() == 0) {
	        creep.memory.building = true;
	        creep.say('🚧 build');
	    }

	    if(creep.memory.building) {
	        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if(targets.length) {
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
	    }
	    else {

			var target = creep.room.find(FIND_MY_STRUCTURES);
			if (target) {
				var containerIndex = -1;
				for (let i = 0; i < target.length; i++) {
					if (target[i].structureType == STRUCTURE_CONTAINER) {
						if (target[i].store.getCapacity() > 0) {
							containerIndex = i;
						}
					}
				}
				if(containerIndex != -1 && creep.withdraw(target[containerIndex], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
					creep.moveTo(target[containerIndex]);
				}
			} else {
				target = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES);
				if(target) {
					if(creep.pickup(target) == ERR_NOT_IN_RANGE) {
						creep.moveTo(target);
					}
				}
			}
	       // var sources = creep.room.find(FIND_SOURCES);
        //     if(creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
        //         creep.moveTo(sources[1], {visualizePathStyle: {stroke: '#ffaa00'}});
        //     }
	    }
	}
};

module.exports = roleBuilder;