import React, {useState} from "react";
import Error from "./Error";

const Form = ({setSearch}) => {

    const [topic, setTopic] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        // Validation
        if (topic.trim() === "") {
            setError(true);
            return;
        }
        setError(false);

        setSearch(topic);
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Search an image, ex: Cars"
                        onChange={e => {setTopic(e.target.value)}}
                    />
                </div>
                <div className="form-group col-md-4">
                    <input
                        type="submit"
                        className="btn btn-lg btn-danger btn-block"
                        value="Search"
                    />
                </div>
            </div>
            {error ? <Error message="Enter any topic"/> : null}
        </form>
    );
}

export default Form;