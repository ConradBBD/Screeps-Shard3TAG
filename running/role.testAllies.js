var roleTestAllies = {

    /** @param {Creep} creep **/
    run: function(creep) {

        const targetPos = new RoomPosition(25, 25, 'E35N51');
        creep.moveTo(targetPos);
	}
};

module.exports = roleTestAllies;