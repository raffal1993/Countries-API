import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "actions/toggleMode";

export const useMode = () => {
    const dispatch = useDispatch();
    const mode = useSelector((state) => state.mode);

    const toggleMode = () => {
        if (mode === "dark") return dispatch(changeMode(`light`));
        if (mode === "light") return dispatch(changeMode(`dark`));
        return dispatch(changeMode(`dark`));
    };

    return { toggleMode, mode };
};
