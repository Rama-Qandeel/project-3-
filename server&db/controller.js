const express = require("express");
const bcrypt = require("bcrypt");
const jwt_decode = require("jwt-decode");
const jwt = require("jsonwebtoken");
const { db, roles } = require("./models");
const { JsonWebTokenError } = require("jsonwebtoken");
const { options } = require("./mainRouter");
const { manager, teacher, student } = require("./users");


//********************************************************** */
const getstudents = async(req,res) => {
await  student.find({},async(error,data)=>{
 
 if(error){
      
      // return error
      res.json(error)

    }
if (data){
      console.log('data : ',data);
      
    //  return  data
    res.json(data)
}
  })
  
};
//************************************************************** */
const getteachers = async(req,res) => {
  await  teacher.find({},async(error,data)=>{
   
   if(error){
        
        // return error
        res.json(error)
  
      }
  if (data){
        console.log('data : ',data);
        
      //  return  data
      res.json(data)
  }
    })
    
  };

//************************************************************* */
const register = async (user) => {
  const newmanager = new manager({
    email: user.email,
    username: user.username,
    password: await bcrypt.hash(user.password, Number(process.env.SALT)),
    roleid: 1,
  });

  try {
    const created = await newmanager.save();
    return "create new user : " + user.username;
  } catch (err) {
    return err;
  }
};


//*********************************************************** */
const login = async (user) => {
  await manager.find({ email: user.email }, async function (err, docs) {
    
    console.log('docs : ',docs);
    
    if (docs.length) {
      if (await bcrypt.compare(user.password, docs[0].password)) {
        const payload = {
          email: docs[0].email,
          roleid:docs[0].roleid
        };
        const options = {
          expiresIn: process.env.TOKEN_EXPIRATION,
        };
        const token = await jwt.sign(payload, process.env.SECRET, options);

        console.log(token);

        return token;
      } else {
        console.log("Invalid login check your password");
        return "Invalid login check your password";
      }
    } else {
      console.log("Invalid login check your email");
      return "Invalid login check your email";
    }
  });
};

//**************************************************************** */
const adduser = async (user) => {
  // const newuser = new teacher({
    //   email: user.email,
    //   username: user.username,
    //   password: await bcrypt.hash(user.password, Number(process.env.SALT)),
    //   material: user.material,
    //   roleid: user.roleid,
    // });

    // try {
    //   const created = await newuser.save();
    //   return "create new user : " + user.username;
    // } catch (err) {
    //   return err;
    // }
  // }
 
    const newuser = new student({
      username: user.username,
      email: user.email,
      password: await bcrypt.hash(user.password, Number(process.env.SALT)),
      class: user.class,
      roleid: user.roleid,
    });
    console.log('newuser :',newuser);
    
    try {
      const created = await newuser.save();
      return newuser
    } catch (err) {
      return "please change the email";
    }
  }


//**************************************************************** */
const deleteuser = (user) => {
  try {
    const deleteUser = student.deleteOne({ email: user.email });
    return deleteUser

  } catch (err) {
    throw err;
  }
};

//************************************************************* */
const updateinfo = (user) => {
  let add = db.filter((teacher) => {
    return teacher.email == user.email;
  });
  if (add) {
    db.forEach((teacher, i) => {
      if (teacher.email == user.email) {
        db[i].material = user.material;
        db[i].time = user.time;
      }
    });
  }
  return "The information was added successfully";
};

//************************************************************* */

const search = (user) => {
  const getinformation = db.filter(
    (u) => u.username == user.username && u.email == user.email
  );
  // console.log('getinformation',getinformation);

  if (getinformation.length) {
    return {
      username: getinformation[0].username,
      class: getinformation[0].class,
    };
  }
  {
    return "not found";
  }
};

module.exports = {
  getstudents,
  getteachers,
  register,
  login,
  adduser,
  deleteuser,
  updateinfo,
  search,
};
