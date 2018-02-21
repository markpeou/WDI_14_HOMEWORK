var express = require('express');
var _ = require('underscore');
var app = express();
app.set('view engine','ejs')

// const name = req.params.name

const compliments = [
  "Your Instructors Love To Tease You",
  "High Five! You look Great Today",
  "Shut Up and Take My Money!",
  "The Forks are Strong With You",
  "Poop Hard and Fast!",
  "You can! Eat the whole thing!",
  "Try, you must not, but DooDoo, Everywhere!",
  "Hang In There!",
  "My man!",
  "Shake Harder, BOY!",
  "You have a nice butt..",
  "Keep Calm and Debug",
  ]

  const colors = [
    "#609dff",
    "a0fffa",
    "#a0ffb3",
    "#fff6a8",
    "#ffbb9b",
    "#ff9e9b",
    "#cd9bff",
    "#ff9beb",
    "#ff9bb5"
  ]

  app.get('/',function(req,resp){
    resp.render('hello', {
        compliments: _.sample(compliments),
        colors: _.sample(colors)

    })
  })

  app.get('/:name',function(req,resp) {
    resp.render('name', {
      name: req.params.name,
      compliments: _.sample(compliments),
      colors: _.sample(colors)
    })
  })

  app.listen(8080,function() {
  console.log('server started on port 8080');
})
