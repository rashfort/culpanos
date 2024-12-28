function logMessage(message) {
  console.log(message);
}

const debouncedLogMessage = debounce(logMessage, 1000);

debouncedLogMessage("Hello"); // Will wait 1000ms before logging "Hello" to the console
debouncedLogMessage("World"); // Will cancel the previous timeout and wait another 1000ms before logging "World" to the console
