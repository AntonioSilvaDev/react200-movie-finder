/* global define, it, describe, beforeEach, document */
const express = require('express');
const path = require('path');
const Nightmare = require('nightmare');
const expect = require('chai').expect;
const axios = require('axios');
const Actions = require('nightmare-react-utils').Actions;

Nightmare.action(...Actions)
const app = express();
app.use(express.static(path.join(__dirname, '/../public')));
app.use(express.static(path.join(__dirname, '/../dist')));

const url = 'http://localhost:8888';

const nightmare = new Nightmare();

describe('End to End Tests', () => {
  let httpServer = null;
  let pageObject = null;
  
 //this.timeout(nightmareTimeout);

  before((done) => {
    httpServer = app.listen(8888);
    done();
  });

  beforeEach(() => {
   pageObject = nightmare.goto(url);
  });

  after((done) => {
    httpServer.close();
    done();
  });

  it('should have the correct page title', () => {
    return pageObject
      .evaluate(() => document.querySelector('body').innerText)
      .then(text => {
        expect(text).to.contain('Movie Search')
      });
  });//WORKS

  it('should include a <input> element with id "movieInput" for the user to enter a movie name', () => {
    return pageObject
      .wait()
      .evaluate(() => document.querySelector('input[id=movieInput]').innerText)//why does this need to have .innerText??
      .then(input => {
        expect(input).to.exist
      });
  });//WORKS
  
  it('should be able to enter movie name into <input> element', () => {
    return pageObject
      .wait()
      .type('input[id=movieInput]', 'home')
      .evaluate(() => document.querySelector('input[id=movieInput]').value)
      .then(text => { 
        expect(text).to.equal('home')
      });
  });//WORKS

  it('should include a <button> so users can click to get movies', () => {
    return pageObject
      .wait()
      .evaluate(() => document.querySelector('button[id=button-addon2]').value)
      .then(button => {
        expect(button).to.exist
      });
  });//WORKS
  
  it('returns the correct status code', () => axios.get(url)
    .then(response => expect(response.status === 200)));
});
  //The tests below are still a work in progress
  // it('should get movies', () => {
  //   return pageObject
  //     .wait()
  //     .type('input.search-movie', 'HOME')
  //     .click('button.search')
  //     .wait(1000)
  //     .evaluate(() => {
  //       const { innerText } = document.querySelectorAll('h5.title')[0];
  //       return { innerText };
  //     })
  //     .then(({innerText}) => {
  //       expect(innerText).to.contain('HOME')
  //       console.log(innerText)
  //     });
  // });

  // it('should have a <button> in movie details container so user can go back to movie search page', () => {
  //   return pageObject
  //     .type('input[id=movieInput]', 'home')
  //     .click('button#button-addon2')
  //     .wait()
  //     .click('button#frog0')
  //     .wait()
  //     .evaluate(() => document.querySelector('a[id=goBack]'))
  //     .then(button => {
  //       expect(button).to.exist
  //     });
  // });

  // it('the goBack <button> should work', () => {
  //   nightmare
  //     .goto(url)
  //     .type('input[name=searchMovie]', 'home')
  //     .click('button#go')
  //     .wait('div.jumbotron')
  //     .click('button#goBack')
  //     .wait('div.jumbotron')
  //     .evaluate(() => document.querySelector('div.jumbotron').innerText)
  //     .then(text => expect(text).to.contain('frog'))
  // });

