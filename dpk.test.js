const deterministicPartitionKey = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("returns a string", () => {
    const result = deterministicPartitionKey({});
    expect(typeof result).toBe("string");
  });

  it("returns a partition key", () => {
    const result = deterministicPartitionKey({ partitionKey: "0" });
    expect(typeof result).toBe("string");
  });

  it("returns a different value for different input", () => {
    const input1 = { foo: "bar" };
    const input2 = { foo1: "bar1" };
    const result1 = deterministicPartitionKey(input1);
    const result2 = deterministicPartitionKey(input2);
    expect(result1).not.toEqual(result2);
  });

  it("returns the same value for the same input", () => {
    const input = { foo: "bar" };
    const result1 = deterministicPartitionKey(input);
    const result2 = deterministicPartitionKey(input);
    expect(result1).toEqual(result2);
  });
});
