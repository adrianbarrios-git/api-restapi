"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.querys = void 0;
var querys = {
  getAllProducts: "SELECT * FROM [TEST].[dbo].[DirTelefonico] ",
  getProducById: "SELECT * FROM [TEST].[dbo].[DirTelefonico] Where dir_NombreSearch like '%' + @id + '%' ",
  addNewProduct: "INSERT INTO [webstore].[dbo].[Products] (name, description, quantity) VALUES (@name,@description,@quantity);",
  deleteProduct: "DELETE FROM [webstore].[dbo].[Products] WHERE Id= @Id",
  getTotalProducts: "SELECT COUNT(*) FROM [TEST].[dbo].[DirTelefonico]",
  updateProductById: "UPDATE [webstore].[dbo].[Products] SET Name = @name, Description = @description, Quantity = @quantity WHERE Id = @id",
  getAllInventoryProducts: "SELECT pro_db, pro_modelo, pro_existencia, pro_reservado, pro_disponible FROM [TEST].[dbo].[erp_GetInventario_with_db] ORDER BY pro_modelo",
  getAllCatProducts: "SELECT art_db ,art_modelo,art_descripcion1,art_descripcion2,art_categoria,art_familia,art_fabricante,art_clave_fabricante,art_unidad,art_tipo,art_precio_lista,art_precio_minimo,art_precio_anterior,art_estatus,convert(varchar, art_ultimo_cambio, 120) AS art_ultimo_cambio, convert(varchar, art_alta, 120) AS art_alta,art_arancel,art_precio_2,art_precio_3,art_precio_4,art_precio_5,art_precio_6,art_precio_7,art_precio_8,art_precio_9,art_precio_10,art_estatus_precio,art_estatus_costo FROM dbo.erp_GetProductoLote_with_db ORDER BY art_alta DESC "
};
exports.querys = querys;