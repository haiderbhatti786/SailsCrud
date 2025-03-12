/**
 * PlayersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const { select } = require("sails-mysql/helpers");

module.exports = {
  // Method to create a new player
  create: async function (req, res) {
    try {
      const params = req.body;
      console.log(params); // request se sare params ko uthe ga
      const newPlayer = await Players.create(params).fetch(); // player ke creation tak ruke ga aur phir fetch kere ga
      return res
        .status(201)
        .json({ message: "user created successfully", newPlayer }); // Return the new player with a 201 status code
    } catch (err) {
      return res.status(500).json({ error: err.message }); // agr ki masla aya to error 500 return kre ga
    }
  },

  // Method to list all players
  list: async function (req, res) {
    try {
      // const users = await Players.find(); // all players ko fetch kren tak ruka rahe ga
      const query = "select * from Players "; // store query in variable
      let users = await sails.getDatastore().sendNativeQuery(query); // datastores ko access kre phir native sql chale
      return res.status(201).json(users.rows); // user ko 201 OK ke sath return kre ga //  age raw data access kre
    } catch (error) {
      return res.status(500).json({ error: error.message }); // agr error hogi to  500 code ke sath return kre ga
    }
  },

  // Method to delete a player
  delete: async function (req, res) {
    try {
      const pid1 = req.param("pid"); // tamam params se sirf pid ko uthae ga
      console.log(pid1);
      if (!pid1) {
        return res.status(400).json({ error: "Player ID (pid) is required" }); //agr pid not tru yani false hai to 400 code ke sath error aye ga
      }
      const delQuery = `delete from players where pid=${pid1}`;
      const delplayer = await sails.getDatastore().sendNativeQuery(delQuery); // pid ke mudd se player ko delete kre ga

      if (!delplayer) {
        return res.status(404).json({ error: "Player not found" }); // agr player false hai yani nahi hai to 404 error return krai ga
      }

      return res
        .status(200)
        .json({ message: "Player deleted successfully", delplayer }); // agr player delete hogya to 200 status ke sath del player ko dekhae ga
    } catch (error) {
      console.error("Error deleting player:", error); // Log the error
      return res.status(500).json({ error: "Something went wrong" }); // Return a 500 status code agr error aye to
    }
  },
  update: async function (req, res) {
    try {
      const pid = req.param("pid");
      const { fname, lname, password, email, pid1 } = req.body;
      if (!pid) {
        return res
          .status(400)
          .json({ error: "player pid is required to update user" });
      }
      const updatedPlayer = await Players.updateOne({ pid }).set({
        fname,
        lname,
        password,
        email,
        pid1,
      });
      if (!updatedPlayer) {
        return res.status(404).json({ error: "cant find player of given pid" });
      }
      return res
        .status(200)
        .json({ message: "player updated successfully", updatedPlayer });
    } catch (error) {
      console.error(error, "this is the error");
      return res.status(500).json({ error: "cant update user ,error occured" });
    }
  },
};
