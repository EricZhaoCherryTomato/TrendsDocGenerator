const googleTrends = require('google-trends-api');

var fs = require('fs');

googleTrends.relatedTopics({keyword: 'pizza', startTime: new Date('2015-01-01'), endTime: new Date('2017-02-10')})
.then(function(results){
    let writeStream = fs.createWriteStream('result.json');
    
    writeStream.write(results);
    
    writeStream.on('finish', () => {  
        console.log('wrote all data to file');
    });
    
    writeStream.end();  
})
.catch(function(err){
  console.error('Oh no there was an error', err);
});
