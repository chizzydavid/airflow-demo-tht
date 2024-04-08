from django.db import models
from .enums import DagStatus, DagExecutor, DagRunInterval, TaskOperator

class Dag(models.Model):
    id = models.AutoField(primary_key=True, unique=True)
    dag_id = models.CharField(max_length=200)
    description = models.TextField(null=True)
    owner = models.CharField(max_length=200)
    schedule_interval = models.CharField(max_length=200, choices=DagRunInterval.choices)
    schedule_interval_cron = models.CharField(max_length=200, null=True)
    executor = models.CharField(max_length=200, choices=DagExecutor.choices)
    contact_email = models.CharField(max_length=200, null=True)
    start_date = models.DateField()
    retry_delay = models.IntegerField(null=True)
    allowed_retries = models.IntegerField()
    catch_up = models.BooleanField(default=False)
    email_on_retry = models.BooleanField(default=False)
    email_on_failure = models.BooleanField(default=False)
    last_run_status = models.CharField(max_length=200, choices=DagStatus.choices, null=True)
    last_run_ts = models.DateTimeField(null=True)
    next_run_ts = models.DateTimeField(null=True)
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.dag_id + ": " + self.description



class Task(models.Model):
    id = models.AutoField(primary_key=True, unique=True)
    dag = models.ForeignKey(Dag, on_delete=models.CASCADE, to_field='id', related_name='tasks')
    task_id = models.CharField(max_length=200)
    description = models.TextField(null=True)
    operator = models.CharField(max_length=200, choices=TaskOperator.choices)
    depends_on = models.CharField(max_length=200, null=True)
    code_snippet = models.TextField(null=True)
    last_run_status = models.CharField(max_length=200, null=True)
    last_run_ts = models.DateTimeField(null=True)    
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.task_id + ": " + self.description

