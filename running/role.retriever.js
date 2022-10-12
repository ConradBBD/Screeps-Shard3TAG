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
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_SPAWN ||
                                structure.structureType == STRUCTURE_EXTENSION ||
                                structure.structureType == STRUCTURE_CONTAINER ||
                                structure.structureType == STRUCTURE_TOWER) && 
                                structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                    }
            });
            if(targets.length > 0) {
                let spawnTarget = targets.find(target => target.structureType == STRUCTURE_SPAWN);
                // targets.removeItemOnce(spawnTarget);
                let extensionTarget = targets.find(target => target.structureType == STRUCTURE_EXTENSION);
                // targets.removeItemOnce(extensionTarget);
                if (spawnTarget && spawnTarget.store.getFreeCapacity() > 0) {
                    if(creep.transfer(spawnTarget, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(spawnTarget, {visualizePathStyle: {stroke: '#ffffff'}});
                    }
                } else if (extensionTarget && extensionTarget.store.getFreeCapacity() > 0) {
                    if(creep.transfer(extensionTarget, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(extensionTarget, {visualizePathStyle: {stroke: '#ffffff'}});
                    }
                } else {
                    if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                    }
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