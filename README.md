# Ecostore

Ecostore is a shopping website created with React.Js in the frontend and Ruby on Rails as API in the backend that allows users to buy eco products.

### Features

* Authentication
  * Session is authenticated in the backend. All queries return data that corresponds to the proper user.
  * Users can sign up and log in from any page in the app.
* Create
  * User can create an order for any item or items
* Reviews on Items
  * Users can post reviews for different items.
* Search
  * Users can search items by name
* Add Items
  * Users can add items to their cart
* Update/Remove Cart Items
  * Users can update Cart Item quantity
  * Users can delete Cart Items

### Tech Stack
Frontend

* React.js
* React Router [^5.1.2] - Declarative Routing
* React Router Dom [^5.1.2] - Declarative Routing
* Semantic UI React
* Custom CSS3 styling
* React Stripe Checkout [^2.6.3]

[Backend ~ API](https://github.com/nisayana/ecostore_backend)

* Ruby [2.6.1]
* Rails [~> 5.2.3] - MVC web framework used as an API
* Bcrypt [~> 3.1.7] - Gem for encryption and securing user passwords
* Dotenv - Rails gem for securing API Keys
* Active Model Serializers - Serializing API routes to JSON
* JWT - securing tokens
* PostgreSQL [>= 0.18, < 2.0] - Database
* Stripe - Stripe Ruby gives access to the Stripe API from applications written in the Ruby language
* Cloudinary

