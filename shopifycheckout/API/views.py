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


class Profilecheckout(APIView):

    def post(self, request, format=None):
        data = request.data
        print("++++++++++++",data)
        if len(data) > 0 :
            for rec in data:
                print(rec)
                
                first_name = rec.get('first_name', None)
                last_name = rec.get('last_name', None)
                address1 = rec.get('address1', None)                
                address2 = rec.get('address2', None)

                city = rec.get('city', None)
                state = rec.get('state', None)
                zip_val = rec.get('zip', None)
                email = rec.get('email', None)

                phone = rec.get('phone', None)
                card_num = rec.get('card_num', None)
                card_cvv = rec.get('card_cvv', None)                
                card_expired_month = rec.get('card_expired_month', None)

                card_expired_year = rec.get('card_expired_year', None)
                paypal_use = rec.get('paypal_use', None)
                paypal_email = rec.get('paypal_email', None)
                paypal_pw = rec.get('paypal_pw', None)

                if first_name and last_name and address1 and address2 and city\
                    and  state and zip_val and email and phone and card_num and \
                    card_cvv and card_expired_month and card_expired_year and\
                    paypal_use and paypal_email and paypal_pw:

                    Checkout.objects.create(first_name=first_name,last_name=last_name,
                                            address1=address1,address2=address1,city=city,
                                            state=state,zipcode=zip_val,email=email,phone=phone,
                                            card_num=card_num,card_cvv=card_cvv,paypal_use=paypal_use,
                                            card_expired_month=card_expired_month,paypal_email=paypal_email,
                                            card_expired_year=card_expired_year,paypal_pw=paypal_pw
                                            )

                else:
                    return Response({
                        'message': 'Invalid Data '
                        },status=status.HTTP_401_UNAUTHORIZED)

            return Response({
                'status': 'success',
                'statusCode': status.HTTP_201_CREATED,
                'message':'successfully Checkout Record created',
                
            }, status=status.HTTP_201_CREATED)        
            
                
        else:
            return Response({
            'message': 'Unauthorized request'
            },status=status.HTTP_401_UNAUTHORIZED)

                
        
        # auth = request.META.get('HTTP_AUTHORIZATION', b'')
        # token = auth.split(" ")
        # print (token)
        # token_validate = Token.objects.filter(key=token[1])[0]
        
        # if token_validate:
        #     print("hiii",token_validate)
        
        # else:
        #     return Response({
        #     'message': 'Username or password is invalid'
        # }, status=status.HTTP_401_UNAUTHORIZED)            