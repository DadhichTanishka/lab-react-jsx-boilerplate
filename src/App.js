import { render } from '@testing-library/react';
import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}
function App() {
  // code here
return (
    <div>
        <h2>Kalvium Gallary</h2>
        <div>{imageData().map((images)=>{
        return (<img src={images.img}></img>)
        })}
        </div>

        {/* <div><img src={imageData().map(img)}></img></div> */}
    </div>
)
  }

export default App;
