import random
import pov
import matplotlib
'''
estado
0 sano verde
1 enfermo rojo
2 recuperado azul
3 vacunado blanco
4 muerto negro 
'''
class persona:
    estado = 0
    contactos =[]
    diaContagios = 0
    def __init__(self,e,c, dc):
        self.estado = e
        self.contactos = c
        self.diaContagios = dc
    def creaPobInicial(n):
        poblacion = []
        # son dos contadores for porque se crean poblaciones bidimensionales
        for c1 in range(n):
            a = []
            for c2 in range(n):
                contactos = []
                for cc in range(10): # contador de contactos, cc = contador de contactos/vecinos cada uno va a tener 10 contactos
                    alex = random.randint(-3,3)
                    aley = random.randint(-3,3)
                    if(alex != 0 and aley!=0):
                        contactos.append([(c1+alex),(c2+aley)%n])
                    # las 3 lineas siguientes agregan un contacto de cualquier lugar
                    alex = random.randint(0,n-1)
                    aley  = random.randint(0, n-1)
                    if (alex!= c1) and (aley!=c2):
                        contactos.append([alex, aley])
                    a.append(persona(0,contactos,0))
                    poblacion.append(a)
                    return poblacion


# su vecino de la derecha es (x+1)%n
    



