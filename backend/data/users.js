import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@technik.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Niksan Karkee",
    email: "niksan@technik.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Pratima Tamang",
    email: "pratima@technik.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
