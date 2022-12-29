import axios from "axios";

// save user to db
export const saveUserToDb = async (email, displayName, photoURL) => {
  try {
    const user = { email, displayName, photoURL };
    const data = await axios.put("http://localhost:5000/users", user);
    return data;
    
  } catch (error) {
    console.log(error);
  }
};