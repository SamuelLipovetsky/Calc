from django.urls import  path
from mat import views

app_name= "mat"
urlpatterns = [

  path("",views.main,name="main"),
  path("triangulo",views.triangulo,name="triangulo"),
  path("retangulo",views.retangulo,name="retangulo"),
  path("circulo",views.circulo,name="circulo"),
  path("quadrado",views.quadrado,name="quadrado"),

 ]