import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import swal from 'sweetalert';
import useAuth from '../../../hooks/useAuth';


const MyStudents = () => {
    AOS.init();
    const [teachers, setTeachers] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const { user } = useAuth()
    useEffect(() => {
        setIsLoading(true)
        fetch(`https://tutor-finder.herokuapp.com/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setTeachers(data)

            })
        setIsLoading(false)

    }, [isLoading])



    const handleDelete = (id) => {
        setIsLoading(true)
        fetch(`https://tutor-finder.herokuapp.com/orders/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    swal("DELETE!", "Delete Successfully!", "success");
                }
                setIsLoading(false)
                console.log(result)
            })
        console.log(id)
    }
    return (
        <>
            <Container>
                <marquee><h1 className="my-5 text-info">WELCOME MY ORDERS PAGE</h1></marquee>
                {isLoading && <Spinner animation="border" variant="primary" />}
                <div className="row">
                    {
                        teachers.map(teacher => <div key={teacher?.id} teacher={teacher} className="col col-lg-4 col-md-4 col-sm-6 col-6 "
                        // data-aos="flip-left"
                        // data-aos-easing="ease-out-cubic"
                        // data-aos-duration="2500"
                        >
                            <div className="card mb-3 single-card ">
                                <div className="row g-0 ">
                                    <div className="col-md-4 text-center p-2">
                                        <img src={teacher?.img} className="img-fluid card-image rounded " alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title fw-bold text-primary">{teacher?.name}</h5>
                                            <p className="card-text fw-bolder">Subject: {teacher?.subject}</p>
                                            <p className="card-text fw-bolder">Phone : {teacher?.number}</p>
                                            <p className="card-text fw-bolder">Salary : Tk {teacher?.salary}</p>
                                            <button onClick={() => handleDelete(teacher?._id)} className='btn btn-danger  fw-bold px-4'>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }

                </div>


            </Container>

        </>
    );
};

export default MyStudents;