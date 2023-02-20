import { PuffLoader } from "react-spinners";

const Spinner = () => {

    const override =  {
        display: "block",
        margin: "0 auto",
        marginTop: "100px",
        borderColor: "8E8D8A"
    }

    return (
        <PuffLoader cssOverride={override}/>
    )
}

export default Spinner;