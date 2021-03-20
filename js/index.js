// console.log('process :>> ', process);
// console.log('process.env :>> ', process.env);
// const _API_SERVER_HOST = `${API_SERVER_HOST}`
// console.log('_API_SERVER_HOST :>> ', _API_SERVER_HOST);
// console.log('typeof DEVELOPMENT :>> ', typeof DEVELOPMENT);
if (DEVELOPMENT) { // Run in development state
  const INITIALIZE_MESSAGE_0 = "App development state: DEVELOPMENT \n API server host: API_SERVER_HOST" // OK
  // const INITIALIZE_MESSAGE_1 = "App development state: " + DEVELOPMENT + "\n API server host: " + API_SERVER_HOST // NO
  // const INITIALIZE_MESSAGE_2 = `App development state: ${DEVELOPMENT} \n API server host: ${API_SERVER_HOST}` // OK
  // const INITIALIZE_MESSAGE_3 = "App development state: ${DEVELOPMENT} \n API server host: ${API_SERVER_HOST}"
  const textNode = document.createTextNode(INITIALIZE_MESSAGE_0) // Create text node
  document.body.appendChild(textNode) // Append text node to doc body
  
  console.log(INITIALIZE_MESSAGE_0); // Logging
}