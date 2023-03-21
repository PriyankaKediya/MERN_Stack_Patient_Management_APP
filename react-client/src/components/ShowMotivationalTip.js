import React, { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Table, Space } from 'antd';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const GET_Tip = gql`
  {
    MotivationalTips{
      _id,
      message,
    }
  }
  `;

  const ListTip = () => {

    useEffect(() => {
        refetch();
      }, []);

    const { loading, error, data , refetch } = useQuery(GET_Tip);

    
  const columns = [
    {
      dataIndex: "message",
      key: "message"
    }
]


  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;


  return (
    <div>
        <br/><br/><br/><center><h2>Tip of the day!</h2></center><br/>
        <div className='nursePage'>
          
    <h1> <Table className='tip' columns={columns} dataSource={data.MotivationalTips} pagination={false}/></h1>
    </div></div>
  );
}

export default ListTip;