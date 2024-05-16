const controller = {};
const models = require("../models");

controller.show = async (req, res) => {
  res.locals.users = await models.User.findAll({
    attributes: [
      "id",
      "imagePath",
      "username",
      "firstName",
      "lastName",
      "mobile",
      "isAdmin",
    ],
    order: [["createdAt", "DESC"]],
  });
  res.render("user-management");
};

controller.addUser = async (req, res) => {
  const { username, firstName, lastName, mobile, isAdmin } = req.body;
  try{
    await models.User.create({
      username,
      firstName,
      lastName,
      mobile,
      isAdmin : isAdmin ? true : false,
    });
    res.redirect("/users"); //load lai trang de hien thi danh sach user moi
  }
  catch(err){
    res.status(500).send("Can not add user!");
  }
 
};

controller.updateUser = async (req, res) => {
  const { id, firstName, lastName, mobile, isAdmin } = req.body;
  try{
    await models.User.update(
      {
        firstName,
        lastName,
        mobile,
        isAdmin : isAdmin ? true : false,
      },
      {
        where: {
          id,
        },
      }
    );
    res.status(200).send("Update user successfully!");
  }
  catch(err){
    res.status(401).send("Can not update user!");   //401: loi server
    console.log(err);
  }

};

controller.deleteUser = async (req, res) => {
  const { id } = req.body;
  console.log(id);
  try{
    await models.User.destroy({
      where: {
        id: parseInt(id)
      },
    });
    res.status(200).send("Delete user successfully!");
  }
  catch(err){
    res.status(401).send("Can not delete user!");
    console.log(err);
  }
};
module.exports = controller;
