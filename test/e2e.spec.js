/* global define, it, describe, beforeEach, document */
const express = require('express');
const path = require('path');
const Nightmare = require('nightmare');
const expect = require('chai').expect;
const axios = require('axios');
const Actions = require('nightmare-react-utils').Actions;

Nightmare.action(...Actions)

let nightmare;

const app = express();
app.use(express.static(path.join(__dirname, '/../public')));
app.use(express.static(path.join(__dirname, '/../dist')));

app.listen(8888);

const url = 'http://localhost:8888';


describe('Movie Search', function main(){
  this.timeout(12000);
  this.slow(4000);
  let httpServer = null;
  let pageObject = null;

  beforeEach(() => {
    nightmare = new Nightmare();
  });

  it('should have the correct page title', () =>
    nightmare
      .goto(url)
      .evaluate(() => document.querySelector('body').innerText)
      .end()
      .then((text) => {
        expect(text).to.contain('Movie Search');
      })
  );

  it('should include a <input> element with name searchMovie for the user to enter a movie name', () => {
      nightmare
        .goto(url)
        .evaluate(() => document.querySelector('input[name=searchMovie]'))
        .then(input => expect(input).to.exist)
  });

  it('returns the correct status code', () => axios.get(url)
    .then(response => expect(response.status === 200)));
});
