const fh = require('../../opendata-handler/fileHandler/file-handler')
const path = require('path')

module.exports = {writeColumn, readColumn, writeValues, readValues, writeOriginalValues, readOriginalValues}

const defaultPath = path.join('C:/Users/kimds/nodeProject', 'data/')

/* col_file_name: us_p1_20-37
val_file_name: us_p1_20-37_values
origin_val_file_name: us_p1_20-37_original_values */

async function writeColumn(data, col_file_name){
    
    const sourceInfo = {
        type: 'dataset',
        name: col_file_name,
        path: defaultPath
    }
    const fileWrite = fh.writeCols(data, sourceInfo)
    console.log(fileWrite)
    if (fileWrite) {
        console.log('write columns succeeded')
    } else{
        console.log('write columns failed')
    }
}

async function readColumn(col_file_name){

    const sourceInfo = {
        type: 'dataset',
        name: col_file_name
    }
    
    const fileRead = fh.readCols(defaultPath, sourceInfo)
    // console.log(fileRead)
    if (fileRead) {
        console.log('read columns succeeded')
    } else{
        console.log('read columns failed')
    }
    return fileRead
}

async function writeValues(data, val_file_name){

    const sourceInfo = {
        type: 'dataset',
        name: val_file_name,
        path: defaultPath
    }
    const fileWrite = fh.writeCols(data, sourceInfo)
    console.log(fileWrite)
    if (fileWrite) {
        console.log('write values succeeded')
    } else{
        console.log('write values failed')
    }
    return fileWrite
}

async function readValues(val_file_name){

    const sourceInfo = {
        type: 'dataset',
        name: val_file_name,
        
    }
    // const path = path.join('C:/Users/kimds/nodeProject', 'data/')
    const fileRead = fh.readCols(defaultPath, sourceInfo)
    // console.log(fileRead)
    if (fileRead) {
        console.log('read values succeeded')
    } else{
        console.log('read values failed')
    }
    return fileRead
}

async function writeOriginalValues(data, origin_val_file_name){

    const sourceInfo = {
        type: 'dataset',
        name: origin_val_file_name,
        path: defaultPath
    }
    const fileWrite = fh.writeCols(data, sourceInfo)
    console.log(fileWrite)
    if (fileWrite) {
        console.log('write original values is succeeded')
    } else{
        console.log('write original values is failed')
    }
    return fileWrite
}

async function readOriginalValues(origin_val_file_name){

    const sourceInfo = {
        type: 'dataset',
        name: origin_val_file_name
    }
    const fileRead = fh.readCols(defaultPath, sourceInfo)
    // console.log(fileRead)
    if (fileRead) {
        console.log('read original values is succeeded')
    } else{
        console.log('read original values is failed')
    }
    return fileRead
}