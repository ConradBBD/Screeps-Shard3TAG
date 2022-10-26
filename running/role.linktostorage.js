var roleLinkToStore = {

    /** @param {Creep} creep **/
    run: function(creep) {

        const targetPos = new RoomPosition(29, 24, 'E36N52');
        const targetLink = Game.getObjectById('6357eea07a86a45a6bc14b13');
        var roomStorage = creep.room.storage;
        if (!creep.memory.inPlace) {
            if (!(creep.pos == targetPos)) {
                creep.moveTo(targetPos);
                creep.say('Moving into place');
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