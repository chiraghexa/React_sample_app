import { useState } from "react";
import { Pagination } from "react-bootstrap";
const Page = () => {

    const array_page = [1, 2, 3, 4, 5];
    const [currentpage, setCurrentpage] = useState(1);


    return (

        <>
            <Pagination className="page">
                {
                    array_page.map((item) => {
                        return (<Pagination.Item active={currentpage === item ? true : false}  > {item} </Pagination.Item>);
                    })
                }
            </Pagination>

        </>
    );
}

export default Page;