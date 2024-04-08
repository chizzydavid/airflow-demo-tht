from rest_framework import serializers
from .models import Dag, Task


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['id', 'task_id', 'description', 'operator', 'depends_on', 'code_snippet', 'last_run_status', 
                  'last_run_ts', 'created_date', 'updated_date']


class DagSerializer(serializers.ModelSerializer):
    tasks = TaskSerializer(many=True)
    
    class Meta:
        model = Dag
        fields = ['id', 'dag_id', 'description', 'owner', 'schedule_interval', 'executor', 'contact_email', 'start_date', 
                  'retry_delay', 'allowed_retries', 'catch_up', 'email_on_retry', 'email_on_failure', 'last_run_status', 
                  'last_run_ts', 'next_run_ts', 'created_date', 'updated_date', 'tasks']


    def create(self, validated_data):
        print(validated_data)
        task_validated_data = validated_data.pop('tasks')
        dag = Dag.objects.create(**validated_data)
        task_serializer = self.fields['tasks']
        for each in task_validated_data:
            each['dag'] = dag
        tasks = task_serializer.create(task_validated_data)
        return dag

