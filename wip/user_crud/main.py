import pymysql
from app import app
from tables import Results
from db_config import mysql
from flask import flash, render_template, request, redirect

##################

@app.route('/')
def front_page():
    return render_template('front_page.html')

@app.route('/user_add')
def add_user_page():
    return render_template('user_add.html')   

@app.route('/add', methods=['POST'])
def add_user():
    conn = None
    cursor = None
    try:
        input_name = request.form['inputName']
        input_email = request.form['inputEmail']
        input_password = request.form['inputPassword']   
        # validate the received values  
        if input_name and input_email and input_password and request.method == 'POST':
            # save edits
            value = None
            sql = "INSERT INTO agricultor(agricultor_id, nome, email, senha) VALUES(%s, %s, %s, %s)"
            data = (value, input_name, input_email, input_password)
            conn = mysql.connect()
            cursor = conn.cursor()
            cursor.execute(sql, data)
            conn.commit()
            flash('User added successfully!')
            return redirect('/')
        else:
            return 'Error while adding user'
    except Exception as e:
        print(e)
    finally:
        cursor.close() 
        conn.close()

@app.route('/user_login', methods=['POST'])
def login_try():
    conn = None
    cursor = None
    try:
        input_email = request.form['email']
        input_password = request.form['password']
        if input_email and input_password and request.method == 'POST':
            conn = mysql.connect()
            cursor = conn.cursor(pymysql.cursors.DictCursor)
            cursor.execute("SELECT * FROM agricultor WHERE email=%s", input_email)
            row = cursor.fetchone()
            if input_password in row["senha"]:
                return redirect('/user_page')
            else:
                print("ERROR - Invalid password")
                return redirect('/') 

    except Exception as e:
        print(e)

    finally:
        cursor.close() 
        conn.close()

@app.route('/user_page',)
def user_page():
    conn = None
    cursor = None
    try:
        conn = mysql.connect()
        cursor = conn.cursor(pymysql.cursors.DictCursor)
        cursor.execute("SELECT * FROM cultura")
        rows = cursor.fetchall()
        table = Results(rows)
        table.border = True
        return render_template('user_page.html', table=table)
    except Exception as e:
        print(e)
    finally:
        cursor.close() 
        conn.close()

@app.route('/plant_add_request/<int:id>', methods=['POST'])
def add_plant():
    

@app.route('/plant_edit_request/<int:id>', methods=['POST'])
def edit_plant():


@app.route('/plant_delete_request/<int:id>', methods=['POST'])
def delete_plant():

if __name__ == "__main__":
    app.run()
