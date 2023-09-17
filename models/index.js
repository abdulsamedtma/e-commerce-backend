// Import all models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, { // Defines the relationship of the Product model to the Category model
  foreignKey: 'category_id', // Defines the category_id column as the foreign key for the Product model
});

// Categories have many Products
Category.hasMany(Product, { // Defines the relationship of the Category model to the Product model
  foreignKey: 'category_id', // Defines the category_id column as the foreign key for the Product model
});

// Products belongToMany Tags (through ProductTag)
Category.belongsToMany(Tag, { // Defines the relationship of the Product model to the Tag model through the ProductTag model
  through: ProductTag, // Specifies the ProductTag model as the through table
  foreignKey: 'product_id', // Defines the category_id column as the foreign key for the ProductTag model
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { // Defines the relationship of the Tag model to the Product model through the ProductTag model
  through: ProductTag, // Specifies the ProductTag model as the through table
  foreignKey: 'tag_id', // Defines the tag_id column as the foreign key for the ProductTag model
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
