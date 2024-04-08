import InputField from '../shared/TextField';
import Button from '../shared/Button';
import SelectField from '../shared/SelectField';
import './createdag.css';
import { Grid, Divider } from '@mui/material';
import { TaskOperators } from '../../utils/constants';


const TasksForm = ({ 
  values, 
  handleInputChange, 
  handlePrevBtnClick,
  handleAddTask,
  handleSubmitDag,
  isLoading
}) => {
  return (
    <form className="max-w-md mx-auto mb-10">
      {values.map((task, index) => {
        return (
          <div key={index}>         
            <p className='sub_header_text'>Task {index + 1}</p>

            <InputField
              value={task.taskId}
              label="Unique Task ID"
              onChange={handleInputChange('taskId', index)}
              placeholder="pull_helm_charts"
            />

            <InputField
              value={task.taskDescription}
              label="Description"
              onChange={handleInputChange('taskDescription', index)}
              placeholder="Directives for pulling helm charts"
            />

            <Grid container spacing={2}>
              <Grid item sm={6}>
                <SelectField
                  value={task.taskOperator}
                  label="Task Operator"
                  onChange={handleInputChange('taskOperator', index)}
                  options={TaskOperators}
                />
              </Grid>
      
              <Grid item sm={6}>
                <SelectField
                  value={task.dependsOn}
                  label="Depends On"
                  onChange={handleInputChange('dependsOn', index)}
                  options={[]}
                />
              </Grid>
            </Grid>

            <InputField
              value={task.codeSnippet}
              label="Code Snippet"
              onChange={handleInputChange('codeSnippet', index)}
              placeholder="<h1> Run Code </h2>"
            />

            <Divider sx={{
              m: '2rem 0',
              backgroundColor: '#F9FAFB'
            }}
            />
          </div>
        )
      })}


      <Grid container spacing={2}>
          <Grid item sm={6}>
            <Button
              type="submit"
              label="Previous"
              onClick={handlePrevBtnClick}
            />
          </Grid>
    
            <Grid item sm={6}>
              <Button
                type="submit"
                label="Add Task"
                onClick={handleAddTask}
              />
            </Grid>
          </Grid>

      <Button
        isLoading={isLoading}
        type="submit"
        label="Submit DAG"
        onClick={handleSubmitDag}
      />

    </form>
  );
}

export default TasksForm;
