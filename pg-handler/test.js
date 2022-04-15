// const { Pool, Client } = require("pg")
// const config = require('./pg-config')
const adaptor = require('./pg-adaptor')

async function main(){
    //us_catalog_1 table range: 20-38
    const col_data = await adaptor.genQuery(20, 38)
    
    console.log(col_data)
}
if (require.main == module){
    main()
}