const cf = require('./col-to-file')

async function main() {

    /**
     * read column data form files
     * if memory allocation error occurs --> node minhash-test.js --max-old-space-size=1200000
     */

    /* const colFile = await cf.readColumn()
    const colData = JSON.parse(colFile) */

    /**
     * write value data to file
     * number of tables in us_p1_csv_20-37: 18 (db: us_catalog)
     * number of rows: 10
     */
    /*
    
    let values = []
    let i = 0

    while (i < 18) {
        values.push(colData.cols[i].values)
        i++
    }
    console.log(values.length)
    const write_value = await cf.writeValues(values)
    if (write_value) {
        console.log('file-writer test is succeeded')
    } else {
        console.log('file-writer is failed')
    } */

    
    //
     

    const values_file = await cf.readValues()
    const value_list = JSON.parse(values_file)
    if (values_file) {
        console.log('file-reader test is succeeded')
    } else {
        console.log('file-reader is failed')
    }
    let x = 0
    let z = 0
    let v_list = []
    while (x < 18) {
        v_list[x] = value_list.cols[x]
        while (z < 10) {
            v_list[x][z] = v_list[x][z].slice(0, -4)
            z++
        }
        x++
    }

    const write_original_values = await cf.writeOriginalValues(v_list)
    if (write_original_values) {
        console.log('file-writer test is succeeded')
    } else {
        console.log('file-writer is failed')
    }
    console.log(v_list)
    console.log(JSON.stringify(v_list[0]))

    const original_values_file = await cf.readValues()
    const original_value_list = JSON.parse(original_values_file)
    if (original_value_list) {
        console.log('file-reader test is succeeded')
    } else {
        console.log('file-reader is failed')
    }

    console.log(original_value_list)

}
if (require.main == module) {
    main()
}