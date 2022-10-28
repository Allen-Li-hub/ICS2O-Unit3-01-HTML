// Copyright (c) 2022 Allen Li All rights reserved
//
// Created by: Allen Li
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit3-01-HTML/sw.js", {
    scope: "/ICS2O-Unit3-01-HTML/",
  })
}

;("use strict")

function addAgeClicked() {
  // this function does area of a trapizoid

  // input
  const aBase = parseInt(document.getElementById("a-base-dimension").value)
  const bBase = parseInt(document.getElementById("b-base-dimension").value)
  const height = parseInt(document.getElementById("height-dimension").value)

  // process
  const area = ((aBase + bBase) / 2) * height

  // output
  document.getElementById("area").innerHTML = "Area is: " + area + " mm²"
}
