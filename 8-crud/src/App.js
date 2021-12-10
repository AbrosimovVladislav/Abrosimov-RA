import './App.css';
import {Route, Routes} from "react-router-dom";
import Notes from "./components/Notes";
import CreateNewPost from "./components/CreateNewPost";
import NoteDetails from "./components/NoteDetails";

function App() {

    return (
        <div>
            <a href="/">На главную</a>
            <p/>
            <Routes>
                <Route path="/" element={<Notes/>} exact/>
                <Route path="/posts/:id" element={<NoteDetails/>} exact/>
                <Route path="/posts/new" element={<CreateNewPost/>} exact/>
            </Routes>
        </div>
    )
}

export default App;
