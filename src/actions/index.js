import axios from "axios";

async function getRepos(username) {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );

    return response.data;
  } catch (err) {
    throw new Error(err);
  }
}

export default getRepos;
