from re import S

from sqlalchemy.sql.schema import ForeignKey
from app import db, login_manager
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash

@login_manager.user_loader
def get_user(user_id):
    return User.query.filter_by(id=user_id).first()

def get_cultura(item_id):
    return Item.query.filter_by(id=item_id).first()

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