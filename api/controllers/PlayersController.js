/**
 * PlayersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  // Method to create a new player
  create: async function (req, res) {
    try {
      const params = req.allParams(); // request se sare params ko uthe ga
      const newPlayer = await Players.create(params).fetch(); // player ke creation tak ruke ga aur phir fetch kere ga
      return res.status(201).json(newPlayer); // Return the new player with a 201 status code
    } catch (err) {
      return res.status(500).json({ error: err.message }); // agr ki masla aya to error 500 return kre ga
    }
  },

  // Method to list all players
  list: async function (req, res) {
    try {
      const users = await Players.find(); // all players ko fetch kren tak ruka rahe ga
      return res.status(201).json(users); // user ko 201 OK ke sath return kre ga
    } catch (error) {
      return res.status(500).json({ error: error.message }); // agr error hogi to  500 code ke sath return kre ga
    }
  },

  // Method to delete a player
  delete: async function (req, res) {
    try {
      const { pid } = req.allParams(); // tamam params se sirf pid ko uthae ga

      if (!pid) {
        return res.status(400).json({ error: "Player ID (pid) is required" }); //agr pid not tru yani false hai to 400 code ke sath error aye ga
      }

      const delplayer = await Players.destroyOne({ pid }); // pid ke mudd se player ko delete kre ga

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
      const { fname, lname, password, email, pid } = req.allParams();
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
