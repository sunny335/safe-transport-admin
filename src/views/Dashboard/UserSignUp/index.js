import { Card, Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CardHeader, Col, Row, Input, Table } from 'reactstrap';
import axios from 'axios';
import axioss from 'src/helpers/axios';
import moment from 'moment';
import DeleteIcon from '@material-ui/icons/Delete';

const UserSignUp = () => {
  const [datas, setData] = useState([]);

  const [status, setStatus] = useState(null);
  const [UserId, setCurrentId] = useState(null);
  const [AccountStatus, setAccountStatus] = useState(null);
  useEffect(() => {
    axios
      .get(`https://safetransport-backend.herokuapp.com/api/admin/allAdmins`)
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

  const data = datas.filter((item) => item._id !== UserId);
  return (
    <Row>
      <Col md={12} className="text-center mb-5 mt-5">
        <h2 className="text-dark">Public Registration</h2>
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

                  <td style={{}}>
                    {item?.valid == 'true' ? 'active' : 'inactive'}
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
export default UserSignUp;
