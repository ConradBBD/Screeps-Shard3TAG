var roleRetriever = {

    /** @param {Creep} creep **/
    run: function(creep) {
	    if(creep.store.getFreeCapacity() > 0) {
            const target = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES);
            if(target) {
                if(creep.pickup(target) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target);
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
            var storageTargets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return structure.structureType == STRUCTURE_STORAGE && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                }
            });
            var otherTargets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_CONTAINER ||
                                structure.structureType == STRUCTURE_TOWER) && 
                                structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
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
            } else if (storageTargets.length > 0) {
                if(creep.transfer(storageTargets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(storageTargets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            } else if (otherTargets.length > 0) {
                if(creep.transfer(otherTargets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(otherTargets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
	}
};

function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

module.exports = roleRetriever;