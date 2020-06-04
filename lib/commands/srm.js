var logger = require('pomelo-logger').getLogger(__filename);
var util = require('../util');
var consts = require('../consts');

module.exports = function(opts) {
    return new Command(opts);
};

module.exports.commandId = 'srm';
module.exports.helpCommand = 'help srm';

var Command = function(opt){

}

Command.prototype.handle = function(agent, comd, argv, rl, client, msg){
    if (!comd) {
        agent.handle(module.exports.helpCommand, msg, rl, client);
        return;
    }

    var Context = agent.getContext();
    if (Context !== 'all') {
        util.log('\n' + consts.COMANDS_CONTEXT_ERROR + '\n');
        rl.prompt();
        return;
    }

    var argvs = util.argsFilter(argv);

    if(argvs.length < 2){
        agent.handle(module.exports.helpCommand, msg, rl, client);
        return;
    }

    var deleteServerID = comd;
    var cmd1 = "app.getServers()";
    client.request('watchServer', {
        comd: "servers",
        param: "",
        context: "all"
    }, function(err, data) {
        if (err) console.log(err);


        var serverlist =[];
        if(!data.msg.hasOwnProperty(deleteServerID)){
            util.log('\n serverid not found \n');
            rl.prompt();
            return;
        }
        for(var key in data.msg){
            if(/connector/i.test(key)){
                serverlist.push(key);
            }
        }


        serverlist.forEach(context => {
            var cmd2 = 'app.removeServers(["'+deleteServerID+'"])';
            client.request('watchServer', {
                comd: "run",
                param: cmd2,
                context: context
            }, function(err, data){
                if (err) console.log(err);
                else util.formatOutput(module.exports.commandId, context+" srm success");
                rl.prompt();
            });
        })
    });


}