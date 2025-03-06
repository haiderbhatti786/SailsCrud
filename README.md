# player-api

a [Sails v1](https://sailsjs.com) application

### Links

- [Sails framework documentation](https://sailsjs.com/get-started)
- [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
- [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
- [Community support options](https://sailsjs.com/support)
- [Professional / enterprise options](https://sailsjs.com/enterprise)

### Version info

This app was originally generated on Wed Mar 05 2025 14:08:16 GMT+0500 (Pakistan Standard Time) using Sails v1.5.14.

<!-- Internally, Sails used [`sails-generate@2.0.13`](https://github.com/balderdashy/sails-generate/tree/v2.0.13/lib/core-generators/new). -->

<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->

# PlayersController Methods

## create

Yeh method naya player banata hai. Request se tamam parameters le kar `Players.create` method ko call karta hai aur naya player database mein insert karta hai. Agar koi error aaye to 500 status code ke sath error message return karta hai.

## list

Yeh method tamam players ki list return karta hai. `Players.find` method ko call karta hai aur jo players milte hain unhe 201 status code ke sath return karta hai. Agar koi error aaye to 500 status code ke sath error message return karta hai.

## delete

Yeh method ek player ko delete karta hai. Request se player ID (pid) le kar `Players.destroyOne` method ko call karta hai aur player ko delete karta hai. Agar player ID na mile to 400 status code ke sath error message return karta hai. Agar player na mile to 404 status code ke sath error message return karta hai. Agar delete successful ho jaye to 200 status code ke sath success message return karta hai. Agar koi error aaye to 500 status code ke sath error message return karta hai.

# Complex Logic

## PlayersController.create

Yeh method request se tamam parameters ko le kar `Players.create` method ko call karta hai. Yeh async function hai jo `await` keyword use karta hai taake asynchronous operation ko handle kar sake. Agar koi error aaye to `catch` block mein error ko handle karta hai aur 500 status code ke sath error message return karta hai.

## PlayersController.list

Yeh method tamam players ko `Players.find` method ke zariye database se fetch karta hai. Yeh bhi ek async function hai jo `await` keyword use karta hai. Agar koi error aaye to `catch` block mein error ko handle karta hai aur 500 status code ke sath error message return karta hai.

## PlayersController.delete

Yeh method request se player ID (pid) ko extract karta hai aur `Players.destroyOne` method ko call karta hai taake player ko delete kar sake. Agar player ID na mile to 400 status code ke sath error message return karta hai. Agar player na mile to 404 status code ke sath error message return karta hai. Agar delete successful ho jaye to 200 status code ke sath success message return karta hai. Agar koi error aaye to `catch` block mein error ko handle karta hai aur 500 status code ke sath error message return karta hai.
