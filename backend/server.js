// ── AUTOLUXE HUB — Backend Server ──

const express = require('express')
const app = express()
const cars = require('./cars.json')

// Allow the frontend to talk to the backend
const cors = require('cors')
app.use(cors())
app.use(express.json())

// ── ROUTES ──

// Home route — just to confirm server is running
app.get('/', (req, res) => {
  res.json({
    message: 'AutoLuxe Hub API is running',
    company: 'AutoLuxe Hub',
    location: 'Gwarinpa, Abuja'
  })
})

// Get all cars
app.get('/api/cars', (req, res) => {
  res.json(cars)
})

// Get a single car by ID
app.get('/api/cars/:id', (req, res) => {
  const car = cars.find(c => c.id === parseInt(req.params.id))
  if (!car) {
    return res.status(404).json({ message: 'Car not found' })
  }
  res.json(car)
})

// Filter cars by type
app.get('/api/cars/type/:type', (req, res) => {
  const filtered = cars.filter(
    c => c.type.toLowerCase() === req.params.type.toLowerCase()
  )
  res.json(filtered)
})

// ── START SERVER ──
const PORT = 3000
app.listen(PORT, () => {
  console.log(`AutoLuxe Hub server running on http://localhost:${PORT}`)
})