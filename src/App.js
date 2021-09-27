import './App.css';
import Dot from './Dot'
// this db is the firestore that we exported
import db from './firebase';
import { useEffect, useState } from 'react'
import { onSnapshot, collection } from 'firebase/firestore';
function App() {
  // const [colors, setColors] = useState([]);

  // just so we get a loading message before colors are set up
  const [colors, setColors] = useState([{ name: 'Loading ... ' }]);
  useEffect(() => {
    // onSnapshot takes in 2 aparameters
    // 1 is target (document that we wanna get from db)
    // 2nd is callback function
    // so first parameter we will call collection function
    // and pass in db instance and collection name
    onSnapshot(collection(db, 'colors'), (snapshot) =>
      // snapshot.docs will give us an array of data
      // (w the documents that we created)
      // but that array has gibberish data so we need to convert it to valid data
      // to do that we use .data() function on each array
      // setColors(snapshot.docs.map(doc => doc.data()))


      // DOC is just an object so we get all its properties and then also add the id property 
      // so we can use it as a key
      setColors(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))

      // getData() - gets data once
      // onSnapshot - detects changes in document/(s)  - so if we update db with new values this will be  automatically
      //  reflected on frontend



    )
  }, [])
  return (
    <div className="App">
      <div className="root">
        <button className="button">New</button>
        <ul>
          {
            colors.map((color) =>
            (<li key={color.id}>
              <a href="#">Edit</a> {"   "}{color.Name} {"  "} <Dot color={color.Value} /> {"  "}
            </li>))
          }

        </ul>
      </div>
    </div>
  );
}

export default App;
