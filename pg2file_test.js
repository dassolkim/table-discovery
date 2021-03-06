const fh = require('./file-handler/col-to-file')
const adaptor = require('./pg-handler/pg-adaptor')
const cp = require('./file-handler/col-preprocessing')

async function main() {

    // info
    const t_name = 'us_p1_csv_'
    const publisher = 'US'
    const file_name = t_name + '62-74'
    const num_tables = 13
    const origin_file_name = file_name + '_original'
    const num_rows = 10
    
    // qeury generation and write columns to file

    // const col_data = await adaptor.genQuery(t_name, 62, 74)
    const write_cols = await fh.writeColumn(col_data, file_name, publisher)
    if (write_cols) {
        console.log('write column to file test is succeeded')
    } else {
        console.log('write column to file test is failed')
    }

    // read colum from file
    const read_cols = await fh.readColumn(file_name, publisher)
    if (read_cols) {
        console.log('read column from file test is succeeded')
    } else {
        console.log('read column from file test is failed')
    }
    console.log(read_cols)

    // // write values to file
    const write_value = await cp.extractValues(num_tables, file_name, publisher)
    if (write_value) {
        console.log('write values to file test is succeeded')
    } else {
        console.log('write values to file test is failed')
    }

    // read values from file
    const read_value = await fh.readValues(file_name, publisher)
    if (read_value) {
        console.log('read column from file test is succeeded')
    } else {
        console.log('read column from file test is failed')
    }
    console.log(read_value)

    // write original values to file
    const write_origin_value = await cp.extractOriginalValues(num_tables, num_rows, file_name, origin_file_name, publisher)
    if (write_origin_value) {
        console.log('write original values to file test is succeeded')
    } else {
        console.log('write original values to file test is failed')
    }

    // read original values from file
    const r_ori_val = await fh.readOriginalValues(origin_file_name, publisher)

    const j_ori_obj = JSON.parse(r_ori_val)
    console.log(j_ori_obj.length)

}
if (require.main == module) {
    main()
}