import express from 'express'
import passport from './providers/passport';
import dotenv from 'dotenv';

const PORT = 5000

const app = express()

dotenv.config()
app.use(passport.initialize())

app.get('/', (_,res) => {
  res.send("<a href='/authentication/google'>SignIn with google<a/>")
})

app.get('/authentication/google',
  passport.authenticate('google', { scope: ['profile'] }));

app.get('/authentication/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login', successRedirect: '/logged' }),
  function(_, res) {
    res.redirect('/logged');
  });

app.get('/logged', (_,res) => {
  res.send('<h1>Logged</h1>')
})

app.listen(PORT, () => console.log(`Server running ${PORT}`))