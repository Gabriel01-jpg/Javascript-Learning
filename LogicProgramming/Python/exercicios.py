def modulo(a, b):
    m = a % b #Modulo recebe resto da divisão de a por b

    if(m < 0): #Se modulo menor que 0
        if(b < 0): #se divisor não é inteiro
            m = m - b #modulo recebe modulo - divisor
        else:
            m = m + b #se não modulo recebe modulo + divisor

    return m

a = int(input())
b = int(input())
m = modulo(a, b)
d = int((a - m) / b)
print(d, m)
