const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  // Truncate tables in reverse order: product, category, tag, producttag
  await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
  
  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

  await seedProductTags();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  await sequelize.query('SET FOREIGN_KEY_CHECKS = 1');

  process.exit(0);
};
