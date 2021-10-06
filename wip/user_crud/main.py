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

if __name__ == "__main__":
    app.run()
