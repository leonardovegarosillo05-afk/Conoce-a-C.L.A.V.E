# Conoce a C.L.A.V.E.
Página informativa de la Lista N.° 3 para el Municipio Escolar. Presenta al equipo, siete propuestas, enlaces a las dos herramientas disponibles y el plan de trabajo.

## Netlify
- Rama: main
- Directorio base: vacío
- Comando de compilación: node scripts/build.mjs
- Directorio de publicación: dist
- No necesita variables de entorno ni claves de API.

## Desarrollo
Con Node.js 22 o posterior:
```
node scripts/dev.mjs
```
Abre http://127.0.0.1:4180. Para construir: node scripts/build.mjs.

## Contenido
- index.html: estructura y contenido principal.
- app.js: perfiles, propuestas, filtros, menú y diálogos accesibles.
- styles.css: diseño adaptable, foco visible y movimiento reducido.
- assets/logo.svg: escudo original optimizado.
- plan.html: versión de lectura e impresión del plan.
- plan-data.js: documento Word codificado, descargado solo al solicitarlo.

Los perfiles muestran las fotografías proporcionadas por el equipo y los nombres completos de sus integrantes. No se inventan biografías, testimonios ni resultados. No hay formularios que recojan datos, cuentas ni rastreadores añadidos. Las herramientas externas aplican sus propias condiciones.

El cronograma y las metas de 2027 son propuestos y requieren coordinación institucional. El sitio distingue las herramientas disponibles de los proyectos del plan.
