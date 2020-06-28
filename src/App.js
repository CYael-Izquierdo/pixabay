import React, {useState, useEffect} from 'react';
import Form from "./components/Form";
import ImageList from "./components/ImageList";

function App() {

    const [search, setSearch] = useState("");
    const [imageList, setImageList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        if (search === "") return;

        const getImages = async () => {
            const imagesPerPage = 30;
            const key = "17239176-4c3eb605712fd3f31ff949f06"
            const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imagesPerPage}&page=${currentPage}`;

            const response = await fetch(url);
            const result = await response.json()

            // calculate totalPages
            const calcTotalPages = Math.ceil(result.totalHits / imagesPerPage);
            setTotalPages(calcTotalPages);

            // set results
            setImageList(result.hits)

            // scroll up
            const jumbotron = document.querySelector(".jumbotron");
            jumbotron.scrollIntoView({behavior: "smooth"})
        }
        getImages()
    }, [search, currentPage]);

    const previousPage = () => {
        if (currentPage <= 1) return;

        setCurrentPage(currentPage - 1);
    }

    const nextPage = () => {
        if (currentPage >= totalPages) return;

        setCurrentPage(currentPage + 1);
    }

    return (
        <div className="container">
            <div className="jumbotron">
                <p className="lead text-center"> Image Browser </p>
                <Form
                    setSearch={setSearch}
                />
            </div>
            <div className="row justify-content-center">
                <ImageList imageList={imageList}/>

                {(currentPage === 1) ? null :
                    <button
                        type="button"
                        className="btn btn-info mr-1"
                        onClick={previousPage}
                    >&laquo; Previous</button>
                }

                {(currentPage === totalPages) ? null :
                    <button
                        type="button"
                        className="btn btn-info"
                        onClick={nextPage}
                    >Next &raquo;</button>
                }
            </div>
        </div>
    );
}

export default App;
