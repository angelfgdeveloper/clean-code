## Codigo no probable
---

Es condigo dificil de testear
- Código con alto acoplamiento
- Código con muchas dependencias no inyectadas
- Dependencias en el contexto global (Tipo Singleton)

#### Debemos de tener en mente las pruebas desde la creación del código

## Optimizaciones prematuras
---

Mantener abiertas las opciones retrasando la toma de decisiones nos permite darle mayor relevancia a lo que es más importante en una aplicación.

No debemos de anticiparnos a los requisitos y desarrollar abstracciones innecesarias que puedan añadir complejidad accidental.

Complejidad accidental: 
 - Cuando implementamos una solución compleja a la minima indispensable.

 Complejidad esencial:
 - La complejidad es inherente al problema.

 ## Nombres poco descriptivos
---

 - Nombres de variables mal nombradas.
 - Nombre de clases genéricas.
 - Nombres de funciones mal nombradas
 - Ser muy especifico o demasiado genérico.

 ## Duplicidad de código
 ---
 
 No aplicar el principio DRY

 Real: 
 - Código es idéntico y cumple la misma función.
 - Un cambio implicaría actualizar todo el código idéntico en varios lugares.
 - Incrementa posibilidades de error humano al olvidar una parte para actualizar.
 - Mayor cantidad de pruebas innecesarias.

 Accidental:
 - Código luce similar pero cumple funciones distintas.
 - Cuando hay un cambio, sólo hay que modificar un sólo lugar.
 - Este tipo de duplicidad se puede trabajar con parámetros u optimizaciones.