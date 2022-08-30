module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    }
  },
  {
    timestamps: false,
    tableName: 'PostCategories',
  });

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost,
      { foreignKey: 'categoryId', as: 'blogPosts', through: PostCategory, otherKey: 'postId' }
    );
    models.BlogPost.belongsToMany(models.Category,
      { foreignKey: 'postId', as: 'categories', through: PostCategory, otherKey: 'categoryId' }
    );
  }
  
  return PostCategory;
}
