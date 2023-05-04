const User = require("../model/User");

const middlewares = {
  register: async function (req, res) {
    const { firstName, lastName, email, password } = req.body;

    let checkUser = await User.findOne({ email: email });
    try {
      if (firstName.length <= 2 || lastName.length <= 2) {
        console.log(firstName.length);
        return res
          .status(400)
          .send("Name and last name must have at least 3 letters!");
      } else if (password.length <= 4) {
        return res.status(400).send("Password must have at least 3 letters!");
      }

      if (checkUser) {
        return res.status(400).send("That email's already registered");
      } else {
        let user = new User(req.body);
        let newDoc = await user.save();
        return res.status(200).send(user);
      }
    } catch (error) {
      if (error) {
        return res.status(401).send(error);
      }
    }
  },
  login: async function (req, res) {
    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email: email, password: password });

      if (!user) {
        res.status(400).send("Email or password incorrects");
      }
      return res.status(200).send(user);
    } catch (error) {
      if (error) {
        console.log(error);
      }
    }
  },
};

module.exports = middlewares;
