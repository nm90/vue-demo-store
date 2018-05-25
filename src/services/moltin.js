import { gateway as MoltinGateway } from '@moltin/sdk'

const Moltin = MoltinGateway({
  client_id: 'wb8Ra9frbnKRzZTz8yJLI7NLnEhr1uXGoV2cwqRE'
})

export default {

  getHomepageProducts () {
    return Moltin.Products.Filter({}).With('files').Limit(8).All()
  },

  findBySlug (slug) {
    return Moltin.Products.Filter({
      eq: {
        slug: slug
      }
    }).With(['files', 'brands']).Limit(1).All()
  },

  getCart () {
    return Moltin.Cart.Items()
  },

  addToCart (productId, qty) {
    return Moltin.Cart.AddProduct(productId, qty)
  },

  removeFromCart (itemId) {
    return Moltin.Cart.RemoveItem(itemId)
  },

  checkout (checkoutData) {
    return Moltin.Cart.Checkout(checkoutData)
  },

  pay (orderId, paymentData) {
    return Moltin.Orders.Payment(orderId, paymentData)
  }

}
