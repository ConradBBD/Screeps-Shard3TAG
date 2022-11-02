var roleReserver2 = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if (creep.room.name == 'E36N52' || creep.room.name == 'E37N52') {
            const targetPos = new RoomPosition(18, 1, 'E37N51');
            creep.moveTo(targetPos, {visualizePathStyle: {stroke: '#ffffff'}});
        }
        else if (creep.room.name == 'E37N51') {
            if(creep.reserveController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
            }
        }
	}
};

module.exports = roleReserver2;