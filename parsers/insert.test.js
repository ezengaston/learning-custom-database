const parseInsertCommand = require("./insert");

describe("With a valid command", () => {
  const command = 'INSERT {"a": 1, "b": 2} INTO table';
  test("It returns correct InsertCommand", () => {
    const insertCommand = parseInsertCommand(command);
    expect(insertCommand.record).toEqual({ a: 1, b: 2 });
    expect(insertCommand.tableName).toBe("table");
  });
});

describe("With an invalid record", () => {
  const command = "INSERT {sljkabvjklabd} INTO table";
  test("It returns undefined", () => {
    expect(parseInsertCommand(command)).toBeUndefined();
  });
});

describe("With no table name", () => {
  const command = 'INSERT {"a": 1, "b": 2} INTO';
  test("It returns undefined", () => {
    expect(parseInsertCommand(command)).toBeUndefined();
  });
});

describe("With no INSERT clause", () => {
  const command = '{"a": 1, "b": 2} INTO table';
  test("It returns undefined", () => {
    expect(parseInsertCommand(command)).toBeUndefined();
  });
});

describe("With no INTO clause", () => {
  const command = 'INSERT {"a": 1, "b": 2} table';
  test("It returns undefined", () => {
    expect(parseInsertCommand(command)).toBeUndefined();
  });
});
