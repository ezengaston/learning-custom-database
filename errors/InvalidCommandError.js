class InvalidCommandError extends Error {
  constructor(command) {
    super(command);
    this.name = "InvalidCommandError";
  }
}

module.exports = InvalidCommandError;
