import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const index = () => {
  return (
    <div>
      <div className="grid-one-item grid-common grid-c1">
        <div className="grid-c-title">
            <h1 className="grid-c-title-text">Reference material</h1>
            <button className="grid-c-title-icon">
            </button>
        </div>
        <div className="grid-c1-content">
        <FormGroup>
            <FormControlLabel  control={<Checkbox />} label="Session Monitoring"></FormControlLabel>
            <FormControlLabel  control={<Checkbox />} label="pairing reports" />
            <FormControlLabel  control={<Checkbox />} label="Documents and Files" />
            <FormControlLabel  control={<Checkbox />} label="epolls" />
            <FormControlLabel  control={<Checkbox />} label="Votes and Comments" />
        </FormGroup>
        </div>
    </div>
    </div>
  )
}

export default index