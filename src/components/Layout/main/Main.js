import { Fragment } from "react";
import AvailableFlowers from "../../Flowers/AvailableFlowers";
import MainNav from "./MainNav";

const Main = () => {
    return (
        <Fragment >
            <MainNav />
            <AvailableFlowers />
        </Fragment>
    )
}

export default Main;