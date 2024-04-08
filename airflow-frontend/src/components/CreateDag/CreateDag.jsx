import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import DagForm from './DagForm'
import TasksForm from './TasksForm'
import { submitDAG } from '../../utils/apiHelper'
import './createdag.css';


const taskInitialState = {
  taskId: '',
  taskDescription: '',
  taskOperator: '',
  dependsOn: '',
  codeSnippet: ''
}

const dagInitialState = {
  dagId: '',
  dagOwner: '',
  dagDescription: '',
  allowedRetries: '',
  dagRetryDelay: '',
  scheduleInterval: '',
  dagExecutor: '',
  dagContactEmail: '',
  dagCatchUp: false,
  dagEmailOnRetry: false,
  dagEmailOnFailure: false,
}

const CreateDag = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [dagState, setDagState] = useState(dagInitialState);
  const [step, setStep] = useState(1)
  const [tasksState, setTasksState] = useState([{...taskInitialState}])
  const navigateTo = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true)
      await submitDAG(dagState, tasksState)
      setIsLoading(false)
      navigateTo('/list-dags')
    } catch (error) {
      setIsLoading(false)
    }
  }

  const setDagValues = (input) => (e) => {
    e.preventDefault();
    setDagState({
      ...dagState,
      [input]: e.target.value
    })
  }

  const setTasksValues = (input, index) => (e) => {
    e.preventDefault();
    const data = [...tasksState];
    data[index][input] = e.target.value;
    setTasksState(data);
  }  

  const handleAddTask = () => {
    setTasksState([...tasksState, {...taskInitialState}])
  }

  const nextStep = () => {
    setStep(step + 1)
  };

  const prevStep = () => {
    setStep(step - 1)
  };

  return (
    <div className="listdag__container_sec">
        <div className='listdag__header_sec'>
          <h2 className='header_text'>Create DAG</h2>
        </div>

        {
          step === 1 
          ?
            <DagForm
              values={dagState}
              handleInputChange={setDagValues}
              handleBtnClick={nextStep}
            /> 
          :
            <TasksForm
              isLoading={isLoading}
              values={tasksState}
              handleInputChange={setTasksValues}
              handlePrevBtnClick={prevStep}
              handleAddTask={handleAddTask}
              handleSubmitDag={handleSubmit}
            />
        }

    </div>    
  );
}

export default CreateDag;
