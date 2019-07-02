from django.shortcuts import render
from django.http import HttpResponse
from .models import *



def main(request):
    
    return render(request,"main.html")

def triangulo(request):
    
    return render(request,"triangulo.html")

def quadrado(request):
    
    return render(request,"quadrado.html")

def circulo(request):
    
    return render(request,"circulo.html")

def retangulo(request):

    return render(request,'retangulo.html')