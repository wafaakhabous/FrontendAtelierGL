import React, { useState } from 'react';
import  { Component } from "react";
import styled, { css } from "styled-components";

const CreateRequestForm = ({ onAddRequest, userId }) => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if source and destination are not empty
    if (source.trim() === '' || destination.trim() === '') {
      alert('Please enter both source and destination');
      return;
    } 
    // Call the onAddRequest function from the parent component
    onAddRequest({ source, destination, userId });

    // Clear the form fields
    setSource('');
    setDestination('');
  };

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <label>
  //       Source:
  //       <input type="text" value={source} onChange={(e) => setSource(e.target.value)} />
  //     </label>
  //     <br />
  //     <label>
  //       Destination:
  //       <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} />
  //     </label>
  //     <br />
  //     <button type="submit">Submit</button>
  //   </form>
  // );
  return (
    <Rect>
      <LoremIpsum>Add travel compagnon Request</LoremIpsum>
      <SourceRow>
        <Source placeholder="  Source"></Source>
        <Source1 placeholder="  Destination"></Source1>
      </SourceRow>
      <Source2Row>
        <Source2 placeholder="  Date"></Source2>
        <Source3 placeholder="  Description" numberOfLines={100}></Source3>
      </Source2Row>
      <Button>
        <ButtonOverlay></ButtonOverlay>
      </Button>
    </Rect>
  );
};



const Rect = styled.div`
  display: flex;
  width: 597px;
  height: 273px;
  background-color: rgba(244,246,243,0.65);
  border-radius: 17px;
  flex-direction: column;
  margin-top: 134px;
  align-self: center;
  box-shadow: 1px 1px 10px  0.43px rgba(0,0,0,1) ;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const LoremIpsum = styled.span`
  font-family: DM Sans;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 19px;
  opacity: 0.72;
  margin-top: 27px;
  margin-left: 153px;
`;

const Source = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 38px;
  width: 250px;
  background-color: rgba(172,184,159,0.35);
  border-radius: 8px;
  shadow-radius: 0px;
  border: none;
  background: transparent;
  box-shadow: 3px 3px 0px  0.01px rgba(0,0,0,1) ;
`;

const Source1 = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 38px;
  width: 250px;
  background-color: rgba(172,184,159,0.4);
  border-radius: 8px;
  shadow-radius: 0px;
  margin-left: 31px;
  border: none;
  background: transparent;
  box-shadow: 3px 3px 0px  0.01px rgba(0,0,0,1) ;
`;

const SourceRow = styled.div`
  height: 38px;
  flex-direction: row;
  display: flex;
  margin-top: 52px;
  margin-left: 28px;
  margin-right: 38px;
`;

const Source2 = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 38px;
  width: 250px;
  background-color: rgba(172,184,159,0.4);
  border-radius: 8px;
  shadow-radius: 0px;
  border: none;
  background: transparent;
  box-shadow: 3px 3px 0px  0.01px rgba(0,0,0,1) ;
`;

const Source3 = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 38px;
  width: 250px;
  background-color: rgba(172,184,159,0.4);
  border-radius: 8px;
  shadow-radius: 0px;
  margin-left: 31px;
  border: none;
  background: transparent;
  box-shadow: 3px 3px 0px  0.01px rgba(0,0,0,1) ;
`;

const Source2Row = styled.div`
  height: 38px;
  flex-direction: row;
  display: flex;
  margin-top: 16px;
  margin-left: 28px;
  margin-right: 38px;
`;

const Button = styled.div`
  width: 156px;
  height: 29px;
  background-color: rgba(109,144,69,0.77);
  border-radius: 7px;
  shadow-radius: 0px;
  margin-top: 28px;
  margin-left: 206px;
  border: none;
  box-shadow: 3px 3px 0px  0.01px rgba(0,0,0,1) ;
`;



export default CreateRequestForm;
