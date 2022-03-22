import { Card, Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CardHeader, Col, Row, Input } from 'reactstrap';
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

    // axios.post(`/policeAccountStatus`, { ...AccountStatusData }).then((res) => {
    //   const persons = res;
    //   // thissetState({ persons });
    //   console.log(persons.data.admins);
    // });
  };

  const data = datas.filter((item) => item._id !== UserId);
  return (
    <Row>
      <Col md={12} className="text-center mb-5">
        <h2 className="text-white">Sign Up Lists</h2>
        <p className="text-success"> {status?.message}</p>
      </Col>
      <table>
        <tr
          className="d-flex justify-content-between align-items-center px-2"
          style={{ backgroundColor: '#2EC16C', height: '48px' }}
        >
          <td style={{ width: '20%', fontWeight: '600', color: '#fff' }}>
            Role
          </td>
          <td style={{ width: '20%', fontWeight: '600', color: '#fff' }}>
            Created At
          </td>
          <td style={{ width: '20%', fontWeight: '600', color: '#fff' }}>
            Name
          </td>
          <td style={{ width: '20%', fontWeight: '600', color: '#fff' }}>
            Email
          </td>
          <td style={{ width: '20%', fontWeight: '600', color: '#fff' }}>
            Designation
          </td>
          <td style={{ width: '20%', fontWeight: '600', color: '#fff' }}>
            zone
          </td>
          <td style={{ width: '20%', fontWeight: '600', color: '#fff' }}>
            accountStatus
          </td>
          {/* <td style={{ width: '20%', fontWeight: '700' }}>Creator Nid</td> */}
          <td style={{ width: '20%', fontWeight: '600', color: '#fff' }}>
            Delete
          </td>
        </tr>
        <body className="bg-transparent">
          {data &&
            data.map((item, i) => (
              <tr
                key={item._id}
                className="d-flex justify-content-between mb-2 align-items-center px-2"
                style={{
                  backgroundColor: i % 2 == 0 ? '#fff' : '#FED6FF',
                  height: '48px',
                }}
              >
                <td style={{ width: '20%' }}>{item.role} </td>
                <td style={{ width: '20%' }}>
                  {' '}
                  {moment(item.createdAt).fromNow()}
                </td>
                <td style={{ width: '20%' }}>
                  {item.firstName} {item.lastName}
                </td>
                <td style={{ width: '20%' }}>{item.email}</td>

                <td style={{ width: '20%' }}>{item?.Designation}</td>
                <td style={{ width: '20%' }}>{item?.zone}</td>
                <td style={{ width: '20%' }}>
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
                <td style={{ width: '20%' }}>
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
                </td>
              </tr>
            ))}
        </body>
      </table>
    </Row>
  );
};
export default SignUp;
