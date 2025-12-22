const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 3001

app.use(express.static('dist'))

app.listen(PORT, '0.0.0.0', () => {
  // eslint-disable-next-line no-console
  console.log(`Server started successfully on 0.0.0.0:${PORT}`)
})
