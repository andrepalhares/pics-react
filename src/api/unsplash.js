import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 1b8909924da3f3f3aed59a5bda4d196b304e767d59a23aaf6f14d62763b18e56'
  }
});
