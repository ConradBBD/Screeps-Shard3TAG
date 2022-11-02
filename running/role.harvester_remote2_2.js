var roleHarvesterRemote2_2 = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if (creep.room.name == 'E36N52') {
            const targetPos = new RoomPosition(30, 48, 'E37N52');
            creep.moveTo(targetPos, {visualizePathStyle: {stroke: '#ffffff'}});
            creep.memory.inPosition = false;
        }
        if (creep.room.name == 'E37N52') {

            if (!creep.memory.inPosition) {
                const targetPos = new RoomPosition(32, 48, 'E37N52');
                creep.moveTo(targetPos, {visualizePathStyle: {stroke: '#ffffff'}});
                if (creep.pos.isEqualTo(targetPos)) {
                    creep.memory.inPosition = true;
                }
            } else {
                const targetPos = new RoomPosition(32, 20, 'E37N51');
                creep.moveTo(targetPos, {visualizePathStyle: {stroke: '#ffffff'}});
            }
        }
        if (creep.room.name == 'E37N51') {
            if(creep.store.getFreeCapacity() > 0) {
                var source = creep.room.findClosestByPath(FIND_SOURCES);
                if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(source, {visualizePathStyle: {stroke: '#ffaa00'}});
                }
                if (source.energy == 0) {
                    creep.drop(RESOURCE_ENERGY);
                }
            }
            else {
                creep.drop(RESOURCE_ENERGY);
            }
        }
	}
};

module.exports = roleHarvesterRemote2_2;