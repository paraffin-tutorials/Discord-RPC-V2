var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })

const { 
    id,
    details1, 
    state1, 
    large_image1, 
    small_image1,
    large_text1,
    small_text1,
    label1,
    labelurl1,
    label2,
    labelurl2
} = require('./config.json')


client.on('ready', () => {
console.log(`RPC ID : ${id} Started`);
        client.request('SET_ACTIVITY', {
            pid: process.pid,
                activity : {
                    details : details1,
                    state : state1,
                    assets : {
                    large_image : large_image1,
                    large_text : large_text1,
                    small_image : small_image1,
                    small_text : small_text1
                    },
                    buttons : [{label : label1 , url : labelurl1} , {label : label2,url : labelurl2}]
                },
    })
})

client.login({ clientId : `${id}` }).catch(console.error);
