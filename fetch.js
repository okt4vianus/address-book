async function getMerchandise() {
  const response = await fetch(
    "https://amazingsafari-backend.haidar.dev/products"
  );
  const products = await response.json();

  renderProducts(products);
}

function renderProducts(products) {
  console.log(`
  DISPLAY ALL MERCHANDISE - ${products.length} records
  _________________________________________________`);

  products.forEach((product) => {
    const createdAt = formatDateTime(product.createdAt);
    const updatedAt = formatDateTime(product.updatedAt);

    console.log(`
      ID          : ${product.id}
      Slug        : ${product.slug}
      Name        : ${product.name}
      Image URL   : ${product.imageURL}
      Price       : ${product.price}
      Description : ${product.description}
      SKU         : ${product.sku}
      Created At  : ${createdAt}
      Updated At  : ${updatedAt}`);
  });
}

function formatDateTime(date) {
  if (!date) return null;

  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// getMerchandise();
