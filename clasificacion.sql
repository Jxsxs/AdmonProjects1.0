INSERT INTO public.clasificacion(nombre_clasificacion)
    VALUES ('Archivos lógicos internos'),
    ('Archivos de interface externa'),
    ('Entradas externos'),
    ('Salidas externas'),
    ('Consultas externas');

select * from clasificacion;

select * from complejidad;

insert into complejidad (nombre_complejidad) 
	values('Simples'),
	('Medios'),
	('Complejos')

select * from tipo_puntos_funcion;

insert into tipo_puntos_funcion (id_clasificacion, id_complejidad, valor_ponderacion)
	values
		(1,1,7),
		(1,2,10),
		(1,3,15),
		(2,1,5),
		(2,2,7),
		(2,3,10),
		(3,1,3),
		(3,2,4),
		(3,3,6),
		(4,1,4),
		(4,2,5),
		(4,3,7),
		(5,1,3),
		(5,2,4),
		(5,3,6)

select * from plan_proyecto where id_pp = 10;

select car.nombre_carpeta, pf.nombre_puntos_funcion as puntos, pf.descripcion_puntos_funcion, cla.nombre_clasificacion, comp.nombre_complejidad,tpf.valor_ponderacion, pp.nombre_proyecto 
from puntos_funcion as pf join clasificacion as cla on pf.id_clasificacion = cla.id_clasificacion 
join complejidad as comp on pf.id_complejidad = comp.id_complejidad 
join plan_proyecto as pp on pf.id_pp = pp.id_pp
join tipo_puntos_funcion as tpf on cla.id_clasificacion = tpf.id_clasificacion and comp.id_complejidad = tpf.id_complejidad
join carpetas as car on car.id_carpeta = pp.id_carpeta
--where tpf.valor_ponderacion = 3;
