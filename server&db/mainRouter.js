const express = require("express");
const {
  getstudents,
  getteachers,
  register,
  login,
  adduser,
  deleteuser,
  updateinfo,
  search
} = require("./controller");
const authRouter = express.Router();
// const { middleware, middleware2, middleware3 } = require("./middleware");

//************************************************************* */
// add new manager
authRouter.post("/register", async (req, res) => {
  try {
    res.json(await register(req.body))
  } catch (err) {
    throw err;
  }
});

// //************************************************************* */
// //for all
// authRouter.get("/login",async (req, res) => {
//   try {
//     res.json(await login(req.body));
//   } catch (err) {
//     throw err;
//   }
// });

authRouter.post("/login",login)

authRouter.get("/protect",getstudents )

authRouter.get("/protect/teachers",getteachers )
//************************************************************* */
authRouter.post("/protect/creatuser",async (req, res) => {
console.log('body',req.body);
  try {
    res.json(await adduser(req.body));

  } catch (err) {
    throw err;
  }
});

//************************************************************* */
authRouter.delete("/protect/deleteuser", async (req, res) => {
  try {
    res.json(await deleteuser(req.body));
  } catch (err) {
    throw err;
  }
});


/**************************************************************** */
// authRouter.delete("/protect/deleteuser",middleware3 ,async (req, res) => {
//   try {
//     res.json(await deleteuser(req.body));
//   } catch (err) {
//     throw err;
//   }
// });
// //************************************************************* */
// authRouter.put("/protect/update", middleware3, async (req, res, next) => {
//   try {
//     res.json(await updateinfo(req.body));
//   } catch (err) {
//     throw err;
//   }
// });
// //************************************************************** */
// authRouter.get("/search", async (req, res) => {
//   try {
//     res.json(await search(req.query));
//   } catch (err) {
//     throw err;
//   }
// });
// //************************************************************* */
// authRouter.all("*", (req, res, next) => {
//   const newErr = new Error("not found path");
//   newErr.status = 404;
//   next(newErr);
// });
// const handleAllNotExist = (err, req, res, next) => {
//   res.status(err.status).json({
//     error: {
//       message: err.message,
//     },
//   });
// };
// authRouter.use(handleAllNotExist);

module.exports = authRouter;
