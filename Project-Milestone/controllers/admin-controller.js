const Product = require('../models/product');
const Order = require('../models/order');

async function getProducts(req, res, next){
    try {
        const products = await Product.findAll();
        res.render('admin/products/products-admin', {products: products});
    } catch (error){
        next(error);
        return;
    }    
}

function getNewProduct(req, res){
    res.render('admin/products/new');
}

async function createNewProduct(req, res, next){
    const product = new Product({
        ...req.body,
        image: req.file.filename,
    });

    try{
        await product.save();
    } catch (error){
        next(error);
        return;
    }

    res.redirect('/admin/products-all');
}

async function getUpdateProduct(req, res, next){
    try {
    const product = await Product.findById(req.params.id);
    res.render('admin/products/update', {product: product})
    } catch (error){
        next(error);
    }
}

async function updateProduct(req, res, next){
    const product = new Product({
        ...req.body,
        _id: req.params.id
    });

    if (req.file) {
        product.replaceImage(req.file.filename);
    }

    try {
        await product.save();
    } catch (error){
        next(error);
        return;
    }
    res.redirect('/admin/products-all')
}

async function deleteProduct(req, res, next){
    let product
    try {
        product = await Product.findById(req.params.id);
        await product.remove();
    } catch(error){
        return NodeList(error);
    }

    res.json({message:'Deleted product!'});
}

async function getOrders(req, res, next) {
    try {
      const orders = await Order.findAll();
      res.render('admin/orders/admin-orders', {
        orders: orders
      });
    } catch (error) {
      next(error);
    }
  }
  
  async function updateOrder(req, res, next) {
    const orderId = req.params.id;
    const newStatus = req.body.newStatus;
  
    try {
      const order = await Order.findById(orderId);
  
      order.status = newStatus;
  
      await order.save();
  
      res.json({ message: 'Order updated', newStatus: newStatus });
    } catch (error) {
      next(error);
    }
  }  

module.exports = {
    getProducts: getProducts,
    getNewProduct: getNewProduct,
    createNewProduct: createNewProduct,
    getUpdateProduct: getUpdateProduct,
    updateProduct: updateProduct,
    deleteProduct: deleteProduct,
    getOrders: getOrders,
    updateOrder: updateOrder
};