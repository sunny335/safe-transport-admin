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
      .get(`https://safetransport-backend.herokuapp.com/api/getReportData`)
      .then((res) => {
        const persons = res;
        // thissetState({ persons });
        setData(persons.data.posts);
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
              <th style={{ fontWeight: '600', color: '#fff' }}>Reporter</th>
              <th style={{ fontWeight: '600', color: '#fff' }}>Create Time</th>
              <th style={{ fontWeight: '600', color: '#fff' }}>Report Type</th>
              <th style={{ fontWeight: '600', color: '#fff' }}>Location</th>
              <th style={{ fontWeight: '600', color: '#fff' }}>Comment</th>

              <th style={{ fontWeight: '600', color: '#fff' }}>Phone</th>
              <th style={{ fontWeight: '600', color: '#fff' }}>
                Report Status
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
                  <td style={{}}>{item.ReporterData.fullName} </td>
                  <td style={{}}> {moment(item.createdAt).fromNow()}</td>
                  <td style={{}}>{item.ReportType}</td>
                  <td style={{}}>{item.ReporterLocation}</td>
                  <td style={{}}>{item.comment}</td>

                  <td style={{}}>{item.ReporterData.Phone}</td>
                  <td
                    style={{
                      color:
                        (item.ReportStatus == 'Complete' && '#00D253') ||
                        (item.ReportStatus == 'Processing' && '#0695E3') ||
                        (item.ReportStatus == 'Active' && '#D20000'),
                    }}
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 5 5"
                      fill="none"
                      style={{ marginRight: '5px' }}
                    >
                      <circle
                        cx="2.5"
                        cy="2.5"
                        r="2.5"
                        fill={`${
                          (item.ReportStatus == 'Complete' && '#2EC16C') ||
                          (item.ReportStatus == 'Processing' && '#2EC16C') ||
                          (item.ReportStatus == 'Active' && '#2EC16C')
                        }`}
                      />
                    </svg>
                    {item.ReportStatus}
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
