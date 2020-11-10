import './App.css';
import imageInsrc from "./imageInsrc.jpg";
//import imgInpublic from "./imgInpublic.jpg"

function App() {
  return (
    <div>

<div style={{border:"solid 1px black", maxWidth:"100vw"}}>
 
<h1 className="title red">Your name here</h1>

<img src={imageInsrc} alt="image source" />

<br />

<img src={"/imgInpublic.jpg"} alt="image public" />

</div>

<video width="320" height="240" controls>

<source src="myVideo.mp4" type="video/mp4" />

</video>
    </div>
  );
}

export default App;
