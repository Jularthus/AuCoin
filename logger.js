function error(message) {
  const now = new Date();

  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  const timestamp = `\x1b[1m[${day}/${month} ${hours}:${minutes}]\x1b[0m`;
  const levelTag = `\x1b[31m[ERROR]\x1b[0m`;

  console.log(`${timestamp} ${levelTag} ${message}`);
}

function infos(message) {
  const now = new Date();

  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  const timestamp = `\x1b[1m[${day}/${month} ${hours}:${minutes}]\x1b[0m`;
  const levelTag = `\x1b[32m[INFOS]\x1b[0m`;

  console.log(`${timestamp} ${levelTag} ${message}`);
}

function news(message) {
  const now = new Date();

  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  const timestamp = `\x1b[1m[${day}/${month} ${hours}:${minutes}]\x1b[0m`;
  const levelTag = `\x1b[34m[!NEW!]\x1b[0m`;

  console.log(`${timestamp} ${levelTag} ${message}`);
}

module.exports.error = error;
module.exports.info = infos;
module.exports.new = news;
