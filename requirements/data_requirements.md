### Requerimientos y Restricciones de los Campos

#### 1. Fecha de Nacimiento
- **Formato:** DD/MM/AAAA
- **Validación:** campo valido por medio de selección de fecha (el usuario no puede escribir fecha)
- **Restricción de Edad:** El usuario debe ser mayor de 18 años.
- **Campo Obligatorio:** Sí.

#### 2. Sexo
- **Opciones:** Masculino, Femenino, No especificar.
- **Formato:** Lista desplegable.
- **Campo Obligatorio:** ¿?¿?

#### 3. ID (Nombre de Usuario)
- **Formato:** Alfanumérico.
- **Restricciones:** sin espacios (el espacio se elimina de manera automática cuando se mueve el focus del campo) 
- **Longitud:** Entre 5 y 10 caracteres.
- **Unicidad:** Debe ser único paraa toda la base de datos.
- **Validación:** No debe contener caracteres especiales (solo letras y números).
- **Campo Obligatorio:** Sí.

#### 4. Nombre
- **Formato:** Texto.
- **Restricciones:** solo caracteeres del alfabeto latino. No permite caracteres especiales (solo consierar el uso de la ñ) 
- **Longitud:** Entre 2 y 12 caracteres.
- **Validación:** Solo letras y espacios.
- **Campo Obligatorio:** Sí.

#### 5. Correo Electrónico
- **Formato:** Formato de correo electrónico válido (e.g., usuario@dominio.com).
- **Unicidad:** Debe ser único.
- **Campo Obligatorio:** ¿?¿?

#### 6. Contraseña
- **Formato:** Alfanumérico y caracteres especiales.
- **Restricciones:** sin espacios (el espacio se elimina de manera automática cuando se mueve el focus del campo) 
- **Longitud:** Mínimo 8 caracteres.
- **Validación:** Debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.
- **Campo Obligatorio:** Sí.

#### 7. Teléfono
- **Formato:** Numérico.
- **Restricciones:** sin espacios (el espacio se elimina de manera automática cuando se mueve el focus del campo) 
- **Longitud:** 10 dígitos (hacerlo específico por país).
- **Validación:** Solo números, no espacios
- **Campo Obligatorio:** Sí.

#### 8. DNI
- **Formato:** Alfanumérico.
- **Longitud:** Entre 7 y 15 caracteres.
- **Validación:** Solo números y letras.
- **Campo Obligatorio:** Sí.
