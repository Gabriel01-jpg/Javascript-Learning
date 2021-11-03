n = int(input(""))
contador = 0
ataques = []
for i in range(n):
    sequencia = input("")
    ataques.append(sequencia)


for itens in ataques:
    if 'CD' in itens:
        contador = contador + 1
        pass
        

print(n - contador)