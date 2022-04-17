const fh = require('./file-handler/col-to-file')

async function main() {

    const num_tables = 3
    const origin_file_name = `us_p1_csv_6-8_original`

    const r_ori_val = await fh.readOriginalValues(origin_file_name)
    console.log(r_ori_val)
    const j_ori_obj = JSON.parse(r_ori_val)
    console.log(j_ori_obj)
    // console.log(j_ori_obj.cols[num_tables -3])
    // console.log(j_ori_obj.cols[num_tables -2])
    // console.log(j_ori_obj.cols[num_tables -1])

}
if (require.main == module) {
    main()
}