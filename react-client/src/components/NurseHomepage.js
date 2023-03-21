import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import Spinner from 'react-bootstrap/Spinner';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { withRouter, useHistory } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLightbulb,faPlusSquare, faExclamationTriangle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';


function Nurse(props)
{
    
    return (
        <div className='nursePage'>
            <center><h2> Hello, user!</h2></center>

            <ListGroup >

      <ListGroup.Item action href="/alert"className='listColor'>
        Emergency Alert <FontAwesomeIcon icon={faExclamationTriangle} color='red' />
      </ListGroup.Item>

      <ListGroup.Item action href="/vitals"className='listColor'>
        Add Patient Vital Signs <FontAwesomeIcon icon={faPlusSquare} size={'1x'}/>
      </ListGroup.Item>

      <ListGroup.Item action href="/patientInfo" className='listColor'>
        Access Patient Information  <FontAwesomeIcon icon={faInfoCircle} size={'1x'} color='green'/>
      </ListGroup.Item>

      <ListGroup.Item action href="/createTip" className='listColor'>
        Send Daily Motivational Tip <FontAwesomeIcon icon={faLightbulb} size={'1x'} color='orange'/>
      </ListGroup.Item>

    </ListGroup>

        </div>
    );

}

export default withRouter(Nurse);