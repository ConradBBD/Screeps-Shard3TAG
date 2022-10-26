var roleRetrieverRemote = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if (creep.room.name == 'E36N52') {
            if (creep.store.getUsedCapacity() == 0) {
                const targetPos = new RoomPosition(25, 34, 'E37N52');
                creep.moveTo(targetPos, {visualizePathStyle: {stroke: '#ffffff'}});
            } else {
                const link2 = Game.getObjectById('635806885e9c7bf8ae704258');
                if (link2.store.getFreeCapacity(RESOURCE_ENERGY) >= 100) {
                    creep.transfer(link2, RESOURCE_ENERGY);
                }

                var storageTargets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return structure.structureType == STRUCTURE_STORAGE && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                    }
                });
                if (storageTargets.length > 0) {
                    if(creep.transfer(storageTargets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(storageTargets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                    }
                }
            }
        } else if (creep.room.name == 'E37N52') {
            if (creep.store.getFreeCapacity() > 0) {
                const target = creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES);
                if(target) {
                    if(creep.pickup(target) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(target, {visualizePathStyle: {stroke: '#ffffff'}});
                    }
                }
            }
            else {
                const targetPos = new RoomPosition(25, 34, 'E36N52');
                creep.moveTo(targetPos, {visualizePathStyle: {stroke: '#ffffff'}});
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

module.exports = roleRetrieverRemote;