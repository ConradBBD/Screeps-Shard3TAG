var roleHarvester2Link = {

    /** @param {Creep} creep **/
    run: function(creep) {
        const link1 = Game.getObjectById('6357f7551aa36f98a8af8598');
	    if(creep.store.getFreeCapacity() > 0) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[1], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
            if (sources[1].energy == 0) {
                if (link1.store.getFreeCapacity(RESOURCE_ENERGY) >= 100) {
                    creep.transfer(link1, RESOURCE_ENERGY);
                }
                else {
                    creep.drop(RESOURCE_ENERGY);
                }
            }
        }
        else {
            if (link1.store.getFreeCapacity(RESOURCE_ENERGY) >= 100) {
                creep.transfer(link1, RESOURCE_ENERGY);
            }
            else {
                creep.drop(RESOURCE_ENERGY);
            }
        }
	}
};

module.exports = roleHarvester2Link;