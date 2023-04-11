import { useState } from "react";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Navbar from "./components/common/Navbar";
import NoteCard from "./components/common/NoteCard";
import { addToDo, removeToDo } from "./redux/actions";
function App() {
  const [noteToAdd, setNoteToAdd] = useState("");
  const { list } = useSelector((state) => state.notesReducer);
  const dispatch = useDispatch();
  console.log("list", list);
  return (
    <>
      <Navbar />
      <div className="py-5 px-5 flex flex-col gap-10">
        <div className="mx-auto flex md:w-[60%] w-full  justify-end items-center relative pr-2 rounded border pl-4 custom-shadow">
          <input
            type="text"
            className=" w-full py-2 placeholder:text-lg   focus:outline-none placeholder:font-normal "
            placeholder="Take a Note.."
            value={noteToAdd}
            onChange={(e) => setNoteToAdd(e.target.value)}
          />
          <AiOutlineCheckSquare
            className="absolute r-2 cursor-pointer"
            size={25}
            onClick={(e) => dispatch(addToDo(noteToAdd), setNoteToAdd(""))}
          />
        </div>
        <div className="flex w-full justify-end px-5">
          <button
            onClick={() => dispatch(removeToDo())}
            className="py-2 px-6 rounded bg-black text-white font-normal hover:bg-opacity-80 bg-opacity-100 cursor-pointer"
          >
            Clear All
          </button>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:w-[90%] mx-auto gap-3">
          {list?.map((item, index) => {
            return (
              <div className="" key={index}>
                <NoteCard inputData={item.data} elemId={item.id} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
