const https = require('https');

const request = https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',(response) => {
    let data = '';

    response.on('data',(content) => {
        data += content;
    });

    response.on('end', () => {
        console.log(JSON.parse(data).explanation);
    });

}).on('error',(error) => {
    console.error(error);
})

