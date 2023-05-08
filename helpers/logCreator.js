const fs = require('fs');
const { stringify } = require('querystring');
const { createLogger, format, transports } = require('winston')
const { combine, timestamp, label, prettyPrint ,printf} = format;
/*
const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    verbose: 4,
    debug: 5,
    silly: 6
  };
  */
function logCreator(mode,data) {
    const today = new Date()
    const tahun = today.getFullYear()
    const bulan = today.getMonth()+1
    const hari = today.getDate()
    const jam = today.getHours()
    const menit = today.getMinutes()
    const detik = today.getSeconds()
    data.time = `${hari}_${bulan}_${tahun}_at_${jam}:${menit}:${detik}`
    var new_format = `${hari}_${bulan}_${tahun}.log`
    const logger = createLogger({
        level: mode,
        format: format.combine(
            format.splat(),
            format.simple(),
            format.colorize(),
          ),
        transports: [
            new transports.Console(data),
            new transports.File({
                handleExceptions: true,
                filename:"./log/"+new_format
            })
        ]
    });
    logger[mode](data)
}

 
module.exports = logCreator 