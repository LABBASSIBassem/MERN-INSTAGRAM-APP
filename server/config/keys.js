if(process.env.NODE){
    module.exports = require('./prod')
}
else{
    module.exports = require('./dev')
}