const dateNow = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milliSecs = date.getMilliseconds();
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}-${milliSecs}`;
};

module.exports = { dateNow };
