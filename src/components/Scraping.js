import React, { Component } from "react";

const Scraping = props => {
  const rp = require('request-promise');
  const url = props.url;

    rp(url)
      .then(function(html){
        //success!
        console.log(html);
      })
      .catch(function(err){
        //handle error
      });

    return null
}

export default Scraping;
