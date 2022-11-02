var roleReserver = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if (creep.room.name == 'E36N52') {
            const targetPos = new RoomPosition(38, 33, 'E37N52');
            creep.moveTo(targetPos, {visualizePathStyle: {stroke: '#ffffff'}});
        }
        else if (creep.room.name == 'E37N52') {
            if(creep.reserveController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                const targetPos = new RoomPosition(38, 33, 'E37N52');
                creep.moveTo(targetPos, {visualizePathStyle: {stroke: '#ffffff'}});
            }
        }
	}
};

module.exports = roleReserver;