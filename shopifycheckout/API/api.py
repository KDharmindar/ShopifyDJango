from rest_framework.viewsets import ModelViewSet
from .serializers import *
from .models import Checkout, Profile, Task, GmailAccount, Proxies, ShopifyUrl
from rest_framework.decorators import detail_route, authentication_classes,\
    permission_classes
from rest_framework.authentication import BasicAuthentication
from dashing.permissions import IsAuthenticated, IsAdminUser
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt


class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
    print('Step 1')
    
    @csrf_exempt
    @detail_route(methods=['post'])
    def authenticate(self, request, format=None):
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
    
    
class TaskViewSet(ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer    
    
class GmailAccountViewSet(ModelViewSet):
    queryset = GmailAccount.objects.all()
    serializer_class = GmailAccountSerializer    
    
    
class ProxiesViewSet(ModelViewSet):
    queryset = Proxies.objects.all()
    serializer_class = ProxiesSerializer
    
    
        
class ShopifyUrlViewSet(ModelViewSet):
    queryset = ShopifyUrl.objects.all()
    serializer_class = ShopifySerializer
    
    
        
                