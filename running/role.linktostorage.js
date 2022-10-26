var roleLinkToStore = {

    /** @param {Creep} creep **/
    run: function(creep) {

        const targetPos = new RoomPosition(29, 24, 'E36N52');
        const targetLink = Game.getObjectById('6357eea07a86a45a6bc14b13');
        const roomStorage = creep.room.storage;
        if (!creep.memory.inPlace) {
            if (!creep.pos.isEqualTo(targetPos)) {
                creep.memory.inPlace = false;
                creep.moveTo(targetPos);
                creep.say('Moving');
            } else {
                creep.memory.inPlace = true;
                creep.say('In place');
            }
        } else {
            if (targetLink.store.getUsedCapacity(RESOURCE_ENERGY) > 0) {
                creep.withdraw(targetLink, RESOURCE_ENERGY);
                creep.transfer(roomStorage, RESOURCE_ENERGY);
            }
        }
	}
};

module.exports = roleLinkToStore;