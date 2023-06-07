/* eslint-disable */

"use strict";

const fs = require("fs");
const { exit } = require("process");

const [_node, _file, versionUpdate] = process.argv;

if (
  versionUpdate !== "-min" &&
  versionUpdate !== "-max" &&
  versionUpdate !== "-patch"
) {
  console.error("Pass version type update flag, -max or -min 😵");
  exit();
}

let rawdata = fs.readFileSync("app.json");
let json = JSON.parse(rawdata);

const [major, minor, patch] = json.expo.version.split(".");

json.expo.version = "";

switch (versionUpdate) {
  case "-min":
    json.expo.version = `${major}.${parseInt(minor) + 1}.0`;
    break;
  case "-max":
    json.expo.version = `${parseInt(major) + 1}.0.0`;
    break;
  case "-patch":
  default:
    json.expo.version = `${major}.${minor}.${parseInt(patch) + 1}`;
    break;
}

json.expo.android.versionCode = json.expo.android.versionCode + 1;

fs.writeFileSync("app.json", JSON.stringify(json));

console.log("iOs version", json.expo.version);
console.log("Android version", json.expo.android.versionCode);
