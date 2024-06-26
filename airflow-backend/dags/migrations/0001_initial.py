# Generated by Django 4.2.11 on 2024-04-08 07:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Dag',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('dag_id', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('owner', models.CharField(max_length=200)),
                ('schedule_interval', models.CharField(choices=[('daily', 'Daily'), ('once', 'Once'), ('hourly', 'Hourly'), ('weekly', 'Weekly'), ('bi_weekly', 'Bi Weekly'), ('continous', 'Continous'), ('monthly', 'Monthly')], max_length=200)),
                ('executor', models.CharField(choices=[('local_executor', 'Local Executor'), ('sequential_executor', 'Sequential Executor'), ('remote_executor', 'Remote Executor'), ('celery_executor', 'Celery Executor'), ('celery_kubernetes_executor', 'Celery Kubernetes Executor'), ('dask_executor', 'Dask Executor'), ('kubernetes_executor', 'Kubernetes Executor'), ('local_kubernetes_executor', 'Local Kubernetes Executor')], max_length=200)),
                ('contact_email', models.CharField(max_length=200)),
                ('start_date', models.DateField()),
                ('retry_delay', models.IntegerField()),
                ('allowed_retries', models.IntegerField()),
                ('catch_up', models.BooleanField(default=False)),
                ('email_on_retry', models.BooleanField(default=False)),
                ('email_on_failure', models.BooleanField(default=False)),
                ('last_run_status', models.CharField(choices=[('deferred', 'Deferred'), ('failed', 'Failed'), ('queued', 'Queued'), ('removed', 'Removed'), ('restarting', 'Restarting'), ('running', 'Running'), ('scheduled', 'Scheduled'), ('shutdown', 'Shutdown'), ('skipped', 'Skipped'), ('success', 'Success'), ('upstream_failed', 'Upstream Failed'), ('no_status', 'No Status'), ('up_for_retry', 'Up For Retry')], max_length=200)),
                ('last_run_ts', models.DateTimeField()),
                ('next_run_ts', models.DateTimeField()),
                ('created_date', models.DateTimeField(auto_now_add=True)),
                ('updated_date', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('task_id', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('operator', models.CharField(choices=[('bash_operator', 'Bash Operator'), ('python_operator', 'Python Operator'), ('empty_operator', 'Empty Operator'), ('http_operator', 'Http Operator'), ('mysql_operator', 'Mysql Operator'), ('postgres_operator', 'Postgres Operator'), ('mssql_operator', 'Mssql Operator'), ('oracle_operator', 'Oracle Operator'), ('jdbc_operator', 'Jdbc Operator'), ('docker_operator', 'Docker Operator'), ('hive_operator', 'Hive Operator'), ('s3_file_transform_operator', 'S3 File Transform Operator'), ('presto_to_mysql_operator', 'Presto To Mysql Operator'), ('slack_api_operator', 'Slack Api Operator'), ('email_operator', 'Email Operator')], max_length=200)),
                ('depends_on', models.CharField(max_length=200)),
                ('code_snippet', models.TextField()),
                ('last_run_status', models.CharField(max_length=200)),
                ('last_run_ts', models.DateTimeField()),
                ('created_date', models.DateTimeField(auto_now_add=True)),
                ('updated_date', models.DateTimeField(auto_now=True)),
                ('dag', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='dags.dag')),
            ],
        ),
    ]
