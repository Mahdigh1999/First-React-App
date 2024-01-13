import { useContext } from "react";
import { Theme } from "../App";
function RegularBtn() {
    const tm = useContext(Theme);
    return (
        <>
        <button onClick={tm.handleDarkMood}>click</button>
        {tm.isDark && <div>i am dark</div>}
        </>
    );
}

export default RegularBtn;