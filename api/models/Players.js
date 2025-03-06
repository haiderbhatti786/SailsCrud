/**
 * Players.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    fname: { type: "string" },
    lname: { type: "string" },
    password: { type: "string" },
    email: { type: "string" },
    pid: { type: "number", unique: true, required: true },
  },
};
