const cf = require('./col-to-file')

async function main() {

    
/*     // read column data form files

    const colFile = await cf.readColumn()
    const colData = JSON.parse(colFile)

    // write value data to file
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

    /**
     * memory allocation error
     * node minhash-test.js --max-old-space-size=1200000
     * */

    const values_file = await cf.readValues()
    const value_list = JSON.parse(values_file)
    if (values_file) {
        console.log('file-writer test is succeeded')
    } else {
        console.log('file-writer is failed')
    }
    console.log(value_list)
   
   

}
if (require.main == module) {
    main()
}