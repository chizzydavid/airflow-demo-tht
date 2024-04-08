# Generated by Django 4.2.11 on 2024-04-08 07:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dags', '0002_dag_schedule_interval_cron'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dag',
            name='contact_email',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='dag',
            name='description',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='dag',
            name='last_run_status',
            field=models.CharField(choices=[('deferred', 'Deferred'), ('failed', 'Failed'), ('queued', 'Queued'), ('removed', 'Removed'), ('restarting', 'Restarting'), ('running', 'Running'), ('scheduled', 'Scheduled'), ('shutdown', 'Shutdown'), ('skipped', 'Skipped'), ('success', 'Success'), ('upstream_failed', 'Upstream Failed'), ('no_status', 'No Status'), ('up_for_retry', 'Up For Retry')], max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='dag',
            name='last_run_ts',
            field=models.DateTimeField(null=True),
        ),
        migrations.AlterField(
            model_name='dag',
            name='next_run_ts',
            field=models.DateTimeField(null=True),
        ),
        migrations.AlterField(
            model_name='dag',
            name='retry_delay',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='task',
            name='code_snippet',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='task',
            name='description',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='task',
            name='last_run_status',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='task',
            name='last_run_ts',
            field=models.DateTimeField(null=True),
        ),
    ]