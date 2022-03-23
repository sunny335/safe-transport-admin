import { Card, Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CardHeader, Col, Row, Input, Table } from 'reactstrap';
import axios from 'axios';
import axioss from 'src/helpers/axios';
import moment from 'moment';
import DeleteIcon from '@material-ui/icons/Delete';

const SignUp = () => {
  const [datas, setData] = useState([]);

  const [status, setStatus] = useState(null);
  const [UserId, setCurrentId] = useState(null);
  const [AccountStatus, setAccountStatus] = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://safetransport-backend.herokuapp.com/api/admin/allPoliceAuth`
      )
      .then((res) => {
        const persons = res;
        // thissetState({ persons });
        setData(persons.data.admins);
      });
  }, [setData]);

  const handleDelete = async (id) => {
    console.log({ id });
    try {
      const { data } = await axioss.delete(`/${id}`);
      console.log(data);
      setStatus(data);
      setCurrentId(id);
    } catch {}
  };

  // useEffect(() => {
  //   let AccountStatusData = {
  //     phone: loggedIn.user.Phone,
  //     otp: OTP,
  //     hash: hashData,
  //     id: loggedIn.user._id,
  //   };
  //   if (AccountStatus !== null) {
  //     axios
  //       .post(
  //         `/policeAccountStatus`, { ...AccountStatusData }
  //       )
  //       .then((res) => {
  //         const persons = res;

  //         console.log(persons.data.admins);
  //       });
  //   }
  // }, [AccountStatus]);

  const handleAccountStatus = async (status, email, phone, id) => {
    const AccountStatusData = {
      phone,
      email,
      status,
      id,
    };
    setAccountStatus(status);
    console.log(status);
    await axioss.post(`/policeAccountStatus`, {
      ...AccountStatusData,
    });
  };

  const data = datas.filter((item) => item._id !== UserId);
  return (
    <Row>
      <Col md={12} className="text-center mb-5 mt-5">
        <h2 className="text-dark">Police Registration</h2>
        <p className="text-success"> {status?.message}</p>
      </Col>
      <div className="table-container">
        <Table responsive="sm">
          <thead>
            <tr
              className=" px-2"
              style={{ backgroundColor: '#2EC16C', height: '48px' }}
            >
              <th style={{ fontWeight: '600', color: '#fff' }}>Role</th>
              <th style={{ fontWeight: '600', color: '#fff' }}>Create Time</th>
              <th style={{ fontWeight: '600', color: '#fff' }}>Name</th>
              <th style={{ fontWeight: '600', color: '#fff' }}>Email</th>
              <th style={{ fontWeight: '600', color: '#fff' }}>Phone</th>
              <th style={{ fontWeight: '600', color: '#fff' }}>
                Creator Nid/passport
              </th>
              <th style={{ fontWeight: '600', color: '#fff' }}>Designation</th>
              <th style={{ fontWeight: '600', color: '#fff' }}>Zone</th>
              <th style={{ fontWeight: '600', color: '#fff' }}>
                accountStatus
              </th>
              {/* <td style={{  fontWeight: '600', color: '#fff' }}>
            Delete
          </td> */}
            </tr>
          </thead>
          <tbody className="bg-transparent">
            {data &&
              data.map((item, i) => (
                <tr
                  key={item._id}
                  className=" px-2"
                  style={{
                    backgroundColor: i % 2 == 0 ? '#fff' : '#FED6FF',
                    height: '48px',
                  }}
                >
                  <td style={{}}>{item.signupAs} </td>
                  <td style={{}}> {moment(item.createdAt).fromNow()}</td>
                  <td style={{}}>
                    {item.firstName} {item.lastName}
                  </td>
                  <td style={{}}>{item.email}</td>
                  <td style={{}}>{item.Phone}</td>
                  <td style={{}}>{item?.nid}</td>
                  <td style={{}}>{item?.Designation}</td>
                  <td style={{}}>{item?.zone}</td>
                  <td style={{}}>
                    {item?.accountStatus == 'active' ? (
                      <p className="m-0">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 5 5"
                          fill="none"
                          style={{ marginRight: '5px' }}
                        >
                          <circle cx="2.5" cy="2.5" r="2.5" fill="#27AE60" />
                        </svg>
                        {item?.accountStatus}
                      </p>
                    ) : (
                      <div className="d-flex align-items-center">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 5 5"
                          fill="none"
                          style={{ marginRight: '5px' }}
                        >
                          <circle cx="2.5" cy="2.5" r="2.5" fill="#FF3370" />
                        </svg>
                        <Input
                          id="exampleSelect"
                          name="select"
                          type="select"
                          onChange={(e) =>
                            handleAccountStatus(
                              e.target.value,
                              item?.email,
                              item?.Phone,
                              item?._id
                            )
                          }
                          style={{ width: '100px', cursor: 'pointer' }}
                        >
                          <option>inactive</option>
                          <option>active</option>
                        </Input>
                      </div>
                    )}
                  </td>

                  {/* <td style={{  }}>
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
                </td> */}
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </Row>
  );
};
export default SignUp;
