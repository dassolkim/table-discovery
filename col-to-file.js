const fh = require('../opendata-handler/fileHandler/file-handler')
const path = require('path')
const adaptor = require('./pg-handler/pg-adaptor')

module.exports = {writeColumn, readColumn, writeValues}

async function writeColumn(){
    
    const col_data = await adaptor.genQuery(20, 38)

    const sourceInfo = {
        type: 'dataset',
        name: 'us_p1_20-37',
        path: path.join('C:/Users/kimds/nodeProject', 'data/')
    }
    const fileWrite = fh.writeCols(col_data, sourceInfo)
    console.log(fileWrite)
    if (fileWrite) {
        console.log('file-writer test is succeeded')
    } else{
        console.log('file-writer is failed')
    }
    // console.log(col_data)
}
// writeColumn()

function writeValues(data){

    const sourceInfo = {
        type: 'dataset',
        name: 'us_p1_20-37_values',
        path: path.join('C:/Users/kimds/nodeProject', 'data/')
    }
    const fileWrite = fh.writeCols(data, sourceInfo)
    console.log(fileWrite)
    if (fileWrite) {
        console.log('file-writer test is succeeded')
    } else{
        console.log('file-writer is failed')
    }
    return fileWrite
}

function readColumn(){

    const sourceInfo = {
        type: 'dataset',
        name: 'us_p1_20-37'
    }
    const filePath = path.join('C:/Users/kimds/nodeProject', 'data/')
    const fileRead = fh.readCols(filePath, sourceInfo)
    // console.log(fileRead)
    if (fileRead) {
        console.log('column file read test is succeeded')
    } else{
        console.log('column file read is failed')
    }
    return fileRead
}