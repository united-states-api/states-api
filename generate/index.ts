export {};
const { spawn } = require('child_process');
const events = require('events');
const csv = require('csv-parser');
const fs = require('fs');
const fastcsv = require('fast-csv');
const states = require('./states');

var uint8arrayToString = function (data) {
    return String.fromCharCode.apply(null, data);
};

class State {
    emitter = new events.EventEmitter();
    data: any;

    constructor(name: string) {
        this.build(name);
    }

    build(name: string) {
        let dataToSend: string;
        const python = spawn('python', ['scrape.py', name]);
        python.stdout.on('data', function (data) {
            dataToSend = data;
        });

        python.on('close', (code) => {
            console.log(uint8arrayToString(dataToSend));
            const parsed = JSON.parse(uint8arrayToString(dataToSend));
            this.data = parsed;
            this.emitter.emit("finished");
        });
    }
}

states.forEach((name) => {
    const state = new State(name);
    state.emitter.once('finished', () => {
        console.log(state.data);
        const ws = fs.createWriteStream(`../data/${state.data.state}.csv`);
        fastcsv.write([state.data], { headers: true }).pipe(ws);
    })
})


