import React from "react";
import { ImBin } from "react-icons/im";
import { useDispatch } from "react-redux";
import { deleteToDo } from "../../redux/actions";
const NoteCard = ({ inputData, elemId }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="rounded-lg card bg-yellow-300 p-3 font-medium text-[1.1rem] ease-in-out">
        {inputData}
        <div className="flex justify-end pt-3 group rounded-full ">
          <div className="group-hover:ring-4 ring-black ring-opacity-20 transition-all ease-in-out duration-500 rounded-full p-1 cursor-pointer">
            <ImBin
              size={15}
              className=""
              onClick={(e) => dispatch(deleteToDo(elemId))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
