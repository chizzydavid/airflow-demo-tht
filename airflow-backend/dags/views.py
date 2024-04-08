from django.http import JsonResponse
from .models import Dag
from .serializers import DagSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


@api_view(['GET', 'POST'])
def dag_list(request):
    if request.method == 'GET': 
        dags = Dag.objects.all()
        serializer = DagSerializer(dags, many=True)
        return Response(serializer.data)

    elif request.method == 'POST': 
        dag_serializer = DagSerializer(data=request.data)
        if dag_serializer.is_valid():
            new_dag =dag_serializer.save()
            return Response(dag_serializer.data, status=status.HTTP_201_CREATED)
        return Response(dag_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def dag_detail(request, id):
    try:
        dag = Dag.objects.get(pk=id)
    except Dag.DoesNotExist:
        return Response("Dag not found", status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'GET': 
        serializer = DagSerializer(dag)
        return Response(serializer.data)

    elif request.method == 'PUT': 
        serializer = DagSerializer(dag, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE': 
        Dag.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
def health_check(request):
    return Response('Okay', status=status.HTTP_200_OK)
