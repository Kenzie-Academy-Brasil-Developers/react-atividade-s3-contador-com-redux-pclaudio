import { useDispatch } from "react-redux";
import { addNumber, subNumber } from "../../store/modules/counter/actions";

const Control = () => {
  const dispatch = useDispatch();

  const handleAddNumber = () => {
    dispatch(addNumber());
  };

  const handleASubNumber = () => {
    dispatch(subNumber());
  };

  return (
    <div>
      <button onClick={handleAddNumber}>Add number</button>
      <button onClick={handleASubNumber}>Sub number</button>
    </div>
  );
};

export default Control;
