const fs = require('fs')

function writeFile(data){
    fs.writeFileSync('./data/blogdata.json', JSON.stringify(data), 'utf8', (err) => {
        if(err) {
            console.log(err)
        }
    })
}

module.exports={
    getReqData,
    writeFile,
}