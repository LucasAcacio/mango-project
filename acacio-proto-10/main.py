from app import app, db
from flask import render_template, request, redirect, url_for
from app.models import User, Item, Weather, get_weather
from flask_login import login_user, logout_user, current_user


@app.route('/teste')
def teste():
    return render_template('teste.html')

@app.route('/')
def home():
    return render_template('home.html', data=Item.query.all(), weather=get_weather('recife'))

@app.route('/register', methods=['GET','POST'])
def register():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        password = request.form['password']

        user = User(name, email, password)
        db.session.add(user)
        db.session.commit()

        return redirect(url_for('homepage'))

    return render_template('register_users.html')

@app.route('/login', methods=['GET','POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']

        user = User.query.filter_by(email=email).first()

        if not user or not user.verify_password(password):
            return redirect(url_for('login'))

        login_user(user)
        return redirect(url_for('userpage'))

    return render_template('login.html')

@app.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('login'))

@app.route('/userpage', methods=["GET", "POST"])
def userpage():
    if current_user.is_authenticated:
        usr = current_user

        return render_template('userpage.html', data=Item.query.filter_by(login_id=usr.id).all())
    else:
        return redirect(url_for('home'))

@app.route('/itemform', methods=['GET','POST'])
def itemform():
    if current_user.is_authenticated:
        user_id = current_user.id

        if request.method == 'POST':
            name = request.form['name']
            area = request.form['area']
            qpessoas = request.form['qpessoas']
            dplantada = request.form['dplantada']
            dcolheita = request.form['dcolheita']
            qplantada = request.form['qplantada']
            qcolheita = request.form['qcolheita']
            defensivo = request.form['defensivo']

            if name and area and qpessoas and dplantada and qplantada:
                new = Item(user_id, name, area, qpessoas, dplantada, qplantada)
                
                if dcolheita and qcolheita:
                    new.SetColheita(dcolheita, qcolheita)

                if defensivo:
                    new.SetDefensivo(defensivo)

                db.session.add(new)
                db.session.commit()

                return redirect(url_for('userpage'))

        return render_template('itemform.html')

    else:
        return redirect(url_for('home'))

@app.route('/deleteitem', methods=['GET','POST'])
def deleteitem():
    pid = request.args.get('pid')
    target = Item.query.filter_by(id=pid).first()
    if target:
        db.session.delete(target)
        db.session.commit()
    
    return redirect(url_for('userpage'))

@app.route('/edititem', methods=['GET','POST'])
def edititem():
    pid = request.args.get('pid')
    target = Item.query.filter_by(id=pid).first()
    if target:
        if request.method == 'POST':
            name = request.form['name']
            area = request.form['area']
            qpessoas = request.form['qpessoas']
            dplantada = request.form['dplantada']
            dcolheita = request.form['dcolheita']
            qplantada = request.form['qplantada']
            qcolheita = request.form['qcolheita']
            defensivo = request.form['defensivo']

            if name:
                target.SetNome(name)

            if area:
                target.SetArea(area)
            if qpessoas:
                target.SetQpesoas(qpessoas)
            if dplantada:
                target.SetDplantacao(dplantada)
            if dcolheita:
                target.SetDcolheita(dcolheita)
            if qplantada:
                target.SetQplatacao(qplantada)
            if qcolheita:
                target.SetQcolheita(qcolheita)
            if defensivo:
                target.SetDefensivo(defensivo)

            db.session.commit()

            return redirect(url_for('userpage'))

        return render_template('edititem.html', data=target)

    return redirect(url_for('userpage'))

app.run(debug=True)