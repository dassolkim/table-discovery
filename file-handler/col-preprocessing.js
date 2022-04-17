const cf = require('./col-to-file')

module.exports = { extractValues, extractOriginalValues }

async function extractValues(num_tables, col_file_name, val_file_name) {
    /**
     * read column data form files
     * if memory allocation error occurs --> node minhash-test.js --max-old-space-size=1200000
     */

    const colFile = await cf.readColumn(col_file_name)
    const colData = JSON.parse(colFile)
    /**
     * write value data to file
     * number of tables in us_p1_csv_20-37: 18 (db: us_catalog)
     * number of rows: 10
     */

    console.log(colData)
    if (colData.cols.length == num_tables) {
        let values = []
        let i = 0
        while (i < num_tables) {
            values.push(colData.cols[i].values)
            i++
        }
        console.log(values.length)
        const write_value = await cf.writeValues(values, val_file_name)
        if (write_value) {
            console.log('file-writer test is succeeded')
            return true
        } else {
            console.log('file-writer is failed')
            return false
        }
    }
}

async function extractOriginalValues(num_tables, val_file_name, origin_val_file_name) {
    /**
     * remove airbyte info
     * original column data to file
     */

    const values_file = await cf.readValues(val_file_name)
    const value_list = JSON.parse(values_file)
    if (values_file) {
        console.log('file-reader test is succeeded')
    } else {
        console.log('file-reader is failed')
    }
    let x = 0
    let z = 0
    let v_list = []
    while (x < num_tables) {
        v_list[x] = value_list.cols[x]
        while (z < 10) {
            v_list[x][z] = v_list[x][z].slice(0, -4)
            z++
        }
        x++
    }

    // write original values
    const write_original_values = await cf.writeOriginalValues(v_list, origin_val_file_name)
    if (write_original_values) {
        console.log('file-writer test is succeeded')
        return true
    } else {
        console.log('file-writer is failed')
        return false
    }

}

