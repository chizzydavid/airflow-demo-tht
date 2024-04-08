export const submitDAG = async (dagPayload, tasksPayload) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const dateNow = new Date().toISOString();

  const data =  {
    dag_id: dagPayload.dagId,
    description: dagPayload.dagDescription,
    owner: dagPayload.dagOwner,
    schedule_interval: dagPayload.scheduleInterval ?? 'daily',
    executor: dagPayload.dagExecutor,
    contact_email: dagPayload.dagContactEmail,
    retry_delay: dagPayload.dagRetryDelay ?? 0,
    allowed_retries: dagPayload.allowedRetries ?? 0,
    start_date: dateNow.split('T')[0],
    last_run_status: 'success',
    last_run_ts: dateNow,
    catch_up: false,
    email_on_retry: true,
    email_on_failure: true,
    schedule_interval_cron: "0 0 * * *",
    tasks: tasksPayload.map((task) => (
      {
        dag: 1,
        task_id: task.taskId,
        description: task.taskDescription,
        operator: task.taskOperator,
        depends_on: task.depends_on,
        code_snippet: task.codeSnippet,
        last_run_status: 'success',
        last_run_ts: dateNow
      }
    ))
  }
  try {
    let response = await fetch(`${apiUrl}dags/`, {    
      method: 'POST',   
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    const res = await response.json()
    return true
  } catch (error) {
    console.log(error)
  } 
}

