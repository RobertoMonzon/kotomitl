use kotomitldb;

SELECT * FROM kotomitldb.admin;
INSERT INTO admin(Nombre,Email,contrasenia) VALUES ('Roberto','roberto@kotomitl.com','robertokotomitl');
INSERT INTO admin(Nombre,Email,contrasenia) VALUES ('Ignacio','ignacio@kotomitl.com','ignaciokotomitl');
INSERT INTO admin(Nombre,Email,contrasenia) VALUES ('Bryan','bryan@kotomitl.com','bryankotomitl');
INSERT INTO admin(Nombre,Email,contrasenia) VALUES ('Aristeo','aristeo@kotomitl.com','aristeokotomitl');
INSERT INTO admin(Nombre,Email,contrasenia) VALUES ('Alexis','alexis@kotomitl.com','alexiskotomitl');

SELECT * FROM kotomitldb.publico;
INSERT INTO publico(nombrePublico) VALUES('Hombre');
INSERT INTO publico(nombrePublico) VALUES('Mujer');
INSERT INTO publico(nombrePublico) VALUES('Infante');

SELECT * FROM kotomitldb.tallas;
INSERT INTO tallas(nombreTallas) VALUES ('chica');
INSERT INTO tallas(nombreTallas) VALUES ('mediana');
INSERT INTO tallas(nombreTallas) VALUES ('grande');
INSERT INTO tallas(nombreTallas) VALUES ('extra grande');
INSERT INTO tallas(nombreTallas) VALUES ('extra extra grande');

SELECT * FROM kotomitldb.colores;
INSERT INTO colores(nombreColor) Values('blanco');
INSERT INTO colores(nombreColor) Values('azul');
INSERT INTO colores(nombreColor) Values('negro');

SELECT * FROM kotomitldb.productosgeneral;
INSERT INTO productosgeneral(nombre,origen,materiales,sugerencia,adicional,descripcion) VALUES ('Camisa Yucateca','Maya','nilon','lavar a mano','ideal para fiestas','tejido a mano');
INSERT INTO productosgeneral(nombre,origen,materiales,sugerencia,adicional,descripcion) VALUES ('Camisa Yucateca infantil','Maya','100% lino','Lavar a mano','Ideal para fiestas','Fabricada en taller familiar');
INSERT INTO productosgeneral(nombre,origen,materiales,sugerencia,adicional,descripcion) VALUES ('Blusa floreada de lino','Yucateco','100% lino','Lavar a mano','Ideal para fiestas','Tejida a mano');
INSERT INTO productosgeneral(nombre,origen,materiales,sugerencia,adicional,descripcion) VALUES ('Vestido floreado','Maya','100% de algodón','Coloreado de manera artesanal','Ideal para las épocas de calor','Tejido a mano');
INSERT INTO productosgeneral(nombre,origen,materiales,sugerencia,adicional,descripcion) VALUES ('Sandalias de piel','Maya','100% de piel','Fabricadas a mano','Nuevos modelos constantemente','Fabricado en un taller familiar');


SELECT * FROM kotomitldb.productoespecifico;
INSERT INTO productoespecifico(precio,cantidad,imagen,publico_idpublico,ProductosGeneral_productoid,tallas_tallasid,Colores_colorid) VALUES (200,255,'/kotomitl/src/images/productos-kotomitl',1,1,1,1);
INSERT INTO productoespecifico(precio,cantidad,imagen,publico_idpublico,ProductosGeneral_productoid,tallas_tallasid,Colores_colorid)  VALUES (200,50,'/kotomitl/src/images/productos-kotomitl',1,1,2,1);
INSERT INTO productoespecifico(precio,cantidad,imagen,publico_idpublico,ProductosGeneral_productoid,tallas_tallasid,Colores_colorid) VALUES (220,50,'/kotomitl/src/images/productos-kotomitl',1,1,3,1);
INSERT INTO productoespecifico(precio,cantidad,imagen,publico_idpublico,ProductosGeneral_productoid,tallas_tallasid,Colores_colorid) VALUES (230,50,'/kotomitl/src/images/productos-kotomitl',1,1,4,1);
INSERT INTO productoespecifico(precio,cantidad,imagen,publico_idpublico,ProductosGeneral_productoid,tallas_tallasid,Colores_colorid) VALUES (200,30,'/kotomitl/src/images/productos-kotomitl',1,1,3,2);


SELECT * FROM kotomitldb.usuario;
INSERT INTO usuario(nombre,apellido,email,telefono,password,direccion_direccionid) VALUES ('Juan','Perez','juan.perez@email.com',5501020304,'pa$$w0rd',1);
INSERT INTO usuario(nombre,apellido,email,telefono,password,direccion_direccionid) VALUES ('Luz','Galindo','luz.galindo@email.com',5569821586,'Pa$$W0rd',2);
INSERT INTO usuario(nombre,apellido,email,telefono,password,direccion_direccionid) VALUES ('Lucia','Brito','lucia.brito@email.com',5842381574,'PA$$w0rd',3);
INSERT INTO usuario(nombre,apellido,email,telefono,password,direccion_direccionid) VALUES ('Julio','Miranda','julio.miranda@email.com',5598742354,'pa$$w0Rd',4);
INSERT INTO usuario(nombre,apellido,email,telefono,password,direccion_direccionid) VALUES ('Esteban','Díaz','esteban.diaz@email.com',9932485795,'pa$$w0rD',5);


SELECT * FROM kotomitldb.direccion;
INSERT INTO direccion(calle,numero,cp,colonia,ciudad,estado) VALUES('reforma','1-b','09310','leyes de reforma','Iztapalapa','Ciudad de México');
INSERT INTO direccion(calle,numero,cp,colonia,ciudad,estado) VALUES('calle 2','30','44315','Luis colosio','Chalco','Estado de México');
INSERT INTO direccion(calle,numero,cp,colonia,ciudad,estado) VALUES('calle 3','54','44315','Luis colosio','Chalco','Estado de México');
INSERT INTO direccion(calle,numero,cp,colonia,ciudad,estado) VALUES('calle 4','02','44315','Luis colosio','Chalco','Estado de México');
INSERT INTO direccion(calle,numero,cp,colonia,ciudad,estado) VALUES('calle 5','02','44315','Luis colosio','Chalco','Estado de México');


SELECT * FROM kotomitldb.compra;
INSERT INTO compra(cantidad,direccion,fecha,usuario_usuarioid,usuario_direccion_direccionid) VALUES (255,'calle reforma 1b','20100101',1,1);
INSERT INTO compra(cantidad,direccion,fecha,usuario_usuarioid,usuario_direccion_direccionid) VALUES (255,'calle reforma 1b','20100101',2,2);
INSERT INTO compra(cantidad,direccion,fecha,usuario_usuarioid,usuario_direccion_direccionid) VALUES (255,'calle reforma 1b','20100101',3,3);
INSERT INTO compra(cantidad,direccion,fecha,usuario_usuarioid,usuario_direccion_direccionid) VALUES (255,'calle reforma 1b','20100101',4,4);
INSERT INTO compra(cantidad,direccion,fecha,usuario_usuarioid,usuario_direccion_direccionid) VALUES (255,'calle reforma 1b','20100101',5,5);
SELECT * FROM kotomitldb.entrega;
INSERT INTO entrega(fecha,status,compra_compraid,compra_usuario_usuarioid,compra_usuario_direccion_direccionid) VALUES ('20100102','entregado',1,1,1);
INSERT INTO entrega(fecha,status,compra_compraid,compra_usuario_usuarioid,compra_usuario_direccion_direccionid) VALUES ('20230102','entregado',2,2,2);
INSERT INTO entrega(fecha,status,compra_compraid,compra_usuario_usuarioid,compra_usuario_direccion_direccionid) VALUES ('20230822','entregado',3,3,3);
INSERT INTO entrega(fecha,status,compra_compraid,compra_usuario_usuarioid,compra_usuario_direccion_direccionid) VALUES ('20230818','entregado',4,4,4);
INSERT INTO entrega(fecha,status,compra_compraid,compra_usuario_usuarioid,compra_usuario_direccion_direccionid) VALUES ('20230102','entregado',5,5,5);
