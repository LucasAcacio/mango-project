from werkzeug.security import generate_password_hash, check_password_hash

x = generate_password_hash("12345")
print(size(x))