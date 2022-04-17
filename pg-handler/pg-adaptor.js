// const { Pool, Client } = require("pg")
const config = require('./pg-config')

module.exports = { genQuery }

async function query(q, client) {
    let res
    try {
        await client.query('BEGIN')
        try {
            res = await client.query(q)
            await client.query('COMMIT')
        } catch (err) {
            console.log(err)
        }
    } finally {
    }
    return res
}

async function genQuery(t_name, start, end) {
    try {
        const client = await config.pool.connect()
        let i = start
        const d_t_name = t_name //'us_p1_csv_'
        const data = []
        // range us_p1_csv_20-37
        while (i <= end) {
            const t_name = d_t_name + i
            const result = await query(`SELECT * FROM ${t_name} LIMIT 10`, client)
            if (result) {
                const numCols = result.fields.length
                const rowCount = result.rowCount
                let values = []
                let i = 0
                while (i < rowCount) {
                    values[i] = Object.values(result.rows[i])
                    i++
                }
                const dict = {
                    tableName: t_name,
                    numCols: numCols,
                    rowCount: rowCount,
                    colData: result.rows,
                    values: values
                }
                data.push(dict)
            }
            i++
        }
        client.release()
        return data
    } catch (err) {
        console.log('Database ' + err)
    }
}

/* async function query (q, client) {
    // const client = await pool.connect()
    let res
    let result
    await client.query('BEGIN')
       
    res = await client.query(q)
    await client.query('COMMIT')
    
    if (res == undefined){
        result = null
    } else{
        result = res
    }
    return result
} */

/* const d_t_name = 'us_p1_csv_'
const d_c_name = 'col_'
const col = []
let i = 0
while(i<1){
    const t_name = d_t_name + i
    console.log(t_name)
    pool.query(`SELECT * from ${t_name} LIMIT 10`, (err, res) => {
        console.log(res)
        // col = res.rows[i]
        // console.log(col);
    })
    i++
    pool.end()
}
console.log(col)
 */



