const getDecodeURIComponent = (message = '') => decodeURIComponent((message+'').replace(/\+/g, '%20'));

const getDecodeDate = (timestamp = 0) => new Date(timestamp * 1000).toLocaleDateString();

export { getDecodeURIComponent, getDecodeDate };