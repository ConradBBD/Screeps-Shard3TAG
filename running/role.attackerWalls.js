var roleAttackerWalls = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if (creep.room.name == 'E36N52') {
            creep.memory.inPosition = false;
            var targetPos = new RoomPosition(48, 42, 'E37N52');
            creep.moveTo(targetPos, {visualizePathStyle: {stroke: '#ffffff'}});
        } else if (creep.room.name == 'E37N52') {

            var targetPos = new RoomPosition(18, 2, 'E37N51');
            creep.moveTo(targetPos, {visualizePathStyle: {stroke: '#ffffff'}});
        } else if (creep.room.name == 'E37N51') {
            const target = creep.pos.findClosestByRange(FIND_STRUCTURES, {
				filter: (structure) => {return (structure.structureType == STRUCTURE_WALL);}
			});
            if(target) {
                creep.memory.hasTarget = true;
                if(creep.attack(target) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target);
                }
            } else {
                creep.memory.hasTarget = false;
            }
        }
	}
};

module.exports = roleAttackerWalls;