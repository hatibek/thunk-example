const express = require('express');

const path = require('path');

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/puppies', (req, res) => {
  res.json([
    {id: 1, name: 'Ace', imageSrc:'/puppy-1.jpg', favoriteFood: 'TREATS!!!!', favoriteToy: '/kong.jpg'},
    {id: 2, name: 'Baxter', imageSrc:'/puppy-2.jpg', favoriteFood: 'Turkey', favoriteToy: '/platypus.jpg'},
    {id: 3, name: 'Simba', imageSrc:'/puppy-3.jpg', favoriteFood: 'Pizza', favoriteToy: '/pizza.jpg'}
  ])
})

app.listen(3000, () => {
  console.log('started on 3000');
})

