from django.shortcuts import render

def index(request):
    return render(request, 'index.html')
def pricing(request):
    return render(request, 'pricing.html')
def contact(request):
    return render(request, 'contact.html')
def terms(request):
    return render(request, 'terms.html')
def privacy_policy(request):
    return render(request, 'privacy_policy.html')