var roleHarvester = require('role.harvester');
var roleHarvester2 = require('role.harvester2');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRetriever = require('role.retriever');
var roleRepairer = require('role.repairer');
var roleRepairerWalls = require('role.repairerWalls');

module.exports.loop = function () {

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

    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    console.log('Harvesters: ' + harvesters.length);
    
    var harvesters2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester2');
    console.log('Harvesters2: ' + harvesters2.length);
    
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    console.log('Upgraders: ' + upgraders.length);

    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    console.log('Buidlers: ' + builders.length);
    
    var retrievers = _.filter(Game.creeps, (creep) => creep.memory.role == 'retriever');
    console.log('Retrievers: ' + retrievers.length);

    var repairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');
    console.log('Repairers: ' + repairers.length);

    var repairersWalls = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairerWalls');
    console.log('RepairersWalls: ' + repairers.length);

    if(harvesters.length < 2) {
        var newName = 'Harvester' + Game.time;
        console.log('Spawning new harvester: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName, 
            {memory: {role: 'harvester'}});
    }

    if(retrievers.length < 6) {
        var newName = 'Retriever' + Game.time;
        console.log('Spawning new retriever: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([CARRY, CARRY, MOVE, MOVE], newName, 
            {memory: {role: 'retriever'}});
    }
    
    if(harvesters2.length < 3) {
        var newName = 'HarvesterTwo' + Game.time;
        console.log('Spawning new harvester2: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK, WORK, CARRY, MOVE], newName, 
            {memory: {role: 'harvester2'}});
    }
    
    if(upgraders.length < 4) {
        var newName = 'Upgrader' + Game.time;
        console.log('Spawning new upgrader: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK, WORK, WORK, WORK, CARRY, MOVE], newName, 
            {memory: {role: 'upgrader'}});
    }

    if(builders.length < 6) {
        var newName = 'Builder' + Game.time;
        console.log('Spawning new builder: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK, WORK, CARRY, CARRY, MOVE, MOVE], newName, 
            {memory: {role: 'builder'}});
    }

    if(repairers.length < 2) {
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
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if(creep.memory.role == 'retriever') {
            roleRetriever.run(creep);
        }
        if(creep.memory.role == 'repairer') {
            roleRepairer.run(creep);
        }
        if(creep.memory.role == 'repairer') {
            roleRepairer.run(creep);
        }
    }
}