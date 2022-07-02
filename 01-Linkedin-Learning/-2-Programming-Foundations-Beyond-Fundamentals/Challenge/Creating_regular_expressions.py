import re

five_digit_zip = '89100'
nine_digit_zip = '89100-0002'
phone_number = '234-567-8901'
five_figit_expression = r'\d{5}'
print(re.search(five_figit_expression, five_digit_zip))
print(re.search(five_figit_expression, nine_digit_zip))
print(re.search(five_figit_expression, phone_number))

