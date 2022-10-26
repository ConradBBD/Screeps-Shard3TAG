var structureDepositLink = {

    /** @param {StructureLink} link **/
    run: function(link) {
        const targetLink = Game.getObjectById('6357eea07a86a45a6bc14b13');
        if ((link.store.getUsedCapacity(RESOURCE_ENERGY) % 100) == 0 || (link.store.getUsedCapacity(RESOURCE_ENERGY) % 100) > 700) {
            link.transferEnergy(targetLink);
        }
	}
};

module.exports = structureDepositLink;