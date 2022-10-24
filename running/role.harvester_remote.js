var roleHarvesterRemote = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if (creep.room.name == 'E36N52') {
            const targetPos = new RoomPosition(25, 35, 'E37N52');
            creep.moveTo(targetPos, {visualizePathStyle: {stroke: '#ffffff'}});
        }
        if (creep.room.name == 'E37N52') {

            if(creep.store.getFreeCapacity() > 0) {
                var sources = creep.room.find(FIND_SOURCES);
                if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
                }
                if (sources[0].energy == 0) {
                    creep.drop(RESOURCE_ENERGY);
                }
            }
            else {
                creep.drop(RESOURCE_ENERGY);
            }
        }
	}
};

module.exports = roleHarvesterRemote;