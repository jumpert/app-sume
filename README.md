# Sistema Unificado de Movimientos y Egresos (SUME)

SUME es un sistema integral para gestionar las finanzas personales o familiares. 
Permite manejar diversas cuentas bancarias o ficticias, registrar ingresos y egresos 
fijos o variables, realizar transferencias entre cuentas propias o de otros 
miembros del grupo familiar y obtener reportes estadísticos.

El sistema está pensado como una aplicación web *mobile first* alojada en la nube. 
Enviará notificaciones de vencimientos o fechas de pago y mostrará gráficos y 
estadísticas para visualizar el comportamiento financiero en distintos rubros.

Tecnologías previstas:
- **Frontend**: Angular 19
- **Backend**: Node.js 22
- **Base de datos**: MySQL

## Estructura del proyecto
- `backend/` – código fuente del servidor Node.js.
- `frontend/` – (pendiente) aplicación Angular.

## Uso básico del backend
```bash
cd backend
npm install
npm start
```

El backend expone endpoints REST sencillos para gestionar cuentas y
transacciones. Algunos ejemplos:

```bash
GET  /accounts          # lista de cuentas
POST /accounts          # crea una cuenta
GET  /transactions      # movimientos registrados
POST /transactions      # registra un ingreso o egreso
```

Para conectarse a la base de datos es posible definir las siguientes
variables de entorno en un archivo `.env`:

```
DB_HOST=localhost
DB_USER=sume
DB_PASS=password
DB_NAME=sume
```
