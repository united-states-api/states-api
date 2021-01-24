const csv = require('csv-parser');
const fs = require('fs');
const express = require('express');
const server = express();
const port = 8080;
const version = 'v1';
const api = '/api/' + version;

server.get('/', (req, res) => {
   res.send('Welcome to the United States API')
})

server.get(api + '/alabama', (_, res) => {
    fs.createReadStream('data/Alabama.csv').pipe(csv()).on('data', (row) => {
        res.send(row);
    });
});

server.get(api + '/alaska', (_, res) => {
    fs.createReadStream('data/Alaska.csv').pipe(csv()).on('data', (row) => {
        res.send(row);
    });
});

server.get(api + '/arizona', (_, res) => {
    fs.createReadStream('data/arizona.csv').pipe(csv()).on('data', (row) => {
        res.send(row);
    });
});

server.get(api + '/arkansas', (_, res) => {
    fs.createReadStream('data/Arkansas.csv').pipe(csv()).on('data', (row) => {
        res.send(row);
    });
});

server.get(api + '/california', (_, res) => {
    fs.createReadStream('data/California.csv').pipe(csv()).on('data', (row) => {
        res.send(row);
    });
});

server.get(api + '/colorado', (_, res) => {
    fs.createReadStream('data/Colorado.csv').pipe(csv()).on('data', (row) => {
        res.send(row);
    });
});

server.get(api + '/connecticut', (_, res) => {
    fs.createReadStream('data/Connecticut.csv').pipe(csv()).on('data', (row) => {
        res.send(row);
    });
});

server.get(api + '/delaware', (_, res) => {
    fs.createReadStream('data/Delaware.csv').pipe(csv()).on('data', (row) => {
        res.send(row);
    });
});

server.get(api + '/florida', (_, res) => {
    fs.createReadStream('data/Florida.csv').pipe(csv()).on('data', (row) => {
        res.send(row);
    });
});

server.get(api + '/georgia', (_, res) => {
    fs.createReadStream('data/Georgia_(U.S._state).csv').pipe(csv()).on('data', (row) => {
        res.send(row);
    });
});

server.get(api + '/hawaii', (_, res) => {
    fs.createReadStream('data/Hawaii.csv').pipe(csv()).on('data', (row) => {
        res.send(row);
    });
});

server.get(api + '/idaho', (_, res) => {
    fs.createReadStream('data/Idaho.csv').pipe(csv()).on('data', (row) => {
        res.send(row);
    });
});

server.get(api + '/illinois', (_, res) => {
    fs.createReadStream('data/Illinois.csv').pipe(csv()).on('data', (row) => {
        res.send(row);
    });
});

server.get(api + '/indiana', (_, res) => {
    fs.createReadStream('data/Indiana.csv').pipe(csv()).on('data', (row) => {
        res.send(row);
    });
});

server.get(api + '/iowa', (_, res) => {
    fs.createReadStream('data/Iowa.csv').pipe(csv()).on('data', (row) => {
        res.send(row);
    });
});

server.get(api + '/kansas', (_, res) => {
    fs.createReadStream('data/Kansas.csv').pipe(csv()).on('data', (row) => {
        res.send(row);
    });
});

server.get(api + '/kentucky', (_, res) => {
    fs.createReadStream('data/Kentucky.csv').pipe(csv()).on('data', (row) => {
        res.send(row);
    });
});

server.get(api + '/louisiana', (_, res) => {
    fs.createReadStream('data/Louisiana.csv').pipe(csv()).on('data', (row) => {
        res.send(row);
    });
});

server.get(api + '/maine', (_, res) => {
    fs.createReadStream('data/Maine.csv').pipe(csv()).on('data', (row) => {
        res.send(row);
    });
});

server.get(api + '/maryland', (_, res) => {
    fs.createReadStream('data/Maryland.csv').pipe(csv()).on('data', (row) => {
        res.send(row);
    });
});

server.get(api + '/massachusetts', (_, res) => {
    fs.createReadStream('data/Massachusetts.csv').pipe(csv()).on('data', (row) => {
        res.send(row);
    });
});

server.get(api + '/michigan', (_, res) => {
    fs.createReadStream('data/Michigan.csv').pipe(csv()).on('data', (row) => {
        res.send(row);
    });
});

server.get(api + '/minnesota', (_, res) => {
    fs.createReadStream('data/Minnesota.csv').pipe(csv()).on('data', (row) => {
        res.send(row);
    });
});

server.get(api + '/missouri', (_, res) => {
    fs.createReadStream('data/Missouri.csv').pipe(csv()).on('data', (row) => {
        res.send(row);
    });
});

server.get(api + '/montana', (_, res) => {
    fs.createReadStream('data/Montana.csv').pipe(csv()).on('data', (row) => {
        res.send(row);
    });
});

server.get(api + '/nebraska', (_, res) => {
    fs.createReadStream('data/Nebraska.csv').pipe(csv()).on('data', (row) => {
        res.send(row);
    });
});

server.get(api + '/nevada', (_, res) => {
    fs.createReadStream('data/Nevada.csv').pipe(csv()).on('data', (row) => {
        res.send(row);
    });
});

server.get(api + '/newhampshire', (_, res) => {
    fs.createReadStream('data/New_Hampshire.csv').pipe(csv()).on('data', (row) => {
        res.send(row);
    });
});

server.get(api + '/newjersey', (_, res) => {
    fs.createReadStream('data/New_Jersey.csv').pipe(csv()).on('data', (row) => {
        res.send(row);
    });
});

server.get(api + '/newmexico', (_, res) => {
    fs.createReadStream('data/New_Mexico.csv').pipe(csv()).on('data', (row) => {
        res.send(row);
    });
});

server.get(api + '/newyork', (_, res) => {
    fs.createReadStream('data/New_York_(state).csv').pipe(csv()).on('data', (row) => {
        res.send(row);
    });
});

server.get(api + '/northcarolina', (_, res) => {
    fs.createReadStream('data/North_Carolina.csv').pipe(csv()).on('data', (row) => {
        res.send(row);
    });
});

server.get(api + '/ohio', (_, res) => {
    fs.createReadStream('data/Ohio.csv').pipe(csv()).on('data', (row) => {
        res.send(row);
    });
});

server.get(api + '/oklahoma', (_, res) => {
    fs.createReadStream('data/Oklahoma.csv').pipe(csv()).on('data', (row) => {
        res.send(row);
    });
});

server.get(api + '/oregon', (_, res) => {
    fs.createReadStream('data/Oregon.csv').pipe(csv()).on('data', (row) => {
        res.send(row);
    });
});

server.get(api + '/pennsylvania', (_, res) => {
    fs.createReadStream('data/Pennsylvania.csv').pipe(csv()).on('data', (row) => {
        res.send(row);
    });
});

server.get(api + '/rhodeisland', (_, res) => {
    fs.createReadStream('data/Alaska.csv').pipe(csv()).on('data', (row) => {
        res.send(row);
    });
});

server.get(api + '/southcarolina', (_, res) => {
    fs.createReadStream('data/South_Carolina.csv').pipe(csv()).on('data', (row) => {
        res.send(row);
    });
});

server.get(api + '/southdakota', (_, res) => {
    fs.createReadStream('data/South_Dakota.csv').pipe(csv()).on('data', (row) => {
        res.send(row);
    });
});

server.get(api + '/tennessee', (_, res) => {
    fs.createReadStream('data/Tennessee.csv').pipe(csv()).on('data', (row) => {
        res.send(row);
    });
});

server.get(api + '/texas', (_, res) => {
    fs.createReadStream('data/Texas.csv').pipe(csv()).on('data', (row) => {
        res.send(row);
    });
});

server.get(api + '/utah', (_, res) => {
    fs.createReadStream('data/Utah.csv').pipe(csv()).on('data', (row) => {
        res.send(row);
    });
});

server.get(api + '/vermont', (_, res) => {
    fs.createReadStream('data/Vermont.csv').pipe(csv()).on('data', (row) => {
        res.send(row);
    });
});

server.get(api + '/virginia', (_, res) => {
    fs.createReadStream('data/Virginia.csv').pipe(csv()).on('data', (row) => {
        res.send(row);
    });
});

server.get(api + '/washington', (_, res) => {
    fs.createReadStream('data/Washington_(state).csv').pipe(csv()).on('data', (row) => {
        res.send(row);
    });
});

server.get(api + '/westvirginia', (_, res) => {
    fs.createReadStream('data/West_Virginia.csv').pipe(csv()).on('data', (row) => {
        res.send(row);
    });
});

server.get(api + '/wisconsin', (_, res) => {
    fs.createReadStream('data/Wisconsin.csv').pipe(csv()).on('data', (row) => {
        res.send(row);
    });
});

server.get(api + '/wyoming', (_, res) => {
    fs.createReadStream('data/wyoming.csv').pipe(csv()).on('data', (row) => {
        res.send(row);
    });
});

server.listen(process.env.PORT || 3000, () => {
    console.log("port: " + port)
});