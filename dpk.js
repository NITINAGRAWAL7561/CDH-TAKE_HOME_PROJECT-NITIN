const crypto = require("crypto");

const deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  let candidate;

  if (event && Object.keys(event).length > 0) {
    candidate =
      event.partitionKey ||
      crypto.createHash("sha3-512").update(JSON.stringify(event)).digest("hex");
  }

  candidate = candidate || TRIVIAL_PARTITION_KEY;

  if (typeof candidate !== "string") candidate = JSON.stringify(candidate);

  if (candidate?.length > MAX_PARTITION_KEY_LENGTH)
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");

  return candidate;
};

module.exports = deterministicPartitionKey;
