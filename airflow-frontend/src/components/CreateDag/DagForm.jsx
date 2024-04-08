import { useState } from 'react';
import InputField from '../shared/TextField';
import Button from '../shared/Button';
import SelectField from '../shared/SelectField';
import './createdag.css';
import { Grid } from '@mui/material';
import { DagScheduleIntervals, DagExecutors } from '../../utils/constants';


const DagForm = ({ values, handleInputChange, handleBtnClick }) => {
  return (
    <form className="max-w-md mx-auto mb-10">
      <InputField
        value={values.dagId}
        label="Unique Dag ID"
        onChange={handleInputChange('dagId')}
        placeholder="demo_k8s_workflow"
      />

      <InputField
        value={values.dagOwner}
        label="Owner"
        onChange={handleInputChange('dagOwner')}
        placeholder="Jane Doe"
      />
      
      <InputField
        value={values.dagDescription}
        label="Description"
        onChange={handleInputChange('dagDescription')}
        placeholder="Workflow for Kubernetes batch job"
      />

      <InputField
        value={values.dagContactEmail}
        label="Contact Email"
        onChange={handleInputChange('dagContactEmail')}
        placeholder="jane.doe@mail.ca"
      />

      <Grid container spacing={2}>
        <Grid item sm={6}>
          <SelectField
            value={values.dagExecutor}
            label="Dag Executor"
            onChange={handleInputChange('dagExecutor')}
            options={DagExecutors}
          />
        </Grid>

        <Grid item sm={6}>
          <SelectField
            value={values.scheduleInterval}
            label="Workflow Schedule"
            onChange={handleInputChange('scheduleInterval')}
            options={DagScheduleIntervals}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item sm={6}>
          <InputField
            value={values.dagRetryDelay}
            label="Retry Delay in Seconds"
            onChange={handleInputChange('dagRetryDelay')}
            placeholder="30"
          />
        </Grid>

        <Grid item sm={6}>
          <InputField
            value={values.allowedRetries}
            label="Allowed Retries"
            onChange={handleInputChange('allowedRetries')}
            placeholder="4"
          />
        </Grid>
      </Grid>

      <Button
        type="submit"
        label="Create Tasks"
        onClick={handleBtnClick}
      />

    </form>
  );
}

export default DagForm;
