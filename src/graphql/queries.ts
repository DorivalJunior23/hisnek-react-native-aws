/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getProduct = /* GraphQL */ `query GetProduct($id: ID!) {
  getProduct(id: $id) {
    id
    title
    description
    image
    images
    avgRating
    ratings
    price
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProductQueryVariables,
  APITypes.GetProductQuery
>;
export const listProducts = /* GraphQL */ `query ListProducts(
  $filter: ModelProductFilterInput
  $limit: Int
  $nextToken: String
) {
  listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      image
      images
      avgRating
      ratings
      price
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProductsQueryVariables,
  APITypes.ListProductsQuery
>;
export const getCartProduct = /* GraphQL */ `query GetCartProduct($id: ID!) {
  getCartProduct(id: $id) {
    id
    quantity
    products {
      id
      title
      description
      image
      images
      avgRating
      ratings
      price
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    cartCardProductsId
    cartProductProductsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCartProductQueryVariables,
  APITypes.GetCartProductQuery
>;
export const listCartProducts = /* GraphQL */ `query ListCartProducts(
  $filter: ModelCartProductFilterInput
  $limit: Int
  $nextToken: String
) {
  listCartProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      quantity
      createdAt
      updatedAt
      cartCardProductsId
      cartProductProductsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCartProductsQueryVariables,
  APITypes.ListCartProductsQuery
>;
export const getCart = /* GraphQL */ `query GetCart($id: ID!) {
  getCart(id: $id) {
    id
    cardProducts {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetCartQueryVariables, APITypes.GetCartQuery>;
export const listCarts = /* GraphQL */ `query ListCarts(
  $filter: ModelCartFilterInput
  $limit: Int
  $nextToken: String
) {
  listCarts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListCartsQueryVariables, APITypes.ListCartsQuery>;
