from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.views import APIView
from kjhack import settings
import os
import pickle
import cv2
import keras
from .models import Predictor
import numpy

class call_model(APIView):
    def get(self,request):
        if request.method == 'GET':
            print(settings.BASE_DIR)
            model_path = os.path.join(settings.BASE_DIR,r"predictor\model\network.h5")
            model = keras.models.load_model(model_path)
            path = os.path.join(settings.BASE_DIR,r"predictor\model\OIP.jpg")
            img = cv2.imread(path)
            img = cv2.resize(img,(224,224))
            def prepare(filepath):
                IMG_SIZE = 224
                img_array = cv2.imread(filepath)
                new_array = cv2.resize(img_array, (IMG_SIZE, IMG_SIZE))
                return new_array.reshape(-1, IMG_SIZE, IMG_SIZE, 3)
            score = model.predict(prepare(path))
            score = score*100
            arr = ['cyclone','earthquake','flood','wildfire']
            max_i,max_s = -1,-1
            score_list = score.tolist()
            for i in range(4):
                if score_list[0][i] > max_s:
                    max_s=score_list[0][i]
                    max_i=i
            dict = {'Disaster': arr[max_i], 'Chances':max_s}
            return JsonResponse(dict, safe = False)

class ML(APIView):
    def post(self,request):
        if request.method == 'POST':
            print(settings.BASE_DIR)
            model_path = os.path.join(settings.BASE_DIR,r"predictor\model\network.h5")
            model = keras.models.load_model(model_path)
            image = request.data['image']
            pr = Predictor.objects.create(image = image)
            pr.save()
            path = os.path.join(pr.image.path)
            img = cv2.imread(path)
            img = cv2.resize(img,(224,224))
            def prepare(filepath):
                IMG_SIZE = 224
                img_array = cv2.imread(filepath)
                new_array = cv2.resize(img_array, (IMG_SIZE, IMG_SIZE))
                return new_array.reshape(-1, IMG_SIZE, IMG_SIZE, 3)
            score = model.predict(prepare(path))
            score = score*100
            arr = ['cyclone','earthquake','flood','wildfire']
            max_i,max_s = -1,-1
            score_list = score.tolist()
            for i in range(4):
                if score_list[0][i] > max_s:
                    max_s=score_list[0][i]
                    max_i=i
            if max_s < 50:
                dict = {'Congrats':"No Disaster"}
            else:
                dict = {'Disaster': arr[max_i], 'Chances':max_s}
            return Response(dict)