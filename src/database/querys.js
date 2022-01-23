export const querys = {
    getAllProducts: "SELECT * FROM [TEST].[dbo].[DirTelefonico]",
    getProducById: "SELECT * FROM [TEST].[dbo].[DirTelefonico] Where dir_Extension = @Id",
    addNewProduct: "INSERT INTO [webstore].[dbo].[Products] (name, description, quantity) VALUES (@name,@description,@quantity);",
    deleteProduct: "DELETE FROM [webstore].[dbo].[Products] WHERE Id= @Id",
    getTotalProducts: "SELECT COUNT(*) FROM [TEST].[dbo].[DirTelefonico]",
    updateProductById: "UPDATE [webstore].[dbo].[Products] SET Name = @name, Description = @description, Quantity = @quantity WHERE Id = @id",
};