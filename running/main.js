var roleHarvester = require('role.harvester');
var roleHarvester2 = require('role.harvester2');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRetriever = require('role.retriever');
var roleRepairer = require('role.repairer');
var roleRepairerWalls = require('role.repairerWalls');
var roleTransporter = require('role.transporter');
var roleRetrieverRemote = require('role.retriever_remote');
var roleHarvesterRemote = require('role.harvester_remote');
var roleReserver = require('role.reserver');
var roleHarvester2Link = require('role.harvester2Link');
var roleLinkToStore = require('role.linktostorage');
var roleBigUpgrader = require('role.bigupgrader');
var roleAttackerDefender = require('role.attackerdefender');
var roleAttackerWalls = require('role.attackerWalls');
var roleHarvesterRemote2_1 = require('role.harvester_remote2_1');
var roleHarvesterRemote2_2 = require('role.harvester_remote2_2');
var roleRetrieverRemote2_1 = require('role.retriever_remote2_1');
var roleRetrieverRemote2_2 = require('role.retriever_remote2_2');


// Game.spawns['Spawn1'].spawnCreep([TOUGH, TOUGH, TOUGH, TOUGH, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK], "Attacker1", {memory: {role: 'attackerdefender'}});


module.exports.loop = function () {
    
    if (Game.cpu.bucket >= 10000) {
        Game.cpu.generatePixel();
    }

    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

    var tower = Game.getObjectById('6345c1f45e37700aabdaea7d');
    if(tower) {
        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower.attack(closestHostile);
        }
    }
    
    var tower = Game.getObjectById('634a90128c08ceedd36f5075');
    if(tower) {
        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower.attack(closestHostile);
        }
    }

    const targetLink = Game.getObjectById('6357eea07a86a45a6bc14b13');
    const link1 = Game.getObjectById('6357f7551aa36f98a8af8598');
    const link2 = Game.getObjectById('635806885e9c7bf8ae704258');
    if ((link1.store.getUsedCapacity(RESOURCE_ENERGY) % 100) == 0 || link1.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
        link1.transferEnergy(targetLink);
    }
    if ((link2.store.getUsedCapacity(RESOURCE_ENERGY) % 100) == 0 || link2.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
        link2.transferEnergy(targetLink);
    }

    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    console.log('Harvesters: ' + harvesters.length);
    
    var harvesters2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester2');
    console.log('Harvesters2: ' + harvesters2.length);

    var harvesters2Link = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester2Link');
    console.log('Harvesters2Link: ' + harvesters2Link.length);

    var linkToStores = _.filter(Game.creeps, (creep) => creep.memory.role == 'linktostorage');
    console.log('LinkToStores: ' + linkToStores.length);
    
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    console.log('Upgraders: ' + upgraders.length);
    
    var bigUpgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'bigupgrader');
    console.log('BigUpgraders: ' + upgraders.length);

    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    console.log('Builders: ' + builders.length);
    
    var retrievers = _.filter(Game.creeps, (creep) => creep.memory.role == 'retriever');
    console.log('Retrievers: ' + retrievers.length);

    var repairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');
    console.log('Repairers: ' + repairers.length);

    var repairersWalls = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairerWalls');
    console.log('RepairersWalls: ' + repairers.length);

    var transporters = _.filter(Game.creeps, (creep) => creep.memory.role == 'transporter');
    console.log('Transporters: ' + transporters.length);

    var retrieversRemote = _.filter(Game.creeps, (creep) => creep.memory.role == 'retriever_remote');
    console.log('RetrieversRemote: ' + retrieversRemote.length);

    var harvestersRemote = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester_remote');
    console.log('HarvestersRemote: ' + harvestersRemote.length);

    var reservers = _.filter(Game.creeps, (creep) => creep.memory.role == 'reserver');
    console.log('Reservers: ' + reservers.length);
    
    var defenders = _.filter(Game.creeps, (creep) => creep.memory.role == 'attackerdefender');
    console.log('Defenders: ' + defenders.length);

    var wallAttackers = _.filter(Game.creeps, (creep) => creep.memory.role == 'wallAttacker');
    console.log('WallAttacker: ' + wallAttackers.length);

    var remoteHarvesters21 = _.filter(Game.creeps, (creep) => creep.memory.role == 'remoteharv21');
    console.log('Remote Harvesters 2_1: ' + remoteHarvesters21.length);

    var remoteHarvesters22 = _.filter(Game.creeps, (creep) => creep.memory.role == 'remoteharv22');
    console.log('Remote Harvesters 2_2: ' + remoteHarvesters22.length);

    var remoteRetrievers21 = _.filter(Game.creeps, (creep) => creep.memory.role == 'remoteretr21');
    console.log('Remote Retrievers 2_1: ' + remoteRetrievers21.length);

    var remoteRetrievers22 = _.filter(Game.creeps, (creep) => creep.memory.role == 'remoteretr22');
    console.log('Remote Retrievers 2_2: ' + remoteRetrievers22.length);

    if(harvesters.length < 1) {
        var newName = 'Harvester' + Game.time;
        console.log('Spawning new harvester: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName, 
            {memory: {role: 'harvester'}});
    }

    if(retrievers.length < 2) {
        var newName = 'Retriever' + Game.time;
        console.log('Spawning new retriever: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([CARRY, CARRY, MOVE, MOVE], newName, 
            {memory: {role: 'retriever'}});
    }

    if(retrieversRemote.length < 3) {
        var newName = 'RetrieverRemote' + Game.time;
        console.log('Spawning new retriever_remote: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE], newName, 
            {memory: {role: 'retriever_remote'}});
    }
    
    if(harvesters2.length < 1) {
        var newName = 'HarvesterTwo' + Game.time;
        console.log('Spawning new harvester2: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK, WORK, CARRY, MOVE], newName, 
            {memory: {role: 'harvester2'}});
    }

    if(harvesters2Link.length < 1) {
        var newName = 'HarvesterTwoLink' + Game.time;
        console.log('Spawning new harvester2Link: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE], newName, 
            {memory: {role: 'harvester2Link'}});
    }

    if(linkToStores.length < 1) {
        var newName = 'LinkToStore' + Game.time;
        console.log('Spawning new linkToStore: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([CARRY, CARRY, MOVE], newName, 
            {memory: {role: 'linktostorage'}});
    }

    if(harvestersRemote.length < 2) {
        var newName = 'HarvesterRemote' + Game.time;
        console.log('Spawning new harvesterRemote: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK, WORK, WORK, CARRY, MOVE, MOVE, MOVE], newName, 
            {memory: {role: 'harvester_remote'}});
    }
    
    if(upgraders.length < 3) {
        var newName = 'Upgrader' + Game.time;
        console.log('Spawning new upgrader: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK, WORK, WORK, WORK, CARRY, MOVE], newName, 
            {memory: {role: 'upgrader'}});
    }
    
    if(bigUpgraders.length < 1) {
        var newName = 'BigUpgrader' + Game.time;
        console.log('Spawning new bigUpgrader: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName, 
            {memory: {role: 'bigupgrader'}});
    }

    if(reservers.length < 1) {
        var newName = 'Reserver' + Game.time;
        console.log('Spawning new reserver: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK, CLAIM, CLAIM, CARRY, MOVE, MOVE], newName, 
            {memory: {role: 'reserver'}});
    }

    if(builders.length < 1) {
        var newName = 'Builder' + Game.time;
        console.log('Spawning new builder: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName, 
            {memory: {role: 'builder'}});
    }

    if(repairers.length < 1) {
        var newName = 'Repairer' + Game.time;
        console.log('Spawning new repairer: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName, 
            {memory: {role: 'repairer'}});
    }

    if(repairersWalls.length < 1) {
        var newName = 'RepairerWalls' + Game.time;
        console.log('Spawning new repairerWalls: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName, 
            {memory: {role: 'repairerWalls'}});
    }

    if(transporters.length < 4) {
        var newName = 'Transporter' + Game.time;
        console.log('Spawning new transporter: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([CARRY, CARRY, MOVE, MOVE], newName, 
            {memory: {role: 'transporter'}});
    }
    
    if(defenders.length < 1) {
        var newName = 'Defender' + Game.time;
        console.log('Spawning new defender: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([TOUGH, TOUGH, TOUGH, TOUGH, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK], newName, 
            {memory: {role: 'attackerdefender'}});
    }

    if(wallAttackers.length < 0) {
        var newName = 'WallAttacker' + Game.time;
        console.log('Spawning new wall attacker: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([ MOVE, ATTACK], newName, 
            {memory: {role: 'wallAttacker'}});
    }

    if(remoteHarvesters21.length < 0) {
        var newName = 'RemoteHarvester21' + Game.time;
        console.log('Spawning new RemoteHarvester21: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK, WORK, WORK, CARRY, MOVE, MOVE, MOVE, MOVE], newName, 
            {memory: {role: 'remoteharv21'}});
    }

    if(remoteHarvesters22.length < 0) {
        var newName = 'RemoteHarvester22' + Game.time;
        console.log('Spawning new RemoteHarvester22: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK, WORK, WORK, CARRY, MOVE, MOVE, MOVE, MOVE], newName, 
            {memory: {role: 'remoteharv22'}});
    }

    if(remoteRetrievers21.length < 0) {
        var newName = 'remoteRetrievers21' + Game.time;
        console.log('Spawning new remoteRetrievers21: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE], newName, 
            {memory: {role: 'remoteretr21'}});
    }

    if(remoteRetrievers22.length < 0) {
        var newName = 'remoteRetrievers22' + Game.time;
        console.log('Spawning new remoteRetrievers22: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE], newName, 
            {memory: {role: 'remoteretr22'}});
    }
    
    if(Game.spawns['Spawn1'].spawning) { 
        var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
        Game.spawns['Spawn1'].room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Game.spawns['Spawn1'].pos.x + 1, 
            Game.spawns['Spawn1'].pos.y, 
            {align: 'left', opacity: 0.8});
    }

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'harvester2') {
            roleHarvester2.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'bigupgrader') {
            roleBigUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if(creep.memory.role == 'retriever') {
            roleRetriever.run(creep);
        }
        if(creep.memory.role == 'repairer') {
            roleRepairer.run(creep);
        }
        if(creep.memory.role == 'repairerWalls') {
            roleRepairerWalls.run(creep);
        }
        if(creep.memory.role == 'transporter') {
            roleTransporter.run(creep);
        }
        if(creep.memory.role == 'retriever_remote') {
            roleRetrieverRemote.run(creep);
        }
        if(creep.memory.role == 'harvester_remote') {
            roleHarvesterRemote.run(creep);
        }
        if(creep.memory.role == 'reserver') {
            roleReserver.run(creep);
        }
        if(creep.memory.role == 'harvester2Link') {
            roleHarvester2Link.run(creep);
        }
        if(creep.memory.role == 'linktostorage') {
            roleLinkToStore.run(creep);
        }
        if(creep.memory.role == 'attackerdefender') {
            roleAttackerDefender.run(creep);
        }
        if(creep.memory.role == 'wallAttacker') {
            roleAttackerWalls.run(creep);
        }
        if(creep.memory.role == 'remoteharv21') {
            roleHarvesterRemote2_1.run(creep);
        }
        if(creep.memory.role == 'remoteharv22') {
            roleHarvesterRemote2_2.run(creep);
        }
        if(creep.memory.role == 'remoteretr21') {
            roleRetrieverRemote2_1.run(creep);
        }
        if(creep.memory.role == 'remoteretr22') {
            roleRetrieverRemote2_2.run(creep);
        }
    }
}