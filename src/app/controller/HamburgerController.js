
const Hamburger = require("../model/Hamburguer");

class HamburgerController {
 async store(req, res) {
    const data = await Hamburger.create(req.body);

    return res.json(data);
  }
  async index(req, res) {
    const data = await Hamburger.find({});

    return res.json(data);
  }
}

module.exports = new HamburgerController();