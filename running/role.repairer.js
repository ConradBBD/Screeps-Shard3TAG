var roleRepairer = {

    /** @param {Creep} creep **/
    run: function(creep) {

	    if(creep.memory.repairing && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.repairing = false;
            creep.say('🔄 harvest');
	    }
	    if(!creep.memory.repairing && creep.store.getFreeCapacity() == 0) {
	        creep.memory.repairing = true;
	        creep.say('🚧 repair');
	    }

		if(creep.memory.repairing) {
	        var closestDamagedStructure = creep.pos.findClosestByRange(FIND_STRUCTURES, {
				filter: (structure) => {return (structure.hits < structure.hitsMax) && (structure.structureType != STRUCTURE_WALL);}
			});
			if(closestDamagedStructure) {
				if(creep.repair(closestDamagedStructure) == ERR_NOT_IN_RANGE) {
					creep.moveTo(closestDamagedStructure, {visualizePathStyle: {stroke: '#ffffff'}});
				}
			}
	    } else {
			var targetContainer = creep.room.find(FIND_STRUCTURES, {
				filter: (structure) => {
					return structure.structureType == STRUCTURE_CONTAINER && 
							structure.store.getUsedCapacity(RESOURCE_ENERGY) > 0;
				}
			});
			var roomStorage = creep.room.storage;
			if (roomStorage.store.getUsedCapacity(RESOURCE_ENERGY) > 0) {
			    if(creep.withdraw(roomStorage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
					creep.moveTo(roomStorage);
				}
			} else if (targetContainer.length > 0) {
				var containerIndex = -1;
				for (let i = 0; i < targetContainer.length; i++) {
					if (targetContainer[i].structureType == STRUCTURE_CONTAINER) {
						if (targetContainer[i].store.getUsedCapacity() > 0) {
							containerIndex = i;
						}
					}
				}
				if(containerIndex != -1 && creep.withdraw(targetContainer[containerIndex], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
					creep.moveTo(targetContainer[containerIndex]);
				}
			} 
			// else {
			// 	var target = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES);
			// 	if(target) {
			// 		if(creep.pickup(target) == ERR_NOT_IN_RANGE) {
			// 			creep.moveTo(target);
			// 		}
			// 	}
			// }
	    }
		
	}
};

module.exports = roleRepairer;