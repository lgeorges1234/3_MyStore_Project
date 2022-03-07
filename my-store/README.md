# Online storefront frontend API

## Table of contents

* [General info](#general-info)
* [Technologies](#technologies)
* [Getting Started](#getting-started)
* [Views and angular's modules](#views-and-angulars-modules)
* [API call](#api-call)
* [Available Scripts](#available-scripts)
---

## General info


My Store is an Angular application that allows customers to buy online products. 
The application fetch a list of products and presents them through the landing page. A user can add a product to it's cart either from the list of products or from a detail's product page. Once the cart is fill in, a navigation link allows the user to access the cart section of the site where the cart is summarized and, after completing users informations, ready to be submited. 
Three

---

## Technologies

* Angular 13

## Getting Started

 <script>$git clone https://github.com/lgeorges1234/3_MyStore_Project.git</script>
 <script>$cd my-store</script>
 <script>$npm install</script>
 <script>$ng-serve</script>
 Go to localhost:4200 in your browser
 
---

## Views and Angular's modules

The application currently contains 2 featured modules, each one allowing lazy-loading:
* Product module :
> "/product"                      : landing page of the site. It contains the list of available products. Picture's product allows the user to access the product's page details.
> "/product/:id"                  : product page details.

* Cart module:
> "/cart"                         : cart page. It contains the cart fill in with all articles, the total sum and a form allowing a user to complete it's order.
> "cart/confirmation/:fullname    : confirmation page. The user receive a confirmation that it's order has been taken into accompt and will soon be proceed.

---






