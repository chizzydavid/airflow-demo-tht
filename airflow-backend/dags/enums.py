from django.db import models

class DagStatus(models.TextChoices):
    DEFERRED = "deferred"
    FAILED = "failed"
    QUEUED = "queued"
    REMOVED = "removed"
    RESTARTING = "restarting"
    RUNNING = "running"
    SCHEDULED = "scheduled"
    SHUTDOWN = "shutdown"
    SKIPPED = "skipped"
    SUCCESS = "success"
    UPSTREAM_FAILED = "upstream_failed"
    NO_STATUS = "no_status"
    UP_FOR_RETRY = "up_for_retry"


class DagExecutor(models.TextChoices):
    LOCAL_EXECUTOR = "local_executor"
    SEQUENTIAL_EXECUTOR = "sequential_executor"
    REMOTE_EXECUTOR = "remote_executor"
    CELERY_EXECUTOR = "celery_executor"
    CELERY_KUBERNETES_EXECUTOR = "celery_kubernetes_executor"
    DASK_EXECUTOR = "dask_executor"
    KUBERNETES_EXECUTOR = "kubernetes_executor"
    LOCAL_KUBERNETES_EXECUTOR = "local_kubernetes_executor"
   

class TaskOperator(models.TextChoices):
    BASH_OPERATOR = "bash_operator"
    PYTHON_OPERATOR = "python_operator"
    EMPTY_OPERATOR = "empty_operator"
    HTTP_OPERATOR = "http_operator"
    MYSQL_OPERATOR = "mysql_operator"
    POSTGRES_OPERATOR = "postgres_operator"
    MSSQL_OPERATOR = "mssql_operator"
    ORACLE_OPERATOR = "oracle_operator"
    JDBC_OPERATOR = "jdbc_operator"
    DOCKER_OPERATOR = "docker_operator"
    HIVE_OPERATOR = "hive_operator"
    S3_FILE_TRANSFORM_OPERATOR = "s3_file_transform_operator"
    PRESTO_TO_MYSQL_OPERATOR = "presto_to_mysql_operator"
    SLACK_API_OPERATOR = "slack_api_operator"
    EMAIL_OPERATOR = "email_operator"    


class DagRunInterval(models.TextChoices):
    DAILY = "daily"
    ONCE = "once"
    HOURLY = "hourly"
    WEEKLY = "weekly"
    BI_WEEKLY = "bi_weekly"
    CONTINOUS = "continous"
    MONTHLY = "monthly"

 