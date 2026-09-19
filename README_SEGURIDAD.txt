BIGLIA SECURE PRO V4 - ANTI HACKEO - MACHAGAI
=============================================

SEGURIDAD:
- PIN hasheado SHA-256, no visible en localStorage
- Bloqueo 10 min tras 3 intentos fallidos
- Auto-bloqueo 2 min inactividad + blur al cambiar app
- Datos encriptados (localStorage ilegible sin PIN)
- Olvide PIN solo con pregunta secreta, NO con ?reset publico
- Sin texto clave por defecto visible

FUNCIONES PREVENTISTA:
- Clientes completo: comercio, titular, direccion, barrio/zona editable, tel, whatsapp*, CUIT, IVA, lista precios, saldo deuda rojo, dias visita, observaciones, GPS
- WhatsApp directo en cliente y en pedido (WA Cliente y WA Admin con mensaje profesional)
- Categorias y Zonas editables (agregar/quitar)
- Catalogo con stock, costo, proveedor, etc
- Pedidos con descuento, bultos, forma pago, total hoy/semana/mes
- Logo DB completo sin cortes, clickable vuelve a inicio
- Ajustes con cambiar clave, gestionar cats/zonas, pregunta secreta, backup JSON, CSV, borrar todo con PIN
- Footer MACHAGAI CHACO
- Offline PWA total instalable como app

PRIMER INICIO:
1. PIN: 1234
2. Te pide pregunta secreta y respuesta (ej: Nombre primer perro / Toby)
3. Te obliga a cambiar PIN por uno de 6 digitos seguro
4. Listo blindado

INSTALACION GITHUB:
Subi los 4 archivos: index.html, logo.png, manifest.json, service-worker.js a tu repo Distribuidora-Biglia
Settings > Pages > main / root
Abri link una vez con internet para instalar offline
Instala como app: Chrome > 3 puntos > Instalar app

Si olvidas PIN: toca Olvide mi PIN > responde pregunta secreta > nuevo PIN
