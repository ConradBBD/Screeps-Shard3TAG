var roleTransorter = {

    /** @param {Creep} creep **/
    run: function(creep) {
	    if(creep.store.getUsedCapacity() == 0) {
            var storageTargets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return structure.structureType == STRUCTURE_STORAGE && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                }
            });
            if (storageTargets.length > 0) {
                if(creep.withdraw(storageTargets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(storageTargets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
        else {
            var spawnTargets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return structure.structureType == STRUCTURE_SPAWN && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                    }
                });
            var extensionTargets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return structure.structureType == STRUCTURE_EXTENSION && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                }
            });
            var otherTargets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_TOWER || structure.structureType == STRUCTURE_CONTAINER) && 
                                structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                    }
            });
            var bigUpgradersRefill = creep.room.find(FIND_CREEPS, {
                    filter: (creep) => {
                        return (creep.memory.role == "bigupgrader") && 
                                creep.store.getFreeCapacity(RESOURCE_ENERGY) > 200;
                    }
            });
            if (spawnTargets.length > 0) {
                if(creep.transfer(spawnTargets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(spawnTargets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            } else if (extensionTargets.length > 0) {
                if(creep.transfer(extensionTargets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(extensionTargets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            } else if (otherTargets.length > 0) {
                if(creep.transfer(otherTargets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(otherTargets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            } else if (bigUpgradersRefill > 0) {
                if(creep.transfer(bigUpgradersRefill[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(bigUpgradersRefill[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
	}
};

module.exports = roleTransorter;