const cf = require('./col-to-file')

async function main() {
    const data = await cf.readColumn()
    // return data
    // console.log(data)
    const dataset = JSON.parse(data)
    // console.log(dataset)
    // console.log(dataset.cols[0])
    let values = []

    let i = 0

    while (i < 18) {
        values.push(dataset.cols[i].values)
        i++
    }
    console.log(values.length)
    const write_value = await cf.writeValues(values)
    if (write_value) {
        console.log('file-writer test is succeeded')
    } else {
        console.log('file-writer is failed')
    }

    /* const val_20 = dataset.cols[0].values
    const val_21 = dataset.cols[1].values
    const val_22 = dataset.cols[2].values
    const val_23 = dataset.cols[3].values
    const val_24 = dataset.cols[4].values
    const val_25 = dataset.cols[5].values
    const val_26 = dataset.cols[6].values
    const val_27 = dataset.cols[7].values
    const val_28 = dataset.cols[8].values */

}
if (require.main == module) {
    main()
}