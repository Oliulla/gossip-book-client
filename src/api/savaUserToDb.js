import axios from "axios";

// save user to db
export const saveUserToDb = async (email, displayName, photoURL) => {
  try {
    const user = { email, displayName, photoURL };
    const data = await axios.put("https://gossip-server-nf7b5t583-oliulla.vercel.app/users", user);
    return data;
    
  } catch (error) {
    console.log(error);
  }
};