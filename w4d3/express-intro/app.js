// set up
const express = require('express')
const app = express()
const port = 3000

// this registers the public folder so that we can access the static assets in the 
// client
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	console.log('home route')
	// res.send('<h1>This is the Home Page 👋</h1>')
	console.log(__dirname)
	res.sendFile(__dirname + '/views/home-page.html')
})

app.get('/dog', (req, res, next) => {
	res.sendFile(__dirname + '/views/dog-page.html')
});



app.get('/cat', (req, res, next) => {
	res.sendFile(__dirname + '/views/cat-page.html')
});

// app.get('/about', (req, res) => {
// 	res.send('<h1>This is the About Page 🦄</h1>')
// })



app.listen(port, () => {
	console.log(`Listening on port ${port} 🦄 🌈`)
})