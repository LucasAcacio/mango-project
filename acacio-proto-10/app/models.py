from datetime import date
import requests
import json

from sqlalchemy.sql.schema import ForeignKey
from app import db, login_manager
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash

@login_manager.user_loader
def get_user(user_id):
    return User.query.filter_by(id=user_id).first()

def get_cultura(item_id):
    return Item.query.filter_by(id=item_id).first()

def get_weather(city):
    item = Weather.query.filter_by(city=city, data=date.today())
    if item:
        return item
    else:
        weather = Weather(city)
        db.session.add(weather)
        db.session.commit()

        return Weather.query.filter_by(city=city, date=date.today())

 ##############USER CLASS###################
class User(db.Model, UserMixin):
    __tablename__ = 'login'
    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    name = db.Column(db.String(84), nullable=False)
    email = db.Column(db.String(84), nullable=False, unique=True)
    password = db.Column(db.String(128), nullable=False)
    
    def __init__(self, name, email, password):
        self.name = name
        self.email = email
        self.password = generate_password_hash(password)

    def verify_password(self, password):
        return check_password_hash(self.password, password)

#################ITEM CLASS#####################
class Item(db.Model):
    __tablename__ = 'cultura'
    login_id = db.Column(db.Integer, ForeignKey(User.id))
    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    cultura_name = db.Column(db.String(128), nullable=False)
    aream2 = db.Column(db.Integer, nullable=False) 
    quantidade_pessoas = db.Column(db.Integer, nullable=False) 
    data_plantacao = db.Column(db.Date, nullable=False)
    data_colheita = db.Column(db.Date)
    quantitade_plantada = db.Column(db.Integer, nullable=False)
    quantidade_colheita = db.Column(db.Integer)
    defensivos_agricolas = db.Column(db.Boolean) 


    def __init__(self, login_id, cultura_name, aream2, quantidade_pessoas, data_plantacao, quantidade_plantada):
        self.login_id = login_id
        self.cultura_name = cultura_name
        self.aream2 = aream2
        self.quantidade_pessoas = quantidade_pessoas
        self.data_plantacao = data_plantacao
        self.quantitade_plantada =  quantidade_plantada

    def SetColheita(self, data_colheita, quantidade_colheita):
        self.data_colheita =  data_colheita
        self.quantidade_colheita = quantidade_colheita

    def SetName(self, name):
        self.cultura_name = name

    def SetArea(self, area):
        self.aream2 = area
    
    def SetQpessoas(self, qpessoas):
        self.quantidade_pessoas = qpessoas

    def SetDplantacao(self, data):
        self.data_plantacao = data

    def SetDcolheita(self, data):
        self.data_colheita = data

    def SetQplantacao(self, quant):
        self.quantitade_plantada = quant

    def SetQcolheita(self, quant):
        self.quantidade_colheita = quant

    def SetDefensivo(self, defensivo_agricola):
        if defensivo_agricola == 's' or 'sim':
            self.defensivos_agricolas = True
        if defensivo_agricola == 'n' or 'nao':
            self.defensivos_agricolas = False

#############WEATHER CLASS################
class Weather(db.Model):
    __tablename__ = 'weather'
    city = db.Column(db.String(128), primary_key=True, nullable=False)
    weather = db.Column(db.String(128), nullable=False)
    temp_min = db.Column(db.String(128), nullable=False)
    temp_max = db.Column(db.Float, nullable=False)
    humidity = db.Column(db.Integer, nullable=False)
    data = db.Column(db.Date, nullable=False)

    def __init__(self, city):
        attributes = getWeather(city)
        self.city = attributes.get('city')
        self.weather = attributes.get('description')
        self.temp_min = attributes.get('temp_min')
        self.temp_max = attributes.get('temp_max')
        self.humidity = attributes.get('humidity')
        self.data = date.today()

    def getWeather(name):
        url = "https://community-open-weather-map.p.rapidapi.com/weather"

        querystring = {"q":f"{name},br","lat":"0","lon":"0","callback":"test","id":"2172797","lang":"null","units":"metric","mode":"xml"}

        headers = {
            'x-rapidapi-host': "community-open-weather-map.p.rapidapi.com",
            'x-rapidapi-key': "8e6bb6cc83mshce79fd442877581p1c343fjsnf6c9e81e8e16"
        }

        response = requests.request("GET", url, headers=headers, params=querystring)

        json_string = response.text[5:-1]
        obj = json.loads(json_string)

        weather = obj.get('weather')
        main = obj.get('main')
        name = obj.get('name')

        ##RETURNING WANTED ATTRIBUTES
        attributes = {'city': f"{name}",
                    'description': f"{weather[0].get('description')}", 
                    'temp_min': f"{main.get('temp_min')}", 
                    'temp_max': f"{main.get('temp_max')}", 
                    'humidity': f"{main.get('humidity')}"}

        return attributes
# city = name 
# weather = weather[0].get(description)
# temp_min = main.get('temp_min')
# temp_max = main.get('temp_max')
# humidity = main.get('humidity')