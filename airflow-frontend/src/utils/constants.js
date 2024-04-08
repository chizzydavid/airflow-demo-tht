export const DagExecutors = [
  {
    value: 'sequential_executor',
    label: 'Sequential Executor',    
  },
  {
    value: 'local_executor',
    label: 'Local Executor',    
  },
  {
    value: 'remote_executor',
    label: 'Remote Executor',    
  },
  {
    value: 'celery_executor',
    label: 'Celery Executor',    
  },
  {
    value: 'kubernetes_executor',
    label: 'Kubernetes Executor',    
  },
  {
    value: 'dask_executor',
    label: 'Dask Executor',    
  },
  {
    value: 'local_kubernetes_executor',
    label: 'Local Kubernetes Executor',    
  }
]


export const DagScheduleIntervals = [
  {
    value: 'daily',
    label: 'Daily',    
  },
  {
    value: 'once',
    label: 'Once',    
  },
  {
    value: 'hourly',
    label: 'Hourly',    
  },
  {
    value: 'weekly',
    label: 'Weekly',
  },
  {
    value: 'bi_weekly',
    label: 'Bi Weekly',
  },
  {
    value: 'continous',
    label: 'Continous',
  },
  {
    value: 'monthly',
    label: 'Monthly'  
  }
]


export const TaskOperators = [
  {
    value: 'bash_operator',
    label: 'Bash Operator',     
  },
  {
    value: 'python_operator',
    label: 'Python Operator',     
  },
  {
    value: 'empty_operator',
    label: 'Empty Operator',     
  },
  {
    value: 'mysql_operator',
    label: 'Mysql Operator', 
  },
  {
    value: 'http_operator',
    label: 'Http Operator', 
  },
  {
    value: 'postgres_operator',
    label: 'Postgres Operator', 
  },
  {
    value: 'oracle_operator',
    label: 'Oracle Operator'   
  },
  {
    value: 'mssql_operator',
    label: 'Mssql Operator'  
  },
  {
    value: 'jdbc_operator',
    label: 'Jdbc Operator'  
  },
  {
    value: 'docker_operator',
    label: 'Docker Operator'  
  },
  {
    value: 'hive_operator',
    label: 'Hive Operator'  
  },
  {
    value: 'slack_api_operator',
    label: 'Slack Api Operator'  
  },
  {
    value: 'email_operator',
    label: 'Email Operator'  
  }
]
