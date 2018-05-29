from django.contrib.auth import authenticate, login, logout
from django.db.models import Q
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveAPIView, UpdateAPIView, DestroyAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework import status
from API.models import *



class Login(APIView):
    # permission_classes = (permissions.AllowAny,)

    @csrf_exempt
    def post(self, request, format=None):
        # import pdb
        # pdb.set_trace()
        data = request.data
        username = data.get('username', None)
        password = data.get('password', None)
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            token = Token.objects.get_or_create(user=user)
            return Response(
        	{
            'status': 'success',
            'statusCode': status.HTTP_201_CREATED,
            'message': 'Login successfully',
            'token': token[0].key,
            "id": user.id,
        }, status=status.HTTP_201_CREATED)
        else:
            return Response({
            'status': 'unauthorized',
            'statusCode': status.HTTP_401_UNAUTHORIZED,
            'message': 'Username or password is invalid'
        }, status=status.HTTP_401_UNAUTHORIZED)


class UserManagement(APIView):

    def post(self, request,format=None):
        data = request.data
        
        username = data.get('username', None)
        password = data.get('password', None)
        firstname = data.get('firstname',None)
        lastname = data.get('lastname',None)
        email = data.get('email',None)
        phone_number = data.get('phoneNumber',None)
        if username and  password and firstname and lastname and  email and phone_number:
            user = User.objects.create_user(username=username,
                                 email=email,
                                 password=password,
                                 last_name=lastname,
                                 first_name=firstname
                                )
            Profile.objects.create(user=user,phone_number=phone_number)

            return Response(
            {
                'status': 'success',
                'statusCode': status.HTTP_201_CREATED,
                'message':'successfully UserCreated',
                
            }, status=status.HTTP_201_CREATED)

        else:
            return Response({
            'status': 'Failed',
            'statusCode': status.HTTP_401_UNAUTHORIZED,
            'message': 'Please Provide username and password firstname and lastname and email and phoneNumber'
        }, status=status.HTTP_401_UNAUTHORIZED)
                
