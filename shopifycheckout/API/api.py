from rest_framework.viewsets import ModelViewSet
from rest_framework import mixins, status
from rest_framework.response import Response
from .serializers import *
from .models import Checkout, Profile, Task, GmailAccount, Proxies, ShopifyUrl, BotTaskStatus
from rest_framework.decorators import detail_route, authentication_classes,\
    permission_classes
from rest_framework.authentication import BasicAuthentication
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt
#from anaconda_navigator.utils.py3compat import request
#from shopify.spiders import search, checkout
#from task_runner import task_runner



class CreateListMixin:
    """Allows bulk creation of a resource."""
    def get_serializer(self, *args, **kwargs):
        if isinstance(kwargs.get('data', {}), list):
            kwargs['many'] = True

        return super().get_serializer(*args, **kwargs)


class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
    print('Step 1')
    @csrf_exempt
    #@action(methods=['post'], detail=True, permission_classes=[AllowAny],
     #       url_path='perform-login', url_name='perform_login')
    def perform_login(self, request, format=None):
        print('Step 2')
                # import pdb
        # pdb.set_trace()
        data = request.data
        username = data.get('username', None)
        password = data.get('password', None)
        
        print('Step 3')
        
        user = authenticate(username=username, password=password)
        
        print('Step 4')
        
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

        


class CheckoutViewSet(ModelViewSet):
    queryset = Checkout.objects.all()
    serializer_class = CheckoutSerializer
    
    
class ProfileViewSet(ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer    
    
    
class TaskViewSet(CreateListMixin, ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    
    @detail_route(methods=['get','post','put'], url_path='perform-buy', url_name='perform-buy')
    def perform_buy(self, request, pk=None):
        print('perform buy fontionality')
        data = request.data
        print (data)
        
        current_task = Task.objects.get(pk=1)
        
        task_runner(current_task)
        
        return Response(
        {
            'status': 'success',
            'statusCode': status.HTTP_201_CREATED,
            'message': 'data received',
            'token': '',
            "id": 1,
        }, status=status.HTTP_201_CREATED)    
      
    
    
class GmailAccountViewSet(ModelViewSet):
    queryset = GmailAccount.objects.all()
    serializer_class = GmailAccountSerializer    
    
    
class ProxiesViewSet(ModelViewSet):
    queryset = Proxies.objects.all()
    serializer_class = ProxiesSerializer
    
    
        
class ShopifyUrlViewSet(ModelViewSet):
    queryset = ShopifyUrl.objects.all()
    serializer_class = ShopifySerializer
    
    
        
                
