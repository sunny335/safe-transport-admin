import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CardHeader, Col, Row } from 'reactstrap';
import axios from 'axios';
import axioss from 'src/helpers/axios';
import moment from 'moment';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const Login = () => {
  // const data = useSelector((store) => store.loginInfo);
  const [datas, sedivata] = useState([]);

  const [status, setStatus] = useState(null);
  const [UserId, setCurrentId] = useState(null);
  const [AccountStatus, setAccountStatus] = useState(null);

  useEffect(() => {
    axios
      .get(`https://safetransport-backend.herokuapp.com/api/getQrdata`)
      .then((res) => {
        const persons = res;
        // thissetState({ persons });
        console.log('axios', persons);
        sedivata(persons.data.posts);
      });
  }, [sedivata]);

  const handleDelete = async (id) => {
    console.log({ id });
    try {
      const { data } = await axioss.delete(`/${id}`);
      console.log(data);
      setStatus(data);
      setCurrentId(id);
    } catch {}
  };

  const data = datas.filter((item) => item._id !== UserId);
  console.log('dsdds', data);
  return (
    <Row>
      <Col md={12} className="text-center my-5">
        <h2>Generated Qr</h2>
      </Col>

      <div className="bg-transparent d-flex flex-wrap ">
        {data &&
          data.map((item, i) => (
            <div key={item._id} className=" mb-2 align-items-center   qr-card">
              <div className="card-inner card">
                <div className="qr-code-image">
                  <img
                    src={item?.selectedFile}
                    alt="selectedFile"
                    className="w-100"
                  />
                </div>
                <div className="qr-body">
                  <div className="d-flex">
                    <p className="w-50">createdAt</p>
                    <p>:{moment(item.createdAt).fromNow()}</p>
                  </div>
                  <div className="d-flex">
                    <p className="w-50">Bus Name</p>
                    <p>:{item.name}</p>
                  </div>
                  <div className="d-flex">
                    <p className="w-50">Bus Number</p>
                    <p>:{item.busNumber}</p>
                  </div>
                  <div className="d-flex">
                    <p className="w-50">Driver Name</p>
                    <p>:{item.DriverName}</p>
                  </div>
                  <div className="d-flex">
                    <p className="w-50">Driver License</p>
                    <p>:{item.DriverLicense}</p>
                  </div>
                  <div className="d-flex">
                    <p className="w-50">Driver Phone</p>
                    <p>:{item.DriverPhone}</p>
                  </div>
                </div>
                {/* <div >
                  {' '}
                  <Button
                    size="small"
                    color="secondary"
                    className="shadow"
                    // onClick={() => dispatch(deletePost(post?._id))}
                    onClick={() => handleDelete(item?._id)}
                  >
                    <DeleteIcon fontSize="small" />
                  </Button>
                </div> */}
              </div>
            </div>
          ))}
      </div>
    </Row>
  );
};
export default Login;
