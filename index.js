if (process.env.NODE_ENV == 'production') { //当设置webpack的mode为pro的时候，这个process.env.NODE_ENV就是prod
    module.exports = require('./dist/large-number.js')
} else {
    module.exports = require('./dist/large-number.min.js')
}