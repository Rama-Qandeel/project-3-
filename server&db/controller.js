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
  const newmanager = new teacher({
    email: user.email,
    username: user.username,
    password: await bcrypt.hash(user.password, Number(process.env.SALT)),
    material:user.material,
    roleid: user.roleid,
  });

  try {
    await  newmanager.save();
    console.log('user :',newmanager);
    return "create new user : " + user.username;
 
  } catch (err) {
  
    return err;
  }
};


//*********************************************************** */
const login = async (req,res) => {
 
 
  user=req.body;
  console.log('user',user);
const validUser=  await teacher.find({ email: user.email })
    console.log('validUser:',validUser);
    
    if (validUser.length) {
      if (await bcrypt.compare(user.password, validUser[0].password)) {
        const payload = {
          email: validUser[0].email,
        };
        const options = {
          expiresIn: process.env.TOKEN_EXPIRATION,
        };
        const token = await jwt.sign(payload, process.env.SECRET, options);

        console.log(token);

        res.json(token) ;
      } else {
        
        res.json ("Invalid login check your password");
      }
    } else {

     
      res.json ("Invalid login check your email");
    }

}

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
  
  console.log('user : ',user);
  
  try {
    const deleteUser = student.deleteOne({ email: user.email });
    console.log('deleteuser',deleteuser);
    
    
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
