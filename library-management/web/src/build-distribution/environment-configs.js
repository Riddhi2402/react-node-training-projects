const configuration = require('./environment.json');

const environment = process.env.REACT_APP_HOST_ENV ? process.env.REACT_APP_HOST_ENV : process.env.NODE_ENV.trim();
const environmentConfig = configuration[environment];

export default environmentConfig;
