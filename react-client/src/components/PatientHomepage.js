import React, { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Table, Space } from 'antd';
import Spinner from 'react-bootstrap/Spinner';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { withRouter, useHistory } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle,faGamepad, faLightbulb, faVideoCamera,faPlusSquare, faInfoCircle } from '@fortawesome/free-solid-svg-icons';


function Patient(props)
{
    return (
        <div className='patientPage'>
            <h3> Good morning patient{}</h3><br/>
          
            <ListGroup >
            <ListGroup.Item action href="/showTip" className='listColor'>
        Daily Tip  <FontAwesomeIcon icon={faLightbulb} color='orange' size={'1x'}/>
      </ListGroup.Item>

      <ListGroup.Item action href="/addVitalSigns"className='listColor'>
        Add Daily Information <FontAwesomeIcon icon={faPlusSquare} size={'1x'}/>
      </ListGroup.Item>

      <ListGroup.Item action href="/checklist" className='listColor'>
        Checklist for common signs and symptoms <FontAwesomeIcon icon={faInfoCircle} size={'1x'} color='green'/>
      </ListGroup.Item>

      <ListGroup.Item action href="/emergencyAlert" className='listColor'>
        Send an Emergency Alert  <FontAwesomeIcon icon={faExclamationTriangle} color='red' />
      </ListGroup.Item>

      <ListGroup.Item action href="/motivationalVideos" className='listColor'>
       Motivational Videos <FontAwesomeIcon icon={faVideoCamera}  />
      </ListGroup.Item>

      <ListGroup.Item action href="/game" className='listColor'>
       Play Game <FontAwesomeIcon icon={faGamepad}  />
      </ListGroup.Item>
      
    </ListGroup>
        </div>
    );

}

export default withRouter(Patient);