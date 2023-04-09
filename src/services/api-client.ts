import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api/',
  params: {
    key: '327530a8f6ab43cb9bd8ba8e71cbb7b9'
  }
})
