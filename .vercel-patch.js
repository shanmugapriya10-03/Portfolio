const os = require('os');
const originalHostname = os.hostname;
os.hostname = () => 'priya-pc';
