
select c.nombre_clasificacion, com.nombre_complejidad, tipo.valor_ponderacion, count(tipo.id_complejidad) as cantidad, 
(tipo.valor_ponderacion * count(tipo.id_complejidad)) as "Total por tipo" from tipo_puntos_funcion as tipo
join 
clasificacion as c on tipo.id_clasificacion = c.id_clasificacion
join 
complejidad as com on tipo.id_complejidad = com.id_complejidad
join
puntos_funcion as pf on tipo.id_complejidad = pf.id_complejidad and tipo.id_clasificacion = pf.id_clasificacion 
--where c.nombre_clasificacion = 'Archivos lógicos internos'
group by c.nombre_clasificacion, com.nombre_complejidad, tipo.valor_ponderacion
having count(tipo.id_complejidad) >= 0