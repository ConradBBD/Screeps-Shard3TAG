var roleAttackerDefender2 = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if (creep.room.name == 'E36N52' || creep.room.name == 'E37N52') {
            creep.memory.inPosition = false;
            const targetPos = new RoomPosition(22, 30, 'E37N51');
            creep.moveTo(targetPos, {visualizePathStyle: {stroke: '#ffffff'}});
        } else if (creep.room.name == 'E37N51') {
            if (!creep.memory.inPosition && !creep.memory.hasTarget) {
                const targetPos = new RoomPosition(22, 30, 'E37N52');
                creep.moveTo(targetPos, {visualizePathStyle: {stroke: '#ffffff'}});
                if (creep.pos.isEqualTo(targetPos)) {
                    creep.memory.inPosition = true;
                }
            }
            // console.log(creep.memory.inPosition);
            const target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
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

module.exports = roleAttackerDefender2;