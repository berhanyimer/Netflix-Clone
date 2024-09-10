import React from 'react'
import axios from "axios";
const instance = axios.create({
baseURL: "http://api.themoviedb.org/3"
});
function Axios() {
  return (
    <div>Axios</div>
  )
}

export default Axios