var roleHarvester2 = {

    /** @param {Creep} creep **/
    run: function(creep) {
	    if(creep.store.getFreeCapacity() > 0) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[1], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
            if (sources[1].energy == 0) {
                creep.drop(RESOURCE_ENERGY);
            }
        }
        else {
            creep.drop(RESOURCE_ENERGY);
        }
	}
};

module.exports = roleHarvester2;