const express = require('express')
const app = express()

// get the port from env variable
const PORT = 3001

app.use(express.static('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started successfully at http://localhost:${PORT}`)
})
